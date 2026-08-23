// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'advanced-writing-techniques',
  title: 'Advanced Writing Techniques - 60 Cards',
  description: 'Sophisticated techniques for GCSE English Language creative and persuasive writing',
  category: 'Writing Techniques',
  board: 'All',
  cards: [
    {
      id: 'awt-1',
      front: 'Anaphora in Creative Writing',
      back: `Technique: Repeating a word or phrase at the start of successive sentences or clauses.\n\nEffect in creative writing: Creates rhythm, emphasis, and a building emotional intensity.\n\nExample: "The rain fell. The rain pooled. The rain consumed everything."\n\nWhen to use: For emphasis, to create a chant-like effect, to convey obsession or mounting emotion. Effective in poetry and descriptive prose.`,
    },
    {
      id: 'awt-2',
      front: 'Epistrophe in Creative Writing',
      back: `Technique: Repeating a word or phrase at the END of successive clauses.\n\nEffect: Creates circularity and emphasis. Makes ideas stick in the reader\'s mind.\n\nExample: "She wanted freedom. Freedom was her dream. Freedom was her life."\n\nWhen to use: To emphasise a key concept, to create a haunting or obsessive tone.`,
    },
    {
      id: 'awt-3',
      front: 'Chiasmus in Persuasive Writing',
      back: `Technique: Reversing grammatical structures for emphasis (A-B-B-A pattern).\n\nEffect: Creates balance, paradox, and memorable phrasing. Often used in persuasive speeches.\n\nExample: "Ask not what your country can do for you; ask what you can do for your country." (JFK)\n\nWhen to use: In persuasive writing to make a point unforgettable. Creates philosophical weight.`,
    },
    {
      id: 'awt-4',
      front: 'Antimetabole',
      back: `Technique: A form of chiasmus using the same words in reversed order.\n\nEffect: Creates a clever reversal that highlights contradiction or paradox.\n\nExample: "When the going gets tough, the tough get going."\n\nWhen to use: In persuasive writing for clever turnarounds. Makes slogans and mottos memorable.`,
    },
    {
      id: 'awt-5',
      front: 'Zeugma',
      back: `Technique: Using one word in two different senses, or applying a word to two parts of a sentence in different ways.\n\nEffect: Creates wit and unexpected connections. Can be comic or profound.\n\nExample: "She lost her heart and her car keys." (heart = love; car keys = literal object)\n\nWhen to use: For humour or clever word play. More common in persuasive writing.`,
    },
    {
      id: 'awt-6',
      front: 'Malapropism',
      back: `Technique: Mistakenly using a word similar in sound to the intended word, but with a completely different meaning.\n\nEffect: Creates comedy and reveals character. Shows education level or ignorance.\n\nExample: "Texas has a lot of electrical votes." (electoral vs electrical)\n\nWhen to use: To create humorous character voice, to reveal a character\'s limited education or pretension.`,
    },
    {
      id: 'awt-7',
      front: 'Pun (in creative writing)',
      back: `Technique: A play on words exploiting multiple meanings.\n\nEffect: Creates humour, wordplay, and cleverness. Can be witty or groan-worthy.\n\nExample: "Time flies like an arrow. Fruit flies like a banana."\n\nWhen to use: For light-hearted tone, character voice, or to add personality. Overuse can feel forced.`,
    },
    {
      id: 'awt-8',
      front: 'Allusion (in creative writing)',
      back: `Technique: Indirect reference to another text, person, or historical event.\n\nEffect: Adds layers of meaning. Assumes reader knowledge and creates connection.\n\nExample: "He was her Achilles heel." (reference to Achilles\'s vulnerability)\n\nWhen to use: To add sophistication and depth. Assumes reader familiarity with the reference.`,
    },
    {
      id: 'awt-9',
      front: 'Innuendo',
      back: `Technique: Hinting at something without stating it directly. Often negative or suggestive.\n\nEffect: Creates tension, mystery, or humorous double meaning.\n\nExample: "I\'m sure he\'s a talented musician... in his bedroom." (suggestive of amateur)\n\nWhen to use: For subtle criticism, humour, or to create tension. Requires reader to read between lines.`,
    },
    {
      id: 'awt-10',
      front: 'Irony in Persuasive Writing',
      back: `Three types:\n1. Verbal: saying the opposite of what you mean ("Oh, great, another Monday.")\n2. Situational: when reality contradicts expectations (fire station burns)\n3. Dramatic: audience knows something characters don\'t\n\nEffect in persuasion: Creates wit and highlights contradiction or hypocrisy. Makes reader engage actively.`,
    },
    {
      id: 'awt-11',
      front: 'Sarcasm',
      back: `Technique: A form of verbal irony that uses cutting humour to mock or criticise.\n\nEffect: Sharp, often mean-spirited wit. Can alienate or amuse readers.\n\nExample: "Oh sure, let\'s just cut the budget for schools. What could go wrong?"\n\nWhen to use: In persuasive writing to criticise an opposing view. Risk: Can seem mean-spirited.`,
    },
    {
      id: 'awt-12',
      front: 'Colloquialism',
      back: `Technique: Using informal, conversational language or slang.\n\nEffect: Makes writing feel natural, authentic, and relatable. Creates character voice.\n\nExample: "I\'m gonna grab some brekkie before work." (gonna, brekkie)\n\nWhen to use: In character dialogue, first-person narratives, or persuasive writing aimed at younger audiences.`,
    },
    {
      id: 'awt-13',
      front: 'Register Shift (Tonal Variation)',
      back: `Technique: Deliberately changing the formality level (register) of language.\n\nEffect: Creates contrast, humour, or impact. Shows range and sophistication.\n\nExample: "In the context of contemporary fiscal policy, we are, frankly, totally broke." (formal then slang)\n\nWhen to use: To create comedic or dramatic effect. To mirror a character\'s emotional state or intelligence level.`,
    },
    {
      id: 'awt-14',
      front: 'Antithesis in Persuasive Writing',
      back: `Technique: Placing contrasting ideas side by side.\n\nEffect: Highlights differences and creates balance. Makes the contrast unforgettable.\n\nExample: "It was the best of times, it was the worst of times."\n\nWhen to use: In persuasive writing to emphasise opposing viewpoints and then refute one. Creates philosophical weight.`,
    },
    {
      id: 'awt-15',
      front: 'Asyndetic Structure',
      back: `Technique: Omitting conjunctions (and, or, but) between items in a list.\n\nEffect: Creates pace, urgency, and an overwhelming sense of accumulation.\n\nExample: "He ran, stumbled, fell, lay still."\n\nWhen to use: In creative writing for fast-paced scenes. In persuasive writing for impactful lists.`,
    },
    {
      id: 'awt-16',
      front: 'Syndetic Structure',
      back: `Technique: Including conjunctions between every item in a list.\n\nEffect: Slows pace, makes the list feel endless or childlike, emphasises each item.\n\nExample: "She packed her bag and her books and her lunch and her coat."\n\nWhen to use: To suggest monotony, childlike voice, or when each item deserves emphasis.`,
    },
    {
      id: 'awt-17',
      front: 'Accretion (Cumulative Style)',
      back: `Technique: Building a sentence or description through the addition of details.\n\nEffect: Creates immersion and sensory richness. Reader feels surrounded by detail.\n\nExample: "The house, old and creaking, with broken shutters and peeling paint, stood abandoned."\n\nWhen to use: In descriptive writing to create atmosphere. Each detail adds layers.`,
    },
    {
      id: 'awt-18',
      front: 'Parallelism',
      back: `Technique: Using matching grammatical structures for similar ideas.\n\nEffect: Creates balance, rhythm, and makes ideas memorable.\n\nExample: "She came to praise, not to criticise. She came to build, not to destroy."\n\nWhen to use: In persuasive writing for emphasis. In all writing for elegance and clarity.`,
    },
    {
      id: 'awt-19',
      front: 'Antonym Juxtaposition',
      back: `Technique: Placing words with opposite meanings next to each other.\n\nEffect: Highlights contradiction and creates impact.\n\nExample: "wise fool," "bittersweet," "deafening silence."\n\nWhen to use: To convey complexity or paradox. Creates philosophical or emotional depth.`,
    },
    {
      id: 'awt-20',
      front: 'Bathos',
      back: `Technique: Dropping from the serious or elevated to the trivial or absurd.\n\nEffect: Creates humour or shows the ridiculous contrast between expectation and reality.\n\nExample: "He survived the war, the crash, and the surgery. But he couldn\'t survive his mother-in-law."\n\nWhen to use: For comedic effect. Can undermine seriousness if unintentional.`,
    },
    {
      id: 'awt-21',
      front: 'Metonymy',
      back: `Technique: Substituting the name of something with something closely associated with it.\n\nEffect: Creates sophisticated language and indirect reference.\n\nExample: "The White House announced..." (White House = the President and advisors)\n\nWhen to use: In persuasive and formal writing. Shows linguistic sophistication.`,
    },
    {
      id: 'awt-22',
      front: 'Synecdoche',
      back: `Technique: A part represents the whole, or the whole represents a part.\n\nEffect: Creates concise, evocative language.\n\nExample: "All hands on deck!" (hands = sailors/people)\n"Hollywood is obsessed with remakes." (Hollywood = the film industry)\n\nWhen to use: For concise, vivid language. More common in poetry but effective in prose.`,
    },
    {
      id: 'awt-23',
      front: 'Hendiadys',
      back: `Technique: Expressing a single idea using two words joined by "and" instead of using one word modified by an adjective.\n\nEffect: Creates emphasis and rhythmic quality.\n\nExample: "nice and warm" instead of "warmly nice"\n"tired and emotional" instead of "emotionally tired"\n\nWhen to use: In conversational or colloquial writing. Adds colloquial flavour.`,
    },
    {
      id: 'awt-24',
      front: 'Litotes (Understatement)',
      back: `Technique: Expressing something as an affirmative by denying its opposite.\n\nEffect: Creates irony, wit, and often humour.\n\nExample: "That\'s not bad!" (meaning it\'s good) "She\'s no dummy." (meaning she\'s smart)\n\nWhen to use: For British humour. Creates sophisticated understatement.`,
    },
    {
      id: 'awt-25',
      front: 'Hyperbole in Persuasive Writing',
      back: `Technique: Extreme exaggeration.\n\nEffect: Emphasises a point, creates humour, conveys strong emotion.\n\nExample: "I\'ve told you a million times!" or "This is the worst day of my entire life!"\n\nWhen to use: In persuasive writing to emphasise impact. In character dialogue to show personality.`,
    },
    {
      id: 'awt-26',
      front: 'Rhetorical Question in Persuasion',
      back: `Technique: Asking a question where the answer is obvious or implied.\n\nEffect: Engages reader, makes them think, implies the answer without stating it.\n\nExample: "Why should we accept a world of inequality?" (Implies: we shouldn\'t.)\n\nWhen to use: In persuasive writing to move reader to action or agreement. Very effective opening.`,
    },
    {
      id: 'awt-27',
      front: 'Exclamatory Sentences for Emphasis',
      back: `Technique: Using sentences with "!" instead of periods.\n\nEffect: Conveys excitement, anger, passion, or urgency.\n\nExample: "This is outrageous! We must act now!"\n\nWhen to use: In persuasive writing sparingly for impact. Overuse loses power. In character voice for emotion.`,
    },
    {
      id: 'awt-28',
      front: 'Fragment (Minor Sentence) for Effect',
      back: `Technique: Using an incomplete sentence deliberately, NOT as an error.\n\nEffect: Creates impact, emphasis, or mirrors disrupted thought.\n\nExample: "Silence. Nothing but silence."\n\nWhen to use: In creative writing for dramatic effect. Signal clearly it is intentional, not careless.`,
    },
    {
      id: 'awt-29',
      front: 'Imperative Sentences in Persuasion',
      back: `Technique: Direct commands addressing the reader.\n\nEffect: Creates urgency, directness, and a sense of action.\n\nExample: "Don\'t stand by. Act now. Change the world."\n\nWhen to use: In persuasive writing to mobilise reader action. Can be powerful but feels bossy if overused.`,
    },
    {
      id: 'awt-30',
      front: 'Direct Address',
      back: `Technique: Speaking directly to the reader using "you."\n\nEffect: Creates personal connection and makes argument inescapable.\n\nExample: "You know this is wrong. You feel the injustice. You can change it."\n\nWhen to use: In persuasive writing for emotional engagement. Creates intimacy.`,
    },
    {
      id: 'awt-31',
      front: 'Foreshadowing',
      back: `Technique: Hinting at future events without revealing them.\n\nEffect: Creates tension, suspense, and a sense of inevitability.\n\nExample: "Little did she know, this decision would change everything."\n\nWhen to use: In creative/narrative writing to build tension and anticipation.`,
    },
    {
      id: 'awt-32',
      front: 'Flashback',
      back: `Technique: Interrupting the present narrative to show past events.\n\nEffect: Provides context, explains character motivation, creates structure.\n\nExample: "As he drove past the old house, memories flooded back to his childhood..."\n\nWhen to use: In narrative writing to reveal character backstory or explain present circumstances.`,
    },
    {
      id: 'awt-33',
      front: 'Pacing: Short Sentences',
      back: `Effect: Creates urgency, tension, impact. Makes the reader quicken pace mentally.\n\nWhen to use: In action scenes, moments of crisis, or to emphasise important points.\n\nExample: "He ran. His heart pounded. The door slammed. He was trapped."\n\nCombination: Vary with longer sentences for balance.`,
    },
    {
      id: 'awt-34',
      front: 'Pacing: Long Sentences',
      back: `Effect: Creates complexity, reflection, or overwhelm. Slows the reader down.\n\nWhen to use: In descriptive passages, introspective moments, or to convey exhaustion.\n\nExample: "The endless, winding path, bordered by ancient trees whose branches hung heavy with moss and shadow, seemed to lead nowhere at all."\n\nCombination: Vary with short sentences for contrast.`,
    },
    {
      id: 'awt-35',
      front: 'White Space (Paragraph Breaks)',
      back: `Effect: Creates emphasis, pause, or isolation. Gives the reader a moment to absorb.\n\nWhen to use: Before an important revelation, after an emotional moment, or for dramatic effect.\n\nExample: Breaking a paragraph into a single sentence, then a blank line, creates maximum impact.`,
    },
    {
      id: 'awt-36',
      front: 'Repetition for Emphasis',
      back: `Effect: Hammers home a point, creates rhythm, builds intensity.\n\nWhen to use: In persuasive writing, poetry, or when a concept must be remembered.\n\nExample: "No. Never. Not now. Not ever."\n\nRisk: Overuse feels tedious. Less is more.`,
    },
    {
      id: 'awt-37',
      front: 'Variation for Contrast',
      back: `Effect: Disrupting an established pattern creates surprise and emphasis.\n\nWhen to use: After establishing a rhythm, break it deliberately for impact.\n\nExample: "He walked. He talked. He smiled. Then he vanished."\n\nThe final short, different sentence stands out.`,
    },
    {
      id: 'awt-38',
      front: 'Sensory Language: Sight',
      back: `Effect: Creates visual imagery and atmosphere.\n\nWhen to use: In descriptive writing to help reader "see" the scene.\n\nExample: "The crimson sunset bled across the sky, casting long shadows that swallowed the world."\n\nVary colours and visual descriptors for richness.`,
    },
    {
      id: 'awt-39',
      front: 'Sensory Language: Sound',
      back: `Effect: Creates audio atmosphere and mood.\n\nWhen to use: To immerse reader in auditory environment.\n\nExample: "The deafening silence was broken only by the rhythmic ticking of the clock."\n\nCombine with sound devices (alliteration, onomatopoeia) for musicality.`,
    },
    {
      id: 'awt-40',
      front: 'Sensory Language: Touch',
      back: `Effect: Creates physical, tactile connection.\n\nWhen to use: When proximity and physicality matter.\n\nExample: "The rough bark scratched her palms as she gripped the tree."\n\nTemperature, texture, pain, pressure all engage the tactile sense.`,
    },
    {
      id: 'awt-41',
      front: 'Sensory Language: Taste',
      back: `Effect: Creates visceral, intimate sensation.\n\nWhen to use: When describing food, poison, or metaphorically (bitter experience, sweet victory).\n\nExample: "The bitterness of disappointment lingered on his tongue."\n\nOften used metaphorically for emotions.`,
    },
    {
      id: 'awt-42',
      front: 'Sensory Language: Smell',
      back: `Effect: Powerful emotional trigger. Smell activates memory.\n\nWhen to use: To connect character to environment or to trigger nostalgia.\n\nExample: "The sweet, earthy smell of rain transported her back to childhood."\n\nSmell is underused but powerfully evocative.`,
    },
    {
      id: 'awt-43',
      front: 'Dialogue: Dialogue Tags',
      back: `Technique: The words that identify the speaker ("he said," "she whispered").\n\nOptions:\n• Neutral: said, asked\n• Emotional: whispered, shouted, snapped, murmured\n• Physical: laughed, gasped, sighed\n\nWhen to use: Vary tags to show emotion without stating it. "said" is invisible; emotional tags add characterisation.`,
    },
    {
      id: 'awt-44',
      front: 'Dialogue: Interior Monologue',
      back: `Technique: A character\'s unspoken thoughts, shown as if the reader is inside their mind.\n\nEffect: Creates intimacy and reveals character\'s true feelings versus what they say.\n\nExample: "You\'re right," she said. But she thought: You\'re completely wrong, and I despise you.\n\nWhen to use: To show the gap between truth and performance. Creates dramatic irony.`,
    },
    {
      id: 'awt-45',
      front: 'Dialogue: Silence',
      back: `Technique: What is NOT said is sometimes more powerful than what is.\n\nEffect: Creates tension and suggests unspoken emotion.\n\nExample: "Are you leaving?" She didn\'t answer.\n\nWhen to use: To convey hurt, defiance, or overwhelming emotion that words can\'t capture.`,
    },
    {
      id: 'awt-46',
      front: 'Form Variation: Stream of Consciousness',
      back: `Technique: Representing the character\'s thoughts in a chaotic, unstructured flow.\n\nEffect: Immerses reader in character\'s mental state. Can feel disordered or authentic.\n\nExample: Interior monologues without punctuation or logical order.\n\nWhen to use: To show mental breakdown, altered states, or deep introspection.`,
    },
    {
      id: 'awt-47',
      front: 'Form Variation: Letters/Diary',
      back: `Technique: Presenting narrative as letter or diary entries.\n\nEffect: Creates intimacy and first-person authenticity.\n\nExample: "Dear diary, today was the worst..." or "My dear,"\n\nWhen to use: To create epistolary fiction. Adds variety to narrative structure.`,
    },
    {
      id: 'awt-48',
      front: 'Form Variation: Second Person',
      back: `Technique: Narrating using "you" as if addressing the reader directly.\n\nEffect: Makes reader complicit in the story. Creates immediacy.\n\nExample: "You wake up. You don\'t remember how you got here."\n\nWhen to use: Sparingly for shock value or to implicate reader in a decision.`,
    },
    {
      id: 'awt-49',
      front: 'Symbolism in Creative Writing',
      back: `Technique: An object, colour, or action representing a deeper meaning.\n\nEffect: Adds layers and allows interpretation beyond the literal.\n\nExample: A broken mirror = shattered identity, fractured relationships.\n\nWhen to use: Consistently throughout narrative so symbol is recognised.`,
    },
    {
      id: 'awt-50',
      front: 'Motif in Creative Writing',
      back: `Technique: A recurring image, phrase, or concept throughout the text.\n\nEffect: Reinforces theme and creates structural cohesion.\n\nExample: Repeated references to rain could symbolise cleansing or sadness.\n\nWhen to use: Plant early, develop throughout, resolve or subvert at end.`,
    },
    {
      id: 'awt-51',
      front: 'Tone: Nostalgic',
      back: `Effect: Reader feels wistful longing for the past.\n\nLanguage markers: "remember," "those days," references to "better times," idealised past.\n\nWhen to use: In reflective narrative or when a character longs for what was.\n\nExample: "She remembered summer afternoons that seemed to last forever..."`,
    },
    {
      id: 'awt-52',
      front: 'Tone: Ominous',
      back: `Effect: Sense of impending danger or dread.\n\nLanguage markers: Dark imagery, foreboding language, disquieting atmosphere.\n\nWhen to use: In thriller or horror writing, or before a revelation.\n\nExample: "The sky darkened. Even the birds fell silent."`,
    },
    {
      id: 'awt-53',
      front: 'Tone: Ironic',
      back: `Effect: Gap between what is said/appears and what is true.\n\nLanguage markers: Understatement, sarcasm, reversal of expectation.\n\nWhen to use: To reveal hypocrisy, create wit, or comment on situation.\n\nExample: "How wonderful. Another delay." (when delays are bad)`,
    },
    {
      id: 'awt-54',
      front: 'Tone: Bitter',
      back: `Effect: Reader feels resentment, anger, disappointment.\n\nLanguage markers: Harsh vocabulary, complaints, sarcasm, dark humour.\n\nWhen to use: When character or narrator has been wronged or is disillusioned.\n\nExample: "So much for promises. So much for love."`,
    },
    {
      id: 'awt-55',
      front: 'Tone: Hopeful',
      back: `Effect: Reader feels optimism and possibility.\n\nLanguage markers: Light imagery, forward-looking language, possibility.\n\nWhen to use: In uplifting or redemptive narratives.\n\nExample: "But maybe, just maybe, tomorrow would be different."`,
    },
    {
      id: 'awt-56',
      front: 'Tone: Detached/Objective',
      back: `Effect: Irony or critique without emotional investment apparent.\n\nLanguage markers: Factual, unemotional language, passive voice, clinical description.\n\nWhen to use: To highlight problems or absurdities by refusing to acknowledge them emotionally.\n\nExample: "He murdered his wife. Then he made coffee."`,
    },
    {
      id: 'awt-57',
      front: 'Ambiguity in Endings',
      back: `Technique: Leaving the ending open to interpretation.\n\nEffect: Allows reader to create their own meaning. Creates discussion.\n\nWhen to use: In literary fiction or when exploring themes of uncertainty.\n\nExample: "She smiled. He never knew why."\n\nRisk: Some readers may feel unsatisfied if too unclear.`,
    },
    {
      id: 'awt-58',
      front: 'Twist Endings',
      back: `Technique: Revealing that the situation is different from what appeared.\n\nEffect: Surprises reader and recontextualises everything that came before.\n\nWhen to use: In mystery, thriller, or short story writing.\n\nRisk: Must be foreshadowed subtly or will feel unearned.`,
    },
    {
      id: 'awt-59',
      front: 'Cyclical Structure (Return)',
      back: `Technique: Ending where the narrative began, suggesting completion or inevitability.\n\nEffect: Creates sense of closure or suggests nothing has changed.\n\nWhen to use: To emphasise theme or to create tragic irony (character ends up where they started).\n\nExample: Story opens on a Tuesday morning. Ends on a Tuesday morning (but the character has changed).`,
    },
    {
      id: 'awt-60',
      front: 'Authorial Intrusion',
      back: `Technique: The narrator directly addresses the reader or comments on the story.\n\nEffect: Creates intimacy but can disrupt immersion.\n\nWhen to use: In literary fiction, humorous writing, or to directly engage reader.\n\nExample: "Dear reader, you may wonder why she did this. I do too."\n\nRisk: Can feel dated or heavy-handed if not done carefully.`,
    },
  ],
}

export default deck
