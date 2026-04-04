import type { LessonPlan } from '@/types';

export const y10IgcseLangP1Lessons: LessonPlan[] = [
  // ── Lesson 1: Understanding the Paper Structure ───────────────────────────
  {
    id: 'y10lp1-01',
    title: 'Understanding Paper 1 — Structure, Timing and Mark Allocation',
    text: 'IGCSE English Language Paper 1',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Understand the structure of Edexcel IGCSE English Language Paper 1 (4EA1/01)',
      'Identify the two sections of the paper and their individual mark allocations',
      'Recall the five questions in Section A, their marks, and the Assessment Objectives each tests',
      'Apply a proportional timing strategy to the 135-minute paper',
    ],
    successCriteria: [
      'I can name both sections of Paper 1 and state how many marks each is worth',
      'I can describe what each of the five Section A questions requires',
      'I can state which Assessment Objective is tested by each question',
      'I can produce a realistic minute-by-minute timing plan for the full paper',
    ],
    keywords: [
      'Assessment Objective',
      'AO1',
      'AO2',
      'AO3',
      'AO4',
      'AO5',
      'Section A',
      'Section B',
      'transactional writing',
      'unseen text',
      'mark allocation',
      'timing strategy',
    ],
    starterActivity: {
      title: 'Paper 1 Myth-Busting Quiz',
      duration: '8 minutes',
      instructions:
        'Display eight true/false statements about Paper 1 on the board (e.g. "Paper 1 lasts 90 minutes — True or False?", "Section A is worth more marks than Section B — True or False?", "You must answer all tasks in Section B — True or False?"). Students write their answers on mini-whiteboards and hold them up simultaneously. Teacher reveals correct answers and briefly explains each one. Collect misconceptions to address during main teaching.',
      differentiation: {
        support:
          'Provide students with a simplified one-page Paper 1 overview sheet to refer to when answering the quiz.',
        core: 'Students answer from prior knowledge and note any surprises to discuss with the class.',
        stretch:
          'Students correct each false statement by rewriting it as an accurate claim, using precise numbers and terminology.',
      },
      resources: [
        'True/false quiz slide',
        'Mini-whiteboards and pens',
        'Paper 1 overview sheet (support scaffold)',
      ],
    },
    mainActivities: [
      {
        title: 'Guided Paper Structure Walkthrough',
        duration: '20 minutes',
        instructions:
          'Teacher models an annotated breakdown of Paper 1 structure using a displayed specimen front page. Work through: Section A (45 marks, five questions: Q1 = 2 marks / AO1; Q2 = 4 marks / AO1; Q3 = 5 marks / AO1; Q4 = 12 marks / AO2; Q5 = 22 marks / AO3) and Section B (45 marks: AO4 = 27 marks, AO5 = 18 marks). Students copy the structure table into their exercise books and annotate what each AO requires. Emphasise that Q5 alone is worth 22 marks and that Section B is equally weighted to Section A — two common student blind spots.',
        differentiation: {
          support:
            'Provide a pre-printed structure table with mark allocations partially filled in; students complete the AO column and the task description column.',
          core: 'Students construct the full table from scratch using teacher guidance and annotate each AO in their own words.',
          stretch:
            'Students add a third column to their table: "What does a top-band answer require?" and complete it with mark-scheme-style descriptors.',
        },
        resources: [
          'Specimen Paper 1 front page displayed on board',
          'Paper structure table template (support)',
          'Mark scheme overview for annotation',
        ],
      },
      {
        title: 'Timing Plan Construction',
        duration: '20 minutes',
        instructions:
          'Teacher models the principle of "time proportional to marks": if the paper lasts 135 minutes and Q5 is worth 22/90 marks, then Q5 deserves roughly 33 minutes. Students use this principle to draft their own timing plans in pairs. After 8 minutes, pairs share their plans and the class constructs a consensus plan: Q1 = 3 min, Q2 = 5 min, Q3 = 7 min, Q4 = 15 min, Q5 = 30 min, Section B planning = 5 min, Section B writing = 55 min, checking = 10 min. Students copy the agreed plan and annotate why each allocation is what it is. Finish by highlighting the most common timing error: spending too long on Q1–Q3 and under-preparing Q5.',
        differentiation: {
          support:
            'Provide a partial timing plan with Q1 already allocated; students calculate the remaining allocations using the proportional formula.',
          core: 'Students construct their own timing plan and justify every allocation before comparing with the class consensus.',
          stretch:
            'Students write a short paragraph advising a Year 10 peer on the most dangerous timing mistakes and how to avoid them.',
        },
        resources: [
          'Blank timing plan template',
          'Calculator (optional)',
          'Consensus timing plan slide (revealed at end of activity)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Structure Speed-Round',
      duration: '7 minutes',
      instructions:
        'Teacher fires rapid oral questions at the class in a call-and-response format: "How many marks is Section B?" "Which AO does Q4 test?" "How long should you spend on Q3?" "What are the two AOs in Section B?" Students respond on mini-whiteboards. Finish by asking each student to write one thing they want to remember about Paper 1 structure on a sticky note and place it on the "Key Facts" display.',
      differentiation: {
        support: 'Allow support students to keep their structure table visible during the speed-round.',
        core: 'Students answer from memory after packing away their notes.',
        stretch: 'Stretch students must explain the reasoning behind their answers, not just state the answer.',
      },
    },
    homework:
      'Create a one-page revision card summarising Paper 1 structure. Include: a table of all five Section A questions with marks and AOs, the Section B mark split, and your personal timing plan. Illustrate it in a way that will help you remember it under exam pressure.',
    worksheetQuestions: [
      {
        question: 'Paper 1 (4EA1/01) lasts 135 minutes and is worth 90 marks. The paper has two sections. State the name of each section and how many marks each is worth.',
        lines: 4,
        modelAnswer:
          'Section A is Reading, worth 45 marks. Section B is Transactional Writing, also worth 45 marks. Both sections carry equal weight, together totalling 90 marks.',
        marks: 4,
      },
      {
        question: 'Complete the table below for Section A. For each question, state: the task, the marks available, and the Assessment Objective tested.\n\nQ1: ___  Q2: ___  Q3: ___  Q4: ___  Q5: ___',
        lines: 8,
        modelAnswer:
          'Q1: Select two words/phrases — 2 marks — AO1. Q2: Explain thoughts and feelings in own words — 4 marks — AO1. Q3: Describe a topic using brief quotations — 5 marks — AO1. Q4: Analyse language and structure for effect — 12 marks — AO2. Q5: Compare how both writers present ideas and perspectives — 22 marks — AO3.',
        marks: 10,
      },
      {
        question: 'Section B is worth 45 marks, split between AO4 and AO5. How many marks does each AO carry, and what does each AO assess?',
        lines: 4,
        modelAnswer:
          'AO4 (Communication and Organisation) is worth 27 marks; it assesses the quality of ideas, matching form/audience/purpose, and effective structuring. AO5 (Spelling, Punctuation, and Grammar) is worth 18 marks; it assesses accuracy, sentence variety, and technical control.',
        marks: 4,
      },
      {
        question: 'A student spends 40 minutes on Questions 1–3 and only 20 minutes on Question 5. Explain why this is a poor timing strategy.',
        lines: 5,
        modelAnswer:
          'Questions 1–3 are worth only 11 marks combined, so they should take approximately 15 minutes. Question 5 is worth 22 marks — the single highest-mark question on the paper — and demands at least 30 minutes of careful comparative writing. Spending 40 minutes on low-tariff questions and only 20 minutes on Q5 means the student sacrifices up to 22 marks for the sake of 11, dramatically reducing their overall score.',
        marks: 4,
      },
      {
        question: 'Draft a minute-by-minute timing plan for the full 135-minute Paper 1. Include all five Section A questions, Section B planning and writing, and a checking phase.',
        lines: 10,
        modelAnswer:
          'Minutes 0–5: Read both texts. Minutes 5–8: Answer Q1 (2 marks). Minutes 8–13: Answer Q2 (4 marks). Minutes 13–20: Answer Q3 (5 marks). Minutes 20–35: Answer Q4 (12 marks). Minutes 35–65: Answer Q5 (22 marks). Minutes 65–70: Plan Section B. Minutes 70–125: Write Section B response. Minutes 125–135: Proofread entire paper.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Use a genuine Edexcel specimen or past paper front page to make the structure walkthrough feel authentic — students engage better when they see the real article.',
      'Stress repeatedly that Section A and Section B are equally weighted; many Year 10 students arrive believing Section A is more important because it comes first.',
      'The timing plan activity benefits from paired discussion — students are often more honest about their tendencies when talking to a peer than when questioned directly.',
      'If time is short, the timing plan can become homework and the plenary speed-round shortened to five questions.',
    ],
    targetedSkills: [
      'Exam structure knowledge',
      'Strategic time management',
      'Assessment Objective literacy',
      'Proportional mark-to-time reasoning',
      'Metacognitive exam preparation',
    ],
  },

  // ── Lesson 2: Q1 and Q2 — Retrieval and Inference (AO1) ──────────────────
  {
    id: 'y10lp1-02',
    title: 'Question 1 and 2 — Retrieval and Inference (AO1)',
    text: 'IGCSE English Language Paper 1',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Accurately select precise words and phrases in response to Question 1 (AO1, 2 marks)',
      'Explain a writer\'s thoughts and feelings in own words for Question 2 (AO1, 4 marks)',
      'Distinguish between retrieval and inference as reading skills',
      'Apply Question 2 "own words" technique to a range of non-fiction passages',
    ],
    successCriteria: [
      'I can select two precise words or phrases from specified lines without copying unnecessary text',
      'I can explain a writer\'s thoughts and feelings using paraphrase rather than direct quotation',
      'I can identify four distinct points for a Question 2 response',
      'I can distinguish between a retrieval point and an inference point',
    ],
    keywords: [
      'retrieval',
      'inference',
      'paraphrase',
      'own words',
      'thoughts and feelings',
      'line reference',
      'select',
      'identify',
      'AO1',
      'precise',
    ],
    starterActivity: {
      title: 'Retrieval vs. Inference Sort',
      duration: '8 minutes',
      instructions:
        'Provide students with a set of eight question-and-answer cards. Four responses use direct quotation or close paraphrase of stated facts (retrieval); four require reading between the lines (inference). Students sort them into two columns — "The text directly tells us" and "We can work this out from clues." Teacher takes feedback and clarifies the distinction: retrieval = explicitly stated; inference = implied and deduced.',
      differentiation: {
        support: 'Label the cards with a small R or I to allow students to check their sorting after completing it independently.',
        core: 'Students sort unsupported; justify any they found difficult to categorise.',
        stretch: 'Students add one example of their own to each column, writing a mini passage and a corresponding question.',
      },
      resources: ['Retrieval vs. Inference sort cards (one set per pair)', 'Two-column sorting mat'],
    },
    mainActivities: [
      {
        title: 'Modelling Q1 — Precise Selection',
        duration: '15 minutes',
        instructions:
          'Display a 200-word extract from a 20th-century travel writing piece describing a crowded market. Teacher models a Q1 response live: read the question, locate the specified lines, identify words/phrases that match the focus, select only what is asked for. Demonstrate the common error of selecting too much ("the noise was loud and overwhelming, pressing in on all sides" — too long) versus too little or imprecise. Show three worked examples of a strong Q1 response (two precise words or short phrases, no explanation required). Students then practise with a second extract in pairs, attempting two Q1-style questions before the teacher reveals and discusses the mark scheme.',
        differentiation: {
          support: 'Provide the lines underlined in the extract; students must choose the two most precise items from within the underlined section.',
          core: 'Students work with the full extract and locate the relevant lines independently before selecting.',
          stretch: 'Students write a brief explanation of why alternative selections would not be awarded marks, linking to precision of focus.',
        },
        resources: [
          'Travel writing extract (displayed and printed)',
          'Q1 practice questions (two questions)',
          'Mark scheme for peer-checking',
        ],
      },
      {
        title: 'Practising Q2 — Own Words Technique',
        duration: '25 minutes',
        instructions:
          'Introduce the four-step Q2 method: (1) Read the relevant section. (2) List five or six thoughts/feelings the writer expresses. (3) Select your four strongest. (4) Write each as a clear paraphrase sentence. Model this live using a Victorian memoir extract (approximately 150 words) describing a writer\'s first visit to London. Think aloud to show the paraphrasing process: "insufferable crowds" becomes "the writer found the sheer number of people overwhelming." Students independently apply the same four-step method to a second extract — a modern travel journalist describing a flight delay. After 12 minutes of independent writing, students compare responses with a partner and highlight where they used the text\'s words rather than their own. Class review: teacher annotates two student responses on the visualiser, praising strong paraphrase and correcting lifted phrases.',
        differentiation: {
          support: 'Provide the extract with key phrases circled and a synonym bank; students use the synonyms to construct paraphrase sentences.',
          core: 'Students apply the four-step method independently with no scaffolding beyond the method prompt.',
          stretch: 'Students rank their four points from most obvious to most inferential and explain why the inferential points demonstrate deeper reading.',
        },
        resources: [
          'Victorian memoir extract (modelled)',
          'Modern travel journalism extract (student practice)',
          'Synonym bank (support scaffold)',
          'Four-step Q2 method card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Live Mark-Scheme Comparison',
      duration: '7 minutes',
      instructions:
        'Display two Q2 responses to the travel journalism extract — one strong (four distinct paraphrased points), one weak (two points, mostly copied). Students annotate the weak response on mini-whiteboards to improve it. Class discussion: what exactly makes a point "distinct"? How do you know if you have truly paraphrased? Students set a personal target for their next Q2 attempt.',
      differentiation: {
        support: 'Provide sentence starters for improving the weak response: "The writer felt..." / "The writer was concerned by..." / "The writer seemed to...".',
        core: 'Students rewrite the weak response in full before comparing with a partner.',
        stretch: 'Students identify the maximum marks the weak response could receive and justify their judgement with reference to the mark scheme criteria.',
      },
    },
    homework:
      'Find a newspaper or magazine article of at least 300 words. Write a Q2-style response (four points in your own words) about the writer\'s thoughts and feelings on their topic. Label each point 1–4 and underline where you have paraphrased a specific part of the text.',
    worksheetQuestions: [
      {
        question: 'Read the following extract. Question 1: From lines 3–6, select two words or phrases that suggest the writer found the journey difficult.\n\n"The road wound endlessly upward, a punishing series of switchbacks that left our legs burning. Each step felt like a small defeat. The altitude had stripped the air of any useful oxygen, and the cold gnawed at my fingers through three pairs of gloves."',
        lines: 3,
        modelAnswer:
          '"punishing" and "small defeat" — or any two of: "punishing series of switchbacks," "legs burning," "small defeat," "stripped the air," "gnawed at my fingers." Precise, brief selections that directly answer "difficult journey."',
        marks: 2,
      },
      {
        question: 'Using the same extract, answer this Question 2: What are the writer\'s thoughts and feelings about the journey? Write your answer in your own words. (4 marks)',
        lines: 8,
        modelAnswer:
          'The writer finds the physical effort of climbing deeply demanding, as the unrelenting uphill path exhausted them (1). They experienced a sense of repeated failure, feeling that each step represented a loss rather than progress (1). The lack of adequate oxygen at high altitude made breathing a struggle, leaving them physically depleted (1). The extreme cold caused persistent discomfort that even substantial clothing could not prevent (1).',
        marks: 4,
      },
      {
        question: 'Explain the difference between retrieval and inference. Give one example of each using the extract above.',
        lines: 5,
        modelAnswer:
          'Retrieval is when information is directly stated in the text. Example: the writer wore three pairs of gloves (stated explicitly). Inference is when information is implied and must be deduced. Example: the writer must have been on a mountainous route, implied by the reference to switchbacks and altitude (not directly stated but strongly suggested).',
        marks: 4,
      },
      {
        question: 'A student writes this Q2 answer: "The writer says the road wound endlessly upward and each step felt like a small defeat." Explain why this response would score low marks.',
        lines: 4,
        modelAnswer:
          'The response lifts the text\'s words directly rather than paraphrasing them. Q2 requires the student to demonstrate comprehension by expressing ideas in their own words — copying phrases shows only that the student can locate text, not that they have understood it. The answer also only makes two points and does not clearly express the writer\'s thoughts and feelings as distinct ideas.',
        marks: 3,
      },
      {
        question: 'Rewrite the weak answer above as a full-mark Q2 response, using four distinct paraphrased points.',
        lines: 8,
        modelAnswer:
          'The writer felt that the path was relentlessly demanding, offering no respite as it continued to climb (1). They experienced a demoralising sense of defeat with every movement forward, suggesting the climb was mentally as well as physically exhausting (1). The reduced oxygen levels at altitude made breathing difficult and left the writer feeling physically depleted (1). Despite wearing multiple layers of gloves, the extreme cold continued to cause discomfort, indicating how harsh the conditions were (1).',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Emphasise that Q1 requires no explanation — students who write explanatory sentences are wasting precious time. One bullet per selection is ideal format.',
      'The "own words" requirement for Q2 is the single most common failure point — students confuse comprehension with retrieval. Use the live annotation in the plenary to make the distinction concrete.',
      'The travel journalism extract for Q2 practice should be approximately 150–200 words and contain at least six distinct thoughts or feelings to give students plenty to work with.',
      'Resist marking Q1 as "close enough" — precision in word/phrase selection is a key examiner criterion and needs to be modelled rigorously from the start.',
    ],
    targetedSkills: [
      'AO1 — Retrieval',
      'AO1 — Inference',
      'Paraphrasing and own-words technique',
      'Precise textual selection',
      'Distinguishing question requirements',
    ],
  },

  // ── Lesson 3: Q3 — Description Using Quotations (AO1) ────────────────────
  {
    id: 'y10lp1-03',
    title: 'Question 3 — Description with Embedded Quotations (AO1)',
    text: 'IGCSE English Language Paper 1',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Answer Question 3 (5 marks, AO1) by describing a topic supported by brief embedded quotations',
      'Select precise, short quotations (2–5 words) rather than lengthy lifted passages',
      'Embed quotations grammatically within own sentences using correct punctuation',
      'Identify five distinct points from a non-fiction text to secure full marks',
    ],
    successCriteria: [
      'I can write five separate point-plus-quotation statements in response to a Q3 question',
      'I can embed quotations within my own sentences using quotation marks correctly',
      'I can select quotations of 2–5 words rather than copying whole sentences',
      'I can ensure each of my five points is genuinely distinct rather than repeating the same idea',
    ],
    keywords: [
      'embedded quotation',
      'brief quotation',
      'quotation marks',
      'description',
      'supported point',
      'distinct',
      'paraphrase',
      'AO1',
      'evidence',
      'textual reference',
    ],
    starterActivity: {
      title: 'Good Quote, Bad Quote',
      duration: '8 minutes',
      instructions:
        'Display four pairs of Q3-style sentences, each claiming to describe the same point from a text — one with a strong embedded quotation (precise, brief, grammatically integrated) and one with a weak quotation (too long, or a standalone block quote, or incorrectly punctuated). Students rank each pair A (better) or B (weaker) on their mini-whiteboards and be ready to explain why. Teacher uses the feedback to establish the three criteria for a strong Q3 quotation: brief, embedded, correctly punctuated.',
      differentiation: {
        support: 'Provide the three criteria on a card before the activity so students can apply them as a checklist.',
        core: 'Students rank without any criteria card, deriving the principles from discussion.',
        stretch: 'Students rewrite the weaker sentence in each pair to improve it before the teacher reveals the discussion.',
      },
      resources: ['Good Quote / Bad Quote slide (four pairs)', 'Mini-whiteboards', 'Criteria card (support scaffold)'],
    },
    mainActivities: [
      {
        title: 'Embedding Quotations — Modelled and Guided Practice',
        duration: '20 minutes',
        instructions:
          'Teacher models three ways to embed a quotation in a Q3 sentence using a displayed autobiography extract (a writer describing a childhood home): (1) noun phrase + quotation ("the house is described as…"); (2) verb + quotation ("the writer recalls that the garden was…"); (3) adjective/adverb integration ("the atmosphere is presented as intensely quiet"). Students practise by transforming five standalone quotations from the extract into embedded sentences. Pairs share and teacher annotates two examples on the board, showing how to upgrade imprecise (too-long) quotations.',
        differentiation: {
          support: 'Provide sentence frames: "The writer describes the [topic] as \'[quotation]\', which suggests…" for each of the five examples.',
          core: 'Students construct fully original embedded sentences without frames, varying their embedding technique.',
          stretch: 'Students choose which of the three embedding techniques is most appropriate for each quotation and justify their choice in a footnote.',
        },
        resources: [
          'Autobiography extract (printed and displayed)',
          'Five standalone quotations card',
          'Sentence frame sheet (support)',
        ],
      },
      {
        title: 'Full Q3 Response — Timed Practice',
        duration: '22 minutes',
        instructions:
          'Students read a new 250-word extract — a journalist\'s description of a remote fishing village — and then answer a Q3 question under timed conditions: "Describe what the writer tells us about the village. Use brief quotations from the text to support your answer. (5 marks)." Remind students: 7 minutes maximum, five distinct points, brief embedded quotations. After 7 minutes of writing, students swap with a partner and peer-assess using the three criteria (distinct, brief, embedded). Teacher selects two responses — one scoring 3/5 and one scoring 5/5 — to annotate whole-class.',
        differentiation: {
          support: 'Highlight six relevant sentences in the extract and instruct students to choose five; students focus on embedding rather than scanning.',
          core: 'Students scan the full extract and independently select their five best points.',
          stretch: 'Students aim to capture the range of the writer\'s description (physical setting, atmosphere, people, language choices) rather than clustering around one aspect.',
        },
        resources: [
          'Fishing village extract (printed)',
          'Q3 timed question slide',
          'Peer-assessment criteria card',
          'Highlighted extract version (support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Five-Point Challenge',
      duration: '5 minutes',
      instructions:
        'Teacher displays a previously unseen short paragraph (100 words) on the board. Students have 3 minutes to write five distinct embedded-quotation points that describe the topic of the paragraph. This is a low-stakes speed challenge. Teacher polls: "Who has five genuinely distinct points?" and cold-calls two students to read theirs aloud. Class votes on whether each point is truly distinct from the others.',
      differentiation: {
        support: 'The short paragraph used in the plenary can be the same topic as the main activity extract to lower cognitive load.',
        core: 'Use a completely fresh paragraph on a different topic.',
        stretch: 'Students must ensure their five points come from five different sentences in the paragraph (no doubling up on source sentences).',
      },
    },
    homework:
      'Write a full Q3 response (5 marks) to this question: "Describe what the writer tells us about the weather conditions." Use the extract your teacher provides. Write five embedded-quotation points. Time yourself — aim to finish in 7 minutes. Write your actual time taken at the top of your response.',
    worksheetQuestions: [
      {
        question: 'Explain what is meant by an "embedded quotation." Why is embedding better than using a block or standalone quotation in Q3?',
        lines: 4,
        modelAnswer:
          'An embedded quotation is one that is woven into your own sentence so that it reads grammatically as part of what you have written, rather than being dropped in as a separate chunk. Embedding is better in Q3 because it demonstrates that you can control the text evidence and integrate it fluently into your description, rather than simply copying passages.',
        marks: 3,
      },
      {
        question: 'Transform this standalone quotation into an embedded sentence:\n"The streets were crammed with noise and movement, the air thick with the scent of frying food."\nYou must use only 3–5 words from the original.',
        lines: 3,
        modelAnswer:
          'The writer describes the streets as "crammed with noise and movement," conveying a sense of overwhelming sensory stimulation. (Or: The air is evoked through the detail of the "scent of frying food," adding an atmospheric quality to the scene.)',
        marks: 2,
      },
      {
        question: 'A student writes these two Q3 points: (A) "The market is described as loud." (B) "The market is shown to be noisy and busy." Explain why these two points would only earn one mark between them.',
        lines: 4,
        modelAnswer:
          'Both points make the same observation — that the market is loud/noisy. Q3 mark schemes award marks for distinct points, meaning each point must capture a different piece of information. Rephrasing the same idea in different words does not earn an additional mark; both points are awarded a single mark collectively.',
        marks: 3,
      },
      {
        question: 'Read this extract and write a full Q3 response (5 marks): "Describe what the writer tells us about the forest."\n\n"The forest swallowed us whole. Ancient oaks arched overhead, their bark silver-grey and fissured like old skin. Underfoot, the ground was soft and yielding, a carpet of decomposing leaves that muffled our footsteps entirely. Light filtered through in thin, pale shafts, doing little to warm the cool, damp air. Somewhere above us, an unseen bird called repeatedly, a thin, lonely sound that seemed to amplify the silence rather than break it."',
        lines: 12,
        modelAnswer:
          'The forest is presented as all-encompassing, with the writer describing it as swallowing them "whole," suggesting they were completely enveloped by it (1). The trees are shown to be ancient and imposing, with oaks that have "bark silver-grey and fissured like old skin," conveying their great age (1). The ground is described as "soft and yielding," making it feel unstable and muffled underfoot (1). The light within the forest is weak and ineffective, filtering through in "thin, pale shafts" that could not dispel the cold or dampness (1). The atmosphere is one of intense, paradoxical silence, reinforced by a bird call described as a "thin, lonely sound" that deepened rather than broke the quiet (1).',
        marks: 5,
      },
      {
        question: 'Why is it important to answer Q3 in no more than 7 minutes, even if you feel you could write more?',
        lines: 4,
        modelAnswer:
          'Q3 is worth only 5 marks, and once you have written five distinct supported points you have secured full marks. Spending extra time does not earn additional credit and directly reduces the time available for Q4 (12 marks) and Q5 (22 marks), which together account for 34 of the 45 Section A marks. Time management is critical to maximising overall Section A performance.',
        marks: 2,
      },
    ],
    teacherNotes: [
      'The key misconception to address in this lesson is that more writing = more marks. Q3 rewards precision and distinctness, not length.',
      'Peer-assessment works particularly well for this question because students can readily see whether quotations are brief and embedded when reading a classmate\'s work.',
      'Pre-select the two exemplar responses for the whole-class annotation before the lesson — choose one that has clearly distinct points and one where two points overlap.',
      'The fishing village extract should be relatively dense with descriptive detail to ensure all students can find five qualifying points.',
    ],
    targetedSkills: [
      'AO1 — Supported description',
      'Embedding quotations',
      'Precise textual selection',
      'Identifying distinct points',
      'Exam timing discipline',
    ],
  },

  // ── Lesson 4: Q4 — Language and Structure Analysis (AO2) ─────────────────
  {
    id: 'y10lp1-04',
    title: 'Question 4 — Language and Structure Analysis (AO2)',
    text: 'IGCSE English Language Paper 1',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Analyse how writers use language for effect using precise literary and linguistic terminology (AO2, 12 marks)',
      'Identify structural choices (openings, endings, paragraph sequencing, contrast) and explain their effects',
      'Write analytical responses using the P-E-E-E pattern (Point, Evidence, Effect, Extended effect)',
      'Move beyond labelling techniques towards explaining the effect on the reader',
    ],
    successCriteria: [
      'I can identify a language technique, support it with a brief embedded quotation, and explain its effect',
      'I can identify at least one structural choice and explain why the writer made it',
      'I can write in the analytical register: "The writer uses… to suggest… This creates… because…"',
      'I can write a Q4 response of sufficient depth in approximately 15 minutes',
    ],
    keywords: [
      'AO2',
      'language analysis',
      'structure',
      'technique',
      'effect',
      'metaphor',
      'simile',
      'personification',
      'semantic field',
      'sentence structure',
      'repetition',
      'contrast',
      'P-E-E-E',
      'analytical register',
    ],
    starterActivity: {
      title: 'Technique or No Technique?',
      duration: '7 minutes',
      instructions:
        'Display six short quotations on the board. Three contain identifiable language techniques; three are neutral factual sentences with no notable technique. Students write on mini-whiteboards: (a) whether a technique is present, (b) the name of the technique if there is one, and (c) in one word, the effect it creates. Teacher reveals and discusses, reinforcing that naming a technique is the minimum — the analysis requires the effect. Collect and challenge any purely "technique-spotting" responses: "Saying \'this is a metaphor\' is not AO2 analysis."',
      differentiation: {
        support: 'Provide a terminology bank with definitions (metaphor, simile, personification, alliteration, semantic field, repetition, short sentence, rhetorical question).',
        core: 'Students work from memory; the terminology bank is available only to check after they have attempted their identification.',
        stretch: 'Students write a second effect for each technique — "alternatively, this could suggest…" — to demonstrate the ability to consider multiple interpretations.',
      },
      resources: ['Six quotations slide', 'Mini-whiteboards', 'Terminology bank (support scaffold)'],
    },
    mainActivities: [
      {
        title: 'Modelling P-E-E-E Language Analysis',
        duration: '20 minutes',
        instructions:
          'Teacher models a full analytical paragraph using a displayed extract from a 21st-century nature writing piece (Bill Bryson-style). Steps modelled: (1) State the technique precisely. (2) Embed a brief quotation. (3) Explain the immediate effect on the reader. (4) Extend the effect — what does this suggest about the writer\'s perspective, or what wider idea does it reinforce? Students annotate the modelled paragraph against the P-E-E-E structure. Teacher then models a structural observation: what is the effect of the extract opening with a specific detail rather than a general statement? Students practise with a guided response: teacher provides the Point and Evidence; students must write the Effect and Extended Effect independently for three analytical points.',
        differentiation: {
          support: 'Provide the P-E-E-E frame printed out with labels; students write into the frame, focusing on the Effect and Extended Effect halves.',
          core: 'Students write the complete P-E-E-E paragraph independently after the modelling, following the structure.',
          stretch: 'Students write two contrasting P-E-E-E paragraphs on the same extract and then write a sentence linking the two points thematically.',
        },
        resources: [
          'Nature writing extract (displayed and printed)',
          'Annotated model paragraph slide',
          'P-E-E-E framework card',
          'Guided practice sheet (Point + Evidence given, students complete Effect + Extended Effect)',
        ],
      },
      {
        title: 'Independent Q4 Timed Practice',
        duration: '22 minutes',
        instructions:
          'Students read a new extract — a piece of journalism about a volcanic eruption — and answer a Q4 question under timed conditions: "How does the writer use language and structure to convey the power and danger of the eruption? (12 marks)" Students have 15 minutes to write a response covering three analytical points (language) and one structural observation. After 15 minutes, teacher pauses the class and students self-assess: Have you named at least three techniques? Have you embedded quotations? Have you explained effects and extended them? Have you addressed structure? In the final 5 minutes, teacher annotates one student response on the visualiser using the AO2 mark scheme bands.',
        differentiation: {
          support: 'Provide a scaffolded response frame with paragraph starters: "The writer uses [technique] when describing…" and "In terms of structure, the writer…"',
          core: 'Students write independently and self-assess against the four-point checklist.',
          stretch: 'Students attempt a high-band response by integrating language and structure analysis within the same paragraph rather than treating them separately.',
        },
        resources: [
          'Volcanic eruption journalism extract (printed)',
          'Q4 question slide',
          'AO2 mark scheme band descriptors',
          'Scaffolded response frame (support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Upgrade the Paragraph',
      duration: '6 minutes',
      instructions:
        'Display a weak Q4 paragraph (technique labelled, no effect analysis). Students have 3 minutes to upgrade it by adding the Effect and Extended Effect. Pairs share their upgraded paragraph and class votes on which version would score highest. Teacher identifies the two or three choices that lift it into the top band.',
      differentiation: {
        support: 'Provide a stem for the Effect and Extended Effect: "This creates a sense of… because… Furthermore, this suggests that the writer views…"',
        core: 'Students write the full upgrade independently.',
        stretch: 'Students also improve the embedded quotation in the original weak paragraph to make it more precise.',
      },
    },
    homework:
      'Find a non-fiction extract of your choice (news article, travel writing, nature writing). Write a Q4-style response of three analytical paragraphs (language techniques) and one structural observation. Total word count: approximately 250–300 words. Aim to spend 15 minutes on this task to build exam pacing.',
    worksheetQuestions: [
      {
        question: 'What is the difference between labelling a technique and analysing it? Explain using an example.',
        lines: 5,
        modelAnswer:
          'Labelling simply names the technique: "This is a metaphor." Analysis explains the effect on the reader and what it communicates about the writer\'s perspective: "The writer describes the city as \'a machine without mercy,\' using a dehumanising metaphor to suggest the city is indifferent and relentless, which creates a sense of the individual\'s powerlessness within modern urban life."',
        marks: 3,
      },
      {
        question: 'Identify two language techniques in this sentence and explain the effect of each:\n"The wave rose like a vengeful god, dark and ancient, and then it fell upon us."',
        lines: 8,
        modelAnswer:
          'The writer uses a simile, comparing the wave to "a vengeful god," which creates a sense of unstoppable, wrathful power — as if the sea has intentional malice and cannot be reasoned with, making it deeply threatening. The writer also uses the adjectives "dark and ancient" as a paired description, with the semantic resonance of age and darkness suggesting something primordial and unknowable, amplifying the wave\'s terror beyond the merely physical.',
        marks: 6,
      },
      {
        question: 'A Q4 question asks you to analyse "language and structure." Write one analytical point about structure for this extract: the extract opens with a close-up description of a single bird before widening to describe an entire forest in the final paragraph.',
        lines: 5,
        modelAnswer:
          'The writer employs a structural zoom technique, moving from a specific, intimate detail (the single bird) to a broad, panoramic view (the whole forest). This creates a sense of scale and wonder — the reader is first anchored in the immediate and personal before the full extent of the natural world is revealed, which amplifies the sense of awe and reinforces the writer\'s theme of nature\'s vastness.',
        marks: 4,
      },
      {
        question: 'Write a full P-E-E-E analytical paragraph for the quotation: "The hospital corridor stretched out ahead of him, a white, relentless infinity."',
        lines: 8,
        modelAnswer:
          'The writer uses a metaphor, describing the hospital corridor as "a white, relentless infinity," comparing the physical space to something without end or boundary. This creates an oppressive, claustrophobic effect despite the word "infinity" suggesting endlessness — the reader understands that the character feels trapped rather than free. The extended effect is to convey the character\'s psychological state of dread and helplessness: the "white" palette suggests a clinical sterility devoid of warmth, while "relentless" implies an unfeeling force that will not stop or yield, positioning the hospital as an adversary rather than a place of healing.',
        marks: 5,
      },
      {
        question: 'Which Q4 band would you expect a response to reach if it only labels techniques without explaining effects? Explain why.',
        lines: 4,
        modelAnswer:
          'A response that only labels techniques without explaining effects would typically fall in the lower bands (Band 1 or 2). This is because AO2 requires analysis — an understanding of how language creates effects on the reader and reveals the writer\'s intentions. Simply identifying a metaphor demonstrates awareness of technique but not the ability to explore its function, which is the core requirement of the higher mark bands.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'The single most important lesson in this session is the shift from technique-spotting to effect-analysis. Use student responses during timed practice to highlight this live.',
      'The P-E-E-E label is a useful scaffold, but warn students that in top-band answers the four elements are often woven into a single fluent paragraph rather than four discrete sentences.',
      'Structure is frequently underweighted by students. Explicitly prompt them to include at least one structural observation before they submit their Q4 attempt.',
      'Have a list of 8–10 tier-2 and tier-3 literary terms on display throughout this lesson for students who struggle to name techniques.',
    ],
    targetedSkills: [
      'AO2 — Language analysis',
      'AO2 — Structural analysis',
      'P-E-E-E analytical writing',
      'Precise terminology',
      'Effect and extended effect reasoning',
    ],
  },

  // ── Lesson 5: Q5 — Comparing Writers' Perspectives (AO3) ─────────────────
  {
    id: 'y10lp1-05',
    title: 'Question 5 — Comparing Writers\' Perspectives and Attitudes (AO3)',
    text: 'IGCSE English Language Paper 1',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Compare how two writers present their ideas, perspectives, and attitudes on a shared theme (AO3, 22 marks)',
      'Use comparative discourse markers fluently (whereas, in contrast, similarly, both writers, however)',
      'Integrate quotations from both texts within a single comparative paragraph',
      'Structure a Q5 response as a sustained comparative essay rather than separate analyses',
    ],
    successCriteria: [
      'I can identify the main perspective or attitude of each writer towards the shared topic',
      'I can write a comparative paragraph that refers to both texts in the same paragraph',
      'I can use at least three different comparative discourse markers accurately',
      'I can write a Q5 response that addresses both similarities and differences in perspective',
    ],
    keywords: [
      'AO3',
      'comparison',
      'perspective',
      'attitude',
      'viewpoint',
      'discourse marker',
      'contrast',
      'similarity',
      'sustained comparison',
      'both writers',
      'whereas',
      'however',
    ],
    starterActivity: {
      title: 'Spot the Comparison Technique',
      duration: '7 minutes',
      instructions:
        'Display four short comparative paragraphs on the board. Two are "sequential" (Text A analysis, then Text B analysis, never linked). Two are "integrated" (both texts discussed within the same sentence or paragraph, with a comparison drawn). Students must identify which is which and explain why integrated comparison is rewarded more highly. Teacher establishes the core principle: AO3 rewards comparison, not two separate analyses placed next to each other.',
      differentiation: {
        support: 'Highlight the discourse markers in the integrated paragraphs to make the comparison structure visible.',
        core: 'Students identify and explain the distinction without any highlighting.',
        stretch: 'Students rewrite one sequential paragraph as an integrated comparison.',
      },
      resources: ['Four paragraph comparison display slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Building a Comparative Toolkit',
        duration: '15 minutes',
        instructions:
          'Teacher introduces 12 comparative discourse markers in four categories: contrast (whereas, while, however, by contrast, unlike), similarity (similarly, likewise, both writers, in the same way, equally), degree (even more so than, to a lesser extent than), and shift (yet, nevertheless, despite this). Students copy the toolkit and then complete a gap-fill activity: six comparative sentences with blanks where the discourse marker should be. After checking the gap-fill in pairs, students practise by writing two original comparison sentences about two writers whose viewpoints have been described in a brief summary on the board — one sentence showing a contrast, one showing a similarity.',
        differentiation: {
          support: 'Provide a word bank within the gap-fill activity so students select rather than recall markers.',
          core: 'Students complete the gap-fill from the full toolkit and then write original sentences from memory.',
          stretch: 'Students write a mini-paragraph (3–4 sentences) that uses contrast and similarity markers within the same continuous piece of writing.',
        },
        resources: [
          'Comparative discourse marker toolkit card',
          'Gap-fill activity sheet',
          'Two-writer summary (for original sentence practice)',
        ],
      },
      {
        title: 'Q5 Structured Response Practice',
        duration: '25 minutes',
        instructions:
          'Provide students with two short extracts on the theme of city life: Extract A from a 19th-century diarist arriving in London for the first time (excited, overwhelmed), Extract B from a 21st-century journalist writing about urban stress (negative, nostalgic for nature). Teacher models the opening two paragraphs of a Q5 response: paragraph 1 establishes both writers\' overall perspectives using one embedded quotation per text; paragraph 2 makes a detailed comparison of one shared aspect using two quotations and a contrast marker. Students then independently write the next two paragraphs, each covering a different comparative point. After 18 minutes of writing, they highlight every comparative discourse marker used. Target: at least four discourse markers across their two paragraphs.',
        differentiation: {
          support: 'Provide a Q5 paragraph scaffold: "Writer A and Writer B both… However, while Writer A [quotation] suggests… Writer B [quotation] implies that…"',
          core: 'Students write independently using the modelled opening as a structural guide.',
          stretch: 'Students write a concluding paragraph that synthesises both writers\' overall perspectives and considers why the time period or context might explain the differences.',
        },
        resources: [
          'City life Extract A (19th-century diarist) printed',
          'City life Extract B (21st-century journalist) printed',
          'Q5 modelled paragraphs 1 and 2 (displayed)',
          'Q5 paragraph scaffold (support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Mark-Scheme Band Sorting',
      duration: '8 minutes',
      instructions:
        'Display three Q5 responses to the city life texts — Band 2 (sequential, no comparison markers), Band 3 (some comparison, mostly separated), Band 4 (sustained integrated comparison with perceptive perspective analysis). Students rank them in order of quality and predict the mark. Teacher reveals the marks and reads the mark scheme band descriptors aloud. Students write one thing they will do differently in their next Q5 attempt.',
      differentiation: {
        support: 'Provide the AO3 band descriptors on a card so students can match each response to a descriptor rather than ranking from instinct.',
        core: 'Students rank and predict marks before seeing the descriptors.',
        stretch: 'Students annotate all three responses to identify the precise moment where each one moves up or is held back from the next band.',
      },
    },
    homework:
      'Using the two city life extracts from the lesson, write a full Q5 response (22 marks). Aim for 350–400 words, at least five integrated comparative paragraphs, and a range of discourse markers. Time yourself — target 30 minutes.',
    worksheetQuestions: [
      {
        question: 'Explain the difference between a "sequential" Q5 response and an "integrated" Q5 response. Which scores more highly and why?',
        lines: 5,
        modelAnswer:
          'A sequential response analyses Text A fully, then Text B fully, with comparison only implied by placing them next to each other. An integrated response compares the two texts within each paragraph, making explicit links, contrasts, or similarities. Integrated comparison scores more highly because AO3 tests the skill of comparison itself — examiners want to see the student drawing active connections between texts, not simply describing each one.',
        marks: 4,
      },
      {
        question: 'Write a comparative opening paragraph for a Q5 response on the theme of "the natural world," using these two perspectives: Writer A finds nature calming and restorative; Writer B finds it threatening and indifferent. Use at least two discourse markers.',
        lines: 8,
        modelAnswer:
          'Both writers engage with the natural world as a powerful force, yet their perspectives on that power could not be more different. Writer A presents nature as a source of healing, describing the countryside as "a green remedy for the wounded mind," which suggests a deeply positive, almost medicinal relationship with the natural landscape. Writer B, by contrast, portrays nature as hostile and uncaring, comparing the forest to "an indifferent machine that grinds down everything that enters it" — here, the dehumanising metaphor strips nature of any nurturing quality. Whereas Writer A positions the human being as a grateful recipient of nature\'s gifts, Writer B presents the individual as entirely at nature\'s mercy, powerless against its cold indifference.',
        marks: 6,
      },
      {
        question: 'List six comparative discourse markers and place each in a category (contrast / similarity / degree / shift).',
        lines: 6,
        modelAnswer:
          'Contrast: whereas, by contrast. Similarity: similarly, both writers. Degree: even more so than. Shift: nevertheless. (Accept any six from the full toolkit with correct categorisation.)',
        marks: 3,
      },
      {
        question: 'A student\'s Q5 response refers to both texts but only in separate paragraphs — never within the same sentence or paragraph. What band would this likely fall into, and what must the student do to improve?',
        lines: 5,
        modelAnswer:
          'This would likely fall into Band 2 or 3, as it shows awareness of both texts but does not demonstrate the comparison skill AO3 requires. To improve, the student must integrate both texts within individual paragraphs, using discourse markers to explicitly draw comparisons — identifying how the writers are similar, different, or how one extends/challenges the point made by the other.',
        marks: 4,
      },
      {
        question: 'Q5 is worth 22 marks. How long should you spend on it, and how many comparative points should you aim to make?',
        lines: 3,
        modelAnswer:
          'Approximately 30 minutes should be spent on Q5. Aim for at least four to five integrated comparative points, with each paragraph covering a different aspect of the shared theme. This is the highest-tariff question and demands a sustained, multi-paragraph response to reach the upper bands.',
        marks: 2,
      },
    ],
    teacherNotes: [
      'The most persistent error in Q5 is students writing "Text A, then Text B" rather than true comparison. The starter activity is designed to make this concrete before students attempt their own writing.',
      'The city life extracts should be chosen to have a clear thematic link but significantly different tones/perspectives — this makes comparison easier for less confident students.',
      'When modelling, deliberately use a variety of discourse markers (not just "however") to expand students\' comparative vocabulary.',
      'Q5 is worth almost a quarter of the total paper. It is worth spending a full lesson on this question alone and returning to it in Lesson 9 (mock paper) and Lesson 10 (strategy review).',
    ],
    targetedSkills: [
      'AO3 — Comparative analysis',
      'AO3 — Perspective and attitude identification',
      'Integrated comparison writing',
      'Discourse marker fluency',
      'Sustained analytical response',
    ],
  },

  // ── Lesson 6: Unseen Non-Fiction Text Practice ────────────────────────────
  {
    id: 'y10lp1-06',
    title: 'Unseen Non-Fiction Text Practice — Reading Strategies',
    text: 'IGCSE English Language Paper 1',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Apply active reading strategies to an unseen non-fiction text',
      'Annotate an unseen text efficiently under timed conditions to support later answering',
      'Practise reading a range of non-fiction genres: journalism, autobiography, travel writing, 19th-century prose',
      'Identify the writer\'s perspective, tone, purpose, and audience within five minutes of first reading',
    ],
    successCriteria: [
      'I can read and annotate a 400-word unseen non-fiction text productively in five minutes',
      'I can identify the writer\'s perspective and tone and express them in a single sentence',
      'I can distinguish between the genre characteristics of journalism, autobiography, and travel writing',
      'I can use my annotations to answer Q1–Q3 more accurately and efficiently',
    ],
    keywords: [
      'unseen text',
      'annotation',
      'active reading',
      'perspective',
      'tone',
      'purpose',
      'audience',
      'non-fiction',
      'genre',
      'inference',
      'context',
      'first reading',
    ],
    starterActivity: {
      title: 'Genre Identification Speed Round',
      duration: '7 minutes',
      instructions:
        'Display five short extracts (one sentence to one paragraph each) from different non-fiction genres on the board, one at a time. Students identify the genre (journalism, autobiography, travel writing, 19th-century non-fiction, speech, letter) and write their answer on mini-whiteboards. Teacher takes feedback and discusses the key genre signals: first-person memoir voice (autobiography), direct address and formal register (speech/letter), present-tense descriptive observation (travel writing), third-person factual reporting (journalism). Reinforce that recognising genre in the first reading helps students identify the writer\'s purpose and approach quickly.',
      differentiation: {
        support: 'Provide a genre signals reference card with one key characteristic per genre.',
        core: 'Students identify genre from memory and justify with one textual feature.',
        stretch: 'Students identify the genre and describe the implied audience and purpose for each extract.',
      },
      resources: ['Five genre extracts slide', 'Mini-whiteboards', 'Genre signals card (support)'],
    },
    mainActivities: [
      {
        title: 'Modelling Active Annotation — First Reading Strategy',
        duration: '18 minutes',
        instructions:
          'Teacher models a live first reading of a 350-word unseen text (a Victorian naturalist\'s account of observing a bird of prey). Think aloud to demonstrate annotation decisions: underline the writer\'s key perspectives; circle strong language choices that might be useful for Q4; place a question mark next to anything unclear; write a one-word tone label at the end of each paragraph. Show students how to annotate in no more than 5 minutes. After the model, students are given a second unseen text (a 21st-century journalist writing about extreme sports) and must annotate it independently in exactly 5 minutes using the same approach. Pairs compare annotations and discuss: what did they notice that their partner missed?',
        differentiation: {
          support: 'Provide a printed annotation guide with five prompts: "What is the writer\'s view?", "What language stands out?", "What is the tone here?", "What is puzzling?", "What is the purpose of this paragraph?"',
          core: 'Students annotate freely but aim to address the same five dimensions as the support guide.',
          stretch: 'Students add a sixth annotation type: "How might this be compared to a text about a different perspective on the same subject?"',
        },
        resources: [
          'Victorian naturalist text (printed, for modelling)',
          'Extreme sports journalism text (printed, for student practice)',
          'Annotation guide card (support)',
        ],
      },
      {
        title: 'From Annotation to Answer — Q1–Q3 Linked Practice',
        duration: '25 minutes',
        instructions:
          'Using the extreme sports journalism text, students answer three questions that mirror Q1, Q2, and Q3 from the real paper. Q1 (2 mins): "From lines 4–8, select two words or phrases that suggest the sport is dangerous." Q2 (5 mins): "What are the writer\'s thoughts and feelings about extreme sports? Write in your own words." Q3 (7 mins): "Describe what the writer tells us about the appeal of extreme sports. Use brief quotations." Students write in exam conditions. Teacher circulates and spots common errors. At 14 minutes, teacher pauses the class and asks students to check: "Have you answered in your own words for Q2?" and "Are your Q3 quotations brief and embedded?" Students self-correct before finishing. Teacher leads whole-class mark-scheme review in the final 5 minutes.',
        differentiation: {
          support: 'Allow support students to have their annotation guide available during the timed practice.',
          core: 'Students work with annotations only; the annotation guide is removed.',
          stretch: 'Students complete Q1–Q3 in exactly 14 minutes (the time-proportional target) and then write a reflection on how their annotations helped.',
        },
        resources: [
          'Extreme sports journalism text (student copies)',
          'Q1–Q3 question slide',
          'Mark scheme for review',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Annotation Audit',
      duration: '5 minutes',
      instructions:
        'Students review their annotations on the extreme sports text and assess how useful they were. Did an annotation help them answer a question? Did they miss anything they wish they had annotated? Students write two sentences: "My annotations helped me when…" and "Next time I will also annotate…" Collect these as a formative assessment of students\' reading metacognition.',
      differentiation: {
        support: 'Provide the sentence starters printed on paper for students to complete.',
        core: 'Students write their reflection independently.',
        stretch: 'Students write a third sentence: "The most important thing to annotate quickly in an unseen text is… because…"',
      },
    },
    homework:
      'Source an unseen non-fiction extract of approximately 400 words (newspaper, magazine, travel writing). Read and annotate it in 5 minutes. Then write answers to self-set Q1, Q2, and Q3 questions. Submit the annotated extract and your three answers.',
    worksheetQuestions: [
      {
        question: 'What is an "unseen text" and why does the Edexcel IGCSE Paper 1 exam always use them in Section A?',
        lines: 4,
        modelAnswer:
          'An unseen text is a passage that the student has never studied before and cannot predict. Paper 1 always uses unseen texts in Section A to test transferable reading and analytical skills — the ability to engage with any non-fiction passage, not just texts that have been prepared in advance. This ensures the exam assesses genuine comprehension and analytical ability rather than memorised content.',
        marks: 3,
      },
      {
        question: 'List four non-fiction genres that might appear in Paper 1 Section A and give one key feature that identifies each.',
        lines: 6,
        modelAnswer:
          'Autobiography/memoir: written in first person, reflects on past events with personal emotional insight. Travel writing: vivid descriptive detail of places and experiences, often subjective and impression-based. Journalism: factual or opinion-based reporting, often with a clear viewpoint and accessible register. 19th-century non-fiction: more formal or elevated diction, longer and more complex sentence structures typical of the period.',
        marks: 4,
      },
      {
        question: 'Describe the "five-minute annotation" strategy in your own words. What are the four things you should mark on the text during your first reading?',
        lines: 6,
        modelAnswer:
          'The five-minute annotation strategy involves reading the unseen text actively and marking it quickly before attempting any questions. The four things to annotate are: (1) the writer\'s key perspectives and attitudes; (2) strong or unusual language choices that might be relevant to Q4; (3) the tone or mood at the end of each paragraph; (4) the purpose of each section (e.g. introducing a problem, describing an experience, arguing a case).',
        marks: 4,
      },
      {
        question: 'Read this short extract and write a one-sentence summary of the writer\'s perspective and tone:\n\n"I had never felt more utterly insignificant than standing at the edge of the Grand Canyon — not afraid, but clarified, as if the vastness had scoured away every petty worry I had carried into the desert with me."',
        lines: 3,
        modelAnswer:
          'The writer\'s perspective is that encountering natural grandeur can be psychologically liberating and perspective-giving; the tone is reflective, calm, and quietly awestruck.',
        marks: 2,
      },
      {
        question: 'Explain how annotating a text before answering Q1–Q3 saves time rather than wasting it.',
        lines: 4,
        modelAnswer:
          'Annotating before answering means relevant passages are already marked, so locating evidence for Q1 selection, Q2 paraphrase points, and Q3 quotations requires no additional searching. Without annotation, students re-read from scratch for each question, which is slower overall. The 5-minute investment in active annotation typically reduces total answering time for Q1–Q3 and also improves accuracy.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'The think-aloud annotation model is one of the most valuable activities in the unit — students rarely see an expert reader\'s live thought process and it demystifies what good reading looks like.',
      'Emphasise that annotation is a tool, not an end in itself. Students should annotate only what is useful, not underline whole paragraphs.',
      'The paired comparison of annotations is a valuable metacognitive activity. Students discover that different readers notice different things — this reassures weaker students and challenges stronger ones to be more comprehensive.',
      'Consider choosing an extreme sports text that has a clear positive or negative viewpoint to make tone identification accessible; avoid texts where the perspective is ambiguous for this early practice session.',
    ],
    targetedSkills: [
      'Active reading and annotation',
      'Genre recognition',
      'Tone and perspective identification',
      'AO1 retrieval speed and accuracy',
      'Exam reading strategy',
    ],
  },

  // ── Lesson 7: Timed Paragraph Practice — Building Analytical Stamina ──────
  {
    id: 'y10lp1-07',
    title: 'Timed Paragraph Practice — Building Analytical Stamina',
    text: 'IGCSE English Language Paper 1',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Write analytical paragraphs for Q4 and Q5 under increasingly tight time conditions',
      'Maintain quality of analysis (embedded quotation, effect, extension) under pressure',
      'Identify and address personal weaknesses in analytical paragraph writing through repeated practice',
      'Develop stamina for sustained analytical writing across Q4 and Q5 in sequence',
    ],
    successCriteria: [
      'I can write a full P-E-E-E analytical paragraph in under 4 minutes',
      'I can write three Q4 paragraphs and one comparative Q5 paragraph in 20 minutes',
      'I can identify my most common error under timed conditions and apply a correction strategy',
      'My paragraphs under timed conditions retain embedded quotations and explained effects',
    ],
    keywords: [
      'analytical stamina',
      'timed writing',
      'P-E-E-E',
      'analytical paragraph',
      'Q4',
      'Q5',
      'embedded quotation',
      'effect',
      'comparative paragraph',
      'deliberate practice',
    ],
    starterActivity: {
      title: 'Two-Minute Paragraph Sprint',
      duration: '8 minutes',
      instructions:
        'Students are given a single quotation on the board from an autobiography extract: "The city pulsed with a feverish, exhausting energy, like a heart that could never afford to stop." Students write a complete analytical paragraph (P-E-E-E) in exactly 2 minutes. After the timer, they swap with a partner and check: (1) Is there an identified technique? (2) Is the quotation embedded? (3) Is an effect explained? (4) Is the effect extended? Partners award 0–4 marks. Class discusses: what did people manage to include? What got cut under pressure? Teacher establishes the target: the 2-minute sprint is a warm-up — the real goal is 4 minutes per paragraph in the exam.',
      differentiation: {
        support: 'Provide the technique (extended metaphor) and a sentence starter so students can begin immediately without spending time identifying the method.',
        core: 'Students identify the technique and write the paragraph without support.',
        stretch: 'Students must include both the immediate effect and a wider interpretation in their extended effect sentence.',
      },
      resources: ['Quotation displayed on board', 'Timer (displayed)', 'Mini-whiteboards or paper'],
    },
    mainActivities: [
      {
        title: 'Q4 Paragraph Ladder — Increasing Pressure',
        duration: '25 minutes',
        instructions:
          'Students receive a 300-word description of a polar exploration journey (rich in language techniques). They complete three rounds of timed paragraph writing, each on a different technique from the extract. Round 1: 6 minutes (relaxed). Round 2: 5 minutes (target pace). Round 3: 4 minutes (exam pace). Between each round, students self-assess against the four P-E-E-E criteria and note what they omitted. The goal is not to sacrifice quality for speed, but to discover that with practice the quality is maintained. After Round 3, teacher annotates one student\'s three paragraphs on the visualiser, showing how the analytical language should remain consistent across all three despite the time pressure.',
        differentiation: {
          support: 'Provide a partially completed P-E-E-E frame for Round 1 only; students work progressively towards independence in Rounds 2 and 3.',
          core: 'Students complete all three rounds independently with no scaffolding.',
          stretch: 'Students attempt to write their Round 3 paragraph integrating a structural observation alongside the language technique analysis.',
        },
        resources: [
          'Polar exploration extract (printed)',
          'Timer displayed on board',
          'P-E-E-E self-assessment checklist',
          'Partially completed frame (support, Round 1 only)',
        ],
      },
      {
        title: 'Q5 Comparative Paragraph — Timed Drafting',
        duration: '18 minutes',
        instructions:
          'Introduce a second short extract (150 words) — a modern nature documentary script about the same polar environment but from a very different perspective (scientific, detached, factual versus the explorer\'s personal and emotional account). Students must write two comparative Q5 paragraphs in 15 minutes: one paragraph on a contrast in tone or perspective, one paragraph on a similarity in subject matter but different treatment. Remind them to use discourse markers and to integrate both texts within each paragraph. After 15 minutes, students annotate their own work: circle every discourse marker and underline every embedded quotation. Count: aim for at least four discourse markers and four embedded quotations across two paragraphs.',
        differentiation: {
          support: 'Provide the opening clause for both paragraphs: "While the explorer conveys a deeply personal…, the documentary script presents…" Students build from there.',
          core: 'Students write independently with only the discourse marker toolkit visible.',
          stretch: 'Students write a brief linking sentence at the end of each paragraph that connects the comparison to a broader idea about why these writers had different perspectives.',
        },
        resources: [
          'Polar exploration extract (from previous activity)',
          'Nature documentary script extract (printed)',
          'Discourse marker toolkit card',
          'Opening clause sentence starters (support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Error Identification and Target Setting',
      duration: '4 minutes',
      instructions:
        'Students review all their timed writing from the lesson. They complete a brief self-audit: "Under time pressure, I tend to drop…" (embedded quotation / effect explanation / extended effect / discourse markers / structural analysis). Each student writes their personal target on an index card to keep with their revision notes.',
      differentiation: {
        support: 'Provide the audit as a checklist to tick rather than a free-write.',
        core: 'Students complete the audit independently and write their target.',
        stretch: 'Students write a micro-strategy (a specific action) for addressing their target, not just naming the problem.',
      },
    },
    homework:
      'Write one complete Q4 response (three analytical paragraphs + one structural point) for a text of your choice, timing yourself. Aim to complete it in 15 minutes. Annotate your own response afterwards: highlight every embedded quotation in yellow, every effect explanation in green, and every extended effect in blue. Submit the annotated response.',
    worksheetQuestions: [
      {
        question: 'Why is it important to practise analytical writing under timed conditions and not just in your own time?',
        lines: 4,
        modelAnswer:
          'Exam conditions add time pressure and stress that affect what students remember to include. Practising under time pressure reveals what skills are not yet automatic — for example, a student who always embeds quotations when writing calmly may drop them under pressure. Timed practice builds automaticity, so that embedded quotation and effect analysis become habits that function even when time is tight.',
        marks: 3,
      },
      {
        question: 'Write a complete P-E-E-E analytical paragraph for this quotation from a polar exploration account:\n"The ice was a vast, indifferent graveyard, strewn with the wreckage of previous expeditions."',
        lines: 8,
        modelAnswer:
          'The writer uses an extended metaphor, describing the ice as "a vast, indifferent graveyard," equating the frozen landscape with death and memorialisation. This immediately creates a sombre, threatening atmosphere, as the word "graveyard" implies that the polar environment is a place where things — and people — come to their end. The extended effect is reinforced by "indifferent," which personifies the ice as emotionally unmoved by human suffering, suggesting that the explorer faces not merely physical danger but an environment utterly without mercy or consciousness — a force that will not be moved by any human appeal.',
        marks: 6,
      },
      {
        question: 'Write a comparative paragraph for Q5 using these two perspectives:\n- Perspective A: the polar explorer finds the landscape awe-inspiring despite the danger\n- Perspective B: the documentary script treats the same landscape as a scientific subject',
        lines: 8,
        modelAnswer:
          'Both texts engage with the polar landscape as something extraordinary, yet their approaches could not be more different. The explorer conveys a sense of awed reverence, describing the ice as something that simultaneously threatens and inspires — an experience that is deeply personal and emotional. The documentary script, by contrast, strips the same environment of emotional resonance, presenting it as a subject for scientific measurement and observation rather than lived experience. Whereas the explorer\'s perspective positions the human being as vulnerable and emotionally affected by nature, the documentary script establishes a controlled distance, suggesting that understanding the polar world requires detachment rather than feeling.',
        marks: 6,
      },
      {
        question: 'After completing timed paragraph practice, a student realises she always forgets to explain the extended effect under time pressure. Suggest two strategies she could use to address this.',
        lines: 5,
        modelAnswer:
          'Strategy 1: Write the letters "P-E-E-E" at the top of every Q4 and Q5 answer as a visual prompt; use this as a checklist, ticking off each element as it is written. Strategy 2: Practise writing only the Effect and Extended Effect sentences for the first week of revision — building the habit of extension before attempting full paragraphs under time pressure.',
        marks: 4,
      },
      {
        question: 'How many analytical paragraphs should a strong Q4 response contain, and how much time should each paragraph take in the exam?',
        lines: 3,
        modelAnswer:
          'A strong Q4 response should contain three to four analytical paragraphs covering language techniques plus at least one structural observation. In the exam, each paragraph should take approximately 3–4 minutes, with Q4 allocated approximately 15 minutes in total.',
        marks: 2,
      },
    ],
    teacherNotes: [
      'The "paragraph ladder" activity (6 min, 5 min, 4 min) is deliberately pressure-increasing — the key insight is that quality should not drop significantly from Round 1 to Round 3 if the skills are internalised.',
      'The individual error identification in the plenary is one of the most high-value metacognitive activities in the unit. Students who know their specific failure point can address it in subsequent practice.',
      'Make the timer visible on the board throughout this lesson — the visible countdown changes student behaviour and builds exam readiness more effectively than a verbal count.',
      'Consider using a visualiser to annotate student work live rather than pre-prepared model answers — the authentic classroom example tends to be more motivating.',
    ],
    targetedSkills: [
      'Analytical writing under pressure',
      'P-E-E-E paragraph construction',
      'Comparative paragraph fluency',
      'Exam pacing and stamina',
      'Metacognitive self-assessment',
    ],
  },

  // ── Lesson 8: Checking and Editing Technique ──────────────────────────────
  {
    id: 'y10lp1-08',
    title: 'Checking and Editing Technique — Accuracy Under Exam Conditions',
    text: 'IGCSE English Language Paper 1',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Apply a systematic proofreading strategy to Section A and Section B exam responses',
      'Identify and correct the most common errors in IGCSE English Language writing (AO5)',
      'Improve AO5 marks by developing habits of accuracy in spelling, punctuation, and grammar',
      'Build confidence in making neat, exam-appropriate corrections during checking time',
    ],
    successCriteria: [
      'I can use a five-step proofreading checklist to review any exam response',
      'I can identify and correct subject-verb agreement errors, comma splices, and apostrophe misuse',
      'I can make neat corrections using a single cross-through and a rewritten version above',
      'I can apply the proofreading strategy in 8–10 minutes at the end of the paper',
    ],
    keywords: [
      'AO5',
      'proofreading',
      'editing',
      'spelling',
      'punctuation',
      'grammar',
      'sentence structure',
      'comma splice',
      'subject-verb agreement',
      'apostrophe',
      'accuracy',
      'checking time',
    ],
    starterActivity: {
      title: 'Error Hunt — Can You Spot Them All?',
      duration: '8 minutes',
      instructions:
        'Display a 100-word paragraph containing 10 deliberately planted errors (two spelling mistakes, two missing or misused apostrophes, two comma splices, two subject-verb disagreements, two wrong-word homophones: their/there/they\'re; affect/effect). Students read the paragraph and circle every error they can find on their copy within 3 minutes. After 3 minutes, partners compare findings. Teacher reveals all 10 errors and discusses each one. Survey: "Who found all 10? 8–9? 6–7?" Establish that most students miss at least 2–3 errors even in a short paragraph — which is why systematic proofreading matters.',
      differentiation: {
        support: 'Tell students the number of each error type in advance: "There are 2 spelling errors, 2 apostrophe errors, 2 comma splices…"',
        core: 'Students search without any category hints.',
        stretch: 'Students correct all 10 errors and write a brief explanation of the rule that applies to each one.',
      },
      resources: ['Error Hunt paragraph (printed, one per student)', 'Error Hunt answer slide'],
    },
    mainActivities: [
      {
        title: 'Five-Step Proofreading Strategy',
        duration: '20 minutes',
        instructions:
          'Teacher introduces and models the five-step proofreading strategy: (1) Read for meaning — does every sentence make sense? (2) Check punctuation — does every sentence end with a full stop or equivalent? Are apostrophes used correctly? (3) Check spelling — underline any word you are unsure of and correct it; focus especially on homophones and high-frequency errors. (4) Check grammar — subject-verb agreement, consistent tense, correct pronoun use. (5) Check ambition — have you used a range of sentence structures and vocabulary, or have you used the same construction throughout? Model this live on a displayed student-style transactional writing response that contains examples of all five problem areas. Then students apply all five steps to a second response (printed) that they have not seen before — they annotate and correct it in silence.',
        differentiation: {
          support: 'Provide a colour-coded version of the five steps (each step has a dedicated colour); students use the corresponding colour pen for each category of correction.',
          core: 'Students apply all five steps in sequence, using standard pen annotations.',
          stretch: 'Students not only correct the errors but rewrite any sentences they deem low-band (e.g. overly simple structures) to improve the AO5 range.',
        },
        resources: [
          'Model transactional writing response 1 (for modelling — annotated live)',
          'Student-practice response 2 (printed)',
          'Five-step proofreading card',
          'Colour-coded guide (support)',
        ],
      },
      {
        title: 'My Own Checking Weaknesses — Targeted Practice',
        duration: '22 minutes',
        instructions:
          'Students retrieve a piece of their own writing from a previous lesson or homework (Section B transactional writing). They apply the five-step proofreading strategy to their own work in full. After 12 minutes, students write a list of their three most common error types. In the final 10 minutes, teacher leads three mini-lessons on the most frequently identified class errors (likely to be comma splices, apostrophe misuse, and spelling). For each: teacher shows the error, explains the rule, provides two practice examples where students apply the rule, then confirms understanding.',
        differentiation: {
          support: 'Students focus on only two of the five proofreading steps (spelling and punctuation) for their own work review.',
          core: 'Students apply all five steps to their own work.',
          stretch: 'Students produce a personal "error dictionary" — a list of every error found with the rule and a corrected version noted alongside it for future revision.',
        },
        resources: [
          'Students\' own previous writing (from earlier lessons or homework)',
          'Five-step proofreading card',
          'Mini-lesson slides: comma splice, apostrophes, homophones',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Proofreading Speed Test',
      duration: '5 minutes',
      instructions:
        'Display a 50-word paragraph with five errors. Students apply the five-step strategy and correct all five in 3 minutes. Show the answer. Class discusses: which step would have caught each error? Students write the answer on their proofreading card so it is a personalised record of where each step is useful.',
      differentiation: {
        support: 'Label which category each error belongs to ("apostrophe error" etc.) so students can locate it by applying just that step.',
        core: 'Students find all five without any labelling.',
        stretch: 'Students must correct and then rewrite the entire paragraph to improve its AO5 range as well as its accuracy.',
      },
    },
    homework:
      'Write a 250-word Section B transactional writing response on a topic of your choice. Deliberately apply the five-step proofreading strategy after completing the draft. Annotate your own corrections on the page (cross-through and rewrite). Submit both your uncorrected draft and your corrected version so the teacher can see what you caught.',
    worksheetQuestions: [
      {
        question: 'Correct the following sentence and name the error type: "Their going to the match tomorrow, even though its raining."',
        lines: 3,
        modelAnswer:
          '"They\'re going to the match tomorrow, even though it\'s raining." Error types: homophone/apostrophe error ("their" should be "they\'re" — contraction of "they are") and missing apostrophe ("its" should be "it\'s" — contraction of "it is").',
        marks: 3,
      },
      {
        question: 'Identify and correct the comma splice in this sentence: "The writer describes the landscape in vivid detail, this creates a strong visual impression for the reader."',
        lines: 3,
        modelAnswer:
          'Comma splice: two independent clauses joined by a comma only. Correction options: (1) "The writer describes the landscape in vivid detail. This creates a strong visual impression for the reader." (2) "The writer describes the landscape in vivid detail, which creates a strong visual impression for the reader." (3) "The writer describes the landscape in vivid detail; this creates a strong visual impression for the reader."',
        marks: 3,
      },
      {
        question: 'List the five steps of the exam proofreading strategy in the correct order.',
        lines: 5,
        modelAnswer:
          '(1) Read for meaning — does every sentence make sense? (2) Check punctuation — full stops, apostrophes, commas, semicolons. (3) Check spelling — homophones, frequently misspelled words. (4) Check grammar — subject-verb agreement, tense consistency, pronoun use. (5) Check ambition — variety of sentence structure and vocabulary.',
        marks: 5,
      },
      {
        question: 'Proofread and correct this paragraph (four errors embedded):\n"The effects of climate change is becoming impossible to ignore. Scientists have warned for decades that are planet is warming, but many governments has failed to act. Their a growing number of young people who refuse to accept this inaction."',
        lines: 6,
        modelAnswer:
          '"The effects of climate change are becoming impossible to ignore." (subject-verb agreement: "effects… are") | "…that our planet is warming…" (homophone: "are" → "our") | "…many governments have failed to act." (subject-verb agreement: "governments have") | "There\'s a growing number of young people…" (homophone + apostrophe: "Their" → "There\'s" — or "There is").',
        marks: 4,
      },
      {
        question: 'A student uses exactly the same sentence structure throughout their entire Section B response: "I think that… I believe that… I feel that…" How does this affect their AO5 mark, and what could they do instead?',
        lines: 5,
        modelAnswer:
          'Repeating the same sentence structure throughout limits the AO5 mark because examiners reward a range of sentence structures — simple, compound, complex, and minor sentences used for effect. To improve, the student could vary their openings: start sentences with adverbials ("Increasingly, the evidence shows…"), use passive constructions ("It has been argued…"), employ rhetorical questions ("But can we truly afford to ignore this?"), or use inverted syntax for emphasis ("Never before has inaction seemed so costly.").',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The error hunt starter is deliberately humbling — it shows even attentive students miss errors when they are not searching systematically. This motivates students to value the five-step strategy.',
      'The personal error identification activity has maximum impact when students use their own writing. Be prepared for a range of error profiles across the class.',
      'The mini-lessons at the end of the main activity should be responsive — identify which three error types are most prevalent in the class and teach to those specifically, rather than following a fixed script.',
      'Emphasise that corrections in an exam should be made with a single neat cross-through, not scribbled out. Examiners can read neatly crossed-out text and students should not panic-delete anything useful.',
    ],
    targetedSkills: [
      'AO5 — Accuracy in spelling',
      'AO5 — Punctuation range and accuracy',
      'AO5 — Grammar and sentence variety',
      'Systematic proofreading method',
      'Error identification and correction',
    ],
  },

  // ── Lesson 9: Full Mock Paper Walkthrough ─────────────────────────────────
  {
    id: 'y10lp1-09',
    title: 'Full Mock Paper Walkthrough — Section A Under Exam Conditions',
    text: 'IGCSE English Language Paper 1',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Complete a full Section A mock paper (Q1–Q5, 45 marks) under near-examination conditions',
      'Apply the timing plan from Lesson 1 across all five questions in sequence',
      'Self-assess against mark scheme criteria after completing the mock',
      'Identify specific strengths and areas for improvement across all AOs tested in Section A',
    ],
    successCriteria: [
      'I can complete all five Section A questions within the allocated time (approximately 65 minutes)',
      'I can move on from each question when the time allocation is reached, even if I feel I could write more',
      'I can use the mark scheme to fairly assess my own responses',
      'I can identify which question and AO I need to prioritise in my remaining revision',
    ],
    keywords: [
      'mock paper',
      'examination conditions',
      'Section A',
      'timing',
      'self-assessment',
      'mark scheme',
      'AO1',
      'AO2',
      'AO3',
      'Q1 to Q5',
      'target marks',
      'revision priority',
    ],
    starterActivity: {
      title: 'Pre-Exam Mental Warm-Up',
      duration: '5 minutes',
      instructions:
        'Before distributing the mock paper, teacher leads a 3-minute verbal warm-up: rapid-fire recall of the structure, timing allocations, and one key technique for each question. "What does Q4 test?" "How long should Q5 take?" "What does AO3 reward?" "What is the difference between retrieval and inference?" This activates prior learning and settles the class into an exam mindset without adding cognitive load. Teacher then distributes the mock paper face down, sets out the timing rules clearly, and counts down from 3 before students turn it over.',
      differentiation: {
        support: 'Allow support students to have their timing plan card on the desk during the mock.',
        core: 'All notes away; the timing plan card is visible only to support students.',
        stretch: 'Stretch students set themselves an individual mark target for each question and write it on a sticky note on the front of their paper before beginning.',
      },
      resources: [
        'Mock Section A paper (printed, face down)',
        'Timing plan card (support students)',
        'Sticky notes (stretch target-setting)',
      ],
    },
    mainActivities: [
      {
        title: 'Mock Paper — Section A Under Timed Conditions',
        duration: '45 minutes',
        instructions:
          'Students complete Q1–Q5 of the mock Section A paper under examination conditions. Teacher writes the following time checkpoints on the board: "8 mins — Q1 done", "13 mins — Q2 done", "20 mins — Q3 done", "35 mins — Q4 done", "65 mins — Q5 done." At each checkpoint, teacher calls time and students mark their progress. Students who are behind are told to move on — the lesson must teach them to make this decision under pressure. Teacher circulates but does not help with content. In the final 5 minutes of the section, students are invited to go back and add to any answer if they have time, in priority order (Q5 first, then Q4).',
        differentiation: {
          support:
            'Allow support students additional printed line references for Q1 and Q2 (e.g. relevant lines highlighted on their copy of the text) to ensure they are not disadvantaged by reading speed.',
          core: 'All students work from unmarked text copies.',
          stretch: 'Stretch students aim to address structure as well as language in Q4 and to write a final synthesising paragraph for Q5 that identifies the key overall difference in perspective.',
        },
        resources: [
          'Mock Section A paper (two unseen non-fiction texts + five questions)',
          'Timer displayed on board',
          'Time checkpoint reminders on board',
        ],
      },
      {
        title: 'Mark Scheme Self-Assessment',
        duration: '5 minutes',
        instructions:
          'Distribute the mark scheme. Students have 5 minutes to self-assess Q1, Q2, and Q3 (where marking is more straightforward). They circle what they scored for each question and note one reason why a mark was or was not awarded. Teacher warns that Q4 and Q5 self-assessment will require more teacher guidance and will be completed in the following lesson (Lesson 10) or as a marked return.',
        differentiation: {
          support: 'Provide the mark scheme with bullet-pointed acceptable answers for Q1 and Q2 clearly listed so students can match their responses easily.',
          core: 'Students use the full mark scheme as issued.',
          stretch: 'Students annotate their Q3 response against the mark scheme criteria, not just counting points but assessing whether each point truly meets the description criteria.',
        },
        resources: ['Mark scheme (printed, one per student)'],
      },
    ],
    plenaryActivity: {
      title: 'Three Stars and a Target',
      duration: '5 minutes',
      instructions:
        'Students complete a structured reflection card: "Three things I did well in the mock" and "One target for my next attempt." These are collected by the teacher to inform feedback and the Lesson 10 strategy session. Teacher briefly shares two positive observations from circulating during the mock (e.g. "I saw many students moving on from Q3 at the right time today" or "Several responses had beautifully embedded quotations in Q4").',
      differentiation: {
        support: 'Provide a sentence-starter reflection card: "I am pleased with… because…", "I found Q___ most challenging because…", "My target is to…"',
        core: 'Students complete the free-write reflection independently.',
        stretch: 'Students write a self-mark prediction for Q4 and Q5 and briefly justify their prediction before seeing the teacher\'s mark.',
      },
    },
    homework:
      'Using your Q4 and Q5 responses from the mock, write a self-assessment commentary: for each question, state (a) how many marks you believe you scored and why, (b) one specific strength in your response, and (c) one specific way you could improve it. Bring this commentary to Lesson 10.',
    worksheetQuestions: [
      {
        question: 'After completing the mock, review your Q1 and Q2 responses. For Q1: did you select from the correct lines? Were both selections precise words or phrases? For Q2: did you write in your own words, or did you lift phrases?',
        lines: 6,
        modelAnswer:
          'Model response format (individual student self-assessment): Q1 — I selected [word/phrase 1] and [word/phrase 2] from lines [X–Y]. These are precise and come from the correct section of the text. OR: I accidentally selected from the wrong lines / used too long a phrase. Q2 — My points were expressed in my own words / I noticed that in point [X] I used the writer\'s words too directly and should have paraphrased.',
        marks: 4,
      },
      {
        question: 'Review your Q3 response. How many distinct embedded-quotation points did you write? Did any of your points repeat the same idea?',
        lines: 5,
        modelAnswer:
          'Students should count their distinct points and check for repetition. A full-mark response requires five genuinely different supported points. Common finding: students often cluster several points around one aspect (e.g. three points all about danger) rather than covering the breadth of what the text describes. Identifying this pattern is the key goal of the self-assessment.',
        marks: 3,
      },
      {
        question: 'Without looking at the mark scheme, write what you believe a Band 4 Q4 response must include. Then check against the mark scheme and note any criteria you missed.',
        lines: 6,
        modelAnswer:
          'Band 4 Q4 (Edexcel AO2) typically requires: detailed and perceptive analysis of language and structure; precise, embedded quotations; accurate and varied use of terminology; explanation of effects that goes beyond the obvious; consideration of how choices work together to create meaning; and some exploration of structural choices. Common criteria that students omit: the structural element and the "perceptive" quality of effect analysis (going beyond the first obvious interpretation).',
        marks: 4,
      },
      {
        question: 'Review your Q5 response. Count: (a) How many integrated comparative paragraphs did you write? (b) How many discourse markers did you use? (c) Did you refer to both texts in every paragraph?',
        lines: 6,
        modelAnswer:
          'Students should tally their paragraphs, count discourse markers (whereas, however, similarly, both writers, etc.), and check each paragraph for dual-text reference. Typical finding: students who ran out of time on Q5 often wrote only two or three paragraphs, or slipped into sequential comparison in later paragraphs when under pressure. This finding directly informs revision priorities.',
        marks: 3,
      },
      {
        question: 'Based on your mock performance, identify the one question you most need to improve and describe exactly what you will practise before the real exam.',
        lines: 6,
        modelAnswer:
          'Open response — student should identify a specific question (Q1–Q5) and a specific improvement action. Example: "I need to improve Q5. My paragraphs were sequential rather than integrated. I will practise writing one integrated comparative paragraph per day for the next two weeks, using the discourse marker toolkit. I will use the city life and polar exploration texts from Lessons 5 and 7 as practice material before sourcing new texts."',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The time checkpoint announcements during the mock are arguably as valuable as the mock itself — they force students to practise the most difficult exam skill: moving on.',
      'Collect the self-assessment reflection cards to identify class-wide weaknesses before Lesson 10. These should directly inform which aspects of exam strategy are given most airtime in the final lesson.',
      'For Q4 and Q5, full self-assessment is too complex for the lesson time — return marked Q4 and Q5 responses before Lesson 10 if the school\'s marking turnaround allows.',
      'If students panic at the Q5 time checkpoint and have only written one paragraph, normalise this and reinforce: "This is exactly why we practise. In the real exam you will have practised this enough that you will be on track."',
    ],
    targetedSkills: [
      'Full Section A exam pacing',
      'Under-pressure question decision-making',
      'Mark scheme self-assessment (AO1)',
      'Reflective self-evaluation',
      'Identification of revision priorities',
    ],
  },

  // ── Lesson 10: Exam-Day Strategy and Time Management ─────────────────────
  {
    id: 'y10lp1-10',
    title: 'Exam-Day Strategy — Time Management, Mindset and Final Preparation',
    text: 'IGCSE English Language Paper 1',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Consolidate and personalise an exam-day strategy for Paper 1 based on mock performance data',
      'Review marked mock responses and translate feedback into specific revision actions',
      'Practise exam-day decision-making: choosing the Section B task, managing anxiety, prioritising time',
      'Produce a personal revision plan for Paper 1 covering the period between now and the exam',
    ],
    successCriteria: [
      'I can articulate a detailed, personalised timing plan for the full 135-minute Paper 1',
      'I can identify my two highest-priority revision targets based on mock paper evidence',
      'I can make a rational decision between two Section B task options in under 2 minutes',
      'I can describe three practical strategies for managing exam anxiety on the day',
    ],
    keywords: [
      'exam strategy',
      'time management',
      'Section B choice',
      'revision plan',
      'exam-day mindset',
      'prioritisation',
      'feedback',
      'target setting',
      'mark scheme',
      'final preparation',
    ],
    starterActivity: {
      title: 'Mock Paper Feedback Review',
      duration: '10 minutes',
      instructions:
        'Return marked mock Section A papers (or teacher-annotated Q4 and Q5 responses). Students have 8 minutes to read through their feedback and mark scheme commentary. They complete a quick data table: for each question, record "Target mark", "Actual mark", and "Gap". Then they rank the five questions by their biggest gap (largest improvement potential). Teacher takes a class survey: "Raise your hand if your biggest gap is Q5." "Q4?" etc. This data informs the rest of the lesson. Teacher highlights that Q5 and Q4 offer the most marks to gain since together they represent 34 of 45 Section A marks.',
      differentiation: {
        support: 'Provide the data table pre-printed so students only need to fill in their marks and circle their priority question.',
        core: 'Students construct the table and gap analysis independently.',
        stretch: 'Students write a one-paragraph explanation of why their specific errors occurred (e.g. "I lost marks on Q5 because I wrote sequentially — I need more practice with integrated comparison").',
      },
      resources: [
        'Returned marked mock papers',
        'Mark scheme (students\' own copies from Lesson 9)',
        'Data table template (support)',
      ],
    },
    mainActivities: [
      {
        title: 'Section B Task Choice — Decision-Making Practice',
        duration: '18 minutes',
        instructions:
          'Teacher presents three pairs of Section B task options (from past papers or specimen materials). For each pair, students have exactly 90 seconds to choose which task they would answer and write two bullet points explaining why. After each pair, teacher cold-calls two students with different choices to justify their reasoning. Establish the decision criteria: (1) Which form do you feel more confident in? (2) Which topic gives you more ideas? (3) Which audience suits your strongest writing register? Teacher models the decision process for the third pair as a think-aloud. In the final 5 minutes, students write their personal Section B preference (e.g. "I am strongest writing articles; I find persuasive speeches harder") on their revision card to guide their independent practice.',
        differentiation: {
          support: 'Provide a decision-making flowchart: "If you prefer formal register → letter or report; if you prefer persuasive voice → article or speech; if the topic is familiar → lean towards it."',
          core: 'Students make decisions independently then compare with the class.',
          stretch: 'Students write a brief justification explaining how their chosen form would affect the structural choices and register of their response.',
        },
        resources: [
          'Three pairs of Section B task options (past paper or specimen)',
          'Decision criteria card',
          'Decision flowchart (support)',
          'Personal revision card',
        ],
      },
      {
        title: 'Personalised Revision Plan and Exam-Day Protocol',
        duration: '22 minutes',
        instructions:
          'In two parts. Part 1 (12 minutes): Students construct a two-week revision plan for Paper 1. Each day they allocate one specific task: e.g. "Monday: timed Q4 on two extracts"; "Tuesday: write two Q5 comparative paragraphs using discourse marker toolkit"; "Wednesday: Section B speech on a given topic, timed"; "Thursday: five-step proofreading on previous Section B draft." They must include at least one full timed practice of Q4, one of Q5, one full Section B, and one full run of Q1–Q3 in the two-week plan. Part 2 (10 minutes): Teacher leads a whole-class discussion: three evidence-based exam-day strategies. (1) Physical: sleep, food, arriving early. (2) Cognitive: read both texts before answering Q1 to build a full mental map. (3) Emotional: if you fall behind on Q3, do not catch up — move straight to Q4 and accept the partial Q3 marks. Students add these to their personal exam-day protocol card.',
        differentiation: {
          support: 'Provide a revision plan template with the days already labelled and some task types pre-filled; students only need to add their personal choices and specific texts to use.',
          core: 'Students construct the full revision plan on blank paper.',
          stretch: 'Students include a "risk management" section in their plan: "If I am running out of time in the exam and I\'m on Q4, I will…" and "If my mind goes blank on Q5, I will…"',
        },
        resources: [
          'Two-week revision plan template (support)',
          'Blank revision plan sheet (core/stretch)',
          'Exam-day protocol card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'The One-Sentence Exam Mantra',
      duration: '5 minutes',
      instructions:
        'Each student writes a single sentence — their personal exam mantra for Paper 1 — that captures their most important reminder. Examples: "Move on at Q3 no matter what." "Q5 is worth 22 marks — protect that 30 minutes." "Embed every quotation." Students share in a round. Teacher collects the mantras and reads three aloud as a closing statement for the unit. Students write their mantra on the front of their revision card so it is the first thing they see when they open it.',
      differentiation: {
        support: 'Provide five sentence starters to choose from if students struggle to generate their own mantra.',
        core: 'Students write an entirely original mantra based on their personal experience of the mock.',
        stretch: 'Students write a mantra and a three-sentence explanation of the evidence from their mock that led them to choose it.',
      },
    },
    homework:
      'Complete the first three days of your two-week revision plan before the next lesson. For each task, write a brief reflection (3–4 sentences) on what you practised, what went well, and what still needs work. Submit the completed tasks and reflections.',
    worksheetQuestions: [
      {
        question: 'You are 20 minutes into the exam and have just finished Q3, but you feel your Q3 answer was incomplete — you only wrote three points instead of five. Should you go back and add to Q3 or move on to Q4? Justify your decision.',
        lines: 5,
        modelAnswer:
          'Move on to Q4 immediately. Going back to Q3 to add two more points will earn at most 2 additional marks. Q4 is worth 12 marks, and every minute spent on Q3 now reduces the quality and completeness of your Q4 response. Accept the partial Q3 marks and prioritise the higher-tariff question. This is the single most important timing decision in Section A.',
        marks: 4,
      },
      {
        question: 'Your teacher gives you a choice of two Section B tasks: Task A is a letter to a local council arguing against the closure of a youth centre; Task B is an article for a school magazine about the benefits of social media. How would you decide which to choose?',
        lines: 5,
        modelAnswer:
          'The decision should be based on: (1) Confidence in the form — if you are more comfortable with the conventions of a formal letter (address, salutation, formal register) than a magazine article (headline, informal/engaging register, subheadings), choose accordingly. (2) Ideas — which topic gives you more to write about? If you have strong opinions about youth centres or social media, that will sustain a better-developed argument. (3) Audience — formal letter requires a persuasive, respectful register; magazine article allows a more varied, accessible voice. Choose the task where your strengths in form and ideas align.',
        marks: 4,
      },
      {
        question: 'Describe three practical actions you can take on the morning of the exam to maximise your performance.',
        lines: 5,
        modelAnswer:
          '(1) Physical preparation: eat a balanced breakfast and avoid excessive caffeine to maintain steady concentration; arrive at the venue early to avoid rushing, which increases anxiety. (2) Cognitive preparation: briefly review your timing plan card and exam mantra before entering the hall to activate key strategies in working memory. (3) Emotional preparation: remind yourself that falling slightly behind on an early question is recoverable — the paper is designed so that high-tariff questions come later, giving you the opportunity to demonstrate your best skills.',
        marks: 3,
      },
      {
        question: 'Write your personalised timing plan for the full Paper 1 (135 minutes), making sure it reflects your individual performance data from the mock.',
        lines: 10,
        modelAnswer:
          'Personalised plan should follow the template established in Lesson 1 but adjusted based on individual mock performance. For example, a student who overran on Q5 may allocate 35 minutes instead of 30; a student who finished Section B early may reduce Section B time and add it to Q5. Core structure: read texts (5 min), Q1 (3 min), Q2 (5 min), Q3 (7 min), Q4 (15 min), Q5 (30 min), Section B plan (5 min), Section B write (55 min), check (10 min) = 135 min.',
        marks: 5,
      },
      {
        question: 'Identify your two highest-priority revision targets for Paper 1. For each, describe one specific practice activity you will complete in the next two weeks to address it.',
        lines: 8,
        modelAnswer:
          'Open response — student should name specific questions (e.g. Q4 and Q5) and specific activities. Example: Target 1 — Q4 language analysis. Activity: practise writing one complete Q4 response per day using extracts from broadsheet newspaper articles; check each response against the AO2 band descriptors and ensure every paragraph includes an extended effect sentence. Target 2 — Q5 integrated comparison. Activity: use the two polar exploration extracts from Lesson 7 to write one new integrated comparative paragraph daily, ensuring each paragraph contains at least two discourse markers and references both texts.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This lesson has a fundamentally different energy to the others — it should feel consolidating and confidence-building rather than introducing new content. Students should leave feeling prepared rather than overwhelmed.',
      'The mock data survey at the start is invaluable for tailoring the lesson. If the class overwhelmingly struggled with Q5, spend more of the main activity time on comparative strategies. If Q4 was the main issue, focus more on the revision plan to include targeted analytical practice.',
      'The Section B decision-making practice is often neglected in exam preparation. Many students freeze in the exam when choosing tasks. Normalising the decision process and giving it explicit practice time significantly reduces this problem.',
      'End this final lesson on an affirming note. Students who have engaged with all ten lessons will have covered the paper structure, all five AOs, timed practice of every question type, checking strategy, unseen text strategy, and full mock experience. Acknowledge this explicitly.',
      'Consider sending home the exam-day protocol card with the revision plan so parents/carers can support the final preparation phase.',
    ],
    targetedSkills: [
      'Exam-day strategic decision-making',
      'Personalised revision planning',
      'Section B task selection',
      'Mock performance analysis and target-setting',
      'Exam confidence and metacognition',
    ],
  },
];
