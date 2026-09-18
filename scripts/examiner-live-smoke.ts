// ─── Examiner Marking Tool - live smoke test against Anthropic ──────────────
//
// Proves, with real calls, that the exact request shapes the examiner routes
// send are accepted by the provider and produce what the tool expects:
//
//   1. transcription pass 1 on a synthetic "handwritten" page rendered with
//      sharp, checking the deliberate misspelling survives and the two-section
//      format is honoured;
//   2. transcription pass 2 on the same page, checking the cache was read;
//   3. marking a short Q4 response against the Pearson pack, checking the
//      commentary ends on the terminal formula and a mark can be extracted.
//
// Costs a few cents. Run from the repo root with the production key:
//
//   node --env-file=.env.local --import tsx scripts/examiner-live-smoke.ts
//
// Read-only against the database (it never touches it). Never run in CI.
// ────────────────────────────────────────────────────────────────────────────

import sharp from 'sharp'
import { getAnthropicClient } from '@/lib/anthropic-client'
import { EXAMINER_MODELS } from '@/lib/marking/examiner/models'
import {
  TRANSCRIBE_SYSTEM,
  markingContent,
  markingSystem,
  transcribePassOneContent,
  transcribePassTwoContent,
} from '@/lib/marking/examiner/prompts'
import { extractMark, splitTranscript } from '@/lib/marking/examiner/engine'
import { pearsonIgcseEnglishAPaper1 as pack } from '@/lib/marking/examiner/packs/pearson-igcse-english-a-paper1'

const PAGE_TEXT = [
  'Q4',
  'The writer uses short sentances to build tension,',
  'for example "I froze." This makes the reader feel',
  'the fear too. Later the long sentence about the',
  'mountain slows everything down so we recieve a sense',
  'of the vast, empty landscape around him.',
]

async function fakePage(): Promise<string> {
  const lines = PAGE_TEXT.map(
    (t, i) =>
      `<text x="80" y="${140 + i * 62}" font-family="Segoe Print, Comic Sans MS, cursive" font-size="34" fill="#1a2a6c">${t
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')}</text>`,
  ).join('')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="700"><rect width="100%" height="100%" fill="#fbf7ec"/>${Array.from(
    { length: 9 },
    (_, i) =>
      `<line x1="60" y1="${150 + i * 62}" x2="940" y2="${150 + i * 62}" stroke="#d7cdb8" stroke-width="1"/>`,
  ).join('')}${lines}</svg>`
  const jpeg = await sharp(Buffer.from(svg)).jpeg({ quality: 85 }).toBuffer()
  return jpeg.toString('base64')
}

function usageLine(u: {
  input_tokens: number
  output_tokens: number
  cache_read_input_tokens?: number | null
  cache_creation_input_tokens?: number | null
}) {
  return `in=${u.input_tokens} out=${u.output_tokens} cacheRead=${u.cache_read_input_tokens ?? 0} cacheWrite=${u.cache_creation_input_tokens ?? 0}`
}

async function main() {
  const client = getAnthropicClient()
  const page = await fakePage()
  console.log(
    `models: transcribe=${EXAMINER_MODELS.transcribe} mark=${EXAMINER_MODELS.mark} split=${EXAMINER_MODELS.split}`,
  )

  // 1. Transcription pass 1
  const t1 = await client.messages.create({
    model: EXAMINER_MODELS.transcribe,
    max_tokens: 4000,
    system: [{ type: 'text', text: TRANSCRIBE_SYSTEM, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: transcribePassOneContent([page]) }],
    output_config: { effort: 'high' },
  })
  const raw1 = t1.content.map((b) => (b.type === 'text' ? b.text : '')).join('')
  const s1 = splitTranscript(raw1)
  console.log(`\n[pass 1] stop=${t1.stop_reason} ${usageLine(t1.usage)}`)
  console.log(s1.text)
  console.log('notes:', s1.notes.slice(0, 300))
  const keptMisspellings = /sentances/.test(s1.text) && /recieve/.test(s1.text)
  console.log(`misspellings preserved: ${keptMisspellings}`)
  if (!raw1.includes('<<<TRANSCRIPT>>>'))
    throw new Error('pass 1 did not use the two-section format')

  // 2. Transcription pass 2 (expects a cache read of the image + system)
  const t2 = await client.messages.create({
    model: EXAMINER_MODELS.transcribe,
    max_tokens: 4000,
    system: [{ type: 'text', text: TRANSCRIBE_SYSTEM, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: transcribePassTwoContent([page], s1) }],
    output_config: { effort: 'high' },
  })
  const s2 = splitTranscript(t2.content.map((b) => (b.type === 'text' ? b.text : '')).join(''))
  console.log(`\n[pass 2] stop=${t2.stop_reason} ${usageLine(t2.usage)}`)
  console.log(`changed: ${s2.text !== s1.text}`)
  if ((t2.usage.cache_read_input_tokens ?? 0) === 0)
    console.warn('WARNING: pass 2 read nothing from cache')

  // 3. Marking Q4 against the Pearson pack
  const q4 = pack.questions.find((q) => q.id === 'Q4')!
  const m = await client.messages.create({
    model: EXAMINER_MODELS.mark,
    max_tokens: 4000,
    system: markingSystem(pack),
    messages: [
      {
        role: 'user',
        content: markingContent(
          pack,
          q4,
          'Q4: How does the writer use language and structure to show his feelings? (12 marks). Level 3 (5-7): clear understanding and explanation. Level 4 (8-10): thorough exploration.',
          s2.text,
          1,
          s2.notes,
        ),
      },
    ],
    output_config: { effort: 'high' },
  })
  const commentary = m.content.map((b) => (b.type === 'text' ? b.text : '')).join('')
  console.log(`\n[mark] stop=${m.stop_reason} ${usageLine(m.usage)}`)
  console.log(commentary)
  const mark = extractMark(commentary, q4)
  console.log('\nextracted mark:', mark)
  if (!mark) throw new Error('no mark could be extracted from the commentary')
  if (mark.mark < 1 || mark.mark > 12) throw new Error(`mark out of range: ${mark.mark}`)
  console.log('\nSMOKE OK')
}

main().catch((e) => {
  console.error('SMOKE FAILED:', e?.status ?? '', e?.message ?? e)
  process.exit(1)
})
