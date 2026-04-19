/**
 * Standalone test of Anthology rendering chain.
 * Run: npx tsx scripts/test-anthology-render.ts
 */

import { anthologyPageHtml, anthologyWordHtml } from '../src/lib/anthology/html-shell'
import { renderLessonPlanBody, renderWorksheetBody } from '../src/lib/anthology/renderers'
import type { LessonPlanContent, WorksheetContent } from '../src/lib/anthology/types'
import * as fs from 'fs'
import * as path from 'path'

// Sample lesson plan content
const lessonContent: LessonPlanContent = {
  brand: { edition: 'Teaching Resource · Test', code: 'Lesson Plan' },
  cover: {
    super: 'AN INSPECTOR CALLS · LESSON PLAN',
    titleLines: ['The Inspector\'s Role'],
    accentWord: 'Inspector',
    sub: 'Year 11 · AQA · 60 minutes',
  },
  objectives: [
    'Analyse how Priestley uses the Inspector as a dramatic device',
    'Explore the Inspector\'s shifting tone',
    'Write an analytical paragraph with embedded quotations',
  ],
  activities: [
    {
      kicker: 'STARTER',
      title: 'Hot-seat the Inspector',
      duration: '10 min',
      instructions: 'In pairs, one student plays the Inspector, the other a Birling family member. Test the Inspector\'s line of questioning.',
      differentiation: {
        support: 'Provide question prompts',
        core: 'Open questioning',
        stretch: 'Add justification challenge',
      },
    },
    {
      kicker: 'MAIN ACTIVITY 1',
      title: 'Close reading of the Inspector\'s final speech',
      duration: '25 min',
      instructions: 'Annotate the speech individually, then share key annotations in pairs. Identify three rhetorical devices and analyse their effect.',
    },
    {
      kicker: 'PLENARY / AFL',
      title: 'Three things you now know',
      duration: '10 min',
      instructions: 'Each student writes three things they now understand about the Inspector\'s dramatic function.',
    },
  ],
  keywords: ['Allegorical', 'Mouthpiece', 'Catalyst', 'Socialism', 'Capitalism'],
  resources: ['Copies of the play', 'Highlighters', 'Question prompt cards (support)'],
  homework: 'Write a 200-word response: "How does Priestley use the Inspector to convey his political message?"',
  teacherNotes: ['Watch out for students confusing the Inspector with a real police inspector'],
  footer: { left: 'The English Hub', centre: 'Teaching Resource', right: 'theenglishhub.app' },
}

// ── Test 1: Lesson plan PDF (HTML for browser) ──────────────────────
const pdfHtml = anthologyPageHtml({
  title: 'Lesson Plan: The Inspector\'s Role',
  brand: lessonContent.brand,
  cover: lessonContent.cover,
  bodyHtml: renderLessonPlanBody(lessonContent),
  footer: lessonContent.footer,
  preview: true,
})

console.log(`✓ PDF HTML rendered: ${pdfHtml.length} chars`)
console.log(`  Contains "anth-page": ${pdfHtml.includes('anth-page')}`)
console.log(`  Contains "Newsreader": ${pdfHtml.includes('Newsreader')}`)
console.log(`  Contains "var(--cream-50)": ${pdfHtml.includes('var(--cream-50)')}`)
console.log(`  Contains "<em>English</em>": ${pdfHtml.includes('<em>English</em>')}`)

// ── Test 2: Lesson plan Word (HTML for Word) ─────────────────────────
const wordHtml = anthologyWordHtml({
  title: 'Lesson Plan: The Inspector\'s Role',
  brand: lessonContent.brand,
  cover: lessonContent.cover,
  bodyHtml: renderLessonPlanBody(lessonContent),
  footer: lessonContent.footer,
})

console.log(`\n✓ Word HTML rendered: ${wordHtml.length} chars`)
console.log(`  Contains "anth-page": ${wordHtml.includes('anth-page')}`)
console.log(`  Contains "Newsreader": ${wordHtml.includes('Newsreader')}`)
console.log(`  Still contains "var(--": ${wordHtml.includes('var(--')} (should be FALSE — vars must be resolved)`)
console.log(`  Contains "#FBF7F0": ${wordHtml.includes('#FBF7F0')} (should be TRUE — cream-50 hex)`)
console.log(`  Contains "#AD4A28": ${wordHtml.includes('#AD4A28')} (should be TRUE — clay-600 hex)`)
console.log(`  Contains WordSection1: ${wordHtml.includes('WordSection1')}`)

// ── Test 3: Worksheet ───────────────────────────────────────────────
const worksheetContent: WorksheetContent = {
  brand: { edition: 'Teaching Resource · Test', code: 'Worksheet' },
  cover: {
    super: 'AN INSPECTOR CALLS · WORKSHEET',
    titleLines: ['The Inspector Worksheet'],
    accentWord: 'Inspector',
    sub: 'Year 11 · AQA · 30 marks',
  },
  instructions: 'Answer all questions in the spaces provided. Use quotations where appropriate.',
  totalMarks: 30,
  questions: [
    { question: 'How does Priestley first introduce the Inspector?', type: 'short-answer', marks: 5, lines: 5 },
    { question: 'Identify three techniques used in the Inspector\'s questioning of Mr Birling.', type: 'short-answer', marks: 6, lines: 6 },
    { question: 'How does the Inspector\'s tone shift when speaking to Sheila?', type: 'extended-writing', marks: 9, lines: 14 },
    { question: 'Analyse the Inspector\'s final speech ("We are members of one body").', type: 'quote-analysis', marks: 10, lines: 15, sourceQuote: 'We don\'t live alone. We are members of one body. We are responsible for each other.' },
  ],
  footer: { left: 'The English Hub', centre: 'Worksheet', right: 'theenglishhub.app' },
}

const worksheetWordHtml = anthologyWordHtml({
  title: 'Worksheet',
  brand: worksheetContent.brand,
  cover: worksheetContent.cover,
  bodyHtml: renderWorksheetBody(worksheetContent),
  footer: worksheetContent.footer,
})

console.log(`\n✓ Worksheet Word HTML rendered: ${worksheetWordHtml.length} chars`)
console.log(`  Still contains "var(--": ${worksheetWordHtml.includes('var(--')} (should be FALSE)`)
console.log(`  Contains question 1: ${worksheetWordHtml.includes('How does Priestley first introduce')}`)

// ── Save outputs for visual inspection ──────────────────────────────
const outDir = path.join(__dirname, 'test-output')
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'lesson-plan-pdf.html'), pdfHtml)
fs.writeFileSync(path.join(outDir, 'lesson-plan-word.doc'), '\ufeff' + wordHtml)
fs.writeFileSync(path.join(outDir, 'worksheet-word.doc'), '\ufeff' + worksheetWordHtml)
console.log(`\n✓ Test outputs saved to: ${outDir}`)
console.log('  Open lesson-plan-pdf.html in browser to verify PDF rendering')
console.log('  Open lesson-plan-word.doc and worksheet-word.doc in Word to verify Word rendering')

// ── Final pass/fail ─────────────────────────────────────────────────
const allChecks = [
  pdfHtml.length > 1000,
  pdfHtml.includes('anth-page'),
  pdfHtml.includes('Newsreader'),
  pdfHtml.includes('<em>English</em>'),
  wordHtml.length > 1000,
  !wordHtml.match(/var\(--(?!w[,)])/), // ignore var(--w) which has a fallback
  wordHtml.includes('#FBF7F0'),
  wordHtml.includes('#AD4A28'),
  worksheetWordHtml.length > 1000,
  !worksheetWordHtml.match(/var\(--(?!w[,)])/),
]
const passed = allChecks.filter(Boolean).length
const total = allChecks.length
console.log(`\n${'='.repeat(50)}`)
console.log(`RESULT: ${passed}/${total} checks passed`)
if (passed === total) {
  console.log('✓ ALL CHECKS PASS — generation chain works')
  process.exit(0)
} else {
  console.error('✗ FAILURES — see output above')
  process.exit(1)
}
