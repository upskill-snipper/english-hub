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
 * the hawks. It opens on the seller's talk of ring numbers and paperwork,
 * contains no training or flying, and ends unresolved, in silence, before the
 * seller answers her plea. Grief is named only in the anthology's introduction.
 *
 * Checked again the same day, by script against the extract: the remaining
 * themes, purpose, context and comparison notes also described the book. The
 * extract offers no refuge, consolation or taming (it ends in panic and
 * silence), the seller brings two hawks, the opening only proposes the
 * ring-number check (it is made at line 45), and the Ralston extract covers
 * minutes, not prolonged stress. Claims neither the anthology nor the verified
 * guide could confirm were removed, among them that the book is "widely
 * regarded as a landmark of contemporary British nature writing".
 *
 * A second check, also 26 September 2026: "Both hawks are wild" became
 * captive-bred (line 3; only the first hawk's eyes are called wild, line 41),
 * the one hatched in an incubator is the hawk, not Macdonald, and she slows
 * time while the box is untied, before the hawk appears, not as it does.
 *
 * 10 October 2026: the theme said the world rushes into the hawk's eyes. At
 * lines 26-31 the extract says only that, after an aviary and a box, she can
 * now take in the whole view, and lists it. The rushing is the guide's
 * reading, so do not state it as the text.
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
      'Both hawks are captive-bred, yet Macdonald presents the first as fierce, alien and impossible to pin down, trying image after image to describe her. She also imagines the hawk’s view: a bird that has known only an aviary and then a box can now take in everything, from a cormorant to parked cars and gulls. The hawk becomes a creature with her own experience, not only a symbol of Macdonald’s feelings.',
  },
  {
    label: 'Obsession',
    detail:
      'She has only just met the hawks, yet her sense of which bird is hers is already overwhelming. The forms say the larger, older hawk is hers, but she does not recognise her, and a refrain in italics keeps returning to which hawk is hers. Once the money has changed hands she breaks etiquette and pleads with the seller in a desperate rush of questions. Her certainty is instinctive, not rational, and it overrides rules she knows well.',
  },
  {
    label: 'Identity and self',
    detail:
      'Macdonald is an experienced falconer who knows the rituals, the ring numbers, the forms and the hood, yet in the extract she loses her composure. The only description of how she looks comes at the end, when she imagines how the seller sees her: tall, pale and dishevelled, pleading like a tragic heroine. One reading is that she has become a stranger to herself.',
  },
  {
    label: 'Memory and loss',
    detail:
      'Loss is never named in the extract, but it can be sensed. As the seller gathers up the first hawk, Macdonald tells how the hawk was hatched in an incubator and how he fed her as a chick from tweezers, and all at once she loves him. One reading is that a picture of patient, parental care moves her because of what she has lost.',
  },
]

const structuralAnalysis = {
  opening:
    'Macdonald opens with the seller’s words about paperwork: they will check the hawks’ ring numbers against the official forms, so that she does not go home with the wrong bird. The procedural start delays the moment the reader is waiting for, the first sight of the hawk, and the remark about the wrong bird foreshadows the reversal at line 46.',
  development:
    'The text moves between external action (unboxing and hooding the hawks, checking the ring numbers) and Macdonald’s internal reaction. The tension rises as the first box is untied and reaches a first peak as the hawk is pulled out into the sunlight, where the narrative slips from the past tense into the present (line 15). It eases when the past tense returns with the seller’s calm at line 32.',
  climax:
    'The turning point comes when the ring numbers show that the first hawk, the younger and smaller one, is the wrong bird. The second, meant to be hers, is darker, much bigger and wailing, and she cannot recognise her as her hawk; the climax is her slow panic and desperate plea to the seller to let her have the first bird instead.',
  resolution:
    'There is no resolution. The extract ends in silence, before the seller answers her plea, leaving the reader in suspense.',
  perspective:
    'First-person literary memoir. Macdonald’s voice is precise, lyrical and unsparing about her own emotional state.',
}

const writersPurpose = {
  achieve:
    'To make the reader feel what her first meeting with the hawks was like: overwhelming, wonderful and frightening at once. The extract never names her grief; the anthology’s introduction supplies it, and her intense reactions can be read in its light.',
  readerFeel:
    'Wonder and fear at the hawk’s wildness, amusement and sympathy at a loss of composure that Macdonald herself mocks, and suspense at the end, when the reader is left waiting, like her, for the seller’s answer.',
  message:
    'Recognition is instinctive, not rational: the forms say one hawk is hers, but she feels that the other is. Read with the introduction, the extract suggests how strong feeling can surface without ever being named.',
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
      'Both writers watch wild animals intently and have mixed feelings about them. Compare Macdonald, close enough to touch the two hawks on the quayside, with Herbert, watching a narwhal hunt from a lookout on the shore and torn between the hunters and the hunted.',
    themes: ['Nature', 'Animals', 'Mixed feelings'],
  },
  {
    title: '127 Hours',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason:
      'Both writers slow time as their most intense moment arrives: Ralston stretches the three seconds of the rockfall, Macdonald the untying of the box. Ralston tells his accident in the present tense throughout, while Macdonald switches into it as the hawk is pulled out of the box, and both end before the outcome is known.',
    themes: ['Present tense', 'Pace', 'Suspense'],
  },
  {
    title: 'A Passage to Africa',
    author: 'George Alagiah (1955-2023)',
    href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    reason:
      'Both are memoirs in which one encounter affects the writer deeply, and both writers are unsparing about themselves: Alagiah, unsettled by a starving man’s apologetic smile, questions his own profession, while Macdonald mocks her own loss of composure. Compare how each presents their own reactions.',
    themes: ['Memoir', 'Self-examination', 'Encounter'],
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
            named Mabel, and a portrait of T. H. White, whose book <em>The Goshawk</em> (1951)
            records his own attempt to train one.
          </p>
          <p>
            The book won the 2014 Samuel Johnson Prize and the 2014 Costa Book of the Year. The
            anthology extract is Macdonald&apos;s first meeting with her hawk, on a quayside, where
            the man selling the birds has brought two hawks, one of them meant for another falconer.
            It contains no training or flying, and it never mentions her father: only the
            anthology&apos;s introduction does.
          </p>
          <p>First published by Jonathan Cape in 2014.</p>
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
        {/* Second sentence added 26 September 2026, when the shared intro called
            these pairings for the exam; 4EA1 never pairs two anthology texts.
            If the shared intro now says so itself, this repeats it: drop one. */}
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
