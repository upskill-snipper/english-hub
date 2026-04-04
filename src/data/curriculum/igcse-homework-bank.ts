// ─────────────────────────────────────────────────────────────────
// IGCSE Homework & Past Paper Practice Bank
// 40 tasks: Years 10-11
// Language P1 (10) | Language P2 (10) | Poetry (5) |
// OMAM (5) | An Inspector Calls (5) | Macbeth (5)
// ─────────────────────────────────────────────────────────────────

export interface IGCSEHomeworkTask {
  id: string
  title: string
  yearGroup: 'Year 10' | 'Year 11'
  subject:
    | 'Language P1'
    | 'Language P2'
    | 'Literature - Poetry'
    | 'Literature - OMAM'
    | 'Literature - Inspector'
    | 'Literature - Macbeth'
  type:
    | 'past-paper-question'
    | 'extended-writing'
    | 'close-reading'
    | 'essay-plan'
    | 'timed-response'
    | 'revision'
    | 'research'
    | 'annotation'
  examQuestion?: string
  taskDescription: string
  timeAllowed: string
  marks?: number
  markingFocus: string[]
  modelResponsePoints: string[]
}

export const igcseHomeworkBank: IGCSEHomeworkTask[] = [
  // ══════════════════════════════════════════════════════════════
  //  LANGUAGE P1 (10 tasks) — Reading non-fiction / media texts
  // ══════════════════════════════════════════════════════════════

  {
    id: 'lang-p1-01',
    title: 'Q1 Retrieval Practice: Identifying Explicit Information',
    yearGroup: 'Year 10',
    subject: 'Language P1',
    type: 'past-paper-question',
    examQuestion:
      'Read lines 1-10 of the source. List four things the writer tells us about the conditions faced by Antarctic explorers.',
    taskDescription:
      'Using the provided non-fiction extract about Antarctic exploration, answer the Q1-style retrieval question. Write four separate, clearly phrased points using your own words where possible. Do not quote whole sentences; show you understand what you have read.',
    timeAllowed: '10 minutes',
    marks: 4,
    markingFocus: [
      'Accurate identification of explicit details from the correct lines',
      'Paraphrasing rather than copying verbatim',
      'Four distinct, separate points',
      'Relevance to the specific focus of the question',
    ],
    modelResponsePoints: [
      'Temperatures dropped to extreme lows, making survival difficult',
      'Explorers faced violent blizzards that reduced visibility to nothing',
      'Frostbite was a constant threat to fingers and toes',
      'Food supplies were strictly rationed to extend the journey',
    ],
  },
  {
    id: 'lang-p1-02',
    title: 'Q2 Language Analysis: Figurative and Descriptive Techniques',
    yearGroup: 'Year 10',
    subject: 'Language P1',
    type: 'past-paper-question',
    examQuestion:
      'How does the writer use language to describe the storm in lines 11-20? You should write about: words and phrases; language techniques; the effects on the reader.',
    taskDescription:
      'Analyse the given extract focusing on how language creates the impression of a powerful storm. Write a developed response using the P-E-E (Point, Evidence, Explain) structure. Aim for 3-4 analytical paragraphs. Include references to specific vocabulary choices, metaphors, similes, personification, or sentence structure.',
    timeAllowed: '20 minutes',
    marks: 8,
    markingFocus: [
      'Precise quotation embedded into analysis',
      'Identification and naming of language techniques',
      'Explanation of the effect on the reader',
      'Exploration of connotations and implied meaning',
      'Varied vocabulary in analytical writing',
    ],
    modelResponsePoints: [
      'Personification of the storm as a living predator creates a sense of threat and malevolence',
      'Dynamic verbs such as "slammed" and "ripped" convey violent, uncontrolled energy',
      'The simile "like a freight train bearing down" implies unstoppable momentum and danger',
      'Short, fragmented sentences in the climax mirror the chaos and panic of those caught in the storm',
      'Sensory imagery (howling, darkness, cold) immerses the reader in the experience',
    ],
  },
  {
    id: 'lang-p1-03',
    title: 'Q3 Structural Analysis: How a Text is Organised',
    yearGroup: 'Year 10',
    subject: 'Language P1',
    type: 'past-paper-question',
    examQuestion:
      'How has the writer structured the text to interest you as a reader? You should write about: what the writer focuses on at the beginning; how and why the focus changes; any other structural features that interest you.',
    taskDescription:
      'Using the full source text provided, write a response analysing the structural choices made by the writer. Consider the opening, the development, any turning points, and the ending. Think about how structure guides the reader through the text and builds interest or tension. Aim for three paragraphs covering different structural aspects.',
    timeAllowed: '20 minutes',
    marks: 8,
    markingFocus: [
      'Coverage of the whole text, not just the opening',
      'Identification of structural features (flashback, cyclical structure, foreshadowing, contrast)',
      'Discussion of the effect of structural choices on the reader',
      'Movement from surface-level to interpretive comment',
    ],
    modelResponsePoints: [
      'The writer opens in medias res, dropping the reader into action to create immediate tension',
      'A shift from present danger to past context allows the reader to understand the stakes',
      'The midpoint introduces a revelation that recontextualises earlier details',
      'The circular ending echoes the opening image, giving the text thematic closure',
      'Paragraphs grow shorter as tension mounts, reflecting urgency through structural pacing',
    ],
  },
  {
    id: 'lang-p1-04',
    title: 'Q4 Evaluation: Assessing How Effectively a Writer Creates Tension',
    yearGroup: 'Year 10',
    subject: 'Language P1',
    type: 'past-paper-question',
    examQuestion:
      'A student says: "This text is completely gripping from start to finish because the writer builds tension so skillfully." To what extent do you agree? You should write about: your own impressions of how the writer creates tension; how the writer has created these effects; how this matches the student\'s view.',
    taskDescription:
      'Write a full evaluative response to the statement. You must engage critically with the view given, partly agreeing and partly questioning or qualifying it. Use evidence from throughout the text. Aim for 4-5 paragraphs, each addressing a different aspect of tension.',
    timeAllowed: '25 minutes',
    marks: 20,
    markingFocus: [
      'Critical engagement with the given viewpoint (agree, disagree, or nuanced)',
      'Use of evidence from across the whole text',
      'Sustained analytical comment on language and structure',
      'Personal response grounded in textual evidence',
      'Clear, well-organised response with developed paragraphs',
    ],
    modelResponsePoints: [
      'The opening hook is highly effective, immediately placing the reader inside a crisis',
      'However, the middle section loses some momentum, which qualifies the "start to finish" claim',
      'Tension is rebuilt through a series of short, urgent sentences as the climax approaches',
      'The writer uses withholding information (dramatic irony) to maintain reader engagement',
      'Overall the student\'s view is largely justified though tension is not uniformly sustained',
    ],
  },
  {
    id: 'lang-p1-05',
    title: 'Timed Extract Close-Reading: Persuasive Non-Fiction',
    yearGroup: 'Year 10',
    subject: 'Language P1',
    type: 'close-reading',
    taskDescription:
      'Read the attached newspaper opinion piece about urban green spaces. Annotate the extract for: rhetorical devices (rule of three, direct address, rhetorical questions, anecdote); tone shifts; any structural features. Then write a 150-word analytical paragraph on how the writer tries to persuade the reader.',
    timeAllowed: '25 minutes',
    markingFocus: [
      'Accurate identification of rhetorical techniques',
      'Understanding of how tone is used to persuade',
      'Analytical paragraph using quotation and comment',
      'Awareness of the writer\'s purpose and audience',
    ],
    modelResponsePoints: [
      'Direct address ("you") positions the reader as personally affected, increasing engagement',
      'The rule of three builds rhythm and makes the argument feel conclusive',
      'Anecdotal evidence creates an emotional appeal (pathos) before statistical evidence (logos)',
      'Tone shifts from warm and personal to authoritative, reflecting a shift from feeling to fact',
    ],
  },
  {
    id: 'lang-p1-06',
    title: 'Q2 Practice: Analysing Language in a Travel Writing Extract',
    yearGroup: 'Year 10',
    subject: 'Language P1',
    type: 'past-paper-question',
    examQuestion:
      'How does the writer use language to convey the excitement of arriving in a new city? (lines 5-18)',
    taskDescription:
      'Write a detailed language analysis response on the given travel writing extract. Focus on how vocabulary, figurative language, and sentence structure are used to capture excitement and wonder. Each paragraph should contain a quotation, the technique identified, and a developed comment on effect.',
    timeAllowed: '20 minutes',
    marks: 8,
    markingFocus: [
      'Precise quotation from the specified lines only',
      'Identification of specific language techniques',
      'Developed explanation of reader impact',
      'Engagement with connotations and layered meaning',
    ],
    modelResponsePoints: [
      'Sensory verbs ("blazed", "hummed", "flooded") recreate the overwhelming stimulation of arrival',
      'The extended metaphor of the city as a living organism suggests energy and unpredictability',
      'Exclamatory sentences convey the narrator\'s spontaneous delight',
      'Accumulation of proper nouns (street names, landmarks) creates a vivid, specific sense of place',
    ],
  },
  {
    id: 'lang-p1-07',
    title: 'Q3 Practice: Structural Analysis of a Memoir Extract',
    yearGroup: 'Year 11',
    subject: 'Language P1',
    type: 'past-paper-question',
    examQuestion:
      'How has the writer structured this memoir extract to engage the reader? Refer to the whole text.',
    taskDescription:
      'Analyse the structural choices in the memoir extract provided, considering the opening hook, the development of ideas, any turning point or revelation, and the conclusion. Write three to four paragraphs, each focused on a different structural feature. Comment on the effect of each choice.',
    timeAllowed: '20 minutes',
    marks: 8,
    markingFocus: [
      'Coverage of the whole text, not just one section',
      'Identification of structural techniques with correct terminology',
      'Discussion of purpose and effect on the reader',
      'Understanding of narrative perspective and its structural role',
    ],
    modelResponsePoints: [
      'The retrospective opening establishes the narrator\'s adult voice before moving back in time',
      'A flashback to childhood events provides backstory and emotional context',
      'The revelation midway through reframes the narrative and surprises the reader',
      'The ending returns to the present tense, creating a sense of resolution and thematic closure',
    ],
  },
  {
    id: 'lang-p1-08',
    title: 'Q4 Timed Evaluation: Childhood and Memory',
    yearGroup: 'Year 11',
    subject: 'Language P1',
    type: 'timed-response',
    examQuestion:
      'A student says: "The writer makes childhood sound completely joyful and carefree, with no hint of difficulty." To what extent do you agree with this view?',
    taskDescription:
      'Write a full Q4-style evaluative response in timed conditions. Read the memoir extract carefully first, then plan and write your response. You must show a critical, balanced view, using evidence from across the text. Aim for at least four paragraphs.',
    timeAllowed: '25 minutes',
    marks: 20,
    markingFocus: [
      'Critical engagement with the quotation, not just agreement',
      'Evidence from multiple points in the text',
      'Sustained, developed analytical paragraphs',
      'Personal reading supported by textual reference',
      'Quality of written expression throughout',
    ],
    modelResponsePoints: [
      'Some passages do present childhood as joyful through light imagery and playful language',
      'However, undercurrents of tension and parental conflict complicate this reading',
      'The writer uses juxtaposition to place moments of happiness against quiet sadness',
      'The student\'s view is partially valid but overlooks the ambiguity in several key passages',
    ],
  },
  {
    id: 'lang-p1-09',
    title: 'Revision: Q1-Q4 Technique Summary Sheet',
    yearGroup: 'Year 11',
    subject: 'Language P1',
    type: 'revision',
    taskDescription:
      'Create a one-page revision summary for P1 Q1-Q4. For each question, note: the question focus, the number of marks, the recommended time, the key skills assessed, and one top tip. Then write a model sentence-starter for each question to use in an exam. This is a planning and consolidation exercise; there is no source text needed.',
    timeAllowed: '30 minutes',
    markingFocus: [
      'Accuracy of question descriptions',
      'Practical, usable top tips based on mark-scheme priorities',
      'Clear, well-organised revision format',
      'Model sentence starters that demonstrate analytical register',
    ],
    modelResponsePoints: [
      'Q1 (4 marks, 5 min): Retrieval -- list four explicit details; no analysis needed',
      'Q2 (8 marks, 10 min): Language analysis -- quote, technique, effect on reader',
      'Q3 (8 marks, 10 min): Structure -- whole-text view, named structural techniques',
      'Q4 (20 marks, 20 min): Evaluation -- critical engagement with a given statement using evidence',
    ],
  },
  {
    id: 'lang-p1-10',
    title: 'Full Timed P1 Practice: Unseen Non-Fiction Extract',
    yearGroup: 'Year 11',
    subject: 'Language P1',
    type: 'timed-response',
    taskDescription:
      'Complete a full timed Paper 1 practice using the unseen extract about life as a wildlife photographer. Answer all four questions under timed conditions: Q1 (5 min), Q2 (10 min), Q3 (10 min), Q4 (20 min). Leave 5 minutes to check. Use separate sections clearly labelled Q1, Q2, Q3, Q4.',
    timeAllowed: '50 minutes',
    marks: 40,
    markingFocus: [
      'Time management across all four questions',
      'Appropriate response length for each question\'s mark allocation',
      'Sustained analytical quality in Q2 and Q3',
      'Critical and evaluative stance in Q4',
      'Accurate quotation and correct technique identification throughout',
    ],
    modelResponsePoints: [
      'Q1: Bullet-point retrieval, four concise points',
      'Q2: Three to four analytical paragraphs on language, each with quotation and effect comment',
      'Q3: Three structural features covered across the whole text',
      'Q4: Four to five paragraphs with a nuanced, evidence-based evaluation',
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  LANGUAGE P2 (10 tasks) — Writing
  // ══════════════════════════════════════════════════════════════

  {
    id: 'lang-p2-01',
    title: 'Descriptive Writing: A Childhood Place',
    yearGroup: 'Year 10',
    subject: 'Language P2',
    type: 'extended-writing',
    examQuestion:
      'Write a description of a place that was important to you in childhood.',
    taskDescription:
      'Write a descriptive piece of approximately 450-600 words. Focus on creating atmosphere through sensory detail, figurative language, and varied sentence structure. Do not tell a story; focus on building a vivid, evocative picture of the place. Use structural choices deliberately (e.g. zoom in from wide shot to close detail).',
    timeAllowed: '45 minutes',
    markingFocus: [
      'Rich, precise sensory detail (sight, sound, smell, touch, taste)',
      'Ambitious vocabulary including Tier 3 descriptive words',
      'Effective figurative language: metaphor, simile, personification',
      'Varied sentence structures for effect (short/long, fragment, list)',
      'Structural control: deliberate organisation from opening to close',
      'Accurate punctuation, including comma use and complex sentence control',
    ],
    modelResponsePoints: [
      'Open with a specific, striking image rather than a general statement',
      'Use a consistent structural technique such as zooming in or circling around a central detail',
      'Vary between long, flowing descriptive sentences and short, punchy sentences for contrast',
      'End with a reflective or emotionally resonant image that echoes the opening',
      'Avoid cliche: replace "the sun was shining" with something specific and original',
    ],
  },
  {
    id: 'lang-p2-02',
    title: 'Narrative Writing: The Discovery',
    yearGroup: 'Year 10',
    subject: 'Language P2',
    type: 'extended-writing',
    examQuestion:
      'Write a story that begins with the sentence: "No one was supposed to find it."',
    taskDescription:
      'Write a narrative of 450-600 words. Plan carefully before writing: decide your setting, character, conflict, and resolution. Focus on narrative craft rather than packing in too many events. Build tension through pacing, dialogue, and description. Use a clear narrative arc: exposition, rising tension, climax, resolution.',
    timeAllowed: '45 minutes',
    markingFocus: [
      'Controlled narrative structure with a clear arc',
      'Characterisation through action, dialogue, and thought',
      'Atmospheric description integrated naturally into the narrative',
      'Effective control of narrative pace (slower description for tension, faster action)',
      'Consistent and appropriate narrative voice',
      'Technical accuracy: paragraphing, speech punctuation, tense consistency',
    ],
    modelResponsePoints: [
      'Establish the narrator\'s voice and the setting quickly in the opening paragraph',
      'Use the discovery as the central turning point, not the opening event',
      'Slow the narrative down at the moment of highest tension using detailed description',
      'Dialogue should reveal character as well as advance the plot',
      'The ending does not need to resolve everything -- ambiguity can be powerful',
    ],
  },
  {
    id: 'lang-p2-03',
    title: 'Article Writing: Should Schools Ban Smartphones?',
    yearGroup: 'Year 10',
    subject: 'Language P2',
    type: 'past-paper-question',
    examQuestion:
      'Write an article for your school magazine in which you argue that smartphones should be banned in schools.',
    taskDescription:
      'Write a persuasive article of approximately 450 words. Use the conventions of article writing: headline, subheadings (optional), formal-to-semi-formal register, a clear argument, rhetorical devices, and a call to action. Structure your argument logically: introduction stating your view, three to four developed points, a counterargument acknowledged and refuted, and a strong conclusion.',
    timeAllowed: '40 minutes',
    marks: 40,
    markingFocus: [
      'Appropriate format: headline, article conventions',
      'Sustained persuasive register matching the audience (school community)',
      'Range of rhetorical devices: direct address, rhetorical questions, statistics, anecdote',
      'Logical argument structure with developed points',
      'Counterargument acknowledged and effectively refuted',
      'Accurate and varied sentence structures',
    ],
    modelResponsePoints: [
      'Headline should be catchy and take a clear stance',
      'Open with a compelling statistic or anecdote to establish the problem',
      'Each paragraph should develop one focused argument with evidence',
      'Acknowledge the opposing view before dismantling it with a stronger counter-point',
      'End with a direct appeal to the reader to support the ban',
    ],
  },
  {
    id: 'lang-p2-04',
    title: 'Letter Writing: Formal Letter of Complaint',
    yearGroup: 'Year 10',
    subject: 'Language P2',
    type: 'past-paper-question',
    examQuestion:
      'Write a formal letter to your local council complaining about the lack of facilities for young people in your area.',
    taskDescription:
      'Write a formal letter of complaint following the correct format: sender address, date, recipient address, formal salutation ("Dear Sir/Madam"), paragraphed body, formal sign-off ("Yours faithfully"). The letter should be persuasive and politely assertive in tone. Around 350-450 words. Make specific suggestions for improvements.',
    timeAllowed: '40 minutes',
    marks: 40,
    markingFocus: [
      'Accurate formal letter format',
      'Consistently formal register throughout',
      'Clear and structured argument: problem, evidence, impact, solution',
      'Persuasive but measured tone (not aggressive)',
      'Specific and credible supporting details',
      'Correct grammar, punctuation, and spelling',
    ],
    modelResponsePoints: [
      'Open by stating your purpose immediately in the first paragraph',
      'Use hedged but assertive language: "I would urge the council to consider..."',
      'Reference specific local details to increase credibility',
      'Propose at least two concrete, realistic solutions',
      'Close by stating what action you expect and by when',
    ],
  },
  {
    id: 'lang-p2-05',
    title: 'Speech Writing: Motivating Your Year Group',
    yearGroup: 'Year 10',
    subject: 'Language P2',
    type: 'extended-writing',
    examQuestion:
      'Write a speech to be delivered to your year group encouraging them to take their studies seriously.',
    taskDescription:
      'Write a speech of approximately 400-500 words. Use the conventions of a speech: direct address, first person, rhetorical questions, inclusive language ("we", "our"), and a powerful opening and closing. The speech should be motivational rather than lecturing -- use anecdote, humour (light touch), and inspiring imagery. End with a memorable call to action.',
    timeAllowed: '40 minutes',
    markingFocus: [
      'Speech format and conventions (address the audience directly)',
      'Varied and effective rhetorical devices',
      'Appropriate register: motivational, peer-to-peer, not condescending',
      'Logical structure with a compelling opening and closing',
      'Ambitious vocabulary and figurative language',
      'Technical accuracy throughout',
    ],
    modelResponsePoints: [
      'Open with a rhetorical question or bold statement to capture attention immediately',
      'Use the rule of three to build rhythm and reinforce key points',
      'A personal anecdote (real or plausible) creates relatability and emotional connection',
      'Repetition of a key phrase acts as a structural anchor across the speech',
      'The closing line should be short, punchy, and memorable',
    ],
  },
  {
    id: 'lang-p2-06',
    title: 'Report Writing: Improving the School Environment',
    yearGroup: 'Year 11',
    subject: 'Language P2',
    type: 'past-paper-question',
    examQuestion:
      'Write a report for your headteacher on how the school environment could be improved for students.',
    taskDescription:
      'Write a formal report of approximately 400-450 words. Use report conventions: a title, subheadings for each section (Introduction, Findings, Recommendations), impersonal and formal language, and a measured, factual tone. Organise your ideas clearly under three to four subheaded sections. Avoid personal opinion phrasing -- use "it is recommended that..." and "evidence suggests...".',
    timeAllowed: '40 minutes',
    markingFocus: [
      'Accurate report format: title, subheadings, impersonal register',
      'Clear, logical organisation of sections',
      'Formal and measured tone throughout',
      'Specific, practical recommendations',
      'Use of impersonal constructions and hedged language',
      'Technical accuracy in grammar and punctuation',
    ],
    modelResponsePoints: [
      'Title should be specific: "Report on the School Environment: Findings and Recommendations"',
      'Introduction: state the purpose, scope, and method of investigation',
      'Findings: present 2-3 issues with supporting observations or data',
      'Recommendations: one clear action per finding, written in formal passive or modal constructions',
      'Conclusion: brief summary of priorities for action',
    ],
  },
  {
    id: 'lang-p2-07',
    title: 'Review Writing: A Restaurant, Film, or Book',
    yearGroup: 'Year 11',
    subject: 'Language P2',
    type: 'extended-writing',
    examQuestion:
      'Write a review of a film, book, or restaurant for a magazine or website of your choice.',
    taskDescription:
      'Write an entertaining and informative review of approximately 400-450 words. Use review conventions: brief summary without spoiling, informed evaluation, specific examples, a star rating or score (optional), and a direct recommendation. The register should match your chosen audience. Balance praise and criticism to appear credible.',
    timeAllowed: '35 minutes',
    markingFocus: [
      'Appropriate review format and conventions',
      'Consistent register matching the target publication and audience',
      'Specific references to support evaluative claims',
      'Engaging, witty, or authoritative voice as appropriate',
      'Clear recommendation in the conclusion',
      'Varied and ambitious language throughout',
    ],
    modelResponsePoints: [
      'Open with a hook that captures the essence of the experience without a dull summary',
      'Use one or two specific details as evidence for each evaluative claim',
      'A brief negative point, handled elegantly, adds credibility to your praise',
      'The final paragraph should directly address the reader with a recommendation',
      'Tone should be confident and entertaining, not neutral or flat',
    ],
  },
  {
    id: 'lang-p2-08',
    title: 'Essay Plan: Travel Writing Task',
    yearGroup: 'Year 11',
    subject: 'Language P2',
    type: 'essay-plan',
    examQuestion:
      'Write a piece of travel writing about a real or imagined place that left a strong impression on you.',
    taskDescription:
      'Before writing, create a detailed essay plan for your travel writing piece. Your plan should include: the place chosen and its key atmosphere, structural outline (how will you move through the piece), key descriptive details for each section, language techniques you will deliberately deploy, and your intended opening and closing sentences. Then write one full paragraph from your plan.',
    timeAllowed: '30 minutes',
    markingFocus: [
      'Structural planning shows deliberate craft decisions',
      'Language techniques identified in advance and used in the sample paragraph',
      'The sample paragraph demonstrates controlled, evocative descriptive writing',
      'Opening and closing sentences are original and purposeful',
    ],
    modelResponsePoints: [
      'Plan should identify a clear structural arc: arrival, immersion, departure or moment of insight',
      'Note 3-4 sensory details per section to draw on when writing',
      'Identify at least one extended metaphor or recurring image to use across the piece',
      'Sample paragraph should show rich, specific description with integrated figurative language',
    ],
  },
  {
    id: 'lang-p2-09',
    title: 'Descriptive Writing: A Timed Practice (Photograph Prompt)',
    yearGroup: 'Year 11',
    subject: 'Language P2',
    type: 'timed-response',
    examQuestion:
      'Look at the image of a busy street market at night. Write a description of the scene.',
    taskDescription:
      'Using the photograph of a night market as a stimulus, write a descriptive piece of approximately 400-500 words under timed conditions. You are not telling a story about the people in the image -- you are capturing the atmosphere, movement, light, and detail. Use a structural device to organise your piece (e.g. wide to close, silent to loud, exterior to interior).',
    timeAllowed: '40 minutes',
    marks: 40,
    markingFocus: [
      'Use of the visual stimulus as inspiration rather than literal description of the photo',
      'Rich, layered sensory description (especially light, sound, smell)',
      'Deliberate structural organisation',
      'Figurative language that enhances rather than crowds the description',
      'Technical accuracy in a range of sentence types',
    ],
    modelResponsePoints: [
      'Begin with an arresting image -- something specific from the scene, rendered vividly',
      'Use light and contrast as a recurring motif (neon, shadow, flicker)',
      'Sound description should contrast with visual: buzzing crowds vs sudden quiet',
      'One brief, embedded human detail (a vendor\'s hands, a child\'s face) personalises the scene',
      'End by pulling back to the wide view, echoing the opening image',
    ],
  },
  {
    id: 'lang-p2-10',
    title: 'Full Timed P2 Practice: Plan, Write, Check',
    yearGroup: 'Year 11',
    subject: 'Language P2',
    type: 'timed-response',
    examQuestion:
      'Either: (a) Write a description of a place you associate with a strong feeling. Or: (b) Write a story with the title "The Last Chance."',
    taskDescription:
      'Complete a full timed P2 writing task. Spend 5 minutes planning, 35 minutes writing, and 5 minutes proofreading and improving. Choose either option (a) or option (b). Your plan should include structure, key techniques, and opening/closing sentences. In your final check, look for: spelling errors, missing punctuation, weak vocabulary to upgrade, and any sentences to improve.',
    timeAllowed: '45 minutes',
    marks: 40,
    markingFocus: [
      'Evidence of planned and deliberate structure',
      'Consistent and appropriate register throughout',
      'Range of sentence structures for effect',
      'Ambitious and precise vocabulary choices',
      'Technical accuracy improved through proofreading',
      'Overall impact and quality of written expression',
    ],
    modelResponsePoints: [
      'Planning: identify your opening line, structural arc, and closing line before writing',
      'Writing: prioritise quality over quantity -- 450 polished words beats 700 rushed words',
      'Proofreading: read aloud in your head to catch missing words and awkward phrasing',
      'Upgrade at least three vocabulary choices during the check stage',
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  LITERATURE - POETRY (5 tasks)
  // ══════════════════════════════════════════════════════════════

  {
    id: 'lit-poetry-01',
    title: 'Single Poem Analysis: "Ozymandias" by Percy Bysshe Shelley',
    yearGroup: 'Year 10',
    subject: 'Literature - Poetry',
    type: 'close-reading',
    examQuestion:
      'How does Shelley present the theme of power in "Ozymandias"?',
    taskDescription:
      'Write a detailed analytical response exploring how Shelley presents power in the poem. Annotate the poem first, then write 4-5 analytical paragraphs. Consider: the structure and form (sonnet), the extended metaphor of the ruined statue, the irony of the inscription, Shelley\'s political context, and the final image of empty desert.',
    timeAllowed: '45 minutes',
    marks: 20,
    markingFocus: [
      'Close reading of language with precise quotation',
      'Exploration of form and structure (Petrarchan sonnet, volta)',
      'Understanding of thematic message: power is transient',
      'Contextual knowledge of Shelley\'s Romantic politics',
      'Personal response and evaluative stance',
    ],
    modelResponsePoints: [
      'The ruined statue is an extended metaphor for the inevitable decay of all political power',
      'Irony operates through the gap between the inscription ("king of kings") and the empty desert',
      'The Petrarchan sonnet form is disrupted, mirroring the broken nature of the statue',
      'Shelley, as a Romantic radical, uses Ozymandias as a critique of tyranny and ego',
      'The final three lines of desolate imagery leave the reader with a sense of humility before time',
    ],
  },
  {
    id: 'lit-poetry-02',
    title: 'Single Poem Analysis: "My Last Duchess" by Robert Browning',
    yearGroup: 'Year 10',
    subject: 'Literature - Poetry',
    type: 'close-reading',
    examQuestion:
      'How does Browning present the character of the Duke in "My Last Duchess"?',
    taskDescription:
      'Write a detailed analytical essay exploring how Browning reveals the Duke\'s character through his dramatic monologue. Annotate the poem focusing on: what the Duke reveals about himself unintentionally, his language of control and possession, the significance of the portrait, and what the poem implies about the Duchess\'s fate. Write four to five analytical paragraphs.',
    timeAllowed: '45 minutes',
    marks: 20,
    markingFocus: [
      'Understanding of the dramatic monologue form and its effects',
      'Analysis of how the Duke inadvertently self-incriminates through his speech',
      'Exploration of power, gender, and control as themes',
      'Contextual awareness of Victorian attitudes to women',
      'Use of specific quotation with developed analysis',
    ],
    modelResponsePoints: [
      'The dramatic monologue allows Browning to create ironic distance between the Duke\'s self-image and the reader\'s response',
      'Possessive language ("my last Duchess", "my gift") reveals the Duke\'s treatment of the Duchess as an object',
      'The controlled, even-tempered diction paradoxically makes the Duke more sinister',
      'The Duchess\'s "spot of joy" represents natural warmth, which the Duke reads as impropriety',
      'Victorian readers would have recognised the context of arranged marriages among the aristocracy',
    ],
  },
  {
    id: 'lit-poetry-03',
    title: 'Poetry Comparison: War and Conflict',
    yearGroup: 'Year 11',
    subject: 'Literature - Poetry',
    type: 'extended-writing',
    examQuestion:
      'Compare how poets present the suffering caused by war in "Exposure" by Wilfred Owen and one other poem from your anthology.',
    taskDescription:
      'Write a comparative essay exploring how two poets present the suffering caused by war. Begin with a brief introduction that identifies key similarities and differences in approach. Use an integrated comparison structure (not poem-by-poem). Aim for 4-5 comparative paragraphs, each exploring a shared or contrasting aspect of how suffering is presented.',
    timeAllowed: '50 minutes',
    marks: 20,
    markingFocus: [
      'Integrated comparison structure throughout',
      'Close analysis of language in both poems',
      'Exploration of how form and structure contribute to meaning',
      'Contextual knowledge of both poets',
      'Clear argument about how the poems are similar and different in their treatment of the theme',
    ],
    modelResponsePoints: [
      'Owen\'s use of half-rhyme and assonance in "Exposure" creates a sense of unresolved tension',
      'The passive, waiting soldiers are presented as victims not of the enemy but of nature and indifference',
      'Comparison poem (e.g. "Bayonet Charge"): contrast between frenetic action and Owen\'s stillness',
      'Both poems strip away the glory of war, but through opposing techniques: stasis vs. motion',
      'Contextual comparison: Owen as soldier-witness vs. Hughes as imagining the experience retrospectively',
    ],
  },
  {
    id: 'lit-poetry-04',
    title: 'Unseen Poetry Analysis: Approaching an Unknown Poem',
    yearGroup: 'Year 11',
    subject: 'Literature - Poetry',
    type: 'annotation',
    taskDescription:
      'Using the unseen poem provided, complete a structured annotation before writing. Step 1: Read the poem twice without annotating. Step 2: Annotate for tone, key images, form, and structure. Step 3: Identify the poem\'s central idea or argument. Step 4: Write one timed analytical paragraph on how the poet uses language to present a key idea. Then answer: what does the ending reveal about the poem\'s meaning?',
    timeAllowed: '35 minutes',
    markingFocus: [
      'Systematic and thoughtful annotation process',
      'Accurate identification of tone, imagery, form, and structure',
      'Clear identification of the poem\'s central idea',
      'Analytical paragraph with close language analysis',
      'Perceptive response to the ending\'s significance',
    ],
    modelResponsePoints: [
      'First read: identify the situation and speaker; second read: notice language and structure choices',
      'Tone is often the key to unlocking the poem\'s attitude and purpose',
      'The volta or shift in tone/direction usually reveals the poem\'s central insight',
      'Unseen analysis rewards genuine engagement over trying to identify a technique list',
      'The ending should be interpreted in light of the whole poem, not just read in isolation',
    ],
  },
  {
    id: 'lit-poetry-05',
    title: 'Essay Plan: Power and Conflict Theme Across Two Poems',
    yearGroup: 'Year 11',
    subject: 'Literature - Poetry',
    type: 'essay-plan',
    examQuestion:
      'Compare how poets present the destructive nature of power in two poems from your anthology.',
    taskDescription:
      'Create a detailed comparative essay plan for the above question. Your plan must include: a working argument/thesis, a comparison grid (similarities and differences in language, structure, context), a paragraph-by-paragraph outline with the comparative point, quotation from each poem, and planned analytical comment, and a planned conclusion. Do not write the full essay -- produce the plan only.',
    timeAllowed: '25 minutes',
    markingFocus: [
      'Clear, arguable thesis that goes beyond "both poems are about power"',
      'Comparative structure rather than poem-by-poem plan',
      'Specific quotations selected and noted for each paragraph',
      'Evidence of contextual thinking about each poet',
      'A planned conclusion that evaluates similarities and differences',
    ],
    modelResponsePoints: [
      'Thesis example: "Both poems present power as inherently corrupting, but Owen focuses on institutional power while Shelley examines personal ego"',
      'Plan should show 4-5 integrated comparative paragraphs, not two separate analyses',
      'Each paragraph in the plan should name the comparative link (contrast, parallel, development)',
      'Context notes should directly connect to the poem\'s meaning, not just provide background',
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  LITERATURE - OF MICE AND MEN (5 tasks)
  // ══════════════════════════════════════════════════════════════

  {
    id: 'lit-omam-01',
    title: 'Character Essay: How Steinbeck Presents Lennie Small',
    yearGroup: 'Year 10',
    subject: 'Literature - OMAM',
    type: 'extended-writing',
    examQuestion:
      'How does Steinbeck present the character of Lennie Small in "Of Mice and Men"?',
    taskDescription:
      'Write a full character essay on Lennie, exploring how Steinbeck uses him to convey ideas about innocence, disability, and the American Dream. Use evidence from across the novel. Write four to five analytical paragraphs: introduce your argument, then explore Lennie as a symbol of innocence, as a victim of circumstance, as a figure of childlike dependency, and as connected to the novel\'s tragic ending.',
    timeAllowed: '45 minutes',
    marks: 20,
    markingFocus: [
      'Sustained focus on characterisation techniques: dialogue, description, action',
      'Evidence drawn from across the whole novel',
      'Exploration of Lennie\'s symbolic function',
      'Contextual understanding of 1930s America, migrant workers, and attitudes to disability',
      'Clear argument maintained throughout the essay',
    ],
    modelResponsePoints: [
      'Lennie is repeatedly described in animal imagery, suggesting he is closer to nature than society',
      'His childlike innocence is presented sympathetically but also as the source of tragedy',
      'Steinbeck uses Lennie to critique a society that has no place for those who are different',
      'The recurring motif of soft animals (mice, rabbits, the puppy) connects Lennie to vulnerability and death',
      'Context: Steinbeck wrote during the Great Depression; Lennie represents all who are crushed by a system that values only productivity',
    ],
  },
  {
    id: 'lit-omam-02',
    title: 'Context Question: The American Dream in "Of Mice and Men"',
    yearGroup: 'Year 10',
    subject: 'Literature - OMAM',
    type: 'research',
    taskDescription:
      'Research the concept of the American Dream and its context in 1930s Depression-era America. Write a 300-word contextual essay explaining: (1) what the American Dream promised, (2) how the Great Depression shattered this promise, (3) how George and Lennie\'s dream of owning land reflects and then subverts this ideal, (4) how Steinbeck uses context to make a political point. Use at least three references to the novel.',
    timeAllowed: '35 minutes',
    markingFocus: [
      'Accurate and relevant contextual knowledge',
      'Clear connections between context and the novel\'s themes',
      'References to specific moments in the novel',
      'Understanding that context enriches literary interpretation',
    ],
    modelResponsePoints: [
      'The American Dream: the belief that hard work and determination could lead anyone to prosperity and independence',
      '1930s context: mass unemployment, dust bowl, and mass migration crushed this belief for millions',
      'George and Lennie\'s farm dream is the novel\'s central symbol of hope -- and its destruction is the novel\'s central tragedy',
      'Candy, Crooks, and Curley\'s wife all share versions of the same broken dream',
      'Steinbeck\'s message: the American Dream was a myth that exploited the vulnerable',
    ],
  },
  {
    id: 'lit-omam-03',
    title: 'Extract Analysis: The Death of Candy\'s Dog',
    yearGroup: 'Year 10',
    subject: 'Literature - OMAM',
    type: 'close-reading',
    examQuestion:
      'How does Steinbeck use the death of Candy\'s dog to explore key themes in the novel?',
    taskDescription:
      'Re-read the extract in which Carlson shoots Candy\'s dog. Write a close analysis of this extract (approximately 400 words), exploring how Steinbeck uses this episode to introduce or deepen the novel\'s themes. Consider: loneliness and companionship, powerlessness, foreshadowing of the ending, and the brutal logic of the ranch world.',
    timeAllowed: '40 minutes',
    marks: 20,
    markingFocus: [
      'Close analysis of specific language choices in the extract',
      'Identification of how the episode functions symbolically and thematically',
      'Recognition of foreshadowing and structural purpose',
      'Contextual relevance (the ranch as a place without sentimentality)',
      'Developed, paragraph-level analytical writing',
    ],
    modelResponsePoints: [
      'The clinical efficiency of Carlson\'s actions contrasts with Candy\'s silent grief, showing the ranch\'s emotional coldness',
      'Candy\'s powerlessness to save his dog foreshadows his powerlessness to protect his friendship with George and Lennie',
      'The detail of the other men\'s indifference emphasises the loneliness of the ranch world',
      'Steinbeck structures this scene as a miniature of the novel\'s ending: an act of "mercy" that destroys what is loved',
      'The dog represents all who are old, useless, or inconvenient in a world that values only utility',
    ],
  },
  {
    id: 'lit-omam-04',
    title: 'Theme Essay: Loneliness in "Of Mice and Men"',
    yearGroup: 'Year 11',
    subject: 'Literature - OMAM',
    type: 'extended-writing',
    examQuestion:
      'How does Steinbeck explore the theme of loneliness in "Of Mice and Men"?',
    taskDescription:
      'Write a thematic essay on loneliness, exploring how Steinbeck presents it as a defining feature of the ranch world and American society. Cover at least three characters (e.g. Crooks, Curley\'s wife, Candy) in addition to George and Lennie. Each paragraph should analyse specific language, link to context, and develop a clear argument about what Steinbeck is saying through this theme.',
    timeAllowed: '45 minutes',
    marks: 20,
    markingFocus: [
      'Sustained thematic argument from introduction to conclusion',
      'Evidence drawn from at least four characters',
      'Close language analysis supporting each point',
      'Contextual links (1930s isolation, race, gender, economic hardship)',
      'Understanding of Steinbeck\'s authorial purpose',
    ],
    modelResponsePoints: [
      'Loneliness is presented as structural, not personal: it is the product of a society organised around economic competition',
      'Crooks\'s chapter is the most explicit exploration of loneliness rooted in racial segregation',
      'Curley\'s wife is denied a name, reducing her to a type; her loneliness is tied to gender and powerlessness',
      'George and Lennie\'s companionship is remarkable precisely because it is so unusual on the ranch',
      'Steinbeck suggests that the American Dream itself produces loneliness by making individuals compete rather than cooperate',
    ],
  },
  {
    id: 'lit-omam-05',
    title: 'Essay Plan: George Milton -- Victim or Perpetrator?',
    yearGroup: 'Year 11',
    subject: 'Literature - OMAM',
    type: 'essay-plan',
    examQuestion:
      'To what extent is George Milton presented as a heroic figure in "Of Mice and Men"?',
    taskDescription:
      'Create a detailed essay plan for the above question. Your plan should include: a clear thesis stating your overall argument, a paragraph-by-paragraph outline with evidence and planned comment for each, consideration of the opposing view (George as selfish or complicit), and a conclusion that gives a nuanced, argued final judgement.',
    timeAllowed: '25 minutes',
    markingFocus: [
      'Clear and arguable thesis',
      'Balanced plan that explores heroic and questionable aspects of George',
      'Specific textual evidence noted for each planned paragraph',
      'Nuanced conclusion that avoids a simple yes/no answer',
    ],
    modelResponsePoints: [
      'Thesis: Steinbeck presents George as a flawed but ultimately compassionate figure whose final act is both heroic and tragic',
      'Paragraph 1: George\'s nurturing role -- evidence of patience and sacrifice',
      'Paragraph 2: George\'s frustration -- moments where he shows resentment of Lennie',
      'Paragraph 3: The shooting -- act of mercy or failure of responsibility?',
      'Conclusion: Heroism in the novel is redefined as the capacity to act with love in a world that punishes it',
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  LITERATURE - AN INSPECTOR CALLS (5 tasks)
  // ══════════════════════════════════════════════════════════════

  {
    id: 'lit-inspector-01',
    title: 'Theme Essay: Social Responsibility in "An Inspector Calls"',
    yearGroup: 'Year 11',
    subject: 'Literature - Inspector',
    type: 'extended-writing',
    examQuestion:
      'How does Priestley present the theme of social responsibility in "An Inspector Calls"?',
    taskDescription:
      'Write a thematic essay exploring how Priestley uses the Birling family\'s interaction with the Inspector to argue for collective social responsibility. Cover at least three characters or moments in the play. Consider: the Inspector\'s function as a voice of collective conscience, how different characters respond to responsibility, and Priestley\'s political purpose as a socialist writing in 1945.',
    timeAllowed: '45 minutes',
    marks: 20,
    markingFocus: [
      'Sustained thematic argument about social responsibility',
      'Analysis of dramatic techniques (stage directions, dialogue, dramatic irony)',
      'Coverage of multiple characters and their attitudes',
      'Strong contextual understanding: 1912 setting, 1945 writing, Priestley\'s socialism',
      'Evaluation of how Priestley uses the play as a didactic, persuasive text',
    ],
    modelResponsePoints: [
      'The Inspector is not a realistic detective but an allegorical figure representing collective conscience and socialist values',
      'Arthur Birling\'s speeches are deliberately presented as wrong -- dramatic irony for a 1945 audience who knew the Titanic sank and wars followed',
      'Sheila and Eric represent the possibility of change: the younger generation can accept responsibility',
      'Mrs Birling\'s denial of responsibility is presented as the most morally bankrupt position',
      'Priestley\'s 1945 context: writing for a post-war audience who had just created the welfare state; the play is an argument for collectivism',
    ],
  },
  {
    id: 'lit-inspector-02',
    title: 'Character Analysis: The Role of the Inspector',
    yearGroup: 'Year 11',
    subject: 'Literature - Inspector',
    type: 'extended-writing',
    examQuestion:
      'How does Priestley use the character of Inspector Goole to convey his key messages?',
    taskDescription:
      'Write an analytical essay on the Inspector as a dramatic and symbolic character. Explore: how the Inspector is presented through language and stage directions, the significance of his name ("Goole"/ghoul), whether he is a real person or a symbolic figure, and how he functions as Priestley\'s mouthpiece. Write four to five analytical paragraphs with close textual reference.',
    timeAllowed: '45 minutes',
    marks: 20,
    markingFocus: [
      'Understanding of the Inspector\'s allegorical and symbolic function',
      'Analysis of specific language used by and about the Inspector',
      'Engagement with the ambiguity of his identity',
      'Contextual understanding of Priestley\'s socialist purpose',
      'Discussion of dramatic techniques: lighting, entrances, exits, final speech',
    ],
    modelResponsePoints: [
      'The Inspector\'s name "Goole" suggests "ghoul" -- a spectral, supernatural figure rather than a real detective',
      'His certainty and control contrast sharply with the Birlings\' evasions, making him a figure of moral authority',
      'The final speech ("We are responsible for each other...") is openly didactic and serves as Priestley\'s direct address to the audience',
      'Stage directions describe him as creating "an impression of massiveness", suggesting he represents something larger than one man',
      'His disappearance raises the question: was he a ghost of the future, a conscience, or a test?',
    ],
  },
  {
    id: 'lit-inspector-03',
    title: 'Dramatic Technique: How Priestley Creates Tension',
    yearGroup: 'Year 11',
    subject: 'Literature - Inspector',
    type: 'close-reading',
    examQuestion:
      'How does Priestley create dramatic tension in "An Inspector Calls"? Refer to the whole play.',
    taskDescription:
      'Write a response exploring the dramatic techniques Priestley uses to create and sustain tension across the play. Consider: the Inspector\'s interrogation method, the progressive revelation of each character\'s guilt, the use of dramatic irony (Birling\'s speeches), the final phone call, and the staging (lighting changes, the single room, the unities of time and place).',
    timeAllowed: '40 minutes',
    marks: 20,
    markingFocus: [
      'Identification and analysis of dramatic techniques, not just character',
      'Understanding of how tension is built, released, and rebuilt across the play',
      'Reference to stage directions and theatrical effects',
      'Awareness of the play as a performance text, not just a literary one',
      'Coverage of moments from across the whole play',
    ],
    modelResponsePoints: [
      'The single set (the Birling dining room) creates claustrophobia and an inescapable sense of confrontation',
      'Priestley uses the Inspector\'s deliberate, methodical questioning to ratchet tension through each act',
      'Dramatic irony in Birling\'s opening speeches creates immediate tension for a post-1945 audience',
      'The progressive revelation structure means tension is renewed with each new character under scrutiny',
      'The final phone call shatters the temporary relief of Act 3 and reinstates the moral stakes',
    ],
  },
  {
    id: 'lit-inspector-04',
    title: 'Character Comparison: Sheila vs. Mrs Birling',
    yearGroup: 'Year 11',
    subject: 'Literature - Inspector',
    type: 'extended-writing',
    examQuestion:
      'Compare how Priestley presents the characters of Sheila and Mrs Birling in "An Inspector Calls".',
    taskDescription:
      'Write a comparative essay exploring how Priestley presents Sheila and Mrs Birling as contrasting moral figures. Use an integrated comparative structure. Explore: their initial attitudes, their responses to Eva Smith\'s story, their relationship to guilt and responsibility, and what each represents in terms of Priestley\'s argument about the possibility of social change.',
    timeAllowed: '45 minutes',
    marks: 20,
    markingFocus: [
      'Integrated comparative structure (not character by character)',
      'Close analysis of dialogue and stage directions for both characters',
      'Understanding of what each character represents symbolically',
      'Contextual awareness of gender roles and class in 1912 and 1945',
      'Clear argument about how the contrast serves Priestley\'s purpose',
    ],
    modelResponsePoints: [
      'Sheila is presented as initially complicit (the factory dismissal) but capable of moral growth',
      'Mrs Birling represents the complacency and moral blindness of the upper class at its most entrenched',
      'Sheila\'s self-criticism is in sharp contrast to Mrs Birling\'s self-justification',
      'Priestley uses Mrs Birling to demonstrate that privilege without empathy is morally corrupt',
      'Sheila is Priestley\'s model for a new generation that can build a more just society',
    ],
  },
  {
    id: 'lit-inspector-05',
    title: 'Essay Plan: Context and Purpose in "An Inspector Calls"',
    yearGroup: 'Year 11',
    subject: 'Literature - Inspector',
    type: 'essay-plan',
    examQuestion:
      'How does Priestley use the historical context of "An Inspector Calls" to convey his political message?',
    taskDescription:
      'Create a detailed essay plan exploring the dual context of the play (set in 1912, written in 1945). Your plan should include: a thesis connecting context to message, planned paragraphs on the significance of the 1912 setting (pre-war complacency, class hierarchy, gender inequality), the 1945 writing context (post-war socialism, welfare state, collective responsibility), and how the gap between the two dates is itself part of Priestley\'s argument.',
    timeAllowed: '25 minutes',
    markingFocus: [
      'Clear thesis connecting dual context to political purpose',
      'Evidence of understanding of both 1912 and 1945 contexts',
      'Plan shows how context is woven into analysis, not just listed separately',
      'Nuanced understanding of how dramatic irony relies on the audience\'s knowledge of history',
    ],
    modelResponsePoints: [
      'Thesis: Priestley uses the ironic gap between 1912 and 1945 to show that the complacency of the Edwardian elite led directly to the disasters of the following decades',
      'Para 1: Birling\'s optimism in 1912 (Titanic, no war) -- dramatic irony as the audience knows better',
      'Para 2: Class rigidity in 1912 -- Eva Smith as a casualty of a system that protected the wealthy',
      'Para 3: 1945 context -- audience had just built the welfare state; the play affirms their choice',
      'Conclusion: The play is both a warning about the past and a manifesto for the future',
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  LITERATURE - MACBETH (5 tasks)
  // ══════════════════════════════════════════════════════════════

  {
    id: 'lit-macbeth-01',
    title: 'Soliloquy Analysis: "Is this a dagger which I see before me"',
    yearGroup: 'Year 10',
    subject: 'Literature - Macbeth',
    type: 'close-reading',
    examQuestion:
      'How does Shakespeare present Macbeth\'s state of mind in the "Is this a dagger" soliloquy (Act 2, Scene 1)?',
    taskDescription:
      'Write a detailed analysis of the dagger soliloquy. Annotate the speech first, then write four to five analytical paragraphs. Consider: the imagery of the dagger and what it represents, the use of interrogatives and uncertainty, the soliloquy as a dramatic technique (direct access to Macbeth\'s psychology), the movement from hesitation to resolution, and the significance of darkness imagery.',
    timeAllowed: '45 minutes',
    marks: 20,
    markingFocus: [
      'Close analysis of specific language choices with quotation',
      'Understanding of the soliloquy as a form',
      'Exploration of psychological instability and moral crisis',
      'Engagement with imagery (dagger, blood, darkness)',
      'Contextual understanding of Jacobean ideas about hallucination and guilt',
    ],
    modelResponsePoints: [
      'The interrogative opening ("Is this a dagger...?") immediately signals Macbeth\'s psychological fracture',
      'The dagger as a hallucination suggests that Macbeth\'s ambition has begun to overwhelm his reason',
      'Darkness imagery ("witchcraft celebrates / Pale Hecate\'s offerings") connects Macbeth to the supernatural and evil',
      'The movement from questioning to certainty within the speech tracks his moral capitulation',
      'Jacobean context: audiences would have seen hallucinations as evidence of supernatural interference or moral corruption',
    ],
  },
  {
    id: 'lit-macbeth-02',
    title: 'Theme Essay: Ambition and Its Consequences in Macbeth',
    yearGroup: 'Year 10',
    subject: 'Literature - Macbeth',
    type: 'extended-writing',
    examQuestion:
      'How does Shakespeare explore the theme of ambition in "Macbeth"?',
    taskDescription:
      'Write a thematic essay on ambition in Macbeth, drawing on evidence from across the play. Explore: how ambition is presented as a virtue corrupted, the role of Lady Macbeth\'s ambition versus Macbeth\'s, the witches as catalysts of ambition, and the eventual consequences of unchecked ambition. Write four to five analytical paragraphs with close textual reference.',
    timeAllowed: '45 minutes',
    marks: 20,
    markingFocus: [
      'Sustained thematic argument across the whole play',
      'Close analysis of language with specific quotation',
      'Exploration of how ambition is gendered (Macbeth and Lady Macbeth)',
      'Engagement with the tragic form: ambition leads to destruction',
      'Contextual understanding of Jacobean values and the Chain of Being',
    ],
    modelResponsePoints: [
      'Shakespeare presents ambition as a natural quality that becomes monstrous when unchecked by moral restraint',
      'Macbeth\'s "vaulting ambition which o\'erleaps itself" is framed as the fatal flaw of a tragic hero',
      'Lady Macbeth\'s ambition is initially stronger and more ruthless, but she too is destroyed by it',
      'The witches do not create ambition in Macbeth -- they reveal and amplify what is already there',
      'Jacobean context: James I was fascinated by witchcraft; ambition that disrupted the natural order was seen as diabolical',
    ],
  },
  {
    id: 'lit-macbeth-03',
    title: 'Character Analysis: Lady Macbeth',
    yearGroup: 'Year 11',
    subject: 'Literature - Macbeth',
    type: 'extended-writing',
    examQuestion:
      'How does Shakespeare present the character of Lady Macbeth and how does she change throughout the play?',
    taskDescription:
      'Write a character essay tracing Lady Macbeth\'s transformation from dominant manipulator to guilt-ridden sleepwalker. Draw on evidence from Act 1, Act 2, and Act 5. Explore: her invocation speech, her manipulation of Macbeth before Duncan\'s murder, her fainting at the discovery of Duncan\'s body, and the sleepwalking scene. Consider what her arc reveals about Shakespeare\'s presentation of guilt and gender.',
    timeAllowed: '45 minutes',
    marks: 20,
    markingFocus: [
      'Chronological tracking of Lady Macbeth\'s change across the play',
      'Close analysis of key speeches (invocation, sleepwalking)',
      'Exploration of how gender informs Shakespeare\'s presentation',
      'Discussion of the theme of guilt and its physical manifestations',
      'Contextual understanding of Jacobean attitudes to women and power',
    ],
    modelResponsePoints: [
      'The invocation speech ("unsex me here") reveals Lady Macbeth\'s desire to reject femininity in pursuit of power',
      'She controls Macbeth through emotional manipulation, questioning his masculinity to override his hesitation',
      'The fainting at Duncan\'s murder may be genuine shock or performance -- Shakespeare leaves this deliberately ambiguous',
      'The sleepwalking scene is a complete reversal: she who urged Macbeth to wash away guilt is consumed by it',
      'Jacobean context: a woman with political power was deeply transgressive; her destruction "restores" natural order',
    ],
  },
  {
    id: 'lit-macbeth-04',
    title: 'Context Question: Jacobean Context and Macbeth',
    yearGroup: 'Year 11',
    subject: 'Literature - Macbeth',
    type: 'research',
    taskDescription:
      'Research and write a 350-word contextual overview of how Jacobean beliefs and politics shaped Macbeth. Cover: (1) King James I\'s interest in witchcraft and "Daemonologie", (2) the Divine Right of Kings and the moral significance of regicide, (3) the Gunpowder Plot (1605) and its relevance to themes of treachery, (4) the Great Chain of Being and natural order. For each context point, note one specific connection to the play.',
    timeAllowed: '35 minutes',
    markingFocus: [
      'Accuracy and depth of contextual knowledge',
      'Clear and relevant connection between each context point and the play',
      'Understanding that context shapes meaning, not just background',
      'Evidence of wider reading and independent research',
    ],
    modelResponsePoints: [
      'James I wrote "Daemonologie" (1597); Shakespeare\'s witches are a direct compliment to the King\'s beliefs',
      'The Divine Right of Kings meant regicide was not just murder but a cosmic crime; this explains Macbeth\'s psychological disintegration',
      'The Gunpowder Plot (1605) made treachery against the king a live political anxiety; Macbeth spoke directly to this fear',
      'The Great Chain of Being: Macbeth\'s murder of Duncan disrupts the natural order, which is reflected in unnatural events (horses eating each other)',
      'Writing for James I shaped the play\'s conservative political message: order must be restored',
    ],
  },
  {
    id: 'lit-macbeth-05',
    title: 'Essay Plan: Macbeth as a Tragic Hero',
    yearGroup: 'Year 11',
    subject: 'Literature - Macbeth',
    type: 'essay-plan',
    examQuestion:
      'To what extent is Macbeth presented as a tragic hero in Shakespeare\'s play?',
    taskDescription:
      'Create a detailed essay plan for the above question. Your plan should include: a definition of the tragic hero form (Aristotelian hamartia, hubris, peripeteia, catharsis), a clear thesis arguing your overall view, a paragraph-by-paragraph outline, planned evidence for each point, consideration of the counterargument (Macbeth as a straightforward villain), and a nuanced conclusion.',
    timeAllowed: '25 minutes',
    markingFocus: [
      'Accurate understanding of the tragic hero concept',
      'Clear thesis that directly answers "to what extent"',
      'Balanced plan that considers both heroic and villainous aspects',
      'Evidence planned from across the whole play',
      'Conclusion that offers a nuanced final judgement',
    ],
    modelResponsePoints: [
      'Definition: a tragic hero is a great person undone by a fatal flaw (hamartia), resulting in suffering that produces audience catharsis',
      'Thesis: Macbeth fits the tragic hero mould in structure but challenges it morally, as his crimes are too deliberate to be entirely sympathetic',
      'Para 1: Macbeth\'s heroic status established before the fall -- "brave Macbeth", "valiant cousin"',
      'Para 2: Hamartia as ambition -- but is he driven by fate, free will, or manipulation?',
      'Para 3: The point of no return (Banquo\'s murder) -- Macbeth moves from reluctant killer to tyrant',
      'Conclusion: Shakespeare presents Macbeth as more complex than a classical tragic hero -- he is partly villain, which makes his fall both inevitable and earned',
    ],
  },
]
