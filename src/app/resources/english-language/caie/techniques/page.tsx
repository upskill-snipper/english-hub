import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Cambridge IGCSE English Language techniques — The English Hub',
  description:
    'Language and structural techniques for Cambridge IGCSE English: identification, analysis, and how to write about them.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-language/caie/techniques',
  },
  openGraph: {
    title: 'Cambridge IGCSE English Language techniques — The English Hub',
    description:
      'Language and structural techniques for Cambridge IGCSE English: identification, analysis, and how to write about them.',
    url: 'https://theenglishhub.app/resources/english-language/caie/techniques',
  },
  keywords: [
    'language techniques',
    'literary devices',
    'IGCSE English techniques',
    'metaphor',
    'simile',
    'personification',
    'alliteration',
    'pathetic fallacy',
    'CAIE English language analysis',
  ],
}

/* ─── Technique data ─────────────────────────────────────────── */

interface Technique {
  name: string
  definition: string
  example: string
  effect: string
  category: 'imagery' | 'sound' | 'structure' | 'rhetorical' | 'word-level'
}

const TECHNIQUES: Technique[] = [
  /* ── Imagery ─────────────────────────────────────── */
  {
    name: 'Simile',
    definition:
      'A comparison using "like" or "as" to describe something by comparing it to something else.',
    example: '"The lake was as smooth as glass."',
    effect:
      'Creates a vivid mental image by connecting two unlike things, helping the reader visualise the scene or understand an abstract idea through a concrete comparison.',
    category: 'imagery',
  },
  {
    name: 'Metaphor',
    definition:
      'A direct comparison that states something IS something else, without using "like" or "as".',
    example: '"The classroom was a zoo."',
    effect:
      'Creates a powerful, compressed image. Because the comparison is stated as fact, it can feel more forceful than a simile, making the reader see one thing in terms of another.',
    category: 'imagery',
  },
  {
    name: 'Extended Metaphor',
    definition:
      'A metaphor that is sustained and developed across several sentences or throughout a passage.',
    example:
      '"Life is a journey. Sometimes the road is smooth; sometimes we hit potholes. Occasionally we take a wrong turning, but the destination remains the same."',
    effect:
      "Develops a single comparison in depth, giving the reader a sustained framework for understanding a complex idea. Shows sophistication in the writer's thinking.",
    category: 'imagery',
  },
  {
    name: 'Personification',
    definition:
      'Giving human qualities, emotions, or actions to non-human things, animals, or abstract concepts.',
    example: '"The wind howled through the streets."',
    effect:
      'Makes abstract or inanimate things feel alive and relatable. Helps the reader connect emotionally with non-human elements of the scene.',
    category: 'imagery',
  },
  {
    name: 'Pathetic Fallacy',
    definition:
      'A specific type of personification where weather or the natural environment reflects or mirrors human emotions or the mood of a scene.',
    example: '"Dark clouds gathered as she received the terrible news."',
    effect:
      "Reinforces the mood or atmosphere of a scene. Creates a sense that even nature responds to the emotions of the characters, intensifying the reader's emotional response.",
    category: 'imagery',
  },
  {
    name: 'Symbolism',
    definition:
      'Using an object, colour, or element to represent a larger idea or concept beyond its literal meaning.',
    example: 'A dove representing peace; a storm representing turmoil.',
    effect:
      'Adds layers of meaning. Allows the writer to communicate complex ideas economically and invites the reader to interpret the text on a deeper level.',
    category: 'imagery',
  },
  {
    name: 'Imagery (Sensory Detail)',
    definition:
      'Language that appeals to the five senses (sight, sound, touch, taste, smell) to create vivid mental pictures.',
    example: '"The warm aroma of cinnamon and freshly baked bread filled the kitchen."',
    effect:
      'Immerses the reader in the scene by engaging their senses, making the writing feel real and tangible. Particularly important in descriptive writing.',
    category: 'imagery',
  },
  {
    name: 'Hyperbole',
    definition:
      'Deliberate exaggeration for emphasis or dramatic effect. Not meant to be taken literally.',
    example: '"I\'ve told you a million times!"',
    effect:
      'Emphasises a point by overstating it. Can create humour, express strong emotion, or highlight the intensity of a situation.',
    category: 'imagery',
  },
  {
    name: 'Oxymoron',
    definition: 'Two contradictory words placed together to create a paradoxical phrase.',
    example: '"Deafening silence", "bittersweet", "living death".',
    effect:
      'Creates a striking, thought-provoking expression that captures the complexity or contradictory nature of an experience. Forces the reader to pause and consider the meaning.',
    category: 'imagery',
  },
  {
    name: 'Juxtaposition',
    definition:
      'Placing two contrasting ideas, images, or concepts side by side for comparison or contrast.',
    example: '"The grand mansion overlooked the tiny, crumbling cottages below."',
    effect:
      'Highlights differences and draws attention to inequality, contrast, or change. Makes each element more vivid by placing it next to its opposite.',
    category: 'imagery',
  },

  /* ── Sound devices ───────────────────────────────── */
  {
    name: 'Alliteration',
    definition:
      'Repetition of the same consonant sound at the beginning of consecutive or closely connected words.',
    example: '"Peter Piper picked a peck of pickled peppers."',
    effect:
      'Creates rhythm and makes phrases memorable. Can emphasise key words. Harsh consonants (b, d, g, k) can create aggression; soft consonants (s, l, m) can create calm.',
    category: 'sound',
  },
  {
    name: 'Sibilance',
    definition: 'Repetition of the "s" or "sh" sound, a specific type of alliteration.',
    example: '"The snake slithered silently through the shimmering sand."',
    effect:
      'Often creates a sinister, secretive, or soothing atmosphere. Can mimic the sound of whispering, wind, or the sea.',
    category: 'sound',
  },
  {
    name: 'Onomatopoeia',
    definition: 'Words that imitate or resemble the sound they describe.',
    example: '"The fire crackled and hissed."',
    effect:
      "Makes writing more vivid and immersive by engaging the reader's sense of hearing. Brings the scene to life by recreating actual sounds.",
    category: 'sound',
  },
  {
    name: 'Assonance',
    definition: 'Repetition of vowel sounds within nearby words.',
    example: '"The rain in Spain falls mainly on the plain."',
    effect:
      'Creates internal rhyme and musicality. Long vowel sounds (oo, ee, ay) can slow the pace; short vowels (i, a, u) can quicken it.',
    category: 'sound',
  },
  {
    name: 'Plosive Sounds',
    definition: 'Harsh, explosive consonant sounds (b, d, g, k, p, t) used for emphasis.',
    example: '"The bitter, brutal blast of the bomb broke the silence."',
    effect:
      'Creates a sense of aggression, violence, or power. The sharp sounds mirror physical impact or emotional intensity.',
    category: 'sound',
  },
  {
    name: 'Fricative Sounds',
    definition: 'Sounds made by forcing air through a narrow channel (f, v, th, s, z, sh).',
    example: '"The fierce, ferocious fire raged through the forest."',
    effect:
      "Can create feelings of friction, danger, or softness depending on the specific sounds used. 'F' sounds can suggest fury; 's/sh' sounds can suggest calm.",
    category: 'sound',
  },

  /* ── Structural devices ──────────────────────────── */
  {
    name: 'Short Sentence',
    definition:
      'A deliberately brief sentence, often used after longer ones for contrast and impact.',
    example: '"She ran. The door slammed. Silence."',
    effect:
      'Creates dramatic impact, builds tension, or emphasises a key moment. The abruptness forces the reader to pause and absorb the significance.',
    category: 'structure',
  },
  {
    name: 'Long / Complex Sentence',
    definition:
      'A sentence with multiple clauses that builds detail or creates a flowing, descriptive effect.',
    example:
      '"As the sun dipped below the horizon, casting long shadows across the deserted beach, she felt a wave of nostalgia wash over her."',
    effect:
      "Can build suspense, create detailed descriptions, or mirror a character's thought process. Slows the pace, allowing the reader to absorb each detail.",
    category: 'structure',
  },
  {
    name: 'Listing / Enumeration',
    definition:
      'A series of words, phrases, or clauses listed together, often in a group of three or more.',
    example: '"The market was full of colour, noise, movement, and life."',
    effect:
      "Creates a sense of abundance, chaos, or emphasis. Can overwhelm the reader (mirroring the character's experience) or build a comprehensive picture.",
    category: 'structure',
  },
  {
    name: 'Enjambment',
    definition:
      'A sentence or phrase that runs on from one line or paragraph to the next without a pause. More common in poetry but also seen in prose.',
    example: 'A paragraph ending mid-sentence, continuing at the start of the next.',
    effect:
      "Creates a sense of urgency, continuity, or momentum. Can mirror a character's racing thoughts or the unstoppable force of an event.",
    category: 'structure',
  },
  {
    name: 'Cyclical Structure',
    definition: 'The writing ends where it began, coming full circle.',
    example: 'A story that opens and closes with the same image, phrase, or setting.',
    effect:
      "Creates a sense of completeness or inevitability. Can suggest that nothing has changed (futility) or show how the character's perspective has shifted.",
    category: 'structure',
  },
  {
    name: 'Contrast / Shift in Tone',
    definition: 'A deliberate change in mood, tone, or focus within the writing.',
    example: 'Moving from a peaceful opening to a sudden moment of violence.',
    effect:
      'Creates surprise, tension, or highlights a turning point. Forces the reader to reassess what they have read so far.',
    category: 'structure',
  },
  {
    name: 'Ellipsis',
    definition: 'Three dots (...) used to show omission, trailing off, or an unfinished thought.',
    example: '"If only she had known what was coming..."',
    effect:
      'Creates suspense, hesitation, or a sense that something is left unsaid. Invites the reader to fill in the gap with their own imagination.',
    category: 'structure',
  },
  {
    name: 'Parenthesis / Aside',
    definition:
      'Additional information inserted into a sentence using brackets, dashes, or commas.',
    example: '"The house -- though she had not visited for years -- felt strangely familiar."',
    effect:
      "Adds extra detail or a character's inner thought without disrupting the main sentence. Can create intimacy or provide important context.",
    category: 'structure',
  },

  /* ── Rhetorical devices ──────────────────────────── */
  {
    name: 'Rhetorical Question',
    definition:
      'A question asked for effect, not to receive an answer. Used to make the reader think or to emphasise a point.',
    example: '"How can we stand by and do nothing?"',
    effect:
      'Engages the reader directly and encourages them to agree with the writer. Creates a sense of shared values or challenges the reader to consider their position.',
    category: 'rhetorical',
  },
  {
    name: 'Tricolon (Rule of Three)',
    definition: 'Three words, phrases, or clauses used together for emphasis and rhythm.',
    example: '"Government of the people, by the people, for the people."',
    effect:
      'Creates a rhythmic, memorable, and persuasive effect. The pattern of three feels complete and satisfying to the human ear, making the point more convincing.',
    category: 'rhetorical',
  },
  {
    name: 'Repetition',
    definition: 'Deliberately repeating a word, phrase, or structure for emphasis.',
    example:
      '"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields."',
    effect:
      'Drives home a key point, creates rhythm, and builds intensity. Makes the message memorable and increasingly forceful with each repetition.',
    category: 'rhetorical',
  },
  {
    name: 'Anaphora',
    definition:
      'Repetition of a word or phrase at the BEGINNING of successive sentences or clauses.',
    example: '"Every day, she waited. Every day, she hoped. Every day, she was disappointed."',
    effect:
      'Creates a building, cumulative effect. Each repetition adds weight to the emotion or argument, creating momentum and emphasis.',
    category: 'rhetorical',
  },
  {
    name: 'Direct Address',
    definition: 'Speaking directly to the reader or audience using "you" or "we".',
    example: '"You might think this doesn\'t affect you. Think again."',
    effect:
      'Creates a personal connection between writer and reader. Makes the content feel immediately relevant and can be confrontational or inclusive.',
    category: 'rhetorical',
  },
  {
    name: 'Imperative',
    definition: 'A command or instruction, using a verb in its base form.',
    example: '"Consider this. Stop and think. Act now."',
    effect:
      'Creates urgency and authority. Tells the reader what to do, making the writing feel direct, powerful, and action-oriented.',
    category: 'rhetorical',
  },
  {
    name: 'Emotive Language',
    definition:
      'Words and phrases deliberately chosen to evoke an emotional response from the reader.',
    example: '"Innocent children are suffering" rather than "some children are affected".',
    effect:
      "Manipulates the reader's emotions to generate sympathy, anger, fear, or compassion. Very common in persuasive writing and speeches.",
    category: 'rhetorical',
  },

  /* ── Word-level devices ──────────────────────────── */
  {
    name: 'Connotation',
    definition:
      'The associations or feelings that a word carries beyond its literal (denotative) meaning.',
    example: '"Home" connotes warmth, safety, and belonging; "house" is neutral.',
    effect:
      'Allows writers to suggest additional meanings without stating them directly. A careful choice of words can subtly influence how the reader feels.',
    category: 'word-level',
  },
  {
    name: 'Semantic Field',
    definition:
      'A group of words that are related in meaning, all belonging to the same topic area.',
    example:
      'Words like "battle", "wound", "surrender", "victory" all belong to the semantic field of war.',
    effect:
      'Creates a sustained atmosphere or reinforces a theme throughout the passage. Helps build a consistent mood or metaphorical framework.',
    category: 'word-level',
  },
  {
    name: 'Euphemism',
    definition:
      'A mild or indirect word or phrase used in place of something harsh, unpleasant, or taboo.',
    example: '"Passed away" instead of "died"; "let go" instead of "fired".',
    effect:
      'Softens the impact of unpleasant realities. Can show sensitivity, politeness, or (sometimes) dishonesty by obscuring the truth.',
    category: 'word-level',
  },
  {
    name: 'Colloquial Language',
    definition:
      'Informal, everyday language, including slang, dialect, and conversational expressions.',
    example: '"That was proper dodgy" instead of "that was suspicious".',
    effect:
      'Creates a sense of authenticity and relatability. Establishes character voice and can make writing feel more immediate and accessible.',
    category: 'word-level',
  },
  {
    name: 'Irony / Sarcasm',
    definition:
      'Saying the opposite of what is meant, or a situation where the outcome is the opposite of what was expected.',
    example: '"What a beautiful day," she muttered, staring at the torrential rain.',
    effect:
      "Creates humour, bitterness, or dramatic tension. Forces the reader to look beyond the surface meaning and consider the writer's true intention.",
    category: 'word-level',
  },
  {
    name: 'Tone',
    definition:
      "The overall attitude or feeling conveyed by the writer's choice of words and style. Not a technique itself, but the result of multiple techniques working together.",
    example: 'A passage might have an anxious, nostalgic, celebratory, or menacing tone.',
    effect:
      "Sets the emotional atmosphere of the piece. Identifying tone is essential for understanding the writer's purpose and the intended impact on the reader.",
    category: 'word-level',
  },
]

const CATEGORY_ORDER: Technique['category'][] = [
  'imagery',
  'sound',
  'structure',
  'rhetorical',
  'word-level',
]

const CATEGORY_DISPLAY: Record<Technique['category'], string> = {
  imagery: 'Imagery & Figurative Language',
  sound: 'Sound Devices',
  structure: 'Structural Devices',
  rhetorical: 'Rhetorical Devices',
  'word-level': 'Word-Level Devices',
}

/* ─── Page component ─────────────────────────────────────────── */

export default function TechniquesPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/resources/english-language/caie"
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to CAIE English Language
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Language Techniques
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {TECHNIQUES.length} Techniques with Definitions, Examples &amp; Effects
          </p>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A comprehensive reference guide to the language and literary techniques you need to
            identify and analyse in your Cambridge IGCSE English Language examination.
          </p>
        </div>
      </section>

      {/* ── Quick nav ───────────────────────────────────────────── */}
      <nav className="border-b border-border bg-card px-4 py-3 sticky top-0 z-10">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-2">
          {CATEGORY_ORDER.map((cat) => (
            <a
              key={cat}
              href={`#${cat}`}
              className="rounded-full border border-primary/20 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-foreground"
            >
              {CATEGORY_DISPLAY[cat]}
            </a>
          ))}
        </div>
      </nav>

      {/* ── How to analyse ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <section aria-labelledby="how-to-heading">
          <h2 id="how-to-heading" className="text-2xl font-bold text-foreground">
            How to Analyse a Technique
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Identifying a technique is only the first step. To score highly, you must explain{' '}
            <strong>why</strong> the writer used it and
            <strong> what effect</strong> it has on the reader. Follow this three-step approach:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <p className="text-2xl font-bold text-primary">1</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Identify</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Quote the word/phrase and name the technique used.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <p className="text-2xl font-bold text-primary">2</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Explain</p>
              <p className="mt-1 text-xs text-muted-foreground">
                What does it mean? What does it suggest, imply, or connote?
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <p className="text-2xl font-bold text-primary">3</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Effect</p>
              <p className="mt-1 text-xs text-muted-foreground">
                How does it make the reader feel? Why is it effective?
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Example:</strong> The writer uses the <em>simile</em> &ldquo;her eyes were{' '}
              <strong>like two dark pools</strong>&rdquo;, comparing the character&rsquo;s eyes to
              pools of water. The word &ldquo;dark&rdquo; has connotations of mystery and depth,
              suggesting the character has hidden emotions. This creates a sense of intrigue for the
              reader, making them want to learn more about the character.
            </p>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Techniques by category ────────────────────────────── */}
        {CATEGORY_ORDER.map((cat) => {
          const items = TECHNIQUES.filter((t) => t.category === cat)
          return (
            <section
              key={cat}
              id={cat}
              className="mb-12 scroll-mt-16"
              aria-labelledby={`${cat}-heading`}
            >
              <h2 id={`${cat}-heading`} className="text-2xl font-bold text-foreground">
                {CATEGORY_DISPLAY[cat]}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {items.length} technique{items.length !== 1 ? 's' : ''}
              </p>

              <div className="mt-6 space-y-5">
                {items.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-primary">{t.name}</h3>

                    <div className="mt-3 space-y-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Definition
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {t.definition}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Example
                        </p>
                        <p className="mt-1 text-sm italic text-muted-foreground">{t.example}</p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Effect on the Reader
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {t.effect}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}

        {/* Continue studying */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">Continue studying</h2>
          <p className="mt-2 text-muted-foreground">
            Put these techniques into practice with reading analysis and writing exercises.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/resources/english-language/caie/paper-1"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Paper 1: Reading Passages
            </Link>
            <Link
              href="/resources/english-language/caie/paper-2"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Paper 2: Directed Writing
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

        {/* ── Disclaimer ────────────────────────────────────────── */}
        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>
    </>
  )
}
