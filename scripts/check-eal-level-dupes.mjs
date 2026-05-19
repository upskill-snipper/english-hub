#!/usr/bin/env node
/**
 * I6 duplicate-body guard (H1 audit remediation).
 *
 * CI guard that detects when EAL CEFR level pages serve duplicate,
 * non-differentiated content. The /eal/<slug>/level/<a2|b1|b2|c1>
 * route renders a topic's body (concept + examples + commonErrors)
 * from the data-driven curriculum in src/lib/eal/curriculum.ts.
 *
 * The I6 defect: the EALTopic data model (src/lib/eal/types.ts) has a
 * single `concept` / `examples` / `commonErrors` per topic — there are
 * NO per-level bodies. The level page therefore renders byte-identical
 * body text for a2, b1, b2 and c1. This script makes that defect fail
 * CI: for every topic it builds the body text for each level the same
 * way the page does, normalises it (whitespace stripped) and hashes it.
 * If the b1 / b2 / c1 hash EQUALS the a2 hash for the same topic, the
 * level is flagged as a non-differentiated duplicate of A2.
 *
 * Exit 1 with a per-topic report when duplicates are found (the current
 * expected state until per-level bodies are authored); exit 0 with a
 * pass message when every level is differentiated. The script never
 * throws on a missing/odd file or shape — it reports "could not
 * analyse" and exits 1 so the guard is not silently skipped.
 */

import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO = resolve(HERE, '..')
const CURRICULUM = resolve(REPO, 'src/lib/eal/curriculum.ts')
const LEVELS = ['a2', 'b1', 'b2', 'c1']

function fail(msg) {
  console.error(`\n[I6 guard] ${msg}\n`)
  process.exit(1)
}

function normHash(s) {
  return createHash('sha256').update(String(s).replace(/\s+/g, '')).digest('hex')
}

/**
 * Build the body text the level page renders for a given level. The
 * page (src/app/eal/[slug]/level/[cefr]/page.tsx) renders the SAME
 * topic.concept / topic.examples / topic.commonErrors for every level,
 * so `level` is accepted only to make the per-level intent explicit and
 * to future-proof this guard if per-level fields are added later.
 */
function bodyForLevel(topic, level) {
  const perLevel =
    (topic.byLevel && topic.byLevel[level]) ||
    (topic.levels && topic.levels[level]) ||
    null
  const src = perLevel || topic
  const concept = src.concept?.en ?? src.concept ?? ''
  const examples = Array.isArray(src.examples)
    ? src.examples.map((e) => `${e?.en ?? ''}|${e?.note?.en ?? ''}`).join('~')
    : ''
  const errors = Array.isArray(src.commonErrors)
    ? src.commonErrors
        .map((e) => `${e?.wrong ?? ''}|${e?.right ?? ''}|${e?.explanation?.en ?? ''}`)
        .join('~')
    : ''
  return `${concept}${examples}${errors}`
}

/**
 * Best-effort structural extraction of the EAL topics from the TS
 * source without a TS toolchain: locate each top-level topic object by
 * its `id:` then capture the en strings for concept, example .en/.note,
 * and commonError wrong/right/explanation. This is heuristic by design;
 * if it cannot find topics it reports "could not analyse".
 */
async function loadTopics() {
  let raw
  try {
    raw = await readFile(CURRICULUM, 'utf8')
  } catch (e) {
    return { error: `could not read ${CURRICULUM}: ${e.message}` }
  }

  const ids = [...raw.matchAll(/\bid:\s*'([^']+)'/g)].map((m) => ({
    id: m[1],
    index: m.index,
  }))
  if (ids.length === 0) {
    return { error: 'could not analyse: no topic `id:` entries found in curriculum.ts' }
  }

  const topics = []
  for (let i = 0; i < ids.length; i++) {
    const start = ids[i].index
    const end = i + 1 < ids.length ? ids[i + 1].index : raw.length
    const block = raw.slice(start, end)

    // concept.en — first `en:` after a `concept:` marker in this block.
    let concept = ''
    const cm = block.match(/concept:\s*\{[\s\S]*?en:\s*'((?:[^'\\]|\\.)*)'/)
    if (cm) concept = cm[1]

    // All example/error en-ish strings in block order: good enough to
    // detect "is the rendered body identical across levels".
    const ens = [...block.matchAll(/\ben:\s*'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1])
    const wrongs = [...block.matchAll(/\bwrong:\s*'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1])
    const rights = [...block.matchAll(/\bright:\s*'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1])

    topics.push({
      id: ids[i].id,
      concept: { en: concept },
      examples: ens.map((en) => ({ en })),
      commonErrors: wrongs.map((w, k) => ({
        wrong: w,
        right: rights[k] ?? '',
        explanation: { en: '' },
      })),
      // Per-level containers the data model does NOT currently have;
      // probed by bodyForLevel so the guard auto-clears if added.
      byLevel: undefined,
      levels: undefined,
    })
  }
  return { topics }
}

async function main() {
  const { topics, error } = await loadTopics()
  if (error) fail(error)
  if (!Array.isArray(topics) || topics.length === 0) {
    fail('could not analyse: no EAL topics extracted')
  }

  const offenders = []
  for (const topic of topics) {
    let a2
    try {
      a2 = normHash(bodyForLevel(topic, 'a2'))
    } catch (e) {
      offenders.push({ id: topic.id, dupes: ['(could not analyse a2 body)'], note: e.message })
      continue
    }
    const dupes = []
    for (const level of LEVELS) {
      if (level === 'a2') continue
      try {
        if (normHash(bodyForLevel(topic, level)) === a2) dupes.push(level)
      } catch (e) {
        dupes.push(`${level} (could not analyse: ${e.message})`)
      }
    }
    if (dupes.length > 0) offenders.push({ id: topic.id, dupes })
  }

  if (offenders.length === 0) {
    console.log(
      `[I6 guard] PASS — all ${topics.length} EAL topics serve differentiated ` +
        `b1/b2/c1 content (none duplicate the a2 body).`
    )
    process.exit(0)
  }

  console.error(
    `\n[I6 guard] FAIL — ${offenders.length}/${topics.length} EAL topics serve ` +
      `body content that is identical to their A2 body across CEFR levels.\n` +
      `These /eal/<topic>/level/<band> pages are non-differentiated duplicates:\n`
  )
  for (const o of offenders) {
    console.error(`  • ${o.id}: ${o.dupes.join(', ')} duplicate A2`)
    if (o.note) console.error(`      ${o.note}`)
  }
  console.error(
    `\nFix: author per-level bodies in the EAL content model so each CEFR ` +
      `band renders distinct concept/examples/errors, then re-run this guard.\n`
  )
  process.exit(1)
}

main().catch((e) => fail(`unexpected error (did not throw): ${e?.message ?? e}`))
