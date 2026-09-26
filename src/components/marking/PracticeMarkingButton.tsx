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
 * an "Exam practice" section carrying real questions. They were rendered as
 * text in a grey box. A
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
 * The mark allocation is what identifies the question: on 4EA1 Paper 1 the only
 * question on the anthology text alone is Q4, language and structure together,
 * 12 marks. Everything else returns null and renders no button: the 22-mark
 * comparison needs the unseen passage, and Q1 to Q3 are always on that unseen
 * passage, never on the anthology text.
 *
 * CHANGED 26 September 2026, twice over.
 *  - "4 marks" used to map to Q2. The pages set a 4-mark retrieval question on
 *    the anthology text, which 4EA1 never asks (Q1 to Q3 are on Text One, the
 *    unseen extract, in every paper from the 2016 SAMs to Summer 2026), and the
 *    answer was marked against Q2, a question about a different text. The pages
 *    no longer set it and the mapping no longer accepts it.
 *  - The label had to be English. The bilingual pages passed their Arabic label
 *    ("... - ١٢ درجة") when the page was shown in Arabic, the pattern needed
 *    ASCII digits and the word "marks", and so every button silently
 *    disappeared for Arabic readers. Arabic-Indic digits and "درجة" / "درجات"
 *    are now read too, and "12-mark" with a hyphen, which also returned null.
 */
export function questionIdForPracticeType(label: string): string | null {
  const ascii = label
    // Arabic-Indic (U+0660-0669) and extended Arabic-Indic (U+06F0-06F9) digits.
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
  const marks = /(\d+)[\s-]*(?:marks?|درجة|درجات)/i.exec(ascii)
  if (!marks) return null
  return marks[1] === '12' ? 'Q4' : null
}

export async function PracticeMarkingButton({
  type,
  question,
  textTitle,
}: {
  /** The label above the question, e.g. "Language and structure - 12 marks". */
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
