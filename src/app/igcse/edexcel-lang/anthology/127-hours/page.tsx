import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PracticeMarkingButton } from '@/components/marking/PracticeMarkingButton'
import { StoryVisuals } from '@/components/study-guide/visuals/story-visuals'
import { StudyGuideSections } from '@/components/study-guide/study-guide-sections'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'
import { guide } from '@/data/study-guides/between-a-rock-and-a-hard-place'

/**
 * From 127 Hours: Between a Rock and a Hard Place, the Edexcel IGCSE Language A
 * anthology extract.
 *
 * REWRITTEN 26 September 2026. The 557-line guide that stood here described
 * the wrong part of the book. The anthology prints a 56-line extract (Simon &
 * Schuster, 2010, pp. 22-24) that ends minutes after the boulder traps Ralston's
 * arm. Four of the page's five "extract focuses", its climax and resolution
 * (the self-amputation and the walk out), its "tracks hours and days"
 * structure note and eight of its twelve vocabulary words (tourniquet,
 * amputation, hallucination and others) were about events the extract does
 * not contain. None of it was kept.
 *
 * The body is now the verified study guide in
 * src/data/study-guides/between-a-rock-and-a-hard-place.ts, written from the
 * anthology and checked quotation by quotation against it. Its canonical page
 * is /revision/texts/between-a-rock-and-a-hard-place, and this page's
 * canonical points there so the guide is one page to a search engine. This
 * page keeps its frame and the three practice questions with their marking
 * buttons: those are how a student gets an answer on this extract marked. Two
 * questions were reworded to fit the extract (the first asked about "his time
 * trapped in the canyon", the third about "the moment of his escape"), and the
 * model outline, which described the amputation, is gone. Their type labels
 * are the ones questionIdForPracticeType maps to the 4EA1 mark scheme.
 */

export const metadata: Metadata = {
  openGraph: {
    title: 'Between a Rock and a Hard Place - IGCSE Language A Anthology - The English Hub',
    description:
      'The Aron Ralston anthology extract for Edexcel IGCSE Language A: the accident in the canyon, key quotations, language, structure and Paper 1 practice.',
    images: [
      {
        url: '/api/og?title=Between+a+Rock+and+a+Hard+Place+-+IGCSE+Language+A+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Between a Rock and a Hard Place - IGCSE Language A Anthology - The English Hub',
      },
    ],
  },
  title: 'Between a Rock and a Hard Place - IGCSE Language A Anthology',
  description:
    'The Aron Ralston anthology extract for Edexcel IGCSE Language A: the accident in the canyon, key quotations, language, structure and Paper 1 practice.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/between-a-rock-and-a-hard-place',
  },
}

const ANTHOLOGY_TEXT_TITLE = 'From Between a Rock and a Hard Place'

const examPractice = {
  q1: {
    question: "List four things you learn about Ralston's situation in the canyon.",
    type: 'Retrieval - 4 marks',
  },
  q2: {
    question: 'How does Ralston use language to convey the intensity of the accident?',
    type: 'Language analysis - 12 marks',
  },
  q3: {
    question:
      'How does Ralston structure the text to build tension before and after the boulder falls?',
    type: 'Structural analysis - 12 marks',
  },
}

export default async function OneHundredTwentySevenHoursPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])

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
              From Between a Rock and a Hard Place
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Aron Ralston (b. 1975) &middot; Autobiography
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
              {examPractice.q1.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q1.question}</p>
            {await PracticeMarkingButton({
              type: examPractice.q1.type,
              question: examPractice.q1.question,
              textTitle: ANTHOLOGY_TEXT_TITLE,
            })}
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {examPractice.q2.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q2.question}</p>
            {await PracticeMarkingButton({
              type: examPractice.q2.type,
              question: examPractice.q2.question,
              textTitle: ANTHOLOGY_TEXT_TITLE,
            })}
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {examPractice.q3.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q3.question}</p>
            {await PracticeMarkingButton({
              type: examPractice.q3.type,
              question: examPractice.q3.question,
              textTitle: ANTHOLOGY_TEXT_TITLE,
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
