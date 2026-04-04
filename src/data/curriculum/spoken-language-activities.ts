export interface OracyActivity {
  id: string;
  title: string;
  yearGroups: string[];
  type: 'debate' | 'discussion' | 'presentation' | 'role-play' | 'storytelling' | 'hot-seating' | 'panel' | 'interview' | 'seminar' | 'spoken-commentary';
  duration: string;
  groupSize: string;
  description: string;
  setupInstructions: string[];
  assessmentFocus: string[];
  linkedCurriculumObjectives: string[];
  differentiation: {
    support: string;
    stretch: string;
  };
}

export interface SpeakingAssessmentCriterion {
  id: string;
  yearGroup: string;
  criterion: string;
  band1: string;
  band2: string;
  band3: string;
  band4: string;
}

export const oracyActivities: OracyActivity[] = [
  // KS3 Activities (12)
  {
    id: 'ks3-oracy-01',
    title: 'Themes Debate: Should We Sympathise with the Antagonist?',
    yearGroups: ['Y7'],
    type: 'debate',
    duration: '50 minutes',
    groupSize: 'Whole class (two teams of 10-15)',
    description: 'Students debate whether the antagonist of the current class text deserves the reader\'s sympathy. Teams research textual evidence and construct structured arguments for a formal Oxford-style debate.',
    setupInstructions: [
      'Assign proposition and opposition teams one lesson in advance.',
      'Provide a brief on Oxford debate format: opening statements (2 min each), floor contributions, closing statements.',
      'Display sentence starters for formal register on the board.',
      'Appoint a student chairperson and two student judges with a simple scoring grid.',
      'Allow 10 minutes at the start of the lesson for teams to finalise notes.'
    ],
    assessmentFocus: [
      'Use of textual evidence to support arguments',
      'Ability to challenge and rebut opposing points',
      'Formal register and appropriate vocabulary',
      'Clarity and coherence of spoken expression'
    ],
    linkedCurriculumObjectives: [
      'Speak confidently and effectively for different purposes and audiences',
      'Use Standard English and subject-specific vocabulary',
      'Respond to and build on the contributions of others'
    ],
    differentiation: {
      support: 'Provide a pre-prepared argument frame with sentence starters ("This proves...", "In contrast...") and a list of key quotations from the text.',
      stretch: 'Challenge students to introduce counter-arguments within their own opening statement and respond to impromptu floor questions without notes.'
    }
  },
  {
    id: 'ks3-oracy-02',
    title: 'Character Hot Seat: Stepping into the Story',
    yearGroups: ['Y7', 'Y8'],
    type: 'hot-seating',
    duration: '40 minutes',
    groupSize: 'Whole class with individual spotlight',
    description: 'One student takes on the role of a key character from the studied text and answers questions from the class in character. Questioners must draw on the text to probe motivations, relationships, and decisions.',
    setupInstructions: [
      'Give the volunteer student 5 minutes to review their character notes before the activity.',
      'Brief the class to prepare at least two questions each, referencing specific moments in the text.',
      'Set up a designated "hot seat" chair at the front of the room.',
      'Prompt questioners to ask follow-up questions rather than moving on too quickly.',
      'Rotate the hot seat character mid-session if time allows.'
    ],
    assessmentFocus: [
      'Sustained character voice and consistency with textual evidence',
      'Quality and specificity of questioning',
      'Ability to infer and extend beyond the literal text',
      'Engagement and active listening'
    ],
    linkedCurriculumObjectives: [
      'Develop imaginative and empathetic responses to texts',
      'Ask well-structured questions to deepen understanding',
      'Listen and respond thoughtfully to others'
    ],
    differentiation: {
      support: 'Provide the hot-seat student with a character fact sheet. Give questioners a prompt card listing possible topics to ask about.',
      stretch: 'Ask the student in the hot seat to justify responses with implicit textual evidence and handle deliberately challenging or contradictory questions.'
    }
  },
  {
    id: 'ks3-oracy-03',
    title: 'Story Circle: Collaborative Oral Narrative',
    yearGroups: ['Y7'],
    type: 'storytelling',
    duration: '30 minutes',
    groupSize: 'Groups of 5-6',
    description: 'Groups co-construct a spoken story in the style of the term\'s text, passing the narrative around the circle. Each student must add at least three sentences before passing on, maintaining continuity of voice, tone, and character.',
    setupInstructions: [
      'Share a style checklist from the studied text (e.g. short punchy sentences, sensory detail, dialogue).',
      'Begin with a shared opening sentence written on a card passed to the first speaker.',
      'Set a soft rule: each speaker must include one stylistic feature from the checklist.',
      'After the circle, groups narrate a condensed version to the class.',
      'Peers identify which stylistic features they heard.'
    ],
    assessmentFocus: [
      'Narrative coherence and continuity across speakers',
      'Conscious use of stylistic features',
      'Fluency and pacing of spoken delivery',
      'Collaborative listening and building on others'
    ],
    linkedCurriculumObjectives: [
      'Write and speak with an awareness of purpose, audience, and form',
      'Develop creative and imaginative uses of language',
      'Collaborate and communicate effectively in groups'
    ],
    differentiation: {
      support: 'Provide a sentence-starter card for each speaker\'s turn. Allow students to pass once before being gently re-prompted.',
      stretch: 'Require students to introduce an unexpected narrative complication on their turn and resolve it within the same contribution.'
    }
  },
  {
    id: 'ks3-oracy-04',
    title: 'Pair Discussion: First Impressions of a New Text',
    yearGroups: ['Y7', 'Y8', 'Y9'],
    type: 'discussion',
    duration: '20 minutes',
    groupSize: 'Pairs',
    description: 'Students read a new extract cold and discuss initial responses with a partner before any teacher-led analysis. The aim is to build confidence in voicing personal responses and to practise exploratory talk.',
    setupInstructions: [
      'Distribute the extract and allow 3 minutes of silent reading.',
      'Post three discussion prompts on the board: What do you notice? What do you feel? What do you wonder?',
      'Set a 10-minute discussion timer; pairs must ensure both voices are heard equally.',
      'Pairs share one insight with the class in a brief whole-group debrief.',
      'Teacher notes recurring observations to shape subsequent analysis.'
    ],
    assessmentFocus: [
      'Willingness to offer tentative and exploratory responses',
      'Building on a partner\'s point rather than simply replacing it',
      'Use of tentative language ("perhaps", "it might be that...")',
      'Identifying language, structure, and form without prompting'
    ],
    linkedCurriculumObjectives: [
      'Respond personally and critically to a range of texts',
      'Participate in structured discussion and exploratory talk',
      'Develop confidence in voicing literary interpretations'
    ],
    differentiation: {
      support: 'Provide a vocabulary card with subject-specific terminology relevant to the extract.',
      stretch: 'Challenge pairs to make a connection to another text studied this year before sharing with the class.'
    }
  },
  {
    id: 'ks3-oracy-05',
    title: 'Group Presentation: Thematic Research Showcase',
    yearGroups: ['Y8'],
    type: 'presentation',
    duration: '60 minutes (including preparation)',
    groupSize: 'Groups of 3-4',
    description: 'Groups research a contextual theme linked to the class text (e.g. social class in Victorian England, the ethics of warfare) and deliver a structured 5-minute presentation to the class, fielding questions afterwards.',
    setupInstructions: [
      'Assign research themes one week in advance and provide access to approved sources.',
      'Require groups to submit a one-page outline the day before.',
      'Each group member must speak for a minimum of one minute.',
      'Display a presentation success criteria on the board during deliveries.',
      'Allocate 2 minutes for audience questions after each presentation.'
    ],
    assessmentFocus: [
      'Organisation and logical sequencing of information',
      'Confident projection and eye contact',
      'Use of subject-specific and contextual vocabulary',
      'Fielding questions clearly and honestly'
    ],
    linkedCurriculumObjectives: [
      'Speak to inform, explain, and describe for a range of audiences',
      'Select and organise information effectively',
      'Use presentational features to enhance communication'
    ],
    differentiation: {
      support: 'Provide a presentation frame with headings (Introduction, Key Points, Evidence, Conclusion). Allow students to use prompt cards.',
      stretch: 'Require students to synthesise perspectives from at least two sources and explain where they agree or disagree with each other.'
    }
  },
  {
    id: 'ks3-oracy-06',
    title: 'Conscience Alley: A Character at the Crossroads',
    yearGroups: ['Y8'],
    type: 'role-play',
    duration: '35 minutes',
    groupSize: 'Whole class (two lines of 10-15)',
    description: 'The class forms two parallel lines. One student walks the "alley" as a character facing a moral dilemma from the text. Students on one side voice reasons to act; students on the other voice reasons to hesitate. The walker then announces their decision.',
    setupInstructions: [
      'Identify a clear moral dilemma from the current text.',
      'Assign sides (for/against action) and give 5 minutes for students to devise their spoken lines.',
      'The walker moves slowly; each pair of students speaks in turn as the walker passes.',
      'After the walk, the class discusses whether the character\'s actual decision in the text matches the verdict.',
      'Repeat with a different student and a second dilemma if time allows.'
    ],
    assessmentFocus: [
      'Maintaining character perspective and voice',
      'Specificity and relevance of spoken contribution',
      'Timing and awareness of the dramatic moment',
      'Reflective discussion after the activity'
    ],
    linkedCurriculumObjectives: [
      'Explore moral and ethical dimensions of texts through spoken response',
      'Develop empathy and perspective-taking',
      'Communicate ideas clearly in a dramatic context'
    ],
    differentiation: {
      support: 'Provide a sentence-starter card for each side. Pair less confident students to speak simultaneously with a partner.',
      stretch: 'Ask the walker to explain their in-character thinking aloud after reaching the end of the alley, then challenge the class to question the reasoning.'
    }
  },
  {
    id: 'ks3-oracy-07',
    title: 'Viewpoint Panel: Different Perspectives on a Social Issue',
    yearGroups: ['Y8', 'Y9'],
    type: 'panel',
    duration: '50 minutes',
    groupSize: 'Panel of 4-5, rest of class as audience',
    description: 'Students represent different stakeholder viewpoints on a social issue raised by the class text (e.g. poverty, identity, justice). A student moderator facilitates the panel while the audience poses questions.',
    setupInstructions: [
      'Assign stakeholder roles at least two days before (e.g. politician, journalist, community member, academic).',
      'Each panellist prepares a 90-second opening statement and three anticipated questions.',
      'Train the moderator to prompt quieter panellists and manage time.',
      'Audience members each prepare one question in advance.',
      'Close with a 5-minute whole-class reflection on whose view was most persuasive and why.'
    ],
    assessmentFocus: [
      'Convincingly maintaining a distinct viewpoint',
      'Responding to questions with relevant evidence',
      'Listening and adapting in response to other panellists',
      'Quality of moderation and audience questioning'
    ],
    linkedCurriculumObjectives: [
      'Understand how context and perspective shape meaning',
      'Speak persuasively and with awareness of audience',
      'Critically engage with the views of others'
    ],
    differentiation: {
      support: 'Provide a viewpoint brief summarising the stakeholder\'s likely concerns and vocabulary. Give audience members a question frame.',
      stretch: 'Require panellists to respond directly to another panellist\'s point before answering a question, using formal parliamentary register.'
    }
  },
  {
    id: 'ks3-oracy-08',
    title: 'Debate: The Author\'s Message -- Relevant or Outdated?',
    yearGroups: ['Y9'],
    type: 'debate',
    duration: '50 minutes',
    groupSize: 'Two teams of 8-12',
    description: 'Students debate whether the central message of the studied text remains relevant for contemporary readers. Teams must engage with both the text and modern context, citing specific evidence from both.',
    setupInstructions: [
      'Introduce the motion one week in advance.',
      'Provide a brief on how to construct a rebuttal: summarise, challenge, and replace.',
      'Use a structured format: opening (3 min each), two rounds of floor contributions, closing (2 min each).',
      'A panel of three students scores clarity, evidence, and rebuttal strength.',
      'Debrief focuses on which argument was best supported by textual evidence.'
    ],
    assessmentFocus: [
      'Integration of textual and contextual evidence',
      'Quality and precision of rebuttals',
      'Sustained formal register throughout',
      'Logical structure of argument'
    ],
    linkedCurriculumObjectives: [
      'Analyse writers\' purposes and contextual influences',
      'Construct and sustain a reasoned argument',
      'Engage critically and respectfully with opposing views'
    ],
    differentiation: {
      support: 'Provide a rebuttal frame ("My opponent claims... however, the evidence shows...") and pre-selected quotations.',
      stretch: 'Require students to concede a point gracefully before strengthening their overall position, demonstrating nuanced argumentation.'
    }
  },
  {
    id: 'ks3-oracy-09',
    title: 'Spoken Commentary: Close Reading Aloud',
    yearGroups: ['Y9'],
    type: 'spoken-commentary',
    duration: '40 minutes',
    groupSize: 'Individual (within small groups of 4)',
    description: 'Students deliver a 3-minute spoken close-reading commentary on a short extract, walking the group through language choices, structural effects, and overall impact without reading from pre-written notes.',
    setupInstructions: [
      'Distribute extracts one lesson in advance; students annotate for homework.',
      'Explain the difference between reading from notes and speaking from understanding.',
      'Model a brief commentary explicitly showing how to move from language to effect to meaning.',
      'Each student delivers their commentary to their small group.',
      'Group gives one "glow" and one "grow" point.'
    ],
    assessmentFocus: [
      'Fluency and confidence without over-reliance on written notes',
      'Accurate use of analytical vocabulary',
      'Movement from language observation to interpreted meaning',
      'Ability to sustain a coherent line of argument'
    ],
    linkedCurriculumObjectives: [
      'Analyse language, form, and structure with understanding of effect',
      'Communicate analytical ideas clearly in spoken form',
      'Develop independent critical thinking'
    ],
    differentiation: {
      support: 'Allow students to use an annotated copy of the extract. Provide an analytical vocabulary mat.',
      stretch: 'Students must link their extract to the wider text and make a contextual connection within their 3 minutes.'
    }
  },
  {
    id: 'ks3-oracy-10',
    title: 'Narrative Storytelling: Oral Traditions and Personal Voices',
    yearGroups: ['Y7'],
    type: 'storytelling',
    duration: '45 minutes',
    groupSize: 'Groups of 5-6 for practice, whole class for sharing',
    description: 'Students craft and deliver a 2-minute original spoken story inspired by a theme or character archetype from the class text. The focus is on vocal variety, narrative structure, and engaging an audience.',
    setupInstructions: [
      'Share examples of oral storytelling traditions (griots, fables, Norse sagas) in a brief introduction.',
      'Students plan their story using a three-part structure card: beginning (hook), middle (complication), end (resolution).',
      'Rehearsal in small groups with peer feedback on voice, pace, and clarity.',
      'Volunteers share with the whole class.',
      'Class identifies techniques used (repetition, direct address, change of pace).'
    ],
    assessmentFocus: [
      'Narrative structure and coherence',
      'Vocal variety -- pace, pause, volume, pitch',
      'Engagement of audience through language choices',
      'Confidence and eye contact'
    ],
    linkedCurriculumObjectives: [
      'Speak imaginatively and creatively for a range of purposes',
      'Use language to entertain and engage an audience',
      'Understand features of spoken narrative'
    ],
    differentiation: {
      support: 'Provide a story planner with sentence starters for each section and a list of descriptive phrases to choose from.',
      stretch: 'Students incorporate a stylistic device from a studied text (e.g. non-linear structure, unreliable narrator perspective) and explain the effect to the group after delivering.'
    }
  },
  {
    id: 'ks3-oracy-11',
    title: 'Discussion Circle: What Does the Poem Leave Out?',
    yearGroups: ['Y8', 'Y9'],
    type: 'discussion',
    duration: '35 minutes',
    groupSize: 'Groups of 6-8',
    description: 'Students engage in a structured discussion exploring the gaps, silences, and implied meanings in a studied poem. The focus is on inference, building on contributions, and moving the discussion forward without teacher intervention.',
    setupInstructions: [
      'Introduce the concept of "unsaid meaning" with a brief example.',
      'Each group appoints a rotating facilitator who keeps discussion balanced.',
      'Post three ground rules: no interrupting, build on the last point, use the text.',
      'Allow 20 minutes of independent group discussion.',
      'Each group reports one key insight to the class and explains how the group reached it.'
    ],
    assessmentFocus: [
      'Quality of inference and textual grounding',
      'Facilitation skills and turn management',
      'Building constructively on others\' contributions',
      'Movement from observation to interpretation'
    ],
    linkedCurriculumObjectives: [
      'Explore implicit and explicit meaning in poetry',
      'Engage in purposeful group discussion with increasing independence',
      'Develop critical reading and speaking skills together'
    ],
    differentiation: {
      support: 'Provide three inference question prompts to get the group started if discussion stalls.',
      stretch: 'Challenge groups to consider how a reader from a different cultural background might interpret the poem\'s silences differently.'
    }
  },
  {
    id: 'ks3-oracy-12',
    title: 'Role-Play Interview: Meeting the Writer',
    yearGroups: ['Y9'],
    type: 'interview',
    duration: '40 minutes',
    groupSize: 'Pairs (one interviewer, one as author)',
    description: 'One student plays the role of the studied author; the other plays a journalist. The journalist must draw on knowledge of the text, context, and the author\'s life to ask questions that probe the writer\'s choices and intentions.',
    setupInstructions: [
      'Provide a research brief on the author and their context in advance.',
      'The "author" prepares by reviewing the text and biographical notes.',
      'The "journalist" prepares a list of at least six questions, moving from factual to analytical.',
      'Pairs perform in front of another pair for peer assessment.',
      'Whole-class debrief identifies the most insightful questions and responses.'
    ],
    assessmentFocus: [
      'Quality and depth of questions asked',
      'Accuracy and plausibility of responses in character',
      'Integration of contextual and textual knowledge',
      'Formal interview register and professional conduct'
    ],
    linkedCurriculumObjectives: [
      'Understand authorial intent and contextual influences on a text',
      'Develop questioning skills and critical thinking',
      'Use formal spoken register for a specific purpose and audience'
    ],
    differentiation: {
      support: 'Provide a question frame with stems ("What were you trying to convey when...", "How did your context influence...") and a context summary sheet.',
      stretch: 'Students playing the author must respond to unexpected follow-up questions with plausible, evidence-based answers, demonstrating sophisticated synthesis.'
    }
  },

  // IGCSE Activities (8)
  {
    id: 'igcse-oracy-01',
    title: 'Formal Individual Presentation: Text and Context',
    yearGroups: ['Y10'],
    type: 'presentation',
    duration: '60 minutes (10 min per student, shared across sessions)',
    groupSize: 'Individual presentation to whole class',
    description: 'Students deliver a structured 8-10 minute individual presentation arguing a critical thesis about the way context shapes the studied IGCSE literature text. The presentation must include a visual aid and a brief bibliography.',
    setupInstructions: [
      'Assign topics two weeks in advance (e.g. how gender, class, or power is constructed in the text).',
      'Students submit a 150-word plan for teacher feedback before the presentation.',
      'Provide the IGCSE speaking assessment criteria so students understand expectations.',
      'Each presentation is followed by a 2-minute question-and-answer session from the class.',
      'Teacher completes an assessment grid during each presentation.'
    ],
    assessmentFocus: [
      'Clarity and ambition of critical thesis',
      'Organisation and logical development of argument',
      'Precise use of literary and contextual terminology',
      'Confident delivery with appropriate visual support'
    ],
    linkedCurriculumObjectives: [
      'Edexcel IGCSE Speaking and Listening: communicate clearly and effectively',
      'Develop and sustain a critical argument',
      'Select and deploy evidence from literary texts'
    ],
    differentiation: {
      support: 'Provide a presentation structure template and a terminology bank. Allow the use of full notes initially.',
      stretch: 'Require students to engage with a critical perspective from secondary reading and either support or challenge it within their presentation.'
    }
  },
  {
    id: 'igcse-oracy-02',
    title: 'Socratic Seminar: The Ethics of Power in Literature',
    yearGroups: ['Y10', 'Y11'],
    type: 'seminar',
    duration: '55 minutes',
    groupSize: 'Inner circle of 8, outer circle observing and taking notes',
    description: 'An inner circle of students conducts a Socratic seminar on the theme of power in the studied text, driven entirely by student questions. The outer circle observes, tracks the quality of contributions, and then joins for a final whole-group synthesis.',
    setupInstructions: [
      'Each participant prepares two text-based questions (one open, one probing) before the seminar.',
      'Set the rule: no hand-raising; students manage turn-taking respectfully.',
      'Outer circle observers record: who built on a point, who introduced new evidence, who asked a pivotal question.',
      'After 35 minutes, inner and outer circle swap roles for a 10-minute extension discussion.',
      'Close with a 10-minute written reflection: "What changed your thinking today?"'
    ],
    assessmentFocus: [
      'Quality of opening questions and follow-up probing',
      'Ability to build on and challenge contributions with evidence',
      'Sustained engagement and independent leadership of discussion',
      'Synthesis and movement towards deeper understanding'
    ],
    linkedCurriculumObjectives: [
      'Engage in extended independent discussion of literary themes',
      'Develop critical thinking through dialogue',
      'Evaluate the ideas of others and revise own interpretations'
    ],
    differentiation: {
      support: 'Give less confident students a "contribution card" with three low-stakes entry points (ask for clarification, agree with evidence, offer a new example).',
      stretch: 'Challenge students to introduce a philosophical or theoretical framework (e.g. Marxist reading, feminist lens) to extend the discussion beyond the text itself.'
    }
  },
  {
    id: 'igcse-oracy-03',
    title: 'Mock Interview: Careers and Personal Statement Practice',
    yearGroups: ['Y11'],
    type: 'interview',
    duration: '45 minutes',
    groupSize: 'Pairs (rotating)',
    description: 'Timed to coincide with early post-16 planning, students participate in mock interviews in which they discuss their language and literature studies, explaining their engagement with specific texts and skills gained. Structured around likely personal statement and interview questions.',
    setupInstructions: [
      'Distribute a list of 12 interview questions in advance.',
      'Students prepare notes but are assessed on spoken fluency, not written preparation.',
      'Pairs take turns as interviewer and interviewee, each session lasting 8 minutes.',
      'Interviewers score against three criteria: relevance, specificity, confidence.',
      'Class shares the most effective responses as models.'
    ],
    assessmentFocus: [
      'Fluency and naturalness in formal spoken interaction',
      'Specific and detailed reference to texts studied',
      'Confident self-advocacy and communication of enthusiasm',
      'Active listening and responsive answers'
    ],
    linkedCurriculumObjectives: [
      'Use spoken language effectively for a formal purpose and audience',
      'Communicate personal engagement with literature',
      'Develop skills of self-presentation and persuasive communication'
    ],
    differentiation: {
      support: 'Provide sentence starters for common question types ("A text that challenged me was... because...") and a list of texts with key discussion points.',
      stretch: 'Students must answer a surprise follow-up question from the interviewer without preparation and link their response to a broader theme or idea.'
    }
  },
  {
    id: 'igcse-oracy-04',
    title: 'Panel Discussion: Comparing Representations Across Texts',
    yearGroups: ['Y11'],
    type: 'panel',
    duration: '55 minutes',
    groupSize: 'Panel of 5, rest of class as audience and questioners',
    description: 'Each panellist represents one IGCSE text studied this year and argues for its relevance, complexity, or literary merit. The moderator facilitates comparisons between texts and the audience presses for deeper analysis.',
    setupInstructions: [
      'Assign texts to panellists one week in advance.',
      'Each panellist prepares a 2-minute opening argument: "My text is the most significant because..."',
      'Train the moderator to draw comparisons: "How does that differ from what we heard about X?"',
      'Audience prepares cross-text questions that require panellists to engage with more than one text.',
      'Close with a vote on the most compelling argument, with justification.'
    ],
    assessmentFocus: [
      'Depth of knowledge of the assigned text',
      'Ability to make cross-text comparisons under pressure',
      'Persuasive and well-structured spoken argument',
      'Engagement with and adaptation to the moderator and audience'
    ],
    linkedCurriculumObjectives: [
      'Compare and evaluate texts with critical awareness',
      'Speak persuasively with accurate literary vocabulary',
      'Respond to questions with relevant and developed answers'
    ],
    differentiation: {
      support: 'Provide a text summary card with key themes, characters, and quotations for each panellist.',
      stretch: 'Require students to acknowledge and respond to at least one weakness in their text\'s representation before concluding their argument.'
    }
  },
  {
    id: 'igcse-oracy-05',
    title: 'Persuasive Speech: The Motion from the Text',
    yearGroups: ['Y10'],
    type: 'presentation',
    duration: '50 minutes',
    groupSize: 'Individual (5 per session)',
    description: 'Students deliver a 4-minute persuasive speech on a motion drawn directly from the literature or language paper themes (e.g. "This house believes that ambition is always destructive"). The speech must blend rhetorical technique with textual reference.',
    setupInstructions: [
      'Teach or review key rhetorical devices (tricolon, anaphora, rhetorical question, direct address) in the preceding lesson.',
      'Students submit a device-annotated script for teacher feedback before delivering without the script.',
      'Set the audience task: identify and record every rhetorical device heard.',
      'Post-speech discussion: which device was most effective and why?',
      'Students complete a brief self-evaluation grid immediately after their speech.'
    ],
    assessmentFocus: [
      'Effective deployment of rhetorical devices',
      'Integration of literary evidence into spoken persuasion',
      'Confident and varied vocal delivery',
      'Clear and engaging structure (hook, development, conclusion)'
    ],
    linkedCurriculumObjectives: [
      'Write and speak to argue and persuade with craft',
      'Use language choices deliberately for effect',
      'Understand the relationship between written and spoken language'
    ],
    differentiation: {
      support: 'Provide a speech skeleton with prompts for where to insert each rhetorical device and a model annotated speech.',
      stretch: 'Students must use a sustained extended metaphor or conceit across the whole speech, tying the literary reference to each main argument point.'
    }
  },
  {
    id: 'igcse-oracy-06',
    title: 'Hot Seat: Author vs. Critic',
    yearGroups: ['Y10', 'Y11'],
    type: 'hot-seating',
    duration: '45 minutes',
    groupSize: 'Two hot seats simultaneously, class split in two groups',
    description: 'One student plays the studied author while another plays a named literary critic. Both face questions from their group simultaneously. The twist: questions can be directed to either and both must be ready to engage with the full range of interpretations.',
    setupInstructions: [
      'Provide a brief biography of the author and a simplified critic\'s reading relevant to the text.',
      'The "author" defends intentional choices; the "critic" applies their interpretive framework.',
      'The two groups then come together and each "author" and "critic" speaks briefly to the combined class.',
      'Class votes on whose interpretation they found most convincing with a written justification.',
      'Teacher uses justifications as an exit-ticket assessment.'
    ],
    assessmentFocus: [
      'Accurate representation of authorial or critical perspective',
      'Quality of questions from the class',
      'Ability to sustain a coherent interpretive position',
      'Engagement with literary critical terminology'
    ],
    linkedCurriculumObjectives: [
      'Understand the role of authorial intent and critical interpretation',
      'Engage with multiple readings of a text',
      'Develop analytical and evaluative spoken response'
    ],
    differentiation: {
      support: 'Provide both "author" and "critic" students with a bullet-point brief covering five likely question areas and suggested responses.',
      stretch: 'The critic must engage with the author\'s perspective and either acknowledge its validity or explain why their framework offers a more revealing reading.'
    }
  },
  {
    id: 'igcse-oracy-07',
    title: 'Discussion: Unseen Passage First Responses',
    yearGroups: ['Y10', 'Y11'],
    type: 'discussion',
    duration: '30 minutes',
    groupSize: 'Groups of 4',
    description: 'Students receive an unseen non-fiction passage (mirroring the Language Paper format) and, before any written work, conduct a structured group discussion of purpose, audience, language choices, and writer\'s viewpoint. This builds spoken analysis habits that feed directly into written responses.',
    setupInstructions: [
      'Distribute the passage and allow 4 minutes of silent reading and annotation.',
      'Post four discussion questions on the board: What is the purpose? Who is the audience? What tone is established? Which three language choices are most significant?',
      'Groups must reach a consensus on each question and appoint a spokesperson.',
      'Spokespeople share conclusions in a brief round-robin.',
      'Teacher annotates differences in group findings to model the value of multiple perspectives.'
    ],
    assessmentFocus: [
      'Analytical vocabulary and precision in spoken language analysis',
      'Reasoning and justification of interpretations',
      'Collaborative consensus-building',
      'Connection between spoken analysis and written preparation'
    ],
    linkedCurriculumObjectives: [
      'Analyse purpose, audience, and language in non-fiction texts',
      'Use appropriate analytical vocabulary fluently',
      'Develop reading-to-speaking-to-writing habits of mind'
    ],
    differentiation: {
      support: 'Provide a language analysis prompt mat with terminology and example sentence structures.',
      stretch: 'Groups must identify where the writer\'s viewpoint is implicit rather than explicit and explain how structure reinforces this.'
    }
  },
  {
    id: 'igcse-oracy-08',
    title: 'Structured Debate: Language Change -- Cause for Concern?',
    yearGroups: ['Y10'],
    type: 'debate',
    duration: '50 minutes',
    groupSize: 'Two teams of 8-12',
    description: 'Students debate the motion "Language change is a threat to clarity and cultural cohesion." Teams must use evidence from Language Paper 2 non-fiction sources and their own knowledge of linguistic change to construct arguments.',
    setupInstructions: [
      'Distribute one pro-change and one anti-change reading to each team in advance.',
      'Require teams to identify at least three pieces of evidence from their reading.',
      'Use a British Parliamentary debate format adapted for school: proposition, opposition, two speakers each, floor open, summaries.',
      'Students in the audience must prepare at least one floor contribution.',
      'Post-debate reflection: write one paragraph connecting the debate to the Language Paper non-fiction skills.'
    ],
    assessmentFocus: [
      'Evidence-based argumentation using non-fiction sources',
      'Formal register sustained throughout',
      'Effective rebuttal techniques',
      'Audience engagement and floor contributions'
    ],
    linkedCurriculumObjectives: [
      'Understand how language use varies with context and over time',
      'Argue persuasively using evidence from non-fiction sources',
      'Develop formal spoken register for academic contexts'
    ],
    differentiation: {
      support: 'Provide a summary of the key arguments from each reading with quotations highlighted. Offer a rebuttal formula card.',
      stretch: 'Students must cite a specific historical or contemporary linguistic example not mentioned in the provided reading to support their case.'
    }
  },

  // IAL Activities (5)
  {
    id: 'ial-oracy-01',
    title: 'Academic Seminar: Close Critical Reading of Unseen Prose',
    yearGroups: ['Y12'],
    type: 'seminar',
    duration: '60 minutes',
    groupSize: 'Seminar group of 8-12',
    description: 'Students engage in a university-style seminar on an unseen prose extract, developing the kind of independent analytical dialogue expected at A Level and beyond. The teacher acts as a facilitator, intervening only to redirect or deepen the discussion.',
    setupInstructions: [
      'Distribute the extract and three framing questions one day in advance.',
      'Students annotate independently and bring three discussion points of their own.',
      'Open the seminar with a student-posed question rather than a teacher question.',
      'Teacher logs instances of: introducing new evidence, building on another\'s point, revising a view, and asking a probing question.',
      'Close with a 10-minute written response: refine or revise your initial annotation in light of the discussion.'
    ],
    assessmentFocus: [
      'Independence and initiative in directing the discussion',
      'Precision of literary and linguistic critical vocabulary',
      'Ability to revise and develop interpretations in response to others',
      'Sustained intellectual rigour across the full session'
    ],
    linkedCurriculumObjectives: [
      'Edexcel IAL Unit 1/2: close reading and independent critical analysis',
      'Develop academic register appropriate for A Level and higher education',
      'Engage with competing interpretations and evaluate their validity'
    ],
    differentiation: {
      support: 'Provide a glossary of critical terminology likely to arise and a model annotation of the first paragraph.',
      stretch: 'Students must locate a moment in the text where the narrative or lyric "I" is unstable or unreliable and explain its structural and ideological implications.'
    }
  },
  {
    id: 'ial-oracy-02',
    title: 'Linguistic Data Presentation: Spoken Language Investigation',
    yearGroups: ['Y12'],
    type: 'presentation',
    duration: '70 minutes (shared across two lessons)',
    groupSize: 'Individual (5 minutes each)',
    description: 'Students present findings from their spoken language mini-investigation, explaining methodology, data analysis, and conclusions. This prepares them for the non-examined assessment component and develops academic presentation skills.',
    setupInstructions: [
      'Students must prepare a data visual (graph, frequency table, or transcript excerpt) to display during their presentation.',
      'Provide a presentation structure: context, methodology, data analysis (linguistic frameworks), conclusion, limitations.',
      'Each presentation is followed by two peer questions focused on methodology or interpretation.',
      'Teacher provides written feedback within one week using a set of assessment criteria.',
      'Class builds a shared glossary of frameworks used across all presentations.'
    ],
    assessmentFocus: [
      'Accurate application of linguistic frameworks (phonology, lexis, syntax, discourse, pragmatics)',
      'Clarity in explaining methodology and data',
      'Critical evaluation of findings including limitations',
      'Confident academic register and handling of questions'
    ],
    linkedCurriculumObjectives: [
      'Edexcel IAL: apply linguistic frameworks to spoken language data',
      'Conduct and communicate independent linguistic investigation',
      'Develop academic and research presentation skills'
    ],
    differentiation: {
      support: 'Provide a presentation checklist aligned to the assessment criteria and a model structure from a sample investigation.',
      stretch: 'Students must situate their findings within broader sociolinguistic theory (e.g. Grice\'s Maxims, Lakoff\'s politeness principles) and evaluate whether their data supports or challenges the theory.'
    }
  },
  {
    id: 'ial-oracy-03',
    title: 'Research Defence: Coursework Viva',
    yearGroups: ['Y13'],
    type: 'seminar',
    duration: '15 minutes per student (scheduled over several lessons)',
    groupSize: 'Individual with teacher and one peer examiner',
    description: 'Students defend their coursework argument in a structured viva format, explaining their critical choices, responding to challenges, and discussing alternative interpretations. Designed to consolidate coursework understanding ahead of final submission.',
    setupInstructions: [
      'Provide the viva question bank two weeks in advance (students should not know which questions will be asked).',
      'Train the peer examiner to ask at least one counter-interpretation question.',
      'The student may refer to their draft but must speak rather than read.',
      'Teacher notes areas of confident understanding and areas requiring further development in the written work.',
      'Student completes a self-evaluation form immediately after the viva.'
    ],
    assessmentFocus: [
      'Depth and security of coursework argument',
      'Ability to articulate and justify critical decisions under questioning',
      'Flexibility in engaging with alternative interpretations',
      'Academic register and intellectual confidence'
    ],
    linkedCurriculumObjectives: [
      'Edexcel IAL Unit 3/4: independent critical study and written coursework',
      'Demonstrate ownership and depth of analytical argument',
      'Prepare for higher education assessment formats'
    ],
    differentiation: {
      support: 'Allow the student to bring a one-page summary of their main argument and key evidence. Begin with the question they are most confident about.',
      stretch: 'The peer examiner is given a specific critical perspective that challenges the student\'s argument and must press the student to engage with it substantively.'
    }
  },
  {
    id: 'ial-oracy-04',
    title: 'Analytical Discussion: Comparative Frameworks Across Texts',
    yearGroups: ['Y13'],
    type: 'discussion',
    duration: '60 minutes',
    groupSize: 'Groups of 4-5',
    description: 'Students engage in a structured analytical discussion comparing how two or more IAL texts handle a shared literary concern (e.g. the representation of time, narrative perspective, or the politics of language). Groups must reach a substantiated comparative conclusion.',
    setupInstructions: [
      'Assign two texts from the IAL set for comparison and a focusing lens in advance.',
      'Each student prepares three comparative points, each supported by a close textual reference.',
      'Groups discuss, challenge, and refine points collaboratively.',
      'Each group produces a spoken 3-minute summary of their comparative argument for the class.',
      'Class votes on the most intellectually ambitious comparison and explains why.'
    ],
    assessmentFocus: [
      'Quality and subtlety of comparative analysis',
      'Grounding of comparison in specific textual evidence',
      'Use of a critical or theoretical lens to frame comparison',
      'Collaborative refinement of ideas through dialogue'
    ],
    linkedCurriculumObjectives: [
      'Edexcel IAL: comparative critical analysis across texts',
      'Apply critical and theoretical frameworks to literary comparison',
      'Develop complex and nuanced argument through dialogue'
    ],
    differentiation: {
      support: 'Provide a comparison framework template and a list of critical lenses with brief explanations.',
      stretch: 'Students must evaluate the limitations of their chosen lens and suggest what a different critical approach would reveal about the texts.'
    }
  },
  {
    id: 'ial-oracy-05',
    title: 'Academic Panel: Current Debates in Language and Literature',
    yearGroups: ['Y12', 'Y13'],
    type: 'panel',
    duration: '70 minutes',
    groupSize: 'Panel of 5, rest of sixth form as audience',
    description: 'Upper sixth students present and defend positions on live academic debates relevant to the IAL course (e.g. "Is the death of the author still a useful concept?", "Does corpus linguistics threaten traditional literary analysis?"). The panel format mirrors academic conference discussions.',
    setupInstructions: [
      'Assign debate positions and provide two relevant academic readings per panellist two weeks in advance.',
      'Each panellist delivers a 4-minute position statement, citing secondary reading.',
      'Moderator facilitates cross-panellist dialogue before opening to audience questions.',
      'Audience questions must reference at least one text studied on the course.',
      'Session concludes with each panellist revising or confirming their position in one sentence, with justification.'
    ],
    assessmentFocus: [
      'Engagement with secondary critical and theoretical reading',
      'Ability to sustain a nuanced academic position under questioning',
      'Integration of course texts into broader literary and linguistic debate',
      'Register, precision, and confidence in academic spoken discourse'
    ],
    linkedCurriculumObjectives: [
      'Edexcel IAL: critical and theoretical engagement with literary and linguistic study',
      'Communicate complex ideas in formal academic contexts',
      'Synthesise primary and secondary sources in spoken argument'
    ],
    differentiation: {
      support: 'Provide a structured position paper template and allow the student to open with a pre-prepared statement before fielding questions.',
      stretch: 'Students must identify a tension or contradiction within their own secondary reading and explain how they have resolved it in their own position.'
    }
  }
];

export const speakingAssessmentCriteria: SpeakingAssessmentCriterion[] = [
  {
    id: 'sac-y7-01',
    yearGroup: 'Y7',
    criterion: 'Clarity and fluency of spoken expression',
    band1: 'Speech is hesitant and sometimes unclear; frequent reliance on filler words; limited vocabulary range.',
    band2: 'Speech is generally clear with some hesitation; vocabulary is adequate but not varied; occasional use of informal register.',
    band3: 'Speech is clear and mostly fluent; vocabulary is varied and mostly appropriate; register is generally maintained.',
    band4: 'Speech is consistently clear, fluent, and engaging; vocabulary is precise and well-chosen; register is fully controlled throughout.'
  },
  {
    id: 'sac-y7-02',
    yearGroup: 'Y7',
    criterion: 'Use of textual evidence in spoken response',
    band1: 'References to the text are vague or inaccurate; unable to recall specific detail.',
    band2: 'Some textual references made; evidence is relevant but loosely connected to the point being made.',
    band3: 'Textual evidence is selected with reasonable judgement and clearly linked to the point being made.',
    band4: 'Evidence is precisely chosen and embedded fluently into spoken argument; the link between evidence and meaning is explicitly explained.'
  },
  {
    id: 'sac-y7-03',
    yearGroup: 'Y7',
    criterion: 'Listening and responding to others',
    band1: 'Little evidence of active listening; responses do not connect to what others have said.',
    band2: 'Some engagement with others\' contributions; occasionally builds on what was said.',
    band3: 'Demonstrates active listening; builds on others\' contributions with reasonable consistency.',
    band4: 'Consistently and perceptively builds on, challenges, or extends the contributions of others, moving the discussion forward.'
  },
  {
    id: 'sac-y8-01',
    yearGroup: 'Y8',
    criterion: 'Organisation and structure of extended spoken contribution',
    band1: 'Contributions are unstructured and difficult to follow; no clear beginning, development, or conclusion.',
    band2: 'Some attempt at structure; main point is identifiable but development is limited.',
    band3: 'Contribution is mostly well-organised with a clear main point, developed argument, and a sense of conclusion.',
    band4: 'Contribution is confidently structured; argument develops logically and purposefully towards a clear, well-supported conclusion.'
  },
  {
    id: 'sac-y8-02',
    yearGroup: 'Y8',
    criterion: 'Use of formal register and subject-specific vocabulary',
    band1: 'Predominantly informal register; subject-specific vocabulary absent or incorrectly used.',
    band2: 'Some use of formal register; limited subject-specific vocabulary; occasional lapses into informal speech.',
    band3: 'Formal register is maintained for most of the contribution; subject-specific vocabulary is used accurately.',
    band4: 'Formal register is consistently and confidently maintained; subject-specific vocabulary is used precisely and with evident understanding.'
  },
  {
    id: 'sac-y8-03',
    yearGroup: 'Y8',
    criterion: 'Empathy and perspective-taking in role-play and hot-seating',
    band1: 'Limited ability to sustain a character or perspective; responses revert to personal opinion.',
    band2: 'Some ability to adopt a viewpoint; character or perspective sustained inconsistently.',
    band3: 'Character or perspective is maintained with reasonable consistency; responses are plausible and text-informed.',
    band4: 'Character or perspective is sustained convincingly throughout; responses are nuanced, text-informed, and demonstrate genuine empathy and understanding.'
  },
  {
    id: 'sac-y9-01',
    yearGroup: 'Y9',
    criterion: 'Quality of analytical spoken commentary',
    band1: 'Observations about language are superficial or feature-spotting only; effect is not explained.',
    band2: 'Language features are identified and some attempt made to explain effect; analysis is underdeveloped.',
    band3: 'Language features are identified and effects are explained with reasonable precision; some movement towards discussing meaning.',
    band4: 'Language features are analysed with precision and insight; effect and meaning are explored in a sustained and nuanced way.'
  },
  {
    id: 'sac-y9-02',
    yearGroup: 'Y9',
    criterion: 'Construction and defence of an argument',
    band1: 'Argument is unclear or self-contradictory; little ability to respond to challenge.',
    band2: 'Argument has a discernible position but is not well-developed; some ability to defend a point when prompted.',
    band3: 'Argument is clearly stated and reasonably well-supported; can respond to challenge with relevant points.',
    band4: 'Argument is coherent, well-evidenced, and confidently defended; acknowledges counter-arguments and responds to them with skill.'
  },
  {
    id: 'sac-y10-01',
    yearGroup: 'Y10',
    criterion: 'Deployment of rhetorical techniques in persuasive speech',
    band1: 'Rhetorical techniques are absent or used inappropriately; little sense of conscious crafting.',
    band2: 'One or two rhetorical techniques are used but their effect is limited; delivery does not always support the technique.',
    band3: 'A range of rhetorical techniques is used with some purposefulness; most contribute to the persuasive impact of the speech.',
    band4: 'Rhetorical techniques are deployed with sophistication and clear intentionality; delivery and language choices combine to create a convincingly persuasive performance.'
  },
  {
    id: 'sac-y10-02',
    yearGroup: 'Y10',
    criterion: 'Integration of literary evidence into spoken argument',
    band1: 'Literary references are absent or used as general plot summary without analytical connection.',
    band2: 'Some literary evidence is included; connection to the argument is present but undeveloped.',
    band3: 'Literary evidence is selected thoughtfully and linked to the argument with reasonable clarity.',
    band4: 'Literary evidence is precisely chosen and integrated fluently into the argument; the analytical significance is fully and perceptively explained.'
  },
  {
    id: 'sac-y11-01',
    yearGroup: 'Y11',
    criterion: 'Comparative analysis across texts in spoken form',
    band1: 'Comparison is superficial or focuses only on surface similarities; no analytical framework evident.',
    band2: 'Some comparative points are made; connection between texts is stated but not fully developed analytically.',
    band3: 'Comparative analysis is mostly developed and grounded in textual evidence; the significance of similarities and differences is explored.',
    band4: 'Comparative analysis is perceptive and sustained; differences and similarities are explored with analytical precision and linked to theme, form, or context.'
  },
  {
    id: 'sac-y11-02',
    yearGroup: 'Y11',
    criterion: 'Questioning and discussion technique in seminars',
    band1: 'Questions are closed or do not advance the discussion; limited engagement with others\' responses.',
    band2: 'Questions are generally relevant; some attempt to develop the discussion through probing follow-up.',
    band3: 'Questions are purposeful and tend to deepen the discussion; follow-up probing is mostly effective.',
    band4: 'Questions are incisive and consistently open up new dimensions of the discussion; follow-up probing is precise and intellectually ambitious.'
  },
  {
    id: 'sac-y12-01',
    yearGroup: 'Y12',
    criterion: 'Application of linguistic frameworks in spoken analysis',
    band1: 'Linguistic frameworks are not applied or are applied inaccurately; analysis remains at surface level.',
    band2: 'One or two frameworks are applied with some accuracy; analysis is underdeveloped or inconsistently framed.',
    band3: 'A range of frameworks is applied accurately and the findings are used to draw relevant analytical conclusions.',
    band4: 'Multiple frameworks are applied with confidence and precision; findings are synthesised into a coherent and sophisticated analytical argument.'
  },
  {
    id: 'sac-y13-01',
    yearGroup: 'Y13',
    criterion: 'Engagement with critical and theoretical perspectives in academic discussion',
    band1: 'No reference to critical or theoretical perspectives; discussion remains at the level of personal response.',
    band2: 'Critical perspectives are mentioned but not applied to the text; theoretical frameworks are named but not used analytically.',
    band3: 'Critical or theoretical perspectives are applied to the text with reasonable accuracy and used to develop the discussion.',
    band4: 'Critical and theoretical perspectives are applied with precision and intellectual confidence; their implications for the text are explored with nuance and evaluated critically.'
  },
  {
    id: 'sac-y13-02',
    yearGroup: 'Y13',
    criterion: 'Independence and intellectual confidence in seminar and viva contexts',
    band1: 'Student relies heavily on notes or teacher prompts; minimal ability to develop ideas independently under questioning.',
    band2: 'Some independent contribution; student can answer direct questions but struggles to develop ideas or respond to challenge.',
    band3: 'Student contributes independently and with reasonable confidence; can develop and defend ideas when questioned.',
    band4: 'Student demonstrates sustained intellectual independence and confidence; takes initiative in the discussion, revises views in response to evidence, and handles challenge with academic maturity.'
  }
];
