import type { LessonPlan } from '@/types';

export const y11IgcseLessons: LessonPlan[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // LANGUAGE PAPER 2 (5 lessons)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 1: Paper 2 Overview and Expectations ────────────────────────────
  {
    id: 'y11-igcse-01-paper2-overview',
    title: 'Paper 2 Overview and Expectations',
    text: 'IGCSE English Language',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand the structure and timing of Language Paper 2',
      'Identify the assessment objectives and how marks are allocated across descriptive and narrative writing',
      'Analyse the differences between Band 4 and Band 6 responses using examiner commentary',
      'Create a personal exam strategy for approaching Paper 2',
    ],
    successCriteria: [
      'I can explain the format of Paper 2 including time allocation and mark distribution',
      'I can identify the key assessment objectives for both descriptive and narrative tasks',
      'I can distinguish between a mid-band and top-band response using mark scheme descriptors',
      'I can create a personal timing plan for completing Paper 2 under exam conditions',
    ],
    keywords: [
      'Paper 2',
      'assessment objectives',
      'mark scheme',
      'band descriptors',
      'descriptive writing',
      'narrative writing',
      'content and structure',
      'style and accuracy',
    ],
    starterActivity: {
      title: 'Exam Myths vs Reality',
      duration: '7 minutes',
      instructions:
        'Display a series of true/false statements about Paper 2 on the board (e.g. "You must write a story for every question", "Spelling and grammar are not assessed", "You should spend equal time on planning and writing"). Students vote with mini whiteboards. Teacher reveals the correct answers and addresses common misconceptions, using this to frame the lesson as a clear-eyed look at what the exam actually requires.',
      differentiation: {
        support:
          'Provide a simplified version with three statements and multiple-choice answers rather than true/false.',
        core: 'Students answer all true/false statements independently and justify their reasoning.',
        stretch:
          'Students write an additional myth they have heard about the exam and explain why it is incorrect.',
      },
      resources: ['True/false statements slide', 'Mini whiteboards and pens'],
    },
    mainActivities: [
      {
        title: 'Dissecting the Paper 2 Structure',
        duration: '15 minutes',
        instructions:
          'Distribute a copy of a past Paper 2 front cover and both question options. Walk students through the paper structure: Section A (descriptive writing) and Section B (narrative writing), the choice element, word count guidance, and time allocation. Students annotate the paper with key information using a colour-coded system. Then display the mark scheme grid and explain how marks are split between content/structure and style/accuracy. Students complete a summary table showing marks available for each assessment strand.',
        differentiation: {
          support:
            'Provide a pre-filled summary table with some cells already completed for students to finish.',
          core: 'Students complete the full summary table independently from the mark scheme.',
          stretch:
            'Students compare the IGCSE mark scheme with a different exam board and note key differences in emphasis.',
        },
        resources: [
          'Past Paper 2 front cover and questions (printed)',
          'Mark scheme grid handout',
          'Summary table template',
        ],
      },
      {
        title: 'Comparing Band Responses',
        duration: '20 minutes',
        instructions:
          'Provide students with two anonymous student responses to the same descriptive writing prompt — one at Band 4 (competent) and one at Band 6 (highly effective). Students read both silently, then in pairs highlight specific differences in vocabulary, sentence structure, imagery, and organisation. Teacher leads a whole-class discussion using the mark scheme to justify which band each response falls into. Students then write three concrete targets for their own writing based on what separates the two bands.',
        differentiation: {
          support:
            'Provide guided annotations on the Band 4 response and a scaffold for writing targets (e.g. "To move from Band 4 to Band 6, I need to...").',
          core: 'Students independently compare both responses and write three specific, actionable targets.',
          stretch:
            'Students select one paragraph from the Band 4 response and rewrite it to Band 6 standard, annotating the changes they made and why.',
        },
        resources: [
          'Band 4 and Band 6 student responses (anonymised)',
          'Mark scheme descriptors for Bands 4-6',
          'Target-setting sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'My Paper 2 Strategy Card',
      duration: '8 minutes',
      instructions:
        'Students complete a strategy card with four sections: (1) Time plan — how they will split their time across planning, writing, and checking; (2) Strengths — what they already do well in creative writing; (3) Targets — their top two areas for improvement; (4) First focus — which writing type (descriptive or narrative) they feel more confident with and why. Students keep this card in their folder as a reference for future lessons.',
      differentiation: {
        support: 'Provide a partially completed strategy card with prompts for each section.',
        core: 'Students complete all four sections independently.',
        stretch:
          'Students add a fifth section identifying specific techniques they will practise before the exam.',
      },
    },
    homework:
      'Read the examiner report extracts provided on the homework sheet and write a 150-word summary of the three most common mistakes candidates make on Paper 2, along with advice for avoiding each one.',
    worksheetQuestions: [
      {
        question:
          'Describe the structure of Language Paper 2. How many sections are there and what does each section require?',
        lines: 4,
        modelAnswer:
          'Language Paper 2 has two sections. Section A is descriptive writing and Section B is narrative writing. Candidates choose one question from each section or may be given a single prompt. The paper assesses both content/structure and style/accuracy.',
        marks: 3,
      },
      {
        question:
          'Explain how marks are divided between content/structure and style/accuracy. Why is this division important for exam preparation?',
        lines: 4,
        modelAnswer:
          'Marks are typically split equally or near-equally between content/structure and style/accuracy. This is important because it means technical accuracy — spelling, punctuation, grammar, and sentence variety — carries as much weight as the quality of ideas and organisation. Students must practise both.',
        marks: 3,
      },
      {
        question:
          'Read the two descriptors below and explain which band is higher and why.\n\nDescriptor A: "Ideas are developed with some detail. Vocabulary is sometimes effective."\nDescriptor B: "Ideas are convincingly developed with sustained detail. Vocabulary is precise and creates deliberate effects."',
        lines: 5,
        modelAnswer:
          'Descriptor B is the higher band. The key differences are the words "convincingly" and "sustained", which indicate consistency throughout the response rather than occasional success. "Precise" vocabulary that "creates deliberate effects" shows the writer is in control, whereas "sometimes effective" suggests inconsistency.',
        marks: 4,
      },
      {
        question:
          'Write a personal timing plan for a 1 hour 30 minute Paper 2 exam. Justify how you have allocated your time.',
        lines: 6,
        modelAnswer:
          'Planning: 10 minutes — essential for structure and ideas. Writing: 60 minutes (30 per piece) — allows sustained development. Proofreading: 10 minutes (5 per piece) — catches SPaG errors. Remaining 10 minutes split as buffer. This ensures I do not rush the ending and have time to check accuracy, which is worth half the marks.',
        marks: 4,
      },
      {
        question:
          'Identify three specific differences between a Band 4 and a Band 6 descriptive writing response.',
        lines: 6,
        modelAnswer:
          'Band 6 uses precise, ambitious vocabulary rather than generic word choices. Band 6 varies sentence structures deliberately for effect (e.g. short sentences for tension), while Band 4 relies on similar patterns. Band 6 sustains a controlled, cohesive structure throughout, whereas Band 4 may start strongly but lose focus or rush the ending.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Use genuine past papers and examiner reports from Cambridge IGCSE where possible for authenticity.',
      'The band comparison activity works best when the two responses address the same prompt — it makes differences in quality much clearer.',
      'Emphasise from the outset that style/accuracy marks are often where students lose the most marks — this helps reframe proofreading as a high-value exam strategy.',
      'Collect the strategy cards at the end to review — they provide useful diagnostic information about student confidence and self-awareness.',
    ],
    targetedSkills: [
      'Exam Technique',
      'Self-Assessment',
      'Mark Scheme Literacy',
      'Strategic Planning',
    ],
  },

  // ── Lesson 2: Descriptive Writing Masterclass ──────────────────────────────
  {
    id: 'y11-igcse-02-descriptive-writing-masterclass',
    title: 'Descriptive Writing Masterclass',
    text: 'IGCSE English Language',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Employ sensory language to create vivid and immersive descriptions',
      'Use structural techniques such as zoom, shift, and circular structure to organise descriptive writing',
      'Select vocabulary precisely to create deliberate effects on the reader',
      'Apply the "show, don\'t tell" principle to convey emotion and atmosphere',
    ],
    successCriteria: [
      'I can write descriptions that engage at least three senses beyond sight',
      'I can structure a descriptive piece using a deliberate organisational technique such as zoom or circular structure',
      'I can select precise vocabulary and explain the effect of my word choices',
      'I can convey a character\'s emotion through action and imagery rather than stating it directly',
    ],
    keywords: [
      'sensory language',
      'imagery',
      'zoom structure',
      'circular structure',
      'show don\'t tell',
      'precise vocabulary',
      'atmosphere',
      'pathetic fallacy',
    ],
    starterActivity: {
      title: 'Sense Stations',
      duration: '8 minutes',
      instructions:
        'Display a single photograph of a busy market scene. Students have 90 seconds per sense to write as many descriptive phrases as they can for sight, sound, smell, touch, and taste. Teacher uses a timer and calls out each sense. Students then count their phrases and share the most vivid one from each category. Teacher highlights that strong descriptions go beyond sight and explains that top-band responses engage multiple senses.',
      differentiation: {
        support:
          'Provide a word bank for each sense category to prompt ideas (e.g. Sound: clatter, murmur, sizzle).',
        core: 'Students generate their own phrases independently for each sense.',
        stretch:
          'Students combine two senses in a single phrase using synaesthesia (e.g. "the sharp brightness of the trumpet").',
      },
      resources: ['Market photograph slide', 'Sense grid worksheet'],
    },
    mainActivities: [
      {
        title: 'Crafting Techniques Workshop',
        duration: '20 minutes',
        instructions:
          'Teacher introduces four key descriptive techniques with examples: (1) Show don\'t tell — "Her knuckles whitened around the strap" vs "She was nervous"; (2) Pathetic fallacy — weather reflecting mood; (3) Zoom structure — wide establishing shot narrowing to a single detail; (4) Precise vocabulary — replacing generic words with exact ones. For each technique, students practise by transforming a weak sentence into a strong one. After independent practice, pairs share their best transformations and vote on the most effective in each category.',
        differentiation: {
          support:
            'Provide sentence starters and a word upgrade chart (e.g. "walked" becomes "trudged / ambled / staggered").',
          core: 'Students transform all four sentences independently and annotate which technique they used.',
          stretch:
            'Students write an original paragraph that uses all four techniques in combination and annotate each one.',
        },
        resources: [
          'Techniques reference sheet with examples',
          'Transformation practice worksheet',
          'Word upgrade chart',
        ],
      },
      {
        title: 'Timed Descriptive Writing',
        duration: '20 minutes',
        instructions:
          'Students choose one of two prompts: "Describe a place at the moment a storm arrives" or "Describe a crowded city street at dawn." Allow 3 minutes for planning using a zoom structure template (wide shot → mid shot → close-up → final image), then 17 minutes for sustained writing. Teacher circulates, offering brief verbal feedback and encouraging students to re-read and upgrade vocabulary as they write. In the final 2 minutes, students underline their three best phrases and write a brief annotation explaining why each is effective.',
        differentiation: {
          support:
            'Provide a planning scaffold with sentence starters for each zoom level and a sensory checklist to tick off.',
          core: 'Students plan and write independently, self-checking against the sensory checklist.',
          stretch:
            'Students experiment with a circular structure, opening and closing with the same image transformed by the events of the description.',
        },
        resources: [
          'Writing prompts slide',
          'Zoom structure planning template',
          'Sensory checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Golden Sentences Gallery',
      duration: '7 minutes',
      instructions:
        'Each student writes their single best sentence from their descriptive piece on a strip of paper. Strips are passed around the room. Each student reads the sentence they receive and writes one piece of specific praise on the back. Teacher selects three to read aloud and discusses what makes each effective, linking to the mark scheme descriptors for Band 5-6.',
      differentiation: {
        support: 'Provide praise sentence starters (e.g. "This is effective because...").',
        core: 'Students write specific, technique-focused praise.',
        stretch:
          'Students suggest one precise improvement to the sentence they receive and explain why it would elevate the writing.',
      },
    },
    homework:
      'Write a complete descriptive piece (350-450 words) in response to: "Describe a place that has been abandoned." Use at least three techniques practised in the lesson and annotate your work to show where you have used them.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between "telling" and "showing" in descriptive writing. Provide an example of each.',
        lines: 5,
        modelAnswer:
          'Telling states an emotion or fact directly: "He was angry." Showing conveys the same idea through action, imagery, or detail: "His jaw clenched and he slammed his fist against the table, rattling the cups." Showing is more effective because it allows the reader to infer the emotion, creating a more immersive and engaging experience.',
        marks: 3,
      },
      {
        question:
          'What is a "zoom structure" in descriptive writing? Describe how you would use it for the prompt: "Describe a beach at sunset."',
        lines: 5,
        modelAnswer:
          'A zoom structure begins with a wide establishing shot and gradually narrows to a specific detail. For a beach at sunset: wide — the vast horizon where orange melts into the sea; mid — the shoreline with waves rolling over shells; close-up — a single crab scuttling into a crack in the rock, its shell catching the last light. This structure gives the reader a cinematic sense of moving deeper into the scene.',
        marks: 4,
      },
      {
        question:
          'Upgrade the following sentence by replacing the underlined words with more precise vocabulary:\n\n"The old house was big and looked scary in the dark."',
        lines: 4,
        modelAnswer:
          'Possible upgrade: "The crumbling manor loomed, its skeletal frame silhouetted against the bruised sky." Key improvements: "crumbling manor" is more specific than "old house"; "loomed" implies threat and size more effectively than "was big"; "skeletal frame" and "bruised sky" use metaphor and colour to create atmosphere rather than simply stating it "looked scary."',
        marks: 4,
      },
      {
        question:
          'Write a short paragraph (5-6 sentences) describing a forest using at least three different senses.',
        lines: 8,
        modelAnswer:
          'The canopy knitted itself together overhead, filtering the light into thin green threads that barely reached the forest floor. Underfoot, each step cracked through a crust of frost, the sound sharp and intrusive in the silence. The air tasted of damp earth and something metallic, like old pennies left in rain. Somewhere ahead, water trickled over stone, a constant murmur beneath the stillness. A cobweb caught against my wrist, silk-thin and cold, and I felt the forest notice me.',
        marks: 5,
      },
      {
        question:
          'Explain what pathetic fallacy is and write two sentences that use it to reflect a character\'s sadness.',
        lines: 5,
        modelAnswer:
          'Pathetic fallacy is when the weather or natural environment reflects or mirrors a character\'s emotions. Example: "The sky sagged with grey, heavy clouds that refused to break, pressing down on the rooftops like a weight that could not be shifted. Even the trees stood bare and motionless, as if they too had given up waiting."',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The "show don\'t tell" concept is transformative for most students — spend extra time on this if engagement is high.',
      'Collect the timed writing pieces for formative assessment. Look for students who default to narrative when asked to describe — this is the most common error on Paper 2.',
      'The zoom structure is a reliable framework that gives weaker writers immediate structural improvement.',
      'Consider displaying a "word upgrade wall" in the classroom that students can add to throughout the year.',
    ],
    targetedSkills: [
      'Descriptive Writing',
      'Sensory Language',
      'Vocabulary Precision',
      'Structural Techniques',
      'Show Don\'t Tell',
    ],
  },

  // ── Lesson 3: Narrative Writing - Structure and Voice ──────────────────────
  {
    id: 'y11-igcse-03-narrative-structure-voice',
    title: 'Narrative Writing - Structure and Voice',
    text: 'IGCSE English Language',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand and apply narrative structures including linear, non-linear, in medias res, and circular',
      'Develop a consistent and controlled narrative voice appropriate to purpose',
      'Use dialogue effectively and sparingly to reveal character and advance plot',
      'Control pacing through sentence length, paragraph structure, and withholding information',
    ],
    successCriteria: [
      'I can identify and explain at least three different narrative structures',
      'I can write an opening paragraph in a consistent narrative voice',
      'I can write dialogue that reveals character rather than simply conveying information',
      'I can vary sentence and paragraph length deliberately to control pacing',
    ],
    keywords: [
      'narrative voice',
      'in medias res',
      'linear structure',
      'non-linear',
      'circular structure',
      'pacing',
      'dialogue',
      'first person',
      'third person limited',
    ],
    starterActivity: {
      title: 'Opening Lines Ranking',
      duration: '8 minutes',
      instructions:
        'Display five opening lines from published fiction and past student responses (a mix of strong and weak). Students rank them from most to least engaging and write a sentence justifying their top choice. Teacher facilitates discussion: what makes an opening hook the reader? Key points to draw out: in medias res, voice, intrigue, sensory detail, avoiding cliche. Link to examiner expectations for Paper 2.',
      differentiation: {
        support:
          'Provide a checklist of qualities to look for (e.g. Does it create a question? Does it use interesting language?).',
        core: 'Students rank independently and justify with reference to specific techniques.',
        stretch:
          'Students rewrite the weakest opening to make it the strongest, then explain their changes.',
      },
      resources: ['Opening lines slide (5 examples)', 'Ranking grid handout'],
    },
    mainActivities: [
      {
        title: 'Narrative Structure Jigsaw',
        duration: '18 minutes',
        instructions:
          'Divide the class into four expert groups, each assigned one structure: (1) Linear, (2) Non-linear / flashback, (3) In medias res, (4) Circular. Each group reads a short example extract, identifies the key features of their structure, and prepares a 90-second explanation. Groups then reform as mixed tables with one expert from each structure. Experts teach their structure to the table. All students complete a comparison grid noting the advantages and risks of each structure for exam writing.',
        differentiation: {
          support:
            'Provide a partially completed comparison grid and a crib sheet summarising each structure.',
          core: 'Students complete the comparison grid fully based on the expert explanations.',
          stretch:
            'Students evaluate which structure would be most effective for a specific exam prompt and justify their reasoning.',
        },
        resources: [
          'Four example extracts (one per structure)',
          'Comparison grid handout',
          'Structure summary crib sheet (support tier)',
        ],
      },
      {
        title: 'Voice and Pacing Workshop',
        duration: '22 minutes',
        instructions:
          'Teacher models two versions of the same scene — one with flat, report-like narration and one with a strong, controlled voice. Class discusses: what creates "voice"? (Word choice, sentence rhythm, attitude, withholding.) Students then write the opening 150 words of a narrative in response to: "Write a story that begins with a journey." They must choose one of the four structures studied and write in either first person or third person limited. After 12 minutes, students swap with a partner. Partners identify: (a) the structure used, (b) the narrative perspective, (c) one moment where pacing is effective, and (d) one moment where pacing could be improved. Students revise based on feedback.',
        differentiation: {
          support:
            'Provide a voice toolkit with sentence starters, tone words, and a pacing guide (short sentences = tension, long = reflection).',
          core: 'Students write and revise independently using partner feedback.',
          stretch:
            'Students write the same opening in a contrasting voice (e.g. first person anxious vs third person detached) and compare the effects.',
        },
        resources: [
          'Model comparison slide (flat vs voiced narration)',
          'Voice toolkit (support tier)',
          'Peer feedback sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Structure Commitment',
      duration: '5 minutes',
      instructions:
        'Students write on a sticky note: the narrative structure they feel most confident using in the exam and one technique for creating voice that they want to practise further. Teacher collects and reads a selection aloud, noting patterns. Brief class discussion about which structures feel most manageable under timed conditions.',
      differentiation: {
        support: 'Provide a sentence frame: "I feel most confident with ___ because ___."',
        core: 'Students write independently with specific reasoning.',
        stretch:
          'Students identify a structure they find challenging and explain what they would need to practise to use it confidently.',
      },
    },
    homework:
      'Write the complete opening (250-300 words) of a narrative using in medias res. The story should begin in the middle of a dramatic moment. Annotate your work to show where you have controlled pacing and established voice.',
    worksheetQuestions: [
      {
        question:
          'Define "in medias res" and explain why it is an effective technique for exam narrative writing.',
        lines: 4,
        modelAnswer:
          'In medias res means beginning a story in the middle of the action rather than at the chronological start. It is effective in exams because it immediately engages the reader, creates intrigue, and avoids wasting time on slow exposition — a common weakness in timed writing.',
        marks: 3,
      },
      {
        question:
          'What is the difference between first person and third person limited narration? Give one advantage of each.',
        lines: 5,
        modelAnswer:
          'First person uses "I" and presents events from inside one character\'s mind. Its advantage is creating intimacy and a strong voice. Third person limited uses "he/she" but still restricts knowledge to one character\'s perspective. Its advantage is allowing slight narrative distance, which can create dramatic irony or a more sophisticated tone.',
        marks: 4,
      },
      {
        question:
          'Explain how a writer can control pacing in a narrative. Give two specific techniques.',
        lines: 4,
        modelAnswer:
          'Short, fragmented sentences speed up pacing and create tension or urgency. Longer, complex sentences with subordinate clauses slow the pace and create a reflective or descriptive tone. Paragraph breaks can also control pacing — a one-line paragraph isolates a moment and forces the reader to pause.',
        marks: 4,
      },
      {
        question:
          'Read the dialogue below. Explain why it is weak and rewrite it so that it reveals character.\n\n"Hello," said John. "Hello," said Sarah. "How are you?" "I am fine. Let\'s go."',
        lines: 6,
        modelAnswer:
          'This dialogue is weak because it is generic — it could be spoken by anyone and reveals nothing about the characters. Improved: "You\'re late," Sarah muttered, not looking up from her phone. John dropped into the seat opposite. "Didn\'t think you\'d notice." She locked the screen. "I always notice." This reveals tension, personality, and power dynamics between the characters.',
        marks: 5,
      },
      {
        question:
          'Write the opening paragraph (5-6 sentences) of a narrative using a circular structure. Then write the closing paragraph that mirrors it. The story should be about a character returning to a place from their past.',
        lines: 10,
        modelAnswer:
          'Opening: "The gate still hung from one hinge, swinging in a wind that carried the smell of cut grass and something older — woodsmoke, maybe, or memory. She had not been back in eleven years. The garden had shrunk, as gardens do when you grow." Closing: "The gate swung behind her as she left, its rhythm unchanged. Eleven years and the wind still carried woodsmoke. But the garden — the garden had grown." The circular structure creates closure and emphasises how the character has changed.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'In medias res is the structure most students will benefit from — it solves the common problem of slow, meandering openings.',
      'Discourage over-reliance on dialogue. Many students fill their narratives with speech, which often reads as a script. Emphasise that dialogue should be used sparingly and purposefully.',
      'The jigsaw activity ensures all students encounter all four structures — check understanding by cold-calling during the mixed-table phase.',
      'Consider displaying exemplar openings on the classroom wall and adding to them throughout the year as a reference bank.',
    ],
    targetedSkills: [
      'Narrative Writing',
      'Structural Choice',
      'Voice',
      'Pacing',
      'Dialogue',
    ],
  },

  // ── Lesson 4: Planning Under Exam Conditions ──────────────────────────────
  {
    id: 'y11-igcse-04-planning-under-exam-conditions',
    title: 'Planning Under Exam Conditions',
    text: 'IGCSE English Language',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Develop rapid and effective planning techniques for both descriptive and narrative writing',
      'Select and adapt planning methods to suit different question types',
      'Practise planning under timed conditions to build exam stamina',
      'Evaluate the quality of plans and their impact on final writing',
    ],
    successCriteria: [
      'I can produce a clear, usable plan for a descriptive or narrative piece in under 5 minutes',
      'I can select the most appropriate planning method for a given prompt',
      'I can include structural decisions, key vocabulary, and technique choices in my plan',
      'I can evaluate whether a plan would lead to a top-band response',
    ],
    keywords: [
      'planning',
      'mind map',
      'linear plan',
      'five-part structure',
      'paragraph plan',
      'key vocabulary',
      'structural decisions',
      'time management',
    ],
    starterActivity: {
      title: 'Plan or No Plan?',
      duration: '6 minutes',
      instructions:
        'Display two pieces of student writing side by side — one clearly planned (cohesive, well-structured, satisfying ending) and one clearly unplanned (repetitive, loses focus, rushed ending). Students identify which was planned and which was not, citing specific evidence. Teacher uses this to make the case: planning is not wasted time — it is the difference between Band 4 and Band 6.',
      differentiation: {
        support: 'Highlight specific sections in both pieces and ask students to compare them directly.',
        core: 'Students identify differences independently and link them to planning (or lack of it).',
        stretch:
          'Students estimate what the plan for the successful piece might have looked like and sketch it.',
      },
      resources: ['Two student writing extracts (planned vs unplanned)'],
    },
    mainActivities: [
      {
        title: 'Planning Methods Carousel',
        duration: '18 minutes',
        instructions:
          'Set up three stations, each with a different planning method: (1) Mind map — central image with sensory branches (best for descriptive); (2) Five-part linear plan — beginning, build, climax, falling action, resolution (best for narrative); (3) Paragraph plan — numbered paragraphs with one-line summaries and key vocabulary (versatile). Students spend 5 minutes at each station, creating a plan for the same prompt using that method. After rotating through all three, students decide which method they prefer and write a sentence explaining why.',
        differentiation: {
          support:
            'Provide a template for each planning method with examples and prompts to fill in.',
          core: 'Students complete each planning method independently.',
          stretch:
            'Students create a hybrid plan that combines elements of two methods and explain why their hybrid is more effective.',
        },
        resources: [
          'Three planning method templates',
          'Shared prompt slide',
          'Station instruction cards',
        ],
      },
      {
        title: 'Timed Planning Sprint',
        duration: '24 minutes',
        instructions:
          'Students complete three timed plans: Plan 1 (descriptive prompt, 5 minutes), Plan 2 (narrative prompt, 5 minutes), Plan 3 (student\'s choice of prompt type, 4 minutes — reduced time to increase pressure). After each plan, students peer-assess using a checklist: Does the plan include a clear structure? Key vocabulary? At least two techniques? A satisfying ending? After all three rounds, students select their strongest plan and write the opening paragraph from it in the remaining time. Teacher circulates to identify exemplar plans for class sharing.',
        differentiation: {
          support:
            'Allow 6 minutes per plan instead of 5, and provide a simplified checklist with three criteria.',
          core: 'Students complete all three plans within the time limits and peer-assess.',
          stretch:
            'On Plan 3, students choose the prompt type they find harder and challenge themselves to produce their best plan yet.',
        },
        resources: [
          'Three exam-style prompts (two descriptive, one narrative)',
          'Planning paper',
          'Peer assessment checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'My Go-To Method',
      duration: '5 minutes',
      instructions:
        'Students write a brief reflection: which planning method will they use in the exam and why? They then pair-share and must listen to their partner\'s reasoning. If their partner\'s argument is convincing, they may change their mind. Teacher takes a quick poll of the room to see the spread of preferences.',
      differentiation: {
        support: 'Provide a sentence frame: "I will use ___ because ___. It helps me ___."',
        core: 'Students write and share independently.',
        stretch:
          'Students explain when they might switch methods depending on the prompt type.',
      },
    },
    homework:
      'Complete two full plans (one descriptive, one narrative) for the prompts on the homework sheet. Each plan should take no more than 5 minutes. Then write the opening paragraph from your stronger plan (150 words).',
    worksheetQuestions: [
      {
        question: 'Why is planning important in a timed exam? Give at least two reasons.',
        lines: 4,
        modelAnswer:
          'Planning ensures the piece has a clear structure with a satisfying ending, avoiding the common problem of rushed or unresolved conclusions. It also allows the writer to make deliberate vocabulary and technique choices in advance, leading to more controlled and sophisticated writing rather than relying on whatever comes to mind in the moment.',
        marks: 3,
      },
      {
        question:
          'Describe the "five-part structure" for narrative planning and explain when it is most useful.',
        lines: 5,
        modelAnswer:
          'The five-part structure consists of: (1) Opening/hook, (2) Rising action/build, (3) Climax/turning point, (4) Falling action/consequences, (5) Resolution/ending. It is most useful for narrative writing because it ensures the story has shape and momentum, preventing the common exam mistake of writing a story that is "all middle" with no climax or resolution.',
        marks: 4,
      },
      {
        question:
          'Create a paragraph plan (4-5 paragraphs) for the prompt: "Describe a place where time seems to have stopped."',
        lines: 8,
        modelAnswer:
          'P1: Wide establishing shot — the building from outside, dust on windows, silence. Key vocab: calcified, suspended. P2: Zoom in — a room with objects left mid-use (a teacup, an open book). Personification of objects waiting. P3: Sensory shift — the smell of age, dust catching light, the taste of stale air. P4: Close-up — a single photograph, faces fading. Metaphor for memory. P5: Return to wide shot — pull back to the building as evening falls, light withdrawing. Circular link to opening.',
        marks: 5,
      },
      {
        question:
          'A student says: "I don\'t plan because it wastes time — I just start writing." What advice would you give them? Use evidence from today\'s lesson.',
        lines: 5,
        modelAnswer:
          'Planning takes 5 minutes but saves much more by preventing structural problems that cannot be fixed in a timed exam. Unplanned writing often repeats ideas, loses focus, and has a weak ending — all of which limit the response to Band 3-4. A plan ensures a clear structure, a satisfying ending, and space to include deliberate techniques, which are requirements for Band 5-6.',
        marks: 4,
      },
      {
        question:
          'Compare the mind map and paragraph plan methods. Which would you recommend for descriptive writing and why?',
        lines: 5,
        modelAnswer:
          'A mind map allows free association and sensory branching, which suits descriptive writing because descriptions benefit from rich, varied detail rather than strict chronological order. A paragraph plan is more structured and sequential, which can feel restrictive for description but ensures control. For most students, a mind map with a structural overlay (e.g. zoom levels noted) offers the best of both.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson is crucial for exam preparation — many students resist planning because they feel it "wastes time." The planned vs unplanned comparison at the start is essential for buy-in.',
      'The timed sprint is the most important activity. Students need repeated practice planning under pressure to build automaticity.',
      'Encourage students to write key vocabulary directly into their plans — this prevents them from defaulting to generic language under exam pressure.',
      'Consider running a follow-up lesson where students write a full response from one of today\'s plans to demonstrate the direct link between planning quality and writing quality.',
    ],
    targetedSkills: [
      'Planning',
      'Exam Technique',
      'Time Management',
      'Structural Decision-Making',
    ],
  },

  // ── Lesson 5: Full Paper 2 Practice ────────────────────────────────────────
  {
    id: 'y11-igcse-05-full-paper2-practice',
    title: 'Full Paper 2 Practice',
    text: 'IGCSE English Language',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Complete a full Paper 2 response under timed exam conditions',
      'Apply planning, structural, and stylistic techniques developed in previous lessons',
      'Manage time effectively across planning, writing, and proofreading',
      'Self-assess using mark scheme band descriptors to identify strengths and areas for improvement',
    ],
    successCriteria: [
      'I can complete a full descriptive or narrative piece within the time allocation',
      'I can produce a plan that leads to a structured and coherent response',
      'I can use at least three deliberate techniques and sustain quality throughout',
      'I can accurately self-assess my work against the mark scheme and set specific targets',
    ],
    keywords: [
      'timed conditions',
      'exam practice',
      'self-assessment',
      'band descriptors',
      'sustained quality',
      'proofreading',
      'technical accuracy',
      'deliberate technique',
    ],
    starterActivity: {
      title: 'Pre-Exam Mindset',
      duration: '5 minutes',
      instructions:
        'Teacher leads a brief focused discussion: "What will you do in the first 5 minutes of the exam?" Students write their answer, then share with a partner. Teacher reinforces the non-negotiables: read both prompts carefully, choose the one that sparks the most ideas, plan for 5 minutes before writing a word. Display a clock graphic showing the ideal time split. Students set up their desks in exam conditions.',
      differentiation: {
        support: 'Provide a laminated time plan card for students to keep on their desk during the practice.',
        core: 'Students recall and apply their own time plan from Lesson 1.',
        stretch:
          'Students identify two specific pitfalls they want to avoid today based on previous feedback.',
      },
      resources: ['Time plan graphic slide', 'Laminated time plan cards (support tier)'],
    },
    mainActivities: [
      {
        title: 'Timed Writing — Full Response',
        duration: '40 minutes',
        instructions:
          'Students choose one of two prompts (one descriptive, one narrative) and complete a full response under timed conditions. The 40 minutes should be split: 5 minutes planning, 30 minutes writing, 5 minutes proofreading and editing. Teacher writes time checkpoints on the board (e.g. "By 10 minutes you should have finished your first paragraph"). During the writing phase, the room should be silent. Teacher circulates silently, noting common strengths and weaknesses for the debrief. At the 35-minute mark, announce that students should begin proofreading.',
        differentiation: {
          support:
            'Provide a planning template and a proofreading checklist on the desk. Allow an additional 5 minutes if needed.',
          core: 'Students work in full timed conditions with no additional scaffolding.',
          stretch:
            'Students attempt to write both a descriptive and a narrative response, managing their time across both pieces.',
        },
        resources: [
          'Exam-style prompt sheet (two options)',
          'Plain lined paper',
          'Planning templates (support tier)',
          'Proofreading checklist (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Target Setting',
      duration: '10 minutes',
      instructions:
        'Distribute simplified band descriptors for Paper 2. Students read their own work and highlight the band that best describes their content/structure and their style/accuracy separately. They then write: (1) which band they think they are in and why, (2) one specific strength with a quotation from their own work, (3) two specific targets for improvement with reference to the band above. Students share one target with their partner. Teacher collects all papers for marking and formative feedback.',
      differentiation: {
        support:
          'Provide a self-assessment frame with sentence starters for each section.',
        core: 'Students self-assess independently using the band descriptors.',
        stretch:
          'Students identify specific sentences in their work that would need to change to move up one band and draft improved versions.',
      },
      resources: ['Simplified band descriptors sheet', 'Self-assessment frame (support tier)'],
    },
    homework:
      'Complete a second full response to the prompt you did not choose in the exam practice. You have no time limit at home but should still plan before writing. Annotate three moments where you have used deliberate techniques.',
    worksheetQuestions: [
      {
        question:
          'Reflect on your time management during the practice. Did you follow your plan? What would you change next time?',
        lines: 4,
        modelAnswer:
          'I spent 6 minutes planning, which was slightly over my target but produced a better structure. I finished writing with 3 minutes to spare for proofreading, which was not enough — I found two errors I had missed. Next time I will aim to finish writing with 5 full minutes for checking, as technical accuracy is worth significant marks.',
        marks: 3,
      },
      {
        question:
          'Quote one sentence from your own work that you think is effective. Explain why, using mark scheme language.',
        lines: 5,
        modelAnswer:
          'Example: "The fog did not arrive — it had always been there, patient as stone." This sentence is effective because the personification of fog as "patient" creates an unsettling, deliberate atmosphere (Band 5: "convincingly crafted effects"). The dash creates a syntactic pause that mirrors the fog\'s stillness, showing control of punctuation for effect (Band 5: "secure and deliberate").',
        marks: 4,
      },
      {
        question:
          'Identify two weaknesses in your practice response. For each, explain what you would do differently.',
        lines: 6,
        modelAnswer:
          'Weakness 1: My ending was rushed and did not connect to my opening. I would use a circular structure next time, planning my final image in advance so it mirrors my first. Weakness 2: My vocabulary became repetitive in the middle paragraphs ("dark" appears four times). I would build a vocabulary bank during planning to have alternative words ready.',
        marks: 4,
      },
      {
        question:
          'Using the band descriptors, explain the difference between a Band 4 and a Band 6 response for style and accuracy.',
        lines: 5,
        modelAnswer:
          'Band 4: Vocabulary is "sometimes effective" and sentences show "some variety" — the quality is inconsistent. Errors in spelling and punctuation may be present but do not significantly hinder meaning. Band 6: Vocabulary is "precise" and "creates deliberate effects." Sentences are "varied and controlled" throughout. Spelling and punctuation are "almost always accurate." The key difference is sustained quality and deliberate control versus occasional success.',
        marks: 4,
      },
      {
        question:
          'Write a list of five things you will do in the first 5 minutes of the real Paper 2 exam.',
        lines: 5,
        modelAnswer:
          '1. Read both prompts twice carefully before choosing. 2. Choose the prompt that gives me the most ideas, not the one that sounds easiest. 3. Decide on a structure (e.g. zoom for descriptive, in medias res for narrative). 4. Create a paragraph plan with key vocabulary and at least two techniques per paragraph. 5. Decide on my ending before I start writing — this is what separates good responses from great ones.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This is the first full timed practice — manage expectations. Many students will not finish, and that is a valuable learning experience.',
      'Resist the temptation to help during the writing phase. Silent circulation with notes for the debrief is more useful than interrupting individual students.',
      'The self-assessment plenary is critical. Students who can accurately assess their own band level are better equipped to improve.',
      'Mark these responses with detailed formative comments — this is the baseline against which progress will be measured.',
    ],
    targetedSkills: [
      'Exam Technique',
      'Timed Writing',
      'Self-Assessment',
      'Proofreading',
      'Sustained Quality',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LITERATURE PAPER 2 — AN INSPECTOR CALLS (5 lessons)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 6: Priestley's Context and Purpose ──────────────────────────────
  {
    id: 'y11-igcse-06-priestley-context-purpose',
    title: 'Priestley\'s Context and Purpose',
    text: 'An Inspector Calls',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand the historical and political context in which Priestley wrote An Inspector Calls',
      'Distinguish between the 1912 setting and the 1945 writing date and explain why this dual time frame matters',
      'Identify Priestley\'s socialist purpose and how the play functions as a vehicle for his political message',
      'Connect contextual knowledge to specific moments in the text',
    ],
    successCriteria: [
      'I can explain at least three key differences between 1912 and 1945 Britain',
      'I can explain why Priestley set the play in 1912 but wrote it in 1945',
      'I can link Priestley\'s political beliefs to his characterisation and plot choices',
      'I can write a paragraph connecting context to a specific moment in the play',
    ],
    keywords: [
      'socialism',
      'capitalism',
      'Edwardian',
      'post-war',
      'welfare state',
      'class system',
      'dramatic irony',
      'didactic',
      'Priestley',
    ],
    starterActivity: {
      title: 'Two Photographs, Two Worlds',
      duration: '7 minutes',
      instructions:
        'Display two photographs side by side: one of upper-class Edwardian life (a grand dining room, 1912) and one of post-war Britain (bomb-damaged streets, 1945). Students write three observations about each photograph. Teacher reveals: the play is SET in the first image but WRITTEN for the audience in the second. Why does this matter? Brief class discussion establishing the concept of dramatic irony through hindsight — the audience knows what the Birlings do not (two World Wars, the sinking of the Titanic).',
      differentiation: {
        support: 'Provide prompt questions beneath each photograph to guide observations.',
        core: 'Students make independent observations and begin to infer the significance.',
        stretch:
          'Students predict how an audience in 1945 would react differently to Birling\'s speeches about war and the Titanic than an audience in 1912.',
      },
      resources: ['Dual photograph slide', 'Observation grid'],
    },
    mainActivities: [
      {
        title: 'Context Timeline and Priestley\'s Purpose',
        duration: '20 minutes',
        instructions:
          'Students create a dual timeline: one row for 1912 events and society, one row for 1945 events and society. Teacher provides key information through a structured presentation: the class system in 1912, workers\' rights, women\'s suffrage, the Liberal reforms, World Wars, the Beveridge Report, the 1945 Labour landslide, the creation of the welfare state. Students note connections between the timeline and the play. Then, teacher introduces Priestley\'s biography — his war experience, his socialism, his Postscripts broadcasts — and students answer: "What did Priestley want his 1945 audience to think, feel, and do after watching this play?"',
        differentiation: {
          support:
            'Provide a partially completed timeline and a glossary of key terms (socialism, capitalism, welfare state).',
          core: 'Students complete the timeline and answer the purpose question in full sentences.',
          stretch:
            'Students compare Priestley\'s purpose with another political writer or playwright and evaluate how effectively the play achieves its aims.',
        },
        resources: [
          'Context presentation slides',
          'Dual timeline template',
          'Priestley biography handout',
        ],
      },
      {
        title: 'Context in the Text',
        duration: '20 minutes',
        instructions:
          'Provide students with five short extracts from the play. Each extract relates to a specific contextual point (e.g. Birling\'s speech about the Titanic — dramatic irony; Eva Smith\'s treatment — workers\' rights; Sheila\'s initial frivolity — gender roles). Students annotate each extract, identifying: (a) the contextual link, (b) Priestley\'s purpose in this moment, (c) how a 1945 audience would respond. After individual annotation, students write one full analytical paragraph linking context to one extract, using the frame: "Priestley uses [character/moment] to [purpose] because [contextual link]. A 1945 audience would..."',
        differentiation: {
          support:
            'Provide context cards that match to each extract — students pair them up before annotating.',
          core: 'Students annotate independently and write a full paragraph.',
          stretch:
            'Students write two paragraphs on different extracts and compare how Priestley uses different characters to convey the same message.',
        },
        resources: [
          'Five extract cards from An Inspector Calls',
          'Context matching cards (support tier)',
          'Paragraph writing frame',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One-Sentence Thesis',
      duration: '5 minutes',
      instructions:
        'Students write a single thesis statement answering: "What is Priestley\'s main purpose in An Inspector Calls?" The sentence must include a reference to context. Three volunteers share their thesis. Class votes on the most precise and compelling. Teacher models how this kind of thesis statement could open an exam response.',
      differentiation: {
        support: 'Provide a sentence frame: "Priestley\'s main purpose is to ___ because ___."',
        core: 'Students write independently with no scaffold.',
        stretch:
          'Students write a counter-thesis (what someone who disagreed might argue) and then refute it.',
      },
    },
    homework:
      'Write a 200-word response to: "How does Priestley use the character of Mr Birling to criticise capitalism?" You must include at least two references to context.',
    worksheetQuestions: [
      {
        question:
          'Why did Priestley set the play in 1912 but write it in 1945? What effect does this create?',
        lines: 5,
        modelAnswer:
          'Priestley set the play in 1912 so the audience in 1945 could see how wrong the Birlings\' confident, complacent views were. Birling\'s assertion that war is impossible and the Titanic is "unsinkable" would provoke dramatic irony — the audience knows both World Wars have happened and the Titanic sank. This makes Birling look foolish and undermines the capitalist, self-interested worldview he represents.',
        marks: 4,
      },
      {
        question:
          'What were Priestley\'s political beliefs? How do they influence the play?',
        lines: 4,
        modelAnswer:
          'Priestley was a socialist who believed in collective responsibility and the welfare state. This influences the play through the Inspector, who acts as Priestley\'s mouthpiece, delivering the message that society must care for its most vulnerable members. The Birlings represent the capitalist class Priestley wanted to challenge.',
        marks: 3,
      },
      {
        question:
          'Explain what "dramatic irony" means and give one example from An Inspector Calls.',
        lines: 4,
        modelAnswer:
          'Dramatic irony occurs when the audience knows something the characters do not. In the play, Birling says "the Titanic — she sails next week — forty-six thousand eight hundred tons — unsinkable, absolutely unsinkable." The 1945 audience knows the Titanic sank on its maiden voyage, which makes Birling look arrogant and foolish, undermining everything else he says.',
        marks: 3,
      },
      {
        question:
          'How would a 1945 audience have responded to the play differently from a modern audience? Explain with reference to context.',
        lines: 6,
        modelAnswer:
          'A 1945 audience had just lived through the Second World War and the Blitz. They had experienced collective suffering and were about to vote for a Labour government promising a welfare state. Priestley\'s message about collective responsibility would have felt urgent and personal. A modern audience might view the play more as a period piece, but the themes of social inequality and responsibility for others remain relevant.',
        marks: 5,
      },
      {
        question:
          'Write a paragraph explaining how Priestley uses Mr Birling to represent the failures of capitalism. Include a quotation and a reference to context.',
        lines: 8,
        modelAnswer:
          'Priestley uses Mr Birling as a symbol of capitalist self-interest. Birling dismisses collective responsibility, declaring "a man has to mind his own business and look after himself and his own." The repetition of "own" emphasises his selfishness and narrow worldview. Priestley positions this speech early in the play so the Inspector\'s arrival immediately undermines it. A 1945 audience, having experienced the collective effort of wartime, would reject Birling\'s individualism, recognising it as the very attitude that allowed workers like Eva Smith to be exploited.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Context is one of the most heavily rewarded elements in Literature essays — students must learn to integrate it seamlessly rather than bolting it on.',
      'Avoid letting context become a separate "paragraph of facts." Model how to weave context into analytical points throughout a response.',
      'The dual timeline is a reference tool students should keep in their folders for revision.',
      'Priestley\'s Postscripts broadcasts are available online and a short excerpt can be powerful for demonstrating his voice and convictions.',
    ],
    targetedSkills: [
      'Contextual Understanding',
      'Writer\'s Purpose',
      'Dramatic Irony',
      'Analytical Writing',
      'AO3 Context',
    ],
  },

  // ── Lesson 7: Character Analysis: The Birlings vs The Inspector ────────────
  {
    id: 'y11-igcse-07-birlings-vs-inspector',
    title: 'Character Analysis: The Birlings vs The Inspector',
    text: 'An Inspector Calls',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Priestley constructs the Birling family as representatives of different social attitudes',
      'Explore the Inspector as a dramatic device and mouthpiece for Priestley\'s message',
      'Compare the older and younger generations\' responses to guilt and responsibility',
      'Write a comparative character analysis integrating quotation, analysis, and context',
    ],
    successCriteria: [
      'I can explain what each Birling family member represents in terms of Priestley\'s message',
      'I can analyse the Inspector\'s function as both a character and a dramatic device',
      'I can compare how the older and younger generations respond to the Inspector\'s questioning',
      'I can write a comparative paragraph using embedded quotations and contextual references',
    ],
    keywords: [
      'characterisation',
      'dramatic device',
      'mouthpiece',
      'generational divide',
      'moral awakening',
      'dramatic function',
      'stage directions',
      'foil',
    ],
    starterActivity: {
      title: 'Character Spectrum',
      duration: '7 minutes',
      instructions:
        'Draw a spectrum on the board from "Accepts Responsibility" to "Rejects Responsibility." Students position each character (Mr Birling, Mrs Birling, Sheila, Eric, Gerald) on the spectrum using sticky notes and must justify their placement with a brief quotation or reference. Teacher facilitates debate where characters are contested — particularly Gerald, who is often placed differently by different students. Establish that the generational divide is central to Priestley\'s message.',
      differentiation: {
        support: 'Provide a quotation bank for each character to help with justification.',
        core: 'Students position and justify independently from memory.',
        stretch:
          'Students argue for why a character\'s position might shift during the play — where do they start vs where do they end?',
      },
      resources: ['Spectrum graphic on the board', 'Sticky notes', 'Quotation bank (support tier)'],
    },
    mainActivities: [
      {
        title: 'Character Function Analysis',
        duration: '22 minutes',
        instructions:
          'Students work in pairs, each pair assigned one character. Using a character analysis grid, they complete four sections: (1) What the character represents in society (e.g. Mr Birling = capitalist employer, Sheila = hope for change); (2) Key quotations (minimum three); (3) How the character responds to the Inspector — do they change or remain static?; (4) Priestley\'s purpose — why did he create this character? After 15 minutes, pairs present their findings in 60 seconds. Class completes the grid for all characters based on presentations. Then focus on the Inspector: teacher leads analysis of the Inspector as a dramatic device — his omniscience, his control of timing, his final speech. Is he a real inspector? A ghost? A collective conscience? Students discuss in pairs and write a statement about his function.',
        differentiation: {
          support:
            'Provide a partially completed grid with one section filled in for each character as a model.',
          core: 'Students complete the full grid and present independently.',
          stretch:
            'Students evaluate which character is most effective as a vehicle for Priestley\'s message and write a justified argument.',
        },
        resources: [
          'Character analysis grid (A3 size)',
          'Text copies of An Inspector Calls',
          'Inspector analysis worksheet',
        ],
      },
      {
        title: 'Comparative Paragraph Writing',
        duration: '18 minutes',
        instructions:
          'Model a comparative paragraph on the board: "While Mr Birling [quotation + analysis], Sheila [quotation + analysis]. This generational contrast reveals Priestley\'s belief that [context + purpose]." Students then write their own comparative paragraph comparing any two characters\' responses to responsibility. They must include: embedded quotations, analysis of language, reference to Priestley\'s purpose, and a contextual link. After writing, students highlight their paragraph using four colours: quotation (yellow), analysis (green), purpose (blue), context (red). This visual check reveals any missing elements.',
        differentiation: {
          support:
            'Provide the comparative paragraph frame with sentence starters and a quotation bank.',
          core: 'Students write independently and self-check using the colour-coding system.',
          stretch:
            'Students write a second comparative paragraph using a different pair of characters and a different structural approach.',
        },
        resources: [
          'Model paragraph slide',
          'Paragraph frame (support tier)',
          'Four colour highlighters',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Inspector\'s Message',
      duration: '5 minutes',
      instructions:
        'Display the Inspector\'s final speech. Students read it silently. Then, in one sentence, answer: "Who is the Inspector really speaking to — the Birlings or the audience?" Students share responses. Teacher draws out the idea that the Inspector breaks the fourth wall — he is speaking directly to the 1945 audience, delivering Priestley\'s message.',
      differentiation: {
        support: 'Provide two possible interpretations for students to choose between.',
        core: 'Students write their own interpretation independently.',
        stretch:
          'Students explain how the speech functions differently for a 1945 audience and a modern audience.',
      },
    },
    homework:
      'Write a 250-word response to: "How does Priestley use the contrast between Mr and Mrs Birling and the younger generation to convey his message about responsibility?" Include quotations, analysis, and context.',
    worksheetQuestions: [
      {
        question:
          'What does Mr Birling represent in the play? Support your answer with a quotation.',
        lines: 5,
        modelAnswer:
          'Mr Birling represents the capitalist establishment — wealthy, self-interested, and resistant to change. His assertion that "a man has to mind his own business" encapsulates his belief that individuals have no obligation to others. Priestley uses him as a target for criticism, making his predictions about war and the Titanic wrong to undermine his authority.',
        marks: 4,
      },
      {
        question:
          'How does Sheila change during the play? What does her change represent?',
        lines: 5,
        modelAnswer:
          'Sheila begins as a naive, materialistic young woman but undergoes a moral awakening. By the end, she accepts full responsibility and is horrified by her parents\' refusal to do the same. Her transformation represents Priestley\'s hope that the younger generation can break from the selfish values of their parents and build a more just society.',
        marks: 4,
      },
      {
        question:
          'Is the Inspector a realistic character? Explain his dramatic function.',
        lines: 5,
        modelAnswer:
          'The Inspector is not a realistic character — he is a dramatic device. He knows things he should not, controls the pace of revelations, and delivers a speech that sounds more like a political address than a police investigation. His function is to act as Priestley\'s mouthpiece, forcing each character (and the audience) to confront their responsibility. He may represent a collective conscience or a supernatural moral force.',
        marks: 4,
      },
      {
        question:
          'Compare how Mr Birling and Eric respond to the Inspector\'s revelations about Eva Smith. What does this contrast suggest?',
        lines: 6,
        modelAnswer:
          'Mr Birling dismisses Eva\'s death as irrelevant to him and is more concerned about a potential scandal. Eric, by contrast, is devastated and cries "my child — your own grandchild." This generational contrast suggests that the older generation is hardened by privilege and self-interest, while the younger generation retains the capacity for empathy and moral growth. Priestley implies that social change depends on the young.',
        marks: 5,
      },
      {
        question:
          'Write a comparative paragraph analysing how Priestley presents Mrs Birling and Sheila differently. Include quotations, analysis, and a reference to Priestley\'s purpose.',
        lines: 8,
        modelAnswer:
          'Priestley presents Mrs Birling as morally rigid and incapable of self-reflection. She refuses to accept blame, insisting "I did nothing wrong" even after learning the consequences of her actions. The flatness of this statement, with its monosyllabic certainty, reveals her emotional coldness. In contrast, Sheila\'s guilt is immediate and genuine: "If I could help her now, I would." The conditional "if I could" shows Sheila understands that responsibility extends beyond self-interest. Priestley uses this mother-daughter contrast to argue that the older generation\'s values are bankrupt, while the younger generation offers hope for the socialist society he envisioned after the war.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The character spectrum starter provokes excellent debate — resist settling it too quickly. The ambiguity around Gerald is productive.',
      'Students often struggle to analyse the Inspector because he does not fit conventional character analysis. Reframe him as a device first, then discuss his character qualities.',
      'The colour-coding self-check in the writing activity is a powerful metacognitive tool — students can immediately see if their paragraph is analysis-heavy but context-light, for example.',
      'The Inspector\'s final speech should be displayed permanently or stuck into folders — it is the single most important passage for understanding Priestley\'s message.',
    ],
    targetedSkills: [
      'Character Analysis',
      'Comparative Writing',
      'AO1 Textual Reference',
      'AO2 Writer\'s Methods',
      'AO3 Context',
    ],
  },

  // ── Lesson 8: Themes: Responsibility, Class, Generational Conflict ─────────
  {
    id: 'y11-igcse-08-themes-responsibility-class',
    title: 'Themes: Responsibility, Class, Generational Conflict',
    text: 'An Inspector Calls',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Priestley explores the theme of collective responsibility throughout the play',
      'Examine how class and social hierarchy drive the events and attitudes in the play',
      'Explore the generational conflict between the older and younger Birlings',
      'Write a thematic essay paragraph integrating multiple assessment objectives',
    ],
    successCriteria: [
      'I can trace the theme of responsibility through at least three key moments in the play',
      'I can explain how class differences contribute to Eva Smith\'s tragedy',
      'I can analyse the generational divide and explain its significance to Priestley\'s message',
      'I can write a thematic paragraph that integrates quotation, analysis, context, and writer\'s purpose',
    ],
    keywords: [
      'collective responsibility',
      'individual responsibility',
      'class hierarchy',
      'social mobility',
      'generational conflict',
      'moral awakening',
      'exploitation',
      'complicity',
    ],
    starterActivity: {
      title: 'Theme Web',
      duration: '7 minutes',
      instructions:
        'Display the three key themes on the board: Responsibility, Class, Generational Conflict. Students have 4 minutes to create a web connecting the themes to characters, events, and quotations. The aim is to show that the themes are interconnected — class creates the conditions for exploitation, responsibility is the moral question that arises, and the generational divide determines who learns the lesson. Teacher facilitates a brief sharing round, drawing connections between student webs.',
      differentiation: {
        support: 'Provide a pre-started web with some connections already drawn as a model.',
        core: 'Students create their web independently from memory of the text.',
        stretch:
          'Students add a fourth theme they consider important (e.g. gender, guilt, power) and justify its inclusion.',
      },
      resources: ['Theme web template', 'A3 paper'],
    },
    mainActivities: [
      {
        title: 'Theme Tracking: Evidence Hunt',
        duration: '20 minutes',
        instructions:
          'Divide the class into three groups, each assigned one theme. Each group receives a set of six extract cards from across the play. Students read each extract and annotate: (a) which theme(s) it relates to, (b) key quotations, (c) what Priestley is saying about this theme, (d) how context illuminates the theme. Groups create a theme poster summarising their findings with the heading: "Priestley uses [theme] to argue that..." Groups present their posters in 2 minutes each. All students take notes on themes they did not study directly.',
        differentiation: {
          support:
            'Provide guided annotation prompts on each extract card and a simplified poster template.',
          core: 'Students annotate independently and create a full poster.',
          stretch:
            'Students identify where their theme overlaps with the other two themes and explain how the themes reinforce each other.',
        },
        resources: [
          'Extract card sets (six per theme, 18 total)',
          'A3 poster paper and markers',
          'Theme poster template (support tier)',
        ],
      },
      {
        title: 'Thematic Essay Paragraph',
        duration: '20 minutes',
        instructions:
          'Teacher models writing a thematic paragraph using a clear structure: Theme statement → Embedded quotation → Language analysis → Contextual link → Writer\'s purpose. The model paragraph addresses responsibility. Students then write their own thematic paragraph on either class or generational conflict, following the same structure. After writing, students use a peer-assessment grid to evaluate their partner\'s paragraph against the five structural elements. Students redraft one section based on the feedback received.',
        differentiation: {
          support:
            'Provide the paragraph structure as a frame with sentence starters and a quotation bank.',
          core: 'Students write independently and peer-assess using the grid.',
          stretch:
            'Students write a second paragraph on a different theme and link the two paragraphs together, showing how the themes interconnect.',
        },
        resources: [
          'Model paragraph slide',
          'Paragraph structure frame (support tier)',
          'Peer-assessment grid',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Priestley\'s Most Important Theme',
      duration: '5 minutes',
      instructions:
        'Students vote: which theme is most central to Priestley\'s message — Responsibility, Class, or Generational Conflict? They must justify their vote in one sentence. Teacher counts votes and facilitates a brief debate. Draw out the idea that responsibility is arguably the umbrella theme, but that class and generation determine how characters respond to it.',
      differentiation: {
        support: 'Provide three pre-written justifications for students to choose from.',
        core: 'Students write their own justification independently.',
        stretch:
          'Students argue that the themes cannot be separated and that answering this question is itself a false choice — then justify that position.',
      },
    },
    homework:
      'Write a full essay paragraph (150-200 words) responding to: "How does Priestley present the theme of class in An Inspector Calls?" Include at least two quotations, language analysis, and a contextual reference.',
    worksheetQuestions: [
      {
        question:
          'What is the difference between "individual responsibility" and "collective responsibility"? How does the play explore both?',
        lines: 5,
        modelAnswer:
          'Individual responsibility means each person is accountable for their own actions — each Birling contributed separately to Eva\'s downfall. Collective responsibility means society as a whole must care for its members. The Inspector\'s final speech ("We are responsible for each other") argues that individual failures are symptoms of a collective moral failure. Priestley wants the audience to see that both types of responsibility matter.',
        marks: 4,
      },
      {
        question:
          'How does class contribute to Eva Smith\'s tragedy? Give specific examples from the play.',
        lines: 5,
        modelAnswer:
          'Eva is exploited at every turn because she is working-class and therefore powerless. Birling fires her for requesting fair wages. Sheila has her dismissed from a shop on a whim. Gerald keeps her as a mistress because her poverty makes her dependent. Mrs Birling refuses her charity because Eva used the Birling name. In each case, the Birlings\' class privilege enables them to act without consequences while Eva has no recourse.',
        marks: 4,
      },
      {
        question:
          'Why is the generational divide important to Priestley\'s message? Use evidence from the play.',
        lines: 5,
        modelAnswer:
          'The generational divide is important because it represents Priestley\'s belief that social change is possible through the young. Mr and Mrs Birling refuse to learn — they revert to complacency the moment they think the Inspector might be fake. Sheila and Eric, however, maintain their guilt and moral growth regardless. Priestley was writing for a post-war audience deciding the future: the old ways (capitalism, class rigidity) or a new society (welfare state, collective responsibility).',
        marks: 5,
      },
      {
        question:
          'Choose one quotation from the Inspector\'s final speech and analyse it in detail, connecting it to the theme of responsibility.',
        lines: 6,
        modelAnswer:
          '"We don\'t live alone. We are members of one body. We are responsible for each other." The metaphor "members of one body" presents society as a single organism, implying that harm to one part damages the whole. This directly opposes Birling\'s individualism. The repeated "we" makes it universal and inclusive — no one is exempt. For the 1945 audience, this echoed the collective spirit of wartime and the emerging welfare state, making Priestley\'s political argument personal and urgent.',
        marks: 5,
      },
      {
        question:
          'How are the themes of responsibility and class connected in the play? Write a paragraph explaining their relationship.',
        lines: 8,
        modelAnswer:
          'Priestley presents class as the mechanism through which responsibility is avoided. The Birlings feel no responsibility towards Eva because she belongs to a different class — she is a "girl of that sort" to Mrs Birling, a disposable worker to Mr Birling. Class creates emotional and moral distance, allowing the wealthy to exploit without guilt. The Inspector disrupts this by forcing the Birlings to see Eva as a human being with feelings and rights. Priestley argues that a just society requires the abolition of class barriers so that responsibility can no longer be evaded through social hierarchy.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Themes questions are the most common essay type in the Literature exam. Students must be able to write about themes with embedded textual evidence, not just discuss them in the abstract.',
      'The theme poster activity creates revision resources — laminate and display them or photograph for digital revision folders.',
      'Emphasise that examiners reward responses that connect themes rather than treating them in isolation.',
      'The peer-assessment grid should be modelled carefully — students need to understand what "language analysis" looks like versus "retelling the plot."',
    ],
    targetedSkills: [
      'Thematic Analysis',
      'Essay Writing',
      'AO1 Textual Reference',
      'AO2 Writer\'s Methods',
      'AO3 Context',
    ],
  },

  // ── Lesson 9: Dramatic Techniques ──────────────────────────────────────────
  {
    id: 'y11-igcse-09-dramatic-techniques',
    title: 'Dramatic Techniques',
    text: 'An Inspector Calls',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Identify and analyse key dramatic techniques used in An Inspector Calls',
      'Understand how Priestley uses stage directions, dramatic irony, the unities, and the well-made play structure',
      'Analyse the effect of the ending — the phone call and its implications',
      'Write about dramatic techniques using subject-specific terminology',
    ],
    successCriteria: [
      'I can identify at least four dramatic techniques and explain their effect on the audience',
      'I can analyse Priestley\'s use of stage directions to convey meaning beyond dialogue',
      'I can explain the significance of the final phone call and its impact on the play\'s message',
      'I can write analytically about dramatic techniques using appropriate terminology',
    ],
    keywords: [
      'dramatic irony',
      'stage directions',
      'the unities',
      'well-made play',
      'cliff-hanger',
      'dramatic tension',
      'fourth wall',
      'denouement',
      'cyclical structure',
    ],
    starterActivity: {
      title: 'Stage Direction Detectives',
      duration: '7 minutes',
      instructions:
        'Display three stage directions from the opening of the play (e.g. the lighting change from "pink and intimate" to "brighter and harder" when the Inspector arrives). Students discuss in pairs: what do these stage directions tell us that the dialogue does not? Teacher draws out the key point: Priestley is a playwright, not a novelist — meaning is created through visual and theatrical elements as much as through words. Students must write about the play AS A PLAY in their essays.',
      differentiation: {
        support: 'Provide an explanation of what stage directions are and what they control (lighting, movement, tone).',
        core: 'Students analyse the stage directions independently and infer their significance.',
        stretch:
          'Students explain how a director might interpret these stage directions differently and what effect that would have on the audience.',
      },
      resources: ['Stage directions extract slide'],
    },
    mainActivities: [
      {
        title: 'Dramatic Techniques Gallery Walk',
        duration: '20 minutes',
        instructions:
          'Set up six stations around the room, each featuring a different dramatic technique with an extract and explanation card: (1) Dramatic irony (Birling\'s Titanic speech), (2) Stage directions (lighting change), (3) The unities of time/place/action, (4) The well-made play structure (exposition, complication, denouement), (5) The cliffhanger ending (the phone call), (6) Breaking the fourth wall (the Inspector\'s final speech). Students visit each station in pairs, spend 3 minutes reading and annotating, then write a single analytical sentence about the technique\'s effect. After the gallery walk, students identify which two techniques they feel most confident writing about.',
        differentiation: {
          support:
            'Provide an analytical sentence frame at each station (e.g. "Priestley uses [technique] to [effect], which makes the audience feel...").',
          core: 'Students write analytical sentences independently at each station.',
          stretch:
            'Students rank the six techniques by importance to Priestley\'s message and write a justification for their top choice.',
        },
        resources: [
          'Six station cards with extracts and explanations',
          'Gallery walk recording sheet',
          'Sentence frames (support tier)',
        ],
      },
      {
        title: 'The Ending: Analysing the Phone Call',
        duration: '20 minutes',
        instructions:
          'Read the final page of the play aloud as a class. Then replay the final phone call: "A girl has just died... a police inspector is on his way." Students discuss in pairs: what is the effect of this ending? Is it a ghost story? A time loop? A moral warning? Teacher introduces the concept of the cyclical structure — the play threatens to repeat, which means the Birlings will be tested again. Will they pass this time? Students write two paragraphs: (1) What the ending means — analysing the cyclical structure and its effect; (2) Why Priestley chose this ending — connecting to his purpose and the 1945 audience.',
        differentiation: {
          support:
            'Provide guided questions for each paragraph and a word bank of analytical vocabulary.',
          core: 'Students write both paragraphs independently.',
          stretch:
            'Students compare the ending to an alternative ending (e.g. if the second phone call never came) and evaluate which is more effective for Priestley\'s purpose.',
        },
        resources: [
          'Final page of the play (printed extract)',
          'Guided questions (support tier)',
          'Analytical vocabulary word bank',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Technique Takeaway',
      duration: '5 minutes',
      instructions:
        'Students write on an exit ticket: one dramatic technique they will definitely include in their exam response and one sentence explaining how they would use it. Teacher collects exit tickets and reviews them to identify any techniques that students are avoiding or misunderstanding.',
      differentiation: {
        support: 'Provide a list of the six techniques as a reminder.',
        core: 'Students choose and explain independently.',
        stretch:
          'Students write a second sentence showing how they would link the technique to a different question or theme.',
      },
    },
    homework:
      'Write a 200-word analysis of the significance of the lighting change when the Inspector arrives. Explain what it symbolises and how it contributes to the audience\'s understanding of the Inspector\'s role.',
    worksheetQuestions: [
      {
        question:
          'What is the significance of the lighting change from "pink and intimate" to "brighter and harder" when the Inspector arrives?',
        lines: 5,
        modelAnswer:
          'The "pink and intimate" lighting represents the Birlings\' warm, comfortable, self-satisfied world. When the Inspector arrives, the "brighter and harder" light symbolises scrutiny, truth, and exposure — the family can no longer hide in their complacency. Priestley uses this stage direction to signal that the Inspector brings moral clarity that is uncomfortable and unavoidable.',
        marks: 4,
      },
      {
        question:
          'Explain how Priestley uses the "three unities" (time, place, action) and why this is significant.',
        lines: 5,
        modelAnswer:
          'The play takes place in one room (the dining room), in one evening, with one continuous storyline. This creates a claustrophobic, pressure-cooker atmosphere where characters cannot escape the Inspector\'s questioning. It also mirrors the real-time experience for the audience, making the tension feel immediate and inescapable.',
        marks: 4,
      },
      {
        question:
          'Why does Priestley end the play with a second phone call? What effect does this have?',
        lines: 5,
        modelAnswer:
          'The second phone call announces that a real inspector is on the way, creating a cyclical structure. This is significant because it suggests the Birlings will be tested again — those who have learned nothing (Mr and Mrs Birling) will be exposed, while those who have changed (Sheila and Eric) may respond differently. For the audience, it serves as a warning: if you do not learn from your mistakes, history will repeat itself.',
        marks: 5,
      },
      {
        question:
          'How does the Inspector\'s final speech break the "fourth wall"? Why is this important?',
        lines: 5,
        modelAnswer:
          'The Inspector\'s speech — "We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish" — shifts from addressing the Birlings to addressing the audience directly. The prophetic tone and the reference to "fire and blood" (which a 1945 audience would associate with the Blitz) makes the message personal and urgent. Priestley breaks the fourth wall to transform the play from entertainment into a political call to action.',
        marks: 4,
      },
      {
        question:
          'Choose one dramatic technique from the play and write a paragraph explaining its effect on the audience. Include a quotation and a reference to Priestley\'s purpose.',
        lines: 8,
        modelAnswer:
          'Priestley uses dramatic irony to undermine Mr Birling\'s authority and, by extension, the capitalist worldview he represents. When Birling confidently dismisses the possibility of war and declares the Titanic "unsinkable," the 1945 audience — who had lived through two World Wars — would recognise his ignorance immediately. This creates a sense of superiority over Birling, making the audience more receptive to the Inspector\'s opposing message of collective responsibility. Priestley\'s purpose is clear: if Birling is wrong about everything, his political philosophy of selfish individualism must also be wrong.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Students often forget that An Inspector Calls is a PLAY — they analyse it as if it were a novel. This lesson addresses that directly.',
      'The gallery walk creates a revision resource. Consider photographing the station cards for digital revision folders.',
      'The ending discussion can provoke excellent debate — allow time for genuine disagreement about what the ending means.',
      'Examiners specifically reward students who analyse dramatic techniques (AO2) rather than simply retelling the plot. Drill this distinction.',
    ],
    targetedSkills: [
      'Dramatic Technique Analysis',
      'AO2 Writer\'s Methods',
      'Stage Direction Analysis',
      'Structural Analysis',
      'Exam Writing',
    ],
  },

  // ── Lesson 10: Extract Response Practice ───────────────────────────────────
  {
    id: 'y11-igcse-10-extract-response-practice',
    title: 'Extract Response Practice',
    text: 'An Inspector Calls',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand the structure and requirements of an extract-based Literature essay',
      'Practise close reading of a given extract with annotation for language, structure, and context',
      'Write a timed extract response that balances close analysis with wider textual knowledge',
      'Self-assess against mark scheme criteria to identify areas for improvement',
    ],
    successCriteria: [
      'I can annotate an extract identifying language features, dramatic techniques, and contextual links',
      'I can structure an essay that moves from the extract outward to the wider play',
      'I can write a sustained analytical response within a timed framework',
      'I can self-assess my response against band descriptors and set specific improvement targets',
    ],
    keywords: [
      'extract question',
      'close reading',
      'annotation',
      'wider textual knowledge',
      'essay structure',
      'sustained analysis',
      'band descriptors',
      'AO1', 'AO2', 'AO3',
    ],
    starterActivity: {
      title: 'Annotation Race',
      duration: '7 minutes',
      instructions:
        'Display a short extract (8-10 lines) from the play. Students have 3 minutes to annotate as many features as possible: language techniques, dramatic techniques, contextual links, links to themes, writer\'s purpose. After 3 minutes, pairs compare annotations and add anything they missed. Teacher models a "master annotation" on the board, highlighting the types of points that lead to top-band responses: those that combine technique identification with analysis of effect AND context.',
      differentiation: {
        support: 'Provide an annotation key showing what to look for (e.g. circle language, underline stage directions, box contextual links).',
        core: 'Students annotate independently using their own system.',
        stretch:
          'Students prioritise their annotations — which three points would make the strongest essay paragraphs and why?',
      },
      resources: ['Extract slide', 'Annotation key (support tier)'],
    },
    mainActivities: [
      {
        title: 'Essay Structure Masterclass',
        duration: '13 minutes',
        instructions:
          'Teacher models the ideal structure for an extract response: (1) Brief introduction — address the question directly with a thesis; (2) Close analysis of the extract — 2-3 paragraphs on language, dramatic technique, and structure within the extract; (3) Wider textual links — how the extract connects to the rest of the play; (4) Contextual integration — woven throughout, not bolted on. Display a model essay on the board and students colour-code it: yellow for close analysis, green for wider links, red for context, blue for language analysis. This visual mapping shows what a balanced response looks like.',
        differentiation: {
          support:
            'Provide a pre-colour-coded version and ask students to explain why each section is that colour.',
          core: 'Students colour-code the model essay independently.',
          stretch:
            'Students identify which assessment objective each colour corresponds to and evaluate which AO is strongest and weakest in the model.',
        },
        resources: ['Model essay handout', 'Four colour highlighters', 'Essay structure guide'],
      },
      {
        title: 'Timed Extract Response',
        duration: '30 minutes',
        instructions:
          'Students write a full extract response under timed conditions. Provide an extract and a question (e.g. "How does Priestley present the Inspector in this extract and in the play as a whole?"). Students should spend 5 minutes annotating and planning, 22 minutes writing, and 3 minutes proofreading. The room should be silent during writing. Teacher circulates and makes notes on common strengths and areas for improvement for feedback in the plenary.',
        differentiation: {
          support:
            'Provide a planning template with sections for extract analysis and wider links, plus a key quotation bank.',
          core: 'Students plan and write independently under timed conditions.',
          stretch:
            'Students aim to include all three AOs in every paragraph rather than treating them in separate sections.',
        },
        resources: [
          'Extract and question sheet',
          'Lined paper',
          'Planning template (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment and Targets',
      duration: '7 minutes',
      instructions:
        'Distribute simplified band descriptors. Students read their own response and highlight the band they think best describes their work. They identify: (1) their strongest paragraph — what makes it effective; (2) their weakest paragraph — what specifically needs improvement; (3) one target for next time, expressed as an action (e.g. "I will include more language analysis in my close reading paragraphs"). Students share their target with a partner.',
      differentiation: {
        support: 'Provide a self-assessment checklist (Did I include quotations? Did I analyse language? Did I mention context?).',
        core: 'Students self-assess against the band descriptors independently.',
        stretch:
          'Students rewrite their weakest paragraph to move it up one band, then annotate the changes.',
      },
      resources: ['Simplified band descriptors', 'Self-assessment checklist (support tier)'],
    },
    homework:
      'Rewrite your weakest paragraph from today\'s timed response. Then write a brief reflection (100 words) explaining what you changed and why.',
    worksheetQuestions: [
      {
        question:
          'What are the key components of a successful extract-based essay? List at least four.',
        lines: 4,
        modelAnswer:
          'A successful extract essay includes: (1) close analysis of language and dramatic techniques within the extract, (2) wider textual references linking the extract to the rest of the play, (3) contextual integration woven throughout the response, (4) a clear structure that addresses the question directly, and (5) embedded quotations with analysis of individual words and phrases.',
        marks: 4,
      },
      {
        question:
          'Why is it important to analyse individual words from quotations rather than just identifying techniques?',
        lines: 4,
        modelAnswer:
          'Identifying a technique (e.g. "Priestley uses a metaphor") only tells the examiner what the writer did, not how it works. Analysing individual words shows deeper understanding — it explains the connotations, the effect on the reader, and why the writer chose that specific word. This level of detail is what separates top-band responses from mid-band ones.',
        marks: 3,
      },
      {
        question:
          'What is the difference between "extract analysis" and "wider textual knowledge"? Why do you need both?',
        lines: 5,
        modelAnswer:
          'Extract analysis focuses closely on the language and techniques within the given passage. Wider textual knowledge refers to the rest of the play — other scenes, characters, or events that connect to the extract. Both are needed because the extract is a snapshot; examiners want to see that students understand its significance within the whole play and can make connections across the text.',
        marks: 4,
      },
      {
        question:
          'Read the following opening to an essay and explain what is wrong with it:\n\n"In this essay I am going to write about how Priestley presents the Inspector. First, I will talk about what happens in the extract. Then I will talk about the rest of the play."',
        lines: 5,
        modelAnswer:
          'This opening is weak because it describes the structure of the essay rather than addressing the question. It wastes time telling the examiner what the student will do rather than doing it. A stronger opening would begin with a direct thesis: "Priestley presents the Inspector as an omniscient moral authority who disrupts the Birlings\' complacency and exposes their complicity in Eva Smith\'s death."',
        marks: 4,
      },
      {
        question:
          'Write a thesis statement and the first analytical paragraph for the question: "How does Priestley present ideas about guilt in this extract and in the play as a whole?"',
        lines: 10,
        modelAnswer:
          'Thesis: Priestley presents guilt as a moral test — those who accept it demonstrate the capacity for change, while those who deny it reveal the moral bankruptcy of the capitalist class. Paragraph: In the extract, Sheila\'s response to her role in Eva\'s dismissal reveals genuine guilt. Her cry of "I feel rotten about it" uses the colloquial adjective "rotten" to convey deep, visceral disgust at her own behaviour. The informality of the language contrasts with her mother\'s more controlled, dismissive tone, suggesting that Sheila\'s guilt is instinctive rather than performed. Priestley positions Sheila\'s guilt as a sign of moral awakening — she is the first Birling to accept responsibility, which aligns her with the Inspector\'s message of collective care. For a 1945 audience, Sheila represents the hope that the younger generation can build a more compassionate society.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This is the key assessment-style lesson for the An Inspector Calls unit. The timed response should be marked with full formative feedback.',
      'The most common weakness is imbalance — students either write only about the extract (ignoring wider textual knowledge) or barely reference the extract at all. The colour-coding activity addresses this directly.',
      'Encourage students to spend a full 5 minutes annotating before they write. Students who skip annotation tend to produce weaker, less detailed responses.',
      'Consider collecting responses and using anonymised excerpts in a future lesson for class-wide feedback on common issues.',
    ],
    targetedSkills: [
      'Extract Analysis',
      'Essay Writing',
      'Close Reading',
      'Self-Assessment',
      'Timed Writing',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LITERATURE PAPER 2 — MACBETH (5 lessons)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson 11: Jacobean Context and Shakespeare's Purpose ──────────────────
  {
    id: 'y11-igcse-11-jacobean-context',
    title: 'Jacobean Context and Shakespeare\'s Purpose',
    text: 'Macbeth',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand the key aspects of Jacobean society relevant to Macbeth: the Divine Right of Kings, the Great Chain of Being, and attitudes towards witchcraft',
      'Analyse how Shakespeare wrote Macbeth to flatter King James I and reinforce political orthodoxy',
      'Connect contextual knowledge to specific moments in the text',
      'Explain why context is essential for understanding the play\'s moral framework',
    ],
    successCriteria: [
      'I can explain the Divine Right of Kings and the Great Chain of Being and their relevance to Macbeth',
      'I can explain why Shakespeare wrote Macbeth and how it relates to King James I',
      'I can link at least three contextual points to specific moments or quotations in the play',
      'I can write a paragraph integrating context into literary analysis',
    ],
    keywords: [
      'Jacobean',
      'Divine Right of Kings',
      'Great Chain of Being',
      'regicide',
      'witchcraft',
      'Gunpowder Plot',
      'patriarchal society',
      'natural order',
      'King James I',
    ],
    starterActivity: {
      title: 'What Did They Believe?',
      duration: '7 minutes',
      instructions:
        'Display five statements about Jacobean beliefs (e.g. "The king was appointed by God", "Witches were real and could control weather", "Women should be obedient to their husbands"). Students sort them into "Believed by Jacobeans" and "Not believed" — the twist is that all five were genuinely believed. Teacher uses this to establish that a Jacobean audience watched Macbeth with a completely different worldview from a modern audience. Understanding this worldview is essential for understanding the play.',
      differentiation: {
        support: 'Provide the statements on cards for physical sorting with brief explanations on the back.',
        core: 'Students sort independently and predict which are genuine Jacobean beliefs.',
        stretch:
          'Students explain how each belief would change the audience\'s response to a specific moment in Macbeth.',
      },
      resources: ['Belief statement cards or slide'],
    },
    mainActivities: [
      {
        title: 'Contextual Knowledge Building',
        duration: '20 minutes',
        instructions:
          'Teacher delivers structured input on three key contextual areas: (1) The Divine Right of Kings and the Great Chain of Being — killing a king is not just murder but a cosmic crime that disrupts the natural order; (2) King James I — his obsession with witchcraft (Daemonologie), his lineage from Banquo (historically), the Gunpowder Plot of 1605; (3) Gender and power — patriarchal expectations and the threat posed by powerful women (Lady Macbeth as a transgressive figure). Students take Cornell notes with a summary section. After input, students complete a matching activity pairing contextual facts to moments in the play (e.g. "The Gunpowder Plot" matches to "Macbeth explores the consequences of regicide").',
        differentiation: {
          support:
            'Provide a partially completed Cornell notes template with key headings and some facts filled in.',
          core: 'Students take Cornell notes independently and complete the matching activity.',
          stretch:
            'Students write a short analysis of how Shakespeare uses context to manipulate the audience\'s response, choosing one specific example.',
        },
        resources: [
          'Context presentation slides',
          'Cornell notes template',
          'Context-to-text matching cards',
        ],
      },
      {
        title: 'Context in the Text: Analytical Writing',
        duration: '20 minutes',
        instructions:
          'Provide students with three key extracts: (1) The witches\' opening scene, (2) Macbeth\'s soliloquy before Duncan\'s murder ("If it were done when \'tis done"), (3) Lady Macbeth\'s "unsex me here" speech. For each extract, students annotate contextual connections. Then, students choose one extract and write a full analytical paragraph that integrates context. The paragraph must follow the structure: What Shakespeare does → How he does it (quotation + analysis) → Why he does it (purpose + context). Teacher models one paragraph first.',
        differentiation: {
          support:
            'Provide a paragraph frame with sentence starters and a context connection bank for each extract.',
          core: 'Students annotate and write independently.',
          stretch:
            'Students write paragraphs on two extracts and link them, showing how context illuminates both moments similarly.',
        },
        resources: [
          'Three extract sheets',
          'Paragraph frame (support tier)',
          'Context connection bank (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Context Elevator Pitch',
      duration: '5 minutes',
      instructions:
        'Students have 30 seconds to deliver an "elevator pitch" to their partner: explain the single most important contextual fact for understanding Macbeth and why. Partners then swap. Teacher selects two or three to share with the class. Discuss: is there one piece of context that is more important than all others, or does understanding require all of them together?',
      differentiation: {
        support: 'Allow students to read from their notes.',
        core: 'Students deliver their pitch from memory.',
        stretch:
          'Students explain how their chosen contextual point would change the meaning of the play if it were not understood.',
      },
    },
    homework:
      'Write a 200-word response to: "How does Shakespeare use the concept of the Great Chain of Being in Macbeth?" Include at least two quotations and a clear explanation of the contextual concept.',
    worksheetQuestions: [
      {
        question:
          'Explain the "Divine Right of Kings" and why it is important for understanding Macbeth.',
        lines: 5,
        modelAnswer:
          'The Divine Right of Kings was the belief that monarchs were appointed by God and that their authority was sacred. Killing a king (regicide) was therefore not only a political crime but a sin against God and nature. This is important for Macbeth because it means that when Macbeth murders Duncan, he is committing the ultimate transgression — disrupting the divinely ordained order. A Jacobean audience would have understood his subsequent suffering and downfall as God\'s punishment.',
        marks: 4,
      },
      {
        question:
          'Why did Shakespeare write Macbeth? How does the play relate to King James I?',
        lines: 5,
        modelAnswer:
          'Shakespeare wrote Macbeth partly to flatter King James I, who had recently become king of England. James claimed descent from Banquo, so Shakespeare presents Banquo as noble and loyal — the moral counterpart to Macbeth. James was also obsessed with witchcraft and had written a book on it, so the inclusion of the witches would have fascinated him. The play\'s message — that regicide leads to chaos and damnation — reinforced James\'s own political authority.',
        marks: 4,
      },
      {
        question:
          'What is the "Great Chain of Being"? How does Macbeth\'s murder of Duncan relate to it?',
        lines: 5,
        modelAnswer:
          'The Great Chain of Being was a hierarchical ordering of all creation: God at the top, then angels, then the king, then nobles, down to animals and plants. Every being had a fixed place. Macbeth\'s murder of Duncan breaks this chain, which is reflected in the unnatural events that follow — storms, animals behaving strangely, darkness at midday. Shakespeare uses these disruptions to show that regicide is a crime against the natural order itself.',
        marks: 4,
      },
      {
        question:
          'How would a Jacobean audience have responded to Lady Macbeth\'s "unsex me here" speech? Why?',
        lines: 5,
        modelAnswer:
          'A Jacobean audience would have been deeply disturbed. In a patriarchal society, women were expected to be gentle, obedient, and nurturing. Lady Macbeth\'s call to be "unsexed" — to have her femininity removed — would have been seen as unnatural and transgressive. Her invocation of "spirits" would have been associated with witchcraft, which James I took very seriously. She would have been perceived as a threat to the natural order, making her ultimate madness and death a form of divine retribution.',
        marks: 5,
      },
      {
        question:
          'Write a paragraph explaining how Shakespeare uses the Gunpowder Plot context to shape the audience\'s response to Macbeth\'s regicide.',
        lines: 8,
        modelAnswer:
          'Shakespeare wrote Macbeth shortly after the Gunpowder Plot of 1605, when Guy Fawkes and his co-conspirators attempted to blow up Parliament and kill King James I. The plot was fresh in the audience\'s memory, making the theme of regicide intensely relevant and disturbing. Shakespeare shows the catastrophic consequences of killing a king — Macbeth\'s guilt, Scotland\'s suffering, the unnatural disturbances in nature — to reinforce the message that treason against a divinely appointed monarch leads only to destruction. This would have reassured James and his supporters that the natural order, though temporarily disrupted, would always reassert itself through divine justice.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Context is worth up to a third of the marks in some mark schemes — students cannot afford to neglect it.',
      'The most common error is "context dumping" — writing a paragraph of historical facts disconnected from analysis. Model how to weave context into analytical points.',
      'The Cornell notes from this lesson become a key revision resource. Encourage students to add to them throughout the Macbeth unit.',
      'Consider showing a short clip of a Jacobean-style performance alongside a modern production to illustrate how audience response changes with context.',
    ],
    targetedSkills: [
      'Contextual Understanding',
      'Writer\'s Purpose',
      'AO3 Context',
      'Analytical Writing',
      'Note-Taking',
    ],
  },

  // ── Lesson 12: Macbeth and Lady Macbeth - Character Arcs ───────────────────
  {
    id: 'y11-igcse-12-macbeth-lady-macbeth-arcs',
    title: 'Macbeth and Lady Macbeth - Character Arcs',
    text: 'Macbeth',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Trace the character arcs of Macbeth and Lady Macbeth across the play',
      'Analyse how Shakespeare uses their relationship to explore themes of ambition and guilt',
      'Identify the reversal in their roles — from Lady Macbeth\'s dominance to Macbeth\'s tyranny and her descent into madness',
      'Write a comparative analysis of both characters at different points in the play',
    ],
    successCriteria: [
      'I can plot the character arcs of Macbeth and Lady Macbeth on a trajectory diagram',
      'I can identify and explain the moment their roles reverse',
      'I can analyse key quotations showing each character\'s development',
      'I can write a comparative paragraph tracking a character\'s change with embedded quotations',
    ],
    keywords: [
      'tragic hero',
      'hamartia',
      'hubris',
      'character arc',
      'role reversal',
      'tyranny',
      'manipulation',
      'soliloquy',
      'descent into madness',
    ],
    starterActivity: {
      title: 'Power Graph',
      duration: '7 minutes',
      instructions:
        'Display a graph with the x-axis as the play\'s timeline (Act 1 to Act 5) and the y-axis as "Power/Control." Students draw two lines — one for Macbeth and one for Lady Macbeth — showing how each character\'s power changes across the play. Students should notice the "X" shape: Lady Macbeth starts with power and loses it; Macbeth starts uncertain and gains tyrannical power before his final downfall. Pairs compare graphs and discuss: at what point do the lines cross?',
      differentiation: {
        support: 'Provide key events along the x-axis as reference points (e.g. Act 1: the witches, Act 2: Duncan\'s murder, Act 5: battle).',
        core: 'Students plot independently from their knowledge of the text.',
        stretch:
          'Students annotate their graph with quotations at each turning point.',
      },
      resources: ['Power graph template', 'Key events reference (support tier)'],
    },
    mainActivities: [
      {
        title: 'Character Arc Tracking',
        duration: '22 minutes',
        instructions:
          'Students work through a character arc worksheet for both Macbeth and Lady Macbeth. For each of five key moments, they record: (a) what the character does/says, (b) a key quotation, (c) what this reveals about their state of mind, (d) how they have changed since the previous moment. The five moments are: (1) Before the murder — ambition vs hesitation; (2) During the murder — who is in control?; (3) After the murder — guilt and paranoia; (4) Mid-play — the banquet scene; (5) The end — Macbeth\'s defiance and Lady Macbeth\'s madness. After completing the worksheet, students write a one-sentence summary of each character\'s overall arc.',
        differentiation: {
          support:
            'Provide quotations pre-selected for each moment and guided questions to help with the "state of mind" column.',
          core: 'Students select their own quotations and complete all columns independently.',
          stretch:
            'Students add a sixth moment of their own choosing and explain why it is a significant turning point.',
        },
        resources: [
          'Character arc worksheet (with five key moments)',
          'Text copies of Macbeth',
          'Pre-selected quotation bank (support tier)',
        ],
      },
      {
        title: 'Comparative Writing: Then and Now',
        duration: '18 minutes',
        instructions:
          'Teacher models a comparative paragraph tracking Macbeth\'s change: "In Act 1, Macbeth [quotation + analysis], yet by Act 5, he [quotation + analysis]. This transformation reveals Shakespeare\'s message that [purpose + context]." Students write their own comparative paragraph on Lady Macbeth, tracking her change from the "unsex me here" speech to the sleepwalking scene. They must include: quotations from both early and late in the play, language analysis, and a comment on Shakespeare\'s purpose. After writing, students peer-assess using a checklist: Does the paragraph show change? Does it include quotations from two different points? Does it analyse language? Does it reference purpose or context?',
        differentiation: {
          support:
            'Provide the two quotations (from "unsex me here" and the sleepwalking scene) and a comparative paragraph frame.',
          core: 'Students write independently and peer-assess.',
          stretch:
            'Students write a second comparative paragraph on Macbeth and then link both paragraphs to argue that the two characters\' arcs mirror each other inversely.',
        },
        resources: [
          'Model comparative paragraph slide',
          'Paragraph frame (support tier)',
          'Peer-assessment checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Tragic Hero or Villain?',
      duration: '5 minutes',
      instructions:
        'Students vote: is Macbeth a tragic hero or a villain? They must write a one-sentence justification using a quotation. Teacher facilitates a brief debate, drawing out the idea that the concept of "tragic hero" requires both sympathy and a fatal flaw — can we still sympathise with Macbeth by Act 5? The ambiguity is the point.',
      differentiation: {
        support: 'Provide definitions of "tragic hero" and "villain" and a quotation to use.',
        core: 'Students argue independently with their own quotation.',
        stretch:
          'Students argue that Macbeth is both simultaneously and explain how Shakespeare achieves this complexity.',
      },
    },
    homework:
      'Write a 250-word response to: "How does Shakespeare present the relationship between Macbeth and Lady Macbeth as changing across the play?" Include quotations from at least two different acts.',
    worksheetQuestions: [
      {
        question:
          'What is a "tragic hero"? How does Macbeth fit this definition?',
        lines: 5,
        modelAnswer:
          'A tragic hero is a character of high status who possesses a fatal flaw (hamartia) that leads to their downfall. Macbeth fits this definition: he is a respected warrior and Thane, but his ambition (hamartia) leads him to commit regicide, which triggers a chain of violence and guilt that destroys him. The audience experiences catharsis — pity for his suffering and fear that ambition could corrupt anyone.',
        marks: 4,
      },
      {
        question:
          'How does Lady Macbeth\'s character change between Act 1 and Act 5? Use quotations to support your answer.',
        lines: 6,
        modelAnswer:
          'In Act 1, Lady Macbeth is commanding and ruthless. She calls on spirits to "unsex me here" and fill her "from the crown to the toe top-full of direst cruelty." She dominates Macbeth and orchestrates Duncan\'s murder. By Act 5, she is broken — the sleepwalking scene shows her compulsively washing her hands ("Out, damned spot") and speaking in fragmented prose rather than the controlled verse of her earlier speeches. Her madness reveals that guilt has consumed her, and her offstage death confirms her destruction.',
        marks: 5,
      },
      {
        question:
          'At what point in the play do Macbeth and Lady Macbeth\'s roles reverse? Explain what happens.',
        lines: 5,
        modelAnswer:
          'The reversal begins around Act 3. After Banquo\'s murder, Macbeth acts independently — he arranges the murder without telling Lady Macbeth. At the banquet, Lady Macbeth tries to control the situation ("Are you a man?") but is no longer in command. From this point, Macbeth becomes increasingly tyrannical and isolated while Lady Macbeth withdraws into guilt and madness. The character who started in control ends powerless, and vice versa.',
        marks: 4,
      },
      {
        question:
          'Analyse the significance of Macbeth\'s soliloquy "Tomorrow, and tomorrow, and tomorrow" (Act 5, Scene 5). What does it reveal about his state of mind?',
        lines: 6,
        modelAnswer:
          'This soliloquy reveals Macbeth\'s nihilism and despair. The repetition of "tomorrow" suggests time has become meaningless — each day is identical and pointless. The metaphor of life as "a tale told by an idiot, full of sound and fury, signifying nothing" strips existence of all meaning and purpose. Macbeth has achieved everything he desired (the crown) and found it worthless. Shakespeare uses this moment to show the ultimate consequence of unchecked ambition: not just political downfall but spiritual emptiness.',
        marks: 5,
      },
      {
        question:
          'Write a comparative paragraph analysing Macbeth\'s state of mind before Duncan\'s murder (Act 1, Scene 7) and after Banquo\'s murder (Act 3, Scene 4). How has he changed?',
        lines: 8,
        modelAnswer:
          'Before Duncan\'s murder, Macbeth is tormented by moral conflict. His soliloquy "If it were done when \'tis done" shows him weighing the consequences, acknowledging Duncan\'s virtues, and recognising that only "vaulting ambition" drives him. The conditional "if" reveals his uncertainty. By Act 3, Scene 4, this hesitation has been replaced by paranoid violence — he has arranged Banquo\'s murder without consulting Lady Macbeth and sees Banquo\'s ghost at the feast. Shakespeare shows that once the moral threshold of regicide is crossed, each subsequent crime becomes easier, trapping Macbeth in a cycle of violence. This trajectory illustrates the play\'s central warning: unchecked ambition does not bring power but imprisonment.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The power graph is a powerful visual tool — display student examples on the wall for revision.',
      'Students often struggle to write about Lady Macbeth\'s change because they focus on her strength in Act 1 and her madness in Act 5 without tracing the gradual shift in between. The five-moment tracking worksheet addresses this.',
      'The "tragic hero or villain" debate is deliberately unresolvable — use it to model the kind of sophisticated argument examiners reward.',
      'Encourage students to use the word "Shakespeare" rather than "Macbeth" when discussing authorial intent — this keeps the focus on the writer\'s craft.',
    ],
    targetedSkills: [
      'Character Analysis',
      'Comparative Writing',
      'Quotation Selection',
      'AO1 Textual Reference',
      'AO2 Writer\'s Methods',
    ],
  },

  // ── Lesson 13: Themes: Ambition, Guilt, Supernatural ───────────────────────
  {
    id: 'y11-igcse-13-themes-ambition-guilt-supernatural',
    title: 'Themes: Ambition, Guilt, Supernatural',
    text: 'Macbeth',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Shakespeare explores ambition as both a motivating and destructive force',
      'Examine how guilt manifests in different characters and through different dramatic techniques',
      'Explore the role of the supernatural and its significance for a Jacobean audience',
      'Write a thematic essay paragraph integrating quotation, analysis, and context',
    ],
    successCriteria: [
      'I can trace the theme of ambition through Macbeth and Lady Macbeth\'s actions and language',
      'I can explain how Shakespeare dramatises guilt through imagery, soliloquy, and the sleepwalking scene',
      'I can analyse the role of the witches and the supernatural within the play\'s moral framework',
      'I can write a thematic paragraph that addresses all three assessment objectives',
    ],
    keywords: [
      'vaulting ambition',
      'hamartia',
      'guilt',
      'blood imagery',
      'hallucination',
      'supernatural',
      'equivocation',
      'prophecy',
      'moral corruption',
    ],
    starterActivity: {
      title: 'Theme Word Association',
      duration: '6 minutes',
      instructions:
        'Display the three themes: Ambition, Guilt, Supernatural. Students have 2 minutes to write as many words, quotations, characters, and scenes as they associate with each theme. Then compare with a partner — add any they missed. Teacher draws out key connections: ambition leads to the crime, guilt is the consequence, and the supernatural is the catalyst. These three themes form the play\'s moral architecture.',
      differentiation: {
        support: 'Provide a quotation bank to prompt associations.',
        core: 'Students work from memory independently.',
        stretch:
          'Students identify moments where all three themes overlap in a single scene and explain why.',
      },
      resources: ['Theme headings slide', 'Quotation bank (support tier)'],
    },
    mainActivities: [
      {
        title: 'Theme Deep Dives',
        duration: '22 minutes',
        instructions:
          'Students work in groups of three, each group member taking one theme. Each student completes a theme analysis sheet for their theme: (1) Definition — what this theme means in the context of the play; (2) Three key quotations with analysis; (3) How the theme develops across the play (beginning → middle → end); (4) Contextual significance — why this theme mattered to a Jacobean audience. After 12 minutes, group members teach each other their themes. All students complete a summary grid with notes on all three themes. Teacher circulates to ensure accuracy.',
        differentiation: {
          support:
            'Provide a partially completed theme analysis sheet with one quotation and its analysis already modelled.',
          core: 'Students complete the full analysis independently and teach their group.',
          stretch:
            'Students evaluate which theme is most important to Shakespeare\'s overall message and write a justified argument.',
        },
        resources: [
          'Theme analysis sheets (one per theme)',
          'Summary grid for all three themes',
          'Text copies of Macbeth',
        ],
      },
      {
        title: 'Thematic Essay Paragraph',
        duration: '20 minutes',
        instructions:
          'Teacher models a thematic paragraph on ambition, demonstrating how to move from theme statement → quotation → word-level analysis → contextual link → Shakespeare\'s purpose. Students then write their own thematic paragraph on either guilt or the supernatural. They must follow the modelled structure and include: an embedded quotation, analysis of at least two individual words, a reference to context, and a statement of Shakespeare\'s purpose. After writing, students swap with someone who wrote about the other theme and provide feedback using a checklist: Is the theme statement clear? Is the quotation embedded? Is there word-level analysis? Is context integrated?',
        differentiation: {
          support:
            'Provide the paragraph structure as a writing frame with sentence starters.',
          core: 'Students write independently and provide detailed peer feedback.',
          stretch:
            'Students write a linking sentence at the end that connects their theme to one of the other two themes, showing how they work together.',
        },
        resources: [
          'Model paragraph slide',
          'Writing frame (support tier)',
          'Peer feedback checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Witches\' Responsibility',
      duration: '5 minutes',
      instructions:
        'Pose the question: "Are the witches responsible for Macbeth\'s downfall, or would he have done it anyway?" Students write a one-sentence answer with justification. Teacher takes a quick poll and facilitates a 2-minute debate. Draw out the key point: Shakespeare deliberately leaves this ambiguous — the witches prophesy but never command. This ambiguity is central to the play\'s exploration of free will and moral responsibility.',
      differentiation: {
        support: 'Provide two pre-written positions for students to choose between.',
        core: 'Students argue independently with textual justification.',
        stretch:
          'Students explain why the ambiguity itself is important — why does Shakespeare not give a definitive answer?',
      },
    },
    homework:
      'Write a full essay paragraph (150-200 words) responding to: "How does Shakespeare use blood imagery to explore the theme of guilt in Macbeth?" Include at least two quotations with word-level analysis.',
    worksheetQuestions: [
      {
        question:
          'How does Shakespeare present ambition in Macbeth? Is ambition presented as entirely negative?',
        lines: 5,
        modelAnswer:
          'Shakespeare presents ambition as a double-edged force. Macbeth\'s initial ambition is stirred by the witches\' prophecy and is not inherently evil — ambition is a natural human quality. However, when it overrides moral judgement ("I have no spur to prick the sides of my intent, but only vaulting ambition"), it becomes destructive. Shakespeare suggests that ambition without conscience leads to tyranny, while legitimate ambition (as seen in Malcolm) serves the common good.',
        marks: 4,
      },
      {
        question:
          'Analyse the significance of blood imagery in the play. Give two examples and explain what they reveal about guilt.',
        lines: 6,
        modelAnswer:
          'After Duncan\'s murder, Macbeth stares at his hands: "Will all great Neptune\'s ocean wash this blood clean from my hand?" The hyperbole of needing an entire ocean suggests his guilt is vast and permanent. Later, Lady Macbeth\'s sleepwalking reveals her obsession with the same image: "Out, damned spot!" The fact that she sees blood that is not physically there shows guilt has become a psychological torment. Shakespeare uses blood as a recurring motif to show that guilt, once incurred, cannot be removed.',
        marks: 5,
      },
      {
        question:
          'What role do the witches play in the play? Are they the cause of Macbeth\'s downfall?',
        lines: 5,
        modelAnswer:
          'The witches introduce the idea of kingship but never tell Macbeth to murder Duncan — they prophesy, but the choice is his. Their equivocal language ("fair is foul") suggests they are agents of chaos and moral confusion. For a Jacobean audience, the witches were genuinely frightening — James I believed in witchcraft and had written about it. Shakespeare uses them to raise questions about fate, free will, and the nature of evil, without providing a definitive answer.',
        marks: 4,
      },
      {
        question:
          'How does guilt affect Macbeth and Lady Macbeth differently? Compare their responses.',
        lines: 6,
        modelAnswer:
          'Macbeth\'s guilt is immediate but transforms over time. After Duncan\'s murder, he is horrified ("I am afraid to think what I have done"), but as the play progresses, guilt hardens into paranoia and violence rather than remorse. Lady Macbeth initially suppresses her guilt ("A little water clears us of this deed") but it erupts uncontrollably in Act 5 through sleepwalking and hallucinated blood. Shakespeare suggests that guilt cannot be permanently suppressed — it will find expression, whether through conscious paranoia or unconscious madness.',
        marks: 5,
      },
      {
        question:
          'Write a thematic paragraph about the supernatural in Macbeth. Include a quotation, word-level analysis, and a contextual reference.',
        lines: 8,
        modelAnswer:
          'Shakespeare uses the supernatural to externalise Macbeth\'s inner moral conflict and to unsettle the audience. The witches\' opening chant — "Fair is foul, and foul is fair" — establishes a world of moral inversion where good and evil are indistinguishable. The chiasmus mirrors their equivocal nature: they speak in riddles, making truth and deception interchangeable. For a Jacobean audience who believed in the reality of witchcraft — King James I had published Daemonologie in 1597 — the witches were not merely symbolic but a genuine representation of demonic evil. Shakespeare uses them to suggest that engaging with the supernatural corrupts moral clarity, leaving Macbeth unable to distinguish right from wrong.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The three themes in this lesson are the most commonly examined. Students should have detailed notes on each by the end.',
      'Blood imagery is a particularly accessible entry point for students who struggle with word-level analysis — the imagery is vivid and recurs throughout the play.',
      'The witches\' responsibility debate is deliberately irresolvable. Use it to model the kind of balanced, nuanced argument that examiners reward.',
      'Encourage students to keep a "theme tracker" in their folders that they add to after every Macbeth lesson.',
    ],
    targetedSkills: [
      'Thematic Analysis',
      'Language Analysis',
      'AO1 Textual Reference',
      'AO2 Writer\'s Methods',
      'AO3 Context',
    ],
  },

  // ── Lesson 14: Shakespeare's Language and Stagecraft ────────────────────────
  {
    id: 'y11-igcse-14-language-and-stagecraft',
    title: 'Shakespeare\'s Language and Stagecraft',
    text: 'Macbeth',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Analyse Shakespeare\'s use of verse, prose, soliloquy, and aside as dramatic tools',
      'Examine key language techniques: imagery, symbolism, repetition, and irony',
      'Understand how stagecraft — entrances, exits, asides, supernatural effects — creates meaning',
      'Write analytically about Shakespeare\'s methods using subject-specific terminology',
    ],
    successCriteria: [
      'I can explain the significance of shifts between verse and prose in the play',
      'I can analyse Shakespeare\'s use of imagery and symbolism with word-level precision',
      'I can identify and explain at least three stagecraft techniques and their effects',
      'I can write a methods-focused paragraph that analyses HOW Shakespeare creates meaning',
    ],
    keywords: [
      'iambic pentameter',
      'blank verse',
      'prose',
      'soliloquy',
      'aside',
      'dramatic irony',
      'symbolism',
      'imagery',
      'stagecraft',
      'pathetic fallacy',
    ],
    starterActivity: {
      title: 'Verse or Prose?',
      duration: '7 minutes',
      instructions:
        'Display two short extracts side by side — one in blank verse (Macbeth\'s soliloquy) and one in prose (the Porter\'s speech). Students identify which is verse and which is prose, then discuss: why does Shakespeare switch? Teacher establishes the convention: verse = high status, formality, heightened emotion; prose = low status, madness, or comic relief. Crucially, Lady Macbeth\'s switch from verse to prose in the sleepwalking scene signals her breakdown. This is a method that students can analyse in their essays.',
      differentiation: {
        support: 'Provide a simple explanation of the difference between verse and prose with visual cues.',
        core: 'Students identify and explain the significance independently.',
        stretch:
          'Students find another moment in the play where the verse/prose shift is significant and explain its effect.',
      },
      resources: ['Verse and prose comparison slide'],
    },
    mainActivities: [
      {
        title: 'Language and Stagecraft Analysis Stations',
        duration: '22 minutes',
        instructions:
          'Set up four stations, each focusing on a different method: (1) Soliloquy — "Is this a dagger which I see before me?" — how soliloquy reveals inner conflict; (2) Imagery — darkness and blood imagery across the play — how imagery creates atmosphere and meaning; (3) Dramatic irony — "He\'s here in double trust" — how the audience\'s knowledge creates tension; (4) Stagecraft — the ghost of Banquo, the cauldron scene — how spectacle reinforces themes. At each station, students read the extract, identify the technique, and write an analytical sentence explaining its effect. Students spend 5 minutes per station and should complete all four.',
        differentiation: {
          support:
            'Provide analytical sentence frames at each station and a glossary of key terms.',
          core: 'Students analyse independently and write full analytical sentences.',
          stretch:
            'Students compare the technique at their station to a similar technique used in An Inspector Calls, noting similarities and differences in effect.',
        },
        resources: [
          'Four station cards with extracts and technique explanations',
          'Analysis recording sheet',
          'Sentence frames and glossary (support tier)',
        ],
      },
      {
        title: 'Methods-Focused Analytical Writing',
        duration: '18 minutes',
        instructions:
          'Teacher models a methods-focused paragraph: one that starts with the TECHNIQUE rather than the theme. For example: "Shakespeare uses the soliloquy form to reveal Macbeth\'s psychological disintegration..." rather than "The theme of guilt is shown when..." Students then write their own methods-focused paragraph on one of the four techniques studied. They must include: the technique named precisely, an embedded quotation, word-level analysis of at least two words, and a comment on the effect on the audience. After writing, students underline every instance where they name a specific technique — the more underlining, the more methods-focused the paragraph.',
        differentiation: {
          support:
            'Provide a methods paragraph frame with the technique already identified and sentence starters for analysis.',
          core: 'Students write independently and self-check by underlining technique references.',
          stretch:
            'Students write two paragraphs using different techniques and link them to show how Shakespeare layers methods for cumulative effect.',
        },
        resources: [
          'Model paragraph slide',
          'Methods paragraph frame (support tier)',
          'Self-check guidance',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Method of the Day',
      duration: '5 minutes',
      instructions:
        'Each student writes on a card: "The most powerful method Shakespeare uses in Macbeth is ___ because ___." Students share in pairs, then teacher selects three to read aloud. Brief discussion: is there a single "most powerful" method, or does the power come from the combination? Teacher reinforces that top-band responses discuss methods in combination, not isolation.',
      differentiation: {
        support: 'Provide a list of the four methods studied as a prompt.',
        core: 'Students choose and justify independently.',
        stretch:
          'Students explain how their chosen method works differently in different scenes and why.',
      },
    },
    homework:
      'Choose one soliloquy from Macbeth and write a 200-word analysis focusing entirely on HOW Shakespeare creates meaning (methods), not WHAT the speech is about (content). Annotate the soliloquy before writing.',
    worksheetQuestions: [
      {
        question:
          'What is a soliloquy? Why does Shakespeare use soliloquies in Macbeth?',
        lines: 4,
        modelAnswer:
          'A soliloquy is a speech in which a character speaks their thoughts aloud while alone on stage. Shakespeare uses soliloquies to reveal Macbeth\'s inner conflict — the audience hears his doubts, fears, and guilt directly. This creates dramatic irony (the audience knows more than other characters) and generates sympathy by showing Macbeth\'s psychological suffering.',
        marks: 3,
      },
      {
        question:
          'Why is the shift from verse to prose significant in Lady Macbeth\'s sleepwalking scene?',
        lines: 4,
        modelAnswer:
          'Throughout the play, Lady Macbeth speaks in controlled blank verse, reflecting her authority and composure. In the sleepwalking scene, she switches to fragmented prose — "Out, damned spot! Out, I say!" The breakdown of verse into prose mirrors the breakdown of her mind. Shakespeare uses this formal shift as a dramatic signal that she has lost the control that defined her character.',
        marks: 4,
      },
      {
        question:
          'Analyse the effect of darkness imagery in Macbeth. Give two examples.',
        lines: 5,
        modelAnswer:
          'Darkness pervades the play. Macbeth calls on "stars, hide your fires; let not light see my black and deep desires" — darkness represents concealment and moral corruption. Later, Ross reports that "darkness does the face of earth entomb" after Duncan\'s murder, using the verb "entomb" to associate darkness with death and burial. Shakespeare uses darkness as a sustained motif: it symbolises evil, moral blindness, and the disruption of the natural order.',
        marks: 4,
      },
      {
        question:
          'How does Shakespeare use the appearance of Banquo\'s ghost as a piece of stagecraft? What effect does it have?',
        lines: 5,
        modelAnswer:
          'Banquo\'s ghost appears at the feast — a public event — forcing Macbeth\'s private guilt into the public sphere. The ghost is visible to Macbeth but not to other characters, which creates dramatic irony and makes Macbeth appear unstable to his guests. As a piece of stagecraft, the ghost is a visual manifestation of guilt that cannot be escaped. Shakespeare uses the spectacle to show that Macbeth\'s crimes are literally haunting him and that his grip on power is built on a foundation of terror.',
        marks: 5,
      },
      {
        question:
          'Write a methods-focused paragraph beginning with a technique rather than a theme. Analyse Shakespeare\'s use of one specific method in Macbeth.',
        lines: 8,
        modelAnswer:
          'Shakespeare employs dramatic irony to intensify the audience\'s sense of impending catastrophe. When Duncan arrives at Macbeth\'s castle and describes it as having a "pleasant seat" where "the air nimbly and sweetly recommends itself," the audience — who knows Macbeth is planning murder — experiences a sharp tension between Duncan\'s unsuspecting warmth and the violence that awaits. The adjectives "nimbly" and "sweetly" are cruelly ironic, associating the castle with life and gentleness at the very moment it is about to become a place of death. Shakespeare uses this disjunction to create a sense of helpless foreboding: the audience watches a good man walk willingly into a trap, deepening their horror at Macbeth\'s betrayal.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson directly addresses AO2 (writer\'s methods), which is often the weakest area in student responses. Students need to write about HOW rather than WHAT.',
      'The verse/prose distinction is a quick win — it is easy to spot, easy to analyse, and examiners reward it.',
      'Model the difference between a theme-led paragraph ("Guilt is shown when...") and a methods-led paragraph ("Shakespeare uses the soliloquy form to..."). The latter scores higher at AO2.',
      'The station activity cards become revision resources — laminate them or add them to a digital revision folder.',
    ],
    targetedSkills: [
      'Language Analysis',
      'Dramatic Technique',
      'AO2 Writer\'s Methods',
      'Word-Level Analysis',
      'Exam Writing',
    ],
  },

  // ── Lesson 15: Final Exam Practice - Timed Response ────────────────────────
  {
    id: 'y11-igcse-15-final-exam-practice',
    title: 'Final Exam Practice - Timed Response',
    text: 'Macbeth',
    board: 'Cambridge IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Complete a full Literature essay on Macbeth under timed exam conditions',
      'Apply close reading, analytical writing, contextual integration, and methods analysis',
      'Manage time effectively across planning, writing, and checking',
      'Self-assess and set specific, actionable targets for continued improvement',
    ],
    successCriteria: [
      'I can plan and write a complete essay response within the time limit',
      'I can integrate close analysis, wider textual references, context, and discussion of Shakespeare\'s methods',
      'I can sustain analytical quality throughout the response, including the conclusion',
      'I can accurately identify my band level and set two specific targets for improvement',
    ],
    keywords: [
      'timed essay',
      'exam conditions',
      'extract response',
      'sustained analysis',
      'self-assessment',
      'band descriptors',
      'AO1', 'AO2', 'AO3',
      'improvement targets',
    ],
    starterActivity: {
      title: 'Exam Ready Check',
      duration: '5 minutes',
      instructions:
        'Students complete a quick self-audit: Do I know my top 10 quotations? Can I explain three contextual points? Can I name five methods and their effects? Do I have a go-to essay structure? Students rate themselves 1-5 on each area. Any area below 3 gets circled — these are the areas to focus on in today\'s response. Teacher reminds students of the time allocation and the key expectation: sustained quality throughout, including the conclusion. Set up exam conditions.',
      differentiation: {
        support: 'Provide a revision prompt card with top quotations, context points, and methods listed as a reference during planning only (removed before writing).',
        core: 'Students self-audit from memory.',
        stretch:
          'Students identify the specific question types they find hardest and mentally rehearse their approach before the timer starts.',
      },
      resources: ['Self-audit checklist', 'Revision prompt card (support tier)'],
    },
    mainActivities: [
      {
        title: 'Timed Essay — Full Response',
        duration: '42 minutes',
        instructions:
          'Students complete a full essay response under exam conditions. Provide an extract from Macbeth and a question (e.g. "How does Shakespeare present the theme of guilt in this extract and in the play as a whole?" or "How does Shakespeare present Macbeth as a changing character?"). Time allocation: 5 minutes annotating the extract and planning, 32 minutes writing, 5 minutes proofreading and editing. The room must be silent during writing. Teacher circulates silently, noting patterns for the feedback discussion. At the 37-minute mark, announce "5 minutes remaining — begin proofreading." At the end, students draw a line under their work and write down how many paragraphs they completed and whether they reached a conclusion.',
        differentiation: {
          support:
            'Provide a planning template and allow the revision prompt card during the planning phase (5 minutes only). Allow 5 additional minutes if needed.',
          core: 'Students work in full timed conditions with no additional scaffolding.',
          stretch:
            'Students aim to integrate all three AOs in every paragraph and write a conclusion that synthesises the argument rather than simply repeating it.',
        },
        resources: [
          'Extract and question sheet',
          'Lined paper',
          'Planning template (support tier)',
          'Revision prompt card (support tier, planning phase only)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment, Reflection, and Targets',
      duration: '10 minutes',
      instructions:
        'Distribute the mark scheme band descriptors. Students read their own work carefully and complete a self-assessment form: (1) Which band best describes my response for AO1, AO2, and AO3 separately? (2) My strongest moment — quote a sentence from my essay and explain why it works. (3) My weakest moment — identify a specific section that falls below my best standard and explain why. (4) Two targets for the real exam — expressed as concrete actions (e.g. "I will spend the first 2 minutes of proofreading checking that every quotation has analysis attached"). Students share their targets with a partner. Teacher collects all essays for detailed formative marking.',
      differentiation: {
        support:
          'Provide a simplified self-assessment form with sentence starters and a band descriptor summary sheet.',
        core: 'Students self-assess independently against the full band descriptors.',
        stretch:
          'Students rewrite their weakest paragraph on the back of the self-assessment form and annotate the improvements.',
      },
      resources: [
        'Band descriptors sheet',
        'Self-assessment form',
        'Simplified self-assessment (support tier)',
      ],
    },
    homework:
      'Using your self-assessment targets, rewrite the introduction and one body paragraph from your timed essay. Aim to improve by one band. Annotate the changes you have made and explain why each change improves the response.',
    worksheetQuestions: [
      {
        question:
          'Reflect on your time management. How long did you spend on each phase (planning, writing, proofreading)? Was this effective?',
        lines: 4,
        modelAnswer:
          'I spent 5 minutes planning, 34 minutes writing, and only 3 minutes proofreading. The planning was effective and gave me a clear structure, but I ran out of proofreading time and missed several errors that would have cost me accuracy marks. Next time I will aim to finish writing by the 35-minute mark to leave 7 minutes for checking.',
        marks: 3,
      },
      {
        question:
          'Quote your strongest sentence from the essay and explain why it is effective, using mark scheme language.',
        lines: 5,
        modelAnswer:
          'Example: "Shakespeare fractures Lady Macbeth\'s verse into the jagged prose of madness, mirroring the disintegration of her composure." This sentence is effective because it identifies a specific method (verse-to-prose shift), uses precise vocabulary ("fractures," "jagged"), and analyses the effect on meaning rather than simply describing what happens. This aligns with Band 5-6 descriptors: "perceptive analysis of writer\'s methods" and "precise, well-chosen vocabulary."',
        marks: 4,
      },
      {
        question:
          'Identify two specific weaknesses in your response. For each, explain exactly what you would do differently.',
        lines: 6,
        modelAnswer:
          'Weakness 1: My third paragraph relied on retelling what happens in the banquet scene rather than analysing how Shakespeare presents it. Next time, I will start every paragraph with a method or technique rather than a plot summary. Weakness 2: I did not include enough contextual references — only one in the entire essay. I will embed a short contextual link in every paragraph using the structure: "A Jacobean audience would have understood this as..."',
        marks: 4,
      },
      {
        question:
          'Look at the band descriptors. Which band does your response fall into? Justify your answer with specific reference to the descriptors.',
        lines: 5,
        modelAnswer:
          'I believe my response falls into Band 4 ("competent, relevant analysis"). My evidence: I included relevant quotations and some analysis of language, which matches "supported by appropriate reference to the text." However, my analysis was not always developed — I sometimes identified a technique without fully explaining its effect, which places me below Band 5\'s requirement for "perceptive, detailed analysis." My context was also limited.',
        marks: 4,
      },
      {
        question:
          'Write two specific, actionable targets for the real exam. Explain how each will move you up one band.',
        lines: 5,
        modelAnswer:
          'Target 1: Every time I quote, I will analyse at least one individual word from the quotation, explaining its connotations and effect. This will move me from Band 4 ("appropriate analysis") to Band 5 ("detailed, perceptive analysis"). Target 2: I will include a contextual reference in every other paragraph using the phrase "A Jacobean audience would..." This will strengthen my AO3 from "some relevant context" (Band 4) to "context enhances the argument" (Band 5).',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This is the culminating assessment lesson. Mark these responses in detail with specific, actionable feedback — students should be able to use the feedback to improve measurably.',
      'The self-assessment plenary is as important as the writing itself. Students who can accurately diagnose their own band level are in a strong position to improve.',
      'Consider scheduling a follow-up lesson where students read their marked essays and respond to feedback with a redraft of their weakest section.',
      'If time allows, share anonymised extracts from strong responses (with permission) so that students can see what top-band writing looks like from a peer rather than always from a model.',
      'Remind students that this is practice — the purpose is to learn, not to achieve a perfect score. A lower band with clear targets is more useful than a higher band with no understanding of why.',
    ],
    targetedSkills: [
      'Timed Essay Writing',
      'Self-Assessment',
      'Exam Technique',
      'AO1 Textual Reference',
      'AO2 Writer\'s Methods',
      'AO3 Context',
    ],
  },
];
