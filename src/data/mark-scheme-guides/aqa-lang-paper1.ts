/**
 * AQA GCSE English Language (8700) Paper 1, Explorations in Creative Reading
 * and Writing: the plain-English guide behind its mark-scheme card.
 *
 * Checked on 24 October 2026 against AQA's own documents on aqa.org.uk:
 *   - the 8700/1 sample question paper and mark scheme (version 1.1), Sample
 *     set 1, "first exam June 2026". From summer 2026 AQA reworded several
 *     questions on this paper (its "English language changes" page) but kept
 *     the structure, the marks and the objectives. The June 2026 live mark
 *     scheme is not public yet, so the sample set is the current reference;
 *   - the 8700 specification, version 1.6 (March 2026): 1 hour 45 minutes,
 *     80 marks, 50% of the GCSE;
 *   - AQA's GCSE English Language Exam Timing Ideas (October 2024), the source
 *     of the per-question minutes. The paper's own advice (about 15 minutes'
 *     reading on the front cover, about 45 minutes at the start of each
 *     section) is from the sample question paper.
 *
 * Compared with the AI marker's data (../../lib/marking/mark-schemes/aqa-lang-paper1.ts),
 * which is NOT changed here; the guide follows the board:
 *   - Total (80), duration (105 minutes) and every question's marks and
 *     objective agree: Q1 4 AO1, Q2 8 AO2, Q3 8 AO2, Q4 20 AO4, Q5 40 (AO5 24,
 *     AO6 16). The level ranges for Q2 to Q5 agree.
 *   - Q1: marker: "list four things", marked on a four-level ladder (Level 1
 *     = 1 mark up to Level 4 = 4 marks); board: four multiple-choice parts,
 *     1.1 to 1.4, one mark for each correct answer and no levels. Before summer
 *     2026 the board's Q1 was a list of four things, also one mark per point
 *     (June 2023 mark scheme).
 *   - Q3: marker: how the whole source is structured to interest the reader;
 *     board from 2026: how it is structured to create one named effect (the
 *     sample asks about tension).
 *   - Q4: marker: how far you agree with a statement; board from 2026: agree
 *     and/or disagree, about a named part of the source.
 *   - Two caps in the board's mark scheme that the marker's data does not
 *     record: on Q2, an answer only about language outside the given lines
 *     stays in Level 1 or 2; on Q5, AO5 is capped at 12 of 24 when the writing
 *     does not address the focus of the task.
 *   - Q2: marker's note: "Precise quotation is essential at Level 3+"; board:
 *     Level 3 asks for a range of relevant textual detail and sets no
 *     quotation rule.
 *   - Q5: marker: describe a scene suggested by a picture, or write the
 *     opening of a story suggested by a title; board from 2026: a description
 *     from your imagination, the picture optional and for ideas only, or the
 *     opening of a story about a given subject.
 *
 * Second check, 24 October 2026: each fix, and the document that settles it.
 *   - Timing: credited the front cover with "45 minutes a section"; the cover
 *     gives the 15 minutes' reading and each section's heading gives the 45
 *     (sample question paper).
 *   - Docblock: dated the old Q1 "up to June 2025"; the change applies from
 *     summer 2026 (AQA's English language changes page).
 *   - Q1: a generic warning replaced by the trap AQA's 2026 answers and
 *     commentaries describe, an option that repeats a word from the source.
 *   - Q2: "lines outside the extract" was unclear, as the whole source is an
 *     extract; now "outside the ones printed in the question" (sample mark
 *     scheme note).
 *   - Q5: the AO5 cap was worded as the board's note words it; now in plain
 *     words (sample mark scheme).
 *   - AO6 levels: Levels 3 and 4 followed the board's descriptor bullets
 *     closely and "marked off" was unclear; the ladder is reworded (sample
 *     mark scheme).
 *   - The Q2 and Q5 differences from the marker above were added.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'aqa-lang-paper1',
  title: 'AQA English Language Paper 1',
  board: 'AQA',
  qualification: 'GCSE English Language (8700)',
  paperName: 'Explorations in Creative Reading and Writing',
  durationMinutes: 105,
  totalMarks: 80,
  weighting: '50% of the GCSE',
  summary:
    'You read an extract you have not seen before, from a novel or short story written in the 20th or 21st century, and answer four questions on it. Then you write your own description or story. Reading and writing are worth 40 marks each.',
  source: {
    document:
      'AQA GCSE English Language 8700/1 sample mark scheme, version 1.1 (Sample set 1, first exam June 2026), with its question paper and the 8700 specification, version 1.6 (March 2026)',
    url: 'https://www.aqa.org.uk/files/1150125c-1390-4597-9b90-a054521364c8/affa85093de725ae8803d9ec5fda72d4c892fa77.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl: 'https://www.aqa.org.uk/subjects/english/gcse/english-8700/assessment-resources',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Find information and ideas in a text, including things the writer suggests without saying them outright.',
    },
    {
      id: 'AO2',
      plain:
        "Explain how the writer's choices of language and structure affect the reader, using subject terms where they help.",
    },
    {
      id: 'AO4',
      plain:
        'Judge a text for yourself: weigh up a view about it and back up your judgement with evidence from the text.',
    },
    {
      id: 'AO5',
      plain:
        'Write clearly and imaginatively in a style that suits your reader, with your ideas organised so the piece hangs together.',
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
        'Four questions on one fiction extract (the paper calls it the source), printed in a separate insert. They move from finding information, to how the writer uses language and structure, to your own judgement of the text.',
      questions: [
        {
          label: 'Question 1 (parts 1.1 to 1.4)',
          kind: 'Multiple choice: finding information',
          marks: 4,
          objectives: [{ id: 'AO1', marks: 4 }],
          minutes: 5,
          task: 'Four short questions about the lines named at the start of Question 1. Each part offers a few possible answers (three on the sample paper), and you shade the circle next to the one that is correct.',
          rewards: [
            'One mark for each part you answer correctly: four parts, one mark each.',
            'Answers taken from the lines the question names, not from elsewhere in the source.',
          ],
          levels: [],
          avoid: [
            'Shading more than one circle in a part: the paper asks for one answer to each.',
            'Picking an option because it repeats a word from the source: the right answer often says the same thing in different words.',
            'Lingering here: the whole question is worth 4 of the 80 marks.',
          ],
          tip: 'Read the named lines first. For each part, find the words in the source that prove your answer before you shade the circle.',
          markerQuestionId: 'Q1',
        },
        {
          label: 'Question 2',
          kind: 'Language analysis',
          marks: 8,
          objectives: [{ id: 'AO2', marks: 8 }],
          minutes: 10,
          task: 'Look closely at a short section of the source, reprinted in the question, and explain how the writer uses language to describe something in it. The question suggests looking at words and phrases, language features and techniques, and sentence forms.',
          rewards: [
            'Short quotations from the lines you are given, each followed by what it shows.',
            'The effect of particular words explained: what they make the reader picture, think or feel, and why.',
            'Comments on sentence forms as well as single words, for example what a long list or a very short sentence does.',
            'Subject terms (simile, verb, personification and so on) used correctly, when they help your point.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-2',
              looksLike:
                'Says something basic about a word or two, or names a technique without saying what it does. The quotations may not really back up the point.',
            },
            {
              name: 'Level 2',
              marks: '3-4',
              looksLike:
                'Tries to say what some of the language does, using a few suitable quotations. Subject terms appear now and then, usually used correctly.',
            },
            {
              name: 'Level 3',
              marks: '5-6',
              looksLike:
                'For each quotation, says plainly what effect the words have on the reader and why. Several well-chosen quotations, and techniques named correctly.',
            },
            {
              name: 'Level 4',
              marks: '7-8',
              looksLike:
                "Looks beneath the surface: analyses how the writer's choices work and what they suggest, with sharply chosen quotations and confident, precise use of terms.",
            },
          ],
          avoid: [
            'Writing about lines outside the ones printed in the question: an answer that only does this cannot go above Level 2.',
            'Spotting techniques ("this is a metaphor") without explaining their effect.',
            'Writing about structure: that is what Question 3 is for.',
          ],
          tip: 'Choose three or four short quotations. For each one, zoom in on a single word and say what it makes the reader picture or feel.',
          markerQuestionId: 'Q2',
        },
        {
          label: 'Question 3',
          kind: 'Structure analysis',
          marks: 8,
          objectives: [{ id: 'AO2', marks: 8 }],
          minutes: 10,
          task: 'Think about the whole source and explain how the writer has structured it to create one effect the question names, such as tension. Structure means the order and shape of the text: how it opens, where the focus moves, how the mood or pace changes and how it ends.',
          rewards: [
            'Points that cover the whole source, from the opening to the ending.',
            'Each structural choice named (a shift in focus, a turning point, a change of pace or mood, the ending) and linked to the effect in the question.',
            'Brief references to where things happen in the source, to back up each point.',
            'Structural terms used correctly, such as flashback, foreshadowing or turning point.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-2',
              looksLike:
                'Notices one or two basic things about the order of the text, often by retelling what happens.',
            },
            {
              name: 'Level 2',
              marks: '3-4',
              looksLike:
                'Tries to say what some structural features do, such as a change of focus, with a few examples.',
            },
            {
              name: 'Level 3',
              marks: '5-6',
              looksLike:
                "Says plainly how several of the writer's structural choices build the named effect, with suitable examples and correct terms.",
            },
            {
              name: 'Level 4',
              marks: '7-8',
              looksLike:
                'Analyses how the shape of the whole text builds the effect, with sharply chosen examples and confident, precise terms.',
            },
          ],
          avoid: [
            'Analysing language (single words and images) instead of structure.',
            'Retelling the story in order without saying why the writer arranged it that way.',
            'Losing sight of the effect the question names: every point should link back to it.',
          ],
          tip: 'Track the source in three stages: the opening, a turning point and the ending. For each, say what the reader is focused on and how that builds the effect.',
          markerQuestionId: 'Q3',
        },
        {
          label: 'Question 4',
          kind: 'Evaluation',
          marks: 20,
          objectives: [{ id: 'AO4', marks: 20 }],
          minutes: 20,
          task: 'The question names a part of the source and gives a view about it. You decide how far you agree and/or disagree with that view, and explain why, looking at what happens and at the methods the writer uses.',
          rewards: [
            'A clear judgement on the view in the question: you can agree, disagree or do some of both.',
            'Evidence from the part of the source the question names, with what each piece shows.',
            "How the writer's methods (language, structure, viewpoint) create the impression you are judging.",
            'Weighing up: where the text supports the view and where it does not.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-5',
              looksLike:
                'Gives a basic opinion on the view, with a little about what happens and a reference or two.',
            },
            {
              name: 'Level 2',
              marks: '6-10',
              looksLike:
                "Starts to weigh up the view, with some comment on the writer's methods and how they affect the reader, backed by a few suitable references.",
            },
            {
              name: 'Level 3',
              marks: '11-15',
              looksLike:
                "Makes a sound, well-supported judgement, showing how the writer's ideas and methods shape the reader's response, with plenty of relevant evidence.",
            },
            {
              name: 'Level 4',
              marks: '16-20',
              looksLike:
                "Argues a confident, thoughtful case, showing in depth how the writer's methods work on the reader, with sharply chosen evidence throughout.",
            },
          ],
          avoid: [
            'Using the wrong part of the source: the question tells you which lines to write about.',
            'Only retelling events, or only listing techniques, without ever judging the view.',
            'Agreeing in the first line and never coming back to the view.',
          ],
          tip: 'Open with your overall view. Then build each paragraph around one piece of evidence: what it shows, how the writer creates it, and how far it supports the view.',
          markerQuestionId: 'Q4',
        },
      ],
    },
    {
      name: 'Section B: Writing',
      marks: 40,
      about:
        'One creative writing task with a choice of two options, linked to the topic of the reading source. One option may come with a picture.',
      questions: [
        {
          label: 'Question 5',
          kind: 'Descriptive or narrative writing',
          marks: 40,
          objectives: [
            { id: 'AO5', marks: 24 },
            { id: 'AO6', marks: 16 },
          ],
          minutes: 45,
          task: 'Choose one of two options: a description, where a picture may be given for ideas (you do not have to describe exactly what it shows), or a piece of narrative writing. On the 2026 sample paper the story option asks for the opening of a story. The task sets a situation, such as a competition entry, that tells you who you are writing for.',
          rewards: [
            'Writing that sticks to the task and keeps the reader interested from start to finish.',
            'Deliberate choices: vivid, precise vocabulary and techniques used for an effect.',
            'A shaped piece: a strong opening, paragraphs that move the reader on, changes of pace and a deliberate ending or stopping point.',
            'Accurate spelling and punctuation with a range of sentence types used for effect: these earn the separate 16 marks for AO6.',
          ],
          levels: [
            {
              name: 'AO5 Level 1',
              marks: '1-6',
              looksLike:
                'Gets a few simple ideas across, with plain vocabulary and little sense of shape. Paragraphs, if used, do not really organise the writing.',
            },
            {
              name: 'AO5 Level 2',
              marks: '7-12',
              looksLike:
                'Holds the reader in places. Some words are chosen deliberately, there is some attempt at a suitable tone, and paragraphs and linking phrases are starting to organise the piece.',
            },
            {
              name: 'AO5 Level 3',
              marks: '13-18',
              looksLike:
                'Keeps the reader interested throughout. The tone suits the task, vocabulary and techniques are chosen for effect, and well-linked paragraphs give the piece a clear shape.',
            },
            {
              name: 'AO5 Level 4',
              marks: '19-24',
              looksLike:
                'Grips the reader from start to finish. The voice is confident and original, the vocabulary ambitious and exact, and the structure is planned for the greatest effect.',
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
            'Drifting away from the task: if your writing does not do what the task asks, the AO5 mark cannot go above 12 of 24.',
            'Cramming in event after event: when the task asks for an opening, you do not need to finish the story.',
            'Listing everything in the picture item by item: it is there for ideas.',
            'Leaving no time to check: accuracy is worth 16 marks.',
          ],
          tip: 'Spend about five minutes planning a simple shape, such as opening, focus, shift and ending, and pick two or three moments to slow down and describe in close detail.',
          markerQuestionId: 'Q5',
        },
      ],
    },
  ],
  timing: [
    "These times are AQA's own advice. The front cover suggests about 15 minutes reading the source and all the questions, and the start of each section suggests about 45 minutes on it.",
    "Section A, from AQA's Exam Timing Ideas: Question 1 about 5 minutes, Question 2 about 10, Question 3 about 10 and Question 4 about 20.",
    'Question 5, from the same guide: about 5 minutes to plan, 35 to write and 5 to check.',
    'Question 4 carries 20 marks, a quarter of the paper, so protect its time.',
  ],
  checklist: [
    'Question 1: one circle shaded in each of the four parts.',
    'Questions 2 and 4: did you use only the lines the question named?',
    'Question 3: does every point link back to the effect the question named?',
    'Question 5: check full stops, capital letters, commas and the spelling of your most ambitious words.',
    'Cross through any rough work you do not want marked.',
  ],
}
