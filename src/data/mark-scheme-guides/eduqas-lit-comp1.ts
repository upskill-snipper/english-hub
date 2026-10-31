/**
 * Eduqas GCSE English Literature (C720QS) Component 1: Shakespeare and Poetry.
 *
 * CHECKED 24 October 2026 against Eduqas's own documents:
 *   - the Summer 2025 question paper and marking scheme (C720U10-1), linked
 *     from the Past Papers tab of eduqas.co.uk and served from WJEC's download
 *     host: question numbers, marks, the objectives each question assesses,
 *     the band ranges, the AO4 levels and the advised times;
 *   - the specification, Version 4 (August 2024): duration, 40% weighting,
 *     the set plays, and the new poetry anthology examined from 2027;
 *   - the Summer 2026 examiners' report and the September 2026 newsletter:
 *     the same structure in 2026, the last series on the old anthology, and a
 *     new anthology of 15 poems from summer 2027.
 *
 * NUMBERING. The 2025 and 2026 papers number Section A by play: 1.1 and 1.2
 * for the first play listed up to 6.1 and 6.2 for the sixth, and Section B
 * 7.1 and 7.2. The guide names the Shakespeare questions by position.
 *
 * OBJECTIVE MARKS. Eduqas marks each question once, on one grid covering its
 * objectives, and states that they are "equally weighted"; it never gives a
 * number of marks per objective, except AO4, which has its own 5-mark grid on
 * the Shakespeare essay. So each question lists the objectives it assesses
 * together under one figure (for example 'AO1, AO2': 15), as the Cambridge
 * guides group codes that share marks, and a `rewards` line says they count
 * equally. No figure here is a share of a mark. The specification's weighting
 * table (AO3 7.5% of the qualification, which is 15 marks) does not quite
 * agree with equal weighting inside each question (which would give AO3 13
 * and a third in Section B); the guide states no per-objective figure, and
 * follows the mark scheme, which examiners mark with.
 *
 * SPELLING, PUNCTUATION AND GRAMMAR (AO4): 5 marks in this component, all on
 * the Shakespeare essay (the second question on each play). The extract
 * question and Section B carry none.
 *
 * THE AI MARKER (src/lib/marking/mark-schemes/eduqas-lit.ts, eduqasLitComp1)
 * WAS CORRECTED TO THIS GUIDE on 24 October 2026, with the founder's approval
 * (document 30): each question is now one grid covering its objectives
 * ('AO1-AO2' or 'AO1-AO3') at this guide's band ranges, with AO4 on its own
 * 5-mark grid on the essay, and the anthology comparison carries this guide's
 * rule that an unbalanced answer cannot reach the higher bands;
 * __tests__/eduqas-lit-structure.test.ts in that folder holds it to this
 * guide. Until then its total (80), duration (120 minutes), every question's
 * total, the AO4 marks and levels, and which objectives each question
 * assesses all agreed. The differences were in how the marks were split:
 *   - marker: Section A (a) AO1 8 + AO2 7; board: 15 marks, AO1 and AO2
 *     equally weighted on one grid.
 *   - marker: Section B (b) AO1 9 + AO2 8 + AO3 8; board: 25 marks, AO1, AO2
 *     and AO3 equally weighted on one grid.
 *   - marker: each objective scored on its own ladder and the scores added;
 *     board: one best-fit mark per question from a single grid (plus the
 *     separate AO4 grid on the essay).
 *
 * SECOND CHECK, 24 October 2026 (an independent reader, against the same
 * documents and Eduqas's amplified assessment objectives). Fixed:
 *   - Objective marks were equal shares, some of them fractions (7.5, 25/3);
 *     now each question lists its objectives together under one whole figure
 *     and `rewards` says they count equally (Summer 2025 mark scheme: one grid
 *     per question, "equally weighted").
 *   - The equal-weighting sentence moved out of each `task`, which now says
 *     only what the question asks.
 *   - The essay's rewards now say the bands are for its 20 AO1 and AO2 marks
 *     and AO4 is a separate mark out of 5 (the mark scheme's "20+5").
 *   - The extract question gains an `avoid` line on events outside the
 *     extract, which the Summer 2026 report names as time wasted.
 *   - AO2's and AO4's plain lines repeated the objectives' own wording; now
 *     plain words. Question 7.2's task repeated the paper's bullet wording;
 *     reworded. Band 3's "apt" quotations are now "suitable", a plainer word.
 *   - The checklist asked that "every paragraph compares"; Eduqas credits
 *     comparison whether it is integrated or in a paragraph of its own
 *     (amplified assessment objectives). It now asks that the poems are
 *     compared, not only written about one by one.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'eduqas-lit-comp1',
  title: 'Eduqas English Literature Component 1',
  board: 'Eduqas',
  qualification: 'GCSE English Literature (C720QS)',
  paperName: 'Shakespeare and Poetry',
  durationMinutes: 120,
  totalMarks: 80,
  weighting: '40% of the GCSE',
  summary:
    'Section A is on the Shakespeare play you studied: a question on a printed extract, then an essay on the whole play. Section B is on the Eduqas Poetry Anthology: a question on a printed poem, then a comparison with a second anthology poem you choose.',
  source: {
    document:
      'Eduqas GCSE English Literature Component 1 (C720U10-1) marking scheme and question paper, Summer 2025, checked with the specification (Version 4, August 2024) and the Summer 2026 examiners’ report',
    url: 'https://pastpapers.download.wjec.co.uk/S25/S25-C720U10-1-ms.pdf',
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
      name: 'Section A: Shakespeare',
      marks: 40,
      about:
        'Two questions on the play you studied, one on a printed extract and one essay on the whole play. You cannot take the play into the exam.',
      questions: [
        {
          label: 'First question on your play (1.1 to 6.1)',
          kind: 'Shakespeare extract',
          marks: 15,
          objectives: [{ id: 'AO1, AO2', marks: 15 }],
          minutes: 20,
          task: 'Read the printed extract and answer the question on it, for example what the characters say and do there and how an audience might react.',
          rewards: [
            'A clear focus on the question, kept up to the end.',
            'Close reference to the extract, with short quotations from across it.',
            'Analysis of Shakespeare’s language and dramatic methods (for example imagery, verse or prose, stage directions) and their effect on an audience, with subject terms used accurately where they help.',
            'One mark out of 15 for the whole answer: your understanding (AO1) and your analysis (AO2) are judged together on one grid and count equally.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-3',
              looksLike:
                'Says a few basic things about the extract, with loose references and vague comments on language; terms may be wrong.',
            },
            {
              name: 'Band 2',
              marks: '4-6',
              looksLike:
                'Partly answers the question and shows some understanding, with a few quotations and brief remarks on the language.',
            },
            {
              name: 'Band 3',
              marks: '7-9',
              looksLike:
                'Sticks to the question and understands the extract, with suitable quotations and the first real analysis of language and its effects.',
            },
            {
              name: 'Band 4',
              marks: '10-12',
              looksLike:
                'Stays on the question throughout, with a confident grasp of the extract, good quotations and analysis of language that keeps getting deeper.',
            },
            {
              name: 'Band 5',
              marks: '13-15',
              looksLike:
                'Insightful from start to finish: it sees how the extract fits the play, uses exactly the right quotations and weighs how language, form and structure shape meaning.',
            },
          ],
          avoid: [
            'Retelling the scene instead of analysing it.',
            'Writing about events elsewhere in the play: a sentence placing the extract is enough.',
            'Spending time on context: it is not assessed here, so it helps only where it explains the extract.',
            'Answering on more than one play.',
          ],
          tip: 'Work through the extract in order, choosing three or four moments, and for each say what it shows and how Shakespeare’s words create the effect.',
          markerQuestionId: 'Section A (a)',
        },
        {
          label: 'Second question on your play (1.2 to 6.2)',
          kind: 'Shakespeare essay',
          marks: 25,
          objectives: [
            { id: 'AO1, AO2', marks: 20 },
            { id: 'AO4', marks: 5 },
          ],
          minutes: 40,
          task: 'Write an essay about a character, relationship or theme across the whole play and how Shakespeare presents it. There is no extract, so you use what you know and remember of the play.',
          rewards: [
            'Knowledge of the whole play: moments from its beginning, middle and end, with remembered quotations or close references, each linked to the question.',
            'Comment on how Shakespeare presents the idea through language and dramatic methods, in a clear line of argument that answers the question.',
            'One mark out of 20 for understanding (AO1) and analysis (AO2), judged together on one grid and counting equally. The bands below are for these 20 marks.',
            'A separate mark out of 5 for accuracy (AO4): threshold (1 mark) where errors never block meaning, intermediate (2-3) for mostly accurate work with a good range, high (4-5) for accuracy and control throughout.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-4',
              looksLike:
                'Says a few basic things about the play, with loose references and vague comments on Shakespeare’s methods.',
            },
            {
              name: 'Band 2',
              marks: '5-8',
              looksLike:
                'Partly answers the question and shows some knowledge of the play, with a few quotations and brief remarks on methods.',
            },
            {
              name: 'Band 3',
              marks: '9-12',
              looksLike:
                'Sticks to the question and understands the play, with suitable references and the first real analysis of methods and effects.',
            },
            {
              name: 'Band 4',
              marks: '13-16',
              looksLike:
                'Stays on the question throughout, with a confident grasp of the whole play, good references and analysis that keeps getting deeper.',
            },
            {
              name: 'Band 5',
              marks: '17-20',
              looksLike:
                'Insightful from start to finish, with a view across the whole play, exactly the right references and analysis that weighs how Shakespeare’s choices shape meaning.',
            },
          ],
          avoid: [
            'Writing about only one or two scenes.',
            'Retelling the plot instead of answering the question.',
            'Misspelt character names and missing capital letters, which cost accuracy marks.',
          ],
          tip: 'Plan four or five points from different parts of the play, each with a quotation you know well.',
          markerQuestionId: 'Section A (b)',
        },
      ],
    },
    {
      name: 'Section B: Poetry',
      marks: 40,
      about:
        'Two questions on the Eduqas Poetry Anthology, which from summer 2027 is the new anthology of 15 poems: one on a printed poem and one comparing it with a poem you choose. You cannot take the anthology into the exam.',
      questions: [
        {
          label: 'Question 7.1',
          kind: 'Anthology poem',
          marks: 15,
          objectives: [{ id: 'AO1, AO2, AO3', marks: 15 }],
          minutes: 20,
          task: 'Write about how the poet presents a theme or idea in the named anthology poem, which is printed on the paper, including its contexts.',
          rewards: [
            'A personal, focused answer to the question about the poem.',
            'Short quotations from across the poem, with what each shows.',
            'Analysis of the poet’s language, form and structure and their effects.',
            'Relevant context, such as when and why the poem was written, linked to what the poem means.',
            'One mark out of 15 for the whole answer: understanding (AO1), analysis (AO2) and context (AO3) are judged together on one grid and count equally.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-3',
              looksLike:
                'Says a few basic things about the poem, with loose references, vague comments on language and little sense of context.',
            },
            {
              name: 'Band 2',
              marks: '4-6',
              looksLike:
                'Partly answers the question, with a few quotations, brief remarks on the poet’s methods and some mention of context.',
            },
            {
              name: 'Band 3',
              marks: '7-9',
              looksLike:
                'Sticks to the question and understands the poem, with suitable quotations, the first real analysis of methods, and context that is relevant.',
            },
            {
              name: 'Band 4',
              marks: '10-12',
              looksLike:
                'Stays on the question throughout, with good quotations, analysis that keeps getting deeper and context that clearly helps explain the poem.',
            },
            {
              name: 'Band 5',
              marks: '13-15',
              looksLike:
                'Insightful from start to finish, with exactly the right quotations, analysis that weighs the poet’s choices and context built into the argument.',
            },
          ],
          avoid: [
            'Leaving out context: it is assessed here alongside AO1 and AO2.',
            'Context as separate facts that are never linked to the poem.',
            'Spending much more than 20 minutes: the comparison that follows is worth more.',
          ],
          tip: 'Spend two minutes marking up the printed poem: underline four or five phrases you will use and note one context point that explains them.',
          markerQuestionId: 'Section B (a)',
        },
        {
          label: 'Question 7.2',
          kind: 'Anthology comparison',
          marks: 25,
          objectives: [{ id: 'AO1, AO2, AO3', marks: 25 }],
          minutes: 40,
          task: 'Choose another anthology poem on the same theme and compare it with the named poem: what each poem is about and how it is built, how the poets create effects, and the contexts of both. Only the named poem is printed, so you write about your choice from memory.',
          rewards: [
            'A comparison kept up throughout, covering similarities and differences.',
            'Balance: real detail on both poems.',
            'Remembered quotations from your chosen poem, analysed for their effects.',
            'The contexts of both poems and how they may shape the ideas in them.',
            'One mark out of 25 for the whole answer: understanding (AO1), analysis (AO2) and context (AO3) count equally and are judged together on one grid, with comparison expected in all three.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-5',
              looksLike: 'Barely compares, with loose references and little on methods or context.',
            },
            {
              name: 'Band 2',
              marks: '6-10',
              looksLike:
                'Points out the obvious similarities or differences, with a few quotations, brief remarks on methods and some mention of context.',
            },
            {
              name: 'Band 3',
              marks: '11-15',
              looksLike:
                'Compares with focus and makes some sound links, with the first real analysis of methods and relevant context.',
            },
            {
              name: 'Band 4',
              marks: '16-20',
              looksLike:
                'Keeps the comparison going throughout, across content, methods and context, with good quotations from both poems.',
            },
            {
              name: 'Band 5',
              marks: '21-25',
              looksLike:
                'An insightful comparison from start to finish that ranges widely over both poems’ ideas, methods and contexts.',
            },
          ],
          avoid: [
            'Writing about the two poems separately, with no links.',
            'Choosing a poem that does not fit the theme, or one you cannot quote from.',
            'Spending most of the answer on the printed poem: an unbalanced answer cannot reach the higher bands.',
          ],
          tip: 'Before the exam, prepare four or five anthology poems you could pair with almost any theme, each with quotations and a context point.',
          markerQuestionId: 'Section B (b)',
        },
      ],
    },
  ],
  timing: [
    'The paper is 2 hours. The board advises about one hour for each section, and the times below are its advice too.',
    'Section A: about 20 minutes on the extract question and about 40 minutes on the essay.',
    'Section B: about 20 minutes on Question 7.1 and about 40 minutes on Question 7.2.',
    'A suggestion, not the board’s: use the first few minutes of each 40-minute answer to plan, and keep two minutes to check the Shakespeare essay, where 5 marks are for accuracy.',
  ],
  checklist: [
    'Both Section A questions are on the same play, the one you studied.',
    'The Shakespeare essay uses moments from across the whole play.',
    'Your Question 7.2 poem comes from the anthology and fits the theme, and you have compared the two poems, not only written about each one.',
    'Context in Section B is linked to what the poems mean.',
    'In the essay, character names, the playwright’s name and capital letters are correct.',
  ],
}
