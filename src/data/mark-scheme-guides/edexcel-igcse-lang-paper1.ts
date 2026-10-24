/**
 * Pearson Edexcel International GCSE English Language A (4EA1), Paper 1:
 * Non-fiction Texts and Transactional Writing (4EA1/01).
 *
 * Checked on 24 October 2026 against Pearson's own documents:
 *   - the specification, Issue 7 (August 2025): 2 hours 15 minutes, 90 marks,
 *     60% of the qualification, the objectives in each section, the advice of
 *     1 hour 30 minutes on Section A and 45 minutes on Section B, and the six
 *     transactional forms, which Pearson's update for first teaching September
 *     2025 says are the only forms set from the November 2025 series;
 *   - the sample assessment materials, Issue 4 (July 2025), Component 1
 *     question paper and mark scheme: every tariff, objective and level range;
 *   - the June 2025 question paper (P78876A), mark scheme (4EA1_01_2506_MS)
 *     and examiners' report (4EA1_01_2506_ER): the same tariffs and ranges in
 *     a live series, the one-text limit on Question 5, and what examiners
 *     rewarded and penalised, which this guide puts in its own words.
 *
 * SECOND READING, 24 October 2026. Every figure above was re-read in the same
 * documents, with the June and November 2024 mark schemes and Pearson's news
 * item of 31 July 2025, and every one is right. What was changed:
 *   - Section B: each level held both grids in one marks string ('AO4 12-17,
 *     AO5 8-11') under one description; now ten entries, the AO4 grid then the
 *     AO5 grid, each lowest first with its own description (SAMs and June 2025
 *     mark scheme: two separate writing grids, out of 27 and 18).
 *   - Question 5: the one-text limit sat only inside Level 2; it is now also
 *     in `avoid` (June 2025 mark scheme: one text only, no higher than Level 2).
 *   - Question 3: the task said only "explain"; it now says explain or
 *     describe, as the papers do (SAMs Question 3 asks the student to describe).
 *   - Questions 2 and 3: the tips said "one per line" just after "the lines"
 *     of the extract, which reads as one point per line of the text; now
 *     "each on a new line".
 *   - Questions 2 and 4: two avoid lines repeated the examiners' report's own
 *     phrasing (copying with a word or two changed; drifting into an
 *     overview); both reworded (4EA1_01_2506_ER).
 *
 * AGAINST THE AI MARKER (src/lib/marking/mark-schemes/edexcel-igcse-lang.ts),
 * confirmed on the second reading: the total (90), duration (135), every
 * tariff (2, 4, 5, 12, 22, 45), every objective split (AO1 2, 4, 5; AO2 12;
 * AO3 22; AO4 27 + AO5 18), every level range and the Question 5 one-text
 * limit agree. Three smaller differences:
 *   - marker: Q3 caps a selection-only answer at 1 mark. Board: no such cap
 *     in the SAMs (Issue 4) or the June 2024, November 2024 or June 2025 mark
 *     schemes; the June 2025 report says only that quotations without
 *     explanation are not enough. The marker's own header says the cap comes
 *     from standardisation guidance, which is not public, so this guide does
 *     not state it.
 *   - marker: Q1 to Q3 are scored on two bands of its own, 'Partial' and
 *     'Secure' (Q1 1 and 2; Q2 1-2 and 3-4; Q3 1-2 and 3-5). Board: one mark
 *     per valid point, no levels. The marker's notes state the same
 *     one-mark-per-point rule.
 *   - marker: the Q6 task lists "report" among example forms. Board: the
 *     Issue 7 list, the only forms set from November 2025, has no report (see
 *     `task` on Question 6 or 7).
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'edexcel-igcse-lang-paper1',
  title: 'Edexcel International GCSE English Language A Paper 1',
  board: 'Edexcel International GCSE',
  qualification: 'International GCSE English Language A (4EA1)',
  paperName: 'Non-fiction Texts and Transactional Writing',
  durationMinutes: 135,
  totalMarks: 90,
  weighting: '60% of the International GCSE',
  summary:
    'The paper every International GCSE English Language A student sits. Section A tests reading with five questions on two non-fiction extracts, one unseen and one from the anthology; Section B is one piece of transactional writing, such as an article, a speech or a letter.',
  source: {
    document:
      'Pearson Edexcel International GCSE English Language A (4EA1) sample assessment materials, Issue 4 (July 2025), Component 1 question paper and mark scheme; checked with the specification, Issue 7 (August 2025), and the June 2025 Paper 1 question paper and mark scheme (4EA1_01_2506_MS)',
    url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Specification%20and%20sample%20assessments/international-gcse-english-language-a-sams-issue-4.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-language-a-2016.coursematerials.html',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Finding information and ideas in a text and showing you understand them (Questions 1 to 3).',
    },
    {
      id: 'AO2',
      plain:
        'Explaining how a writer uses language (word choices, images, sentence types) and structure (how the text is ordered and built) to create effects (Question 4).',
    },
    {
      id: 'AO3',
      plain:
        "Comparing two texts: how the writers' ideas and points of view are alike and different, and how each writer gets them across (Question 5).",
    },
    {
      id: 'AO4',
      plain:
        'Writing that does its job: the right form, tone and level of formality for the purpose and the reader (Section B).',
    },
    {
      id: 'AO5',
      plain:
        'Writing accurately: varied vocabulary and sentences, sensible paragraphs, and correct spelling, punctuation and grammar (Section B).',
    },
  ],
  sections: [
    {
      name: 'Section A: Reading',
      marks: 45,
      about:
        'Five questions on two non-fiction extracts printed in a booklet that comes with the paper: Questions 1 to 3 on an unseen extract (Text One), Question 4 on an extract from Part 1 of the Pearson Edexcel International GCSE English Anthology (Text Two), and Question 5 comparing the two.',
      questions: [
        {
          label: 'Question 1',
          kind: 'Retrieval: pick out words or phrases',
          marks: 2,
          objectives: [{ id: 'AO1', marks: 2 }],
          minutes: 3,
          task: 'Pick out two words or short phrases from the lines of Text One the question points you to. Each one must answer exactly what the question asks about.',
          rewards: [
            'One mark for each correct word or phrase, up to two.',
            'Words taken from inside the line numbers you are given.',
            'Words that fit the exact focus of the question, not just any words from those lines.',
          ],
          levels: [],
          avoid: [
            'Putting the answer in your own words: this question wants words from the text.',
            'Adding explanation or comment, which earns nothing here and costs time.',
            'Copying out whole lines instead of choosing.',
            'Taking words from outside the lines given.',
          ],
          tip: 'Underline the key words of the question, then find two short pieces of the given lines that match them. A single well-chosen word can be enough.',
          markerQuestionId: 'Q1',
        },
        {
          label: 'Question 2',
          kind: 'Understanding: explain in your own words',
          marks: 4,
          objectives: [{ id: 'AO1', marks: 4 }],
          minutes: 5,
          task: "Read the lines of Text One you are given and say, in your own words, what they tell you about the subject the question names, for example a person's experiences or feelings.",
          rewards: [
            'One mark for each separate, correct point, up to four.',
            'Points put in your own words, which shows you have understood them.',
            'Points taken only from the lines given.',
            'Each point written as a short, clear sentence, not a single word.',
          ],
          levels: [],
          avoid: [
            'Lifting sentences from the text and swapping a word here and there.',
            'Quotations: the question asks for your own words.',
            'Analysing language, which belongs to Question 4 and wastes time here.',
            'Making the same point twice in different words.',
          ],
          tip: 'Write four separate points, each on a new line and each in your own words. A fifth point is a sensible safety net in case one is not accepted.',
          markerQuestionId: 'Q2',
        },
        {
          label: 'Question 3',
          kind: 'Understanding: explain or describe, with brief quotations',
          marks: 5,
          objectives: [{ id: 'AO1', marks: 5 }],
          minutes: 7,
          task: 'Read the lines of Text One you are given and explain or describe what the question asks about, such as what you learn about a person or what happens to them. You may back up your points with brief quotations.',
          rewards: [
            'One mark for each separate, correct point, up to five.',
            'Explanations that show you understand, each backed by a few words of quotation where it helps.',
            'Points taken only from the lines given, worked through in order so none are missed.',
          ],
          levels: [],
          avoid: [
            'Quotations with no explanation: a quotation on its own does not show what you understood.',
            'Long quotations, when a few words will do.',
            'Material from outside the lines given.',
            'Writing far more than five points need, when bigger questions are still to come.',
          ],
          tip: 'Work through the given lines from the start and make five clear points, each on a new line, each with a short quotation and what it shows.',
          markerQuestionId: 'Q3',
        },
        {
          label: 'Question 4',
          kind: 'Language and structure analysis',
          marks: 12,
          objectives: [{ id: 'AO2', marks: 12 }],
          minutes: 25,
          task: 'Explain how the writer of Text Two, the anthology extract, uses language and structure to achieve the effect the question names, such as getting a view across or building tension. The whole extract is yours to use, and Text One is not needed.',
          rewards: [
            'Points on both language (word choices, imagery, sentence types) and structure (how the extract opens, develops, shifts and ends). They need not be equal, but both should be there.',
            'Brief, well-chosen quotations from across the extract, each followed by what it does to the reader.',
            'Explanations tied to this text and this question, not comments that could fit any text.',
            'Subject terms used accurately where they help, such as metaphor, tricolon (a list of three) or anecdote.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-2',
              looksLike:
                "Spots a feature or two, or retells what happens, with little idea of what the writer's choices do. Very few quotations.",
            },
            {
              name: 'Level 2',
              marks: '3-4',
              looksLike:
                "Comments on some of the writer's choices and what they do, but the comments stay general and the quotations are not followed up.",
            },
            {
              name: 'Level 3',
              marks: '5-7',
              looksLike:
                'Shows how particular words, sentences and structural choices create effects, and explains them, with quotations that fit the points.',
            },
            {
              name: 'Level 4',
              marks: '8-10',
              looksLike:
                "Explores the writer's choices in detail from across the extract, with plenty of well-chosen quotations, each one doing work for the answer.",
            },
            {
              name: 'Level 5',
              marks: '11-12',
              looksLike:
                "Analyses the writer's choices with real insight, picking exactly the right words from across the whole extract to make each point sharper.",
            },
          ],
          avoid: [
            'Retelling what the extract says instead of how the writer says it.',
            'Naming techniques without saying what they do here.',
            'Looking closely at the first few lines, then only summing up the rest: keep analysing to the end.',
            'Writing about Text One: this question is on Text Two only.',
          ],
          tip: 'Ask "how" of every quotation: what does this word or structural choice make the reader think or feel, and why did the writer put it there?',
          markerQuestionId: 'Q4',
        },
        {
          label: 'Question 5',
          kind: 'Comparing the two texts',
          marks: 22,
          objectives: [{ id: 'AO3', marks: 22 }],
          minutes: 45,
          task: 'Compare how the writers of Text One and Text Two present their ideas and perspectives (points of view) on the subject the question names, using examples and brief quotations from both texts.',
          rewards: [
            'Comparison in every paragraph: similarities and differences between the two writers, not one text and then the other.',
            "A range of comparisons, covering the writers' ideas, viewpoints, tone and purpose as well as their language and structure.",
            'Brief quotations from both texts, drawn evenly from each, backing up every comparison.',
            "Going beyond the obvious: explaining how and why the writers' viewpoints differ, not only that they do.",
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-4',
              looksLike:
                'Mostly describes what each writer says, with hardly any comparison and few references.',
            },
            {
              name: 'Level 2',
              marks: '5-8',
              looksLike:
                'Points out obvious similarities or differences with brief comments; references are there but not followed up. An answer that writes about only one of the texts cannot go above this level.',
            },
            {
              name: 'Level 3',
              marks: '9-13',
              looksLike:
                "Makes several sensible comparisons and explains the writers' ideas and viewpoints, with fitting references from both texts.",
            },
            {
              name: 'Level 4',
              marks: '14-18',
              looksLike:
                'Explores many points of comparison, including how each writer puts their ideas across, with evidence drawn evenly from both texts.',
            },
            {
              name: 'Level 5',
              marks: '19-22',
              looksLike:
                'Compares in depth and with insight across many aspects of the two texts, with precisely chosen evidence from both.',
            },
          ],
          avoid: [
            'Writing about one text at length and then the other, which leaves few actual comparisons.',
            "Matching techniques both writers use without linking them to the writers' ideas and viewpoints.",
            'Repeating your Question 4 answer: Question 5 needs both texts side by side.',
            'Leaving one text out: an answer on only one text cannot go above Level 2 (8 of the 22 marks), however good it is.',
          ],
          tip: 'Plan five or six points of comparison before you write, then open every paragraph with a sentence that names what both writers do.',
          markerQuestionId: 'Q5',
        },
      ],
    },
    {
      name: 'Section B: Transactional Writing',
      marks: 45,
      about:
        'One piece of transactional writing (writing for a real purpose and reader, such as persuading or advising), chosen from two tasks, each of which names the form you must write in.',
      questions: [
        {
          label: 'Question 6 or 7 (answer one)',
          kind: 'Transactional writing',
          marks: 45,
          objectives: [
            { id: 'AO4', marks: 27 },
            { id: 'AO5', marks: 18 },
          ],
          minutes: 45,
          task: 'Choose one of the two tasks and write the piece it asks for, in the form it names, for the reader and purpose it gives. From the November 2025 series Pearson sets only six forms: an article for a magazine or newspaper, a speech, a letter, a guide, a review or the text of a leaflet.',
          rewards: [
            'AO4, 27 marks: writing that fits its form, purpose and reader, with a tone and level of formality to match and ideas that are developed rather than listed.',
            'AO5, 18 marks: varied vocabulary and sentence types, clear paragraphs, and accurate spelling, punctuation and grammar. The two objectives are marked separately and added together.',
            'A shape that works: an opening that draws the reader in, points that build, and a real ending.',
            'Techniques chosen for the reader, such as direct address, a brief anecdote or a rhetorical question, kept up through the piece rather than only at the start.',
          ],
          levels: [
            {
              name: 'AO4: Level 1',
              marks: '1-5',
              looksLike:
                'Hard to follow, with little sense of why the piece is being written or who it is for, and little attempt at the form or a suitable tone.',
            },
            {
              name: 'AO4: Level 2',
              marks: '6-11',
              looksLike:
                'Mostly suits the task: there is some sense of the purpose and the reader, and the form and tone are handled in a plain, simple way.',
            },
            {
              name: 'AO4: Level 3',
              marks: '12-17',
              looksLike:
                'Clear writing that knows what it is for and who will read it, in a form and tone that suit the task.',
            },
            {
              name: 'AO4: Level 4',
              marks: '18-22',
              looksLike:
                'Writing that works on its reader: it achieves its purpose, keeps the reader in mind all the way through, and uses the form and a well-judged tone to good effect.',
            },
            {
              name: 'AO4: Level 5',
              marks: '23-27',
              looksLike:
                'Confident writing in which every choice of tone, form and detail is aimed exactly at the purpose and the reader.',
            },
            {
              name: 'AO5: Level 1',
              marks: '1-3',
              looksLike:
                'Plain, everyday words with frequent spelling errors. Sentences are short and repetitive, or run on with little punctuation, and the ideas are not clearly organised.',
            },
            {
              name: 'AO5: Level 2',
              marks: '4-7',
              looksLike:
                'Ideas are in a sensible order and in paragraphs. Common words are usually spelt correctly, punctuation is partly under control, and some sentences are joined with words such as and, but, because or when.',
            },
            {
              name: 'AO5: Level 3',
              marks: '8-11',
              looksLike:
                'Ideas link up and the paragraphs make the meaning easy to follow. There is a good range of vocabulary, harder words are usually spelt correctly, and a range of punctuation is used correctly, with sentences shaped to suit what they say.',
            },
            {
              name: 'AO5: Level 4',
              marks: '12-15',
              looksLike:
                'The whole piece holds together by design. Vocabulary is wide and carefully chosen, there are a few spelling slips at most, and punctuation and sentence shapes are chosen for clarity and effect.',
            },
            {
              name: 'AO5: Level 5',
              marks: '16-18',
              looksLike:
                'Complex ideas are handled with ease. A wide vocabulary is used with purpose, spelling is almost always correct, and sentences and punctuation are crafted for exact effects such as emphasis.',
            },
          ],
          avoid: [
            'Writing in the wrong form, or losing sight of who the reader is.',
            'Long stories that drift away from the purpose of the task.',
            'Drawing pictures or columns: write the words, though headings and the odd bullet point can suit a guide or leaflet.',
            'Common slips: commas joining two sentences, missing apostrophes, capital letters in the wrong places.',
          ],
          tip: 'Plan four or five developed points and your ending before you start, and keep the last five minutes to check punctuation and spelling.',
          markerQuestionId: 'Q6',
        },
      ],
    },
  ],
  timing: [
    "Pearson's advice: about 1 hour 30 minutes on Section A, including reading time, and about 45 minutes on Section B. The paper prints both.",
    'Within Section A, our suggestion from the marks: about 5 minutes reading Text One, then Question 1 about 3 minutes, Question 2 about 5, Question 3 about 7, Question 4 about 25 (with re-reading Text Two) and Question 5 about 45 (with a short plan).',
    'Questions 1 to 3 carry 11 marks between them and Questions 4 and 5 carry 34, so do not let the short questions eat the time the long ones need.',
    'Within Section B, our suggestion: about 5 minutes planning, 35 writing and 5 checking.',
  ],
  checklist: [
    'Questions 1 to 3: every point comes from inside the line numbers given.',
    'Question 2 is in your own words, and Question 3 has five separate points.',
    'Question 4 is about Text Two only and covers both language and structure.',
    'Question 5 compares both texts in every paragraph.',
    'Your writing is in the form the task asked for, has a proper ending, and the box for your chosen question is marked.',
    'A last read for missing full stops, commas joining two sentences, apostrophes and stray capital letters.',
  ],
}
