// ─────────────────────────────────────────────────────────────
// Year 9 Homework Task Bank
// T1: A Christmas Carol (10 tasks)
// T2: Writing Craft — Transactional & Non-Fiction (10 tasks)
// T3: Of Mice and Men (10 tasks)
// ─────────────────────────────────────────────────────────────

export interface HomeworkTask {
  id: string;
  title: string;
  yearGroup: 'Year 9';
  termUnit: string;
  type:
    | 'reading-response'
    | 'extended-writing'
    | 'research'
    | 'creative'
    | 'revision'
    | 'vocabulary'
    | 'grammar-practice'
    | 'analysis';
  description: string;
  instructions: string[];
  estimatedTime: string;
  dueLesson: number;
  markingCriteria: string[];
  parentGuidance: string;
  differentiation: {
    support: string;
    core: string;
    stretch: string;
  };
}

// ═══════════════════════════════════════════════════════════════
// TERM 1 — A CHRISTMAS CAROL (10 tasks)
// ═══════════════════════════════════════════════════════════════

const t1Tasks: HomeworkTask[] = [
  {
    id: 'y9-t1-hw-01',
    title: 'Victorian Poverty Research',
    yearGroup: 'Year 9',
    termUnit: 'T1: A Christmas Carol',
    type: 'research',
    description:
      'Research the conditions of the Victorian poor, including workhouses, child labour, and life expectancy, to build the contextual knowledge needed to understand Dickens\'s social message.',
    instructions: [
      'Use at least two sources (e.g. a textbook, a reliable website such as the Victorian Web, or a library book).',
      'Make notes on: (a) working conditions, (b) workhouses, (c) child poverty, (d) the gap between rich and poor.',
      'Write a short summary (150-200 words) of what you have found.',
      'Note two or three specific facts you could use as context in an essay on A Christmas Carol.',
      'Bring your notes to the next lesson.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 2,
    markingCriteria: [
      'Two or more sources consulted and acknowledged.',
      'Notes cover all four bullet areas.',
      'Summary is accurate and in the student\'s own words.',
      'At least two specific contextual facts identified for essay use.',
    ],
    parentGuidance:
      'Encourage your child to use a range of sources and to make notes rather than copying text. Ask them to explain one fact they found interesting.',
    differentiation: {
      support:
        'Use the provided research scaffold sheet with sub-headings and sentence starters. Focus on workhouses and child poverty only.',
      core: 'Cover all four bullet areas and write a 150-200 word summary.',
      stretch:
        'Compare conditions before and after Dickens published the novella, and consider how public opinion may have shifted.',
    },
  },
  {
    id: 'y9-t1-hw-02',
    title: 'Re-read Stave 1 and Annotate',
    yearGroup: 'Year 9',
    termUnit: 'T1: A Christmas Carol',
    type: 'reading-response',
    description:
      'Re-read Stave 1 of A Christmas Carol and annotate the text to identify how Dickens presents Scrooge as a symbol of selfish capitalism.',
    instructions: [
      'Re-read Stave 1 carefully, from the opening to the arrival of Marley\'s Ghost.',
      'Highlight or underline at least six quotations that reveal Scrooge\'s character.',
      'For each quotation, add a brief annotation: what it shows about Scrooge and what language technique is used.',
      'Note any references to cold, darkness, or isolation and consider what these suggest.',
      'Write two or three sentences explaining your overall impression of Scrooge at this point in the novella.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 3,
    markingCriteria: [
      'At least six quotations identified and annotated.',
      'Each annotation comments on meaning and technique.',
      'Imagery of cold/darkness/isolation noticed and interpreted.',
      'Overall impression is expressed clearly in own words.',
    ],
    parentGuidance:
      'Sit with your child while they read if possible. Ask them to read a favourite quotation aloud and explain why they chose it.',
    differentiation: {
      support:
        'A list of six key quotations is provided; students annotate those rather than selecting their own.',
      core: 'Select and annotate six quotations independently.',
      stretch:
        'Consider how the narrative voice shapes the reader\'s attitude towards Scrooge, and analyse one quotation at sentence-level (word choice, syntax, sound).',
    },
  },
  {
    id: 'y9-t1-hw-03',
    title: 'Character Analysis Paragraph: Scrooge',
    yearGroup: 'Year 9',
    termUnit: 'T1: A Christmas Carol',
    type: 'analysis',
    description:
      'Write a well-structured analytical paragraph on how Dickens presents Scrooge as cold and uncaring in Stave 1.',
    instructions: [
      'Use the P-E-E-L structure: Point, Evidence, Explanation, Link.',
      'Begin with a clear topic sentence stating your argument about Scrooge.',
      'Embed a quotation from Stave 1 as your evidence.',
      'Explain the effect of specific language choices (word-level analysis).',
      'End with a linking sentence that connects to Dickens\'s broader social message.',
      'Aim for 150-200 words.',
    ],
    estimatedTime: '35 minutes',
    dueLesson: 4,
    markingCriteria: [
      'Clear topic sentence with an arguable point.',
      'Embedded quotation used correctly.',
      'Language analysed at word level.',
      'Link to Dickens\'s purpose or context made.',
      'Accurate spelling and punctuation throughout.',
    ],
    parentGuidance:
      'Check that your child has not simply re-told the story. The paragraph should argue a point and refer closely to the text.',
    differentiation: {
      support:
        'Use the provided paragraph frame with sentence starters for each stage of P-E-E-L.',
      core: 'Write independently using the P-E-E-L structure.',
      stretch:
        'Write two linked paragraphs, each with a different quotation, and compare the effect of two language techniques.',
    },
  },
  {
    id: 'y9-t1-hw-04',
    title: 'Context Integration Exercise',
    yearGroup: 'Year 9',
    termUnit: 'T1: A Christmas Carol',
    type: 'grammar-practice',
    description:
      'Practise weaving contextual knowledge into analytical writing without letting it overpower close reading of the text.',
    instructions: [
      'Read the three example paragraphs on the worksheet (provided in class).',
      'Identify which paragraph integrates context most effectively and explain why in 2-3 sentences.',
      'Rewrite one of the weaker paragraphs, improving the way context is embedded.',
      'Use the phrase "Dickens may have intended..." or "A Victorian reader would have..." at least once.',
      'Keep the focus on a specific quotation throughout.',
    ],
    estimatedTime: '30 minutes',
    dueLesson: 5,
    markingCriteria: [
      'Correct paragraph identified with clear justification.',
      'Rewritten paragraph maintains focus on a quotation.',
      'Context is embedded rather than dropped in as a separate sentence.',
      'Either the specified phrase (or similar) is used naturally.',
    ],
    parentGuidance:
      'Remind your child that context should support analysis, not replace it. Ask them to explain the difference between \'telling us facts\' and \'using facts to support an argument\'.',
    differentiation: {
      support:
        'Rewrite with a sentence-level scaffold showing where context, quotation, and analysis slots in.',
      core: 'Complete all four steps independently.',
      stretch:
        'Write a completely original paragraph on a different moment in the novella, integrating both context and close language analysis seamlessly.',
    },
  },
  {
    id: 'y9-t1-hw-05',
    title: 'Vocabulary Log: A Christmas Carol',
    yearGroup: 'Year 9',
    termUnit: 'T1: A Christmas Carol',
    type: 'vocabulary',
    description:
      'Build a personal vocabulary log of key literary, contextual, and analytical terms linked to A Christmas Carol.',
    instructions: [
      'Record 15 words or phrases from your reading and lessons so far (e.g. "avarice", "philanthropy", "allegory", "pathos").',
      'For each entry, write: (a) the definition in your own words, (b) an example sentence using the word correctly, (c) a note on how it connects to the novella.',
      'Organise your log into three columns: Word / Definition / Example Sentence.',
      'Choose three words you find most useful and write a short paragraph using all three.',
    ],
    estimatedTime: '35 minutes',
    dueLesson: 6,
    markingCriteria: [
      '15 entries completed with definition and example sentence.',
      'Definitions are in the student\'s own words.',
      'Short paragraph uses all three chosen words accurately.',
      'Log is clearly laid out and easy to read.',
    ],
    parentGuidance:
      'Quiz your child on five words from their log. Encourage them to explain the word and then use it in a sentence about the book.',
    differentiation: {
      support:
        'A bank of 20 words is provided; students choose 15 and complete definitions with the aid of the glossary sheet.',
      core: 'Select and define 15 words independently.',
      stretch:
        'Add etymology (word origins) for five entries and consider how the word\'s history adds meaning when applied to the novella.',
    },
  },
  {
    id: 'y9-t1-hw-06',
    title: 'Scrooge Transformation Essay Plan',
    yearGroup: 'Year 9',
    termUnit: 'T1: A Christmas Carol',
    type: 'extended-writing',
    description:
      'Plan a full essay responding to the question: "How does Dickens present the transformation of Scrooge in A Christmas Carol?"',
    instructions: [
      'Write a one-sentence thesis statement that answers the question directly.',
      'Plan three body paragraphs: use a spider diagram or bullet-point plan for each.',
      'Each paragraph plan should include: a topic sentence, a quotation, a language point, and a context point.',
      'Plan an introduction (1-2 sentences of context, the thesis) and a conclusion (broader significance of the transformation).',
      'Annotate your plan to show which staves your evidence comes from.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 7,
    markingCriteria: [
      'Clear thesis statement that directly addresses the question.',
      'Three body paragraph plans each with topic sentence, quotation, language point, and context.',
      'Introduction and conclusion planned.',
      'Evidence spans more than one stave.',
    ],
    parentGuidance:
      'Ask your child to talk through their plan before writing it down. Being able to explain the argument aloud is a great sign that the ideas are clear.',
    differentiation: {
      support:
        'Use a structured planning template with labelled boxes for each section.',
      core: 'Complete the plan using any format (spider diagram, bullets, table).',
      stretch:
        'Add a counter-argument paragraph to the plan, considering whether Scrooge\'s transformation is fully convincing.',
    },
  },
  {
    id: 'y9-t1-hw-07',
    title: 'Analytical Paragraph: The Ghost of Christmas Past',
    yearGroup: 'Year 9',
    termUnit: 'T1: A Christmas Carol',
    type: 'analysis',
    description:
      'Write an analytical paragraph on how Dickens uses the Ghost of Christmas Past to reveal Scrooge\'s emotional capacity.',
    instructions: [
      'Re-read the scenes involving the Ghost of Christmas Past in Stave 2.',
      'Write a P-E-E-L paragraph focused on one key moment where we see Scrooge show emotion.',
      'Analyse the specific language Dickens uses to describe Scrooge\'s reaction.',
      'Link your analysis to the idea that Scrooge\'s coldness is learned, not innate.',
      'Aim for 150-180 words.',
    ],
    estimatedTime: '35 minutes',
    dueLesson: 8,
    markingCriteria: [
      'Focused on one specific moment rather than summarising the whole stave.',
      'Language analysed at word and/or sentence level.',
      'Link made to the theme of redemption or learned behaviour.',
      'Accurate and fluent writing throughout.',
    ],
    parentGuidance:
      'Encourage your child to focus on just one quotation and really dig into the specific words rather than writing a general response.',
    differentiation: {
      support:
        'Two quotations are pre-selected; students choose one and follow the paragraph frame.',
      core: 'Select a quotation independently and write the full P-E-E-L paragraph.',
      stretch:
        'Explore the structural significance of Stave 2 within the novella as a whole, linking to Dickens\'s purpose.',
    },
  },
  {
    id: 'y9-t1-hw-08',
    title: 'Analytical Paragraph: Ignorance and Want',
    yearGroup: 'Year 9',
    termUnit: 'T1: A Christmas Carol',
    type: 'analysis',
    description:
      'Write an analytical paragraph on how Dickens uses the allegorical figures of Ignorance and Want to deliver a social warning.',
    instructions: [
      'Re-read the passage in Stave 3 where the Ghost of Christmas Present reveals Ignorance and Want from beneath his robe.',
      'Write a P-E-E-L paragraph arguing what Dickens wants the reader to understand through this image.',
      'Analyse the words "Ignorance" and "Want" as deliberate choices (consider capitalisation and connotation).',
      'Reference the Victorian context of the New Poor Law (1834) if you can.',
      'Aim for 150-200 words.',
    ],
    estimatedTime: '35 minutes',
    dueLesson: 9,
    markingCriteria: [
      'Clear argument about Dickens\'s social purpose.',
      'Analysis of specific word choices including capitalisation.',
      'Contextual reference used to strengthen the argument.',
      'Writing is well-structured and fluent.',
    ],
    parentGuidance:
      'Help your child think about why Dickens names these figures rather than describing them — names carry weight in allegory.',
    differentiation: {
      support:
        'Provide the quotation and a list of key terms; student writes the explanation and link sections.',
      core: 'Write the full paragraph independently.',
      stretch:
        'Compare this moment with a second allegorical moment elsewhere in the novella (e.g. Marley\'s chains) and consider what both reveal about Dickens\'s method.',
    },
  },
  {
    id: 'y9-t1-hw-09',
    title: 'Timed Response: Extract Question',
    yearGroup: 'Year 9',
    termUnit: 'T1: A Christmas Carol',
    type: 'revision',
    description:
      'Complete a timed extract-based question to practise writing under pressure and managing time effectively.',
    instructions: [
      'Read the printed extract from Stave 4 (the churchyard scene) carefully — allow yourself 5 minutes to read and annotate.',
      'Answer the question: "How does Dickens create a sense of fear and dread in this extract?" in 20 minutes.',
      'Use at least two quotations from the extract.',
      'Comment on language, structure, and Dickens\'s purpose.',
      'Time yourself strictly — start a timer and stop at 20 minutes.',
      'After finishing, note one thing you did well and one target for next time.',
    ],
    estimatedTime: '30 minutes',
    dueLesson: 10,
    markingCriteria: [
      'Answer addresses the question throughout.',
      'Two or more embedded quotations used.',
      'Comment on language AND at least one structural or contextual point.',
      'Self-reflection note included.',
    ],
    parentGuidance:
      'Please make sure your child works to the strict time limit — the purpose of this task is to practise writing quickly, not to produce a perfect response.',
    differentiation: {
      support:
        'Allow 30 minutes and provide two pre-selected quotations to analyse.',
      core: 'Complete in 20 minutes from a cold start.',
      stretch:
        'After the 20-minute response, spend a further 10 minutes extending one paragraph to include a more sophisticated structural or contextual point.',
    },
  },
  {
    id: 'y9-t1-hw-10',
    title: 'Reflection: Dickens\'s Purpose',
    yearGroup: 'Year 9',
    termUnit: 'T1: A Christmas Carol',
    type: 'reading-response',
    description:
      'Write a reflective response on what you believe Dickens\'s primary purpose was in writing A Christmas Carol, using evidence from across the novella.',
    instructions: [
      'Consider the following possible purposes: (a) social reform, (b) moral instruction, (c) entertainment, (d) personal guilt.',
      'Decide which you find most convincing and write 200-250 words arguing your view.',
      'Support your argument with at least two pieces of evidence from the novella.',
      'Acknowledge a counter-argument briefly before dismissing it.',
      'End with a sentence explaining why the novella still matters today.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 11,
    markingCriteria: [
      'A clear and argued position taken.',
      'Two or more pieces of evidence from the novella cited.',
      'Counter-argument acknowledged.',
      'Concluding sentence relevant and thoughtful.',
      'Writing is in a formal, analytical register.',
    ],
    parentGuidance:
      'Ask your child which purpose they found most convincing and why. Encouraging them to defend their view in conversation helps consolidate the argument.',
    differentiation: {
      support:
        'Provide a structured template: Argument (I believe...) / Evidence 1 / Evidence 2 / Counter-argument / Conclusion.',
      core: 'Write 200-250 words independently.',
      stretch:
        'Explore how Dickens\'s own biography (his childhood poverty, his father\'s imprisonment in a debtors\' gaol) may have shaped his purpose, drawing on secondary reading.',
    },
  },
];

// ═══════════════════════════════════════════════════════════════
// TERM 2 — WRITING CRAFT: TRANSACTIONAL & NON-FICTION (10 tasks)
// ═══════════════════════════════════════════════════════════════

const t2Tasks: HomeworkTask[] = [
  {
    id: 'y9-t2-hw-01',
    title: 'Annotate a Newspaper Article',
    yearGroup: 'Year 9',
    termUnit: 'T2: Writing Craft',
    type: 'reading-response',
    description:
      'Read and closely annotate a newspaper article to identify how writers use structural and language techniques to influence readers.',
    instructions: [
      'Find a news or opinion article from a broadsheet newspaper (e.g. The Guardian, The Times, The Telegraph) — print or digital.',
      'Read the article once for overall understanding, then re-read to annotate.',
      'Label at least five techniques, e.g. rhetorical question, anecdote, statistics, emotive language, direct address.',
      'For each annotation, write a brief note explaining the intended effect on the reader.',
      'At the bottom of the page, write 3-4 sentences evaluating how effectively the writer has argued their point.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 13,
    markingCriteria: [
      'At least five techniques labelled accurately.',
      'Each annotation explains intended effect, not just identifies the technique.',
      'Evaluation is balanced and uses appropriate terminology.',
      'Article is from a named, credible source.',
    ],
    parentGuidance:
      'Help your child choose an article on a topic they find genuinely interesting — engagement with the content improves the quality of annotation.',
    differentiation: {
      support:
        'Provide a pre-selected article with six techniques highlighted; students write the effect annotations only.',
      core: 'Select and annotate an article independently.',
      stretch:
        'Compare two articles on the same topic from different publications and comment on how purpose, audience, and tone differ.',
    },
  },
  {
    id: 'y9-t2-hw-02',
    title: 'Write a Speech on a Local Issue',
    yearGroup: 'Year 9',
    termUnit: 'T2: Writing Craft',
    type: 'extended-writing',
    description:
      'Write a persuasive speech addressed to the school council arguing for or against a local or school issue of your choice.',
    instructions: [
      'Choose a genuine local or school issue you care about (e.g. litter, school uniform, local green space, bus routes).',
      'Write a speech of 300-400 words.',
      'Use at least four rhetorical devices: direct address, rule of three, rhetorical question, anecdote or statistic.',
      'Structure your speech with a strong opening hook, developed argument, counter-argument, and call to action.',
      'Read your draft aloud and revise anything that sounds unnatural.',
    ],
    estimatedTime: '50 minutes',
    dueLesson: 14,
    markingCriteria: [
      'Clear, consistent argument throughout.',
      'Four or more rhetorical devices used accurately and effectively.',
      'Speech structure followed: hook, argument, counter, call to action.',
      'Appropriate register for a school-council audience.',
      '300-400 word count met.',
    ],
    parentGuidance:
      'Ask your child to read the speech aloud to you. Listening helps them notice where sentences are too long or ideas are unclear.',
    differentiation: {
      support:
        'Provide a speech scaffold with labelled sections and sentence starters for each rhetorical device.',
      core: 'Write independently using the four required devices.',
      stretch:
        'Vary sentence structures deliberately for effect (e.g. short punchy sentences for emphasis, longer flowing sentences for pathos) and annotate your choices.',
    },
  },
  {
    id: 'y9-t2-hw-03',
    title: 'Letter of Complaint Draft',
    yearGroup: 'Year 9',
    termUnit: 'T2: Writing Craft',
    type: 'extended-writing',
    description:
      'Draft a formal letter of complaint about a real or imagined issue, demonstrating control of formal register and transactional conventions.',
    instructions: [
      'Choose a scenario: a faulty product, a poor service experience, or a local council issue.',
      'Write the letter in full formal layout: sender\'s address, date, recipient\'s address, salutation, body, sign-off.',
      'State your complaint clearly in the opening paragraph.',
      'Develop your case with specific details in the second paragraph.',
      'Propose a resolution in the third paragraph.',
      'Maintain a formal, measured tone throughout — avoid aggressive or emotional language.',
      'Aim for 250-350 words.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 15,
    markingCriteria: [
      'Full formal letter layout used correctly.',
      'Complaint clearly stated in opening paragraph.',
      'Specific details used to develop the case.',
      'Resolution proposed.',
      'Formal register maintained throughout.',
    ],
    parentGuidance:
      'Point out to your child that the best complaint letters are firm but polite. Discuss any real-life complaint letters you have written as a family.',
    differentiation: {
      support:
        'Provide a template with the layout pre-formatted and sentence starters for each paragraph.',
      core: 'Write independently from a chosen scenario.',
      stretch:
        'Write two versions of the opening paragraph — one too aggressive, one too passive — then write the optimal version and explain why the register matters.',
    },
  },
  {
    id: 'y9-t2-hw-04',
    title: 'Report on a School Topic',
    yearGroup: 'Year 9',
    termUnit: 'T2: Writing Craft',
    type: 'extended-writing',
    description:
      'Write a formal report on a topic related to school life (e.g. canteen food, use of mobile phones, homework policy), practising the conventions of report writing.',
    instructions: [
      'Choose a school-related topic and write a report of 300-400 words.',
      'Use the following sections: Title, Introduction, Findings, Recommendations, Conclusion.',
      'Use subheadings, bullet points where appropriate, and a formal impersonal tone.',
      'Include at least one invented statistic or survey result to support your findings.',
      'Avoid first-person ("I think...") — write in the passive or third person where possible.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 16,
    markingCriteria: [
      'Five required sections present and clearly labelled.',
      'Formal, impersonal register maintained.',
      'At least one statistic or survey result included.',
      'Appropriate use of bullet points or numbered lists.',
      '300-400 word count met.',
    ],
    parentGuidance:
      'Show your child a real-world report (e.g. a government press release or school inspection summary) so they can see the genre in action.',
    differentiation: {
      support:
        'Provide a partially completed report frame with the sections labelled and two sentences written per section as models.',
      core: 'Complete the report independently.',
      stretch:
        'Add a short "Methodology" section explaining how the data was gathered, and discuss any limitations of the findings.',
    },
  },
  {
    id: 'y9-t2-hw-05',
    title: 'Descriptive Paragraph: Sense of Place',
    yearGroup: 'Year 9',
    termUnit: 'T2: Writing Craft',
    type: 'creative',
    description:
      'Write a vivid descriptive paragraph about a real place you know well, focusing on the use of the senses and figurative language.',
    instructions: [
      'Choose a place you know well and can visualise clearly (e.g. a market, a park, your kitchen at breakfast time).',
      'Write a single extended paragraph of 150-200 words.',
      'Use all five senses: sight, sound, smell, touch, and taste where relevant.',
      'Include at least one metaphor or simile and one piece of personification.',
      'Vary your sentence lengths for effect.',
    ],
    estimatedTime: '35 minutes',
    dueLesson: 17,
    markingCriteria: [
      'All five senses referenced.',
      'One or more metaphors or similes used accurately.',
      'Personification present and effective.',
      'Sentence variety evident.',
      'Writing creates a strong sense of atmosphere.',
    ],
    parentGuidance:
      'Ask your child to close their eyes and describe the place to you first — this spoken rehearsal often produces more vivid vocabulary than going straight to the page.',
    differentiation: {
      support:
        'Provide a sensory planning grid; students fill in what they would see, hear, smell, touch, and taste, then write the paragraph from their notes.',
      core: 'Plan and write independently.',
      stretch:
        'Write the same place twice — once in daylight, once at night — and comment on how atmosphere shifts with conditions.',
    },
  },
  {
    id: 'y9-t2-hw-06',
    title: 'Persuasive Writing Techniques Revision',
    yearGroup: 'Year 9',
    termUnit: 'T2: Writing Craft',
    type: 'revision',
    description:
      'Revise the key persuasive and rhetorical techniques covered this term by creating a revision resource of your choice.',
    instructions: [
      'Review your class notes on persuasive writing techniques (e.g. AFOREST, rhetorical devices, tone, structure).',
      'Create a revision aid — this could be flashcards, a mind map, a summary sheet, or a quiz.',
      'Include at least eight techniques with definitions and a short example of each.',
      'Test yourself: cover the definitions and try to recall each technique from the term alone.',
      'Note any techniques you find hard to remember and write each one out three times with an example.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 18,
    markingCriteria: [
      'Eight or more techniques covered.',
      'Each technique has an accurate definition and example.',
      'Self-test completed and weak areas noted.',
      'Revision resource is clear and well-organised.',
    ],
    parentGuidance:
      'You can help by testing your child with a simple quiz: read out the example and ask them to name the technique.',
    differentiation: {
      support:
        'Provide a list of techniques; students match definitions from a word bank and write examples.',
      core: 'Create the revision resource independently.',
      stretch:
        'Write a short persuasive paragraph that deliberately uses six different techniques, then annotate each one.',
    },
  },
  {
    id: 'y9-t2-hw-07',
    title: 'Redraft a Transactional Piece',
    yearGroup: 'Year 9',
    termUnit: 'T2: Writing Craft',
    type: 'extended-writing',
    description:
      'Revisit a transactional writing piece produced in class (letter, speech, or report), apply teacher feedback, and redraft to improve it.',
    instructions: [
      'Re-read your marked class piece and the feedback given.',
      'Highlight three specific improvements you will make.',
      'Redraft the full piece, incorporating all suggested changes and any additional improvements you identify yourself.',
      'When finished, write a short paragraph (5-6 sentences) explaining what you changed and why.',
      'Staple or clip the original to the back of the redraft.',
    ],
    estimatedTime: '50 minutes',
    dueLesson: 19,
    markingCriteria: [
      'Three or more specific improvements identified and acted upon.',
      'Redraft is clearly improved in the areas targeted by feedback.',
      'Reflection paragraph explains changes with reference to the marking criteria.',
      'Original piece submitted alongside the redraft.',
    ],
    parentGuidance:
      'Looking at earlier feedback and improving work is one of the most powerful learning habits. Praise your child for the effort of redrafting, not just for the final product.',
    differentiation: {
      support:
        'Provide a redrafting checklist matched to the specific type of writing (letter / speech / report).',
      core: 'Redraft independently using teacher feedback.',
      stretch:
        'After redrafting, write a second reflection identifying any further improvements you would still like to make and what you would need to learn to achieve them.',
    },
  },
  {
    id: 'y9-t2-hw-08',
    title: 'Vocabulary for Writing',
    yearGroup: 'Year 9',
    termUnit: 'T2: Writing Craft',
    type: 'vocabulary',
    description:
      'Build a bank of high-quality vocabulary for different transactional writing purposes.',
    instructions: [
      'Create a vocabulary bank organised into three columns: Persuasive Writing / Formal Writing / Descriptive Writing.',
      'Add at least six words or phrases to each column (18 in total).',
      'For each entry, write a model sentence showing the word used correctly.',
      'Highlight any words that could appear in more than one column and write a note explaining how the context changes.',
      'Choose your three favourite new expressions and commit them to memory for use in your next timed task.',
    ],
    estimatedTime: '35 minutes',
    dueLesson: 20,
    markingCriteria: [
      'Three columns present with at least six entries each.',
      'Each entry has a correct model sentence.',
      'Overlap between columns acknowledged and discussed.',
      'Student can use three chosen expressions in spoken or written tasks.',
    ],
    parentGuidance:
      'Ask your child to explain two words from each column. Encouraging them to use the words in normal conversation helps them stick.',
    differentiation: {
      support:
        'Provide 24 words pre-sorted into the three categories; students write the model sentences only.',
      core: 'Build the vocabulary bank independently.',
      stretch:
        'Add a fourth column for "Writing to Inform" and reflect on how vocabulary choices signal purpose to the reader.',
    },
  },
  {
    id: 'y9-t2-hw-09',
    title: 'Timed Writing Practice',
    yearGroup: 'Year 9',
    termUnit: 'T2: Writing Craft',
    type: 'revision',
    description:
      'Complete a timed transactional writing task to consolidate skills and build confidence under exam conditions.',
    instructions: [
      'Choose one of the following tasks: (a) write a letter to your head teacher arguing for a change to the school day, OR (b) write a speech for a Year 9 assembly on a topic of your choice.',
      'Allow yourself 5 minutes to plan and 35 minutes to write.',
      'Aim for 350-450 words.',
      'Do not use a dictionary or thesaurus during the timed section.',
      'After finishing, spend 5 minutes checking for errors and making corrections neatly.',
      'Write a star and a wish: one thing you are proud of and one target.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 21,
    markingCriteria: [
      'Task completed within the time limit.',
      '350-450 word count achieved.',
      'Appropriate form, audience, and purpose evident.',
      'Self-assessment (star and wish) completed honestly.',
    ],
    parentGuidance:
      'Please help enforce the time limit. The ability to plan and write quickly is a skill that needs practice and your support in creating realistic conditions at home is invaluable.',
    differentiation: {
      support:
        'Allow 45 minutes for writing and permit the use of a vocabulary list compiled in HW-08.',
      core: 'Complete under the standard conditions above.',
      stretch:
        'After the timed write, annotate your work to label where you used five different techniques, then consider where you could have pushed your craft further.',
    },
  },
  {
    id: 'y9-t2-hw-10',
    title: 'Self-Assessment and Target-Setting',
    yearGroup: 'Year 9',
    termUnit: 'T2: Writing Craft',
    type: 'revision',
    description:
      'Review your work from Term 2, assess your progress against the writing assessment objectives, and set three specific targets for Term 3.',
    instructions: [
      'Look back through all marked work from this term.',
      'Complete the self-assessment grid (provided): rate yourself 1-4 on each writing skill (form, purpose, vocabulary, structure, grammar, accuracy).',
      'Write a paragraph (100-150 words) summarising your strengths as a writer this term.',
      'Write three SMART targets for Term 3 writing (Specific, Measurable, Achievable, Relevant, Time-bound).',
      'Share your targets with a parent or carer and ask them to sign the bottom of the sheet.',
    ],
    estimatedTime: '35 minutes',
    dueLesson: 22,
    markingCriteria: [
      'Self-assessment grid completed honestly and thoughtfully.',
      'Strengths paragraph is specific and refers to actual pieces of work.',
      'Three SMART targets are genuinely useful and actionable.',
      'Parent or carer signature present.',
    ],
    parentGuidance:
      'This task requires a conversation with your child about their progress. Please read their targets and countersign to confirm you have seen them. You do not need to assess their work yourself.',
    differentiation: {
      support:
        'Provide sentence starters for the strengths paragraph and a template with SMART explained step by step.',
      core: 'Complete the task independently.',
      stretch:
        'Identify one piece of work from Term 2 that you feel represents your best writing. Write a detailed annotation explaining precisely why you are proud of it.',
    },
  },
];

// ═══════════════════════════════════════════════════════════════
// TERM 3 — OF MICE AND MEN (10 tasks)
// ═══════════════════════════════════════════════════════════════

const t3Tasks: HomeworkTask[] = [
  {
    id: 'y9-t3-hw-01',
    title: 'Re-read Chapter 1 and Annotate',
    yearGroup: 'Year 9',
    termUnit: 'T3: Of Mice and Men',
    type: 'reading-response',
    description:
      'Re-read Chapter 1 of Of Mice and Men and annotate how Steinbeck establishes the relationship between George and Lennie.',
    instructions: [
      'Re-read Chapter 1 from the opening description of the Salinas River to the end of the chapter.',
      'Annotate at least six moments that reveal the dynamic between George and Lennie.',
      'Label the power balance in each moment: who has authority and why?',
      'Identify two quotations that show Lennie\'s childlike qualities and two that show George\'s frustration.',
      'Write 3-4 sentences at the end of your annotations predicting how this relationship might be tested later in the novel.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 24,
    markingCriteria: [
      'Six or more annotated moments identified.',
      'Power balance noted and explained for each.',
      'Four quotations (two per character focus) identified and commented on.',
      'Prediction is reasoned and refers to the text.',
    ],
    parentGuidance:
      'Ask your child what they think George and Lennie\'s relationship means for the novel. Discussing the idea of friendship and dependence is a great way into the themes.',
    differentiation: {
      support:
        'Provide six quotations pre-selected from Chapter 1; students annotate the power balance and character quality for each.',
      core: 'Select and annotate independently.',
      stretch:
        'Consider how Steinbeck uses the physical descriptions of George and Lennie to foreshadow conflict, and research the term "foreshadowing" if unfamiliar.',
    },
  },
  {
    id: 'y9-t3-hw-02',
    title: '1930s America Research Task',
    yearGroup: 'Year 9',
    termUnit: 'T3: Of Mice and Men',
    type: 'research',
    description:
      'Research the historical and social context of 1930s America, including the Great Depression and the experience of migrant workers, to deepen understanding of the novel.',
    instructions: [
      'Research the following areas: (a) the Great Depression, (b) migrant workers in California, (c) the Dust Bowl, (d) the American Dream.',
      'Make notes on each area (bullet points are fine).',
      'Find one image that captures life during the Great Depression and write 3-4 sentences explaining what it shows.',
      'Write a short paragraph (100-150 words) explaining how this context helps a reader understand why George and Lennie dream of owning land.',
      'Use at least two sources and note them at the bottom of your work.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 25,
    markingCriteria: [
      'All four research areas covered.',
      'Image chosen and described accurately.',
      'Contextual paragraph links research to the novel explicitly.',
      'Two sources acknowledged.',
    ],
    parentGuidance:
      'If possible, look at photos from the 1930s together — the Farm Security Administration archive has many powerful images freely available online.',
    differentiation: {
      support:
        'Provide a research guide with sub-headings and key vocabulary for each area, plus a list of suggested websites.',
      core: 'Research independently.',
      stretch:
        'Consider how the context of racial segregation adds an additional layer to Crooks\'s situation, drawing on your research.',
    },
  },
  {
    id: 'y9-t3-hw-03',
    title: 'Character Comparison: George and Lennie',
    yearGroup: 'Year 9',
    termUnit: 'T3: Of Mice and Men',
    type: 'analysis',
    description:
      'Write a structured comparison of how Steinbeck presents the characters of George and Lennie in the first half of the novel.',
    instructions: [
      'Create a comparison table with columns for George and Lennie, covering: appearance, personality, role in the relationship, key quotation.',
      'Write two linked paragraphs comparing the characters: one paragraph per character, each ending with a sentence that explicitly links to the other.',
      'Use comparative connectives (in contrast, similarly, whereas, while).',
      'Refer to at least one quotation per character.',
      'In your concluding sentence, argue why Steinbeck creates such contrasting characters.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 26,
    markingCriteria: [
      'Comparison table completed accurately.',
      'Two analytical paragraphs with explicit comparison.',
      'Comparative connectives used correctly.',
      'One quotation per character.',
      'Concluding sentence addresses Steinbeck\'s purpose.',
    ],
    parentGuidance:
      'Ask your child which character they would rather be friends with and why — this personal response often generates good ideas for formal writing.',
    differentiation: {
      support:
        'Provide a paragraph frame with comparative connectives in place; students fill in the analysis around the scaffold.',
      core: 'Write the paragraphs independently from the comparison table.',
      stretch:
        'Write a third paragraph exploring how the relationship between George and Lennie reflects Steinbeck\'s broader themes of loneliness and dependence.',
    },
  },
  {
    id: 'y9-t3-hw-04',
    title: "Analysis Paragraph: Curley's Wife",
    yearGroup: 'Year 9',
    termUnit: 'T3: Of Mice and Men',
    type: 'analysis',
    description:
      "Write an analytical paragraph on how Steinbeck presents Curley's Wife as both a victim and a threat.",
    instructions: [
      "Re-read the scenes involving Curley's Wife, paying particular attention to her first appearance and her conversation with Lennie in the barn.",
      "Write a P-E-E-L paragraph arguing that Steinbeck presents Curley's Wife as a victim of her circumstances.",
      'Use one embedded quotation from her first appearance and one from the barn scene.',
      "In your explanation, refer to the context of women's limited roles in 1930s America.",
      "End with a sentence acknowledging that other readers might see her as dangerous, and briefly explain why.",
    ],
    estimatedTime: '40 minutes',
    dueLesson: 27,
    markingCriteria: [
      'Clear argument about Steinbeck\'s presentation made.',
      'Two embedded quotations from different sections of the novel.',
      'Contextual reference to women in 1930s America.',
      'Counter-reading acknowledged in the final sentence.',
    ],
    parentGuidance:
      "Discuss with your child why Steinbeck never gives Curley's Wife a name. This is a good starting point for thinking about the character's role.",
    differentiation: {
      support:
        'Provide two pre-selected quotations and a paragraph frame; students write the explanation and context sections.',
      core: 'Select quotations and write the full paragraph independently.',
      stretch:
        "Write a second paragraph arguing the alternative reading — that Curley's Wife poses a threat to others — and consider which reading is more convincing.",
    },
  },
  {
    id: 'y9-t3-hw-05',
    title: 'Context Essay Plan: Dreams and Disappointment',
    yearGroup: 'Year 9',
    termUnit: 'T3: Of Mice and Men',
    type: 'extended-writing',
    description:
      'Plan a full essay responding to the question: "How does Steinbeck explore the theme of dreams and their destruction in Of Mice and Men?"',
    instructions: [
      'Write a one-sentence thesis that directly answers the question.',
      'Plan four body paragraphs: George and Lennie\'s dream, Candy\'s attachment to the dream, Crooks\'s momentary belief in the dream, the destruction of the dream.',
      'For each paragraph, note: a topic sentence, a quotation, a language point, a context point.',
      'Plan a brief introduction (2-3 sentences) and a conclusion that connects to the title of John Steinbeck\'s poem by Robert Burns ("To a Mouse").',
      'Annotate your plan to show which chapter each piece of evidence comes from.',
    ],
    estimatedTime: '45 minutes',
    dueLesson: 28,
    markingCriteria: [
      'Thesis directly addresses the question.',
      'Four body paragraphs planned with all required elements.',
      'Introduction and conclusion planned.',
      'Reference to the Burns poem in the conclusion plan.',
      'Evidence spans at least three chapters.',
    ],
    parentGuidance:
      'Ask your child to explain their thesis in one sentence without notes. If they can do this, the argument is clear.',
    differentiation: {
      support:
        'Provide a planning template with sections labelled and a hint for the topic sentence of each paragraph.',
      core: 'Complete the plan independently.',
      stretch:
        'Add a fifth paragraph plan examining how Steinbeck\'s use of circular structure reinforces the theme of inevitability.',
    },
  },
  {
    id: 'y9-t3-hw-06',
    title: "Steinbeck's Language Analysis",
    yearGroup: 'Year 9',
    termUnit: 'T3: Of Mice and Men',
    type: 'analysis',
    description:
      'Analyse how Steinbeck uses language in the opening description of the Salinas River to establish mood and foreshadow events.',
    instructions: [
      'Re-read the opening two paragraphs of Chapter 1 (the description of the setting before George and Lennie appear).',
      'Identify three language techniques used by Steinbeck (e.g. pathetic fallacy, personification, sensory detail, colour imagery).',
      'Write a P-E-E-L paragraph for each technique (three paragraphs in total).',
      'In each paragraph, explain how the technique contributes to the mood of the passage.',
      'In your final paragraph, argue how the opening foreshadows the ending of the novel.',
    ],
    estimatedTime: '50 minutes',
    dueLesson: 29,
    markingCriteria: [
      'Three distinct language techniques identified.',
      'Three P-E-E-L paragraphs written.',
      'Mood and effect explained for each technique.',
      'Final paragraph links opening to ending with a clear argument.',
    ],
    parentGuidance:
      'Encourage your child to read the opening passage aloud to experience its rhythm and mood before writing.',
    differentiation: {
      support:
        'Provide the three techniques with quotations pre-selected; students write the explanation and link sections only.',
      core: 'Identify techniques and write all three paragraphs independently.',
      stretch:
        'Consider how the pastoral description creates dramatic irony in the context of the novel\'s ending, and research the term "dramatic irony" if unfamiliar.',
    },
  },
  {
    id: 'y9-t3-hw-07',
    title: 'Theme Essay Draft: Loneliness',
    yearGroup: 'Year 9',
    termUnit: 'T3: Of Mice and Men',
    type: 'extended-writing',
    description:
      'Write a first draft of an essay responding to the question: "How does Steinbeck present loneliness in Of Mice and Men?"',
    instructions: [
      'Use your essay plan (or create a new one if needed) to write a full draft: introduction, three body paragraphs, conclusion.',
      'Each body paragraph should focus on a different character affected by loneliness (e.g. Candy, Crooks, Curley\'s Wife).',
      'Include at least one embedded quotation per paragraph with language analysis.',
      'Write your conclusion in full — don\'t leave it as notes.',
      'After finishing, highlight one paragraph you are most proud of and put a question mark next to one sentence you are unsure about.',
    ],
    estimatedTime: '55 minutes',
    dueLesson: 30,
    markingCriteria: [
      'Full draft submitted: introduction, three body paragraphs, conclusion.',
      'Three different characters explored.',
      'One embedded quotation with analysis per paragraph.',
      'Conclusion makes a broader point about Steinbeck\'s message.',
      'Self-assessment marks (highlight and question mark) present.',
    ],
    parentGuidance:
      'First drafts should not be perfect. Reassure your child that the goal is to get ideas on paper — improvement comes in the next lesson when we peer-review.',
    differentiation: {
      support:
        'Allow the use of a paragraph frame for one body paragraph; the other two should be attempted independently.',
      core: 'Write the full draft independently.',
      stretch:
        'Write a fourth paragraph examining how Steinbeck structures the novel so that moments of hope and loneliness alternate, creating a particular emotional arc.',
    },
  },
  {
    id: 'y9-t3-hw-08',
    title: 'Contextual Paragraph: The American Dream',
    yearGroup: 'Year 9',
    termUnit: 'T3: Of Mice and Men',
    type: 'analysis',
    description:
      'Write an analytical paragraph that integrates contextual knowledge about the American Dream into a close reading of a key passage.',
    instructions: [
      'Choose one of the following passages: (a) George and Lennie describe their dream in Chapter 1, OR (b) Crooks challenges the dream in Chapter 4.',
      'Write a P-E-E-L paragraph that begins with a clear argument about what the passage reveals.',
      'Embed one quotation and analyse specific language choices.',
      'Integrate at least one contextual point about the American Dream and the reality of life for migrant workers in the 1930s.',
      'End with a sentence linking to Steinbeck\'s overall purpose.',
      'Aim for 180-220 words.',
    ],
    estimatedTime: '40 minutes',
    dueLesson: 31,
    markingCriteria: [
      'Clear argument stated in the topic sentence.',
      'One embedded quotation analysed at word level.',
      'Contextual point integrated naturally (not bolted on).',
      'Link to Steinbeck\'s purpose in the final sentence.',
      '180-220 word count met.',
    ],
    parentGuidance:
      'Ask your child to explain what the American Dream means and whether they think it was achievable for characters like George and Lennie.',
    differentiation: {
      support:
        'Provide a paragraph frame and a list of contextual points; students embed them into the frame using their own words.',
      core: 'Write the full paragraph independently.',
      stretch:
        'Write two paragraphs — one using each passage — and compare how Steinbeck presents the dream differently in the two contexts.',
    },
  },
  {
    id: 'y9-t3-hw-09',
    title: 'Timed Extract Question',
    yearGroup: 'Year 9',
    termUnit: 'T3: Of Mice and Men',
    type: 'revision',
    description:
      'Complete a timed extract-based question to practise exam technique and build fluency under pressure.',
    instructions: [
      'Read the printed extract from Chapter 6 (the final scene by the river) carefully — allow 5 minutes to read and annotate.',
      'Answer the question: "How does Steinbeck create a sense of tragedy in this extract?" in 25 minutes.',
      'Use at least two embedded quotations with language analysis.',
      'Include a point about structure or context.',
      'Time yourself strictly — start a timer and stop at 25 minutes.',
      'After finishing, note: one strength in your response and one thing you would improve.',
    ],
    estimatedTime: '35 minutes',
    dueLesson: 32,
    markingCriteria: [
      'Response addresses the question throughout.',
      'Two embedded quotations with language analysis.',
      'Structural or contextual point included.',
      'Self-reflection completed.',
    ],
    parentGuidance:
      'Please enforce the time limit. The discipline of writing within a set time is one of the most important skills for GCSE examinations.',
    differentiation: {
      support:
        'Allow 35 minutes and provide two pre-selected quotations to structure the response around.',
      core: 'Complete the full task in 25 minutes.',
      stretch:
        'After the 25-minute response, spend a further 10 minutes adding a paragraph that considers how the ending of the novel connects to the opening, creating a circular structure.',
    },
  },
  {
    id: 'y9-t3-hw-10',
    title: 'Full Essay Preparation and Review',
    yearGroup: 'Year 9',
    termUnit: 'T3: Of Mice and Men',
    type: 'extended-writing',
    description:
      'Prepare for the end-of-year assessed essay by reviewing your Term 3 work, consolidating your best ideas, and writing a polished introduction.',
    instructions: [
      'Re-read your Theme Essay Draft (HW-07) and the feedback received in class.',
      'Make a list of five improvements you will make in the final assessed version.',
      'Write a polished introduction (100-130 words) for the question: "How does Steinbeck present the theme of loneliness in Of Mice and Men?"',
      'Your introduction should: contextualise the novel in 1930s America, introduce your argument (thesis), and briefly signpost your main points.',
      'Underneath your introduction, write a bullet-point checklist of what your three body paragraphs will argue.',
    ],
    estimatedTime: '50 minutes',
    dueLesson: 33,
    markingCriteria: [
      'Five specific improvements listed and referenced to teacher feedback.',
      'Introduction is 100-130 words.',
      'Introduction contextualises, argues, and signposts.',
      'Three-paragraph checklist is clear and logical.',
      'Writing is polished and in a formal analytical register.',
    ],
    parentGuidance:
      'This is the final homework of Year 9. Encourage your child to treat it as preparation for their first major GCSE-style assessment and give them a quiet space to focus.',
    differentiation: {
      support:
        'Provide a model introduction for a different question and ask students to identify the three elements (context, thesis, signpost) before writing their own.',
      core: 'Write the introduction and checklist independently.',
      stretch:
        'Write the conclusion as well as the introduction, ensuring the conclusion returns to the thesis with new insight rather than simply repeating the introduction.',
    },
  },
];

// ═══════════════════════════════════════════════════════════════
// FULL HOMEWORK BANK EXPORT
// ═══════════════════════════════════════════════════════════════

export const y9HomeworkBank: HomeworkTask[] = [
  ...t1Tasks,
  ...t2Tasks,
  ...t3Tasks,
];

export default y9HomeworkBank;
