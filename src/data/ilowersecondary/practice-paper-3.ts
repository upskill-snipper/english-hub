/**
 * ORIGINAL PRACTICE PAPER 3 - theme: "The Natural World"
 *
 * Modelled exactly on the Pearson Edexcel International Award in Lower
 * Secondary English achievement test LEH11/01 (structure only). EVERY
 * source text below is a 100% ORIGINAL work written by The English Hub.
 * No past-paper text, novel or website has been reproduced or adapted.
 *
 * Factual content in the two non-fiction texts is limited to
 * well-known, verifiable biology (Text 1) or a clearly fictional,
 * invented conservation scenario (Text 2). Text 3 is original fiction.
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

export const PRACTICE_PAPER_3: PracticePaper = {
  code: 'Practice Paper 3',
  modelledOn: 'LEH11/01',
  theme: 'The Natural World',
  totalMarks: 70,
  durationLabel: '1 hour 45 minutes',
  sections: {
    a: {
      name: 'Section A: Reading',
      marks: 40,
      instruction:
        'Answer ALL questions. Read the three texts in the Source Booklet first. The texts are linked by the theme of the natural world.',
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

  // ─── Source Booklet - three original texts ────────────────────────
  texts: [
    {
      id: 1,
      label: 'Text 1',
      kind: 'non-fiction',
      textType: 'magazine article (explanatory)',
      purpose: 'inform / explain',
      title: 'How a Coral Reef Stays Alive',
      byline: 'An explanatory article written for The English Hub',
      paragraphs: [
        'From the surface a coral reef looks like a single, brightly coloured ridge of rock. It is nothing of the kind. A reef is a vast, living city, built and maintained by millions of tiny animals working together, and almost everything about how it survives depends on a partnership so small it cannot be seen with the naked eye.',
        'The builders of the reef are coral polyps - soft creatures, each no larger than a grain of rice, related to jellyfish and sea anemones. A polyp draws minerals from the seawater around it and uses them to grow a hard cup of limestone beneath its body. As generation after generation grows on top of the skeletons of the dead, the reef slowly rises. A reef the size of a town can take many thousands of years to form.',
        'A polyp could not build for long on its own, because it cannot make enough food. Its secret partner is a microscopic plant-like organism called zooxanthellae, which lives inside the polyp’s own tissues. The tiny plant captures sunlight and turns it into sugars, sharing most of them with its host; in return the polyp gives the plant a safe home and the chemicals it needs. Neither could thrive without the other. This is why reefs grow only in clear, shallow water where sunlight can reach.',
        'The reef the polyps build is then shared by an astonishing crowd of other animals. Parrotfish scrape algae from the coral with beaks like tools, and in doing so they keep the reef from being smothered. Cleaner shrimp set up stations where larger fish queue to have parasites picked from their skin. Each creature has a job, and the reef works because the jobs fit together.',
        'The whole system, however, balances on a knife-edge of temperature. If the sea grows only a little too warm for too long, the stressed polyps expel the very plant partner that feeds them. Stripped of colour and of food, the coral turns a ghostly white - an event known as bleaching. A bleached reef is not yet dead, but it is starving, and without cooler water it will not recover.',
        'A coral reef, then, is not a rock at all. It is a fragile agreement, signed millions of years ago between an animal and a plant, and renewed every single day that the water stays clear, clean and cool.',
      ],
    },
    {
      id: 2,
      label: 'Text 2',
      kind: 'non-fiction',
      textType: 'campaign opinion piece (persuasive)',
      purpose: 'persuade / argue',
      title: 'The Forest at the End of Our Street',
      byline: 'An opinion piece for the (fictional) Greenway Community Woodland campaign',
      paragraphs: [
        'There is a strip of old woodland at the end of our street, and next spring the council intends to cut it down to widen a road by a single lane. They will tell you it is only a few hundred trees. I am asking you to look again, because what they call “only a few hundred trees” is the last wild place that any child in this town can walk to alone.',
        'For thirty years the Greenway Community Woodland has cleared litter, planted hedgerows and counted the owls so that nobody could pretend they were not there. We are not against roads. We drive on them too. We are against the strange arithmetic that values four minutes of a car journey above a wood that took two centuries to grow and will not grow back in our lifetimes.',
        'Think, for a moment, about what a wood actually does while we are not watching it. Is it really “doing nothing”? Its roots hold the hillside together so that our cellars stay dry. Its leaves quietly clean the air that our youngest children breathe. Can a wider road do any of that?',
        'You do not need to be an expert to help, and you do not need to give money. You need only to do one thing: write a single sentence to the council before the thirtieth of June and say that this wood matters to you. One letter is easy to ignore. Three thousand letters are not.',
        'The trees cannot write that letter. They cannot speak at the meeting or stand at the back of the hall. They have stood at the end of our street for two hundred years, asking nothing of us. This once, before the spring, let us stand up for them.',
      ],
    },
    {
      id: 3,
      label: 'Text 3',
      kind: 'fiction',
      textType: 'descriptive narrative (third person)',
      purpose: 'entertain / describe',
      title: 'The Tide Pool',
      byline: 'An original short story written for The English Hub',
      paragraphs: [
        'The tide had gone out further than Nadia had ever seen it. Where the sea usually rolled there was now a glistening plain of rock and weed, steaming faintly in the early light, and she went out onto it the way a person walks into a room they are not sure they are allowed to enter.',
        'She found the pool by accident, in the shadow of a boulder the size of a car. It was no wider than a kitchen table, but it was perfectly still, and looking down into it was like looking through a window into another country. Anemones opened their soft red fingers to the water. A green crab considered her from beneath a ledge and decided she was not worth the trouble of moving.',
        'Nadia knelt on the cold rock and held her breath so as not to disturb anything. Nothing in the pool hurried. A tiny fish hung in the water without seeming to move at all, balanced as exactly as a held note. For a long moment she had the dizzying feeling that the pool was not small and she was not large - that she was the visitor here, and a clumsy one, and that everything in the water had been managing perfectly well for a very long time without her.',
        'Then the wind changed, and far out the sea made a low sound like something turning over in its sleep. Nadia looked up. The bright plain of rock had narrowed while she was not watching it. The first thin line of water was already feeling its way back across the sand towards her, unhurried and certain, the way a thing returns to a place it has always owned.',
        'She stood, her knees aching, and walked back the way she had come - quickly now, but not afraid. Behind her the pool waited, exactly as it had been, for the sea to come and close the window again. She did not look back, but for the rest of that summer she carried the strange, settled knowledge that the wild had not needed her there at all, and had let her stay anyway.',
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
        'In Text 1, paragraph 1, the writer describes the reef as a “vast” living city. Circle ONE word below that is closest in meaning to “vast” as it is used here.',
      options: ['fragile', 'enormous', 'colourful', 'crowded'],
      markScheme: {
        answer: 'enormous',
        notes: 'Award 1 mark for “enormous” only. Do not credit more than one circled word.',
      },
    },
    {
      number: '2',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt:
        'From Text 1, what does a coral polyp use the minerals it draws from seawater to make?',
      markScheme: {
        answer:
          'A hard cup / skeleton of limestone beneath its body. Accept any clear reference to building its limestone skeleton.',
        notes:
          '1 mark for a precise reference to the limestone skeleton/cup. Do not credit a vague answer such as “the reef”.',
      },
    },
    {
      number: '3',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 2,
      prompt:
        'From Text 1, give TWO jobs that other reef animals do that help keep the reef healthy.',
      markScheme: {
        answer:
          'Any two of: parrotfish scrape algae off the coral, stopping it being smothered; cleaner shrimp pick parasites from larger fish at cleaning stations.',
        notes: '1 mark for each correct job, up to 2 marks.',
      },
    },
    {
      number: '4',
      typeId: 'multiple-choice',
      ao: 'RAO2/RAO4',
      marks: 1,
      prompt:
        'In Text 1 the writer says a reef “balances on a knife-edge of temperature”. Put a cross in ONE box to show what this phrase suggests.',
      options: [
        'A - the reef is sharp and dangerous to touch',
        'B - the reef is only safe within a very narrow range of temperature',
        'C - the reef is always getting colder',
        'D - the reef can survive any temperature',
      ],
      markScheme: {
        answer: 'B - the reef is only safe within a very narrow range of temperature',
        notes: '1 mark for B only.',
      },
    },
    {
      number: '5',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 1, why does the writer describe the partnership between the polyp and the zooxanthellae as something “neither could thrive without”?',
      markScheme: {
        answer:
          'Because each one depends on the other to live well - the plant feeds the polyp with sugars from sunlight and the polyp gives the plant a safe home and chemicals - so the reef itself depends on both surviving together.',
        notes: '1 mark for a clear inference about mutual dependence.',
      },
    },
    {
      number: '6',
      typeId: 'underline-word-class',
      ao: 'RAO3/RAO4',
      marks: 1,
      prompt: 'In this sentence from Text 1, underline the VERB: “The reef slowly rises.”',
      markScheme: {
        answer: '“rises”',
        notes:
          '1 mark for clearly identifying “rises”. Any clear positive indication (underline, circle) is accepted. Do not credit “slowly”.',
      },
    },
    {
      number: '7',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In the final paragraph of Text 1 the writer says a reef is “a fragile agreement … renewed every single day that the water stays clear, clean and cool.” What did the writer mean by this, and what is its effect on the reader?',
      markScheme: {
        answer:
          'Meaning: the reef’s survival is not permanent but a daily, conditional balance between living things that only continues while the water remains undamaged. Effect: the metaphor of an “agreement” makes the reader feel the reef is precious and easily broken, ending the article on a note of concern that encourages care for the reef.',
        notes:
          '1 mark for explaining the meaning; 1 mark for the effect on the reader. Do not credit an unexplained lift of the quotation.',
      },
    },
    {
      number: '8',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 2, what does the writer say the council intends to do to the woodland?',
      markScheme: {
        answer: 'Cut it down to widen a road by a single lane (next spring).',
        notes: '1 mark for the precise detail.',
      },
    },
    {
      number: '9',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 2 the writer says the wood “took two centuries to grow and will not grow back in our lifetimes.” Why has the writer included this idea?',
      markScheme: {
        answer:
          'To stress that the loss would be permanent / irreversible for everyone alive now, making the reader feel the decision is far more serious than the council suggests.',
        notes:
          '1 mark for a clear inference about the loss being permanent or the persuasive intention.',
      },
    },
    {
      number: '10',
      typeId: 'punctuation-effect',
      ao: 'RAO3',
      marks: 2,
      prompt:
        'In Text 2, paragraph 3, the writer uses question marks: “Is it really ‘doing nothing’? … Can a wider road do any of that?” Explain the effect of these question marks.',
      markScheme: {
        answer:
          'Effect: the rhetorical questions challenge the council’s argument and make the reader supply the answer themselves (that the wood is not doing nothing). Linked explanation: this draws the reader onto the writer’s side and makes refusing to act feel unreasonable.',
        notes:
          '1 mark for naming the effect of the question marks (e.g. they challenge the reader / make them think). 1 mark for an explanation linked to the text content.',
      },
    },
    {
      number: '11',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In Text 2 the writer says: “One letter is easy to ignore. Three thousand letters are not.” What is the writer’s purpose here, and how does this affect the reader?',
      markScheme: {
        answer:
          'Purpose: to convince the reader that their single action matters because it adds to a powerful collective effort, removing the excuse that one person cannot make a difference. Effect: makes the reader feel responsible and capable, and more likely to write the letter.',
        notes: '1 mark for the writer’s purpose; 1 mark for the effect on the reader.',
      },
    },
    {
      number: '12',
      typeId: 'underline-word-class',
      ao: 'RAO3/RAO4',
      marks: 1,
      prompt:
        'In this sentence from Text 2, underline the IMPERATIVE verb: “Write a single sentence to the council before the thirtieth of June.”',
      markScheme: {
        answer: '“Write”',
        notes: '1 mark for identifying “Write”. Any clear positive indication is accepted.',
      },
    },
    {
      number: '13',
      typeId: 'feature-tick-table',
      ao: 'RAO3',
      marks: 2,
      prompt:
        'Tick ONE box in each row to show which text uses each feature. (Text 1 is the coral-reef article; Text 2 is the woodland campaign piece.)',
      tickRows: [
        {
          feature: 'A scientific explanation of how a living thing works',
          answer: 'Text 1',
        },
        {
          feature: 'A direct call for the reader to take a specific action',
          answer: 'Text 2',
        },
        {
          feature: 'First-person plural pronouns (“we”, “us”, “our”)',
          answer: 'Text 2',
        },
        {
          feature: 'Numbered subheadings or bullet-point lists',
          answer: 'Neither',
        },
      ],
      markScheme: {
        answer: 'Row 1 - Text 1; Row 2 - Text 2; Row 3 - Text 2; Row 4 - Neither.',
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
        'How does the writer of Text 2 use language to persuade the reader to support the woodland? Make TWO developed points, each supported with evidence from the text.',
      markScheme: {
        answer:
          'Indicative content (any two developed points): (1) the dismissive phrase placed in the council’s mouth - “only a few hundred trees” - is repeated and then attacked, making the council’s view seem careless and the reader sympathetic to the wood; (2) the contrast of “four minutes of a car journey” against “two centuries to grow” uses precise figures to make the trade-off seem absurd and unfair; (3) personification of the trees that “cannot write that letter” or “speak at the meeting” makes them seem helpless and dependent on the reader; (4) the inclusive “we”/“us” positions the writer and reader as one community defending a shared place.',
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
        'Compare how the writer of Text 1 uses the quotation “a fragile agreement … renewed every single day” and how the writer of Text 2 uses the quotation “They have stood at the end of our street for two hundred years, asking nothing of us.” to reflect each writer’s purpose. In your answer you should comment on the writers’ use of language and the effect on the reader.',
      markScheme: {
        levelled: 'comparison',
        answer:
          'Indicative comparison: Text 1’s writer uses the noun “agreement” and the verb “renewed” to present the reef as a delicate, ongoing balance that depends on conditions staying right - language that reflects an explanatory purpose and leaves the reader respecting how easily nature can be lost. Text 2’s writer uses the patient, almost human image of trees that have “stood … asking nothing of us” to imply a moral debt the reader now owes; this reflects a persuasive purpose designed to make the reader feel personally obliged to act. Where Text 1 positions the reader as a thoughtful observer of a fragile system, Text 2 positions them as someone whose silence would be an injustice.',
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
          'Accept either text. Reward a reasonable explanation of preference (e.g. Text 1 is appealing because it reveals a surprising hidden partnership such as the polyp and the microscopic plant; Text 2 is appealing because its passionate, personal voice and rhetorical questions make the reader care about a local place).',
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
        'In Text 3, paragraph 1, the writer describes a “glistening plain of rock and weed”. Circle ONE word below that is closest in meaning to “glistening” as it is used here.',
      options: ['shining', 'rotting', 'enormous', 'silent'],
      markScheme: {
        answer: 'shining',
        notes: '1 mark for “shining” only.',
      },
    },
    {
      number: '18',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 3, where does Nadia find the tide pool?',
      markScheme: {
        answer:
          'In the shadow of a boulder the size of a car. Accept any clear reference to it being beside / in the shadow of the large boulder.',
        notes: '1 mark for the precise detail.',
      },
    },
    {
      number: '19',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt: 'In Text 3, why does Nadia feel she is “the visitor here, and a clumsy one”?',
      markScheme: {
        answer:
          'Because the creatures in the pool are calm and at home and have lived there without her for a long time, which makes her feel like an outsider intruding on a world that does not need her.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '20',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In Text 3 the writer describes the returning sea as moving “the way a thing returns to a place it has always owned.” What is the effect of describing the sea in this way?',
      markScheme: {
        answer:
          'It presents the sea as the rightful owner of the shore, calm and unstoppable, with humans only allowed there briefly. Effect: makes the reader feel the power and indifference of nature and Nadia’s smallness within it, deepening the story’s thoughtful, slightly humbling mood.',
        notes:
          '1 mark for explaining the meaning of the sea as owner/returning; 1 mark for the effect on the reader.',
      },
    },
    {
      number: '21',
      typeId: 'language-structure-analysis',
      ao: 'RAO4 + RAO5',
      marks: 4,
      prompt:
        'How does the writer of Text 3 use language and structure to show that nature is calm and self-sufficient while Nadia is only a guest? Make TWO developed points, each supported with evidence.',
      markScheme: {
        answer:
          'Indicative content (any two developed points): (1) the stillness imagery - the fish “hung in the water … balanced as exactly as a held note” - gives the pool a calm, ordered perfection that needs no help; (2) the simile of the sea “like something turning over in its sleep” makes nature seem powerful yet untroubled by her; (3) the structural shift when “the bright plain of rock had narrowed while she was not watching” shows nature continuing on its own regardless of her attention; (4) the closing idea that the wild “had let her stay anyway” places Nadia as a permitted guest, reinforcing nature’s self-sufficiency.',
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
        'In Text 3, what does the writer suggest about the natural world through Nadia’s “strange, settled knowledge that the wild had not needed her there at all”?',
      markScheme: {
        answer:
          'That the natural world is complete and capable on its own and does not depend on people - humans are visitors to it rather than its centre.',
        notes:
          '1 mark for a clear inference about nature being independent of / not needing humans.',
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
      'The texts in Section A all explore the natural world - how a reef survives, a campaign to save a wood, and one person’s quiet encounter with a tide pool.',
    task: 'Write a description of a place in the natural world that made a strong impression on you (real or imagined), and the moment you noticed it most clearly.',
    bullets: [
      'Write to entertain a reader of your own age.',
      'Use the form and conventions of descriptive writing (a strong sense of place, vivid detail appealing to the senses, a controlled mood).',
      'Organise your writing into clear, linked paragraphs.',
      'Use a range of sentence types and openings, accurate punctuation and ambitious vocabulary for effect.',
    ],
    markScheme: {
      wao1Indicative:
        'Reward (against the WAO1 grid, 18 marks): a strong descriptive form with an engaging opening; a vivid, controlled sense of a natural place built through sensory detail; a clearly sustained mood or atmosphere that engages the reader; deliberate structural choices (e.g. a movement from wide view to close focus, a turning point of noticing, a controlled ending); writing fully appropriate to the audience and purpose (entertain / describe). Higher marks for sophisticated audience awareness and stylistic features that fully support purpose.',
      wao2Indicative:
        'Reward (against the WAO2 grid, 12 marks): a range of sentence structures and openings used for effect; accurate and increasingly sophisticated punctuation (including commas, dashes and any speech marks); largely accurate spelling with ambitious vocabulary choices used appropriately and confidently. Penalise frequent errors that impede meaning.',
    },
  },
}

// Convenience totals (computed, so they cannot drift from the data).
export const SECTION_A_MARKS = PRACTICE_PAPER_3.sectionA.reduce((sum, q) => sum + q.marks, 0)
export const SECTION_A_QUESTION_COUNT = PRACTICE_PAPER_3.sectionA.length
