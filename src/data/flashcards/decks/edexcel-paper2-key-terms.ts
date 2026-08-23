// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'edexcel-paper2-key-terms',
  title: 'Edexcel Paper 2: Core Terms & Techniques',
  description:
    '20 essential terms for Edexcel English Language Paper 2 (Non-Fiction and Transactional Writing / Poetry and Prose)',
  category: 'Exam Skills',
  board: 'Edexcel',
  cards: [
    {
      id: 'ep2-1',
      front: 'Comparison Connectives',
      back: `Words and phrases used to link similarities and differences between texts.\n\nSimilarity: Similarly, Likewise, In the same way, Both writers, Equally.\nDifference: However, In contrast, Whereas, On the other hand, Conversely, Unlike.\n\nTip: Embed connectives naturally. Start with one text, then use a connective to pivot to the other.`,
    },
    {
      id: 'ep2-2',
      front: 'Comparison Structures',
      back: `Methods for organising a comparison essay.\n\nAlternating (preferred): Point about Text A > Compare to Text B > Repeat. Keeps comparison tight.\nBlock: All of Text A, then all of Text B. Risks losing comparison.\n\nBest practice: Each paragraph should discuss BOTH texts. Use "Similarly/However" to pivot between them.`,
    },
    {
      id: 'ep2-3',
      front: 'AO3 - Comparison (Edexcel)',
      back: `Compare writers\' ideas and perspectives, as well as how these are conveyed, across two or more texts.\n\nWhat this means: Compare WHAT the writers think (ideas/attitudes) and HOW they express it (methods/techniques).\n\nKey skill: Every analytical point must reference both texts. Use comparative connectives throughout.`,
    },
    {
      id: 'ep2-4',
      front: 'Imaginative Writing',
      back: `Creative writing that may be narrative (story) or descriptive.\n\nKey skills: Varied sentence structures, ambitious vocabulary, sensory imagery, structural techniques (flashback, zoom in/out, circular structure).\n\nEdexcel tip: You may be given an image or scenario as a stimulus. You can adapt it - you don\'t have to follow it literally.`,
    },
    {
      id: 'ep2-5',
      front: 'Literary Non-Fiction',
      back: `Real-life writing that uses literary techniques. Includes travel writing, autobiography, memoir, diary entries, journalism, letters.\n\nFeatures: Based on real events but uses techniques like imagery, dialogue, structural choices, and voice to engage readers.\n\nExam skill: Analyse it the same way you would fiction - look for language, structure, and writer\'s perspective.`,
    },
    {
      id: 'ep2-6',
      front: 'Unreliable Narrator',
      back: `A narrator whose account the reader cannot fully trust.\n\nSignals: Contradictions, bias, defensiveness, gaps in knowledge, emotional extremes, second-person justification ("You would have done the same").\n\nEffect: Creates suspense, forces reader to question events, adds psychological depth.\n\nUse in creative writing to add sophistication.`,
    },
    {
      id: 'ep2-7',
      front: 'In Medias Res',
      back: `Latin for "in the middle of things." Starting a narrative at a dramatic moment rather than the beginning.\n\nExample: Opening with action, dialogue, or a crisis, then filling in context later.\n\nEffect: Immediately hooks the reader. Creates intrigue and pace.\n\nUse in imaginative writing to grab the marker\'s attention from line one.`,
    },
    {
      id: 'ep2-8',
      front: 'Flashback',
      back: `A shift to an earlier time in the narrative.\n\nTriggers: A sensory detail (smell, sound), an object, a place, a word.\n\nEffect: Adds backstory, reveals motivation, creates contrast between past and present.\n\nExam tip: In creative writing, use a single well-placed flashback rather than multiple time shifts.`,
    },
    {
      id: 'ep2-9',
      front: 'Foreshadowing',
      back: `Hints or clues about events that will happen later in the narrative.\n\nMethods: Symbolic imagery, ominous language, weather/atmosphere, a character\'s uneasy feeling.\n\nEffect: Builds tension, creates dramatic irony, rewards attentive readers.\n\nExam tip: Subtle foreshadowing shows skill - don\'t make it too obvious.`,
    },
    {
      id: 'ep2-10',
      front: 'Narrative Voice',
      back: `The perspective and personality through which a story is told.\n\nFirst person: "I" - intimate, subjective, potentially unreliable.\nThird person limited: Follows one character\'s thoughts.\nThird person omniscient: All-knowing narrator.\nSecond person: "You" - unusual, immersive, confrontational.\n\nChoose deliberately in creative writing and justify your choice through execution.`,
    },
    {
      id: 'ep2-11',
      front: 'Zooming In (Structural Technique)',
      back: `Moving from a wide, general view to a close, specific detail.\n\nExample: "The city sprawled beneath a grey sky... In one narrow alley, a single flower pushed through a crack in the concrete."\n\nEffect: Draws the reader\'s focus, creates significance from small details, mirrors a camera lens.\n\nUse in descriptive writing to control the reader\'s attention.`,
    },
    {
      id: 'ep2-12',
      front: 'Circular / Cyclical Structure',
      back: `When a text ends where it began - returning to the same image, place, or idea.\n\nEffect: Creates a sense of completion, inevitability, or entrapment. Can show that nothing has changed - or that everything has.\n\nExam tip: In creative writing, echo your opening in your final paragraph to demonstrate conscious structural control.`,
    },
    {
      id: 'ep2-13',
      front: 'Shift in Tone',
      back: `A deliberate change in the mood or attitude within a text.\n\nExamples: Humorous to serious, calm to panicked, hopeful to despairing.\n\nEffect: Creates contrast, surprise, or emotional impact. Shows the writer\'s control.\n\nExam tip: When analysing structure, always comment on WHERE and WHY the tone shifts.`,
    },
    {
      id: 'ep2-14',
      front: 'Pathetic Fallacy (in Creative Writing)',
      back: `Using weather, landscape, or environment to mirror a character\'s emotions or the mood of a scene.\n\nExample: "Rain hammered the windows as she stared at the letter" = grief, turmoil.\n\nExam tip: Use pathetic fallacy at the START of your creative writing to establish atmosphere immediately. Avoid cliches - be specific with weather details.`,
    },
    {
      id: 'ep2-15',
      front: 'Sensory Imagery (Five Senses)',
      back: `Language that appeals to sight, sound, touch, taste, and smell.\n\nVisual: "The crimson sun bled across the horizon."\nAuditory: "Silence pressed against his ears."\nTactile: "The rough bark scraped her palms."\nOlfactory: "The air was thick with woodsmoke."\nGustatory: "Salt stung his cracked lips."\n\nExam tip: Use at least THREE senses in any descriptive piece.`,
    },
    {
      id: 'ep2-16',
      front: "Show, Don't Tell",
      back: `Revealing emotion through action, dialogue, and imagery rather than stating it directly.\n\nTelling: "She was nervous."\nShowing: "Her fingers drummed the tabletop. She glanced at the door, then back at her phone."\n\nEffect: More immersive and sophisticated. Trusts the reader to interpret.\n\nThis is the single most important technique for high-mark creative writing.`,
    },
    {
      id: 'ep2-17',
      front: 'Perspective and Attitude',
      back: `The writer\'s viewpoint on a topic and the feelings/opinions they convey.\n\nPerspective: Their angle or standpoint (e.g., a soldier\'s perspective on war vs a civilian\'s).\nAttitude: Their feelings - critical, admiring, nostalgic, ironic, angry.\n\nExam skill: In comparison questions, always compare perspectives AND how they are conveyed through methods.`,
    },
    {
      id: 'ep2-18',
      front: 'Rhetorical Techniques (for Transactional Writing)',
      back: `Persuasive methods for non-fiction writing:\n\nDARFOREST: Direct address, Alliteration, Rhetorical question, Facts, Opinions, Repetition, Emotive language, Statistics, Tricolon.\n\nExam tip: Don\'t just include these - use them purposefully. Quality over quantity. A well-placed rhetorical question is better than five crammed techniques.`,
    },
    {
      id: 'ep2-19',
      front: 'Dialogue in Creative Writing',
      back: `Speech between characters used to reveal personality, advance plot, or create tension.\n\nRules: New speaker = new line. Punctuation inside speech marks. Use speech verbs sparingly ("said" is fine).\n\nTips: Keep it brief and purposeful. What characters DON\'T say can be as powerful as what they do. Subtext (saying one thing, meaning another) shows sophistication.`,
    },
    {
      id: 'ep2-20',
      front: 'Ambitious Vocabulary',
      back: `Precise, carefully chosen words that elevate your writing beyond the everyday.\n\nNot: "The old house was scary."\nBetter: "The decrepit house loomed, its hollow windows like vacant eyes."\n\nKey principle: Choose words for PRECISION, not complexity. "Trudged" is better than "walked laboriously" because it is vivid and concise.\n\nExam tip: 5-10 well-chosen ambitious words across a piece is enough. Overdoing it sounds forced.`,
    },
  ],
}

export default deck
