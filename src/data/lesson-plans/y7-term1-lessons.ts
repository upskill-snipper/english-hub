import type { LessonPlan } from '@/types'

export const y7Term1Lessons: LessonPlan[] = [
  // ── Lesson 1: Meeting the Characters ──────────────────────────────────────
  {
    id: 'y7t1-01-meeting-the-characters',
    title: 'Meeting the Characters - First Reading & Retrieval',
    text: 'Fox Girl & White Gazelle',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Read the opening of Fox Girl and White Gazelle with fluency and engagement (7R.1)',
      'Retrieve key information about the main characters from the text',
      'Begin to form initial impressions of characters using evidence from the text',
      'Practise answering retrieval questions using full sentences',
    ],
    successCriteria: [
      'I can identify the main characters and recall key details about them',
      'I can answer retrieval questions using evidence from the text',
      'I can write answers in full sentences that include references to the text',
      'I can share my first impressions of a character and explain why',
    ],
    keywords: [
      'retrieval',
      'character',
      'evidence',
      'first impression',
      'setting',
      'narrator',
      'protagonist',
      'detail',
    ],
    starterActivity: {
      title: 'Cover Prediction',
      duration: '8 minutes',
      instructions:
        'Display the front covers of Fox Girl and White Gazelle. Students work in pairs to discuss: What do the titles suggest? What might the stories be about? Who might the main characters be? Students write three predictions on mini-whiteboards. Teacher takes brief feedback and records key predictions on the board to revisit later in the unit.',
      differentiation: {
        support:
          'Provide sentence starters: "I think the story might be about... because..." and "The title suggests...".',
        core: 'Students generate three distinct predictions and justify each one.',
        stretch:
          'Students consider what the animal imagery (fox, gazelle) might symbolise about the characters and explain their reasoning.',
      },
      resources: ['Book covers displayed on board', 'Mini-whiteboards and pens'],
    },
    mainActivities: [
      {
        title: 'Shared Reading of the Opening',
        duration: '20 minutes',
        instructions:
          'Teacher reads the opening chapter/extract aloud while students follow in their copies. Pause at key moments to check understanding with targeted questions: "Who is speaking here?", "Where are we?", "What has just happened?" After reading, students work individually to complete a Character Profile sheet, recording: character name, age, key facts, where they live, and one interesting detail. Teacher circulates to check accuracy.',
        differentiation: {
          support:
            'Provide a partially completed Character Profile sheet with some details already filled in. Students find and add the remaining information.',
          core: 'Students complete the full Character Profile independently using evidence from the text.',
          stretch:
            'Students add a section to their profile predicting what challenges the character might face, using clues from the opening.',
        },
        resources: [
          'Class copies of Fox Girl / White Gazelle',
          'Character Profile worksheet',
          'Key vocabulary list for the extract',
        ],
      },
      {
        title: 'Retrieval Questions Practice',
        duration: '20 minutes',
        instructions:
          'Students answer a set of retrieval questions about the opening extract. Model the first question together on the board, emphasising the need to write in full sentences and include a reference to the text. Students work independently for 15 minutes. In the final 5 minutes, pairs swap books and peer-mark using the model answers displayed on the board. Teacher addresses any common misconceptions.',
        differentiation: {
          support:
            'Provide page and paragraph references next to each question so students know where to look. Include sentence starters: "In the text, it says...".',
          core: 'Students answer all retrieval questions independently using full sentences with text references.',
          stretch:
            'Students write two additional retrieval questions of their own and provide model answers, then challenge a partner to answer them.',
        },
        resources: ['Retrieval questions worksheet', 'Model answers slide for peer-marking'],
      },
    ],
    plenaryActivity: {
      title: 'First Impressions Exit Ticket',
      duration: '7 minutes',
      instructions:
        'Students complete an exit ticket answering: "What is your first impression of [character name]? Use one detail from the text to support your answer." Teacher collects exit tickets to assess understanding and plan targeted support for the next lesson.',
      differentiation: {
        support:
          'Provide the sentence frame: "My first impression of ___ is that they are ___ because in the text it says ___."',
        core: 'Students write a two-sentence response with a text reference.',
        stretch:
          'Students write a response that considers whether the author wants the reader to like or dislike the character, and why.',
      },
    },
    homework:
      'Read the next two pages of the text independently. Write down three facts you learn about the main character and one question you would like to ask them.',
    worksheetQuestions: [
      {
        question: 'What is the name of the main character? Where do they live?',
        lines: 2,
        modelAnswer:
          'The main character is [name]. They live in [location]. This is shown in the opening paragraph where the narrator describes their home.',
        marks: 2,
      },
      {
        question: 'List three facts we learn about the main character from the opening.',
        lines: 4,
        modelAnswer:
          'We learn that the character is [age], that they [key detail 1], and that they [key detail 2]. These facts are stated directly in the text when the narrator introduces the character.',
        marks: 3,
      },
      {
        question:
          'What is the setting of the story? Find a detail from the text that tells us about the place.',
        lines: 3,
        modelAnswer:
          'The story is set in [place]. The text describes [specific detail from the text], which tells the reader about the environment the character lives in.',
        marks: 2,
      },
      {
        question: 'Who does the main character live with? How do you know this?',
        lines: 3,
        modelAnswer:
          'The main character lives with [family members]. We know this because the text states [relevant detail], making it clear who is part of their household.',
        marks: 2,
      },
      {
        question:
          'Write two sentences giving your first impression of the main character. Use evidence from the text to support your answer.',
        lines: 5,
        modelAnswer:
          'My first impression of [character] is that they seem [adjective], because the text shows them [specific action or description]. This suggests that they are [quality], which makes the reader feel [response] towards them.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'Choose either Fox Girl or White Gazelle to begin with depending on your class - Fox Girl has a UK setting that may feel more accessible initially, while White Gazelle opens with a more dramatic situation.',
      'Pre-teach any unfamiliar vocabulary before the shared reading to ensure all students can access the text.',
      'Use the exit tickets diagnostically to identify students who struggle to locate information in a text - these students will need additional scaffolding in Lesson 2.',
      'If reading time is limited, select a focused extract of approximately 3-4 pages rather than an entire chapter.',
    ],
    targetedSkills: [
      '7R.1 - Retrieval',
      'Character Analysis',
      'Reading for Information',
      'Full Sentence Responses',
      'Text Referencing',
    ],
  },

  // ── Lesson 2: Reading and Discussion - Key Quotes ─────────────────────────
  {
    id: 'y7t1-02-reading-discussion-key-quotes',
    title: 'Reading and Discussion - Key Quotes & "This Shows..."',
    text: 'Fox Girl & White Gazelle',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Identify key quotations that reveal character, setting, or theme (7R.2)',
      'Begin to comment on the effect of a writer\'s choices using "This shows..." (7R.5)',
      'Develop spoken responses through structured discussion',
      'Build confidence in selecting and discussing relevant evidence from a text',
    ],
    successCriteria: [
      'I can select a key quotation and explain why it is important',
      'I can use "This shows..." to begin my explanation of a quotation',
      'I can discuss my ideas about the text with a partner using evidence',
      'I can explain what a quotation reveals about a character or situation',
    ],
    keywords: [
      'quotation',
      'evidence',
      'effect',
      'reveals',
      'suggests',
      'implies',
      'discussion',
      'interpretation',
    ],
    starterActivity: {
      title: 'Quote or No Quote?',
      duration: '7 minutes',
      instructions:
        'Display five short quotations on the board - three are from the text studied in Lesson 1, and two are made up. Students decide which are genuine quotations from the text by holding up green (real) or red (fake) cards. Teacher discusses what makes a quotation recognisable and introduces the idea that some quotations are more important than others.',
      differentiation: {
        support: 'Provide students with the text open at the relevant pages so they can check.',
        core: 'Students identify real vs fake quotations from memory and justify their choices.',
        stretch:
          'Students rank the three genuine quotations from most to least important and explain their ranking.',
      },
      resources: ['Quote or No Quote slide', 'Green and red response cards'],
    },
    mainActivities: [
      {
        title: 'Guided Reading and Quote Hunting',
        duration: '20 minutes',
        instructions:
          'Continue reading the text together as a class, pausing at the end of each page. After reading, students work in pairs to identify two key quotations that tell us something important about the main character. For each quotation, they write it out and complete the sentence: "This shows that..." Teacher models the first example on the board, demonstrating how to move beyond retelling to explaining what the quotation reveals.',
        differentiation: {
          support:
            'Provide a selection of six pre-chosen quotations for students to choose from, with the prompt "This shows..." already started for each.',
          core: 'Students independently select their own quotations and write full "This shows..." explanations.',
          stretch:
            'Students select quotations and extend their explanations by considering why the author chose these specific words, using sentence starters like "The author may have chosen this word because...".',
        },
        resources: [
          'Class copies of the text',
          'Quote Hunting worksheet with "This shows..." boxes',
          'Model example displayed on board',
        ],
      },
      {
        title: 'Discussion Carousel',
        duration: '20 minutes',
        instructions:
          'Set up four discussion stations around the room, each with a different question about the text (e.g. "What kind of person is [character]?", "How does [character] feel about their situation?", "What challenges does [character] face?", "Would you want to be friends with [character]? Why?"). Groups of four rotate to each station, spending 4 minutes discussing and recording one key idea on the station poster. After the carousel, each group presents the best idea from the final station they visited.',
        differentiation: {
          support:
            'Provide discussion sentence starters at each station and assign a scribe role to help capture ideas.',
          core: 'Students discuss freely and record ideas using evidence from the text.',
          stretch:
            'Students challenge each other\'s ideas respectfully using "I agree/disagree because the text shows..." and record alternative interpretations.',
        },
        resources: [
          'Four discussion station posters with questions',
          'Marker pens for each group',
          'Timer displayed on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Best Quote, Best Explanation',
      duration: '8 minutes',
      instructions:
        'Each pair nominates their strongest quotation and "This shows..." explanation. Teacher selects three to display under the visualiser. Class votes on which explanation is most convincing and discusses what makes a strong explanation. Teacher summarises the key skill: moving from what the text says to what it means.',
      differentiation: {
        support: 'Students can read their explanation from their worksheet.',
        core: 'Students present their explanation to the class and answer one follow-up question.',
        stretch:
          'Students evaluate the winning explanation and suggest how it could be improved further.',
      },
    },
    homework:
      'Choose one quotation from the text that you think is the most important so far. Write it out and explain what it shows about the character in 3-4 sentences.',
    worksheetQuestions: [
      {
        question:
          'Choose a quotation from the text that tells us something about the main character. Write it out below.',
        lines: 2,
        modelAnswer:
          'A strong quotation would be one that reveals something about the character\'s personality, feelings, or situation. For example: "[relevant quotation from the text]".',
        marks: 1,
      },
      {
        question:
          'Explain what your chosen quotation shows about the character. Start your answer with "This shows...".',
        lines: 4,
        modelAnswer:
          'This shows that the character is [quality/feeling] because the word/phrase [specific word] suggests [meaning]. This gives the reader the impression that [wider idea about character].',
        marks: 3,
      },
      {
        question:
          'Find a quotation that tells us about the setting of the story. What does it reveal about where the character lives?',
        lines: 4,
        modelAnswer:
          'The quotation "[relevant quotation]" reveals that the setting is [description]. This shows that the character lives in a place that is [quality], which might affect them by [impact on character].',
        marks: 3,
      },
      {
        question:
          'Why do you think the author chose to begin the story in this way? What does the opening make the reader think or feel?',
        lines: 5,
        modelAnswer:
          'The author may have chosen to begin the story this way because it immediately introduces the reader to [character/situation]. This makes the reader feel [emotion] because [reason]. It also raises questions about [aspect], which makes us want to read on.',
        marks: 3,
      },
      {
        question:
          'If you could ask the main character one question at this point in the story, what would it be? Explain why you would ask this.',
        lines: 4,
        modelAnswer:
          'I would ask [character] "[question]" because at this point in the story we do not yet know [gap in knowledge]. This would help us understand [aspect of character or plot] better.',
        marks: 2,
      },
    ],
    teacherNotes: [
      'The "This shows..." sentence starter is a crucial scaffolding tool at this stage. Students should be encouraged to use it consistently before moving to more varied analytical phrasing in later lessons.',
      'During the Discussion Carousel, circulate and note which students offer evidence-based responses - this will inform groupings for the guided writing in Lesson 4.',
      'If time is tight, reduce the carousel to three stations at 5 minutes each rather than cutting the modelled example.',
      'Display a Word Wall of useful analytical verbs (suggests, reveals, implies, demonstrates, highlights) for students to draw on.',
    ],
    targetedSkills: [
      '7R.2 - Selecting Evidence',
      "7R.5 - Writer's Effect",
      'Discussion Skills',
      'Quotation Selection',
      'Explanation Writing',
    ],
  },

  // ── Lesson 3: Writing - What/How/Why Paragraph Structure ──────────────────
  {
    id: 'y7t1-03-what-how-why-paragraph',
    title: 'Writing: What/How/Why Paragraph Structure',
    text: 'Fox Girl & White Gazelle',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Understand the What/How/Why framework for analytical writing (7W.2)',
      'Identify the three components in a model paragraph',
      'Begin to apply the What/How/Why structure when writing about the text',
      'Use appropriate sentence starters for each component',
    ],
    successCriteria: [
      'I can explain what What/How/Why means in an analytical paragraph',
      'I can label each section in a model paragraph',
      'I can write a What/How/Why paragraph with teacher support',
      'I can use sentence starters accurately for each section',
    ],
    keywords: ['what', 'how', 'why', 'paragraph', 'analytical', 'structure', 'technique', 'effect'],
    starterActivity: {
      title: 'What, How, Why Sorting',
      duration: '8 minutes',
      instructions:
        'Display nine sentence strips on the board (three What sentences, three How sentences, three Why sentences) all mixed up. Students work in pairs to sort them into the correct categories. Teacher reveals the answers and introduces the What/How/Why framework: What does the writer do? How do they do it? Why do they do it - what is the effect on the reader?',
      differentiation: {
        support:
          'Provide the sentences on colour-coded cards with a key showing which colour matches which category.',
        core: 'Students sort all nine sentences independently and explain their reasoning.',
        stretch:
          'Students identify which sentences are strongest and weakest within each category and explain why.',
      },
      resources: ['Sentence strips slide or cut-out cards', 'What/How/Why sorting grid'],
    },
    mainActivities: [
      {
        title: 'Deconstructing the Model Paragraph',
        duration: '15 minutes',
        instructions:
          'Display a model What/How/Why paragraph about a character from Fox Girl or White Gazelle on the board. Teacher reads it aloud and then models annotating each section with a different colour: What (blue), How (green), Why (yellow). Students receive a printed copy and annotate it independently. Teacher then reveals the annotated version and discusses: What sentence starters were used? How long is each section? Which section is the longest and why? Establish that the Why section should be the most developed part.',
        differentiation: {
          support:
            'Provide the paragraph with the first section (What) already highlighted. Students identify and highlight How and Why.',
          core: 'Students annotate all three sections independently using three colours.',
          stretch:
            'Students evaluate the paragraph: Is the Why section detailed enough? They write an improved Why section.',
        },
        resources: [
          'Model paragraph handout',
          'Highlighters in three colours',
          'Annotated version reveal slide',
        ],
      },
      {
        title: 'Shared Write: Building a What/How/Why Paragraph Together',
        duration: '25 minutes',
        instructions:
          'Teacher provides a question about the text (e.g. "How does the writer show that [character] feels out of place?") and a relevant extract. Using a shared writing approach, teacher and students construct a What/How/Why paragraph together on the board. Teacher writes the What sentence, then asks students to suggest the How sentence (identifying a technique or word choice). Finally, students draft the Why sentence independently in their books before the teacher selects the strongest example to complete the class paragraph. Students then copy the completed paragraph and write a second paragraph independently on a different aspect of the extract.',
        differentiation: {
          support:
            'Provide a writing frame with sentence starters: What - "The writer presents [character] as...", How - "This is shown through the use of...", Why - "This makes the reader feel... because...".',
          core: 'Students use the sentence starters for their first paragraph but attempt the second without them.',
          stretch:
            'Students write their second paragraph without sentence starters and include an additional sentence in the Why section that links to the wider themes of the text.',
        },
        resources: [
          'Extract from the text',
          'What/How/Why writing frame',
          'Sentence starters reference sheet',
          'Question displayed on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Label My Paragraph',
      duration: '7 minutes',
      instructions:
        "Display a student's paragraph (anonymous or volunteer) under the visualiser. Class works together to identify and label the What, How, and Why sections. Discuss: Is anything missing? Is the Why section developed enough? Students write one improvement target in their books.",
      differentiation: {
        support: 'Students use a checklist to verify each section is present.',
        core: 'Students identify sections and suggest one improvement.',
        stretch: 'Students rewrite the weakest section to demonstrate how it could be improved.',
      },
    },
    homework:
      'Write a What/How/Why paragraph answering: "How does the writer show the character\'s emotions in this extract?" Use the writing frame if needed.',
    worksheetQuestions: [
      {
        question:
          'What does "What" mean in a What/How/Why paragraph? Write a definition in your own words.',
        lines: 2,
        modelAnswer:
          'The "What" is the point or claim you are making about the text. It tells the reader what the writer does, for example how they present a character or create a mood.',
        marks: 1,
      },
      {
        question:
          'What does "How" mean in a What/How/Why paragraph? Give an example of a "How" sentence.',
        lines: 3,
        modelAnswer:
          'The "How" explains the technique or method the writer uses to achieve their effect. For example: "This is shown through the use of the adjective \'isolated\', which describes the character\'s position."',
        marks: 2,
      },
      {
        question:
          'What does "Why" mean in a What/How/Why paragraph? Why is this section usually the longest?',
        lines: 3,
        modelAnswer:
          'The "Why" explains the effect on the reader - why the writer made this choice and what impact it has. It is the longest section because this is where the analysis happens; it is not enough to just identify a technique, you must explain what it does.',
        marks: 2,
      },
      {
        question:
          "Read the paragraph below and identify the What, How, and Why sections by labelling them.\n\n\"The writer presents the character as lonely. This is shown through the simile 'she sat like a stone in an empty room.' The word 'stone' suggests she is cold and unmoving, as if she has given up hope. The reader feels sympathy for her because she seems completely alone.\"",
        lines: 5,
        modelAnswer:
          'What: "The writer presents the character as lonely." How: "This is shown through the simile \'she sat like a stone in an empty room.\'" Why: "The word \'stone\' suggests she is cold and unmoving, as if she has given up hope. The reader feels sympathy for her because she seems completely alone."',
        marks: 3,
      },
      {
        question:
          'Write your own What/How/Why paragraph about a moment in the text where the character experiences a strong emotion.',
        lines: 8,
        modelAnswer:
          'The writer presents [character] as [emotion]. This is demonstrated through the [technique] "[quotation]." The word "[specific word]" suggests [meaning], which creates a sense of [effect]. This makes the reader feel [response] because [reason], linking to the wider theme of [theme].',
        marks: 5,
      },
    ],
    teacherNotes: [
      'What/How/Why is a simplified version of PEE/PEEL designed to be more accessible for Year 7. As students grow in confidence, transition them towards the more formal PEE/PEEL structure.',
      'The shared writing section is crucial - do not rush it. Students need to see the thinking process, not just the finished product.',
      'Display the What/How/Why framework on the working wall and refer to it consistently in every subsequent writing task.',
      'Avoid over-relying on sentence starters. Begin to phase them out for core and stretch students by Lesson 5.',
    ],
    targetedSkills: [
      '7W.2 - Paragraph Structure',
      'Analytical Writing',
      'What/How/Why Framework',
      'Sentence Starters',
      "Writer's Effect",
    ],
  },

  // ── Lesson 4: Guided Practice - Scaffolded PEE Paragraph ──────────────────
  {
    id: 'y7t1-04-guided-practice-pee',
    title: 'Guided Practice - Scaffolded PEE Paragraph',
    text: 'Fox Girl & White Gazelle',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Apply the PEE paragraph structure to analyse character in the text (7W.3)',
      'Select appropriate quotations to support a point about a character',
      "Write an explanation that explores the effect of a writer's word choice",
      'Develop confidence in paragraph writing through guided and scaffolded practice',
    ],
    successCriteria: [
      'I can write a clear Point sentence that answers the question',
      'I can select a relevant quotation as my Evidence',
      'I can Explain what my evidence suggests about the character',
      'I can write a complete PEE paragraph with teacher guidance',
    ],
    keywords: [
      'point',
      'evidence',
      'explain',
      'quotation',
      'word choice',
      'connotation',
      'suggests',
      'character',
    ],
    starterActivity: {
      title: 'Fix the Paragraph',
      duration: '8 minutes',
      instructions:
        'Display a deliberately weak PEE paragraph on the board (e.g. vague point, irrelevant quotation, shallow explanation). Students work in pairs to identify what is wrong with each section. Teacher takes feedback and annotates the paragraph with corrections, reinforcing what a strong Point, Evidence, and Explanation looks like.',
      differentiation: {
        support:
          'Provide a checklist of "what makes a good PEE paragraph" for students to use when evaluating.',
        core: 'Students identify the three problems independently and suggest corrections.',
        stretch:
          'Students rewrite the entire paragraph to make it exemplary, then compare their version with a partner.',
      },
      resources: ['Weak paragraph displayed on board', 'PEE checklist handout'],
    },
    mainActivities: [
      {
        title: 'Teacher-Led Guided Writing',
        duration: '20 minutes',
        instructions:
          'Teacher provides a focus question: "How does the writer present [character] as [quality]?" Using a relevant extract, teacher models selecting a quotation on the board, thinking aloud about why this quotation is better than alternatives. Teacher then writes the Point sentence and asks students to copy it. Next, teacher models embedding the Evidence, discussing how to weave the quotation into a sentence rather than just dropping it in. Finally, teacher writes the first line of the Explanation and students complete it independently. Teacher shares two or three student completions under the visualiser for class discussion.',
        differentiation: {
          support:
            'Provide a cloze version of the paragraph with gaps for key words. Students fill in the blanks as the teacher models.',
          core: 'Students copy the Point and Evidence, then write the full Explanation independently.',
          stretch:
            'Students write the entire paragraph independently alongside the teacher, comparing their version to the modelled one afterwards.',
        },
        resources: [
          'Text extract displayed on board',
          'Focus question on board',
          'Cloze paragraph sheet (support tier)',
        ],
      },
      {
        title: 'Guided Independent Practice',
        duration: '20 minutes',
        instructions:
          'Students write their own PEE paragraph in response to a second question about the text. Teacher provides a new extract and question. Students work independently but with access to a writing frame and a word bank of analytical vocabulary (suggests, implies, reveals, demonstrates, conveys). Teacher circulates, spending focused time with target students. After 15 minutes, students swap with a partner and use a green pen to highlight the Point, Evidence, and Explanation, checking each section is present and developed.',
        differentiation: {
          support:
            'Provide a writing frame with sentence starters for each section and a pre-selected list of three quotations to choose from.',
          core: 'Students select their own quotation and write a full PEE paragraph using the word bank.',
          stretch:
            'Students write a PEEL paragraph by adding a Link sentence, and attempt to use two pieces of evidence rather than one.',
        },
        resources: [
          'Second extract and question',
          'PEE writing frame (support)',
          'Analytical vocabulary word bank',
          'Green pens for peer assessment',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Paragraph Gallery Walk',
      duration: '7 minutes',
      instructions:
        'Students place their open books on their desks and walk around the room reading three other students\' paragraphs. They leave a positive comment on a sticky note for each one, starting with "I liked how you..." Teacher selects one strong paragraph to read aloud and highlights what makes it effective.',
      differentiation: {
        support: 'Provide sentence starters for the sticky note comments.',
        core: 'Students write specific praise focused on one PEE component.',
        stretch:
          'Students write one piece of praise and one constructive suggestion for improvement.',
      },
    },
    homework:
      'Write a PEE paragraph answering: "How does the writer show the relationship between [character] and [character]?" Bring your paragraph to the next lesson for feedback.',
    worksheetQuestions: [
      {
        question:
          'What makes a good Point sentence? Write a definition and then write a Point sentence about a character from the text.',
        lines: 4,
        modelAnswer:
          'A good Point sentence makes a clear claim that directly answers the question. It should be specific, not vague. For example: "The writer presents [character] as determined and resilient."',
        marks: 2,
      },
      {
        question:
          'Why is it important to choose a short, relevant quotation rather than copying a whole sentence? Explain your answer.',
        lines: 3,
        modelAnswer:
          "Short quotations are better because they allow you to focus your explanation on specific words. If you copy a whole sentence, your analysis becomes too general. A focused quotation lets you zoom in on the writer's word choices and their effects.",
        marks: 2,
      },
      {
        question:
          'Read the explanation below. Is it a strong or weak explanation? Justify your answer.\n\n"This shows that the character is sad."',
        lines: 4,
        modelAnswer:
          'This is a weak explanation because it is too short and too vague. It does not explain how or why the evidence creates this impression. A stronger version would explore the specific word choice and its connotations, and explain the effect on the reader.',
        marks: 2,
      },
      {
        question:
          'Improve the weak explanation above by rewriting it in full. Make sure you explore word choice and effect on the reader.',
        lines: 6,
        modelAnswer:
          'This suggests that the character is overwhelmed by sadness, as the word "[specific word]" connotes a deep, heavy emotion that the character cannot escape. This makes the reader feel sympathy for them because it implies that their suffering is constant and unavoidable.',
        marks: 4,
      },
      {
        question:
          'Write a complete PEE paragraph about a moment in the text where the character faces a difficult situation.',
        lines: 8,
        modelAnswer:
          'The writer presents [character] as [quality] when they face [situation]. This is shown through the [technique] "[quotation]." The word "[specific word]" suggests [meaning], creating a sense of [effect]. This makes the reader feel [emotion] because [reason], highlighting the character\'s [quality].',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson builds directly on the What/How/Why framework from Lesson 3, now formalising it as PEE. Explicitly make the connection for students: What = Point, How = Evidence, Why = Explain.',
      'The guided writing section is the core of this lesson. Resist the temptation to let students write independently too quickly - they need to see expert thinking modelled first.',
      'Use the peer assessment activity to identify students who are ready for greater independence in Lesson 5.',
      'Keep the word bank of analytical verbs visible throughout and add to it as the term progresses.',
    ],
    targetedSkills: [
      '7W.3 - Guided Writing',
      'PEE Paragraph Structure',
      'Quotation Selection',
      'Word-Level Analysis',
      'Peer Assessment',
    ],
  },

  // ── Lesson 5: Independent Analysis ────────────────────────────────────────
  {
    id: 'y7t1-05-independent-analysis',
    title: 'Independent Analysis - Write Your Own Paragraph',
    text: 'Fox Girl & White Gazelle',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Write an independent analytical paragraph about character without scaffolding (7R.4, 7W.4)',
      'Select evidence and explain its effect on the reader with increasing confidence',
      'Self-assess writing against clear success criteria',
      'Demonstrate progress from Lessons 3 and 4 in analytical writing',
    ],
    successCriteria: [
      'I can write a PEE paragraph independently without a writing frame',
      'I can select a quotation and explain what specific words suggest',
      'I can explain the effect on the reader clearly',
      'I can self-assess my paragraph and identify areas for improvement',
    ],
    keywords: [
      'independent',
      'analysis',
      'effect',
      'reader',
      'connotation',
      'impression',
      'word choice',
      'assessment',
    ],
    starterActivity: {
      title: 'Spot the Difference: Two Paragraphs',
      duration: '8 minutes',
      instructions:
        'Display two paragraphs side by side on the board - one is a weak response (vague point, long quotation, surface-level explanation) and one is a strong response (clear point, embedded quotation, detailed explanation exploring word choice). Students identify three differences between them and discuss which is more convincing and why. Teacher draws out the key features of a strong analytical paragraph.',
      differentiation: {
        support:
          'Provide a comparison table with categories (Point, Evidence, Explanation) for students to fill in for each paragraph.',
        core: 'Students identify three differences independently and explain which is stronger.',
        stretch:
          'Students rewrite the weak paragraph to bring it up to the standard of the strong one.',
      },
      resources: ['Two paragraphs comparison slide', 'Comparison table handout (support)'],
    },
    mainActivities: [
      {
        title: 'Planning Your Paragraph',
        duration: '10 minutes',
        instructions:
          'Teacher provides a question and extract: "How does the writer present [character]\'s feelings in this extract?" Students spend 10 minutes planning their paragraph using a simple planning grid (Point - what will I argue? Evidence - which quotation will I use? Explain - what does the word choice suggest?). Teacher models completing the planning grid for a different question before students begin, emphasising that planning prevents vague writing.',
        differentiation: {
          support:
            'Provide a pre-highlighted extract with three potential quotations circled. Students choose one and plan around it.',
          core: 'Students select their own quotation from the extract and complete the planning grid.',
          stretch:
            'Students plan two paragraphs exploring different aspects of the character in the extract.',
        },
        resources: [
          'Extract from the text',
          'Planning grid worksheet',
          'Model planning grid displayed on board',
        ],
      },
      {
        title: 'Independent Writing',
        duration: '25 minutes',
        instructions:
          'Students write their analytical paragraph independently under timed conditions. No writing frames are provided, but the analytical vocabulary word bank from Lesson 4 remains on display. Teacher circulates silently for the first 10 minutes, then begins offering brief, targeted feedback to individual students. In the final 5 minutes, students re-read their work and make at least one improvement using a purple pen.',
        differentiation: {
          support:
            'Allow access to the PEE writing frame from Lesson 4 but encourage students to attempt at least the Explain section without it. Provide a simplified word bank.',
          core: 'Students write independently using only the word bank for support.',
          stretch:
            'Students write a PEEL paragraph and include analysis of two different word choices from their quotation.',
        },
        resources: [
          'Lined paper or exercise books',
          'Analytical vocabulary word bank on display',
          'Purple pens for improvement',
          'Timer displayed on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment Against Success Criteria',
      duration: '7 minutes',
      instructions:
        'Students self-assess their paragraph using a success criteria checklist, ticking off each element: clear Point, relevant Evidence, developed Explanation, specific word analysis, effect on reader mentioned. Students give themselves a score out of 5 and write one target for next time. Teacher collects books for formative marking.',
      differentiation: {
        support: 'Provide a visual checklist with examples of what each criterion looks like.',
        core: 'Students complete the checklist and write a specific target.',
        stretch:
          'Students highlight the strongest sentence in their paragraph and explain in the margin why it is effective.',
      },
    },
    homework:
      'Read the next section of the text independently. Write down two quotations you find interesting and a brief note about what each one might suggest.',
    worksheetQuestions: [
      {
        question:
          'Without looking at your notes, write a definition of each part of a PEE paragraph: Point, Evidence, Explain.',
        lines: 5,
        modelAnswer:
          'Point: The main argument or claim you are making about the text, directly related to the question. Evidence: A relevant quotation from the text that supports your point. Explain: An analysis of the evidence, exploring what specific words suggest and the effect on the reader.',
        marks: 3,
      },
      {
        question:
          'Why is it important to analyse specific word choices in your explanation, rather than just saying what happens?',
        lines: 3,
        modelAnswer:
          'Analysing specific words shows a deeper understanding of the text. It demonstrates that you can see how the writer deliberately chooses language to create effects. Simply retelling what happens does not show analytical skill.',
        marks: 2,
      },
      {
        question:
          'Write a PEE paragraph answering: "How does the writer present the main character\'s situation at this point in the text?"',
        lines: 10,
        modelAnswer:
          'The writer presents [character]\'s situation as [quality]. This is shown when the text states "[relevant quotation]." The word "[specific word]" suggests [meaning], connoting [deeper implication]. This creates a sense of [effect] for the reader because it implies that the character is [interpretation]. The reader may feel [emotion] at this point because [reason].',
        marks: 6,
      },
      {
        question:
          'Re-read your paragraph. Identify your weakest section (Point, Evidence, or Explanation) and rewrite it below to improve it.',
        lines: 6,
        modelAnswer:
          'Students should identify a genuine weakness and offer an improved version. For example, if the Explanation was too brief, the improved version should include specific word analysis and effect on the reader.',
        marks: 3,
      },
      {
        question:
          'What is one target you will focus on to improve your analytical writing next time? Be specific.',
        lines: 3,
        modelAnswer:
          'A strong target is specific and actionable, such as: "I will focus on analysing individual word choices rather than just explaining the general meaning of my quotation" or "I will include the effect on the reader in every explanation."',
        marks: 1,
      },
    ],
    teacherNotes: [
      'This is a formative assessment point. Collect books and provide written feedback that is specific, actionable, and directly linked to the success criteria.',
      'Use the planning stage to identify students who are still struggling with quotation selection - these students may need additional small group intervention.',
      'The shift from guided to independent writing is significant for Year 7. Expect a range of quality and focus your feedback on progress from Lessons 3-4 rather than absolute quality.',
      'Consider creating a display of strong paragraphs (anonymised) to serve as models for future lessons.',
    ],
    targetedSkills: [
      '7R.4 - Independent Reading Response',
      '7W.4 - Independent Writing',
      'Self-Assessment',
      'PEE Paragraphs',
      'Word-Level Analysis',
    ],
  },

  // ── Lesson 6: Language Features ───────────────────────────────────────────
  {
    id: 'y7t1-06-language-features',
    title: 'Language Features - Adjectives, Dialogue & Imagery',
    text: 'Fox Girl & White Gazelle',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Identify key language features: adjectives, dialogue, and imagery in the text (7R.3)',
      'Understand how writers use these features to create effects',
      'Begin to use correct terminology when discussing language choices',
      'Analyse how language features contribute to characterisation and atmosphere',
    ],
    successCriteria: [
      'I can identify adjectives, dialogue, and imagery in an extract',
      'I can explain the effect of at least one language feature using the What/How/Why structure',
      'I can use the correct terminology (simile, metaphor, adjective, dialogue) in my responses',
      'I can explain how a language feature helps the reader understand a character or setting',
    ],
    keywords: [
      'adjective',
      'dialogue',
      'imagery',
      'simile',
      'metaphor',
      'personification',
      'effect',
      'technique',
    ],
    starterActivity: {
      title: 'Technique Matching Game',
      duration: '8 minutes',
      instructions:
        'Provide pairs with a set of cards: half contain technique names (adjective, simile, metaphor, personification, dialogue) and half contain definitions and examples. Students match them as quickly as possible. First pair to finish correctly wins. Teacher reviews answers on the board, paying particular attention to any techniques students confuse.',
      differentiation: {
        support:
          'Provide fewer cards (three techniques) and include an example within each definition card to make matching clearer.',
        core: 'Students match all five techniques with definitions and examples.',
        stretch:
          'Students match all cards, then write an original example of each technique related to the text.',
      },
      resources: ['Technique matching cards (one set per pair)', 'Answer key slide'],
    },
    mainActivities: [
      {
        title: 'Language Feature Hunt',
        duration: '20 minutes',
        instructions:
          'Provide students with a key extract from the text. Students work in pairs to highlight examples of adjectives (yellow), dialogue (green), and imagery (pink) in the extract. After 10 minutes of highlighting, teacher leads a class discussion about which examples are the most powerful and why. Students record three examples in a table with columns: Quotation, Technique, Effect. Teacher models completing the first row.',
        differentiation: {
          support:
            'Pre-annotate the extract with two examples already identified. Provide a definitions sheet for reference. Students find three additional examples.',
          core: 'Students identify at least five examples across the three categories and explain the effect of each.',
          stretch:
            'Students identify examples and rank them by impact, justifying which language feature is the most effective in the extract.',
        },
        resources: [
          'Key extract from the text',
          'Highlighters (three colours)',
          'Language Features table worksheet',
          'Technique definitions reference sheet',
        ],
      },
      {
        title: 'Writing About Language: Guided Paragraph',
        duration: '20 minutes',
        instructions:
          'Teacher models writing a What/How/Why paragraph focused on a language feature from the extract (e.g. "The writer uses the simile... to show that..."). Students then write their own paragraph about a different language feature from the same extract. Emphasise the need to name the technique correctly and explore the specific word choices within it. After 12 minutes of writing, pairs share and offer one piece of feedback using "I liked... because..." and "You could improve... by...".',
        differentiation: {
          support:
            'Provide a writing frame with the technique already identified: "The writer uses the [technique] \'[quotation].\' The word ___ suggests...".',
          core: 'Students select their own technique and quotation, then write a full paragraph.',
          stretch:
            'Students write about two different techniques and compare their effects, using connectives like "Similarly..." or "In contrast...".',
        },
        resources: [
          'Same extract as activity 1',
          'Writing frame (support tier)',
          'Analytical vocabulary display',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Technique Bingo',
      duration: '7 minutes',
      instructions:
        'Students draw a 2x2 grid and write four technique names in the boxes. Teacher reads out definitions or examples one at a time. If students have the matching technique, they cross it off. First student to complete a line or full house wins. Teacher uses the game to reinforce correct terminology and address any remaining misconceptions.',
      differentiation: {
        support: 'Provide the bingo grid pre-filled with technique names.',
        core: 'Students choose their own four techniques from the lesson to fill the grid.',
        stretch: 'Students create their own bingo clues for a partner to solve.',
      },
    },
    homework:
      'Find three examples of language features (adjectives, dialogue, or imagery) in the next section of the text. Write each one out and name the technique used.',
    worksheetQuestions: [
      {
        question:
          'Define the following terms and give an example of each: adjective, simile, metaphor.',
        lines: 6,
        modelAnswer:
          'An adjective is a word that describes a noun, e.g. "the dark corridor." A simile compares two things using "like" or "as," e.g. "her eyes shone like stars." A metaphor describes something as if it is something else, e.g. "the classroom was a zoo."',
        marks: 3,
      },
      {
        question:
          'Find a piece of dialogue in the extract. What does it reveal about the character who says it?',
        lines: 4,
        modelAnswer:
          'The dialogue "[quotation]" reveals that [character] is [quality]. The way they speak suggests [inference], and the words they choose show that they feel [emotion] about [situation].',
        marks: 3,
      },
      {
        question:
          "Find an example of imagery in the extract. What picture does it create in the reader's mind?",
        lines: 4,
        modelAnswer:
          'The imagery "[quotation]" creates a picture of [description]. This is effective because it helps the reader visualise [scene] and creates a feeling of [atmosphere].',
        marks: 3,
      },
      {
        question:
          'Choose one language feature from the extract and write a What/How/Why paragraph explaining its effect.',
        lines: 8,
        modelAnswer:
          'The writer creates a sense of [atmosphere/character quality] in this extract. This is shown through the [technique] "[quotation]." The word "[specific word]" suggests [meaning], which connotes [deeper implication]. This makes the reader feel [emotion] because [reason], helping to build [wider effect on the text].',
        marks: 5,
      },
      {
        question:
          'Which language feature in the extract do you think is the most powerful? Explain your choice.',
        lines: 5,
        modelAnswer:
          'I think the most powerful language feature is the [technique] "[quotation]" because it [reason]. This is more effective than other features in the extract because it [comparison], making the reader [response].',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This lesson introduces formal literary terminology. Ensure students understand the terms before asking them to write about techniques - misidentified techniques undermine otherwise good analysis.',
      'Focus on three techniques only (adjectives, dialogue, imagery) to avoid overwhelming Year 7 students. Additional techniques can be introduced in subsequent terms.',
      'The Language Feature Hunt works well as a competitive activity - award points for the most examples found and discussed.',
      'Create a "Technique Toolkit" display in the classroom that students can add to throughout the year.',
    ],
    targetedSkills: [
      '7R.3 - Language Analysis',
      'Technique Identification',
      'Literary Terminology',
      'What/How/Why Writing',
      'Effect on the Reader',
    ],
  },

  // ── Lesson 7: Theme - Identity & Belonging ────────────────────────────────
  {
    id: 'y7t1-07-theme-identity-belonging',
    title: 'Theme: Identity & Belonging',
    text: 'Fox Girl & White Gazelle',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Understand the concepts of identity and belonging as key themes in the text (7R.1)',
      'Identify moments in the text where characters explore or struggle with their identity (7R.4)',
      'Make connections between the text and wider ideas about belonging',
      'Write analytically about theme using evidence from the text',
    ],
    successCriteria: [
      'I can define identity and belonging and explain why they are important themes',
      'I can identify at least two moments in the text that relate to these themes',
      "I can explain how a character's actions or feelings connect to the theme of identity",
      'I can write a paragraph linking a quotation to the theme of identity or belonging',
    ],
    keywords: [
      'identity',
      'belonging',
      'theme',
      'culture',
      'community',
      'outsider',
      'connection',
      'displacement',
    ],
    starterActivity: {
      title: 'Identity Map',
      duration: '10 minutes',
      instructions:
        'Students create a personal identity map in the centre of a blank page, writing their name in the middle and branching out with things that make up their identity (family, hobbies, culture, language, where they live, etc.). After 5 minutes, students share with a partner and discuss: What parts of your identity are most important to you? What would change if you moved to a new country? Teacher then connects this to the characters in the text, explaining that both Fox Girl and White Gazelle explore what happens when identity is challenged.',
      differentiation: {
        support:
          'Provide a template with pre-labelled branches (family, language, hobbies, home, beliefs) for students to fill in.',
        core: 'Students create their own identity map with at least six branches and share with a partner.',
        stretch:
          'Students add a second layer to their map showing which parts of their identity might change if they moved to a new place, and reflect on how this would feel.',
      },
      resources: ['Blank A4 paper', 'Identity Map template (support)', 'Coloured pens'],
    },
    mainActivities: [
      {
        title: 'Theme Tracking in the Text',
        duration: '20 minutes',
        instructions:
          "Teacher introduces the concepts of identity and belonging with clear definitions on the board. Students then revisit key sections of the text in pairs, using sticky notes to mark moments where a character's identity is explored, challenged, or celebrated. For each moment, students write on the sticky note: the page number, a brief quotation, and a one-sentence explanation of how it connects to identity or belonging. Teacher leads a class discussion gathering the strongest examples.",
        differentiation: {
          support:
            'Direct students to three specific pages/passages and provide the prompt: "This connects to identity because...".',
          core: 'Students find at least three moments independently and explain their connection to the theme.',
          stretch:
            'Students find moments from both texts and compare how the theme is explored differently in each.',
        },
        resources: [
          'Class copies of the text',
          'Sticky notes (two per student)',
          'Theme definitions displayed on board',
        ],
      },
      {
        title: 'Analytical Writing on Theme',
        duration: '20 minutes',
        instructions:
          'Teacher models writing a paragraph linking a quotation to the theme: "The theme of identity is explored when... This is shown through the quotation... This suggests that the character feels... because..." Students then write their own paragraph about a different moment in the text that connects to identity or belonging. Encourage students to use the word "theme" in their writing and to link their explanation to the bigger idea rather than just the character.',
        differentiation: {
          support:
            'Provide a writing frame: "The theme of ___ is shown when [character] ___. The quotation \'___\' suggests that ___ because ___. This connects to the idea of identity because ___."',
          core: 'Students write a full paragraph linking a quotation to the theme independently.',
          stretch:
            'Students write two paragraphs: one about identity and one about belonging, then explain how the two themes connect in the text.',
        },
        resources: [
          'Writing frame (support tier)',
          'Model paragraph displayed on board',
          'Analytical vocabulary bank',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Theme Statement',
      duration: '5 minutes',
      instructions:
        'Students complete the sentence: "In [text], the author explores the theme of identity by showing that..." on a sticky note. Teacher collects and reads three aloud, discussing which statements are the most precise and insightful. This serves as an exit ticket to assess thematic understanding.',
      differentiation: {
        support:
          'Provide the sentence starter and a word bank (struggle, search, discover, challenge, belong).',
        core: 'Students complete the theme statement independently.',
        stretch:
          'Students write a theme statement that refers to both the character and the reader: "The author shows us that... which makes the reader consider...".',
      },
    },
    homework:
      'Write a paragraph explaining how the theme of belonging is explored in the text. Include at least one quotation and explain how it connects to the theme.',
    worksheetQuestions: [
      {
        question: 'What is a "theme" in a story? Write a definition in your own words.',
        lines: 2,
        modelAnswer:
          'A theme is a big idea or message that runs through a text. It is not the plot (what happens) but the deeper meaning the author wants the reader to think about, such as love, identity, or growing up.',
        marks: 1,
      },
      {
        question:
          'Define "identity" and "belonging" in your own words. How are these ideas different?',
        lines: 4,
        modelAnswer:
          'Identity is who you are - the things that make you unique, such as your culture, personality, family, and beliefs. Belonging is the feeling of being accepted and connected to a group, place, or community. They are different because you can have a strong identity but still not feel like you belong somewhere.',
        marks: 2,
      },
      {
        question:
          "Find a moment in the text where the character's identity is challenged or questioned. Write out a short quotation and explain how it connects to the theme.",
        lines: 6,
        modelAnswer:
          'The theme of identity is explored when [character] [situation]. The quotation "[quotation]" shows that the character feels [emotion] about [aspect of identity]. The word "[word]" suggests [meaning], implying that [character] is struggling with [aspect]. This connects to the wider theme of identity because it shows that who we are can be shaped by [experience/place/people].',
        marks: 4,
      },
      {
        question:
          "How might the character's experience of belonging or not belonging be similar to experiences people have in real life? Explain your answer with reference to the text.",
        lines: 5,
        modelAnswer:
          "The character's experience of [situation in text] is similar to real life because many people feel like outsiders when they [real-world situation]. In the text, [character] feels [emotion] because [reason], and this is relatable because [connection to wider experience]. The author may have chosen to explore this theme to help readers understand [message].",
        marks: 3,
      },
      {
        question:
          'Write a paragraph explaining how the author uses the character to explore the theme of identity. Use the What/How/Why structure.',
        lines: 8,
        modelAnswer:
          'The author explores the theme of identity through [character] by showing their struggle with [aspect]. This is demonstrated through the quotation "[quotation]," which uses the [technique] "[word]" to suggest [meaning]. This makes the reader think about [wider idea] because it highlights how [theme statement]. Overall, the author presents identity as something that is [complex/fluid/shaped by experience], encouraging the reader to reflect on their own sense of self.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The identity map starter is a personal activity - remind students they only share what they are comfortable with. Do not pressure students to disclose sensitive information.',
      'Both Fox Girl and White Gazelle explore themes of displacement and belonging in different cultural contexts. Be sensitive to students in your class who may have personal experience of migration or displacement.',
      'This lesson marks the first explicit focus on theme. Ensure students understand the difference between theme (big idea) and plot (what happens).',
      'The theme of identity will recur throughout the unit. Consider creating a running "Theme Tracker" display that students add to each lesson.',
    ],
    targetedSkills: [
      '7R.1 - Retrieval for Theme',
      '7R.4 - Thematic Response',
      'Thematic Analysis',
      'Personal Response',
      'Connecting Text to Wider Ideas',
    ],
  },

  // ── Lesson 8: Narrative Structure ─────────────────────────────────────────
  {
    id: 'y7t1-08-narrative-structure',
    title: 'Narrative Structure - Beginning, Middle & End',
    text: 'Fox Girl & White Gazelle',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      "Understand how narrative structure shapes a reader's experience (7R.3)",
      'Identify the key structural elements: exposition, rising action, climax, falling action, resolution',
      'Analyse how the writer uses structure to build tension, develop character, and convey theme',
      'Comment on the effect of structural choices made by the author',
    ],
    successCriteria: [
      'I can identify the beginning, middle, and end of the story and explain what happens in each',
      'I can use terms like exposition, climax, and resolution accurately',
      'I can explain why the author structured the story in this way',
      'I can write about how structure creates effects for the reader',
    ],
    keywords: [
      'structure',
      'exposition',
      'rising action',
      'climax',
      'falling action',
      'resolution',
      'tension',
      'narrative arc',
    ],
    starterActivity: {
      title: 'Story Mountain',
      duration: '8 minutes',
      instructions:
        'Display a story mountain diagram on the board with the labels: Exposition, Rising Action, Climax, Falling Action, Resolution. Teacher explains each stage using a well-known story (e.g. a fairy tale) as an example. Students then work in pairs to retell the plot of the text so far, deciding which stage they think the story is currently at. Pairs share with the class.',
      differentiation: {
        support:
          'Provide the story mountain diagram with definitions printed below each label. Students place events from the text onto the mountain using sticky notes.',
        core: 'Students retell the plot in five sentences, one for each structural stage covered so far.',
        stretch:
          'Students predict what the climax and resolution might be, using clues from the text so far to justify their predictions.',
      },
      resources: ['Story mountain diagram slide', 'Story mountain handout', 'Sticky notes'],
    },
    mainActivities: [
      {
        title: 'Mapping the Structure',
        duration: '20 minutes',
        instructions:
          'Provide students with a timeline worksheet divided into sections matching the structural stages. Working in pairs, students re-read or recall key events and place them on the timeline, including page references where possible. For each event, they add a brief note about how it affects the reader (e.g. "This creates tension because...", "This makes the reader sympathise with..."). Teacher circulates to check accuracy and challenge thinking. After 15 minutes, pairs join into groups of four to compare timelines and agree on the most important event at each stage.',
        differentiation: {
          support:
            'Provide a list of eight key events from the text on cards for students to sequence and place on the timeline.',
          core: "Students identify events independently and explain the reader's response at each stage.",
          stretch:
            'Students consider whether the text follows a traditional structure or deviates from it, and discuss what effect this has.',
        },
        resources: [
          'Structure timeline worksheet',
          'Event cards (support tier)',
          'Class copies of the text for reference',
        ],
      },
      {
        title: 'Writing About Structure',
        duration: '20 minutes',
        instructions:
          'Teacher models a paragraph about structure: "At the beginning of the text, the writer... This is effective because it makes the reader... The structure shifts at the point where... which creates a sense of..." Students then write their own paragraph about one structural choice the author makes and its effect on the reader. Emphasise that structural analysis is about where something happens in the text and why, not just what happens.',
        differentiation: {
          support:
            'Provide a writing frame: "At the [beginning/middle/end] of the text, the writer ___. This is effective because it makes the reader ___. This is important because ___."',
          core: 'Students write a paragraph about a structural choice using the model as a guide.',
          stretch:
            'Students compare the structural choices in Fox Girl and White Gazelle, writing about how the two texts open differently and the effect of each opening on the reader.',
        },
        resources: [
          'Model paragraph on board',
          'Writing frame (support tier)',
          'Structural terminology word bank',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Structure Quiz',
      duration: '7 minutes',
      instructions:
        'Teacher reads five quick-fire statements about narrative structure (e.g. "The climax is always at the end of the story - true or false?"). Students respond on mini-whiteboards. Teacher addresses misconceptions and reinforces key learning. Final question: "Why does structure matter to a reader?"',
      differentiation: {
        support: 'Students may refer to their story mountain handout.',
        core: 'Students answer from memory.',
        stretch: 'Students explain why each true/false answer is correct in full sentences.',
      },
    },
    homework:
      'Draw your own story mountain for the text, labelling each stage with a key event and a sentence about how the reader feels at that point.',
    worksheetQuestions: [
      {
        question:
          'What is "exposition" in a story? What information does the exposition usually give the reader?',
        lines: 3,
        modelAnswer:
          'Exposition is the opening of a story where the writer introduces the main characters, the setting, and the situation. It gives the reader the background information they need to understand the story.',
        marks: 2,
      },
      {
        question: 'What is a "climax"? Why is it usually the most important moment in a story?',
        lines: 3,
        modelAnswer:
          'The climax is the turning point or moment of highest tension in a story. It is usually the most important moment because it is where the main conflict reaches its peak and the outcome of the story begins to become clear.',
        marks: 2,
      },
      {
        question:
          'Describe what happens in the opening (exposition) of the text. Why do you think the author chose to begin the story this way?',
        lines: 5,
        modelAnswer:
          'In the opening, [description of events]. The author may have chosen to begin this way because it [effect, e.g. immediately creates sympathy/intrigue]. This is effective because it makes the reader [response], setting up the themes of [themes] from the very beginning.',
        marks: 3,
      },
      {
        question:
          'Choose one moment in the text where the tension increases (rising action). Explain how the writer builds tension at this point.',
        lines: 5,
        modelAnswer:
          "Tension increases when [event]. The writer builds tension by [technique, e.g. using short sentences, withholding information, describing the character's fear]. This is effective because it makes the reader feel [emotion] and want to find out what happens next.",
        marks: 3,
      },
      {
        question:
          'Write a paragraph about how the structure of the text affects the reader. Focus on one structural choice the writer makes.',
        lines: 8,
        modelAnswer:
          'The writer structures the text so that [structural choice, e.g. the story begins in the middle of the action / the narrative moves between two timelines]. This is effective because it [effect on reader, e.g. creates immediate tension / allows the reader to compare]. At the point where [specific moment], the structure shifts to [description], which creates a sense of [effect]. This structural choice helps to convey the theme of [theme] because [explanation].',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Many Year 7 students conflate structure with language. Be explicit that structure refers to how the text is organised (beginning, middle, end; paragraph placement; shifts in time/perspective), not individual word choices.',
      'The story mountain is a useful simplified model but has limitations - many modern texts do not follow a neat five-stage arc. Acknowledge this with stretch students.',
      'If the class has not finished reading the text, focus the timeline activity on the sections read so far and use prediction for the remaining stages.',
      'This lesson pairs well with a later creative writing unit where students apply structural techniques to their own narratives.',
    ],
    targetedSkills: [
      '7R.3 - Structural Analysis',
      'Narrative Structure',
      'Exposition & Climax',
      'Effect on the Reader',
      'Structural Terminology',
    ],
  },

  // ── Lesson 9: Setting and Atmosphere ──────────────────────────────────────
  {
    id: 'y7t1-09-setting-atmosphere',
    title: 'Setting and Atmosphere',
    text: 'Fox Girl & White Gazelle',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Understand how writers create atmosphere through descriptions of setting (7R.5)',
      'Analyse the language used to describe settings in the text',
      'Explore how setting reflects character emotions and themes (7W.5)',
      'Write descriptively about a setting, using techniques studied in the unit',
    ],
    successCriteria: [
      'I can identify how the writer describes a setting and the atmosphere it creates',
      'I can explain how specific language choices contribute to atmosphere',
      "I can connect the setting to the character's emotions or the theme",
      'I can write my own descriptive paragraph about a setting using at least two techniques',
    ],
    keywords: [
      'setting',
      'atmosphere',
      'mood',
      'pathetic fallacy',
      'sensory language',
      'description',
      'tension',
      'contrast',
    ],
    starterActivity: {
      title: 'Atmosphere Images',
      duration: '8 minutes',
      instructions:
        'Display four photographs of contrasting settings (e.g. a sunny beach, a dark alley, a crowded market, an empty room). For each image, students write three adjectives on their mini-whiteboards to describe the atmosphere. Teacher discusses how different settings create different moods, introducing the term "atmosphere." Ask: "How might a writer create this atmosphere using words instead of images?"',
      differentiation: {
        support:
          'Provide a word bank of atmospheric adjectives (eerie, welcoming, tense, vibrant, desolate, chaotic) for students to choose from.',
        core: 'Students generate their own adjectives and explain how the image creates that atmosphere.',
        stretch:
          'Students write a sentence for each image using a technique (simile, personification) to describe the atmosphere.',
      },
      resources: [
        'Four contrasting setting photographs on slides',
        'Mini-whiteboards',
        'Atmosphere word bank',
      ],
    },
    mainActivities: [
      {
        title: 'Analysing Setting in the Text',
        duration: '20 minutes',
        instructions:
          'Provide students with an extract from the text that contains a strong description of a setting. Teacher reads it aloud, then models annotating the extract, identifying: adjectives used, any imagery (similes, metaphors, personification), sensory language (sight, sound, smell, touch, taste), and the overall atmosphere created. Students then work independently to annotate a second extract, completing a table: Quotation | Technique | Atmosphere Created | Connection to Character. Teacher circulates and supports.',
        differentiation: {
          support:
            'Pre-highlight three key phrases in the extract and provide a partially completed table with the techniques already identified.',
          core: 'Students annotate independently and complete the full table with at least four examples.',
          stretch:
            "Students consider whether the setting acts as a mirror for the character's emotions (pathetic fallacy) and explain the connection in a written sentence.",
        },
        resources: [
          'Two extracts from the text (setting descriptions)',
          'Annotation guide sheet',
          'Setting analysis table worksheet',
        ],
      },
      {
        title: 'Creative Writing: Describe a Setting',
        duration: '20 minutes',
        instructions:
          "Students write their own descriptive paragraph about a setting, choosing from three options: the character's home, a place that feels unsafe, or a place that feels like freedom. Before writing, teacher models planning a descriptive paragraph, choosing three senses to include and one technique (simile, metaphor, or personification). Students plan for 5 minutes, then write for 12 minutes. In the final 3 minutes, students underline the techniques they have used and label them in the margin.",
        differentiation: {
          support:
            'Provide a descriptive writing frame with prompts: "I could see...", "I could hear...", "It felt like...", with a sentence starter using a simile.',
          core: 'Students write a paragraph using at least two techniques and three senses.',
          stretch:
            "Students write a paragraph where the setting reflects the character's emotional state (pathetic fallacy) and explain this connection in a short note at the end.",
        },
        resources: [
          'Setting options displayed on board',
          'Descriptive writing frame (support)',
          'Planning grid',
          'Technique checklist for self-annotation',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Read and React',
      duration: '7 minutes',
      instructions:
        'Three volunteers read their descriptive paragraphs aloud. After each reading, the class identifies: one technique used effectively, the atmosphere created, and one word or phrase that stood out. Teacher summarises the key learning: setting is never just a backdrop - it reflects character, creates atmosphere, and conveys theme.',
      differentiation: {
        support: 'Students can identify the atmosphere using one adjective.',
        core: 'Students identify a technique and the atmosphere it creates.',
        stretch:
          'Students suggest how the paragraph could be improved by adding another technique or sensory detail.',
      },
    },
    homework:
      'Rewrite or extend your descriptive paragraph, adding at least one more technique and one more sensory detail. Aim for 100-150 words.',
    worksheetQuestions: [
      {
        question: 'What is "atmosphere" in a text? How is it different from "setting"?',
        lines: 3,
        modelAnswer:
          'Setting is the physical location where a scene takes place. Atmosphere is the mood or feeling created by the way the setting is described. The same setting can have different atmospheres depending on the language used.',
        marks: 2,
      },
      {
        question: 'What is "pathetic fallacy"? Give an example of how a writer might use it.',
        lines: 3,
        modelAnswer:
          "Pathetic fallacy is when the weather or environment reflects a character's emotions. For example, a storm might be described during an argument to mirror the character's anger, or sunshine might accompany a moment of happiness.",
        marks: 2,
      },
      {
        question:
          'Find a description of a setting in the text. Write out a short quotation and explain what atmosphere it creates.',
        lines: 5,
        modelAnswer:
          'The quotation "[quotation]" creates an atmosphere of [mood]. The [technique] "[specific words]" suggests [meaning], making the reader feel [emotion]. This atmosphere is important because it [connection to character or theme].',
        marks: 3,
      },
      {
        question:
          "How does the setting in this extract reflect the character's feelings? Use evidence from the text to support your answer.",
        lines: 6,
        modelAnswer:
          'The setting reflects [character]\'s feelings of [emotion] because the description uses [techniques]. For example, "[quotation]" suggests [meaning], which mirrors the character\'s [emotional state]. This shows how the writer uses the setting not just as a backdrop but as a way of showing the reader how the character feels inside.',
        marks: 4,
      },
      {
        question:
          'Write a descriptive paragraph about a setting that creates a tense atmosphere. Use at least two techniques from this lesson.',
        lines: 8,
        modelAnswer:
          'A strong response would include: a clear sense of place, at least two techniques (e.g. simile, personification, sensory language), vocabulary that creates tension (e.g. shadows, silence, narrow), and a sense of atmosphere that affects the reader emotionally.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson blends reading analysis with creative writing. Adjust the time split based on your class - some groups may benefit from more time on analysis, others from more time on their own writing.',
      "Pathetic fallacy is a useful but often misunderstood term. Keep the definition simple: the weather or setting reflects the character's emotions.",
      'The creative writing element provides an opportunity for students who are stronger at creative work to shine. Celebrate good descriptive writing alongside strong analytical work.',
      'Consider using extracts from both texts to compare how settings are described differently across cultures - this ties back to the identity and belonging theme from Lesson 7.',
    ],
    targetedSkills: [
      "7R.5 - Writer's Effect on Setting",
      '7W.5 - Descriptive Writing',
      'Atmosphere Analysis',
      'Sensory Language',
      'Pathetic Fallacy',
    ],
  },

  // ── Lesson 10: Assessment - Analytical Response on Character ──────────────
  {
    id: 'y7t1-10-assessment-character-analysis',
    title: 'Assessment - Analytical Response on Character',
    text: 'Fox Girl & White Gazelle',
    board: 'Universal',
    yearGroup: 'Year 7',
    duration: '60 minutes',
    objectives: [
      'Demonstrate understanding of character through a sustained analytical response (7R.2-7R.5)',
      'Apply PEE/What/How/Why paragraph structure independently (7W.2-7W.4)',
      'Select and analyse relevant evidence from the text',
      'Show progress in analytical writing across the unit',
    ],
    successCriteria: [
      'I can write at least two PEE paragraphs that answer the assessment question',
      'I can select relevant quotations and analyse specific word choices',
      "I can explain the effect of the writer's choices on the reader",
      'I can link my analysis to the wider themes of the text (identity, belonging)',
    ],
    keywords: [
      'assessment',
      'analysis',
      'sustained',
      'response',
      'evidence',
      'technique',
      'effect',
      'theme',
    ],
    starterActivity: {
      title: 'Assessment Preparation',
      duration: '10 minutes',
      instructions:
        'Display the assessment question on the board: "How does the writer present [character] in [text]? Refer to language, structure, and theme in your response." Teacher reads the question aloud and breaks it down: What is it asking you to do? What should you include? How many paragraphs should you aim for? Students spend 5 minutes creating a brief plan (bullet points for each paragraph: point, quotation, technique to analyse). Teacher reminds students of the key success criteria and the skills practised across the unit.',
      differentiation: {
        support:
          'Provide a planning template with spaces for two paragraphs, each with prompts: "My point is...", "My quotation is...", "The technique I will write about is...". Also provide a quotation bank of six pre-selected quotations.',
        core: 'Students plan independently, aiming for two to three paragraphs with their own quotation choices.',
        stretch:
          'Students plan three or four paragraphs covering language, structure, and theme, noting which analytical vocabulary they will use.',
      },
      resources: [
        'Assessment question displayed on board',
        'Planning template (support tier)',
        'Quotation bank (support tier)',
        'Success criteria checklist',
      ],
    },
    mainActivities: [
      {
        title: 'Assessment Writing',
        duration: '40 minutes',
        instructions:
          'Students write their assessment response under timed, exam-style conditions. The extract is provided alongside the question. No writing frames are available, but the analytical vocabulary word bank remains on display. Students have access to the text. Teacher circulates silently, noting common strengths and areas for development for whole-class feedback in a future lesson. Students are encouraged to re-read and check their work in the final 5 minutes, making improvements in a different coloured pen.',
        differentiation: {
          support:
            'Allow access to the planning template and quotation bank. Permit use of the PEE writing frame from Lesson 4 for the first paragraph only. Encourage at least two paragraphs.',
          core: 'Students write independently, aiming for two or three developed paragraphs with word-level analysis.',
          stretch:
            'Students write three or four paragraphs, incorporating analysis of language, structure, and theme. They aim to embed quotations fluently and use a range of analytical vocabulary.',
        },
        resources: [
          'Assessment extract from the text',
          'Assessment question sheet',
          'Lined paper or assessment booklets',
          'Coloured pens for self-correction',
          'Analytical vocabulary word bank on display',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Reflection and Self-Assessment',
      duration: '10 minutes',
      instructions:
        'Students complete a self-assessment reflection sheet answering: "What did I do well in this assessment?", "What did I find difficult?", "What is my target for next time?" Students also rate themselves on each success criterion using a 1-4 scale (1 = not yet, 4 = confidently achieved). Teacher collects assessments and reflection sheets together for marking.',
      differentiation: {
        support:
          'Provide sentence starters for the reflection: "I did well at... because...", "I found it difficult to...", "Next time I will...".',
        core: 'Students complete the reflection independently with specific, evidence-based comments about their writing.',
        stretch:
          'Students identify a specific paragraph in their response that they are most proud of and explain why, referencing the skills from the unit.',
      },
    },
    homework:
      'No written homework. Students should re-read their assessment when books are returned and highlight where they have achieved each success criterion, preparing for a feedback and improvement lesson.',
    worksheetQuestions: [
      {
        question:
          'How does the writer present [character] in the extract? You should write about:\n- the language the writer uses\n- how the writer structures the text\n- the themes explored\n\nSupport your ideas with quotations from the extract.',
        lines: 30,
        modelAnswer:
          "A strong response (Grade 5+) would include: an introduction that addresses the question directly; two or three developed PEE/PEEL paragraphs, each with a clear point, an embedded quotation, and detailed analysis of specific word choices; reference to at least one language technique with correct terminology; a comment on structure (e.g. how the character is introduced, how they change); a link to the theme of identity or belonging; and a concluding sentence that summarises the writer's overall intention.",
        marks: 20,
      },
      {
        question:
          'Self-Assessment: What did you do well in this response? Write one specific strength with an example from your work.',
        lines: 3,
        modelAnswer:
          'A good self-assessment identifies a specific skill, e.g. "I analysed the word \'isolated\' in detail, explaining how it connotes loneliness and separation, which shows I can do word-level analysis."',
        marks: 1,
      },
      {
        question:
          'Self-Assessment: What is one area you need to improve? Write a specific target for next time.',
        lines: 3,
        modelAnswer:
          'A strong target is specific and actionable, e.g. "Next time I will include a comment about structure, not just language, to show I can analyse different aspects of the text" or "I need to explore individual words in more detail rather than explaining the general meaning."',
        marks: 1,
      },
      {
        question:
          'Rate yourself on each success criterion (1 = not yet, 4 = confidently achieved):\n- I wrote at least two PEE paragraphs: ___\n- I selected relevant quotations: ___\n- I analysed specific word choices: ___\n- I explained the effect on the reader: ___\n- I linked to themes: ___',
        lines: 5,
        modelAnswer:
          'Students should rate themselves honestly. Scores of 3-4 suggest the student is working at or above the expected standard for Year 7 Term 1. Scores of 1-2 indicate areas for targeted intervention.',
        marks: 0,
      },
      {
        question:
          'Looking back at the whole unit, what is the most important thing you have learned about analytical writing? Explain your answer.',
        lines: 4,
        modelAnswer:
          'A thoughtful response might include: "I have learned that good analysis is not just about saying what happens but about exploring why the writer chose specific words and what effect they have on the reader. The What/How/Why structure helps me organise my ideas clearly."',
        marks: 2,
      },
    ],
    teacherNotes: [
      "This is a summative assessment and should be marked against your department's KS3 assessment criteria. Use the data to inform groupings and interventions for the next half-term.",
      'Allow the full 40 minutes for writing - Year 7 students need time to think, plan, and re-read. Resist shortening this.',
      "The self-assessment reflection is valuable formative data. Compare students' self-assessment with your own marking to identify students with poor metacognitive awareness.",
      'Plan a follow-up DIRT (Dedicated Improvement and Reflection Time) lesson where students respond to your feedback and improve one paragraph from their assessment.',
      'Keep exemplar responses (with student permission) to use as models for future cohorts.',
    ],
    targetedSkills: [
      '7R.2 - Evidence Selection',
      '7R.3 - Language & Structure Analysis',
      '7R.4 - Independent Response',
      "7R.5 - Writer's Effect",
      '7W.2 - Paragraph Structure',
      '7W.3 - Guided to Independent Writing',
      '7W.4 - Independent Writing',
    ],
  },
]
