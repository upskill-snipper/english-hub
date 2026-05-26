// @ts-nocheck
// ─── Types ───────────────────────────────────────────────────────────────────

import type { LessonPlan } from './macbeth-lessons'

// ─── Lesson 1: Skimming, Scanning, and Close Reading ─────────────────────────

const lesson1: LessonPlan = {
  id: 'reading-comp-01-skimming-scanning-close-reading',
  title: 'Skimming, Scanning, and Close Reading',
  text: 'Reading Comprehension',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the difference between skimming, scanning, and close reading as distinct reading strategies.',
    'Apply each strategy purposefully to locate, select, and analyse information from unseen texts.',
    'Evaluate which reading strategy is most effective for different types of exam questions.',
  ],
  successCriteria: [
    'I can define skimming, scanning, and close reading and explain when each is most useful.',
    'I can use scanning to locate specific information within a text in under 60 seconds.',
    'I can demonstrate close reading by annotating a passage for language features and meaning.',
    'I can match reading strategies to specific AQA question types.',
  ],
  keywords: [
    'skimming',
    'scanning',
    'close reading',
    'annotation',
    'topic sentence',
    'key words',
    'inference',
  ],
  starterActivity: {
    title: 'Speed Reading Challenge',
    duration: '8 minutes',
    instructions:
      'Display a 300-word non-fiction text about the history of public libraries on the board. Set a 30-second timer and ask students: "What is this text mostly about?" (skimming). Then set another 30-second timer: "Find the year the first public library opened" (scanning). Finally, display a single sentence from the text and ask: "What does the writer suggest about the importance of reading?" (close reading). Use these three tasks to introduce the three strategies and their purposes.',
    differentiation: {
      support:
        'Provide the three strategy names on a card with simple definitions before the task begins.',
      core: 'Students attempt all three tasks and write a sentence explaining how each strategy felt different.',
      stretch:
        'Students explain which strategy required the deepest thinking and why, linking to exam question demands.',
    },
    resources: [
      'Public libraries text on slide',
      'Timer',
      'Strategy definition cards (support tier)',
    ],
  },
  mainActivities: [
    {
      title: 'Strategy Stations: Practising the Three Reading Modes',
      duration: '22 minutes',
      instructions:
        'Set up three stations, each with a different original text. Station 1 - Skimming: A 500-word article about the decline of high-street shopping. Students skim for 90 seconds and write a one-sentence summary. Station 2 - Scanning: A fact-rich text about endangered species in the UK. Students answer five specific retrieval questions (e.g., "How many red squirrels remain in England?"). Station 3 - Close Reading: A descriptive paragraph about a storm at sea. Students annotate for language devices, connotations, and writer\'s purpose. Students rotate every 7 minutes. Teacher models expectations at each station before rotation begins.',
      differentiation: {
        support:
          'Provide a checklist at each station explaining what to look for (e.g., "For skimming: read the first sentence of each paragraph").',
        core: 'Students complete all tasks independently and self-assess against the model answers provided at each station.',
        stretch:
          'At the close reading station, students write a short analytical paragraph explaining how the writer creates a sense of danger.',
      },
      resources: [
        'Station texts (x3)',
        'Annotation guide',
        'Retrieval question sheets',
        'Model answers for self-assessment',
      ],
    },
    {
      title: 'Matching Strategies to Exam Questions',
      duration: '18 minutes',
      instructions:
        'Display six exam-style questions from AQA Language Papers 1 and 2 (e.g., "List four things about the town from the source", "How does the writer use language to describe the weather?"). Students work in pairs to categorise each question by the primary reading strategy needed. Then, using the original text below, students practise answering two questions - one retrieval (scanning) and one analysis (close reading). Teacher circulates and questions students on their strategy choices.\n\nPractice Text - "The Old Market"\nThe market had stood at the centre of town for as long as anyone could remember. Its iron beams, once painted a proud forest green, now wore a coat of rust that bled orange streaks down the pillars like old wounds. Beneath the sagging canvas awnings, traders called out prices that no one seemed to hear. Mrs Hargreaves arranged her apples in careful pyramids, though fewer people stopped each week. The supermarket on the ring road had seen to that. A boy on a bicycle weaved between the stalls, his wheels hissing on the wet cobbles. Somewhere, a radio played a song from another decade, tinny and half-forgotten. The smell of roasting chestnuts drifted across the square - sweet, warm, almost defiant in the face of progress.',
      differentiation: {
        support:
          'Provide a table matching question types to strategies with one example already completed.',
        core: 'Students categorise all questions, answer two, and explain their strategy choice for each.',
        stretch:
          'Students write their own exam question for each strategy type, based on "The Old Market" text.',
      },
      resources: [
        'Exam question display slides',
        'Practice text handout',
        'Strategy-matching table',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Strategy Selection Exit Ticket',
    duration: '7 minutes',
    instructions:
      'Display a new short text and three questions of increasing difficulty. Students must write down which strategy they would use for each question and justify their choice in one sentence. Collect exit tickets to assess understanding of when to apply each strategy.',
    differentiation: {
      support: 'Sentence starter: "For this question I would use... because..."',
      core: 'Students justify all three strategy choices with clear reasoning.',
      stretch:
        'Students explain how they would combine strategies when tackling a full exam paper under timed conditions.',
    },
  },
  homework:
    'Read a newspaper or online article of your choice. Write three questions about it - one that requires skimming, one scanning, and one close reading - and provide model answers for each.',
  worksheetQuestions: [
    {
      question:
        'Define skimming, scanning, and close reading. Explain when you would use each strategy during an English exam.',
      lines: 6,
      modelAnswer:
        'Skimming is reading quickly to get the overall gist or main idea of a text - you read topic sentences, headings, and opening lines without focusing on every word. It is useful at the start of an exam to understand what a source is about. Scanning is searching for specific information such as names, dates, or key words - your eyes move quickly over the text until you find the target detail. It is useful for retrieval questions like AQA Paper 2 Question 1. Close reading is slow, careful reading where you analyse language choices, sentence structures, and implied meanings. It is essential for analysis questions like Paper 1 Question 2 or Question 3.',
      marks: 6,
    },
    {
      question:
        'Read "The Old Market" text. List four things you learn about the market from this passage.',
      lines: 4,
      modelAnswer:
        '1. The market has been in the centre of town for a very long time. 2. The iron beams were once painted green but are now rusty. 3. Fewer people visit the market each week because of the supermarket on the ring road. 4. The market has cobbled ground and canvas awnings.',
      marks: 4,
    },
    {
      question:
        'How does the writer use language to suggest the market is in decline? Refer to two examples from the text.',
      lines: 8,
      modelAnswer:
        'The writer uses the metaphor "rust that bled orange streaks down the pillars like old wounds" to present the market as physically damaged and neglected. The verb "bled" personifies the market, suggesting it is injured or suffering, while the simile "like old wounds" implies long-term neglect that has never been repaired. This creates a sense of decay and abandonment. Additionally, the phrase "prices that no one seemed to hear" suggests the traders\' efforts are futile - the modifier "no one" emphasises the emptiness and lack of customers, reinforcing the idea that the market is dying. Together, these language choices present the market as a place overtaken by time and progress.',
      marks: 8,
    },
    {
      question:
        'Which reading strategy would you use first when approaching an unseen text in the exam? Explain your reasoning.',
      lines: 4,
      modelAnswer:
        'I would use skimming first because it allows me to quickly understand the overall content, tone, and purpose of the text before I look at the questions. This gives me a mental map of the text so that when I read the questions, I already know roughly where to find relevant sections. I can then use scanning to locate specific details and close reading to analyse key passages in depth.',
      marks: 3,
    },
    {
      question:
        'Re-read the sentence: "The smell of roasting chestnuts drifted across the square - sweet, warm, almost defiant in the face of progress." What does the word "defiant" suggest about the market?',
      lines: 5,
      modelAnswer:
        'The word "defiant" suggests that the market is resisting change and refusing to give in to modernisation. The smell of chestnuts represents the traditional, familiar aspects of the market that still persist despite the decline. By personifying the smell as "defiant," the writer implies that there is something stubborn and admirable about the market\'s continued existence - it is fighting against "progress" (the supermarket) even though it seems to be losing. The modifier "almost" adds a note of sadness, suggesting this defiance may not last much longer.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is a foundational lesson - ensure students understand all three strategies before moving to inference and analysis in subsequent lessons.',
    'The station rotation works best with tables arranged in clusters. Print texts on coloured paper to distinguish stations.',
    'Model the annotation process live under the visualiser during the close reading station explanation.',
    'Emphasise that exam success depends on knowing which strategy to use when - not just reading everything slowly.',
    'Collect exit tickets to identify students who conflate skimming with scanning; address this in the next lesson starter.',
  ],
  targetedSkills: [
    'AO1: Information retrieval',
    'AO2: Language analysis',
    'Reading strategies',
    'Exam technique',
    'Annotation',
  ],
}

// ─── Lesson 2: Inference and Deduction ───────────────────────────────────────

const lesson2: LessonPlan = {
  id: 'reading-comp-02-inference-deduction',
  title: 'Inference and Deduction',
  text: 'Reading Comprehension',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Distinguish between explicit information and implicit meaning in a range of texts.',
    'Make valid inferences supported by textual evidence.',
    'Use deduction to draw logical conclusions from language choices and structural decisions.',
  ],
  successCriteria: [
    'I can identify at least three implicit meanings from an unseen passage.',
    'I can support each inference with a direct quotation from the text.',
    'I can explain the difference between inference (reading between the lines) and deduction (drawing logical conclusions).',
    'I can write an inference-based analytical paragraph using evidence and explanation.',
  ],
  keywords: [
    'inference',
    'deduction',
    'implicit',
    'explicit',
    'connotation',
    'implication',
    'textual evidence',
  ],
  starterActivity: {
    title: 'What Can You Infer? - Image Analysis',
    duration: '7 minutes',
    instructions:
      'Display a photograph of an abandoned classroom (desks overturned, a single shoe on the floor, sunlight through a broken window). Ask students: "What has happened here? How do you know?" Students write three inferences on mini-whiteboards, each supported by visual evidence. Teacher models the difference: "The room is empty" is explicit (we can see it). "The school closed suddenly" is an inference (the abandoned objects suggest people left in a hurry). Bridge to text: we do the same thing when reading - we look for clues the writer has embedded.',
    differentiation: {
      support: 'Provide sentence stems: "I can infer that... because I can see..."',
      core: 'Students write three inferences with supporting evidence independently.',
      stretch:
        'Students categorise their inferences by reliability - which are most strongly supported by the evidence?',
    },
    resources: [
      'Abandoned classroom photograph',
      'Mini-whiteboards',
      'Sentence stem cards (support tier)',
    ],
  },
  mainActivities: [
    {
      title: 'Inference Interrogation: Reading Between the Lines',
      duration: '20 minutes',
      instructions:
        'Distribute the following original text and read aloud together:\n\n"The Letter"\nShe read it twice, then folded the paper along its original creases, as if that could put things back the way they were. The kitchen clock ticked. Outside, the neighbour\'s dog barked at something - a postman, perhaps, delivering someone else\'s news. She placed the letter in the cutlery drawer, beneath the forks, where no one would think to look. Then she filled the kettle, because that was what you did.\n\nStudents work in pairs to complete an inference grid: Column 1 - Quotation; Column 2 - What it literally says; Column 3 - What it implies. Teacher models the first row: "folded the paper along its original creases" literally means she refolded the letter, but implies she wants to undo what she has read, to restore the status quo. Pairs complete at least four rows. Whole-class feedback: discuss which inferences are most convincing and why.',
      differentiation: {
        support:
          'Provide a partially completed inference grid with two rows filled in; students complete two more.',
        core: 'Students complete four rows independently and rank their inferences by strength of evidence.',
        stretch:
          'Students write a paragraph explaining what they think the letter contained, supported entirely by inference from the text.',
      },
      resources: [
        'Practice text: "The Letter"',
        'Inference grid worksheet',
        'Partially completed grid (support tier)',
      ],
    },
    {
      title: 'Deduction in Action: Drawing Conclusions from Multiple Clues',
      duration: '20 minutes',
      instructions:
        'Introduce deduction as combining multiple pieces of evidence to reach a logical conclusion. Display the following original text:\n\n"The Waiting Room"\nThe plastic chairs were bolted to the floor in rows of five. A television in the corner showed the news with the sound turned down - subtitles scrolling silently beneath images of a flood. The woman in the blue coat had been there since half past two. She checked her phone every few minutes, then put it face down on her lap. A child beside her coloured quietly in a book, staying carefully inside the lines. When a name was called - not hers - she looked up sharply, then exhaled and returned to her phone.\n\nStudents answer: 1) Where is this scene set? What evidence supports your deduction? 2) How is the woman feeling? Which clues tell you? 3) What can you deduce about the child\'s awareness of the situation? For each, students must cite at least two pieces of evidence and explain how they combine to support the conclusion. Teacher models the chain of reasoning for question 1.',
      differentiation: {
        support:
          "Provide the location answer (a hospital or doctor's waiting room) and ask students to find three pieces of evidence to prove it.",
        core: 'Students answer all three questions with multiple pieces of evidence for each deduction.',
        stretch:
          'Students identify what the writer deliberately withholds from the reader and explain how this creates tension.',
      },
      resources: ['Practice text: "The Waiting Room"', 'Deduction questions handout'],
    },
  ],
  plenaryActivity: {
    title: 'Inference vs Deduction: Sort and Justify',
    duration: '8 minutes',
    instructions:
      'Display six statements about the two texts studied. Students sort each into "inference" (reading between the lines from a single clue) or "deduction" (combining clues to reach a conclusion). Students justify each categorisation. Quick-fire feedback with hands up.',
    differentiation: {
      support: 'Provide definitions of inference and deduction on a reference card.',
      core: 'Students sort and justify all six statements.',
      stretch:
        'Students write their own example of each, drawn from a text they have studied previously.',
    },
  },
  homework:
    'Write a short paragraph (100-150 words) describing a person in a setting. Include at least four implicit clues about how the person is feeling without ever stating the emotion directly. Annotate your paragraph to explain each embedded clue.',
  worksheetQuestions: [
    {
      question:
        'What is the difference between inference and deduction? Provide an example of each.',
      lines: 5,
      modelAnswer:
        'Inference is reading between the lines - using a single clue or piece of evidence to understand something that is not directly stated. For example, in "The Letter," the detail that she "placed the letter in the cutlery drawer, beneath the forks" implies she wants to hide what she has read, suggesting the news is upsetting or private. Deduction is combining multiple clues to reach a logical conclusion. For example, in "The Waiting Room," the plastic chairs bolted to the floor, the television with subtitles, the waiting, and the name being called all combine to suggest the setting is a hospital or clinic.',
      marks: 4,
    },
    {
      question:
        'Re-read "The Letter." What can you infer about the character\'s emotional state? Support your answer with two quotations.',
      lines: 6,
      modelAnswer:
        'The character appears to be in shock or distress but is suppressing her emotions. The detail "she filled the kettle, because that was what you did" suggests she is falling back on routine to cope with difficult news - the phrase "that was what you did" implies an automatic, almost numb response. Additionally, folding the letter "along its original creases, as if that could put things back the way they were" implies a desire to undo the news, suggesting she has received information that changes her situation permanently. The simile-like phrasing "as if" signals she knows this is impossible, adding a layer of quiet desperation.',
      marks: 6,
    },
    {
      question:
        'Re-read "The Waiting Room." What can you deduce about the relationship between the woman and the child? Use evidence from the text.',
      lines: 5,
      modelAnswer:
        'The child appears to be the woman\'s son or daughter, as they are sitting together and the child seems aware of the seriousness of the situation. The detail that the child "coloured quietly" and stayed "carefully inside the lines" suggests the child is being deliberately well-behaved, as if sensing the woman\'s anxiety. The fact that the child does not ask questions or demand attention implies an unusual level of restraint, deducing that the child understands something important and worrying is happening.',
      marks: 4,
    },
    {
      question:
        'Why is inference an important skill for the English Language exam? Explain with reference to specific question types.',
      lines: 4,
      modelAnswer:
        "Inference is essential because many exam questions require students to go beyond what is explicitly stated. AQA Paper 1 Question 2 asks how writers use language - answering this requires inferring the effect of specific word choices on the reader. Paper 1 Question 4 and Paper 2 Question 4 require evaluation, which depends on inferring a writer's intentions and attitudes. Even retrieval questions sometimes require basic inference to identify relevant information. Students who can only identify explicit information will be limited to the lowest mark bands.",
      marks: 4,
    },
    {
      question:
        'Read the following sentence from "The Waiting Room": "She checked her phone every few minutes, then put it face down on her lap." What does this detail suggest? Explore two possible interpretations.',
      lines: 6,
      modelAnswer:
        'One interpretation is that she is waiting for a message or call - perhaps from a family member or about test results - and checking repeatedly reveals her anxiety and impatience. Placing the phone face down could suggest she does not want to see bad news when it arrives, implying fear. An alternative interpretation is that she is checking the time rather than messages, which would emphasise how slowly time passes when someone is anxious. The face-down placement could also suggest she is trying to discipline herself to stop checking, aware that the constant looking is feeding her worry. Both interpretations are supported by the wider context of nervous waiting.',
      marks: 6,
    },
  ],
  teacherNotes: [
    'Use the image starter to make inference feel intuitive before applying it to text - students often find visual inference easier at first.',
    'Emphasise that inference must always be supported by evidence - unsupported inference is speculation.',
    'The two practice texts are deliberately short to allow deep analysis rather than surface-level reading.',
    '"The Letter" works well as a model for show-don\'t-tell writing - link to creative writing if appropriate.',
    'Common misconception: students confuse inference with personal opinion. Stress that inference is evidence-based.',
  ],
  targetedSkills: [
    'AO1: Inference',
    'AO2: Language analysis',
    'Critical reading',
    'Evidence selection',
    'Analytical writing',
  ],
}

// ─── Lesson 3: Identifying Writer's Methods ──────────────────────────────────

const lesson3: LessonPlan = {
  id: 'reading-comp-03-writers-methods',
  title: "Identifying Writer's Methods",
  text: 'Reading Comprehension',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify a range of language and structural methods used by writers to achieve specific effects.',
    'Analyse how writers use methods such as imagery, tone, sentence structure, and perspective to shape meaning.',
    "Evaluate the effectiveness of specific writer's methods using subject terminology accurately.",
  ],
  successCriteria: [
    'I can identify at least five different language or structural methods in an unseen text.',
    'I can explain the effect of each method on the reader using appropriate terminology.',
    'I can write an analytical paragraph that names the method, embeds a quotation, and explains the effect.',
    'I can use terms such as metaphor, juxtaposition, semantic field, and anaphora accurately.',
  ],
  keywords: [
    "writer's methods",
    'language devices',
    'structural features',
    'effect on reader',
    'imagery',
    'juxtaposition',
    'semantic field',
    'tone',
    'anaphora',
  ],
  starterActivity: {
    title: 'Method Bingo',
    duration: '8 minutes',
    instructions:
      'Give each student a 3x3 bingo grid with nine language/structural terms (e.g., metaphor, simile, personification, short sentence, rhetorical question, listing, contrast, repetition, direct address). Display an original persuasive speech extract on the board. Students read the extract and cross off each method they can identify, writing the quotation next to it. First to complete a line wins. Use this to establish the range of methods students can already recognise and identify gaps.',
    differentiation: {
      support: 'Provide definitions alongside each term on the bingo card.',
      core: 'Students identify methods and write the supporting quotation.',
      stretch: 'Students must also note the effect of each method they identify.',
    },
    resources: [
      'Bingo grid handouts',
      'Persuasive speech extract on slide',
      'Definitions sheet (support tier)',
    ],
  },
  mainActivities: [
    {
      title: "Deep Dive into Writer's Methods: Annotating an Unseen Text",
      duration: '22 minutes',
      instructions:
        'Distribute the following original text:\n\n"The Factory"\nThe machines never stopped. Day bled into night and night into day, and still the conveyor belts rolled on, carrying their endless cargo of identical boxes towards the loading bay. Jenkins stood at his station, his hands moving in patterns his brain had long since abandoned. Left, fold, press, stack. Left, fold, press, stack. The rhythm was a kind of anaesthesia - it numbed everything: thought, ambition, the ache in his lower back that had been there since Tuesday or perhaps since forever.\n\nAbove him, fluorescent lights buzzed like trapped insects. The air tasted of cardboard and machine oil. Somewhere beyond the metal walls, he knew there was a sky - blue or grey, it hardly mattered - but in here the only weather was the constant hum of production.\n\nTeacher models annotating the first paragraph for methods: repetition ("Left, fold, press, stack"), metaphor ("rhythm was a kind of anaesthesia"), semantic field of monotony, listing. Students then annotate the second paragraph independently, identifying at least four methods. Pairs compare annotations and discuss: which method is most effective and why?',
      differentiation: {
        support:
          'Provide an annotation key showing what to look for (language devices, sentence patterns, imagery) with colour coding.',
        core: 'Students annotate independently, identifying at least four methods with quotations and effects.',
        stretch:
          'Students analyse how the structural choices (paragraph division, shift from actions to setting) contribute to the overall effect.',
      },
      resources: ['Practice text: "The Factory"', 'Annotation key (support tier)', 'Highlighters'],
    },
    {
      title: "Writing Analytical Paragraphs on Writer's Methods",
      duration: '18 minutes',
      instructions:
        'Teach the WHAT-HOW-WHY structure: WHAT method does the writer use? HOW is it used (embed quotation)? WHY - what effect does it create? Teacher models one paragraph on the board using "The Factory" text. Students then write two analytical paragraphs on different methods from the text. Peer assessment: partners check each paragraph for method identification, embedded quotation, and explained effect. Teacher shares two strong examples under the visualiser.',
      differentiation: {
        support:
          'Provide a paragraph frame: "The writer uses [method] in the phrase \'[quotation]\'. This suggests... because... The effect on the reader is..."',
        core: 'Students write two independent paragraphs using WHAT-HOW-WHY structure.',
        stretch:
          'Students write a paragraph that analyses how two methods work together to create a combined effect.',
      },
      resources: [
        'WHAT-HOW-WHY structure display',
        'Paragraph frame (support tier)',
        'Peer assessment checklist',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Method Ranking',
    duration: '7 minutes',
    instructions:
      'Students rank the five methods they identified in "The Factory" from most to least effective, justifying their top choice in two sentences. Share rankings - discuss whether there is consensus or disagreement and what this reveals about the subjective nature of analysis.',
    differentiation: {
      support: 'Students rank three methods and justify their top choice.',
      core: 'Students rank five methods with a written justification for first and last.',
      stretch:
        "Students consider what the writer's most important overall intention was and which method best serves that intention.",
    },
  },
  homework:
    "Find a short extract from any text (fiction, non-fiction, or a song lyric). Identify three writer's methods and write one analytical paragraph on the most effective method.",
  worksheetQuestions: [
    {
      question:
        'Re-read "The Factory." How does the writer use repetition to convey the monotony of factory work? Refer to specific examples.',
      lines: 6,
      modelAnswer:
        'The writer uses repetition of the phrase "Left, fold, press, stack" to mirror the repetitive physical actions Jenkins performs. By listing these short, blunt verbs in a fixed sequence and then immediately repeating them, the writer forces the reader to experience the same relentless rhythm as the character. The effect is almost hypnotic - the reader begins to feel the monotony themselves. The repetition also connects to the metaphor of "anaesthesia," suggesting that the repetitive work has a numbing, drug-like quality that suppresses Jenkins\'s individuality and thought.',
      marks: 6,
    },
    {
      question:
        'Analyse the effect of the simile "fluorescent lights buzzed like trapped insects." What does this suggest about the factory environment?',
      lines: 5,
      modelAnswer:
        'The simile compares the sound of the factory lights to "trapped insects," which creates an oppressive, uncomfortable atmosphere. Insects that are trapped buzz frantically and helplessly, and this connotation transfers to the factory - it implies that the environment is one of entrapment, where living things (including Jenkins) are confined and powerless. The sensory detail of buzzing also adds to the overwhelming noise of the factory, suggesting there is no escape from the constant, irritating stimulation of the industrial setting.',
      marks: 4,
    },
    {
      question:
        'What is a semantic field? Identify the semantic field in "The Factory" and explain its effect.',
      lines: 5,
      modelAnswer:
        'A semantic field is a group of words related to the same topic or concept used throughout a text. In "The Factory," there is a semantic field of industrial production: "machines," "conveyor belts," "cargo," "loading bay," "station," "production." This creates a sense that the factory dominates every aspect of the passage - even the language itself is mechanical and functional. The semantic field reinforces the theme that human experience has been reduced to an industrial process, with Jenkins as merely another component in the machine.',
      marks: 4,
    },
    {
      question:
        'How does the writer use structure in "The Factory" to develop the reader\'s understanding of the setting?',
      lines: 6,
      modelAnswer:
        'The writer begins the text with a declarative statement - "The machines never stopped" - which immediately establishes the relentless, ceaseless nature of the factory. The first paragraph focuses on Jenkins\'s physical actions, keeping the reader at the level of bodily experience. The second paragraph shifts to sensory details - sound ("buzzed"), taste ("cardboard and machine oil"), and the absence of sight (the sky is beyond the walls). This structural shift moves from what Jenkins does to what Jenkins feels, deepening the reader\'s understanding from surface action to emotional experience. The final reference to the sky he cannot see structurally places him in contrast with the natural world, emphasising his entrapment.',
      marks: 6,
    },
    {
      question:
        'Write one WHAT-HOW-WHY paragraph analysing a method of your choice from "The Factory."',
      lines: 8,
      modelAnswer:
        'The writer uses a metaphor when describing the rhythm of Jenkins\'s work as "a kind of anaesthesia." The word "anaesthesia" refers to the medical numbing of sensation before surgery, and by comparing the factory\'s rhythm to this, the writer suggests that repetitive labour has deadened Jenkins\'s ability to feel. The phrase "it numbed everything: thought, ambition, the ache in his lower back" uses a list to show the total scope of this numbing - it affects his mind, his aspirations, and his body. The effect on the reader is both sympathy and discomfort: we understand that Jenkins has been reduced to an unfeeling automaton by his work, and the clinical precision of "anaesthesia" makes this dehumanisation feel deliberate and systematic rather than accidental.',
      marks: 8,
    },
  ],
  teacherNotes: [
    'This lesson focuses on AO2 - ensure students are naming methods, embedding quotations, and explaining effects throughout.',
    'Avoid letting students simply "spot" devices without analysing their effect - this is the most common weakness at GCSE.',
    'The WHAT-HOW-WHY structure is a scaffold, not a formula - encourage students to move beyond it as they grow in confidence.',
    '"The Factory" text deliberately uses a range of accessible methods - use it as a reference text in future lessons if needed.',
    'Common error: students write "this makes the reader want to read on" - discourage vague effect statements and push for specificity.',
  ],
  targetedSkills: [
    "AO2: Writer's methods",
    'Subject terminology',
    'Analytical writing',
    'Close reading',
    'Peer assessment',
  ],
}

// ─── Lesson 4: Evaluating Texts Critically ───────────────────────────────────

const lesson4: LessonPlan = {
  id: 'reading-comp-04-evaluating-texts',
  title: 'Evaluating Texts Critically',
  text: 'Reading Comprehension',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    "Critically evaluate a writer's choices and their impact on the reader, forming a personal response.",
    'Assess the success of specific techniques by considering alternative interpretations.',
    'Construct an evaluative response that balances agreement with a statement while exploring nuance.',
  ],
  successCriteria: [
    'I can respond to a critical statement about a text with a clear personal judgement.',
    'I can support my evaluation with textual evidence and analysis of methods.',
    'I can consider an alternative interpretation and weigh its validity against my own reading.',
    'I can write an evaluative paragraph that goes beyond description to assess effectiveness.',
  ],
  keywords: [
    'evaluate',
    'critical response',
    'effectiveness',
    'alternative interpretation',
    'authorial intent',
    'personal response',
    'tone',
    'perspective',
  ],
  starterActivity: {
    title: 'Agree or Disagree? - Statement Discussion',
    duration: '7 minutes',
    instructions:
      'Display the statement: "A writer\'s most powerful tool is what they choose NOT to say." Students stand and move to one side of the room (agree) or the other (disagree). Teacher interviews students from both sides. Use responses to introduce evaluation as forming a judgement about a writer\'s choices and being able to justify it with evidence. Key point: evaluation requires you to have an opinion AND support it.',
    differentiation: {
      support: 'Give students 60 seconds to discuss with a partner before moving.',
      core: 'Students articulate their position with an example from a text they know.',
      stretch:
        "Students explain how a writer's silence or omission can be more powerful than explicit statement.",
    },
  },
  mainActivities: [
    {
      title: 'Guided Evaluation: Responding to a Statement',
      duration: '22 minutes',
      instructions:
        'Distribute the following original text:\n\n"The Crossing"\nThe boat was smaller than he had imagined. Seventeen people sat in a space built for six, their knees pressed together, their breathing the only conversation. The boy clung to his mother\'s sleeve, twisting the fabric between his fingers until the threads began to fray. She did not tell him to stop.\n\nThe sea was calm, which felt like a lie. Somewhere on the other side - he was not sure exactly where - was a word he had heard the adults whisper like a prayer: safety. But that was hours away, or days, or never. The engine coughed, swallowed salt water, and coughed again.\n\nHis mother looked at the horizon as if it owed her something.\n\nDisplay the evaluative statement: "A student said: \'The writer makes the reader feel sympathy for the boy and his mother.\' To what extent do you agree?" Teacher models the evaluation structure: (1) State your position, (2) Select evidence, (3) Analyse the method and its effect, (4) Consider an alternative reading, (5) Reach a conclusion. Model one paragraph together, then students write a second paragraph independently.',
      differentiation: {
        support:
          'Provide a paragraph frame with sentence starters for each step of the evaluation structure.',
        core: 'Students write one full evaluative paragraph independently after the modelled example.',
        stretch:
          'Students write a counter-paragraph exploring where the writer might be doing something other than creating sympathy (e.g., creating tension or conveying resilience).',
      },
      resources: [
        'Practice text: "The Crossing"',
        'Evaluation structure display',
        'Paragraph frame (support tier)',
      ],
    },
    {
      title: 'Independent Evaluation Practice',
      duration: '20 minutes',
      instructions:
        'Display a second statement about the same text: "A student said: \'The writer presents the journey as hopeless.\' To what extent do you agree?" Students plan and write a full evaluative response (two to three paragraphs). Remind them: the strongest responses show some agreement and some nuance - is the journey entirely hopeless, or is there complexity? Students should consider: the word "safety" as a prayer, the mother looking at the horizon "as if it owed her something," and the engine that "coughed" but kept going. Teacher circulates, targeting students who need support with alternative interpretations.',
      differentiation: {
        support:
          'Provide a planning grid: "Evidence that agrees / Evidence that disagrees / My overall judgement."',
        core: 'Students write two to three paragraphs with evidence, analysis, and a clear personal conclusion.',
        stretch:
          "Students evaluate the writer's structural choices as well as language choices, considering why the text ends with the mother's gaze.",
      },
      resources: ['Planning grid (support tier)', 'Evaluation success criteria checklist'],
    },
  ],
  plenaryActivity: {
    title: 'Gallery Walk: Strongest Evaluation Sentence',
    duration: '6 minutes',
    instructions:
      "Students write their single best evaluative sentence on a sticky note and place it on the board. Class does a gallery walk, reading others' sentences. Teacher selects three to discuss: what makes each one effective? Focus on: clear judgement, embedded evidence, and explained effect.",
    differentiation: {
      support: 'Students select and copy their best sentence from their written response.',
      core: 'Students craft a new, polished sentence that captures their evaluation.',
      stretch:
        'Students write a sentence that captures a nuanced evaluation - acknowledging complexity rather than simple agreement.',
    },
  },
  homework:
    'Write a 200-word evaluation responding to: "The most effective moment in \'The Crossing\' is the final sentence." To what extent do you agree?',
  worksheetQuestions: [
    {
      question:
        'What does it mean to "evaluate" a text? How is evaluation different from analysis?',
      lines: 4,
      modelAnswer:
        "Evaluation means making a judgement about a writer's choices - assessing how effective they are and whether you agree with a particular reading of the text. Analysis involves identifying what the writer does and explaining how it works (methods and effects). Evaluation goes further by asking whether the writer succeeds, how convincing their techniques are, and considering alternative interpretations. In AQA terms, analysis is AO2 (methods) while evaluation also requires AO4 (personal critical response).",
      marks: 4,
    },
    {
      question:
        '"A student said: \'The writer makes the reader feel sympathy for the boy.\' To what extent do you agree?" Write an evaluative paragraph using evidence from "The Crossing."',
      lines: 8,
      modelAnswer:
        'I largely agree that the writer creates sympathy for the boy. The detail that he "clung to his mother\'s sleeve, twisting the fabric between his fingers until the threads began to fray" presents him as frightened and seeking comfort through a physical, almost instinctive action. The verb "clung" connotes desperation and vulnerability, while the fraying threads could symbolise the fragility of his safety. The reader feels sympathy because the boy\'s fear is conveyed through action rather than direct statement, making it feel authentic and raw. However, the writer also gives the boy a sense of awareness - he has heard the word "safety" and understands its significance - which suggests he is not merely a helpless victim but someone who comprehends the gravity of the journey. This complexity makes the sympathy deeper: we feel for him not just because he is young and afraid, but because he understands enough to fear.',
      marks: 8,
    },
    {
      question:
        'What does the metaphor "The sea was calm, which felt like a lie" suggest? Evaluate its effectiveness.',
      lines: 6,
      modelAnswer:
        "The metaphor personifies the calm sea as deceptive - a \"lie\" - suggesting that the tranquil surface conceals hidden danger. This is effective because it subverts the reader's expectations: normally, a calm sea would be reassuring, but here it increases tension by implying that the true threat is invisible. The metaphor also reflects the boy's (or narrator's) psychological state - he cannot trust even apparently positive signs because his experience has taught him that safety is unreliable. I find this highly effective because it achieves multiple effects in a single short sentence: it builds tension, reveals character psychology, and foreshadows potential danger, all while maintaining the spare, restrained tone of the passage.",
      marks: 6,
    },
    {
      question:
        'Explain what the final sentence - "His mother looked at the horizon as if it owed her something" - reveals about the mother\'s character.',
      lines: 5,
      modelAnswer:
        'The final sentence presents the mother as defiant and determined. The phrase "as if it owed her something" personifies the horizon, suggesting she sees the future destination as something she has a right to claim - perhaps because of what she has sacrificed or endured. This implies resilience and a refusal to accept defeat. The verb "looked" is steady and deliberate, contrasting with the fear suggested elsewhere in the passage. The sentence positions the mother as the emotional anchor of the piece - while the boy clings to her, she looks forward, suggesting quiet strength beneath her own fear.',
      marks: 4,
    },
    {
      question:
        'Why is it important to consider "alternative interpretations" in an evaluation question? Give an example from "The Crossing."',
      lines: 5,
      modelAnswer:
        'Considering alternative interpretations shows the examiner that you can think critically and recognise that texts can be read in more than one way, which is essential for the highest mark bands. For example, the engine that "coughed, swallowed salt water, and coughed again" could be interpreted as a symbol of hopelessness - the engine is failing, suggesting the journey may not succeed. However, an alternative interpretation is that the engine\'s persistence (it coughs but keeps going) mirrors the passengers\' determination to continue despite the danger. By exploring both readings, a student demonstrates analytical sophistication and avoids oversimplifying the text.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson targets AO4 (Evaluation) - the most challenging assessment objective for many GCSE students.',
    '"The Crossing" is deliberately emotive - be sensitive to students who may have personal connections to migration experiences.',
    'Emphasise that "to what extent" does not mean "do you agree yes or no" - it requires nuance and degree.',
    'The most common weakness is students who simply analyse without evaluating - model the difference explicitly.',
    'Gallery walk works well as a low-pressure peer learning activity; ensure anonymity if students are self-conscious.',
  ],
  targetedSkills: [
    'AO4: Evaluation',
    "AO2: Writer's methods",
    'Critical thinking',
    'Personal response',
    'Evaluative writing',
  ],
}

// ─── Lesson 5: Summarising and Synthesising Information ──────────────────────

const lesson5: LessonPlan = {
  id: 'reading-comp-05-summarising-synthesising',
  title: 'Summarising and Synthesising Information',
  text: 'Reading Comprehension',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Summarise the key ideas from a single text, distinguishing between main points and supporting details.',
    'Synthesise information from two texts by identifying similarities and differences.',
    'Write a concise summary that demonstrates clear understanding and uses own words rather than copying.',
  ],
  successCriteria: [
    'I can identify the three to four main ideas in a text and express them in my own words.',
    'I can distinguish between a main point and a supporting detail or example.',
    'I can synthesise two sources by writing about both in an integrated way rather than separately.',
    'I can write a summary response that uses connectives of comparison and contrast.',
  ],
  keywords: [
    'summarise',
    'synthesise',
    'main idea',
    'supporting detail',
    'paraphrase',
    'integrate',
    'connectives of comparison',
  ],
  starterActivity: {
    title: 'Tweet the Text',
    duration: '7 minutes',
    instructions:
      'Display a 200-word passage about the impact of plastic pollution on ocean wildlife. Students must summarise it in exactly 280 characters (a tweet). Compare three or four student tweets: which captures the main idea most accurately? Which includes unnecessary detail? Use this to discuss the skill of summarising: identifying what matters most and expressing it concisely in your own words.',
    differentiation: {
      support:
        'Students highlight the single most important sentence in the passage first, then build their tweet from it.',
      core: 'Students write the tweet independently and compare with a partner.',
      stretch:
        "Students write two versions: one that summarises the content and one that summarises the writer's attitude.",
    },
    resources: ['Plastic pollution passage on slide', 'Character count guide'],
  },
  mainActivities: [
    {
      title: 'Summarising a Single Source',
      duration: '18 minutes',
      instructions:
        'Distribute Source A:\n\n"The Digital Divide"\nAccess to the internet is no longer a luxury - it is a necessity. Yet in many parts of the country, reliable broadband remains a distant promise. Rural communities are particularly affected: while urban households enjoy average download speeds of 80 megabits per second, some villages struggle with connections slower than 5. The consequences are far-reaching. Children in these areas cannot access online learning platforms that their urban peers take for granted. Small businesses lose customers because their websites load too slowly. Elderly residents who might benefit most from online health services are the least likely to have reliable connections. The government has pledged to deliver full fibre broadband to every home by 2030, but critics argue this target is unrealistic given the cost of laying cables across remote terrain. In the meantime, the gap between the connected and the disconnected continues to widen.\n\nStudents complete a summarising grid: Column 1 - Main point (in own words); Column 2 - Supporting detail/evidence; Column 3 - Is this essential to the summary? (Yes/No). Students should identify four to five main points. Then, students write a four-sentence summary of the text. Teacher models the first sentence.',
      differentiation: {
        support:
          'Provide the four main points; students add supporting details and write the summary.',
        core: 'Students identify main points independently and write a four-sentence summary.',
        stretch:
          "Students write a summary that also captures the writer's tone and attitude, not just the factual content.",
      },
      resources: ['Source A: "The Digital Divide"', 'Summarising grid worksheet'],
    },
    {
      title: 'Synthesising Two Sources',
      duration: '22 minutes',
      instructions:
        'Distribute Source B:\n\n"Connected at Last"\nWhen the new broadband mast appeared on the hillside above Thornwick, the village threw a party. After eight years of petitions, council meetings, and strongly worded letters to the MP, they finally had reliable internet. The transformation was immediate. Sarah Okonkwo, who runs the village shop, saw her online orders triple within a month. The primary school introduced tablet-based learning for the first time. Even eighty-two-year-old Arthur Blackwell - the most vocal opponent of "all this technology nonsense" - admitted that video-calling his grandchildren in New Zealand was, in his words, "rather marvellous."\n\nBut not everyone was celebrating. Some residents worried that the mast was an eyesore, and a few feared the village would lose its character if it became too connected. "We moved here to get away from all that," said one newcomer. The debate, it seemed, was far from over.\n\nTask: Using both sources, write a summary of the differences in how the writers present the impact of internet access on rural communities. Students must refer to both sources and use comparison connectives (whereas, in contrast, however, similarly). Teacher models integrating evidence from both sources in a single paragraph. Students write two to three paragraphs independently.',
      differentiation: {
        support:
          'Provide a Venn diagram to plan similarities and differences before writing, with one example completed.',
        core: 'Students write two to three integrated paragraphs using evidence from both sources.',
        stretch:
          'Students evaluate which source presents a more convincing picture of the digital divide and explain why.',
      },
      resources: [
        'Source B: "Connected at Last"',
        'Comparison connectives word bank',
        'Venn diagram (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: "Summary vs Synthesis: What's the Difference?",
    duration: '8 minutes',
    instructions:
      'Display two student responses (prepared in advance): one that summarises Source A only, and one that synthesises both sources. Students identify the key differences and create a "top tips" list for synthesis on mini-whiteboards. Share and compile a class list.',
    differentiation: {
      support: 'Students identify two differences between the summary and the synthesis.',
      core: 'Students identify differences and create three top tips for synthesis.',
      stretch: 'Students rewrite the summary-only response to turn it into a synthesised response.',
    },
  },
  homework:
    'Find two short articles on the same topic (e.g., social media, school uniform, climate change). Write a 200-word synthesis summarising the similarities and differences in how the writers present their views.',
  worksheetQuestions: [
    {
      question:
        'What is the difference between summarising and synthesising? Explain with reference to exam questions.',
      lines: 4,
      modelAnswer:
        'Summarising means identifying the main ideas of a text and expressing them concisely in your own words, focusing on the most important points. Synthesising goes further - it means combining information from two or more texts, comparing and contrasting their ideas in an integrated way. In the AQA exam, Paper 2 Question 2 asks students to synthesise by writing about both sources together, using evidence from each to show similarities or differences. A summary focuses on one source; a synthesis weaves multiple sources together.',
      marks: 4,
    },
    {
      question:
        'Write a four-sentence summary of Source A: "The Digital Divide." Use your own words.',
      lines: 5,
      modelAnswer:
        'Internet access has become essential, but many rural areas in the country still lack reliable broadband, with some villages receiving speeds far below the urban average. This digital gap affects education, local businesses, and access to health services for elderly residents. Although the government has committed to delivering full broadband coverage by 2030, many doubt whether this is achievable due to the expense of reaching remote locations. As a result, the inequality between connected urban areas and disconnected rural communities continues to grow.',
      marks: 4,
    },
    {
      question:
        'Using both Source A and Source B, summarise the differences in how the writers present the impact of the internet on rural communities.',
      lines: 8,
      modelAnswer:
        "Source A presents the lack of internet as a serious problem with wide-reaching consequences, focusing on the negative impact on children's education, small businesses, and elderly residents' access to health services. The tone is concerned and urgent, emphasising the growing \"gap\" between urban and rural areas. In contrast, Source B presents the arrival of internet as a largely positive transformation, using specific examples such as the village shop's tripled online orders and the school's new tablet-based learning. However, Source B also acknowledges some opposition, with residents worried about the visual impact of the mast and the loss of village character. While Source A focuses on the damage caused by disconnection, Source B explores both the benefits and tensions that come with connection. Both sources agree that internet access is a significant issue for rural communities, but they approach it from opposite ends - one lamenting its absence, the other examining the complexity of its arrival.",
      marks: 8,
    },
    {
      question:
        'Why is it important to use your own words when summarising rather than copying from the text?',
      lines: 3,
      modelAnswer:
        'Using your own words demonstrates that you have genuinely understood the text, not just located relevant sections. Paraphrasing requires you to process the information and express it in a way that shows comprehension. In the exam, copying directly from the source suggests a surface-level reading and limits marks, whereas a clear paraphrase shows the examiner that you can interpret and reformulate ideas - a higher-order skill.',
      marks: 3,
    },
    {
      question:
        'Identify two connectives of comparison and two connectives of contrast. Write a sentence using one of each, based on the two sources.',
      lines: 4,
      modelAnswer:
        'Connectives of comparison: similarly, likewise, both, in the same way. Connectives of contrast: however, whereas, in contrast, on the other hand. Example using comparison: "Both sources acknowledge that internet access significantly affects rural communities\' daily lives." Example using contrast: "Whereas Source A focuses on the ongoing lack of broadband as a barrier to progress, Source B shows that the arrival of connectivity can bring unexpected tensions alongside its benefits."',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson directly prepares students for AQA Paper 2 Question 2 (synthesis) - make the exam link explicit.',
    'The "Tweet the Text" starter works well for engagement but ensure students understand that brevity is not the same as superficiality.',
    'Common error: students write about Source A in one paragraph and Source B in another without integrating. Model integration explicitly.',
    'Source B deliberately includes some tension and nuance - use this to discuss how synthesis must capture complexity, not just agreement.',
    'If students struggle with paraphrasing, spend additional time modelling how to change vocabulary and sentence structure while keeping meaning.',
  ],
  targetedSkills: [
    'AO1: Summarising',
    'AO1: Synthesising',
    'Paraphrasing',
    'Comparison writing',
    'Information selection',
  ],
}

// ─── Lesson 6: Understanding Viewpoint and Perspective ───────────────────────

const lesson6: LessonPlan = {
  id: 'reading-comp-06-viewpoint-perspective',
  title: 'Understanding Viewpoint and Perspective',
  text: 'Reading Comprehension',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    "Identify a writer's viewpoint, distinguishing between explicit statements and implied attitudes.",
    'Analyse how writers use language, tone, and structure to convey their perspective on a topic.',
    "Explain how a writer's background, purpose, and audience influence their viewpoint.",
  ],
  successCriteria: [
    "I can identify a writer's viewpoint and express it in a clear sentence.",
    "I can find at least three pieces of evidence that reveal the writer's attitude.",
    "I can explain how the writer's choice of language and tone conveys their perspective.",
    'I can consider how purpose and audience shape the viewpoint presented in a text.',
  ],
  keywords: [
    'viewpoint',
    'perspective',
    'bias',
    'tone',
    'attitude',
    'purpose',
    'audience',
    'register',
  ],
  starterActivity: {
    title: 'Same Event, Different Viewpoints',
    duration: '8 minutes',
    instructions:
      'Display two short original headlines about the same fictional event - a new skate park being built in a town:\n\nHeadline A: "Council Invests \u00A32 Million in Youth Facilities: New Skate Park to Transform Neglected Site"\nHeadline B: "Taxpayers Foot \u00A32 Million Bill for Concrete Eyesore as Residents\' Concerns Ignored"\n\nStudents discuss in pairs: What is each writer\'s viewpoint? How do you know? Which words reveal the attitude? Use this to establish that viewpoint is conveyed through language choices, not just through direct statements of opinion.',
    differentiation: {
      support:
        'Highlight the key words in each headline that reveal the viewpoint (e.g., "invests" vs "foot the bill").',
      core: 'Students identify the viewpoint and three language clues in each headline.',
      stretch:
        'Students discuss who the intended audience might be for each headline and how this shapes the language used.',
    },
    resources: ['Headlines on display slide'],
  },
  mainActivities: [
    {
      title: 'Tracking Viewpoint Through a Full Text',
      duration: '22 minutes',
      instructions:
        'Distribute the following original opinion article:\n\n"Why School Uniforms Must Go"\nEvery morning, thousands of young people across the country perform the same joyless ritual: they pull on identical blazers, knot identical ties, and file into schools where individuality is treated as a threat. We are told that uniforms promote equality, but this is a convenient myth. The child in a fraying second-hand blazer knows she is not equal to the child whose parents bought new. We are told that uniforms prepare students for the workplace, but the modern workplace increasingly values creativity, self-expression, and independent thought - the very qualities that a rigid dress code suppresses.\n\nWhat school uniforms actually teach is compliance. They teach young people that conformity is more important than comfort, that authority should not be questioned, and that how you look matters more than how you think. If we truly valued our students as individuals, we would trust them to dress themselves.\n\nStudents complete a viewpoint tracking sheet: 1) What is the writer\'s overall viewpoint? (one sentence) 2) Find four quotations that reveal this viewpoint. 3) For each quotation, explain HOW the language conveys the attitude (e.g., word choice, rhetorical techniques, tone). 4) What is the writer\'s purpose and who is their intended audience? Teacher models the first quotation analysis.',
      differentiation: {
        support:
          'Provide the viewpoint statement and two pre-selected quotations; students find two more and explain all four.',
        core: 'Students complete the full tracking sheet independently.',
        stretch:
          'Students identify where the writer addresses and dismisses counter-arguments, and explain how this rhetorical strategy strengthens the viewpoint.',
      },
      resources: [
        'Opinion article: "Why School Uniforms Must Go"',
        'Viewpoint tracking sheet',
        'Pre-selected quotations (support tier)',
      ],
    },
    {
      title: 'Viewpoint and Counter-Viewpoint Writing',
      duration: '18 minutes',
      instructions:
        "Challenge: students write a 150-word response from the OPPOSITE viewpoint - defending school uniforms. They must use at least three deliberate language techniques to convey their perspective (e.g., emotive language, rhetorical questions, direct address, anecdote). After writing, students swap with a partner who identifies the three techniques and evaluates which is most effective at conveying the viewpoint. Brief whole-class feedback: did the counter-viewpoint change anyone's mind?",
      differentiation: {
        support:
          'Provide a writing frame with sentence starters: "Contrary to popular belief... Furthermore... It is precisely because..."',
        core: 'Students write independently using three deliberate techniques, annotated in the margin.',
        stretch:
          'Students attempt to write in a specific register (e.g., formal newspaper editorial) and explain how register reinforces viewpoint.',
      },
      resources: ['Writing frame (support tier)', 'Techniques checklist'],
    },
  ],
  plenaryActivity: {
    title: 'Viewpoint in One Sentence',
    duration: '7 minutes',
    instructions:
      'Each student writes one sentence summarising the original writer\'s viewpoint using this structure: "The writer believes that... and conveys this through..." Read five examples aloud. Discuss: which captures the viewpoint most precisely? Why is it important to be able to identify viewpoint quickly in the exam?',
    differentiation: {
      support: 'Provide the sentence structure as a frame with blanks to fill.',
      core: 'Students write the sentence independently.',
      stretch:
        'Students add a second sentence evaluating how successfully the viewpoint is conveyed.',
    },
  },
  homework:
    "Find an opinion article online or in a newspaper. Identify the writer's viewpoint in one sentence and select three quotations that reveal it. For one quotation, write a short analytical paragraph explaining how the language conveys the viewpoint.",
  worksheetQuestions: [
    {
      question: 'What is a writer\'s "viewpoint"? How is it different from the topic of a text?',
      lines: 4,
      modelAnswer:
        "A writer's viewpoint is their attitude, opinion, or perspective on a subject - it is what they think and feel about the topic, not simply what the topic is. For example, the topic of the article is school uniforms, but the viewpoint is that school uniforms suppress individuality and should be abolished. A topic is neutral; a viewpoint involves a position or judgement. Identifying the viewpoint requires looking at the writer's language choices, tone, and the arguments they choose to include or exclude.",
      marks: 3,
    },
    {
      question:
        'How does the writer of "Why School Uniforms Must Go" use language to present school uniforms negatively? Refer to two specific examples.',
      lines: 6,
      modelAnswer:
        'The writer describes the morning routine of wearing uniform as a "joyless ritual," using the adjective "joyless" to strip away any positive associations and the noun "ritual" to suggest mindless, repetitive behaviour rather than purposeful action. This presents uniforms as oppressive rather than practical. The writer also uses the triplet "conformity is more important than comfort, that authority should not be questioned, and that how you look matters more than how you think" to build a sense of accumulating injustice. The tricolon structure creates a rhetorical rhythm that makes the argument feel emphatic and irrefutable, while the contrasts within each clause (conformity/comfort, authority/questioning, appearance/thought) position uniforms as consistently prioritising the wrong values.',
      marks: 6,
    },
    {
      question:
        'The writer says: "We are told that uniforms promote equality, but this is a convenient myth." Analyse this sentence.',
      lines: 5,
      modelAnswer:
        'The phrase "we are told" uses the passive voice to suggest that the argument for uniforms comes from an unnamed authority - it distances the writer from the claim and implies the public is being lectured to without evidence. The word "convenient" suggests the equality argument is used because it is easy, not because it is true, implying laziness or dishonesty in those who defend uniforms. "Myth" is a powerful noun choice - it categorises the equality claim as a fiction, a story people have agreed to believe despite evidence to the contrary. The overall effect is to undermine the opposition\'s strongest argument before they can make it.',
      marks: 4,
    },
    {
      question: "How does the writer's purpose influence the viewpoint presented in this article?",
      lines: 4,
      modelAnswer:
        'The writer\'s purpose is to argue and persuade - they want the reader to agree that school uniforms should be abolished. This purpose means the viewpoint is presented as strongly and one-sidedly as possible. The writer includes counter-arguments ("We are told...") only to dismiss them, and uses emotive and rhetorical language to make the case feel urgent and morally clear. If the purpose were to inform rather than persuade, the viewpoint would be more balanced and the language more neutral.',
      marks: 4,
    },
    {
      question:
        'Write 100 words defending school uniforms. Use at least two language techniques to convey a positive viewpoint.',
      lines: 8,
      modelAnswer:
        'School uniforms are not a restriction - they are a foundation. When every student wears the same blazer, the playing field is levelled: nobody is judged by the brand on their trainers or the price tag on their jacket. Is it not better to be valued for your ideas than your outfit? Uniforms teach young people a vital lesson about professional presentation, one that will serve them throughout their careers. Schools that have removed uniform policies have seen a rise in peer pressure, bullying over clothing, and distraction from learning. The evidence is clear: uniforms do not suppress individuality - they protect it by removing the superficial criteria by which teenagers so often judge one another.',
      marks: 6,
    },
  ],
  teacherNotes: [
    'This lesson prepares students for AQA Paper 2 Questions 3 and 4, where identifying and analysing viewpoint is essential.',
    'The headline starter is effective for showing that viewpoint is embedded in language choices - return to it as a reference point.',
    'School uniforms is a topic all students have an opinion on - use this to demonstrate that strong evaluation requires engaging with opposing views.',
    'Encourage students to avoid conflating "viewpoint" with "bias" - all texts have a viewpoint, but not all are biased.',
    'The counter-viewpoint writing task also serves as AO5/AO6 practice for the writing section.',
  ],
  targetedSkills: [
    'AO3: Comparison of viewpoints',
    'AO2: Language analysis',
    'Critical reading',
    'Persuasive writing',
    'Rhetorical analysis',
  ],
}

// ─── Lesson 7: Comparing Writers' Viewpoints ─────────────────────────────────

const lesson7: LessonPlan = {
  id: 'reading-comp-07-comparing-viewpoints',
  title: "Comparing Writers' Viewpoints",
  text: 'Reading Comprehension',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Compare the viewpoints and perspectives of two writers on a shared topic.',
    'Analyse how different writers use methods to convey contrasting attitudes.',
    'Write a structured comparison that integrates evidence from both texts and uses comparative language throughout.',
  ],
  successCriteria: [
    'I can identify the viewpoint of each writer and express the key similarity or difference.',
    'I can select relevant evidence from both texts to support my comparison.',
    "I can analyse how each writer's methods contribute to their viewpoint.",
    'I can write a comparison that moves between texts fluidly rather than treating them separately.',
  ],
  keywords: [
    'compare',
    'contrast',
    'viewpoint',
    'perspective',
    'methods',
    'similarly',
    'conversely',
    'whereas',
  ],
  starterActivity: {
    title: 'Spot the Difference: Two Openings',
    duration: '7 minutes',
    instructions:
      'Display two opening sentences on the same topic - zoos:\n\nWriter A: "Zoos are living museums, carefully designed sanctuaries where endangered species are given a second chance at survival."\nWriter B: "A zoo is a prison with a gift shop - a place where wild animals pace concrete enclosures so that families can eat ice cream and pretend they are learning about nature."\n\nStudents discuss: What is each writer\'s viewpoint? How does the LANGUAGE reveal it? Identify specific word choices (e.g., "sanctuaries" vs "prison"; "given a second chance" vs "pace concrete enclosures"). Establish that comparison requires analysing HOW viewpoints differ, not just WHAT they say.',
    differentiation: {
      support:
        'Teacher underlines key words in each sentence; students discuss what each word suggests.',
      core: 'Students identify three language differences and explain what each reveals about the viewpoint.',
      stretch:
        'Students discuss which opening is more persuasive and why, considering rhetorical effectiveness.',
    },
    resources: ['Opening sentences on display slide'],
  },
  mainActivities: [
    {
      title: 'Analysing Two Full Texts: Planning the Comparison',
      duration: '22 minutes',
      instructions:
        'Distribute both texts:\n\nSource A - "In Defence of the High Street" (Letter to a local newspaper)\nDear Editor,\nI write in response to last week\'s article celebrating the arrival of yet another online shopping giant\'s warehouse on the outskirts of our town. The article described this as "progress." I call it a death sentence for the high street. For thirty-two years, I have run a bookshop on Market Lane. I know my customers by name. I recommend books based on conversations, not algorithms. When Mrs Patterson\'s husband died, she came in every Thursday not to buy a book but because she needed somewhere to go. Try getting that from a website. The high street is not just a row of shops - it is the heart of a community. When it dies, something irreplaceable goes with it.\nYours faithfully,\nDavid Somerfield\n\nSource B - "Why the High Street Had to Change" (Online blog post)\nI understand the nostalgia. I grew up in a town with a butcher, a baker, and - yes - a candlestick maker. But let\'s be honest: the high street was already failing long before online shopping arrived. Rents were too high, parking was impossible, and the selection was limited. I don\'t mourn the loss of queuing in the rain to buy a single item I could have ordered from my sofa in thirty seconds. The truth is, online retail is more convenient, more competitive, and more accessible - particularly for disabled people, shift workers, and those in rural areas who never had a thriving high street to begin with. Progress isn\'t always comfortable, but it is necessary.\n\nStudents complete a comparison planning grid: Column 1 - Point of comparison (e.g., attitude to change, tone, use of personal experience); Column 2 - Source A evidence and method; Column 3 - Source B evidence and method; Column 4 - Comparison connective. Students identify at least four points of comparison.',
      differentiation: {
        support:
          'Provide three points of comparison already identified; students find evidence for each.',
        core: 'Students identify four points of comparison with evidence and methods for each.',
        stretch:
          'Students also consider how the form of each text (letter vs blog) influences the viewpoint and tone.',
      },
      resources: [
        'Source A and Source B handouts',
        'Comparison planning grid',
        'Connectives word bank',
      ],
    },
    {
      title: 'Writing the Comparison: Integrated Paragraphs',
      duration: '20 minutes',
      instructions:
        'Teacher models one integrated comparison paragraph on the board, showing how to move between texts within a single paragraph rather than writing about them separately. Structure: Point \u2192 Source A evidence and analysis \u2192 Comparison connective \u2192 Source B evidence and analysis \u2192 Overall comparative comment.\n\nStudents write two to three comparison paragraphs using their planning grid. Emphasise: every paragraph must reference both texts and use a comparison connective. Teacher circulates, particularly supporting students who default to writing about each source in isolation.',
      differentiation: {
        support:
          'Provide a paragraph frame: "[Point]. In Source A, [writer] uses [method/quotation], which suggests... In contrast, Source B [method/quotation], which creates a different effect because..."',
        core: 'Students write two to three integrated paragraphs independently.',
        stretch:
          'Students write a concluding paragraph evaluating which writer presents a more convincing argument, explaining why with reference to methods.',
      },
      resources: ['Paragraph frame (support tier)', 'Comparison connectives reference sheet'],
    },
  ],
  plenaryActivity: {
    title: 'One-Sentence Comparison Challenge',
    duration: '6 minutes',
    instructions:
      "Students write one sentence that captures the core difference between the two writers' viewpoints. Must include: both writers, a comparison connective, and a reference to method. Read five examples aloud and vote on the most precise. Display the winning sentence as a model.",
    differentiation: {
      support:
        'Provide the structure: "While Writer A [viewpoint] through [method], Writer B [viewpoint] using [method]."',
      core: 'Students craft the sentence independently.',
      stretch:
        'Students write a sentence that also captures a subtle similarity beneath the surface difference.',
    },
  },
  homework:
    'Write a full comparison response (300-400 words) to the question: "Compare how the writers of Source A and Source B present their attitudes to change." Use at least three points of comparison with evidence from both texts.',
  worksheetQuestions: [
    {
      question: 'What are the main viewpoints of each writer? Summarise each in one sentence.',
      lines: 3,
      modelAnswer:
        'Writer A (David Somerfield) believes that the high street is the heart of the community and that its decline represents an irreplaceable loss of human connection and local identity. Writer B believes that the decline of the high street is an inevitable and ultimately positive form of progress, as online shopping is more convenient, competitive, and accessible.',
      marks: 2,
    },
    {
      question: 'Compare how the two writers use personal experience to support their viewpoints.',
      lines: 8,
      modelAnswer:
        'Both writers draw on personal experience, but they use it to very different effect. Writer A uses a specific, emotive anecdote about Mrs Patterson, who came to his bookshop after her husband died "not to buy a book but because she needed somewhere to go." This presents the high street as a place of human connection that cannot be replicated online, and the personal nature of the story gives it emotional authenticity. In contrast, Writer B references a more generic personal memory - "I grew up in a town with a butcher, a baker" - using a playful allusion to the nursery rhyme to acknowledge nostalgia while simultaneously suggesting it is sentimental and childlike. Writer B\'s personal experience is used to dismiss emotional attachment rather than to build it, which reinforces their rational, forward-looking viewpoint. The contrast in how each writer deploys personal experience reflects their wider difference: Writer A values feeling and community, while Writer B prioritises logic and practicality.',
      marks: 8,
    },
    {
      question:
        'Analyse how tone differs between the two sources. Refer to specific language choices.',
      lines: 6,
      modelAnswer:
        'Writer A\'s tone is passionate and defiant - phrases like "I call it a death sentence" use violent imagery to convey the urgency of the threat, while "try getting that from a website" is a direct, almost confrontational challenge to the reader. The tone is personal and emotionally charged. Writer B\'s tone is more measured and reasonable, using phrases like "let\'s be honest" and "I understand the nostalgia" to position themselves as fair-minded and pragmatic. However, there is also a subtle dismissiveness - "queuing in the rain to buy a single item" reduces the high-street experience to its least appealing elements. The tonal contrast reflects their viewpoints: Writer A speaks from the heart; Writer B appeals to the head.',
      marks: 6,
    },
    {
      question:
        'How does the form of each text (letter vs blog) influence the viewpoint presented?',
      lines: 5,
      modelAnswer:
        'Writer A\'s text is a formal letter to a newspaper editor, which gives it a public, civic quality - the writer is addressing the community and asking to be heard, positioning the high-street debate as a matter of local importance. The letter format also lends personal authority ("For thirty-two years, I have run a bookshop"). Writer B\'s text is a blog post, which allows a more conversational, informal tone - the use of contractions ("let\'s," "don\'t"), direct address, and listing ("more convenient, more competitive, more accessible") suits the fast-paced, persuasive style of online writing. The blog form also implies a modern, digitally fluent writer, which subtly reinforces the pro-technology viewpoint.',
      marks: 4,
    },
    {
      question:
        'Which writer do you find more convincing? Justify your response with reference to methods used in both sources.',
      lines: 6,
      modelAnswer:
        "While both writers make valid points, I find Writer A more convincing because the specific, human detail of the Mrs Patterson anecdote makes the argument emotionally compelling in a way that Writer B's more abstract reasoning does not match. Writer A demonstrates concretely what would be lost if the high street disappeared - not just shops, but a place of belonging. Writer B's argument is logically sound but relies on generalisation (\"the high street was already failing\") without providing specific evidence. However, Writer B's acknowledgement of accessibility for disabled people and rural communities is a powerful point that Writer A does not address, which adds genuine substance to the pro-change argument. Overall, Writer A's combination of personal testimony and emotional specificity creates a more memorable and persuasive case.",
      marks: 6,
    },
  ],
  teacherNotes: [
    'This lesson directly targets AQA Paper 2 Question 4 - the highest-tariff reading question.',
    'The most common weakness is writing about each text separately. Drill the integrated paragraph structure throughout.',
    'The high-street topic is accessible and allows students to form genuine opinions, which supports personal response (AO4).',
    'Model how to "zoom in" on individual words while maintaining the comparative frame - students tend to lose the comparison when analysing closely.',
    "Extension: discuss how the writers' different forms (letter vs blog) might reflect different generational relationships with technology.",
  ],
  targetedSkills: [
    'AO3: Comparing viewpoints',
    'AO2: Analysing methods',
    'Comparative writing',
    'Evidence integration',
    'Evaluative response',
  ],
}

// ─── Lesson 8: Analysing Non-Fiction Texts ───────────────────────────────────

const lesson8: LessonPlan = {
  id: 'reading-comp-08-non-fiction-analysis',
  title: 'Analysing Non-Fiction Texts',
  text: 'Reading Comprehension',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and analyse the conventions of different non-fiction forms, including speeches, articles, letters, and travel writing.',
    'Evaluate how writers of non-fiction use rhetorical and persuasive techniques to position the reader.',
    'Analyse how purpose, audience, and form shape the language and structure of non-fiction texts.',
  ],
  successCriteria: [
    'I can identify the form, purpose, and audience of an unseen non-fiction text.',
    'I can name and analyse at least four rhetorical or persuasive techniques used in a non-fiction text.',
    'I can explain how the writer positions the reader to accept a particular viewpoint.',
    "I can write an analytical response that connects techniques to the writer's overall purpose.",
  ],
  keywords: [
    'non-fiction',
    'rhetoric',
    'persuasion',
    'form',
    'purpose',
    'audience',
    'ethos',
    'pathos',
    'logos',
    'direct address',
    'anecdote',
  ],
  starterActivity: {
    title: 'PAF in 60 Seconds',
    duration: '7 minutes',
    instructions:
      'Display four short text extracts (2-3 sentences each): (1) a speech opening, (2) a travel writing description, (3) a newspaper editorial, (4) a charity appeal letter. Students identify the Purpose, Audience, and Form of each in 60 seconds per text on mini-whiteboards. Quick-fire feedback. Teacher emphasises: understanding PAF before you analyse helps you interpret WHY the writer makes specific language choices.',
    differentiation: {
      support: 'Provide a PAF reference card with definitions and examples of each element.',
      core: 'Students identify PAF for all four texts independently.',
      stretch:
        'Students predict what language techniques each text is likely to use, based on its PAF profile.',
    },
    resources: [
      'Four text extracts on slide',
      'Mini-whiteboards',
      'PAF reference card (support tier)',
    ],
  },
  mainActivities: [
    {
      title: 'Rhetorical Analysis: Dissecting a Speech',
      duration: '22 minutes',
      instructions:
        'Distribute the following original speech extract:\n\n"A Future Worth Fighting For" - Speech to a school assembly by a fictional young climate activist\nThree weeks ago, I stood on a beach in Cornwall and watched a seal tangled in a fishing net struggle to breathe. I did not film it. I did not post it. I stood there, and I felt the kind of shame that does not wash off. Because that seal did not tangle itself. We did that. You and I - with our convenience, our plastic, our wilful refusal to look at what we throw away.\n\nI am sixteen years old. I am told I am too young to understand economics, too young to challenge policy, too young to be taken seriously. But I am not too young to inherit the consequences. None of us are. The science is not complicated: we are running out of time. Not in some distant, abstract future that belongs to someone else - now. This decade. Our decade.\n\nSo I am not here to ask you politely. I am here to tell you that the world is on fire, and we are holding the matches.\n\nStudents work through a structured analysis grid: (1) Identify the rhetorical technique, (2) Copy the quotation, (3) Explain the effect on the audience, (4) Link to purpose. Teacher models the first row using the anecdote about the seal. Students complete at least five rows. Introduce ethos (credibility), pathos (emotion), and logos (logic) as categories for rhetorical appeal - students classify each technique they found.',
      differentiation: {
        support:
          'Provide the technique names in a word bank; students match them to quotations and explain effects.',
        core: 'Students identify five techniques independently, explain effects, and classify as ethos, pathos, or logos.',
        stretch:
          'Students analyse how the speech builds in intensity structurally - from personal anecdote to collective accusation to call to action - and explain why this structure is persuasive.',
      },
      resources: [
        'Speech text: "A Future Worth Fighting For"',
        'Analysis grid',
        'Rhetorical techniques word bank (support tier)',
        'Ethos/Pathos/Logos reference sheet',
      ],
    },
    {
      title: 'Comparing Non-Fiction Forms: Article vs Speech',
      duration: '20 minutes',
      instructions:
        'Distribute a second text - an original newspaper article on the same topic:\n\n"The Cost of Going Green" - Editorial column\nIt has become fashionable, in certain circles, to declare a climate emergency while continuing to fly to conferences about climate emergencies. The hypocrisy is almost admirable in its brazenness. This week, the government announced a new round of environmental targets - ambitious on paper, vague on detail, and utterly silent on the question of who will pay. Because someone always pays. The solar panels on suburban roofs are subsidised by taxes that fall hardest on those who cannot afford solar panels. The ban on diesel cars sounds progressive until you realise it will strand the nurse, the delivery driver, the shift worker - the very people the progressive crowd claim to champion. Green policy, as currently conceived, is a luxury belief: easy to hold if you are wealthy enough not to feel the consequences.\n\nStudents compare: How does the article\'s approach to the same topic differ from the speech? Focus on: tone (passionate vs sardonic), audience (students vs newspaper readers), technique (emotional appeal vs irony and logical challenge), and purpose (inspire action vs provoke critical thought). Students write one comparison paragraph connecting form to method.',
      differentiation: {
        support:
          'Provide a comparison table with headings (tone, audience, technique, purpose) - students fill in evidence for each text.',
        core: 'Students complete the comparison table and write one integrated comparison paragraph.',
        stretch:
          "Students evaluate which text is more effective at challenging the reader's assumptions and explain why, with specific reference to form and method.",
      },
      resources: [
        'Article text: "The Cost of Going Green"',
        'Comparison table',
        'Paragraph frame (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Ethos, Pathos, or Logos?',
    duration: '6 minutes',
    instructions:
      'Display six quotations from both texts (mixed). Students hold up E, P, or L cards to classify each. Discuss any disagreements - some quotations may use more than one type of appeal. Key takeaway: effective non-fiction writers blend all three.',
    differentiation: {
      support: 'Students classify with the help of a partner.',
      core: 'Students classify independently and explain their reasoning for one.',
      stretch:
        'Students identify a quotation that uses two types of appeal simultaneously and explain how.',
    },
  },
  homework:
    'Find a real speech, opinion column, or charity appeal. Identify five rhetorical techniques, classify each as ethos, pathos, or logos, and write one analytical paragraph on the most effective technique.',
  worksheetQuestions: [
    {
      question:
        'Define ethos, pathos, and logos. Give one example of each from the speech "A Future Worth Fighting For."',
      lines: 6,
      modelAnswer:
        'Ethos is an appeal to credibility or character - the speaker establishes this by describing a personal, witnessed experience ("I stood on a beach in Cornwall and watched a seal"), positioning herself as someone who has seen the problem firsthand. Pathos is an appeal to emotion - the description of the seal struggling to breathe creates sympathy and horror, while the phrase "the kind of shame that does not wash off" evokes guilt in the audience. Logos is an appeal to logic or reason - "The science is not complicated: we are running out of time" presents the argument as factual and irrefutable, using the authority of scientific consensus to support the claim.',
      marks: 6,
    },
    {
      question:
        'How does the speaker use the pronoun "we" to position the audience? Analyse its effect.',
      lines: 5,
      modelAnswer:
        'The speaker shifts between "I" and "we" to create a sense of collective responsibility. The accusation "We did that. You and I" directly implicates the audience, refusing to let them remain passive observers. By including herself in the blame ("our convenience, our plastic"), the speaker avoids sounding preachy and instead creates solidarity - she is not above the problem. Later, "Our decade" uses the possessive "our" to give the audience ownership of both the crisis and the potential solution. The pronoun shift is a deliberate rhetorical strategy that moves the audience from bystanders to participants.',
      marks: 4,
    },
    {
      question:
        'Analyse the tone of the editorial "The Cost of Going Green." How does it differ from the speech?',
      lines: 6,
      modelAnswer:
        'The editorial\'s tone is sardonic, sceptical, and deliberately provocative. The opening sentence drips with irony - "It has become fashionable... to declare a climate emergency while continuing to fly to conferences about climate emergencies" - attacking the perceived hypocrisy of environmental campaigners. The phrase "the hypocrisy is almost admirable in its brazenness" uses mock-praise to sharpen the criticism. This contrasts sharply with the speech, whose tone is earnest, urgent, and emotionally raw. Where the speech uses shame and passion to motivate, the editorial uses wit and logical challenge to provoke critical thinking. The tonal difference reflects their different forms and audiences: a speech to young people demands emotional sincerity, while a newspaper editorial for adult readers uses intellectual provocation.',
      marks: 6,
    },
    {
      question:
        'What does the editorial writer mean by calling green policy a "luxury belief"? Evaluate this claim.',
      lines: 5,
      modelAnswer:
        'A "luxury belief" is an idea that is easy to support if you are wealthy or privileged but which has negative consequences for those who are not. The writer uses this term to argue that environmental policies like banning diesel cars or subsidising solar panels benefit the affluent while burdening working-class people who cannot afford electric vehicles or home renovations. This is a provocative claim that forces the reader to consider the class dimensions of climate policy. While it raises a legitimate concern about fairness, one could counter-argue that the consequences of inaction on climate change will also fall hardest on the poorest communities - so the "luxury" may actually be the luxury of ignoring the problem.',
      marks: 4,
    },
    {
      question:
        'How does the structure of the speech build towards its final sentence? Explain the effect on the audience.',
      lines: 5,
      modelAnswer:
        'The speech moves from personal anecdote (the seal) to collective guilt ("We did that") to a challenge of authority ("I am told I am too young") to a statement of urgency ("we are running out of time") and finally to the metaphor "the world is on fire, and we are holding the matches." This structural progression escalates intensity - each section raises the emotional stakes. The final metaphor serves as a call to action that is also an accusation: "we" are not just witnesses to destruction but its cause. The short, punchy final sentence contrasts with the longer, more reflective paragraphs before it, giving it the force of a conclusion that cannot be argued with.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson covers AO2 and AO3 for non-fiction - students must analyse methods AND connect them to purpose, audience, and form.',
    'The speech is deliberately written in the style of contemporary youth activism - discuss how this register affects credibility and tone.',
    'The editorial deliberately uses a contrarian, intellectually combative style - some students may find it uncomfortable. Use this as a teaching moment about how writers can position readers against their instincts.',
    'Ethos/pathos/logos is a useful framework but should not become a rigid checklist - encourage students to see how appeals overlap.',
    'If time allows, discuss the ethics of rhetorical persuasion: when does persuasion become manipulation?',
  ],
  targetedSkills: [
    'AO2: Language and structure analysis',
    'AO3: Purpose, audience, form',
    'Rhetorical analysis',
    'Comparative skills',
    'Critical evaluation',
  ],
}

// ─── Lesson 9: Approaching Multi-Source Questions ────────────────────────────

const lesson9: LessonPlan = {
  id: 'reading-comp-09-multi-source-questions',
  title: 'Approaching Multi-Source Questions',
  text: 'Reading Comprehension',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Develop a systematic approach to reading and responding to multi-source exam questions.',
    'Practise time management across a full reading paper with multiple sources and questions.',
    'Apply summarising, analysing, and comparing skills in combination when working with two sources.',
  ],
  successCriteria: [
    'I can read two sources efficiently and identify the key information and viewpoints in each within a set time.',
    'I can match each question to the correct source(s) and the relevant assessment objective.',
    'I can plan and write responses that move between sources fluidly.',
    'I can allocate time appropriately across four questions of different tariffs.',
  ],
  keywords: [
    'multi-source',
    'time management',
    'question decoding',
    'mark allocation',
    'assessment objectives',
    'retrieval',
    'analysis',
    'comparison',
  ],
  starterActivity: {
    title: 'Question Decoding: What Is Each Question Actually Asking?',
    duration: '8 minutes',
    instructions:
      'Display four AQA Paper 2-style questions (without the sources). Students decode each: (1) How many sources does it refer to? (2) What skill is being tested? (3) How many marks is it worth? (4) How much time should I spend? Use a colour-coding system: blue = retrieval, green = analysis, orange = synthesis, red = comparison/evaluation. Students record the time allocation for each question based on marks (roughly 1 minute per mark plus planning time). Key takeaway: read the questions BEFORE the sources so you know what to look for.',
    differentiation: {
      support: 'Provide a question decoding template with prompts for each column.',
      core: 'Students decode all four questions independently and calculate time allocations.',
      stretch:
        'Students predict what the highest-scoring response to each question would need to include.',
    },
    resources: ['Paper 2 questions on slide', 'Question decoding template', 'Timer'],
  },
  mainActivities: [
    {
      title: 'Strategic Reading: Two Sources Under Timed Conditions',
      duration: '15 minutes',
      instructions:
        'Distribute two original sources:\n\nSource A - "The View from the Summit" (19th-century-style travel writing)\nWe reached the summit at a quarter past eleven, though time seemed an inadequate measure of what we had endured. The final ascent - a punishing scramble over loose shale that shifted treacherously beneath our boots - had taken the better part of two hours. My companion, Harding, who had spoken little since breakfast, sat heavily upon a rock and declared that he could see three counties. I could see only cloud. Yet when the wind shifted and the mist parted, as if drawing back a curtain upon a stage, the valley below revealed itself in all its extraordinary breadth: green fields stitched together by hedgerows, a silver thread of river, and, far distant, the grey suggestion of the sea. For a long moment, neither of us spoke. There are sights for which language is an imposition.\n\nSource B - "Why I Stopped Climbing Mountains" (Modern blog post)\nI used to love hiking. The early starts, the flasks of bad coffee, the satisfying ache in your calves that told you the hill was winning. I did the Three Peaks Challenge at twenty-three and felt invincible for approximately forty-five minutes before my knees reminded me that invincibility is a young person\'s delusion.\n\nBut last year, something changed. I stood at the top of Snowdon - sorry, Yr Wyddfa - surrounded by two hundred other people in matching waterproofs, queuing for a selfie by the cairn. A drone buzzed overhead. Someone was livestreaming. And I thought: this is not an adventure. This is a theme park with altitude.\n\nI have not climbed a mountain since. I walk along canals now. It is quieter. Nobody livestreams a canal.\n\nStudents have 10 minutes to read both sources using the strategic reading process: (1) Read the questions first (displayed on board), (2) Skim both sources for gist, (3) Annotate each source for the specific question that relates to it. Teacher times each stage.',
      differentiation: {
        support:
          'Provide colour-coded highlighting instructions: "Highlight language features in yellow, viewpoint clues in blue."',
        core: 'Students annotate independently using the three-stage reading process.',
        stretch:
          'Students note connections and contrasts between the sources in the margins as they read.',
      },
      resources: [
        'Source A and Source B handouts',
        'Questions on display',
        'Highlighters',
        'Timer',
      ],
    },
    {
      title: 'Tackling the Questions: Guided Practice',
      duration: '25 minutes',
      instructions:
        'Students work through four exam-style questions in order:\n\nQ1 (4 marks, 5 mins): List four things you learn about the climb from Source A.\nQ2 (8 marks, 10 mins): Use details from both sources to write a summary of the differences in how the writers feel about mountain climbing.\nQ3 (12 marks, 12 mins): How does the writer of Source B use language and structure to express their changing attitude to climbing?\nQ4 (16 marks, 18 mins - started in class, completed for homework): Compare how the writers of Source A and Source B present their experiences of reaching a mountain summit.\n\nTeacher sets time limits for Q1-Q3. After each question, pause for 2 minutes of feedback: what did strong responses include? Students self-assess using the mark scheme criteria displayed on the board. Q4 is begun in class (planning and first paragraph) and completed for homework.',
      differentiation: {
        support:
          'Provide sentence starters for Q2 and Q3. For Q1, underline the relevant section of Source A.',
        core: 'Students answer Q1-Q3 independently under timed conditions and begin Q4.',
        stretch:
          'Students aim for full marks on each question by consciously targeting the top-band descriptors.',
      },
      resources: [
        'Exam questions handout',
        'Mark scheme criteria display',
        'Sentence starters (support tier)',
        'Timer',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Reflection: What Went Well / Even Better If',
    duration: '7 minutes',
    instructions:
      'Students complete a self-assessment reflection: (1) Which question did I answer most confidently? Why? (2) Which question was most challenging? What specifically was difficult? (3) What will I do differently next time? Share two or three reflections. Teacher uses these to inform next lesson (full practice paper).',
    differentiation: {
      support:
        'Provide a structured reflection form with tick-box options and space for one written comment.',
      core: 'Students complete all three reflection prompts in writing.',
      stretch:
        'Students identify a specific skill gap (e.g., "I struggle to integrate both sources") and create a personal target.',
    },
  },
  homework:
    'Complete Question 4: "Compare how the writers of Source A and Source B present their experiences of reaching a mountain summit." Write 300-400 words with evidence from both sources.',
  worksheetQuestions: [
    {
      question: 'List four things you learn about the climb from Source A.',
      lines: 4,
      modelAnswer:
        '1. They reached the summit at quarter past eleven. 2. The final ascent involved scrambling over loose shale. 3. The climb took about two hours. 4. They could see three counties (or a valley with green fields, a river, and the sea) from the top when the mist cleared.',
      marks: 4,
    },
    {
      question:
        'Use details from both sources to write a summary of the differences in how the writers feel about mountain climbing.',
      lines: 8,
      modelAnswer:
        'The writer of Source A presents mountain climbing as a challenging but profoundly rewarding experience. Although the ascent is "punishing" and physically demanding, the moment when the mist clears to reveal the valley is described with awe - the view is so powerful that "language is an imposition," suggesting the experience transcends words. The writer\'s reverence for nature and the summit is clear. In contrast, the writer of Source B has become disillusioned with climbing. While they once loved hiking and felt "invincible" after the Three Peaks Challenge, their experience on Snowdon was ruined by overcrowding - "two hundred other people in matching waterproofs, queuing for a selfie." The writer now sees mountain climbing as a commercialised spectacle rather than a genuine adventure. Where Source A finds silence and wonder at the summit, Source B finds drones, livestreaming, and a "theme park with altitude."',
      marks: 8,
    },
    {
      question:
        'How does the writer of Source B use language and structure to express their changing attitude to climbing?',
      lines: 10,
      modelAnswer:
        'The writer structures the text chronologically to mirror the shift in attitude. The opening paragraph uses warm, nostalgic language - "the satisfying ache in your calves" and "flasks of bad coffee" present climbing as a pleasurable, familiar ritual. The self-deprecating humour ("felt invincible for approximately forty-five minutes") establishes a likeable, relatable voice. However, the structural pivot "But last year, something changed" signals a tonal shift. The second paragraph\'s language becomes critical and satirical: "matching waterproofs," "queuing for a selfie," and "theme park with altitude" all reduce the climbing experience to commercialised absurdity. The metaphor "theme park with altitude" is particularly effective - it strips away any sense of wilderness or achievement, comparing a mountain to a manufactured entertainment venue. The final paragraph is structurally sparse - three short sentences that mirror the simplicity the writer now prefers. "Nobody livestreams a canal" is a deadpan, humorous conclusion that reinforces the writer\'s rejection of the performative outdoor culture that ruined climbing for them.',
      marks: 12,
    },
    {
      question: 'Why is it important to read the questions before reading the sources in an exam?',
      lines: 4,
      modelAnswer:
        'Reading the questions first gives you a purpose for reading - you know what information, attitudes, or techniques to look for in each source. This makes your reading more efficient and focused, preventing wasted time. For example, if you know Question 3 asks about language in Source B, you can annotate for language features as you read rather than having to re-read later. It also helps with time management because you can gauge how long to spend on each source based on the number and type of questions attached to it.',
      marks: 3,
    },
    {
      question:
        'Explain how you would allocate your time across a Paper 2 reading section with questions worth 4, 8, 12, and 16 marks. Justify your allocation.',
      lines: 5,
      modelAnswer:
        'With approximately 60 minutes for the reading section, I would allocate time roughly in proportion to marks, with additional time for reading the sources. I would spend 5 minutes reading and annotating both sources, then: Q1 (4 marks) - 5 minutes; Q2 (8 marks) - 10 minutes; Q3 (12 marks) - 15 minutes; Q4 (16 marks) - 20 minutes; leaving 5 minutes for checking. The higher-mark questions require more detailed analysis and comparison, so they need proportionally more time. Q1 is straightforward retrieval and should be answered quickly. Q4 is the most demanding, requiring comparison of both sources with analysis of methods, so it deserves the largest time allocation.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is a skills-consolidation lesson - it brings together retrieval, summary, analysis, and comparison from previous lessons.',
    'The two sources are deliberately written in contrasting styles (formal 19th-century vs informal modern blog) to mirror the AQA Paper 2 format.',
    'Strict timing is essential - students must experience time pressure in a low-stakes environment before the real exam.',
    'Use the self-assessment reflections to identify students who need targeted support on specific question types.',
    'If students find Q4 very challenging, consider splitting it across two lessons with additional modelling.',
  ],
  targetedSkills: [
    'AO1: Retrieval and summary',
    'AO2: Language and structure analysis',
    'AO3: Comparison of viewpoints',
    'Exam technique',
    'Time management',
  ],
}

// ─── Lesson 10: Exam Practice - Full Reading Paper Under Conditions ──────────

const lesson10: LessonPlan = {
  id: 'reading-comp-10-exam-practice',
  title: 'Exam Practice: Full Reading Paper Under Conditions',
  text: 'Reading Comprehension',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Complete a full set of reading questions under timed exam conditions, applying all strategies learned.',
    'Demonstrate the ability to retrieve, analyse, summarise, compare, and evaluate across unseen texts.',
    'Self-assess responses against mark scheme criteria to identify strengths and areas for development.',
  ],
  successCriteria: [
    'I can complete all four reading questions within the allocated time.',
    'I can demonstrate retrieval, analysis, synthesis, and evaluation skills as required by each question.',
    'I can manage my time effectively, spending longer on higher-tariff questions.',
    'I can self-assess my work using the mark scheme and identify specific targets for improvement.',
  ],
  keywords: [
    'exam conditions',
    'timed practice',
    'mark scheme',
    'self-assessment',
    'retrieval',
    'analysis',
    'synthesis',
    'evaluation',
  ],
  starterActivity: {
    title: 'Pre-Exam Briefing and Strategy Recap',
    duration: '5 minutes',
    instructions:
      "Teacher delivers a brief exam strategy recap: (1) Read the questions first, (2) Skim both sources for gist, (3) Annotate as you read, (4) Allocate time by marks, (5) Leave 3-5 minutes for checking. Display the time breakdown on the board. Students write down one personal target from last lesson's reflection to focus on during the practice paper. Teacher sets expectations: silent conditions, no discussion, hand up for questions only.",
    differentiation: {
      support:
        'Provide a laminated time-management card that students can keep on their desk during the exam.',
      core: 'Students recall and apply the strategy independently.',
      stretch:
        'Students set a specific target for a higher mark band (e.g., "I will explore alternative interpretations in Q4").',
    },
    resources: ['Time breakdown display', 'Time-management cards (support tier)'],
  },
  mainActivities: [
    {
      title: 'Timed Exam Practice: Reading Paper',
      duration: '45 minutes',
      instructions:
        'Distribute the exam paper with two original sources and four questions.\n\nSource A - "The Last Bookshop" (21st-century memoir extract)\nThe shop smelled of dust and decisions. Every book on every shelf had been chosen - by me, by my mother before me, by her father before her. Three generations of readers, curating a collection that nobody seemed to want any more. I opened at nine each morning to an empty street. The coffee shop opposite had a queue; I had silence. By eleven, a browser might appear - usually elderly, usually apologetic, as if visiting a bookshop in the age of next-day delivery required an explanation. "I just prefer the feel of a real book," they would say, and I would nod and resist the urge to say: so do I, but preference does not pay the rent.\n\nThe irony was not lost on me. I spent my evenings reading about the death of independent retail on my phone, scrolling through articles that loaded in milliseconds on the same internet that was slowly strangling my livelihood. The world had decided that convenience was king, and a bookshop - with its creaking floorboards and unreliable heating - was the opposite of convenient. But it was mine. And on good days, when the light came through the front window at just the right angle and caught the gold lettering on a row of spines, I thought: there are worse hills to die on.\n\nSource B - "Why Print Books Will Outlast Us All" (Newspaper opinion piece)\nEvery year, the obituaries are written. Print is dead. Bookshops are finished. The e-reader has won. And every year, the corpse refuses to lie down. Sales of physical books have risen for the eighth consecutive year. Independent bookshops - those supposedly doomed relics of a pre-digital age - are opening at a rate not seen since the 1990s. The Kindle, once hailed as the executioner of print, now gathers dust on bedside tables across the nation, its battery dead, its novelty spent.\n\nWhy? Because a book is not merely a delivery mechanism for words. It is an object, an experience, a statement. You cannot display an e-reader on a shelf and feel that it says something about who you are. You cannot lend a downloaded file to a friend with the instruction to "read chapter six - it will change your life." The physical book endures because it offers something that technology cannot replicate: presence. It occupies space. It has weight. It smells of ink and possibility. In an age of disposable content consumed and forgotten in seconds, the book remains stubbornly, beautifully permanent.\n\nQuestions:\nQ1 (4 marks): Read Source A. List four things you learn about the bookshop from this source.\nQ2 (8 marks): Use details from both sources to write a summary of the similarities in how the writers feel about physical books.\nQ3 (12 marks): How does the writer of Source A use language and structure to convey her feelings about the bookshop?\nQ4 (16 marks): Compare how the writers of Source A and Source B convey their perspectives on the future of books and bookshops.\n\nStudents work in silence for 45 minutes. Teacher circulates to monitor time management but does not assist with content. Suggested time allocation displayed on board: Q1 = 5 mins, Q2 = 10 mins, Q3 = 12 mins, Q4 = 18 mins.',
      differentiation: {
        support:
          'Provide a time-management card and the question-strategy matching guide from Lesson 9. Allow an additional 5 minutes if needed.',
        core: 'Students complete all four questions under strict timed conditions.',
        stretch:
          'Students aim for top-band responses by including alternative interpretations and structural analysis.',
      },
      resources: [
        'Exam paper with sources and questions',
        'Time-management card (support tier)',
        'Timer display',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Peer and Self-Assessment Against the Mark Scheme',
    duration: '10 minutes',
    instructions:
      'Distribute simplified mark scheme descriptors for each question. Students first self-assess their own Q1 and Q2, checking answers against the model answers provided. Then, students swap papers with a partner and peer-assess Q3 using the mark scheme, writing one WWW (what went well) and one EBI (even better if) comment. Teacher leads a brief whole-class discussion: What was the hardest question? What would you do differently with more time? Students write one specific improvement target on a reflection slip.',
    differentiation: {
      support:
        'Teacher guides the self-assessment process step by step, modelling how to use the mark scheme.',
      core: 'Students self-assess Q1-Q2 and peer-assess Q3 independently using the mark scheme.',
      stretch:
        'Students assess their own Q4 against the top-band descriptors and identify specifically what would lift their response to the next band.',
    },
  },
  homework:
    'Review your exam responses using the mark scheme. Rewrite your weakest answer, aiming for the next mark band up. Annotate your rewrite to show what you have improved and why.',
  worksheetQuestions: [
    {
      question: 'Read Source A. List four things you learn about the bookshop from this source.',
      lines: 4,
      modelAnswer:
        '1. The bookshop has been run by three generations of the same family. 2. The shop opens at nine each morning. 3. The bookshop has creaking floorboards and unreliable heating. 4. The shop is on a street opposite a coffee shop.',
      marks: 4,
    },
    {
      question:
        'Use details from both sources to write a summary of the similarities in how the writers feel about physical books.',
      lines: 8,
      modelAnswer:
        'Both writers express a deep emotional attachment to physical books and the spaces that house them. The writer of Source A describes the bookshop with sensory warmth - "the light came through the front window at just the right angle and caught the gold lettering on a row of spines" - presenting books as objects of beauty that create meaningful experiences. Similarly, Source B argues that a book "is not merely a delivery mechanism for words" but "an object, an experience, a statement," suggesting that physical books have value beyond their content. Both writers also acknowledge the threats to physical books while refusing to accept defeat: Source A\'s narrator describes the bookshop as a "hill to die on," implying she will fight for it despite economic pressure, while Source B uses the extended metaphor of a "corpse" that "refuses to lie down" to suggest that predictions of print\'s death have been consistently wrong. Both writers see physical books as representing something permanent and irreplaceable in a world of disposable digital content.',
      marks: 8,
    },
    {
      question:
        'How does the writer of Source A use language and structure to convey her feelings about the bookshop?',
      lines: 12,
      modelAnswer:
        'The writer opens with the sensory metaphor "The shop smelled of dust and decisions," immediately establishing the bookshop as a place rich with history and personal significance. The word "decisions" personifies the curation process, suggesting that every book represents a deliberate, meaningful choice - this contrasts implicitly with the algorithmic recommendations of online retailers. Structurally, the first paragraph moves from pride in the bookshop\'s heritage to the painful reality of its decline - "I opened at nine each morning to an empty street" - and the juxtaposition with the coffee shop\'s queue emphasises the bookshop\'s isolation.\n\nThe writer uses irony in the second paragraph - she reads about the death of independent retail "on my phone," acknowledging her own participation in the digital culture that threatens her livelihood. This self-awareness makes her voice authentic and sympathetic; she is not a naive luddite but someone who understands the forces working against her. The metaphor of the internet "slowly strangling my livelihood" is violent and visceral, presenting digital commerce as a destructive force.\n\nThe final sentence - "there are worse hills to die on" - is structurally significant as it ends the passage on a note of defiant resignation. The idiom acknowledges that the bookshop may not survive, but the writer\'s willingness to fight for it anyway conveys deep emotional attachment. The overall structure moves from heritage to decline to defiance, mirroring the arc of the bookshop itself.',
      marks: 12,
    },
    {
      question:
        'Compare how the writers of Source A and Source B convey their perspectives on the future of books and bookshops.',
      lines: 14,
      modelAnswer:
        'Both writers are passionate advocates for physical books, but they convey their perspectives from very different emotional positions. Source A\'s writer speaks from personal, lived experience - she owns the bookshop and is watching it decline in real time. Her perspective is therefore intimate and tinged with melancholy: "preference does not pay the rent" reveals the tension between loving books and surviving economically. In contrast, Source B\'s writer takes a broader, more optimistic view, using statistics ("Sales of physical books have risen for the eighth consecutive year") and logical argument to make the case that print is thriving. Where Source A is elegiac, Source B is triumphant.\n\nThe writers also differ in tone. Source A uses quiet, understated language - the beauty of "gold lettering on a row of spines" is presented almost as a private consolation, something the writer notices on "good days." This restrained tone creates poignancy; the reader senses the writer is holding back emotion. Source B, by contrast, uses energetic, combative rhetoric - "the corpse refuses to lie down" and "its novelty spent" are punchy, confident declarations that mock the predictions of print\'s demise. The tone is persuasive and assertive rather than reflective.\n\nHowever, both writers share a conviction that physical books offer something irreplaceable. Source A\'s "worse hills to die on" and Source B\'s "stubbornly, beautifully permanent" both present books as worth defending, though they frame this defence differently: one as a personal last stand, the other as a cultural inevitability. The reader is left feeling that while the bookshop\'s future is uncertain, the book itself will endure.',
      marks: 16,
    },
    {
      question:
        'Reflect on your exam performance. Which question did you find most challenging and what specific skill do you need to improve?',
      lines: 4,
      modelAnswer:
        'This is a personal reflection question and answers will vary. A strong response might say: "I found Q4 most challenging because I struggled to integrate both sources in each paragraph - I tended to write about Source A and then Source B separately. I need to improve my use of comparison connectives and practise moving between texts within a single paragraph. My specific target is to start each paragraph with a point of comparison rather than a source."',
      marks: 2,
    },
  ],
  teacherNotes: [
    'This is a summative assessment lesson - maintain strict exam conditions throughout the 45-minute writing period.',
    'The two sources are designed to mirror AQA Paper 2 format: one literary non-fiction, one opinion/argument piece on a related theme.',
    'Do not assist with content during the exam - circulate to monitor time management and behaviour only.',
    'The self/peer assessment in the plenary is crucial - students must understand the mark scheme to improve.',
    'Use the reflection slips to set individualised targets for future revision sessions.',
    "Consider collecting the papers for teacher marking as well, to compare with students' self-assessments.",
  ],
  targetedSkills: [
    'AO1: Retrieval and summary',
    'AO2: Language and structure analysis',
    "AO3: Comparison of writers' perspectives",
    'AO4: Evaluation',
    'Exam technique and time management',
  ],
}

// ─── Export ─────────────────────────────────────────────────────────────────

export const readingComprehensionLessons: LessonPlan[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
]
