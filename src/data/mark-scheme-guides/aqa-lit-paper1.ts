/**
 * AQA GCSE English Literature (8702) Paper 1, Shakespeare and the
 * 19th-century novel: the plain-English guide behind its mark-scheme card.
 *
 * Checked on 24 October 2026 against AQA's own documents on aqa.org.uk:
 *   - the 8702/1 mark scheme for June 2025 (version 1.0 Final), the most
 *     recent on AQA's public site (June 2026's goes public on 9 July 2027),
 *     and the June 2025 question paper: one question from Section A and one
 *     from Section B; Questions 1 to 13 are each 30 marks (AO1 12, AO2 12,
 *     AO3 6), with 4 more for AO4 in Section A only; six levels for the 30
 *     marks, three performance bands for AO4; an answer that does not cover
 *     both the extract and the whole text can be capped at the top of Level
 *     2. Question numbers are as on that paper (one question for each of the
 *     six plays and seven novels in the specification);
 *   - the 8702 specification, version 1.3 (28 September 2022): 1 hour 45
 *     minutes, 64 marks, 40% of the GCSE, closed book.
 *   AQA prints no suggested times on this paper, so the minutes here are the
 *   guide's own suggestion from the marks, and say so.
 *
 * Compared with the AI marker's data (../../lib/marking/mark-schemes/aqa-lit-paper1.ts),
 * which is NOT changed here; the guide follows the board:
 *   - Total (64), duration (105 minutes) and both sections' marks and
 *     objective splits agree: Section A 34 (AO1 12, AO2 12, AO3 6, AO4 4),
 *     Section B 30 (AO1 12, AO2 12, AO3 6). The AO4 bands agree (Threshold 1,
 *     Intermediate 2-3, High 4).
 *   - Levels: marker: a separate ladder for each objective (AO1 and AO2 each
 *     six levels of 2 marks, 1-2 up to 11-12; AO3 three levels, 1-2, 3-4,
 *     5-6); board: one six-level grid for the whole 30 marks, AO1, AO2 and AO3
 *     judged together (Level 1 1-5, Level 2 6-10, Level 3 11-15, Level 4
 *     16-20, Level 5 21-25, Level 6 26-30).
 *   - Section B task: marker: a theme, character or moment in the novel; board:
 *     starts from a printed extract and then the novel as a whole, as Section
 *     A does with the play.
 *   - The board's cap (top of Level 2 when the extract or the whole text is
 *     left out) is not in the marker's data.
 *
 * Second check, 24 October 2026: each fix, and the document that settles it.
 *   - Level 3 (both sections): "explains parts of the answer" echoed the
 *     board's own Level 3 wording; reworded (June 2025 mark scheme).
 *   - Level 6 (both sections): said "original"; the board's top level asks for
 *     a critical, exploratory answer built around a concept, which is what it
 *     now says in plain words (June 2025 mark scheme).
 *   - Docblock: called June 2025 the most recent mark scheme AQA has
 *     published; centres have had June 2026's since results day, and it
 *     reaches the public site on 9 July 2027 (AQA, "Assessment materials:
 *     what's available when").
 *   - Every figure and every difference from the marker above was confirmed
 *     against the June 2025 mark scheme and question paper and the
 *     specification; none needed changing.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'aqa-lit-paper1',
  title: 'AQA English Literature Paper 1',
  board: 'AQA',
  qualification: 'GCSE English Literature (8702)',
  paperName: 'Shakespeare and the 19th-century novel',
  durationMinutes: 105,
  totalMarks: 64,
  weighting: '40% of the GCSE',
  summary:
    'Two essays, one on the Shakespeare play and one on the 19th-century novel you studied, each starting from a printed extract and moving out to the whole text. The exam is closed book, and only the Shakespeare essay carries the 4 marks for spelling, punctuation and grammar.',
  source: {
    document:
      'AQA GCSE English Literature 8702/1 mark scheme, June 2025 (version 1.0 Final), with the June 2025 question paper and the 8702 specification, version 1.3 (28 September 2022)',
    url: 'https://www.aqa.org.uk/files/fHDU1dLPgDwvQhfFoLGrnK/2963f9403378e2816a2606a45366dde1934b9a69.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/assessment-resources',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Give your own informed answer to the question, built as an argument and backed up with quotations and references.',
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
      name: 'Section A: Shakespeare',
      marks: 34,
      about:
        'One essay on the Shakespeare play you studied, starting from an extract printed on the paper. It is marked as a whole out of 30 in six levels, plus 4 separate marks for AO4 (spelling, punctuation and grammar), the only AO4 marks on this paper.',
      questions: [
        {
          label: 'Questions 1 to 6 (answer the one on your play)',
          kind: 'Extract and whole-play essay',
          marks: 34,
          objectives: [
            { id: 'AO1', marks: 12 },
            { id: 'AO2', marks: 12 },
            { id: 'AO3', marks: 6 },
            { id: 'AO4', marks: 4 },
          ],
          minutes: 55,
          task: 'There is one question on each of the six set plays. Read the printed extract, then write about how Shakespeare presents a character, relationship or idea, first in the extract and then in the play as a whole.',
          rewards: [
            'An argument that answers the exact question, using both the extract and the rest of the play.',
            'Close analysis of the extract: what particular words, images and dramatic choices show, and their effect on an audience.',
            'References to other key moments in the play, with short remembered quotations where you can.',
            'Context woven into the argument where it helps explain why the play presents things as it does.',
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
            'Writing only about the extract, or only about the rest of the play: an answer that leaves out either can be capped at the top of Level 2 (10 of 30).',
            'Context as a separate history lesson: it earns credit when it explains something in the play.',
            'Naming a technique without saying what it shows or what it does to an audience.',
            'Rushing the end: careless spelling and punctuation cost AO4 marks in this section.',
          ],
          tip: 'Give the extract a few minutes first and mark three or four details to analyse. Then plan two or three moments from elsewhere in the play that develop the same idea.',
          markerQuestionId: 'Section A',
        },
      ],
    },
    {
      name: 'Section B: The 19th-century novel',
      marks: 30,
      about:
        'One essay on the 19th-century novel you studied, starting from an extract printed on the paper. It is marked as a whole out of 30 in six levels. There are no AO4 marks in this section.',
      questions: [
        {
          label: 'Questions 7 to 13 (answer the one on your novel)',
          kind: 'Extract and whole-novel essay',
          marks: 30,
          objectives: [
            { id: 'AO1', marks: 12 },
            { id: 'AO2', marks: 12 },
            { id: 'AO3', marks: 6 },
          ],
          minutes: 50,
          task: 'There is one question on each of the seven set novels. Read the printed extract, then write about how the writer presents a character or idea, first in the extract and then in the novel as a whole.',
          rewards: [
            'A focused argument that answers the question across the extract and the whole novel.',
            "Close analysis of the extract: word choices, imagery, the narrator's voice and structure, and their effects on a reader.",
            'References to other key moments in the novel, with short remembered quotations where you can.',
            "Context, such as the attitudes and conditions of the time the novel was written, used to explain the writer's choices.",
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
          ],
          avoid: [
            'Leaving out either the extract or the rest of the novel: that answer can be capped at the top of Level 2 (10 of 30).',
            'Retelling the plot instead of answering the question.',
            'Spending so long on the extract that the whole novel gets one rushed paragraph.',
          ],
          tip: "Use the question's key words to plan a line of argument, then treat the extract as your first piece of evidence rather than a separate task.",
          markerQuestionId: 'Section B',
        },
      ],
    },
  ],
  timing: [
    'AQA does not print suggested times on this paper. These are suggestions based on the marks.',
    'Section A (34 marks): about 55 minutes, including about 5 to read the extract and plan, and a few at the end to check spelling and punctuation.',
    'Section B (30 marks): about 50 minutes, including about 5 to read the extract and plan.',
    'Keep to time whichever essay you write first: they are worth 34 and 30 marks, so neither can be left short.',
  ],
  checklist: [
    'Did both essays cover the extract and the whole text?',
    "Does each paragraph answer the question's key words, not just the topic in general?",
    "Have you named the writer's methods and said what they do?",
    'Section A: check spelling, punctuation and sentence control, because AO4 is marked there.',
    'Are your quotations short and accurate, and are names spelt correctly?',
  ],
}
