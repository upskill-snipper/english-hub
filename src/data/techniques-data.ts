// @ts-nocheck
export interface Technique {
  id: string
  name: string
  category: string
  definition: string
  example: string
  effect: string
  howToAnalyse: string
}

export const techniques: Technique[] = [
  {
    id: 't-1',
    name: 'Metaphor',
    category: 'Language',
    definition: 'A comparison that says something IS something else, without "like" or "as."',
    example: '"All the world\'s a stage" - Shakespeare, As You Like It',
    effect:
      'Creates a vivid image and implies a deeper, more fundamental connection between two things than a simile would.',
    howToAnalyse:
      'Identify what is being compared. Explore what qualities are being transferred. Consider why the writer chose THIS comparison. Use: "The metaphor of X suggests..."',
  },
  {
    id: 't-2',
    name: 'Simile',
    category: 'Language',
    definition: 'A comparison using "like" or "as."',
    example: '"Her eyes were like two moons" - a direct visual comparison.',
    effect:
      'Makes descriptions more vivid and accessible by linking the unfamiliar to something the reader already understands.',
    howToAnalyse:
      'Look at what is being compared and WHY. The choice of comparison reveals the writer\'s attitude. Use: "The simile comparing X to Y suggests..."',
  },
  {
    id: 't-3',
    name: 'Personification',
    category: 'Language',
    definition:
      'Giving human qualities to something non-human (an object, animal, or abstract idea).',
    example:
      '"The wind howled in anger" - wind does not feel anger, but this makes it feel threatening.',
    effect:
      'Makes abstract ideas or natural forces feel alive, relatable, or threatening. Often creates atmosphere.',
    howToAnalyse:
      'Identify what is being personified and what human quality is given. Consider the effect: does it create sympathy, fear, beauty? Use: "By personifying X as Y, the writer suggests..."',
  },
  {
    id: 't-4',
    name: 'Alliteration',
    category: 'Sound',
    definition: 'Repetition of the same consonant sound at the start of nearby words.',
    example: '"The slimy snake slithered sideways" - repeated "s" sounds.',
    effect:
      'Creates rhythm and emphasis. Can create different moods depending on the sound: soft sounds = gentle; hard sounds = aggression.',
    howToAnalyse:
      'Name the repeated sound. Describe its quality (harsh, soft, explosive). Link to meaning. Use: "The alliterative \'s\' sounds create a sense of..."',
  },
  {
    id: 't-5',
    name: 'Sibilance',
    category: 'Sound',
    definition: 'Repetition of "s," "sh," or soft "c" sounds.',
    example: '"Silence settled like snow on the sleeping city."',
    effect: 'Creates a hushed, sinister, secretive, or soothing atmosphere depending on context.',
    howToAnalyse:
      'Note the sibilant sounds. Consider the mood - sinister? Peaceful? Secretive? Use: "The sibilance in this passage creates..."',
  },
  {
    id: 't-6',
    name: 'Plosive Sounds',
    category: 'Sound',
    definition: 'Hard consonant sounds: b, d, g, p, t, k.',
    example: '"The bitter, brutal cold bit through his bones."',
    effect:
      'Creates a harsh, aggressive, percussive quality. Often used to convey violence, anger, or discomfort.',
    howToAnalyse:
      'Identify the plosive consonants. Link the harsh sound to the content. Use: "The plosive sounds mirror the violence/harshness of..."',
  },
  {
    id: 't-7',
    name: 'Onomatopoeia',
    category: 'Sound',
    definition: 'A word that imitates the sound it describes.',
    example: '"The fire crackled and hissed."',
    effect: 'Creates an immersive sensory experience - the reader "hears" the sound.',
    howToAnalyse:
      'Identify the word. Say what sound it evokes. Link to atmosphere. Use: "The onomatopoeic \'crackled\' immerses the reader in..."',
  },
  {
    id: 't-8',
    name: 'Pathetic Fallacy',
    category: 'Language',
    definition:
      "Using weather or environment to reflect a character's mood or the story's atmosphere.",
    example: '"Dark clouds gathered as she received the terrible news."',
    effect:
      'Reinforces emotion without stating it directly. Creates atmosphere and mirrors internal states externally.',
    howToAnalyse:
      "Name the weather/setting detail. Link it to the character's emotion or the scene's mood. Use: \"The pathetic fallacy of X mirrors the character's...\"",
  },
  {
    id: 't-9',
    name: 'Oxymoron',
    category: 'Language',
    definition: 'Two contradictory words placed together.',
    example: '"A deafening silence" - silence cannot be deafening, yet we understand the meaning.',
    effect:
      'Highlights conflict, tension, complexity, or paradox. Shows that something contains contradictions.',
    howToAnalyse:
      'Identify the two opposing words. Explain the contradiction. Consider what it reveals. Use: "The oxymoron \'X Y\' captures the contradiction of..."',
  },
  {
    id: 't-10',
    name: 'Juxtaposition',
    category: 'Structure',
    definition: 'Placing two contrasting ideas, images, or characters side by side.',
    example: '"It was the best of times, it was the worst of times" - Dickens.',
    effect:
      'Forces the reader to compare and contrast. Highlights differences and creates dramatic impact.',
    howToAnalyse:
      'Identify the two contrasting elements. Explain what the contrast reveals. Use: "By juxtaposing X with Y, the writer highlights..."',
  },
  {
    id: 't-11',
    name: 'Hyperbole',
    category: 'Language',
    definition: 'Deliberate exaggeration for emphasis.',
    example: '"I\'ve told you a million times."',
    effect:
      'Conveys strong emotion, humour, or makes a point dramatically. Can be used for comic or serious effect.',
    howToAnalyse:
      "Identify the exaggeration. Explain what emotion or point it emphasises. Use: \"The hyperbolic 'X' emphasises the speaker's...\"",
  },
  {
    id: 't-12',
    name: 'Irony',
    category: 'Language',
    definition:
      'When the intended meaning is opposite to the literal meaning, or events contradict expectations.',
    example:
      'A fire station that burns down (situational). Calling a cruel person "charming" (verbal).',
    effect:
      'Creates humour, tension, or critique. Dramatic irony (when the audience knows more than a character) builds suspense.',
    howToAnalyse:
      'Identify the type (verbal, situational, dramatic). Explain what the gap between expectation and reality reveals. Use: "The irony of X highlights..."',
  },
  {
    id: 't-13',
    name: 'Symbolism',
    category: 'Language',
    definition: 'Using an object, colour, or image to represent a deeper meaning.',
    example: 'The chain in A Christmas Carol symbolises sin and greed.',
    effect:
      'Adds layers of meaning. Allows writers to communicate complex ideas through concrete images.',
    howToAnalyse:
      'Identify the symbol. Explain what it represents. Consider why the writer chose this symbol. Use: "X functions as a symbol of Y, suggesting..."',
  },
  {
    id: 't-14',
    name: 'Foreshadowing',
    category: 'Structure',
    definition: 'Hints or clues about what will happen later.',
    example: '"Little did he know, this would be his last journey."',
    effect:
      'Builds tension, anticipation, or dread. Creates dramatic irony when the reader spots the clue.',
    howToAnalyse:
      'Identify the hint. Explain what it foreshadows. Consider the effect on the reader. Use: "This foreshadows X, creating a sense of..."',
  },
  {
    id: 't-15',
    name: 'Rhetorical Question',
    category: 'Rhetoric',
    definition: 'A question asked for effect, not expecting an answer.',
    example: '"How long must we tolerate this injustice?"',
    effect:
      'Engages the reader, makes them think, implies the answer is obvious. Powerful in persuasive writing.',
    howToAnalyse:
      'Quote the question. Explain the implied answer. Consider the effect on the audience. Use: "The rhetorical question \'X?\' implies that..."',
  },
  {
    id: 't-16',
    name: 'Tricolon (Rule of Three)',
    category: 'Rhetoric',
    definition: 'A list of three words, phrases, or clauses.',
    example: '"Government of the people, by the people, for the people."',
    effect: 'Creates rhythm, makes ideas memorable, often builds to a climax.',
    howToAnalyse:
      'Quote all three elements. Note if there is a build/climax. Use: "The tricolon \'X, Y, Z\' creates a rhythmic emphasis on..."',
  },
  {
    id: 't-17',
    name: 'Anaphora',
    category: 'Rhetoric',
    definition: 'Repeating a word or phrase at the start of consecutive sentences or lines.',
    example: '"We shall fight on the beaches, we shall fight on the landing grounds..."',
    effect: 'Creates rhythm, emphasis, and emotional power. Builds momentum.',
    howToAnalyse:
      'Identify the repeated phrase. Count the repetitions. Link to purpose. Use: "The anaphoric repetition of \'X\' hammers home..."',
  },
  {
    id: 't-18',
    name: 'Emotive Language',
    category: 'Rhetoric',
    definition: 'Words chosen specifically to provoke an emotional response.',
    example: '"The helpless, innocent children were cruelly abandoned."',
    effect: "Manipulates the reader's feelings - sympathy, anger, fear, guilt.",
    howToAnalyse:
      "Identify the emotive words. Name the emotion triggered. Consider the writer's purpose. Use: \"The emotive adjective 'X' provokes feelings of...\"",
  },
  {
    id: 't-19',
    name: 'Semantic Field',
    category: 'Language',
    definition: 'A group of words related to the same theme or topic.',
    example: 'Battlefield, trenches, shells, marched = semantic field of war.',
    effect: 'Creates a sustained mood or subtly reinforces a theme running through the text.',
    howToAnalyse:
      'Identify 3+ words from the same field. Name the field. Link to theme. Use: "The semantic field of X pervades the passage, reinforcing the theme of..."',
  },
  {
    id: 't-20',
    name: 'Enjambment',
    category: 'Poetry',
    definition: 'A sentence running over from one line of poetry to the next without end-stopping.',
    example: 'A line ending mid-thought, continuing on the next line.',
    effect:
      'Creates momentum, urgency, or a sense of thoughts overflowing. Disrupts expected rhythm.',
    howToAnalyse:
      'Identify where the enjambment occurs. Consider what it mirrors in meaning. Use: "The enjambment here mirrors the speaker\'s overwhelming..."',
  },
  {
    id: 't-21',
    name: 'Caesura',
    category: 'Poetry',
    definition: 'A pause in the middle of a line of poetry, usually from punctuation.',
    example: '"I wandered lonely. Then I saw them."',
    effect: 'Disrupts rhythm, creates emphasis, can reflect hesitation or a shift in thought.',
    howToAnalyse:
      'Identify the pause and its position. Link to meaning. Use: "The caesura creates a pause that reflects..."',
  },
  {
    id: 't-22',
    name: 'Volta',
    category: 'Poetry',
    definition: 'A turning point in a poem where the tone, argument, or focus shifts.',
    example:
      'In a sonnet, the volta often comes at line 9 (Petrarchan) or line 13 (Shakespearean).',
    effect:
      'Creates contrast, surprise, or a new perspective. Often the most important moment in the poem.',
    howToAnalyse:
      'Identify where the shift occurs. Describe what changes. Use: "The volta at line X shifts from Y to Z, revealing..."',
  },
  {
    id: 't-23',
    name: 'Cyclical Structure',
    category: 'Structure',
    definition: 'A text that ends where it began, returning to the opening image or idea.',
    example: 'A Christmas Carol begins and ends with Scrooge - but he is transformed.',
    effect:
      'Creates a sense of completeness, inevitability, or can show how things have (or have not) changed.',
    howToAnalyse:
      'Identify the repeated element. Compare beginning and end. Use: "The cyclical structure suggests..."',
  },
  {
    id: 't-24',
    name: 'In Medias Res',
    category: 'Structure',
    definition: 'Starting a narrative in the middle of the action.',
    example: 'A story opening with a chase scene before explaining how it started.',
    effect:
      'Creates immediate tension and hooks the reader. Forces them to piece together the context.',
    howToAnalyse:
      'Note what is happening at the opening. Identify what information is withheld. Use: "By opening in medias res, the writer creates..."',
  },
  {
    id: 't-25',
    name: 'Direct Address',
    category: 'Rhetoric',
    definition: 'Speaking directly to the reader or audience using "you."',
    example: '"You know this is wrong. You have the power to change it."',
    effect:
      'Creates a personal, inescapable connection. Makes the argument feel directed at the individual reader.',
    howToAnalyse:
      'Quote the "you." Consider how it positions the reader. Use: "The direct address \'you\' creates a sense of personal..."',
  },
]

export default techniques
