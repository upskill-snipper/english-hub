#!/usr/bin/env node
/**
 * Write src/app/revision/texts/<slug>/page.tsx for a text whose study guide is
 * complete, so the text has a real page instead of the catch-all placeholder.
 *
 * WHY A REAL PAGE AND NOT A BRANCH IN THE CATCH-ALL. Five pieces of existing
 * machinery decide whether a text "has a guide": the placeholder register, the
 * stub set, the sitemap, the shelf's readiness label and the guide-href
 * resolver. All five key on whether /revision/texts/<slug>/page.tsx exists and
 * is not a placeholder. Giving the text a real page makes every one of them
 * right without teaching any of them about study guides, and set-text-stubs.test
 * then fails until the slug is taken out of the stub set, which is the point.
 *
 * Refuses to overwrite a page that is not a placeholder: a hand-built guide must
 * never be replaced by a generated one.
 *
 *   node scripts/write-study-guide-page.mjs <slug> [<slug> ...]
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const TITLE_LIMIT = 60
const DESC_LIMIT = 160

function field(src, name) {
  const m = new RegExp(`\\n  ${name}:\\s*(['"\`])((?:\\\\.|(?!\\1).)*)\\1`).exec(src)
  if (!m) throw new Error(`no top-level ${name}`)
  return m[2].replace(/\\(['"`])/g, '$1')
}

function ts(s) {
  return `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
}

for (const slug of process.argv.slice(2)) {
  const guidePath = join('src/data/study-guides', `${slug}.ts`)
  if (!existsSync(guidePath)) throw new Error(`${slug}: no guide file`)
  const src = readFileSync(guidePath, 'utf8')
  const title = field(src, 'title')
  const author = field(src, 'author')
    .replace(/\s*\(.*?\)\s*/g, '')
    .trim()

  const dir = join('src/app/revision/texts', slug)
  const page = join(dir, 'page.tsx')
  if (existsSync(page) && !/StubStudyGuide/.test(readFileSync(page, 'utf8'))) {
    throw new Error(`${slug}: ${page} is a real page; refusing to overwrite it`)
  }

  let pageTitle = `${title} - Study Guide`
  if (pageTitle.length > TITLE_LIMIT)
    pageTitle = title.length <= TITLE_LIMIT ? title : title.slice(0, TITLE_LIMIT)

  const parts = [
    'themes',
    'characters',
    'key quotations',
    'language analysis',
    'vocabulary',
    'exam practice',
  ]
  let description = ''
  for (let n = parts.length; n >= 2; n--) {
    const list = parts.slice(0, n)
    description = `${title} by ${author}: ${list.slice(0, -1).join(', ')} and ${list[n - 1]}, with an animated story arc and scene-by-scene guide.`
    if (description.length <= DESC_LIMIT) break
    description = `${title} by ${author}: ${list.slice(0, -1).join(', ')} and ${list[n - 1]}.`
    if (description.length <= DESC_LIMIT) break
  }
  if (description.length > DESC_LIMIT)
    throw new Error(`${slug}: cannot fit a description in ${DESC_LIMIT}`)

  const ogTitle = `${pageTitle} | The English Hub`
  const body = `import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { guide } from '@/data/study-guides/${slug}'
import { FullStudyGuide } from '../_components/full-study-guide'

// The study guide for this text is src/data/study-guides/${slug}.ts, and this
// page renders it whole. Written by scripts/write-study-guide-page.mjs, which
// explains why a text with a finished guide gets a real page here.

const SLUG = ${ts(slug)}

export const metadata: Metadata = {
  title: ${ts(pageTitle)},
  description: ${ts(description)},
  alternates: {
    canonical: \`https://theenglishhub.app/revision/texts/\${SLUG}\`,
  },
  openGraph: {
    title: ${ts(ogTitle)},
    description: ${ts(description)},
    images: [
      {
        url: ${ts(`/api/og?title=${encodeURIComponent(ogTitle).replace(/%20/g, '+')}`)},
        width: 1200,
        height: 630,
        alt: ${ts(ogTitle)},
      },
    ],
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <FullStudyGuide text={text} guide={guide} />
}
`
  mkdirSync(dir, { recursive: true })
  writeFileSync(page, body)
  console.log(
    `${slug}: wrote ${page} (title ${pageTitle.length}, description ${description.length})`,
  )
}
