import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import fs from 'node:fs'
import path from 'node:path'
import Anthropic from '@anthropic-ai/sdk'

import { getAnthropicClient, ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import { runCron } from '@/lib/cron/observability'

/**
 * GET /api/cron/blog-generate
 *
 * SAFE, GATED automated blog pipeline (runs every 12 hours; see vercel.json).
 *
 * It does NOT publish to `main`. On success it opens a GitHub Pull Request so a
 * human approves before anything goes live. This is deliberate: an ungated
 * high-frequency generator would create thin / near-duplicate posts that
 * Google's scaled-content-abuse systems penalise. The flow is:
 *
 *   1. CRON_SECRET auth (same Bearer + timingSafeEqual scheme as the other
 *      /api/cron/* routes).
 *   2. Load content/blog/_queue.json; pick the first topic with
 *      status === 'pending'. If none, return 200 "queue empty" and do nothing.
 *   3. Call Anthropic (shared client, ANTHROPIC_MODEL) with a strict house-style
 *      prompt that enforces British English, no em dashes, 1500-2200 words,
 *      `##` section headings, exam-board accuracy, the topic's internalLinks as
 *      in-body markdown links, and complete frontmatter.
 *   4. Run the SAME quality checks the prebuild gate runs
 *      (scripts/check-blog-quality.mjs) in-process. If the draft fails, return
 *      WITHOUT publishing and mark the topic 'needs-review'.
 *   5. On pass, open a PR: create branch `blog/auto/<slug>`, commit the .mdx
 *      (and the queue update), open the PR for human approval.
 *
 * ── ENVIRONMENT (all read INSIDE the handler; missing vars => graceful 500,
 *    never a build/import-time crash) ──────────────────────────────────────
 *   - CRON_SECRET           Bearer secret Vercel Cron sends (auth).
 *   - ANTHROPIC_API_KEY     Claude API key (via getAnthropicClient()).
 *   - GITHUB_TOKEN          (or BLOG_BOT_TOKEN) PAT/app token with `repo` scope
 *                           to push a branch + open a PR.
 *   - BLOG_REPO_OWNER       GitHub owner/org (e.g. "calum").
 *   - BLOG_REPO_NAME        GitHub repo name (e.g. "english-hub").
 *   - BLOG_REPO_BASE_BRANCH Optional base branch for the PR (default "main").
 *
 * To DISABLE: remove the cron entry from vercel.json (or unset CRON_SECRET /
 * the GitHub token, which makes the route a graceful no-op 500 rather than
 * publishing). To ENABLE: set the env vars above in the Vercel project.
 */

export const dynamic = 'force-dynamic'

// ── Quality thresholds — keep in sync with scripts/check-blog-quality.mjs ────
const MIN_WORDS = 1200
const MAX_WORDS = 2600 // generous ceiling; prompt targets 1500-2200
const MIN_INTERNAL_LINKS = 2
const INTERNAL_LINK_RE = /\/(revision|resources|practice|igcse|courses)/
const REQUIRED_FRONTMATTER = [
  'title',
  'description',
  'slug',
  'date',
  'author',
  'cover',
  'tags',
  'excerpt',
  'category',
  'educationalLevel',
] as const
const VALID_LEVELS = ['KS3', 'GCSE', 'IGCSE', 'A-Level'] as const

const QUEUE_REL_PATH = 'content/blog/_queue.json'

type QueueTopic = {
  targetQuery: string
  intent: string
  audience: string
  educationalLevel: string
  examBoard: string
  internalLinks: string[]
  status: string
}

// ── Auth (mirrors src/app/api/cron/affiliate-confirm/route.ts) ───────────────
function checkCronAuth(request: NextRequest): NextResponse | null {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }
  const authHeader = request.headers.get('authorization')
  const incoming = Buffer.from(authHeader ?? '')
  const expected = Buffer.from(`Bearer ${cronSecret}`)
  if (incoming.length !== expected.length || !timingSafeEqual(incoming, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return null
}

// ── Slug helper ──────────────────────────────────────────────────────────────
function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

// ── Frontmatter parsing (minimal, mirrors the gate's parser) ─────────────────
function splitFrontmatter(raw: string): { fmLines: string[]; body: string } {
  const lines = raw.split(/\r?\n/)
  if (lines[0]?.trim() !== '---') return { fmLines: [], body: raw }
  let end = -1
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      end = i
      break
    }
  }
  if (end === -1) return { fmLines: [], body: raw }
  return { fmLines: lines.slice(1, end), body: lines.slice(end + 1).join('\n') }
}

function frontmatterKeys(fmLines: string[]): Set<string> {
  const keys = new Set<string>()
  for (const line of fmLines) {
    const m = /^([A-Za-z0-9_]+)\s*:/.exec(line)
    if (m) keys.add(m[1])
  }
  return keys
}

function readScalar(fmLines: string[], key: string): string {
  for (const line of fmLines) {
    const m = new RegExp(`^${key}\\s*:\\s*(.*)$`).exec(line)
    if (m) {
      let v = m[1].trim()
      if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) {
        v = v.slice(1, -1)
      }
      return v.replace(/''/g, "'")
    }
  }
  return ''
}

function countWords(body: string): number {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/[#>*_~\-|=]/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[^\p{L}\p{N}'\s]/gu, ' ')
  return text.split(/\s+/).filter(Boolean).length
}

function countMatchingInternalLinks(body: string): number {
  let count = 0
  let m: RegExpExecArray | null
  const re = /\]\((\/[^)]*)\)/g
  while ((m = re.exec(body)) !== null) {
    if (INTERNAL_LINK_RE.test(m[1])) count++
  }
  const reHtml = /href=["'](\/[^"']*)["']/g
  while ((m = reHtml.exec(body)) !== null) {
    if (INTERNAL_LINK_RE.test(m[1])) count++
  }
  return count
}

function bodyContainsLink(body: string, href: string): boolean {
  return (
    body.includes(`](${href})`) ||
    body.includes(`href="${href}"`) ||
    body.includes(`href='${href}'`)
  )
}

/**
 * In-process quality gate. Returns the list of failures (empty === pass). The
 * checks mirror scripts/check-blog-quality.mjs plus topic-specific assertions
 * (no em dashes; every required internalLink is actually present).
 */
function runQualityChecks(
  raw: string,
  topic: QueueTopic,
  existing: { title: string; description: string }[],
): { failures: string[]; slug: string } {
  const failures: string[] = []
  const { fmLines, body } = splitFrontmatter(raw)
  const keys = frontmatterKeys(fmLines)
  const title = readScalar(fmLines, 'title')
  const description = readScalar(fmLines, 'description')
  const slug = readScalar(fmLines, 'slug')

  for (const field of REQUIRED_FRONTMATTER) {
    if (!keys.has(field)) failures.push(`missing frontmatter field: ${field}`)
  }
  const level = readScalar(fmLines, 'educationalLevel')
  if (level && !VALID_LEVELS.includes(level as (typeof VALID_LEVELS)[number])) {
    failures.push(`invalid educationalLevel "${level}"`)
  }
  const cover = readScalar(fmLines, 'cover')
  if (cover && !cover.startsWith('/api/og')) {
    failures.push('cover must be an /api/og URL')
  }

  const words = countWords(body)
  if (words < MIN_WORDS) failures.push(`body too short (${words} words, need >= ${MIN_WORDS})`)
  if (words > MAX_WORDS) failures.push(`body too long (${words} words, max ${MAX_WORDS})`)

  const links = countMatchingInternalLinks(body)
  if (links < MIN_INTERNAL_LINKS) {
    failures.push(`too few in-body internal links (${links}, need >= ${MIN_INTERNAL_LINKS})`)
  }

  // Every required internal link from the topic must actually appear in-body.
  for (const href of topic.internalLinks) {
    if (!bodyContainsLink(body, href)) failures.push(`missing required internal link: ${href}`)
  }

  // House style: no em dashes anywhere in the authored post.
  if (raw.includes('—')) failures.push('contains an em dash (house style forbids em dashes)')

  // Duplicate / near-duplicate against the existing corpus.
  for (const e of existing) {
    if (e.title && e.title === title)
      failures.push(`duplicate title of an existing post: "${title}"`)
    if (e.description && e.description === description) {
      failures.push('duplicate description of an existing post')
    }
    const sim = jaccard(
      shingles(`${title} ${description}`),
      shingles(`${e.title} ${e.description}`),
    )
    if (sim > 0.8) failures.push(`near-duplicate (Jaccard ${sim.toFixed(2)}) of "${e.title}"`)
  }

  return { failures, slug: slug || slugify(topic.targetQuery) }
}

function shingles(text: string, size = 3): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
  const set = new Set<string>()
  if (words.length < size) {
    if (words.length) set.add(words.join(' '))
    return set
  }
  for (let i = 0; i <= words.length - size; i++) set.add(words.slice(i, i + size).join(' '))
  return set
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0
  let inter = 0
  for (const x of a) if (b.has(x)) inter++
  const union = a.size + b.size - inter
  return union === 0 ? 0 : inter / union
}

// ── Anthropic prompt + generation ────────────────────────────────────────────
function buildPrompt(topic: QueueTopic, slug: string, isoDate: string): string {
  const linkList = topic.internalLinks.map((l) => `  - ${l}`).join('\n')
  const ogTitlePlaceholder = '<URL-ENCODED TITLE>'
  return `You are a subject-expert writer for The English Hub, a GCSE and IGCSE English revision platform aimed at UK students and their parents. Write ONE complete blog post as a single MDX document.

TOPIC / TARGET SEARCH QUERY: "${topic.targetQuery}"
AUDIENCE: ${topic.audience}
SEARCH INTENT: ${topic.intent}
EDUCATIONAL LEVEL: ${topic.educationalLevel}
EXAM BOARD: ${topic.examBoard}

STRICT REQUIREMENTS (a post that breaks any of these will be rejected by an automated quality gate and never published):
1. British English spelling throughout (analyse, colour, practise/practice, memorise, etc.).
2. Do NOT use em dashes (the — character) ANYWHERE. Use commas, colons, brackets or full stops instead.
3. Length: between 1500 and 2200 words of body text.
4. Use "##" Markdown section headings to structure the article (at least 5 sections). Do NOT use a level-1 "#" heading in the body; the page renders the title separately.
5. Exam-board accuracy: only state assessment objectives, paper structures, mark schemes and set texts that are correct for ${topic.examBoard} at ${topic.educationalLevel}. If you are not certain a specific fact is current, write in general terms rather than inventing specifics. Never fabricate statistics, grade boundaries or quotations.
6. You MUST include EVERY one of these internal links as in-body Markdown links (use natural anchor text), each at least once:
${linkList}
7. The tone is practical, encouraging and concrete: worked examples, not vague advice. Help the reader actually improve.

OUTPUT FORMAT: return ONLY the MDX document and nothing else (no preamble, no code fences). It MUST begin with YAML frontmatter delimited by lines containing only "---", with EXACTLY these fields:

---
title: '<a compelling, specific title, max ~60 chars, not identical to any existing post>'
description: '<a 140-160 char meta description containing the target query>'
slug: '${slug}'
date: '${isoDate}'
author: 'The English Hub'
cover: '/api/og?title=${ogTitlePlaceholder}&subtitle=<URL-ENCODED SHORT SUBTITLE>&level=${topic.educationalLevel.toLowerCase()}'
tags: ['<3-5 lowercase tags>']
excerpt: '<a 140-180 char teaser, may differ slightly from description>'
category: '<e.g. "GCSE English Literature" or "IGCSE English">'
educationalLevel: '${topic.educationalLevel}'
---

After the closing frontmatter "---", write the body in Markdown (## headings, short paragraphs, the required internal links woven in naturally). Remember: British English, no em dashes, 1500-2200 words, real exam-board facts only.`
}

async function generatePost(topic: QueueTopic, slug: string, isoDate: string): Promise<string> {
  const client = getAnthropicClient() // throws AnthropicNotConfiguredError if no key
  const message = await client.messages.create({
    model: ANTHROPIC_MODEL,
    max_tokens: 8_192,
    messages: [{ role: 'user', content: buildPrompt(topic, slug, isoDate) }],
  })
  const text = message.content
    .filter((block): block is Anthropic.TextBlock => block.type === 'text')
    .map((block) => block.text)
    .join('')
    .trim()
  // Defensive: strip accidental code fences if the model wrapped the doc.
  return text
    .replace(/^```(?:mdx|markdown)?\s*\n/, '')
    .replace(/\n```\s*$/, '')
    .trim()
}

// ── GitHub REST helpers (no extra dependency; uses global fetch) ─────────────
type GitHubEnv = { token: string; owner: string; repo: string; base: string }

function githubHeaders(token: string): Record<string, string> {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json',
    'User-Agent': 'english-hub-blog-bot',
  }
}

async function gh(
  env: GitHubEnv,
  method: string,
  endpoint: string,
  body?: unknown,
): Promise<{ ok: boolean; status: number; json: unknown }> {
  const res = await fetch(`https://api.github.com/repos/${env.owner}/${env.repo}${endpoint}`, {
    method,
    headers: githubHeaders(env.token),
    body: body === undefined ? undefined : JSON.stringify(body),
  })
  let json: unknown = null
  try {
    json = await res.json()
  } catch {
    json = null
  }
  return { ok: res.ok, status: res.status, json }
}

function toBase64(s: string): string {
  return Buffer.from(s, 'utf8').toString('base64')
}

/**
 * Open a PR: create a branch off base, write the .mdx and the updated queue on
 * that branch, then open the PR. Returns the PR URL. Throws on any API error so
 * runCron surfaces a 500 and Vercel retries.
 */
async function openBlogPr(
  env: GitHubEnv,
  slug: string,
  mdx: string,
  queueJson: string,
  topic: QueueTopic,
): Promise<string> {
  const branch = `blog/auto/${slug}`

  // 1. Base branch head SHA.
  const ref = await gh(env, 'GET', `/git/ref/heads/${env.base}`)
  if (!ref.ok) throw new Error(`GitHub: failed to read base ref ${env.base} (status ${ref.status})`)
  const baseSha = (ref.json as { object?: { sha?: string } })?.object?.sha
  if (!baseSha) throw new Error('GitHub: base ref returned no SHA')

  // 2. Create the branch (idempotent-ish: tolerate "already exists").
  const create = await gh(env, 'POST', '/git/refs', {
    ref: `refs/heads/${branch}`,
    sha: baseSha,
  })
  if (!create.ok && create.status !== 422) {
    throw new Error(`GitHub: failed to create branch ${branch} (status ${create.status})`)
  }

  // 3. Write the new post on the branch.
  const mdxPath = `content/blog/${slug}.mdx`
  const putMdx = await gh(
    env,
    'PUT',
    `/contents/${encodeURIComponent(mdxPath).replace(/%2F/g, '/')}`,
    {
      message: `blog(auto): draft "${topic.targetQuery}"`,
      content: toBase64(mdx),
      branch,
    },
  )
  if (!putMdx.ok) throw new Error(`GitHub: failed to write ${mdxPath} (status ${putMdx.status})`)

  // 4. Update the queue on the branch (mark this topic in-review). Requires the
  //    existing file SHA on that branch.
  const queueGet = await gh(
    env,
    'GET',
    `/contents/${encodeURIComponent(QUEUE_REL_PATH).replace(/%2F/g, '/')}?ref=${branch}`,
  )
  const queueSha = queueGet.ok ? (queueGet.json as { sha?: string })?.sha : undefined
  await gh(env, 'PUT', `/contents/${encodeURIComponent(QUEUE_REL_PATH).replace(/%2F/g, '/')}`, {
    message: `blog(auto): mark "${topic.targetQuery}" in-review`,
    content: toBase64(queueJson),
    branch,
    ...(queueSha ? { sha: queueSha } : {}),
  })

  // 5. Open the PR.
  const pr = await gh(env, 'POST', '/pulls', {
    title: `Blog (auto): ${topic.targetQuery}`,
    head: branch,
    base: env.base,
    body:
      `Automated draft generated by the gated blog pipeline (\`/api/cron/blog-generate\`).\n\n` +
      `- Target query: **${topic.targetQuery}**\n` +
      `- Level / board: ${topic.educationalLevel} / ${topic.examBoard}\n` +
      `- Audience: ${topic.audience}\n\n` +
      `This post passed the in-process quality gate (length, internal links, ` +
      `uniqueness, British English, no em dashes). **A human must review for ` +
      `exam-board accuracy and tone before merging.**`,
  })
  if (!pr.ok) throw new Error(`GitHub: failed to open PR (status ${pr.status})`)
  const url = (pr.json as { html_url?: string })?.html_url
  return url ?? `https://github.com/${env.owner}/${env.repo}/pull/new/${branch}`
}

// ── Best-effort local queue write (no-op effect on Vercel's read-only FS) ────
function tryWriteQueueLocally(queueJson: string): void {
  try {
    fs.writeFileSync(path.join(process.cwd(), QUEUE_REL_PATH), queueJson, 'utf8')
  } catch {
    // Read-only at runtime on Vercel; the durable queue change rides in the PR.
  }
}

export async function GET(request: NextRequest) {
  const authError = checkCronAuth(request)
  if (authError) return authError

  return runCron('blog-generate', async () => {
    // ── Read + validate env INSIDE the handler (never at import time) ────────
    const githubToken = process.env.GITHUB_TOKEN ?? process.env.BLOG_BOT_TOKEN
    const owner = process.env.BLOG_REPO_OWNER
    const repo = process.env.BLOG_REPO_NAME
    const base = process.env.BLOG_REPO_BASE_BRANCH ?? 'main'
    const missing: string[] = []
    if (!process.env.ANTHROPIC_API_KEY) missing.push('ANTHROPIC_API_KEY')
    if (!githubToken) missing.push('GITHUB_TOKEN (or BLOG_BOT_TOKEN)')
    if (!owner) missing.push('BLOG_REPO_OWNER')
    if (!repo) missing.push('BLOG_REPO_NAME')
    if (missing.length > 0) {
      // Graceful failure: clear 500, no crash, nothing published.
      throw new Error(`blog-generate is not configured: missing ${missing.join(', ')}`)
    }

    // ── Load the queue ───────────────────────────────────────────────────────
    const queuePath = path.join(process.cwd(), QUEUE_REL_PATH)
    if (!fs.existsSync(queuePath)) {
      return { published: false, message: 'no queue file' }
    }
    let queue: QueueTopic[]
    try {
      queue = JSON.parse(fs.readFileSync(queuePath, 'utf8')) as QueueTopic[]
    } catch (err) {
      throw new Error(`failed to parse ${QUEUE_REL_PATH}: ${(err as Error).message}`)
    }

    const idx = queue.findIndex((t) => t.status === 'pending')
    if (idx === -1) {
      return { published: false, message: 'queue empty (no pending topics)' }
    }
    const topic = queue[idx]
    const isoDate = new Date().toISOString().slice(0, 10)
    const slug = slugify(topic.targetQuery)

    // Guard: never regenerate a slug that already exists on disk.
    if (fs.existsSync(path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`))) {
      const updated = queue.map((t, i) => (i === idx ? { ...t, status: 'needs-review' } : t))
      tryWriteQueueLocally(JSON.stringify(updated, null, 2) + '\n')
      return { published: false, slug, message: 'slug already exists; marked needs-review' }
    }

    // Existing corpus titles/descriptions for the dedupe check.
    const blogDir = path.join(process.cwd(), 'content', 'blog')
    const existing = fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith('.mdx') && !f.endsWith('.ar.mdx') && !f.startsWith('.'))
      .map((f) => {
        const { fmLines } = splitFrontmatter(fs.readFileSync(path.join(blogDir, f), 'utf8'))
        return {
          title: readScalar(fmLines, 'title'),
          description: readScalar(fmLines, 'description'),
        }
      })

    // ── Generate ─────────────────────────────────────────────────────────────
    let mdx: string
    try {
      mdx = await generatePost(topic, slug, isoDate)
    } catch (err) {
      // Includes AnthropicNotConfiguredError and API/timeout errors. Surface a
      // clear 500 (runCron) without publishing.
      throw new Error(`generation failed: ${(err as Error).message}`)
    }

    // ── In-process quality gate ──────────────────────────────────────────────
    const { failures } = runQualityChecks(mdx, topic, existing)
    if (failures.length > 0) {
      const updated = queue.map((t, i) => (i === idx ? { ...t, status: 'needs-review' } : t))
      tryWriteQueueLocally(JSON.stringify(updated, null, 2) + '\n')
      // NOT an error: the gate did its job. Return 200 with the reasons so the
      // run is visible in logs without triggering a Vercel retry storm.
      return {
        published: false,
        slug,
        markedNeedsReview: true,
        qualityFailures: failures,
        message: 'draft failed quality gate; not published, topic marked needs-review',
      }
    }

    // ── Open the PR (durable queue update rides in the PR branch) ────────────
    const updatedQueue = queue.map((t, i) => (i === idx ? { ...t, status: 'in-review' } : t))
    const queueJson = JSON.stringify(updatedQueue, null, 2) + '\n'
    const prUrl = await openBlogPr(
      { token: githubToken as string, owner: owner as string, repo: repo as string, base },
      slug,
      mdx,
      queueJson,
      topic,
    )
    tryWriteQueueLocally(queueJson)

    return { published: true, asPr: true, slug, prUrl, message: 'PR opened for human approval' }
  })
}
