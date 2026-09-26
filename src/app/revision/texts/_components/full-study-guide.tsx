import Link from 'next/link'
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { ContentAdvisory } from '@/components/content/ContentAdvisory'
import { ExamPlacementCard } from '@/components/revision/exam-placement-card'
import { StudyGuideSections } from '@/components/study-guide/study-guide-sections'
import { StoryVisuals } from '@/components/study-guide/visuals/story-visuals'
import { getServerBoard } from '@/lib/board/get-server-board'
import type { SetText } from '@/lib/board/set-texts'
import { t } from '@/lib/i18n/t'
import { textBackLink } from '@/lib/revision/text-back-href'
import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * A set-text page that is its study guide, for a text that had no guide at all.
 *
 * WHAT THIS REPLACED. For thirty-eight of the 108 registered set texts, the page
 * a student reached said the guide was "in production" and offered links away.
 * This renders the whole guide from src/data/study-guides/<slug>.ts: overview,
 * context, themes, characters, quotations, language, structure, vocabulary,
 * exam practice and a model answer.
 *
 * The title and author come from the GUIDE, not the registry row, because the
 * registry has been wrong: it held M.R. James for a chapter the anthology
 * prints from Susan Hill's The Woman in Black. The guide is written against the
 * specification.
 */
export async function FullStudyGuide({ text, guide }: { text: SetText; guide: StudyGuide }) {
  const board = await getServerBoard()
  const back = textBackLink(text.slug, board)
  const [tBack, tBackBoard, tBy, tScope, tForm] = await Promise.all([
    t('analysis.deep.set_text.back_to_texts'),
    t('textnav.back_to_board_shelf'),
    t('analysis.deep.set_text.by_author'),
    t('study_guide.scope_label'),
    // The raw form value ("short-story") was printed here until 26 September
    // 2026: lower case, hyphen stripped, and English on the Arabic site.
    t(`study_guide.form.${guide.form}`),
  ])

  return (
    <div className="space-y-10 pb-16">
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          {/* A plain styled link. Written before the shared Button rendered a
              link as a link (55d051d1); either would now be correct. */}
          <Link
            href={back.href}
            className="mb-4 -ms-2 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-body-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            {back.isBoardShelf ? tBackBoard : tBack}
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="me-1 size-3" />
              {tForm}
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {guide.title}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            {tBy} {guide.author}
          </p>
          <p className="mt-4 flex max-w-2xl items-start gap-2 text-body-sm text-muted-foreground">
            <BookOpen className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              <span className="font-semibold text-foreground">{tScope}: </span>
              {guide.scope}
            </span>
          </p>
        </div>
      </section>

      <ContentAdvisory themes={guide.contentGuidance} />

      <ExamPlacementCard slug={text.slug} />

      <StoryVisuals guide={guide} />

      <StudyGuideSections guide={guide} />
    </div>
  )
}
