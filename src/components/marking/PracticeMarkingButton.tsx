import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { markingLink } from '@/lib/marking/submit-prefill'
import { t } from '@/lib/i18n/t'

/**
 * "Get this marked", on an exam-practice question that previously had nowhere
 * to go.
 *
 * THE DEFECT. Each of the ten Edexcel IGCSE Language A anthology pages ends with
 * an "Exam practice" section carrying real questions - a 4-mark retrieval and
 * two 12-mark analysis tasks. They were rendered as text in a grey box. A
 * student who had just read the whole guide to their set text reached a question
 * about it and had nothing to click. The AI marking tool, which is the paid
 * feature, was two navigations away and arrived with an empty form, because
 * until this week nothing on /marking/submit read its own URL.
 *
 * WHY THIS IS A BUTTON AND NOT A WRAPPER COMPONENT. The three practice blocks
 * are not the same shape across the ten pages: some are bilingual with an
 * `ar ? ... : ...` ternary, some are English-only, and at least one carries a
 * nested "model outline" list inside the same box. A component that replaced the
 * block would have silently destroyed that outline on the pages that have one.
 * Adding a button inside whatever box already exists is shape-agnostic, and the
 * first attempt at the replacing version is why this one exists.
 *
 * WHY THE MAPPING FAILS SAFE. The mark-scheme question is derived from the mark
 * allocation in the label rather than hand-written at thirty call sites, and an
 * unrecognised label renders NOTHING rather than guessing. Sending a 4-mark
 * retrieval answer to the 12-mark analysis grid would hand a student a mark
 * against objectives they were not being assessed on, which is worse than no
 * button at all.
 *
 * The text title travels with the link as `studiedText`, which the marker
 * injects into its prompt as context. On this paper a single question id covers
 * all ten anthology texts, so knowing which one the answer is about is most of
 * the judgement.
 */

/** The 4EA1/01 mark scheme these questions are set against. */
const SCHEME_ID = 'edexcel-igcse-lang-paper1'

/**
 * Map a practice-question label to the mark-scheme question it exemplifies.
 *
 * The mark allocation is what identifies the question on this paper: 4 marks is
 * Q2 (explain in your own words, AO1) and 12 marks is Q4 (language AND
 * structure, AO2) - which is why both the "Language analysis" and "Structural
 * analysis" labels map to Q4 rather than to two different questions.
 *
 * Returns null for anything else, including the 22-mark comparison, which
 * cannot be answered from a single text's page.
 */
export function questionIdForPracticeType(label: string): string | null {
  const marks = /(\d+)\s*marks?/i.exec(label)
  if (!marks) return null
  switch (marks[1]) {
    case '4':
      return 'Q2'
    case '12':
      return 'Q4'
    default:
      return null
  }
}

export async function PracticeMarkingButton({
  type,
  question,
  textTitle,
}: {
  /** The label above the question, e.g. "Language analysis - 12 marks". */
  type: string
  /** The question itself, in whichever language the page resolved. */
  question: string
  /** The anthology text this is about, sent to the marker as context. */
  textTitle: string
}) {
  const questionId = questionIdForPracticeType(type)
  if (!questionId) return null

  const cta = await t('mock.get_this_marked')

  return (
    <Button
      variant="outline"
      size="sm"
      className="mt-3"
      render={
        <Link
          href={markingLink({
            schemeId: SCHEME_ID,
            questionId,
            text: textTitle,
            title: question.slice(0, 200),
          })}
        />
      }
    >
      {cta}
      <ArrowRight className="size-3.5" aria-hidden="true" />
    </Button>
  )
}
