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
    title: 'Chinese Cinderella - Adeline Yen Mah - IGCSE Anthology - The English Hub',
    description:
      'The Adeline Yen Mah anthology extract for Edexcel IGCSE Language A: themes, structural analysis, purpose and Paper 1 Section A practice.',
    images: [
      {
        url: '/api/og?title=Chinese+Cinderella+-+Adeline+Yen+Mah+-+IGCSE+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Chinese Cinderella - Adeline Yen Mah - IGCSE Anthology - The English Hub',
      },
    ],
  },
  title: 'Chinese Cinderella - Adeline Yen Mah - IGCSE Anthology',
  description:
    'The Adeline Yen Mah anthology extract for Edexcel IGCSE Language A: themes, structural analysis, purpose and Paper 1 Section A practice.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/chinese-cinderella',
  },
}

// Until 26 September 2026 these described the whole book: a worth she
// "slowly" came to suspect, "school success", an endurance that would
// "eventually become success". The extract is one afternoon and the prize is
// international. The labels are the ones the study guide's timeline tags its
// scenes with, so keep them.
const themes = [
  {
    label: 'Family rejection',
    detail:
      'The anthology’s introduction explains that her stepmother has rejected her and her brothers and sisters look down on her. The extract shows it without saying so: a call home makes her fear that someone has died, she does not know the house her family has moved to, and when she arrives her stepmother is out playing bridge and her brothers and sister are by the pool.',
  },
  {
    label: 'Identity and worth',
    detail:
      'Reading of her prize, Adeline can hardly believe that the winner is her. Her worth in her father’s eyes rises because she has given him face in front of a respected colleague, and when she names her own ambition, to be a writer, he dismisses it and decides that she will study medicine.',
  },
  {
    label: 'Resilience',
    detail:
      'Her resilience in the extract is quiet and practical. Her joke about how she won can be read as a way of keeping her father in a good mood, she dares to ask to go to university in England, and when he overrules her ambition she says nothing and agrees, because she would study anything to get there.',
  },
  {
    label: 'Recognition and validation',
    detail:
      'The recognition comes from outside the family: a newspaper report that she has won first prize in an international play-writing competition held in London. Father learns of it from a colleague and is openly proud, but within minutes he is deciding her future for her. The extract shows how much the recognition means to her and how little it changes who holds the power.',
  },
  {
    label: 'Childhood memory',
    detail:
      'The extract is one remembered afternoon, told by the adult Yen Mah about herself at fourteen. It recreates the girl’s dread and joy as she felt them, while the adult chooses what to show and, now and then, judges her younger self.',
  },
]

// Until 26 September 2026 the climax was set against a "long preceding
// pattern of neglect" the extract never narrates, and the resolution did not
// say what happens: Father overrules her wish to write and she agrees.
const structuralAnalysis = {
  opening:
    'The extract opens on an ordinary Saturday at boarding school: a game of Monopoly, hot weather and a radio warning that a typhoon may come, while the thought that her schooling may soon end nags at Adeline. The calm surface is shadowed by worry before anything has happened.',
  // Until 26 September 2026 this described "accumulated incidents" that
  // "establish a pattern". The anthology extract (Issue 8, pp. 21-23) is one
  // continuous episode on a single Saturday afternoon.
  development:
    'The text follows a single continuous episode on one Saturday afternoon: Adeline is called away from a game of Monopoly at school, driven home full of foreboding, and summoned to her father’s room. Tension builds through her uncertainty about why she has been sent for.',
  climax:
    'The turning point sits at the centre of the extract, when Father shows her a newspaper report: she has won first prize in an international play-writing competition held in London. Set against the dread that comes before it, the news turns fear into disbelief and then joy.',
  resolution:
    'The ending is bittersweet. Father agrees that she may go to university in England, but mocks her wish to be a writer and decides that she will study medicine; she stays silent, then agrees and thanks him. Yen Mah offers no direct judgement, leaving the reader to weigh what Adeline has gained against what she has given up.',
  perspective:
    'First-person autobiography, mostly in the past tense, written by the adult Yen Mah about herself at fourteen. Two perspectives work together: the girl’s feelings, sometimes given as present-tense thoughts, and the adult’s hindsight, which lets the reader see what the girl could not.',
}

// Until 26 September 2026 this had her finding proof of her worth
// "elsewhere" and growing a self her family "failed to nurture": her later
// life, not the extract, which ends with Father choosing her career.
const writersPurpose = {
  achieve:
    'Yen Mah recreates one afternoon of her childhood that shows what it meant to be the unwanted daughter of the book’s subtitle: her father’s pride appears to be rare, is prompted from outside the family and comes with conditions.',
  readerFeel:
    'She wants the reader to share the girl’s dread, disbelief and joy, while seeing more clearly than the fourteen-year-old could how conditional her father’s approval is and what her agreement costs her.',
  message:
    'Recognition from outside the family can open a door, but it does not give a child control of her own future. The extract passes no verdict on the bargain Adeline accepts; it leaves the reader to judge it.',
}

/** The text these practice questions are about, sent to the marker as context. */
const ANTHOLOGY_TEXT_TITLE = 'Chinese Cinderella'

// Until 26 September 2026 this set a "List four things" retrieval question
// for 4 marks, a language-only question and a structure-only question, each
// for 12. No 4EA1 paper asks any of those. On every Pearson 4EA1/01 paper,
// mark scheme and examiners' report checked (the SAMs, the 2017 extra
// assessment material, the June 2019 examiners' report, the 2021 papers, June
// 2023, November 2023, May 2024, November 2024 and the June 2025 mark scheme
// and examiners' report) Questions 1-3 are on the unseen Text One, Question 4
// (12 marks, AO2) is the only question on the anthology text and always asks
// about language AND structure together on one grid, and Question 5 (22 marks,
// AO3) compares the anthology text with the unseen one; the exam never pairs
// two anthology texts.
// The retrieval question was also sent to Q2, a Text One question, so it was
// marked as the wrong question. The labels are what questionIdForPracticeType
// in PracticeMarkingButton reads: "12 marks" maps to Q4, and "22 marks" maps to
// nothing, which is why q3 renders no button. Keep the space before "marks".
const examPractice = {
  q1: {
    question:
      'How does the writer, Adeline Yen Mah, use language and structure to lead the reader towards the moment of recognition? Support your answer with close reference to the extract, including brief quotations.',
    type: 'Language and structure - 12 marks',
  },
  q2: {
    question:
      'How does the writer, Adeline Yen Mah, use language and structure to convey her emotions? Support your answer with close reference to the extract, including brief quotations.',
    type: 'Language and structure - 12 marks',
  },
  q3: {
    question:
      'In the exam, Question 5 asks you to compare this extract with an unseen passage. Practise with any passage on a similar subject: compare how the two writers present their ideas and perspectives about childhood and family.',
    type: 'Comparison - 22 marks',
  },
}

// Until 26 September 2026 these had Alagiah reflecting on "early life events"
// (in his extract he is an adult television reporter in Somalia) and Adeline
// refusing "others' verdicts" (she agrees to her father's plan). The same day's
// first rewrite gave a teacher calling Zephaniah stupid as an adult deciding
// his future (the teacher who does that points him at football) and had
// Adichie's roommate shocked at her English (she is shocked by Adichie, then
// asks about her English).
const comparisonLinks = [
  {
    title: 'A Passage to Africa',
    author: 'George Alagiah (1955-2023)',
    href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    reason:
      'Both are first-person accounts, told with hindsight, of one day and a single encounter within it. Compare Yen Mah’s private, family focus, a daughter summoned by her father, with Alagiah’s account of a stranger he met briefly while reporting from Somalia for television.',
    themes: ['Memoir', 'One encounter', 'Reflection'],
  },
  {
    title: 'Young and Dyslexic? You’ve Got It Going On',
    author: 'Benjamin Zephaniah (1958-2023)',
    href: '/igcse/edexcel-lang/anthology/young-and-dyslexic',
    reason:
      'Both writers show an adult deciding what a young person can become: Father dismisses Adeline’s wish to be a writer, and when Zephaniah asks a teacher for help with his writing, the teacher tells him he will make a good sportsperson and suggests he go and play football. Compare their responses: Adeline stays silent and agrees, while Zephaniah often argued with his teachers and was expelled partly for it. Both became published writers.',
    themes: ['Self-worth', 'Resilience', 'Misjudgement'],
  },
  {
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie',
    href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
    reason:
      'Both writers were writing from a young age, and both had their English judged by someone with a limited view of them: Father doubts that Adeline could write English as well as a native speaker, and Adichie’s American roommate, shocked by her, asks where she learned such good English, not knowing that it is Nigeria’s official language. Compare Yen Mah’s private family scene with Adichie’s public argument about single stories.',
    themes: ['Identity', 'Language', 'Being judged'],
  },
]

export default async function ChineseCinderellaPage() {
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
              Chinese Cinderella
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Adeline Yen Mah &middot; Autobiography
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
        {/* Until 26 September 2026 this described the whole book (1940s China, a
            refuge in academic achievement) and called the prize a "small" moment in
            her school life. The extract is one afternoon, mostly in Father's room,
            and the prize is international. On 10 October 2026 the first paragraph
            was reworded: it repeated nine words of the anthology's introduction
            without quotation marks. Paraphrase the introduction, do not copy it. */}
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            <em>Chinese Cinderella</em> (Penguin, 1999) is Adeline Yen Mah&apos;s autobiography of
            her childhood. As the anthology&apos;s introduction explains, her family was wealthy and
            she grew up in Hong Kong in the 1950s, rejected by her stepmother, looked down on by her
            brothers and sisters, and sent away to boarding school.
          </p>
          <p>
            The extract is a single episode on one Saturday afternoon, when Adeline is fourteen.
            Called home from school to her father&apos;s room, she learns that she has won first
            prize in an international play-writing competition held in London. Father is proud and
            agrees that she may go to university in England, but when she says she wants to be a
            writer he mocks the idea and decides that she will study medicine.
          </p>
          <p>
            Outside the extract, Yen Mah did go to England, qualified in medicine in London in 1960
            and later became a published writer.
          </p>
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
            <p className="mt-2 text-body-sm text-muted-foreground">
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
        {/* 10 October 2026: removed a second sentence, added on 26 September
            2026, that said again that the exam compares this text only with an
            unseen passage. The shared intro (anth_text.compare_with.intro) says so
            itself, so the page said it twice. */}
        <p className="text-body-sm text-muted-foreground mb-5">
          {await t('anth_text.compare_with.intro')}
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
          {/* As the anthology's acknowledgements give it. Penguin is the publisher,
              not the copyright holder; until 26 September 2026 this read "Penguin /
              Adeline Yen Mah" and sent students to a licensed school edition. */}
          &copy; Adeline Yen Mah 1999, from <em>Chinese Cinderella</em> (Penguin, 1999), reproduced
          in the anthology with permission of Penguin Books Ltd; Delacorte Press, an imprint of
          Random House Children&apos;s Books, a division of Penguin Random House LLC; and Penguin
          Random House Australia. Brief paraphrases on this page are for criticism, review and
          quotation under CDPA 1988 &sect;30. For the full text, use the Pearson Edexcel IGCSE
          anthology (ISBN 978-1-446-93108-0), which Pearson publishes free.
        </p>
        <p className="mt-2">{await t('anth_text.footer_align')}</p>
      </footer>
    </div>
  )
}
