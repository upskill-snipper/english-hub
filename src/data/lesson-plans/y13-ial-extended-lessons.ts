import type { LessonPlan } from '@/types';

export const y13IalExtendedLessons: LessonPlan[] = [
  //  Lesson 1: Coursework Clinic -- Original Writing Draft Workshop 
  {
    id: 'y13ext-01',
    title: 'Coursework Clinic: Original Writing Draft Workshop',
    text: 'Edexcel IAL English Language Unit 4 Coursework',
    board: 'Edexcel IAL',
    yearGroup: 'Year 13',
    duration: '90 minutes',
    objectives: [
      'Develop and refine a first draft of the original writing component for Unit 4 coursework',
      'Apply understanding of genre conventions, audience, and purpose to improve creative choices',
      'Use peer feedback processes to identify specific areas for revision at word, sentence, and discourse level',
      'Demonstrate conscious crafting of literary and linguistic effects with evaluative awareness',
    ],
    successCriteria: [
      'I can produce or substantially develop a complete draft of my original writing piece',
      'I can identify and explain at least three deliberate stylistic choices and their intended effects',
      'I can give and receive specific, constructive peer feedback using A-Level criteria',
      'I can create a prioritised revision plan targeting mark-band descriptors at Level 3/4',
    ],
    keywords: [
      'original writing',
      'genre conventions',
      'authorial craft',
      'discourse structure',
      'register',
      'voice',
      'stylistic choice',
      'drafting',
      'revision',
      'mark-band descriptors',
    ],
    starterActivity: {
      title: 'Mentor Text Deconstruction',
      duration: '12 minutes',
      instructions:
        'Distribute a short, high-quality mentor text in the genre each student has chosen (e.g. opening of a literary short story, travel writing, personal essay). Students annotate independently for 6 minutes, identifying: genre signals, sentence variety, narrative voice, and one "writerly move" they could steal. Pairs share their most interesting finding. Teacher draws out two or three transferable techniques on the board and students note which they will consciously attempt in their own draft.',
      differentiation: {
        support:
          'Provide an annotated version of the mentor text with four features already labelled; students find two additional features themselves.',
        core:
          'Students annotate independently then discuss their findings with a partner before sharing with the class.',
        stretch:
          'Students identify the precise linguistic/structural mechanism behind each technique (e.g. second-person address shifts power dynamic, syndetic listing creates rhythm and accumulation) and predict the effect on a target reader.',
      },
      resources: [
        'Genre-specific mentor texts (one per student or shared copies)',
        'Annotation colour code guide',
        'Mark-band descriptors for Unit 4 original writing',
      ],
    },
    mainActivities: [
      {
        title: 'Focused Drafting Block',
        duration: '35 minutes',
        instructions:
          'Students write or substantially revise their original writing draft in silence. Before writing begins, each student sets a specific intention: write their intention on a sticky note (e.g. "I will vary sentence length to control pace in the climax"). Teacher circulates, conducting targeted three-minute individual conferences to prompt decisions about structure, voice, and lexical choices. Conferences focus on one improvement per student. Students who have a full draft use this time to do a slow re-read, marking any section they are uncertain about.',
        differentiation: {
          support:
            'Provide a structural scaffold (e.g. five-part narrative arc template or non-fiction paragraph frame) to guide the draft. Teacher prioritises conferences with these students.',
          core:
            'Students draft independently using their planning notes. They aim to complete at least 400-600 words of polished prose.',
          stretch:
            'Students experiment with a non-linear or formally ambitious structure and annotate their draft to explain the intended effect of structural decisions.',
        },
        resources: [
          'Student planning notes / previous drafts',
          'Genre convention checklist',
          'Sticky notes for intention-setting',
          'Quiet working environment',
        ],
      },
      {
        title: 'Structured Peer Feedback: Stars and Targeted Targets',
        duration: '25 minutes',
        instructions:
          'Students exchange drafts with a partner whose genre is different from their own (to encourage reader-response rather than genre-specific correction). Peer readers use the Unit 4 mark-band descriptors to identify: two specific strengths (citing evidence from the draft and explaining effect) and two targets directly linked to the next mark band up. Feedback is written on a structured feedback form. Writers then read their feedback and spend 8 minutes acting on one target immediately in their draft. Lesson closes with pairs briefly discussing the most useful piece of feedback they received.',
        differentiation: {
          support:
            'Provide sentence starters for feedback: "An effective stylistic choice is... because the effect on the reader is..." and "To reach the next mark band, you could..."',
          core:
            'Students write detailed feedback referencing mark-band language and give at least one specific suggestion for improvement.',
          stretch:
            'Students also comment on how successfully the piece meets its stated genre conventions and suggest a structural or discourse-level revision that would elevate the piece.',
        },
        resources: [
          'Structured peer feedback forms',
          'Unit 4 mark-band descriptors',
          'Student drafts',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Three-Step Revision Plan',
      duration: '8 minutes',
      instructions:
        'Students write a prioritised three-step revision plan for their next draft, ranked by impact. Each step must be specific: identify what needs changing, why it currently falls short, and what the revised version should achieve. Students share their most important step with the class; teacher records a class list of common priorities on the board to inform the next coursework clinic session.',
      differentiation: {
        support:
          'Teacher provides a partly completed revision plan frame with prompts; students fill in the specific details for their own piece.',
        core:
          'Students produce an independent three-step plan with clear, actionable targets.',
        stretch:
          'Students rank their steps by the mark-band criterion each targets and estimate the mark gain each revision would achieve.',
      },
    },
    homework:
      'Complete the next full draft of your original writing piece, acting on all three steps from your revision plan. Annotate your draft at three points to explain your deliberate stylistic choices and the effect you intended. Bring both the new draft and these annotations to the next session.',
    worksheetQuestions: [
      {
        question:
          'Identify a specific sentence or passage from your draft that you feel is most effective. Explain the stylistic choices you made and analyse how they create meaning or affect the reader.',
        lines: 10,
        modelAnswer:
          'A strong response will identify a precise moment in the draft, name specific techniques (e.g. free indirect discourse, syndetic listing, bathetic juxtaposition), explain the intended effect on the reader with reference to genre and purpose, and use evaluative hedging to show authorial awareness (e.g. "I intended this to...", "The effect I aimed for was...").',
        marks: 8,
      },
      {
        question:
          'Using the Unit 4 mark-band descriptors, place your current draft in a mark band and justify your decision with reference to at least two specific criteria.',
        lines: 10,
        modelAnswer:
          'Students should identify the correct band based on honest self-assessment, cite at least two descriptor phrases, and support each with textual evidence from their draft. Strong responses will also note which criterion is closest to the boundary of the next mark band.',
        marks: 8,
      },
      {
        question:
          'What is the most significant structural decision in your original writing piece? Explain why you made it and how it shapes the reader\'s experience.',
        lines: 8,
        modelAnswer:
          'Responses should discuss discourse-level decisions (e.g. in medias res opening, circular structure, epistolary format) and analyse how structural choice contributes to meaning, reader positioning, or genre effect. The answer should demonstrate conscious, reflective crafting rather than accidental choices.',
        marks: 6,
      },
      {
        question:
          'Identify one weakness in your current draft and write a revised version of that section. Then explain what you changed and why the revision is an improvement.',
        lines: 14,
        modelAnswer:
          'Students provide the original extract, the revised version, and a clear explanation of the linguistic or structural change made. Evaluation should reference mark-band language (e.g. "the revision demonstrates more deliberate crafting", "the vocabulary is now more precisely matched to the genre register") and show understanding of the improvement in terms of reader effect.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'Check that all students have a confirmed coursework title and genre approved before this session; redirect any undecided students to a brief one-to-one at the start.',
      'Circulate during drafting with a rota -- aim for at least one conference with every student, prioritising those stuck or writing below Level 2.',
      'Keep peer feedback focused on the mark-band descriptors rather than personal taste; model this in the first five minutes by demonstrating feedback on an anonymous sample.',
      'If time allows, display two or three anonymised student sentences on the board and invite whole-class improvement suggestions -- this models the kind of self-editing writers need for the commentary.',
      'Collect revision plans at the end to inform the structure of Lesson 2 (commentary writing).',
    ],
    targetedSkills: [
      'Creative writing and drafting',
      'Authorial voice and stylistic crafting',
      'Self-assessment against mark-band descriptors',
      'Giving and receiving constructive peer feedback',
      'Revision and editing at word, sentence, and discourse level',
    ],
  },

  //  Lesson 2: Coursework Clinic -- Commentary Writing 
  {
    id: 'y13ext-02',
    title: 'Coursework Clinic: Commentary Writing',
    text: 'Edexcel IAL English Language Unit 4 Coursework',
    board: 'Edexcel IAL',
    yearGroup: 'Year 13',
    duration: '90 minutes',
    objectives: [
      'Understand the purpose, structure, and mark-band requirements of the Unit 4 coursework commentary',
      'Practise writing an analytical commentary that reflects on deliberate linguistic and stylistic choices',
      'Link commentary writing to specific AOs, particularly AO5 (crafting) and the evaluation of choices',
      'Develop a personal commentary voice that is confident, reflective, and analytically precise',
    ],
    successCriteria: [
      'I can explain the purpose of the commentary and how it differs from a literary analysis essay',
      'I can write a commentary paragraph that identifies a choice, analyses its effect, and reflects on intention',
      'I can reference specific linguistic and structural features in my commentary with appropriate terminology',
      'I can self-assess my commentary against mark-band descriptors and identify targets',
    ],
    keywords: [
      'commentary',
      'intention',
      'effect',
      'reflective writing',
      'linguistic choice',
      'discourse structure',
      'authorial decision',
      'evaluation',
      'AO5',
      'self-assessment',
    ],
    starterActivity: {
      title: 'Good vs Weak Commentary Comparison',
      duration: '10 minutes',
      instructions:
        'Display two short commentary extracts on the board: one strong (Level 3/4) and one weak (Level 1/2), both discussing the same imaginary piece of writing. Students work independently for 4 minutes to annotate what makes each one more or less effective. Take feedback and build a class checklist: "A strong commentary must..." Record the checklist on the board -- students copy this as a reference guide for the lesson.',
      differentiation: {
        support:
          'Provide the two extracts with key phrases highlighted; students decide which highlight is a strength and which is a weakness, and explain why.',
        core:
          'Students annotate independently and generate their own checklist before comparing with the class version.',
        stretch:
          'Students rewrite the weak extract, improving it to Level 3/4 standard, and then explain every change they made with reference to mark-band language.',
      },
      resources: [
        'Two sample commentary extracts (printed or projected)',
        'Mark-band descriptors for Unit 4 commentary',
        'Annotation pens',
      ],
    },
    mainActivities: [
      {
        title: 'Commentary Structure Planning',
        duration: '20 minutes',
        instructions:
          'Explain the expected structure: brief introduction (genre, audience, purpose), three to four body paragraphs each focusing on a specific stylistic decision, and a short conclusion on what the piece achieves overall. Students plan their commentary using a structured paragraph planner: for each paragraph, identify (1) the linguistic or structural choice, (2) the specific textual evidence, (3) the intended effect, and (4) any alternatives they considered and rejected. Teacher models completing one paragraph planner on the board using an anonymous student draft from Lesson 1.',
        differentiation: {
          support:
            'Provide a completed exemplar planner alongside the blank version so students can see the level of detail required before completing their own.',
          core:
            'Students complete the paragraph planner for three to four sections of their own writing independently.',
          stretch:
            'Students add a fifth column to their planner: "What would a reader at a different context/time/background notice?" -- prompting consideration of reader variability and intended vs actual effect.',
        },
        resources: [
          'Commentary paragraph planner (blank)',
          'Commentary paragraph planner (exemplar)',
          'Student drafts from Lesson 1',
        ],
      },
      {
        title: 'Drafting Commentary Paragraphs',
        duration: '40 minutes',
        instructions:
          `Students use their planners to draft at least three commentary paragraphs. Introduce the IDEA structure for commentary paragraphs: Identify the choice  Detail from the text  Effect on the reader  Authorial intention. Teacher circulates to conference individual students, focusing particularly on helping them articulate intention clearly ("I chose this because...") rather than just describing what is present. In the final 10 minutes, students swap with a partner to check: Does each paragraph follow IDEA? Is the language confident and evaluative? Are specific quotes used? Pairs annotate each other's work with one strength and one target.`,
        differentiation: {
          support:
            'Provide IDEA sentence starters: "In this section, I chose to use [feature]...", "This is evident in the line \'...\'", "The effect of this on the reader is...", "My intention was to..."',
          core:
            'Students draft three full commentary paragraphs independently using the IDEA structure.',
          stretch:
            'Students include a comparative dimension: explain how an alternative approach (different genre, form, or register) would have produced a different effect, and why their choice was the most appropriate for their purpose.',
        },
        resources: [
          'IDEA paragraph structure guide',
          'Student writing drafts',
          'Commentary paragraph planner',
          'Mark-band descriptors',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Mark-Band Self-Assessment and Target Setting',
      duration: '10 minutes',
      instructions:
        'Students read back through their draft commentary and use the mark-band descriptors to award themselves a provisional band. They must justify the band with two specific pieces of evidence from their commentary. They then write one target -- phrased as a specific action -- for their next draft. Teacher takes a quick show-of-hands for each band to gauge class progress; teacher notes students placing themselves in lower bands for targeted support.',
      differentiation: {
        support:
          'Provide a simplified version of the descriptors with the most important criteria highlighted; teacher supports these students in identifying their band.',
        core:
          'Students self-assess independently and write a justified target.',
        stretch:
          'Students write a second target for the overall portfolio and predict whether their commentary adds to or detracts from the mark their original writing would receive independently.',
      },
    },
    homework:
      'Complete a full first draft of your commentary (approximately 400-600 words). Highlight every sentence that explicitly states your intention. If any paragraphs lack a clear intention statement, add one before the next session.',
    worksheetQuestions: [
      {
        question:
          'Explain the purpose of the commentary component within Unit 4 coursework. How does it differ from a standard analytical essay?',
        lines: 8,
        modelAnswer:
          'The commentary is a reflective, writer-centred piece in which the student evaluates their own linguistic and stylistic choices. Unlike an analytical essay (which evaluates a pre-existing text), the commentary requires the writer to explain their intentions, justify their decisions, and assess the effect of their choices on their intended reader. Strong responses will note the first-person, evaluative voice and the focus on the process of writing rather than on a separate text.',
        marks: 6,
      },
      {
        question:
          'Write a full IDEA commentary paragraph about one stylistic choice in your original writing piece.',
        lines: 12,
        modelAnswer:
          'A strong paragraph will: (I) identify the specific linguistic or structural feature by name; (D) quote the relevant line(s) precisely; (E) analyse the effect on the reader using evaluative language; (A) clearly state the authorial intention using first person. Terminology should be accurate and the tone should be reflective rather than descriptive.',
        marks: 10,
      },
      {
        question:
          'Identify a moment in your draft where you considered two different approaches. Explain both options and justify why you made the choice you did.',
        lines: 10,
        modelAnswer:
          'Responses should articulate a genuine decision-making process. For example: considering whether to use second-person address or third-person narration, or debating whether to open in medias res or with context-setting. The justification should link clearly to purpose, audience, and genre conventions, demonstrating that choices were deliberate rather than accidental.',
        marks: 8,
      },
      {
        question:
          'How effectively does your commentary demonstrate awareness of your target audience? Refer to at least two specific paragraphs in your commentary.',
        lines: 8,
        modelAnswer:
          'Students should locate moments in their commentary where they explicitly discuss how a choice positions, challenges, or engages the reader. Strong answers will use reader-response language (e.g. "the reader is positioned to...", "a contemporary audience would recognise...") and connect lexical/structural choices to the anticipated reading experience.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'Students often confuse "commentary" with a literary analysis essay; stress that the commentary is about their own writing and their own intentions -- first-person, reflective register is expected and rewarded.',
      'Watch for students who describe rather than evaluate -- prompt them with "Why did you choose that? What else could you have done?" to generate evaluative content.',
      'The IDEA structure is a scaffold, not a formula; encourage students who are ready to integrate these elements more fluidly rather than mechanically signposting each step.',
      'Students who finished their draft in Lesson 1 and have already drafted a commentary should use the peer-feedback time to work on Level 3/4 refinements -- provide them with the top-band descriptors and ask them to identify gaps.',
      'Collect drafts at the end to give brief written feedback before returning them for the final submission.',
    ],
    targetedSkills: [
      'Reflective and evaluative writing',
      'Metalinguistic awareness and terminology',
      'Audience and purpose analysis',
      'Self-assessment and target-setting',
      'Constructing an analytical argument about own writing',
    ],
  },

  //  Lesson 3: Investigation Methodology Review 
  {
    id: 'y13ext-03',
    title: 'Investigation Methodology Review',
    text: 'Edexcel IAL English Language Unit 3 Investigation',
    board: 'Edexcel IAL',
    yearGroup: 'Year 13',
    duration: '90 minutes',
    objectives: [
      'Review and strengthen the methodological foundations of the Unit 3 independent investigation',
      'Evaluate the validity, reliability, and representativeness of chosen data collection methods',
      'Refine research questions and hypotheses to ensure they are appropriately focused and answerable',
      'Understand the ethical considerations relevant to primary language data collection',
    ],
    successCriteria: [
      'I can explain my chosen methodology and justify it in relation to my research question',
      'I can identify and address at least one limitation of my data collection method',
      'I can articulate the difference between primary and secondary data and explain why I am using each',
      'I can demonstrate awareness of ethical considerations in collecting and using language data',
    ],
    keywords: [
      'methodology',
      'primary data',
      'secondary data',
      'validity',
      'reliability',
      'corpus',
      'sampling',
      'ethical considerations',
      'research question',
      'hypothesis',
    ],
    starterActivity: {
      title: 'Methodology Speed-Dating',
      duration: '12 minutes',
      instructions:
        'Display six common investigation methodologies on cards around the room: spoken corpus analysis, questionnaire, interview, textual comparison, social media corpus, ethnographic observation. Students rotate every 90 seconds, spending that time at each card writing one strength and one weakness of that method on a sticky note. After the rotation, class reconvenes and teacher facilitates a quick summary for each method, emphasising fit-for-purpose thinking: "The best methodology is the one that best answers your specific research question."',
      differentiation: {
        support:
          'Provide a simple strengths/limitations table for each method; students add one additional point to each column based on their own knowledge.',
        core:
          'Students generate their own strengths and limitations independently during the rotation.',
        stretch:
          'Students consider how two methods could be combined for triangulation and what that would add to the validity of findings.',
      },
      resources: [
        'Methodology cards (one per station)',
        'Sticky notes (two colours)',
        'Timer',
      ],
    },
    mainActivities: [
      {
        title: 'Research Question Audit',
        duration: '20 minutes',
        instructions:
          'Students write their current research question on a mini-whiteboard. Teacher circulates and challenges each question using SMART criteria adapted for linguistics: Specific (not "language" but "female speakers in workplace settings"), Manageable (answerable with the data available), Answerable (not a yes/no question -- requires analysis), Relevant (linked to a named linguistic theory or framework), and Testable (can be explored through linguistic analysis). Pairs then workshop each other\'s questions, suggesting tighter phrasing. Teacher takes 3-4 examples to discuss with the whole class, modelling how to sharpen a broad question into a focused, analytical one.',
        differentiation: {
          support:
            'Provide three model research questions at varying levels of quality and ask students to rank them and explain what makes the best one strongest.',
          core:
            'Students audit their own question independently before pair work.',
          stretch:
            'Students draft a second research question that approaches the same topic from a different angle and evaluate which is more answerable and why.',
        },
        resources: [
          'Mini-whiteboards and pens',
          'SMART criteria adapted for linguistics (printed card)',
          'Model research questions at varying quality levels',
        ],
      },
      {
        title: 'Methodology Justification Writing',
        duration: '40 minutes',
        instructions:
          'Students write a methodology section of approximately 350-500 words for their investigation. This section must: (1) describe the data collected, (2) justify the choice of method with reference to the research question, (3) acknowledge one limitation and explain how it has been mitigated, and (4) address ethical considerations (anonymisation, consent, context). Teacher models a paragraph structure on the board using a sample investigation on social media language. Students draft independently; teacher circulates to conference on justification language and to ensure ethical considerations are included.',
        differentiation: {
          support:
            'Provide a structured paragraph frame for the methodology section with sentence starters for each of the four required elements.',
          core:
            'Students write the methodology section using the four-element framework independently.',
          stretch:
            'Students also write a brief comparative paragraph explaining why they rejected an alternative methodology and what that alternative would and would not have revealed about their topic.',
        },
        resources: [
          'Methodology paragraph frame',
          'Sample methodology extract (social media language investigation)',
          'Ethics checklist',
          'Student investigation plans',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Peer Methodology Review',
      duration: '8 minutes',
      instructions:
        'Students swap their methodology drafts with a partner from a different investigation topic. Readers answer three questions in writing: (1) Is the data collection method clearly described? (2) Is the justification convincing -- does it explain why this method fits this question? (3) Is there an ethical consideration addressed? Feedback is returned and students identify one priority revision.',
      differentiation: {
        support:
          'Provide the three questions as a structured checklist with space to tick yes/partially/no and add a brief comment.',
        core:
          'Students write free-text responses to all three questions.',
        stretch:
          'Students also comment on whether the methodology will generate sufficient data for the level of analysis required at A-Level.',
      },
    },
    homework:
      'Finalise your methodology section based on today\'s peer feedback. Then complete your data collection (if not already done) or, if data is collected, begin organising your corpus into categories that reflect your research question. Write a 100-word data description paragraph explaining what you have collected and how it is organised.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between primary and secondary data in the context of an English Language investigation. Give one example of each and explain how each type contributes to a language investigation.',
        lines: 8,
        modelAnswer:
          'Primary data is collected directly by the researcher for the specific investigation (e.g. recorded conversations, social media posts gathered by the researcher, completed questionnaires). Secondary data is pre-existing material used as a reference point or comparative corpus (e.g. published transcripts, databases, existing academic studies). Strong answers will note that primary data gives the researcher more control over context and sampling but is more time-consuming to collect, while secondary data is often richer in volume but may not precisely match the research question.',
        marks: 6,
      },
      {
        question:
          'Identify one potential validity issue with your chosen data collection method and explain how you have addressed or mitigated it.',
        lines: 8,
        modelAnswer:
          'Students should correctly identify a validity concern (e.g. observer\'s paradox affecting spoken data, self-selection bias in questionnaire responses, limited sample size reducing representativeness). The mitigation should be practical and clearly linked to the issue (e.g. extended observation periods to reduce observer\'s paradox, multiple sampling points). Strong responses will also acknowledge remaining limitations honestly.',
        marks: 6,
      },
      {
        question:
          'Describe two ethical considerations relevant to collecting and using language data. Explain how each applies to your investigation.',
        lines: 10,
        modelAnswer:
          'Responses should address at least two of: informed consent (participants must agree to data being used), anonymisation (identities removed or replaced), right to withdraw, data storage and security, avoiding harm to participants. Each consideration should be specifically linked to the student\'s investigation context (e.g. if analysing private social media posts, discuss the public/private boundary and whether consent is necessary).',
        marks: 8,
      },
      {
        question:
          'Write a refined version of your research question. Then explain why it is an improvement on an earlier version and which linguistic theory or framework it will help you explore.',
        lines: 10,
        modelAnswer:
          'The refined question should be specific, focused on a named group or context, analytically oriented (not yes/no), and researchable within available data. The explanation should note what was vague or too broad in the earlier version. The linked framework might include: politeness theory, accommodation theory, gender and language frameworks (Lakoff, Tannen, Cameron), CDA, or another named theory from the course.',
        marks: 8,
      },
    ],
    teacherNotes: [
      'Check that all students have ethical consent if their investigation involves human participants; flag any issues to the coursework coordinator before data collection proceeds.',
      'Students with vague or insufficiently focused research questions need targeted intervention today -- a broad question will cause problems at the analysis stage.',
      'Encourage students who are using a quantitative approach (e.g. counting features) to also include qualitative commentary; the mark scheme rewards multi-layered analysis.',
      'For students collecting spoken data, remind them of transcription conventions (Jeffersonian or simplified) and ensure they have a consistent system.',
      'Begin a class record of investigation topics to identify any duplicates and to facilitate cross-referencing in data analysis sessions.',
    ],
    targetedSkills: [
      'Research design and methodology',
      'Academic writing and justification',
      'Critical evaluation of methods',
      'Ethical awareness in research',
      'Focused questioning and hypothesis formation',
    ],
  },

  //  Lesson 4: Data Analysis Workshop -- Applying Frameworks 
  {
    id: 'y13ext-04',
    title: 'Data Analysis Workshop: Applying Frameworks',
    text: 'Edexcel IAL English Language Unit 3 Investigation',
    board: 'Edexcel IAL',
    yearGroup: 'Year 13',
    duration: '90 minutes',
    objectives: [
      'Apply named linguistic frameworks systematically to primary investigation data',
      'Move beyond surface description to produce interpretive, evidence-based analysis',
      'Understand how different analytical frameworks illuminate different aspects of the same data',
      'Develop the ability to weave together quantitative patterns and qualitative interpretation',
    ],
    successCriteria: [
      'I can apply at least two named linguistic frameworks to the same data extract',
      'I can write an analytical paragraph that moves from evidence to interpretation to theory',
      'I can explain how a quantitative finding supports or complicates a qualitative observation',
      'I can link my analysis to an existing academic viewpoint or theory',
    ],
    keywords: [
      'analytical framework',
      'quantitative analysis',
      'qualitative analysis',
      'lexical field',
      'pragmatics',
      'discourse analysis',
      'accommodation theory',
      'politeness theory',
      'Critical Discourse Analysis',
      'corpus linguistics',
    ],
    starterActivity: {
      title: 'Framework Matching Challenge',
      duration: '10 minutes',
      instructions:
        'Display a short authentic language extract (an anonymised spoken exchange or social media thread) on the board. Distribute a card sort with eight named frameworks and brief definitions (e.g. politeness theory -- Brown and Levinson; accommodation theory -- Giles; CDA; Gricean maxims; genre theory; schema theory; Labovian sociolinguistics; Hallidayan systemic-functional linguistics). Students match each framework to the one or two things it would most usefully reveal about the extract. Brief class discussion: "Which frameworks overlap? Which reveal something the others miss?"',
      differentiation: {
        support:
          'Provide the card sort with two frameworks already correctly matched as examples.',
        core:
          'Students complete the card sort independently and justify one match in a sentence.',
        stretch:
          'Students rank the frameworks by how useful they would be for the extract and write a one-sentence justification for their top choice and their bottom choice.',
      },
      resources: [
        'Authentic language extract (printed)',
        'Framework card sort (one set per pair)',
        'Framework definitions reference sheet',
      ],
    },
    mainActivities: [
      {
        title: 'Modelled Multi-Framework Analysis',
        duration: '25 minutes',
        instructions:
          'Teacher models the process of applying two frameworks to the same data extract on the board, thinking aloud throughout: "First I notice this feature -- it is quantifiably frequent, which is significant because... Now applying politeness theory, I can see that this frequency relates to... This connects to Brown and Levinson\'s concept of [face threat] because..." Students annotate their own copy of the extract as teacher talks. Teacher then partially analyses a second extract and students complete the analysis in pairs, applying two frameworks they select themselves. Pairs share their analysis; teacher highlights examples of moving from description to interpretation.',
        differentiation: {
          support:
            'Provide a partially completed analysis frame with the first framework applied, asking students to add the second framework only.',
          core:
            'Students apply two frameworks to the second extract in pairs and write their analysis using the Evidence  Pattern  Interpretation  Theory (EPIT) structure.',
          stretch:
            'Students apply three frameworks and write a paragraph explaining whether the frameworks produce compatible or contradictory readings of the same data, and why that tension is analytically productive.',
        },
        resources: [
          'Modelled analysis extract (teacher copy and student copies)',
          'Second practice extract',
          'EPIT analysis structure guide',
          'Framework reference sheet',
        ],
      },
      {
        title: 'Independent Data Analysis Sprint',
        duration: '40 minutes',
        instructions:
          'Students work independently on their own investigation data. Target: write three fully developed analysis paragraphs, each applying a named framework and moving from evidence to interpretation to connection with theory. Each paragraph should include: a specific data example (quoted or transcribed accurately), a quantitative observation where relevant (e.g. frequency, proportion), a qualitative interpretation using framework concepts, and a link to a named theoretical position. Teacher circulates, conferencing individually to push students from description to analysis -- the key prompt is "So what does that tell us about language/society/identity/power?"',
        differentiation: {
          support:
            'Provide a single-framework analysis frame with sentence starters: "The data shows [frequency/pattern]...", "Applying [framework], this suggests...", "This connects to [theorist]\'s argument that..."',
          core:
            'Students write three EPIT paragraphs independently, applying at least two different frameworks across the three paragraphs.',
          stretch:
            'Students write a fourth "synthesis paragraph" that draws together the findings across all three analytical frameworks to answer their research question at a conceptual level.',
        },
        resources: [
          'Student investigation data (printed corpus or transcripts)',
          'EPIT paragraph frame',
          'Framework and theorist reference card',
          'Research questions (visible on desks)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Analysis Swap: "Is This Analysis or Description?"',
      duration: '10 minutes',
      instructions:
        'Students swap one of their paragraphs with a partner. The reader underlines any sentence that is purely descriptive (observation without interpretation) and circles any sentence that constitutes genuine analysis (interpretation linked to framework/theory). Partners return work and discuss: what percentage of the paragraph is analysis vs description? Students set a target to increase the analytical density in their next draft.',
      differentiation: {
        support:
          'Provide two sample sentences -- one descriptive, one analytical -- as a reference before the task.',
        core:
          'Students complete the underlining/circling exercise and calculate a rough description/analysis ratio.',
        stretch:
          'Students rewrite one underlined (purely descriptive) sentence from their partner\'s paragraph and upgrade it to a fully analytical sentence.',
      },
    },
    homework:
      'Complete a full analysis section for your investigation, targeting at least 600-800 words. Apply a minimum of two named frameworks across your analysis. For each framework, ensure you have at least one quantitative observation and one qualitative interpretation.',
    worksheetQuestions: [
      {
        question:
          'Choose one extract from your investigation data. Apply politeness theory (Brown and Levinson) to analyse it. Identify specific face-threatening acts or face-saving strategies and explain their significance.',
        lines: 12,
        modelAnswer:
          'Strong responses will identify specific utterances as face-threatening acts (FTAs) or face-saving strategies, name the type of face at stake (positive or negative), and locate the behaviour within the relational context of the data. The analysis should move from observation to interpretation: not just "this is a positive politeness strategy" but "this positive politeness strategy is significant because it constructs solidarity between speakers who are in an asymmetric power relationship, which complicates Brown and Levinson\'s prediction that..."',
        marks: 10,
      },
      {
        question:
          'Explain what accommodation theory reveals about a specific feature of your data. How does it help you answer your research question?',
        lines: 10,
        modelAnswer:
          'Students should explain Giles\'s convergence/divergence distinction and apply it to specific features of their data (e.g. lexical choices, pronunciation shifts in spoken data, register matching in written data). The connection to the research question should be explicit: accommodation theory is not just applied for its own sake but to illuminate the particular sociolinguistic phenomenon under investigation.',
        marks: 8,
      },
      {
        question:
          'Write an analytical paragraph using the EPIT structure (Evidence  Pattern  Interpretation  Theory) about one feature of your data.',
        lines: 12,
        modelAnswer:
          'A strong paragraph will: quote or reference specific data accurately (E); identify a recurring or significant linguistic pattern (P); interpret what that pattern reveals about language use, identity, power, or social context (I); and connect the interpretation to a named theory or theorist with explanatory, not merely decorative, use of the theory (T). Avoid beginning the paragraph with the theory and working backwards -- the data should drive the analysis.',
        marks: 10,
      },
      {
        question:
          'Identify one finding from your data that surprised you or that complicates a theoretical prediction. Explain why it is significant for your investigation.',
        lines: 8,
        modelAnswer:
          'Responses that engage with contradictory or unexpected findings are demonstrating the highest-level analytical thinking. A strong answer will name the theoretical prediction that was not met, explain what the data shows instead, consider possible reasons (e.g. sample size, genre effects, individual variation), and argue for why the unexpected finding is actually more analytically interesting than a confirmatory result.',
        marks: 8,
      },
    ],
    teacherNotes: [
      'The most common weakness at this stage is description masquerading as analysis -- students say what is there rather than what it means. The "So what?" prompt is invaluable.',
      'Encourage students to maintain a running list of quantitative findings (e.g. frequency counts) alongside their qualitative commentary; the contrast between these often generates the most interesting analytical insights.',
      'If students have not yet finished collecting data, allow them to use a shared practice corpus during the independent sprint and agree a deadline by which real data must be ready.',
      'Students applying CDA should be reminded of the need to problematise their own position as analyst -- whose values and assumptions are shaping what they notice?',
      'The synthesis paragraph task (stretch) is good preparation for the investigation conclusions section -- consider introducing this task for all students in the next session.',
    ],
    targetedSkills: [
      'Applying linguistic frameworks analytically',
      'Integrating quantitative and qualitative methods',
      'Evidence-based academic writing',
      'Theoretical literacy and application',
      'Moving from description to interpretation',
    ],
  },

  //  Lesson 5: Mock Unit 1 Timed Essay Debrief 
  {
    id: 'y13ext-05',
    title: 'Mock Unit 1 Timed Essay Debrief',
    text: 'Edexcel IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 13',
    duration: '90 minutes',
    objectives: [
      'Analyse marked mock Unit 1 responses to identify specific strengths and patterns of weakness',
      'Understand how the Unit 1 mark scheme rewards language analysis, comparison, and contextual awareness',
      'Practise targeted rewriting to improve responses from one mark band to the next',
      'Develop examination strategies for managing time, selecting evidence, and sustaining analytical focus across a timed essay',
    ],
    successCriteria: [
      'I can identify the specific mark-band criteria my mock response met and did not meet',
      'I can explain what distinguishes a Level 3 from a Level 4 response in Unit 1',
      'I can rewrite a weak paragraph to demonstrate the analytical depth required for the next mark band',
      'I can articulate two specific strategies to improve my performance in the real examination',
    ],
    keywords: [
      'mark-band descriptors',
      'contextual analysis',
      'comparison',
      'AO1',
      'AO2',
      'AO3',
      'AO4',
      'linguistic analysis',
      'timed conditions',
      'examination strategy',
    ],
    starterActivity: {
      title: 'Mark-Band Sorting Activity',
      duration: '12 minutes',
      instructions:
        'Distribute five short anonymous response extracts (taken from past mock scripts or constructed exemplars), each representing a different level of response to the Unit 1 question. Students work in pairs to rank them from weakest to strongest and annotate each with one reason for their ranking. Class discusses and agrees on the correct rank. Teacher reveals the mark bands and explains the key discriminators: How does Level 4 handle contextual analysis differently from Level 3? What does "sustained" analysis look like compared to "developed" analysis? Students record three key discriminating phrases from the mark scheme.',
      differentiation: {
        support:
          'Reduce to three extracts (high, mid, low) and provide a simplified set of mark-band descriptors for reference.',
        core:
          'Students rank all five extracts independently before comparing with a partner.',
        stretch:
          'Students also identify the exact line in each extract where the response moves up or drops down a level, and explain what caused the shift.',
      },
      resources: [
        'Five anonymous response extracts (printed)',
        'Unit 1 mark-band descriptors',
        'Ranking framework',
      ],
    },
    mainActivities: [
      {
        title: 'Individual Marked Script Analysis',
        duration: '30 minutes',
        instructions:
          'Students receive their marked mock scripts. They work through the following process: (1) read the script and teacher comments in full (5 mins); (2) locate the mark-band descriptor that most closely matches their awarded mark and highlight every descriptor phrase that applies to their response and every descriptor phrase that does not yet apply (10 mins); (3) complete a gap analysis grid: three things the response did well with evidence, three specific gaps with evidence from the script, and one priority to close the biggest gap (15 mins). Teacher circulates to help students interpret mark-scheme language and translate it into specific, actionable targets.',
        differentiation: {
          support:
            'Teacher works with this group to interpret mark-scheme language, providing plain-English explanations of key descriptor phrases.',
          core:
            'Students complete the gap analysis independently.',
          stretch:
            'Students identify not just what is missing but where in the essay the missing element should have appeared, and why that placement matters structurally.',
        },
        resources: [
          'Marked mock scripts',
          'Unit 1 mark-band descriptors',
          'Gap analysis grid (printed)',
        ],
      },
      {
        title: 'Targeted Paragraph Rewriting',
        duration: '35 minutes',
        instructions:
          'Using their gap analysis, each student selects the single weakest paragraph from their mock response and rewrites it to a higher standard. Teacher models the process on the board using a common class weakness (e.g. analysing language features without connecting them to context; comparing texts by listing rather than integrating). Students rewrite independently. After 20 minutes of writing, pairs swap their original and rewritten paragraphs, and partners identify: (a) what specifically improved, (b) whether the rewrite would now meet the next mark band, and (c) one further tweak. Students then make that final tweak.',
        differentiation: {
          support:
            'Provide a specific prompt for the rewrite based on the most common gap for lower-achieving students: "How can you connect this language feature to the social/historical context of the text?"',
          core:
            'Students select their weakest paragraph independently and rewrite it without further scaffolding.',
          stretch:
            'Students rewrite two paragraphs -- the weakest in terms of linguistic analysis and the weakest in terms of comparative integration -- and annotate each to explain what mark-band movement the revision achieves.',
        },
        resources: [
          'Mock scripts (personal copy)',
          'Mark-band descriptors',
          'Model rewritten paragraph (for teacher demonstration)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Two Exam Strategies',
      duration: '8 minutes',
      instructions:
        'Students write down exactly two specific examination strategies that will change their approach in the real Unit 1 exam. Strategies must be concrete and personal (not generic advice). Examples: "I will spend 8 minutes annotating both texts before writing" or "I will write a contextual link in every paragraph, not just the introduction." Students share strategies; teacher records the class\'s combined list on the board. Students photograph or copy the class list.',
      differentiation: {
        support:
          'Provide a menu of six possible strategies; students select the two most relevant to their specific weaknesses.',
        core:
          'Students generate two strategies independently based on their gap analysis.',
        stretch:
          'Students write a brief rationale for why each strategy will directly address a specific mark-band criterion, not just improve their writing generally.',
      },
    },
    homework:
      'Write a clean, full redraft of your Unit 1 mock response incorporating all the improvements identified today. Annotate the redraft at three points to show: (1) where you have improved the linguistic analysis, (2) where you have strengthened the comparative work, and (3) where you have added or deepened contextual analysis.',
    worksheetQuestions: [
      {
        question:
          'Explain what the Unit 1 mark scheme means by "sustained" analysis. How does a "sustained" response differ from a "developed" one? Use your mock script to give an example of each.',
        lines: 10,
        modelAnswer:
          '"Sustained" analysis maintains analytical focus throughout the response, returning consistently to the same threads (e.g. power, identity, context) rather than introducing unconnected observations. "Developed" analysis shows engagement with complexity but may lose focus or fail to integrate all threads. Students should quote a moment from their script where analysis drops from sustained to developed -- often where linguistic features are listed without contextual connection.',
        marks: 8,
      },
      {
        question:
          'Choose one linguistic feature you discussed in your mock response. Rewrite that section to demonstrate more sophisticated contextual analysis.',
        lines: 12,
        modelAnswer:
          'The original section should be quoted (or summarised) first. The rewrite should demonstrate: more precise terminology, a connection between the linguistic feature and a social/cultural/historical context, and an explanation of why a speaker/writer made this choice. Strong rewrites will also consider how a different reader or context might interpret the feature differently.',
        marks: 10,
      },
      {
        question:
          'How well did your mock response integrate comparison between the two texts? Identify one moment where comparison was strong and one where it was weak, and explain the difference.',
        lines: 10,
        modelAnswer:
          'A strong comparative moment will integrate both texts within the same analytical point (e.g. "While Text A uses X to achieve Y, Text B uses Z, which suggests a different relationship between speaker and audience"). A weak comparative moment may list features from each text separately without integration. Students should identify the precise sentence that made comparison strong or weak.',
        marks: 8,
      },
      {
        question:
          'Write a revised introduction for your mock Unit 1 essay that immediately signals analytical intent and frames the comparison between the two texts.',
        lines: 10,
        modelAnswer:
          'A strong introduction will: name both texts and their contexts briefly, establish a clear line of argument about what the comparison reveals (not just "I will compare..."), and use at least one piece of precise linguistic terminology. It should avoid extended summary and instead show that the response will be analytically driven from the first sentence.',
        marks: 8,
      },
    ],
    teacherNotes: [
      'Mark scripts before this lesson and annotate them using mark-band language so students see the specific discriminators in context rather than in the abstract.',
      'The most common Unit 1 weakness is contextual anaemia -- students analyse language features accurately but fail to connect them to social, cultural, or historical context. Design the teacher modelling around this.',
      'Students who scored in the top mark band should still participate in the rewriting activity, targeting Level 4+ refinements -- precision of terminology, handling of contradictory evidence, or sophistication of comparison.',
      'Avoid telling students their grade -- focus discussion entirely on mark-band descriptors to keep the session analytical rather than emotionally driven.',
      'Keep a record of class-wide patterns from the gap analysis grids to inform exam revision priorities for Lessons 7 and 8.',
    ],
    targetedSkills: [
      'Self-assessment against mark-scheme criteria',
      'Contextual analysis in timed conditions',
      'Comparative writing across texts',
      'Examination technique and time management',
      'Targeted revision and paragraph-level improvement',
    ],
  },

  //  Lesson 6: Mock Unit 2 Timed Essay Debrief 
  {
    id: 'y13ext-06',
    title: 'Mock Unit 2 Timed Essay Debrief',
    text: 'Edexcel IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 13',
    duration: '90 minutes',
    objectives: [
      'Analyse marked mock Unit 2 responses to identify specific performance patterns against mark-band descriptors',
      'Understand the specific demands of Unit 2 language change and diversity questions',
      'Practise improving responses by deepening engagement with linguistic change over time and language diversity debates',
      'Develop targeted examination strategies for Unit 2 essay structure and argument management',
    ],
    successCriteria: [
      'I can identify the mark-band criteria my Unit 2 mock response met and fell short of',
      'I can explain what is required to demonstrate a "sophisticated" understanding of language change or diversity',
      'I can rewrite a paragraph to show more nuanced engagement with competing theoretical perspectives',
      'I can plan a Unit 2 essay with a clear through-argument rather than a list of points',
    ],
    keywords: [
      'language change',
      'language diversity',
      'prescriptivism',
      'descriptivism',
      'dialect',
      'sociolect',
      'idiolect',
      'semantic change',
      'through-argument',
      'counterargument',
    ],
    starterActivity: {
      title: 'Unit 2 Key Debates Speed Recall',
      duration: '10 minutes',
      instructions:
        'Students have 3 minutes to write down everything they can recall about the two main Unit 2 debates: (1) attitudes to language change and (2) language diversity and identity. After independent recall, pairs pool their lists. Teacher facilitates a rapid whole-class knowledge inventory on the board, organising points into: theorists and positions, key linguistic phenomena with examples, and common exam question angles. Gaps in the class knowledge inventory become revision priorities for Lesson 7.',
      differentiation: {
        support:
          'Provide a partially completed recall frame with key headings (theorists, examples, debates) to scaffold the recall task.',
        core:
          'Students complete the recall independently before comparing with a partner.',
        stretch:
          'Students organise their recall into a mini-conceptual map showing how the debates, theorists, and phenomena interconnect, rather than listing them separately.',
      },
      resources: [
        'Plain paper or recall frames',
        'Board for class knowledge inventory',
      ],
    },
    mainActivities: [
      {
        title: 'Script Analysis: Finding the Argument',
        duration: '30 minutes',
        instructions:
          'Students receive their marked mock Unit 2 scripts. They complete the following tasks: (1) underline every sentence that states a clear argumentative position (not just a factual claim or description) -- these are "argument sentences"; (2) count how many argument sentences there are compared to descriptive or knowledge-display sentences; (3) trace the through-argument of the essay: does each paragraph build on the previous one, or is the essay a list of separate points? Students complete a through-argument map, drawing the essay\'s argumentative shape. Teacher circulates and facilitates a brief share: "Did your essay have a through-argument or a list structure? What would a through-argument look like for this question?"',
        differentiation: {
          support:
            'Teacher works with this group to identify the difference between an argumentative sentence and a descriptive one, using examples from their scripts.',
          core:
            'Students complete the argument mapping independently.',
          stretch:
            'Students sketch an alternative through-argument for the same question -- an essay that would argue the opposite position -- and evaluate which argument is stronger and why.',
        },
        resources: [
          'Marked mock scripts',
          'Through-argument mapping template',
          'Mark-band descriptors for Unit 2',
        ],
      },
      {
        title: 'Counterargument Integration Workshop',
        duration: '35 minutes',
        instructions:
          'Teacher explains that top-band Unit 2 responses handle counterarguments and competing perspectives explicitly -- not dismissing them but using them to deepen the argument. Model a before/after pair on the board: a paragraph that ignores a counterargument and a revision that integrates it using hedging and concession language ("While X argues that..., the evidence for... suggests..."). Students identify a paragraph in their mock response that makes a strong claim without acknowledging an opposing view, then rewrite it to integrate the counterargument. Pairs evaluate rewrites against the mark-band language for the top band.',
        differentiation: {
          support:
            'Provide sentence frames for counterargument integration: "Although [theorist/position] argues that..., the evidence from... suggests that...", "This view is contested by..., who points out that..."',
          core:
            'Students identify and rewrite independently using the frames as optional scaffolding.',
          stretch:
            'Students evaluate whether their integration of counterargument strengthens or weakens their overall argument, and adjust the conclusion accordingly to reflect the more nuanced position.',
        },
        resources: [
          'Before/after model paragraphs (teacher demonstration)',
          'Counterargument sentence frames',
          'Mock scripts',
          'Unit 2 mark-band descriptors',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Essay Blueprint',
      duration: '10 minutes',
      instructions:
        'Students spend 10 minutes drafting an essay blueprint for a different Unit 2 question (teacher provides a question from a past paper). The blueprint must show: a clear opening position, the through-argument in three to four steps, where counterarguments will be addressed, and the conclusion\'s conceptual resolution. Blueprints are shared with a partner for 2 minutes of feedback. Teacher collects blueprints to assess planning quality ahead of the final examination.',
      differentiation: {
        support:
          'Provide a simplified blueprint template with sentence starters for each section.',
        core:
          'Students complete a blank blueprint independently.',
        stretch:
          'Students also annotate their blueprint to show which AO each section most directly addresses and how the blueprint as a whole builds a Level 4 argument.',
      },
    },
    homework:
      'Write a full redraft of your Unit 2 mock response. Focus specifically on: (1) establishing and maintaining a clear through-argument, (2) integrating at least one counterargument using hedging and concession language, and (3) deploying named theorists analytically rather than just listing their views.',
    worksheetQuestions: [
      {
        question:
          'What is the difference between a prescriptivist and a descriptivist attitude to language change? Name one theorist associated with each position and explain their key argument.',
        lines: 10,
        modelAnswer:
          'Prescriptivists believe language has a correct form that should be maintained and that change represents deterioration (e.g. John Humphrys, Robert Lowth). Descriptivists study language as it is actually used without making value judgements about correctness (e.g. David Crystal, Jean Aitchison -- who uses the metaphor of language as a plant that grows naturally rather than degrades). Strong answers will note that most linguists today are descriptivists, but public and media discourse often reflects prescriptivist attitudes.',
        marks: 6,
      },
      {
        question:
          'Explain how your mock Unit 2 response handled competing theoretical perspectives. Was this effective? Rewrite one section to demonstrate more nuanced engagement with an opposing viewpoint.',
        lines: 12,
        modelAnswer:
          'Students should honestly assess whether they presented one perspective as simply correct or engaged with the complexity of the debate. The rewrite should include explicit concession or hedging language, name the alternative position and theorist, and show how the main argument still holds despite the counter-evidence. Simply adding "however, some disagree" is insufficient -- the response should engage with why the counterargument exists and what evidence supports it.',
        marks: 10,
      },
      {
        question:
          'Choose one example of language diversity (e.g. a dialect, sociolect, or ethnolect) and explain what it reveals about the relationship between language and identity.',
        lines: 10,
        modelAnswer:
          'Strong responses will go beyond describing the features of the variety and instead analyse how the variety constructs, signals, or negotiates identity. They should engage with theories of indexicality, accommodation, or language and power, and acknowledge that identity construction through language is dynamic and context-dependent rather than fixed.',
        marks: 8,
      },
      {
        question:
          'Sketch a through-argument essay plan for this question: "Language change is driven by social factors rather than internal linguistic ones." Discuss.',
        lines: 10,
        modelAnswer:
          'A strong plan will establish a clear opening position (e.g. "While internal factors such as ease of articulation and analogy play a role, the evidence from contact linguistics, social network theory, and historical sociolinguistics suggests social factors are the primary driver"), develop the argument across three to four steps each building on the last, acknowledge and integrate counterarguments (e.g. grammatical drift, sound change), and resolve the tension in the conclusion at a conceptual level.',
        marks: 8,
      },
    ],
    teacherNotes: [
      'Students frequently treat Unit 2 as a knowledge-display exercise rather than an argument-construction exercise. The through-argument mapping activity directly challenges this tendency.',
      'The most common gap at Level 3/4 boundary is handling of competing perspectives -- students know the theorists but present them as a list rather than a dialectic. The counterargument workshop targets this directly.',
      'Remind students that the quality of their engagement with theory matters more than the number of theorists cited -- one theorist used with genuine analytical depth is worth more than five names dropped without engagement.',
      'Keep a record of which Unit 2 topics (change, diversity, attitudes, global English) are least confidently handled across the class, to prioritise in the consolidation lesson (Lesson 7).',
      'Students who consistently score in the top band should be challenged to evaluate the limitations of the theoretical frameworks they are applying rather than simply applying them.',
    ],
    targetedSkills: [
      'Constructing and sustaining a written argument',
      'Integrating counterarguments and competing perspectives',
      'Deploying linguistic theory analytically',
      'Understanding language change and diversity debates',
      'Essay planning and structure in timed conditions',
    ],
  },

  //  Lesson 7: Pre-Exam Consolidation -- All Frameworks and Theories 
  {
    id: 'y13ext-07',
    title: 'Pre-Exam Consolidation: All Frameworks and Theories',
    text: 'Edexcel IAL English Language Units 1 and 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 13',
    duration: '90 minutes',
    objectives: [
      'Consolidate knowledge of all key linguistic frameworks and theories across Units 1 and 2',
      'Practise the rapid, accurate retrieval of theoretical knowledge under pressure',
      'Identify and fill personal knowledge gaps ahead of the final examinations',
      'Demonstrate fluency in connecting theory to data across different question types',
    ],
    successCriteria: [
      'I can name and explain all key frameworks and theorists for Units 1 and 2 from memory',
      'I can accurately apply three different frameworks to an unseen language extract in 15 minutes',
      'I can identify my two weakest knowledge areas and articulate a specific revision strategy for each',
      'I can connect any named theory to at least two concrete linguistic examples',
    ],
    keywords: [
      'consolidation',
      'retrieval practice',
      'framework fluency',
      'Brown and Levinson',
      'Grice',
      'Giles',
      'Aitchison',
      'Crystal',
      'Lakoff',
      'Tannen',
    ],
    starterActivity: {
      title: 'Five-Minute Theory Brain Dump',
      duration: '8 minutes',
      instructions:
        'Students have exactly 5 minutes to write everything they know about linguistic theories and frameworks for the IAL: theorist names, theory names, key concepts, relevant examples. No notes or books. After the 5 minutes, students compare with a partner -- each person adds (in a different colour) anything they missed. Teacher facilitates a class-wide call: "Any theorist or framework you are uncertain about?" Teacher notes these on the board; these become the lesson\'s focus areas.',
      differentiation: {
        support:
          'Provide an alphabetical list of theorist names as a prompt (names only, no details); students supply the theory, key concept, and example.',
        core:
          'Students complete the brain dump with no scaffold.',
        stretch:
          'Students organise their brain dump into a conceptual map showing relationships between theories (e.g. Giles\'s accommodation theory connects to Brown and Levinson\'s face theory via the concept of social identity).',
      },
      resources: ['Plain paper or theory brain-dump sheet', 'Coloured pens for additions'],
    },
    mainActivities: [
      {
        title: 'Framework Carousel Review',
        duration: '30 minutes',
        instructions:
          'Set up six stations around the room, each focused on one theoretical cluster: (1) Pragmatics (Grice, speech acts, Brown and Levinson), (2) Sociolinguistics (Labov, Trudgill, Bernstein), (3) Language and Gender (Lakoff, Tannen, Cameron, Butler), (4) Language Change (Aitchison, Crystal, prescriptivism vs descriptivism), (5) Language Acquisition (key stage models, Chomsky, Skinner, Piaget, Vygotsky), (6) Discourse Analysis and CDA (Halliday, Fairclough, van Dijk). Each station has: a brief theory card, three practice questions, and a model answer. Students rotate every 5 minutes, completing one practice question at each station. Teacher monitors and corrects misconceptions in real time.',
        differentiation: {
          support:
            'Provide a "theory cheat sheet" that students can consult at each station until they can answer without it.',
          core:
            'Students complete one question at each station without notes, then check using the model answer.',
          stretch:
            'Students complete two questions at each station and, at each station, write a sentence connecting that theoretical cluster to a real-world language example they have encountered in their studies.',
        },
        resources: [
          'Station theory cards and practice questions (six sets)',
          'Model answers at each station',
          'Theory cheat sheet (for support students)',
          'Timer',
        ],
      },
      {
        title: 'Unseen Extract Timed Practice',
        duration: '40 minutes',
        instructions:
          'Provide a single unseen language extract that could plausibly appear in either Unit 1 or Unit 2 (e.g. a spoken interaction with features of dialect, gender, and politeness; or a historical text showing language change). Students have 15 minutes to annotate the extract applying as many frameworks as possible, noting what each framework reveals and what it cannot reveal. They then write a timed analytical response of 25 minutes to the question: "How is language used to construct identity and relationships in this extract?" Teacher circulates for the first 15 minutes (annotation phase) and is silent during the 25-minute writing phase to simulate examination conditions.',
        differentiation: {
          support:
            'Allow students to use their framework cheat sheet during the annotation phase (not the writing phase).',
          core:
            'Students annotate independently then write under timed examination conditions.',
          stretch:
            'Students also write a brief methodological note after the response (5 minutes): which framework was most productive for this extract, and why, and which framework they were unable to apply meaningfully -- and why not.',
        },
        resources: [
          'Unseen language extract (printed)',
          'Unit 1/2 mark-band descriptors',
          'Framework cheat sheet (support students only)',
          'Timer',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Personal Consolidation Priority List',
      duration: '7 minutes',
      instructions:
        'Students review their performance across both activities and write a ranked list of their five most important revision priorities before the exam. Each priority must be specific: not "revise language change" but "re-read Aitchison\'s metaphors and prepare two exam examples of semantic amelioration." Students share their number one priority with the class; teacher notes class-wide patterns and adjusts the final preparation lesson (Lesson 8) to address the most common gaps.',
      differentiation: {
        support:
          'Teacher works with support students to help them identify and phrase realistic, specific priorities.',
        core:
          'Students generate the list independently.',
        stretch:
          'Students also estimate how many marks each priority area could influence and sequence their revision time accordingly.',
      },
    },
    homework:
      'Using your priority list, spend at least 2 hours revising your top two priorities before Lesson 8. For each priority: re-read the relevant theory, write three example applications from data you have studied this year, and write two practice sentences connecting the theory to an unseen extract.',
    worksheetQuestions: [
      {
        question:
          'Explain Grice\'s cooperative principle and its four maxims. Give a specific example of how a maxim is flouted and explain what implicature is generated.',
        lines: 10,
        modelAnswer:
          'Grice argued that communication is governed by a cooperative principle: speakers contribute what is required by the exchange. The four maxims are: quantity (say enough, but not too much), quality (be truthful), relation (be relevant), and manner (be clear). Flouting a maxim deliberately generates an implicature -- an implied meaning. For example, responding to "Did you enjoy the film?" with "The popcorn was good" flouts relation, generating the implicature that the film was not enjoyable. Top-level answers will note that flouting is purposeful and distinguishable from violating (unintentional breach).',
        marks: 8,
      },
      {
        question:
          'Compare and contrast the views of at least two theorists on the relationship between language and gender.',
        lines: 10,
        modelAnswer:
          'Lakoff (deficit model) argued women\'s language is characterised by features that reflect social powerlessness (tag questions, hedges, empty adjectives). Tannen (difference model) argued men and women have different communication cultures (rapport talk vs report talk) but neither is inferior. Cameron (critical approach) challenged both by arguing gender differences in language use are performed and contextual, not inherent. Strong answers will note the historical shift from deficit to difference to performative models and evaluate which has the strongest empirical support.',
        marks: 8,
      },
      {
        question:
          'What are the key stages of Aitchison\'s three metaphors for attitudes to language change? Which do you find most convincing and why?',
        lines: 8,
        modelAnswer:
          'Aitchison identifies three attitudes: the "damp spoon" syndrome (language change is caused by laziness or carelessness), the "crumbling castle" metaphor (language change destroys a beautiful, ordered system), and the "infectious disease" idea (change spreads like a contagion from corrupting influences). Aitchison argues all three are prescriptivist myths unsupported by linguistic evidence. Answers evaluating which metaphor is most culturally persistent (likely the crumbling castle) and connecting it to contemporary media discourse show the highest-level engagement.',
        marks: 6,
      },
      {
        question:
          'Apply two different theoretical frameworks to the following exchange and explain what each reveals that the other does not:\nA: "Could you possibly pass the salt?"\nB: "Sure." [passes salt without eye contact]\nA: "Thanks so much."',
        lines: 12,
        modelAnswer:
          'Politeness theory (Brown and Levinson): A uses a negative politeness strategy (indirect request "could you possibly...") to minimise the face-threatening act of making a demand. B\'s minimal response and lack of eye contact could signal disengagement or a different conception of face needs. Gricean analysis: A\'s indirect formulation flouts quantity (a direct request would be shorter) to observe politeness conventions; B\'s minimal response technically satisfies the maxim of relation but the non-verbal element suggests the cooperative principle is being met minimally. Each framework foregrounds different elements: politeness theory emphasises relational strategy; Grice emphasises the inferential gap between what is said and what is meant.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'The carousel works best when stations are genuinely interactive -- consider adding a "challenge card" at each station that gives a harder application task for students who finish early.',
      'During the timed practice, strictly enforce exam conditions for the 25-minute writing phase; this is one of the last opportunities to experience these conditions before the real exam.',
      'Collect the unseen extract responses to give rapid written feedback before Lesson 8 -- even a one-line comment per student is valuable at this stage.',
      'The priority list activity doubles as formative assessment for you -- use it to plan the specific content of Lesson 8 and to identify any students who need urgent one-to-one support.',
      'If time allows, at the end of the carousel, ask students to vote on the hardest station -- this identifies the class\'s collective weakness and should be addressed explicitly at the start of Lesson 8.',
    ],
    targetedSkills: [
      'Retrieval practice and long-term memory consolidation',
      'Framework fluency and rapid application',
      'Self-identification of knowledge gaps',
      'Timed analytical writing under examination conditions',
      'Connecting theory to linguistic evidence',
    ],
  },

  //  Lesson 8: Final A-Level Preparation and Advice 
  {
    id: 'y13ext-08',
    title: 'Final A-Level Preparation and Advice',
    text: 'Edexcel IAL English Language Units 1, 2, 3, and 4',
    board: 'Edexcel IAL',
    yearGroup: 'Year 13',
    duration: '90 minutes',
    objectives: [
      'Consolidate examination technique across all Edexcel IAL units in a final integrated review',
      'Develop personalised examination plans addressing individual strengths and remaining gaps',
      'Build confidence and manage examination anxiety through structured preparation strategies',
      'Leave the course with a clear, actionable revision and examination-day plan',
    ],
    successCriteria: [
      'I can articulate a clear strategy for each unit of the examination',
      'I can identify my three strongest areas and my two areas of greatest risk in the exam',
      'I can describe specific techniques I will use to manage time and maintain analytical focus under pressure',
      'I can produce a final revision plan that is realistic, targeted, and covers all units',
    ],
    keywords: [
      'examination strategy',
      'revision planning',
      'time management',
      'analytical focus',
      'mark-band awareness',
      'Unit 1',
      'Unit 2',
      'Unit 3',
      'Unit 4',
      'A-Level English Language',
    ],
    starterActivity: {
      title: 'The Confident Linguist: What Do I Know?',
      duration: '10 minutes',
      instructions:
        'Students complete a RAG (Red/Amber/Green) self-assessment across all four units and their key content areas. Green = confident, can teach it to someone else; Amber = partial knowledge, needs revisiting; Red = significant gap. Students then pick their single greenest area and spend 3 minutes writing a "mini-lesson" -- a brief, clear explanation of that topic as if teaching a Year 12 student. Two or three volunteers share their mini-lesson with the class. Teacher affirms and corrects any errors. This starter is designed to build confidence by surfacing what students genuinely know well.',
      differentiation: {
        support:
          'Provide a structured RAG grid with all content areas pre-listed rather than asking students to generate the list.',
        core:
          'Students generate their own content list for the RAG assessment, then complete the grid.',
        stretch:
          'Students also note, in their green areas, one "sophistication upgrade" -- a nuance, counter-example, or conceptual complexity they could add to elevate their exam response above straightforward application.',
      },
      resources: [
        'RAG self-assessment grid (blank or pre-structured)',
        'Plain paper for mini-lesson',
      ],
    },
    mainActivities: [
      {
        title: 'Unit-by-Unit Strategy Session',
        duration: '35 minutes',
        instructions:
          'Teacher leads a structured walkthrough of examination strategy for each unit (approximately 8 minutes per unit), explicitly addressing: what to do in the first 5 minutes of each paper; how to allocate time to questions; the single most common error students make and how to avoid it; and one high-impact technique specific to that unit. Students take structured notes under four unit headings. Teacher draws on patterns from marked mock responses (Lessons 5 and 6) and the gap analysis from the consolidation lesson (Lesson 7) to make this session maximally relevant to this specific class.\n\nUnit 1 tips: annotate both texts before writing; aim for integrated comparison from paragraph 1; contextualise every linguistic feature.\nUnit 2 tips: establish your argument in the first paragraph; integrate counterarguments; use theorists analytically, not decoratively.\nUnit 3 tips: ensure methodology is clear and justified; analysis must reference named frameworks; conclusion must answer the research question directly.\nUnit 4 tips: submit a polished draft; commentary must be reflective and evaluative, not descriptive; aim for deliberate crafting throughout.',
        differentiation: {
          support:
            'Provide a printed strategy summary sheet for students to annotate rather than creating notes from scratch.',
          core:
            'Students take structured notes under the four unit headings.',
          stretch:
            'Students add personalised annotations to each unit section: "For me specifically, I need to remember to..." -- applying general strategies to their individual performance patterns.',
        },
        resources: [
          'Strategy summary sheet (optional printed version)',
          'Projected slides with unit-by-unit strategies',
          'Student notes from marked mocks and gap analysis grids',
        ],
      },
      {
        title: 'Personal Examination Preparation Plan',
        duration: '30 minutes',
        instructions:
          'Students produce a personal examination preparation plan for the remaining time before the exam. The plan must include: (1) a day-by-day revision schedule up to the exam, (2) specific topics or skills prioritised for each day based on the RAG assessment, (3) one practice task per unit to be completed independently before the exam, and (4) an examination-day protocol (what to do in the first 5 minutes of each paper). Teacher circulates to review plans and make practical suggestions -- particularly for students who have scheduled too much for the time available or who are not addressing their red areas. Plans are shared with a partner for a "reality check": is this realistic? Is it covering the most important gaps?',
        differentiation: {
          support:
            'Provide a structured planning template with the day-by-day grid and section headings pre-set; students fill in the content.',
          core:
            'Students produce their plan independently using the four required components as a guide.',
          stretch:
            'Students also write a brief rationale for every major revision choice: why is this topic on Day 2 rather than Day 1? This metacognitive layer promotes more deliberate preparation.',
        },
        resources: [
          'Planning template (optional)',
          'RAG grid from the starter',
          'Revision timetable grid (if needed)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Letter to Your Exam-Day Self',
      duration: '10 minutes',
      instructions:
        'Students write a short letter (one side of A4) addressed to themselves on the morning of the exam. The letter must include: one thing they are proud of in their preparation, one specific reminder about examination technique, one piece of advice about managing exam anxiety, and one sentence of genuine encouragement. Letters are sealed and given to the teacher, who will distribute them on the morning of the first examination. This activity serves both as a final reflection and as a practical confidence-management tool.',
      differentiation: {
        support:
          'Provide a structured frame with four prompts matching the four required elements.',
        core:
          'Students write the letter independently.',
        stretch:
          'Students write in the style of a specific author or linguist they admire, applying the craft they have developed throughout the course.',
      },
    },
    homework:
      'Begin working through your preparation plan. As your first independent task, write a practice response to a past Unit 1 or Unit 2 question under self-imposed timed conditions. Mark your response using the mark-band descriptors and write a one-paragraph evaluation of your performance. Bring this practice response to any available drop-in or revision session before the exam.',
    worksheetQuestions: [
      {
        question:
          'Write a concise strategy guide (eight bullet points maximum) for a student sitting Unit 1 for the first time. Each bullet point must be specific and actionable.',
        lines: 12,
        modelAnswer:
          'Strong guides will include: read both texts actively, annotating for linguistic features and context before writing (5 mins); establish a line of comparison in the introduction rather than treating texts separately; connect every linguistic feature to its contextual significance; maintain integrated comparison throughout rather than text-by-text structure; deploy two to three named frameworks rather than listing all features; leave 5 minutes to re-read and add analytical depth to any purely descriptive sentences; do not summarise or retell -- analyse from sentence one; manage time proportionally to marks.',
        marks: 8,
      },
      {
        question:
          'What are the three most important things a student must demonstrate to achieve the top mark band in Unit 2? Explain each with reference to the mark-band descriptors.',
        lines: 10,
        modelAnswer:
          'Responses will vary but should identify: (1) a sustained, sophisticated argument that engages with complexity and competing perspectives rather than presenting one view as simply correct; (2) accurate and nuanced application of linguistic theory -- theorists used analytically, not decoratively; (3) a wide range of precisely deployed examples showing genuine breadth of knowledge about language change and/or diversity. Strong answers will quote or closely paraphrase descriptor language and illustrate each criterion with a concrete example of what it looks like in a response.',
        marks: 8,
      },
      {
        question:
          'Reflect on your development as a language analyst over Year 13. Identify one area where you have improved most significantly and explain what specific work or insight drove that improvement.',
        lines: 10,
        modelAnswer:
          'This question does not have a single correct answer. Strong responses will be specific (identifying a precise skill, framework, or approach rather than "I got better at essays"), honest about the journey (acknowledging where they started), and analytically reflective about what caused improvement (e.g. "understanding that context drives the significance of a linguistic feature, not the feature in isolation, changed the way I analyse data"). Teacher should reward self-awareness and precision of reflection.',
        marks: 6,
      },
      {
        question:
          'Write an examination-day protocol: a step-by-step guide to what you will do in the first 10 minutes of the Unit 1 examination to maximise your performance.',
        lines: 10,
        modelAnswer:
          'A strong protocol will be specific and sequential: e.g. (1) read the question carefully and underline the key analytical directive; (2) read Text A in full, annotating for genre, audience, purpose, and key linguistic features; (3) read Text B in full, annotating for the same, with an eye on comparison points; (4) plan the through-argument of the comparative essay in four to five bullet points before writing a single sentence; (5) write a focused introduction that establishes the comparison immediately. The protocol should reflect genuine examination technique rather than generic advice.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'This is the final lesson of the course -- balance academic rigour with genuine emotional acknowledgement of what students have achieved. The letter activity is deliberately designed to do this.',
      'Use data from Lessons 5, 6, and 7 to personalise the strategy session as much as possible -- generic advice is less valuable than class-specific insights at this stage.',
      'Prepare a printed handout summarising the key strategies for each unit that students can take away and pin up at their desk during revision.',
      'Circulate attentively during the preparation planning activity -- students who are not engaging with their red areas need direct prompting.',
      'Consider providing a "last-minute revision one-pager" listing the ten most commonly tested theories/frameworks with a two-line explanation each -- this is a practical tool for the morning of the exam.',
      'The letters are powerful -- seal and distribute them as promised. Students consistently report that receiving the letter on exam morning is motivating.',
    ],
    targetedSkills: [
      'Examination strategy and technique',
      'Metacognitive reflection on learning',
      'Revision planning and self-regulation',
      'Managing examination anxiety',
      'Consolidation across all units of the A-Level',
    ],
  },
];
