"use client";

import Link from "next/link";
import { useState } from "react";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Types ──────────────────────────────────────────────────── */

interface Technique {
  name: string;
  definition: string;
  example: string;
  effect: string;
  howToWriteAboutIt: string;
  category: string;
}

/* ─── Data ───────────────────────────────────────────────────── */

const techniques: Technique[] = [
  {
    name: "Metaphor",
    category: "Imagery",
    definition: "A direct comparison between two unlike things, stating that one thing IS another. Unlike a simile, it does not use 'like' or 'as'.",
    example: '"The classroom was a prison, trapping us in rows of identical desks."',
    effect: "Creates a vivid mental image and encourages the reader to see connections between two seemingly unrelated things. Metaphors can carry powerful connotations: calling a classroom a 'prison' implies captivity, punishment, and a loss of freedom.",
    howToWriteAboutIt: 'The writer employs the metaphor of a "prison" to describe the classroom, which suggests that the students feel trapped and confined. The connotations of imprisonment — restriction, punishment, lack of autonomy — imply that the educational experience is oppressive rather than liberating.',
  },
  {
    name: "Simile",
    category: "Imagery",
    definition: "A comparison between two unlike things using 'like' or 'as'.",
    example: '"Her voice was like broken glass, sharp and dangerous."',
    effect: "Makes descriptions more vivid and relatable by connecting an abstract or unfamiliar concept to something concrete and familiar. The choice of comparison reveals the writer's attitude.",
    howToWriteAboutIt: 'The simile "like broken glass" characterises her voice as not only unpleasant but threatening. The adjectives "sharp and dangerous" extend the comparison, suggesting that her words have the power to wound — that language itself can be a weapon.',
  },
  {
    name: "Personification",
    category: "Imagery",
    definition: "Giving human qualities, emotions, or actions to non-human things (objects, animals, abstract concepts, nature).",
    example: '"The wind howled through the empty streets, clawing at the shutters."',
    effect: "Brings inanimate objects or natural forces to life, making them seem active, purposeful, or even threatening. This often creates atmosphere or suggests that nature/the environment is an active force.",
    howToWriteAboutIt: 'The writer personifies the wind through the verbs "howled" and "clawing," both of which connote aggression and animalistic behaviour. This transforms the wind from a neutral weather phenomenon into something predatory, creating a hostile, threatening atmosphere.',
  },
  {
    name: "Pathetic fallacy",
    category: "Imagery",
    definition: "A specific type of personification where the weather or natural environment reflects the emotions or mood of a character or the overall atmosphere of a scene.",
    example: '"Dark clouds gathered overhead as she received the devastating news."',
    effect: "Reinforces the emotional tone of the scene. The external world mirrors the internal emotional state, deepening the reader's sense of mood. It can also foreshadow events.",
    howToWriteAboutIt: 'The writer uses pathetic fallacy — the "dark clouds" mirroring the character\'s despair — to create a sense of foreboding. The gathering clouds suggest that more sorrow is to come, while also externalising the character\'s grief so that the entire world seems to share in her pain.',
  },
  {
    name: "Alliteration",
    category: "Sound devices",
    definition: "The repetition of the same consonant sound at the beginning of consecutive or closely placed words.",
    example: '"The bitter, biting breeze blew across the barren landscape."',
    effect: "Creates rhythm and emphasis. Draws the reader's attention to particular phrases. The effect depends on the sound: harsh consonants (b, d, g, k) can create a forceful, aggressive tone; softer sounds (l, m, s) can create a gentle, soothing quality.",
    howToWriteAboutIt: 'The alliteration of the plosive "b" sound in "bitter, biting breeze blew" creates a harsh, percussive quality that mirrors the violence of the cold wind. The repetitive, punching sound forces the reader to feel the relentless assault of the weather.',
  },
  {
    name: "Sibilance",
    category: "Sound devices",
    definition: "The repetition of 's', 'sh', 'z', or soft 'c' sounds, creating a hissing effect.",
    example: '"She slithered silently through the shadows, a sinister smile on her face."',
    effect: "Often creates a sense of menace, secrecy, or eeriness. The hissing quality can evoke snakes or whispering, both of which carry connotations of danger or deception.",
    howToWriteAboutIt: 'The sibilance in "slithered silently through the shadows" creates a sinister, snake-like quality. The repeated "s" sounds evoke the image of a serpent, with its biblical connotations of temptation and evil, suggesting that the character cannot be trusted.',
  },
  {
    name: "Onomatopoeia",
    category: "Sound devices",
    definition: "Words that imitate the sound they describe.",
    example: '"The fire crackled and hissed, spitting embers into the darkness."',
    effect: "Brings sensory experience to life by allowing the reader to 'hear' the scene. Creates immediacy and immersion.",
    howToWriteAboutIt: 'The onomatopoeic verbs "crackled," "hissed," and "spitting" immerse the reader in the sensory experience of the fire. The sounds suggest both warmth and danger — the fire is alive, unpredictable, and potentially destructive.',
  },
  {
    name: "Assonance",
    category: "Sound devices",
    definition: "The repetition of vowel sounds within closely placed words.",
    example: '"The low moaning tones echoed through the old stone hall."',
    effect: "Creates a musical quality and can slow the pace of reading. Long vowel sounds (oh, oo, ee) can create a mournful or drawn-out feeling; short vowels (a, e, i) can quicken the pace.",
    howToWriteAboutIt: 'The assonance of the long "o" sounds in "low moaning tones" and "old stone" creates a drawn-out, melancholic quality that mirrors the echoing emptiness of the hall. The reader is forced to slow down, dwelling on each syllable as the sound itself seems to reverberate.',
  },
  {
    name: "Juxtaposition",
    category: "Structural/rhetorical",
    definition: "Placing two contrasting ideas, images, or concepts side by side to highlight their differences.",
    example: '"Outside, children laughed in the sunshine. Inside, she sat alone in the dark."',
    effect: "Highlights contrast and creates tension. Draws attention to inequality, irony, or the complexity of a situation by forcing the reader to hold two opposing ideas simultaneously.",
    howToWriteAboutIt: 'The writer juxtaposes the joyful innocence of children playing in sunshine with the solitary darkness of her interior world. This stark contrast emphasises her isolation: happiness exists just beyond the walls, but it belongs to a world she cannot access.',
  },
  {
    name: "Oxymoron",
    category: "Structural/rhetorical",
    definition: "A figure of speech that combines two contradictory terms.",
    example: '"A deafening silence filled the room after the announcement."',
    effect: "Creates a paradoxical image that captures complexity or mixed emotions. Forces the reader to reconsider the nature of the thing being described.",
    howToWriteAboutIt: 'The oxymoron "deafening silence" captures the overwhelming nature of the quiet that follows shock. Silence is, by definition, the absence of sound, yet here it is presented as something loud, something that presses on the characters with an almost physical force — suggesting that what is left unsaid is more powerful than any words.',
  },
  {
    name: "Hyperbole",
    category: "Structural/rhetorical",
    definition: "Deliberate exaggeration for emphasis or comic/dramatic effect. Not meant to be taken literally.",
    example: '"I have told you a million times not to leave your shoes in the hallway."',
    effect: "Emphasises the intensity of a feeling, the scale of a problem, or the frustration of a character. In persuasive writing, it can make an argument seem more urgent. In narrative, it reveals character voice.",
    howToWriteAboutIt: 'The hyperbole "a million times" conveys the speaker\'s exasperation, suggesting that their frustration has been building over a long period. The deliberate exaggeration invites the reader to sympathise with the speaker\'s irritation while also adding a touch of humour.',
  },
  {
    name: "Enjambment",
    category: "Structural",
    definition: "In poetry, when a sentence or phrase runs over from one line to the next without a pause or punctuation at the end of the line. In prose, the concept can apply to sentences that run across paragraph breaks.",
    example: '"She ran through the door and / into the arms of someone she / had never expected to see again."',
    effect: "Creates momentum and urgency. The reader is propelled forward, mirroring the speed or continuation of an action or thought. Can also create surprise when the meaning shifts at the line break.",
    howToWriteAboutIt: 'The enjambment propels the reader forward, mirroring the character\'s frantic movement. By withholding the completion of the sentence, the writer creates suspense — we do not know who awaits her until the next line.',
  },
  {
    name: "Caesura",
    category: "Structural",
    definition: "A pause in the middle of a line of poetry or a sentence, usually created by punctuation (a full stop, comma, dash, or semicolon).",
    example: '"He smiled. Then the knife fell."',
    effect: "Creates a dramatic pause that forces the reader to stop and absorb what has just been said. Can signal a shift in tone, a moment of realisation, or a sudden change in events.",
    howToWriteAboutIt: 'The caesura created by the full stop after "smiled" forces the reader to pause, creating a false sense of warmth and safety before the shocking revelation of the falling knife. The abrupt shift from gentleness to violence is made more jarring by this structural break.',
  },
  {
    name: "Anaphora",
    category: "Structural/rhetorical",
    definition: "The repetition of a word or phrase at the beginning of successive sentences, clauses, or lines.",
    example: '"We will fight on the beaches. We will fight on the landing grounds. We will fight in the fields."',
    effect: "Creates rhythm, builds emphasis, and reinforces a key message. Often used in speeches and persuasive writing to create a powerful, memorable cadence.",
    howToWriteAboutIt: 'The anaphora of "We will fight" creates a relentless, determined rhythm that builds in intensity with each repetition. The cumulative effect is one of unwavering resolve — the speaker will not stop, will not yield, no matter the location or circumstance.',
  },
  {
    name: "Tricolon (Rule of three)",
    category: "Structural/rhetorical",
    definition: "A series of three parallel words, phrases, or clauses. The third element often provides emphasis or a twist.",
    example: '"Government of the people, by the people, for the people."',
    effect: "Creates a satisfying rhythmic pattern that feels complete and memorable. The third element often delivers the most impact. Widely used in both persuasive and creative writing.",
    howToWriteAboutIt: 'The tricolon "of the people, by the people, for the people" creates a powerful rhetorical rhythm that reinforces the concept of democracy from three angles — origin, agency, and purpose. The repetition of "the people" ensures the audience remembers who holds the power.',
  },
  {
    name: "Semantic field",
    category: "Language patterns",
    definition: "A group of words within a text that are related in meaning, all connecting to a particular theme or concept.",
    example: '"The battlefield of the classroom: students armed with pens, teachers shielding themselves behind desks, the bell signalling retreat."',
    effect: "Builds a sustained comparison or mood throughout a passage. Even if no single metaphor is used, the cumulative effect of related words creates a dominant impression.",
    howToWriteAboutIt: 'The writer employs a semantic field of warfare — "battlefield," "armed," "shielding," "retreat" — to describe the classroom. This sustained military imagery transforms a mundane educational setting into a zone of conflict, suggesting that the relationship between teachers and students is adversarial.',
  },
  {
    name: "Emotive language",
    category: "Language patterns",
    definition: "Words and phrases deliberately chosen to provoke an emotional response in the reader, such as sympathy, anger, joy, or fear.",
    example: '"The helpless child was abandoned in the freezing cold, forgotten by those who should have protected her."',
    effect: "Manipulates the reader's emotions to make them feel strongly about an issue. Common in persuasive writing, journalism, and charity appeals.",
    howToWriteAboutIt: 'The emotive language — "helpless," "abandoned," "freezing," "forgotten" — is designed to provoke sympathy and outrage in the reader. Each word emphasises the child\'s vulnerability, while "those who should have protected her" implies a moral failing that the reader is compelled to condemn.',
  },
  {
    name: "Imperative verbs",
    category: "Language patterns",
    definition: "Verbs used as commands or instructions, directly telling the reader/listener to do something.",
    example: '"Stop scrolling. Put down your phone. Look at the world around you."',
    effect: "Creates urgency and authority. Positions the writer as someone with the right to instruct the reader. In persuasive writing, it drives the audience towards action.",
    howToWriteAboutIt: 'The imperative verbs "stop," "put down," and "look" create an increasingly urgent call to action. The writer assumes a position of authority, directly commanding the reader to change their behaviour — the tone shifts from suggestion to demand.',
  },
  {
    name: "Rhetorical question",
    category: "Structural/rhetorical",
    definition: "A question asked for effect rather than to receive an answer. The expected answer is usually obvious.",
    example: '"How many more children must suffer before we act?"',
    effect: "Engages the reader by making them think. Creates a sense of shared agreement — the writer assumes the reader will reach the same conclusion. Can also create guilt or urgency.",
    howToWriteAboutIt: 'The rhetorical question "How many more children must suffer?" is designed to make the reader feel complicit in inaction. By framing the issue as a question with an obvious answer (none), the writer implies that failing to act is a moral failure.',
  },
  {
    name: "Direct address",
    category: "Structural/rhetorical",
    definition: "Speaking directly to the reader or audience, typically using the second person pronoun 'you'.",
    example: '"You know this is wrong. You have seen it with your own eyes."',
    effect: "Creates a personal connection between the writer and reader. Makes the argument feel directed at the individual, not just society in general. Can be confrontational or inclusive.",
    howToWriteAboutIt: 'The direct address — "You know this is wrong" — refuses to let the reader remain a passive observer. By singling out the individual with "you," the writer transforms reading from a detached intellectual exercise into a personal accusation.',
  },
  {
    name: "Listing / accumulation",
    category: "Structural/rhetorical",
    definition: "A series of words, phrases, or clauses presented one after another, often without conjunctions (asyndetic) or with repeated conjunctions (polysyndetic).",
    example: 'Asyndetic: "Blood, sweat, tears, silence." Polysyndetic: "Blood and sweat and tears and silence."',
    effect: "Asyndetic listing creates pace and a sense of overwhelming quantity. Polysyndetic listing (with repeated 'and') slows the pace and emphasises each item, suggesting endlessness or exhaustion.",
    howToWriteAboutIt: 'The asyndetic list "blood, sweat, tears, silence" accelerates through physical suffering before the abrupt, unexpected final noun — "silence." The lack of conjunctions creates a breathless pace, while the shift from bodily fluids to the abstract concept of silence suggests that the most painful outcome is not physical but emotional.',
  },
  {
    name: "Short / minor sentence",
    category: "Structural",
    definition: "A very short sentence (sometimes a fragment without a main verb) used for dramatic emphasis.",
    example: '"She turned around. Nothing. Just the echo of her own breathing."',
    effect: "Slows the pace and forces the reader to pause. Creates tension, shock, or emphasis. The brevity stands in contrast to longer sentences, making the short sentence feel more impactful.",
    howToWriteAboutIt: 'The minor sentence "Nothing" halts the narrative momentum, forcing the reader to share in the character\'s moment of disorientation. Its brevity — a single word standing alone — mirrors the emptiness she encounters, the void where she expected to find something.',
  },
  {
    name: "Irony",
    category: "Language patterns",
    definition: "Saying the opposite of what you mean, or a situation where the outcome is the opposite of what was expected. There are three main types: verbal irony (saying the opposite), situational irony (unexpected outcome), and dramatic irony (audience knows something the characters do not).",
    example: '"What a beautiful day," she muttered, staring at the torrential rain hammering against the window.',
    effect: "Creates humour, bitterness, or a sense of absurdity. In persuasive writing, it can mock an opposing viewpoint. In narrative, it reveals character attitude.",
    howToWriteAboutIt: 'The verbal irony of calling the day "beautiful" while rain "hammers" against the window reveals the character\'s bitter resignation. She does not simply describe the weather — she weaponises language against her own disappointment, using sarcasm as a shield.',
  },
  {
    name: "Symbolism",
    category: "Imagery",
    definition: "Using an object, colour, character, or element to represent a larger idea, concept, or theme beyond its literal meaning.",
    example: '"She noticed the single crack running through the mirror, splitting her reflection in two."',
    effect: "Adds layers of meaning to a text. Allows the writer to convey complex themes subtly. Readers who recognise the symbolism gain a deeper understanding of the text.",
    howToWriteAboutIt: 'The cracked mirror symbolises the character\'s fractured identity — she is literally split "in two." The choice of a mirror is significant: it is an object designed to show us our true selves, but the crack distorts the reflection, suggesting that her sense of self has been damaged or divided.',
  },
  {
    name: "Foreshadowing",
    category: "Structural",
    definition: "Hints or clues early in a text that suggest what will happen later. Often subtle and only fully recognised in retrospect.",
    example: '"She laughed and said she had never been happier, not knowing that this would be the last evening they would spend together."',
    effect: "Creates suspense, tension, and a sense of inevitability. The reader feels uneasy, sensing that trouble is coming even during positive moments.",
    howToWriteAboutIt: 'The phrase "the last evening they would spend together" casts a dark shadow over an otherwise joyful moment. The dramatic irony — the character is unaware of what the reader now suspects — transforms happiness into something fragile and poignant.',
  },
  {
    name: "Motif",
    category: "Structural",
    definition: "A recurring element (image, phrase, symbol, or idea) that appears throughout a text and reinforces a theme.",
    example: '"References to birds — caged, freed, singing, silent — appear throughout the novel, reflecting the protagonist\'s journey from captivity to freedom."',
    effect: "Creates thematic cohesion and deepens meaning. Each recurrence of the motif adds another layer of significance. Readers who track the motif gain a richer understanding.",
    howToWriteAboutIt: 'The recurring motif of birds tracks the protagonist\'s emotional arc: the caged bird of the opening mirrors her confinement, while the image of birds in flight at the climax signals her liberation. The writer uses this sustained image to connect disparate events into a unified thematic journey.',
  },
  {
    name: "Tone / register",
    category: "Language patterns",
    definition: "Tone is the writer's attitude (angry, reflective, humorous, formal, etc.). Register is the level of formality (formal, informal, colloquial, academic). These work together to shape the reader's experience.",
    example: '"Formal: "It is my firm conviction that this policy is fundamentally flawed." Informal: "Honestly? This policy is rubbish and everyone knows it."',
    effect: "Shapes the reader's relationship with the writer and the text. A formal tone can create authority; an informal tone can create intimacy. Shifts in tone or register can surprise or unsettle the reader.",
    howToWriteAboutIt: 'The shift from the formal register of the opening paragraphs to the colloquial, almost aggressive tone of "this policy is rubbish" is jarring. By dropping the veneer of academic objectivity, the writer reveals the strength of their feeling — the argument is no longer intellectual but deeply personal.',
  },
  {
    name: "Imagery (sensory)",
    category: "Imagery",
    definition: "Language that appeals to one or more of the five senses: sight (visual), sound (auditory), touch (tactile), taste (gustatory), and smell (olfactory).",
    example: '"The acrid smell of smoke clung to his clothes, and the taste of ash coated his tongue long after the fire had died."',
    effect: "Immerses the reader in the scene by engaging their senses. Makes abstract experiences concrete and tangible. Multi-sensory imagery is particularly powerful.",
    howToWriteAboutIt: 'The writer appeals to both smell — "acrid smell of smoke" — and taste — "taste of ash" — to convey the lingering impact of the fire. These sensory details make the experience visceral and unavoidable: the character cannot escape the fire even after it has ended, and neither can the reader.',
  },
  {
    name: "Extended metaphor",
    category: "Imagery",
    definition: "A metaphor that is sustained and developed over several lines, sentences, or even an entire text.",
    example: '"Life is a journey: sometimes the road is smooth, sometimes it is full of potholes, and occasionally you take a wrong turn — but you keep driving."',
    effect: "Creates a sustained, coherent comparison that builds in complexity. Allows the writer to explore multiple facets of an idea through a single controlling image.",
    howToWriteAboutIt: 'The extended metaphor of life as a journey is developed through progressively challenging imagery — "smooth," "potholes," "wrong turn" — before the resolution of "keep driving." This sustained comparison allows the writer to acknowledge difficulty while ultimately conveying resilience.',
  },
  {
    name: "Contrast",
    category: "Structural/rhetorical",
    definition: "Highlighting differences between two things, ideas, or situations. Broader than juxtaposition — can operate across a whole text, not just in adjacent sentences.",
    example: '"At school, he was silent and invisible. At home, with the door locked behind him, he became someone else entirely."',
    effect: "Reveals complexity in a character, situation, or argument. Invites the reader to question why the difference exists and what it means.",
    howToWriteAboutIt: 'The contrast between his school self ("silent and invisible") and his home self ("someone else entirely") reveals the character\'s dual identity. The writer suggests that his public persona is a mask, and the reader is left wondering which version is the "real" one.',
  },
  {
    name: "Repetition",
    category: "Structural/rhetorical",
    definition: "Deliberately using the same word, phrase, or structure more than once for emphasis.",
    example: '"She was tired. Tired of pretending. Tired of smiling. Tired of being someone she was not."',
    effect: "Reinforces a key idea and builds emotional intensity. The cumulative effect mirrors the weight of the repeated experience.",
    howToWriteAboutIt: 'The repetition of "tired" creates a rhythm that mirrors the exhausting, relentless nature of the character\'s experience. Each repetition adds another burden, and by the third instance, the word itself seems to sag under the weight of accumulated meaning.',
  },
  {
    name: "Euphemism",
    category: "Language patterns",
    definition: "A mild or indirect word or expression substituted for one considered too harsh, blunt, or offensive.",
    example: '"He passed away in the night" (instead of "he died").',
    effect: "Softens the impact of harsh realities. Can reveal social attitudes, discomfort, or politeness. In some contexts, euphemism can be used critically to highlight evasion or dishonesty.",
    howToWriteAboutIt: 'The euphemism "passed away" reveals the character\'s inability — or unwillingness — to confront the reality of death directly. The softer phrasing distances both character and reader from the finality of the event, suggesting that grief is being managed through language.',
  },
  {
    name: "Plosive sounds",
    category: "Sound devices",
    definition: "Harsh, explosive consonant sounds: b, d, g, k, p, t. When repeated, they create a forceful, aggressive effect.",
    example: '"The boots beat against the broken ground, kicking up clouds of dirt and dust."',
    effect: "Creates a harsh, punchy sound that can convey violence, anger, determination, or physical force. The 'explosive' quality of these sounds mirrors sudden, impactful actions.",
    howToWriteAboutIt: 'The plosive consonants in "boots beat" and "broken" create a harsh, percussive soundscape that mirrors the physical violence of the marching. Each plosive sound lands like a blow, making the reader feel the relentless, aggressive forward momentum.',
  },
  {
    name: "Antithesis",
    category: "Structural/rhetorical",
    definition: "A rhetorical device in which two opposite ideas are put together in a sentence to achieve a contrasting effect, often in a balanced, parallel structure.",
    example: '"It was the best of times, it was the worst of times."',
    effect: "Creates a memorable, balanced statement that captures complexity or contradiction. The parallel structure makes the contrast feel deliberate and significant.",
    howToWriteAboutIt: 'The antithesis of "best" and "worst" in a parallel structure captures the paradoxical nature of the era. The balanced syntax — identical sentence structures with opposing adjectives — suggests that these extremes coexist simultaneously, forcing the reader to hold contradiction in their mind.',
  },
];

const categories = [
  "All",
  "Imagery",
  "Sound devices",
  "Structural",
  "Structural/rhetorical",
  "Language patterns",
];

/* ─── Component ──────────────────────────────────────────────── */

function TechniqueCard({ t }: { t: Technique }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted transition-colors"
      >
        <div>
          <span className="font-bold text-foreground">{t.name}</span>
          <span className="ml-3 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary/70">
            {t.category}
          </span>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-border px-5 py-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h4 className="font-bold text-primary">Definition</h4>
            <p className="mt-1">{t.definition}</p>
          </div>
          <div>
            <h4 className="font-bold text-primary">Example</h4>
            <p className="mt-1 italic text-muted-foreground">{t.example}</p>
          </div>
          <div>
            <h4 className="font-bold text-primary">Effect on the reader</h4>
            <p className="mt-1">{t.effect}</p>
          </div>
          <div>
            <h4 className="font-bold text-primary">How to write about it in an exam</h4>
            <div className="mt-1 rounded-lg bg-muted p-3 text-sm">
              <p>{t.howToWriteAboutIt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TechniquesPage() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? techniques
      : techniques.filter((t) => t.category === filter);

  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/20">
            AQA GCSE English Language
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Language Techniques Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {techniques.length} techniques with definitions, examples, effects,
            and model exam responses. Click any technique to expand.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources/english-language/aqa" className="hover:text-primary transition-colors">
              AQA English Language
            </Link>
          </li>
          <li>/</li>
          <li className="text-primary font-medium">Techniques</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Intro */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-foreground">
            How to use this guide
          </h2>
          <p className="mt-3 text-muted-foreground">
            You do not need to memorise every technique listed here. Focus on
            understanding <strong>15-20 key devices</strong> well enough that
            you can identify them in an unseen text and explain their effect.
            For each technique, we provide:
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-1 text-muted-foreground">
            <li>A clear <strong>definition</strong></li>
            <li>An <strong>example</strong> showing the technique in action</li>
            <li>An explanation of the <strong>effect on the reader</strong></li>
            <li>A model sentence showing <strong>how to write about it in an exam</strong></li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            Remember: identifying a technique is not enough. You must always
            explain <em>why</em> the writer uses it and <em>how</em> it affects
            the reader. The model sentences below show you how to do this.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({techniques.filter((t) => t.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Technique cards */}
        <div className="space-y-3">
          {filtered.map((t) => (
            <TechniqueCard key={t.name} t={t} />
          ))}
        </div>

        {/* Back link */}
        <div className="pt-8">
          <Link
            href="/resources/english-language/aqa"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to AQA English Language
          </Link>
        </div>
      </div>

      <ExamBoardDisclaimer />
    </>
  );
}
