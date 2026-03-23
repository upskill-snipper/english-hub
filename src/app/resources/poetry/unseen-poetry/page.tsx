import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Unseen Poetry Guide | The English Hub",
  description:
    "Complete GCSE unseen poetry guide. The READ method, PEEL paragraphs, comparison technique, three full practice poems with model responses, and examiner commentary.",
};

/* ─── Section wrapper ────────────────────────────────────────── */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-bold text-[#1A5276] border-b-2 border-[#2E86C1]/20 pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ─── Tip callout ────────────────────────────────────────────── */

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl border-l-4 border-[#2E86C1] bg-[#2E86C1]/5 px-5 py-4">
      <p className="text-sm font-semibold text-[#1A5276] mb-1">Exam Tip</p>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

/* ─── Warning callout ────────────────────────────────────────── */

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
      <p className="text-sm font-semibold text-amber-800 mb-1">Common Mistake</p>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

/* ─── Poem display ───────────────────────────────────────────── */

function PoemBlock({
  title,
  author,
  lines,
}: {
  title: string;
  author: string;
  lines: string[];
}) {
  return (
    <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
      <p className="font-bold text-[#1A5276] text-lg">{title}</p>
      <p className="text-sm text-gray-500 mb-4">by {author}</p>
      <div className="space-y-1 font-serif text-gray-800 leading-relaxed">
        {lines.map((line, i) => (
          <p key={i} className={line === "" ? "h-4" : ""}>
            {line || "\u00A0"}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ─── Model response block ───────────────────────────────────── */

function ModelResponse({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-xl border-2 border-[#2E86C1]/30 bg-white p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-[#2E86C1] mb-3">
        {label}
      </p>
      <div className="text-sm text-gray-700 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

/* ─── Examiner commentary ────────────────────────────────────── */

function ExaminerCommentary({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl bg-[#1A5276]/5 border border-[#1A5276]/10 px-5 py-4">
      <p className="text-xs font-bold uppercase tracking-wider text-[#1A5276] mb-2">
        Examiner Commentary
      </p>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function UnseenPoetryPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2E86C1]/80">
            Poetry Skills
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Unseen Poetry Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            A comprehensive, step-by-step approach to tackling unseen poetry in
            your GCSE exam. The READ method, PEEL paragraphs, comparison
            technique, and three full practice poems with model responses.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#1A5276] transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources"
              className="hover:text-[#1A5276] transition-colors"
            >
              Resources
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources/poetry"
              className="hover:text-[#1A5276] transition-colors"
            >
              Poetry
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-[#1A5276]">Unseen Poetry</li>
        </ol>
      </nav>

      {/* Table of contents + content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
          {/* Sticky sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 text-sm">
              <p className="mb-2 font-bold text-[#1A5276] uppercase tracking-wider text-xs">
                Contents
              </p>
              {[
                { id: "read-method", label: "The READ Method" },
                { id: "what-to-look-for", label: "What to Look For" },
                { id: "peel-paragraphs", label: "PEEL Paragraphs" },
                { id: "question-types", label: "Question Types" },
                { id: "comparison", label: "Comparison Technique" },
                { id: "practice-1", label: "Practice Poem 1" },
                { id: "practice-2", label: "Practice Poem 2" },
                { id: "practice-3", label: "Practice Poem 3" },
                { id: "mistakes", label: "Mistakes to Avoid" },
                { id: "time-management", label: "Time Management" },
                { id: "vocabulary", label: "Poetry Vocabulary" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-1.5 text-gray-600 hover:bg-[#2E86C1]/10 hover:text-[#1A5276] transition-colors"
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
              <p className="mb-6 text-gray-700 leading-relaxed">
                Unseen poetry can feel intimidating because you have never encountered the
                poem before. The READ method gives you a repeatable, systematic approach
                that works for <em>any</em> poem, every time.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* R */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A5276] text-white font-bold text-lg">
                      R
                    </span>
                    <h3 className="font-bold text-[#1A5276] text-lg">Read</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Read the poem <strong>at least twice</strong>. On the first read, absorb
                    the overall mood and subject. On the second read, underline striking
                    words and images. Read the title carefully -- it often provides the
                    context or focus of the poem.
                  </p>
                  <Tip>
                    Read the poem a third time, but this time read it aloud in your head.
                    You will notice rhythmic effects, caesura, and enjambment that you
                    missed on a silent read.
                  </Tip>
                </div>

                {/* E */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A5276] text-white font-bold text-lg">
                      E
                    </span>
                    <h3 className="font-bold text-[#1A5276] text-lg">Examine</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Examine the <strong>form, structure, and language</strong>. How is the poem
                    organised? What kind of stanzas does it use? Where does the tone shift?
                    What imagery, metaphors, or sound devices stand out?
                  </p>
                  <Tip>
                    Annotate directly on the exam paper. Circle key words, draw arrows
                    between connected images, and jot one-word notes in the margin (e.g.
                    &ldquo;anger&rdquo;, &ldquo;shift&rdquo;, &ldquo;contrast&rdquo;).
                  </Tip>
                </div>

                {/* A */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A5276] text-white font-bold text-lg">
                      A
                    </span>
                    <h3 className="font-bold text-[#1A5276] text-lg">Analyse</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Analyse <strong>how</strong> the poet&apos;s choices create meaning and
                    effect. Do not just identify techniques -- explain <em>why</em> the poet
                    has used them and <em>what</em> impact they have on the reader.
                  </p>
                  <Tip>
                    Use the formula: <strong>What + How + Why</strong>. What does the poet
                    do? How do they do it (which technique)? Why does it matter (effect on
                    the reader)?
                  </Tip>
                </div>

                {/* D */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A5276] text-white font-bold text-lg">
                      D
                    </span>
                    <h3 className="font-bold text-[#1A5276] text-lg">Develop</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Develop your ideas by exploring <strong>alternative interpretations</strong>,
                    considering the poet&apos;s intentions, and linking your points to the
                    poem&apos;s wider themes. This is where you push from a good answer into
                    a top-band response.
                  </p>
                  <Tip>
                    Use phrases such as &ldquo;Alternatively, this could suggest...&rdquo;
                    or &ldquo;A reader might also interpret this as...&rdquo; to show
                    exploratory thinking.
                  </Tip>
                </div>
              </div>
            </Section>

            {/* ─── 2. WHAT TO LOOK FOR ────────────────────────────── */}
            <Section id="what-to-look-for" title="2. What to Look For">
              <p className="mb-6 text-gray-700 leading-relaxed">
                When you examine an unseen poem, work through these seven areas
                systematically. You do not need to write about all of them -- choose the
                three or four that are most significant in the poem.
              </p>

              <div className="space-y-4">
                {[
                  {
                    area: "Title",
                    what: "The title often reveals the subject, sets the tone, or creates expectations that the poem may then subvert.",
                    questions:
                      "What does the title lead you to expect? Does the poem fulfil or challenge that expectation? Does the title take on new meaning after reading the poem?",
                  },
                  {
                    area: "Form",
                    what: "The overall type or shape of the poem: sonnet, ballad, free verse, dramatic monologue, etc. The choice of form is always deliberate.",
                    questions:
                      "Is the form regular or irregular? Does the form match or contrast with the content? What associations does the form carry?",
                  },
                  {
                    area: "Structure",
                    what: "How the poem is organised: stanza lengths, volta (turn), opening vs. closing, progression of ideas, chronological or non-linear sequence.",
                    questions:
                      "Where does the tone or focus shift? Does the poem build to a climax? Are stanzas uniform or varied in length? Is there a circular structure?",
                  },
                  {
                    area: "Imagery",
                    what: "Metaphor, simile, personification, symbolism, and sensory language. Imagery is the poet's most powerful tool for creating meaning.",
                    questions:
                      "What pictures does the language create? Which senses are engaged? Is the imagery drawn from nature, war, religion, the domestic? What does the imagery connote?",
                  },
                  {
                    area: "Tone",
                    what: "The poet's attitude towards the subject: angry, nostalgic, reflective, bitter, celebratory, ambivalent. Tone often shifts within a poem.",
                    questions:
                      "What is the overall mood? Where does the tone change? Is the tone consistent or contradictory? How does word choice create tone?",
                  },
                  {
                    area: "Rhythm & Metre",
                    what: "The beat or pulse of the poem. Regular metre (iambic pentameter, tetrameter) creates a measured feel; irregular rhythm can suggest turbulence or freedom.",
                    questions:
                      "Is the rhythm regular or varied? Does the rhythm mirror the content (e.g., a fast rhythm for urgency)? Where does the rhythm break, and why?",
                  },
                  {
                    area: "Rhyme & Sound",
                    what: "Rhyme scheme, half-rhyme, internal rhyme, alliteration, assonance, sibilance, onomatopoeia. Sound effects create atmosphere and reinforce meaning.",
                    questions:
                      "Is there a rhyme scheme? Does it break at any point? What sound patterns are repeated? How do the sounds reflect the poem's mood or subject?",
                  },
                ].map((item) => (
                  <div
                    key={item.area}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-bold text-[#1A5276]">{item.area}</h3>
                    <p className="mt-1 text-sm text-gray-700">{item.what}</p>
                    <p className="mt-2 text-sm text-[#2E86C1]">
                      <span className="font-semibold">Key questions: </span>
                      {item.questions}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── 3. PEEL PARAGRAPHS ─────────────────────────────── */}
            <Section id="peel-paragraphs" title="3. How to Write About Unseen Poetry (PEEL)">
              <p className="mb-6 text-gray-700 leading-relaxed">
                Every analytical paragraph should follow the PEEL structure. This ensures
                you are always explaining <em>how</em> the poet creates meaning, not just
                describing what happens.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#1A5276] p-5 text-white">
                  <p className="text-xl font-bold mb-1">P -- Point</p>
                  <p className="text-sm text-white/90">
                    Make a clear, concise statement about the poet&apos;s intent or the
                    poem&apos;s effect. This answers the question directly.
                  </p>
                </div>
                <div className="rounded-xl bg-[#1A5276]/90 p-5 text-white">
                  <p className="text-xl font-bold mb-1">E -- Evidence</p>
                  <p className="text-sm text-white/90">
                    Embed a short, precise quotation from the poem. You do not need full
                    lines -- a key phrase or even a single word is often more effective.
                  </p>
                </div>
                <div className="rounded-xl bg-[#2E86C1] p-5 text-white">
                  <p className="text-xl font-bold mb-1">E -- Explain</p>
                  <p className="text-sm text-white/90">
                    Explain <em>how</em> the language or technique works. Zoom in on
                    individual words, connotations, sound effects, and imagery.
                  </p>
                </div>
                <div className="rounded-xl bg-[#2E86C1]/80 p-5 text-white">
                  <p className="text-xl font-bold mb-1">L -- Link</p>
                  <p className="text-sm text-white/90">
                    Link back to the question, the poem&apos;s wider themes, or offer an
                    alternative interpretation. This is where you show depth.
                  </p>
                </div>
              </div>

              <h3 className="mt-8 mb-4 text-lg font-bold text-gray-900">
                Example PEEL Paragraph
              </h3>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold text-[#1A5276]">[P]</span> The poet
                  presents nature as a powerful, uncontrollable force.{" "}
                  <span className="font-bold text-[#1A5276]">[E]</span> This is
                  conveyed through the metaphor &ldquo;the sea&apos;s jaws clamped
                  shut on the harbour wall&rdquo;.{" "}
                  <span className="font-bold text-[#2E86C1]">[E]</span> The verb
                  &ldquo;clamped&rdquo; suggests relentless, mechanical force, while
                  the personification of &ldquo;jaws&rdquo; implies the sea is a
                  predator, consuming the man-made structures around it. The plosive
                  sounds in &ldquo;clamped&rdquo; and &ldquo;shut&rdquo; reinforce
                  the violence of the action.{" "}
                  <span className="font-bold text-[#2E86C1]/80">[L]</span>{" "}
                  Alternatively, the image of &ldquo;jaws&rdquo; could suggest
                  entrapment, implying that those who live by the sea are held captive
                  by its unpredictability. This reinforces the poem&apos;s wider theme
                  of humanity&apos;s vulnerability in the face of nature.
                </p>
              </div>

              <Tip>
                Notice how the example zooms in on <strong>individual words</strong>{" "}
                (&ldquo;clamped&rdquo;, &ldquo;jaws&rdquo;, &ldquo;shut&rdquo;)
                rather than paraphrasing the whole line. This is what examiners mean by
                &ldquo;close analysis&rdquo;.
              </Tip>
            </Section>

            {/* ─── 4. QUESTION TYPES ──────────────────────────────── */}
            <Section id="question-types" title="4. Common Question Types">
              <p className="mb-6 text-gray-700 leading-relaxed">
                Unseen poetry questions typically fall into predictable categories. Here
                is how to approach each one.
              </p>

              <div className="space-y-4">
                {[
                  {
                    type: "How does the poet present [theme/idea]?",
                    approach:
                      "Focus on the poet's methods (language, structure, form) rather than retelling the poem. Every paragraph should address HOW, not just WHAT. Use the phrase 'The poet presents [theme] through...' to keep your answer focused.",
                    example:
                      "\"How does the poet present the power of nature?\" -- Write about imagery, structural choices, and sound effects that convey power, not a summary of the poem's events.",
                  },
                  {
                    type: "What are the poet's feelings and attitudes?",
                    approach:
                      "Identify two or three distinct feelings. Track how they develop or shift across the poem. Always support with evidence and explain HOW the language conveys those feelings.",
                    example:
                      "\"What do you think the poet feels about growing up?\" -- Identify feelings like nostalgia, loss, and acceptance, then show how language techniques convey each one.",
                  },
                  {
                    type: "How does the poet use language to create effects?",
                    approach:
                      "This is a language-focused question. Zoom in on word choices, imagery, figurative language, and sound devices. Analyse the connotations of individual words and explain their impact on the reader.",
                    example:
                      "Select specific words and phrases, explore multiple connotations, and explain how they create atmosphere, emotion, or meaning for the reader.",
                  },
                  {
                    type: "How does the poet use structure to interest the reader?",
                    approach:
                      "Consider: stanza form, line lengths, enjambment, caesura, volta, opening vs. closing, progression of ideas, and how the poem's shape on the page reflects its content.",
                    example:
                      "Discuss how the shift from long to short stanzas mirrors a shift from stability to fragmentation, or how enjambment creates urgency.",
                  },
                ].map((item) => (
                  <div
                    key={item.type}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-bold text-[#1A5276] text-sm">
                      &ldquo;{item.type}&rdquo;
                    </h3>
                    <p className="mt-2 text-sm text-gray-700">{item.approach}</p>
                    <p className="mt-2 text-sm italic text-gray-500">
                      {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── 5. COMPARISON TECHNIQUE ────────────────────────── */}
            <Section id="comparison" title="5. Comparison Technique">
              <p className="mb-6 text-gray-700 leading-relaxed">
                The second unseen poetry question typically asks you to compare the poem
                you have already analysed with a second, shorter poem. This is usually
                worth fewer marks and requires a more concise approach.
              </p>

              <h3 className="mb-4 text-lg font-bold text-gray-900">
                The Key Principle: Compare, Don&apos;t Contrast Separately
              </h3>
              <p className="mb-4 text-sm text-gray-700">
                The most common mistake is writing about Poem A, then writing about Poem
                B. Instead, you must <strong>integrate</strong> your comparison
                throughout.
              </p>

              <div className="mb-6 overflow-hidden rounded-xl border border-gray-200">
                <div className="grid grid-cols-2 text-sm font-bold bg-[#1A5276] text-white">
                  <div className="px-4 py-3">Weak (Separate)</div>
                  <div className="px-4 py-3 border-l border-white/20">
                    Strong (Integrated)
                  </div>
                </div>
                <div className="grid grid-cols-2 text-sm">
                  <div className="px-4 py-3 border-t border-gray-200 text-gray-700">
                    &ldquo;In Poem A, the poet uses metaphor to show anger. In Poem B,
                    the poet uses simile to show sadness.&rdquo;
                  </div>
                  <div className="px-4 py-3 border-t border-l border-gray-200 text-gray-700">
                    &ldquo;Both poets use figurative language to convey intense emotion;
                    however, while Poem A&apos;s extended metaphor of fire suggests
                    destructive rage, Poem B&apos;s simile &lsquo;like water through
                    cupped hands&rsquo; conveys a gentler sense of helpless loss.&rdquo;
                  </div>
                </div>
              </div>

              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Comparison Structure
              </h3>
              <div className="space-y-3">
                {[
                  {
                    step: "1",
                    title: "Opening",
                    detail:
                      "State the key similarity or difference in how both poems approach the given theme or subject.",
                  },
                  {
                    step: "2",
                    title: "Point of comparison 1",
                    detail:
                      "Compare a specific technique or idea across BOTH poems in the same paragraph. Use connectives: 'similarly', 'in contrast', 'whereas', 'however'.",
                  },
                  {
                    step: "3",
                    title: "Point of comparison 2",
                    detail:
                      "A second integrated comparison. Choose a different technique area (e.g., if point 1 was about imagery, point 2 could be about structure or tone).",
                  },
                  {
                    step: "4",
                    title: "Conclusion",
                    detail:
                      "A brief concluding sentence stating which poem you find more effective and why (if the question asks for this), or summarise the key difference in approach.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2E86C1] text-white text-sm font-bold">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-bold text-[#1A5276] text-sm">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-700">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 mb-4 text-lg font-bold text-gray-900">
                Useful Comparison Connectives
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-[#2E86C1]/5 border border-[#2E86C1]/20 p-4">
                  <p className="font-bold text-[#1A5276] text-sm mb-2">
                    Showing Similarity
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Similarly, both poets...</li>
                    <li>In the same way, Poem B also...</li>
                    <li>This idea is echoed in Poem B, where...</li>
                    <li>Like Poem A, the second poem presents...</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-[#2E86C1]/5 border border-[#2E86C1]/20 p-4">
                  <p className="font-bold text-[#1A5276] text-sm mb-2">
                    Showing Difference
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>In contrast, Poem B...</li>
                    <li>Whereas Poem A presents... , Poem B suggests...</li>
                    <li>However, the second poet takes a different approach by...</li>
                    <li>While both poems explore [theme], their methods diverge...</li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* ─── 6. PRACTICE POEMS ──────────────────────────────── */}

            {/* ── Practice Poem 1 ──────────────────────────────────── */}
            <Section id="practice-1" title="6a. Practice Poem 1">
              <PoemBlock
                title="Storm on the Island"
                author="Seamus Heaney (adapted extract)"
                lines={[
                  "We are prepared: we build our houses squat,",
                  "Sink walls in rock and roof them with good slate.",
                  "This wizened earth has never troubled us",
                  "With hay, so, as you see, there are no stacks",
                  "Or stooks that can be lost. Nor are there trees",
                  "Which might prove company when it blows full",
                  "Blast: you know what I mean -- leaves and branches",
                  "Can raise a tragic chorus in a gale",
                  "So that you listen to the thing you fear",
                  "Forgetting that it pummels your house too.",
                  "",
                  "But no: we are sheltered by the rock, by the familiar",
                  "Arrangement of the landscape. But a huge nothing",
                  "That we fear, a space in which we hear nothing,",
                  "Nothing that a space can hold -- a fear",
                  "That is both real and nothing. Strange, it is a huge nothing",
                  "That we fear.",
                ]}
              />

              <p className="mb-4 text-sm font-semibold text-[#1A5276]">
                Question: How does the poet present the power of nature in this poem?
              </p>

              <ModelResponse label="Model Response (Grade 8/9)">
                <p>
                  <span className="font-bold text-[#1A5276]">[P]</span> Heaney
                  initially presents the islanders as confident in their ability to
                  withstand nature&apos;s power.{" "}
                  <span className="font-bold text-[#1A5276]">[E]</span> The
                  declarative opening, &ldquo;We are prepared&rdquo;, establishes a
                  tone of collective assurance, reinforced by the practical, monosyllabic
                  language of &ldquo;squat&rdquo;, &ldquo;rock&rdquo;, and
                  &ldquo;slate&rdquo;.{" "}
                  <span className="font-bold text-[#2E86C1]">[E]</span> The heavy,
                  grounded consonants mirror the solidity of the buildings, suggesting a
                  community that has shaped itself around the threat. The verb
                  &ldquo;sink&rdquo; implies permanence, as though the walls are
                  embedded in the landscape itself.{" "}
                  <span className="font-bold text-[#2E86C1]/80">[L]</span> However,
                  this confidence is gradually undermined, suggesting that Heaney is
                  questioning whether human preparation can ever truly match the scale of
                  natural force.
                </p>
                <p>
                  <span className="font-bold text-[#1A5276]">[P]</span> The poem&apos;s
                  conclusion reveals that the true power of nature lies not in physical
                  destruction but in psychological fear.{" "}
                  <span className="font-bold text-[#1A5276]">[E]</span> The repetition
                  of &ldquo;nothing&rdquo; in the final lines -- &ldquo;a huge
                  nothing / That we fear&rdquo; -- creates a paradox that is deeply
                  unsettling.{" "}
                  <span className="font-bold text-[#2E86C1]">[E]</span> The oxymoron
                  &ldquo;huge nothing&rdquo; defies logic: how can emptiness be vast?
                  This reflects the irrational nature of fear itself. The caesura after
                  &ldquo;But no:&rdquo; enacts the moment of psychological rupture, the
                  point at which the islanders&apos; confidence fractures.{" "}
                  <span className="font-bold text-[#2E86C1]/80">[L]</span>{" "}
                  Alternatively, the &ldquo;huge nothing&rdquo; could be read as a
                  political metaphor, with Heaney -- writing in the context of the
                  Northern Irish Troubles -- exploring how communities live in fear of
                  an intangible but ever-present threat.
                </p>
              </ModelResponse>

              <ExaminerCommentary>
                <p>
                  This response demonstrates several top-band qualities: it tracks the
                  poem&apos;s structural shift from confidence to fear; it zooms in on
                  individual words (&ldquo;squat&rdquo;, &ldquo;sink&rdquo;,
                  &ldquo;nothing&rdquo;); it analyses sound effects (plosive consonants);
                  it explores the paradox of &ldquo;huge nothing&rdquo;; and it offers
                  an alternative contextual interpretation. The candidate never
                  paraphrases -- every sentence analyses.
                </p>
              </ExaminerCommentary>
            </Section>

            {/* ── Practice Poem 2 ──────────────────────────────────── */}
            <Section id="practice-2" title="6b. Practice Poem 2">
              <PoemBlock
                title="Nettles"
                author="Vernon Scannell"
                lines={[
                  "My son aged three fell in the nettle bed.",
                  "\"Bed\" seemed a curious name for those green spears,",
                  "That regiment of spite behind the shed:",
                  "It was no place for rest. With sobs and tears",
                  "The boy came seeking comfort and I saw",
                  "White blisters beaded on his tender skin.",
                  "We soothed him till his pain was not so raw.",
                  "",
                  "At last he offered us a watery grin,",
                  "And then I took my billhook, honed the blade",
                  "And went outside and slashed in fury with it",
                  "Till not a nettle in that fierce parade",
                  "Stood upright any more. And then I lit",
                  "A funeral pyre to burn the fallen dead.",
                  "",
                  "But in two weeks the busy sun and rain",
                  "Had called up tall recruits behind the shed:",
                  "My son would often come with fresh wounds again.",
                ]}
              />

              <p className="mb-4 text-sm font-semibold text-[#1A5276]">
                Question: How does the poet present the feelings of a parent in this
                poem?
              </p>

              <ModelResponse label="Model Response (Grade 8/9)">
                <p>
                  <span className="font-bold text-[#1A5276]">[P]</span> Scannell
                  presents parenthood as a battle the parent can never ultimately win.{" "}
                  <span className="font-bold text-[#1A5276]">[E]</span> The sustained
                  military metaphor -- &ldquo;green spears&rdquo;, &ldquo;regiment of
                  spite&rdquo;, &ldquo;fierce parade&rdquo;, &ldquo;tall recruits&rdquo;
                  -- transforms the domestic scene of a child falling into nettles into a
                  battlefield.{" "}
                  <span className="font-bold text-[#2E86C1]">[E]</span> The word
                  &ldquo;regiment&rdquo; implies the threats are organised, disciplined,
                  and numerous -- far beyond what a single parent can defeat. The
                  personification of the nettles as soldiers elevates the father&apos;s
                  protective instinct from an everyday reaction to something heroic, yet
                  simultaneously futile.{" "}
                  <span className="font-bold text-[#2E86C1]/80">[L]</span> This may
                  reflect Scannell&apos;s own experience as a war veteran, where the
                  language of combat becomes the only vocabulary adequate to express the
                  intensity of parental love and protectiveness.
                </p>
                <p>
                  <span className="font-bold text-[#1A5276]">[P]</span> The poem&apos;s
                  final line conveys a devastating sense of parental helplessness.{" "}
                  <span className="font-bold text-[#1A5276]">[E]</span> The statement
                  &ldquo;My son would often come with fresh wounds again&rdquo; uses the
                  conditional &ldquo;would&rdquo; to suggest an ongoing, inescapable
                  cycle.{" "}
                  <span className="font-bold text-[#2E86C1]">[E]</span> The adjective
                  &ldquo;fresh&rdquo; is particularly poignant -- it implies both new
                  pain and renewed suffering, as though the child&apos;s hurt is
                  perpetually raw. The finality of the end-stopped line, standing alone
                  as a single-line conclusion, mirrors the parent&apos;s resigned
                  acceptance that he cannot protect his child forever.{" "}
                  <span className="font-bold text-[#2E86C1]/80">[L]</span> On a deeper
                  level, the &ldquo;nettles&rdquo; may symbolise all the pain that life
                  will inevitably inflict upon a child -- a parent&apos;s love is fierce,
                  but it cannot shield a child from the world permanently.
                </p>
              </ModelResponse>

              <ExaminerCommentary>
                <p>
                  This response excels through its analysis of the sustained military
                  metaphor and its connection to the poet&apos;s biographical context.
                  The candidate analyses individual word choices (&ldquo;regiment&rdquo;,
                  &ldquo;fresh&rdquo;, &ldquo;would&rdquo;) and links structural features
                  (the isolated final line) to meaning. The alternative interpretation in
                  the final sentence lifts the response from analysis into evaluation.
                </p>
              </ExaminerCommentary>
            </Section>

            {/* ── Practice Poem 3 ──────────────────────────────────── */}
            <Section id="practice-3" title="6c. Practice Poem 3">
              <PoemBlock
                title="The Emigree"
                author="Carol Rumens (adapted extract)"
                lines={[
                  "There once was a country... I left it as a child",
                  "but my memory of it is sunlight-clear",
                  "for it seems I never saw it in bad light.",
                  "It may be sick with tyrants,",
                  "poisoned by its government, but I am told",
                  "its hills are paperwhite, its December rivers",
                  "are luminous, its sky shines like a coin.",
                  "",
                  "I have no passport, there's no way back at all",
                  "but my city comes to me in its own white plane.",
                  "It lies down in front of me, docile as paper;",
                  "I stroke it. It takes me dancing through the city",
                  "of walls. They accuse me of being dark.",
                  "",
                  "My city takes me dancing through the city of walls.",
                ]}
              />

              <p className="mb-4 text-sm font-semibold text-[#1A5276]">
                Question: How does the poet present the speaker&apos;s relationship
                with their homeland?
              </p>

              <ModelResponse label="Model Response (Grade 8/9)">
                <p>
                  <span className="font-bold text-[#1A5276]">[P]</span> Rumens
                  presents the speaker&apos;s homeland as an idealised, almost mythical
                  place that exists more powerfully in memory than in reality.{" "}
                  <span className="font-bold text-[#1A5276]">[E]</span> The compound
                  adjective &ldquo;sunlight-clear&rdquo; describes the speaker&apos;s
                  memory, while the semantic field of light -- &ldquo;paperwhite&rdquo;,
                  &ldquo;luminous&rdquo;, &ldquo;shines like a coin&rdquo; -- suffuses
                  the homeland in radiance.{" "}
                  <span className="font-bold text-[#2E86C1]">[E]</span> The simile
                  &ldquo;shines like a coin&rdquo; is carefully chosen: a coin is small,
                  tangible, and precious -- something to be treasured and held close.
                  Yet coins are also common, suggesting that this idealised homeland may
                  be a universal experience shared by all emigrants, not just this
                  speaker.{" "}
                  <span className="font-bold text-[#2E86C1]/80">[L]</span> The
                  pervasive imagery of light may also function as a defence mechanism:
                  by refusing to see the homeland &ldquo;in bad light&rdquo;, the speaker
                  preserves a version of it that can never be damaged by political reality.
                </p>
                <p>
                  <span className="font-bold text-[#1A5276]">[P]</span> The poem
                  suggests that the relationship between the speaker and their homeland
                  transcends physical separation.{" "}
                  <span className="font-bold text-[#1A5276]">[E]</span> The
                  personification of the city -- &ldquo;It lies down in front of me,
                  docile as paper; / I stroke it&rdquo; -- presents the homeland as a
                  living, intimate companion.{" "}
                  <span className="font-bold text-[#2E86C1]">[E]</span> The verb
                  &ldquo;stroke&rdquo; implies tenderness and gentleness, as though the
                  speaker is soothing a beloved animal or child. The simile &ldquo;docile
                  as paper&rdquo; carries a dual meaning: paper is gentle and
                  submissive, but it is also fragile and easily destroyed. This hints
                  that the speaker&apos;s cherished memory is more vulnerable than it
                  appears.{" "}
                  <span className="font-bold text-[#2E86C1]/80">[L]</span> The
                  repeated refrain, &ldquo;My city takes me dancing&rdquo;, positions
                  the homeland as an active, joyful presence rather than a passive loss,
                  suggesting that for the emigree, identity and belonging are carried
                  within, not tied to physical borders.
                </p>
              </ModelResponse>

              <ExaminerCommentary>
                <p>
                  This response demonstrates sophisticated analytical skills. The
                  candidate identifies the semantic field of light and explores its
                  psychological function; analyses similes at word level (&ldquo;coin&rdquo;,
                  &ldquo;paper&rdquo;); considers dual meanings; and connects the imagery
                  to the wider theme of exile and identity. The response moves fluidly
                  between close analysis and broader thematic interpretation -- exactly
                  what top-band answers require.
                </p>
              </ExaminerCommentary>
            </Section>

            {/* ─── 7. COMMON MISTAKES ─────────────────────────────── */}
            <Section id="mistakes" title="7. Common Mistakes to Avoid">
              <div className="space-y-3">
                <Warning>
                  <strong>Feature spotting without analysis.</strong> Identifying a
                  metaphor and moving on is not analysis. You must explain <em>how</em>{" "}
                  the metaphor creates meaning, <em>what</em> it connotes, and{" "}
                  <em>why</em> the poet chose it. &ldquo;The poet uses a metaphor&rdquo;
                  earns almost no marks. &ldquo;The metaphor of &lsquo;fire&rsquo;
                  connotes destruction and uncontrollable rage, reflecting the
                  speaker&apos;s consuming anger&rdquo; earns many more.
                </Warning>

                <Warning>
                  <strong>Retelling the poem.</strong> Do not write a summary of what
                  happens in the poem. Every sentence should analyse how meaning is
                  created, not describe events.
                </Warning>

                <Warning>
                  <strong>Ignoring structure.</strong> Many candidates focus entirely on
                  language and ignore structure (stanza form, line breaks, enjambment,
                  caesura, volta). Structural analysis can earn you marks that other
                  candidates miss.
                </Warning>

                <Warning>
                  <strong>Quoting entire lines.</strong> Embed short, precise quotations
                  (a word or phrase) into your sentences. Long block quotations waste
                  time and suggest you cannot select effectively.
                </Warning>

                <Warning>
                  <strong>Writing about Poem A then Poem B separately.</strong> In
                  comparison questions, you must integrate your comparison. Every paragraph
                  should mention both poems.
                </Warning>

                <Warning>
                  <strong>Not reading the question carefully.</strong> If the question
                  asks about &ldquo;feelings&rdquo;, focus on emotions. If it asks about
                  &ldquo;methods&rdquo;, focus on techniques. If it asks about
                  &ldquo;how&rdquo;, explain the poet&apos;s craft, not the subject
                  matter.
                </Warning>

                <Warning>
                  <strong>Running out of time.</strong> The comparison question is usually
                  worth fewer marks. Do not spend equal time on it. Allocate your time
                  proportionally to the marks available.
                </Warning>
              </div>
            </Section>

            {/* ─── 8. TIME MANAGEMENT ─────────────────────────────── */}
            <Section id="time-management" title="8. Time Management">
              <p className="mb-6 text-gray-700 leading-relaxed">
                Time pressure is one of the biggest challenges in the unseen poetry
                section. Here is a recommended breakdown based on a typical exam
                allocation of 45 minutes for the unseen poetry section.
              </p>

              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1A5276] text-white text-left">
                      <th className="px-4 py-3 font-semibold">Phase</th>
                      <th className="px-4 py-3 font-semibold">Time</th>
                      <th className="px-4 py-3 font-semibold">What to Do</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        phase: "Read & Annotate",
                        time: "5 mins",
                        detail:
                          "Read the poem twice. Annotate key words, images, tone shifts. Note the form and structure.",
                      },
                      {
                        phase: "Plan Question 1",
                        time: "3 mins",
                        detail:
                          "Identify 3-4 key points. Select your quotations. Plan the order of your paragraphs.",
                      },
                      {
                        phase: "Write Question 1",
                        time: "20 mins",
                        detail:
                          "Write 3-4 PEEL paragraphs. This is the higher-mark question, so give it the most time.",
                      },
                      {
                        phase: "Read Poem 2 & Plan",
                        time: "5 mins",
                        detail:
                          "Read the second poem. Identify 2-3 points of comparison or contrast with Poem 1.",
                      },
                      {
                        phase: "Write Question 2",
                        time: "10 mins",
                        detail:
                          "Write 2-3 integrated comparison paragraphs. Be concise -- this is worth fewer marks.",
                      },
                      {
                        phase: "Check",
                        time: "2 mins",
                        detail:
                          "Re-read your answers. Check quotations are accurate. Add any missing analysis.",
                      },
                    ].map((row) => (
                      <tr
                        key={row.phase}
                        className="border-t border-gray-200 even:bg-gray-50"
                      >
                        <td className="px-4 py-3 font-semibold text-[#1A5276]">
                          {row.phase}
                        </td>
                        <td className="px-4 py-3 font-bold text-[#2E86C1]">
                          {row.time}
                        </td>
                        <td className="px-4 py-3 text-gray-700">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Tip>
                If you are running out of time on Question 1, stop after three
                paragraphs and move to Question 2. It is better to attempt both
                questions than to write a perfect answer for one and leave the other
                blank. You cannot score marks on a question you do not attempt.
              </Tip>
            </Section>

            {/* ─── 9. VOCABULARY FOR DISCUSSING POETRY ────────────── */}
            <Section id="vocabulary" title="9. Vocabulary for Discussing Poetry">
              <p className="mb-6 text-gray-700 leading-relaxed">
                Using precise, academic vocabulary signals to the examiner that you are a
                confident, skilled analyst. Here are the key phrases and terms you should
                have in your repertoire.
              </p>

              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Tentative Language (for exploring interpretations)
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Top-band responses avoid stating interpretations as absolute facts. Use
                tentative language to show you are exploring possibilities.
              </p>
              <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Perhaps this suggests...",
                  "This could imply...",
                  "It is possible that the poet intends...",
                  "The reader might interpret this as...",
                  "Arguably, this conveys...",
                  "This may reflect...",
                  "One reading of this is...",
                  "Alternatively, this could suggest...",
                  "It could be argued that...",
                ].map((phrase) => (
                  <div
                    key={phrase}
                    className="rounded-lg bg-[#2E86C1]/5 border border-[#2E86C1]/20 px-4 py-3 text-sm text-gray-700 italic"
                  >
                    {phrase}
                  </div>
                ))}
              </div>

              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Evaluative Phrases (for analysing effects)
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                These phrases help you articulate the <em>impact</em> of the poet&apos;s
                choices on the reader.
              </p>
              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {[
                  "This creates a sense of...",
                  "The effect of this is to...",
                  "This evokes a feeling of...",
                  "The connotations of [word] suggest...",
                  "This reinforces the idea that...",
                  "The poet emphasises... through...",
                  "This mirrors / echoes / reflects...",
                  "This juxtaposition highlights...",
                ].map((phrase) => (
                  <div
                    key={phrase}
                    className="rounded-lg bg-[#1A5276]/5 border border-[#1A5276]/10 px-4 py-3 text-sm text-gray-700 italic"
                  >
                    {phrase}
                  </div>
                ))}
              </div>

              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Key Technical Terms
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    term: "Enjambment",
                    def: "A line that runs on into the next without punctuation, creating momentum or urgency.",
                  },
                  {
                    term: "Caesura",
                    def: "A pause in the middle of a line, created by punctuation. Often marks a shift in thought or emotion.",
                  },
                  {
                    term: "Volta",
                    def: "A turning point in a poem where the tone, argument, or perspective shifts.",
                  },
                  {
                    term: "Semantic field",
                    def: "A group of words related to the same topic (e.g., a semantic field of war: battle, soldiers, wounds).",
                  },
                  {
                    term: "Juxtaposition",
                    def: "Placing two contrasting ideas, images, or words side by side to highlight their differences.",
                  },
                  {
                    term: "Sibilance",
                    def: "Repetition of 's' sounds, often creating a sinister, soothing, or secretive atmosphere.",
                  },
                  {
                    term: "Plosive",
                    def: "Hard consonant sounds (b, d, g, k, p, t) that create a harsh, aggressive, or forceful effect.",
                  },
                  {
                    term: "Anaphora",
                    def: "Repetition of a word or phrase at the start of successive lines or clauses for emphasis.",
                  },
                  {
                    term: "Pathetic fallacy",
                    def: "Using weather or natural surroundings to reflect a character's mood or the poem's atmosphere.",
                  },
                  {
                    term: "Tone",
                    def: "The poet's attitude towards the subject, conveyed through word choice, rhythm, and imagery.",
                  },
                ].map((item) => (
                  <div
                    key={item.term}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <p className="font-bold text-[#1A5276] text-sm">{item.term}</p>
                    <p className="mt-1 text-sm text-gray-700">{item.def}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── Back link ──────────────────────────────────────── */}
            <div className="pt-8 border-t border-gray-200">
              <Link
                href="/resources/poetry"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E86C1] hover:text-[#1A5276] transition-colors"
              >
                <span aria-hidden="true">&larr;</span> Back to Poetry Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
