/**
 * Eduqas GCSE English Language (C700QS) Component 1: 20th Century Literature
 * Reading and Creative Prose Writing.
 *
 * CHECKED 24 October 2026 against Eduqas's own documents:
 *   - the Summer 2025 question paper and marking scheme (C700U10-1), linked
 *     from the Past Papers tab of eduqas.co.uk and served from WJEC's download
 *     host: question numbers, marks, objectives per question, the mark ranges
 *     and the advised times printed on the paper;
 *   - the specification, Version 3 (January 2019): duration, 40% weighting,
 *     the 60 to 100 line extract, and the rule that the Section B response
 *     should be a narrative;
 *   - the Summer 2024 and November 2024 marking schemes, the 2014 sample
 *     assessment materials and the Summer 2026 examiners' report, which show
 *     the same structure. (The Summer 2026 mark scheme is not yet public.)
 *
 * NUMBERING. Live papers number the questions 01 to 05 (Section A) and 11
 * (Section B, options a to d). Only the sample assessment materials used A1
 * to A5, which is where the marker's ids come from: since 24 October 2026 the
 * marker's A1 to A5 are Questions 01 to 05 and its B1 is Question 11. The
 * Section A mark schemes list their bands by mark range without numbering
 * them; the guide calls them Band 1 upwards, lowest first, because the board's
 * marking instructions speak of bands ("Band 2 and above" in the 2014 sample
 * mark scheme). Question 02 is marked one description per mark, so each of its
 * bands is a single mark.
 *
 * THE AI MARKER (src/lib/marking/mark-schemes/eduqas-lang.ts, eduqasLangComp1)
 * WAS CORRECTED TO THIS GUIDE on 24 October 2026, with the founder's approval
 * (document 30): its questions, marks, objectives and band ranges are now the
 * ones below, and __tests__/eduqas-lang-structure.test.ts in that folder holds
 * them to this guide. Until then it differed as follows. Its declared total
 * (80) and duration (105 minutes) agreed, but its questions added up to 75:
 * the five-mark gap then in KNOWN_TOTAL_MISMATCHES
 * (src/lib/marking/examiner/verification.ts), which said which question was
 * short "has not been established". No one question was short; Section A was
 * built differently:
 *   - marker: A1's notes accepted "explicit information ... only"; board: one
 *     mark for each point and/or inference (Question 01 tests explicit and
 *     implicit information in the Summer 2025, Summer 2024 and November 2024
 *     mark schemes).
 *   - marker: A2 5 marks, AO1 3 + AO2 2 (inference); board: Question 02 5 marks, AO2 5.
 *   - marker: one 10-mark AO2 question (A3); board: two, Question 03 10 marks
 *     AO2 (language) and Question 04 10 marks AO2 (language and structure).
 *     The marker had nothing for Question 04.
 *   - marker: A4 10 marks AO4 (evaluation); board: Question 04 is 10 marks AO2,
 *     and the evaluation is Question 05, 10 marks AO4.
 *   - marker: A5 5 marks AO6 (proofreading: find and correct five errors);
 *     board: no such question, and Section A carries no AO6 marks.
 *   - marker: Section A 35 marks (AO1 8, AO2 12, AO4 10, AO6 5), so the paper
 *     sums to 75; board: Section A 40 marks (AO1 5, AO2 25, AO4 10), paper 80.
 *   - marker: A3's notes asked for language and structure for the highest bands;
 *     board: Question 03 assesses language, and only Question 04 adds structure.
 *   - marker: B1 AO5 bands 0-6, 7-10, 11-16, 17-20, 21-24 and AO6 in four
 *     bands 0-4, 5-8, 9-12, 13-16; board: AO5 1-4, 5-9, 10-14, 15-19, 20-24
 *     and AO6 in five bands 1-3, 4-6, 7-10, 11-13, 14-16 (0 where nothing earns
 *     credit).
 *   - marker: B1 invited "a narrative or descriptive piece"; board: the
 *     specification says the response should be a narrative or recount, and
 *     purely descriptive writing cannot reach the full mark range.
 *   - Not a board difference, but Question 02 linked to it: A2's two ladders
 *     overlapped, because eduqas-lang.ts rescaled bands with its own local
 *     scaleAO, not the contiguous one in ./scale-ao. AO1 (out of 3) ran 0-1,
 *     1, 2, 2, 3 and AO2 (out of 2) ran 0, 1, 1, 1-2, 2, so one mark sat in
 *     two bands. A5's AO6 ladder (0-1, 2-3, 3-4, 4-5) overlapped the same way.
 *   - These agreed: A1 5 marks AO1 (apart from its notes), A3 10 marks AO2,
 *     B1 40 marks (AO5 24 + AO6 16).
 *
 * markerQuestionId: Questions 01 to 05 point at A1 to A5 and Question 11 at B1.
 * Until the correction, Questions 03 and 04 both pointed at A3, the marker's
 * only 10-mark AO2 question, and Question 05 at A4, its evaluation.
 *
 * SECOND CHECK, 24 October 2026 (an independent reader, against the same
 * documents). Fixed:
 *   - Question 05's task said the view is about the final part of the extract;
 *     the 2024 and 2025 papers give a view of a character or the story, argued
 *     from the final lines and the whole passage.
 *   - Question 11's task asked for "a true account"; the specification asks
 *     for a narrative or recount, and the Summer 2026 report says the titles
 *     invite imaginative or personal writing. Now "real or imagined".
 *   - Question 11's rewards now say AO5 and AO6 are two separate marks, as the
 *     Summer 2025 mark scheme awards them.
 *   - Question 02's task now includes how a character feels, not only the
 *     impression they give (November 2024 paper, Question 02).
 *   - Question 03 Bands 3 and 4, and Question 04 Band 4, reworded so each band
 *     differs clearly from the next (explain what words show, then analyse
 *     their effect), as the Summer 2025 bands step up.
 *   - Section A's description said every question is on the lines it names;
 *     Question 05 also uses the whole passage (Summer 2025 paper).
 *   - AO6's plain line repeated the objective's own wording; now plain words.
 *   - Marker differences: added A1's notes, A2's overlapping ladders and where
 *     the five-mark gap comes from.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'eduqas-lang-comp1',
  title: 'Eduqas English Language Component 1',
  board: 'Eduqas',
  qualification: 'GCSE English Language (C700QS)',
  paperName: '20th Century Literature Reading and Creative Prose Writing',
  durationMinutes: 105,
  totalMarks: 80,
  weighting: '40% of the GCSE',
  summary:
    'In Section A you read an extract from 20th-century fiction you have not seen before and answer five questions on it. In Section B you write one story, choosing from four titles.',
  source: {
    document:
      'Eduqas GCSE English Language Component 1 (C700U10-1) marking scheme and question paper, Summer 2025, checked with the specification (Version 3, January 2019) and the Summer 2026 examiners’ report',
    url: 'https://pastpapers.download.wjec.co.uk/S25/S25-C700U10-1-ms.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl: 'https://www.eduqas.co.uk/qualifications/english-language-gcse/#tab_pastpapers',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Find and explain information and ideas in a text, both what it says directly and what it suggests.',
    },
    {
      id: 'AO2',
      plain:
        'Explain how a writer uses language and structure to create effects on the reader, using subject terms to back up your points.',
    },
    {
      id: 'AO4',
      plain:
        'Weigh up a text and give your own reasoned judgement about it, supported by references to the text.',
    },
    {
      id: 'AO5',
      plain:
        'Write clearly and imaginatively in a style that suits your purpose and reader, and organise your ideas so the writing holds together.',
    },
    {
      id: 'AO6',
      plain:
        'Write accurately: choose words well, vary your sentences, and spell and punctuate correctly.',
    },
  ],
  sections: [
    {
      name: 'Section A: Reading',
      marks: 40,
      about:
        'Five questions on one unseen extract of 20th-century literary prose, about 60 to 100 lines long. Each question points you to particular lines, and the last also asks about the passage as a whole.',
      questions: [
        {
          label: 'Question 01',
          kind: 'Finding information',
          marks: 5,
          objectives: [{ id: 'AO1', marks: 5 }],
          minutes: 5,
          task: 'Read the opening lines you are pointed to and list five things you learn about the person, place or topic the question names.',
          rewards: [
            'One mark for each correct, separate point, up to five.',
            'Points taken only from the lines the question names.',
            'Things the lines suggest can count as well as things they state, as long as the lines support them.',
          ],
          levels: [],
          avoid: [
            'Copying out whole sentences: a sentence copied without picking out the point earns nothing.',
            'Using details from outside the lines named.',
            'Putting two ideas in one point, or the same idea twice in different words.',
          ],
          tip: 'Write five short bullet points, one clear point each, in the order they appear in the lines.',
          markerQuestionId: 'A1',
        },
        {
          label: 'Question 02',
          kind: 'Language: a short answer',
          marks: 5,
          objectives: [{ id: 'AO2', marks: 5 }],
          minutes: 6,
          task: 'Read the next few lines and explain what the writer shows you about a character or situation, such as the impression a person gives or how they feel, and how the language does it.',
          rewards: [
            'Clear impressions that answer the question, each backed by a short quotation.',
            'A comment on what particular words or phrases suggest, not only what they say.',
            'Subject terms (for example verb, simile, list) where they help explain the effect.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1',
              looksLike: 'A very slight answer: perhaps one point, with little or no support.',
            },
            {
              name: 'Band 2',
              marks: '2',
              looksLike: 'One or two simple, obvious impressions, with some support.',
            },
            {
              name: 'Band 3',
              marks: '3',
              looksLike:
                'Several impressions, each backed by a quotation, with some comment on the words the writer chose.',
            },
            {
              name: 'Band 4',
              marks: '4',
              looksLike:
                'Impressions that are right and well backed up, with plenty of evidence and clear comment on how the language creates them.',
            },
            {
              name: 'Band 5',
              marks: '5',
              looksLike:
                'Sharp, accurate points that notice less obvious things, each backed by a well-chosen quotation, with subject terms used to explain effects.',
            },
          ],
          avoid: [
            'Writing at length: it is worth 5 marks, so a short, focused answer is enough.',
            'Retelling what happens instead of explaining impressions.',
            'Naming techniques without saying what they suggest.',
          ],
          tip: 'Aim for three or four impressions, each with a short quotation and a sentence on what the words suggest.',
          markerQuestionId: 'A2',
        },
        {
          label: 'Question 03',
          kind: 'Language analysis',
          marks: 10,
          objectives: [{ id: 'AO2', marks: 10 }],
          minutes: 13,
          task: 'Explain how the writer shows a character’s thoughts and feelings, or the impressions you get of a person, place or situation, in a longer section of the extract, by looking closely at the language.',
          rewards: [
            'A range of points that track the whole section, from its first line to its last.',
            'Short quotations, each with a clear explanation of what the words show.',
            'Analysis of how particular language choices affect the reader, with subject terms used accurately.',
            'Noticing what the writer hints at, not only what is stated.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-2',
              looksLike:
                'Mentions a detail or two that fit the question, with very little explanation.',
            },
            {
              name: 'Band 2',
              marks: '3-4',
              looksLike:
                'Finds some relevant details and says simple things about them; may name a technique without explaining it.',
            },
            {
              name: 'Band 3',
              marks: '5-6',
              looksLike:
                'Looks at the section in some depth and starts to explain what particular words show, using some subject terms correctly.',
            },
            {
              name: 'Band 4',
              marks: '7-8',
              looksLike:
                'Detailed, with some real insight, and beginning to analyse how particular words affect the reader, with accurate subject terms.',
            },
            {
              name: 'Band 5',
              marks: '9-10',
              looksLike:
                'Thorough and insightful across the whole section, picking apart in detail how the language works, including the subtler choices, with well-judged subject terms.',
            },
          ],
          avoid: [
            'Writing about lines outside the section named.',
            'Quoting without explaining: a quotation on its own earns little.',
            'Spotting techniques without saying what they do.',
          ],
          tip: 'Work through the section in order so you cover all of it, and build each paragraph from a point, a quotation and an explanation.',
          markerQuestionId: 'A3',
        },
        {
          label: 'Question 04',
          kind: 'Language and structure analysis',
          marks: 10,
          objectives: [{ id: 'AO2', marks: 10 }],
          minutes: 13,
          task: 'Explain how the writer creates an effect in a later section, such as tension and drama or an impression of a character, through both the language and the way the events are organised.',
          rewards: [
            'Points about what happens and in what order, and how that builds the effect.',
            'Close comment on language choices and what they make the reader feel.',
            'Subject terms for language and structure used accurately (for example short sentence, repetition, a change of pace).',
            'Points from across the whole section, not just its opening.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-2',
              looksLike:
                'Mentions a detail or two that fit the question, with very little explanation.',
            },
            {
              name: 'Band 2',
              marks: '3-4',
              looksLike:
                'Finds some relevant details and says simple things about them; techniques are named rather than explained.',
            },
            {
              name: 'Band 3',
              marks: '5-6',
              looksLike:
                'Looks at the section in some depth and starts to explain how the words and the order of events create the effect.',
            },
            {
              name: 'Band 4',
              marks: '7-8',
              looksLike:
                'Detailed, with some real insight, and beginning to analyse how the words and the order of events work on the reader.',
            },
            {
              name: 'Band 5',
              marks: '9-10',
              looksLike:
                'Thorough and insightful, picking apart in detail how language and structure work together, including the subtler choices.',
            },
          ],
          avoid: [
            'Writing only about words and ignoring how the events are put together.',
            'Telling the story instead of explaining how it is told.',
            'Long quotations with no comment.',
          ],
          tip: 'For each part of the section ask two things: why the writer tells us this here, and which words make it work.',
          markerQuestionId: 'A4',
        },
        {
          label: 'Question 05',
          kind: 'Evaluation',
          marks: 10,
          objectives: [{ id: 'AO4', marks: 10 }],
          minutes: 13,
          task: 'You are given a view, usually about a character or the story. Say how far you agree, using the final lines the question names and the passage as a whole, and explain how the writer created your thoughts and feelings.',
          rewards: [
            'A clear judgement on the view, held to from start to finish: you can agree, disagree or partly agree.',
            'Evidence from the final lines and from across the passage that supports your judgement.',
            'Comment on how the writer’s choices create your thoughts and feelings, not just on what happens.',
            'A sense of the passage as a whole, not a list of separate points.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-2',
              looksLike: 'An opinion, but with little more than a passing reference to the text.',
            },
            {
              name: 'Band 2',
              marks: '3-4',
              looksLike:
                'Gives a view and backs it with a few obvious references, but says little about the whole passage or how the writer works.',
            },
            {
              name: 'Band 3',
              marks: '5-6',
              looksLike:
                'Starts to judge the text for real, with sensible references and some sense of the whole passage and the writer’s choices.',
            },
            {
              name: 'Band 4',
              marks: '7-8',
              looksLike:
                'A clear, well-argued judgement that gets close to the text, with well-chosen evidence and real discussion of the writer’s choices.',
            },
            {
              name: 'Band 5',
              marks: '9-10',
              looksLike:
                'An argument that wins the reader over: it takes in the whole passage, every reference earns its place, and it shows real insight into how the writer steers our feelings.',
            },
          ],
          avoid: [
            'An argument that wanders or contradicts itself.',
            'Retelling the story instead of judging it.',
            'Writing only about the final lines and ignoring the rest of the passage.',
          ],
          tip: 'Give your answer to the view in your first sentence, then prove it with three or four points from across the passage.',
          markerQuestionId: 'A5',
        },
      ],
    },
    {
      name: 'Section B: Prose Writing',
      marks: 40,
      about: 'One piece of creative prose writing, chosen from four titles.',
      questions: [
        {
          label: 'Question 11 (a), (b), (c) or (d) (answer one)',
          kind: 'Creative prose writing',
          marks: 40,
          objectives: [
            { id: 'AO5', marks: 24 },
            { id: 'AO6', marks: 16 },
          ],
          minutes: 45,
          task: 'Choose one of four titles and write a story, or an account of an experience, real or imagined, aiming for about 450 to 600 words, as the paper suggests. A title may be a phrase, a time you did something, an opening line or a closing line.',
          rewards: [
            'A story with a clear shape: an opening that draws the reader in, a development and an ending that works.',
            'Characters, setting and events brought to life with detail and imagination.',
            'Paragraphs that move the story on, and sentences varied for effect.',
            'Two separate marks: up to 24 for the story itself and how it is organised (AO5), and up to 16 for accurate spelling, punctuation and grammar, varied sentences and ambitious words used precisely (AO6).',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: 'AO5 1-4, AO6 1-3',
              looksLike:
                'The story is very simple or hard to follow, with little organisation; sentences are mostly alike and errors in spelling, punctuation and tense are frequent.',
            },
            {
              name: 'Band 2',
              marks: 'AO5 5-9, AO6 4-6',
              looksLike:
                'A story you can follow that is starting to have a shape, though plot and characters are thin; sentences vary a little and most everyday words are spelt correctly.',
            },
            {
              name: 'Band 3',
              marks: 'AO5 10-14, AO6 7-10',
              looksLike:
                'A clear, well-organised story that is going somewhere, with some developed detail, though it plays safe; sentences vary and most punctuation and spelling are right.',
            },
            {
              name: 'Band 4',
              marks: 'AO5 15-19, AO6 11-13',
              looksLike:
                'A story in firm control, shaped with a clear purpose, with believable detail and some original ideas; sentences are chosen for effect, errors are rare and the vocabulary is ambitious.',
            },
            {
              name: 'Band 5',
              marks: 'AO5 20-24, AO6 14-16',
              looksLike:
                'An original story that holds the reader from start to end, with detailed characters and a carefully built structure; spelling, punctuation and grammar are close to faultless and the vocabulary is wide and exact.',
            },
          ],
          avoid: [
            'A purely descriptive piece, a poem or a script: the specification asks for a narrative, and writing that only describes cannot reach the top of the mark range.',
            'A story learnt in advance that does not fit the title you chose.',
            'Writing far less than the word guidance: very short pieces hold their own marks down.',
            'Sentences run together with commas, and missing full stops.',
          ],
          tip: 'Use the 10 planning minutes to decide where the story starts, its turning point and how it ends, then write towards that ending.',
          markerQuestionId: 'B1',
        },
      ],
    },
  ],
  timing: [
    'The paper is 1 hour 45 minutes. The section times below are the board’s own advice, printed on the front of the paper.',
    'Section A: about 10 minutes reading the extract, then about 50 minutes answering the five questions.',
    'Within those 50 minutes, a suggestion worked out from the marks (not the board’s): about 5 minutes on Question 01, 6 on Question 02 and 13 on each of Questions 03, 04 and 05.',
    'Section B: about 10 minutes planning and about 35 minutes writing.',
  ],
  checklist: [
    'Question 01 has five separate points, all from the lines named.',
    'Each reading answer stays inside the lines its question names; Question 05 also uses the passage as a whole.',
    'Your story fits the title you chose, and its ending works.',
    'Full stops are in the right places, with no sentences run together with commas.',
    'Common spellings are right (there, their, they’re; where, were) and names are spelt the same way throughout.',
  ],
}
