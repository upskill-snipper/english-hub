// ─── IGCSE Exam Technique Guides ─────────────────────────────────────────────
// Edexcel IGCSE English Language (4EA1) and English Literature (4ET1)
// Detailed question-by-question technique guides for students and teachers.

export interface ExamTechniqueGuide {
  id: string;
  paper: string;
  specCode: string;
  questionNumber: string;
  questionType: string;
  marks: number;
  timeAllocation: string;
  stepByStepApproach: string[];
  whatExaminersWant: string[];
  commonMistakes: string[];
  modelParagraphStructure: string;
  keyPhrases: string[];
  gradeDifferentiators: {
    grade: string;
    description: string;
  }[];
}

export interface PaperOverview {
  id: string;
  paper: string;
  duration: string;
  totalMarks: number;
  sections: string[];
  timeManagementPlan: { section: string; timeAllocation: string; strategy: string }[];
  topTips: string[];
}

// ─── Language Paper 1 (4EA1/01) ──────────────────────────────────────────────

const langP1Q1: ExamTechniqueGuide = {
  id: 'lang-p1-q1',
  paper: 'English Language Paper 1',
  specCode: '4EA1/01',
  questionNumber: 'Question 1',
  questionType: 'Locating and retrieving information',
  marks: 8,
  timeAllocation: '10 minutes',
  stepByStepApproach: [
    'Read the question carefully and underline the focus word(s) — exactly what are you being asked to find?',
    'Read the specified lines of the source text, not the whole passage.',
    'Use the bullet points or numbered list format if the question asks you to list points.',
    'Write one clear, concise point per bullet or line — do not pad with explanation.',
    'Aim for slightly more points than marks available (e.g. 10 points for 8 marks) so that marking can select the best.',
    'Use your own words where possible, or copy short relevant phrases directly from the text.',
    'Do not quote whole sentences — paraphrase or lift only the key phrase.',
    'Check each point answers the exact question asked — cut anything off-topic.',
  ],
  whatExaminersWant: [
    'Correct, relevant retrieval of information directly from the text.',
    'Clarity and conciseness — one distinct point per response.',
    'Evidence that you have read the correct lines specified in the question.',
    'Points that are genuinely distinct from each other (not repetitions in different words).',
    'Accuracy — no misreading or misrepresentation of what the text says.',
  ],
  commonMistakes: [
    'Retrieving information from outside the specified lines.',
    'Writing evaluative or analytical comments instead of just locating facts.',
    'Repeating the same point in slightly different phrasing to pad the answer.',
    'Copying huge chunks of text rather than extracting the relevant detail.',
    'Missing simple, obvious points by hunting for something more complex.',
    'Writing in continuous prose when a bulleted list would be clearer and faster.',
  ],
  modelParagraphStructure:
    'Each point should be a single, direct statement: "[Character/subject] [does/feels/is described as] [specific detail from text]." No analysis required. Example: "The narrator describes the house as completely silent at night." Keep each point to one sentence.',
  keyPhrases: [
    'According to the text...',
    'The writer states that...',
    'We are told that...',
    'The text mentions...',
    'The [character/narrator] describes...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Retrieves some correct points but may include irrelevant material, repeat points, or look in the wrong part of the text. Answers lack precision.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'Retrieves most of the available points correctly from the right lines. Points are distinct and clearly expressed. Occasionally drifts into explanation.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'Retrieves all or nearly all available points with precision. Every point is clearly distinct, concise, and accurate. No wasted words. Paraphrasing is fluent and exact.',
    },
  ],
};

const langP1Q2: ExamTechniqueGuide = {
  id: 'lang-p1-q2',
  paper: 'English Language Paper 1',
  specCode: '4EA1/01',
  questionNumber: 'Question 2',
  questionType: 'Implicit meaning and inference',
  marks: 8,
  timeAllocation: '12 minutes',
  stepByStepApproach: [
    'Read the question and identify whether it asks about attitude, impression, feeling, or implication.',
    'Read the specified lines actively, asking yourself: what is being suggested but not directly stated?',
    'Identify 4-5 key words, phrases, or details that carry implied meaning.',
    'For each piece of evidence, ask: what does this make me think or feel about the subject?',
    'Write in Point-Evidence-Explanation (PEE) structure: make your inference, give the quotation, explain how it suggests that inference.',
    'Use hedging language: "suggests", "implies", "conveys the impression that".',
    'Avoid over-claiming — stay rooted in what the text actually supports.',
    'Do not simply re-state what the text says; show what it means beneath the surface.',
  ],
  whatExaminersWant: [
    'Inferences that go beyond the literal — you must read between the lines.',
    'Clear evidence (quotation or reference) tied to each inference.',
    'Explanation of how the evidence supports the inference.',
    'Perceptive, nuanced readings that show genuine engagement with implied meaning.',
    'Consistent focus on the specific subject or person named in the question.',
  ],
  commonMistakes: [
    'Retrieval responses that simply re-state what the text literally says — no inference.',
    'Making inferences without providing textual evidence.',
    'Using evidence that does not actually support the stated inference.',
    'Confusing inference with language analysis — this question is about meaning, not technique.',
    'Losing focus on the specific aspect asked about (e.g. inferring about setting when asked about character).',
    'Over-inferring: reading things into the text that the evidence cannot support.',
  ],
  modelParagraphStructure:
    'State your inference clearly ("We get the impression that [subject] is/feels [idea]"). Provide the evidence ("This is suggested by [quotation/reference]"). Explain the link ("The word/phrase [X] implies [Y] because [reason]"). Keep each paragraph focused on one distinct inference.',
  keyPhrases: [
    'This suggests that...',
    'We get the impression that...',
    'This implies...',
    'The reader infers...',
    'This conveys a sense of...',
    'The phrase "..." hints at...',
    'By describing [X] as [Y], the writer implies...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Makes some inferences but they are surface-level or close to literal retrieval. Evidence is present but the link between evidence and inference is not always explained.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'Makes clear, supported inferences that go beyond the literal. Explanation is present and logical. Some perceptive reading of implied meaning.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'Makes perceptive, nuanced inferences consistently supported by precise evidence. Explanations are convincing and show sophisticated understanding of how writers create implicit meaning. May explore ambiguity or multiple layers of suggestion.',
    },
  ],
};

const langP1Q3: ExamTechniqueGuide = {
  id: 'lang-p1-q3',
  paper: 'English Language Paper 1',
  specCode: '4EA1/01',
  questionNumber: 'Question 3',
  questionType: 'Language analysis: how writers use language for effect',
  marks: 12,
  timeAllocation: '18 minutes',
  stepByStepApproach: [
    'Read the question and identify the effect you are being asked to explore (e.g. tension, character, atmosphere).',
    'Read the specified lines, annotating language choices: figurative language, vocabulary, sentence structure, tone.',
    'Select 3-4 specific, quotable examples — prefer short, precise quotations to long ones.',
    'For each example: name the technique (optional but useful), embed the quotation, analyse the effect word by word.',
    'Use the "zoom in" approach: focus on a single word within your quotation and explain its connotations.',
    'Comment on structure and syntax as well as vocabulary (e.g. short sentences, lists, rhetorical questions).',
    'Always link your analysis back to the overall effect stated in the question.',
    'Vary your analytical verbs: "conveys", "evokes", "emphasises", "reinforces", "suggests", "creates the sense of".',
  ],
  whatExaminersWant: [
    'Identification and analysis of specific language techniques with accurate terminology.',
    '"Zooming in" on individual words and their connotations — not just technique-spotting.',
    'Clear explanation of the effect on the reader, using precise evaluative language.',
    'Range: comments on both vocabulary and structural/syntactical choices.',
    'Sustained focus on the specific effect identified in the question throughout the response.',
    'Evidence of a personal, authentic critical voice — not a formulaic list of techniques.',
  ],
  commonMistakes: [
    'Technique-spotting without analysis: "The writer uses a metaphor" with no explanation of effect.',
    'Vague effect statements: "This makes it more interesting" or "This creates a vivid image."',
    'Quoting large chunks of text rather than short, precise examples.',
    'Identifying the wrong technique (e.g. calling a simile a metaphor).',
    'Repeating the same analytical point in different words.',
    'Ignoring sentence structure and focusing only on word-level choices.',
    'Forgetting to link analysis back to the overall effect asked about.',
  ],
  modelParagraphStructure:
    'Open with a clear analytical statement linking to the effect: "The writer creates [effect] through [broad method]." Embed a short quotation: \'The [quotation] suggests...\' Zoom in on one or two specific words: "The word \'[X]\' carries connotations of [Y], which..." Extend the analysis: "This reinforces the sense of [effect] because..." Where relevant, comment on structure: "The short sentence that follows intensifies this by..."',
  keyPhrases: [
    'The writer creates a sense of... through...',
    'The word "[X]" carries connotations of...',
    'This metaphor/simile/personification suggests...',
    'The cumulative effect of... is to...',
    'By choosing the word "[X]" rather than a synonym, the writer...',
    'The [short/long/fragmented] sentence structure here mirrors...',
    'The reader is made to feel... because...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Identifies some language techniques with basic commentary. Effect statements are generic ("makes it more exciting"). Limited range of techniques identified. Quotations are sometimes too long.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'Selects appropriate language examples and explains their effect clearly. Zooms in on specific words with some development of connotation. Some structural comment. Analysis is sustained and relevant.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'Analyses language with precision and sophistication. "Zooms in" on individual word choices and explores multiple connotations or layers of effect. Comments insightfully on structure as well as vocabulary. Maintains a consistent, perceptive critical voice. Analysis is always tied to the precise effect asked about.',
    },
  ],
};

const langP1Q4: ExamTechniqueGuide = {
  id: 'lang-p1-q4',
  paper: 'English Language Paper 1',
  specCode: '4EA1/01',
  questionNumber: 'Question 4',
  questionType: 'Evaluation of the whole text',
  marks: 20,
  timeAllocation: '25 minutes',
  stepByStepApproach: [
    'Read the statement in the question carefully — you must agree, disagree, or show a nuanced view.',
    'Plan briefly: identify 3-4 moments from across the whole text that you will discuss.',
    'Aim to evaluate (judge the success of the writer\'s choices) not just describe or analyse.',
    'Write a brief introduction that signals your overall viewpoint on the statement.',
    'For each paragraph: refer to a specific part of the text, analyse the writer\'s choices, and evaluate how effectively they support or challenge the statement.',
    'Use evaluative vocabulary throughout: "effectively", "convincingly", "powerfully", "perhaps less successfully".',
    'Consider structure and how ideas develop across the text, not just individual moments.',
    'End with a conclusion that gives your overall, personal judgement on the statement.',
  ],
  whatExaminersWant: [
    'A personal, evaluative response — you must give your own judgment on the writer\'s effectiveness.',
    'Coverage of the whole text, not just one section.',
    'Specific textual references and analysis embedded within the evaluation.',
    'A clear sense of your own critical view — agree, disagree, or qualified agreement.',
    'Evaluative vocabulary used naturally and purposefully, not just inserted mechanically.',
    'Understanding of how the writer\'s craft shapes the reading experience.',
  ],
  commonMistakes: [
    'Treating Question 4 like Question 3 — analysing language without evaluating effectiveness.',
    'Focusing only on one part of the text instead of ranging across it.',
    'Summarising the plot or content instead of evaluating the writer\'s choices.',
    'Using evaluative terms superficially: writing "this is very effective" without explaining why.',
    'Agreeing with the statement throughout without any nuance or qualification.',
    'Forgetting to address the specific statement in the question.',
  ],
  modelParagraphStructure:
    'Begin with your evaluative judgement: "The writer is particularly effective in [section/moment] at creating [idea in statement]." Reference and briefly analyse: "When [writer] describes [event/detail] using [technique/choice], this [effect]." Evaluate: "This is convincing/effective/powerful because [reason tied to statement]." Where applicable, add nuance: "However, [alternative moment or counter-reading] might suggest [qualification of statement]."',
  keyPhrases: [
    'The writer is most effective when...',
    'This successfully conveys... because...',
    'Perhaps the most striking moment is when...',
    'The writer convincingly suggests... through...',
    'To some extent the statement is supported by...',
    'However, one might argue that...',
    'Overall, the writer effectively [achieves/falls short of] the impression described in the statement because...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Makes some reference to the statement but largely describes or analyses without evaluating. Coverage of the text is limited to one or two sections. Evaluative terms are used occasionally but without justification.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'Evaluates the writer\'s effectiveness clearly and with relevant evidence from across the text. Uses evaluative language purposefully. Shows awareness of the statement throughout. Some nuance in the response.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'Provides a perceptive, personal evaluation that ranges confidently across the whole text. Evaluates with sophistication, considering how effects are achieved and how convincing they are. Handles nuance and counter-readings fluently. The critical voice is distinctive and well-reasoned. Analysis is always in service of evaluation.',
    },
  ],
};

// ─── Language Paper 2 (4EA1/02) ──────────────────────────────────────────────

const langP2TaskA: ExamTechniqueGuide = {
  id: 'lang-p2-task-a',
  paper: 'English Language Paper 2',
  specCode: '4EA1/02',
  questionNumber: 'Section A (Reading)',
  questionType: 'Comparison of writers\' viewpoints and perspectives',
  marks: 40,
  timeAllocation: '55 minutes (including reading time)',
  stepByStepApproach: [
    'Allow at least 10-12 minutes to read both sources carefully, annotating as you go.',
    'Identify each writer\'s main viewpoint and the techniques used to convey it.',
    'Note similarities and differences in perspective, tone, purpose, and method.',
    'Plan your response with a brief comparison structure (e.g. agree/disagree on X, then Y, then Z).',
    'Write a brief introduction that identifies both sources and signals your comparative focus.',
    'Use a compare-as-you-go approach: discuss both sources together within each paragraph, not one then the other.',
    'Analyse language choices in both texts with embedded quotations.',
    'Evaluate the effectiveness of each writer\'s approach, not just describe it.',
    'Write a conclusion summarising the key similarities and differences.',
  ],
  whatExaminersWant: [
    'A sustained, structured comparison of both sources throughout the response.',
    'Perceptive identification of each writer\'s viewpoint and attitude.',
    'Analysis of how language choices convey viewpoints and perspectives.',
    'Evaluation of the effectiveness of the writers\' methods.',
    'Accurate, well-integrated quotations from both sources.',
    'A clear critical voice that makes evaluative judgements, not just observations.',
  ],
  commonMistakes: [
    'Writing about each source separately in two halves — no genuine comparison.',
    'Describing what each source says rather than how and why writers express their viewpoints.',
    'Using long, unembedded quotations.',
    'Forgetting to evaluate — analysing language without judging effectiveness.',
    'Over-focus on one source at the expense of the other.',
    'Losing track of the specific comparative focus asked about.',
  ],
  modelParagraphStructure:
    'Open with a comparative point: "Both/While [Source A writer] and [Source B writer] [share/differ in] their view on [topic]." Quote and analyse Source A: "In Source A, [writer] uses [technique/choice] to [effect]." Comparative link: "Similarly/In contrast, Source B\'s [writer]..." Quote and analyse Source B. Evaluate both: "Source A\'s approach is [more/less] effective because... whereas Source B..."',
  keyPhrases: [
    'Both writers...',
    'While [Writer A] suggests..., [Writer B] argues...',
    'In contrast to...',
    'Similarly, both sources convey...',
    'Unlike [Writer A], [Writer B] chooses to...',
    'The perspective of [Writer A] is more... because...',
    'Both texts are united in their..., yet differ in...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Some comparison is present but the response often treats the sources separately. Viewpoints are identified but the language analysis is basic. Evaluation is limited.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'Comparison is sustained across most of the response. Viewpoints and methods are clearly identified and analysed. Evaluative comments are present and justified. Good use of quotations from both sources.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'Perceptive, fluent comparison sustained throughout. Nuanced analysis of how writers craft their viewpoints. Evaluation is confident and specific, considering the impact of individual choices. The response has a clear, personal critical voice and ranges across both texts with equal weight.',
    },
  ],
};

const langP2TaskB: ExamTechniqueGuide = {
  id: 'lang-p2-task-b',
  paper: 'English Language Paper 2',
  specCode: '4EA1/02',
  questionNumber: 'Section B (Writing)',
  questionType: 'Transactional / persuasive writing',
  marks: 40,
  timeAllocation: '50 minutes (including planning)',
  stepByStepApproach: [
    'Read the task carefully: identify the form (letter, article, speech, report), audience, and purpose.',
    'Spend 5 minutes planning: brainstorm 4-5 key points or arguments, consider your register and tone.',
    'Write a purposeful opening that immediately establishes your form, audience, and viewpoint.',
    'Use a range of persuasive techniques: rhetorical questions, direct address, tricolon, anecdote, statistics, counter-argument and refutation.',
    'Vary your sentence structures — use short sentences for impact, longer ones for reasoning.',
    'Maintain consistent register and tone appropriate to your audience throughout.',
    'Use discourse markers and connectives to guide the reader through your argument.',
    'Craft a strong, memorable conclusion that leaves a clear impression on the reader.',
    'Leave 3-5 minutes to check for SPaG errors and ensure your form features are in place.',
  ],
  whatExaminersWant: [
    'Clear sense of form, audience, and purpose evident from the opening.',
    'Sustained and appropriate register throughout — this must not waver.',
    'A range of persuasive techniques used effectively and naturally, not mechanically listed.',
    'Structural variety: paragraphing, discourse markers, varied sentence lengths.',
    'Accurate spelling, punctuation, and grammar — this is marked separately.',
    'An engaging, convincing voice that genuinely attempts to persuade or inform the stated audience.',
  ],
  commonMistakes: [
    'Forgetting to include form features (salutation in a letter, headline in an article, etc.).',
    'Using an inconsistent tone — slipping from formal to informal unexpectedly.',
    'Listing persuasive techniques mechanically rather than integrating them naturally.',
    'Writing a narrative/story response when the task asks for transactional writing.',
    'Neglecting SPaG — losing significant marks through careless errors in extended writing.',
    'Writing too briefly — Section B responses should be substantial (at least 4-5 well-developed paragraphs).',
    'Failing to address the counter-argument, which weakens the persuasive impact.',
  ],
  modelParagraphStructure:
    'Each body paragraph should begin with a clear topic sentence stating the argument. Develop it with evidence, example, or anecdote. Apply a persuasive technique (e.g. direct address, rhetorical question, emotive language) naturally within the development. End the paragraph by linking back to the central argument or previewing the next point. For a letter/article: "It is undeniable that [claim]. Consider, for instance, [example/anecdote]. Can we really afford to [rhetorical question]? The time for [action] is now."',
  keyPhrases: [
    'It is undeniable that...',
    'Consider, for a moment,...',
    'Can we really afford to...?',
    'The evidence is clear:...',
    'Some may argue that... however...',
    'We owe it to ourselves / future generations to...',
    'The facts speak for themselves:...',
    'Imagine a world in which...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Some awareness of form, audience, and purpose. Register is inconsistent. A range of ideas is present but techniques are used mechanically or without integration. SPaG errors are noticeable.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'Clear and sustained sense of form, audience, and purpose. Register is appropriate and mostly consistent. Persuasive techniques are used effectively and varied. SPaG is generally accurate. Writing is organised and fluent.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'Sophisticated command of form, audience, and purpose from the very first sentence. Register and tone are precisely controlled throughout. Techniques are deployed with subtlety and effect — they feel natural, not forced. Structural and linguistic variety is impressive. SPaG is highly accurate. The writing has a compelling, distinctive voice.',
    },
  ],
};

// ─── Literature Paper 1 (4ET1/01) — Poetry ───────────────────────────────────

const litPoetryNamed: ExamTechniqueGuide = {
  id: 'lit-poetry-named',
  paper: 'English Literature Paper 1',
  specCode: '4ET1/01',
  questionNumber: 'Section A — Named poem question',
  questionType: 'Poetry analysis: named poem with printed extract',
  marks: 20,
  timeAllocation: '35 minutes',
  stepByStepApproach: [
    'Read the poem on the paper at least twice — annotate on second reading.',
    'Identify the central theme, speaker, and tone of the poem.',
    'Mark language choices: imagery, diction, tone shifts, figurative language, sound devices.',
    'Mark structural choices: stanza form, line lengths, enjambment, caesura, rhyme scheme, volta.',
    'Plan briefly: choose 3-4 analytical points, each with a specific piece of evidence.',
    'Write a concise introduction: identify the poem, poet, and a clear overall argument about the poem\'s central concern.',
    'Develop each analytical paragraph using an embedded quotation and "zoom in" analysis.',
    'Address both language and structure in your response — do not neglect form.',
    'Write a conclusion that returns to your overall argument and adds a final insight.',
  ],
  whatExaminersWant: [
    'A clear argument about the poem\'s meaning, themes, or effects — not a tour of the poem line by line.',
    'Close language analysis with "zoomed-in" focus on individual words and their connotations.',
    'Structural and formal analysis: comment on how the shape, form, and organisation of the poem contributes to meaning.',
    'Embedded quotations — short phrases woven into your own sentences.',
    'Accurate and purposeful use of literary terminology.',
    'A personal, engaged critical voice with a clear line of argument throughout.',
  ],
  commonMistakes: [
    'Line-by-line paraphrase: retelling what the poem "says" rather than analysing how it works.',
    'Technique-spotting without analysis: "The poet uses alliteration" with no exploration of effect.',
    'Ignoring form and structure — only commenting on language.',
    'Vague effect statements: "this creates imagery" or "this makes it more emotional."',
    'Failing to embed quotations — copying out whole lines without integrating them into analysis.',
    'A conclusion that simply summarises rather than adding a final evaluative insight.',
  ],
  modelParagraphStructure:
    'State an analytical point: "[Poet] uses [technique/choice] to present [idea/theme]." Embed evidence: \'The [quotation] suggests...\' Zoom in: "The word \'[X]\' carries connotations of [Y], creating a sense of [Z]." Extend: "This is reinforced by [another detail], which..." Structural link (where applicable): "The [enjambment/caesura/stanza break] at this point mimics/enacts [effect], deepening the impression that..."',
  keyPhrases: [
    'The poet presents... through...',
    'The word "[X]" carries connotations of...',
    'This image evokes...',
    'The [structural feature] creates a sense of...',
    'By positioning [X] at the [start/end/turn] of the poem, [poet] suggests...',
    'The [rhyme/rhythm/form] reinforces...',
    'The speaker\'s tone shifts from... to..., suggesting...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Some relevant points about the poem\'s content and a few language techniques identified. Analysis is often general or paraphrase-heavy. Limited structural comment. Quotations are present but sometimes unembedded.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'Clear analysis of language and structure with a developing argument. "Zooms in" on key words and explains connotations. Structural features are discussed with purpose. Quotations are embedded and used as a springboard for analysis.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'A perceptive, sustained argument about the poem\'s meaning and effects. Sophisticated analysis of individual word choices, exploring multiple connotations. Insightful structural commentary showing how form and content interact. A distinctive critical voice with evaluative flair. Consistent zooming in throughout.',
    },
  ],
};

const litPoetryUnseen: ExamTechniqueGuide = {
  id: 'lit-poetry-unseen',
  paper: 'English Literature Paper 1',
  specCode: '4ET1/01',
  questionNumber: 'Section A — Unseen poem question',
  questionType: 'Poetry analysis: unseen poem, comparative or standalone',
  marks: 20,
  timeAllocation: '35 minutes',
  stepByStepApproach: [
    'Read the unseen poem three times: first for overall impression, second for close annotation, third to refine your argument.',
    'Identify the subject, speaker, tone, and central theme on your first reading.',
    'Annotate for: key images, unusual word choices, shifts in tone, structural features, sound patterns.',
    'Ask: what is the poem actually about beneath the surface subject? What is its emotional or thematic core?',
    'Plan a clear argument: what is the poem doing and how is it doing it?',
    'Write an introduction that identifies the poem\'s central concern and signals your analytical angle.',
    'Develop 3-4 analytical paragraphs, each focusing on a distinct aspect of the poem.',
    'Ensure you discuss both language and structure.',
    'Write a conclusion that synthesises your argument and offers a final evaluative insight.',
  ],
  whatExaminersWant: [
    'Evidence that you can respond to an unseen poem independently and confidently.',
    'A clear, personal argument about the poem\'s meaning and effects.',
    'Close reading: attention to individual word choices and their effects.',
    'Structural awareness: how the poem is shaped and why.',
    'Confidence in interpreting ambiguity — there is no single right answer for an unseen poem.',
    'An engaged, thoughtful critical voice.',
  ],
  commonMistakes: [
    'Panicking and writing a vague, unfocused response because the poem is unfamiliar.',
    'Only paraphrasing the poem\'s content — not analysing its technique or effect.',
    'Ignoring the poem\'s form and structure entirely.',
    'Refusing to interpret ambiguous images and instead saying "I don\'t know what this means."',
    'Spending too long on the unseen and running out of time for the named poem.',
    'Writing a response that has no clear argument — just a series of disconnected observations.',
  ],
  modelParagraphStructure:
    'Same structure as the named poem: analytical point, embedded evidence, zoomed-in word-level analysis, extension, and structural link. For an unseen poem, be especially explicit about the "effect on the reader" since you cannot assume shared knowledge: "A reader encountering this image for the first time is likely to feel/understand [X] because [Y]."',
  keyPhrases: [
    'The poem opens by establishing...',
    'The central image of [X] conveys...',
    'The poet\'s choice of "[X]" rather than a more obvious synonym suggests...',
    'The poem\'s [form/structure/layout] reinforces its central concern with...',
    'The [shift/turn] in line [X] signals a change from... to..., suggesting...',
    'A reader might interpret this as...',
    'The poem concludes by..., leaving the reader with a sense of...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Shows some understanding of the poem\'s subject matter. Identifies basic language features. Analysis is limited and often paraphrase. Little structural comment.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'Responds confidently to the unseen poem with a clear argument. Analyses language and structure with purpose. "Zooms in" on key words. Shows willingness to interpret ambiguity.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'A perceptive, insightful response that reads beyond the surface. Explores the poem\'s deeper concerns with sophistication. Handles ambiguity with confidence and intelligence. Analysis is precise, well-evidenced, and evaluatively strong. The response feels genuinely engaged with the poem as a piece of craft.',
    },
  ],
};

const litProsePaper1: ExamTechniqueGuide = {
  id: 'lit-prose-paper1',
  paper: 'English Literature Paper 1',
  specCode: '4ET1/01',
  questionNumber: 'Section B — Prose question',
  questionType: 'Prose analysis: extract-based or whole-text question',
  marks: 40,
  timeAllocation: '55 minutes',
  stepByStepApproach: [
    'Read the extract carefully, annotating for: characterisation, language choices, narrative voice, atmosphere, structural features.',
    'Identify the key focus of the question (character, theme, relationship, atmosphere).',
    'Plan your argument: what is the writer doing in this extract and how does it connect to the wider text?',
    'Write an introduction that sets up a clear argument — do not simply re-state the question.',
    'In your first body paragraph, address the extract closely with detailed language analysis.',
    'In subsequent paragraphs, develop your argument, continuing to reference the extract while also connecting to the wider text.',
    'Always link your close reading back to the question\'s focus.',
    'Address context (social, historical, authorial) where relevant and where it genuinely illuminates the text.',
    'Write a conclusion that synthesises your argument and offers a final evaluative or contextual insight.',
  ],
  whatExaminersWant: [
    'A sustained argument about the focus of the question, evidenced from the extract.',
    'Close language analysis with "zoomed-in" word-level commentary.',
    'Connection between the extract and the wider text — this is not just about the passage.',
    'Relevant contextual understanding where it genuinely illuminates the text.',
    'A personal, evaluative critical voice.',
    'Accurate literary terminology used purposefully.',
  ],
  commonMistakes: [
    'Retelling the plot or summarising what happens in the extract.',
    'Writing about the whole text without close reference to the extract itself.',
    'Padding with extensive context that is not linked to the textual evidence.',
    'Technique-spotting without developing the analysis of effect.',
    'Neglecting to make connections between the extract and the wider text.',
    'A conclusion that only summarises rather than evaluating.',
  ],
  modelParagraphStructure:
    '[Analytical claim tied to question focus]. Evidence from extract: "[short embedded quotation]". Close analysis: "The word \'[X]\' suggests [Y] because [reason]". Extension to wider text: "This is significant in the context of the whole novel/text because [connection to theme/character development/structure]". Contextual link where relevant: "Steinbeck/Dickens/etc. may be reflecting [context] here, suggesting [interpretation]."',
  keyPhrases: [
    'In this extract, [writer] presents [character/theme] as...',
    'The language of this passage conveys...',
    'The word "[X]" carries connotations of... which reinforces...',
    'This moment is significant in the wider context of the text because...',
    'The [narrative voice/structural choice] here suggests...',
    '[Writer] uses this passage to explore the theme of... which is central to the text because...',
    'Contextually, [writer] may be suggesting...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Some relevant textual reference and basic language analysis. Limited close reading. Some connection to wider text but it may be plot-summary driven. Context is mentioned but not integrated analytically.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'Clear argument with well-chosen evidence from the extract. Language analysis is purposeful with some "zooming in." Meaningful connections to the wider text. Context is integrated and relevant.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'A sophisticated, perceptive argument developed through precise close reading. Individual word choices are analysed with depth and nuance. Connections to the wider text are insightful and go beyond plot. Contextual understanding is woven naturally into the analysis. A compelling, evaluative critical voice.',
    },
  ],
};

const litDramaPaper1: ExamTechniqueGuide = {
  id: 'lit-drama-paper1',
  paper: 'English Literature Paper 1',
  specCode: '4ET1/01',
  questionNumber: 'Section C — Drama question',
  questionType: 'Drama analysis: extract-based question',
  marks: 40,
  timeAllocation: '55 minutes',
  stepByStepApproach: [
    'Read the extract carefully, treating it as a script: consider what is spoken AND what is implied between the lines.',
    'Annotate for: dialogue choices, stage directions, subtext, dramatic irony, shifts in power, tension.',
    'Identify the question\'s focus and plan a clear argument about the extract and its significance.',
    'Write an introduction that establishes your argument — what is the dramatist doing here and why does it matter?',
    'Analyse dialogue closely: word choices, sentence structures, what is said and what is avoided.',
    'Analyse stage directions and theatrical devices — these are as important as the dialogue.',
    'Connect the extract to the wider play: how does this moment develop themes, relationships, or dramatic structure?',
    'Address context (social, historical, theatrical tradition) where it genuinely illuminates the drama.',
    'Conclude with a synthesised evaluative point about the extract\'s significance.',
  ],
  whatExaminersWant: [
    'An understanding that the text is a script written to be performed — theatrical awareness is essential.',
    'Close analysis of dialogue: word choices, register, rhythm, what is left unsaid.',
    'Attention to stage directions, dramatic irony, and theatrical effect.',
    'A sustained argument linking the extract to the themes and structure of the whole play.',
    'Relevant contextual understanding integrated meaningfully into the analysis.',
    'A personal, evaluative critical voice.',
  ],
  commonMistakes: [
    'Treating the script like a prose narrative — forgetting the theatrical context.',
    'Ignoring stage directions entirely.',
    'Summarising the plot of the scene rather than analysing how the dramatist creates meaning.',
    'Failing to connect the extract to the wider play.',
    'Padding with context that is not tied to specific textual evidence.',
    'Missing the subtext: what characters mean beneath what they literally say.',
  ],
  modelParagraphStructure:
    '[Analytical claim about the dramatist\'s method]. Close reading of dialogue: "When [character] says \'[quotation]\', the use of [technique/word choice] suggests [meaning/effect]." Subtext / theatrical effect: "For a theatre audience, the [dramatic irony/tension/shift in power] here creates [effect] because [reason]." Stage direction (if relevant): "The stage direction \'[X]\' reinforces this by [how]." Wider text connection: "This moment is pivotal in the context of the whole play because [argument]."',
  keyPhrases: [
    'The dramatist presents [character] as... in this extract through...',
    'When [character] says "[quotation]", the word "[X]" suggests...',
    'The stage direction "[X]" signals that...',
    'For a theatre audience, this moment creates [tension/irony/pathos] because...',
    'The subtext here is that...',
    'This scene is crucial to the development of the theme of... because...',
    '[Playwright] may be reflecting [context] here, asking the audience to consider...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Some relevant commentary on the extract\'s content. Basic language analysis. Limited theatrical awareness. Connections to the wider play are often plot-based. Context is mentioned but not integrated.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'Clear argument with close reading of dialogue and attention to theatrical elements. Stage directions are considered. Meaningful connections to the whole play. Context is integrated relevantly.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'A sophisticated, theatrically aware response. Dialogue is analysed with precision, including subtext and what is unsaid. Stage directions and dramatic techniques are analysed for their effect on an audience. Connections to the whole play are insightful and go beyond plot. Context is woven naturally and illuminatingly into the analysis. A compelling, personal critical voice.',
    },
  ],
};

// ─── Literature Paper 2 (4ET1/02) — Prose and Drama ─────────────────────────

const litProseP2Named: ExamTechniqueGuide = {
  id: 'lit-prose-p2-named',
  paper: 'English Literature Paper 2',
  specCode: '4ET1/02',
  questionNumber: 'Section A — Prose question (named text)',
  questionType: 'Whole-text prose response: theme or character focus',
  marks: 40,
  timeAllocation: '55 minutes',
  stepByStepApproach: [
    'Read the question carefully and identify the precise focus (theme, character, relationship, method).',
    'Spend 8 minutes planning: identify 4-5 key moments from the text that best address the question. Note quotations.',
    'Write an introduction that establishes a clear, arguable thesis — your overall position on the question.',
    'In each body paragraph, address a specific aspect of the question with close textual evidence.',
    'Embed short, precise quotations and analyse the language choices within them.',
    'Make connections between different parts of the text — show understanding of the whole work.',
    'Integrate relevant context (social, historical, authorial) where it genuinely illuminates the text.',
    'Vary the moments you discuss — cover the beginning, middle, and end of the text.',
    'Write a conclusion that synthesises your argument and makes a final evaluative or contextual point.',
  ],
  whatExaminersWant: [
    'A clear, sustained argument — not a tour of the text but an answer to the specific question.',
    'Close reading with embedded quotations and word-level analysis.',
    'Coverage of the whole text, not just one section.',
    'Relevant contextual understanding integrated naturally into the response.',
    'Structural awareness: how the writer organises and develops the text.',
    'A personal, evaluative critical voice throughout.',
  ],
  commonMistakes: [
    'Describing the plot in chronological order rather than building an argument.',
    'Using quotations as decoration without analysing the language within them.',
    'Discussing only one or two sections of the text instead of ranging across it.',
    'Forcing in context as a separate paragraph not connected to textual evidence.',
    'Agreeing with the question throughout without any nuance or qualification.',
    'Writing a general essay about the text\'s themes without specifically answering the question set.',
  ],
  modelParagraphStructure:
    '[Analytical claim that directly answers the question]. "In [chapter/act/section], [writer] presents [X] through [technique/choice]: \'[embedded quotation]\'." Zoom in: "The word/phrase \'[X]\' suggests [Y] because [reason]." Development: "This is significant because [connection to theme/structure/question]." Context where relevant: "[Writer] may be reflecting [historical/social context], suggesting that [interpretation]." Contrast/complexity: "However, elsewhere in the text, [counter-example or complication], which adds [nuance]."',
  keyPhrases: [
    '[Writer] presents [theme/character] as... throughout the novel/text.',
    'In [chapter/section], this is most clearly seen when...',
    'The word "[X]" carries connotations of... reinforcing...',
    'This is particularly significant because...',
    'However, [writer] complicates this by...',
    'Contextually, [writer] may be suggesting...',
    'Across the text as a whole, [writer] traces [development/change/contrast] in order to...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Some relevant points about the theme or character. Evidence is present but analysis tends toward paraphrase. Limited range across the text. Context is mentioned but not analytically integrated.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'A clear argument developed with well-chosen evidence from across the text. Language is analysed purposefully. Context is integrated relevantly. Some structural comment.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'A sophisticated, perceptive argument that ranges confidently across the whole text. Close reading is precise and nuanced, exploring multiple layers of meaning. Context is used to deepen interpretation, not pad the response. Structural understanding is evident. The critical voice is distinctive, evaluative, and compelling.',
    },
  ],
};

const litDramaP2: ExamTechniqueGuide = {
  id: 'lit-drama-p2',
  paper: 'English Literature Paper 2',
  specCode: '4ET1/02',
  questionNumber: 'Section B — Drama question',
  questionType: 'Whole-play drama response: theme, character, or dramatic effect',
  marks: 40,
  timeAllocation: '55 minutes',
  stepByStepApproach: [
    'Read the question carefully: is it asking about character, theme, relationship, dramatic method, or effect on audience?',
    'Plan for 8 minutes: identify 4-5 key scenes or moments from across the whole play that best address the question.',
    'Write an introduction that establishes your thesis — what is the playwright doing with this theme/character and how?',
    'Analyse dialogue choices closely in each paragraph: embed short quotations and zoom in on word-level choices.',
    'Consider theatrical effect throughout: how would each moment land for an audience in the theatre?',
    'Analyse stage directions, dramatic irony, and structural features of the play.',
    'Connect to context: when was the play written, for what audience, and what contemporary issues does it engage with?',
    'Cover the whole play — not just key set-piece moments.',
    'Conclude with a final evaluative statement about the playwright\'s overall achievement in relation to the question.',
  ],
  whatExaminersWant: [
    'Consistent theatrical awareness — responses must remember this is a text written to be performed.',
    'A clear, sustained argument about the playwright\'s methods and intentions.',
    'Close reading of dialogue with word-level analysis.',
    'Attention to structure, dramatic irony, and the play\'s effect on an theatre audience.',
    'Relevant contextual understanding integrated meaningfully.',
    'Coverage of the whole play with well-chosen, precise evidence.',
  ],
  commonMistakes: [
    'Forgetting that the text is a play — treating it like a novel with no theatrical awareness.',
    'Retelling the plot scene by scene instead of building an argument.',
    'Ignoring stage directions and structural features.',
    'Only writing about the most famous scenes and neglecting the wider play.',
    'Listing context at the start without connecting it to textual evidence.',
    'Vague analysis that identifies technique without explaining effect on audience.',
  ],
  modelParagraphStructure:
    '[Analytical claim]. "In [Act X, Scene Y], [playwright] dramatises [X] when [character] says \'[embedded quotation]\'." Zoom in: "The word \'[X]\' suggests [Y], conveying [Z] to the audience." Theatrical effect: "On stage, this moment would [create tension/provoke the audience to reconsider/highlight the irony of X] because [reason]." Wider text: "This scene is part of a pattern across the play in which [playwright] [method] to show [theme]." Context: "For a [year] audience, [playwright]\'s treatment of [X] would have [resonance/significance] because [context]."',
  keyPhrases: [
    'The playwright presents [theme/character] as...',
    'On stage, this moment would...',
    'The dramatic irony here is that...',
    'For a [contemporary/modern] audience, this scene...',
    'The structural placement of this scene [early/late/at the climax] is significant because...',
    'When [character] says \'[quotation]\', the word "[X]" suggests...',
    '[Playwright] uses this moment to force the audience to confront...',
  ],
  gradeDifferentiators: [
    {
      grade: 'Grade 4-5',
      description:
        'Some relevant points about character or theme with basic textual evidence. Limited theatrical awareness. Analysis is often surface-level or paraphrase-driven. Context is mentioned but not integrated.',
    },
    {
      grade: 'Grade 6-7',
      description:
        'Clear argument with good theatrical awareness. Dialogue is analysed purposefully. Stage directions and structural features are considered. Context is integrated relevantly. Coverage of the whole play is evident.',
    },
    {
      grade: 'Grade 8-9',
      description:
        'Sophisticated theatrical awareness evident throughout. Dialogue and stage craft are analysed with precision and insight. Structural patterns across the whole play are identified and discussed analytically. Context is woven in with subtlety and illuminates the analysis. A compelling, evaluative critical voice that shows genuine understanding of the playwright\'s dramatic art.',
    },
  ],
};

// ─── Collected Guide Array ────────────────────────────────────────────────────

export const igcseExamTechniqueGuides: ExamTechniqueGuide[] = [
  // Language Paper 1
  langP1Q1,
  langP1Q2,
  langP1Q3,
  langP1Q4,
  // Language Paper 2
  langP2TaskA,
  langP2TaskB,
  // Literature Paper 1
  litPoetryNamed,
  litPoetryUnseen,
  litProsePaper1,
  litDramaPaper1,
  // Literature Paper 2
  litProseP2Named,
  litDramaP2,
];

// ─── Paper Overviews ──────────────────────────────────────────────────────────

export const igcsePaperOverviews: PaperOverview[] = [
  {
    id: 'lang-p1-overview',
    paper: 'English Language Paper 1 (4EA1/01) — Non-fiction Texts',
    duration: '1 hour 30 minutes',
    totalMarks: 48,
    sections: [
      'Question 1: Retrieval and selection (8 marks)',
      'Question 2: Implicit meaning and inference (8 marks)',
      'Question 3: Language analysis — how writers use language for effect (12 marks)',
      'Question 4: Evaluation of the whole text (20 marks)',
    ],
    timeManagementPlan: [
      {
        section: 'Reading time (before writing)',
        timeAllocation: '12 minutes',
        strategy:
          'Read the whole passage at least once before answering any questions. Annotate as you read: underline key language choices, note tone changes, mark structural features. Do not rush this step — quality reading saves time in the answers.',
      },
      {
        section: 'Question 1',
        timeAllocation: '10 minutes',
        strategy:
          'Work quickly but accurately. Re-read only the specified lines. List your points in bullet form — do not write full paragraphs. Aim for 10 clear points and the examiner will credit the best 8. Move on promptly.',
      },
      {
        section: 'Question 2',
        timeAllocation: '12 minutes',
        strategy:
          'Return to the specified lines. Write 4-5 clear PEE paragraphs. Keep each inference brief but supported. Do not over-write — this question rewards clarity and accuracy, not length.',
      },
      {
        section: 'Question 3',
        timeAllocation: '18 minutes',
        strategy:
          'Select 3-4 precise language examples. Write a developed analytical paragraph for each. Zoom in on individual words. Comment on sentence structure as well as vocabulary. Do not write more than 4 paragraphs — quality over quantity.',
      },
      {
        section: 'Question 4',
        timeAllocation: '25 minutes',
        strategy:
          'This is the highest-mark question — give it the most time and effort. Plan before you write (2 minutes). Range across the whole text. Write 4-5 developed evaluative paragraphs plus an introduction and conclusion. Use evaluative vocabulary throughout. Leave 3 minutes at the end to check SPaG.',
      },
      {
        section: 'Final check',
        timeAllocation: '3 minutes',
        strategy:
          'Quickly re-read Question 4 response for SPaG errors. Check that you have answered the question\'s focus consistently. Correct any obvious mistakes.',
      },
    ],
    topTips: [
      'Never skip the reading time — students who rush into Question 1 without reading the whole text first consistently underperform.',
      'Question 4 is worth 20 marks (nearly half the paper) — do not run out of time on this question.',
      'Retrieval (Q1) and inference (Q2) are relatively quick marks — do not over-write these. Save your energy for Q3 and Q4.',
      'Always quote from the specified lines for Q1 and Q2 — marks are lost for referencing the wrong part of the text.',
      'For Q3, choose short, quotable phrases — not whole sentences. "Zooming in" on one or two words scores higher than broad commentary on a long quotation.',
      'For Q4, use the word "effectively" or "convincingly" in every paragraph to keep your response evaluative rather than analytical.',
      'Practise reading non-fiction texts actively — annotate everything, including tone, structure, and purpose, not just language features.',
    ],
  },
  {
    id: 'lang-p2-overview',
    paper: 'English Language Paper 2 (4EA1/02) — Transactional Writing',
    duration: '1 hour 30 minutes',
    totalMarks: 80,
    sections: [
      'Section A (Reading): Comparison of two sources — writers\' viewpoints and perspectives (40 marks)',
      'Section B (Writing): Transactional/persuasive writing task (40 marks, split across two marking criteria: communication and organisation; vocabulary, sentence structure, spelling, and punctuation)',
    ],
    timeManagementPlan: [
      {
        section: 'Reading both sources',
        timeAllocation: '12 minutes',
        strategy:
          'Read Source A first, then Source B. On the first read, identify each writer\'s main viewpoint and underline key language choices. On a second quick scan, note comparisons: what do the two writers agree on, where do they differ, and how do their methods contrast? Annotate with marginal labels like "agrees," "contrasts," "technique: rhetorical Q," etc.',
      },
      {
        section: 'Planning Section A response',
        timeAllocation: '5 minutes',
        strategy:
          'Draft a brief comparison plan: 3-4 comparative points, each with evidence from both sources. Decide on your structural approach (point-by-point comparison is strongly preferred over source-by-source).',
      },
      {
        section: 'Writing Section A',
        timeAllocation: '38 minutes',
        strategy:
          'Write 4-5 comparative paragraphs. Discuss both sources together within each paragraph — never write two separate halves. Embed short quotations from both sources. Evaluate the effectiveness of each writer\'s methods. Use precise comparative connectives. Aim for 600-800 words.',
      },
      {
        section: 'Planning Section B',
        timeAllocation: '5 minutes',
        strategy:
          'Read the task very carefully: identify form, audience, and purpose. Brainstorm 4-5 arguments or points. Decide your tone and register. Note any form features you must include (e.g. Dear Sir/Madam for a formal letter, a headline for an article).',
      },
      {
        section: 'Writing Section B',
        timeAllocation: '25 minutes',
        strategy:
          'Write with purpose and controlled register from the first sentence. Develop 4-5 substantial paragraphs with varied persuasive techniques. Include form features naturally. Maintain consistent register. Aim for at least 400-500 well-crafted words rather than 700 rushed words.',
      },
      {
        section: 'Final check',
        timeAllocation: '5 minutes',
        strategy:
          'Prioritise checking Section B for SPaG errors — this is marked separately and errors are costly. Check form features are in place. Quickly review Section A to ensure you have discussed both sources in each paragraph.',
      },
    ],
    topTips: [
      'Section A is not about who is right — it is about how each writer expresses their viewpoint and how effectively they do so.',
      'The compare-as-you-go approach (both sources discussed in every paragraph) is the key to a high-mark Section A response. Do not write about Source A for 4 paragraphs then Source B for 4 paragraphs.',
      'Section B: form features matter. A letter without a salutation, or an article without a headline, signals a lack of awareness of audience and purpose.',
      'Section B register must be consistent — read back each paragraph and ask: does this sound like it was written by the same person for the same audience?',
      'Persuasive writing does not mean aggressive writing. The most effective persuasion is measured, evidenced, and aware of counter-arguments.',
      'In Section A, "evaluate" means judge the effectiveness of the writer\'s choices — not just describe or analyse. Ask yourself: is this convincing? Why or why not?',
      'Divide your time evenly: 55 minutes on Section A and 35 minutes on Section B (including planning and checking) is a sensible target.',
    ],
  },
  {
    id: 'lit-overview',
    paper: 'English Literature Papers 1 and 2 (4ET1/01 and 4ET1/02)',
    duration: '1 hour 30 minutes per paper',
    totalMarks: 80,
    sections: [
      'Paper 1 Section A: Poetry — named poem (20 marks) + unseen poem (20 marks)',
      'Paper 1 Section B: Prose — extract-based question on set prose text (40 marks)',
      'Paper 1 Section C: Drama — extract-based question on set drama text (40 marks)',
      'Paper 2 Section A: Prose — whole-text question on set prose text (40 marks)',
      'Paper 2 Section B: Drama — whole-text question on set drama text (40 marks)',
    ],
    timeManagementPlan: [
      {
        section: 'Paper 1 — Poetry Section A: Named poem',
        timeAllocation: '35 minutes',
        strategy:
          'Read the poem twice before writing. Annotate on the paper: language choices, structural features, tone shifts. Spend 3 minutes planning your argument. Write a concise introduction, 3-4 analytical paragraphs, and a conclusion. Ensure you discuss both language and structure. Do not exceed 35 minutes — the unseen needs equal time.',
      },
      {
        section: 'Paper 1 — Poetry Section A: Unseen poem',
        timeAllocation: '35 minutes',
        strategy:
          'Read three times before writing. Trust your instincts on the first reading — your immediate response to an unseen poem is valuable. Annotate, plan briefly (2-3 minutes), then write 3-4 focused analytical paragraphs. Do not panic if the poem is difficult — all unseen poems reward close reading regardless of subject.',
      },
      {
        section: 'Paper 1 — Prose Section B',
        timeAllocation: '55 minutes',
        strategy:
          'Read the extract carefully (5-7 minutes) and annotate. Spend 5 minutes planning your argument: what is the writer doing in this extract and how does it connect to the whole text? Write 5-6 analytical paragraphs that address the extract closely while also making connections to the wider text. Integrate context where it genuinely illuminates. Write a strong conclusion.',
      },
      {
        section: 'Paper 1 — Drama Section C',
        timeAllocation: '55 minutes',
        strategy:
          'Same approach as Prose Section B. Crucially, remember this is a script — pay close attention to stage directions, subtext, and theatrical effect. Consider how each moment would be received by a theatre audience. Every paragraph should include some reference to the play in performance.',
      },
      {
        section: 'Paper 2 — Prose Section A (whole text)',
        timeAllocation: '55 minutes',
        strategy:
          'Spend 8 minutes planning: identify 4-5 key moments from across the whole text that address the question. Write an introduction with a clear thesis. Develop 4-5 analytical paragraphs ranging across the whole text. Use precise, short embedded quotations. Integrate context. Write a concluding evaluative point.',
      },
      {
        section: 'Paper 2 — Drama Section B (whole text)',
        timeAllocation: '55 minutes',
        strategy:
          'Same structure as Prose Section A. The additional requirement here is sustained theatrical awareness — every paragraph should consider the effect on a theatre audience. Analyse dialogue closely, including subtext and what is not said. Discuss stage directions and structural choices.',
      },
    ],
    topTips: [
      'Never write a line-by-line paraphrase for any literature question. Every paragraph must be analytical: make a claim, provide evidence, analyse the language, evaluate the effect.',
      'The "zoom in" technique is the single most important analytical skill: choose a short quotation, pick one or two specific words within it, and explore their connotations in depth.',
      'Context is a tool, not padding. Only use it when it genuinely adds to your interpretation of the text. One well-integrated contextual point is worth more than three paragraphs of background information.',
      'For drama questions on both papers, always remember the text is a script — theatrical awareness (effect on audience, performance choices, subtext) is expected and rewarded.',
      'For Paper 1 poetry, always comment on both language and structure. A response that ignores form, stanza organisation, enjambment, or rhyme is leaving marks on the table.',
      'Write with a clear, personal argument from the first sentence. Do not spend your introduction summarising the text or explaining context — use it to signal your analytical position on the question.',
      'Timing discipline across both Literature papers is critical. With sections worth 40 marks each, running out of time on the final question is one of the most common and costly errors.',
      'Practise writing timed responses to past questions throughout Year 10 and Year 11 — the confidence that comes from familiarity with the question types and time pressure is irreplaceable.',
    ],
  },
];
