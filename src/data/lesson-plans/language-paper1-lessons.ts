// @ts-nocheck
import type { LessonPlan } from "@/types";

// ─── AQA English Language Paper 1: Explorations in Creative Reading & Writing ─
//
// 10 comprehensive lesson plans covering every question on AQA Paper 1,
// with full differentiation (HA/MA/LA), model answers at Grade 5 and
// Grade 8, sentence starters, paragraph frames, and exam technique.

export const languagePaper1Lessons: LessonPlan[] = [
  // ── Lesson 1: Paper 1 Overview ──────────────────────────────────────────────
  {
    id: "lp1-01-overview",
    title:
      "Paper 1 Overview: Structure, Timing & Mark Allocation",
    text: "AQA English Language Paper 1",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand the full structure of AQA English Language Paper 1",
      "Know the mark allocation for every question (Q1: 4, Q2: 8, Q3: 8, Q4: 20, Q5: 40)",
      "Develop a personalised timing plan for the 1 hour 45 minute exam",
      "Identify the assessment objectives tested by each question (AO1–AO6)",
    ],
    successCriteria: [
      "I can list all five questions, their marks, and the AO each one tests",
      "I can explain the difference between Section A (Reading) and Section B (Writing)",
      "I can create a realistic timing plan that allocates minutes proportionally to marks",
      "I can describe what each question asks me to do in one sentence",
    ],
    keywords: [
      "assessment objective",
      "source text",
      "fiction",
      "creative reading",
      "creative writing",
      "evaluation",
      "mark allocation",
      "time management",
    ],
    starterActivity: {
      title: "Paper 1 Misconceptions Quiz",
      duration: "8 minutes",
      instructions:
        "Display ten true/false statements on the board, e.g. 'Paper 1 tests non-fiction reading', 'Question 5 is worth half the marks on the paper', 'You should spend equal time on every question'. Students discuss in pairs and hold up True/False cards. Teacher reveals answers, correcting common misconceptions such as confusing Paper 1 with Paper 2, or assuming equal time per question.",
      differentiation: {
        support:
          "Provide a keyword glossary (fiction, non-fiction, assessment objective, evaluation) so students can access the statements.",
        core: "Students must justify each answer with a reason before the reveal.",
        stretch:
          "After the quiz, students write two additional misconceptions that a weaker student might believe, and explain why each is wrong.",
      },
      resources: [
        "True/False statement PowerPoint slide",
        "Mini-whiteboards or True/False cards",
        "Keyword glossary handout (LA)",
      ],
    },
    mainActivities: [
      {
        title: "Paper 1 Anatomy: Building the Exam Map",
        duration: "20 minutes",
        instructions:
          "Distribute a blank Paper 1 framework sheet with five rows (one per question). Using a projected AQA specimen paper, students work in pairs to fill in: (a) the question number, (b) the marks available, (c) the assessment objective, (d) what the question actually asks, (e) suggested time allocation. Teacher models the first row (Q1) as an example. After 12 minutes, pairs join into groups of four to compare and resolve differences. Whole-class feedback builds a master version on the board. Key teaching point: marks = minutes as a rough rule (e.g. Q1 = 4 marks, approximately 5 minutes). Emphasise that Q5 alone is 40 marks and deserves 45 minutes.",
        differentiation: {
          support:
            "Provide a partially completed framework with Q1 and Q5 already filled in. Include a word bank of AOs (AO1: identify and interpret, AO2: language and structure, AO4: evaluate critically, AO5: communicate clearly, AO6: vocabulary and technical accuracy).",
          core: "Students complete the framework independently and calculate the marks-to-minutes ratio for each question.",
          stretch:
            "Students write a 'top tips' card for each question, advising a younger student on what to focus on and what mistakes to avoid.",
        },
        resources: [
          "Blank Paper 1 framework sheet",
          "AQA specimen paper (projected)",
          "AO word bank (LA)",
        ],
      },
      {
        title: "Timing Simulation: Can You Beat the Clock?",
        duration: "20 minutes",
        instructions:
          "Students experience real exam timing in miniature. Project a short fiction extract (150 words). Set a 2-minute timer for a Q1-style task (list 4 things). Then set 5 minutes for a brief Q2-style response. Then 5 minutes for a Q4-style plan. After each timed burst, students reflect: Did you finish? What would you change? This experiential activity makes abstract timing advice concrete. Follow with class discussion about pacing strategies. Introduce the 'marks = minutes + 1' rule as a baseline. Students then write their personalised timing plan on a card to keep.\n\nModel timing plan on board:\n- Reading the source: 10 minutes\n- Q1: 5 minutes\n- Q2: 10 minutes\n- Q3: 10 minutes\n- Q4: 20 minutes\n- Q5: 45 minutes (5 planning, 35 writing, 5 checking)\n- Buffer/checking: 5 minutes",
        differentiation: {
          support:
            "Provide a pre-printed timing plan template where students only need to adjust the suggested times. Include a visual clock diagram showing each section.",
          core: "Students create their own timing plan from scratch, justifying each allocation.",
          stretch:
            "Students identify where their personal weaknesses lie (e.g. slow reading, rushed Q5) and adjust their plan accordingly, explaining their reasoning in writing.",
        },
        resources: [
          "Short fiction extract (projected)",
          "Countdown timer",
          "Blank timing plan cards",
          "Visual clock diagram (LA)",
        ],
      },
    ],
    plenaryActivity: {
      title: "Paper 1 in 60 Seconds",
      duration: "7 minutes",
      instructions:
        "Students have 60 seconds to write everything they now know about Paper 1 on a blank piece of paper — question numbers, marks, timings, AOs, top tips. After 60 seconds, they swap papers with a partner who ticks correct information and adds anything missing in a different colour. Teacher cold-calls three students to share one key fact each. Collect papers as formative assessment.",
      differentiation: {
        support: "Allow 90 seconds and provide question number prompts (Q1, Q2, Q3, Q4, Q5) on the board.",
        core: "60 seconds, no prompts.",
        stretch:
          "After swapping, students write one piece of advice for a specific question on the back of their partner's paper.",
      },
    },
    homework:
      "Create a revision poster or infographic showing the full structure of Paper 1. Must include: all five questions, marks, AOs, timing, and one top tip per question. Bring to next lesson for peer review.",
    worksheetQuestions: [
      {
        question:
          "How many marks is AQA English Language Paper 1 worth in total? Break this down by question.",
        lines: 4,
        modelAnswer:
          "Paper 1 is worth 80 marks in total. Section A (Reading) is worth 40 marks: Q1 = 4 marks, Q2 = 8 marks, Q3 = 8 marks, Q4 = 20 marks. Section B (Writing) is also worth 40 marks: Q5 = 40 marks (24 for content/organisation + 16 for technical accuracy).",
        marks: 4,
      },
      {
        question:
          "Explain the difference between Section A and Section B on Paper 1.",
        lines: 4,
        modelAnswer:
          "Section A is the Reading section where students answer four questions about a fiction extract. It tests the ability to retrieve information (Q1), analyse language (Q2), analyse structure (Q3), and evaluate critically (Q4). Section B is the Writing section with one creative writing task (Q5), which may be descriptive or narrative, testing communication and technical accuracy.",
        marks: 3,
      },
      {
        question:
          "A student says: 'I'll spend 20 minutes on each question because there are five questions and the exam is 1 hour 45 minutes.' Explain why this timing plan is flawed and suggest a better approach.",
        lines: 6,
        modelAnswer:
          "This plan is flawed because it does not account for the different mark weightings. Q1 is worth only 4 marks and needs about 5 minutes, whereas Q5 is worth 40 marks and needs approximately 45 minutes. Spending 20 minutes on Q1 wastes time, while 20 minutes on Q5 is far too little to produce a high-quality piece of writing. A better approach is to use the 'marks = minutes' rule as a starting point and then adjust based on personal strengths and weaknesses.",
        marks: 4,
      },
      {
        question:
          "Which assessment objective does Q2 test? Explain what this means in your own words.",
        lines: 4,
        modelAnswer:
          "Q2 tests AO2, which assesses the ability to explain, comment on, and analyse how writers use language and structure to achieve effects and influence readers. In simple terms, this means you must identify specific language techniques the writer uses and explain what effect they have on the reader.",
        marks: 3,
      },
      {
        question:
          "Why is Q4 worth the most marks in Section A? What does this tell you about the skill level it demands?",
        lines: 5,
        modelAnswer:
          "Q4 is worth 20 marks because it demands the highest-level reading skill: critical evaluation. Students must form a personal opinion about a statement, then argue their case using evidence from the text. This requires not just finding and analysing quotations but also constructing a sustained, convincing argument — a skill that combines comprehension, analysis, and judgement.",
        marks: 4,
      },
      {
        question:
          "Write out your personalised timing plan for Paper 1. Justify at least two of your timing decisions.",
        lines: 8,
        modelAnswer:
          "Reading the source: 10 mins. Q1: 5 mins (only 4 marks, straightforward retrieval). Q2: 10 mins (8 marks, need time to select and analyse quotations). Q3: 10 mins (8 marks, requires tracking structural shifts). Q4: 20 mins (20 marks, need to build a sustained argument with evidence). Q5: 45 mins including 5 mins planning and 5 mins proofreading (40 marks, the single highest-value question). I allocate extra time to Q5 because it carries half the paper's marks and technical accuracy requires careful checking.",
        marks: 5,
      },
    ],
    teacherNotes: [
      "This lesson is essential groundwork — students who do not understand the paper structure consistently misallocate time in exams.",
      "The timing simulation is the most impactful activity. Even two minutes under pressure changes students' understanding of pacing.",
      "Consider displaying the timing plan permanently in the classroom for reference throughout the scheme.",
      "Collect the 60-second recall papers to identify students who have not grasped the basics before moving on.",
      "If students have already seen a specimen paper, adapt the jigsaw task to focus on comparing two different past papers.",
    ],
    targetedSkills: [
      "Exam technique",
      "Time management",
      "Paper structure knowledge",
      "Assessment objective understanding",
    ],
  },

  // ── Lesson 2: Question 1 — Information Retrieval ────────────────────────────
  {
    id: "lp1-02-q1-retrieval",
    title:
      "Question 1: Information Retrieval (4 marks, 5 minutes)",
    text: "AQA English Language Paper 1",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand what Q1 requires: listing four pieces of explicit information from a specified section of the text",
      "Practise identifying relevant information quickly and accurately",
      "Avoid common Q1 errors: copying too much, going outside the line references, making inferences instead of retrieving",
      "Develop the skill of paraphrasing information concisely",
    ],
    successCriteria: [
      "I can identify four correct pieces of information from the specified lines",
      "I can express each point clearly in a single sentence or short phrase",
      "I can complete Q1 within 5 minutes",
      "I can distinguish between explicit information and inference",
    ],
    keywords: [
      "retrieval",
      "explicit",
      "implicit",
      "inference",
      "paraphrase",
      "line references",
      "list",
      "identify",
    ],
    starterActivity: {
      title: "Spot the Difference: Retrieval vs Inference",
      duration: "8 minutes",
      instructions:
        "Display a short paragraph (5–6 sentences) on the board. Underneath, show eight statements — four that are explicitly stated in the text and four that require inference. Students sort them into two columns: 'Directly Stated' and 'Inferred'. This establishes the crucial distinction for Q1, where only explicit information earns marks. Discuss: Why does the exam test retrieval separately? What does 'explicit' really mean?",
      differentiation: {
        support:
          "Highlight the key sentence in the paragraph that matches each 'Directly Stated' example. Reduce to six statements (three of each).",
        core: "Students sort all eight statements and explain how they decided which column each belongs to.",
        stretch:
          "Students rewrite the four inferred statements as explicit retrieval points, demonstrating how wording affects meaning.",
      },
      resources: [
        "Short paragraph on PowerPoint",
        "Eight statement cards (or projected list)",
        "Sorting grid worksheet",
      ],
    },
    mainActivities: [
      {
        title: "Q1 Masterclass: Technique and Common Errors",
        duration: "15 minutes",
        instructions:
          "Teacher models a Q1 response using an AQA-style fiction extract. Project the extract with line references highlighted. Think aloud while identifying four pieces of information:\n\n1. Read the question carefully — note the line references.\n2. Read ONLY the specified lines.\n3. Underline/highlight pieces of explicit information.\n4. Select four clear, distinct points.\n5. Write each as a short statement — no analysis needed.\n\nThen show three example student responses: one that scores 4/4, one that scores 2/4 (went outside line references), and one that scores 1/4 (gave inferences instead of retrieval). Students discuss in pairs why each scored as it did.\n\nSentence starters for Q1:\n- 'We learn that...'\n- 'The text tells us that...'\n- 'According to the source...'\n- 'The narrator states that...'",
        differentiation: {
          support:
            "Provide the extract with the specified lines pre-highlighted and a numbered list format (1. ___, 2. ___, 3. ___, 4. ___) to complete.",
          core: "Students identify why the weaker responses lost marks and write corrected versions.",
          stretch:
            "Students write their own 'examiner's commentary' explaining the marks awarded for each sample response, using AQA mark scheme language.",
        },
        resources: [
          "Fiction extract with line references",
          "Three model responses (4/4, 2/4, 1/4)",
          "AQA Q1 mark scheme (projected)",
          "Sentence starters sheet",
        ],
      },
      {
        title: "Speed Retrieval: Timed Q1 Practice",
        duration: "25 minutes",
        instructions:
          "Students complete three Q1 tasks, each timed at 5 minutes, using three different fiction extracts of increasing difficulty. After each attempt, students self-assess using the mark scheme and the traffic-light system:\n\n- Green: 4/4 — all four points are explicit, from the correct lines, and clearly expressed.\n- Amber: 2–3/4 — some correct points but may include inference or go outside line references.\n- Red: 0–1/4 — mostly inference, wrong section, or too vague.\n\nAfter each round, teacher addresses the most common error before moving to the next extract.\n\nGrade 5 model answer (Extract 1 — a character arriving at an old house):\n'1. The house had not been lived in for eleven years. 2. The windows were grey with filth. 3. Martha Voss stood at the gate. 4. The house must be sold or demolished by March.'\n\nGrade 8 model answer (demonstrating concise paraphrasing):\n'1. The property has been unoccupied for over a decade. 2. The exterior windows are visibly neglected and dirty. 3. Martha pauses at the entrance to the garden. 4. A legal deadline requires the house to be sold or demolished by March.'\n\nKey difference: Grade 8 answers paraphrase rather than copy, showing comprehension, though both would score 4/4.",
        differentiation: {
          support:
            "First extract has the relevant lines pre-highlighted. Second extract has line numbers clearly marked. Third extract is unscaffolded. Provide the numbered list format for all three.",
          core: "All three extracts presented as they would appear in the exam. Students self-assess after each one.",
          stretch:
            "After completing all three, students write a 'common mistakes' guide for Q1 aimed at a student who consistently scores 2/4.",
        },
        resources: [
          "Three fiction extracts of increasing difficulty",
          "Q1 mark scheme for self-assessment",
          "Traffic-light self-assessment cards",
          "Countdown timer",
        ],
      },
    ],
    plenaryActivity: {
      title: "Q1 Exit Ticket: The 5-Minute Challenge",
      duration: "7 minutes",
      instructions:
        "Students complete one final Q1 task on a fresh extract, strictly timed at 5 minutes. This is collected as a formal assessment piece. Before they begin, ask three students to share their top tip for Q1. Display a checklist on the board:\n- Did I read only the specified lines?\n- Did I list four separate points?\n- Is every point explicit, not inferred?\n- Did I finish within 5 minutes?",
      differentiation: {
        support: "Checklist printed on the exit ticket itself. Line references highlighted on the extract.",
        core: "Standard exam conditions — extract and question only.",
        stretch:
          "After finishing Q1, students have remaining time to write one sentence explaining why Q1 exists on the paper (what reading skill does it test?).",
      },
    },
    homework:
      "Find a fiction extract from a novel at home (any book you are reading or have read). Write your own Q1-style question with line references, then answer it. Bring both the question and answer to the next lesson for peer marking.",
    worksheetQuestions: [
      {
        question:
          "List four things you learn about the setting from lines 1–8 of the extract.",
        lines: 4,
        modelAnswer:
          "1. The house had not been lived in for eleven years. 2. The garden was overgrown with nettles and bindweed. 3. The windows were grey with filth. 4. The curtains were drawn.",
        marks: 4,
      },
      {
        question:
          "List four things you learn about Daniel from lines 1–12 of the flood extract.",
        lines: 4,
        modelAnswer:
          "1. Daniel woke at twenty past five in the morning. 2. He could see a brown current sliding across the back garden. 3. His phone had no signal. 4. He pulled on jeans and a jumper without bothering with socks.",
        marks: 4,
      },
      {
        question:
          "A student writes: 'Daniel is scared because the water is rising fast.' Is this a valid Q1 answer? Explain why or why not.",
        lines: 4,
        modelAnswer:
          "This is not a valid Q1 answer because it is an inference, not a retrieval of explicit information. The text does not directly state that Daniel is 'scared' — the student has interpreted his actions and drawn a conclusion. Q1 requires only information that is directly stated in the text, such as 'He swore quietly and reached for his phone.'",
        marks: 3,
      },
      {
        question:
          "Explain two common mistakes students make on Q1 and how to avoid them.",
        lines: 6,
        modelAnswer:
          "First, students often go outside the specified line references — they read the whole extract and find information from lines that are not included in the question. To avoid this, students should underline or highlight only the specified lines before reading. Second, students often give inferences instead of explicit information — for example, writing 'the character is nervous' when the text does not use that word. To avoid this, students should ask: 'Can I point to the exact words in the text that say this?'",
        marks: 4,
      },
      {
        question:
          "Why is Q1 worth only 4 marks? What does this tell you about how much time and effort to spend on it?",
        lines: 4,
        modelAnswer:
          "Q1 is worth only 4 marks because it tests the most basic reading skill — straightforward retrieval of explicit information. It does not require analysis, evaluation, or personal response. This means students should spend no more than 5 minutes on it. Over-investing time in Q1 steals minutes from higher-value questions like Q4 (20 marks) and Q5 (40 marks).",
        marks: 3,
      },
      {
        question:
          "Complete this Q1 practice: List four things you learn about Martha from lines 1–16 of the extract about the old house.",
        lines: 4,
        modelAnswer:
          "1. Martha Voss stood at the gate of the house. 2. She tried to remember the place as it had been. 3. The front door key was in her coat pocket, wrapped in a tissue. 4. Her grandmother had been buried three years ago in St Anne's churchyard.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Q1 is the most accessible question on the paper but students still lose marks by going outside line references or offering inferences.",
      "The key teaching point is EXPLICIT vs IMPLICIT — hammer this distinction repeatedly.",
      "The timed practice is essential: students must internalise the 5-minute limit so they do not over-invest time.",
      "Grade 5 and Grade 8 answers both score 4/4 on Q1; the difference is in paraphrasing quality, which is a transferable skill for Q2–Q4.",
      "Collect the exit tickets and mark them before the next lesson to identify students who still conflate retrieval with inference.",
    ],
    targetedSkills: [
      "AO1: Information retrieval",
      "Reading comprehension",
      "Paraphrasing",
      "Exam technique",
      "Time management",
    ],
  },

  // ── Lesson 3: Question 2 — Language Analysis ────────────────────────────────
  {
    id: "lp1-03-q2-language",
    title:
      "Question 2: Language Analysis — How Does the Writer Use Language?",
    text: "AQA English Language Paper 1",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand what Q2 requires: analysis of the writer's use of language in a specified section",
      "Identify and name language techniques (metaphor, simile, personification, semantic fields, etc.)",
      "Analyse the EFFECT of language choices on the reader — not just identify them",
      "Construct analytical paragraphs using a clear framework (What? How? Why?)",
    ],
    successCriteria: [
      "I can select relevant quotations from the specified lines",
      "I can identify the language technique used and name it accurately",
      "I can explain the effect of language choices on the reader in detail",
      "I can write at least two developed analytical paragraphs in 10 minutes",
    ],
    keywords: [
      "language analysis",
      "connotations",
      "metaphor",
      "simile",
      "personification",
      "semantic field",
      "pathetic fallacy",
      "effect on the reader",
    ],
    starterActivity: {
      title: "Technique Relay",
      duration: "8 minutes",
      instructions:
        "Project ten short quotations from fiction texts on the board. In pairs, students race to identify the language technique in each (e.g. metaphor, simile, personification, alliteration, sibilance, semantic field, juxtaposition, hyperbole, oxymoron, sensory language). Pairs write their answers on mini-whiteboards and hold up after each quotation. Award points for correct identification. Then ask: 'Identifying the technique is step 1 — what is step 2?' Establish that the exam rewards EFFECT, not just spotting.",
      differentiation: {
        support:
          "Provide a technique reference card with definitions and examples. Reduce to six quotations with a multiple-choice format (choose from three technique options).",
        core: "Students identify all ten techniques from memory and attempt a one-sentence effect for three of them.",
        stretch:
          "For each technique identified, students write one sentence explaining the effect on the reader, using the phrase 'This suggests...' or 'This creates a sense of...'.",
      },
      resources: [
        "Ten quotations PowerPoint slide",
        "Mini-whiteboards and pens",
        "Technique reference card (LA)",
      ],
    },
    mainActivities: [
      {
        title: "Deconstructing a Grade 8 Q2 Response",
        duration: "20 minutes",
        instructions:
          "Display a fiction extract about a forest (atmospheric, technique-rich). Then show two model Q2 responses side by side:\n\nGrade 5 response:\n'The writer uses the simile \"like arthritic fingers\" to describe the branches. This is effective because it makes the branches sound old and twisted. It also creates a creepy atmosphere because arthritic fingers are associated with old age and pain. The word \"knotting\" is interesting because it suggests the branches are tangled together.'\n\nGrade 8 response:\n'The writer employs the simile \"their branches knotting together overhead like arthritic fingers\" to transform the natural canopy into something grotesque and almost human. The verb \"knotting\" implies a deliberate, painful entanglement — as though the trees are actively conspiring to block out light and trap the protagonist beneath them. The connotations of \"arthritic\" — stiffness, decay, age — extend this sense of the forest as a dying, hostile entity, while the anthropomorphism subtly shifts the reader's perception from landscape to living threat. This unsettles the reader because the familiar becomes uncanny: trees should not behave with human intention, yet the language insists they do.'\n\nStudents annotate both responses, identifying:\n1. What technique is named?\n2. Is the quotation embedded or standalone?\n3. How many effects are explored?\n4. Is there analysis of individual words?\n5. Does the writer link to the reader's experience?\n\nClass discussion: What specifically makes the Grade 8 better? Establish the key differences: embedded quotations, word-level analysis (zooming in), multiple layers of effect, and linking to the reader's emotional response.\n\nParagraph frame for Q2:\n'The writer uses [technique] in the phrase \"[quotation]\". The word/phrase \"[specific word]\" suggests [meaning/connotation], which creates a sense of [effect] for the reader. This is effective because [deeper explanation linking to the text's purpose/the reader's response].'",
        differentiation: {
          support:
            "Provide the annotated comparison with colour-coded highlights already identifying key features. Students fill in a gap-fill version of the paragraph frame using the extract.",
          core: "Students annotate both responses independently, then write their own Q2 paragraph using the paragraph frame as a guide.",
          stretch:
            "Students write a paragraph that deliberately exceeds the Grade 8 model by incorporating subject terminology, cross-referencing two techniques, and considering the writer's wider purpose.",
        },
        resources: [
          "Fiction extract (forest passage)",
          "Grade 5 and Grade 8 model responses (printed or projected)",
          "Annotation guide sheet",
          "Paragraph frame handout",
        ],
      },
      {
        title: "Timed Q2 Practice with Peer Assessment",
        duration: "20 minutes",
        instructions:
          "Students write a Q2 response to a new extract (10 minutes timed). The question: 'How does the writer use language to describe the flood?'\n\nBefore writing, students spend 2 minutes highlighting and annotating the extract (identifying techniques and selecting quotations). Then 8 minutes writing.\n\nSentence starters:\n- 'The writer conveys the power of the flood through the [technique] \"[quotation]\"...'\n- 'The word \"[word]\" is particularly effective because its connotations of [meaning] suggest...'\n- 'This creates a sense of [atmosphere/emotion] for the reader because...'\n- 'Furthermore, the use of [technique] in \"[quotation]\" reinforces this impression by...'\n\nAfter writing, students swap papers and peer-assess using a simplified mark scheme:\n- Level 1 (1–2 marks): Identifies a technique but does not explain effect.\n- Level 2 (3–4 marks): Explains the effect of language choices with some detail.\n- Level 3 (5–6 marks): Analyses language choices with clear understanding of effects on the reader.\n- Level 4 (7–8 marks): Analyses language with perceptive, detailed understanding; explores layers of meaning; zooms into individual words.\n\nPeer assessors write: one strength (WWW) and one target (EBI).",
        differentiation: {
          support:
            "Provide the extract pre-annotated with three techniques highlighted and labelled. Students write two paragraphs using the paragraph frame. Simplified peer-assessment sheet with tick boxes.",
          core: "Students annotate the extract independently and write two to three paragraphs. Standard peer-assessment using the four-level mark scheme.",
          stretch:
            "Students write three developed paragraphs without the paragraph frame, aiming for Level 4. During peer assessment, they also write a 'next steps' comment explaining how the response could reach the next level.",
        },
        resources: [
          "Fiction extract (flood passage)",
          "Q2 mark scheme (simplified)",
          "Peer assessment WWW/EBI sheet",
          "Sentence starters handout",
          "Countdown timer",
        ],
      },
    ],
    plenaryActivity: {
      title: "The Golden Sentence",
      duration: "7 minutes",
      instructions:
        "Each student writes their single best analytical sentence from today's lesson on a sticky note. Teacher selects three to read aloud (anonymously) and the class votes on which one best demonstrates word-level analysis and effect on the reader. Discuss what makes each one effective. Display the winning sentence as a model for next lesson.",
      differentiation: {
        support: "Students can submit a sentence from their paragraph frame work rather than composing a new one.",
        core: "Students write their best original sentence from the timed practice.",
        stretch:
          "Students revise and improve their sentence before submitting it, aiming to incorporate one additional analytical layer.",
      },
    },
    homework:
      "Choose a paragraph from any novel and write two Q2-style analytical paragraphs about the writer's use of language. Aim for at least one paragraph that zooms into a single word and explores its connotations. Use the paragraph frame if needed.",
    worksheetQuestions: [
      {
        question:
          "Read the following sentence: 'The branches knotted together overhead like arthritic fingers.' Identify the technique and explain its effect on the reader.",
        lines: 6,
        modelAnswer:
          "The writer uses a simile comparing the branches to 'arthritic fingers'. The word 'arthritic' has connotations of pain, stiffness, old age, and decay, which transforms the natural image of tree branches into something uncomfortable and almost human. The verb 'knotted' suggests a deliberate entanglement, as though the trees are actively trying to block out the sky. This creates an unsettling, claustrophobic atmosphere for the reader because the forest is presented not as a neutral landscape but as a hostile, almost sentient entity.",
        marks: 4,
      },
      {
        question:
          "What is the difference between identifying a technique and analysing its effect? Give an example of each.",
        lines: 5,
        modelAnswer:
          "Identifying a technique means naming what the writer has done — for example, 'The writer uses a metaphor.' Analysing its effect means explaining what impact this technique has on the reader and why — for example, 'The metaphor \"the water was a muscular current\" personifies the flood, giving it physical strength and intention. This creates a sense of the water as an unstoppable force, which builds tension and makes the reader feel the characters' helplessness.' The exam rewards analysis far more than mere identification.",
        marks: 4,
      },
      {
        question:
          "Rewrite this Grade 5 response to make it Grade 8: 'The writer says the water was \"sliding across the garden\". This is a good description because it shows the water is moving.'",
        lines: 8,
        modelAnswer:
          "The writer describes the floodwater as 'a brown, muscular current sliding across the back garden'. The verb 'sliding' is particularly effective because it conveys smooth, silent, unstoppable movement — unlike 'crashing' or 'rushing', 'sliding' suggests the water advances with an eerie calm that is more threatening precisely because it is quiet. The adjective 'muscular' personifies the water, attributing it with physical power and agency, as though the flood is a living predator moving deliberately towards the house. This creates a sense of dread for the reader because the danger is presented as both powerful and unnervingly controlled.",
        marks: 6,
      },
      {
        question:
          "Why does Q2 specify particular lines in the extract? What happens if you write about language from outside those lines?",
        lines: 4,
        modelAnswer:
          "Q2 specifies particular lines to test whether students can focus their analysis on a specific section of text, selecting relevant evidence from within a defined boundary. If a student writes about language from outside the specified lines, those points will not be credited by the examiner, even if the analysis is excellent. This is because the mark scheme assesses responses based on the designated section only.",
        marks: 3,
      },
      {
        question:
          "Write a Q2-style paragraph analysing the effect of language in this quotation: 'She could feel the forest watching her.'",
        lines: 8,
        modelAnswer:
          "The writer uses personification in the statement 'She could feel the forest watching her', attributing the non-human forest with the human capacity of sight and attention. The verb 'watching' implies a conscious, deliberate gaze, transforming the passive landscape into an active observer — perhaps even a predator surveying its prey. The word 'feel' is also significant: it suggests the protagonist's response is instinctive and physical rather than rational, which heightens the sense of primal fear. The effect on the reader is deeply unsettling because it destabilises the boundary between the animate and inanimate, making the familiar natural world feel alien and threatening.",
        marks: 6,
      },
      {
        question:
          "List five language techniques you could identify in a Q2 response, giving a brief definition of each.",
        lines: 10,
        modelAnswer:
          "1. Metaphor: a comparison that states one thing IS another (e.g. 'the road was a ribbon of silver'). 2. Simile: a comparison using 'like' or 'as' (e.g. 'branches like arthritic fingers'). 3. Personification: giving human qualities to non-human things (e.g. 'the wind howled'). 4. Semantic field: a group of words related to the same topic used throughout a passage (e.g. repeated water imagery: 'current', 'flood', 'submerged'). 5. Sibilance: repetition of 's' sounds to create a hissing or sinister effect (e.g. 'the silence slid and settled').",
        marks: 5,
      },
    ],
    teacherNotes: [
      "The biggest barrier at Q2 is students who 'feature spot' — they name techniques without explaining effect. Constantly reinforce: WHAT does the writer do? HOW do they do it? WHY is it effective?",
      "The Grade 5 vs Grade 8 comparison is the most powerful teaching tool. Students immediately see the difference when models are placed side by side.",
      "Encourage students to zoom into single words: the best Q2 responses explore connotations of individual word choices, not just whole phrases.",
      "The paragraph frame is scaffolding — aim to remove it by the third or fourth practice so students develop their own analytical voice.",
      "Peer assessment works best when students are given a specific focus: this lesson focuses on 'Does the response explain effect on the reader?'",
    ],
    targetedSkills: [
      "AO2: Language analysis",
      "Technique identification",
      "Effect on the reader",
      "Analytical paragraph writing",
      "Word-level analysis",
    ],
  },

  // ── Lesson 4: Question 3 — Structure Analysis ──────────────────────────────
  {
    id: "lp1-04-q3-structure",
    title:
      "Question 3: Structure Analysis — How Has the Writer Structured the Text?",
    text: "AQA English Language Paper 1",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand what Q3 requires: analysis of structural features across the whole text",
      "Identify structural techniques: shifts in focus, narrative perspective, openings, endings, foreshadowing, flashback, cyclical structure, pace changes",
      "Analyse WHY writers make structural choices and their effect on the reader",
      "Construct analytical paragraphs about structure using appropriate terminology",
    ],
    successCriteria: [
      "I can identify at least three structural features in a fiction extract",
      "I can explain how the writer shifts focus from beginning to middle to end",
      "I can analyse the effect of structural choices on the reader",
      "I can write two developed paragraphs about structure in 10 minutes",
    ],
    keywords: [
      "structure",
      "focus shift",
      "narrative perspective",
      "foreshadowing",
      "flashback",
      "cyclical structure",
      "pace",
      "tension",
      "exposition",
      "climax",
      "resolution",
    ],
    starterActivity: {
      title: "Film Trailer Breakdown",
      duration: "8 minutes",
      instructions:
        "Play a 90-second film trailer (or describe one if no AV available). Ask students: 'How is this trailer structured? What do we see first? What changes? How does it end?' Students note down the structural choices: it typically opens with calm/establishing shots, builds pace with quick cuts, introduces conflict, and ends with a cliffhanger or title reveal. Link to fiction: 'Writers structure their texts in the same deliberate way — every choice about what comes first, what changes, and what comes last is purposeful.' Display the key question: 'How has the writer structured the text to interest you as a reader?'",
      differentiation: {
        support:
          "Provide a simple three-box storyboard template (Beginning / Middle / End) for students to complete during the trailer.",
        core: "Students note structural choices independently and identify at least two deliberate decisions the trailer makers have made.",
        stretch:
          "Students explain WHY each structural choice creates a specific effect on the audience (e.g. 'The quick cuts increase pace, building excitement and urgency').",
      },
      resources: [
        "Film trailer (90 seconds) or written description",
        "Storyboard template (LA)",
      ],
    },
    mainActivities: [
      {
        title: "Mapping the Structure: Whole-Text Tracking",
        duration: "20 minutes",
        instructions:
          "Distribute a fiction extract (full source text). Students read the whole text and complete a structural tracking sheet:\n\n1. OPENING (first 2–3 sentences): What does the writer focus on first? Why start here?\n2. DEVELOPMENT (middle section): How does the focus shift? Does the writer move from setting to character? From present to past? From wide shot to close-up?\n3. ENDING (final 2–3 sentences): How does the text end? Is there resolution, a cliffhanger, a return to the opening, or a shift in mood?\n4. KEY STRUCTURAL SHIFTS: Identify 2–3 moments where the focus changes significantly.\n5. PACE: Where does the text speed up or slow down? How is this achieved?\n\nTeacher models the opening analysis: 'The text begins with the broad, impersonal statement \"The house had not been lived in for eleven years\" — the writer opens with setting rather than character, creating a sense of desolation and abandonment before we even meet the protagonist. This structural choice builds atmosphere before introducing the human element.'\n\nStructural terminology reference list:\n- Shift in focus (setting to character, external to internal, present to past)\n- Narrowing/widening of perspective (wide shot to close-up)\n- Change in pace (short sentences = faster; long sentences = slower)\n- Foreshadowing (hints at what is to come)\n- Flashback (return to the past)\n- Cyclical structure (ending echoes the beginning)\n- Contrast/juxtaposition (placing two different moments side by side)\n- Climax and anti-climax",
        differentiation: {
          support:
            "Provide the tracking sheet with the opening already completed as a model. Include line numbers for each section (e.g. 'Opening = lines 1–3; Development = lines 4–12; Ending = lines 13–16'). Supply a word bank of structural terms.",
          core: "Students complete the tracking sheet independently, identifying at least two structural shifts with evidence.",
          stretch:
            "Students add a sixth row to the tracking sheet: 'Writer's overall structural strategy' — a one-sentence summary of the writer's purpose in structuring the text this way.",
        },
        resources: [
          "Full fiction extract (printed)",
          "Structural tracking sheet",
          "Structural terminology reference list",
          "Word bank (LA)",
        ],
      },
      {
        title: "Writing Q3 Responses: Grade 5 vs Grade 8",
        duration: "20 minutes",
        instructions:
          "Display two model Q3 responses side by side:\n\nGrade 5 response:\n'At the beginning of the text, the writer describes the house and garden. This is effective because it sets the scene. In the middle, the focus shifts to Martha and her memories. At the end, she goes inside the house. The structure moves from outside to inside, which shows her journey.'\n\nGrade 8 response:\n'The writer opens with the declarative statement \"The house had not been lived in for eleven years\", establishing temporal distance before the reader encounters any character. This structural choice foregrounds absence and decay, so that when Martha is introduced in the third paragraph, the reader already understands the emotional weight of what she is returning to. The focus then shifts from the external — the ruined garden, the filthy windows — to the internal, as the narrative moves into Martha's memories of \"summer afternoons\" and \"grandmother shelling peas\". This juxtaposition between past warmth and present desolation is structurally central: the writer places memory and reality side by side to amplify the sense of loss. The final sentence — \"She stepped inside and closed the door behind her\" — narrows the focus to a single, decisive action. The short, declarative sentence slows the pace, and the act of closing the door symbolically shuts out the outside world, leaving Martha alone with the remnants of her past.'\n\nStudents identify the key differences:\n- Grade 5 describes what happens; Grade 8 explains WHY the writer has structured it this way.\n- Grade 5 uses vague language ('effective', 'shows'); Grade 8 uses precise structural terminology.\n- Grade 8 tracks movement across the text (beginning, middle, end) with specific evidence.\n\nStudents then write their own Q3 response to a different extract (timed: 10 minutes).\n\nParagraph frame for Q3:\n'At the beginning of the text, the writer focuses on [what?] by [how?]. This structural choice is effective because [why — effect on the reader]. The focus then shifts to [what changes?], which [effect]. By the end of the text, the writer [what happens?], creating a sense of [effect] for the reader because [explanation].'",
        differentiation: {
          support:
            "Students use the paragraph frame to write a three-part response (beginning, shift, ending). Provide sentence starters: 'The writer opens by focusing on...', 'The focus then shifts to...', 'By the end, the writer...'",
          core: "Students write two to three paragraphs tracking the structure across the whole text, using the paragraph frame as a guide.",
          stretch:
            "Students write three paragraphs without the frame, aiming to analyse structural shifts at specific moments in the text and linking each to the writer's wider purpose (e.g. to build tension, to create sympathy, to unsettle the reader).",
        },
        resources: [
          "Grade 5 and Grade 8 model responses (printed or projected)",
          "New fiction extract for practice",
          "Q3 paragraph frame handout",
          "Q3 mark scheme (simplified)",
        ],
      },
    ],
    plenaryActivity: {
      title: "Structure in Three Words",
      duration: "7 minutes",
      instructions:
        "Each student summarises the structural journey of today's practice extract in exactly three words (e.g. 'Decay — Memory — Closure' or 'Distance — Intimacy — Isolation'). Share around the room. Discuss which three-word summaries most accurately capture the writer's structural strategy. This forces students to think about structure at the macro level — the overall arc — rather than getting lost in individual sentences.",
      differentiation: {
        support: "Provide a bank of ten words to choose from (e.g. tension, calm, memory, conflict, revelation, isolation, warmth, threat, hope, decay).",
        core: "Students choose their own three words and justify one of them to a partner.",
        stretch:
          "Students write a fourth word that captures the reader's emotional journey through the text, then explain how the structure creates that emotional arc.",
      },
    },
    homework:
      "Read a short story or extract from a novel (at least one page). Complete a structural tracking sheet for it, identifying the opening focus, at least two structural shifts, and the ending strategy. Write one analytical paragraph about the most interesting structural choice.",
    worksheetQuestions: [
      {
        question:
          "What is the difference between analysing language (Q2) and analysing structure (Q3)?",
        lines: 5,
        modelAnswer:
          "Language analysis (Q2) focuses on specific word and phrase choices — techniques like metaphor, simile, and personification — and their effects on the reader at a sentence level. Structure analysis (Q3) focuses on how the whole text is organised — where the writer begins and ends, how the focus shifts across the text, changes in pace, narrative perspective, and the ordering of events. Q2 zooms into the micro level (words); Q3 zooms out to the macro level (the whole text's shape and movement).",
        marks: 4,
      },
      {
        question:
          "Explain what is meant by a 'shift in focus' and give an example from a fiction text.",
        lines: 5,
        modelAnswer:
          "A 'shift in focus' is when the writer moves the reader's attention from one subject, perspective, or time period to another. For example, a text might begin by describing a wide landscape (setting), then shift focus to a single character's thoughts (internal perspective). In the extract about the old house, the writer shifts from describing the decayed exterior to Martha's warm memories of her grandmother, creating a contrast between present desolation and past happiness.",
        marks: 4,
      },
      {
        question:
          "Why might a writer choose to open a text with a description of setting rather than introducing a character immediately?",
        lines: 5,
        modelAnswer:
          "A writer might open with setting to establish atmosphere and mood before the reader meets any character. This structural choice builds anticipation — the reader forms expectations about what kind of story this will be based on the environment described. For example, opening with a decaying, abandoned house creates a sense of loss and unease, so when the character is finally introduced, the reader already understands the emotional weight of the scene. It can also create a sense of the character being small or vulnerable within a larger, indifferent world.",
        marks: 4,
      },
      {
        question:
          "Analyse the structural effect of this ending: 'She stepped inside and closed the door behind her.'",
        lines: 6,
        modelAnswer:
          "This ending narrows the focus from the broad external description of the garden and house to a single, contained action. The short, declarative sentence slows the pace after the longer, more descriptive paragraphs that precede it, creating a moment of stillness. Structurally, the act of stepping inside and closing the door creates a sense of finality and enclosure — Martha is now shut in with the memories the text has been building towards. The writer withholds what happens next, ending on a moment of threshold, which leaves the reader in suspense and invites them to imagine what Martha will find or feel inside.",
        marks: 5,
      },
      {
        question:
          "List four structural features a writer might use in a fiction text. Briefly define each one.",
        lines: 8,
        modelAnswer:
          "1. Foreshadowing: hinting at events that will happen later in the text, creating suspense and anticipation. 2. Flashback: moving from the present to the past, often to reveal backstory or explain a character's emotions. 3. Cyclical structure: ending the text in a way that echoes or returns to the opening, creating a sense of completion or entrapment. 4. Shift in pace: using shorter sentences and paragraphs to increase speed and tension, or longer, more detailed passages to slow the reader down and create atmosphere.",
        marks: 4,
      },
      {
        question:
          "Write a Q3-style paragraph analysing how the writer structures the opening of a text that begins: 'It began, as these things often do, with something small. A letter.'",
        lines: 8,
        modelAnswer:
          "The writer opens with the generalising phrase 'as these things often do', which creates a conversational, almost knowing narrative voice that positions the reader as someone being told a story. The structural choice to begin with 'something small' before revealing it is 'a letter' uses delayed revelation — the reader's curiosity is piqued before the object is identified. The short, standalone sentence 'A letter.' functions as a dramatic pause, forcing the reader to stop and register its significance. This opening structure moves from the abstract ('these things') to the concrete ('a letter'), narrowing the focus and signalling to the reader that this ordinary object will become the catalyst for extraordinary events.",
        marks: 6,
      },
    ],
    teacherNotes: [
      "Q3 is the question students find most difficult because 'structure' feels abstract. The film trailer analogy helps make it concrete.",
      "The most common error is students writing about language in Q3. Constantly redirect: 'You're telling me WHAT the writer says — tell me WHERE in the text they say it and WHY they put it there.'",
      "Encourage students to track movement: beginning to end, outside to inside, wide to narrow, past to present, calm to tense.",
      "The three-word summary plenary is surprisingly effective at forcing macro-level structural thinking.",
      "Weaker students often write about individual sentences — redirect them to think about sections of the text and how they relate to each other.",
    ],
    targetedSkills: [
      "AO2: Structure analysis",
      "Whole-text tracking",
      "Structural terminology",
      "Analytical writing",
      "Macro-level reading",
    ],
  },

  // ── Lesson 5: Question 4 Part 1 — Evaluation ──────────────────────────────
  {
    id: "lp1-05-q4-evaluation-pt1",
    title:
      "Question 4: Evaluation — To What Extent Do You Agree? (Part 1)",
    text: "AQA English Language Paper 1",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand what Q4 requires: critically evaluating a statement about the text",
      "Develop a clear personal response to an evaluative statement",
      "Select evidence that supports AND challenges the given statement",
      "Analyse methods (language and/or structure) within an evaluative framework",
    ],
    successCriteria: [
      "I can explain whether I agree or disagree with a statement about a text, and why",
      "I can select quotations that both support and challenge the statement",
      "I can analyse the writer's methods as part of my evaluation",
      "I can begin to construct a sustained evaluative argument",
    ],
    keywords: [
      "evaluation",
      "critical response",
      "agree",
      "disagree",
      "to what extent",
      "methods",
      "evidence",
      "sustained argument",
      "personal response",
    ],
    starterActivity: {
      title: "The Debate Starter",
      duration: "8 minutes",
      instructions:
        "Project a bold statement: 'School uniforms should be abolished.' Students stand on a continuum line across the room: one end = strongly agree, other end = strongly disagree. Teacher interviews 3–4 students: 'Why are you standing there? What evidence supports your position?' Then ask: 'Could you see the OTHER side's argument?' Link to Q4: 'This is exactly what the exam asks you to do — take a position on a statement about a text and argue your case with evidence, while showing you can see both sides.'",
      differentiation: {
        support:
          "Provide sentence starters for the verbal responses: 'I agree/disagree because...', 'On the other hand...'",
        core: "Students must give a reason AND a counter-argument when interviewed.",
        stretch:
          "Students identify the strongest argument from the opposing side and explain why it is convincing but ultimately not enough to change their mind.",
      },
      resources: [
        "Statement slide",
        "Continuum line labels (Strongly Agree / Strongly Disagree)",
      ],
    },
    mainActivities: [
      {
        title: "Understanding the Q4 Statement: What Are They Really Asking?",
        duration: "15 minutes",
        instructions:
          "Display three different Q4-style statements about the same extract:\n\n1. 'A student said: \"The writer makes the reader feel sorry for Martha.\" To what extent do you agree?'\n2. 'A student said: \"This extract is mainly about loss and the passing of time.\" To what extent do you agree?'\n3. 'A student said: \"The writer creates a tense and uncomfortable atmosphere in this extract.\" To what extent do you agree?'\n\nFor each, students discuss in pairs:\n- What is the statement actually claiming?\n- What word is the KEY word in the statement (e.g. 'sorry', 'loss', 'tense')?\n- Do I agree, disagree, or partially agree?\n- What evidence would I use?\n\nTeacher models unpicking statement 1:\n- Key word: 'feel sorry' — this is about SYMPATHY.\n- Do I agree? Partially — we feel sympathy for Martha's loss (grandmother, roses, the past) but she is also presented as strong and determined (she has the key, she goes inside).\n- Evidence FOR: 'her grandmother was three years buried', 'None of that remained'\n- Evidence AGAINST/NUANCE: 'She fitted the key into the lock' (she is taking action), the practical tone of 'The solicitor had been clear'\n\nKey teaching point: 'To what extent' means you can PARTIALLY agree. The best answers show nuance — 'The writer does create sympathy, but also presents Martha as resilient, which complicates a simple sympathetic reading.'",
        differentiation: {
          support:
            "Focus on statement 1 only. Provide a for/against table with two quotations already placed in the correct column. Students add one more to each side.",
          core: "Students unpick all three statements and select evidence for each, choosing one to develop into a written paragraph.",
          stretch:
            "Students rank the three statements from most to least accurate and justify their ranking, considering which statement best captures the text's overall effect.",
        },
        resources: [
          "Three Q4 statements (projected)",
          "Fiction extract (printed)",
          "For/Against evidence table (LA)",
        ],
      },
      {
        title: "Building a Q4 Response: The Evaluation Paragraph",
        duration: "25 minutes",
        instructions:
          "Teach the Q4 paragraph structure:\n\n1. STATE your position on the statement.\n2. SELECT a quotation that supports your position.\n3. ANALYSE the writer's methods in that quotation (language/structure).\n4. EVALUATE the effect on the reader — link back to the statement.\n5. CONSIDER a counter-argument or nuance (optional but Grade 8+).\n\nGrade 5 model paragraph:\n'I agree that the writer makes the reader feel sorry for Martha. The writer says \"her grandmother was three years buried in St Anne's churchyard, under a stone that was already beginning to lean\". The word \"lean\" suggests the gravestone is being neglected, which makes the reader feel sad because even the memory of Martha's grandmother is fading. This makes us feel sorry for Martha because she has lost someone important to her.'\n\nGrade 8 model paragraph:\n'To a significant extent, the writer does create sympathy for Martha, though this is complicated by her quiet resilience. The description of the grandmother's grave — \"under a stone that was already beginning to lean\" — is structurally placed after the catalogue of decay (the garden, the windows, the roses), so the reader experiences a cumulative weight of loss that culminates in this deeply personal detail. The verb \"lean\" is particularly affecting: it suggests not just physical deterioration but a kind of surrendering, as though even the stone has given up the effort of standing upright. The reader's sympathy is deepened because this decay mirrors Martha's emotional landscape — everything she valued is slipping away. However, the writer simultaneously presents Martha as purposeful: she \"fitted the key into the lock\", and the pragmatic tone of \"The solicitor had been clear\" suggests she is a woman who acts rather than dwells. This structural juxtaposition between emotional loss and practical determination complicates a straightforward sympathetic reading, inviting the reader to admire Martha as much as pity her.'\n\nStudents write two paragraphs (timed: 15 minutes).\n\nParagraph frame for Q4:\n'I [agree/disagree/partially agree] that [restate the statement]. The writer uses [method] in the phrase \"[quotation]\" to [what effect]. The word/phrase \"[specific detail]\" suggests [analysis], which makes the reader feel [link to statement] because [explanation]. However, it could also be argued that [counter-point/nuance].'",
        differentiation: {
          support:
            "Students write one paragraph using the paragraph frame, with a pre-selected quotation. Focus on stating a position and linking evidence to the statement.",
          core: "Students write two paragraphs using the frame as a guide. First paragraph agrees; second paragraph adds nuance or a different angle.",
          stretch:
            "Students write three paragraphs without the frame: one agreeing, one offering a counter-argument, and a concluding paragraph that synthesises both sides. Aim for the Grade 8 model's level of word-level analysis and structural awareness.",
        },
        resources: [
          "Grade 5 and Grade 8 model paragraphs (projected)",
          "Q4 paragraph frame handout",
          "Fiction extract (printed)",
          "Q4 mark scheme (simplified)",
        ],
      },
    ],
    plenaryActivity: {
      title: "Traffic Light Confidence Check",
      duration: "7 minutes",
      instructions:
        "Students hold up a traffic-light card indicating their confidence with Q4:\n- Green: I can write a Q4 response with a clear position, evidence, and analysis.\n- Amber: I can take a position and select evidence, but I struggle to analyse methods within my evaluation.\n- Red: I find it hard to form a personal response or know what the statement is asking.\n\nTeacher addresses the most common 'amber' concern. Then give students 2 minutes to write one sentence completing: 'The most important thing I learned about Q4 today is...'",
      differentiation: {
        support: "Provide the sentence starter and allow verbal response to a partner before writing.",
        core: "Written response independently.",
        stretch:
          "Students write two sentences: one about what they learned and one about what they still find challenging about Q4.",
      },
    },
    homework:
      "Read the extract about Arthur on the harbour wall. Respond to this statement: 'A student said: \"The writer creates a powerful sense of loneliness in this extract.\" To what extent do you agree?' Write at least two paragraphs using evidence and analysis of the writer's methods.",
    worksheetQuestions: [
      {
        question:
          "What does 'to what extent do you agree?' mean? Why is this phrase important for Q4?",
        lines: 4,
        modelAnswer:
          "'To what extent' means 'how much' — it asks the student to consider whether they fully agree, partially agree, or disagree with the statement. This is important because it invites a nuanced response rather than a simple yes/no. The best Q4 answers acknowledge complexity: they might agree with part of the statement while arguing that another aspect is more nuanced or complicated.",
        marks: 3,
      },
      {
        question:
          "Why is it important to analyse the writer's METHODS in Q4, not just say whether you agree or disagree?",
        lines: 5,
        modelAnswer:
          "Q4 tests AO4 (evaluate critically) but also rewards AO1 (evidence) and AO2 (methods). Simply agreeing or disagreeing earns very few marks. To reach higher levels, students must show HOW the writer creates the effect described in the statement — for example, by analysing specific language choices, structural decisions, or narrative techniques. This demonstrates critical evaluation rather than just personal opinion: you are assessing the writer's craft, not just your feelings.",
        marks: 4,
      },
      {
        question:
          "Read this Q4 response and suggest how to improve it: 'I agree that the writer makes the reader feel sorry for Martha. She lost her grandmother and the house is in bad condition. The garden is overgrown and the windows are dirty. This shows she is sad.'",
        lines: 8,
        modelAnswer:
          "This response needs three improvements. First, it lacks specific quotations — instead of paraphrasing ('the house is in bad condition'), the student should embed a direct quotation (e.g. 'windows, once white-framed and proud, were now grey with filth'). Second, it identifies what happens but does not analyse the writer's methods — the student should name a technique and explain its effect (e.g. the personification in 'proud' suggests the house once had dignity, making its decline more poignant). Third, it ends with a simple statement ('This shows she is sad') rather than linking back to the evaluative statement and considering whether sympathy is the dominant response or whether other emotions are also created.",
        marks: 5,
      },
      {
        question:
          "Write the opening paragraph of a Q4 response to this statement: 'A student said: \"The writer creates a tense and uncomfortable atmosphere in this extract.\" To what extent do you agree?' Use the forest extract.",
        lines: 10,
        modelAnswer:
          "I largely agree that the writer creates a tense and uncomfortable atmosphere, though I would argue that the discomfort is specifically rooted in the uncanny — the blurring of boundaries between the natural and the human. The writer employs personification throughout, most strikingly in 'She could feel the forest watching her', which attributes the non-human landscape with conscious observation. The verb 'watching' is deeply unsettling because it implies not just awareness but intent — the forest is not merely present but actively attentive. The reader's discomfort arises from the violation of what we expect from nature: trees should be passive, not vigilant. The writer deepens this by having the character acknowledge the irrationality of her fear — 'It was an absurd thought — she knew that' — yet the tension is maintained because the physical symptoms ('her hands were trembling') override her rational mind.",
        marks: 8,
      },
      {
        question:
          "What is the difference between a Q2 response and a Q4 response? They both analyse the writer's methods — so what makes Q4 different?",
        lines: 6,
        modelAnswer:
          "Both Q2 and Q4 involve analysing the writer's methods, but they have different purposes. Q2 asks 'How does the writer use language?' — the focus is on analysing techniques and their effects, with no evaluative opinion required. Q4 asks 'To what extent do you agree with this statement?' — the focus is on forming a CRITICAL JUDGEMENT about the text and then using analysis of methods as evidence to support that judgement. In Q4, the analysis serves an argument: you are not just explaining what the writer does, but evaluating how successfully they achieve a particular effect. Q4 also covers the whole source text, while Q2 focuses on specified lines.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Q4 is worth 20 marks — the highest-value reading question. Students must understand this and allocate 20 minutes to it.",
      "The biggest error is students treating Q4 like Q2 — analysing language without ever linking back to the evaluative statement.",
      "Teach students to circle the KEY WORD in the statement (e.g. 'sympathy', 'tension', 'loneliness') and use it in every paragraph.",
      "The debate starter is crucial for helping students understand that evaluation means forming and defending a position.",
      "Part 2 (next lesson) will focus on building a sustained argument across multiple paragraphs — this lesson focuses on the individual paragraph.",
    ],
    targetedSkills: [
      "AO4: Critical evaluation",
      "AO1: Evidence selection",
      "AO2: Method analysis within evaluation",
      "Personal response",
      "Argument construction",
    ],
  },

  // ── Lesson 6: Question 4 Part 2 — Building a Convincing Argument ──────────
  {
    id: "lp1-06-q4-argument-pt2",
    title:
      "Question 4: Building a Convincing Argument (Part 2)",
    text: "AQA English Language Paper 1",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Build a sustained, multi-paragraph evaluative argument across the whole source text",
      "Use discourse markers and connectives to create a coherent line of argument",
      "Develop the skill of counter-argument and nuance to reach Grade 7+",
      "Practise writing a complete Q4 response under timed conditions (20 minutes)",
    ],
    successCriteria: [
      "I can write three to four paragraphs that build a sustained argument",
      "I can use evidence from different parts of the text to support my evaluation",
      "I can include a counter-argument or nuanced point that shows critical thinking",
      "I can complete a full Q4 response in 20 minutes",
    ],
    keywords: [
      "sustained argument",
      "counter-argument",
      "discourse markers",
      "nuance",
      "cohesion",
      "evaluative connectives",
      "critical lens",
      "perceptive",
    ],
    starterActivity: {
      title: "Connective Challenge",
      duration: "8 minutes",
      instructions:
        "Display a list of evaluative connectives and discourse markers on the board. Students have 3 minutes to categorise them into four groups:\n\n- AGREEING: 'Indeed', 'It is clear that', 'This strongly suggests', 'The writer convincingly'\n- PARTIALLY AGREEING: 'To some extent', 'While this is partly true', 'Although there is evidence'\n- DISAGREEING: 'However', 'Conversely', 'On the other hand', 'This interpretation overlooks'\n- ADDING NUANCE: 'More precisely', 'A more nuanced reading suggests', 'It could be argued that', 'This complicates the initial reading'\n\nReview as a class. Emphasise that the best Q4 responses move through these stages — they do not simply repeat 'I agree' in every paragraph.",
      differentiation: {
        support:
          "Provide the four category headings with two connectives already sorted into each. Students sort the remaining eight.",
        core: "Students sort all connectives independently and write one example sentence using a connective from each category.",
        stretch:
          "Students add two additional connectives to each category from their own vocabulary, then write a four-sentence mini-argument using one from each group.",
      },
      resources: [
        "Connective cards or projected list",
        "Sorting grid",
      ],
    },
    mainActivities: [
      {
        title: "Architecture of a Complete Q4 Response",
        duration: "20 minutes",
        instructions:
          "Teach the structure of a full Q4 response:\n\nParagraph 1 — Opening Position:\n'To a significant extent, I agree that [statement], as the writer uses [method] to [effect].'\nSelect your strongest piece of evidence. Analyse the method. Link to the statement.\n\nParagraph 2 — Developing the Argument:\n'Furthermore, the writer reinforces this through [different method/different part of text]...'\nSelect evidence from a DIFFERENT section of the text. Show the effect is sustained.\n\nParagraph 3 — Counter-Argument or Nuance:\n'However, a closer reading reveals that [alternative interpretation]...'\nAcknowledge complexity. Show that the text does not ONLY create the effect in the statement.\n\nParagraph 4 (optional) — Concluding Evaluation:\n'Ultimately, while [concession], the dominant effect is [final judgement]...'\nSynthesise your argument. Return to the statement with a refined position.\n\nDisplay a complete Grade 8 response that follows this structure. Students annotate it, labelling each paragraph's function and identifying:\n- Where evidence is selected from (beginning, middle, end of text)\n- Which connectives signal the argument's direction\n- Where the writer's methods are analysed (not just evidence but technique + effect)\n- Where the response links back to the evaluative statement",
        differentiation: {
          support:
            "Provide the Grade 8 response pre-annotated with paragraph functions labelled. Students focus on identifying one quotation and one method per paragraph.",
          core: "Students annotate the full response independently and complete a planning grid for their own Q4 response using the four-paragraph structure.",
          stretch:
            "Students evaluate the Grade 8 response itself: 'What would make this even better? Is there a point the writer could develop further? Could the counter-argument be stronger?'",
        },
        resources: [
          "Complete Grade 8 Q4 response (printed)",
          "Four-paragraph structure guide",
          "Planning grid worksheet",
        ],
      },
      {
        title: "Timed Q4 Practice: 20 Minutes",
        duration: "25 minutes",
        instructions:
          "Students write a complete Q4 response under timed conditions.\n\nStatement: 'A student said: \"The writer creates a powerful sense of loneliness in this extract.\" To what extent do you agree?'\nExtract: the harbour wall passage (Arthur Creel).\n\nBefore starting (3 minutes planning):\n1. Circle the key word in the statement (loneliness).\n2. Quickly scan the text and underline 4–5 quotations.\n3. Jot down your position: agree / partially agree / disagree.\n4. Number your quotations in the order you will use them.\n\nThen write for 17 minutes.\n\nAfter writing, students self-assess against the mark scheme descriptors:\n- Level 1 (1–5): Simple comment, limited evidence.\n- Level 2 (6–10): Some evaluation, some evidence, some analysis of methods.\n- Level 3 (11–15): Clear evaluation, relevant evidence, clear analysis of methods.\n- Level 4 (16–20): Perceptive evaluation, judicious evidence, sophisticated analysis of methods, sustained and convincing.\n\nGrade 5 benchmark: Two paragraphs with clear evidence and some analysis (Level 2–3, approximately 10–12 marks).\nGrade 8 benchmark: Three to four paragraphs with perceptive evaluation, word-level analysis, counter-argument, and sustained argument across the text (Level 4, approximately 17–20 marks).",
        differentiation: {
          support:
            "Provide a planning sheet with the statement pre-annotated, three quotations pre-selected, and the paragraph frame from Lesson 5. Aim for two paragraphs.",
          core: "Students plan and write independently. Aim for three paragraphs in 20 minutes.",
          stretch:
            "Students aim for four paragraphs including a counter-argument, without using the paragraph frame. After self-assessment, they identify the single sentence in their response that is their strongest moment of evaluation and explain why.",
        },
        resources: [
          "Fiction extract: harbour wall passage (printed)",
          "Q4 mark scheme descriptors",
          "Planning sheet (LA)",
          "Countdown timer",
        ],
      },
    ],
    plenaryActivity: {
      title: "Best Opening Sentence Showcase",
      duration: "7 minutes",
      instructions:
        "Three students volunteer to read their opening sentence. Class discusses: Does the sentence clearly state a position? Does it reference the statement? Does it signal the direction of the argument? Teacher models upgrading the weakest opening sentence to demonstrate how a strong first sentence sets the tone for the whole response.",
      differentiation: {
        support: "Volunteers are pre-selected (students who have written a clear opening).",
        core: "Any student can volunteer. Class gives feedback using WWW/EBI.",
        stretch:
          "After hearing all three, students rewrite their own opening sentence to make it stronger, then share the improved version with a partner.",
      },
    },
    homework:
      "Complete or redraft your timed Q4 response from today's lesson, incorporating the feedback from self-assessment. Aim for at least three paragraphs with a clear position, evidence from different parts of the text, analysis of methods, and a counter-argument or nuanced point.",
    worksheetQuestions: [
      {
        question:
          "Why is it important to use evidence from DIFFERENT parts of the text in a Q4 response?",
        lines: 4,
        modelAnswer:
          "Using evidence from different parts of the text demonstrates that the evaluation is sustained and covers the whole source. If a student only uses evidence from the opening, they are not showing how the writer develops or complicates the effect across the text. The mark scheme at Level 4 requires a 'detailed and perceptive' response that engages with the text as a whole, which is impossible if evidence comes from only one section.",
        marks: 3,
      },
      {
        question:
          "What is a counter-argument in the context of Q4? Why does including one help you reach Grade 7+?",
        lines: 5,
        modelAnswer:
          "A counter-argument is a point that challenges or complicates your main position — for example, if you agree that the writer creates loneliness, a counter-argument might acknowledge moments where connection or resilience is also present. Including a counter-argument helps reach Grade 7+ because it demonstrates critical sophistication: you are not simply agreeing with the statement but engaging with it thoughtfully, showing you can hold multiple interpretations in tension. The mark scheme rewards 'perceptive' and 'evaluative' responses, which require this kind of nuance.",
        marks: 4,
      },
      {
        question:
          "Rewrite this weak Q4 opening to make it more effective: 'I agree with the student. The text is about loneliness. The writer uses lots of techniques.'",
        lines: 6,
        modelAnswer:
          "Improved: 'To a considerable extent, I agree that the writer creates a powerful sense of loneliness in this extract. From the opening image of Arthur sitting alone on the harbour wall to the stark final sentence — \"walked home alone\" — the writer constructs a sustained portrait of isolation that is both physically and emotionally felt. However, the loneliness is not simple self-pity; it is layered with memory, dignity, and a quiet defiance that complicates a purely sympathetic reading.'",
        marks: 5,
      },
      {
        question:
          "Write a counter-argument paragraph for this Q4 statement: 'The writer creates a powerful sense of loneliness.' Use the harbour wall extract about Arthur.",
        lines: 10,
        modelAnswer:
          "However, to characterise the extract solely in terms of loneliness would be to overlook the moments of connection and vitality that the writer weaves throughout. The harbour is described as 'busy' — 'trawlers jostled for position' and 'gulls wheeled overhead' — creating a sensory richness that contrasts with Arthur's internal isolation. Furthermore, Arthur 'recognised something' in the young fisherman, suggesting a thread of empathy and identification that reaches beyond his solitude. The writer's structural choice to place Arthur within this active, communal setting — rather than alone in his empty kitchen — implies that he chooses to be near life even if he can no longer participate in it. This complicates the reading: Arthur is lonely, certainly, but he is also drawn to the world, which makes his isolation more poignant precisely because it exists alongside a desire for connection.",
        marks: 8,
      },
      {
        question:
          "What is the difference between Level 2 and Level 4 on the Q4 mark scheme? Explain in your own words.",
        lines: 6,
        modelAnswer:
          "Level 2 (6–10 marks) involves some evaluation with some evidence and some analysis of methods — the student takes a position and supports it, but the argument may be inconsistent, the evidence may be limited to one part of the text, and the analysis may be surface-level (identifying techniques without exploring their effect in depth). Level 4 (16–20 marks) involves perceptive, detailed evaluation with judicious evidence and sophisticated analysis — the student sustains a convincing argument across the whole text, selects the most effective quotations, analyses methods at word level, considers alternative interpretations, and links everything back to the evaluative statement with precision and insight.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This is the second of two Q4 lessons. Lesson 5 taught the individual paragraph; this lesson teaches how to build a multi-paragraph argument.",
      "The timed practice is crucial — many students can write good Q4 paragraphs but cannot sustain an argument under time pressure.",
      "Students who score Level 2 typically have evidence but no analysis of methods. Students who score Level 3 have methods but no counter-argument. Target your intervention accordingly.",
      "The connective challenge at the start is deceptively important: students who cannot signal their argument's direction with appropriate connectives produce responses that feel directionless.",
      "Consider peer-marking the timed responses in the next lesson for additional assessment practice.",
    ],
    targetedSkills: [
      "AO4: Sustained critical evaluation",
      "AO1: Judicious evidence selection",
      "AO2: Analysis of methods",
      "Argument construction",
      "Counter-argument and nuance",
    ],
  },

  // ── Lesson 7: Question 5 — Descriptive Writing ────────────────────────────
  {
    id: "lp1-07-q5-descriptive",
    title:
      "Question 5: Creative Writing — Descriptive Writing Techniques",
    text: "AQA English Language Paper 1",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand the Q5 descriptive writing task and its mark allocation (24 content + 16 technical accuracy = 40 marks)",
      "Develop a repertoire of descriptive writing techniques: sensory detail, figurative language, varied sentence structures, show-don't-tell",
      "Learn to structure a piece of descriptive writing using a clear framework",
      "Practise crafting vivid, precise descriptions that engage the reader",
    ],
    successCriteria: [
      "I can use at least four different descriptive techniques effectively in my writing",
      "I can structure a descriptive piece with a clear opening, development, and ending",
      "I can vary my sentence lengths and types for deliberate effect",
      "I can 'show, don't tell' — convey emotions and atmosphere through description rather than stating them directly",
    ],
    keywords: [
      "descriptive writing",
      "sensory detail",
      "figurative language",
      "show don't tell",
      "sentence variety",
      "zooming in",
      "atmosphere",
      "precise vocabulary",
      "pathetic fallacy",
    ],
    starterActivity: {
      title: "Telling vs Showing",
      duration: "8 minutes",
      instructions:
        "Display five 'telling' sentences on the board:\n1. 'The man was scared.'\n2. 'It was a cold morning.'\n3. 'The room was messy.'\n4. 'She was angry.'\n5. 'The garden was beautiful.'\n\nStudents rewrite each one to 'show' the same idea through description rather than stating it. Teacher models the first: 'The man was scared' becomes 'His fingers tightened around the door handle, knuckles whitening, and his breath came in shallow, ragged bursts that fogged in the air before him.'\n\nDiscuss: Why is 'showing' more effective than 'telling' in descriptive writing? Link to the exam: 'The examiner wants to EXPERIENCE your description, not be told what to feel.'",
      differentiation: {
        support:
          "Rewrite only three sentences. Provide a word bank (e.g. trembled, clenched, shivered, flushed, scattered). Allow pairs to collaborate.",
        core: "Rewrite all five sentences independently. Aim for at least two different senses (sight, sound, touch, smell, taste) across the five.",
        stretch:
          "Rewrite all five using a different technique for each (e.g. one with a simile, one with personification, one with a single-word sentence, one with sensory detail, one with a list of three).",
      },
      resources: [
        "Five 'telling' sentences (projected)",
        "Word bank handout (LA)",
      ],
    },
    mainActivities: [
      {
        title: "The Descriptive Toolkit: Techniques That Score Top Marks",
        duration: "20 minutes",
        instructions:
          "Teach seven key descriptive writing techniques with examples:\n\n1. SENSORY DETAIL — Engage all five senses, not just sight.\n   Example: 'The market stank of overripe fruit and diesel; somewhere, a radio played a melody she almost recognised.'\n\n2. FIGURATIVE LANGUAGE — Metaphor, simile, personification.\n   Example: 'The fog wrapped itself around the streetlights like a grey shawl.'\n\n3. PRECISE VOCABULARY — Replace vague words with specific ones.\n   Weak: 'The tree was big.' Strong: 'The oak sprawled across the hillside, its branches spanning thirty feet.'\n\n4. SENTENCE VARIETY — Short for impact. Long for atmosphere. Fragments for drama.\n   Example: 'She waited. The clock on the mantelpiece counted out the seconds with mechanical indifference, each tick a tiny punctuation in the silence that had settled over the room like dust. Nothing.'\n\n5. ZOOMING IN — Move from a wide view to a tiny detail.\n   Example: 'The beach stretched for miles, pale and empty. At her feet, a single crab claw lay half-buried in the sand, bleached white by the sun.'\n\n6. PATHETIC FALLACY — Use weather/setting to reflect mood.\n   Example: 'The sky had darkened to the colour of a bruise, and the first drops of rain began to tap against the windows like impatient fingers.'\n\n7. SHOW, DON'T TELL — Convey emotion through physical description.\n   Example: Instead of 'He was sad', write 'He turned the wedding ring on his finger, around and around, as though the motion alone could bring her back.'\n\nStudents create a 'toolkit card' with all seven techniques, writing their own example for each. They will keep this card for future lessons.\n\nGrade 5 descriptive opening (image prompt: an abandoned fairground):\n'The fairground was old and abandoned. The rides were rusty and broken. There were weeds growing everywhere. It was quiet and a bit creepy. The sky was grey and it looked like it might rain.'\n\nGrade 8 descriptive opening:\n'The Ferris wheel stood motionless against a sky the colour of wet concrete, its carriages hanging like rotten teeth from a jawbone of rusted steel. Below, the dodgem track had been reclaimed by dandelions and couch grass, their stems pushing through cracks in the concrete with the patient, unstoppable persistence of things that do not know they are unwelcome. The ticket booth — its window smashed, its paint peeling in long, curling strips — still displayed a price list from 1997. Fifty pence for a ride. A lifetime ago.'",
        differentiation: {
          support:
            "Provide the seven techniques pre-printed with examples. Students write their own example for three of them using a word bank and sentence starters.",
          core: "Students write their own example for all seven techniques. Then identify which techniques the Grade 8 model uses.",
          stretch:
            "Students write a single paragraph (5–6 sentences) that incorporates at least five of the seven techniques, then label each one in the margin.",
        },
        resources: [
          "Seven techniques teaching slides",
          "Blank toolkit card",
          "Grade 5 and Grade 8 model openings",
          "Word bank (LA)",
        ],
      },
      {
        title: "Descriptive Writing Practice: Crafting a Response",
        duration: "20 minutes",
        instructions:
          "Students plan and begin writing a descriptive piece in response to a Q5-style prompt.\n\nPrompt: 'Describe a place that has been abandoned or forgotten.'\n(Alternative prompt: Write from the image of the abandoned fairground.)\n\nPlanning structure (5 minutes):\n1. OPENING — What is the first image/detail the reader sees? (Zoom in on a single detail, or establish the wide view.)\n2. MIDDLE — How do you develop the description? (Move through the space. Engage different senses. Zoom in and out.)\n3. ENDING — How do you close the piece? (Return to the opening image? A final revealing detail? A shift in mood?)\n4. TECHNIQUES — Which three techniques from the toolkit will you definitely use?\n\nWriting (15 minutes). Teacher circulates, targeting:\n- LA: Are you using at least two techniques? Is every sentence adding something new?\n- MA: Are you varying your sentence lengths? Are you zooming in on specific details?\n- HA: Are you crafting your vocabulary precisely? Is your structure deliberate and controlled?\n\nRemind students: Q5 is marked on BOTH content/organisation (AO5: 24 marks) AND technical accuracy (AO6: 16 marks). Spelling, punctuation, and grammar matter — leave time to proofread.",
        differentiation: {
          support:
            "Provide a planning frame with sentence starters for each section: 'The first thing you notice is...', 'Moving closer, you can see...', 'The only sound is...', 'In the distance...'. Word bank of atmospheric vocabulary.",
          core: "Students plan using the three-part structure and write independently, aiming for one side of A4.",
          stretch:
            "Students experiment with an unconventional structure: start with a tiny detail and zoom out, or write the description in reverse chronological order (the place now, then what it used to be). Aim for crafted, deliberate prose.",
        },
        resources: [
          "Q5 prompt (projected and printed)",
          "Image stimulus: abandoned fairground (optional)",
          "Planning frame (LA)",
          "Descriptive toolkit card (from earlier)",
          "Word bank (LA)",
        ],
      },
    ],
    plenaryActivity: {
      title: "Read Aloud: One Sentence You Are Proud Of",
      duration: "7 minutes",
      instructions:
        "Each student selects the single sentence from their writing that they are most proud of and reads it aloud to their table group. The group votes on the best sentence and the winner reads it to the whole class. Teacher comments on what makes each winning sentence effective, using the toolkit terminology ('That's a beautiful example of zooming in', 'Notice the precise vocabulary — \"sprawled\" is so much more vivid than \"lay\"'). This celebrates good writing and reinforces the techniques taught.",
      differentiation: {
        support: "Students can select a sentence that uses the paragraph frame or a sentence starter — the point is that they recognise quality in their own work.",
        core: "Students select their best sentence and explain which technique it uses.",
        stretch:
          "After sharing, students revise their sentence to make it even better, then read the original and the revision to show the improvement.",
      },
    },
    homework:
      "Complete your descriptive writing piece (aim for 350–500 words). Before submitting, proofread for spelling, punctuation, and grammar — remember that AO6 is worth 16 marks. Underline three sentences where you have deliberately used a technique from the toolkit.",
    worksheetQuestions: [
      {
        question:
          "Explain the difference between 'showing' and 'telling' in descriptive writing. Give an example of each.",
        lines: 5,
        modelAnswer:
          "'Telling' means stating a fact or emotion directly — e.g. 'She was nervous.' 'Showing' means conveying the same idea through descriptive detail that allows the reader to infer the emotion — e.g. 'Her fingers drummed against the table and she checked the clock for the fourth time in a minute.' Showing is more effective because it engages the reader's imagination and creates a more vivid, immersive experience. The reader figures out the emotion themselves, which makes it more powerful.",
        marks: 4,
      },
      {
        question:
          "Rewrite this sentence to make it more descriptive: 'The building was old and run down.'",
        lines: 5,
        modelAnswer:
          "The building sagged under the weight of its own neglect — plaster crumbling from the facade in pale, powdery flakes, the guttering hanging loose like a broken limb, and every window either cracked or boarded over with plywood that had itself begun to warp and rot. A faded estate agent's sign, nailed to the door frame, advertised a phone number that had not existed for years.",
        marks: 5,
      },
      {
        question:
          "Why is sentence variety important in descriptive writing? Give an example of how you might use a short sentence for effect.",
        lines: 5,
        modelAnswer:
          "Sentence variety is important because it controls the pace and rhythm of the writing. Long, flowing sentences with multiple clauses create a slow, atmospheric feel, drawing the reader into the scene. Short sentences create sudden impact, tension, or emphasis — they force the reader to pause. For example, after a long descriptive passage about a peaceful garden, a short sentence like 'Then the scream.' jolts the reader and shatters the calm, creating an immediate sense of danger.",
        marks: 4,
      },
      {
        question:
          "Q5 is worth 40 marks: 24 for content and organisation, 16 for technical accuracy. What does 'technical accuracy' mean and why does it matter?",
        lines: 5,
        modelAnswer:
          "Technical accuracy (AO6) refers to spelling, punctuation, grammar, and vocabulary. It means writing in accurate Standard English with correct sentence construction, a range of punctuation (not just full stops and commas — also semicolons, colons, dashes, and ellipses), and ambitious but correctly spelled vocabulary. It matters because 16 marks is 40% of Q5 — a student could write a beautifully descriptive piece but lose a significant number of marks through poor spelling, missing punctuation, or incorrect grammar. Proofreading in the final 5 minutes is essential.",
        marks: 4,
      },
      {
        question:
          "Write a descriptive paragraph (5–6 sentences) describing a stormy sea. Use at least three techniques from the toolkit and label them.",
        lines: 10,
        modelAnswer:
          "The sea hurled itself against the cliffs with a sound like cannon fire [simile], each wave exploding into white spray that hung in the air for a moment before the wind tore it apart [precise vocabulary: 'hurled', 'exploding', 'tore']. The water was the colour of iron — dark, cold, and utterly indifferent to the small figures huddled on the clifftop [pathetic fallacy reflecting danger and insignificance]. Somewhere beneath the surface, currents twisted and pulled at the rocks with patient, relentless fingers [personification]. A fishing boat, no bigger than a child's toy at this distance, rose and fell on the swell, its bow disappearing entirely beneath each wave before struggling back into view [zooming in from wide shot to specific detail]. Salt stung her lips. Spray soaked through her coat. She could taste the storm [sensory detail: taste and touch].",
        marks: 8,
      },
      {
        question:
          "What is 'zooming in' in descriptive writing? Why is it an effective technique?",
        lines: 4,
        modelAnswer:
          "Zooming in means moving from a wide, general view to a specific, close-up detail — like a camera moving from a landscape shot to a single object. For example, describing a whole beach and then focusing on a single shell half-buried in the sand. It is effective because the shift in scale draws the reader's attention to a precise detail, making the description feel vivid and specific. It also often reveals something meaningful — the small detail can carry symbolic weight or emotional significance that the wide view cannot.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "This is the first of two Q5 lessons. This one focuses on DESCRIPTIVE writing; the next focuses on NARRATIVE writing. Students should understand that Q5 always offers a choice between the two.",
      "The 'telling vs showing' starter is transformative for weaker writers — many students default to telling because they have never been explicitly taught the alternative.",
      "The Grade 5 vs Grade 8 comparison is essential. Students often cannot see what 'good descriptive writing' looks like until they compare it to their own instinctive style.",
      "Remind students constantly: AO6 (technical accuracy) is worth 16 marks. Encourage proofreading as a habit, not an afterthought.",
      "The toolkit card should be kept and referred to in every subsequent writing lesson.",
    ],
    targetedSkills: [
      "AO5: Creative writing (content and organisation)",
      "AO6: Technical accuracy",
      "Descriptive techniques",
      "Sentence variety",
      "Vocabulary precision",
    ],
  },

  // ── Lesson 8: Question 5 — Narrative Writing ──────────────────────────────
  {
    id: "lp1-08-q5-narrative",
    title:
      "Question 5: Creative Writing — Narrative Writing Techniques",
    text: "AQA English Language Paper 1",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand the difference between descriptive and narrative writing in Q5",
      "Learn key narrative techniques: narrative voice, dialogue, pacing, withholding information, in medias res",
      "Develop the skill of structuring a short narrative with a clear arc",
      "Avoid common narrative pitfalls: over-ambitious plots, weak endings, neglecting description within narrative",
    ],
    successCriteria: [
      "I can explain the difference between a descriptive piece and a narrative piece",
      "I can use at least three narrative techniques effectively",
      "I can structure a short narrative with a clear beginning, development, and resolution",
      "I can include descriptive writing within my narrative to create atmosphere",
    ],
    keywords: [
      "narrative writing",
      "plot",
      "character",
      "dialogue",
      "pacing",
      "narrative voice",
      "in medias res",
      "withholding information",
      "resolution",
      "first person",
      "third person",
    ],
    starterActivity: {
      title: "Descriptive or Narrative?",
      duration: "8 minutes",
      instructions:
        "Display four short extracts (3–4 sentences each). Students decide: is each one DESCRIPTIVE or NARRATIVE? Discuss the key differences:\n\n- Descriptive: focuses on creating a vivid picture of a place, person, or moment. Time often stands still. Emphasis on sensory detail and atmosphere.\n- Narrative: tells a STORY with events, characters, and some sense of change or movement through time. Something HAPPENS.\n\nKey teaching point: 'In the exam, if you choose narrative, you still need description. The best narratives are rich with descriptive detail. The difference is that a narrative also has characters, events, and a sense of something changing or unfolding.'",
      differentiation: {
        support:
          "Reduce to two extracts with the key features highlighted. Provide definitions of 'descriptive' and 'narrative' at the top of the sheet.",
        core: "Students classify all four extracts and write one sentence explaining their decision for each.",
        stretch:
          "Students rewrite one of the descriptive extracts as the opening of a narrative, adding a character and a hint of plot.",
      },
      resources: [
        "Four short extracts (projected or printed)",
        "Definitions sheet (LA)",
      ],
    },
    mainActivities: [
      {
        title: "The Narrative Toolkit: Techniques for High-Scoring Stories",
        duration: "20 minutes",
        instructions:
          "Teach six key narrative techniques:\n\n1. IN MEDIAS RES — Start in the middle of the action, not at the beginning.\n   Weak: 'One morning, I woke up and decided to go for a walk.'\n   Strong: 'The phone was ringing. It had been ringing for eleven minutes — I had counted — and I was not going to answer it.'\n\n2. NARRATIVE VOICE — First person creates intimacy; third person creates distance. Choose deliberately.\n   First person: 'I could feel the cold settling into my bones like something permanent.'\n   Third person: 'She could feel the cold settling into her bones like something permanent, though she would not have admitted it.'\n\n3. DIALOGUE — Use sparingly and purposefully. Every line should reveal character or advance the plot.\n   Weak: '\"Hello,\" said John. \"Hello,\" said Mary. \"How are you?\" \"I'm fine.\"'\n   Strong: '\"How bad?\" she asked. \"Bad enough. It's in the kitchen already.\"'\n\n4. PACING — Slow down for important moments (use description). Speed up for action (use short sentences and paragraphs).\n\n5. WITHHOLDING INFORMATION — Do not reveal everything at once. Create mystery and tension.\n   Example: 'There was something in the letter that changed everything. But she did not open it. Not yet.'\n\n6. ENDING STRATEGIES — Do NOT try to wrap everything up neatly. Best endings: a single image, a return to the opening, an ambiguous moment, or a quiet realisation.\n\nGrade 5 narrative opening:\n'It was a normal day when everything changed. I was walking to school when I saw something strange in the road. It was a box. I picked it up and opened it. Inside was a letter. The letter said something shocking.'\n\nGrade 8 narrative opening:\n'The letter arrived on a Tuesday. Cream-coloured envelope, handwritten address, no return details. It sat on the doormat between a gas bill and a pizza leaflet, looking as out of place as a pearl in a handful of gravel.\n\nNadia picked it up and turned it over. The paper was thick and expensive, the kind you had to seek out from specialist shops. Her name was written in dark blue ink, the letters formed with a careful, old-fashioned hand that she did not recognise.\n\nShe opened it standing in the hallway, still wearing her coat.'\n\nStudents identify what makes the Grade 8 opening effective:\n- In medias res (we do not know who Nadia is or why the letter matters)\n- Precise detail (cream envelope, dark blue ink, specialist shops)\n- Withholding (we do not learn what the letter says yet)\n- Controlled pacing (slow, deliberate — each detail matters)\n- The final one-sentence paragraph creates a pause and a sense of intimacy",
        differentiation: {
          support:
            "Focus on three techniques (in medias res, dialogue, ending). Provide the Grade 8 model pre-annotated. Students write their own opening sentence using in medias res from a choice of three scenarios.",
          core: "Students annotate the Grade 8 model independently, then plan a narrative opening using at least three techniques from the toolkit.",
          stretch:
            "Students write their own Grade 8-quality opening paragraph (5–6 sentences) that uses at least four techniques, then swap with a partner who identifies which techniques have been used.",
        },
        resources: [
          "Six techniques teaching slides",
          "Grade 5 and Grade 8 model openings",
          "Narrative toolkit card (to keep)",
        ],
      },
      {
        title: "Planning and Writing a Short Narrative",
        duration: "20 minutes",
        instructions:
          "Students plan and begin writing a narrative in response to a Q5-style prompt.\n\nPrompt: 'Write a story about a time when someone received unexpected news.'\n(Alternative: 'Write a story that begins with the sentence: The phone call came at 3 a.m.')\n\nPlanning (5 minutes) — the 5-Point Narrative Plan:\n1. OPENING — How do you hook the reader? (In medias res? A striking image? A provocative statement?)\n2. CHARACTER — Who is your main character? What do we need to know about them? (Keep it simple — one or two characters maximum.)\n3. PROBLEM/CHANGE — What happens? What disrupts the normal? (Keep the plot SMALL — one event, one moment, one change.)\n4. DEVELOPMENT — How does the character respond? How does the situation develop? (This is where pacing and description come in.)\n5. ENDING — How do you close the story? (Not a neat resolution — a moment, an image, an ambiguity.)\n\nCRITICAL RULE FOR EXAM NARRATIVES: Keep the plot SIMPLE. The most common reason students score poorly on narrative Q5 is trying to tell an epic story in 45 minutes. The best exam narratives cover a SINGLE EVENT or a SINGLE MOMENT — a journey, a discovery, a conversation, an arrival. Think 'short story', not 'novel'.\n\nWriting (15 minutes). Teacher circulates, targeting:\n- LA: Have you started with something interesting (not 'One day...')? Is something happening?\n- MA: Are you including description within your narrative? Are you pacing your story — slowing down for key moments?\n- HA: Is your narrative voice consistent and distinctive? Are you withholding information to create tension?",
        differentiation: {
          support:
            "Provide the 5-point plan as a fill-in template with sentence starters for the opening: 'The [noun] arrived/appeared/happened at [time]...', 'It was the [noun] that changed everything...', '[Character name] had not expected...' Students aim for half a page.",
          core: "Students plan independently and write at least one page. Aim for three techniques from the toolkit.",
          stretch:
            "Students experiment with a non-linear structure (e.g. starting at the end, or intercutting between two timelines). Aim for a distinctive narrative voice and at least one moment of deliberate pacing (slowing down for a key sentence or image).",
        },
        resources: [
          "Q5 narrative prompt (projected and printed)",
          "5-Point Narrative Plan template",
          "Sentence starters (LA)",
          "Narrative toolkit card",
        ],
      },
    ],
    plenaryActivity: {
      title: "The Last Line",
      duration: "7 minutes",
      instructions:
        "Students write the LAST sentence of their narrative (even if they have not finished the middle yet). Share five last lines around the class. Discuss: Which endings are strongest? Which leave the reader thinking? Which feel too neat or rushed? Establish the principle: 'A strong ending does not resolve everything — it leaves the reader with an image, a feeling, or a question.'\n\nExamples of strong last lines:\n- 'She folded the letter and placed it in her coat pocket. She did not look back.'\n- 'The phone was still ringing when he left.'\n- 'It was, she supposed, a kind of beginning.'",
      differentiation: {
        support: "Choose from three template endings and adapt one with their own details.",
        core: "Write their own last sentence and explain what effect they intended.",
        stretch:
          "Write two alternative endings and explain which is more effective and why.",
      },
    },
    homework:
      "Complete your narrative (aim for 400–500 words). Before submitting, check: (1) Does it start in an interesting way? (2) Is the plot contained — one event, not an epic? (3) Have I included descriptive detail as well as plot? (4) Does the ending leave the reader thinking? (5) Have I proofread for SPaG (AO6)?",
    worksheetQuestions: [
      {
        question:
          "What is the difference between descriptive writing and narrative writing? When might you choose one over the other in Q5?",
        lines: 5,
        modelAnswer:
          "Descriptive writing creates a vivid picture of a place, person, or moment — time often stands still, and the focus is on atmosphere and sensory detail. Narrative writing tells a story with characters, events, and change over time. You might choose descriptive if the prompt asks you to 'describe' a place or scene, or if you are stronger at creating atmosphere. You might choose narrative if the prompt says 'write a story' or if you are confident structuring a plot. The best narratives include descriptive writing within them.",
        marks: 4,
      },
      {
        question:
          "What does 'in medias res' mean? Why is it an effective way to open a narrative?",
        lines: 4,
        modelAnswer:
          "'In medias res' is a Latin phrase meaning 'in the middle of things'. It means starting the narrative in the middle of the action rather than at the very beginning. It is effective because it immediately engages the reader — they are dropped into a situation and want to find out what is happening and why. It avoids the common weak opening of 'One day I woke up and...' and creates instant momentum.",
        marks: 3,
      },
      {
        question:
          "Why should exam narratives have a SIMPLE plot? What goes wrong when students try to write complicated stories?",
        lines: 5,
        modelAnswer:
          "Exam narratives should have a simple plot because students only have approximately 45 minutes to plan, write, and proofread. When students try to write complicated stories with multiple characters, plot twists, and dramatic events, they run out of time, rush the ending, and sacrifice descriptive quality for plot. The result is a story that reads like a summary rather than a crafted piece of writing. The best exam narratives focus on a single event or moment and develop it with rich description, precise vocabulary, and controlled pacing.",
        marks: 4,
      },
      {
        question:
          "Rewrite this weak opening to make it more effective: 'One day I was walking home from school and I found a strange object on the pavement.'",
        lines: 6,
        modelAnswer:
          "'It was half-buried in the gutter outside the newsagent's, wedged between a crisp packet and a storm drain, and I almost walked past it. Almost. But something — the colour, perhaps, or the way the streetlight caught its surface — made me stop. I crouched down, the knees of my school trousers pressing into the wet pavement, and reached for it. It was heavier than it looked. And it was warm.' This is more effective because it uses in medias res, withholds what the object is, includes sensory detail, and creates curiosity through deliberate pacing.",
        marks: 5,
      },
      {
        question:
          "Write a short passage of dialogue (4–6 lines) between two characters who have just received bad news. Make the dialogue reveal character and emotion without stating feelings directly.",
        lines: 8,
        modelAnswer:
          "'When did they call?' she asked, not looking up from the table.\n'About an hour ago. Maybe longer. I wasn't watching the time.'\n'And what exactly did they say?'\nHe opened his mouth, closed it again. Ran a hand across his jaw. 'They said we should come in. Tomorrow morning. Both of us.'\nShe nodded slowly, as though the information needed time to settle. 'Right,' she said. 'Right.' She picked up her cup, realised it was empty, and set it down again. 'I'll call work in the morning.'\nThis reveals tension and worry through pauses, repetition ('Right... Right'), physical actions (running a hand across his jaw), and understatement — neither character says how they feel, but the reader can sense the fear beneath the controlled surface.",
        marks: 6,
      },
      {
        question:
          "Why is the ending of a narrative so important? Describe two effective ending strategies for exam narratives.",
        lines: 6,
        modelAnswer:
          "The ending is important because it is the last thing the examiner reads and creates the final impression. A weak ending (e.g. 'and then I woke up and it was all a dream') undermines even a well-written narrative. Two effective strategies: (1) The final image — end with a single, vivid image that captures the mood of the story (e.g. 'The letter lay on the bedside table, glowing faintly in the streetlight'). This leaves the reader with a visual that resonates. (2) The cyclical return — end by echoing the opening, creating a sense of completeness or entrapment (e.g. if the story opens with a phone ringing, it ends with the phone ringing again). This creates structural satisfaction and can suggest that nothing has really changed — or that everything has.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This is the second Q5 lesson. Lesson 7 covered descriptive writing; this lesson covers narrative. Students should understand they will choose ONE in the exam.",
      "The single most important message: KEEP THE PLOT SIMPLE. Students consistently over-plot and under-describe in exam narratives.",
      "The dialogue section is crucial — students either avoid dialogue entirely (missing an opportunity) or write pages of unconvincing dialogue. Teach the rule: 'Every line of dialogue must reveal character or advance the plot. If it does neither, cut it.'",
      "Weaker students often write in a 'recount' style ('and then... and then... and then...'). Redirect them to slow down and describe moments rather than racing through events.",
      "The 'Last Line' plenary is very effective — students remember their endings and this improves their planning in future practice.",
    ],
    targetedSkills: [
      "AO5: Narrative writing (content and organisation)",
      "AO6: Technical accuracy",
      "Narrative techniques",
      "Plot structure",
      "Dialogue",
      "Pacing",
    ],
  },

  // ── Lesson 9: Full Paper Practice ─────────────────────────────────────────
  {
    id: "lp1-09-full-paper",
    title:
      "Full Paper Practice: Working Through a Complete Paper 1",
    text: "AQA English Language Paper 1",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Apply all skills from Lessons 1–8 to a complete Paper 1 under guided conditions",
      "Practise reading a full fiction source text efficiently and strategically",
      "Manage time across all five questions proportionally to marks",
      "Identify personal strengths and areas for improvement across the paper",
    ],
    successCriteria: [
      "I can read and annotate a source text within 10 minutes",
      "I can attempt all five questions within the lesson, allocating time proportionally",
      "I can apply the specific strategies learned for each question type",
      "I can identify which questions I find easiest and hardest, and plan my revision accordingly",
    ],
    keywords: [
      "full paper practice",
      "time management",
      "source text",
      "annotation",
      "exam conditions",
      "self-assessment",
      "target setting",
    ],
    starterActivity: {
      title: "Strategy Recap: 60-Second Speed Review",
      duration: "8 minutes",
      instructions:
        "Quick-fire review of strategies for each question. Display a question number; students have 30 seconds to write down the key strategy on a whiteboard. Cycle through all five questions:\n\n- Q1: Read ONLY the specified lines. List 4 explicit facts. 5 minutes.\n- Q2: Select quotations. Name the technique. Analyse the EFFECT on the reader. Zoom into words.\n- Q3: Track structure across the WHOLE text. Identify shifts in focus. Beginning, middle, end.\n- Q4: Circle the key word. Take a position. Use evidence + methods. Add counter-argument.\n- Q5: Plan first. Use your toolkit. Keep the plot simple (narrative) or zoom in (descriptive). Proofread.\n\nThen display the timing plan and remind students they are about to work through a full paper in a guided (not strict exam) format.",
      differentiation: {
        support:
          "Provide a printed strategy card with the key points for each question, which students can refer to throughout the lesson.",
        core: "Students recall strategies from memory before checking against the teacher's version.",
        stretch:
          "Students add one additional 'expert tip' for each question based on their learning from Lessons 1–8.",
      },
      resources: [
        "Strategy recap slides",
        "Mini-whiteboards",
        "Printed strategy cards (LA)",
        "Timing plan display",
      ],
    },
    mainActivities: [
      {
        title: "Reading and Annotating the Source Text",
        duration: "12 minutes",
        instructions:
          "Distribute a complete Paper 1 source text (a fiction extract of approximately 500–600 words that students have NOT seen before). Students read and annotate the text in 10 minutes, using the following strategic reading approach:\n\nFirst read (3 minutes): Read the whole text for understanding. What is happening? Who is involved? What is the mood/atmosphere?\n\nSecond read (5 minutes): Annotate actively:\n- Underline striking language choices (for Q2)\n- Mark structural shifts in the margin (for Q3)\n- Note your emotional response at different points (for Q4)\n- Star any particularly vivid descriptions (for inspiration in Q5)\n\nFinal 2 minutes: Read the questions. Check line references for Q1 and Q2. Note the Q4 statement. Note the Q5 prompt.\n\nTeacher models the first paragraph annotation on the board, demonstrating how to annotate efficiently rather than highlighting everything.",
        differentiation: {
          support:
            "Provide a pre-annotated first paragraph showing what strategic annotation looks like. Students continue the approach independently for the rest of the text. Include a 'what to look for' checklist.",
          core: "Students annotate independently using the three-stage approach.",
          stretch:
            "Students also note potential paragraph openings for Q4 and jot a 3-word structural summary of the text (from Lesson 4) in the margin.",
        },
        resources: [
          "Complete Paper 1 source text (printed)",
          "Highlighters and pens",
          "Annotation checklist (LA)",
          "Complete set of questions (Q1–Q5)",
        ],
      },
      {
        title: "Working Through the Questions: Guided Practice",
        duration: "35 minutes",
        instructions:
          "Students work through all five questions at their own pace, with teacher-set time checkpoints displayed on the board:\n\n- By 5 minutes: Q1 should be DONE.\n- By 15 minutes: Q2 should be DONE.\n- By 25 minutes: Q3 should be DONE.\n- By 35 minutes (end): Q4 should be DONE or nearly done.\n\nNote: Q5 will not be completed in full during this lesson due to time constraints. Students should use any remaining time to PLAN Q5 (the 5-point plan from Lesson 8), and the Q5 writing will be set as extended homework.\n\nThis is GUIDED practice, not strict exam conditions. This means:\n- Students CAN refer to their strategy cards and toolkit cards.\n- Students CAN ask the teacher one clarifying question per question.\n- Students CANNOT discuss with peers (individual work).\n\nTeacher circulates throughout, using a monitoring checklist:\n- Q1: Are students staying within line references? Are they listing, not analysing?\n- Q2: Are students analysing effect, not just identifying techniques?\n- Q3: Are students discussing structure, not language? Are they tracking across the whole text?\n- Q4: Do students have a clear position? Are they analysing methods within their evaluation?\n\nAt each time checkpoint, give a brief whole-class reminder of the key strategy for the next question.",
        differentiation: {
          support:
            "Provide paragraph frames for Q2, Q3, and Q4. Allow extra time on Q1 and Q2 if needed (aim for at least Q1–Q3 completed). Reduce Q4 target to one paragraph. Planning Q5 is optional.",
          core: "Complete Q1–Q4 within the time checkpoints. Plan Q5 in the final minutes. No paragraph frames — use strategy cards only.",
          stretch:
            "Complete Q1–Q4 ahead of time checkpoints. Begin writing Q5 in the remaining time. Aim for exam-quality responses throughout — no strategy cards.",
        },
        resources: [
          "Question paper (all five questions)",
          "Strategy cards and toolkit cards",
          "Paragraph frames (LA)",
          "Countdown timer with checkpoints",
          "Answer booklet or lined paper",
        ],
      },
    ],
    plenaryActivity: {
      title: "Self-Assessment RAG Rating",
      duration: "5 minutes",
      instructions:
        "Students complete a self-assessment grid, rating themselves Red/Amber/Green for each question:\n\n| Question | Confidence | Biggest Challenge |\n|----------|------------|-------------------|\n| Q1       | R / A / G  | _________________ |\n| Q2       | R / A / G  | _________________ |\n| Q3       | R / A / G  | _________________ |\n| Q4       | R / A / G  | _________________ |\n| Q5 (plan)| R / A / G  | _________________ |\n\nStudents also write: 'My target for next time is...' This informs their revision and the teacher's planning for the exam technique lesson (Lesson 10).",
      differentiation: {
        support: "Pre-printed grid with sentence starters for the 'Biggest Challenge' column.",
        core: "Students complete the grid independently and set a specific, actionable target.",
        stretch:
          "Students write a brief paragraph reflecting on their performance: which question went best, which needs the most work, and what specific strategy will they use to improve.",
      },
    },
    homework:
      "Complete Q5 in full (45 minutes timed at home). Choose EITHER the descriptive or narrative option. Apply the techniques from Lessons 7 and 8. Plan for 5 minutes, write for 35 minutes, proofread for 5 minutes. Aim for 400–550 words. Bring your complete paper (Q1–Q5) to the next lesson for peer and teacher assessment.",
    worksheetQuestions: [
      {
        question:
          "Describe your strategy for reading and annotating the source text before answering questions. What do you look for on each read-through?",
        lines: 6,
        modelAnswer:
          "On the first read (3 minutes), I read the whole text for overall understanding — who is in the text, what is happening, and what the mood is. On the second read (5 minutes), I annotate actively: underline striking language (for Q2), mark structural shifts in the margin (for Q3), and note my emotional responses (for Q4). In the final 2 minutes, I read all five questions, check the line references for Q1 and Q2, note the key word in the Q4 statement, and look at the Q5 prompt so I can think about it subconsciously while answering Section A.",
        marks: 4,
      },
      {
        question:
          "You have 5 minutes left in the exam and you are halfway through Q4. What should you do? Explain your reasoning.",
        lines: 5,
        modelAnswer:
          "With 5 minutes left, finishing Q4 properly is unlikely. I should quickly write one more brief paragraph with a quotation and a link to the statement to pick up a few more Q4 marks. Then I should NOT skip Q5 entirely — even a brief plan or a few well-written sentences on Q5 could earn marks. Since Q5 is worth 40 marks, leaving it blank is disastrous. The key principle is: never leave a question blank, even if your response is incomplete. Some marks are always better than zero.",
        marks: 4,
      },
      {
        question:
          "Which question did you find most challenging today? Explain why, and identify one specific strategy you will use to improve next time.",
        lines: 6,
        modelAnswer:
          "Example: I found Q3 most challenging because I kept writing about language instead of structure. I would identify a metaphor and start analysing the words, rather than stepping back to discuss why the writer placed that moment at that point in the text. Next time, I will use the question 'WHERE in the text does this happen and WHY is it placed here?' to keep my focus on structure. I will also use the three-part framework (beginning, shift, ending) to make sure I track across the whole text.",
        marks: 4,
      },
      {
        question:
          "Create a revision checklist of the top three strategies for EACH question (Q1–Q5). This will be your personal revision tool.",
        lines: 15,
        modelAnswer:
          "Q1: (1) Read ONLY the specified lines. (2) List 4 explicit, directly stated facts. (3) Do not analyse or infer — just retrieve. Q2: (1) Select short, embedded quotations from the specified lines. (2) Name the technique AND analyse the effect on the reader. (3) Zoom into individual words and explore connotations. Q3: (1) Track structure across the whole text — beginning, middle, end. (2) Identify shifts in focus (setting to character, external to internal, present to past). (3) Explain WHY the writer has structured the text this way — effect on the reader. Q4: (1) Circle the key word in the statement and use it in every paragraph. (2) Take a clear position and support it with evidence + analysis of methods. (3) Include a counter-argument or nuanced point for Grade 7+. Q5: (1) Plan for 5 minutes — use the 5-point plan (narrative) or the three-part structure (descriptive). (2) Use your technique toolkit — at least 4 techniques. (3) Proofread for 5 minutes — AO6 is worth 16 marks.",
        marks: 10,
      },
    ],
    teacherNotes: [
      "This lesson is guided practice, not a mock exam. The goal is to build confidence and identify gaps, not to produce a formal assessment.",
      "Circulating during the 35-minute working period is essential — use the monitoring checklist to identify whole-class issues for the next lesson.",
      "The most common issues you will observe: students spending too long on Q1, writing about language in Q3, and not analysing methods in Q4.",
      "Q5 is deliberately set as homework because 45 minutes of writing cannot fit into this lesson. Ensure students understand this is their most important homework of the scheme.",
      "The self-assessment RAG rating provides crucial data for Lesson 10 — use it to plan targeted intervention groups.",
      "Consider collecting the Q1–Q4 responses for formal marking using AQA mark schemes to provide detailed feedback.",
    ],
    targetedSkills: [
      "All AOs: AO1, AO2, AO4, AO5, AO6",
      "Time management",
      "Exam technique",
      "Strategic reading",
      "Self-assessment",
    ],
  },

  // ── Lesson 10: Exam Technique Masterclass ─────────────────────────────────
  {
    id: "lp1-10-exam-masterclass",
    title:
      "Exam Technique Masterclass: Common Mistakes & How to Fix Them",
    text: "AQA English Language Paper 1",
    board: "AQA",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Identify and correct the most common mistakes students make on Paper 1",
      "Learn examiner-approved strategies for maximising marks on every question",
      "Practise improving weak responses to demonstrate grade progression",
      "Develop a personalised action plan for Paper 1 revision",
    ],
    successCriteria: [
      "I can identify at least three common mistakes and explain how to fix each one",
      "I can upgrade a Grade 4 response to a Grade 7+ response for any question",
      "I can explain the mark scheme criteria for each question in my own words",
      "I can create a specific, actionable revision plan for Paper 1",
    ],
    keywords: [
      "exam technique",
      "mark scheme",
      "common mistakes",
      "grade boundaries",
      "examiner",
      "upgrade",
      "revision",
      "action plan",
    ],
    starterActivity: {
      title: "Spot the Mistake",
      duration: "8 minutes",
      instructions:
        "Display five short student responses (one per question, Q1–Q5), each containing a common mistake:\n\n1. Q1: Goes outside line references — lists information from lines 15–20 when the question says lines 1–10.\n2. Q2: Identifies a metaphor but does not explain the effect — 'The writer uses a metaphor which is effective.'\n3. Q3: Writes about language instead of structure — 'The writer uses the word \"dark\" to create a gloomy atmosphere.'\n4. Q4: Does not link back to the evaluative statement — analyses a quotation without connecting it to 'sympathy' or 'tension'.\n5. Q5: Opens with 'One day I woke up...' and tells rather than shows.\n\nStudents identify the mistake in each and write what the student SHOULD have done instead. Quick-fire feedback — 1 minute per question.",
      differentiation: {
        support:
          "The mistakes are highlighted/underlined in each response. Students choose from three possible corrections for each.",
        core: "Students identify the mistake and write a corrected version independently.",
        stretch:
          "Students identify the mistake, explain WHY it costs marks (referencing the mark scheme), and write an improved version.",
      },
      resources: [
        "Five weak responses (projected)",
        "Mini-whiteboards",
      ],
    },
    mainActivities: [
      {
        title: "The Upgrade Workshop: From Grade 4 to Grade 8",
        duration: "25 minutes",
        instructions:
          "Students rotate through three 'upgrade stations' (8 minutes each), working on the three questions they find most challenging (based on Lesson 9 self-assessment).\n\nStation A — Upgrading Q2 (Language Analysis):\nGrade 4 response: 'The writer says the water was \"brown\" and \"muscular\". These words describe the flood. The writer also uses the word \"sliding\" which shows the water is moving.'\nTask: Rewrite this response at Grade 7+. Must include: embedded quotation, named technique, word-level analysis, effect on the reader.\nUpgrade checklist:\n- Have I embedded the quotation into my sentence?\n- Have I named the technique?\n- Have I zoomed into a specific word and explored its connotations?\n- Have I explained the effect on the reader?\n\nStation B — Upgrading Q4 (Evaluation):\nGrade 4 response: 'I agree that the writer makes the reader feel sorry for the character. The character has lost someone and the text is sad. The writer uses emotive language to make the reader feel sad.'\nTask: Rewrite this response at Grade 7+. Must include: clear position, specific quotation, analysis of writer's methods, link to statement, counter-argument.\nUpgrade checklist:\n- Have I stated a clear position (agree/partially agree/disagree)?\n- Have I used a specific quotation, not a paraphrase?\n- Have I analysed the writer's method (not just the content)?\n- Have I linked every paragraph back to the key word in the statement?\n- Have I considered an alternative reading?\n\nStation C — Upgrading Q5 (Creative Writing):\nGrade 4 opening: 'It was a dark and stormy night. The wind was blowing really hard. I was walking down the road and I was scared. There were no people around and it was very quiet. I kept walking because I had to get home.'\nTask: Rewrite this opening at Grade 7+. Must include: at least three techniques from the toolkit, sentence variety, show-don't-tell, precise vocabulary.\nUpgrade checklist:\n- Have I replaced vague words with precise ones?\n- Have I varied my sentence lengths?\n- Am I showing, not telling?\n- Have I used at least three descriptive/narrative techniques?\n- Have I checked spelling, punctuation, and grammar?",
        differentiation: {
          support:
            "Students choose TWO stations (the two they most need). Provide sentence starters and paragraph frames at each station. The upgrade checklist is printed and students tick off each criterion as they include it.",
          core: "Students complete all three stations. Use the upgrade checklist as a guide but write independently.",
          stretch:
            "Students complete all three stations, then choose one and write an 'examiner's commentary' explaining why their upgraded response would score higher, using mark scheme language (e.g. 'perceptive', 'judicious', 'convincing').",
        },
        resources: [
          "Three station worksheets with Grade 4 responses",
          "Upgrade checklists (one per station)",
          "Paragraph frames (LA)",
          "Mark scheme extracts for reference",
        ],
      },
      {
        title: "Building Your Personal Revision Plan",
        duration: "15 minutes",
        instructions:
          "Using their Lesson 9 RAG self-assessment and today's upgrade work, students create a personalised Paper 1 revision action plan.\n\nAction Plan Template:\n\n1. MY STRONGEST QUESTION: _____ (Q number)\n   - What I do well: _____\n   - How to maintain this: _____\n\n2. MY WEAKEST QUESTION: _____ (Q number)\n   - What goes wrong: _____\n   - Specific strategy to improve: _____\n   - Practice I will do: _____\n\n3. MY TIMING WEAKNESS: _____\n   - Where I lose time: _____\n   - How I will fix this: _____\n\n4. MY TECHNICAL ACCURACY TARGET (AO6):\n   - My most common SPaG error: _____\n   - How I will address this: _____\n\n5. MY THREE REVISION PRIORITIES:\n   1. _____\n   2. _____\n   3. _____\n\nTeacher circulates to ensure action plans are SPECIFIC and ACTIONABLE, not vague. For example:\n- Vague: 'I need to improve Q2.'\n- Specific: 'For Q2, I will practise zooming into individual words and explaining their connotations. I will complete one Q2 response per week and self-assess against the Level 4 descriptors.'\n\nGrade 5 target student action plan focus:\n- Ensure every Q2 paragraph explains EFFECT, not just identifies a technique.\n- In Q4, always link back to the key word in the statement.\n- In Q5, proofread the last paragraph for SPaG — this is where most errors accumulate.\n\nGrade 8 target student action plan focus:\n- In Q2, develop word-level analysis — explore connotations of individual words.\n- In Q4, develop the counter-argument paragraph to show critical sophistication.\n- In Q5, experiment with more ambitious structural choices and ensure the ending is crafted, not rushed.",
        differentiation: {
          support:
            "Provide the action plan template pre-printed with prompts. Teacher conferences with these students individually to help them identify specific strategies.",
          core: "Students complete the action plan independently. Share with a partner for accountability.",
          stretch:
            "Students complete the action plan and write a 'letter to self' to be opened before the exam, containing their top five reminders and strategies.",
        },
        resources: [
          "Action plan template (printed)",
          "Lesson 9 RAG self-assessment sheets (returned)",
          "Mark scheme summary sheet for reference",
        ],
      },
    ],
    plenaryActivity: {
      title: "One Thing I Will Never Do Again",
      duration: "7 minutes",
      instructions:
        "Each student writes on a sticky note: 'One mistake I will never make again on Paper 1 is...' and 'The strategy I will use instead is...'. Students share with their table, then stick their note on the 'Wall of Wisdom' display. Teacher reads three particularly insightful ones to the class.\n\nExamples:\n- 'I will never go outside the line references on Q1 again. I will underline the specified lines before I even read them.'\n- 'I will never write \"the writer uses a metaphor which is effective\" again. I will always explain WHAT the effect is and HOW the technique creates it.'\n- 'I will never skip proofreading on Q5 again. 16 marks for SPaG is too many to throw away.'",
      differentiation: {
        support: "Provide sentence starters: 'One mistake I will never make again is... because... Instead, I will...'",
        core: "Students write independently and share.",
        stretch:
          "Students write two sticky notes: one about a reading question and one about Q5 writing.",
      },
    },
    homework:
      "Complete a full Paper 1 under strict timed conditions (1 hour 45 minutes) using a past paper or practice paper. Apply your personalised action plan. After completing the paper, write a short reflection (100 words): What did I do differently this time? What worked? What still needs improvement?",
    worksheetQuestions: [
      {
        question:
          "List the five most common mistakes students make on Paper 1 and explain how to avoid each one.",
        lines: 10,
        modelAnswer:
          "1. Going outside line references on Q1: Avoid by underlining the specified lines before reading, and only retrieving information from within those lines. 2. Feature-spotting on Q2 without analysing effect: Avoid by always following the structure 'technique + quotation + connotation + effect on reader'. 3. Writing about language instead of structure on Q3: Avoid by asking 'WHERE in the text is this and WHY is it placed here?' rather than 'WHAT words does the writer use?' 4. Not linking back to the evaluative statement on Q4: Avoid by circling the key word in the statement and using it in every paragraph. 5. Running out of time on Q5 or not proofreading: Avoid by allocating 45 minutes to Q5 (5 plan, 35 write, 5 proofread) and treating proofreading as non-negotiable.",
        marks: 5,
      },
      {
        question:
          "Explain the difference between a Level 2 and Level 4 response on Q2. What specifically does a student need to do to move from Level 2 to Level 4?",
        lines: 6,
        modelAnswer:
          "A Level 2 Q2 response (3–4 marks) identifies some language features and makes some comment on effect, but the analysis is surface-level — for example, 'The metaphor is effective because it makes the reader imagine the scene.' A Level 4 response (7–8 marks) analyses language with 'perceptive, detailed understanding' — it zooms into individual words, explores connotations and layers of meaning, and explains with precision how the technique affects the reader and why. To move from Level 2 to Level 4, a student must: (1) embed quotations, (2) zoom into single words, (3) use precise analytical vocabulary, and (4) explain multiple layers of effect rather than a single, general comment.",
        marks: 4,
      },
      {
        question:
          "A student scored 12/20 on Q4. Their feedback says: 'Some evaluation with some evidence and some analysis of methods, but not sustained across the text.' What does this mean and what should the student do differently?",
        lines: 6,
        modelAnswer:
          "This feedback means the student is at Level 2–3 on Q4. They have a position and some evidence, but the argument does not track across the whole text — they may have used evidence from only one section, or their paragraphs may not build on each other. To improve, the student should: (1) select quotations from different parts of the text (beginning, middle, and end), (2) use discourse markers to show how each paragraph develops the argument ('Furthermore...', 'However...', 'Ultimately...'), (3) include a counter-argument or nuanced point in one paragraph, and (4) ensure every paragraph links back to the key word in the evaluative statement.",
        marks: 4,
      },
      {
        question:
          "Why is AO6 (technical accuracy) worth 16 marks on Q5? Give three specific things a student should check when proofreading.",
        lines: 5,
        modelAnswer:
          "AO6 is worth 16 marks because technical accuracy — spelling, punctuation, grammar, and vocabulary — is essential for clear communication. A beautifully descriptive piece that is riddled with errors loses marks and impact. Three things to check: (1) Sentence boundaries — have I used full stops, not commas, between separate sentences? (Comma splicing is the most common error.) (2) Apostrophes — have I used them correctly for possession (the dog's bone) and not confused them with plurals (the dogs, not the dog's)? (3) Ambitious vocabulary — have I spelled my more adventurous word choices correctly? If I am not sure how to spell a word, I should replace it with a word I know I can spell.",
        marks: 4,
      },
      {
        question:
          "Write your personalised 'Top 5 Paper 1 Reminders' — five specific, actionable strategies you will use in the exam.",
        lines: 10,
        modelAnswer:
          "Example: (1) Read the source text TWICE — once for understanding, once for annotation — and spend no more than 10 minutes on this. (2) On Q1, underline the line references first, then list 4 facts without analysis. Do not spend more than 5 minutes. (3) On Q2, zoom into individual words — do not just name the technique, explore the CONNOTATIONS of the specific word the writer chose. (4) On Q4, circle the key word in the statement and make sure every paragraph contains that word or a synonym. Include a counter-argument in paragraph 3. (5) On Q5, plan for 5 minutes and proofread for 5 minutes — this is non-negotiable. Keep the plot simple if writing a narrative. Check for comma splices during proofreading.",
        marks: 5,
      },
      {
        question:
          "Explain how you would allocate your time across Paper 1. Justify your allocation for Q4 and Q5 specifically.",
        lines: 6,
        modelAnswer:
          "Reading and annotating: 10 minutes. Q1: 5 minutes. Q2: 10 minutes. Q3: 10 minutes. Q4: 20 minutes. Q5: 45 minutes (5 planning + 35 writing + 5 proofreading). Buffer: 5 minutes. Q4 gets 20 minutes because it is worth 20 marks and requires a sustained, multi-paragraph argument with evidence from across the text — rushing it produces a thin, Level 2 response. Q5 gets 45 minutes because it is worth 40 marks — half the entire paper — and requires both creative skill (AO5: 24 marks) and technical accuracy (AO6: 16 marks). Skimping on Q5 time is the single biggest mistake a student can make.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This is the capstone lesson for the Paper 1 scheme. Its effectiveness depends on using data from Lesson 9 to target common weaknesses.",
      "The upgrade stations should be differentiated by NEED, not just ability — some HA students struggle with Q3, some LA students are strong at Q5.",
      "The action plan is the most important output of this lesson. Check that every student's plan is specific and actionable before they leave.",
      "Consider photographing the 'Wall of Wisdom' sticky notes and distributing them as a revision resource.",
      "The homework (full timed paper) is essential preparation for the actual exam. Consider setting a specific date/time for students to do this under home exam conditions.",
      "After this lesson, consider running a feedback lesson where students peer-mark their full papers using AQA mark schemes — this builds assessment literacy.",
    ],
    targetedSkills: [
      "Exam technique",
      "Self-assessment",
      "Error correction",
      "Revision planning",
      "All AOs: AO1, AO2, AO4, AO5, AO6",
    ],
  },
];
