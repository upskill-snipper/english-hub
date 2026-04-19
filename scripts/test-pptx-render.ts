/**
 * End-to-end test of PPTX generation.
 * Generates a real .pptx file with sample lesson plan data
 * so we can open it in PowerPoint and verify the layout.
 *
 * Run: npx tsx scripts/test-pptx-render.ts
 */

import PptxGenJS from 'pptxgenjs'
import * as fs from 'fs'
import * as path from 'path'
import {
  titleSlide,
  agendaSlide,
  contentSlide,
  pullQuoteSlide,
  dataSlide,
  closingSlide,
  objectivesSlide,
  activitySlide,
  endSlide,
} from '../src/lib/pptx/slide-templates'

async function main() {
  const pptx = new PptxGenJS()
  pptx.author = 'The English Hub'
  pptx.company = 'The English Hub'
  pptx.title = 'Test: An Inspector Calls Lesson Plan'
  pptx.layout = 'LAYOUT_WIDE'

  // ── Title slide ──────────────────────────────────────────────────
  titleSlide(pptx, {
    title: 'Dramatic Function',
    accentWord: 'Function',
    subtitle: 'An Inspector Calls — Lesson Plan',
    yearGroup: 'Year 10',
    examBoard: 'AQA',
    duration: '60 minutes',
    text: 'An Inspector Calls',
    edition: 'Spring Anthology · Vol. III',
    code: 'Lesson Plan',
  })

  // ── Objectives slide ────────────────────────────────────────────
  objectivesSlide(pptx, [
    'Analyse how Priestley uses the Inspector as a dramatic device',
    'Explore how the Inspectors language shifts tone',
    'Evaluate the Inspector as a mouthpiece for Priestleys socialist message',
    'Write an analytical paragraph embedding AO1, AO2, and AO3',
  ])

  // ── Activity slide ──────────────────────────────────────────────
  activitySlide(pptx, 'main', {
    slideTitle: 'Main Activity',
    activityTitle: 'Close reading of the Inspectors final speech',
    duration: '25 minutes',
    instructions: 'Annotate the speech individually, then share key annotations in pairs. Identify three rhetorical devices and analyse their effect on the audience.',
    keyQuestion: 'How does the Inspector use rhetoric to deliver Priestleys political message?',
  })

  // ── Pull quote slide ────────────────────────────────────────────
  pullQuoteSlide(pptx, {
    quote: 'We dont live alone. We are members of one body. We are responsible for each other.',
    citation: 'Inspector Goole · Act 3',
    edition: 'Key Quote',
    code: 'AO2',
  })

  // ── Closing slide ───────────────────────────────────────────────
  endSlide(pptx)

  // ── Save ────────────────────────────────────────────────────────
  const outDir = path.join(__dirname, 'test-output')
  fs.mkdirSync(outDir, { recursive: true })
  const outPath = path.join(outDir, 'lesson-plan.pptx')
  await pptx.writeFile({ fileName: outPath })

  const stats = fs.statSync(outPath)
  console.log(`✓ PPTX generated: ${outPath}`)
  console.log(`  Size: ${(stats.size / 1024).toFixed(1)} KB`)
  console.log(`  Open in PowerPoint to verify layout`)
  console.log('')
  console.log('Expected:')
  console.log('  - Title slide: "Dramatic Function" fits on screen, no overlap with masthead')
  console.log('  - Objectives slide: 4 bullet points, all visible')
  console.log('  - Activity slide: title + duration + instructions, clean layout')
  console.log('  - Pull quote: large italic quote, centered')
  console.log('  - All slides: cream bg, "The English Hub" masthead at top, footer at bottom')
}

main().catch((err) => {
  console.error('Test failed:', err)
  process.exit(1)
})
