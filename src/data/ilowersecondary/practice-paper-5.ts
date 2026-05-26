/**
 * ORIGINAL PRACTICE PAPER 5 - theme: "Change"
 *
 * Modelled exactly on the Pearson Edexcel International Award in Lower
 * Secondary English achievement test LEH11/01 (structure only). EVERY
 * source text below is a 100% ORIGINAL work written by The English Hub.
 * No past-paper text, novel or website has been reproduced or adapted.
 *
 * Factual content in the two non-fiction texts is limited to
 * well-known, verifiable biology (Text 1 - the metamorphosis of a
 * butterfly) or a clearly fictional, invented town scenario (Text 2 -
 * an opinion column about the made-up town of Marrowfield). Text 3 is
 * original fiction.
 *
 * Qualification facts, AO codes and mark grids are NOT restated here -
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

export const PRACTICE_PAPER_5: PracticePaper = {
  code: 'Practice Paper 5',
  modelledOn: 'LEH11/01',
  theme: 'Change',
  totalMarks: 70,
  durationLabel: '1 hour 45 minutes',
  sections: {
    a: {
      name: 'Section A: Reading',
      marks: 40,
      instruction:
        'Answer ALL questions. Read the three texts in the Source Booklet first. The texts are linked by the theme of change.',
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
    'Answer the questions in the spaces provided - there may be more space than you need.',
    'Dictionaries may NOT be used in this examination.',
    'The total mark for this paper is 70. The marks for each question are shown in brackets.',
    'Read each question carefully before you start to answer it. Check your answers if you have time at the end.',
  ],

  // ─── Source Booklet - three original texts on the theme of change ──
  texts: [
    {
      id: 1,
      label: 'Text 1',
      kind: 'non-fiction',
      textType: 'magazine article (explanatory)',
      purpose: 'inform / explain',
      title: 'How a Caterpillar Becomes a Butterfly',
      byline: 'An explanatory article written for The English Hub',
      paragraphs: [
        'Few changes in nature are as complete, or as strange, as the one a butterfly makes. The creature that ends the process can fly, drink nectar and travel for miles, yet it begins life as a soft, wingless caterpillar that does little but eat. The journey between these two bodies is called metamorphosis, and it is one of the most dramatic transformations any animal performs.',
        'It starts with hunger. A newly hatched caterpillar is, in effect, an eating machine. It chews through leaf after leaf, growing so quickly that its skin soon becomes too tight. Because that skin cannot stretch forever, the caterpillar moults: it splits the old covering and crawls out wearing a larger one underneath. A single caterpillar may moult several times before it is ready for the next stage.',
        'When it has eaten enough, the caterpillar stops feeding and finds a sheltered spot. There it forms a hard case called a chrysalis, sometimes known as a pupa. From the outside the chrysalis looks still, even lifeless. Inside, however, the most remarkable part of the change is taking place.',
        'Hidden in that quiet case, much of the caterpillar’s body breaks down into a kind of living soup. Out of this, small groups of cells that were there all along begin to build something entirely new: wings, long legs, and a coiled tongue for feeding. The animal is not simply growing up. It is, in a very real sense, being rebuilt.',
        'After a period that may last a week or many months, the case splits open and an adult butterfly climbs out. Its wings are crumpled and damp at first, so it must rest while it pumps fluid into them and lets them harden. Only then can it open them, lift off, and begin the part of its life everyone recognises.',
        'A butterfly does not abandon its old life so much as transform it. The same animal that crawled and chewed now flies and sips, carrying pollen between flowers as it goes. Change, in this case, is not an ending. It is the whole point.',
      ],
    },
    {
      id: 2,
      label: 'Text 2',
      kind: 'non-fiction',
      textType: 'newspaper opinion column (persuasive)',
      purpose: 'persuade / argue',
      title: 'Marrowfield Should Say Yes to the New Riverside Path',
      byline: 'An opinion column about the (fictional) town of Marrowfield',
      paragraphs: [
        'Next month the people of Marrowfield will be asked a simple question: should the old, fenced-off stretch of riverbank be turned into a public walking and cycling path? I have lived in this town for thirty years, and I believe the answer should be a confident yes.',
        'I understand why some neighbours are nervous. Change is uncomfortable, and the riverbank has looked the same for as long as most of us can remember. But "the same" is not the same as "good". That fence has kept families away from the water for a generation. It has kept children indoors when they could have been outdoors. Is that really the Marrowfield we want to protect?',
        'Picture the path on a Saturday morning. Picture older residents walking safely beside the river instead of along a narrow road. Picture children learning to ride a bicycle somewhere green rather than grey. Picture neighbours who have never spoken stopping to talk. None of that is happening behind a locked fence.',
        'The objections we hear most often do not survive a closer look. Some say the path will cost too much; in fact the council has set the money aside and no household will pay a penny more. Others worry about noise and litter, yet every town that has opened a riverside path has reported the opposite - cleaner banks, because people finally care for a place they are allowed to use.',
        'Towns that refuse to change do not stay the same; they slowly fade. Marrowfield has a chance to choose the braver path - quite literally. When the vote comes, please choose it. Our river has waited long enough, and so have we.',
      ],
    },
    {
      id: 3,
      label: 'Text 3',
      kind: 'fiction',
      textType: 'realistic narrative (third person)',
      purpose: 'entertain / describe',
      title: 'The Last Box',
      byline: 'An original short story written for The English Hub',
      paragraphs: [
        'The last box was the smallest, and Priya carried it down the stairs as if it might break. The house was empty now in a way it had never been before - no carpet to soften her footsteps, no pictures to tell her which wall was which. Her voice, when she tested it with a quiet "hello", came back to her as a stranger.',
        'She had not wanted any of this. Her parents had used careful words - "a fresh start", "a wonderful opportunity", "you will love it once you settle in" - but careful words, Priya had learned, were the ones adults used when they already knew you would not like the answer. Three hundred miles. A new school. A bedroom she had not chosen.',
        'In the doorway of what used to be her room she stopped. The walls still held faint pale rectangles where her posters had been, like the shadows of things rather than the things themselves. She pressed her palm flat against the cool plaster and, for a moment, refused to take it away.',
        'Her father called from the van, not unkindly, that it was time. Priya did not answer at once. She was looking at the small mark by the window where, years ago, she had stood against the wall while her grandmother drew a pencil line above her head and wrote the date beside it. The line was higher now than she remembered. She had grown into this house, and she was leaving it anyway.',
        'She closed the door softly, the way you close a door on someone who is sleeping. Outside, the morning was bright and ordinary and did not care that anything had ended. Priya climbed into the van, set the small box on her lap, and looked straight ahead - not because she was ready, but because the road only went one way, and she had decided she would rather meet it than be dragged.',
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
        'In Text 1, paragraph 1, the writer uses the word “dramatic”. Circle ONE word below that is closest in meaning to “dramatic” as it is used here.',
      options: ['quiet', 'striking', 'gentle', 'ordinary'],
      markScheme: {
        answer: 'striking',
        notes: 'Award 1 mark for “striking” only. Do not credit more than one circled word.',
      },
    },
    {
      number: '2',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 1, give ONE reason why a caterpillar moults its skin.',
      markScheme: {
        answer:
          'Because it grows so quickly that its skin becomes too tight and cannot stretch any further. Accept any clear reference to the skin being / becoming too tight as it grows.',
        notes: '1 mark for a precise reason. Do not credit a vague gist such as “to change”.',
      },
    },
    {
      number: '3',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 2,
      prompt:
        'From Text 1, give TWO new body parts that are built while the caterpillar is inside the chrysalis.',
      markScheme: {
        answer: 'Any two of: wings; long legs; a coiled tongue (for feeding).',
        notes: '1 mark for each correct part, up to 2 marks.',
      },
    },
    {
      number: '4',
      typeId: 'multiple-choice',
      ao: 'RAO2/RAO4',
      marks: 1,
      prompt:
        'In Text 1 the writer describes the inside of the chrysalis as “a kind of living soup”. Put a cross in ONE box to show what this comparison suggests.',
      options: [
        'A - the caterpillar is being cooked',
        'B - much of the body has broken down into a fluid state',
        'C - the chrysalis is full of water',
        'D - the caterpillar has died inside the case',
      ],
      markScheme: {
        answer: 'B - much of the body has broken down into a fluid state',
        notes: '1 mark for B only.',
      },
    },
    {
      number: '5',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 1, why does the writer say the chrysalis “looks still, even lifeless”, when it is not?',
      markScheme: {
        answer:
          'To create a contrast / surprise: the outside seems calm and inactive, but the most dramatic change is actually happening inside. Accept any answer showing the appearance is misleading.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '6',
      typeId: 'underline-word-class',
      ao: 'RAO3/RAO4',
      marks: 1,
      prompt:
        'In this sentence from Text 1, underline the VERB: “The case splits open and an adult butterfly climbs out.” (Underline the verb in the first part of the sentence: “The case splits open”.)',
      markScheme: {
        answer: '“splits”',
        notes:
          '1 mark for clearly identifying “splits”. Any clear positive indication (underline, circle) is accepted.',
      },
    },
    {
      number: '7',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In the final paragraph of Text 1 the writer says: “Change, in this case, is not an ending. It is the whole point.” What did the writer mean by this, and what is its effect on the reader?',
      markScheme: {
        answer:
          'Meaning: for the butterfly, the transformation is not a loss of its old life but the very purpose of its existence - it was always heading towards this. Effect: ends the article on a thoughtful, reassuring note; reframes change as something positive and intended, leaving the reader with a wider message about change itself.',
        notes:
          '1 mark for explaining the meaning; 1 mark for the effect on the reader. Do not credit an unexplained lift of the quotation.',
      },
    },
    {
      number: '8',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 2, what question will the people of Marrowfield be asked next month?',
      markScheme: {
        answer:
          'Whether the old, fenced-off stretch of riverbank should be turned into a public walking and cycling path.',
        notes: '1 mark for the precise detail.',
      },
    },
    {
      number: '9',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 2 the writer says “‘the same’ is not the same as ‘good’”. Why has the writer included this idea?',
      markScheme: {
        answer:
          'To challenge people who want to keep things as they are; it suggests that something staying unchanged does not mean it is right or worth keeping, persuading the reader to support change.',
        notes: '1 mark for a clear inference about the persuasive intention.',
      },
    },
    {
      number: '10',
      typeId: 'punctuation-effect',
      ao: 'RAO3',
      marks: 2,
      prompt:
        'In Text 2, paragraph 3, the writer repeats the word “Picture” at the start of four sentences: “Picture the path on a Saturday morning. Picture older residents… Picture children… Picture neighbours…”. Explain the effect of this repetition.',
      markScheme: {
        answer:
          'Effect: the repeated command makes the reader actively imagine the benefits one by one, building a vivid, attractive picture of the future. Linked explanation: stacking the images creates a rhythm and momentum that makes the change feel desirable and almost inevitable, pushing the reader to vote yes.',
        notes:
          '1 mark for naming the effect of the repetition (e.g. it builds emphasis / makes the reader imagine the scene). 1 mark for an explanation linked to the text content.',
      },
    },
    {
      number: '11',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In Text 2 the writer states: “Towns that refuse to change do not stay the same; they slowly fade.” What is the writer’s purpose here, and how does this affect the reader?',
      markScheme: {
        answer:
          'Purpose: to warn the reader that refusing change is not a safe, neutral choice but a harmful one - standing still actually means decline. Effect: creates a sense of risk and urgency, making the reader more willing to vote for the path to avoid the town “fading”.',
        notes: '1 mark for the writer’s purpose; 1 mark for the effect on the reader.',
      },
    },
    {
      number: '12',
      typeId: 'underline-word-class',
      ao: 'RAO3/RAO4',
      marks: 1,
      prompt:
        'In this sentence from Text 2, underline the IMPERATIVE verb: “When the vote comes, please choose it.”',
      markScheme: {
        answer: '“choose”',
        notes: '1 mark for identifying “choose”. Any clear positive indication is accepted.',
      },
    },
    {
      number: '13',
      typeId: 'feature-tick-table',
      ao: 'RAO3',
      marks: 2,
      prompt:
        'Tick ONE box in each row to show which text uses each feature. (Text 1 is the butterfly article; Text 2 is the Marrowfield opinion column.)',
      tickRows: [
        {
          feature: 'A first-person writer giving a personal opinion',
          answer: 'Text 2',
        },
        {
          feature: 'Step-by-step explanation of a natural process',
          answer: 'Text 1',
        },
        {
          feature: 'A rhetorical question aimed directly at the reader',
          answer: 'Text 2',
        },
        {
          feature: 'Numbered paragraphs replaced by bullet-point lists',
          answer: 'Neither',
        },
      ],
      markScheme: {
        answer: 'Row 1 - Text 2; Row 2 - Text 1; Row 3 - Text 2; Row 4 - Neither.',
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
        'How does the writer of Text 2 use language to persuade the people of Marrowfield to vote for the path? Make TWO developed points, each supported with evidence from the text.',
      markScheme: {
        answer:
          'Indicative content (any two developed points): (1) the inclusive first person and direct address - “I have lived in this town for thirty years”, “the Marrowfield we want to protect” - builds trust and a shared sense of community; (2) the anaphora of “Picture…” paints an appealing, concrete future that makes change feel desirable; (3) the structured rebuttal of objections - “The objections we hear most often do not survive a closer look” - makes the argument seem fair and reasonable; (4) the warning metaphor “they slowly fade” presents refusing change as a real danger, creating urgency.',
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
        'Compare how the writer of Text 1 uses the quotation “Change, in this case, is not an ending. It is the whole point.” and how the writer of Text 2 uses the quotation “Towns that refuse to change do not stay the same; they slowly fade.” to reflect each writer’s purpose. In your answer you should comment on the writers’ use of language and the effect on the reader.',
      markScheme: {
        levelled: 'comparison',
        answer:
          'Indicative comparison: Text 1’s writer uses the calm, balanced contrast of “ending” and “the whole point” to imply that change is natural, positive and purposeful; the word “point” suggests change is the very reason for life, reflecting an explanatory, reassuring purpose that leaves the reader admiring the process. By contrast, Text 2’s writer uses the verb “fade” and the blunt contrast with “stay the same” to imply that refusing change causes loss and decline; this reflects a persuasive purpose designed to make the reader feel anxious about inaction and vote for change. Where Text 1 positions the reader as a calm observer of a wonder of nature, Text 2 positions them as a voter whose decision has consequences.',
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
          'Accept either text. Reward a reasonable explanation of preference (e.g. Text 1 is appealing because it reveals a surprising fact such as the body becoming “a kind of living soup”; Text 2 is appealing because its repeated “Picture…” and direct questions make the reader feel involved in the decision).',
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
        'In Text 3, paragraph 1, the writer says Priya’s voice “came back to her as a stranger”. Circle ONE word below that is closest in meaning to “stranger” as it is used here.',
      options: ['friend', 'echo', 'something unfamiliar', 'a visitor'],
      markScheme: {
        answer: 'something unfamiliar',
        notes: '1 mark for “something unfamiliar” only.',
      },
    },
    {
      number: '18',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 3, give ONE thing that is changing in Priya’s life because of the move.',
      markScheme: {
        answer:
          'Any one of: she is moving three hundred miles away; she is starting a new school; she will have a bedroom she did not choose; she is leaving the house she grew up in.',
        notes: '1 mark for any one precise detail.',
      },
    },
    {
      number: '19',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 3, why does Priya think that “careful words… were the ones adults used when they already knew you would not like the answer”?',
      markScheme: {
        answer:
          'Because she has noticed that adults use gentle, positive phrases to soften bad news; this shows she does not trust the cheerful description and knows the move is something she will dislike.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '20',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In Text 3 the writer says the morning “was bright and ordinary and did not care that anything had ended.” What is the effect of describing the morning as not caring?',
      markScheme: {
        answer:
          'It contrasts the indifferent, unchanged world with Priya’s strong feelings, emphasising how big the change is for her but how small it is to everything else. Effect: makes the reader feel her loneliness and sadness more sharply, and shows that life simply moves on.',
        notes:
          '1 mark for explaining the meaning of the indifferent morning; 1 mark for the effect on the reader.',
      },
    },
    {
      number: '21',
      typeId: 'language-structure-analysis',
      ao: 'RAO4 + RAO5',
      marks: 4,
      prompt:
        'How does the writer of Text 3 use language and structure to show that Priya is upset by the change but is starting to accept it? Make TWO developed points, each supported with evidence.',
      markScheme: {
        answer:
          'Indicative content (any two developed points): (1) the simile of the pale rectangles “like the shadows of things rather than the things themselves” shows her sense of loss as the home empties; (2) the pencil growth line she “had grown into this house, and she was leaving it anyway” uses a small concrete detail to convey a large emotional change; (3) the structural turn in the final paragraph - closing the door “the way you close a door on someone who is sleeping” - marks a quiet, gentle acceptance; (4) the ending “not because she was ready… but because the road only went one way” shows determination replacing resistance.',
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
        'In Text 3, the writer ends by saying Priya “had decided she would rather meet it than be dragged.” What does this suggest about how Priya is dealing with the change?',
      markScheme: {
        answer:
          'That she has chosen to face the change with some courage and control rather than resisting it; she is beginning to accept it on her own terms instead of being forced.',
        notes: '1 mark for a clear inference about acceptance / facing change with courage.',
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
      'The texts in Section A all explore the theme of change - a creature being completely rebuilt, a town deciding whether to change, and one person facing a change she did not choose.',
    task: 'Write the opening of a story in which a character experiences a big change in their life and slowly comes to accept it.',
    bullets: [
      'Write to entertain a reader of your own age.',
      'Use the form and conventions of narrative writing (an engaging opening, a clear sense of place, a character the reader cares about).',
      'Organise your writing into clear, linked paragraphs.',
      'Use a range of sentence types and openings, accurate punctuation and ambitious vocabulary for effect.',
    ],
    markScheme: {
      wao1Indicative:
        'Reward (against the WAO1 grid, 18 marks): a strong narrative form with an engaging hook; a vivid, controlled sense of place; a character whose response to change engages the reader; deliberate structural choices (e.g. a shift from resistance to acceptance, a turning point, a controlled ending); writing fully appropriate to the audience and purpose (entertain). Higher marks for sophisticated audience awareness and stylistic features that fully support purpose.',
      wao2Indicative:
        'Reward (against the WAO2 grid, 12 marks): a range of sentence structures and openings used for effect; accurate and increasingly sophisticated punctuation (including commas, dashes, speech marks where used); largely accurate spelling with ambitious vocabulary choices used appropriately and confidently. Penalise frequent errors that impede meaning.',
    },
  },
}

// Convenience totals (computed, so they cannot drift from the data).
export const SECTION_A_MARKS = PRACTICE_PAPER_5.sectionA.reduce((sum, q) => sum + q.marks, 0)
export const SECTION_A_QUESTION_COUNT = PRACTICE_PAPER_5.sectionA.length
