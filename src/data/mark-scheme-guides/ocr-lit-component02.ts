/**
 * OCR GCSE English Literature (J352), Component 02: Exploring poetry and
 * Shakespeare.
 *
 * Checked on 24 October 2026 against OCR's J352/02 mark scheme for June 2024 (the
 * intended weighting of each objective in each part, its AO grid, the level ranges
 * and the rubric rules), the J352 specification (Version 3.0, November 2025: 2
 * hours, 80 marks, 50%, 25% per section, AO weightings), the June 2018 mark scheme
 * (the same weightings and level ranges; it has no AO grid page and states no
 * rubric caps) and the June 2024 question paper (question numbers and OCR's
 * timing advice). ocr.org.uk was down for scheduled maintenance that morning, so
 * each PDF was read from the Internet Archive's capture of its ocr.org.uk
 * address. The URLs below are OCR's own.
 *
 * SECOND CHECK, 24 October 2026. ocr.org.uk still showed its maintenance page, so
 * every figure was read again from Internet Archive captures of OCR's own URLs:
 * the June 2024 mark scheme and question paper and the June 2023 mark scheme
 * (captured 2 May 2026), the June 2018 mark scheme (captured 21 December 2022)
 * and the specification Version 3.0 (captured 1 October 2026). Every tariff,
 * objective split, level range, rubric rule, question number and timing in the
 * guide was confirmed; the June 2023 mark scheme has the same weightings, AO grid
 * and rubric caps as June 2024. The marker's figures were read from its own data,
 * not its comments (.tmp-guides/check-ocr-marker.ts). Fixes made:
 * - The June 2018 mark scheme was described as having "the same weightings and
 *   grid"; it has the weightings and level ranges but no AO grid page. Corrected.
 * - "Apt quotations" in three Level 5 lines is now "well-suited quotations", a
 *   plainer word for a 14-year-old.
 * - Added the marker's own ladders to the difference of method below.
 *
 * THE MARKER NOW MARKS AS OCR DOES (24 October 2026). With the founder's approval
 * (document 30), ocrLitComponent02 in src/lib/marking/mark-schemes/ocr-lit.ts
 * marks each part on one grid of 20 at OCR's six ranges (id 'AO1-AO2'), and
 * Section B on one grid of 36 for AO1 to AO3 plus AO4 on its own grid of 1, 2-3
 * and 4, with the caps below in its examiner notes; Section B keeps its id.
 * src/lib/marking/mark-schemes/__tests__/ocr-lit-structure.test.ts holds it to
 * this guide. The next paragraph is the difference until then.
 *
 * AGAINST THE AI MARKER, UNTIL 24 OCTOBER 2026 (ocrLitComponent02 in
 * src/lib/marking/mark-schemes/ocr-lit.ts): the total (80), the duration (120) and
 * every tariff and objective split agree: part (a) 20 (AO1 8, AO2 12), part (b) 20
 * (AO1 10, AO2 10), Section B 40 (AO1 14, AO2 14, AO3 8, AO4 4). One difference of
 * method: the marker scored each objective on its own ladder, where OCR marks each
 * answer as a whole on one six-level grid (1-3, 4-6, 7-10, 11-14, 15-17, 18-20 for
 * a part; 1-6 up to 31-36 for Section B's AO1 to AO3), with AO4 on its own grid of
 * 1, 2-3 and 4. The marker's AO4 ladder is OCR's. Its other ladders, after
 * scaleAO: part (a) AO1 1, 2-3, 4, 5, 6-7, 8 and AO2 six two-mark levels up to 12;
 * part (b) AO1 and AO2 each 1-2, 3, 4-5, 6-7, 8, 9-10; Section B AO1 and AO2 each
 * 1-2, 3-5, 6-7, 8-9, 10-12, 13-14, and AO3 three levels, 1-3, 4-5, 6-8.
 *
 * The question numbers (1 to 3 for the three poetry clusters, then 4 to 11, two
 * for each play) are those of the 2018 and 2024 papers; they follow the set-text
 * list.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'ocr-lit-component02',
  title: 'OCR English Literature Component 02',
  board: 'OCR',
  qualification: 'GCSE English Literature (J352)',
  paperName: 'Exploring poetry and Shakespeare',
  durationMinutes: 120,
  totalMarks: 80,
  weighting: '50% of the GCSE',
  summary:
    'A closed-book paper (you cannot take your texts into the exam) on one cluster of poems from the OCR poetry anthology, Towards a World Unknown, and one Shakespeare play. You compare an anthology poem with an unseen poem, write about another poem from your cluster from memory, then write one essay on the play.',
  source: {
    document:
      'OCR GCSE English Literature J352/02 mark scheme, June 2024, checked with the J352 specification (Version 3.0, November 2025)',
    url: 'https://www.ocr.org.uk/Images/727833-mark-scheme-exploring-poetry-and-shakespeare.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://www.ocr.org.uk/qualifications/gcse/english-literature-j352-from-2015/assessment/',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Read, understand and respond: give your own informed view of the text as an argument, backed by references and quotations.',
    },
    {
      id: 'AO2',
      plain:
        'Analyse how the writer uses language, form (the kind of text and its shape, such as a sonnet, a stanza pattern or a soliloquy) and structure (how it is put together and ordered) to create meanings and effects, using subject terms where they help.',
    },
    {
      id: 'AO3',
      plain:
        'Show how the play connects with its context: the social, historical or cultural ideas it shows. Marked in Section B only.',
    },
    {
      id: 'AO4',
      plain:
        'Write accurately: spell and punctuate correctly, and vary your vocabulary and sentences. Marked in Section B only.',
    },
  ],
  sections: [
    {
      name: 'Section A: Poetry across time',
      marks: 40,
      about:
        'One two-part question on the cluster you studied (Question 1 Love and Relationships, Question 2 Conflict, Question 3 Youth and Age). Part (a) compares a named anthology poem with an unseen poem, both printed; part (b) asks about a second poem from your cluster, chosen by you.',
      questions: [
        {
          label: 'Questions 1 to 3, part (a) (answer the one on your cluster)',
          kind: 'Comparing an anthology poem with an unseen poem',
          marks: 20,
          objectives: [
            { id: 'AO1', marks: 8 },
            { id: 'AO2', marks: 12 },
          ],
          minutes: 45,
          task: 'Compare how the two printed poems present the idea or feeling the question names: one named poem from your anthology cluster and one unseen poem (one you have not studied). The bullet points under the question remind you to cover what each poem says and the attitudes in it, the tone and mood of each, and the effects of language and structure.',
          rewards: [
            'Close analysis of language, form and structure in both poems: this is the main objective here (AO2, 12 of the 20 marks).',
            'Comparison throughout: how the poems are alike and different in ideas, tone and methods.',
            'Your own interpretation of each poem, backed by short quotations from both.',
            'Subject terms (for example imagery, rhyme, stanza, enjambment) used accurately to sharpen the analysis.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-3',
              looksLike:
                'A few relevant remarks about the poems, with little reference to them, very little sense of how they are written and little or no linking of the two.',
            },
            {
              name: 'Level 2',
              marks: '4-6',
              looksLike:
                'A simple response with some support from the poems, simple comments on language, form or structure, and a few basic links between them.',
            },
            {
              name: 'Level 3',
              marks: '7-10',
              looksLike:
                "A fuller response that explains some of the poets' choices, uses some subject terms and relevant quotations, and makes some direct comparisons.",
            },
            {
              name: 'Level 4',
              marks: '11-14',
              looksLike:
                'A detailed response with some real analysis of language, form and structure, terms used correctly, relevant quotations and some developed points of comparison.',
            },
            {
              name: 'Level 5',
              marks: '15-17',
              looksLike:
                'A well-built, persuasive response with careful analysis of both poems, well-suited quotations built into the sentences, good use of terms and comparison kept up throughout.',
            },
            {
              name: 'Level 6',
              marks: '18-20',
              looksLike:
                'Close, insightful analysis of how both poems work, with exact quotations built into a tightly argued response that compares the poems in every paragraph.',
            },
          ],
          avoid: [
            'Writing about only one poem: OCR marking makes that unlikely to pass Level 2 and never lets it pass Level 3.',
            'Writing about the poems in two separate halves with a short comparison at the end.',
            'Listing techniques without explaining their effect.',
            'Spending time on facts about the poets: context is not marked in this section.',
          ],
          tip: 'Read the unseen poem twice before you write. Then plan three or four points of comparison, each covering both poems.',
          markerQuestionId: 'Section A (a)',
        },
        {
          label: 'Questions 1 to 3, part (b) (the same question as your part (a))',
          kind: 'Another poem from your cluster',
          marks: 20,
          objectives: [
            { id: 'AO1', marks: 10 },
            { id: 'AO2', marks: 10 },
          ],
          minutes: 30,
          task: 'Write about a second poem from your cluster, chosen by you, that presents the idea the question names. It must come from the same cluster and must not be the named poem from part (a). It is not printed, so you write from memory.',
          rewards: [
            'A well-chosen poem that clearly fits the question.',
            'Your own interpretation of the poem, backed by quotations from memory.',
            "Analysis of the poet's language, form and structure, with subject terms. Response (AO1) and analysis (AO2) carry equal marks here.",
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-3',
              looksLike:
                'A few relevant remarks with little reference to the poem and little awareness of how it is written.',
            },
            {
              name: 'Level 2',
              marks: '4-6',
              looksLike:
                'A simple answer that begins to address the question, with some support from the poem and simple comments on the writing.',
            },
            {
              name: 'Level 3',
              marks: '7-10',
              looksLike:
                "A fuller answer that shows understanding, with some relevant references or quotations and a reasonable explanation of the poet's choices, using some subject terms.",
            },
            {
              name: 'Level 4',
              marks: '11-14',
              looksLike:
                'A detailed, focused answer with a developing argument, relevant references and some real analysis of language, form and structure.',
            },
            {
              name: 'Level 5',
              marks: '15-17',
              looksLike:
                'A well-built, persuasive argument with well-suited quotations built in, and careful, detailed analysis that uses subject terms well.',
            },
            {
              name: 'Level 6',
              marks: '18-20',
              looksLike:
                'An insightful, tightly argued answer throughout, with exact quotations from memory and close, detailed analysis of how the poet creates meaning.',
            },
          ],
          avoid: [
            'Choosing a poem from a different cluster: OCR gives that answer 0.',
            'Writing about the named poem from part (a) again.',
            'Retelling what the poem is about without analysing how it is written.',
          ],
          tip: 'Learn a few short quotations for every poem in your cluster, so you can choose the poem that fits the question best, not the only one you remember.',
          markerQuestionId: 'Section A (b)',
        },
      ],
    },
    {
      name: 'Section B: Shakespeare',
      marks: 40,
      about:
        'One essay on your studied Shakespeare play, from a choice of two questions (Questions 4 to 11, two for each play).',
      questions: [
        {
          label: 'Questions 4 to 11 (answer one of the two on your play)',
          kind: 'Shakespeare essay',
          marks: 40,
          objectives: [
            { id: 'AO1', marks: 14 },
            { id: 'AO2', marks: 14 },
            { id: 'AO3', marks: 8 },
            { id: 'AO4', marks: 4 },
          ],
          minutes: 45,
          task: 'Choose one of the two questions on your play. One is extract-based: it prints a passage and asks you to refer to it and to elsewhere in the play. The other is discursive (an essay question with no extract), often a view to weigh up, asking you to range across the play, using two or more moments. OCR marks AO1, AO2 and AO3 together on one grid out of 36, and spelling, punctuation and grammar (AO4) on a separate grid out of 4.',
          rewards: [
            'A clear argument that answers the exact question, with your own interpretation of the play.',
            'Evidence from across the play: beyond the extract in the extract-based question, and two or more moments in the discursive one.',
            "Analysis of Shakespeare's language, form and structure, for example verse and prose, soliloquy or dramatic irony, and what an audience sees and knows.",
            'Context that matters to the question: the social, historical or cultural ideas the play shows, linked to your points.',
            'Accurate spelling, punctuation and grammar, with varied vocabulary and sentences (AO4, 4 marks).',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-6',
              looksLike:
                'A few relevant comments with little reference to the play, very little sense of how it is written, and context only hinted at.',
            },
            {
              name: 'Level 2',
              marks: '7-12',
              looksLike:
                'A simple answer that begins to address the question, with some support from the play, simple comments on the writing and some awareness of context.',
            },
            {
              name: 'Level 3',
              marks: '13-18',
              looksLike:
                "A fuller answer that shows understanding, with some relevant quotations, a reasonable explanation of Shakespeare's methods and some relevant comments on context.",
            },
            {
              name: 'Level 4',
              marks: '19-24',
              looksLike:
                'A detailed answer with a developing argument, relevant quotations, some real analysis of language, form and structure, and a clear grasp of context that shapes the points.',
            },
            {
              name: 'Level 5',
              marks: '25-30',
              looksLike:
                'A well-built, persuasive argument with well-suited quotations built in, careful analysis that uses subject terms well, and context that informs the interpretation.',
            },
            {
              name: 'Level 6',
              marks: '31-36',
              looksLike:
                'An insightful essay argued tightly from start to finish, with exact quotations, close and detailed analysis of language, form and structure, and a subtle understanding of how context shapes meaning.',
            },
            {
              name: 'AO4: Threshold performance',
              marks: '1',
              looksLike:
                'Mostly accurate spelling and punctuation and some variety in words and sentences. Errors do not get in the way of the meaning.',
            },
            {
              name: 'AO4: Intermediate performance',
              marks: '2-3',
              looksLike:
                'Spelling and punctuation are largely accurate, and the vocabulary and sentences are varied enough to keep the meaning generally clear and controlled.',
            },
            {
              name: 'AO4: High performance',
              marks: '4',
              looksLike:
                'Spelling and punctuation are accurate throughout, and well-chosen vocabulary and varied sentences keep the meaning precise and fully under control.',
            },
          ],
          avoid: [
            'Staying inside the printed extract: OCR caps that at Level 3, and at Level 4 if the rest of the play gets only a brief mention.',
            'In the discursive question, using only one moment: also capped at Level 3, or Level 4 with only a brief second moment.',
            "General facts about Shakespeare's life or theatre: OCR credits context only where it bears on the question as the play shows it.",
            'Retelling the plot instead of analysing it.',
          ],
          tip: 'Write about the play as drama: say what the audience sees, hears and knows at each moment you discuss, not only what the words mean.',
          markerQuestionId: 'Section B',
        },
      ],
    },
  ],
  timing: [
    "OCR's advice printed on the paper: about 45 minutes on part (a), about 30 minutes on part (b) and about 45 minutes on Section B.",
    'Part (a), as a suggestion: spend the first 10 minutes reading both poems, the unseen one twice, and noting links before you write.',
    'Section B, as a suggestion: about 5 minutes choosing your question and planning, about 35 minutes writing and 5 minutes checking spelling and punctuation.',
  ],
  checklist: [
    'Part (a) compares both poems in every paragraph.',
    'Part (b) uses a different poem from your own cluster.',
    'Your Shakespeare essay moves beyond the extract, or covers two or more moments in the discursive question.',
    'Any context is linked to the question and to the play.',
    'Spelling, punctuation and grammar checked in Section B, where they earn 4 marks.',
  ],
}
