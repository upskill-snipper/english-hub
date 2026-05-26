import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'How to Approach Different Question Types',
    description: 'Learn how to approach every question type in GCSE and IGCSE English exams. ',
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/exam-technique/question-types' },
  title: 'How to Approach Different Question Types',
  description:
    'Learn how to approach every question type in GCSE and IGCSE English exams. "How does the writer...", comparison questions, extract-based questions, essay questions, creative writing tasks, and more.',
}

/* ─── Question type data ─────────────────────────────────────── */

const QUESTION_TYPES = [
  {
    id: 'how-does-the-writer',
    title: '"How does the writer..." questions',
    whatItAsks:
      "These questions ask you to analyse the writer's methods -- their language choices, structural techniques, and the effects these create. The focus is on HOW, not WHAT. You are not being asked to explain what happens; you are being asked to explain how the writer achieves a particular effect.",
    boards: 'Common across all GCSE and IGCSE English Language papers',
    structure: [
      'Open with a clear topic sentence that addresses the question directly.',
      'Identify a specific technique the writer uses (e.g., metaphor, short sentences, shift in focus).',
      'Embed a short quotation (2-5 words) from the text as evidence.',
      'Analyse the effect of this technique on the reader -- explain HOW and WHY it works.',
      'Link back to the question focus (e.g., how this creates tension, sympathy, etc.).',
      'Repeat for 2-4 points depending on the mark allocation.',
    ],
    mistakes: [
      'Feature-spotting without analysis: naming a technique but not explaining its effect.',
      'Retelling the story instead of analysing the writing.',
      'Using vague phrases like "this makes the reader want to read on" without explaining why.',
      'Quoting entire sentences instead of embedding short, precise quotations.',
      'Ignoring structural techniques and only focusing on language.',
    ],
    example:
      'The writer uses the metaphor "a prison of silence" to suggest that the character feels trapped and powerless. The noun "prison" connotes confinement and punishment, implying that the silence is not peaceful but oppressive. This creates sympathy for the character, as the reader understands their isolation is involuntary.',
  },
  {
    id: 'to-what-extent',
    title: '"To what extent do you agree..." questions',
    whatItAsks:
      'These are evaluative questions. You are given a statement about the text and asked to assess how far you agree with it. You need to present a balanced argument but ultimately take a clear position. Markers reward critical, independent thinking.',
    boards: 'Language and Literature papers across all boards',
    structure: [
      'Open with a clear thesis: state the extent to which you agree (mostly agree, partially agree, disagree).',
      'Paragraph 1: Present evidence that SUPPORTS the statement. Use quotations and analysis.',
      'Paragraph 2: Present evidence that CHALLENGES or COMPLICATES the statement.',
      'Paragraph 3 (optional): Offer a nuanced point -- perhaps the statement is true in some parts of the text but not others.',
      'Conclude by reinforcing your overall judgement with a strong final sentence.',
    ],
    mistakes: [
      'Sitting on the fence: you must commit to a clear position, even if you see both sides.',
      'Forgetting to use the text: every point must be supported with evidence from the extract.',
      'Writing a generic analysis essay instead of engaging with the specific statement.',
      'Not using evaluative language: "convincingly", "effectively", "to some extent", "however".',
      'Treating it as a comprehension question rather than a critical evaluation.',
    ],
    example:
      'To a large extent, I agree that the writer successfully creates a sense of danger in this extract. The use of the verb "lurched" to describe the ship\'s movement creates a visceral sense of instability, and the short, fragmented sentences in the final paragraph mirror the panic of the characters. However, the calm, measured tone of the narrator in the opening lines somewhat undermines this effect, suggesting control rather than chaos.',
  },
  {
    id: 'comparison',
    title: 'Comparison questions',
    whatItAsks:
      'These questions ask you to compare two texts, two poems, or two extracts. The key skill is integration -- weaving your analysis of both texts together rather than writing about them separately. You must identify similarities AND differences.',
    boards: 'Language and Literature papers -- especially poetry comparison',
    structure: [
      'Open with an overview statement that identifies a key similarity or difference between the two texts.',
      'Use comparative paragraphs: discuss a point about Text A, then immediately compare with Text B in the same paragraph.',
      'Use comparative connectives: "similarly", "in contrast", "whereas", "both writers", "unlike".',
      'Analyse language/structural methods in both texts -- do not just compare content.',
      'Ensure roughly equal coverage of both texts.',
      'Conclude by drawing together the overall comparison.',
    ],
    mistakes: [
      'Writing about Text A for half the essay, then Text B for the other half (the "tennis match" approach).',
      'Only comparing content/themes without analysing methods and techniques.',
      'Forgetting one text: giving much more attention to one text over the other.',
      'Not using comparative language -- your paragraphs should explicitly connect the two texts.',
      'Making vague comparisons: "Both writers use language effectively" says nothing.',
    ],
    example:
      'Both writers present nature as a powerful force, but they do so through contrasting methods. In Source A, the writer uses the extended metaphor of a "battlefield" to depict the storm, framing nature as an aggressor through violent verbs like "assaulted" and "battered". In contrast, Source B personifies nature as a gentle caretaker, with the sea described as "cradling" the coastline. Where Source A creates fear, Source B evokes comfort.',
  },
  {
    id: 'extract-based',
    title: 'Extract-based questions',
    whatItAsks:
      'You are given a specific extract from a text you have studied and asked to analyse it closely. Crucially, you must also connect your analysis to the wider text -- do not just write about the extract in isolation. Think of the extract as your starting point, not your entire answer.',
    boards: 'Literature papers across all boards',
    structure: [
      'Start with the extract: analyse 3-4 key moments, techniques, or quotations from the given passage.',
      'For each point, explain its significance in the context of the wider play/novel.',
      'Move outward: connect ideas from the extract to other parts of the text (different scenes, chapters, acts).',
      'Include relevant context (social, historical, literary) where it enhances your analysis.',
      'Ensure a balance: roughly 60% extract, 40% wider text is a good guide.',
      "Conclude by linking back to the question and the extract's significance.",
    ],
    mistakes: [
      'Only writing about the extract and never mentioning the wider text.',
      'Only writing about the wider text and barely engaging with the extract.',
      'Retelling the plot of the extract instead of analysing language and methods.',
      'Dropping in context that is not connected to your analytical point.',
      'Not using quotations from the extract -- it is right there in front of you.',
    ],
    example:
      'In this extract, Shakespeare presents Macbeth\'s guilt through the hallucination of the dagger: "Is this a dagger which I see before me?" The interrogative form reveals his psychological instability, as he can no longer distinguish reality from imagination. This connects to the wider theme of guilt and madness that escalates throughout the play, culminating in Lady Macbeth\'s sleepwalking scene in Act 5.',
  },
  {
    id: 'essay',
    title: 'Essay questions',
    whatItAsks:
      'These are open essay questions that ask you to explore a theme, character, or idea across the whole text. There is no extract -- you must select your own evidence. This tests your knowledge of the text and your ability to construct a sustained, well-argued response.',
    boards: 'Literature papers across all boards',
    structure: [
      'Write a strong introduction: address the question directly and outline your argument.',
      'Plan 3-5 paragraphs, each making a distinct analytical point.',
      'Each paragraph should follow PEEL: Point, Evidence, Explain, Link.',
      'Select quotations from across the text -- show you know the whole text, not just one part.',
      'Include relevant context where it strengthens your analysis.',
      'Write a conclusion that answers the question decisively and offers a final insight.',
    ],
    mistakes: [
      'Writing a narrative summary: "First this happens, then this happens, then..."',
      'Making points without evidence: every claim must be supported by a quotation.',
      'Using only quotations from one part of the text -- range across the whole text.',
      'Adding context as a separate paragraph rather than weaving it into analysis.',
      'Not planning: unplanned essays tend to be repetitive and unfocused.',
      'Forgetting to answer the question: always link back to the specific question wording.',
    ],
    example:
      "Throughout 'An Inspector Calls', Priestley uses the character of Inspector Goole to challenge the Birlings' capitalist values. The Inspector's assertion that \"we are members of one body\" directly echoes socialist principles, and his omniscient knowledge of events creates an almost supernatural authority that forces the Birlings to confront their moral failings.",
  },
  {
    id: 'creative-writing',
    title: 'Creative writing tasks',
    whatItAsks:
      'You are asked to produce a piece of original writing -- either descriptive or narrative (or sometimes both). Some tasks give you a visual stimulus (an image), others give you a title or opening line. The focus is on the QUALITY of your writing: vocabulary, sentence variety, structure, imagery, and technical accuracy.',
    boards: 'Language papers across all boards',
    structure: [
      'Spend 5 minutes planning: decide on your setting, character(s), mood/atmosphere, and a rough structure.',
      'Open with impact: use a powerful image, an unusual perspective, or in medias res.',
      'Vary your sentence structures: mix long, flowing sentences with short, punchy ones for effect.',
      'Use ambitious vocabulary and imagery: metaphors, similes, personification, sensory details.',
      'Structure deliberately: shift focus, zoom in and out, use time jumps or cyclical structure.',
      'End with a memorable final line -- not a cliche or a sudden twist.',
      'Leave 5 minutes to proofread for SPaG errors.',
    ],
    mistakes: [
      'Trying to write an action-packed plot with explosions and car chases -- keep it small and controlled.',
      'Using cliches: "it was a dark and stormy night", "I woke up and it was all a dream".',
      'Writing too much: a focused 350-500 word piece is better than a rambling 800-word story.',
      'Ignoring technical accuracy: SPaG marks are significant (up to 16 marks on some papers).',
      'Not varying your sentence structures: every sentence the same length and pattern.',
      'Forgetting to use paragraphs: new time, place, topic, or speaker = new paragraph.',
      'Starting with "I woke up" or "My alarm went off" -- markers see this thousands of times.',
    ],
    example:
      'The harbour exhaled salt and diesel, its breath clinging to the morning like a confession. Nets lay tangled on the quayside -- sleeping snakes, coiled and patient. Somewhere beneath the pier, water slapped stone with the lazy indifference of a cat. She stood at the edge, her shadow stretching toward the boats as if it knew where it wanted to go, even if she did not.',
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export default async function QuestionTypesPage() {
  const [
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    jumpTo,
    practiseTitle,
    practiseBody,
    practiseCta,
    bcExamTech,
    bcThis,
  ] = await tMany([
    'resources.exam_tech.qt.eyebrow',
    'resources.exam_tech.qt.title',
    'resources.exam_tech.qt.subtitle',
    'resources.exam_tech.qt.jump_to',
    'resources.exam_tech.qt.practise.title',
    'resources.exam_tech.qt.practise.body',
    'resources.exam_tech.qt.practise.cta',
    'resources.exam_tech.bc.exam_tech',
    'resources.exam_tech.qt.bc_this',
  ])
  return (
    <>
      <ArticleJsonLd
        headline="How to Approach Different Question Types"
        description="Decode every question type in GCSE and IGCSE English exams - 'How does the writer...', 'To what extent...', comparison, extract-based, essay, and creative writing tasks - with structure guidance, common mistakes, and example responses."
        datePublished="2026-04-01"
        url="https://theenglishhub.app/resources/exam-technique/question-types"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Resources', url: 'https://theenglishhub.app/resources' },
          { name: 'Exam technique', url: 'https://theenglishhub.app/resources/exam-technique' },
          {
            name: 'Question types',
            url: 'https://theenglishhub.app/resources/exam-technique/question-types',
          },
        ]}
      />

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {heroEyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{heroSubtitle}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources" className="hover:text-primary transition-colors">
              Resources
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources/exam-technique" className="hover:text-primary transition-colors">
              {bcExamTech}
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-primary">{bcThis}</li>
        </ol>
      </nav>

      {/* Quick navigation */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-xl border border-border bg-card p-6 shadow-md">
          <h2 className="font-bold text-foreground">{jumpTo}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {QUESTION_TYPES.map((qt) => (
              <a
                key={qt.id}
                href={`#${qt.id}`}
                className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-foreground hover:border-primary/30"
              >
                {qt.title.replace(/"/g, '')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Question types */}
      <section className="mx-auto max-w-5xl px-4 pb-14">
        <div className="space-y-12">
          {QUESTION_TYPES.map((qt, idx) => (
            <article
              key={qt.id}
              id={qt.id}
              className="scroll-mt-24 rounded-2xl border border-border bg-card shadow-md overflow-hidden"
            >
              {/* Header */}
              <div className="border-b border-border bg-muted px-6 py-5 sm:px-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <h2 className="text-lg font-bold text-foreground sm:text-xl">{qt.title}</h2>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{qt.boards}</p>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                {/* What it's asking */}
                <div>
                  <h3 className="text-base font-bold text-foreground">What it&apos;s asking</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {qt.whatItAsks}
                  </p>
                </div>

                {/* How to structure your answer */}
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    How to structure your answer
                  </h3>
                  <ol className="mt-3 space-y-2">
                    {qt.structure.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-foreground">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Common mistakes */}
                <div>
                  <h3 className="text-base font-bold text-foreground">Common mistakes</h3>
                  <ul className="mt-3 space-y-2">
                    {qt.mistakes.map((mistake, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-xs text-red-600">
                          &times;
                        </span>
                        <span className="leading-relaxed">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Example */}
                <div>
                  <h3 className="text-base font-bold text-foreground">Example response snippet</h3>
                  <blockquote className="mt-3 rounded-lg border-l-4 border-primary bg-muted px-5 py-4 text-sm italic leading-relaxed text-muted-foreground">
                    {qt.example}
                  </blockquote>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Revision link */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
          <h2 className="text-lg font-bold text-foreground">{practiseTitle}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{practiseBody}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              href="/revision/exam-technique"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-primary/90"
            >
              {practiseCta}
            </Link>
            <Link
              href="/resources/exam-technique/essay-structure"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow transition hover:bg-muted"
            >
              Essay structure templates
            </Link>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 mt-10 mb-6" />
    </>
  )
}
