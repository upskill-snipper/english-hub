import type { LessonPlan } from '@/types'

export const y11IgcseExtendedLessons: LessonPlan[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // FINAL EXAM PREPARATION AND CROSS-PAPER CONSOLIDATION (10 lessons)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson y11ext-01: Paper 1 and Paper 2 Crossover Skills ─────────────────
  {
    id: 'y11ext-01',
    title: 'Paper 1 and Paper 2 Crossover Skills',
    text: 'Edexcel IGCSE English Language',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Identify the skills that transfer between Paper 1 (reading and analysis) and Paper 2 (transactional and creative writing)',
      'Understand how close reading ability supports the construction of precise, crafted writing',
      'Apply vocabulary and structural awareness developed through reading to independent writing tasks',
      'Evaluate personal strengths and gaps across both papers to prioritise revision focus',
    ],
    successCriteria: [
      'I can explain at least three skills that are tested on both Paper 1 and Paper 2',
      'I can show how annotating a source text develops the same skills used to craft an effective paragraph',
      'I can identify where my strongest transferable skill lies and explain how to apply it to the other paper',
      'I can produce a revision priority list that addresses gaps across both papers',
    ],
    keywords: [
      'transferable skills',
      'Paper 1',
      'Paper 2',
      'analysis',
      'craft',
      'audience awareness',
      'purpose',
      'language techniques',
      'structural choices',
    ],
    starterActivity: {
      title: 'Skill Sorting Challenge',
      duration: '8 minutes',
      instructions:
        'Display 16 skill cards on the board (or distribute printed sets) listing individual exam skills such as "identifying language techniques", "varying sentence length for effect", "understanding audience", "selecting relevant evidence", "using precise vocabulary", "structuring a response logically". Students work in pairs to sort the cards into three groups: Paper 1 only, Paper 2 only, and Both Papers. After two minutes, pairs compare with another pair and reconcile differences. Teacher leads a whole-class reveal, emphasising that the vast majority of cards belong in the "Both Papers" category, and using this to frame the lesson around maximising impact from shared skill development.',
      differentiation: {
        support:
          'Provide a partially sorted set with the Paper 1 only and Paper 2 only categories pre-filled so students focus solely on identifying the crossover skills.',
        core: 'Students sort all 16 cards independently before comparing with a partner.',
        stretch:
          'Students add two skill cards of their own to the set and justify which category they belong in with reference to the mark scheme.',
      },
      resources: [
        'Skill sorting cards (printed or digital)',
        'Mark scheme summaries for Paper 1 and Paper 2',
      ],
    },
    mainActivities: [
      {
        title: 'Reading to Write: The Analytical Foundation',
        duration: '18 minutes',
        instructions:
          'Provide a short unseen passage (approximately 300 words) of high-quality prose. Students first annotate it as they would for a Paper 1 reading question, identifying language techniques, structural choices, and the effect on the reader. Teacher then asks: "If you were writing about this topic for Paper 2, which three techniques from this passage would you borrow and why?" Students write a short paragraph (8-10 sentences) on a related topic, consciously deploying at least three of the techniques they identified. Pairs swap paragraphs and annotate each other\'s writing to confirm the techniques are present, using the same analytical vocabulary they applied to the source.',
        differentiation: {
          support:
            'Provide a pre-annotated version of the passage with techniques labelled and a writing scaffold with sentence starters that embed the required techniques.',
          core: 'Students annotate independently, then write and receive peer annotation.',
          stretch:
            'Students write a second paragraph that deliberately subverts or challenges one of the techniques from the source, explaining in a margin note why this creates a different effect.',
        },
        resources: [
          'Unseen prose passage (printed)',
          'Annotation colour-code guide',
          'Peer annotation checklist',
        ],
      },
      {
        title: 'Cross-Paper Gap Analysis',
        duration: '16 minutes',
        instructions:
          "Distribute a two-column gap analysis grid listing eight key skills (e.g. selecting and synthesising evidence; crafting an introduction; varying syntax; identifying implicit meaning; writing for a specific audience; using structural techniques; evaluating a writer's perspective; sustaining a viewpoint). Students rate themselves on a 1-4 scale for each skill on both Paper 1 and Paper 2. Teacher then displays the exam mark scheme language for each skill and asks students to annotate their grid: where is there a direct crossover? Where does the skill feel harder to apply on one paper than the other? Students write a three-sentence action plan targeting their lowest-rated crossover skill.",
        differentiation: {
          support:
            'Provide sentence starters for the action plan and a simplified rating scale (confident / nearly there / need to work on this).',
          core: 'Students complete the full grid and write an independent action plan.',
          stretch:
            'Students identify a question type from each paper where their crossover skill would be most valuable and plan a 10-minute practice strategy for each.',
        },
        resources: [
          'Cross-paper gap analysis grid',
          'Mark scheme language reference sheet',
          'Action plan template',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One Insight, One Resolution',
      duration: '8 minutes',
      instructions:
        'Students write on a sticky note or mini whiteboard: (1) the single most useful crossover skill they identified today and (2) one specific thing they will practise this week to strengthen it. Teacher collects responses and uses them to project a class "heat map" of the most commonly cited crossover skills, which becomes a reference point for future lessons. Students copy their resolution into their revision planner.',
      differentiation: {
        support:
          'Provide a sentence frame: "My most useful crossover skill is ___ because ___. I will practise it by ___."',
        core: 'Students complete both points independently.',
        stretch:
          'Students write a third point predicting where this skill is likely to be tested and at what mark allocation.',
      },
    },
    homework:
      'Choose one question from a past Paper 1 and one from a past Paper 2. Write a 200-word reflection comparing the skills required for each, highlighting where the same underlying ability is being tested in different ways.',
    worksheetQuestions: [
      {
        question:
          'Identify three skills that are equally important on both Paper 1 and Paper 2. For each, explain how the skill is applied differently depending on whether you are reading or writing.',
        lines: 8,
        modelAnswer:
          'Audience awareness: on Paper 1, students identify how a writer positions their intended audience; on Paper 2, students shape their own writing to position a specific reader. Language technique recognition: on Paper 1, students name and analyse techniques for effect; on Paper 2, students consciously deploy those techniques in their own prose. Structural awareness: on Paper 1, students comment on how a text is sequenced to build meaning; on Paper 2, students use structural choices such as cyclical openings or delayed revelation to create their own effects.',
        marks: 6,
      },
      {
        question:
          'A student scores well on Paper 1 reading questions but struggles with Paper 2 writing. Explain how their reading skills could be used to improve their writing performance.',
        lines: 6,
        modelAnswer:
          'Strong analytical reading means the student already has a vocabulary for technique and effect. They should read their own writing as a critic - asking "what effect does this sentence create on a reader?" just as they would when annotating a source text. Their ability to identify weak or unclear moments in a passage can be redirected to spotting weak or unclear moments in their own drafts, making revision more targeted and effective.',
        marks: 4,
      },
      {
        question:
          'Write a paragraph about a busy city street. Deliberately include three language techniques you have identified when annotating source texts. Label each technique in the margin.',
        lines: 10,
        modelAnswer:
          'Model response will vary. Examiners look for: a named technique (e.g. sibilance, metaphor, tricolon) clearly present in the writing; a label in the margin that matches what is on the page; and a sense that the technique has been chosen purposefully to create a specific effect on the reader rather than included randomly.',
        marks: 6,
      },
      {
        question:
          'What does "transferable skill" mean in the context of IGCSE English? Why is it useful to think about skills this way when preparing for exams?',
        lines: 5,
        modelAnswer:
          'A transferable skill is one that can be applied in more than one context or assessment. In IGCSE English, skills such as understanding purpose, audience, and effect apply whether a student is reading a source or producing their own writing. Thinking in terms of transferable skills is useful because it means revision time spent on one paper simultaneously strengthens the other, making preparation more efficient.',
        marks: 3,
      },
      {
        question:
          'Look at your gap analysis grid. Which single skill would give you the greatest improvement across both papers if you focused on it for the next two weeks? Justify your choice.',
        lines: 6,
        modelAnswer:
          'Answers will vary. Examiners look for: a specific, named skill (not a vague category); a clear explanation of why it appears in both papers; and a convincing argument for why improving this skill would have the greatest overall impact, ideally with reference to mark allocations or past performance evidence.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson works best when students have already sat at least one mock paper for each component so they have real performance data to draw on during the gap analysis activity.',
      'The skill sorting cards can be prepared as a simple printed A5 sheet cut into strips; a digital version using a shared whiteboard tool (e.g. Jamboard, Padlet) works equally well.',
      'When leading the cross-paper reveal in the starter, avoid framing Paper 1 as "harder" than Paper 2; instead, stress complementarity - the skills reinforce each other.',
      'The action plans from this lesson should be collected or photographed so they can be revisited in lesson y11ext-09 (target-setting) to track progress.',
      'If time is tight, the gap analysis grid can be set as a pre-lesson task so the full 16 minutes can be used for discussion and action planning.',
    ],
    targetedSkills: [
      'Identifying language techniques',
      'Understanding audience and purpose',
      'Transferring analytical vocabulary to own writing',
      'Self-assessment and gap identification',
      'Structured revision planning',
    ],
  },

  // ── Lesson y11ext-02: Full Mock Paper 1 Sitting ────────────────────────────
  {
    id: 'y11ext-02',
    title: 'Full Mock Paper 1 Sitting',
    text: 'Edexcel IGCSE English Language',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Practise completing a full Paper 1 reading examination within timed conditions',
      'Apply question-by-question time management to distribute marks efficiently across the paper',
      'Experience the cognitive demands of sustained reading and analytical writing under pressure',
      'Identify specific questions and skills to target during the debrief session that follows',
    ],
    successCriteria: [
      'I can complete all Paper 1 questions within the allocated time',
      'I can apply appropriate strategies to each question type (retrieval, inference, language analysis, evaluation)',
      'I can manage reading time and writing time without running over on any single question',
      'I can annotate my own paper after the sitting to flag areas for discussion in the debrief',
    ],
    keywords: [
      'examination conditions',
      'time management',
      'retrieval',
      'inference',
      'language analysis',
      'evaluation',
      'mark allocation',
      'sustained reading',
    ],
    starterActivity: {
      title: 'Pre-Exam Mental Preparation',
      duration: '5 minutes',
      instructions:
        'Before distributing papers, lead students through a two-minute silent preparation routine: read through any notes or strategy cards they have prepared, close revision materials, and place only permitted equipment on the desk. Teacher reads the examination instructions aloud, including total marks, time allowed, and any rubric guidance. Remind students of the time-per-mark rule (approximately one minute per mark) and the importance of reading the source text actively before beginning questions. This brief ritual establishes the formal register of examination conditions.',
      differentiation: {
        support:
          'Allow students with access arrangements their entitled additional time and/or prompts as per their EHCP or exam access arrangement documentation.',
        core: 'All students begin under standard timed conditions.',
        stretch:
          'Encourage early finishers to review and extend their highest-mark answer rather than sitting passively.',
      },
      resources: [
        'Past Paper 1 (full paper, printed and face down)',
        'Clock or countdown timer visible to all students',
      ],
    },
    mainActivities: [
      {
        title: 'Timed Paper 1 Examination',
        duration: '45 minutes',
        instructions:
          'Students complete the full Paper 1 under examination conditions. Teacher circulates silently and records the time at which key intervals pass (e.g. 15 minutes, 30 minutes, 40 minutes) on the board without disrupting students. At the 40-minute mark, give a quiet five-minute warning. Students must remain silent throughout. When time is called, students put down pens immediately. Collect papers or ask students to keep their own copy for the debrief, depending on whether you intend to mark centrally or use peer/self-marking. If keeping their own copy, students use a different-coloured pen to annotate their responses after time - circling questions they felt uncertain about and starring questions they felt confident with.',
        differentiation: {
          support:
            'Students with access arrangements complete the paper according to their agreed accommodations.',
          core: 'All students work under full timed conditions.',
          stretch:
            'Students who finish early write a brief self-evaluation note at the end of the paper: which question was most challenging and what specifically made it difficult?',
        },
        resources: [
          'Past Paper 1 (full paper)',
          'Examination conditions timer',
          'Different-coloured pen for post-time annotation',
        ],
      },
    ],
    plenaryActivity: {
      title: 'First Impressions Self-Reflection',
      duration: '10 minutes',
      instructions:
        'Students complete a brief structured reflection on a separate sheet (not on their exam paper): (1) Which question did you spend the most time on? Was this the right decision given the mark allocation? (2) Which question felt most uncertain and why? (3) What would you do differently if you sat this paper again tomorrow? Students share one response with a partner. Teacher takes a quick show-of-hands temperature check on each question to identify which questions most students found challenging - this directly informs the sequencing of the debrief lesson (y11ext-03).',
      differentiation: {
        support:
          'Provide a printed reflection sheet with the three questions and lined space for responses.',
        core: 'Students write their reflection independently.',
        stretch:
          'Students write a fourth reflection point estimating their own mark band for each question and justifying the estimate.',
      },
    },
    homework:
      'Re-read the source text from the mock paper and highlight any moments you did not use in your answers. Write two sentences explaining what you could have said about each highlighted section and which question it would have been relevant to.',
    worksheetQuestions: [
      {
        question:
          'How should you divide your time when sitting Paper 1? Describe a clear time plan that accounts for reading the source and answering all questions.',
        lines: 6,
        modelAnswer:
          'A recommended approach: spend 10 minutes reading and annotating the source text before beginning questions. Then allocate time proportional to marks - for example, a 4-mark question deserves approximately 4-5 minutes of writing time, while an 8-mark question warrants 8-10 minutes. Reserve 3-4 minutes at the end for a final read-through. The key principle is that time on each question should reflect its mark value, not its perceived difficulty.',
        marks: 4,
      },
      {
        question:
          'Why is it important to read the whole source text before answering any questions, even under time pressure?',
        lines: 5,
        modelAnswer:
          "Reading the whole text first gives a complete picture of the writer's argument, structure, and tone - all of which are tested across multiple questions. Without this overview, students may miss how later sections of the text recontextualise earlier ones, leading to incomplete or inaccurate answers. It also prevents the inefficiency of rereading sections multiple times during the question-answering phase.",
        marks: 3,
      },
      {
        question:
          'Describe two strategies for ensuring you do not run out of time on a high-mark question.',
        lines: 5,
        modelAnswer:
          'First, plan briefly before writing: a 30-second bullet-point plan prevents rambling and keeps the response focused on the question. Second, set a personal cut-off time and move on when it is reached, even if the answer feels incomplete. A partial answer on two questions earns more marks than a complete answer on one and nothing on the other.',
        marks: 4,
      },
      {
        question:
          'After finishing a mock exam, how should you use the remaining time if you complete the paper before the time is called?',
        lines: 4,
        modelAnswer:
          'Students should re-read their highest-mark answers first and look for opportunities to add specific textual evidence, more precise analytical vocabulary, or a developed comment on effect. They should not change answers they are confident about. The focus should be on expanding and improving, not rewriting from scratch, as this wastes the advantage gained by finishing early.',
        marks: 3,
      },
      {
        question:
          "Reflect on your performance in today's mock sitting. Identify one question where you feel your answer did not fully meet the mark scheme and explain what you would add or change.",
        lines: 7,
        modelAnswer:
          'Answers will vary. Examiners look for: specific identification of a question by number; an honest assessment of what the answer was missing (e.g. a named technique, a developed point about effect, a second piece of evidence); and a concrete proposal for what would have been added, ideally using mark scheme language.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson is a sitting, not a teaching lesson - resist the temptation to offer guidance during the exam.',
      'Choose a past paper that students have not previously seen to ensure authentic exam conditions.',
      'Record which question(s) the class found hardest (from the plenary show-of-hands) and use this to prioritise content in the Paper 1 debrief (y11ext-03).',
      'If centralised marking is preferred, collect papers at the end; if using peer or self-marking in the debrief, students retain their own copy.',
      'The 5-minute starter should genuinely feel like an exam start - avoid lengthy teacher talk that erodes examination register.',
    ],
    targetedSkills: [
      'Time management under examination conditions',
      'Retrieval and selection from source texts',
      'Inference and language analysis',
      "Evaluation of a writer's choices",
      'Sustained analytical writing',
    ],
  },

  // ── Lesson y11ext-03: Paper 1 Mock Debrief ─────────────────────────────────
  {
    id: 'y11ext-03',
    title: 'Paper 1 Mock Debrief',
    text: 'Edexcel IGCSE English Language',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand what the mark scheme requires for each question on Paper 1',
      'Identify specific errors, omissions, and language choices that cost marks in the mock sitting',
      'Practise improving a response using mark scheme criteria and examiner commentary',
      'Set specific, measurable targets for the next Paper 1 attempt',
    ],
    successCriteria: [
      'I can apply the mark scheme to my own responses and estimate my mark band accurately',
      'I can explain what a top-band response for the highest-mark question includes that mine does not',
      'I can rewrite at least one paragraph of my mock response to a higher standard',
      'I can write two SMART targets for improving my Paper 1 performance',
    ],
    keywords: [
      'mark scheme',
      'band descriptors',
      'top-band response',
      'examiner commentary',
      'self-assessment',
      'target-setting',
      'annotation',
      'redrafting',
    ],
    starterActivity: {
      title: 'Cold Mark: What Would You Award?',
      duration: '8 minutes',
      instructions:
        'Before returning marked papers, display two anonymised student responses to the highest-mark question from the mock paper (one mid-band, one top-band). Students read both silently for two minutes, then write a mark and a one-sentence justification for each response. Teacher reveals the actual marks and explains the examiner reasoning. This establishes the mark scheme criteria as a shared reference point before students examine their own responses.',
      differentiation: {
        support:
          'Provide the relevant mark scheme descriptors alongside the two responses so students can match language from the response to the criteria.',
        core: 'Students mark both responses without the mark scheme, then check against it.',
        stretch:
          'Students annotate specific phrases in each response that either secure or lose marks, using the exact language of the mark scheme.',
      },
      resources: [
        'Two anonymised student responses (projected or printed)',
        'Mark scheme for the highest-mark question',
      ],
    },
    mainActivities: [
      {
        title: 'Question-by-Question Mark Scheme Walkthrough',
        duration: '20 minutes',
        instructions:
          "Return papers (or students' own copies). Teacher leads a structured walkthrough of the full mark scheme, question by question. For each question: display three or four indicative content points, explain what distinguishes a top-band from a mid-band response, and ask students to mark their own answer using a coloured pen. Students record their estimated band for each question in a scoring grid. Teacher pauses on the two or three questions identified in the previous lesson's plenary as the most commonly challenging and invites students to share what they wrote, facilitating a brief whole-class discussion on the gap between their response and the mark scheme.",
        differentiation: {
          support:
            'Provide a pre-printed scoring grid with the mark boundaries already filled in so students focus on comparing their response to the descriptors.',
          core: 'Students complete the full self-marking process and record estimated bands independently.',
          stretch:
            'Students identify the single sentence in their response that best meets the mark scheme and explain why that sentence is effective using analytical vocabulary.',
        },
        resources: [
          'Full mark scheme (printed for students)',
          'Scoring grid handout',
          'Coloured pens for self-annotation',
        ],
      },
      {
        title: 'Targeted Redraft',
        duration: '18 minutes',
        instructions:
          'Students choose the one question on which the gap between their response and the top band is largest. They spend 15 minutes redrafting that answer from scratch, using the mark scheme criteria, examiner commentary, and any feedback from the walkthrough. The redraft should be written on a separate sheet and should explicitly aim for the top band. In the final three minutes, students compare their original response and their redraft side by side and annotate three specific improvements they made.',
        differentiation: {
          support:
            'Provide a sentence-by-sentence scaffold for the redraft that prompts each mark scheme criterion in sequence.',
          core: 'Students redraft independently and self-annotate three improvements.',
          stretch:
            "Students annotate the improvements using mark scheme band descriptor language (e.g. \"Here I move from 'identifies' to 'analyses' because...\").",
        },
        resources: [
          'Plain paper for redraft',
          'Mark scheme criteria for chosen question',
          'Examiner commentary extracts',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Two SMART Targets',
      duration: '8 minutes',
      instructions:
        "Students write two SMART (Specific, Measurable, Achievable, Relevant, Time-bound) targets for Paper 1 on a target card. Target 1 should address a reading/comprehension skill; Target 2 should address an analytical writing skill. Students exchange target cards with a partner who checks them against the SMART criteria and gives one piece of feedback. Target cards are kept at the front of students' revision folders.",
      differentiation: {
        support:
          'Provide a SMART target frame: "I will improve [specific skill] by [specific action] so that by [date] I can [measurable outcome]."',
        core: 'Students write both targets independently before peer review.',
        stretch:
          'Students write a third target addressing the highest-mark question specifically and include a concrete practice plan.',
      },
    },
    homework:
      'Complete a full redraft of your second-lowest-scoring question using the mark scheme. Write a 100-word commentary beneath it explaining the specific decisions you made and how they address the mark scheme criteria.',
    worksheetQuestions: [
      {
        question:
          'What is the difference between a retrieval answer and an inferential answer on Paper 1? Give an example of each.',
        lines: 6,
        modelAnswer:
          'A retrieval answer quotes or paraphrases information directly stated in the text (e.g. "The writer says the building was old"). An inferential answer reads between the lines to draw a conclusion not explicitly stated (e.g. "The reference to peeling paint and rotting timber suggests the building has been neglected for decades, implying the owner\'s indifference"). Higher-mark questions on Paper 1 reward inference, not just retrieval.',
        marks: 4,
      },
      {
        question:
          'When self-marking a language analysis answer, what three features of your response should you check first?',
        lines: 5,
        modelAnswer:
          "First, check that you have named a specific technique (not just described the language generally). Second, check that you have quoted directly from the text to support your point. Third, check that you have explained the effect of the technique on the reader, not just what the writer has done. These three elements - technique, quotation, effect - correspond to the mark scheme's distinction between lower and higher band responses.",
        marks: 3,
      },
      {
        question:
          'Rewrite the following mid-band sentence to top-band standard: "The writer uses the word \'silent\' to create a quiet atmosphere."',
        lines: 5,
        modelAnswer:
          "A top-band redraft might read: \"The adjective 'silent' does more than evoke a quiet atmosphere - positioned at the opening of the paragraph, it creates an oppressive stillness that makes the sudden intrusion of sound in the following sentence all the more jarring, suggesting the writer's intention to unsettle the reader through contrast.\" The key improvements are: naming the word class, commenting on positioning/structure, linking to the broader text, and specifying the intended effect on the reader.",
        marks: 4,
      },
      {
        question:
          'Why is it important to attempt every question on Paper 1, even if you are running out of time?',
        lines: 4,
        modelAnswer:
          'Every question carries marks that cannot be recovered if left blank. A brief but focused attempt - even three or four sentences - can score partial marks and lift a grade boundary. By contrast, an unattempted question scores zero regardless of performance on other questions. Partial marks consistently earned across all questions often outperform full marks on two questions and zero on the rest.',
        marks: 3,
      },
      {
        question:
          "Write a SMART target for your Paper 1 performance based on today's debrief. Explain why this target is both achievable and measurable.",
        lines: 6,
        modelAnswer:
          'Answers will vary. A strong SMART target might read: "By the end of this week I will practise three 8-mark language analysis questions from past papers, checking each response against the mark scheme to ensure I have named the technique, provided a direct quotation, and explained the effect on the reader - aiming to reach Band 3 on all three attempts." This is measurable (three attempts, Band 3 target) and achievable within the timeframe.',
        marks: 4,
      },
    ],
    teacherNotes: [
      "Prepare the two anonymised starter responses in advance, ideally drawn from previous cohorts' work rather than the current class to avoid identification.",
      'The walkthrough is most effective when you read the mark scheme aloud rather than projecting it silently - pausing to explain the vocabulary of the band descriptors builds familiarity.',
      'Target cards should be retained by students: consider photographing them as a class record and revisiting them in lesson y11ext-09.',
      "Where a student's overall performance was strong, redirect the targeted redraft to the question with the highest potential gain in marks, not necessarily the lowest-scoring question.",
      'Allow flexibility on the redraft question - students who genuinely struggled with every question should be guided toward the one most amenable to improvement through technique rather than knowledge.',
    ],
    targetedSkills: [
      'Self-assessment against mark scheme criteria',
      'Language analysis using technique-quotation-effect structure',
      'Inference from source texts',
      'Targeted redrafting',
      'SMART target-setting',
    ],
  },

  // ── Lesson y11ext-04: Full Mock Paper 2 Sitting ────────────────────────────
  {
    id: 'y11ext-04',
    title: 'Full Mock Paper 2 Sitting',
    text: 'Edexcel IGCSE English Language',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Practise completing a full Paper 2 transactional and creative writing examination under timed conditions',
      'Apply planning strategies to both writing tasks before beginning extended prose',
      'Manage time across two distinct writing tasks with different mark allocations',
      'Identify strengths and weaknesses in own writing for targeted improvement in the debrief',
    ],
    successCriteria: [
      'I can complete both Paper 2 writing tasks within the allocated time',
      'I can produce a brief plan for each task before writing',
      'I can sustain appropriate register, tone, and audience awareness across both responses',
      'I can self-evaluate my writing immediately after the sitting by annotating my own paper',
    ],
    keywords: [
      'transactional writing',
      'creative writing',
      'register',
      'tone',
      'audience',
      'purpose',
      'planning',
      'form',
    ],
    starterActivity: {
      title: 'Paper 2 Strategy Recall',
      duration: '5 minutes',
      instructions:
        'Before distributing papers, ask students to write down from memory: the two sections of Paper 2, the recommended time for each task, and the three things they will check before beginning to write. Teacher takes brief verbal responses and corrects any misconceptions. This activates prior knowledge without teaching new content and serves as a final mental warm-up before the formal sitting begins.',
      differentiation: {
        support:
          'Allow students to briefly consult their strategy card (produced in y11ext-01) for 30 seconds before writing from memory.',
        core: 'Students recall all three points independently.',
        stretch:
          'Students additionally recall two mark scheme criteria for each section of the paper.',
      },
      resources: ['Paper 2 mock (printed, face down)', 'Timer visible to students'],
    },
    mainActivities: [
      {
        title: 'Timed Paper 2 Examination',
        duration: '45 minutes',
        instructions:
          'Distribute papers and begin the sitting under full examination conditions. Teacher circulates silently. Display time markers at 15 minutes (planning should be complete and writing underway on Task 1), 30 minutes (students should be transitioning to Task 2), and 42 minutes (final three minutes for checking). At the end of time, students put down pens. If students retain their own papers for the debrief, they immediately use a different-coloured pen to annotate: one sentence they are proud of in each task (star), one sentence they would improve (circle), and a note on whether they met the register and purpose requirements.',
        differentiation: {
          support:
            'Students with access arrangements work according to their agreed conditions. A simple prompt card reminding them of the form features for common transactional writing types (letter, speech, article, report) may be available for lower-confidence writers if permitted by the exam access arrangement.',
          core: 'All students work under standard timed conditions.',
          stretch:
            'Students who complete both tasks early use the remaining time to redraft their opening paragraph to maximise the impression of the first sentence.',
        },
        resources: [
          'Past Paper 2 (full paper, not previously seen)',
          'Examination conditions timer',
          'Different-coloured pen for post-time annotation',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Audience Check: Did You Stay in Role?',
      duration: '10 minutes',
      instructions:
        'Ask students to re-read their transactional writing response and identify: (1) the form they used and whether they included appropriate form features (e.g. salutation in a letter, heading in an article), (2) the audience they were writing for and whether the vocabulary and tone remained consistently appropriate throughout, and (3) the purpose of the task and whether every paragraph served that purpose. Students mark a tick, a question mark, or a cross next to each criterion. Teacher leads a brief discussion on the most commonly missed criterion - this finding directly informs the debrief lesson.',
      differentiation: {
        support: 'Provide a checklist of form features for each transactional writing type.',
        core: 'Students self-assess using the three criteria independently.',
        stretch:
          'Students identify the single paragraph in their transactional writing where audience awareness is strongest and explain in one sentence why.',
      },
    },
    homework:
      'Re-read your creative writing response from the mock. Identify two moments where your language is generic or vague. Rewrite those two sentences to be more specific, precise, and crafted, then explain in a margin note why the new version is more effective.',
    worksheetQuestions: [
      {
        question:
          'How should you divide your time across Paper 2? Describe a clear time plan for both tasks including planning time.',
        lines: 6,
        modelAnswer:
          'A recommended plan: Task 1 (transactional) - 3 minutes planning, 20 minutes writing, 2 minutes checking; Task 2 (creative) - 3 minutes planning, 20 minutes writing, 2 minutes checking. This ensures both tasks receive roughly equal attention. The planning phase is non-negotiable: even a brief bullet list prevents structural drift and keeps the writing focused on purpose and audience.',
        marks: 4,
      },
      {
        question:
          'Why is "register" so important in transactional writing? What happens to your mark if register is inconsistent?',
        lines: 5,
        modelAnswer:
          'Register refers to the level of formality and vocabulary choices appropriate to the audience and purpose. If register is inconsistent - for example, beginning a formal report in an authoritative tone and then lapsing into informal language - it signals that the writer has not sustained audience awareness, which is a key mark scheme criterion. Examiners award lower bands when register is inconsistent because it undermines the communicative effectiveness of the piece.',
        marks: 3,
      },
      {
        question:
          'What are three features you must include in a formal letter to show accurate understanding of form?',
        lines: 4,
        modelAnswer:
          "A formal letter should include: an address (sender's and, where relevant, recipient's), a formal salutation (Dear Sir/Madam or Dear [Name]), and a formal sign-off (Yours faithfully or Yours sincerely, depending on whether the recipient is named). Omitting any of these demonstrates incomplete knowledge of form and risks dropping a mark band on the technical/accuracy criteria.",
        marks: 3,
      },
      {
        question:
          'A student writes an engaging creative piece but their opening sentence is generic. How does a strong opening sentence improve marks on Paper 2?',
        lines: 5,
        modelAnswer:
          'The opening sentence establishes the tone, voice, and craft of the entire piece. A strong opening - using an arresting image, an unexpected perspective, a bold structural choice such as beginning in medias res - signals immediately that the student is writing with skill and intention. Examiners form an initial impression from the opening, and a strong first sentence creates a positive evaluative frame for the rest of the response. It also demonstrates the "engaging and crafted" quality that top-band descriptors reward.',
        marks: 4,
      },
      {
        question:
          'Reflect on your Paper 2 mock performance. Which task - transactional or creative - do you feel you performed better on, and what evidence from your paper supports this?',
        lines: 6,
        modelAnswer:
          'Answers will vary. Examiners look for: a clear identification of which task the student performed better on; specific evidence from the paper (e.g. "my article included consistent formal register and three clearly argued paragraphs" rather than "I think it was good"); and an honest acknowledgement of what the weaker task was missing.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'As with the Paper 1 sitting, this should feel like a genuine examination - avoid offering guidance or reassurance during the 45-minute writing period.',
      'Select a past paper that students have not previously seen.',
      'The post-time annotation is a valuable formative tool: if students annotate their own work immediately after finishing, their self-perception is more accurate than when reviewing the paper a week later.',
      'Record the most commonly missed criterion from the plenary audience check - this directly informs the structure of the Paper 2 debrief (y11ext-05).',
      "If the class has a particular weakness in creative writing structure (e.g. endings), consider flagging this at the end of the plenary without diminishing students' confidence.",
    ],
    targetedSkills: [
      'Transactional writing for audience and purpose',
      'Creative writing craft and voice',
      'Time management across two tasks',
      'Register and form accuracy',
      'Self-evaluation of extended writing',
    ],
  },

  // ── Lesson y11ext-05: Paper 2 Mock Debrief ─────────────────────────────────
  {
    id: 'y11ext-05',
    title: 'Paper 2 Mock Debrief',
    text: 'Edexcel IGCSE English Language',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand the mark scheme criteria for both Paper 2 tasks and apply them to own responses',
      'Distinguish between the mark scheme requirements for transactional and creative writing',
      'Improve a weak paragraph from the mock using specific mark scheme guidance',
      'Set precise targets for writing improvement ahead of the final examination',
    ],
    successCriteria: [
      'I can apply band descriptor language to evaluate my own Paper 2 responses',
      'I can explain what distinguishes a top-band transactional response from a mid-band one',
      'I can redraft a weak paragraph using at least two mark scheme criteria as a guide',
      'I can write one targeted improvement action for transactional writing and one for creative writing',
    ],
    keywords: [
      'band descriptors',
      'transactional writing',
      'creative writing',
      'content and organisation',
      'language and style',
      'accuracy',
      'redraft',
      'examiner commentary',
    ],
    starterActivity: {
      title: 'Strong Opening Ranking',
      duration: '7 minutes',
      instructions:
        "Display five anonymous opening sentences from the class's mock creative writing responses (with permission, or source from previous cohorts). Students rank them from least to most effective and write one sentence justifying their top choice. Teacher reveals a consensus ranking based on mark scheme language criteria (crafted vocabulary, structural distinctiveness, immediate establishment of voice) and leads a brief discussion on what separates rank 1 from rank 5. This establishes the quality standard before students examine their own openings.",
      differentiation: {
        support:
          'Provide the mark scheme criteria for creative writing alongside the five openings so students rank with explicit reference to the criteria.',
        core: 'Students rank and justify independently before the class discussion.',
        stretch:
          'Students rewrite their lowest-ranked opening to make it competitive with the top-ranked example.',
      },
      resources: [
        'Five anonymous opening sentences (projected or printed)',
        'Creative writing mark scheme criteria',
      ],
    },
    mainActivities: [
      {
        title: 'Mark Scheme Walkthrough: Both Tasks',
        duration: '18 minutes',
        instructions:
          'Return papers. Teacher leads a structured walkthrough of the mark scheme for Task 1 (transactional) and Task 2 (creative). For each task, display the band descriptors and highlight the language that distinguishes Band 3 (adequate) from Band 4 (competent) from the top band. Focus particularly on: (a) content and organisation - does the response meet all the purpose and audience requirements? (b) language and style - is the vocabulary and syntax deliberately crafted? (c) accuracy - are spelling, punctuation, and grammar consistently controlled? Students self-mark using coloured pens and record their estimated band for each task on a summary strip. Teacher addresses the two or three most common errors observed when circulating during the mock.',
        differentiation: {
          support:
            'Provide a self-marking guide with each criterion as a yes/no question (e.g. "Did I include all required form features? Yes / No / Partially?").',
          core: 'Students self-mark against the full band descriptors independently.',
          stretch:
            'Students identify the single criterion they are closest to moving up a band on and explain in two sentences what specific change would achieve this.',
        },
        resources: [
          'Full Paper 2 mark scheme (printed for students)',
          'Band descriptor summary strip',
          'Coloured pens',
        ],
      },
      {
        title: 'Targeted Paragraph Redraft',
        duration: '20 minutes',
        instructions:
          'Students select either their weakest paragraph from Task 1 or their weakest paragraph from Task 2 (based on self-marking). They redraft that paragraph using the following protocol: (1) identify which mark scheme criterion the original paragraph fails to meet fully; (2) rewrite the paragraph targeting that specific criterion; (3) annotate the new version to show where the criterion is now met. Teacher circulates and offers targeted formative feedback, focusing on the most common band-level gaps identified in the walkthrough. In the final three minutes, students write their redrawn paragraph on a "before and after" sheet to make the improvement visible.',
        differentiation: {
          support:
            'Teacher works with lower-confidence students as a guided group, co-constructing the redraft using a shared template.',
          core: 'Students complete the three-step protocol independently.',
          stretch:
            'Students redraft paragraphs from both tasks and compare the nature of the improvements required, noting whether different criteria dominate each task.',
        },
        resources: [
          '"Before and after" redraft sheet',
          'Mark scheme criteria cards (one per student)',
          'Teacher circulation list of common errors',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Two-Task Target Card',
      duration: '8 minutes',
      instructions:
        'Students complete a two-section target card: Section A (Transactional Writing) - one specific improvement target with an action; Section B (Creative Writing) - one specific improvement target with an action. Each target must reference a named mark scheme criterion. Students share with a partner who confirms the targets are criterion-referenced and suggests one additional resource or practice strategy. Cards are filed in revision folders alongside Paper 1 target cards from y11ext-03.',
      differentiation: {
        support:
          'Provide a target frame: "For [task], I will improve [criterion] by [specific action] so that my response reaches [band] on the next attempt."',
        core: 'Students write both targets independently.',
        stretch:
          'Students write a third target addressing accuracy (spelling, punctuation, grammar) specifically and identify a proofreading strategy to implement.',
      },
    },
    homework:
      'Complete a full redraft of one task from the mock paper, aiming for the top band. Write a 100-word evaluative commentary beneath the redraft explaining which mark scheme criteria you specifically addressed and how.',
    worksheetQuestions: [
      {
        question:
          'What is the difference between "content and organisation" and "language and style" on the Paper 2 mark scheme? Why are both assessed separately?',
        lines: 6,
        modelAnswer:
          '"Content and organisation" assesses whether the response fulfils the task: whether the correct form is used, whether the purpose is achieved, whether ideas are logically sequenced and developed. "Language and style" assesses how the response is written: whether vocabulary is precise and varied, whether sentences are deliberately structured for effect, and whether tone is consistent. They are assessed separately because a response can have strong ideas but weak expression, or vice versa, and both dimensions contribute independently to overall communicative effectiveness.',
        marks: 4,
      },
      {
        question:
          "A student's creative writing response receives a mid-band mark despite having some excellent sentences. What is the most likely reason for this?",
        lines: 5,
        modelAnswer:
          'The most likely reason is inconsistency: isolated strong sentences in an otherwise uneven response indicate that the student can write at a high level but has not sustained that quality throughout. Examiners award marks based on the overall standard of the whole piece. A response that has three excellent sentences and seven weak ones will be placed in the band that most accurately describes the whole response, which is typically mid-band.',
        marks: 3,
      },
      {
        question: 'List four features of form that you should include in a persuasive speech.',
        lines: 4,
        modelAnswer:
          'A persuasive speech should include: a direct address to the audience (e.g. "Ladies and gentlemen" or "Fellow students"), rhetorical questions to engage the listener, a clear structural progression from problem to solution or argument to conclusion, and a memorable closing statement or call to action. These features signal awareness of the spoken form and secure marks for form accuracy on the mark scheme.',
        marks: 4,
      },
      {
        question:
          'Rewrite the following sentence to improve its band level: "The sunset was very beautiful and made everyone feel happy."',
        lines: 4,
        modelAnswer:
          'A top-band revision might read: "The sunset dissolved the horizon into gradients of amber and blood-red, and for a moment the crowd stood motionless, as though the spectacle had temporarily suspended the need for speech." Key improvements: specific, precise vocabulary; a complex sentence structure; an implied emotional effect rather than a stated one; and a sense of crafted observation rather than generic description.',
        marks: 4,
      },
      {
        question:
          "Which Paper 2 task do you find more challenging, and what is your specific improvement target for it based on today's debrief?",
        lines: 6,
        modelAnswer:
          'Answers will vary. Examiners look for: an honest identification of the more challenging task; a specific rather than vague explanation of the difficulty (e.g. "I struggle to maintain formal register throughout the transactional piece" rather than "I find writing hard"); and a target that references a named mark scheme criterion and includes a concrete action.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The starter opening-sentence ranking works best when the five examples span a visible quality range - include at least one genuinely strong example so students have a clear model to aspire to.',
      'During the mark scheme walkthrough, spend proportionally more time on the criterion most commonly missed by the class (identified from the mock plenary in y11ext-04).',
      'The "before and after" redraft sheet is a particularly useful revision tool: encourage students to keep these as a portfolio of improvements that they can review before the actual examination.',
      'If a significant proportion of the class is struggling with accuracy (SPaG), consider supplementing this lesson with a focused mini-lesson on the three most common punctuation errors observed in the mock.',
      'Two-task target cards from this lesson should be cross-referenced with Paper 1 targets from y11ext-03 so students can see their overall revision picture.',
    ],
    targetedSkills: [
      'Self-assessment of extended writing',
      'Applying mark scheme criteria to own work',
      'Redrafting for specific band-level improvement',
      'Form awareness in transactional writing',
      'Crafted vocabulary and syntax in creative writing',
    ],
  },

  // ── Lesson y11ext-06: Literature Revision - All Three Set Texts Overview ───
  {
    id: 'y11ext-06',
    title: 'Literature Revision: All Three Set Texts Overview',
    text: 'Edexcel IGCSE English Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Consolidate knowledge of all three set texts across key themes, characters, and writer's methods",
      'Identify thematic connections and contrasts between the set texts',
      'Practise the structure of a literature essay response under time pressure',
      'Prioritise revision focus by identifying knowledge gaps across the three texts',
    ],
    successCriteria: [
      'I can identify at least three major themes in each set text and explain how the writer presents them',
      'I can trace a thematic connection across two or more of the set texts',
      'I can write a timed essay paragraph for any one of the three texts using evidence and analysis',
      'I can identify which text and which theme requires most revision attention',
    ],
    keywords: [
      'theme',
      'character',
      "writer's methods",
      'context',
      'comparative',
      'literary analysis',
      'evidence',
      'quotation',
    ],
    starterActivity: {
      title: 'Theme Web Sprint',
      duration: '8 minutes',
      instructions:
        'Students have four minutes to create a spider diagram for each of the three set texts (working on one large sheet or three separate cards), listing every theme, key character, and writer method they can recall without notes. After four minutes, they compare with a partner and add anything they missed in a different colour. Teacher then projects a class master list and students identify their biggest gaps - this becomes the focus for the main activities.',
      differentiation: {
        support:
          'Provide a partially completed spider diagram for each text with major themes pre-filled so students add examples and evidence.',
        core: 'Students produce all three spider diagrams from memory before comparing.',
        stretch:
          'Students add a contextual link (biographical, historical, or social) to at least two themes per text.',
      },
      resources: ['Large paper or A3 sheets', 'Coloured pens', 'Projected class master list'],
    },
    mainActivities: [
      {
        title: 'Thematic Connections: Cross-Text Mapping',
        duration: '18 minutes',
        instructions:
          'Present students with a set of six broad themes (e.g. power and control, identity, loss, conflict, justice, isolation). For each theme, students write the names of the set texts that explore it, a key character or scene from each, and a short quotation. They then choose the cross-text thematic connection they find most interesting and write a brief comparative paragraph (5-6 sentences) that introduces a point, provides evidence from one text, then immediately connects it to evidence from a second text using a comparative discourse marker (e.g. "In contrast", "Similarly", "Whereas"). Pairs read each other\'s comparative paragraphs and identify whether the connection is explicit and evidenced.',
        differentiation: {
          support:
            'Provide a comparative paragraph frame: "In [Text A], [character/narrator] is shown to [theme] through [quotation], which [effect]. In contrast/Similarly, in [Text B]..."',
          core: 'Students complete the theme map and write the comparative paragraph independently.',
          stretch:
            'Students write comparative paragraphs for two different thematic connections and evaluate which comparison produces more insightful literary analysis.',
        },
        resources: [
          'Six-theme mapping grid (printed)',
          'Comparative paragraph frame (for support)',
          'Set text quotation bank (optional reference)',
        ],
      },
      {
        title: 'Timed Essay Paragraph Practice',
        duration: '18 minutes',
        instructions:
          "Display four essay question prompts - at least one for each set text - and ask students to choose the one they feel least confident about (targeting a genuine knowledge gap rather than an area of comfort). Students have 14 minutes to write one well-developed essay paragraph in response. The paragraph must include: a clear topic sentence, embedded quotation, analysis of writer's methods, and a comment on the effect on the reader or the relevance of context. In the final four minutes, students self-annotate using the checklist: topic sentence (tick/cross), quotation (tick/cross), method analysis (tick/cross), effect/context (tick/cross).",
        differentiation: {
          support:
            'Allow students to have their copy of the text open and provide a paragraph structure reminder card.',
          core: 'Students write from memory with quotations as accurately as they can recall (close paraphrasing is accepted for timed practice).',
          stretch:
            'Students write two paragraphs that develop a single analytical point across two pieces of evidence from the same text.',
        },
        resources: [
          'Four essay question prompts (projected)',
          'Paragraph checklist (printed or projected)',
          'Timer',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Text Priority Matrix',
      duration: '8 minutes',
      instructions:
        'Students draw a 2x2 matrix with axes labelled "How well I know this text" (low to high) and "How important this text is in the exam" (low to high). They place each set text in the relevant quadrant based on their honest self-assessment. The texts in the low-knowledge / high-importance quadrant become their priority for the following week\'s independent revision. Students write one sentence committing to a specific revision action for their highest-priority text.',
      differentiation: {
        support:
          'Provide a pre-drawn matrix and ask students to simply place the text initials in the correct quadrant.',
        core: 'Students create the matrix and write the commitment sentence independently.',
        stretch:
          'Students identify the specific chapter, act, or poem within their priority text that requires most attention and plan a 20-minute revision session for it.',
      },
    },
    homework:
      "Choose your weakest set text from the priority matrix. Revise the three most important quotations for each of the text's two major themes (six quotations in total). Write each quotation, the technique it demonstrates, and its effect. Bring this to the next lesson.",
    worksheetQuestions: [
      {
        question:
          'Choose one of your three set texts. Identify two major themes and provide one quotation for each that you would use in an examination essay.',
        lines: 8,
        modelAnswer:
          'Answers will vary by set text. Examiners look for: two clearly named and distinct themes (not repetitions of the same idea); quotations that are accurate or closely paraphrased; and a brief note on how each quotation evidences the theme. A strong response goes further to name the technique used in the quotation.',
        marks: 6,
      },
      {
        question:
          'What does "writer\'s methods" mean in a literature question? Give two examples of methods you might analyse in a prose text.',
        lines: 5,
        modelAnswer:
          '"Writer\'s methods" refers to the deliberate choices a writer makes about language, structure, form, and narrative perspective to create meaning and effect. In a prose text, examples might include: the use of free indirect discourse to align the reader with a character\'s perspective; or the choice to delay a revelation until the end of a chapter to create suspense and recontextualise earlier events.',
        marks: 4,
      },
      {
        question:
          'Write a topic sentence for a literature essay paragraph about the theme of power in one of your set texts.',
        lines: 3,
        modelAnswer:
          'Answers will vary. A strong topic sentence: names the text and author; identifies the theme precisely (not just "power" but "the corrupting nature of unchecked power" or "the use of institutional power to suppress individual identity"); and introduces the analytical direction of the paragraph.',
        marks: 3,
      },
      {
        question:
          'Explain why literary context (the time in which a text was written) is relevant to an examination essay. Give one specific contextual point for any of your set texts.',
        lines: 5,
        modelAnswer:
          'Context is relevant because it explains why a writer made particular choices and what those choices would have meant to a contemporary reader. A specific contextual point should be tied to a specific moment in the text - for example, if writing about a text from the Victorian era, a reference to contemporary gender expectations should be linked to a specific character or incident in the text, not stated as general historical background.',
        marks: 4,
      },
      {
        question:
          'Which of your three set texts do you know least well? What are the two most important things you need to revise about it before the exam?',
        lines: 5,
        modelAnswer:
          'Answers will vary. Examiners look for: an honest identification of the weaker text; two specific revision priorities (e.g. "I need to learn three key quotations for the theme of isolation" and "I need to revise the narrative structure and the effect of the ending") rather than vague intentions ("I need to revise it more").',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This lesson assumes students have been taught all three set texts and are in the consolidation phase - it is not appropriate for students who have not completed the texts.',
      'The specific set texts referenced in printed materials should be adapted to match the texts your class has studied. The lesson structure is text-agnostic by design.',
      'The timed paragraph activity is most effective when students choose their weakest question - redirect any students who default to their comfort zone.',
      'The cross-text comparative paragraph is a valuable differentiator: stronger students can be pushed toward comparative analysis as preparation for any cross-text question that may appear.',
      'Collect the text priority matrices or photograph them to inform the sequencing of any additional literature revision sessions.',
    ],
    targetedSkills: [
      'Thematic analysis across set texts',
      "Embedding quotations and analysing writer's methods",
      'Comparative literary analysis',
      'Timed essay paragraph writing',
      'Self-assessment of literature knowledge gaps',
    ],
  },

  // ── Lesson y11ext-07: Poetry Unseen Technique Consolidation ────────────────
  {
    id: 'y11ext-07',
    title: 'Poetry Unseen Technique Consolidation',
    text: 'Edexcel IGCSE English Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Apply a systematic approach to reading and annotating an unseen poem under timed conditions',
      'Identify and analyse language techniques, structural choices, and tonal shifts in an unseen poem',
      'Construct a well-evidenced response to an unseen poetry question using a clear analytical framework',
      "Evaluate the effectiveness of own and peers' unseen responses against mark scheme criteria",
    ],
    successCriteria: [
      'I can annotate an unseen poem for language technique, structure, tone, and form within 5 minutes',
      "I can write an opening paragraph that establishes the poem's central concern and my analytical approach",
      'I can develop at least two analytical points with embedded quotations and comments on effect',
      'I can explain what separates my response from the top band using the mark scheme',
    ],
    keywords: [
      'unseen poem',
      'annotation',
      'language technique',
      'structure',
      'form',
      'tone',
      'volta',
      'speaker',
      'imagery',
      'connotation',
    ],
    starterActivity: {
      title: 'First Response: Read Once, Write Fast',
      duration: '7 minutes',
      instructions:
        'Distribute an unseen poem (a short lyric of 16-20 lines). Students read it once in silence, then write for three minutes without stopping: what is the poem about, how does it make them feel, and what single word or phrase stands out most. No annotation, no re-reading - the goal is to capture an authentic first response. Teacher takes two or three verbal responses, emphasising that first impressions are valid and often accurate starting points for analytical writing. This overcomes the paralysis many students feel when confronting an unseen poem.',
      differentiation: {
        support: 'Allow a second silent read before the timed writing begins.',
        core: 'Students complete the three-minute write after a single read.',
        stretch:
          'Students also note whether their first impression might be wrong or incomplete, and what would change their reading.',
      },
      resources: ['Unseen poem (printed, one copy initially)', 'Timer'],
    },
    mainActivities: [
      {
        title: 'Systematic Annotation Protocol',
        duration: '15 minutes',
        instructions:
          'Distribute a second copy of the poem with wider margins. Introduce the four-step annotation protocol: (1) Circle all language techniques and name them in the margin; (2) Mark structural moments - stanza breaks, line lengths, any shift in rhyme or rhythm - and note their effect; (3) Identify the speaker, the tone, and any tonal shifts (use a triangle symbol in the margin); (4) Note the form (sonnet, free verse, ballad etc.) and its significance. Students work through the protocol independently in eight minutes. Teacher then projects a model annotation and students compare, using a coloured pen to add anything they missed. Discuss: what is the most analytically rich moment in the poem?',
        differentiation: {
          support:
            'Provide a partially annotated copy with some techniques already identified so students focus on completing and extending the analysis.',
          core: 'Students complete all four steps independently before comparing with the model.',
          stretch:
            'Students rank the three most significant features of the poem in order of analytical importance and justify their ranking.',
        },
        resources: [
          'Unseen poem (wide-margin copy, printed)',
          'Annotation protocol reference card',
          'Model annotation (projected)',
          'Coloured pens',
        ],
      },
      {
        title: 'Timed Unseen Response',
        duration: '20 minutes',
        instructions:
          'Display an examination-style question about the poem (e.g. "Explore how the poet presents the theme of [X] in this poem"). Students have 16 minutes to write a response, using their annotations as a guide. They should aim for three developed analytical paragraphs: an opening that establishes the poem\'s central concern, a middle paragraph analysing language, and a third paragraph commenting on structure or form. In the final four minutes, students self-annotate: mark any paragraph where the analysis goes beyond identification to discuss effect (green tick); mark any paragraph that only identifies technique without developing it (orange circle). Teacher circulates and notes two or three responses to share in the plenary.',
        differentiation: {
          support:
            'Provide a paragraph frame for each of the three sections: opening (establish theme + overall impression), middle (technique + quotation + effect), structure paragraph (form choice + effect on reader).',
          core: 'Students write all three paragraphs independently and self-annotate.',
          stretch:
            "Students write a fourth paragraph comparing the poet's technique to that of a named poem from the studied anthology.",
        },
        resources: [
          'Examination-style question (projected)',
          'Annotation-to-essay transition guide',
          'Self-annotation key (green tick / orange circle)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The Gap Between Identification and Analysis',
      duration: '8 minutes',
      instructions:
        'Teacher selects two sentences from student responses during circulation: one that identifies a technique and one that analyses it (both anonymous). Project both and ask: "What makes the second sentence worth more marks?" Students respond verbally, arriving collectively at the principle that identification names what is there while analysis explains what it does to the reader and why the poet chose it. Students then locate one identified-only sentence in their own response and rewrite it as an analytical sentence on the bottom of the page.',
      differentiation: {
        support:
          'Provide the analytical sentence structure: "[Technique] creates an effect of [effect] because it makes the reader [reader response], reflecting the poet\'s intention to [purpose]."',
        core: 'Students identify and rewrite independently.',
        stretch:
          "Students rewrite two identified-only sentences and add a third that connects both points to the poem's overall meaning.",
      },
    },
    homework:
      'Find a poem in a newspaper, magazine, or anthology that you have not studied in class. Apply the four-step annotation protocol, then write one analytical paragraph about the most significant language technique. Bring both the poem and the paragraph to the next lesson.',
    worksheetQuestions: [
      {
        question:
          'Describe the four-step annotation protocol for an unseen poem. Why is it important to annotate before beginning to write?',
        lines: 7,
        modelAnswer:
          'The four steps are: (1) identify and name language techniques; (2) mark structural features such as stanza breaks, line length, and shifts in rhyme or rhythm; (3) identify the speaker, tone, and tonal shifts; (4) note the form and its significance. Annotating before writing prevents the common error of writing the first thing that comes to mind without considering the poem as a whole. It ensures the response is grounded in evidence and that analytical points are chosen for their significance rather than their accessibility.',
        marks: 5,
      },
      {
        question:
          'What is the difference between tone and mood in poetry analysis? Give an example of each.',
        lines: 5,
        modelAnswer:
          'Tone is the attitude of the speaker or poet toward the subject (e.g. bitter, nostalgic, ironic), while mood is the emotional atmosphere created in the reader (e.g. unsettling, melancholic, celebratory). Tone is something the poet controls through word choice; mood is the effect created in the reader. For example, a poem with a detached, clinical tone might create an unsettling mood in the reader precisely because the emotional distance feels inappropriate to the subject matter.',
        marks: 4,
      },
      {
        question:
          'Write an opening paragraph for an unseen poem question. Your paragraph must establish the central theme, name the form, and introduce your analytical approach.',
        lines: 7,
        modelAnswer:
          'Answers will vary. A strong opening: names the poem and poet; identifies the central concern (theme) without simply retelling the poem; notes the form and its significance (e.g. "the poet\'s use of the sonnet form places the poem within a tradition of [love/loss/argument] poetry, which creates an immediate frame of expectation that is then subverted"); and indicates the analytical direction the response will take.',
        marks: 5,
      },
      {
        question: 'Explain what a "volta" is in a poem and why it is analytically significant.',
        lines: 4,
        modelAnswer:
          "A volta is a turn or shift in a poem - a moment where the tone, argument, or perspective changes direction. It is analytically significant because it reveals how the poem is structured to create meaning: the contrast between what comes before and after the volta often contains the poem's central insight or emotional pivot. Identifying the volta allows a student to structure an analytical response around the poem's development rather than simply cataloguing individual techniques.",
        marks: 3,
      },
      {
        question:
          'A student writes: "The poet uses the word \'dark\' which is a metaphor." Rewrite this as a top-band analytical sentence.',
        lines: 4,
        modelAnswer:
          "A top-band revision might read: \"The metaphorical weight of 'dark' accumulates through its repetition across the poem, shifting from a literal description of evening in the opening stanza to a signifier of the speaker's psychological state by the final lines - a movement that enacts the poem's central argument that external landscape and internal emotion are inseparable.\" Key improvements: the technique is named precisely; the word is linked to a structural pattern; the effect is tied to the poem's overall meaning.",
        marks: 4,
      },
    ],
    teacherNotes: [
      'Choose an unseen poem that is genuinely unfamiliar to the class - avoid poems from the studied anthology even if not directly assessed.',
      'The four-step annotation protocol should be consistent with whatever approach you have taught in earlier lessons; do not introduce a new system at this late stage.',
      'The "identification vs analysis" distinction in the plenary is one of the most important conceptual shifts for mid-band students - return to it explicitly in the exam technique lesson (y11ext-08).',
      'If the class has studied a poetry anthology, the stretch activity (comparative paragraph) is a valuable preparation for any comparative element of the examination.',
      'Homework poems brought in by students can be used as a starter activity in a subsequent lesson for additional unseen practice.',
    ],
    targetedSkills: [
      'Systematic poem annotation',
      'Identifying and analysing language techniques',
      'Structural and formal analysis',
      'Timed unseen response writing',
      'Distinguishing identification from analysis',
    ],
  },

  // ── Lesson y11ext-08: Question-by-Question Exam Technique Revision ──────────
  {
    id: 'y11ext-08',
    title: 'Question-by-Question Exam Technique Revision',
    text: 'Edexcel IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand the specific technique requirement for each question type across Paper 1, Paper 2, and the Literature paper',
      'Identify the most common examiner criticisms for each question type and how to avoid them',
      'Practise targeted micro-writing activities that address technique gaps for specific question types',
      'Build a personalised exam technique reference card for use in final revision',
    ],
    successCriteria: [
      'I can describe the specific strategy required for each question type across all papers',
      'I can identify at least one common error to avoid on each question type',
      'I can produce a response opening for any question type that immediately demonstrates correct technique',
      'I can explain what the mark scheme is looking for on the two highest-mark questions across all papers',
    ],
    keywords: [
      'exam technique',
      'question command words',
      'mark allocation',
      'examiner report',
      'top-band response',
      'response framework',
      'retrieval',
      'inference',
      'evaluation',
      'analytical writing',
    ],
    starterActivity: {
      title: 'Command Word Rapid Fire',
      duration: '6 minutes',
      instructions:
        'Teacher calls out command words one at a time ("Explain", "Analyse", "Evaluate", "Describe", "Explore", "Compare", "Identify"). Students write in 10 seconds what each command word tells them to do in terms of exam technique. After all eight words have been called, teacher reveals precise definitions drawn from the mark scheme glossary and students correct any misconceptions in a different colour. The goal is to ensure command words are read accurately in the examination rather than treated as synonymous.',
      differentiation: {
        support:
          'Provide a matching exercise: command words in one column, definitions in a jumbled second column, before the rapid-fire phase.',
        core: 'Students write definitions from memory across all eight words.',
        stretch:
          'Students write a second row of the table: what a command word does NOT require (e.g. "Identify" does not require analysis - overwriting a retrieval question is a time management error).',
      },
      resources: [
        'Command word list (projected after the activity)',
        'Mini whiteboards or quick-write strips',
      ],
    },
    mainActivities: [
      {
        title: 'Question-Type Technique Guide Build',
        duration: '20 minutes',
        instructions:
          'Provide students with a blank question-type technique table with rows for each key question type across all papers (e.g. Paper 1 Q1 retrieval; Paper 1 Q3 language analysis; Paper 1 Q4 evaluation; Paper 2 Task 1 transactional; Paper 2 Task 2 creative; Literature unseen; Literature set text essay). For each row, students complete four columns: (1) What does this question test? (2) What should my opening sentence do? (3) What is the most common error examiners criticise? (4) What does a top-band response include that a mid-band one does not? Students work in pairs using examiner reports, mark schemes, and their own debrief target cards from y11ext-03 and y11ext-05. After 15 minutes, pairs share their findings for two or three question types with the class.',
        differentiation: {
          support:
            'Provide a partially completed guide with the most challenging rows pre-filled so students complete only the question types most relevant to their revision needs.',
          core: 'Students complete all rows in pairs using the available resources.',
          stretch:
            'Students add a fifth column: a "top-band sentence starter" that could serve as a model response opening for each question type.',
        },
        resources: [
          'Blank question-type technique table (printed)',
          'Examiner report extracts for each question type',
          'Mark scheme summaries',
          'Target cards from y11ext-03 and y11ext-05',
        ],
      },
      {
        title: 'Micro-Practice: First Lines Only',
        duration: '18 minutes',
        instructions:
          'Display five past examination questions, one from each major question type. Students have two minutes per question to write only the opening sentence or sentences of a response - not a full answer, but a high-quality response beginning that immediately demonstrates correct technique. After each two-minute slot, teacher pauses and selects two or three opening sentences (verbally or projected) for the class to evaluate: does it answer the question directly? Does it use appropriate analytical language? Does it indicate the structure of the full response? Students annotate their own opening sentences based on the feedback received.',
        differentiation: {
          support:
            'Provide a sentence frame for each question type so students can focus on populating the frame correctly rather than constructing it from scratch.',
          core: 'Students write all five opening sentences independently in the timed slots.',
          stretch:
            'Students write a second draft of their least effective opening sentence immediately after the class feedback discussion.',
        },
        resources: [
          'Five past exam questions (projected)',
          'Technique guide from main activity 1 (for reference)',
          'Two-minute timer with visible countdown',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Personal Technique Reference Card',
      duration: '8 minutes',
      instructions:
        'Students condense their question-type technique guide into a personal reference card (A5 size): on the front, the three things they must do on their two highest-mark questions; on the back, the three most common errors they personally make (drawn from their debrief target cards). This card is for revision use only - it cannot be taken into the examination - but having a personalised, condensed reference maximises the usefulness of final revision time.',
      differentiation: {
        support: 'Provide a pre-formatted reference card template with sections labelled.',
        core: 'Students create their reference card independently.',
        stretch:
          'Students write a brief exam-day action sequence on the card: the first three things they will do when they open the paper.',
      },
    },
    homework:
      'Using your personal technique reference card, practise writing the opening sentences for three questions from a past paper you have not previously attempted. For each, annotate what specific technique feature your opening sentence demonstrates.',
    worksheetQuestions: [
      {
        question:
          'What is the difference between what "Explain" and "Analyse" require in an examination answer?',
        lines: 5,
        modelAnswer:
          '"Explain" asks for a clear, reasoned account of how something works or what something means - it requires clarity and logical development but does not necessarily demand evaluation of effect. "Analyse" goes further: it requires examination of how choices create meaning, considering the writer\'s intention, the effect on the reader, and the significance of specific language or structural decisions. An "Analyse" question penalises a response that only explains without evaluating the craft involved.',
        marks: 4,
      },
      {
        question:
          'Identify two of the most common errors students make on high-mark analytical questions, based on examiner reports.',
        lines: 5,
        modelAnswer:
          'The two most common errors are: (1) identifying techniques without analysing their effect - students name a metaphor or simile but do not explain what it does to the reader or why the writer chose it at that specific point; and (2) retelling or summarising the text rather than analysing it - students describe what happens rather than examining how the writer creates meaning through language and structure.',
        marks: 4,
      },
      {
        question:
          'Write a strong opening sentence for the following question: "How does the writer use language to create tension in lines 14-28?"',
        lines: 4,
        modelAnswer:
          'A strong opening might read: "Throughout lines 14-28, the writer sustains tension through a combination of short, declarative sentences that mimic the protagonist\'s fractured thinking and a pattern of escalating sensory imagery that positions the reader inside the character\'s mounting panic." Key features: answers the question directly; introduces two specific analytical points; avoids narrative summary; uses precise literary vocabulary.',
        marks: 4,
      },
      {
        question: 'Why is it a mistake to overwrite a low-mark retrieval question on Paper 1?',
        lines: 4,
        modelAnswer:
          'A retrieval question (typically 2-4 marks) awards marks for correctly identified information from the text. Writing extended analysis on such a question does not earn additional marks because the mark scheme only credits retrieval, not analytical development. Overwriting wastes time that should be allocated to higher-mark questions where extended analysis is required and rewarded, reducing overall performance across the paper.',
        marks: 3,
      },
      {
        question:
          'What are the three things a top-band evaluation response must do that a mid-band one typically does not?',
        lines: 6,
        modelAnswer:
          'A top-band evaluation response: (1) considers the writer\'s deliberate choices and their intended effect on the reader, rather than describing what the text says; (2) sustains an evaluative stance throughout, using evaluative language such as "effectively", "convincingly", "the writer succeeds in" rather than retreating into description; and (3) offers a developed, qualified judgement - acknowledging complexity or alternative interpretations - rather than a simple binary assessment.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The question-type technique guide is the centrepiece of this lesson - ensure all relevant question types for your specific exam series and tier are included in the blank table.',
      'Examiner reports are available on the Edexcel website and should be printed or bookmarked before the lesson.',
      'The micro-practice activity works best when teacher feedback is rapid and precise - prepare one or two exemplar opening sentences for each question type in advance to use if student examples are insufficient.',
      'Personal technique reference cards should be encouraged as a revision tool but students must understand they cannot be taken into the examination.',
      'This lesson pairs well with y11ext-09 (time management under pressure) - the technique knowledge built here is applied under timed conditions in the following lesson.',
    ],
    targetedSkills: [
      'Command word interpretation',
      'Question-specific exam technique',
      'Analytical response construction',
      'Retrieval accuracy',
      'Evaluative writing',
    ],
  },

  // ── Lesson y11ext-09: Peer Marking and Moderation ──────────────────────────
  {
    id: 'y11ext-09',
    title: 'Peer Marking and Moderation',
    text: 'Edexcel IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      "Apply mark scheme criteria accurately to a peer's response to understand the standard required for each band",
      "Provide specific, constructive, criterion-referenced written feedback on a peer's work",
      'Understand how professional moderation works and why consistency in marking is important',
      'Use feedback received from a peer to identify and act on a specific improvement',
    ],
    successCriteria: [
      "I can award a justified band to a peer's response with reference to specific mark scheme criteria",
      'I can write feedback that identifies at least one strength and one development point using mark scheme language',
      'I can explain why two markers might award different bands and how they would resolve this in a moderation meeting',
      'I can use the feedback I receive to improve one response by at least one mark band',
    ],
    keywords: [
      'peer marking',
      'moderation',
      'mark scheme',
      'band descriptors',
      'criterion-referenced feedback',
      'standardisation',
      'annotation',
      'targeted feedback',
    ],
    starterActivity: {
      title: 'Moderation Scenario: Agree or Disagree?',
      duration: '7 minutes',
      instructions:
        'Display a short anonymous student response (8-10 sentences) alongside two different mark awards: Marker A has awarded Band 3, Marker B has awarded Band 4. Students read the response and the mark scheme for 90 seconds, then decide which marker they agree with and write a one-sentence justification. Teacher takes a show-of-hands vote and selects students from each camp to argue their case. Facilitate a brief moderation discussion, arriving at a consensus band and explaining the principle that in professional marking, markers discuss disagreements and refer to the mark scheme to reach a shared standard.',
      differentiation: {
        support:
          'Provide two or three key mark scheme phrases highlighted in the student response to give lower-confidence students an entry point into the discussion.',
        core: 'Students form a view independently before the class discussion.',
        stretch:
          'Students identify the single sentence in the response that is most responsible for the disagreement between the two markers and explain why it sits on the band boundary.',
      },
      resources: [
        'Anonymous student response (projected)',
        'Two mark awards displayed',
        'Mark scheme for relevant question type',
      ],
    },
    mainActivities: [
      {
        title: 'Structured Peer Marking',
        duration: '22 minutes',
        instructions:
          'Students swap a timed response from this week\'s practice (or a designated piece from their folders) with a partner they have not previously exchanged with. Marker receives the response and the relevant mark scheme. They complete a structured peer marking protocol: (1) Read the full response without annotating; (2) Re-read and annotate three moments where the mark scheme criteria are either met or not met - use a green pen for strengths and a red pen for development areas; (3) Write a band award with a one-paragraph justification that references at least two mark scheme descriptors; (4) Write two pieces of targeted written feedback: one strength ("This is effective because...") and one development ("To move to the next band, you should..."). Students return marked work to the writer and have five minutes to read the feedback silently.',
        differentiation: {
          support:
            'Provide a peer marking frame with sentence starters for each stage of the protocol.',
          core: 'Students complete all four stages of the protocol independently.',
          stretch:
            'Students write a third feedback point proposing a specific rewrite: "If you were to redraft the third paragraph, I would suggest..."',
        },
        resources: [
          'Student responses (their own work from this week)',
          'Structured peer marking protocol sheet',
          'Mark scheme for relevant question type',
          'Green and red pens',
        ],
      },
      {
        title: 'Feedback-Driven Improvement Sprint',
        duration: '16 minutes',
        instructions:
          "Having read their peer's feedback, students choose one development point and act on it immediately by rewriting the identified section (not the whole response) on a new sheet. The rewrite should take no more than 10 minutes. In the final six minutes, students show the original section and the rewritten section to the same peer, who confirms whether the feedback has been addressed and whether the band has moved. This creates an immediate feedback loop and demonstrates that improvement is both possible and measurable.",
        differentiation: {
          support:
            'Students who received vague feedback can consult the mark scheme directly and choose their own development target before rewriting.',
          core: 'Students act on the peer feedback independently.',
          stretch:
            'Students write a two-sentence analytical commentary comparing the original and improved section, explaining which mark scheme criterion the improvement addresses.',
        },
        resources: [
          'Plain paper for improvement sprint',
          'Peer-marked original response',
          'Mark scheme for reference',
        ],
      },
    ],
    plenaryActivity: {
      title: 'What Makes Feedback Useful?',
      duration: '8 minutes',
      instructions:
        'Teacher displays three examples of peer feedback (anonymised): one vague ("This was good but could be better"), one specific but not criterion-referenced ("I liked the vocabulary"), and one specific and criterion-referenced ("Your use of embedded quotation meets the mark scheme requirement for Band 3, but to reach Band 4 you need to develop the point about effect on the reader in two or three additional sentences"). Students rank them and explain which is most useful and why. The class derives three principles of effective feedback, which are added to the board and copied into revision folders.',
      differentiation: {
        support:
          'Provide a simple three-point checklist: Is the feedback specific? Does it reference the mark scheme? Does it tell the writer what to do next?',
        core: 'Students rank and derive principles independently before the class discussion.',
        stretch:
          'Students evaluate the feedback they received today against the three principles and write a one-sentence assessment of its quality.',
      },
    },
    homework:
      'Take the peer feedback you received today and act on the second development point (the one you did not address in the improvement sprint). Write a full redraft of that section and bring it to the next lesson to show your peer.',
    worksheetQuestions: [
      {
        question:
          'What is the purpose of moderation in examination marking? Why does it matter that two markers agree on the same band?',
        lines: 5,
        modelAnswer:
          "Moderation ensures that marks are awarded consistently and fairly across all students, regardless of which marker reads a response. If two markers award different bands for the same response, the mark is unreliable and the student's grade becomes a matter of chance rather than merit. Moderation meetings compare marks and resolve disagreements by returning to the mark scheme language, establishing a shared standard that all markers apply consistently.",
        marks: 4,
      },
      {
        question:
          'Write a piece of criterion-referenced feedback on the following sentence: "The writer uses lots of adjectives to describe the weather."',
        lines: 6,
        modelAnswer:
          "Criterion-referenced feedback might read: \"This sentence identifies that adjectives are used but does not name a specific adjective, explain what it does to the reader, or relate it to the writer's purpose - all of which are required for Band 3 and above on the mark scheme. To improve, select the single most significant adjective, embed it in quotation marks, name its effect (e.g. it creates a sense of ominous foreboding), and link it to the poem's or passage's central concern.\"",
        marks: 5,
      },
      {
        question:
          'Explain the difference between a "strength" comment and a "development" comment in peer feedback. Why are both needed?',
        lines: 5,
        modelAnswer:
          "A strength comment identifies what the writer has done well and explains why it meets the mark scheme - this validates the writer's effective choices and shows them what to repeat. A development comment identifies a specific gap and provides actionable guidance for improvement - this is what allows the writer to move up a band. Both are needed because feedback without a strength leaves a writer without a model of success, while feedback without a development point offers no pathway to improvement.",
        marks: 4,
      },
      {
        question: "Why is it important to read a peer's full response before annotating it?",
        lines: 4,
        modelAnswer:
          'Reading the full response first allows the marker to assess it as a whole - to see whether it develops, whether it sustains its quality, and whether later paragraphs address weaknesses in earlier ones. Annotating during the first read risks over-rewarding or over-penalising individual sentences without seeing how they function within the complete response. Many mark scheme criteria (such as "sustained" or "consistent") can only be assessed on the whole response.',
        marks: 3,
      },
      {
        question:
          'Reflect on the peer feedback you gave today. Was it specific, criterion-referenced, and actionable? What would you do differently?',
        lines: 5,
        modelAnswer:
          'Answers will vary. Examiners look for: an honest self-assessment of the feedback quality; specific identification of where it was or was not criterion-referenced; and a concrete proposal for what a better version of the feedback would have said. A strong response references the three principles of effective feedback derived in the plenary.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Prepare the moderation starter scenario in advance using genuine student work from a previous cohort - current class work risks identification and can make students defensive.',
      'The structured peer marking protocol sheet is key to ensuring students go beyond superficial feedback. Enforce the requirement that every piece of feedback references a specific mark scheme descriptor.',
      'Circulate during the peer marking phase and challenge any feedback that is vague ("this is good") by asking the student to name the specific mark scheme criterion that supports their comment.',
      'The improvement sprint creates visible progress within a single lesson - it is one of the most motivating activities in this series and should be protected from time pressure.',
      'Collect or photograph examples of strong criterion-referenced peer feedback to use as models in future lessons or displayed in the classroom.',
    ],
    targetedSkills: [
      'Mark scheme application',
      'Criterion-referenced feedback',
      'Moderation and standardisation understanding',
      'Targeted response improvement',
      'Analytical self-reflection',
    ],
  },

  // ── Lesson y11ext-10: Final Pre-Exam Confidence Lesson ─────────────────────
  {
    id: 'y11ext-10',
    title: 'Final Pre-Exam Confidence Lesson',
    text: 'Edexcel IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Consolidate key exam technique strategies across all papers into a single, memorable framework',
      'Identify evidence of progress made across the revision series and articulate it as confidence-building proof',
      'Manage pre-examination anxiety using concrete, strategies-based thinking rather than avoidance',
      'Leave the lesson with a clear, personalised exam-day action plan',
    ],
    successCriteria: [
      'I can summarise my strongest strategy for each examination paper in one sentence',
      'I can identify three pieces of concrete evidence that show I have improved since the mock sittings',
      'I can describe what I will do in the first five minutes of each exam to settle myself and focus',
      'I can articulate one specific strength I am bringing into the examination',
    ],
    keywords: [
      'exam readiness',
      'confidence',
      'strategy',
      'progress',
      'exam-day plan',
      'consolidation',
      'self-efficacy',
      'target',
    ],
    starterActivity: {
      title: 'Evidence of Progress Gallery',
      duration: '8 minutes',
      instructions:
        'Ask students to retrieve three pieces of work from this revision series: their original mock response (Paper 1 or Paper 2), their redrafted version from the debrief lesson, and their personal technique reference card from y11ext-08. Students lay these three items on their desk and spend four minutes in silence comparing the mock response and the redraft, noting the specific improvements made. They write one sentence beginning "Since the mock, I have improved my [specific skill] because..." and share it with a partner. Teacher facilitates brief sharing: three or four students read their sentences aloud. The goal is to establish an evidence-based sense of progress rather than abstract reassurance.',
      differentiation: {
        support:
          'Provide a prompt list of possible progress statements if students struggle to identify concrete improvements.',
        core: 'Students identify improvement independently before sharing.',
        stretch:
          'Students write three progress statements, one per assessment objective, and rank them in order of significance.',
      },
      resources: [
        "Students' own mock responses and redrafts (retrieved from folders)",
        'Personal technique reference cards from y11ext-08',
      ],
    },
    mainActivities: [
      {
        title: 'My Strongest Strategy: One Sentence Per Paper',
        duration: '15 minutes',
        instructions:
          'Students have 10 minutes to write one sentence for each paper they are sitting that captures their single strongest strategy: the thing they know they do well and will rely on in the examination. For example: "On Paper 1, my strongest strategy is annotating the source text for four minutes before writing, which means my answers are always grounded in evidence." Teacher circulates and helps any student who cannot identify a strength - redirect these students toward their target cards and technique guides to locate a skill that has measurably improved. After 10 minutes, students share their sentences in groups of three and each group selects one sentence to read to the class. Teacher builds a class "wall of strengths" on the board that is displayed for the remainder of the lesson.',
        differentiation: {
          support:
            'Provide a sentence frame and a list of possible strategies from the revision series for students to select from if they cannot generate their own.',
          core: 'Students write all strategy sentences independently.',
          stretch:
            'Students write a second sentence per paper identifying their contingency strategy: "If I find a question difficult, I will..."',
        },
        resources: [
          'Revision folders',
          'Target cards from y11ext-03 and y11ext-05',
          'Board space for wall of strengths',
        ],
      },
      {
        title: 'Exam-Day Action Plan',
        duration: '20 minutes',
        instructions:
          'Students complete a structured exam-day action plan card covering: (1) The night before - three specific revision actions (not "revise everything") each lasting no more than 20 minutes; (2) The morning of the exam - a 15-minute routine that includes reviewing their technique reference card and eating a proper breakfast; (3) The first five minutes of each examination - a precise sequence of actions (e.g. read the instructions; note the marks per question; read the source text or question paper fully before writing; breathe, then begin with the highest-confidence question or in question order depending on strategy); (4) If panic sets in - two grounding strategies (e.g. re-read the question to refocus, return to a strength they know they have). Students write the plan on a card that fits in their school bag. Teacher leads a brief group discussion validating strategies and correcting any counterproductive ideas (e.g. "staying up all night revising").',
        differentiation: {
          support:
            'Provide a pre-formatted action plan card with each section partially completed.',
          core: 'Students complete the full action plan independently.',
          stretch:
            'Students add a fifth section: "After the exam" - a strategy for not over-analysing performance between papers.',
        },
        resources: [
          'Exam-day action plan card (A5, printed or blank card)',
          'Technique reference card from y11ext-08',
          'Timer',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Final Words: What I Know, What I Can Do',
      duration: '10 minutes',
      instructions:
        'Each student writes two sentences on a card or sticky note: "I know [one key piece of content or technique that will help me in the exam]" and "I can [one skill I have practised and improved across this revision series]". Teacher collects these and reads a selection aloud (anonymously). The lesson ends with the teacher providing a brief, genuine, forward-looking summary of the class\'s progress - drawing on the evidence collected across the series (mock scores, redraft improvements, target cards) - and a final encouragement that is specific and grounded in observed improvement rather than generic praise.',
      differentiation: {
        support:
          'Allow students who struggle to identify a "can do" to look back through their revision folder for concrete evidence before writing.',
        core: 'Students write both sentences independently.',
        stretch:
          'Students write a third sentence: "I am prepared for [specific challenge] because [specific evidence]."',
      },
    },
    homework:
      'Complete the night-before revision plan from your exam-day action card. Review your six most important quotations for your weakest literature text, practise one exam paragraph opening for each paper, and get to bed at a reasonable time.',
    worksheetQuestions: [
      {
        question:
          'What is the single most effective thing you can do in the first five minutes of an English examination? Explain why.',
        lines: 5,
        modelAnswer:
          'The most effective use of the first five minutes is to read the whole paper (or the full source text on Paper 1) before writing a single word. This provides a complete overview of what is being asked, allows strategic decision-making about question order and time allocation, and prevents the common error of beginning a response without fully understanding what the question requires. Students who read first consistently make better use of their full exam time than those who begin writing immediately.',
        marks: 4,
      },
      {
        question:
          'Describe two strategies for managing anxiety during an examination if you feel overwhelmed by a question.',
        lines: 5,
        modelAnswer:
          'First, re-read the question slowly and break it into its component parts: identify the command word, the text reference, and what the question is asking you to do. Often the cause of panic is that the question has been misread on first encounter. Second, start with what you know: even if you cannot answer the difficult part, write the aspects of a response you are confident about. This activates your analytical thinking and often resolves the sense of not knowing what to write.',
        marks: 4,
      },
      {
        question:
          'Write three specific revision actions you could complete in the 24 hours before an English examination, each lasting no more than 20 minutes.',
        lines: 6,
        modelAnswer:
          'Effective 20-minute revision actions might include: (1) reading through six key quotations for each literature set text aloud, covering the page and testing recall; (2) writing an opening paragraph for one past Paper 1 question and comparing it against the mark scheme; (3) reviewing the personal technique reference card and annotating any criteria that still feel uncertain. Each action should be specific, timed, and focused on consolidation rather than attempting to learn new material at this late stage.',
        marks: 4,
      },
      {
        question:
          'Why is it counterproductive to spend the night before an examination trying to revise everything you have not yet covered?',
        lines: 4,
        modelAnswer:
          'Attempting to cover unfamiliar material in the final hours before an examination creates cognitive overload and fatigue without producing the depth of understanding needed to apply knowledge under timed pressure. Sleep, by contrast, consolidates the learning that has already taken place across weeks of revision. The marginal gain from learning new content in the last 12 hours is almost always outweighed by the performance loss from arriving in the examination sleep-deprived and anxious.',
        marks: 3,
      },
      {
        question:
          'Identify one specific skill you have developed across this revision series and explain how you will use it in the examination.',
        lines: 6,
        modelAnswer:
          'Answers will vary. Examiners look for: a specific, named skill (not a general subject area); concrete evidence of development (e.g. "I improved from Band 2 to Band 3 on my language analysis paragraph in the debrief redraft"); and a clear explanation of exactly when and how this skill will be deployed in the examination, ideally with reference to a specific question type or mark allocation.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson should feel different in tone from the preceding revision lessons: more reflective, warmer, and forward-looking. Avoid introducing new content or technique expectations.',
      'The "evidence of progress" starter is most powerful when students have genuinely retained their mock responses and redrafts across the series - check that folders are organised at the start of the previous lesson.',
      'The wall of strengths should be built with genuine student contributions, not teacher-generated examples. Let the class own this.',
      'For students who have found the series difficult and are still anxious, redirect the exam-day action plan conversation toward specific, manageable controllables - what they can do, not what they cannot change.',
      'The homework for this lesson is the most important homework in the series - frame it as the capstone of their revision rather than a routine task. Check that students physically write their night-before plan on the action card before leaving the classroom.',
    ],
    targetedSkills: [
      'Exam strategy consolidation',
      'Evidence-based self-confidence',
      'Pre-examination routine planning',
      'Anxiety management strategies',
      'Goal-setting and self-efficacy',
    ],
  },
]
