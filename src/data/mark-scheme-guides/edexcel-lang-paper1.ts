/**
 * Edexcel GCSE English Language (1EN0) Paper 1: Fiction and Imaginative
 * Writing. A plain-English guide, in our own words, to what each question asks
 * and rewards. It is not Pearson's mark scheme and reproduces none of it.
 *
 * CHECKED 24 October 2026 against Pearson's published documents:
 *   - 1EN0/01 mark scheme, Summer 2025 (publications code 1EN0_01_2506_MS):
 *     every question's marks and objectives, and every level range below.
 *   - 1EN0 specification, Issue 6 (August 2024): 64 marks, 1 hour 45 minutes,
 *     40% of the GCSE, and its per-question table of objectives.
 *   - 1EN0/01 question paper, Summer 2024 (23 May 2024): the front cover's
 *     advice of about 1 hour on Section A and about 45 minutes on Section B.
 *
 * DIFFERENCES FROM THE AI MARKER (src/lib/marking/mark-schemes/edexcel-lang.ts,
 * deliberately not changed here: changing it changes how essays are scored).
 * The total (64), the duration (105 minutes) and every question's marks and
 * objectives agree. The writing question's lower level ranges do not:
 *   marker: Q5/Q6 AO5 Level 1 1-5, Level 2 6-10, Level 3 11-14
 *   board:  Q5/Q6 AO5 Level 1 1-4, Level 2 5-9,  Level 3 10-14
 *   marker: Q5/Q6 AO6 Level 1 1-3, Level 2 4-6,  Level 3 7-10
 *   board:  Q5/Q6 AO6 Level 1 1-4, Level 2 5-7,  Level 3 8-10
 * Levels 4 and 5 agree (AO5 15-19 and 20-24, AO6 11-13 and 14-16). Pearson
 * moved AO6's spare mark from Level 5 to Level 1 from the June 2024 series; the
 * marker matches neither that grid nor the old one (1-3, 4-6, 7-9, 10-12, 13-16).
 * Three rules in the board's scheme are missing from, or contradicted by, the
 * marker's notes:
 *   - Q3: an answer on language only, or structure only, cannot go above
 *     Level 1 (and the scheme's preamble says an unbalanced one cannot reach
 *     Level 2).
 *   - Q4: references to the writer's techniques are credited at Level 2 and
 *     above only when they support the critical judgement.
 *   - Q4: the marker says the question names a section and nothing outside it
 *     is rewarded; the June 2023, November 2023, June 2024, November 2024 and
 *     June 2025 papers all asked about the extract as a whole, with no lines
 *     named.
 *
 * NOT CONFIRMED: two of the marker's notes appear in no board document
 * checked: Q1, that nothing is deducted for a wrong answer given alongside a
 * right one; Q5/Q6, that where both tasks are attempted the better is marked.
 * The June 2026 and November 2025 mark schemes are on Pearson's secure site
 * (it answered 401 to an unsigned request), so the grids here are the latest
 * public ones, June 2025, which match June 2024 and November 2024.
 *
 * NOT FROM THE BOARD: the per-question minutes are our suggestion, worked out
 * from the board's section times and the marks, and the timing lines say so.
 *
 * SECOND CHECK, 24 October 2026, against the documents above plus the June
 * 2023, November 2023, June 2024 and November 2024 mark schemes and the
 * November 2024 and June 2025 question papers. Every mark, objective and level
 * range was confirmed, and the AO5 and AO6 grids in particular: AO5 was 1-4,
 * 5-9, 10-14, 15-19, 20-24 in every series from June 2023 to June 2025; AO6
 * was 1-3, 4-6, 7-9, 10-12, 13-16 in June and November 2023 and has been 1-4,
 * 5-7, 8-10, 11-13, 14-16 from June 2024. Fixed:
 *   - Q3 task said the question asks what the choices "show about" something;
 *     the papers ask how the writer uses language and structure to show it.
 *   - AO6 Level 1 echoed the grid's own "often misspelled"; reworded.
 *   - Differences list: added the Q4 techniques rule, the two unconfirmed
 *     marker notes, and the later papers that bear out the Q4 point.
 */
import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'edexcel-lang-paper1',
  title: 'Edexcel English Language Paper 1',
  board: 'Edexcel',
  qualification: 'GCSE English Language (1EN0)',
  paperName: 'Fiction and Imaginative Writing',
  durationMinutes: 105,
  totalMarks: 64,
  weighting: '40% of the GCSE',
  summary:
    'You read an extract of about 650 words from a 19th-century novel or story you have not seen before, and answer four questions on it. Then you write one imaginative piece of your own on a theme linked to the extract.',
  source: {
    document:
      'Pearson Edexcel GCSE English Language (1EN0) Paper 1 mark scheme, Summer 2025 (1EN0_01_2506_MS), checked with the specification, Issue 6 (August 2024), and the Summer 2024 question paper',
    url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Language/2015/Exam-materials/1en0-01-rms-20250821.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Find information and ideas in the text, both what it says directly and what it only hints at.',
    },
    {
      id: 'AO2',
      plain:
        "Explain the writer's choices of language and structure and what they do to the reader, using subject terms where they help.",
    },
    {
      id: 'AO4',
      plain:
        'Judge how well the writing achieves an effect, and back up your judgement with references to the text.',
    },
    {
      id: 'AO5',
      plain:
        'Write clearly and imaginatively, in a tone and style that suit your purpose and reader, with your ideas organised so the piece holds together.',
    },
    {
      id: 'AO6',
      plain: 'Choose words and build sentences well, and spell and punctuate correctly.',
    },
  ],
  sections: [
    {
      name: 'Section A: Reading',
      marks: 24,
      about:
        'Four questions on the extract, from finding single details to a long answer judging how well the writing works.',
      questions: [
        {
          label: 'Question 1',
          kind: 'Finding information',
          marks: 1,
          objectives: [{ id: 'AO1', marks: 1 }],
          minutes: 2,
          task: 'Find one detail in the few lines the question names, usually a word or phrase that shows something about a character, a place or a moment.',
          rewards: [
            'One mark for one correct answer taken from the lines given.',
            'A single word or a short quotation is enough. You do not need to explain it.',
          ],
          levels: [],
          avoid: [
            'Taking your answer from outside the lines named.',
            'Spending more than a couple of minutes on a one-mark question.',
          ],
          tip: 'Mark the line numbers on the extract first, then look only inside them.',
          markerQuestionId: 'Q1',
        },
        {
          label: 'Question 2',
          kind: 'Finding information',
          marks: 2,
          objectives: [{ id: 'AO1', marks: 2 }],
          minutes: 4,
          task: 'Give two things from a short section of the extract, which the question either names by line number or prints for you. The paper lets you answer in your own words or with quotations.',
          rewards: [
            'One mark for each correct point, up to two.',
            'Two different points: the second must not repeat the first in other words.',
            'Your own words and short quotations both count.',
          ],
          levels: [],
          avoid: [
            'Using details from outside the section you are given.',
            'Writing a paragraph: two short, clear answers are all that is needed.',
          ],
          tip: 'Put one answer on each numbered line and keep each one short.',
          markerQuestionId: 'Q2',
        },
        {
          label: 'Question 3',
          kind: 'Language and structure',
          marks: 6,
          objectives: [{ id: 'AO2', marks: 6 }],
          minutes: 12,
          task: 'Explain how the writer uses language and structure in a short section of the extract to show something the question names, such as what a character feels or experiences. Recent papers print the section with the question.',
          rewards: [
            'Comments on language, such as word choices, imagery and sentence forms, and on structure, such as how the section opens, where the focus shifts and how it ends.',
            'Short quotations from the section, each followed by what it shows the reader.',
            'Subject terms used accurately where they help, for example metaphor, repetition or a short sentence used for emphasis.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-2',
              looksLike:
                'Makes a few comments on the writing, with suitable quotations, but the explanations stay brief. An answer on language only, or structure only, cannot go above this level.',
            },
            {
              name: 'Level 2',
              marks: '3-4',
              looksLike:
                'Explains how both the language and the structure create effects, with well-matched quotations.',
            },
            {
              name: 'Level 3',
              marks: '5-6',
              looksLike:
                'Analyses closely how both the language and the structure work on the reader, with carefully picked quotations that sharpen every point.',
            },
          ],
          avoid: [
            'Leaving out structure: an answer on language alone stays in Level 1.',
            'Naming techniques without saying what they do to the reader.',
            'Writing about lines outside the section you are given.',
          ],
          tip: 'Write three short paragraphs, two on language and one on structure, each with a quotation and its effect.',
          markerQuestionId: 'Q3',
        },
        {
          label: 'Question 4',
          kind: 'Evaluation',
          marks: 15,
          objectives: [{ id: 'AO4', marks: 15 }],
          minutes: 32,
          task: 'The question names an effect the writer is trying to create, such as tension or sympathy for a character, and asks how successfully it is achieved. Give your own judgement and support it with detailed references. Recent papers have asked about the whole extract, so check the question for any line numbers.',
          rewards: [
            'A clear verdict on how successful the writing is, kept up from the first paragraph to the last.',
            'Points about events, characters, setting and ideas, each explained as part of how the effect is created.',
            'Detailed, well-chosen references from across the part of the text the question covers.',
            'Techniques mentioned when they support your judgement: above Level 1, the mark scheme credits them only when they do.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-3',
              looksLike:
                'Mostly describes what happens. Opinions are given without reasons, and there are few quotations.',
            },
            {
              name: 'Level 2',
              marks: '4-6',
              looksLike:
                'Comments on what happens and offers simple opinions, backed by quotations that fit but are not explored.',
            },
            {
              name: 'Level 3',
              marks: '7-9',
              looksLike:
                'Explains how the writing creates the effect and gives a reasoned view of how well it works, with suitable quotations.',
            },
            {
              name: 'Level 4',
              marks: '10-12',
              looksLike:
                'Analyses the extract and builds a well-argued judgement, with detailed quotations backing up every point.',
            },
            {
              name: 'Level 5',
              marks: '13-15',
              looksLike:
                'Evaluates the extract as a whole with a consistent, thoughtful judgement, and every reference is chosen to make the argument convincing.',
            },
          ],
          avoid: [
            'Retelling the story instead of judging how well it works.',
            'Listing techniques with no view on how successful they are.',
            'Running short of time: this question carries 15 of the 24 reading marks.',
          ],
          tip: 'Use the wording of the question in your topic sentences, for example by starting a paragraph with "The writer is successful in creating tension when", so that every paragraph makes a judgement.',
          markerQuestionId: 'Q4',
        },
      ],
    },
    {
      name: 'Section B: Imaginative Writing',
      marks: 40,
      about:
        'One piece of imaginative writing, from a choice of two tasks linked by theme to the extract.',
      questions: [
        {
          label: 'Question 5 or 6 (answer one)',
          kind: 'Imaginative writing',
          marks: 40,
          objectives: [
            { id: 'AO5', marks: 24 },
            { id: 'AO6', marks: 16 },
          ],
          minutes: 45,
          task: 'Choose one of the two tasks and write an imaginative piece, real or invented, such as a story, a description or a monologue. One task comes with two pictures you can use for ideas: you may use one of them, or neither.',
          rewards: [
            'AO5 (24 marks): a clear purpose and a voice that suits the task and your reader, with a planned shape: an opening that draws the reader in, development, and a deliberate ending.',
            'AO5: paragraphs and links that carry the reader through, and choices such as detail, dialogue or a shift in time made for effect.',
            'AO6 (16 marks): varied, precise vocabulary and a range of sentence structures chosen for effect. Spelling and punctuation should be accurate, including commas, apostrophes and the punctuation of speech.',
            'The two objectives are marked separately, each on its own five levels, and the marks are added together.',
          ],
          levels: [
            {
              name: 'AO5: Level 1',
              marks: '1-4',
              looksLike:
                'Some ideas come across, but the piece has little sense of who it is for or what it is trying to do, and it is loosely organised.',
            },
            {
              name: 'AO5: Level 2',
              marks: '5-9',
              looksLike:
                'Knows what the piece is for and who will read it, in a simple, steady tone. Ideas follow in order, in paragraphs, with some linking.',
            },
            {
              name: 'AO5: Level 3',
              marks: '10-14',
              looksLike:
                'Ideas and techniques are picked to suit the task, the tone fits, and each idea builds on the last, in paragraphs that make the writing easy to follow.',
            },
            {
              name: 'AO5: Level 4',
              marks: '15-19',
              looksLike:
                'The piece is shaped deliberately to affect the reader, the tone and style are well judged, and the structure stays under control from start to finish.',
            },
            {
              name: 'AO5: Level 5',
              marks: '20-24',
              looksLike:
                "The writing steers the reader's response in subtle ways, the voice is confident throughout, and complex ideas are arranged so the whole piece holds together.",
            },
            {
              name: 'AO6: Level 1',
              marks: '1-4',
              looksLike:
                'Simple, everyday words with frequent spelling mistakes. Punctuation is shaky, and sentences are short or keep repeating the same pattern.',
            },
            {
              name: 'AO6: Level 2',
              marks: '5-7',
              looksLike:
                'Everyday words are spelt correctly, punctuation is mostly right, and sentences vary, including ones joined with words such as because or although.',
            },
            {
              name: 'AO6: Level 3',
              marks: '8-10',
              looksLike:
                'A good choice of words, with tricky spellings mostly right and a mix of punctuation used correctly. Sentences are shaped to help the purpose.',
            },
            {
              name: 'AO6: Level 4',
              marks: '11-13',
              looksLike:
                'Words are chosen with care from a wide range, with only the odd spelling slip. Punctuation is placed to make meaning clear, and sentences are built with a purpose in mind.',
            },
            {
              name: 'AO6: Level 5',
              marks: '14-16',
              looksLike:
                'Ambitious vocabulary used with purpose, errors so rare they never get in the way, and precise punctuation, with a full range of sentence types each chosen for its effect.',
            },
          ],
          avoid: [
            'Starting without a plan and losing control of the plot.',
            'Too many events: one moment or short episode, developed in detail, gives you more to work with.',
            'Answering both tasks: you only need one.',
            'Leaving no time to check your accuracy: AO6 is worth 16 marks.',
          ],
          tip: 'Spend about five minutes on a plan with a clear shape (opening, build-up, turning point, ending) and save the last five for checking.',
          markerQuestionId: 'Q5/Q6',
        },
      ],
    },
  ],
  timing: [
    'The front cover of the paper advises about 1 hour on Section A and about 45 minutes on Section B.',
    'Our suggestion for Section A, based on the marks: about 10 minutes reading the extract, then about 2 minutes on Question 1, 4 on Question 2, 12 on Question 3 and 32 on Question 4.',
    'Our suggestion for Section B: about 5 minutes planning, 35 writing and 5 checking.',
  ],
  checklist: [
    'Questions 1 and 2: each answer comes from the lines named, and the two points in Question 2 are different.',
    'Question 3: you have written about structure as well as language.',
    'Question 4: each paragraph says how well the writing works, not just what happens.',
    'Section B: you have marked which question you chose, and answered only that one.',
    'Proofread: full stops between sentences (not commas), apostrophes, and words you often misspell.',
  ],
}
