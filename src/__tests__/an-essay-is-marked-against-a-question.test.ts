import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import { EN_MESSAGES } from '@/lib/i18n/generated/en'
import { AR_MESSAGES } from '@/lib/i18n/generated/ar'
import { ES_MESSAGES } from '@/lib/i18n/generated/es'

/**
 * The marker was never told the question.
 *
 * REPORTED FROM THE LIVE SITE, on a Merchant of Venice essay. The submit form
 * asks for a board, a paper and a question NUMBER, and then sent this to the
 * AI as the question the essay answers:
 *
 *   "Q2 - Language Analysis (8 marks)"
 *
 * That is the dropdown's own label. It is built in this same file by
 * `buildQuestionOptions` for the picker, and it says nothing about what the
 * student was asked to do, which text, or about what. Every mark scheme in this
 * repository leads with whether the answer addresses the task, and that could
 * not be assessed at all, on any submission, ever.
 *
 * It did not fail. A grade came back, an AO breakdown came back, and the
 * feedback read plausibly, because a model handed an essay and no question will
 * describe the essay rather than mark it.
 *
 * THE FIX IS A FIELD, not a better label. A student's question may be a school's
 * own wording, a past paper or a teacher's title, and no registry will hold it,
 * so the field is free text. It is seeded from the chosen question's
 * `taskDescription` - which is a template with [topic] placeholders, so it
 * prompts rather than pretends - and the form will not submit while it is empty.
 */

const ROOT = process.cwd()
const PAGE = readFileSync(join(ROOT, 'src/app/marking/submit/page.tsx'), 'utf8')
const CODE = PAGE.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

describe('what is sent to the marker', () => {
  it('is the wording the student gave, not the dropdown label', () => {
    expect(CODE).toContain('const askedQuestion = questionText.trim() || questionLabel')
    expect(CODE).toContain('questionText: askedQuestion')
  })

  it('and the label is no longer sent as the question anywhere', () => {
    // Both submission paths - the spine and the legacy /api/mark fallback -
    // carried it. Fixing one and leaving the other would have left the defect
    // live for exactly the users whose request fell back.
    expect(CODE).not.toContain('questionText: questionLabel')
    expect((CODE.match(/questionText: askedQuestion/g) ?? []).length).toBe(2)
  })

  it('the label is still built, because it is a good short name for history', () => {
    // The counterweight: deleting it would be the other way to make the
    // assertion above pass, and the history list and title fallback need it.
    expect(CODE).toContain('const questionLabel =')
    expect(CODE).toMatch(/title: title\.trim\(\) \|\| questionLabel/)
  })
})

describe('the field the student types it into', () => {
  it('exists, and is required', () => {
    expect(CODE).toContain('id="questionText"')
    expect(CODE).toMatch(/textarea[\s\S]{0,400}id="questionText"[\s\S]{0,600}required/)
  })

  it('blocks submission while it is empty', () => {
    // Without this the field is advice rather than a requirement, and the
    // fallback to questionLabel quietly restores the old behaviour.
    expect(CODE).toContain('questionText.trim().length > 0 &&')
  })

  it('is seeded from the chosen question so it is never blank on arrival', () => {
    expect(CODE).toContain('taskDescription')
    expect(CODE).toMatch(/if \(questionTextTouched\) return/)
  })

  it('and stops seeding the moment the student types', () => {
    // A field that re-fills itself under the student is worse than an empty one.
    expect(CODE).toContain('setQuestionTextTouched(true)')
  })
})

describe('the seed is a real prompt, not a menu entry', () => {
  const schemes = Object.values(MARK_SCHEMES)

  it('there are schemes to check', () => {
    expect(schemes.length).toBeGreaterThan(5)
  })

  it('every question in every scheme carries a task description', () => {
    const missing: string[] = []
    for (const scheme of schemes) {
      for (const q of scheme.questions) {
        if (!q.taskDescription || q.taskDescription.trim().length === 0) {
          missing.push(`${scheme.id} ${q.id}`)
        }
      }
    }
    expect(missing).toEqual([])
  })

  it('and a task description says more than the label ever did', () => {
    // The label is "<id> - <type> (<n> marks)". A task description that were
    // just the type again would be the same defect wearing a different field.
    for (const scheme of schemes) {
      for (const q of scheme.questions) {
        expect(
          q.taskDescription.trim().length,
          `${scheme.id} ${q.id} task description is too short to be a task`,
        ).toBeGreaterThan(q.questionType.length)
      }
    }
  })
})

describe('the field is labelled in all three locales', () => {
  it.each([
    'marking.submit.label_question_text',
    'marking.submit.question_text_help',
    'marking.submit.question_text_placeholder',
  ])('%s', (key) => {
    // Asserted against the GENERATED maps rather than a dictionary shard,
    // because those are what the running app reads. A key present in the source
    // shard but missing from the build would pass the other check and still
    // render nothing.
    expect(EN_MESSAGES[key], `${key} missing from en`).toBeTruthy()
    expect(AR_MESSAGES[key], `${key} missing from ar`).toBeTruthy()
    expect(ES_MESSAGES[key], `${key} missing from es`).toBeTruthy()
  })

  it('and the help text says why the question is needed', () => {
    // The student is being asked for something the old form did not want. If
    // the label does not explain it, it reads as bureaucracy and gets filled
    // with anything.
    expect(EN_MESSAGES['marking.submit.question_text_help'].toLowerCase()).toContain('question')
  })
})
