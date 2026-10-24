/**
 * AQA GCSE English Language (8700) Paper 2, Writers' Viewpoints and
 * Perspectives: the plain-English guide behind its mark-scheme card.
 *
 * Checked on 24 October 2026 against AQA's own documents on aqa.org.uk:
 *   - the 8700/2 sample question paper and mark scheme (version 1.0), Sample
 *     set 1, "first exam June 2026". From summer 2026 AQA reworded Question 2
 *     and the methods bullet of Question 4 (its "English language changes"
 *     page) but kept the structure, the marks and the objectives. The June
 *     2026 live mark scheme is not public yet, so the sample set is the
 *     current reference;
 *   - the 8700 specification, version 1.6 (March 2026): 1 hour 45 minutes,
 *     80 marks, 50% of the GCSE; one source from the 19th century and one from
 *     the 20th or 21st;
 *   - AQA's GCSE English Language Exam Timing Ideas (October 2024), the source
 *     of the per-question minutes. The paper's own advice (about 15 minutes'
 *     reading on the front cover, about 45 minutes at the start of each
 *     section) is from the sample question paper.
 *
 * Compared with the AI marker's data (../../lib/marking/mark-schemes/aqa-lang-paper2.ts),
 * which is NOT changed here; the guide follows the board:
 *   - Total (80), duration (105 minutes) and every question's marks and
 *     objective agree: Q1 4 AO1, Q2 8 AO1, Q3 12 AO2, Q4 16 AO3, Q5 40 (AO5
 *     24, AO6 16). Q1 is one mark per correct statement in both, and the level
 *     ranges for Q2 to Q5 agree.
 *   - Q2: marker: write a summary of the differences (or similarities); board
 *     from 2026: what you can infer about the differences the question names.
 *   - Caps in the board's mark scheme that the marker's data does not record:
 *     Q2 using one source only scores at most 3, and Level 3 or above needs
 *     both sources and the right focus; Q3 language from the wrong source or
 *     outside the given lines goes to the bottom of its level, and Level 3 or
 *     above needs the right focus; Q4 using one source only scores at most 6,
 *     and Level 3 or above needs both; Q5 AO5 is capped at 12 of 24 when the
 *     writing does not address the focus of the task.
 *   - Q4: marker's note: "Sustained comparison is required for Level 3+";
 *     board: Level 3 or above needs both texts, and no level asks for the
 *     comparison to be sustained.
 *
 * Second check, 24 October 2026: each fix, and the document that settles it.
 *   - Timing: credited the front cover with "45 minutes a section"; the cover
 *     gives the 15 minutes' reading and each section's heading gives the 45
 *     (sample question paper).
 *   - Q2: an invented example (two journeys) replaced by the sample's own
 *     focus, the differences between two trains (sample question paper).
 *   - Q5: the AO5 cap was worded as the board's note words it; now in plain
 *     words (sample mark scheme).
 *   - AO6 levels: Levels 3 and 4 followed the board's descriptor bullets
 *     closely and "marked off" was unclear; the ladder is reworded (sample
 *     mark scheme).
 *   - The Q4 difference from the marker above was added.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'aqa-lang-paper2',
  title: 'AQA English Language Paper 2',
  board: 'AQA',
  qualification: 'GCSE English Language (8700)',
  paperName: "Writers' Viewpoints and Perspectives",
  durationMinutes: 105,
  totalMarks: 80,
  weighting: '50% of the GCSE',
  summary:
    'You read two non-fiction texts on a linked topic, one from the 19th century and one from the 20th or 21st century, and answer four questions on them. Then you write your own text giving your view on a related statement. Reading and writing are worth 40 marks each.',
  source: {
    document:
      'AQA GCSE English Language 8700/2 sample mark scheme, version 1.0 (Sample set 1, first exam June 2026), with its question paper and the 8700 specification, version 1.6 (March 2026)',
    url: 'https://www.aqa.org.uk/files/14a75f30-f517-4371-befe-969d2ec0f800/f55d9f498261132baf0bcbd55fd4b2cedcd90a5c.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl: 'https://www.aqa.org.uk/subjects/english/gcse/english-8700/assessment-resources',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Find information and ideas, including what is only suggested, and bring together details from two texts.',
    },
    {
      id: 'AO2',
      plain:
        "Explain how a writer's choice of language affects the reader, using subject terms where they help.",
    },
    {
      id: 'AO3',
      plain:
        "Compare two writers' ideas and viewpoints, and the methods each one uses to get them across.",
    },
    {
      id: 'AO5',
      plain:
        'Write clearly and effectively for the form, purpose and audience you are given, with your ideas organised so the piece hangs together.',
    },
    {
      id: 'AO6',
      plain:
        'Write accurately: varied vocabulary and sentences, with correct spelling and punctuation.',
    },
  ],
  sections: [
    {
      name: 'Section A: Reading',
      marks: 40,
      about:
        'Four questions on two sources printed in a separate insert, Source A and Source B. They share a topic but were written in different centuries.',
      questions: [
        {
          label: 'Question 1',
          kind: 'Choosing true statements',
          marks: 4,
          objectives: [{ id: 'AO1', marks: 4 }],
          minutes: 5,
          task: 'Read the lines the question names and choose the four statements, from a list of eight, that are true. You shade the circle next to each one.',
          rewards: [
            'One mark for each true statement you shade, up to four.',
            'Checking each statement against the named lines, not against the rest of the source.',
          ],
          levels: [],
          avoid: [
            'Shading more than four: the paper tells you to choose a maximum of four.',
            'Judging a statement by how it sounds rather than by what the lines say.',
            'Lingering here: the question is worth 4 of the 80 marks.',
          ],
          tip: 'Find the exact words in the lines that make each statement true. Watch for statements that are almost right but change one detail.',
          markerQuestionId: 'Q1',
        },
        {
          label: 'Question 2',
          kind: 'Inference from both sources',
          marks: 8,
          objectives: [{ id: 'AO1', marks: 8 }],
          minutes: 8,
          task: 'Use both sources to explain what you can infer (work out from clues) about the differences the question names (on the sample paper, the differences between two trains). This means you synthesise: bring details from Source A and Source B together in one answer.',
          rewards: [
            'Details from both sources, paired up so that each difference is clear.',
            'Inferences: what each detail suggests, not only what it says.',
            'Short quotations or close references to back up each inference.',
            'Keeping to the focus of the question all the way through.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-2',
              looksLike:
                'Retells what the sources say rather than working anything out, with a simple difference and a detail or two.',
            },
            {
              name: 'Level 2',
              marks: '3-4',
              looksLike:
                'Makes some attempt to work out what details suggest, with some useful references and some differences noted.',
            },
            {
              name: 'Level 3',
              marks: '5-6',
              looksLike:
                'Draws sound inferences from both sources and links well-chosen details from each to show the differences.',
            },
            {
              name: 'Level 4',
              marks: '7-8',
              looksLike:
                'Makes sharp, thoughtful inferences and weaves precise details from both sources together to bring out the differences.',
            },
          ],
          avoid: [
            'Writing about one source only: that answer can score no more than 3 marks.',
            "Analysing the writers' language: that is Question 3. Here the marks are for what you can infer.",
            'Drifting from the focus named in the question: Level 3 and above need both sources and the right focus.',
          ],
          tip: 'Write in linked pairs: a detail from Source A and what it suggests, then a contrasting detail from Source B and what that suggests.',
          markerQuestionId: 'Q2',
        },
        {
          label: 'Question 3',
          kind: 'Language analysis',
          marks: 12,
          objectives: [{ id: 'AO2', marks: 12 }],
          minutes: 12,
          task: 'The question names one source and a set of lines. Explain how the writer uses language in those lines to describe something.',
          rewards: [
            'Short quotations from the named lines, each with a clear explanation of its effect.',
            'Close focus on single words and what they suggest, as well as on images and sentence forms.',
            'How the language shapes what the reader thinks or feels about the subject.',
            'Subject terms used correctly where they help.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-3',
              looksLike:
                'Says something basic about a word or two, or names a technique without saying what it does.',
            },
            {
              name: 'Level 2',
              marks: '4-6',
              looksLike:
                'Tries to say what some of the language does, with a few suitable quotations and some terms.',
            },
            {
              name: 'Level 3',
              marks: '7-9',
              looksLike:
                'For each quotation, says plainly what effect the words have on the reader and why, using several well-chosen quotations and correct terms.',
            },
            {
              name: 'Level 4',
              marks: '10-12',
              looksLike:
                "Looks beneath the surface, analysing how the writer's choices work together, with sharply chosen quotations and confident, precise terms.",
            },
          ],
          avoid: [
            'Using the wrong source or lines outside the named ones: the answer is placed at the bottom of its level.',
            'Missing the focus of the question: Level 3 and above need the right focus.',
            'Listing techniques without explaining what they do.',
          ],
          tip: 'Choose four or five short quotations from across the named lines. For each, say what a key word suggests and why the writer might have chosen it.',
          markerQuestionId: 'Q3',
        },
        {
          label: 'Question 4',
          kind: 'Comparing viewpoints',
          marks: 16,
          objectives: [{ id: 'AO3', marks: 16 }],
          minutes: 20,
          task: "Using the whole of both sources, compare the writers' feelings and perspectives on the topic they share, and the methods each uses to get them across. A perspective is a writer's way of seeing something, shaped by their own experience and time.",
          rewards: [
            'A comparison of what each writer thinks and feels, using linking words such as whereas and similarly.',
            "Comparing methods: how each writer's language, tone and structure convey their view.",
            'Evidence from across both whole sources, with what each piece shows.',
            'A comparison kept going throughout, rather than one source and then the other.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-4',
              looksLike:
                "Makes a basic link between the writers' views and spots a method or two, with simple references.",
            },
            {
              name: 'Level 2',
              marks: '5-8',
              looksLike:
                "Tries to compare the writers' views, with some comment on their methods and some useful detail.",
            },
            {
              name: 'Level 3',
              marks: '9-12',
              looksLike:
                'Compares the views directly and well, explaining how each writer conveys them, with relevant detail from both sources.',
            },
            {
              name: 'Level 4',
              marks: '13-16',
              looksLike:
                "Gives a thoughtful, sustained comparison, analysing how each writer's methods shape their view, with well-chosen detail from both sources.",
            },
          ],
          avoid: [
            'Writing about one source only: that answer can score no more than 6 marks.',
            'Comparing only what the writers say and never how they say it.',
            'Two separate essays with no links between them.',
          ],
          tip: 'Plan three or four points of comparison first. In each paragraph cover both writers: what each feels, how each shows it, and how the two differ.',
          markerQuestionId: 'Q4',
        },
      ],
    },
    {
      name: 'Section B: Writing',
      marks: 40,
      about:
        'One writing task: you give your own view on a statement linked to the topic of the sources, in the form and for the audience the task names.',
      questions: [
        {
          label: 'Question 5',
          kind: 'Writing to give your viewpoint',
          marks: 40,
          objectives: [
            { id: 'AO5', marks: 24 },
            { id: 'AO6', marks: 16 },
          ],
          minutes: 45,
          task: 'The task gives a statement on the topic of the sources and asks you to argue your point of view on it, in a set form for a set audience, for example an article or a speech.',
          rewards: [
            'A clear point of view that answers the statement and stays consistent.',
            'Writing that fits the form and the audience: the right tone, the right level of formality and the features the form needs.',
            'An organised argument: an engaging opening, paragraphs that build, and a strong ending.',
            'Persuasive methods chosen for a purpose, such as examples, direct address and an opposing view answered.',
            'Accurate spelling and punctuation with varied sentences: these earn the separate 16 marks for AO6.',
          ],
          levels: [
            {
              name: 'AO5 Level 1',
              marks: '1-6',
              looksLike:
                'States a view simply, with little sense of the audience. Ideas are few and loosely joined, and paragraphs, if used, do not really organise the argument.',
            },
            {
              name: 'AO5 Level 2',
              marks: '7-12',
              looksLike:
                'Puts a view across in places. There is some attempt at a suitable tone and form, some deliberate word choices, and paragraphs and linking phrases begin to organise the argument.',
            },
            {
              name: 'AO5 Level 3',
              marks: '13-18',
              looksLike:
                'Argues clearly throughout, in a tone that suits the form and audience. Vocabulary and persuasive methods are chosen for effect, and well-linked paragraphs build the case.',
            },
            {
              name: 'AO5 Level 4',
              marks: '19-24',
              looksLike:
                'Argues with real force and confidence, pitched exactly for the audience. Ambitious, exact vocabulary and a carefully planned structure carry the reader through a developed argument.',
            },
            {
              name: 'AO6 Level 1',
              marks: '1-4',
              looksLike:
                'A few sentences start and end in the right place, and some punctuation is used on purpose. Simple words are spelt correctly, but sentences and vocabulary are mostly simple.',
            },
            {
              name: 'AO6 Level 2',
              marks: '5-8',
              looksLike:
                'Sentences usually start and end in the right place, and several kinds of punctuation are tried. Some harder words are spelt correctly, with some variety in sentences and words.',
            },
            {
              name: 'AO6 Level 3',
              marks: '9-12',
              looksLike:
                'Sentences nearly always start and end in the right place, and most punctuation is used well. Most words are spelt right, hard ones included, and sentence types are varied on purpose.',
            },
            {
              name: 'AO6 Level 4',
              marks: '13-16',
              looksLike:
                'Every sentence starts and ends in the right place, and every kind of punctuation is used with skill. Even adventurous words are spelt right, and long sentences stay clear and correct.',
            },
          ],
          avoid: [
            'Ignoring the statement: if your writing does not respond to the statement in the way the task asks, the AO5 mark cannot go above 12 of 24.',
            'A list of undeveloped points: one idea per paragraph, explained and backed up, gives the argument weight.',
            'Techniques used for their own sake, such as a pile of rhetorical questions.',
            'Leaving no time to check: accuracy is worth 16 marks.',
          ],
          tip: 'Before writing, sum up your view in one sentence. Then plan four or five paragraphs that each push it forward, including an opposing view that you answer.',
          markerQuestionId: 'Q5',
        },
      ],
    },
  ],
  timing: [
    "These times are AQA's own advice. The front cover suggests about 15 minutes reading the sources and all five questions, and the start of each section suggests about 45 minutes on it.",
    "Section A, from AQA's Exam Timing Ideas: Question 1 about 5 minutes, Question 2 about 8 and Question 3 about 12.",
    'Question 4, from the same guide: about 5 minutes to re-read both sources and plan, then 15 to write.',
    'Question 5, from the same guide: about 5 minutes to plan, 35 to write and 5 to check.',
  ],
  checklist: [
    'Question 1: exactly four statements shaded, no more.',
    'Questions 2 and 4: have you used both sources?',
    'Question 3: are all your quotations from the source and lines the question named?',
    'Question 5: does your writing fit the form and audience, and answer the statement directly?',
    'Check full stops, capital letters, apostrophes and the spelling of your most ambitious words.',
  ],
}
