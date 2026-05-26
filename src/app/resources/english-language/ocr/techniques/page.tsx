import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'OCR GCSE English Language techniques',
  description:
    'Language and structural techniques for OCR GCSE English: identification, analysis, and how to write about them.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-language/ocr/techniques',
  },
  openGraph: {
    title: 'OCR GCSE English Language techniques - The English Hub',
    description:
      'Language and structural techniques for OCR GCSE English: identification, analysis, and how to write about them.',
    url: 'https://theenglishhub.app/resources/english-language/ocr/techniques',
  },
}

/* ─── Technique data ─────────────────────────────────────────── */

const languageTechniques = [
  {
    name: 'Simile',
    definition:
      "A comparison using 'like' or 'as' to describe something by comparing it to something else.",
    example: '"Her smile was like sunshine breaking through clouds."',
    effect:
      'Creates a vivid image by drawing a parallel between two things. Helps the reader visualise or understand something abstract through a concrete comparison.',
  },
  {
    name: 'Metaphor',
    definition:
      "A direct comparison that states something is something else, without using 'like' or 'as'.",
    example: '"The classroom was a battlefield."',
    effect:
      'Creates a powerful, immediate image. Implies a deeper connection between two ideas and can carry complex connotations. Often more forceful than a simile.',
  },
  {
    name: 'Extended metaphor',
    definition: 'A metaphor that is developed over several lines or throughout a passage.',
    example:
      '"Life is a journey - sometimes the road is smooth, other times we stumble over rocks, and occasionally we lose the map entirely."',
    effect:
      "Builds a sustained comparison that deepens the reader's understanding. Creates cohesion and can structure an entire paragraph or text.",
  },
  {
    name: 'Personification',
    definition:
      'Giving human qualities or actions to non-human things, animals, or abstract ideas.',
    example: '"The wind whispered secrets through the trees."',
    effect:
      'Makes the non-human world feel alive and relatable. Can create atmosphere, add emotion, or make descriptions more vivid and dynamic.',
  },
  {
    name: 'Pathetic fallacy',
    definition:
      'Using weather or the environment to reflect or enhance the mood or emotions of characters.',
    example: '"Dark clouds gathered overhead as she received the devastating news."',
    effect:
      "Creates atmosphere and reinforces the emotional tone. Connects the character's inner world to the external environment.",
  },
  {
    name: 'Symbolism',
    definition: 'Using an object, colour, or image to represent a deeper meaning or abstract idea.',
    example: 'A broken mirror symbolising a shattered identity.',
    effect:
      'Adds layers of meaning to a text. Encourages the reader to think beyond the literal and interpret deeper significance.',
  },
  {
    name: 'Hyperbole',
    definition: 'Deliberate exaggeration for emphasis or effect.',
    example: '"I have told you a million times!"',
    effect:
      'Emphasises a point dramatically. Can create humour, express frustration, or convey the intensity of an emotion.',
  },
  {
    name: 'Understatement (litotes)',
    definition: 'Deliberately representing something as less than it is.',
    example: '"The hurricane was a bit of a breeze." (describing severe destruction)',
    effect:
      'Can create irony, dark humour, or a tone of restraint. Often more powerful than exaggeration because it forces the reader to recognise the gap between statement and reality.',
  },
  {
    name: 'Irony',
    definition:
      'When words convey the opposite of their literal meaning, or when there is a discrepancy between what is expected and what occurs.',
    example: '"What lovely weather," she muttered, pulling her soaking coat tighter.',
    effect:
      "Creates humour, criticism, or a sense of dramatic tension. Can reveal a character's true feelings or the writer's attitude.",
  },
  {
    name: 'Oxymoron',
    definition: 'Placing two contradictory words together.',
    example: '"A deafening silence filled the room."',
    effect:
      'Creates a striking, thought-provoking image. Highlights tension, complexity, or paradox in a situation or character.',
  },
  {
    name: 'Juxtaposition',
    definition: 'Placing two contrasting ideas, images, or concepts close together for effect.',
    example: '"The billionaire stepped over the homeless man sleeping in the doorway."',
    effect:
      'Highlights differences and can create shock, irony, or social commentary. Forces the reader to compare and evaluate.',
  },
  {
    name: 'Alliteration',
    definition: 'Repetition of the same consonant sound at the beginning of nearby words.',
    example: '"Peter Piper picked a peck of pickled peppers."',
    effect:
      "Creates rhythm and emphasis. Can make a phrase memorable. Harsh alliteration (e.g., 'k', 'd') creates aggression; soft alliteration (e.g., 's', 'l') creates calm.",
  },
  {
    name: 'Sibilance',
    definition: "Repetition of 's', 'sh', or 'z' sounds.",
    example: '"The snake slithered silently through the soft sand."',
    effect:
      'Creates a smooth, hissing quality. Can suggest stealth, danger, calm, or menace depending on context.',
  },
  {
    name: 'Onomatopoeia',
    definition: 'Words that imitate the sound they describe.',
    example: '"The fire crackled and hissed as rain began to fall."',
    effect:
      'Creates a sensory, immersive experience. Brings sounds to life and adds immediacy to descriptions.',
  },
  {
    name: 'Emotive language',
    definition: 'Words deliberately chosen to provoke an emotional response in the reader.',
    example: '"Innocent children are being abandoned to suffer alone."',
    effect:
      "Manipulates the reader's emotions to build sympathy, anger, outrage, or compassion. Commonly used in persuasive and argumentative writing.",
  },
  {
    name: 'Imperative verbs',
    definition: 'Command words that instruct or direct the reader.',
    example: '"Consider the consequences. Act now. Demand change."',
    effect:
      'Creates a sense of urgency and authority. Directly engages the reader and makes the writing more forceful.',
  },
  {
    name: 'Modal verbs',
    definition:
      'Verbs that express possibility, necessity, or obligation (could, should, would, must, might).',
    example: '"We must act now before it is too late."',
    effect:
      "Can convey certainty ('must', 'will') or uncertainty ('might', 'could'). Shapes the reader's perception of how likely or necessary something is.",
  },
  {
    name: 'Semantic field',
    definition: 'A group of words that relate to the same topic or theme used throughout a text.',
    example: 'A semantic field of war: "battle", "siege", "retreat", "surrender".',
    effect:
      'Creates a sustained atmosphere or theme. Reinforces a particular mood or idea throughout the text.',
  },
  {
    name: 'Anaphora',
    definition:
      'Repetition of a word or phrase at the beginning of successive clauses or sentences.',
    example:
      '"We will fight on the beaches, we will fight on the landing grounds, we will fight in the fields."',
    effect:
      'Creates rhythm, emphasis, and a sense of building momentum. Highly effective in speeches and persuasive writing.',
  },
  {
    name: 'Tricolon (rule of three)',
    definition: 'A list of three parallel words, phrases, or clauses.',
    example: '"Government of the people, by the people, for the people."',
    effect:
      'Creates a satisfying rhythm and completeness. Three items feel balanced and memorable. Very effective in speeches.',
  },
  {
    name: 'Rhetorical question',
    definition: 'A question asked for effect rather than to receive an answer.',
    example: '"How can we stand by and watch while our planet burns?"',
    effect:
      "Engages the reader directly and prompts them to think. Implies that the answer is obvious, making the writer's point feel self-evident.",
  },
  {
    name: 'Direct address',
    definition: "Speaking directly to the reader or audience using 'you' or 'we'.",
    example: '"You have the power to change this."',
    effect:
      "Creates a personal connection with the reader. Makes the writing feel immediate and relevant. 'We' creates a sense of shared responsibility.",
  },
]

const structuralTechniques = [
  {
    name: 'In medias res',
    definition: 'Starting a narrative in the middle of the action, rather than at the beginning.',
    example: '"The glass shattered. She stood frozen, shards glinting at her feet." (opening line)',
    effect:
      "Grabs the reader's attention immediately. Creates intrigue and urgency, making the reader want to understand how the situation arose.",
  },
  {
    name: 'Flashback / analepsis',
    definition: 'Interrupting the present narrative to show events from the past.',
    example: 'A character seeing an old photograph and remembering a childhood event.',
    effect:
      'Provides context, reveals backstory, and deepens characterisation. Can create dramatic irony when the reader knows something a character does not.',
  },
  {
    name: 'Foreshadowing',
    definition: 'Hinting at events that will happen later in the text.',
    example:
      '"She didn\'t know then that this would be the last time she walked through that door."',
    effect:
      'Builds tension and suspense. Creates a sense of inevitability or foreboding. Rewards attentive readers.',
  },
  {
    name: 'Cliffhanger',
    definition: 'Ending a section or chapter at a moment of suspense or uncertainty.',
    example: '"She reached for the handle. Behind the door, something moved."',
    effect: 'Creates suspense and compels the reader to continue. Maintains narrative momentum.',
  },
  {
    name: 'Circular structure',
    definition: 'The ending mirrors or returns to the beginning of the text.',
    example: 'A story that begins and ends with the same image, setting, or phrase.',
    effect:
      'Creates a sense of completeness and resolution. Can also highlight how a character or situation has changed (or remained the same).',
  },
  {
    name: 'Shift in focus',
    definition:
      "A change in the narrative's attention - from one character, setting, time, or perspective to another.",
    example:
      "Moving from a wide establishing shot of a city to a close focus on a single person's face.",
    effect:
      'Controls what the reader sees and when. Can create surprise, build tension, or offer a new perspective on events.',
  },
  {
    name: 'Short paragraph / single-sentence paragraph',
    definition:
      'A paragraph that is noticeably shorter than surrounding paragraphs, sometimes just one sentence.',
    example: '"She was gone."',
    effect:
      'Creates dramatic emphasis and draws attention to a key moment. The white space around it forces the reader to pause and absorb the impact.',
  },
  {
    name: 'Listing / accumulation',
    definition: 'Building up a series of details, descriptions, or ideas.',
    example:
      '"The shelves held dusty books, cracked vases, faded photographs, and a single withered rose."',
    effect:
      'Can create a sense of abundance, chaos, overwhelming detail, or meticulous observation. Builds an atmosphere through accumulation.',
  },
  {
    name: 'Contrast / antithesis',
    definition: 'Placing opposing ideas, images, or situations next to each other.',
    example: 'Describing a peaceful morning followed by sudden violence.',
    effect:
      'Highlights differences and makes each element more striking. Can create shock, emphasise themes, or illustrate conflict.',
  },
  {
    name: 'Cyclical narrative',
    definition:
      "A narrative that returns to its starting point, but the reader's (or character's) understanding has changed.",
    example: 'A character returning to their childhood home but seeing it differently.',
    effect:
      'Emphasises change, growth, or the passage of time. Creates thematic resonance and a sense of completion.',
  },
  {
    name: 'Withholding information',
    definition: 'The writer deliberately delays revealing key information to the reader.',
    example: 'Not revealing the identity of a mysterious figure until the final paragraph.',
    effect:
      'Creates suspense, mystery, and intrigue. Keeps the reader engaged and rewards patience.',
  },
  {
    name: 'Zooming in / out',
    definition: 'Shifting between wide, panoramic descriptions and close, detailed focus.',
    example:
      "Starting with a view of the whole battlefield, then focusing on a single soldier's face.",
    effect:
      'Controls pace and emotional distance. Close focus creates intimacy; wide focus creates scope and perspective.',
  },
]

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRTechniquesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-language/ocr"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
          >
            &larr; OCR English Language
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Techniques Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Every language and structural technique you need for OCR GCSE English Language, with
            definitions, examples, and effects.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <section aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="text-2xl font-bold text-foreground">
            Why Techniques Matter
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              In OCR English Language, identifying techniques alone will not earn high marks. You
              must explain <em>how</em> and <em>why</em> the writer uses a technique and what{' '}
              <em>effect</em> it has on the reader. The best analysis connects techniques to the
              writer&rsquo;s purpose, the text&rsquo;s context, and the reader&rsquo;s response.
            </p>
            <div className="rounded border border-accent/20 bg-primary/10 p-4">
              <p className="text-sm font-medium text-primary">The golden rule of analysis</p>
              <p className="mt-1 text-sm text-primary">
                Identify the technique &rarr; Quote precisely &rarr; Explain the connotations of key
                words &rarr; Analyse the effect on the reader &rarr; Link to the writer&rsquo;s
                purpose. This is what separates a grade 5 answer from a grade 8/9 answer.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Language techniques ─────────────────────────────── */}
        <section aria-labelledby="language-heading">
          <h2 id="language-heading" className="text-2xl font-bold text-foreground">
            Language Techniques
          </h2>
          <p className="mt-2 text-muted-foreground">
            These are techniques used at the word, phrase, and sentence level.
          </p>

          <div className="mt-6 space-y-6">
            {languageTechniques.map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <h3 className="text-lg font-semibold text-primary">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Definition:</strong> {t.definition}
                </p>
                <p className="mt-2 text-sm italic text-muted-foreground">
                  <strong className="not-italic">Example:</strong> {t.example}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Effect:</strong> {t.effect}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Structural techniques ──────────────────────────── */}
        <section aria-labelledby="structural-heading">
          <h2 id="structural-heading" className="text-2xl font-bold text-foreground">
            Structural Techniques
          </h2>
          <p className="mt-2 text-muted-foreground">
            These are techniques used at the whole-text and paragraph level to organise, shape, and
            control the reader&rsquo;s experience.
          </p>

          <div className="mt-6 space-y-6">
            {structuralTechniques.map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <h3 className="text-lg font-semibold text-primary">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Definition:</strong> {t.definition}
                </p>
                <p className="mt-2 text-sm italic text-muted-foreground">
                  <strong className="not-italic">Example:</strong> {t.example}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Effect:</strong> {t.effect}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── How to use in your analysis ────────────────────── */}
        <section aria-labelledby="analysis-heading">
          <h2 id="analysis-heading" className="text-2xl font-bold text-foreground">
            Using Techniques in Your Analysis
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <h3 className="text-lg font-semibold text-foreground">The WHAT-HOW-WHY Framework</h3>
            <p>Use this simple framework to structure every analytical point:</p>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">WHAT</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  What technique is the writer using? Identify it and provide a precise quotation.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">HOW</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  How does it work? Analyse the specific words, their connotations, and the way the
                  technique creates meaning.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">WHY</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Why has the writer used this technique? What effect does it have on the reader?
                  What is the writer&rsquo;s purpose?
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-lg font-semibold text-foreground">Common Analysis Mistakes</h3>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Feature-spotting</strong> &mdash; Simply naming a technique without
                explaining its effect. &ldquo;The writer uses a simile&rdquo; is not analysis.
              </li>
              <li>
                <strong>Vague effects</strong> &mdash; Saying a technique &ldquo;makes the reader
                want to read on&rdquo; or &ldquo;makes the writing more interesting&rdquo; is too
                generic. Be specific about <em>what</em> the reader thinks or feels.
              </li>
              <li>
                <strong>Ignoring connotations</strong> &mdash; The best analysis zooms into
                individual words and explores their connotations. Don&rsquo;t just quote a phrase
                &mdash; pull apart the specific word choices.
              </li>
              <li>
                <strong>Forgetting structure</strong> &mdash; Many students focus only on language.
                Structural analysis is equally important and can differentiate your answer.
              </li>
              <li>
                <strong>Overloading with techniques</strong> &mdash; It is better to analyse three
                techniques in depth than to name ten techniques superficially.
              </li>
            </ul>
          </div>
        </section>

        {/* Continue studying */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">Continue studying</h2>
          <p className="mt-2 text-muted-foreground">
            Put these techniques into practice with reading analysis and writing exercises.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/resources/english-language/ocr/paper-1"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Paper 1: Information &amp; Ideas
            </Link>
            <Link
              href="/resources/english-language/ocr/paper-2"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Paper 2: Effects &amp; Impact
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

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>
    </>
  )
}
