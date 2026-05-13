'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
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

export default function WritingSkillsPage() {
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
            AQA GCSE English Language
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Writing Skills Masterclass
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to craft high-quality writing in both Paper 1 and Paper 2. Sentence
            structures, paragraph techniques, vocabulary, punctuation, and complete checklists.
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
              href="/resources/english-language/aqa"
              className="hover:text-primary transition-colors"
            >
              AQA English Language
            </Link>
          </li>
          <li>/</li>
          <li className="text-primary font-medium">{tr(`Writing Skills`)}</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">
        {/* ── Sentence structures ────────────────────────────────── */}
        <Section title={tr(`Sentence structures`)} defaultOpen>
          <p>
            Varying your sentence structures is one of the fastest ways to improve your writing
            grade. The Technical accuracy (AO6) marking guide explicitly rewards students who use
            &ldquo;a full range of appropriate sentence forms for effect.&rdquo; Here are the four
            main types:
          </p>

          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`Simple sentence`)}</h4>
              <p className="mt-1 text-sm">
                Contains one main clause (one subject + one verb). It expresses a complete thought.
              </p>
              <p className="mt-2 text-sm italic text-muted-foreground">
                &ldquo;The door slammed.&rdquo;
              </p>
              <p className="mt-2 text-sm">
                <strong>{tr(`When to use:`)}</strong> For impact, emphasis, or dramatic effect. A
                short simple sentence after several long ones creates a sudden pause. Particularly
                effective for moments of tension, revelation, or finality.
              </p>
            </div>

            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`Compound sentence`)}</h4>
              <p className="mt-1 text-sm">
                Two or more main clauses joined by a coordinating conjunction (FANBOYS: for, and,
                nor, but, or, yet, so).
              </p>
              <p className="mt-2 text-sm italic text-muted-foreground">
                &ldquo;The sky darkened, and a cold wind began to blow.&rdquo;
              </p>
              <p className="mt-2 text-sm">
                <strong>{tr(`When to use:`)}</strong> To connect two equally important ideas. Useful
                for building a scene or showing cause and effect. Be careful not to over-rely on
                &ldquo;and&rdquo; &mdash; vary your conjunctions.
              </p>
            </div>

            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`Complex sentence`)}</h4>
              <p className="mt-1 text-sm">
                Contains a main clause and one or more subordinate clauses (which cannot stand alone
                as a sentence). Subordinate clauses often begin with: although, because, when, if,
                while, as, despite, whereas, until, after.
              </p>
              <p className="mt-2 text-sm italic text-muted-foreground">
                &ldquo;Although the sun was shining, she felt a chill creep through her
                bones.&rdquo;
              </p>
              <p className="mt-2 text-sm">
                <strong>{tr(`When to use:`)}</strong> To show the relationship between ideas (cause,
                contrast, time, condition). Placing the subordinate clause first creates a sense of
                anticipation. Complex sentences demonstrate sophistication and control.
              </p>
            </div>

            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`Minor sentence / fragment`)}</h4>
              <p className="mt-1 text-sm">
                A grammatically incomplete sentence, often lacking a main verb. Used deliberately
                for effect (not by accident).
              </p>
              <p className="mt-2 text-sm italic text-muted-foreground">
                &ldquo;Silence. Total, suffocating silence.&rdquo;
              </p>
              <p className="mt-2 text-sm">
                <strong>{tr(`When to use:`)}</strong> For dramatic impact, to slow the pace, or to
                create emphasis. One-word sentences (&ldquo;Gone.&rdquo; &ldquo;Nothing.&rdquo;
                &ldquo;Darkness.&rdquo;) are particularly powerful at turning points in a narrative
                or description. Use sparingly &mdash; if every other sentence is a fragment, the
                effect is lost.
              </p>
            </div>
          </div>

          <h3 className="mt-6 font-bold text-primary">Sentence openers to vary your writing</h3>
          <p className="mt-2">
            Starting every sentence with &ldquo;The&rdquo; or &ldquo;I&rdquo; makes writing feel
            monotonous. Here are different ways to open a sentence:
          </p>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">{tr(`Opener type`)}</th>
                  <th className="py-2 pr-4">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Adverb</td>
                  <td className="py-2 pr-4 italic">
                    &ldquo;Cautiously, she pushed open the door.&rdquo;
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">-ing verb (present participle)</td>
                  <td className="py-2 pr-4 italic">
                    &ldquo;Trembling, he reached for the handle.&rdquo;
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">-ed verb (past participle)</td>
                  <td className="py-2 pr-4 italic">
                    &ldquo;Abandoned by her friends, she walked home alone.&rdquo;
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">{tr(`Prepositional phrase`)}</td>
                  <td className="py-2 pr-4 italic">
                    &ldquo;Beyond the rusted gate, the garden lay in ruins.&rdquo;
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">{tr(`Subordinate clause`)}</td>
                  <td className="py-2 pr-4 italic">
                    &ldquo;Although he smiled, his eyes betrayed nothing.&rdquo;
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">{tr(`Simile / comparison`)}</td>
                  <td className="py-2 pr-4 italic">
                    &ldquo;Like a caged animal, she paced the room.&rdquo;
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">{tr(`Time connective`)}</td>
                  <td className="py-2 pr-4 italic">
                    &ldquo;Moments later, the sky erupted with colour.&rdquo;
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Pronoun</td>
                  <td className="py-2 pr-4 italic">
                    &ldquo;It was the kind of silence that pressed against your skin.&rdquo;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── Paragraph structures ───────────────────────────────── */}
        <Section title={tr(`Paragraph structures`)}>
          <h3 className="font-bold text-primary">
            {tr(`PEEL paragraphs (for analytical writing)`)}
          </h3>
          <p className="mt-2">
            When writing about texts in the reading section, PEEL is a useful framework:
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-2">
            <li>
              <strong>P &mdash; Point:</strong> Make a clear point that answers the question.
            </li>
            <li>
              <strong>E &mdash; Evidence:</strong> Provide a quotation or reference from the text.
            </li>
            <li>
              <strong>E &mdash; Explain:</strong> Analyse the evidence. What technique is used? What
              are the connotations? What effect does it create?
            </li>
            <li>
              <strong>L &mdash; Link:</strong> Link back to the question or to a wider theme.
            </li>
          </ul>

          <h3 className="mt-6 font-bold text-primary">{tr(`Topic sentences`)}</h3>
          <p className="mt-2">
            Every paragraph should open with a <strong>topic sentence</strong> that tells the reader
            what the paragraph is about. In creative writing, this can be more subtle (e.g.,
            signalling a shift in time, mood, or focus), but in analytical writing, it should
            directly address the question.
          </p>
          <div className="mt-3 rounded-lg bg-muted p-4 text-sm">
            <p className="font-semibold text-muted-foreground">{tr(`Weak topic sentence:`)}</p>
            <p className="italic">&ldquo;The writer also uses language.&rdquo;</p>
            <p className="mt-2 font-semibold text-muted-foreground">
              {tr(`Strong topic sentence:`)}
            </p>
            <p className="italic">
              &ldquo;The writer creates a growing sense of unease through a sustained semantic field
              of entrapment.&rdquo;
            </p>
          </div>

          <h3 className="mt-6 font-bold text-primary">
            {tr(`Paragraph techniques for creative writing`)}
          </h3>
          <ul className="mt-2 ml-5 list-disc space-y-2">
            <li>
              <strong>{tr(`Shift paragraphs:`)}</strong> Use a new paragraph to signal a change in
              time (&ldquo;Three hours later&hellip;&rdquo;), location
              (&ldquo;Downstairs,&hellip;&rdquo;), focus (from external description to internal
              thought), or mood.
            </li>
            <li>
              <strong>{tr(`Single-sentence paragraphs:`)}</strong> A paragraph containing just one
              sentence creates enormous emphasis. Use it for a moment of revelation, shock, or
              emotional weight.
            </li>
            <li>
              <strong>{tr(`Discourse markers:`)}</strong> Words and phrases that guide the reader
              through your writing: &ldquo;Meanwhile,&rdquo; &ldquo;In contrast,&rdquo;
              &ldquo;Despite this,&rdquo; &ldquo;As if in response,&rdquo; &ldquo;What followed was
              unexpected.&rdquo;
            </li>
            <li>
              <strong>{tr(`Cyclical / circular structure:`)}</strong> End your piece with an echo of
              the opening &mdash; the same image, phrase, or setting, but with a shift in meaning.
              This creates a satisfying sense of closure and structural sophistication.
            </li>
          </ul>
        </Section>

        {/* ── Vocabulary tiers ───────────────────────────────────── */}
        <Section title={tr(`Vocabulary tiers`)}>
          <p>
            The marking guide rewards &ldquo;extensive, ambitious vocabulary.&rdquo; This does not
            mean using the longest word you can think of. It means choosing{' '}
            <strong>precise, evocative words</strong> that create a specific effect. Think of
            vocabulary in three tiers:
          </p>

          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-muted-foreground">{tr(`Tier 1: Basic / everyday`)}</h4>
              <p className="mt-1 text-sm">
                Words everyone knows: big, small, nice, good, bad, said, walked, happy, sad. These
                are not wrong, but they lack precision and do not impress markers.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-yellow-600">
                {tr(`Tier 2: Academic / cross-curricular`)}
              </h4>
              <p className="mt-1 text-sm">
                Words used across subjects and in formal writing: significant, compelled, reluctant,
                inevitable, conveyed, juxtaposed, acknowledged, undermined. These show competence
                and control.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-success-600">
                {tr(`Tier 3: Subject-specific / ambitious`)}
              </h4>
              <p className="mt-1 text-sm">
                Precise, evocative words chosen for a specific effect: dilapidated (not
                &ldquo;old&rdquo;), cacophony (not &ldquo;noise&rdquo;), languid (not
                &ldquo;slow&rdquo;), visceral (not &ldquo;strong&rdquo;), ephemeral (not
                &ldquo;short-lived&rdquo;). These demonstrate a sophisticated vocabulary but should
                be used naturally, not forced.
              </p>
            </div>
          </div>

          <h3 className="mt-6 font-bold text-primary">{tr(`Vocabulary upgrade examples`)}</h3>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-2 pr-4">{tr(`Instead of...`)}</th>
                  <th className="py-2 pr-4">Try...</th>
                  <th className="py-2 pr-4">{tr(`Why it works`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4">walked</td>
                  <td className="py-2 pr-4">trudged, ambled, staggered, strode</td>
                  <td className="py-2 pr-4">Each verb tells the reader HOW the person walked</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">said</td>
                  <td className="py-2 pr-4">murmured, snapped, pleaded, declared</td>
                  <td className="py-2 pr-4">
                    {tr(`Reveals emotion and tone without needing adverbs`)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">looked at</td>
                  <td className="py-2 pr-4">scrutinised, surveyed, glanced at, fixated on</td>
                  <td className="py-2 pr-4">
                    {tr(`Conveys the intensity and purpose of the gaze`)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">big</td>
                  <td className="py-2 pr-4">vast, imposing, sprawling, cavernous</td>
                  <td className="py-2 pr-4">{tr(`Creates a more specific visual impression`)}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">small</td>
                  <td className="py-2 pr-4">cramped, diminutive, narrow, confined</td>
                  <td className="py-2 pr-4">
                    {tr(`Suggests not just size but feeling and atmosphere`)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">scary</td>
                  <td className="py-2 pr-4">unnerving, sinister, foreboding, menacing</td>
                  <td className="py-2 pr-4">{tr(`More specific shade of fear`)}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">nice</td>
                  <td className="py-2 pr-4">pleasant, charming, idyllic, serene</td>
                  <td className="py-2 pr-4">{tr(`Much more descriptive and precise`)}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">old</td>
                  <td className="py-2 pr-4">weathered, ancient, dilapidated, decrepit</td>
                  <td className="py-2 pr-4">{tr(`Implies condition, not just age`)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-lg border-l-4 border-warn-400 bg-warn-50 p-4 text-sm">
            <p className="font-bold text-warn-700">{tr(`Warning: do not overdo it`)}</p>
            <p className="mt-1 text-warn-700">
              Using complex vocabulary incorrectly is worse than using simple vocabulary correctly.
              Only use a word if you are confident of its meaning. Markers can tell when students
              are forcing in words they do not fully understand. A well-placed &ldquo;trudged&rdquo;
              is worth more than a misused &ldquo;perambulated.&rdquo;
            </p>
          </div>
        </Section>

        {/* ── Punctuation for effect ─────────────────────────────── */}
        <Section title={tr(`Punctuation for effect`)}>
          <p>
            Punctuation is not just about accuracy &mdash; it is a tool for creating effects. The
            marking guide rewards a &ldquo;wide range of punctuation used with a high level of
            accuracy.&rdquo; Here is how to use each type purposefully:
          </p>

          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`Full stop (.)`)}</h4>
              <p className="mt-1 text-sm">
                {tr(
                  `Creates finality. Short sentences ending with full stops create a staccato rhythm: &ldquo;He stopped. Listened. Nothing.&rdquo;`,
                )}
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">Comma (,)</h4>
              <p className="mt-1 text-sm">
                Creates pauses, separates items in a list, sets off subordinate clauses. Avoid comma
                splicing (using a comma to join two main clauses without a conjunction &mdash; this
                is a common error).
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`Semicolon (;)`)}</h4>
              <p className="mt-1 text-sm">
                Joins two closely related main clauses: &ldquo;The house was silent; not a single
                light burned in its windows.&rdquo; Shows a connection between ideas without the
                finality of a full stop. Using semicolons correctly demonstrates grammatical
                sophistication.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">Colon (:)</h4>
              <p className="mt-1 text-sm">
                Introduces an explanation, a list, or a dramatic reveal: &ldquo;There was only one
                option left: run.&rdquo; The colon creates anticipation &mdash; the reader pauses
                before the revelation.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">Dash (&mdash;)</h4>
              <p className="mt-1 text-sm">
                Creates a pause for emphasis, adds a parenthetical aside, or signals an
                interruption: &ldquo;She opened the door &mdash; and screamed.&rdquo; Dashes feel
                more informal and dramatic than commas or semicolons. A pair of dashes can enclose a
                parenthetical: &ldquo;The man &mdash; if you could call him that &mdash; loomed in
                the doorway.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`Ellipsis (...)`)}</h4>
              <p className="mt-1 text-sm">
                Suggests trailing off, uncertainty, the passage of time, or something left unsaid:
                &ldquo;She wanted to tell him, but...&rdquo; Creates suspense and implies what the
                reader can imagine for themselves. Do not overuse.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`Exclamation mark (!)`)}</h4>
              <p className="mt-1 text-sm">
                Shows shock, anger, urgency, or excitement. Use very sparingly in creative writing
                (once or twice maximum). More common in persuasive writing or dialogue. Multiple
                exclamation marks (!!!) should never be used in exam writing.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`Question mark (?)`)}</h4>
              <p className="mt-1 text-sm">
                In creative writing, internal questions show character thought: &ldquo;Where had
                everyone gone? Why was the house so quiet?&rdquo; In persuasive writing, rhetorical
                questions engage the reader: &ldquo;How can we stand by and do nothing?&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">{tr(`Brackets / parentheses (())`)}</h4>
              <p className="mt-1 text-sm">
                Add extra information or an aside without interrupting the main sentence. Can create
                an intimate, conversational tone: &ldquo;The village (if three houses and a post box
                constitute a village) sat at the bottom of the valley.&rdquo;
              </p>
            </div>
          </div>
        </Section>

        {/* ── Opening techniques ─────────────────────────────────── */}
        <Section title={tr(`Opening techniques`)}>
          <p>
            Your opening is the first thing the marker reads. A strong opening signals ambition,
            control, and creativity. Here are proven techniques:
          </p>

          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">1. In medias res (start in the middle)</h4>
              <p className="mt-1 text-sm italic text-muted-foreground">
                &ldquo;The glass shattered before she even heard the sound.&rdquo;
              </p>
              <p className="mt-2 text-sm">
                Drop the reader into the middle of the action. Creates immediate tension and
                curiosity. The reader wants to know what happened before and what happens next.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">
                2. Setting the scene (atmospheric description)
              </h4>
              <p className="mt-1 text-sm italic text-muted-foreground">
                &ldquo;Dawn had not yet broken, but the market was already alive &mdash; a symphony
                of clattering stalls, shouted prices, and the rich, warm aroma of bread pulled fresh
                from the oven.&rdquo;
              </p>
              <p className="mt-2 text-sm">
                Immerses the reader in the world before introducing character or plot. Best for
                descriptive writing. Use multiple senses.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">3. Dialogue</h4>
              <p className="mt-1 text-sm italic text-muted-foreground">
                &ldquo;&lsquo;Don&rsquo;t look back,&rsquo; she whispered. &lsquo;Whatever you do,
                don&rsquo;t look back.&rsquo;&rdquo;
              </p>
              <p className="mt-2 text-sm">
                Creates immediate intrigue. The reader is thrown into a conversation without
                context, generating questions that propel them forward.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">4. A single-word or minor-sentence opening</h4>
              <p className="mt-1 text-sm italic text-muted-foreground">&ldquo;Silence.&rdquo;</p>
              <p className="mt-2 text-sm">
                Bold and dramatic. The isolation of a single word gives it enormous weight. Follow
                it with a longer sentence that expands on the idea.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">5. A question (narrative or rhetorical)</h4>
              <p className="mt-1 text-sm italic text-muted-foreground">
                &ldquo;Have you ever stood at the edge of something and known &mdash; absolutely
                known &mdash; that stepping forward would change everything?&rdquo;
              </p>
              <p className="mt-2 text-sm">
                Engages the reader directly. The second person (&ldquo;you&rdquo;) creates intimacy.
                Works well for both creative and persuasive writing.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">6. A bold or provocative statement</h4>
              <p className="mt-1 text-sm italic text-muted-foreground">
                &ldquo;Nobody tells you that grief smells like lavender and antiseptic.&rdquo;
              </p>
              <p className="mt-2 text-sm">
                Surprises the reader and subverts expectations. The unexpected combination of ideas
                creates intrigue and signals a unique, personal voice.
              </p>
            </div>
          </div>
        </Section>

        {/* ── Ending techniques ──────────────────────────────────── */}
        <Section title={tr(`Ending techniques`)}>
          <p>
            A strong ending leaves a lasting impression. The final lines are what the marker
            remembers when deciding your mark. Here are effective ways to close your writing:
          </p>

          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">1. Circular structure</h4>
              <p className="mt-1 text-sm">
                Return to an image, phrase, or idea from the opening, but with a shift in meaning or
                perspective. This creates a satisfying sense of completeness and shows structural
                sophistication.
              </p>
              <p className="mt-2 text-sm italic text-muted-foreground">
                Opening: &ldquo;The clock on the mantelpiece ticked steadily, marking time that
                seemed to stretch forever.&rdquo;
                <br />
                Ending: &ldquo;The clock on the mantelpiece ticked on, but the silence it measured
                now felt entirely different.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">2. Ambiguous / open ending</h4>
              <p className="mt-1 text-sm">
                Leave the reader with a question or an unresolved image. This invites interpretation
                and lingers in the mind.
              </p>
              <p className="mt-2 text-sm italic text-muted-foreground">
                &ldquo;She turned the corner, and for a moment &mdash; just a moment &mdash; she
                thought she saw a light in the window.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">3. Emotional reflection</h4>
              <p className="mt-1 text-sm">
                End with the character&rsquo;s internal thoughts or feelings, reflecting on what has
                happened.
              </p>
              <p className="mt-2 text-sm italic text-muted-foreground">
                &ldquo;And standing there, in the quiet aftermath, she understood something she had
                never been able to articulate before: that home was not a place at all.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">4. A striking image</h4>
              <p className="mt-1 text-sm">
                Close with a vivid, symbolic image that encapsulates the theme or mood.
              </p>
              <p className="mt-2 text-sm italic text-muted-foreground">
                &ldquo;The last petal fell from the rose on the windowsill, and nobody
                noticed.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-bold text-accent">5. Short, final sentence</h4>
              <p className="mt-1 text-sm">
                End with a short, punchy sentence that lands like a closing note. The brevity
                creates impact.
              </p>
              <p className="mt-2 text-sm italic text-muted-foreground">
                &ldquo;She did not look back.&rdquo;
              </p>
            </div>
          </div>
        </Section>

        {/* ── Descriptive writing checklist ───────────────────────── */}
        <Section title={tr(`Descriptive writing checklist (Paper 1 Q5)`)}>
          <p>
            Use this checklist before and after writing your descriptive piece to make sure you have
            covered all the bases:
          </p>

          <div className="mt-4 space-y-3">
            <h3 className="font-bold text-primary">{tr(`Content and organisation`)}</h3>
            <ul className="ml-5 space-y-2">
              {[
                'I have focused on DESCRIBING, not telling a story. The piece is driven by imagery and atmosphere, not plot.',
                'I have used at least three of the five senses (sight, sound, smell, touch, taste).',
                'I have zoomed in on specific, precise details rather than giving a general overview.',
                'I have created a clear mood or atmosphere that is sustained throughout.',
                'I have used a variety of literary techniques (metaphor, simile, personification, sensory imagery) that feel natural, not forced.',
                'I have structured my piece with a clear journey (e.g., wide to narrow, outside to inside, calm to unsettling).',
                'I have used paragraph breaks to signal shifts in focus, time, or mood.',
                'I have a strong, engaging opening and a satisfying, memorable ending.',
                'I have considered using a circular structure.',
                "I have avoided cliches ('it was a dark and stormy night', 'blood-red sky').",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border text-xs text-muted-foreground">
                    {i + 1}
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-bold text-primary">{tr(`Technical accuracy`)}</h3>
            <ul className="ml-5 space-y-2">
              {[
                'I have varied my sentence structures (simple, compound, complex, minor).',
                'I have varied my sentence openers (adverb, -ing, -ed, prepositional phrase, subordinate clause).',
                'I have used ambitious vocabulary that I am confident using correctly.',
                'I have used a range of punctuation: full stops, commas, semicolons, colons, dashes, ellipses.',
                'I have checked for comma splicing (two sentences joined only by a comma).',
                "I have checked my spelling, especially of commonly confused words (their/there/they're, its/it's, your/you're).",
                'I have maintained a consistent tense throughout (past or present).',
                'I have proofread my work for any errors.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border text-xs text-muted-foreground">
                    {i + 1}
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* ── Narrative writing checklist ─────────────────────────── */}
        <Section title={tr(`Narrative writing checklist (Paper 1 Q5)`)}>
          <p>If you choose the narrative option, use this checklist:</p>

          <div className="mt-4 space-y-3">
            <h3 className="font-bold text-primary">{tr(`Content and organisation`)}</h3>
            <ul className="ml-5 space-y-2">
              {[
                "My plot is simple and focused. One main event, one setting, 1-2 characters. I have NOT tried to fit in a whole novel's worth of plot.",
                'I have a clear narrative arc: situation → complication → climax → resolution (or deliberate lack of resolution).',
                'I have a strong opening that hooks the reader (in medias res, dialogue, a question, atmospheric description).',
                'I have included moments of DESCRIPTIVE DETAIL. The best narratives slow down for imagery — they do not just race through events.',
                'I have varied the pace: fast-paced action balanced with slower, reflective moments.',
                'I have developed my character(s) through actions, dialogue, and internal thought — not just physical description.',
                'My dialogue (if used) sounds natural and reveals character. I have punctuated it correctly.',
                'I have a satisfying ending (circular structure, ambiguous, reflective, or a striking final image).',
                'I have used literary techniques deliberately and for effect.',
                'I have maintained a consistent narrative perspective (first or third person) and have not accidentally switched.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border text-xs text-muted-foreground">
                    {i + 1}
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-bold text-primary">{tr(`Technical accuracy`)}</h3>
            <p className="text-sm text-muted-foreground">
              (Same as the descriptive writing checklist above &mdash; sentence variety, punctuation
              range, ambitious vocabulary, consistent tense, proofreading.)
            </p>
          </div>
        </Section>

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
