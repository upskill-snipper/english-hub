// @ts-nocheck
export interface StarterActivity {
  id: string
  type: string
  title: string
  text?: string
  examBoard: string[]
  yearGroup: string[]
  content: string
  instructions: string
  answers?: string
  duration: number
  skills: string[]
}

export const STARTER_ACTIVITY_TYPES = [
  'Quote of the Day',
  'Vocabulary Challenge',
  'Inference Puzzle',
  'Grammar Fix',
  'Creative Prompt',
  'Comparison Quick-fire',
  'Character Hot Seat',
  'Timeline Sort',
  'Theme Match',
  'Exam Q Unpick',
  'Retrieval Practice',
  'Reading Skill',
  'Writing Warm-up',
] as const

export type StarterActivityType = (typeof STARTER_ACTIVITY_TYPES)[number]

export const SET_TEXTS = [
  'general',
  'Macbeth',
  'An Inspector Calls',
  'A Christmas Carol',
  'Romeo and Juliet',
  'Lord of the Flies',
  'Jekyll and Hyde',
  'Animal Farm',
  'Power and Conflict Poetry',
  'Love and Relationships Poetry',
] as const

export const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'] as const

export const YEAR_GROUPS = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'] as const

export const SKILLS = [
  'Analysis',
  'Inference',
  'Vocabulary',
  'Grammar',
  'Creative Writing',
  'Comparison',
  'Empathy',
  'Sequencing',
  'Theme Identification',
  'Exam Technique',
  'Quotation Selection',
  'Structural Analysis',
  'Language Analysis',
  'Planning',
  'Evaluation',
] as const

export const starterActivities: StarterActivity[] = [
  // ──────────────────────────────────────────────
  // QUOTE OF THE DAY (5)
  // ──────────────────────────────────────────────
  {
    id: 'qotd-1',
    type: 'Quote of the Day',
    title: 'Macbeth - Ambition',
    text: 'Macbeth',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      '"I have no spur to prick the sides of my intent, but only vaulting ambition, which o\'erleaps itself and falls on the other."',
    instructions:
      "Write 2-3 sentences analysing this quotation. Consider: What does the horse metaphor suggest about Macbeth's ambition? What is Shakespeare's message about unchecked ambition?",
    answers:
      'The metaphor of a horse leaping too high and falling suggests ambition that exceeds ability leads to destruction. "Vaulting" implies recklessness, while "falls on the other" foreshadows Macbeth\'s downfall. Shakespeare warns that ambition without moral restraint is self-defeating.',
    duration: 3,
    skills: ['Analysis', 'Quotation Selection', 'Language Analysis'],
  },
  {
    id: 'qotd-2',
    type: 'Quote of the Day',
    title: 'AIC - Responsibility',
    text: 'An Inspector Calls',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      '"We don\'t live alone. We are members of one body. We are responsible for each other."',
    instructions:
      'Write 2-3 sentences analysing this quotation. Who says it? What is the message Priestley conveys through these words?',
    answers:
      'The Inspector delivers this as his final speech - it encapsulates Priestley\'s socialist message. The repetition of "we" creates collective responsibility. "Members of one body" is a biblical allusion reinforcing moral duty.',
    duration: 3,
    skills: ['Analysis', 'Quotation Selection'],
  },
  {
    id: 'qotd-3',
    type: 'Quote of the Day',
    title: 'ACC - Transformation',
    text: 'A Christmas Carol',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content: '"I will honour Christmas in my heart, and try to keep it all the year."',
    instructions:
      'Write 2-3 sentences analysing this quotation. What does "honour" suggest? How does this show Scrooge\'s transformation?',
    answers:
      'The verb "honour" elevates Christmas from mere celebration to sacred duty. "Keep it all the year" implies lasting change, not seasonal kindness. Dickens suggests true redemption requires permanent commitment to generosity.',
    duration: 3,
    skills: ['Analysis', 'Language Analysis'],
  },
  {
    id: 'qotd-4',
    type: 'Quote of the Day',
    title: 'Romeo and Juliet - Love and Fate',
    text: 'Romeo and Juliet',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content: '"A pair of star-cross\'d lovers take their life."',
    instructions:
      'Write 2-3 sentences analysing this quotation from the Prologue. What does "star-cross\'d" mean? Why does Shakespeare reveal the ending at the start?',
    answers:
      '"Star-cross\'d" means fated by the stars - suggesting their love was doomed from the start. Revealing the ending creates dramatic irony, making the audience watch helplessly. Shakespeare questions whether we have free will or are controlled by fate.',
    duration: 3,
    skills: ['Analysis', 'Quotation Selection', 'Language Analysis'],
  },
  {
    id: 'qotd-5',
    type: 'Quote of the Day',
    title: 'LOTF - Civilisation',
    text: 'Lord of the Flies',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content: '"Maybe there is a beast... maybe it\'s only us."',
    instructions:
      'Write 2-3 sentences analysing this quotation. Who says it? What does Golding suggest about the nature of evil?',
    answers:
      'Simon speaks this line, showing his philosophical insight. The ellipsis creates a pause, as if he is reluctantly realising the truth. Golding suggests evil is not external but innate - "the beast" is a metaphor for humanity\'s capacity for savagery.',
    duration: 3,
    skills: ['Analysis', 'Inference', 'Language Analysis'],
  },

  // ──────────────────────────────────────────────
  // VOCABULARY CHALLENGE (5)
  // ──────────────────────────────────────────────
  {
    id: 'vocab-1',
    type: 'Vocabulary Challenge',
    title: 'Macbeth Key Vocabulary',
    text: 'Macbeth',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content: '1. Regicide\n2. Tyranny\n3. Hubris\n4. Soliloquy\n5. Equivocation',
    instructions: 'Define each word and use it in a sentence about Macbeth.',
    answers:
      "1. Regicide - the killing of a king. Macbeth commits regicide when he murders Duncan.\n2. Tyranny - cruel and oppressive rule. Macbeth's tyranny grows as his paranoia increases.\n3. Hubris - excessive pride leading to downfall. Macbeth's hubris makes him believe he is invincible.\n4. Soliloquy - a speech revealing inner thoughts. Macbeth's \"Is this a dagger\" soliloquy reveals his guilt.\n5. Equivocation - deliberately ambiguous language. The witches use equivocation to mislead Macbeth.",
    duration: 4,
    skills: ['Vocabulary', 'Analysis'],
  },
  {
    id: 'vocab-2',
    type: 'Vocabulary Challenge',
    title: 'Gothic Literature Vocabulary',
    text: 'Jekyll and Hyde',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content: '1. Duality\n2. Repression\n3. Transgression\n4. Atavistic\n5. Physiognomy',
    instructions: 'Define each word and explain how it connects to Jekyll and Hyde.',
    answers:
      "1. Duality - having two natures. Jekyll and Hyde embody the duality of good and evil.\n2. Repression - suppressing desires. Victorian repression forces Jekyll to create Hyde.\n3. Transgression - breaking rules or moral boundaries. Hyde's violence is a transgression against society.\n4. Atavistic - reverting to primitive behaviour. Hyde is described in atavistic terms.\n5. Physiognomy - judging character from appearance. Victorians believed physiognomy revealed inner nature.",
    duration: 4,
    skills: ['Vocabulary', 'Analysis'],
  },
  {
    id: 'vocab-3',
    type: 'Vocabulary Challenge',
    title: 'Analytical Vocabulary',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content: '1. Connotes\n2. Juxtaposition\n3. Foreshadowing\n4. Symbolism\n5. Pathetic fallacy',
    instructions:
      'Define each term and write a sentence using it to analyse any text you have studied.',
    answers:
      '1. Connotes - implies or suggests a deeper meaning.\n2. Juxtaposition - placing two contrasting elements side by side.\n3. Foreshadowing - hinting at future events.\n4. Symbolism - using objects to represent abstract ideas.\n5. Pathetic fallacy - using weather/nature to reflect mood.',
    duration: 4,
    skills: ['Vocabulary', 'Language Analysis'],
  },
  {
    id: 'vocab-4',
    type: 'Vocabulary Challenge',
    title: 'AIC Social Context Vocabulary',
    text: 'An Inspector Calls',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content: '1. Capitalism\n2. Socialism\n3. Patriarchal\n4. Oligarchy\n5. Philanthropy',
    instructions:
      'Define each word and explain how it connects to the themes or characters of An Inspector Calls.',
    answers:
      "1. Capitalism - economic system driven by private profit. Mr Birling represents capitalism.\n2. Socialism - belief in shared responsibility. The Inspector represents Priestley's socialist views.\n3. Patriarchal - male-dominated society. Birling controls his family in a patriarchal manner.\n4. Oligarchy - rule by a small, wealthy group. The Birlings represent the Edwardian oligarchy.\n5. Philanthropy - charitable giving. Priestley suggests philanthropy alone is insufficient.",
    duration: 4,
    skills: ['Vocabulary', 'Analysis'],
  },
  {
    id: 'vocab-5',
    type: 'Vocabulary Challenge',
    title: 'Poetry Terminology',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content: '1. Enjambment\n2. Caesura\n3. Volta\n4. Sibilance\n5. Stanza',
    instructions: 'Define each term. For each, explain the effect it might create in a poem.',
    answers:
      '1. Enjambment - a sentence running over line breaks. Creates urgency or flowing movement.\n2. Caesura - a pause mid-line. Creates tension, emphasises what follows.\n3. Volta - a turning point in a poem. Shifts tone or argument.\n4. Sibilance - repetition of "s" sounds. Can create menace, softness, or whispering.\n5. Stanza - a grouped set of lines. Organises ideas, like paragraphs.',
    duration: 4,
    skills: ['Vocabulary', 'Structural Analysis'],
  },

  // ──────────────────────────────────────────────
  // INFERENCE PUZZLE (5)
  // ──────────────────────────────────────────────
  {
    id: 'inf-1',
    type: 'Inference Puzzle',
    title: 'ACC - Stave One Extract',
    text: 'A Christmas Carol',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!"',
    instructions:
      '1. What can you infer about Scrooge\'s character from this description?\n2. Why does Dickens use so many adjectives in a list?\n3. What might "grindstone" suggest about how Scrooge treats others?',
    answers:
      '1. Scrooge is miserly, aggressive, and morally corrupt - "sinner" shows spiritual failing.\n2. The long list (asyndetic listing) overwhelms the reader, mirroring how oppressive Scrooge is.\n3. "Grindstone" implies he works people relentlessly and painfully, grinding them down.',
    duration: 3,
    skills: ['Inference', 'Language Analysis'],
  },
  {
    id: 'inf-2',
    type: 'Inference Puzzle',
    title: "Macbeth - Lady Macbeth's Words",
    text: 'Macbeth',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      '"Come, you spirits that tend on mortal thoughts, unsex me here, and fill me from the crown to the toe top-full of direst cruelty!"',
    instructions:
      '1. What can you infer about Lady Macbeth\'s state of mind?\n2. Why does she ask to be "unsexed"?\n3. What does "crown to the toe" suggest about the cruelty she desires?',
    answers:
      '1. She is determined but needs supernatural help - suggesting she knows the murder is unnatural.\n2. She equates femininity with compassion; she must reject her gender to be capable of violence. This reflects Jacobean gender expectations.\n3. She wants cruelty to consume her entirely - no part of her should feel remorse.',
    duration: 3,
    skills: ['Inference', 'Analysis', 'Language Analysis'],
  },
  {
    id: 'inf-3',
    type: 'Inference Puzzle',
    title: 'Unseen Fiction Extract',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content:
      'The door creaked. She pressed her back flat against the cold wall and held her breath. Footsteps - slow, deliberate - echoed from the corridor. Then silence. A silence so loud it screamed.',
    instructions:
      '1. What can you infer about the character\'s emotions?\n2. What effect does the short sentence "Then silence" create?\n3. How is the final sentence an oxymoron, and what effect does it have?',
    answers:
      '1. She is terrified - "held her breath" and "pressed her back flat" show fear and vulnerability.\n2. The short sentence mirrors the sudden stop, creating tension and suspense.\n3. "Silence so loud it screamed" is an oxymoron - it shows the silence is unbearable and frightening, not peaceful.',
    duration: 3,
    skills: ['Inference', 'Language Analysis'],
  },
  {
    id: 'inf-4',
    type: 'Inference Puzzle',
    title: 'LOTF - Simon and the Beast',
    text: 'Lord of the Flies',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      '"Fancy thinking the Beast was something you could hunt and kill!" said the head. "You knew, didn\'t you? I\'m part of you?"',
    instructions:
      '1. Who or what is speaking? What can you infer about its nature?\n2. What does "part of you" suggest about Golding\'s message?\n3. Why is the word "Fancy" significant?',
    answers:
      '1. The Lord of the Flies (pig\'s head) speaks - it represents the evil within humanity, not a real creature.\n2. "Part of you" suggests evil is innate, not external. Golding argues savagery lives inside everyone.\n3. "Fancy" is mocking and dismissive - it belittles the boys\' attempts to externalise evil.',
    duration: 3,
    skills: ['Inference', 'Analysis'],
  },
  {
    id: 'inf-5',
    type: 'Inference Puzzle',
    title: 'Romeo and Juliet - The Balcony',
    text: 'Romeo and Juliet',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      '"What\'s in a name? That which we call a rose by any other name would smell as sweet."',
    instructions:
      "1. What can you infer about Juliet's feelings about the feud?\n2. What does the rose metaphor suggest?\n3. Why is this speech ironic given what happens later?",
    answers:
      "1. Juliet sees the feud as meaningless - names are arbitrary labels, not identity.\n2. The rose metaphor suggests Romeo's true nature (sweet, beautiful) exists regardless of his surname.\n3. It is ironic because their names ultimately cause their deaths - names do matter in Verona.",
    duration: 3,
    skills: ['Inference', 'Language Analysis', 'Analysis'],
  },

  // ──────────────────────────────────────────────
  // GRAMMAR FIX (5)
  // ──────────────────────────────────────────────
  {
    id: 'gram-1',
    type: 'Grammar Fix',
    title: 'Common Essay Errors',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'],
    content:
      '1. Shakespeare shows how macbeth is effected by guilt.\n2. The writer uses alot of imagery to create tension.\n3. This shows that their really scared of the dark.\n4. Dickens conveys Scrooges transformation threw the ghosts.\n5. The poem has a really big affect on the reader.',
    instructions:
      'Find and correct the error(s) in each sentence. Rewrite each sentence correctly.',
    answers:
      '1. "macbeth" → "Macbeth" (proper noun), "effected" → "affected"\n2. "alot" → "a lot"\n3. "their" → "they\'re" (they are)\n4. "Scrooges" → "Scrooge\'s" (possessive apostrophe), "threw" → "through"\n5. "affect" → "effect" (noun needed, not verb)',
    duration: 3,
    skills: ['Grammar'],
  },
  {
    id: 'gram-2',
    type: 'Grammar Fix',
    title: 'Apostrophe Errors',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content:
      "1. The boys' went to the shops.\n2. Its a lovely day outside.\n3. The dog wagged it's tail happily.\n4. Charles Dickens book's are famous.\n5. Whos coming to the party tonight?",
    instructions:
      'Correct the apostrophe errors in each sentence. Explain why each correction is needed.',
    answers:
      '1. "boys\'" → "boys" (no possession, just plural)\n2. "Its" → "It\'s" (contraction of "it is")\n3. "it\'s" → "its" (possessive - no apostrophe)\n4. "book\'s" → "books" (plural, not possessive); or "Dickens\'" → "Dickens\'s" if possessive intended\n5. "Whos" → "Who\'s" (contraction of "who is")',
    duration: 3,
    skills: ['Grammar'],
  },
  {
    id: 'gram-3',
    type: 'Grammar Fix',
    title: 'Sentence Structure Errors',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      '1. Macbeth killed the king, he felt guilty afterwards.\n2. Because the Inspector arrived. The family became tense.\n3. The writer uses metaphor this creates a dark mood.\n4. Juliet refuses to marry Paris, however her father is furious.\n5. Running through the forest. Jack felt powerful.',
    instructions:
      'Identify and fix the sentence structure error in each example (comma splices, fragments, run-ons).',
    answers:
      '1. Comma splice → "Macbeth killed the king; he felt guilty afterwards." or use a conjunction.\n2. Fragment → "Because the Inspector arrived, the family became tense."\n3. Run-on → "The writer uses metaphor; this creates a dark mood."\n4. Comma splice with conjunctive adverb → "...Paris; however, her father is furious."\n5. Fragment → "Running through the forest, Jack felt powerful."',
    duration: 3,
    skills: ['Grammar'],
  },
  {
    id: 'gram-4',
    type: 'Grammar Fix',
    title: 'Homophones in Context',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 7', 'Year 8'],
    content:
      '1. The night road his horse too the castle.\n2. We should of went their yesterday.\n3. He was to tired too right his essay.\n4. Weather or not the whether is good, we will go.\n5. The hole class past the test with flying colours.',
    instructions: 'Correct all the homophone errors in each sentence.',
    answers:
      '1. "night" → "knight", "road" → "rode", "too" → "to"\n2. "should of" → "should have", "went" → "gone", "their" → "there"\n3. "to" → "too", "too" → "to", "right" → "write"\n4. "Weather" → "Whether", "whether" → "weather"\n5. "hole" → "whole", "past" → "passed"',
    duration: 3,
    skills: ['Grammar', 'Vocabulary'],
  },
  {
    id: 'gram-5',
    type: 'Grammar Fix',
    title: 'Analytical Writing Precision',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      '1. Shakespeare is trying to show that Macbeth is bad.\n2. The quote "Out, damned spot" means she feels guilty.\n3. This is good because it makes the reader feel things.\n4. Dickens uses a simile which is effective.\n5. The Inspector says stuff about responsibility.',
    instructions:
      'These sentences are grammatically correct but vague and informal. Rewrite each to be precise and analytical.',
    answers:
      '1. "Shakespeare presents Macbeth as morally corrupt, driven by unchecked ambition."\n2. "The imperative \'Out, damned spot\' reveals Lady Macbeth\'s torment as guilt manifests physically."\n3. Consider: What technique? What emotion? Be specific about the effect.\n4. Name the simile, explain what it compares, and analyse the connotations.\n5. "The Inspector asserts that society bears collective responsibility for individuals like Eva Smith."',
    duration: 4,
    skills: ['Grammar', 'Analysis'],
  },

  // ──────────────────────────────────────────────
  // CREATIVE PROMPT (5)
  // ──────────────────────────────────────────────
  {
    id: 'creative-1',
    type: 'Creative Prompt',
    title: 'The Abandoned Room',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'],
    content:
      'Imagine you open a door and find a room that has been abandoned for 50 years. Dust covers every surface. A single chair faces the window.',
    instructions:
      'Write a descriptive paragraph (5-7 sentences) about what you see, hear, and feel. Use at least 2 of: simile, metaphor, personification, sensory language.',
    duration: 5,
    skills: ['Creative Writing', 'Language Analysis'],
  },
  {
    id: 'creative-2',
    type: 'Creative Prompt',
    title: 'The Last Message',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      'A character finds a crumpled note in their pocket that reads: "Don\'t trust them. Meet me at midnight."',
    instructions:
      'Write the opening paragraph of a story inspired by this prompt. Focus on building tension through short sentences, sensory detail, and a cliffhanger.',
    duration: 5,
    skills: ['Creative Writing'],
  },
  {
    id: 'creative-3',
    type: 'Creative Prompt',
    title: 'Through the Window',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content: 'You are sitting in a café. Describe what you see through the rain-streaked window.',
    instructions:
      'Write a descriptive piece (5-7 sentences). Focus on pathetic fallacy - how does the weather reflect a mood? Use at least one metaphor and one example of personification.',
    duration: 5,
    skills: ['Creative Writing', 'Language Analysis'],
  },
  {
    id: 'creative-4',
    type: 'Creative Prompt',
    title: 'Two Perspectives',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content: "A park bench. One person sits down. Then another. They don't speak.",
    instructions:
      "Write 2 short paragraphs - one from each character's perspective. Show their thoughts and feelings without dialogue. Focus on internal monologue and body language.",
    duration: 5,
    skills: ['Creative Writing', 'Empathy'],
  },
  {
    id: 'creative-5',
    type: 'Creative Prompt',
    title: 'The Storm',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11'],
    content: 'A storm is approaching. You are standing on a clifftop.',
    instructions:
      'Write a description using all five senses. Begin with the calm before the storm, then build to its arrival. Use at least: one simile, one metaphor, one example of onomatopoeia.',
    duration: 5,
    skills: ['Creative Writing', 'Language Analysis'],
  },

  // ──────────────────────────────────────────────
  // COMPARISON QUICK-FIRE (4)
  // ──────────────────────────────────────────────
  {
    id: 'comp-1',
    type: 'Comparison Quick-fire',
    title: 'Power: Macbeth vs Ozymandias',
    text: 'Macbeth',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Extract A: "I have no spur to prick the sides of my intent, but only vaulting ambition" - Macbeth\n\nExtract B: "My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and despair!" - Ozymandias',
    instructions:
      'Find 3 similarities OR differences between how power is presented in these extracts. Write a sentence for each, using comparative connectives (similarly, whereas, in contrast).',
    answers:
      '1. Both present power as leading to arrogance - Macbeth\'s "vaulting ambition" and Ozymandias\'s "King of Kings" both show hubris.\n2. However, Macbeth acknowledges doubt ("no spur") whereas Ozymandias shows no self-awareness.\n3. Both ultimately foreshadow the destruction that unchecked power brings.',
    duration: 4,
    skills: ['Comparison', 'Analysis', 'Quotation Selection'],
  },
  {
    id: 'comp-2',
    type: 'Comparison Quick-fire',
    title: 'Social Class: AIC vs ACC',
    text: 'An Inspector Calls',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Extract A: "a man has to mind his own business and look after himself" - Mr Birling, An Inspector Calls\n\nExtract B: "Are there no prisons? Are there no workhouses?" - Scrooge, A Christmas Carol',
    instructions:
      'Find 3 similarities or differences in how the upper classes are presented. Use comparative connectives.',
    answers:
      '1. Similarly, both characters dismiss responsibility for the poor - Birling through capitalism, Scrooge through institutional cruelty.\n2. Both use rhetorical questions/declaratives to assert their worldview with certainty.\n3. However, Scrooge transforms by the end, whereas Birling remains unchanged - Priestley is more pessimistic about the ruling class.',
    duration: 4,
    skills: ['Comparison', 'Analysis'],
  },
  {
    id: 'comp-3',
    type: 'Comparison Quick-fire',
    title: 'Conflict: Power and Conflict Poetry',
    text: 'Power and Conflict Poetry',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Extract A: "Bayonet Charge" - "suddenly he awoke and was running - raw / In raw-seamed hot khaki"\n\nExtract B: "Exposure" - "Our brains ache, in the merciless iced east winds that knive us"',
    instructions:
      "Find 3 similarities or differences in how conflict is presented. Consider language, structure, and the speaker's experience.",
    answers:
      '1. Both present war as physically painful - "raw" (Hughes) and "knive us" (Owen) use visceral language.\n2. However, "Bayonet Charge" uses sudden, frantic movement while "Exposure" emphasises deadly stillness.\n3. Both poets challenge the idea of heroic warfare - neither speaker feels brave or noble.',
    duration: 4,
    skills: ['Comparison', 'Analysis', 'Language Analysis'],
  },
  {
    id: 'comp-4',
    type: 'Comparison Quick-fire',
    title: 'Good vs Evil: Jekyll & Hyde vs Macbeth',
    text: 'Jekyll and Hyde',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Extract A: "Man is not truly one, but truly two" - Jekyll, Jekyll and Hyde\n\nExtract B: "Stars, hide your fires; let not light see my black and deep desires" - Macbeth',
    instructions:
      'Find 3 similarities or differences in how the duality of good and evil is presented.',
    answers:
      '1. Both suggest evil exists within everyone - Jekyll\'s "two" and Macbeth\'s "black and deep desires" show inner darkness.\n2. Both characters try to hide their evil - Jekyll uses science, Macbeth asks the stars.\n3. However, Jekyll accepts duality intellectually, while Macbeth is ashamed and fearful of it.',
    duration: 4,
    skills: ['Comparison', 'Analysis'],
  },

  // ──────────────────────────────────────────────
  // CHARACTER HOT SEAT (4)
  // ──────────────────────────────────────────────
  {
    id: 'hotseat-1',
    type: 'Character Hot Seat',
    title: 'You Are Lady Macbeth',
    text: 'Macbeth',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'You are Lady Macbeth, moments after the murder of King Duncan. Your hands are covered in blood.',
    instructions:
      'In character, write answers to these questions:\n1. Why did you push Macbeth to kill Duncan?\n2. How do you feel right now?\n3. Do you think you will be caught?\nWrite in first person. Stay in character!',
    duration: 4,
    skills: ['Empathy', 'Analysis', 'Creative Writing'],
  },
  {
    id: 'hotseat-2',
    type: 'Character Hot Seat',
    title: 'You Are Sheila Birling',
    text: 'An Inspector Calls',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'You are Sheila Birling. The Inspector has just left. Your parents are celebrating that it was all a "hoax".',
    instructions:
      "In character, write answers to these questions:\n1. Why can't you celebrate like your parents?\n2. What have you learned tonight?\n3. What would you say to Eva Smith if you could?\nWrite in first person. Stay in character!",
    duration: 4,
    skills: ['Empathy', 'Analysis', 'Creative Writing'],
  },
  {
    id: 'hotseat-3',
    type: 'Character Hot Seat',
    title: 'You Are Scrooge (Post-Ghosts)',
    text: 'A Christmas Carol',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'You are Ebenezer Scrooge. You have just woken up on Christmas morning after the three ghosts visited you.',
    instructions:
      'In character, write answers to these questions:\n1. Which ghost affected you the most, and why?\n2. What is the first thing you will do today?\n3. How do you feel about the man you were yesterday?\nWrite in first person. Stay in character!',
    duration: 4,
    skills: ['Empathy', 'Analysis', 'Creative Writing'],
  },
  {
    id: 'hotseat-4',
    type: 'Character Hot Seat',
    title: 'You Are Ralph (End of LOTF)',
    text: 'Lord of the Flies',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CIE'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      'You are Ralph. The naval officer has just arrived. You are safe - but you are weeping.',
    instructions:
      'In character, write answers to these questions:\n1. Why are you crying?\n2. What happened to Piggy, and how do you feel about it?\n3. Will you ever be the same person you were before the island?\nWrite in first person. Stay in character!',
    duration: 4,
    skills: ['Empathy', 'Analysis', 'Creative Writing'],
  },

  // ──────────────────────────────────────────────
  // TIMELINE SORT (4)
  // ──────────────────────────────────────────────
  {
    id: 'timeline-1',
    type: 'Timeline Sort',
    title: 'Macbeth - Key Events',
    text: 'Macbeth',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      "A) Lady Macbeth sleepwalks\nB) Macbeth sees Banquo's ghost\nC) The witches make three prophecies\nD) Macbeth murders Duncan\nE) Macduff kills Macbeth\nF) Macbeth orders Banquo's murder\nG) Malcolm is crowned king\nH) Lady Macbeth persuades Macbeth to kill Duncan",
    instructions: 'Put these events in the correct chronological order (first to last).',
    answers: 'Correct order: C, H, D, F, B, A, E, G',
    duration: 3,
    skills: ['Sequencing', 'Analysis'],
  },
  {
    id: 'timeline-2',
    type: 'Timeline Sort',
    title: 'An Inspector Calls - Revelations',
    text: 'An Inspector Calls',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      "A) Gerald admits his affair with Daisy Renton\nB) Eric is revealed as the father of Eva's child\nC) Mr Birling admits sacking Eva Smith\nD) The phone rings - a real inspector is coming\nE) Sheila admits getting Eva fired from Milwards\nF) Mrs Birling admits rejecting Eva's appeal\nG) The family discovers the Inspector may be fake",
    instructions:
      'Put these events in the correct chronological order as they are revealed in the play.',
    answers: 'Correct order: C, E, A, F, B, G, D',
    duration: 3,
    skills: ['Sequencing', 'Analysis'],
  },
  {
    id: 'timeline-3',
    type: 'Timeline Sort',
    title: 'A Christmas Carol - Stave by Stave',
    text: 'A Christmas Carol',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      "A) Scrooge sees Tiny Tim's empty chair\nB) Marley's ghost visits Scrooge\nC) Scrooge sees his own grave\nD) Scrooge refuses to donate to charity collectors\nE) Scrooge watches Fezziwig's party\nF) Scrooge buys the prize turkey\nG) Scrooge sees Belle leave him\nH) Scrooge wakes up on Christmas morning",
    instructions: 'Put these events in the correct chronological order.',
    answers: 'Correct order: D, B, E, G, A, C, H, F',
    duration: 3,
    skills: ['Sequencing', 'Analysis'],
  },
  {
    id: 'timeline-4',
    type: 'Timeline Sort',
    title: 'Romeo and Juliet - Key Moments',
    text: 'Romeo and Juliet',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      'A) Juliet takes the sleeping potion\nB) Romeo kills Tybalt\nC) Romeo and Juliet marry in secret\nD) Romeo and Juliet meet at the Capulet ball\nE) Romeo finds Juliet "dead" and drinks poison\nF) The Prince banishes Romeo\nG) Mercutio is killed by Tybalt\nH) Juliet wakes, finds Romeo dead, and stabs herself',
    instructions: 'Put these events in the correct chronological order.',
    answers: 'Correct order: D, C, G, B, F, A, E, H',
    duration: 3,
    skills: ['Sequencing', 'Analysis'],
  },

  // ──────────────────────────────────────────────
  // THEME MATCH (4)
  // ──────────────────────────────────────────────
  {
    id: 'theme-1',
    type: 'Theme Match',
    title: 'Macbeth - Themes and Evidence',
    text: 'Macbeth',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Themes:\n1. Ambition  2. Guilt  3. Supernatural  4. Masculinity  5. Kingship\n\nEvidence:\nA) "Is this a dagger which I see before me?"\nB) "When you durst do it, then you were a man"\nC) "Will all great Neptune\'s ocean wash this blood clean from my hand?"\nD) "There\'s no art to find the mind\'s construction in the face"\nE) "Double, double, toil and trouble"',
    instructions:
      'Match each piece of evidence to the most relevant theme. Be prepared to explain your choices.',
    answers:
      "1. Ambition → A (dagger leads him to Duncan)\n2. Guilt → C (blood/guilt cannot be washed away)\n3. Supernatural → E (witches' incantation)\n4. Masculinity → B (Lady Macbeth challenges his manhood)\n5. Kingship → D (Duncan on trust and appearance)",
    duration: 3,
    skills: ['Theme Identification', 'Quotation Selection'],
  },
  {
    id: 'theme-2',
    type: 'Theme Match',
    title: 'AIC - Themes and Characters',
    text: 'An Inspector Calls',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Themes:\n1. Responsibility  2. Class  3. Gender  4. Age/Generational divide  5. Appearance vs Reality\n\nEvidence:\nA) "But these girls aren\'t cheap labour - they\'re people"\nB) "a man has to mind his own business"\nC) "I\'ll never, never do it again to anybody"\nD) "clothes mean something quite different to [Eva]"\nE) "You\'re not the kind of father a chap could go to"',
    instructions: 'Match each piece of evidence to the most relevant theme.',
    answers:
      "1. Responsibility → B (Birling rejects it)\n2. Class → D (highlights class divide through clothing)\n3. Gender → A (Sheila recognises women as people, not commodities)\n4. Age → C (Sheila shows the younger generation learns)\n5. Appearance vs Reality → E (the family's perfect image is a façade)",
    duration: 3,
    skills: ['Theme Identification', 'Quotation Selection'],
  },
  {
    id: 'theme-3',
    type: 'Theme Match',
    title: 'ACC - Themes and Quotations',
    text: 'A Christmas Carol',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Themes:\n1. Redemption  2. Poverty  3. Isolation  4. Christmas Spirit  5. Family\n\nEvidence:\nA) "solitary as an oyster"\nB) "God bless us, every one!"\nC) "I will honour Christmas in my heart"\nD) "Are there no prisons? Are there no workhouses?"\nE) "He had been Tim\'s blood horse all the way from church"',
    instructions: 'Match each piece of evidence to the most relevant theme.',
    answers:
      "1. Redemption → C (Scrooge vows to change)\n2. Poverty → D (Scrooge dismisses the poor)\n3. Isolation → A (Scrooge is closed off from others)\n4. Christmas Spirit → B (Tiny Tim's blessing)\n5. Family → E (Bob Cratchit's loving relationship with Tim)",
    duration: 3,
    skills: ['Theme Identification', 'Quotation Selection'],
  },
  {
    id: 'theme-4',
    type: 'Theme Match',
    title: 'Jekyll and Hyde - Themes and Evidence',
    text: 'Jekyll and Hyde',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Themes:\n1. Duality  2. Reputation  3. Science  4. Secrecy  5. Violence\n\nEvidence:\nA) "man is not truly one, but truly two"\nB) "trampled calmly over the child\'s body"\nC) "If he be Mr Hyde, I shall be Mr Seek"\nD) "I bind my honour to you that I am done with him"\nE) "I began to be aware, more sharply than ever, of the dangers of my scientific work"',
    instructions: 'Match each piece of evidence to the most relevant theme.',
    answers:
      "1. Duality → A (Jekyll's theory of human nature)\n2. Reputation → D (Utterson is concerned with honour)\n3. Science → E (Jekyll fears the consequences)\n4. Secrecy → C (everyone is investigating hidden truths)\n5. Violence → B (Hyde's casual cruelty)",
    duration: 3,
    skills: ['Theme Identification', 'Quotation Selection'],
  },

  // ──────────────────────────────────────────────
  // EXAM Q UNPICK (4)
  // ──────────────────────────────────────────────
  {
    id: 'exam-1',
    type: 'Exam Q Unpick',
    title: 'AQA Literature - Macbeth',
    text: 'Macbeth',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      '"Starting with this extract, how does Shakespeare present the theme of ambition in Macbeth?"',
    instructions:
      '1. Circle/underline the KEY WORDS in this question.\n2. What does "starting with this extract" tell you to do?\n3. Plan a 3-paragraph structure for your answer.\n4. What context could you include?',
    answers:
      'Key words: "starting with", "how", "present", "ambition"\n"Starting with this extract" = analyse the extract first, then write about the rest of the play.\nStructure: 1) Extract analysis, 2) Ambition elsewhere (e.g., Lady Macbeth), 3) Ambition\'s consequences + context (Jacobean views on regicide).\nContext: Divine Right of Kings, Gunpowder Plot, James I.',
    duration: 4,
    skills: ['Exam Technique', 'Planning'],
  },
  {
    id: 'exam-2',
    type: 'Exam Q Unpick',
    title: 'AQA Literature - AIC',
    text: 'An Inspector Calls',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      '"How does Priestley use the character of Mr Birling to explore ideas about responsibility?"',
    instructions:
      '1. Identify the KEY WORDS.\n2. What does "use the character" mean - what should you focus on?\n3. Plan a 3-paragraph structure.\n4. What context is relevant?',
    answers:
      'Key words: "how", "use the character", "explore", "responsibility"\n"Use the character" = focus on Priestley\'s methods and intentions, not just what Birling does.\nStructure: 1) Birling as a mouthpiece for capitalism, 2) Birling\'s dramatic irony, 3) Birling vs the Inspector.\nContext: 1912 vs 1945, welfare state, socialism, Titanic references.',
    duration: 4,
    skills: ['Exam Technique', 'Planning'],
  },
  {
    id: 'exam-3',
    type: 'Exam Q Unpick',
    title: 'AQA Language Paper 1 Q5',
    text: 'general',
    examBoard: ['AQA'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      '"Write a description suggested by this picture." [40 marks]\n\n(Imagine a photograph of a lonely house on a hill at sunset.)',
    instructions:
      '1. What type of writing is this - narrative or descriptive?\n2. What are the 3 most important things to remember for a top-mark response?\n3. Plan 3-4 paragraphs with a focus for each.\n4. List 5 techniques you MUST include.',
    answers:
      'Descriptive writing (not a story with plot).\nTop marks: 1) Varied sentence structures, 2) Ambitious vocabulary, 3) Sensory detail throughout.\nParagraph plan: 1) Wide shot of landscape, 2) Zoom into the house, 3) Inside the house, 4) Return to wide shot/sunset.\nTechniques: metaphor, simile, personification, sensory language, one-word/short sentences for effect.',
    duration: 4,
    skills: ['Exam Technique', 'Planning', 'Creative Writing'],
  },
  {
    id: 'exam-4',
    type: 'Exam Q Unpick',
    title: 'Edexcel Literature - ACC',
    text: 'A Christmas Carol',
    examBoard: ['Edexcel'],
    yearGroup: ['Year 10', 'Year 11'],
    content: '"Explore how Dickens presents the theme of redemption in A Christmas Carol."',
    instructions:
      '1. Identify the KEY WORDS.\n2. What does "explore" mean in terms of how you should write?\n3. Plan a 3-paragraph structure.\n4. What context should you weave in?',
    answers:
      'Key words: "explore", "how", "presents", "redemption"\n"Explore" = consider multiple interpretations, analyse in depth, not just describe.\nStructure: 1) Scrooge before redemption (Stave 1), 2) The journey (Staves 2-4), 3) Transformation (Stave 5).\nContext: Victorian poverty, workhouses, Dickens\' own childhood, Christian morality.',
    duration: 4,
    skills: ['Exam Technique', 'Planning'],
  },

  // ──────────────────────────────────────────────
  // EXPANSION: 30 ADDITIONAL STARTER ACTIVITIES
  // ──────────────────────────────────────────────

  // ──────────────────────────────────────────────
  // VOCABULARY BUILDING (5)
  // ──────────────────────────────────────────────
  {
    id: 'vocab-11',
    type: 'Vocabulary Challenge',
    title: 'Word Roots: Latin and Greek',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'PORT (carry) → transport, deport, portfolio, portable\nMORT (death) → mortality, mortuary, mortify, immortal',
    instructions:
      'Identify the root in each word. Define each word using the root meaning. Create sentences showing how the root affects meaning.',
    answers:
      'Transport = carry across. Deport = carry away (expel). Portfolio = carry papers. Portable = can be carried.\nMortality = state of being subject to death. Mortuary = place for the dead. Mortify = to cause death/shame. Immortal = not subject to death.\nKnowing roots unlocks meaning of unfamiliar words.',
    duration: 5,
    skills: ['Vocabulary', 'Language Analysis'],
  },
  {
    id: 'vocab-12',
    type: 'Vocabulary Challenge',
    title: 'Context Vocabulary: Conflict Terminology',
    text: 'Power and Conflict Poetry',
    examBoard: ['AQA', 'Edexcel'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'Conflict terms: siege, ambush, retreat, surrender, truce, casualties, artillery, fortification',
    instructions:
      "Match each term to a poem. Use each in a sentence showing how it relates to the poem's theme.",
    answers:
      'Siege - "Bayonet Charge" (surrounded/trapped)\nAmbush - "Poppies" (war\'s sudden strikes)\nRetreat - "The Charge" (failed advance)\nCasualties - "War Photographer" (human cost)\nTruce - "Tissue" (fragile peace)\nEach term connects to conflict\'s complexity and human suffering.',
    duration: 5,
    skills: ['Vocabulary', 'Context', 'Analysis'],
  },
  {
    id: 'vocab-13',
    type: 'Vocabulary Challenge',
    title: 'Shades of Meaning: Near Synonyms',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'Argue, dispute, debate, quarrel, bicker\nWalk, stroll, trudge, stride, shuffle\nLook, glance, gaze, stare, glimpse',
    instructions:
      'Arrange each set by intensity or nuance. Create sentences showing the difference. Which would you use in formal writing vs. dialogue?',
    answers:
      'Argue-dispute-debate-quarrel-bicker: intense to petty. Walk (neutral), stroll (leisure), trudge (tired), stride (confident), shuffle (hesitant).\nLook (neutral), glance (quick), gaze (prolonged), stare (intense/rude), glimpse (brief/incomplete).',
    duration: 5,
    skills: ['Vocabulary', 'Nuance', 'Writing Technique'],
  },
  {
    id: 'vocab-14',
    type: 'Vocabulary Challenge',
    title: 'Academic vs. Colloquial Language',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9'],
    content:
      'Colloquial: "weird", "awful", "loads of", "basically"\nAcademic: "anomalous", "detrimental", "copious", "fundamentally"',
    instructions:
      'Pair each colloquial word with an academic equivalent. Rewrite a paragraph using academic language. Why is register important for essays?',
    answers:
      'Weird = strange/anomalous. Awful = detrimental. Loads of = copious/substantial. Basically = essentially/fundamentally.\nRegister matters because academic writing demands precision and formality to be taken seriously and to meet exam requirements.',
    duration: 5,
    skills: ['Vocabulary', 'Register', 'Writing Technique'],
  },
  {
    id: 'vocab-15',
    type: 'Vocabulary Challenge',
    title: 'Words with Multiple Meanings (Homonyms)',
    text: 'general',
    examBoard: ['AQA', 'Edexcel'],
    yearGroup: ['Year 7', 'Year 8'],
    content:
      'Bank (river edge vs. financial institution)\nLead (metal vs. to guide)\nLight (illumination vs. not heavy)\nDraft (preliminary version vs. breeze)',
    instructions:
      'For each word, write two sentences showing different meanings. Then find a literary quote where the word is ambiguous-discuss which meaning applies.',
    answers:
      'Bank: "The river bank was muddy." vs. "I deposited money at the bank."\nLead: "Who will lead the group?" vs. "The ancient roof contained lead."\nAmbiguity in literature creates richness: puns rely on multiple meanings.',
    duration: 5,
    skills: ['Vocabulary', 'Language Analysis'],
  },

  // ──────────────────────────────────────────────
  // GRAMMAR AND MECHANICS CHALLENGES (5)
  // ──────────────────────────────────────────────
  {
    id: 'grammar-6',
    type: 'Grammar Fix',
    title: 'Dangling Modifiers',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'Incorrect: "Running down the hallway, the bell rang loudly."\n(Who is running? The bell, absurdly.)',
    instructions:
      'Identify the dangling modifier. Rewrite the sentence so the modifier clearly attaches to the correct noun.',
    answers:
      'The participle phrase "Running down the hallway" should modify the person running, not the bell.\nCorrected: "Running down the hallway, Sarah heard the bell ring loudly." or "As students ran down the hallway, the bell rang loudly."',
    duration: 4,
    skills: ['Grammar', 'Clarity'],
  },
  {
    id: 'grammar-7',
    type: 'Grammar Fix',
    title: 'Subject-Verb Agreement in Complex Sentences',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'Check agreement:\n1. "The team is playing well." (Correct/Incorrect?)\n2. "The group of students have different opinions." (Correct/Incorrect?)',
    instructions: 'Decide if each is correct. Explain the rule. Rewrite any incorrect sentences.',
    answers:
      '1. Correct - "team" is singular (treated as one unit).\n2. Debatable - "group" is singular, so technically "has" is correct, but in modern English "have" is acceptable (emphasising individuals in the group).\nRule: Collective nouns can be singular (British: often plural) or singular (American: always singular).',
    duration: 4,
    skills: ['Grammar', 'Clarity'],
  },
  {
    id: 'grammar-8',
    type: 'Grammar Fix',
    title: 'Semicolon vs. Colon',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'Semicolon: joins two independent clauses with equal weight.\nColon: introduces something (explanation, list, quote).',
    instructions:
      'Complete the sentences correctly:\n1. "I wanted to leave; ____.\"\n2. "She had three reasons: ____."',
    answers:
      '1. "I wanted to leave; my friend insisted I stay." (Two related independent clauses)\n2. "She had three reasons: tiredness, boredom, and disappointment." (Colon introduces a list)\nSemicolons are powerful in formal writing but risk overuse. Use them sparingly.',
    duration: 4,
    skills: ['Grammar', 'Punctuation'],
  },
  {
    id: 'grammar-9',
    type: 'Grammar Fix',
    title: 'Parallel Structure',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'Incorrect: "She likes reading, writing, and to paint."\nCorrect: "She likes reading, writing, and painting." (all gerunds)',
    instructions:
      'Identify the parallel structure error. Rewrite for balance. Why does parallel structure matter for rhythm and clarity?',
    answers:
      'Error: Mixes gerunds (reading, writing) with infinitive (to paint). Should be all gerunds: reading, writing, painting.\nParallel structure creates rhythm, aids memory, clarifies meaning, and emphasises equal importance. Crucial in persuasive writing.',
    duration: 4,
    skills: ['Grammar', 'Writing Technique'],
  },
  {
    id: 'grammar-10',
    type: 'Grammar Fix',
    title: 'Comma Splices and Fused Sentences',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 8', 'Year 9'],
    content:
      'Comma splice: "I love novels, they transport me to other worlds."\nFused sentence: "I love novels they transport me to other worlds."',
    instructions: 'Identify each error. Name three ways to fix them. Which is most effective?',
    answers:
      'Fixes:\n1. Add semicolon: "I love novels; they transport me to other worlds."\n2. Add conjunction: "I love novels, and they transport me to other worlds."\n3. Make dependent clause: "Because I love novels, they transport me to other worlds."\n4. Use colon: "I love novels: they transport me."\nMost effective: depends on relationship-semicolon shows equal weight, conjunction adds rhythm, dependent clause shows cause-effect.',
    duration: 5,
    skills: ['Grammar', 'Punctuation'],
  },

  // ──────────────────────────────────────────────
  // CREATIVE AND QUICK-FIRE ACTIVITIES (5)
  // ──────────────────────────────────────────────
  {
    id: 'creative-6',
    type: 'Creative Prompt',
    title: 'Object Biography',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Choose an object in the room (pen, book, chair). You are this object. Tell your story in 100 words.',
    instructions:
      "1) Speak from the object's perspective (first person). 2) Include at least one memory or experience. 3) Reveal one secret about your life. 4) End with a reflection on your purpose.",
    answers:
      'Example (pen): "I have been here for three years, marking the thoughts of hundreds of students. I remember the day I arrived-shiny, hopeful. Now my ink runs thin, my cap is cracked, but I have written essays, test answers, love notes. My secret: I once wrote the answer to a test question someone was stuck on. My purpose is simple-to give voice to ideas."',
    duration: 5,
    skills: ['Creative Writing', 'Perspective', 'Empathy'],
  },
  {
    id: 'creative-7',
    type: 'Creative Prompt',
    title: 'Dialogue from Action',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'Scenario: Two people sit in silence, not making eye contact. One is angry; one is sad.',
    instructions:
      '1) Write their dialogue (5-8 lines each). 2) Never explicitly state who is who. 3) Reveal emotion through word choice, pauses, deflection. 4) End on an unresolved note.',
    answers:
      'Example: \n"You didn\'t call." \n"I needed time."\n"Time from what? From me?"\n"..."\n"Say something."\n"There\'s nothing to say that will fix this."\n"Maybe not. But say it anyway."\nUncertainty and avoidance reveal the emotional dynamic.',
    duration: 5,
    skills: ['Creative Writing', 'Dialogue', 'Subtext'],
  },
  {
    id: 'creative-8',
    type: 'Creative Prompt',
    title: 'Describe Without Adjectives',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 8', 'Year 9'],
    content: 'Challenge: Describe a room (any room) in 75 words. Use NO adjectives.',
    instructions:
      '1) Use only nouns, verbs, and adverbs. 2) Create vivid images through action and specificity, not description. 3) Trade work with partner. Can they picture the room?',
    answers:
      'Example: "I entered the kitchen. Sunlight streamed through the window, hitting the tiles. Coffee brewed in the machine. Books towered on the counter. The dog slept in the corner, breathing slowly. Water dripped from the faucet. A chair had turned over. Crumbs scattered across the table."\nKey: Specificity (faucet, not "water feature") and action (dripped, turned over) replace adjectives.',
    duration: 5,
    skills: ['Creative Writing', 'Precision', 'Description'],
  },
  {
    id: 'creative-9',
    type: 'Creative Prompt',
    title: 'The Unreliable Narrator - Another Perspective',
    text: 'general',
    examBoard: ['Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content: "Imagine a character's version of an event differs wildly from reality.",
    instructions:
      "1) Write Version 1 (the character's biased account, 50 words). 2) Write Version 2 (objective truth, 50 words). 3) Analyse: How does perspective shape narrative truth?",
    answers:
      'V1: "I had no choice but to leave the party. She was so controlling, criticising everything I said. I had to escape."\nV2: "He left the party after she mentioned he\'d been late three times. He was sensitive to criticism."\nPerspective reveals character, creates unreliability, and raises the question: whose truth matters in storytelling?',
    duration: 5,
    skills: ['Creative Writing', 'Perspective', 'Narrative Technique'],
  },
  {
    id: 'creative-10',
    type: 'Creative Prompt',
    title: 'Emotion in Motion: Physical Representation',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content: "Write how a character's body reveals emotion: posture, gestures, proximity, pacing.",
    instructions:
      '1) Choose an emotion (grief, joy, anger, confusion). 2) Write 3 sentences showing this emotion through physical cues only. 3) Partner guesses the emotion. 4) Discuss: Is your body language cliché or fresh?',
    answers:
      'Example (grief): "She sat motionless on the bed, her hands folded in her lap. Her gaze fixed on the wall, unseeing. When her mother spoke, she did not move, as if all energy had drained."\nClichés to avoid: Always show fresh, specific details. E.g., instead of "tears streaming," try "her chest tightened, refusing breath."',
    duration: 5,
    skills: ['Creative Writing', 'Show vs. Tell', 'Characterisation'],
  },

  // ──────────────────────────────────────────────
  // TECHNIQUE IDENTIFICATION AND ANALYSIS (5)
  // ──────────────────────────────────────────────
  {
    id: 'technique-6',
    type: 'Comparison Quick-fire',
    title: 'Imagery: Visual, Auditory, Tactile, Olfactory, Gustatory',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      '"The rain drummed against the windows, filling the room with a cold, metallic taste and the smell of wet earth."',
    instructions:
      '1) Identify each sensory image. 2) Why does the writer mix senses (synesthesia: taste from sound)? 3) How does sensory-rich language enhance mood?',
    answers:
      'Visual: rain, windows. Auditory: drummed. Tactile: cold. Olfactory: smell of wet earth. Gustatory: metallic taste (synesthesia-unusual, creates disorientation).\nMixing senses creates immersion and mirrors psychological states. Here: sensory overload reflects anxiety or confusion.',
    duration: 4,
    skills: ['Language Analysis', 'Imagery'],
  },
  {
    id: 'technique-7',
    type: 'Comparison Quick-fire',
    title: 'Rhetorical Devices in Speeches',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'Anaphora (repetition of opening): "We have nothing to fear, we have nothing to lose, we have everything to gain."\nAntithesis (contrasting ideas): "Ask not what your country can do for you-ask what you can do for your country."',
    instructions:
      '1) Identify each device. 2) What makes each persuasive? 3) Create your own example using one technique.',
    answers:
      'Anaphora: rhythm builds momentum, emphasises through repetition. Effect: conviction, power.\nAntithesis: juxtaposition forces comparison, creates memorable balance. Effect: memorable, profound.\nBoth make speeches quotable and persuasive.',
    duration: 4,
    skills: ['Language Analysis', 'Persuasion'],
  },
  {
    id: 'technique-8',
    type: 'Comparison Quick-fire',
    title: 'Irony: Situational, Dramatic, Verbal',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'Situational: A fire chief\'s house burns down.\nDramatic: Audience knows Romeo is alive, but Juliet believes he\'s dead.\nVerbal: "Oh, wonderful, another test." (when speaker means the opposite)',
    instructions:
      '1) Define each type. 2) Identify real examples from studied texts. 3) Why is irony effective in literature?',
    answers:
      "Situational: expectation contradicts reality. Creates surprise and commentary.\nDramatic: audience knows more than characters. Creates tension and tragedy.\nVerbal: speaker's words contradict meaning. Creates humour, criticism, bitterness.\nIrony engages readers actively; they must interpret what is truly meant.",
    duration: 5,
    skills: ['Language Analysis', 'Technique'],
  },
  {
    id: 'technique-9',
    type: 'Comparison Quick-fire',
    title: 'Symbolism vs. Allegory',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Symbol: An object/thing represents an idea (rose = love, mirror = truth).\nAllegory: Entire narrative represents something else (Lord of the Flies = human nature/society collapse).',
    instructions:
      '1) Identify a symbol and an allegory from studied texts. 2) Explain what each represents. 3) Could this text be read as pure narrative alone?',
    answers:
      "Symbol (Macbeth): Blood = guilt. Lady Macbeth cannot wash it away despite scrubbing.\nAllegory (LOTF): Island society = microcosm of civilization's fragility; descent into savagery = human nature unrestrained.\nBoth texts work on literal level but gain depth through symbolic/allegorical reading.",
    duration: 5,
    skills: ['Language Analysis', 'Symbolism'],
  },
  {
    id: 'technique-10',
    type: 'Comparison Quick-fire',
    title: 'Structural Techniques: Foreshadowing, Flashback, Cliffhanger',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'Foreshadowing: Early hint of later events. Flashback: Return to past events. Cliffhanger: Unresolved tension ending a section.',
    instructions:
      '1) Find one example of each in a studied text. 2) What effect does each have on the reader? 3) How does structure control pacing and anticipation?',
    answers:
      'Foreshadowing (Macbeth): "None of woman born shall harm Macbeth" - hints at Birnam Wood and Macduff\'s birth. Creates irony.\nFlashback (AIC): The Inspector reveals past events, forcing characters (and us) to confront their actions.\nCliffhanger: Ends chapters/scenes with questions to compel reading onward. Structural tension.',
    duration: 5,
    skills: ['Language Analysis', 'Structural Technique'],
  },

  // ──────────────────────────────────────────────
  // DEBATE AND DISCUSSION PROMPTS (5)
  // ──────────────────────────────────────────────
  {
    id: 'debate-6',
    type: 'Theme Match',
    title: 'Female Characters: Agency or Victimhood?',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Debate: Are female characters in classic texts passive victims or active agents of their own fate?',
    instructions:
      '1) Choose one female character from a studied text. 2) Argue she has agency (makes choices). 3) Argue she is constrained by circumstance. 4) Which reading is more honest?',
    answers:
      "Example (Juliet): Agency reading-she pursues Romeo, marries him, plans her escape.\nConstraint reading-family feud limits options; she dies due to male failures (Romeo's haste, Friar's plan).\nHonest reading acknowledges both: she acts within constraints. Agency exists within limits, as it does for all of us.",
    duration: 5,
    skills: ['Analysis', 'Argument', 'Gender Critique'],
  },
  {
    id: 'debate-7',
    type: 'Theme Match',
    title: 'Moral Relativism: Is Context Everything?',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 10', 'Year 11'],
    content: "Can we judge characters' moral choices outside their historical/social context?",
    instructions:
      '1) Choose a morally ambiguous character choice. 2) Defend the character using historical context. 3) Argue the act is wrong regardless of context. 4) Synthesise: Does context excuse or explain?',
    answers:
      "Example (Scrooge's greed): Context: Victorian capitalism rewarded selfishness; workhouses existed. Dickens criticises the system, not just Scrooge. Yet greed harmed others regardless of context. Synthesis: Context explains behaviour but doesn't erase moral responsibility.",
    duration: 5,
    skills: ['Philosophy', 'Analysis', 'Argument'],
  },
  {
    id: 'debate-8',
    type: 'Theme Match',
    title: 'Endings: Tragedy, Comedy, or Ambiguity?',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      '"Tidy endings satisfy readers but betray reality. Ambiguous endings are more honest."',
    instructions:
      '1) Identify the ending of a studied text. 2) Argue it works (is satisfying/realistic). 3) Argue it fails. 4) Consider: What does the author gain/lose with each choice?',
    answers:
      "Tragic end (Romeo and Juliet): Devastates audience but emphasises fate's power and warns against feuds.\nRedeemptive end (ACC): Uplifting but perhaps unrealistic-do people truly change?\nAmbiguous (AIC): Priest's reality unclear; forces engagement with moral lesson rather than giving false certainty.",
    duration: 5,
    skills: ['Analysis', 'Argument', 'Literary Craft'],
  },
  {
    id: 'debate-9',
    type: 'Theme Match',
    title: 'Representation in Literature: Authenticity vs. Stereotype',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      'Do older texts have a "pass" for stereotypes due to historical context, or should we critique them regardless?',
    instructions:
      '1) Identify a stereotype in a studied text. 2) Consider historical context. 3) Decide: Does context excuse the representation? 4) How should modern readers approach older texts?',
    answers:
      "Stereotype: Shylock (Jew as moneylender, villain). Context: Medieval Christian Europe banned Jews from most professions; Shylock may reflect historical reality. Yet portrayal invokes harmful tropes.\nModern approach: Understand historical context AND critique representation. Context is not excuse; it's explanation. Good reading requires both.",
    duration: 5,
    skills: ['Analysis', 'Critical Thinking', 'Ethics'],
  },
  {
    id: 'debate-10',
    type: 'Theme Match',
    title: 'Art vs. Politics: Should Literature Have a Message?',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Can literature be purely artistic, or is it always political? Is social commentary essential or limiting?',
    instructions:
      '1) Choose two studied texts (one with clear social message, one seemingly pure narrative). 2) Argue for each approach. 3) Conclude: Can art be separate from message?',
    answers:
      'Message-driven (Priestley\'s AIC): Clear anti-capitalism message. Powerful but risks preaching.\nSeemingly "pure" (Shakespeare\'s sonnets): About love, yet reveal class, gender, power dynamics. No text is apolitical.\nConclusion: All art makes choices that reflect ideology. Honesty means acknowledging the message rather than claiming neutrality.',
    duration: 5,
    skills: ['Analysis', 'Argument', 'Politics of Literature'],
  },

  // ──────────────────────────────────────────────
  // IMAGE ANALYSIS AND VISUAL PROMPTS (5)
  // ──────────────────────────────────────────────
  {
    id: 'image-6',
    type: 'Inference Puzzle',
    title: 'Historical Context from Images',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 8', 'Year 9'],
    content: '[Image: A 1920s advertisement for cigarettes featuring a glamorous woman]',
    instructions:
      '1) What does this ad reveal about 1920s attitudes? 2) How would this ad differ today? 3) Why do advertisers use these strategies? 4) How does reading historical ads deepen textual understanding?',
    answers:
      'Reveals: Shifting gender norms (women smoking publicly; association with liberation). Glamour sells products. Less regulation than today.\nModern ads: Would include health warnings; target different demographics; avoid overt gender stereotyping (though subtly reinforce it).\nValue: Ads reflect cultural values; understanding 1920s ads helps contextualise texts from that era.',
    duration: 5,
    skills: ['Analysis', 'Context', 'Critical Reading'],
  },
  {
    id: 'image-7',
    type: 'Inference Puzzle',
    title: 'Architecture and Character',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 8', 'Year 9'],
    content: '[Image: A grand Victorian mansion; ornate, imposing]',
    instructions:
      "1) What does this building suggest about its owner's character and status? 2) How might description of this setting reveal character in fiction? 3) Create a character who would live here; create one who would resent it.",
    answers:
      "Suggests: Wealth, power, tradition, possible pomposity, rigidity, pride. Exterior reflects interior life.\nCharacter revealed through setting: Descriptions of architecture tell reader about character's values.\nContrast: Wealthy owner proud of status vs. servant/visitor who sees it as oppressive/constraining. Same building, different readings.",
    duration: 5,
    skills: ['Inference', 'Characterisation', 'Setting'],
  },
  {
    id: 'image-8',
    type: 'Inference Puzzle',
    title: 'Colour and Mood in Art',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 7', 'Year 8'],
    content: '[Image: A painting predominantly in greys and blues vs. one in warm reds and golds]',
    instructions:
      '1) Describe the mood of each painting. 2) How do colours evoke emotion? 3) How could you recreate these colour palettes in writing?',
    answers:
      'Grey/blue: Melancholy, cold, isolation, depression. Red/gold: Warmth, passion, joy, energy.\nColour psychology: Cool colours = calm, sad; warm = exciting, joyful.\nIn writing: Use imagery tied to colour (grey sky, golden light, blue shadows) to evoke mood without stating emotion directly.',
    duration: 4,
    skills: ['Inference', 'Mood', 'Colour Symbolism'],
  },
  {
    id: 'image-9',
    type: 'Inference Puzzle',
    title: 'Body Language and Relationship Dynamics',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 8', 'Year 9'],
    content:
      '[Image: Two figures in conversation-one leaning in, one leaning back; or one standing above, one sitting]',
    instructions:
      '1) What does body language reveal about power dynamics? 2) Infer the relationship between these people. 3) Rewrite the scene reversing the power dynamic. 4) How does spatial relationship convey subtext?',
    answers:
      'Leaning in = interest, engagement, intimacy. Leaning back = withdrawal, caution, distance. Standing over = authority; sitting = submissiveness.\nSubtext is crucial in dialogue. Physical positioning tells audience what words conceal.\nReversing dynamics: Changes meaning entirely. Shows how body language communicates often more than words.',
    duration: 5,
    skills: ['Inference', 'Subtext', 'Characterisation'],
  },
  {
    id: 'image-10',
    type: 'Inference Puzzle',
    title: 'Absence and Negative Space',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content:
      '[Image: A large, empty room with minimal furniture; or a crowd with one person missing]',
    instructions:
      '1) What does emptiness/absence convey emotionally? 2) How is "what is not there" as important as what is? 3) How does literature use absence to create meaning?',
    answers:
      "Emptiness: Loneliness, loss, potential, abandonment, freedom, void. What's missing matters as much as what's present.\nLiterature: Silence in dialogue reveals tension. Missing parent shapes character's psychology. Absent mention of character's past suggests trauma.\nPower of omission: Sometimes what is not said/shown creates stronger effect than explicit description.",
    duration: 5,
    skills: ['Inference', 'Symbolism', 'Absence as Meaning'],
  },

  // ──────────────────────────────────────────────
  // SPEED WRITING AND FILL-THE-GAP CHALLENGES (5)
  // ──────────────────────────────────────────────
  {
    id: 'speed-6',
    type: 'Creative Prompt',
    title: 'Two-Minute Dialogue Challenge',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 8', 'Year 9'],
    content:
      'Write dialogue between two people where one is lying and one is trying to catch them out. Go!',
    instructions:
      'Two minutes, no stopping. Aim for natural speech patterns, hesitations, deflections. Quality is secondary; fluency is primary.',
    answers:
      "Success: Catches lies in how they're told (evasion, over-explaining, inconsistency), not just content. Dialogue feels natural. Conflict is clear.",
    duration: 5,
    skills: ['Creative Writing', 'Dialogue', 'Fluency'],
  },
  {
    id: 'speed-7',
    type: 'Grammar Fix',
    title: 'Spot the Error - Five Sentences',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 8', 'Year 9'],
    content:
      '1. "The students have finished their assignment."\n2. "Altho it were late, he continued working."\n3. "She walked to the store and buying groceries."\n4. "Who did you give the money to?"\n5. "Its important to ask for clarification."',
    instructions: '1) Identify errors. 2) Correct them. 3) Explain the rule for each.',
    answers:
      '1. Correct. 2. "Although it was late" (tense consistency, correct spelling). 3. "walked and bought" (parallel structure). 4. Correct (acceptable to end with preposition). 5. "It\'s important" (it is, not its-possession).',
    duration: 4,
    skills: ['Grammar', 'Proofreading'],
  },
  {
    id: 'speed-8',
    type: 'Vocabulary Challenge',
    title: 'Replace the Overused Word',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content: 'Overused: "very", "good", "bad", "interesting", "said"',
    instructions:
      'For each word, suggest five alternatives ranked by intensity/nuance. Then rewrite a paragraph eliminating these words entirely.',
    answers:
      'Very: extremely, remarkably, exceptionally, significantly, greatly.\nGood: excellent, superb, effective, admirable, commendable.\nBad: atrocious, dreadful, ineffective, deplorable, poor.\nInteresting: compelling, intriguing, thought-provoking, captivating, enlightening.\nSaid: whispered, exclaimed, declared, muttered, insisted.',
    duration: 5,
    skills: ['Vocabulary', 'Writing Refinement'],
  },
  {
    id: 'speed-9',
    type: 'Grammar Fix',
    title: 'Correct the Quotation',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 9', 'Year 10'],
    content: `Incorrect quotation integration:\n"The author states, ''Shakespeare was a genius'' in the preface."\n\nCorrect it.`,
    instructions:
      '1) Identify punctuation errors. 2) Rewrite correctly. 3) Discuss: What is the rule for integrating quotations?',
    answers: `Error: Quotation marks (uses single quotes; doubles are preferred). Missing context.\nCorrect: "The author states in the preface, 'Shakespeare was a genius.'" or "In the preface, the author argues that 'Shakespeare was a genius.'"\nRule: Quote must integrate smoothly into sentence grammar; introduce with context; punctuate correctly (comma/colon before, period inside quotes in British style).`,
    duration: 4,
    skills: ['Grammar', 'Quotation', 'Academic Writing'],
  },
  {
    id: 'speed-10',
    type: 'Vocabulary Challenge',
    title: 'Homophone Hotspot',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 7', 'Year 8'],
    content:
      "Homophones (sound the same, different meaning/spelling):\nThere/their/they're\nTo/too/two\nWhere/wear\nRight/write\nNo/know",
    instructions:
      '1) Define each. 2) Write sentences using each correctly. 3) Create a mnemonic or rule to remember them.',
    answers:
      'There (place), their (possession), they\'re (they are).\nTo (direction), too (also), two (number 2).\nWhere (place), wear (to put on).\nRight (correct/direction), write (compose text).\nNo (negative), know (understand).\nMemory trick: "Their" has "heir" (possessor). "They\'re" = they + are (contraction).',
    duration: 4,
    skills: ['Vocabulary', 'Spelling', 'Grammar'],
  },
  ,
  // ──────────────────────────────────────────────
  // RETRIEVAL PRACTICE STARTERS (10)
  // ──────────────────────────────────────────────
  {
    id: 'retrieval-1',
    type: 'Retrieval Practice',
    title: 'Character Background Recall - Macbeth',
    text: 'Macbeth',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Without looking at the text: List five key facts about Macbeth before he meets the witches. Include: his rank, his military reputation, his relationship with Duncan, his emotional state, and one significant action early in the play.',
    instructions:
      'Write from memory. After writing, check your answers against the text. Correct or add any missing details. Note which facts you recalled easily and which were harder-this shows what needs more revision.',
    answers:
      'Macbeth is Thane of Glamis, a respected general celebrated for his bravery in battle, loyal to King Duncan initially, ambitious and quick to act, kills the Norwegian King in battle. He meets the witches after the battle, seemingly by chance.',
    duration: 5,
    skills: ['Retrieval', 'Text Knowledge', 'Active Recall'],
  },
  {
    id: 'retrieval-2',
    type: 'Retrieval Practice',
    title: 'Plot Summary Sequence - Romeo and Juliet',
    text: 'Romeo and Juliet',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Write five major plot points from Romeo and Juliet in order. Include: 1) Opening conflict, 2) The meeting, 3) Secret marriage, 4) Escalating tension, 5) Tragic ending. Write 1-2 sentences for each.',
    instructions:
      'Test your knowledge without notes. Aim for accuracy in sequence and causality. Are events logically connected? After writing, read your summary-does it read like a coherent tragedy?',
    answers:
      "1) Montague-Capulet feud sets stage. 2) Romeo and Juliet meet at ball, fall instantly in love. 3) They marry secretly with Friar Lawrence's help. 4) Tybalt's death and Romeo's banishment separate them. 5) Miscommunication leads to double suicide.",
    duration: 6,
    skills: ['Retrieval', 'Sequencing', 'Plot Analysis'],
  },
  {
    id: 'retrieval-3',
    type: 'Retrieval Practice',
    title: 'Key Quote Memory Bank - An Inspector Calls',
    text: 'An Inspector Calls',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Recall and write five important quotations from An Inspector Calls. For each, note: 1) Who says it, 2) Context (when/why), 3) What it reveals about theme or character.',
    instructions:
      "Work from memory. If stuck, use textual clues rather than guessing. After writing, compare against the text. Create a revision note on WHY each quote matters to the play's message.",
    answers:
      '"We don\'t live alone"-Inspector, final speech, collective responsibility. "I\'ve nothing to be ashamed of"-Birling, self-deception. "I\'m going to tell the police"-Eva\'s father, pride/shame. "One Eva Smith has gone"-Inspector, her worth. "It\'s bound to end badly"-Eric, foreshadowing.',
    duration: 7,
    skills: ['Retrieval', 'Quotation', 'Textual Knowledge'],
  },
  {
    id: 'retrieval-4',
    type: 'Retrieval Practice',
    title: 'Character Details Audit - A Christmas Carol',
    text: 'A Christmas Carol',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      "Write what you recall about three characters (Scrooge, Bob Cratchit, Tiny Tim): their socioeconomic status, their values, their role in Scrooge's redemption, and one specific scene showing their significance.",
    instructions:
      'Test yourself on depth of knowledge. Include specific details (not vague generalisations). Then check against text. Rate your recall: Excellent (mostly correct), Good (some gaps), or Fair (significant gaps).',
    answers:
      "Scrooge: Wealthy, miserly, isolated, transformed by spirits, learns charity. Bob Cratchit: Poor clerk, hardworking, loving father, represents human cost of greed. Tiny Tim: Sickly boy, innocent, his potential death spurs Scrooge's change.",
    duration: 6,
    skills: ['Retrieval', 'Characterisation', 'Text Knowledge'],
  },
  {
    id: 'retrieval-5',
    type: 'Retrieval Practice',
    title: 'Poetry Themes Recall - Love and Relationships',
    text: 'Love and Relationships Poetry',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'List six poems from the Love and Relationships anthology and briefly state the central theme of each. Then identify two poems that contrast each other and explain how.',
    instructions:
      'Retrieve from memory. Accuracy counts. Your comparison reveals depth of understanding. After writing, check titles and themes against anthology.',
    answers:
      'Example themes: Passionate union, passionate loss, social constraint, sexual autonomy, familial love, platonic friendship. Contrasts: "Passionate Love" vs. "Love\'s Limitations" shows different perspectives.',
    duration: 7,
    skills: ['Retrieval', 'Poetry Analysis', 'Theme Comparison'],
  },
  {
    id: 'retrieval-6',
    type: 'Retrieval Practice',
    title: 'Historical Context Recall - Jekyll and Hyde',
    text: 'Jekyll and Hyde',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'From memory, write five historical/social contexts relevant to Jekyll and Hyde: Victorian ideas about science, morality, social reputation, dual nature, class. For each, explain how it shapes the novel.',
    instructions:
      "Write without checking. Then verify accuracy. How does context deepen your understanding of Jekyll's choices and the tragedy?",
    answers:
      "Science: Victorians feared experimentation; Jekyll's hubris reflects scientific ambition. Morality: Strict codes demanded perfect public image, driving repression. Reputation: Social status paramount; scandal ruins lives. Duality: Reflects Victorian anxiety about hidden desires. Class: Hyde can act freely in lower-class areas, showing class prejudice.",
    duration: 6,
    skills: ['Retrieval', 'Context', 'Literary Analysis'],
  },
  {
    id: 'retrieval-7',
    type: 'Retrieval Practice',
    title: 'Structural Features Recall - Lord of the Flies',
    text: 'Lord of the Flies',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      'Recall five key structural features of Lord of the Flies: Plot milestones, symbolic objects, chapter progression, point of view shifts, and any cyclical/circular patterns. Write one sentence on each.',
    instructions:
      'From memory, explain how structure serves theme. Does structure reinforce the descent into chaos? Does it echo any real-world patterns?',
    answers:
      'Milestones: Crash→camp→hunting→conflict→rescue. Conch: democracy→tyranny. Chapters progress: order→breakdown→savagery. POV: Third person (omniscient). Circularity: Begins with rescue from war, ends with rescue interrupted by "civilization\'s" warships.',
    duration: 6,
    skills: ['Retrieval', 'Structure', 'Pattern Recognition'],
  },
  {
    id: 'retrieval-8',
    type: 'Retrieval Practice',
    title: 'Language Technique Spotting - Animal Farm',
    text: 'Animal Farm',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      'Recall five key language techniques in Animal Farm: Allegory, propaganda, repetition, manipulation of language, irony. For each, give a specific example from the text (from memory) and explain its effect.',
    instructions:
      'Work without notes. Accuracy and specific evidence count. After writing, verify examples against text. Missing specifics? Make a note for revision.',
    answers:
      'Allegory: Entire farm=USSR. Propaganda: Squealer\'s lies reshape reality. Repetition: "All animals equal" then "but some more equal." Language corruption: "Comrade" to control. Irony: Pigs become the oppressors they overthrew.',
    duration: 6,
    skills: ['Retrieval', 'Language Analysis', 'Allegory'],
  },
  {
    id: 'retrieval-9',
    type: 'Retrieval Practice',
    title: 'Exam Question Technique Recall - Power and Conflict',
    text: 'Power and Conflict Poetry',
    examBoard: ['AQA', 'Edexcel', 'OCR'],
    yearGroup: ['Year 10', 'Year 11'],
    content:
      'Recall the names of five poems from Power and Conflict. For each, write: 1) The central conflict, 2) Who wields power, 3) One significant image/phrase, 4) One theme link to another poem.',
    instructions:
      'Without notes, test retrieval. Depth of comparison reveals learning. After writing, check poetry anthology. Where are your knowledge gaps?',
    answers:
      'Examples: "War Photographer"-conflict between civilian vs. war, power of image. "Exposure"-soldiers vs. nature, power of harsh conditions. "Poppies"-mother vs. soldier\'s absence, power of memory. Links: All explore powerlessness against larger forces.',
    duration: 7,
    skills: ['Retrieval', 'Poetry Analysis', 'Comparative Thinking'],
  },
  {
    id: 'retrieval-10',
    type: 'Retrieval Practice',
    title: 'Exam Command Word Recall - Assessment Techniques',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      'Recall common exam command words: Analyse, Evaluate, Compare, Assess, Discuss, Interpret. For each, write: 1) What it demands, 2) How to structure your response, 3) Common mistakes students make.',
    instructions:
      "Work from memory of feedback you've received. After writing, check against exam board guidance. Are you answering the right question type?",
    answers:
      'Analyse: Break down, explain impact/effect. Evaluate: Judge merits/limitations, use evidence. Compare: Similarities AND differences. Assess: Determine significance/value. Discuss: Explore different perspectives. Interpret: Explain meaning/intention. Mistakes: Not addressing all parts, assertion without evidence, surface-level thinking.',
    duration: 5,
    skills: ['Retrieval', 'Exam Technique', 'Academic Vocabulary'],
  },

  // ──────────────────────────────────────────────
  // VOCABULARY STARTERS (10)
  // ──────────────────────────────────────────────
  {
    id: 'vocab-ext-1',
    type: 'Vocabulary Challenge',
    title: 'Etymology Explorer - Greek and Latin Roots',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      'Greek/Latin roots: "Phobos" (fear), "Graphia" (writing), "Logos" (word/reason), "Pathos" (feeling), "Chronos" (time).',
    instructions:
      'For each root, list four English words containing it. Then use one word in a literary analysis sentence (e.g., "The chronological structure emphasizes…").',
    answers:
      'Phobos: phobia, agoraphobia, photophobia, xenophobia. Graphia: biography, geography, calligraphy, demographic. Logos: biology, psychology, analogy, dialogue. Pathos: pathos, sympathy, empathy, telepathy. Chronos: chronology, anachronism, chronicle, synchronise.',
    duration: 5,
    skills: ['Vocabulary', 'Etymology', 'Word Formation'],
  },
  {
    id: 'vocab-ext-2',
    type: 'Vocabulary Challenge',
    title: 'Connotation vs. Denotation - Shades of Meaning',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Word sets with different connotations: Stubborn/determined, nosy/curious, carefree/irresponsible, thrifty/stingy, confident/arrogant.',
    instructions:
      'For each pair: 1) Write the neutral definition (denotation). 2) Explain the emotional association (connotation) of each word. 3) Write two sentences-one using each word-to show the tone shift.',
    answers:
      'Stubborn (negative persistence) vs. determined (positive resolve). Nosy (intrusive judgment) vs. curious (inquisitive respect). Carefree (lighthearted) vs. irresponsible (reckless). Thrifty (wise saving) vs. stingy (miserly). Confident (assured) vs. arrogant (presumptuous).',
    duration: 5,
    skills: ['Vocabulary', 'Connotation', 'Tone'],
  },
  {
    id: 'vocab-ext-3',
    type: 'Vocabulary Challenge',
    title: 'Academic Transition Words - Cohesion Builders',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    content:
      'Categories: Addition (furthermore, additionally), contrast (conversely, nonetheless), cause-effect (consequently, therefore), exemplification (for instance, namely).',
    instructions:
      '1) Write three sentences using transitions from different categories to link ideas. 2) Rewrite WITHOUT transitions-note how meaning becomes muddled. 3) Which transitions are most formal/academic?',
    answers:
      'Addition: furthermore, moreover, in addition, also. Contrast: conversely, however, nonetheless, whereas. Cause-effect: consequently, therefore, thus, as a result. Exemplification: for instance, namely, such as, specifically. Most academic: Furthermore, consequently, moreover (avoid: also, but, so in formal writing).',
    duration: 5,
    skills: ['Vocabulary', 'Academic Writing', 'Cohesion'],
  },
  {
    id: 'vocab-ext-4',
    type: 'Vocabulary Challenge',
    title: 'Synonyms and Antonyms - Precision in Word Choice',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content: 'Words: Beautiful, happy, sad, bright, cold, small, big, angry.',
    instructions:
      '1) For each word, list three synonyms and rank them by intensity. 2) List antonyms. 3) Rewrite a paragraph replacing these words with more specific synonyms (no repetition).',
    answers:
      'Beautiful: lovely, exquisite, stunning (most intense). Happy: content, elated, cheerful. Sad: melancholy, despondent, sorrowful. Bright: luminous, vivid, radiant. Cold: frigid, icy, chilly. Small: tiny, minuscule, compact. Big: enormous, colossal, vast. Angry: furious, irate, indignant.',
    duration: 6,
    skills: ['Vocabulary', 'Thesaurus Use', 'Writing Precision'],
  },
  {
    id: 'vocab-ext-5',
    type: 'Vocabulary Challenge',
    title: 'Subject-Specific Vocabulary - Literary Terms',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      'Literary terms: Motif, archetype, denouement, dramatic irony, foreshadowing, symbolism, metonymy, oxymoron.',
    instructions:
      '1) Define each term in one sentence. 2) Give a literary example for each. 3) Write an analytical sentence using three of these terms correctly.',
    answers:
      "Motif: Recurring element. Archetype: Universal character type. Denouement: Resolution/conclusion. Dramatic irony: Audience knows what character doesn't. Foreshadowing: Hints at future events. Symbolism: Objects represent ideas. Metonymy: Substitute name (crown=power). Oxymoron: Contradictory terms (bittersweet).",
    duration: 6,
    skills: ['Vocabulary', 'Literary Analysis', 'Academic Language'],
  },
  {
    id: 'vocab-ext-6',
    type: 'Vocabulary Challenge',
    title: 'Word Families - Building Connections',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9'],
    content:
      'Base words: Create, respond, evaluate, sustain, interpret. Build word families by adding prefixes/suffixes.',
    instructions:
      '1) For each base word, create a family of 4-5 related words (noun, verb, adjective, adverb forms). 2) Use each form in a sentence. 3) Notice patterns in meaning change.',
    answers:
      'Create: creation, creator, creative, creativity, recreate. Respond: response, respondent, responsive, irresponsible, responsibly. Evaluate: evaluation, evaluator, evaluative, re-evaluate. Sustain: sustainability, sustainable, sustenance, unsustainable. Interpret: interpretation, interpreter, interpretive, misinterpret, reinterpretation.',
    duration: 6,
    skills: ['Vocabulary', 'Word Formation', 'Morphology'],
  },
  {
    id: 'vocab-ext-7',
    type: 'Vocabulary Challenge',
    title: 'Emotive Language - Building Persuasive Power',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Rewrite neutral sentences with emotive vocabulary to shift tone: (Positive, Negative, Neutral versions needed).',
    instructions:
      '1) Take a neutral statement. 2) Rewrite using positive emotive words. 3) Rewrite using negative emotive words. 4) Analyze how vocabulary changes persuasive impact.',
    answers:
      'Neutral: "The government made a decision." Positive: "The government courageously implemented progressive reform." Negative: "The government callously imposed draconian measures." Impact: Word choice persuades reader toward specific perspective without changing facts.',
    duration: 5,
    skills: ['Vocabulary', 'Persuasion', 'Tone'],
  },
  {
    id: 'vocab-ext-8',
    type: 'Vocabulary Challenge',
    title: 'Context Clues Detective - Inferring Unknown Words',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content:
      'Passages with unfamiliar words embedded in context clues. Students must infer meaning without a dictionary.',
    instructions:
      '1) Read each passage. 2) Identify the unfamiliar word. 3) Use surrounding context to infer meaning. 4) Check your inference against a dictionary. 5) Reflect: Which clues helped most?',
    answers:
      'Effective context clues: Definition clues ("X, or a Y"), contrast clues ("unlike X, Y is…"), example clues ("such as…"), inference from surrounding sentence logic.',
    duration: 5,
    skills: ['Vocabulary', 'Context', 'Reading Comprehension'],
  },
  {
    id: 'vocab-ext-9',
    type: 'Vocabulary Challenge',
    title: 'Colloquialism vs. Formal Register - Code-Switching',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Colloquial phrases: "gonna", "kinda", "yeah", "gonna mess up", "cool", "awesome". Formal equivalents: "going to", "somewhat", "yes", "fail/disappoint", "excellent", "remarkable".',
    instructions:
      '1) Match colloquialisms to formal equivalents. 2) Write a paragraph in colloquial register, then rewrite in formal academic register. 3) When is each appropriate?',
    answers:
      'Colloquial: Conversation, creative writing, character voice. Formal: Essays, analysis, professional writing. Academic English requires formal register; creative writing may use colloquial for authenticity/voice.',
    duration: 5,
    skills: ['Vocabulary', 'Register', 'Academic Writing'],
  },
  {
    id: 'vocab-ext-10',
    type: 'Vocabulary Challenge',
    title: 'Idioms and Figurative Phrases - Literal vs. Figurative',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content:
      'Idioms: "Break the ice", "cost an arm and a leg", "piece of cake", "hit the books", "spill the beans".',
    instructions:
      "1) Define each idiom's figurative meaning. 2) Explain the likely origin of the phrase. 3) Use each in a sentence. 4) Rewrite each using literal language-how does meaning change?",
    answers:
      '"Break the ice": Initiate conversation. "Cost an arm and a leg": Very expensive. "Piece of cake": Easy task. "Hit the books": Study hard. "Spill the beans": Reveal secrets. Literal versions sound awkward/nonsensical, showing idioms\' power to convey meaning efficiently.',
    duration: 5,
    skills: ['Vocabulary', 'Idioms', 'Figurative Language'],
  },

  // ──────────────────────────────────────────────
  // READING SKILL STARTERS (10)
  // ──────────────────────────────────────────────
  {
    id: 'reading-1',
    type: 'Reading Skill',
    title: 'Skimming for Main Ideas - Speed Reading',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content:
      'Provide a 300-400 word passage (news article, essay, short story excerpt). Students have 90 seconds.',
    instructions:
      'Read the passage quickly, without stopping on every word. Write down the main idea in one sentence. Then list three key supporting points. Check your answers against the text-did you catch the essentials?',
    answers:
      "Effective skimming: Read title/first sentence, topic sentence of each paragraph, final paragraph. Ignore minor details, examples, descriptive phrases. Main idea should summarise the passage's purpose/argument.",
    duration: 3,
    skills: ['Reading', 'Skimming', 'Main Idea'],
  },
  {
    id: 'reading-2',
    type: 'Reading Skill',
    title: 'Scanning for Specific Information',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content:
      'Provide a multi-paragraph passage with scattered factual information (dates, names, statistics). Set four specific questions (e.g., "What year did X happen?" "Who said Y?").',
    instructions:
      'Scan the passage quickly for answers to your four questions. Use eye-tracking, not full reading. Time yourself. Compare speed with skimming. When is scanning most useful?',
    answers:
      'Scanning locates specific details quickly. Useful for: exam questions, research, fact-checking. Look for keywords (names, numbers, dates), not full comprehension. Skim first (understand context), then scan (find specifics).',
    duration: 4,
    skills: ['Reading', 'Scanning', 'Information Retrieval'],
  },
  {
    id: 'reading-3',
    type: 'Reading Skill',
    title: 'Close Reading for Inference - Between the Lines',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Provide a short passage (150-200 words) with implicit meanings and unstated implications.',
    instructions:
      "1) Read slowly, word by word. 2) Annotate: underline unfamiliar words, mark tone shifts, circle potential double meanings. 3) Write three inferences about the author's attitude/the characters' subtext. 4) Support each inference with textual evidence.",
    answers:
      'Close reading: Examines language carefully (word choice, syntax, imagery). Uncovers layers of meaning. Inferences are educated guesses based on evidence, not assumptions. Always cite text to support interpretation.',
    duration: 6,
    skills: ['Reading', 'Close Reading', 'Inference', 'Analysis'],
  },
  {
    id: 'reading-4',
    type: 'Reading Skill',
    title: "Identifying Author's Purpose and Tone",
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Provide three short passages with different purposes: persuasive, informative, entertaining.',
    instructions:
      "1) Read each passage. 2) Identify the author's primary purpose. 3) Describe the tone in 2-3 words (e.g., formal, satirical, urgent). 4) Point to specific words/phrases that reveal purpose and tone. 5) How might the text change if purpose/tone shifted?",
    answers:
      "Purpose: Why the author writes (persuade, inform, entertain, warn). Tone: Author's attitude (serious, cynical, hopeful). Word choice, punctuation, imagery, sentence structure reveal both. Purpose and tone are interconnected.",
    duration: 5,
    skills: ['Reading', "Author's Purpose", 'Tone', 'Analysis'],
  },
  {
    id: 'reading-5',
    type: 'Reading Skill',
    title: 'Paragraph-by-Paragraph Breakdown - Building Understanding',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Provide a 5-6 paragraph passage (academic article, literary excerpt, persuasive essay).',
    instructions:
      '1) Read one paragraph at a time. 2) For each paragraph, write: topic sentence, 2-3 key points, connection to previous/next paragraph. 3) Create a paragraph outline. 4) Use outline to write a summary.',
    answers:
      'Paragraph structure: Topic sentence states main idea; supporting sentences develop it; concluding sentence transitions or reinforces. Outlining ensures deep comprehension. Summaries should reflect paragraph order and relationships.',
    duration: 7,
    skills: ['Reading', 'Comprehension', 'Paragraph Analysis', 'Summarisation'],
  },
  {
    id: 'reading-6',
    type: 'Reading Skill',
    title: 'Vocabulary in Context - Reading Fluency',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content:
      'Passage with 5-7 challenging vocabulary words embedded naturally. Students should NOT use dictionary.',
    instructions:
      '1) Read the passage. 2) Underline unfamiliar words. 3) Use context clues (surrounding sentences, synonyms, contrast, examples) to infer meaning. 4) Write your inference. 5) Check dictionary. 6) Reflect: Were context clues sufficient?',
    answers:
      'Context clues: definition/restatement, contrast, example, inference from sentence logic, word roots. Strong readers infer meaning without stopping; builds fluency.',
    duration: 5,
    skills: ['Reading', 'Vocabulary', 'Fluency', 'Context'],
  },
  {
    id: 'reading-7',
    type: 'Reading Skill',
    title: 'Fact vs. Opinion - Critical Reading',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content: 'Provide a persuasive passage mixing factual claims and opinions.',
    instructions:
      '1) Read carefully. 2) Identify 3-4 factual statements (verifiable) and 3-4 opinions (beliefs, judgments). 3) Mark each. 4) For opinions, note the persuasive language used. 5) Evaluate: Is the argument well-supported with facts?',
    answers:
      'Fact: Verifiable, objective, provable. Opinion: Belief, judgment, interpretation (uses "should", "believe", evaluative language). Strong arguments balance both. Recognising opinion protects against manipulation.',
    duration: 5,
    skills: ['Reading', 'Critical Thinking', 'Analysis'],
  },
  {
    id: 'reading-8',
    type: 'Reading Skill',
    title: 'Text Structure and Organisation',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Provide passages with different structures: chronological, cause-effect, comparison, problem-solution, descriptive.',
    instructions:
      "1) Read each passage. 2) Identify its structure. 3) Explain how structure serves the author's purpose. 4) Rewrite one passage in a different structure-how does meaning/impact change?",
    answers:
      'Structures: Chronological (time order), cause-effect (consequences), comparison (similarities/differences), problem-solution (issue + remedy), descriptive (sensory detail). Structure guides reader logic and reinforces message.',
    duration: 6,
    skills: ['Reading', 'Text Structure', 'Comprehension'],
  },
  {
    id: 'reading-9',
    type: 'Reading Skill',
    title: 'Bias and Perspective - Reading Media Critically',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content: 'Provide two articles on the same topic from different sources/perspectives.',
    instructions:
      "1) Read both. 2) Identify bias in each (language choice, omitted information, emphasis). 3) Note author's perspective/agenda. 4) Locate objective facts both share. 5) Summarise: How do different framings shape reader interpretation?",
    answers:
      "Bias: Prejudice, slant toward specific viewpoint. Sources: emotive language, selective facts, loaded examples, omissions. Perspective: Author's position/beliefs. Critical readers identify bias; consume multiple sources; separate fact from interpretation.",
    duration: 6,
    skills: ['Reading', 'Critical Thinking', 'Bias', 'Media Literacy'],
  },
  {
    id: 'reading-10',
    type: 'Reading Skill',
    title: 'Annotation Strategies - Active Reading',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Provide a passage (300-400 words, poetry or prose). Students annotate using: highlighting, underlining, marginal notes, question marks, exclamation points.',
    instructions:
      '1) Read and annotate: Key ideas, unfamiliar words, tone shifts, important details, questions, connections to themes/other texts. 2) Use different marks for different purposes. 3) After annotating, write a summary using only your annotations-did they capture essentials?',
    answers:
      'Effective annotation: Minimal but meaningful, uses consistent symbols, captures main ideas and important details without over-marking, enables quick review. Supports comprehension, memory, and analysis.',
    duration: 5,
    skills: ['Reading', 'Annotation', 'Active Learning', 'Note-Taking'],
  },

  // ──────────────────────────────────────────────
  // WRITING WARM-UPS (10)
  // ──────────────────────────────────────────────
  {
    id: 'writing-warm-1',
    type: 'Writing Warm-up',
    title: 'Timed Free-Write - Fluency Builder',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content:
      'Prompt: "Write about a moment when you had to make a difficult choice." OR use story-starter: "The letter arrived on a Tuesday morning…"',
    instructions:
      'Write for 5 minutes non-stop. Do NOT stop to correct, reread, or plan-just write. Focus on fluency, not perfection. After 5 minutes, read your work. Highlight one strong sentence. Note one area to improve.',
    answers:
      "Free-writing: Generates ideas quickly, builds confidence, combats writer's block, improves fluency. Grammar/spelling are secondary. Volume matters. Later, refine through revision.",
    duration: 5,
    skills: ['Writing', 'Fluency', 'Idea Generation'],
  },
  {
    id: 'writing-warm-2',
    type: 'Writing Warm-up',
    title: 'Sentence Combining - Building Complexity',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content: 'Simple sentences: "The girl walked to school. She was late. She ran the last block."',
    instructions:
      '1) Combine these into one complex sentence using subordination/coordination. 2) Aim for elegance and flow. 3) Rewrite using different structures (comma splice, semi-colon, dependent clause). 4) Which version reads best? Why?',
    answers:
      'Combined: "Because the girl was late, she ran the last block to school." OR "The girl, running late, sprinted the last block to school." Complex sentences: more sophisticated, show relationships between ideas, improve readability.',
    duration: 4,
    skills: ['Writing', 'Syntax', 'Sentence Variety'],
  },
  {
    id: 'writing-warm-3',
    type: 'Writing Warm-up',
    title: 'Descriptive Imagery - Sensory Writing',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Object: A rainy day, an old library, a crowded market, a hospital waiting room (choose one).',
    instructions:
      '1) Write 2-3 paragraphs describing your object using all five senses (sight, sound, smell, taste, touch). 2) Use precise adjectives and vivid verbs. 3) Avoid clichés (e.g., "cold as ice"). 4) Read aloud-does it evoke the sensory experience?',
    answers:
      'Strong sensory writing: Specific details (not generic), engages multiple senses, uses precise language, creates atmosphere, makes reader feel immersed. Clichés flatten language.',
    duration: 6,
    skills: ['Writing', 'Imagery', 'Description', 'Style'],
  },
  {
    id: 'writing-warm-4',
    type: 'Writing Warm-up',
    title: 'Dialogue Writing - Natural Speech',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Scenario: Two friends arguing about borrowed money. OR A job interview. OR A secret being revealed.',
    instructions:
      '1) Write the dialogue (at least 8 lines per character). 2) Make speech feel natural-include hesitations, interruptions, contractions, informal language where appropriate. 3) Use action beats (He paused. She crossed her arms.) to show subtext. 4) Punctuate correctly (new speaker = new line).',
    answers:
      'Good dialogue: Advances plot/reveals character, varies sentence length, includes pauses/interruptions, shows subtext through word choice and action, uses correct formatting.',
    duration: 6,
    skills: ['Writing', 'Dialogue', 'Characterisation'],
  },
  {
    id: 'writing-warm-5',
    type: 'Writing Warm-up',
    title: 'Paragraph Expansion - Adding Detail and Depth',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Thin paragraph: "The character was sad. She sat alone. She thought about what happened. It made her feel worse."',
    instructions:
      '1) Expand this paragraph to 8-10 sentences. 2) Add specific details, sensory imagery, internal thoughts, context. 3) Vary sentence length and structure. 4) Show emotion rather than tell it. 5) Original paragraph now has depth?',
    answers:
      'Expanded: Specific setting, physical details of sadness (tears, posture), specific memory, internal conflict. "Showing" uses imagery and action; "telling" states emotions. Show > tell in creative writing.',
    duration: 5,
    skills: ['Writing', 'Detail', 'Descriptive Writing'],
  },
  {
    id: 'writing-warm-6',
    type: 'Writing Warm-up',
    title: 'Perspective Shift - Writing from Different Viewpoints',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10'],
    content:
      'Scene: A teacher returns a disappointing exam. Write it from three perspectives: teacher, student who got an A, student who failed.',
    instructions:
      '1) Write the same scene three times, one from each perspective. 2) Show how perspective changes what each character notices, feels, values. 3) Use different tones/vocabulary for each voice. 4) Compare: How does perspective shape meaning?',
    answers:
      'POV shapes meaning: Teacher focuses on class performance; high achiever on competition; struggling student on shame/determination. Same event, different emotional weight. Practice shifts reader empathy.',
    duration: 7,
    skills: ['Writing', 'Perspective', 'Characterisation', 'Empathy'],
  },
  {
    id: 'writing-warm-7',
    type: 'Writing Warm-up',
    title: 'Revision and Editing - Second Draft Improvement',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 8', 'Year 9', 'Year 10', 'Year 11'],
    content:
      'Provide a student paragraph with errors: repetition, weak verbs, passive voice, unclear pronoun reference, spelling mistakes.',
    instructions:
      '1) Read the paragraph critically. 2) Identify THREE areas to improve (word choice, structure, clarity, spelling). 3) Rewrite, improving each area. 4) Read aloud-does it flow better? 5) What made the biggest difference?',
    answers:
      'Revision priorities: Clarity > style. Strong verbs, active voice, varied sentence length, no repetition, precise pronouns. Editing: Spelling, punctuation, grammar. Multiple drafts are normal.',
    duration: 5,
    skills: ['Writing', 'Revision', 'Editing', 'Proofreading'],
  },
  {
    id: 'writing-warm-8',
    type: 'Writing Warm-up',
    title: 'Analytical Writing - Structured Argument',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      'Statement: "Social media has more negative than positive effects on young people." Agree or disagree?',
    instructions:
      '1) Write a 3-paragraph response (intro + two body paragraphs + conclusion, or intro + one long body). 2) Structure: Topic sentence, evidence/examples, analysis/explanation. 3) Use academic tone. 4) Support claims with specific evidence. 5) Conclude thoughtfully.',
    answers:
      "Analytical structure: Clear thesis, topic sentences, evidence + explanation (not just examples), transitions, conclusion that reflects argument's complexity. Avoid assertion without proof.",
    duration: 8,
    skills: ['Writing', 'Analysis', 'Argumentation', 'Academic Writing'],
  },
  {
    id: 'writing-warm-9',
    type: 'Writing Warm-up',
    title: 'Creative Constraint Writing - Using Limitations',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 7', 'Year 8', 'Year 9'],
    content:
      'Constraint: Write a story using ONLY sentences of 5 words or fewer. OR Write without using the letter "E". OR Write using only questions.',
    instructions:
      '1) Choose a constraint. 2) Write for 5-10 minutes within that constraint. 3) After, read your work-surprisingly good despite limitation? 4) Reflect: How did constraint force creativity?',
    answers:
      'Constraints: Force conciseness, creativity, precision. Paradoxically, limitations free imagination-you problem-solve within boundaries, discover new possibilities. Fun revision exercise.',
    duration: 6,
    skills: ['Writing', 'Creativity', 'Precision'],
  },
  {
    id: 'writing-warm-10',
    type: 'Writing Warm-up',
    title: 'Literary Analysis Quick-Write - Evidence-Based Interpretation',
    text: 'general',
    examBoard: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    yearGroup: ['Year 9', 'Year 10', 'Year 11'],
    content:
      'Quote: (from a set text). Example: "I have no spur to prick the sides of my intent, but only vaulting ambition." (Macbeth)',
    instructions:
      '1) Write a 2-minute response: What does this quotation reveal about character/theme? 2) Support with textual evidence. 3) Use PEE paragraph structure (Point-Evidence-Explanation). 4) Refine for clarity and accuracy.',
    answers:
      'PEE: Point (topic sentence), Evidence (quotation + citation), Explanation (analysis of how quotation supports point). Strong analysis explains WHY evidence matters, not just WHAT it says.',
    duration: 5,
    skills: ['Writing', 'Analysis', 'Literary Interpretation', 'Evidence Use'],
  },
]
