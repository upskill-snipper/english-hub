/**
 * Edexcel GCSE English Literature (1ET0) Paper 2: 19th-century Novel and Poetry
 * since 1789. A plain-English guide, in our own words, to what each question
 * asks and rewards. It is not Pearson's mark scheme, reproduces none of it, and
 * quotes no set text or poem.
 *
 * CHECKED 24 October 2026 against Pearson's published documents:
 *   - 1ET0/02 mark scheme, Summer 2025 (publications code 1ET0_02_2506_MS):
 *     every question's marks and objectives, which bullets of each level grid
 *     belong to which objective, and every level range below.
 *   - 1ET0 specification, Issue 2 (June 2019), "Breakdown of Assessment
 *     Objectives by component": 80 marks, 2 hours 15 minutes, 50% of the GCSE,
 *     closed book. Part (a) AO2 20; part (b) AO1 20; anthology AO2 15 + AO3 5;
 *     unseen AO1 8 + AO2 12. No AO4 (spelling and punctuation) marks on this
 *     paper: they are all on Paper 1, Section B.
 *   - 1ET0/02 question paper, Summer 2024 (20 May 2024): the front cover's
 *     advice of about 55 minutes on Section A, about 35 minutes on Section B
 *     Part 1 and about 45 minutes on Section B Part 2, and Section A's own
 *     instruction to divide its time equally between parts (a) and (b).
 *
 * DIFFERENCES FROM THE AI MARKER, as this check found them
 * (src/lib/marking/mark-schemes/edexcel-lit.ts). All were corrected in the
 * marker on 24 October 2026, with the founder's approval (document 30): each
 * grid is now one objective there ('AO2+AO3', 'AO1+AO2'), and
 * src/lib/marking/mark-schemes/__tests__/edexcel-structure.test.ts holds the
 * marker to this guide. The record of what differed:
 * The total (80), the duration (135 minutes) and every question's marks and
 * objective split agree. How the levels are applied does not:
 *   - Section B Part 1: board, ONE 20-mark grid (Level 1 1-4, 2 5-8, 3 9-12,
 *     4 13-16, 5 17-20) covering comparison, AO2 and AO3 together; marker, a
 *     separate AO2 ladder out of 15 (1-3, 4-6, 7-9, 10-12, 13-15) and AO3 out
 *     of 5 (one mark a level).
 *   - Section B Part 2: board, ONE 20-mark grid as above covering comparison,
 *     AO1 and AO2; marker, AO1 out of 8 (1-2, 3, 4-5, 6, 7-8) and AO2 out of 12
 *     (1-2, 3-5, 6-7, 8-10, 11-12).
 *   - Both parts of Section B: an answer on only one poem cannot go above
 *     Level 2, and a very unbalanced one cannot reach Level 3. The marker's
 *     notes do not say so.
 *   - Section A part (b) task: the marker asks about "the novel as a whole";
 *     the board's questions (June 2024, June 2025) ask about the idea
 *     elsewhere in the novel, and its mark scheme rewards references from
 *     elsewhere in the novel. The specification's overview does call part (b)
 *     an essay exploring the whole text, so the marker's wording has a source;
 *     the papers and mark schemes are narrower.
 *   - Section B Part 1 task: the marker says the second poem is "one other of
 *     your choice"; the board requires it to come from the same anthology
 *     collection (specification overview; June 2024 and June 2025 papers).
 *
 * NOT FROM THE BOARD: the ten minutes of reading and annotating suggested for
 * the unseen poems is ours, given in the tip as advice, not as a rule.
 *
 * NOT CONFIRMED: the June 2026 and November 2025 materials are on Pearson's
 * secure site (it answered 401 to an unsigned request), so the grids here are
 * the latest public ones, June 2025; the June 2024 mark scheme has the same
 * ranges and the same one-poem caps.
 *
 * SECOND CHECK, 24 October 2026, against the documents above plus the June
 * 2024 mark scheme and the June 2025 question paper. Every mark, objective and
 * level range was confirmed, and both one-poem caps. Fixed:
 *   - Section B Parts 1 and 2: the rewards gave each objective its marks
 *     ("AO2, 15 marks", "AO1, 8 marks") in a way that could be read as
 *     separate scores. Pearson gives one mark out of 20 from one grid for each
 *     part (2025 mark scheme), and the first reward of each now says so.
 *   - Part (a): Level 1 read as if naming features beat Level 2's retelling;
 *     both rewritten so each level is plainly a step up.
 *   - Part (b) Levels 2, 4 and 5, Parts 1 and 2 Level 3 and Part 2 Level 5
 *     echoed the grids' own words ("valid points", "well-developed", "a range
 *     of points", "mature"); reworded.
 *   - Part (b) kind said "whole-novel"; the question is about the rest of the
 *     novel (2024 and 2025 papers and mark schemes). Its "in a critical essay
 *     style" made plainer: "written as a formal essay".
 *   - Part 2 avoid now says a very unbalanced answer cannot reach Level 3, as
 *     the mark scheme's preamble to Question 12 does.
 *   - Part (b) tip said to take moments from the beginning, middle and end,
 *     which can include the extract itself; it now says away from the extract.
 *   - Timing: the "divide equally" advice is at the head of Section A, not on
 *     the front cover; and Part 2 does not have "the most time" (Section A has
 *     55 minutes): it has ten minutes more than Part 1 for the same marks.
 */
import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'edexcel-lit-paper2',
  title: 'Edexcel English Literature Paper 2',
  board: 'Edexcel',
  qualification: 'GCSE English Literature (1ET0)',
  paperName: '19th-century Novel and Poetry since 1789',
  durationMinutes: 135,
  totalMarks: 80,
  weighting: '50% of the GCSE',
  summary:
    'A closed-book exam in two sections. Section A is a two-part question on your 19th-century novel that starts from a printed extract. Section B is poetry: a comparison of a named poem from your anthology collection with one other from it, then a comparison of two poems you have not seen before.',
  source: {
    document:
      'Pearson Edexcel GCSE English Literature (1ET0) Paper 2 mark scheme, Summer 2025 (1ET0_02_2506_MS), checked with the specification, Issue 2 (June 2019), and the Summer 2024 question paper',
    url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-02-rms-20250821.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Show you understand the text and have your own well-informed view of it, argued in an essay style and backed by references and quotations.',
    },
    {
      id: 'AO2',
      plain:
        "Analyse the writer's choices of language, form and structure and the meanings and effects they create, using subject terms where they help.",
    },
    {
      id: 'AO3',
      plain:
        'Show how a text relates to the context it was written in. On this paper it is marked only in the anthology poetry question.',
    },
  ],
  sections: [
    {
      name: 'Section A: 19th-century novel',
      marks: 40,
      about:
        'One question on your novel, in two parts: part (a) on a printed extract of about 400 words, and part (b) on an idea from that extract elsewhere in the novel.',
      questions: [
        {
          label: 'Part (a): Questions 1(a) to 7(a)',
          kind: 'Extract analysis',
          marks: 20,
          objectives: [{ id: 'AO2', marks: 20 }],
          minutes: 27,
          task: 'Analyse how the writer presents a character, a setting or an event in the printed extract, using examples from it.',
          rewards: [
            "Close analysis of the writer's language in the extract: word choices, imagery, dialogue and sentence forms.",
            'Form and structure too: the narrative voice, how the extract builds or changes direction, and how it ends.',
            'Short quotations from the extract, each with its effect on the reader explained.',
            'Accurate subject terms used to develop points.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-4',
              looksLike:
                'Says very little about how the extract is written: a feature or two may be named, with almost no explanation and few subject terms.',
            },
            {
              name: 'Level 2',
              marks: '5-8',
              looksLike:
                'Mostly describes what happens in the extract, but makes some comments on how it is written, using a few subject terms.',
            },
            {
              name: 'Level 3',
              marks: '9-12',
              looksLike:
                "Shows how several of the writer's methods work and what each does to the reader, with relevant subject terms.",
            },
            {
              name: 'Level 4',
              marks: '13-16',
              looksLike:
                'Every paragraph digs into how the language, form and structure work and what they do to the reader, in close detail, with subject terms used accurately to push ideas further.',
            },
            {
              name: 'Level 5',
              marks: '17-20',
              looksLike:
                "Weighs up how the language, form and structure combine to shape the reader's response, with exact subject terms built naturally into the argument.",
            },
          ],
          avoid: [
            'Adding context: it is not marked anywhere in Section A of this paper.',
            'Bringing in other chapters: part (a) is about the extract.',
            'Retelling the extract instead of analysing it.',
          ],
          tip: 'Pick out four or five key moments in the extract and, for each, say what the writer does and what it makes the reader think or feel.',
          markerQuestionId: 'Section A (a)',
        },
        {
          label: 'Part (b): Questions 1(b) to 7(b)',
          kind: 'Essay on the rest of the novel',
          marks: 20,
          objectives: [{ id: 'AO1', marks: 20 }],
          minutes: 27,
          task: 'Show how an idea from the extract, such as friendship or ambition, appears and matters in other parts of the novel. The question lists points you must consider.',
          rewards: [
            'A clear argument of your own that answers the question, written as a formal essay.',
            'Evidence from other parts of the novel: quotations you have learned, or precise reference to events.',
            'Every point the question tells you to consider.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-4',
              looksLike:
                'A simple answer that says little of your own view, has little sense of an essay style and refers to the novel only briefly.',
            },
            {
              name: 'Level 2',
              marks: '5-8',
              looksLike:
                'Retells a fair amount of the story, but some of your own view comes through, with a few sensible points and a focus that comes and goes.',
            },
            {
              name: 'Level 3',
              marks: '9-12',
              looksLike:
                'Stays relevant, with your own sound reading of the novel and focused points backed by evidence.',
            },
            {
              name: 'Level 4',
              marks: '13-16',
              looksLike:
                'A well-built argument that stays close to the novel, in a steady essay style, with evidence that fits each of several points closely.',
            },
            {
              name: 'Level 5',
              marks: '17-20',
              looksLike:
                'A confident argument of your own, with fresh, thoughtful readings, in which each carefully picked piece of evidence does real work.',
            },
          ],
          avoid: [
            'Going back over the extract: the question asks about elsewhere in the novel, and the mark scheme rewards references from beyond the extract.',
            'Spending time on context: it is not marked in this part.',
            'Plot summary with no argument.',
          ],
          tip: 'Choose three moments from different parts of the novel, away from the extract, and show how each one develops the idea in the question.',
          markerQuestionId: 'Section A (b)',
        },
      ],
    },
    {
      name: 'Section B: Poetry since 1789',
      marks: 40,
      about:
        'Part 1 compares a named poem from your anthology collection with another poem from the same collection. Part 2 compares two poems you have not seen before.',
      questions: [
        {
          label: 'Part 1: Question 8, 9, 10 or 11 (the one for your collection)',
          kind: 'Anthology poetry comparison',
          marks: 20,
          objectives: [
            { id: 'AO2', marks: 15 },
            { id: 'AO3', marks: 5 },
          ],
          minutes: 35,
          task: 'Compare how a theme is presented in the named poem, which is printed in the paper, and one other poem you choose from the same collection. Your answer should cover how each poet uses language, form and structure, and how the time and circumstances each poem was written in shape it.',
          rewards: [
            'One mark out of 20 for the whole answer, from one set of five levels that weighs your comparison, your analysis and your use of context together. No objective gets a score of its own.',
            'Comparison all the way through: what the two poems share and where they differ, in ideas and in methods.',
            'How each poet uses language, form and structure, with short quotations from both poems. This is AO2, which carries three quarters of the marks (15 of the 20).',
            'Context for both poems, such as when and why each was written, linked to what it means. This is AO3, which carries a quarter of the marks (5 of the 20).',
            'A second poem that gives you plenty to compare, treated in real depth.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-4',
              looksLike:
                'Hardly compares the poems, says little about how they are written, and shows little sense of context.',
            },
            {
              name: 'Level 2',
              marks: '5-8',
              looksLike:
                'Points out the more obvious likenesses or differences without developing them, with a few comments on how the poems are written and a little context. An answer on only one poem cannot go above this level.',
            },
            {
              name: 'Level 3',
              marks: '9-12',
              looksLike:
                'Makes several clear comparisons and explains how form, structure and language shape each poem, with relevant terms and sensible comment on context.',
            },
            {
              name: 'Level 4',
              marks: '13-16',
              looksLike:
                'Compares the poems well on many points, with detailed analysis backed by evidence from both, and context discussed throughout.',
            },
            {
              name: 'Level 5',
              marks: '17-20',
              looksLike:
                "Compares the poems with real insight on many fronts, shows exactly how each poet's methods work, uses precise terms, and makes context part of the argument.",
            },
          ],
          avoid: [
            'Writing about one poem and then the other with no comparison.',
            'A thin treatment of the poem you choose: the mark scheme expects it to be covered in depth, and a very unbalanced answer cannot reach Level 3.',
            'Choosing a second poem from a different collection.',
          ],
          tip: 'Before the exam, prepare pairings: for each poem in your collection, know two others it compares well with and one point of context for each.',
          markerQuestionId: 'Section B Part 1',
        },
        {
          label: 'Part 2: Question 12',
          kind: 'Unseen poetry comparison',
          marks: 20,
          objectives: [
            { id: 'AO1', marks: 8 },
            { id: 'AO2', marks: 12 },
          ],
          minutes: 45,
          task: 'Compare how two modern poems you have not seen before present a shared theme: the ideas in each poem, and how each poet uses language, form and structure.',
          rewards: [
            'One mark out of 20 for the whole answer, from one set of five levels that weighs your comparison, your response and your analysis together. No objective gets a score of its own.',
            'A personal response to the ideas in both poems, supported with short quotations, with comparison running through the whole answer (AO1, 8 of the 20 marks).',
            'How each poet writes: language, form and structure, compared rather than described one poem at a time (AO2, 12 of the 20 marks).',
            'Careful readings backed by the poems: the mark scheme rewards any reasonable interpretation you can support.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-4',
              looksLike:
                'Hardly compares the poems, gives a simple response with little evidence, and says little about how they are written.',
            },
            {
              name: 'Level 2',
              marks: '5-8',
              looksLike:
                'Points out obvious likenesses or differences without developing them, partly retells the poems, and comments a little on how they are written. An answer on only one poem cannot go above this level.',
            },
            {
              name: 'Level 3',
              marks: '9-12',
              looksLike:
                'Makes several clear comparisons, with a relevant personal response, a sensible reading of both poems and a clear sense of how language, form and structure work.',
            },
            {
              name: 'Level 4',
              marks: '13-16',
              looksLike:
                'Compares the poems well on many points, with a developed, well-supported response and detailed analysis of how both poets work.',
            },
            {
              name: 'Level 5',
              marks: '17-20',
              looksLike:
                'Compares the poems with real insight on many fronts, with a confident response of your own, carefully picked evidence and precise analysis of how both poets work.',
            },
          ],
          avoid: [
            'Guessing at background or context: it is not marked in this question.',
            'Spending most of your time on the first poem: a very unbalanced answer cannot reach Level 3.',
            'Paraphrasing line by line without comment on method.',
          ],
          tip: 'Read both poems twice and annotate for about 10 minutes before you write, then make every paragraph compare the two.',
          markerQuestionId: 'Section B Part 2',
        },
      ],
    },
  ],
  timing: [
    'The paper advises about 55 minutes on Section A, divided equally between parts (a) and (b), about 35 minutes on Section B Part 1, and about 45 minutes on Section B Part 2.',
    'Part 2 gets ten minutes more than Part 1 for the same 20 marks, because you have to read two new poems before you can write about them.',
    'Our suggestion: in every part, spend the first few minutes planning before you write.',
  ],
  checklist: [
    'Part (a) stays inside the printed extract, and part (b) uses other parts of the novel.',
    'The anthology answer compares the named poem with one other from your collection, and mentions context for both.',
    'The unseen answer compares both poems throughout.',
    "Poem titles, poets' names and characters' names are spelt correctly.",
  ],
}
