/**
 * Edexcel GCSE English Language (1EN0) Paper 2: Non-fiction and Transactional
 * Writing. A plain-English guide, in our own words, to what each question asks
 * and rewards. It is not Pearson's mark scheme and reproduces none of it.
 *
 * CHECKED 24 October 2026 against Pearson's published documents:
 *   - 1EN0/02 mark scheme, Summer 2025 (publications code 1EN0_02_2506_MS):
 *     every question's marks and objectives, and every level range below.
 *     The Summer 2024 (1EN0_02_2406_MS) and November 2023 (1EN0_02_MS_2311)
 *     mark schemes give the same question marks (November 2023 still has the
 *     old AO6 grid, 1-3, 4-6, 7-9, 10-12, 13-16).
 *   - 1EN0 specification, Issue 6 (August 2024): 96 marks, 2 hours 5 minutes,
 *     60% of the GCSE, and its per-question table of objectives.
 *   - 1EN0/02 question papers, Summer 2024 (6 June 2024) and November 2023:
 *     the marks printed against each question, and the front cover's advice
 *     of about 1 hour 20 minutes on Section A and about 45 minutes on Section B.
 *
 * THE SHORT QUESTIONS, checked with particular care because the marker's
 * tariffs were in doubt: Questions 1 and 2 are worth 2 marks each, Questions 4
 * and 5 one mark each. The specification's table, the 2023, 2024 and 2025 mark
 * schemes and the 2023 and 2024 question papers all agree, and so does the
 * marker. Section A totals 56, Section B 40.
 *
 * DIFFERENCES FROM THE AI MARKER (src/lib/marking/mark-schemes/edexcel-lang.ts,
 * deliberately not changed here: changing it changes how essays are scored).
 * The total (96), the duration (125 minutes) and every question's marks and
 * objectives agree. These do not:
 *   - Q7a: marker, one band of 1-6 marked one point at a time; board, three
 *     levels (1-2, 3-4, 5-6) judged on the understanding and synthesis shown.
 *     Marker note: a point from one text only is still creditable; board: both
 *     texts must be drawn on to earn any marks. Marker task: similarities or
 *     differences; board: every level describes similarities.
 *   - Q7b: marker Level 1 1-3, Level 2 4-6, Level 3 7-8; board Level 1 1-2,
 *     Level 2 3-5, Level 3 6-8 (Levels 4 and 5, 9-11 and 12-14, agree). Marker
 *     note: a one-text answer is capped at "the lowest level that its quality
 *     allows"; board: an answer on only one text in detail cannot go above
 *     Level 2, and an unbalanced one cannot reach Level 3.
 *   - Q8/Q9: marker AO5 Level 1 1-5, Level 2 6-10, Level 3 11-14; board 1-4,
 *     5-9, 10-14. Marker AO6 Level 1 1-3, Level 2 4-6, Level 3 7-10; board
 *     1-4, 5-7, 8-10. Levels 4 and 5 agree. Pearson moved AO6's spare mark from
 *     Level 5 to Level 1 from the June 2024 series.
 *   - Q3: the board caps an answer on language only, or structure only, at
 *     Level 2 (and the scheme's preamble says an unbalanced one cannot reach
 *     Level 3); the marker's notes do not say so.
 *   - Q6: the board credits references to the writer's techniques at Level 2
 *     and above only when they support the critical judgement; the marker's
 *     notes do not say so.
 *
 * NOT CONFIRMED, SO NOT STATED: the marker's note that a response in the wrong
 * form loses only AO5 form marks is not in any board document checked. The
 * June 2026 and November 2025 mark schemes are on Pearson's secure site (it
 * answered 401 to an unsigned request), so the grids here are the latest
 * public ones, June 2025, which match June 2024 and November 2024. The
 * per-question minutes are our suggestion, worked out from the board's section
 * times and the marks, and the timing lines say so.
 *
 * SECOND CHECK, 24 October 2026, against the documents above plus the June
 * 2023, June 2024 and November 2024 mark schemes and the June 2023, November
 * 2024 and June 2025 question papers. Every mark, objective and level range was
 * confirmed, the AO5 and AO6 grids against every series from June 2023 (AO6
 * changed from June 2024; AO5 did not), and Question 7(a) asked for
 * similarities in all five papers from June 2023 to June 2025. Fixed:
 *   - AO6 Level 1 echoed the grid's own "often misspelled"; reworded. Q6
 *     "apt references" made plainer.
 *   - Q8/Q9 tip now uses the suggested points every recent task prints.
 *   - Differences list: added the Q6 techniques rule; the November 2023 note
 *     said "the same marks" without saying its AO6 grid is the old one.
 */
import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'edexcel-lang-paper2',
  title: 'Edexcel English Language Paper 2',
  board: 'Edexcel',
  qualification: 'GCSE English Language (1EN0)',
  paperName: 'Non-fiction and Transactional Writing',
  durationMinutes: 125,
  totalMarks: 96,
  weighting: '60% of the GCSE',
  summary:
    'You read two non-fiction texts you have not seen before, from the 20th and 21st centuries and linked by a theme, and answer seven questions, the last of which compares them. Then you write one piece of non-fiction, such as an article, a letter or a speech, on a related theme.',
  source: {
    document:
      'Pearson Edexcel GCSE English Language (1EN0) Paper 2 mark scheme, Summer 2025 (1EN0_02_2506_MS), checked with the specification, Issue 6 (August 2024), and the Summer 2024 and November 2023 question papers',
    url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Language/2015/Exam-materials/1en0-02-rms-20250821.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Find information and ideas, both stated and hinted at, and bring together evidence from two texts (synthesise).',
    },
    {
      id: 'AO2',
      plain:
        "Explain the writer's choices of language and structure and what they do to the reader, using subject terms where they help.",
    },
    {
      id: 'AO3',
      plain:
        'Compare what the two writers think and feel about the topic (their perspectives), and the ways each one gets that across.',
    },
    {
      id: 'AO4',
      plain:
        'Judge how well a text achieves an effect, and back up your judgement with references to the text.',
    },
    {
      id: 'AO5',
      plain:
        'Write clearly and effectively for the purpose, audience and form you are given, in a suitable tone and register (how formal you are), with your ideas organised so the piece holds together.',
    },
    {
      id: 'AO6',
      plain: 'Choose words and build sentences well, and spell and punctuate correctly.',
    },
  ],
  sections: [
    {
      name: 'Section A: Reading',
      marks: 56,
      about:
        'Questions 1 to 3 are on Text 1, Questions 4 to 6 are on Text 2, and Question 7 is on both texts together.',
      questions: [
        {
          label: 'Question 1',
          kind: 'Finding information (Text 1)',
          marks: 2,
          objectives: [{ id: 'AO1', marks: 2 }],
          minutes: 2,
          task: 'Find two things in the lines of Text 1 that the question names, for example two places or two activities the writer mentions.',
          rewards: [
            'One mark for each correct point, up to two.',
            'A word or a short phrase from the named lines is enough.',
          ],
          levels: [],
          avoid: [
            'Taking an answer from outside the named lines.',
            'Adding explanation: it earns nothing extra.',
          ],
          tip: 'Mark the line numbers on Text 1 before you look for answers.',
          markerQuestionId: 'Q1',
        },
        {
          label: 'Question 2',
          kind: 'Finding information (Text 1)',
          marks: 2,
          objectives: [{ id: 'AO1', marks: 2 }],
          minutes: 2,
          task: 'Give two things from a short section of Text 1, which the question names by line number or prints for you. The paper lets you answer in your own words or with quotations.',
          rewards: [
            'One mark for each correct point, up to two.',
            'Each point must be different from the other.',
            'Your own words and short quotations both count.',
          ],
          levels: [],
          avoid: [
            'Making the same point twice in different words.',
            'Spending long on a two-mark question.',
          ],
          tip: 'Put one answer on each numbered line.',
          markerQuestionId: 'Q2',
        },
        {
          label: 'Question 3',
          kind: 'Language and structure (Text 1)',
          marks: 15,
          objectives: [{ id: 'AO2', marks: 15 }],
          minutes: 18,
          task: "Analyse how the writer of Text 1 uses language and structure to hold the reader's interest. In recent papers this question has covered the whole of Text 1.",
          rewards: [
            'Both language (word choice, imagery, tone, sentence forms) and structure (the opening, the order of ideas, shifts in focus, the ending).',
            'Detailed references from across Text 1, each linked to its effect on the reader.',
            'Subject terms used accurately where they sharpen a point, for example anecdote, rhetorical question, statistic or a one-sentence paragraph.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-3',
              looksLike:
                'Says a little about the text and names some features, with few quotations.',
            },
            {
              name: 'Level 2',
              marks: '4-6',
              looksLike:
                'Comments on the writing, with quotations that fit but are not explored. An answer on language only, or structure only, cannot go above this level.',
            },
            {
              name: 'Level 3',
              marks: '7-9',
              looksLike:
                'Explains how both the language and the structure create effects, with well-matched quotations.',
            },
            {
              name: 'Level 4',
              marks: '10-12',
              looksLike:
                'Explores both the language and the structure in detail, with plenty of quotations backing up each point.',
            },
            {
              name: 'Level 5',
              marks: '13-15',
              looksLike:
                'Analyses both with real insight, using carefully picked quotations that sharpen every point.',
            },
          ],
          avoid: [
            'Leaving out structure: that holds the answer at Level 2 at most.',
            'Spotting features without explaining their effect.',
            "Writing about the topic of the text instead of the writer's choices.",
          ],
          tip: 'Work through the text from start to finish: how it opens, how it develops and how it ends, picking out key language choices on the way.',
          markerQuestionId: 'Q3',
        },
        {
          label: 'Question 4',
          kind: 'Finding information (Text 2)',
          marks: 1,
          objectives: [{ id: 'AO1', marks: 1 }],
          minutes: 1,
          task: 'Find one thing in the lines of Text 2 that the question names.',
          rewards: [
            'One mark for one correct point from the named lines.',
            'Your own words or a short quotation both count.',
          ],
          levels: [],
          avoid: ['Looking outside the named lines.', 'Writing more than a line or two.'],
          tip: 'Answer in a few words and move on.',
          markerQuestionId: 'Q4',
        },
        {
          label: 'Question 5',
          kind: 'Finding information (Text 2)',
          marks: 1,
          objectives: [{ id: 'AO1', marks: 1 }],
          minutes: 1,
          task: 'Find one thing from a different set of lines in Text 2, again named in the question.',
          rewards: [
            'One mark for one correct point from the named lines.',
            'Your own words or a short quotation both count.',
          ],
          levels: [],
          avoid: [
            'Using the lines from Question 4 by mistake.',
            'Giving a long answer to a one-mark question.',
          ],
          tip: 'Check the line numbers again before you answer: they are not the same as in Question 4.',
          markerQuestionId: 'Q5',
        },
        {
          label: 'Question 6',
          kind: 'Evaluation (Text 2)',
          marks: 15,
          objectives: [{ id: 'AO4', marks: 15 }],
          minutes: 18,
          task: 'The question names something the writer of Text 2 is trying to do, such as build a sense of danger or make the reader sympathise, and asks how successfully it is achieved. Give your judgement, supported by detailed references.',
          rewards: [
            'A clear verdict on how successful the writer is, kept up through the whole answer.',
            'Points about the ideas, events and people in the text, explained as part of how the effect is achieved.',
            'Detailed, well-chosen references from across Text 2.',
            'Techniques mentioned when they support your judgement: above Level 1, the mark scheme credits them only when they do.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-3',
              looksLike:
                'Mostly describes the content. Opinions are given without reasons, and there are few quotations.',
            },
            {
              name: 'Level 2',
              marks: '4-6',
              looksLike:
                'Comments on the content and offers simple opinions, backed by quotations that fit but are not explored.',
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
                'Analyses the text and builds a well-argued judgement, with detailed quotations backing up every point.',
            },
            {
              name: 'Level 5',
              marks: '13-15',
              looksLike:
                'Evaluates the text as a whole with a consistent, thoughtful judgement, and every reference is chosen to make the argument convincing.',
            },
          ],
          avoid: [
            'Analysing language for its own sake, with no view on how well it works.',
            'Bringing in Text 1: this question is about Text 2 only.',
            'Agreeing that the writer succeeds without saying how, or how far.',
          ],
          tip: 'Open with an overall verdict, then test it paragraph by paragraph against the text.',
          markerQuestionId: 'Q6',
        },
        {
          label: 'Question 7(a)',
          kind: 'Synthesis (both texts)',
          marks: 6,
          objectives: [{ id: 'AO1', marks: 6 }],
          minutes: 8,
          task: 'Bring together evidence from both texts to show what they have in common, such as similarities between the people, places or experiences they describe. (Synthesise means combining details from two texts into one answer.)',
          rewards: [
            'Similarities supported with evidence from both texts.',
            'Points that join the two texts together, rather than dealing with one and then the other.',
            'Relevant evidence from each text: short quotations or close reference.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-2',
              looksLike:
                'Spots one or two things the texts share, but links them only loosely, with little evidence.',
            },
            {
              name: 'Level 2',
              marks: '3-4',
              looksLike:
                'Finds sensible similarities and joins the texts together clearly, with suitable evidence, though one text may get more attention than the other.',
            },
            {
              name: 'Level 3',
              marks: '5-6',
              looksLike:
                'Finds well-observed similarities and weaves the two texts together throughout, with well-chosen evidence from both.',
            },
          ],
          avoid: [
            'Using one text only: the mark scheme says both texts must be used to earn any marks.',
            'Analysing language: this question rewards finding and combining evidence.',
            'Writing about differences when the question asks for similarities.',
          ],
          tip: 'Make each point cover both texts: name the similarity, then give the evidence from Text 1 and from Text 2.',
          markerQuestionId: 'Q7a',
        },
        {
          label: 'Question 7(b)',
          kind: 'Comparison (both texts)',
          marks: 14,
          objectives: [{ id: 'AO3', marks: 14 }],
          minutes: 18,
          task: "Compare the two writers' perspectives on the shared topic, and the methods each one uses to get them across. (A perspective is a point of view or attitude.)",
          rewards: [
            "A range of comparisons of the writers' ideas and attitudes, covering differences as well as similarities.",
            'How each writer conveys those ideas: tone, language, structure and the kind of evidence they use.',
            'References from both texts, balanced and used to support each comparison.',
            'Comparative words and phrases, such as whereas, similarly and in contrast, that keep both texts in view.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-2',
              looksLike:
                'Says what each text is about without really comparing them, with few quotations.',
            },
            {
              name: 'Level 2',
              marks: '3-5',
              looksLike:
                "Makes the more obvious comparisons and comments on the writers' views, with quotations that fit but are not explored. An answer that deals with only one text in detail cannot go above this level.",
            },
            {
              name: 'Level 3',
              marks: '6-8',
              looksLike:
                "Makes several comparisons and explains each writer's views and how they come across, with well-matched quotations.",
            },
            {
              name: 'Level 4',
              marks: '9-11',
              looksLike:
                'Compares the texts on many points and explores how each writer gets their views across, with evidence drawn evenly from both.',
            },
            {
              name: 'Level 5',
              marks: '12-14',
              looksLike:
                'Compares the texts in depth and from many angles, analysing how each writer conveys their view, with carefully picked evidence from both.',
            },
          ],
          avoid: [
            'Writing about one text and then the other, with no links between them.',
            'Comparing only what the texts are about, not the attitudes and methods.',
            'Thin coverage of one text: an unbalanced answer cannot reach Level 3.',
          ],
          tip: 'Plan three or four comparison points first, and make every paragraph refer to both texts.',
          markerQuestionId: 'Q7b',
        },
      ],
    },
    {
      name: 'Section B: Transactional Writing',
      marks: 40,
      about:
        'One piece of non-fiction writing for a stated purpose and audience, from a choice of two tasks linked by theme to the reading.',
      questions: [
        {
          label: 'Question 8 or 9 (answer one)',
          kind: 'Transactional writing',
          marks: 40,
          objectives: [
            { id: 'AO5', marks: 24 },
            { id: 'AO6', marks: 16 },
          ],
          minutes: 45,
          task: 'Choose one of the two tasks and write in the form, and for the audience and purpose, that it sets: for example an article, a letter, a review, a speech or a section of a guide that informs, advises or persuades. (Transactional writing is writing that does a real job for a real reader.)',
          rewards: [
            'AO5 (24 marks): the features of the form, such as a headline for an article or a greeting and sign-off for a letter, and a tone and register that suit the audience.',
            'AO5: a clear line of argument or advice, with an introduction, developed points and a conclusion, linked smoothly, and techniques chosen for the purpose, such as direct address, rhetorical questions, examples and anecdotes.',
            'AO6 (16 marks): varied, precise vocabulary, a range of sentence structures, and accurate spelling and punctuation.',
            'The two objectives are marked separately, each on its own five levels, and the marks are added together.',
          ],
          levels: [
            {
              name: 'AO5: Level 1',
              marks: '1-4',
              looksLike:
                'Some ideas come across, but the writing has little sense of its audience or purpose and is loosely organised.',
            },
            {
              name: 'AO5: Level 2',
              marks: '5-9',
              looksLike:
                'Knows who the writing is for and why, in a simple, steady tone, and sets out ideas in order, in paragraphs.',
            },
            {
              name: 'AO5: Level 3',
              marks: '10-14',
              looksLike:
                'Ideas and techniques are picked to suit the audience and purpose, the tone fits, and each point builds on the last, in paragraphs that make the writing easy to follow.',
            },
            {
              name: 'AO5: Level 4',
              marks: '15-19',
              looksLike:
                'The writing is shaped deliberately to affect the reader, tone and register are well judged, and the structure stays under control across the whole piece.',
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
            'Ignoring the audience: a speech to your year group and a letter to a newspaper editor need different registers.',
            'Leaning on the reading texts instead of developing your own ideas.',
            'A list of points with no development or linking.',
            'Leaving no time to proofread: AO6 is worth 16 marks.',
          ],
          tip: "Before you write, note the form, audience and purpose, use the task's suggested points as a starting plan for four or five paragraphs, and decide your opening and closing lines.",
          markerQuestionId: 'Q8/Q9',
        },
      ],
    },
  ],
  timing: [
    'The front cover of the paper advises about 1 hour 20 minutes on Section A and about 45 minutes on Section B.',
    'Our suggestion for Section A, based on the marks: read Text 1 (about 6 minutes), then Questions 1, 2 and 3 (about 2, 2 and 18 minutes); read Text 2 (about 6 minutes), then Questions 4, 5 and 6 (about 1, 1 and 18 minutes); then Question 7(a) (about 8 minutes) and 7(b) (about 18).',
    'Our suggestion for Section B: about 5 minutes planning, 35 writing and 5 checking.',
  ],
  checklist: [
    'Questions 1, 2, 4 and 5: each answer comes from the right text and the right lines.',
    'Question 3: you have covered structure as well as language.',
    'Question 6: each paragraph judges how well the writing works.',
    'Questions 7(a) and 7(b): both use evidence from both texts.',
    'Section B: the form and register match the task, and you have proofread for sentence punctuation, apostrophes and spelling.',
  ],
}
