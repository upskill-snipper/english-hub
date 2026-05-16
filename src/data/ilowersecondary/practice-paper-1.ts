/**
 * ORIGINAL PRACTICE PAPER 1 — theme: "Survival"
 *
 * Modelled exactly on the Pearson Edexcel International Award in Lower
 * Secondary English achievement test LEH11/01 (structure only). EVERY
 * source text below is a 100% ORIGINAL work written by The English Hub.
 * No past-paper text, novel or website has been reproduced or adapted.
 *
 * Factual content in the two non-fiction texts is limited to
 * well-known, verifiable biology (Text 1) or a clearly fictional,
 * invented charity scenario (Text 2). Text 3 is original fiction.
 *
 * Qualification facts, AO codes and mark grids are NOT restated here —
 * the consumer page imports them from '@/lib/ilowersecondary/spec'.
 */

import type { AOKey } from '@/lib/ilowersecondary/spec'

// ─── Types ────────────────────────────────────────────────────────────

export interface SourceText {
  id: 1 | 2 | 3
  label: string
  kind: 'non-fiction' | 'fiction'
  textType: string
  purpose: string
  title: string
  /** Each entry is a numbered paragraph, mirroring the Source Booklet. */
  paragraphs: string[]
  byline?: string
}

export interface PaperQuestion {
  number: string
  /** Maps to a QUESTION_TYPES id in spec.ts. */
  typeId: string
  ao: AOKey | string
  marks: number
  /** The instruction shown to the student. */
  prompt: string
  /** Optional fixed options for closed questions. */
  options?: string[]
  /** Optional tick-table rows for the feature question. */
  tickRows?: { feature: string; answer: string }[]
  /** Mark-scheme guidance in Pearson style. */
  markScheme: {
    /** Indicative answer / acceptable responses. */
    answer?: string
    /** Award notes (how the marks are split). */
    notes?: string
    /** Levelled grid reference for extended items. */
    levelled?: 'comparison' | 'writing'
  }
}

export interface PracticePaper {
  code: string
  modelledOn: string
  theme: string
  totalMarks: number
  durationLabel: string
  sections: {
    a: { name: string; marks: number; instruction: string }
    b: { name: string; marks: number; instruction: string }
  }
  instructions: string[]
  texts: SourceText[]
  sectionA: PaperQuestion[]
  sectionB: {
    number: string
    typeId: string
    ao: string
    marks: number
    context: string
    task: string
    bullets: string[]
    markScheme: {
      wao1Indicative: string
      wao2Indicative: string
    }
  }
}

// ─── The paper ────────────────────────────────────────────────────────

export const PRACTICE_PAPER_1: PracticePaper = {
  code: 'Practice Paper 1',
  modelledOn: 'LEH11/01',
  theme: 'Survival',
  totalMarks: 70,
  durationLabel: '1 hour 45 minutes',
  sections: {
    a: {
      name: 'Section A: Reading',
      marks: 40,
      instruction:
        'Answer ALL questions. Read the three texts in the Source Booklet first. The texts are linked by the theme of survival.',
    },
    b: {
      name: 'Section B: Writing',
      marks: 30,
      instruction:
        'Answer the ONE question in this section. You should spend about 35 minutes on it.',
    },
  },
  instructions: [
    'Use black ink or black ball-point pen.',
    'Answer ALL questions in Section A and the ONE question in Section B.',
    'Answer the questions in the spaces provided — there may be more space than you need.',
    'Dictionaries may NOT be used in this examination.',
    'The total mark for this paper is 70. The marks for each question are shown in brackets.',
    'Read each question carefully before you start to answer it. Check your answers if you have time at the end.',
  ],

  // ─── Source Booklet — three original texts ────────────────────────
  texts: [
    {
      id: 1,
      label: 'Text 1',
      kind: 'non-fiction',
      textType: 'magazine article (explanatory)',
      purpose: 'inform / explain',
      title: 'How Desert Animals Beat the Heat',
      byline: 'An explanatory article written for The English Hub',
      paragraphs: [
        'A desert is one of the harshest places an animal can call home. By day the sand can grow hot enough to blister skin, and for weeks at a time no rain falls at all. Yet deserts are far from empty. They are crowded with creatures that have, over many thousands of years, evolved a remarkable set of tricks for staying alive where most animals would quickly die.',
        'The first problem is the heat. Many small desert animals simply refuse to meet it. The kangaroo rat, a tiny rodent of North American deserts, spends the burning daylight hours sealed inside a cool underground burrow and comes out only after dark. Animals that are active at night rather than during the day are called nocturnal, and in the desert this single habit saves countless lives.',
        'The second problem is water — or the lack of it. The kangaroo rat almost never drinks. Astonishingly, it can manufacture the water its body needs from the dry seeds it eats, and its kidneys are so efficient that its urine is thick and concentrated, wasting hardly a drop. The fennec fox, with its enormous ears, has a different solution: those ears are packed with blood vessels that release heat into the air, working rather like a radiator to cool the animal down.',
        'Larger animals cannot hide in a burrow, so they manage heat in other ways. The camel is the most famous desert survivor of all, and almost everything people believe about it is slightly wrong. Its hump does not store water; it stores fat, which the camel breaks down for energy when food is scarce. A camel can also let its body temperature rise during the day instead of sweating, and it can drink a vast quantity of water in minutes when it finally finds a source.',
        'Even plants take part in this struggle. The roots of a desert cactus spread out in a wide, shallow net just beneath the surface, ready to drink in any brief shower before the sun steals it back. Its thick stem swells with stored water, and its leaves have shrunk into spines that lose almost no moisture and keep thirsty animals away.',
        'None of these creatures chose its tools. Each is the result of a long, slow process in which the individuals best suited to the desert survived and passed on their advantages. The desert, in other words, did not defeat life. It shaped it.',
      ],
    },
    {
      id: 2,
      label: 'Text 2',
      kind: 'non-fiction',
      textType: 'charity appeal (persuasive)',
      purpose: 'persuade / argue',
      title: 'They Cannot Ask You for Help. So We Are Asking for Them.',
      byline: 'A fund-raising appeal from the (fictional) DryLands Wildlife Trust',
      paragraphs: [
        'Right now, somewhere in a shrinking desert, a fennec fox is digging deeper than its parents ever had to. The waterhole its family relied on for generations dried up two summers ago. It does not understand why. It only knows that it is thirsty, and that the land it was born to survive is changing faster than survival can keep up.',
        'At the DryLands Wildlife Trust we refuse to watch and do nothing. For fifteen years our teams have walked these vanishing landscapes, mapping the last safe burrows, repairing the ancient wells that desert herders and wild animals once shared, and teaching local children that the creatures around them are not pests but neighbours worth protecting.',
        'But we cannot do it alone. Can you imagine a desert with no foxes in it? No tracks in the cool morning sand? A silence where there should be life? That is the future we are racing to prevent — and we are running out of time.',
        'Just twelve pounds — the price of a cinema ticket and a drink — can fund a week of clean, refilled water for an entire colony. Thirty pounds can train a young ranger who will protect that colony for a lifetime. Your money does not disappear into an office. It goes straight back into the sand, where it is needed.',
        'These animals survived ten thousand years of heat, drought and predators. The one thing they cannot survive is being forgotten. They cannot ask you for help. So we are asking for them. Please give what you can today — before the last waterhole runs dry.',
      ],
    },
    {
      id: 3,
      label: 'Text 3',
      kind: 'fiction',
      textType: 'adventure narrative (first person)',
      purpose: 'entertain / describe',
      title: 'The Long Walk Back',
      byline: 'An original short story written for The English Hub',
      paragraphs: [
        'The jeep had stopped two hours ago and it was not going to start again. Maya had checked everything her uncle had shown her — the wires, the fuel, the small black box under the seat — and the engine had answered with the same dead click every time. Now she stood in the enormous silence of the desert and made herself think.',
        'Don’t panic. Panic uses water. She could almost hear her uncle saying it. She had one bottle, half full, warm as bathwater. The town was somewhere to the east, behind the low hills that wobbled in the heat. She had watched the sun all morning; she knew which way east was. That, at least, was something.',
        'She did not walk in the open. She had read enough to know better. Instead she followed the thin shadow of a dry riverbed, moving in the early morning and resting under an overhang of rock while the worst of the day burned itself out above her. The stillness was not empty. A lizard watched her from a stone, perfectly calm, as if to say: this is simple, you only have to want it enough.',
        'By the second morning her lips had cracked and her thoughts had begun to drift like loose sand. She caught herself walking west and stopped, shaking. She tipped the last warm mouthful of water onto her tongue and let it sit there a long time before she swallowed. Then she did the only thing left to do, which was to keep going.',
        'She almost missed the fence. It was just three strands of grey wire, half buried, but a fence meant a person, and a person meant water. Maya put one hand on the warm wire and laughed — a small, broken, astonished sound — and the desert, which had not cared either way, let her pass.',
      ],
    },
  ],

  // ─── Section A: Reading (40 marks) ────────────────────────────────
  sectionA: [
    {
      number: '1',
      typeId: 'synonym-select',
      ao: 'RAO4',
      marks: 1,
      prompt:
        'In Text 1, paragraph 1, the writer uses the word “harshest”. Circle ONE word below that is closest in meaning to “harshest” as it is used here.',
      options: ['gentlest', 'cruellest', 'emptiest', 'driest'],
      markScheme: {
        answer: 'cruellest',
        notes: 'Award 1 mark for “cruellest” only. Do not credit more than one circled word.',
      },
    },
    {
      number: '2',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt:
        'From Text 1, give ONE reason why the kangaroo rat stays in its burrow during the day.',
      markScheme: {
        answer:
          'To escape / avoid the burning daylight heat (it is nocturnal and comes out only after dark). Accept any clear reference to avoiding the heat of the day.',
        notes: '1 mark for a precise reason. Do not credit a vague gist such as “to be safe”.',
      },
    },
    {
      number: '3',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 2,
      prompt: 'From Text 1, give TWO ways the camel is suited to surviving in the desert.',
      markScheme: {
        answer:
          'Any two of: its hump stores fat for energy when food is scarce; it can let its body temperature rise instead of sweating (saving water); it can drink a large amount of water very quickly when it finds a source.',
        notes: '1 mark for each correct way, up to 2 marks.',
      },
    },
    {
      number: '4',
      typeId: 'multiple-choice',
      ao: 'RAO2/RAO4',
      marks: 1,
      prompt:
        'In Text 1 the writer says the fennec fox’s ears work “rather like a radiator”. Put a cross in ONE box to show what this comparison suggests.',
      options: [
        'A — the ears make a loud noise',
        'B — the ears help the fox to hear danger',
        'C — the ears release heat to cool the fox',
        'D — the ears keep the fox warm at night',
      ],
      markScheme: {
        answer: 'C — the ears release heat to cool the fox',
        notes: '1 mark for C only.',
      },
    },
    {
      number: '5',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 1, why does the writer say that “almost everything people believe about” the camel “is slightly wrong”?',
      markScheme: {
        answer:
          'Because a common belief — that the hump stores water — is untrue; the hump actually stores fat. Accept any answer showing the reader’s assumption is mistaken.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '6',
      typeId: 'underline-word-class',
      ao: 'RAO3/RAO4',
      marks: 1,
      prompt:
        'In this sentence from Text 1, underline the VERB: “Its thick stem swells with stored water.”',
      markScheme: {
        answer: '“swells”',
        notes:
          '1 mark for clearly identifying “swells”. Any clear positive indication (underline, circle) is accepted.',
      },
    },
    {
      number: '7',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In the final paragraph of Text 1 the writer says: “The desert, in other words, did not defeat life. It shaped it.” What did the writer mean by this, and what is its effect on the reader?',
      markScheme: {
        answer:
          'Meaning: rather than killing off animals, the harsh desert forced them, through evolution, to develop the very adaptations that let them survive there. Effect: ends the article on a thoughtful, almost uplifting note; reframes the desert as a creative force, leaving the reader impressed by life’s resilience.',
        notes:
          '1 mark for explaining the meaning; 1 mark for the effect on the reader. Do not credit an unexplained lift of the quotation.',
      },
    },
    {
      number: '8',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 2, what does the DryLands Wildlife Trust say twelve pounds can pay for?',
      markScheme: {
        answer: 'A week of clean, refilled water for an entire colony (of foxes).',
        notes: '1 mark for the precise detail.',
      },
    },
    {
      number: '9',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 2 the writer says the fennec fox “does not understand why” its waterhole dried up. Why has the writer included this idea?',
      markScheme: {
        answer:
          'To make the animal seem helpless and innocent so the reader feels sympathy and is moved to help / donate.',
        notes: '1 mark for a clear inference about the persuasive intention or emotional effect.',
      },
    },
    {
      number: '10',
      typeId: 'punctuation-effect',
      ao: 'RAO3',
      marks: 2,
      prompt:
        'In Text 2, paragraph 3, the writer uses a series of question marks: “Can you imagine a desert with no foxes in it? No tracks in the cool morning sand? A silence where there should be life?” Explain the effect of these question marks.',
      markScheme: {
        answer:
          'Effect: the rhetorical questions force the reader to picture the loss for themselves and to feel personally involved / responsible. Linked explanation: stacking three questions builds emotional pressure and urgency, pushing the reader towards donating.',
        notes:
          '1 mark for naming the effect of the question marks (e.g. they make the reader think / involve the reader). 1 mark for an explanation linked to the text content.',
      },
    },
    {
      number: '11',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In Text 2 the writer states: “Your money does not disappear into an office. It goes straight back into the sand, where it is needed.” What is the writer’s purpose here, and how does this affect the reader?',
      markScheme: {
        answer:
          'Purpose: to reassure the reader that donations are spent directly on the animals, removing a common objection (that charity money is wasted on administration). Effect: builds trust and makes the reader more willing to give.',
        notes: '1 mark for the writer’s purpose; 1 mark for the effect on the reader.',
      },
    },
    {
      number: '12',
      typeId: 'underline-word-class',
      ao: 'RAO3/RAO4',
      marks: 1,
      prompt:
        'In this sentence from Text 2, underline the IMPERATIVE verb: “Please give what you can today.”',
      markScheme: {
        answer: '“give”',
        notes: '1 mark for identifying “give”. Any clear positive indication is accepted.',
      },
    },
    {
      number: '13',
      typeId: 'feature-tick-table',
      ao: 'RAO3',
      marks: 2,
      prompt:
        'Tick ONE box in each row to show which text uses each feature. (Text 1 is the desert-animals article; Text 2 is the charity appeal.)',
      tickRows: [
        { feature: 'A direct address to the reader using “you”', answer: 'Text 2' },
        { feature: 'Subheadings or numbered lists', answer: 'Neither' },
        { feature: 'Rhetorical questions to involve the reader', answer: 'Text 2' },
        {
          feature: 'Factual scientific explanation of how an animal’s body works',
          answer: 'Text 1',
        },
      ],
      markScheme: {
        answer:
          'Row 1 — Text 2; Row 2 — Neither (accept “Neither/Both” reasoning that neither uses them); Row 3 — Text 2; Row 4 — Text 1.',
        notes:
          '2 marks for all four rows correct; 1 mark for two or three rows correct; 0 marks for one or none correct.',
      },
    },
    {
      number: '14',
      typeId: 'language-structure-analysis',
      ao: 'RAO4 + RAO5',
      marks: 4,
      prompt:
        'How does the writer of Text 2 use language to persuade the reader to donate? Make TWO developed points, each supported with evidence from the text.',
      markScheme: {
        answer:
          'Indicative content (any two developed points): (1) emotive personification — the fox “digging deeper than its parents ever had to” and being “forgotten” makes the animal feel like a vulnerable individual, stirring guilt and pity; (2) the small, relatable cost comparison — “the price of a cinema ticket and a drink” makes donating feel easy and almost selfish to refuse; (3) the urgent time pressure — “running out of time”, “before the last waterhole runs dry” pushes immediate action; (4) the contrast “not pests but neighbours” reframes the animals to win the reader’s sympathy.',
        notes:
          'Up to 2 marks per developed point: 1 mark for an appropriate point with evidence, 1 mark for explaining the effect on the reader. Maximum 4 marks.',
      },
    },
    {
      number: '15',
      typeId: 'comparison-6-mark',
      ao: 'RAO2 + RAO4 + RAO5',
      marks: 6,
      prompt:
        'Compare how the writer of Text 1 uses the quotation “The desert, in other words, did not defeat life. It shaped it.” and how the writer of Text 2 uses the quotation “The one thing they cannot survive is being forgotten.” to reflect each writer’s purpose. In your answer you should comment on the writers’ use of language and the effect on the reader.',
      markScheme: {
        levelled: 'comparison',
        answer:
          'Indicative comparison: Text 1’s writer uses the calm, balanced contrast of “defeat” and “shaped” to imply that hardship is creative, not destructive — the verb “shaped” casts the desert almost as a sculptor, reflecting an explanatory, optimistic purpose that leaves the reader admiring nature. By contrast, Text 2’s writer uses the abstract noun “forgotten” to imply that the real threat is human indifference, not the desert itself; this reflects a persuasive purpose designed to make the reader feel personally responsible and moved to act. Where Text 1 positions the reader as an impressed observer, Text 2 positions them as someone whose inaction has consequences.',
        notes:
          'Mark using the levelled comparison grid (COMPARISON_LEVELS). Top level: a clear explanation of the contrast that infers beyond the literal words, comments on language at word level, and identifies each writer’s purpose and effect on the reader.',
      },
    },
    {
      number: '16',
      typeId: 'which-text-appealing',
      ao: 'RAO4 + RAO5',
      marks: 2,
      prompt:
        'Which of the two non-fiction texts (Text 1 or Text 2) do you find more appealing to read, and why? Support your answer with evidence from the text you choose.',
      markScheme: {
        answer:
          'Accept either text. Reward a reasonable explanation of preference (e.g. Text 1 is appealing because it teaches surprising facts such as the camel’s hump storing fat; Text 2 is appealing because its emotive language and direct questions make the reader care).',
        notes:
          '1 mark for a reasonable explanation of preference; 1 mark for appropriate supporting evidence from the chosen text.',
      },
    },
    {
      number: '17',
      typeId: 'synonym-select',
      ao: 'RAO4',
      marks: 1,
      prompt:
        'In Text 3, paragraph 1, the writer describes “the enormous silence of the desert”. Circle ONE word below that is closest in meaning to “enormous” as it is used here.',
      options: ['vast', 'noisy', 'narrow', 'brief'],
      markScheme: {
        answer: 'vast',
        notes: '1 mark for “vast” only.',
      },
    },
    {
      number: '18',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 3, how does Maya know which direction is east?',
      markScheme: {
        answer:
          'She had watched the sun all morning. Accept any reference to using the sun’s position.',
        notes: '1 mark for the precise detail.',
      },
    },
    {
      number: '19',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt: 'In Text 3, why does Maya stop and shake when she catches herself “walking west”?',
      markScheme: {
        answer:
          'She realises she has been heading the wrong way (away from the town/safety), which frightens her because it means she is becoming confused and is in danger.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '20',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In the final sentence of Text 3 the writer says “the desert, which had not cared either way, let her pass.” What is the effect of describing the desert as not caring?',
      markScheme: {
        answer:
          'It presents the desert as vast and indifferent — survival was entirely down to Maya’s own effort, not luck or mercy. Effect: makes her achievement feel hard-won and emphasises how alone and small she was, leaving the reader relieved and impressed.',
        notes:
          '1 mark for explaining the meaning of the indifferent desert; 1 mark for the effect on the reader.',
      },
    },
    {
      number: '21',
      typeId: 'language-structure-analysis',
      ao: 'RAO4 + RAO5',
      marks: 4,
      prompt:
        'How does the writer of Text 3 use language and structure to show that Maya is in danger but determined to survive? Make TWO developed points, each supported with evidence.',
      markScheme: {
        answer:
          'Indicative content (any two developed points): (1) the short, blunt sentence “Don’t panic. Panic uses water.” mirrors her disciplined thinking and conveys controlled fear; (2) sensory detail of her body failing — “her lips had cracked and her thoughts had begun to drift like loose sand” — shows the physical danger and her slipping focus; (3) the structural turn at “Then she did the only thing left to do, which was to keep going” shows grim determination; (4) the simile “drift like loose sand” links her mind to the hostile setting, deepening the sense of threat.',
        notes:
          'Up to 2 marks per developed point: 1 mark for a point with appropriate evidence, 1 mark for explaining the effect. Maximum 4 marks.',
      },
    },
    {
      number: '22',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 3, the lizard seems to say to Maya: “this is simple, you only have to want it enough.” What does the writer suggest about survival through this idea?',
      markScheme: {
        answer:
          'That survival depends on willpower and determination — the will to keep going — rather than on luck or strength alone.',
        notes:
          '1 mark for a clear inference about determination / willpower being the key to survival.',
      },
    },
  ],

  // ─── Section B: Writing (30 marks) ────────────────────────────────
  sectionB: {
    number: '23',
    typeId: 'writing-task',
    ao: 'WAO1 + WAO2',
    marks: 30,
    context:
      'The texts in Section A all explore the theme of survival — surviving a harsh environment, protecting creatures that are struggling to survive, and one person’s struggle to survive alone.',
    task: 'Write the opening of an adventure story in which a character has to survive after becoming lost or stranded somewhere dangerous.',
    bullets: [
      'Write to entertain a reader of your own age.',
      'Use the form and conventions of narrative writing (an engaging opening, a clear sense of place, a character the reader cares about).',
      'Organise your writing into clear, linked paragraphs.',
      'Use a range of sentence types and openings, accurate punctuation and ambitious vocabulary for effect.',
    ],
    markScheme: {
      wao1Indicative:
        'Reward (against the WAO1 grid, 18 marks): a strong narrative form with an engaging hook; a vivid, controlled sense of a dangerous setting; a character whose situation creates tension and engages the reader; deliberate structural choices (e.g. a build of tension, a turning point, a controlled ending or cliff-hanger); writing fully appropriate to the audience and purpose (entertain). Higher marks for sophisticated audience awareness and stylistic features that fully support purpose.',
      wao2Indicative:
        'Reward (against the WAO2 grid, 12 marks): a range of sentence structures and openings used for effect; accurate and increasingly sophisticated punctuation (including commas, dashes, speech marks where used); largely accurate spelling with ambitious vocabulary choices used appropriately and confidently. Penalise frequent errors that impede meaning.',
    },
  },
}

// Convenience totals (computed, so they cannot drift from the data).
export const SECTION_A_MARKS = PRACTICE_PAPER_1.sectionA.reduce((sum, q) => sum + q.marks, 0)
export const SECTION_A_QUESTION_COUNT = PRACTICE_PAPER_1.sectionA.length
