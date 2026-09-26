import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Quote,
  Layers,
  Pen,
  Target,
  GitCompare,
  GraduationCap,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PracticeMarkingButton } from '@/components/marking/PracticeMarkingButton'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'H is for Hawk - Helen Macdonald - IGCSE Language A Anthology - The English Hub',
    description:
      'Helen Macdonald on grief and a goshawk, for Edexcel IGCSE Language A: themes, structural analysis, purpose and Paper 1 Section A practice.',
    images: [
      {
        url: '/api/og?title=H+is+for+Hawk+-+Helen+Macdonald+-+IGCSE+Language+A+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'H is for Hawk - Helen Macdonald - IGCSE Language A Anthology - The English Hub',
      },
    ],
  },
  title: 'H is for Hawk - Helen Macdonald - IGCSE Language A Anthology',
  description:
    'Helen Macdonald on grief and a goshawk, for Edexcel IGCSE Language A: themes, structural analysis, purpose and Paper 1 Section A practice.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/h-is-for-hawk' },
}

/**
 * CORRECTED 26 September 2026 against Pearson's anthology, Issue 8 (February
 * 2026), pp. 19-20. The themes and structure notes described the book, not the
 * extract: training and flying the hawk, a climax of self-recognition, a
 * resolution of quieter understanding. The extract is her first meeting with
 * the hawks. It opens on the seller checking ring numbers against paperwork,
 * contains no training or flying, and ends unresolved, in silence, before the
 * seller answers her plea. Grief is named only in the anthology's introduction.
 */
const themes = [
  {
    label: 'Grief',
    detail:
      'The anthology’s introduction explains that Macdonald adopted a goshawk to distract herself from her grief after her father’s sudden death. The extract itself never names the grief, which leaves the reader to sense it in the intensity of her reaction to the hawks.',
  },
  {
    label: 'Nature and the wild',
    detail:
      'The goshawk represents something fierce, alien and untameable. Macdonald is drawn to its difference from human emotional life.',
  },
  {
    label: 'Obsession',
    detail:
      'She has only just met the hawks, yet her sense of which bird is hers is already overwhelming: when the hawk meant for her feels wrong, she breaks etiquette and pleads with the seller in a desperate, incoherent barrage. The text registers obsession as both a refuge and a danger.',
  },
  {
    label: 'Identity and self',
    detail:
      'In her closeness to the bird, Macdonald loses and finds parts of herself. The text questions where the human ends and the wild begins.',
  },
  {
    label: 'Memory and loss',
    detail:
      'The hawk is also a way of remembering - a relationship to loss that does not require words.',
  },
]

const structuralAnalysis = {
  opening:
    'Macdonald opens with dialogue and paperwork: the seller checking the hawks’ ring numbers against their official documents. The procedural start delays the moment the reader is waiting for, the first sight of the hawk.',
  development:
    'The text moves between external action (unboxing and hooding the hawks, checking the ring numbers) and Macdonald’s internal reaction, the two threads tightening as the narrative progresses.',
  climax:
    'The turning point comes when the ring numbers show that the first hawk, the younger and smaller one, is the wrong bird. The second, meant to be hers, is wild and wailing and she cannot recognise it as her hawk; the climax is her slow panic and desperate plea to the seller to let her have the first bird instead.',
  resolution:
    'There is no resolution. The extract ends in silence, before the seller answers her plea, leaving the reader in suspense.',
  perspective:
    'First-person literary memoir. Macdonald’s voice is precise, lyrical and unsparing about her own emotional state.',
}

const writersPurpose = {
  achieve:
    'Macdonald wants to render grief in a register that does not depend on conventional emotional vocabulary - instead, through nature, attention and a non-human presence.',
  readerFeel:
    'She wants the reader to feel the strange consolation of being absorbed by something other than oneself, and the way attention to a creature can become attention to one’s own pain.',
  message:
    'Grief is survivable but not solvable. Sometimes the path through it runs not through human comfort but through a deep encounter with something wholly other.',
}

/** The text these practice questions are about, sent to the marker as context. */
const ANTHOLOGY_TEXT_TITLE = 'H is for Hawk'

/**
 * CHANGED 26 September 2026 to match the paper. This page used to set a
 * "Retrieval - 4 marks" question ("List four things you learn about Macdonald’s
 * relationship with the hawk"), a language-only question and a structure-only
 * question, each "12 marks". 4EA1 Paper 1 asks none of them. In every Pearson
 * document checked (the 2016 SAMs, the 2017 extra assessment materials, papers
 * P65890A and P65891RA of 2021, the June 2023, November 2023, May 2024 and
 * November 2024 papers, the November 2023, June 2024, June 2025 and Summer 2026
 * mark schemes, and the June 2019 and June 2025 examiners' reports), Q1 to Q3
 * are short answers on Text One, the unseen extract. The anthology text is
 * Text Two, and the only question on it alone is Q4: language and structure
 * together, on the whole extract, one 12-mark AO2 grid. Q5 (22 marks) compares
 * it with the unseen text, never with another anthology text.
 *
 * The labels are what questionIdForPracticeType maps: "12 marks" goes to Q4 and
 * "22 marks" to nothing, so q3 carries no marking button and says why. Do not
 * set a question on training or flying the hawk: the extract ends, in silence,
 * before the breeder answers her plea, and neither happens in it.
 */
const examPractice = {
  q1: {
    question:
      'How does the writer, Helen Macdonald, use language and structure to build towards her first sight of the hawk? Support your answer with close reference to the extract, including brief quotations.',
    type: 'Language and structure - 12 marks',
  },
  q2: {
    question:
      'How does the writer, Helen Macdonald, use language and structure to convey her emotional state? Support your answer with close reference to the extract, including brief quotations.',
    type: 'Language and structure - 12 marks',
  },
  q3: {
    question:
      'In the exam, Question 5 asks you to compare this extract with an unseen passage. Practise with any passage on a similar subject: compare how the two writers present their ideas and perspectives about a powerful encounter with an animal.',
    type: 'Comparison - 22 marks',
  },
}

const comparisonLinks = [
  {
    title: "The Explorer's Daughter",
    author: 'Kari Herbert',
    href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
    reason:
      'Both texts confront humans’ relationship with wild creatures. Compare Macdonald’s intimate single-bird focus with Herbert’s wider community-and-prey perspective.',
    themes: ['Nature', 'Animals', 'Ethics'],
  },
  {
    title: '127 Hours',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason:
      'Both texts describe extreme psychological states under prolonged stress. Compare Macdonald’s grief with Ralston’s survival - both narrators changed by what they endure.',
    themes: ['Endurance', 'Psychology', 'Transformation'],
  },
  {
    title: 'A Passage to Africa',
    author: 'George Alagiah (1955-2023)',
    href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    reason:
      'Both writers process emotionally heavy material with literary precision. Compare Macdonald’s grief-memoir with Alagiah’s witness-reportage - two careful prose styles handling pain.',
    themes: ['Grief', 'Witness', 'Prose style'],
  },
]

export default async function HIsForHawkPage() {
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
              H is for Hawk
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Helen Macdonald &middot; Memoir / nature writing
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

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.context')}
          </h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            Helen Macdonald&apos;s <em>H is for Hawk</em> (2014) is a literary memoir interweaving
            three strands: her grief after the sudden death of her father, her training of a goshawk
            named Mabel, and her reading of T. H. White&apos;s earlier book <em>The Goshawk</em>.
          </p>
          <p>
            The book won the Samuel Johnson Prize and the Costa Book of the Year, and is widely
            regarded as a landmark of contemporary British nature writing. The anthology extract is
            Macdonald&apos;s first meeting with her hawk, as the man selling the birds unpacks them
            on a quayside.
          </p>
          <p>Published by Jonathan Cape (Penguin Random House).</p>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.themes')}
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {themes.map((theme) => (
            <div key={theme.label} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {theme.label}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {theme.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.structural_analysis')}
          </h2>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Opening', content: structuralAnalysis.opening },
            { label: 'Development', content: structuralAnalysis.development },
            { label: 'Climax', content: structuralAnalysis.climax },
            { label: 'Resolution', content: structuralAnalysis.resolution },
            { label: 'Narrative perspective', content: structuralAnalysis.perspective },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {item.label}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.writers_purpose')}
          </h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {await t('anth_text.writers_purpose.achieve')}
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.achieve}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {await t('anth_text.writers_purpose.reader_feel')}
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.readerFeel}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {await t('anth_text.writers_purpose.message')}
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.message}
            </p>
          </div>
        </div>
      </section>

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
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              This question can&apos;t be marked here: it needs the unseen passage that the exam
              pairs with this text.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            {await t('anth_text.section.compare_with')}
          </h2>
        </div>
        {/* Second sentence added 26 September 2026: the shared intro calls these
            pairings for the exam, but 4EA1 never pairs two anthology texts. */}
        <p className="text-body-sm text-muted-foreground mb-5">
          {await t('anth_text.compare_with.intro')} In the exam, Question 5 pairs this text with an
          unseen passage, never another anthology text, so use these comparisons for revision.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonLinks.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border/40 bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90 font-serif">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.author}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg bg-muted/50 p-4 text-center text-body-xs text-muted-foreground">
        <p>
          <strong className="text-foreground">{await t('anth_text.rights_notice_label')}</strong>{' '}
          {/* As the anthology's acknowledgements give it. Jonathan Cape is the
              publisher, not the copyright holder; until 26 September 2026 this read
              "Jonathan Cape (Penguin Random House) / Helen Macdonald 2014". */}
          &copy; Helen Macdonald 2014, reproduced in the anthology by permission of The Random House
          Group Limited and Grove/Atlantic, Inc. Brief paraphrases on this page are for criticism,
          review and quotation under CDPA 1988 &sect;30. For the full text, use the Pearson Edexcel
          IGCSE anthology (ISBN 978-1-446-93108-0), which Pearson publishes free.
        </p>
        <p className="mt-2">{await t('anth_text.footer_align')}</p>
      </footer>
    </div>
  )
}
