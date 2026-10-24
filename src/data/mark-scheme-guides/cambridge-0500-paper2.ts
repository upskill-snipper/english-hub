/**
 * Cambridge IGCSE First Language English (0500) Paper 2: Directed Writing and
 * Composition.
 *
 * CHECKED 24 October 2026 against Cambridge's own documents:
 *  - Cambridge IGCSE First Language English 0500 syllabus for exams in 2027,
 *    2028 and 2029, Version 1 (September 2024): pages 8 to 10 (assessment
 *    overview, objectives, weightings) and 16 and 17 (each section, its marks
 *    and the objectives each part tests).
 *    https://www.cambridgeinternational.org/Images/718783-2027-2029-syllabus.pdf
 *  - 0500/02 specimen mark scheme for examination from 2027 (v1, 2024), for
 *    the level names and mark ranges and for the composition's split of 16
 *    (content and structure, W1 W2) and 24 (style and accuracy, W3 W4 W5),
 *    which the syllabus gives only as 40 marks for W1 to W5.
 *    https://www.cambridgeinternational.org/Images/718839-2027-specimen-paper-2-mark-scheme.pdf
 *  - the 2024-2026 syllabus, Version 1 (September 2021), page 15, for the
 *    November 2026 note below.
 *    https://www.cambridgeinternational.org/Images/635230-2024-2026-syllabus.pdf
 *
 * WHICH SYLLABUS. This guide describes the 2027-2029 syllabus, which every
 * series from March 2027 (India) and June 2027 uses, and which the AI marker
 * already follows. November 2026 is the last series on the 2024-2026 syllabus,
 * whose Section A is ONE directed writing task of 40 marks (writing 25, W1 to
 * W5; reading 15, R1 R2 R3 R5) on one or two texts of 650-750 words, with no
 * separate 5-mark question, R4 not tested, and a speech, letter or article to
 * write (a report is new for 2027). Section B, the composition, is the same in
 * both: 40 marks, one of four titles, about 350 to 450 words. The summary line
 * says so, so a November 2026 candidate is not misled.
 *
 * HOW THE DOCUMENTS WERE READ. cambridgeinternational.org was down for
 * maintenance on the morning of 24 October 2026 (every page served a
 * "temporarily unavailable" notice and every PDF a 404). The two syllabuses
 * were read from copies downloaded from those URLs on 19 September and
 * 20 October 2026, each byte-identical to the Internet Archive's capture of
 * its official URL (2027-2029 captured 12 December 2024, 2024-2026 captured
 * 2 October 2026). The specimen mark scheme (12 pages, Maximum Mark 80) was
 * read from the Archive's capture of its official URL taken 12 October 2026,
 * byte-identical to the capture of 14 July 2025, so it has not changed since
 * it was published.
 *
 * WHAT IS LEFT OUT. Level ranges come from the specimen mark scheme; no live
 * 2027-syllabus paper exists yet to confirm them. The number of bullet points
 * in Question 1(b) is not fixed by the syllabus (the specimen has two), so the
 * guide does not state one. Cambridge does not split a part's marks between
 * individual objectives, so each `objectives` entry groups the codes that
 * share the marks (for example 'R1, R2, R3, R5': 10).
 *
 * DIFFERENCES FROM THE AI MARKER (src/lib/marking/mark-schemes/cambridge-0500.ts),
 * CORRECTED 24 October 2026. The founder approved changing the marker
 * (document 30), and it now marks both sections as this guide describes,
 * each part on its own grid with these level ranges, held to this guide by
 * src/lib/marking/mark-schemes/__tests__/cambridge-structure.test.ts. Kept
 * below as the record of what it did before. Totals agree:
 * 80 marks, 120 minutes, Section A 40 (reading 15, writing 25) and Section B
 * 40 (16 and 24). The marker's notes say the 16/24 split "was NOT re-read for
 * 2027-2029": it matches the 2027 specimen mark scheme. What differs is how
 * marks are given inside each section:
 *  - Section A: marker one 15-mark reading grid (bands 1-3, 4-6, 7-9, 10-12,
 *    13-15) and one 25-mark writing grid in five bands (1-5, 6-10, 11-15,
 *    16-20, 21-25); board: 1(a) R3 R4 5 marks (Levels 1-3: 1, 2-3, 4-5),
 *    1(b) reading R1 R2 R3 R5 10 marks (Levels 1-5: 1-2, 3-4, 5-6, 7-8,
 *    9-10) and 1(b) writing W1 to W5 25 marks in SIX levels (1-5, 6-9, 10-13,
 *    14-17, 18-21, 22-25).
 *  - Section B: marker five bands for each grid (content and structure 1-3,
 *    4-6, 7-9, 10-13, 14-16; style and accuracy 1-5, 6-10, 11-15, 16-20,
 *    21-24); board: SIX levels for each (16 marks: 1-2, 3-4, 5-7, 8-10,
 *    11-13, 14-16; 24 marks: 1-4, 5-8, 9-12, 13-16, 17-20, 21-24).
 * The marker's 'Section A' covers both 1(a) and 1(b), so both entries below
 * link to it.
 *
 * SECOND CHECK, 24 October 2026, by an independent reader. The live site
 * still served its maintenance notice at 11:00, so the Internet Archive
 * captures named above were fetched again, with the specimen question paper
 * (Images/718843-2027-specimen-paper-2.pdf) and the June 2024 0500/21 mark
 * scheme (Images/521329-june-2024-mark-scheme-paper-21.pdf), both captured
 * 12 October 2026. Each syllabus and specimen copy is byte-identical (SHA-256)
 * to the copy this guide was written from, and every mark, objective and
 * level range below matches them. Fixed:
 *  - summary: the November 2026 note did not say what still applies to that
 *    candidate; now it says Section A differs and the composition task and
 *    its marks are the same (2027-2029 syllabus p. 40: 'tasks remain
 *    unchanged'; June 2024 0500/21 mark scheme: the same six level ranges in
 *    both composition grids).
 *  - Section B content and structure Level 6: 'original' is not in Cambridge's
 *    level and its focus on the task was missing; now 'tightly focused on the
 *    title' (specimen mark scheme p. 11, Table D).
 *  - objectives: R3 lacked 'analyse', R4 was narrowed to word choices and W1
 *    lacked 'imagined'; now each matches its objective (syllabus p. 9).
 *  - wording for a 14-year-old: 'apt', 'seldom' and 'assured' in three level
 *    descriptions are now plain words; the meaning is unchanged.
 *
 * DIFFERENCES THE LIST ABOVE MISSED, in the marker's wording rather than its
 * marks, also corrected on 24 October 2026
 * (src/lib/marking/prompt-builder.ts puts each objective's description
 * and every band's descriptor and indicators into the marking prompt):
 *  - Section A reading: the bands assume two texts ('Some ideas from both
 *    texts', 'synthesised across both texts') and have nothing for 1(a),
 *    which tests R3 and R4 (in the specimen, judging a person's attitude);
 *    board: one or two texts (syllabus p. 16).
 * Not a defect: the marker words W2 and W4 as in 2024-2026 ('use register
 * appropriate to context'); Cambridge says the 2027 rewording changed no
 * knowledge or skill assessed (2027-2029 syllabus p. 39).
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'cambridge-0500-paper2',
  title: 'Cambridge IGCSE First Language English Paper 2',
  board: 'Cambridge',
  qualification: 'Cambridge IGCSE First Language English (0500), 2027-2029 syllabus',
  paperName: 'Directed Writing and Composition',
  durationMinutes: 120,
  totalMarks: 80,
  weighting: '50% of the IGCSE (taken instead of Component 3, the Coursework Portfolio)',
  summary:
    'Two sections worth 40 marks each: directed writing based on one or two short texts printed in a separate insert, then a composition (a description or a story) chosen from four titles. This guide is for exams in 2027, 2028 and 2029; if you sit Paper 2 in November 2026, your paper follows the older 2024-2026 syllabus, where Section A is one directed writing task worth 40 marks with no 5-mark question first, but the Section B composition and its marks are the same as here.',
  source: {
    document:
      'Cambridge IGCSE First Language English 0500 syllabus for exams in 2027, 2028 and 2029, Version 1 (pages 16 and 17), with the 0500/02 specimen mark scheme for examination from 2027 for the level ranges and the composition split',
    url: 'https://www.cambridgeinternational.org/Images/718783-2027-2029-syllabus.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-english-first-language-0500/past-papers/',
  objectives: [
    {
      id: 'R1',
      plain: 'Understand what a text says directly: the facts and details actually on the page.',
    },
    {
      id: 'R2',
      plain:
        'Work out what a text suggests without saying it outright, including what the writer or the people in it think and feel.',
    },
    {
      id: 'R3',
      plain:
        'Examine the facts, ideas and opinions in a text, judge how far they hold up and build on them, backing each point with details from the text.',
    },
    {
      id: 'R4',
      plain:
        'Show how a writer creates effects and influences the reader, for example through the choice of particular words and phrases.',
    },
    {
      id: 'R5',
      plain:
        'Pick out the information a task needs and use it for that task, leaving the rest aside.',
    },
    {
      id: 'W1',
      plain: 'Put experiences, and what you think, feel and imagine, clearly into words.',
    },
    {
      id: 'W2',
      plain:
        'Organise facts, ideas and opinions on purpose, so the order and shape of the writing help it do its job.',
    },
    {
      id: 'W3',
      plain:
        'Use varied words chosen with care, and different kinds of sentences, to suit the task.',
    },
    {
      id: 'W4',
      plain: 'Write in a way that suits your purpose and keeps your reader interested.',
    },
    {
      id: 'W5',
      plain: 'Spell, punctuate and use grammar accurately.',
    },
  ],
  sections: [
    {
      name: 'Section A: Directed Writing',
      marks: 40,
      about:
        'One question in two parts, based on one or two texts of about 550 to 650 words in all: a short answer on the text, then a longer piece of writing that uses it.',
      questions: [
        {
          label: 'Question 1(a)',
          kind: 'Short answer on the text',
          marks: 5,
          objectives: [{ id: 'R3, R4', marks: 5 }],
          minutes: 8,
          task: "Answer a structured question that asks you to analyse and evaluate (weigh up) something in the text or an extract from it, such as a person's attitude, in your own words, with details from the text as evidence.",
          rewards: [
            'A clear judgement that answers exactly what the question asks.',
            'Details from the text for each point, with what each one shows.',
            "What the words suggest as well as what they say: how the writer's choices reveal the attitude or idea.",
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1',
              looksLike: 'Shows only a slight grasp of what the question asks about.',
            },
            {
              name: 'Level 2',
              marks: '2-3',
              looksLike:
                'Partly understands what the question asks about and backs it up with a detail or two.',
            },
            {
              name: 'Level 3',
              marks: '4-5',
              looksLike:
                'Gets to the heart of what the question asks about and supports each point with well-chosen details from the text.',
            },
          ],
          avoid: [
            'Copying the extract instead of explaining it in your own words.',
            'Writing at length: it is worth 5 marks, and Question 1(b) needs your time.',
            'Using material from outside the extract when the question gives you one.',
          ],
          tip: 'Make two or three short judgements, each followed straight away by the detail that proves it.',
          markerQuestionId: 'Section A',
        },
        {
          label: 'Question 1(b)',
          kind: 'Directed writing',
          marks: 35,
          objectives: [
            { id: 'R1, R2, R3, R5', marks: 10 },
            { id: 'W1, W2, W3, W4, W5', marks: 25 },
          ],
          minutes: 42,
          task: 'Write a speech, letter, article or report of about 250 to 350 words that discusses (explores different sides of an issue), argues (makes a case) or persuades (wins the reader over), using, developing and evaluating the ideas in the text or texts. The question sets the form, the audience and the points to cover (two bullet points in the specimen paper).',
          rewards: [
            'Reading (10 marks): many relevant ideas from the text or texts, used for the task, built on with your own reasoning and judged rather than just repeated.',
            'Where there are two texts, ideas from both, brought together into one line of argument.',
            'Writing (25 marks): a structure that guides the reader, a style and tone that suit the form and the audience, and well-chosen vocabulary.',
            'Accurate spelling, punctuation and grammar, which count towards the writing mark here.',
          ],
          levels: [
            {
              name: 'Reading: Level 1',
              marks: '1-2',
              looksLike:
                'Barely uses the texts, or copies chunks of them without choosing what matters.',
            },
            {
              name: 'Reading: Level 2',
              marks: '3-4',
              looksLike:
                'Refers briefly to the more obvious points and may copy parts of the texts.',
            },
            {
              name: 'Reading: Level 3',
              marks: '5-6',
              looksLike:
                'Uses a fair amount of simple material but rarely builds on it, often just following the texts point by point.',
            },
            {
              name: 'Reading: Level 4',
              marks: '7-8',
              looksLike:
                'Draws on plenty of the useful material, develops some of it and supports some points with details.',
            },
            {
              name: 'Reading: Level 5',
              marks: '9-10',
              looksLike:
                'Draws on most of the useful material, builds on it and weighs it up, and blends it smoothly into the argument.',
            },
            {
              name: 'Writing: Level 1',
              marks: '1-5',
              looksLike:
                'Hard to follow: ideas are barely ordered, words are few or copied, the reader is ignored and errors block the meaning.',
            },
            {
              name: 'Writing: Level 2',
              marks: '6-9',
              looksLike:
                'Loosely ordered, with a narrow or borrowed vocabulary, little sense of who is reading and repeated errors that sometimes get in the way.',
            },
            {
              name: 'Writing: Level 3',
              marks: '10-13',
              looksLike:
                'The meaning is clear but the writing is uneven: it follows the order of the texts, the words are simple and the audience is only partly in mind, with frequent errors.',
            },
            {
              name: 'Writing: Level 4',
              marks: '14-17',
              looksLike:
                'Works in places: ideas mostly follow a sensible order, the vocabulary suits the task, the tone partly fits the audience and the accuracy is generally good.',
            },
            {
              name: 'Writing: Level 5',
              marks: '18-21',
              looksLike:
                'Works well throughout: soundly organised, words chosen with some care, a tone that fits the audience and only occasional small errors.',
            },
            {
              name: 'Writing: Level 6',
              marks: '22-25',
              looksLike:
                'Confident and exact: the structure carries the reader, the vocabulary is precise, the tone is just right for the audience and errors are very rare.',
            },
          ],
          avoid: [
            'Copying sentences from the texts: use their ideas in your own words.',
            'Working through the texts in order instead of building an argument for your audience.',
            'Ignoring the form: a speech, a letter, an article and a report each have their own conventions.',
            'Skipping one of the points the question asks you to cover.',
          ],
          tip: 'Plan by grouping ideas from the text or texts under each bullet point, decide your view, then order the points so each paragraph moves the reader towards it.',
          markerQuestionId: 'Section A',
        },
      ],
    },
    {
      name: 'Section B: Composition',
      marks: 40,
      about:
        'One composition of about 350 to 450 words from a choice of four titles: two descriptive and two narrative.',
      questions: [
        {
          label: 'Question 2, 3, 4 or 5 (answer one)',
          kind: 'Descriptive or narrative writing',
          marks: 40,
          objectives: [
            { id: 'W1, W2', marks: 16 },
            { id: 'W3, W4, W5', marks: 24 },
          ],
          minutes: 60,
          task: 'Choose one of the four titles and write a description or a story of about 350 to 450 words. A descriptive title asks you to bring a place, scene, object or moment to life; a narrative title asks for a story.',
          rewards: [
            'Content and structure (16 marks): ideas that fit the title and are developed in detail, in a structure you shape on purpose, from the opening to the ending.',
            "In a description: a picture the reader can see, built from small, precise details, imagery and shifts in what the reader's attention is drawn to.",
            'In a story: a plot that develops, characters the reader believes in, a sense of place, and a climax or turning point that pays off.',
            'Style and accuracy (24 marks): precise vocabulary, sentences varied for effect, language that holds the reader, and accurate spelling, punctuation and grammar.',
          ],
          levels: [
            {
              name: 'Content and structure: Level 1',
              marks: '1-2',
              looksLike:
                'Mostly off the title or unclear, with little shape; hard to picture or to follow.',
            },
            {
              name: 'Content and structure: Level 2',
              marks: '3-4',
              looksLike:
                'Thin, simple ideas with a loose shape; a few relevant details, or events that do not link up well.',
            },
            {
              name: 'Content and structure: Level 3',
              marks: '5-7',
              looksLike:
                'Keeps to the title in a simple way, with a shape that mostly holds together; a string of relevant details, or a plain story told in order.',
            },
            {
              name: 'Content and structure: Level 4',
              marks: '8-10',
              looksLike:
                'Clearly on the title, with some development and sensible organisation; some details that work, or a connected plot where character and setting start to come through.',
            },
            {
              name: 'Content and structure: Level 5',
              marks: '11-13',
              looksLike:
                'Developed and largely holds the reader, with some deliberate choices about order and pace; a picture the reader can mostly see, or a plot that builds through character, detail and a climax.',
            },
            {
              name: 'Content and structure: Level 6',
              marks: '14-16',
              looksLike:
                'Tightly focused on the title, rich and gripping throughout, with a balanced structure controlled for effect; a picture the reader can fully see, or a plot crafted with care from start to finish.',
            },
            {
              name: 'Style and accuracy: Level 1',
              marks: '1-4',
              looksLike:
                'Words and sentences are often wrong for what is meant, and mistakes make it hard to read.',
            },
            {
              name: 'Style and accuracy: Level 2',
              marks: '5-8',
              looksLike:
                'A narrow choice of words and sentences, little thought for the reader, and repeated mistakes that sometimes confuse.',
            },
            {
              name: 'Style and accuracy: Level 3',
              marks: '9-12',
              looksLike:
                'Plain words and simple sentence patterns, some thought for the reader, and many mistakes, though the meaning mostly comes through.',
            },
            {
              name: 'Style and accuracy: Level 4',
              marks: '13-16',
              looksLike:
                'Some well-chosen words and a mix of sentence types, now and then used for effect; the reader is interested at times, and mistakes are not frequent.',
            },
            {
              name: 'Style and accuracy: Level 5',
              marks: '17-20',
              looksLike:
                'Words chosen with care and sentences varied on purpose; the reader is kept interested, with only the odd small slip.',
            },
            {
              name: 'Style and accuracy: Level 6',
              marks: '21-24',
              looksLike:
                'Exact, well-judged words and sentences shaped for effect throughout; the reader is gripped and mistakes are very rare.',
            },
          ],
          avoid: [
            'Turning a descriptive title into a story: a description builds a picture, not a plot.',
            'Cramming a story with so many events that none is developed in 350 to 450 words.',
            'Showy words used wrongly: a precise word beats a long one.',
            'Leaving no time to check spelling and punctuation, which are marked here.',
          ],
          tip: 'Decide how the piece will end before you start, so every paragraph can build towards it.',
          markerQuestionId: 'Section B',
        },
      ],
    },
  ],
  timing: [
    'These times are a suggestion based on the marks: the two sections are worth 40 marks each, so give each about an hour.',
    'Section A: about 10 minutes reading the text or texts, about 8 minutes on Question 1(a) and about 42 minutes planning and writing Question 1(b).',
    'Section B: about 5 minutes choosing a title and planning, about 50 minutes writing and the last 5 minutes checking.',
  ],
  checklist: [
    'Question 1(a) answers the question in your own words, with details from the text as evidence.',
    'Question 1(b) covers every point the question asks for, in the form and for the audience it sets.',
    'Question 1(b) uses ideas from the text or texts in your own words, with no copied sentences.',
    'Your composition is the type you chose: a description builds a picture, a story tells a story.',
    'Spelling, punctuation and grammar checked in Question 1(b) and the composition: both are marked on them.',
  ],
}
