// @ts-nocheck
import type { BoardExamGuide } from './types'

export const ocrGuide: BoardExamGuide = {
  boardId: 'OCR',
  boardName: 'OCR',
  boardColor: '#EA580C',

  overview: `
    <p>OCR's GCSE English qualifications (J351 Language, J352 Literature) are built around a distinctive <strong>linked-unseen format</strong> that sets them apart from every other exam board. In both Language and Literature papers, students are consistently required to work across multiple texts simultaneously - comparing a studied or provided passage with an unseen extract that shares thematic or stylistic connections. This cross-text architecture means that comparison is not a bolt-on skill tested in isolation; it is woven into the fabric of almost every question students encounter.</p>

    <p>The Language qualification splits neatly into two components of equal weight, each 2 hours and 80 marks. <strong>Component 01</strong> focuses on non-fiction reading and writing: students retrieve, synthesise, analyse, evaluate and compare across two unseen non-fiction texts, one from the 19th century and one from the 20th or 21st, before writing one non-fiction piece from a choice of two tasks. <strong>Component 02</strong> sets two unseen literary prose texts from the 20th or 21st century, at least one of them fiction, with four reading questions worth the same marks as Component 01's (4, 6, 12 and 18; its Question 2 analyses language and structure rather than linking the texts), before one piece of creative writing, again chosen from two tasks. In both, the writing is half the paper: 40 marks, 24 for content and organisation and 16 for technical accuracy. OCR advises about an hour on each section, so the discipline that matters is stopping the reading answers on time.</p>

    <p>OCR Literature is uniquely demanding because of its <strong>linked-unseen passage model</strong>. In both Component 01 and Component 02, the Part (a) question presents students with an extract from their studied text alongside an unseen passage on the same theme. They must write about <em>both</em> passages in a single, integrated response - a skill that requires confident subject knowledge and the ability to draw perceptive comparisons under timed conditions. Part (b) then pivots to a whole-text or whole-play essay, requiring breadth of knowledge across the entire work.</p>

    <p>Strategic success on OCR papers hinges on three priorities: <strong>sustained comparison</strong> (Level 6 explicitly requires "sustained, interwoven comparison" that runs through every paragraph, not just the introduction and conclusion), <strong>engagement with the unseen</strong> (treating the unseen passage as an equal partner rather than an afterthought), and <strong>disciplined time-splitting</strong> between reading and writing, about an hour on each in both Language components. Students who master the linked-unseen format often find it liberating - it rewards genuine analytical thinking over rote-learned quotations, because half of the material is always fresh.</p>
  `,

  specCodes: [
    { subject: 'English Language', code: 'J351' },
    { subject: 'English Literature', code: 'J352' },
  ],

  // ─── Language Assessment Objectives ──────────────────────────────────────────
  // Weightings corrected 31 October 2026 to the marks each objective carries
  // across both J351 components, as src/data/mark-scheme-guides/ocr-lang-component01.ts
  // and -component02.ts record them: AO1 14 (10 + 4), AO2 30 (12 + 18), AO3 12,
  // AO4 24, AO5 48 and AO6 32 of 160. They read ~25%, ~25%, ~10%, ~10%, ~20% and
  // ~10%, which made reading analysis the heaviest objective when the writing is.
  languageAOs: [
    {
      code: 'AO1',
      description:
        'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
      weighting: '~9%',
    },
    {
      code: 'AO2',
      description:
        'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.',
      weighting: '~19%',
    },
    {
      code: 'AO3',
      description:
        'Compare writers\u2019 ideas and perspectives, as well as how these are conveyed, across two or more texts.',
      weighting: '7.5%',
    },
    {
      code: 'AO4',
      description:
        'Evaluate texts critically and support this with appropriate textual references.',
      weighting: '15%',
    },
    {
      code: 'AO5',
      description:
        'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.',
      weighting: '30%',
    },
    {
      code: 'AO6',
      description:
        'Candidates must use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
      weighting: '20%',
    },
  ],

  // ─── Literature Assessment Objectives ────────────────────────────────────────
  literatureAOs: [
    {
      code: 'AO1',
      description:
        'Read, understand and respond to texts. Students should be able to: maintain a critical style and develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations.',
      weighting: '~30%',
    },
    {
      code: 'AO2',
      description:
        'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
      weighting: '~30%',
    },
    {
      code: 'AO3',
      description:
        'Show understanding of the relationships between texts and the contexts in which they were written.',
      weighting: '~20%',
    },
    {
      code: 'AO4',
      description:
        'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
      weighting: '~20%',
    },
  ],

  // ─── Language Papers ─────────────────────────────────────────────────────────
  // Corrected 31 October 2026 to the J351 guides in src/data/mark-scheme-guides/
  // ocr-lang-component01.ts and -component02.ts. Component 01 had "2-3 unseen
  // non-fiction and/or media texts", Q2 at 8 marks, Q3 on language alone and a
  // 16-mark Q4, then TWO writing tasks of 15 and 25 marks. Component 02 paired a
  // literary extract "with one linked non-fiction/media text", with Q1 at 8, Q2 at
  // 12, a 20-mark "cross-text comparison" as Q3 and the writing as Q4. Each
  // component prints two texts (in 01, non-fiction from the 19th century and from
  // the 20th or 21st; in 02, literary prose from the 20th or 21st century), asks
  // Q1 4, Q2 6, Q3 12 and Q4 18 (evaluation 12 + comparison 6), and sets ONE
  // writing task, Question 5 or 6, for 40. The minutes are the guides' suggestion
  // inside OCR's advice of about an hour on each section.
  // Second read, 31 October 2026: Q1, Q2 and Q3 named Text 1 and Text 2 as a
  // rule; the guides have that numbering only for the papers they checked, so
  // they now say "one text" and "the other text". The overview said Component 02
  // had "the same pattern" of questions; its Q2 is language and structure.
  languagePapers: [
    {
      title: 'Component 01: Communicating Information and Ideas',
      code: 'J351/01',
      time: '2 hours',
      marks: 80,
      weighting: '50%',
      textType:
        'Two unseen non-fiction texts in a Reading Insert, one from the 19th century and one from the 20th or 21st century (for example articles, speeches, letters, travel writing, autobiography). Section A asks four reading questions; Section B sets one piece of non-fiction writing, from a choice of two tasks.',
      sections: [
        {
          title: 'Section A: Reading',
          marks: 40,
          questions: [
            {
              question:
                'Q1 - Retrieval: short questions, in two or three parts, on a set of lines from one of the texts.',
              marks: 4,
              ao: 'AO1',
              skill: 'Retrieve information',
              time: 'About 5 minutes',
              advice:
                'Short, precise answers drawn only from the lines named. A part may ask for a word, a phrase or a quotation, or for a point explained in a few words of your own: give exactly what each part asks for. No analysis is needed, and bullet points are perfectly acceptable.',
            },
            {
              question:
                'Q2 - Synthesis: write about a link between the <strong>two</strong> texts that the question names, using evidence from both.',
              marks: 6,
              ao: 'AO1',
              skill: 'Synthesise across two texts',
              time: 'About 8 minutes',
              advice:
                'Make three linked points. For each, state the link in a sentence, then give a short piece of evidence from each text, and link them explicitly (\u201cSimilarly, Text 2...\u201d or \u201cIn contrast, Text 1...\u201d). There are no marks here for analysing language: save that for Question 3.',
            },
            {
              question:
                'Q3 - Language and Structure Analysis: analyse how the writer of one text uses language and structure to create the effect the question names.',
              marks: 12,
              ao: 'AO2',
              skill: 'Analyse language and structure and their effects',
              time: 'About 15 minutes',
              advice:
                'Select three or four short quotations and zoom in on specific word choices and techniques. Name the technique where possible, but prioritise explaining the <em>effect</em> on the reader. Cover structure as well: how the text opens, where the focus shifts, how sentences and paragraphs are shaped and how it ends. An answer that does not give language and structure a fair share cannot reach the higher levels.',
            },
            {
              question:
                'Q4 - Evaluation and Comparison: respond to a statement about both texts, deciding how far you agree and comparing the writers\u2019 ideas and how they present them.',
              marks: 18,
              ao: 'AO4 (12 marks) + AO3 (6 marks)',
              skill: 'Evaluate critically and compare, with references to both texts',
              time: 'About 20 minutes',
              advice:
                'This is the highest-tariff reading question. Open with a one-sentence verdict on the statement, then show nuance: the best responses agree <em>and</em> qualify, and your view can differ between the two texts. Build each paragraph round one idea, judging it in both texts and comparing how the writers present it. Quote from both texts: an answer that never links them earns very little of the comparison mark.',
            },
          ],
        },
        {
          title: 'Section B: Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q5 or Q6 - Non-fiction writing: one piece, such as a speech, letter or article, from a choice of two tasks, each with a set form, audience and purpose.',
              marks: 40,
              ao: 'AO5 (24 marks) + AO6 (16 marks)',
              skill: 'Write clearly and effectively for a given form and audience; accurate SPaG',
              time: 'About 60 minutes: 5 to 10 planning, about 45 writing and 5 checking',
              advice:
                'Read both tasks before you choose. Match your tone and register precisely to the audience and form: a speech should sound like someone talking to listeners, and a letter should be set out and addressed as one. Plan four or five paragraphs with a deliberate structure: a compelling opening, varied paragraph lengths and an ending that echoes or develops your opening idea. Use ambitious vocabulary naturally and vary sentence structures for effect. Accuracy is 16 of the 40 marks, so keep the last 5 minutes to proofread.',
            },
          ],
        },
      ],
    },
    {
      title: 'Component 02: Exploring Effects and Impact',
      code: 'J351/02',
      time: '2 hours',
      marks: 80,
      weighting: '50%',
      textType:
        'Two unseen literary prose texts from the 20th or 21st century. At least one is fiction, such as an extract from a novel; the other may be literary non-fiction, such as a memoir. Section A asks four reading questions; Section B sets one piece of creative writing, from a choice of two tasks.',
      sections: [
        {
          title: 'Section A: Reading',
          marks: 40,
          questions: [
            {
              question:
                'Q1 - Finding information: short questions on a set of lines from one text.',
              marks: 4,
              ao: 'AO1',
              skill: 'Identify and interpret explicit and implicit ideas',
              time: 'About 5 minutes',
              advice:
                'A part may ask you to pick out words or phrases, or to say briefly what something shows or why it happens. Copy words accurately from the named lines when asked, and give exactly the number of answers asked for, each as short as it can be while still making sense: an overloaded answer line can score nothing.',
            },
            {
              question:
                'Q2 - Language and structure (short): how the writer creates the effect the question names in a short section of one text.',
              marks: 6,
              ao: 'AO2',
              skill: 'Analyse how language and structure create meanings and effects',
              time: 'About 8 minutes',
              advice:
                'Address both language <em>and</em> structure: many students neglect structure entirely. Two or three well-chosen quotations, each explained, and something on how the lines are built or ordered are enough. This question is worth half as much as Question 3, so do not write as much.',
            },
            {
              question:
                'Q3 - Language and structure analysis: how the writer of the other text presents something the question names, such as a character\u2019s feelings or attitude.',
              marks: 12,
              ao: 'AO2',
              skill: 'Analyse how language and structure create meanings and effects',
              time: 'About 15 minutes',
              advice:
                'Find three or four moments that show what the question asks about. For each, analyse a word choice, then say where that moment sits in the passage and why its placing matters. Consider narrative perspective, sentence length, paragraph structure and shifts in focus or tone alongside word-level analysis. The higher levels expect detailed, fairly balanced analysis of both language and structure.',
            },
            {
              question:
                'Q4 - Evaluation and comparison: respond to a statement about both texts, deciding how far you agree and comparing how the writers present their ideas.',
              marks: 18,
              ao: 'AO4 (12 marks) + AO3 (6 marks)',
              skill: 'Evaluate and compare two texts, with references to both',
              time: 'About 20 minutes',
              advice:
                'This is the defining question of the paper. Give a clear verdict on the statement, then move fluidly between the two texts throughout your response: do <strong>not</strong> write about one text and then the other. Every paragraph should judge a point in both texts and compare <em>how</em> the writers present it, for example through viewpoint, description or dialogue, as well as <em>what</em> they say. You can find the statement truer of one text than the other.',
            },
          ],
        },
        {
          title: 'Section B: Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q5 or Q6 - Creative writing: one piece from a choice of two tasks. In OCR\u2019s sample paper and its June 2024 paper, these were a story from a given title and a piece of personal writing about an experience.',
              marks: 40,
              ao: 'AO5 (24 marks) + AO6 (16 marks)',
              skill: 'Write imaginatively with crafted language and structure',
              time: 'About 60 minutes: 5 to 10 planning, about 45 writing and 5 checking',
              advice:
                'Pick the task that sparks a genuine idea, not the one that seems easiest, and follow its title and bullet points. Plan a clear structural arc (beginning, development, climax or shift, resolution) and keep one viewpoint throughout. Use sensory detail, varied sentence structures and figurative language purposefully. Aim for quality over quantity: one clear situation, described closely, will outscore a crowded plot. Leave 5 minutes for proofreading.',
            },
          ],
        },
      ],
    },
  ],

  // ─── Literature Papers ───────────────────────────────────────────────────────
  literaturePapers: [
    {
      title: 'Component 01: Exploring Modern and Literary Heritage Texts',
      code: 'J352/01',
      time: '2 hours',
      marks: 80,
      weighting: '50%',
      textType:
        'Studied modern prose or drama text + studied 19th-century novel, each paired with linked unseen passages',
      sections: [
        {
          title: 'Section A: Modern Prose or Drama',
          marks: 40,
          questions: [
            {
              question:
                'Part (a): Extract from your studied modern text + an <strong>UNSEEN</strong> linked passage on the same theme. Write about <strong>both</strong> passages.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3',
              skill: 'Compare studied extract with unseen passage; analyse language and context',
              time: '25\u201328 minutes',
              advice:
                'This is OCR\u2019s signature question format. You <strong>must</strong> write about both the studied extract and the unseen passage in an integrated way \u2014 weaving comparison throughout, not bolting it on at the end. For the studied text, deploy your knowledge of context and wider themes. For the unseen, apply close reading skills to find connections and contrasts. Level 6 requires "sustained, interwoven comparison" so aim for at least one reference to both texts in every paragraph.',
            },
            {
              question: 'Part (b): Whole-text essay on your studied modern prose or drama text.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3',
              skill: 'Develop a critical personal response drawing on the whole text',
              time: '25\u201328 minutes',
              advice:
                'This is a conventional whole-text essay but OCR expects a <strong>critical style</strong> at the top levels. Avoid narrative retelling. Structure around 3\u20134 key ideas, use precise quotations, and embed contextual understanding naturally (don\u2019t bolt on a \u201ccontext paragraph\u201d). Show awareness of how the writer shapes meaning through their choices of language, form and structure.',
            },
          ],
        },
        {
          title: 'Section B: 19th-Century Novel',
          marks: 40,
          questions: [
            {
              question:
                'Part (a): Extract from your studied 19th-century novel + an <strong>UNSEEN</strong> linked passage on the same theme. Write about <strong>both</strong> passages.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3',
              skill:
                'Compare studied 19th-century extract with unseen passage; analyse language and historical context',
              time: '25\u201328 minutes',
              advice:
                'Apply the same interwoven comparison approach as Section A Part (a). The 19th-century context is crucial here \u2014 connect the themes of both passages to the social, historical and literary context of the era (e.g. Victorian values, industrialisation, class, gender). The unseen passage may be from the same or a different period; use this to sharpen your comparison.',
            },
            {
              question: 'Part (b): Whole-text essay on your studied 19th-century novel.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3',
              skill: 'Sustained critical response across the entire 19th-century text',
              time: '25\u201328 minutes',
              advice:
                'Range is essential \u2014 draw examples from across the whole novel, not just the most well-known scenes. Embed contextual knowledge naturally: show how the writer reflects or challenges the attitudes of their time. Use precise literary terminology and maintain a confident, critical voice throughout.',
            },
          ],
        },
      ],
    },
    {
      title: 'Component 02: Exploring Poetry and Shakespeare',
      code: 'J352/02',
      time: '2 hours',
      marks: 80,
      weighting: '50%',
      textType: 'OCR poetry anthology (studied cluster) + unseen poems, and a Shakespeare play',
      sections: [
        {
          title: 'Section A: Poetry Anthology',
          marks: 40,
          questions: [
            {
              question:
                'Part (a): Compare a named anthology poem with a thematically linked <strong>UNSEEN</strong> poem.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3',
              skill: 'Compare studied poem with unseen poem; analyse poetic methods',
              time: '25\u201328 minutes',
              advice:
                'Read the unseen poem carefully at least twice before writing. Identify the shared theme and then explore how each poet treats it differently through their choices of language, imagery, form and structure. Use comparative connectives throughout (\u201cWhereas\u201d, \u201cConversely\u201d, \u201cBoth poets\u201d). Do <strong>not</strong> write about one poem and then the other \u2014 integrate your comparison paragraph by paragraph.',
            },
            {
              question:
                'Part (b): Write about a <strong>related poem</strong> from your studied anthology cluster.',
              marks: 20,
              ao: 'AO1 + AO2',
              skill: 'Analyse a single anthology poem in depth',
              time: '25\u201328 minutes',
              advice:
                'The question will direct you to a specific theme or idea. Choose the poem from your cluster that gives you the richest material for that theme. Analyse language, imagery, form and structure in detail. Show how the poet\u2019s choices create meaning and affect the reader. A strong personal response with alternative interpretations will push you toward Level 5\u20136.',
            },
          ],
        },
        {
          title: 'Section B: Shakespeare',
          marks: 40,
          questions: [
            {
              question:
                'Choice of <strong>extract-based</strong> question or <strong>whole-play</strong> essay on your studied Shakespeare text.',
              marks: 40,
              ao: 'AO1 + AO2 + AO3',
              skill:
                'Analyse Shakespeare through extract and/or whole-play knowledge; embed context',
              time: '50\u201355 minutes',
              advice:
                'You will have a choice between two routes: (1) an extract-based question that asks you to analyse a specific passage and then explore the wider play, or (2) a discursive whole-play essay. For the extract-based route, spend roughly half your time on close analysis of the extract and half on linking to the broader text. For the essay route, plan 4\u20135 paragraphs covering different moments across the play. In either case, embed contextual understanding of Elizabethan/Jacobean society, theatrical conventions, and Shakespeare\u2019s intentions. Use precise quotation and literary terminology throughout.',
            },
          ],
        },
      ],
    },
  ],

  // ─── 6-Level Marking Guide ─────────────────────────────────────────────────────
  markBands: [
    {
      level: 6,
      descriptor: 'Sustained critical',
      ao1: 'Consistently perceptive, coherent critical style with sustained personal response; judicious use of precise textual references',
      ao2: 'Detailed, sensitive analysis of writer\u2019s methods with sustained interwoven comparison; sophisticated use of subject terminology',
    },
    {
      level: 5,
      descriptor: 'Convincing; well-developed',
      ao1: 'Convincing critical style with well-developed, insightful personal response; integrated textual references',
      ao2: 'Thoughtful examination of writer\u2019s methods with convincing comparison; assured use of subject terminology',
    },
    {
      level: 4,
      descriptor: 'Credible; detailed',
      ao1: 'Detailed personal response with credible critical style; apt textual references',
      ao2: 'Detailed examination of writer\u2019s methods with credible comparison; clear, accurate use of subject terminology',
    },
    {
      level: 3,
      descriptor: 'Reasonable; developed',
      ao1: 'Developed response with a reasonable attempt at critical style; relevant textual references',
      ao2: 'Reasonable examination of writer\u2019s methods with developing comparison; generally sound use of subject terminology',
    },
    {
      level: 2,
      descriptor: 'Straightforward',
      ao1: 'Straightforward personal response; some relevant textual references; begins to develop a critical style',
      ao2: 'Begins to examine writer\u2019s methods with straightforward comparison; some use of subject terminology',
    },
    {
      level: 1,
      descriptor: 'Simple',
      ao1: 'Simple comments with occasional reference to the text; identifies basic features',
      ao2: 'Identifies basic features of writer\u2019s methods; simple or no comparison; limited subject terminology',
    },
  ],

  // ─── Grade Boundaries (indicative) ──────────────────────────────────────────
  gradeBoundaries: [
    {
      year: '2024',
      max: 160,
      grade9: 137,
      grade8: 126,
      grade7: 115,
      grade6: 100,
      grade5: 86,
      grade4: 72,
    },
    {
      year: '2023',
      max: 160,
      grade9: 135,
      grade8: 124,
      grade7: 113,
      grade6: 98,
      grade5: 84,
      grade4: 70,
    },
  ],

  // ─── Marker Tips ───────────────────────────────────────────────────────────
  examinerTips: [
    {
      question: 'Language Component 01: Section A Reading',
      tips: [
        'Q1 (4 marks) is retrieval: do not analyse or elaborate. Answer each part exactly as it asks, from the lines named, and move on quickly.',
        'Q2 (6 marks) requires synthesis from TWO texts. Use a linked structure throughout: present a point from one text, then immediately link it to the other.',
        'Q3 (12 marks) is language and structure analysis: always zoom into specific words and phrases, and say how the text is built as well. Name techniques but prioritise explaining the effect on the reader.',
        'Q4 (18 marks) is the highest-tariff reading question: 12 for evaluating a statement about both texts, 6 for comparing them. Take a clear position but show nuance. The best answers agree AND qualify, exploring how each writer\u2019s methods contribute to the overall effect.',
      ],
    },
    {
      question: 'Language Component 01: Section B Writing',
      tips: [
        'You write ONE piece, Question 5 or 6, from a choice of two tasks. It is worth 40 marks, half the paper: 24 for content and organisation (AO5) and 16 for technical accuracy (AO6). OCR advises about an hour on it.',
        'Match form, audience and purpose precisely. If asked for a letter, include addresses and sign-off; if a speech, use rhetorical devices and direct address.',
        'AO6 (accuracy) is worth 16 of the 40 marks. Keep the last 5 minutes to proofread.',
        'Plan a deliberate structure: a compelling opening, varied paragraph lengths, and a crafted conclusion that echoes or develops your opening idea.',
      ],
    },
    {
      question: 'Language Component 02: Evaluation and Comparison',
      tips: [
        'Q4 (18 marks) is the centrepiece of the reading section: a statement about both texts, with 12 marks for evaluating it and 6 for comparing the writers. Every paragraph should refer to both texts.',
        'Explore how each writer\u2019s choices, such as viewpoint, description and dialogue, shape your impression. Where one text is fiction and the other literary non-fiction, such as a memoir, say how that difference affects the way each presents its ideas.',
        'Use comparative discourse markers consistently: "Similarly," "In contrast," "Whereas," "Both writers," etc.',
        'Do not simply compare what the writers say: compare HOW they say it (narrative voice, imagery, dialogue), all the way through. The top level explores both in detail.',
      ],
    },
    {
      question: 'Literature Component 01: Linked-Unseen Format',
      tips: [
        'The Part (a) linked-unseen question is OCR\u2019s signature format. You MUST write about both the studied extract and the unseen passage.',
        'Treat the unseen passage as an equal partner, not an afterthought. Aim for roughly equal coverage of both texts.',
        'For the studied text, deploy your contextual knowledge and awareness of the wider work. For the unseen, rely on close reading and inference.',
        'The Part (b) whole-text essay requires range \u2014 draw on moments from across the entire text, not just the most famous scenes.',
      ],
    },
    {
      question: 'Literature Component 02: Poetry Comparison',
      tips: [
        'Read the unseen poem at least twice before starting to write. Annotate it quickly: identify themes, key images, tone, form and structure.',
        'Your comparison must be integrated, not sequential. Each paragraph should move between the two poems.',
        'For Part (b), choose the poem from your cluster that offers the richest material for the specified theme. Quality of analysis matters more than breadth.',
        'Remember that form and structure analysis (enjambment, caesura, stanza shape, rhyme scheme) is explicitly rewarded under AO2.',
      ],
    },
    {
      question: 'Literature Component 02: Shakespeare',
      tips: [
        'You have a genuine choice between extract-based and whole-play essay. Choose the route that plays to your strengths.',
        'For the extract route: analyse the passage in close detail first, then broaden to the whole play. Do not neglect either half.',
        'Context must be embedded naturally. Avoid bolted-on paragraphs about \u201cIn Elizabethan times...\u201d \u2014 instead, weave contextual understanding into your analysis of the text.',
        'Shakespeare\u2019s language is dense \u2014 select 3\u20134 short, precise quotations rather than copying out long passages. Analyse individual word choices.',
      ],
    },
    {
      question: 'OCR Marking Guide Annotation System',
      tips: [
        'OCR markers use a tick-based annotation: \u2713 (relevant point), \u2713+ (developed point), \u2713++ (analytical/perceptive point).',
        'To earn \u2713++ annotations, go beyond identification and explanation \u2014 explore alternative interpretations, connotations, and the effect on different readers.',
        'A response full of \u2713 ticks but no \u2713++ will cap at Level 3\u20134. The top levels require consistent analytical depth.',
        'Markers are trained to reward quality over quantity. Five well-developed \u2713++ points will outscore ten superficial \u2713 points.',
      ],
    },
  ],

  // ─── Key Changes ─────────────────────────────────────────────────────────────
  keyChanges: [
    {
      year: '2017',
      change:
        'Introduction of the linked-unseen format across both Literature components, replacing the previous extract-only model.',
    },
    {
      year: '2020',
      change:
        'COVID-19 adaptations: advance information provided on focus areas for each component. Poetry anthology reduced to studied cluster only.',
    },
    {
      year: '2022',
      change:
        'Full specification restored with no advance information. Grade boundaries adjusted to reflect the return to normal conditions.',
    },
  ],

  // ─── Unique Features ─────────────────────────────────────────────────────────
  uniqueFeatures: [
    '<strong>Linked-unseen format</strong> \u2014 unique to OCR. In Literature, every Part (a) question pairs a studied text extract with an unseen passage on the same theme, requiring integrated comparison.',
    '<strong>Cross-text comparison in both Language components</strong>: in each, Question 4 asks you to evaluate a statement about two unseen texts and compare them, non-fiction from two centuries in Component 01 and 20th or 21st-century literary prose in Component 02.',
    '<strong>One writing task in each Language component</strong>: Question 5 or 6, chosen from two, worth 40 marks, half the paper, with 24 for content and organisation and 16 for technical accuracy.',
    '<strong>Tick-based marking guide annotation</strong> \u2014 markers use \u2713 (relevant), \u2713+ (developed), and \u2713++ (analytical/perceptive) to annotate responses, providing clear differentiation.',
    '<strong>Level 6 requires "sustained, interwoven comparison"</strong> \u2014 comparison must run throughout every paragraph, not just appear in the introduction and conclusion.',
    '<strong>AO1 and AO2 are equally weighted as dominant objectives</strong> in Literature \u2014 both carry ~30%, meaning personal response and language analysis are equally important.',
    '<strong>Poetry anthology includes unseen comparison</strong> \u2014 Part (a) of the poetry section compares a studied anthology poem with a thematically linked unseen poem, testing genuine analytical skill rather than memorisation.',
    '<strong>Shakespeare offers a genuine choice</strong> \u2014 students can opt for either an extract-based question or a whole-play essay, allowing them to play to their strengths.',
  ],
}
