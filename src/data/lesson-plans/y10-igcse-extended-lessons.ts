import type { LessonPlan } from '@/types'

export const y10IgcseExtendedLessons: LessonPlan[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // REVISION, EXAM SKILLS & CROSS-PAPER PREPARATION (10 lessons)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Lesson y10ext-01: Cross-Paper Close Reading ───────────────────────────
  {
    id: 'y10ext-01',
    title: 'Cross-Paper Close Reading: Analysing Any Unseen Text',
    text: 'IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Apply a transferable close reading strategy to any unseen prose, non-fiction or poetry text',
      'Identify purpose, audience, form and tone as entry points into any extract',
      'Select and embed evidence precisely from texts across both Language and Literature papers',
      'Practise annotating unseen texts under realistic conditions',
    ],
    successCriteria: [
      'I can use the PAFT framework (Purpose, Audience, Form, Tone) to approach any unseen text',
      'I can annotate an unseen extract and identify at least five significant language features',
      'I can write a focused analytical paragraph using evidence embedded within my commentary',
      'I can explain how my close reading approach applies equally to Language Paper 1 and Literature Paper 1',
    ],
    keywords: [
      'close reading',
      'unseen text',
      'purpose',
      'audience',
      'form',
      'tone',
      'annotation',
      'inference',
      'embedded quotation',
      'PAFT',
    ],
    starterActivity: {
      title: 'Two-Minute Text Sprint',
      duration: '8 minutes',
      instructions:
        "Display a short unseen paragraph - around 8 lines of prose fiction - on the board without any context or title. Students have exactly two minutes to write down: (1) what they notice first, (2) what kind of text they think it is, and (3) one word to describe the overall tone. Take brief class feedback. Reveal that this starter models exactly how to enter any unseen text in the exam: observe, classify, characterise. Explain that today's lesson builds a systematic method for doing this reliably.",
      differentiation: {
        support:
          'Provide a prompt card listing possible text types (fiction, travel writing, autobiography, speech) and a tone word bank to choose from.',
        core: 'Students write their three responses independently and justify each choice with a brief reason.',
        stretch:
          'Students write a fourth observation: what the writer wants the reader to think or feel, and identify the technique that creates this effect.',
      },
      resources: [
        'Unseen paragraph displayed on board or printed on card',
        'Tone word bank (optional)',
      ],
    },
    mainActivities: [
      {
        title: 'Building the PAFT Framework',
        duration: '15 minutes',
        instructions:
          "Introduce the PAFT close reading framework: Purpose (to inform, persuade, entertain, describe, argue), Audience (who is addressed and how do you know), Form (structural and generic features), Tone (the writer's attitude and how it shifts). Model its application live on a projected extract, thinking aloud as you annotate. Pause at each letter to ask students to contribute observations. Students are then given a second, different extract and complete a PAFT grid in pairs. Discuss how PAFT works for both fiction and non-fiction texts equally - a crucial cross-paper insight.",
        differentiation: {
          support:
            'Provide a PAFT grid with guiding prompt questions in each box (e.g. "How does the writer want you to feel? What words signal this?").',
          core: 'Students complete the PAFT grid independently after the modelled example.',
          stretch:
            'Students annotate the extract directly, writing margin notes for each PAFT element and identifying where more than one element overlaps.',
        },
        resources: [
          'PAFT framework handout',
          'Projected extract for modelling',
          'Second extract for pair work',
          'PAFT grid template',
        ],
      },
      {
        title: 'From Annotation to Analytical Paragraph',
        duration: '22 minutes',
        instructions:
          'Using their PAFT grids, students select the most significant language feature they have identified. Teacher models converting an annotation into a full analytical paragraph using a clear structure: point - evidence (embedded quotation) - language technique - effect on reader - authorial intention. Students then write their own paragraph independently in 12 minutes, applying the structure to their chosen feature. Pairs then swap paragraphs and check: Is the quotation embedded? Is the technique named? Is the effect explained? Is there a comment on intention? Whole-class share of two strong examples under the visualiser.',
        differentiation: {
          support:
            'Provide a sentence frame: "The writer uses [technique] when they write [embedded quotation]. This suggests [effect] because..."',
          core: 'Students write a full independent paragraph from their annotation.',
          stretch:
            'Students write a second paragraph exploring a contrasting technique and link the two paragraphs with a connective that signals development (e.g. "Furthermore", "In contrast").',
        },
        resources: [
          'Analytical paragraph structure prompt',
          'Sentence frames for support tier',
          'Visualiser for class sharing',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Cross-Paper Transfer Check',
      duration: '7 minutes',
      instructions:
        'Students complete a brief self-assessment card with two columns: "Language Paper" and "Literature Paper". Under each heading they write one way today\'s close reading method applies to that paper. Teacher takes brief verbal responses to consolidate. Emphasise: the skill of reading closely is the same - the question format changes, not the fundamental technique. Students hand in their PAFT grids and analytical paragraphs for formative feedback.',
      differentiation: {
        support:
          'Provide a sentence starter: "In the Language Paper I can use PAFT to..." and "In the Literature Paper I can use PAFT to..."',
        core: 'Students complete both columns independently and add one target for their own development.',
        stretch:
          "Students identify a specific question type from each paper (by name or number) and explain precisely how today's skill addresses the mark scheme criteria for that question.",
      },
    },
    homework:
      'Find a short passage from a newspaper opinion column or a travel article (at least 15 lines). Complete a PAFT grid for it and write one analytical paragraph using embedded evidence. Bring both to the next lesson.',
    worksheetQuestions: [
      {
        question:
          'Explain what each letter of the PAFT framework stands for and why each element is useful when approaching an unseen text.',
        lines: 6,
        modelAnswer:
          "P = Purpose: identifying why the writer produced the text (to entertain, inform, persuade, describe) guides which features to look for. A = Audience: knowing who the text addresses helps interpret register and tone choices. F = Form: recognising structural and generic conventions reveals how the writer organises meaning. T = Tone: identifying the writer's attitude and its shifts shows how the reader is positioned emotionally and intellectually.",
        marks: 4,
      },
      {
        question:
          'A student reads an extract and immediately starts writing an answer without annotating the text. Explain two problems this approach might cause.',
        lines: 4,
        modelAnswer:
          "First, without annotation the student may miss significant techniques or select the most obvious quotation rather than the most analytical one, leading to a superficial response. Second, without identifying purpose and tone first, the student may misinterpret the writer's intention, producing analysis that is technically correct but contextually wrong - for instance, reading irony as sincerity.",
        marks: 4,
      },
      {
        question:
          'Read the following sentence: "The room was a museum of her grief - every surface crowded with photographs, every corner thick with dust." Identify one language technique and analyse its effect on the reader.',
        lines: 5,
        modelAnswer:
          'The writer uses a metaphor ("a museum of her grief") which frames the room as a preserved, static space, suggesting the character\'s grief is something she has preserved rather than processed. The noun "museum" also implies the room is a public monument to pain, which creates a sense of isolation - others may visit but cannot truly understand her loss. The listing that follows ("every surface... every corner") compounds the sense of a space consumed by absence.',
        marks: 4,
      },
      {
        question:
          'How does the PAFT method help you when responding to both a Language unseen text question and a Literature extract question? Give one similarity and one difference in how you would use it.',
        lines: 6,
        modelAnswer:
          'Similarity: in both cases PAFT helps you identify what the writer is doing and why, so your analysis is rooted in authorial intention rather than just feature-spotting. Difference: in a Language paper the audience and purpose are often central to the question (e.g. write about how the writer engages the reader), whereas in Literature the form element is more directly assessed since students are expected to comment on how the text fits its genre or literary tradition.',
        marks: 4,
      },
      {
        question:
          'Rewrite the following weak analytical sentence to make it more analytical: "The writer uses personification. It makes the reader feel sad."',
        lines: 4,
        modelAnswer:
          "Example improved response: \"The writer employs personification - giving the river 'weeping willows and a slow, mourning current' - to evoke a landscape that mirrors the narrator's emotional state. By attributing human grief to nature, the writer suggests that the character's sorrow is inescapable and all-encompassing, deepening the reader's empathy.\"",
        marks: 3,
      },
    ],
    teacherNotes: [
      'Use extracts from Edexcel specimen or past papers where possible so students are familiar with the layout and length they will encounter.',
      "The PAFT framework is the lesson's main transferable tool - reinforce it in every subsequent lesson by asking students to begin with it.",
      'Avoid texts that are culturally remote; choose extracts students can connect to quickly so the lesson focuses on method, not comprehension difficulties.',
      'The peer-marking step in the second main activity is high value - circulate and prompt with the checklist questions rather than correcting directly.',
      'This lesson works well as the first in the extended sequence because it establishes a metacognitive habit that all later lessons build on.',
    ],
    targetedSkills: [
      'Close Reading',
      'Annotation',
      'Analytical Writing',
      'Cross-Paper Transfer',
      'Embedded Quotation',
      'Authorial Intention',
    ],
  },

  // ── Lesson y10ext-02: Linking Language to Literature ─────────────────────
  {
    id: 'y10ext-02',
    title: 'Linking Language to Literature: Analysis Techniques Across Both Papers',
    text: 'IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Recognise that analytical techniques taught in Language lessons are directly applicable to Literature texts',
      'Apply language analysis (imagery, structure, voice, tone) to set Literature texts and unseen extracts equally',
      'Write comparative annotations that bridge a language extract and a literature poem or prose passage',
      'Develop a personal toolkit of transferable analytical vocabulary used across both papers',
    ],
    successCriteria: [
      'I can name at least six analytical techniques and use the correct terminology for each',
      'I can apply the same technique (e.g. analysis of metaphor) to a language extract and a literature text in the same lesson',
      'I can write a paragraph about a Literature text that demonstrates the same quality of language analysis I use in Language answers',
      'I can explain the link between AO2 (Language) and AO1 (Literature) in terms of what each rewards',
    ],
    keywords: [
      'metaphor',
      'imagery',
      'voice',
      'tone',
      'structure',
      'symbolism',
      'connotation',
      'register',
      'analytical vocabulary',
      'transferable skill',
    ],
    starterActivity: {
      title: 'Which Paper? Guess the Context',
      duration: '8 minutes',
      instructions:
        'Display four analytical sentences on the board, all written about different texts, without indicating which paper or subject each belongs to. Students decide in pairs: is this a Language answer or a Literature answer? After discussion, reveal that every sentence uses identical analytical technique regardless of which paper it came from. The point is made visually: good analysis sounds the same. Ask: "What does this tell you about how to prepare for both papers?" Collect responses to establish the lesson\'s key idea.',
      differentiation: {
        support:
          'Provide the four sentences pre-annotated with technique labels - students only decide which paper.',
        core: 'Students decide paper origin and also identify the technique used in each sentence.',
        stretch:
          'Students rewrite one sentence so it fits the other paper (i.e. adapt a Language-style answer to Literature context) and explain what changed.',
      },
      resources: ['Four analytical sentences on board or printed card'],
    },
    mainActivities: [
      {
        title: 'Building the Shared Toolkit',
        duration: '18 minutes',
        instructions:
          'Students are given a two-column sorting mat: "Analytical Techniques" and "What They Reveal". Introduce or revise ten key techniques: metaphor, simile, personification, structural contrast, repetition, rhetorical question, free verse, pathetic fallacy, first-person voice, and juxtaposition. For each, teacher provides a brief definition and one example from a Language text and one from a Literature text. Students note both in the corresponding column of their sorting mat. Crucial point to reinforce: examiners for both papers reward the same move - identify the technique, quote it precisely, and explain its effect on the reader.',
        differentiation: {
          support:
            'Provide pre-filled definitions; students only add the examples and the "What They Reveal" column.',
          core: 'Students complete the sorting mat alongside teacher explanation.',
          stretch:
            'For each technique, students add a second example from a text they have studied independently and briefly explain the effect.',
        },
        resources: [
          'Two-column sorting mat handout',
          'Language extract examples',
          'Literature text examples (from set texts or anthologies)',
        ],
      },
      {
        title: 'Side-by-Side Analysis Task',
        duration: '20 minutes',
        instructions:
          'Provide students with two short extracts side by side: one from a non-fiction Language text, one from a Literature set text (e.g. a poem from the Edexcel anthology or a passage from a studied novel). Students independently annotate both using their shared toolkit. They then write two analytical paragraphs - one for each extract - each beginning with the same analytical technique to demonstrate that the approach is transferable. In the final five minutes, students compare their two paragraphs and highlight every phrase that could appear in either answer unchanged. This becomes their "transferable phrase bank".',
        differentiation: {
          support:
            'Provide one paragraph for Language already written; students only write the Literature paragraph using the same technique.',
          core: 'Students write both paragraphs independently.',
          stretch:
            'Students write a third paragraph that explicitly links the two texts - comparing how both writers use the same technique to different effects.',
        },
        resources: [
          'Side-by-side extract sheet',
          'Paragraph writing frame (for support)',
          'Highlighters for phrase banking',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Toolkit Exit Ticket',
      duration: '6 minutes',
      instructions:
        'Students fold a piece of paper in half. On one side they write three techniques from their shared toolkit that they feel most confident using. On the other side they write one technique they want to develop further and one action step for doing so. Teacher collects and uses the responses to plan future revision focus. Techniques named by few students are identified for additional whole-class practice.',
      differentiation: {
        support: 'Allow students to use their sorting mat when completing the exit ticket.',
        core: 'Students complete both sides independently.',
        stretch:
          'Students write a sentence demonstrating each of their three confident techniques using a text studied this year.',
      },
    },
    homework:
      "Choose any one of the ten techniques from today's shared toolkit. Find an example of it in a Language text (e.g. a newspaper article or speech) and an example of it in a Literature text you have studied. Write one analytical paragraph for each. Aim for at least four sentences in each paragraph.",
    worksheetQuestions: [
      {
        question:
          'Explain why the analytical skills used in IGCSE English Language are also valuable when answering IGCSE English Literature questions. Use the term "assessment objective" in your answer.',
        lines: 5,
        modelAnswer:
          'Language Paper AO2 and Literature Paper AO1 both reward students for analysing how writers use language to create effects and shape meaning. Both require the identification of specific techniques, precise quotation, and explanation of effect on the reader. The terminology is the same; only the text type and question format differ. Developing a shared analytical vocabulary therefore serves both papers simultaneously.',
        marks: 4,
      },
      {
        question:
          'What is the difference between identifying a technique and analysing a technique? Illustrate your answer with an example.',
        lines: 5,
        modelAnswer:
          'Identifying means naming the technique and quoting an example: "The writer uses personification - \'the wind screamed\'." Analysing goes further: explaining why the writer chose this technique and what effect it creates for the reader - "By giving the wind a human action associated with fear and pain, the writer creates an atmosphere of threat and aggression, positioning the reader to feel vulnerable." Analysis links technique to effect to intention.',
        marks: 4,
      },
      {
        question:
          'Look at this extract: "She moved through the house like smoke - everywhere and nowhere, impossible to hold." Analyse the effect of the simile on the reader.',
        lines: 5,
        modelAnswer:
          'The simile "like smoke" presents the character as insubstantial and elusive, suggesting she is simultaneously present and absent within her own home. The connotations of smoke - transient, shapeless, and potentially suffocating - enrich the comparison: she is not merely hard to find but in some way dangerous or uncomfortable to be around. The paradox "everywhere and nowhere" reinforces this, leaving the reader uncertain whether to sympathise with or fear her.',
        marks: 5,
      },
      {
        question:
          'Give one reason why using subject-specific vocabulary (e.g. "juxtaposition", "pathetic fallacy") improves an examination answer.',
        lines: 3,
        modelAnswer:
          'Subject-specific vocabulary demonstrates technical understanding of how literary effects are constructed. It also enables concise expression - "pathetic fallacy" communicates in two words what would otherwise require a full sentence of explanation - allowing students to spend more time analysing effect rather than describing technique.',
        marks: 2,
      },
      {
        question:
          'A student says, "I practise Language because it\'s different from Literature." Write a paragraph advising them why this might be a missed opportunity.',
        lines: 5,
        modelAnswer:
          'The core analytical skill - selecting evidence, identifying technique, and explaining effect - is common to both papers. A student who sees them as entirely separate will duplicate revision effort rather than building skills that serve both simultaneously. For example, practising metaphor analysis on a non-fiction extract directly improves their ability to write about metaphor in a poem. The most efficient preparation treats both papers as drawing on the same analytical toolkit, with adjustments only for question format and text type.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'If students are working with a specific Edexcel anthology, use poems from it in the side-by-side task so Literature revision is embedded in the lesson.',
      'Reinforce that examiners for both papers reward the same quality of analysis - this is motivating for students who feel Literature is "harder" or different.',
      'The "transferable phrase bank" built in the second activity is worth typing up and sharing with the class as a revision resource.',
      'Students who struggle with Literature often do so because they think it requires a different kind of thinking. This lesson directly targets that misconception.',
      'Keep the sorting mat visible for the rest of the lesson and refer back to it when students are writing paragraphs.',
    ],
    targetedSkills: [
      'Analytical Vocabulary',
      'Technique Identification',
      'Analytical Paragraph Writing',
      'Cross-Paper Transfer',
      'Embedded Quotation',
      'Language-Literature Connection',
    ],
  },

  // ── Lesson y10ext-03: Timed Practice - Mixed Extract ─────────────────────
  {
    id: 'y10ext-03',
    title: 'Timed Practice: Mixed Extract Under Exam Conditions',
    text: 'IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Complete a set of mixed reading and writing tasks under timed exam conditions',
      'Apply close reading, inference, and analytical writing skills to an unseen extract',
      'Self-evaluate performance against mark scheme criteria after the timed task',
      'Identify specific targets for improvement based on evidence from the practice attempt',
    ],
    successCriteria: [
      'I can manage my time across multiple questions without over-running on any single answer',
      'I can produce written responses that include evidence, technique identification, and effect analysis',
      'I can use the mark scheme to identify where I gained and lost marks',
      'I can write a specific, actionable target for my next timed practice',
    ],
    keywords: [
      'timed conditions',
      'mark scheme',
      'self-assessment',
      'retrieval',
      'inference',
      'analysis',
      'time management',
      'target setting',
    ],
    starterActivity: {
      title: 'Two-Minute Technique Warm-Up',
      duration: '5 minutes',
      instructions:
        'Teacher rapid-fires five question stems at the class (displayed one at a time for 20 seconds each): "What does the writer suggest about...?", "How does the writer create tension in...?", "Identify two features of the writer\'s language...", "Explain the effect of the word \'haunted\' in line 3...", "What impression does the reader get of...?" For each, students call out the type of skill required (retrieval, inference, language analysis, effect, impression). This activates prior knowledge of question types before the timed task begins.',
      differentiation: {
        support: 'Provide a question-type reference card with each skill labelled and described.',
        core: 'Students identify skill types from memory.',
        stretch:
          'Students also suggest the approximate marks the question is likely to be worth and justify their estimate.',
      },
      resources: ['Question stem slides', 'Question-type reference card (support)'],
    },
    mainActivities: [
      {
        title: 'Timed Mixed Extract Task',
        duration: '35 minutes',
        instructions:
          'Distribute the timed practice extract and question paper. The extract should be approximately 40-50 lines of prose (fiction or non-fiction) and the questions should include: a retrieval question (4 marks), an inference question (4 marks), a language analysis question (8 marks), and a short directed writing or summary task (8 marks). Set conditions: silence, no talking, no notes. Teacher times with a visible countdown. At the 35-minute mark, pens down - no exceptions. Reinforce that completing within time is itself an assessed skill.',
        differentiation: {
          support:
            'Provide a structured response frame for the language analysis question with sentence starters for each analytical move.',
          core: 'Students complete the task with no additional scaffolding.',
          stretch:
            'Students are asked to write a brief annotation in the margin for each answer explaining the technique or skill they used.',
        },
        resources: [
          'Timed practice extract and question paper',
          'Structured response frame (support)',
          'Timer visible to class',
        ],
      },
      {
        title: 'Mark Scheme Self-Assessment',
        duration: '12 minutes',
        instructions:
          'Distribute the mark scheme. Students mark their own work using a coloured pen. For each question, they: tick every mark point they have hit, circle any mark point they missed, and write one word next to missed points explaining why (e.g. "didn\'t quote", "no technique named", "no effect"). Teacher circulates and prompts rather than correcting. After self-marking, each student writes a RAG (Red-Amber-Green) score for each question and one sentence target for their lowest-scoring question.',
        differentiation: {
          support:
            'Provide a simplified mark scheme with the key marking criteria bullet-pointed in student-friendly language.',
          core: 'Students use the full examiner mark scheme.',
          stretch:
            'Students also identify the AO (AO1, AO2, AO3) being tested in each question and consider what band descriptor their answer would reach.',
        },
        resources: [
          'Mark scheme handout',
          'Simplified mark scheme (support)',
          'RAG self-assessment grid',
          'Coloured pens',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Class Patterns and Priority Targets',
      duration: '5 minutes',
      instructions:
        'Teacher collects RAG self-assessments quickly (by show of hands or collected grids) to identify class-wide patterns. Share the top two areas where marks were most commonly lost. These are named as class priority targets for the next two lessons. Students write their personal target in their planner or exercise book. End with a positive framing: "Every timed practice builds the muscle memory you need for the real exam."',
      differentiation: {
        support: 'Teacher scribes the class priority targets on the board for students to copy.',
        core: 'Students note targets independently.',
        stretch:
          'Students suggest specific strategies for addressing each of the two class priority areas.',
      },
    },
    homework:
      'Re-do the question where you scored lowest, this time without a time limit. Compare your second attempt to your first - write three sentences explaining what you did differently and why it improved your answer.',
    worksheetQuestions: [
      {
        question:
          'Why is it important to complete exam practice within the allocated time, even if your answer feels unfinished?',
        lines: 4,
        modelAnswer:
          'Practising within time builds the discipline needed for the real exam, where unanswered questions receive no marks. A partially answered question often scores higher than spending extra time perfecting an earlier answer and leaving a later question blank. Time management is itself an assessed habit - the exam rewards candidates who can produce quality work at pace, not only in ideal conditions.',
        marks: 3,
      },
      {
        question:
          'After self-marking, a student finds they consistently missed marks on language analysis questions. Suggest two specific strategies they could use to improve.',
        lines: 5,
        modelAnswer:
          'Strategy 1: Practise writing analytical paragraphs using a structured method (point-evidence-technique-effect) until the pattern becomes automatic, so less cognitive effort is needed to organise ideas during the exam. Strategy 2: Study the mark scheme band descriptors for language analysis questions to understand exactly what distinguishes a Level 2 response from a Level 3 response, then re-mark practice answers against those criteria before attempting new tasks.',
        marks: 4,
      },
      {
        question:
          'A retrieval question asks: "What does the writer suggest about the city\'s atmosphere in lines 1-10? Use evidence from the text." A student writes: "The city seems dangerous." Explain why this answer is likely to score only 1 mark out of 4.',
        lines: 4,
        modelAnswer:
          'The answer gives a valid impression but does not support it with any evidence from the text. A 4-mark retrieval question expects multiple pieces of relevant evidence (usually two to four points, each supported by a quotation or close reference). Without textual evidence the response cannot demonstrate reading comprehension beyond a general impression, so it cannot access the higher mark bands.',
        marks: 3,
      },
      {
        question:
          'Explain the difference between a self-assessment using a mark scheme and a teacher marking your work. What are the benefits of self-marking?',
        lines: 4,
        modelAnswer:
          'Self-marking develops metacognitive awareness - students learn to identify exactly what marks require rather than relying on teacher feedback to reveal gaps. It also means students internalise the mark scheme criteria, which helps them write to those criteria in future. The process of recognising missed mark points is often more memorable than being told what was missing, building longer-term understanding of examiner expectations.',
        marks: 3,
      },
      {
        question:
          'In your timed practice, which question type did you find most challenging, and what one action will you take before the next timed practice to address this?',
        lines: 4,
        modelAnswer:
          'Open-ended personal reflection. Look for: specific identification of question type (not vague), an action that is concrete and achievable (e.g. "practise three inference questions using past papers", not "revise more"), and awareness of what the question actually requires in terms of exam skill.',
        marks: 0,
      },
    ],
    teacherNotes: [
      'Use a genuine Edexcel past paper or specimen paper extract for the timed task wherever possible - authenticity of format matters for exam confidence.',
      'Do not offer help or hints during the timed 35 minutes; replicate exam conditions as closely as possible.',
      'Circulate widely during the self-assessment phase - this is where the most important learning happens and students need prompting to be honest and specific.',
      'The RAG data collected in the plenary is actionable - use it to plan the next two lessons in this sequence.',
      "Consider running this lesson once per half-term and keeping a record of each student's RAG scores to track progress over time.",
    ],
    targetedSkills: [
      'Time Management',
      'Exam Technique',
      'Self-Assessment',
      'Retrieval',
      'Inference',
      'Language Analysis',
      'Target Setting',
    ],
  },

  // ── Lesson y10ext-04: Understanding AO1-AO4 Across All Papers ─────────────
  {
    id: 'y10ext-04',
    title: 'Understanding AO1-AO4: What Examiners Reward Across All Papers',
    text: 'IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Define AO1, AO2, AO3, and AO4 and identify which papers and questions assess each objective',
      'Understand the difference between what is assessed and how marks are awarded at each band',
      'Recognise how AO-awareness can be used to self-direct revision and improve answers',
      'Apply AO-specific language to annotate sample answers and identify their strengths',
    ],
    successCriteria: [
      'I can define each of the four assessment objectives in my own words',
      'I can identify which AO is being tested in a given exam question from either paper',
      'I can read a sample answer and identify which AO criteria it meets and which it is missing',
      'I can explain how understanding AOs makes my revision more focused and efficient',
    ],
    keywords: [
      'assessment objective',
      'AO1',
      'AO2',
      'AO3',
      'AO4',
      'mark scheme',
      'band descriptor',
      'criteria',
      'evidence',
      'context',
    ],
    starterActivity: {
      title: 'AO Auction',
      duration: '8 minutes',
      instructions:
        'Display eight short statements on the board, each describing something an examiner might reward (e.g. "Using a quotation to support a point", "Writing in Standard English with accurate punctuation", "Discussing the historical context of the poem", "Commenting on how the writer\'s language creates a specific effect"). Students are given 100 "auction points" to bid on the statements they think are most important. Results are compared and discussed. Teacher then reveals which AO each statement belongs to, establishing that all four matter and serve different purposes.',
      differentiation: {
        support:
          'Provide a simplified list of four AO descriptions and ask students to match each auction statement to one.',
        core: 'Students bid and then categorise independently after the reveal.',
        stretch:
          'Before the reveal, students predict which AO each statement belongs to and compare their predictions to the correct answers.',
      },
      resources: [
        'Eight AO statements on board or printed cards',
        'Auction points tokens or tally on mini-whiteboards',
      ],
    },
    mainActivities: [
      {
        title: 'AO Mapping Across Papers',
        duration: '20 minutes',
        instructions:
          'Distribute an AO mapping grid with rows for each AO (AO1-AO4) and columns for Language Paper 1, Language Paper 2, and Literature Paper 1. Students work with teacher guidance to complete the grid: which AOs are tested in each paper, which questions specifically target each AO, and what a top-band response for each AO looks like (using band descriptor language). Teacher models how to use the Edexcel specification and mark scheme to find this information - a skill students can use independently for revision. Key insight: AO3 (context) appears in Literature but not Language, and AO4 (spelling, punctuation, grammar) is weighted differently across papers.',
        differentiation: {
          support:
            'Provide a partially completed mapping grid with some cells pre-filled and sentence starters for the "top-band" column.',
          core: 'Students complete the full grid with teacher guidance.',
          stretch:
            'Students write a brief examiner commentary for a top-band response to one question from each paper, using AO language.',
        },
        resources: [
          'AO mapping grid handout',
          'Edexcel specification extracts',
          'Mark scheme band descriptor extracts',
        ],
      },
      {
        title: 'Sample Answer AO Annotation',
        duration: '20 minutes',
        instructions:
          'Provide two sample student answers (one for a Language question, one for a Literature question) of approximately mid-band quality. Students read each answer and annotate in the margins, labelling where each AO is met (e.g. AO1 tick = quotation used; AO2 tick = language technique identified; AO3 tick = context referenced). They also highlight anything missing from the AO criteria. In pairs, students discuss: what would this answer need to do to move up one band? Whole class share of the most agreed-upon improvements.',
        differentiation: {
          support:
            'Provide the sample answers with AO criteria already highlighted in different colours; students only write the explanatory labels.',
          core: 'Students annotate independently and then discuss with a partner.',
          stretch:
            'Students rewrite one paragraph from each sample answer to improve it by one band, explaining their changes.',
        },
        resources: [
          'Sample answer sheets (Language and Literature)',
          'AO annotation key',
          'Coloured pens or highlighters',
        ],
      },
    ],
    plenaryActivity: {
      title: 'My AO Priority Pyramid',
      duration: '6 minutes',
      instructions:
        'Students draw a simple four-tier pyramid and place AO1, AO2, AO3, AO4 in order from most to least personally challenging (most challenging at the top). They write one sentence explaining why their most challenging AO sits at the top. Teacher takes a quick class survey to identify the most common patterns. This personalised data feeds directly into the revision lessons later in the sequence.',
      differentiation: {
        support:
          'Provide a labelled pyramid template and AO definitions to support the ranking decision.',
        core: 'Students complete independently.',
        stretch:
          'Students write a specific revision strategy next to each tier of the pyramid, targeted at the particular challenge each AO presents them.',
      },
    },
    homework:
      'Using the Edexcel IGCSE English specification, find and write down the exact wording of each AO as given by the exam board. For each one, write one exam question that tests it and one technique you could use to address it in your answer.',
    worksheetQuestions: [
      {
        question:
          'Define AO1 and AO2 as they apply to Edexcel IGCSE English Language. Explain what a student must do in their answer to meet each objective.',
        lines: 6,
        modelAnswer:
          'AO1 (Reading) requires students to read and understand texts, selecting relevant information, making inferences, and identifying explicit and implicit meaning. To meet AO1, students must show they have understood the text and can retrieve and explain details accurately. AO2 (Writing) requires students to communicate clearly and effectively, organising ideas, varying sentences and vocabulary, and writing for specific purposes and audiences. To meet AO2, students must produce well-structured, accurate writing that is appropriate to the task.',
        marks: 4,
      },
      {
        question:
          'Why is AO3 only assessed in Literature papers and not in Language papers? What does AO3 require?',
        lines: 4,
        modelAnswer:
          'AO3 (Contexts) requires students to understand relationships between texts and the contexts in which they were written or received. Literature study involves analysing texts with an awareness of their historical, social, or cultural background, which shapes meaning. Language papers focus on contemporary or unseen texts where contextual knowledge is not foregrounded - the emphasis is on reading and writing skills applied to the text itself.',
        marks: 3,
      },
      {
        question:
          "A student's Literature essay is well-argued and uses quotations effectively but contains significant errors in spelling and punctuation. Which AO is likely to reduce their mark, and why?",
        lines: 3,
        modelAnswer:
          'AO4 (Spelling, Punctuation and Grammar) will reduce their mark because it rewards accurate written expression regardless of the quality of content in other AOs. Even a sophisticated argument is penalised if it is communicated with persistent errors, as clarity and accuracy of expression are separately assessed criteria.',
        marks: 2,
      },
      {
        question:
          'Explain how understanding assessment objectives can help a student revise more efficiently.',
        lines: 5,
        modelAnswer:
          'By knowing which AO each question tests, a student can identify which skills they need to develop for that question type rather than revising generally. For example, if a student struggles with AO3 (context) in Literature, they can focus revision on understanding historical and biographical background rather than re-reading the text itself. AO awareness also helps students self-mark practice answers more accurately and identify exactly where marks were lost, enabling targeted rather than unfocused improvement.',
        marks: 4,
      },
      {
        question:
          'Look at the following exam question: "How does Dickens present the theme of poverty in this extract?" Which AOs are being tested? Give reasons for your answer.',
        lines: 5,
        modelAnswer:
          'AO1 is tested because students must read and understand the extract, selecting relevant evidence relating to poverty. AO2 is tested because students must analyse how language and structure create meaning - "how does Dickens present" requires analysis of technique and effect. AO3 may be tested (depending on the mark scheme) as awareness of Victorian attitudes to poverty and Dickens\'s social purpose can contextualise analysis. AO4 is always assessed as marks are awarded for the quality of written expression.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Download the current Edexcel IGCSE English Language and Literature specifications so band descriptors can be shared accurately.',
      'The AO mapping activity is valuable for all students but especially for those who find the two subjects confusing - make the grid available as a revision resource.',
      'Students who understand AOs tend to mark more accurately and write more purposefully. Return to AO language in every subsequent lesson where possible.',
      'The priority pyramid data is genuinely useful: photograph or collect them before the next lesson and use the results to group students for the revision workshops (lessons y10ext-05 and y10ext-06).',
      'Note that Edexcel IGCSE uses slightly different AO weightings from CIE - check the current specification for exact percentages.',
    ],
    targetedSkills: [
      'Assessment Objective Awareness',
      'Mark Scheme Literacy',
      'Self-Directed Revision',
      'Sample Answer Analysis',
      'Exam Technique',
      'Metacognition',
    ],
  },

  // ── Lesson y10ext-05: Revision - Language Terminology ────────────────────
  {
    id: 'y10ext-05',
    title: 'Revision Workshop: Language Terminology and Technique Recognition',
    text: 'IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Consolidate knowledge of key language and literary techniques using active recall methods',
      'Accurately define, identify, and apply a minimum of fifteen language techniques',
      'Distinguish between similar techniques (e.g. simile and metaphor; personification and pathetic fallacy)',
      'Practise using correct terminology naturally in written analytical sentences',
    ],
    successCriteria: [
      'I can define fifteen language techniques from memory without using notes',
      'I can correctly identify any of the fifteen techniques when they appear in an unseen text',
      'I can write an analytical sentence using the correct technique name embedded naturally',
      'I can explain the difference between at least three commonly confused technique pairs',
    ],
    keywords: [
      'simile',
      'metaphor',
      'personification',
      'pathetic fallacy',
      'alliteration',
      'assonance',
      'enjambment',
      'caesura',
      'juxtaposition',
      'anaphora',
      'hyperbole',
      'irony',
      'sibilance',
      'oxymoron',
      'semantic field',
    ],
    starterActivity: {
      title: 'Terminology Speed Round',
      duration: '8 minutes',
      instructions:
        'Students have two minutes to list as many language techniques as they can from memory, without prompts. At the end of two minutes, students share with a partner and combine lists, then with another pair (groups of four). Each group reports their total count. The class collaborates to produce a master list on the board. Teacher fills any significant gaps. This activates prior knowledge, reveals gaps across the group, and creates a shared reference list for the lesson.',
      differentiation: {
        support:
          'Allow students to use their exercise books or a pre-taught glossary from an earlier lesson as a prompt for the first minute only.',
        core: 'Students list from memory with no prompts for the full two minutes.',
        stretch:
          'Students write a brief definition alongside each technique they list, rather than just the name.',
      },
      resources: ['Timer', 'Board space for class master list'],
    },
    mainActivities: [
      {
        title: 'Flashcard and Definition Workshop',
        duration: '20 minutes',
        instructions:
          'Each student makes a set of fifteen technique flashcards (or uses a pre-printed card set if time is limited). On the front: the technique name. On the back: definition, one example sentence, and what effect it typically creates. Teacher circulates and checks definitions for accuracy, correcting misconceptions immediately. Focus time on three commonly confused pairs that are explicitly discussed: (1) simile vs. metaphor - both are comparisons; simile uses "like" or "as", metaphor states it directly; (2) personification vs. pathetic fallacy - personification gives human traits to any non-human thing; pathetic fallacy specifically assigns human emotion to nature to reflect a character\'s mood; (3) anaphora vs. repetition - repetition is repeating any word or phrase; anaphora specifically repeats the same word or phrase at the start of successive clauses for rhetorical effect.',
        differentiation: {
          support:
            'Provide pre-printed flashcard frames with the technique name and a sentence-frame definition already begun.',
          core: 'Students create their own flashcards from scratch.',
          stretch:
            'Students add a second example from a text they have studied and a note of which type of text commonly uses each technique.',
        },
        resources: [
          'Blank index cards or pre-printed flashcard template',
          'Technique list for reference (displayed on board)',
          'Exemplar definitions handout',
        ],
      },
      {
        title: 'Technique Hunt and Sentence Writing',
        duration: '20 minutes',
        instructions:
          'Distribute a rich two-paragraph prose extract containing multiple language techniques. Students read and annotate independently in 8 minutes, identifying and labelling as many techniques as they can find. Teacher reveals a completed annotated version and students compare - ticking techniques they found, circling any they missed. The class discusses any missed techniques briefly. In the remaining 10 minutes, each student chooses three of the techniques they annotated and writes one full analytical sentence for each, embedding the quotation and naming the technique naturally (not: "The writer uses metaphor. The metaphor is..." but: "The writer employs metaphor when describing... which creates the effect of...").',
        differentiation: {
          support:
            'Provide the extract with seven techniques already highlighted; students only need to label them and write sentences for two rather than three.',
          core: 'Students annotate the full extract and write three sentences.',
          stretch:
            'Students write a full analytical paragraph (three to four sentences) connecting two of the techniques they found and explaining how they work together to create a sustained effect.',
        },
        resources: [
          'Prose extract handout',
          'Completed annotated version (for teacher reveal)',
          'Sentence writing frame (support tier)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Confusion Clinic',
      duration: '6 minutes',
      instructions:
        'Students write on a sticky note or exit card: one technique they now feel confident about, and one they are still uncertain about. Post them in two columns on the board labelled "Solid" and "Still Fuzzy". Teacher reads through the "Still Fuzzy" notes aloud and addresses the most common confusions in a brief targeted mini-explanation. Students update their flashcards based on any corrections. Flashcards are kept safe for independent revision.',
      differentiation: {
        support:
          'Teacher pairs a "Still Fuzzy" student with a "Solid" student for a peer explanation before the mini-explanation.',
        core: 'Students self-assess independently.',
        stretch:
          'Students who feel solid on all fifteen write a brief guide explaining the most commonly confused pair for a peer who struggles with it.',
      },
    },
    homework:
      'Self-test using your flashcards three times before the next lesson using the Look-Cover-Write-Check method. For any that you cannot define accurately from memory after two attempts, write the definition three times and find a new example in something you have read recently.',
    worksheetQuestions: [
      {
        question:
          'Explain the difference between a simile and a metaphor. Give one example of each from any text you have studied.',
        lines: 4,
        modelAnswer:
          'A simile is an explicit comparison using "like" or "as" (e.g. "He moved like a ghost through the crowd"). A metaphor is an implicit comparison that states one thing is another, without using "like" or "as" (e.g. "He was a ghost in his own life"). Both create comparisons that transfer qualities between two things, but metaphor asserts the equivalence more directly, often creating a stronger or more immersive effect.',
        marks: 3,
      },
      {
        question:
          'Define "semantic field" and explain why it is a useful concept for analysing both poetry and prose.',
        lines: 4,
        modelAnswer:
          'A semantic field is a group of words and phrases that share a related meaning or belong to the same conceptual area (e.g. a semantic field of darkness: shadow, night, eclipse, dim, murky). It is analytically useful because identifying a semantic field reveals the sustained associations a writer is building - if a poem consistently uses words from a semantic field of imprisonment, this suggests a theme of entrapment even if the word "prison" never appears.',
        marks: 3,
      },
      {
        question:
          'What is the difference between personification and pathetic fallacy? Illustrate each with an example sentence.',
        lines: 5,
        modelAnswer:
          'Personification gives human characteristics to any non-human thing, for any purpose (e.g. "The car coughed and spluttered to a halt" - human physical action given to a machine). Pathetic fallacy is a specific type of personification in which natural elements (weather, landscape, seasons) are given human emotions that mirror a character\'s internal state (e.g. "The storm howled its fury as she wept inside" - the storm reflects the character\'s grief). All pathetic fallacy is personification, but not all personification is pathetic fallacy.',
        marks: 4,
      },
      {
        question:
          'Rewrite this weak sentence to embed the technique name more analytically: "There is alliteration in this line: \'the silver, silken sea\'. This is effective."',
        lines: 3,
        modelAnswer:
          'Example improved response: "The sibilant alliteration of \'silver, silken sea\' creates a softly flowing sonic texture that mirrors the gentle movement of the water, drawing the reader into the calming scene the writer constructs."',
        marks: 3,
      },
      {
        question:
          'List three language techniques that are particularly effective for analysing dialogue in a prose text, and briefly explain why each is useful.',
        lines: 5,
        modelAnswer:
          "Register/diction - analysing the formality or informality of a character's word choices reveals power dynamics and personality. Imperative verbs - commands within dialogue show authority and control (or the attempt to assert it). Sentence length and syntax - short, clipped sentences suggest urgency, anger, or authority; longer, complex sentences suggest reflection or manipulation. These techniques help students move beyond what is said to how it is said and what that reveals.",
        marks: 3,
      },
    ],
    teacherNotes: [
      'The flashcard activity has high revision value beyond this lesson - encourage students to keep the cards and use them independently.',
      'Commonly confused pairs vary by class; use the priority pyramid data from lesson y10ext-04 to emphasise the pairs your specific students most often confuse.',
      'The technique hunt works best with a prose extract that is rich but not overwhelming - aim for around 15 techniques identifiable in total.',
      'Many students write "The writer uses [technique]" as an opening - work explicitly on more analytical sentence openers as a writing habit.',
      'Consider having students photograph their completed flashcards to share on a class revision board or VLE.',
    ],
    targetedSkills: [
      'Language Terminology',
      'Technique Identification',
      'Analytical Sentence Writing',
      'Active Recall',
      'Self-Assessment',
      'Revision Strategy',
    ],
  },

  // ── Lesson y10ext-06: Revision - Literature Texts ────────────────────────
  {
    id: 'y10ext-06',
    title: 'Revision Workshop: Literature Texts, Themes, and Key Quotations',
    text: 'IGCSE English Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Consolidate knowledge of themes, characters, and key moments across studied Literature texts',
      'Build and practise a bank of analysable quotations for use in open-book and closed-book conditions',
      'Connect thematic ideas across texts to prepare for comparative and single-text questions',
      'Apply active recall and retrieval practice techniques to Literature revision',
    ],
    successCriteria: [
      'I can recall at least five key quotations for each main studied text and explain why each is significant',
      'I can identify the main themes of each text and link them to at least two quotations',
      'I can write an analytical paragraph about a key quotation from memory, without looking at the text',
      'I can explain a connection between a theme in one text and how it appears in a second studied text',
    ],
    keywords: [
      'theme',
      'character',
      'quotation',
      'context',
      'symbol',
      'motif',
      'structure',
      'authorial intention',
      'comparative',
      'thematic link',
    ],
    starterActivity: {
      title: 'Quote Association Game',
      duration: '8 minutes',
      instructions:
        'Display five quotations from studied texts on the board (or read them aloud for closed-book practice). Students write: (1) which text each quotation is from, (2) who speaks or writes it (if applicable), (3) one word describing the theme it relates to. Students compare answers with a partner and resolve disagreements by referring to the text. This activates precise textual knowledge and reveals which quotations are well known and which are less familiar, helping students prioritise their revision.',
      differentiation: {
        support: 'Allow students to have the text open for the first three quotations only.',
        core: 'All five quotations are done closed-book.',
        stretch:
          'Students also identify the language technique used in each quotation and write a one-sentence analysis.',
      },
      resources: [
        'Five quotations displayed or read aloud',
        'Studied texts available for support tier',
      ],
    },
    mainActivities: [
      {
        title: 'Theme Spider and Quotation Bank',
        duration: '22 minutes',
        instructions:
          'Students create a theme spider for their main studied text (or divide into groups by text if the class is studying multiple texts). In the centre: the text title. On each leg: a major theme (e.g. power, identity, conflict, love, loss). On each branch from the theme: a key quotation and a brief note of the analytical point it supports. Students work independently for 12 minutes, then compare their spider with a partner, adding quotations they had missed. Teacher circulates and prompts students to think about lesser-discussed themes (not just the obvious ones) and to choose quotations that are analytically rich rather than simply memorable.',
        differentiation: {
          support:
            'Provide a pre-drawn spider with themes already labelled; students only add the quotations and analytical notes.',
          core: 'Students create the spider from scratch.',
          stretch:
            'Students create a second, smaller spider showing the same themes in a second studied text, and draw connecting lines between quotations that address the same theme across texts.',
        },
        resources: [
          'A3 paper or large spider diagram template',
          'Pre-drawn spider (support tier)',
          'Studied texts for reference',
        ],
      },
      {
        title: 'Closed-Book Paragraph Practice',
        duration: '22 minutes',
        instructions:
          'Students close all books and notes. Each student is given a question strip with a literature-style question: "How does [author] present the theme of [theme] in [text]? Write about how [author] uses language and structure." Students have 15 minutes to write a single analytical paragraph from memory, using a quotation from their theme spider and applying PEEL structure (Point, Evidence, Explanation, Link). After 15 minutes, students open texts to check the accuracy of their recalled quotation and annotate their paragraph with any corrections. The act of recalling inaccurately and then self-correcting is explicitly framed as a high-value revision technique.',
        differentiation: {
          support:
            'Allow students to use their theme spider during the writing task but not the text itself.',
          core: 'Full closed-book paragraph writing.',
          stretch:
            'Students write two paragraphs - the second addressing a contrasting aspect of the theme - and craft a linking sentence between the two.',
        },
        resources: [
          'Question strips',
          'Studied texts (used only after 15 minutes)',
          'PEEL structure reminder card',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Three Things I Know, One Thing I Will Learn',
      duration: '5 minutes',
      instructions:
        'Students write three things they can now confidently say about their studied text(s) - these must be specific (a theme, a quotation, a character detail) not vague. Then they write one thing they discovered they do not know well enough and commit to a specific action to address it before the next lesson. Teacher collects and notes the "one thing to learn" responses to inform future planning.',
      differentiation: {
        support:
          'Provide a sentence frame: "I know that [character] says [quotation] which shows [theme]..."',
        core: 'Students complete all four prompts independently.',
        stretch:
          'Students write a mini-revision plan for the "one thing" - specifying what resource they will use and how long they will spend on it.',
      },
    },
    homework:
      'Select the three quotations from your theme spider that you feel least confident recalling. Write each one out five times. Then, without looking, write one analytical sentence using each quotation. Check your accuracy and correct any errors in a different colour.',
    worksheetQuestions: [
      {
        question:
          'Explain why selecting an analytically rich quotation is more valuable than selecting a memorable quotation in a literature essay.',
        lines: 4,
        modelAnswer:
          'An analytically rich quotation contains specific language choices (e.g. a metaphor, a loaded connotation, an unusual word) that allow the student to make interesting analytical points about technique and effect. A merely memorable quotation may be famous or important to the plot but offer limited analytical depth. Examiners reward analysis of how language works, so a short, complex quotation is typically more valuable than a long, narratively significant one.',
        marks: 3,
      },
      {
        question: 'What is a "thematic link" and why are they important in literature revision?',
        lines: 4,
        modelAnswer:
          'A thematic link is a connection between how the same theme (e.g. power, loss, identity) is treated in two different texts or two different parts of the same text. They are important in revision because some exam questions ask for comparison across texts, and even single-text questions can be answered more perceptively if a student can trace how a theme develops or shifts throughout the text. Thematic thinking also helps students organise essays by idea rather than by plot summary.',
        marks: 3,
      },
      {
        question:
          'A student revises by re-reading their studied novel three times. Suggest two more effective revision strategies they could use instead, and explain why each is more effective.',
        lines: 5,
        modelAnswer:
          'Strategy 1: Retrieval practice - writing quotations and analytical points from memory, then checking accuracy. This is more effective because it actively tests what has been retained rather than passively re-exposing the student to material they may not be processing. Strategy 2: Timed paragraph writing from closed-book conditions. This simulates exam pressure, develops fluency, and requires the student to produce organised, evidenced analysis under constraint - skills that re-reading alone does not develop.',
        marks: 4,
      },
      {
        question:
          'Write a PEEL paragraph analysing one quotation from a literature text you have studied. Clearly label each section: Point, Evidence, Explanation, Link.',
        lines: 8,
        modelAnswer:
          'Accept any well-structured response. Look for: a clear analytical point that names a theme; an embedded quotation with the technique identified; explanation of the effect on the reader; a linking sentence that connects back to the question or theme and gestures forward to a wider significance. Penalise paragraphs that summarise plot rather than analyse language, or that identify a technique without explaining its effect.',
        marks: 5,
      },
      {
        question:
          'Explain what "authorial intention" means and why examiners value it in a literature response.',
        lines: 4,
        modelAnswer:
          'Authorial intention refers to the deliberate choices a writer makes to create specific effects - the idea that language features are crafted, not accidental. Examiners value it because it demonstrates that a student understands literature as a constructed artefact rather than simply a story. Writing "the writer deliberately uses..." or "Dickens creates this effect in order to..." shows a more sophisticated understanding of how literary meaning is produced than simply describing what happens in the text.',
        marks: 3,
      },
    ],
    teacherNotes: [
      'This lesson should be adapted to the specific texts studied - the theme spider works for any literary text but needs to be populated with relevant quotations.',
      'Closed-book quotation recall is particularly important for Literature papers where open-book access varies - check the Edexcel specification for current paper conditions.',
      'The "write then correct" approach to recalled quotations has strong evidence in cognitive science (retrieval practice with feedback) - explicitly name this for students so they understand why the method works.',
      'If the class is studying multiple texts, consider running this lesson twice with different text focuses, or grouping students by text for the theme spider activity.',
      'Collect theme spiders and display them (anonymised or attributed depending on class culture) as a class revision resource.',
    ],
    targetedSkills: [
      'Quotation Recall',
      'Thematic Analysis',
      'PEEL Paragraph Structure',
      'Retrieval Practice',
      'Authorial Intention',
      'Closed-Book Writing',
    ],
  },

  // ── Lesson y10ext-07: Mock Paper Debrief Skills ────────────────────────────
  {
    id: 'y10ext-07',
    title: 'Mock Paper Debrief: Reading Feedback and Acting on It',
    text: 'IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Understand how to read and interpret mock paper feedback productively',
      'Identify patterns in errors across a marked mock paper rather than treating each mistake in isolation',
      'Rewrite and improve a marked answer using specific feedback and mark scheme criteria',
      'Develop the habit of acting on feedback as part of a structured improvement cycle',
    ],
    successCriteria: [
      'I can categorise my errors from the mock paper into skill-type groups (e.g. evidence, technique identification, time management)',
      "I can read the examiner's mark scheme comments and translate them into specific actions",
      'I can produce an improved version of a marked answer that addresses the identified gaps',
      'I can explain the difference between surface-level feedback (spelling, punctuation) and structural feedback (argument, evidence selection)',
    ],
    keywords: [
      'feedback',
      'improvement',
      'mark scheme',
      'band descriptor',
      'error pattern',
      'redrafting',
      'target',
      'improvement cycle',
      'self-regulation',
    ],
    starterActivity: {
      title: 'Feedback Word Sort',
      duration: '7 minutes',
      instructions:
        'Display ten common feedback comments from marked papers (e.g. "Needs more specific evidence", "Technique identified but effect not explained", "Loses focus on the question", "Good analysis of language", "Narrative retelling - more analysis needed", "Accurate SPaG throughout", "Quotation embedded effectively"). Students sort these into two categories: "High Priority" (worth improving because it affects marks significantly) and "Lower Priority" (worth improving but has less mark impact). Discuss: some students prioritise SPaG corrections, but mark scheme analysis shows that AO2 (analytical quality) contributes far more marks in most questions. This resets student priority thinking.',
      differentiation: {
        support:
          'Provide the ten comments already printed on cards with a rough indication of which AO each comment relates to.',
        core: 'Students sort and justify independently.',
        stretch:
          'Students rank all ten comments from most to least mark-impactful and write a brief rationale for their top three.',
      },
      resources: ['Ten feedback comment cards or slides', 'AO reference sheet'],
    },
    mainActivities: [
      {
        title: 'Error Pattern Analysis',
        duration: '18 minutes',
        instructions:
          "Students receive their marked mock papers (or a selected subset of questions, if preferred). They complete an Error Pattern Grid with four columns: (1) Question Number, (2) Marks Lost, (3) Type of Error (evidence / technique / effect / focus / SPaG / timing), (4) What I Would Do Differently. Students work independently for 12 minutes, then share patterns with a partner. Partners compare: do they make the same types of errors or different ones? Each student then circles their most frequent error type - this is their primary target for the lesson's main task.",
        differentiation: {
          support:
            'Provide a partially completed Error Pattern Grid with "Type of Error" options listed as a tick-box rather than a free-response column.',
          core: 'Students complete the grid independently.',
          stretch:
            'Students calculate what percentage of their marks lost falls into each error category and create a simple bar chart to visualise their error profile.',
        },
        resources: [
          'Marked mock papers',
          'Error Pattern Grid handout',
          'Error type reference list',
        ],
      },
      {
        title: 'Redraft with Purpose',
        duration: '25 minutes',
        instructions:
          'Each student selects the answer from their mock paper where they lost the most marks to their primary error type. They re-read the mark scheme for that question (provided by teacher) and underline every mark-point criterion. They then redraft the answer from scratch (not by adding to the original), deliberately building in the criteria they missed. Teacher circulates, conferring briefly with individual students (2-3 minutes each where possible) to confirm they have correctly diagnosed the issue and are addressing it in the redraft. In the final 5 minutes, students place their original and redraft side by side and highlight the differences - this visual comparison reinforces the improvement concretely.',
        differentiation: {
          support:
            'Provide a structured redraft template for the chosen question type with prompts at each stage.',
          core: 'Students redraft independently using the mark scheme.',
          stretch:
            'Students write a meta-commentary of four to six sentences explaining every deliberate improvement decision they made in the redraft.',
        },
        resources: [
          'Mark scheme extracts for each relevant question',
          'Redraft template (support)',
          'Original mock answers for comparison',
          'Highlighters',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Improvement Contract',
      duration: '6 minutes',
      instructions:
        'Students write a personal Improvement Contract: (1) My primary error pattern is... (2) In my next piece of work I will address this by... (3) I will know I have improved when... Teacher collects and returns in the lesson before the next assessment to remind students of their commitment. This closing ritual establishes feedback and improvement as a cyclical habit rather than a one-off event.',
      differentiation: {
        support: 'Provide a sentence-frame contract template.',
        core: 'Students write the contract independently.',
        stretch:
          'Students write a secondary target in addition to the primary one and suggest a specific revision or practice resource they will use for each.',
      },
    },
    homework:
      "Complete the redraft of the question you worked on in today's lesson if unfinished. Then find one additional question from the mock paper where you can identify the same primary error type you targeted today, and rewrite that answer too.",
    worksheetQuestions: [
      {
        question:
          'Why is it more productive to look for patterns in your errors across a whole paper rather than treating each mistake individually?',
        lines: 4,
        modelAnswer:
          'Error patterns reveal underlying skill gaps that affect multiple questions, meaning one focused improvement effort can raise marks across the entire paper. Treating each mistake individually risks missing the root cause - for example, poor evidence selection may appear in five different questions, but addressing it once (practising embedding quotations) fixes all five simultaneously. Pattern recognition also makes improvement feel manageable rather than overwhelming.',
        marks: 3,
      },
      {
        question:
          'A student receives feedback saying "narrative retelling" on three out of four reading questions. What does this mean and what should they do about it?',
        lines: 5,
        modelAnswer:
          '"Narrative retelling" means the student is summarising what happens in the text rather than analysing how the writer presents it. This typically scores in the lowest mark bands because it demonstrates reading comprehension but not analytical skill. To address it, the student should practise distinguishing between "what" questions (retrieval) and "how" questions (analysis), and practise writing every sentence about a text with a technique name embedded - ensuring every response includes a "how" comment about language choice.',
        marks: 4,
      },
      {
        question:
          'Explain what "redrafting with purpose" means. How is it different from simply correcting mistakes?',
        lines: 4,
        modelAnswer:
          'Redrafting with purpose means rewriting an answer from scratch with specific mark scheme criteria actively in mind, not merely correcting surface errors. Correcting mistakes is reactive and local - changing a spelling here, adding a comma there - whereas purposeful redrafting is structural and strategic, addressing the fundamental analytical or organisational issue that limited the original mark. Purposeful redrafting requires the student to understand why marks were lost, not just that they were.',
        marks: 3,
      },
      {
        question:
          'What is the difference between a "surface-level" feedback point and a "structural" feedback point? Give one example of each.',
        lines: 4,
        modelAnswer:
          'A surface-level feedback point addresses the accuracy and presentation of written expression (e.g. "Check spelling of \'necessary\'"). A structural feedback point addresses the organisation or quality of the argument or analysis itself (e.g. "Your point lacks supporting evidence" or "The essay loses sight of the question in the second half"). Structural feedback has greater mark impact because it relates to higher-weighted AOs.',
        marks: 3,
      },
      {
        question:
          'Write your own Improvement Contract based on a recent piece of English work. Identify your primary error pattern, how you will address it, and how you will know it has improved.',
        lines: 5,
        modelAnswer:
          'Open-ended personal response. Look for: specificity (not "revise more" but "practise embedding quotations in three timed paragraphs per week"), achievability, and a clear success criterion that can be evidenced (e.g. "I will know I have improved when I consistently embed quotations without using a colon before the quote in three consecutive pieces of work").',
        marks: 0,
      },
    ],
    teacherNotes: [
      'This lesson requires marked mock papers to be returned before the lesson begins - plan the lesson for the class period immediately following mock return.',
      "The Error Pattern Grid is a high-value tool: consider keeping copies as a record of each student's development across the year.",
      'Some students find receiving their mock papers back emotionally difficult. Frame the lesson positively: the paper is information, not a verdict.',
      'Individual conferring during the redraft task is the highest-impact intervention in this lesson - prioritise students who are struggling to diagnose their own errors.',
      'The Improvement Contract works best when teachers commit to returning it before the next assessment - build this into planning.',
    ],
    targetedSkills: [
      'Feedback Literacy',
      'Error Pattern Analysis',
      'Redrafting',
      'Mark Scheme Interpretation',
      'Self-Regulation',
      'Metacognition',
    ],
  },

  // ── Lesson y10ext-08: Exam Time Management Workshop ───────────────────────
  {
    id: 'y10ext-08',
    title: 'Exam Time Management Workshop: Planning, Pacing, and Prioritising',
    text: 'IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Calculate and apply a precise timing plan for each question in each Edexcel IGCSE English paper',
      'Understand how to plan a response efficiently without wasting time in the exam',
      'Practise writing under strict sub-question time limits to build pace and confidence',
      'Identify personal tendencies (rushing or over-running) and develop strategies to correct them',
    ],
    successCriteria: [
      'I can produce a timing plan for each paper showing how many minutes to spend on each question',
      'I can complete a reading question within its allocated time and achieve a reasonable mark',
      'I can plan a writing task in under three minutes and produce a structured response from that plan',
      'I can identify whether I tend to rush or over-run and name one strategy to correct this tendency',
    ],
    keywords: [
      'time management',
      'timing plan',
      'mark-per-minute',
      'planning',
      'pacing',
      'prioritisation',
      'under time pressure',
      'checking',
    ],
    starterActivity: {
      title: 'The False Economy',
      duration: '7 minutes',
      instructions:
        'Present this scenario on the board: "A student spends 45 minutes on a 15-mark reading question. The paper is 1 hour 45 minutes long with a 25-mark writing task still to complete." Students calculate how long the writing task now has, and then estimate how many marks the student is likely to score on a 25-mark task completed in 20 minutes versus 35 minutes. Discuss: what does this show about the relationship between time and marks? Establish the central principle: spending more than one minute per mark on a question is almost always a poor trade.',
      differentiation: {
        support:
          'Provide the calculation structure: total time - time used = time remaining; marks-per-minute = marks ÷ minutes.',
        core: 'Students calculate and discuss independently.',
        stretch:
          'Students calculate the break-even point: at what point does extra time spent on a 15-mark question stop being worth the time cost? Use mark scheme band descriptors to justify.',
      },
      resources: ['Scenario on board', 'Mark scheme band descriptor extract for writing task'],
    },
    mainActivities: [
      {
        title: 'Building Your Timing Plans',
        duration: '20 minutes',
        instructions:
          'Working from the Edexcel IGCSE English Language and Literature paper structures, students build a personal timing plan for each paper. For Language: total time is divided by total marks to find the mark-per-minute rate, then planning time (3-5 minutes) and checking time (5 minutes) are subtracted and allocated. For Literature: the same process applies, with attention to whether the question is extract-based or whole-text. Students write their timing plans on a card that will be kept in their revision folder. Teacher models the first plan live and discusses common pitfalls (e.g. forgetting to allocate planning time; underestimating how long writing tasks take). Students compare timing plans with a partner to identify discrepancies.',
        differentiation: {
          support:
            'Provide a partially completed timing plan template for one paper; students complete the second independently.',
          core: 'Students produce both plans independently using the paper structure summary provided.',
          stretch:
            'Students also consider contingency: what will they do if they fall behind by 5 minutes in the exam? They write a brief contingency plan.',
        },
        resources: [
          'Edexcel paper structure summary (mark allocations and question list)',
          'Timing plan card template',
          'Partner comparison checklist',
        ],
      },
      {
        title: 'Paced Mini-Tasks',
        duration: '22 minutes',
        instructions:
          'Three rapid-fire paced tasks to build the physical habit of working to time:\n\nTask 1 (8 minutes): A 10-mark reading inference question. Students have exactly 10 minutes. Pens down at the signal.\n\nTask 2 (3 minutes): Plan only (no writing) for a 20-mark transactional writing task. Students must produce a brief outline covering purpose, audience, form, structure, and three main points.\n\nTask 3 (8 minutes): Write an opening paragraph only for the writing task they planned in Task 2.\n\nBrief class share after each task. Teacher discusses: "Did you finish? Did you have to rush? What did you cut?" The goal is to make time awareness a conscious habit.',
        differentiation: {
          support: 'Provide a planning frame for Task 2 with section headings pre-printed.',
          core: 'Students complete all three tasks with no scaffolding.',
          stretch:
            'Students also write a brief self-commentary after Task 1 and Task 3, noting their pacing and quality of evidence or technique use.',
        },
        resources: [
          'Reading inference extract and question',
          'Writing task prompt',
          'Planning frame (support)',
          'Timer visible to class',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Rush or Over-Run? Self-Profile',
      duration: '6 minutes',
      instructions:
        'Students complete a brief self-profile: "I tend to (rush / over-run / both / neither)." They then write one strategy from today\'s lesson that they will use in the next timed task. Options discussed include: using the mark = minute rule strictly, setting a midpoint check-in alarm during the exam, planning before writing and sticking to the plan, answering shorter questions first. Students write their chosen strategy on their timing plan card so it is integrated with the plan rather than stored separately.',
      differentiation: {
        support:
          'Provide a list of strategies from which students select rather than generating from scratch.',
        core: 'Students self-profile and select a strategy independently.',
        stretch:
          "Students design a pre-exam checklist (five questions to ask yourself in the first five minutes of the exam) based on today's lesson.",
      },
    },
    homework:
      'Complete the writing task you planned in lesson today (under timed conditions at home - 25 minutes maximum). Mark your own attempt using the timing plan card: note whether you kept to time for the planning stage and the writing stage. Write two sentences reflecting on what you would do differently.',
    worksheetQuestions: [
      {
        question:
          'A student has 1 hour 30 minutes for a Literature paper with three questions worth 20, 20, and 20 marks. Suggest a timing plan and explain your allocation.',
        lines: 5,
        modelAnswer:
          'Total time: 90 minutes for 60 marks = 1.5 minutes per mark. Planning for three questions: 3 x 3 minutes = 9 minutes. Writing: 3 x 25 minutes = 75 minutes. Checking: 6 minutes. Total: 90 minutes. Each 20-mark question receives 25 minutes writing time plus 3 minutes planning. This ensures all three questions are attempted fully, which is essential as leaving a question blank costs more marks than an imperfect answer completed under time pressure.',
        marks: 4,
      },
      {
        question:
          'Why should a student plan a writing task before beginning to write, even under exam time pressure?',
        lines: 4,
        modelAnswer:
          'Planning allocates a few minutes to organise ideas, structure, and key points before writing begins. This prevents students from writing into a corner (changing direction mid-response), ensures the writing addresses the whole question, and produces more coherent, well-structured responses. The plan also acts as a scaffold if the student becomes anxious or loses their thread partway through - they can return to the plan to orient themselves. The marks gained from a structured response typically outweigh the marks that could have been added with extra unplanned writing time.',
        marks: 3,
      },
      {
        question: 'What is the "mark-per-minute" rule and what are its limitations?',
        lines: 4,
        modelAnswer:
          'The mark-per-minute rule suggests spending approximately one minute per mark available - so a 10-mark question gets 10 minutes, a 25-mark question gets 25 minutes. Its limitations are: it does not account for planning time (which should be added to writing questions), it does not differentiate between question types (retrieval questions may be faster than analysis questions for the same mark total), and it requires adjustment if a student is a slower writer. It is a useful starting point but should be personalised based on practice.',
        marks: 3,
      },
      {
        question:
          'Describe two specific strategies a student could use if they realise they are running out of time during an exam.',
        lines: 4,
        modelAnswer:
          'Strategy 1: Move to the next question immediately rather than completing the current one - a partially complete second question gains more marks than a perfectly complete first question that takes time from the remaining questions. Strategy 2: Switch to note form or bullet points for the remaining answer if the examiner allows it - some mark schemes award marks for valid content regardless of full-sentence presentation, and incomplete bullet-point answers can still access some marks.',
        marks: 4,
      },
      {
        question:
          'Reflect on your typical behaviour in an exam: do you tend to rush, over-run, or manage your time well? What evidence supports your answer?',
        lines: 4,
        modelAnswer:
          'Open-ended personal reflection. Look for: honest self-assessment supported by specific evidence from past practice (e.g. "In the mock I spent 30 minutes on Question 1 and only had 10 minutes for the writing task"), identification of a root cause (anxiety, poor planning, over-perfectionism), and at least one concrete strategy to address the identified tendency.',
        marks: 0,
      },
    ],
    teacherNotes: [
      'This lesson is most effective when placed shortly before a mock or the real examination - the immediacy of the exam creates motivation to engage with the strategies.',
      'Some students have access to extra time as an exam accommodation - acknowledge this and ask them to calculate their own adjusted timing plans.',
      'The paced mini-tasks are deliberately short and deliberately uncomfortable - this is the point. Students need to experience the constraint to build the habit.',
      'The timing plan card should be a physical artefact students keep - encourage them to practise using it in every future timed task at home.',
      'Common student mistake: assuming that checking time is optional. Emphasise that checking is a mark-recovery opportunity, not a luxury.',
    ],
    targetedSkills: [
      'Time Management',
      'Exam Planning',
      'Pacing',
      'Writing Under Pressure',
      'Self-Regulation',
      'Exam Technique',
    ],
  },

  // ── Lesson y10ext-09: Model Answer Analysis and Peer Marking ──────────────
  {
    id: 'y10ext-09',
    title: 'Model Answer Analysis and Peer Marking: Learning from Excellence',
    text: 'IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Analyse model answers to identify the specific features that earn marks at the highest band',
      'Use mark scheme band descriptors to award and justify marks on peer and model answers',
      'Identify the gap between current performance and the highest band and plan how to close it',
      'Develop peer marking skills that improve the quality of written feedback given to others',
    ],
    successCriteria: [
      'I can identify the features of a high-band answer and explain why each feature earns marks',
      'I can accurately apply mark scheme band descriptors to award a mark to a sample answer',
      "I can write specific, constructive feedback on a peer's work using mark scheme language",
      'I can name two features of the model answer that I will deliberately include in my next piece of assessed work',
    ],
    keywords: [
      'model answer',
      'mark scheme',
      'band descriptor',
      'peer marking',
      'constructive feedback',
      'highest band',
      'gap analysis',
      'WWW',
      'EBI',
    ],
    starterActivity: {
      title: 'Spot the Difference: Strong vs. Weak',
      duration: '8 minutes',
      instructions:
        'Display two short answers to the same question - one scoring in the bottom band, one in the top band. Both are approximately the same length so visual length cannot be used as a cue. Students read both and write two differences they notice. Class discussion: which is better and why? Take responses - students often identify surface features (quotation use, vocabulary) but rarely initially name structural features (analytical progression, technique naming, effect explanation). Probe until both surface and structural differences are articulated. Reveal the marks.',
      differentiation: {
        support:
          'Provide the two answers with colour coding: one colour for quotation use, another for technique identification, another for effect explanation - students count the instances of each.',
        core: 'Students read and compare independently.',
        stretch:
          'Students write three differences using specific mark scheme language (e.g. "the stronger answer demonstrates perceptive analysis while the weaker offers only relevant comment").',
      },
      resources: [
        'Two sample answers displayed or printed',
        'Mark scheme band descriptors for reference',
      ],
    },
    mainActivities: [
      {
        title: 'Model Answer Deconstruction',
        duration: '20 minutes',
        instructions:
          'Distribute a top-band model answer for a language analysis question (8-10 marks). Students annotate it using a colour code: yellow = evidence embedded, blue = technique identified, green = effect explained, pink = authorial intention commented on. After annotating, students count up how many instances of each colour appear and note the result. Discussion: in a top-band answer, how many times do these moves occur? Students then read the band descriptor for the top band and match their annotations to the specific descriptor language. This makes the abstract language of band descriptors concrete and visible.',
        differentiation: {
          support:
            'Provide the model answer with the first two paragraphs already annotated; students annotate the remaining two paragraphs.',
          core: 'Students annotate the full model answer independently.',
          stretch:
            'Students rewrite the band descriptor for the top band in their own words and explain what a student would need to do in each sentence of their answer to meet every criterion.',
        },
        resources: [
          'Model answer handout',
          'Band descriptor extract for relevant question type',
          'Four-colour highlighter set or coloured pens',
        ],
      },
      {
        title: 'Peer Marking Round',
        duration: '22 minutes',
        instructions:
          "Students exchange a recent piece of their own marked (or unmarked) work with a partner. Using the mark scheme and band descriptors, each student marks their partner's work following a structured protocol: (1) read the full answer without marking, (2) read again and annotate the margin with AO ticks where criteria are met, (3) identify the band using the descriptor, (4) write two WWW (What Went Well) comments with evidence from the answer, (5) write one EBI (Even Better If) comment that is specific and actionable. Students then return work and discuss their peer mark for 3 minutes. Resolve any mark disagreements collaboratively by returning to the mark scheme.",
        differentiation: {
          support:
            'Provide a structured peer marking frame with sections for each of the five protocol steps.',
          core: 'Students follow the protocol with the mark scheme.',
          stretch:
            'Students also award a predicted exam grade based on the band and write a sentence explaining what the student would need to do differently to move up one band.',
        },
        resources: [
          "Students' own recent work",
          'Mark scheme handout',
          'Peer marking frame (support)',
          'Coloured pens for annotation',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Two to Steal',
      duration: '6 minutes',
      instructions:
        'Students identify two specific features from the model answer they will deliberately "steal" (adopt) in their next piece of written work. They write these as concrete actions: "In my next answer I will... because the model shows that this earns marks by..." Students share one idea each with the person next to them. Teacher closes by emphasising that analysing excellent work is one of the most effective ways to improve, and that peer marking develops both critical reading and writing quality simultaneously.',
      differentiation: {
        support:
          'Provide a menu of features from the model answer and students select the two most useful.',
        core: 'Students identify their two features independently.',
        stretch:
          'Students identify a third feature that the model answer demonstrates, explain in technical language why it works, and predict which AO band it specifically addresses.',
      },
    },
    homework:
      'Write a new analytical paragraph responding to the same question the model answer addressed. Without looking at the model, try to include the two features you identified to "steal" today. Then compare your paragraph to the model - highlight every moment where your paragraph matches a feature of the model and circle any feature the model has that yours still lacks.',
    worksheetQuestions: [
      {
        question:
          'What is the purpose of reading a mark scheme "band descriptor" rather than just checking whether a mark point is present?',
        lines: 4,
        modelAnswer:
          'Band descriptors describe the holistic quality of a response rather than a checklist of individual points. They reveal what distinguishes Level 3 analysis from Level 2 analysis in terms of the depth, consistency, and sophistication of analytical thinking. A response might contain quotations (meeting a mark point) but still be in a lower band because the analysis is superficial. Band descriptors help students and markers understand that quality, not just content, determines the final mark.',
        marks: 3,
      },
      {
        question:
          'Explain what "WWW" and "EBI" mean in the context of peer marking. Why is an EBI comment only useful if it is specific?',
        lines: 4,
        modelAnswer:
          '"WWW" stands for "What Went Well" - identifying and evidencing the strengths of the response. "EBI" stands for "Even Better If" - suggesting a specific improvement. A vague EBI such as "add more analysis" is not useful because it does not tell the writer what to analyse, how to do it, or why it would improve their mark. A specific EBI (e.g. "Even better if you had named the technique used in the quotation and explained its effect on the reader") gives the writer a concrete action they can take immediately.',
        marks: 3,
      },
      {
        question:
          'Why might a student learn more from analysing a model answer than from simply being told what to do better?',
        lines: 4,
        modelAnswer:
          'A model answer provides a concrete example of what excellence looks like in practice, making abstract feedback tangible. Students can identify the precise language, structure, and analytical moves that earn marks, and then imitate or adapt these in their own writing. Being told "include more analysis" is general; seeing exactly how a top-band student embeds a quotation, names a technique, explains the effect, and links to authorial intention provides a replicable template.',
        marks: 3,
      },
      {
        question:
          "A student peer-marks their partner's work and gives it a mark that is two bands higher than the actual band. What might have caused this and how could it be avoided?",
        lines: 4,
        modelAnswer:
          'The student may have marked for effort or length rather than for the specific criteria in the mark scheme, or may have given credit for surface features (quotation use) without checking whether those features were used analytically rather than decoratively. To avoid over-marking: re-read the band descriptors carefully before deciding on a band, use the annotation protocol (tick each criterion met) rather than reading holistically, and if uncertain between two bands, default to the lower band until specific evidence supports the higher one.',
        marks: 3,
      },
      {
        question:
          "What two features from today's model answer will you use in your next piece of work? Explain why each feature earns marks.",
        lines: 5,
        modelAnswer:
          'Open-ended personal response. Look for: two features that are concrete and named (not vague qualities like "better analysis"), an explanation of how each feature meets a specific AO criterion or band descriptor language, and evidence that the student understands the difference between identifying the feature and enacting it in their own writing.',
        marks: 0,
      },
    ],
    teacherNotes: [
      'Source model answers from genuine examiner reports, published mark schemes, or anonymised high-scoring student work. Do not fabricate model answers, as small inaccuracies undermine student trust.',
      'The peer marking protocol (five steps) is worth practising multiple times across the year - it becomes quicker and more accurate with repetition.',
      'Handle the exchange of student work sensitively - in some classes it works better to exchange with a trusted partner; in others, anonymous exchange via teacher is preferable.',
      'The "Two to Steal" plenary is deliberately framed as borrowing from excellence rather than as criticism of current performance - maintain this positive frame.',
      'Consider building a class archive of annotated model answers that students can access for revision throughout the year.',
    ],
    targetedSkills: [
      'Mark Scheme Literacy',
      'Peer Assessment',
      'Band Descriptor Analysis',
      'Analytical Writing',
      'Constructive Feedback',
      'Self-Directed Improvement',
    ],
  },

  // ── Lesson y10ext-10: End-of-Year Consolidation Assessment ───────────────
  {
    id: 'y10ext-10',
    title: 'End-of-Year Consolidation: Assessment, Reflection, and Next Steps',
    text: 'IGCSE English Language and Literature',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Demonstrate consolidated understanding of skills from across the year in a short mixed assessment',
      'Reflect on progress made since the beginning of Year 10 using evidence from completed work',
      'Identify strengths and remaining targets for Year 11 with specific reference to exam requirements',
      'Set motivating, achievable revision goals for the summer break that bridge Year 10 and Year 11',
    ],
    successCriteria: [
      'I can produce a competent response to both a reading and a writing task within the allotted time',
      'I can articulate at least two areas of genuine improvement from this year with evidence',
      'I can name two specific targets to address in Year 11, linked to AO criteria',
      'I can produce a summer revision plan that is realistic, specific, and AO-focused',
    ],
    keywords: [
      'consolidation',
      'assessment',
      'reflection',
      'progress',
      'target',
      'revision plan',
      'Year 11',
      'summer reading',
      'self-evaluation',
    ],
    starterActivity: {
      title: 'Year in Review: My English Journey',
      duration: '8 minutes',
      instructions:
        'Students are given a brief written prompt: "Think back to September. What were you confident about in English? What were you unsure about? What can you do now that you couldn\'t do then?" Students write freely for 5 minutes. Then share with a partner: each person names one skill they have developed this year with evidence (e.g. "I can now embed quotations without using a colon"). Teacher takes brief verbal responses from around the class. This establishes a positive and reflective tone for the lesson and helps students articulate growth.',
      differentiation: {
        support:
          'Provide a prompt list of skills taught this year (close reading, embedding quotations, PEEL paragraphs, timed writing, etc.) to prompt memory.',
        core: 'Students write freely from their own recollection.',
        stretch:
          'Students rank the top three skills they have developed and explain which will be most valuable in the Year 11 exams and why.',
      },
      resources: ['Written reflection prompt', 'Skills list (support)'],
    },
    mainActivities: [
      {
        title: 'Consolidation Mini-Assessment',
        duration: '30 minutes',
        instructions:
          'Students complete a short consolidation assessment designed to sample the key skills from across the year: (1) a 10-minute reading inference question (6 marks) on an unseen prose extract, requiring evidence and explanation; (2) a 10-minute language analysis question (8 marks) on a second extract or a different section of the same extract; (3) a 10-minute short writing task (6 marks) in which students write the opening two paragraphs of a descriptive or narrative piece. This is deliberately low-stakes (formative) - make clear to students that this is a celebration of and reflection on progress, not a high-pressure judgment. Teacher circulates and notes observations for formative assessment purposes.',
        differentiation: {
          support: 'For the writing task, provide an opening sentence and a brief planning frame.',
          core: 'Students complete all three tasks independently.',
          stretch:
            'Students complete all three tasks and, for each, write a self-assessment sentence explaining the technique or skill they most deliberately used.',
        },
        resources: [
          'Unseen extract and question paper',
          'Writing task prompt',
          'Planning frame (support tier)',
          'Timer',
        ],
      },
      {
        title: 'Progress Review and Year 11 Planning',
        duration: '14 minutes',
        instructions:
          'Students receive a Year 10 Progress Review sheet. In the first section, they identify two areas of genuine improvement from this year with specific evidence (e.g. "I improved at embedding quotations - in September I wrote \'the writer uses a metaphor. The metaphor is...\'- now I write the technique name within the analytical sentence"). In the second section, they identify two targets for Year 11 with reference to AO criteria. In the third section, they produce a Summer Revision Plan: a realistic four-week plan specifying one or two revision tasks per week (e.g. Week 1: re-read one set Literature text and complete a theme spider; Week 2: practise three language analysis paragraphs using past paper extracts). Teacher models an example plan on the board.',
        differentiation: {
          support:
            'Provide a completed example Progress Review sheet showing what the level of detail expected looks like.',
          core: 'Students complete the Progress Review sheet independently.',
          stretch:
            'Students also write a letter to their Year 11 self: advice on how to approach the IGCSE exam season, based on what they have learned this year.',
        },
        resources: [
          'Year 10 Progress Review sheet',
          'Example Progress Review (support)',
          'Summer Revision Plan template',
          'Edexcel IGCSE paper structure summary for reference',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Signature Skill and Summer Commitment',
      duration: '5 minutes',
      instructions:
        'Each student writes their "Signature Skill" - the one analytical or exam technique they feel most defines their improvement this year - on a card. These are shared around the class, read aloud, and displayed on the board. Teacher affirms the collective growth visible in the room and connects it explicitly to Year 11 readiness. Students then write their single most important summer revision commitment on the back of the card and sign it. The cards are collected and will be returned at the start of Year 11 as a reminder of their Year 10 commitment.',
      differentiation: {
        support:
          'Provide a sentence frame: "My signature skill this year is [skill] because [evidence]."',
        core: 'Students identify and write their signature skill independently.',
        stretch:
          'Students write a second card: "The skill I most need to develop in Year 11 is [skill] because [evidence from this year\'s work]."',
      },
    },
    homework:
      "Complete the Summer Revision Plan you began in today's lesson. Make sure it covers at least four weeks and includes at least one Literature task, one Language task, and one timed writing task. Show it to a parent or guardian and ask them to help you stick to it. Bring it to your first English lesson in Year 11.",
    worksheetQuestions: [
      {
        question:
          'Describe two analytical skills you have developed during Year 10 and explain how each will help you in the IGCSE exams.',
        lines: 6,
        modelAnswer:
          'Accept any two specific, named skills with evidence of development and clear connection to exam requirements. Strong responses will name skills such as "embedding quotations without using a colon", "identifying the difference between retrieval and inference questions", "using PAFT to approach unseen texts", or "applying PEEL structure to literature paragraphs", and will connect each to a specific paper or question type rather than making vague exam references.',
        marks: 4,
      },
      {
        question:
          'What is the difference between a vague revision target ("revise literature") and a specific, actionable target? Write one example of each.',
        lines: 4,
        modelAnswer:
          'A vague target lacks a specific task, text, timeframe, or method, making it impossible to know when it has been achieved. Example: "revise literature" - the student does not know what to read, how to revise, or when they have finished. A specific, actionable target includes all of these: "By the end of Week 2, I will have re-read \'An Inspector Calls\', completed a theme spider, and written two closed-book PEEL paragraphs on the theme of responsibility, self-marked against the mark scheme."',
        marks: 3,
      },
      {
        question:
          'Why is summer revision between Year 10 and Year 11 particularly valuable for IGCSE English students?',
        lines: 4,
        modelAnswer:
          'Literature texts studied in Year 10 need to be retained in enough detail for Year 11 exams - summer revision prevents the forgetting curve from eroding textual knowledge built up over two terms. Language skills (timed writing, analytical paragraphing) deteriorate without regular practice; completing a few timed tasks over summer maintains the habits developed in Year 10. Arriving at Year 11 with secure prior knowledge also frees lesson time for new material and higher-level exam preparation.',
        marks: 3,
      },
      {
        question:
          'Reflect on the consolidation assessment you completed today. Which of the three tasks did you feel most confident in, and which least? What does this tell you about your Year 11 targets?',
        lines: 5,
        modelAnswer:
          'Open-ended personal reflection. Look for: honest evaluation that is specific rather than general ("I struggled with the language analysis because I forgot to name the technique" rather than "I found it hard"), a clear link between confidence level and a named skill or AO, and a target for Year 11 that is directly derived from the evidence in the assessment rather than a generic wish to "do better".',
        marks: 0,
      },
      {
        question:
          'Write a Summer Revision Plan for four weeks. For each week, specify at least one task, the text or skill it focuses on, how long it will take, and how you will know when you have done it well enough.',
        lines: 8,
        modelAnswer:
          'Look for: four weeks with at least one task each; a balance of Language and Literature tasks; tasks that are active (writing, recalling, practising) rather than passive (re-reading alone); a success criterion for each task that is measurable (e.g. "self-mark against the mark scheme" or "three attempts at quotation recall until all correct"); and a realistic time allocation per task. Penalise plans that are vague, passive-only, or that focus exclusively on one paper.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'This is a celebratory lesson as well as a productive one - acknowledge and name the real progress the class has made. The emotional dimension of end-of-year reflection is worth investing time in.',
      "The consolidation mini-assessment data is formative; use it to write brief individual comments on each student's Progress Review sheet before the next academic year if staffing allows.",
      'The Signature Skill cards are genuinely powerful as a Year 11 transition tool - keep them safely and return them in the first lesson of Year 11 to reconnect students with their own growth narrative.',
      'The Summer Revision Plan is most effective when students take ownership of it rather than following a prescribed list. Offer the template as a structure, not a constraint.',
      "Consider sending a brief summary of the lesson's key messages home (via a letter or email) so that parents and guardians can support the summer revision commitment made in the plenary.",
    ],
    targetedSkills: [
      'Consolidation',
      'Self-Reflection',
      'Progress Evaluation',
      'Target Setting',
      'Summer Revision Planning',
      'Exam Readiness',
      'Metacognition',
    ],
  },
]
