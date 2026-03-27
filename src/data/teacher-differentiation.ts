// @ts-nocheck
export interface DifferentiationResource {
  id: string;
  title: string;
  targetGroup: 'SEN' | 'EAL' | 'Higher Ability' | 'Pupil Premium' | 'Mixed Ability';
  subject: string;
  keyStage: string;
  strategies: DifferentiationStrategy[];
  scaffoldedTasks: ScaffoldedTask[];
  adaptedResources: AdaptedResource[];
}

export interface DifferentiationStrategy {
  id: string;
  title: string;
  description: string;
  implementation: string;
  examples: string[];
}

export interface ScaffoldedTask {
  id: string;
  taskTitle: string;
  bronzeLevel: string;
  silverLevel: string;
  goldLevel: string;
  platinumLevel: string;
  teacherNotes: string;
}

export interface AdaptedResource {
  id: string;
  title: string;
  originalTask: string;
  adaptation: string;
  rationale: string;
}

export const differentiationResources: DifferentiationResource[] = [
  // Resource 1: SEN - Reading Comprehension Adaptations
  {
    id: 'sen-reading-comp-001',
    title: 'SEN Reading Comprehension Adaptations',
    targetGroup: 'SEN',
    subject: 'English Literature',
    keyStage: 'KS3-4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Chunked Text Reading',
        description: 'Break longer texts into manageable chunks with breaks between sections',
        implementation: 'Present text in 3-4 sentence units. Use visual markers (boxes, shading) to delineate each chunk. Pause after each chunk for comprehension checks. Use simple, consistent formatting.',
        examples: [
          'Original paragraph: 4-5 sentences → Break into 2 chunks max',
          'Use white space between chunks to prevent visual overwhelm',
          'Add simple icons or symbols to mark section boundaries',
          'Provide 10-15 word summary for each chunk'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Vocabulary Pre-teaching',
        description: 'Introduce key vocabulary before text engagement',
        implementation: 'Create glossaries with student-friendly definitions (under 20 words). Use visuals alongside definitions. Teach 3-5 key terms maximum per text. Use word cards with images.',
        examples: [
          'Create picture-word cards for difficult vocabulary',
          'Use gesture or mime to reinforce meaning',
          'Provide synonym alternatives in simple language',
          'Use vocabulary in context sentences before text'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Guided Question Sequences',
        description: 'Scaffold comprehension through carefully sequenced literal → inferential questions',
        implementation: 'Start with "Who/What/Where" questions (literal). Progress to "Why/How" questions (inferential). Limit to 4-6 questions per chunk. Provide visual supports for answers.',
        examples: [
          'Literal: "Who spoke to Romeo?" → Inferential: "Why did she refuse to speak to him?"',
          'Use multiple choice for independence building',
          'Include visual answer options (images, symbols)',
          'Pair questions with sentence starters'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Multi-Sensory Engagement',
        description: 'Support comprehension through audio, visual, and kinesthetic modalities',
        implementation: 'Provide audio recordings of text (reduce cognitive load for decoding). Use colour-coding for different character voices/themes. Include movement activities to reinforce plot points.',
        examples: [
          'Listen to audiobook chapter, then read silently',
          'Act out key scenes to understand character motivation',
          'Use different coloured highlighters for different character perspectives',
          'Create physical timeline on classroom floor'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Character Description Task - "A Christmas Carol"',
        bronzeLevel: 'Match 3 character names to picture cards. Identify if character is happy/sad/angry from illustration.',
        silverLevel: 'Read 2-sentence descriptions of characters. Answer: "Is Scrooge kind or unkind?" with word bank options.',
        goldLevel: 'Read paragraph about character. Explain in 2-3 sentences why character behaves this way, using "because" sentence starter.',
        platinumLevel: 'Analyze character development across two scenes. Compare how character has changed and explain reasons for transformation using evidence.',
        teacherNotes: 'Pre-teach emotional vocabulary. Use visual emotion cards for bronze/silver levels. Provide sentence frames for gold level. Ensure all levels focus on the same character for consistency.'
      },
      {
        id: 'task-002',
        taskTitle: 'Plot Event Sequencing - "The Tempest"',
        bronzeLevel: 'Arrange 3 plot event pictures in correct order. Use simple labels like "First", "Next", "Last".',
        silverLevel: 'Read 4 plot summaries (2-3 sentences each). Number them 1-4 in correct order of events.',
        goldLevel: 'Read extended plot descriptions. Identify which event happened first and explain why this order makes sense using "This happened first because..."',
        platinumLevel: 'Analyze how one event causes another. Create cause-effect chains showing how early events lead to climax and resolution.',
        teacherNotes: 'Visual timeline template essential for all levels. Use same events at each level for scaffolding clarity. Bronze can use Velcro cards for reusability.'
      },
      {
        id: 'task-003',
        taskTitle: 'Theme Identification - "Lord of the Flies"',
        bronzeLevel: 'Sort picture cards into "Good choices" and "Bad choices" piles. Discuss with adult.',
        silverLevel: 'Read scenario cards (1 sentence each). Identify if each shows courage, friendship, fear, or power. Use word bank.',
        goldLevel: 'Read paragraph describing character action. Identify theme (e.g., civilization vs. savagery) and provide one piece of text evidence.',
        platinumLevel: 'Compare how different characters handle same theme. Analyze which character best represents the novel\'s view of human nature with detailed justification.',
        teacherNotes: 'Use consistent colour-coding for each theme across levels. Provide visual theme posters for reference. Adult support crucial for inferential thinking at silver/gold.'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'Simplified Character Description Sheet',
        originalTask: 'Full character analysis essay including physical description, personality traits, relationships, motivation, character arc across entire novel',
        adaptation: 'One-page template with four sections: (1) What does character look like? (2) Is character kind or mean? (3) Does character have friends? (4) What does character want? Provide sentence starters and word banks.',
        rationale: 'Breaks overwhelming analytical task into concrete, observable elements. Word bank reduces cognitive load for vocabulary retrieval. Shorter format maintains focus and builds confidence.'
      },
      {
        id: 'resource-002',
        title: 'Annotated Text Version',
        originalTask: 'Students independently annotate complex Shakespearean text for literary devices and meaning',
        adaptation: 'Pre-annotated text with all archaic language translations in margin notes, key literary devices highlighted with symbols (metaphor = star icon), with vocabulary glossary at bottom of every page',
        rationale: 'Removes decoding barrier so students can focus on meaning and devices. Consistent visual symbols provide immediate recognition. Glossary placement supports sustained engagement.'
      },
      {
        id: 'resource-003',
        title: 'Audio + Text Bundle',
        originalTask: 'Independent silent reading of 20-page chapter with subsequent comprehension quiz',
        adaptation: 'Provide professional audiobook recording (7-10 minutes) followed by chunked text reading (students read along while listening). Include illustration after each chunked section.',
        rationale: 'Dual modality reduces working memory demands. Hearing fluent reading models pronunciation and expression. Visual representations support meaning-making.'
      }
    ]
  },

  // Resource 2: SEN - Writing Tasks Adaptations
  {
    id: 'sen-writing-001',
    title: 'SEN Writing Tasks Adaptations',
    targetGroup: 'SEN',
    subject: 'English Literature & Language',
    keyStage: 'KS3-4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Modelled & Shared Writing',
        description: 'Teacher demonstrates complete writing process with think-aloud narration',
        implementation: 'Think aloud while drafting. Show crossing-out and revisions as normal. Talk through each decision: word choice, punctuation, how to start sentences. Create collaborative class text first.',
        examples: [
          'Teacher writes first 3 sentences of character description aloud, explaining choices',
          'Class suggests next sentence; teacher scribes on board explaining edits',
          'Students copy teacher model into writing book, noticing structure patterns',
          'Keep model on display for reference during independent writing'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Sentence Frames & Starters',
        description: 'Provide structured templates for different sentence types and purposes',
        implementation: 'Create bank of sentence starters on laminated card. Include examples of each frame. Teach students to select appropriate frame for their purpose. Build frames gradually.',
        examples: [
          'Character description: "The character is... because... This shows..."',
          'Opinion: "I think... because... An example is..."',
          'Cause/effect: "Because... happened, the character... and this caused..."',
          'Comparison: "...is similar to... because... However, ...is different because..."'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Scaffolded Planning Tools',
        description: 'Visual organizational frameworks to support planning and structure',
        implementation: 'Use graphic organizers (webs, tables, boxes) to map ideas before writing. Teach students to complete planner, then use it as writing guide. Use same organizer type consistently.',
        examples: [
          'Character web: name in centre, appearance/personality/actions in surrounding boxes',
          'Story mountain: plot points placed on curve for sequencing',
          'Venn diagram: comparing characters or texts with shared/different features',
          'Table: separating what character says vs. does vs. thinks'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Reduced Quantity with Quality Focus',
        description: 'Accept shorter written products while maintaining standards for what\'s produced',
        implementation: 'Reduce word count expectations by 50%. Focus on accuracy and meaning in shorter piece. Celebrate quality over quantity. Use "less is more" philosophy.',
        examples: [
          'Instead of 2-page character analysis: 1 paragraph with 4 strong sentences',
          'Instead of 500-word story: 200 words with vivid detail in each sentence',
          'Instead of 5 reasons with examples: 3 reasons with one strong example each',
          'Accept bullet point format if supports communication of ideas'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Character Description Writing - "Holes" by Louis Sachar',
        bronzeLevel: 'Copy 3 pre-written sentences about character from word bank. Illustrate each sentence with simple drawing.',
        silverLevel: 'Use character template with blanks: "The character [name] is [adjective] because [reason]. He/She likes [thing] and [thing]." Complete using word bank.',
        goldLevel: 'Write 4 sentences describing character using sentence starters: "The character... One reason they are... They show this when... This character is important because..." Provide paragraph example.',
        platinumLevel: 'Write 1-2 paragraphs analyzing how character\'s personality affects their choices in the story. Include at least two examples from text with brief explanations.',
        teacherNotes: 'All levels use same character. Bronze copy activity builds recognition of description. Silver template reduces transcription burden. Gold/platinum increase independence. Use discussion before writing at all levels.'
      },
      {
        id: 'task-002',
        taskTitle: 'Story Recount/Retelling - "The Very Hungry Caterpillar"',
        bronzeLevel: 'Arrange 4 picture cards in order. Say what happens in each with adult scribing to capture student words.',
        silverLevel: 'Complete 4-sentence recount using word bank and visual story sequence: "First,... Then,... Next,... Finally,..." ',
        goldLevel: 'Write 5-7 sentence recount of key story events in order. Use "First", "Then", "Next", "After that", "Finally" linking words. Include what the caterpillar does and eats.',
        platinumLevel: 'Write 2-paragraph recount including: What the caterpillar does each day AND how it changes. Use past tense consistently. Include at least one descriptive detail about the caterpillar or setting.',
        teacherNotes: 'Visual story sequence cards essential for all levels. Bronze is oral recount supporting speech development. Use repeated interactive reading before writing task. Silver-platinum levels shown story sequence on worksheet.'
      },
      {
        id: 'task-003',
        taskTitle: 'Opinion/Preference Writing - Book Character Choice',
        bronzeLevel: 'Choose favourite character from three picture options. Point to or say which one. Adult writes: "[Student] likes [character] because [student provides reason]."',
        silverLevel: 'Circle favourite character from three options with pictures. Complete: "My favourite character is _______. I like this character because _________ (word bank: is kind/is brave/helps others/makes me laugh)."',
        goldLevel: 'Choose and name favourite character. Write 3-4 sentences: "My favourite character is... I think this character is... because... I would like to... with this character because..."',
        platinumLevel: 'Write comparison paragraph: "I think [Character A] is braver than [Character B] because... However, [Character B] is... One reason [Character A] is braver is... This matters because..."',
        teacherNotes: 'All levels built on personal preference to increase motivation. Bronze is emerging oral expression supporting writing foundation. Use familiar characters to reduce cognitive load. Silver and above provide sentence starters and examples.'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'Writing Frame Template',
        originalTask: 'Write analytical essay on character motivation and development across novel (1500 words, formal academic register)',
        adaptation: '1-page template with pre-printed sections: (1) Character name & appearance [5-sentence max], (2) What character wants [3-sentence max], (3) What character learns [3-sentence max]. Includes word bank and sentence starters for each section.',
        rationale: 'Pre-structure reduces planning burden. Word bank prevents vocabulary retrieval failure. Section limits prevent student overwhelm. Supports independent writing while maintaining structure.'
      },
      {
        id: 'resource-002',
        title: 'Word Bank & Spelling Support',
        originalTask: 'Write extended descriptive narrative with sophisticated vocabulary and accurate spelling throughout',
        adaptation: 'Provide word mat organized by topic: Character words (brave, kind, angry, scared), Action words (ran, whispered, grabbed), Descriptive words (beautiful, tiny, cold). Include picture alongside each word.',
        rationale: 'Reduces working memory demands by making vocabulary immediately available. Picture support aids retrieval and meaning. Students focus on composition rather than spelling/vocabulary retrieval.'
      },
      {
        id: 'resource-003',
        title: 'Scribe/Transcription Support',
        originalTask: 'Complete extended written assignment independently demonstrating fine motor control and spelling accuracy',
        adaptation: 'Student dictates ideas to adult who scribes student\'s exact words. Student then edits scribed text together with adult feedback. Typed version provided for student to copy (if copying needs developing) or to illustrate.',
        rationale: 'Removes transcription barrier for students with motor skill or spelling difficulties. Supports oral language development. Captures sophisticated thinking that may exceed current writing ability.'
      }
    ]
  },

  // Resource 3: SEN - Exam Technique Adaptations
  {
    id: 'sen-exam-technique-001',
    title: 'SEN Exam Technique & Assessment Access',
    targetGroup: 'SEN',
    subject: 'English Language & Literature',
    keyStage: 'KS4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Question Decoding & Annotation',
        description: 'Teach students to break down exam questions into component parts',
        implementation: 'Use consistent colour-coding system: highlight command word (explain/compare/analyse) in one colour, topic in another, range in third. Teach students to write what question is asking in own words before answering.',
        examples: [
          '"Explain how the author uses language to create mood." Highlight: command (yellow), focus (blue), aspect (green)',
          'Student writes: "I need to find examples of words/techniques the author used and explain how they create the feeling/atmosphere."',
          'Apply same system consistently across all question types',
          'Pre-teach 10 key command words with examples and actions required'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Extended Response Structuring',
        description: 'Provide formulaic response structures for different question types',
        implementation: 'Teach PEE structure (Point-Evidence-Explanation) using examples. Display structure as poster. Teach students to identify where each component appears in model answers.',
        examples: [
          'Point: "The author uses dialogue here."',
          'Evidence: "He writes: \'Help me!\'."',
          'Explanation: "This shows the character is desperate and afraid."',
          'Practice filling in each section for 3-4 guided examples before independent attempts'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Timed Writing & Time Management',
        description: 'Build confidence and efficiency through structured timed practice',
        implementation: 'Start with 10-minute timed practice on single short question. Build up gradually to full paper section. Use visual timer students can see. Teach how to allocate time: 2 min planning, main time writing, 2 min check.',
        examples: [
          'Week 1-2: 10-minute single language analysis question with planning frame provided',
          'Week 3-4: 20-minute comparison with visual structure template',
          'Week 5-6: 30-minute literature extract without template (build independence)',
          'Final practice: Full timed paper (3 hours) with graduated support as needed'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Access Arrangements Maximization',
        description: 'Ensure exam-approved arrangements are understood and practiced throughout year',
        implementation: 'Train student to use assigned arrangement (reader, scribe, extra time, rest breaks) regularly in lesson context. Practice with mock questions before exam. Use arrangement exactly as will appear in exam.',
        examples: [
          'If reader provided: Practice following along while reading is narrated; don\'t over-rely on reading aloud',
          'If scribe provided: Dictate responses regularly; practice managing communication of ideas',
          'If extra time: Plan how to use it (checking, extending, attempting more questions)',
          'If rest breaks: Practice working, taking break, re-engaging with focus'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Language Analysis Exam Question Practice',
        bronzeLevel: 'Circle the technique (metaphor/simile/personification) in given sentence. Label with example from word bank. Adult scribes explanation starting with "This is..."',
        silverLevel: 'Identify technique in provided quote. Complete: "This is a [technique]. It compares [thing] to [thing]. This creates [effect]." Use word bank for effects.',
        goldLevel: 'Analyze 3-word quote showing technique. Write 4 sentences: "The writer uses... to... This technique compares/makes... This creates a [effect] because... This helps the reader..."',
        platinumLevel: 'Complete full language analysis question (8-16 marks equivalent): Identify technique, provide evidence with quote, explain effect and writer\'s purpose. Demonstrate range of techniques across response.',
        teacherNotes: 'Bronze-silver use same quote. Gold-platinum use different quotes. All levels practice same techniques. Use colour-coded technique card reference for all levels initially.'
      },
      {
        id: 'task-002',
        taskTitle: 'Character Development Comparison Question',
        bronzeLevel: 'View two character scenes (illustrated or short video). Point to which character shows more change. Say one reason.',
        silverLevel: 'Read 2-sentence descriptions of character at beginning and end. Circle evidence of change. Complete: "[Character] changes from ___ to ___. This happens because ___."',
        goldLevel: 'Compare character at two points with 5-sentence response: "At first, [character]... By the end, [character]... The biggest change is... This happens because... I know this because..."',
        platinumLevel: 'Write full comparison response (12-16 mark equivalent): Compare character development across story. Include multiple examples. Explain reasons for change. Link to theme/message. Use comparative language ("whereas", "however", "similarly").',
        teacherNotes: 'Bronze-silver use same character & scenes. Use visual timeline for all levels. Gold-platinum work with different character depending on text studied. Silver frame builds to gold independence.'
      },
      {
        id: 'task-003',
        taskTitle: 'Timed Writing - Short Story Response',
        bronzeLevel: '5-minute timed task: Copy one sentence from word bank; illustrate it.',
        silverLevel: '10-minute timed task: Write 3-4 sentences about story character using frame: "The character is... They... This shows..." Provided with character card.',
        goldLevel: '15-minute timed task: Write short paragraph explaining character\'s action and its consequence. Use template with time allocation: 2 min planning (use frame), 10 min writing, 3 min checking.',
        platinumLevel: '25-minute timed task: Write extended response to exam-style prompt. Allocate time: 2 min reading/planning, 20 min writing, 3 min checking. Practice without template; self-regulate planning time.',
        teacherNotes: 'Use visual timer for all levels. All start with planning frame; gold-platinum move toward independence. Practice exact time allocations students will use in exam.'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'Question Decoding Poster & Card Set',
        originalTask: 'Students independently decode complex exam question requiring understanding of implicit command requirements and extended response format',
        adaptation: 'Classroom poster showing 10 key command words (Explain, Analyse, Compare, Evaluate, etc.) with visual icons, required components, and sentence starter. Laminated card set for each student to reference during practice.',
        rationale: 'Visual support reduces need to retain command structures in working memory. Consistent reference point builds automaticity. Icons support visual learners.'
      },
      {
        id: 'resource-002',
        title: 'Annotated Model Answers',
        originalTask: 'Review published exemplar answers to understand what high achievement looks like',
        adaptation: 'Mark exemplar answers with color-coded annotations: Where is Point (blue)? Where is Evidence (yellow)? Where is Explanation (green)? Include feedback bubble annotations explaining why each section works.',
        rationale: 'Removes need to independently analyze structure. Explicit teaching of what "good" looks like supports conscious strategy use. Colour-coding builds pattern recognition.'
      },
      {
        id: 'resource-003',
        title: 'Multi-Sensory Assessment Practice',
        originalTask: 'Complete timed written assessment under standard exam conditions',
        adaptation: 'Offer graduated practice: (1) Untimed with template support; (2) Untimed without template; (3) Timed with template; (4) Timed without template. Include movement breaks between sections. Provide audio dictionary support if approved arrangement.',
        rationale: 'Graduated progression builds confidence and independence. Breaks prevent fatigue. Audio support removes decoding barrier without compromising assessment.'
      }
    ]
  },
  // Resource 4: EAL - Vocabulary Scaffolding
  {
    id: 'eal-vocab-scaffold-001',
    title: 'EAL Vocabulary Scaffolding & Academic Language Development',
    targetGroup: 'EAL',
    subject: 'English Language',
    keyStage: 'KS3-4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Tiered Vocabulary Instruction',
        description: 'Teach vocabulary in three tiers aligned to frequency and transferability',
        implementation: 'Tier 1 (common/high frequency): everyday words, minimal explicit teaching. Tier 2 (academic/versatile): key academic words, explicit teaching, multiple exposures. Tier 3 (domain-specific): literature/subject terminology, visual/contextual support.',
        examples: [
          'Tier 1: "look", "go", "happy" - assumed in context',
          'Tier 2: "analyse", "develop", "reveal" - teach explicitly with examples across texts',
          'Tier 3: "metaphor", "foreshadowing", "protagonist" - teach with visual examples, word cards, definitions'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Word Building & Morphology',
        description: 'Develop vocabulary depth through understanding word components and relationships',
        implementation: 'Teach common prefixes (un-, re-, pre-), suffixes (-tion, -ment, -able), and roots. Show how meaning changes with affixes. Build word families (happy, unhappy, happily, happiness).',
        examples: [
          'Root: "struct" (build) → structure, construct, instruct, destruction',
          'Prefix + root: un+ "happy" = unhappy; re+ "read" = reread',
          'Root + suffix: "create" (root) → creation, creative, recreate, recreation',
          'Create morphology anchor charts for repeated reference'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Vocabulary in Context Exposure',
        description: 'Build word meaning through repeated exposure in varied, meaningful contexts',
        implementation: 'Use words across multiple texts, contexts, and modalities. Teach students to infer meaning from context clues. Build word webs showing connections between words.',
        examples: [
          'Word "reveal": "The author reveals the character\'s secret." / "The detective reveals the truth." / "The painting\'s colours reveal emotion."',
          'Context clue teaching: "The character was despondent (sad and hopeless) about the outcome."',
          'Word web: "reveal" connected to similar words (show, uncover, disclose, expose) and their subtle differences'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Visual & Multimodal Word Learning',
        description: 'Support vocabulary acquisition through image, gesture, and movement',
        implementation: 'Use visual representations (photos, illustrations, symbols, icons) with every vocabulary item. Teach gesture and movement associations (actions, emotions). Create word card displays with images.',
        examples: [
          'Word card: "menacing" (word) + angry face illustration + teaching gesture (clenched fist, angry expression)',
          '"Graceful" demonstrated through movement; students copy flowing arm movements',
          'Emotion vocabulary anchor chart with photographs of real faces showing each emotion',
          'Actions mimed during read-aloud: "marched" (strong walk), "crept" (quiet, bent steps)'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Academic Vocabulary in Context - "Character Development"',
        bronzeLevel: 'Match vocabulary word cards (with pictures) to sentence strips in context. Example: "develop" card with sentence "The character develops from selfish to kind."',
        silverLevel: 'Read 4 example sentences showing word in context. Complete: "The word [word] means... An example is... When I see this word, I think about..."',
        goldLevel: 'Read paragraph containing key vocabulary. Identify word. Write definition based on context AND provide own example sentence showing same meaning.',
        platinumLevel: 'Analyze academic vocabulary in model response. Identify Tier 2/3 words. Write explanation of why author chose these specific words to sound more academic/formal.',
        teacherNotes: 'All levels use same vocabulary. Bronze uses visual support (pictures with words). Silver builds definition from context. Gold-platinum develop precision and register awareness.'
      },
      {
        id: 'task-002',
        taskTitle: 'Morphology & Word Building - Literary Terms',
        bronzeLevel: 'Match word cards to base word cards. Example: "happy" matches "unhappy", "happily". Sort into piles: "same meaning" vs. "different meaning".',
        silverLevel: 'Build word families from base words. Given "create", write: creation, creative, recreation. Explain how prefix/suffix changes meaning.',
        goldLevel: 'Analyze morphology in literary vocabulary. Example: "un+reliable = unreliable". Apply pattern to new words. Explain how understanding word parts helps predict meaning of unfamiliar words.',
        platinumLevel: 'Research etymology of literary terms. Example: "metaphor" from Greek meta (beyond) + pherein (to carry). Write explanation connecting etymology to current meaning and how this understanding deepens comprehension.',
        teacherNotes: 'Use consistent colour-coding: base (blue), prefix (red), suffix (yellow). Display morphology chart in classroom for reference. All levels build automaticity with common affixes.'
      },
      {
        id: 'task-003',
        taskTitle: 'Emotional/Descriptive Vocabulary Use - Character Description',
        bronzeLevel: 'Given character photograph, choose emotion word from options (happy, sad, angry, scared). Point to matching emotion face on poster.',
        silverLevel: 'Given character action/situation, select appropriate emotion word from word bank. Explain: "The character feels [emotion] because..." ',
        goldLevel: 'Write sentence describing character\'s emotion using precise vocabulary: "The character feels [emotion] when... This shows because..."',
        platinumLevel: 'Write paragraph analyzing multiple emotions character experiences. Use sophisticated emotional vocabulary ("melancholy", "conflicted", "apprehensive") with evidence and explanation of internal conflict.',
        teacherNotes: 'All use emotion reference poster. Bronze relies on visual recognition. Silver-platinum develop vocabulary precision. Teach nuanced emotion vocabulary progressively (happy → pleased → delighted → elated).'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'Vocabulary Learning Pack',
        originalTask: 'Students independently encounter new academic words in text, infer meaning from context, and integrate into own writing',
        adaptation: 'Pre-teach vocabulary with 5-part pack: (1) Word card with pronunciation guide; (2) Visual illustration; (3) Student-friendly definition (under 20 words); (4) Example sentences showing multiple contexts; (5) Word family chart showing related forms.',
        rationale: 'Removes cognitive load from meaning inference. Multiple exposures support retention. Visual supports aid memory. Word family context prevents overgeneralization.'
      },
      {
        id: 'resource-002',
        title: 'Morphology Anchor Chart & Affix Cards',
        originalTask: 'Analyze new vocabulary by inferring meaning from word components',
        adaptation: 'Classroom-sized anchor chart showing 10 common prefixes and 10 common suffixes with examples and visual representation. Laminated affix cards for students to build words during lessons.',
        rationale: 'Visual reference reduces need to memorize rules. Physical manipulation (building with cards) supports kinesthetic learners. Reduces decoding demands for complex words.'
      },
      {
        id: 'resource-003',
        title: 'Word Web Organizer',
        originalTask: 'Understand nuanced differences between synonyms and use appropriately in academic writing',
        adaptation: 'Provide pre-made word webs showing word in center with related words in surrounding circles. Include subtle definition differences and example sentences for each word in the web.',
        rationale: 'Supports understanding of semantic relationships. Reduces working memory demands. Provides immediate reference for precise word choice during writing.'
      }
    ]
  },

  // Resource 5: EAL - Academic Writing Scaffolding
  {
    id: 'eal-academic-writing-001',
    title: 'EAL Academic Writing Support & Argument Development',
    targetGroup: 'EAL',
    subject: 'English Literature & Language',
    keyStage: 'KS3-4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Sentence Combining & Complexity Scaffolding',
        description: 'Build sentence variety and complexity gradually from simple to compound to complex structures',
        implementation: 'Model combining simple sentences into complex ones. Show how to use connecting words (and, but, because, although, however). Start with 2 sentences → combine, then progress to longer chains.',
        examples: [
          'Simple: "The character is angry. She walks out." → Compound: "The character is angry, so she walks out."',
          'Compound: "The character is brave. She faces her fears. She succeeds." → Complex: "Although the character is afraid, her bravery helps her succeed."',
          'Teach connectives in context: because (cause), but (contrast), while (time), which (description)'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Argument Scaffolding Frameworks',
        description: 'Provide structured templates for building arguments with clear claim, evidence, and reasoning',
        implementation: 'Teach argument structure: Claim (what I think) → Evidence (proof from text) → Reasoning (why this matters). Use visual flowchart. Practice with single paragraph before full essay.',
        examples: [
          'Claim: "Shakespeare uses dramatic irony to create tension."',
          'Evidence: "When Macbeth says \'None of woman born shall harm me\' but Macduff \'was from his mother\'s womb untimely ripped\'..."',
          'Reasoning: "This surprise creates dramatic impact because the audience knows Macbeth\'s safety is false."',
          'Sentence frames: "I believe... because... This is shown when... This matters because..."'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Register & Formality Awareness',
        description: 'Develop understanding of formal academic register appropriate for literary analysis',
        implementation: 'Compare informal vs. formal versions of same idea. Teach formal vocabulary and structures. Create "academic language" wall. Practice transforming informal ideas into formal academic language.',
        examples: [
          'Informal: "The guy is really angry." → Formal: "The protagonist demonstrates significant anger."',
          'Informal: "The poem is sad." → Formal: "The poem evokes melancholic and introspective emotional response."',
          'Avoid: contractions (isn\'t → is not), first person (I think → It could be argued), casual language (stuff, really, cool)'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Planning & Organization Graphic Organizers',
        description: 'Visual frameworks supporting essay planning and ensuring organized development of ideas',
        implementation: 'Teach essay outline structure using visual organizer: Introduction (claim), Body para 1 (point + evidence + reasoning), Body para 2, Body para 3, Conclusion. Fill organizer before writing.',
        examples: [
          'Essay outline template showing where each paragraph goes and what each must contain',
          'Para outline: Topic sentence (what para is about) → Evidence 1 → Explanation → Evidence 2 → Explanation → Link back to claim',
          'Concept map: Central claim with 3 branches for 3 main arguments, sub-branches for evidence'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Analysis Paragraph Writing - Literary Techniques',
        bronzeLevel: 'Complete analysis frame: "[Author] uses [technique] to show [effect]. For example, [quote]. This creates [effect] because [explanation]." Provide word bank and example paragraph.',
        silverLevel: 'Write 4-5 sentence paragraph analyzing one technique. Use frame: "The author... This technique... An example is... This creates... because..." Include at least one quote.',
        goldLevel: 'Write 5-7 sentence paragraph analyzing technique and its effect. Include claim, two pieces of evidence with explanations, and link back to overall meaning. Use academic vocabulary and complex sentences.',
        platinumLevel: 'Write 8-10 sentence paragraph comparing how two different techniques create similar or different effects. Include multiple quotes, sophisticated analysis, and explicit link to writer\'s purpose.',
        teacherNotes: 'All levels focus on same technique. Bronze sentence frame removes composition burden. Silver adds complexity. Gold-platinum develop independence and analytical depth. Use model analysis paragraphs at each level.'
      },
      {
        id: 'task-002',
        taskTitle: 'Argumentative Response - Character Motivation',
        bronzeLevel: 'Claim + Evidence frame: "I think [character] is [trait] because [reason]. Evidence: [character] does [action]." Include visual character card.',
        silverLevel: 'Write 3-4 sentence response: Claim sentence + Evidence + Explanation of why evidence supports claim. "I believe... This is shown when... This demonstrates..."',
        goldLevel: 'Write developed paragraph: Claim statement + 2 pieces of evidence + explanation for each + concluding sentence linking to overall character analysis. Use "consequently", "therefore", "this reveals" for formal connections.',
        platinumLevel: 'Write multi-paragraph response comparing character motivations: claim about contrast between characters, 2-3 paragraphs with parallel structure, each explaining one character\'s motivation with evidence and reasoning.',
        teacherNotes: 'All levels build on same character. Visual support for bronze/silver. Sentence stems provided but progress toward independence. Gold-platinum demonstrate argument development skills.'
      },
      {
        id: 'task-003',
        taskTitle: 'Timed Essay Planning & Drafting - Mixed Ability Essay',
        bronzeLevel: 'Answer 2 guided questions about topic (with word bank): "What is the story about?" "Why is [character] important?" Adult scribes answer.',
        silverLevel: '10-minute timed task: Complete essay outline (introduction topic, 3 main points, conclusion). Use structured outline template with sentence starters.',
        goldLevel: '20-minute timed task: Write introduction + 1 full body paragraph with topic sentence, evidence, explanation, linking. Use outline as planning guide.',
        platinumLevel: '40-minute timed task: Complete full essay outline + draft 2-3 body paragraphs with developed analysis, multiple evidence pieces, and formal academic language. Allocate time: 5 min planning, 30 min writing, 5 min checking.',
        teacherNotes: 'Time limits build stamina gradually. All use outline before writing to ensure organization. Provide essay structure template for reference. Bronze-silver emphasize planning over production.'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'Academic Writing Sentence Bank & Frames',
        originalTask: 'Write analytical essay with sophisticated language and varied sentence structures in formal academic register',
        adaptation: 'Provide organized sentence banks by function: Introducing ideas ("The author suggests...", "This reveals..."), Providing evidence ("Evidence for this...", "The text shows..."), Explaining ("This demonstrates...", "Consequently..."), Concluding ("In summary..."). Include 3-5 options for each function.',
        rationale: 'Removes cognitive burden of generating academic language while teaching register. Provides models of appropriate structures. Supports engagement with content rather than language mechanics.'
      },
      {
        id: 'resource-002',
        title: 'Essay Planning Template & Outline Graphic Organizer',
        originalTask: 'Plan multi-paragraph essay with clear organization, developed arguments, and logical progression of ideas',
        adaptation: 'One-page essay template showing: Introduction section (with space for hook + claim), 3 Body Paragraph sections (each with space for topic sentence, evidence 1, explanation 1, evidence 2, explanation 2, linking sentence), Conclusion section.',
        rationale: 'Visual structure reduces planning cognitive load. Forces strategic thinking about organization before writing. Provides checklist for paragraph completion.'
      },
      {
        id: 'resource-003',
        title: 'Formal vs. Informal Language Conversion Guide',
        originalTask: 'Automatically use appropriate formal academic register throughout extended writing',
        adaptation: 'Two-column reference sheet showing "Informal" expressions on left with "Formal Academic" equivalents on right. Examples: "I think" → "It could be argued", "proves" → "demonstrates", "awesome" → "remarkable", contractions → full forms.',
        rationale: 'Explicit teaching of register rules with immediate reference. Reduces need to rely on implicit understanding of formality conventions. Supports students who haven\'t acquired register implicitly.'
      }
    ]
  },

  // Resource 6: EAL - Literary Analysis Scaffolding
  {
    id: 'eal-literary-analysis-001',
    title: 'EAL Literary Analysis & Interpretation Development',
    targetGroup: 'EAL',
    subject: 'English Literature',
    keyStage: 'KS3-4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Contextual Pre-teaching & Building Schemata',
        description: 'Activate and build background knowledge before literary analysis to support meaning-making',
        implementation: 'Pre-teach historical/cultural context. Use images, maps, timelines to make context concrete. Discuss parallels to students\' own cultures/experiences. Introduce key themes before reading.',
        examples: [
          'Before studying "Of Mice and Men": teach Great Depression, migrant labour, American Dream. Show photographs, short documentary',
          'Before Shakespeare: teach Elizabethan theatre, social hierarchy, gender roles. Use comparison to modern contexts to aid understanding',
          'Build vocabulary of relevant historical terms before reading: "plantation", "slavery", "Victorian", "colonization"'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Literary Device Recognition & Naming',
        description: 'Teach students to identify and name literary techniques with clear visual/verbal definitions',
        implementation: 'Use consistent terminology and definitions. Create visual anchor chart for each device with definition, example, and effect. Teach devices in clusters: imagery devices (metaphor/simile), sound devices (alliteration/onomatopoeia).',
        examples: [
          'Metaphor anchor chart: "Saying something IS something else" with 3 clear examples and visual icons',
          'Teach alliteration with sound: repeat word examples aloud so students hear the pattern',
          'Practice identifying devices in isolation first: "Find the simile in this sentence." → Then in extended text'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Evidence-Based Interpretation Training',
        description: 'Teach explicit process for moving from text observation to supported interpretation',
        implementation: 'Model think-aloud process: Notice (what I observe) → Interpret (what this might mean) → Reason (why this interpretation makes sense) → Support (evidence from text). Provide observation charts with columns for each step.',
        examples: [
          'Notice: "The character wears dark clothes." Interpret: "This suggests sadness or mystery." Reason: "Dark is often linked to negativity." Support: "Later text reveals character is hiding secret."',
          'Model how to support interpretation with multiple types of evidence: direct quotes, character actions, narrative description, patterns across text'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Comparative Analysis Support',
        description: 'Scaffold comparison between texts, characters, or interpretations with explicit structures',
        implementation: 'Use parallel structure: introduce both texts/characters in similar way, then compare systematically. Provide Venn diagram or comparison matrix organizing similarities and differences.',
        examples: [
          'Introduce both characters with same framework: appearance, personality, motivation, key action → Then compare using same categories',
          'Comparison matrix with rows (theme, technique, character response) and columns (Text A, Text B, Similarities, Differences)',
          'Teach comparative language: "Similarly", "However", "In contrast", "While...also", "Both...but"'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Technique Identification & Effect Analysis - Imagery',
        bronzeLevel: 'Read descriptive passage. Circle specific words that create image. Answer: "What does this help you see/feel?" using word bank (happy, sad, scared, calm).',
        silverLevel: 'Identify 2 sensory images in passage. Complete: "The author describes... This image helps me imagine... The effect is..." Use comparison to real-world experience.',
        goldLevel: 'Analyze how imagery functions in passage. Write 4-5 sentences: "The author uses imagery of... This creates a [effect]... because... This helps the reader understand..."',
        platinumLevel: 'Write paragraph analyzing how imagery develops throughout multiple scenes. Explain how different types of imagery create different effects, and how this supports overall interpretation of character/theme.',
        teacherNotes: 'All levels use same passage. Bronze focuses on sensory aspects. Silver moves to simple analysis. Gold-platinum develop interpretation. Pre-teach sensory vocabulary (visual, auditory, tactile, olfactory, gustatory).'
      },
      {
        id: 'task-002',
        taskTitle: 'Character Interpretation from Evidence - "Macbeth" or comparable text',
        bronzeLevel: 'View scene (illustrated or video clip). Circle character emotion from options. Identify what character does that shows this emotion.',
        silverLevel: 'Read character action + dialogue. Infer internal state: "When [character] does [action] and says [quote], I can tell [character] feels... because..."',
        goldLevel: 'Analyze 2 character moments (similar situation). Compare responses showing character development: "In Act 1, [character]... but in Act 5, [character]... This change reveals..."',
        platinumLevel: 'Write interpretation of character\'s psychological state across multiple scenes. Analyze how external events shape internal development. Support with evidence. Consider alternative interpretations.',
        teacherNotes: 'All levels examine same character. Bronze uses visual support. Silver adds inference step. Gold-platinum develop interpretive sophistication. Teach "mind reading" skill: what might character be thinking/feeling based on visible behavior?'
      },
      {
        id: 'task-003',
        taskTitle: 'Thematic Analysis - Pattern Recognition Across Text',
        bronzeLevel: 'Identify theme from multiple choice options (good vs. evil, honesty, friendship). Find 2 pictures/scenes from text showing this theme.',
        silverLevel: 'Name theme, identify 2 examples from text, explain how each example shows theme: "The theme of [theme] appears when... This shows the theme because..."',
        goldLevel: 'Analyze how theme develops across text. Write 5-6 sentences: "The theme of [theme] appears when... Later, [character] shows... This development suggests the author believes..."',
        platinumLevel: 'Write analytical paragraph exploring multiple related themes and how they interact. Use extensive evidence. Connect to author\'s purpose and historical/cultural context. Consider multiple interpretations.',
        teacherNotes: 'All levels work toward same thematic understanding. Bronze identifies theme explicitly with support. Silver-gold develop evidence collection and connection skills. Platinum shows interpretive independence.'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'Literary Context Background Packet',
        originalTask: 'Students independently understand historical, cultural, and biographical context from original sources and embedded references in literary analysis texts',
        adaptation: 'Pre-prepared 2-3 page context summary covering: (1) Historical events/period with key dates; (2) Social context/attitudes (with visual representation); (3) Author biography; (4) Connections to student experience. Include 5-10 contextual images.',
        rationale: 'Removes research burden. Ensures accurate, accessible background knowledge. Visual representations support understanding. Allows focus on text analysis rather than context acquisition.'
      },
      {
        id: 'resource-002',
        title: 'Literary Device Reference Posters & Digital Resource',
        originalTask: 'Independently identify and name literary devices in texts; understand effect and purpose',
        adaptation: 'Set of 12-15 large colorful posters, one per major device: name + definition + icon/symbol + 2-3 clear examples + common effects. Accessible digital version (PDF with search) for student reference during analysis work.',
        rationale: 'Visual reference prevents need to memorize terminology. Consistent representation across devices aids pattern recognition. Multiple exposures in different contexts support retention.'
      },
      {
        id: 'resource-003',
        title: 'Interpretation Process Thinking Frames',
        originalTask: 'Move from observation of text details to supported interpretation of meaning',
        adaptation: 'Visual 4-step thinking frame: (1) NOTICE: What specific words/actions do I observe? (2) INTERPRET: What might this mean? (3) REASON: Why does this interpretation make sense? (4) SUPPORT: What evidence backs this up? One frame per text section, completed collaboratively first, then independently.',
        rationale: 'Explicit process prevents overwhelm. Visual supports reduce cognitive load. Collaborative completion before independent use builds understanding. Supports explicit reasoning skill development.'
      }
    ]
  },
  // Resource 7: Higher Ability - Critical Analysis Extension
  {
    id: 'higher-critical-analysis-001',
    title: 'Higher Ability Critical Analysis & Literary Criticism',
    targetGroup: 'Higher Ability',
    subject: 'English Literature',
    keyStage: 'KS3-4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Literary Criticism & Theory Application',
        description: 'Introduce analytical frameworks from literary criticism to deepen textual analysis',
        implementation: 'Teach critical approaches: feminist criticism, Marxist critique, psychoanalytic reading, postcolonial theory. Show how each lens reveals different interpretations. Apply to text segments.',
        examples: [
          'Feminist reading of "Jane Eyre": analyze how gender roles are questioned; examine power dynamics in relationship',
          'Marxist reading of "Of Mice and Men": analyze how capitalism creates conditions of exploitation and dream displacement',
          'Psychoanalytic reading: examine unconscious motivations, symbols, dream sequences, repression',
          'Postcolonial reading: analyze representation of colonized peoples, resistance, identity construction'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Ambiguity & Textual Tension Exploration',
        description: 'Teach students to recognize and analyze deliberately ambiguous or contradictory textual moments',
        implementation: 'Identify moments of tension, contradiction, or deliberate ambiguity. Discuss multiple valid interpretations. Analyze why author might have created ambiguity. Practice holding multiple interpretations simultaneously.',
        examples: [
          'Unreliable narrators: analyze how perspective affects interpretation; question narrator reliability',
          'Character contradictions: analyze how characters have conflicting motivations, creating psychological depth',
          'Textual contradictions: trace different interpretations supported by different textual evidence',
          'Symbolic ambiguity: explore how symbols carry multiple meanings dependent on interpretation'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Meta-textual Analysis & Literary Awareness',
        description: 'Develop awareness of how texts comment on themselves, literature, or the reading process',
        implementation: 'Analyze how texts reference other texts (intertextuality). Examine narrative techniques and authorial choices as deliberate. Discuss how form and content work together.',
        examples: [
          'Intertextuality: trace how "Wide Sargasso Sea" rewrites "Jane Eyre"; analyze what this rewriting says about the original',
          'Narrative technique: how does unreliable narrator make us question interpretation? Why would author choose this?',
          'Postmodern techniques: analyze how breaking fourth wall, non-linear structure, or metafiction affects meaning',
          'Form and content: discuss how poetic form (sonnet, free verse) contributes to meaning; how structure shapes interpretation'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Evidence Synthesis & Argument Refinement',
        description: 'Teach sophisticated evidence use combining multiple sources to build compelling arguments',
        implementation: 'Move beyond single-piece evidence. Synthesize evidence from multiple scenes to show patterns. Use contextual evidence to inform textual interpretation. Build multi-layered arguments.',
        examples: [
          'Pattern analysis: "This theme appears across Acts 1, 3, and 5 when..." showing progression and development',
          'Integration of criticism: "Literary criticism suggests... The text demonstrates this through..."',
          'Contextual integration: "Understanding the historical context reveals why the author emphasizes..."',
          'Counter-evidence handling: "While one might argue... closer examination reveals..."'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Critical Lens Analysis - Feminist Reading of Character',
        bronzeLevel: 'Read 1-2 feminist criticism quotes about character. Identify one textual example supporting this criticism. Explain connection in 2-3 sentences.',
        silverLevel: 'Apply feminist lens to character analysis. Write 1 paragraph analyzing how gender expectations affect character\'s choices, including evidence and reference to social context.',
        goldLevel: 'Write 2-paragraph critical analysis applying feminist approach to character development. Analyze how gender norms constrain character; evaluate whether character resists or conforms. Support with multiple textual moments.',
        platinumLevel: 'Write multi-paragraph critical essay comparing feminist and another critical reading (Marxist, psychoanalytic) of same character. Synthesize criticisms; evaluate which offers deeper insight; use extensive textual support.',
        teacherNotes: 'Bronze introduces criticism explicitly. Silver applies one lens. Gold compares frameworks. Platinum shows sophisticated critical synthesis. Provide simplified criticism introduction before task.'
      },
      {
        id: 'task-002',
        taskTitle: 'Ambiguity & Interpretation - Unreliable Narrator Analysis',
        bronzeLevel: 'Read two opposite interpretations of character motivation. Identify textual evidence supporting each. Write which interpretation seems more valid and why.',
        silverLevel: 'Analyze moment of narrative ambiguity. Identify textual clues suggesting narrator might be unreliable. Write analysis explaining how uncertainty affects interpretation and reader trust.',
        goldLevel: 'Write analysis showing how unreliable narration creates multiple valid interpretations of key events. Use specific examples showing how perspective distorts truth. Evaluate effect of this technique on reader engagement.',
        platinumLevel: 'Write critical essay analyzing narrative unreliability across text. Examine patterns of deception/distortion. Synthesize effect on interpretation of character, theme, and authorial purpose. Consider implications for reading process itself.',
        teacherNotes: 'All levels use same textual moments. Bronze identifies perspectives. Silver-gold develop reliability analysis. Platinum considers philosophical implications of interpretation. Teach "reading between the lines".'
      },
      {
        id: 'task-003',
        taskTitle: 'Intertextual Analysis - Textual Connections & Influence',
        bronzeLevel: 'Identify 1-2 literary allusions in text. Explain what text is being referenced and how reference contributes to meaning.',
        silverLevel: 'Write paragraph analyzing intertextual reference. Explain original text/source, how author uses reference, and what meaning this adds to current text.',
        goldLevel: 'Analyze how author deliberately rewrites or subverts literary tradition. Write 2 paragraphs comparing treatment in this text vs. original. Evaluate significance of differences.',
        platinumLevel: 'Write critical analysis of intertextuality throughout text. Show how author engages with multiple literary traditions. Analyze what these connections suggest about author\'s literary values and the text\'s place in literary tradition.',
        teacherNotes: 'Bronze identifies references. Silver explains connection. Gold-platinum analyze significance of differences. Provide background on referenced texts to ensure access. Build gradually from direct allusions to subtle references.'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'Critical Approaches Introduction Guides',
        originalTask: 'Independently understand and apply complex literary critical theories to textual analysis',
        adaptation: 'For each major critical approach (feminist, Marxist, psychoanalytic, postcolonial, formalist), create 2-page guide: (1) Basic principles/key concepts; (2) Key questions to ask when applying approach; (3) Example application to familiar text; (4) Strengths and limitations of approach.',
        rationale: 'Scaffolds access to critical frameworks. Makes theories concrete through examples. Prevents misapplication. Encourages critical thinking about approaches themselves.'
      },
      {
        id: 'resource-002',
        title: 'Literary Ambiguity Annotation Guide',
        originalTask: 'Independently recognize moments of textual ambiguity and explore multiple valid interpretations',
        adaptation: 'Create annotation system for ambiguous moments: (1) Mark ambiguous passage; (2) Identify multiple possible interpretations; (3) For each interpretation, identify supporting textual clues; (4) Evaluate credibility of each interpretation. Provide worked example with text passage.',
        rationale: 'Explicit process prevents overwhelm. Supports systematic exploration of ambiguity. Models consideration of multiple perspectives. Supports tolerance for interpretive uncertainty.'
      },
      {
        id: 'resource-003',
        title: 'Critical Synthesis Framework',
        originalTask: 'Integrate multiple critical perspectives and textual evidence into coherent sophisticated argument',
        adaptation: 'Provide framework: (1) State argument/interpretation; (2) Present critical perspective 1 and how it supports argument with evidence; (3) Present critical perspective 2 and how it supports/complicates argument; (4) Synthesize perspectives showing how they deepen understanding; (5) Acknowledge counter-arguments and address them.',
        rationale: 'Supports sophisticated multi-layered thinking. Prevents contradictions. Models synthesis rather than listing perspectives. Builds argumentative sophistication.'
      }
    ]
  },

  // Resource 8: Higher Ability - Creative Writing Extension
  {
    id: 'higher-creative-writing-001',
    title: 'Higher Ability Creative Writing & Stylistic Sophistication',
    targetGroup: 'Higher Ability',
    subject: 'English Language & Creative Writing',
    keyStage: 'KS3-4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Stylistic Technique Experimentation',
        description: 'Teach students to deliberately experiment with literary techniques to achieve specific effects',
        implementation: 'Analyze published authors\' technique use. Discuss purpose and effect. Practice imitating techniques in own writing. Encourage experimentation and revision based on effect achieved.',
        examples: [
          'Study how Austen uses dialogue to reveal character. Practice similar technique with new character, then share and discuss effect',
          'Analyze how Morrison builds rhythm through repetition. Experiment with repetition for emotional emphasis in creative piece',
          'Examine how Woolf uses stream of consciousness. Practice interior monologue capturing character\'s thoughts realistically'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Voice Development & Perspective Experimentation',
        description: 'Help students develop distinctive narrative voice and explore different perspectives and viewpoints',
        implementation: 'Write same scene from multiple character perspectives. Develop consistent voice through word choice, syntax, concerns. Discuss how voice reveals character. Encourage voice risk-taking.',
        examples: [
          'Rewrite scene 3 times: from protagonist perspective, antagonist perspective, third character perspective. Analyze how each tells different story',
          'Develop voice through syntax: short declarative sentences for action; complex sentences for reflection; simple language for naive character',
          'Unreliable narrator: deliberately tell false version of events; use language choices to signal deception without breaking character'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Genre Blending & Format Experimentation',
        description: 'Encourage experimentation beyond traditional narrative through genre mixing and alternative formats',
        implementation: 'Try different formats: letter writing, diary entries, script, transcript, fragmented narrative, epistolary novel. Mix genres: sci-fi realism, gothic humor. Discuss how form affects meaning.',
        examples: [
          'Tell story through series of letters and responses showing relationship development',
          'Write multi-perspective narrative: 5 different viewpoints of same event',
          'Create found-text narrative: pieces of emails, texts, overheard conversations creating larger story',
          'Blend genres: horror-comedy, fantasy-realism, mystery-romance; discuss how mixing genres surprises/engages reader'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Revision for Stylistic Refinement',
        description: 'Teach advanced revision strategies focused on style, impact, and reader effect rather than surface errors',
        implementation: 'Teach revision beyond grammar. Focus on: word choice precision, sentence variety, pacing, rhythm, emotional impact, word economy. Read work aloud. Get peer feedback on effect. Revise for impact.',
        examples: [
          'Eliminate clichés; replace with specific, original language',
          'Vary sentence length and structure for effect: use short sentences for tension, long for contemplation',
          'Cut unnecessary words: "He walked slowly down the dark street" becomes "He crept down the darkness"',
          'Revise for sound: ensure dialogue sounds authentic; use phonetic choices for effect'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Stylistic Technique Imitation & Experimentation',
        bronzeLevel: 'Analyze one paragraph of author\'s writing. Identify 2-3 technique choices (sentence length, word choice, punctuation). Rewrite a new paragraph using same techniques.',
        silverLevel: 'Analyze published passage for technique. Write own passage (3-4 sentences) deliberately imitating one technique. Explain your choices and the effect achieved.',
        goldLevel: 'Analyze multiple stylistic choices in published passage. Rewrite passage (4-5 sentences) using contrasting stylistic choices (e.g., if original is ornate, rewrite simply). Discuss how style affects tone and meaning.',
        platinumLevel: 'Study author\'s characteristic style across multiple works. Write original piece (200-300 words) deliberately imitating their distinctive voice. Analyze your choices. Experiment with pushing stylistic techniques to extremes.',
        teacherNotes: 'All levels start with analysis of published work. Bronze imitates explicitly. Silver-gold show growing independence. Platinum demonstrates sophisticated stylistic control. Emphasize that imitation is learning tool, not plagiarism.'
      },
      {
        id: 'task-002',
        taskTitle: 'Perspective & Voice Development - Multi-POV Narrative',
        bronzeLevel: 'Given scene, write it from one character\'s perspective focusing on what that character notices, cares about, understands. 3-4 sentences.',
        silverLevel: 'Write same 1-2 paragraph scene from two different character perspectives, showing how perspective shapes narrative (different interpretations of same events).',
        goldLevel: 'Write 1-paragraph scene from three different perspectives (protagonist, antagonist, observer). Show how each perspective creates different story. Analyze what each perspective reveals/conceals.',
        platinumLevel: 'Write multi-perspective story (300-400 words) told through 3-4 viewpoints. Develop distinctive voice for each perspective. Show how perspectives create dramatic irony, revelation, or ambiguity.',
        teacherNotes: 'All start with familiar scene. Bronze develops observation from character perspective. Silver shows contrasts. Gold-platinum show sophisticated perspective management. Encourage voice distinctiveness.'
      },
      {
        id: 'task-003',
        taskTitle: 'Genre Blending & Format Experimentation - Epistolary/Mixed Form',
        bronzeLevel: 'Write 2-3 brief emails or text messages between characters revealing relationship or conflict. Include dialogue punctuation.',
        silverLevel: 'Tell story through 3-4 letters or email exchanges revealing character voice, relationship dynamics, and plot development. Maintain consistent character voice across pieces.',
        goldLevel: 'Create epistolary narrative (5-6 pieces, 200+ words total) blending multiple formats (letters, emails, journal entries) revealing complete story arc. Develop distinctive voice for each correspondent.',
        platinumLevel: 'Write experimental form piece (300-400 words) using non-traditional format (found text, script, fragmented narrative, multiple voices). Deliberate formal choice should enhance meaning. Include reflection on how form affects reader experience.',
        teacherNotes: 'All start with format novelty. Bronze uses format to capture dialogue/feeling. Silver develops epistolary narrative structure. Gold-platinum shows sophisticated format use for specific effects.'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'Stylistic Technique Analysis & Experimentation Workbook',
        originalTask: 'Independently identify literary techniques in published writing and deliberately apply them to own creative work',
        adaptation: 'Workbook with 10 techniques: (1) Published example paragraph with technique highlighted/explained; (2) Analysis of effect created; (3) Guided practice: rewrite provided paragraph using technique; (4) Space to write original using technique; (5) Reflection on effect achieved.',
        rationale: 'Scaffolds analysis to application. Provides models before independent use. Supports reflection on writer\'s choices. Builds technique toolkit.'
      },
      {
        id: 'resource-002',
        title: 'Voice Development & Character Consistency Guide',
        originalTask: 'Create distinctive narrative voice and maintain consistency across extended writing',
        adaptation: 'Character voice profile template: (1) Character background/personality; (2) What character values/cares about; (3) Education level/vocabulary range; (4) Speech patterns/syntax typical; (5) Concerns/preoccupations appearing in speech; (6) Page of example dialogue/narration. Completed before writing shows writing choices.',
        rationale: 'Explicit character development prevents inconsistency. Voice choices grounded in character. Helps student understand voice as characterization tool. Provides reference during writing.'
      },
      {
        id: 'resource-003',
        title: 'Revision for Impact Guide - Beyond Grammar',
        originalTask: 'Revise creative writing for stylistic sophistication, impact, and reader effect',
        adaptation: 'Checklist of advanced revision strategies: (1) Word choice precision (replace vague/clichéd language); (2) Sentence variety (vary length/structure); (3) Pacing (adjust sentence rhythm); (4) Word economy (cut unnecessary words); (5) Authenticity (dialogue sounds real); (6) Sound (phonetic effects). Include examples of before/after for each type.',
        rationale: 'Shifts revision focus from error-correction to style. Provides concrete revision strategies. Examples make abstract concepts concrete. Supports independent revision.'
      }
    ]
  },

  // Resource 9: Higher Ability - Independent Research & Project-Based Learning
  {
    id: 'higher-independent-research-001',
    title: 'Higher Ability Independent Research & Extended Project Work',
    targetGroup: 'Higher Ability',
    subject: 'English Literature & Language',
    keyStage: 'KS4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Independent Research Skills Development',
        description: 'Teach students to conduct systematic literary research using academic sources and critical evaluation',
        implementation: 'Teach source evaluation (credibility, bias, evidence basis). Guide use of academic databases. Develop note-taking systems. Teach citation practices. Support independent research question formulation.',
        examples: [
          'Teach CRAAP test for source evaluation: Currency, Relevance, Authority, Accuracy, Purpose',
          'Introduction to academic databases: JSTOR, Project MUSE, Google Scholar. Search strategies for finding peer-reviewed criticism',
          'Cornell note-taking system: organize notes by theme/idea with space for synthesis',
          'Citation practice: MLA/Chicago format for notes, bibliography, integrating sources into writing'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Project Design & Self-Direction',
        description: 'Support students in designing and managing independent projects with increasing autonomy',
        implementation: 'Teach project management: define scope, timeline, milestones. Develop planning documents. Build in checkpoints. Encourage self-reflection and adaptation. Support student-directed goal setting.',
        examples: [
          'Project proposal template: research question, rationale, scope, timeline, resources, intended outcomes',
          'Milestone check-ins: 25%, 50%, 75% completion checkpoints with progress documentation',
          'Self-assessment rubric allowing students to evaluate own work against criteria',
          'Flexibility: allow student modification of project scope/direction based on research discoveries'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Synthesis & Argument Development from Multiple Sources',
        description: 'Teach sophisticated integration of multiple sources into original argument',
        implementation: 'Move beyond summarizing sources to synthesizing them. Teach how to find common themes across sources. Show how to use sources to support own argument. Practice identifying contradictions and gaps in scholarship.',
        examples: [
          'Source matrix: organize sources by theme/argument, showing agreements, contradictions, gaps in scholarship',
          'Synthesis writing: write paragraph integrating three different critical perspectives on same question',
          'Identifying limitations: discuss what questions remain unanswered; propose new research directions',
          'Positioning own argument relative to existing scholarship: how does student work build on, challenge, or extend existing criticism?'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Extended Writing & Argumentation',
        description: 'Support development of extended academic writing (8,000+ words) with sophisticated structure and argument',
        implementation: 'Teach extended essay structure. Build in drafting/revision cycles. Focus on argument development across length. Support maintenance of focus and coherence. Teach how to deepen analysis across space.',
        examples: [
          'Extended essay structure: introduction establishing research question/significance, 4-5 substantial body sections each developing one aspect of argument, conclusion synthesizing insights',
          'Developing ideas across space: teach how to maintain essay while extending exploration (not repetition) of ideas',
          'Internal coherence: help students maintain consistent argument across 8,000+ words; identify digression vs. deepening',
          'Revision at scale: help students revise extended essay for flow, argument strength, supporting evidence adequacy'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Source Evaluation & Critical Synthesis Project',
        bronzeLevel: 'Find 3 sources on literary topic. Evaluate each using provided rubric. Write one paragraph synthesizing what sources say about topic.',
        silverLevel: 'Research topic using 5-6 sources (mix of critical sources and primary texts). Evaluate sources for credibility/bias. Write 2-page synthesis summarizing scholarly debate on topic.',
        goldLevel: 'Conduct research on significant literary question using 8+ academic sources. Evaluate sources; organize findings by theme; write 4-5 page synthesis identifying key scholarly perspectives, contradictions, and gaps.',
        platinumLevel: 'Design and conduct independent research project on complex literary question. Use 12+ sources; position own argument relative to scholarship; write 8-10 page extended essay with original contribution to scholarly conversation.',
        teacherNotes: 'All levels progress from source evaluation to synthesis to original argument. Bronze learns evaluation. Silver synthesizes. Gold identifies gaps. Platinum positions own work in scholarly conversation. Build source evaluation skills early.'
      },
      {
        id: 'task-002',
        taskTitle: 'Literary Topic Research & Extended Analysis - Self-Designed Project',
        bronzeLevel: 'Choose literary topic of interest. Write one-page proposal describing topic, why interested, and 3-5 questions will explore.',
        silverLevel: 'Design 3-5 page research project on literary topic. Write formal proposal: research question, significance, approach (how will investigate), timeline, resources needed.',
        goldLevel: 'Design and complete 8-10 page research project. Submit proposal with detailed research question, methodology, sources identified. Complete project analyzing topic from multiple perspectives with supported conclusions.',
        platinumLevel: 'Design, complete, and present original research project (15-20 pages or equivalent creative/multimedia format). Research question, extensive literature review, original analysis, synthesis of findings. Present to scholarly audience.',
        teacherNotes: 'All start with proposal requiring focus and planning. Bronze chooses topic. Silver plans project. Gold completes substantial project. Platinum makes original contribution. Build toward increasing independence and originality.'
      },
      {
        id: 'task-003',
        taskTitle: 'Extended Essay Development - Sustained Argument Across Length',
        bronzeLevel: 'Write short essay (3-4 pages) developing single argument about text with introduction, 2-3 body sections, conclusion.',
        silverLevel: 'Write extended essay (6-8 pages) with clear argument, 3-4 developed body sections each addressing different aspect of argument, integrated sources supporting claims.',
        goldLevel: 'Write formal extended essay (10-12 pages) with sophisticated argument structure, substantial research base (8+ sources), nuanced analysis across multiple dimensions, sophisticated conclusion synthesizing insights.',
        platinumLevel: 'Write extended academic essay (15-20 pages) on self-selected literary research question. Demonstrate original thinking, extensive scholarship engagement, nuanced argument development across full length, contributions to literary conversation.',
        teacherNotes: 'All build from short to extended essay. Bronze develops basic structure. Silver adds research base. Gold demonstrates scholarly engagement. Platinum shows original contribution. Build gradually from 3 pages to 20 pages.'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'Independent Research Project Planner & Timeline',
        originalTask: 'Design and manage independent research project with appropriate scope and realistic timeline',
        adaptation: 'Comprehensive project planning template: (1) Research question refinement worksheet; (2) Project scope definition (primary texts, critical sources, approach); (3) Timeline with milestones; (4) Resource list; (5) Success criteria rubric; (6) Checkpoint reflection prompts.',
        rationale: 'Externalizes planning reduces cognitive load. Timeline building supports self-management. Checkpoints provide accountability. Reflection builds metacognition.'
      },
      {
        id: 'resource-002',
        title: 'Source Evaluation & Synthesis Toolkit',
        originalTask: 'Evaluate credibility and bias of sources; synthesize multiple sources into coherent argument',
        adaptation: 'Toolkit includes: (1) CRAAP checklist for source evaluation; (2) Source matrix template organizing sources by theme/perspective; (3) Synthesis writing prompts showing how to integrate multiple sources; (4) Examples of weak/strong synthesis; (5) Citation practice worksheets.',
        rationale: 'Explicit evaluation criteria prevent uncritical source use. Matrix organization enables synthesis. Examples model appropriate integration. Citation practice ensures academic integrity.'
      },
      {
        id: 'resource-003',
        title: 'Extended Essay Structure & Development Guide',
        originalTask: 'Write sustained academic argument across 15+ pages maintaining coherence, developing depth, and building incrementally',
        adaptation: 'Comprehensive guide covering: (1) Extended essay structure and why each section matters; (2) Outlining techniques for 15+ pages showing how argument develops; (3) Section-building strategies ensuring each section advances argument; (4) Transition strategies maintaining coherence; (5) Self-assessment rubric for extended essay; (6) Common pitfalls and solutions.',
        rationale: 'Externalizes structure reduces cognitive load. Outlining before writing supports sustained argument. Transitions support readability. Rubric clarifies quality standards. Common pitfalls prevent predictable errors.'
      }
    ]
  },
  // Resource 10: Pupil Premium - Engagement & Aspiration
  {
    id: 'pupil-premium-engagement-001',
    title: 'Pupil Premium Engagement Strategies & Aspiration Development',
    targetGroup: 'Pupil Premium',
    subject: 'English Literature & Language',
    keyStage: 'KS3-4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Relevance & Authentic Engagement',
        description: 'Connect learning to student interests and real-world applications to increase motivation',
        implementation: 'Start lessons with student-centered questions about their experiences. Choose texts featuring characters like students or situations students recognize. Discuss real applications of literacy skills.',
        examples: [
          'Study poetry by poets from student communities; discuss themes relevant to their lives',
          'Choose contemporary YA texts addressing social issues students care about',
          'Link reading comprehension to real tasks: reading job ads, contracts, advice columns',
          'Create writing opportunities for real audiences: letters to local council about community issues, blog posts on topics of passion'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Growth Mindset & Relationship Building',
        description: 'Build confidence and belief in ability to succeed through positive relationships and explicit growth messaging',
        implementation: 'Emphasize that skills develop through effort. Celebrate effort and progress, not innate ability. Build strong adult-student relationships. Set high expectations while providing necessary support.',
        examples: [
          'Frame errors as learning opportunities: "You almost had it; next time try..."',
          'Celebrate specific improvements: "I notice your dialogue is more realistic than last time"',
          'Share growth language: "Your brain is getting stronger at analysis each time you practice"',
          'Build relationship: know student interests, remember what they\'ve shared, show genuine interest'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Social Capital Building & Belonging',
        description: 'Help students develop understanding of school\'s "hidden curriculum" and strong peer relationships in learning',
        implementation: 'Make expectations explicit (what essays look like, how to ask for help, etc.). Build collaborative learning structures. Celebrate diverse contributions. Create inclusive classroom culture.',
        examples: [
          'Teach explicitly: "In literature essays, you need to include direct quotes from the text; this is how scholars know you\'ve read it"',
          'Use think-pair-share frequently ensuring all students contribute',
          'Celebrate different types of thinking: analytical, creative, empathetic, practical',
          'Model vulnerability: teacher shares own learning process, mistakes, questions'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Aspiration Development & Future Focus',
        description: 'Help students see literacy skills as pathway to expanded opportunities and aspirations',
        implementation: 'Discuss careers using literacy (journalist, lawyer, teacher, screenwriter). Invite guest speakers from diverse backgrounds. Show progression: GCSE → A-Level → University/apprenticeship. Discuss possibilities.',
        examples: [
          'Invite former students or community members to discuss how they used literacy skills',
          'Discuss diverse career pathways: university, apprenticeships, vocational routes',
          'Analyze job advertisements showing literacy requirements',
          'Create vision board: where do students want to be in 5 years? What role does literacy play?'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Relevant Text Engagement & Personal Connection',
        bronzeLevel: 'Read short, engaging text featuring character or situation similar to student experience. Discuss: "How does this character feel? Have you felt similarly?" Illustrate emotional response.',
        silverLevel: 'Read contemporary text addressing theme relevant to student life (friendship, family, identity, ambition). Write: "The character... I can relate to this because... This makes me think about..."',
        goldLevel: 'Choose text on topic of personal interest (career, social issue, identity). Analyze how text addresses topic. Write response connecting character experiences to student aspirations or concerns.',
        platinumLevel: 'Select and analyze literature addressing question student cares about (How do people overcome obstacles? What makes relationships strong?). Draw parallels to own life. Discuss how literature provides insight into own questions.',
        teacherNotes: 'All levels start with relevance and engagement. Bronze uses emotional response. Silver makes text-to-self connections. Gold-platinum develop analytical thinking connected to aspiration. Choice and relevance are key motivators.'
      },
      {
        id: 'task-002',
        taskTitle: 'Growth Mindset Reflection & Effort Documentation',
        bronzeLevel: 'Complete short writing task. Reflect: "What did I do well? What was challenging? What could I improve?" Teacher highlights growth.',
        silverLevel: 'Create portfolio tracking improvements over term. Choose 2-3 pieces showing growth. Write reflection: "This piece shows growth in... because... I improved by..."',
        goldLevel: 'Document learning journey through term with multiple pieces and reflections. Analyze specific areas of development. Write explanation of effort invested and growth achieved.',
        platinumLevel: 'Create comprehensive learning narrative showing growth across multiple texts and writing genres. Analyze how deliberate practice and effort contributed to development. Set future learning goals.',
        teacherNotes: 'All levels build metacognitive awareness. Bronze celebrates effort. Silver documents growth. Gold-platinum analyze effort-outcome relationship. Regular feedback crucial for all levels.'
      },
      {
        id: 'task-003',
        taskTitle: 'Aspiration & Career Connection Task - Literacy in Real World',
        bronzeLevel: 'Choose interesting career (from provided list). Find one example of text/writing used in that career (job ad, letter, report). Share why literacy matters in that job.',
        silverLevel: 'Research two different careers. Analyze literacy requirements in each. Write: "In the career of... people need to... For example..." Discuss which career interests student and why.',
        goldLevel: 'Research career aligned with aspiration. Analyze texts used (emails, reports, presentation scripts, proposals). Write analysis connecting literacy skills learned in class to job requirements.',
        platinumLevel: 'Create career exploration project. Research 3-4 different pathways to career of interest (university, apprenticeship, vocational). Analyze literacy requirements. Develop personal literacy development plan toward career.',
        teacherNotes: 'All levels build career awareness. Bronze identifies roles. Silver compares roles. Gold-platinum develop career-focused learning plans. Guest speakers and field trips amplify learning.'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'High-Interest Diverse Text Collection',
        originalTask: 'Students encounter literature through prescribed curriculum selections, some of which may lack relevance to student experiences and aspirations',
        adaptation: 'Create text collection organized by theme and student interest: (1) Identity & belonging; (2) Overcoming obstacles; (3) Relationships & family; (4) Social justice; (5) Ambition & futures; (6) Humor & entertainment. Include diverse authors, protagonists, and contexts.',
        rationale: 'Student choice and relevance increase engagement. Diverse representation validates student experiences. Interest-driven reading builds intrinsic motivation. Thematic organization supports exploration.'
      },
      {
        id: 'resource-002',
        title: 'Growth Mindset Learning Journal & Reflection Prompts',
        originalTask: 'Students independently engage in metacognitive reflection about learning and develop growth mindset',
        adaptation: 'Structured reflection journal with prompts: (1) What did I try today?; (2) What was challenging?; (3) What did I learn?; (4) How did I help a peer?; (5) What will I try next?; (6) Evidence of growth I notice. Teacher provides written feedback on effort and improvement.',
        rationale: 'Structured prompts guide reflection. Regular documentation supports pattern recognition. Teacher feedback reinforces growth mindset. Journal becomes record of development over time.'
      },
      {
        id: 'resource-003',
        title: 'Career & Futures Exploration Toolkit',
        originalTask: 'Students develop awareness of diverse career pathways and understand literacy as relevant to future opportunities',
        adaptation: 'Toolkit includes: (1) Career interest inventory helping students identify fields; (2) Career profile cards (5-6 diverse careers) showing literacy requirements, educational pathway, day-to-day tasks; (3) Text examples from different careers; (4) Aspiration-setting worksheet; (5) Links to apprenticeship/university websites.',
        rationale: 'Makes career options concrete. Shows literacy relevance. Addresses barriers (assumptions about "only university" route). Supports aspiration development. Provides actionable resources.'
      }
    ]
  },

  // Resource 11: Mixed Ability - Collaborative Structures
  {
    id: 'mixed-ability-collaborative-001',
    title: 'Mixed Ability Collaborative Learning Structures & Peer Support',
    targetGroup: 'Mixed Ability',
    subject: 'English Literature & Language',
    keyStage: 'KS3-4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Structured Collaborative Tasks & Roles',
        description: 'Use assigned roles to ensure all students contribute meaningfully in mixed-ability groups',
        implementation: 'Assign specific roles: facilitator (keeps discussion moving), recorder (documents ideas), timekeeper (monitors progress), presenter (shares with class). Rotate roles. Train students for each role.',
        examples: [
          'Role cards with responsibilities: "Facilitator: ask everyone \'What do you think?\' Make sure everyone speaks"',
          'Character analysis task with roles: One reads dialogue aloud, one identifies techniques, one records findings, one presents',
          'Literature circle with roles: Discussion director asks questions, Literary Luminary shares powerful passages, Vocabulary Enricher explores interesting words, Connector links to other texts/experiences'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Think-Pair-Share Scaffolding',
        description: 'Use structured turn-and-talk format ensuring all students process thinking before sharing',
        implementation: 'Think (individuals process question), Pair (students discuss with partner), Share (volunteers share with class). Gradual release: think → turn and talk → small group → whole class.',
        examples: [
          '"What do you think about the character\'s decision?" Think 30 seconds, turn and talk 1 minute, then share with class',
          'Layered think-pair-share: Think → turn and talk → new group of 4 → whole class, each time building on previous thinking',
          'Use graphic organizer during think time to support processing for lower-ability students'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Differentiated Contribution Paths',
        description: 'Design collaborative tasks allowing different contribution levels while working toward same goal',
        implementation: 'Same task with different entry points: some students analyze simpler text, others complex text; some answer literal questions, others inferential; all contribute findings to group synthesis.',
        examples: [
          'Character analysis task: Group receives character scenes at different complexity levels. Each student analyzes own version; group compares findings.',
          'Essay peer review: Some students check for thesis clarity and organization, others check evidence quality, others check language choices. All reviews feed into revision.',
          'Poetry analysis: Some students find rhyme scheme, others find metaphors, others analyze rhythm. Combined analysis richer than any individual could create.'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Accountability & Interdependence Building',
        description: 'Ensure group success depends on all members contributing, building mutual support',
        implementation: 'Use structures where group product depends on all contributions: jigsaw (each student teaches part to group), sequential writing (each person writes one section), gallery walk (all create something displayed).',
        examples: [
          'Jigsaw: Students become "experts" on different characters. Re-group to teach peers. Full text understanding requires all contributions.',
          'Sequential character creation: Person 1 names character, Person 2 describes appearance, Person 3 explains motivation, Person 4 predicts future. Product requires all four.',
          'Text analysis gallery walk: Groups rotate analyzing different passages, building complete understanding through collaborative circuit.'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Structured Group Discussion & Analysis - Literature Circle',
        bronzeLevel: 'Small group discusses simple text with teacher-provided discussion questions (5-6 literal comprehension questions). Each student answers one question aloud. Teacher facilitates.',
        silverLevel: 'Literature circle with assigned roles: Discussion Director (asks own questions), Literary Luminary (shares important passages), Vocabulary Enricher (discusses difficult words), Connector (links to life). 20-minute discussion, each role contributes.',
        goldLevel: 'Student-led literature circle with roles. Students prepare in advance, generate own discussion questions, facilitate discussion without teacher. Group product: written analysis synthesizing discussion.',
        platinumLevel: 'Self-organized discussion group. Students set parameters (meeting schedule, text selection), facilitate discussion, conduct peer review of contributions, synthesize findings into formal analysis. Teacher as consultant only.',
        teacherNotes: 'Bronze uses structured questions and teacher facilitation. Silver assigns roles providing structure. Gold-platinum increase student autonomy. Role cards essential for silver-gold levels. Rotate roles across texts.'
      },
      {
        id: 'task-002',
        taskTitle: 'Differentiated Text Analysis in Mixed Groups - Jigsaw Structure',
        bronzeLevel: 'All read same simple text excerpt (2-3 sentences). "Expert groups" analyze: Group A notices character actions, Group B notices character emotions, Group C notices author\'s word choices. Regroup to teach peers.',
        silverLevel: 'Jigsaw: Three different text excerpts of varying complexity. Each student becomes "expert" on one excerpt (including analysis and inference). Regroup to teach peers complete picture of overall text.',
        goldLevel: 'Complex jigsaw: Different characters\' perspectives, different literary techniques, different interpretive possibilities. Each expert analyzes assigned segment; regroup to synthesize multiple perspectives into complex understanding.',
        platinumLevel: 'Meta-jigsaw: Students select their own text segments from full novel based on interest/learning goal. Become experts on that segment. Teach peers. Synthesize individual expertise into full-class understanding.',
        teacherNotes: 'All use jigsaw structure supporting mixed-ability collaboration. Bronze uses identical simple texts for expert groups. Silver-gold use progressively more complex differentiated texts. Platinum allows student selection. Clear expert group teaching essential.'
      },
      {
        id: 'task-003',
        taskTitle: 'Collaborative Writing & Peer Review - Sequential Writing Process',
        bronzeLevel: 'Four students each write one sentence describing character (with visual character card). Sentences combined into paragraph. Group edits combined work together.',
        silverLevel: 'Four students in group; each writes one paragraph of analysis (same text, different aspects: appearance, personality, motivation, role). Combine into full character analysis. Peer review: does each paragraph explain clearly? Does analysis make sense?',
        goldLevel: 'Sequential essay writing: Four students each plan and write different body paragraph of essay analyzing text. One student writes introduction and conclusion. Group reviews full essay for coherence and argument flow.',
        platinumLevel: 'Collaborative analysis project: Students assigned different roles (researcher, analyst, reviewer, editor). Each conducts part of research/analysis. Synthesize into final product with each person\'s contribution essential to completion.',
        teacherNotes: 'All use sequential structure ensuring interdependence. Bronze writes simple sentences. Silver-gold write paragraph-length contributions. Combine and edit process essential. Clear assessment shows individual contributions.'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'Collaborative Learning Role Cards & Responsibility Guides',
        originalTask: 'Students engage in group work with clear understanding of expectations and ability to contribute meaningfully regardless of ability level',
        adaptation: 'Set of role cards with clear, simple responsibilities: (1) Facilitator: ask everyone opinion, keep time, ensure respect; (2) Recorder: write ideas, organize notes; (3) Presenter: explain group\'s thinking; (4) Quality checker: review work for completeness. Include visual icons. Create role rotation schedule.',
        rationale: 'Clear role definition ensures all contribute. Visual support aids understanding. Rotation prevents role hierarchy. Prevents dominant student dominating or quieter student being silent.'
      },
      {
        id: 'resource-002',
        title: 'Think-Pair-Share Graphic Organizer Template',
        originalTask: 'Support student thinking before collaborative discussion, ensuring all students have processed thinking before sharing',
        adaptation: 'One-page graphic organizer with three sections: (1) THINK (30 seconds): complete response independently, 1-2 sentences; (2) PAIR (1-2 minutes): add ideas from partner, 2-3 sentences; (3) SHARE: whole class discussion. Use for different discussion prompts across unit.',
        rationale: 'Provides thinking time reducing anxiety. Pair discussion allows processing before public sharing. Written response ensures no one opt-out. Graphic organizer supports focus for students with executive function challenges.'
      },
      {
        id: 'resource-003',
        title: 'Jigsaw Task Planning & Implementation Guide',
        originalTask: 'Organize mixed-ability group work ensuring all students succeed, groups depend on all contributions, understanding is deeper through collaboration',
        adaptation: 'Comprehensive jigsaw guide: (1) How to select expert group texts (varying complexity); (2) Expert group instruction plan; (3) Home group regroup instructions; (4) Synthesis task ensuring all contributions valued; (5) Assessment rubric showing how group product reflects all perspectives.',
        rationale: 'Reduces planning cognitive load. Ensures texts are appropriately differentiated. Home group synthesis ensures all contributions valued. Rubric shows collaborative value. Implementation guide supports first-time use.'
      }
    ]
  },

  // Resource 12: Mixed Ability - Peer Teaching & Assessment
  {
    id: 'mixed-ability-peer-teaching-001',
    title: 'Mixed Ability Peer Teaching & Formative Assessment Structures',
    targetGroup: 'Mixed Ability',
    subject: 'English Literature & Language',
    keyStage: 'KS3-4',
    strategies: [
      {
        id: 'strategy-001',
        title: 'Reciprocal Teaching & Peer Explanation',
        description: 'Use peer teaching to deepen understanding while providing flexible support for all learners',
        implementation: 'Teach students to explain ideas to peers clearly. Use sentence starters: "I think... because...", "An example is...", "Another way to think about it is...". Rotate teacher role through class.',
        examples: [
          'After mini-lesson on literary technique, students teach neighbors using own words, examples, or metaphors that make sense to them',
          'Peer-led literature circle: student with strong understanding asks discussion questions and facilitates',
          'Student as teaching assistant: higher-ability student works with small group on comprehension task, provides explanation'
        ]
      },
      {
        id: 'strategy-002',
        title: 'Peer Feedback Using Rubrics & Success Criteria',
        description: 'Teach students to provide constructive feedback using clear criteria, building assessment literacy',
        implementation: 'Co-create rubrics with students showing what quality looks like. Use sentence frames for feedback: "I liked...", "I noticed...", "I think you could improve... by...". Practice peer review in low-stakes contexts.',
        examples: [
          'Sentence-level feedback: peers read sentence aloud; discuss if meaning is clear; suggest improvement',
          'Paragraph feedback using rubric: does paragraph have topic sentence? Evidence? Explanation? Suggestion for improvement?',
          'Peer editing checklist: capitals and periods, clarity, support for ideas, interest to reader'
        ]
      },
      {
        id: 'strategy-003',
        title: 'Formative Assessment for Responsive Teaching',
        description: 'Use frequent low-stakes assessment to understand student thinking and adapt instruction',
        implementation: 'Use quick checks: exit tickets, think-pair-share responses, thumb check (how confident?), response cards. Analyze patterns. Group/regroup based on understanding. Adjust instruction.',
        examples: [
          'Exit ticket: "Explain the character\'s motivation in one sentence" → Analyze to see who understands vs. misunderstands',
          'Thumbs: high/middle/low confidence self-assessment → Group by confidence for instruction',
          'Reading conference: ask student about text understanding; listen for comprehension level; provide differentiated follow-up support'
        ]
      },
      {
        id: 'strategy-004',
        title: 'Mastery-Based Progression & Flexible Grouping',
        description: 'Use flexible grouping based on demonstrated understanding rather than fixed ability, allowing progress at own pace',
        implementation: 'Use frequent formative assessment to determine grouping. Create learning pathways: foundational understanding track, grade-level track, advanced track. Allow movement between tracks as understanding develops.',
        examples: [
          'Student masters foundational comprehension skill → moves to inference/analysis skill at own pace',
          'Flexible grouping: Monday\'s groups based on Friday\'s assessment, not fixed ability groups',
          'Multiple pathways to learning goal: some students review foundational skills while others move to advanced analysis; both groups moving toward same ultimate goal'
        ]
      }
    ],
    scaffoldedTasks: [
      {
        id: 'task-001',
        taskTitle: 'Peer Teaching & Explanation - Character Analysis Explanation',
        bronzeLevel: 'After learning about character, student explains to partner: "This character is... because... For example..." Teacher provides sentence frame and prompting.',
        silverLevel: 'Student explains character motivation to peer without frame: character name, what character wants, why character wants this, evidence from text. Peer asks one clarifying question.',
        goldLevel: 'Student teaches peer about character development: how character changes, why change occurs, significance of change. Peer provides feedback using rubric and asks probing question.',
        platinumLevel: 'Student leads small group discussion analyzing character in depth: facilitates discussion, asks follow-up questions based on responses, synthesizes group thinking, teaches peers novel perspective on character.',
        teacherNotes: 'All involve peer explanation deepening own understanding. Bronze heavily scaffolded. Silver-gold reduce scaffolding. Platinum shows teaching sophistication. Model explanation before expecting students to teach.'
      },
      {
        id: 'task-002',
        taskTitle: 'Peer Feedback & Revision Using Rubrics',
        bronzeLevel: 'Peer reviews short paragraph using checklist: Does it have a topic sentence? Does it explain idea? Is it easy to understand? Provides one kind word and one suggestion.',
        silverLevel: 'Peer feedback on paragraph using rubric criteria (topic sentence clarity, evidence quality, explanation sufficiency). Feedback: "This is strong because... You could improve... by..."',
        goldLevel: 'Peer feedback on full essay using detailed rubric (thesis clarity, argument development, evidence integration, conclusion effectiveness). Written feedback addressing each criterion.',
        platinumLevel: 'Comprehensive peer review and editing: checks organization, argument strength, evidence quality, language choices, mechanics. Provides written feedback with specific suggestions for improvement. Author uses feedback for revision.',
        teacherNotes: 'All progress from checklist to rubric to detailed feedback. Bronze uses provided feedback words. Silver-gold develop own feedback language. Model peer feedback process explicitly before expecting quality peer response.'
      },
      {
        id: 'task-003',
        taskTitle: 'Formative Assessment & Responsive Regrouping - Ongoing Progress Monitoring',
        bronzeLevel: 'Complete exit ticket: one question about lesson topic. Teacher analyzes responses, notes who understands, who needs review. Groups for tomorrow\'s lessons accordingly.',
        silverLevel: 'Weekly check-ins: short quiz or comprehension task showing understanding level. Self-assessment (what I understand, what I need help with). Groups adjust based on results.',
        goldLevel: 'Ongoing portfolio of work showing progress toward learning goals. Regular student-teacher conferences: student shares evidence of learning, identifies next learning goal, receives guidance.',
        platinumLevel: 'Student-directed learning pathways: multiple ways to reach learning goals, student choice about pathway, self-assessment driving progression to next challenge level, teacher supports self-directed progress.',
        teacherNotes: 'All use formative assessment for responsive teaching. Bronze uses simple exit tickets. Silver-gold use regular checkpoints. Platinum involves student agency. Frequent assessment is key, not grades/summative judgments.'
      }
    ],
    adaptedResources: [
      {
        id: 'resource-001',
        title: 'Peer Teaching & Explanation Sentence Frames & Models',
        originalTask: 'Students provide peer explanation without teacher modeling, potentially leading to unclear or inaccurate explanation',
        adaptation: 'Provide sentence frames for different explanation types: (1) Concept explanation: "The [concept] means... For example..."; (2) Character explanation: "[Character] is [trait] because..."; (3) Technique explanation: "The author uses [technique] to...". Include modeled examples and response samples.',
        rationale: 'Frames provide structure reducing cognitive load. Modeled examples show expected quality. Response samples show range of acceptable responses. Supports confident peer teaching.'
      },
      {
        id: 'resource-002',
        title: 'Peer Feedback Rubric & Sentence Frames',
        originalTask: 'Students provide meaningful peer feedback developing assessment literacy and revision skills',
        adaptation: 'Simplified rubric (4-5 criteria, clear descriptors). Feedback sentence frames: "I noticed... ", "I think your strongest part is... because...", "You could improve... by...". Modeled peer feedback example. Practice feedback on low-stakes writing.',
        rationale: 'Simplified rubric prevents overwhelm. Sentence frames structure feedback. Modeled examples show quality feedback. Practice develops feedback skill. Positive feedback first builds confidence.'
      },
      {
        id: 'resource-003',
        title: 'Formative Assessment Quick Check Tools & Response Sheets',
        originalTask: 'Teacher gathers frequent formative assessment data for responsive instruction without adding teacher workload',
        adaptation: 'Set of quick check formats: (1) Exit tickets (one-question response on sticky note or index card); (2) Thumb check (confidence self-assessment); (3) Response cards (pre-made cards, students select to indicate understanding); (4) Verbal checks (predetermined clarifying questions to ask during independent work). Include response tracker for quick analysis.',
        rationale: 'Quick format prevents time burden. Multiple formats suit different responses. Response tracker enables pattern identification. Enables rapid regrouping decisions. Focuses on understanding, not grades.'
      }
    ]
  }
];
