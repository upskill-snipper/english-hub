/**
 * ORIGINAL PRACTICE PAPER 2 — theme: "Journeys"
 *
 * Modelled exactly on the Pearson Edexcel International Award in Lower
 * Secondary English achievement test LEH11/01 (structure only). EVERY
 * source text below is a 100% ORIGINAL work written by The English Hub.
 * No past-paper text, novel or website has been reproduced or adapted.
 *
 * Factual content in the two non-fiction texts is limited to
 * well-known, verifiable biology (Text 1) or a clearly fictional,
 * invented charity / expedition scenario (Text 2). Text 3 is original
 * fiction.
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

export const PRACTICE_PAPER_2: PracticePaper = {
  code: 'Practice Paper 2',
  modelledOn: 'LEH11/01',
  theme: 'Journeys',
  totalMarks: 70,
  durationLabel: '1 hour 45 minutes',
  sections: {
    a: {
      name: 'Section A: Reading',
      marks: 40,
      instruction:
        'Answer ALL questions. Read the three texts in the Source Booklet first. The texts are linked by the theme of journeys.',
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
      title: 'How Migrating Birds Find Their Way',
      byline: 'An explanatory article written for The English Hub',
      paragraphs: [
        'Every autumn, billions of birds set out on one of the most extraordinary journeys in nature. Some travel only a few hundred miles; others cross whole oceans and continents. The Arctic tern makes perhaps the longest journey of any animal, flying from the far north to the far south and back again each year. What is truly remarkable is not the distance, but the fact that the birds almost never get lost.',
        'A migrating bird has no map and no signpost, yet it carries several different navigation tools at once. The first is the sun. During the day many birds keep a steady direction by noting where the sun sits in the sky and how its position shifts hour by hour. They have, in effect, an internal clock that tells them how to read it.',
        'At night the sun is gone, so birds switch to the stars. Young birds raised in a planetarium have been shown to learn the pattern of the night sky, fixing on the point around which the stars appear to turn. Once a bird knows where that fixed point is, it always knows which way is north, even on the darkest night.',
        'Perhaps the strangest tool of all is the Earth itself. Our planet behaves like an enormous, weak magnet, and many birds can sense this magnetic field. It works rather like a compass that is always switched on, giving the bird a reliable sense of direction when the sky is hidden by cloud and neither sun nor stars can be seen.',
        'Birds also remember the land beneath them. Coastlines, mountain ranges and great rivers act as landmarks, and an older bird that has made the journey before can recall these features and follow them like a familiar road. Smell, too, may play a part: some seabirds appear to recognise the particular scent of the patch of ocean where they were born.',
        'No single tool would be enough on its own. The wonder of migration is that the bird weaves all of them together, checking one against another, correcting its course mile after mile. The journey is not luck. It is the result of millions of years in which only the birds that could find their way ever arrived to raise the next generation.',
      ],
    },
    {
      id: 2,
      label: 'Text 2',
      kind: 'non-fiction',
      textType: 'charity appeal (persuasive recount)',
      purpose: 'persuade / argue',
      title: 'I Walked 1,000 Miles. Now I Am Asking You to Take One Step.',
      byline: 'A fund-raising appeal by Priya Anand for the (fictional) Open Road Trust',
      paragraphs: [
        'My name is Priya Anand, and last spring I walked one thousand miles, alone, along an old mountain road. My feet blistered on the first day and never quite stopped hurting. But I was lucky: I had chosen my journey. The children I walked for did not choose theirs.',
        'I made the walk for the Open Road Trust, the charity I helped to found six years ago. Across the valley I crossed, thousands of children walk for two or three hours every morning simply to reach a classroom — and the same distance home again in the dark. By the time they sit down to learn, they are already exhausted. Many give up. Their journey defeats them before their education has even begun.',
        'Can you picture that walk? A nine-year-old with no shoes, a heavy bag, a road that floods in the rain? I met children who had never once been late, because being late meant being turned away. Their determination shamed every complaint I had ever made about a delayed train.',
        'This is where you come in. Just fifteen pounds — less than many of us spend on a single takeaway — pays for a sturdy pair of walking boots that will last a child two years. Forty pounds funds a safe bicycle that turns a three-hour walk into a twenty-minute ride. Every penny travels straight to the road, never to an office desk.',
        'I have finished my journey. Theirs continues every single morning, whether we help or not. I cannot walk it for them. But together we can make their road shorter, safer and kinder. Please give what you can today, and take one small step alongside them.',
      ],
    },
    {
      id: 3,
      label: 'Text 3',
      kind: 'fiction',
      textType: 'adventure narrative (third person)',
      purpose: 'entertain / describe',
      title: 'The Last Train Out',
      byline: 'An original short story written for The English Hub',
      paragraphs: [
        'The platform was already moving when Daniel reached it — not the train, but the crowd, a single nervous animal pressing towards the open doors. He gripped his sister’s hand so hard she gasped. Eight years old and barely past his elbow, Lena had been told only that they were going to stay with their aunt. She did not yet understand that they would not be coming back.',
        'There were no seats. Daniel wedged Lena into a corner by the window and stood over her like a fence, his back to the carriage, taking the weight of every shove. The train did not move. Minutes stretched and folded. Somewhere down the line a whistle screamed and was answered by another, closer, until the floor beneath them shuddered and the station began, at last, to slide away.',
        'For an hour the country unspooled past the glass: flooded fields, a burned barn, a road with no cars on it at all. Lena pressed her nose to the window and narrated what she saw in a small steady voice, as if naming things could keep them ordinary. Daniel let her. He was counting — stops, hours, the folded notes sewn into his collar — and trying not to think about the platform they had left, or the two faces that had not been able to come with them.',
        'At the third halt the train sat in darkness for a long time. A man moved through the carriage asking quiet questions, and Daniel felt his heart climb into his throat; but the man looked at the sleeping child, at the boy standing guard with his jaw set, and moved on without a word. Daniel did not let his breath out until the wheels turned again.',
        'When grey light finally edged the sky, Lena woke and asked if they were nearly there. Daniel had no idea. He did not know the name of the next town or how far the rails still ran. But he smoothed her hair, looked out at a horizon that was, for the first time, getting lighter instead of darker, and told her yes — almost. It was the first lie of the journey, and he told it gently, the way you carry something that might break.',
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
        'In Text 1, paragraph 1, the writer describes “one of the most extraordinary journeys in nature”. Circle ONE word below that is closest in meaning to “extraordinary” as it is used here.',
      options: ['ordinary', 'remarkable', 'dangerous', 'brief'],
      markScheme: {
        answer: 'remarkable',
        notes: 'Award 1 mark for “remarkable” only. Do not credit more than one circled word.',
      },
    },
    {
      number: '2',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 1, which bird is said to make perhaps the longest journey of any animal?',
      markScheme: {
        answer: 'The Arctic tern.',
        notes: '1 mark for “the Arctic tern”. Do not credit a vague answer such as “a seabird”.',
      },
    },
    {
      number: '3',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 2,
      prompt: 'From Text 1, give TWO different tools a migrating bird uses to find its way.',
      markScheme: {
        answer:
          'Any two of: the position of the sun; the pattern of the stars / the fixed point the stars turn around; the Earth’s magnetic field; landmarks such as coastlines, mountains and rivers; smell / the scent of the ocean where it was born.',
        notes: '1 mark for each correct tool, up to 2 marks.',
      },
    },
    {
      number: '4',
      typeId: 'multiple-choice',
      ao: 'RAO2/RAO4',
      marks: 1,
      prompt:
        'In Text 1 the writer says the Earth’s magnetic field works “rather like a compass that is always switched on”. Put a cross in ONE box to show what this comparison suggests.',
      options: [
        'A — the bird can only navigate at night',
        'B — the bird always has a sense of direction, even without sun or stars',
        'C — the bird becomes lost in cloudy weather',
        'D — the bird must learn the stars before it can fly',
      ],
      markScheme: {
        answer: 'B — the bird always has a sense of direction, even without sun or stars',
        notes: '1 mark for B only.',
      },
    },
    {
      number: '5',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt: 'In Text 1, why does the writer say the journey of migrating birds “is not luck”?',
      markScheme: {
        answer:
          'Because the ability to navigate is the result of evolution over millions of years — only birds that could find their way survived to breed — so success is built in, not accidental.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '6',
      typeId: 'underline-word-class',
      ao: 'RAO3/RAO4',
      marks: 1,
      prompt:
        'In this sentence from Text 1, underline the VERB: “Every autumn, billions of birds set out on one of the most extraordinary journeys in nature.”',
      markScheme: {
        answer: '“set out” (accept “set”)',
        notes:
          '1 mark for clearly identifying “set out” or “set”. Any clear positive indication (underline, circle) is accepted.',
      },
    },
    {
      number: '7',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In the final paragraph of Text 1 the writer says: “The wonder of migration is that the bird weaves all of them together.” What did the writer mean by this, and what is its effect on the reader?',
      markScheme: {
        answer:
          'Meaning: the bird does not rely on one method but combines all its navigation tools, constantly checking one against another to stay on course. Effect: the verb “weaves” makes the process sound skilful and almost like craftsmanship, leaving the reader impressed and full of admiration for the bird.',
        notes:
          '1 mark for explaining the meaning; 1 mark for the effect on the reader. Do not credit an unexplained lift of the quotation.',
      },
    },
    {
      number: '8',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 2, what does Priya Anand say fifteen pounds can pay for?',
      markScheme: {
        answer: 'A sturdy pair of walking boots that will last a child two years.',
        notes: '1 mark for the precise detail.',
      },
    },
    {
      number: '9',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 2 the writer says she was “lucky” because she “had chosen” her journey. Why has the writer included this idea?',
      markScheme: {
        answer:
          'To contrast her free choice with the children’s lack of choice, making the reader feel the children’s situation is unfair and deserving of help.',
        notes: '1 mark for a clear inference about the persuasive contrast or emotional effect.',
      },
    },
    {
      number: '10',
      typeId: 'punctuation-effect',
      ao: 'RAO3',
      marks: 2,
      prompt:
        'In Text 2, paragraph 3, the writer uses a question mark: “Can you picture that walk? A nine-year-old with no shoes, a heavy bag, a road that floods in the rain?” Explain the effect of these question marks.',
      markScheme: {
        answer:
          'Effect: the rhetorical questions force the reader to imagine the child’s journey for themselves and feel personally involved. Linked explanation: the second question piles up vivid details, deepening sympathy and pushing the reader towards donating.',
        notes:
          '1 mark for naming the effect of the question marks (e.g. they make the reader picture the scene / involve the reader). 1 mark for an explanation linked to the text content.',
      },
    },
    {
      number: '11',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In Text 2 the writer states: “Every penny travels straight to the road, never to an office desk.” What is the writer’s purpose here, and how does this affect the reader?',
      markScheme: {
        answer:
          'Purpose: to reassure the reader that donations are spent directly on the children, removing the common objection that charity money is wasted on administration. Effect: builds trust and makes the reader more willing to give.',
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
        'Tick ONE box in each row to show which text uses each feature. (Text 1 is the migrating-birds article; Text 2 is the charity appeal.)',
      tickRows: [
        {
          feature: 'A first-person account of the writer’s own experience',
          answer: 'Text 2',
        },
        {
          feature: 'Subheadings or numbered lists',
          answer: 'Neither',
        },
        {
          feature: 'Rhetorical questions to involve the reader',
          answer: 'Text 2',
        },
        {
          feature: 'Factual scientific explanation of how an animal behaves',
          answer: 'Text 1',
        },
      ],
      markScheme: {
        answer: 'Row 1 — Text 2; Row 2 — Neither; Row 3 — Text 2; Row 4 — Text 1.',
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
          'Indicative content (any two developed points): (1) the personal recount — “My feet blistered on the first day and never quite stopped hurting” — builds the writer’s credibility and earns the reader’s respect; (2) the relatable cost comparison — “less than many of us spend on a single takeaway” — makes donating feel easy and almost selfish to refuse; (3) emotive contrast — “Their determination shamed every complaint I had ever made” — makes the reader feel grateful and guilty enough to act; (4) the closing call to “take one small step alongside them” turns donating into joining a shared journey, flattering the reader into helping.',
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
        'Compare how the writer of Text 1 uses the quotation “The journey is not luck.” and how the writer of Text 2 uses the quotation “I cannot walk it for them.” to reflect each writer’s purpose. In your answer you should comment on the writers’ use of language and the effect on the reader.',
      markScheme: {
        levelled: 'comparison',
        answer:
          'Indicative comparison: Text 1’s writer uses the short, certain statement “The journey is not luck” to dismiss chance and credit the bird’s inherited skill — the flat, factual tone reflects an explanatory purpose that leaves the reader admiring nature’s design. By contrast, Text 2’s writer uses the personal admission “I cannot walk it for them” to confess the limits of her own effort and hand responsibility to the reader; the honest, vulnerable tone reflects a persuasive purpose designed to make the reader feel they must act. Where Text 1 positions the reader as an impressed observer of a journey already mastered, Text 2 positions the reader as a necessary travelling companion in a journey not yet finished.',
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
          'Accept either text. Reward a reasonable explanation of preference (e.g. Text 1 is appealing because it reveals surprising facts such as birds sensing the Earth’s magnetic field; Text 2 is appealing because its first-person voice and emotive details make the reader care about the children).',
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
        'In Text 3, paragraph 1, the crowd is described as “a single nervous animal pressing towards the open doors”. Circle ONE word below that is closest in meaning to “pressing” as it is used here.',
      options: ['ironing', 'surging', 'pausing', 'whispering'],
      markScheme: {
        answer: 'surging',
        notes: '1 mark for “surging” only.',
      },
    },
    {
      number: '18',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 3, what had Lena been told about the journey?',
      markScheme: {
        answer:
          'Only that they were going to stay with their aunt. Accept any reference to staying with the aunt.',
        notes: '1 mark for the precise detail.',
      },
    },
    {
      number: '19',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 3, why does the man who is “asking quiet questions” move on “without a word”?',
      markScheme: {
        answer:
          'Because he is moved or persuaded by the sleeping child and the protective, determined boy, and chooses not to question or trouble them.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '20',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In the final paragraph of Text 3 the writer says Daniel told the lie “gently, the way you carry something that might break.” What is the effect of this comparison?',
      markScheme: {
        answer:
          'It compares the fragile lie to a delicate object, suggesting Daniel is protecting Lena’s hope and innocence with great care. Effect: it makes the reader feel tenderness and sympathy for both children and admire Daniel’s quiet courage.',
        notes:
          '1 mark for explaining the meaning of the comparison; 1 mark for the effect on the reader.',
      },
    },
    {
      number: '21',
      typeId: 'language-structure-analysis',
      ao: 'RAO4 + RAO5',
      marks: 4,
      prompt:
        'How does the writer of Text 3 use language and structure to show that Daniel feels responsible for Lena? Make TWO developed points, each supported with evidence.',
      markScheme: {
        answer:
          'Indicative content (any two developed points): (1) the protective image “stood over her like a fence, his back to the carriage, taking the weight of every shove” physically shows him shielding her; (2) the detail that he is “counting — stops, hours, the folded notes sewn into his collar” shows him carrying every burden of planning so she does not have to; (3) the structural contrast between Lena narrating the view in “a small steady voice” and Daniel “trying not to think” shows him hiding his fear to keep her calm; (4) the tender closing simile of carrying “something that might break” shows his care turning the lie into an act of love.',
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
        'In Text 3, the writer says the horizon was “for the first time, getting lighter instead of darker”. What does the writer suggest about the journey through this idea?',
      markScheme: {
        answer:
          'That the worst of the danger may be behind them and there is now hope — the lightening sky symbolises the possibility of safety and a better future.',
        notes: '1 mark for a clear inference about hope / the worst being over.',
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
      'The texts in Section A all explore the theme of journeys — the navigated journey of migrating birds, a journey walked to help children whose own journey to school is hard, and one difficult journey by train away from home.',
    task: 'Write the opening of a story in which a character sets out on a journey that does not go as planned.',
    bullets: [
      'Write to entertain a reader of your own age.',
      'Use the form and conventions of narrative writing (an engaging opening, a clear sense of place, a character the reader cares about).',
      'Organise your writing into clear, linked paragraphs.',
      'Use a range of sentence types and openings, accurate punctuation and ambitious vocabulary for effect.',
    ],
    markScheme: {
      wao1Indicative:
        'Reward (against the WAO1 grid, 18 marks): a strong narrative form with an engaging hook; a vivid, controlled sense of the journey and its setting; a character whose situation creates tension and engages the reader; deliberate structural choices (e.g. a build of tension as the journey goes wrong, a turning point, a controlled ending or cliff-hanger); writing fully appropriate to the audience and purpose (entertain). Higher marks for sophisticated audience awareness and stylistic features that fully support purpose.',
      wao2Indicative:
        'Reward (against the WAO2 grid, 12 marks): a range of sentence structures and openings used for effect; accurate and increasingly sophisticated punctuation (including commas, dashes, speech marks where used); largely accurate spelling with ambitious vocabulary choices used appropriately and confidently. Penalise frequent errors that impede meaning.',
    },
  },
}

// Convenience totals (computed, so they cannot drift from the data).
export const SECTION_A_MARKS = PRACTICE_PAPER_2.sectionA.reduce((sum, q) => sum + q.marks, 0)
export const SECTION_A_QUESTION_COUNT = PRACTICE_PAPER_2.sectionA.length
