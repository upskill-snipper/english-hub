// =============================================================================
// Year 8 Homework Task Bank
// 30 tasks: 10 per term
// T1 - Dystopian Fiction (The Hunger Games)
// T2 - Conflict Poetry & Macbeth
// T3 - Rhetoric & Media
// =============================================================================

export interface HomeworkTask {
  id: string;
  title: string;
  yearGroup: 'Year 8';
  termUnit: string;
  type:
    | 'reading-response'
    | 'extended-writing'
    | 'research'
    | 'creative'
    | 'revision'
    | 'vocabulary'
    | 'grammar-practice'
    | 'analysis';
  description: string;
  instructions: string[];
  estimatedTime: string;
  dueLesson: number;
  markingCriteria: string[];
  parentGuidance: string;
  differentiation: {
    support: string;
    core: string;
    stretch: string;
  };
}

// =============================================================================
// TERM 1: Dystopian Fiction - The Hunger Games (Tasks 1-10)
// =============================================================================

const term1Tasks: HomeworkTask[] = [
  {
    id: 'y8-hw-t1-01',
    title: 'Re-read the Opening Chapters',
    yearGroup: 'Year 8',
    termUnit: 'T1: Dystopian Fiction - The Hunger Games',
    type: 'reading-response',
    description:
      'Re-read Chapters 1-3 of The Hunger Games and respond to a set of guided reading questions to consolidate your understanding of setting, character, and atmosphere.',
    instructions: [
      'Re-read Chapters 1-3 of The Hunger Games carefully.',
      'Answer the following questions in full sentences in your exercise book.',
      'Q1: How does Collins establish the setting of District 12 in the opening pages? Give two details.',
      'Q2: What do we learn about Katniss from her actions on the morning of the Reaping? Give three points.',
      'Q3: Why is the word "tessera" significant? Explain in your own words what it reveals about life in Panem.',
      'Q4: Write two to three sentences describing the mood Collins creates at the Reaping and how she creates it.',
      'Review your answers and check you have used evidence from the text.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 2,
    markingCriteria: [
      'Accurate recall of key details from the text.',
      'Full sentences used throughout.',
      'At least one direct quotation or close reference used per answer.',
      'Personal response developed beyond simple retelling.',
    ],
    parentGuidance:
      'Your child should have a copy of the novel or access to the relevant chapters. Encourage them to annotate as they re-read. This task consolidates close reading skills introduced in the first lesson.',
    differentiation: {
      support:
        'Use the glossary on the back of the class booklet to check any unfamiliar words. Answer Q1 and Q2 only, then attempt Q3 as a bonus.',
      core: 'Attempt all four questions, aiming for three to five sentences per answer.',
      stretch:
        'For Q4, analyse the specific language techniques Collins uses to create mood (e.g. word choice, sentence length, imagery) and name them.',
    },
  },
  {
    id: 'y8-hw-t1-02',
    title: 'Dystopia Research Task',
    yearGroup: 'Year 8',
    termUnit: 'T1: Dystopian Fiction - The Hunger Games',
    type: 'research',
    description:
      'Research the dystopian fiction genre and identify its key conventions, then consider how The Hunger Games fits within this tradition.',
    instructions: [
      'Use the internet, library, or any books at home to research the word "dystopia" and the dystopian fiction genre.',
      'Write a paragraph (8-10 sentences) in your exercise book defining what dystopia means and listing at least five conventions of the genre.',
      'Find one other example of a dystopian novel or film (e.g. 1984, Divergent, The Maze Runner, The Handmaid\'s Tale) and briefly summarise its plot in 3-4 sentences.',
      'Write a short paragraph explaining how The Hunger Games fits the dystopian genre, using at least two conventions you identified.',
      'Be ready to share your findings at the start of the next lesson.',
    ],
    estimatedTime: '50 minutes',
    dueLesson: 3,
    markingCriteria: [
      'Clear and accurate definition of dystopia.',
      'At least five genre conventions identified and explained.',
      'A second text summarised concisely.',
      'Connections drawn between genre conventions and The Hunger Games.',
    ],
    parentGuidance:
      'This research task develops independent study habits. Encourage your child to use a range of sources rather than just one website. They should write notes in their own words rather than copying text directly.',
    differentiation: {
      support:
        'Focus on finding the definition and three conventions only. Use the class booklet introduction as a starting point.',
      core: 'Complete all steps as described, aiming for full paragraphs.',
      stretch:
        'Explore the political context of dystopian fiction: why do authors write dystopias, and what real-world concerns do they reflect? Add a paragraph discussing this.',
    },
  },
  {
    id: 'y8-hw-t1-03',
    title: 'Character Motivation Analysis',
    yearGroup: 'Year 8',
    termUnit: 'T1: Dystopian Fiction - The Hunger Games',
    type: 'analysis',
    description:
      'Analyse the motivations of Katniss Everdeen at the point she volunteers as tribute, considering her feelings, values, and the pressures she faces.',
    instructions: [
      'Re-read the Reaping scene (Chapter 2) with a focus on Katniss\'s decision to volunteer.',
      'In your exercise book, create a "motivation map" for Katniss: draw a circle with her name in the middle and list at least six reasons or pressures that drive her decision around the outside.',
      'Choose the three most important motivations and write a short explanation (2-3 sentences each) for why you chose them, using evidence from the text.',
      'Finally, write a paragraph answering: What does Katniss\'s decision reveal about her character? Use the Point-Evidence-Explain structure.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 4,
    markingCriteria: [
      'Motivation map contains at least six valid points.',
      'Three motivations explained with textual evidence.',
      'Final paragraph uses Point-Evidence-Explain structure correctly.',
      'Inference is drawn: the student moves beyond what happens to why it matters.',
    ],
    parentGuidance:
      'Ask your child to explain their motivation map to you out loud before they write their paragraph. Talking through ideas first can help them organise their thinking and write more fluently.',
    differentiation: {
      support:
        'Use the character question scaffold in the class booklet. Aim for four motivations on the map and write sentences for two of them.',
      core: 'Complete all steps as described.',
      stretch:
        'Consider how the Capitol\'s power structures force Katniss into this situation. How far is her choice truly "voluntary"? Explore this in an additional paragraph.',
    },
  },
  {
    id: 'y8-hw-t1-04',
    title: 'Writing an Analytical Paragraph',
    yearGroup: 'Year 8',
    termUnit: 'T1: Dystopian Fiction - The Hunger Games',
    type: 'extended-writing',
    description:
      'Write a full analytical paragraph responding to the question: How does Collins use language to present the Capitol as powerful in Chapter 5?',
    instructions: [
      'Read Chapter 5 of The Hunger Games, focusing on descriptions of the Capitol.',
      'Select one quotation that you think most effectively shows the Capitol\'s power.',
      'Write a single analytical paragraph of at least 150 words using the Point-Evidence-Explain-Link (PEEL) structure.',
      'Your paragraph must: make a clear point about how Collins presents power, embed your quotation, analyse specific words or techniques in the quotation, explain the effect on the reader, and link back to the wider theme of power in dystopian fiction.',
      'Underline the key term or technique you are analysing.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 5,
    markingCriteria: [
      'A clear, arguable point is made at the start of the paragraph.',
      'Quotation is embedded grammatically into the sentence.',
      'At least one specific word or technique is named and analysed.',
      'Effect on the reader is explained (not just described).',
      'Link made to the theme or wider context.',
    ],
    parentGuidance:
      'Remind your child that "analysis" means explaining WHY the writer made a choice and WHAT EFFECT it has, not just what happens. The PEEL acronym on their class bookmark can help if they get stuck.',
    differentiation: {
      support:
        'Use the PEEL writing frame in the class booklet. The quotation has been pre-selected: "The Capitol is the most powerful city in all of Panem." Build your paragraph around this.',
      core: 'Select your own quotation and complete the paragraph independently.',
      stretch:
        'Write two linked paragraphs, each analysing a different technique Collins uses to convey the Capitol\'s power, and compare the two techniques in a final concluding sentence.',
    },
  },
  {
    id: 'y8-hw-t1-05',
    title: 'Power and Inequality Essay Plan',
    yearGroup: 'Year 8',
    termUnit: 'T1: Dystopian Fiction - The Hunger Games',
    type: 'extended-writing',
    description:
      'Plan a full essay response to the question: How does Collins explore themes of power and inequality in The Hunger Games? You will write this essay in class next lesson.',
    instructions: [
      'Write a clear introduction paragraph plan: state your argument in one sentence, mention 2-3 main points you will make.',
      'Plan three main body paragraphs. For each one, note: the main point, the quotation you will use, the technique you will analyse, and the effect.',
      'Write a brief conclusion plan: how will you sum up and reflect on the theme overall?',
      'Review your plan and check that each paragraph addresses both power AND inequality.',
      'Bring your completed plan to the next lesson.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 6,
    markingCriteria: [
      'Introduction plan contains a clear line of argument.',
      'Three body paragraphs planned with point, evidence, technique, and effect noted.',
      'Conclusion plan present.',
      'Both themes (power and inequality) addressed across the plan.',
    ],
    parentGuidance:
      'Your child is preparing to write a timed essay in the next lesson. The best thing you can do is ask them to talk through their three main points aloud so they feel confident in their ideas before the lesson.',
    differentiation: {
      support:
        'Use the essay planning grid in the class booklet. Two body paragraphs are sufficient.',
      core: 'Plan all three body paragraphs and both introduction and conclusion.',
      stretch:
        'Add a counter-argument section to your plan: identify one way in which power is challenged or subverted in the novel, and plan how to include this nuance in your essay.',
    },
  },
  {
    id: 'y8-hw-t1-06',
    title: 'Vocabulary Log: Dystopian and Literary Terms',
    yearGroup: 'Year 8',
    termUnit: 'T1: Dystopian Fiction - The Hunger Games',
    type: 'vocabulary',
    description:
      'Build and practise a personalised vocabulary log of key terms from the Dystopian Fiction unit to support reading comprehension and essay writing.',
    instructions: [
      'In your exercise book, create a vocabulary log with three columns: Word, Definition, Example Sentence.',
      'Find and record definitions for all of the following terms: dystopia, utopia, propaganda, totalitarian, surveillance, oppression, allegory, juxtaposition, foreshadowing, connotation.',
      'Write your own example sentence for each term, linking it to The Hunger Games where possible.',
      'Choose three terms that were new to you and write a sentence explaining how each one helps you understand the novel better.',
      'Test yourself by covering the definition column and seeing how many you can recall.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 7,
    markingCriteria: [
      'All ten terms defined accurately in the student\'s own words.',
      'Example sentences are original (not copied from a dictionary) and context-appropriate.',
      'Three personal reflection sentences show genuine engagement with how the terms apply to the text.',
    ],
    parentGuidance:
      'Once your child has completed the log, you could quiz them verbally by reading the definition and asking them to recall the word. This simple activity strengthens memory retention significantly.',
    differentiation: {
      support:
        'Complete six terms from the list (the first six are the most essential). Use the glossary in the class booklet to check definitions.',
      core: 'Complete all ten terms as described.',
      stretch:
        'Research two additional literary terms not on the list that you think are relevant to dystopian fiction, add them to your log, and explain your choices.',
    },
  },
  {
    id: 'y8-hw-t1-07',
    title: 'Creative Writing: A Capitol Citizen\'s Perspective',
    yearGroup: 'Year 8',
    termUnit: 'T1: Dystopian Fiction - The Hunger Games',
    type: 'creative',
    description:
      'Write a short creative piece from the perspective of a Capitol citizen watching the Reaping on television, exploring how their world-view differs from Katniss\'s.',
    instructions: [
      'Imagine you are a Capitol citizen watching the Reaping broadcast as entertainment.',
      'Write a first-person narrative of 200-300 words describing what you see, how you feel, and what your hopes are for the Games.',
      'Your writing should reflect the Capitol\'s values: luxury, spectacle, and indifference to suffering.',
      'Try to use at least one contrast between your character\'s reaction and how the reader knows Katniss feels.',
      'Review your work and check: Have you written in first person? Have you shown the character\'s values through their thoughts and word choices rather than just telling the reader?',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 8,
    markingCriteria: [
      'Convincing first-person voice established and maintained.',
      'Capitol values shown through specific details and language choices.',
      'At least one contrast with District 12\'s perspective is apparent.',
      'Descriptive language used to evoke the spectacle of the broadcast.',
      'Writing falls within the 200-300 word range.',
    ],
    parentGuidance:
      'This creative task develops empathy and perspective-taking as well as creative writing skills. Ask your child who their character is before they write, as having a clear character in mind improves the quality of the writing significantly.',
    differentiation: {
      support:
        'Use the character prompt card in the class booklet. Write 150 words minimum. Focus on describing what your character sees and one strong feeling they have.',
      core: 'Complete the task as described, aiming for 200-300 words.',
      stretch:
        'Include subtle irony in your writing: let the reader see the horror of the situation through what your Capitol character finds exciting or amusing, without your character realising. Aim for 350 words.',
    },
  },
  {
    id: 'y8-hw-t1-08',
    title: 'Retrieval Quiz: The Hunger Games Chapters 1-8',
    yearGroup: 'Year 8',
    termUnit: 'T1: Dystopian Fiction - The Hunger Games',
    type: 'revision',
    description:
      'Complete a self-marking retrieval quiz on the key events, characters, and details from Chapters 1-8 to consolidate your knowledge before the mid-unit assessment.',
    instructions: [
      'Without looking at the book, answer the following ten questions in your exercise book.',
      'Q1: What is the name of the district Katniss lives in?',
      'Q2: What is the name of the annual event that selects tributes?',
      'Q3: Name Katniss\'s sister and best friend.',
      'Q4: What skill does Katniss use to feed her family?',
      'Q5: Who is the male tribute selected from District 12?',
      'Q6: What is a "tessera" and who uses them?',
      'Q7: Name the district escort who announces the tributes.',
      'Q8: What is the name of the Capitol city?',
      'Q9: How many districts are there in Panem?',
      'Q10: What gift does Madge give Katniss before she boards the train?',
      'Once you have answered all ten, open your book or class notes and mark your own answers. Note any you got wrong and look them up.',
    ],
    estimatedTime: '30 minutes',
    dueLesson: 9,
    markingCriteria: [
      'All ten answers attempted.',
      'Self-marking completed with corrections written in a different colour.',
      'Any incorrect answers revisited and corrected.',
    ],
    parentGuidance:
      'Retrieval practice (recalling information without looking) is one of the most effective revision strategies available. Encourage your child to attempt all answers from memory before checking. Getting answers wrong and then correcting them is a normal and valuable part of the process.',
    differentiation: {
      support:
        'Attempt Q1-Q7 first. Use the class timeline on the back of the booklet as a reference if needed after your first attempt.',
      core: 'Attempt all ten questions before checking.',
      stretch:
        'After marking, write a paragraph explaining why accurate knowledge of the plot matters when writing analytical essays about the novel.',
    },
  },
  {
    id: 'y8-hw-t1-09',
    title: 'Inference Practice',
    yearGroup: 'Year 8',
    termUnit: 'T1: Dystopian Fiction - The Hunger Games',
    type: 'reading-response',
    description:
      'Practise the skill of inference by reading a short passage closely and drawing meaning from what is implied rather than stated directly.',
    instructions: [
      'Read the passage in the class booklet (Chapter 7: the training centre scenes).',
      'Answer the following inference questions in full sentences.',
      'Q1: What does the behaviour of the Career tributes in training imply about how they have been raised?',
      'Q2: Katniss chooses not to show her best skills publicly during training. What does this infer about her intelligence and survival instincts?',
      'Q3: Find a quotation that implies something about the relationship between wealth and survival in the Games. Explain what it implies.',
      'Q4: What can we infer about Peeta from his conversation with Katniss at the end of the training section?',
      'Write 3-5 sentences for each answer.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 10,
    markingCriteria: [
      'Answers go beyond surface-level retrieval to explore implied meaning.',
      'Evidence from the text supports each inference.',
      'Language of inference used correctly (e.g. "this implies", "we can infer", "this suggests").',
      'Answers written in full sentences.',
    ],
    parentGuidance:
      'Inference is a skill tested heavily at GCSE. Ask your child to explain the difference between "retrieval" (finding what is stated) and "inference" (working out what is implied). If they can explain this distinction, they understand the skill.',
    differentiation: {
      support:
        'Attempt Q1 and Q2 only. Use the sentence starter "This implies that..." to begin each inference statement.',
      core: 'Attempt all four questions.',
      stretch:
        'For Q3 and Q4, also consider what Collins wants the reader to think or feel at this point in the narrative and how the inferences you have drawn serve that purpose.',
    },
  },
  {
    id: 'y8-hw-t1-10',
    title: 'Timed Analysis Practice',
    yearGroup: 'Year 8',
    termUnit: 'T1: Dystopian Fiction - The Hunger Games',
    type: 'analysis',
    description:
      'Complete a timed written analysis of an extract from The Hunger Games under exam-style conditions to develop speed and confidence in analytical writing.',
    instructions: [
      'Set a timer for 25 minutes.',
      'Read the extract in the class booklet (the cornucopia bloodbath scene, Chapter 11).',
      'Without planning, write a response of at least two paragraphs to the question: How does Collins create tension and danger in this extract?',
      'Use the PEEL paragraph structure and include at least two quotations.',
      'When the timer stops, put your pen down immediately.',
      'On a new line, write: one thing you did well, and one thing you would improve if you had more time.',
    ],
    estimatedTime: '30 minutes',
    dueLesson: 11,
    markingCriteria: [
      'At least two analytical paragraphs produced within the time limit.',
      'Two quotations embedded and analysed.',
      'Tension and danger addressed specifically (not a general character or theme analysis).',
      'Self-evaluation is honest and specific.',
    ],
    parentGuidance:
      'Timed writing builds the stamina and confidence students need for formal assessments. Please help your child find a quiet place to complete this task without distractions. The timer element is important: stopping when time is up is part of the practice.',
    differentiation: {
      support:
        'Use 30 minutes rather than 25. Write one well-developed paragraph rather than two. Use the quotation bank on the class sheet.',
      core: 'Complete the task as described with the 25-minute timer.',
      stretch:
        'After the timed section, spend an additional 10 minutes writing a third paragraph that considers how Collins uses the setting to heighten tension alongside the action.',
    },
  },
];

// =============================================================================
// TERM 2: Conflict Poetry & Macbeth (Tasks 11-20)
// =============================================================================

const term2Tasks: HomeworkTask[] = [
  {
    id: 'y8-hw-t2-01',
    title: 'Poem Annotation: "Exposure" by Wilfred Owen',
    yearGroup: 'Year 8',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'reading-response',
    description:
      'Annotate "Exposure" by Wilfred Owen in detail, identifying language techniques, patterns, and ideas about the reality of war.',
    instructions: [
      'Read "Exposure" by Wilfred Owen at least twice.',
      'On a printed or written copy of the poem, annotate at least ten features. For each annotation, note: the technique used, the word or phrase that demonstrates it, and what effect it creates.',
      'Circle all the natural imagery in the poem. What does Owen suggest about nature and war through this imagery?',
      'Underline any words or phrases with powerful connotations. Note what they connote.',
      'Write a two-to-three-sentence overall response at the bottom: What is Owen\'s central message about war in this poem?',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 13,
    markingCriteria: [
      'At least ten annotations present, each with technique, example, and effect.',
      'Natural imagery identified and its significance explained.',
      'Connotations explored in annotations.',
      'Central message statement is clear and supported by the poem.',
    ],
    parentGuidance:
      'Your child will need a printed or handwritten copy of the poem to annotate. "Exposure" by Wilfred Owen is freely available online. Encourage them to read it aloud before annotating, as the sound of the poem provides additional clues to its meaning.',
    differentiation: {
      support:
        'Annotate six features rather than ten. Use the technique glossary in the class booklet to help identify and name techniques.',
      core: 'Complete all steps as described with ten annotations.',
      stretch:
        'Research the context of the poem (the Western Front, trench warfare, winter 1917-18) and add three contextual annotations explaining how knowledge of the context deepens understanding of specific lines.',
    },
  },
  {
    id: 'y8-hw-t2-02',
    title: 'War Poetry Research',
    yearGroup: 'Year 8',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'research',
    description:
      'Research the First World War poetry tradition and find two poems beyond those studied in class to broaden your understanding of how poets have responded to conflict.',
    instructions: [
      'Research "First World War poetry" online or in the library.',
      'Find two poems not studied in class. Write the title and poet for each one.',
      'For each poem, write: a brief summary (3-4 sentences), one quotation you find powerful, and an explanation of why you chose it.',
      'Write a paragraph comparing the tone of your two chosen poems. How do they differ in their attitude to war?',
      'Be prepared to briefly share one of your poems with the class.',
    ],
    estimatedTime: '50 minutes',
    dueLesson: 14,
    markingCriteria: [
      'Two valid First World War poems identified (not from the class anthology).',
      'Each poem summarised accurately.',
      'Quotation choices are justified with analysis, not just personal preference.',
      'Comparison of tone is specific and uses appropriate vocabulary (e.g. elegiac, bitter, patriotic, futile, resigned).',
    ],
    parentGuidance:
      'Encourage your child to look beyond the most famous poems (such as "In Flanders Fields") to find less well-known voices. Poets such as Siegfried Sassoon, Edward Thomas, Vera Brittain, and Isaac Rosenberg offer a range of perspectives.',
    differentiation: {
      support:
        'Research and respond to one poem only. Use the list of suggested poems at the back of the class booklet as a starting point.',
      core: 'Complete all steps for two poems as described.',
      stretch:
        'Consider whether any poems from the Second World War, the Falklands, or another conflict share similar themes. Find one example and explain the connections in an additional paragraph.',
    },
  },
  {
    id: 'y8-hw-t2-03',
    title: 'Comparison Paragraph: Two Conflict Poems',
    yearGroup: 'Year 8',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'extended-writing',
    description:
      'Write a comparison paragraph exploring how two conflict poems present the effects of war on soldiers, using an embedded comparative structure.',
    instructions: [
      'Choose two poems from the class anthology that both present the effects of war on soldiers.',
      'Write a comparison paragraph of at least 150 words.',
      'Your paragraph must: start with a comparative point (e.g. "Both Owen and Sassoon present soldiers as..."), use a quotation from each poem, analyse a specific word or technique from each, and comment on a similarity or difference between the two poets\' methods.',
      'Use comparative connectives: similarly, in contrast, whereas, both, however, on the other hand, unlike.',
      'Underline every comparative connective you have used.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 15,
    markingCriteria: [
      'Comparative point made at the outset.',
      'One quotation from each poem, embedded grammatically.',
      'Specific techniques named and analysed in both poems.',
      'Comparative connectives used accurately and varied.',
      'A genuine comparison (not just two separate analyses joined together) is made.',
    ],
    parentGuidance:
      'Comparative writing is a key skill for GCSE English Literature. The main challenge is making sure the paragraph genuinely compares rather than just discussing the two poems separately. Ask your child to point to the sentences where the two poems are directly compared.',
    differentiation: {
      support:
        'Use the comparison writing frame in the class booklet. The sentence starters are provided: you just need to complete them with your own analysis.',
      core: 'Complete the paragraph independently as described.',
      stretch:
        'Write a second comparison paragraph exploring a difference between the two poems\' presentations of war. Ensure both paragraphs together form a coherent mini-essay with a consistent argument.',
    },
  },
  {
    id: 'y8-hw-t2-04',
    title: 'Shakespeare Reading: Macbeth Act 1',
    yearGroup: 'Year 8',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'reading-response',
    description:
      'Read Act 1 of Macbeth in your class edition and answer questions to demonstrate understanding of plot, character, and Shakespeare\'s language.',
    instructions: [
      'Read Act 1 of Macbeth from beginning to end. You may use the class edition with notes, or an online version such as the one on the Folger Shakespeare Library website.',
      'Answer the following questions in full sentences.',
      'Q1: How do the witches\' prophecies affect Macbeth? Give two specific effects.',
      'Q2: What does Lady Macbeth\'s speech in Act 1 Scene 5 reveal about her character?',
      'Q3: Find a quotation from Act 1 that shows Macbeth\'s ambition and one that shows his hesitation. Write both out and explain what each reveals.',
      'Q4: How does Shakespeare establish a dark and unsettling atmosphere in Act 1? Give two methods.',
    ],
    estimatedTime: '55 minutes',
    dueLesson: 16,
    markingCriteria: [
      'Evidence of having read the whole of Act 1.',
      'All four questions answered in full sentences.',
      'Quotations accurately transcribed.',
      'Responses go beyond plot summary to explore character and language.',
    ],
    parentGuidance:
      'Shakespeare\'s language can be challenging. Encourage your child to read the scene summaries alongside the text if they find the language difficult. Understanding the plot and characters is the first priority; precise language analysis can develop in class with teacher support.',
    differentiation: {
      support:
        'Read Act 1 Scenes 1, 3, and 5 only (the most important scenes). Answer Q1 and Q2 only.',
      core: 'Read the whole of Act 1 and answer all four questions.',
      stretch:
        'Research the historical context of Macbeth: why did Shakespeare write about witchcraft and kingship? Add a paragraph explaining how this context might have shaped the play, with reference to at least two details from Act 1.',
    },
  },
  {
    id: 'y8-hw-t2-05',
    title: 'Soliloquy Analysis: "Is this a dagger which I see before me"',
    yearGroup: 'Year 8',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'analysis',
    description:
      'Analyse Macbeth\'s dagger soliloquy (Act 2 Scene 1) in detail, exploring what it reveals about his mental state and Shakespeare\'s use of language.',
    instructions: [
      'Read Macbeth\'s soliloquy "Is this a dagger which I see before me" (Act 2 Scene 1, lines 33-64) carefully.',
      'Identify and annotate at least six language features (on a copy of the text or in note form).',
      'Write two analytical paragraphs responding to the question: How does Shakespeare present Macbeth\'s psychological state in this soliloquy?',
      'Each paragraph must: make a clear point, embed a quotation, name a technique, analyse the effect, and link to the theme of ambition or guilt.',
      'Write a final sentence explaining why Shakespeare uses a soliloquy (rather than dialogue) at this moment.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 17,
    markingCriteria: [
      'Six language features identified in annotations.',
      'Two analytical paragraphs produced using PEEL structure.',
      'Quotations from the soliloquy used as evidence.',
      'Comment on the dramatic function of the soliloquy included.',
      'Themes of ambition or guilt addressed.',
    ],
    parentGuidance:
      'The soliloquy is available on any free Shakespeare website and in your child\'s class edition. If they find the language difficult, suggest they watch a short performance of this scene on YouTube first to gain a feel for the emotion and meaning.',
    differentiation: {
      support:
        'Annotate the soliloquy with teacher-provided technique prompts from the class booklet. Write one analytical paragraph only.',
      core: 'Complete all steps as described.',
      stretch:
        'Consider how Macbeth\'s language in this soliloquy echoes or contrasts with the witches\' language in Act 1. Write an additional sentence or short paragraph drawing this comparison.',
    },
  },
  {
    id: 'y8-hw-t2-06',
    title: 'Poem Memorisation',
    yearGroup: 'Year 8',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'revision',
    description:
      'Memorise the first two stanzas of "Dulce et Decorum Est" by Wilfred Owen to develop close familiarity with the text and the ability to quote from memory.',
    instructions: [
      'Read the first two stanzas of "Dulce et Decorum Est" three times aloud.',
      'Cover the text and try to write the first stanza from memory. Check and correct any mistakes.',
      'Repeat for the second stanza.',
      'Practise until you can write both stanzas from memory with no more than two errors.',
      'In your exercise book, write both stanzas from memory under timed conditions (aim for 5 minutes).',
      'Under your written version, write three sentences explaining what these two stanzas make you think and feel, and why.',
    ],
    estimatedTime: '35 minutes',
    dueLesson: 18,
    markingCriteria: [
      'Both stanzas reproduced from memory with high accuracy (no more than two errors per stanza).',
      'Three reflective sentences written in response to the stanzas.',
      'Evidence of genuine engagement with the emotional content of the poem.',
    ],
    parentGuidance:
      'You can help by asking your child to recite the stanzas to you once they have learnt them. Hearing themselves say the poem aloud is excellent practice. Even listening to them without being able to judge accuracy is supportive and encouraging.',
    differentiation: {
      support:
        'Memorise the first stanza only. Use a "look, cover, write, check" approach, attempting the stanza in sections.',
      core: 'Memorise both stanzas as described.',
      stretch:
        'Memorise all four stanzas of the poem. In class, you will be invited to recite the poem in front of the group.',
    },
  },
  {
    id: 'y8-hw-t2-07',
    title: 'Character Profile: Lady Macbeth',
    yearGroup: 'Year 8',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'analysis',
    description:
      'Produce a detailed character profile for Lady Macbeth, tracking how she is presented across the play and considering how Shakespeare shapes the audience\'s response to her.',
    instructions: [
      'Create a character profile for Lady Macbeth in your exercise book.',
      'Include: a list of at least five adjectives that describe her character, with a quotation justifying each one.',
      'Describe how her character changes between Act 1 and Act 5. Give at least two specific changes with evidence.',
      'Write a paragraph answering: Is Lady Macbeth a villain, a victim, or both? Give your opinion and support it with evidence.',
      'Add a section on "Shakespeare\'s purpose": why do you think Shakespeare created the character of Lady Macbeth? What ideas or questions does she raise for the audience?',
    ],
    estimatedTime: '50 minutes',
    dueLesson: 19,
    markingCriteria: [
      'Five adjectives with supporting quotations.',
      'Character development across the play tracked with specific references.',
      'Opinion paragraph contains a clear argument supported by evidence.',
      'Section on Shakespeare\'s purpose shows awareness of the play as a constructed text.',
    ],
    parentGuidance:
      'Encourage your child to form their own opinion about Lady Macbeth rather than just researching what others have said. Their personal view, backed up by evidence from the text, is exactly what is valued in English Literature.',
    differentiation: {
      support:
        'Focus on Act 1 and Act 5 only. Provide three adjectives with quotations and write a short paragraph on whether she is a villain or a victim.',
      core: 'Complete all sections as described.',
      stretch:
        'Research critical perspectives on Lady Macbeth. Find one critic who sees her as primarily a villain and one who sees her as a victim. Summarise both views in a short paragraph and state which you find more convincing and why.',
    },
  },
  {
    id: 'y8-hw-t2-08',
    title: 'Comparative Essay Plan: Conflict in Poetry and Macbeth',
    yearGroup: 'Year 8',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'extended-writing',
    description:
      'Plan a comparative essay exploring how conflict is presented in one conflict poem and in Macbeth, ready to develop into a full essay in the end-of-term assessment.',
    instructions: [
      'Choose one conflict poem from the class anthology to compare with Macbeth.',
      'Write an introduction plan: state your main argument in one sentence (e.g. "Both Shakespeare and Owen present conflict as ultimately destructive...").',
      'Plan three main body paragraphs. Each must compare one aspect of conflict in both texts with specific evidence from each.',
      'Plan a conclusion that answers: does the poem or the play present conflict more powerfully, and why?',
      'Annotate your plan with the key quotations you intend to use (at least one per text per paragraph).',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 20,
    markingCriteria: [
      'Clear comparative argument stated in the introduction plan.',
      'Three body paragraphs planned with a genuine comparative focus.',
      'At least six quotations annotated across the plan (minimum three per text).',
      'Conclusion plan includes a clear judgement.',
    ],
    parentGuidance:
      'This plan is preparation for the end-of-term assessment. The most useful thing you can do is ask your child to explain their argument to you in one or two sentences. If they can do this clearly, their plan is working.',
    differentiation: {
      support:
        'Plan two body paragraphs rather than three. Use the essay planning grid in the class booklet. The argument sentence has been partially written: you just need to complete it.',
      core: 'Complete all steps as described.',
      stretch:
        'Add a "counter-argument" section to the plan where you acknowledge a way in which the two texts differ in their presentation of conflict. Plan how you would address this nuance in a fourth paragraph.',
    },
  },
  {
    id: 'y8-hw-t2-09',
    title: 'Vocabulary Study: Shakespeare and Poetry Terms',
    yearGroup: 'Year 8',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'vocabulary',
    description:
      'Develop a vocabulary log of key terms for analysing Shakespeare and conflict poetry, including dramatic and poetic terminology.',
    instructions: [
      'Create a two-section vocabulary log: Section A for "Drama and Shakespeare Terms" and Section B for "Poetry Terms".',
      'Section A - find and record definitions for: soliloquy, aside, tragedy, hubris, dramatic irony, foil, protagonist, antagonist.',
      'Section B - find and record definitions for: elegy, quatrain, volta, caesura, enjambment, half rhyme, iambic pentameter, extended metaphor.',
      'For each term, write an example that links to a text you have studied this term.',
      'Choose four terms (two from each section) and write a sentence for each one explaining how using this term in an essay makes your writing more precise.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 21,
    markingCriteria: [
      'All sixteen terms defined accurately.',
      'Examples link specifically to texts studied.',
      'Four "precision" sentences demonstrate understanding of how technical vocabulary improves analytical writing.',
    ],
    parentGuidance:
      'Mastery of technical vocabulary is one of the most reliable ways to improve English Literature grades. These terms will be used regularly for the rest of the course and at GCSE.',
    differentiation: {
      support:
        'Complete Section A (drama terms) only. Aim for six out of eight terms.',
      core: 'Complete all sixteen terms across both sections.',
      stretch:
        'Write a short paragraph (5-6 sentences) that uses at least six of these terms correctly and naturally in the context of analysing a specific scene or poem from this term\'s study.',
    },
  },
  {
    id: 'y8-hw-t2-10',
    title: 'Timed Poetry Response',
    yearGroup: 'Year 8',
    termUnit: 'T2: Conflict Poetry & Macbeth',
    type: 'analysis',
    description:
      'Complete a timed analytical response to an unseen poem under exam-style conditions to develop skills in approaching unfamiliar texts.',
    instructions: [
      'Set a timer for 30 minutes.',
      'Read the unseen poem in the class booklet (an additional conflict poem not studied in class).',
      'Spend 5 minutes reading and annotating. Then write your response.',
      'Respond to the question: How does the poet present the speaker\'s attitude to war in this poem?',
      'Write at least two analytical paragraphs using the PEEL structure, with quotations from the poem.',
      'When the timer stops, put your pen down.',
      'On a new line, write two things: one aspect of the poem you found interesting and one question you would want to explore further.',
    ],
    estimatedTime: '35 minutes',
    dueLesson: 22,
    markingCriteria: [
      'At least two analytical paragraphs produced within the time limit.',
      'Quotations from the unseen poem used as evidence.',
      'The speaker\'s attitude addressed specifically.',
      'Reflective comment shows genuine critical thinking.',
    ],
    parentGuidance:
      'Approaching unseen texts is a skill that develops with practice. Please help your child find a quiet, distraction-free space for this timed task. The poem is provided in the class booklet, so no additional materials are needed.',
    differentiation: {
      support:
        'Spend 10 minutes annotating rather than 5. Write one well-developed paragraph rather than two.',
      core: 'Complete the task as described with the 30-minute timer.',
      stretch:
        'After the timed section, write a third paragraph comparing the unseen poem to one of the poems from the class anthology, focusing on how both poets present the effects of war.',
    },
  },
];

// =============================================================================
// TERM 3: Rhetoric & Media (Tasks 21-30)
// =============================================================================

const term3Tasks: HomeworkTask[] = [
  {
    id: 'y8-hw-t3-01',
    title: 'Speech Listening and Analysis',
    yearGroup: 'Year 8',
    termUnit: 'T3: Rhetoric & Media',
    type: 'analysis',
    description:
      'Listen to a famous speech and analyse the rhetorical techniques the speaker uses to persuade their audience.',
    instructions: [
      'Watch and listen to one of the following speeches (available on YouTube): Martin Luther King Jr. "I Have a Dream" (1963), Greta Thunberg "How Dare You" (2019 UN Climate Summit), or Winston Churchill "We Shall Fight on the Beaches" (audio recording, 1940).',
      'As you listen, take notes on: the speaker\'s tone, any repeated phrases or patterns, any powerful images or examples used, and moments where the audience reacts strongly.',
      'Watch or listen a second time and identify at least three specific rhetorical techniques by name (e.g. anaphora, rhetorical questions, tricolon, emotive language, direct address).',
      'Write a response of 150-200 words explaining which technique you found most effective and why, with a direct quote from the speech as evidence.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 24,
    markingCriteria: [
      'Evidence of careful listening (notes are specific, not vague).',
      'At least three named rhetorical techniques identified.',
      'Written response makes a clear judgement about the most effective technique.',
      'A direct quote from the speech is used as evidence.',
    ],
    parentGuidance:
      'These speeches are all freely available on YouTube. Watching with your child and discussing what you both notice can be a valuable extension of this task. Ask them to point out one technique to you.',
    differentiation: {
      support:
        'Focus on the Greta Thunberg speech, which is shorter and uses contemporary language. Identify two techniques rather than three. Use the rhetorical techniques glossary in the class booklet.',
      core: 'Complete the task as described with any of the three speech options.',
      stretch:
        'Compare two of the speeches. Write an additional paragraph on how their use of rhetoric reflects their different contexts, audiences, and purposes.',
    },
  },
  {
    id: 'y8-hw-t3-02',
    title: 'Find a Persuasive Text',
    yearGroup: 'Year 8',
    termUnit: 'T3: Rhetoric & Media',
    type: 'research',
    description:
      'Find a real-world example of a persuasive text and annotate it to identify how the writer or speaker attempts to influence their audience.',
    instructions: [
      'Find ONE persuasive text from any of the following sources: a newspaper opinion column or editorial, a charity fundraising leaflet, an advertisement (print or online), a political campaign poster, or a letter to the editor.',
      'Bring a printed copy, photograph, or written copy of the text to your exercise book.',
      'Annotate the text with at least eight comments identifying persuasive techniques. For each annotation, name the technique and explain the intended effect.',
      'Write a three-sentence summary at the bottom: What is the text trying to persuade the reader to think, feel, or do? Who is the intended audience? Is it effective?',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 25,
    markingCriteria: [
      'A genuine persuasive text has been found and included.',
      'At least eight annotations present, each naming a technique and explaining its effect.',
      'Three-sentence summary addresses purpose, audience, and effectiveness.',
    ],
    parentGuidance:
      'Encourage your child to find a text that genuinely interests or affects them. The best examples often come from issues students care about. Newspapers, charity websites, and advertising hoardings or social media feeds are all good sources.',
    differentiation: {
      support:
        'Find any one persuasive text and annotate five features. Use the class booklet checklist to help identify techniques.',
      core: 'Complete all steps as described with eight annotations.',
      stretch:
        'Choose a text on a genuinely controversial topic. In addition to the annotations, write a paragraph evaluating how effective the text is and whether it uses its techniques fairly or manipulatively.',
    },
  },
  {
    id: 'y8-hw-t3-03',
    title: 'Ethos, Pathos, and Logos Analysis',
    yearGroup: 'Year 8',
    termUnit: 'T3: Rhetoric & Media',
    type: 'analysis',
    description:
      'Apply Aristotle\'s rhetorical triangle (ethos, pathos, logos) to analyse how a persuasive text builds its argument across all three modes of persuasion.',
    instructions: [
      'Using the persuasive text you found for the previous homework task, or a new text of your choice, apply the three Aristotelian appeals.',
      'Create a three-column table in your exercise book: Ethos (credibility/trust), Pathos (emotion), Logos (logic/evidence).',
      'Find at least two examples of each appeal from the text and record them in the table with brief explanations.',
      'Write a paragraph answering: Which appeal does this text rely on most heavily, and why do you think the writer made this choice?',
      'Write a second paragraph: Are there any appeals that are missing or weak? How does this affect the overall persuasiveness of the text?',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 26,
    markingCriteria: [
      'Three-column table completed with at least two examples per appeal.',
      'Explanations in the table are specific to the text, not generic.',
      'Paragraph 1 makes a clear judgement about the dominant appeal and reasons for this.',
      'Paragraph 2 identifies a weakness and its impact on persuasiveness.',
    ],
    parentGuidance:
      'Ethos, pathos, and logos are core concepts for understanding rhetoric and media, and they recur throughout secondary school and beyond. Ask your child to explain the three terms to you in their own words - if they can do this clearly, they have understood the concepts.',
    differentiation: {
      support:
        'Focus on pathos and logos only (two columns). Find one example of each and write a sentence of explanation for each.',
      core: 'Complete all three columns as described and write both paragraphs.',
      stretch:
        'Research the origin of the three appeals in Aristotle\'s "Rhetoric". Write a short introduction to your analysis (3-4 sentences) explaining who Aristotle was and why his framework is still used today.',
    },
  },
  {
    id: 'y8-hw-t3-04',
    title: 'Write a Speech Draft',
    yearGroup: 'Year 8',
    termUnit: 'T3: Rhetoric & Media',
    type: 'extended-writing',
    description:
      'Write a first draft of a persuasive speech on a topic you care about, applying the rhetorical techniques studied in class.',
    instructions: [
      'Choose a topic you genuinely care about (e.g. school uniform policy, climate action, animal welfare, social media age limits, homework reform).',
      'Write a speech of 300-400 words addressed to a specific audience (e.g. your school\'s governors, your local MP, your year group).',
      'Your speech must include: a direct address to your audience, at least one rhetorical question, at least one example of the rule of three, at least one use of emotive language, and a call to action at the end.',
      'Annotate your own speech: highlight and label each of the four required techniques.',
      'This is a first draft: focus on getting your ideas and rhetoric on paper. You will refine it in a later homework.',
    ],
    estimatedTime: '50 minutes',
    dueLesson: 27,
    markingCriteria: [
      'Speech is 300-400 words.',
      'All four required techniques present and annotated.',
      'Clear audience established and addressed throughout.',
      'Call to action present at the conclusion.',
      'A genuine and coherent argument is made throughout.',
    ],
    parentGuidance:
      'Ask your child to read their speech aloud to you before submitting it. Persuasive speeches are designed to be heard, and reading aloud helps the writer spot awkward phrasing and assess whether the rhetoric sounds natural.',
    differentiation: {
      support:
        'Write 200-250 words and aim for three of the four required techniques. Use the speech planning frame in the class booklet.',
      core: 'Complete the task as described, 300-400 words.',
      stretch:
        'Include at least two of the following additional techniques: anaphora, antithesis, alliteration for emphasis, or a statistical fact used as logos. Annotate these as well.',
    },
  },
  {
    id: 'y8-hw-t3-05',
    title: 'Media Bias Investigation',
    yearGroup: 'Year 8',
    termUnit: 'T3: Rhetoric & Media',
    type: 'research',
    description:
      'Investigate how two different news sources report the same story differently, exploring how language choices and framing can reflect or create bias.',
    instructions: [
      'Find ONE news story that has been reported by at least two different sources (e.g. a broadsheet newspaper and a tabloid, or two television news websites).',
      'Print, copy, or photograph both reports. Bring them to your exercise book.',
      'Compare the two reports under the following headings: Headline, Language choices, What is emphasised or foregrounded, What is omitted or minimised, Overall tone.',
      'Write a paragraph of at least 100 words discussing: In what ways do the two reports present the same event differently, and what might explain these differences?',
      'Write a sentence giving your opinion: Can media coverage ever be truly neutral?',
    ],
    estimatedTime: '50 minutes',
    dueLesson: 28,
    markingCriteria: [
      'Two genuine reports on the same story included and compared.',
      'All five comparison headings addressed.',
      'Discussion paragraph is analytical rather than simply descriptive.',
      'Personal opinion sentence is clear and justified.',
    ],
    parentGuidance:
      'Media literacy is an increasingly vital skill. Comparing news sources together as a family can make this task more engaging and extend the discussion beyond the homework itself. Good examples can often be found on the BBC News website alongside newspapers such as The Guardian or The Daily Mail.',
    differentiation: {
      support:
        'Compare headlines and language choices only (two of the five headings). Write three sentences of comparison rather than a full paragraph.',
      core: 'Complete all five headings and write the full discussion paragraph.',
      stretch:
        'Research the term "media framing". Write an additional paragraph applying this concept to explain the differences you found between the two reports.',
    },
  },
  {
    id: 'y8-hw-t3-06',
    title: 'Advertisement Analysis',
    yearGroup: 'Year 8',
    termUnit: 'T3: Rhetoric & Media',
    type: 'analysis',
    description:
      'Analyse a print or digital advertisement in detail, exploring how it uses visual and linguistic techniques to persuade its audience.',
    instructions: [
      'Choose an advertisement (print, online banner, magazine, or poster). Bring a copy to your exercise book or describe it in detail.',
      'Analyse the following: the intended audience and how you can tell, the main message or selling point, two visual techniques (e.g. colour, layout, font, image choice) and their effect, two linguistic techniques (e.g. slogan, alliteration, imperative verbs, hyperbole) and their effect.',
      'Write a paragraph of at least 100 words explaining how the advertisement uses a combination of visual and linguistic techniques to persuade the audience.',
      'Add a final sentence: Is this advertisement honest? Does it exaggerate or mislead? Give your view.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 29,
    markingCriteria: [
      'Audience identified with justification.',
      'Two visual and two linguistic techniques analysed.',
      'Paragraph links visual and linguistic elements together rather than treating them separately.',
      'Personal evaluation of honesty included.',
    ],
    parentGuidance:
      'Advertisements are everywhere, so your child can choose one they see in their daily life. Magazine advertisements, social media sponsored posts, and poster campaigns all work well for this task.',
    differentiation: {
      support:
        'Identify the audience, one visual technique, and one linguistic technique. Write five sentences of analysis rather than a full paragraph.',
      core: 'Complete all steps as described.',
      stretch:
        'Research the Advertising Standards Authority (ASA) and their rules about honesty in advertising. Do you think your chosen advertisement would pass their guidelines? Justify your answer with reference to specific elements of the advertisement.',
    },
  },
  {
    id: 'y8-hw-t3-07',
    title: 'Vocabulary Study: Rhetoric and Media Language',
    yearGroup: 'Year 8',
    termUnit: 'T3: Rhetoric & Media',
    type: 'vocabulary',
    description:
      'Build a vocabulary log of key terms for analysing rhetoric and media, to be used in essays and analytical responses throughout the term.',
    instructions: [
      'Create a vocabulary log in your exercise book with three columns: Term, Definition, Real-World Example.',
      'Find definitions and examples for all of the following: rhetoric, anaphora, tricolon, hyperbole, understatement, imperative, juxtaposition (in a media context), connotation, denotation, ideology, propaganda, bias, framing, ethos, pathos, logos.',
      'For each term, write your own real-world example (e.g. a sentence from a speech, a slogan, or a news headline you have seen).',
      'Highlight the five terms you find most useful for your own analytical writing and write a sentence explaining why you chose each one.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 30,
    markingCriteria: [
      'All fifteen terms defined accurately in the student\'s own words.',
      'Real-world examples are original and context-appropriate.',
      'Five "most useful" terms chosen with a reasoned explanation for each.',
    ],
    parentGuidance:
      'These terms will support your child\'s analytical writing throughout the term and into GCSE. A quick verbal quiz (you read the definition, they supply the term) is an effective and low-effort way to reinforce their learning.',
    differentiation: {
      support:
        'Complete ten of the fifteen terms (choose the ones that feel most familiar or useful). Use the glossary in the class booklet to check definitions.',
      core: 'Complete all fifteen terms as described.',
      stretch:
        'Research two additional terms from the field of media studies or linguistics that are not on the list. Add them to your log and explain why they are relevant to the T3 unit.',
    },
  },
  {
    id: 'y8-hw-t3-08',
    title: 'Speech Redraft',
    yearGroup: 'Year 8',
    termUnit: 'T3: Rhetoric & Media',
    type: 'extended-writing',
    description:
      'Redraft and improve your speech from the earlier homework task, incorporating teacher feedback and adding more sophisticated rhetorical techniques.',
    instructions: [
      'Re-read your speech draft and your teacher\'s feedback carefully.',
      'Write a redrafted version of your speech, aiming for 350-450 words.',
      'In your redraft, you must: act on all specific teacher feedback, improve at least two rhetorical techniques you used before (e.g. make the rule of three more powerful, sharpen the emotive language), and add at least one new technique not present in the first draft.',
      'Annotate your redraft to show all changes: put a star next to each improvement and write a brief note (1-2 words) explaining what you improved.',
      'Read the redraft aloud to yourself. Edit any sentences that sound awkward when spoken.',
    ],
    estimatedTime: '50 minutes',
    dueLesson: 32,
    markingCriteria: [
      'Redraft is clearly improved compared to the first draft.',
      'Teacher feedback has been acted upon specifically.',
      'At least one new rhetorical technique added.',
      'Annotations show awareness of improvements made.',
      'Speech reads naturally when spoken aloud.',
    ],
    parentGuidance:
      'Reading the speech aloud is the single most important step in this task. If your child can read it to you, that is even better. Fluency and natural rhythm are key qualities in effective persuasive writing.',
    differentiation: {
      support:
        'Focus on acting on teacher feedback and improving one technique. Aim for 250-300 words.',
      core: 'Complete all steps as described, 350-450 words.',
      stretch:
        'Record yourself delivering the speech (using a phone or tablet). Listen back and identify two aspects of your delivery (e.g. pace, emphasis, pausing) that you could improve. Write a note on what you noticed.',
    },
  },
  {
    id: 'y8-hw-t3-09',
    title: 'Create a Short Media Piece',
    yearGroup: 'Year 8',
    termUnit: 'T3: Rhetoric & Media',
    type: 'creative',
    description:
      'Create an original short media piece (a magazine front page, a campaign poster, or a social media post series) on a topic of your choice, applying the media techniques studied in class.',
    instructions: [
      'Choose ONE of the following formats: a magazine front cover, a campaign poster (e.g. for a school council election or a charity), or a series of three linked social media posts.',
      'Your media piece must have a clear audience and purpose.',
      'Include: a headline or title that uses a rhetorical or linguistic technique, at least one image (drawn, collaged from magazines, or described in detail if creating digitally), a strap line or slogan, and at least two further pieces of text that demonstrate persuasive or media techniques.',
      'On the back or on a separate page, write a 100-word "design rationale" explaining your choices: audience, purpose, and how your techniques are designed to have an effect.',
      'Annotate your media piece with at least five labels identifying techniques and their intended effects.',
    ],
    estimatedTime: '55 minutes',
    dueLesson: 33,
    markingCriteria: [
      'Media piece has a clear, consistent audience and purpose.',
      'All required elements (headline, image, slogan, two further text elements) present.',
      'Five annotations identify techniques and effects.',
      'Design rationale explains choices with reference to audience and purpose.',
      'Media piece shows creativity and deliberate decision-making.',
    ],
    parentGuidance:
      'This creative task asks students to apply media knowledge by producing their own content, not just analysing others\' work. Any medium is acceptable (hand-drawn, cut-and-paste, or digital), so let your child choose the approach that suits them best.',
    differentiation: {
      support:
        'Focus on the campaign poster format as it has fewer required elements. Annotate three techniques rather than five. The design rationale can be 50 words.',
      core: 'Complete all steps as described.',
      stretch:
        'Produce both a campaign poster AND a series of three social media posts on the same topic, ensuring both formats share a consistent visual identity. Compare the two formats in your design rationale.',
    },
  },
  {
    id: 'y8-hw-t3-10',
    title: 'Timed Writing Practice: Persuasive Response',
    yearGroup: 'Year 8',
    termUnit: 'T3: Rhetoric & Media',
    type: 'extended-writing',
    description:
      'Complete a timed persuasive writing task under exam-style conditions, applying all the rhetoric and media techniques studied this term.',
    instructions: [
      'Set a timer for 35 minutes.',
      'Spend 5 minutes planning, then write your response.',
      'Task: Write a speech to your school\'s governors arguing either FOR or AGAINST the following proposal: "Students should not be allowed to use smartphones on school premises."',
      'Your speech must include: a direct address, rhetorical questions, at least one tricolon (rule of three), emotive language, at least one use of ethos OR logos, and a strong conclusion with a call to action.',
      'When the timer stops, put your pen down immediately.',
      'Write a two-sentence self-evaluation: What was the strongest part of your speech? What one change would you make if you had more time?',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 35,
    markingCriteria: [
      'A clear and consistent argument maintained throughout.',
      'All six required techniques present.',
      'Appropriate register for addressing school governors.',
      'Conclusion includes a clear call to action.',
      'Self-evaluation is specific and honest.',
    ],
    parentGuidance:
      'This final timed task consolidates everything your child has learned in the T3 unit and provides practice for the type of writing assessed at GCSE. Encouraging them to plan for five minutes before writing (even in timed conditions) is excellent advice.',
    differentiation: {
      support:
        'Use 40 minutes rather than 35. Aim for four of the six required techniques. Use the technique checklist in the class booklet to tick off techniques as you include them.',
      core: 'Complete the task as described with the 35-minute timer.',
      stretch:
        'After the timed section, spend an additional 10 minutes writing a short reflective analysis (100 words) of your own writing: identify your most effective technique and explain why it works, then identify one technique that could be more sophisticated and explain how you would improve it.',
    },
  },
];

// =============================================================================
// COMBINED EXPORT
// =============================================================================

export const y8HomeworkBank: HomeworkTask[] = [
  ...term1Tasks,
  ...term2Tasks,
  ...term3Tasks,
];

export default y8HomeworkBank;
