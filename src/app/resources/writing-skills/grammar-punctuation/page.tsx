import type { Metadata } from 'next'
import Link from 'next/link'

import { STRINGS } from './content'
import { headers } from 'next/headers'
/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Grammar & Punctuation Guide | The English Hub',
    description:
      'Comprehensive GCSE grammar and punctuation guide. Sentence types, punctuation for effect, paragraph techniques, SPaG errors, active and passive voice, tense consistency, apostrophes, direct speech rules, commonly misspelled words, and technical accuracy marking guide guidance.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/resources/writing-skills/grammar-punctuation',
  },
  title: 'Grammar & Punctuation Guide',
  description:
    'Comprehensive GCSE grammar and punctuation guide. Sentence types, punctuation for effect, paragraph techniques, SPaG errors, active and passive voice, tense consistency, apostrophes, direct speech rules, commonly misspelled words, and technical accuracy marking guide guidance.',
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

/* ─── Reusable cards ─────────────────────────────────────────── */

function RuleCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-md">
      <h4 className="font-bold text-foreground text-lg">{title}</h4>
      <div className="mt-3 text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

function ExampleBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg bg-muted px-4 py-3 mt-3">
      <p className="text-sm italic text-muted-foreground">{children}</p>
    </div>
  )
}

function CorrectIncorrect({ correct, incorrect }: { correct: string; incorrect: string }) {
  return (
    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3">
        <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">
          Incorrect
        </p>
        <p className="text-sm text-red-700 dark:text-red-300 italic">{incorrect}</p>
      </div>
      <div className="rounded-lg bg-green-500/10 border border-green-500/30 px-4 py-3">
        <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">
          Correct
        </p>
        <p className="text-sm text-green-700 dark:text-green-300 italic">{correct}</p>
      </div>
    </div>
  )
}

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg bg-primary/5 border border-primary/20 px-4 py-3">
      <p className="text-sm text-foreground">
        <span className="font-semibold">Top Tip:</span> {children}
      </p>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default async function GrammarPunctuationPage() {
  const _hdrs = await headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Writing Skills Masterclass
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Grammar &amp; Punctuation Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Master the technical accuracy that separates good writing from great writing. Everything
            you need for SPaG (technical accuracy) in one comprehensive guide.
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
            <Link
              href="/resources/writing-skills"
              className="hover:text-foreground transition-colors"
            >
              {tr(`Writing Skills`)}
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-foreground">{tr(`Grammar &amp; Punctuation`)}</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 text-sm">
              <p className="mb-2 font-bold text-foreground uppercase tracking-wider text-xs">
                Contents
              </p>
              {[
                { id: 'sentence-types', label: 'Sentence Types' },
                { id: 'punctuation-for-effect', label: 'Punctuation for Effect' },
                { id: 'paragraph-techniques', label: 'Paragraph Techniques' },
                { id: 'common-spag-errors', label: 'Common SPaG Errors' },
                { id: 'active-passive', label: 'Active vs Passive Voice' },
                { id: 'tense-consistency', label: 'Tense Consistency' },
                { id: 'subject-verb-agreement', label: 'Subject-Verb Agreement' },
                { id: 'apostrophes', label: 'Apostrophes' },
                { id: 'direct-speech', label: 'Direct Speech' },
                { id: 'misspelled-words', label: 'Commonly Misspelled Words' },
                { id: 'technical-accuracy-assessment', label: 'technical accuracy Assessment' },
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
            {/* ─── 1. Sentence Types ──────────────────────────────── */}
            <Section id="sentence-types" title="1. Sentence Types">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Varying your sentence types is one of the most powerful ways to control pace,
                rhythm, and tone in your writing. Markers actively look for deliberate variety -- it
                shows craft, not accident.
              </p>

              <div className="space-y-4">
                <RuleCard title={tr(`Simple Sentence`)}>
                  <p>
                    Contains <strong>one independent clause</strong> with a single subject and verb.
                    It expresses one complete idea.
                  </p>
                  <ExampleBox>&quot;She ran.&quot;</ExampleBox>
                  <ExampleBox>&quot;The door slammed shut.&quot;</ExampleBox>
                  <TipBox>
                    Use simple sentences for <strong>impact, clarity, and dramatic effect</strong>.
                    After a long, complex sentence, a short simple sentence hits the reader like a
                    punch. &quot;He was gone.&quot; -- three words, maximum impact.
                  </TipBox>
                </RuleCard>

                <RuleCard title={tr(`Compound Sentence`)}>
                  <p>
                    Joins <strong>two or more independent clauses</strong> using a coordinating
                    conjunction (<strong>FANBOYS</strong>: for, and, nor, but, or, yet, so) or a
                    semicolon.
                  </p>
                  <ExampleBox>
                    &quot;The rain hammered the windows, and the wind screamed through the
                    cracks.&quot;
                  </ExampleBox>
                  <ExampleBox>
                    &quot;She wanted to speak, but the words wouldn&apos;t come.&quot;
                  </ExampleBox>
                  <TipBox>
                    Compound sentences are great for showing <strong>contrast</strong> (using
                    &quot;but&quot; or &quot;yet&quot;) or <strong>building</strong> tension by
                    layering detail with &quot;and&quot;. Avoid stringing too many together with
                    &quot;and&quot; -- that creates a breathless, childish effect (unless you are
                    deliberately using polysyndeton).
                  </TipBox>
                </RuleCard>

                <RuleCard title={tr(`Complex Sentence`)}>
                  <p>
                    Contains{' '}
                    <strong>
                      one independent clause and at least one subordinate (dependent) clause
                    </strong>
                    , connected by subordinating conjunctions (because, although, when, if, while,
                    since, after, until).
                  </p>
                  <ExampleBox>
                    &quot;Although the street appeared deserted, she could feel eyes watching her
                    from the shadows.&quot;
                  </ExampleBox>
                  <ExampleBox>&quot;When the bell finally rang, nobody moved.&quot;</ExampleBox>
                  <TipBox>
                    Complex sentences show <strong>sophistication</strong>. Fronted subordinate
                    clauses (starting with &quot;Although...&quot; or &quot;When...&quot;) are
                    particularly effective because they delay the main point, creating suspense or
                    emphasis. Markers love to see these used deliberately.
                  </TipBox>
                </RuleCard>

                <RuleCard title={tr(`Minor Sentence / Fragment`)}>
                  <p>
                    A <strong>grammatically incomplete sentence</strong> -- often lacking a main
                    verb or subject. Used deliberately for dramatic or stylistic effect.
                  </p>
                  <ExampleBox>&quot;Silence.&quot;</ExampleBox>
                  <ExampleBox>&quot;Not again.&quot;</ExampleBox>
                  <ExampleBox>&quot;Gone. All of it.&quot;</ExampleBox>
                  <TipBox>
                    Minor sentences are a secret weapon in creative writing. They create{' '}
                    <strong>pace, shock, and emphasis</strong>. Use them sparingly -- one or two per
                    piece -- and they feel deliberate and powerful. Overuse them and they lose
                    impact. Always place them after longer sentences for maximum contrast.
                  </TipBox>
                </RuleCard>
              </div>
            </Section>

            {/* ─── 2. Punctuation for Effect ──────────────────────── */}
            <Section id="punctuation-for-effect" title="2. Punctuation for Effect">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Punctuation is not just about &quot;getting it right&quot; -- it is a tool for
                controlling how your reader experiences your writing. Every mark changes the pace,
                tone, or emphasis.
              </p>

              <div className="space-y-4">
                <RuleCard title={tr(`Semicolons ( ; )`)}>
                  <p>
                    <strong>Two uses:</strong> (1) to join two closely related independent clauses
                    without a conjunction; (2) to separate items in a complex list.
                  </p>
                  <ExampleBox>
                    &quot;The house was empty; the silence was deafening.&quot;
                  </ExampleBox>
                  <p>
                    The semicolon creates a{' '}
                    <strong>pause that is longer than a comma but shorter than a full stop</strong>.
                    It signals that the two ideas are intimately connected -- the reader should hold
                    them together.
                  </p>
                  <TipBox>
                    Using even one semicolon correctly in your exam response signals to the marker
                    that you have control over your punctuation. It is a hallmark of confident,
                    mature writing.
                  </TipBox>
                </RuleCard>

                <RuleCard title={tr(`Colons ( : )`)}>
                  <p>
                    <strong>Introduces</strong> what follows -- an explanation, a list, or a
                    dramatic reveal. Think of it as saying &quot;here it is&quot; or
                    &quot;namely.&quot;
                  </p>
                  <ExampleBox>&quot;There was only one thing left to do: run.&quot;</ExampleBox>
                  <ExampleBox>&quot;She knew the truth: he was never coming back.&quot;</ExampleBox>
                  <p>
                    Colons create <strong>anticipation and emphasis</strong>. The clause before the
                    colon sets up an expectation; the clause after delivers the payoff. This is
                    especially powerful for dramatic reveals in creative writing.
                  </p>
                </RuleCard>

                <RuleCard title={tr(`Dashes ( -- )`)}>
                  <p>
                    Dashes can be used in pairs to <strong>insert parenthetical information</strong>
                    , or singly to create a <strong>dramatic pause or afterthought</strong>.
                  </p>
                  <ExampleBox>
                    &quot;The children -- some as young as five -- were left to fend for
                    themselves.&quot; (paired)
                  </ExampleBox>
                  <ExampleBox>&quot;She opened the door -- and screamed.&quot; (single)</ExampleBox>
                  <p>
                    Dashes feel more <strong>informal and dramatic</strong> than commas or brackets.
                    They interrupt the sentence in a way that demands attention. Use single dashes
                    for cliffhanger moments in creative writing.
                  </p>
                </RuleCard>

                <RuleCard title={tr(`Ellipsis ( ... )`)}>
                  <p>
                    Three dots indicating an{' '}
                    <strong>omission, trailing off, or unfinished thought</strong>.
                  </p>
                  <ExampleBox>
                    &quot;She reached for the handle and turned it slowly...&quot;
                  </ExampleBox>
                  <ExampleBox>&quot;If only they had listened...&quot;</ExampleBox>
                  <p>
                    Ellipsis creates{' '}
                    <strong>suspense, uncertainty, or a sense of something left unsaid</strong>. It
                    invites the reader to fill in the gap, making them an active participant.
                  </p>
                  <TipBox>
                    Do not overuse ellipsis. One or two per piece is plenty. Excessive use makes
                    writing feel vague and unfinished rather than deliberately suspenseful.
                  </TipBox>
                </RuleCard>

                <RuleCard title={tr(`Exclamation Marks ( ! )`)}>
                  <p>
                    Conveys <strong>strong emotion, surprise, or emphasis</strong>.
                  </p>
                  <ExampleBox>&quot;Stop!&quot;</ExampleBox>
                  <ExampleBox>&quot;This cannot continue!&quot;</ExampleBox>
                  <p>
                    In <strong>persuasive writing</strong>, exclamation marks can convey outrage or
                    urgency. In <strong>creative writing</strong>, they convey shock, fear, or
                    excitement.
                  </p>
                  <TipBox>
                    The golden rule: one exclamation mark per piece is powerful; more than two and
                    they lose all impact. Never use double or triple exclamation marks (!!!) in
                    formal or exam writing.
                  </TipBox>
                </RuleCard>

                <RuleCard title={tr(`Brackets / Parentheses ( )`)}>
                  <p>
                    Enclose <strong>additional information, asides, or clarifications</strong> that
                    could be removed without changing the main meaning of the sentence.
                  </p>
                  <ExampleBox>
                    &quot;The headteacher (who had been in the role for over twenty years) finally
                    addressed the issue.&quot;
                  </ExampleBox>
                  <p>
                    Brackets create an <strong>intimate, confiding tone</strong> -- as if the writer
                    is whispering an aside to the reader. In persuasive writing, they can add a
                    sarcastic or ironic comment: &quot;The government&apos;s response (if you can
                    call it that) was wholly inadequate.&quot;
                  </p>
                </RuleCard>
              </div>
            </Section>

            {/* ─── 3. Paragraph Techniques ────────────────────────── */}
            <Section id="paragraph-techniques" title="3. Paragraph Techniques">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Paragraphs are not just blocks of text -- they are structural tools that shape your
                argument and control the reader&apos;s experience.
              </p>

              <div className="space-y-4">
                <RuleCard title={tr(`Topic Sentences`)}>
                  <p>
                    The <strong>first sentence of each paragraph</strong> should clearly signal what
                    the paragraph is about. It acts as a signpost for the reader and the marker.
                  </p>
                  <ExampleBox>
                    &quot;Perhaps the most damaging consequence of social media is its impact on
                    young people&apos;s self-esteem.&quot;
                  </ExampleBox>
                  <p>
                    A strong topic sentence does three things: (1) links to the previous paragraph,
                    (2) introduces the new point, and (3) signals the writer&apos;s opinion or
                    angle.
                  </p>
                </RuleCard>

                <RuleCard title={tr(`Discourse Markers`)}>
                  <p>
                    Words and phrases that <strong>guide the reader through your argument</strong>{' '}
                    by signalling the relationship between ideas.
                  </p>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-lg bg-muted px-4 py-3">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Adding
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {tr(`Furthermore, Moreover, In addition, Similarly, Equally`)}
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted px-4 py-3">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Contrasting
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {tr(`However, Nevertheless, On the other hand, Conversely, Yet`)}
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted px-4 py-3">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        {tr(`Cause / Effect`)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {tr(`Therefore, Consequently, As a result, Thus, Hence`)}
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted px-4 py-3">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Concluding
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {tr(`Ultimately, In conclusion, To summarise, Above all, Fundamentally`)}
                      </p>
                    </div>
                  </div>
                  <TipBox>
                    Avoid starting every paragraph with &quot;Furthermore&quot; or
                    &quot;Moreover&quot; -- vary your connectives. The best discourse markers feel
                    natural, not formulaic. Try embedding them mid-sentence: &quot;This approach,
                    however, fails to address the root cause.&quot;
                  </TipBox>
                </RuleCard>

                <RuleCard title="One-Line Paragraphs for Effect">
                  <p>
                    A single-sentence paragraph stands out visually and creates{' '}
                    <strong>dramatic emphasis, a pause, or a shift in tone</strong>.
                  </p>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-3 space-y-3">
                    <p className="text-sm text-muted-foreground italic">
                      The corridor stretched ahead, dimly lit and seemingly endless. Doors lined
                      each side, all closed, all identical. The floorboards groaned with every step
                      she took, and somewhere in the distance, a tap dripped.
                    </p>
                    <p className="text-sm text-muted-foreground italic font-semibold">
                      Then she heard it.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      A sound so faint it might have been imagined -- a whisper, barely there,
                      curling through the air like smoke.
                    </p>
                  </div>
                  <TipBox>
                    The one-line paragraph &quot;Then she heard it&quot; creates a moment of tension
                    precisely because it is surrounded by longer paragraphs. Contrast is key. If
                    every paragraph is short, none of them stand out.
                  </TipBox>
                </RuleCard>
              </div>
            </Section>

            {/* ─── 4. Common SPaG Errors ──────────────────────────── */}
            <Section id="common-spag-errors" title="4. Common SPaG Errors">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                These are the errors that cost students marks every single year. Learn them,
                memorise them, and eliminate them from your writing.
              </p>

              <div className="space-y-4">
                <RuleCard title="Their / There / They're">
                  <p>
                    <strong>Their</strong> = possession (belonging to them). <strong>There</strong>{' '}
                    = place or existence. <strong>They&apos;re</strong> = contraction of &quot;they
                    are.&quot;
                  </p>
                  <CorrectIncorrect
                    incorrect="Their going to put there coats over they're."
                    correct="They're going to put their coats over there."
                  />
                </RuleCard>

                <RuleCard title="Its / It's">
                  <p>
                    <strong>Its</strong> = possession (belonging to it). <strong>It&apos;s</strong>{' '}
                    = contraction of &quot;it is&quot; or &quot;it has.&quot;
                  </p>
                  <CorrectIncorrect
                    incorrect="It's tail was wagging. The dog enjoyed it's walk."
                    correct="Its tail was wagging. It's a beautiful day."
                  />
                  <TipBox>
                    Test: can you replace the word with &quot;it is&quot;? If yes, use
                    &quot;it&apos;s.&quot; If no, use &quot;its.&quot; &quot;It is tail was
                    wagging&quot; makes no sense -- so it must be &quot;its.&quot;
                  </TipBox>
                </RuleCard>

                <RuleCard title={tr(`Affect / Effect`)}>
                  <p>
                    <strong>Affect</strong> is usually a <strong>verb</strong> (to influence).{' '}
                    <strong>Effect</strong> is usually a <strong>noun</strong> (the result or
                    impact).
                  </p>
                  <CorrectIncorrect
                    incorrect="The weather had a big affect on her mood."
                    correct="The weather affected her mood. The effect was dramatic."
                  />
                  <TipBox>
                    Memory trick: <strong>A</strong>ffect = <strong>A</strong>ction (verb).{' '}
                    <strong>E</strong>ffect = <strong>E</strong>nd result (noun).
                  </TipBox>
                </RuleCard>

                <RuleCard title={tr(`Who / Whom`)}>
                  <p>
                    <strong>Who</strong> is a subject pronoun (like he/she). <strong>Whom</strong>{' '}
                    is an object pronoun (like him/her).
                  </p>
                  <CorrectIncorrect
                    incorrect="Whom is responsible for this?"
                    correct="Who is responsible for this? To whom should I address the letter?"
                  />
                  <TipBox>
                    Test: rephrase the sentence using &quot;he&quot; or &quot;him.&quot; If
                    &quot;him&quot; fits, use &quot;whom.&quot; If &quot;he&quot; fits, use
                    &quot;who.&quot; &quot;I should address the letter to him&quot; -- so it is
                    &quot;whom.&quot;
                  </TipBox>
                </RuleCard>

                <RuleCard title={tr(`Less / Fewer`)}>
                  <p>
                    <strong>Fewer</strong> is for <strong>countable</strong> things (items you can
                    count individually). <strong>Less</strong> is for <strong>uncountable</strong>{' '}
                    things (quantities or amounts).
                  </p>
                  <CorrectIncorrect
                    incorrect="There are less students in the class this year."
                    correct="There are fewer students in the class this year. There is less noise."
                  />
                </RuleCard>

                <RuleCard title={tr(`Comma Splices`)}>
                  <p>
                    A comma splice occurs when two independent clauses are joined with{' '}
                    <strong>only a comma</strong>, without a conjunction. This is one of the most
                    common errors in GCSE writing.
                  </p>
                  <CorrectIncorrect
                    incorrect="The sun was setting, the sky turned orange."
                    correct="The sun was setting, and the sky turned orange."
                  />
                  <p className="mt-3">
                    <strong>{tr(`Three ways to fix a comma splice:`)}</strong>
                  </p>
                  <div className="mt-2 space-y-1">
                    <p>
                      1. Add a conjunction: &quot;The sun was setting<strong>, and</strong> the sky
                      turned orange.&quot;
                    </p>
                    <p>
                      2. Use a semicolon: &quot;The sun was setting<strong>;</strong> the sky turned
                      orange.&quot;
                    </p>
                    <p>
                      3. Use a full stop: &quot;The sun was setting<strong>.</strong> The sky turned
                      orange.&quot;
                    </p>
                  </div>
                </RuleCard>
              </div>
            </Section>

            {/* ─── 5. Active vs Passive Voice ─────────────────────── */}
            <Section id="active-passive" title="5. Active vs Passive Voice">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Understanding the difference between active and passive voice -- and knowing when to
                use each -- is a sign of sophisticated, controlled writing.
              </p>

              <div className="space-y-4">
                <RuleCard title={tr(`Active Voice`)}>
                  <p>
                    The <strong>subject performs the action</strong>. The sentence follows the
                    pattern: Subject &rarr; Verb &rarr; Object.
                  </p>
                  <ExampleBox>&quot;The dog bit the postman.&quot;</ExampleBox>
                  <ExampleBox>&quot;The government ignored the warnings.&quot;</ExampleBox>
                  <p>
                    Active voice is <strong>direct, clear, and energetic</strong>. It makes writing
                    feel immediate and assigns clear responsibility.
                  </p>
                </RuleCard>

                <RuleCard title={tr(`Passive Voice`)}>
                  <p>
                    The <strong>subject receives the action</strong>. The sentence follows the
                    pattern: Object &rarr; Verb (was/were + past participle) &rarr; (by + agent,
                    optional).
                  </p>
                  <ExampleBox>&quot;The postman was bitten by the dog.&quot;</ExampleBox>
                  <ExampleBox>&quot;The warnings were ignored.&quot;</ExampleBox>
                  <p>
                    Passive voice can <strong>shift focus</strong> to the victim or result,{' '}
                    <strong>conceal responsibility</strong> (notice &quot;The warnings were
                    ignored&quot; does not say who ignored them), or create a{' '}
                    <strong>formal, impersonal tone</strong>.
                  </p>
                </RuleCard>

                <RuleCard title={tr(`When to Use Each`)}>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-lg bg-muted px-4 py-3">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        {tr(`Use Active For`)}
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>{tr(`Clear, direct persuasive writing`)}</li>
                        <li>{tr(`Assigning blame or responsibility`)}</li>
                        <li>Fast-paced narrative writing</li>
                        <li>{tr(`Making arguments feel confident`)}</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-muted px-4 py-3">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        {tr(`Use Passive For`)}
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>{tr(`Emphasising the victim or result`)}</li>
                        <li>{tr(`Formal or scientific tone`)}</li>
                        <li>{tr(`Deliberately concealing responsibility`)}</li>
                        <li>{tr(`Creating distance or detachment`)}</li>
                      </ul>
                    </div>
                  </div>
                  <TipBox>
                    In persuasive writing, switching between active and passive can be a deliberate
                    technique. &quot;The government abandoned these children&quot; (active --
                    assigns blame) vs. &quot;These children have been abandoned&quot; (passive --
                    focuses on the victims). Both are powerful; they just do different things.
                  </TipBox>
                </RuleCard>
              </div>
            </Section>

            {/* ─── 6. Tense Consistency ───────────────────────────── */}
            <Section id="tense-consistency" title="6. Tense Consistency">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Shifting tense accidentally is one of the most common errors in GCSE creative
                writing. Choose your tense and stick to it -- unless you have a deliberate reason to
                shift.
              </p>

              <div className="space-y-4">
                <RuleCard title={tr(`Past Tense`)}>
                  <p>
                    The most common tense for narrative writing. Events are told as though they have
                    already happened.
                  </p>
                  <ExampleBox>
                    &quot;She walked through the door and stopped. The room was empty.&quot;
                  </ExampleBox>
                </RuleCard>

                <RuleCard title={tr(`Present Tense`)}>
                  <p>
                    Creates a sense of <strong>immediacy and urgency</strong>. The reader
                    experiences events in real time alongside the narrator.
                  </p>
                  <ExampleBox>
                    &quot;She walks through the door and stops. The room is empty.&quot;
                  </ExampleBox>
                </RuleCard>

                <RuleCard title={tr(`Common Tense Errors`)}>
                  <CorrectIncorrect
                    incorrect="She walked through the door and stops. The room is empty but she noticed something strange."
                    correct="She walked through the door and stopped. The room was empty, but she noticed something strange."
                  />
                  <TipBox>
                    Before you submit your exam response, re-read specifically for tense
                    consistency. It is the single most common technical error in creative writing.
                    If you choose past tense, check that every verb is in the past.
                  </TipBox>
                </RuleCard>

                <RuleCard title={tr(`Deliberate Tense Shifts`)}>
                  <p>
                    A shift to present tense within a past-tense narrative can be used{' '}
                    <strong>deliberately</strong> for flashbacks, moments of heightened intensity,
                    or direct address to the reader.
                  </p>
                  <ExampleBox>
                    &quot;She remembered that day clearly. The sun is blazing. The grass is dry
                    beneath her feet. She can hear laughter somewhere behind her.&quot; -- The shift
                    to present tense here plunges the reader into the memory, making it vivid and
                    immediate.
                  </ExampleBox>
                  <TipBox>
                    If you use a deliberate tense shift, make it obvious and controlled. Start a new
                    paragraph, and return to your original tense afterwards. The marker needs to see
                    that the shift was intentional, not accidental.
                  </TipBox>
                </RuleCard>
              </div>
            </Section>

            {/* ─── 7. Subject-Verb Agreement ──────────────────────── */}
            <Section id="subject-verb-agreement" title="7. Subject-Verb Agreement">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                The verb must agree with its subject in number: singular subjects take singular
                verbs; plural subjects take plural verbs. This sounds simple, but certain
                constructions trip students up.
              </p>

              <div className="space-y-4">
                <RuleCard title={tr(`Basic Rule`)}>
                  <CorrectIncorrect
                    incorrect="The group of students were noisy. Everyone have their own opinion."
                    correct="The group of students was noisy. Everyone has their own opinion."
                  />
                  <p className="mt-3">
                    <strong>&quot;Group&quot;</strong> is the subject (singular), not
                    &quot;students.&quot; <strong>&quot;Everyone&quot;</strong> is always singular,
                    even though it refers to multiple people.
                  </p>
                </RuleCard>

                <RuleCard title={tr(`Tricky Cases`)}>
                  <div className="mt-2 space-y-3">
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {tr(`Collective nouns (team, class, government):`)}
                      </p>
                      <p className="text-sm mt-1">
                        Usually singular in British English: &quot;The team <strong>is</strong>{' '}
                        playing well.&quot;
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        Indefinite pronouns (everyone, nobody, each, either):
                      </p>
                      <p className="text-sm mt-1">
                        Always singular: &quot;Each of the students <strong>has</strong> a
                        textbook.&quot;
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {tr(`Compound subjects with &quot;or&quot; / &quot;nor&quot;:`)}
                      </p>
                      <p className="text-sm mt-1">
                        Verb agrees with the nearest subject: &quot;Neither the teacher nor the
                        students <strong>were</strong> ready.&quot;
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {tr(`Phrases between subject and verb:`)}
                      </p>
                      <p className="text-sm mt-1">
                        Ignore the phrase: &quot;The box of chocolates <strong>was</strong> on the
                        table.&quot; (Not &quot;were&quot;.)
                      </p>
                    </div>
                  </div>
                </RuleCard>
              </div>
            </Section>

            {/* ─── 8. Apostrophes ─────────────────────────────────── */}
            <Section id="apostrophes" title="8. Apostrophes">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Apostrophes have exactly two uses: showing <strong>possession</strong> and
                indicating <strong>contraction</strong> (omission). They are never used to make
                plurals.
              </p>

              <div className="space-y-4">
                <RuleCard title={tr(`Apostrophes for Contraction`)}>
                  <p>An apostrophe replaces missing letters when two words are combined.</p>
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      ['do not', "don't"],
                      ['it is', "it's"],
                      ['they are', "they're"],
                      ['could not', "couldn't"],
                      ['we will', "we'll"],
                      ['she would', "she'd"],
                    ].map(([full, short]) => (
                      <div key={short} className="rounded bg-muted px-3 py-2 text-center text-sm">
                        <span className="text-muted-foreground">{full}</span>{' '}
                        <span className="font-semibold text-foreground">&rarr; {short}</span>
                      </div>
                    ))}
                  </div>
                </RuleCard>

                <RuleCard title="Apostrophes for Possession">
                  <div className="space-y-3 mt-2">
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {tr(`Singular possession:`)}
                      </p>
                      <p className="text-sm">
                        Add <strong>&apos;s</strong> -- &quot;the dog&apos;s bone&quot; (one dog,
                        one bone)
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {tr(`Plural possession (regular plural):`)}
                      </p>
                      <p className="text-sm">
                        Add <strong>s&apos;</strong> -- &quot;the dogs&apos; bones&quot; (multiple
                        dogs, their bones)
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {tr(`Plural possession (irregular plural):`)}
                      </p>
                      <p className="text-sm">
                        Add <strong>&apos;s</strong> -- &quot;the children&apos;s toys&quot;
                        (because &quot;children&quot; is already plural)
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {tr(`Names ending in S:`)}
                      </p>
                      <p className="text-sm">
                        {tr(
                          `Both &quot;James&apos;s book&quot; and &quot;James&apos; book&quot; are acceptable. Be consistent.`,
                        )}
                      </p>
                    </div>
                  </div>
                </RuleCard>

                <RuleCard title="The Greengrocer's Apostrophe (Never Do This)">
                  <p>
                    Never use an apostrophe to make a word plural. This is one of the most penalised
                    errors.
                  </p>
                  <CorrectIncorrect
                    incorrect="Apple's for sale. The student's were happy. Two dog's were barking."
                    correct="Apples for sale. The students were happy. Two dogs were barking."
                  />
                </RuleCard>
              </div>
            </Section>

            {/* ─── 9. Direct Speech ───────────────────────────────── */}
            <Section id="direct-speech" title="9. Direct Speech Punctuation">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                If you include dialogue in your creative writing, you must punctuate it correctly.
                Poorly punctuated speech is one of the quickest ways to lose SPaG marks.
              </p>

              <div className="space-y-4">
                <RuleCard title="The Rules">
                  <div className="space-y-3 mt-2">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        1
                      </span>
                      <p className="text-sm">
                        Speech marks go around the <strong>exact words spoken</strong>: &quot;I need
                        to leave,&quot; she said.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        2
                      </span>
                      <p className="text-sm">
                        Punctuation goes <strong>inside</strong> the speech marks: &quot;Where are
                        you going<strong>?</strong>&quot;
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        3
                      </span>
                      <p className="text-sm">
                        Use a <strong>comma</strong> before the reporting clause: &quot;I&apos;m
                        fine<strong>,</strong>&quot; he whispered.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        4
                      </span>
                      <p className="text-sm">
                        Start a <strong>new line</strong> for each new speaker.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        5
                      </span>
                      <p className="text-sm">
                        If speech comes <strong>after</strong> the reporting clause, use a comma
                        before opening: She said<strong>,</strong> &quot;We need to talk.&quot;
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        6
                      </span>
                      <p className="text-sm">
                        If speech ends with ? or !, do <strong>not</strong> add a comma:
                        &quot;Stop!&quot; he shouted. (Not: &quot;Stop!,&quot; he shouted.)
                      </p>
                    </div>
                  </div>
                </RuleCard>

                <RuleCard title={tr(`Correctly Punctuated Example`)}>
                  <div className="mt-3 rounded-lg bg-muted px-4 py-4 space-y-2">
                    <p className="text-sm text-muted-foreground italic">
                      &quot;Where have you been?&quot; her mother asked, folding her arms.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      &quot;Nowhere,&quot; she muttered, avoiding her gaze.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      &quot;That&apos;s not an answer.&quot; Her mother&apos;s voice was steady,
                      dangerously calm. &quot;I&apos;ll ask you one more time.&quot;
                    </p>
                  </div>
                  <TipBox>
                    In GCSE creative writing, you do not need lots of dialogue. A few lines of
                    well-punctuated, purposeful speech is far more effective than pages of
                    conversation. Use dialogue to reveal character, create tension, or advance the
                    plot -- not to fill space.
                  </TipBox>
                </RuleCard>
              </div>
            </Section>

            {/* ─── 10. Commonly Misspelled Words ──────────────────── */}
            <Section id="misspelled-words" title="10. Commonly Misspelled Words">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                These 20 words are among the most frequently misspelled in GCSE English exams. Learn
                them and you will avoid easy-to-prevent mark losses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { word: 'Accommodate', trick: "Two c's, two m's" },
                  { word: 'Beginning', trick: 'Double n, single g at start' },
                  { word: 'Believe', trick: 'i before e: beLIEve has a LIE in it' },
                  { word: 'Conscience', trick: 'CON + SCIENCE' },
                  { word: 'Definitely', trick: "FINITE is in the middle (not 'definately')" },
                  { word: 'Disappear', trick: "One s, two p's" },
                  { word: 'Embarrass', trick: "Two r's, two s's" },
                  { word: 'Environment', trick: 'IRON is in the middle: envIRONment' },
                  { word: 'Exaggerate', trick: "One x, two g's" },
                  { word: 'Government', trick: "GOVERN + MENT (don't drop the n)" },
                  { word: 'Immediately', trick: 'Ends -ately, not -atly' },
                  { word: 'Independent', trick: 'Ends -ent, not -ant' },
                  { word: 'Necessary', trick: 'One collar (c), two socks (s)' },
                  { word: 'Occurrence', trick: "Two c's, two r's" },
                  { word: 'Opportunity', trick: "Two p's, then -ortunity" },
                  { word: 'Possession', trick: 'Two s-pairs: posSESSion' },
                  { word: 'Receive', trick: 'i before e EXCEPT after c' },
                  { word: 'Separate', trick: 'A RAT in the middle: sepARAte' },
                  { word: 'Sincerely', trick: 'SINCERE + LY' },
                  { word: 'Unconscious', trick: 'UN + CON + SCIOUS' },
                ].map((item) => (
                  <div
                    key={item.word}
                    className="rounded-xl border border-border bg-card p-4 shadow-md"
                  >
                    <p className="font-bold text-foreground text-lg">{item.word}</p>
                    <p className="mt-1 text-xs text-primary">{item.trick}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── 11. technical accuracy Assessment ─────────────────────────────── */}
            <Section
              id="technical-accuracy-assessment"
              title="11. How SPaG is Assessed (technical accuracy)"
            >
              <p className="mb-6 text-muted-foreground leading-relaxed">
                technical accuracy tests your &quot;technical accuracy&quot; -- your ability to use
                vocabulary, sentence structures, spelling, and punctuation accurately and
                effectively. It is worth <strong>up to 16 marks</strong> on AQA English Language,
                and significant marks on all exam boards.
              </p>

              <div className="space-y-4">
                <RuleCard title={tr(`What Markers Are Looking For`)}>
                  <div className="mt-2 space-y-4">
                    <div className="rounded-lg border-l-4 border-red-400 bg-red-500/10 px-4 py-3">
                      <p className="font-semibold text-red-700 dark:text-red-300 text-sm">
                        {tr(`Level 1 (1-4 marks) -- Limited`)}
                      </p>
                      <ul className="mt-1 text-sm text-red-700 dark:text-red-300 list-disc list-inside space-y-1">
                        <li>{tr(`Simple vocabulary; limited sentence forms`)}</li>
                        <li>Some accuracy in spelling of common words</li>
                        <li>Some accuracy in basic punctuation (full stops, capital letters)</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-500/10 px-4 py-3">
                      <p className="font-semibold text-yellow-700 text-sm">
                        {tr(`Level 2 (5-8 marks) -- Some Success`)}
                      </p>
                      <ul className="mt-1 text-sm text-yellow-700 list-disc list-inside space-y-1">
                        <li>{tr(`Some varied vocabulary; some sentence variety`)}</li>
                        <li>{tr(`Spelling generally accurate (including some complex words)`)}</li>
                        <li>Some varied punctuation used, sometimes successfully</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border-l-4 border-blue-400 bg-blue-500/10 px-4 py-3">
                      <p className="font-semibold text-blue-700 dark:text-blue-300 text-sm">
                        {tr(`Level 3 (9-12 marks) -- Consistent`)}
                      </p>
                      <ul className="mt-1 text-sm text-blue-700 dark:text-blue-300 list-disc list-inside space-y-1">
                        <li>
                          {tr(
                            `Increasingly sophisticated vocabulary; variety of sentence forms for effect`,
                          )}
                        </li>
                        <li>
                          {tr(`Spelling generally accurate, including complex and irregular words`)}
                        </li>
                        <li>{tr(`Range of punctuation used with general accuracy`)}</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border-l-4 border-green-400 bg-green-500/10 px-4 py-3">
                      <p className="font-semibold text-green-700 dark:text-green-300 text-sm">
                        {tr(`Level 4 (13-16 marks) -- Compelling`)}
                      </p>
                      <ul className="mt-1 text-sm text-green-700 dark:text-green-300 list-disc list-inside space-y-1">
                        <li>Extensive and ambitious vocabulary</li>
                        <li>{tr(`Full range of sentence forms used effectively for purpose`)}</li>
                        <li>
                          {tr(
                            `Spelling consistently accurate throughout, including ambitious vocabulary`,
                          )}
                        </li>
                        <li>
                          {tr(
                            `Wide range of punctuation used accurately and deliberately for effect`,
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </RuleCard>

                <RuleCard title={tr(`How to Move from Level 3 to Level 4`)}>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        1
                      </span>
                      <p className="text-sm">
                        <strong>{tr(`Ambitious vocabulary:`)}</strong> Do not just use interesting
                        words -- use the <em>right</em> word precisely. &quot;The house loomed&quot;
                        is better than &quot;the house was very big.&quot;
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        2
                      </span>
                      <p className="text-sm">
                        <strong>{tr(`Sentence variety for effect:`)}</strong> Deliberately vary your
                        sentence lengths and types. Follow a long complex sentence with a short
                        simple one. Use minor sentences for impact.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        3
                      </span>
                      <p className="text-sm">
                        <strong>Punctuation range:</strong> Use semicolons, colons, dashes, and
                        ellipses correctly. Even one well-placed semicolon shows the marker you have
                        control.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        4
                      </span>
                      <p className="text-sm">
                        <strong>{tr(`Consistent accuracy:`)}</strong> Proofread carefully. Eliminate
                        basic errors (their/there, comma splices, tense shifts). One or two minor
                        slips are forgivable; repeated errors are not.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        5
                      </span>
                      <p className="text-sm">
                        <strong>{tr(`Paragraphing for effect:`)}</strong> Use varied paragraph
                        lengths. Include at least one short, one-line paragraph for emphasis. Begin
                        paragraphs with strong topic sentences.
                      </p>
                    </div>
                  </div>
                </RuleCard>

                <RuleCard title={tr(`Quick Checklist Before Submitting Your Exam Response`)}>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Capital letters at the start of every sentence',
                      'Full stops at the end of every sentence',
                      'Consistent tense throughout',
                      'No comma splices',
                      'Apostrophes used correctly (or not at all)',
                      'At least one semicolon or colon used correctly',
                      'Varied sentence lengths (long, medium, short)',
                      'Paragraphs with clear topic sentences',
                      "Homophones correct (their/there, its/it's)",
                      'Speech punctuated correctly (if used)',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 rounded-lg bg-muted px-3 py-2"
                      >
                        <span className="mt-0.5 text-primary">&#9744;</span>
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </RuleCard>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </>
  )
}
