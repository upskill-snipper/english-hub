/**
 * Eduqas GCSE English Language (C700QS) Component 2: 19th and 21st Century
 * Non-Fiction Reading and Transactional/Persuasive Writing.
 *
 * CHECKED 24 October 2026 against Eduqas's own documents:
 *   - the Summer 2025 question paper and marking scheme (C700U20-1), linked
 *     from the Past Papers tab of eduqas.co.uk and served from WJEC's download
 *     host: question numbers, marks, objectives per question, the mark ranges,
 *     the word guidance and the advised times printed on the paper;
 *   - the specification, Version 3 (January 2019): duration, 60% weighting,
 *     the two texts (about 900 to 1,200 words in all) and the two compulsory
 *     20-mark writing tasks;
 *   - the Summer 2024 and November 2024 marking schemes, the 2014 sample
 *     assessment materials and the Summer 2026 examiners' report, which show
 *     the same six reading questions and two writing tasks. (The Summer 2026
 *     mark scheme is not yet public.)
 *
 * NUMBERING. Live papers number the questions 1.1 to 1.6 (Section A) and 2.1
 * and 2.2 (Section B), printed in two boxes as 11 to 16, 21 and 22. Only the
 * sample assessment materials used A1 to A6 and B1, B2. Questions 1.1 and 1.3
 * are worth 3 marks each: three 1-mark parts in recent papers; in the sample
 * paper A1 also had three 1-mark parts and A3 a 1-mark and a 2-mark part.
 * The Section A bands are listed by mark range in the mark schemes; the guide
 * numbers them Band 1 upwards, lowest first. Question 1.5 is marked one
 * description per mark.
 *
 * THE AI MARKER (src/lib/marking/mark-schemes/eduqas-lang.ts, eduqasLangComp2)
 * WAS CORRECTED TO THIS GUIDE on 24 October 2026, with the founder's approval
 * (document 30): its questions, marks, objectives and band ranges are now the
 * ones below, in the sample materials' numbering (A1 to A6 are Questions 1.1
 * to 1.6, B1 and B2 are 2.1 and 2.2), and __tests__/eduqas-lang-structure.test.ts
 * in that folder holds them to this guide. Until then it differed as follows.
 * Its declared total (80) and duration (120 minutes) agreed, but its questions
 * added up to 75: the five-mark gap then in KNOWN_TOTAL_MISMATCHES
 * (src/lib/marking/examiner/verification.ts), which said which question was
 * short "has not been established". No one question was short; Section A was
 * built differently:
 *   - marker: A1 5 marks AO1 (list five things, 21st-century text); board:
 *     Question 1.1 3 marks AO1 (short parts, 21st-century text).
 *   - marker: A2 5 marks, AO1 3 + AO2 2 (inference, 19th-century text); board:
 *     no such question. The 19th-century text has Question 1.3, 3 marks AO1,
 *     and Question 1.4, 10 marks AO4.
 *   - marker: A3 10 marks AO2 on the 19th-century text, asking only how the
 *     writer uses language; board: Question 1.2, 10 marks AO2, on the
 *     21st-century text, asking about what is said, language, tone, structure
 *     and other methods (AO2 1a, b, c and d).
 *   - marker: no AO4 question; board: Question 1.4 10 marks AO4.
 *   - marker: no synthesis question; board: Question 1.5 4 marks AO1 (select
 *     and bring together details from both texts).
 *   - marker: A4 10 marks AO3; board: Question 1.6 10 marks AO3 (agreed, but
 *     it is the last question, not the fourth).
 *   - marker: A5 5 marks AO6 (proofreading); board: no such question, and
 *     Section A carries no AO6 marks.
 *   - marker: Section A 5 questions, 35 marks (AO1 8, AO2 12, AO3 10, AO6 5),
 *     so the paper summed to 75; board: 6 questions, 40 marks (AO1 10, AO2 10,
 *     AO3 10, AO4 10), paper 80.
 *   - marker: B1 "Choose one of the following tasks" and B2 "A different form
 *     from B1 is required"; board: Questions 2.1 and 2.2 are both compulsory,
 *     and the paper sets each task's form, purpose and reader.
 *   - marker: B1 and B2 AO5 bands 0-3, 4-5, 6-8, 9-10, 11-12 and AO6 in four
 *     bands 0-2, 3-4, 5-6, 7-8; board: AO5 1-2, 3-4, 5-7, 8-10, 11-12 and AO6
 *     in five bands 1, 2-3, 4-5, 6-7, 8 (0 where nothing earns credit).
 *   - Not a board difference: A2's and A5's band ladders overlapped, so one
 *     mark sat in two bands (the Component 1 guide gives the figures).
 *   - These agreed: B1 and B2 20 marks each, AO5 12 + AO6 8.
 *
 * markerQuestionId: Questions 1.1 to 1.6 point at A1 to A6, and 2.1 and 2.2 at
 * B1 and B2. Until the correction, 1.1, 1.3, 1.4 and 1.5 had no marker
 * question, 1.2 pointed at A3 (then a 10-mark AO2 question on the
 * 19th-century text) and 1.6 at A4 (then the comparison).
 *
 * SECOND CHECK, 24 October 2026 (an independent reader, against the same
 * documents). Fixed:
 *   - NUMBERING said 1.1 and 1.3 were each a 1-mark and a 2-mark part in the
 *     sample paper; there A1 had three 1-mark parts and only A3 was 1 + 2
 *     (2014 sample assessment materials).
 *   - Question 1.6 Band 3 asked for "real discussion" of how the writers
 *     present their ideas; the Summer 2025 band asks only for an attempt, and
 *     the Summer 2026 report says details from both texts alone reached Band
 *     3. Reworded.
 *   - AO6's plain line repeated the objective's own wording; now plain words.
 *   - Three phrases that matched Eduqas's own wording word for word (the AO2
 *     line and two Question 1.2 and 1.5 rewards) reworded.
 *   - Marker differences: added that A3 asks about language only, the
 *     overlapping ladders, and where the five-mark gap comes from.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'eduqas-lang-comp2',
  title: 'Eduqas English Language Component 2',
  board: 'Eduqas',
  qualification: 'GCSE English Language (C700QS)',
  paperName: '19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
  durationMinutes: 120,
  totalMarks: 80,
  weighting: '60% of the GCSE',
  summary:
    'In Section A you read two non-fiction texts you have not seen before, one from the 19th century and one from the 21st, and answer six questions. In Section B you write two compulsory pieces, such as a letter, article, review or speech.',
  source: {
    document:
      'Eduqas GCSE English Language Component 2 (C700U20-1) marking scheme and question paper, Summer 2025, checked with the specification (Version 3, January 2019) and the Summer 2026 examiners’ report',
    url: 'https://pastpapers.download.wjec.co.uk/S25/S25-C700U20-1-ms.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl: 'https://www.eduqas.co.uk/qualifications/english-language-gcse/#tab_pastpapers',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Find and explain information and ideas, both stated and suggested, and pick out and bring together details from different texts.',
    },
    {
      id: 'AO2',
      plain:
        'Explain how a writer’s choices of language and structure create effects and shape what readers think, using subject terms to back up your points.',
    },
    {
      id: 'AO3',
      plain: 'Compare the ideas and viewpoints of two writers, and how each one gets them across.',
    },
    {
      id: 'AO4',
      plain:
        'Weigh up a text and give your own reasoned judgement about it, supported by references to the text.',
    },
    {
      id: 'AO5',
      plain:
        'Write clearly and effectively in a form, tone and style that suit your purpose and reader, and organise your ideas so the writing holds together.',
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
        'Six questions on two unseen non-fiction texts, one from the 19th century and one from the 21st century, about 900 to 1,200 words in all.',
      questions: [
        {
          label: 'Question 1.1',
          kind: 'Finding information',
          marks: 3,
          objectives: [{ id: 'AO1', marks: 3 }],
          minutes: 4,
          task: 'Short questions on the 21st-century text, worth 3 marks in all, each asking for a piece of information you can find in it.',
          rewards: [
            'One mark for each correct answer.',
            'Answers taken from the right text and the right part of it.',
            'Short, exact answers: a phrase is usually enough.',
          ],
          levels: [],
          avoid: [
            'Answering from the wrong text.',
            'Writing at length: three marks need three short answers.',
          ],
          tip: 'Read the whole text first: an answer can sit anywhere in it, including near the end.',
          markerQuestionId: 'A1',
        },
        {
          label: 'Question 1.2',
          kind: 'How the writer achieves a purpose',
          marks: 10,
          objectives: [{ id: 'AO2', marks: 10 }],
          minutes: 12,
          task: 'Explain how the writer of the 21st-century text tries to do something, for example persuade you or show what a person or event is like. The question points you to what is said, the language, tone and structure, and other methods.',
          rewards: [
            'A range of details from all parts of the text, worked through in order.',
            'An explanation of how each detail does what the question asks.',
            'Analysis of language, tone and structure (for example facts and figures, quotations from experts, the order of ideas), with subject terms used accurately.',
            'Quotations long enough to make sense, each followed by a comment.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-2',
              looksLike:
                'Notices a detail or two, but the answer is short and drifts from the question.',
            },
            {
              name: 'Band 2',
              marks: '3-4',
              looksLike:
                'Finds some useful details and says a little about them, but misses parts of the text.',
            },
            {
              name: 'Band 3',
              marks: '5-6',
              looksLike:
                'Covers a fair spread of details and starts to explain how the writer’s words, tone and structure do their job.',
            },
            {
              name: 'Band 4',
              marks: '7-8',
              looksLike:
                'Plenty of well-chosen details, explained correctly, with analysis of how the writer influences the reader starting to come through and subject terms that help.',
            },
            {
              name: 'Band 5',
              marks: '9-10',
              looksLike:
                'Covers the whole text with sharp, well-explained points and picks apart in detail how the writer’s methods work on the reader.',
            },
          ],
          avoid: [
            'Tiny fragments of quotation with no explanation, which earn little.',
            'Covering only the opening paragraphs.',
            'Listing techniques without linking them to the question.',
          ],
          tip: 'Track the text paragraph by paragraph, and keep using the question’s key word in your explanations.',
          markerQuestionId: 'A2',
        },
        {
          label: 'Question 1.3',
          kind: 'Finding and understanding information',
          marks: 3,
          objectives: [{ id: 'AO1', marks: 3 }],
          minutes: 4,
          task: 'Short questions on the 19th-century text, worth 3 marks in all, asking what it says or what it means.',
          rewards: [
            'One mark for each correct answer.',
            'Answers that show you have understood the older language, put simply.',
            'Answers taken from the 19th-century text.',
          ],
          levels: [],
          avoid: [
            'Copying a long passage in the hope that the answer is somewhere in it.',
            'Answering from the 21st-century text.',
          ],
          tip: 'If a word is unfamiliar, read the sentences around it: the meaning is usually clear from them.',
          markerQuestionId: 'A3',
        },
        {
          label: 'Question 1.4',
          kind: 'Evaluation',
          marks: 10,
          objectives: [{ id: 'AO4', marks: 10 }],
          minutes: 12,
          task: 'Give your judgement on the 19th-century text, often by saying how far you agree with a statement about it, thinking about both what is said and how it is said.',
          rewards: [
            'A clear judgement, kept up from start to finish.',
            'A range of details from across the text, worked through in order, to support your view.',
            'Comment on the writer’s language and how it shows their feelings or attitudes.',
            'A sense of the whole text, not just one part.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-2',
              looksLike: 'A quick opinion or a detail or two, with little to back it up.',
            },
            {
              name: 'Band 2',
              marks: '3-4',
              looksLike:
                'Begins to test the statement against the text, with some evidence, but leaves parts of the text out.',
            },
            {
              name: 'Band 3',
              marks: '5-6',
              looksLike:
                'Judges the statement properly, using details from across the text and noticing how the language helps.',
            },
            {
              name: 'Band 4',
              marks: '7-8',
              looksLike:
                'A clear, well-argued judgement with well-chosen evidence, showing how the writer’s words and details reveal their feelings or views.',
            },
            {
              name: 'Band 5',
              marks: '9-10',
              looksLike:
                'A detailed argument that wins the reader over, takes in the whole text and makes sharp points about how it works, with every reference earning its place.',
            },
          ],
          avoid: [
            'Summarising the text without judging it.',
            'Writing about the 21st-century text.',
            'Stopping halfway: a writer’s view can change or build through the text, so use all of it.',
          ],
          tip: 'Decide your answer first, then track the text from beginning to end, noting how far each part supports the statement.',
          markerQuestionId: 'A4',
        },
        {
          label: 'Question 1.5',
          kind: 'Bringing details together',
          marks: 4,
          objectives: [{ id: 'AO1', marks: 4 }],
          minutes: 5,
          task: 'Using both texts, explain briefly what they tell you about one shared topic. This is synthesis: bringing together the relevant details from each text in one short answer.',
          rewards: [
            'Relevant details from both texts, with it clear which text each comes from.',
            'Precise details that cover every part of what is asked.',
            'Brevity: one or two sentences on each text can be enough.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1',
              looksLike: 'Only a little relevant detail, or details from just one text.',
            },
            {
              name: 'Band 2',
              marks: '2',
              looksLike: 'A relevant detail or two from each text.',
            },
            {
              name: 'Band 3',
              marks: '3',
              looksLike: 'Several relevant details from both texts, pulled together sensibly.',
            },
            {
              name: 'Band 4',
              marks: '4',
              looksLike:
                'A good spread of exactly the right details from both texts, pulled together clearly.',
            },
          ],
          avoid: [
            'Using only one text: an answer on one text stays in the lowest band.',
            'Answering only half of what is asked.',
            'Analysing language: this question wants the details, not how they are written.',
          ],
          tip: 'Write two or three sentences, one for each text, each naming the text and giving the exact details.',
          markerQuestionId: 'A5',
        },
        {
          label: 'Question 1.6',
          kind: 'Comparison',
          marks: 10,
          objectives: [{ id: 'AO3', marks: 10 }],
          minutes: 13,
          task: 'Compare the two texts on a shared topic: what each writer says (their ideas, experiences or attitudes) and how each writer gets it across to readers.',
          rewards: [
            'Points about both texts, always making clear which text you mean.',
            'Both halves of the question: what the writers say and how they make it clear.',
            'Valid details from across both texts, explored rather than listed.',
            'Links between the texts, signalled with words such as whereas, similarly and in contrast.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: '1-2',
              looksLike:
                'A detail or two, perhaps from only one text or with no way to tell which text is meant.',
            },
            {
              name: 'Band 2',
              marks: '3-4',
              looksLike:
                'Some sound details from both texts and a first try at saying how the writers get them across.',
            },
            {
              name: 'Band 3',
              marks: '5-6',
              looksLike:
                'A fair number of sound details from both texts, and an attempt to explore how each writer presents them.',
            },
            {
              name: 'Band 4',
              marks: '7-8',
              looksLike:
                'Details from both texts examined properly, with detailed comment on the methods each writer uses.',
            },
            {
              name: 'Band 5',
              marks: '9-10',
              looksLike:
                'Both texts examined in depth, with a clear grasp of how and why each writer’s methods work on readers.',
            },
          ],
          avoid: [
            'Writing about one text only, or not saying which text you mean.',
            'Covering what the writers say but not how they say it.',
            'Leaving too little time: this is the last reading question.',
          ],
          tip: 'Plan two or three shared points, and for each one say what both texts show and how each writer does it.',
          markerQuestionId: 'A6',
        },
      ],
    },
    {
      name: 'Section B: Writing',
      marks: 40,
      about: 'Two compulsory transactional or persuasive writing tasks, worth 20 marks each.',
      questions: [
        {
          label: 'Question 2.1',
          kind: 'Transactional or persuasive writing',
          marks: 20,
          objectives: [
            { id: 'AO5', marks: 12 },
            { id: 'AO6', marks: 8 },
          ],
          minutes: 30,
          task: 'Write the piece the task sets, for example a letter, article, report, review or speech, for the purpose and reader it names. Aim for about 300 to 400 words, as the paper suggests.',
          rewards: [
            'The form the task asks for, with its features (for example a letter’s greeting and sign-off, or an article’s headline).',
            'A tone that suits the reader, such as formal for a council or an employer.',
            'Ideas developed with reasons and relevant detail, in clear paragraphs that build an argument.',
            'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: 'AO5 1-2, AO6 1',
              looksLike:
                'Some idea of the form and the reader, but little to say and ideas in a simple order; sentences are mostly alike and errors are frequent.',
            },
            {
              name: 'Band 2',
              marks: 'AO5 3-4, AO6 2-3',
              looksLike:
                'Aware of the purpose and reader, with a few reasons and paragraphs, though points are not developed; sentences vary a little and most spelling is right.',
            },
            {
              name: 'Band 3',
              marks: 'AO5 5-7, AO6 4-5',
              looksLike:
                'Fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case; mostly accurate, with a mix of sentences and punctuation.',
            },
            {
              name: 'Band 4',
              marks: 'AO5 8-10, AO6 6-7',
              looksLike:
                'Right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure; sentences are varied for effect and errors are rare.',
            },
            {
              name: 'Band 5',
              marks: 'AO5 11-12, AO6 8',
              looksLike:
                'Ambitious, polished writing: the tone is exactly right for the reader, the ideas are developed in depth and persuade, and accuracy is close to faultless, with a wide, precise vocabulary.',
            },
          ],
          avoid: [
            'Forgetting the form and the reader: the marks reward writing that fits both.',
            'Writing far below the word guidance: brief answers rarely develop their points.',
            'Everyday slips such as your and you’re, its and it’s, were and where.',
          ],
          tip: 'Plan for 5 minutes: three or four main points in a sensible order, an opening that suits the form and an ending that rounds it off.',
          markerQuestionId: 'B1',
        },
        {
          label: 'Question 2.2',
          kind: 'Transactional or persuasive writing',
          marks: 20,
          objectives: [
            { id: 'AO5', marks: 12 },
            { id: 'AO6', marks: 8 },
          ],
          minutes: 30,
          task: 'The second compulsory task: write the piece the paper sets, for its own purpose and reader, again in about 300 to 400 words. Across the two tasks the paper covers a range of forms, purposes and readers.',
          rewards: [
            'The conventions of the form set, for example a review’s verdict or a speech’s direct address to its audience.',
            'A tone and register that suit this task’s reader, which may differ from the first task’s.',
            'A clear viewpoint, developed with reasons, examples and detail.',
            'Accurate spelling, punctuation and grammar, with varied sentences and well-chosen words: 8 of the 20 marks are for this.',
          ],
          levels: [
            {
              name: 'Band 1',
              marks: 'AO5 1-2, AO6 1',
              looksLike:
                'Some idea of the form and the reader, but little to say and ideas in a simple order; sentences are mostly alike and errors are frequent.',
            },
            {
              name: 'Band 2',
              marks: 'AO5 3-4, AO6 2-3',
              looksLike:
                'Aware of the purpose and reader, with a few reasons and paragraphs, though points are not developed; sentences vary a little and most spelling is right.',
            },
            {
              name: 'Band 3',
              marks: 'AO5 5-7, AO6 4-5',
              looksLike:
                'Fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case; mostly accurate, with a mix of sentences and punctuation.',
            },
            {
              name: 'Band 4',
              marks: 'AO5 8-10, AO6 6-7',
              looksLike:
                'Right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure; sentences are varied for effect and errors are rare.',
            },
            {
              name: 'Band 5',
              marks: 'AO5 11-12, AO6 8',
              looksLike:
                'Ambitious, polished writing: the tone is exactly right for the reader, the ideas are developed in depth and persuade, and accuracy is close to faultless, with a wide, precise vocabulary.',
            },
          ],
          avoid: [
            'Running short of time: the two tasks carry equal marks.',
            'Writing in the same style as the first task when the form or reader is different.',
            'Paragraphs that list points without developing them.',
          ],
          tip: 'Keep a full 30 minutes for this task, and check it with the same care as the first.',
          markerQuestionId: 'B2',
        },
      ],
    },
  ],
  timing: [
    'The paper is 2 hours. The section times below are the board’s own advice, printed on the front of the paper.',
    'Section A: about 10 minutes reading both texts, then about 50 minutes answering the six questions.',
    'Within those 50 minutes, a suggestion worked out from the marks (not the board’s): about 4 minutes each on Questions 1.1 and 1.3, 12 each on 1.2 and 1.4, 5 on 1.5 and 13 on 1.6.',
    'Section B: 30 minutes on each task, about 5 minutes planning and about 25 minutes writing.',
  ],
  checklist: [
    'Each answer uses the text its question names; Questions 1.5 and 1.6 use both, and say which text each point comes from.',
    'Question 1.6 covers how the writers get their ideas across, not only what they say.',
    'Both writing tasks are finished, in the form each one asks for.',
    'Each piece has clear paragraphs and an opening and ending that suit its form.',
    'Common errors are fixed: your and you’re, its and it’s, there and their, and full stops between sentences.',
  ],
}
