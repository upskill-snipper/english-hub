/**
 * Eduqas GCSE English Literature (C720QS) Component 2: Post-1914 Prose/Drama,
 * 19th Century Prose and Unseen Poetry.
 *
 * CHECKED 24 October 2026 against Eduqas's own documents:
 *   - the Summer 2025 question paper and marking scheme (C720U20-1), linked
 *     from the Past Papers tab of eduqas.co.uk and served from WJEC's download
 *     host: question numbers, marks, the objectives each question assesses,
 *     the band ranges, the AO4 levels and the advised times;
 *   - the specification, Version 4 (August 2024): duration, 60% weighting
 *     and the set texts;
 *   - the Summer 2026 examiners' report: the same structure in 2026, with AO3
 *     assessed in Section B only and AO4 in Section A only.
 *
 * NUMBERING. The 2025 paper numbers Section A 01 to 10 (one question per set
 * text), Section B 21 to 26 (one per novel) and Section C 3.1 and 3.2, printed
 * in two boxes as 31 and 32.
 *
 * OBJECTIVE MARKS. Eduqas marks each question once, on one grid covering its
 * objectives, and states that they are "equally weighted"; it never gives a
 * number of marks per objective, except AO4, which has its own 5-mark grid in
 * Section A. So each question lists the objectives it assesses together under
 * one figure (for example 'AO1, AO2': 35), as the Cambridge guides group codes
 * that share marks, and a `rewards` line says they count equally. No figure
 * here is a share of a mark. The specification's weighting table (AO3 7.5% of
 * the qualification, which is 15 marks) does not quite agree with equal
 * weighting inside the Section B question (which would give AO3 13 and a
 * third); the guide states no per-objective figure, and follows the mark
 * scheme, which examiners mark with.
 *
 * SPELLING, PUNCTUATION AND GRAMMAR (AO4): 5 marks in this component, all on
 * the Section A question (post-1914 prose or drama). Sections B and C carry
 * none.
 *
 * WHERE THE AI MARKER'S DATA DIFFERS (src/lib/marking/mark-schemes/eduqas-lit.ts,
 * eduqasLitComp2). Total (120), duration (150 minutes), every question's
 * total, the AO4 marks and levels, and which objectives each question assesses
 * all agree. The differences are in how the marks are split:
 *   - marker: Section A AO1 18 + AO2 17 + AO4 5; board: 35 marks for AO1 and
 *     AO2, equally weighted on one grid, plus AO4 5 on its own grid.
 *   - marker: Section B AO1 14 + AO2 13 + AO3 13; board: 40 marks, AO1, AO2
 *     and AO3 equally weighted on one grid.
 *   - marker: Section C (a) AO1 8 + AO2 7; board: 15 marks, equally weighted.
 *   - marker: Section C (b) AO1 13 + AO2 12; board: 25 marks, equally weighted.
 *   - marker: each objective scored on its own ladder and the scores added;
 *     board: one best-fit mark per question from a single grid.
 *
 * SECOND CHECK, 24 October 2026 (an independent reader, against the same
 * documents and Eduqas's amplified assessment objectives). Fixed:
 *   - Objective marks were equal shares, some of them fractions (17.5, 12.5,
 *     7.5, 40/3); now each question lists its objectives together under one
 *     whole figure and `rewards` says they count equally (Summer 2025 mark
 *     scheme: one grid per question, "equally weighted").
 *   - The equal-weighting sentence moved out of each `task`, which now says
 *     only what the question asks.
 *   - Section A's rewards now say the bands are for its 35 AO1 and AO2 marks
 *     and AO4 is a separate mark out of 5 (the mark scheme's "35+5").
 *   - The Section A and B tasks, and the summary, said to start from the
 *     extract; the Summer 2025 paper asks for the extract and the whole text,
 *     in no set order. Now "using".
 *   - AO2's and AO4's plain lines repeated the objectives' own wording; now
 *     plain words. Band 3's "apt" quotations are now "suitable", a plainer
 *     word.
 *   - The checklist asked that Question 3.2 "compares in every paragraph";
 *     Eduqas credits comparison whether it is integrated or in a paragraph of
 *     its own (amplified assessment objectives). Reworded.
 *   - Question 3.1's "Wild guesses" line now says what to do: the papers
 *     print a sentence before the poems saying what both are about (sample
 *     assessment materials, Version 2 September 2024, and the Summer 2024 and
 *     Summer 2025 papers).
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'eduqas-lit-comp2',
  title: 'Eduqas English Literature Component 2',
  board: 'Eduqas',
  qualification: 'GCSE English Literature (C720QS)',
  paperName: 'Post-1914 Prose/Drama, 19th Century Prose and Unseen Poetry',
  durationMinutes: 150,
  totalMarks: 120,
  weighting: '60% of the GCSE',
  summary:
    'Three sections of 40 marks each: a question on your modern novel or play, a question on your 19th-century novel, each with a printed extract, and two questions on poems you have not seen before.',
  source: {
    document:
      'Eduqas GCSE English Literature Component 2 (C720U20-1) marking scheme and question paper, Summer 2025, checked with the specification (Version 4, August 2024) and the Summer 2026 examiners’ report',
    url: 'https://pastpapers.download.wjec.co.uk/S25/S25-C720U20-1-ms.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl: 'https://www.eduqas.co.uk/qualifications/english-literature-gcse/#tab_pastpapers',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Read, understand and respond to the text: give your own thoughtful view and back it up with references and quotations.',
    },
    {
      id: 'AO2',
      plain:
        'Explain how the writer’s choices of words, form and structure create meanings and effects, using subject terms where they help.',
    },
    {
      id: 'AO3',
      plain:
        'Show how a text connects with the contexts it was written in, such as its time, place, society and type of writing.',
    },
    {
      id: 'AO4',
      plain:
        'Write accurately: spell and punctuate correctly, and choose words and vary your sentences so your meaning is clear.',
    },
  ],
  sections: [
    {
      name: 'Section A: Post-1914 Prose/Drama',
      marks: 40,
      about:
        'One question on the modern novel or play you studied, using a printed extract and your knowledge of the whole text. You cannot take the text into the exam.',
      questions: [
        {
          label: 'Question 01 to 10 (answer the one on your text)',
          kind: 'Post-1914 prose or drama',
          marks: 40,
          objectives: [
            { id: 'AO1, AO2', marks: 35 },
            { id: 'AO4', marks: 5 },
          ],
          minutes: 45,
          task: 'Write about a character, relationship or theme and how it is presented at different points in the text, using the printed extract and your knowledge of the whole novel or play.',
          rewards: [
            'A clear line of argument that answers the question, using the extract and moments from across the whole text.',
            'Analysis of the writer’s language, form and structure, and for a play its dramatic methods, such as stage directions.',
            'Understanding of the characters and events, shown through the argument rather than a retelling.',
            'One mark out of 35 for understanding (AO1) and analysis (AO2), judged together on one grid and counting equally. The bands below are for these 35 marks.',
            'A separate mark out of 5 for accuracy (AO4): threshold (1 mark) where errors never block meaning, intermediate (2-3) for mostly accurate work with a good range, high (4-5) for accuracy and control throughout.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-7',
              looksLike:
                'Says a few basic things about the text, with loose references and vague comments on the writer’s methods.',
            },
            {
              name: 'Band 2',
              marks: '8-14',
              looksLike:
                'Partly answers the question and shows some knowledge of the text, with a few quotations and brief remarks on methods.',
            },
            {
              name: 'Band 3',
              marks: '15-21',
              looksLike:
                'Sticks to the question and understands the text, with suitable references and the first real analysis of methods and effects.',
            },
            {
              name: 'Band 4',
              marks: '22-28',
              looksLike:
                'Stays on the question throughout, with a confident grasp of the text, good references from the extract and beyond, and analysis that keeps getting deeper.',
            },
            {
              name: 'Band 5',
              marks: '29-35',
              looksLike:
                'Insightful from start to finish, with a view across the whole text, exactly the right references and analysis that weighs how the writer’s choices shape meaning.',
            },
          ],
          avoid: [
            'Writing only about the extract, or ignoring it.',
            'Retelling the story instead of answering the question.',
            'Misspelling the writer’s or characters’ names, or missing capital letters for names and titles.',
          ],
          tip: 'Use the extract as your starting point, then move to two or three other moments elsewhere in the text that answer the same question.',
          markerQuestionId: 'Section A',
        },
      ],
    },
    {
      name: 'Section B: 19th Century Prose',
      marks: 40,
      about:
        'One question on the 19th-century novel you studied, using a printed extract, your knowledge of the whole novel and its contexts.',
      questions: [
        {
          label: 'Question 21 to 26 (answer the one on your novel)',
          kind: '19th-century prose',
          marks: 40,
          objectives: [{ id: 'AO1, AO2, AO3', marks: 40 }],
          minutes: 45,
          task: 'Write about a character, relationship or theme and how it is presented at different points in the novel, using the printed extract and your knowledge of the whole novel, and referring to its contexts.',
          rewards: [
            'Moments from the extract and from across the novel.',
            'Analysis of the writer’s language, form and structure and their effects.',
            'Context woven into the argument: how the time, society or the writer’s purpose shapes what you are discussing.',
            'A clear, sustained answer to the question.',
            'One mark out of 40 for the whole answer: understanding (AO1), analysis (AO2) and context (AO3) are judged together on one grid and count equally.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-8',
              looksLike:
                'Says a few basic things about the novel, with loose references, vague comments on methods and little sense of context.',
            },
            {
              name: 'Band 2',
              marks: '9-16',
              looksLike:
                'Partly answers the question, with a few quotations, brief remarks on methods and some mention of context.',
            },
            {
              name: 'Band 3',
              marks: '17-24',
              looksLike:
                'Sticks to the question and understands the novel, with suitable references, the first real analysis of methods, and context that is relevant.',
            },
            {
              name: 'Band 4',
              marks: '25-32',
              looksLike:
                'Stays on the question throughout, with good references, analysis that keeps getting deeper and context that clearly shapes the argument.',
            },
            {
              name: 'Band 5',
              marks: '33-40',
              looksLike:
                'Insightful from start to finish, with a view across the whole novel, exactly the right references, analysis that weighs the writer’s choices and context built into every point.',
            },
          ],
          avoid: [
            'Context as a separate history lesson instead of part of the argument.',
            'Leaving context out: this is the only question in the component that assesses it.',
            'Writing only about the extract.',
          ],
          tip: 'Plan three or four points across the novel, and give each one a context link that explains why the writer presents things that way.',
          markerQuestionId: 'Section B',
        },
      ],
    },
    {
      name: 'Section C: Unseen Poetry',
      marks: 40,
      about:
        'Two questions on two 20th or 21st-century poems you have not seen before: one on the first poem, then a comparison of the two.',
      questions: [
        {
          label: 'Question 3.1',
          kind: 'Unseen poem',
          marks: 15,
          objectives: [{ id: 'AO1, AO2', marks: 15 }],
          minutes: 20,
          task: 'Write about the first poem and the effect it has on you: its subject, how it is put together, the ideas behind it and the effect of its words and images.',
          rewards: [
            'A clear personal reading of the poem, supported by short quotations.',
            'Analysis of language, imagery, form and structure and their effects on a reader.',
            'Any sensible interpretation, as long as the poem supports it.',
            'One mark out of 15 for the whole answer: understanding (AO1) and analysis (AO2) are judged together on one grid and count equally.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-3',
              looksLike:
                'Says a few basic things about the poem, with loose references and vague comments on its methods.',
            },
            {
              name: 'Band 2',
              marks: '4-6',
              looksLike:
                'Shows some understanding of the poem, with a few quotations and brief remarks on its methods.',
            },
            {
              name: 'Band 3',
              marks: '7-9',
              looksLike:
                'Understands the poem and sticks to the question, with suitable quotations and the first real analysis of methods and effects.',
            },
            {
              name: 'Band 4',
              marks: '10-12',
              looksLike:
                'A confident reading throughout, with good quotations and analysis that keeps getting deeper.',
            },
            {
              name: 'Band 5',
              marks: '13-15',
              looksLike:
                'Insightful from start to finish, with a view of the whole poem, exactly the right quotations and analysis that weighs how the poet’s choices shape meaning.',
            },
          ],
          avoid: [
            'Guessing what the poem is about: the sentence printed before the poems tells you what both are about.',
            'Spending time on context: it is not assessed in this section.',
            'Writing so much that Question 3.2, which is worth more, is rushed.',
          ],
          tip: 'Read the poem twice before you write: once for what it is about, once for how it is written.',
          markerQuestionId: 'Section C (a)',
        },
        {
          label: 'Question 3.2',
          kind: 'Unseen poetry comparison',
          marks: 25,
          objectives: [{ id: 'AO1, AO2', marks: 25 }],
          minutes: 40,
          task: 'Compare the second poem with the first: their subjects and how each is put together, the ideas behind them, their words and images, and how you respond to each.',
          rewards: [
            'Comparison throughout: similarities and differences in ideas, mood, language and structure.',
            'Detailed analysis of the second poem, not just a return to the first.',
            'Quotations from both poems, each with what it shows.',
            'Your own response to both poems, explained.',
            'One mark out of 25 for the whole answer: understanding (AO1) and analysis (AO2) count equally and are judged together on one grid, with comparison expected in both.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-5',
              looksLike: 'Barely compares, with loose references and vague comments on methods.',
            },
            {
              name: 'Band 2',
              marks: '6-10',
              looksLike:
                'Points out the obvious similarities or differences, with a few quotations and brief remarks on methods.',
            },
            {
              name: 'Band 3',
              marks: '11-15',
              looksLike:
                'Compares with focus and makes some sound links, with the first real analysis of methods and effects.',
            },
            {
              name: 'Band 4',
              marks: '16-20',
              looksLike:
                'Keeps the comparison going throughout, across ideas and methods, with good quotations from both poems.',
            },
            {
              name: 'Band 5',
              marks: '21-25',
              looksLike:
                'An insightful comparison from start to finish that ranges widely over both poems and weighs how their methods shape meaning.',
            },
          ],
          avoid: [
            'Repeating your Question 3.1 answer before adding a little on the second poem.',
            'Treating the poems separately, with no links between them.',
            'Giving one poem far more attention than the other.',
          ],
          tip: 'Plan three or four points of comparison, and in each paragraph write about both poems.',
          markerQuestionId: 'Section C (b)',
        },
      ],
    },
  ],
  timing: [
    'The paper is 2 hours 30 minutes. The board advises about 45 minutes for Section A, about 45 minutes for Section B and about one hour for Section C.',
    'Section C: about 20 minutes on Question 3.1 and about 40 minutes on Question 3.2, again the board’s advice.',
    'A suggestion, not the board’s: spend the first five minutes of each 45-minute essay planning, using the extract to find your first point.',
  ],
  checklist: [
    'One question answered in Section A, one in Section B and both questions in Section C.',
    'The Section A and B essays use the extract and the rest of the text.',
    'Context in Section B is linked to the question.',
    'Question 3.2 compares the two poems, not only writing about each one, and covers both in detail.',
    'In Section A, the writer’s and characters’ names are spelt correctly and titles have capital letters: 5 marks are for accuracy.',
  ],
}
