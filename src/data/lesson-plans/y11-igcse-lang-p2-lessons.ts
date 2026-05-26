import type { LessonPlan } from '@/types'

export const y11IgcseLangP2Lessons: LessonPlan[] = [
  // ── Lesson 1: Paper 2 Structure and Expectations ──────────────────────────
  {
    id: 'y11lp2-01',
    title: 'Paper 2 Structure - Understanding the Two Tasks and 50 Marks',
    text: 'IGCSE English Language Paper 2',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand the structure of Edexcel IGCSE English Language Paper 2 (spec 4EA1)',
      'Identify the two writing tasks and how the 50 marks are distributed between them',
      'Understand the assessment objectives that underpin each task',
      'Begin to analyse sample questions and identify what each task demands',
    ],
    successCriteria: [
      'I can explain the structure of Paper 2 and how it differs from Paper 1',
      'I can identify the two tasks on Paper 2 and describe what each requires',
      'I can explain how the 50 marks are split between content and accuracy',
      'I can read a Paper 2 question and identify the form, purpose, and audience',
    ],
    keywords: [
      'transactional writing',
      'form',
      'purpose',
      'audience',
      'register',
      'assessment objective',
      'mark scheme',
      'task',
    ],
    starterActivity: {
      title: 'What Do You Already Know?',
      duration: '8 minutes',
      instructions:
        'Students work in pairs. Give each pair a mini-whiteboard. Display the question: "What do you know about Edexcel IGCSE English Language Paper 2?" Students brainstorm everything they know - the timing, the tasks, the forms of writing, the marks. Take feedback and record correct responses on the board. Clarify any misconceptions immediately, particularly around the difference between Paper 1 (reading and writing) and Paper 2 (transactional writing only). Display the official paper overview for students to cross-check their ideas.',
      differentiation: {
        support:
          'Provide a prompt card listing the possible forms of writing (article, letter, speech, report) so students can at least anchor their discussion to concrete forms.',
        core: 'Students brainstorm freely and compare what they know with the displayed paper overview.',
        stretch:
          'Students attempt to explain why the paper focuses on transactional rather than creative writing and what skills this tests.',
      },
      resources: [
        'Mini-whiteboards and pens',
        'Paper 2 overview slide showing structure, timing, and mark allocation',
      ],
    },
    mainActivities: [
      {
        title: 'Paper 2 Anatomy - Guided Walkthrough',
        duration: '20 minutes',
        instructions:
          'Teacher leads a structured walkthrough of the Paper 2 format. Distribute a printed copy of a past Paper 2 (or a teacher-created mock paper). Work through the following together: (1) The two tasks - Task 1 and Task 2. (2) Mark allocation: Task 1 is worth 20 marks (16 for content/organisation, 4 for technical accuracy); Task 2 is worth 30 marks (24 for content/organisation, 6 for technical accuracy). (3) Total: 50 marks. (4) Timing: approximately 30 minutes on Task 1 and 45 minutes on Task 2 within the 1 hour 30 minute paper. Students annotate their copy of the paper using a colour-coded key: blue for form cues, red for purpose cues, green for audience cues. Teacher models the annotation process with Task 1 before students apply it to Task 2 independently.',
        differentiation: {
          support:
            'Provide a partially annotated example of Task 1 so students can see the colour-coding system in action before attempting Task 2.',
          core: 'Students independently annotate Task 2 using the colour-coded system and compare with a partner.',
          stretch:
            'Students write a two-sentence summary of each task explaining form, purpose, audience, and tone - preparing a brief "what the examiner wants" guide.',
        },
        resources: [
          'Printed copies of a past or mock Paper 2',
          'Colour-coding annotation guide (blue/red/green key)',
          'Mark allocation slide',
        ],
      },
      {
        title: 'Decoding the Question - Form, Purpose, Audience',
        duration: '20 minutes',
        instructions:
          'Introduce the acronym FPA - Form, Purpose, Audience - as the three questions students must answer before writing a single word on Paper 2. Display five different Paper 2 questions on the board (drawn from past papers or teacher-created). For each question, students complete a FPA grid: What form is required? What is the purpose? Who is the audience? After completing the grid for all five questions, teacher takes whole-class feedback, correcting any misidentifications. Then pose the question: "Why does identifying FPA matter before you start writing?" Students discuss in pairs and share responses. Conclude by explaining that every writing decision - register, vocabulary, structure, tone - flows from FPA.',
        differentiation: {
          support:
            'Provide a word bank for each column of the FPA grid (e.g., form: article, letter, speech, report; purpose: inform, persuade, advise, argue; audience: peers, adults, general public).',
          core: 'Students complete the FPA grid independently and explain how FPA affects their writing choices.',
          stretch:
            'Students write a brief "writing plan" for one of the five questions, specifying how they would adapt their register and structure in response to the FPA analysis.',
        },
        resources: [
          'FPA grid worksheet',
          'Five sample Paper 2 questions displayed on board',
          'Word bank for support students',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Three Things Exit Ticket',
      duration: '7 minutes',
      instructions:
        'Students complete an exit ticket with three prompts: (1) "The two tasks on Paper 2 are worth ___ and ___ marks respectively." (2) "FPA stands for ___, ___, and ___." (3) "One thing I still want to understand better about Paper 2 is..." Teacher scans responses to identify misconceptions and questions to address at the start of the next lesson.',
      differentiation: {
        support: 'Provide the first two sentences partially completed as sentence starters.',
        core: 'Students complete all three prompts independently.',
        stretch:
          'Students add a fourth prompt: "The biggest difference between Paper 1 and Paper 2 is..." with a full explanation.',
      },
    },
    homework:
      'Find two examples of transactional writing in the real world (e.g., a newspaper article, a formal letter, a charity appeal). For each, write down: What form is it? Who is the audience? What is the purpose? Bring your examples to the next lesson.',
    worksheetQuestions: [
      {
        question:
          'How many marks is Paper 2 worth in total, and how are they split between the two tasks?',
        lines: 3,
        modelAnswer:
          'Paper 2 is worth 50 marks in total. Task 1 is worth 20 marks and Task 2 is worth 30 marks. Within each task, marks are split between content and organisation (the majority) and technical accuracy.',
        marks: 3,
      },
      {
        question:
          'What does FPA stand for? Explain why identifying FPA is the most important first step before writing your response.',
        lines: 4,
        modelAnswer:
          'FPA stands for Form, Purpose, and Audience. Identifying FPA is essential because every writing decision - including register, vocabulary, structure, and tone - must be shaped by these three factors. A response that ignores form (e.g., forgetting to use the conventions of a speech) or misjudges audience (e.g., using informal language in a formal report) will lose marks even if the ideas are good.',
        marks: 4,
      },
      {
        question:
          'Read this Paper 2 question: "Write a letter to your local MP arguing that more funding should be provided for youth sports facilities." Identify the form, purpose, and audience.',
        lines: 4,
        modelAnswer:
          'Form: a formal letter. Purpose: to argue (to persuade the MP to take action). Audience: a Member of Parliament - an adult in a position of authority who expects formal, well-evidenced writing.',
        marks: 3,
      },
      {
        question:
          'Why is Task 2 worth more marks than Task 1? What does this suggest about how you should manage your time during the exam?',
        lines: 4,
        modelAnswer:
          "Task 2 is worth 30 marks compared to Task 1's 20 marks because it requires a more extended and complex piece of writing. This suggests students should allocate more time to Task 2 - approximately 45 minutes - while completing Task 1 in around 30 minutes. Students should not over-invest time in Task 1 at the expense of Task 2.",
        marks: 3,
      },
      {
        question:
          'Describe one key difference between Edexcel IGCSE English Language Paper 1 and Paper 2.',
        lines: 3,
        modelAnswer:
          'Paper 1 tests both reading comprehension and writing, requiring students to analyse unseen texts as well as produce a piece of writing. Paper 2 is a dedicated transactional writing paper with no reading comprehension component - the entire paper focuses on producing two pieces of transactional writing for different forms, purposes, and audiences.',
        marks: 2,
      },
    ],
    teacherNotes: [
      'Students are often confused about the difference between Paper 1 and Paper 2 - clarify this explicitly at the start of the lesson and return to it whenever needed.',
      'The mark split (16+4 for Task 1; 24+6 for Task 2) is crucial for students to understand - emphasise that content/organisation always carries more weight than technical accuracy, but accuracy cannot be ignored.',
      'If past papers are available, use them; otherwise use the teacher-created mock questions in the FPA activity.',
      'The FPA framework is a touchstone for the entire unit - reinforce it every lesson to make it automatic.',
    ],
    targetedSkills: [
      'Understanding exam structure',
      'Question decoding',
      'Form, purpose, and audience identification',
      'Exam time management',
      'Assessment objective awareness',
    ],
  },

  // ── Lesson 2: Transactional Writing Forms ─────────────────────────────────
  {
    id: 'y11lp2-02',
    title: 'Transactional Writing Forms - Article, Speech, Letter, Report',
    text: 'IGCSE English Language Paper 2',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Identify and describe the four main transactional writing forms tested on Paper 2',
      'Understand the key conventions of articles, speeches, letters, and reports',
      'Recognise how form-specific features signal the form to the examiner',
      'Practise applying the correct conventions to short writing tasks',
    ],
    successCriteria: [
      'I can identify the key conventions of an article, speech, letter, and report',
      'I can explain how each form uses layout, language, and structure differently',
      'I can write an opening paragraph that clearly signals the correct form',
      'I can check my own writing to ensure it includes the required form features',
    ],
    keywords: [
      'article',
      'speech',
      'letter',
      'report',
      'convention',
      'layout',
      'salutation',
      'headline',
      'subheading',
      'direct address',
    ],
    starterActivity: {
      title: 'Form Sorting Challenge',
      duration: '8 minutes',
      instructions:
        'Distribute an envelope to each pair containing eight short text extracts - two from articles, two from speeches, two from letters, and two from reports. Students must sort the extracts into the four categories and write down two features that helped them identify each form. Teacher takes feedback and uses the responses to build a four-column table on the board: Article | Speech | Letter | Report. Students add to their own version of this table as the lesson progresses.',
      differentiation: {
        support:
          'Label one extract in each category with the form name so students have an anchor point before sorting the remaining extracts.',
        core: 'Students sort all eight extracts independently and identify two identifying features per form.',
        stretch:
          'Students identify three features per form and explain which feature is the single most reliable indicator for each form.',
      },
      resources: [
        'Envelopes each containing eight labelled text extracts (one per pair)',
        'Four-column table worksheet for student notes',
      ],
    },
    mainActivities: [
      {
        title: 'Forms in Focus - Guided Analysis of Conventions',
        duration: '20 minutes',
        instructions:
          'Work through each of the four forms systematically on the board, building a "conventions checklist" that students record. Article: headline, subheadings (optional), by-line, columns of prose, third-person or first-person depending on type, present tense common, engagement hook in opening. Speech: direct address ("Ladies and gentlemen", "you"), rhetorical questions, tricolon, rule of three, first person ("I"), spoken connectives ("Now,", "Let me be clear,"), strong conclusion returning to opening theme. Letter: formal - address block, date, "Dear [title/name]", "Yours sincerely/faithfully", formal register, clear paragraphing; informal - more relaxed tone but still organised. Report: heading, subheadings, numbered or bulleted sections, factual and impersonal register, third person, present tense, recommendations section. For each form, display a colour-annotated model answer and guide students to match features to the checklist.',
        differentiation: {
          support:
            'Provide a pre-printed conventions checklist with the category headings already filled in - students add the specific features as the teacher works through each form.',
          core: 'Students build the full conventions checklist from scratch during the guided analysis.',
          stretch:
            'Students annotate the model answers using their own colour-coding system, adding margin notes explaining the effect of each convention.',
        },
        resources: [
          'Four colour-annotated model answer slides (one per form)',
          'Conventions checklist worksheet',
        ],
      },
      {
        title: 'One Paragraph, Four Forms',
        duration: '20 minutes',
        instructions:
          'Give students one topic: "Schools should start the day at 9.30am rather than 8.30am." Students must write a single opening paragraph for each of the four forms on this topic - article, speech, letter (to a headteacher), and report. Each paragraph should be 3-5 sentences and must include at least two form-specific conventions. After writing, students swap books with a partner who ticks off any conventions they can spot. Pairs then discuss: which opening was hardest to write and why? Teacher takes whole-class feedback and displays strong examples from student work on the visualiser.',
        differentiation: {
          support:
            'Provide sentence starters for each form (e.g., Article: "Research suggests that..."; Speech: "Good morning, everyone..."; Letter: "Dear Mr/Ms [name], I am writing to..."; Report: "This report examines...").',
          core: 'Students write all four openings independently within the time limit.',
          stretch:
            'Students write all four openings and then rank them in order of which demonstrates the strongest command of form, justifying their ranking.',
        },
        resources: [
          'Topic card: "Schools should start the day at 9.30am rather than 8.30am"',
          'Conventions checklist from the previous activity for reference',
          'Peer assessment form with form-specific checklists',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Conventions Parade',
      duration: '7 minutes',
      instructions:
        'Teacher calls out a random transactional writing form. Students have 30 seconds to write down as many conventions as they can remember on their mini-whiteboard. Repeat for all four forms. The student with the most correctly listed conventions overall wins. Teacher uses the results to identify any form where conventions are consistently thin or missing - this flags which form needs additional practise in the following lesson.',
      differentiation: {
        support:
          'Students may use their conventions checklist as a reference during the Conventions Parade.',
        core: 'Students complete the Conventions Parade from memory.',
        stretch:
          'After naming conventions, stretch students must also give a specific example of that convention being used in a sentence.',
      },
    },
    homework:
      'Write a complete opening paragraph (5-6 sentences) for each of the following two tasks: (1) An article for a school magazine about the benefits of reading for pleasure. (2) A speech to your year group encouraging them to take care of their mental health. Ensure each opening clearly signals its form through at least two conventions.',
    worksheetQuestions: [
      {
        question:
          'List three conventions specific to speech writing that would not typically appear in a formal letter.',
        lines: 4,
        modelAnswer:
          'Three speech-specific conventions are: (1) direct address to the audience using "you" or a salutation such as "Ladies and gentlemen"; (2) rhetorical questions designed to engage the audience and provoke thought; (3) spoken connectives or discourse markers such as "Now," "Let me be clear," or "Consider this -" which create the sense of a live spoken address.',
        marks: 3,
      },
      {
        question:
          'Explain the difference between "Yours sincerely" and "Yours faithfully" and when each is used in formal letter writing.',
        lines: 4,
        modelAnswer:
          '"Yours sincerely" is used when you have addressed the letter to a named person - for example, "Dear Ms Johnson". "Yours faithfully" is used when you have not used the recipient\'s name - for example, "Dear Sir or Madam". A common error is using these interchangeably; the distinction demonstrates command of formal letter conventions.',
        marks: 3,
      },
      {
        question:
          'A student writes a report opening as follows: "I think the school canteen is really bad and needs to be improved. It smells and the food is unhealthy." Identify two errors with form and rewrite the opening correctly.',
        lines: 5,
        modelAnswer:
          'Errors: (1) First-person opinion ("I think") is inappropriate in a report, which requires an impersonal, objective register. (2) Informal and vague language ("really bad", "smells") is inappropriate for a formal report. Improved version: "This report examines the current provision of the school canteen, with a focus on nutritional standards and the dining environment. Evidence gathered suggests that significant improvements are required in both areas."',
        marks: 4,
      },
      {
        question:
          'Why is it important for the opening sentence of your response to signal the correct form clearly to the examiner?',
        lines: 3,
        modelAnswer:
          'The opening sentence signals to the examiner that the student has understood the question and is in control of the form. An examiner who sees a clear headline and subheading for an article, or "Dear Mr Jones" for a letter, immediately knows the student understands the task. Failing to signal the form early can undermine the entire response, even if the content is otherwise strong.',
        marks: 2,
      },
      {
        question:
          'Write the opening two sentences of a report titled "The Impact of Social Media on Teenagers\' Sleep Patterns". Your opening must demonstrate correct register and at least one report convention.',
        lines: 4,
        modelAnswer:
          'This report examines the impact of social media use on the sleep patterns of teenagers aged 13 to 18. Drawing on recent research and data gathered from a survey of Year 10 and Year 11 students, it identifies key patterns and concludes with a series of targeted recommendations.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The sorting activity works best when the extracts are genuinely mixed - avoid making one form obviously easier to identify than another.',
      'Students often conflate article and report conventions; stress that articles are published for a general readership and can use an engaging, personal tone, while reports are formal documents produced for a specific decision-making audience.',
      'Encourage students to annotate their conventions checklists with personal examples throughout the unit - by the exam, this checklist should be committed to memory.',
      'The "One Paragraph, Four Forms" activity generates excellent discussion material - hold back strong student examples to use as models in future lessons.',
    ],
    targetedSkills: [
      'Form-specific writing conventions',
      'Register control',
      'Opening paragraph construction',
      'Self-assessment and peer feedback',
      'Transactional writing fluency',
    ],
  },

  // ── Lesson 3: Purpose and Audience Adaptation ─────────────────────────────
  {
    id: 'y11lp2-03',
    title: 'Purpose and Audience - Adapting Your Writing for Every Task',
    text: 'IGCSE English Language Paper 2',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand how writing purpose (to inform, argue, persuade, advise) shapes language choices',
      'Understand how audience (age, status, relationship to writer) shapes register and tone',
      'Analyse model responses to identify how purpose and audience are signalled through language',
      'Practise adapting the same content for two different purposes and audiences',
    ],
    successCriteria: [
      'I can identify the purpose of a piece of transactional writing and explain how it shapes language choices',
      'I can explain who the audience is and describe how the writer adapts their language for them',
      'I can rewrite the same content for a different purpose or audience and explain what has changed',
      'I can write a paragraph that clearly targets a specific audience using appropriate register and tone',
    ],
    keywords: [
      'purpose',
      'audience',
      'register',
      'tone',
      'formal',
      'informal',
      'persuade',
      'inform',
      'argue',
      'advise',
    ],
    starterActivity: {
      title: 'Same Message, Different Audience',
      duration: '8 minutes',
      instructions:
        'Display two short texts on the board. Both communicate the same message - "You should exercise regularly" - but one is from a GP\'s leaflet for adult patients, and the other is from a school poster aimed at teenagers. Students read both and annotate: What differences do they notice in vocabulary? Sentence length? Tone? Use of examples? After 4 minutes of silent annotation, take paired discussion, then whole-class feedback. Use responses to introduce the concept that purpose and audience are not just a checklist - they are the invisible force shaping every word.',
      differentiation: {
        support:
          'Provide a comparative annotation table with sentence starters: "In Text A, the writer uses ___, which suggests the audience is ___ because...".',
        core: 'Students annotate freely and identify at least three differences.',
        stretch:
          'Students write a third version of the message for a third audience of their choice and explain their language choices.',
      },
      resources: [
        'Two comparison texts displayed on board',
        'Comparative annotation table for support students',
      ],
    },
    mainActivities: [
      {
        title: 'The Purpose Spectrum',
        duration: '20 minutes',
        instructions:
          'Introduce the four main purposes tested on Paper 2 as a spectrum: Inform - Advise - Argue - Persuade. Explain that these are not entirely separate; a speech might both argue and persuade simultaneously, while a leaflet might inform and advise. For each purpose, display a model extract and guide students to identify: (1) Key linguistic features (e.g., imperatives in advice, rhetorical questions in persuasion, evidence and statistics in argument). (2) How the tone shifts across the spectrum - from neutral and factual at the inform end to emotive and urgent at the persuade end. Students record key features for each purpose in a reference grid. Then pose a challenge: "Here are five Paper 2 questions - identify the primary purpose and predict the two most important linguistic features for each."',
        differentiation: {
          support:
            'Provide the reference grid partially completed, with the purpose labels and one feature per column already filled in.',
          core: 'Students complete the reference grid and purpose identification challenge independently.',
          stretch:
            'Students write one sentence for each of the five questions that uses both of their predicted linguistic features, then explain the effect of each choice.',
        },
        resources: [
          'Purpose spectrum slide with four model extracts',
          'Reference grid worksheet',
          'Five Paper 2 questions for the identification challenge',
        ],
      },
      {
        title: 'Audience Shift Writing Task',
        duration: '20 minutes',
        instructions:
          'Give students a topic: "The importance of reducing plastic waste." Students write two paragraphs of approximately 80 words each on this topic, but for different audiences: Paragraph A - for a class of 10-year-olds in a primary school assembly (informal, accessible, engaging, examples they can relate to). Paragraph B - for a board of company directors being asked to change their packaging policy (formal, evidence-based, professional, respectful but direct). After writing, students swap books with a partner. Partners highlight in one colour any language choices that clearly target the audience, and in another colour any language that seems to misjudge the audience. Partners write one piece of specific feedback using the prompt: "Your audience was most clearly signalled when you wrote ___ because...".',
        differentiation: {
          support:
            'Provide bullet-point prompts for each paragraph: Paragraph A - use: short sentences, simple vocabulary, a fun fact, "you" and "we"; Paragraph B - use: statistics, formal vocabulary, third person where appropriate, specific recommendations.',
          core: 'Students write both paragraphs independently and complete the peer assessment.',
          stretch:
            'Students write a third paragraph for a third audience of their own choice - a national newspaper readership - and explain how it differs from both of their earlier paragraphs.',
        },
        resources: [
          'Topic card',
          'Peer assessment response guide',
          'Audience prompt bullet points for support students',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Audience Auction',
      duration: '7 minutes',
      instructions:
        'Read aloud four short opening sentences from the Audience Shift task (selected anonymously from student work). For each sentence, the class "auctions" their opinion - is this (A) clearly targeted at the right audience, (B) partially targeted, or (C) misjudging the audience? Students hold up A, B, or C cards. Teacher facilitates brief discussion for each sentence, drawing out the specific language choices that made the targeting strong or weak. End by asking: "What is the single most important language change you can make to show you know your audience?"',
      differentiation: {
        support:
          'Provide sentence frames for justifying responses: "I chose ___ because the writer uses ___, which suggests...".',
        core: 'Students justify their auction responses with specific reference to language.',
        stretch:
          'Stretch students suggest a specific rewrite for any sentence rated B or C to improve the audience targeting.',
      },
    },
    homework:
      'Write one complete paragraph (100-120 words) for each of the following: (1) A section of an advice leaflet aimed at Year 7 students about managing homework stress. (2) A section of a formal report to school governors about the same issue. Your paragraphs must clearly signal the correct audience through register, vocabulary, and sentence structure.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between "arguing" and "persuading" as writing purposes, giving one example of a language feature associated with each.',
        lines: 5,
        modelAnswer:
          'Arguing involves presenting a case logically, using evidence, counter-arguments, and reasoned conclusions to demonstrate that a viewpoint is correct. A key feature is the use of factual evidence or statistics. Persuading, while it may also use evidence, relies more heavily on emotional appeal - creating a feeling in the reader that connects them to the cause. A key feature of persuasion is emotive language, such as "devastating" or "heartbreaking", which drives the reader towards a particular emotional response.',
        marks: 4,
      },
      {
        question:
          'A student writes the following for an audience of company directors: "Plastic is, like, really bad for the environment and we all need to chill about it and actually do something." Identify two audience errors and rewrite the sentence correctly.',
        lines: 5,
        modelAnswer:
          'Audience errors: (1) Informal filler language ("like", "chill") is entirely inappropriate for a professional business audience; (2) The vague qualifier "really bad" lacks the precision and credibility expected in formal communication with decision-makers. Rewrite: "The environmental impact of single-use plastic is significant and well-documented; urgent, strategic action from industry leaders is required to address this crisis effectively."',
        marks: 4,
      },
      {
        question:
          'What is the difference between "tone" and "register"? Give one example of each in the context of transactional writing.',
        lines: 4,
        modelAnswer:
          'Register refers to the level of formality in language - a formal register uses sophisticated vocabulary, complex sentence structures, and avoids contractions or colloquialisms. A formal register would be appropriate in a letter to a headteacher. Tone refers to the emotional attitude or stance of the writing towards its subject or audience - for example, a persuasive speech might have an urgent, passionate tone, while a report would adopt a measured, objective tone.',
        marks: 3,
      },
      {
        question:
          'How does the purpose of "informing" differ from the purpose of "advising"? Give one linguistic feature that distinguishes them.',
        lines: 4,
        modelAnswer:
          'Informing communicates facts and knowledge to the audience without directing them towards any particular action. A key feature is factual statements and statistics presented neutrally. Advising goes further by guiding the audience towards specific actions or decisions. A key feature of advisory writing is the use of imperative verbs and modal verbs such as "should", "could", or "consider" - directing the reader towards a course of action.',
        marks: 3,
      },
      {
        question:
          'Read this Paper 2 question: "Write an article for a national newspaper arguing that social media companies should be legally required to verify users\' ages." Identify the purpose and audience, then list three language features you would use in your response.',
        lines: 5,
        modelAnswer:
          'Purpose: to argue. Audience: adult general public readers of a national newspaper - educated, literate, likely to have opinions on technology and child safety. Three language features: (1) Statistics and evidence to lend credibility to the argument; (2) Rhetorical questions to engage the reader and challenge opposing views; (3) Reasoned counter-argument followed by rebuttal to demonstrate balanced thinking and strengthen the argument.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Students often confuse purpose with form - remind them that a speech can have the purpose of persuading, informing, or arguing, and the form (speech) is separate from the purpose.',
      'The Audience Shift activity generates rich peer assessment opportunities; circulate during writing to identify two or three strong contrasting examples to share.',
      "Emphasise that the most common audience error at GCSE level is slipping into informal language in formal tasks - this is so ingrained in students' writing habits that it needs repeated, explicit attention.",
    ],
    targetedSkills: [
      'Purpose identification and application',
      'Audience adaptation',
      'Register and tone control',
      'Comparative writing',
      'Self-monitoring for audience appropriateness',
    ],
  },

  // ── Lesson 4: Structural Techniques for Writing ───────────────────────────
  {
    id: 'y11lp2-04',
    title: 'Structural Techniques - Organising Writing for Maximum Impact',
    text: 'IGCSE English Language Paper 2',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand how effective structural choices improve the impact of transactional writing',
      'Identify and apply structural techniques including topic sentences, signposting, and paragraph sequencing',
      'Understand how to use connectives and discourse markers to guide the reader',
      'Plan a structured response to a Paper 2 task using a clear organisational framework',
    ],
    successCriteria: [
      'I can write a clear topic sentence that controls and introduces each paragraph',
      'I can use discourse markers and connectives to guide the reader through my argument',
      'I can plan the structure of a full Paper 2 response in five minutes',
      'I can explain how the ordering of my paragraphs creates a deliberate effect on the reader',
    ],
    keywords: [
      'topic sentence',
      'discourse marker',
      'connective',
      'signposting',
      'paragraph',
      'structure',
      'sequencing',
      'counter-argument',
      'conclusion',
      'cohesion',
    ],
    starterActivity: {
      title: 'Scrambled Essay',
      duration: '8 minutes',
      instructions:
        'Distribute an envelope containing six paragraphs from a model article (cut into strips). The paragraphs have been scrambled. Students work in pairs to reassemble them into the most effective order. Students must be ready to justify their ordering. Teacher takes feedback, revealing the original order. Key discussion: "Did anyone choose a different order? Could it work?" Use this to introduce the idea that structure is a deliberate choice - effective writers do not just write paragraphs in the order ideas occur to them, they plan a sequence that builds the argument and maximises impact.',
      differentiation: {
        support:
          'Mark the introduction and conclusion paragraphs before cutting so students only need to order the four body paragraphs.',
        core: 'Students order all six paragraphs without guidance and justify their choices.',
        stretch:
          'Students order all six paragraphs and write two alternative orderings of the body paragraphs, explaining what different effect each sequence would create.',
      },
      resources: [
        'Envelopes with six scrambled paragraph strips (one per pair)',
        'Original article printed for teacher reference',
      ],
    },
    mainActivities: [
      {
        title: 'The Architecture of Argument - Topic Sentences and Signposting',
        duration: '20 minutes',
        instructions:
          'Explain that a well-structured essay is like a building - each paragraph is a room with a clear purpose, and the reader needs signposts (discourse markers) to navigate between them. Focus on two key structural tools: (1) Topic sentences: the first sentence of each paragraph must tell the reader what the paragraph is about and how it connects to the overall argument. Model three weak opening sentences and three strong topic sentences for the same paragraph. Students practise improving three additional weak topic sentences. (2) Discourse markers: display a categorised list - adding (furthermore, moreover, in addition), contrasting (however, on the other hand, conversely, yet), sequencing (firstly, subsequently, finally), emphasising (crucially, above all, it is worth noting). Students must use at least one from each category in a short piece of writing on any topic. Teacher circulates, identifying strong uses to share on the visualiser.',
        differentiation: {
          support:
            'Provide the categorised discourse marker list pre-printed. Allow students to write just the topic sentences for three imaginary paragraphs rather than writing complete paragraphs.',
          core: 'Students improve the three weak topic sentences and write a short piece using four different discourse markers.',
          stretch:
            'Students write a five-paragraph argument plan using precisely five different discourse markers (one to open each paragraph) and explain the effect of the progression from one to the next.',
        },
        resources: [
          'Weak and strong topic sentence comparison slide',
          'Three topic sentences for improvement (worksheet)',
          'Categorised discourse marker reference list',
        ],
      },
      {
        title: 'Five-Minute Plan to Full Response',
        duration: '20 minutes',
        instructions:
          'Display a Paper 2 Task 2 question: "Write a speech to be delivered at your school\'s end-of-year assembly arguing that mobile phones should be banned in all UK schools." Students have exactly five minutes to produce a written plan: introduction (hook + position statement), body paragraph 1 (strongest argument - topic sentence + evidence/example), body paragraph 2 (second argument), body paragraph 3 (counter-argument + rebuttal), conclusion (return to opening theme + call to action). Teacher then models the transition from plan to full opening paragraph live on the board, demonstrating how the plan\'s topic sentence becomes a developed paragraph with evidence and a discourse marker. Students then write paragraphs 1 and 2 from their own plans. Peer review: partner checks for clear topic sentences and at least one discourse marker per paragraph.',
        differentiation: {
          support:
            'Provide a planning frame with labelled sections and sentence starters for each paragraph.',
          core: 'Students complete the five-minute plan independently and write two full paragraphs from it.',
          stretch:
            'Students complete the plan and write three full paragraphs, then write a brief note explaining how their chosen paragraph sequence builds the argument to the strongest possible conclusion.',
        },
        resources: [
          'Speech question displayed on board',
          'Planning frame (support students)',
          'Peer review checklist: topic sentence + discourse marker per paragraph',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Structure Speed-Check',
      duration: '7 minutes',
      instructions:
        'Teacher distributes one short extract from a student response (anonymised, collected during the lesson). Students have three minutes to: (1) underline each topic sentence, (2) circle any discourse markers, (3) identify which structural element is missing or weak. Students share their findings with the class. Teacher summarises the key structural lesson: "If every paragraph has a clear topic sentence and is connected to the next by a discourse marker, the reader - and the examiner - can follow your argument effortlessly."',
      differentiation: {
        support:
          'Focus only on identifying topic sentences; the discourse marker and weakness tasks are optional extensions.',
        core: 'Students complete all three structure checks.',
        stretch:
          'Students rewrite the weakest paragraph from the extract, improving both the topic sentence and the discourse marker signposting.',
      },
    },
    homework:
      'Write a full five-paragraph article (approximately 250-300 words) in response to this question: "Write an article for a broadsheet newspaper arguing that the school leaving age should be raised to 18." Your article must include: a clear topic sentence for each paragraph, at least four different discourse markers, one counter-argument with rebuttal.',
    worksheetQuestions: [
      {
        question: 'What is a topic sentence and why is it important in transactional writing?',
        lines: 4,
        modelAnswer:
          "A topic sentence is the opening sentence of a paragraph that introduces and controls the paragraph's main idea. In transactional writing, topic sentences are important because they signal to the examiner that the writing is organised, purposeful, and easy to follow. A strong topic sentence also links the paragraph back to the overall argument or purpose of the piece, maintaining coherence throughout.",
        marks: 3,
      },
      {
        question:
          'Improve this weak topic sentence for a paragraph in an article about school uniforms: "School uniforms are a thing that schools have." Rewrite it as a strong topic sentence for a paragraph arguing that uniforms improve learning.',
        lines: 3,
        modelAnswer:
          'Rewritten topic sentence: "One of the most compelling arguments in favour of school uniforms is their demonstrable positive effect on students\' ability to focus on learning." This introduces the paragraph\'s argument clearly, connects to the overall position of the article, and gives the reader a clear expectation of what the paragraph will cover.',
        marks: 3,
      },
      {
        question:
          'Categorise these connectives into the correct groups: "however", "furthermore", "above all", "firstly", "on the other hand", "crucially". Groups: Adding | Contrasting | Sequencing | Emphasising.',
        lines: 4,
        modelAnswer:
          'Adding: "furthermore". Contrasting: "however", "on the other hand". Sequencing: "firstly". Emphasising: "above all", "crucially". Students should understand that some discourse markers can serve more than one function depending on context, but these are the primary categories for each.',
        marks: 3,
      },
      {
        question:
          'Why is a counter-argument important in a persuasive or argumentative piece of writing?',
        lines: 4,
        modelAnswer:
          'Including a counter-argument demonstrates that the writer has considered the issue from multiple perspectives, which increases the credibility and intellectual maturity of the response. By acknowledging an opposing view and then rebutting it - showing why it is flawed or less convincing - the writer actually strengthens their own argument. Examiners reward students who can do this effectively because it shows sophisticated engagement with the topic.',
        marks: 3,
      },
      {
        question:
          'Create a five-paragraph plan for this task: "Write a letter to your local council arguing that more public green spaces should be created in your town." Include a topic sentence for each paragraph.',
        lines: 8,
        modelAnswer:
          'Paragraph 1 (Introduction): "I am writing to urge the council to prioritise the creation of accessible public green spaces across our town, a matter of urgent importance for the wellbeing of all residents." Paragraph 2 (Argument 1): "The evidence linking access to green spaces with improved physical and mental health outcomes is overwhelming and compelling." Paragraph 3 (Argument 2): "Children and young people in our town are particularly disadvantaged by the current lack of safe, attractive outdoor spaces for recreation." Paragraph 4 (Counter-argument + rebuttal): "While some may argue that the cost of creating new green spaces is prohibitive, the long-term savings in public health expenditure far outweigh the initial investment." Paragraph 5 (Conclusion): "The creation of public green spaces is not a luxury but a necessity; I urge the council to act with both urgency and ambition on this issue."',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The Scrambled Essay activity is highly effective but requires careful preparation - ensure the strips are genuinely debatable in order rather than having an obvious single correct sequence.',
      'The five-minute planning exercise is an exam skill that needs repeated practice; return to it in every timed writing lesson.',
      'Students frequently omit the counter-argument paragraph - explicitly flag it in this lesson and in every subsequent lesson where students write persuasive or argumentative responses.',
    ],
    targetedSkills: [
      'Topic sentence writing',
      'Discourse marker use',
      'Structural planning',
      'Counter-argument construction',
      'Paragraph sequencing',
    ],
  },

  // ── Lesson 5: Opening and Closing Strategies ──────────────────────────────
  {
    id: 'y11lp2-05',
    title: 'Opening and Closing Strategies - Hooks, Frames, and Memorable Endings',
    text: 'IGCSE English Language Paper 2',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand why openings and closings carry disproportionate weight in transactional writing',
      'Identify and practise six opening techniques for transactional writing',
      'Understand how to write a closing that creates a sense of completion and impact',
      'Apply cyclical structure (returning to the opening theme in the conclusion) effectively',
    ],
    successCriteria: [
      'I can write an opening sentence that immediately engages the reader and signals purpose',
      'I can identify and name at least four opening techniques and give an example of each',
      'I can write a conclusion that refers back to my opening and ends on a memorable note',
      'I can explain why my chosen opening technique is appropriate for the specific task',
    ],
    keywords: [
      'hook',
      'anecdote',
      'rhetorical question',
      'statistic',
      'cyclical structure',
      'call to action',
      'opening',
      'conclusion',
      'impact',
      'framing',
    ],
    starterActivity: {
      title: 'First Line Frenzy',
      duration: '8 minutes',
      instructions:
        'Display eight first lines from high-quality transactional writing - two from articles, two from speeches, two from letters, two from reports. For each, students rate the opening from 1 (weak - I would stop reading) to 5 (compelling - I must read on) and in one word, describe what makes it strong or weak. Pairs compare ratings. Teacher facilitates discussion: "What makes a first line compelling?" Generate a class list on the board. Introduce the term "hook" and explain that there are several reliable hook strategies for transactional writing.',
      differentiation: {
        support:
          'Provide a vocabulary list of descriptive words students can use in their ratings (e.g., "direct", "alarming", "warm", "dull", "confident", "vague").',
        core: 'Students rate and describe all eight first lines and contribute to the class discussion.',
        stretch:
          'Students rank all eight first lines from weakest to strongest and write a two-sentence justification for their top and bottom choices.',
      },
      resources: [
        'Eight first lines displayed on board',
        'Rating and description table for students',
      ],
    },
    mainActivities: [
      {
        title: 'Six Hooks - Teaching Opening Techniques',
        duration: '20 minutes',
        instructions:
          'Teach six opening techniques with a model example of each. For each technique, students immediately write their own version using a given topic ("Every school in the UK should have a dedicated wellbeing day each term"): (1) Startling statistic - "One in four young people in the UK will experience a mental health problem this year. Is that acceptable?" (2) Provocative rhetorical question - "When was the last time your school asked you how you were - and actually listened to the answer?" (3) Anecdote or scenario - "Imagine arriving at school on a Friday, knowing that the day ahead is designed entirely for your wellbeing..." (4) Bold statement or declaration - "Schools are failing their students - not in grades, but in the thing that matters most: how they feel." (5) Surprising contrast or juxtaposition - "We teach students to conjugate French verbs and solve quadratic equations. We do not teach them how to cope." (6) Direct address - "You have sat in a classroom feeling overwhelmed. You are not alone." For each technique, teacher models, then students write. After all six, students choose their two favourites and explain why.',
        differentiation: {
          support:
            'Students focus on three of the six techniques (statistic, rhetorical question, direct address) and adapt the model examples rather than writing from scratch.',
          core: 'Students write all six openings and identify their two favourites with explanations.',
          stretch:
            'Students write all six openings, choose their best, and write a short analysis explaining what effect the technique creates and why it is appropriate for the task.',
        },
        resources: [
          'Six hooks reference card with model examples',
          'Topic card for practice openings',
        ],
      },
      {
        title: 'Closing Time - Endings that Resonate',
        duration: '20 minutes',
        instructions:
          'Explain that the conclusion is the last thing the examiner reads and must leave a strong impression. Introduce three closing strategies: (1) Cyclical structure - return to the opening image, statistic, or question and resolve or reframe it. (2) Call to action - tell the reader exactly what you want them to do, using a direct imperative: "Sign the petition. Attend the meeting. Demand change." (3) Memorable final sentence - a short, powerful sentence that distils the entire argument into one sharp line. Display three model conclusions and ask students to identify which strategy each uses. Students then write a conclusion for their opening from the Six Hooks activity using at least two of the three strategies. Pairs swap and assess using the prompt: "Does the conclusion feel like a satisfying end? Does it connect back to the opening? Does the final sentence land with impact?"',
        differentiation: {
          support:
            'Provide a conclusion sentence frame: "This is why ___ matters. We can no longer afford to ___. [Final sentence]."',
          core: 'Students write a full conclusion independently using two of the three strategies.',
          stretch:
            'Students write two different conclusions using different strategies and explain which is more effective and why.',
        },
        resources: [
          'Three model conclusions displayed on board',
          'Conclusion strategies reference card',
          'Peer assessment prompt card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Opening and Closing Swap',
      duration: '7 minutes',
      instructions:
        'Students share their best opening sentence and their final sentence with a partner. Partners read both and respond to: "Do these two sentences feel like they belong to the same piece of writing? Is there a sense of coming full circle?" Teacher takes three or four examples to share with the class. Conclude with the key examiner insight: "Examiners spend a disproportionate amount of attention on your first and last sentences - make them count."',
      differentiation: {
        support:
          'Students share their opening sentence only and receive feedback on the hook technique used.',
        core: 'Students share both opening and closing and respond to the full "coming full circle" prompt.',
        stretch:
          "Students evaluate their partner's opening and closing as an examiner would, noting the hook technique, the closing strategy, and one specific improvement suggestion.",
      },
    },
    homework:
      'Write a complete opening paragraph and a complete conclusion for this task: "Write a speech to parents at your school\'s parents\' evening arguing that homework should be abolished." Your opening must use a named hook technique (state which one you are using), and your conclusion must use a cyclical structure that returns to the theme of your opening.',
    worksheetQuestions: [
      {
        question:
          'Name four opening hook techniques for transactional writing and give one example of each.',
        lines: 8,
        modelAnswer:
          '(1) Startling statistic: "Every year, over half a million teenagers in the UK leave school without the qualifications they need to progress." (2) Rhetorical question: "How long can we continue to ignore the crisis unfolding in our classrooms?" (3) Anecdote/scenario: "Imagine receiving a letter from your child\'s school informing you that they are struggling - not academically, but emotionally." (4) Bold declaration: "The education system is broken - and it is the students who pay the price." Other valid techniques include direct address and surprising contrast/juxtaposition.',
        marks: 4,
      },
      {
        question:
          'What is a cyclical structure in the context of a conclusion, and why is it effective?',
        lines: 4,
        modelAnswer:
          'A cyclical structure is when the conclusion returns to an image, idea, question, or phrase introduced in the opening, creating a sense of satisfying completeness. It is effective because it gives the piece a deliberate, crafted quality that signals the writer is in control of their material. It also creates a strong sense of closure for the reader, ending the piece on a note that resonates with the opening rather than simply stopping.',
        marks: 3,
      },
      {
        question:
          'A student ends their persuasive article with: "So that is why I think this is a good idea and people should do it." Explain why this is a weak conclusion and rewrite it as a strong final sentence.',
        lines: 5,
        modelAnswer:
          'This is a weak conclusion because it is vague ("this is a good idea"), fails to specify what "it" refers to, uses informal language ("I think"), and lacks impact. It does not leave the reader with any sense of urgency, emotion, or memorability. Rewrite: "The choice is simple: we can continue to turn away from this crisis, or we can act - decisively, immediately, and together. The cost of action is small. The cost of inaction is unthinkable."',
        marks: 4,
      },
      {
        question:
          'Why are opening and closing sentences disproportionately important in a Paper 2 response?',
        lines: 3,
        modelAnswer:
          "Opening sentences make the examiner's first impression of the writing and immediately signal whether the student is in control of language and purpose. Closing sentences are the last thing the examiner reads before awarding a mark, so a powerful, purposeful ending leaves a strong final impression. Research into marking psychology shows that first and last impressions carry particular weight; therefore, a strong opening and closing can positively influence how the rest of the piece is perceived.",
        marks: 3,
      },
      {
        question:
          'Write a "call to action" conclusion of two to three sentences for an article arguing that people should donate to food banks.',
        lines: 4,
        modelAnswer:
          'The solution to food poverty does not lie in government policy alone - it lies in us. Find your nearest food bank. Donate what you can. Because when you do, you are not simply giving food; you are giving someone the dignity of a meal and the knowledge that they are not forgotten.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The Six Hooks activity works best when students write quickly - resist the temptation to give them more than 2 minutes per hook, as the pace keeps energy high and prevents over-thinking.',
      'Cyclical structure is a particularly high-mark technique - model it explicitly with a complete example showing the opening and conclusion side by side.',
      'Students often struggle to end with impact because they have run out of ideas by the time they reach the conclusion; the planning lesson (Lesson 4) should have addressed this, but reinforce the need to plan the ending before starting to write.',
    ],
    targetedSkills: [
      'Opening hook techniques',
      'Conclusion writing',
      'Cyclical structure',
      'Call to action',
      'First and final sentence crafting',
    ],
  },

  // ── Lesson 6: Formal and Informal Register ────────────────────────────────
  {
    id: 'y11lp2-06',
    title: 'Formal and Informal Register - Controlling Tone Across All Tasks',
    text: 'IGCSE English Language Paper 2',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand the full spectrum of register from highly formal to informal and conversational',
      'Identify specific language features that signal formal or informal register',
      'Recognise which register is appropriate for each Paper 2 task type',
      'Practise maintaining consistent register throughout a sustained piece of writing',
    ],
    successCriteria: [
      'I can identify whether a piece of writing uses formal or informal register and justify my answer',
      'I can list at least five linguistic features of formal register and five of informal register',
      'I can rewrite a paragraph to shift its register from informal to formal, or vice versa',
      'I can maintain a consistent register throughout a full paragraph without slipping',
    ],
    keywords: [
      'register',
      'formal',
      'informal',
      'colloquialism',
      'contraction',
      'Standard English',
      'tone',
      'vocabulary',
      'syntax',
      'consistency',
    ],
    starterActivity: {
      title: 'Register Radar',
      duration: '8 minutes',
      instructions:
        'Display a sliding scale on the board from 1 (most informal) to 5 (most formal). Read aloud six short sentences from different writing tasks - a text message, a casual email, a newspaper article, a letter to a headteacher, a formal report, and a legal document. For each sentence, students hold up one to five fingers to indicate where they place it on the register scale. Teacher records the class consensus and asks: "What specific words or grammatical features told you this was formal/informal?" Generate two lists on the board: Formal features | Informal features.',
      differentiation: {
        support:
          'Provide a printed list of register features to refer to during the activity (e.g., contractions = informal; passive voice = formal).',
        core: 'Students respond to all six sentences and contribute features to both lists.',
        stretch:
          'Students rate all six and write a one-sentence explanation for each, identifying the single most telling language feature in each example.',
      },
      resources: [
        'Register scale slide',
        'Six sentence examples (teacher reads aloud)',
        'Register feature list for support students',
      ],
    },
    mainActivities: [
      {
        title: 'The Register Toolkit - Features of Formal and Informal Writing',
        duration: '20 minutes',
        instructions:
          "Build a comprehensive register toolkit through guided note-taking and model analysis. Formal register features: complex vocabulary and Latinate words (demonstrate, endeavour, facilitate), passive voice (it has been decided, research has shown), no contractions (do not, cannot, it is), impersonal third person, complex sentence structures, hedging language (it could be argued, research suggests), formal connectives (consequently, furthermore, it is evident that). Informal register features: contractions (don't, can't, it's), colloquialisms and slang (cool, loads of, kind of), first and second person throughout, short simple sentences for effect, rhetorical questions as asides, conversational discourse markers (so, well, you know), exclamation marks for emphasis. For each category, display a model paragraph and ask students to highlight features in different colours. Students record the toolkit in their notes. End with a key question: \"Are there any Paper 2 tasks where informal register would be appropriate?\" - Lead discussion to the answer: yes, but only selectively, and always controlled rather than sloppy.",
        differentiation: {
          support:
            'Provide a two-column feature table for students to complete during the guided notes rather than writing free-form.',
          core: 'Students build the full toolkit and annotate both model paragraphs.',
          stretch:
            'Students add a third column to the toolkit: "Effect on reader" - explaining what effect each feature type creates.',
        },
        resources: [
          'Two model paragraphs (one formal, one informal) displayed on board',
          'Register toolkit reference table',
        ],
      },
      {
        title: 'Register Rescue',
        duration: '20 minutes',
        instructions:
          'Distribute a "Register Rescue" worksheet containing four short paragraphs, each with register problems: Paragraph 1 - an article that slips into informal language mid-paragraph; Paragraph 2 - a letter to a headteacher that uses colloquialisms; Paragraph 3 - a speech that is too stiff and formal, losing its connection with the audience; Paragraph 4 - a report with inconsistent tense and shifting between first and third person. For each paragraph, students: (1) Identify the register errors (circle them), (2) Explain in one sentence what the register error is and why it is wrong for this task, (3) Rewrite the paragraph with consistent, appropriate register. After individual work, pairs compare their rewrites and discuss: "Did you make the same changes? Were some register problems more serious than others?"',
        differentiation: {
          support:
            'Provide a list of the specific errors in each paragraph so students focus on the rewriting rather than the identification.',
          core: 'Students complete all three tasks for all four paragraphs independently.',
          stretch:
            'Students complete all tasks and then write a brief register guide - one paragraph of advice for a Year 10 student explaining the top three register errors to avoid in Paper 2.',
        },
        resources: [
          'Register Rescue worksheet with four paragraphs',
          'Error identification list for support students',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Consistent or Slipping?',
      duration: '7 minutes',
      instructions:
        'Display three short extracts from student writing (anonymised, selected during the lesson). For each, students write on their mini-whiteboard: "Consistent ✓ or Slipping ✗?" and name one piece of evidence. Teacher reveals the key register issue in each and asks: "Why is register consistency important in an exam?" Students respond with the phrase: "Examiner trust - if my register slips, the examiner can see that I\'m not in full control of my writing." Conclude with the mantra: "Before you write - commit to a register. Before you hand in - check every sentence."',
      differentiation: {
        support:
          'Students identify just one feature per extract that indicates formal or informal register.',
        core: 'Students identify the register (consistent or slipping) and name one piece of evidence for each extract.',
        stretch:
          'Students identify the register, name evidence, and suggest a single sentence rewrite to fix any slippage.',
      },
    },
    homework:
      'Take one of your previous homework pieces (from any lesson in this unit). Read it carefully and highlight any moments where your register slips - where you have unintentionally become more informal (or more formal) than the task requires. Rewrite those sections with consistent register. Write a brief note (3-4 sentences) explaining what changes you made and why.',
    worksheetQuestions: [
      {
        question: 'List five features of formal register and five features of informal register.',
        lines: 6,
        modelAnswer:
          "Formal: (1) complex, Latinate vocabulary (demonstrate, facilitate); (2) no contractions (it is, cannot); (3) passive voice (it has been observed); (4) impersonal third person; (5) formal connectives (consequently, furthermore). Informal: (1) contractions (it's, don't); (2) colloquialisms and slang (loads of, kind of); (3) short, simple sentences for effect; (4) rhetorical questions used conversationally; (5) exclamation marks for emphasis.",
        marks: 5,
      },
      {
        question:
          'Explain what "register slippage" means and why it is penalised in Paper 2 responses.',
        lines: 4,
        modelAnswer:
          'Register slippage occurs when a writer shifts between formal and informal register within the same piece of writing, often accidentally. For example, a formal letter might contain a colloquial phrase like "totally agree" or a contraction like "I\'m". It is penalised because it signals a loss of control over language - the examiner sees that the student is not fully in command of their register, which undermines the technical accuracy strand and the overall impression of competence.',
        marks: 3,
      },
      {
        question:
          'Rewrite this sentence from a formal article in appropriate formal register: "The government\'s new policy is basically a bit rubbish and won\'t really help anyone, to be honest."',
        lines: 4,
        modelAnswer:
          'The government\'s recently announced policy is widely regarded as insufficient and unlikely to produce the meaningful improvements that affected communities urgently require. Or similar: "The new policy falls significantly short of what is needed to address the scale of the challenge, and its effectiveness has been called into serious question by leading experts."',
        marks: 3,
      },
      {
        question:
          'In which Paper 2 tasks might a more informal or conversational register be appropriate, and why?',
        lines: 4,
        modelAnswer:
          'A conversational register may be appropriate in a speech addressed to peers (e.g., fellow students), where the writer needs to create a sense of connection and relatability. It may also be appropriate in an article for a youth magazine or school publication, where the audience expects accessible, engaging language. However, even in these contexts, the register should be controlled and purposeful, not sloppy - colloquialisms should be a deliberate rhetorical choice, not a sign of losing control.',
        marks: 3,
      },
      {
        question:
          'A student writing a report uses the following phrases in consecutive sentences: "The data indicates a significant decline in student wellbeing." / "It\'s basically gone downhill loads." / "Furthermore, the evidence suggests targeted intervention is required." Identify the register problem and explain its effect on the reader.',
        lines: 4,
        modelAnswer:
          'The second sentence ("It\'s basically gone downhill loads") is grossly informal - using a contraction, colloquial phrasing, and a vague quantifier - sandwiched between two formally written sentences. This register slippage is jarring and undermines the credibility of the report. The reader (and examiner) immediately loses confidence in the writer\'s command of formal writing, and the professional authority of the report is damaged.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Register slippage is the single most common mark-losing error in Paper 2 - it deserves extended attention in this lesson and regular revisiting in all subsequent timed writing tasks.',
      'The Register Rescue activity is highly effective for developing editing skills - a version of it could be used as a warm-up in future lessons.',
      'Emphasise that informal register is not "wrong" per se - it is wrong when used in the wrong context. A speech to peers is one of the few contexts where a degree of informality is appropriate and effective.',
    ],
    targetedSkills: [
      'Register identification and control',
      'Formal language features',
      'Informal language features',
      'Register consistency',
      'Editing for register',
    ],
  },

  // ── Lesson 7: Persuasive and Discursive Techniques ────────────────────────
  {
    id: 'y11lp2-07',
    title: 'Persuasive and Discursive Techniques - Rhetoric, Evidence, and Counter-Argument',
    text: 'IGCSE English Language Paper 2',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand the range of persuasive and rhetorical techniques available for Paper 2 writing tasks',
      'Distinguish between persuasive writing (one-sided) and discursive writing (balanced)',
      'Identify and apply rhetorical devices including AFOREST and beyond',
      'Construct a well-evidenced argument with an effective counter-argument and rebuttal',
    ],
    successCriteria: [
      'I can identify and name at least six rhetorical and persuasive techniques with examples',
      'I can explain the difference between persuasive and discursive writing and apply each correctly',
      'I can construct a developed paragraph using evidence, analysis, and counter-argument',
      'I can deploy at least three rhetorical techniques purposefully in a single piece of writing',
    ],
    keywords: [
      'rhetoric',
      'persuasion',
      'discursive',
      'anaphora',
      'tricolon',
      'ethos',
      'pathos',
      'logos',
      'rebuttal',
      'counter-argument',
    ],
    starterActivity: {
      title: 'Spot the Technique',
      duration: '8 minutes',
      instructions:
        'Display a 150-word extract from a high-quality persuasive speech (e.g., a model speech on a school-relevant topic). Students have four minutes to read the extract and annotate every persuasive technique they can spot. Pairs compare annotations. Teacher takes feedback, building a list on the board of all identified techniques. Challenge: "Did anyone spot something their partner missed?" Introduce the lesson focus: today we will learn to use these techniques with precision - not just spot them, but deploy them for deliberate effect.',
      differentiation: {
        support:
          'Provide a technique identification checklist (rhetorical question, tricolon, emotive language, direct address, anecdote, statistic, repetition) for students to work through systematically.',
        core: 'Students annotate freely and identify at least five techniques.',
        stretch:
          'Students annotate and, for each technique, write a margin note explaining the specific effect it creates on the reader.',
      },
      resources: [
        'Model persuasive speech extract displayed on board (printed copies for annotation)',
        'Technique checklist for support students',
      ],
    },
    mainActivities: [
      {
        title: 'The Persuasion Toolkit - Rhetorical Techniques in Depth',
        duration: '22 minutes',
        instructions:
          'Teach a comprehensive toolkit of persuasive and rhetorical techniques. For each technique, provide a definition, a model example, and then ask students to write their own example on the topic "Social media does more harm than good." Techniques to cover: (1) Tricolon/Rule of Three - "We owe it to our children, to our communities, and to ourselves." (2) Anaphora (repetition at start of clauses) - "We cannot wait. We cannot delay. We cannot continue to ignore this." (3) Rhetorical question - "How long will we allow our children\'s mental health to be sacrificed on the altar of profit?" (4) Emotive language - "devastating", "alarming", "heartbreaking". (5) Statistics and evidence - "According to the World Health Organisation, rates of teenage anxiety have doubled in a decade." (6) Ethos (credibility/authority) - "As a teacher with twenty years of experience, I have witnessed this crisis first-hand." (7) Pathos (emotional appeal through anecdote) - "One student told me she felt worthless every time she looked at her phone." (8) Logos (logical argument/evidence chain) - connecting evidence to conclusion clearly. Distinguish persuasive (one-sided, emotive, uses all tools) from discursive (balanced, both sides presented fairly, reaches a reasoned conclusion). Show a side-by-side comparison of the same paragraph written persuasively and discursively.',
        differentiation: {
          support:
            'Focus on five core techniques (tricolon, rhetorical question, emotive language, statistic, anecdote) and provide sentence frames for each.',
          core: 'Students practise all eight techniques and write their own example for each.',
          stretch:
            'Students write all eight examples and then write a single paragraph that incorporates at least four techniques seamlessly, without it feeling forced or laboured.',
        },
        resources: [
          'Persuasion toolkit reference card (all eight techniques with definitions and examples)',
          'Side-by-side persuasive/discursive comparison slide',
          'Sentence frames for support students',
        ],
      },
      {
        title: 'Building the Argument - PEEL with Counter-Argument',
        duration: '18 minutes',
        instructions:
          'Introduce PEEL as a paragraph structure: Point (topic sentence), Evidence (statistic, fact, or example), Explanation (how the evidence supports the point), Link (how this connects to the overall argument or introduces a counter-argument). Add the counter-argument layer: after the PEEL paragraph, model how to introduce a counter-argument ("Of course, some would argue...") and then rebut it convincingly ("However, this view fails to account for..."). Display a model PEEL + counter-argument paragraph. Students write their own PEEL + counter-argument paragraph on the topic "Social media companies should face tighter government regulation." Partners peer-assess using the PEEL checklist: Is the Point clear? Is there specific Evidence? Is the Explanation developed? Is there a counter-argument with rebuttal? Teacher selects two strong examples to display and discuss as a class.',
        differentiation: {
          support:
            'Provide a PEEL writing frame with each section labelled and sentence starters provided.',
          core: 'Students write the full paragraph independently and complete the peer assessment.',
          stretch:
            'Students write two PEEL + counter-argument paragraphs back to back, using a discourse marker to link them, and evaluate which is the more effective argument and why.',
        },
        resources: [
          'Model PEEL + counter-argument paragraph displayed on board',
          'PEEL writing frame for support students',
          'Peer assessment PEEL checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Technique Auction',
      duration: '5 minutes',
      instructions:
        'Each student has five "coins" (represented by tally marks on their whiteboard). Teacher names all eight techniques. Students allocate their coins to the techniques they think are most valuable - they can put multiple coins on one technique if they feel strongly. Teacher records the class "bids" and reveals the top three most-valued techniques. Discussion: "Is there a most powerful technique, or does it depend on the task?" Conclude by emphasising that the best writers do not rely on a single technique - they combine several for cumulative effect.',
      differentiation: {
        support:
          'Students choose just their top three techniques and explain their choices verbally.',
        core: 'Students allocate all five coins across the techniques and justify their top two choices.',
        stretch:
          'Students allocate coins and write a sentence justifying why technique combination is more effective than relying on a single device.',
      },
    },
    homework:
      'Write a complete persuasive article (approximately 300 words) for a broadsheet newspaper arguing that the voting age should be lowered to 16. Your article must include: a named hook technique in your opening, a tricolon, a rhetorical question, a statistic or piece of evidence (you may invent a plausible one), emotive language, a counter-argument with rebuttal, and a memorable concluding sentence. Label each technique in the margin.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between persuasive writing and discursive writing. Give one example of a Paper 2 task that would call for each.',
        lines: 5,
        modelAnswer:
          'Persuasive writing argues strongly for one side of an issue, using rhetorical techniques, emotive language, and selective evidence to drive the reader towards a specific viewpoint. Example: "Write a speech arguing that social media should be banned for under-16s." Discursive writing presents both sides of an issue fairly and reaches a balanced, reasoned conclusion. Example: "Write an article discussing the advantages and disadvantages of living in a city." The key distinction is that persuasive writing commits to one view; discursive writing explores multiple views before reaching a conclusion.',
        marks: 4,
      },
      {
        question:
          'What is anaphora? Write a three-sentence example of anaphora on the topic of climate change.',
        lines: 4,
        modelAnswer:
          'Anaphora is the repetition of a word or phrase at the beginning of successive clauses or sentences, creating emphasis and a rhythmic, memorable effect. Example: "We have the power to change this. We have the will to act. We have the responsibility to do so - not for ourselves, but for every generation that follows."',
        marks: 3,
      },
      {
        question:
          'Explain the difference between ethos, pathos, and logos as persuasive strategies.',
        lines: 5,
        modelAnswer:
          "Ethos appeals to the writer's credibility and authority - establishing why the reader should trust them. Example: citing expert qualifications or lived experience. Pathos appeals to the reader's emotions - creating feelings of sympathy, fear, hope, or outrage. Example: a moving personal anecdote. Logos appeals to reason and logic - using statistics, facts, and reasoned arguments to demonstrate that a position is correct. Example: a chain of evidence leading to a clear conclusion. The most effective persuasive writing combines all three.",
        marks: 4,
      },
      {
        question:
          'Write a PEEL paragraph (Point, Evidence, Explanation, Link) arguing that homework should be abolished. Your paragraph should be five to seven sentences long.',
        lines: 7,
        modelAnswer:
          "The abolition of homework would significantly reduce the levels of stress and anxiety experienced by students across all year groups. Research conducted by the National Education Union found that over 60% of secondary school students report homework as a major source of anxiety, with many completing it late at night at the expense of sleep. This data demonstrates that the current approach to homework is not only failing to support learning but is actively damaging the wellbeing of the very students it is supposed to help. If we are serious about supporting young people's mental health - a stated priority of every government in recent years - then the abolition of homework is not a radical step, but a necessary one. Indeed, removing this burden entirely would allow students to pursue the rest, exercise, and creative activities that research consistently links to improved academic performance.",
        marks: 5,
      },
      {
        question:
          'A student uses the following in a persuasive speech: "Some people say that reducing plastic use is too expensive for businesses. However, the cost of inaction - environmental collapse, international fines, and the catastrophic loss of customer trust - dwarfs any investment in change." Identify the technique used and explain its effect.',
        lines: 4,
        modelAnswer:
          'The student uses a counter-argument followed by a rebuttal. The counter-argument ("some people say...") acknowledges the opposing view, which makes the writer appear reasonable and balanced. The rebuttal ("However...") then undermines this view with three specific, escalating consequences, using a tricolon ("environmental collapse, international fines, and the catastrophic loss of customer trust") for emphasis. The effect is to make the reader feel that the counter-argument has been thoroughly defeated, significantly strengthening the writer\'s original position.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Students often know the names of rhetorical devices from GCSE English Literature but have never been explicitly taught to use them - this lesson bridges that gap.',
      'The distinction between persuasive and discursive writing is often poorly understood; use the side-by-side comparison slide to make it concrete and tangible.',
      'The labelling task in the homework is a powerful metacognitive tool - students who can label their own techniques demonstrate genuine conscious control of their writing.',
    ],
    targetedSkills: [
      'Rhetorical technique identification and application',
      'Persuasive and discursive writing',
      'PEEL paragraph structure',
      'Counter-argument and rebuttal',
      'Ethos, pathos, and logos',
    ],
  },

  // ── Lesson 8: Crafting Descriptive and Narrative Openings ─────────────────
  {
    id: 'y11lp2-08',
    title: 'Crafting Descriptive and Narrative Openings for Transactional Writing',
    text: 'IGCSE English Language Paper 2',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand how descriptive and narrative techniques can enhance transactional writing',
      'Learn to open articles, speeches, and letters with a vivid anecdote or scenario',
      'Apply sensory detail, figurative language, and specific detail to create impact in openings',
      'Practise transitioning smoothly from a descriptive or narrative opening into the main argument',
    ],
    successCriteria: [
      'I can write a short anecdote or scenario (3-4 sentences) that creates vivid atmosphere',
      'I can use at least one metaphor or simile effectively in a transactional writing opening',
      'I can transition from a descriptive/narrative opening into an argument paragraph seamlessly',
      'I can explain why a descriptive opening is effective for a specific task and audience',
    ],
    keywords: [
      'anecdote',
      'scenario',
      'sensory detail',
      'metaphor',
      'simile',
      'atmosphere',
      'transition',
      'immersive',
      'figurative language',
      'narrative hook',
    ],
    starterActivity: {
      title: 'Two Openings, Same Task',
      duration: '8 minutes',
      instructions:
        'Display two openings for the same article task: "Write an article arguing that young people are not given enough opportunities to develop leadership skills." Opening A: "There are many reasons why young people should be given more leadership opportunities. This article will discuss several of them." Opening B: "She was sixteen, standing in front of a room of twenty adults, her notes shaking in her hands. But when she spoke, every person in that room fell silent - not because they had to, but because she had something worth saying. The question is: how many potential leaders like her are we losing through a system that never gives them the chance to stand up?" Students discuss with a partner: Which opening is more engaging? What makes Opening B more effective? Teacher takes feedback and introduces the lesson focus: using descriptive and narrative techniques to open transactional writing with impact.',
      differentiation: {
        support:
          'Provide three analysis prompts: "Opening B is more effective because..."; "It creates atmosphere by..."; "It uses the technique of...".',
        core: 'Students discuss freely and contribute at least two specific observations to the class feedback.',
        stretch:
          'Students write a third opening for the same task using a different descriptive technique (e.g., sensory detail, direct address to a character, surprising contrast).',
      },
      resources: [
        'Two contrasting openings displayed on board',
        'Analysis prompt card for support students',
      ],
    },
    mainActivities: [
      {
        title: 'The Immersive Opening - Anecdote, Scenario, and Sensory Detail',
        duration: '22 minutes',
        instructions:
          'Teach three techniques for immersive openings in transactional writing: (1) Anecdote - a brief real or plausible story about a specific individual, told in vivid detail. Key: use a specific name or detail, write in past tense, make the reader care about the person in 2-3 sentences. (2) Scenario - describe an imagined situation in the second person ("Imagine you are...") that puts the reader inside an experience. Key: use "you", present tense, sensory detail. (3) Sensory description - open with a vivid, concrete image that establishes atmosphere and then connects to the article\'s argument. Key: use at least two senses, specific rather than generic detail, and a clear pivot from description to argument ("This is the reality for..."). Model each technique with a high-quality example. For each technique, students write a short practice opening (3-4 sentences) on the same topic: "Every school should have a dedicated wellbeing programme." Students compare their three openings in pairs and identify their strongest.',
        differentiation: {
          support:
            'Provide a sentence frame for each technique: Anecdote: "When [name] arrived at [place], [event happened]..."; Scenario: "Imagine arriving at school to find..."; Sensory: "The [place] smelled of [detail]. [Second sensory detail]...".',
          core: 'Students write all three openings independently and identify their strongest.',
          stretch:
            'Students write all three openings, identify their strongest, and write a one-paragraph explanation of why that technique is most appropriate for the specific task, audience, and publication context.',
        },
        resources: [
          'Three model immersive openings displayed on board',
          'Topic card',
          'Sentence frames for support students',
        ],
      },
      {
        title: 'The Pivot - Transitioning from Opening to Argument',
        duration: '18 minutes',
        instructions:
          'Explain that the most common error students make with immersive openings is failing to transition effectively into the main argument - the descriptive or narrative opening becomes a decorative piece disconnected from the rest of the article. Teach the "pivot sentence" - the sentence that links the opening hook to the argument, usually containing the word "this", "these", or "such" to refer back to the opening moment, and a word or phrase that introduces the argument. Display three model pivot sentences and analyse how they function. Students then take their strongest opening from the previous activity and write: (1) A pivot sentence that connects it to the argument, (2) A full argument paragraph that follows from the pivot. Peer assessment: partner reads the opening, pivot, and paragraph and answers: "Does the pivot sentence make the transition feel smooth? Is there still a clear connection between the opening image and the argument?"',
        differentiation: {
          support:
            'Provide a pivot sentence frame: "This is/was not an isolated experience. [Number] of [group] face [situation] every [time period] - and yet...".',
          core: 'Students write the pivot sentence and argument paragraph independently.',
          stretch:
            'Students write the full opening, pivot, and argument paragraph as a seamless 150-word block, and then evaluate it against the Paper 2 mark scheme descriptors.',
        },
        resources: [
          'Three model pivot sentences displayed on board',
          'Pivot sentence frame for support students',
          'Paper 2 mark scheme descriptors (simplified version)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Opening Gallery Walk',
      duration: '7 minutes',
      instructions:
        'Select five strong opening + pivot + paragraph combinations from student work (collected during the lesson). Display them around the room on A3 paper. Students do a brief gallery walk (1 minute per station) and leave a sticky note at each station identifying: the technique used in the opening AND one specific thing the writer did well. Teacher facilitates a brief class discussion about what made the most effective openings stand out.',
      differentiation: {
        support: 'Students leave one sticky note identifying only the opening technique used.',
        core: 'Students identify the technique and one strength for each displayed piece.',
        stretch:
          'Students leave a "coaching note" suggesting one specific improvement for each displayed piece, in addition to naming the technique and strength.',
      },
    },
    homework:
      'Write a full opening section (opening hook, pivot sentence, and two argument paragraphs - approximately 200 words total) for this task: "Write an article for a national magazine arguing that children spend too much time on screens." Your opening must use an immersive technique (anecdote, scenario, or sensory description), include a clear pivot sentence, and lead into a coherent argument.',
    worksheetQuestions: [
      {
        question:
          'What is the purpose of an immersive opening in a transactional writing task? Why does it work better than beginning with a statement of your argument?',
        lines: 4,
        modelAnswer:
          'An immersive opening engages the reader immediately by placing them inside an experience, creating emotional connection before the argument is stated. It works better than a direct argument statement because it draws the reader in - they want to know what the experience means before they hear the argument. Examiners reward openings that demonstrate craft and deliberate technique; a vivid anecdote or scenario signals confidence and control from the very first sentence.',
        marks: 3,
      },
      {
        question:
          'Write a four-sentence anecdote opening for an article arguing that urban green spaces are essential for community wellbeing.',
        lines: 5,
        modelAnswer:
          'Mrs Yemi Hassan has lived on Barrow Street for forty years. Every morning, she crosses the road to sit in the small park opposite her flat - the one the council is planning to build on. It is, she told me, the only place in the city where she remembers how to breathe. When it is gone, she does not know where she will go.',
        marks: 4,
      },
      {
        question:
          'What is a "pivot sentence" and why is it important when using an immersive opening?',
        lines: 4,
        modelAnswer:
          'A pivot sentence is the sentence that transitions from the immersive opening (anecdote, scenario, or description) to the main argument of the piece. Without it, the opening feels disconnected from the rest of the writing - a decorative fragment rather than an integral part of the argument. The pivot sentence typically references the opening moment ("Mrs Hassan\'s situation is not unique...") before introducing the argument, creating a sense that the opening was purposeful rather than merely atmospheric.',
        marks: 3,
      },
      {
        question:
          'Rewrite this opening for a speech arguing that arts subjects are undervalued in schools. Use a scenario technique (second person, present tense, sensory detail): Original: "Arts subjects are very important and I think schools don\'t give them enough time or money."',
        lines: 5,
        modelAnswer:
          'Imagine picking up a paintbrush for the first time in a year. The art room is cold; half the canvases on the wall belong to students who left in Year 9, when options choices forced them to choose between creativity and employability. You remember loving this room. You remember what it felt like to make something. Now, you have an hour. After this, it will be another year before you return. This is what it means to undervalue the arts in our schools - and it is a loss we cannot afford to keep ignoring.',
        marks: 5,
      },
      {
        question:
          'Identify one risk of using an immersive descriptive opening in a transactional writing task and explain how to avoid it.',
        lines: 4,
        modelAnswer:
          'A key risk is that the opening becomes so focused on description that it loses its connection to the argument - the piece reads as a short story fragment followed by an unconnected article. To avoid this, writers must use a clear pivot sentence that explicitly connects the opening moment to the argument, ensuring the description feels purposeful rather than decorative. Another risk is spending too long on the opening at the expense of developing the argument - the immersive opening should be no longer than 3-5 sentences.',
        marks: 3,
      },
    ],
    teacherNotes: [
      "The contrast between Opening A and Opening B in the starter activity is very powerful - use student vocabulary from the discussion to build the lesson's key terminology organically.",
      'The "pivot sentence" concept is unique to this lesson and represents a genuinely useful exam technique that many students will not have encountered before.',
      'Encourage students to use immersive openings in all subsequent timed writing tasks and to make it a habit rather than a one-off technique.',
    ],
    targetedSkills: [
      'Immersive opening techniques',
      'Anecdote and scenario writing',
      'Sensory detail in transactional writing',
      'Pivot sentence construction',
      'Opening-to-argument transition',
    ],
  },

  // ── Lesson 9: Editing for Accuracy and Effect ─────────────────────────────
  {
    id: 'y11lp2-09',
    title: 'Editing for Accuracy and Effect - Technical Accuracy Under Exam Conditions',
    text: 'IGCSE English Language Paper 2',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand how technical accuracy is assessed on Paper 2 and what marks are available',
      'Identify the most common technical errors in GCSE transactional writing',
      'Develop a systematic proofreading strategy for use in the exam',
      'Practise editing sample responses to improve technical accuracy without changing content',
    ],
    successCriteria: [
      'I can identify comma splices, sentence fragments, tense inconsistencies, and apostrophe errors in writing',
      'I can apply a systematic proofreading strategy to my own work',
      "I can edit a paragraph to improve technical accuracy while preserving the writer's voice",
      'I can explain how punctuation choices (semicolon, colon, dash) create specific effects',
    ],
    keywords: [
      'comma splice',
      'sentence fragment',
      'tense consistency',
      'apostrophe',
      'semicolon',
      'colon',
      'demarcation',
      'proofreading',
      'accuracy',
      'punctuation range',
    ],
    starterActivity: {
      title: 'Error Hunt',
      duration: '8 minutes',
      instructions:
        'Display a 100-word paragraph on the board that contains exactly eight technical errors (comma splice, missing capital letter, apostrophe error, tense slip, run-on sentence, fragment, spelling error, incorrect there/their/they\'re). Students work individually for 3 minutes to find and correct all eight errors. Pairs compare. Teacher reveals and discusses each error: "Why is this an error? What effect does it have on the reader?" Introduce the lesson focus: technical accuracy is worth up to 20% of the total Paper 2 mark - a student who excels at content but ignores accuracy is handing marks to competitors.',
      differentiation: {
        support:
          'Provide a hint card listing the eight types of error for students to hunt for systematically.',
        core: 'Students find all eight errors independently before comparing with a partner.',
        stretch:
          'Students find all eight errors, correct them, and explain in a margin note why each error would concern an examiner.',
      },
      resources: [
        'Error-filled paragraph displayed on board',
        'Error type hint card for support students',
      ],
    },
    mainActivities: [
      {
        title: 'The Top 6 Errors - Diagnosis and Cure',
        duration: '22 minutes',
        instructions:
          'Teach six high-frequency technical errors with diagnosis (what is the error?) and cure (how to fix it): (1) Comma splice: joining two independent clauses with only a comma. Cure: use a full stop, semicolon, or coordinating conjunction. Model: "The report was completed, it was presented to the board." → "The report was completed; it was presented to the board." (2) Sentence fragment: a clause that cannot stand alone. Cure: attach to a previous sentence or expand to a full sentence. (3) Tense inconsistency: switching between past and present tense. Cure: decide on your tense before writing and check every verb. (4) Apostrophe misuse: confusion between it\'s/its, your/you\'re, possessive apostrophe placement. Model multiple examples. (5) Run-on sentence: a sentence that keeps going beyond its natural end point, losing clarity. Cure: read aloud - where you naturally pause or breathe is where a new sentence should start. (6) Homophone errors: there/their/they\'re, affect/effect, practise/practice. For each error type, display a diagnostic question: "Do you make this error?" Students honestly self-assess. Teacher then models editing a short passage (200 words) with multiple errors, working through the diagnosis and cure process live. Students then independently edit a different passage (distributed as a worksheet) using the same process.',
        differentiation: {
          support:
            'Students focus on just three error types (comma splice, tense inconsistency, apostrophe) and use the diagnosis-and-cure card for each correction.',
          core: 'Students work through all six error types independently during the editing task.',
          stretch:
            'Students edit the full passage, then write a brief "error analysis" - a list of all corrections made with a one-sentence explanation of each.',
        },
        resources: [
          'Top 6 Errors reference card with diagnosis and cure',
          'Error editing worksheet (200-word passage)',
          'Live editing passage for teacher modelling',
        ],
      },
      {
        title: 'Punctuation for Effect - Semicolons, Colons, and Dashes',
        duration: '18 minutes',
        instructions:
          'Explain that examiners reward not just correct basic punctuation but also a range of punctuation used for effect. Focus on three sophisticated punctuation marks: (1) Semicolon - joins two closely related independent clauses of equal weight; creates balance and rhythm. "The evidence is clear; the time for action is now." (2) Colon - introduces a list, explanation, or amplification. "There is only one conclusion: this policy has failed." (3) Dash - creates a dramatic pause, an aside, or a sudden emphasis. "We have the power to change this - all of us." Provide three model sentences using each. Students practise: write one sentence using a semicolon, one using a colon, and one using a dash - all on the same topic ("The importance of sleep for teenagers"). Pairs compare and assess whether the punctuation has been used correctly and for deliberate effect. Teacher takes three strong examples for whole-class discussion.',
        differentiation: {
          support:
            'Provide sentence frames that leave a gap for students to complete: "[Statement]; ___." / "There is one clear reason: ___." / "We all need one thing - ___."',
          core: 'Students write all three sentences independently and explain the effect of each punctuation mark.',
          stretch:
            'Students write a four-sentence paragraph using all three punctuation marks purposefully and explain in two sentences how the punctuation contributes to the rhythm and clarity of the paragraph.',
        },
        resources: [
          'Semicolon, colon, dash model sentences slide',
          'Sentence frames for support students',
        ],
      },
    ],
    plenaryActivity: {
      title: 'SPAR - Systematic Proofreading After Writing',
      duration: '7 minutes',
      instructions:
        "Introduce the SPAR proofreading strategy: S - Sentence demarcation (are all sentences correctly started and ended?), P - Punctuation range (have I used a variety of punctuation purposefully?), A - Apostrophes and homophones (check every apostrophe, check every there/their/they're), R - Run-on sentences and fragments (read the last paragraph aloud - can I breathe at the right points?). Students apply SPAR to a piece of their own recent writing (from their exercise books). They set themselves a target: the one SPAR element they most need to improve. Students write this target on a sticky note and attach it to the inside cover of their books as a reminder for every future timed write.",
      differentiation: {
        support:
          'Students apply SPAR only to the S and A elements first - sentence demarcation and apostrophes.',
        core: 'Students apply all four SPAR elements to their recent writing.',
        stretch:
          'Students apply all four SPAR elements and then add a fifth personal element based on their own identified weaknesses (e.g., "V - Vocabulary range: have I used ambitious words deliberately?").',
      },
    },
    homework:
      'Take a piece of transactional writing you have produced in this unit (at least 150 words). Apply the full SPAR proofreading strategy, annotating every error you find. Rewrite the corrected version underneath. Write three sentences reflecting on: what your most common error type is, why you think you make it, and what you will do differently in your next timed write.',
    worksheetQuestions: [
      {
        question:
          'What is a comma splice? Provide an example of a comma splice and then show two different ways to correct it.',
        lines: 5,
        modelAnswer:
          'A comma splice is when two independent clauses (sentences that could each stand alone) are joined with only a comma instead of a full stop, semicolon, or coordinating conjunction. Example: "The article was well-written, it received widespread praise." Correction 1 (full stop): "The article was well-written. It received widespread praise." Correction 2 (semicolon): "The article was well-written; it received widespread praise." Correction 3 (conjunction): "The article was well-written, and it received widespread praise."',
        marks: 4,
      },
      {
        question:
          'Identify and correct the tense error in this paragraph: "The government announces its new policy yesterday, stating that schools will receive additional funding. Teachers welcomed the news and said it was long overdue."',
        lines: 4,
        modelAnswer:
          'Error: "announces" is present tense but the paragraph is written in the past tense (evidenced by "yesterday", "welcomed", "said"). Correction: "The government announced its new policy yesterday, stating that schools will receive additional funding. Teachers welcomed the news and said it was long overdue." The future reference ("will receive") is acceptable because it refers to a future event from the perspective of the past tense narrative.',
        marks: 3,
      },
      {
        question:
          'Correct all four apostrophe errors in this sentence: "The schools new policy, which is it\'s third in two years, effects the students wellbeing and their parents rights."',
        lines: 4,
        modelAnswer:
          '"The school\'s new policy, which is its third in two years, affects the students\' wellbeing and their parents\' rights." Corrections: (1) "school\'s" - possessive apostrophe added; (2) "its" not "it\'s" (it\'s = it is); (3) "affects" not "effects" (verb vs. noun); (4) "students\'" - possessive apostrophe for plural noun; (5) "parents\'" - possessive apostrophe for plural noun.',
        marks: 4,
      },
      {
        question:
          'Explain the effect created by the semicolon in this sentence and why it is more effective than a full stop: "The decision was made in silence; its consequences would be heard for years."',
        lines: 4,
        modelAnswer:
          'The semicolon creates a close, deliberate connection between the silence of the decision and the long-lasting noise of its consequences, emphasising the irony of the contrast. The two clauses are balanced in length and structure, which makes the contrast between "silence" and "heard" more striking. A full stop would create a harder break, reducing the sense of irony and the tight relationship between cause and effect that the semicolon maintains.',
        marks: 3,
      },
      {
        question:
          'What does the SPAR proofreading strategy stand for? Give one specific check you would perform for each letter.',
        lines: 5,
        modelAnswer:
          "S - Sentence demarcation: check that every sentence begins with a capital letter and ends with a full stop, question mark, or exclamation mark. P - Punctuation range: check that you have used a variety of punctuation marks including commas, semicolons, colons, or dashes, not just full stops. A - Apostrophes and homophones: check every apostrophe is correctly placed (possessive vs. contraction) and verify there/their/they're, your/you're, affect/effect. R - Run-on sentences and fragments: read the last paragraph aloud and listen for unnatural pauses that suggest a sentence has gone on too long, or for clauses that do not feel complete.",
        marks: 4,
      },
    ],
    teacherNotes: [
      'Technical accuracy is often treated as an afterthought by students who focus only on content - open the lesson by making clear how many marks are at stake and how quickly they can be lost.',
      'The SPAR strategy needs to become an automatic habit; reinforce it at the end of every timed writing task throughout the rest of the unit.',
      'The live editing model in the main activity is highly effective - demonstrate the internal dialogue of a careful proofreader, pausing and questioning each decision aloud.',
    ],
    targetedSkills: [
      'Technical accuracy and proofreading',
      'Comma splice identification and correction',
      'Tense consistency',
      'Apostrophe accuracy',
      'Punctuation range for effect',
    ],
  },

  // ── Lesson 10: Full Timed Paper Practice ──────────────────────────────────
  {
    id: 'y11lp2-10',
    title: 'Full Timed Paper Practice - Pulling It All Together',
    text: 'IGCSE English Language Paper 2',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Apply all skills developed across the unit to a full timed Paper 2 practice',
      'Practise realistic exam time management across Task 1 and Task 2',
      'Develop a systematic pre-writing strategy (FPA analysis and five-minute plan)',
      'Reflect critically on the quality of the completed response using mark scheme descriptors',
    ],
    successCriteria: [
      'I can complete Task 1 and begin Task 2 within the allocated time',
      'I can produce writing that uses the correct form conventions for each task',
      'I can apply at least three persuasive or rhetorical techniques in my Task 2 response',
      'I can use the mark scheme to identify my strengths and one key area for improvement',
    ],
    keywords: [
      'time management',
      'timed writing',
      'mark scheme',
      'self-assessment',
      'target setting',
      'form',
      'purpose',
      'audience',
      'technical accuracy',
      'content and organisation',
    ],
    starterActivity: {
      title: 'Exam Strategy Countdown',
      duration: '8 minutes',
      instructions:
        'Before distributing the paper, spend eight minutes revisiting the exam strategy. Display a slide with the timing breakdown: 5 minutes reading and FPA analysis, 25 minutes Task 1 (20 marks), 25 minutes Task 2 (30 marks), 5 minutes proofreading using SPAR. Ask students to recall: "What does FPA stand for? What are the three things you check for in SPAR? What is one hook technique you will try to use today?" Students write their three "today\'s targets" on a sticky note: one for form conventions, one for a technique they want to apply, one for a technical accuracy focus. They place the sticky note at the top of their desk to refer to during writing. Teacher emphasises: "Today is about performing under exam conditions. No notes, no help - just everything you have learned."',
      differentiation: {
        support:
          'Allow support students to keep their FPA grid, conventions checklist, and SPAR card visible during the timed write.',
        core: 'Students recall exam strategy from memory and set their own three targets.',
        stretch:
          'Students add a fourth target focused on sophisticated language: "I will aim to include ___ [specific technique, e.g., anaphora / a semicolon used for effect / cyclical structure] in my response."',
      },
      resources: ['Exam strategy and timing slide', 'Sticky notes for target setting'],
    },
    mainActivities: [
      {
        title: 'Timed Paper Practice - Task 1 and Task 2',
        duration: '40 minutes',
        instructions:
          'Distribute the mock Paper 2 paper face down. On the teacher\'s instruction, students turn over and begin. Teacher sets a visible timer. Call out the following milestones: "5 minutes - you should have finished reading and started your FPA notes"; "30 minutes - you should be finishing Task 1 and beginning your Task 2 plan"; "55 minutes - stop writing and begin SPAR proofreading." Teacher circulates quietly, noting students who are significantly off pace (either rushing or stalling). Do not intervene with content or writing support during the timed practice - this is a simulation of genuine exam conditions. Collect all papers at the end of the 40-minute writing window. [Note: Task 1 example - "Write a letter to the editor of your local newspaper arguing that more funding should be given to youth clubs in your area" (20 marks). Task 2 example - "Write a speech to be delivered at a regional schools conference arguing that technology is changing education for the better" (30 marks).]',
        differentiation: {
          support:
            'Allow support students 5 additional minutes and permit the use of a form conventions checklist.',
          core: 'All students work under standard timed conditions.',
          stretch:
            'Challenge stretch students to attempt a richer opening technique (e.g., immersive anecdote or scenario) for at least one of their two tasks, timed from within the overall allocation.',
        },
        resources: [
          'Printed mock Paper 2 (one per student)',
          'Visible countdown timer displayed on board',
        ],
      },
      {
        title: 'Mark Scheme Self-Assessment',
        duration: '7 minutes',
        instructions:
          'Return papers to students. Distribute a simplified Paper 2 mark scheme summary showing the band descriptors for content/organisation and technical accuracy. Students read through their own Task 1 response first and, using the descriptors, place themselves in one of four bands: Band 1 (limited), Band 2 (some), Band 3 (clear), Band 4 (convincing). They write their self-assessed band and one piece of evidence (a specific sentence or feature) on a sticky note. Repeat for Task 2. Teacher collects self-assessment sticky notes to review against their own marking - this creates a dialogue around accurate self-assessment that can be continued in the following lesson when marked work is returned.',
        differentiation: {
          support:
            'Simplify the mark scheme to three bands only and guide students to focus on two criteria: form conventions and technical accuracy.',
          core: 'Students self-assess both tasks using the full four-band descriptor grid.',
          stretch:
            'Students self-assess both tasks and write a target-setting paragraph: "To move from Band ___ to Band ___, I need to focus specifically on ___ because in this piece I ___."',
        },
        resources: [
          'Simplified Paper 2 mark scheme band descriptor summary (one per student)',
          'Self-assessment sticky notes',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Three-Question Reflection',
      duration: '7 minutes',
      instructions:
        'Students close their paper and write responses to three reflection questions in their exercise books: (1) "The thing I did best in today\'s practice was..." (be specific - name the technique or feature). (2) "The moment I felt most uncertain was..." (what caused the uncertainty? Was it time pressure, forgetting a convention, struggling for ideas?). (3) "Between now and the exam, I will specifically work on ___ because..." Teacher takes whole-class responses to question 2 to identify the most common challenges - these become the focus of any remaining revision lessons and the teacher\'s marking feedback priorities.',
      differentiation: {
        support: 'Provide sentence starters for each reflection question.',
        core: 'Students complete all three reflection questions independently.',
        stretch:
          'Students complete all three reflections and add a fourth: "If I were marking a student who wrote what I wrote today, the feedback I would give is..."',
      },
    },
    homework:
      'Using the mark scheme self-assessment from today\'s lesson, write a 150-word revision plan for the period between now and your exam. Your plan must include: the three skills you most need to develop, one specific strategy for improving each skill (e.g., "I will practise writing one PEEL paragraph per day", "I will learn the formal letter conventions by heart"), and a timetable showing when you will practise each skill.',
    worksheetQuestions: [
      {
        question:
          'What should you do in the first five minutes of the Paper 2 exam before you begin writing?',
        lines: 4,
        modelAnswer:
          'In the first five minutes, you should: read both tasks carefully; complete an FPA analysis for each task (identifying the form required, the purpose, and the audience); choose your starting task (most students complete Task 1 first as it is shorter); and create a brief five-point plan for Task 1 including topic sentences for each paragraph, a chosen opening technique, and a note on your planned conclusion. This planning time is not wasted - it saves time during writing by removing uncertainty and preventing the kind of disorganised, wandering responses that cost marks.',
        marks: 4,
      },
      {
        question:
          'How should you split your time between Task 1 and Task 2? Explain why the split is unequal.',
        lines: 4,
        modelAnswer:
          "You should spend approximately 25 minutes on Task 1 (worth 20 marks) and approximately 30 minutes on Task 2 (worth 30 marks), leaving five minutes for proofreading. The split is unequal because Task 2 carries more marks - 30 compared to Task 1's 20 - and therefore requires a longer, more developed response. Over-investing time in Task 1 is a common strategic error that leaves students unable to fully develop their Task 2 response.",
        marks: 3,
      },
      {
        question:
          'A student completes their Task 1 letter in 20 minutes and believes it is good. They then spend 35 minutes on Task 2 but do not leave time for proofreading. Evaluate this time management strategy.',
        lines: 5,
        modelAnswer:
          'The time allocation is reasonable in terms of the split between Task 1 and Task 2 - spending more time on the higher-marks task is correct. However, failing to leave five minutes for proofreading using SPAR is a significant error: technical accuracy accounts for 6 marks on Task 2, and a five-minute check can identify and correct comma splices, tense slips, and apostrophe errors that would otherwise cost marks. The student should have spent 25 minutes on Task 1, 30 minutes on Task 2, and reserved the final 5 minutes for SPAR proofreading.',
        marks: 4,
      },
      {
        question:
          'What are the two assessment strands on Paper 2 and what proportion of marks does each carry within a single task?',
        lines: 4,
        modelAnswer:
          'The two assessment strands are Content and Organisation and Technical Accuracy. For Task 1 (20 marks total): Content and Organisation is worth 16 marks; Technical Accuracy is worth 4 marks. For Task 2 (30 marks total): Content and Organisation is worth 24 marks; Technical Accuracy is worth 6 marks. In both tasks, Content and Organisation carries the majority of marks (80%), but Technical Accuracy (20%) is still significant - in a borderline case, a clean, accurate script will always outperform one with equivalent content but frequent errors.',
        marks: 4,
      },
      {
        question:
          'Reflect on your performance in the timed practice. Identify one thing you did well and one specific, actionable target for improvement before your exam.',
        lines: 5,
        modelAnswer:
          'Model answer will vary. A strong response might read: "I demonstrated control of formal letter conventions in Task 1, using the address block, correct salutation and sign-off, and formal register throughout. My target for improvement is to use more varied sentence structures in Task 2 - I relied too heavily on compound sentences joined with "and". I will practise writing one complex sentence and one short emphatic sentence per paragraph to improve my sentence variety score."',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson must replicate genuine exam conditions as closely as possible - silence, no prompting, timed milestones called aloud.',
      'The mark scheme self-assessment is more powerful if students are surprised by how rigorously the descriptors apply - do not over-prepare them for the language of the mark scheme; let them discover it themselves.',
      'Collect self-assessment sticky notes and compare them with your own marking before the next lesson - significant overestimates or underestimates open productive conversations about exam awareness.',
      'If any students did not complete both tasks, discuss time management privately rather than publicly - this is a common anxiety trigger.',
      'After returning marked work, plan a final feedback lesson addressing the three or four most common weaknesses identified across the class.',
    ],
    targetedSkills: [
      'Timed exam performance',
      'Exam time management',
      'Mark scheme self-assessment',
      'Reflective target setting',
      'Full paper practice under exam conditions',
    ],
  },
]
