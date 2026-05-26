// @ts-nocheck
import type { LessonPlan } from '@/types'

// ─── Lesson 1: Planning a Spoken Language Presentation ───────────────────────

const lesson1: LessonPlan = {
  id: 'spoken-lang-01-planning-presentation',
  title: 'Planning a Spoken Language Presentation',
  text: 'Spoken Language',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the assessment criteria for the GCSE Spoken Language endorsement and what examiners are looking for.',
    'Select and refine a suitable topic for a spoken language presentation that allows for personal engagement and audience interest.',
    'Create a structured plan for a presentation that includes a clear introduction, developed argument, and purposeful conclusion.',
  ],
  successCriteria: [
    'I can explain the three strands of the Spoken Language endorsement: presenting, responding to questions, and use of Standard English.',
    'I can identify a topic that is specific enough to argue persuasively but broad enough to sustain a five-minute presentation.',
    'I can produce a detailed plan with a clear opening hook, at least three developed points, and a memorable conclusion.',
  ],
  keywords: [
    'endorsement',
    'presentation',
    'audience',
    'register',
    'Standard English',
    'discourse markers',
    'topic sentence',
    'thesis',
  ],
  starterActivity: {
    title: 'What Makes a Great Speaker?',
    duration: '8 minutes',
    instructions:
      'Show two short clips (30-60 seconds each) of contrasting speeches - one engaging and well-structured, one rambling and unclear. Students note three differences between the speakers in terms of content, structure, and delivery. Pairs share observations. Teacher draws out key qualities: clarity of purpose, logical structure, confident delivery, and audience awareness. Introduce the Spoken Language endorsement and explain that this unit will prepare them to deliver a presentation that demonstrates all of these qualities.',
    differentiation: {
      support:
        'Provide a simple observation grid with prompts: "The good speaker...", "The weaker speaker...".',
      core: 'Students identify differences independently and categorise them under content, structure, and delivery.',
      stretch:
        'Students evaluate which quality matters most and justify their answer with reference to the clips.',
    },
    resources: [
      'Two contrasting speech clips',
      'Observation grid (support tier)',
      'Spoken Language endorsement criteria sheet',
    ],
  },
  mainActivities: [
    {
      title: 'Understanding the Assessment Criteria',
      duration: '15 minutes',
      instructions:
        'Distribute the AQA Spoken Language endorsement criteria (Pass, Merit, Distinction). In pairs, students highlight key verbs and phrases at each level. As a class, create a success ladder on the board showing what distinguishes each band. Teacher emphasises: this is not an exam - it is a classroom presentation followed by questions - but it still requires preparation, Standard English, and the ability to engage listeners. Students annotate a model student response with the criteria it meets.',
      differentiation: {
        support:
          'Provide a simplified version of the criteria with key phrases underlined and a glossary of assessment language.',
        core: 'Students annotate independently and identify what separates Merit from Distinction.',
        stretch:
          'Students draft their own "top tips" checklist based on the Distinction criteria, written as actionable advice.',
      },
      resources: [
        'AQA Spoken Language criteria sheet',
        'Model student presentation transcript',
        'Highlighters',
      ],
    },
    {
      title: 'Choosing and Refining a Topic',
      duration: '15 minutes',
      instructions:
        'Teacher models the process of choosing a topic: start broad (e.g., "the environment"), then narrow to a specific, arguable claim (e.g., "Every school in the UK should have a compulsory climate action day each term"). Display a bank of ten potential topic areas. Students brainstorm three possible topics, then use a checklist to evaluate each: (1) Do I care about this? (2) Can I argue a clear position? (3) Will it interest my audience? (4) Can I find evidence? Students select their strongest topic and write a one-sentence thesis statement. Share three or four examples under the visualiser for class feedback.',
      differentiation: {
        support: 'Provide a list of pre-approved topics with thesis statement sentence starters.',
        core: 'Students generate and evaluate their own topics using the checklist independently.',
        stretch:
          'Students refine their thesis to include a counter-argument acknowledgement (e.g., "Although some argue X, I believe Y because...").',
      },
      resources: ['Topic bank handout', 'Topic evaluation checklist', 'Thesis statement examples'],
    },
    {
      title: 'Building a Presentation Plan',
      duration: '15 minutes',
      instructions:
        'Teacher models a five-part planning framework on the board: (1) Hook - an attention-grabbing opening, (2) Thesis - your central argument stated clearly, (3) Body - three supporting points with evidence, (4) Counter-argument - acknowledge and refute an opposing view, (5) Conclusion - a call to action or memorable final statement. Students complete a planning template for their chosen topic, filling in bullet points for each section. Teacher circulates and conferences with students individually. In the last three minutes, students pair up and explain their plan to a partner, who offers one piece of constructive feedback.',
      differentiation: {
        support:
          'Provide a scaffolded planning template with sentence starters for each section and a completed model.',
        core: 'Students complete the template independently, adding at least one piece of evidence per body point.',
        stretch:
          'Students plan two possible hooks and evaluate which is more effective, justifying their choice in writing.',
      },
      resources: [
        'Five-part planning framework slide',
        'Planning template worksheet',
        'Model completed plan (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Elevator Pitch',
    duration: '7 minutes',
    instructions:
      'Students stand and deliver a 30-second "elevator pitch" of their presentation topic to a partner: what is your argument, and why should your audience care? Partners award a score out of five for clarity and interest. Two or three volunteers share with the class. Teacher provides feedback and previews next lesson on structuring arguments.',
    differentiation: {
      support:
        'Provide a sentence frame: "I am going to argue that... because... My audience should care because...".',
      core: 'Students deliver their pitch from memory with a clear thesis and one supporting reason.',
      stretch:
        'Students deliver their pitch using a rhetorical question as their opening and a call to action as their close.',
    },
  },
  homework:
    'Research three pieces of evidence (facts, statistics, expert opinions, or real-world examples) that support your chosen presentation topic. Record them with their sources.',
  worksheetQuestions: [
    {
      question: 'What are the three strands assessed in the GCSE Spoken Language endorsement?',
      lines: 3,
      modelAnswer:
        'The three strands are: (1) Presenting - delivering a prepared presentation clearly, using Standard English and engaging the audience; (2) Responding to questions and feedback - answering spontaneous questions thoughtfully and developing points further; (3) Use of Standard English - demonstrating the ability to use formal, grammatically accurate English appropriate to the context.',
      marks: 3,
    },
    {
      question:
        'Explain why choosing the right topic is important for a successful presentation. What qualities should a good topic have?',
      lines: 5,
      modelAnswer:
        'Choosing the right topic is essential because it determines whether the speaker can sustain a clear argument and engage their audience. A good topic should be something the speaker genuinely cares about, as passion and personal engagement come through in delivery. It should be specific enough to argue a clear position rather than just describing a broad issue. It should interest the intended audience, and it should be a topic for which evidence and examples can be found to support the argument convincingly.',
      marks: 4,
    },
    {
      question:
        'A student has chosen the topic "Social media." Explain why this needs refining and suggest an improved thesis statement.',
      lines: 5,
      modelAnswer:
        '"Social media" is too broad and descriptive - it does not contain an argument or a clear position. The student needs to narrow the topic to a specific, debatable claim. An improved thesis statement might be: "Social media companies should be legally required to verify the age of all users, because the mental health damage to young people is too serious to leave to voluntary self-regulation." This is specific, arguable, and gives the speaker a clear direction for their evidence and reasoning.',
      marks: 4,
    },
    {
      question:
        'Outline the five sections of an effective presentation plan and explain the purpose of each.',
      lines: 8,
      modelAnswer:
        "(1) Hook - an attention-grabbing opening such as a shocking statistic, rhetorical question, or anecdote, designed to immediately engage the audience. (2) Thesis - a clear, one-sentence statement of the speaker's central argument, so the audience knows exactly what position is being taken. (3) Body - three developed supporting points, each backed by evidence, which build the case logically. (4) Counter-argument - an acknowledgement and refutation of an opposing viewpoint, which strengthens credibility and shows balanced thinking. (5) Conclusion - a memorable closing that reinforces the thesis, often using a call to action or a return to the opening hook for a circular structure.",
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson launches the Spoken Language unit. Students do not need to finalise their topic today - they should feel free to change it after further research.',
    'The contrasting speech clips work best if one is from a professional context (e.g., a TED talk) and the other is a deliberately informal or poorly structured example.',
    'Ensure all students leave with a working thesis statement, even if provisional. This forms the basis of the next lesson.',
    'Students who struggle to choose a topic may benefit from a one-to-one conference during the planning activity.',
    'Remind students that the endorsement is reported on their certificate as Pass, Merit, or Distinction - it is separate from the English Language grade but still matters.',
  ],
  targetedSkills: [
    'Spoken Language endorsement criteria',
    'Topic selection and refinement',
    'Planning and structuring',
    'Thesis statement writing',
    'Self-evaluation',
  ],
}

// ─── Lesson 2: Structuring an Argument for Speech ────────────────────────────

const lesson2: LessonPlan = {
  id: 'spoken-lang-02-structuring-argument',
  title: 'Structuring an Argument for Speech',
  text: 'Spoken Language',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand how to organise ideas into a logical, persuasive sequence for spoken delivery.',
    'Apply discourse markers and connectives to create cohesion and signal transitions between points.',
    'Construct a compelling opening and closing that frame the argument effectively.',
  ],
  successCriteria: [
    'I can arrange my presentation points in a logical order that builds towards a strong conclusion.',
    'I can use at least five discourse markers accurately to signal progression, contrast, and emphasis in my speech.',
    'I can write an opening that hooks the audience and a closing that reinforces my thesis memorably.',
  ],
  keywords: [
    'discourse markers',
    'cohesion',
    'signposting',
    'transition',
    'circular structure',
    'anaphora',
    'topic sentence',
    'rhetorical arc',
  ],
  starterActivity: {
    title: 'Jumbled Speech Reconstruction',
    duration: '8 minutes',
    instructions:
      'Give students a set of eight cards, each containing one paragraph from a model speech. The paragraphs are jumbled. In pairs, students arrange them into the most logical and persuasive order. Compare arrangements across pairs. Reveal the original order and discuss: what clues helped you sequence the speech? Draw out the importance of discourse markers, logical progression, and the position of the introduction and conclusion.',
    differentiation: {
      support:
        'Provide six cards instead of eight, with the introduction and conclusion pre-identified.',
      core: 'Students arrange all eight cards and identify the discourse markers that signal the correct order.',
      stretch:
        'Students identify where the original speech could be improved structurally and suggest a reordering with justification.',
    },
    resources: ['Jumbled speech card set (one per pair)', 'Original speech on slide for reveal'],
  },
  mainActivities: [
    {
      title: 'Discourse Markers Masterclass',
      duration: '15 minutes',
      instructions:
        'Teacher presents five categories of discourse markers on the board: (1) Addition - furthermore, moreover, in addition; (2) Contrast - however, on the other hand, nevertheless; (3) Cause and effect - consequently, as a result, therefore; (4) Emphasis - crucially, above all, most importantly; (5) Sequence - firstly, subsequently, finally. Students categorise a bank of twenty discourse markers, then select eight they could use in their own presentation and write them into their plan at appropriate transition points. Teacher models how the same point sounds dramatically different with and without discourse markers.',
      differentiation: {
        support:
          'Provide a pre-sorted reference sheet and ask students to select and place four markers into their plan.',
        core: 'Students categorise all twenty markers independently and integrate eight into their plan.',
        stretch:
          'Students identify which category of marker is most important for their specific argument type and explain why.',
      },
      resources: [
        'Discourse markers categorisation worksheet',
        'Reference sheet (support tier)',
        "Students' presentation plans from Lesson 1",
      ],
    },
    {
      title: 'Crafting Openings and Closings',
      duration: '20 minutes',
      instructions:
        'Teacher models four types of opening hook: (1) Shocking statistic - "Every seven minutes, a young person in the UK is hospitalised for a mental health crisis"; (2) Rhetorical question - "When was the last time you went a full day without looking at a screen?"; (3) Anecdote - a brief personal story that connects to the topic; (4) Bold statement - "The education system is failing an entire generation." Students draft two different openings for their own presentation, then share with a partner who selects the stronger one and explains why. Next, teacher models three types of closing: (1) Call to action; (2) Circular return to the opening; (3) Powerful final image or quotation. Students draft their closing and connect it to their chosen opening.',
      differentiation: {
        support:
          'Provide sentence starters for each type of opening and closing, with a model for each.',
        core: 'Students draft two openings and one closing independently, selecting the most effective combination.',
        stretch:
          'Students write a circular structure where the closing directly echoes or reframes the opening, and explain the effect on the audience.',
      },
      resources: ['Opening hooks examples handout', 'Closing techniques handout', 'Drafting paper'],
    },
    {
      title: 'Structuring the Body of the Speech',
      duration: '10 minutes',
      instructions:
        'Teacher explains three structural models: (1) Chronological - past, present, future; (2) Problem-Solution - describe the issue, then propose the fix; (3) Ascending importance - weakest point first, strongest last. Students identify which model best suits their topic and rearrange their body points accordingly. In pairs, students explain their structural choice and receive feedback on whether the sequence is logical and persuasive.',
      differentiation: {
        support:
          'Teacher assigns the most appropriate structural model to each student based on their topic.',
        core: 'Students evaluate all three models against their topic and justify their choice in writing.',
        stretch:
          'Students consider how combining two structural models could strengthen their argument and redraft their plan accordingly.',
      },
      resources: ['Structural models handout', "Students' updated presentation plans"],
    },
  ],
  plenaryActivity: {
    title: 'Before and After',
    duration: '7 minutes',
    instructions:
      'Select two volunteers. Each reads aloud their original opening from Lesson 1 and their new, improved opening from today. Class discusses what has improved and which techniques were used. Teacher summarises the key structural principles covered and sets expectations for next lesson on rhetorical techniques.',
    differentiation: {
      support:
        'Students annotate their own opening with the technique used, using a colour-coded key.',
      core: "Students identify the specific technique in each volunteer's opening and explain its effect.",
      stretch:
        'Students evaluate whether the opening would be equally effective in written form or whether it relies on spoken delivery.',
    },
  },
  homework:
    'Write the complete opening and closing of your presentation in full sentences. Practise reading them aloud and time yourself - the opening should be no longer than 45 seconds.',
  worksheetQuestions: [
    {
      question:
        'Explain the difference between the following discourse markers and give an example of when you would use each: "however", "furthermore", "consequently".',
      lines: 6,
      modelAnswer:
        '"However" is a contrast marker, used to introduce an opposing point or qualification. For example: "Many people believe homework improves grades. However, recent studies suggest it has little impact on primary-age children." "Furthermore" is an addition marker, used to build on a previous point. For example: "School uniforms reduce bullying based on clothing. Furthermore, they save families money on daily outfits." "Consequently" is a cause-and-effect marker, used to show a result. For example: "Students spend an average of seven hours a day on screens. Consequently, rates of short-sightedness have doubled in the last decade."',
      marks: 6,
    },
    {
      question:
        'A student opens their presentation by saying: "Today I am going to talk about climate change." Explain why this is a weak opening and rewrite it using two different techniques.',
      lines: 6,
      modelAnswer:
        'This opening is weak because it simply announces the topic without engaging the audience. It does not create curiosity, emotion, or urgency. A stronger opening using a shocking statistic might be: "In the time it takes me to deliver this presentation, approximately 500 acres of rainforest will have been destroyed." A stronger opening using a rhetorical question might be: "If I told you that every decision you make today - what you eat, how you travel, what you buy - is actively shaping whether your children will inherit a liveable planet, would you change anything?" Both versions immediately engage the audience and create a sense of stakes.',
      marks: 4,
    },
    {
      question:
        'Describe the three structural models for organising the body of a speech. For each, suggest a topic that would suit that model.',
      lines: 8,
      modelAnswer:
        'The chronological model organises points by time: past, present, and future. This suits topics with a historical dimension, such as "How attitudes to mental health have changed over the last fifty years." The problem-solution model describes an issue first, then proposes a fix. This suits campaigning topics, such as "Plastic pollution in our oceans and what governments should do about it." The ascending importance model places the weakest argument first and builds to the strongest, creating a climactic effect. This suits persuasive topics where one argument is significantly more powerful, such as "Why the voting age should be lowered to sixteen," where the strongest point - that sixteen-year-olds pay tax and can join the army - is saved for maximum impact.',
      marks: 6,
    },
    {
      question:
        'Why is a circular structure considered an effective technique for speeches? Give an example of how a speaker might use one.',
      lines: 5,
      modelAnswer:
        'A circular structure is effective because it creates a sense of completeness and reinforces the speaker\'s central message by returning to it at the end. It also rewards the audience for paying attention, as they recognise the echo of the opening. For example, a speaker might open with the rhetorical question "What would you do if you had just one day left?" and then close with "So I ask you again - what would you do if you had just one day left? Because for thousands of people affected by this crisis, that question is not hypothetical." The repetition with added context transforms the meaning of the original question and creates a powerful emotional impact.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Students should bring their plans from Lesson 1 - this lesson builds directly on that work.',
    'The jumbled speech activity works best with a speech on a topic students are familiar with. A persuasive speech about school-related issues is ideal.',
    'Discourse markers should be taught as tools for spoken cohesion, not just written. Emphasise how they help a live audience follow the argument.',
    'The structural models are not mutually exclusive - stronger students may combine them effectively.',
    'Monitor students who are still unsure of their topic. By the end of this lesson, all students should have a finalised topic and working plan.',
  ],
  targetedSkills: [
    'Structuring arguments',
    'Discourse markers and cohesion',
    'Opening and closing techniques',
    'Spoken language planning',
    'Peer feedback',
  ],
}

// ─── Lesson 3: Rhetorical Techniques for Speaking ────────────────────────────

const lesson3: LessonPlan = {
  id: 'spoken-lang-03-rhetorical-techniques',
  title: 'Rhetorical Techniques for Speaking',
  text: 'Spoken Language',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Identify and analyse key rhetorical techniques used in effective speeches, including the rule of three, anaphora, and antithesis.',
    'Understand how rhetorical techniques create persuasive effects on a listening audience as opposed to a reading audience.',
    'Integrate at least three rhetorical techniques into a draft presentation to enhance its persuasive impact.',
  ],
  successCriteria: [
    'I can define and identify at least six rhetorical techniques in model speeches.',
    'I can explain how specific techniques affect a listening audience differently from a reading audience.',
    'I can embed at least three different rhetorical techniques into my own presentation draft with purposeful effect.',
  ],
  keywords: [
    'rhetoric',
    'anaphora',
    'tricolon',
    'antithesis',
    'hyperbole',
    'emotive language',
    'direct address',
    'imperative',
  ],
  starterActivity: {
    title: 'Spot the Technique',
    duration: '8 minutes',
    instructions:
      'Display five famous quotations from speeches (e.g., "I have a dream" - Martin Luther King Jr; "We shall fight on the beaches" - Churchill; "Ask not what your country can do for you" - Kennedy). Students work in pairs to identify what makes each quotation memorable. Teacher reveals the technique in each: anaphora, tricolon, antithesis, direct address, imperative. Key question: why are these techniques especially powerful when spoken aloud rather than read silently?',
    differentiation: {
      support:
        'Provide the technique names alongside the quotations and ask students to match them.',
      core: 'Students identify the techniques independently before the reveal.',
      stretch:
        'Students explain why each technique is more effective in spoken form, considering rhythm, emphasis, and audience response.',
    },
    resources: ['Famous speech quotations slide', 'Technique matching cards (support tier)'],
  },
  mainActivities: [
    {
      title: 'Rhetorical Techniques Toolkit',
      duration: '18 minutes',
      instructions:
        'Teacher introduces eight rhetorical techniques with definitions, examples from real speeches, and an explanation of their effect on a listening audience: (1) Tricolon / Rule of Three - rhythmic grouping of three for emphasis; (2) Anaphora - deliberate repetition of a word or phrase at the start of successive clauses for cumulative power; (3) Antithesis - placing contrasting ideas side by side to clarify a position; (4) Rhetorical question - engaging the audience by prompting them to think; (5) Direct address - using "you" and "we" to involve the audience; (6) Emotive language - choosing words that trigger emotional responses; (7) Hyperbole - deliberate exaggeration for emphasis; (8) Imperative verbs - commands that urge the audience to act. Students create a toolkit reference card with each technique, its definition, an example, and space to draft their own example linked to their presentation topic.',
      differentiation: {
        support:
          'Provide a partially completed toolkit card with definitions and examples filled in; students add their own examples only.',
        core: 'Students complete the full toolkit card independently, generating original examples for each technique.',
        stretch:
          'Students rank the eight techniques in order of effectiveness for their specific topic and justify their top three choices.',
      },
      resources: [
        'Rhetorical techniques PowerPoint',
        'Toolkit reference card template',
        'Partially completed card (support tier)',
      ],
    },
    {
      title: 'Techniques in Action - Speech Analysis',
      duration: '12 minutes',
      instructions:
        'Distribute a transcript of a short model speech (approximately 300 words) on a school-relevant topic. Students annotate the transcript, identifying every rhetorical technique used. In pairs, they discuss: which technique is most effective and why? Which technique could be removed without weakening the speech? Teacher leads feedback, emphasising that overloading a speech with techniques can feel forced - the most effective speakers use techniques purposefully, not constantly.',
      differentiation: {
        support:
          'Provide the transcript with four techniques pre-highlighted; students identify two more independently.',
        core: 'Students identify all techniques independently and evaluate the most and least effective.',
        stretch:
          'Students rewrite one paragraph of the model speech, replacing the techniques used with alternative ones and comparing the effect.',
      },
      resources: ['Model speech transcript', 'Annotation guide', 'Highlighters'],
    },
    {
      title: 'Drafting with Rhetoric',
      duration: '15 minutes',
      instructions:
        'Students return to their presentation plans and begin drafting at least one full section (introduction, one body paragraph, or conclusion) incorporating a minimum of three rhetorical techniques. Teacher circulates, conferencing with students and challenging them to explain why they have chosen each technique for that specific moment in their speech. Students highlight or annotate the techniques they have used. In the final three minutes, students swap drafts with a partner who identifies the techniques and comments on their effectiveness.',
      differentiation: {
        support:
          'Provide sentence starters that embed techniques (e.g., "Imagine a world where... Imagine a future where... Imagine a society where..." for anaphora).',
        core: 'Students draft independently, using at least three different techniques with purposeful placement.',
        stretch:
          'Students draft two versions of the same section - one technique-heavy and one subtle - and evaluate which is more effective for a spoken context.',
      },
      resources: [
        "Students' presentation plans",
        'Rhetorical toolkit reference cards',
        'Drafting paper or laptops',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Rhetoric Relay',
    duration: '7 minutes',
    instructions:
      'Quick-fire class activity: teacher calls out a rhetorical technique, and a random student must give an original example using it, linked to any topic. If successful, they nominate the next student and the teacher calls a new technique. Continue for five rounds. Close by asking: which technique do you find easiest to use? Which will you practise further? Preview next lesson on using evidence and examples.',
    differentiation: {
      support: 'Students can refer to their toolkit cards during the relay.',
      core: 'Students respond from memory with original examples.',
      stretch: 'Students must give their example and explain its intended effect on the audience.',
    },
  },
  homework:
    'Write a full draft of your presentation introduction (approximately 100-150 words) that uses at least three rhetorical techniques. Underline and label each technique you have used.',
  worksheetQuestions: [
    {
      question:
        'Define the following rhetorical techniques and give an original example of each: tricolon, anaphora, antithesis.',
      lines: 8,
      modelAnswer:
        'A tricolon (rule of three) is a group of three words, phrases, or clauses used together for rhythmic emphasis and completeness. Example: "We need courage, commitment, and compassion to solve this crisis." Anaphora is the deliberate repetition of a word or phrase at the beginning of successive clauses to create a cumulative, building effect. Example: "We deserve better schools. We deserve better funding. We deserve better futures." Antithesis is the placement of two contrasting ideas in a balanced structure to highlight a key difference or make an argument sharper. Example: "It is not the quantity of education that matters, but the quality."',
      marks: 6,
    },
    {
      question:
        'Explain why rhetorical techniques are often more effective in spoken language than in written text. Use specific examples in your answer.',
      lines: 6,
      modelAnswer:
        'Rhetorical techniques are often more effective in spoken language because a speaker can use vocal emphasis, pacing, and pauses to amplify their impact. For example, anaphora such as "I have a dream" gains its power from the rhythmic repetition that a speaker can stress with increasing volume and emotion - on the page, the repetition might feel redundant. Similarly, a rhetorical question spoken aloud creates a genuine pause where the audience mentally responds, whereas in writing, the reader may simply skip past it. The tricolon "blood, toil, tears, and sweat" works because a speaker can build the rhythm vocally, creating a crescendo effect. In spoken delivery, the audience cannot re-read a sentence, so techniques like repetition and rhythm help key ideas lodge in memory.',
      marks: 4,
    },
    {
      question:
        'Read the following extract from a student\'s speech: "Phones are bad for us. They make us unhappy. We use them too much. Someone should do something." Rewrite this extract using at least three rhetorical techniques to make it more persuasive.',
      lines: 8,
      modelAnswer:
        'A strong rewrite might be: "Every morning, you wake up and reach for your phone. Every break time, you scroll instead of speaking. Every evening, you fall asleep to the glow of a screen that does not care about you. [Anaphora and direct address.] We are not using technology - technology is using us. [Antithesis.] It is time to reclaim our attention, our conversations, and our wellbeing. [Tricolon and imperative tone.] So I ask you: when was the last time you spent an entire hour truly present with the people you love? [Rhetorical question.]" This version uses anaphora to build repetitive force, antithesis to reframe the argument, a tricolon to create rhythm, and a rhetorical question to provoke reflection.',
      marks: 5,
    },
    {
      question:
        'A student has used eight different rhetorical techniques in a single paragraph of their speech. Explain why this might be a problem and suggest how they could improve.',
      lines: 5,
      modelAnswer:
        'Using too many rhetorical techniques in a single paragraph can overwhelm the audience and make the speech feel artificial, manipulative, or rehearsed rather than genuine. The techniques compete for attention rather than reinforcing each other, and the audience may become aware of being persuaded, which can undermine trust. The student should select the two or three most effective techniques for that particular moment in the speech and remove the rest. Each technique should have a clear purpose - for example, a rhetorical question to open the paragraph and a tricolon to drive home the concluding point. Quality and purposefulness matter more than quantity.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The famous speech quotations should be displayed with attribution so students can look up the full speeches if interested.',
    'Emphasise throughout that rhetoric is not about tricks or manipulation - it is about communicating ideas clearly and memorably.',
    'The model speech for analysis should be on a topic students can relate to, such as school funding, social media, or the environment.',
    'Some students may conflate rhetorical techniques for writing and speaking. Stress the oral dimension: rhythm, pause, emphasis.',
    'Collect the homework drafts - these will be developed further in subsequent lessons.',
  ],
  targetedSkills: [
    'Rhetorical technique identification',
    'Rhetorical technique application',
    'Speech analysis',
    'Persuasive writing for speech',
    'Peer evaluation',
  ],
}

// ─── Lesson 4: Using Evidence and Examples ───────────────────────────────────

const lesson4: LessonPlan = {
  id: 'spoken-lang-04-evidence-examples',
  title: 'Using Evidence and Examples in Spoken Presentations',
  text: 'Spoken Language',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the different types of evidence available to support a spoken argument, including statistics, expert testimony, anecdotes, and case studies.',
    'Evaluate the reliability and persuasive impact of different evidence types and select the most appropriate for a specific audience.',
    'Integrate evidence smoothly into spoken language, avoiding clumsy or disruptive citation that breaks the flow of delivery.',
  ],
  successCriteria: [
    'I can identify and categorise at least four types of evidence and explain the strengths of each.',
    'I can evaluate evidence for reliability, relevance, and persuasive impact and justify my selections.',
    'I can embed evidence into my presentation using natural spoken phrasing rather than written-style references.',
  ],
  keywords: [
    'evidence',
    'statistics',
    'anecdote',
    'case study',
    'credibility',
    'testimony',
    'citation',
    'attribution',
  ],
  starterActivity: {
    title: 'Would You Believe It?',
    duration: '8 minutes',
    instructions:
      'Display four claims on the board, each supported by a different type of evidence: (1) a statistic, (2) a personal anecdote, (3) an expert quotation, (4) no evidence at all. Students rank the claims from most to least convincing and discuss with a partner. Teacher reveals that all four claims are about the same topic - the difference is the evidence. Key question: what makes evidence convincing? Is one type always better than another?',
    differentiation: {
      support:
        'Provide a sentence starter for the ranking explanation: "I found claim X most convincing because...".',
      core: 'Students rank independently and justify their reasoning with reference to the type of evidence.',
      stretch:
        'Students identify a scenario where each type of evidence would be the most effective choice.',
    },
    resources: ['Four claims slide', 'Ranking worksheet'],
  },
  mainActivities: [
    {
      title: 'Evidence Types Explained',
      duration: '15 minutes',
      instructions:
        "Teacher presents six types of evidence with definitions, examples, strengths, and limitations: (1) Statistics and data - powerful for establishing scale but can be manipulated; (2) Expert testimony - adds authority but depends on the expert's credibility; (3) Personal anecdote - emotionally engaging but not generalisable; (4) Case study - specific and detailed but may not represent the wider picture; (5) Historical example - provides precedent but context may differ; (6) Analogy - makes abstract ideas concrete but can be challenged if the comparison is imperfect. Students complete an evidence evaluation grid, identifying which types they could use in their own presentation and why.",
      differentiation: {
        support:
          'Provide a simplified grid with three evidence types and matched examples; students evaluate strengths and weaknesses.',
        core: 'Students complete the full grid for all six types and select the three most suitable for their topic.',
        stretch:
          'Students explain how combining two types of evidence (e.g., a statistic followed by a personal anecdote) creates a more persuasive effect than either alone.',
      },
      resources: [
        'Evidence types handout',
        'Evidence evaluation grid',
        'Simplified grid (support tier)',
      ],
    },
    {
      title: 'Embedding Evidence in Speech',
      duration: '20 minutes',
      instructions:
        'Teacher models the difference between clumsy and fluent evidence integration. Clumsy: "According to a report published by the World Health Organisation in 2024, page 47, paragraph 3, it states that..." Fluent: "The World Health Organisation recently confirmed what many of us already suspected - that..." Students practise converting three written-style citations into natural spoken phrasing using stems such as: "Research shows that...", "One expert put it simply when she said...", "Consider the case of...", "The numbers speak for themselves -...". Students then take the three pieces of evidence they researched for homework and draft how they will deliver each one in their presentation, focusing on natural spoken integration.',
      differentiation: {
        support:
          'Provide six spoken phrasing stems and a model conversion. Students complete three conversions with guidance.',
        core: 'Students convert three examples independently and draft their own evidence integration for their presentation.',
        stretch:
          'Students practise delivering their evidence aloud and evaluate whether the phrasing sounds natural or still reads like an essay.',
      },
      resources: [
        'Clumsy vs fluent examples slide',
        'Spoken phrasing stems handout',
        "Students' homework evidence notes",
      ],
    },
    {
      title: 'Evidence Strength Testing',
      duration: '10 minutes',
      instructions:
        'In groups of three, students take turns presenting one of their evidence points as if delivering it in their actual presentation. The other two students act as "evidence testers" - they score the evidence out of five for: (1) Relevance to the argument, (2) Credibility of the source, (3) Persuasive impact, (4) Natural delivery. After each round, testers provide one specific suggestion for improvement. Students record the feedback and revise their evidence integration accordingly.',
      differentiation: {
        support:
          'Provide a structured feedback card with the four criteria and sentence starters for suggestions.',
        core: 'Students assess and provide feedback independently using the four criteria.',
        stretch:
          'Testers challenge the speaker with a counter-argument that undermines their evidence, and the speaker practises responding.',
      },
      resources: ['Evidence testing score card', 'Feedback sentence starters (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Evidence Auction',
    duration: '7 minutes',
    instructions:
      'Teacher presents five pieces of evidence of varying quality on a school-related topic. Students have 100 imaginary points to "bid" on the pieces of evidence they would use in a speech. After bidding, discuss: why did the strongest evidence attract the highest bids? What made the weakest evidence undesirable? Reinforce that quality matters more than quantity.',
    differentiation: {
      support:
        'Students explain their highest bid with a sentence starter: "I bid most on this evidence because...".',
      core: 'Students justify both their highest and lowest bids with reasoning about credibility and relevance.',
      stretch:
        'Students explain how they would combine their two highest-bid pieces of evidence in a single paragraph of a speech.',
    },
  },
  homework:
    'Draft the body of your presentation (three main points) in full, integrating at least one piece of evidence per point using natural spoken phrasing. Highlight or underline each piece of evidence.',
  worksheetQuestions: [
    {
      question:
        'Name four types of evidence a speaker might use in a presentation and explain one strength and one limitation of each.',
      lines: 8,
      modelAnswer:
        "Statistics and data: strength - they provide concrete, measurable proof that is hard to dismiss; limitation - they can be manipulated, taken out of context, or feel dry without explanation. Expert testimony: strength - it adds authority and credibility, especially if the expert is well known; limitation - audiences may not know the expert, and experts can disagree with each other. Personal anecdote: strength - it creates an emotional, human connection that makes the argument feel real and relatable; limitation - it is based on one person's experience and may not represent the wider truth. Case study: strength - it provides specific, detailed evidence that brings an issue to life; limitation - a single case may not be representative and could be dismissed as an exception.",
      marks: 8,
    },
    {
      question:
        'Rewrite the following clumsy evidence integration in a way that sounds natural for spoken delivery: "According to Smith, J. (2023) \'The Impact of Social Media on Adolescent Mental Health\', Journal of Psychology, Vol. 45, pp. 112-128, there is a correlation between screen time and anxiety."',
      lines: 4,
      modelAnswer:
        'A natural spoken version might be: "Leading psychologists have found a clear link between the time young people spend on social media and rising levels of anxiety. A major study published just last year confirmed that the more hours teenagers spend scrolling, the more likely they are to report feelings of stress and low self-worth." This version maintains the authority of the evidence but removes the academic citation format that would sound awkward and disrupt the flow of a spoken presentation.',
      marks: 3,
    },
    {
      question:
        'A student\'s presentation includes the following evidence: "My friend told me that she feels stressed by homework." Evaluate this evidence and suggest how the student could strengthen it.',
      lines: 5,
      modelAnswer:
        'This evidence is weak because it is a single, unverified personal opinion that cannot be generalised to support a broader argument. The student could strengthen it in several ways: by combining it with a statistic ("A recent survey found that 78% of GCSE students report feeling overwhelmed by homework - and I have seen this in my own friendship group, where..."), by referencing a more authoritative source, or by presenting it as an illustrative anecdote that supports stronger evidence rather than as the main proof. The anecdote could also be made more specific and vivid to increase its emotional impact.',
      marks: 4,
    },
    {
      question:
        'Explain why combining different types of evidence is more persuasive than relying on a single type. Give an example.',
      lines: 5,
      modelAnswer:
        'Combining evidence types is more persuasive because it appeals to both the logical and emotional dimensions of an audience\'s response. A statistic alone can feel cold and abstract, while an anecdote alone can feel subjective and unrepresentative. Together, they create a complete picture. For example, a speaker arguing for better mental health support in schools might say: "Last year, referrals to child mental health services increased by 39% - nearly four in every ten young people seeking help. Behind every one of those numbers is a real person. Consider Maya, a Year 10 student who waited fourteen months for her first appointment." The statistic establishes the scale of the problem, while the case study makes it human and urgent.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Check that students have completed the homework research task from Lesson 1. Those who have not will need support finding evidence during the lesson.',
    'The evidence auction is an engaging way to close the lesson but keep the pace brisk - allocate no more than one minute per item.',
    'Emphasise that in a spoken presentation, evidence should be woven into the argument, not read from notes as a separate block.',
    'Students often default to "a survey showed that..." without specifying who conducted the survey. Push for specificity.',
    "This lesson connects strongly to Paper 2 (Writers' Viewpoints and Perspectives), where students must also evaluate the use of evidence.",
  ],
  targetedSkills: [
    'Evidence selection and evaluation',
    'Spoken language fluency',
    'Critical thinking',
    'Source evaluation',
    'Persuasive speaking',
  ],
}

// ─── Lesson 5: Engaging Your Audience - Voice and Body Language ──────────────

const lesson5: LessonPlan = {
  id: 'spoken-lang-05-voice-body-language',
  title: 'Engaging Your Audience: Voice and Body Language',
  text: 'Spoken Language',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand how vocal techniques - pace, pause, tone, volume, and emphasis - affect audience engagement and the persuasive impact of a speech.',
    'Recognise the role of body language, eye contact, and gesture in reinforcing spoken communication.',
    'Apply vocal and physical delivery techniques to a prepared section of their presentation through guided rehearsal.',
  ],
  successCriteria: [
    'I can identify and explain the effect of at least four vocal techniques used in effective speeches.',
    'I can demonstrate purposeful body language, including eye contact, open posture, and controlled gesture.',
    'I can deliver a 60-second section of my presentation using at least three deliberate delivery techniques.',
  ],
  keywords: [
    'pace',
    'pause',
    'tone',
    'inflection',
    'emphasis',
    'projection',
    'gesture',
    'eye contact',
  ],
  starterActivity: {
    title: 'Same Words, Different Delivery',
    duration: '8 minutes',
    instructions:
      'Teacher delivers the same short paragraph (four or five sentences) three times: first in a flat monotone with no eye contact, second shouting with exaggerated gestures, third with purposeful variation in pace, tone, and natural gestures. Students discuss in pairs: which was most effective and why? Teacher draws out that delivery is not about being loud or dramatic - it is about purposeful variation. The content was identical each time; only the delivery changed.',
    differentiation: {
      support:
        'Students choose from three descriptions (boring, over the top, just right) and explain their choice.',
      core: 'Students identify specific vocal and physical techniques that made the third delivery effective.',
      stretch:
        'Students explain how the wrong delivery could actually undermine a strong argument.',
    },
    resources: ['Prepared paragraph for teacher delivery'],
  },
  mainActivities: [
    {
      title: 'Vocal Techniques Workshop',
      duration: '18 minutes',
      instructions:
        'Teacher introduces five vocal techniques with demonstration: (1) Pace - slowing down for emphasis, speeding up for energy; (2) Pause - silence before or after a key point to let it land; (3) Tone - varying between serious, passionate, conversational, and urgent; (4) Volume - projecting without shouting, dropping volume for intimacy; (5) Emphasis - stressing key words to guide the audience\'s attention. Students practise each technique using a common sentence: "This is the most important issue facing our generation." They deliver it five times, each time foregrounding a different technique. In pairs, students then annotate a section of their own presentation with delivery notes - marking where they will pause, which words to stress, where to change pace.',
      differentiation: {
        support:
          'Provide a delivery annotation key (symbols for pause, emphasis, slow down, etc.) and a pre-annotated model.',
        core: 'Students annotate their own section independently using the five techniques.',
        stretch:
          'Students record themselves on a phone and listen back, identifying where their delivery could be more varied.',
      },
      resources: [
        'Vocal techniques handout with symbols',
        "Students' presentation drafts",
        'Delivery annotation key (support tier)',
      ],
    },
    {
      title: "Body Language Dos and Don'ts",
      duration: '12 minutes',
      instructions:
        'Show a short video compilation of speakers demonstrating effective and ineffective body language (or teacher models five common mistakes: fidgeting, hands in pockets, reading from notes with head down, swaying, crossed arms). Students create a two-column table of "Dos" and "Don\'ts" for physical delivery. Teacher then introduces three key principles: (1) Eye contact - sweep the room, do not fix on one person or stare at the floor; (2) Posture - stand tall, feet shoulder-width apart, weight balanced; (3) Gesture - use deliberate, open-handed gestures to reinforce points, not random hand movements. Students stand and practise their opening 30 seconds, focusing on body language only.',
      differentiation: {
        support:
          "Provide a pre-completed Dos and Don'ts table; students practise the three key principles with a partner who gives simple feedback.",
        core: 'Students complete the table independently and practise incorporating all three principles into their opening.',
        stretch:
          'Students evaluate how different gestures change the meaning or emphasis of the same spoken sentence.',
      },
      resources: [
        'Body language video compilation or teacher demonstration notes',
        "Dos and Don'ts table template",
      ],
    },
    {
      title: 'Rehearsal Round - Voice and Body Combined',
      duration: '15 minutes',
      instructions:
        'Students work in pairs. Each student delivers a 60-second section of their presentation to their partner, focusing on integrating vocal techniques and body language. The listening partner uses a structured feedback form to score five areas (pace, pause, eye contact, posture, gesture) out of three (1 = not yet, 2 = developing, 3 = confident). After feedback, the speaker delivers the same section again, incorporating the suggestions. Partners note any improvements. Teacher circulates and provides targeted coaching, particularly to students who are reluctant or anxious speakers.',
      differentiation: {
        support:
          'Students can use prompt cards and focus on just two delivery techniques (eye contact and pace).',
        core: 'Students deliver from minimal notes, incorporating at least three delivery techniques.',
        stretch:
          'Students deliver entirely from memory and ask their partner to identify the single most impactful moment and explain why.',
      },
      resources: [
        'Structured feedback form',
        "Students' presentation drafts",
        'Prompt cards (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Delivery Makeover',
    duration: '7 minutes',
    instructions:
      'Select one volunteer to deliver a sentence in a deliberately flat, monotone style. The class then coaches them to improve it, calling out specific techniques: "Pause after the word crisis!", "Slow down on the final phrase!", "Look at us, not the floor!" The student re-delivers with the improvements. Discuss the transformation. Teacher previews the next lesson on responding to questions.',
    differentiation: {
      support: 'Students suggest one improvement each, using the technique names from the lesson.',
      core: 'Students suggest improvements and explain the intended effect on the audience.',
      stretch:
        'Students evaluate whether there is a point where too many techniques make the delivery feel unnatural.',
    },
  },
  homework:
    'Practise delivering your full presentation draft aloud at home at least twice. Time yourself - aim for four to five minutes. Ask a family member or friend to give you one piece of feedback on your delivery.',
  worksheetQuestions: [
    {
      question:
        'Explain the difference between pace, pause, and emphasis as vocal techniques. Give an example of when a speaker might use each one.',
      lines: 6,
      modelAnswer:
        'Pace refers to the speed of delivery. A speaker might slow down when making a crucial point to ensure the audience absorbs it, or speed up slightly when listing examples to create a sense of energy and accumulation. Pause is the use of deliberate silence, which can be used before a key revelation to build anticipation, or after a powerful statement to let it resonate with the audience. Emphasis is the stressing of particular words to guide the audience\'s attention. For example, in the sentence "This is not just a problem - it is a crisis," a speaker would emphasise "crisis" to highlight the severity of the issue. All three techniques work together to create varied, engaging delivery.',
      marks: 6,
    },
    {
      question:
        'Why is eye contact important in a spoken presentation? What common mistakes do students make with eye contact?',
      lines: 5,
      modelAnswer:
        "Eye contact is important because it creates a connection between the speaker and the audience, conveying confidence, sincerity, and engagement. An audience is more likely to trust and be persuaded by a speaker who looks at them directly. Common mistakes include: staring at notes or the floor for the entire presentation, which suggests nervousness or lack of preparation; fixing on one person, which makes others feel excluded; and looking over the audience's heads rather than at individuals, which feels impersonal. The most effective approach is to sweep the room, making brief eye contact with different individuals in different sections of the audience.",
      marks: 4,
    },
    {
      question:
        'A student delivers their presentation in a loud, fast monotone throughout. Explain the problems with this delivery and suggest three specific improvements.',
      lines: 6,
      modelAnswer:
        'A loud, fast monotone is problematic because it provides no variation for the audience, making it difficult to distinguish important points from less important ones. The constant volume becomes tiring and the pace prevents the audience from processing key ideas. The lack of tonal variation makes the speaker sound disengaged from their own argument. Three specific improvements: (1) Vary the pace - slow down significantly for the most important point in each paragraph to signal its significance; (2) Introduce pauses - add a two-second pause after each key claim to allow it to register; (3) Vary the volume - drop to a quieter, more conversational tone for a personal anecdote, then build back up for the call to action. These changes create a dynamic delivery that holds attention.',
      marks: 4,
    },
    {
      question:
        'Annotate the following sentence with delivery instructions, explaining your choices: "We cannot wait any longer - the time to act is now."',
      lines: 5,
      modelAnswer:
        'Delivery annotations: "We cannot [emphasis on cannot, spoken firmly] wait any longer [slow pace, drawing out the phrase to build tension] - [PAUSE - two seconds of silence to let the first clause land] the time to act [steady, measured pace, rising tone to build towards the climax] is NOW [strong emphasis, slightly increased volume, direct eye contact with the audience, open-palm gesture towards them]." The pause creates a dramatic break that separates the problem from the solution. The emphasis on "cannot" and "NOW" frames the urgency at both ends of the sentence. The rising tone builds momentum towards the final word, which lands with maximum impact.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson can be anxiety-inducing for some students. Create a supportive atmosphere and emphasise that everyone improves with practice.',
    'The teacher demonstration in the starter is crucial - commit fully to the flat and exaggerated versions for maximum contrast.',
    'Pair anxious speakers with supportive, trusted partners for the rehearsal activity.',
    "If time allows, video one willing student's before-and-after delivery to show the class the power of technique.",
    'Students with speech and language needs may require additional support or alternative assessment arrangements - consult the SENCO.',
  ],
  targetedSkills: [
    'Vocal delivery techniques',
    'Body language awareness',
    'Rehearsal and practice',
    'Peer coaching',
    'Self-evaluation',
  ],
}

// ─── Lesson 6: Responding to Questions and Challenges ────────────────────────

const lesson6: LessonPlan = {
  id: 'spoken-lang-06-responding-questions',
  title: 'Responding to Questions and Challenges',
  text: 'Spoken Language',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand that responding to questions is a separately assessed component of the Spoken Language endorsement and requires preparation.',
    'Develop strategies for anticipating likely questions, challenges, and counter-arguments to a presented position.',
    'Practise responding to spontaneous questions using Standard English, maintaining composure, and developing answers with supporting detail.',
  ],
  successCriteria: [
    'I can anticipate at least three questions an audience might ask about my presentation topic.',
    'I can use strategies such as bridging, acknowledging, and reframing to handle challenging or unexpected questions.',
    'I can respond to a spontaneous question in Standard English, maintaining my argument while showing respect for the questioner.',
  ],
  keywords: [
    'counter-argument',
    'rebuttal',
    'concession',
    'bridging',
    'spontaneous',
    'composure',
    'elaboration',
    'Standard English',
  ],
  starterActivity: {
    title: 'Question Prediction',
    duration: '8 minutes',
    instructions:
      'Display a simple, controversial statement on the board (e.g., "School uniforms should be abolished"). Give students 90 seconds to write down as many questions or challenges as they can think of that an audience member might raise. Share and compile a class list on the board. Teacher points out that the best speakers anticipate objections and prepare responses. Link to the AQA criteria: students must respond to questions and feedback after their presentation.',
    differentiation: {
      support:
        'Provide question stems: "What about...?", "But don\'t you think...?", "How would you respond to someone who says...?".',
      core: 'Students generate questions independently, aiming for at least five.',
      stretch:
        'Students categorise their questions (factual, challenging, clarifying, hostile) and discuss which type is hardest to answer.',
    },
    resources: ['Controversial statement slide', 'Question stems (support tier)'],
  },
  mainActivities: [
    {
      title: 'Strategies for Responding',
      duration: '15 minutes',
      instructions:
        'Teacher introduces four response strategies with examples: (1) Acknowledge and redirect - "That\'s a valid point, and it connects to something I feel strongly about..." (concede part of the question, then steer back to your argument); (2) Provide additional evidence - "That\'s a great question, and the research actually shows..." (use prepared evidence to support your position); (3) Reframe the question - "I think the real question here is..." (shift the focus to stronger ground); (4) Concede with limits - "You\'re right that X is true, but it doesn\'t change the fact that..." (show balanced thinking while maintaining your position). Teacher models each strategy using the uniform topic from the starter. Students practise each strategy with a partner using a different topic.',
      differentiation: {
        support:
          'Provide response sentence starters for each strategy and a model dialogue to follow.',
        core: 'Students practise all four strategies independently with a partner.',
        stretch:
          'Students evaluate which strategy is most effective for different types of question (hostile, factual, clarifying) and justify their analysis.',
      },
      resources: [
        'Response strategies handout',
        'Sentence starters (support tier)',
        'Practice topics list',
      ],
    },
    {
      title: 'Anticipating Questions for Your Topic',
      duration: '15 minutes',
      instructions:
        'Students work on their own presentation topic. First, they write down three questions they think an audience member might ask, including at least one genuinely challenging question. Then, for each question, they draft a response using one of the four strategies taught. In pairs, students swap topics: the partner reads the presentation plan and writes two additional questions the speaker had not anticipated. The speaker must respond to these unexpected questions verbally, practising thinking on their feet. Partners assess each response for: use of Standard English, composure, and quality of reasoning.',
      differentiation: {
        support:
          "Teacher provides two likely questions for the student's topic; the student drafts responses with guidance.",
        core: 'Students anticipate three questions and respond to two unexpected ones from a partner.',
        stretch:
          'Students prepare responses to a deliberately hostile or unfair question and discuss how to maintain professionalism under pressure.',
      },
      resources: [
        "Students' presentation plans",
        'Question anticipation worksheet',
        'Response drafting space',
      ],
    },
    {
      title: 'Hot Seat Practice',
      duration: '15 minutes',
      instructions:
        'In groups of four, one student sits in the "hot seat." They deliver a 60-second summary of their presentation argument, then the other three students ask questions for two minutes. The hot seat student must respond using Standard English and the strategies taught. After each round, the group provides feedback using a structured form: (1) Did the speaker maintain composure? (2) Did they use Standard English? (3) Did they develop their answers or give one-word responses? (4) Which response strategy was most effective? Rotate so each student has a turn. Teacher circulates and coaches.',
      differentiation: {
        support:
          'Hot seat students can refer to their preparation notes. Questioners use the question stems provided.',
        core: 'Students respond without notes and questioners ask genuine, probing questions.',
        stretch:
          "One questioner deliberately plays devil's advocate, and the speaker must concede a point while maintaining their overall argument.",
      },
      resources: ['Hot seat feedback form', 'Question stems (support tier)', 'Timer'],
    },
  ],
  plenaryActivity: {
    title: 'Top Tips for the Q&A',
    duration: '7 minutes',
    instructions:
      'Students individually write their top three tips for handling questions, based on the lesson. Share several examples and compile a class "Top 10" list on the board. Teacher adds any missing essentials: always listen to the full question before responding, never dismiss a questioner, and it is acceptable to say "That\'s a question I\'d like to think about further" if genuinely stumped. Preview next lesson on Standard English.',
    differentiation: {
      support: 'Students select their top three from a provided list of eight tips.',
      core: 'Students write their own top three tips from memory.',
      stretch: 'Students rank the class list in order of importance and justify their top choice.',
    },
  },
  homework:
    'Write out five questions you think your audience might ask after your presentation. For each, draft a response of three to four sentences using one of the four strategies taught in class. Label which strategy you are using.',
  worksheetQuestions: [
    {
      question:
        'Describe the four strategies for responding to questions taught in this lesson and give an example of each.',
      lines: 8,
      modelAnswer:
        '(1) Acknowledge and redirect: concede part of the question but steer back to your argument. Example: "You\'re right that cost is a factor, and that connects to my point about long-term investment - the initial expense is small compared to the benefits over ten years." (2) Provide additional evidence: use a prepared fact or statistic to strengthen your response. Example: "That\'s a great question - and a recent NHS report found that early intervention saves the health service an average of four thousand pounds per patient." (3) Reframe the question: shift the focus to stronger ground. Example: "I think the real question here isn\'t whether we can afford to act, but whether we can afford not to." (4) Concede with limits: show balanced thinking while maintaining your position. Example: "You\'re right that there are some benefits to the current system, but those benefits are only available to a small minority, which is precisely the problem I\'m highlighting."',
      marks: 8,
    },
    {
      question:
        'Why is it important for a speaker to anticipate questions before their presentation? What could go wrong if they do not prepare?',
      lines: 5,
      modelAnswer:
        'Anticipating questions is important because it allows the speaker to prepare thoughtful, evidence-based responses rather than being caught off guard. A speaker who has anticipated likely challenges can respond with confidence and composure, which reinforces their credibility. Without preparation, a speaker might panic, give a vague or contradictory answer, abandon Standard English under pressure, or become defensive. In the worst case, an unprepared response could undermine the entire argument of the presentation. Preparation also allows the speaker to identify weaknesses in their own argument and address them proactively, either by strengthening the relevant section or by preparing a concession that shows balanced thinking.',
      marks: 4,
    },
    {
      question:
        'A student is asked: "But isn\'t your argument just based on your own opinion?" How should they respond? Write a model answer using one of the four strategies.',
      lines: 5,
      modelAnswer:
        'Using the "provide additional evidence" strategy, the student might respond: "I can understand why it might seem that way, but my argument is actually supported by substantial evidence. For example, a government report published last year found that [specific statistic]. The charity [name] has also documented [specific finding]. While my personal experience did shape my interest in this topic, the position I\'m presenting is grounded in research and expert analysis, not just opinion." This response is effective because it directly addresses the challenge without becoming defensive, and it provides concrete evidence to counter the suggestion that the argument is merely personal opinion.',
      marks: 4,
    },
    {
      question:
        'Explain the difference between conceding a point and losing your argument. Why is concession sometimes a sign of strength in a speaker?',
      lines: 5,
      modelAnswer:
        'Conceding a point means acknowledging that an aspect of an opposing argument has some validity, while still maintaining your overall position. Losing your argument means abandoning your thesis entirely. Concession is a sign of strength because it demonstrates intellectual honesty, balanced thinking, and confidence - the speaker is secure enough in their overall position to acknowledge nuance. For example, a speaker arguing for later school start times might concede: "It\'s true that changing school hours would create logistical challenges for some parents. However, the overwhelming evidence on adolescent sleep and academic performance suggests that these challenges are worth solving." This acknowledgement makes the speaker seem more credible and reasonable than someone who refuses to engage with any opposing view.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The Q&A component is often neglected in preparation but is separately assessed in the Spoken Language endorsement. Devote real time to it.',
    'The hot seat activity can be intimidating. Set clear ground rules: questions must be respectful and genuine, not designed to embarrass.',
    'Model the difference between a hostile question and a challenging one. Students should be prepared for the latter but not subjected to the former.',
    'Students who are anxious about spontaneous speaking may benefit from additional rehearsal time or a pre-arranged "friendly" question from a peer.',
    'Emphasise that saying "I don\'t know, but I would like to find out" is acceptable and honest - far better than making something up.',
  ],
  targetedSkills: [
    'Responding to questions',
    'Spontaneous speaking',
    'Counter-argument and rebuttal',
    'Standard English under pressure',
    'Active listening',
  ],
}

// ─── Lesson 7: Standard English in Formal Contexts ──────────────────────────

const lesson7: LessonPlan = {
  id: 'spoken-lang-07-standard-english',
  title: 'Standard English in Formal Contexts',
  text: 'Spoken Language',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand what Standard English is and why it is the expected register for formal spoken contexts such as presentations, interviews, and debates.',
    'Identify common non-standard features in spoken English and practise converting them to Standard English without losing authenticity or personal voice.',
    'Demonstrate the ability to code-switch between informal and formal registers, understanding when each is appropriate.',
  ],
  successCriteria: [
    'I can define Standard English and explain why it is important in formal spoken contexts.',
    'I can identify and correct at least five common non-standard features in spoken English.',
    'I can deliver a section of my presentation using consistent Standard English while maintaining a natural, engaging tone.',
  ],
  keywords: [
    'Standard English',
    'register',
    'code-switching',
    'formality',
    'dialect',
    'slang',
    'subject-verb agreement',
    'received pronunciation',
  ],
  starterActivity: {
    title: 'Formal or Informal?',
    duration: '8 minutes',
    instructions:
      'Display ten short spoken utterances on the board, mixing Standard and non-standard English (e.g., "I didn\'t do nothing wrong" vs "I did not do anything wrong"; "We was going to the shop" vs "We were going to the shop"; "Basically, yeah, it\'s like, really important" vs "This is a matter of significant importance"). Students sort them into two columns: formal/Standard English and informal/non-standard. Discuss: is non-standard English "wrong"? Teacher clarifies that non-standard English is not incorrect - it is simply not appropriate for formal contexts. The Spoken Language endorsement requires Standard English.',
    differentiation: {
      support:
        'Provide the two column headings and sort five pairs rather than ten individual utterances.',
      core: 'Students sort all ten independently and explain the non-standard feature in each informal example.',
      stretch:
        'Students discuss whether there are ever situations where non-standard English might be deliberately used in a formal speech for effect.',
    },
    resources: ['Ten utterances slide', 'Sorting worksheet'],
  },
  mainActivities: [
    {
      title: 'Common Non-Standard Features',
      duration: '15 minutes',
      instructions:
        'Teacher presents six common non-standard features that appear in students\' spoken English, with corrections: (1) Double negatives - "I don\'t know nothing" → "I don\'t know anything"; (2) Subject-verb disagreement - "We was" → "We were", "They was" → "They were"; (3) Filler words - "like", "basically", "literally", "innit" used without meaning; (4) Informal contractions - "gonna", "wanna", "ain\'t" → "going to", "want to", "isn\'t/aren\'t"; (5) Non-standard past tenses - "I done it" → "I did it", "I seen it" → "I saw it"; (6) Slang and colloquialisms - topic-dependent but should be replaced with precise vocabulary. Students complete a correction exercise, rewriting twelve non-standard sentences in Standard English. Teacher emphasises: Standard English is about grammar and vocabulary, not accent - regional accents are perfectly acceptable.',
      differentiation: {
        support:
          'Provide a reference sheet of corrections and complete six sentences rather than twelve.',
        core: 'Students complete all twelve sentences independently.',
        stretch:
          'Students identify non-standard features in their own presentation draft and correct them, explaining why each change is necessary.',
      },
      resources: [
        'Non-standard features handout',
        'Correction exercise worksheet',
        'Reference sheet (support tier)',
      ],
    },
    {
      title: 'Code-Switching Workshop',
      duration: '20 minutes',
      instructions:
        'Teacher explains code-switching: the ability to shift between registers depending on context. Most people already do this - speaking differently to friends than to a teacher or a job interviewer. Students complete three short role-play activities in pairs: (1) Explain your weekend plans to a friend, then to a headteacher; (2) Complain about a product to a friend, then write a formal complaint; (3) Describe your presentation topic casually, then present the opening formally. After each, students discuss what changed: vocabulary, sentence structure, filler words, tone. The teacher links this to the Spoken Language endorsement: the presentation is a formal context that requires consistent Standard English.',
      differentiation: {
        support:
          'Provide scripts for the informal version and sentence starters for the formal version.',
        core: 'Students improvise both versions and identify three specific changes they made.',
        stretch:
          'Students analyse whether code-switching is a skill that advantages certain social groups and discuss the implications for fairness.',
      },
      resources: ['Role-play scenario cards', 'Code-switching reflection sheet'],
    },
    {
      title: 'Presentation Draft - Standard English Audit',
      duration: '10 minutes',
      instructions:
        "Students read through their own presentation draft specifically checking for non-standard features. Using a coloured pen, they circle any instances of slang, filler words, double negatives, non-standard grammar, or overly informal vocabulary. They then correct each instance in the margin. In pairs, students swap drafts for a second check - it is often easier to spot non-standard features in someone else's work. Teacher circulates and supports students who struggle to identify non-standard features in their own writing.",
      differentiation: {
        support:
          'Teacher or teaching assistant supports the audit, highlighting areas for the student to correct.',
        core: 'Students complete the self-audit and peer audit independently.',
        stretch:
          'Students consider whether any informal language could be retained deliberately for rhetorical effect (e.g., a colloquial phrase in an anecdote) and justify their decision.',
      },
      resources: [
        "Students' presentation drafts",
        'Coloured pens',
        'Non-standard features checklist',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Standard English Challenge',
    duration: '7 minutes',
    instructions:
      'Quick-fire activity: teacher reads out non-standard sentences and selects random students to provide the Standard English correction. Each correct answer earns a point for their table. After eight rounds, the winning table is acknowledged. Teacher summarises: Standard English is not about sounding posh or suppressing your identity - it is about communicating clearly and appropriately in formal contexts. Preview next lesson on evaluating spoken language.',
    differentiation: {
      support: 'Students can confer with a partner before answering.',
      core: 'Students respond individually without conferring.',
      stretch: 'Students must provide the correction and explain the grammatical rule behind it.',
    },
  },
  homework:
    'Record yourself reading the first two minutes of your presentation aloud (on your phone). Listen back and note any non-standard features or filler words. Write a list of corrections and practise the section again.',
  worksheetQuestions: [
    {
      question:
        'Define Standard English. Why is it important for the GCSE Spoken Language endorsement?',
      lines: 5,
      modelAnswer:
        "Standard English is the grammatically conventional form of English that is widely accepted as the norm for formal communication in education, professional contexts, and public speaking. It is characterised by correct subject-verb agreement, standard past tenses, absence of double negatives, and the use of precise vocabulary rather than slang or colloquialisms. It is important for the Spoken Language endorsement because the AQA criteria specifically assess the student's ability to use Standard English in a formal context. Consistent use of Standard English demonstrates language awareness, adaptability, and the ability to communicate appropriately for the audience and purpose. Importantly, Standard English refers to grammar and vocabulary, not accent - a student may speak in any regional accent and still use Standard English.",
      marks: 4,
    },
    {
      question:
        "Rewrite the following passage in Standard English: \"Me and my mates was talking about it and we was like, basically, no one don't care about the environment no more. Everyone's just gonna ignore it cos it ain't affecting them right now, innit.\"",
      lines: 5,
      modelAnswer:
        'Standard English version: "My friends and I were discussing this issue, and we observed that very few people seem to care about the environment any longer. The concern is that most people will continue to ignore it because it is not directly affecting them at this moment." Changes made: "Me and my mates" corrected to "My friends and I" (standard pronoun order and formality); "was" corrected to "were" (subject-verb agreement); filler words "like", "basically", "innit" removed; double negative "don\'t care...no more" corrected to "seem to care...any longer"; "gonna" expanded to "will continue to"; "cos" replaced with "because"; "ain\'t" replaced with "is not."',
      marks: 5,
    },
    {
      question:
        'Explain what code-switching is and give an example from everyday life. Why is code-switching a useful skill?',
      lines: 5,
      modelAnswer:
        'Code-switching is the ability to shift between different language registers, styles, or dialects depending on the context, audience, and purpose of communication. For example, a student might describe their weekend to a friend using slang, informal grammar, and an animated, casual tone: "Yeah so basically we went to this sick festival and it was absolutely mental." The same student might describe the same event to a teacher: "We attended a music festival over the weekend - it was a really enjoyable experience." Code-switching is a useful skill because it allows a person to communicate effectively in a wide range of situations, from casual conversations to job interviews, presentations, and formal debates. It demonstrates social awareness and linguistic flexibility.',
      marks: 4,
    },
    {
      question:
        'A student says: "Using Standard English in my presentation will make me sound fake and not like myself." How would you respond to this concern?',
      lines: 5,
      modelAnswer:
        'This is a common and understandable concern, but Standard English does not mean suppressing your personality or identity. It is simply a set of grammatical conventions that help you communicate clearly in formal contexts. You can still use your natural accent, your own examples, and your personal passion for your topic. Think of Standard English as a professional tool - just as you might dress smartly for an interview without feeling that you are pretending to be someone else. The most effective speakers combine Standard English grammar with authentic personal engagement. Your individual voice comes through in what you say and how you say it, not in whether you use "was" or "were" correctly.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is a sensitive topic. Many students feel that Standard English is a judgement on their home language or dialect. Be explicit: non-standard English is not wrong - it is just not appropriate for this formal context.',
    'Avoid framing Standard English as inherently superior. Frame it as one register among many, and the one required for this assessment.',
    'The code-switching role plays can be humorous and engaging. Encourage students to exaggerate both the informal and formal versions.',
    'Be aware that some students may find it difficult to hear the difference between standard and non-standard features, particularly if non-standard forms are dominant in their home or community language.',
    'The recording homework is very effective - students are often unaware of their own filler words until they hear themselves.',
  ],
  targetedSkills: [
    'Standard English usage',
    'Register and formality',
    'Code-switching',
    'Grammar correction',
    'Self-awareness in speech',
  ],
}

// ─── Lesson 8: Evaluating Spoken Language - Listening Skills ─────────────────

const lesson8: LessonPlan = {
  id: 'spoken-lang-08-evaluating-listening',
  title: 'Evaluating Spoken Language: Listening Skills',
  text: 'Spoken Language',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Develop active listening skills that enable thoughtful evaluation of spoken language presentations.',
    'Apply the Spoken Language assessment criteria to evaluate model presentations, identifying strengths and areas for improvement.',
    'Formulate constructive, specific feedback that helps speakers improve their delivery, content, and use of Standard English.',
  ],
  successCriteria: [
    'I can listen to a presentation and take structured notes on content, delivery, and language use simultaneously.',
    'I can apply the Pass, Merit, and Distinction criteria to a model presentation and justify the grade I would award.',
    'I can write feedback that is specific, constructive, and linked to the assessment criteria.',
  ],
  keywords: [
    'active listening',
    'evaluation',
    'criteria',
    'constructive feedback',
    'annotation',
    'assessment',
    'merit',
    'distinction',
  ],
  starterActivity: {
    title: 'Listening Challenge',
    duration: '8 minutes',
    instructions:
      'Teacher reads a short passage (approximately 150 words) aloud once at normal pace. Students listen without writing. Then teacher asks five comprehension questions. Students answer from memory. Compare scores. Teacher makes the point: most people retain only about 50% of what they hear immediately - active listening is a skill that must be developed. Discuss: what strategies help you listen more effectively? (Eye contact with the speaker, mental summarising, noting key words, not formulating your own response while listening.)',
    differentiation: {
      support: 'Read the passage twice and ask three questions rather than five.',
      core: 'Students listen once and answer all five questions.',
      stretch:
        "Students answer the five questions and then summarise the passage's main argument in one sentence.",
    },
    resources: ['Prepared passage for reading aloud', 'Comprehension questions slide'],
  },
  mainActivities: [
    {
      title: 'Active Listening Framework',
      duration: '12 minutes',
      instructions:
        "Teacher introduces a structured listening framework that students will use when evaluating their peers' presentations. The framework has three columns: (1) Content - is the argument clear, well-evidenced, and logically structured? (2) Delivery - does the speaker use vocal techniques, eye contact, and body language effectively? (3) Language - does the speaker use Standard English, rhetorical techniques, and subject-specific vocabulary? For each column, students write one question they will focus on while listening. Teacher models using the framework by playing a 60-second clip of a speech and completing the grid as a think-aloud exercise.",
      differentiation: {
        support:
          'Provide the framework with pre-written questions in each column; students listen and tick or add notes.',
        core: 'Students formulate their own questions and complete the framework independently during the clip.',
        stretch:
          'Students add a fourth column - "Questions I would ask this speaker" - and generate two probing questions.',
      },
      resources: [
        'Active listening framework template',
        'Speech clip (60 seconds)',
        'Pre-completed framework (support tier)',
      ],
    },
    {
      title: 'Evaluating Model Presentations',
      duration: '25 minutes',
      instructions:
        'Play two pre-recorded model student presentations (or teacher delivers two contrasting presentations). Presentation A is competent but lacks variety in delivery and uses some non-standard English. Presentation B is confident, well-evidenced, uses rhetorical techniques, and demonstrates consistent Standard English. After each, students complete their listening framework. Then, individually, students assign each presentation a grade (Pass, Merit, or Distinction) with a written justification of at least three sentences, linked to specific criteria. In pairs, students compare their grades and justifications, discussing any disagreements. Teacher reveals the "correct" grade and explains the reasoning, modelling how to reference the criteria precisely.',
      differentiation: {
        support:
          'Provide a simplified criteria sheet with key phrases highlighted. Students grade and justify with a sentence starter: "I would award this a... because the speaker...".',
        core: 'Students grade independently with detailed justification referencing at least two criteria strands.',
        stretch:
          'Students write specific improvement targets for each presentation and explain how following these targets would move the speaker up one grade boundary.',
      },
      resources: [
        'Two model presentation recordings or scripts',
        'AQA Spoken Language criteria sheet',
        'Listening framework templates',
        'Simplified criteria (support tier)',
      ],
    },
    {
      title: 'Writing Constructive Feedback',
      duration: '8 minutes',
      instructions:
        'Teacher models the difference between unhelpful and constructive feedback. Unhelpful: "That was good" or "You need to be louder." Constructive: "Your use of a rhetorical question in the opening was very effective at engaging the audience. To improve, you could vary your pace more - for example, slowing down before your key statistic to give it more impact." Students practise by writing two pieces of constructive feedback for Presentation A: one strength (with specific evidence) and one improvement target (with a specific, actionable suggestion). Share examples and discuss what makes feedback genuinely useful.',
      differentiation: {
        support:
          'Provide a feedback sentence frame: "One strength was... because... To improve, you could... For example...".',
        core: 'Students write feedback independently using the strength-plus-target format.',
        stretch:
          'Students write feedback that references the assessment criteria by name and suggests how the speaker could move from Merit to Distinction.',
      },
      resources: [
        'Feedback examples slide (helpful vs unhelpful)',
        'Feedback writing frame (support tier)',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Peer Feedback Pledge',
    duration: '7 minutes',
    instructions:
      "Students write a personal commitment for how they will be a supportive and constructive audience member during their peers' presentations. They identify: one listening skill they will focus on, one aspect of feedback they will prioritise, and one thing they will avoid (e.g., looking at their phone, whispering). Students share pledges with a partner. Teacher collects pledges to revisit before the presentation lessons.",
    differentiation: {
      support: 'Students select from a provided list of listening commitments.',
      core: 'Students write their own commitments independently.',
      stretch:
        'Students explain why being a good listener is as important a skill as being a good speaker, linking to professional and academic contexts.',
    },
  },
  homework:
    "Watch a short speech or presentation online (TED talk, news interview, or political speech). Using the listening framework from today's lesson, evaluate the speaker's content, delivery, and language. Write a paragraph summarising your evaluation.",
  worksheetQuestions: [
    {
      question:
        'What is active listening and why is it important when evaluating a spoken presentation?',
      lines: 5,
      modelAnswer:
        'Active listening is the process of fully concentrating on a speaker, processing their message, and engaging with the content rather than passively hearing the words. It involves strategies such as maintaining eye contact with the speaker, mentally summarising key points, noting important details, and reserving judgement until the speaker has finished. It is important when evaluating a spoken presentation because unlike written text, a speech cannot be re-read - the listener has only one opportunity to absorb the content and assess the delivery. Without active listening, an evaluator might miss key evidence, fail to notice rhetorical techniques, or provide feedback based on a general impression rather than specific observations.',
      marks: 4,
    },
    {
      question:
        'Explain the difference between the following two pieces of feedback. Which is more useful and why? Feedback A: "Your presentation was really good, well done." Feedback B: "Your opening rhetorical question was effective because it immediately made the audience think about their own experience. However, in your second point, you spoke very quickly, which meant the important statistic about youth unemployment was lost. Try pausing for two seconds after delivering a key fact to let it register."',
      lines: 6,
      modelAnswer:
        'Feedback B is significantly more useful because it is specific, evidence-based, and actionable. It identifies a particular strength (the rhetorical question) and explains why it was effective, which helps the speaker understand what to replicate. It then identifies a specific area for improvement (speaking too quickly during the second point) and provides a concrete, actionable suggestion (pausing for two seconds after key facts). Feedback A, while positive, gives the speaker no information about what was good or how to improve - it is a general statement that could apply to any presentation. Effective feedback must be specific enough for the speaker to act on it.',
      marks: 4,
    },
    {
      question:
        'Using the Spoken Language criteria, explain the difference between a Pass-level and a Distinction-level presentation.',
      lines: 6,
      modelAnswer:
        'A Pass-level presentation demonstrates a basic ability to present information in a structured way, using Standard English with some inconsistencies. The speaker communicates their ideas with reasonable clarity but may rely heavily on notes, use limited vocal variety, and provide only basic responses to questions. A Distinction-level presentation is characterised by a confident, dynamic delivery that fully engages the audience through purposeful use of vocal techniques, rhetorical devices, and body language. The speaker presents a well-structured, compelling argument supported by well-chosen evidence, uses Standard English consistently and accurately, and responds to questions with fluency, elaboration, and the ability to develop their ideas spontaneously. The key difference is the level of sophistication, engagement, and control demonstrated throughout.',
      marks: 5,
    },
    {
      question:
        'Write one piece of constructive feedback for a speaker whose presentation had strong content but weak delivery. Be specific and actionable.',
      lines: 5,
      modelAnswer:
        'Your argument about the impact of fast fashion on developing countries was well-researched and logically structured - the statistics you used were powerful, and your counter-argument showed mature, balanced thinking. However, your delivery did not do your content justice. You read directly from your script for most of the presentation, which meant you rarely made eye contact with the audience. This created a barrier between you and your listeners. For your next rehearsal, try reducing your notes to five bullet points on a card and practising with those prompts instead of a full script. Focus on looking up at the audience after each key point and pausing to let your ideas land.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'If using pre-recorded model presentations, ensure they represent a realistic range of student ability - not professional speakers.',
    'The listening framework will be used in the final presentation lessons, so students should keep their copies.',
    'Constructive feedback is a skill that needs explicit teaching. Many students default to vague praise or unhelpful criticism.',
    "Consider creating an anonymous model presentation rather than using a real student's work to avoid embarrassment.",
    'The peer feedback pledges are a useful classroom management tool - revisit them before the presentation day.',
  ],
  targetedSkills: [
    'Active listening',
    'Evaluative judgement',
    'Constructive feedback',
    'Criteria application',
    'Note-taking during listening',
  ],
}

// ─── Lesson 9: Debate and Discussion Skills ─────────────────────────────────

const lesson9: LessonPlan = {
  id: 'spoken-lang-09-debate-discussion',
  title: 'Debate and Discussion Skills',
  text: 'Spoken Language',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Understand the conventions and structure of formal debate, including proposition, opposition, rebuttal, and summing up.',
    'Develop the ability to listen actively to opposing viewpoints and respond with reasoned counter-arguments rather than emotional reactions.',
    'Participate in a structured classroom debate using Standard English, rhetorical techniques, and evidence-based reasoning.',
  ],
  successCriteria: [
    'I can explain the structure of a formal debate and the roles of proposition and opposition.',
    "I can construct a counter-argument that directly addresses an opponent's point rather than simply repeating my own position.",
    'I can participate in a debate using Standard English, at least two rhetorical techniques, and evidence to support my claims.',
  ],
  keywords: [
    'proposition',
    'opposition',
    'rebuttal',
    'motion',
    'point of information',
    'summing up',
    'counter-argument',
    'substantive point',
  ],
  starterActivity: {
    title: 'Agree or Disagree Corners',
    duration: '8 minutes',
    instructions:
      'Teacher reads out three controversial statements (e.g., "Social media does more harm than good", "Homework should be banned", "Everyone should learn a musical instrument"). For each, students move to one of four corners: Strongly Agree, Agree, Disagree, Strongly Disagree. Teacher interviews students from opposing corners, encouraging them to respond directly to what the other person said rather than just stating their own view. Teacher highlights: this is the difference between a discussion and a debate - in a debate, you must engage with the opposing argument, not just repeat your own.',
    differentiation: {
      support: 'Provide a response stem: "I disagree with what [name] said because...".',
      core: "Students respond directly to an opponent's specific point with a reason.",
      stretch:
        'Students identify the strongest point made by the opposing side and explain why it is strong before offering their counter-argument.',
    },
    resources: ['Three controversial statements', 'Corner labels'],
  },
  mainActivities: [
    {
      title: 'Debate Structure and Conventions',
      duration: '12 minutes',
      instructions:
        'Teacher explains the structure of a formal debate: (1) The motion - a debatable statement beginning with "This house believes that..."; (2) Proposition - the team arguing in favour of the motion; (3) Opposition - the team arguing against; (4) Speeches - each speaker has two minutes to make substantive points; (5) Rebuttal - speakers must address points made by the other side; (6) Points of information - brief interjections from the opposing team during a speech; (7) Summing up - final speakers from each side summarise the strongest arguments. Students take notes on the structure. Teacher shows or reads a short model debate extract, and students identify each structural element.',
      differentiation: {
        support: 'Provide a visual flowchart of the debate structure with key terms defined.',
        core: 'Students identify the structural elements in the model extract independently.',
        stretch: 'Students evaluate the model extract: which speaker was most effective and why?',
      },
      resources: [
        'Debate structure handout',
        'Visual flowchart (support tier)',
        'Model debate extract',
      ],
    },
    {
      title: 'Building a Case - Preparation',
      duration: '15 minutes',
      instructions:
        'Divide the class into teams of four. Assign a motion: "This house believes that all young people should complete a year of national service before university or employment." Half the teams are proposition, half are opposition. Each team has fifteen minutes to prepare: (1) Assign roles - first speaker (introduce the case), second speaker (develop the strongest argument with evidence), third speaker (rebuttal and summing up); (2) Brainstorm three main arguments; (3) Anticipate two arguments the opposing side will make and prepare counter-arguments; (4) Find or create one piece of evidence for each argument. Teacher circulates, coaching teams on argument quality and rebuttal preparation.',
      differentiation: {
        support:
          'Provide an argument bank with four pre-written points for each side; teams select and develop three.',
        core: 'Teams generate their own arguments and prepare counter-arguments independently.',
        stretch:
          'Teams prepare a "trap" - a point designed to lead the opposition into a position they can then dismantle in rebuttal.',
      },
      resources: [
        'Motion slide',
        'Debate preparation worksheet',
        'Argument bank (support tier)',
        'Timer',
      ],
    },
    {
      title: 'Classroom Debate',
      duration: '18 minutes',
      instructions:
        'Run a structured debate between one proposition and one opposition team (other teams observe and evaluate using the listening framework from Lesson 8). Format: Proposition Speaker 1 (2 minutes) → Opposition Speaker 1 (2 minutes) → Proposition Speaker 2 (2 minutes) → Opposition Speaker 2 (2 minutes) → Opposition Speaker 3 - Rebuttal and Summary (2 minutes) → Proposition Speaker 3 - Rebuttal and Summary (2 minutes). Points of information may be offered by raising a hand during opposing speeches; the speaker may accept or decline. After the debate, observing students vote on which team was more persuasive (not which side they personally agree with). Teacher leads a debrief: what made the winning team more effective?',
      differentiation: {
        support:
          'Debating students may use note cards. Observing students use a simplified evaluation grid.',
        core: 'Debating students use minimal notes. Observers evaluate using the full listening framework.',
        stretch:
          'Observers write a paragraph evaluating the most effective moment in the debate and explaining why it was persuasive.',
      },
      resources: [
        'Timer',
        'Debate evaluation framework',
        'Simplified evaluation grid (support tier)',
        'Voting slips',
      ],
    },
  ],
  plenaryActivity: {
    title: 'Debate Debrief',
    duration: '7 minutes',
    instructions:
      'Students reflect individually: write one thing you learned about debating today, one skill you want to improve, and one technique you will use in your own presentation. Share three or four responses. Teacher links debate skills to the presentation: even though the presentation is not a debate, the ability to anticipate counter-arguments, use evidence, and speak persuasively in Standard English transfers directly. Preview the final lesson: exam practice and delivering the presentation.',
    differentiation: {
      support:
        'Students complete sentence starters: "I learned that...", "I want to improve...", "I will use...".',
      core: 'Students write three reflections independently.',
      stretch:
        'Students evaluate whether debate or presentation is the more challenging spoken language skill and justify their view.',
    },
  },
  homework:
    'Write a two-minute debate speech (approximately 250-300 words) on the opposing side of the motion debated in class. This practises the skill of arguing a position you may not personally agree with.',
  worksheetQuestions: [
    {
      question:
        'Explain the structure of a formal debate. What are the roles of the proposition and opposition?',
      lines: 6,
      modelAnswer:
        'A formal debate is structured around a motion - a debatable statement beginning with "This house believes that..." The proposition team argues in favour of the motion, while the opposition argues against it. Each team typically has three speakers. The first speaker introduces the team\'s case and outlines their main arguments. The second speaker develops the strongest argument in detail, using evidence and examples. The third speaker delivers the rebuttal, responding directly to the opposing team\'s arguments, and then sums up the case. During speeches, the opposing team may offer "points of information" - brief interjections that challenge or question a point. The speaking team may accept or decline these. The debate concludes with a vote based on which team was more persuasive, not which side the audience personally agrees with.',
      marks: 5,
    },
    {
      question:
        'What is the difference between simply disagreeing with someone and making an effective rebuttal? Give an example.',
      lines: 5,
      modelAnswer:
        'Simply disagreeing means stating that you do not accept the other person\'s point without explaining why or offering an alternative: for example, "I don\'t agree with that." An effective rebuttal directly addresses the specific point made, explains why it is flawed, and offers a counter-argument supported by evidence. For example: "The opposition argued that national service would delay young people\'s careers. However, this assumes that the only valuable experience is paid employment. Research from countries with national service programmes shows that participants develop leadership, teamwork, and resilience - skills that employers consistently rank as more important than an extra year of work experience." A strong rebuttal engages with the opponent\'s reasoning rather than simply contradicting their conclusion.',
      marks: 4,
    },
    {
      question:
        'Why is it important to be able to argue a position you do not personally agree with? How does this skill relate to the Spoken Language endorsement?',
      lines: 5,
      modelAnswer:
        'Being able to argue a position you do not personally hold is important because it develops critical thinking, empathy, and intellectual flexibility. It forces you to understand the reasoning behind different viewpoints and to construct arguments based on logic and evidence rather than emotion. This skill is directly relevant to the Spoken Language endorsement because students must be able to present a well-structured argument and respond to challenging questions - including questions that probe or challenge their position. A speaker who has practised arguing from multiple perspectives will be better equipped to anticipate counter-arguments, make concessions where appropriate, and defend their position under pressure. It also demonstrates the higher-order thinking skills associated with Distinction-level performance.',
      marks: 4,
    },
    {
      question:
        'You are on the opposition team debating the motion: "This house believes that social media should be banned for under-16s." Write three arguments you would use to oppose this motion.',
      lines: 8,
      modelAnswer:
        '(1) Banning social media for under-16s is practically unenforceable. Age verification systems are easily circumvented, and a ban would simply push young people towards unregulated platforms with fewer safety features, potentially increasing the risks rather than reducing them. (2) Social media provides genuine benefits for young people, including connecting with communities of shared interest, accessing educational content, and maintaining friendships. For isolated or marginalised young people - such as LGBTQ+ teenagers in unsupportive environments - online communities can be a lifeline. Banning access would remove these benefits entirely. (3) Rather than banning social media, a more effective approach would be education. Teaching young people digital literacy, critical thinking, and online safety skills empowers them to navigate social media responsibly. A ban treats young people as incapable of learning, while education gives them the tools they need for a digital world they will inevitably inhabit as adults.',
      marks: 6,
    },
  ],
  teacherNotes: [
    'If time is tight, run only one debate and have remaining teams debate in the next available slot (form time, enrichment).',
    'The motion should be engaging but not personally sensitive. Avoid topics that could upset or marginalise students.',
    'Establish debate etiquette before starting: no personal attacks, applause for all speakers, respectful language.',
    'The vote at the end should be based on persuasive quality, not personal opinion. Emphasise this distinction.',
    'Debate skills transfer directly to Paper 2, Section B (writing to argue and persuade) and to the Spoken Language endorsement.',
  ],
  targetedSkills: [
    'Formal debate conventions',
    'Counter-argument and rebuttal',
    'Persuasive speaking',
    'Active listening in debate',
    'Teamwork and preparation',
  ],
}

// ─── Lesson 10: Exam Practice - Delivering Your Presentation ────────────────

const lesson10: LessonPlan = {
  id: 'spoken-lang-10-delivering-presentation',
  title: 'Exam Practice: Delivering Your Presentation',
  text: 'Spoken Language',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Deliver a prepared spoken language presentation of four to five minutes that demonstrates a clear argument, effective use of Standard English, and purposeful rhetorical and delivery techniques.',
    'Respond to spontaneous questions and feedback from the audience with composure, elaboration, and continued use of Standard English.',
    "Evaluate peers' presentations using the AQA Spoken Language criteria and provide constructive, specific feedback.",
  ],
  successCriteria: [
    'I can deliver my presentation with confidence, using vocal variety, eye contact, and purposeful body language.',
    'I can respond to at least two questions by developing my ideas further, using evidence, and maintaining Standard English.',
    "I can evaluate a peer's presentation against the Pass, Merit, and Distinction criteria and provide written feedback with specific improvement suggestions.",
  ],
  keywords: [
    'endorsement',
    'presentation',
    'Standard English',
    'distinction',
    'fluency',
    'spontaneous',
    'evaluation',
    'composure',
  ],
  starterActivity: {
    title: 'Final Preparation and Confidence Building',
    duration: '8 minutes',
    instructions:
      'Students have five minutes of silent, focused preparation time: reviewing notes, practising openings silently, and calming nerves. Teacher then leads a brief whole-class confidence exercise: stand up, stretch, take three deep breaths, and deliver your opening sentence to the person next to you. Teacher reminds students of the assessment criteria, the format (four to five minutes presentation plus two minutes of questions), and the ground rules: respectful listening, supportive body language from the audience, and thoughtful questions. Revisit the peer feedback pledges from Lesson 8.',
    differentiation: {
      support:
        'Students may use prompt cards with up to ten bullet points. Teacher reassures and provides a calm, supportive environment.',
      core: 'Students use minimal notes - a single card with five or fewer bullet points.',
      stretch:
        'Students aim to deliver without any notes, using only their rehearsed memory and confidence.',
    },
    resources: [
      "Students' presentation materials",
      'Prompt card templates',
      'Peer feedback pledges from Lesson 8',
      'Timer',
    ],
  },
  mainActivities: [
    {
      title: 'Presentations - Round 1',
      duration: '21 minutes',
      instructions:
        'Three students deliver their presentations (approximately seven minutes each: four to five minutes presentation plus two minutes of audience questions). The order should be pre-arranged, ideally starting with a confident volunteer to model expectations. After each presentation: teacher selects two or three audience members to ask questions. The speaker responds. Audience members complete the listening framework and write one piece of constructive feedback on a feedback slip, which is collected and given to the speaker. Teacher takes brief assessment notes using the AQA criteria grid. Between presentations, allow 30 seconds for the audience to complete their feedback slips.',
      differentiation: {
        support:
          'Presenting students may use prompt cards. Teacher may ask a pre-arranged "friendly" question to build confidence. Audience members use a simplified feedback form.',
        core: 'Students present with minimal notes and respond to genuine audience questions. Audience use the full listening framework.',
        stretch:
          'Students present from memory and invite challenging questions. Audience write feedback that references the criteria by name.',
      },
      resources: [
        'Timer',
        'AQA criteria grid for teacher assessment',
        'Listening framework for audience',
        'Feedback slips',
        'Simplified feedback form (support tier)',
      ],
    },
    {
      title: 'Presentations - Round 2',
      duration: '21 minutes',
      instructions:
        'Three more students deliver their presentations following the same format. Teacher ensures the questioning is varied - some factual, some challenging, some asking for elaboration. If a student struggles with a question, teacher may offer a gentle prompt: "Could you tell us a bit more about why you chose that particular example?" Continue collecting feedback slips and completing assessment notes. Encourage the audience to maintain focus and respectful listening throughout - this is also being informally assessed.',
      differentiation: {
        support:
          'Teacher may paraphrase a difficult question to help the speaker understand what is being asked.',
        core: 'Students respond to questions independently with developed answers.',
        stretch:
          'Students demonstrate the ability to concede a point gracefully while maintaining their overall argument.',
      },
      resources: ['Timer', 'AQA criteria grid', 'Feedback slips', 'Listening frameworks'],
    },
    {
      title: 'Reflection and Self-Evaluation',
      duration: '5 minutes',
      instructions:
        'All students (including those who have not yet presented) complete a self-evaluation form reflecting on their preparation journey across the ten lessons. Presenters evaluate their own performance against the criteria. Non-presenters identify what they will focus on in their own delivery. All students write one specific target for improvement based on what they have observed or experienced today.',
      differentiation: {
        support:
          'Provide a self-evaluation form with sentence starters and a tick-box criteria checklist.',
        core: 'Students complete the self-evaluation independently with written reflection.',
        stretch:
          'Students write a detailed paragraph evaluating their own performance, referencing specific moments and the criteria.',
      },
      resources: ['Self-evaluation form', 'AQA criteria sheet for reference'],
    },
  ],
  plenaryActivity: {
    title: 'Celebration and Next Steps',
    duration: '5 minutes',
    instructions:
      'Teacher congratulates the presenters and acknowledges the audience\'s supportive listening. Read out two or three anonymised positive feedback comments to celebrate success. Briefly outline the schedule for remaining presentations (if not all students presented today). Remind students that the endorsement grade will appear on their GCSE certificate. Final reflection question: "What is the single most important thing you have learned about spoken language across these ten lessons?" Collect responses as exit tickets.',
    differentiation: {
      support: 'Students select from a list of key takeaways and explain their choice.',
      core: 'Students write their own reflection independently.',
      stretch:
        'Students explain how the skills from this unit will help them beyond the classroom - in interviews, university, or professional life.',
    },
  },
  homework:
    'If you presented today: write a 200-word reflection on your performance, identifying one strength and one area for improvement with a specific plan for how you will develop that skill. If you have not yet presented: complete a final rehearsal and record yourself. Write a self-evaluation based on the recording.',
  worksheetQuestions: [
    {
      question:
        'Reflect on your presentation (or preparation). What was your greatest strength and what would you do differently next time?',
      lines: 6,
      modelAnswer:
        'My greatest strength was my use of evidence - I included three specific statistics that supported my argument about the impact of plastic pollution, and I integrated them naturally into my speech rather than reading them from a list. I also received positive feedback on my opening rhetorical question, which several audience members said immediately made them think about the issue. If I were to do this again, I would focus on improving my eye contact. I was aware that I looked at my notes too frequently during my second point, which broke the connection with my audience. Next time, I would reduce my notes to three key words per point and practise until I could deliver the content from memory, using the cards only as a safety net.',
      marks: 4,
    },
    {
      question:
        'Evaluate a presentation you observed today. Award it a grade (Pass, Merit, or Distinction) and justify your decision with reference to at least three specific criteria.',
      lines: 8,
      modelAnswer:
        "I would award [student's] presentation a Merit. In terms of content, their argument about lowering the voting age was clearly structured with three distinct points, each supported by at least one piece of evidence - this meets the Merit criteria for presenting information and ideas clearly. Their delivery was mostly confident, with good eye contact during the introduction and conclusion, though they relied on their notes more heavily during the middle section, which prevented it from reaching Distinction level. Their use of Standard English was consistent throughout, with no noticeable non-standard features, which meets the criteria at both Merit and Distinction level. However, to achieve a Distinction, they would need to demonstrate more varied and sophisticated use of rhetorical techniques - they used direct address effectively but did not employ other techniques such as tricolon or antithesis. Their responses to questions were adequate but brief; a Distinction-level response would develop ideas further and use evidence spontaneously.",
      marks: 6,
    },
    {
      question:
        'What skills from this Spoken Language unit will be useful to you in the future? Identify at least three situations beyond the classroom where these skills apply.',
      lines: 6,
      modelAnswer:
        'The skills developed in this unit have broad applications beyond GCSE English. First, job interviews require the ability to present ideas clearly, respond to questions under pressure, and use appropriate formal language - all skills practised throughout this unit. Second, university seminars and tutorials involve presenting arguments, supporting them with evidence, and engaging in debate and discussion, directly mirroring the debate and presentation skills covered in Lessons 9 and 10. Third, professional life frequently involves presentations to colleagues, clients, or stakeholders, where the ability to structure an argument, use rhetorical techniques, manage body language, and handle challenging questions is essential for career progression. Even everyday situations - such as making a complaint, negotiating, or speaking at a community event - draw on the same core skills of clear communication, audience awareness, and confident delivery.',
      marks: 4,
    },
    {
      question:
        'Write three pieces of constructive feedback for a speaker whose presentation had strong delivery but weak content. Be specific and actionable.',
      lines: 8,
      modelAnswer:
        '(1) Strength: Your vocal delivery was excellent - you varied your pace effectively, pausing after your key claims to let them register, and your eye contact with the audience was consistent and natural. This created a sense of confidence and authority that immediately engaged the room. (2) Improvement - evidence: Your argument would be significantly strengthened by including specific evidence. For example, when you claimed that "young people are under more pressure than ever," you could support this with a statistic from a recent mental health survey or a specific case study. Without evidence, even a well-delivered claim remains an unsupported assertion. (3) Improvement - counter-argument: Your presentation did not address any opposing viewpoints, which made your argument feel one-sided. Adding a section where you acknowledge the strongest counter-argument and then refute it would demonstrate the balanced, critical thinking associated with Distinction-level work. For example: "Some might argue that... However, this overlooks the fact that..."',
      marks: 6,
    },
  ],
  teacherNotes: [
    'This lesson will likely need to be repeated over two or three sessions to allow all students to present. Plan accordingly.',
    'Create a calm, supportive atmosphere. Anxiety about public speaking is very common, and the classroom environment significantly affects performance.',
    'Record presentations (with student consent) for moderation purposes and for students to review their own performance.',
    'Complete the AQA Spoken Language endorsement record form for each student during or immediately after their presentation.',
    'Feedback slips from the audience can be powerful - give them to students after the lesson as a confidence boost and a source of genuine improvement targets.',
    'Students who are absent on presentation day should be given an alternative slot as soon as possible.',
  ],
  targetedSkills: [
    'Presentation delivery',
    'Responding to questions',
    'Standard English in formal contexts',
    'Peer evaluation',
    'Self-reflection and target-setting',
  ],
}

// ─── Export ─────────────────────────────────────────────────────────────────

export const spokenLanguageLessons: LessonPlan[] = [
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
