import type { BoardExamGuide } from './types';

export const ocrGuide: BoardExamGuide = {
  boardId: 'OCR',
  boardName: 'OCR',
  boardColor: '#EA580C',

  overview: `
    <p>OCR's GCSE English qualifications (J351 Language, J352 Literature) are built around a distinctive <strong>linked-unseen format</strong> that sets them apart from every other exam board. In both Language and Literature papers, students are consistently required to work across multiple texts simultaneously — comparing a studied or provided passage with an unseen extract that shares thematic or stylistic connections. This cross-text architecture means that comparison is not a bolt-on skill tested in isolation; it is woven into the fabric of almost every question students encounter.</p>

    <p>The Language qualification splits neatly into two components of equal weight. <strong>Component 01</strong> focuses on non-fiction and transactional reading and writing, demanding that students retrieve, synthesise, analyse and evaluate across two or three unseen texts before completing both a short-form and an extended writing task. <strong>Component 02</strong> pairs a literary prose extract with a linked non-fiction/media text, testing the ability to move fluidly between genres, before culminating in a creative or descriptive writing task. The dual writing tasks in Component 01 make time management a decisive factor — students must discipline themselves to allocate roughly 15 minutes to the short task and 30 minutes to the extended piece.</p>

    <p>OCR Literature is uniquely demanding because of its <strong>linked-unseen passage model</strong>. In both Component 01 and Component 02, the Part (a) question presents students with an extract from their studied text alongside an unseen passage on the same theme. They must write about <em>both</em> passages in a single, integrated response — a skill that requires confident subject knowledge and the ability to draw perceptive comparisons under timed conditions. Part (b) then pivots to a whole-text or whole-play essay, requiring breadth of knowledge across the entire work.</p>

    <p>Strategic success on OCR papers hinges on three priorities: <strong>sustained comparison</strong> (Level 6 explicitly requires "sustained, interwoven comparison" that runs through every paragraph, not just the introduction and conclusion), <strong>engagement with the unseen</strong> (treating the unseen passage as an equal partner rather than an afterthought), and <strong>disciplined time-splitting</strong> across the two writing tasks in Component 01. Students who master the linked-unseen format often find it liberating — it rewards genuine analytical thinking over rote-learned quotations, because half of the material is always fresh.</p>
  `,

  specCodes: [
    { subject: 'English Language', code: 'J351' },
    { subject: 'English Literature', code: 'J352' },
  ],

  // ─── Language Assessment Objectives ──────────────────────────────────────────
  languageAOs: [
    {
      code: 'AO1',
      description:
        'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
      weighting: '~25%',
    },
    {
      code: 'AO2',
      description:
        'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.',
      weighting: '~25%',
    },
    {
      code: 'AO3',
      description:
        'Compare writers\u2019 ideas and perspectives, as well as how these are conveyed, across two or more texts.',
      weighting: '~10%',
    },
    {
      code: 'AO4',
      description:
        'Evaluate texts critically and support this with appropriate textual references.',
      weighting: '~10%',
    },
    {
      code: 'AO5',
      description:
        'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.',
      weighting: '~20%',
    },
    {
      code: 'AO6',
      description:
        'Candidates must use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
      weighting: '~10%',
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
  languagePapers: [
    {
      title: 'Component 01: Communicating Information and Ideas',
      code: 'J351/01',
      time: '2 hours',
      marks: 80,
      weighting: '50%',
      textType:
        '2\u20133 unseen non-fiction and/or media texts (e.g. articles, speeches, letters, blogs, travel writing, autobiography)',
      sections: [
        {
          title: 'Section A: Reading',
          marks: 40,
          questions: [
            {
              question:
                'Q1 \u2014 Retrieval: Identify and list specific information from a single text.',
              marks: 4,
              ao: 'AO1',
              skill: 'Retrieve explicit information',
              time: '5\u20137 minutes',
              advice:
                'Short, precise answers drawn directly from the text. No analysis needed \u2014 aim for four clear, distinct points. Do not waste time writing in full sentences; bullet points are perfectly acceptable.',
            },
            {
              question:
                'Q2 \u2014 Synthesis: Use details from <strong>two</strong> texts to show understanding of a given focus.',
              marks: 8,
              ao: 'AO1',
              skill: 'Synthesise across two texts',
              time: '10\u201312 minutes',
              advice:
                'Identify similarities and differences between the two texts on the given focus. Use short embedded quotations from both sources and ensure you explicitly link points across texts (\u201cSimilarly, Source B...\u201d or \u201cIn contrast, Source A...\u201d).',
            },
            {
              question:
                'Q3 \u2014 Language Analysis: Analyse how the writer uses language to achieve effects in one text.',
              marks: 12,
              ao: 'AO2',
              skill: 'Analyse language techniques and their effects',
              time: '15\u201318 minutes',
              advice:
                'Select 3\u20134 short quotations and zoom in on specific word choices and techniques. Name the technique where possible, but prioritise explaining the <em>effect</em> on the reader. Use the formula: <strong>identify \u2192 technique \u2192 effect \u2192 connotation</strong>. Level 6 responses explore layers of meaning and alternative interpretations.',
            },
            {
              question:
                'Q4 \u2014 Evaluation: Critically evaluate a statement about a text, selecting evidence to support your view.',
              marks: 16,
              ao: 'AO4',
              skill: 'Evaluate critically with textual support',
              time: '18\u201320 minutes',
              advice:
                'This is the highest-tariff reading question. Take a clear position on the statement but demonstrate nuance \u2014 the best responses agree <em>and</em> qualify. Each paragraph should follow: <strong>point \u2192 evidence \u2192 analysis \u2192 link to statement</strong>. Examiners reward responses that engage with the writer\u2019s methods, not just content.',
            },
          ],
        },
        {
          title: 'Section B: Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q5 \u2014 Short-form writing task: Write for a specific audience, purpose and form (e.g. letter, article, speech).',
              marks: 15,
              ao: 'AO5 + AO6',
              skill:
                'Write clearly and effectively in a given form; accurate SPaG',
              time: '15\u201318 minutes',
              advice:
                'Keep this controlled and efficient \u2014 do <strong>not</strong> overspend time here. Plan for 3\u20134 focused paragraphs. Match your tone and register precisely to the audience and form. Accuracy in spelling, punctuation and grammar carries significant weight within the 15 marks.',
            },
            {
              question:
                'Q6 \u2014 Extended writing task: Write at length for a specified audience, purpose and form.',
              marks: 25,
              ao: 'AO5 + AO6',
              skill:
                'Communicate imaginatively and persuasively; organise ideas coherently',
              time: '28\u201330 minutes',
              advice:
                'This is your showcase piece. Spend 3\u20134 minutes planning a clear structure with varied paragraph lengths and deliberate structural choices (e.g. circular structure, shift in tone). Use ambitious vocabulary naturally \u2014 avoid thesaurus-stuffing. Vary sentence structures for effect: short sentences for impact, complex sentences for elaboration. Proofread in the final 2 minutes.',
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
        'One literary prose extract (e.g. fiction, literary non-fiction) paired with one linked non-fiction/media text',
      sections: [
        {
          title: 'Section A: Reading',
          marks: 40,
          questions: [
            {
              question:
                'Q1 \u2014 Comprehension and inference from the literary prose extract.',
              marks: 8,
              ao: 'AO1',
              skill: 'Identify and interpret explicit and implicit ideas',
              time: '10 minutes',
              advice:
                'Focus on both surface meaning and deeper implications. Use short quotations to support each point. Distinguish between what the writer <em>states</em> and what they <em>imply</em>.',
            },
            {
              question:
                'Q2 \u2014 Language and structure analysis of the literary prose extract.',
              marks: 12,
              ao: 'AO2',
              skill:
                'Analyse how language and structure create meanings and effects',
              time: '15\u201318 minutes',
              advice:
                'Address both language <em>and</em> structure \u2014 many students neglect structure entirely. Consider narrative perspective, sentence length variation, paragraph structure, and shifts in focus or tone alongside word-level analysis.',
            },
            {
              question:
                'Q3 \u2014 Cross-text comparison: Compare the writers\u2019 perspectives and methods across the literary prose and linked non-fiction text.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3',
              skill:
                'Compare ideas, perspectives, language and methods across two different genres',
              time: '25\u201328 minutes',
              advice:
                'This is the defining question of OCR Component 02. You must move fluidly between the two texts throughout your response \u2014 do <strong>not</strong> write about one text and then the other. Every paragraph should reference both. Compare not just <em>what</em> the writers say but <em>how</em> they say it \u2014 genre differences (fiction vs. non-fiction) are highly relevant. Level 6 demands "sustained, interwoven comparison."',
            },
          ],
        },
        {
          title: 'Section B: Writing',
          marks: 40,
          questions: [
            {
              question:
                'Q4 \u2014 Creative/descriptive writing: Write a piece of creative or descriptive prose, with a choice of task.',
              marks: 40,
              ao: 'AO5 + AO6',
              skill:
                'Write imaginatively and descriptively with crafted language and structure',
              time: '45 minutes',
              advice:
                'You typically have a choice between two prompts. Pick the one that sparks a genuine idea \u2014 not the one that seems easiest. Plan a clear structural arc (beginning, development, climax/shift, resolution). Use sensory detail, varied sentence structures, and figurative language purposefully. Aim for quality over quantity: a tightly crafted 2\u20133 page piece will outscore a rambling 5-page narrative. Leave 3\u20134 minutes for proofreading.',
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
              skill:
                'Compare studied extract with unseen passage; analyse language and context',
              time: '25\u201328 minutes',
              advice:
                'This is OCR\u2019s signature question format. You <strong>must</strong> write about both the studied extract and the unseen passage in an integrated way \u2014 weaving comparison throughout, not bolting it on at the end. For the studied text, deploy your knowledge of context and wider themes. For the unseen, apply close reading skills to find connections and contrasts. Level 6 requires "sustained, interwoven comparison" so aim for at least one reference to both texts in every paragraph.',
            },
            {
              question:
                'Part (b): Whole-text essay on your studied modern prose or drama text.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3',
              skill:
                'Develop a critical personal response drawing on the whole text',
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
              question:
                'Part (b): Whole-text essay on your studied 19th-century novel.',
              marks: 20,
              ao: 'AO1 + AO2 + AO3',
              skill:
                'Sustained critical response across the entire 19th-century text',
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
      textType:
        'OCR poetry anthology (studied cluster) + unseen poems, and a Shakespeare play',
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
              skill:
                'Compare studied poem with unseen poem; analyse poetic methods',
              time: '25\u201328 minutes',
              advice:
                'Read the unseen poem carefully at least twice before writing. Identify the shared theme and then explore how each poet treats it differently through their choices of language, imagery, form and structure. Use comparative connectives throughout (\u201cWhereas\u201d, \u201cConversely\u201d, \u201cBoth poets\u201d). Do <strong>not</strong> write about one poem and then the other \u2014 integrate your comparison paragraph by paragraph.',
            },
            {
              question:
                'Part (b): Write about a <strong>related poem</strong> from your studied anthology cluster.',
              marks: 20,
              ao: 'AO1 + AO2',
              skill:
                'Analyse a single anthology poem in depth',
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

  // ─── 6-Level Mark Scheme ─────────────────────────────────────────────────────
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

  // ─── Examiner Tips ───────────────────────────────────────────────────────────
  examinerTips: [
    {
      question: 'Language Component 01: Section A Reading',
      tips: [
        'Q1 (4 marks) is pure retrieval \u2014 do not analyse or elaborate. List four clear, distinct points and move on quickly.',
        'Q2 requires synthesis from TWO texts. Use a comparative structure throughout: present a point from one text then immediately link it to the other.',
        'Q3 is language analysis \u2014 always zoom into specific words and phrases. Name techniques but prioritise explaining the effect on the reader.',
        'Q4 is the highest-tariff reading question. Take a clear position on the evaluative statement but show nuance. The best answers agree AND qualify, exploring how the writer\u2019s methods contribute to the overall effect.',
      ],
    },
    {
      question: 'Language Component 01: Section B Writing',
      tips: [
        'You have TWO writing tasks: a short-form (~15 marks) and an extended task (~25 marks). Allocate time proportionally \u2014 roughly 15\u201318 minutes for the short task, 28\u201330 for the extended.',
        'Match form, audience and purpose precisely. If asked for a letter, include addresses and sign-off; if a speech, use rhetorical devices and direct address.',
        'AO6 (accuracy) is assessed across both tasks. Proofread each piece before moving on.',
        'For the extended task, plan a deliberate structure: a compelling opening, varied paragraph lengths, and a crafted conclusion that echoes or develops your opening idea.',
      ],
    },
    {
      question: 'Language Component 02: Cross-Text Comparison',
      tips: [
        'The Q3 cross-text comparison (20 marks) is the centrepiece of this paper. It requires sustained, interwoven comparison \u2014 every paragraph must reference both texts.',
        'Explore how genre differences (literary prose vs. non-fiction) affect the way each writer presents their ideas. This is highly rewarded.',
        'Use comparative discourse markers consistently: "Similarly," "In contrast," "Whereas," "Both writers," etc.',
        'Do not simply compare what the writers say \u2014 compare HOW they say it. Method-level comparison (narrative voice, imagery, rhetoric) is what separates Level 4 from Level 6.',
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
      question: 'OCR Mark Scheme Annotation System',
      tips: [
        'OCR examiners use a tick-based annotation: \u2713 (relevant point), \u2713+ (developed point), \u2713++ (analytical/perceptive point).',
        'To earn \u2713++ annotations, go beyond identification and explanation \u2014 explore alternative interpretations, connotations, and the effect on different readers.',
        'A response full of \u2713 ticks but no \u2713++ will cap at Level 3\u20134. The top levels require consistent analytical depth.',
        'Examiners are trained to reward quality over quantity. Five well-developed \u2713++ points will outscore ten superficial \u2713 points.',
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
    '<strong>Cross-text comparison in both Language components</strong> \u2014 Component 02 demands simultaneous analysis of a literary prose extract and a linked non-fiction/media text, moving fluidly between genres.',
    '<strong>Two writing tasks in Language Component 01</strong> \u2014 a short-form task (~15 marks) and an extended task (~25 marks), making time management absolutely critical.',
    '<strong>Tick-based mark scheme annotation</strong> \u2014 examiners use \u2713 (relevant), \u2713+ (developed), and \u2713++ (analytical/perceptive) to annotate responses, providing clear differentiation.',
    '<strong>Level 6 requires "sustained, interwoven comparison"</strong> \u2014 comparison must run throughout every paragraph, not just appear in the introduction and conclusion.',
    '<strong>AO1 and AO2 are equally weighted as dominant objectives</strong> in Literature \u2014 both carry ~30%, meaning personal response and language analysis are equally important.',
    '<strong>Poetry anthology includes unseen comparison</strong> \u2014 Part (a) of the poetry section compares a studied anthology poem with a thematically linked unseen poem, testing genuine analytical skill rather than memorisation.',
    '<strong>Shakespeare offers a genuine choice</strong> \u2014 students can opt for either an extract-based question or a whole-play essay, allowing them to play to their strengths.',
  ],
};
