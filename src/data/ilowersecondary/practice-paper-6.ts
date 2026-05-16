/**
 * ORIGINAL PRACTICE PAPER 6 — theme: "Discovery"
 *
 * Modelled exactly on the Pearson Edexcel International Award in Lower
 * Secondary English achievement test LEH11/01 (structure only). EVERY
 * source text below is a 100% ORIGINAL work written by The English Hub.
 * No past-paper text, novel or website has been reproduced or adapted.
 *
 * Factual content in the two non-fiction texts is limited to
 * well-known, verifiable history/science (Text 1 — the discovery of
 * penicillin, told accurately at a general level) or a clearly
 * fictional, invented young-explorer scenario (Text 2). Text 3 is
 * original mystery fiction.
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

export const PRACTICE_PAPER_6: PracticePaper = {
  code: 'Practice Paper 6',
  modelledOn: 'LEH11/01',
  theme: 'Discovery',
  totalMarks: 70,
  durationLabel: '1 hour 45 minutes',
  sections: {
    a: {
      name: 'Section A: Reading',
      marks: 40,
      instruction:
        'Answer ALL questions. Read the three texts in the Source Booklet first. The texts are linked by the theme of discovery.',
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
      title: 'The Mould That Changed Medicine',
      byline: 'An explanatory article written for The English Hub',
      paragraphs: [
        'Some of the greatest discoveries in science were never planned. They began with a mistake, an interruption, or a window left open on a warm afternoon. The discovery of penicillin — the medicine that has since saved an enormous number of lives — is one of the most famous examples of all, and it started with a dirty laboratory dish.',
        'In 1928 a Scottish scientist named Alexander Fleming was working at a hospital in London, studying bacteria — the tiny living things that can cause illness. Before he went away for a summer holiday, he left a stack of glass dishes on his bench. Each dish held a thin film of the bacteria he had been growing. When he returned, the dishes were not as he had left them.',
        'On one of them a blue-green mould had begun to grow, the kind of mould that sometimes appears on old bread. That alone was not unusual; laboratories are not perfectly clean places. What caught Fleming’s attention was the ring of clear glass around the mould. Wherever the mould had spread, the bacteria had simply died, as though the mould were defending the space around itself.',
        'Fleming realised that the mould must be releasing a substance that killed the bacteria. He named that substance penicillin, after the mould’s scientific name. He published what he had seen, but he was not able to turn it into a usable medicine, and for several years the discovery was largely ignored.',
        'More than a decade later, a team of scientists at the University of Oxford returned to Fleming’s work. Through long and difficult experiments they found a way to purify penicillin and produce it in far larger amounts. By the 1940s it was being used to treat wounded soldiers, and infections that had once been fatal could now be cured.',
        'The story is often told as a piece of pure luck, and luck certainly played its part. But the open window only mattered because someone was paying attention. As Fleming himself suggested, chance favours the prepared mind: the accident was ordinary, and the discovery extraordinary, only because of the person who noticed it.',
      ],
    },
    {
      id: 2,
      label: 'Text 2',
      kind: 'non-fiction',
      textType: 'autobiography / recount (first person)',
      purpose: 'recount / describe',
      title: 'The Map With the Missing Corner',
      byline:
        'A recount by Nadia Okafor, an explorer (a fictional account written for The English Hub)',
      paragraphs: [
        'I was seventeen the summer I found the cave, and I have never been quite the same person since. People imagine that explorers are brave. The truth is that I spent most of that expedition being frightened, and going on anyway, which I have come to believe is a different and more useful thing.',
        'My grandmother had owned an old hand-drawn map of the valley where she grew up. One corner of it was missing, torn away long before I was born, and as a child I used to stare at the ragged edge and wonder what had been there. When she died, the map came to me. I decided, with the certainty that only the young have, that I would go and find out.',
        'The valley was three days’ walk from the nearest road. I went with two friends, a guide who did not entirely trust my map, and far too heavy a bag. For four days we found nothing but steep grey slopes and a great deal of rain. I began to suspect that the missing corner had been missing for a reason.',
        'On the fifth morning the guide stopped and pointed at a crack in the rock that I would have walked straight past. It was no wider than a door. Inside, the air turned cold and still, and our torches lit a passage that ran far further back than any of us had expected. We did not speak. The silence in that place was older than anything I had ever stood inside.',
        'We did not find treasure, which is what my friends had secretly hoped. What we found were marks on the walls — simple painted shapes, hands and animals, made by people thousands of years before my grandmother was born. I sat down in the dark and understood, for the first time, that discovery is not about taking something away. It is about being allowed, for a moment, to see.',
      ],
    },
    {
      id: 3,
      label: 'Text 3',
      kind: 'fiction',
      textType: 'mystery narrative (third person)',
      purpose: 'entertain / describe',
      title: 'The Room Behind the Shelf',
      byline: 'An original short story written for The English Hub',
      paragraphs: [
        'The library had belonged to Theo’s great-aunt, and now, like everything else she had left behind, it belonged to nobody and to him. He had been told to sort the books into boxes. Instead he had spent the whole afternoon reading them, which his great-aunt, he felt sure, would have entirely understood.',
        'It was the draught that gave it away. A thin, cold thread of air, moving where no air should move, slipping out from behind the tallest bookcase against the far wall. Theo pressed his hand flat to the shelf and felt it: a faint, patient breath of cold against his palm, as though the wall itself were exhaling.',
        'He pulled the books down one by one, his heart going faster than the work deserved. Behind them the wood was not solid. There was a seam, a perfect dark line where two panels met, and a small brass catch worn smooth by some other hand, long ago. He looked over his shoulder, though he knew the house was empty, and pressed it.',
        'The shelf swung inward without a sound, which was somehow worse than any creak would have been. Beyond it lay a room no larger than a cupboard, and in the centre of the room, on a plain wooden table, sat a single locked box and a letter addressed, in handwriting he did not recognise, to him.',
        'Theo stood in the doorway for a long time. Part of him wanted to box the books, close the shelf, and tell no one. But his great-aunt had hidden this where only a reader would ever find it, and he understood, with a slow and certain feeling, that the discovery had been left for him on purpose — and that whatever it asked of him, he had already decided to answer.',
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
        'In Text 1, paragraph 1, the writer says some discoveries “were never planned”. Circle ONE word below that is closest in meaning to “planned” as it is used here.',
      options: ['intended', 'forgotten', 'finished', 'repeated'],
      markScheme: {
        answer: 'intended',
        notes: 'Award 1 mark for “intended” only. Do not credit more than one circled word.',
      },
    },
    {
      number: '2',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt:
        'From Text 1, give ONE thing Alexander Fleming was studying at the hospital in London.',
      markScheme: {
        answer:
          'Bacteria (the tiny living things that can cause illness). Accept any clear reference to bacteria / germs that cause illness.',
        notes: '1 mark for a precise reference. Do not credit a vague gist such as “science”.',
      },
    },
    {
      number: '3',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 2,
      prompt: 'From Text 1, give TWO things the Oxford team did with Fleming’s discovery.',
      markScheme: {
        answer:
          'Any two of: they returned to / built on Fleming’s earlier work; they found a way to purify penicillin; they found a way to produce it in far larger amounts; (by the 1940s) it was used to treat wounded soldiers.',
        notes: '1 mark for each correct point, up to 2 marks.',
      },
    },
    {
      number: '4',
      typeId: 'multiple-choice',
      ao: 'RAO2/RAO4',
      marks: 1,
      prompt:
        'In Text 1 the writer says the bacteria died “as though the mould were defending the space around itself”. Put a cross in ONE box to show what this comparison suggests.',
      options: [
        'A — the mould was alive and could think',
        'B — the mould was releasing something that killed the bacteria',
        'C — the bacteria were attacking the mould',
        'D — the dish had been cleaned by Fleming',
      ],
      markScheme: {
        answer: 'B — the mould was releasing something that killed the bacteria',
        notes: '1 mark for B only.',
      },
    },
    {
      number: '5',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 1, why does the writer say the discovery “was largely ignored” for several years?',
      markScheme: {
        answer:
          'Because Fleming was not able to turn it into a usable medicine, so others did not see its value / act on it. Accept any answer linking the neglect to it not yet being usable.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '6',
      typeId: 'underline-word-class',
      ao: 'RAO3/RAO4',
      marks: 1,
      prompt:
        'In this sentence from Text 1, underline the VERB: “A blue-green mould had begun to grow on one of the dishes.”',
      markScheme: {
        answer: '“grow” (also accept “had begun”)',
        notes:
          '1 mark for clearly identifying the verb “grow” (accept “had begun”). Any clear positive indication (underline, circle) is accepted.',
      },
    },
    {
      number: '7',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In the final paragraph of Text 1 the writer says: “the accident was ordinary, and the discovery extraordinary, only because of the person who noticed it.” What did the writer mean by this, and what is its effect on the reader?',
      markScheme: {
        answer:
          'Meaning: the lucky event itself was unremarkable — what made it a great discovery was Fleming’s attention and curiosity in noticing and following it up. Effect: ends the article on a thoughtful note that credits the scientist rather than luck, leaving the reader admiring careful, prepared thinking.',
        notes:
          '1 mark for explaining the meaning; 1 mark for the effect on the reader. Do not credit an unexplained lift of the quotation.',
      },
    },
    {
      number: '8',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 2, what was missing from the hand-drawn map that the writer inherited?',
      markScheme: {
        answer: 'One corner of the map (which had been torn away long before she was born).',
        notes: '1 mark for the precise detail.',
      },
    },
    {
      number: '9',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 2 the writer says she decided to find the place “with the certainty that only the young have”. What does this suggest about her decision at the time?',
      markScheme: {
        answer:
          'That her confidence came from being young and inexperienced — she did not yet realise how difficult or risky it would be. Accept any inference about youthful, untested certainty.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '10',
      typeId: 'punctuation-effect',
      ao: 'RAO3',
      marks: 2,
      prompt:
        'In Text 2, paragraph 1, the writer uses a dash: “The truth is that I spent most of that expedition being frightened, and going on anyway, which I have come to believe is a different and more useful thing.” In paragraph 4 she also uses short sentences such as “We did not speak.” Explain the effect of the writer’s sentence choices here.',
      markScheme: {
        answer:
          'Effect: the long, qualifying sentence in paragraph 1 makes her admission feel honest and reflective, as if she is thinking it through with the reader. The short sentence “We did not speak.” slows the pace and conveys awe, making the cave feel solemn and significant. Linked explanation: the contrast in sentence length controls how the reader feels at each moment.',
        notes:
          '1 mark for naming an effect of the sentence choice (e.g. reflective tone / building awe). 1 mark for an explanation linked to the text content.',
      },
    },
    {
      number: '11',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In Text 2 the writer states: “discovery is not about taking something away. It is about being allowed, for a moment, to see.” What is the writer’s purpose here, and how does this affect the reader?',
      markScheme: {
        answer:
          'Purpose: to redefine discovery as something respectful and humble rather than greedy — finding meaning rather than treasure. Effect: makes the reader rethink what exploration is for, and admire the writer’s changed, thoughtful attitude.',
        notes: '1 mark for the writer’s purpose; 1 mark for the effect on the reader.',
      },
    },
    {
      number: '12',
      typeId: 'underline-word-class',
      ao: 'RAO3/RAO4',
      marks: 1,
      prompt:
        'In this sentence from Text 2, underline the PROPER NOUN: “My grandmother had owned an old hand-drawn map of the valley where Nadia grew up.”',
      markScheme: {
        answer: '“Nadia”',
        notes: '1 mark for identifying “Nadia”. Any clear positive indication is accepted.',
      },
    },
    {
      number: '13',
      typeId: 'feature-tick-table',
      ao: 'RAO3',
      marks: 2,
      prompt:
        'Tick ONE box in each row to show which text uses each feature. (Text 1 is the penicillin article; Text 2 is the explorer’s recount.)',
      tickRows: [
        {
          feature: 'First-person narration using “I”',
          answer: 'Text 2',
        },
        {
          feature: 'Specific dates and named scientists',
          answer: 'Text 1',
        },
        {
          feature: 'A clear, factual explanation of a scientific process',
          answer: 'Text 1',
        },
        {
          feature: 'Subheadings or numbered lists',
          answer: 'Neither',
        },
      ],
      markScheme: {
        answer: 'Row 1 — Text 2; Row 2 — Text 1; Row 3 — Text 1; Row 4 — Neither.',
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
        'How does the writer of Text 2 use language to make the discovery of the cave feel powerful and memorable? Make TWO developed points, each supported with evidence from the text.',
      markScheme: {
        answer:
          'Indicative content (any two developed points): (1) sensory contrast — “the air turned cold and still” marks the threshold into the cave and signals something important; (2) the comparison of silence to age — “older than anything I had ever stood inside” / “The silence in that place was older” gives the moment scale and reverence; (3) the understated reveal — “simple painted shapes, hands and animals” lets the plainness of the marks carry deep meaning; (4) the reflective final sentence reframes the whole experience, making the discovery feel transformative.',
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
        'Compare how the writer of Text 1 uses the quotation “chance favours the prepared mind” and how the writer of Text 2 uses the quotation “discovery is not about taking something away. It is about being allowed, for a moment, to see.” to reflect each writer’s purpose. In your answer you should comment on the writers’ use of language and the effect on the reader.',
      markScheme: {
        levelled: 'comparison',
        answer:
          'Indicative comparison: Text 1’s writer uses the balanced, almost proverbial phrase “the prepared mind” to imply that discovery rewards attention and effort, not mere luck; the abstract noun “mind” reflects an explanatory, instructive purpose that leaves the reader respecting careful scientists. Text 2’s writer uses the gentle, humble phrasing “being allowed… to see” — where the passive verb removes any sense of ownership — to imply that true discovery is a privilege, not a prize; this reflects a reflective, personal purpose that moves the reader emotionally. Where Text 1 positions the reader to admire intellectual preparedness, Text 2 positions them to feel the wonder and humility of the moment.',
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
          'Accept either text. Reward a reasonable explanation of preference (e.g. Text 1 is appealing because it turns a real scientific story into a surprising, well-paced narrative; Text 2 is appealing because its honest, personal voice and vivid description of the cave make the reader feel the experience).',
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
        'In Text 3, paragraph 3, the writer says Theo pulled the books down “his heart going faster than the work deserved”. Circle ONE word below that is closest in meaning to “deserved” as it is used here.',
      options: ['warranted', 'paid', 'allowed', 'finished'],
      markScheme: {
        answer: 'warranted',
        notes: '1 mark for “warranted” only.',
      },
    },
    {
      number: '18',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt:
        'From Text 3, what first makes Theo notice that something is hidden behind the bookcase?',
      markScheme: {
        answer:
          'A draught / a thin, cold thread of air moving where no air should move. Accept any reference to the cold draught.',
        notes: '1 mark for the precise detail.',
      },
    },
    {
      number: '19',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 3, why does Theo look “over his shoulder, though he knew the house was empty”?',
      markScheme: {
        answer:
          'Because he feels nervous / that he is doing something secret or forbidden, even though he knows no one is there. Accept any inference about instinctive guilt, fear or excitement.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '20',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In Text 3 the writer says the shelf “swung inward without a sound, which was somehow worse than any creak would have been.” What is the effect of describing the silence as “worse”?',
      markScheme: {
        answer:
          'It builds tension and unease — the unnatural silence feels deliberate and secretive, more unsettling than an ordinary creaking door. Effect: makes the reader share Theo’s nervous anticipation and sense that the discovery is significant.',
        notes:
          '1 mark for explaining the meaning of the unsettling silence; 1 mark for the effect on the reader.',
      },
    },
    {
      number: '21',
      typeId: 'language-structure-analysis',
      ao: 'RAO4 + RAO5',
      marks: 4,
      prompt:
        'How does the writer of Text 3 use language and structure to build a sense of mystery and suspense? Make TWO developed points, each supported with evidence.',
      markScheme: {
        answer:
          'Indicative content (any two developed points): (1) the personification of the cold air — “as though the wall itself were exhaling” — makes the house feel alive and secretive; (2) the gradual structural reveal — the draught, then the seam, then the catch, then the room — delays the discovery and builds suspense; (3) sensory and tactile detail — “a small brass catch worn smooth by some other hand, long ago” — hints at a hidden history; (4) the cliff-hanger ending — the locked box and the letter “addressed… to him” — leaves the reader needing to know more.',
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
        'In Text 3, the writer says Theo “understood… that the discovery had been left for him on purpose”. What does this suggest about his great-aunt?',
      markScheme: {
        answer:
          'That she had planned this deliberately and knew Theo well — she hid it where only a reader like him would find it, suggesting trust and a personal message for him.',
        notes:
          '1 mark for a clear inference about the great-aunt’s deliberate, personal intention.',
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
      'The texts in Section A all explore the theme of discovery — an accidental scientific discovery, a young explorer’s discovery of an ancient cave, and a character’s discovery of a hidden room left for him on purpose.',
    task: 'Write the opening of a mystery story in which a character discovers something hidden that was never meant to be found — or perhaps was meant to be found by them alone.',
    bullets: [
      'Write to entertain a reader of your own age.',
      'Use the form and conventions of narrative writing (an engaging opening, a clear sense of place, a character the reader cares about, and a build of suspense).',
      'Organise your writing into clear, linked paragraphs.',
      'Use a range of sentence types and openings, accurate punctuation and ambitious vocabulary for effect.',
    ],
    markScheme: {
      wao1Indicative:
        'Reward (against the WAO1 grid, 18 marks): a strong narrative form with an intriguing hook; a vivid, controlled sense of place that creates atmosphere; a character whose curiosity and situation engage the reader; deliberate structural choices (e.g. a gradual reveal, a build of suspense, a controlled ending or cliff-hanger); writing fully appropriate to the audience and purpose (entertain). Higher marks for sophisticated audience awareness and stylistic features that fully support purpose.',
      wao2Indicative:
        'Reward (against the WAO2 grid, 12 marks): a range of sentence structures and openings used for effect; accurate and increasingly sophisticated punctuation (including commas, dashes, speech marks where used); largely accurate spelling with ambitious vocabulary choices used appropriately and confidently. Penalise frequent errors that impede meaning.',
    },
  },
}

// Convenience totals (computed, so they cannot drift from the data).
export const SECTION_A_MARKS = PRACTICE_PAPER_6.sectionA.reduce((sum, q) => sum + q.marks, 0)
export const SECTION_A_QUESTION_COUNT = PRACTICE_PAPER_6.sectionA.length
