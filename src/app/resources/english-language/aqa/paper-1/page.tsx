'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
/* ─── Expandable section component ──────────────────────────── */

function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-foreground hover:bg-muted transition-colors"
      >
        <span className="text-lg">{title}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-border px-6 py-6 text-muted-foreground leading-relaxed space-y-4">
          {children}
        </div>
      )}
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function Paper1Page() {
  const locale = useLocale()
  const tr = (en: string): string => {
    if (locale !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            AQA GCSE English Language &middot; 8700/1
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 1: Explorations in Creative Reading and Writing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            1 hour 45 minutes &middot; 80 marks &middot; 50% of the GCSE
          </p>
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
            <Link
              href="/resources/english-language"
              className="hover:text-primary transition-colors"
            >
              English Language
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources/english-language/aqa"
              className="hover:text-primary transition-colors"
            >
              AQA
            </Link>
          </li>
          <li>/</li>
          <li className="text-primary font-medium">Paper 1</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">
        {/* ── Overview ────────────────────────────────────────────── */}
        <div className="rounded-xl border border-primary/20 bg-primary/10 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">{tr(`Paper overview`)}</h2>
          <p className="mt-3 text-muted-foreground">
            Paper 1 tests your ability to <strong>read and understand</strong> a literary fiction
            text (a novel or short story extract, published after 1900) and to{' '}
            <strong>write creatively</strong> (descriptive or narrative writing). The paper is split
            into two sections:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-primary/20 bg-card p-4">
              <h3 className="font-bold text-primary">{tr(`Section A: Reading`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                4 questions on one unseen fiction extract &middot; 40 marks &middot; recommended 1
                hour
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-card p-4">
              <h3 className="font-bold text-primary">{tr(`Section B: Writing`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                1 question: descriptive or narrative writing &middot; 40 marks &middot; recommended
                45 minutes
              </p>
            </div>
          </div>
        </div>

        {/* ── Timing strategy ────────────────────────────────────── */}
        <Section title={tr(`Recommended timing strategy`)} defaultOpen>
          <p>
            With 1 hour 45 minutes for 80 marks, a useful rule is roughly{' '}
            <strong>1 minute per mark</strong> plus some reading and planning time. Here is a
            breakdown that top students use:
          </p>
          <div className="overflow-x-auto">
            <table className="mt-3 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Task</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4">Read the extract carefully</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2 pr-4">10-15 mins</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">{tr(`Question 1 (list 4 things)`)}</td>
                  <td className="py-2 pr-4">4</td>
                  <td className="py-2 pr-4">5 mins</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">{tr(`Question 2 (language analysis)`)}</td>
                  <td className="py-2 pr-4">8</td>
                  <td className="py-2 pr-4">8-10 mins</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">{tr(`Question 3 (structure)`)}</td>
                  <td className="py-2 pr-4">8</td>
                  <td className="py-2 pr-4">8-10 mins</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">{tr(`Question 4 (evaluation)`)}</td>
                  <td className="py-2 pr-4">20</td>
                  <td className="py-2 pr-4">20-25 mins</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">{tr(`Question 5 (creative writing)`)}</td>
                  <td className="py-2 pr-4">40</td>
                  <td className="py-2 pr-4">45 mins</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Many students run out of time on Question 5 because they spend too long on Question 4.
            Stick to the timings above and move on even if you feel you could write more on a
            reading question.
          </p>
        </Section>

        {/* ── Q1 ─────────────────────────────────────────────────── */}
        <Section title={tr(`Question 1: List four things... (4 marks)`)}>
          <h3 className="font-bold text-primary">{tr(`What the question asks`)}</h3>
          <p>
            You are given a specific section of the extract (e.g., lines 1-7) and asked to list four
            things you learn about a character, setting, or event from those lines.
          </p>

          <h3 className="mt-4 font-bold text-primary">{tr(`How to answer`)}</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Read the specified lines carefully. Only use information from those lines &mdash;
              using other parts of the text earns zero marks for that point.
            </li>
            <li>
              Write four separate, clear statements. You can quote directly from the text or
              paraphrase. Both are acceptable.
            </li>
            <li>
              Each correct point = 1 mark. There is no need to explain or analyse &mdash; just state
              the information.
            </li>
            <li>
              If you write more than four things, the marker marks the first four only. Do not waste
              time writing extra.
            </li>
          </ul>

          <h3 className="mt-4 font-bold text-primary">{tr(`Common mistakes`)}</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>{tr(`Using information from outside the specified lines.`)}</li>
            <li>
              {tr(
                `Making inferences that are not directly supported by the text. Stick to what is explicitly stated or clearly implied.`,
              )}
            </li>
            <li>Writing only two or three things when four are required.</li>
          </ul>

          <h3 className="mt-4 font-bold text-primary">Example</h3>
          <div className="rounded-lg bg-muted p-4 text-sm">
            <p className="font-semibold text-foreground">
              Q: List four things you learn about the house from lines 1-7.
            </p>
            <ol className="mt-2 ml-5 list-decimal space-y-1">
              <li>{tr(`The house is described as old and neglected.`)}</li>
              <li>{tr(`The front door has peeling paint.`)}</li>
              <li>{tr(`There is a broken window on the upper floor.`)}</li>
              <li>{tr(`The garden is overgrown with weeds.`)}</li>
            </ol>
          </div>
        </Section>

        {/* ── Q2 ─────────────────────────────────────────────────── */}
        <Section title={tr(`Question 2: How does the writer use language...? (8 marks)`)}>
          <h3 className="font-bold text-primary">{tr(`What the question asks`)}</h3>
          <p>
            You are directed to a specific section of the text and asked how the writer uses
            language to describe or present something (e.g., a character, a setting, an atmosphere).
            This question assesses
            <strong> AO2</strong>: Explain, comment on and analyse how writers use language and
            structure to achieve effects and influence readers, using relevant subject terminology.
          </p>

          <h3 className="mt-4 font-bold text-primary">{tr(`Marking guide summary`)}</h3>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Level</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Descriptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 4</td>
                  <td className="py-2 pr-4">7-8</td>
                  <td className="py-2 pr-4">
                    <strong>{tr(`Perceptive, detailed analysis.`)}</strong> Analyses the effects of
                    the writer&rsquo;s choices of language. Selects judicious examples. Uses
                    sophisticated subject terminology accurately.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 3</td>
                  <td className="py-2 pr-4">5-6</td>
                  <td className="py-2 pr-4">
                    <strong>{tr(`Clear, relevant explanation.`)}</strong> Clearly explains the
                    effects of the writer&rsquo;s choices of language. Selects relevant examples.
                    Uses subject terminology accurately.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 2</td>
                  <td className="py-2 pr-4">3-4</td>
                  <td className="py-2 pr-4">
                    <strong>{tr(`Some understanding.`)}</strong> Attempts to comment on the effect
                    of language. Selects some appropriate examples. Uses some subject terminology,
                    not always accurately.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 1</td>
                  <td className="py-2 pr-4">1-2</td>
                  <td className="py-2 pr-4">
                    <strong>{tr(`Simple, limited comment.`)}</strong> Offers simple comment on the
                    effect of language. Selects simple references or examples. Uses simple subject
                    terminology.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-4 font-bold text-primary">{tr(`How to structure your answer`)}</h3>
          <p>
            Use a <strong>{tr(`What &rarr; How &rarr; Why`)}</strong> approach for each point:
          </p>
          <ol className="ml-5 list-decimal space-y-2 mt-2">
            <li>
              <strong>What:</strong> Identify the technique or language feature and embed a short
              quotation.
            </li>
            <li>
              <strong>How:</strong> Name the device (e.g., metaphor, semantic field, sibilance) and
              explain how it works.
            </li>
            <li>
              <strong>Why:</strong> Analyse the effect on the reader. What does it make them think,
              feel, or picture? Why might the writer have chosen this particular word or image?
            </li>
          </ol>
          <p className="mt-3">
            Aim for <strong>3-4 well-developed points</strong> rather than many shallow ones.
            Quality over quantity.
          </p>

          <h3 className="mt-4 font-bold text-primary">{tr(`Top tips from markers`)}</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>{tr(`Zoom in on individual words.`)}</strong> The best responses explore why a
              specific word was chosen over alternatives. For example, why &ldquo;crawled&rdquo;
              instead of &ldquo;walked&rdquo;?
            </li>
            <li>
              <strong>{tr(`Avoid feature-spotting.`)}</strong> Simply writing &ldquo;The writer uses
              a simile&rdquo; without explaining the effect earns very little credit.
            </li>
            <li>
              <strong>{tr(`Use tentative language.`)}</strong> Phrases like &ldquo;This could
              suggest&hellip;&rdquo;, &ldquo;Perhaps the writer intends&hellip;&rdquo;, or
              &ldquo;This might evoke a sense of&hellip;&rdquo; show you are exploring meaning
              rather than stating the obvious.
            </li>
            <li>
              <strong>Consider connotations.</strong> Many words carry associations beyond their
              dictionary definition. Exploring these connotations is key to Level 4.
            </li>
          </ul>

          <h3 className="mt-4 font-bold text-primary">{tr(`Example response (Level 4)`)}</h3>
          <div className="rounded-lg bg-muted p-4 text-sm space-y-2">
            <p className="italic text-muted-foreground">
              Extract: &ldquo;The fog crept through the empty streets like a thief, swallowing every
              last trace of light.&rdquo;
            </p>
            <p>
              The writer personifies the fog through the verb &ldquo;crept,&rdquo; which connotes
              stealth and secrecy. This is reinforced by the simile &ldquo;like a thief,&rdquo;
              which positions the fog as something threatening and dishonest &mdash; something that
              takes without permission. The cumulative effect creates a sinister atmosphere, as the
              reader begins to associate the natural phenomenon of fog with criminal intent. The
              verb &ldquo;swallowing&rdquo; extends this sense of menace: it suggests the fog does
              not merely obscure the light but consumes it entirely, as if the darkness is permanent
              and inescapable. The phrase &ldquo;every last trace&rdquo; emphasises totality,
              leaving the reader with a sense of hopelessness &mdash; there is no residual light to
              cling to. The writer may be using the fog as a metaphor for the protagonist&rsquo;s
              growing despair.
            </p>
          </div>
        </Section>

        {/* ── Q3 ─────────────────────────────────────────────────── */}
        <Section title={tr(`Question 3: How does the writer structure the text...? (8 marks)`)}>
          <h3 className="font-bold text-primary">{tr(`What the question asks`)}</h3>
          <p>
            This question asks you to analyse <strong>structural features</strong> across the whole
            text. Unlike Q2 (which is about language), Q3 is about how the writer organises and
            sequences the narrative. This also assesses{' '}
            <strong>{tr(`Language and structure analysis (AO2)`)}</strong>.
          </p>

          <h3 className="mt-4 font-bold text-primary">{tr(`Structural features to look for`)}</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>{tr(`Opening / exposition:`)}</strong> How does the text begin? Does it start
              with dialogue, description, action, or in medias res (in the middle of events)?
            </li>
            <li>
              <strong>{tr(`Shifts in focus:`)}</strong> Does the writer move from one character to
              another? From setting to action? From external description to internal thoughts? From
              wide angle to close up (or vice versa)?
            </li>
            <li>
              <strong>{tr(`Narrative perspective:`)}</strong> Changes in viewpoint, tense shifts, or
              shifts between past and present.
            </li>
            <li>
              <strong>Pace:</strong> Does the writer speed up (short sentences, rapid action) or
              slow down (long descriptions, detailed imagery)?
            </li>
            <li>
              <strong>{tr(`Building tension / climax:`)}</strong> How does the writer create
              suspense? Is there a turning point or moment of revelation?
            </li>
            <li>
              <strong>{tr(`Ending / resolution:`)}</strong> How does the extract end? Does it
              resolve the tension, leave a cliffhanger, or circle back to the beginning?
            </li>
            <li>
              <strong>{tr(`Repetition and motifs:`)}</strong> Are there repeated images, phrases, or
              ideas that create a pattern across the text?
            </li>
            <li>
              <strong>{tr(`Contrast / juxtaposition:`)}</strong> Does the writer place contrasting
              ideas or scenes next to each other for effect?
            </li>
          </ul>

          <h3 className="mt-4 font-bold text-primary">{tr(`How to structure your answer`)}</h3>
          <p>
            Think in terms of <strong>beginning &rarr; middle &rarr; end</strong>. Write about what
            the writer focuses the reader&rsquo;s attention on at the start, how this shifts or
            develops through the middle, and what effect the ending creates. Always explain{' '}
            <em>why</em> these structural choices are effective.
          </p>
          <p className="mt-2">
            Use phrases such as: &ldquo;At the opening, the writer focuses the reader&rsquo;s
            attention on&hellip;&rdquo;, &ldquo;The writer then shifts the focus to&hellip;&rdquo;,
            &ldquo;By the end of the extract, the writer has moved to&hellip;&rdquo;
          </p>

          <h3 className="mt-4 font-bold text-primary">{tr(`Example response (Level 4)`)}</h3>
          <div className="rounded-lg bg-muted p-4 text-sm space-y-2">
            <p className="italic text-muted-foreground">
              Extract: A passage describing a character arriving at an abandoned fairground.
            </p>
            <p>
              At the opening, the writer draws the reader&rsquo;s attention to the setting through a
              wide-angle establishing shot: &ldquo;the rusted gates stretched endlessly along the
              roadside.&rdquo; This panoramic perspective creates a sense of desolation and scale,
              positioning the character as small and insignificant against the vast, decaying
              landscape. The writer then shifts focus inward as the character passes through the
              gates, narrowing the lens to specific, unsettling details &mdash; &ldquo;a single
              carousel horse, its painted eye staring.&rdquo; This zoom from wide to close creates a
              claustrophobic effect, trapping both character and reader inside the setting. By the
              final paragraph, the writer reverses this structural movement: the focus pulls back
              outward as the character retreats, but the &ldquo;painted eye&rdquo; from the carousel
              is echoed in the closing line, creating a circular structure that suggests the
              character cannot truly escape what they have witnessed.
            </p>
          </div>

          <h3 className="mt-4 font-bold text-primary">{tr(`Common mistakes`)}</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Writing about <em>language</em> instead of <em>structure</em>. Talking about metaphors
              or similes here will not earn marks.
            </li>
            <li>
              Only writing about the beginning and not tracking changes through the whole text.
            </li>
            <li>Retelling the story instead of analysing how it is organised.</li>
            <li>
              Using vague terms like &ldquo;the writer builds tension&rdquo; without explaining{' '}
              <em>how</em> the structure creates that tension.
            </li>
          </ul>

          <h3 className="mt-4 font-bold text-primary">{tr(`Marking guide summary`)}</h3>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Level</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Descriptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 4</td>
                  <td className="py-2 pr-4">7-8</td>
                  <td className="py-2 pr-4">
                    {tr(
                      `Perceptive, detailed analysis of structural features. Selects judicious examples. Sophisticated use of subject terminology.`,
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 3</td>
                  <td className="py-2 pr-4">5-6</td>
                  <td className="py-2 pr-4">
                    {tr(
                      `Clear, relevant explanation of structural features. Relevant examples. Accurate use of subject terminology.`,
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 2</td>
                  <td className="py-2 pr-4">3-4</td>
                  <td className="py-2 pr-4">
                    {tr(
                      `Some understanding of structural features. Some appropriate examples. Some subject terminology.`,
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 1</td>
                  <td className="py-2 pr-4">1-2</td>
                  <td className="py-2 pr-4">
                    {tr(
                      `Simple, limited comment on structural features. Simple references. Simple subject terminology.`,
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── Q4 ─────────────────────────────────────────────────── */}
        <Section title={tr(`Question 4: To what extent do you agree...? (20 marks)`)}>
          <h3 className="font-bold text-primary">{tr(`What the question asks`)}</h3>
          <p>
            You are given a statement about the text (e.g., &ldquo;A student said: &lsquo;The writer
            makes the reader feel sympathy for the main character.&rsquo; To what extent do you
            agree?&rdquo;). You must <strong>evaluate</strong> the text critically and give your
            personal response, supported by detailed references.
          </p>
          <p className="mt-2">
            This question assesses <strong>{tr(`Critical evaluation (AO4)`)}</strong>: Evaluate
            texts critically and support this with appropriate textual references.
          </p>

          <h3 className="mt-4 font-bold text-primary">{tr(`Marking guide summary`)}</h3>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Level</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Descriptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 4</td>
                  <td className="py-2 pr-4">16-20</td>
                  <td className="py-2 pr-4">
                    Perceptive, detailed evaluation. Convincing, critical response to the statement.
                    Judicious textual references integrated into the response. Analysis of
                    writer&rsquo;s methods with subject terminology used judiciously.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 3</td>
                  <td className="py-2 pr-4">11-15</td>
                  <td className="py-2 pr-4">
                    {tr(
                      `Clear, relevant evaluation. Thoughtful response. Apt textual references. Clear understanding of writer&rsquo;s methods with subject terminology used accurately.`,
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 2</td>
                  <td className="py-2 pr-4">6-10</td>
                  <td className="py-2 pr-4">
                    {tr(
                      `Some evaluation. Some response to the statement. Some appropriate references. Some understanding of writer&rsquo;s methods.`,
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 1</td>
                  <td className="py-2 pr-4">1-5</td>
                  <td className="py-2 pr-4">
                    {tr(
                      `Simple, limited evaluation. Simple, limited response. Simple references. Limited awareness of writer&rsquo;s methods.`,
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-4 font-bold text-primary">{tr(`How to structure your answer`)}</h3>
          <p>
            This is worth <strong>20 marks</strong> and should be your longest reading response. Aim
            for <strong>4-5 developed paragraphs</strong>.
          </p>
          <ol className="ml-5 list-decimal space-y-2 mt-2">
            <li>
              <strong>{tr(`Open with your position.`)}</strong> State whether you agree, partially
              agree, or disagree with the statement. You can agree with parts and disagree with
              others &mdash; nuance is rewarded.
            </li>
            <li>
              <strong>{tr(`For each paragraph:`)}</strong> Make a point that supports or challenges
              the statement &rarr; provide a quotation &rarr; analyse the writer&rsquo;s methods
              (language/structure) &rarr; evaluate the effect on the reader and link back to the
              statement.
            </li>
            <li>
              <strong>{tr(`Use evaluative language throughout:`)}</strong> &ldquo;I strongly agree
              because&hellip;&rdquo;, &ldquo;The writer effectively&hellip;&rdquo;, &ldquo;This is
              particularly convincing because&hellip;&rdquo;, &ldquo;However, one could
              argue&hellip;&rdquo;
            </li>
            <li>
              <strong>Consider alternative interpretations.</strong> Level 4 responses show critical
              awareness &mdash; the ability to see that a text could be read in different ways.
            </li>
          </ol>

          <h3 className="mt-4 font-bold text-primary">{tr(`Key difference from Q2`)}</h3>
          <p>
            In Q2 you simply analyse language. In Q4 you must also <strong>evaluate</strong> &mdash;
            that means giving a judgement about how successful or effective the writing is. Do not
            just explain <em>what</em> the writer does; tell the marker <em>how well</em> they do it
            and <em>whether</em> you find it convincing.
          </p>

          <h3 className="mt-4 font-bold text-primary">{tr(`Common mistakes`)}</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>Forgetting to refer back to the statement in the question.</li>
            <li>{tr(`Writing a Q2-style response (analysing language without evaluating).`)}</li>
            <li>Spending too long on this question and running out of time for Q5.</li>
            <li>Not using the whole text. You should reference different parts of the extract.</li>
          </ul>
        </Section>

        {/* ── Q5 ─────────────────────────────────────────────────── */}
        <Section title={tr(`Question 5: Creative writing (40 marks)`)}>
          <h3 className="font-bold text-primary">{tr(`What the question asks`)}</h3>
          <p>
            You are given a choice of <strong>two tasks</strong>. One will be a descriptive writing
            task (often linked to an image), and one will be a narrative writing task. You only need
            to complete <strong>one</strong>.
          </p>
          <p className="mt-2">{tr(`This question assesses:`)}</p>
          <ul className="ml-5 list-disc space-y-1 mt-1">
            <li>
              <strong>{tr(`Content and organisation (AO5, 24 marks):`)}</strong> Communicate
              clearly, effectively and imaginatively, selecting and adapting tone, style and
              register for different forms, purposes and audiences. Organise information and ideas,
              using structural and grammatical features to support coherence and cohesion of texts.
            </li>
            <li>
              <strong>{tr(`Technical accuracy (AO6, 16 marks):`)}</strong> Use a range of vocabulary
              and sentence structures for clarity, purpose and effect, with accurate spelling and
              punctuation.
            </li>
          </ul>

          <h3 className="mt-4 font-bold text-primary">
            {tr(`Marking guide: Content and Organisation (AO5, 24 marks)`)}
          </h3>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Level</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Descriptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 4</td>
                  <td className="py-2 pr-4">19-24</td>
                  <td className="py-2 pr-4">
                    Compelling, convincing communication. Extensive, ambitious vocabulary with
                    sustained crafting of linguistic devices. Varied, inventive structural features.
                    Writing is compelling, incorporating a range of convincing ideas.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 3</td>
                  <td className="py-2 pr-4">13-18</td>
                  <td className="py-2 pr-4">
                    {tr(
                      `Consistent, clear communication. Increasingly sophisticated vocabulary and phrasing. Effective structural features. Writing is engaging with a range of connected ideas.`,
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 2</td>
                  <td className="py-2 pr-4">7-12</td>
                  <td className="py-2 pr-4">
                    {tr(
                      `Some successful communication. Vocabulary chosen for effect. Some structural features. Writing has some clear ideas.`,
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 1</td>
                  <td className="py-2 pr-4">1-6</td>
                  <td className="py-2 pr-4">
                    {tr(
                      `Simple, limited communication. Simple vocabulary. Limited structural features. One or two ideas.`,
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-4 font-bold text-primary">
            {tr(`Marking guide: Technical Accuracy (AO6, 16 marks)`)}
          </h3>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">Level</th>
                  <th className="py-2 pr-4">Marks</th>
                  <th className="py-2 pr-4">Descriptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 4</td>
                  <td className="py-2 pr-4">13-16</td>
                  <td className="py-2 pr-4">
                    Sentence demarcation is consistently secure and accurate. Wide range of
                    punctuation used with a high level of accuracy. Uses a full range of sentence
                    forms for effect. Spelling (including complex and irregular words) is
                    consistently accurate. Extensive, ambitious vocabulary used throughout.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 3</td>
                  <td className="py-2 pr-4">9-12</td>
                  <td className="py-2 pr-4">
                    Sentence demarcation is mostly secure and accurate. Range of punctuation used,
                    mostly with success. Uses a variety of sentence forms for effect. Spelling
                    (including complex and irregular words) is mostly accurate. Increasingly
                    sophisticated vocabulary.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 2</td>
                  <td className="py-2 pr-4">5-8</td>
                  <td className="py-2 pr-4">
                    Sentence demarcation is mostly secure with occasional errors. Some control of a
                    range of punctuation. Attempts a variety of sentence forms. Some accurate
                    spelling of more complex words. Varied vocabulary.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Level 1</td>
                  <td className="py-2 pr-4">1-4</td>
                  <td className="py-2 pr-4">
                    {tr(
                      `Sentence demarcation is occasionally secure. Some evidence of conscious punctuation. Simple range of sentence forms. Accurate basic spelling. Simple vocabulary.`,
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-4 font-bold text-primary">
            {tr(`Planning your response (5 minutes)`)}
          </h3>
          <p>
            Spend 5 minutes planning before you write. A good plan saves time and produces a better
            piece. Try one of these structures:
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`For descriptive writing`)}</h4>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-sm">
                <li>
                  {tr(
                    `Choose 4-5 &ldquo;zoom points&rdquo; &mdash; specific details you will describe in depth`,
                  )}
                </li>
                <li>
                  {tr(
                    `Plan a structural journey: e.g., wide shot &rarr; close up &rarr; sensory detail &rarr; shift in mood &rarr; return to wide shot`,
                  )}
                </li>
                <li>{tr(`Decide on a dominant mood or atmosphere`)}</li>
                <li>{tr(`Note 2-3 ambitious vocabulary choices or images`)}</li>
                <li>Plan how you will open and close (circular structure often works well)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`For narrative writing`)}</h4>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-sm">
                <li>{tr(`Keep the plot simple &mdash; one event, one setting, 1-2 characters`)}</li>
                <li>
                  {tr(
                    `Plan a clear arc: situation &rarr; complication &rarr; climax &rarr; resolution`,
                  )}
                </li>
                <li>Decide on your narrative perspective (first or third person)</li>
                <li>{tr(`Plan a strong opening hook and a satisfying ending`)}</li>
                <li>{tr(`Include moments of descriptive detail to slow the pace`)}</li>
              </ul>
            </div>
          </div>

          <h3 className="mt-4 font-bold text-primary">{tr(`What markers want to see`)}</h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>{tr(`Crafted language:`)}</strong> Use of literary devices (metaphor, simile,
              personification, sensory imagery) that feel deliberate, not random. Quality over
              quantity.
            </li>
            <li>
              <strong>{tr(`Varied sentence structures:`)}</strong> Mix short, punchy sentences with
              longer, more complex ones. Use minor sentences and fragments for dramatic effect.
              Start sentences in different ways.
            </li>
            <li>
              <strong>{tr(`Conscious paragraphing:`)}</strong> Use paragraph breaks to signal shifts
              in time, focus, or mood. Single-sentence or single-line paragraphs can create
              emphasis.
            </li>
            <li>
              <strong>{tr(`Ambitious vocabulary:`)}</strong> Use precise, evocative words.
              &ldquo;The ancient oak groaned&rdquo; is better than &ldquo;The big tree moved.&rdquo;
            </li>
            <li>
              <strong>{tr(`Punctuation for effect:`)}</strong> Semicolons, colons, dashes, ellipses,
              and exclamation marks should all be used purposefully. Do not overuse any single type.
            </li>
            <li>
              <strong>{tr(`Accurate spelling and grammar.`)}</strong> Leave 5 minutes at the end to
              proofread. Common errors include: their/there/they&rsquo;re, your/you&rsquo;re,
              its/it&rsquo;s, comma splicing, and inconsistent tense.
            </li>
          </ul>

          <h3 className="mt-4 font-bold text-primary">
            {tr(`Example openings at different levels`)}
          </h3>
          <div className="space-y-4 mt-3">
            <div className="rounded-lg bg-muted p-4 text-sm">
              <p className="font-semibold text-warn-600">{tr(`Level 1-2 (Grade 3-4):`)}</p>
              <p className="mt-1 italic">
                &ldquo;It was a dark and stormy night. The house was old and scary. I walked up to
                the door and knocked on it. Nobody answered so I went inside.&rdquo;
              </p>
              <p className="mt-2 text-muted-foreground">
                Simple vocabulary, no imagery, basic sentence structures, no atmosphere created.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-sm">
              <p className="font-semibold text-yellow-600">{tr(`Level 3 (Grade 5-6):`)}</p>
              <p className="mt-1 italic">
                &ldquo;Rain hammered against the cracked windows of the abandoned house, each drop
                sounding like a tiny fist demanding entry. The front door hung open, its hinges
                rusted and broken, as if the building itself had given up trying to keep the world
                out.&rdquo;
              </p>
              <p className="mt-2 text-muted-foreground">
                Simile used effectively, personification of the house, some atmosphere, varied
                sentence length.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-sm">
              <p className="font-semibold text-success-600">{tr(`Level 4 (Grade 7-9):`)}</p>
              <p className="mt-1 italic">
                &ldquo;Silence. The kind that presses against your eardrums and makes you
                hyper-aware of your own breathing. I stood at the threshold, one foot on the mossy
                step, the other still planted on the gravel path behind me &mdash; as if my body
                understood what my mind refused to accept: that crossing into the darkness beyond
                that door meant leaving something behind.&rdquo;
              </p>
              <p className="mt-2 text-muted-foreground">
                Minor sentence opening, second person to draw reader in, physical detail, dash for
                parenthetical clause, metaphorical resonance, varied structure, ambitious
                vocabulary.
              </p>
            </div>
          </div>
        </Section>

        {/* ── General exam tips ──────────────────────────────────── */}
        <Section title={tr(`General exam tips for Paper 1`)}>
          <ul className="ml-5 list-disc space-y-3">
            <li>
              <strong>{tr(`Read the extract twice.`)}</strong> First for general understanding,
              second to annotate key language and structural features. This initial investment saves
              time later.
            </li>
            <li>
              <strong>{tr(`Annotate as you read.`)}</strong> Circle interesting words, underline key
              phrases, note shifts in mood or focus. This is your evidence bank for Q2-Q4.
            </li>
            <li>
              <strong>{tr(`Answer the question that is asked.`)}</strong> If Q2 asks about language
              in lines 10-18, do not write about structure or about language outside those lines.
            </li>
            <li>
              <strong>Q5 is worth half the paper.</strong> Even if you feel your reading answers
              were weak, a strong Q5 can pull your grade up significantly. Never rush it.
            </li>
            <li>
              <strong>{tr(`Proofread your creative writing.`)}</strong> Spend the last 3-5 minutes
              reading back through Q5 and correcting errors. AO6 (technical accuracy) is worth 16
              marks &mdash; more than Q2 and Q3 combined.
            </li>
          </ul>
        </Section>

        {/* Continue studying */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8 mt-6">
          <h2 className="text-xl font-bold text-foreground">{tr(`Continue studying`)}</h2>
          <p className="mt-2 text-muted-foreground">
            Build your reading analysis and writing skills with these related resources.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/resources/english-language/aqa/paper-2"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Paper 2: Viewpoints &amp; Perspectives
            </Link>
            <Link
              href="/resources/english-language/aqa/techniques"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Language Techniques Guide
            </Link>
            <Link
              href="/resources/writing-skills"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Writing Skills
            </Link>
            <Link
              href="/practice"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Practice Questions
            </Link>
            <Link
              href="/revision"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Revision Hub
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/resources/english-language/aqa"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to AQA English Language
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  )
}
