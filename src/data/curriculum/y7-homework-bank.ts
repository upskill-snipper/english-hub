export interface HomeworkTask {
  id: string
  title: string
  yearGroup: 'Year 7'
  termUnit: string
  type:
    | 'reading-response'
    | 'extended-writing'
    | 'research'
    | 'creative'
    | 'revision'
    | 'vocabulary'
    | 'grammar-practice'
    | 'analysis'
  description: string
  instructions: string[]
  estimatedTime: string
  dueLesson: number
  markingCriteria: string[]
  parentGuidance: string
  differentiation: {
    support: string
    core: string
    stretch: string
  }
}

export const y7HomeworkBank: HomeworkTask[] = [
  // ─── TERM 1: THE FOX GIRL AND THE WHITE GAZELLE ─────────────────────────────

  {
    id: 'y7-t1-hw-01',
    title: 'Character Diary Entry - Reema or Caylin',
    yearGroup: 'Year 7',
    termUnit: 'T1: The Fox Girl and the White Gazelle',
    type: 'creative',
    description:
      'Write a diary entry from the perspective of either Reema or Caylin after a key event in the opening chapters. Use first-person voice, thoughts, and feelings to bring your chosen character to life.',
    instructions: [
      'Choose either Reema or Caylin as your narrator.',
      'Select a specific event from the chapters you have read so far.',
      'Write 1-2 paragraphs in diary format, using first person (I, my, me).',
      "Include the character's thoughts, feelings, and reactions to events.",
      'Use at least one piece of evidence or detail from the novel to anchor your entry.',
      'Begin with a date or heading such as "Dear Diary" to establish the format.',
    ],
    estimatedTime: '25-30 minutes',
    dueLesson: 3,
    markingCriteria: [
      'Consistent first-person voice throughout',
      'Accurate representation of the character based on evidence from the text',
      'Inclusion of thoughts and feelings, not just events',
      'Controlled paragraphing and punctuation',
    ],
    parentGuidance:
      'Ask your child which character they have chosen and what event they are writing about. Encourage them to refer back to the book rather than relying on memory alone.',
    differentiation: {
      support:
        'Use the sentence starters provided on the revision mat. You may write one paragraph only.',
      core: "Write two paragraphs covering the event and the character's emotional response.",
      stretch:
        'Use structural techniques such as a cliffhanger ending or a shift in tone mid-entry to create effect.',
    },
  },

  {
    id: 'y7-t1-hw-02',
    title: 'Vocabulary Learning - 10 Key Words',
    yearGroup: 'Year 7',
    termUnit: 'T1: The Fox Girl and the White Gazelle',
    type: 'vocabulary',
    description:
      'Learn and practise 10 key vocabulary words from the novel. Be prepared to use these words accurately in class discussion and written work.',
    instructions: [
      'Copy out the 10 words and their definitions into your vocabulary book or on the sheet provided.',
      'For each word, write your own example sentence that shows you understand the meaning.',
      'Learn the spelling of each word - you will be tested in the next lesson.',
      'Words to learn: desolate, resilience, sanctuary, prejudice, perseverance, isolation, empathy, tension, conflict, identity.',
      'Use a dictionary or the glossary in your booklet if you are unsure of any definition.',
    ],
    estimatedTime: '20-25 minutes',
    dueLesson: 2,
    markingCriteria: [
      'All 10 words and definitions present and accurately copied',
      'Each example sentence demonstrates clear understanding of meaning',
      'Correct spelling of all 10 words in the test',
    ],
    parentGuidance:
      'Test your child on the spellings and meanings of the 10 words the evening before the lesson. You could cover the definitions and ask them to explain each word in their own words.',
    differentiation: {
      support:
        'Focus on 6 of the 10 words and write a short phrase rather than a full sentence for each.',
      core: 'Write a full sentence for all 10 words.',
      stretch:
        'Write a short paragraph (4-5 sentences) that uses at least 5 of the 10 words correctly in context.',
    },
  },

  {
    id: 'y7-t1-hw-03',
    title: 'Re-read Chapters and Add Annotations',
    yearGroup: 'Year 7',
    termUnit: 'T1: The Fox Girl and the White Gazelle',
    type: 'reading-response',
    description:
      'Re-read the assigned chapters and annotate your copy or the extract sheet with notes about character, language, and theme. Careful re-reading strengthens your analytical skills.',
    instructions: [
      'Re-read the chapters set by your teacher (check your planner for the exact pages).',
      'As you read, underline or highlight words and phrases that stand out to you.',
      'Add at least 5 annotations explaining why you have highlighted each section.',
      'Your annotations should comment on character, language choice, or theme.',
      'Use the annotation prompts on your booklet insert if you need ideas for what to write.',
      'Bring your annotated copy or sheet to the next lesson.',
    ],
    estimatedTime: '30 minutes',
    dueLesson: 4,
    markingCriteria: [
      'Minimum of 5 annotations present',
      'Annotations refer specifically to words or phrases in the text',
      'At least one annotation links to theme',
      'Comments go beyond plot summary to discuss effect',
    ],
    parentGuidance:
      'Encourage your child to read aloud if they find it easier to concentrate. Remind them that annotations are notes to themselves, so informal language is fine - the important thing is engagement with the text.',
    differentiation: {
      support:
        'Focus on one chapter only and write 3 annotations. Use the sentence frame: "The word \'...\' suggests..."',
      core: 'Annotate both chapters with a minimum of 5 comments.',
      stretch:
        'Write annotations that make connections between the chapters, noting how the writer develops ideas across the two sections.',
    },
  },

  {
    id: 'y7-t1-hw-04',
    title: 'Retrieval Quiz Preparation',
    yearGroup: 'Year 7',
    termUnit: 'T1: The Fox Girl and the White Gazelle',
    type: 'revision',
    description:
      'Prepare for an in-class retrieval quiz by reviewing the plot, characters, and key events covered so far in the novel.',
    instructions: [
      'Read through any notes you have made in class about the novel.',
      'Create a timeline of key events on a piece of paper or in your book.',
      'Write down the names of the main characters and one key fact about each.',
      'Check you can answer these questions: Where does the story take place? What challenges do the main characters face? How do Reema and Caylin first meet?',
      'Use flashcards or the look-cover-write-check method to test yourself on key facts.',
    ],
    estimatedTime: '20 minutes',
    dueLesson: 5,
    markingCriteria: [
      'Ability to recall key plot events accurately in the quiz',
      'Correct identification of main characters and their roles',
      'Accurate knowledge of setting and context',
    ],
    parentGuidance:
      'Quiz your child on key facts about the story. Ask questions like: Who are the two main characters? Where does the story take place? What problem does each character face? Even five minutes of verbal testing makes a significant difference.',
    differentiation: {
      support:
        'Focus your revision on the characters and setting. A simple fact sheet is provided in your booklet.',
      core: 'Revise plot, character, and setting as described above.',
      stretch:
        'Try to recall specific quotations or details from the text to support your answers in the quiz.',
    },
  },

  {
    id: 'y7-t1-hw-05',
    title: 'Draft a PEE Paragraph',
    yearGroup: 'Year 7',
    termUnit: 'T1: The Fox Girl and the White Gazelle',
    type: 'analysis',
    description:
      'Write a PEE (Point, Evidence, Explanation) paragraph in response to the question: "How does the writer present Reema as a determined character?"',
    instructions: [
      'Start with a clear Point that directly answers the question.',
      'Choose a relevant quotation from the novel as your Evidence.',
      'Write an Explanation that analyses the quotation - focus on specific words and their effect.',
      'Your paragraph should be 5-8 sentences long.',
      'Avoid retelling the plot - your paragraph should analyse, not describe.',
      'Use the PEE scaffold sheet if you need support structuring your ideas.',
    ],
    estimatedTime: '25-30 minutes',
    dueLesson: 6,
    markingCriteria: [
      'A clear, focused point in the opening sentence',
      'An accurate, relevant quotation embedded into a sentence',
      'An explanation that analyses specific words and their effect on the reader',
      "No plot retelling - the focus is on the writer's craft",
    ],
    parentGuidance:
      'Remind your child of the PEE structure: Point (what you want to say), Evidence (a quotation), Explanation (why the writer chose those words and what effect they have). Encourage them to read their paragraph aloud to check it flows.',
    differentiation: {
      support:
        'Use the PEE sentence starters: "The writer presents Reema as... / For example... / This suggests..."',
      core: 'Write a full PEE paragraph independently using the structure above.',
      stretch:
        'Write a PEE paragraph and add a further development sentence that links to theme or context.',
    },
  },

  {
    id: 'y7-t1-hw-06',
    title: 'Setting Description - Govanhill or the Syrian Streets',
    yearGroup: 'Year 7',
    termUnit: 'T1: The Fox Girl and the White Gazelle',
    type: 'creative',
    description:
      'Write a descriptive paragraph about one of the settings in the novel. Focus on using sensory language and specific details to bring the location to life for the reader.',
    instructions: [
      "Choose one setting from the novel: either the streets of Govanhill or a scene from Reema's memories.",
      'Write one or two descriptive paragraphs using sensory language (sight, sound, smell, touch).',
      'Include at least one simile and one piece of personification.',
      'Use details from the novel to make your description accurate to the story.',
      'Aim for precise, carefully chosen vocabulary rather than lots of adjectives.',
    ],
    estimatedTime: '25-30 minutes',
    dueLesson: 7,
    markingCriteria: [
      'Effective use of at least three different senses',
      'Correct use of simile and personification',
      'Vocabulary choices that are precise and varied',
      'Atmosphere created through language rather than stated directly',
    ],
    parentGuidance:
      'Ask your child to read their description aloud to you. As a listener, tell them which image stood out most vividly and why. This oral feedback is a useful editing prompt.',
    differentiation: {
      support:
        'Use the sensory vocabulary mat provided. Write one paragraph focusing on sight and sound only.',
      core: 'Write two paragraphs using three or more senses and both required techniques.',
      stretch:
        'Vary your sentence lengths deliberately - mix short sentences for impact with longer, detailed ones to create rhythm and atmosphere.',
    },
  },

  {
    id: 'y7-t1-hw-07',
    title: 'Character Comparison Chart',
    yearGroup: 'Year 7',
    termUnit: 'T1: The Fox Girl and the White Gazelle',
    type: 'analysis',
    description:
      'Complete a character comparison chart for Reema and Caylin, identifying similarities and differences in their backgrounds, personalities, and challenges.',
    instructions: [
      'Draw a table with three columns: Reema / Both / Caylin.',
      'Under each heading, note at least three facts or characteristics.',
      'Use evidence from the novel to support each point - include page numbers or brief quotations if possible.',
      'At the bottom of your chart, write one sentence summarising the most important similarity between the two characters.',
      'Bring your completed chart to class - it will be used in a group discussion.',
    ],
    estimatedTime: '20 minutes',
    dueLesson: 8,
    markingCriteria: [
      'Minimum of three points for each column',
      'Points are supported by specific evidence from the novel',
      'At least one similarity and one difference are clearly identified',
      'Summary sentence is accurate and thoughtful',
    ],
    parentGuidance:
      'Ask your child to explain who Reema and Caylin are and what makes them similar and different. If they struggle, encourage them to look back at the early chapters of the novel for clues.',
    differentiation: {
      support:
        'A pre-drawn table is available in the booklet. Fill in the boxes with brief notes rather than full sentences.',
      core: 'Create and complete the full comparison chart as described.',
      stretch:
        "After completing the chart, write a short paragraph explaining what the similarities between Reema and Caylin suggest about the novel's themes.",
    },
  },

  {
    id: 'y7-t1-hw-08',
    title: 'Mind Map - Themes in the Novel',
    yearGroup: 'Year 7',
    termUnit: 'T1: The Fox Girl and the White Gazelle',
    type: 'analysis',
    description:
      'Create a detailed mind map exploring the key themes in the novel so far. Connect themes to specific evidence from the text.',
    instructions: [
      'Place "Themes in The Fox Girl and the White Gazelle" in the centre of the page.',
      'Add at least four theme branches: suggested themes include identity, friendship, prejudice, and belonging.',
      'For each theme, add at least two supporting points or pieces of evidence from the novel.',
      'Use colour coding, diagrams, or symbols to organise your ideas visually.',
      'On the back of your mind map, write a sentence explaining which theme you think is most important and why.',
    ],
    estimatedTime: '25 minutes',
    dueLesson: 9,
    markingCriteria: [
      'Minimum of four themes included',
      'Each theme supported by at least two specific points or pieces of evidence',
      'Clear visual organisation with branches and sub-branches',
      'Reflective sentence on the reverse is thoughtful and justified',
    ],
    parentGuidance:
      'Mind maps are a highly effective revision tool. Encourage your child to use colour and to connect ideas across branches - for example, how the theme of identity connects to the theme of belonging.',
    differentiation: {
      support:
        'Use the part-completed mind map template in your booklet. You need to add evidence only.',
      core: 'Create the full mind map independently with four themes.',
      stretch:
        'Add connection lines between different themes on your mind map, with annotations explaining how the themes are linked.',
    },
  },

  {
    id: 'y7-t1-hw-09',
    title: 'Reading Response Letter',
    yearGroup: 'Year 7',
    termUnit: 'T1: The Fox Girl and the White Gazelle',
    type: 'reading-response',
    description:
      'Write an informal letter to the author, Victoria Williamson, explaining your response to the novel so far. Share what you have enjoyed, what has surprised you, and any questions you would like to ask her.',
    instructions: [
      'Use the correct letter format: your address, the date, and "Dear Victoria Williamson,".',
      'Write three paragraphs: what you have enjoyed, what has surprised or moved you, and questions you have for the author.',
      'Be specific - refer to characters, events, or moments in the novel rather than speaking in general terms.',
      'End with an appropriate closing ("Yours sincerely" or "Kind regards") and your name.',
      'Aim for one side of A4 in length.',
    ],
    estimatedTime: '25-30 minutes',
    dueLesson: 10,
    markingCriteria: [
      'Correct letter format used throughout',
      'Specific references to characters or events in the novel',
      'Three distinct paragraphs with clear focus in each',
      'An appropriate and engaging tone - personal but respectful',
    ],
    parentGuidance:
      'Encourage your child to think about their genuine response to the novel rather than writing what they think the teacher wants to hear. Personal, honest reactions are more interesting to read and more useful as a learning exercise.',
    differentiation: {
      support:
        'Write two paragraphs only. Use the sentence starters provided: "I really enjoyed the part where... / I was surprised when... / One question I would like to ask you is..."',
      core: 'Write all three paragraphs in full letter format.',
      stretch:
        'Include a paragraph analysing why you think the author made a specific narrative choice, connecting your personal response to craft and technique.',
    },
  },

  {
    id: 'y7-t1-hw-10',
    title: 'Timed Analysis Paragraph - Practice',
    yearGroup: 'Year 7',
    termUnit: 'T1: The Fox Girl and the White Gazelle',
    type: 'analysis',
    description:
      'Write a timed analysis paragraph (15 minutes) in response to the question: "How does the writer use language to present the theme of belonging in the novel?"',
    instructions: [
      'Set a timer for 15 minutes before you begin writing.',
      'Plan for 2-3 minutes: jot down a quotation and your key point.',
      'Write your PEE paragraph in the remaining time - do not stop to edit until the timer ends.',
      'After the timer, spend 5 minutes reading back and adding any missing analysis.',
      'Mark your paragraph against the criteria below before handing it in.',
    ],
    estimatedTime: '20 minutes (timed)',
    dueLesson: 11,
    markingCriteria: [
      'A clear point that directly addresses the question',
      'An accurately copied quotation embedded into a sentence',
      'Analysis of specific language choices and their effect',
      'Reference to the theme of belonging',
    ],
    parentGuidance:
      'Time-pressured writing is a skill that needs regular practice. Encourage your child to trust their knowledge and write without stopping during the timed section - they can improve it afterwards. Reassure them that a short, focused paragraph is better than a long, unfocused one.',
    differentiation: {
      support:
        'Use the quotation bank on the back of your booklet. Write your paragraph without a strict time limit on the first attempt.',
      core: 'Complete the timed paragraph as described above.',
      stretch: 'Write two PEE paragraphs in 20 minutes, covering two different language examples.',
    },
  },

  // ─── TERM 2: VOICE AND IDENTITY ─────────────────────────────────────────────

  {
    id: 'y7-t2-hw-01',
    title: 'Personal Narrative - A Moment That Mattered',
    yearGroup: 'Year 7',
    termUnit: 'T2: Voice and Identity',
    type: 'extended-writing',
    description:
      'Write a personal narrative about a moment in your life that felt significant. Focus on crafting a clear narrative voice and using specific details to make the experience vivid for the reader.',
    instructions: [
      'Choose a real or imagined memory - a moment of change, achievement, difficulty, or discovery.',
      'Write in first person, past tense.',
      'Include specific details: what you saw, heard, felt, and thought at the time.',
      'Structure your narrative with a clear beginning, middle, and end.',
      'Use at least one piece of dialogue to bring the scene to life.',
      'Aim for 3-4 paragraphs.',
    ],
    estimatedTime: '35-40 minutes',
    dueLesson: 14,
    markingCriteria: [
      'A distinct, consistent first-person narrative voice',
      'Specific sensory details that bring the moment to life',
      'Clear structure with a purposeful ending',
      'Correctly punctuated dialogue',
      'Varied sentence structures for effect',
    ],
    parentGuidance:
      'Reassure your child that this task does not need to be about a dramatic event - small, everyday moments often make the best personal writing. Encourage them to write honestly and to trust their own voice.',
    differentiation: {
      support:
        'Use the narrative planning frame provided to outline your beginning, middle, and end before you start writing.',
      core: 'Write 3-4 paragraphs with dialogue and sensory detail as described.',
      stretch:
        'Experiment with non-linear structure - for example, begin in the middle of the action and use a flashback to provide context.',
    },
  },

  {
    id: 'y7-t2-hw-02',
    title: 'Author Biography Research',
    yearGroup: 'Year 7',
    termUnit: 'T2: Voice and Identity',
    type: 'research',
    description:
      'Research the biography of an author whose work you are studying or have read independently. Identify key facts about their life and consider how their background may have influenced their writing.',
    instructions: [
      'Choose an author you have read or are currently studying.',
      'Use books, the school library, or reputable websites to research their biography.',
      'Take notes under the following headings: Early life; Education; Career; Key works; Themes in their writing.',
      'Write a short biography of 200-250 words using your notes.',
      'Add one final sentence explaining how one aspect of their life may have influenced their writing.',
      'List at least one source at the bottom of your work.',
    ],
    estimatedTime: '30-35 minutes',
    dueLesson: 15,
    markingCriteria: [
      'Accurate biographical information under the required headings',
      "Biography is written in the student's own words, not copied from a source",
      "A clear and supported link made between the author's life and their writing",
      'At least one source listed',
    ],
    parentGuidance:
      'Help your child identify a suitable author if they are unsure. Remind them to make notes first and then write in their own words - copying directly from a website is not research. Ask them to read their final biography aloud to check it makes sense.',
    differentiation: {
      support:
        'A fact-finding sheet with sentence starters is available. You may write in bullet points for the notes section.',
      core: 'Complete the full biography task as described.',
      stretch:
        "Write an extended paragraph evaluating how far the author's biography helps a reader understand their work, using specific examples.",
    },
  },

  {
    id: 'y7-t2-hw-03',
    title: 'Vocabulary Study - Voice and Identity Word List',
    yearGroup: 'Year 7',
    termUnit: 'T2: Voice and Identity',
    type: 'vocabulary',
    description:
      'Study and learn the key vocabulary for the Voice and Identity unit. You will be tested in the next lesson.',
    instructions: [
      'Copy the 10 key words and their definitions into your vocabulary book.',
      'Words to learn: narration, perspective, tone, register, rhetoric, figurative, connotation, motif, symbolism, authenticity.',
      'For each word, write your own example sentence showing you understand the meaning.',
      'Use the look-cover-write-check method to practise spelling all 10 words.',
      'Be ready to use these words in class discussion and written analysis.',
    ],
    estimatedTime: '20-25 minutes',
    dueLesson: 13,
    markingCriteria: [
      'All 10 words, definitions, and example sentences present',
      'Correct spelling of all 10 words in the test',
      'Example sentences demonstrate genuine understanding of meaning',
    ],
    parentGuidance:
      'Test your child on these words before the lesson. Cover the definitions and ask them to explain each word in their own words. These are analytical vocabulary words they will use throughout the year.',
    differentiation: {
      support: 'Learn 6 of the 10 words. Write a phrase rather than a full sentence for each.',
      core: 'Learn and write sentences for all 10 words.',
      stretch:
        'Write a single paragraph of 5-6 sentences that correctly uses at least 6 of the 10 words in context.',
    },
  },

  {
    id: 'y7-t2-hw-04',
    title: 'Descriptive Writing - A Place That Means Something to You',
    yearGroup: 'Year 7',
    termUnit: 'T2: Voice and Identity',
    type: 'creative',
    description:
      'Write a descriptive piece about a place that holds personal significance for you. This task focuses on developing voice through the specific, personal details you choose to include.',
    instructions: [
      'Choose a real or imagined place that you connect with - a room, a street, a landscape.',
      'Write two paragraphs describing the place using sensory language.',
      'Your description should reveal something about how you feel about the place through your word choices.',
      'Include at least one extended metaphor or sustained image.',
      'Read your work aloud before submitting - adjust any words that do not sound like your voice.',
    ],
    estimatedTime: '30 minutes',
    dueLesson: 16,
    markingCriteria: [
      'Two well-developed paragraphs with clear sensory detail',
      "Vocabulary choices that reveal the writer's attitude or emotion",
      'Correct and effective use of extended metaphor or sustained image',
      'A distinctive personal voice throughout',
    ],
    parentGuidance:
      'Ask your child to tell you about the place they have chosen before they write about it. This oral rehearsal often helps them identify the most important details to include.',
    differentiation: {
      support:
        'Use the descriptive writing frame provided. Focus on two senses and write one paragraph only.',
      core: 'Complete two full paragraphs as described.',
      stretch:
        'Use structural contrast - open with a detailed, slow-paced description and close with a short, punchy sentence that shifts the mood.',
    },
  },

  {
    id: 'y7-t2-hw-05',
    title: 'Perspective Writing Task - The Same Event, Two Views',
    yearGroup: 'Year 7',
    termUnit: 'T2: Voice and Identity',
    type: 'creative',
    description:
      'Write the same event twice from two different perspectives. This task explores how voice, tone, and word choice shift depending on who is narrating.',
    instructions: [
      'Choose a simple scenario (examples: a disagreement, a first day somewhere new, receiving unexpected news).',
      'Write one paragraph from the perspective of Person A.',
      'Write one paragraph from the perspective of Person B - the same event, but seen differently.',
      "Use vocabulary, tone, and details that are specific to each character's viewpoint.",
      'Do not simply change "I" to a different name - the voice must feel genuinely different.',
      'At the bottom, write one sentence explaining the most important difference between the two versions.',
    ],
    estimatedTime: '30 minutes',
    dueLesson: 17,
    markingCriteria: [
      'Two clearly distinct voices used in each paragraph',
      'The same event is recognisable in both versions',
      'Vocabulary and tone choices reflect each perspective',
      'Reflective sentence at the end is insightful',
    ],
    parentGuidance:
      'Read both paragraphs aloud together and discuss: do they sound like different people? Would you know they were about the same event? This kind of conversation helps your child refine their sense of voice.',
    differentiation: {
      support:
        'A scenario is provided for you. Use the word bank to help you choose perspective-appropriate vocabulary.',
      core: 'Choose your own scenario and write both perspectives independently.',
      stretch:
        'Add a third paragraph from the perspective of a bystander who is neutral, showing how an outside view differs from both participants.',
    },
  },

  {
    id: 'y7-t2-hw-06',
    title: 'Letter from a Character',
    yearGroup: 'Year 7',
    termUnit: 'T2: Voice and Identity',
    type: 'creative',
    description:
      "Write a letter from the point of view of a character studied this term. The letter should be addressed to another character or to the reader, and should reveal the character's inner world.",
    instructions: [
      'Choose a character from a text studied this term.',
      'Decide who the letter is addressed to - another character, a family member, or the reader directly.',
      'Use correct letter format: address, date, opening, closing.',
      "Write 2-3 paragraphs revealing the character's feelings, motivations, and concerns.",
      "Use language and vocabulary that feel consistent with the character's personality as presented in the text.",
    ],
    estimatedTime: '25-30 minutes',
    dueLesson: 18,
    markingCriteria: [
      'Correct letter format',
      'Voice is consistent with the character as presented in the text',
      "Insights into the character's inner thoughts and feelings",
      'Specific references to events or relationships from the text',
    ],
    parentGuidance:
      'Ask your child which character they have chosen and why. Encourage them to think about what that character would NOT say as well as what they would - restraint in character voice is as important as expression.',
    differentiation: {
      support:
        'A character voice guide is provided with sentence starters and key phrases based on how the character speaks in the text.',
      core: 'Write the full letter independently.',
      stretch:
        "Write an unsent letter - one the character writes but decides not to send. Add a brief note (2-3 sentences) in the character's voice explaining why they chose not to send it.",
    },
  },

  {
    id: 'y7-t2-hw-07',
    title: 'Grammar Exercise - Sentence Types',
    yearGroup: 'Year 7',
    termUnit: 'T2: Voice and Identity',
    type: 'grammar-practice',
    description:
      'Practise identifying and writing the four sentence types: simple, compound, complex, and compound-complex. Understanding sentence types is essential for developing a varied and controlled writing style.',
    instructions: [
      'Read through the definitions and examples of the four sentence types in your grammar booklet.',
      'Complete the identification exercise: label each of the 10 provided sentences as simple, compound, complex, or compound-complex.',
      'Write your own example of each sentence type (4 original sentences in total).',
      'Write a short paragraph (4-5 sentences) on any topic that deliberately uses all four sentence types.',
      'Underline and label each sentence type in your paragraph.',
    ],
    estimatedTime: '25 minutes',
    dueLesson: 19,
    markingCriteria: [
      'All 10 identification sentences correctly labelled',
      'One accurate original example of each sentence type',
      'Paragraph uses all four sentence types with correct punctuation',
      'Labels in the paragraph are accurate',
    ],
    parentGuidance:
      'If your child is unsure about the difference between a compound sentence (two main clauses joined by a conjunction) and a complex sentence (a main clause with a subordinate clause), try looking up a short online explanation together.',
    differentiation: {
      support:
        'Focus on simple and compound sentences only. Complete 6 of the 10 identification sentences.',
      core: 'Complete all four sentence types as described.',
      stretch:
        'Write a paragraph that uses sentence types deliberately for effect - for example, using a series of short simple sentences to build tension, then a long complex sentence to resolve it.',
    },
  },

  {
    id: 'y7-t2-hw-08',
    title: 'Reading Journal Entry',
    yearGroup: 'Year 7',
    termUnit: 'T2: Voice and Identity',
    type: 'reading-response',
    description:
      'Write a reading journal entry in response to a text read this term. A reading journal combines personal response with analytical observation.',
    instructions: [
      'Write the title, author, and date at the top of your journal entry.',
      'Paragraph 1: Your personal response - what did you feel, think, or notice while reading?',
      'Paragraph 2: A moment of craft - choose one technique or language choice the writer uses and explain why it is effective.',
      'Paragraph 3: A question - write one genuine question the text raises for you.',
      'Aim for 3 paragraphs of 4-6 sentences each.',
    ],
    estimatedTime: '25-30 minutes',
    dueLesson: 20,
    markingCriteria: [
      'A genuine personal response in paragraph 1 - not a plot summary',
      'Identification and analysis of a specific technique in paragraph 2',
      'A thoughtful, open question in paragraph 3 that goes beyond plot',
      'Controlled paragraphing throughout',
    ],
    parentGuidance:
      "A reading journal should sound like your child's own voice. It is not a formal essay. Encourage them to write as they speak about books - with opinion, curiosity, and personality.",
    differentiation: {
      support:
        'Use the journal template provided. Write 3 sentences for each paragraph rather than 4-6.',
      core: 'Write all three paragraphs as described.',
      stretch:
        'Add a fourth paragraph connecting this text to another text you have read, noting a similarity or contrast in how voice or identity is explored.',
    },
  },

  {
    id: 'y7-t2-hw-09',
    title: 'Figurative Language Hunt',
    yearGroup: 'Year 7',
    termUnit: 'T2: Voice and Identity',
    type: 'analysis',
    description:
      'Search through a text studied this term to find and analyse examples of figurative language. Identifying figurative language in context develops your ability to write analytically.',
    instructions: [
      'Read back through a text or extract studied in class this term.',
      'Find and copy out one example each of: simile, metaphor, personification, and hyperbole.',
      'For each example, write 1-2 sentences explaining the effect - what does it make the reader feel, see, or understand?',
      'Organise your findings in a table with three columns: Technique / Example / Effect.',
      'At the bottom, write which example you found most effective and why.',
    ],
    estimatedTime: '25 minutes',
    dueLesson: 21,
    markingCriteria: [
      'Accurate identification of all four techniques',
      'Examples are correctly copied from the text',
      'Effect comments go beyond description to discuss what the technique makes the reader feel or think',
      'Final judgement sentence is justified',
    ],
    parentGuidance:
      'Ask your child to explain what each technique is and to read their favourite example aloud. Ask them: what picture does this create in your mind? This helps them develop the explanation part of their analysis.',
    differentiation: {
      support:
        'Use the figurative language definitions sheet and find two techniques (simile and metaphor) only.',
      core: 'Find all four techniques and complete the table.',
      stretch:
        "Write an extended analysis of the most effective example, explaining how the figurative language connects to the text's wider themes.",
    },
  },

  {
    id: 'y7-t2-hw-10',
    title: 'Creative Redraft - Improving a Piece of Your Own Writing',
    yearGroup: 'Year 7',
    termUnit: 'T2: Voice and Identity',
    type: 'extended-writing',
    description:
      'Return to a piece of creative writing completed earlier this term and produce an improved redraft. Redrafting is a core skill - professional writers always revise their work.',
    instructions: [
      'Choose one piece of creative writing completed during this unit.',
      'Read it carefully, noting where you could improve vocabulary, structure, or technique.',
      'Produce a redraft of the piece, making at least five specific improvements.',
      'On the same page or on a separate sheet, annotate your redraft with labels explaining what you changed and why.',
      'Submit both the original and the redraft.',
    ],
    estimatedTime: '35 minutes',
    dueLesson: 22,
    markingCriteria: [
      'Clear evidence of at least five specific improvements from original to redraft',
      'Annotations accurately identify what was changed',
      'Changes demonstrate understanding of the marking criteria from the original task',
      'The overall quality of writing is demonstrably improved in the redraft',
    ],
    parentGuidance:
      'Ask your child to show you both the original and the redraft and to explain one change they are proud of. This helps consolidate their awareness of craft decisions. Praise the effort of redrafting - many students find it harder than writing a first draft.',
    differentiation: {
      support:
        'Make three specific improvements. Use the editing checklist provided to guide your changes.',
      core: 'Make five improvements and annotate as described.',
      stretch:
        'In addition to the annotations, write a short reflective paragraph explaining which improvement made the biggest difference to the quality of your writing and why.',
    },
  },

  // ─── TERM 3: STORIES AND POETRY (SHAPING MEANING) ───────────────────────────

  {
    id: 'y7-t3-hw-01',
    title: 'Folk Tale Retelling',
    yearGroup: 'Year 7',
    termUnit: 'T3: Stories and Poetry - Shaping Meaning',
    type: 'creative',
    description:
      'Retell a folk tale or traditional story from a different perspective or in a different setting. This task develops your understanding of narrative structure and voice.',
    instructions: [
      'Choose a folk tale you know - this could be a story from any culture.',
      'Decide on a new angle: a different narrator, a modern setting, or a changed ending.',
      'Write your retelling in 3-4 paragraphs.',
      'Keep the core structure of the original (a problem, a journey or challenge, a resolution) but make it clearly your own.',
      'Include at least one piece of descriptive language and one piece of dialogue.',
    ],
    estimatedTime: '35-40 minutes',
    dueLesson: 25,
    markingCriteria: [
      'The original story is recognisable but has been meaningfully transformed',
      'A clear narrative arc with beginning, middle, and end',
      'Effective use of descriptive language and dialogue',
      'A consistent narrative voice throughout',
    ],
    parentGuidance:
      'If your child is unsure which folk tale to choose, discuss family stories or traditional tales from your own cultural background - these often make the richest material. Any folk tale from any culture is valid.',
    differentiation: {
      support:
        'Use the provided folk tale structure template. Focus on retelling the story in a modern setting without changing the perspective.',
      core: 'Change either perspective or setting and write 3-4 paragraphs independently.',
      stretch:
        "Use your retelling to comment on or subvert the original tale's moral lesson, making a clear thematic point through your narrative choices.",
    },
  },

  {
    id: 'y7-t3-hw-02',
    title: 'Poem Annotation - Close Reading',
    yearGroup: 'Year 7',
    termUnit: 'T3: Stories and Poetry - Shaping Meaning',
    type: 'analysis',
    description:
      'Annotate a poem studied this term in detail, identifying and commenting on language techniques, structure, and theme.',
    instructions: [
      'Print or copy the poem onto a piece of paper with wide margins.',
      'Read the poem at least three times before annotating.',
      'Add a minimum of 6 annotations, covering: language techniques (e.g. metaphor, repetition), the effect of each technique, structural choices (e.g. line breaks, stanza length), and theme.',
      'Circle or underline the specific word or phrase each annotation relates to.',
      "At the bottom of the page, write a one-sentence summary of the poem's central message.",
    ],
    estimatedTime: '25-30 minutes',
    dueLesson: 24,
    markingCriteria: [
      'Minimum of 6 annotations present',
      'Each annotation refers to a specific word or phrase',
      'At least one annotation discusses structure',
      'Comments discuss effect on the reader, not just identification of technique',
      'Central message summary is accurate and insightful',
    ],
    parentGuidance:
      'Encourage your child to read the poem aloud more than once before annotating. Ask them: what feeling does this poem give you? What is the most interesting or unusual word? These are good starting points for annotation.',
    differentiation: {
      support:
        'Annotate 4 of the 6 required sections. Use the annotation prompt questions provided.',
      core: 'Complete all 6 annotations as described.',
      stretch:
        "Write a two-sentence annotation for each point, covering both technique identification and its connection to the poem's overall meaning or theme.",
    },
  },

  {
    id: 'y7-t3-hw-03',
    title: 'Vocabulary Test Preparation - Poetry Terms',
    yearGroup: 'Year 7',
    termUnit: 'T3: Stories and Poetry - Shaping Meaning',
    type: 'revision',
    description:
      'Revise and learn the key poetry vocabulary for this unit. You will be tested in the next lesson.',
    instructions: [
      'Copy the following 10 poetry terms and their definitions into your vocabulary book.',
      'Terms to learn: stanza, enjambment, caesura, volta, imagery, tone, rhythm, rhyme scheme, alliteration, assonance.',
      'Write one example of each term (either from a poem you have read or invented by you).',
      'Practise spelling all 10 terms using the look-cover-write-check method.',
      'Create a quick-reference card with the terms grouped into: sound techniques, structural techniques, and meaning/effect.',
    ],
    estimatedTime: '25 minutes',
    dueLesson: 23,
    markingCriteria: [
      'All 10 terms and definitions correctly recorded',
      'One accurate example for each term',
      'Correct spelling of all 10 terms in the test',
      'Quick-reference card is logically organised',
    ],
    parentGuidance:
      'Test your child on the poetry terms verbally. Ask: "What is enjambment? Can you give me an example?" This verbal practice is more effective than silent reading of notes.',
    differentiation: {
      support: 'Focus on 6 terms: stanza, imagery, tone, alliteration, rhyme scheme, and volta.',
      core: 'Learn all 10 terms as described.',
      stretch:
        'Write a short paragraph (4-5 sentences) about a poem using at least 6 of the 10 terms correctly.',
    },
  },

  {
    id: 'y7-t3-hw-04',
    title: 'Comparative Paragraph - Two Poems',
    yearGroup: 'Year 7',
    termUnit: 'T3: Stories and Poetry - Shaping Meaning',
    type: 'analysis',
    description:
      'Write a comparative paragraph exploring how two poems studied this term present a similar theme. Comparison is a key analytical skill used throughout GCSE and beyond.',
    instructions: [
      'Choose two poems from the unit that share a theme (e.g. loss, identity, nature, conflict).',
      'Write one comparative paragraph (8-10 sentences) exploring how the poets present the theme differently.',
      'Use comparative connectives: "Similarly...", "In contrast...", "Both poets...", "While [Poet A]..., [Poet B]..."',
      'Include one quotation from each poem.',
      'Analyse specific language choices rather than describing what the poem is about.',
      'Conclude your paragraph with a sentence explaining which poem you find more effective and why.',
    ],
    estimatedTime: '30 minutes',
    dueLesson: 26,
    markingCriteria: [
      'A clear comparative focus on theme throughout',
      'One accurate quotation from each poem, embedded into a sentence',
      'Effective use of comparative connectives',
      'Analysis of language choices rather than plot or content summary',
      'A justified concluding judgement',
    ],
    parentGuidance:
      'Comparative writing can feel challenging at first. Remind your child that they do not need to write about the poems separately - the goal is to move between them throughout the paragraph, constantly making comparisons.',
    differentiation: {
      support:
        'Use the comparative writing frame: "In [Poem A], the poet uses... / Similarly, in [Poem B]... / However, while [Poem A]... [Poem B]..."',
      core: 'Write the full comparative paragraph independently.',
      stretch:
        'Write a second comparative paragraph exploring a different aspect (e.g. structure or form rather than language).',
    },
  },

  {
    id: 'y7-t3-hw-05',
    title: 'Write Your Own Poem',
    yearGroup: 'Year 7',
    termUnit: 'T3: Stories and Poetry - Shaping Meaning',
    type: 'creative',
    description:
      'Write an original poem inspired by a theme, form, or technique from the poetry studied this term. This task asks you to become a poet yourself, making deliberate craft decisions.',
    instructions: [
      'Choose a theme that matters to you or one you have explored in this unit.',
      'Decide on a form: free verse, a specific rhyme scheme, or a form inspired by one of the poems you have read.',
      'Write your poem (aim for 12-20 lines).',
      'Deliberately include at least two named techniques (e.g. alliteration, extended metaphor, enjambment).',
      "On the same page, write a brief poet's note (3-5 sentences) explaining the choices you made.",
    ],
    estimatedTime: '30-35 minutes',
    dueLesson: 27,
    markingCriteria: [
      'A poem that has clearly been crafted - not stream of consciousness',
      'At least two named techniques used deliberately',
      "A poet's note that accurately identifies the choices made",
      "A sense of the writer's individual voice",
    ],
    parentGuidance:
      'Encourage your child to draft freely first and then go back to improve - good poetry is usually the result of editing, not first-draft inspiration. Ask them to read their poem aloud to you to check the rhythm and sound.',
    differentiation: {
      support:
        "Use the poetry writing scaffold provided. Aim for 8-10 lines and identify one technique in your poet's note.",
      core: "Write a 12-20 line poem with two techniques and a poet's note.",
      stretch:
        "Write a poem that uses a structural technique deliberately (e.g. a volta, a repeated refrain, or a contrasting final stanza) and explain its effect in your poet's note.",
    },
  },

  {
    id: 'y7-t3-hw-06',
    title: 'Poetry Analysis Draft',
    yearGroup: 'Year 7',
    termUnit: 'T3: Stories and Poetry - Shaping Meaning',
    type: 'analysis',
    description:
      'Write a draft analytical response to a poetry question. This homework prepares you for written assessments by practising extended analysis in a low-pressure setting.',
    instructions: [
      'Question: "How does the poet use language and structure to convey emotion in this poem?"',
      'Write two PEE paragraphs in response to the question.',
      'In paragraph 1, analyse language (choose a specific word, phrase, or technique).',
      'In paragraph 2, analyse structure (comment on a structural choice such as stanza length, line breaks, or the volta).',
      'Each paragraph should be 6-8 sentences long.',
      'End with a one-sentence conclusion summarising the overall effect of the poem.',
    ],
    estimatedTime: '35-40 minutes',
    dueLesson: 28,
    markingCriteria: [
      'Two distinct paragraphs clearly focused on language and structure respectively',
      'One embedded quotation per paragraph',
      'Analysis of specific choices and their effect - not just identification',
      'A clear and relevant conclusion',
    ],
    parentGuidance:
      'Remind your child that a draft does not need to be perfect - the goal is to practise the structure of analytical writing. Ask them: does each paragraph make a clear point? Is there a quotation? Is the quotation explained?',
    differentiation: {
      support: 'Write one paragraph only (language focus). Use the PEE scaffold frame.',
      core: 'Write both paragraphs as described.',
      stretch:
        "Add a third paragraph evaluating whether the poet's technique is effective, giving a personal and justified response.",
    },
  },

  {
    id: 'y7-t3-hw-07',
    title: 'Reading Log - Independent Reading Record',
    yearGroup: 'Year 7',
    termUnit: 'T3: Stories and Poetry - Shaping Meaning',
    type: 'reading-response',
    description:
      'Complete a reading log entry for your current independent reading book. Regular independent reading is the single most effective way to improve your writing and vocabulary.',
    instructions: [
      'At the top of the page, record: Book title, author, genre, and date.',
      'Write the pages you have read this week.',
      'In 4-6 sentences, describe the most interesting or significant thing that happened in your reading this week.',
      'Choose one word or phrase from your reading that you found interesting, unusual, or effective. Write it down and explain why you chose it.',
      'Rate the book out of 10 and give a brief reason for your rating.',
    ],
    estimatedTime: '15-20 minutes',
    dueLesson: 29,
    markingCriteria: [
      'All required information present: title, author, genre, pages read',
      'The response shows genuine engagement with the text',
      'Word or phrase choice is interesting and the explanation shows understanding',
      'Rating is accompanied by a justified reason',
    ],
    parentGuidance:
      'Ask your child about their independent reading book. Even a brief conversation about what they are reading - who the characters are, what is happening, whether they are enjoying it - greatly supports reading development. If they do not have a book, speak to their class teacher.',
    differentiation: {
      support:
        'A reading log template is available. Write 3 sentences for the summary section rather than 4-6.',
      core: 'Complete the full reading log as described.',
      stretch:
        'In addition to the standard log, write one sentence connecting a theme in your independent reading book to a theme in a text studied in class this term.',
    },
  },

  {
    id: 'y7-t3-hw-08',
    title: 'Research - Cultural Context of a Poem or Story',
    yearGroup: 'Year 7',
    termUnit: 'T3: Stories and Poetry - Shaping Meaning',
    type: 'research',
    description:
      'Research the cultural or historical context of one poem or story studied this term. Understanding context enriches your ability to analyse and interpret a text.',
    instructions: [
      'Choose one poem or story from this unit.',
      "Research one of the following: the culture or country the text comes from; the historical period in which it was written; the author's own background and why they may have written this text.",
      'Take notes under the heading: "What context helps me understand this text better?"',
      'Write a short informative paragraph of 100-150 words summarising what you have found.',
      'Finish with one sentence explaining how this context changes or deepens your understanding of the text.',
      'List one source.',
    ],
    estimatedTime: '25-30 minutes',
    dueLesson: 30,
    markingCriteria: [
      'Research is relevant and accurate',
      "Paragraph is written in the student's own words",
      'A clear and specific link made between context and text at the end',
      'One source listed',
    ],
    parentGuidance:
      'Help your child think about which aspect of context would be most interesting to research. Remind them to take notes first and then write up - they should not copy text from a website. Ask them: how does knowing this change how you read the text?',
    differentiation: {
      support: 'A guided research sheet with prompts and suggested search terms is available.',
      core: 'Complete the research task independently as described.',
      stretch:
        "Write an extended paragraph (150-200 words) explaining how context shapes a reader's interpretation of the text, using specific evidence from the text itself.",
    },
  },

  {
    id: 'y7-t3-hw-09',
    title: 'Self-Assessment and Revision Plan',
    yearGroup: 'Year 7',
    termUnit: 'T3: Stories and Poetry - Shaping Meaning',
    type: 'revision',
    description:
      'Complete an honest self-assessment of your learning this term and use it to create a targeted revision plan for your end-of-term assessment.',
    instructions: [
      'List all the key skills and topics covered this term (use your class notes or the unit overview sheet).',
      'Rate yourself on each one: Red (not confident), Amber (getting there), Green (confident).',
      'Choose the three areas rated Red or Amber - these are your priority revision areas.',
      'For each priority area, write one specific action you will take to improve (e.g. re-read your class notes, practise a paragraph, look up a definition).',
      'Create a simple revision timetable for the week before the assessment, allocating time to each priority area.',
    ],
    estimatedTime: '20 minutes',
    dueLesson: 31,
    markingCriteria: [
      'All topics from the term are listed',
      'Ratings are honest and reflect genuine self-assessment',
      'Three priority areas are clearly identified',
      'Action plans are specific and realistic',
      'Revision timetable is practical',
    ],
    parentGuidance:
      'Self-assessment can be difficult for students who either over- or under-rate themselves. Ask your child to show you their traffic light ratings and discuss whether they match the feedback they have received in class. Help them create a realistic revision schedule.',
    differentiation: {
      support:
        'A pre-populated list of topics is provided for you to rate. Focus on identifying two priority areas rather than three.',
      core: 'Complete the full self-assessment and revision plan.',
      stretch:
        'For each Green area, add one stretch challenge you could set yourself to deepen your understanding further.',
    },
  },

  {
    id: 'y7-t3-hw-10',
    title: 'Poetry Analysis Essay - Extended Practice',
    yearGroup: 'Year 7',
    termUnit: 'T3: Stories and Poetry - Shaping Meaning',
    type: 'extended-writing',
    description:
      'Write an extended poetry analysis essay in response to the question: "How does the poet create a sense of [theme] in this poem?" This task consolidates the analytical writing skills developed across Year 7.',
    instructions: [
      'Choose a poem studied this term for your analysis.',
      'Plan your essay before writing: decide on 2-3 main points.',
      'Write an introduction (2-3 sentences) that names the poem, the poet, and sets out your main argument.',
      'Write 2-3 body paragraphs, each following the PEE structure: one analysing language, one analysing structure, and one on theme if needed.',
      "Write a conclusion (2-3 sentences) summarising your main argument and evaluating the poem's overall effect.",
      'Aim for 300-400 words in total.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 32,
    markingCriteria: [
      'A clear introduction that sets out the argument',
      '2-3 structured body paragraphs each with point, evidence, and explanation',
      'Analysis focuses on language and structure - not plot summary',
      'A conclusion that synthesises the argument',
      'Accurate spelling and punctuation throughout',
      'Total length of 300-400 words',
    ],
    parentGuidance:
      'This is the most demanding homework task of the term. Encourage your child to plan before they write and to check their work against the criteria when they have finished. If they are struggling to start, suggest they talk through their ideas with you first - verbal rehearsal of ideas is a very effective planning tool.',
    differentiation: {
      support:
        'Write one body paragraph only (language focus) using the PEE scaffold, plus a one-sentence introduction and conclusion. Aim for 150 words.',
      core: 'Write the full essay of 300-400 words as described.',
      stretch:
        "Write an essay of 400-500 words that includes a paragraph evaluating whether the poet's choices are effective, supporting your judgement with specific evidence.",
    },
  },
]
