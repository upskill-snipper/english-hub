import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/edexcel/techniques' },
  title: "Language & Structural Techniques Guide",
  description:
    "Over 30 language and structural techniques for Edexcel English Language GCSE. Definitions, literary examples, and analysis of effects on the reader.",
};

/* ─── Technique data ─────────────────────────────────────────── */

interface Technique {
  name: string;
  type: "Language" | "Structure" | "Both";
  definition: string;
  example: string;
  source: string;
  effect: string;
}

const techniques: Technique[] = [
  {
    name: "Metaphor",
    type: "Language",
    definition: "A direct comparison stating one thing IS another, without using 'like' or 'as'.",
    example: "\"The sun was a golden coin pressed into the sky.\"",
    source: "Common in descriptive prose",
    effect: "Creates a vivid image by transferring qualities of one thing to another, encouraging the reader to see a subject in a new light and engage their imagination.",
  },
  {
    name: "Simile",
    type: "Language",
    definition: "A comparison using 'like' or 'as' to draw a parallel between two things.",
    example: "\"Her eyes glistened like pools of dark water.\"",
    source: "Bront\u00eb, Jane Eyre",
    effect: "Helps the reader visualise something unfamiliar by comparing it to something concrete, creating a sensory connection.",
  },
  {
    name: "Personification",
    type: "Language",
    definition: "Giving human qualities, actions, or emotions to non-human things.",
    example: "\"The wind howled through the empty streets, clawing at the shutters.\"",
    source: "Gothic fiction convention",
    effect: "Makes the inanimate feel alive and threatening (or comforting), creating atmosphere and often making the setting feel like a character itself.",
  },
  {
    name: "Pathetic Fallacy",
    type: "Language",
    definition: "Attributing human emotions to weather or nature to mirror the mood of a scene or character.",
    example: "\"The sky wept as she walked away from the house for the last time.\"",
    source: "Common in 19th-century fiction",
    effect: "Reinforces emotional tone by aligning the natural world with human feeling, making the atmosphere feel inescapable and all-encompassing.",
  },
  {
    name: "Alliteration",
    type: "Language",
    definition: "The repetition of the same consonant sound at the beginning of nearby words.",
    example: "\"The cold, cruel current carried him further from the shore.\"",
    source: "Common across all text types",
    effect: "Creates rhythm and emphasis. Harsh consonants (c, k, t) can suggest aggression or danger; softer sounds (s, l, m) can suggest calm or fluidity.",
  },
  {
    name: "Sibilance",
    type: "Language",
    definition: "Repetition of 's' and 'sh' sounds, a specific form of alliteration.",
    example: "\"She slipped silently through the shadows, shoes whispering on the stone.\"",
    source: "Common in poetry and prose",
    effect: "Creates a soft, sinister, or secretive atmosphere. Often associated with danger (like a snake's hiss) or stealth and mystery.",
  },
  {
    name: "Onomatopoeia",
    type: "Language",
    definition: "Words that imitate the sound they describe.",
    example: "\"The fire crackled and hissed, spitting embers into the darkness.\"",
    source: "Dickens, various",
    effect: "Engages the reader's auditory senses, making the scene feel immediate and tangible. Creates a sense of being present in the moment.",
  },
  {
    name: "Hyperbole",
    type: "Language",
    definition: "Deliberate exaggeration for emphasis or dramatic effect.",
    example: "\"I have told you a million times not to exaggerate!\"",
    source: "Common in speech and persuasive writing",
    effect: "Emphasises the intensity of a feeling or situation. Can create humour, convey frustration, or make an argument seem more urgent.",
  },
  {
    name: "Emotive Language",
    type: "Language",
    definition: "Word choices deliberately selected to provoke an emotional response from the reader.",
    example: "\"Innocent children are suffering while we sit in comfortable silence.\"",
    source: "Common in non-fiction and persuasive texts",
    effect: "Manipulates the reader's feelings to align with the writer's viewpoint. Creates sympathy, anger, guilt, or outrage.",
  },
  {
    name: "Juxtaposition",
    type: "Both",
    definition: "Placing two contrasting ideas, images, or concepts side by side for comparison.",
    example: "\"Outside, the world celebrated; inside, she had never felt more alone.\"",
    source: "Dickens, A Tale of Two Cities",
    effect: "Highlights differences and creates tension. Forces the reader to consider the contrast, often revealing inequality, irony, or internal conflict.",
  },
  {
    name: "Oxymoron",
    type: "Language",
    definition: "A figure of speech combining two contradictory terms.",
    example: "\"A deafening silence filled the courtroom.\"",
    source: "Common in literary texts",
    effect: "Creates a sense of paradox and complexity. Suggests that reality is more nuanced than simple categories allow.",
  },
  {
    name: "Irony",
    type: "Language",
    definition: "Saying the opposite of what is meant, or a situation where the outcome contradicts expectations.",
    example: "\"What lovely weather,\" she muttered, as rain streamed down her face.",
    source: "Austen, Pride and Prejudice (and throughout)",
    effect: "Creates humour, bitterness, or dramatic tension. Verbal irony reveals character attitude; situational irony surprises the reader and provokes thought.",
  },
  {
    name: "Symbolism",
    type: "Language",
    definition: "Using an object, colour, or image to represent a deeper meaning or abstract idea.",
    example: "The locked door in the corridor symbolises the secrets the family refuse to confront.",
    source: "Bront\u00eb, Jane Eyre; Shelley, Frankenstein",
    effect: "Adds layers of meaning. Encourages the reader to look beyond the literal surface and engage with thematic ideas.",
  },
  {
    name: "Semantic Field",
    type: "Language",
    definition: "A group of words within a text that relate to the same topic or theme.",
    example: "\"Trapped, caged, imprisoned, shackled\" \u2014 a semantic field of captivity.",
    source: "Common across all text types",
    effect: "Reinforces a theme or mood by creating a pattern of related associations. The cumulative effect builds a dominant impression in the reader's mind.",
  },
  {
    name: "Tricolon (Rule of Three)",
    type: "Language",
    definition: "A list of three words, phrases, or clauses for rhetorical effect.",
    example: "\"Government of the people, by the people, for the people.\"",
    source: "Lincoln, Gettysburg Address",
    effect: "Creates rhythm, emphasis, and a sense of completeness. In persuasive writing, it makes an argument feel balanced and memorable.",
  },
  {
    name: "Rhetorical Question",
    type: "Language",
    definition: "A question asked for effect, not requiring an answer, designed to make the audience think.",
    example: "\"How can we call ourselves civilised when children go hungry in our streets?\"",
    source: "Common in speeches and articles",
    effect: "Engages the reader/listener directly, encouraging them to reflect and agree with the implied answer. Creates a sense of shared values.",
  },
  {
    name: "Anaphora",
    type: "Language",
    definition: "The deliberate repetition of a word or phrase at the beginning of successive sentences or clauses.",
    example: "\"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.\"",
    source: "Churchill, 1940 speech",
    effect: "Builds momentum, rhythm, and emphasis. Creates a powerful, memorable cadence that reinforces the central message.",
  },
  {
    name: "Repetition",
    type: "Language",
    definition: "Deliberately repeating words or phrases for emphasis.",
    example: "\"Never, never, never give up.\"",
    source: "Churchill",
    effect: "Reinforces a key idea, creates emphasis, and can build emotional intensity. In persuasive texts, it hammers a point home.",
  },
  {
    name: "Direct Address",
    type: "Language",
    definition: "Speaking directly to the reader or audience using 'you' or 'we'.",
    example: "\"You know this is wrong. We all know this is wrong.\"",
    source: "Common in speeches and articles",
    effect: "Creates a personal connection with the audience, making them feel involved and responsible. Inclusive pronouns ('we') build solidarity.",
  },
  {
    name: "Imperatives",
    type: "Language",
    definition: "Commands or instructions that tell the reader/listener to do something.",
    example: "\"Stand up. Speak out. Make your voice heard.\"",
    source: "Common in persuasive texts",
    effect: "Creates urgency and a sense of authority. Empowers the audience to take action and positions the writer/speaker as a leader.",
  },
  {
    name: "Short Sentences",
    type: "Both",
    definition: "Brief, punchy sentences used for dramatic effect or emphasis.",
    example: "\"He ran. The door slammed. Silence.\"",
    source: "Common in fiction and non-fiction",
    effect: "Creates tension, pace, and impact. Slows the reader down, forcing them to focus on each statement. Particularly effective after longer sentences.",
  },
  {
    name: "Complex Sentences",
    type: "Both",
    definition: "Sentences with a main clause and one or more subordinate clauses, allowing for detail and nuance.",
    example: "\"Although the streets were deserted, she felt as though a thousand eyes watched her from behind the darkened windows.\"",
    source: "19th-century prose style",
    effect: "Provides detail, creates a flowing rhythm, and mirrors complex thought processes. Can build suspense by delaying key information.",
  },
  {
    name: "Listing / Enumeration",
    type: "Both",
    definition: "A sequence of items, ideas, or descriptions, sometimes without conjunctions (asyndeton).",
    example: "\"Broken glass, overturned chairs, bloodstains on the carpet.\"",
    source: "Common across all text types",
    effect: "Can create a sense of abundance, chaos, or accumulation. Without conjunctions, it feels breathless and overwhelming.",
  },
  {
    name: "Cyclical Structure",
    type: "Structure",
    definition: "A text that ends where it began, returning to the opening image, idea, or setting.",
    example: "A story that opens and closes with the same image of a ticking clock.",
    source: "Common in short stories and descriptive writing",
    effect: "Creates a sense of completeness, inevitability, or entrapment. Suggests that nothing has truly changed, or provides satisfying closure.",
  },
  {
    name: "Flashback / Analepsis",
    type: "Structure",
    definition: "A shift in narrative to an earlier time, interrupting the chronological sequence.",
    example: "\"Twenty years ago, standing in this same doorway, she had made a promise she could not keep.\"",
    source: "Common in novels and short stories",
    effect: "Provides backstory and context, creates dramatic irony, and adds depth to a character. Builds mystery by revealing information gradually.",
  },
  {
    name: "Foreshadowing",
    type: "Structure",
    definition: "Hints or clues about events that will happen later in the text.",
    example: "\"She didn't know it then, but that would be the last time she saw the house.\"",
    source: "Common in 19th-century fiction",
    effect: "Builds suspense and tension. Creates a sense of inevitability and encourages the reader to keep reading to discover what happens.",
  },
  {
    name: "Shift in Focus / Zoom",
    type: "Structure",
    definition: "Moving from a wide, panoramic view to a close, specific detail (or vice versa), like a camera.",
    example: "Opening with a description of the whole city, then narrowing to one window, then to the face of the person behind it.",
    source: "Dickens, Bleak House",
    effect: "Guides the reader's attention deliberately. A zoom-in creates intimacy and significance; a zoom-out can reveal isolation or context.",
  },
  {
    name: "Narrative Perspective (First Person)",
    type: "Structure",
    definition: "The story is told using 'I', from the perspective of a character within the story.",
    example: "\"I could feel my heart hammering against my ribs as I stepped into the room.\"",
    source: "Bront\u00eb, Jane Eyre; Shelley, Frankenstein",
    effect: "Creates intimacy and immediacy. The reader experiences events through the narrator's eyes, building empathy but also limiting knowledge to one viewpoint.",
  },
  {
    name: "Narrative Perspective (Third Person)",
    type: "Structure",
    definition: "The story is told using 'he/she/they', from an outside perspective.",
    example: "\"She stood at the edge of the cliff, unaware of the figure watching from the trees below.\"",
    source: "Hardy, Austen, and most 19th-century fiction",
    effect: "Allows the narrator to reveal information the character does not know, creating dramatic irony. Omniscient narration gives a godlike overview.",
  },
  {
    name: "Dialogue",
    type: "Structure",
    definition: "Direct speech between characters, presented in quotation marks.",
    example: "\"You don't understand,\" she whispered. \"You never did.\"",
    source: "Common across all fiction",
    effect: "Reveals character relationships, creates tension, and breaks up descriptive passages. Realistic dialogue makes characters feel authentic.",
  },
  {
    name: "Paragraph Length Variation",
    type: "Structure",
    definition: "Deliberately varying the length of paragraphs to control pace and emphasis.",
    example: "A long descriptive paragraph followed by a single-line paragraph: \"Then the lights went out.\"",
    source: "Common in literary fiction",
    effect: "Short paragraphs create impact, urgency, or a dramatic pause. Long paragraphs create a flowing, immersive atmosphere.",
  },
  {
    name: "Cliffhanger",
    type: "Structure",
    definition: "Ending a section, chapter, or extract at a moment of high tension or unresolved suspense.",
    example: "\"She reached for the handle. Behind her, something moved.\"",
    source: "Dickens (serialised fiction), Gothic fiction",
    effect: "Creates suspense and compels the reader to continue. Leaves the reader in a state of anxiety and anticipation.",
  },
  {
    name: "In Medias Res",
    type: "Structure",
    definition: "Beginning a narrative in the middle of the action, rather than at the chronological start.",
    example: "Opening with a character running from danger, then later explaining how they got there.",
    source: "Common in modern and literary fiction",
    effect: "Immediately grabs the reader's attention by plunging them into the action. Creates intrigue and disorients the reader, encouraging them to piece together the backstory.",
  },
  {
    name: "Antithesis",
    type: "Language",
    definition: "The juxtaposition of contrasting ideas in balanced phrases or clauses.",
    example: "\"It was the best of times, it was the worst of times.\"",
    source: "Dickens, A Tale of Two Cities",
    effect: "Creates a sense of balance and contrast. Highlights opposing ideas and makes the writing feel polished and memorable.",
  },
  {
    name: "Euphemism",
    type: "Language",
    definition: "A mild or indirect expression used in place of something unpleasant or harsh.",
    example: "\"He passed away\" instead of \"He died.\"",
    source: "Common in formal and sensitive contexts",
    effect: "Softens the impact of a harsh reality. Can reveal a character's discomfort with a topic or a society's desire to avoid difficult truths.",
  },
];

/* ─── Component ──────────────────────────────────────────────── */

function TypeBadge({ type }: { type: Technique["type"] }) {
  const colours: Record<string, string> = {
    Language: "bg-primary/15 text-primary",
    Structure: "bg-primary/15 text-primary",
    Both: "bg-success-100 text-success-700",
  };
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${colours[type]}`}>
      {type}
    </span>
  );
}

export default function TechniquesPage() {
  const languageTechniques = techniques.filter((t) => t.type === "Language");
  const structureTechniques = techniques.filter((t) => t.type === "Structure");
  const bothTechniques = techniques.filter((t) => t.type === "Both");

  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/english-language/edexcel"
            className="mb-4 inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Back to Edexcel Hub
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Language &amp; Structural Techniques
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {techniques.length} essential techniques with definitions, examples, and effects. Master these for your reading
            analysis and use them in your own writing.
          </p>
        </div>
      </section>

      {/* ── Quick nav ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card px-4 py-4 sticky top-0 z-10 shadow-md">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3">
          <a href="#language" className="rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors">
            Language ({languageTechniques.length})
          </a>
          <a href="#structure" className="rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors">
            Structure ({structureTechniques.length})
          </a>
          <a href="#both" className="rounded-full bg-success-100 px-4 py-1.5 text-sm font-semibold text-success-700 hover:bg-success-200 transition-colors">
            Both ({bothTechniques.length})
          </a>
          <a href="#using-techniques" className="rounded-full bg-muted px-4 py-1.5 text-sm font-semibold text-muted-foreground hover:bg-muted/80 transition-colors">
            How to Use in Exams
          </a>
        </div>
      </section>

      {/* ── Language techniques ───────────────────────────────────── */}
      <section id="language" className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Language Techniques</h2>
          <p className="mt-2 text-muted-foreground">Techniques relating to word choice, phrasing, and figurative language.</p>
          <div className="mt-8 space-y-6">
            {languageTechniques.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-foreground">{t.name}</h3>
                  <TypeBadge type={t.type} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.definition}</p>
                <div className="mt-3 rounded-lg bg-muted p-4">
                  <p className="text-sm font-medium text-muted-foreground">Example:</p>
                  <p className="mt-1 text-sm italic text-foreground">{t.example}</p>
                  <p className="mt-1 text-xs text-muted-foreground">&mdash; {t.source}</p>
                </div>
                <div className="mt-3 rounded-lg bg-primary/10 p-4">
                  <p className="text-sm font-medium text-primary">Effect on the reader:</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.effect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Structural techniques ────────────────────────────────── */}
      <section id="structure" className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Structural Techniques</h2>
          <p className="mt-2 text-muted-foreground">Techniques relating to how a text is organised, shaped, and sequenced.</p>
          <div className="mt-8 space-y-6">
            {structureTechniques.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-foreground">{t.name}</h3>
                  <TypeBadge type={t.type} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.definition}</p>
                <div className="mt-3 rounded-lg bg-muted p-4">
                  <p className="text-sm font-medium text-muted-foreground">Example:</p>
                  <p className="mt-1 text-sm italic text-foreground">{t.example}</p>
                  <p className="mt-1 text-xs text-muted-foreground">&mdash; {t.source}</p>
                </div>
                <div className="mt-3 rounded-lg bg-primary/10 p-4">
                  <p className="text-sm font-medium text-primary">Effect on the reader:</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.effect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Both ─────────────────────────────────────────────────── */}
      <section id="both" className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Language &amp; Structure</h2>
          <p className="mt-2 text-muted-foreground">Techniques that function as both language and structural devices.</p>
          <div className="mt-8 space-y-6">
            {bothTechniques.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-foreground">{t.name}</h3>
                  <TypeBadge type={t.type} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.definition}</p>
                <div className="mt-3 rounded-lg bg-muted p-4">
                  <p className="text-sm font-medium text-muted-foreground">Example:</p>
                  <p className="mt-1 text-sm italic text-foreground">{t.example}</p>
                  <p className="mt-1 text-xs text-muted-foreground">&mdash; {t.source}</p>
                </div>
                <div className="mt-3 rounded-lg bg-success-50 p-4">
                  <p className="text-sm font-medium text-success-700">Effect on the reader:</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.effect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to use techniques in exams ────────────────────────── */}
      <section id="using-techniques" className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">How to Use Techniques in Exams</h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">The What-How-Why Method</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every analytical point should follow this structure for maximum marks:
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-primary/10 p-4 text-center">
                  <p className="text-lg font-bold text-primary">WHAT</p>
                  <p className="mt-1 text-sm text-muted-foreground">Identify the technique and embed a quotation</p>
                </div>
                <div className="rounded-lg bg-primary/10 p-4 text-center">
                  <p className="text-lg font-bold text-primary">HOW</p>
                  <p className="mt-1 text-sm text-muted-foreground">Name the technique using subject terminology</p>
                </div>
                <div className="rounded-lg bg-success-50 p-4 text-center">
                  <p className="text-lg font-bold text-success-700">WHY</p>
                  <p className="mt-1 text-sm text-muted-foreground">Explain the effect on the reader</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">Example Analytical Paragraph</h3>
              <div className="mt-3 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
                <p className="text-sm text-foreground leading-relaxed">
                  The writer uses the <span className="font-semibold text-primary">[HOW]</span> metaphor
                  <span className="font-semibold text-accent"> [WHAT]</span> &ldquo;the darkness swallowed him whole&rdquo;
                  to present the darkness as a predatory force.
                  <span className="font-semibold text-success"> [WHY]</span> The verb &ldquo;swallowed&rdquo; has connotations of being
                  devoured, implying the character is vulnerable prey, which creates fear in the reader as the darkness is
                  transformed from a passive absence of light into an active, threatening entity.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-warn-200 bg-warn-50 p-6">
              <h3 className="font-bold text-warn-700">Common Mistakes</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  <strong>Feature-spotting:</strong> Naming a technique without explaining its effect. &ldquo;The writer uses a simile&rdquo; alone is worth almost nothing.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  <strong>Vague effects:</strong> Saying &ldquo;this makes the reader want to read on&rdquo; or &ldquo;this creates imagery.&rdquo; Be specific about what the reader feels and why.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  <strong>Over-long quotations:</strong> Quote only the specific words you need. A few words embedded in your sentence is better than a full sentence in a block.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  <strong>Ignoring structure:</strong> Many students only discuss language. Structural analysis (focus shifts, paragraph lengths, openings/endings) can set your response apart.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
