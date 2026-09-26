import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PracticeMarkingButton } from '@/components/marking/PracticeMarkingButton'
import { StoryVisuals } from '@/components/study-guide/visuals/story-visuals'
import { StudyGuideSections } from '@/components/study-guide/study-guide-sections'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { getLocale, t } from '@/lib/i18n/t'
import { guide } from '@/data/study-guides/a-game-of-polo-with-a-headless-goat'

/**
 * A Game of Polo with a Headless Goat, the Edexcel IGCSE Language A anthology
 * extract.
 *
 * REWRITTEN 26 September 2026. The 705-line guide that stood here was about the
 * wrong text. It analysed buzkashi, the Central Asian sport in the book's
 * title, while the extract Pearson prints in the anthology is Emma Levine
 * filming a donkey-cart race on a main road in Karachi, in which
 * buzkashi does not appear. Its themes, language notes, structure notes and
 * model outline all described the sport, so none of it was kept. Its rights
 * notice also named the wrong publisher (Little, Brown; the book is André
 * Deutsch's).
 *
 * The body is now the verified study guide in
 * src/data/study-guides/a-game-of-polo-with-a-headless-goat.ts, written from
 * the anthology and checked quotation by quotation. What this page keeps is its
 * own frame and its exam-practice section, because the marking buttons there
 * are how a student gets an answer on this text marked. Later the same day the
 * practice questions themselves were rewritten to match the real paper: see
 * the comment above examPractice.
 */

export const metadata: Metadata = {
  openGraph: {
    title: 'A Game of Polo with a Headless Goat - IGCSE Anthology - The English Hub',
    description:
      'Emma Levine’s Karachi donkey-cart race, the Edexcel IGCSE Language A anthology extract: context, key quotations, language, structure and Paper 1 practice.',
    images: [
      {
        url: '/api/og?title=A+Game+of+Polo+with+a+Headless+Goat+-+IGCSE+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'A Game of Polo with a Headless Goat - IGCSE Anthology - The English Hub',
      },
    ],
  },
  title: 'A Game of Polo with a Headless Goat - IGCSE Anthology',
  description:
    'Emma Levine’s Karachi donkey-cart race, the Edexcel IGCSE Language A anthology extract: context, key quotations, language, structure and Paper 1 practice.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
  },
}

const ANTHOLOGY_TEXT_TITLE = 'A Game of Polo with a Headless Goat'

// REWRITTEN 26 September 2026. Until then this asked a 4-mark retrieval
// question ("List four things you learn about the event Levine witnesses"),
// then a language-only and a structure-only question, each "12 marks". None of
// the three is a question 4EA1 Paper 1 sets on the anthology text. On every
// Pearson paper checked (the 2016 SAMs, P65890A and P65891RA of 2021, 4EA1/01R
// of June 2023, November 2023, and 23 May 2024, which printed this extract as
// Text Two) and in the June 2019 and June 2025 examiners' reports, Q1-3 are
// short answers on the unseen Text One. The anthology text is examined only by
// Q4, one 12-mark question on language AND structure across the whole extract,
// and by Q5, a 22-mark comparison with the unseen text. The retrieval answer
// was also sent to the Q2 scheme, which describes Text One, so it was marked
// as the wrong question.
//
// The labels are what questionIdForPracticeType in PracticeMarkingButton maps:
// "12 marks" goes to Q4 and "22 marks" to nothing, so q3 has no button call at
// all (a call there would render nothing and still count as a button). The
// button is always passed the English `type`, even on the Arabic page. Until
// this rewrite the Arabic page passed typeAr, which the mapping, reading only
// Western digits and "marks", could not match ("١٢ درجة"), so every button
// silently disappeared in Arabic. The English label keeps the button
// independent of whether the mapping can read a translation.
const examPractice = {
  q1: {
    question:
      'How does the writer, Emma Levine, use language and structure to take the reader through the experience of the race? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف تستخدم الكاتبة، Emma Levine، اللغةَ والبنيةَ لتأخذ القارئ عبر تجربة السباق؟ ادعم إجابتك بإحالات دقيقة إلى المقتطف، بما في ذلك اقتباسات قصيرة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
  },
  q2: {
    question:
      'How does the writer, Emma Levine, use language and structure to convey the atmosphere of the race? Support your answer with close reference to the extract, including brief quotations.',
    questionAr:
      'كيف تستخدم الكاتبة، Emma Levine، اللغةَ والبنيةَ لنقل أجواء السباق؟ ادعم إجابتك بإحالات دقيقة إلى المقتطف، بما في ذلك اقتباسات قصيرة.',
    type: 'Language and structure - 12 marks',
    typeAr: 'اللغة والبنية - ١٢ درجة',
  },
  q3: {
    question:
      'In the exam, Question 5 asks you to compare this extract with an unseen passage. Practise with any passage on a similar subject: compare how the two writers present their ideas and perspectives about an unusual sporting event.',
    questionAr:
      'في الامتحان، يطلب منك السؤال الخامس مقارنة هذا المقتطف بنصٍّ لم تره من قبل. تدرَّب بأيّ نصٍّ عن موضوع مشابه: قارن كيف يقدّم الكاتبان أفكارهما ووجهات نظرهما حول حدثٍ رياضيٍّ غير مألوف.',
    type: 'Comparison - 22 marks',
    typeAr: 'المقارنة - ٢٢ درجة',
    unmarkedNote:
      "This question can't be marked here: it needs the unseen passage that the exam pairs with this text.",
    unmarkedNoteAr:
      'لا يمكن تصحيح هذا السؤال هنا: فهو يحتاج إلى النصّ الذي لم تره من قبل، والذي يضعه الامتحان إلى جانب هذا النص.',
  },
}

export default async function AGameOfPoloPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])
  const locale = await getLocale()
  const ar = locale === 'ar'

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel-lang/anthology" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('anth_text.back_to_anthology')}
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-amber-600 dark:text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground font-serif">
              A Game of Polo with a Headless Goat
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Emma Levine &middot; {ar ? 'كتابة رحلات' : 'Travel writing'}
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                {await t('anth_text.badge_lang_a')}
              </Badge>
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600 text-[0.65rem]">
                {await t('anth_text.badge_paper_1a')}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <StoryVisuals guide={guide} />
      <StudyGuideSections guide={guide} />

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.exam_practice')}
          </h2>
        </div>
        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {ar ? examPractice.q1.typeAr : examPractice.q1.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">
              {ar ? examPractice.q1.questionAr : examPractice.q1.question}
            </p>
            {await PracticeMarkingButton({
              type: examPractice.q1.type,
              question: ar ? examPractice.q1.questionAr : examPractice.q1.question,
              textTitle: ANTHOLOGY_TEXT_TITLE,
            })}
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {ar ? examPractice.q2.typeAr : examPractice.q2.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">
              {ar ? examPractice.q2.questionAr : examPractice.q2.question}
            </p>
            {await PracticeMarkingButton({
              type: examPractice.q2.type,
              question: ar ? examPractice.q2.questionAr : examPractice.q2.question,
              textTitle: ANTHOLOGY_TEXT_TITLE,
            })}
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {ar ? examPractice.q3.typeAr : examPractice.q3.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">
              {ar ? examPractice.q3.questionAr : examPractice.q3.question}
            </p>
            <p className="mt-2 text-body-sm text-muted-foreground">
              {ar ? examPractice.q3.unmarkedNoteAr : examPractice.q3.unmarkedNote}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
