// ─── The translation model's own commentary, published as page content ──────
//
// The bilingual content.ts files were produced by a local Ollama run. Where the
// model was unsure it did what chat models do: it explained itself. That
// explanation was written to the `ar` field and rendered to readers.
//
// Live on /ar/analysis/ai-feedback-head-to-head until 19 September 2026:
//
//   "(Note: There seems to be a mix-up in the last part of the translation due
//    to an untranslated phrase "academic register". Here is the corrected
//    version without commentary or preamble as per your instructions.)"
//
// A visitor reading the Arabic page saw the model being asked not to add
// commentary, in English, in the middle of a feature description. 63 entries
// across 33 files were like this, several also carrying Russian, Thai,
// Vietnamese, French or Spanish where the Arabic should have been.
//
// All 63 were rewritten by hand - see scripts/repair-translator-commentary.mjs,
// which holds the replacements. Stripping the commentary mechanically was tried
// first and rejected: it left the surrounding sentence in three alphabets,
// which is not a translation either.
//
// This is the detector that stays. It is deliberately narrow: no legitimate
// translation of revision copy contains the phrase "as per your instructions",
// so a match here is never a false positive worth arguing about.
//
//   node scripts/find-translator-commentary.mjs

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

/** Phrases only a model talking about its own output produces. */
const ARTEFACTS = [
  /as per your instructions/i,
  /without commentary or preamble/i,
  /here is the corrected/i,
  /corrected and aligned with instruction/i,
  /there seems to be a mix-?up/i,
  /\(note:\s/i,
  /^\s*corrected(?: version)?:/im,
  /i (?:cannot|can't|am unable to)/i,
  /let me know if/i,
  /^\s*(?:sure|certainly|of course)[,!]/i,
  /translated (?:text|version) (?:below|follows)/i,
]

const ENTRY = /(\w+):\s*\{\s*en:\s*`([^`]*)`\s*,\s*ar:\s*`([^`]*)`\s*,?\s*\}/gs

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (entry.name === 'content.ts') out.push(full)
  }
  return out
}

/**
 * Every bilingual entry whose Arabic carries translator commentary.
 * Exported so the vitest and this CLI cannot drift apart.
 */
export function findCommentary(root = 'src/app') {
  const hits = []
  let scanned = 0

  for (const file of walk(root)) {
    const source = readFileSync(file, 'utf8')
    if (!source.includes('export const STRINGS')) continue
    for (const m of source.matchAll(ENTRY)) {
      const [, key, en, ar] = m
      scanned += 1
      const artefact = ARTEFACTS.find((rx) => rx.test(ar))
      if (!artefact) continue
      hits.push({
        file: file.split('\\').join('/'),
        key,
        en: en.split(/\s+/).join(' '),
        ar: ar.split(/\s+/).join(' ').slice(0, 120),
        matched: String(artefact),
      })
    }
  }

  return { scanned, hits }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { scanned, hits } = findCommentary()
  for (const hit of hits) {
    console.log('')
    console.log(`${hit.file} :: ${hit.key}   ${hit.matched}`)
    console.log(`  en: ${hit.en.slice(0, 90)}`)
    console.log(`  ar: ${hit.ar.slice(0, 90)}`)
  }
  console.log('')
  console.log(`${scanned} bilingual entries scanned; ${hits.length} carry translator commentary.`)
}
