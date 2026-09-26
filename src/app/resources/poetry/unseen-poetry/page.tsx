import { t as _trServer } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'
import type { Metadata } from 'next'
import Link from 'next/link'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Unseen Poetry Guide | The English Hub',
    description:
      'Unseen poetry for GCSE English Literature: the READ method, PEEL paragraphs, comparison technique, common question types, and three practice poems.',
    images: [
      {
        url: '/api/og?title=Unseen+Poetry+Guide+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Unseen Poetry Guide | The English Hub',
      },
    ],
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/poetry/unseen-poetry' },
  title: 'Unseen Poetry Guide',
  description:
    'Unseen poetry for GCSE English Literature: the READ method, PEEL paragraphs, comparison technique, common question types, and three practice poems.',
}

/* ─── Section wrapper ────────────────────────────────────────── */

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-bold text-foreground border-b-2 border-primary/20 pb-3">
        {title}
      </h2>
      {children}
    </section>
  )
}

/* ─── Tip callout ────────────────────────────────────────────── */

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl border-s-4 border-primary bg-primary/5 px-5 py-4">
      <p className="text-sm font-semibold text-foreground mb-1">Exam Tip</p>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  )
}

/* ─── Warning callout ────────────────────────────────────────── */

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl border-s-4 border-amber-500 bg-amber-500/10 px-5 py-4">
      <p className="text-sm font-semibold text-amber-700 mb-1">Common Mistake</p>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  )
}

/* ─── A practice poem still in copyright ─────────────────────── */

/**
 * A practice poem that is still in copyright: named, not printed, with the
 * model response and commentary about it passed as children.
 *
 * WHY. Until 26 September 2026 Practice Poem 1 printed Storm on the Island in
 * a PoemBlock as an "adapted extract": 141 of the poem's 158 words, far past
 * what fair dealing allows. Checked against the AQA anthology, its last seven
 * lines were not Heaney's at all, and the model response analysed them (a
 * "nothing" repeated through the final lines, which the poem says once). This
 * names the poem and sends the student to a copy the rights-holder licensed.
 * The children sit inside an element that names the poem and its poet, so
 * no-poem-quoted-beyond-fair-dealing.test.ts measures every quotation in the
 * model response against the poem, as it would a card.
 */
function PracticePoemInCopyright({
  title,
  author,
  readAt,
  readHref,
  children,
}: {
  title: string
  author: string
  readAt: string
  /**
   * AQA's own copy of its anthology. Optional: Nettles is not in it, and no
   * copy of Nettles that its rights-holder licensed could be confirmed online,
   * so that card names the printed anthology and the exam paper instead.
   */
  readHref?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="my-6 rounded-xl border border-border bg-muted p-6">
        <p className="font-bold text-foreground text-lg">{title}</p>
        <p className="text-sm text-muted-foreground mb-4">by {author}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This poem is still in copyright, so we do not print it here. Read it in {readAt}
          {readHref ? (
            <>
              :{' '}
              <a
                href={readHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-2"
              >
                AQA&apos;s own copy of the anthology
              </a>
            </>
          ) : null}
          . Read it twice and annotate it before you look at the model response.
        </p>
      </div>
      {children}
    </div>
  )
}

/* ─── Model response block ───────────────────────────────────── */

function ModelResponse({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-2 border-primary/30 bg-card p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">{label}</p>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

/* ─── Examiner commentary ────────────────────────────────────── */

function ExaminerCommentary({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl bg-primary/5 border border-primary/10 px-5 py-4">
      <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
        Examiner Commentary
      </p>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default async function UnseenPoetryPage() {
  // Resolve AR via server-side t() helper + content.ts fallback
  const _hdrs = await (await import('next/headers')).headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const _tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(_EAL_STRINGS)) if (v.en === en) return v.ar || en
    return en
  }
  // Note: this server component reads from content.ts directly; the
  // server-side t() helper resolves the locale from the request header.

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Poetry Skills
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Unseen Poetry Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A comprehensive, step-by-step approach to tackling unseen poetry in your GCSE exam. The
            READ method, PEEL paragraphs, comparison technique, and three practice poems with model
            responses.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources" className="hover:text-foreground transition-colors">
              Resources
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources/poetry" className="hover:text-foreground transition-colors">
              Poetry
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-foreground">{_tr(`Unseen Poetry`)}</li>
        </ol>
      </nav>

      {/* Table of contents + content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
          {/* Sticky sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 text-sm">
              <p className="mb-2 font-bold text-foreground uppercase tracking-wider text-xs">
                Contents
              </p>
              {[
                { id: 'read-method', label: 'The READ Method' },
                { id: 'what-to-look-for', label: 'What to Look For' },
                { id: 'peel-paragraphs', label: 'PEEL Paragraphs' },
                { id: 'question-types', label: 'Question Types' },
                { id: 'comparison', label: 'Comparison Technique' },
                { id: 'practice-1', label: 'Practice Poem 1' },
                { id: 'practice-2', label: 'Practice Poem 2' },
                { id: 'practice-3', label: 'Practice Poem 3' },
                { id: 'mistakes', label: 'Mistakes to Avoid' },
                { id: 'time-management', label: 'Time Management' },
                { id: 'vocabulary', label: 'Poetry Vocabulary' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-1.5 text-muted-foreground hover:bg-primary/10 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-16">
            {/* ─── 1. THE READ METHOD ─────────────────────────────── */}
            <Section id="read-method" title="1. The READ Method">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Unseen poetry can feel intimidating because you have never encountered the poem
                before. The READ method gives you a repeatable, systematic approach that works for{' '}
                <em>any</em> poem, every time.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* R */}
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                      R
                    </span>
                    <h3 className="font-bold text-foreground text-lg">Read</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Read the poem <strong>at least twice</strong>. On the first read, absorb the
                    overall mood and subject. On the second read, underline striking words and
                    images. Read the title carefully -- it often provides the context or focus of
                    the poem.
                  </p>
                  <Tip>
                    Read the poem a third time, but this time read it aloud in your head. You will
                    notice rhythmic effects, caesura, and enjambment that you missed on a silent
                    read.
                  </Tip>
                </div>

                {/* E */}
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                      E
                    </span>
                    <h3 className="font-bold text-foreground text-lg">Examine</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Examine the <strong>form, structure, and language</strong>. How is the poem
                    organised? What kind of stanzas does it use? Where does the tone shift? What
                    imagery, metaphors, or sound devices stand out?
                  </p>
                  <Tip>
                    Annotate directly on the exam paper. Circle key words, draw arrows between
                    connected images, and jot one-word notes in the margin (e.g.
                    &ldquo;anger&rdquo;, &ldquo;shift&rdquo;, &ldquo;contrast&rdquo;).
                  </Tip>
                </div>

                {/* A */}
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                      A
                    </span>
                    <h3 className="font-bold text-foreground text-lg">Analyse</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Analyse <strong>how</strong> the poet&apos;s choices create meaning and effect.
                    Do not just identify techniques -- explain <em>why</em> the poet has used them
                    and <em>what</em> impact they have on the reader.
                  </p>
                  <Tip>
                    Use the formula: <strong>{_tr(`What + How + Why`)}</strong>. What does the poet
                    do? How do they do it (which technique)? Why does it matter (effect on the
                    reader)?
                  </Tip>
                </div>

                {/* D */}
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                      D
                    </span>
                    <h3 className="font-bold text-foreground text-lg">Develop</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Develop your ideas by exploring <strong>alternative interpretations</strong>,
                    considering the poet&apos;s intentions, and linking your points to the
                    poem&apos;s wider themes. This is where you push from a good answer into a
                    top-band response.
                  </p>
                  <Tip>
                    Use phrases such as &ldquo;Alternatively, this could suggest...&rdquo; or
                    &ldquo;A reader might also interpret this as...&rdquo; to show exploratory
                    thinking.
                  </Tip>
                </div>
              </div>
            </Section>

            {/* ─── 2. WHAT TO LOOK FOR ────────────────────────────── */}
            <Section id="what-to-look-for" title="2. What to Look For">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                When you examine an unseen poem, work through these seven areas systematically. You
                do not need to write about all of them -- choose the three or four that are most
                significant in the poem.
              </p>

              <div className="space-y-4">
                {[
                  {
                    area: 'Title',
                    what: 'The title often reveals the subject, sets the tone, or creates expectations that the poem may then subvert.',
                    questions:
                      'What does the title lead you to expect? Does the poem fulfil or challenge that expectation? Does the title take on new meaning after reading the poem?',
                  },
                  {
                    area: 'Form',
                    what: 'The overall type or shape of the poem: sonnet, ballad, free verse, dramatic monologue, etc. The choice of form is always deliberate.',
                    questions:
                      'Is the form regular or irregular? Does the form match or contrast with the content? What associations does the form carry?',
                  },
                  {
                    area: 'Structure',
                    what: 'How the poem is organised: stanza lengths, volta (turn), opening vs. closing, progression of ideas, chronological or non-linear sequence.',
                    questions:
                      'Where does the tone or focus shift? Does the poem build to a climax? Are stanzas uniform or varied in length? Is there a circular structure?',
                  },
                  {
                    area: 'Imagery',
                    what: "Metaphor, simile, personification, symbolism, and sensory language. Imagery is the poet's most powerful tool for creating meaning.",
                    questions:
                      'What pictures does the language create? Which senses are engaged? Is the imagery drawn from nature, war, religion, the domestic? What does the imagery connote?',
                  },
                  {
                    area: 'Tone',
                    what: "The poet's attitude towards the subject: angry, nostalgic, reflective, bitter, celebratory, ambivalent. Tone often shifts within a poem.",
                    questions:
                      'What is the overall mood? Where does the tone change? Is the tone consistent or contradictory? How does word choice create tone?',
                  },
                  {
                    area: 'Rhythm & Metre',
                    what: 'The beat or pulse of the poem. Regular metre (iambic pentameter, tetrameter) creates a measured feel; irregular rhythm can suggest turbulence or freedom.',
                    questions:
                      'Is the rhythm regular or varied? Does the rhythm mirror the content (e.g., a fast rhythm for urgency)? Where does the rhythm break, and why?',
                  },
                  {
                    area: 'Rhyme & Sound',
                    what: 'Rhyme scheme, half-rhyme, internal rhyme, alliteration, assonance, sibilance, onomatopoeia. Sound effects create atmosphere and reinforce meaning.',
                    questions:
                      "Is there a rhyme scheme? Does it break at any point? What sound patterns are repeated? How do the sounds reflect the poem's mood or subject?",
                  },
                ].map((item) => (
                  <div
                    key={item.area}
                    className="rounded-xl border border-border bg-card p-5 shadow-md"
                  >
                    <h3 className="font-bold text-foreground">{item.area}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.what}</p>
                    <p className="mt-2 text-sm text-primary">
                      <span className="font-semibold">Key questions: </span>
                      {item.questions}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── 3. PEEL PARAGRAPHS ─────────────────────────────── */}
            <Section id="peel-paragraphs" title="3. How to Write About Unseen Poetry (PEEL)">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Every analytical paragraph should follow the PEEL structure. This ensures you are
                always explaining <em>how</em> the poet creates meaning, not just describing what
                happens.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border-2 border-primary bg-primary/5 p-5">
                  <p className="text-xl font-bold text-primary mb-1">P -- Point</p>
                  <p className="text-sm text-muted-foreground">
                    Make a clear, concise statement about the poet&apos;s intent or the poem&apos;s
                    effect. This answers the question directly.
                  </p>
                </div>
                <div className="rounded-xl border-2 border-primary bg-primary/5 p-5">
                  <p className="text-xl font-bold text-primary mb-1">E -- Evidence</p>
                  <p className="text-sm text-muted-foreground">
                    Embed a short, precise quotation from the poem. You do not need full lines -- a
                    key phrase or even a single word is often more effective.
                  </p>
                </div>
                <div className="rounded-xl border-2 border-primary bg-primary/5 p-5">
                  <p className="text-xl font-bold text-primary mb-1">E -- Explain</p>
                  <p className="text-sm text-muted-foreground">
                    Explain <em>how</em> the language or technique works. Zoom in on individual
                    words, connotations, sound effects, and imagery.
                  </p>
                </div>
                <div className="rounded-xl border-2 border-primary bg-primary/5 p-5">
                  <p className="text-xl font-bold text-primary mb-1">L -- Link</p>
                  <p className="text-sm text-muted-foreground">
                    Link back to the question, the poem&apos;s wider themes, or offer an alternative
                    interpretation. This is where you show depth.
                  </p>
                </div>
              </div>

              <h3 className="mt-8 mb-4 text-lg font-bold text-foreground">
                Example PEEL Paragraph
              </h3>
              {/* The line analysed below is the site's own, written to show the method: it is
                  not in Storm on the Island, and a web search on 26 September 2026 found it in
                  no poem. Say so on the page, so that a student does not learn it, or cite it,
                  as a real quotation. */}
              <p className="mb-3 text-sm text-muted-foreground">
                The line analysed here was written for this example. It is not from a real poem.
              </p>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-bold text-foreground">[P]</span> The poet presents nature as
                  a powerful, uncontrollable force.{' '}
                  <span className="font-bold text-foreground">[E]</span> This is conveyed through
                  the metaphor &ldquo;the sea&apos;s jaws clamped shut on the harbour wall&rdquo;.{' '}
                  <span className="font-bold text-primary">[E]</span> The verb &ldquo;clamped&rdquo;
                  suggests relentless, mechanical force, while the personification of
                  &ldquo;jaws&rdquo; implies the sea is a predator, consuming the man-made
                  structures around it. The plosive sounds in &ldquo;clamped&rdquo; and
                  &ldquo;shut&rdquo; reinforce the violence of the action.{' '}
                  <span className="font-bold text-primary/80">[L]</span> Alternatively, the image of
                  &ldquo;jaws&rdquo; could suggest entrapment, implying that those who live by the
                  sea are held captive by its unpredictability. This reinforces the poem&apos;s
                  wider theme of humanity&apos;s vulnerability in the face of nature.
                </p>
              </div>

              <Tip>
                Notice how the example zooms in on <strong>individual words</strong>{' '}
                (&ldquo;clamped&rdquo;, &ldquo;jaws&rdquo;, &ldquo;shut&rdquo;) rather than
                paraphrasing the whole line. This is what examiners mean by &ldquo;close
                analysis&rdquo;.
              </Tip>
            </Section>

            {/* ─── 4. QUESTION TYPES ──────────────────────────────── */}
            <Section id="question-types" title="4. Common Question Types">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Unseen poetry questions typically fall into predictable categories. Here is how to
                approach each one.
              </p>

              <div className="space-y-4">
                {[
                  {
                    type: 'How does the poet present [theme/idea]?',
                    approach:
                      "Focus on the poet's methods (language, structure, form) rather than retelling the poem. Every paragraph should address HOW, not just WHAT. Use the phrase 'The poet presents [theme] through...' to keep your answer focused.",
                    example:
                      '"How does the poet present the power of nature?" -- Write about imagery, structural choices, and sound effects that convey power, not a summary of the poem\'s events.',
                  },
                  {
                    type: "What are the poet's feelings and attitudes?",
                    approach:
                      'Identify two or three distinct feelings. Track how they develop or shift across the poem. Always support with evidence and explain HOW the language conveys those feelings.',
                    example:
                      '"What do you think the poet feels about growing up?" -- Identify feelings like nostalgia, loss, and acceptance, then show how language techniques convey each one.',
                  },
                  {
                    type: 'How does the poet use language to create effects?',
                    approach:
                      'This is a language-focused question. Zoom in on word choices, imagery, figurative language, and sound devices. Analyse the connotations of individual words and explain their impact on the reader.',
                    example:
                      'Select specific words and phrases, explore multiple connotations, and explain how they create atmosphere, emotion, or meaning for the reader.',
                  },
                  {
                    type: 'How does the poet use structure to interest the reader?',
                    approach:
                      "Consider: stanza form, line lengths, enjambment, caesura, volta, opening vs. closing, progression of ideas, and how the poem's shape on the page reflects its content.",
                    example:
                      'Discuss how the shift from long to short stanzas mirrors a shift from stability to fragmentation, or how enjambment creates urgency.',
                  },
                ].map((item) => (
                  <div
                    key={item.type}
                    className="rounded-xl border border-border bg-card p-5 shadow-md"
                  >
                    <h3 className="font-bold text-foreground text-sm">&ldquo;{item.type}&rdquo;</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.approach}</p>
                    <p className="mt-2 text-sm italic text-muted-foreground">{item.example}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── 5. COMPARISON TECHNIQUE ────────────────────────── */}
            <Section id="comparison" title="5. Comparison Technique">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                The second unseen poetry question typically asks you to compare the poem you have
                already analysed with a second, shorter poem. This is usually worth fewer marks and
                requires a more concise approach.
              </p>

              <h3 className="mb-4 text-lg font-bold text-foreground">
                The Key Principle: Compare, Don&apos;t Contrast Separately
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                The most common mistake is writing about Poem A, then writing about Poem B. Instead,
                you must <strong>integrate</strong> your comparison throughout.
              </p>

              <div className="mb-6 overflow-hidden rounded-xl border border-border">
                <div className="grid grid-cols-2 text-sm font-bold bg-muted text-foreground">
                  <div className="px-4 py-3">{_tr(`Weak (Separate)`)}</div>
                  <div className="px-4 py-3 border-s border-border">
                    {_tr(`Strong (Integrated)`)}
                  </div>
                </div>
                <div className="grid grid-cols-2 text-sm">
                  <div className="px-4 py-3 border-t border-border text-muted-foreground">
                    &ldquo;In Poem A, the poet uses metaphor to show anger. In Poem B, the poet uses
                    simile to show sadness.&rdquo;
                  </div>
                  <div className="px-4 py-3 border-t border-s border-border text-muted-foreground">
                    &ldquo;Both poets use figurative language to convey intense emotion; however,
                    while Poem A&apos;s extended metaphor of fire suggests destructive rage, Poem
                    B&apos;s simile &lsquo;like water through cupped hands&rsquo; conveys a gentler
                    sense of helpless loss.&rdquo;
                  </div>
                </div>
              </div>

              <h3 className="mb-4 text-lg font-bold text-foreground">
                {_tr(`Comparison Structure`)}
              </h3>
              <div className="space-y-3">
                {[
                  {
                    step: '1',
                    title: 'Opening',
                    detail:
                      'State the key similarity or difference in how both poems approach the given theme or subject.',
                  },
                  {
                    step: '2',
                    title: 'Point of comparison 1',
                    detail:
                      "Compare a specific technique or idea across BOTH poems in the same paragraph. Use connectives: 'similarly', 'in contrast', 'whereas', 'however'.",
                  },
                  {
                    step: '3',
                    title: 'Point of comparison 2',
                    detail:
                      'A second integrated comparison. Choose a different technique area (e.g., if point 1 was about imagery, point 2 could be about structure or tone).',
                  },
                  {
                    step: '4',
                    title: 'Conclusion',
                    detail:
                      'A brief concluding sentence stating which poem you find more effective and why (if the question asks for this), or summarise the key difference in approach.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-bold text-foreground text-sm">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 mb-4 text-lg font-bold text-foreground">
                Useful Comparison Connectives
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                  <p className="font-bold text-foreground text-sm mb-2">
                    {_tr(`Showing Similarity`)}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>{_tr(`Similarly, both poets...`)}</li>
                    <li>{_tr(`In the same way, Poem B also...`)}</li>
                    <li>{_tr(`This idea is echoed in Poem B, where...`)}</li>
                    <li>{_tr(`Like Poem A, the second poem presents...`)}</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                  <p className="font-bold text-foreground text-sm mb-2">Showing Difference</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>{_tr(`In contrast, Poem B...`)}</li>
                    <li>Whereas Poem A presents... , Poem B suggests...</li>
                    <li>However, the second poet takes a different approach by...</li>
                    <li>{_tr(`While both poems explore [theme], their methods diverge...`)}</li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* ─── 6. PRACTICE POEMS ──────────────────────────────── */}

            {/* ── Practice Poem 1 ──────────────────────────────────── */}
            <Section id="practice-1" title="6a. Practice Poem 1">
              {/* Every quotation below was checked word for word against the AQA anthology
                  (AQA's own copy, linked below, printing the poem by permission of Faber and
                  Faber) on 26 September 2026: 17 distinct words of the poem's 158, under the
                  fair-dealing share of 23. */}
              <PracticePoemInCopyright
                title={_tr(`Storm on the Island`)}
                author="Seamus Heaney"
                readAt="the Power and Conflict cluster of your AQA anthology"
                readHref="https://filestore.aqa.org.uk/resources/english/AQA-8702-TG-POEMS.PDF"
              >
                <p className="mb-4 text-sm font-semibold text-foreground">
                  Question: How does the poet present the power of nature in this poem?
                </p>

                <ModelResponse label="Model Response (Grade 8/9)">
                  <p>
                    <span className="font-bold text-foreground">[P]</span> Heaney initially presents
                    the islanders as confident in their ability to withstand nature&apos;s power.{' '}
                    <span className="font-bold text-foreground">[E]</span> The declarative opening,
                    &ldquo;We are prepared&rdquo;, establishes a tone of collective assurance,
                    reinforced by the practical, monosyllabic language of &ldquo;squat&rdquo;,
                    &ldquo;rock&rdquo;, and &ldquo;slate&rdquo;.{' '}
                    <span className="font-bold text-primary">[E]</span> The heavy, grounded
                    consonants mirror the solidity of the buildings, suggesting a community that has
                    shaped itself around the threat. The verb &ldquo;sink&rdquo; implies permanence,
                    as though the walls are embedded in the landscape itself.{' '}
                    <span className="font-bold text-primary/80">[L]</span> However, this confidence
                    is gradually undermined, suggesting that Heaney is questioning whether human
                    preparation can ever truly match the scale of natural force.
                  </p>
                  <p>
                    <span className="font-bold text-foreground">[P]</span> The poem&apos;s
                    conclusion reveals that the true power of nature lies not in physical
                    destruction but in psychological fear.{' '}
                    <span className="font-bold text-foreground">[E]</span> Heaney turns to the
                    vocabulary of warfare: the wind &ldquo;strafes&rdquo;, and the islanders are
                    &ldquo;bombarded by the empty air&rdquo;.{' '}
                    <span className="font-bold text-primary">[E]</span> The military verbs make the
                    storm an attacking army, yet the enemy cannot be seen, and the final line names
                    it a &ldquo;huge nothing&rdquo;. The oxymoron defies logic: how can emptiness be
                    vast? This reflects the irrational nature of fear itself. Earlier, the caesura
                    after &ldquo;But no&rdquo; marks the turn, the point at which the comforting
                    idea of the sea as company is overturned and the islanders&apos; confidence
                    fractures. <span className="font-bold text-primary/80">[L]</span> Alternatively,
                    the &ldquo;huge nothing&rdquo; could be read as a political metaphor. The poem
                    was published in 1966, and its military language has been read as sensing the
                    sectarian tension in Northern Ireland that would erupt into the Troubles within
                    a few years: a community living in fear of an intangible but ever-present
                    threat.
                  </p>
                </ModelResponse>

                <ExaminerCommentary>
                  <p>
                    This response demonstrates several top-band qualities: it tracks the poem&apos;s
                    structural shift from confidence to fear; it zooms in on individual words
                    (&ldquo;squat&rdquo;, &ldquo;sink&rdquo;, &ldquo;strafes&rdquo;); it analyses
                    sound effects (plosive consonants); it explores the paradox of &ldquo;huge
                    nothing&rdquo;; and it links the military vocabulary to an alternative
                    contextual interpretation. The candidate never paraphrases: every sentence
                    analyses.
                  </p>
                </ExaminerCommentary>
              </PracticePoemInCopyright>
            </Section>

            {/* ── Practice Poem 2 ──────────────────────────────────── */}
            <Section id="practice-2" title="6b. Practice Poem 2">
              {/* Until 26 September 2026 this section printed Nettles whole, with stanza breaks
                  the poem does not have and a last line that is not Scannell's, and the model
                  response analysed a word from that invented line. Every quotation below was
                  checked word for word on that date against the Pearson Edexcel GCSE Poetry
                  Anthology (printed by permission of the Estate of Vernon Scannell) and the Eduqas
                  May 2023 Component 2 paper (C720U20-1, sat on 24 May 2023; this note and the
                  card below said June until a second check that day), which agree; line numbers
                  are theirs. */}
              <PracticePoemInCopyright
                title="Nettles"
                author="Vernon Scannell"
                readAt="the Relationships collection of the Pearson Edexcel GCSE English Literature Poetry Anthology, or in the Eduqas GCSE English Literature Component 2 paper of May 2023, which set it as the unseen poem"
              >
                <p className="mb-4 text-sm font-semibold text-foreground">
                  Question: How does the poet present the feelings of a parent in this poem?
                </p>

                <ModelResponse label="Model Response (Grade 8/9)">
                  <p>
                    <span className="font-bold text-foreground">[P]</span> Scannell presents
                    parenthood as a battle the parent can never finally win.{' '}
                    <span className="font-bold text-foreground">[E]</span> The sustained military
                    metaphor, from the &ldquo;green spears&rdquo; and the &ldquo;regiment of
                    spite&rdquo; of lines 2 and 3 to the &ldquo;fierce parade&rdquo; of line 11 and
                    the &ldquo;tall recruits&rdquo; of line 15, turns a small domestic accident into
                    a war. <span className="font-bold text-primary">[E]</span> The word
                    &ldquo;regiment&rdquo; implies that the threat is organised, disciplined and
                    numerous, far more than one parent can defeat. Treating the nettles as soldiers
                    raises the father&apos;s protective anger from an everyday reaction to something
                    heroic, and at the same time shows it to be out of proportion: he answers a
                    sting with a billhook and a &ldquo;funeral pyre&rdquo;.{' '}
                    <span className="font-bold text-primary/80">[L]</span> This may reflect
                    Scannell&apos;s own experience as a soldier in the Second World War, where the
                    language of combat becomes the only vocabulary strong enough for the intensity
                    of a parent&apos;s love.
                  </p>
                  <p>
                    <span className="font-bold text-foreground">[P]</span> The poem&apos;s final
                    line conveys a parent&apos;s helplessness.{' '}
                    <span className="font-bold text-foreground">[E]</span> The words &ldquo;would
                    often&rdquo; make the son&apos;s pain habitual, a pattern rather than a single
                    event, and the closing words, &ldquo;sharp wounds again&rdquo;, keep the
                    language of battle to the very end.{' '}
                    <span className="font-bold text-primary">[E]</span> The last word rhymes with
                    the rain of line 14 that brought the nettles back, binding the child&apos;s hurt
                    to a natural cycle the father cannot stop. The poem is a single sixteen-line
                    stanza, and the sentence in which he burns the nettles runs straight on into
                    their return two weeks later, so there is no pause between his victory and its
                    undoing. <span className="font-bold text-primary/80">[L]</span> On a deeper
                    level, the nettles may stand for all the pain the world will inflict on a child:
                    a parent&apos;s love is fierce, but it cannot shield a child from the world for
                    ever.
                  </p>
                </ModelResponse>

                <ExaminerCommentary>
                  <p>
                    This response excels through its analysis of the sustained military metaphor and
                    its connection to the poet&apos;s biographical context. The candidate analyses
                    individual word choices (&ldquo;regiment&rdquo;, &ldquo;would often&rdquo;) and
                    links structural features (the single unbroken stanza, the rhyme on the final
                    word) to meaning. The alternative interpretation in the final sentence lifts the
                    response from analysis into evaluation.
                  </p>
                </ExaminerCommentary>
              </PracticePoemInCopyright>
            </Section>

            {/* ── Practice Poem 3 ──────────────────────────────────── */}
            <Section id="practice-3" title="6c. Practice Poem 3">
              {/* Until 26 September 2026 this section printed the first stanza, and the model
                  response analysed phrases that are not in the poem. Every quotation below was
                  checked word for word on that date against AQA's own copy of the anthology,
                  linked below, printing the poem by permission of Carol Rumens, and against the
                  Pearson Edexcel GCSE Poetry Anthology Supplement; line numbers are theirs. */}
              <PracticePoemInCopyright
                title={_tr(`The Émigrée`)}
                author="Carol Rumens"
                readAt="the Power and Conflict cluster of your AQA anthology"
                readHref="https://filestore.aqa.org.uk/resources/english/AQA-8702-TG-POEMS.PDF"
              >
                <p className="mb-4 text-sm font-semibold text-foreground">
                  Question: How does the poet present the speaker&apos;s relationship with their
                  homeland?
                </p>

                <ModelResponse label="Model Response (Grade 8/9)">
                  <p>
                    <span className="font-bold text-foreground">[P]</span> Rumens presents the
                    speaker&apos;s homeland as an idealised place that exists more powerfully in
                    memory than in reality. <span className="font-bold text-foreground">[E]</span>{' '}
                    The compound adjective &ldquo;sunlight-clear&rdquo; (line 2) describes the
                    speaker&apos;s memory, and the metaphor of the &ldquo;bright, filled
                    paperweight&rdquo; (line 6) captures what that memory is like.{' '}
                    <span className="font-bold text-primary">[E]</span> A paperweight is small,
                    precious and sealed: it can be held in the hand, but the scene inside it is
                    fixed under glass and cannot change. The city is preserved rather than lived in,
                    frozen at the moment she left it as a child. The verb &ldquo;branded&rdquo;
                    (line 8) goes further: a brand is burnt in, permanent and even painful, so the
                    memory is something done to her as well as something she treasures.{' '}
                    <span className="font-bold text-primary/80">[L]</span> Sunlight closes each of
                    the poem&apos;s three stanzas, so light becomes a defence: whatever news reaches
                    her, the speaker keeps a version of the city that political reality cannot
                    damage.
                  </p>
                  <p>
                    <span className="font-bold text-foreground">[P]</span> The poem suggests that
                    the speaker&apos;s bond with her homeland outlasts physical separation.{' '}
                    <span className="font-bold text-foreground">[E]</span> In the third stanza the
                    city is personified: it lies at her feet, &ldquo;docile as paper&rdquo; (line
                    19), and she tells us &ldquo;I comb its hair&rdquo; (line 20).{' '}
                    <span className="font-bold text-primary">[E]</span> The simile carries a dual
                    meaning: paper is gentle and submissive, but it is also fragile and easily torn,
                    and it is what memories and stories are written on. Combing a child&apos;s hair
                    is a parent&apos;s care, so the speaker now looks after the city that once
                    raised her. <span className="font-bold text-primary/80">[L]</span> In the next
                    line, &ldquo;My city takes me dancing&rdquo;, the city takes the active part, a
                    joyful presence rather than a passive loss, even as the dance leads into the
                    walled, hostile city where she is treated as an outsider. For the émigrée,
                    identity and belonging are carried within, not tied to physical borders.
                  </p>
                </ModelResponse>

                <ExaminerCommentary>
                  <p>
                    This response demonstrates sophisticated analytical skills. The candidate traces
                    the pattern of light and explores its psychological function; analyses imagery
                    at word level (&ldquo;paperweight&rdquo;, &ldquo;branded&rdquo;,
                    &ldquo;docile&rdquo;); considers dual meanings; and connects the imagery to the
                    wider theme of exile and identity. The response moves fluidly between close
                    analysis and broader thematic interpretation, exactly what top-band answers
                    require.
                  </p>
                </ExaminerCommentary>
              </PracticePoemInCopyright>
            </Section>

            {/* ─── 7. COMMON MISTAKES ─────────────────────────────── */}
            <Section id="mistakes" title="7. Common Mistakes to Avoid">
              <div className="space-y-3">
                <Warning>
                  <strong>{_tr(`Feature spotting without analysis.`)}</strong> Identifying a
                  metaphor and moving on is not analysis. You must explain <em>how</em> the metaphor
                  creates meaning, <em>what</em> it connotes, and <em>why</em> the poet chose it.
                  &ldquo;The poet uses a metaphor&rdquo; earns almost no marks. &ldquo;The metaphor
                  of &lsquo;fire&rsquo; connotes destruction and uncontrollable rage, reflecting the
                  speaker&apos;s consuming anger&rdquo; earns many more.
                </Warning>

                <Warning>
                  <strong>{_tr(`Retelling the poem.`)}</strong> Do not write a summary of what
                  happens in the poem. Every sentence should analyse how meaning is created, not
                  describe events.
                </Warning>

                <Warning>
                  <strong>{_tr(`Ignoring structure.`)}</strong> Many candidates focus entirely on
                  language and ignore structure (stanza form, line breaks, enjambment, caesura,
                  volta). Structural analysis can earn you marks that other candidates miss.
                </Warning>

                <Warning>
                  <strong>{_tr(`Quoting entire lines.`)}</strong> Embed short, precise quotations (a
                  word or phrase) into your sentences. Long block quotations waste time and suggest
                  you cannot select effectively.
                </Warning>

                <Warning>
                  <strong>{_tr(`Writing about Poem A then Poem B separately.`)}</strong> In
                  comparison questions, you must integrate your comparison. Every paragraph should
                  mention both poems.
                </Warning>

                <Warning>
                  <strong>Not reading the question carefully.</strong> If the question asks about
                  &ldquo;feelings&rdquo;, focus on emotions. If it asks about &ldquo;methods&rdquo;,
                  focus on techniques. If it asks about &ldquo;how&rdquo;, explain the poet&apos;s
                  craft, not the subject matter.
                </Warning>

                <Warning>
                  <strong>Running out of time.</strong> The comparison question is usually worth
                  fewer marks. Do not spend equal time on it. Allocate your time proportionally to
                  the marks available.
                </Warning>
              </div>
            </Section>

            {/* ─── 8. TIME MANAGEMENT ─────────────────────────────── */}
            <Section id="time-management" title="8. Time Management">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Time pressure is one of the biggest challenges in the unseen poetry section. Here is
                a recommended breakdown based on a typical exam allocation of 45 minutes for the
                unseen poetry section.
              </p>

              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted text-foreground text-start">
                      <th className="px-4 py-3 font-semibold">Phase</th>
                      <th className="px-4 py-3 font-semibold">Time</th>
                      <th className="px-4 py-3 font-semibold">{_tr(`What to Do`)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        phase: 'Read & Annotate',
                        time: '5 mins',
                        detail:
                          'Read the poem twice. Annotate key words, images, tone shifts. Note the form and structure.',
                      },
                      {
                        phase: 'Plan Question 1',
                        time: '3 mins',
                        detail:
                          'Identify 3-4 key points. Select your quotations. Plan the order of your paragraphs.',
                      },
                      {
                        phase: 'Write Question 1',
                        time: '20 mins',
                        detail:
                          'Write 3-4 PEEL paragraphs. This is the higher-mark question, so give it the most time.',
                      },
                      {
                        phase: 'Read Poem 2 & Plan',
                        time: '5 mins',
                        detail:
                          'Read the second poem. Identify 2-3 points of comparison or contrast with Poem 1.',
                      },
                      {
                        phase: 'Write Question 2',
                        time: '10 mins',
                        detail:
                          'Write 2-3 integrated comparison paragraphs. Be concise -- this is worth fewer marks.',
                      },
                      {
                        phase: 'Check',
                        time: '2 mins',
                        detail:
                          'Re-read your answers. Check quotations are accurate. Add any missing analysis.',
                      },
                    ].map((row) => (
                      <tr key={row.phase} className="border-t border-border even:bg-muted">
                        <td className="px-4 py-3 font-semibold text-foreground">{row.phase}</td>
                        <td className="px-4 py-3 font-bold text-primary">{row.time}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Tip>
                If you are running out of time on Question 1, stop after three paragraphs and move
                to Question 2. It is better to attempt both questions than to write a perfect answer
                for one and leave the other blank. You cannot score marks on a question you do not
                attempt.
              </Tip>
            </Section>

            {/* ─── 9. VOCABULARY FOR DISCUSSING POETRY ────────────── */}
            <Section id="vocabulary" title="9. Vocabulary for Discussing Poetry">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Using precise, academic vocabulary signals to the examiner that you are a confident,
                skilled analyst. Here are the key phrases and terms you should have in your
                repertoire.
              </p>

              <h3 className="mb-4 text-lg font-bold text-foreground">
                Tentative Language (for exploring interpretations)
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Top-band responses avoid stating interpretations as absolute facts. Use tentative
                language to show you are exploring possibilities.
              </p>
              <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  'Perhaps this suggests...',
                  'This could imply...',
                  'It is possible that the poet intends...',
                  'The reader might interpret this as...',
                  'Arguably, this conveys...',
                  'This may reflect...',
                  'One reading of this is...',
                  'Alternatively, this could suggest...',
                  'It could be argued that...',
                ].map((phrase) => (
                  <div
                    key={phrase}
                    className="rounded-lg bg-primary/5 border border-primary/20 px-4 py-3 text-sm text-muted-foreground italic"
                  >
                    {phrase}
                  </div>
                ))}
              </div>

              <h3 className="mb-4 text-lg font-bold text-foreground">
                Evaluative Phrases (for analysing effects)
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                These phrases help you articulate the <em>impact</em> of the poet&apos;s choices on
                the reader.
              </p>
              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {[
                  'This creates a sense of...',
                  'The effect of this is to...',
                  'This evokes a feeling of...',
                  'The connotations of [word] suggest...',
                  'This reinforces the idea that...',
                  'The poet emphasises... through...',
                  'This mirrors / echoes / reflects...',
                  'This juxtaposition highlights...',
                ].map((phrase) => (
                  <div
                    key={phrase}
                    className="rounded-lg bg-primary/5 border border-primary/10 px-4 py-3 text-sm text-muted-foreground italic"
                  >
                    {phrase}
                  </div>
                ))}
              </div>

              <h3 className="mb-4 text-lg font-bold text-foreground">
                {_tr(`Key Technical Terms`)}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    term: 'Enjambment',
                    def: 'A line that runs on into the next without punctuation, creating momentum or urgency.',
                  },
                  {
                    term: 'Caesura',
                    def: 'A pause in the middle of a line, created by punctuation. Often marks a shift in thought or emotion.',
                  },
                  {
                    term: 'Volta',
                    def: 'A turning point in a poem where the tone, argument, or perspective shifts.',
                  },
                  {
                    term: 'Semantic field',
                    def: 'A group of words related to the same topic (e.g., a semantic field of war: battle, soldiers, wounds).',
                  },
                  {
                    term: 'Juxtaposition',
                    def: 'Placing two contrasting ideas, images, or words side by side to highlight their differences.',
                  },
                  {
                    term: 'Sibilance',
                    def: "Repetition of 's' sounds, often creating a sinister, soothing, or secretive atmosphere.",
                  },
                  {
                    term: 'Plosive',
                    def: 'Hard consonant sounds (b, d, g, k, p, t) that create a harsh, aggressive, or forceful effect.',
                  },
                  {
                    term: 'Anaphora',
                    def: 'Repetition of a word or phrase at the start of successive lines or clauses for emphasis.',
                  },
                  {
                    term: 'Pathetic fallacy',
                    def: "Using weather or natural surroundings to reflect a character's mood or the poem's atmosphere.",
                  },
                  {
                    term: 'Tone',
                    def: "The poet's attitude towards the subject, conveyed through word choice, rhythm, and imagery.",
                  },
                ].map((item) => (
                  <div
                    key={item.term}
                    className="rounded-xl border border-border bg-card p-4 shadow-md"
                  >
                    <p className="font-bold text-foreground text-sm">{item.term}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.def}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── Back link ──────────────────────────────────────── */}
            <div className="pt-8 border-t border-border">
              <Link
                href="/resources/poetry"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
              >
                <span aria-hidden="true">&larr;</span> Back to Poetry Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
