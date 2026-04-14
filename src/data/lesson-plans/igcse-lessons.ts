// @ts-nocheck
// ─── IGCSE / CAIE English Lesson Plans ──────────────────────────────────────
//
// 10 comprehensive lessons targeting Cambridge IGCSE Language A / Language B
// and Literature syllabuses. Covers reading, writing, literature,
// coursework portfolio, and exam strategy across Core and Extended tiers.

import type { LessonPlan } from '@/types'

export const igcseLessons: LessonPlan[] = [
  // ─────────────────────────────────────────────
  // LESSON 1: Reading Passages — Comprehension & Summary
  // ─────────────────────────────────────────────
  {
    id: 'igcse-01-reading-comprehension-summary',
    title: 'IGCSE Language: Reading Passages — Comprehension & Summary',
    text: 'IGCSE English Language',
    board: 'CAIE',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Understand how IGCSE reading passages are structured and what examiners expect at each question level',
      'Practise retrieving explicit information and making inferences from non-fiction texts (R1, R2)',
      'Develop summary-writing skills that meet the 1-mark-per-point model used in Paper 2 Question 2',
      'Learn to select and reorganise information concisely without lifting whole phrases from the passage'
    ],
    successCriteria: [
      'I can locate and retrieve explicit information from a non-fiction passage accurately',
      'I can make at least three valid inferences supported by textual evidence',
      'I can write a summary paragraph containing 10+ content points in my own words',
      'I can explain the difference between copying the text and paraphrasing effectively'
    ],
    keywords: [
      'comprehension',
      'inference',
      'explicit',
      'implicit',
      'summary',
      'paraphrase',
      'content point',
      'own words'
    ],
    starterActivity: {
      title: 'Mark Scheme Myth-Buster',
      duration: '8 minutes',
      instructions:
        'Display five common student misconceptions about IGCSE reading papers on the board (e.g. "You must write in full sentences for every question", "Summary means copying out the passage", "You lose marks for incorrect spelling"). Students vote agree/disagree on mini-whiteboards. Teacher reveals the truth for each, referencing the IGCSE Language A mark scheme descriptors for Reading (R1–R5). Establish the key principle: examiners reward precise selection and own words.',
      differentiation: {
        support: 'Provide the five statements as a printed handout so students can annotate and keep for reference.',
        core: 'Students justify their agree/disagree vote with a reason before the teacher reveals the answer.',
        stretch: 'Students predict what the mark scheme actually says for each misconception before the reveal.'
      },
      resources: ['Myth-Buster statement slides', 'Mini-whiteboards']
    },
    mainActivities: [
      {
        title: 'Comprehension Question Clinic — Explicit & Implicit',
        duration: '20 minutes',
        instructions:
          'Distribute a past-paper style passage (non-fiction, approximately 700 words). Model how to approach a typical Q1-style comprehension question: read the question, locate the relevant paragraph, highlight key information, formulate a response using own words. Students then attempt three comprehension questions independently, colour-coding their annotations (blue = explicit detail, green = inference). Teacher circulates and targets students who are copying verbatim, coaching them to paraphrase. Peer-mark using a simplified mark scheme grid projected on screen.',
        differentiation: {
          support: 'Provide line references indicating where answers can be found. Offer sentence starters for inference questions: "This suggests that...", "We can infer...".',
          core: 'Students annotate and answer independently, then peer-mark against the projected mark scheme.',
          stretch: 'Students write an additional question of their own that requires inference, then swap with a partner to answer it.'
        },
        resources: [
          'Past-paper style non-fiction passage (~700 words)',
          'Comprehension questions worksheet (3 questions)',
          'Simplified mark scheme grid'
        ]
      },
      {
        title: 'Summary Writing — The 15-Point Challenge',
        duration: '22 minutes',
        instructions:
          'Introduce the Paper 2 summary question format: students must select and reorganise relevant points from the passage(s) into a single coherent paragraph. Model the process: (1) underline the focus of the question, (2) scan for relevant content points, (3) number each distinct point in the margin, (4) draft a summary using own words and connectives. Students then attempt a timed summary task (15 minutes). After writing, pairs swap and tally how many valid content points appear, aiming for the 15-point maximum. Discuss which points were missed and why paraphrasing matters for the style mark (W1–W5).',
        differentiation: {
          support: 'Provide a content-point checklist with the first five points identified. Offer a connectives word bank (furthermore, additionally, in contrast) for structuring the summary.',
          core: 'Students identify content points and write the summary independently. They tally points with a partner and self-assess for paraphrasing quality.',
          stretch: 'Students attempt the summary using two passages (as in the Extended tier Paper 2) and must synthesise points from both sources, maintaining cohesion and their own voice throughout.'
        },
        resources: [
          'Summary task worksheet with passage and question',
          'Content-point checklist (support tier)',
          'Connectives word bank'
        ]
      }
    ],
    plenaryActivity: {
      title: 'Exit Reflection — One Thing I Will Do Differently',
      duration: '5 minutes',
      instructions:
        'Students write one specific action they will take next time they face a reading/summary question (e.g. "I will number my content points in the margin before writing", "I will paraphrase every point rather than copying"). Teacher collects responses to inform targeted feedback and grouping for the next lesson.',
      differentiation: {
        support: 'Provide three options to choose from and ask students to explain their choice.',
        core: 'Students write their own specific action independently.',
        stretch: 'Students write their action and explain how it links to a specific part of the mark scheme (R or W descriptors).'
      }
    },
    homework:
      'Complete a full Paper 2 Q1 and Q2 from a CAIE past paper under timed conditions. Highlight content points in your summary and self-assess against the mark scheme.',
    worksheetQuestions: [
      {
        question: 'Read the passage carefully. According to paragraphs 2 and 3, identify three reasons why the writer found the experience challenging.',
        lines: 5,
        modelAnswer:
          'The writer found the experience challenging because (1) the weather conditions were far worse than expected, with heavy rain making the path treacherous, (2) their equipment was inadequate for the terrain, and (3) the group was divided about whether to continue, creating tension and slowing progress.',
        marks: 3
      },
      {
        question: 'What impression does the writer give of the local community in paragraph 4? Support your answer with evidence from the text.',
        lines: 6,
        modelAnswer:
          'The writer gives the impression that the local community is welcoming but cautious. The phrase "they watched us with curiosity rather than hostility" suggests openness tempered with wariness. The detail about offering "steaming cups of tea without being asked" implies a natural generosity and hospitality that does not require formal invitation.',
        marks: 4
      },
      {
        question: 'Summarise what the passage tells you about the difficulties of travelling in remote areas. Use your own words as far as possible.',
        lines: 10,
        modelAnswer:
          'Travelling in remote areas presents numerous difficulties. Transport infrastructure is often unreliable, with roads becoming impassable in poor weather. Communication is limited, as mobile phone signals are frequently unavailable. Supplies must be carried rather than purchased locally, adding physical burden to the journey. Navigation is complicated by unmarked paths and the absence of signage. Medical assistance is hours away if accidents occur. The psychological challenge of isolation can be as demanding as the physical obstacles, with travellers reporting feelings of vulnerability and exhaustion after extended periods without contact.',
        marks: 15
      },
      {
        question: 'Explain what the writer means by the phrase "the landscape swallowed us whole" (line 17). How does this language choice affect the reader?',
        lines: 5,
        modelAnswer:
          'The metaphor "the landscape swallowed us whole" personifies the environment as a living creature consuming the travellers, suggesting they felt overwhelmed and insignificant against the vastness of their surroundings. The word "swallowed" implies they were engulfed completely, with no escape, creating a sense of vulnerability and the power of nature over humans.',
        marks: 4
      }
    ],
    teacherNotes: [
      'This lesson targets Assessment Objectives R1 (understand explicit meanings), R2 (understand implicit meanings and attitudes), and W1–W5 for summary writing.',
      'The summary mark scheme rewards both content (1 mark per point, up to 15) and style (up to 5 marks for use of own words and cohesion).',
      'For Extended candidates, remind them that Paper 2 uses two passages and the summary must draw from both. Core candidates work with a single passage.',
      'Common errors to watch for: students copying verbatim from the passage, missing the focus of the question, and writing summaries that include personal opinions or commentary rather than information from the text.',
      'The IGCSE Language A and Language B syllabuses are identical in content — Language B is simply the code used when a centre enters candidates for both Core and Extended.'
    ],
    targetedSkills: [
      'Reading Comprehension',
      'Summary Writing',
      'Inference',
      'Information Retrieval',
      'Paraphrasing'
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 2: Directed Writing & Composition
  // ─────────────────────────────────────────────
  {
    id: 'igcse-02-directed-writing-composition',
    title: 'IGCSE Language: Directed Writing & Composition',
    text: 'IGCSE English Language',
    board: 'CAIE',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Understand the two-part structure of Paper 1: directed writing (Section A) and composition (Section B)',
      'Analyse how directed writing requires reading skills (selecting content) combined with writing skills (adapting voice and register)',
      'Practise planning and drafting a composition in descriptive or narrative form to meet Band 1–2 descriptors',
      'Apply CAIE assessment criteria: content/reading (up to 15 marks) and writing quality (up to 25 marks) in directed writing'
    ],
    successCriteria: [
      'I can identify the format, audience, and purpose required by a directed writing prompt',
      'I can select at least 10 content points from a stimulus passage and adapt them into a specified format',
      'I can write an effective composition opening that establishes atmosphere, character, or narrative voice',
      'I can explain the difference between directed writing and free composition in terms of assessment'
    ],
    keywords: [
      'directed writing',
      'composition',
      'register',
      'format',
      'audience',
      'purpose',
      'descriptive',
      'narrative'
    ],
    starterActivity: {
      title: 'Voice Swap — Same Content, Different Register',
      duration: '8 minutes',
      instructions:
        'Display a short factual paragraph about a school event on the board. In pairs, students rewrite the same information as (a) a formal letter to a parent, and (b) a diary entry by a student. Share examples under the visualiser and discuss how register, tone, and vocabulary shift while the content stays the same. Establish the core principle of directed writing: you must transform source material into a specified format and voice while retaining the key information.',
      differentiation: {
        support: 'Provide a word bank contrasting formal and informal vocabulary (e.g. "request" vs "ask", "unfortunate incident" vs "bad thing that happened").',
        core: 'Students complete both rewrites independently and highlight the vocabulary changes they made.',
        stretch: 'Students add a third version — a news report — and discuss how journalistic register differs from both personal and formal writing.'
      },
      resources: ['Factual paragraph slide', 'Word bank (support tier)']
    },
    mainActivities: [
      {
        title: 'Directed Writing Masterclass — Reading Into Writing',
        duration: '22 minutes',
        instructions:
          'Distribute a past-paper style stimulus passage and a directed writing prompt (e.g. "You are a journalist. Using the information from the passage, write an article for a local newspaper..."). Model the process step-by-step: (1) underline the task requirements — format, audience, purpose, (2) scan the passage and number 10+ relevant content points in the margin, (3) plan the response by organising points into a logical structure appropriate to the format, (4) draft the opening paragraph demonstrating adapted register and embedded content. Students then complete their own plan and write the first two paragraphs. Teacher uses the visualiser to annotate a student example against the mark scheme: Content (up to 15) and Language (up to 25).',
        differentiation: {
          support: 'Provide a content-point checklist so students can tick off points as they incorporate them. Offer a format template showing the structure of the required text type.',
          core: 'Students plan and draft independently. They self-assess their opening against the mark scheme for content coverage and register appropriateness.',
          stretch: 'Students write the full directed writing response (400–450 words) and annotate their own work to show where they have addressed content points and adapted register.'
        },
        resources: [
          'Stimulus passage for directed writing',
          'Directed writing prompt sheet',
          'Content-point checklist (support tier)',
          'Mark scheme descriptors (Content + Language)'
        ]
      },
      {
        title: 'Composition Workshop — Descriptive or Narrative',
        duration: '22 minutes',
        instructions:
          'Present two composition choices (one descriptive, one narrative) mirroring Section B of Paper 1. Discuss the hallmarks of Band 1 writing: sophisticated vocabulary, varied sentence structures, controlled paragraphing, and a sense of crafted purpose. Students spend 5 minutes planning — using a spider diagram for descriptive writing or a five-part narrative arc (exposition, rising action, climax, falling action, resolution) for storytelling — then 15 minutes drafting. In the final 2 minutes, students proofread for SPaG errors, marking corrections in a different colour pen. Collect drafts for formative assessment.',
        differentiation: {
          support: 'Provide planning templates for both options with guiding questions at each stage. Offer a vocabulary enhancement sheet with ambitious alternatives to common words.',
          core: 'Students plan and draft independently using the method of their choice. They proofread carefully and identify one sentence they are most proud of.',
          stretch: 'Students attempt both composition options and compare which better showcases their writing strengths. They annotate their own work to identify where they have achieved Band 1 criteria.'
        },
        resources: [
          'Composition choice sheet (descriptive + narrative prompts)',
          'Planning templates: spider diagram and narrative arc',
          'Vocabulary enhancement sheet'
        ]
      }
    ],
    plenaryActivity: {
      title: 'Two Stars and a Wish',
      duration: '5 minutes',
      instructions:
        'Students swap their composition drafts with a partner. Each reader identifies two strengths (e.g. effective imagery, varied sentence openings) and one area for improvement, linking feedback to the CAIE Band descriptors displayed on the board. Students write their feedback on a sticky note and attach it to the draft.',
      differentiation: {
        support: 'Provide a feedback frame: "One strength is... because...", "To improve, you could...".',
        core: 'Students give and receive feedback independently, referencing specific Band descriptors.',
        stretch: 'Students identify which specific Band their partner\'s writing falls into and justify their judgement with evidence from the text.'
      }
    },
    homework:
      'Complete the directed writing response in full (250–350 words for Core, 400–450 words for Extended). Then write one additional composition piece on the option you did not choose in class.',
    worksheetQuestions: [
      {
        question: 'Read the passage about the proposed new park. You are a local councillor who attended the public meeting described in the passage. Write a report for the council summarising the main concerns raised and recommending a course of action. In your report you should: cover the key points raised at the meeting, use an appropriate formal register, and include your own reasoned recommendation.',
        lines: 20,
        modelAnswer:
          'Report on Public Consultation Meeting — Proposed Riverside Park Development\n\nFollowing the public meeting held on 15th March, this report summarises the principal concerns raised by residents and offers a recommendation for the council\'s consideration.\n\nThe most significant concern was the potential increase in traffic along Riverside Lane. Several residents cited the already congested morning rush hour and expressed fear that construction vehicles would exacerbate the problem. A second major issue was the environmental impact on the existing wildlife habitat, with particular concern for the nesting herons documented by the local conservation group.\n\nHowever, supporters of the development emphasised the lack of recreational facilities for young people in the area and the potential economic benefits for local businesses.\n\nI recommend that the council approve the development in principle, subject to a full environmental impact assessment and a revised traffic management plan that routes construction vehicles via the northern bypass.',
        marks: 40
      },
      {
        question: 'Write a descriptive composition titled "The Market at Dawn". Focus on creating a vivid sense of place through sensory detail, varied sentence structures, and carefully chosen vocabulary.',
        lines: 20,
        modelAnswer:
          'Before the sun has fully committed to the sky, the market begins its slow awakening. Metal shutters rattle upwards like eyelids reluctant to open. The first stall-holders arrive hunched against the cold, their breath visible in the half-light, hands wrapped around polystyrene cups of tea that steam like small chimneys.\n\nThe smell arrives before the colour does — raw fish and fresh bread competing for attention, underlaid by the permanent base note of damp concrete. Crates thud onto trestle tables. Oranges are stacked into improbable pyramids. A woman in a striped apron slices open a cardboard box with practised efficiency and fans out bunches of coriander, their green an almost violent contrast against the grey morning.\n\nBy seven, the market has found its voice. Traders call to each other across the aisles in a dialect that belongs only to this place and this hour.',
        marks: 40
      },
      {
        question: 'Explain the difference between "directed writing" and "composition" on IGCSE Paper 1. What skills does each section test?',
        lines: 6,
        modelAnswer:
          'Directed writing (Section A) tests both reading and writing skills. Students must read a stimulus passage, select relevant content points, and transform them into a specified format (e.g. letter, report, article) with an appropriate register for the audience. It is marked for content (up to 15) and language (up to 25). Composition (Section B) tests writing skills only. Students choose between descriptive and narrative prompts and produce an original piece of writing. There is no source material to draw from — the quality depends entirely on the student\'s own ideas, vocabulary, and structural control.',
        marks: 4
      }
    ],
    teacherNotes: [
      'Paper 1 carries 80 marks total: 40 for directed writing (15 content + 25 language) and 40 for composition (content and structure + style and accuracy).',
      'Directed writing is NOT a summary — students must use the passage content but adapt it into the specified format with a clear sense of audience and purpose.',
      'For composition, examiners value "crafted" writing over quantity; a tightly controlled 350-word response can score higher than a sprawling 600-word one.',
      'Common errors: students who ignore the specified format (e.g. writing an essay when asked for a letter), students who copy from the passage without adaptation, and students who do not plan their composition and lose structural control.',
      'Remind students that the 5 minutes of reading time at the start of the exam should be used to read the stimulus passage carefully and begin identifying content points.'
    ],
    targetedSkills: [
      'Directed Writing',
      'Creative Writing',
      'Descriptive Writing',
      'Narrative Writing',
      'Register Adaptation',
      'Audience Awareness'
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 3: Writer's Effect Questions (How/Why)
  // ─────────────────────────────────────────────
  {
    id: 'igcse-03-writers-effect',
    title: "IGCSE Language: Writer's Effect Questions (How/Why)",
    text: 'IGCSE English Language',
    board: 'CAIE',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      "Understand what CAIE examiners mean by 'writer's effect' and how it differs from feature-spotting",
      'Analyse how writers use language and structure to create specific effects on the reader',
      "Apply the What–How–Why framework to construct analytical paragraphs that reach Band 1–2 in the 'effect' questions",
      'Select precise, short quotations and embed them fluently within analytical sentences'
    ],
    successCriteria: [
      'I can explain the difference between identifying a technique and analysing its effect',
      'I can select short, precise quotations and embed them within my sentences',
      'I can write a What–How–Why paragraph that analyses language effect convincingly',
      'I can identify which Band my response falls into using the CAIE mark scheme descriptors'
    ],
    keywords: [
      "writer's effect",
      'analysis',
      'technique',
      'quotation',
      'embedded',
      'connotation',
      'What–How–Why',
      'effect on reader'
    ],
    starterActivity: {
      title: 'Feature-Spot vs. Effect Analysis — Spot the Difference',
      duration: '8 minutes',
      instructions:
        'Display two student responses to the same passage side by side on the board. Response A simply identifies techniques ("The writer uses a simile and alliteration"). Response B explains the effect ("The simile \'like a caged animal\' suggests the character feels trapped and desperate, creating sympathy in the reader as we recognise the loss of freedom"). Students discuss in pairs which would score higher and why. Reveal the Band descriptors: Band 1 requires "analysis of how the writer achieves effects", not just identification. Establish the What–How–Why model as the path from feature-spotting to genuine analysis.',
      differentiation: {
        support: 'Provide the two responses as a printed handout so students can annotate and underline the key differences.',
        core: 'Students discuss in pairs and articulate the difference before the teacher confirms.',
        stretch: 'Students rewrite Response A to make it as strong as Response B, adding effect analysis to each identified technique.'
      },
      resources: ['Paired response slide (Response A and B)', 'Band descriptor summary']
    },
    mainActivities: [
      {
        title: 'Guided Annotation — Unpacking a Passage',
        duration: '20 minutes',
        instructions:
          "Distribute a passage (fiction or literary non-fiction, approximately 400 words) with line references matching a writer's effect question. Model the annotation process on the board: (1) read the question carefully to identify the focus (e.g. 'How does the writer create a sense of tension in lines 15–30?'), (2) highlight 4–5 powerful words or phrases in the specified lines, (3) for each, note the technique (if applicable) and the specific effect on the reader — what it makes us feel, think, or visualise. Students then annotate independently. Teacher circulates and challenges students who identify techniques without explaining effect: 'You've found the metaphor — now tell me what it makes the reader feel or think.' Pairs share their strongest annotation and discuss.",
        differentiation: {
          support: "Provide a pre-annotated version with techniques identified. Students focus on writing the 'Why' (effect) component. Supply a sentence starter bank: 'This suggests...', 'The reader feels...', 'This creates a sense of...'.",
          core: 'Students annotate independently using the modelled approach and share their best example with a partner for feedback.',
          stretch: "Students annotate structural features as well as language (e.g. sentence length variation, paragraph positioning, shift in focus) and consider how these contribute to the writer's overall effect."
        },
        resources: [
          'Fiction/literary non-fiction passage (~400 words)',
          "Writer's effect question with line references",
          'Sentence starter bank (support tier)'
        ]
      },
      {
        title: 'Building Band 1 Paragraphs — What, How, Why',
        duration: '22 minutes',
        instructions:
          "Using their annotations, students write two analytical paragraphs following the What–How–Why structure: What is the writer doing? (topic sentence establishing the effect), How are they doing it? (technique + embedded quotation with close word-level analysis), Why does it affect the reader? (explanation of the emotional, psychological, or imaginative impact on the reader). Display a model paragraph on screen and annotate the What, How, and Why sections in different colours. Students draft two paragraphs, then self-assess by highlighting their own What/How/Why sections in matching colours. Teacher selects two student examples to discuss under the visualiser, linking each to the Band descriptors.",
        differentiation: {
          support: 'Provide a paragraph frame with gaps for students to fill in their own quotations and analysis. Model the first paragraph together as a class before independent writing.',
          core: 'Students write two paragraphs independently and colour-code their What/How/Why sections for self-assessment.',
          stretch: "Students write a third paragraph that incorporates an alternative interpretation: 'Alternatively, this could suggest...' and explores how different readers might respond differently to the same language choice."
        },
        resources: [
          'What–How–Why paragraph scaffold',
          'Model paragraph (colour-annotated)',
          'Paragraph frame (support tier)'
        ]
      }
    ],
    plenaryActivity: {
      title: 'Band Prediction Gallery Walk',
      duration: '5 minutes',
      instructions:
        'Post four anonymous student paragraphs around the room (prepared in advance at different Band levels). Students circulate with sticky notes, writing which Band they think each paragraph falls into and one specific reason why. Discuss as a class to calibrate understanding of the mark scheme. This builds mark-scheme literacy so students can self-assess more accurately.',
      differentiation: {
        support: 'Provide a simplified Band descriptor card to carry during the gallery walk.',
        core: 'Students predict Bands and justify with specific references to the descriptors.',
        stretch: 'Students suggest one specific improvement that would move each paragraph up one Band.'
      }
    },
    homework:
      "Write three What–How–Why paragraphs on a new passage provided. For each, highlight your What, How, and Why sections in different colours to demonstrate the structure.",
    worksheetQuestions: [
      {
        question: 'Re-read lines 5–12 of the passage. How does the writer use language to create a sense of danger? Analyse two examples in detail.',
        lines: 12,
        modelAnswer:
          "The writer creates a powerful sense of danger through the verb 'lunged', which suggests sudden, violent movement towards the narrator. The word carries connotations of aggression and unpredictability, making the reader feel the character's vulnerability in this moment — the attack comes without warning, mirroring the way real danger often strikes.\n\nFurthermore, the simile 'the shadows crept like thieves across the wall' personifies the darkness as criminal intruders, suggesting that even the environment itself poses a threat. The verb 'crept' implies stealth and menace, creating an atmosphere where the reader feels that danger is not only present but actively closing in from all sides.",
        marks: 15
      },
      {
        question: "Explain the difference between 'feature-spotting' and 'effect analysis'. Why does CAIE reward one more than the other?",
        lines: 5,
        modelAnswer:
          "Feature-spotting means simply identifying a technique (e.g. 'the writer uses a metaphor') without explaining what it achieves. Effect analysis goes further by examining how and why the language choice impacts the reader — what it makes us feel, think, or imagine. CAIE rewards effect analysis because it demonstrates genuine understanding of how writers craft meaning, not just recognition of literary terminology. Band 1 requires 'convincing analysis of how the writer achieves effects', while feature-spotting typically caps a response at Band 4.",
        marks: 4
      },
      {
        question: "What does 'embedding a quotation' mean? Write a sentence about the passage that demonstrates this skill.",
        lines: 4,
        modelAnswer:
          "Embedding a quotation means weaving the writer's words naturally into your own sentence, rather than placing them in a separate block or after a colon. For example, instead of writing 'The writer says: \"the sky was bruised and swollen\"', an embedded version would be: The description of the sky as 'bruised and swollen' personifies the weather as injured, suggesting that the storm has left the landscape visibly damaged and creating a sense of aftermath and pain.",
        marks: 3
      },
      {
        question: 'Re-read lines 20–28. How does the writer use structure to build tension in this section? Consider sentence length, paragraph breaks, and the ordering of information.',
        lines: 8,
        modelAnswer:
          "The writer builds tension structurally by shifting from long, flowing sentences in the opening of the section to abrupt, fragmented sentences as the crisis approaches: 'She stopped. Listened. Nothing.' This sudden change in rhythm mirrors the character's heightened alertness and forces the reader to pause at each full stop, creating a staccato effect that mimics a racing heartbeat. The single-word paragraph 'Nothing' is particularly effective — its isolation on the line amplifies the silence, making it feel oppressive rather than reassuring, as the reader anticipates that the quiet is temporary.",
        marks: 5
      }
    ],
    teacherNotes: [
      "The writer's effect question is worth up to 15 marks on Paper 1 (Extended) and is the area where most students lose marks by feature-spotting without explaining effect.",
      "The mark scheme rewards 'how' and 'why' language creates meaning. Band 1 (13–15 marks) requires 'convincing analysis' with 'well-selected' evidence. Band 2 (10–12) allows 'some analysis' that is 'generally effective'.",
      'Emphasise that short, embedded quotations are more effective than long block quotes. A single well-analysed word can be worth more than a full sentence of quotation.',
      'This question appears only on the Extended paper. Core candidates face a shorter, more guided language question that asks them to identify words and phrases rather than analyse effects.',
      "If students struggle with the 'Why' element, encourage them to ask: 'What does this make me feel as a reader? What image does it put in my mind? What atmosphere does it create?'"
    ],
    targetedSkills: [
      'Language Analysis',
      "Writer's Methods",
      'Quotation Embedding',
      'Effect Analysis',
      'Close Reading'
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 4: Approaching Prose Set Texts
  // ─────────────────────────────────────────────
  {
    id: 'igcse-04-prose-set-texts',
    title: 'IGCSE Literature: Approaching Prose Set Texts',
    text: 'IGCSE English Literature',
    board: 'CAIE',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Understand how CAIE Literature Paper 1 prose questions are structured: passage-based (a) and essay (b)',
      'Develop strategies for responding to passage-based questions with close textual analysis',
      "Practise planning essay-type responses that address character, theme, and writer's methods across the whole text",
      'Recognise the Assessment Objectives: AO1 (knowledge and understanding), AO2 (language, structure, form), AO3 (context), AO4 (personal response)'
    ],
    successCriteria: [
      'I can explain the difference between a passage-based question and an essay question on IGCSE Literature',
      'I can annotate a prose extract identifying at least four analytical points about language and meaning',
      'I can plan an essay that covers different parts of the whole text, not just one scene',
      'I can identify which Assessment Objectives (AO1–AO4) I am addressing in my response'
    ],
    keywords: [
      'passage-based',
      'essay',
      'AO1',
      'AO2',
      'AO3',
      'AO4',
      'close analysis',
      'set text'
    ],
    starterActivity: {
      title: 'Question (a) vs. Question (b) — What Is the Difference?',
      duration: '8 minutes',
      instructions:
        'Display a real CAIE Literature past paper question showing both (a) the passage-based question and (b) the essay question for a prose text. Students discuss in pairs: what skills does each question test? Which is harder? Which would you choose? Feed back and establish that (a) tests close analysis of a specific extract (AO2 heavy) while (b) tests broader knowledge across the whole text (AO1 heavy). Both require personal response (AO4). Stress that there is no "easier" option — each rewards different strengths.',
      differentiation: {
        support: 'Provide a simple comparison table (passage-based vs. essay) for students to complete during discussion.',
        core: 'Students discuss and articulate the differences before teacher confirmation.',
        stretch: 'Students identify which AOs are most relevant to each question type and explain why.'
      },
      resources: ['Past paper question slide (both options)', 'Comparison table (support tier)']
    },
    mainActivities: [
      {
        title: 'Passage-Based Response — Close Analysis Workshop',
        duration: '22 minutes',
        instructions:
          "Using an extract from a commonly taught IGCSE prose text (approximately 500 words), model how to approach a passage-based question: (1) read the extract twice, underlining powerful language choices on the second read, (2) identify the focus of the question (e.g. 'How does the writer present the relationship between the two characters in this extract?'), (3) plan 3–4 analytical points linking language choices to meaning, (4) write the opening paragraph demonstrating embedded quotation and effect analysis. Students then write two further paragraphs independently. Teacher circulates, checking that students are analysing language (AO2) rather than just narrating the plot — a common trap.",
        differentiation: {
          support: 'Provide the passage with key quotations pre-highlighted and technique labels. Offer a paragraph frame for the first analytical paragraph.',
          core: 'Students annotate and write independently using the modelled approach.',
          stretch: 'Students consider how the extract connects to the wider text — what comes before and after, and how this passage is a turning point or reveals a shift in character.'
        },
        resources: [
          'Prose extract for close analysis (~500 words)',
          'Passage-based question',
          'Paragraph frame (support tier)'
        ]
      },
      {
        title: 'Essay Planning — Across-the-Text Response',
        duration: '20 minutes',
        instructions:
          "Present a (b)-style essay question (e.g. 'How does the writer present the theme of justice across the novel?'). Discuss the importance of planning: students must cover different parts of the text, not just one scene. Model a plan: introduction (thesis statement addressing the question directly), 3–4 body paragraphs each addressing a different moment in the text with a clear topic sentence, conclusion (evaluative comment reflecting on the writer's overall purpose). Students create their own plan, selecting quotations from their text knowledge. Pairs share plans and give feedback on coverage and balance across the text.",
        differentiation: {
          support: 'Provide a list of key moments in the text for students to select from. Offer a planning template with prompts for each paragraph.',
          core: 'Students plan independently, selecting their own moments and quotations from across the text.',
          stretch: 'Students incorporate contextual awareness (AO3) into their plan and include alternative interpretations of key moments.'
        },
        resources: [
          'Essay question',
          'Essay planning template',
          'Key moments list (support tier)'
        ]
      }
    ],
    plenaryActivity: {
      title: 'AO Audit',
      duration: '5 minutes',
      instructions:
        'Students review their passage-based paragraphs and essay plan, annotating in the margin where they have addressed AO1 (knowledge), AO2 (language/structure analysis), and AO4 (personal response). They identify which AO they most need to strengthen and write this as a target on a sticky note.',
      differentiation: {
        support: 'Provide a colour-coded AO key and ask students to highlight relevant sections in matching colours.',
        core: 'Students annotate independently and set a specific, actionable target.',
        stretch: 'Students also consider where they could incorporate AO3 (context) and draft one sentence demonstrating contextual awareness.'
      }
    },
    homework:
      'Write the full essay response from the plan created in class. Aim for 600–800 words (Extended) or 400–500 words (Core). Highlight where you address AO1, AO2, and AO4 in different colours.',
    worksheetQuestions: [
      {
        question: 'Read the extract carefully. How does the writer create a sense of the character\'s isolation in this passage? Support your answer with close reference to language and detail.',
        lines: 15,
        modelAnswer:
          "The writer creates a powerful sense of isolation through the repeated motif of silence. The phrase 'no voice answered his call' emphasises the absence of human connection, with the word 'no' placed at the start of the clause for emphatic effect. The character's isolation is not merely physical but emotional — he calls out but receives nothing in return, suggesting abandonment.\n\nFurthermore, the setting reinforces this loneliness. The description of 'empty chairs arranged around the table as though expecting guests who would never arrive' personifies the furniture as waiting, creating a poignant image of hope that has been extinguished. The juxtaposition of the domestic, welcoming image of arranged chairs with the finality of 'never' makes the isolation feel permanent and irreversible.\n\nThe writer also uses sentence structure to mirror the character's state. Short, declarative sentences — 'He sat. He waited. The clock marked time.' — strip the prose of warmth and energy, reflecting the character's emotional numbness.",
        marks: 20
      },
      {
        question: 'Explain the difference between AO1 and AO2 in IGCSE Literature. Give an example of each from any text you have studied.',
        lines: 6,
        modelAnswer:
          "AO1 tests knowledge and understanding of the text — demonstrating that you know the plot, characters, themes, and can discuss them with insight. For example, 'Steinbeck presents Curley's wife as a victim of the patriarchal society of 1930s America.' AO2 tests analysis of how the writer achieves effects through language, structure, and form. For example, 'The metaphor \"jail bait\" reduces Curley's wife to a dangerous object rather than a person, revealing the men's fear and contempt through their dehumanising language choice.'",
        marks: 4
      },
      {
        question: 'Plan an essay answering the following question: "How does the writer present the importance of family in the novel?" Include an introduction, four body paragraph topics, and a conclusion. For each body paragraph, name the specific scene or moment you would discuss.',
        lines: 12,
        modelAnswer:
          "Introduction: Thesis — Family is presented as both a source of strength and a source of conflict throughout the novel, with the writer using it to explore broader social tensions.\n\nParagraph 1: Opening chapters — the initial family dynamic is established through domestic scenes that appear harmonious on the surface but contain undercurrents of tension (quotation about routine/expectations).\n\nParagraph 2: The central conflict — family loyalty is tested when the protagonist must choose between personal ambition and family duty (quotation about the pivotal confrontation).\n\nParagraph 3: The outsider's perspective — a character external to the family comments on its dysfunction, providing the reader with an objective viewpoint (quotation from this character).\n\nParagraph 4: Resolution — the final chapters show whether family bonds survive or fracture, and the writer's message about the enduring importance of connection (quotation from the ending).\n\nConclusion: The writer suggests that family is imperfect but irreplaceable — its importance lies not in harmony but in the willingness to persevere through conflict.",
        marks: 6
      }
    ],
    teacherNotes: [
      'Paper 1 of IGCSE Literature (0475) covers prose and drama set texts. Each question offers a choice: (a) passage-based (20 marks) or (b) essay (20 marks). Students answer on ONE text from each section.',
      "The mark scheme uses Bands 1–6: Band 1 (18–20) requires 'convincing, well-developed response with close and effective reference to the text.' Band 3 (10–13) is 'competent response with some relevant reference.'",
      'Remind students that the passage-based question still requires them to consider the wider text — the extract is a starting point, not the entire focus.',
      'The essay question requires detailed knowledge but should still include textual evidence — even without a passage in front of them, students should quote or make close reference to specific moments.',
      'For the 0992 syllabus (Literature in English), the structure is similar but some component numbers differ. Check the specific syllabus your centre follows.'
    ],
    targetedSkills: [
      'Prose Analysis',
      'Character Analysis',
      'Theme Analysis',
      'Essay Structure',
      'Close Reading',
      'Evidence Selection'
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 5: Approaching Drama Set Texts
  // ─────────────────────────────────────────────
  {
    id: 'igcse-05-drama-set-texts',
    title: 'IGCSE Literature: Approaching Drama Set Texts',
    text: 'IGCSE English Literature',
    board: 'CAIE',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Understand the specific demands of drama questions on IGCSE Literature Paper 1',
      'Analyse dramatic techniques including stage directions, dialogue, dramatic irony, and audience impact',
      'Practise writing about drama with awareness that it is a performed art form, not just a written text',
      'Distinguish between narrating the plot and analysing how the playwright creates meaning through dramatic methods'
    ],
    successCriteria: [
      'I can identify and analyse the effect of at least three dramatic techniques in an extract',
      'I can write about drama using audience-focused language rather than reader-focused language',
      'I can explain how stage directions contribute to meaning, not just describe what they say',
      'I can plan a drama essay that considers theatrical impact, not just plot events'
    ],
    keywords: [
      'playwright',
      'stage directions',
      'dramatic irony',
      'audience',
      'dialogue',
      'subtext',
      'theatrical',
      'staging'
    ],
    starterActivity: {
      title: 'The Performance Test',
      duration: '8 minutes',
      instructions:
        "Display a short extract from a play (a tense confrontation scene, approximately 15 lines). Two volunteers perform it standing at the front while the class watches. Then display the same extract as flat text on screen without performance. Ask: what was different about experiencing it as performance versus reading it silently? What did body language, voice, and movement add? Establish the key principle for drama analysis: always consider the audience's experience, the visual and physical dimension, and the playwright's craft in creating theatrical moments.",
      differentiation: {
        support: 'Provide three specific things to look for during the performance: movement, tone of voice, and facial expressions.',
        core: 'Students note down three differences between performed and read versions and share with a partner.',
        stretch: "Students consider how a director's choices (e.g. whether a character shouts or whispers a line) change the meaning and how this relates to the playwright's stage directions."
      },
      resources: ['Short drama extract for performance', 'Projected text version']
    },
    mainActivities: [
      {
        title: 'Stage Directions & Subtext — The Unspoken Layer',
        duration: '20 minutes',
        instructions:
          "Distribute an extract from a CAIE-set drama text rich in stage directions (approximately 400 words). Students annotate the extract focusing exclusively on stage directions and what they reveal about character, mood, and power dynamics. Model how to write about stage directions analytically on the board: 'The stage direction \"(he rises and moves away)\" physically enacts the character's emotional withdrawal, signalling to the audience that the relationship has fractured beyond repair.' Discuss the concept of subtext — what characters mean versus what they say. Students write two analytical paragraphs: one on a stage direction's effect and one on how dialogue conveys subtext.",
        differentiation: {
          support: 'Provide a glossary of dramatic techniques with definitions and examples from the specific extract. Offer a paragraph frame that builds in audience-focused language.',
          core: 'Students annotate and write independently, ensuring both paragraphs demonstrate awareness of the text as performance.',
          stretch: "Students consider how a director might stage the extract differently (e.g. setting it in a modern context) and how this would alter the audience's interpretation."
        },
        resources: [
          'Drama extract with stage directions (~400 words)',
          'Dramatic techniques glossary',
          'Paragraph frame (support tier)'
        ]
      },
      {
        title: 'Drama Essay Planning — Thinking Like an Audience Member',
        duration: '22 minutes',
        instructions:
          "Present a drama essay question (b-type, e.g. 'How does the playwright create tension throughout the play?'). Discuss the common trap: students retell the plot as if the play were a novel, forgetting it exists on stage. Introduce the 'audience lens' — every analytical point should consider how the moment would land in a theatre. Provide a dramatic techniques toolkit: dramatic irony, tension and release, entrances and exits, soliloquy and aside, silence and pauses, proxemics (physical distance between characters), lighting and sound (where specified by the playwright). Students plan a four-paragraph essay, each paragraph addressing a different dramatic technique and moment from the play. Pairs peer-assess plans, checking for the 'audience lens' in every paragraph.",
        differentiation: {
          support: 'Provide a techniques toolkit card with simple definitions and worked examples. Pre-select the four moments from the play for students to discuss.',
          core: 'Students plan independently using the toolkit as a reference. They select their own moments and techniques.',
          stretch: "Students consider the play's original performance context versus a modern staging, and how changes in audience expectations might affect interpretation."
        },
        resources: [
          'Drama essay question',
          'Dramatic techniques toolkit card',
          "Essay planning template with 'audience lens' prompts"
        ]
      }
    ],
    plenaryActivity: {
      title: 'Vocabulary Upgrade',
      duration: '5 minutes',
      instructions:
        "Students review their paragraphs and plans. Where they have written 'the reader', they cross it out and replace with 'the audience'. Where they have written 'this shows', they upgrade to drama-specific vocabulary: 'this dramatises', 'the playwright stages', 'this theatrical moment creates', 'the audience witnesses'. Reinforce that examiners notice when students treat plays as plays rather than novels.",
      differentiation: {
        support: 'Provide a printed vocabulary swap list (reader → audience, shows → dramatises, etc.) for students to keep.',
        core: 'Students make the swaps independently and add two more drama-specific phrases to their vocabulary.',
        stretch: 'Students rewrite their strongest paragraph entirely, ensuring every sentence uses drama-specific critical vocabulary.'
      }
    },
    homework:
      "Watch a recorded performance (or scene) of your set drama text online. Write a 300-word reflection comparing how the performance brought out dramatic effects that you might miss when just reading the text on the page.",
    worksheetQuestions: [
      {
        question: 'Read the extract carefully. How does the playwright use stage directions and dialogue to create tension in this scene? Support your answer with close reference to the text.',
        lines: 15,
        modelAnswer:
          "The playwright creates tension through the contrast between the characters' calm dialogue and the volatile undercurrent revealed by the stage directions. While Character A speaks with apparent politeness — 'Please, do sit down' — the stage direction '(gripping the chair back until his knuckles whiten)' reveals barely suppressed rage. This contradiction between words and physical action creates dramatic irony: the audience can see the truth that the other character cannot, building anxiety about when the facade will crack.\n\nThe use of silence is equally powerful. The stage direction '(a long pause)' after the accusation forces the audience to sit in uncomfortable anticipation. In performance, this pause would feel extended and charged, with every second increasing the tension. The playwright withholds the response, making the audience complicit in the waiting and amplifying the eventual impact of whatever follows.\n\nFurthermore, the short, fragmented exchanges — 'You knew.' 'Perhaps.' 'Don't lie to me.' — strip the dialogue to its barest confrontational elements, each line a verbal blow. The rhythm of attack and deflection would translate powerfully on stage, with each line delivered as a sharp volley.",
        marks: 20
      },
      {
        question: "Why is it important to use the word 'audience' rather than 'reader' when writing about drama? Explain with reference to how drama works differently from prose.",
        lines: 5,
        modelAnswer:
          "Using 'audience' rather than 'reader' demonstrates understanding that drama is a performed art form, not just a written text. An audience experiences a play through visual staging, actors' physical performances, vocal delivery, lighting, and sound — none of which exist when reading prose silently. Writing about the 'audience' shows the examiner that you understand the playwright's craft extends beyond words on a page to the full theatrical experience. CAIE examiners specifically note that strong drama responses show awareness of performance, and using 'reader' suggests the student is treating the play as a novel.",
        marks: 4
      },
      {
        question: 'Explain what "dramatic irony" means and give one example from a play you have studied, explaining its effect on the audience.',
        lines: 6,
        modelAnswer:
          "Dramatic irony occurs when the audience knows something that a character on stage does not, creating a gap between the character's understanding and the audience's knowledge. This gap generates tension, sympathy, or dark humour depending on the context. For example, in An Inspector Calls, when Mr Birling confidently predicts that war is impossible and the Titanic is unsinkable, the audience — who knows the historical truth — recognises his arrogance and foolishness. This dramatic irony undermines his authority from the very start and encourages the audience to question everything he says afterwards.",
        marks: 4
      },
      {
        question: 'What is "subtext" in drama? Choose a moment from your set text where a character says one thing but means another, and explain how the audience recognises the true meaning.',
        lines: 6,
        modelAnswer:
          "Subtext is the unspoken meaning beneath a character's words — what they truly think or feel, which may contradict what they actually say. The audience recognises subtext through tone of voice in performance, through stage directions that reveal inner states, and through the context of what has happened before. For example, when a character says 'I'm fine' while the stage direction indicates they are turned away with clenched fists, the audience understands that the character is anything but fine. The playwright relies on the audience's ability to read between the lines, creating a richer, more psychologically complex experience.",
        marks: 4
      }
    ],
    teacherNotes: [
      'The CAIE 0475 mark scheme uses identical Band descriptors for prose and drama, but examiners consistently note that strong drama responses demonstrate awareness of the text as performance.',
      "Key phrases examiners look for: 'the audience sees/feels/is confronted by', 'the playwright stages/presents/dramatises', 'the stage direction reveals'.",
      "Students who consistently write 'the reader' in a drama essay will typically cap themselves at Band 3–4.",
      'Where the set text is Shakespeare, students should also address verse/prose shifts, iambic pentameter disruptions, and how language density changes with character and mood.',
      "Encourage students to think about proxemics (the physical distance between characters on stage) as a dramatic technique — it is often more revealing than dialogue."
    ],
    targetedSkills: [
      'Drama Analysis',
      'Dramatic Techniques',
      'Stage Directions',
      'Character Analysis',
      'Audience Response',
      'Close Reading'
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 6: Poetry — Responding to Songs of Ourselves
  // ─────────────────────────────────────────────
  {
    id: 'igcse-06-poetry-songs-of-ourselves',
    title: 'IGCSE Literature: Poetry — Responding to Songs of Ourselves',
    text: 'IGCSE English Literature',
    board: 'CAIE',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Understand how the IGCSE Literature poetry paper is structured and how Songs of Ourselves questions are formatted',
      'Develop a systematic approach to analysing set poems: content, language, structure, and personal response',
      'Practise writing about poetry with close reference to specific words and phrases, not just general themes',
      'Build a revision methodology for the poetry anthology that balances breadth of knowledge with analytical depth'
    ],
    successCriteria: [
      'I can annotate a poem across four layers: subject matter, language, structure, and tone/attitude',
      'I can write an analytical paragraph about a specific word or phrase in a poem, explaining its effect',
      'I can explain why it is important to prepare all set poems, not just a selection',
      'I can create an effective revision resource for a poem that captures its key features and quotations'
    ],
    keywords: [
      'anthology',
      'annotation',
      'imagery',
      'enjambment',
      'caesura',
      'tone',
      'diction',
      'personal response'
    ],
    starterActivity: {
      title: 'Anthology Audit — How Well Do You Know Your Poems?',
      duration: '8 minutes',
      instructions:
        "Display the titles of all set poems from the relevant section of Songs of Ourselves on the board. Students have 3 minutes to write one key theme and one key technique for as many poems as they can. Teacher tallies class scores to identify the least-known poems (these become priority revision targets). Discuss why it is dangerous to 'bank' on certain poems appearing — the question names a specific poem, and students must have prepared all of them. There is no choice of poem within the question.",
      differentiation: {
        support: 'Provide a list of theme words (e.g. loss, identity, nature, conflict) and technique words (e.g. metaphor, enjambment, rhyme) to prompt memory.',
        core: 'Students complete the audit independently and honestly, then compare with a partner.',
        stretch: 'For each poem, students also write the opening line from memory and one key quotation they would use in an essay.'
      },
      resources: ['Poem title list (projected)', 'Theme and technique prompt list (support tier)']
    },
    mainActivities: [
      {
        title: 'Deep Dive — Four-Layer Annotation of a Set Poem',
        duration: '22 minutes',
        instructions:
          "Select one poem from the set section that emerged as weaker in the audit. Distribute clean copies. Model a four-layer annotation approach using different coloured pens: (1) First read (black) — initial response, subject matter, and basic meaning, (2) Second read (blue) — language choices including imagery, diction, and sound devices, (3) Third read (green) — structural features including line breaks, stanza shape, enjambment, caesura, and rhyme scheme, (4) Fourth read (red) — tone shifts, the poet's attitude, and the overall message or effect. Students complete their own four-layer annotation. Teacher circulates, pushing students beyond surface observations: 'You've identified the metaphor — what specific word within it is most powerful and why?'",
        differentiation: {
          support: "Provide a glossary of poetic techniques with examples from the specific poem. Offer a partially completed annotation with the first two layers done, so students focus on layers 3 and 4.",
          core: 'Students complete all four layers independently using different colours, then share their strongest annotation with a partner.',
          stretch: "Students add a fifth layer: connections to other poems in the anthology that share similar themes, techniques, or attitudes, preparing for possible comparison questions."
        },
        resources: [
          'Clean copy of the focus poem',
          'Four-layer annotation guide',
          'Coloured pens',
          'Poetic techniques glossary (support tier)'
        ]
      },
      {
        title: 'Writing the Response — Poetry Paragraph Drill',
        duration: '22 minutes',
        instructions:
          "Present a past-paper style question on the annotated poem (e.g. 'How does the poet powerfully convey the experience of...'). Students write two analytical paragraphs using Point–Evidence–Analysis–Link structure. Emphasise that CAIE poetry responses must go beyond meaning to explore HOW the poet creates that meaning through specific choices — the mark scheme explicitly rewards analysis of methods, not paraphrase. Display the Band descriptors: Band 1 requires 'well-developed ideas supported by carefully selected reference to the poem.' After writing, students swap and peer-assess: does the partner (a) embed short quotations, (b) analyse specific word choices, (c) comment on structural features, (d) offer a personal response?",
        differentiation: {
          support: 'Provide a paragraph frame with sentence starters: "The poet conveys... through the use of...", "The word \'___\' suggests...", "This creates a sense of... for the reader because...".',
          core: 'Students write two paragraphs independently and peer-assess using the four-point checklist.',
          stretch: 'Students write a third paragraph comparing the poem to another from the anthology, exploring how both poets approach a similar theme through different methods.'
        },
        resources: [
          'Past-paper style poetry question',
          'Band descriptors for poetry (0475)',
          'Paragraph frame (support tier)',
          'Peer-assessment checklist'
        ]
      }
    ],
    plenaryActivity: {
      title: 'Revision Strategy Card',
      duration: '5 minutes',
      instructions:
        "Students create a revision flashcard for the poem studied today: front side has the title, key quotations (3–4 short ones), and techniques identified; back side has a model analytical sentence and a one-sentence personal response. Teacher recommends creating one card per poem as an ongoing revision strategy — by exam time, students will have a complete set covering every poem in their section.",
      differentiation: {
        support: 'Provide a pre-formatted flashcard template with labelled sections to fill in.',
        core: 'Students create their flashcard independently, selecting the most important quotations and techniques.',
        stretch: 'Students add a "comparison link" section to their card, noting which other poems in the anthology pair well with this one and why.'
      }
    },
    homework:
      'Create revision flashcards for three more poems from the set list using the same format. On the back of each card, write one analytical paragraph answering: "How does the poet use language and/or structure to convey...?"',
    worksheetQuestions: [
      {
        question: 'Read the poem carefully. How does the poet use imagery to convey the speaker\'s feelings? Refer closely to specific words and phrases in your answer.',
        lines: 15,
        modelAnswer:
          "The poet uses a series of natural images that shift from warmth to coldness, mirroring the speaker's emotional journey from hope to despair. The opening image of 'sunlight pooling on the step' creates a sense of warmth and welcome — the verb 'pooling' suggests light gathering gently, as though nature itself is offering comfort. This establishes a tone of contentment that the reader initially trusts.\n\nHowever, the central stanza disrupts this warmth with the image of 'frost creeping across the glass like a slow hand closing.' The simile transforms frost into something almost human and menacing — the 'slow hand closing' suggests gradual suffocation or the tightening of a grip. The poet's choice of 'creeping' adds stealth and threat, implying the speaker did not notice the change until it was too late. This shift in imagery powerfully conveys the way loss can arrive imperceptibly, transforming a familiar landscape into something alienating.\n\nThe final image — 'the garden held its breath' — personifies the natural world as anxious and suspended, which mirrors the speaker's own emotional paralysis.",
        marks: 20
      },
      {
        question: 'What is enjambment? Identify one example in the poem and explain the effect it creates.',
        lines: 5,
        modelAnswer:
          "Enjambment is when a sentence or phrase runs over from one line of poetry to the next without a pause or punctuation at the line break. In the poem, the lines 'I watched the last / light disappear beyond the hill' demonstrate enjambment: the phrase flows across the line break, pulling the reader forward. This creates a sense of momentum and inevitability — just as the light cannot be stopped from fading, the sentence cannot be stopped at the line's end. The enjambment mimics the unstoppable passage of time that the speaker is mourning.",
        marks: 4
      },
      {
        question: 'Explain why personal response is important in IGCSE Literature poetry answers. What does the examiner want to see?',
        lines: 5,
        modelAnswer:
          'Personal response (AO4) is important because the examiner wants to see that the student has genuinely engaged with the poem as a piece of art, not just mechanically identified techniques. A strong personal response shows the student has thought about what the poem means to them, how it made them feel, and why the poet\'s choices are effective. This might include phrases like "I find this image particularly striking because..." or "The poem resonates with the universal experience of..." The examiner is looking for evidence of an individual mind engaging with the text, not a formulaic response that could apply to any poem.',
        marks: 4
      }
    ],
    teacherNotes: [
      'Poetry appears on Paper 3 (0475) or the poetry component of Paper 4 (0992). Students answer ONE question from their set section of Songs of Ourselves.',
      'The question names a specific poem — there is no choice. Students must be prepared for all set poems in their section.',
      "The mark scheme uses Bands 1–6: Band 1 (18–20) requires 'convincing, well-developed response' with 'close and effective reference.' Personal response (AO4) is critical.",
      'Examiners want to see genuine engagement with the poem, not memorised generic points. The best responses show a student thinking on the page.',
      'Encourage students to annotate the poem printed in the exam paper itself — this is their workspace and the time spent annotating will improve the quality of their written response.'
    ],
    targetedSkills: [
      'Poetry Analysis',
      'Language Analysis',
      'Structural Analysis',
      'Personal Response',
      'Anthology Knowledge',
      'Annotation Skills'
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 7: Unseen Poetry Analysis Technique
  // ─────────────────────────────────────────────
  {
    id: 'igcse-07-unseen-poetry',
    title: 'IGCSE Literature: Unseen Poetry Analysis Technique',
    text: 'IGCSE English Literature',
    board: 'CAIE',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Develop a confident, transferable method for approaching any unseen poem under exam conditions',
      'Practise reading a poem multiple times with increasing analytical depth',
      'Write a structured response to an unseen poem that balances content understanding with technical analysis',
      'Manage time effectively: allocate appropriate minutes for reading, planning, and writing within the exam'
    ],
    successCriteria: [
      'I can read an unfamiliar poem and form a coherent initial interpretation within 3 minutes',
      'I can apply the SMILE framework systematically to analyse structure, meaning, imagery, language, and effect',
      'I can write a timed response that moves beyond paraphrase to genuine analysis of poetic methods',
      'I can self-assess my response against the CAIE Band descriptors and identify a specific improvement target'
    ],
    keywords: [
      'unseen',
      'SMILE',
      'structure',
      'meaning',
      'imagery',
      'language',
      'effect',
      'timed response'
    ],
    starterActivity: {
      title: 'The 3-Minute Read — First Impressions Matter',
      duration: '8 minutes',
      instructions:
        "Distribute a previously unseen poem (not from Songs of Ourselves) face-down on desks. On the teacher's signal, students turn it over and read it silently three times in 3 minutes. After reading, they write three single words that capture their initial response (e.g. 'loss', 'anger', 'beauty'). Share responses and compile a word cloud on the board. Establish the principle: your first impression is often your thesis. Examiners value genuine personal engagement, and that initial gut response — if developed analytically — becomes the backbone of a strong answer.",
      differentiation: {
        support: 'After the three reads, provide three guided questions: What is the poem about? How does it make you feel? What is one image that stands out?',
        core: 'Students form their three-word response independently and share with a partner, discussing any differences in interpretation.',
        stretch: 'Students write a one-sentence thesis statement based on their three words (e.g. "This poem explores loss through images of decay and absence") before the class discussion.'
      },
      resources: ['Unseen poem (printed face-down)', 'Word cloud template (board)']
    },
    mainActivities: [
      {
        title: 'The SMILE Framework — Systematic Unseen Analysis',
        duration: '22 minutes',
        instructions:
          "Introduce the SMILE framework for unseen poetry analysis: Structure (stanza shape, line length, enjambment, caesura, rhyme scheme), Meaning (subject, themes, message, shifts in tone), Imagery (metaphor, simile, personification, symbolism), Language (diction, sound devices, register, connotation), Effect (impact on the reader, emotional response, what lingers). Model the first element (Structure) on the board, demonstrating how to move from observation to analysis: 'The poem is written in one continuous stanza with no breaks — this mirrors the relentless, uninterrupted nature of the speaker's grief, as though there is no pause for relief.' Students then apply all five elements to the unseen poem, spending 3–4 minutes on each, writing annotations directly on the poem. Teacher circulates, challenging students who observe without analysing: 'You've noted the rhyme scheme — what effect does it create?'",
        differentiation: {
          support: 'Provide the SMILE framework as a structured worksheet with prompts and sentence starters for each element.',
          core: 'Students apply SMILE independently using the reference card, writing annotations directly on the poem.',
          stretch: 'Students identify which elements of SMILE yield the richest analysis for this particular poem and prioritise those in their response plan.'
        },
        resources: [
          'SMILE framework reference card',
          'SMILE structured worksheet (support tier)',
          'Clean copy of unseen poem for annotation'
        ]
      },
      {
        title: 'Timed Response — Exam Conditions',
        duration: '25 minutes',
        instructions:
          "Present the exam-style question for the unseen poem (e.g. 'How does the poet vividly convey a sense of...? You should consider the poet's choice of words and images, and the overall structure of the poem.'). Students plan for 3 minutes (bullet points only — no full sentences in the plan) then write for 22 minutes under strict exam conditions: silence, no notes, no discussion. Remind them of the Band descriptors: Band 1 requires analysis of specific effects; Band 3–4 typically narrates or paraphrases the poem's content without examining methods. After time is called, students underline their strongest analytical point in one colour and circle one area they want to improve in another.",
        differentiation: {
          support: 'Allow an additional 5 minutes and provide three guided bullet points for the plan. Offer the SMILE card as a reference during writing.',
          core: 'Students plan and write independently under timed conditions. They self-highlight their best analytical moment after writing.',
          stretch: 'After completing the timed response, students write a brief comparison paragraph connecting the unseen poem to any poem they have studied that shares a similar theme or technique.'
        },
        resources: [
          'Exam-style question (projected)',
          'Lined response paper',
          'Timer (visible to students)'
        ]
      }
    ],
    plenaryActivity: {
      title: 'Self-Assessment Against the Bands',
      duration: '5 minutes',
      instructions:
        'Display the simplified Band descriptors (Bands 1–4) on the board. Students read their own response and place themselves honestly in a Band, writing one sentence of justification (e.g. "I am Band 3 because I analysed language effects but did not comment on structure"). They write their current Band and target Band on a sticky note for the teacher to collect.',
      differentiation: {
        support: 'Provide a simplified Band descriptor card with bullet points and examples of what each Band looks like.',
        core: 'Students self-assess independently and justify their Band placement with specific evidence from their response.',
        stretch: 'Students identify one specific sentence they would add or change to move up one Band, and write it on the back of their sticky note.'
      }
    },
    homework:
      'Find a poem you have never read before (from a reputable anthology or poetry website). Apply the SMILE framework and write a 400-word analytical response. Bring the poem and your response to the next lesson for peer review.',
    worksheetQuestions: [
      {
        question: 'Read the unseen poem carefully. How does the poet vividly convey a sense of change? You should consider the poet\'s choice of words and images, and the overall structure of the poem.',
        lines: 20,
        modelAnswer:
          "The poet conveys change through a structural shift that divides the poem into two contrasting halves. The first three stanzas, written in long, flowing lines with gentle enjambment, evoke a sense of ease and continuity — the world before the change. However, the fourth stanza ruptures this pattern with a single short line: 'Then everything shifted.' The brevity is startling after the expansiveness of what came before, and the caesura created by the full stop forces the reader to pause and absorb the impact of the change, just as the speaker must.\n\nThe imagery reinforces this structural division. Before the shift, the poet uses warm, organic images — 'the orchard heavy with August' — that suggest abundance and ripeness. After it, the imagery turns sharp and metallic: 'the light had an edge to it, like a blade turned slowly in the hand.' This simile transforms light — usually a source of comfort — into something threatening. The verb 'turned' suggests deliberate, menacing intent, and the tactile quality of 'blade' and 'hand' makes the threat feel physical and immediate.\n\nThe poet also uses sound to mark the change. The early stanzas are rich in soft consonants and long vowels ('slow', 'golden', 'murmuring'), but the later stanzas introduce harder plosives and sibilants ('cracked', 'split', 'hissed'). This phonetic shift mirrors the tonal change from tranquillity to unease, working on the reader at an almost subconscious level.\n\nFinally, the poet's choice of tense contributes to the sense of change. The poem begins in the past tense — 'we walked' — but the final stanza shifts to the present: 'and still I stand here, waiting.' This tense shift suggests that while the change happened in the past, its effects are ongoing and unresolved, leaving the reader with a sense of suspension rather than closure.",
        marks: 20
      },
      {
        question: 'Explain the SMILE framework. For each element, write one sentence explaining what to look for in an unseen poem.',
        lines: 8,
        modelAnswer:
          "Structure: Examine the poem's shape — stanza divisions, line lengths, rhyme scheme, enjambment, and caesura, considering how these formal choices mirror or contrast with the poem's content. Meaning: Identify the poem's subject matter, central themes, and any shifts in message or attitude across the poem. Imagery: Analyse the figurative language — metaphors, similes, personification, and symbols — focusing on what specific images suggest and why the poet chose them. Language: Look at individual word choices (diction), sound devices (alliteration, assonance, sibilance), and the overall register or tone of the poem. Effect: Consider the cumulative impact on the reader — what emotions, thoughts, or questions does the poem leave you with, and how do the other four elements work together to create that effect?",
        marks: 5
      },
      {
        question: 'What is the most common mistake students make when writing about unseen poetry? How can you avoid it?',
        lines: 5,
        modelAnswer:
          "The most common mistake is paraphrasing — retelling what the poem says without analysing how or why the poet says it. Students who paraphrase typically describe the poem's content ('The poet talks about a storm and feels scared') rather than examining the methods used to create meaning ('The metaphor \"the sky cracked open like a wound\" presents the storm as an act of violence against the natural world, with \"wound\" implying pain and vulnerability'). To avoid this, students should always ask themselves after every sentence they write: 'Am I explaining WHAT the poem says, or HOW the poet achieves an effect?' If it is the former, they need to dig deeper into specific word choices, images, or structural decisions.",
        marks: 4
      }
    ],
    teacherNotes: [
      'The unseen poetry question appears on Paper 4 of 0475 (or the relevant component of 0992). It is worth 20 marks.',
      'Students receive a poem they have not studied and must analyse it independently. The mark scheme Bands are identical to set poetry.',
      'The biggest differentiator between Bands is whether students move beyond paraphrase (Band 4–5) to genuine analysis of how the poet creates effects (Band 1–2).',
      'Time management is critical — students typically have 30–35 minutes for this question. They should spend at least 5 minutes reading and annotating before writing.',
      'The SMILE framework is a scaffold, not a formula. Encourage students to be flexible — some poems reward detailed analysis of imagery but have little notable structure, and vice versa. The best responses focus on what is most interesting and effective in the specific poem.'
    ],
    targetedSkills: [
      'Unseen Poetry',
      'Poetry Analysis',
      'Close Reading',
      'Timed Writing',
      'Independent Analysis',
      'Personal Response'
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 8: Extended vs Core — Understanding the Difference
  // ─────────────────────────────────────────────
  {
    id: 'igcse-08-extended-vs-core',
    title: 'IGCSE Extended vs Core: Understanding the Difference',
    text: 'IGCSE English Language',
    board: 'CAIE',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Understand the structural differences between Core and Extended papers for IGCSE English Language',
      'Recognise the grade boundaries: Core allows grades C–G while Extended allows grades A*–E',
      'Identify how questions differ in complexity, expected length, and mark allocation between tiers',
      "Enable students to make informed decisions about tier entry or understand their teacher's recommendation"
    ],
    successCriteria: [
      'I can name at least three specific differences between the Core and Extended papers',
      'I can explain the grade ranges available on each tier and why this matters for university applications',
      'I can attempt both a Core-level and Extended-level reading question and reflect on my performance',
      'I can set a realistic target grade and identify two specific actions to achieve it'
    ],
    keywords: [
      'Core',
      'Extended',
      'tier',
      'grade boundary',
      'assessment',
      'target grade',
      'Paper 1',
      'Paper 2'
    ],
    starterActivity: {
      title: 'Which Paper Is This From? — Sorting Activity',
      duration: '8 minutes',
      instructions:
        'Display six exam questions on cards (three from Core papers, three from Extended papers) without labels. In pairs, students sort them into two groups and justify their reasoning. Reveal which is which. Discuss the observable differences: Core questions tend to be more guided with bullet points, shorter expected responses, and scaffolded prompts; Extended questions are more open-ended and demand longer, more independently structured, analytical responses.',
      differentiation: {
        support: 'Provide a checklist of features to look for when sorting: guided prompts, question length, marks available, whether analysis is explicitly requested.',
        core: 'Students sort and justify independently, articulating specific differences they notice.',
        stretch: 'Students predict what Band 1 performance looks like on each type of question and explain why the Extended version is more demanding.'
      },
      resources: ['Six question cards (3 Core, 3 Extended)', 'Sorting checklist (support tier)']
    },
    mainActivities: [
      {
        title: 'Side-by-Side Comparison — Paper Structure Deep Dive',
        duration: '20 minutes',
        instructions:
          'Distribute a comparison grid showing Core and Extended papers side by side for both Paper 1 (directed writing and composition) and Paper 2 (reading). For each section, students note: (a) number of questions, (b) total marks available, (c) time allowed, (d) grade range accessible, (e) key differences in question style. Teacher walks through the major differences: Extended Paper 2 uses TWO passages and includes a writer\'s effect question worth 15 marks; Core Paper 2 uses ONE passage with more scaffolded comprehension questions. Extended composition has broader choice and expects more sophisticated writing; Core composition provides more structured guidance. Students annotate their grid with personal notes about which elements they find more or less challenging.',
        differentiation: {
          support: 'Provide the comparison grid partially completed so students focus on the most important differences.',
          core: 'Students complete the full grid independently, adding their own observations about challenge level.',
          stretch: 'Students also compare the mark scheme Band descriptors for Core and Extended, noting how the language differs (e.g. "some awareness" vs. "convincing analysis").'
        },
        resources: [
          'Core vs Extended comparison grid',
          'Paper structure overview handout',
          'Mark scheme Band descriptors (Core and Extended)'
        ]
      },
      {
        title: 'Honest Self-Assessment — Diagnostic Challenge',
        duration: '22 minutes',
        instructions:
          'Students complete a diagnostic self-assessment using the same passage: (1) attempt a Core-level reading question (5 minutes), (2) attempt the equivalent Extended-level question on the same passage (10 minutes). After both, students compare their responses honestly. Which felt more comfortable and controlled? Where did the Extended question stretch them? Was the quality of their Core response genuinely strong, or just adequate? Teacher explains that the decision between Core and Extended should be based on current performance, trajectory, and target grade — not on fear or overconfidence. Students write a private reflective paragraph: "I am currently working at approximately a grade ___ because ___ and my target is ___." This is shared only with the teacher.',
        differentiation: {
          support: 'Allow additional time for both questions. Provide vocabulary support for the Extended question. Focus the reflection on achievable Core-level targets.',
          core: 'Students complete both questions under timed conditions and write an honest reflective paragraph.',
          stretch: 'Students attempt the Extended question under strict exam timing, self-assess against Band 1–2 descriptors, and create a targeted improvement plan.'
        },
        resources: [
          'Diagnostic passage with Core and Extended questions',
          'Timer',
          'Reflective paragraph template'
        ]
      }
    ],
    plenaryActivity: {
      title: 'Action Plan — Closing the Gap',
      duration: '5 minutes',
      instructions:
        'Students write three specific, actionable steps they will take to improve their performance at their target tier. Each action must be concrete (e.g. "I will practise one timed summary per week" not "I will try harder"). Teacher collects the action plans and uses them to inform differentiation, intervention grouping, and individual target-setting conversations.',
      differentiation: {
        support: 'Provide a menu of suggested actions to choose from, organised by skill area.',
        core: 'Students write their own three actions independently.',
        stretch: 'Students write actions with specific deadlines and measurable outcomes (e.g. "By half-term, I will be able to write a What–How–Why paragraph in under 8 minutes").'
      }
    },
    homework:
      'Complete a full past paper at your recommended tier level under timed conditions. Self-mark using the mark scheme and write a 200-word reflection on your performance, identifying two strengths and two areas for development.',
    worksheetQuestions: [
      {
        question: 'Complete the table below, comparing Core and Extended papers for IGCSE English Language. Include: grade range, time allowed for Paper 1, time allowed for Paper 2, number of passages in Paper 2, and one key difference in question style.',
        lines: 8,
        modelAnswer:
          'Core: Grades C–G available. Paper 1: 1 hour 45 minutes. Paper 2: 1 hour 45 minutes. Paper 2 uses one passage. Questions tend to be more guided with bullet points and shorter expected responses.\n\nExtended: Grades A*–E available. Paper 1: 2 hours. Paper 2: 2 hours. Paper 2 uses two passages. Questions are more open-ended and include a writer\'s effect question (15 marks) requiring independent analytical writing.',
        marks: 5
      },
      {
        question: 'A student says: "Core is the easy option." Explain why this statement is misleading.',
        lines: 5,
        modelAnswer:
          "This statement is misleading for several reasons. First, achieving a high grade on Core (grade C) still requires strong reading comprehension, effective writing, and clear communication skills. Second, the Core paper is not simply an easier version of the Extended — it tests the same fundamental skills but with more scaffolding and shorter responses. Third, a student who is a strong C-grade candidate will perform better and more confidently on Core than struggling through Extended and potentially falling below the E-grade threshold. The right tier is the one that allows the student to demonstrate their best possible performance.",
        marks: 4
      },
      {
        question: 'What is the "safety net" grade on the Extended paper? Why might a student choose Core instead of relying on this?',
        lines: 5,
        modelAnswer:
          'The safety net on the Extended paper is grade E — this is the lowest grade available. If a student performs below the E-grade boundary on Extended, they receive Ungraded, meaning they get no qualification at all. On Core, even a weaker performance results in a grade (down to G). A student who is not yet confident at grade C level might choose Core because it guarantees a grade, whereas Extended carries the risk of achieving nothing. This is especially important for students who need a minimum grade for college or employment applications.',
        marks: 4
      }
    ],
    teacherNotes: [
      'This lesson is best delivered in mid-Year 10 when tier decisions are being discussed. Handle tier conversations sensitively — some students may feel disappointed by a Core recommendation.',
      'Emphasise that a strong Core grade (C) is a solid achievement and that Core does not mean "easy" — the skills tested are the same, just with different levels of scaffolding.',
      'For the IGCSE Language A syllabus: Core candidates take Paper 1 (1h 45m) and Paper 2 (1h 45m) with grades C–G. Extended candidates take Paper 1 (2h) and Paper 2 (2h) with grades A*–E.',
      'The IGCSE Language B syllabus is the same examination under a different code, used when a centre enters candidates for both Core and Extended.',
      'Some centres use coursework (Component 3 or 4) alongside or instead of Paper 1. If this applies to your centre, adjust the comparison grid accordingly.'
    ],
    targetedSkills: [
      'Exam Technique',
      'Self-Assessment',
      'Metacognition',
      'Goal Setting'
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 9: Coursework Portfolio — Planning & Structuring
  // ─────────────────────────────────────────────
  {
    id: 'igcse-09-coursework-portfolio',
    title: 'IGCSE Coursework Portfolio: Planning & Structuring',
    text: 'IGCSE English Language',
    board: 'CAIE',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Understand the CAIE coursework portfolio requirements: three assignments covering different triplets',
      'Learn the assessment criteria for coursework: separate marks for content/structure and style/accuracy',
      'Plan a coursework portfolio that demonstrates range across text types, audiences, and purposes',
      'Develop strategies for drafting, redrafting, and improving coursework pieces to maximise marks'
    ],
    successCriteria: [
      'I can explain the coursework portfolio structure: number of assignments, word counts, and triplet requirements',
      'I can plan three assignments that demonstrate genuine range in format, audience, and purpose',
      'I can identify at least five specific improvements when comparing a first draft to a redraft',
      'I can create a realistic timeline for completing my coursework portfolio to a high standard'
    ],
    keywords: [
      'coursework',
      'portfolio',
      'triplet',
      'assignment',
      'drafting',
      'redrafting',
      'word count',
      'range'
    ],
    starterActivity: {
      title: 'What Counts? — Coursework Requirements Overview',
      duration: '10 minutes',
      instructions:
        "Display the coursework portfolio structure on the board: three assignments, each from a different 'triplet' (Informative, Analytical, Argumentative OR Descriptive, Narrative, Personal Reflective). Students note down the requirements in their books. Discuss why CAIE requires range — a portfolio with three similar pieces would not meet the specification, regardless of quality. Show a model portfolio contents page demonstrating effective variety: e.g. Assignment 1 — argumentative speech (600 words), Assignment 2 — descriptive composition (500 words), Assignment 3 — personal reflective essay (600 words). Students discuss what makes this a strong combination.",
      differentiation: {
        support: 'Provide a printed requirements summary for students to keep in their books. Use a colour-coded diagram showing the triplet system.',
        core: 'Students note requirements independently and identify why the model portfolio demonstrates good range.',
        stretch: 'Students evaluate two different portfolio combinations and argue which demonstrates better range, justifying with reference to the specification.'
      },
      resources: ['Portfolio structure slide', 'Model contents page', 'Requirements summary (support tier)']
    },
    mainActivities: [
      {
        title: 'Assignment Planning Workshop',
        duration: '25 minutes',
        instructions:
          "Students plan their three coursework assignments using individual planning cards. For each assignment, they complete: (1) Assignment type — which triplet it belongs to, (2) Text type and format (e.g. speech, article, letter, story, diary), (3) Target audience, (4) Purpose and tone, (5) Approximate word count, (6) Key features they will include to demonstrate skill. Teacher circulates, checking that portfolios show genuine range and that no two assignments overlap significantly in style, format, or purpose. Discuss common pitfalls: all three pieces being formal essays, ignoring audience specificity, choosing formats the student has never practised. Students share their plans with a partner who acts as a 'coursework advisor', checking for variety, ambition, and specification compliance.",
        differentiation: {
          support: "Provide a pre-selected list of assignment options for each triplet for students to choose from. Offer a step-by-step planning guide with prompts for each section of the card.",
          core: 'Students plan their three assignments independently, using the planning cards and checking variety with a partner.',
          stretch: "Students plan ambitious assignment types (e.g. a speech that requires rhetorical mastery, or a narrative with non-linear structure) and begin writing the opening 150 words of their most challenging piece."
        },
        resources: [
          'Assignment planning card template (x3)',
          'Triplet options list',
          'Pre-selected assignment options (support tier)'
        ]
      },
      {
        title: 'Drafting Masterclass — The Art of Redrafting',
        duration: '18 minutes',
        instructions:
          "Distribute a 'before and after' example: a first draft of a coursework piece alongside the improved redraft. Students identify ten specific improvements (e.g. varied sentence openings, stronger vocabulary, clearer paragraphing, corrected SPaG, more effective opening, improved conclusion, better audience awareness, more precise word choices, structural reorganisation, added rhetorical devices). Discuss the critical difference between 'editing' (surface corrections to spelling and grammar) and 'redrafting' (substantive improvement to content, structure, and style). Emphasise CAIE's expectation: coursework should represent the student's best work after a genuine process of improvement. Introduce the redrafting checklist: (1) Does the opening hook the reader? (2) Is the register consistent throughout? (3) Are paragraphs varied in length and structure? (4) Is vocabulary ambitious but accurate? (5) Is the ending purposeful, not just stopped?",
        differentiation: {
          support: 'Provide a guided worksheet that points students to specific sections of the drafts to compare. Offer the redrafting checklist as a printed card.',
          core: 'Students identify improvements independently and categorise them as "editing" or "redrafting" changes.',
          stretch: 'Students take the redraft and identify two further improvements that would push it from Band 2 to Band 1, then write those improvements.'
        },
        resources: [
          'Before-and-after drafting example',
          'Redrafting checklist card',
          'Improvement identification worksheet (support tier)'
        ]
      }
    ],
    plenaryActivity: {
      title: 'Portfolio Pledge and Timeline',
      duration: '5 minutes',
      instructions:
        "Students write a 'Portfolio Pledge' containing three commitments for producing their best coursework (e.g. 'I will complete a first draft at least two weeks before the deadline so I have time to redraft', 'I will read my work aloud to check for fluency before submitting'). They also set three milestone dates for their three assignments. Teacher collects the pledges and returns them at key checkpoints throughout the coursework period as accountability reminders.",
      differentiation: {
        support: 'Provide a pledge template with suggested commitments to choose from.',
        core: 'Students write their own three commitments independently.',
        stretch: 'Students create a detailed week-by-week timeline for the entire portfolio process, including first draft, feedback, redraft, and final submission dates.'
      }
    },
    homework:
      'Write the complete first draft of Assignment 1. This is a FIRST draft — it does not need to be perfect, but it should be complete (meeting the word count and covering all planned content). Bring it to the next lesson for peer review.',
    worksheetQuestions: [
      {
        question: 'Explain the "triplet" system for IGCSE coursework. Why does CAIE require each assignment to come from a different triplet?',
        lines: 5,
        modelAnswer:
          "The CAIE coursework portfolio requires three assignments, each from a different 'triplet' or category of writing. The triplets typically include: Informative/Analytical/Argumentative and Descriptive/Narrative/Personal Reflective. CAIE requires different triplets because the portfolio should demonstrate a student's range as a writer — the ability to adapt voice, register, structure, and purpose for different tasks. A student who writes three narrative pieces, however well, has not shown they can argue, inform, describe, or reflect. Range is built into the assessment criteria: a portfolio lacking variety cannot access the highest marks.",
        marks: 4
      },
      {
        question: 'What is the difference between "editing" and "redrafting"? Give two examples of each.',
        lines: 6,
        modelAnswer:
          "Editing involves surface-level corrections that fix errors without substantially changing the content or structure: for example, (1) correcting a spelling mistake from 'recieve' to 'receive', and (2) adding a missing comma in a complex sentence. Redrafting involves substantive changes that improve the quality, impact, and effectiveness of the writing: for example, (1) rewriting the opening paragraph to begin with a striking image instead of a bland statement, and (2) reorganising the structure so the strongest argument comes last for maximum impact. Coursework that has only been edited will not improve as dramatically as coursework that has been genuinely redrafted.",
        marks: 4
      },
      {
        question: 'Look at the first draft and redraft provided. Identify and explain three specific improvements the student made between drafts.',
        lines: 8,
        modelAnswer:
          "First, the student replaced the generic opening ('In this essay I will write about...') with an engaging rhetorical question that immediately draws the reader in and establishes the argumentative tone. This shows awareness of audience and purpose.\n\nSecond, the student varied their sentence structures: the first draft used almost exclusively simple and compound sentences, while the redraft includes complex sentences with subordinate clauses, creating a more sophisticated rhythm and demonstrating grammatical range.\n\nThird, the student strengthened the conclusion from a simple restatement ('In conclusion, I think...') to a powerful call to action that echoes the opening question, creating structural cohesion and leaving the reader with a clear, memorable final impression.",
        marks: 6
      }
    ],
    teacherNotes: [
      'Coursework (Component 3 for Core, Component 4 for Extended) is an alternative to Paper 1 for centres that choose it.',
      'The portfolio consists of three assignments totalling approximately 1,500 words (Core) or 2,000 words (Extended). Each assignment is marked separately.',
      'The portfolio is internally assessed and externally moderated by CAIE. Teachers may give general feedback on first drafts but must NOT correct the work — students must make their own improvements.',
      'Keep records of the drafting process (first draft, teacher feedback sheet, final draft) to satisfy moderation requirements.',
      'Assignments must come from different triplets to demonstrate range. A portfolio without range will be penalised, regardless of the quality of individual pieces.',
      'Word count limits are guidelines, not absolute caps, but significantly exceeding them can indicate a lack of control and selectivity in writing.'
    ],
    targetedSkills: [
      'Coursework Planning',
      'Portfolio Management',
      'Drafting and Redrafting',
      'Self-Editing',
      'Range of Writing',
      'Audience Awareness'
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 10: Exam Strategy — Time Management Across All Papers
  // ─────────────────────────────────────────────
  {
    id: 'igcse-10-exam-strategy-time-management',
    title: 'IGCSE Exam Strategy: Time Management Across All Papers',
    text: 'IGCSE English Language & Literature',
    board: 'CAIE',
    yearGroup: '10-11',
    duration: '60 minutes',
    objectives: [
      'Map the time allocation for every question across all IGCSE English papers (Language and Literature)',
      'Understand how marks-per-minute calculations should drive time management decisions',
      "Practise timed micro-tasks to build internal 'exam clock' awareness and speed under pressure",
      'Develop a personal exam-day strategy covering reading time, planning, writing, and checking'
    ],
    successCriteria: [
      'I can state the correct time allocation for every question on my exam papers',
      'I can calculate how many minutes each mark is worth and use this to plan my time',
      'I can complete a focused micro-task (planning, annotating, or writing a paragraph) within a strict time limit',
      'I can create a detailed exam-day game plan for at least one of my papers'
    ],
    keywords: [
      'time management',
      'marks per minute',
      'reading time',
      'planning',
      'checking',
      'exam strategy',
      'pacing',
      'game plan'
    ],
    starterActivity: {
      title: 'The Marks-Per-Minute Calculator',
      duration: '10 minutes',
      instructions:
        'Display the paper structures on the board: Language Paper 1, Language Paper 2, Literature Paper 1, and Literature Paper 4 (or Paper 3). For each, show total marks and total time available. Students calculate the marks-per-minute ratio for each paper (e.g. Language Paper 2 Extended: 50 marks in 120 minutes = approximately 2.4 minutes per mark). Then they calculate how many minutes to spend on each individual question. Record in a personal "Exam Timing Grid". Discuss the implications: a 15-mark question deserves roughly 36 minutes; spending 50 minutes on it steals time from later questions. The final question attempted is often the weakest — so plan to give every question its fair share of time.',
      differentiation: {
        support: 'Provide a pre-structured timing grid with the calculations partially completed. Students fill in the remaining cells.',
        core: 'Students calculate all timings independently and compare their grid with a partner to check accuracy.',
        stretch: 'Students also factor in reading time (5 minutes at the start of CAIE papers) and checking time (5 minutes at the end), then recalculate how this affects the time available for each question.'
      },
      resources: ['Paper structure overview slide', 'Exam Timing Grid template', 'Calculator (optional)']
    },
    mainActivities: [
      {
        title: 'Micro-Timed Challenges — Building the Exam Clock',
        duration: '25 minutes',
        instructions:
          "Students complete four rapid-fire micro-timed challenges, each simulating a different exam skill under time pressure: (1) 5 minutes — read a passage and identify 5 content points for a summary (Paper 2 reading skill), (2) 8 minutes — write one analytical paragraph on a short poetry extract (Literature skill), (3) 3 minutes — plan a composition using a spider diagram with five branches (Paper 1 writing skill), (4) 5 minutes — write the opening paragraph of a directed writing response in an appropriate register (Paper 1 reading-into-writing skill). After each challenge, students reflect briefly: did they finish? Was their work rushed or controlled? What would they sacrifice or prioritise with one fewer minute? Teacher emphasises that speed improves with practice — regular timed work in class and at home is essential for building the internal 'exam clock'.",
        differentiation: {
          support: 'Allow 1–2 extra minutes per challenge. Provide sentence starters for the analytical paragraph and a format reminder for the directed writing.',
          core: 'Students complete all four challenges under strict timing. They reflect honestly on speed versus quality.',
          stretch: 'Students complete all four challenges, then choose one to redo immediately, aiming to produce higher quality in the same time — demonstrating that practice improves both speed and quality.'
        },
        resources: [
          'Passage for summary challenge',
          'Poetry extract for analysis challenge',
          'Composition prompt for planning challenge',
          'Directed writing stimulus and prompt',
          'Timer (visible to all students)'
        ]
      },
      {
        title: 'The Exam-Day Game Plan',
        duration: '18 minutes',
        instructions:
          "Students create a personalised 'Exam-Day Game Plan' for their most challenging paper. The plan must include: (1) How to use the 5-minute reading time productively (read passage, identify key ideas, start planning), (2) Which question to answer first and why (e.g. 'I'll start with the summary because it settles my nerves' or 'I'll start with the writer's effect question because I need to be freshest for analysis'), (3) Time checkpoints with specific clock times (e.g. 'By 10:30 I should be starting Question 2'), (4) Emergency protocol — what to do if running out of time on a question (move on, leave space, come back if time allows), (5) The final 5 minutes — checking strategy (read through once for SPaG, once for sense). Pairs share and critique each other's plans, specifically checking for realistic timing and concrete strategies.",
        differentiation: {
          support: 'Provide a Game Plan template with prompts and a worked example for one paper. Students adapt it for their own paper.',
          core: 'Students create their Game Plan independently and peer-review with a partner.',
          stretch: "Students create Game Plans for TWO different papers and identify where the same strategies apply and where they need to adjust their approach. They also consider 'what if' scenarios (e.g. 'What if I can't understand the unseen poem?')."
        },
        resources: [
          'Exam-Day Game Plan template',
          'Worked example Game Plan',
          'Clock time calculation sheet'
        ]
      }
    ],
    plenaryActivity: {
      title: 'Commitment Card',
      duration: '5 minutes',
      instructions:
        "Students write one specific time-management commitment on an index card (e.g. 'I will always spend 3 minutes planning before writing a composition', 'I will set a mental alarm to move on after 35 minutes on any question', 'I will leave 5 minutes at the end to check my work'). Teacher collects the cards and redistributes them before the next timed assessment or mock exam as a pre-exam reminder.",
      differentiation: {
        support: 'Provide three suggested commitments to choose from.',
        core: 'Students write their own commitment based on the lesson.',
        stretch: 'Students write a commitment and a specific strategy for keeping to it under exam pressure (e.g. writing their time checkpoints at the top of the answer booklet before starting).'
      }
    },
    homework:
      'Complete a full past paper at your tier level under strict timed conditions at home. Record the actual time you spend on each question in the margin. Afterwards, write a 150-word reflection: did you stick to your Game Plan? Where did your timing go wrong? What will you adjust next time?',
    worksheetQuestions: [
      {
        question: 'Calculate the time you should spend on each question for IGCSE English Language Paper 2 (Extended). The paper is 2 hours long and worth 50 marks. Question 1 is worth 15 marks, Question 2 is worth 20 marks, and Question 3 is worth 15 marks.',
        lines: 6,
        modelAnswer:
          'Total time: 120 minutes for 50 marks = 2.4 minutes per mark. However, we should subtract 5 minutes for reading time at the start and 5 minutes for checking at the end, leaving 110 minutes of writing time.\n\nQuestion 1 (15 marks): approximately 33 minutes (15 x 2.2 minutes).\nQuestion 2 (20 marks): approximately 44 minutes (20 x 2.2 minutes).\nQuestion 3 (15 marks): approximately 33 minutes (15 x 2.2 minutes).\n\nNote: these are guidelines. Some students may benefit from spending slightly more time on their weakest question type, but they must not steal more than 5 minutes from any other question.',
        marks: 4
      },
      {
        question: 'A student says: "I always run out of time on the last question." Suggest three specific strategies they could use to prevent this.',
        lines: 6,
        modelAnswer:
          "First, they should write their time checkpoints at the top of the answer booklet before the exam starts, so they have a visible reminder of when to move on. Second, they should practise strict timed conditions at home — if they regularly practise finishing within time limits, their writing speed will improve naturally. Third, they should develop an 'emergency exit' strategy: if they are still writing when their checkpoint time arrives, they should write one final sentence to close the point, leave two lines of space (in case they have time to return), and move on to the next question. It is always better to attempt every question adequately than to write one perfect answer and rush or miss the others.",
        marks: 4
      },
      {
        question: 'CAIE exams begin with 5 minutes of reading time during which you may NOT write. Explain how you would use this time productively for (a) a Language Paper 2 and (b) a Literature Paper 1.',
        lines: 8,
        modelAnswer:
          "(a) Language Paper 2: I would read the passage(s) carefully, focusing on understanding the overall argument, tone, and structure. I would mentally note key sections that might be relevant to the summary question and begin identifying the writer's main techniques for the effect question. I would also read all three questions so I know exactly what to look for when I re-read the passage during writing time.\n\n(b) Literature Paper 1: I would read both the passage-based (a) and essay (b) options for my set text to decide which to answer. If choosing (a), I would begin mentally annotating the extract — noting key quotations, techniques, and possible analytical points. If choosing (b), I would begin planning which moments from across the text to discuss and in what order. In both cases, using reading time for decision-making and mental planning means I can begin writing immediately when the time starts.",
        marks: 6
      },
      {
        question: 'Create a sample Exam-Day Game Plan for one of your papers. Include: paper name, total time, time per question, your starting question, two time checkpoints, and your checking strategy.',
        lines: 10,
        modelAnswer:
          "Paper: IGCSE English Language Paper 1 (Extended) — 2 hours.\n\nReading time (5 mins): Read the stimulus passage. Identify 10 content points. Read the directed writing prompt and composition options.\n\nQuestion 1 — Directed Writing (start immediately): 50 minutes. Focus on selecting content points and adapting register. Aim for 400 words.\n\nTime checkpoint 1: By 50 minutes in, I must be starting the composition.\n\nQuestion 2 — Composition (descriptive or narrative): 55 minutes. Spend 5 minutes planning (spider diagram or arc), 45 minutes writing, 5 minutes proofreading the composition specifically.\n\nTime checkpoint 2: By 1 hour 50 minutes, I must be in my final check.\n\nFinal 10 minutes: Re-read both responses. Check SPaG, sentence variety, and register consistency. Ensure the directed writing addresses the format requirements.",
        marks: 6
      }
    ],
    teacherNotes: [
      'This lesson works best 4–6 weeks before the exam period, giving students time to practise their strategies in mock conditions.',
      'Key timings to emphasise: Language Paper 1 Extended — 2 hours (directed writing ~50 mins, composition ~60 mins, reading and checking ~10 mins).',
      'Language Paper 2 Extended — 2 hours (Q1 comprehension ~30 mins, Q2 summary ~35 mins, Q3 writer\'s effect ~35 mins, reading and checking ~20 mins).',
      'Literature Paper 1 — 1 hour 30 minutes for two questions (~45 mins each). Literature Paper 4 — unseen section typically ~35 mins.',
      'CAIE papers begin with 5 minutes of reading time where students may NOT write on the answer booklet — teach them to use this productively for passage comprehension, question reading, and mental planning.',
      'The Core papers are shorter (1h 45m each) with proportionally adjusted timings. Ensure Core-tier students create their own timing grids rather than using the Extended ones.'
    ],
    targetedSkills: [
      'Exam Technique',
      'Time Management',
      'Question Decoding',
      'Planning Under Pressure',
      'Metacognition'
    ]
  }
]
