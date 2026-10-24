/**
 * OCR GCSE English Language (J351), Component 01: Communicating information and
 * ideas.
 *
 * Checked on 24 October 2026 against OCR's J351/01 mark scheme for June 2024
 * (each question's marks, objectives and level ranges), the J351 specification
 * (Version 2.0, March 2026: 2 hours, 80 marks, 50%, AO weightings), and the
 * J351/01 sample assessment materials and June 2024 question paper (the question
 * pattern, and OCR's advice of about an hour per section). ocr.org.uk was down for
 * scheduled maintenance all that morning, so each PDF was read from the Internet
 * Archive's capture of its ocr.org.uk address. The URLs below are OCR's own.
 *
 * SECOND CHECK, 24 October 2026. ocr.org.uk still showed its maintenance page, so
 * every figure was read again from Internet Archive captures of OCR's own URLs:
 * the June 2024 mark scheme and question paper (captured 2 May 2026), the
 * specification Version 2.0 (captured 28 September 2026) and the sample
 * assessment materials (captured 22 June 2024). Every mark, objective split,
 * level range and timing in the guide, and every difference below, was confirmed;
 * the marker's figures were read from its own data, not its comments
 * (.tmp-guides/check-ocr-marker.ts). Fixes made:
 * - Question 3, Level 2 said answers favour language over structure and use terms
 *   "not always correctly"; OCR's Level 2 says either one, and terms not always
 *   relevant (June 2024 mark scheme, Question 3). It now says so.
 * - Question 4 AO4 Level 1, AO5 Level 5 and AO6 Level 4 followed OCR's descriptor
 *   wording too closely (June 2024 mark scheme); rewritten in our own words.
 * - AO5 Level 1 said "the tone drifts", which is nearer a higher level; OCR's
 *   Level 1 is a limited attempt at a fitting tone (June 2024 mark scheme).
 * - Question 4's markerQuestionId was 'Q4'; it is now null. The marker's Q4 marks
 *   comparison alone out of 10, so it would mark an answer to this 18-mark
 *   question without its 12 evaluation marks: the reason the Component 02 guide
 *   gives for its own Question 4. Point it at 'Q4' again once the marker matches.
 * - Added below: the totals by objective, Question 1's task wording, and the
 *   marker's exact level ranges.
 *
 * DIFFERENCES FROM THE AI MARKER (ocrLangComponent01 in
 * src/lib/marking/mark-schemes/ocr-lang.ts). The guide follows OCR; the marker is
 * unchanged, because changing it changes how essays are scored.
 * - marker: Q4 10 marks AO3; board: Q4 18 marks, AO3 6 + AO4 12, on two grids
 *   whose marks are added.
 * - marker: Q5-SPaG 8 marks AO4 (correcting errors in a passage); board: no such
 *   question. AO4 in English Language is critical evaluation, assessed in Q4;
 *   spelling and punctuation are AO6, inside the writing task. These 8 marks are
 *   why the marker's paper still adds up to 80.
 * - Paper totals by objective: marker AO3 10, AO4 8; board AO3 6, AO4 12. AO1 10,
 *   AO2 12, AO5 24 and AO6 16 agree.
 * - marker: Q5, a single writing task; board: Question 5 or 6, choose one (40
 *   marks, AO5 24 + AO6 16, which the marker has right).
 * - Task wording: marker Q1 asks only for explicit information, one mark per
 *   point; board: AO1 covers implicit information too, and a part may ask for an
 *   explanation in the candidate's own words (June 2024 Q1(c), sample Q1(b)).
 * - Level ranges: marker Q1 four one-mark levels, board marks it point by point;
 *   marker Q3 four levels (1-3, 4-6, 7-9, 10-12), board six two-mark levels;
 *   marker Q4 AO3 four levels (1-2, 3-5, 6-8, 9-10), board AO3 six one-mark levels
 *   plus AO4 six two-mark levels; marker AO5 four six-mark levels (1-6 up to
 *   19-24), board six four-mark levels.
 * - The same in both: 80 marks, 120 minutes, Q1 4 marks AO1, Q2 6 marks AO1 on
 *   three two-mark levels, Q3 12 marks AO2, AO6 on four four-mark levels.
 *
 * OCR's own AO grid (June 2024 mark scheme, page 20) also lists Question 2 under
 * AO3, against its own totals row, the question's AO1 descriptors, the sample
 * mark scheme's grid (AO1 6 only) and the specification's AO1 share (6.25%, 10
 * marks: Q1 4 + Q2 6). The guide treats Q2 as AO1 only. Question 1's parts change
 * from paper to paper (2 + 2 in the sample paper, 1 + 1 + 2 in June 2024), so the
 * guide gives only its total.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'ocr-lang-component01',
  title: 'OCR English Language Component 01',
  board: 'OCR',
  qualification: 'GCSE English Language (J351)',
  paperName: 'Communicating information and ideas',
  durationMinutes: 120,
  totalMarks: 80,
  weighting: '50% of the GCSE',
  summary:
    'You read two unseen non-fiction texts (ones you have not studied), one from the 19th century and one from the 20th or 21st century, and answer four reading questions on them. Then you write one piece of non-fiction, such as a speech, letter or article, from a choice of two tasks.',
  source: {
    document:
      'OCR GCSE English Language J351/01 mark scheme, June 2024, checked with the J351 specification (Version 2.0, March 2026) and the J351/01 sample assessment materials',
    url: 'https://www.ocr.org.uk/Images/727658-mark-scheme-communication-information-and-ideas.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://www.ocr.org.uk/qualifications/gcse/english-language-j351-from-2015/assessment/',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Find information and ideas, whether they are stated outright or only hinted at, and bring together evidence from different texts.',
    },
    {
      id: 'AO2',
      plain:
        'Explain how writers use language and structure to affect readers, using subject terms to back up your points.',
    },
    {
      id: 'AO3',
      plain: 'Compare the ideas and viewpoints of two writers, and how each one gets them across.',
    },
    {
      id: 'AO4',
      plain:
        'Judge texts critically: weigh up how well, and how far, they do something, and back your view with quotations.',
    },
    {
      id: 'AO5',
      plain:
        'Write clearly and effectively for your audience and purpose, in a fitting tone, style and register (how formal you sound), with your ideas organised so the piece holds together.',
    },
    {
      id: 'AO6',
      plain:
        'Write accurately: spell and punctuate correctly, and vary your vocabulary and sentences.',
    },
  ],
  sections: [
    {
      name: 'Section A: Reading information and ideas',
      marks: 40,
      about:
        'Four questions on the two texts in the Reading Insert (the booklet that holds the texts), building from short answers to a long answer on both texts.',
      questions: [
        {
          label: 'Question 1',
          kind: 'Finding information',
          marks: 4,
          objectives: [{ id: 'AO1', marks: 4 }],
          minutes: 5,
          task: 'Short questions on a set of lines from one text (Text 1 in the papers checked). The 4 marks are split into two or three parts, and the split changes from paper to paper. A part may ask for a word, a phrase or a quotation, or ask you to explain a point in a few words.',
          rewards: [
            'One mark for each correct point, up to the marks shown for that part.',
            'Answers taken only from the lines the question names.',
            'Exactly what each part asks for: a quotation where it asks for one, your own words where it asks you to explain.',
          ],
          levels: [],
          avoid: [
            'Copying out a long sentence that holds several possible answers. Give the phrase on its own.',
            'Using lines outside the ones named.',
            'Spending more than a few minutes here: it is worth 4 of the 80 marks.',
          ],
          tip: 'Before you answer, put a bracket round the named lines in the insert, so that every answer comes from inside them.',
          markerQuestionId: 'Q1',
        },
        {
          label: 'Question 2',
          kind: 'Bringing two texts together',
          marks: 6,
          objectives: [{ id: 'AO1', marks: 6 }],
          minutes: 8,
          task: 'Write about a link between the two texts that the question names, for example what the two writers or their experiences have in common, using evidence from both. This is synthesis: bringing together details from both texts into one answer. There are no marks here for analysing language.',
          rewards: [
            'Points that connect the two texts, each one supported by evidence from both.',
            'A fair balance of evidence between the two texts.',
            'Links that go beyond surface facts to shared ideas, attitudes or feelings.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-2',
              looksLike:
                'Picks out a few details, mostly obvious ones, and does little to connect the two texts. The evidence may come mostly from one of them.',
            },
            {
              name: 'Level 2',
              marks: '3-4',
              looksLike:
                'Makes sensible connections between the texts with relevant evidence, though one text may get more attention than the other.',
            },
            {
              name: 'Level 3',
              marks: '5-6',
              looksLike:
                'Connects the texts confidently and in detail, with well-chosen evidence from both, and sees the bigger ideas they share as well as the facts.',
            },
          ],
          avoid: [
            'Writing about one text and then the other without linking them.',
            'Analysing techniques: that belongs in Question 3.',
            'Writing about differences when the question asks about similarities, or the other way round.',
          ],
          tip: 'Make three linked points. For each one, state the link in a sentence, then give a short piece of evidence from Text 1 and one from Text 2.',
          markerQuestionId: 'Q2',
        },
        {
          label: 'Question 3',
          kind: 'Language and structure analysis',
          marks: 12,
          objectives: [{ id: 'AO2', marks: 12 }],
          minutes: 15,
          task: 'Explore how the writer of one text (Text 2 in the papers checked) uses language and structure to create the effect the question names, in the whole text or in a set group of lines, as the question says. Language means word choices, imagery and tone. Structure means how the writing is built: how it opens, where the focus shifts, how sentences and paragraphs are shaped, and how it ends.',
          rewards: [
            'Comments on both language and structure. In OCR marking, an answer that does not give both a fair share cannot reach the higher levels.',
            'Short, precise quotations, each followed by what it suggests and how it affects the reader.',
            'Subject terms (for example verb, metaphor, list of three, short sentence) used accurately inside your explanation, not just named.',
            'A steady focus on the effect the question asks about.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-2',
              looksLike:
                'Mostly describes or retells the lines, with little sense of how the writer creates effects and few or no subject terms.',
            },
            {
              name: 'Level 2',
              marks: '3-4',
              looksLike:
                'Notices some features, but tends to say much more about either language or structure than the other, and often names features without explaining what they do. Uses some terms, not always relevant ones.',
            },
            {
              name: 'Level 3',
              marks: '5-6',
              looksLike:
                'Explains some effects clearly and mentions both language and structure, though one of them is explained less fully. Some useful terms.',
            },
            {
              name: 'Level 4',
              marks: '7-8',
              looksLike:
                'Explains with understanding, and in some depth, what both the language and the structure do, though one may get more attention than the other. Terms help to develop the points.',
            },
            {
              name: 'Level 5',
              marks: '9-10',
              looksLike:
                'Analyses with insight, giving language and structure fairly even, detailed attention. Terms fit naturally into the explanations.',
            },
            {
              name: 'Level 6',
              marks: '11-12',
              looksLike:
                'Detailed, subtle analysis of language and structure in every point, showing exactly how the writer steers the reader. Terms are exact and strengthen the argument.',
            },
          ],
          avoid: [
            'Naming a technique without explaining its effect on the reader.',
            'Going outside the lines you are given, when the question names lines.',
            'Leaving structure out, or adding one sentence about it at the end.',
            'Long quotations: a few words is usually enough.',
          ],
          tip: 'Follow the passage from start to finish: say how it opens, where it shifts and how it ends, and analyse two or three key word choices along the way.',
          markerQuestionId: 'Q3',
        },
        {
          label: 'Question 4',
          kind: 'Evaluation and comparison',
          marks: 18,
          objectives: [
            { id: 'AO3', marks: 6 },
            { id: 'AO4', marks: 12 },
          ],
          minutes: 20,
          task: 'Respond to a statement about both texts and decide how far you agree. The bullet points steer you to two jobs: weighing up the texts and their effect on you as a reader (evaluation, AO4, 12 marks), and comparing the ideas the writers present and how they present them (comparison, AO3, 6 marks). To evaluate is to judge how well something works and give your reasons. Quote from both texts.',
          rewards: [
            'A clear answer to how far you agree, kept up through the whole answer. Your view can differ between the two texts.',
            'An explanation of how each text affects you as a reader, backed by quotations from both.',
            "A comparison of the writers' ideas and viewpoints, and of how each gets them across. OCR accepts evaluation and comparison woven together all the way through.",
            'Quotations chosen to prove a point and built into your sentences.',
          ],
          levels: [
            {
              name: 'Level 1 (AO3)',
              marks: '1',
              looksLike:
                "Notes one or two basic likenesses or differences between the writers' ideas.",
            },
            {
              name: 'Level 2 (AO3)',
              marks: '2',
              looksLike:
                "Spots the main ways the writers' ideas and viewpoints are alike or different.",
            },
            {
              name: 'Level 3 (AO3)',
              marks: '3',
              looksLike:
                "Sets the writers' ideas side by side clearly, and begins to compare their methods too.",
            },
            {
              name: 'Level 4 (AO3)',
              marks: '4',
              looksLike:
                'Develops the comparison of both what the writers think and how they show it.',
            },
            {
              name: 'Level 5 (AO3)',
              marks: '5',
              looksLike:
                'Keeps the comparison going through the whole answer, covering both ideas and methods.',
            },
            {
              name: 'Level 6 (AO3)',
              marks: '6',
              looksLike:
                'Moves between the two texts all the way through, exploring in detail what each writer thinks and how each one shows it.',
            },
            {
              name: 'Level 1 (AO4)',
              marks: '1-2',
              looksLike:
                'Mostly says what happens in the texts, often by copying out lines or retelling them, with little real judgement of the statement.',
            },
            {
              name: 'Level 2 (AO4)',
              marks: '3-4',
              looksLike:
                'Gives simple judgements on the statement, notices a little of how the texts affect a reader, and uses some suitable quotations.',
            },
            {
              name: 'Level 3 (AO4)',
              marks: '5-6',
              looksLike:
                'Makes clear judgements on the statement, shows some sense of how the texts affect a reader, and backs them with suitable quotations.',
            },
            {
              name: 'Level 4 (AO4)',
              marks: '7-8',
              looksLike:
                'Develops its judgements on the statement, comments on the effect on the reader and chooses quotations well.',
            },
            {
              name: 'Level 5 (AO4)',
              marks: '9-10',
              looksLike:
                'Weighs up the statement with care and good understanding, explains clearly how the texts affect the reader, and picks quotations that make the case convincing.',
            },
            {
              name: 'Level 6 (AO4)',
              marks: '11-12',
              looksLike:
                'Judges the statement sharply and with balance from start to finish, explains fully how the texts work on the reader, and builds exactly the right quotations into the argument.',
            },
          ],
          avoid: [
            'Agreeing or disagreeing without saying how far, or without reasons.',
            'Retelling the texts instead of judging them.',
            'Writing about the two texts separately and never linking them, which earns very little of the comparison mark.',
            'Quoting from only one of the texts.',
          ],
          tip: 'Open with a one-sentence verdict on the statement. Then build each paragraph round one idea: judge it in both texts and compare how the writers present it.',
          markerQuestionId: null,
        },
      ],
    },
    {
      name: 'Section B: Writing for audience, impact and purpose',
      marks: 40,
      about:
        'One piece of non-fiction writing, from a choice of two tasks, each with a set form, audience and purpose linked to the theme of the reading texts.',
      questions: [
        {
          label: 'Question 5 or 6 (answer one)',
          kind: 'Non-fiction writing',
          marks: 40,
          objectives: [
            { id: 'AO5', marks: 24 },
            { id: 'AO6', marks: 16 },
          ],
          minutes: 60,
          task: 'Choose one task and write the non-fiction piece it asks for, such as a speech, a letter or an article, for the audience and purpose it names. Bullet points in the task suggest what to cover. The examiner marks content and organisation (AO5) out of 24 and technical accuracy (AO6) out of 16, then adds the two.',
          rewards: [
            'Writing that clearly fits the form, audience and purpose: a speech that sounds like someone talking to listeners, a letter that is set out and addressed as a letter.',
            'A tone, style and register that suit the reader and stay steady throughout.',
            'A planned structure: an opening that grabs attention, paragraphs that build the argument or advice, and an ending that lands.',
            'A range of sentence structures and precise, ambitious vocabulary, chosen for effect.',
            'Accurate spelling and punctuation, with a range of punctuation used with control.',
          ],
          levels: [
            {
              name: 'Level 1 (AO5)',
              marks: '1-4',
              looksLike:
                'Makes some attempt at a suitable form, but does little to suit the tone to the reader, and there is little planned structure or paragraphing.',
            },
            {
              name: 'Level 2 (AO5)',
              marks: '5-8',
              looksLike:
                'Mostly keeps to a suitable form, tries for a fitting tone, and shows some organisation through paragraphs and links.',
            },
            {
              name: 'Level 3 (AO5)',
              marks: '9-12',
              looksLike:
                'Sticks to the form and keeps the audience and purpose clearly in mind. The tone is right but slips at times. The piece has a clear shape overall, and paragraphs and links mostly work.',
            },
            {
              name: 'Level 4 (AO5)',
              marks: '13-16',
              looksLike:
                'Adapts the form clearly for the reader and purpose, with a tone and style that suit the task. A well-organised piece that sometimes uses its structure for effect.',
            },
            {
              name: 'Level 5 (AO5)',
              marks: '17-20',
              looksLike:
                'Uses the form confidently, with a sure sense of the reader and the purpose. The tone and style hold steady from start to finish, and paragraphs and sentences are planned to do specific jobs for the reader.',
            },
            {
              name: 'Level 6 (AO5)',
              marks: '21-24',
              looksLike:
                'Bends the form on purpose to influence the reader. Bold, well-judged choices of tone and style drive the purpose, and every part of the structure is under control and used for effect.',
            },
            {
              name: 'Level 1 (AO6)',
              marks: '1-4',
              looksLike:
                'Sentences are mostly simple, with some tries at longer ones. Punctuation is uneven, words are plain but relevant, and everyday words are largely spelt correctly.',
            },
            {
              name: 'Level 2 (AO6)',
              marks: '5-8',
              looksLike:
                'Uses different kinds of sentence, mostly correctly and now and then for effect. Punctuation is usually right, some words are clearly picked for effect, and there are a few spelling slips, including on harder words.',
            },
            {
              name: 'Level 3 (AO6)',
              marks: '9-12',
              looksLike:
                'Varies sentences widely and on purpose. Punctuation is accurate throughout and makes the meaning clear. Some ambitious words work well, and longer regular words are spelt correctly, with the odd slip on irregular or unusual ones.',
            },
            {
              name: 'Level 4 (AO6)',
              marks: '13-16',
              looksLike:
                'Bold, varied sentences are built to give each idea its full force. Punctuation is accurate and chosen for effect as well as for clarity. Words are precise and finely chosen, and even difficult or unusual words are spelt correctly, with only the very occasional slip.',
            },
          ],
          avoid: [
            'Ignoring the form or the audience: a speech to your class and a letter to a newspaper need different voices.',
            'Starting without a plan, so the piece repeats itself or runs out of ideas.',
            'Working through the bullet points as a list instead of shaping one whole piece.',
            'Leaving no time to check: spelling, punctuation and sentences (AO6) are worth 16 of the 40 marks.',
          ],
          tip: 'Plan for five minutes: decide your viewpoint, then outline four or five paragraphs and an ending that links back to your opening. Keep the last five minutes for proofreading.',
          markerQuestionId: 'Q5',
        },
      ],
    },
  ],
  timing: [
    "OCR's advice on the paper: about 1 hour on Section A and about 1 hour on Section B.",
    'Section A, as a suggestion: about 12 minutes reading both texts, then about 5 minutes on Question 1, 8 on Question 2, 15 on Question 3 and 20 on Question 4.',
    'Section B, as a suggestion: 5 to 10 minutes planning, about 45 minutes writing and 5 minutes checking.',
    "The minutes for each question are a suggestion worked out from the marks, not OCR's own figures.",
  ],
  checklist: [
    'Each Section A answer uses the right text and stays inside any lines named.',
    'Question 3 says something about structure as well as language.',
    'Question 4 gives a clear verdict on the statement, quotes both texts and compares them.',
    'Your writing matches the form and audience of the task you chose.',
    'Spelling, punctuation and paragraphs checked, especially full stops between sentences, apostrophes and commonly confused words.',
  ],
}
