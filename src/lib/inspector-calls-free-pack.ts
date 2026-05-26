/**
 * inspector-calls-free-pack.ts
 *
 * Complete, real teaching content for the free An Inspector Calls resource
 * pack. Every data object is ready to pass into the generate-teaching-pdf
 * utility functions.
 */

import type {
  LessonPlanData,
  WorksheetQuestion,
  MarkSchemeAnswer,
  RevisionGuideData,
} from './generate-teaching-pdf'

// ═══════════════════════════════════════════════════════════════════════════
//  1. ACT 1 LESSON PLAN
// ═══════════════════════════════════════════════════════════════════════════

export const act1LessonPlan: LessonPlanData = {
  title: 'An Inspector Calls: Act 1 - Context, Dramatic Irony & the Birling Family',
  duration: '60 minutes',
  yearGroup: 'Year 10/11',
  examBoard: 'AQA / Edexcel IGCSE',
  text: 'An Inspector Calls - J.B. Priestley',
  objectives: [
    "Understand the significance of Priestley's dual time setting (written 1945, set 1912) and the dramatic irony it creates",
    'Analyse how Priestley establishes the Birling family as representatives of Edwardian upper-middle-class values in the opening stage directions',
    "Explore Mr Birling's capitalist philosophy and identify how Priestley systematically undermines it through dramatic irony",
    "Examine how the Inspector's arrival disrupts the family's celebration and foreshadows the moral interrogation to come",
    "Begin to develop AO3 contextual arguments linking the play's setting to Priestley's post-war socialist purpose",
  ],
  starterActivity: {
    title: '1912 vs 1945: Two Worlds Collide',
    duration: '8 minutes',
    instructions:
      "1. Display two images side by side on the projector: a wealthy Edwardian dinner party (circa 1912) and bomb-damaged British streets (circa 1945).\n2. Silent observation (2 minutes): students write three observations about each image in their books.\n3. Pair-share (2 minutes): students compare observations and discuss what life was like in each era.\n4. Teacher-led discussion (3 minutes): draw out the contrast - the play was written after two world wars, the welfare state, and massive social change, but is deliberately set before any of it happened.\n5. Pose the key question on the board: 'Why might a playwright choose to set his play 33 years in the past?' Cold-call three students.\n6. Record three responses on the board and establish that this 33-year gap is the engine of the play's dramatic irony.\n7. Write the definition of dramatic irony on the board for students to copy: 'When the audience knows something the characters do not.'",
    differentiation: {
      support:
        "Provide sentence stems on a handout: 'In the 1912 image I notice... This suggests that life was... In contrast, the 1945 image shows... This tells me that...' Include a glossary card defining 'dramatic irony', 'Edwardian era', and 'welfare state'. Teacher pairs these students with a confident partner for the discussion phase.",
      core: 'Students write three observations per image independently, then identify one connection between the images and the concept of dramatic irony in a written sentence.',
      stretch:
        'Students predict three specific examples of dramatic irony that a 1945 audience would recognise if a character in 1912 made confident predictions about the future (e.g. predicting no wars, the Titanic being unsinkable, or that capitalism would bring prosperity for all).',
    },
  },
  mainActivities: [
    {
      title: 'Close Reading: The Opening Stage Directions',
      duration: '15 minutes',
      instructions:
        "1. Distribute photocopied extracts of the opening stage directions (from 'The dining room of a fairly large suburban house' to the entrance of Edna).\n2. Display three focus questions on the board: (a) What does the setting reveal about the Birlings' wealth and values? (b) What does 'pink and intimate' lighting changing to 'brighter and harder' symbolise? (c) What do the characters' positions at the table suggest about power dynamics?\n3. Students annotate the extract in pairs for 8 minutes, using the focus questions to guide them. Instruct them to underline key words and write marginal notes.\n4. Cold-call three pairs to share their strongest annotation. Insist on precise textual reference.\n5. Model a PEEL paragraph on the board using the lighting symbolism (5 minutes):\n   - Point: The lighting shift symbolises the exposure of truth.\n   - Evidence: 'pink and intimate... brighter and harder'\n   - Explain: The warm pink suggests comfort and concealment, while the harder light suggests scrutiny and moral examination.\n   - Link: Priestley uses this visual metaphor to signal that the Inspector will strip away the family's comfortable illusions.\n6. Students copy the model paragraph and underline the technique word (symbolism).",
      differentiation: {
        support:
          "Provide a pre-highlighted extract with arrows pointing to 'pink and intimate', 'brighter and harder', and the description of the furniture. Include a word bank on the handout: symbolism, foreshadowing, stage directions, bourgeois, facade, scrutiny. Teacher visits support-tier pairs first to check annotations.",
        core: 'Annotate the extract independently using the three focus questions. Write one PEEL paragraph on the lighting symbolism in their books, following the modelled structure.',
        stretch:
          "Write a second PEEL paragraph analysing what the port, cigars, and champagne suggest about the family's relationship with wealth. Link to Priestley's critique of capitalist excess and the 1945 audience's awareness of wartime rationing.",
      },
    },
    {
      title: "Mr Birling's Speech: Identifying Dramatic Irony",
      duration: '15 minutes',
      instructions:
        "1. Read aloud Mr Birling's speech about the Titanic, war, and progress. Ask students to follow along on their copies.\n2. After reading, ask: 'What predictions does Birling make?' Elicit three key predictions and write them on the board.\n3. Distribute the three-column table handout. Explain the columns: (a) What Birling says (short quotation - max 10 words), (b) What actually happened, (c) What Priestley wants the 1945 audience to think.\n4. Students work in groups of three for 7 minutes to complete the table. Circulate to check quotation accuracy.\n5. Groups share their most powerful example via cold-call. Teacher adds to a class version on the board.\n6. Pose the key question on the board: 'If Birling is wrong about everything, what does this do to his authority as a character?'\n7. Students write a paragraph answering this question (5 minutes), embedding at least one short quotation (e.g. 'absolutely unsinkable').\n8. Teacher circulates during writing, targeting two students for individual feedback on quotation embedding technique.",
      differentiation: {
        support:
          "Provide the three-column table with Birling's quotations already filled in column 1; students complete columns 2 and 3 only. Sentence stem provided for the paragraph: 'Priestley undermines Birling's authority by showing that his prediction about... was completely wrong. The 1945 audience would know that...'",
        core: 'Students complete all three columns independently, selecting their own short quotations, and write a paragraph with at least one embedded quotation.',
        stretch:
          'Students extend their paragraph to consider why Priestley makes Birling a magistrate and a prospective knight - how does his social status intensify the dramatic irony? What does it suggest about the ruling class?',
      },
    },
    {
      title: "The Inspector's Entrance: A Turning Point",
      duration: '12 minutes',
      instructions:
        "1. Read aloud the stage directions describing the Inspector's entrance and his first exchange with Birling.\n2. Ask students: 'How does the atmosphere change when the Inspector arrives?' (2 minutes think-pair-share)\n3. Display two short quotations on the board (each under 15 words) showing the Inspector's direct, authoritative tone versus Birling's bluster.\n4. Students write three bullet points in their books: (a) How the Inspector's language differs from Birling's, (b) What the lighting change at this moment symbolises, (c) Why Priestley times the entrance to interrupt the celebration.\n5. Class discussion (3 minutes): teacher draws out that the Inspector functions as Priestley's mouthpiece - he arrives to shatter complacency.\n6. Students add one key sentence to their notes: 'The Inspector's entrance transforms the play from a celebration of wealth into a moral interrogation.'",
      differentiation: {
        support:
          "Provide a comparison table with two columns - Birling's language vs Inspector's language - with one example pre-filled in each column. Students add two more examples each.",
        core: 'Students independently write their three bullet points and contribute to class discussion.',
        stretch:
          'Students write a short paragraph exploring whether the Inspector is a realistic character or a dramatic device, using evidence from his entrance to support their view.',
      },
    },
  ],
  plenary: {
    title: 'Exit Ticket: One Quote, One Insight',
    instructions:
      "1. Give each student a sticky note (or half-sheet of paper).\n2. Task (displayed on board): 'Select one quotation from Act 1 (no more than 12 words) that you think is the most important for understanding Priestley's message.'\n3. Below the quotation, students write one sentence explaining why it matters.\n4. Students place completed notes on a designated section of the board as they leave.\n5. Teacher sorts the notes into themes (dramatic irony, class, responsibility) after the lesson to inform the next lesson's starter activity and identify gaps in understanding.",
    differentiation: {
      support:
        "Choose from a bank of five pre-selected short quotations displayed on the board. Explain your choice using the sentence stem: 'This quotation matters because Priestley uses it to...'",
      core: "Select your own quotation from Act 1 and write a one-sentence explanation linking it to Priestley's purpose.",
      stretch:
        'Select a quotation and write two sentences: one explaining its significance for a 1912 audience and one for a 1945 audience, highlighting the dramatic irony.',
    },
  },
  keyVocabulary: [
    'dramatic irony - when the audience knows something the characters do not',
    'stage directions - instructions in a script describing setting, movement, or tone',
    'symbolism - using an object or detail to represent a larger idea',
    'bourgeois - relating to the comfortable middle class; often used critically',
    'capitalism - an economic system based on private ownership and profit',
    'socialism - a political philosophy advocating collective ownership and equality',
    'Edwardian era - the period 1901-1910 (broadly to 1914) characterised by rigid class hierarchy',
    'welfare state - government provision of healthcare, education, and social security for all citizens',
    'didactic - intended to teach a moral or political lesson',
    'facade - a false outward appearance that conceals the truth',
    'hubris - excessive pride or self-confidence, often leading to a downfall',
    'foreshadowing - hints or clues about events that will occur later in a text',
    "mouthpiece - a character who voices the author's own views",
    'collective responsibility - the idea that all members of society share accountability',
    'morality play - a dramatic genre in which characters represent moral qualities',
    'interrogation - intense questioning; used here both literally and metaphorically',
  ],
  resourcesNeeded: [
    "Copies of An Inspector Calls (Act 1) or photocopied extracts of the opening stage directions and Birling's speech",
    'Projector and screen for starter images (Edwardian dinner party and 1945 bomb damage)',
    "Three-column table handout for Birling's speech activity (one per student)",
    'Sticky notes or half-sheets of paper for the exit ticket plenary',
    'Glossary cards for support-tier students (dramatic irony, Edwardian era, welfare state, bourgeois)',
    'Word bank handout for close reading activity (support tier)',
    'Printed PEEL paragraph frame for support-tier students',
    'Mini-whiteboards and pens (optional, for quick-check questions)',
  ],
  homework:
    "Write a 200-250 word response to the following question: 'How does Priestley use the opening of An Inspector Calls to establish that the Birling family has something to hide?'\n\nSuccess criteria:\n- Include at least two short quotations from the stage directions or dialogue (each under 12 words)\n- Use at least one technical term (e.g. symbolism, dramatic irony, foreshadowing)\n- Structure your response using PEEL (Point, Evidence, Explain, Link)\n- Include one sentence of AO3 context linking the play's setting (1912) to when it was written (1945)\n- Write in formal academic register (no contractions, no first person)",
  teacherNotes: [
    'Timing priority: Ensure students grasp the dual time frame (set 1912, written 1945) before any textual analysis. This is the foundation of every AO3 contextual point they will need at GCSE. If the starter runs over, absorb time from the plenary rather than from this concept.',
    "High-value exam content: The lighting symbolism ('pink and intimate' to 'brighter and harder') is a reliable AO2 point that consistently scores well in exams. Model the PEEL paragraph carefully and insist students copy it - many will use this exact point in their mock and final exam.",
    "Most frequently examined extract: Birling's dramatic irony speech is the single most commonly examined extract for the AO3 mark across AQA papers. Ensure every student can explain at least one example of dramatic irony from it.",
    'Flexible plenary: If time is short, the exit ticket plenary can be set as homework instead. In that case, use the final 5 minutes for the Birling paragraph to become the plenary task - students read their paragraph aloud to a partner who checks for an embedded quotation.',
    "Copyright note: All quotations from An Inspector Calls are the copyright of J.B. Priestley's estate. Keep all quoted passages to 15 words or fewer for fair dealing purposes. Do not reproduce extended extracts on student-facing handouts - use page references instead.",
    'Seating for the group activity: Pre-arrange mixed-ability groups of three for the Birling speech table. Assign roles: Reader (reads the speech aloud), Scribe (fills in the table), Challenger (checks column 3 answers are genuinely analytical, not just plot retelling).',
    "Common misconception: Students often describe Birling as 'stupid'. Redirect this - Priestley deliberately constructs Birling's wrongness for didactic effect. The point is not that Birling is unintelligent, but that his ideology blinds him.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  2. CHARACTER ANALYSIS WORKSHEET
// ═══════════════════════════════════════════════════════════════════════════

export const characterWorksheetMeta = {
  title: 'Character Analysis: Sheila, Mr Birling & the Inspector',
  instructions:
    'Read each question carefully. For quote analysis questions, read the quotation provided and analyse the language in detail. For extended writing questions, aim to write at least three developed PEEL paragraphs. Show your understanding of how Priestley uses these characters to convey his message about social responsibility.',
  text: 'An Inspector Calls - J.B. Priestley',
  yearGroup: 'Year 10/11',
  examBoard: 'AQA / Edexcel IGCSE',
}

export const characterWorksheetQuestions: WorksheetQuestion[] = [
  {
    question:
      'How does Priestley present Mr Birling as a symbol of capitalist self-interest in Act 1? In your answer, consider his language, his attitudes to his workers, and his views on community.',
    type: 'extended-writing',
    marks: 8,
    lines: 14,
  },
  {
    question:
      "Read the quotation below. What does this reveal about Mr Birling's character and Priestley's attitude towards him?",
    type: 'quote-analysis',
    marks: 6,
    lines: 8,
    sourceQuote: 'a man has to mind his own business and look after himself and his own',
  },
  {
    question:
      "How does Sheila's language change between the start and end of Act 1? What does this change suggest about her character?",
    type: 'extended-writing',
    marks: 8,
    lines: 14,
  },
  {
    question:
      "Read the quotation below. How does Priestley use Sheila's words to suggest hope for the younger generation?",
    type: 'quote-analysis',
    marks: 6,
    lines: 8,
    sourceQuote: "But these girls aren't cheap labour - they're people.",
  },
  {
    question: "Which of the following best describes the Inspector's dramatic function?",
    type: 'multiple-choice',
    marks: 1,
    options: [
      'He is a realistic police officer investigating a crime',
      "He is Priestley's mouthpiece for socialist ideas about collective responsibility",
      'He represents the interests of the upper-middle class',
      'He is a member of the Birling family in disguise',
    ],
  },
  {
    question:
      "Read the quotation below. How does the Inspector's language create a sense of moral authority? Refer to specific techniques in your answer.",
    type: 'quote-analysis',
    marks: 6,
    lines: 8,
    sourceQuote: 'We are members of one body. We are responsible for each other.',
  },
  {
    question:
      "Compare how Mr Birling and Sheila respond to the Inspector's questioning. What does each response reveal about Priestley's message regarding generational change?",
    type: 'extended-writing',
    marks: 10,
    lines: 16,
  },
  {
    question:
      "In three or four sentences, explain why Priestley might have chosen to make the Inspector's identity ambiguous rather than clearly human or supernatural.",
    type: 'short-answer',
    marks: 4,
    lines: 5,
  },
]

// ═══════════════════════════════════════════════════════════════════════════
//  3. KEY QUOTES WORKSHEET
// ═══════════════════════════════════════════════════════════════════════════

export const quotesWorksheetMeta = {
  title: 'Key Quotes: Analysis Tasks',
  instructions:
    "For each quotation, identify the speaker, explain the context, analyse the language techniques used, and explain how the quotation relates to Priestley's wider message. Use the WHAT-HOW-WHY framework: WHAT is being said, HOW does the language work, WHY does it matter for the play's themes.",
  text: 'An Inspector Calls - J.B. Priestley',
  yearGroup: 'Year 10/11',
  examBoard: 'AQA / Edexcel IGCSE',
}

export const quotesWorksheetQuestions: WorksheetQuestion[] = [
  {
    question:
      'Identify the speaker of this quotation. Explain the context in which it is spoken and analyse one language technique Priestley uses to reveal character.',
    type: 'quote-analysis',
    marks: 5,
    lines: 7,
    sourceQuote: 'The Titanic - she sails next week... unsinkable, absolutely unsinkable.',
  },
  {
    question:
      "What does the word 'we' in this quotation suggest about the Inspector's worldview? How does it contrast with Birling's use of 'I' and 'my' throughout the play?",
    type: 'quote-analysis',
    marks: 5,
    lines: 7,
    sourceQuote: 'We are members of one body. We are responsible for each other.',
  },
  {
    question:
      "Analyse the significance of the word 'girls' in this quotation. What does it reveal about Sheila's growing empathy and moral awareness?",
    type: 'quote-analysis',
    marks: 5,
    lines: 7,
    sourceQuote: "But these girls aren't cheap labour - they're people.",
  },
  {
    question:
      'Explain how this quotation uses the rule of three to create a sense of escalating threat. What historical events is the Inspector alluding to?',
    type: 'quote-analysis',
    marks: 6,
    lines: 8,
    sourceQuote: 'they will be taught it in fire and blood and anguish.',
  },
  {
    question:
      "What does this quotation reveal about Eric's character? How does the word 'hell' connect to the play's moral framework?",
    type: 'quote-analysis',
    marks: 5,
    lines: 7,
    sourceQuote: "My God - I'm not likely to forget.",
  },
  {
    question:
      'How does this quotation establish Mrs Birling as a foil to Sheila? Consider her use of the third person and what it reveals about class prejudice.',
    type: 'quote-analysis',
    marks: 6,
    lines: 8,
    sourceQuote: "Girls of that class - they're not the kind of girls to give themselves airs.",
  },
  {
    question:
      'Explain why this quotation is an example of dramatic irony. What does the 1945 audience know that Birling does not?',
    type: 'quote-analysis',
    marks: 5,
    lines: 7,
    sourceQuote: "I say there isn't a chance of war.",
  },
  {
    question:
      'Choose any two quotations from this worksheet. Write a comparative paragraph explaining how they both relate to the theme of responsibility, but from opposite perspectives.',
    type: 'extended-writing',
    marks: 8,
    lines: 14,
  },
]

// ═══════════════════════════════════════════════════════════════════════════
//  4. MARK SCHEME - "How does Priestley present responsibility?"
// ═══════════════════════════════════════════════════════════════════════════

export const responsibilityMarkSchemeMeta = {
  title: "Answer Guide: 'How does Priestley present the theme of responsibility?'",
  text: 'An Inspector Calls - J.B. Priestley',
  yearGroup: 'Year 10/11',
  examBoard: 'AQA / Edexcel IGCSE',
}

export const responsibilityMarkSchemeAnswers: MarkSchemeAnswer[] = [
  {
    questionNumber: 1,
    question:
      'How does Priestley use Mr Birling to present ideas about individual responsibility? [12 marks]',
    marks: 12,
    ao: 'AO1 + AO2 + AO3',
    markingCriteria: [
      'AO1: Clear thesis statement with sustained argument; accurate quotations embedded fluently',
      "AO2: Analysis of Birling's language, including pronouns, declarative sentences, and the significance of his monologue structure",
      "AO3: Understanding of Edwardian capitalism, dramatic irony, and Priestley's socialist purpose",
      'Quality of written communication: formal academic register, accurate SPaG',
    ],
    exampleTop:
      "Priestley constructs Birling as the embodiment of capitalist individualism, a man whose confident declarations are systematically dismantled by dramatic irony. His assertion that a man must 'look after himself' uses possessive pronouns that linguistically fence off responsibility, reducing the moral universe to the private sphere. The audience, aware that two world wars have devastated this philosophy, recognises Birling as a cautionary figure - a didactic tool through which Priestley exposes the fatal consequences of rejecting collective responsibility. Birling's status as a magistrate and potential knight intensifies the irony: the very institutions that should embody justice are infected by his selfishness.",
    exampleMid:
      "Priestley uses Birling to show that some people only care about themselves. Birling says 'a man has to mind his own business' which shows he is selfish. The audience knows that his predictions about the Titanic and war are wrong, which makes him look foolish. Priestley is trying to show that capitalism is wrong because it stops people caring about others.",
    exampleLower:
      "Birling is selfish and doesn't care about Eva Smith. He fired her from his factory because she asked for more money. This shows he is not a nice person and Priestley doesn't like him.",
    commonMisconceptions: [
      "Confusing the play's date of composition (1945) with its setting (1912) - students may not grasp why dramatic irony depends on the gap",
      "Describing Birling as 'stupid' rather than analysing how Priestley deliberately constructs his wrongness for didactic effect",
      'Ignoring AO3 entirely and treating the essay as a pure language analysis task',
      "Using 'Priestley is saying' without explaining how the literary techniques achieve the effect",
    ],
  },
  {
    questionNumber: 2,
    question:
      "How does Priestley use the Inspector to challenge the Birlings' attitudes towards responsibility? [12 marks]",
    marks: 12,
    ao: 'AO1 + AO2 + AO3',
    markingCriteria: [
      "AO1: Coherent argument tracking the Inspector's methods across the play; accurate textual evidence",
      "AO2: Analysis of the Inspector's language techniques: imperatives, collective pronouns, prophetic register, rhetorical questions",
      'AO3: Understanding of Priestley as a wartime broadcaster, the morality play tradition, and the Inspector as a quasi-supernatural figure',
      "Ability to compare the Inspector's approach to different characters (adapts his tone to Birling vs Sheila)",
    ],
    exampleTop:
      "The Inspector functions as Priestley's dramatic proxy, a character whose rhetorical arsenal - imperatives, collective pronouns, and prophetic register - transforms a drawing-room mystery into a morality play. His declaration that 'we are responsible for each other' deploys the first-person plural to linguistically dissolve the boundary Birling erects between self and society. The anaphoric 'we' is both inclusive and accusatory, implicating the audience alongside the Birlings. His final warning - 'fire and blood and anguish' - employs a tricolon that escalates from elemental destruction to psychological suffering, alluding to both World Wars that the 1945 audience has survived. By leaving his identity ambiguous, Priestley ensures that the Inspector's moral authority cannot be dismissed as merely institutional: he operates as conscience itself.",
    exampleMid:
      "The Inspector is used by Priestley to show his ideas about responsibility. He says 'we are responsible for each other' which is the opposite of what Birling believes. The word 'we' includes everyone, including the audience. His speech at the end about 'fire and blood and anguish' sounds like a prophecy about the wars. Priestley uses the Inspector as a mouthpiece for socialism.",
    exampleLower:
      'The Inspector comes in and questions everyone about Eva Smith. He makes them feel guilty about what they did. He is mysterious and nobody knows if he is real or a ghost.',
    commonMisconceptions: [
      'Assuming the Inspector is literally a ghost without exploring why Priestley uses ambiguity as a dramatic device',
      "Retelling the plot of the Inspector's questioning rather than analysing his language and technique",
      "Failing to link the Inspector's message to Priestley's own political beliefs (wartime broadcasts, Labour values)",
    ],
  },
  {
    questionNumber: 3,
    question:
      'How does Priestley use the younger generation to suggest that change is possible? [12 marks]',
    marks: 12,
    ao: 'AO1 + AO2 + AO3',
    markingCriteria: [
      'AO1: Focused argument on Sheila and/or Eric with comparison to the older generation',
      "AO2: Analysis of how Sheila's language evolves from frivolous to morally serious; analysis of Eric's emotional register",
      'AO3: Understanding of the 1945 political context (Labour landslide, welfare state) and why generational change mattered to Priestley',
      'Structural awareness: tracking character development across the play',
    ],
    exampleTop:
      "Priestley orchestrates a generational schism that mirrors the political transformation Britain underwent between the play's setting and its composition. Sheila's linguistic journey - from the superficial 'mummy' register of the opening to her fierce assertion that 'these girls aren't cheap labour - they're people' - enacts in miniature the awakening Priestley hoped the post-war electorate would embrace. Her use of 'people' is deliberately simple, stripping away the euphemisms of class ('girls of that class') that her mother deploys to dehumanise the working poor. Priestley positions Sheila not as perfect but as teachable, embodying the democratic socialist conviction that moral education, not birthright, determines a person's worth.",
    exampleMid:
      "Sheila changes during the play from a spoilt girl to someone who cares about others. She says 'these girls aren't cheap labour - they're people' which shows she now sees working-class people as equal. This is different from her parents who refuse to change. Priestley uses Sheila to show that young people can learn from their mistakes.",
    exampleLower:
      'Sheila feels sorry for Eva Smith and is upset about what she did. She is different from her parents because she accepts what she did was wrong. Eric also changes because he feels bad.',
    commonMisconceptions: [
      "Treating Sheila's guilt as purely emotional without connecting it to Priestley's political argument about social responsibility",
      "Ignoring Eric's role or dismissing him as simply 'weak' without analysing how his drinking and immaturity serve Priestley's purpose",
      'Failing to contrast the younger generation with the older generation - the argument requires comparison',
    ],
  },
]

// ═══════════════════════════════════════════════════════════════════════════
//  5. REVISION GUIDE - ALL KEY THEMES
// ═══════════════════════════════════════════════════════════════════════════

export const inspectorCallsRevisionGuide: RevisionGuideData = {
  text: 'An Inspector Calls - J.B. Priestley',
  examBoard: 'AQA / Edexcel IGCSE',
  plotSummary: [
    {
      section: 'Act 1 - The Engagement Dinner',
      summary:
        "The Birling family celebrate Sheila's engagement to Gerald Croft. Mr Birling delivers a speech dismissing collective responsibility and predicting peace and prosperity. Inspector Goole arrives and reveals that a young woman named Eva Smith has died by suicide. He reveals that Birling fired her from his factory for leading a strike for better wages. Sheila then confesses that she had Eva dismissed from Milwards department store out of jealousy.",
    },
    {
      section: 'Act 2 - Gerald and Mrs Birling',
      summary:
        "Gerald admits to having an affair with Eva (now calling herself Daisy Renton), keeping her as his mistress before ending the relationship. Sheila's reaction deepens her moral awakening. Mrs Birling is then revealed to have rejected Eva's plea for help at a charity committee, refusing to believe her story and insisting the father of Eva's unborn child should be held responsible - unwittingly condemning her own son.",
    },
    {
      section: 'Act 3 - Eric, Departure & the Final Twist',
      summary:
        "Eric confesses to being the father of Eva's child, to stealing money from his father's business to support her, and to driving her to the charity committee where his mother rejected her. The Inspector delivers his final speech about collective responsibility and leaves. Gerald and Mr Birling discover that no Inspector Goole exists and question whether a girl actually died. They celebrate their apparent escape - but the phone rings: a girl has just died, and a real inspector is on his way.",
    },
  ],
  characters: [
    {
      name: 'Arthur Birling',
      role: "A prosperous factory owner, magistrate, and potential knight. Represents Edwardian capitalist individualism. Priestley's primary target for satirical critique.",
      keyQuotes: [
        'a man has to mind his own business and look after himself and his own',
        'The Titanic - she sails next week... absolutely unsinkable.',
        "I say there isn't a chance of war.",
      ],
      analysis:
        "Birling is constructed as a dramatic cautionary figure whose confident predictions are systematically destroyed by dramatic irony. His possessive language and reliance on status reflect the Edwardian class system Priestley sought to dismantle. His refusal to change after the Inspector's departure makes him the moral opposite of his daughter.",
    },
    {
      name: 'Sheila Birling',
      role: "The Birlings' daughter. Initially superficial but undergoes the most complete moral transformation in the play. Priestley's symbol of hope for the younger generation.",
      keyQuotes: [
        "But these girls aren't cheap labour - they're people.",
        'I know. I had her turned out of a job. I started it.',
        "You're pretending everything's just as it was before.",
      ],
      analysis:
        "Sheila's journey mirrors the political awakening Priestley hoped for in post-war Britain. Her shift from trivial jealousy to moral clarity demonstrates that change is possible when people accept responsibility. She is the only character who fully internalises the Inspector's message and refuses to retreat into denial.",
    },
    {
      name: 'Inspector Goole',
      role: "A mysterious inspector who arrives to question the family. Functions as Priestley's mouthpiece for socialist ideals and collective responsibility. Possibly supernatural - his identity is deliberately ambiguous.",
      keyQuotes: [
        'We are members of one body. We are responsible for each other.',
        'they will be taught it in fire and blood and anguish',
        'Public men, Mr Birling, have responsibilities as well as privileges.',
      ],
      analysis:
        "The Inspector operates on multiple levels: as a police officer, a moral judge, a prophetic voice, and potentially a supernatural being. His name - 'Goole' - puns on 'ghoul', reinforcing his otherworldly nature. His use of collective pronouns, imperatives, and prophetic register gives him a rhetorical authority that transcends his institutional role. By leaving his identity unresolved, Priestley prevents the audience from dismissing his message as merely official - it becomes a universal moral imperative.",
    },
    {
      name: 'Sybil Birling (Mrs Birling)',
      role: "Arthur's socially superior wife. Chair of the Brumley Women's Charity Organisation. Represents upper-middle-class prejudice and refusal to accept responsibility.",
      keyQuotes: [
        'Girls of that class -',
        'I accept no blame for it at all.',
        'I was perfectly justified in advising my committee not to allow her claim.',
      ],
      analysis:
        "Mrs Birling uses class-based language to dehumanise Eva and justify her cruelty. Her dramatic irony is particularly devastating: she insists the father of Eva's child should be made an example of, not realising she is condemning her own son. She represents the absolute failure of the upper classes to recognise shared humanity across class boundaries.",
    },
    {
      name: 'Eric Birling',
      role: "The Birlings' son. Drinks heavily, had a relationship with Eva, and stole money from his father's business. Accepts responsibility but is immature and weak.",
      keyQuotes: [
        "My God - I'm not likely to forget.",
        "You're not the kind of father a chap could go to",
        'We did her in all right.',
      ],
      analysis:
        'Eric represents the destructive consequences of the patriarchal class system even on those within it. His alcoholism, his exploitation of Eva, and his theft are all symptoms of a household where appearances matter more than emotional honesty. Like Sheila, he accepts responsibility - but his weakness contrasts with her moral clarity, suggesting that accepting guilt is necessary but not sufficient for genuine change.',
    },
  ],
  themes: [
    {
      theme: 'Responsibility',
      explanation:
        'The central theme. Priestley examines individual vs collective responsibility, arguing through the Inspector that we are all interconnected and that ignoring the suffering of others has devastating consequences.',
      keyMoments: [
        "Birling's speech rejecting community: 'a man has to mind his own business'",
        "The Inspector's final speech on collective responsibility",
        "Sheila's acceptance of guilt vs her parents' denial",
        'The final phone call - responsibility cannot be evaded',
      ],
      quotes: [
        'We are members of one body. We are responsible for each other.',
        'a man has to mind his own business and look after himself and his own',
      ],
    },
    {
      theme: 'Social Class and Inequality',
      explanation:
        'Priestley exposes how the rigid Edwardian class system allowed the wealthy to exploit the poor without consequence. Eva Smith represents the entire working class, voiceless and expendable.',
      keyMoments: [
        'Birling firing Eva for asking for a living wage',
        'Sheila having Eva dismissed from Milwards on a whim',
        "Mrs Birling's refusal to help at the charity because Eva 'gave herself airs'",
        "Gerald's relationship with Eva - benevolence or exploitation?",
      ],
      quotes: ['Girls of that class -', "But these girls aren't cheap labour - they're people."],
    },
    {
      theme: 'Generational Divide',
      explanation:
        'Priestley contrasts the older Birlings (who refuse to change) with the younger generation (who accept responsibility). This reflects his hope that post-war Britain would build a more just society.',
      keyMoments: [
        "Sheila and Eric's moral transformation vs their parents' stubbornness",
        "Mr Birling's relief when the Inspector is discredited; Sheila's horror at this response",
        "Eric's accusation: 'You're not the kind of father a chap could go to'",
      ],
      quotes: ["You're pretending everything's just as it was before.", 'We did her in all right.'],
    },
    {
      theme: 'Gender',
      explanation:
        'The play exposes the double standards applied to women in 1912. Eva is exploited by every male character and judged harshly by Mrs Birling, whose own rigid gender expectations blind her to sisterly compassion.',
      keyMoments: [
        "Eva dismissed from Birling's factory with no recourse",
        "Gerald's affair presented as 'rescuing' Eva - but he ultimately abandons her",
        "Mrs Birling's lack of solidarity with a woman of lower class",
        "Sheila's journey from conforming to gender expectations to independent moral thought",
      ],
      quotes: [
        'She was pretty and warm-hearted - and intensely grateful.',
        'Girls of that class -',
      ],
    },
    {
      theme: 'Guilt and Denial',
      explanation:
        "Each character's response to the Inspector reveals their moral capacity. Guilt and denial become the twin responses to moral accountability, and Priestley suggests that denial is the greater sin.",
      keyMoments: [
        "Sheila's immediate guilt and remorse",
        "Eric's tortured confession",
        "Mr and Mrs Birling's refusal to accept any blame",
        "Gerald's attempt to prove the Inspector a fraud as a way to escape guilt",
      ],
      quotes: [
        'I know. I had her turned out of a job. I started it.',
        'I accept no blame for it at all.',
      ],
    },
  ],
  keyQuotes: [
    {
      quote: 'We are members of one body. We are responsible for each other.',
      speaker: 'Inspector Goole',
      context: "The Inspector's final speech before departing the Birling household in Act 3.",
      analysis:
        "The central thesis of the play. The metaphor of 'one body' echoes both Christian theology (the Body of Christ) and socialist solidarity. The anaphoric 'we' is deliberately inclusive, extending responsibility to the audience. This quotation functions as Priestley's direct address to post-war Britain.",
    },
    {
      quote: 'a man has to mind his own business and look after himself and his own',
      speaker: 'Mr Birling',
      context:
        "Birling's dinner speech in Act 1, delivered with confidence shortly before the Inspector arrives.",
      analysis:
        "The possessive pronouns ('himself', 'his own') linguistically fence off responsibility to the private sphere. The repetition of self-referential language reveals Birling's moral universe: small, insular, and oblivious. Priestley positions this speech immediately before the Inspector's arrival to maximise the contrast between capitalist individualism and collective responsibility.",
    },
    {
      quote: 'they will be taught it in fire and blood and anguish',
      speaker: 'Inspector Goole',
      context: "The climax of the Inspector's final speech, Act 3.",
      analysis:
        "The tricolon ('fire and blood and anguish') escalates from physical destruction to psychological suffering. For the 1945 audience, this is a direct allusion to both World Wars and the Blitz. The conditional 'if' gives the warning its urgency - there is still time to choose differently. The shift from 'learn' to 'taught' implies that those who refuse voluntary moral education will face involuntary historical consequences.",
    },
    {
      quote: "But these girls aren't cheap labour - they're people.",
      speaker: 'Sheila Birling',
      context: "Sheila challenges her father's dismissive attitude towards his factory workers.",
      analysis:
        "The simplicity of 'they're people' is its power. Sheila strips away the economic language ('cheap labour') that Birling uses to dehumanise his workers, insisting on their fundamental humanity. This moment marks Sheila's moral turning point and represents the generational shift Priestley champions.",
    },
    {
      quote: 'The Titanic - she sails next week... unsinkable, absolutely unsinkable.',
      speaker: 'Mr Birling',
      context: "Birling's confident prediction during his dinner speech in Act 1.",
      analysis:
        "The most famous example of dramatic irony in the play. The intensifier 'absolutely' raises 'unsinkable' to an absolute claim, sharpening Birling's hubris. Every audience member knows the Titanic sank with enormous loss of life. By attaching Birling's credibility to a catastrophically wrong prediction, Priestley ensures that every subsequent opinion Birling expresses is received with scepticism.",
    },
  ],
  examTips: [
    'Always address all three AOs in your response: AO1 (interpretation and quotation), AO2 (language, form, and structure analysis), and AO3 (contextual understanding). Weave them together rather than treating them as separate sections.',
    'Use the PEEL structure (Point, Evidence, Explain, Link) but push beyond it - the best responses integrate multiple quotations within a single paragraph and develop alternative interpretations.',
    "When discussing context (AO3), do not write a paragraph about history disconnected from the text. Instead, embed contextual understanding into your language analysis: 'The 1945 audience, having survived two world wars, would recognise Birling's prediction as dangerously naive...'",
    "Name specific language techniques and explain their effect. Do not just identify them: 'Priestley uses a metaphor' is not analysis. 'The metaphor of one body suggests organic interconnection, implying that harming Eva damages the entire social organism' is analysis.",
    'Plan your essay before writing. Spend 5 minutes identifying your three best points, your supporting quotations, and your argument thread. A planned essay with three excellent paragraphs will outscore an unplanned essay with six mediocre ones.',
    "Address Priestley's intentions explicitly. Use phrases like 'Priestley constructs...', 'Priestley positions the audience to...', 'Priestley uses X as a vehicle for...' This demonstrates awareness that the text is a crafted artefact, not a transparent window on reality.",
    'Compare characters within your essay, even if the question only names one. You will score higher if you can show how characters function in relation to each other - Birling vs the Inspector, Sheila vs her mother.',
    'End with a strong concluding sentence that returns to the question and offers a final evaluative judgement. Avoid simply restating your points.',
  ],
  practiceQuestions: [
    'How does Priestley use Mr Birling to present ideas about selfishness and social irresponsibility?',
    'How does Priestley present the character of Sheila as someone who changes during the play?',
    'How and why does Priestley use the Inspector as a mouthpiece for his own views?',
    'How does Priestley explore the theme of guilt in An Inspector Calls?',
    "'An Inspector Calls is still relevant today.' How far do you agree with this statement?",
    'How does Priestley use the character of Mrs Birling to explore ideas about class prejudice?',
    'How does Priestley present the relationship between the older and younger generations in the play?',
    'How does Priestley use the structure of the play (the three-act form, the final phone call) to reinforce his message?',
  ],
}
