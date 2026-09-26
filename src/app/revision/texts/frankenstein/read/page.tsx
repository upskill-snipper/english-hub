'use client'

import Link from 'next/link'
import { BookOpen } from 'lucide-react'

import { InteractiveTextViewer } from '@/components/study/InteractiveTextViewer'
import { frankensteinText } from '@/data/full-texts/frankenstein'
import { useT } from '@/lib/i18n/use-t'
import { textGuideHref } from '@/lib/revision/guide-href'
import { forTheReader } from './for-the-reader'

/**
 * The whole of Frankenstein, with the notes and panels this reader has always
 * had.
 *
 * The novel is the held edition, src/data/full-texts/frankenstein.ts (Mary
 * Shelley's 1831 text, Project Gutenberg #42324), imported and never retyped.
 * Until 26 September 2026 this file carried about an eighth of the novel typed
 * in by hand and called it "the 1818 first edition"; see ./notes.ts for what
 * was wrong with it and for how each of its 52 notes was moved onto the held
 * text.
 *
 * WHY NOT FullTextReader, which the other novels use. That component is for
 * texts with no commentary of their own, and it merges in notes generated from
 * the guide by scripts/generate-text-annotations.mjs, which runs at every
 * build. This reader has its own notes, and a generated note on a span that
 * crosses one of them would hide one of the two, since the viewer cannot draw
 * a highlight inside another. So the viewer is mounted directly, as Macbeth's
 * is, and the generator, finding no FullTextReader element in this file,
 * generates nothing for Frankenstein. (It searches this file's source for the
 * element's opening tag, so that tag must not be written even in a comment.)
 *
 * ./for-the-reader.ts merges the notes on and sets the edition's underscores
 * as italics, which the viewer had printed as underscores.
 */
const frankensteinData = forTheReader(frankensteinText)

export default function FrankensteinReadPage() {
  const t = useT()
  const guideHref = textGuideHref('frankenstein')
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={guideHref} className="transition-colors hover:text-foreground">
          Frankenstein
        </Link>
        <span>/</span>
        <span className="font-medium text-foreground">{t('rev.texts.fr.read.crumb_current')}</span>
      </nav>

      {/* The rights position, and which text this is. The notice before the
          rebuild said "the 1818 first edition"; the rebuild's first version
          used the shared fulltext.public_domain line, which says "a published
          modern-spelling edition", and this is the 1831 edition in its own
          spelling ("to-morrow", "every thing", "dæmon"). */}
      <p className="mb-6 flex items-start gap-2 text-body-sm text-muted-foreground">
        <BookOpen aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        <span>{t('rev.texts.fr.read.rights')}</span>
      </p>

      {/* A new key, not "frankenstein". The viewer restores the ids of the
          sections a reader has ticked without checking they still exist, so
          the old reader's eight ids ("ch4-5", "ch24-conclusion") would have
          counted a returning student as eight sections through a novel of
          thirty whose sections they had never opened here. */}
      <InteractiveTextViewer
        data={frankensteinData}
        storageKey="frankenstein-full-text"
        className="min-h-[600px]"
      />

      <div className="mt-8 border-t border-border/60 pt-6">
        <Link
          href={guideHref}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          {t('rev.texts.fr.read.back_to_guide')}
        </Link>
      </div>
    </div>
  )
}
