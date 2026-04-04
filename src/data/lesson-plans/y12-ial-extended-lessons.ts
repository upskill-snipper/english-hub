import type { LessonPlan } from '@/types';

export const y12IalExtendedLessons: LessonPlan[] = [
  // ── Lesson 1: Applying All Six Linguistic Frameworks to One Data Set ─────────
  {
    id: 'y12ext-01',
    title: 'The Full Framework Toolkit: Applying All Six Frameworks to One Data Set',
    text: 'Edexcel IAL English Language Unseen Data',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Apply all six linguistic frameworks (lexis, grammar, phonology, graphology, pragmatics, discourse) systematically to a single unseen data set',
      'Understand which features each framework reveals and why each perspective adds analytical value',
      'Produce a structured multi-framework commentary that avoids repetition and builds a coherent argument',
      'Evaluate the relative importance of different frameworks for a given text type',
    ],
    successCriteria: [
      'I can identify at least three significant features under each of the six frameworks in the given data',
      'I can explain how features from different frameworks interact to create meaning',
      'I can write a commentary that moves fluently between frameworks without simply listing features',
      'I can justify why some frameworks are more analytically productive than others for this particular text',
    ],
    keywords: [
      'lexis',
      'grammar',
      'phonology',
      'graphology',
      'pragmatics',
      'discourse',
      'framework',
      'data set',
      'multimodal',
      'register',
      'cohesion',
      'speech act',
    ],
    starterActivity: {
      title: 'Framework Auction',
      duration: '10 minutes',
      instructions:
        'Display a short unseen text (approximately 150 words — a social media post with image caption works well). Give each student a notional budget of 100 points. They must "bid" to allocate points across the six frameworks before analysis, predicting which will yield the most insight. Students record allocations and justify their top choice in one sentence. Take class poll and display results. Revisit predictions at the end of the lesson to see whether initial instincts were supported by analysis.',
      differentiation: {
        support:
          'Provide a brief definition card for each of the six frameworks with one example feature listed under each heading.',
        core: 'Students make allocation decisions and justify the top two frameworks in full sentences.',
        stretch:
          'Students must also argue which framework they expect to yield the least — and why that absence is itself analytically significant.',
      },
      resources: [
        'Projected unseen text (social media post with image caption)',
        'Framework allocation grid handout',
        'Definition card for each framework (support scaffold)',
      ],
    },
    mainActivities: [
      {
        title: 'Systematic Framework Walk-Through',
        duration: '35 minutes',
        instructions:
          'Working from a shared A4 data set pack (one text, ideally a printed advertisement, political speech extract, or charity leaflet), students annotate the text in six colour-coded passes — one per framework. Assign a dedicated colour to each framework before beginning. After each pass, students write a two-sentence "framework verdict": what this lens revealed and what it could not explain. Teacher circulates and prompts: "What does the grammatical choice do that the lexical choice alone could not tell you?" After individual annotation, pairs compare highlights and negotiate a combined top-three analytical finding per framework.',
        differentiation: {
          support:
            'Provide a partially annotated version with five features already highlighted per framework. Students add a minimum of two more per framework and write the verdicts.',
          core: 'Students complete all six annotation passes and six verdicts independently before the paired comparison.',
          stretch:
            'Students write a single paragraph per framework that embeds quotation, names the feature, and explains the cumulative effect across frameworks rather than treating each one in isolation.',
        },
        resources: [
          'Printed A4 data set pack (one text per student)',
          'Six-colour highlighter set or annotation pens',
          'Framework annotation grid',
        ],
      },
      {
        title: 'Constructing a Multi-Framework Argument',
        duration: '30 minutes',
        instructions:
          'Students draft a 350–400 word analytical response to the prompt: "Analyse how language is used in this text to achieve its purpose." The key constraint is that they must weave at least four frameworks into a continuous argument — not a list. Model a paragraph on the board showing how a single clause can generate observations across lexis, grammar, and pragmatics simultaneously. Students write independently. In the final five minutes, each student underlines the sentence in their response they feel most confidently integrates two or more frameworks.',
        differentiation: {
          support:
            'Provide a paragraph frame: "The writer uses [feature] at the level of [framework], which creates [effect]. This is reinforced at the level of [second framework] by [feature], suggesting..."',
          core: 'Students produce the full 350–400 word response without scaffolding.',
          stretch:
            'Students write a reflective sentence after each paragraph explicitly naming the frameworks used and evaluating whether the order of analytical moves is logical.',
        },
        resources: [
          'Printed data set (same as annotation activity)',
          'Paragraph frame handout (support)',
          'Timer displayed on board',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Framework Verdict Revisit and Ranking',
      duration: '15 minutes',
      instructions:
        'Return to the Framework Auction allocations from the starter. Students revise their point allocation in light of the analysis and write a 50-word justification for their final ranking. Two or three students share responses aloud. Teacher facilitates a brief class discussion: "Did the text type determine which frameworks were most productive, or did the writer\'s choices?" Students record the key principle in their revision notes: framework selection should be driven by the data, not by habit.',
      differentiation: {
        support:
          'Provide three sentence starters for the justification: "The most productive framework was... because...", "I was surprised that... because...", "In future I would prioritise...".',
        core: 'Students write the full 50-word justification independently.',
        stretch:
          'Students write a second paragraph hypothesising how their ranking would shift if the text type were changed (e.g. from advertisement to spontaneous speech transcript).',
      },
    },
    homework:
      'Select any printed text you encounter this week (e.g. a packaging label, a news headline, a text message). Annotate it using all six frameworks and write a 200-word analysis that prioritises the two most productive frameworks for that text type. Bring your annotated text and written analysis to the next lesson.',
    worksheetQuestions: [
      {
        question:
          'Choose one sentence from the data set. Identify a feature under each of the six linguistic frameworks present in or implied by that sentence, and explain what each feature contributes to meaning.',
        lines: 20,
        modelAnswer:
          'A strong response will select a sentence that is linguistically rich and will name precise features under each framework (e.g. lexis: Latinate diction creating formality; grammar: passive construction positioning agency; phonology: alliteration foregrounding a key term; graphology: capitalisation signalling institutional authority; pragmatics: implied threat or promise as speech act; discourse: positioning within the overall text structure). The explanation of contribution to meaning should go beyond identification, linking each feature to purpose and audience effect.',
        marks: 12,
      },
      {
        question:
          'Evaluate the claim that "phonology and graphology are the least useful frameworks for analysing written non-literary texts." Use evidence from your analysis today to support or challenge this view.',
        lines: 16,
        modelAnswer:
          'A nuanced response will acknowledge that phonological features in written texts depend on the reader\'s internalised sound patterns (rhythm, metre, alliteration, rhyme), and that graphology (layout, typography, colour, spatial arrangement) is often highly significant in multimodal texts such as advertisements and leaflets. The claim underestimates both frameworks for many text types. A strong answer provides specific textual evidence from the lesson\'s data set and considers whether the claim might have more validity for a different genre.',
        marks: 12,
      },
      {
        question:
          'How does simultaneous analysis across multiple frameworks allow you to identify meaning that single-framework analysis would miss? Illustrate your answer with a specific example from today\'s data set.',
        lines: 18,
        modelAnswer:
          'A strong response will demonstrate that meaning is constructed through the interaction of choices at multiple levels simultaneously — e.g. a passive grammatical construction combined with formal Latinate lexis and a declarative speech act creates an impression of institutional authority that none of these features alone fully explains. The best answers will use the term "convergence" or "reinforcement" to describe how multiple frameworks pointing in the same direction create a stronger analytical claim.',
        marks: 12,
      },
      {
        question:
          'Write an analytical paragraph of approximately 150 words on the data set used in this lesson. Your paragraph must integrate at least four frameworks and must not list features separately — every framework observation must be embedded within a continuous analytical argument.',
        lines: 22,
        modelAnswer:
          'A successful paragraph will open with a claim about the text\'s overall purpose or effect, then embed observations from at least four frameworks as supporting evidence within that argument. Each embedded observation names the feature precisely, quotes or references the data, and immediately explains the effect. The paragraph ends by connecting back to the opening claim. Common weaknesses to avoid: treating frameworks as separate bullet points, naming a feature without explaining its effect, or explaining effect without grounding it in a specific textual feature.',
        marks: 16,
      },
    ],
    teacherNotes: [
      'Select a data set that is genuinely rich across all six frameworks — advertisements, charity appeals, or political speeches typically work well. Avoid texts that are almost entirely prosodic (e.g. song lyrics) unless the class is confident with phonological analysis.',
      'The Framework Auction starter works best if you keep it brisk and slightly competitive. Do not resolve the "correct" answer at this stage — save that for the plenary.',
      'When modelling the multi-framework paragraph, resist the temptation to write a perfect response. Deliberately include a "list-y" draft first, then revise it live to show students how integration is achieved through redrafting.',
      'Stretch students by pushing them to discuss what a framework\'s apparent absence from a text might itself mean — e.g. absence of phonological patterning in a legal document is a meaningful choice.',
      'This lesson functions well as the first in the extended series because it establishes the methodological principle that underpins all subsequent exam preparation.',
    ],
    targetedSkills: [
      'AO1: Apply linguistic methods and terminology systematically and precisely',
      'AO2: Demonstrate knowledge of linguistic concepts across all six frameworks',
      'AO3: Analyse language in use, considering the interaction of multiple levels',
      'Multi-framework analytical writing',
      'Metalinguistic reflection and framework selection',
    ],
  },

  // ── Lesson 2: Integrating Theory — Which Theorist to Use When ───────────────
  {
    id: 'y12ext-02',
    title: 'Theorist Toolkit: Integrating Linguistic Theory into Analysis',
    text: 'Edexcel IAL English Language Theoretical Frameworks',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Map key linguistic theorists to the data types and analytical questions they are most relevant to',
      'Embed theoretical reference seamlessly into data-based analysis rather than as standalone description',
      'Evaluate the extent to which a given theory illuminates or limits analysis of a specific data set',
      'Distinguish between applying a theory to support an argument and simply recounting a theory',
    ],
    successCriteria: [
      'I can identify at least six theorists relevant to Edexcel IAL units and explain the core claim of each',
      'I can select the most appropriate theorist for a given data set and justify that choice',
      'I can write analysis that uses theoretical reference as evidence within an argument, not as a separate section',
      'I can critically evaluate a theory\'s application, including acknowledging where it does not fully explain the data',
    ],
    keywords: [
      'theory',
      'theorist',
      'Grice',
      'Goffman',
      'Labov',
      'Brown and Levinson',
      'Halliday',
      'cooperative principle',
      'face theory',
      'implicature',
      'relevance theory',
      'application',
    ],
    starterActivity: {
      title: 'Theorist Speed Matching',
      duration: '12 minutes',
      instructions:
        'Provide students with a set of 20 cards: 10 bearing theorist names and core claims, 10 bearing data extract descriptions or example features. In pairs, students match theorist to data type in under four minutes. Pairs then compare with the adjacent pair and resolve any disagreements by reference to their notes. Teacher reveals an answer key and briefly discusses the two or three most commonly mismatched pairings, explaining the diagnostic value of those errors. Students add any gaps to their revision notes before the main activity.',
      differentiation: {
        support:
          'Reduce the card set to twelve (six pairs) focusing on the highest-frequency theorists: Grice, Goffman, Labov, Brown and Levinson, Halliday, and Fairclough.',
        core: 'Full twenty-card matching task as described.',
        stretch:
          'After matching, students write one sentence for each pair explaining why an alternative theorist could also apply and what that alternative would add or lose.',
      },
      resources: [
        'Theorist matching card sets (one per pair, pre-cut)',
        'Answer key slide (held back until after the task)',
        'Student revision notes or theory summary booklet',
      ],
    },
    mainActivities: [
      {
        title: 'Theory Selection and Justification Workshop',
        duration: '30 minutes',
        instructions:
          'Provide three short data extracts representing different genres: (1) a spontaneous conversation transcript, (2) a formal institutional letter, (3) a Twitter/X thread. For each extract, students must: (a) identify which two theorists are most relevant, (b) write one sentence explaining why each is relevant, and (c) write one sentence explaining which theorist is more productive for this specific extract and why. Students work individually, then discuss in groups of three to reach a consensus ranking for each extract. Groups feedback their rankings with reasons. Teacher challenges groups to justify rankings under questioning.',
        differentiation: {
          support:
            'Provide a "theory shortlist" for each extract identifying three possible theorists and asking students to choose the top two from the shortlist rather than generating options independently.',
          core: 'Students generate their theorist selections independently for all three extracts.',
          stretch:
            'Students consider whether combining two theories (e.g. Grice\'s cooperative principle + Goffman\'s face theory) produces a richer explanation than either alone, and write a 100-word justification.',
        },
        resources: [
          'Three data extract handouts',
          'Theory shortlist scaffold (support)',
          'Theorist reference sheet',
        ],
      },
      {
        title: 'Embedded Theory Paragraph Practice',
        duration: '28 minutes',
        instructions:
          'Using one of the three extracts from the workshop, students write two analytical paragraphs — each structured to embed one theoretical reference. Crucially, the theory must appear as part of the analytical argument, not in a separate "context" paragraph. Model the contrast on the board: a "bolt-on" version ("Grice identified the cooperative principle, which states that...") versus an embedded version ("The speaker\'s repeated flouting of the maxim of quantity — providing far more information than the context requires — signals, as Grice\'s cooperative principle predicts, an implicature of anxiety rather than helpfulness"). Students write their two paragraphs in 20 minutes, then spend five minutes peer-reviewing a partner\'s work against the embedding criterion.',
        differentiation: {
          support:
            'Provide a paragraph template: "[Data feature/quote] suggests [effect]. This relates to [theorist]\'s concept of [concept], which holds that [brief claim]. In this extract, [application to data], indicating [effect on meaning/audience]."',
          core: 'Students write without the template, using their own analytical structure.',
          stretch:
            'Students write a third paragraph that explicitly critiques the theory\'s application to this data set — naming something the theory cannot explain and suggesting why.',
        },
        resources: [
          'Selected data extract (from previous activity)',
          'Paragraph template (support)',
          'Peer review checklist focusing on embedding criterion',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Theory Misuse Gallery Walk',
      duration: '10 minutes',
      instructions:
        'Display four short anonymous "theory paragraphs" around the room (prepared in advance by the teacher), ranging from: (A) theory bolt-on with no data, (B) data with no theory, (C) theory mentioned but not applied, (D) fully embedded and critically applied. Students move around the room reading each and annotating with a sticky note: one strength and one improvement. Whole-class debrief: what distinguishes a band 4/5 theoretical application from a band 2/3? Students record the distinction in their own words in their revision notes.',
      differentiation: {
        support:
          'Provide a "what to look for" checklist: (1) Is the theory named? (2) Is the core claim stated briefly? (3) Is it applied to specific data? (4) Is the effect on meaning explained?',
        core: 'Students annotate independently and contribute to the debrief.',
        stretch:
          'Students rank all four examples on a band 1–5 scale and write a one-sentence examiner justification for their top and bottom rankings.',
      },
    },
    homework:
      'Choose one of the following theorists not covered in depth today: Saussure (sign, signifier, signified), Bernstein (elaborated and restricted codes), or Tannen (rapport and report talk). Research their core claims and find or create a short data extract (real or constructed) that their theory illuminates well. Write a 250-word analytical paragraph embedding the theory. Bring your paragraph to the next lesson for peer review.',
    worksheetQuestions: [
      {
        question:
          'Explain the distinction between "applying a theory" and "recounting a theory" in the context of A-Level linguistic analysis. Illustrate your answer with a brief example of each.',
        lines: 18,
        modelAnswer:
          'Recounting a theory means summarising what a theorist said without connecting it to the specific data under analysis — e.g. writing a paragraph about Grice\'s maxims in the abstract. Applying a theory means using the theoretical concept as a lens to explain a specific feature in the data — e.g. showing how a particular utterance flouts the maxim of manner to produce an implicature of irony. The key distinction is that application is always grounded in specific textual evidence and always produces an explanation of meaning or effect.',
        marks: 8,
      },
      {
        question:
          'For each of the following data types, name the most appropriate theorist and justify your choice in two sentences: (a) a transcript of a doctor–patient consultation, (b) a child\'s early language acquisition recording, (c) a newspaper editorial, (d) a casual conversation between friends.',
        lines: 20,
        modelAnswer:
          '(a) Brown and Levinson\'s face theory — medical contexts involve high-stakes face-threatening acts (diagnoses, instructions) and both participants manage positive and negative face. Alternatively Goffman for the presentation of self in the professional role. (b) Any of the major language acquisition theorists: Chomsky (innate LAD), Skinner (behaviourism), Vygotsky (ZPD and social interaction), or Halliday (functions of early language). Choice depends on which features of the recording are most salient. (c) Fairclough or van Dijk for critical discourse analysis — editorials embed ideological positioning and power through lexical and grammatical choices. (d) Grice (cooperative principle and implicature), Goffman (face and performance of self), or Tannen (rapport-building in casual conversation).',
        marks: 12,
      },
      {
        question:
          'Goffman argues that all social interaction involves "performance" and "face-work." To what extent does this theory help explain language use in formal written texts as well as spoken interaction? Use a specific textual example to develop your argument.',
        lines: 22,
        modelAnswer:
          'A sophisticated response will argue that face theory was developed primarily for spoken interaction (and Goffman himself focused on face-to-face interaction) but has been productively extended to written texts. In formal letters, for example, elaborate hedging constructions and modal verbs can be read as negative face-maintenance strategies that protect the writer\'s authority while minimising imposition on the reader. However, the theory is less illuminating for texts without a clearly addressable recipient or where power asymmetry makes face-maintenance by the dominant party unnecessary. The best answers will conclude by specifying the conditions under which the theory is and is not productive.',
        marks: 16,
      },
      {
        question:
          'Write an analytical paragraph of approximately 200 words on a data extract of your choice (or one provided by your teacher). The paragraph must embed at least one theoretical reference and must include a critical sentence evaluating the extent to which the theory fully explains the data.',
        lines: 26,
        modelAnswer:
          'A high-band paragraph will: open with an analytical claim about the data; embed a specific quotation or feature; use a theoretical concept to explain that feature, naming the theorist parenthetically or in passing rather than in a separate sentence; explain the effect on meaning or audience; and conclude with a critical sentence that either acknowledges a limitation of the theory or considers an alternative theoretical lens. The critical sentence is the key differentiator between band 3 and band 4/5 responses.',
        marks: 20,
      },
    ],
    teacherNotes: [
      'The card-matching starter is deliberately fast-paced to activate prior knowledge rather than teach new content. If students have significant gaps, this is a diagnostic signal that a dedicated theory revision lesson is needed before this one.',
      'The "theory misuse gallery walk" examples should be prepared in advance. It is worth creating these yourself rather than using student work to avoid any risk of embarrassment.',
      'The embedded paragraph model on the board is the most valuable teacher input of this lesson. Spend time on this and invite students to annotate the model with evaluative comments.',
      'Students often confuse "evaluating a theory" with "dismissing a theory." Emphasise that critique means specifying conditions of validity, not concluding that the theory is wrong.',
      'For the Edexcel IAL specification, the highest-frequency theorists are: Grice, Goffman, Brown and Levinson, Halliday (systemic functional linguistics and language functions), Labov (narrative structure and vernacular), and Fairclough (critical discourse analysis). Ensure these are prioritised.',
    ],
    targetedSkills: [
      'AO1: Use linguistic terminology precisely, including theoretical concepts',
      'AO2: Demonstrate knowledge of linguistic theories and their relevance to different data types',
      'AO3: Evaluate theories critically in relation to specific data',
      'Analytical writing: embedding theoretical reference within continuous argument',
      'Critical evaluation of theoretical scope and limitation',
    ],
  },

  // ── Lesson 3: Timed Essay Under Exam Conditions ──────────────────────────────
  {
    id: 'y12ext-03',
    title: 'Writing Under Pressure: Timed Essay Practice in Exam Conditions',
    text: 'Edexcel IAL English Language Exam Preparation',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Experience authentic exam conditions in order to develop stamina, time management, and pacing strategies',
      'Apply planning strategies (annotating data, drafting a thesis, sequencing analytical moves) under time pressure',
      'Identify personal strengths and weaknesses in timed written performance through structured self-review',
      'Develop a personalised time-management strategy for the actual examination',
    ],
    successCriteria: [
      'I can produce a complete response (introduction, at least three developed analytical paragraphs, conclusion) within the allocated time',
      'I can annotate data and draft a brief plan before beginning continuous writing',
      'I can identify at least two aspects of my timed response that meet the mark-scheme criteria at band 3 or above',
      'I can identify at least one aspect of my planning or writing process that I will change for future timed practice',
    ],
    keywords: [
      'timed essay',
      'exam conditions',
      'time management',
      'planning',
      'annotation',
      'thesis',
      'analytical paragraph',
      'pacing',
      'self-review',
      'band descriptor',
      'AO1',
      'AO2',
    ],
    starterActivity: {
      title: 'Exam Conditions Briefing and Mental Preparation',
      duration: '10 minutes',
      instructions:
        'Before distributing materials, deliver a structured five-minute briefing on exam strategy. Cover: (1) reading time — spend two minutes reading the question before touching the data; (2) data annotation — spend five to seven minutes annotating before planning; (3) planning — one minute maximum for a written plan after annotation; (4) writing — continuous prose for the remainder; (5) final two minutes — read and correct. Display a time-management grid on the board showing recommended minute allocations. Students copy the grid into their notes. Then five minutes of "settling" — no phones, no talking — before materials are distributed.',
      differentiation: {
        support:
          'Provide a pre-printed time-management grid and a "question decoding" prompt: (1) What is the question asking me to analyse? (2) What text type is the data? (3) What frameworks and theories are likely relevant?',
        core: 'Students copy the grid and apply the briefing independently.',
        stretch:
          'Stretch students have an additional constraint: they must use at least one theoretical reference and one critical evaluation sentence in their response.',
      },
      resources: [
        'Time-management grid slide',
        'Pre-printed time-management grid (support)',
        'Sealed question paper envelopes (distributed at the start of writing)',
        'Exam-condition seating arranged before students arrive',
      ],
    },
    mainActivities: [
      {
        title: 'Timed Essay: Silent Exam Conditions',
        duration: '60 minutes',
        instructions:
          'Distribute question papers. Students work in complete silence under full exam conditions. Teacher circulates silently, monitoring progress without intervention except for necessary accessibility support. Display a countdown timer on the board with visible markers at 50 minutes remaining (begin writing), 20 minutes remaining (must be in third paragraph), and 5 minutes remaining (begin conclusion and check). Do not allow students to stop early — if they finish ahead of time, direct them to expand the weakest paragraph of their response. Collect all papers at the end of 60 minutes.',
        differentiation: {
          support:
            'Students with access arrangements (extra time, rest breaks, use of word processor) follow their agreed arrangement. Provide a paragraph checklist on a separate card: (1) claim, (2) evidence/quotation, (3) feature named, (4) effect explained, (5) framework or theory linked.',
          core: 'Full silent timed conditions as described.',
          stretch:
            'Stretch students write a brief (three-sentence) meta-commentary at the end of their response noting one analytical decision they made under time pressure and how they would refine it with more time.',
        },
        resources: [
          'Printed question papers (one per student)',
          'Countdown timer displayed on board',
          'Paragraph checklist card (support)',
          'Lined answer booklets or A4 paper',
        ],
      },
      {
        title: 'Immediate Self-Review',
        duration: '10 minutes',
        instructions:
          'Return scripts to students. Using a coloured pen (a different colour from their writing), students spend ten minutes annotating their own response against five criteria: (1) Is the introduction analytical (not descriptive)? (2) Does each main paragraph begin with a claim? (3) Is evidence embedded, not just quoted? (4) Are features named precisely? (5) Is there a theoretical reference? Students place a tick, cross, or question mark against each paragraph for each criterion. They then circle the single paragraph they are most proud of and underline the single sentence in the whole response that they most want to improve.',
        differentiation: {
          support:
            'Provide the five-criterion checklist as a pre-printed annotation guide.',
          core: 'Students apply the five criteria from memory after the teacher reads them aloud.',
          stretch:
            'Students write a sixth criterion of their own based on the mark scheme, and apply it alongside the five provided.',
        },
        resources: [
          'Returned scripts',
          'Coloured annotation pens',
          'Five-criterion annotation guide (support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Pacing Debrief and Strategy Setting',
      duration: '10 minutes',
      instructions:
        'Whole-class hands-up survey: "Who completed a full response?" "Who was still writing when time was called?" "Who finished early?" Use responses to open a brief discussion on pacing. Three students share one strategy they will change for next time. Teacher records key strategies on the board. Each student writes a private "exam conditions commitment card" — three changes to their process for the next timed practice. Cards are collected and returned at the start of Lesson 4 (peer review) as a self-assessment anchor.',
        differentiation: {
        support:
          'Prompt students with specific process questions: "Did you spend too long annotating? Too long on the introduction? Did you run out of things to say in paragraph two?"',
        core: 'Students generate their three changes independently.',
        stretch:
          'Students write a fourth change that relates to the quality of analytical argument rather than time management — e.g. "I will ensure every paragraph ends by connecting back to the question."',
      },
    },
    homework:
      'Review the mark scheme for this unit (Edexcel IAL Unit 1 or Unit 2 as appropriate). Identify three specific phrases from the band 4 or band 5 descriptor that your timed essay today did not fully meet. For each, write one sentence explaining what you would need to do differently in your next attempt. Bring this written reflection to Lesson 4.',
    worksheetQuestions: [
      {
        question:
          'Outline your personal time-management strategy for a 60-minute analytical essay on an unseen data set, specifying how many minutes you will allocate to each stage: reading, annotating, planning, writing, and reviewing.',
        lines: 14,
        modelAnswer:
          'A realistic and effective strategy: reading the question — 2 minutes; annotating the data — 7 minutes; drafting a written plan — 1 minute; continuous writing — 45 minutes; final review and correction — 5 minutes. Total: 60 minutes. Students should justify their allocations by reference to the cognitive demands of each stage. A common error is under-allocating time for annotation, which leads to poorly directed writing. Another common error is over-planning and running out of writing time.',
        marks: 6,
      },
      {
        question:
          'What is the difference between a descriptive introduction and an analytical introduction in a linguistics essay? Write an example of each for the prompt: "Analyse the language used in this political speech extract."',
        lines: 18,
        modelAnswer:
          'Descriptive introduction: names the text type and lists features without making a claim — e.g. "This extract is a political speech. It uses formal vocabulary, rhetorical questions, and a variety of sentence types." Analytical introduction: opens with a thesis about the relationship between language choices and purpose/effect — e.g. "The speaker deploys a pattern of imperative constructions and second-person address that positions the audience as active agents of change rather than passive recipients, enacting at the level of grammar the ideology of participation the speech explicitly advocates." The analytical introduction makes a contestable claim that the essay will then support with evidence.',
        marks: 10,
      },
      {
        question:
          'Identify three common errors that students make when writing under timed exam conditions and, for each, suggest a specific strategy to avoid it.',
        lines: 20,
        modelAnswer:
          'Common errors and strategies: (1) Feature-spotting without explanation — list linguistic features without explaining their effect. Strategy: never name a feature without the follow-up "which suggests/creates/positions...". (2) Running out of time before completing the response. Strategy: allocate a hard stop to each paragraph in the plan (e.g. paragraph 1 by minute 15, paragraph 2 by minute 28) and move on even if a paragraph feels unfinished. (3) Wasting time writing a lengthy descriptive introduction. Strategy: keep the introduction to three sentences maximum — one sentence of context, one analytical thesis, one signposting sentence.',
        marks: 12,
      },
      {
        question:
          'Using your timed essay from today\'s lesson, select one paragraph and rewrite it with targeted improvements based on your self-annotation. Then write a brief note (50 words) explaining specifically what you changed and why.',
        lines: 28,
        modelAnswer:
          'The revised paragraph should show improvement in at least one of: precision of feature naming, depth of explanation of effect, embedding of evidence rather than block quotation, connection to a theoretical framework, or return to the question focus. The reflective note should identify the specific change made and connect it explicitly to the mark-scheme criterion it addresses. Vague reflective notes ("I made it more analytical") should be challenged — students should name the specific change.',
        marks: 14,
      },
    ],
    teacherNotes: [
      'Exam conditions must be as authentic as possible to have the desired effect. Arrange seating in individual rows before students arrive if possible. This environmental cue significantly affects student behaviour.',
      'Resist the temptation to circulate encouragingly or offer any hints during the timed writing phase. Students need to experience managing uncertainty independently.',
      'Collect the "commitment cards" from the plenary and redistribute them at the start of Lesson 4. This creates a concrete self-assessment loop.',
      'If running this as part of a mock examination programme, the timed essay should use a past paper question or a close facsimile. If using a teacher-written prompt, ensure it conforms to the exact wording and data type conventions of the live specification.',
      'Note that 60 minutes of the 90-minute lesson is allocated to silent writing. Ensure the room booking allows for this and that no interruptions are expected.',
    ],
    targetedSkills: [
      'AO1: Produce controlled, precise analytical writing under timed conditions',
      'AO3: Apply analytical skills to unseen data independently',
      'Exam technique: planning, pacing, and self-monitoring',
      'Metacognitive reflection on own performance',
      'Time management and examination stamina',
    ],
  },

  // ── Lesson 4: Peer Review and Moderation of Essays ───────────────────────────
  {
    id: 'y12ext-04',
    title: 'Critical Readers: Peer Review and Moderation of Examination Essays',
    text: 'Edexcel IAL English Language Assessment Practice',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Apply mark-scheme criteria consistently and accurately to peer essays',
      'Provide specific, constructive, and evidence-based written feedback that a writer can act on',
      'Understand how examiner moderation works and why consistency in applying descriptors matters',
      'Use the experience of marking others\' work to identify improvements in your own writing',
    ],
    successCriteria: [
      'I can apply band descriptors to award a justified mark to a peer essay',
      'I can write at least two specific pieces of feedback that reference the mark scheme and suggest a concrete revision action',
      'I can compare my mark with a partner\'s mark and resolve a discrepancy through evidence-based discussion',
      'I can identify one feature of the peer essay I reviewed that I want to incorporate or avoid in my own future writing',
    ],
    keywords: [
      'peer review',
      'moderation',
      'mark scheme',
      'band descriptor',
      'inter-rater reliability',
      'formative feedback',
      'annotation',
      'justification',
      'exemplar',
      'refinement',
      'AO1',
      'AO3',
    ],
    starterActivity: {
      title: 'Commitment Card Return and Mark-Scheme Recap',
      duration: '10 minutes',
      instructions:
        'Return the commitment cards written at the end of Lesson 3. Students read their own card silently for two minutes, then discuss in pairs: "Did you act on any of your commitments before today?" Spend three minutes recapping the band descriptors using a projected version of the Edexcel IAL mark scheme. Cold-call three students to describe in their own words what distinguishes band 3 from band 4 performance for AO1 and AO3. Correct any misconceptions before distributing peer essays.',
      differentiation: {
        support:
          'Provide a student-friendly paraphrase of the band descriptors alongside the official mark scheme language.',
        core: 'Students work from the official mark scheme.',
        stretch:
          'Students identify one aspect of the band 4/5 descriptor that they find ambiguous and formulate a question to ask during the moderation activity.',
      },
      resources: [
        'Commitment cards from Lesson 3',
        'Projected Edexcel IAL mark scheme',
        'Student-friendly band descriptor paraphrase (support)',
        'Peer essays from Lesson 3 timed practice (anonymised)',
      ],
    },
    mainActivities: [
      {
        title: 'Structured Peer Marking',
        duration: '35 minutes',
        instructions:
          'Distribute anonymised peer essays (from Lesson 3). Students work individually for 25 minutes to: (1) read the whole essay first without annotating, (2) re-read and annotate using a three-colour code (green = band 4/5 feature, amber = band 2/3 feature, red = band 1/0 or missing), (3) identify the band for each assessment objective separately, (4) write an overall mark with a two-sentence holistic justification. In the final ten minutes, markers write two targeted feedback comments using the structure: "To improve [specific AO]: [specific action] — for example, [brief illustration]." Emphasise that feedback must be specific enough that the writer can act on it without further explanation.',
        differentiation: {
          support:
            'Provide a structured marking form with prompts: "The introduction [does/does not] make an analytical claim because...", "Evidence is [embedded/block-quoted] in paragraph [X] — to improve: ...", "The AO3 mark is [band] because...".',
          core: 'Students use the mark scheme and annotation approach without the structured form.',
          stretch:
            'Students attempt a full examiner-style comment: one paragraph identifying the overall band, two sentences on AO1, two sentences on AO3, one sentence on what is needed to move to the next band.',
        },
        resources: [
          'Anonymised peer essays (one per student)',
          'Edexcel IAL mark scheme',
          'Three-colour annotation pens or highlighters',
          'Structured marking form (support)',
        ],
      },
      {
        title: 'Moderation: Comparing Marks and Resolving Discrepancies',
        duration: '30 minutes',
        instructions:
          'Students are paired with someone who marked a different essay, then essays are swapped so each student is now looking at a marked version of the essay they did not mark. Each student has ten minutes to read the marked essay and the feedback comments, then write one sentence agreeing or disagreeing with the mark awarded and one sentence justifying their view. Pairs then form groups of four: each group has two essays and four sets of marks. The group must reach a consensus mark for each essay through discussion, citing specific evidence from the essay and the mark scheme. Groups report their consensus marks and one key point of disagreement to the class.',
        differentiation: {
          support:
            'Provide a sentence frame for the agreement/disagreement sentence: "I [agree/disagree] with the mark of [X] because the essay [does/does not] meet the band [X] descriptor criterion of [specific phrase from descriptor]."',
          core: 'Students write their agreement/disagreement sentences independently.',
          stretch:
            'Students identify a specific sentence in the essay that best illustrates the difference between the two awarded marks — i.e. the evidence on which the dispute most reasonably turns.',
        },
        resources: [
          'Marked peer essays from previous activity',
          'Mark scheme',
          'Agreement/disagreement sentence frame (support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Transfer: What Have I Learned About My Own Writing?',
      duration: '15 minutes',
      instructions:
        'Students retrieve their own Lesson 3 essay. Using a fresh coloured pen, they make two annotations on their own essay: (1) a section they now judge more critically having seen peer work, and (2) a section they now judge more favourably. Students then write a one-paragraph "next draft" commitment: specifically what they would change if rewriting this essay, grounded in the mark-scheme language they have been using today. Commitments are shared with a partner who challenges any vague statements ("be more analytical" is not specific enough — the partner should push for a concrete action).',
      differentiation: {
        support:
          'Provide a commitment frame: "If I rewrote paragraph [X], I would change [specific feature] because the mark scheme requires [specific criterion]. The revised version would look like: [brief example]."',
        core: 'Students write the paragraph commitment independently.',
        stretch:
          'Students write a second commitment focused on overall essay structure and argument rather than paragraph-level features.',
      },
    },
    homework:
      'Take one paragraph from your Lesson 3 essay that received amber or red annotation (either by your peer marker or by yourself) and rewrite it fully. Bring both versions — original and revised — to Lesson 5. Be prepared to explain your revisions with reference to the mark scheme.',
    worksheetQuestions: [
      {
        question:
          'What is "inter-rater reliability" in the context of examination marking? Why is it important, and what processes does Edexcel use to try to ensure it?',
        lines: 14,
        modelAnswer:
          'Inter-rater reliability refers to the degree to which two or more markers independently award the same (or very similar) marks to the same piece of work. It is important because mark validity and fairness depend on consistent application of criteria. Edexcel uses several mechanisms: standardisation training where examiners mark common scripts and discuss discrepancies; senior examiner moderation of samples of each marker\'s work; mark scheme exemplars published with each paper; and appeals processes where significant discrepancies can be reviewed. Students understanding this process appreciate why precise mark-scheme language matters more than personal impressions.',
        marks: 8,
      },
      {
        question:
          'Write two contrasting feedback comments for the same fictional essay paragraph — one that is too vague to be useful, and one that is specific, actionable, and rooted in mark-scheme language. Then explain the difference.',
        lines: 20,
        modelAnswer:
          'Vague feedback example: "This paragraph needs more analysis and better use of evidence." Specific feedback example: "To improve AO1: the quotation \'the fractured landscape\' is identified but not analysed — name the feature (compound noun creating semantic ambiguity between physical and emotional damage) and explain how the modifier specifically constructs the writer\'s ideology. Without this, the paragraph meets band 2 (identifies features) rather than band 4 (analyses effect and significance)." The key differences: the specific version names the exact quotation, names the missing analytical move, provides a brief model, and cites the relevant band descriptor.',
        marks: 12,
      },
      {
        question:
          'You are moderating two marked essays: Essay A has been awarded band 4 and Essay B band 3. Essay A includes more framework references but Essay B has a more sustained analytical argument. Which mark would you uphold or revise, and on what grounds?',
        lines: 18,
        modelAnswer:
          'A sophisticated response will argue that sustained analytical argument (the quality of reasoning that connects linguistic features to meaning and purpose) is generally rewarded more highly in the band descriptors than the quantity of framework references. Band 4 and 5 descriptors typically emphasise "insightful," "perceptive," or "convincing" analysis rather than comprehensiveness of framework coverage. The response should acknowledge that this is a matter of holistic judgement and that both essays might legitimately sit at the band boundary, which is precisely why moderator discussion and reference back to specific evidence is necessary. There is no single correct answer — the quality of the justification matters.',
        marks: 16,
      },
      {
        question:
          'Using the mark scheme for Edexcel IAL Unit 1 or Unit 2, identify two specific criteria that distinguish band 3 performance from band 4 performance for AO3. For each criterion, write one sentence explaining what a student would need to do in their writing to meet the band 4 standard.',
        lines: 18,
        modelAnswer:
          'Responses will vary depending on which unit mark scheme is used. A typical distinction for AO3: Band 3 — "analyses language with some development and relevant comment on effect"; Band 4 — "analyses language with insight, exploring how specific choices create nuanced effects with consistent connection to context and purpose." To meet band 4 for criterion 1: every analytical observation must include an explanation of the specific effect on a specific reader/listener in a specific context, not a generic claim about "interest" or "emphasis." To meet band 4 for criterion 2: contextual factors (audience, purpose, mode, genre) must be woven into analysis rather than stated as background information.',
        marks: 12,
      },
    ],
    teacherNotes: [
      'Anonymising essays before the lesson is essential. This can be done digitally or by asking students to use a candidate number system rather than their name on Lesson 3 scripts.',
      'Pre-select the essays you distribute to ensure no student receives their own work and that the range of essays includes examples across the bands — at least one strong, one mid-range, and one weak example in circulation.',
      'The moderation activity is the most valuable part of this lesson but also the most prone to becoming a social exercise rather than an analytical one. Circulate actively during the group discussion phase and require groups to cite specific text evidence and mark-scheme language.',
      'The "transfer" plenary is the critical learning moment — the whole lesson should build to this. Students who have spent time marking others\' work see their own writing more clearly. Do not cut this activity short.',
      'This lesson pairs most effectively with Lesson 5 (understanding mark descriptors and self-marking), which develops the skills practised here into a more systematic self-assessment process.',
    ],
    targetedSkills: [
      'AO1: Apply mark-scheme criteria to assess analytical writing quality',
      'AO3: Evaluate the quality of linguistic analysis in peer work',
      'Assessment literacy: reading and applying examination mark schemes',
      'Formative feedback: writing specific, actionable, criterion-referenced comments',
      'Metacognitive reflection: using peer marking to improve own writing',
    ],
  },

  // ── Lesson 5: Understanding Mark Descriptors and Self-Marking ────────────────
  {
    id: 'y12ext-05',
    title: 'Inside the Mark Scheme: Understanding Descriptors and Self-Marking',
    text: 'Edexcel IAL English Language Mark Scheme Literacy',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Decode the language of Edexcel IAL band descriptors accurately and consistently',
      'Understand how marks are distributed across assessment objectives and what each AO requires',
      'Apply self-marking to own work using the mark scheme as a primary reference',
      'Identify the specific analytical moves that differentiate each band level',
    ],
    successCriteria: [
      'I can explain in my own words the key distinction between each adjacent pair of bands for at least two AOs',
      'I can self-mark a complete essay response, awarding a justified mark for each AO with textual evidence',
      'I can identify the single most important change that would move my response from its current band to the next band up',
      'I can articulate what "perceptive" or "insightful" analysis looks like in practice, not just as a descriptor phrase',
    ],
    keywords: [
      'mark scheme',
      'band descriptor',
      'assessment objective',
      'AO1',
      'AO2',
      'AO3',
      'AO4',
      'holistic judgement',
      'threshold',
      'self-assessment',
      'criterion referencing',
      'exemplar',
    ],
    starterActivity: {
      title: 'Descriptor Decoding: What Does It Actually Mean?',
      duration: '12 minutes',
      instructions:
        'Distribute the official Edexcel IAL mark scheme for the relevant unit. Working in pairs, students must translate each band descriptor phrase into plain English, listing what a student would actually need to write. Focus on the most frequently misunderstood terms: "perceptive," "insightful," "convincing," "some awareness," "limited," "sustained." Each pair is assigned two bands and must produce a plain-English "what this means in practice" summary. Pairs share with the adjacent pair, then the class creates a collective "descriptor glossary" recorded on the board. Teacher corrects any significant misreadings.',
      differentiation: {
        support:
          'Provide four of the eight descriptor phrases already translated and ask students to complete the remaining four.',
        core: 'Students translate all assigned phrases from scratch.',
        stretch:
          'Students also identify a word or phrase in the official descriptor language that they think is genuinely ambiguous and draft an alternative phrasing that would be clearer for students.',
      },
      resources: [
        'Printed Edexcel IAL mark scheme (one per student)',
        'Descriptor glossary template',
        'Partially completed glossary (support)',
      ],
    },
    mainActivities: [
      {
        title: 'AO Mapping: What Does Each AO Actually Reward?',
        duration: '25 minutes',
        instructions:
          'Students receive a two-sided handout: one side shows a complete (anonymised) student essay response, the other side shows the mark scheme. Students work individually for fifteen minutes to highlight the essay using a different colour for each AO — identifying which parts of the essay are doing AO1 work (linguistic terminology and accuracy of expression), AO2 work (knowledge of concepts), AO3 work (analysis), and where relevant AO4 work. Students then answer the question: "Are all the marks evenly distributed across this essay, or are some parts contributing more than others?" They share observations in pairs. Teacher addresses the key insight: a sentence can earn marks for multiple AOs simultaneously, and the best essays have high-density AO work throughout.',
        differentiation: {
          support:
            'Provide a labelled example sentence showing how one sentence earns marks across multiple AOs, and ask students to find two more examples of multi-AO sentences in the essay.',
          core: 'Students complete the full highlighting exercise independently.',
          stretch:
            'Students identify the paragraph with the lowest AO density and rewrite two sentences from that paragraph to increase multi-AO density.',
        },
        resources: [
          'Two-sided handout (anonymised essay + mark scheme)',
          'Four-colour highlighting pens',
          'Labelled example sentence (support)',
        ],
      },
      {
        title: 'Self-Marking Workshop: Own Essay with Band Justification',
        duration: '35 minutes',
        instructions:
          'Students retrieve their revised paragraph from the Lesson 4 homework (original and rewritten versions). Using the mark scheme, they self-mark both versions: (1) award a mark out of the available marks for each AO, (2) write a two-sentence justification for each mark citing specific evidence from their own essay, (3) identify the band boundary they are working at, and (4) write a "next step" sentence for each AO. After individual self-marking, students share their self-awarded marks with a partner who challenges any overestimates or underestimates by citing specific evidence. Teacher circulates and resolves any significant disputes by modelling the marking decision publicly.',
        differentiation: {
          support:
            'Provide a self-marking pro forma with sentence starters: "My AO1 mark is [X] because in my paragraph I [evidence]. To improve, I would need to [action]."',
          core: 'Students write their self-marking notes in their own format.',
          stretch:
            'Students also mark their response against the full mark scheme (not just the band they believe they are in) to identify the specific criterion that is the binding constraint on their mark.',
        },
        resources: [
          'Student essays (original and revised versions from Lesson 4 homework)',
          'Mark scheme',
          'Self-marking pro forma (support)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'From Descriptor to Action: One Change, Maximum Impact',
      duration: '8 minutes',
      instructions:
        'Each student writes one sentence — "The single change that would have the greatest positive impact on my next examination essay is [specific action], because this would address the band [X] descriptor criterion of [specific phrase], which I currently do not meet consistently." Students share in a round. Teacher records all "single changes" on the board and identifies the most commonly cited ones — these become the focus of whole-class teaching in the next revision lesson. Students photograph or copy the board list.',
      differentiation: {
        support:
          'Provide the sentence frame as written above.',
        core: 'Students write the sentence in their own words.',
        stretch:
          'Students write a second sentence identifying which change would require the most sustained effort and why, distinguishing between quick technical fixes and deeper analytical habits.',
      },
    },
    homework:
      'Using the complete mark scheme for Edexcel IAL Unit 1, write a student-facing "mark scheme guide" of no more than one side of A4. Your guide must explain in plain English what each band requires for AO1 and AO3, and give one concrete example of what each band would look like in practice. This guide will be used for revision throughout Year 13.',
    worksheetQuestions: [
      {
        question:
          'In plain English, what is the difference between "identifies" (band 2) and "analyses" (band 3/4) in the context of linguistic analysis? Write a brief example of each applied to the same piece of language data.',
        lines: 16,
        modelAnswer:
          '"Identifies" means naming or spotting a feature — e.g. "The writer uses a metaphor." "Analyses" means explaining how and why the feature creates a specific meaning, effect, or interpretation — e.g. "The metaphor of \'a fractured landscape\' encodes the displacement of psychological damage onto physical geography, positioning environmental destruction and personal loss as inseparable — a move that redirects responsibility from individual agency to systemic forces." The distinction is not merely about length but about explanatory depth: identification is descriptive, analysis is interpretive and evaluative.',
        marks: 8,
      },
      {
        question:
          'What does "perceptive" analysis mean in the context of an Edexcel IAL mark scheme? Give a concrete example of a perceptive analytical observation about the following phrase: "We\'re all in this together."',
        lines: 18,
        modelAnswer:
          '"Perceptive" means going beyond the obvious or surface meaning to identify a non-evident interpretation that is nonetheless well-supported by evidence. A perceptive observation notices what a less attentive reader would miss. Example: The inclusive pronoun "we" enacts grammatically the unity it claims ideologically — but the adverb "together" simultaneously acknowledges a prior state of separation that the pronoun attempts to paper over. The hedged modality of "\'re all" (contracted copula) sustains a declarative confidence that forecloses the possibility of dissent. Perceptive analysis identifies the tension between the ideological claim of unity and the grammatical traces of division that the clause cannot fully suppress.',
        marks: 12,
      },
      {
        question:
          'Self-mark the following analytical paragraph using the Edexcel IAL mark scheme. Award a mark for AO1 and AO3 separately, and write a two-sentence justification for each. [Teacher to insert an appropriate paragraph here before printing]',
        lines: 20,
        modelAnswer:
          'AO1 justification should reference: accuracy and range of linguistic terminology, precision of feature identification, and quality of written expression. AO3 justification should reference: depth of analysis, degree to which language choices are connected to purpose/effect/context, and whether the response moves beyond identification to interpretation. A strong self-mark response will avoid both over-marking (rewarding effort or length rather than quality) and under-marking (failing to recognise genuinely perceptive moments). The two-sentence structure should be: sentence 1 states the band and identifies the strongest evidence for it; sentence 2 identifies what prevents a higher mark.',
        marks: 14,
      },
      {
        question:
          'A student claims: "I can\'t improve my mark because I always say everything there is to say about the text." Explain why this view misunderstands how mark schemes work, and describe what the student actually needs to do to access the top band.',
        lines: 16,
        modelAnswer:
          'This view confuses comprehensiveness (saying everything) with quality (saying it with insight and precision). Top-band mark schemes reward "perceptive," "convincing," and "nuanced" analysis — these descriptors refer to the quality of reasoning, not the quantity of observations. To access the top band, the student needs to: (1) prioritise depth over breadth — fewer observations with fuller development are typically rewarded more highly than many observations with thin explanation; (2) integrate multiple frameworks and theories into a continuous argument rather than listing them; (3) evaluate as well as analyse — acknowledging complexity, ambiguity, or alternative interpretations; (4) sustain the quality of analytical reasoning throughout the essay, not just in the opening paragraphs.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'The "descriptor decoding" starter is most effective when students are genuinely wrestling with ambiguous terms. Do not pre-empt their translations — wait until pairs have committed to an interpretation before correcting.',
      'The AO mapping exercise often reveals to students for the first time that they have been writing long paragraphs that only earn AO3 marks, neglecting AO1 (terminology) and AO2 (conceptual knowledge). This is a genuinely illuminating moment.',
      'Self-marking is notoriously unreliable when students first attempt it — the tendency is to over-mark effort rather than quality. The partner challenge stage is essential to calibrate this.',
      'The homework (student-facing mark scheme guide) is a high-value revision resource if produced well. Consider sharing the best examples with the class at the start of the next lesson and building a class resource bank.',
      'This lesson is most effective when it follows Lesson 4 (peer review) because students come in with their marked essays and a more calibrated sense of quality from having marked peer work.',
    ],
    targetedSkills: [
      'Assessment literacy: reading, interpreting, and applying examination mark schemes',
      'AO1: Understanding what linguistic terminology contributes to mark-scheme assessment',
      'AO3: Understanding how depth and quality of analysis are differentiated across bands',
      'Metacognitive self-assessment: accurate and calibrated self-marking',
      'Target-setting: identifying the highest-leverage improvement action',
    ],
  },

  // ── Lesson 6: Unit 1 Mock Exam Walkthrough ───────────────────────────────────
  {
    id: 'y12ext-06',
    title: 'Unit 1 Mock Walkthrough: Understanding the Paper and Building Exam Strategy',
    text: 'Edexcel IAL English Language Unit 1',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Understand the structure, timing, and mark allocation of Edexcel IAL Unit 1',
      'Identify what each section of Unit 1 requires and which skills are assessed in each part',
      'Develop a question-specific strategy for each section of the paper',
      'Analyse a complete high-band Unit 1 response to extract transferable techniques',
    ],
    successCriteria: [
      'I can describe the structure of Unit 1 accurately, including section names, question types, marks, and recommended timings',
      'I can identify the specific AOs assessed in each section and explain what each requires',
      'I can write a section-specific exam strategy for at least two sections of Unit 1',
      'I can identify at least three techniques from a high-band exemplar that I can apply in my own responses',
    ],
    keywords: [
      'Unit 1',
      'paper structure',
      'Section A',
      'Section B',
      'data analysis',
      'representation',
      'language and identity',
      'AO1',
      'AO2',
      'AO3',
      'AO4',
      'mark allocation',
    ],
    starterActivity: {
      title: 'Paper Anatomy: What Is Actually on Unit 1?',
      duration: '12 minutes',
      instructions:
        'Without looking at any resources, students complete a "paper anatomy" quiz from memory: (1) How many sections does Unit 1 have? (2) How many marks is the paper worth in total? (3) How long is the exam? (4) What is the focus of each section? (5) Which AOs are assessed in which sections? Students self-mark against the correct answers displayed after two minutes. Any incorrect or missing answers are corrected in red. Students then identify which aspect of the paper structure they were least certain about and share with a partner. Teacher addresses the three most common knowledge gaps before moving on.',
      differentiation: {
        support:
          'Allow support students to keep their specification summary open during the quiz, but they must still actively read it rather than passively checking.',
        core: 'Quiz completed entirely from memory.',
        stretch:
          'Stretch students must also note the precise wording of each question stem from memory and identify which question stem signals the highest AO3 demand.',
      },
      resources: [
        'Paper anatomy quiz handout (blank)',
        'Answer key slide',
        'Edexcel IAL specification extract (for support)',
      ],
    },
    mainActivities: [
      {
        title: 'Section-by-Section Strategy Development',
        duration: '30 minutes',
        instructions:
          'Using a recent Edexcel IAL Unit 1 past paper, students work through each section in turn, developing a written "section strategy" — a set of instructions they would give to a student attempting that section for the first time. Each strategy must address: (a) what the question is asking for, (b) which AOs are assessed and at what weighting, (c) recommended time allocation, (d) common errors to avoid, and (e) the most important single action before beginning to write. Students work in groups of three or four, each group taking responsibility for one section and then presenting their strategy to the class. Teacher adds to and corrects each presentation before the class records the finalised strategies in their notes.',
        differentiation: {
          support:
            'Provide a section strategy template with the five headings pre-printed and one prompt question under each heading.',
          core: 'Groups develop strategies in their own format.',
          stretch:
            'Groups also identify the single question on the paper that rewards the most sophisticated use of theoretical knowledge and justify their choice.',
        },
        resources: [
          'Edexcel IAL Unit 1 past paper (one per student)',
          'Mark scheme for the same past paper',
          'Section strategy template (support)',
        ],
      },
      {
        title: 'High-Band Exemplar Analysis',
        duration: '33 minutes',
        instructions:
          'Distribute a high-band exemplar response for one section of Unit 1 (ideally a Section B extended response). Students spend fifteen minutes reading and annotating: what makes this response high-band? They annotate using a three-tier code: (1) one underline = excellent AO1, (2) double underline = excellent AO3, (3) circle = a technique or move I want to borrow. After annotation, students complete a "technique harvest" — listing the five techniques from the exemplar they most want to incorporate in their own writing, each expressed as a concrete action ("I will..."). The final three minutes: students compare harvests in pairs and discuss whether their top-five choices reflect their individual weaknesses or are generic.',
        differentiation: {
          support:
            'Provide an annotated version with five features already highlighted and labelled, leaving five more for students to find independently.',
          core: 'Full annotation and technique harvest as described.',
          stretch:
            'Students identify one moment in the exemplar where they believe the response falls short of its otherwise high standard and write a revised sentence to address the weakness.',
        },
        resources: [
          'High-band exemplar response (printed)',
          'Partially annotated exemplar (support)',
          'Technique harvest recording sheet',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Unit 1 One-Page Strategy Sheet',
      duration: '15 minutes',
      instructions:
        'Each student produces a personalised Unit 1 strategy sheet on a single A4 page. It must include: paper structure overview (sections, marks, timings), a key strategy for each section, top three personal weaknesses with targeted actions, and the three techniques from today\'s exemplar they are committing to use. This sheet will be used for revision and should be updated after every subsequent practice. Students share their sheets with a partner in the final two minutes for a quick "sense check" — is anything missing or incorrect?',
      differentiation: {
        support:
          'Provide a template with the required sections pre-labelled and a box for each.',
        core: 'Students design their own layout.',
        stretch:
          'Students add a section rating their current confidence level (1–5) for each assessment objective and identifying a specific resource or action to address any ratings of 3 or below.',
      },
    },
    homework:
      'Attempt Section A of a Unit 1 past paper under timed conditions at home (use the time allocation from your strategy sheet). Mark your own response using the mark scheme and identify the band you are working at. Write three sentences explaining your mark with reference to the mark scheme. Bring your attempt, your self-mark, and your three sentences to Lesson 8.',
    worksheetQuestions: [
      {
        question:
          'Describe the structure of Edexcel IAL Unit 1 in full, including the number of sections, the focus of each section, the marks available per section, and the total examination time.',
        lines: 14,
        modelAnswer:
          'Responses should accurately reflect the current specification. Students should be able to name each section, its focus (e.g. language and representation, language and identity, or as specified in the current version of the Edexcel IAL specification), the marks available for each section, the total marks for the paper, the total examination time, and the recommended time allocation per section derived from marks available. Any significant inaccuracies should be corrected against the official specification before this question is marked.',
        marks: 8,
      },
      {
        question:
          'For Section B of Unit 1, explain: (a) what the question requires you to do, (b) which AOs are assessed and at what mark weighting, and (c) the two most important actions to take before you begin writing your response.',
        lines: 18,
        modelAnswer:
          'Responses should accurately reflect the current specification. The two most important pre-writing actions are typically: (1) annotate the data set systematically against the most relevant frameworks, identifying the three or four most analytically productive features; (2) draft a thesis (one sentence) that makes an overarching claim about the relationship between language choices and purpose/effect in the data — this prevents descriptive drift. Students should be marked on accuracy of specification knowledge as well as quality of strategic advice.',
        marks: 10,
      },
      {
        question:
          'Identify three common errors students make when answering Unit 1 questions and, for each, explain specifically what a student should do instead.',
        lines: 20,
        modelAnswer:
          'Strong responses will identify errors specific to Unit 1 question types rather than generic writing errors. Examples: (1) In data analysis questions, beginning with a paragraph about context rather than analytical observation — instead, open with a claim about the data. (2) In extended questions, treating each linguistic framework as a separate section rather than integrating frameworks into a continuous argument. (3) In representation questions, describing what the text says rather than how language constructs a representation — instead, every paragraph should name a specific linguistic feature and explain how it constructs (not merely reflects) the representation.',
        marks: 12,
      },
      {
        question:
          'Using the high-band exemplar from today\'s lesson, select one paragraph and explain in detail why it reaches the high band. Your explanation must reference at least two specific AO criteria and quote from the exemplar.',
        lines: 22,
        modelAnswer:
          'A strong response will embed specific quotation from the exemplar, name the features being rewarded, connect these to specific AO descriptor language, and explain why the combination of features achieves high-band status. The response should distinguish between features that earn AO1 marks (precision of terminology, quality of expression) and features that earn AO3 marks (depth and perceptiveness of analysis, quality of argument). Avoid simply describing what the exemplar does — explain why each feature earns marks against the specific criteria.',
        marks: 14,
      },
    ],
    teacherNotes: [
      'The "paper anatomy" quiz is only effective if students genuinely attempt it from memory. Brief them in advance that this will happen but do not distribute revision materials before the quiz.',
      'When groups present their section strategies, resist correcting in real time — wait until the presentation is complete and then ask the class to identify any gaps or inaccuracies before adding teacher input. This maintains student agency.',
      'The high-band exemplar should be sourced from Edexcel\'s published grade boundary materials, chief examiner reports, or teacher-created responses that closely model the required standard. Do not use essays from current students\' cohort.',
      'The "technique harvest" activity is most valuable when students express their five techniques as concrete first-person actions ("I will open with a thesis sentence that...") rather than as observations about the exemplar ("the essay uses..."). Push for this framing.',
      'Ensure the strategy sheet produced in the plenary is kept safely — it becomes a living revision document throughout Year 12 and 13.',
    ],
    targetedSkills: [
      'Examination literacy: understanding the structure and demands of Unit 1',
      'AO1: Identifying linguistic techniques that earn high-band AO1 marks',
      'AO3: Understanding how perceptive analytical argument is constructed',
      'Exam strategy: section-specific approaches and time management',
      'Learning from exemplar material and transferring techniques',
    ],
  },

  // ── Lesson 7: Unit 2 Mock Exam Walkthrough ───────────────────────────────────
  {
    id: 'y12ext-07',
    title: 'Unit 2 Mock Walkthrough: Language Acquisition and Language Change in the Exam',
    text: 'Edexcel IAL English Language Unit 2',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Understand the structure, focus, and mark allocation of Edexcel IAL Unit 2',
      'Distinguish between the demands of Unit 2 and Unit 1, particularly regarding the role of theoretical knowledge',
      'Develop a question-specific strategy for each section of Unit 2',
      'Apply knowledge of language acquisition and language change to an extended timed response',
    ],
    successCriteria: [
      'I can describe the structure of Unit 2 accurately, including section names, question types, marks, and recommended timings',
      'I can explain how the balance of AOs in Unit 2 differs from Unit 1 and what this means for exam strategy',
      'I can identify the key theorists and concepts required for Unit 2 and map them to likely question types',
      'I can produce a 20-minute written response to a Unit 2 question that integrates data analysis and theoretical knowledge',
    ],
    keywords: [
      'Unit 2',
      'language acquisition',
      'language change',
      'diachronic',
      'synchronic',
      'acquisition stages',
      'historical language change',
      'Chomsky',
      'Skinner',
      'Halliday',
      'prescriptivism',
      'descriptivism',
    ],
    starterActivity: {
      title: 'Unit 1 vs Unit 2: What\'s Different?',
      duration: '10 minutes',
      instructions:
        'Display a side-by-side comparison grid with columns for Unit 1 and Unit 2, and rows for: topic focus, data types, AOs assessed, mark weighting per AO, role of theory, role of data, length of extended response. Students complete the grid individually for three minutes using their knowledge and notes. Then pairs compare grids and reach an agreed version. Teacher reveals a completed version and addresses any key misconceptions. Spend particular time on the role of theory in Unit 2 — theory and data are both explicitly required and need to be integrated, which distinguishes high-band responses from mid-band ones.',
      differentiation: {
        support:
          'Provide a partially completed grid with Unit 1 entries already filled in, so students only need to complete the Unit 2 column.',
        core: 'Full grid completed from memory as described.',
        stretch:
          'Students add a row to the grid: "Most common student error" — what specific mistake do students make in each unit that they do not make in the other?',
      },
      resources: [
        'Comparison grid handout',
        'Partially completed grid (support)',
        'Completed comparison grid slide (revealed after student attempt)',
      ],
    },
    mainActivities: [
      {
        title: 'Unit 2 Section Breakdown and Theorist Mapping',
        duration: '30 minutes',
        instructions:
          'Using a Unit 2 past paper, students work through each section in the same format as Lesson 6: producing a section strategy for each part of the paper. Additionally, for Unit 2, students complete a "theorist-to-question" mapping: for each section of the paper, which theorists are most likely to be directly relevant? Students create a visual map (mind map, table, or annotated paper) linking question types to theorists and key concepts. Groups share their maps and the class compiles a "master theorist map" on the board. Teacher adds any significant theorists or concepts that groups have omitted.',
        differentiation: {
          support:
            'Provide a theorist list for Unit 2 (acquisition: Chomsky, Skinner, Vygotsky, Halliday, Piaget; change: Aitchison, Crystal, Cameron, Labov) and ask students to map these to sections rather than generating the list independently.',
          core: 'Students generate both strategies and theorist mappings independently before checking against the master list.',
          stretch:
            'Students identify for each theorist: (a) the one Unit 2 question type where their theory is most productive, and (b) a question type where invoking them would be a waste of words.',
        },
        resources: [
          'Edexcel IAL Unit 2 past paper',
          'Mark scheme for the same paper',
          'Theorist list (support)',
          'Whiteboard space for master map',
        ],
      },
      {
        title: 'Mini Timed Response: Integrating Data and Theory in Unit 2',
        duration: '35 minutes',
        instructions:
          'Students complete a 25-minute timed response to a Unit 2 extended question (teacher selects or creates a question focused on either language acquisition or language change). Unlike the full timed essay in Lesson 3, this is a focused practice with an explicit constraint: the response must include at least one quotation from the data, at least one theoretical reference embedded in analytical argument, and at least one evaluative sentence. After 25 minutes, students spend ten minutes on structured self-review: (1) highlight the theoretical reference — is it embedded or bolted on? (2) circle the evaluative sentence — does it add analytical value? (3) underline the most analytical sentence in the whole response.',
        differentiation: {
          support:
            'Provide a planning scaffold for the Unit 2 response: (1) brief context sentence, (2) first analytical claim + data evidence + theoretical link, (3) second analytical claim + data evidence + different theoretical link, (4) evaluation/comparison sentence, (5) concluding claim.',
          core: 'Students plan and write independently.',
          stretch:
            'Students must also include a sentence where they explicitly compare two theoretical positions on the data — e.g. "While Skinner\'s behaviourist account would attribute this pattern to... Chomsky\'s nativist position suggests instead that..."',
        },
        resources: [
          'Unit 2 question and data set',
          'Planning scaffold (support)',
          'Countdown timer',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Unit 2 vs Unit 1: Personal Strategy Comparison',
      duration: '15 minutes',
      instructions:
        'Students place their Unit 1 strategy sheet (from Lesson 6) and their Unit 2 strategy notes side by side. They write three sentences answering: "What do I need to do differently in Unit 2 compared to Unit 1?" The answer must be specific and grounded in the AO weightings and section structures of each paper. Students share with a partner and challenge any vague statements. Teacher facilitates a brief class discussion on the biggest strategic difference between the two papers — the consensus answer (likely: the need to integrate theoretical knowledge explicitly and consistently in Unit 2) is recorded as the key takeaway.',
      differentiation: {
        support:
          'Prompt with three sentence stems: "In Unit 2, I need to include more... because...", "Unlike Unit 1, Unit 2 requires me to...", "The most important strategic change from Unit 1 to Unit 2 is..."',
        core: 'Students write their three sentences independently.',
        stretch:
          'Students write a fourth sentence addressing how their approach to data annotation should differ between Unit 1 and Unit 2.',
      },
    },
    homework:
      'Complete a full practice response to a Unit 2 question under timed conditions at home (use the timing from your strategy notes). Ensure your response includes: at least two embedded theoretical references, at least one evaluative sentence, and a concluding paragraph that returns explicitly to the question. Self-mark using the mark scheme and bring your response with your self-mark to Lesson 8.',
    worksheetQuestions: [
      {
        question:
          'Explain how the role of linguistic theory differs between Edexcel IAL Unit 1 and Unit 2. What does this mean for exam strategy in each paper?',
        lines: 16,
        modelAnswer:
          'In Unit 1, theory tends to support data analysis — theorists are drawn on where they illuminate the data, but the primary demand is analytical precision with the data itself. In Unit 2, theoretical knowledge is a more explicit requirement — particularly in language acquisition and language change questions, where candidates are expected to deploy named theorists and frameworks as an integral part of their extended response, not merely as optional enrichment. Strategically, this means Unit 2 responses require more deliberate pre-planning to identify which theorists are most relevant to the specific question and data, and students need to practise the integration of theory-and-data in a single paragraph rather than in separate sections.',
        marks: 10,
      },
      {
        question:
          'For a Unit 2 question on child language acquisition, identify four theorists you might reference and explain briefly what each contributes that the others do not.',
        lines: 20,
        modelAnswer:
          'Skinner — behaviourist/operant conditioning account: explains how reinforcement and imitation shape language learning; useful for discussing why children reproduce adult patterns. Chomsky — nativist/innatist account: explains the universality of acquisition stages and the speed of language learning beyond what imitation alone can explain; introduces the LAD and universal grammar. Vygotsky — social interactionist account: explains the role of the zone of proximal development and scaffolded interaction; most useful when the data includes adult-child interaction. Halliday — functional account: explains early language in terms of communicative functions rather than grammatical structures; most useful when the data shows pre-syntactic or early multi-word utterances. Each theorist foregrounds different aspects of the data — the choice of which to prioritise should be driven by what the data most clearly illustrates.',
        marks: 12,
      },
      {
        question:
          'A student responds to a Unit 2 language change question by writing three paragraphs about the history of English followed by two paragraphs analysing the provided data. Explain what is wrong with this approach and describe a better structure.',
        lines: 16,
        modelAnswer:
          'The problem with this structure is that the historical paragraphs are likely to be descriptive rather than analytical, earning limited marks under any AO. History of English is not, in itself, an AO2 requirement — what is required is knowledge of linguistic concepts relevant to language change (e.g. semantic shift, grammaticalisation, sound change, Aitchison\'s processes of language change). A better structure integrates data and theory from the outset: each paragraph opens with a claim about a language change feature evidenced in the data, analyses the specific linguistic feature, names the type of change (using precise terminology), and connects this to a broader principle or theorist. The historical context should frame specific analytical points, not appear as a separate block.',
        marks: 12,
      },
      {
        question:
          'Write a paragraph of approximately 180 words responding to a Unit 2 question on language acquisition. Your paragraph must include: a named theorist embedded in the analysis, a specific reference to the data, and an evaluative sentence that considers the limits of the theoretical claim.',
        lines: 26,
        modelAnswer:
          'A high-band paragraph will: open with a claim about what the acquisition data demonstrates; embed a specific utterance or transcript feature as evidence; apply a named theorist\'s concept to explain the feature (e.g. Vygotsky\'s scaffolding evident in the caregiver\'s expansion sequences); explain the effect or significance; and close with an evaluative sentence that considers a limitation (e.g. "However, Chomsky\'s nativist account would resist attributing the child\'s grammatical innovation purely to adult modelling, suggesting instead that the pattern reflects the triggering of an underlying universal structure that interaction alone cannot explain"). The evaluative sentence is the key differentiator at the top band.',
        marks: 18,
      },
    ],
    teacherNotes: [
      'Students frequently underestimate the theoretical demand of Unit 2. Emphasise early that high-band Unit 2 responses consistently embed named theorists with specific concepts — not just reference "acquisition theories" in the abstract.',
      'The mini timed response in this lesson is not a full assessment — its purpose is to practise the specific integration skill (data + theory + evaluation in one paragraph). Students should not panic about producing a complete essay in 25 minutes.',
      'When building the "master theorist map" on the board, photograph and share it digitally with the class. This becomes a valuable revision resource.',
      'The comparison with Unit 1 in the plenary is important — students who have studied both units benefit from explicitly articulating the strategic differences rather than assuming their Unit 1 approach will transfer automatically.',
      'For the homework, provide a specific question and data set rather than asking students to find their own — this ensures comparable practice and makes the Lesson 8 sharing more productive.',
    ],
    targetedSkills: [
      'Examination literacy: understanding the structure and demands of Unit 2',
      'AO2: Integrating theoretical knowledge into extended analytical responses',
      'AO3: Applying theoretical frameworks to specific acquisition and change data',
      'Distinguishing between Unit 1 and Unit 2 exam strategy',
      'Language acquisition and language change as examination topics',
    ],
  },

  // ── Lesson 8: Year 12 End-of-Year Consolidation and Next Steps ───────────────
  {
    id: 'y12ext-08',
    title: 'Year 12 Consolidation: Reviewing Progress and Planning for Year 13',
    text: 'Edexcel IAL English Language Year 12 Review',
    board: 'Edexcel IAL',
    yearGroup: 'Year 12',
    duration: '90 minutes',
    objectives: [
      'Synthesise learning from across Year 12 to produce an honest and evidence-based self-assessment',
      'Identify progress made and areas of persistent weakness across all AOs and both units',
      'Produce a detailed and specific action plan for summer independent study and Year 13 preparation',
      'Develop a clear understanding of what Year 13 will require and how Year 12 learning underpins it',
    ],
    successCriteria: [
      'I can produce a self-assessment that accurately identifies my current working band for each AO across both units',
      'I can identify at least three specific areas of persistent weakness with evidence from my Year 12 work',
      'I can produce an action plan for summer study with at least five concrete, time-bound activities',
      'I can articulate clearly what Year 13 adds to Year 12 in terms of content, skill, and examination demands',
    ],
    keywords: [
      'consolidation',
      'self-assessment',
      'action plan',
      'Year 13',
      'progression',
      'independent study',
      'revision',
      'strength',
      'weakness',
      'target',
      'summer preparation',
      'A-Level',
    ],
    starterActivity: {
      title: 'Year 12 Evidence Audit',
      duration: '15 minutes',
      instructions:
        'Students bring all Year 12 marked work (essays, practice responses, homework tasks, self-mark sheets from this extended series). They have ten minutes to sort their work chronologically and identify: (a) their highest-quality piece of writing and why, (b) their lowest-quality piece and what was wrong, (c) one piece that shows clear improvement from an earlier version. Students annotate each with a brief label. In the final five minutes, each student writes three evidence-based sentences completing: "My Year 12 trajectory in English Language has been... because... The evidence for this is..."',
      differentiation: {
        support:
          'Provide a sorting frame: "My best analytical writing is [title/date] because it [specific criterion]. My biggest remaining challenge is [specific criterion] as shown by [specific piece]."',
        core: 'Students write their three sentences independently.',
        stretch:
          'Students also assess whether their improvement has been consistent across both units or whether it has been stronger in one unit, and hypothesise why.',
      },
      resources: [
        'All marked Year 12 work (students bring portfolios)',
        'Sorting frame (support)',
        'Timeline/chronological sorting strip (optional visual aid)',
      ],
    },
    mainActivities: [
      {
        title: 'Comprehensive Self-Assessment Against All AOs',
        duration: '30 minutes',
        instructions:
          'Using the official mark schemes for Unit 1 and Unit 2, students complete a formal self-assessment grid: for each AO in each unit, they award themselves a current working band (1–5) and provide one sentence of evidence from their Year 12 work to justify each award. Students also rate their confidence with each topic area (1–5) and note whether their band and their confidence rating align — significant mismatches are worth investigating. After completing the grid individually, students share with a partner who has read at least two of their essays this year. The partner may challenge any band award that they believe is inaccurate, citing specific evidence. Teacher circulates and resolves significant disputes.',
        differentiation: {
          support:
            'Provide a pre-formatted self-assessment grid with all AOs and units labelled, and a reminder of the plain-English band descriptors developed in Lesson 5.',
          core: 'Students complete the grid from memory and with reference to their own mark scheme copies.',
          stretch:
            'Students also complete a "meta-assessment" row: which AO do I find the most difficult to assess accurately in my own work, and why? This develops awareness of the limits of self-assessment.',
        },
        resources: [
          'Self-assessment grid (pre-formatted for support; blank template for core/stretch)',
          'Mark schemes for Unit 1 and Unit 2',
          'Plain-English band descriptor sheet from Lesson 5',
          'Student Year 12 essay portfolios',
        ],
      },
      {
        title: 'Action Planning for Summer and Year 13',
        duration: '30 minutes',
        instructions:
          'Students produce a structured action plan for the period between the end of Year 12 and the start of Year 13. The plan must be specific (naming resources, texts, or tasks), time-bound (attaching a week or date to each activity), and evidence-based (linked to a specific weakness identified in the self-assessment). Minimum requirements: (1) at least one theoretical revision task; (2) at least one timed practice essay with self-mark; (3) at least one reading task (a text, article, or chapter relevant to Year 12 or 13 content); (4) at least one exam paper attempt. Students share plans with a partner who adds one suggestion. Teacher circulates and challenges any plan that is vague ("revise theories"), pushing for specificity ("read and summarise Grice\'s original Cooperative Principle paper and identify three examples from real conversation data").',
        differentiation: {
          support:
            'Provide a structured action plan template with the four minimum activities pre-labelled and a resource list for each.',
          core: 'Students produce the plan in their own format with the four minimum activities.',
          stretch:
            'Students research one aspect of Year 13 content (teacher provides a brief overview of the Year 13 specification topics) and add a preparatory task for that content to their summer plan.',
        },
        resources: [
          'Action plan template (support)',
          'Recommended resource list (websites, published materials, past papers)',
          'Brief overview of Year 13 specification topics (for stretch)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Letter to My Year 13 Self',
      duration: '15 minutes',
      instructions:
        'Students write a letter (or note) to themselves at the start of Year 13. The letter must include: (1) a summary of where they are now — their honest assessment of strengths and weaknesses; (2) the three most important things they have learned about analytical writing this year; (3) one piece of advice to their Year 13 self about exam preparation; (4) one prediction about what will be the hardest thing in Year 13. Letters are sealed in envelopes, labelled with the student\'s name, and kept by the teacher to be returned at the first lesson of Year 13. This activity creates a powerful continuity bridge between the two years and motivates genuine reflection.',
      differentiation: {
        support:
          'Provide a letter frame with the four sections pre-headed and one prompt sentence per section.',
        core: 'Students write the letter in their own words using the four headings as a guide.',
        stretch:
          'Students add a fifth section: a question about language or linguistics that they want to be able to answer by the end of Year 13 that they cannot yet fully answer.',
      },
    },
    homework:
      'Begin implementing your action plan this week. Complete the first activity on your plan and bring evidence (a written summary, an annotated past paper, a set of revision notes) to the first lesson of Year 13. If you struggle to begin, identify the specific obstacle and email your teacher with a revised plan.',
    worksheetQuestions: [
      {
        question:
          'Reflecting on your Year 12 analytical writing, identify two specific skills that you have developed significantly and two skills that remain at a weaker level. For each, provide a piece of evidence from your own work.',
        lines: 22,
        modelAnswer:
          'A strong response will identify specific, nameable skills rather than vague categories (e.g. not "analysis" but "embedding theoretical reference within a paragraph without disrupting the analytical argument"; not "terminology" but "applying graphological features precisely to multimodal texts"). Evidence should cite specific essays or responses by title/date and refer to specific features of those responses. This question is self-referential — there is no single correct answer, but responses should demonstrate self-awareness and honest appraisal rather than pure self-promotion or pure self-criticism.',
        marks: 12,
      },
      {
        question:
          'What are the three most important principles of high-quality linguistic analysis that you have learned or consolidated in Year 12? For each principle, explain what it means in practice and give a brief example of how it would apply to an unseen text.',
        lines: 24,
        modelAnswer:
          'Strong responses will identify principles that are genuinely generative — applicable across data types — rather than tips specific to one question type. Examples of strong principles: (1) Analysis should move from feature identification through effect explanation to contextual significance — never stop at naming a feature; (2) Theory should be embedded within analytical argument, not presented as separate background knowledge; (3) Analytical prioritisation (selecting the most productive features for extended analysis) produces better responses than comprehensive feature listing. Each principle should be illustrated with a brief concrete example showing what it looks like in practice, not just what it means in the abstract.',
        marks: 16,
      },
      {
        question:
          'Describe your action plan for summer independent study, specifying at least four activities, the resource you will use for each, and when you will complete each activity.',
        lines: 20,
        modelAnswer:
          'A strong action plan will be specific (naming exact resources — e.g. "Edexcel IAL Unit 1 June 2023 paper" rather than "a past paper"), time-bound (e.g. "Week 1 of summer holidays" rather than "during summer"), and directly linked to identified weaknesses. The four minimum activities should span different types: theory revision, timed practice, independent reading, and self-marking. Vague plans ("revise," "read more") should be challenged and replaced with specific actions ("summarise Goffman\'s face theory in 150 words and apply it to two data extracts from past papers").',
        marks: 10,
      },
      {
        question:
          'In what ways will Year 13 English Language build on, extend, or differ from Year 12? Based on your current understanding, what do you think will be the most challenging aspect of Year 13 for you personally, and why?',
        lines: 20,
        modelAnswer:
          'A thoughtful response will engage genuinely with both the structural and cognitive differences between Year 12 and Year 13 (longer papers, greater synoptic demand, independent investigation/coursework component if applicable, higher expectations for evaluative and critical thinking across all units). The personal prediction of the hardest aspect should be grounded in honest self-assessment from Year 12 — e.g. "The coursework will be most challenging because my independent planning and time management in extended writing tasks has been inconsistent, as shown by [evidence]." Responses that are purely generic or optimistic without evidence of self-awareness should be probed further.',
        marks: 10,
      },
    ],
    teacherNotes: [
      'This lesson only works if students bring their full Year 12 portfolio. Send a reminder two lessons in advance and again the lesson before.',
      'The evidence audit starter requires students to engage honestly with their own work, including weak pieces. Create a psychologically safe climate for this — frame the exercise as diagnostic intelligence, not public judgement.',
      'The self-assessment grid activity is most valuable when the partner challenge phase is taken seriously. Model the difference between a supportive challenge ("I think your AO3 band might be slightly generous because your paragraphs don\'t consistently explain effect — for example in this essay...") and unhelpful challenge or uncritical agreement.',
      'The action plan is the most practically valuable outcome of this lesson. Spend time in the plenary specifically on plans that are vague or unrealistic, modelling publicly how to sharpen them.',
      'The letter-to-self activity has high emotional and motivational value. Take it seriously as a ritual — seal the envelopes yourself and keep them safely. Returning them at the start of Year 13 is a powerful first lesson activity.',
      'If the school runs an end-of-year assessment, consider replacing the timed essay in Lesson 3 with the actual assessment paper and using this consolidation lesson to debrief it. The self-assessment activity in Lesson 8 then has a concrete recent performance to anchor it.',
    ],
    targetedSkills: [
      'Metacognition: accurate self-assessment against assessment criteria',
      'Reflective practice: identifying patterns of strength and weakness across a year of work',
      'Independent learning: planning and executing self-directed study',
      'AO1, AO2, AO3: consolidated understanding of what each objective requires',
      'Academic transition: preparing for the increased demands of Year 13',
    ],
  },
];
