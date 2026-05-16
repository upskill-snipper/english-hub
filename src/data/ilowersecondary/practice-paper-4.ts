/**
 * ORIGINAL PRACTICE PAPER 4 — theme: "Courage"
 *
 * Modelled exactly on the Pearson Edexcel International Award in Lower
 * Secondary English achievement test LEH11/01 (structure only). EVERY
 * source text below is a 100% ORIGINAL work written by The English Hub.
 * No past-paper text, novel or website has been reproduced or adapted.
 *
 * Factual content in the two non-fiction texts is limited to
 * well-known, verifiable human physiology (Text 1) or a clearly
 * invented, fictional appeal scenario (Text 2). Text 3 is original
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

export const PRACTICE_PAPER_4: PracticePaper = {
  code: 'Practice Paper 4',
  modelledOn: 'LEH11/01',
  theme: 'Courage',
  totalMarks: 70,
  durationLabel: '1 hour 45 minutes',
  sections: {
    a: {
      name: 'Section A: Reading',
      marks: 40,
      instruction:
        'Answer ALL questions. Read the three texts in the Source Booklet first. The texts are linked by the theme of courage.',
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
      title: 'What Fear Does Inside You',
      byline: 'An explanatory article written for The English Hub',
      paragraphs: [
        'Most people think of courage as the absence of fear. It is not. Courage is what happens when a person feels fear in every cell of their body and chooses to act anyway. To understand the brave, then, we first have to understand what is going on inside them — because the same alarm fires in the hero and in the person who runs away.',
        'It begins in a small, almond-shaped part of the brain called the amygdala. When the brain senses a threat, the amygdala does not wait for you to think it over. In less than a tenth of a second it sends an emergency signal, long before the slower, reasoning part of the brain has even noticed there is a problem. This is why your body can flinch before you know why.',
        'That signal triggers a flood of two chemicals: adrenaline and cortisol. Within seconds your heart beats harder and faster, your breathing quickens, and blood is pushed away from the skin and stomach and into the large muscles of the arms and legs. This is the famous "fight or flight" response, and it is the reason a frightened person may feel sick, shaky, or notice their hands turning cold and pale.',
        'These changes are not weaknesses. They are tools. The pounding heart is delivering oxygen to muscles that may need to act. The narrowed focus — the sense that the rest of the world has gone quiet — keeps attention fixed on the danger. Even the trembling is simply muscles flooded with fuel they have not yet been asked to use.',
        'What separates a courageous act from a panicked one is not the amount of fear but what the thinking brain does with it. The slower region behind the forehead, the prefrontal cortex, can step in a moment later and overrule the alarm: it can decide that the fear is worth enduring, hold the body steady, and choose the harder action. Brave people are not people whose alarm never rings. They are people who have learned to keep acting while it is ringing.',
        'This is also why courage can be practised. Every time a person does something frightening and survives it — speaking aloud in class, admitting a mistake, standing up for someone — the thinking brain gets a little better and a little faster at holding the alarm in check. Courage, in the end, is less a gift than a habit the body can be taught.',
      ],
    },
    {
      id: 2,
      label: 'Text 2',
      kind: 'non-fiction',
      textType: 'campaign appeal (persuasive)',
      purpose: 'persuade / argue',
      title: 'Say the Thing You Are Afraid to Say',
      byline: 'A campaign message from the (fictional) Speak Up Youth Project',
      paragraphs: [
        'Somewhere in your school, today, there is a person sitting very still and very quiet because they have something true to say and they are terrified to say it. Maybe it is an answer they are almost sure is right. Maybe it is the words "that is not fair". Maybe it is simply "I need help." You know this person, because at least once, this person has been you.',
        'At the Speak Up Youth Project we believe the bravest thing a young person ever does is rarely loud. It is not jumping from a height or winning a fight. It is the small, shaking voice that decides, against every instinct telling it to stay safe, to be heard anyway.',
        'And yet we train children for almost everything except this. We teach you to swim in case you fall in deep water. We teach you to cross a road. So why does no one teach you the one skill you will use every single day for the rest of your life — the courage to speak when speaking is hard?',
        'That is the gap we exist to close. For just the cost of a school lunch, our volunteers can run a speaking workshop for a whole class — a safe room where the only rule is that a wobbling voice is a brave voice, and no one is laughed at for trying. Last year, students who finished our course were far more likely to ask for help when they needed it. That is not a small thing. For some young people, that is everything.',
        'You do not have to be fearless to be brave. You only have to speak once while you are afraid, and discover that you survived it — and then do it again. So here is our challenge to you, today: find the smallest true thing you are scared to say, and say it. Then help us teach someone else to do the same.',
      ],
    },
    {
      id: 3,
      label: 'Text 3',
      kind: 'fiction',
      textType: 'realist narrative (third person)',
      purpose: 'entertain / describe',
      title: 'The Raised Hand',
      byline: 'An original short story written for The English Hub',
      paragraphs: [
        'Priya had known the answer for four whole minutes, and in those four minutes it had grown heavier and heavier in her chest, like a stone she could neither swallow nor put down. Mr Okafor asked the question again, more gently this time, scanning the rows of faces. Nobody moved. The clock above the whiteboard ticked once, very loudly, and Priya felt her own heartbeat answer it.',
        'Put your hand up. It was such a small thing. Children did it a hundred times a day without a second thought. So she could not understand why her arm felt as though it were bolted to the desk, or why her mouth had gone dry, or why some quiet, careful voice inside her kept whispering the same sensible warning: what if you are wrong, and everyone turns to look.',
        'She thought of last September, of the laughter that had spread through the room when Daniel got an answer wrong, and how he had spent the rest of the lesson studying the grain of his desk. The memory pressed her arm flatter still. Yet underneath the fear was something steadier and more stubborn — a small, irritated certainty that she knew this, that the silence was wrong, and that someone ought to break it.',
        'Mr Okafor sighed and reached for the register, ready to give up. Something about that small movement, that quiet surrender of his, decided it. Before the careful voice could argue again, Priya watched her own hand lift off the desk — slowly, unsteadily, only halfway — as if it had made the choice a fraction of a second before she had.',
        'Her voice came out smaller than she meant it to, and it shook on the second word. But she said the answer, all of it, to the end. There was a pause that lasted about a year. Then Mr Okafor smiled and said, simply, "Yes. Exactly that." And Priya sat back, her heart still hammering, astonished to find that the hardest thing she had done all year was already over, and that she was, somehow, still here.',
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
        'In Text 1, paragraph 1, the writer uses the word “threat”. Circle ONE word below that is closest in meaning to “threat” as it is used here.',
      options: ['promise', 'danger', 'comfort', 'question'],
      markScheme: {
        answer: 'danger',
        notes: 'Award 1 mark for “danger” only. Do not credit more than one circled word.',
      },
    },
    {
      number: '2',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 1, name the small part of the brain where the fear response begins.',
      markScheme: {
        answer: 'The amygdala.',
        notes:
          '1 mark for “the amygdala”. Accept “the almond-shaped part of the brain”. Do not credit “the brain” alone.',
      },
    },
    {
      number: '3',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 2,
      prompt:
        'From Text 1, give TWO physical changes that happen in the body during the “fight or flight” response.',
      markScheme: {
        answer:
          'Any two of: the heart beats harder and faster; breathing quickens; blood is pushed away from the skin and stomach into the large muscles of the arms and legs; the person may feel sick, shaky, or have cold/pale hands.',
        notes: '1 mark for each correct change, up to 2 marks.',
      },
    },
    {
      number: '4',
      typeId: 'multiple-choice',
      ao: 'RAO2/RAO4',
      marks: 1,
      prompt:
        'In Text 1 the writer says the trembling of a frightened person is “simply muscles flooded with fuel they have not yet been asked to use”. Put a cross in ONE box to show what this suggests.',
      options: [
        'A — the shaking is a sign the person is weak',
        'B — the shaking means the muscles are damaged',
        'C — the shaking is the body prepared for action it has not yet taken',
        'D — the shaking will make the person fall over',
      ],
      markScheme: {
        answer: 'C — the shaking is the body prepared for action it has not yet taken',
        notes: '1 mark for C only.',
      },
    },
    {
      number: '5',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 1, why does the writer say that “the same alarm fires in the hero and in the person who runs away”?',
      markScheme: {
        answer:
          'To show that brave people feel exactly the same fear as everyone else — the difference is not whether they feel fear but what they do with it. Accept any answer showing courage is not the absence of fear.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '6',
      typeId: 'underline-word-class',
      ao: 'RAO3/RAO4',
      marks: 1,
      prompt:
        'In this sentence from Text 1, underline the VERB: “Your heart beats harder and faster.”',
      markScheme: {
        answer: '“beats”',
        notes:
          '1 mark for clearly identifying “beats”. Any clear positive indication (underline, circle) is accepted.',
      },
    },
    {
      number: '7',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In the final paragraph of Text 1 the writer says: “Courage, in the end, is less a gift than a habit the body can be taught.” What did the writer mean by this, and what is its effect on the reader?',
      markScheme: {
        answer:
          'Meaning: courage is not something a lucky few are simply born with — it is a skill that anyone can build through practice and repetition. Effect: ends the article on an encouraging, empowering note; reassures the reader that they too could become braver, leaving them hopeful rather than excluded.',
        notes:
          '1 mark for explaining the meaning; 1 mark for the effect on the reader. Do not credit an unexplained lift of the quotation.',
      },
    },
    {
      number: '8',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt:
        'From Text 2, what does the Speak Up Youth Project say the cost of a school lunch can pay for?',
      markScheme: {
        answer: 'A speaking workshop run by their volunteers for a whole class.',
        notes: '1 mark for the precise detail.',
      },
    },
    {
      number: '9',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt:
        'In Text 2 the writer says of the silent person, “You know this person, because at least once, this person has been you.” Why has the writer included this idea?',
      markScheme: {
        answer:
          'To make the reader recognise the feeling personally, so they feel involved and sympathetic and are more likely to support the cause.',
        notes: '1 mark for a clear inference about the persuasive intention or emotional effect.',
      },
    },
    {
      number: '10',
      typeId: 'punctuation-effect',
      ao: 'RAO3',
      marks: 2,
      prompt:
        'In Text 2, paragraph 3, the writer uses a question mark: “So why does no one teach you the one skill you will use every single day for the rest of your life — the courage to speak when speaking is hard?” Explain the effect of this question mark.',
      markScheme: {
        answer:
          'Effect: the rhetorical question makes the reader stop and think, and feel that something obvious has been unfairly left out. Linked explanation: it challenges the reader to agree there is a real gap, building a sense that the project’s work is needed and worth supporting.',
        notes:
          '1 mark for naming the effect of the question mark (e.g. it makes the reader think / involves the reader). 1 mark for an explanation linked to the text content.',
      },
    },
    {
      number: '11',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In Text 2 the writer states: “You do not have to be fearless to be brave. You only have to speak once while you are afraid.” What is the writer’s purpose here, and how does this affect the reader?',
      markScheme: {
        answer:
          'Purpose: to remove the reader’s excuse that they are “not brave enough”, by redefining bravery as something small and achievable. Effect: makes the reader feel capable of acting and more willing to take up the challenge / support the project.',
        notes: '1 mark for the writer’s purpose; 1 mark for the effect on the reader.',
      },
    },
    {
      number: '12',
      typeId: 'underline-word-class',
      ao: 'RAO3/RAO4',
      marks: 1,
      prompt:
        'In this sentence from Text 2, underline the IMPERATIVE verb: “Say the thing you are afraid to say.”',
      markScheme: {
        answer: '“Say”',
        notes: '1 mark for identifying “Say”. Any clear positive indication is accepted.',
      },
    },
    {
      number: '13',
      typeId: 'feature-tick-table',
      ao: 'RAO3',
      marks: 2,
      prompt:
        'Tick ONE box in each row to show which text uses each feature. (Text 1 is the article about fear; Text 2 is the campaign message.)',
      tickRows: [
        {
          feature: 'A direct address to the reader using “you”',
          answer: 'Text 2',
        },
        { feature: 'Subheadings or numbered lists', answer: 'Neither' },
        {
          feature: 'A rhetorical question to challenge the reader',
          answer: 'Text 2',
        },
        {
          feature: 'Factual scientific explanation of how the brain reacts to fear',
          answer: 'Text 1',
        },
      ],
      markScheme: {
        answer:
          'Row 1 — Text 2; Row 2 — Neither (accept reasoning that neither uses them); Row 3 — Text 2; Row 4 — Text 1.',
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
        'How does the writer of Text 2 use language to persuade young readers to speak up? Make TWO developed points, each supported with evidence from the text.',
      markScheme: {
        answer:
          'Indicative content (any two developed points): (1) the direct, accusing second person — “this person has been you” — forces the reader to recognise themselves, creating personal involvement and sympathy; (2) the everyday comparison — “For just the cost of a school lunch” — makes supporting the cause feel small, easy and almost selfish to refuse; (3) the contrast between things children are taught (“to swim”, “to cross a road”) and the untaught skill builds a sense of unfairness that demands action; (4) the redefinition “a wobbling voice is a brave voice” reassures the reader and lowers the barrier to taking part.',
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
        'Compare how the writer of Text 1 uses the quotation “Brave people are not people whose alarm never rings. They are people who have learned to keep acting while it is ringing.” and how the writer of Text 2 uses the quotation “You do not have to be fearless to be brave.” to reflect each writer’s purpose. In your answer you should comment on the writers’ use of language and the effect on the reader.',
      markScheme: {
        levelled: 'comparison',
        answer:
          'Indicative comparison: Text 1’s writer uses the calm, balanced contrast of an “alarm” that “never rings” against one that keeps “ringing”, with the metaphor casting fear as a constant background signal the brave simply act through — this reflects an explanatory purpose that leaves the reader understanding courage scientifically and feeling it is achievable. Text 2’s writer uses the blunt, reassuring negative “do not have to be fearless” to strip away the reader’s excuse and reflect a persuasive purpose designed to push the reader into action. Where Text 1 positions the reader as someone gaining understanding, Text 2 positions them as someone being directly challenged to do something.',
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
          'Accept either text. Reward a reasonable explanation of preference (e.g. Text 1 is appealing because it explains surprising facts such as the amygdala reacting in under a tenth of a second; Text 2 is appealing because its direct challenge and relatable examples make the reader feel spoken to).',
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
        'In Text 3, paragraph 3, the writer says Priya felt a “stubborn” certainty. Circle ONE word below that is closest in meaning to “stubborn” as it is used here.',
      options: ['gentle', 'determined', 'careless', 'cheerful'],
      markScheme: {
        answer: 'determined',
        notes: '1 mark for “determined” only.',
      },
    },
    {
      number: '18',
      typeId: 'short-retrieval',
      ao: 'RAO1',
      marks: 1,
      prompt: 'From Text 3, what was Mr Okafor reaching for when he was “ready to give up”?',
      markScheme: {
        answer: 'The register.',
        notes: '1 mark for “the register”.',
      },
    },
    {
      number: '19',
      typeId: 'inference',
      ao: 'RAO2',
      marks: 1,
      prompt: 'In Text 3, why does the memory of Daniel make Priya’s arm “press flatter still”?',
      markScheme: {
        answer:
          'Because remembering how Daniel was laughed at for a wrong answer increases her fear of the same thing happening to her, making her even less willing to raise her hand.',
        notes: '1 mark for a clear inference.',
      },
    },
    {
      number: '20',
      typeId: 'meaning-impact',
      ao: 'RAO5',
      marks: 2,
      prompt:
        'In Text 3 the writer says Priya “watched her own hand lift off the desk … as if it had made the choice a fraction of a second before she had.” What is the effect of describing her hand this way?',
      markScheme: {
        answer:
          'It suggests the brave act almost happened on its own, before fear could talk her out of it — capturing how sudden and barely-controlled courage can feel. Effect: makes the moment feel real and tense, and makes the reader admire how she acted despite herself.',
        notes:
          '1 mark for explaining the meaning of the hand acting on its own; 1 mark for the effect on the reader.',
      },
    },
    {
      number: '21',
      typeId: 'language-structure-analysis',
      ao: 'RAO4 + RAO5',
      marks: 4,
      prompt:
        'How does the writer of Text 3 use language and structure to show that Priya is afraid but finds the courage to speak? Make TWO developed points, each supported with evidence.',
      markScheme: {
        answer:
          'Indicative content (any two developed points): (1) the simile of the answer being “like a stone she could neither swallow nor put down” conveys how her fear physically traps her; (2) the personified “quiet, careful voice inside her” dramatises the inner conflict between fear and resolve; (3) the structural turning point — Mr Okafor’s “quiet surrender” reaching for the register — triggers her action, showing courage arriving at the last possible moment; (4) the short, broken final clause “still here” and the year-long “pause” stretch the tension and leave the reader sharing her relief.',
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
        'In Text 3, why is Priya “astonished to find that the hardest thing she had done all year was already over”?',
      markScheme: {
        answer:
          'Because the act she had been so afraid of turned out to be quick and survivable — the fear was far bigger than the thing itself, which surprises and relieves her.',
        notes:
          '1 mark for a clear inference about the fear being worse than the act / the relief of having done it.',
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
      'The texts in Section A all explore the theme of courage — what fear does inside us, a call to be brave with our voices, and one person finding the courage to speak in a single ordinary moment.',
    task: 'Write a story in which a character has to find the courage to do something they are afraid of.',
    bullets: [
      'Write to entertain a reader of your own age.',
      'Use the form and conventions of narrative writing (an engaging opening, a clear sense of place, a character the reader cares about).',
      'Organise your writing into clear, linked paragraphs.',
      'Use a range of sentence types and openings, accurate punctuation and ambitious vocabulary for effect.',
    ],
    markScheme: {
      wao1Indicative:
        'Reward (against the WAO1 grid, 18 marks): a strong narrative form with an engaging hook; a vivid, controlled sense of place and situation; a character whose fear and decision create tension and engage the reader; deliberate structural choices (e.g. a build of inner conflict, a turning point where courage is found, a controlled ending); writing fully appropriate to the audience and purpose (entertain). Higher marks for sophisticated audience awareness and stylistic features that fully support purpose.',
      wao2Indicative:
        'Reward (against the WAO2 grid, 12 marks): a range of sentence structures and openings used for effect; accurate and increasingly sophisticated punctuation (including commas, dashes, speech marks where used); largely accurate spelling with ambitious vocabulary choices used appropriately and confidently. Penalise frequent errors that impede meaning.',
    },
  },
}

// Convenience totals (computed, so they cannot drift from the data).
export const SECTION_A_MARKS = PRACTICE_PAPER_4.sectionA.reduce((sum, q) => sum + q.marks, 0)
export const SECTION_A_QUESTION_COUNT = PRACTICE_PAPER_4.sectionA.length
