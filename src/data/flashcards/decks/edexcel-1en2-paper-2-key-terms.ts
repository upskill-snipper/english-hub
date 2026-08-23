// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'edexcel-1en2-paper-2-key-terms',
  title: 'Edexcel Paper 2: Advanced Terminology',
  description: 'Terminology for fiction analysis and imaginative writing for Edexcel 1EN2 Paper 2',
  category: 'gcse',
  board: 'Edexcel',
  cards: [
    {
      id: 'e2kt-1',
      front: 'Narrative Voice',
      back: `The perspective and personality through which a story is told. Central to Paper 2 fiction analysis.\n\nFirst person ("I"): subjective, intimate, potentially unreliable.\nThird person limited: follows one character\'s thoughts.\nThird person omniscient: all-knowing, can reveal any character\'s mind.\nSecond person ("you"): unusual, immersive, confrontational.\n\nAlways comment on narrative voice in Q3 - it shapes everything the reader experiences.`,
    },
    {
      id: 'e2kt-2',
      front: 'Foreshadowing',
      back: `Hints or clues planted early in a narrative that anticipate later events.\n\nMethods: ominous imagery, loaded dialogue, symbolic objects, weather/atmosphere.\n\nExample: A character noticing a cracked mirror before a relationship breaks down.\n\nIn Paper 2 Q3: "The writer foreshadows [event] through [specific detail], creating a sense of unease that prepares the reader for..."`,
    },
    {
      id: 'e2kt-3',
      front: 'Pathetic Fallacy',
      back: `Attributing human emotions to the natural environment, especially weather, to mirror characters\' feelings or establish mood.\n\nExample: "The sky darkened and rain began to spit as he turned away."\n\nDistinct from personification - pathetic fallacy specifically reflects EMOTION through ENVIRONMENT.\n\nEssential for both fiction analysis (Q3) and your own imaginative writing (Q5).`,
    },
    {
      id: 'e2kt-4',
      front: 'Motif',
      back: `A recurring image, symbol, idea, or phrase that develops significance across a text.\n\nExample: Repeated references to clocks in a text about mortality.\n\nEven in a short Paper 2 extract, a motif may appear multiple times. Spotting it shows perceptive reading.\n\nIn your imaginative writing: Introduce a motif early, repeat it with variation, and return to it at the end for structural cohesion.`,
    },
    {
      id: 'e2kt-5',
      front: 'Denouement',
      back: `The final resolution of a narrative, where conflicts are resolved and loose ends are tied up.\n\nFrom French: "unknotting."\n\nFollows the climax. May be satisfying (closure) or ambiguous (open ending).\n\nIf the Paper 2 extract is from near a story\'s end, consider whether the denouement resolves expectations or deliberately subverts them.`,
    },
    {
      id: 'e2kt-6',
      front: 'Free Indirect Discourse',
      back: `A narrative technique blending a character\'s thoughts with the narrator\'s voice, without speech marks or "she thought."\n\nExample: "She stared at the letter. It was over, then. Everything she had worked for, gone."\n\nThe second and third sentences are the character\'s thoughts, rendered in the narrator\'s voice.\n\nIdentifying this in Paper 2 Q3 shows very sophisticated understanding of narrative technique.`,
    },
    {
      id: 'e2kt-7',
      front: 'In Medias Res',
      back: `Latin: "in the middle of things." Beginning a narrative at a dramatic or significant moment rather than at the chronological start.\n\nEffect: Immediately hooks the reader. Creates mystery about how events reached this point.\n\nUse in your Paper 2 Q5 imaginative writing: open with a moment of tension or significance, then fill in context through flashback or reflection.`,
    },
    {
      id: 'e2kt-8',
      front: 'Dramatic Irony',
      back: `When the reader knows something that a character does not.\n\nExample: The reader knows there is danger ahead, but the character walks on obliviously.\n\nEffect: Creates tension, suspense, or pathos. The reader becomes emotionally invested because they want to warn the character.\n\nIn fiction analysis, always explain the EFFECT of dramatic irony on the reader\'s experience.`,
    },
    {
      id: 'e2kt-9',
      front: 'Semantic Field',
      back: `A group of words in a text that all relate to the same topic or concept.\n\nExample: "shackled," "imprisoned," "confined," "locked" = semantic field of captivity.\n\nIn Paper 2 Q3: Identifying a semantic field shows you can see patterns across the extract, not just individual words. Explain what the sustained semantic field SUGGESTS about theme or character.`,
    },
    {
      id: 'e2kt-10',
      front: 'Epiphany',
      back: `A sudden moment of revelation or insight experienced by a character.\n\nOften occurs at or near the climax. The character suddenly understands something they previously could not see.\n\nEffect: Creates a turning point. Can be cathartic, devastating, or transformative.\n\nIn fiction analysis: "The protagonist experiences an epiphany when [event], realising that [insight]."`,
    },
    {
      id: 'e2kt-11',
      front: 'Exposition',
      back: `The opening section of a narrative where the writer establishes setting, characters, context, and initial situation.\n\nIn Paper 2 fiction extracts, the exposition sets tone and atmosphere.\n\nFor your own imaginative writing: Keep exposition brief. Start with action, dialogue, or a striking image. Weave context in gradually - do not dump information in the first paragraph.`,
    },
    {
      id: 'e2kt-12',
      front: 'Prolepsis',
      back: `A flash-forward - a scene or detail that jumps ahead in time to reveal or hint at future events.\n\nOpposite of analepsis (flashback).\n\nExample: "Years later, she would remember this moment as the one that changed everything."\n\nEffect: Creates anticipation and a sense of inevitability. Sophisticated structural technique for Q5 imaginative writing.`,
    },
    {
      id: 'e2kt-13',
      front: 'Unreliable Narrator',
      back: `A narrator whose account the reader cannot fully trust due to bias, limited knowledge, emotional distortion, or deliberate deception.\n\nSignals: contradictions, defensiveness, gaps, excessive justification, second-person address ("You would have done the same").\n\nIdentifying unreliable narration in Paper 2 Q3 is a top-band skill. Using one in Q5 shows creative sophistication.`,
    },
    {
      id: 'e2kt-14',
      front: 'Sensory Description',
      back: `Writing that appeals to the five senses: sight, sound, touch, taste, smell.\n\nMost students only use sight. To reach top bands in Paper 2 Q5, consciously include at least three senses.\n\nTactile: "The rough bark scraped her palms."\nOlfactory: "Damp earth and woodsmoke hung in the air."\nAuditory: "Silence pressed in from every side."\n\nSensory detail creates immersion - the marker should FEEL your writing.`,
    },
    {
      id: 'e2kt-15',
      front: 'Cyclical / Circular Structure',
      back: `A narrative that ends where it began, returning to the opening image, location, or idea.\n\nEffect: Creates a sense of completion, fate, or entrapment. Can show transformation (same place, changed character) or stasis (nothing has changed).\n\nIn Paper 2 Q5: Echo your opening line or image in your final paragraph. This single structural choice demonstrates conscious craft and earns AO5 marks.`,
    },
    {
      id: 'e2kt-16',
      front: 'Narrative Pace',
      back: `The speed at which events unfold in a story, controlled by the writer\'s structural and linguistic choices.\n\nFast pace: short sentences, dialogue, action verbs, minimal description.\nSlow pace: long sentences, sensory detail, extended imagery, reflection.\n\nIn Q3 analysis: comment on how pace shifts create tension or emphasis.\nIn Q5 writing: vary pace deliberately - slow description followed by sudden short sentences creates impact.`,
    },
    {
      id: 'e2kt-17',
      front: 'Atmosphere vs. Mood',
      back: `Often used interchangeably, but there is a useful distinction:\n\nAtmosphere: the feeling created by the SETTING and ENVIRONMENT (external).\nMood: the emotional state of the CHARACTER or READER (internal).\n\nIn Paper 2 analysis, use precise terms: "The writer creates a claustrophobic atmosphere through [detail], which evokes a mood of anxiety in the reader."\n\nPrecise vocabulary like this signals top-band analysis.`,
    },
  ],
}

export default deck
