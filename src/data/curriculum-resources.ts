// ── Curriculum Resources ──────────────────────────────────────────────────────
// Workbook content, homework tasks, PowerPoint descriptions, reading lists,
// vocabulary lists, and assessment rubrics for each year group.

export interface WorkbookExercise {
  title: string
  type:
    | 'annotation'
    | 'writing'
    | 'comprehension'
    | 'vocabulary'
    | 'grammar'
    | 'creative'
    | 'comparison'
    | 'analysis'
    | 'research'
    | 'discussion'
  instructions: string
  scaffolding?: string
  extensionTask?: string
}

export interface HomeworkTask {
  title: string
  unit: string
  description: string
  estimatedMinutes: number
  resources?: string
}

export interface SlideDescription {
  unit: string
  slideTitle: string
  content: string
  teacherNotes: string
}

export interface ReadingListEntry {
  title: string
  author: string
  genre: string
  difficulty: 'accessible' | 'moderate' | 'challenging'
  termRelevance: string
  description: string
}

export interface VocabularyEntry {
  word: string
  definition: string
  exampleSentence: string
  unit: string
  tier: 2 | 3
}

export interface RubricDescriptor {
  level: string
  description: string
}

export interface AssessmentRubric {
  title: string
  assessmentObjective: string
  descriptors: RubricDescriptor[]
}

export interface CurriculumResource {
  yearGroup: string
  theme: string
  workbook: WorkbookExercise[]
  homework: HomeworkTask[]
  slides: SlideDescription[]
  readingList: ReadingListEntry[]
  vocabulary: VocabularyEntry[]
  rubrics: AssessmentRubric[]
}

// ── Year 7 Resources ────────────────────────────────────────────────────────

const year7Resources: CurriculumResource = {
  yearGroup: 'Year 7',
  theme: 'Identity & Belonging',
  workbook: [
    {
      title: 'Autobiography Annotation Exercise',
      type: 'annotation',
      instructions:
        "Read the extract from Boy by Roald Dahl. Underline any words or phrases that reveal something about the narrator's personality or feelings. In the margin, write a brief note explaining what each underlined section tells us about the narrator. Use the abbreviation key: P = personality, F = feeling, R = relationship with others.",
      scaffolding:
        'Sentence stems for margin notes: "This shows he feels... because...", "This reveals that he is the kind of person who...", "The word [X] suggests..."',
      extensionTask:
        'Choose the most revealing quotation and write a PEE paragraph explaining what it tells us about the narrator and how the writer achieves this effect.',
    },
    {
      title: 'Building a PEE Paragraph',
      type: 'writing',
      instructions:
        'Using the quotation provided from the class novel, construct a PEE paragraph. Step 1: Write a clear Point that answers the question. Step 2: Select a short quotation (no more than 8 words) as your Evidence. Step 3: Explain what the quotation shows, focusing on the writer\'s word choices. Use the connective "This suggests that..." to begin your explanation.',
      scaffolding:
        'Template: [Character name] is presented as [adjective]. This is shown when [author] writes "[quotation]". This suggests that [explanation of what the evidence reveals], because the word "[specific word]" implies [deeper meaning].',
      extensionTask:
        'Add a Link sentence that connects your analysis back to the question or to a wider theme in the text.',
    },
    {
      title: 'Vocabulary Detective',
      type: 'vocabulary',
      instructions:
        "From this week's reading extract, identify five words you are unfamiliar with. For each word: (a) write the word and the sentence it appears in, (b) use context clues to guess the meaning, (c) look up the definition and write it in your own words, (d) write a new sentence using the word correctly.",
      extensionTask:
        'Choose your favourite new word and explain why the author chose this word instead of a simpler alternative. What effect does it create?',
    },
    {
      title: 'Descriptive Writing: A Place That Matters',
      type: 'creative',
      instructions:
        'Write a descriptive passage (200-300 words) about a place that is important to you. Focus on using sensory details: what you see, hear, smell, touch, and taste. Try to include at least one simile, one metaphor, and one example of personification. Structure your description spatially: describe what you notice first, then move deeper into the place.',
      scaffolding:
        'Planning frame: Opening image (what catches the eye first) → Sounds of the place → Textures and physical sensations → Smells and atmosphere → Closing image (what stays with you when you leave).',
      extensionTask:
        'Revise your description to include a shift in mood. Begin with a positive, warm tone and gradually introduce an element of unease or sadness. How does your language change?',
    },
    {
      title: 'Poetry Technique Identification',
      type: 'analysis',
      instructions:
        'Read the poem provided. Complete the technique table by finding one example of each of the following: simile, metaphor, personification, alliteration, enjambment, and repetition. For each example, write the quotation and a one-sentence explanation of its effect.',
      scaffolding:
        'Effect sentence stems: "This creates a sense of...", "This emphasises...", "The reader imagines...", "This makes the [character/setting/emotion] seem..."',
      extensionTask:
        'Which technique is the most effective in this poem? Write a paragraph arguing your choice with evidence.',
    },
    {
      title: 'Character Comparison Table',
      type: 'comparison',
      instructions:
        'Create a table comparing two characters from the novel. Use these headings: Character Name, Key Quotation 1, Key Quotation 2, Personality Traits, How Others See Them, How They Change. Complete the table for both characters, then write a short paragraph explaining the most significant difference between them.',
      extensionTask:
        'Why has the author created these two characters as contrasts? What theme or message do the differences between them highlight?',
    },
    {
      title: 'Grammar Focus: Sentence Types',
      type: 'grammar',
      instructions:
        'Identify and label each sentence in the provided extract as simple, compound, or complex. Then rewrite three of the simple sentences as complex sentences by adding a subordinate clause. Finally, write your own paragraph (5-6 sentences) about a memorable experience, deliberately using a mix of all three sentence types.',
      scaffolding:
        'Subordinate clause starters: Although..., Because..., While..., When..., If..., Despite the fact that..., Even though...',
    },
    {
      title: 'Reading Response Journal',
      type: 'comprehension',
      instructions:
        "After this week's reading, answer the following in your journal: (1) Summarise what happened in 3-4 sentences. (2) Choose one moment that surprised, confused, or interested you and explain why. (3) Make a prediction about what will happen next and support it with evidence from the text. (4) Write down one question you would ask the author about this section.",
    },
  ],
  homework: [
    {
      title: 'Autobiography Reading and Annotation',
      unit: 'Autobiography and Personal Narrative',
      description:
        'Read pages 15-25 of the class autobiographical text. Annotate at least three moments where the writer reveals something about their identity. For each annotation, write a brief note explaining what is revealed and how the writer conveys it.',
      estimatedMinutes: 30,
    },
    {
      title: 'PEE Paragraph Practice',
      unit: 'Autobiography and Personal Narrative',
      description:
        'Write two PEE paragraphs in response to the question: "How does the writer present their childhood experiences?" Use two different quotations from the extract studied in class. Each paragraph must include a Point, a short embedded quotation as Evidence, and an Explanation that focuses on word choice.',
      estimatedMinutes: 25,
    },
    {
      title: 'Vocabulary Consolidation',
      unit: 'Novel Study',
      description:
        "Using the 10 vocabulary words from this week's word wall, write a short story (150-200 words) that uses at least 7 of them correctly in context. Underline each vocabulary word.",
      estimatedMinutes: 20,
    },
    {
      title: 'Novel Prediction Task',
      unit: 'Novel Study',
      description:
        'Based on what you have read so far, write a prediction of 100-150 words explaining what you think will happen next in the novel and why. Support your prediction with at least two pieces of evidence from the text.',
      estimatedMinutes: 20,
    },
    {
      title: 'Poetry Response',
      unit: 'Poetry and Performance',
      description:
        'Read the poem provided on the homework sheet. Write a PEEL paragraph analysing how the poet presents the theme of identity. Focus on one specific technique and its effect on the reader.',
      estimatedMinutes: 25,
    },
    {
      title: 'Creative Writing Draft',
      unit: 'Autobiography and Personal Narrative',
      description:
        'Write the first draft of your autobiographical writing piece (300-400 words). Focus on one specific memory and describe it using sensory details. You will revise and improve this in class.',
      estimatedMinutes: 35,
    },
    {
      title: 'Spelling and Grammar Practice',
      unit: 'All units',
      description:
        'Complete the spelling and grammar worksheet. Section A: correct the 10 misspelled words. Section B: add the missing punctuation to the passage. Section C: rewrite three sentences to make them more descriptive by adding adjectives and adverbs.',
      estimatedMinutes: 15,
    },
    {
      title: 'Independent Reading Log',
      unit: 'All units',
      description:
        "Read your independent reading book for at least 20 minutes. In your reading log, record: the title and pages read, a brief summary of what happened, and one thing you noticed about the writer's style or technique.",
      estimatedMinutes: 25,
    },
  ],
  slides: [
    {
      unit: 'Autobiography and Personal Narrative',
      slideTitle: 'What Is Autobiography?',
      content:
        'Definition of autobiography versus biography and memoir. Key features: first person, real events, reflective tone, selective detail. Examples from well-known autobiographies with short extracts. Student discussion prompt: Why do people write about their own lives?',
      teacherNotes:
        "Use this as the opening lesson. Show photographs of the authors alongside their texts. Ask students to guess what the autobiography might be about from the author's photograph alone, then reveal the actual content. This hooks engagement and introduces the idea of curated identity.",
    },
    {
      unit: 'Autobiography and Personal Narrative',
      slideTitle: 'Reading Like a Writer: Narrative Voice',
      content:
        'Explanation of first-person narrative voice and its effects. Comparison of child narrator versus adult narrator reflecting on childhood. Guided annotation of a key extract with focus questions displayed alongside the text.',
      teacherNotes:
        'Model annotation on the visualiser. Read aloud with expression. Pause at pre-identified points to think aloud. Emphasise the difference between what the child narrator understands and what the adult writer knows, introducing dramatic irony at an accessible level.',
    },
    {
      unit: 'Novel Study',
      slideTitle: 'Introducing the Novel: Context and Predictions',
      content:
        'Author biography and historical context. Cover image analysis. Prediction activity based on the blurb and opening paragraph. Key vocabulary pre-teaching for the first chapter.',
      teacherNotes:
        'Spend time on context so students understand the world the characters inhabit. Use a KWL grid: What do you Know? What do you Want to know? (Fill in L at the end of the unit.) Pre-teach five essential vocabulary words using images and definitions.',
    },
    {
      unit: 'Novel Study',
      slideTitle: 'Character Analysis Workshop',
      content:
        'How to build a character profile using textual evidence. PEE paragraph model for character analysis. Collaborative activity: class builds a character analysis paragraph together. Independent task: students write their own character paragraph.',
      teacherNotes:
        'I Do, We Do, You Do structure. Display the model paragraph and annotate each element (Point, Evidence, Explanation). Then co-construct a second paragraph with student input. Only then release students to write independently. Circulate and provide verbal feedback during independent writing.',
    },
    {
      unit: 'Poetry and Performance',
      slideTitle: 'Introduction to Poetic Techniques',
      content:
        'Definitions and examples of simile, metaphor, personification, alliteration, onomatopoeia, enjambment, and caesura. Each technique paired with a real poem example. Quick-fire identification quiz. Practice activity: find the techniques in a new poem.',
      teacherNotes:
        'Use a matching activity first: students match technique names to definitions, then to examples. This ensures understanding before application. Keep the pace brisk. Use cold-calling during the quiz to maintain engagement.',
    },
    {
      unit: 'Poetry and Performance',
      slideTitle: 'Performing Poetry',
      content:
        'How tone of voice, pace, pause, and emphasis affect meaning. Modelling a performance of a short poem. Students annotate performance directions on their copy. Rehearsal time and performance assessment criteria shared.',
      teacherNotes:
        'Perform the poem yourself first, deliberately varying your delivery. Ask students which version was more effective and why. This teaches them that interpretation is a choice. Provide a simple performance rubric: clarity, expression, eye contact, pace, and connection to meaning.',
    },
  ],
  readingList: [
    {
      title: 'Boy',
      author: 'Roald Dahl',
      genre: 'Autobiography',
      difficulty: 'accessible',
      termRelevance: 'Term 1 - Autobiography and Personal Narrative',
      description:
        "Dahl's memoir of his childhood, covering school experiences and family life. Excellent for teaching narrative voice and selective detail.",
    },
    {
      title: 'Chinese Cinderella',
      author: 'Adeline Yen Mah',
      genre: 'Autobiography',
      difficulty: 'accessible',
      termRelevance: 'Term 1 - Autobiography and Personal Narrative',
      description:
        'A memoir of growing up unwanted in 1940s China. Rich in cultural context and themes of identity, family, and resilience.',
    },
    {
      title: 'Skellig',
      author: 'David Almond',
      genre: 'Novel',
      difficulty: 'moderate',
      termRelevance: 'Term 2 - Novel Study',
      description:
        'A mysterious, poetic novel exploring friendship, family, and the boundaries between the ordinary and extraordinary.',
    },
    {
      title: 'The Breadwinner',
      author: 'Deborah Ellis',
      genre: 'Novel',
      difficulty: 'accessible',
      termRelevance: 'Term 2 - Novel Study',
      description:
        'Set in Taliban-era Kabul, this novel follows a girl who disguises herself as a boy to support her family. Themes of identity, courage, and belonging.',
    },
    {
      title: 'Holes',
      author: 'Louis Sachar',
      genre: 'Novel',
      difficulty: 'accessible',
      termRelevance: 'Term 2 - Novel Study',
      description:
        'A brilliantly structured novel with interwoven timelines. Excellent for teaching narrative structure, symbolism, and fate versus free will.',
    },
    {
      title: 'A Monster Calls',
      author: 'Patrick Ness',
      genre: 'Novel',
      difficulty: 'moderate',
      termRelevance: 'Term 2 - Novel Study',
      description:
        'A powerful novel about grief, truth, and storytelling. Accessible prose with challenging emotional and thematic content.',
    },
    {
      title: 'The Crossover',
      author: 'Kwame Alexander',
      genre: 'Poetry/Novel in Verse',
      difficulty: 'accessible',
      termRelevance: 'Term 3 - Poetry and Performance',
      description:
        'A verse novel about twin brothers and basketball. Excellent for reluctant readers and for demonstrating that poetry can be contemporary and engaging.',
    },
    {
      title: 'Selected Poems (curated anthology)',
      author: 'Various (Agard, Angelou, Afrika, Zephaniah)',
      genre: 'Poetry',
      difficulty: 'moderate',
      termRelevance: 'Term 3 - Poetry and Performance',
      description:
        'A curated selection of poems exploring identity, belonging, and voice from diverse contemporary poets.',
    },
  ],
  vocabulary: [
    {
      word: 'narrative',
      definition: 'A spoken or written account of connected events; a story',
      exampleSentence:
        'The author constructs a compelling narrative about her childhood in Shanghai.',
      unit: 'Autobiography',
      tier: 3,
    },
    {
      word: 'memoir',
      definition: 'A written account of personal experiences and memories',
      exampleSentence: "Dahl's memoir captures the joys and terrors of a 1920s schoolboy.",
      unit: 'Autobiography',
      tier: 3,
    },
    {
      word: 'perspective',
      definition: 'A particular way of considering something; a point of view',
      exampleSentence:
        'The story is told from the perspective of a young child who does not fully understand what is happening.',
      unit: 'Autobiography',
      tier: 2,
    },
    {
      word: 'convey',
      definition: 'To communicate or express a feeling, idea, or meaning',
      exampleSentence: 'The writer uses short sentences to convey a sense of urgency and fear.',
      unit: 'All units',
      tier: 2,
    },
    {
      word: 'implicit',
      definition: 'Suggested but not directly expressed; implied',
      exampleSentence:
        'The writer makes an implicit criticism of the education system through her description of the harsh teacher.',
      unit: 'Novel Study',
      tier: 2,
    },
    {
      word: 'symbolism',
      definition:
        'The use of objects, characters, or events to represent abstract ideas or concepts',
      exampleSentence:
        "The locked door is used as symbolism for the character's isolation from the rest of the family.",
      unit: 'Novel Study',
      tier: 3,
    },
    {
      word: 'empathy',
      definition: 'The ability to understand and share the feelings of another person',
      exampleSentence:
        'The writer builds empathy for the protagonist by showing us her private thoughts.',
      unit: 'Novel Study',
      tier: 2,
    },
    {
      word: 'metaphor',
      definition:
        'A figure of speech in which a word or phrase is applied to something it does not literally describe, to suggest a comparison',
      exampleSentence:
        'The poet uses the metaphor of a cage to represent the restrictions placed on the speaker.',
      unit: 'Poetry',
      tier: 3,
    },
    {
      word: 'enjambment',
      definition: 'The continuation of a sentence or clause across a line break in poetry',
      exampleSentence:
        'The enjambment creates a sense of urgency as the reader is carried from one line to the next without pause.',
      unit: 'Poetry',
      tier: 3,
    },
    {
      word: 'connotation',
      definition: 'An idea or feeling that a word suggests in addition to its literal meaning',
      exampleSentence: 'The word "crawled" has connotations of weakness and submission.',
      unit: 'All units',
      tier: 2,
    },
    {
      word: 'vivid',
      definition: 'Producing powerful feelings or strong, clear images in the mind',
      exampleSentence:
        'The writer creates a vivid picture of the market using sounds, smells, and colours.',
      unit: 'Autobiography',
      tier: 2,
    },
    {
      word: 'inference',
      definition:
        'A conclusion reached on the basis of evidence and reasoning rather than explicit statement',
      exampleSentence:
        "We can make an inference about the character's mood from the way she slams the door shut.",
      unit: 'All units',
      tier: 2,
    },
    {
      word: 'tone',
      definition: 'The general character or attitude expressed in a piece of writing',
      exampleSentence: 'The tone shifts from playful to menacing in the second stanza of the poem.',
      unit: 'Poetry',
      tier: 2,
    },
    {
      word: 'atmosphere',
      definition: 'The mood or feeling created by a text or setting',
      exampleSentence:
        'Dahl creates a tense atmosphere in the schoolroom by describing the silence broken only by the swish of the cane.',
      unit: 'All units',
      tier: 2,
    },
    {
      word: 'resilience',
      definition: 'The capacity to recover quickly from difficulties; toughness',
      exampleSentence:
        'The protagonist shows remarkable resilience despite the hardships she faces.',
      unit: 'Novel Study',
      tier: 2,
    },
  ],
  rubrics: [
    {
      title: 'Year 7 Analytical Writing Rubric',
      assessmentObjective: 'AO1/AO2: Reading comprehension, inference, and analysis of language',
      descriptors: [
        {
          level: 'Excelling',
          description:
            "Detailed, perceptive analysis of language with well-selected, embedded quotations. Clear understanding of writer's methods and their effects. Develops interpretations with confidence, exploring alternative meanings. Conceptual vocabulary used accurately (e.g., connotation, symbolism, tone).",
        },
        {
          level: 'Secure',
          description:
            "Clear analysis of language with relevant quotations. Identifies writer's techniques and explains their effects. Shows understanding of implicit meaning. Uses some subject-specific vocabulary appropriately.",
        },
        {
          level: 'Developing',
          description:
            'Some relevant comments about language with supporting quotations, though these may be over-long. Begins to identify techniques but explanations of effect are underdeveloped or surface-level. Comments tend toward retelling rather than analysis.',
        },
        {
          level: 'Emerging',
          description:
            "Simple comments about the text with limited or no supporting evidence. May retell the content without analysis. Little or no awareness of writer's techniques. Limited vocabulary for discussing texts.",
        },
      ],
    },
    {
      title: 'Year 7 Creative Writing Rubric',
      assessmentObjective: 'AO4: Writing for purpose and audience with technical accuracy',
      descriptors: [
        {
          level: 'Excelling',
          description:
            'Engaging, well-structured writing with a clear sense of purpose. Ambitious vocabulary used precisely. Varied sentence structures for deliberate effect. Accurate spelling, punctuation, and grammar throughout. Uses literary techniques (simile, metaphor, personification) effectively and originally.',
        },
        {
          level: 'Secure',
          description:
            'Clearly organised writing with a logical structure. Vocabulary is appropriate and occasionally ambitious. Some variety in sentence structures. Generally accurate spelling, punctuation, and grammar with only minor errors. Attempts literary techniques with some success.',
        },
        {
          level: 'Developing',
          description:
            'Writing has a basic structure but may lose coherence in places. Vocabulary is sometimes repetitive or imprecise. Sentence structures are mostly simple or compound. Spelling and punctuation errors are present but do not prevent understanding. Attempts at techniques may be formulaic.',
        },
        {
          level: 'Emerging',
          description:
            'Limited structure with unclear organisation. Basic vocabulary. Simple sentences dominate. Frequent errors in spelling and punctuation that hinder understanding. Little or no use of literary techniques.',
        },
      ],
    },
  ],
}

// ── Year 8 Resources ────────────────────────────────────────────────────────

const year8Resources: CurriculumResource = {
  yearGroup: 'Year 8',
  theme: 'Power & Responsibility',
  workbook: [
    {
      title: 'Shakespeare Translation Challenge',
      type: 'comprehension',
      instructions:
        'Read the speech from Macbeth/Julius Caesar provided. In the left column, write the original Shakespeare text line by line. In the right column, write your modern English translation. Then answer: (a) What is the character saying? (b) What is the character feeling? (c) What does this speech reveal about their personality?',
      scaffolding:
        'A glossary of archaic terms is provided at the bottom of the page. Use it to decode unfamiliar words before attempting your translation.',
      extensionTask:
        'Choose three specific words from the original speech that are particularly powerful. Write a sentence about each explaining why Shakespeare chose that word and what effect it creates.',
    },
    {
      title: 'Soliloquy Analysis',
      type: 'analysis',
      instructions:
        'Read Macbeth\'s "Is this a dagger which I see before me" soliloquy. Complete the analysis grid: (a) identify three techniques Shakespeare uses, (b) select a quotation for each technique, (c) explain the effect of each technique on the audience, (d) explain what the technique reveals about Macbeth\'s state of mind.',
      scaffolding:
        'Technique bank: rhetorical question, imperative verb, imagery, personification, juxtaposition, iambic pentameter disruption.',
      extensionTask:
        'How does this soliloquy connect to the theme of power? Write a PEEL paragraph arguing that the soliloquy shows Macbeth is both attracted to and terrified by power.',
    },
    {
      title: 'Poetry Comparison Framework',
      type: 'comparison',
      instructions:
        "Using the two poems studied this week, complete the comparison table. For each poem, note: the theme, the speaker's attitude, three key techniques with quotations, the tone, and the structure. Then write one paragraph comparing how the two poets present the theme of power differently. You must refer to both poems in every sentence using comparative connectives.",
      scaffolding:
        'Comparative connective bank: Similarly, In contrast, While [Poet A]..., [Poet B] instead..., Both poets..., However, Unlike, Whereas, On the other hand.',
      extensionTask:
        'Which poem do you find more powerful? Write an evaluative paragraph arguing your preference with evidence from both texts.',
    },
    {
      title: 'Persuasive Speech Writing',
      type: 'writing',
      instructions:
        'Write a persuasive speech (300-400 words) arguing for or against the motion: "Young people have a responsibility to change the world." Your speech must include: a powerful opening that hooks the audience, at least three rhetorical devices (choose from anaphora, tricolon, rhetorical question, direct address, hyperbole, emotive language), a counter-argument that you refute, and a memorable concluding statement.',
      scaffolding:
        'Speech structure: Hook (question/anecdote/statistic) → Point 1 with evidence → Point 2 with evidence → Counter-argument and rebuttal → Call to action → Memorable final line.',
      extensionTask:
        'Annotate your own speech, labelling every rhetorical device you have used and explaining the intended effect of each.',
    },
    {
      title: 'Rhetoric Identification Exercise',
      type: 'analysis',
      instructions:
        'Read the extract from a famous speech. Identify and label examples of the following rhetorical devices: ethos (establishing credibility), pathos (appealing to emotions), logos (using logic and evidence), anaphora, tricolon, antithesis, and rhetorical questions. For each device, explain why the speaker uses it at this particular moment in the speech.',
      extensionTask:
        'Rank the three most effective rhetorical devices in this speech. Justify your ranking in a short paragraph.',
    },
    {
      title: 'Drama Techniques in Shakespeare',
      type: 'analysis',
      instructions:
        'Identify examples of the following dramatic techniques in the scene studied this week: dramatic irony, aside, soliloquy, foreshadowing, and stage directions. For each, write the quotation or moment, explain how it works as a dramatic technique, and describe its effect on the audience.',
      scaffolding:
        'Remember: dramatic irony is when the audience knows something the characters do not. An aside is when a character speaks directly to the audience while other characters cannot hear.',
    },
  ],
  homework: [
    {
      title: 'Shakespeare Character Diary',
      unit: 'Shakespeare Introduction',
      description:
        "Write a diary entry (200-250 words) from the perspective of Macbeth or Lady Macbeth after the scene studied in class this week. Your entry should reveal the character's thoughts, feelings, and motivations. Try to capture the character's voice and include at least one reference to a quotation from the play.",
      estimatedMinutes: 30,
    },
    {
      title: 'Key Quotation Memorisation',
      unit: 'Shakespeare Introduction',
      description:
        'Learn the five key quotations on the quotation sheet. For each quotation, write: (a) who says it, (b) when they say it, (c) what it reveals about the character or theme. You will be tested on these at the start of next lesson.',
      estimatedMinutes: 20,
    },
    {
      title: 'Poetry Annotation',
      unit: 'Poetry Comparison',
      description:
        'Annotate the poem provided using the annotation code: circle technical terms, underline powerful word choices, draw arrows to show structural features (enjambment, caesura), and write marginal notes explaining effects. Aim for at least eight annotations.',
      estimatedMinutes: 25,
    },
    {
      title: 'Comparative Paragraph',
      unit: 'Poetry Comparison',
      description:
        'Write one comparative paragraph (150-200 words) comparing how two poems from the anthology present the theme of power. Your paragraph must refer to both poems, use at least one comparative connective, and include short embedded quotations from each poem.',
      estimatedMinutes: 25,
    },
    {
      title: 'Rhetorical Device Collection',
      unit: 'Rhetoric and Persuasion',
      description:
        'Find three examples of rhetorical devices in real-world texts (advertisements, news articles, social media posts, speeches). For each example, identify the device, explain its effect, and evaluate how effectively it persuades the audience. Bring your examples to class for discussion.',
      estimatedMinutes: 20,
    },
    {
      title: 'Speech Draft',
      unit: 'Rhetoric and Persuasion',
      description:
        'Write the first draft of your persuasive speech on the topic provided. Your draft should be 300-400 words and include at least three different rhetorical devices. Mark your rhetorical devices in the margin so you can see where you have used them.',
      estimatedMinutes: 35,
    },
  ],
  slides: [
    {
      unit: 'Shakespeare Introduction',
      slideTitle: 'Shakespeare Is Not Scary',
      content:
        "Opening hook: modern adaptations and Shakespeare's enduring influence. Brief biography and historical context. Shakespeare insults activity. Introduction to the play's plot through storytelling and images.",
      teacherNotes:
        'Energy and enthusiasm are crucial for this lesson. If you present Shakespeare as intimidating, students will treat it that way. Use film clips, memes, and interactive activities. The insults activity (students construct Shakespearean insults using a three-column word bank) always generates engagement.',
    },
    {
      unit: 'Shakespeare Introduction',
      slideTitle: 'Close Reading: Key Speech Analysis',
      content:
        'Display of the selected speech with line numbers. Guided annotation prompts alongside the text. Vocabulary glossary. Analytical questions progressing from comprehension to inference to evaluation.',
      teacherNotes:
        'Read the speech aloud yourself first with full dramatic expression. Then re-read line by line with students, pausing to annotate on the visualiser. Use different colours for different types of annotation: blue for vocabulary, green for technique, red for effect/interpretation.',
    },
    {
      unit: 'Poetry Comparison',
      slideTitle: 'How to Compare Poems',
      content:
        'The difference between sequential analysis and integrated comparison. Structural template for a comparative paragraph. Comparative connective word bank. Model paragraph with annotations showing how the writer moves between poems.',
      teacherNotes:
        'Show a "before" (sequential) and "after" (integrated) version of the same comparison. Ask students to identify the differences. Then deconstruct the integrated version to reveal the structural pattern. Students often need to see the contrast between weak and strong approaches before they understand what is expected.',
    },
    {
      unit: 'Rhetoric and Persuasion',
      slideTitle: 'The Art of Persuasion: Ethos, Pathos, Logos',
      content:
        'Definitions and examples of the three modes of persuasion. Analysis of a famous speech identifying each mode. Students classify examples from a bank of persuasive extracts. Linking rhetorical theory to real-world examples.',
      teacherNotes:
        'Use a contemporary example that will resonate with your class: a charity advert, a TED talk opening, or a political speech. Students should see that rhetoric is not an ancient relic but a living, daily phenomenon. The classification activity works well as a card sort in pairs.',
    },
  ],
  readingList: [
    {
      title: 'Macbeth (graphic novel adaptation)',
      author: 'William Shakespeare / adapted by various',
      genre: 'Drama/Graphic Novel',
      difficulty: 'accessible',
      termRelevance: 'Term 1 - Shakespeare Introduction',
      description:
        'A graphic novel version provides visual support for understanding the plot and characters before engaging with the original text.',
    },
    {
      title: 'Noughts and Crosses',
      author: 'Malorie Blackman',
      genre: 'Novel',
      difficulty: 'moderate',
      termRelevance: 'Term 1 - Power and Responsibility',
      description:
        'A dystopian novel exploring racial prejudice in an inverted society. Powerful exploration of power, privilege, and responsibility.',
    },
    {
      title: 'Animal Farm',
      author: 'George Orwell',
      genre: 'Allegorical Novel',
      difficulty: 'moderate',
      termRelevance: 'Term 1 - Power and Responsibility',
      description:
        'An accessible allegory of totalitarianism that introduces students to political fiction and the concept of satire.',
    },
    {
      title: 'War Poems (curated selection)',
      author: 'Various (Owen, Sassoon, Duffy, Tennyson)',
      genre: 'Poetry',
      difficulty: 'moderate',
      termRelevance: 'Term 2 - Poetry Comparison',
      description:
        'A selection of war poems spanning different periods, ideal for comparison work on how poets present conflict and power.',
    },
    {
      title: 'The Boy at the Back of the Class',
      author: 'Onjali Q. Rauf',
      genre: 'Novel',
      difficulty: 'accessible',
      termRelevance: 'Term 3 - Rhetoric and Persuasion',
      description:
        'A novel about friendship and refugee experience that links well to the rhetoric unit through themes of justice and advocacy.',
    },
    {
      title: 'Speeches That Changed the World (selected extracts)',
      author: 'Various',
      genre: 'Non-fiction',
      difficulty: 'challenging',
      termRelevance: 'Term 3 - Rhetoric and Persuasion',
      description:
        'Extracts from landmark speeches for analysis of rhetorical technique and persuasive strategy.',
    },
  ],
  vocabulary: [
    {
      word: 'soliloquy',
      definition:
        'A speech in a play in which a character speaks their thoughts aloud while alone on stage',
      exampleSentence:
        "Macbeth's soliloquy reveals his internal struggle between ambition and morality.",
      unit: 'Shakespeare',
      tier: 3,
    },
    {
      word: 'dramatic irony',
      definition: 'When the audience knows something that the characters on stage do not',
      exampleSentence:
        "There is dramatic irony when Duncan praises Macbeth's castle, unaware that he will be murdered there.",
      unit: 'Shakespeare',
      tier: 3,
    },
    {
      word: 'rhetoric',
      definition: 'The art of effective or persuasive speaking or writing',
      exampleSentence:
        "The politician's rhetoric was designed to appeal to voters' emotions rather than their reason.",
      unit: 'Rhetoric and Persuasion',
      tier: 3,
    },
    {
      word: 'anaphora',
      definition:
        'The repetition of a word or phrase at the beginning of successive clauses for rhetorical effect',
      exampleSentence:
        'King used anaphora when he repeated "I have a dream" to build momentum and emphasis.',
      unit: 'Rhetoric and Persuasion',
      tier: 3,
    },
    {
      word: 'juxtaposition',
      definition:
        'Placing two things close together to highlight their differences or create contrast',
      exampleSentence:
        'Shakespeare uses juxtaposition of light and dark imagery to contrast good and evil.',
      unit: 'All units',
      tier: 2,
    },
    {
      word: 'foreshadowing',
      definition: 'A hint or warning about events that will happen later in the story',
      exampleSentence:
        "The witches' prophecies are an example of foreshadowing, hinting at Macbeth's rise and fall.",
      unit: 'Shakespeare',
      tier: 3,
    },
    {
      word: 'ambiguity',
      definition: 'The quality of being open to more than one interpretation',
      exampleSentence:
        "There is deliberate ambiguity in the poem's final line, leaving the reader to decide the speaker's fate.",
      unit: 'Poetry',
      tier: 2,
    },
    {
      word: 'tricolon',
      definition: 'A rhetorical device using a series of three parallel words, phrases, or clauses',
      exampleSentence:
        'The speaker\'s use of tricolon ("we will fight, we will resist, we will overcome") creates a powerful rhythm.',
      unit: 'Rhetoric and Persuasion',
      tier: 3,
    },
    {
      word: 'tyranny',
      definition: 'Cruel and oppressive government or rule; the abuse of power',
      exampleSentence:
        "Macbeth's reign descends into tyranny as he murders anyone who threatens his hold on power.",
      unit: 'Shakespeare',
      tier: 2,
    },
    {
      word: 'subvert',
      definition: 'To undermine the power or authority of something; to challenge expectations',
      exampleSentence:
        "The poet subverts the traditional love poem by revealing the speaker's controlling nature.",
      unit: 'Poetry',
      tier: 2,
    },
    {
      word: 'pathos',
      definition: 'A quality that evokes pity, sympathy, or sadness in the audience',
      exampleSentence:
        'The speech creates pathos by describing the suffering of innocent children.',
      unit: 'Rhetoric and Persuasion',
      tier: 3,
    },
    {
      word: 'imperative',
      definition: 'A verb form used to give commands or instructions',
      exampleSentence:
        'Lady Macbeth uses imperative verbs like "unsex" and "fill" to demand supernatural transformation.',
      unit: 'Shakespeare',
      tier: 3,
    },
  ],
  rubrics: [
    {
      title: 'Year 8 Shakespeare Response Rubric',
      assessmentObjective: "AO1/AO2: Analysis of Shakespeare's language, form, and structure",
      descriptors: [
        {
          level: 'Excelling',
          description:
            "Insightful analysis of Shakespeare's language choices with precisely selected quotations. Explores the effects of dramatic techniques on the audience with confidence. Engages with context (historical, social) to deepen interpretation. Sustains a coherent argument across multiple paragraphs.",
        },
        {
          level: 'Secure',
          description:
            'Clear analysis of key speeches and scenes with relevant quotations. Identifies dramatic techniques and explains their effects. Some awareness of context and its influence on meaning. Writing is well-organised with clear paragraphing.',
        },
        {
          level: 'Developing',
          description:
            "Some relevant comments on Shakespeare's language with supporting quotations. May identify techniques but struggles to explain effects fully. Limited engagement with context. Writing may lack clear structure or sustained argument.",
        },
        {
          level: 'Emerging',
          description:
            'Basic retelling of events with limited analysis. Quotations, if used, tend to be lengthy and unanalysed. Little or no engagement with language, form, structure, or context. Writing lacks clear organisation.',
        },
      ],
    },
    {
      title: 'Year 8 Poetry Comparison Rubric',
      assessmentObjective: "AO3: Comparison of writers' ideas and methods",
      descriptors: [
        {
          level: 'Excelling',
          description:
            'Sustained, integrated comparison throughout. Explores similarities and differences in methods and effects with perceptive analysis. Uses comparative connectives fluidly. Both poems receive equally detailed treatment. Alternative interpretations considered.',
        },
        {
          level: 'Secure',
          description:
            'Clear comparison with references to both poems in most paragraphs. Identifies key similarities and differences in methods. Uses comparative connectives. Analysis is relevant and mostly developed.',
        },
        {
          level: 'Developing',
          description:
            'Some comparison attempted but may treat poems sequentially. Limited use of comparative connectives. One poem may receive more attention than the other. Analysis is present but underdeveloped.',
        },
        {
          level: 'Emerging',
          description:
            'Minimal comparison. Poems discussed separately with little or no attempt to draw connections. Analysis is limited to identification of features without exploration of effect.',
        },
      ],
    },
    {
      title: 'Year 8 Persuasive Writing Rubric',
      assessmentObjective: 'AO4: Writing to persuade with rhetorical skill and technical accuracy',
      descriptors: [
        {
          level: 'Excelling',
          description:
            'Highly persuasive writing with a commanding voice and sophisticated rhetorical strategy. Wide range of devices deployed for deliberate effect. Counter-arguments addressed and convincingly rebutted. Structure builds to a powerful conclusion. Technically accurate with ambitious vocabulary and varied syntax.',
        },
        {
          level: 'Secure',
          description:
            'Clearly persuasive writing with a consistent sense of audience. Several rhetorical devices used effectively. Ideas are logically sequenced. Tone is appropriate and sustained. Generally accurate with some ambitious choices.',
        },
        {
          level: 'Developing',
          description:
            'Attempts to persuade with some awareness of audience. A limited range of rhetorical devices, some of which may feel forced. Ideas present but may lack logical progression. Some technical inaccuracy.',
        },
        {
          level: 'Emerging',
          description:
            'Limited persuasive intent. Few or no rhetorical devices. Writing reads as personal opinion without strategic argumentation. Frequent technical errors. Limited sense of audience or purpose.',
        },
      ],
    },
  ],
}

// ── Year 9 Resources ────────────────────────────────────────────────────────

const year9Resources: CurriculumResource = {
  yearGroup: 'Year 9',
  theme: 'Critical Thinking',
  workbook: [
    {
      title: 'A Christmas Carol: Quotation Bank Builder',
      type: 'analysis',
      instructions:
        "For each chapter (Stave) of A Christmas Carol, complete the quotation bank grid. Select two quotations per stave that relate to the themes of redemption, social responsibility, or greed. For each quotation: write the quotation (keep it short, 2-6 words), identify the technique used, analyse the effect of a specific word choice, and explain how it connects to Dickens's purpose.",
      scaffolding:
        'Purpose stems: "Dickens uses this to criticise...", "This challenges the Victorian reader to...", "Through this image, Dickens argues that..."',
      extensionTask:
        'Choose three quotations from your bank that track a single idea across the whole novella. Write a paragraph explaining how the idea develops from Stave 1 to Stave 5.',
    },
    {
      title: 'Conceptual Thesis Ranking',
      type: 'discussion',
      instructions:
        'Below are five thesis statements about A Christmas Carol, ranging from descriptive to conceptual. Rank them from weakest to strongest and justify your ranking. Then write your own conceptual thesis statement in response to the question: "How does Dickens present the theme of social responsibility?" Your thesis must be one sentence that makes an argument, not a description.',
      scaffolding:
        'A conceptual thesis goes beyond describing what happens. It argues what the text represents, challenges, or achieves. Use frames like: "[Text] can be read as...", "[Author] uses [character] to argue that...", "The novella functions as an allegory for..."',
    },
    {
      title: 'Extended Essay Planning',
      type: 'writing',
      instructions:
        'Plan a four-paragraph essay in response to the question provided. For each paragraph, write: (a) a topic sentence that makes a clear argument, (b) two quotations you will use as evidence, (c) the technique you will analyse in each quotation, (d) a linking sentence that connects to the next paragraph. Your introduction should contain a clear thesis statement. Your conclusion should synthesise your argument rather than simply repeating it.',
      extensionTask: 'Write the introduction and first body paragraph of your essay in full.',
    },
    {
      title: 'Unseen Text Analysis Practice',
      type: 'analysis',
      instructions:
        'Read the unseen extract provided. You have never seen this text before. In 20 minutes, write an analysis of how the writer uses language and structure to create a specific effect. Focus on: (a) word-level choices (individual words and their connotations), (b) sentence-level choices (sentence length, type, and structure), (c) structural choices (how the text begins, develops, and ends). Aim for three analytical paragraphs.',
      scaffolding:
        'Approach: Read the whole extract first. Identify the dominant mood or effect. Then work through the text chronologically, selecting 3-4 features that create this effect.',
    },
    {
      title: 'Transactional Writing: Article',
      type: 'writing',
      instructions:
        'Write a newspaper article (350-450 words) on the topic provided. Include: a headline, a subheading, an engaging opening paragraph that hooks the reader, at least three developed points with evidence or examples, and a strong concluding paragraph. Use formal register throughout and include at least two rhetorical devices.',
      scaffolding:
        'Article checklist: Headline (short, punchy) → Subheading (one sentence summary) → Opening (who, what, where, when, why) → Body paragraphs (one idea per paragraph) → Expert quotation → Conclusion.',
      extensionTask:
        'Write a second version of the same article for a different audience (e.g., teenagers versus adults). How does your language and register change?',
    },
    {
      title: 'Context Connection Exercise',
      type: 'research',
      instructions:
        "Research one aspect of the historical context of A Christmas Carol using the resources provided. Choose from: (a) the New Poor Law and workhouses, (b) Malthusian economics, (c) child labour in Victorian England, (d) Dickens's own childhood experiences. Write a 150-word summary of what you discover, then explain in a paragraph how this context deepens your understanding of a specific moment in the text.",
    },
  ],
  homework: [
    {
      title: 'Stave Summary and Analysis',
      unit: '19th-Century Prose',
      description:
        'After reading the stave covered in class, write: (a) a 5-sentence summary of key events, (b) three quotations that you think are important with a one-sentence explanation of each, and (c) one question about the text that you want to discuss in class.',
      estimatedMinutes: 25,
    },
    {
      title: 'Essay Paragraph Practice',
      unit: '19th-Century Prose',
      description:
        "Write one essay paragraph in response to the question set in class. Your paragraph must include: a clear topic sentence, a short embedded quotation, analysis of a specific word or phrase within the quotation, and a link to Dickens's purpose or the historical context. Maximum 150 words.",
      estimatedMinutes: 25,
    },
    {
      title: 'Unseen Analysis Timed Practice',
      unit: 'Pre-IGCSE Preparation',
      description:
        'Complete the unseen analysis task on the worksheet. Set a timer for 25 minutes and write your response under timed conditions. Do not look anything up. Focus on language analysis (word choices and their effects) and structural analysis (how the text is organised).',
      estimatedMinutes: 30,
    },
    {
      title: 'Transactional Writing Practice',
      unit: 'Pre-IGCSE Preparation',
      description:
        'Write a formal letter (300-350 words) to the headteacher arguing for a change you would like to see in school. Use formal register, include the correct letter format (addresses, date, greeting, sign-off), and deploy at least three persuasive techniques.',
      estimatedMinutes: 30,
    },
    {
      title: 'Contextual Research Task',
      unit: '19th-Century Prose',
      description:
        'Research the topic assigned to you (see class allocation list). Prepare a one-page fact sheet that your classmates can use for revision. Include: key facts, dates, and figures; one relevant quotation from a historian or critic; and a clear link to A Christmas Carol.',
      estimatedMinutes: 35,
    },
    {
      title: 'Mock Exam Preparation',
      unit: 'Pre-IGCSE Preparation',
      description:
        'Review the mark scheme shared in class and the feedback from your last timed response. Write a list of three specific targets for your next practice essay. Then rewrite your weakest paragraph from the last assessment, addressing the specific feedback you received.',
      estimatedMinutes: 25,
    },
  ],
  slides: [
    {
      unit: '19th-Century Prose',
      slideTitle: 'Dickens and the Victorian World',
      content:
        "Overview of Victorian society: industrialisation, poverty, class system. Dickens's biography and social purpose. The Poor Law and its impact. How context informs the text: connecting Scrooge to real Victorian attitudes toward poverty.",
      teacherNotes:
        'Use images of Victorian London alongside modern equivalents. Present statistics about poverty in the 1840s. The goal is to make students feel the urgency that Dickens felt. Ask: if Dickens were alive today, what social issue would he write about?',
    },
    {
      unit: '19th-Century Prose',
      slideTitle: "Tracking Scrooge's Transformation",
      content:
        "Evidence table: Scrooge at the start versus Scrooge at the end. Key quotations showing the change. Discussion: is Scrooge's transformation believable? Is it individual change or an allegory for social change? The role of the supernatural in enabling transformation.",
      teacherNotes:
        'Use a human graph activity: students stand on a spectrum from "Scrooge\'s change is genuine" to "Scrooge only changes out of fear" and justify their position. This physical activity energises the class and forces students to commit to an interpretation before writing.',
    },
    {
      unit: 'Pre-IGCSE Preparation',
      slideTitle: 'How to Tackle Unseen Texts',
      content:
        'Step-by-step approach: read, re-read, annotate, plan, write. What to look for: language features, structural features, tone and mood. Model analysis of a short unseen extract. Timed practice task with success criteria.',
      teacherNotes:
        'Model your own thinking process aloud. Read the extract on screen, pause, and say: "The first thing I notice is... This makes me think... Now I am looking for evidence of... I am going to write about this because..." Making the invisible thinking visible is the most powerful teaching strategy for unseen analysis.',
    },
    {
      unit: 'Pre-IGCSE Preparation',
      slideTitle: 'Introduction to the IGCSE Specification',
      content:
        'Overview of Paper 1 and Paper 2. Assessment objectives explained in student-friendly language. Example questions from each section. Timeline from now to the exam. What you need to do to succeed: the non-negotiables.',
      teacherNotes:
        'This is a motivational as well as informational lesson. Present the specification as a clear path with achievable milestones, not as an overwhelming wall of requirements. Use the "You already know more than you think" approach: map KS3 skills directly to IGCSE requirements so students see continuity rather than a cliff edge.',
    },
  ],
  readingList: [
    {
      title: 'A Christmas Carol',
      author: 'Charles Dickens',
      genre: 'Novella',
      difficulty: 'moderate',
      termRelevance: 'Term 1 - 19th-Century Prose',
      description:
        'The core set text for the term. A moral allegory about redemption, social responsibility, and the power of compassion to transform individuals and society.',
    },
    {
      title: 'An Inspector Calls',
      author: 'J.B. Priestley',
      genre: 'Drama',
      difficulty: 'moderate',
      termRelevance: 'Term 2 - Modern Drama',
      description:
        'A political play exploring social responsibility, class, and generational conflict. Complements the themes of A Christmas Carol while introducing dramatic form.',
    },
    {
      title: 'Animal Farm',
      author: 'George Orwell',
      genre: 'Allegorical Novel',
      difficulty: 'moderate',
      termRelevance: 'Term 2 - Alternative novel study',
      description:
        'An allegory of revolution and the corruption of power. Excellent for teaching critical thinking about political systems and propaganda.',
    },
    {
      title: 'Lord of the Flies',
      author: 'William Golding',
      genre: 'Novel',
      difficulty: 'challenging',
      termRelevance: 'Term 2 - Alternative novel study',
      description:
        'A novel exploring civilisation versus savagery, power, and moral responsibility. Challenging language but deeply engaging themes for Year 9.',
    },
    {
      title: 'The Hate U Give',
      author: 'Angie Thomas',
      genre: 'Novel',
      difficulty: 'moderate',
      termRelevance: 'Independent reading',
      description:
        'A contemporary novel about racial injustice, identity, and finding your voice. Connects to critical thinking themes and develops empathy.',
    },
    {
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      genre: 'Dystopian Novel',
      difficulty: 'challenging',
      termRelevance: 'Independent reading',
      description:
        'A dystopia about censorship and the power of literature. Excellent for developing critical thinking about the role of books and ideas in society.',
    },
  ],
  vocabulary: [
    {
      word: 'allegory',
      definition:
        'A story in which the characters and events represent broader themes, moral lessons, or political situations',
      exampleSentence:
        'A Christmas Carol can be read as an allegory for the moral responsibilities of the wealthy toward the poor.',
      unit: '19th-Century Prose',
      tier: 3,
    },
    {
      word: 'redemption',
      definition:
        'The act of being saved from sin, error, or evil; the process of moral transformation',
      exampleSentence:
        "Scrooge's redemption is made possible by his willingness to confront the consequences of his greed.",
      unit: '19th-Century Prose',
      tier: 2,
    },
    {
      word: 'didactic',
      definition: 'Intended to teach or instruct, especially regarding moral lessons',
      exampleSentence:
        "Dickens's didactic purpose is clear: he wants the reader to recognise their own responsibility toward the poor.",
      unit: '19th-Century Prose',
      tier: 3,
    },
    {
      word: 'microcosm',
      definition: 'A small-scale representation of something much larger',
      exampleSentence: 'The Birling household functions as a microcosm of Edwardian class society.',
      unit: 'Modern Drama',
      tier: 3,
    },
    {
      word: 'critique',
      definition: 'A detailed analysis and assessment, often of a social or political system',
      exampleSentence:
        "Priestley's play is a critique of capitalist individualism and its consequences for vulnerable people.",
      unit: 'Modern Drama',
      tier: 2,
    },
    {
      word: 'synthesis',
      definition:
        'The combination of ideas or elements to form a connected whole or a new interpretation',
      exampleSentence:
        'Your conclusion should offer a synthesis of your main arguments rather than simply listing them.',
      unit: 'Pre-IGCSE',
      tier: 2,
    },
    {
      word: 'evaluate',
      definition:
        'To assess the quality, importance, or value of something by weighing evidence and arguments',
      exampleSentence:
        'Evaluate the extent to which Dickens presents Scrooge as a victim of his own upbringing.',
      unit: 'Pre-IGCSE',
      tier: 2,
    },
    {
      word: 'nuanced',
      definition:
        'Characterised by subtle distinctions and variations rather than simple, absolute positions',
      exampleSentence:
        'A nuanced response acknowledges that Scrooge is both villain and victim, rather than presenting him as purely one or the other.',
      unit: 'All units',
      tier: 2,
    },
    {
      word: 'motif',
      definition: 'A recurring element (image, idea, or symbol) that has significance in a text',
      exampleSentence:
        'The motif of cold and warmth runs throughout A Christmas Carol, representing isolation and human connection.',
      unit: '19th-Century Prose',
      tier: 3,
    },
    {
      word: 'thesis',
      definition: 'A statement or argument that a writer puts forward and supports with evidence',
      exampleSentence:
        'Your essay should open with a clear thesis that states your overall argument in one sentence.',
      unit: 'Pre-IGCSE',
      tier: 2,
    },
  ],
  rubrics: [
    {
      title: 'Year 9 Extended Essay Rubric',
      assessmentObjective: 'AO1-AO4: Comprehension, analysis, comparison, and written accuracy',
      descriptors: [
        {
          level: 'Excelling',
          description:
            "A cogent, conceptual argument sustained across the essay. Precise analysis of writer's methods with insightful exploration of effects. Contextual understanding woven into analysis, not bolted on. Sophisticated vocabulary and expression. Technically accurate with varied, controlled syntax. Clear thesis, developed argument, and synthesised conclusion.",
        },
        {
          level: 'Secure',
          description:
            "A clear argument with well-selected evidence. Analysis of writer's methods is relevant and developed. Some engagement with context. Appropriate academic register. Generally accurate with clear paragraphing and logical progression. Introduction states argument; conclusion draws threads together.",
        },
        {
          level: 'Developing',
          description:
            'An argument is attempted but may drift or lose focus. Some analysis of language with relevant quotations but explanations may be surface-level. Context may be presented as separate information rather than integrated into analysis. Expression is generally clear but may lack sophistication. Some structural weaknesses.',
        },
        {
          level: 'Emerging',
          description:
            "Limited argument with tendency toward retelling. Evidence used is sparse or poorly selected. Little analysis of writer's methods. Context absent or inaccurate. Expression is simple with limited vocabulary. Structural organisation is weak. Technical errors are frequent.",
        },
      ],
    },
    {
      title: 'Year 9 Unseen Analysis Rubric',
      assessmentObjective: 'AO2: Analysis of language, form, and structure in unseen texts',
      descriptors: [
        {
          level: 'Excelling',
          description:
            'Perceptive, detailed analysis of language and structure. Identifies subtle effects and explores multiple possible interpretations. Analysis is precise, using correct terminology. Comments on how structure contributes to meaning. Writes with confidence and fluency about an unfamiliar text.',
        },
        {
          level: 'Secure',
          description:
            'Clear analysis of language features with appropriate terminology. Identifies structural features and comments on their effects. Quotations are well-selected and embedded. Explanations are developed beyond identification. Response is organised and focused.',
        },
        {
          level: 'Developing',
          description:
            'Identifies some language features with relevant examples. May use terminology inconsistently or inaccurately. Structural analysis is limited. Explanations tend toward labelling techniques without fully exploring effects. Some relevant comments but lacks depth.',
        },
        {
          level: 'Emerging',
          description:
            'Limited identification of language features. May rely on content summary rather than analysis. Quotations, if used, are poorly chosen or overly long. Little or no structural analysis. Terminology is absent or incorrect.',
        },
      ],
    },
  ],
}

// ── IGCSE Resources (Years 10-11) ───────────────────────────────────────────

const igcseResources: CurriculumResource = {
  yearGroup: 'Years 10-11 (IGCSE)',
  theme: 'Edexcel IGCSE English Language & Literature',
  workbook: [
    {
      title: 'Paper 1 Section A: Retrieval and Inference',
      type: 'comprehension',
      instructions:
        "Read the non-fiction extract provided. Complete the following tasks: (a) Identify four pieces of information the writer gives about [topic] - write each in a short sentence. (b) Using your own words as far as possible, summarise the writer's attitude toward [topic] in 50-80 words. (c) Explain how the writer uses language to convey their perspective, focusing on three specific examples.",
      scaffolding:
        'For part (c), use this structure: The writer uses [technique] when they write "[quotation]". The word/phrase "[specific word]" suggests [analysis of connotation/effect], which conveys a sense of [attitude/perspective].',
    },
    {
      title: 'Paper 1 Section B: Transactional Writing Toolkit',
      type: 'writing',
      instructions:
        'Choose one of the following tasks and write a complete response in 45 minutes: (a) Write an article for a school magazine arguing that [topic]. (b) Write a letter to [recipient] persuading them to [action]. (c) Write a speech to your year group about [topic]. Before writing, complete the planning grid: identify your audience, purpose, key arguments (at least three), rhetorical devices you will use, and your opening and closing strategies.',
      scaffolding:
        'Format checklist - Article: headline, byline, paragraphs, subheadings optional. Letter: sender address, date, recipient address, Dear..., Yours..., sign-off. Speech: greeting, rhetorical questions, direct address (you/we), powerful closing line.',
      extensionTask:
        'After completing your piece, highlight and label every rhetorical device you have used. If you have fewer than five distinct devices, revise to add more.',
    },
    {
      title: 'Poetry Anthology: Comparison Grid',
      type: 'comparison',
      instructions:
        'For each poem in the anthology, complete one row of the comparison grid. Columns: Poem Title, Theme(s), Speaker/Voice, Key Techniques (with quotations), Tone, Structure, Possible Comparison Partners. Once complete, this grid becomes your primary revision resource for the poetry comparison question.',
      extensionTask:
        'Choose two poems from your grid that you think make the strongest comparison pair. Write a plan for a comparison essay, identifying three points of comparison with quotations from both poems.',
    },
    {
      title: 'Set Text: Extract Analysis Practice',
      type: 'analysis',
      instructions:
        "Read the extract from Of Mice and Men / An Inspector Calls / Macbeth. In 35 minutes, write an analysis of how the writer presents [character/theme] in this extract and in the text as a whole. Your response must: refer closely to the extract with embedded quotations, analyse specific language and structural choices, connect the extract to the wider text, and engage with the writer's purpose or context.",
      scaffolding:
        'Structure: Introduction (brief thesis) → Paragraph 1 (analysis of extract, first point) → Paragraph 2 (analysis of extract, second point) → Paragraph 3 (connection to elsewhere in the text) → Conclusion (synthesise argument).',
    },
    {
      title: 'Imaginative Writing: Descriptive Piece',
      type: 'creative',
      instructions:
        'Look at the image provided. Write a descriptive piece (350-450 words) inspired by the image. Focus on creating atmosphere through: sensory detail (sight, sound, smell, touch, taste), varied sentence structures (short sentences for impact, long sentences for flowing description), figurative language (at least two similes, one metaphor, one example of personification), and a clear structural shape (e.g., zooming in from wide shot to close-up, or moving through time from morning to night).',
      extensionTask:
        'Rewrite your opening paragraph three different ways: one that starts with dialogue, one that starts with a single-word or single-sentence paragraph, and one that starts with a question. Evaluate which is most effective.',
    },
    {
      title: 'Mark Scheme Self-Assessment',
      type: 'analysis',
      instructions:
        'Using the mark scheme provided, assess your own practice response. For each assessment objective: (a) highlight evidence in your response that meets each descriptor, (b) identify the band you think you are currently working in, (c) write a specific target explaining what you need to do to reach the next band up. Be honest and precise in your self-assessment.',
    },
  ],
  homework: [
    {
      title: 'Quotation Memorisation and Practice',
      unit: 'Set Texts',
      description:
        "Learn the 10 key quotations on this week's quotation card. For each, practise writing it from memory, then write a one-sentence analysis explaining its significance. Test yourself by covering the card and writing all 10 from memory.",
      estimatedMinutes: 25,
    },
    {
      title: 'Past Paper Question Practice',
      unit: 'Exam Preparation',
      description:
        'Complete the past paper question provided under timed conditions (45 minutes for a full response, or 25 minutes for the short-answer section). Write on lined paper and bring to class for peer assessment or teacher marking.',
      estimatedMinutes: 45,
    },
    {
      title: 'Poetry Revision Card',
      unit: 'Poetry Anthology',
      description:
        'Create a detailed revision card for the poem studied this week. Include: title and poet, context (when written, why), theme(s), key quotations (minimum 5) with brief analysis, structural features, tone, and two possible comparison poems with reasons.',
      estimatedMinutes: 30,
    },
    {
      title: 'Transactional Writing Practice',
      unit: 'Paper 1',
      description:
        'Write a complete transactional writing response (article, letter, or speech) on the topic provided. Time yourself: aim for 40 minutes maximum. Focus on the specific target from your last piece of feedback.',
      estimatedMinutes: 40,
    },
    {
      title: 'Context Research Sheet',
      unit: 'Set Texts',
      description:
        'Complete the context research sheet for your set text. Answer each question in 2-3 sentences with specific factual detail. The sheet covers: author biography, historical period, key social and political issues, and how the text was received when first published or performed.',
      estimatedMinutes: 30,
    },
    {
      title: 'Imaginative Writing Draft',
      unit: 'Paper 2',
      description:
        'Write a complete descriptive or narrative piece (400-500 words) in response to the prompt provided. Focus on crafting three ambitious sentences that demonstrate your control of language: one short sentence for dramatic effect, one complex sentence with a subordinate clause, and one that uses a semicolon correctly.',
      estimatedMinutes: 35,
    },
  ],
  slides: [
    {
      unit: 'Paper 1',
      slideTitle: 'Paper 1 Question Breakdown',
      content:
        'Overview of each question type with marks, timing, and approach. Worked example for each question. Common mistakes and how to avoid them. Practice question for independent work.',
      teacherNotes:
        'This is a reference lesson that students will return to throughout the course. Consider printing the slide as a revision bookmark. Emphasise time management: many students lose marks not because they cannot answer but because they run out of time on the final question.',
    },
    {
      unit: 'Set Texts',
      slideTitle: 'Of Mice and Men: Themes Overview',
      content:
        "Visual theme map with loneliness, dreams, power, prejudice, and friendship as branches. Key quotations for each theme. Character-theme connections. Contextual links to 1930s America: the Great Depression, migrant workers, racial segregation, women's status.",
      teacherNotes:
        'Use this as a mid-unit consolidation lesson. Students should already have read the novella. The theme map works well as a group poster activity: allocate one theme per group, they find quotations and context, then present to the class. Photograph the finished posters for revision resources.',
    },
    {
      unit: 'Set Texts',
      slideTitle: "An Inspector Calls: Priestley's Message",
      content:
        "Priestley's political beliefs and the 1945 context. Comparison of the 1912 setting and 1945 audience. How Priestley uses dramatic irony to undermine the Birlings. The Inspector as a dramatic device. Key quotations and analysis.",
      teacherNotes:
        'The dual-timeline is crucial. Create a timeline on the board with 1912 events on top and 1945 events on the bottom. As you discuss the play, draw arrows showing how knowledge of what happens between these dates creates dramatic irony. Students often struggle with this concept until they see it visually.',
    },
    {
      unit: 'Exam Preparation',
      slideTitle: 'Walking Talking Mock: Paper 1',
      content:
        "Full paper displayed on screen with teacher commentary. Timing guidance for each question. Live modelling of approach: reading the question, planning, selecting evidence, writing. Students write alongside the teacher's guidance.",
      teacherNotes:
        'This is one of the most effective exam preparation strategies. Talk through each question as students work: "You should have finished reading by now... Look at the question - what are the command words?... You have 12 minutes for this question, so aim for three short paragraphs..." The key is to model time management and question approach, not to dictate answers.',
    },
  ],
  readingList: [
    {
      title: 'Of Mice and Men',
      author: 'John Steinbeck',
      genre: 'Novella',
      difficulty: 'moderate',
      termRelevance: 'Set text throughout',
      description:
        'A novella set during the Great Depression exploring friendship, dreams, loneliness, and the American Dream. Core set text for IGCSE Literature.',
    },
    {
      title: 'An Inspector Calls',
      author: 'J.B. Priestley',
      genre: 'Drama',
      difficulty: 'moderate',
      termRelevance: 'Set text throughout',
      description:
        'A morality play set in 1912 but written in 1945, exploring social responsibility, class, and generational conflict. Core set text for IGCSE Literature.',
    },
    {
      title: 'Macbeth',
      author: 'William Shakespeare',
      genre: 'Drama',
      difficulty: 'challenging',
      termRelevance: 'Set text throughout',
      description:
        "Shakespeare's exploration of ambition, guilt, and the supernatural. Students should aim to read the full play and know key soliloquies thoroughly.",
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Novel',
      difficulty: 'challenging',
      termRelevance: 'Wider reading',
      description:
        'A companion text for Of Mice and Men, exploring the American Dream from the perspective of wealth and corruption.',
    },
    {
      title: 'A View from the Bridge',
      author: 'Arthur Miller',
      genre: 'Drama',
      difficulty: 'moderate',
      termRelevance: 'Wider reading',
      description:
        'A companion text for An Inspector Calls, exploring family, loyalty, and the consequences of obsessive desire.',
    },
  ],
  vocabulary: [
    {
      word: 'protagonist',
      definition: 'The leading character in a story, play, or novel',
      exampleSentence:
        'George can be seen as the protagonist of the novella, as the story is largely filtered through his perspective.',
      unit: 'Set Texts',
      tier: 3,
    },
    {
      word: 'antagonist',
      definition: 'A character who opposes the protagonist; a source of conflict',
      exampleSentence:
        "Curley functions as an antagonist whose aggression threatens George and Lennie's dream.",
      unit: 'Set Texts',
      tier: 3,
    },
    {
      word: 'cyclical structure',
      definition:
        'A narrative structure that ends where it began, creating a sense of inevitability or repetition',
      exampleSentence:
        "The novella's cyclical structure, returning to the riverbank, suggests that the dream was always doomed to fail.",
      unit: 'Of Mice and Men',
      tier: 3,
    },
    {
      word: 'social responsibility',
      definition:
        'The idea that individuals and organisations have a duty to act in the best interests of society',
      exampleSentence:
        'Priestley uses the Inspector to argue that social responsibility is not optional but a moral imperative.',
      unit: 'An Inspector Calls',
      tier: 2,
    },
    {
      word: 'hubris',
      definition: 'Excessive pride or self-confidence, especially when leading to downfall',
      exampleSentence:
        "Macbeth's hubris, fuelled by the witches' prophecies, blinds him to the consequences of his actions.",
      unit: 'Macbeth',
      tier: 3,
    },
    {
      word: 'catharsis',
      definition: 'The emotional release experienced by the audience at the end of a tragedy',
      exampleSentence:
        'The audience experiences catharsis as Macbeth is finally defeated, restoring moral order to Scotland.',
      unit: 'Macbeth',
      tier: 3,
    },
    {
      word: 'register',
      definition:
        'The level of formality in a piece of writing, determined by audience and purpose',
      exampleSentence:
        'Adjust your register to match the task: a letter to a headteacher requires formal register, while a magazine article for teenagers allows a more conversational tone.',
      unit: 'Paper 1',
      tier: 2,
    },
    {
      word: 'discourse marker',
      definition:
        'A word or phrase that signals the direction of an argument (e.g., however, furthermore, consequently)',
      exampleSentence:
        'Use discourse markers to guide your reader through your argument: "Furthermore," "In contrast," "As a result."',
      unit: 'Paper 1',
      tier: 3,
    },
  ],
  rubrics: [
    {
      title: 'IGCSE Language Paper 1 Reading Rubric',
      assessmentObjective: 'AO1/AO2: Comprehension, inference, and analysis of non-fiction texts',
      descriptors: [
        {
          level: 'Band 5 (Top)',
          description:
            "Perceptive understanding demonstrated through precise, well-selected references. Sophisticated analysis of how language is used to achieve effects. Evaluation is assured and personal, with a clear sense of the writer's craft. Synthesis across texts (where required) is seamless.",
        },
        {
          level: 'Band 4',
          description:
            'Secure understanding with well-chosen references. Clear analysis of language features and their effects. Comments are developed and supported. Comparison (where required) is sustained and balanced.',
        },
        {
          level: 'Band 3',
          description:
            'Sound understanding with relevant references. Some analysis of language, though explanations may not be fully developed. Comparison (where required) is attempted with some success. Ideas are generally clear.',
        },
        {
          level: 'Band 2',
          description:
            'Limited understanding demonstrated through broad references. Identification of some features but limited analysis. Comparison is uneven or underdeveloped. Some retelling rather than analysis.',
        },
        {
          level: 'Band 1',
          description:
            'Basic understanding with little supporting evidence. Simple identification without analysis. No meaningful comparison. Response is largely descriptive or narrative.',
        },
      ],
    },
    {
      title: 'IGCSE Literature Set Text Essay Rubric',
      assessmentObjective:
        'AO1-AO4: Response to text, analysis of methods, context, and written quality',
      descriptors: [
        {
          level: 'Band 5 (Top)',
          description:
            "Conceptual, exploratory response that engages critically with the text. Precise analysis of writer's methods with insightful comment on effects. Contextual understanding is integrated, illuminating interpretation. Expression is fluent, academic, and technically controlled. A convincing personal response is sustained throughout.",
        },
        {
          level: 'Band 4',
          description:
            "Thoughtful, developed response with a clear argument. Analysis of writer's methods is relevant and detailed. Context is used to support interpretation. Expression is clear and well-organised with appropriate terminology. Personal engagement with the text is evident.",
        },
        {
          level: 'Band 3',
          description:
            "A relevant response with some development. Some analysis of writer's methods, though this may be inconsistent. Context is referenced but not always integrated. Expression is generally clear. Evidence of personal response.",
        },
        {
          level: 'Band 2',
          description:
            'Supported response with some relevant points. Limited analysis of methods. Context may be asserted rather than explored. Expression is sometimes unclear. Personal response is emerging.',
        },
        {
          level: 'Band 1',
          description:
            'Simple response with limited reference to the text. No meaningful analysis of methods. Context is absent or inaccurate. Expression is basic with frequent errors. Little evidence of personal engagement.',
        },
      ],
    },
  ],
}

// ── IAL Resources (Years 12-13) ─────────────────────────────────────────────

const ialResources: CurriculumResource = {
  yearGroup: 'Years 12-13 (IAL)',
  theme: 'Edexcel IAL English Language',
  workbook: [
    {
      title: 'Linguistic Framework Analysis',
      type: 'analysis',
      instructions:
        'Analyse the text provided using the five linguistic frameworks. For each framework, identify at least two features, provide an example from the text, and explain the effect. Frameworks: (1) Lexis and Semantics - word choice, semantic fields, connotation, (2) Grammar and Syntax - sentence types, word classes, clause structure, (3) Phonology - sound patterns, rhythm, alliteration, (4) Pragmatics - implied meaning, context, presuppositions, (5) Discourse - cohesion, structure, turn-taking (if spoken).',
      scaffolding:
        'Use the analysis template: Feature identified → Technical term → Example from text (with line reference) → Effect on reader/listener → Connection to relevant theory (if applicable).',
      extensionTask:
        "Which framework reveals the most about this text's purpose and audience? Write a paragraph arguing your choice with evidence.",
    },
    {
      title: 'Transcript Analysis',
      type: 'analysis',
      instructions:
        'Using the conversation transcript provided (transcribed using standard conventions), analyse the patterns of interaction. Identify: (a) turn-taking patterns and any violations (interruptions, overlaps), (b) adjacency pairs and any dispreferred responses, (c) topic management (who introduces, shifts, and closes topics), (d) politeness strategies (positive or negative face). Reference at least two relevant theorists in your analysis.',
      scaffolding:
        'Theorist reference bank: Grice (cooperative principle, maxims), Brown and Levinson (politeness theory, face), Lakoff (politeness principles), Zimmerman and West (interruption and gender), Schegloff (turn-taking).',
    },
    {
      title: 'Language Investigation Proposal',
      type: 'research',
      instructions:
        'Complete the investigation proposal form: (1) Research area (broad topic), (2) Research question (specific, answerable, focused), (3) Hypothesis (what you expect to find and why), (4) Methodology (how you will collect and analyse data), (5) Data requirements (what texts/transcripts/corpus you need, how much), (6) Ethical considerations, (7) Potential limitations, (8) Relevant theories and research to reference.',
      scaffolding:
        'Strong research questions follow this pattern: "To what extent does [specific linguistic feature] vary according to [specific variable] in [specific context]?" Avoid broad questions like "How do men and women speak differently?"',
    },
    {
      title: 'Creative Writing with Commentary',
      type: 'creative',
      instructions:
        'Write an original text (500-750 words) for a specific audience and purpose of your choice. Then write a commentary (400-500 words) analysing your own language choices. Your commentary must: name specific linguistic features you used (using correct terminology), explain why you chose them (linking to purpose and audience), evaluate their effectiveness, and reference at least one relevant linguistic theory or concept.',
      extensionTask:
        'Rewrite one section of your original text for a completely different audience. In a brief note, explain what linguistic changes you made and why.',
    },
    {
      title: 'Language Change Timeline',
      type: 'research',
      instructions:
        'Using the historical text extracts provided (Old English, Middle English, Early Modern English, Modern English), create a timeline of key changes in English. For each period, note changes in: spelling and orthography, grammar and syntax, vocabulary (loanwords, neologisms), and punctuation. Identify three changes that have had the most significant impact on modern English and justify your choices.',
    },
    {
      title: 'Data Presentation and Analysis',
      type: 'analysis',
      instructions:
        'Using the dataset provided from a language investigation, present the findings in an appropriate format (table, graph, or frequency count). Then write an analytical commentary (300-400 words) that: describes the patterns visible in the data, offers explanations for these patterns with reference to linguistic theory, acknowledges any anomalies or unexpected findings, and evaluates the limitations of the dataset.',
    },
  ],
  homework: [
    {
      title: 'Language in the Wild',
      unit: 'All units',
      description:
        'Collect one real-world text (photograph it or transcribe it) and write a 200-word linguistic analysis. The text can be anything: a sign, a menu, a text message conversation, an advert, a social media post. Analyse it using at least two linguistic frameworks and one relevant theory.',
      estimatedMinutes: 25,
    },
    {
      title: 'Theory Revision Cards',
      unit: 'All units',
      description:
        'Create revision cards for the three theorists covered this week. Each card should include: theorist name and dates, key theory/concept, key terms associated with the theory, an example of the theory applied to a real text, and strengths and criticisms of the theory.',
      estimatedMinutes: 30,
    },
    {
      title: 'Timed Analysis Practice',
      unit: 'Units 1 and 3',
      description:
        'Complete the timed analysis task on the provided text. Allow 45 minutes. Your response should systematically work through the linguistic frameworks, using correct terminology throughout. Reference at least two relevant theories or theorists.',
      estimatedMinutes: 50,
    },
    {
      title: 'Investigation Data Collection',
      unit: 'Unit 4',
      description:
        'Collect the next batch of data for your language investigation according to your approved methodology. Transcribe any spoken data using standard transcription conventions. File and label your data clearly. Write a brief field note (100 words) recording any observations about the data collection process.',
      estimatedMinutes: 45,
    },
    {
      title: 'Coursework Draft Section',
      unit: 'Units 2 and 4',
      description:
        'Write the next section of your coursework draft (500-750 words). Follow the structure agreed in class. Ensure you reference at least two secondary sources and use the Harvard referencing system consistently.',
      estimatedMinutes: 60,
    },
    {
      title: 'Comparative Text Analysis',
      unit: 'Unit 1',
      description:
        'Compare the two texts provided in terms of how they construct identity. Consider: lexical choices, grammatical patterns, pragmatic strategies, and discourse structure. Write a comparative analysis of 400-500 words that references at least one relevant theory.',
      estimatedMinutes: 40,
    },
  ],
  slides: [
    {
      unit: 'Unit 1',
      slideTitle: 'Introduction to Linguistic Frameworks',
      content:
        'Overview of the five linguistic levels: lexis, grammar, phonology, pragmatics, discourse. Definition and examples of each. Practice activity: apply all five frameworks to a short text. Discussion: which framework reveals the most about this text?',
      teacherNotes:
        'This is the foundational lesson of the entire A-Level course. Students must leave understanding that language analysis at this level means using specific, technical terminology, not the general "language techniques" vocabulary from IGCSE. Use a simple, accessible text (a restaurant menu or a bus timetable) to demonstrate that even mundane language can be analysed systematically.',
    },
    {
      unit: 'Unit 1',
      slideTitle: "Grice's Cooperative Principle",
      content:
        'The four maxims: quantity, quality, relevance, manner. Examples of maxim observance and flouting. How flouting creates implicature. Application to real conversation transcripts. Practice: identify maxim flouting in provided examples and explain the implied meaning.',
      teacherNotes:
        'Grice is one of the most useful and accessible theorists. Use examples from everyday life: advertisements that flout quality (exaggeration), conversations where people flout quantity (being evasive), and humour that depends on flouting relevance. Students should be able to identify flouting and explain the resulting implicature by the end of this lesson.',
    },
    {
      unit: 'Unit 3',
      slideTitle: 'Writing a Commentary',
      content:
        'What a commentary is and is not (it is not a narrative of "what I did"). Structure: introduction stating purpose and audience, paragraph-by-paragraph analysis of linguistic choices, evaluation of effectiveness, connection to theory. Model commentary with annotations. Common mistakes and how to avoid them.',
      teacherNotes:
        'The commentary is a metacognitive exercise and many students struggle initially because they are not used to writing analytically about their own work. Provide a model commentary alongside the original creative piece so students can see how each point in the commentary links to a specific feature in the writing. Emphasise that the commentary should demonstrate conscious craft, not random description.',
    },
    {
      unit: 'Unit 4',
      slideTitle: 'Designing Your Language Investigation',
      content:
        'What makes a good research question. Choosing and justifying a methodology. Sample size and data collection. Ethical considerations (consent, anonymity). Structuring the investigation write-up. Examples of past successful investigations.',
      teacherNotes:
        'The investigation is the most independent piece of work students will produce. Spend time at this stage ensuring research questions are sufficiently focused. A common problem is students choosing topics that are too broad. Use the "narrowing funnel" technique: broad area of interest → specific context → specific linguistic feature → specific method of analysis. Approve all research questions before data collection begins.',
    },
  ],
  readingList: [
    {
      title: 'The Language Instinct',
      author: 'Steven Pinker',
      genre: 'Linguistics (popular science)',
      difficulty: 'moderate',
      termRelevance: 'Year 12 Term 1',
      description:
        'An accessible introduction to how language works, covering acquisition, grammar, and the nature of human language. Excellent background reading.',
    },
    {
      title: 'Language and Power',
      author: 'Norman Fairclough',
      genre: 'Linguistics (academic)',
      difficulty: 'challenging',
      termRelevance: 'Year 12 Term 2',
      description:
        'An introduction to critical discourse analysis. Essential for understanding how language shapes and is shaped by power relations.',
    },
    {
      title: "You Just Don't Understand",
      author: 'Deborah Tannen',
      genre: 'Sociolinguistics',
      difficulty: 'moderate',
      termRelevance: 'Year 12 - Language and Identity',
      description:
        'Explores gender differences in conversational style. Useful for the language and identity unit and as context for investigation topics.',
    },
    {
      title: 'Mother Tongue',
      author: 'Bill Bryson',
      genre: 'Language history (popular)',
      difficulty: 'accessible',
      termRelevance: 'Year 12 - Language Change',
      description:
        'An entertaining and informative history of the English language. Provides excellent context for the language change component.',
    },
    {
      title: 'English in the World',
      author: 'Philip Seargeant & Joan Swann',
      genre: 'Sociolinguistics',
      difficulty: 'challenging',
      termRelevance: 'Year 13',
      description:
        'Explores English as a global language, covering varieties, attitudes, and the politics of language. Supports investigation topics related to world Englishes.',
    },
    {
      title: 'Because Internet',
      author: 'Gretchen McCulloch',
      genre: 'Linguistics (popular science)',
      difficulty: 'accessible',
      termRelevance: 'All units',
      description:
        'An analysis of how the internet is changing language. Highly relevant to student investigations and to understanding language change in real time.',
    },
  ],
  vocabulary: [
    {
      word: 'lexis',
      definition: 'The total stock of words in a language; vocabulary considered as a system',
      exampleSentence:
        'The lexis of the advertisement draws heavily from a semantic field of nature and purity.',
      unit: 'Linguistic Frameworks',
      tier: 3,
    },
    {
      word: 'pragmatics',
      definition:
        'The study of how context contributes to meaning beyond the literal sense of words',
      exampleSentence:
        'A pragmatic analysis reveals that the speaker\'s question "Is that your coat on the floor?" functions as an indirect command to pick it up.',
      unit: 'Linguistic Frameworks',
      tier: 3,
    },
    {
      word: 'implicature',
      definition:
        'Something that is suggested or implied by an utterance rather than explicitly stated',
      exampleSentence:
        'The implicature of "I\'ve got an early start tomorrow" in response to a party invitation is that the speaker is declining.',
      unit: 'Pragmatics',
      tier: 3,
    },
    {
      word: 'idiolect',
      definition: 'The speech habits and patterns peculiar to an individual person',
      exampleSentence:
        'Her idiolect includes frequent use of hedging devices and rising intonation on declarative sentences.',
      unit: 'Language and Identity',
      tier: 3,
    },
    {
      word: 'sociolect',
      definition: 'A variety of language associated with a particular social group',
      exampleSentence:
        'The sociolect of medical professionals includes specialised terminology and nominalisation.',
      unit: 'Language and Identity',
      tier: 3,
    },
    {
      word: 'code-switching',
      definition:
        'The practice of alternating between two or more languages or language varieties within a single conversation',
      exampleSentence:
        'The bilingual speaker engages in code-switching, using Arabic for family-related topics and English for work-related topics.',
      unit: 'Language and Identity',
      tier: 3,
    },
    {
      word: 'nominalisation',
      definition:
        'The process of turning a verb or adjective into a noun, often creating a more formal or abstract register',
      exampleSentence:
        'The political speech uses nominalisation ("the destruction of communities") to remove agency and avoid attributing blame.',
      unit: 'Grammar',
      tier: 3,
    },
    {
      word: 'presupposition',
      definition: 'An implicit assumption that must be true for a statement to make sense',
      exampleSentence:
        'The question "When did you stop cheating?" carries the presupposition that the listener was cheating at some point.',
      unit: 'Pragmatics',
      tier: 3,
    },
    {
      word: 'corpus',
      definition: 'A large, structured collection of texts used for linguistic analysis',
      exampleSentence:
        'The investigation draws on a corpus of 50 social media posts collected over a two-week period.',
      unit: 'Unit 4 Investigation',
      tier: 3,
    },
    {
      word: 'deixis',
      definition:
        'Words or phrases whose meaning depends on context, such as "this," "here," "now," "I," and "you"',
      exampleSentence:
        'The use of spatial deixis ("over there," "this place") anchors the narrative in the speaker\'s physical location.',
      unit: 'Pragmatics',
      tier: 3,
    },
    {
      word: 'amelioration',
      definition:
        'A process of language change in which a word acquires a more positive meaning over time',
      exampleSentence:
        'The word "nice" has undergone amelioration, shifting from its original meaning of "foolish" to its modern sense of "pleasant."',
      unit: 'Language Change',
      tier: 3,
    },
    {
      word: 'pejoration',
      definition:
        'A process of language change in which a word acquires a more negative meaning over time',
      exampleSentence:
        'The word "villain" has undergone pejoration, originally meaning "farm worker" but now meaning "criminal" or "evil person."',
      unit: 'Language Change',
      tier: 3,
    },
  ],
  rubrics: [
    {
      title: 'IAL Text Analysis Rubric',
      assessmentObjective:
        'AO1/AO2: Knowledge of linguistic concepts and analysis of language in context',
      descriptors: [
        {
          level: 'Band 5 (Top)',
          description:
            'Perceptive, exploratory analysis that demonstrates sophisticated understanding of linguistic concepts. Terminology is precise and used fluently. Analysis systematically addresses multiple linguistic levels. Theoretical frameworks are applied convincingly and add genuine analytical insight. The response shows independent thinking and the ability to weigh competing interpretations.',
        },
        {
          level: 'Band 4',
          description:
            'Detailed, well-organised analysis with accurate and consistent use of terminology. Addresses language features at multiple levels. Theories are referenced and applied appropriately. Ideas are well-developed and supported with evidence. Clear awareness of the relationship between language and context.',
        },
        {
          level: 'Band 3',
          description:
            'Competent analysis with generally accurate terminology. Addresses features at two or more linguistic levels. Some reference to theory, though application may be surface-level. Ideas are supported with examples. Awareness of context, though this may not be fully integrated into analysis.',
        },
        {
          level: 'Band 2',
          description:
            'Some relevant analysis but terminology may be inaccurate or inconsistent. May focus on one linguistic level at the expense of others. Limited or no reference to theory. Some ideas are underdeveloped. Context may be acknowledged but not connected to linguistic features.',
        },
        {
          level: 'Band 1',
          description:
            'Limited analysis with minimal or incorrect use of terminology. May rely on GCSE-level approaches (identifying "language techniques" without linguistic precision). No reference to theory. Ideas are undeveloped and unsupported. Little or no awareness of context.',
        },
      ],
    },
    {
      title: 'IAL Language Investigation Rubric',
      assessmentObjective: 'AO1-AO3: Research design, data analysis, and evaluation',
      descriptors: [
        {
          level: 'Band 5 (Top)',
          description:
            'A focused, well-designed investigation with a clear, answerable research question. Methodology is justified and appropriate. Data is presented clearly and analysed systematically using precise linguistic terminology. Findings are connected to relevant theories and evaluated critically. Limitations are honestly assessed and suggestions for further research are insightful. Written in an academic register with fluent expression.',
        },
        {
          level: 'Band 4',
          description:
            'A clearly structured investigation with a focused research question. Methodology is explained and largely appropriate. Data is presented and analysed with generally accurate terminology. Findings are related to some relevant theories. Evaluation of limitations is present. Written clearly in an appropriate register.',
        },
        {
          level: 'Band 3',
          description:
            'An investigation with a workable research question, though it may be somewhat broad. Methodology is described but justification may be limited. Data analysis uses some appropriate terminology. Some reference to theory. Evaluation is present but may be superficial. Expression is generally clear.',
        },
        {
          level: 'Band 2',
          description:
            'An investigation with a vague or overly broad research question. Methodology is unclear or poorly justified. Data analysis is descriptive rather than analytical. Terminology is limited or inaccurate. Little or no reference to theory. Evaluation is minimal. Expression may lack academic register.',
        },
        {
          level: 'Band 1',
          description:
            'An unfocused investigation with no clear research question. Methodology is absent or inappropriate. Data is presented without meaningful analysis. Terminology is absent or incorrect. No theoretical engagement. No evaluation. Expression is informal or unclear.',
        },
      ],
    },
  ],
}

// ── Export ──────────────────────────────────────────────────────────────────

export const curriculumResources: CurriculumResource[] = [
  year7Resources,
  year8Resources,
  year9Resources,
  igcseResources,
  ialResources,
]
