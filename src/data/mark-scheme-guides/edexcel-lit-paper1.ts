/**
 * Edexcel GCSE English Literature (1ET0) Paper 1: Shakespeare and Post-1914
 * Literature. A plain-English guide, in our own words, to what each question
 * asks and rewards. It is not Pearson's mark scheme, reproduces none of it, and
 * quotes no set text.
 *
 * CHECKED 24 October 2026 against Pearson's published documents:
 *   - 1ET0/01 mark scheme, Summer 2025 (publications code 1ET0_01_2506_MS):
 *     every question's marks and objectives, which bullets of each level grid
 *     belong to which objective, and every level range below.
 *   - 1ET0 specification, Issue 2 (June 2019), "Breakdown of Assessment
 *     Objectives by component": 80 marks, 1 hour 45 minutes, 50% of the GCSE,
 *     closed book. Part (a) AO2 20; part (b) AO1 15 + AO3 5; Section B AO1 16 +
 *     AO3 16 + AO4 8. AO4 (vocabulary, sentence structures, spelling and
 *     punctuation) is marked here in Section B and nowhere else in the
 *     qualification: not in Section A, and not on Paper 2.
 *   - 1ET0/01 question paper, Summer 2024 (13 May 2024): the front cover's
 *     advice of about 55 minutes on Section A and about 50 minutes on Section
 *     B, and Section A's own instruction to divide its time equally between
 *     parts (a) and (b).
 *
 * DIFFERENCES FROM THE AI MARKER, as this check found them
 * (src/lib/marking/mark-schemes/edexcel-lit.ts). All were corrected in the
 * marker on 24 October 2026, with the founder's approval (document 30): each
 * grid is now one objective there ('AO1+AO3'), and
 * src/lib/marking/mark-schemes/__tests__/edexcel-structure.test.ts holds the
 * marker to this guide. The record of what differed:
 * The total (80), the duration (105 minutes) and every question's marks and
 * objective split agree. How the levels are applied does not:
 *   - Part (b): board, ONE 20-mark grid covering AO1 and AO3 together (Level 1
 *     1-4, 2 5-8, 3 9-12, 4 13-16, 5 17-20); marker, a separate AO1 ladder out
 *     of 15 (1-3, 4-6, 7-9, 10-12, 13-15) and AO3 out of 5 (one mark a level).
 *   - Section B: board, ONE 32-mark grid for AO1 and AO3 together (1-6, 7-12,
 *     13-19, 20-26, 27-32) plus the AO4 grid; marker, separate AO1 and AO3
 *     ladders out of 16 (1-3, 4-6, 7-10, 11-13, 14-16 each).
 *   - AO4: the ranges agree (1-2, 3-5, 6-8). The board calls them Level 1, 2
 *     and 3, describing them as threshold, intermediate and high performance;
 *     the marker names them Threshold, Intermediate and High. A naming
 *     difference only: it changes no score.
 *   - Part (b) task: the marker asks about "the play as a whole"; the board's
 *     questions (June 2024, June 2025) and the specification's overview ask
 *     about the theme elsewhere in the play, and its mark scheme rewards
 *     references from outside the extract.
 *
 * NOT FROM THE BOARD: splitting Section B's 50 minutes into planning, writing
 * and checking is our suggestion, and the timing lines say so.
 *
 * NOT CONFIRMED: the June 2026 and November 2025 materials are on Pearson's
 * secure site (it answered 401 to an unsigned request), so the grids here are
 * the latest public ones, June 2025; the June 2024 mark scheme has the same
 * ranges.
 *
 * SECOND CHECK, 24 October 2026, against the documents above plus the June
 * 2024 mark scheme and the June 2025 question paper. Every mark, objective and
 * level range was confirmed. Fixed:
 *   - Part (b) and Section B: the rewards gave context its own marks ("5 of
 *     the 20", "16 of the 40") in a way that could be read as a separate
 *     score. Pearson gives one mark from one grid (part (b) out of 20; Section
 *     B AO1 and AO3 together out of 32, plus AO4 out of 8, 2025 mark scheme),
 *     and the first reward of each now says so.
 *   - Part (a): Level 1 read as if naming features beat Level 2's retelling;
 *     both rewritten so each level is plainly a step up.
 *   - Part (b) Levels 2, 4 and 5 and Section B Levels 4 and 5 echoed the
 *     grids' own words ("valid points", "well-developed", "mature",
 *     "convincing"); reworded.
 *   - Part (b) kind said "whole-play"; the question is about the rest of the
 *     play, outside the extract (2024 and 2025 papers and mark schemes).
 *   - Part (b) "in a critical essay style" made plainer: "written as a formal
 *     essay".
 *   - Docblock: the "divide equally" instruction is at the head of Section A,
 *     not on the front cover.
 */
import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'edexcel-lit-paper1',
  title: 'Edexcel English Literature Paper 1',
  board: 'Edexcel',
  qualification: 'GCSE English Literature (1ET0)',
  paperName: 'Shakespeare and Post-1914 Literature',
  durationMinutes: 105,
  totalMarks: 80,
  weighting: '50% of the GCSE',
  summary:
    'A closed-book exam, so you cannot take your texts in. Section A is a two-part question on your Shakespeare play that starts from a printed extract. Section B is one essay on your British play or novel written after 1914.',
  source: {
    document:
      'Pearson Edexcel GCSE English Literature (1ET0) Paper 1 mark scheme, Summer 2025 (1ET0_01_2506_MS), checked with the specification, Issue 2 (June 2019), and the Summer 2024 question paper',
    url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-rms-20250821.pdf',
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
        'Show how the text relates to the context it was written in, such as the beliefs, events and way of life of its time.',
    },
    {
      id: 'AO4',
      plain:
        'Write accurately: well-chosen words, varied sentences, and correct spelling and punctuation. On this paper it is marked only in Section B.',
    },
  ],
  sections: [
    {
      name: 'Section A: Shakespeare',
      marks: 40,
      about:
        'One question on your play, in two parts: part (a) on a printed extract of about 30 lines, and part (b) on a theme from that extract elsewhere in the play.',
      questions: [
        {
          label: 'Part (a): Questions 1(a) to 6(a)',
          kind: 'Extract analysis',
          marks: 20,
          objectives: [{ id: 'AO2', marks: 20 }],
          minutes: 27,
          task: 'Look closely at the printed extract and analyse how Shakespeare presents a character, a relationship or an idea in it.',
          rewards: [
            'Close analysis of the language in the extract: imagery, word choices and the way characters speak to each other.',
            'Form and structure as well as language, for example verse and prose, soliloquy, rhyme and rhythm, stage directions, and how the scene builds or shifts.',
            'Short, embedded quotations from the extract, each with its effect on the audience.',
            'Subject terms used precisely to develop a point, not just to label it.',
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
                "Shows how several of Shakespeare's methods work and what each does to the audience, with relevant subject terms.",
            },
            {
              name: 'Level 4',
              marks: '13-16',
              looksLike:
                'Every paragraph digs into how the language, form and structure work and what they do to the audience, in close detail, with subject terms used accurately to push ideas further.',
            },
            {
              name: 'Level 5',
              marks: '17-20',
              looksLike:
                "Weighs up how the language, form and structure combine to shape the audience's response, with exact subject terms built naturally into the argument.",
            },
          ],
          avoid: [
            'Writing about the rest of the play: part (a) is marked on your analysis of the extract.',
            'Adding context: it earns nothing in part (a), so save it for part (b).',
            'Retelling the extract line by line.',
          ],
          tip: 'Annotate four or five key moments in the extract, then build each paragraph around one quotation and what it does.',
          markerQuestionId: 'Section A (a)',
        },
        {
          label: 'Part (b): Questions 1(b) to 6(b)',
          kind: 'Essay on the rest of the play',
          marks: 20,
          objectives: [
            { id: 'AO1', marks: 15 },
            { id: 'AO3', marks: 5 },
          ],
          minutes: 27,
          task: "Show why a theme from the extract, such as power or loyalty, matters in other parts of the play. The question lists points you must cover and tells you to refer to the play's context.",
          rewards: [
            'One mark out of 20 for the whole answer. The examiner places it in one of five levels by weighing your argument, your evidence and your use of context together: context does not get a score of its own.',
            'A clear argument of your own that answers the question, written as a formal essay.',
            'Evidence from other parts of the play: short quotations you have learned, or precise reference to events.',
            'Every point the question tells you to consider.',
            "Context linked to your points, for example ideas about kingship, religion, gender or class in Shakespeare's time. It is one of the four things each level describes, so it counts for a quarter of the mark (AO3, 5 of the 20).",
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-4',
              looksLike:
                'A simple answer that says little of your own view, refers to the play only briefly and barely touches on context.',
            },
            {
              name: 'Level 2',
              marks: '5-8',
              looksLike:
                'Retells a fair amount of the plot, but some of your own view comes through, with a few sensible points, some sense of context and a focus that comes and goes.',
            },
            {
              name: 'Level 3',
              marks: '9-12',
              looksLike:
                'Stays relevant and answers the question with your own sound reading of the play, backs points with evidence, and makes sensible links to context.',
            },
            {
              name: 'Level 4',
              marks: '13-16',
              looksLike:
                'A well-built argument that stays close to the play throughout, with evidence that fits each point closely and context discussed in detail.',
            },
            {
              name: 'Level 5',
              marks: '17-20',
              looksLike:
                'A confident argument of your own, with fresh, thoughtful readings. Every piece of evidence does real work, and context is built into the points rather than added on.',
            },
          ],
          avoid: [
            'Going back over the extract: the question asks about elsewhere in the play, and the mark scheme rewards references from outside the extract.',
            'Context as a separate history lesson, with no link to the play.',
            'Plot summary with no argument.',
          ],
          tip: 'Choose two or three moments from different parts of the play and, for each, give a quotation or detail, what it shows about the theme, and one link to context.',
          markerQuestionId: 'Section A (b)',
        },
      ],
    },
    {
      name: 'Section B: Post-1914 British play or novel',
      marks: 40,
      about:
        'One essay on the text you have studied, from a choice of two questions on it, each opening with a brief quotation from the text.',
      questions: [
        {
          label: 'Questions 7 to 30 (answer one on your text)',
          kind: 'Essay',
          marks: 40,
          objectives: [
            { id: 'AO1', marks: 16 },
            { id: 'AO3', marks: 16 },
            { id: 'AO4', marks: 8 },
          ],
          minutes: 50,
          task: 'Write an essay on a character, theme, setting or event in your play or novel. The quotation printed with the question is only a starting point: your answer should range across the whole text, and the question tells you to refer to its context.',
          rewards: [
            'Your mark has two parts, added together: one out of 32 for what you write, from one set of five levels that weighs your argument, evidence and context together (AO1 and AO3), and a separate one out of 8 for accurate writing (AO4).',
            'A clear argument that answers the exact question, developed across the whole text, with well-chosen references and quotations from different points in it.',
            'Context used to explain the text, for example the history, society and ideas the writer was responding to. It counts for half of the 32, but it is never scored on its own: each level describes your argument and your context together.',
            'Accurate writing (AO4, the separate 8 marks): well-chosen words, varied and controlled sentences, and accurate spelling and punctuation.',
          ],
          levels: [
            {
              name: 'AO1 and AO3: Level 1',
              marks: '1-6',
              looksLike:
                'A simple answer that says little of your own view, gives little support from the text and barely touches on context.',
            },
            {
              name: 'AO1 and AO3: Level 2',
              marks: '7-12',
              looksLike:
                'Retells a fair amount of the story, but some of your own view comes through, with some references and some sense of context, though the focus wanders.',
            },
            {
              name: 'AO1 and AO3: Level 3',
              marks: '13-19',
              looksLike:
                'A relevant answer with a sound reading of the text, focused evidence, and sensible comment on context and how it connects to the text.',
            },
            {
              name: 'AO1 and AO3: Level 4',
              marks: '20-26',
              looksLike:
                'A well-built argument that stays close to the text throughout, with evidence that fits each point closely and context discussed in detail.',
            },
            {
              name: 'AO1 and AO3: Level 5',
              marks: '27-32',
              looksLike:
                'A confident argument of your own, with fresh, thoughtful readings, evidence picked with real care, and context built into the whole answer rather than added on.',
            },
            {
              name: 'AO4: Level 1',
              marks: '1-2',
              looksLike:
                'Spelling and punctuation are accurate often enough that the meaning always comes through, with a fair range of words and sentences.',
            },
            {
              name: 'AO4: Level 2',
              marks: '3-5',
              looksLike:
                'Spelling and punctuation are right nearly all the time, and a good spread of words and sentence types keeps the meaning clear.',
            },
            {
              name: 'AO4: Level 3',
              marks: '6-8',
              looksLike:
                'Spelling and punctuation are accurate throughout, and words and sentences are chosen so the meaning is exactly what you intend.',
            },
          ],
          avoid: [
            'Answering the quotation instead of the question.',
            'Context dropped in as facts with no link to the text.',
            'Rushing: this essay carries half the marks on the paper.',
            'Careless spelling of names and key terms, which costs AO4 marks.',
          ],
          tip: 'Plan for five minutes: a one-sentence answer to the question, then three or four paragraphs drawn from the beginning, middle and end of the text, each with a link to context.',
          markerQuestionId: 'Section B',
        },
      ],
    },
  ],
  timing: [
    'The front cover of the paper advises about 55 minutes on Section A and about 50 minutes on Section B.',
    'The paper asks you to divide your Section A time equally between parts (a) and (b): a little under half an hour each.',
    'Our suggestion for Section B: about 5 minutes planning, 40 writing and 5 checking spelling and punctuation.',
  ],
  checklist: [
    'Part (a) stays inside the printed extract.',
    'Part (b) uses other parts of the play and links them to context.',
    'Section B answers the question set, not just the quotation, and refers to context.',
    'Section B is proofread: 8 marks are for vocabulary, sentences, spelling and punctuation.',
    "Characters' names and the writers' names are spelt correctly.",
  ],
}
