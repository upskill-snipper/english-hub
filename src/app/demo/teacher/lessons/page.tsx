'use client'

import { useState, useEffect, useCallback } from 'react'
import { useT } from '@/lib/i18n/use-t'
import { generateLessonPlan, generateWorksheet } from '@/lib/generate-teaching-pdf'
import type {
  LessonPlanData,
  WorksheetQuestion as PdfWorksheetQuestion,
} from '@/lib/generate-teaching-pdf'
import { generateLessonPlanWord, generateWorksheetWord } from '@/lib/generate-docx'
import { generateLessonPlanPptx } from '@/lib/generate-pptx'
import { DownloadMenu } from '@/components/DownloadMenu'
import { ErrorBoundary } from '@/components/ErrorBoundary'

// ─── Types (mirroring src/types.ts) ──────────────────────────────────────────

interface LessonActivity {
  title: string
  duration: string
  instructions: string
  differentiation?: { support: string; core: string; stretch: string }
  resources?: string[]
}

interface WorksheetQuestion {
  question: string
  lines: number
  modelAnswer?: string
  marks?: number
}

interface LessonPlan {
  id: string
  title: string
  text: string
  board: string
  yearGroup: string
  duration: string
  objectives: string[]
  successCriteria: string[]
  keywords: string[]
  starterActivity: LessonActivity
  mainActivities: LessonActivity[]
  plenaryActivity: LessonActivity
  homework?: string
  worksheetQuestions: WorksheetQuestion[]
  teacherNotes: string[]
  targetedSkills: string[]
}

// ─── Form Options ────────────────────────────────────────────────────────────

const TEXTS = [
  'An Inspector Calls',
  'Macbeth',
  'A Christmas Carol',
  'Of Mice and Men',
  'Romeo and Juliet',
  'Jekyll and Hyde',
  'Frankenstein',
  'The Tempest',
  'Much Ado About Nothing',
  'Poetry Anthology',
  'Unseen Poetry',
  'Language Paper 1',
  'Language Paper 2',
] as const

const YEAR_GROUPS = [
  'Year 7',
  'Year 8',
  'Year 9',
  'Year 10',
  'Year 11',
  'Year 12',
  'Year 13',
] as const

const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'Eduqas', 'IGCSE Edexcel', 'Cambridge IGCSE'] as const

const DURATIONS = ['30 minutes', '45 minutes', '60 minutes', '90 minutes (double)'] as const

const FOCUSES = [
  'Character Analysis',
  'Key Quotes & Quotation Tracking',
  'Theme Exploration',
  'Language & Imagery Analysis',
  'Specific Act / Scene Study',
  'Plot & Structure',
  "Context & Writer's Intentions",
  'Exam Technique & Essay Writing',
  'Comparison & Contrast',
  'Reading Comprehension',
  'Creative Writing',
  'Transactional Writing',
  'Speaking & Listening',
  'Revision & Retrieval Practice',
] as const

const SPECIFIC_SECTIONS: Record<string, string[]> = {
  'An Inspector Calls': [
    'Act 1',
    'Act 2',
    'Act 3',
    'Mr Birling',
    'Mrs Birling',
    'Sheila Birling',
    'Eric Birling',
    'Gerald Croft',
    'Inspector Goole',
    'Eva Smith / Daisy Renton',
  ],
  Macbeth: [
    'Act 1 Scene 1-3',
    'Act 1 Scene 5-7',
    'Act 2 Scene 1-2 (The Murder)',
    'Act 3 Scene 4 (Banquet)',
    'Act 5 Scene 1 (Sleepwalking)',
    'Act 5 Scene 5 (Tomorrow Speech)',
    'Macbeth (character)',
    'Lady Macbeth',
    'The Witches',
    'Banquo',
    'Ambition',
    'Guilt & Conscience',
    'Supernatural',
    'Masculinity & Power',
  ],
  'A Christmas Carol': [
    "Stave 1 (Marley's Ghost)",
    'Stave 2 (Past)',
    'Stave 3 (Present)',
    'Stave 4 (Future)',
    'Stave 5 (Redemption)',
    'Scrooge',
    'The Cratchit Family',
    'Ghost of Christmas Past',
    'Ghost of Christmas Present',
    'Ghost of Christmas Yet to Come',
    'Poverty & Social Responsibility',
    'Redemption & Change',
  ],
  'Of Mice and Men': [
    'Chapter 1 (The Clearing)',
    'Chapter 2 (The Bunkhouse)',
    'Chapter 3 (Slim & Candy)',
    "Chapter 4 (Crooks' Room)",
    'Chapter 5 (The Barn)',
    'Chapter 6 (The Ending)',
    'George Milton',
    'Lennie Small',
    "Curley's Wife",
    'Crooks',
    'The American Dream',
    'Loneliness & Isolation',
  ],
  'Romeo and Juliet': [
    'Act 1 Scene 1 (The Brawl)',
    'Act 1 Scene 5 (The Party)',
    'Act 2 Scene 2 (Balcony)',
    'Act 3 Scene 1 (Mercutio & Tybalt)',
    'Act 3 Scene 5 (Juliet & Capulet)',
    'Act 5 Scene 3 (The Tomb)',
    'Romeo',
    'Juliet',
    'Tybalt',
    'Mercutio',
    'The Nurse',
    'Lord Capulet',
    'Love & Conflict',
    'Fate & Free Will',
  ],
  'Jekyll and Hyde': [
    'Chapter 1 (The Door)',
    'Chapter 2 (Search for Hyde)',
    'Chapter 4 (Carew Murder)',
    "Chapter 9 (Dr Lanyon's Narrative)",
    "Chapter 10 (Henry Jekyll's Statement)",
    'Dr Jekyll',
    'Mr Hyde',
    'Mr Utterson',
    'Duality of Man',
    'Repression & Victorian Society',
    'Science & Morality',
  ],
  Frankenstein: [
    "Walton's Letters",
    'Chapters 1-5 (Creation)',
    "Chapters 11-16 (Creature's Narrative)",
    'Chapters 17-21 (Pursuit)',
    'Chapters 22-24 (The Ending)',
    'Victor Frankenstein',
    'The Creature',
    'Playing God',
    'Isolation & Rejection',
    'Nature vs Nurture',
  ],
  'Poetry Anthology': [
    'Power & Conflict cluster',
    'Love & Relationships cluster',
    'Ozymandias',
    'London',
    'My Last Duchess',
    'Charge of the Light Brigade',
    'Exposure',
    'Remains',
    'Bayonet Charge',
    'Comparing two poems',
  ],
}

// ─── Pre-built Lesson Plans ──────────────────────────────────────────────────

const LESSON_PLANS: LessonPlan[] = [
  // 1 -- An Inspector Calls / AQA / Reading Analysis
  {
    id: 'demo-aic-01',
    title: 'The Role of the Inspector: Language and Dramatic Function',
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Priestley uses the Inspector as a dramatic device to interrogate each character',
      "Explore how the Inspector's language shifts tone depending on which character he addresses",
      "Evaluate the Inspector's function as a mouthpiece for Priestley's socialist message",
      'Write an analytical paragraph embedding AO1, AO2, and AO3 in response to an exam-style question',
    ],
    successCriteria: [
      'I can identify at least three language techniques the Inspector uses and explain their effect',
      "I can compare the Inspector's tone when speaking to Birling versus Sheila",
      "I can link the Inspector's role to Priestley's political purpose using AO3 context",
      'I can write a PEEL paragraph that integrates language analysis with contextual understanding',
    ],
    keywords: [
      'dramatic device',
      'mouthpiece',
      'socialism',
      'interrogation',
      'collective responsibility',
      'dramatic irony',
      'stage directions',
      'didactic',
      'morality play',
      'catharsis',
    ],
    starterActivity: {
      title: "Inspector's Greatest Hits: Quote Ranking",
      duration: '8 minutes',
      instructions:
        "Display six key Inspector quotations on the board. Students rank them from most to least powerful in pairs, justifying their top choice to the class. Teacher uses responses to establish the Inspector's rhetorical range -- from calm questioning to passionate moral pronouncement. Discuss: does the Inspector speak like a real police officer or something else entirely?",
      differentiation: {
        support:
          'Provide a glossary card defining key terms (rhetorical question, imperative, declarative) alongside the quotations so students can label techniques as they rank.',
        core: 'Students rank all six quotations and write one sentence explaining their top choice using a language technique.',
        stretch:
          "Students identify a pattern across the quotations and propose what Priestley is trying to achieve through the Inspector's evolving language.",
      },
      resources: [
        'Six Inspector quotations displayed on projector',
        'Glossary cards (support tier)',
        'Mini-whiteboards for ranking',
      ],
    },
    mainActivities: [
      {
        title: 'Comparative Close Reading: Inspector vs Birling',
        duration: '22 minutes',
        instructions:
          "Students receive two extracts: the Inspector's entrance speech and Mr Birling's capitalist monologue from Act 1. Working in pairs, they annotate both extracts side by side, identifying contrasts in sentence structure, register, tone, and use of pronouns. Teacher models one annotation: 'Birling uses first person and possessive pronouns (my, I) while the Inspector uses collective pronouns (we, us), reflecting the ideological clash between individualism and socialism.' Students then write a comparative paragraph using the sentence stem: 'While Birling... the Inspector..., which suggests Priestley...'",
        differentiation: {
          support:
            'Provide a partially completed comparison table with columns for Birling and the Inspector, with one row filled in as a model.',
          core: 'Students complete the annotation independently and write a comparative paragraph using the provided stem.',
          stretch:
            "Students extend their paragraph to include AO3 context about the 1945 post-war audience and why Priestley's message would have resonated.",
        },
        resources: [
          'Extract sheet: Inspector entrance + Birling monologue',
          'Comparison table template (support)',
          'Model annotation on projector',
        ],
      },
      {
        title: "Exam Practice: The Inspector as Priestley's Voice",
        duration: '20 minutes',
        instructions:
          "Students respond to the question: 'How does Priestley use the Inspector to convey his ideas about responsibility?' Using a PEEL structure, they write two paragraphs. Teacher circulates, offering targeted feedback. After 15 minutes, three volunteers read their strongest paragraph aloud; class offers 'two stars and a wish' feedback focusing on AO2 technique identification and AO3 contextual embedding.",
        differentiation: {
          support:
            'Provide a PEEL paragraph frame with sentence openers for each stage and a bank of three quotations to choose from.',
          core: 'Students write two independent PEEL paragraphs selecting their own quotations from the text.',
          stretch:
            'Students write a third paragraph that considers an alternative reading of the Inspector -- is he a ghost, a time traveller, or a collective conscience?',
        },
        resources: [
          'Exam question displayed on board',
          'PEEL paragraph frame (support)',
          'Play copies for quotation selection',
        ],
      },
    ],
    plenaryActivity: {
      title: 'One Word, One Reason',
      duration: '7 minutes',
      instructions:
        "Each student writes one word on a sticky note that best describes the Inspector's function in the play. Students place notes on the board; teacher groups them into categories. Class discusses which category is most convincing and why. Teacher summarises by linking the most popular choices back to Priestley's dramatic purpose.",
      differentiation: {
        support:
          'Choose from a list of five suggested words and explain your choice in one sentence.',
        core: 'Select your own word and justify it with reference to the text.',
        stretch:
          "Challenge a classmate's word choice by offering a counter-argument with textual evidence.",
      },
    },
    homework:
      "Write a 200-word response to the question: 'Is the Inspector a realistic character or a symbolic one? Use at least two quotations to support your argument.' Be prepared to share your strongest sentence next lesson.",
    worksheetQuestions: [
      {
        question:
          "How does Priestley use the Inspector's language to create a sense of moral authority? Refer to specific techniques in your answer.",
        lines: 6,
        modelAnswer:
          "Priestley uses imperative verbs and declarative sentences to give the Inspector an authoritative, almost prophetic tone. When he states 'We are responsible for each other,' the first-person plural pronoun creates collective accountability, positioning the audience alongside the Inspector rather than the Birlings. His use of short, direct sentences contrasts sharply with Birling's rambling, self-important speeches, making the Inspector's moral clarity feel unassailable.",
        marks: 5,
      },
      {
        question:
          'Compare the way the Inspector speaks to Mr Birling with the way he speaks to Sheila. What does this reveal about his dramatic purpose?',
        lines: 6,
        modelAnswer:
          "With Birling, the Inspector is confrontational and interrupts frequently, using pointed questions to expose Birling's selfishness. With Sheila, he is gentler and more patient, recognising her capacity for genuine remorse. This contrast reveals that the Inspector functions as a moral mirror, adapting his approach to expose each character's true nature and test whether they are capable of change.",
        marks: 5,
      },
      {
        question:
          "Explain why Priestley might have chosen to make the Inspector's identity ambiguous. How does this ambiguity serve the play's message?",
        lines: 5,
        modelAnswer:
          "By leaving the Inspector's identity unresolved, Priestley prevents the audience from dismissing him as merely a police officer doing his job. His supernatural quality transforms him into something larger -- a collective conscience, a moral force, or even a divine judge. This ambiguity reinforces Priestley's socialist message: responsibility cannot be confined to a legal framework; it is a moral imperative that transcends ordinary authority.",
        marks: 5,
      },
      {
        question:
          "What is the effect of the Inspector's final speech? How does Priestley use it to address the audience directly?",
        lines: 5,
        modelAnswer:
          "The Inspector's final speech functions as a direct address to the 1945 audience, breaking the fourth wall in spirit if not in stage direction. His warning about 'fire and blood and anguish' references both World Wars, reminding the audience that ignoring collective responsibility leads to catastrophe. The tricolon intensifies the threat, while the shift from past to future tense creates urgency.",
        marks: 4,
      },
      {
        question:
          'How does Priestley use the Inspector to critique capitalism? Support your answer with reference to the play and its context.',
        lines: 6,
        modelAnswer:
          "Priestley uses the Inspector to systematically dismantle each Birling's capitalist justification for exploiting Eva Smith. By revealing how each character's selfish decisions contributed to her death, the Inspector demonstrates that capitalism creates a chain of exploitation in which the wealthy remain comfortable while the working class suffer. Writing in 1945, Priestley was advocating for the welfare state and using the Inspector as a didactic mouthpiece to persuade his audience that social change was both necessary and urgent.",
        marks: 6,
      },
    ],
    teacherNotes: [
      "Students often describe the Inspector as 'mysterious' without analysing how Priestley creates that mystery through language choices. Push them towards specific technique identification.",
      'The comparison activity works best when students physically place the two extracts side by side and draw arrows between contrasting features.',
      "If time allows, show a short clip from the 2015 BBC adaptation to compare how different actors interpret the Inspector's tone.",
      "The ambiguity question in the worksheet is an excellent stretch task -- encourage students to consider multiple interpretations without insisting on one 'correct' answer.",
    ],
    targetedSkills: [
      'AO1 -- Personal response supported by textual reference',
      'AO2 -- Analysis of language, form, and structure',
      'AO3 -- Understanding of context and its influence on the text',
      'Comparative analysis between characters',
      'Exam-style paragraph writing using PEEL',
    ],
  },

  // 2 -- Macbeth / AQA / Reading Analysis
  {
    id: 'demo-mac-01',
    title: "Ambition and Guilt: Macbeth's Soliloquies in Act 1",
    text: 'Macbeth',
    board: 'AQA',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      "Analyse how Shakespeare uses soliloquy to reveal Macbeth's internal conflict between ambition and conscience",
      "Explore the imagery of 'vaulting ambition' and its structural significance",
      'Evaluate how Shakespeare presents the audience with a tragic hero who is both sympathetic and culpable',
      'Write an analytical response integrating AO1, AO2, and AO3',
    ],
    successCriteria: [
      'I can explain how soliloquy functions as a dramatic device and why Shakespeare uses it at this point',
      "I can identify and analyse at least three images from the 'If it were done' soliloquy",
      "I can link Macbeth's internal conflict to Jacobean beliefs about ambition and divine order",
      'I can write a paragraph that embeds quotation, technique, and context into a coherent argument',
    ],
    keywords: [
      'soliloquy',
      'tragic hero',
      'hamartia',
      'vaulting ambition',
      'equivocation',
      'regicide',
      'Divine Right',
      'hubris',
      'dramatic irony',
      'Jacobean',
    ],
    starterActivity: {
      title: 'What Would You Risk Everything For?',
      duration: '7 minutes',
      instructions:
        'Students write anonymously on a slip of paper one thing they would risk everything to achieve, then fold and place in a box. Teacher reads five aloud without identifying authors. Class discusses: at what point does ambition become dangerous? When does wanting something cross the line into obsession? Teacher bridges to Macbeth: Shakespeare asks the same question four hundred years ago.',
      differentiation: {
        support:
          "Provide a sentence starter: 'I would risk everything to...' and one follow-up prompt: 'The danger of this ambition is...'",
        core: 'Students write their response and consider whether their ambition could lead to negative consequences.',
        stretch:
          'Students consider whether ambition is inherently destructive or whether it depends on the moral framework of the individual.',
      },
      resources: ['Slips of paper', 'Collection box', 'Timer on board'],
    },
    mainActivities: [
      {
        title: "Close Reading: 'If it were done when 'tis done' (Act 1, Scene 7)",
        duration: '25 minutes',
        instructions:
          "Teacher reads the soliloquy aloud twice -- once for understanding, once for effect. Students follow with annotated copies. Teacher models annotation of the first four lines, identifying: conditional language ('if'), euphemism ('it' for murder), the imagery of consequence ('trammel up'), and the fear of divine judgement ('judgement here'). Students then work in pairs to annotate the remainder, focusing on: imagery of ambition ('vaulting ambition, which o'erleaps itself'), religious language ('angels, trumpet-tongued'), and the metaphor of the poisoned chalice. Class shares annotations; teacher builds a collective annotated version on the board.",
        differentiation: {
          support:
            'Provide a guided annotation sheet with numbered lines, pre-highlighted key phrases, and prompt questions beside each highlight.',
          core: "Students annotate independently using the teacher's model as a guide, identifying at least four techniques with explanations.",
          stretch:
            "Students compare this soliloquy with the 'Is this a dagger' soliloquy to trace how Macbeth's language changes as he moves closer to action.",
        },
        resources: [
          'Printed copies of Act 1 Scene 7 soliloquy',
          'Guided annotation sheet (support)',
          'Highlighters and pens',
        ],
      },
      {
        title: 'Paragraph Writing: Macbeth as Tragic Hero',
        duration: '18 minutes',
        instructions:
          "Students respond to: 'How does Shakespeare present Macbeth's internal conflict in Act 1 Scene 7?' Using PEEL, they write one paragraph that integrates a quotation, identifies a technique, explains its effect, and links to Jacobean context. Teacher provides a model opening sentence: 'Shakespeare presents Macbeth as a man torn between political ambition and moral conscience, reflecting Jacobean anxieties about the corruption of divinely appointed order.' Students draft; teacher circulates providing verbal feedback. Two volunteers share; class evaluates using success criteria.",
        differentiation: {
          support:
            'Provide a paragraph frame with sentence starters at each PEEL stage and a choice of two quotations with techniques pre-identified.',
          core: 'Students write an independent paragraph selecting their own quotation and technique.',
          stretch:
            'Students write a second paragraph exploring whether the audience should sympathise with Macbeth at this point, considering the concept of hamartia.',
        },
        resources: [
          'Model opening sentence on projector',
          'PEEL frame (support)',
          'Success criteria checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Sympathy Spectrum',
      duration: '5 minutes',
      instructions:
        "Teacher draws a line on the board from 'Fully Sympathetic' to 'Fully Culpable'. Students place their name on a sticky note along the spectrum based on how they feel about Macbeth at the end of Act 1. Three students from different positions justify their placement. Teacher notes the spread and previews next lesson: 'By the end of Act 2, will your position change?'",
      differentiation: {
        support: "Choose a position and explain it in one sentence using the word 'because'.",
        core: 'Justify your position with reference to a specific moment or quotation from Act 1.',
        stretch:
          'Predict how your position might shift and explain what Shakespeare would need to show you to change your mind.',
      },
    },
    homework:
      'Learn three quotations from the Act 1 Scene 7 soliloquy. For each quotation, write one sentence identifying the technique and one sentence explaining its effect. Bring your revision cards to next lesson.',
    worksheetQuestions: [
      {
        question: 'What is a soliloquy and why does Shakespeare use it at this point in the play?',
        lines: 4,
        modelAnswer:
          'A soliloquy is a speech delivered by a character alone on stage, revealing their inner thoughts directly to the audience. Shakespeare uses it here to show that Macbeth is genuinely conflicted about murdering Duncan. By letting the audience hear his private doubts, Shakespeare creates sympathy for a character who is about to commit a terrible act, establishing him as a tragic hero rather than a straightforward villain.',
        marks: 3,
      },
      {
        question:
          "Analyse the image of 'vaulting ambition, which o'erleaps itself / And falls on the other'. What does this reveal about Macbeth's self-awareness?",
        lines: 5,
        modelAnswer:
          "The metaphor of 'vaulting ambition' presents ambition as a horse that jumps too high and falls. The verb 'o'erleaps' suggests excess -- ambition that goes beyond reasonable limits. Crucially, Macbeth recognises this danger in himself, demonstrating a tragic self-awareness: he knows his ambition will destroy him, yet he proceeds regardless. This makes his downfall more poignant because it is not born of ignorance but of a conscious surrender to desire.",
        marks: 5,
      },
      {
        question:
          'How does Shakespeare use religious imagery in the soliloquy to create a sense of moral horror?',
        lines: 5,
        modelAnswer:
          "Shakespeare fills the soliloquy with religious imagery -- 'angels, trumpet-tongued', 'heaven's cherubin' -- to frame Duncan's murder as a sin against divine order. For a Jacobean audience who believed in the Divine Right of Kings, this imagery would have intensified the horror: Macbeth is not merely killing a man but defying God. The image of 'tears shall drown the wind' suggests cosmic grief, as if nature itself will weep at the transgression.",
        marks: 5,
      },
      {
        question:
          "Why is Macbeth's use of the word 'if' significant in the opening line of the soliloquy?",
        lines: 4,
        modelAnswer:
          "The conditional 'if' reveals Macbeth's desperate wish that murder could exist without consequence. He cannot bring himself to name the act directly, using 'it' as a euphemism, and the conditional structure shows he is bargaining with himself. This hesitancy humanises Macbeth and demonstrates that he is not yet the hardened tyrant he will become.",
        marks: 3,
      },
      {
        question:
          'How would a Jacobean audience have responded differently to this soliloquy compared with a modern audience? Use your knowledge of context to explain.',
        lines: 6,
        modelAnswer:
          "A Jacobean audience, who believed in the Divine Right of Kings and the literal reality of divine punishment, would have experienced genuine dread during this soliloquy. Macbeth's contemplation of regicide was not merely a dramatic plot point but a violation of sacred order. A modern audience, less bound by these beliefs, might focus more on the psychological realism of Macbeth's conflict -- seeing him as a study in ambition and moral weakness rather than a sinner inviting divine wrath.",
        marks: 5,
      },
    ],
    teacherNotes: [
      "The anonymous starter works best with a strict 'no judgement' rule -- students engage more freely when they know their response is genuinely private.",
      "Reading the soliloquy aloud is essential. Many students struggle with Shakespeare's syntax on first reading; hearing it spoken with dramatic emphasis unlocks meaning.",
      'The support annotation sheet should highlight specific words rather than whole lines -- this prevents overwhelm and teaches students to zoom in on individual word choices.',
      'The sympathy spectrum is a powerful formative assessment tool: photograph the board and return to it after Act 5 to track how opinions have shifted.',
    ],
    targetedSkills: [
      'AO1 -- Critical response to Shakespeare',
      'AO2 -- Analysis of language imagery and dramatic devices',
      'AO3 -- Jacobean context and its influence on audience reception',
      'Close reading and annotation skills',
      'Paragraph writing with embedded quotation',
    ],
  },

  // 3 -- A Christmas Carol / AQA / Reading Analysis
  {
    id: 'demo-acc-01',
    title: "Scrooge's Transformation: Language and Structure in Stave 1",
    text: 'A Christmas Carol',
    board: 'AQA',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Analyse how Dickens presents Scrooge as a symbol of Victorian greed and social indifference in Stave 1',
      "Explore how Dickens uses semantic fields of cold, darkness, and isolation to construct Scrooge's character",
      "Evaluate Dickens's purpose in creating such an extreme portrait of miserliness",
      'Write a structured analytical response to an exam-style question',
    ],
    successCriteria: [
      'I can identify the semantic field of cold and isolation in Stave 1 and explain its effect',
      'I can explain how Dickens uses Scrooge as a vehicle for social criticism',
      "I can link Scrooge's characterisation to Victorian attitudes towards poverty and the Poor Law",
      'I can write a PEEL paragraph that integrates AO1, AO2, and AO3',
    ],
    keywords: [
      'semantic field',
      'misanthropy',
      'Victorian',
      'Poor Law',
      'Malthusian',
      'pathetic fallacy',
      'allegory',
      'redemption',
      'social reform',
      'didactic',
    ],
    starterActivity: {
      title: 'Cold Words: Building a Semantic Field',
      duration: '6 minutes',
      instructions:
        "Display the opening description of Scrooge. Students have two minutes to circle or highlight every word associated with cold, darkness, or isolation. Class compiles a collective list on the board. Teacher asks: 'What is Dickens telling us about Scrooge before he even speaks?' Establish that Dickens constructs character through imagery before dialogue, and that the semantic field of cold represents emotional and moral bankruptcy.",
      differentiation: {
        support:
          "Provide the extract with key words underlined; students categorise them into 'cold', 'dark', and 'alone'.",
        core: 'Students independently identify words and explain the pattern they create.',
        stretch:
          "Students consider why Dickens opens with death ('Marley was dead') and how this frames the entire novella as a story about mortality and moral reckoning.",
      },
      resources: ['Printed extract from Stave 1 opening', 'Highlighters'],
    },
    mainActivities: [
      {
        title: "Dickens's Toolkit: How He Builds Scrooge",
        duration: '22 minutes',
        instructions:
          'Teacher introduces four techniques Dickens uses to characterise Scrooge in Stave 1: (1) semantic fields, (2) simile and metaphor, (3) listing and accumulation, (4) dialogue that reveals attitude. Students receive four short extracts, each demonstrating one technique. In pairs, they annotate each extract, identify the technique, and write one sentence explaining its effect. Class shares; teacher models how to weave multiple techniques into a single analytical point.',
        differentiation: {
          support:
            'Each extract comes with the technique pre-labelled and a sentence stem for the effect.',
          core: 'Students identify techniques independently and write effect sentences.',
          stretch:
            'Students rank the four techniques by effectiveness and justify their choice in a paragraph.',
        },
        resources: [
          'Four extract cards with technique focus',
          'Annotation pens',
          'Model combined paragraph on projector',
        ],
      },
      {
        title: 'Exam Practice: Scrooge in Stave 1',
        duration: '22 minutes',
        instructions:
          "Students write a response to: 'How does Dickens present Scrooge as an unpleasant character in the opening of the novella?' They must include at least two quotations, identify techniques, and embed one piece of AO3 context about Victorian attitudes to poverty. Teacher circulates offering feedback on paragraph structure. Final five minutes: students swap with a partner and highlight where they can see AO1, AO2, and AO3 in the response.",
        differentiation: {
          support:
            'Provide a planning grid with columns for quotation, technique, effect, and context, plus two pre-selected quotations.',
          core: 'Students plan and write independently using the text.',
          stretch:
            'Students include a counter-argument: is Dickens presenting Scrooge as purely villainous, or does the hyperbolic description contain humour that complicates our response?',
        },
        resources: [
          'Exam question on projector',
          'Planning grid (support)',
          'Novella copies',
          'AO highlighting pens (three colours)',
        ],
      },
    ],
    plenaryActivity: {
      title: "Scrooge's Defence Lawyer",
      duration: '5 minutes',
      instructions:
        "One student is appointed Scrooge's defence lawyer. They must argue in 60 seconds that Scrooge is a product of his society, not inherently evil. Class votes: guilty or not guilty? Teacher links this to Dickens's ultimate message -- if Scrooge can change, anyone can.",
      differentiation: {
        support: 'Provide two defence arguments on cards for the volunteer to use.',
        core: 'The volunteer prepares their own 60-second defence.',
        stretch: 'A second student acts as prosecutor; the class adjudicates.',
      },
    },
    homework:
      "Read the remainder of Stave 1 and identify three moments where Dickens begins to hint at Scrooge's vulnerability or capacity for change. Write one sentence for each moment explaining how Dickens prepares the reader for Scrooge's eventual transformation.",
    worksheetQuestions: [
      {
        question:
          'What is a semantic field? Identify the dominant semantic field in the opening description of Scrooge and explain its effect.',
        lines: 5,
        modelAnswer:
          "A semantic field is a group of words related to the same theme or concept. In the opening description of Scrooge, Dickens uses a semantic field of cold and winter: 'cold', 'froze', 'icy', 'nipped'. This creates the impression that Scrooge is emotionally frozen -- incapable of warmth, compassion, or human connection.",
        marks: 4,
      },
      {
        question:
          "Analyse the simile 'hard and sharp as flint'. What does this reveal about Scrooge's character?",
        lines: 5,
        modelAnswer:
          "The simile compares Scrooge to flint, a stone that is both hard and capable of producing sparks when struck. 'Hard' suggests emotional rigidity and a refusal to feel compassion, while 'sharp' implies he is cutting and unpleasant. However, the fact that flint produces fire when struck could foreshadow Scrooge's capacity for transformation -- he needs the right catalyst to ignite change.",
        marks: 4,
      },
      {
        question:
          "How does Dickens use Scrooge's dialogue with the charity collectors to criticise Victorian attitudes towards poverty?",
        lines: 6,
        modelAnswer:
          "When the charity collectors ask Scrooge for a donation, he responds by asking whether prisons and workhouses still operate, implying these institutions are sufficient provision for the poor. His suggestion that the poor should 'die' and 'decrease the surplus population' echoes the Malthusian economic theory that the poor were a burden. Dickens uses this exchange to satirise and condemn the callous attitudes of the wealthy Victorian middle class.",
        marks: 5,
      },
      {
        question:
          'Why did Dickens choose to write A Christmas Carol as a novella rather than a pamphlet or political speech?',
        lines: 4,
        modelAnswer:
          'Dickens understood that fiction could reach a wider audience and create an emotional response that a political pamphlet could not. By telling a story of personal transformation, he made his social message accessible and engaging. The novella form allowed him to combine entertainment with moral instruction.',
        marks: 3,
      },
      {
        question:
          "How does Dickens use the weather and setting in Stave 1 to reflect Scrooge's character? Use specific examples.",
        lines: 5,
        modelAnswer:
          "Dickens uses pathetic fallacy to mirror Scrooge's emotional state: the 'cold, bleak, biting weather' outside his counting-house reflects his cold inner world. While the fog 'came pouring in at every chink', suggesting the outside world is trying to reach Scrooge, he remains sealed in his frigid office. The contrast emphasises his self-imposed separation from humanity.",
        marks: 4,
      },
    ],
    teacherNotes: [
      'The semantic field starter is quick and effective -- students enjoy the detective element of finding patterns, and it introduces a transferable skill they can apply to any text.',
      "Be prepared for students who have seen film adaptations: their image of Scrooge may be more comedic than Dickens's text warrants.",
      "The Malthusian reference in the charity collector scene is worth explaining in full: 'surplus population' is a direct echo of Thomas Malthus's Essay on the Principle of Population (1798).",
      'The defence lawyer plenary generates excellent discussion and can be extended into a full debate activity in a subsequent lesson.',
    ],
    targetedSkills: [
      'AO1 -- Critical response supported by textual reference',
      'AO2 -- Analysis of language including semantic fields and simile',
      "AO3 -- Victorian context and Dickens's social purpose",
      'Exam paragraph writing with integrated AOs',
      'Close reading and annotation',
    ],
  },

  // 4 -- Of Mice and Men / AQA / Reading Analysis
  {
    id: 'demo-omam-01',
    title: 'Dreams and Loneliness: The American Dream in Of Mice and Men',
    text: 'Of Mice and Men',
    board: 'AQA',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Analyse how Steinbeck presents the American Dream as both a source of hope and an instrument of cruelty',
      "Explore how different characters' dreams reveal their social position and the inequalities of 1930s America",
      'Evaluate whether Steinbeck presents the dream as achievable or inherently illusory',
      'Write an analytical paragraph linking theme to context',
    ],
    successCriteria: [
      'I can explain what the American Dream represented and why it mattered to 1930s workers',
      "I can compare the dreams of George and Lennie with those of Curley's wife and Crooks",
      'I can use textual evidence to argue whether Steinbeck supports or critiques the Dream',
      'I can write a PEEL paragraph integrating AO1, AO2, and AO3',
    ],
    keywords: [
      'American Dream',
      'aspiration',
      'futility',
      'itinerant',
      'marginalisation',
      'social realism',
      'symbolism',
      'Great Depression',
      'cyclical structure',
      'foreshadowing',
    ],
    starterActivity: {
      title: 'Dream Board: What Does Success Look Like?',
      duration: '7 minutes',
      instructions:
        "Students write or draw their personal vision of 'success' on a card in 90 seconds. Teacher collects and displays a selection. Discuss: do all of these dreams require the same resources? Are some people's dreams harder to achieve than others, and why? Bridge to the novel: in 1930s America, the American Dream promised that anyone could succeed through hard work -- Steinbeck questions whether this was ever true.",
      differentiation: {
        support:
          "Provide a prompt list: 'Success could mean: a home, a job, freedom, family, money, safety, respect.'",
        core: 'Students create their own vision independently and link it to a character from the novel.',
        stretch:
          "Students consider whether the concept of 'success' is culturally constructed and how definitions would differ across 1930s American society.",
      },
      resources: ['Blank cards', 'Pens and markers'],
    },
    mainActivities: [
      {
        title: 'Character Dreams: Mapping Hope and Despair',
        duration: '22 minutes',
        instructions:
          "Students receive a grid with four characters: George and Lennie, Curley's wife, Crooks, and Candy. For each character, they must identify: (1) what their dream is, (2) a key quotation that reveals it, (3) what prevents them from achieving it. Students work in pairs, using the text to locate evidence. After 15 minutes, class shares; teacher builds a collective grid on the board. Teacher asks: 'Is Steinbeck saying the dream is wrong, or that society is wrong?'",
        differentiation: {
          support:
            'Provide page references for key quotations and a partially completed grid with one character filled in.',
          core: 'Students complete the grid independently using the text.',
          stretch:
            'Students add a fifth row for Slim and consider whether his lack of an explicit dream makes him the most realistic character in the novel.',
        },
        resources: [
          'Character dream grid worksheet',
          'Novel copies',
          'Page reference sheet (support)',
        ],
      },
      {
        title: 'Analytical Writing: The Dream as Illusion',
        duration: '20 minutes',
        instructions:
          "Students respond to: 'How does Steinbeck present the American Dream as an illusion in Of Mice and Men?' They write one PEEL paragraph focusing on George and Lennie's dream, integrating a quotation, technique identification, and AO3 context about the Great Depression. Teacher models the opening sentence: 'Steinbeck presents the American Dream as a necessary fiction that sustains the dispossessed even as it guarantees their disappointment.'",
        differentiation: {
          support:
            'Provide a paragraph frame with sentence starters and a pre-selected quotation with the technique identified.',
          core: 'Students write independently, selecting their own quotation.',
          stretch:
            'Students write a second paragraph arguing the opposite position: that Steinbeck values the dream precisely because it represents human resilience.',
        },
        resources: [
          'Model sentence on board',
          'PEEL frame (support)',
          'AO checklist for peer assessment',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Verdict: Hope or Cruelty?',
      duration: '6 minutes',
      instructions:
        "Students stand. Teacher reads three statements about the American Dream in the novel; students move to 'Agree', 'Disagree', or 'Unsure' corners. For each statement, one student from each corner justifies their position. Teacher synthesises: Steinbeck's genius lies in holding both positions simultaneously.",
      differentiation: {
        support: 'Stand in a corner and explain your position in one sentence.',
        core: 'Justify your position with a quotation from the novel.',
        stretch:
          'Respond to someone in an opposing corner with a counter-argument rooted in context.',
      },
    },
    homework:
      'Choose one character whose dream you find the most tragic. Write 150 words explaining why their dream is doomed and what Steinbeck is saying about American society through their failure. Include at least one quotation.',
    worksheetQuestions: [
      {
        question:
          'What is the American Dream and why was it particularly significant during the Great Depression?',
        lines: 5,
        modelAnswer:
          'The American Dream is the belief that anyone in America can achieve success through hard work, regardless of their social background. During the Great Depression, this dream became both more important and more unreachable: millions of displaced workers clung to the hope of land ownership even as mass unemployment made such aspirations almost impossible.',
        marks: 4,
      },
      {
        question:
          "How does Steinbeck use George and Lennie's dream of the farm to create emotional impact?",
        lines: 5,
        modelAnswer:
          "Steinbeck uses the repeated telling of the dream as a ritual between George and Lennie, building emotional investment in both the characters and the reader. The dream is described in sensory detail -- rabbits, a garden, living 'off the fatta the lan'' -- making it feel tangible. By making the dream so vivid and then destroying it, Steinbeck maximises the emotional devastation.",
        marks: 5,
      },
      {
        question:
          "Compare the dreams of Curley's wife and Crooks. What do their dreams reveal about 1930s American society?",
        lines: 6,
        modelAnswer:
          "Curley's wife dreamed of becoming a Hollywood actress, while Crooks once dreamed of playing with white children as an equal. Both dreams were destroyed by the social structures of 1930s America: Curley's wife was trapped by patriarchal expectations, while Crooks was crushed by racial segregation. Together, their failed dreams expose the American Dream as a lie that excluded women and Black Americans by design.",
        marks: 5,
      },
      {
        question:
          'Why does Steinbeck give the novel a cyclical structure, ending where it began by the river?',
        lines: 4,
        modelAnswer:
          'The cyclical structure reinforces the theme of futility: despite all their effort and hope, George and Lennie end up exactly where they started, suggesting that the dream was always doomed. The peaceful natural setting contrasts devastatingly with the violence of the ending.',
        marks: 4,
      },
      {
        question:
          'Is Steinbeck criticising the American Dream itself, or the society that makes it impossible? Justify your answer.',
        lines: 6,
        modelAnswer:
          "Steinbeck appears to critique the society rather than the dream itself. The dream of the farm is presented as genuinely beautiful and humanising -- it gives George and Lennie purpose, companionship, and hope. What destroys it is not the dream's inherent impossibility but the economic structures of the Great Depression and the violence of men like Curley.",
        marks: 6,
      },
    ],
    teacherNotes: [
      "Students often romanticise the dream without recognising Steinbeck's critique. Push them to consider why the dream fails -- the answer is always social and economic, not personal.",
      'The character grid activity generates excellent comparative material that students can return to when revising.',
      "Crooks's monologue in Chapter 4 is the most powerful evidence that Steinbeck sees the dream as illusory -- use it as extension reading.",
      'The cyclical structure question is an excellent gateway to discussing AO2 (form and structure) beyond language analysis.',
    ],
    targetedSkills: [
      'AO1 -- Personal and critical response to the novel',
      'AO2 -- Analysis of language, form, and structure',
      'AO3 -- Context of the Great Depression and the American Dream',
      'Comparative character analysis',
      'Thematic essay writing',
    ],
  },

  // 5 -- Poetry Anthology / AQA / Reading Analysis
  {
    id: 'demo-poetry-01',
    title: "Power and Conflict: Comparing 'Ozymandias' and 'My Last Duchess'",
    text: 'Poetry Anthology',
    board: 'AQA',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      'Analyse how Shelley and Browning present the theme of power and its abuse',
      "Compare the poets' use of dramatic monologue and narrative voice to expose tyranny",
      'Evaluate how the form and structure of each poem reinforces its message about power',
      'Write a comparative analytical response suitable for the AQA poetry comparison question',
    ],
    successCriteria: [
      'I can identify how both poets use voice and perspective to critique powerful figures',
      'I can compare at least two techniques used across the poems with analysis of effect',
      'I can explain how the sonnet form and dramatic monologue form contribute to meaning',
      "I can structure a comparison paragraph using the 'similarly/however' framework",
    ],
    keywords: [
      'dramatic monologue',
      'sonnet',
      'tyranny',
      'hubris',
      'enjambment',
      'caesura',
      'volta',
      'objectification',
      'patriarchy',
      'impermanence',
    ],
    starterActivity: {
      title: 'Power Portraits: What Does a Tyrant Look Like?',
      duration: '7 minutes',
      instructions:
        'Students sketch or describe in three bullet points what a powerful but corrupt leader looks like, acts like, and sounds like. Share in pairs, then as a class. Teacher displays descriptions of the Duke and Ozymandias side by side. Discuss: both are powerful men, but how do the poets want us to feel about them?',
      differentiation: {
        support: 'Provide a word bank: arrogant, controlling, vain, cruel, commanding, imposing.',
        core: 'Students create their portrait independently and connect it to one of the two poems.',
        stretch:
          'Students consider whether power is inherently corrupting or whether these poems present specific types of power abuse.',
      },
      resources: ['Paper and pens for sketching', 'Word bank (support)'],
    },
    mainActivities: [
      {
        title: 'Dual Annotation: Finding the Connections',
        duration: '25 minutes',
        instructions:
          'Students receive both poems printed side by side on A3 paper. Teacher models annotating the first three lines of each, identifying: voice/perspective, imagery of power, and one structural feature. Students then work in pairs to annotate both poems fully, using colour coding: green for similarities, red for differences. Focus questions on the board: How does each speaker reveal character? What do the physical descriptions symbolise? How does each poem end?',
        differentiation: {
          support:
            'Provide a pre-annotated first stanza of each poem and a colour-coded key showing what to look for.',
          core: 'Students annotate independently using the focus questions as a guide.',
          stretch:
            'Students identify how both poems use art (sculpture, painting) as a symbol and write a sentence explaining what this shared motif suggests about power and legacy.',
        },
        resources: [
          'A3 dual-poem annotation sheet',
          'Coloured pens (green and red)',
          'Focus questions displayed on board',
        ],
      },
      {
        title: 'Comparative Paragraph Writing',
        duration: '18 minutes',
        instructions:
          "Students write one comparison paragraph responding to: 'Compare how the poets present the abuse of power.' Teacher models the comparative framework: 'Both poets... However, while Shelley..., Browning..., which suggests...' Students use this framework, embedding quotations from both poems.",
        differentiation: {
          support:
            'Provide the framework with the first comparison point completed and a choice of two quotation pairs.',
          core: 'Students write independently using the framework.',
          stretch:
            'Students write a second paragraph that considers how the form of each poem contributes to its message about power.',
        },
        resources: ['Comparative framework on projector', 'Framework handout (support)'],
      },
    ],
    plenaryActivity: {
      title: 'Which Tyrant Wins?',
      duration: '5 minutes',
      instructions:
        'Class debate: who is the more dangerous figure -- Ozymandias or the Duke? Students vote with hands, then three students from each side give a 20-second argument. Teacher concludes: Shelley shows us power destroyed by time; Browning shows us power that continues to destroy.',
      differentiation: {
        support: 'Vote and give one reason for your choice.',
        core: 'Support your vote with a quotation.',
        stretch: 'Link your argument to a modern example of power abuse.',
      },
    },
    homework:
      'Write a 200-word comparison paragraph on how Shelley and Browning use imagery to present power. Include at least one quotation from each poem.',
    worksheetQuestions: [
      {
        question:
          "How does Shelley use the ruined statue in 'Ozymandias' to comment on the impermanence of power?",
        lines: 5,
        modelAnswer:
          "Shelley describes the statue as broken and half-buried in sand, with the 'shattered visage' symbolising the decay of once-great power. The irony of the inscription beside 'nothing beside remains' exposes the futility of Ozymandias's arrogance. Time is the ultimate equaliser.",
        marks: 5,
      },
      {
        question:
          "How does Browning reveal the Duke's character through what he says about the Duchess?",
        lines: 5,
        modelAnswer:
          "Browning uses the dramatic monologue to let the Duke unknowingly reveal his cruelty. His complaints about the Duchess expose his possessiveness and need for absolute control. The chilling line 'I gave commands; then all smiles stopped' implies murder, yet his calm tone suggests he sees nothing wrong.",
        marks: 5,
      },
      {
        question: 'Compare how the form of each poem contributes to its message about power.',
        lines: 6,
        modelAnswer:
          "Shelley's disrupted sonnet form mirrors the destruction of Ozymandias's ordered empire. Browning's unbroken dramatic monologue, with relentless enjambment, mirrors the Duke's controlling personality -- he never pauses or allows interruption. Both poets use form to embody their theme.",
        marks: 6,
      },
      {
        question: 'What is the significance of art (the statue and the painting) in both poems?',
        lines: 5,
        modelAnswer:
          "Both poems use art as a symbol of power's attempt to outlast mortality. Ozymandias's statue now lies in ruins; the Duke keeps his wife's painting behind a curtain he controls. Art becomes an instrument of dominance, but ultimately reveals the tyrant's flaws rather than concealing them.",
        marks: 5,
      },
      {
        question: 'Which poem do you find more disturbing? Explain with reference to both poems.',
        lines: 6,
        modelAnswer:
          "A strong answer might argue 'My Last Duchess' is more disturbing because the Duke's power is ongoing rather than ancient. While Ozymandias's cruelty has been neutralised by time, the Duke is actively negotiating his next marriage. Shelley offers comfort that tyrants fall; Browning offers no such reassurance.",
        marks: 6,
      },
    ],
    teacherNotes: [
      'Students frequently struggle with comparison, reverting to writing about each poem separately. The framework is essential scaffolding.',
      'The A3 side-by-side annotation is significantly more effective than working with separate sheets.',
      "Be prepared to explain the Duke of Ferrara's historical context -- students are often shocked to learn the poem is based on real events.",
      'The debate plenary works best when students cannot sit on the fence -- force a choice and defend it.',
    ],
    targetedSkills: [
      'AO1 -- Comparative personal response',
      'AO2 -- Analysis of language, form, and structure across two poems',
      'AO3 -- Contextual understanding of Romantic and Victorian poetry',
      'Comparative paragraph writing',
      'Poetry annotation skills',
    ],
  },

  // 6 -- Macbeth / AQA / Exam Practice
  {
    id: 'demo-mac-02',
    title: 'Exam Practice: Writing About Lady Macbeth Under Timed Conditions',
    text: 'Macbeth',
    board: 'AQA',
    yearGroup: 'Year 11',
    duration: '45 minutes',
    objectives: [
      'Apply close reading skills to an unseen extract from Act 1 Scene 5 under timed conditions',
      'Write an essay response that addresses AO1, AO2, AO3, and AO4 within 40 minutes',
      'Develop exam technique: planning, time management, and paragraph structure',
      'Self-assess using the mark scheme to identify areas for improvement',
    ],
    successCriteria: [
      'I can plan a response in 5 minutes using a bullet-point plan',
      'I can write three focused paragraphs in 30 minutes',
      'I can integrate context naturally rather than bolting it on',
      'I can self-assess my work against the mark scheme and identify one specific target',
    ],
    keywords: [
      'extract question',
      'mark scheme',
      'AO weighting',
      'topic sentence',
      'embedded quotation',
      'perceptive analysis',
      'conceptualised response',
      'counter-argument',
      'time management',
      'self-assessment',
    ],
    starterActivity: {
      title: 'Exam Myths: True or False?',
      duration: '5 minutes',
      instructions:
        'Display five common exam myths. Students vote true or false; teacher clarifies each, emphasising that quality of analysis beats quantity, and that context should be woven in, not bolted on.',
      differentiation: {
        support: "Provide a 'Top 5 Exam Tips' card summarising the key points.",
        core: 'Students vote and discuss, taking notes on key principles.',
        stretch:
          "Students write their own 'myth' based on a mistake they have made in previous essays.",
      },
      resources: ['Exam myths slide', 'Top 5 Exam Tips card (support)'],
    },
    mainActivities: [
      {
        title: 'Timed Essay: Lady Macbeth in Act 1 Scene 5',
        duration: '35 minutes',
        instructions:
          "Students receive the extract and the question: 'How does Shakespeare present Lady Macbeth as a powerful and ambitious character in this extract and in the play as a whole?' Students spend 5 minutes planning, then write for 30 minutes. Teacher provides time checks at 10 and 20 minutes. Exam-like conditions.",
        differentiation: {
          support:
            'Provide a planning template with three suggested paragraph focuses: supernatural imagery, gender subversion, and her relationship with Macbeth.',
          core: 'Students plan and write independently.',
          stretch:
            "Students include a paragraph contrasting Lady Macbeth's power in Act 1 with her breakdown in Act 5.",
        },
        resources: [
          'Extract: Act 1 Scene 5 (printed)',
          'Exam question on board',
          'Planning template (support)',
          'Lined paper',
          'Timer displayed',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Self-Assessment Against the Mark Scheme',
      duration: '5 minutes',
      instructions:
        'Teacher displays simplified mark scheme bands. Students re-read their essay and highlight: one moment of strong AO2 analysis (green), one moment of effective AO3 context (blue), and one area for improvement (orange). Students write a one-sentence target.',
      differentiation: {
        support: 'Use a simplified two-band mark scheme with clear checklists.',
        core: 'Students self-assess using the full mark scheme descriptors.',
        stretch: 'Students write two targets: one for content and one for written accuracy (AO4).',
      },
    },
    homework:
      "Rewrite your weakest paragraph from today's essay, improving it based on your self-assessment target. Bring both the original and the rewrite to next lesson.",
    worksheetQuestions: [
      {
        question:
          "What does Lady Macbeth mean when she says 'unsex me here'? How does this relate to Jacobean gender expectations?",
        lines: 5,
        modelAnswer:
          'Lady Macbeth is asking supernatural spirits to strip away her femininity so she can carry out the murder without compassion. In Jacobean society, women were expected to be obedient and nurturing. Her request is deeply transgressive -- Shakespeare presents her as willing to reject her own nature to achieve power.',
        marks: 5,
      },
      {
        question:
          "How does Shakespeare use imperative verbs in Lady Macbeth's soliloquy to convey her determination?",
        lines: 4,
        modelAnswer:
          "Shakespeare fills the soliloquy with imperatives -- 'Come', 'unsex', 'fill', 'stop up', 'take' -- creating a commanding, ritualistic tone. These contrast sharply with Macbeth's uncertain conditional language, establishing her as the more decisive partner at this stage.",
        marks: 4,
      },
      {
        question:
          "Explain one way in which Lady Macbeth's language in Act 1 foreshadows her later breakdown in Act 5.",
        lines: 5,
        modelAnswer:
          "When Lady Macbeth asks the spirits to 'make thick my blood' and prevent 'compunctious visitings of nature', she is suppressing her humanity. This foreshadows her breakdown in Act 5, where the guilt she blocked returns as sleepwalking and obsessive hand-washing. Shakespeare suggests the suppression was never sustainable.",
        marks: 5,
      },
      {
        question:
          "Write a topic sentence for a paragraph about Lady Macbeth's power that would earn marks for AO1, AO2, and AO3.",
        lines: 3,
        modelAnswer:
          "Shakespeare presents Lady Macbeth as a figure of transgressive feminine power whose invocation of supernatural forces would have deeply unsettled a Jacobean audience that believed women should be passive and obedient, yet whose commanding imperative language demonstrates a rhetorical control that exceeds even Macbeth's.",
        marks: 4,
      },
      {
        question:
          "Why is it important to discuss the whole play, not just the extract, when the question says 'and in the play as a whole'?",
        lines: 4,
        modelAnswer:
          "The 'whole play' instruction requires students to demonstrate knowledge beyond the given extract, showing they understand character development across the entire text. Students who only discuss the extract will be limited to lower mark bands.",
        marks: 3,
      },
    ],
    teacherNotes: [
      'This is a timed practice lesson -- resist the urge to over-scaffold. Students need exam pressure in a supportive environment.',
      'The planning stage is critical: enforce the 5-minute planning time strictly.',
      'When marking, focus feedback on one or two actionable targets rather than comprehensive annotation.',
      'The myth-busting starter is worth returning to periodically: students frequently revert to formulaic approaches under pressure.',
    ],
    targetedSkills: [
      'AO1 -- Critical response to an extract and the whole play',
      "AO2 -- Analysis of Shakespeare's language and dramatic techniques",
      'AO3 -- Contextual integration in essay writing',
      'AO4 -- Written accuracy under timed conditions',
      'Exam technique: planning, timing, and self-assessment',
    ],
  },

  // 7 -- A Christmas Carol / AQA / Writing Skills
  {
    id: 'demo-acc-02',
    title: 'Descriptive Writing: Creating Atmosphere Inspired by Dickens',
    text: 'A Christmas Carol',
    board: 'AQA',
    yearGroup: 'Year 9',
    duration: '45 minutes',
    objectives: [
      'Analyse how Dickens creates atmosphere through sensory language and structural choices',
      "Apply Dickens's techniques to original descriptive writing",
      'Develop control of sentence structure for deliberate effect',
      'Peer assess descriptive writing against success criteria',
    ],
    successCriteria: [
      'I can identify three techniques Dickens uses to create atmosphere',
      'I can write a descriptive passage using sensory language and varied sentence structure',
      'I can use a one-sentence paragraph for dramatic effect',
      'I can give specific, technique-focused feedback to a partner',
    ],
    keywords: [
      'atmosphere',
      'sensory language',
      'pathetic fallacy',
      'juxtaposition',
      'one-sentence paragraph',
      'complex sentence',
      'sibilance',
      'semantic field',
      'pacing',
      'reader positioning',
    ],
    starterActivity: {
      title: 'Atmosphere in Five Senses',
      duration: '5 minutes',
      instructions:
        'Teacher reads aloud a 100-word Dickens passage. Students listen with eyes closed, then write one thing they saw, heard, felt, smelled, and tasted in their imagination. Share in pairs. Establish that great descriptive writing activates all the senses, not just sight.',
      differentiation: {
        support: 'Provide a five-senses grid with labels and space to write one word per sense.',
        core: 'Students write a phrase or sentence for each sense independently.',
        stretch: 'Students identify which sense Dickens emphasises most and explain why.',
      },
      resources: ['Dickens passage (teacher read-aloud)', 'Five-senses grid (support)'],
    },
    mainActivities: [
      {
        title: 'Stealing from Dickens: Technique Toolkit',
        duration: '15 minutes',
        instructions:
          'Students receive three short Dickens extracts, each showcasing a different technique: (1) sensory detail and pathetic fallacy, (2) listing for accumulation, (3) one-sentence paragraph for shock. For each extract, students identify the technique, copy a model sentence, and then write their own imitation sentence set in a school at night. Teacher models the first imitation.',
        differentiation: {
          support: 'Provide sentence starters for each imitation.',
          core: 'Students write imitations independently for all three techniques.',
          stretch: 'Students combine all three techniques into a single four-sentence paragraph.',
        },
        resources: ['Three Dickens extract cards', 'Lined paper for imitation writing'],
      },
      {
        title: 'Extended Descriptive Writing: A Place That Chills',
        duration: '20 minutes',
        instructions:
          "Students write 150-200 words in response to: 'Describe a place that fills you with unease.' They must include at least two of Dickens's techniques. Teacher provides quiet writing environment. After 15 minutes, students swap with a partner for peer feedback using a checklist.",
        differentiation: {
          support:
            'Provide a planning frame with four paragraph prompts: arrival, what you see, what you hear/feel, the moment of dread.',
          core: 'Students plan and write independently.',
          stretch:
            'Students write a second version of their opening paragraph, experimenting with a different sentence structure.',
        },
        resources: [
          'Writing prompt on board',
          'Planning frame (support)',
          'Peer feedback checklist',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Best Line Share',
      duration: '5 minutes',
      instructions:
        'Each student underlines their single best sentence and reads it aloud. No explanation needed -- just the sentence. Teacher notes effective examples and explains what makes them work.',
      differentiation: {
        support: 'Read your best sentence to a partner first for confidence.',
        core: 'Read your best sentence aloud and identify the technique you used.',
        stretch: 'Explain why you chose that sentence and what effect you intended.',
      },
    },
    homework:
      'Rewrite and polish your descriptive passage to exactly 200 words. Focus on making every word count. Bring a clean copy to next lesson.',
    worksheetQuestions: [
      {
        question:
          'What is pathetic fallacy? Give an example from A Christmas Carol and explain its effect.',
        lines: 4,
        modelAnswer:
          "Pathetic fallacy is when the environment reflects a character's emotions. The 'cold, bleak, biting weather' outside Scrooge's counting-house mirrors his cold nature. The effect is to make the reader associate Scrooge with discomfort before he even speaks.",
        marks: 3,
      },
      {
        question: 'Why might a writer use a one-sentence paragraph? Write an example of your own.',
        lines: 4,
        modelAnswer:
          "A one-sentence paragraph creates a dramatic pause, forcing the reader to absorb its impact. Surrounded by longer paragraphs, it gains maximum weight. Example: 'The door opened.'",
        marks: 3,
      },
      {
        question:
          "Identify two techniques in: 'The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait.'",
        lines: 5,
        modelAnswer:
          "Dickens uses listing (froze, nipped, shrivelled, stiffened) to create cumulative effect. He also uses the metaphor 'the cold within him' to suggest Scrooge's coldness is internal rather than external -- it comes from his character, not the weather.",
        marks: 4,
      },
      {
        question:
          "Write a sentence using sensory language to describe a hot summer's day. Identify the senses you included.",
        lines: 3,
        modelAnswer:
          'The tarmac shimmered in waves of heat, the sweet smell of melting ice cream drifting from the park gates while somewhere distant a lawnmower droned its lazy afternoon song. Senses: sight, smell, sound.',
        marks: 3,
      },
      {
        question:
          "Explain the difference between 'The room was scary' and using techniques to show the room is frightening.",
        lines: 5,
        modelAnswer:
          "'The room was scary' tells the reader how to feel without evidence. Using techniques -- sensory details, metaphor, varied sentences -- shows the reader the room and lets them feel the fear themselves. 'Show, don't tell' creates an immersive experience.",
        marks: 4,
      },
    ],
    teacherNotes: [
      'This lesson bridges reading Dickens and preparing for the creative writing paper.',
      'The imitation activity is key: students who copy then rewrite internalise techniques more effectively than those who merely identify them.',
      'Keep atmospheric music subtle -- ambient soundscapes work well.',
      "The 'Best Line Share' plenary builds classroom community. Students begin crafting sentences with this moment in mind.",
    ],
    targetedSkills: [
      'Descriptive writing using sensory language',
      'Sentence structure for deliberate effect',
      'Technique identification and application',
      'Peer assessment and constructive feedback',
      'Writing with precision and economy',
    ],
  },

  // 8 -- An Inspector Calls / AQA / Speaking & Listening
  {
    id: 'demo-aic-02',
    title: 'Hot-Seating the Birlings: Speaking and Listening Assessment',
    text: 'An Inspector Calls',
    board: 'AQA',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Adopt and sustain the role of a character from An Inspector Calls in a hot-seating activity',
      'Ask probing questions that reveal character motivation, attitude, and moral position',
      'Evaluate how well peers sustain character through language register, content accuracy, and dramatic conviction',
      'Develop speaking and listening skills suitable for formal assessment',
    ],
    successCriteria: [
      'I can sustain character voice for at least two minutes, using appropriate register',
      'I can ask questions that push beyond surface-level responses',
      "I can evaluate a peer's performance against specific assessment criteria",
      'I can reflect on my own performance and identify areas for improvement',
    ],
    keywords: [
      'hot-seating',
      'role-play',
      'register',
      'characterisation',
      'inference',
      'dramatic empathy',
      'motivation',
      'sustained performance',
      'evaluation',
      'assessment criteria',
    ],
    starterActivity: {
      title: 'Character Warm-Up: In Their Shoes',
      duration: '8 minutes',
      instructions:
        "Each student is assigned a Birling family member or the Inspector. They write five key facts and three 'rules' for how that character would speak. Students practise introducing themselves in character to a partner for 30 seconds each.",
      differentiation: {
        support:
          "Provide a character fact sheet with five pre-written facts and two 'speech rules'.",
        core: 'Students create their own character profile independently using the text.',
        stretch: 'Students prepare for a curveball question and draft an in-character response.',
      },
      resources: ['Character assignments', 'Character fact sheets (support)', 'Timer'],
    },
    mainActivities: [
      {
        title: 'Hot-Seating: The Birling Family Tribunal',
        duration: '35 minutes',
        instructions:
          'Set up a tribunal format: one chair at the front, the rest as questioners. Five students take turns in the hot seat (7 minutes each). The class asks factual, inferential, and challenging questions. Teacher acts as moderator. After each performance, the class scores on a 1-5 scale for accuracy, conviction, and register.',
        differentiation: {
          support: 'Provide a question bank of five starter questions per character.',
          core: 'Students generate their own questions based on the text.',
          stretch:
            "Students ask follow-up questions that challenge the character's justification and force them to confront responsibility.",
        },
        resources: ['Hot seat chair', 'Question bank cards (support)', 'Scoring sheets', 'Timer'],
      },
    ],
    plenaryActivity: {
      title: 'Reflection and Self-Assessment',
      duration: '10 minutes',
      instructions:
        'Students write a brief self-assessment: (1) What went well? (2) What would I do differently? (3) What did I learn about my character that I had not considered before? Three volunteers share reflections.',
      differentiation: {
        support:
          "Use sentence starters: 'My strongest moment was... Next time I would... I discovered that my character...'",
        core: 'Students write a full three-part reflection independently.',
        stretch:
          'Students evaluate whether the hot-seating changed their interpretation of a character.',
      },
    },
    homework:
      "Write a 200-word diary entry in character as the person you played. Set it on the evening after the Inspector's visit. Reveal the character's private thoughts about what happened.",
    worksheetQuestions: [
      {
        question: 'What is hot-seating and how does it develop understanding of character?',
        lines: 4,
        modelAnswer:
          "Hot-seating is a drama technique where a student takes on a character's role and answers questions from the audience. It develops understanding because it forces students to think from inside the character's perspective, considering not just what they do but why.",
        marks: 3,
      },
      {
        question:
          'Write three questions you would ask Mr Birling. Explain what each is designed to reveal.',
        lines: 6,
        modelAnswer:
          "(1) 'Do you believe Eva Smith's death was your fault?' -- reveals whether he accepts responsibility. (2) 'If Eva came today, would you re-employ her?' -- tests whether the Inspector changed his attitude. (3) 'What would Sheila say about your behaviour?' -- forces him to confront how his actions appear to someone who has accepted responsibility.",
        marks: 5,
      },
      {
        question:
          'How should a student sustain character voice during hot-seating? Give two strategies.',
        lines: 4,
        modelAnswer:
          "First, maintain the character's register throughout -- if playing Mr Birling, use formal, self-important language. Second, respond to unexpected questions by asking 'What would this character genuinely think?' rather than breaking character.",
        marks: 4,
      },
      {
        question:
          'Why might Sheila respond differently from her father when asked about responsibility?',
        lines: 5,
        modelAnswer:
          "Sheila has demonstrated genuine remorse, recognising that her jealousy led her to abuse her social power. Unlike her father, she understands the moral weight of what happened. She would likely accept responsibility openly, reflecting Priestley's positioning of the younger generation as capable of growth.",
        marks: 4,
      },
      {
        question:
          "Evaluate your own or a classmate's hot-seating performance. What was effective and what could be improved?",
        lines: 5,
        modelAnswer:
          'A strong answer identifies specific moments of success and specific targets. The best evaluations reference the assessment criteria: accuracy, conviction, and register.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'Hot-seating works best when the class has already studied the full play. Use as revision or consolidation.',
      'Set clear expectations about audience behaviour: everyone must ask at least one question.',
      "The tribunal format raises the stakes compared to standard hot-seating. Consider assigning a 'judge' role.",
      'This activity can be adapted for formal S&L assessment if recorded. Ensure students consent to recording.',
    ],
    targetedSkills: [
      'Speaking and Listening -- sustained dramatic performance',
      'Character analysis through empathy and inference',
      'Questioning skills -- factual, inferential, and evaluative',
      'Self-assessment and peer evaluation',
      'Register and vocabulary appropriate to character',
    ],
  },

  // 9 -- Of Mice and Men / AQA / Exam Practice
  {
    id: 'demo-omam-02',
    title: "Exam Technique: Extract-Based Questions on Steinbeck's Methods",
    text: 'Of Mice and Men',
    board: 'AQA',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Practise responding to extract-based exam questions under timed conditions',
      'Develop the ability to move between close analysis of the extract and wider novel knowledge',
      "Embed Steinbeck's methods (language, structure, narrative voice) into analytical writing",
      'Self-assess using mark scheme descriptors and set actionable targets',
    ],
    successCriteria: [
      'I can annotate an extract in under 5 minutes, identifying three or more methods',
      'I can write an essay that balances extract analysis with whole-text knowledge',
      'I can use topic sentences that address the question directly',
      'I can self-assess and identify one specific area for improvement',
    ],
    keywords: [
      'extract question',
      "Steinbeck's methods",
      'narrative voice',
      'third-person omniscient',
      'foreshadowing',
      'symbolism',
      'mark scheme',
      'band descriptors',
      'embedded quotation',
      'topic sentence',
    ],
    starterActivity: {
      title: 'Speed Annotation Challenge',
      duration: '5 minutes',
      instructions:
        'Display a short extract. Students have exactly three minutes to annotate as many methods as they can identify. After three minutes, take a poll: who found 3? 5? 7? Discuss: quality matters more than quantity, but speed matters too.',
      differentiation: {
        support: "Provide a 'methods menu' card listing eight techniques to look for.",
        core: 'Students annotate independently.',
        stretch: 'Students categorise annotations into AO2 (language/structure) and AO3 (context).',
      },
      resources: ['Extract on projector', 'Methods menu card (support)', 'Timer'],
    },
    mainActivities: [
      {
        title: "Timed Essay: Steinbeck's Presentation of Loneliness",
        duration: '40 minutes',
        instructions:
          "Students receive Crooks's room description from Chapter 4 and the question: 'How does Steinbeck present the theme of loneliness in this extract and in the novel as a whole?' Phase 1 (5 mins): annotate and plan. Phase 2 (30 mins): write the essay. Phase 3 (5 mins): re-read and correct errors. Exam-like quiet throughout.",
        differentiation: {
          support: 'Provide a planning template with three suggested paragraph focuses.',
          core: 'Students plan and write independently.',
          stretch:
            "Students include a paragraph on Steinbeck's structural choices -- why is Crooks's chapter placed where it is?",
        },
        resources: [
          "Printed extract: Crooks's room",
          'Exam question on board',
          'Planning template (support)',
          'Lined paper',
          'Timer',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Mark Scheme Self-Assessment',
      duration: '8 minutes',
      instructions:
        'Teacher displays simplified mark scheme bands. Students identify one strength (green) and one weakness (orange). Write a target sentence at the end of the essay.',
      differentiation: {
        support: 'Use a simplified two-band mark scheme with checklists.',
        core: 'Self-assess against three-band descriptors.',
        stretch: 'Estimate your own mark and justify it with reference to mark scheme language.',
      },
    },
    homework:
      'Rewrite your weakest paragraph. Write the original and improved version side by side to see the progress.',
    worksheetQuestions: [
      {
        question: "How does Steinbeck use Crooks's room to symbolise his isolation?",
        lines: 5,
        modelAnswer:
          "Steinbeck describes Crooks's room as separate from the bunkhouse, physically isolating him. The room is filled with personal items suggesting long tenure but no acceptance. The 'mauled copy of the California civil code' reveals he knows his legal rights but cannot enforce them. Every detail speaks to exclusion.",
        marks: 5,
      },
      {
        question:
          "Why does Steinbeck use a third-person omniscient narrator? How does this affect the reader's understanding of loneliness?",
        lines: 5,
        modelAnswer:
          'The omniscient narrator allows Steinbeck to show the isolation of multiple characters without being limited to one perspective. The reader sees the full picture of loneliness while individual characters remain trapped in their own worlds. This creates dramatic irony.',
        marks: 5,
      },
      {
        question:
          "What is the difference between analysing the extract and discussing 'the novel as a whole'?",
        lines: 4,
        modelAnswer:
          "Extract analysis requires close reading of specific language choices. 'The novel as a whole' requires connecting the extract to broader themes and structural patterns. The combination tests whether students can zoom in on detail and zoom out to thematic understanding.",
        marks: 3,
      },
      {
        question:
          "Write a strong topic sentence for a paragraph about Curley's wife and loneliness.",
        lines: 3,
        modelAnswer:
          "Steinbeck presents Curley's wife as the loneliest figure on the ranch, using her namelessness as a structural device to demonstrate how patriarchal society erases women's individual identity, trapping them in roles defined entirely by their relationship to men.",
        marks: 3,
      },
      {
        question:
          'Explain why embedded quotations are more effective than block quotations. Write an example.',
        lines: 5,
        modelAnswer:
          "Embedded quotations create a fluent analytical voice. Block quotations disrupt the flow. Example: Steinbeck reveals Crooks's isolation through his bitter observation that 'a guy gets too lonely an' he gets sick', suggesting loneliness is a form of psychological illness.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "Crooks's chapter is ideal for exam practice -- rich in methods and connects to multiple themes.",
      "Remind students that 'methods' includes structural choices and narrative perspective, not just language techniques.",
      'The self-assessment phase is crucial: students who can accurately identify weaknesses improve faster.',
      'Consider photographing a selection of student plans to discuss effective planning strategies.',
    ],
    targetedSkills: [
      'Exam technique for extract-based questions',
      'Close reading and rapid annotation',
      'Balancing extract analysis with whole-text knowledge',
      'Self-assessment against mark scheme criteria',
      'Writing with embedded quotations and topic sentences',
    ],
  },

  // 10 -- Poetry Anthology / AQA / Writing Skills
  {
    id: 'demo-poetry-02',
    title: 'Writing Your Own Conflict Poem: Voice, Imagery, and Structure',
    text: 'Poetry Anthology',
    board: 'AQA',
    yearGroup: 'Year 9',
    duration: '60 minutes',
    objectives: [
      'Analyse how published poets use voice, imagery, and structure to explore conflict',
      'Apply poetic techniques to original creative writing',
      'Experiment with form and line breaks to create deliberate effects',
      'Peer assess creative work against technique-focused success criteria',
    ],
    successCriteria: [
      'I can identify how a published poet uses voice and imagery to explore conflict',
      'I can write a poem of at least 12 lines using a clear voice and at least three techniques',
      'I can use line breaks and stanza structure deliberately',
      "I can give specific, constructive feedback on a peer's poem",
    ],
    keywords: [
      'poetic voice',
      'persona',
      'extended metaphor',
      'enjambment',
      'caesura',
      'stanza',
      'tone shift',
      'sensory imagery',
      'conflict',
      'resolution',
    ],
    starterActivity: {
      title: 'Conflict in Six Words',
      duration: '6 minutes',
      instructions:
        "Challenge: write a six-word story about conflict. Examples: 'Shook hands. Walked away. Came back.' Students write three attempts, choose their best, and share. Teacher establishes that economy of language, surprise, and emotional weight are qualities shared by the best poetry.",
      differentiation: {
        support: 'Provide three models and a word bank of conflict-related words.',
        core: 'Students create three original six-word stories independently.',
        stretch: 'Students write a six-word story that contains a volta or tonal shift.',
      },
      resources: ['Example stories on projector', 'Word bank (support)'],
    },
    mainActivities: [
      {
        title: 'Poet as Mentor: Borrowing from the Anthology',
        duration: '20 minutes',
        instructions:
          "Students choose one anthology poem about conflict as their 'mentor text'. They identify three techniques and write one sentence explaining each. Teacher models with one poem. Students then plan their own poem: choose a type of conflict, select a voice, and decide on a structure.",
        differentiation: {
          support: 'Provide a planning template with guided choices.',
          core: 'Students plan independently using the mentor text as inspiration.',
          stretch:
            'Students plan a poem that uses two different voices or perspectives on the same conflict.',
        },
        resources: ['Anthology copies', 'Index cards for planning', 'Planning template (support)'],
      },
      {
        title: 'Drafting: Write Your Conflict Poem',
        duration: '25 minutes',
        instructions:
          'Students write a poem of at least 12 lines. Quiet writing environment for the first 15 minutes. After 15 minutes, students may consult a partner. In the final five minutes, students make one deliberate revision. Teacher circulates offering encouragement and technique-specific suggestions.',
        differentiation: {
          support: 'Provide a line-by-line scaffold for the first stanza with blanks.',
          core: 'Students write independently using their plan.',
          stretch:
            'Students write at least 20 lines and include a structural feature (volta, refrain, or circular ending).',
        },
        resources: [
          'Lined paper or poetry notebooks',
          'Line scaffold (support)',
          'Quiet background music (optional)',
        ],
      },
    ],
    plenaryActivity: {
      title: 'Poetry Slam: Share and Celebrate',
      duration: '7 minutes',
      instructions:
        'Five volunteers read their poem aloud. After each reading, the class identifies one technique they heard and one image that stayed with them. Teacher celebrates effort, creativity, and technical ambition.',
      differentiation: {
        support: 'Volunteers can read from their seat.',
        core: 'Volunteers read aloud with expression and pace.',
        stretch: 'Volunteers perform from memory or with minimal reference to the page.',
      },
    },
    homework:
      'Type up a polished version of your conflict poem. Make at least three deliberate changes from your draft, annotating in the margin why you made each change.',
    worksheetQuestions: [
      {
        question:
          'Choose one technique from your mentor poem and explain how the poet uses it to explore conflict.',
        lines: 5,
        modelAnswer:
          "Answers will vary. A strong response identifies a specific technique, provides a quotation, and explains how it contributes to the poem's exploration of conflict.",
        marks: 4,
      },
      {
        question: 'What is enjambment and how can it create tension in a conflict poem?',
        lines: 4,
        modelAnswer:
          'Enjambment is when a sentence runs over from one line to the next without punctuation. In a conflict poem, it can create tension by making the reader rush forward, mirroring chaos or urgency. It can also create surprise by placing an unexpected word at the start of the next line.',
        marks: 3,
      },
      {
        question:
          'Why is choosing a specific voice (persona) important when writing about conflict?',
        lines: 4,
        modelAnswer:
          "The voice determines how the reader experiences the conflict. A first-person soldier's voice creates immediacy; a detached observer creates irony; a child's voice creates innocence and pathos. The choice shapes vocabulary, tone, and the reader's relationship with the subject.",
        marks: 3,
      },
      {
        question:
          'Write an opening stanza (4 lines) for a poem about a personal conflict. Use at least one technique.',
        lines: 5,
        modelAnswer:
          "Example: 'I held the words like stones, / heavy in my fist, / knowing that to throw them / would shatter something I could not rebuild.' Techniques: simile, enjambment, metaphor.",
        marks: 4,
      },
      {
        question:
          'Explain the difference between free verse and a structured form. When might a poet choose one over the other?',
        lines: 5,
        modelAnswer:
          'Free verse has no set rhyme or metre, allowing the poet to mirror chaos. Structured forms impose order, which can contrast with chaotic subject matter. A poet might choose free verse for raw immediacy and structured form for ironic tension or the suggestion of imposed discipline.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The six-word story starter is consistently one of the most engaging activities across year groups.',
      "The 'mentor text' approach is more effective than teaching techniques in isolation.",
      'Resist correcting poems during drafting -- creative writing needs space and safety.',
      'The poetry slam builds confidence over time. Start with volunteers and gradually encourage wider participation.',
    ],
    targetedSkills: [
      'Creative writing -- poetry composition',
      'Technique application from reading to writing',
      'Understanding of poetic form and structure',
      'Peer assessment and constructive feedback',
      'Performance and spoken English skills',
    ],
  },

  // 11 -- A Christmas Carol / AQA / Exam Practice
  {
    id: 'demo-acc-03',
    title: 'Redemption and Morality: Stave 5 and the Transformed Scrooge',
    text: 'A Christmas Carol',
    board: 'AQA',
    yearGroup: 'Year 10',
    duration: '60 minutes',
    objectives: [
      "Analyse how Dickens presents Scrooge's transformation in Stave 5 through language and tone",
      "Evaluate the credibility and purpose of Scrooge's sudden redemption",
      "Link Scrooge's transformation to Dickens's broader message about social responsibility",
      'Write an evaluative response considering whether the ending is satisfying or problematic',
    ],
    successCriteria: [
      "I can identify how Dickens's language shifts in Stave 5 compared to Stave 1",
      'I can explain why Dickens chose to redeem Scrooge rather than punish him',
      'I can link the transformation to Victorian debates about charity and moral responsibility',
      "I can write a paragraph that evaluates rather than merely describes Scrooge's change",
    ],
    keywords: [
      'redemption',
      'transformation',
      'allegory',
      'didactic',
      'moral fable',
      'Christian values',
      'social reform',
      'tonal shift',
      'juxtaposition',
      'Victorian philanthropy',
    ],
    starterActivity: {
      title: 'Before and After: Scrooge Word Cloud',
      duration: '6 minutes',
      instructions:
        'Students create two quick word clouds on mini-whiteboards: one for Stave 1 Scrooge and one for Stave 5. Compare as a class. Teacher highlights the most dramatic contrasts. Ask: is this change believable? Does it matter?',
      differentiation: {
        support: 'Provide a word bank for each stave.',
        core: 'Students generate their own words independently from memory.',
        stretch:
          'Students identify which words from Stave 1 Dickens deliberately inverts in Stave 5.',
      },
      resources: ['Mini-whiteboards', 'Word bank cards (support)'],
    },
    mainActivities: [
      {
        title: 'Close Reading: The Language of Joy in Stave 5',
        duration: '22 minutes',
        instructions:
          'Students receive the opening of Stave 5. In pairs, they annotate for exclamatory sentences, dynamic verbs, sensory imagery, and humour. Teacher models one annotation. Students write their own commentary for two further features. Class maps the tonal shift from Stave 1.',
        differentiation: {
          support: 'Provide highlighted key phrases and an annotation checklist.',
          core: 'Students annotate and write commentary independently.',
          stretch:
            "Students compare the opening of Stave 5 with the opening of Stave 1, writing a paragraph on how Dickens structures the novella to maximise the transformation's impact.",
        },
        resources: ['Stave 5 opening extract', 'Stave 1 opening (stretch)', 'Checklist (support)'],
      },
      {
        title: 'Evaluative Writing: Is the Ending Too Good to Be True?',
        duration: '22 minutes',
        instructions:
          "Students respond to: 'Some readers argue that Scrooge's transformation is too sudden and unrealistic. How far do you agree?' They write two paragraphs: one arguing the transformation is effective, one arguing it undermines realism. Teacher emphasises evaluation means weighing both sides.",
        differentiation: {
          support: 'Provide paragraph frames for both sides with sentence starters.',
          core: 'Students write both paragraphs independently.',
          stretch:
            'Students write a third paragraph considering whether the ending works better as a fairy tale than as realism.',
        },
        resources: ['Question on board', 'Paragraph frames (support)', 'Novella copies'],
      },
    ],
    plenaryActivity: {
      title: 'Exit Ticket: Your Verdict',
      duration: '5 minutes',
      instructions:
        "Students write: 'The ending works because...' or 'The ending fails because...' on a slip of paper. Teacher reads three anonymously and discusses.",
      differentiation: {
        support: 'Choose one of two pre-written statements and add a reason.',
        core: 'Write an original verdict with a reason and a quotation.',
        stretch: 'Write a verdict that acknowledges both sides before concluding.',
      },
    },
    homework:
      'Read the final two pages of Stave 5 and write five annotations focusing on how Dickens uses language to reinforce that generosity and connection are the antidotes to misery.',
    worksheetQuestions: [
      {
        question:
          'How does the language of Stave 5 contrast with Stave 1? Give two specific examples.',
        lines: 5,
        modelAnswer:
          "In Stave 1, Dickens uses cold and darkness: 'cold', 'froze', 'solitary as an oyster'. In Stave 5, the language shifts to warmth and energy: 'glowing', 'Golden sunlight', 'merry'. Exclamatory sentences replace clipped dismissals. The linguistic transformation mirrors Scrooge's moral rebirth.",
        marks: 5,
      },
      {
        question: 'Why does Dickens choose to redeem Scrooge rather than punish him?',
        lines: 5,
        modelAnswer:
          "Dickens's purpose is didactic rather than punitive. If Scrooge were punished, the message would be merely a warning. By transforming him, Dickens offers hope: even the worst of us can choose generosity. This aligns with the Christian message of redemption and Dickens's belief in individual moral change.",
        marks: 5,
      },
      {
        question: "Do you think Scrooge's transformation is realistic? Explain your view.",
        lines: 6,
        modelAnswer:
          'The transformation is psychologically unrealistic -- a lifetime of misanthropy reversed in one night. However, Dickens is writing a moral fable, not a psychological novel. The rapid change is deliberate: it shows that goodness exists within everyone, needing only the right catalyst. The supernatural framework signals fairy tale logic, not realism.',
        marks: 6,
      },
      {
        question: 'What role does Christmas play in the transformation?',
        lines: 4,
        modelAnswer:
          "Christmas symbolises generosity, community, and moral renewal. Dickens sets the story at Christmas because the season already carried associations of charity, making Scrooge's refusal to celebrate feel especially transgressive. The Christian narrative of rebirth reinforces the allegory.",
        marks: 4,
      },
      {
        question:
          'How does Dickens use humour in Stave 5 to make the transformation appealing rather than preachy?',
        lines: 5,
        modelAnswer:
          'Dickens injects physical comedy: Scrooge dresses in a rush, laughs uncontrollably, nearly falls over. His childlike joy makes him endearing rather than saintly. The humour prevents the transformation from feeling like a lecture. Dickens shows that goodness is joyful, not solemn.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The evaluative question is the heart of this lesson. Many students confuse evaluation with description. Emphasise that evaluation requires a personal position supported by evidence.',
      'The fairy tale / realism debate prepares students for unseen prose questions where they may need to evaluate narrative choices.',
      'If students are strongly divided, consider a brief formal debate in the next lesson.',
      "Dickens's own public readings of A Christmas Carol were enormously popular -- mentioning this helps students understand the novella as a performance piece.",
    ],
    targetedSkills: [
      'AO1 -- Evaluative personal response',
      'AO2 -- Analysis of language, tone, and structure across staves',
      "AO3 -- Victorian context and Dickens's moral purpose",
      'Evaluative essay writing',
      'Comparing different sections of a text',
    ],
  },
]

// ─── Helper: Find Best Matching Lesson Plan ──────────────────────────────────

function findBestMatch(
  text: string,
  board: string,
  yearGroup: string,
  focus: string,
  duration: string,
): LessonPlan {
  let bestScore = -1
  let bestPlan = LESSON_PLANS[0]

  for (const plan of LESSON_PLANS) {
    let score = 0
    if (plan.text === text) score += 10
    if (plan.board.toLowerCase().includes(board.toLowerCase())) score += 5
    if (plan.yearGroup === yearGroup) score += 3
    if (plan.duration === duration) score += 2

    const focusLower = focus.toLowerCase()
    if (
      focusLower === 'reading analysis' &&
      plan.targetedSkills.some((s) => s.toLowerCase().includes('analysis'))
    )
      score += 4
    if (
      focusLower === 'writing skills' &&
      plan.targetedSkills.some((s) => s.toLowerCase().includes('writing'))
    )
      score += 4
    if (
      focusLower === 'speaking & listening' &&
      plan.targetedSkills.some((s) => s.toLowerCase().includes('speaking'))
    )
      score += 4
    if (
      focusLower === 'exam practice' &&
      plan.targetedSkills.some((s) => s.toLowerCase().includes('exam'))
    )
      score += 4

    if (score > bestScore) {
      bestScore = score
      bestPlan = plan
    }
  }

  return {
    ...bestPlan,
    board,
    yearGroup,
    duration,
    id: `demo-generated-${Date.now()}`,
  }
}

// ─── Helper: Lesson Plan to Plain Text ───────────────────────────────────────

function lessonToText(plan: LessonPlan): string {
  const lines: string[] = []
  lines.push(`LESSON PLAN: ${plan.title}`)
  lines.push(`Text: ${plan.text}`)
  lines.push(`Board: ${plan.board} | Year Group: ${plan.yearGroup} | Duration: ${plan.duration}`)
  lines.push('')
  lines.push('OBJECTIVES:')
  plan.objectives.forEach((o, i) => lines.push(`  ${i + 1}. ${o}`))
  lines.push('')
  lines.push('SUCCESS CRITERIA:')
  plan.successCriteria.forEach((s) => lines.push(`  - ${s}`))
  lines.push('')
  lines.push(`KEYWORDS: ${plan.keywords.join(', ')}`)
  lines.push('')
  lines.push('--- STARTER ACTIVITY ---')
  lines.push(`Title: ${plan.starterActivity.title} (${plan.starterActivity.duration})`)
  lines.push(`Instructions: ${plan.starterActivity.instructions}`)
  if (plan.starterActivity.differentiation) {
    lines.push(`  Support: ${plan.starterActivity.differentiation.support}`)
    lines.push(`  Core: ${plan.starterActivity.differentiation.core}`)
    lines.push(`  Stretch: ${plan.starterActivity.differentiation.stretch}`)
  }
  lines.push('')
  plan.mainActivities.forEach((act, i) => {
    lines.push(`--- MAIN ACTIVITY ${i + 1} ---`)
    lines.push(`Title: ${act.title} (${act.duration})`)
    lines.push(`Instructions: ${act.instructions}`)
    if (act.differentiation) {
      lines.push(`  Support: ${act.differentiation.support}`)
      lines.push(`  Core: ${act.differentiation.core}`)
      lines.push(`  Stretch: ${act.differentiation.stretch}`)
    }
    lines.push('')
  })
  lines.push('--- PLENARY ---')
  lines.push(`Title: ${plan.plenaryActivity.title} (${plan.plenaryActivity.duration})`)
  lines.push(`Instructions: ${plan.plenaryActivity.instructions}`)
  if (plan.plenaryActivity.differentiation) {
    lines.push(`  Support: ${plan.plenaryActivity.differentiation.support}`)
    lines.push(`  Core: ${plan.plenaryActivity.differentiation.core}`)
    lines.push(`  Stretch: ${plan.plenaryActivity.differentiation.stretch}`)
  }
  lines.push('')
  if (plan.homework) {
    lines.push('--- HOMEWORK ---')
    lines.push(plan.homework)
    lines.push('')
  }
  lines.push('--- WORKSHEET QUESTIONS ---')
  plan.worksheetQuestions.forEach((q, i) => {
    lines.push(`${i + 1}. ${q.question} [${q.marks} marks]`)
    if (q.modelAnswer) lines.push(`   Model Answer: ${q.modelAnswer}`)
    lines.push('')
  })
  lines.push('--- TEACHER NOTES ---')
  plan.teacherNotes.forEach((n) => lines.push(`  - ${n}`))
  return lines.join('\n')
}

function worksheetToText(plan: LessonPlan): string {
  const lines: string[] = []
  lines.push(`WORKSHEET: ${plan.title}`)
  lines.push(`Text: ${plan.text} | Board: ${plan.board} | Year Group: ${plan.yearGroup}`)
  lines.push('')
  lines.push('Answer all questions. Write in full sentences.')
  lines.push('')
  plan.worksheetQuestions.forEach((q, i) => {
    lines.push(`${i + 1}. ${q.question}`)
    lines.push(`   [${q.marks} marks | ${q.lines} lines]`)
    lines.push('')
    for (let l = 0; l < q.lines; l++) {
      lines.push('   _______________________________________________________________')
    }
    lines.push('')
  })
  return lines.join('\n')
}

// ─── Typing Effect Lines ─────────────────────────────────────────────────────

const TYPING_LINES = [
  'Analysing curriculum requirements...',
  'Mapping assessment objectives to lesson structure...',
  'Selecting differentiated activities...',
  'Generating starter activity with engagement hooks...',
  'Building main activities with tiered differentiation...',
  'Crafting plenary for consolidation...',
  'Writing worksheet questions with model answers...',
  'Compiling teacher notes and resources...',
  'Finalising lesson plan...',
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function LessonBuilderDemo() {
  const t = useT()
  const [text, setText] = useState<string>(TEXTS[0])
  const [yearGroup, setYearGroup] = useState<string>(YEAR_GROUPS[3])
  const [board, setBoard] = useState<string>(EXAM_BOARDS[0])
  const [duration, setDuration] = useState<string>(DURATIONS[2])
  const [focus, setFocus] = useState<string>(FOCUSES[0])
  const [specificSection, setSpecificSection] = useState<string>('')

  // Compute available specific sections for the selected text
  const availableSections = SPECIFIC_SECTIONS[text] || []

  const [isGenerating, setIsGenerating] = useState(false)
  const [typingIndex, setTypingIndex] = useState(0)
  const [generatedPlan, setGeneratedPlan] = useState<LessonPlan | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!isGenerating) return
    if (typingIndex >= TYPING_LINES.length) {
      const plan = findBestMatch(text, board, yearGroup, focus, duration)
      setGeneratedPlan(plan)
      setIsGenerating(false)
      setTypingIndex(0)
      return
    }
    const timer = setTimeout(() => {
      setTypingIndex((prev) => prev + 1)
    }, 220)
    return () => clearTimeout(timer)
  }, [isGenerating, typingIndex, text, board, yearGroup, focus, duration])

  const handleGenerate = useCallback(() => {
    setGeneratedPlan(null)
    setCopied(false)
    setIsGenerating(true)
    setTypingIndex(0)
  }, [])

  const handleReset = useCallback(() => {
    setGeneratedPlan(null)
    setCopied(false)
    setIsGenerating(false)
    setTypingIndex(0)
  }, [])

  const handleDownloadPDF = useCallback(() => {
    if (!generatedPlan) return
    try {
      const plan = generatedPlan
      const lessonData: LessonPlanData = {
        title: plan.title,
        duration: plan.duration,
        yearGroup: plan.yearGroup,
        examBoard: plan.board,
        text: plan.text,
        objectives: plan.objectives,
        starterActivity: {
          title: plan.starterActivity.title,
          duration: plan.starterActivity.duration,
          instructions: plan.starterActivity.instructions,
          differentiation: plan.starterActivity.differentiation,
        },
        mainActivities: plan.mainActivities.map((a) => ({
          title: a.title,
          duration: a.duration,
          instructions: a.instructions,
          differentiation: a.differentiation,
        })),
        plenary: {
          title: plan.plenaryActivity.title,
          instructions: plan.plenaryActivity.instructions,
          differentiation: plan.plenaryActivity.differentiation,
        },
        keyVocabulary: plan.keywords,
        resourcesNeeded: plan.starterActivity.resources || [],
        homework: plan.homework,
        teacherNotes: plan.teacherNotes,
      }
      generateLessonPlan(plan.text, lessonData)
      showToast('Lesson plan opened for printing/saving as PDF')
    } catch (err) {
      console.error('PDF generation failed:', err)
      showToast('Download failed - please try again')
    }
  }, [generatedPlan])

  const handleDownloadWorksheet = useCallback(() => {
    if (!generatedPlan) return
    try {
      const plan = generatedPlan
      const questions: PdfWorksheetQuestion[] = plan.worksheetQuestions.map((q) => ({
        question: q.question,
        type: 'short-answer' as const,
        marks: q.marks || 3,
        lines: q.lines,
      }))
      generateWorksheet(
        plan.text,
        {
          title: `Worksheet: ${plan.title}`,
          instructions:
            'Answer all questions in the spaces provided. Use quotations to support your answers where appropriate.',
          text: plan.text,
          yearGroup: plan.yearGroup,
          examBoard: plan.board,
        },
        questions,
      )
      showToast('Worksheet opened for printing/saving as PDF')
    } catch (err) {
      console.error('Worksheet generation failed:', err)
      showToast('Download failed - please try again')
    }
  }, [generatedPlan])

  const handleDownloadWordLesson = useCallback(() => {
    if (!generatedPlan) return
    try {
      const plan = generatedPlan
      generateLessonPlanWord(plan.text, {
        title: plan.title,
        duration: plan.duration,
        yearGroup: plan.yearGroup,
        examBoard: plan.board,
        text: plan.text,
        objectives: plan.objectives,
        starterActivity: {
          title: plan.starterActivity.title,
          duration: plan.starterActivity.duration,
          instructions: plan.starterActivity.instructions,
          differentiation: plan.starterActivity.differentiation,
        },
        mainActivities: plan.mainActivities.map((a) => ({
          title: a.title,
          duration: a.duration,
          instructions: a.instructions,
          differentiation: a.differentiation,
        })),
        plenary: {
          title: plan.plenaryActivity.title,
          instructions: plan.plenaryActivity.instructions,
          differentiation: plan.plenaryActivity.differentiation,
        },
        keyVocabulary: plan.keywords,
        resourcesNeeded: plan.starterActivity.resources || [],
        homework: plan.homework,
        teacherNotes: plan.teacherNotes,
      })
      showToast('Lesson plan downloaded as Word document')
    } catch (err) {
      console.error('Word lesson generation failed:', err)
      showToast('Download failed - please try again')
    }
  }, [generatedPlan])

  const handleDownloadWordWorksheet = useCallback(() => {
    if (!generatedPlan) return
    try {
      const plan = generatedPlan
      const questions = plan.worksheetQuestions.map((q) => ({
        question: q.question,
        type: 'short-answer' as const,
        marks: q.marks || 3,
        lines: q.lines,
      }))
      generateWorksheetWord(
        plan.text,
        {
          title: `Worksheet: ${plan.title}`,
          instructions:
            'Answer all questions in the spaces provided. Use quotations to support your answers where appropriate.',
          text: plan.text,
          yearGroup: plan.yearGroup,
          examBoard: plan.board,
        },
        questions,
      )
      showToast('Worksheet downloaded as Word document')
    } catch (err) {
      console.error('Word worksheet generation failed:', err)
      showToast('Download failed - please try again')
    }
  }, [generatedPlan])

  const handleDownloadPptx = useCallback(async () => {
    if (!generatedPlan) return
    const plan = generatedPlan
    const lessonData: LessonPlanData = {
      title: plan.title,
      duration: plan.duration,
      yearGroup: plan.yearGroup,
      examBoard: plan.board,
      text: plan.text,
      objectives: plan.objectives,
      starterActivity: {
        title: plan.starterActivity.title,
        duration: plan.starterActivity.duration,
        instructions: plan.starterActivity.instructions,
        differentiation: plan.starterActivity.differentiation,
      },
      mainActivities: plan.mainActivities.map((a) => ({
        title: a.title,
        duration: a.duration,
        instructions: a.instructions,
        differentiation: a.differentiation,
      })),
      plenary: {
        title: plan.plenaryActivity.title,
        instructions: plan.plenaryActivity.instructions,
        differentiation: plan.plenaryActivity.differentiation,
      },
      keyVocabulary: plan.keywords,
      resourcesNeeded: plan.starterActivity.resources || [],
      homework: plan.homework,
      teacherNotes: plan.teacherNotes,
    }
    try {
      await generateLessonPlanPptx(plan.text, lessonData)
      showToast('Lesson plan downloaded as PowerPoint')
    } catch (err) {
      console.error('PPTX download failed:', err)
      showToast('Failed to download PowerPoint -- please try again')
    }
  }, [generatedPlan])

  const handleCopy = useCallback(async () => {
    if (!generatedPlan) return
    try {
      await navigator.clipboard.writeText(lessonToText(generatedPlan))
      setCopied(true)
      showToast('Copied to clipboard')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      showToast('Failed to copy -- try again')
    }
  }, [generatedPlan])

  const showToast = useCallback((message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 3000)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-lg text-sm font-medium animate-fade-in">
          {toast}
        </div>
      )}

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
          {t('demo.b15.lessons.eyebrow')}
        </p>
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-3">
          {t('demo.b15.lessons.title')}
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
          {t('demo.b15.lessons.subtitle')}
        </p>

        {/* Demo Banner */}
        <div className="mb-10 rounded-xl border border-clay-500/20 bg-clay-500/5 px-5 py-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-clay-600 dark:text-clay-400 text-lg font-heading italic">
              *
            </span>
            <div>
              <p className="text-clay-600 dark:text-clay-400 font-medium text-sm">
                {t('demo.b15.lessons.demo_mode')}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                {t('demo.b15.lessons.demo_note')}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        {!generatedPlan && !isGenerating && (
          <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 mb-10">
            <h2 className="text-xl font-medium text-foreground mb-6">
              {t('demo.b15.lessons.configure_heading')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormSelect
                label={t('demo.b15.lessons.label_text')}
                value={text}
                onChange={(v) => {
                  setText(v)
                  setSpecificSection('')
                }}
                options={[...TEXTS]}
              />
              <FormSelect
                label={t('demo.b15.lessons.label_board')}
                value={board}
                onChange={setBoard}
                options={[...EXAM_BOARDS]}
              />
              <FormSelect
                label={t('demo.b15.lessons.label_year')}
                value={yearGroup}
                onChange={setYearGroup}
                options={[...YEAR_GROUPS]}
              />
              <FormSelect
                label={t('demo.b15.lessons.label_duration')}
                value={duration}
                onChange={setDuration}
                options={[...DURATIONS]}
              />
              <div className="sm:col-span-2">
                <FormSelect
                  label={t('demo.b15.lessons.label_focus')}
                  value={focus}
                  onChange={setFocus}
                  options={[...FOCUSES]}
                />
              </div>
              {availableSections.length > 0 && (
                <div className="sm:col-span-2">
                  <FormSelect
                    label={t('demo.b15.lessons.label_section')}
                    value={specificSection}
                    onChange={setSpecificSection}
                    options={["Any / Teacher's choice", ...availableSections]}
                  />
                </div>
              )}
            </div>
            <button
              onClick={handleGenerate}
              className="mt-8 w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3.5 px-6 transition-colors text-sm"
            >
              {t('demo.b15.lessons.generate_btn')}
            </button>
          </div>
        )}

        {/* Loading Animation */}
        {isGenerating && (
          <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse [animation-delay:150ms]" />
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse [animation-delay:300ms]" />
              </div>
              <span className="text-sm text-primary font-medium">
                {t('demo.b15.lessons.generating_label')}
              </span>
            </div>
            <div className="space-y-2 font-mono text-xs">
              {TYPING_LINES.slice(0, typingIndex).map((line, i) => (
                <div key={i} className="text-muted-foreground animate-fade-in">
                  <span className="text-primary/60 mr-2">&gt;</span>
                  {line}
                  {i === typingIndex - 1 && (
                    <span className="inline-block w-1.5 h-3.5 bg-primary ml-1 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Generated Lesson Plan */}
        {generatedPlan && (
          <>
            <div className="rounded-2xl border border-border/60 bg-card overflow-hidden mb-6">
              {/* Plan Header */}
              <div className="border-b border-border/60 bg-primary/5 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs uppercase tracking-wider text-primary font-medium">
                    {t('demo.b15.lessons.generated_label')}
                  </span>
                </div>
                <h2 className="text-2xl font-medium text-foreground mb-2">{generatedPlan.title}</h2>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="px-2.5 py-1 rounded-md bg-muted border border-border/60">
                    {generatedPlan.text}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-muted border border-border/60">
                    {generatedPlan.board}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-muted border border-border/60">
                    {generatedPlan.yearGroup}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-muted border border-border/60">
                    {generatedPlan.duration}
                  </span>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-6 space-y-8">
                <Section title={t('demo.b15.lessons.objectives')}>
                  <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground">
                    {generatedPlan.objectives.map((o, i) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ol>
                </Section>

                <Section title={t('demo.b15.lessons.success_criteria')}>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {generatedPlan.successCriteria.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5 shrink-0">--</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title={t('demo.b15.lessons.keywords')}>
                  <div className="flex flex-wrap gap-2">
                    {generatedPlan.keywords.map((k) => (
                      <span
                        key={k}
                        className="px-2.5 py-1 rounded-md bg-muted border border-border/60 text-xs text-muted-foreground"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </Section>

                <ActivityBlock
                  label={t('demo.b15.lessons.starter')}
                  activity={generatedPlan.starterActivity}
                  color="amber"
                />
                {generatedPlan.mainActivities.map((act, i) => (
                  <ActivityBlock
                    key={i}
                    label={`${t('demo.b15.lessons.main')} ${i + 1}`}
                    activity={act}
                    color="emerald"
                  />
                ))}
                <ActivityBlock
                  label={t('demo.b15.lessons.plenary')}
                  activity={generatedPlan.plenaryActivity}
                  color="violet"
                />

                {generatedPlan.homework && (
                  <Section title={t('demo.b15.lessons.homework')}>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {generatedPlan.homework}
                    </p>
                  </Section>
                )}

                <Section title={t('demo.b15.lessons.worksheet')}>
                  <div className="space-y-5">
                    {generatedPlan.worksheetQuestions.map((q, i) => (
                      <div key={i} className="rounded-lg border border-border/60 bg-card p-4">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <p className="text-sm text-foreground font-medium">
                            {i + 1}. {q.question}
                          </p>
                          {q.marks && (
                            <span className="shrink-0 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                              {q.marks} {t('demo.b15.lessons.marks_suffix')}
                            </span>
                          )}
                        </div>
                        {q.modelAnswer && (
                          <details className="mt-2">
                            <summary className="text-xs text-primary/70 cursor-pointer hover:text-primary transition-colors">
                              {t('demo.b15.lessons.show_model_answer')}
                            </summary>
                            <p className="mt-2 text-xs text-muted-foreground leading-relaxed pl-4 border-l border-primary/20">
                              {q.modelAnswer}
                            </p>
                          </details>
                        )}
                      </div>
                    ))}
                  </div>
                </Section>

                <Section title={t('demo.b15.lessons.teacher_notes')}>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {generatedPlan.teacherNotes.map((n, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-clay-600 dark:text-clay-400 mt-0.5 shrink-0 font-heading italic">
                          *
                        </span>
                        {n}
                      </li>
                    ))}
                  </ul>
                </Section>
              </div>
            </div>

            {/* Action Buttons -- wrapped in an error boundary so the whole
                lesson-builder page never disappears behind a "Something went
                wrong" screen if a download menu or generator misbehaves. */}
            <ErrorBoundary
              label="Download buttons unavailable"
              fallback={
                <div className="mb-10 rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-4 text-sm text-red-700 dark:text-red-300">
                  Download buttons couldn't load. Please refresh the page or use Copy to Clipboard
                  above.
                </div>
              }
            >
              <div className="flex flex-wrap gap-3 mb-10">
                <DownloadMenu
                  label={t('demo.b15.lessons.dl_lesson_plan')}
                  className="text-xs"
                  options={[
                    {
                      label: t('demo.b15.lessons.download_pdf'),
                      format: 'pdf',
                      onClick: handleDownloadPDF,
                    },
                    {
                      label: t('demo.b15.lessons.download_word'),
                      format: 'word',
                      onClick: handleDownloadWordLesson,
                    },
                    {
                      label: t('demo.b15.lessons.download_pptx'),
                      format: 'pptx',
                      onClick: handleDownloadPptx,
                    },
                  ]}
                />
                <DownloadMenu
                  label={t('demo.b15.lessons.dl_worksheet')}
                  variant="outline"
                  className="text-xs border-border/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  options={[
                    {
                      label: t('demo.b15.lessons.download_pdf'),
                      format: 'pdf',
                      onClick: handleDownloadWorksheet,
                    },
                    {
                      label: t('demo.b15.lessons.download_word'),
                      format: 'word',
                      onClick: handleDownloadWordWorksheet,
                    },
                  ]}
                />
                <ActionButton
                  onClick={handleCopy}
                  label={copied ? t('demo.b15.lessons.copied_btn') : t('demo.b15.lessons.copy_btn')}
                />
                <ActionButton
                  onClick={handleReset}
                  label={t('demo.b15.lessons.generate_another')}
                />
                <ActionButton
                  onClick={() => showToast('Available with full account')}
                  label={t('demo.b15.lessons.edit_btn')}
                />
              </div>
            </ErrorBoundary>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 text-center mb-10">
              <p className="text-lg text-foreground font-medium mb-2">
                {t('demo.b15.lessons.cta_title')}
              </p>
              <p className="text-muted-foreground text-sm mb-5">{t('demo.b15.lessons.cta_body')}</p>
              <button className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 transition-colors text-sm">
                {t('demo.b15.lessons.cta_btn')}
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function FormSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border/60 bg-muted px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-muted text-foreground">
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">
        {title}
      </h3>
      {children}
    </div>
  )
}

function ActivityBlock({
  label,
  activity,
  color,
}: {
  label: string
  activity: LessonActivity
  color: 'amber' | 'emerald' | 'violet'
}) {
  const t = useT()
  const styles = {
    amber: {
      border: 'border-clay-500/20',
      bg: 'bg-clay-500/5',
      text: 'text-clay-600 dark:text-clay-400',
    },
    emerald: { border: 'border-primary/20', bg: 'bg-primary/5', text: 'text-primary' },
    violet: { border: 'border-primary/20', bg: 'bg-primary/5', text: 'text-primary' },
  }[color]

  return (
    <div className={`rounded-xl border ${styles.border} ${styles.bg} p-5`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs uppercase tracking-wider ${styles.text} font-medium`}>
          {label}
        </span>
        <span className="text-xs text-muted-foreground">{activity.duration}</span>
      </div>
      <h4 className="text-sm font-medium text-foreground mb-2">{activity.title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{activity.instructions}</p>
      {activity.differentiation && (
        <div className="space-y-2 mt-4">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            {t('demo.b15.lessons.differentiation')}
          </p>
          <DiffTier tier="Support" text={activity.differentiation.support} />
          <DiffTier tier="Core" text={activity.differentiation.core} />
          <DiffTier tier="Stretch" text={activity.differentiation.stretch} />
        </div>
      )}
      {activity.resources && activity.resources.length > 0 && (
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1.5">
            {t('demo.b15.lessons.resources')}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {activity.resources.map((r) => (
              <span
                key={r}
                className="px-2 py-0.5 rounded text-xs text-muted-foreground bg-muted border border-border/60"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function DiffTier({ tier, text }: { tier: string; text: string }) {
  const color =
    tier === 'Support'
      ? 'text-primary'
      : tier === 'Core'
        ? 'text-muted-foreground'
        : 'text-clay-600 dark:text-clay-400'
  return (
    <div className="flex items-start gap-2 text-xs">
      <span className={`shrink-0 font-medium ${color} w-14`}>{tier}</span>
      <span className="text-muted-foreground">{text}</span>
    </div>
  )
}

function ActionButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-border/60 bg-card hover:bg-muted text-muted-foreground hover:text-foreground text-xs font-medium py-2.5 px-3 transition-colors"
    >
      {label}
    </button>
  )
}
