/**
 * AQA GCSE English Literature (8702) Paper 2, Modern texts and poetry: the
 * plain-English guide behind its mark-scheme card.
 *
 * Checked on 24 October 2026 against AQA's own documents on aqa.org.uk:
 *   - the 8702/2 mark scheme for June 2025 (version 1.0 Final), the most
 *     recent on AQA's public site (June 2026's goes public on 9 July 2027),
 *     and the June 2025 question paper: one question from Section A, one from
 *     Section B and both in Section C. Questions 1 to 24 are 30 marks (AO1
 *     12, AO2 12, AO3 6) plus 4 for AO4, which is assessed in Section A
 *     only; Questions 25 to 27 are 30 marks (AO1 12, AO2 12, AO3 6);
 *     Question 28.1 is 24 marks (AO1 12, AO2 12) in six levels; Question
 *     28.2 is 8 marks, AO2 alone, in four levels. A Section B answer that is
 *     not on the named poem and one other from the same cluster can be
 *     capped at the top of Level 2. Question numbers are as on that paper:
 *     two questions on each of the twelve modern texts and one on each of the
 *     three anthology clusters in the specification;
 *   - the 8702 specification, version 1.3 (28 September 2022): 2 hours 15
 *     minutes, 96 marks, 60% of the GCSE, closed book.
 *   AQA prints no suggested times on this paper, so the minutes here are the
 *   guide's own suggestion from the marks, and say so.
 *
 * Compared with the AI marker's data (../../lib/marking/mark-schemes/aqa-lit-paper2.ts)
 * as it stood when this guide was written; the guide follows the board. On
 * 24 October 2026, with the founder's approval (document 30), the marker was
 * corrected to follow the board on each difference below, and its docblock
 * records how:
 *   - Total (96), duration (135 minutes) and every question's marks and
 *     objective split agree: Section A 34 (AO1 12, AO2 12, AO3 6, AO4 4),
 *     Section B 30 (AO1 12, AO2 12, AO3 6), Section C (a) 24 (AO1 12, AO2
 *     12), Section C (b) 8 (AO2 8). The 8-mark question's four levels agree
 *     (1-2, 3-4, 5-6, 7-8), as do the AO4 bands.
 *   - Numbering: marker: the unseen questions are "Question 27.1" and
 *     "27.2"; board: since June 2025, when the third anthology cluster (Worlds
 *     and lives) was first examined, they are 28.1 and 28.2, and the anthology
 *     questions are 25 to 27.
 *   - Levels: marker: a separate ladder for each objective (AO1 and AO2 each
 *     six levels of 2 marks; AO3 three levels of 2 marks), shared with Paper
 *     1; board: one six-level grid for each whole answer: Sections A and B
 *     Level 1 1-5 up to Level 6 26-30, and Question 28.1 Level 1 1-4, Level 2
 *     5-8, Level 3 9-12, Level 4 13-16, Level 5 17-20, Level 6 21-24.
 *   - The board's Section B cap (top of Level 2) is not in the marker's data.
 *   - Telling Tales (Questions 15 and 16 in June 2025): board: the named story
 *     and one other, "whole text" meaning the two stories, and comparison is
 *     not assessed and should not be rewarded; none of this is in the
 *     marker's data, whose Section A treats every text alike.
 *
 * Second check, 24 October 2026: each fix, and the document that settles it.
 *   - Section A, Telling Tales: said only "two stories"; each question names
 *     one story and asks for one other of the student's choice (June 2025
 *     question paper and mark scheme, Questions 15 and 16).
 *   - Section A, Telling Tales: told students to avoid comparing; the board
 *     permits a comparative structure but does not reward comparison (June
 *     2025 mark scheme).
 *   - Section B cap: did not mention an answer that leaves out the named poem,
 *     the first case the board names (June 2025 mark scheme, rubric
 *     infringements).
 *   - Level 3 (Section A, 28.1) echoed the board's own Level 3 wording, and
 *     Level 6 (Sections A and B, 28.1) said "original" where the board asks
 *     for a critical, exploratory answer built around a concept; reworded
 *     (June 2025 mark scheme).
 *   - Docblock: called June 2025 the most recent mark scheme AQA has
 *     published; centres have had June 2026's since results day, and it
 *     reaches the public site on 9 July 2027 (AQA, "Assessment materials:
 *     what's available when").
 *   - The Telling Tales difference from the marker above was added.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'aqa-lit-paper2',
  title: 'AQA English Literature Paper 2',
  board: 'AQA',
  qualification: 'GCSE English Literature (8702)',
  paperName: 'Modern texts and poetry',
  durationMinutes: 135,
  totalMarks: 96,
  weighting: '60% of the GCSE',
  summary:
    'Three sections: an essay on the modern play or novel you studied, a comparison of two poems from your anthology cluster, and two questions on poems you have not seen before. The exam is closed book, and only the Section A essay carries the 4 marks for spelling, punctuation and grammar.',
  source: {
    document:
      'AQA GCSE English Literature 8702/2 mark scheme, June 2025 (version 1.0 Final), with the June 2025 question paper and the 8702 specification, version 1.3 (28 September 2022)',
    url: 'https://www.aqa.org.uk/files/2vT3LmcUzNO62qpl9JVdKx/49efd01e02032667f676ec38406415c17aaed3db.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/assessment-resources',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Give your own informed answer to the question, built as an argument and backed up with quotations and references. In Section B this includes the comparison itself.',
    },
    {
      id: 'AO2',
      plain:
        'Analyse how the writer uses language, form and structure to create meanings and effects, using subject terms where they help.',
    },
    {
      id: 'AO3',
      plain:
        'Show how the text connects to its context: the time and society it was written in or is set in, and the ideas and attitudes of that time.',
    },
    {
      id: 'AO4',
      plain:
        'Spelling, punctuation and grammar: spell and punctuate accurately, and use a range of vocabulary and sentence structures that make your meaning clear. On this paper only Section A carries AO4 marks, 4 of them.',
    },
  ],
  sections: [
    {
      name: 'Section A: Modern prose or drama',
      marks: 34,
      about:
        'One essay on the modern play or novel you studied, from a choice of two questions. No extract is printed. It is marked as a whole out of 30 in six levels, plus 4 separate marks for AO4 (spelling, punctuation and grammar), the only AO4 marks on this paper.',
      questions: [
        {
          label: 'Questions 1 to 24 (answer one of the two on your text)',
          kind: 'Whole-text essay',
          marks: 34,
          objectives: [
            { id: 'AO1', marks: 12 },
            { id: 'AO2', marks: 12 },
            { id: 'AO3', marks: 6 },
            { id: 'AO4', marks: 4 },
          ],
          minutes: 45,
          task: 'Choose one of the two questions on your text. Each asks how the writer presents a character, relationship or idea across the whole text, and there is no extract, so you write from memory. If you studied the short-story collection Telling Tales, each question names one story and asks you to write about it and one other story of your choice from the collection.',
          rewards: [
            'A clear argument that answers the question across the whole text, from beginning to end.',
            'Remembered quotations and close references to key moments, each analysed for what it shows.',
            "The writer's methods: in a play, dialogue, stage directions and how scenes are built; in a novel, the narrator, language and structure.",
            "Context linked to the writer's purpose and ideas.",
            'Accurate spelling and punctuation, with a range of vocabulary and sentence structures: these earn the separate 4 marks for AO4.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-5',
              looksLike:
                'Mostly retells or describes what happens. Comments are basic, references are few, and there is only a hint that the writer made choices.',
            },
            {
              name: 'Level 2',
              marks: '6-10',
              looksLike:
                "Makes relevant points with references to back them, picks out some of the writer's methods, and touches on ideas and context.",
            },
            {
              name: 'Level 3',
              marks: '11-15',
              looksLike:
                'Starts to explain points rather than just stating them. References support the points, methods get some comment with a few subject terms, and context is linked in places.',
            },
            {
              name: 'Level 4',
              marks: '16-20',
              looksLike:
                'Answers the whole task with a steady focus: explains how methods create effects with suitable terms, backs every point up, and shows a secure grasp of ideas and context.',
            },
            {
              name: 'Level 5',
              marks: '21-25',
              looksLike:
                'Builds a well-developed argument with quotations fitted smoothly into the writing, looks closely at how methods create effects, and uses context to add depth or other possible readings.',
            },
            {
              name: 'Level 6',
              marks: '26-30',
              looksLike:
                'Builds the whole essay around a confident big idea about the text and explores it: exact, well-chosen quotations, very close analysis of methods and their effects, and ideas, context and different readings handled with skill.',
            },
            {
              name: 'AO4 Threshold performance',
              marks: '1',
              looksLike:
                'Spelling and punctuation are mostly right, with some range of words and sentences. Mistakes never get in the way of the meaning.',
            },
            {
              name: 'AO4 Intermediate performance',
              marks: '2-3',
              looksLike:
                'Spelling and punctuation are accurate most of the time, and a good range of vocabulary and sentence types keeps the points clear.',
            },
            {
              name: 'AO4 High performance',
              marks: '4',
              looksLike:
                'Spelling and punctuation are accurate throughout, and vocabulary and sentences are handled so well that every point is exact and clear.',
            },
          ],
          avoid: [
            'Retelling the plot in order instead of building an argument.',
            "Writing about characters as if they were real people rather than the writer's creations.",
            'Choosing a question too quickly: take a minute to pick the one you can answer best.',
            'Spending time comparing the two Telling Tales stories: you may link them, but comparison itself earns no marks in this section.',
          ],
          tip: 'Plan four or five paragraphs. Each needs a point that answers the question, a key moment from a different part of the text, and a link to what the writer wanted the audience or reader to think.',
          markerQuestionId: 'Section A',
        },
      ],
    },
    {
      name: 'Section B: Poetry',
      marks: 30,
      about:
        'One comparison question on the anthology cluster you studied (a cluster is a group of 15 linked poems: Love and relationships, Power and conflict, or Worlds and lives). It is marked as a whole out of 30 in six levels, with no AO4 marks.',
      questions: [
        {
          label: 'Question 25, 26 or 27 (answer the one on your cluster)',
          kind: 'Anthology poetry comparison',
          marks: 30,
          objectives: [
            { id: 'AO1', marks: 12 },
            { id: 'AO2', marks: 12 },
            { id: 'AO3', marks: 6 },
          ],
          minutes: 45,
          task: 'Compare how two poems present an idea or feeling: the poem named in the question, which is printed on the paper, and one other poem of your choice from the same cluster, which you write about from memory.',
          rewards: [
            'A comparison that runs through the whole answer: similarities and differences in ideas and in methods.',
            'Analysis of both poems: language, imagery, form (the type and shape of a poem, such as a sonnet) and structure, and their effects.',
            'Quotations from the printed poem, and remembered quotations or close references from your chosen poem.',
            "Context for both poems, used to explain the poets' ideas.",
            'A second poem chosen because it links well to the question.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-5',
              looksLike:
                'Notices basic links between the poems, mostly by describing them, with a few relevant details.',
            },
            {
              name: 'Level 2',
              marks: '6-10',
              looksLike:
                'Makes comparisons backed by references, picks out some methods, and touches on ideas and context.',
            },
            {
              name: 'Level 3',
              marks: '11-15',
              looksLike:
                'Explains some points of comparison with relevant references, comments on methods with a few subject terms, and links context in places.',
            },
            {
              name: 'Level 4',
              marks: '16-20',
              looksLike:
                "Keeps a steady comparison going, explaining how each poet's methods create effects with suitable terms, with a secure grasp of ideas and context.",
            },
            {
              name: 'Level 5',
              marks: '21-25',
              looksLike:
                'Builds a well-developed comparison with quotations fitted smoothly into the writing, looks closely at methods in both poems, and uses context to add depth.',
            },
            {
              name: 'Level 6',
              marks: '26-30',
              looksLike:
                'Builds the whole comparison around a confident big idea and explores it: exact, well-chosen quotations, very close analysis of both poems, and ideas, context and different readings handled with skill.',
            },
          ],
          avoid: [
            'Leaving out the named poem, writing about only one poem, or choosing a second poem from another cluster: that answer can be capped at the top of Level 2 (10 of 30).',
            'Writing about one poem and then the other, leaving the comparison to the last paragraph.',
            'Picking a second poem you know well that does not suit the question.',
          ],
          tip: 'Before you write, choose the second poem and jot down three points of comparison, each with a quotation from each poem.',
          markerQuestionId: 'Section B',
        },
      ],
    },
    {
      name: 'Section C: Unseen poetry',
      marks: 32,
      about:
        'Two questions on poems you have not studied, both printed on the paper. Answer both. They are marked differently: 28.1 is an essay on one poem, marked out of 24 in six levels for your response and your analysis together (AO1 and AO2, 12 marks each); 28.2 compares the two poems and is marked out of 8 in four levels for analysis of methods alone (AO2). Neither carries marks for context or for AO4.',
      questions: [
        {
          label: 'Question 28.1',
          kind: 'Unseen poem essay',
          marks: 24,
          objectives: [
            { id: 'AO1', marks: 12 },
            { id: 'AO2', marks: 12 },
          ],
          minutes: 35,
          task: 'Read the first unseen poem and write about how the poet presents the idea or feeling the question names.',
          rewards: [
            'A clear reading of what the poem says about the idea in the question, built up as you go.',
            "Analysis of the poet's language, imagery, form and structure, and their effects on the reader.",
            'Short quotations from across the poem: beginning, middle and end.',
            'More than one possible meaning explored where the poem allows it.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-4',
              looksLike:
                'Says some basic things about the poem, with a little relevant detail and a hint that the poet made choices.',
            },
            {
              name: 'Level 2',
              marks: '5-8',
              looksLike:
                "Backs up relevant comments with quotations and picks out some of the poet's methods.",
            },
            {
              name: 'Level 3',
              marks: '9-12',
              looksLike:
                'Starts to explain what parts of the poem show about the idea in the question, with relevant quotations and some comment on methods using subject terms.',
            },
            {
              name: 'Level 4',
              marks: '13-16',
              looksLike:
                'Reads the poem securely and explains how its methods create effects, with suitable terms and well-chosen quotations.',
            },
            {
              name: 'Level 5',
              marks: '17-20',
              looksLike:
                "Builds a detailed interpretation, with quotations fitted smoothly into the writing and close examination of the poet's methods.",
            },
            {
              name: 'Level 6',
              marks: '21-24',
              looksLike:
                "Builds a confident reading of the whole poem around a big idea, with exact quotations and very close analysis of how the poet's methods shape meaning.",
            },
          ],
          avoid: [
            "Bringing in context or the poet's life: there are no AO3 marks here.",
            'Working line by line and describing, instead of building an answer to the question.',
            'Running over time: 28.2 still needs about 10 minutes.',
          ],
          tip: 'Read the poem twice, once for its overall meaning and once for how it is built, then plan three points that move through the poem.',
          markerQuestionId: 'Section C (a)',
        },
        {
          label: 'Question 28.2',
          kind: 'Comparing methods in two unseen poems',
          marks: 8,
          objectives: [{ id: 'AO2', marks: 8 }],
          minutes: 10,
          task: 'A second unseen poem on a similar idea is printed. Compare the methods the two poets use: what is similar and/or different about how the two poems present the idea.',
          rewards: [
            'Methods compared directly: language, imagery, tone, form and structure in both poems.',
            "The effect of each method set beside the other poet's choice: how they work alike or differently.",
            'Short quotations from both poems.',
            'Subject terms used correctly.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-2',
              looksLike:
                'Points out a basic link between the poems, or says something about one of them, and may name a method.',
            },
            {
              name: 'Level 2',
              marks: '3-4',
              looksLike:
                'Sets the poems side by side and says how the effects of some methods are alike or different.',
            },
            {
              name: 'Level 3',
              marks: '5-6',
              looksLike:
                'Compares well-chosen methods from both poems and explains clearly how their effects differ or match.',
            },
            {
              name: 'Level 4',
              marks: '7-8',
              looksLike:
                "Analyses the poets' methods together in close detail, with sharp, precise points about why their effects differ or match.",
            },
          ],
          avoid: [
            'A second essay on what the poems mean: the marks are only for comparing methods.',
            'Writing about each poem separately without linking them.',
            'Spending much longer than 10 minutes: it is worth 8 marks.',
          ],
          tip: 'Pick two or three methods to compare, such as imagery, voice or structure. For each, write a sentence on each poem and one on how they differ or match.',
          markerQuestionId: 'Section C (b)',
        },
      ],
    },
  ],
  timing: [
    'AQA does not print suggested times on this paper. These are suggestions based on the marks.',
    'Section A (34 marks): about 45 minutes, leaving a few minutes to check spelling and punctuation for AO4.',
    'Section B (30 marks): about 45 minutes, including a few minutes to read the printed poem and choose your second poem.',
    'Section C (32 marks): about 45 minutes, roughly 35 on 28.1 (including two careful readings of the poem) and 10 on 28.2.',
  ],
  checklist: [
    'Section A: check spelling, punctuation and sentence control, because AO4 is marked there.',
    'Section B: does your answer compare the named poem with one other poem from the same cluster?',
    'Section C: have you answered both 28.1 and 28.2?',
    'Question 28.2: are you comparing how the poems are written, not only what they say?',
    'Are the titles, poets and character names you mention spelt correctly?',
  ],
}
