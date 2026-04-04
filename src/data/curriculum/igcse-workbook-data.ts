// =============================================================================
// Edexcel IGCSE English Language & Literature — Workbook & Homework Data
// Years 10-11
// Papers / Texts:
//   Lang P1  | Lang P2  | Lit Poetry | Lit OMAM
//   Lit An Inspector Calls | Lit Macbeth
// =============================================================================

export interface WorkbookExercise {
  id: string;
  title: string;
  yearGroup: 'Year 10' | 'Year 11';
  termUnit: string;
  type:
    | 'comprehension'
    | 'language-analysis'
    | 'comparison'
    | 'essay-practice'
    | 'close-reading'
    | 'timed-response'
    | 'annotation'
    | 'evaluation';
  difficulty: 'foundation' | 'developing' | 'secure' | 'mastery';
  instructions: string[];
  estimatedTime: string;
  linkedObjectives: string[];
  modelAnswer: string;
  extension: string;
}

export interface HomeworkTask {
  id: string;
  title: string;
  yearGroup: 'Year 10' | 'Year 11';
  termUnit: string;
  type:
    | 'comprehension'
    | 'language-analysis'
    | 'comparison'
    | 'essay-practice'
    | 'close-reading'
    | 'timed-response'
    | 'annotation'
    | 'evaluation';
  difficulty: 'foundation' | 'developing' | 'secure' | 'mastery';
  instructions: string[];
  estimatedTime: string;
  linkedObjectives: string[];
  modelAnswer: string;
  extension: string;
}

// =============================================================================
// LANGUAGE PAPER 1 — Reading Non-Fiction & Media Texts (5 exercises)
// =============================================================================

const langP1Exercises: WorkbookExercise[] = [
  {
    id: 'igcse-langp1-ex01',
    title: 'Retrieval Practice: Identifying Explicit Information',
    yearGroup: 'Year 10',
    termUnit: 'Lang P1: Reading Non-Fiction',
    type: 'comprehension',
    difficulty: 'foundation',
    instructions: [
      'Read the provided non-fiction extract carefully (approximately 500 words).',
      'Using only information from the first ten lines, list FOUR things the writer tells you explicitly. Write each point as a separate sentence in your own words.',
      'Do not copy phrases verbatim; paraphrase to show understanding.',
      'Aim to spend no more than 8 minutes on this task.',
    ],
    estimatedTime: '10 minutes',
    linkedObjectives: ['IGCSE.Lang.AO1', 'IGCSE.Lang.R1'],
    modelAnswer:
      'A strong response will identify four discrete, accurate points drawn from the correct lines. Each point should be expressed in the student\'s own words and should not repeat another point. For example, given an extract about Arctic exploration: (1) temperatures in the region regularly fell below minus forty degrees Celsius; (2) the explorers relied on sledges pulled by dogs to cross the ice; (3) food rations were calculated precisely to avoid waste; (4) darkness lasted for up to twenty hours per day during winter. Full marks require four distinct, relevant, and accurate points with no significant copying.',
    extension:
      'Now rank your four points from most to least significant for understanding the writer\'s main message. Justify your ranking in a single sentence.',
  },
  {
    id: 'igcse-langp1-ex02',
    title: 'Inference Building: Reading Between the Lines',
    yearGroup: 'Year 10',
    termUnit: 'Lang P1: Reading Non-Fiction',
    type: 'comprehension',
    difficulty: 'developing',
    instructions: [
      'Read the full extract provided.',
      'Write three inference statements using the sentence starter: "I can infer that ... because the writer says ... which suggests ...".',
      'Each inference must go beyond what is explicitly stated and show deeper understanding of the writer\'s meaning.',
      'For each inference, explain what the evidence implies rather than just repeating it.',
    ],
    estimatedTime: '15 minutes',
    linkedObjectives: ['IGCSE.Lang.AO1', 'IGCSE.Lang.R2'],
    modelAnswer:
      'A strong response moves clearly beyond surface retrieval. For example: "I can infer that the author feels a deep sense of loss because she describes the old building as having \'empty eyes for windows\', which suggests she perceives the structure as a living thing that has been robbed of its spirit." Each inference should identify an implication not directly stated, link it to specific language from the text, and explain the connection. Weaker responses tend to paraphrase rather than infer, or they identify what the writer says without explaining what it implies.',
    extension:
      'Choose one of your three inferences and develop it into a full PEE (Point, Evidence, Explanation) paragraph of at least 80 words.',
  },
  {
    id: 'igcse-langp1-ex03',
    title: 'Language Analysis: Writer\'s Craft (Q4 Style)',
    yearGroup: 'Year 10',
    termUnit: 'Lang P1: Reading Non-Fiction',
    type: 'language-analysis',
    difficulty: 'secure',
    instructions: [
      'Re-read the highlighted paragraph in the extract.',
      'Analyse how the writer uses language to create a particular effect. You should comment on: word choices and connotations; figurative language (metaphor, simile, personification); sentence structure and rhythm; any other language technique you notice.',
      'Write two well-developed analytical paragraphs. Each should use the structure: Technique -> Quotation -> Effect on reader -> Writer\'s purpose.',
      'Aim for at least 150 words in total.',
    ],
    estimatedTime: '20 minutes',
    linkedObjectives: ['IGCSE.Lang.AO2', 'IGCSE.Lang.R3'],
    modelAnswer:
      'A mastery-level response identifies specific, named techniques and analyses their cumulative effect rather than treating each device in isolation. For example: "The writer\'s use of the metaphor \'the city was a furnace\' not only conveys intense heat but frames the urban environment as something industrial and consuming, stripping it of human warmth. The connotations of a furnace -- destruction, relentless energy, the erasure of raw material -- suggest the writer views urban life as dehumanising. This idea is reinforced by the following short, declarative sentence \'Nobody noticed.\', whose abruptness mirrors the indifference of modern society." A strong response avoids feature-spotting and instead explains how language constructs meaning and positions the reader.',
    extension:
      'Identify one additional technique not mentioned in your paragraphs and explain in three sentences how it contributes to the overall effect of the passage.',
  },
  {
    id: 'igcse-langp1-ex04',
    title: 'Evaluation: How Effectively Has the Writer Achieved Their Purpose? (Q5 Style)',
    yearGroup: 'Year 11',
    termUnit: 'Lang P1: Reading Non-Fiction',
    type: 'evaluation',
    difficulty: 'mastery',
    instructions: [
      'Read the full extract and the statement provided below it.',
      'Write a response evaluating how effectively the writer conveys their point of view. You should: agree with the statement and provide supporting evidence; challenge the statement with counter-evidence; come to a balanced, reasoned conclusion.',
      'Use the word "effectively" somewhere in each paragraph to keep your focus on evaluation rather than analysis.',
      'Write approximately 250 words.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lang.AO3', 'IGCSE.Lang.R4'],
    modelAnswer:
      'A top-band response moves fluidly between agreement, qualification, and challenge, demonstrating that evaluation involves judgement, not just identification. For example: "The writer is highly effective in conveying a sense of injustice in the opening paragraph, where the list of grievances accumulates rapidly to overwhelm the reader with evidence. However, the effectiveness diminishes in the final section, where the shift to personal anecdote undermines the measured tone established earlier and risks alienating readers who prefer factual argument. Overall, the writer succeeds in persuading the reader of the problem\'s seriousness, though the emotional appeal is occasionally overdone, weakening the piece\'s credibility." Responses at mastery level support every evaluative claim with textual evidence and explain why a technique does or does not work.',
    extension:
      'Write a paragraph explaining what the writer could have done differently in one section to make their argument more persuasive.',
  },
  {
    id: 'igcse-langp1-ex05',
    title: 'Full Paper Timed Practice: Reading Section',
    yearGroup: 'Year 11',
    termUnit: 'Lang P1: Reading Non-Fiction',
    type: 'timed-response',
    difficulty: 'mastery',
    instructions: [
      'You have 1 hour to complete this timed practice under exam conditions.',
      'Read the source text carefully before attempting any questions.',
      'Q1 (4 marks, 8 mins): List four things you learn about the subject from the first paragraph.',
      'Q2 (8 marks, 12 mins): How does the writer use language to convey their attitude? Write two analytical paragraphs.',
      'Q3 (8 marks, 12 mins): How does the structure of the text support the writer\'s purpose?',
      'Q4 (20 marks, 28 mins): Evaluate how effectively the writer presents their viewpoint. Refer to the given statement.',
      'Leave 5 minutes at the end to check and annotate your responses.',
    ],
    estimatedTime: '60 minutes',
    linkedObjectives: ['IGCSE.Lang.AO1', 'IGCSE.Lang.AO2', 'IGCSE.Lang.AO3', 'IGCSE.Lang.R1', 'IGCSE.Lang.R2', 'IGCSE.Lang.R3', 'IGCSE.Lang.R4'],
    modelAnswer:
      'A full timed practice should be marked using the Edexcel mark scheme bands. Q1: four discrete, accurate, paraphrased points (1 mark each). Q2: two paragraphs identifying technique, embedding quotation, and explaining effect on the reader -- higher bands require analysis of connotation and purpose. Q3: structural comments should address: how the opening establishes tone, how the text develops or shifts focus, how the ending resolves or leaves the reader. Q4: evaluation must be balanced, citing both effective and less effective elements, with a reasoned conclusion. Feedback should focus on the band descriptors for each question rather than a simple total.',
    extension:
      'After your work has been marked, write a target-setting comment: identify one specific thing to improve in Q4 responses and explain how you will practise it.',
  },
];

// =============================================================================
// LANGUAGE PAPER 2 — Transactional & Descriptive Writing (5 exercises)
// =============================================================================

const langP2Exercises: WorkbookExercise[] = [
  {
    id: 'igcse-langp2-ex01',
    title: 'Article Writing: Structuring a Persuasive Argument',
    yearGroup: 'Year 10',
    termUnit: 'Lang P2: Transactional Writing',
    type: 'essay-practice',
    difficulty: 'developing',
    instructions: [
      'You are writing an article for your school magazine arguing that social media does more harm than good to young people.',
      'Plan your article before writing: identify your three main arguments and a counter-argument you will address.',
      'Include: a headline and sub-heading; an engaging opening; at least one rhetorical device per paragraph (rhetorical question, rule of three, direct address, anecdote, statistics); a conclusion that returns to your opening idea.',
      'Write approximately 350-400 words.',
    ],
    estimatedTime: '30 minutes',
    linkedObjectives: ['IGCSE.Lang.AO4', 'IGCSE.Lang.W1', 'IGCSE.Lang.W2'],
    modelAnswer:
      'A secure response will have a clear structure with an engaging, hook-driven opening, logically sequenced paragraphs that build toward a conclusion, and a consistent persuasive register. Rhetorical devices should be purposeful rather than mechanical -- a rhetorical question, for example, should be followed by an answer that advances the argument rather than left floating. A mastery response integrates counter-argument effectively, showing awareness of a wider debate, and uses varied sentence structures and precise vocabulary. The conclusion should feel conclusive rather than simply restating the introduction.',
    extension:
      'Rewrite your opening paragraph targeting a different audience -- parents rather than students. Note three specific changes you make and explain why.',
  },
  {
    id: 'igcse-langp2-ex02',
    title: 'Speech Writing: Formal Address to a School Assembly',
    yearGroup: 'Year 10',
    termUnit: 'Lang P2: Transactional Writing',
    type: 'essay-practice',
    difficulty: 'secure',
    instructions: [
      'Write a speech to be delivered at a whole-school assembly arguing that students should have more say in how their school is run.',
      'Use the conventions of a formal speech: direct address to your audience, acknowledgement of your role as a speaker, a clear call to action at the end.',
      'Include at least THREE of the following: anaphora, rhetorical question, emotive language, personal anecdote, statistical evidence, rule of three.',
      'Write approximately 350-400 words. Consider pacing and pauses in your sentence structure.',
    ],
    estimatedTime: '35 minutes',
    linkedObjectives: ['IGCSE.Lang.AO4', 'IGCSE.Lang.W1', 'IGCSE.Lang.W3'],
    modelAnswer:
      'A strong speech will open with a direct address ("Good morning, students, teachers, and governors") and immediately establish the speaker\'s credibility and purpose. The argument should be sequenced so that it builds toward an emotional peak before the call to action. Anaphora ("We are told... We are expected... We are trusted -- but only up to a point") creates rhetorical power when used correctly. The call to action must be specific and achievable, not vague. Top-band responses feel genuinely spoken rather than written, using contractions, short sentences for emphasis, and asides that acknowledge the audience\'s likely responses.',
    extension:
      'Write a brief director\'s note explaining where in your speech you would pause, raise your voice, or use gesture, and why these performance choices reinforce your argument.',
  },
  {
    id: 'igcse-langp2-ex03',
    title: 'Letter Writing: Formal Letter of Complaint',
    yearGroup: 'Year 10',
    termUnit: 'Lang P2: Transactional Writing',
    type: 'essay-practice',
    difficulty: 'developing',
    instructions: [
      'Write a formal letter of complaint to the manager of a local sports centre about the poor state of its facilities.',
      'Use correct formal letter conventions: your address (top right), date, recipient\'s address (left), formal salutation, sign-off.',
      'Include: a clear statement of your complaint in the opening paragraph; specific evidence and examples in the body; a reasonable request for action in the conclusion.',
      'Maintain a formal, measured tone throughout. Avoid aggressive language -- controlled displeasure is more persuasive than anger.',
      'Write approximately 300 words.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lang.AO4', 'IGCSE.Lang.W1', 'IGCSE.Lang.W4'],
    modelAnswer:
      'A well-structured letter will open with a clear statement of purpose ("I am writing to express my concern regarding the current state of..."), provide two or three specific complaints with examples, and close with a specific, polite request for action and a deadline. Register must remain formal throughout: "I would appreciate" rather than "I want"; "the facilities leave much to be desired" rather than "the facilities are terrible." A mastery response shows control of the formal epistolary register without sounding stilted, and the ending avoids the common error of threatening legal action or using inflammatory language.',
    extension:
      'Now write the manager\'s reply (150 words), responding formally to at least two of the complaints raised. Consider how much the manager should concede and what language they would use.',
  },
  {
    id: 'igcse-langp2-ex04',
    title: 'Narrative Writing: A Compelling Opening',
    yearGroup: 'Year 11',
    termUnit: 'Lang P2: Transactional Writing',
    type: 'essay-practice',
    difficulty: 'secure',
    instructions: [
      'Write the opening of a story (approximately 250-300 words) that begins with the line: "The door had been locked for twenty years."',
      'Your opening must: establish a clear setting using sensory detail; introduce a narrator or protagonist whose voice is distinctive; create a sense of mystery or tension that makes the reader want to continue.',
      'Vary your sentence structure deliberately: use at least one short, punchy sentence for impact; one sentence using a list for descriptive effect; one complex sentence with a subordinate clause.',
      'Do NOT resolve any tension in the opening -- leave the reader with questions.',
    ],
    estimatedTime: '30 minutes',
    linkedObjectives: ['IGCSE.Lang.AO5', 'IGCSE.Lang.W5'],
    modelAnswer:
      'A strong narrative opening immediately establishes a sense of place and voice. The given first line creates an air of mystery, and a successful response will build on this rather than immediately explaining it. Sensory detail should be specific and purposeful -- not a generic list of sights, sounds, and smells but details that contribute to the atmosphere. The narrator\'s voice should feel consistent: if first person, the diction and syntax should reveal character; if third person limited, the reader should be positioned close to one character\'s perspective. Top-band responses use structural choices consciously: a short sentence after a long description creates impact; repetition can create an incantatory or obsessive tone; sentence fragments can mimic thought or fragmented memory.',
    extension:
      'Write a brief craft commentary (100 words) explaining three specific language or structural choices you made and the effect you intended each to have.',
  },
  {
    id: 'igcse-langp2-ex05',
    title: 'Report Writing: Formal Report for a Specific Audience',
    yearGroup: 'Year 11',
    termUnit: 'Lang P2: Transactional Writing',
    type: 'essay-practice',
    difficulty: 'mastery',
    instructions: [
      'Write a report for your head teacher on the results of a survey conducted among Year 10 students about their reading habits.',
      'Use report conventions: title, subheadings (e.g. Introduction, Findings, Recommendations), bullet points or numbered lists for data, a formal impersonal register.',
      'Include invented but plausible statistics (e.g. "62% of students reported reading fewer than 30 minutes per week").',
      'Make three clear, specific recommendations in your conclusion. Each should be actionable.',
      'Write approximately 350 words.',
    ],
    estimatedTime: '30 minutes',
    linkedObjectives: ['IGCSE.Lang.AO4', 'IGCSE.Lang.W1', 'IGCSE.Lang.W6'],
    modelAnswer:
      'A well-structured report uses consistent formatting and a precise, impersonal register throughout ("The data indicates..." rather than "I think..."). The Introduction should state the report\'s purpose and scope. Findings should be presented objectively, using invented data coherently and not contradicting earlier figures. Recommendations must be specific and grounded in the findings -- "the school should purchase more fiction titles for the library" is better than "students should read more." Top-band responses demonstrate awareness that a report is functional writing: clarity and structure matter as much as style, and the recommendations section is where the writer\'s analytical thinking is most visible.',
    extension:
      'Identify one section of your report where the register slips from formal to informal. Rewrite that section correcting the register and explain what you changed.',
  },
];

// =============================================================================
// LITERATURE — POETRY (5 exercises)
// =============================================================================

const litPoetryExercises: WorkbookExercise[] = [
  {
    id: 'igcse-poetry-ex01',
    title: 'Single Poem Analysis: Structure and Voice',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Poetry Anthology',
    type: 'close-reading',
    difficulty: 'developing',
    instructions: [
      'Select one poem from the Edexcel IGCSE anthology that you have studied.',
      'Write a close-reading analysis of the poem covering: the poem\'s form and structure (stanzas, line length, rhyme scheme if present); the speaker\'s voice and tone; two key language techniques with their effects; the central theme or message.',
      'Use at least three embedded quotations.',
      'Write approximately 250 words.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.P1'],
    modelAnswer:
      'A strong analysis begins by identifying the poem\'s form and explaining how it serves the meaning -- for example, noting that a fragmented structure reflects a fragmented emotional state, or that a regular rhyme scheme creates irony when the content is disturbing. The speaker\'s tone should be described with precision: "melancholic" rather than "sad"; "bitterly ironic" rather than "sarcastic." Language technique analysis should move beyond naming to explanation of effect on the reader and how the technique constructs meaning. A developing response identifies techniques accurately; a secure response analyses their effect; a mastery response considers their cumulative impact and the poet\'s overall purpose.',
    extension:
      'Write a further paragraph linking the poem to its biographical or historical context. Explain how knowing this context deepens your understanding of the poem.',
  },
  {
    id: 'igcse-poetry-ex02',
    title: 'Comparison Paragraph: Two Poems on a Shared Theme',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Poetry Anthology',
    type: 'comparison',
    difficulty: 'secure',
    instructions: [
      'Choose two poems from the anthology that share a theme (e.g. identity, conflict, love, loss, nature).',
      'Write ONE comparison paragraph that: opens with a comparative topic sentence naming both poems and the shared theme; uses at least one quotation from each poem; includes a connective of comparison (similarly, in contrast, whereas, both poets...).',
      'Your paragraph should analyse HOW each poet treats the theme differently or similarly, not just WHAT each poem is about.',
      'Aim for 120-150 words.',
    ],
    estimatedTime: '20 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.P2'],
    modelAnswer:
      'A well-constructed comparison paragraph integrates both poems throughout rather than discussing one fully before the other. A strong topic sentence might read: "Both Poem A and Poem B explore the theme of loss, though while Poem A presents grief as an isolating internal experience, Poem B frames it as a communal and outward act of mourning." The body of the paragraph should then substantiate this claim with evidence from both poems. Top-band responses use connectives of comparison to weave between poems naturally and analyse technique rather than simply noting similarities or differences. The paragraph should end with a comment on the poets\' differing purposes or contexts, not just their different language choices.',
    extension:
      'Now plan a full comparison essay on the same two poems. Write a thesis statement and one sentence for each of your planned body paragraphs.',
  },
  {
    id: 'igcse-poetry-ex03',
    title: 'Unseen Poem Annotation',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Poetry Anthology',
    type: 'annotation',
    difficulty: 'developing',
    instructions: [
      'Read the unseen poem provided carefully (read it at least twice before annotating).',
      'On the printed copy, annotate the poem as follows: circle or underline 4-6 key language techniques; note the effect of each technique in the margin; identify the volta or turning point if there is one; note any patterns you observe (repetition, contrast, development of an image).',
      'After annotating, write a brief paragraph (60-80 words) summarising what you think the poem is about and what the poet\'s attitude to their subject is.',
    ],
    estimatedTime: '20 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.P3'],
    modelAnswer:
      'Strong annotation identifies techniques precisely (e.g. "extended metaphor of warfare throughout stanza 2") and records the effect in terms of the reader\'s emotional response or understanding of meaning, not just what the technique does in abstract. Identifying the volta is a key skill: students should note not just where the shift occurs but how it changes the poem\'s meaning or the speaker\'s tone. The summary paragraph should commit to a reading of the poem rather than hedging -- "I think this poem might possibly be about..." is weaker than "This poem explores the tension between..."',
    extension:
      'Write a full analytical paragraph on the most effective technique you identified in your annotations, explaining why you find it the most significant.',
  },
  {
    id: 'igcse-poetry-ex04',
    title: 'Anthology Overview: Themes and Groupings',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Poetry Anthology',
    type: 'comprehension',
    difficulty: 'foundation',
    instructions: [
      'Complete the anthology grid below by naming one poem from the anthology for each theme listed: identity; conflict; nature; loss; power; memory.',
      'For each poem you name, write one sentence explaining why it fits that theme, supported by a brief quotation.',
      'Then choose ONE theme and list THREE poems that deal with it. Rank them in order of how powerfully you think each poem treats the theme, and give a reason for your ranking.',
    ],
    estimatedTime: '20 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.P4'],
    modelAnswer:
      'This consolidation task tests breadth of anthology knowledge. A strong response will correctly match poems to themes with accurate, relevant quotation support. The ranking task invites evaluative thinking: students should articulate why they consider one poem more powerful than another (e.g. structural choices, emotional impact, language density, universality of theme) rather than simply expressing personal preference. Accept any well-argued ranking provided it is supported with textual evidence. The goal is confident, independent engagement with the anthology as a whole.',
    extension:
      'Write a paragraph arguing for a poem that could belong to TWO different theme groups. Explain how it fits both and whether its meaning changes depending on which lens you apply.',
  },
  {
    id: 'igcse-poetry-ex05',
    title: 'Timed Poetry Comparison Essay',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Poetry Anthology',
    type: 'timed-response',
    difficulty: 'mastery',
    instructions: [
      'You have 45 minutes to write a full comparison essay on the following question: "Compare how two poets present the idea of conflict. Refer to two poems from your anthology."',
      'Spend 5 minutes planning: choose your two poems, identify your thesis, and note 3-4 comparison points.',
      'Write your essay (approximately 600 words): include an introduction with a clear thesis; 3-4 comparative paragraphs each making a distinct point; a conclusion that synthesises your argument.',
      'Use comparative connectives throughout and embed quotations accurately.',
    ],
    estimatedTime: '45 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3', 'IGCSE.Lit.P2', 'IGCSE.Lit.P5'],
    modelAnswer:
      'A timed comparison essay is marked across three AOs: AO1 (personal response and interpretation), AO2 (language, form, and structure analysis), AO3 (context). A Band 5 response will sustain a clear, well-evidenced comparative argument throughout; analyse language with precision and insight; integrate context naturally rather than bolting it on at the end; and demonstrate an individual, confident reading of both poems. Common weaknesses in timed conditions include: abandoning the comparison structure under time pressure; reverting to feature-spotting instead of analysis; neglecting the conclusion. Peer mark against the Edexcel band descriptors and identify the single most important improvement for next time.',
    extension:
      'After your essay is marked, rewrite your weakest paragraph incorporating the feedback. Write one sentence explaining what you changed and why it improves the response.',
  },
];

// =============================================================================
// LITERATURE — OF MICE AND MEN (5 exercises)
// =============================================================================

const litOMAMExercises: WorkbookExercise[] = [
  {
    id: 'igcse-omam-ex01',
    title: 'Context Research Task: 1930s California',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Of Mice and Men',
    type: 'comprehension',
    difficulty: 'foundation',
    instructions: [
      'Research the following contextual topics and write 2-3 sentences of notes on each: the Great Depression (1929-1939); the Dust Bowl and its impact on migrant workers; racial segregation in 1930s America; the experiences of disabled or mentally different individuals in this period.',
      'For each topic, note one way the historical context is reflected in Steinbeck\'s novel with a brief quotation as evidence.',
      'Use your notes to answer this question in a paragraph: why does Steinbeck set the novel among itinerant ranch workers?',
    ],
    estimatedTime: '30 minutes',
    linkedObjectives: ['IGCSE.Lit.AO3', 'IGCSE.Lit.O1'],
    modelAnswer:
      'Strong contextual notes will accurately explain the Great Depression as a period of mass unemployment following the 1929 Wall Street Crash, with migrant workers travelling between ranches in search of seasonal work and rarely earning enough to achieve stability. The Dust Bowl destroyed farming in Oklahoma, Texas, and surrounding states, driving families west to California. Racial segregation manifested on the ranch through Crooks\'s enforced separation in the harness room. Steinbeck chose itinerant workers because their transience and powerlessness embody the novel\'s central themes of loneliness and the destruction of dreams. A strong contextual paragraph integrates historical fact with textual reference: "Steinbeck presents the ranch as a microcosm of 1930s America, where the powerful (Curley, Curley\'s wife) exploit the vulnerable (Lennie, Crooks, Candy) with impunity."',
    extension:
      'Find one additional historical fact about 1930s California not covered in the notes and write a paragraph explaining how it adds to your understanding of the novel.',
  },
  {
    id: 'igcse-omam-ex02',
    title: 'Character Analysis Paragraph: Lennie Small',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Of Mice and Men',
    type: 'close-reading',
    difficulty: 'developing',
    instructions: [
      'Write one analytical paragraph on how Steinbeck presents Lennie Small as both powerful and vulnerable.',
      'Your paragraph must include: a topic sentence that makes a clear argument; at least two embedded quotations with analysis; a comment on Steinbeck\'s purpose in constructing Lennie this way.',
      'Consider: Steinbeck\'s use of animal imagery; the contrast between Lennie\'s physical size and his childlike mind; how other characters treat Lennie; what Lennie represents thematically.',
      'Aim for 120-150 words.',
    ],
    estimatedTime: '20 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.O2'],
    modelAnswer:
      'A strong analytical paragraph might read: "Steinbeck presents Lennie as simultaneously threatening and pitiable through persistent animal imagery. Described as moving \'the way a bear drags his paws\', Lennie\'s physical bulk is coded as natural, instinctive force rather than human aggression -- he is not cruel, merely powerful beyond his comprehension. Yet his habit of petting soft things to death, from mice to Curley\'s wife, reveals that his innocence is inseparable from his danger. Steinbeck uses Lennie to explore how a society that makes no provision for those who are different will inevitably destroy them: Lennie is not a villain but a victim of a world that has no place for him." This paragraph integrates quotation, analysis, and purpose within a single fluent argument.',
    extension:
      'Now write a second paragraph on Lennie focusing on the dream of the farm. Explore what the dream represents and why Lennie\'s attachment to it is significant.',
  },
  {
    id: 'igcse-omam-ex03',
    title: 'Theme Essay Plan: Loneliness and Isolation',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Of Mice and Men',
    type: 'essay-practice',
    difficulty: 'secure',
    instructions: [
      'Plan a full essay in response to the question: "How does Steinbeck present loneliness in Of Mice and Men?"',
      'Your plan must include: a thesis statement (one sentence summarising your overall argument); a plan for at least four body paragraphs, each covering a different character or aspect of loneliness (e.g. Crooks, Candy, Curley\'s wife, the itinerant workers as a group); for each paragraph, note one key quotation and the main point you will make; a planned conclusion that goes beyond summarising.',
      'Write the plan in bullet-point form. You do not need to write the full essay for this task.',
    ],
    estimatedTime: '20 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO3', 'IGCSE.Lit.O3'],
    modelAnswer:
      'A strong essay plan will have a thesis that makes a specific argument rather than a description: "Steinbeck presents loneliness not as an individual failing but as the inevitable product of a dehumanising economic system that prevents meaningful human connection" is stronger than "Loneliness is a key theme in the novel." Each paragraph plan should link a character\'s loneliness to the wider social context (race, gender, age, disability) and identify a specific quotation. The conclusion plan should synthesise across characters -- noting that all forms of loneliness in the novel stem from the same root cause -- and perhaps link to Steinbeck\'s own statement of purpose or the novel\'s title.',
    extension:
      'Using your plan, write the introduction and one body paragraph in full. Aim for the introduction to be 80 words and the body paragraph to be 150 words.',
  },
  {
    id: 'igcse-omam-ex04',
    title: 'Extract Analysis: The Death of Candy\'s Dog',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Of Mice and Men',
    type: 'close-reading',
    difficulty: 'secure',
    instructions: [
      'Re-read the extract in which Carlson shoots Candy\'s dog (Chapter 3).',
      'Analyse how Steinbeck uses the extract to develop themes and foreshadow the novel\'s ending. You should comment on: how Candy reacts and what this reveals; the other characters\' responses and what they suggest about ranch culture; how Steinbeck uses silence and atmosphere; what this scene foreshadows about Lennie\'s fate.',
      'Write two analytical paragraphs, each 100-120 words.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.O4'],
    modelAnswer:
      'A strong response notes that Candy\'s passivity -- "I ought to of shot that dog myself... I shouldn\'t ought to of let no stranger shoot my dog" -- directly foreshadows George\'s decision to shoot Lennie at the novel\'s end. Both the dog and Lennie are old (or in Lennie\'s case, childlike and dependent), both are incapable of survival without their protectors, and both are killed by those who love them because the world offers no alternative. Steinbeck uses the oppressive silence of the bunkhouse after the shot to enact the workers\' emotional suppression: they cannot express grief. A mastery response identifies this as a structural echo and argues that Steinbeck uses it to frame the ending as mercy rather than murder.',
    extension:
      'Write a paragraph comparing how Steinbeck uses the deaths of minor characters (Curley\'s wife, Candy\'s dog) to develop the novel\'s central message about power and powerlessness.',
  },
  {
    id: 'igcse-omam-ex05',
    title: 'Timed Essay: Character and Theme',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Of Mice and Men',
    type: 'timed-response',
    difficulty: 'mastery',
    instructions: [
      'You have 45 minutes to answer the following question: "How does Steinbeck present the character of Crooks and what does he represent in the novel?"',
      'Spend 5 minutes planning: identify your thesis; plan 3-4 paragraphs; note one key quotation per paragraph.',
      'Write your essay (approximately 600 words), covering: Crooks\'s characterisation through language and behaviour; the role of racial segregation in his isolation; his relationship to the dream of the farm; what Steinbeck intends the reader to understand through Crooks.',
      'End with a conclusion that makes an overall argument rather than summarising.',
    ],
    estimatedTime: '45 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3', 'IGCSE.Lit.O2', 'IGCSE.Lit.O5'],
    modelAnswer:
      'A Band 5 essay on Crooks will situate him within the racial context of 1930s America while maintaining close textual analysis. Key points include: the harness room as a symbol of enforced segregation and Crooks\'s bitter pride in having his own space; his intellectual superiority over the other ranch hands and his use of Lennie\'s vulnerability to explore the pain of his own isolation; his momentary engagement with the dream of the farm before cynically withdrawing; and the cruel irony that in 1930s America, even the most oppressed character cannot sustain hope. A strong conclusion might argue that Steinbeck uses Crooks to show how systemic racism compounds every other form of marginalisation in the novel.',
    extension:
      'Find one additional quotation from the novel relating to Crooks that you did not use in your essay. Write a paragraph incorporating it and explaining why it adds to your argument.',
  },
];

// =============================================================================
// LITERATURE — AN INSPECTOR CALLS (5 exercises)
// =============================================================================

const litInspectorExercises: WorkbookExercise[] = [
  {
    id: 'igcse-inspector-ex01',
    title: 'Social Responsibility: Priestley\'s Message',
    yearGroup: 'Year 10',
    termUnit: 'Lit: An Inspector Calls',
    type: 'comprehension',
    difficulty: 'developing',
    instructions: [
      'Read the Inspector\'s final speech carefully: "We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish."',
      'Answer the following questions: What does "members of one body" suggest about Priestley\'s view of society? (3 marks); What do the words "fire and blood and anguish" foreshadow, and why does Priestley include this warning? (4 marks); How does this speech reflect the historical and political context of 1945 when the play was written? (5 marks).',
      'Write in full sentences throughout.',
    ],
    estimatedTime: '20 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO3', 'IGCSE.Lit.I1'],
    modelAnswer:
      '"Members of one body" presents society as a single interconnected organism -- harm to one part damages the whole, and ignoring the suffering of others is therefore self-harm. This reflects Priestley\'s socialist belief in collective responsibility over individual self-interest. "Fire and blood and anguish" foreshadows the two World Wars: written in 1945, Priestley\'s audience had lived through both and would recognise this language as prophetic, lending the Inspector\'s warning retrospective authority. Contextually, 1945 was the year of the Labour landslide election: Priestley was targeting the Birlings and audiences who shared their values, warning that without radical social change, suffering on a mass scale was inevitable. The speech is therefore not merely a plot device but a political manifesto addressed directly to the audience over the heads of the characters.',
    extension:
      'Research Priestley\'s political views and his involvement with the 1945 general election. Write a paragraph explaining how this knowledge changes or deepens your reading of the Inspector\'s role in the play.',
  },
  {
    id: 'igcse-inspector-ex02',
    title: 'Character Development Paragraph: Sheila Birling',
    yearGroup: 'Year 10',
    termUnit: 'Lit: An Inspector Calls',
    type: 'close-reading',
    difficulty: 'developing',
    instructions: [
      'Write one analytical paragraph on how Sheila\'s character develops over the course of the play.',
      'Your paragraph must cover: how Sheila is presented at the start of the play; the key moment that changes her (her role in Eva Smith\'s dismissal from Milwards); her attitude at the end -- does she genuinely change or simply feel guilty?',
      'Include at least two quotations from the play.',
      'End your paragraph with a comment on what Priestley wants the audience to understand through Sheila\'s development.',
      'Aim for 140-160 words.',
    ],
    estimatedTime: 'minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.I2'],
    modelAnswer:
      'At the play\'s opening, Sheila is presented as a conventionally privileged young woman: engaged, excited, and unthinkingly accepting of her family\'s social position. Her early description as "very pleased with life and rather excited" establishes her as a character whose happiness depends on ignorance of the consequences of her class\'s actions. The moment she confesses to having used her influence to have Eva Smith dismissed -- "I was in a furious temper" -- marks the beginning of her transformation. Unlike her parents, Sheila\'s guilt appears genuine: she refuses to accept Mr Birling\'s attempts to dismiss the Inspector and insists, "I remember what he said, how he looked, and what he made me feel." Priestley uses Sheila to represent the possibility of moral awakening in the younger generation, suggesting that social change requires both the willingness to feel guilt and the courage to act on it.',
    extension:
      'Compare Sheila\'s development to that of Eric Birling. Who do you think undergoes the more genuine transformation and why? Write 100 words.',
  },
  {
    id: 'igcse-inspector-ex03',
    title: 'Dramatic Technique Analysis: The Inspector\'s Interrogation Method',
    yearGroup: 'Year 11',
    termUnit: 'Lit: An Inspector Calls',
    type: 'language-analysis',
    difficulty: 'secure',
    instructions: [
      'Re-read the scene in which the Inspector questions Mr Birling in Act One.',
      'Analyse how Priestley uses dramatic techniques to present the Inspector as a threatening and morally superior figure. You should comment on: how the Inspector controls the pace and direction of the interrogation; his use of pauses and silence; the contrast between his language and Mr Birling\'s; stage directions and their effect on the audience.',
      'Write two analytical paragraphs (120-150 words each).',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.I3'],
    modelAnswer:
      'Priestley uses the Inspector\'s interrogation technique to systematically dismantle Mr Birling\'s authority. Where Birling blusters with lengthy, self-justifying speeches ("A man has to mind his own business and look after himself and his own"), the Inspector consistently counters with short, declarative assertions ("Eva Smith is dead.") that allow no rhetorical escape. The contrast in sentence length enacts a power shift: Birling\'s verbosity is a defence mechanism, and the Inspector\'s brevity exposes it as such. Priestley\'s stage direction that the Inspector "need not be a big man but he creates at once an impression of massiveness, solidity, and purposefulness" signals that his authority is moral rather than physical. The instruction that he speaks carefully and weightily represents a direct contrast to Birling\'s bluster, reinforcing Priestley\'s thesis that moral certainty outweighs social status.',
    extension:
      'Research the theories that the Inspector represents a supernatural or symbolic figure. Write a paragraph arguing for or against this interpretation using evidence from the play.',
  },
  {
    id: 'igcse-inspector-ex04',
    title: 'Context Integration: Writing the Ending the Play Earns',
    yearGroup: 'Year 11',
    termUnit: 'Lit: An Inspector Calls',
    type: 'essay-practice',
    difficulty: 'secure',
    instructions: [
      'The play ends ambiguously: a second Inspector is on his way. Priestley gives the audience no resolution.',
      'Answer the following question in an extended paragraph of 200 words: "Why does Priestley choose to end the play without resolution, and what effect does this have on the audience?"',
      'Your response must reference: the historical context (1912 setting, 1945 writing); the play\'s central message about collective responsibility; the contrast between the older and younger Birlings at the end; the audience\'s role in completing the play\'s meaning.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO3', 'IGCSE.Lit.I4'],
    modelAnswer:
      'Priestley ends the play without resolution because he wants the audience -- not the Birlings -- to experience the consequences. By 1945, the audience knew that the years following 1912 brought the First World War, the Depression, and the Second World War: the Inspector\'s prophecy of "fire and blood and anguish" had already come true. The unresolved ending implicates the audience directly: if they leave the theatre and continue to behave like Mr and Mrs Birling, history will repeat itself. The contrast between the younger Birlings (Sheila and Eric, who accept responsibility) and the older ones (who revert to self-interest the moment the Inspector leaves) allows Priestley to end on a note of qualified hope: change is possible, but only if the next generation refuses to become their parents. The arrival of a second Inspector is not a twist but a warning.',
    extension:
      'Write a creative response: the final telephone call has been answered. Write the first minute of dialogue between Mr Birling and the police, maintaining Priestley\'s dramatic voice.',
  },
  {
    id: 'igcse-inspector-ex05',
    title: 'Essay Plan: How Does Priestley Present the Theme of Class?',
    yearGroup: 'Year 11',
    termUnit: 'Lit: An Inspector Calls',
    type: 'essay-practice',
    difficulty: 'mastery',
    instructions: [
      'Plan a full essay in response to: "How does Priestley use the character of Arthur Birling to present his ideas about class and responsibility?"',
      'Your plan must include: a thesis statement; four body paragraphs with a main point, key quotation, and brief analysis note for each; a conclusion plan.',
      'The four paragraphs should cover: (1) Birling\'s pride in his social position; (2) his treatment of workers and economic philosophy; (3) his attitude toward the Inspector\'s questioning; (4) his response at the play\'s end.',
      'After completing the plan, write the introduction in full (80-100 words).',
    ],
    estimatedTime: '30 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3', 'IGCSE.Lit.I2', 'IGCSE.Lit.I5'],
    modelAnswer:
      'A strong essay plan will have a thesis along the lines of: "Through Birling, Priestley presents the capitalist ruling class as morally bankrupt -- privileged enough to cause suffering and powerful enough to escape accountability, at least for now." Each body paragraph should build a distinct dimension of this argument. Paragraph 1 might focus on dramatic irony (Birling\'s confident wrongness about the Titanic and the war positions him as a fool to the audience even before the Inspector arrives). Paragraph 4 should note that Birling\'s ending -- relief rather than remorse -- is Priestley\'s most damning indictment: those with the most power are the least likely to change. The introduction should introduce the historical context, the play\'s purpose, and the thesis without retelling the plot.',
    extension:
      'Using your plan, write the most difficult body paragraph in full -- the one you are least confident about. After writing, annotate it to identify where you could add more analysis.',
  },
];

// =============================================================================
// LITERATURE — MACBETH (5 exercises)
// =============================================================================

const litMacbethExercises: WorkbookExercise[] = [
  {
    id: 'igcse-macbeth-ex01',
    title: 'Context and Themes Overview: Shakespeare\'s World',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Macbeth',
    type: 'comprehension',
    difficulty: 'foundation',
    instructions: [
      'Research and write 2-3 sentences of notes on each of the following contextual topics: the Divine Right of Kings; the Gunpowder Plot (1605) and the threat of treason; the Jacobean attitude to witchcraft; the concept of the Great Chain of Being.',
      'For each topic, write one sentence explaining how it connects to a specific moment or theme in Macbeth, supported by a brief quotation.',
      'Finally, write a paragraph (80 words) explaining why an understanding of historical context is important for reading Macbeth today.',
    ],
    estimatedTime: '30 minutes',
    linkedObjectives: ['IGCSE.Lit.AO3', 'IGCSE.Lit.M1'],
    modelAnswer:
      'The Divine Right of Kings held that monarchs were appointed by God: Duncan\'s murder is therefore not merely regicide but a cosmic crime against divine order, explaining the supernatural disorder that follows ("the heavens, as troubled with man\'s act, threatens his bloody stage"). The Gunpowder Plot gave Jacobean audiences an immediate frame of reference for treasonous conspiracy, making Macbeth a politically urgent play. Witchcraft was widely believed in and feared; James I wrote a treatise on demonology, making the witches\'s influence credible to a contemporary audience. The Great Chain of Being -- a divinely ordained hierarchy from God to angels to humans to animals -- is disrupted by Macbeth\'s ambition, and the play\'s animal imagery charts this disruption. Understanding context allows modern readers to grasp the full weight of Macbeth\'s actions, which to a Jacobean audience represented the unravelling of cosmic order.',
    extension:
      'Choose one contextual topic and research it in more depth. Write a paragraph of 120 words integrating the new information with close textual analysis.',
  },
  {
    id: 'igcse-macbeth-ex02',
    title: 'Soliloquy Analysis: "Is this a dagger which I see before me?"',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Macbeth',
    type: 'close-reading',
    difficulty: 'secure',
    instructions: [
      'Re-read Macbeth\'s soliloquy in Act 2 Scene 1 ("Is this a dagger which I see before me?").',
      'Write a close analysis of the soliloquy covering: what the dagger symbolises at this point in the play; how Shakespeare uses questions and uncertainty to reveal Macbeth\'s mental state; the shift in tone from uncertainty to resolve by the soliloquy\'s end; how this soliloquy develops the audience\'s understanding of Macbeth\'s character.',
      'Write two analytical paragraphs (120-150 words each). Embed at least three quotations.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.M2'],
    modelAnswer:
      'The dagger hallucination reveals a mind at war with itself: Macbeth simultaneously desires and fears the act of murder. The opening question "Is this a dagger which I see before me?" is syntactically an invitation to doubt -- it performs uncertainty rather than simply expressing it, and the shift between "a dagger of the mind" and "I see thee still" suggests that whether the dagger is real or imagined hardly matters: Macbeth is already committed. Shakespeare uses the soliloquy form to give the audience privileged access to Macbeth\'s psychology, creating an uncomfortable intimacy with his guilt. The shift in tone is marked by "Thou sure and firm-set earth": the full stop in the midst of the soliloquy represents a moment of decision, after which Macbeth\'s language becomes more resolute. A mastery response notes that this psychological collapse is the true murder: the act of killing Duncan merely formalises what has already happened internally.',
    extension:
      'Compare this soliloquy to the "Tomorrow and tomorrow and tomorrow" speech in Act 5. What does the contrast reveal about Macbeth\'s psychological journey?',
  },
  {
    id: 'igcse-macbeth-ex03',
    title: 'Character Essay Paragraph: Lady Macbeth\'s Role',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Macbeth',
    type: 'essay-practice',
    difficulty: 'secure',
    instructions: [
      'Write one essay-quality paragraph in response to: "How does Shakespeare present Lady Macbeth as a powerful and dangerous character?"',
      'Your paragraph must include: a clear topic sentence; at least two embedded quotations with analysis; a comment on dramatic technique (how does Shakespeare position the audience in relation to Lady Macbeth?); a link to the play\'s context.',
      'Focus on either Act 1 Scene 5 ("unsex me here") or Act 1 Scene 7 ("Was the hope drunk wherein you dressed yourself?").',
      'Aim for 150-180 words.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3', 'IGCSE.Lit.M3'],
    modelAnswer:
      'A strong paragraph on "unsex me here" will note that Lady Macbeth\'s invocation of evil spirits is a dramatic reversal of the natural order: she asks to be stripped of compassion ("Stop up the access and passage to remorse") and to have her "milk" -- a symbol of maternal nurturing -- exchanged for "gall." The language of gender inversion is significant in a Jacobean context where women were expected to be submissive and passive: Lady Macbeth\'s desire to transcend her gender is itself coded as transgressive and dangerous. Shakespeare positions the audience to feel both awe and horror: her resolution makes Macbeth\'s vacillation seem weak by contrast, but her willingness to call on the supernatural marks her as a figure who has overstepped the boundaries of both gender and divine order. Her later breakdown in the sleepwalking scene is the consequence of this transgression.',
    extension:
      'Write a second paragraph arguing that Lady Macbeth is a tragic figure as well as a dangerous one. Use evidence from the second half of the play to support this reading.',
  },
  {
    id: 'igcse-macbeth-ex04',
    title: 'Dramatic Techniques: How Shakespeare Creates Tension',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Macbeth',
    type: 'language-analysis',
    difficulty: 'mastery',
    instructions: [
      'Choose one scene from Macbeth in which you feel tension is particularly effectively created (e.g. Act 2 Scene 2, Act 3 Scene 4, Act 5 Scene 1).',
      'Write two analytical paragraphs analysing how Shakespeare uses dramatic techniques to create tension in that scene. You should comment on at least FOUR of the following: pace and rhythm of dialogue; use of silence or asides; imagery and its effect; dramatic irony; sound effects and staging (as indicated by stage directions); the audience\'s superior knowledge.',
      'Each paragraph should be 120-150 words.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.M4'],
    modelAnswer:
      'In Act 2 Scene 2 (immediately after the murder), Shakespeare creates tension through fragmented dialogue that enacts psychological disintegration. Where earlier scenes establish Macbeth as a man capable of long, structured soliloquies, his post-murder speech breaks into short, paranoid exclamations: "I have done the deed. Didst thou not hear a noise?" The abrupt shifts in topic -- from the murder itself, to the men in the next room, to the inability to say "Amen" -- reflect a mind that can no longer sustain rational thought. The offstage sounds of knocking at the gate add another layer of tension through sound: the audience hears what the characters hear, and the relentless knocking becomes both literally and symbolically inescapable. A mastery response identifies these techniques as working cumulatively rather than individually and analyses their combined effect on the audience\'s emotional experience.',
    extension:
      'Write a director\'s note for the scene you analysed, explaining three specific staging choices you would make and how they would create or amplify tension for a modern audience.',
  },
  {
    id: 'igcse-macbeth-ex05',
    title: 'Timed Essay: Character and Tragedy',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Macbeth',
    type: 'timed-response',
    difficulty: 'mastery',
    instructions: [
      'You have 45 minutes to write a full essay in response to: "How does Shakespeare present Macbeth as a tragic figure?"',
      'Spend 5 minutes planning: draft a thesis; plan 4 paragraphs covering Macbeth\'s nobility at the start, his fatal flaw (ambition), his psychological deterioration, and his end; note one key quotation per paragraph.',
      'In your essay, engage with the classical concept of tragedy (hamartia, hubris, nemesis) and apply it to Macbeth.',
      'Write approximately 600 words. End with a conclusion that makes an evaluative judgement about how successfully Shakespeare fulfils the conventions of tragedy.',
    ],
    estimatedTime: '45 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3', 'IGCSE.Lit.M2', 'IGCSE.Lit.M5'],
    modelAnswer:
      'A Band 5 essay will engage with the tension between Macbeth\'s moral responsibility and the external forces acting upon him (the witches, Lady Macbeth, his own ambition). The classical tragic template -- noble hero with a fatal flaw whose hubris leads to nemesis -- maps onto Macbeth, but a sophisticated response will note complications: the witches introduce the question of free will versus predetermination; Macbeth\'s crimes are too numerous and deliberate to invite straightforward audience sympathy; and yet his self-awareness ("I am in blood stepped in so far") is what makes him tragic rather than merely villainous. The conclusion should evaluate whether Shakespeare presents Macbeth as a figure to pity, condemn, or both, and why this ambiguity is central to the play\'s enduring power. Common weaknesses include retelling the plot, neglecting context, and failing to sustain a clear argument.',
    extension:
      'After your essay is marked, identify the paragraph in which your analysis is weakest. Rewrite it, incorporating more precise language analysis and a reference to dramatic technique.',
  },
];

// =============================================================================
// ALL EXERCISES EXPORT
// =============================================================================

export const igcseWorkbookExercises: WorkbookExercise[] = [
  ...langP1Exercises,
  ...langP2Exercises,
  ...litPoetryExercises,
  ...litOMAMExercises,
  ...litInspectorExercises,
  ...litMacbethExercises,
];

// =============================================================================
// HOMEWORK TASKS (24 total — 4 per paper/text)
// =============================================================================

export const igcseHomeworkTasks: HomeworkTask[] = [

  // ---------------------------------------------------------------------------
  // Lang P1 Homework (4 tasks)
  // ---------------------------------------------------------------------------
  {
    id: 'igcse-hw-langp1-01',
    title: 'Q1 and Q2 Practice: Retrieval and Inference',
    yearGroup: 'Year 10',
    termUnit: 'Lang P1: Reading Non-Fiction',
    type: 'comprehension',
    difficulty: 'foundation',
    instructions: [
      'Using the attached non-fiction extract, complete the following tasks independently at home.',
      'Q1 (8 mins): List four things you learn about the subject of the article from lines 1-10. Write in full sentences, using your own words where possible.',
      'Q2 (12 mins): How does the writer use language to convey their attitude in lines 11-25? Write one analytical paragraph identifying at least two techniques.',
      'Mark your own work using the provided mark scheme before your next lesson.',
    ],
    estimatedTime: '30 minutes',
    linkedObjectives: ['IGCSE.Lang.AO1', 'IGCSE.Lang.AO2', 'IGCSE.Lang.R1', 'IGCSE.Lang.R2'],
    modelAnswer:
      'Q1: four accurate, paraphrased points from the specified lines (1 mark each). Q2: a paragraph identifying at least two language techniques by name, embedding a quotation for each, and explaining the effect on the reader. A developing response names techniques and quotes; a secure response analyses the effect on the reader; a mastery response considers the cumulative effect and the writer\'s purpose.',
    extension:
      'Write a further paragraph for Q2 focusing on a technique you did not analyse in your original response.',
  },
  {
    id: 'igcse-hw-langp1-02',
    title: 'Structural Analysis: How Does the Text Develop?',
    yearGroup: 'Year 10',
    termUnit: 'Lang P1: Reading Non-Fiction',
    type: 'language-analysis',
    difficulty: 'developing',
    instructions: [
      'Re-read the extract used in this week\'s lesson.',
      'Write a response of approximately 200 words answering: "How does the writer use structure to interest and engage the reader?"',
      'You should comment on at least three of the following structural features: the opening and how it hooks the reader; the order in which ideas are introduced; any shift in perspective or tone; repetition of ideas or motifs; how the ending relates to the opening.',
      'Use the connectives "initially," "subsequently," "finally," and "overall" to signal your structural observations.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lang.AO2', 'IGCSE.Lang.R3'],
    modelAnswer:
      'A strong structural analysis identifies the text as a crafted object -- choices about what comes first, what is delayed, and what is withheld are as significant as language choices. The opening\'s function (to hook, to establish tone, to introduce a problem) should be named. A shift in perspective (e.g. from personal anecdote to wider argument) creates structural contrast. The relationship between opening and ending -- whether the text resolves, subverts, or echoes its beginning -- is a key structural feature. Responses should avoid describing content and focus on function: not "the writer talks about X" but "by introducing X early, the writer establishes..."',
    extension:
      'Draw a simple diagram showing the structure of the text as you understand it (e.g. a narrative arc, a problem-evidence-solution triangle, a cyclical return). Annotate it with three key structural observations.',
  },
  {
    id: 'igcse-hw-langp1-03',
    title: 'Q4 Full Practice: Evaluating a Source',
    yearGroup: 'Year 11',
    termUnit: 'Lang P1: Reading Non-Fiction',
    type: 'evaluation',
    difficulty: 'secure',
    instructions: [
      'Using the extract provided and the statement below, write a full Q4-style evaluation response.',
      'Statement: "The writer successfully persuades the reader that their subject is a genuine cause for concern."',
      'Your response should be approximately 300 words and include: agreement with the statement with specific textual evidence; a challenge to the statement with counter-evidence; an overall evaluative judgement.',
      'Remember: you are evaluating HOW EFFECTIVELY the writer achieves their purpose, not simply summarising or analysing.',
    ],
    estimatedTime: '30 minutes',
    linkedObjectives: ['IGCSE.Lang.AO3', 'IGCSE.Lang.R4'],
    modelAnswer:
      'A top-band Q4 response will use the word "effectively" as an analytical anchor, returning to it when making evaluative judgements. Agreement: identifies specific techniques that successfully create the intended effect and explains why they work. Challenge: identifies moments where the writing is less effective (overuse of rhetoric, overstatement, unconvincing evidence) and explains why they undermine the argument. Conclusion: a balanced, reasoned overall judgement that goes beyond "some parts are effective and some are not" to explain the relative weight of the evidence.',
    extension:
      'Write a brief annotation on your own response, identifying one sentence where your evaluation is strongest and one where it slips into analysis. Explain the difference.',
  },
  {
    id: 'igcse-hw-langp1-04',
    title: 'Timed Full Paper Reading Section (Homework)',
    yearGroup: 'Year 11',
    termUnit: 'Lang P1: Reading Non-Fiction',
    type: 'timed-response',
    difficulty: 'mastery',
    instructions: [
      'Under timed conditions at home, complete the full reading section of the provided past paper extract.',
      'You have 1 hour. Time each question as you would in the exam: Q1 (8 mins), Q2 (12 mins), Q3 (12 mins), Q4 (28 mins).',
      'Do not use your notes or the internet.',
      'Bring your completed paper to the next lesson for peer marking.',
    ],
    estimatedTime: '60 minutes',
    linkedObjectives: ['IGCSE.Lang.AO1', 'IGCSE.Lang.AO2', 'IGCSE.Lang.AO3'],
    modelAnswer:
      'This task is assessed using the Edexcel band descriptors. Q1 (4 marks): four accurate, paraphrased points. Q2 (8 marks): two analytical paragraphs on language technique. Q3 (8 marks): structural analysis covering at least three features. Q4 (20 marks): balanced evaluation with evidence-based agreement and challenge, and a clear overall judgement. Peer marking should focus on the quality of AO3 evaluation in Q4, as this is where most students lose marks.',
    extension:
      'Write a 100-word reflection after marking: what did you do well, and what is the single most important thing you will practise before the exam?',
  },

  // ---------------------------------------------------------------------------
  // Lang P2 Homework (4 tasks)
  // ---------------------------------------------------------------------------
  {
    id: 'igcse-hw-langp2-01',
    title: 'Transactional Writing: Letter to a Local Newspaper',
    yearGroup: 'Year 10',
    termUnit: 'Lang P2: Transactional Writing',
    type: 'essay-practice',
    difficulty: 'developing',
    instructions: [
      'Write a letter to your local newspaper arguing that more needs to be done to support mental health in schools.',
      'Use correct formal letter conventions.',
      'Include at least one of each: rhetorical question; statistic or evidence (invented is fine); personal anecdote; emotive language.',
      'Write approximately 300-350 words.',
    ],
    estimatedTime: '35 minutes',
    linkedObjectives: ['IGCSE.Lang.AO4', 'IGCSE.Lang.W1', 'IGCSE.Lang.W2'],
    modelAnswer:
      'A strong response will open with a hook that immediately establishes the writer\'s perspective and its personal or immediate relevance to the reader. The body should sequence arguments logically, integrating rhetorical devices purposefully rather than mechanically. A common weakness is overuse of rhetorical questions: one per paragraph is usually sufficient. The letter should close with a clear, specific call to action addressed directly to the newspaper\'s readers or editor. Register should be formal but not stiff: the writer is a concerned community member, not a politician.',
    extension:
      'Identify two rhetorical devices you used in your letter and write a sentence explaining the specific effect each was intended to have on the reader.',
  },
  {
    id: 'igcse-hw-langp2-02',
    title: 'Descriptive Writing: A Place That Matters',
    yearGroup: 'Year 10',
    termUnit: 'Lang P2: Transactional Writing',
    type: 'essay-practice',
    difficulty: 'secure',
    instructions: [
      'Write a description of a place that is significant to you (real or imagined) for a creative writing anthology.',
      'Your description should: use at least three different senses; include one extended metaphor or sustained image; vary sentence length deliberately for effect; create a specific atmosphere (e.g. unsettling, nostalgic, awe-inspiring).',
      'Write approximately 350 words. Do not include a narrative plot -- this is a pure description.',
    ],
    estimatedTime: '35 minutes',
    linkedObjectives: ['IGCSE.Lang.AO5', 'IGCSE.Lang.W5'],
    modelAnswer:
      'A strong descriptive piece creates a world the reader can inhabit, not just see. Sensory detail should be precise and evocative rather than generic: "the metallic scent of rain on hot tarmac" is more effective than "it smelled of rain." An extended metaphor, when sustained across multiple sentences or paragraphs, creates structural coherence as well as imagery. Varied sentence length should be deliberate: a short sentence after a long one creates a different effect from two short sentences in succession. The atmosphere should be consistent -- a piece that begins in nostalgic warmth should not suddenly become menacing without a purposeful reason.',
    extension:
      'Read back your description and identify the one sentence you are most proud of. Write a note explaining exactly why it works -- what technique does it use and what effect does it create?',
  },
  {
    id: 'igcse-hw-langp2-03',
    title: 'Article Writing: A Balanced Discussion Piece',
    yearGroup: 'Year 11',
    termUnit: 'Lang P2: Transactional Writing',
    type: 'essay-practice',
    difficulty: 'secure',
    instructions: [
      'Write a magazine article discussing whether academic success or personal happiness should be the primary goal of education.',
      'This is a DISCUSSION piece, not a one-sided argument: you should present both perspectives fairly before reaching a conclusion that states your own view.',
      'Include: a headline; a balanced opening; at least two perspectives; evidence or examples for each perspective; a clear conclusion with your own position.',
      'Write approximately 400 words.',
    ],
    estimatedTime: '40 minutes',
    linkedObjectives: ['IGCSE.Lang.AO4', 'IGCSE.Lang.W1', 'IGCSE.Lang.W3'],
    modelAnswer:
      'A discussion article differs from a persuasive article in that the writer\'s own view is held back until the conclusion, creating a sense of intellectual honesty and balance. Strong responses use connectives of concession and balance ("on the other hand," "advocates would argue," "critics counter that") to signal the multi-perspective structure. The conclusion should go beyond "both sides have a point" to state a clear, reasoned position. Top-band responses use a consistent journalistic register and write with awareness of the magazine\'s implied readership.',
    extension:
      'Write an alternative introduction that takes a strongly one-sided persuasive stance on the same topic. Note the specific language and structural changes you make when shifting from discussion to persuasion.',
  },
  {
    id: 'igcse-hw-langp2-04',
    title: 'Timed Writing Task: Speech Under Exam Conditions',
    yearGroup: 'Year 11',
    termUnit: 'Lang P2: Transactional Writing',
    type: 'timed-response',
    difficulty: 'mastery',
    instructions: [
      'Under timed conditions, write a speech (35 minutes) in response to the following prompt: "Write a speech to be delivered to your local council arguing that more green spaces should be protected in your area."',
      'Plan for 5 minutes before writing.',
      'Your speech must demonstrate: correct speech conventions; a sustained persuasive register; at least three rhetorical devices; a clear structure with introduction, development, and conclusion.',
      'Do not exceed 450 words.',
    ],
    estimatedTime: '35 minutes',
    linkedObjectives: ['IGCSE.Lang.AO4', 'IGCSE.Lang.AO6', 'IGCSE.Lang.W1', 'IGCSE.Lang.W3'],
    modelAnswer:
      'A Band 5 speech will demonstrate confident control of the speech form: a direct, engaging opening address; a clearly sequenced argument that builds toward an emotional climax; a specific, memorable call to action. Rhetorical devices should be integrated naturally rather than mechanically applied. The register should feel genuinely spoken -- contractions, direct address, and shorter sentences for emphasis -- without becoming too informal for a council address. Grammar, punctuation, and vocabulary (AO6) must be controlled and varied throughout. Common errors include failing to address the specific audience (a council requires more formal register than a school assembly) and under-developed arguments.',
    extension:
      'After the task, self-assess your speech against the Edexcel Band 5 descriptor. Identify one specific strength and one area for improvement with a concrete suggestion for how to address it.',
  },

  // ---------------------------------------------------------------------------
  // Lit Poetry Homework (4 tasks)
  // ---------------------------------------------------------------------------
  {
    id: 'igcse-hw-poetry-01',
    title: 'Independent Poem Study: Annotate and Respond',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Poetry Anthology',
    type: 'annotation',
    difficulty: 'developing',
    instructions: [
      'Select a poem from the anthology that you have NOT yet studied in class.',
      'Read it at least three times, then annotate your copy: identify the speaker and situation; note key language techniques with brief effect comments; identify any structural features that stand out; write a one-sentence "reading" of the poem\'s central meaning.',
      'Bring your annotated copy to the next lesson to share with a partner.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.P1'],
    modelAnswer:
      'Strong annotations are specific rather than vague ("this creates sadness" is weaker than "the sibilance in \'softly, silently\' creates a hushed, reverent tone"). The one-sentence reading should commit to an interpretation: "This poem explores the speaker\'s grief at the loss of a parent through the extended metaphor of a house being emptied." Students who produce genuinely independent first readings -- even imperfect ones -- develop stronger interpretive confidence than those who wait for teacher-led analysis.',
    extension:
      'Write a full analytical paragraph (120 words) on the technique you found most interesting in your chosen poem.',
  },
  {
    id: 'igcse-hw-poetry-02',
    title: 'Comparison Practice: Connecting Two Poems',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Poetry Anthology',
    type: 'comparison',
    difficulty: 'secure',
    instructions: [
      'Write a comparison of two poems from the anthology on the theme of memory.',
      'Your response should be approximately 300 words and structured as follows: introduction naming both poems and your thesis; body paragraph 1 -- how Poem A treats memory; body paragraph 2 -- how Poem B treats memory; body paragraph 3 -- a direct comparison noting both a similarity and a difference; conclusion.',
      'Use at least one quotation per paragraph.',
    ],
    estimatedTime: '35 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.P2'],
    modelAnswer:
      'This task practises the structural discipline of comparison writing under no time pressure. A strong response will avoid the "all of Poem A, then all of Poem B" structure in the body paragraphs, weaving comparison through each paragraph instead. The thesis should make a specific comparative claim: "Both poets present memory as both a comfort and a burden, though while Poem A emphasises its consoling power, Poem B is more interested in its capacity to distort." The conclusion should synthesise rather than summarise, making an evaluative comment about which poem treats the theme more effectively and why.',
    extension:
      'Write a further comparison paragraph focusing specifically on how the two poets\' use of FORM contributes to the theme of memory.',
  },
  {
    id: 'igcse-hw-poetry-03',
    title: 'Exam Question Practice: Single Poem Response',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Poetry Anthology',
    type: 'essay-practice',
    difficulty: 'secure',
    instructions: [
      'Write a full response to the following question: "How does the poet present the theme of identity in [your chosen poem]?"',
      'You have 30 minutes (simulating exam conditions).',
      'Your response should: open with a clear thesis statement; analyse language, form, and structure; integrate context where relevant; end with a conclusion that evaluates the poem\'s overall effectiveness.',
      'Write approximately 400 words.',
    ],
    estimatedTime: '30 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3'],
    modelAnswer:
      'A Band 5 single poem response demonstrates a clear, sustained personal reading throughout. The thesis should be specific and arguable -- not "this poem is about identity" but "the poet presents identity as something constructed by external forces rather than an innate quality, and explores the anxiety this creates in the speaker." Analysis should move between language, form, and structure naturally, showing how each dimension of the poem contributes to meaning. Context should be integrated, not listed. The conclusion should make an evaluative comment about the poem\'s achievement rather than simply restating the thesis.',
    extension:
      'After completing your response, use the mark scheme to identify the band you believe your work falls in. Write a target-setting comment explaining how to move to the next band.',
  },
  {
    id: 'igcse-hw-poetry-04',
    title: 'Timed Comparison Essay',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Poetry Anthology',
    type: 'timed-response',
    difficulty: 'mastery',
    instructions: [
      'Under timed conditions (40 minutes), write a full comparison essay in response to: "Compare how two poets present ideas about power and control."',
      'Select two poems from the anthology. Plan for 5 minutes before writing.',
      'Your essay must demonstrate: a clear comparative thesis; integrated comparison throughout (not one poem then the other); analysis of language, form, and structure; relevant contextual references; a conclusion with an overall evaluative judgement.',
    ],
    estimatedTime: '40 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3', 'IGCSE.Lit.P2', 'IGCSE.Lit.P5'],
    modelAnswer:
      'A timed comparison essay under homework conditions allows students to practise the discipline of sustained comparison without full exam pressure. Band 5 responses will weave comparison through every paragraph, sustain a clear thesis, and demonstrate genuinely personal engagement with both poems. Common issues include: abandoning comparison mid-essay; strong analysis of one poem and weak analysis of the other; neglecting form and structure in favour of language; a conclusion that merely summarises. This task should be marked by the teacher and returned with a band score and two developmental targets.',
    extension:
      'After marking, identify the paragraph in which your comparison is least integrated. Rewrite it so that both poems are compared directly within each sentence.',
  },

  // ---------------------------------------------------------------------------
  // Lit OMAM Homework (4 tasks)
  // ---------------------------------------------------------------------------
  {
    id: 'igcse-hw-omam-01',
    title: 'Research Task: Contextual Reading',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Of Mice and Men',
    type: 'comprehension',
    difficulty: 'foundation',
    instructions: [
      'Research one of the following topics and produce a one-page set of notes: (a) the Dust Bowl and its impact on migrant workers in California; (b) racial segregation laws in 1930s America; (c) the treatment of people with learning disabilities in the 1930s.',
      'Your notes should include: key facts and dates; at least one specific statistic; a quotation from a historical source; one paragraph explaining how this context shapes your reading of the novel.',
    ],
    estimatedTime: '30 minutes',
    linkedObjectives: ['IGCSE.Lit.AO3', 'IGCSE.Lit.O1'],
    modelAnswer:
      'Strong research notes are organised and selective: students should not copy large amounts of text but should synthesise information into key points. The contextual paragraph should make a specific connection to the novel: not "this context is important for understanding the novel" but "Steinbeck presents Crooks\'s segregation from the bunkhouse as a direct reflection of Jim Crow laws, which legally enforced racial separation in public facilities across the American South."',
    extension:
      'Write a paragraph discussing how knowing this context changes or deepens your emotional response to a specific scene in the novel.',
  },
  {
    id: 'igcse-hw-omam-02',
    title: 'Close Reading: The Dream of the Farm',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Of Mice and Men',
    type: 'close-reading',
    difficulty: 'developing',
    instructions: [
      'Re-read the passage in which George and Lennie describe their dream of owning a farm (Chapter 1 or 3).',
      'Write a close reading of the passage covering: how Steinbeck uses language to present the dream as both vivid and fragile; the roles of George and Lennie in the telling of the dream (who leads, who responds, and why); what the dream represents thematically.',
      'Write approximately 200-250 words with at least three embedded quotations.',
    ],
    estimatedTime: '30 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.O3'],
    modelAnswer:
      'A strong close reading notes the ritual quality of the dream-telling: George and Lennie have clearly rehearsed this many times ("You got it by heart, you can do it yourself"), suggesting the dream functions as a form of comfort rather than a realistic plan. The specific details Steinbeck includes -- rabbits, a garden, independence, "no trouble" -- are modest by any standard, yet seem impossibly out of reach for itinerant workers. The language shifts from the pragmatic and bleak when describing the ranch to lyrical and tender when describing the farm, signalling the dream\'s emotional rather than material significance. A mastery response notes that the dream is also a form of power: George uses it to manage Lennie and give their relationship structure.',
    extension:
      'Write a paragraph comparing the dream\'s presentation in Chapter 1 to its final appearance at the novel\'s end. How does its meaning change?',
  },
  {
    id: 'igcse-hw-omam-03',
    title: 'Essay Paragraph: How Does Steinbeck Present Women?',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Of Mice and Men',
    type: 'essay-practice',
    difficulty: 'secure',
    instructions: [
      'Write one analytical paragraph in response to: "How does Steinbeck present women in Of Mice and Men?"',
      'Your paragraph must focus on Curley\'s wife as the novel\'s only named female character and consider: how she is introduced and described; how other characters perceive and talk about her; the limited power she has and how she exercises it; Steinbeck\'s attitude toward her.',
      'Aim for 150 words with at least two embedded quotations.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3'],
    modelAnswer:
      'A strong paragraph will note the deliberate paradox in Steinbeck\'s presentation: Curley\'s wife is consistently described in sexualised, reductive terms by the male characters ("jail bait," "tart") yet her own words reveal loneliness, thwarted ambition, and intelligence. Steinbeck denies her a name -- she is defined entirely by her relationship to Curley -- which is itself a structural comment on women\'s powerlessness in a patriarchal society. A mastery response considers whether Steinbeck critiques the male characters\' attitudes toward her or whether the novel\'s own treatment of her is also reductive. The question of authorial sympathy is genuinely contestable and should be engaged with rather than resolved too quickly.',
    extension:
      'Write a further paragraph arguing that Curley\'s wife is more complex than a simple victim. Use evidence from her scene with Lennie in the barn to support your argument.',
  },
  {
    id: 'igcse-hw-omam-04',
    title: 'Timed Essay: Themes and Character',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Of Mice and Men',
    type: 'timed-response',
    difficulty: 'mastery',
    instructions: [
      'Under timed conditions (45 minutes), write a full essay in response to: "How does Steinbeck present the theme of the American Dream in Of Mice and Men?"',
      'Plan for 5 minutes: draft a thesis; plan 3-4 paragraphs covering George and Lennie\'s dream, Candy\'s investment in the dream, Crooks\'s response to the dream, and the dream\'s destruction.',
      'Write approximately 600 words. Include contextual references to 1930s America.',
    ],
    estimatedTime: '45 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3'],
    modelAnswer:
      'A Band 5 essay will present the American Dream not as something individuals fail to achieve due to personal weakness but as something the novel\'s social and economic context makes structurally impossible for the powerless. George and Lennie\'s dream is the novel\'s emotional core, but it is also ironic: in the wealthiest country in the world during the Depression, even a modest dream of self-sufficiency is out of reach. Candy\'s investment shows how the dream spreads and grows more fragile; Crooks\'s momentary engagement and cynical withdrawal is the novel\'s most honest commentary on who the American Dream was never designed to include. The conclusion should note that Steinbeck is not dismissing the value of dreams but exposing the cruelty of a system that allows them to survive long enough to be destroyed.',
    extension:
      'After marking, identify the point in your essay where your argument is strongest. Write a sentence explaining why that paragraph is particularly effective.',
  },

  // ---------------------------------------------------------------------------
  // Lit An Inspector Calls Homework (4 tasks)
  // ---------------------------------------------------------------------------
  {
    id: 'igcse-hw-inspector-01',
    title: 'Character Study: Mr Birling\'s Values',
    yearGroup: 'Year 10',
    termUnit: 'Lit: An Inspector Calls',
    type: 'close-reading',
    difficulty: 'developing',
    instructions: [
      'Re-read Mr Birling\'s speech at the start of Act One (from "But what so many of you don\'t seem to understand now, when things are so much easier, is that a man has to make his own way...").',
      'Write 200 words analysing how Priestley uses Mr Birling\'s language to reveal his values and the play\'s themes.',
      'Consider: the content of his argument; the language and register he uses; the dramatic irony created by his confident predictions; what Priestley wants the audience to think of Birling.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3'],
    modelAnswer:
      'Birling\'s speech is a vehicle for dramatic irony: his confident dismissal of "cranks" who talk about community responsibility, his certainty that there will be no war, and his praise for the Titanic as "unsinkable" all mark him out as a man whose self-confidence vastly exceeds his wisdom. Priestley\'s 1945 audience, with the benefit of hindsight, would find his pronouncements laughable -- and dangerously so, because men like Birling were in charge when those catastrophes occurred. His register -- authoritative, paternal, self-congratulatory -- is the register of a man who has never been seriously challenged, which is precisely what the Inspector will do.',
    extension:
      'Write a paragraph predicting how Birling\'s character might respond to the Inspector\'s final message. What does his likely response reveal about the limits of his ability to change?',
  },
  {
    id: 'igcse-hw-inspector-02',
    title: 'Dramatic Technique: The Inspector\'s First Entry',
    yearGroup: 'Year 10',
    termUnit: 'Lit: An Inspector Calls',
    type: 'language-analysis',
    difficulty: 'developing',
    instructions: [
      'Re-read the stage directions and dialogue surrounding the Inspector\'s first entry in Act One.',
      'Write an analytical paragraph (120-150 words) explaining how Priestley uses dramatic techniques to immediately establish the Inspector as a powerful and threatening presence.',
      'Comment on at least two of: the stage directions describing his appearance; the contrast between the Inspector\'s arrival and the mood before he enters; his choice of words in his opening lines; his effect on the Birling family.',
    ],
    estimatedTime: '20 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.I3'],
    modelAnswer:
      'Priestley establishes the Inspector as a figure of moral authority before he speaks a single line. The stage direction that he "creates at once an impression of massiveness, solidity, and purposefulness" signals that his power is not physical but psychological -- he is "not a big man" but occupies the room through sheer force of presence. His entry immediately changes the atmosphere: the warm, self-congratulatory mood of the engagement dinner is replaced by scrutiny. His first words, stating simply that a girl has died, cut through the social performance of the Birling household with deliberate abruptness. Priestley uses the contrast between the Inspector\'s directness and the family\'s social performance to begin the process of exposure that structures the whole play.',
    extension:
      'Research the debate about whether the Inspector is a real policeman, a ghost, or a symbol. Write a paragraph arguing for one interpretation with textual evidence.',
  },
  {
    id: 'igcse-hw-inspector-03',
    title: 'Essay Planning: How Does Priestley Present Responsibility?',
    yearGroup: 'Year 11',
    termUnit: 'Lit: An Inspector Calls',
    type: 'essay-practice',
    difficulty: 'secure',
    instructions: [
      'Plan and write the introduction and TWO body paragraphs of an essay in response to: "How does Priestley explore the theme of social responsibility in An Inspector Calls?"',
      'Your introduction should state the play\'s central argument and introduce your thesis.',
      'Paragraph 1: focus on the Inspector as a vehicle for Priestley\'s message.',
      'Paragraph 2: focus on the contrast between Sheila\'s and Mr Birling\'s responses to the Inspector.',
      'Each body paragraph should be 130-160 words.',
    ],
    estimatedTime: '40 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3', 'IGCSE.Lit.I1'],
    modelAnswer:
      'A strong introduction for this essay will note the historical context (written 1945, set 1912), establish Priestley\'s socialist political beliefs, and state a clear thesis: "Priestley uses An Inspector Calls as a vehicle for his socialist argument that the powerful have a moral duty to accept responsibility for the suffering their actions cause, and that failure to do so has catastrophic consequences for society." The Inspector paragraph should analyse how Priestley uses the Inspector\'s questioning technique, language, and final speech to embody collective responsibility. The Sheila/Birling contrast paragraph should analyse the generational argument: Sheila represents the possibility of change; Birling represents entrenched self-interest.',
    extension:
      'Write the remaining two body paragraphs of the essay: one on Gerald Croft\'s ambiguous position; one on the play\'s cyclical ending.',
  },
  {
    id: 'igcse-hw-inspector-04',
    title: 'Timed Extract Essay',
    yearGroup: 'Year 11',
    termUnit: 'Lit: An Inspector Calls',
    type: 'timed-response',
    difficulty: 'mastery',
    instructions: [
      'Under timed conditions (45 minutes), write a full response to the following: "Read the extract from An Inspector Calls. Starting with this extract, explore how Priestley presents the character of Eric Birling in the play as a whole."',
      'In your response you should: analyse the extract in detail, commenting on language, form, and structure; go beyond the extract to consider Eric\'s role in the whole play; consider Priestley\'s intentions and the historical context.',
      'Write approximately 600-700 words.',
    ],
    estimatedTime: '45 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3'],
    modelAnswer:
      'A Band 5 extract-based response will use the extract as a starting point rather than the entirety of the response. Close analysis of the extract should note how Eric\'s language, behaviour, and interaction with other characters reveal his internal conflict. Beyond the extract, a strong essay will trace Eric\'s arc: from the uncomfortable, drink-dependent young man at the opening to the character who most fully accepts responsibility by the play\'s end. His relationship to Eva Smith involves exploitation of power, but his genuine remorse distinguishes him from his parents. A mastery response will note that Eric\'s social and psychological failings are themselves products of the Birling family\'s environment, complicating simple moral judgement.',
    extension:
      'After marking, compare your performance on this task to your previous timed practice. Write two sentences: one identifying improvement and one identifying a remaining target.',
  },

  // ---------------------------------------------------------------------------
  // Lit Macbeth Homework (4 tasks)
  // ---------------------------------------------------------------------------
  {
    id: 'igcse-hw-macbeth-01',
    title: 'Context and First Impressions: Macbeth as Hero',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Macbeth',
    type: 'comprehension',
    difficulty: 'foundation',
    instructions: [
      'Re-read Act 1 Scenes 1-3 of Macbeth.',
      'Answer the following questions: How is Macbeth first introduced before he appears on stage -- what do we learn from the Captain\'s report? (4 marks); What is the dramatic effect of the witches\' prophecies on Macbeth -- how does he react and what does this suggest? (4 marks); Why does Shakespeare introduce Macbeth as a hero before revealing his flaws? What effect does this create? (4 marks).',
      'Write in full sentences.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO3', 'IGCSE.Lit.M1'],
    modelAnswer:
      'Macbeth is introduced as a military hero of extraordinary courage ("brave Macbeth -- well he deserves that name"), creating an immediate positive impression before the audience meets him. The Captain\'s description of him unseaming an enemy "from the nave to the chaps" is simultaneously heroic and shockingly violent -- a hint at the capacity for violence that will later be turned against the innocent. The witches\' prophecies trigger an "aside" from Macbeth that reveals private ambition: his shocked reaction to hearing he will be king suggests the prophecy names a desire he has already entertained. Introducing Macbeth as a hero before revealing his ambition makes his fall more tragic and more interesting: the audience must grapple with the gap between public virtue and private desire.',
    extension:
      'Write a paragraph explaining how Shakespeare uses the technique of "dramatic exposition" in the opening scenes to efficiently establish character, context, and theme.',
  },
  {
    id: 'igcse-hw-macbeth-02',
    title: 'Close Reading: The "Tomorrow and Tomorrow" Soliloquy',
    yearGroup: 'Year 10',
    termUnit: 'Lit: Macbeth',
    type: 'close-reading',
    difficulty: 'secure',
    instructions: [
      'Re-read Macbeth\'s soliloquy in Act 5 Scene 5 ("Tomorrow and tomorrow and tomorrow...").',
      'Write a close analysis of the soliloquy covering: how the repetition of "tomorrow" creates a specific effect; the metaphors of life as a story and a stage performance; what these metaphors reveal about Macbeth\'s state of mind at this point in the play; how this speech marks a turning point in Macbeth\'s characterisation.',
      'Write approximately 200 words with at least three quotations.',
    ],
    estimatedTime: '25 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.M2'],
    modelAnswer:
      'The triple repetition of "tomorrow" at the soliloquy\'s opening enacts the very tedium it describes: time has lost meaning and each day is merely a mechanical repetition of the last. The metaphors are strikingly nihilistic: life is "a tale / Told by an idiot, full of sound and fury, / Signifying nothing." The image of the "poor player / That struts and frets his hour upon the stage" connects to the play\'s theatrical context -- Shakespeare drawing attention to performance itself -- but in Macbeth\'s mouth it expresses total disillusionment. For a man who began the play full of ambition and agency, this speech represents psychological collapse: the realisation that power acquired through murder brings no satisfaction. A mastery response connects this soliloquy to earlier ones, noting the trajectory from moral conflict to moral emptiness.',
    extension:
      'Compare this soliloquy to Macbeth\'s first soliloquy in Act 1 Scene 7 ("If it were done when \'tis done..."). Write a paragraph on how Macbeth\'s voice has changed between these two moments.',
  },
  {
    id: 'igcse-hw-macbeth-03',
    title: 'Paragraph Writing: Ambition as a Theme',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Macbeth',
    type: 'essay-practice',
    difficulty: 'secure',
    instructions: [
      'Write two analytical paragraphs in response to: "How does Shakespeare present ambition as a destructive force in Macbeth?"',
      'Paragraph 1: focus on Macbeth\'s ambition and how it is presented through language and soliloquy.',
      'Paragraph 2: focus on Lady Macbeth\'s ambition and how it differs from, yet complements, Macbeth\'s.',
      'Each paragraph should be 130-160 words and include at least two embedded quotations.',
    ],
    estimatedTime: '35 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3'],
    modelAnswer:
      'Paragraph 1 should identify that Shakespeare presents Macbeth\'s ambition as already present before the witches speak -- they catalyse rather than create it. The "vaulting ambition, which o\'erleaps itself" speech names his own fatal flaw with devastating self-awareness, suggesting the tragedy lies not in ignorance but in the inability to resist desire even when its destructiveness is known. Paragraph 2 should note that Lady Macbeth\'s ambition is channelled through Macbeth rather than exercised directly -- a product of her gender and social position -- and is expressed through the more disturbing language of self-dehumanisation ("unsex me here"). The complementary nature of their ambitions means each enables the other\'s worst impulses. A mastery response notes that both characters\' ambitions ultimately consume them, reinforcing the play\'s moral structure.',
    extension:
      'Write a third paragraph arguing that ambition is not entirely negative in the play -- consider moments where it is presented as a force for courage or resolution.',
  },
  {
    id: 'igcse-hw-macbeth-04',
    title: 'Timed Essay: Macbeth as a Product of His Context',
    yearGroup: 'Year 11',
    termUnit: 'Lit: Macbeth',
    type: 'timed-response',
    difficulty: 'mastery',
    instructions: [
      'Under timed conditions (45 minutes), write a full essay in response to: "How far is Macbeth\'s tragedy the result of his own choices rather than the influence of external forces?"',
      'Plan for 5 minutes. In your essay, consider: the role of the witches and whether they cause or predict Macbeth\'s actions; Lady Macbeth\'s manipulation; Macbeth\'s own will and moral awareness; the Jacobean concept of free will versus fate.',
      'Write approximately 600-700 words. Include relevant contextual references.',
    ],
    estimatedTime: '45 minutes',
    linkedObjectives: ['IGCSE.Lit.AO1', 'IGCSE.Lit.AO2', 'IGCSE.Lit.AO3', 'IGCSE.Lit.M1', 'IGCSE.Lit.M5'],
    modelAnswer:
      'This essay question is designed to generate genuinely contested argument. A strong thesis will stake a position rather than hedging: "While the witches and Lady Macbeth are crucial catalysts, Shakespeare makes clear through Macbeth\'s soliloquies that the choice to act is always his own, making his tragedy ultimately one of moral failure rather than external victimisation." The witches do not instruct Macbeth to kill Duncan -- that leap is his. Lady Macbeth manipulates but cannot compel. His soliloquies demonstrate moral awareness throughout, which is what makes the tragedy profound rather than merely eventful. A mastery response engages with the Jacobean context of free will: a Protestant audience would believe humans were fully responsible for their moral choices regardless of temptation. The conclusion should evaluate the balance of responsibility rather than simply summarising the body paragraphs.',
    extension:
      'After marking, identify the paragraph where you engage most effectively with context. Write a sentence explaining exactly how that contextual reference deepens the argument rather than simply adding information.',
  },
];
