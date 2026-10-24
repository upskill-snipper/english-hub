/**
 * Pearson Edexcel International GCSE English Literature (4ET1), Paper 1:
 * Poetry and Modern Prose (4ET1/01).
 *
 * Checked on 24 October 2026 against Pearson's own documents:
 *   - the specification, Issue 3 (August 2025): 2 hours, 90 marks, 60% of
 *     the qualification, closed book with the anthology poems provided, and
 *     the objectives per question (Q1 AO2 20; Q2 and Q3 AO2 15 + AO3 15;
 *     Q4 to Q17 AO1 20 + AO4 20);
 *   - the sample assessment materials, Issue 3 (August 2024), Component 1
 *     question paper and mark scheme: the times printed on the paper (35, 40
 *     and 45 minutes), Questions 4 to 17 across the seven prose texts set
 *     from May 2026, and the level ranges;
 *   - the June 2025 question paper (P77906A), mark scheme (4ET1_01_2506_MS)
 *     and examiners' report (4ET1_01_2506_ER), with the June 2024 and
 *     November 2024 question papers: the same tariffs, ranges and times in
 *     live series. The report's advice is put in this guide's own words.
 *
 * The objective numbers do not mean what they mean in GCSE English
 * Literature in England. On 4ET1, AO3 is comparison and AO4 is context.
 *
 * SECOND READING, 24 October 2026. Every figure above was re-read in the same
 * documents and every one is right. What was changed:
 *   - Sections B and C listed their objectives as AO2 15 + AO3 15 and AO1 20 +
 *     AO4 20, which a page could show as two separate marks; each is now one
 *     entry for the whole section ('AO2 and AO3', 30; 'AO1 and AO4', 40), and
 *     the first `rewards` line says how Pearson weights them (specification
 *     breakdown table; SAMs and June 2025 mark scheme: one combined grid per
 *     section; June 2025 report: Section C is not split 20 and 20).
 *   - Section B: the one-poem limit sat only inside Level 2; it is now also in
 *     `avoid`, with its mark (top of Level 2, 12 of 30: SAMs and June 2025
 *     mark scheme).
 *   - Section B: nothing said context is not marked in the poetry sections;
 *     now in `avoid` (June 2025 report), in place of the line on choosing the
 *     second poem, which the tip already covers.
 *   - Section C: the examples line said only that exact quotations are not
 *     required; it now says short quotations and precise references both
 *     count, as the June 2025 report does.
 *   - Sections A and B, Level 1 began "A short or simple answer"; length is
 *     not in the grid, so now "A simple answer" (June 2025 mark scheme).
 *   - Section A: "Summarising or paraphrasing" repeated the mark scheme's own
 *     note on Question 1; reworded (June 2025 mark scheme).
 *   - Section C, Level 1 opened with the grid's own words ("limited
 *     knowledge", June 2025 mark scheme); reworded, and Level 5's "Commands"
 *     made plainer.
 *   - Sections A and B, Level 4: "apt examples" is now "well-chosen
 *     examples", a word every 14-year-old knows.
 *   - AO4 now also says spelling, punctuation and grammar are not marked on
 *     this paper (June 2025 report).
 *
 * AGAINST THE AI MARKER (src/lib/marking/mark-schemes/edexcel-igcse-lit.ts),
 * confirmed on the second reading: the total (90), duration (120), section
 * tariffs (20, 30, 40), objective weightings (A: AO2 20; B: AO2 15 + AO3 15;
 * C: AO1 20 + AO4 20) and the Section A ranges agree. The differences:
 *   - Section B. Marker: AO2 15 (bands 1-3, 4-6, 7-9, 10-12, 13-15) and AO3
 *     15 (bands 1-4, 5-8, 9-11, 12-15) scored separately. Board: one grid for
 *     both together, Level 1 1-6, Level 2 7-12, Level 3 13-18, Level 4
 *     19-24, Level 5 25-30.
 *   - Section C. Marker: AO1 20 (bands 1-4, 5-8, 9-12, 13-16, 17-20) and AO4
 *     20 (bands 1-5, 6-10, 11-15, 16-20) scored separately. Board: one grid,
 *     Level 1 1-8, Level 2 9-16, Level 3 17-24, Level 4 25-32, Level 5
 *     33-40, and the June 2025 report says Section C is marked as a whole,
 *     not split 20 and 20 between knowledge and context.
 *   - Marker: the AO3 object (Section B) carries the context description and
 *     context bands, and the AO4 object (Section C) the comparison
 *     description and poem-comparison bands. The 19 September 2026 fix
 *     (9a3920a56) swapped the labels only, and both prompt builders
 *     (prompt-builder.ts, essay-feedback.ts) send description and bands to
 *     the model. Board: AO3 is comparison, AO4 is context.
 *   - Marker: AO1 and AO2 descriptions follow the GCSE (England) wording, and
 *     every AO2 band grades subject terminology. Board: AO1 is close knowledge
 *     of the text, a critical style and an informed personal engagement; AO2
 *     and the Section A and B grids do not mention terminology (the
 *     specification's content for Sections A and B does ask learners to use
 *     literary terminology).
 *   - Marker: the AO1 description and its Level 2 and 3 indicators ask for
 *     quotations. Board: the Section C grid asks for relevant examples, and
 *     the June 2025 report says quotations are not required in this
 *     closed-book section; references to episodes count.
 *   - Marker: Section B notes omit the board's limit that an answer on only
 *     one poem cannot go above the top of Level 2 (12 marks), and with the two
 *     objectives scored separately nothing in its data holds a one-poem
 *     answer to 12.
 *   - Marker: Section B is "one named poem and one of your choice", with the
 *     named poem printed. Board: in the SAMs and the June 2024, November 2024
 *     and June 2025 papers one question names both poems and the other names
 *     one, and every Part 3 poem is printed in a separate poetry booklet.
 *   - Marker: sourceUrl .../edexcel-international-gcses/english-literature-2016.html
 *     redirects to Pearson's 404 page; the live page is
 *     .../international-gcse-english-literature-2016.html.
 *
 * ALL CORRECTED IN THE MARKER on 24 October 2026, with the founder's approval
 * (document 30). The AO3 and AO4 guidance, the source link, the Poetry
 * Booklet and the two shapes of the Section B choice came first (commit
 * 8c602c3aa, prepared on 10 October). Then: Sections B and C are one grid each
 * ('AO2+AO3', levels 1-6 to 25-30; 'AO1+AO4', levels 1-8 to 33-40), marked as
 * one mark, not two; AO1 and AO2 are described as 4ET1 defines them, and no
 * band grades terminology; Section C asks for examples, not quotations; the
 * Section B notes hold an answer on one poem to 12, the top of Level 2; and
 * the Section B task gives the two shapes as what recent papers do, not a
 * rule. The ids saved essays name (Section A, B and C) and every
 * `markerQuestionId` below are unchanged, and the paper has left
 * MARKER_NOT_ALIGNED (src/lib/marking/guide-links.ts).
 * src/lib/marking/mark-schemes/__tests__/edexcel-igcse-structure.test.ts
 * holds the marker to this guide.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'edexcel-igcse-lit',
  title: 'Edexcel International GCSE English Literature Paper 1',
  board: 'Edexcel International GCSE',
  qualification: 'International GCSE English Literature (4ET1)',
  paperName: 'Poetry and Modern Prose',
  durationMinutes: 120,
  totalMarks: 90,
  weighting: '60% of the International GCSE',
  summary:
    'A two-hour exam taken without your own books, in which you write three essays: one on a poem you have not seen before, one comparing two poems from the anthology (printed for you), and one on the modern novel you studied.',
  source: {
    document:
      'Pearson Edexcel International GCSE English Literature (4ET1) sample assessment materials, Issue 3 (August 2024), Component 1 question paper and mark scheme; checked with the specification, Issue 3 (August 2025), and the June 2025 Paper 1 question paper and mark scheme (4ET1_01_2506_MS)',
    url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-sams.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-literature-2016.coursematerials.html',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Knowing the novel closely and arguing your own clear, informed answer to the question in a thoughtful essay style (Section C).',
    },
    {
      id: 'AO2',
      plain:
        "Analysing how a writer's language, form (the type and shape of the poem) and structure (how it is ordered and builds) create meanings and effects (Sections A and B).",
    },
    {
      id: 'AO3',
      plain:
        'Comparing two poems: their links, similarities and differences (Section B; on this paper AO3 is comparison, not context as in GCSE English Literature in England).',
    },
    {
      id: 'AO4',
      plain:
        'Context: how the novel relates to the times, places and society it was written in and is set in, and how that shapes its meaning (Section C; at GCSE in England AO4 covers spelling and punctuation, which this paper does not mark).',
    },
  ],
  sections: [
    {
      name: 'Section A: Unseen Poetry',
      marks: 20,
      about: 'One essay on a poem you have not seen before, printed in the question booklet.',
      questions: [
        {
          label: 'Question 1',
          kind: 'Unseen poetry analysis',
          marks: 20,
          objectives: [{ id: 'AO2', marks: 20 }],
          minutes: 35,
          task: "Explore how the poet presents the subject the question names: how the poet describes things, the words the poet chooses, and the poem's form and structure. Back up your points with examples from the poem.",
          rewards: [
            'A clear sense of what the whole poem is saying and how it develops from start to finish.',
            'Language, form and structure analysed together, each linked to its effect on the reader.',
            'Short examples from across the poem, each followed by what it shows.',
            'Your own response: what you think the poem suggests, not only what it says.',
            'Subject terms used accurately where they help, such as free verse, caesura (a pause within a line) or personification.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-4',
              looksLike:
                'A simple answer that notices very little about how the poem is written, with few examples.',
            },
            {
              name: 'Level 2',
              marks: '5-8',
              looksLike:
                'Mostly explains what the poem is about, with some comments on how it is written and some examples.',
            },
            {
              name: 'Level 3',
              marks: '9-12',
              looksLike:
                "Explains how several of the poet's choices work and what they do for the reader, with relevant examples.",
            },
            {
              name: 'Level 4',
              marks: '13-16',
              looksLike:
                "Stays on the question and keeps analysing the poet's methods and their effects in depth all the way through, with well-chosen examples.",
            },
            {
              name: 'Level 5',
              marks: '17-20',
              looksLike:
                'Treats the poem as a whole, judging how its language, form and structure work together to make meaning, with exactly the right examples.',
            },
          ],
          avoid: [
            'Retelling what the poem says instead of analysing how it is written.',
            'Listing devices without saying what they do.',
            'Covering only the opening lines: work through the whole poem.',
            'Spending time on background facts: this section rewards analysis of the poem itself.',
          ],
          tip: 'Read the poem twice and sum up its meaning in one sentence before you plan; then build each paragraph on a method, an example and its effect on the reader.',
          markerQuestionId: 'Section A',
        },
      ],
    },
    {
      name: 'Section B: Anthology Poetry',
      marks: 30,
      about:
        'One comparison essay, from a choice of two questions, on poems from Part 3 of the Pearson Edexcel International GCSE English Anthology, which are printed in a poetry booklet in the exam.',
      questions: [
        {
          label: 'Question 2 or 3 (answer one)',
          kind: 'Anthology poetry comparison',
          marks: 30,
          objectives: [{ id: 'AO2 and AO3', marks: 30 }],
          minutes: 40,
          task: 'Compare how two anthology poems present the idea or experience the question names, with reference to language, form and structure. In the sample paper and recent papers, one question names both poems and the other names one, leaving you to choose the second from the anthology.',
          rewards: [
            'Pearson gives one mark out of 30 for the whole essay, from a single grid in which analysis of the poems (AO2) and comparison (AO3) carry equal weight. There are not two separate marks, so weak comparison holds back the whole mark.',
            'Comparison all the way through: similarities and differences between the two poems in every paragraph.',
            'Analysis of language, form and structure in both poems, with the effect on the reader explained.',
            'Fair coverage of both poems, with short examples from each.',
            'Linking words that make the comparison clear, such as whereas, similarly and in contrast.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-6',
              looksLike:
                'A simple answer that notices very little about how the poems are written, with hardly any comparison and few examples.',
            },
            {
              name: 'Level 2',
              marks: '7-12',
              looksLike:
                'Mostly describes the poems, with some comment on how they are written and a few obvious similarities or differences that are not developed. An answer on only one poem cannot go above this level.',
            },
            {
              name: 'Level 3',
              marks: '13-18',
              looksLike:
                "Explains how several of each poet's methods work and what they do for the reader, and compares the poems on a number of points, with relevant examples.",
            },
            {
              name: 'Level 4',
              marks: '19-24',
              looksLike:
                'Keeps up detailed analysis of both poems and their effect on the reader, and draws out many similarities and differences, with well-chosen examples.',
            },
            {
              name: 'Level 5',
              marks: '25-30',
              looksLike:
                "Judges how each poet's language, form and structure work together, and compares the poems with insight on many fronts, with exactly the right examples.",
            },
          ],
          avoid: [
            'Writing about one poem and then the other with no links between them.',
            'Running out of time for the second poem: an answer on only one poem cannot go above Level 2 (12 of the 30 marks), however good it is.',
            'Retelling what each poem is about instead of analysing how it is written.',
            'Background on the poets or their times: context is not marked in Section B.',
          ],
          tip: 'If you choose the second poem, pick the one that fits the question best; then plan three or four points that each compare both poems, and mention both in every paragraph.',
          markerQuestionId: 'Section B',
        },
      ],
    },
    {
      name: 'Section C: Modern Prose',
      marks: 40,
      about:
        'One essay on the modern novel you studied, from a choice of two questions on each set text; the book is not allowed in the exam.',
      questions: [
        {
          label: 'Questions 4 to 17 (answer one, on your novel)',
          kind: 'Modern prose essay',
          marks: 40,
          objectives: [{ id: 'AO1 and AO4', marks: 40 }],
          minutes: 45,
          task: 'Write one essay on a question about the novel you studied, usually on a character, a theme, a relationship or a view to weigh up. Every question tells you to consider the context of the novel.',
          rewards: [
            'Pearson gives one mark out of 40 for the whole essay, from a single grid for knowledge of the novel (AO1) and context (AO4). The specification weights the two equally, but examiners say the mark is led by how well you know and understand the novel, so context should serve your points about it, never replace them.',
            'Close knowledge of the whole novel: specific episodes and details from the beginning, middle and end, not only the best-known scenes.',
            'A clear argument that answers the exact question and shows your own view of the novel.',
            'Context linked to your points: the time, place, society and culture of the novel, and how they shape its characters and ideas.',
            'Examples from across the novel: short quotations you know well, or precise references to particular episodes. The exam is closed book, so exact quotations are not required.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-8',
              looksLike:
                'Knows only a little of the novel and says something simple about it, with little sense of your own view, hardly anything on context and few examples.',
            },
            {
              name: 'Level 2',
              marks: '9-16',
              looksLike:
                'Shows some knowledge but mostly retells the story, with occasional signs of your own view, a little context and some examples.',
            },
            {
              name: 'Level 3',
              marks: '17-24',
              looksLike:
                'Knows the novel securely and answers with a sensible argument of your own in a suitable essay style; context comes in where it is relevant, and the examples fit the points.',
            },
            {
              name: 'Level 4',
              marks: '25-32',
              looksLike:
                'Knows the novel in depth and keeps a thoughtful argument going all the way through; context is understood in detail and supports the points, with well-chosen examples.',
            },
            {
              name: 'Level 5',
              marks: '33-40',
              looksLike:
                'Knows the whole novel inside out and argues with real insight; context is part of the argument throughout rather than added on, and every example is chosen with precision.',
            },
          ],
          avoid: [
            'Retelling the plot: every paragraph should be doing work for your argument.',
            'Context in a block at the start or end, or context that takes over from the novel itself.',
            'Close analysis of single words for its own sake: language, form and structure (AO2) are not marked in this section.',
            'Details from a film version that are not in the novel.',
          ],
          tip: 'Before you write, jot down five or six key moments from across the novel that fit the question, with one piece of context beside each that helps explain it.',
          markerQuestionId: 'Section C',
        },
      ],
    },
  ],
  timing: [
    "Pearson's advice, printed on the paper: 35 minutes on Section A, 40 minutes on Section B and 45 minutes on Section C, which uses the full two hours.",
    'Section A, our suggestion: about 5 minutes reading the poem twice and planning, then about 30 minutes writing.',
    'Section B, our suggestion: about 5 minutes choosing your second poem (if you have the choice) and planning, then about 35 minutes writing.',
    'Section C, our suggestion: about 5 minutes listing key moments and context, then about 40 minutes writing.',
    'You may do the sections in any order, but write each answer in its own part of the answer booklet.',
  ],
  checklist: [
    'You have answered three questions: Question 1, one from Section B and one from Section C.',
    'Each answer is in the right part of the answer booklet, with the box for your chosen question marked.',
    'Section B: both poems appear in every paragraph, with comparison words linking them.',
    'Section C: context is part of your points, not a block at the start or end.',
    'Every paragraph begins with a point that answers the question.',
  ],
}
