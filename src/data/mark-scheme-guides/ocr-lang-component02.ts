/**
 * OCR GCSE English Language (J351), Component 02: Exploring effects and impact.
 *
 * Checked on 24 October 2026 against OCR's J351/02 mark scheme for June 2024
 * (each question's marks, objectives and level ranges), the J351 specification
 * (Version 2.0, March 2026: 2 hours, 80 marks, 50%, AO weightings, and no
 * 19th-century text in this component), and the J351/02 sample assessment
 * materials and June 2024 question paper (the question pattern, the kinds of
 * writing task, and OCR's advice of about an hour per section). ocr.org.uk was
 * down for scheduled maintenance that morning, so each PDF was read from the
 * Internet Archive's capture of its ocr.org.uk address. The URLs below are OCR's.
 *
 * SECOND CHECK, 24 October 2026. ocr.org.uk still showed its maintenance page, so
 * every figure was read again from Internet Archive captures of OCR's own URLs:
 * the June 2024 mark scheme and question paper (captured 2 May 2026), the
 * specification Version 2.0 (captured 28 September 2026) and the sample
 * assessment materials (captured 22 June 2024). Every mark, objective split,
 * level range and timing in the guide, every difference below and both OCR slips
 * were confirmed; the marker's figures were read from its own data, not its
 * comments (.tmp-guides/check-ocr-marker.ts). Fixes made:
 * - Questions 2 and 3, Level 2 said answers favour language over structure, and
 *   Question 3's said terms are used "not always correctly"; OCR's Level 2 says
 *   either one, and terms not always relevant (June 2024 mark scheme). Now so.
 * - Question 2, Level 4 said one of the two "gets" more attention; OCR says the
 *   explanation may be unbalanced (June 2024 mark scheme). It now says "may".
 * - Question 4 AO4 Level 1, AO5 Level 5 and AO6 Level 4 followed OCR's descriptor
 *   wording too closely (June 2024 mark scheme); rewritten in our own words.
 * - AO5 Level 1 said "the tone wobbles", which is nearer a higher level; OCR's
 *   Level 1 is a limited attempt at a fitting tone (June 2024 mark scheme).
 * - Question 3's markerQuestionId was 'Q1'; it is now null. The marker's Q1 is
 *   out of 16 and describes a 19th-century or non-fiction source, so an answer to
 *   this 12-mark question would come back marked out of 16. Point it at the
 *   marker again once the marker matches OCR.
 *
 * DIFFERENCES FROM THE AI MARKER (ocrLangComponent02 in
 * src/lib/marking/mark-schemes/ocr-lang.ts). Its questions do not match the
 * paper's. The guide follows OCR; the marker is unchanged.
 * - marker: Q1 16 marks AO2 (language and structure); board: Q1 4 marks AO1
 *   (short retrieval parts, marked point by point).
 * - marker: Q2 16 marks AO4 (evaluating one text); board: Q2 6 marks AO2
 *   (language and structure in a short section, six one-mark levels).
 * - marker: Q3 8 marks AO3 (comparison); board: Q3 12 marks AO2 (language and
 *   structure, six two-mark levels).
 * - marker: Q4 40 marks AO5 24 + AO6 16 (creative writing); board: Q4 18 marks,
 *   AO3 6 + AO4 12 (a statement about both texts, evaluated and compared). The
 *   writing is Question 5 or 6, choose one: 40 marks, AO5 24 + AO6 16.
 * - Paper totals by objective: marker AO1 0, AO2 16, AO3 8, AO4 16; board AO1 4,
 *   AO2 18, AO3 6, AO4 12. AO5 24, AO6 16, 80 marks and 120 minutes agree.
 * - Task wording: marker Q1 allows a 19th-century source, but the specification
 *   says this component has none; marker Q4 offers a description from a picture
 *   or a narrative opening, but OCR's sample and June 2024 tasks are a story from a
 *   given title or personal writing about an experience.
 * - Level ranges: marker AO5 four six-mark levels (1-6 up to 19-24), board six
 *   four-mark levels; marker Q1 AO2 and Q2 AO4 four four-mark levels each (1-4 up
 *   to 13-16), marker Q3 AO3 four two-mark levels (1-2 up to 7-8). AO6 on four
 *   four-mark levels agrees.
 *
 * markerQuestionId: Question 5 or 6 points to the marker's Q4 (40 marks, AO5 24 +
 * AO6 16, as OCR has it). Questions 1 to 4 are null: no marker question has the
 * same marks and objectives. Question 4's evaluation and comparison are split
 * across the marker's Q2 (one text, 16 marks) and Q3 (8 marks), neither of which
 * is OCR's question, and the marker's Q1, its only extended language and
 * structure question, is out of 16 where OCR's Question 3 is out of 12.
 *
 * OCR's June 2024 mark scheme has two slips of its own: its AO grid splits
 * Question 1 as 1 + 1 + 2 though that paper set 3 + 1, and its Section B
 * instruction says AO4 where the grid and the specification have AO6.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'ocr-lang-component02',
  title: 'OCR English Language Component 02',
  board: 'OCR',
  qualification: 'GCSE English Language (J351)',
  paperName: 'Exploring effects and impact',
  durationMinutes: 120,
  totalMarks: 80,
  weighting: '50% of the GCSE',
  summary:
    'You read two unseen literary prose texts (ones you have not studied) from the 20th or 21st century. At least one is fiction, such as an extract from a novel; the other may be literary non-fiction, such as a memoir. You answer four reading questions, then write one piece of creative writing from a choice of two tasks.',
  source: {
    document:
      'OCR GCSE English Language J351/02 mark scheme, June 2024, checked with the J351 specification (Version 2.0, March 2026) and the J351/02 sample assessment materials',
    url: 'https://www.ocr.org.uk/Images/727659-mark-scheme-exploring-effects-and-impact.pdf',
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
        'Write clearly, effectively and imaginatively for your audience and purpose, in a fitting tone, style and register (how formal you sound), with your ideas organised so the piece holds together.',
    },
    {
      id: 'AO6',
      plain:
        'Write accurately: spell and punctuate correctly, and vary your vocabulary and sentences.',
    },
  ],
  sections: [
    {
      name: 'Section A: Reading meaning and effects',
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
          task: 'Short questions on a set of lines from one text (Text 1 in the papers checked). The 4 marks are split into parts that change from paper to paper: you may be asked to pick out words or phrases, or to say briefly what something shows or why something happens.',
          rewards: [
            'One mark for each correct answer, up to the marks shown for each part.',
            'Words or phrases copied accurately from the named lines when a part asks for them.',
            'A short answer in your own words when a part asks what something shows or why.',
          ],
          levels: [],
          avoid: [
            'Packing several possible answers into one long quotation: an overloaded answer line can score nothing.',
            'Using lines outside the ones named.',
            'Spending more than a few minutes here: it is worth 4 of the 80 marks.',
          ],
          tip: 'Give exactly the number of answers asked for, one per line, each as short as it can be while still making sense.',
          markerQuestionId: null,
        },
        {
          label: 'Question 2',
          kind: 'Language and structure (short)',
          marks: 6,
          objectives: [{ id: 'AO2', marks: 6 }],
          minutes: 8,
          task: 'Explain how the writer uses language and structure in a short section of one text (Text 1 in the papers checked) to create the effect the question names, using subject terms such as verb, simile or short sentence.',
          rewards: [
            'Two or three well-chosen quotations from the given lines, each with its effect explained.',
            'Something on structure as well as language, for example how the order of events or the length of sentences builds a feeling.',
            'Accurate subject terms that help your explanation.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1',
              looksLike:
                'Describes or retells the lines, with little sense of how the writer creates the effect and few or no subject terms.',
            },
            {
              name: 'Level 2',
              marks: '2',
              looksLike:
                'Notices some features, but tends to say much more about either language or structure than the other, and mostly names features without explaining what they do.',
            },
            {
              name: 'Level 3',
              marks: '3',
              looksLike:
                'Explains some effects clearly and mentions both language and structure, though not both fully.',
            },
            {
              name: 'Level 4',
              marks: '4',
              looksLike:
                'Explains with understanding what both the language and the structure do, though one may get more attention than the other.',
            },
            {
              name: 'Level 5',
              marks: '5',
              looksLike:
                'Analyses with insight, giving language and structure fairly even, detailed attention, with terms that fit naturally.',
            },
            {
              name: 'Level 6',
              marks: '6',
              looksLike:
                'Analyses language and structure in consistent depth and with subtlety. The terms are exact and strengthen each point.',
            },
          ],
          avoid: [
            'Writing as much as you would for Question 3: this one is worth half as much.',
            'Naming techniques without saying what they do.',
            'Ignoring structure.',
          ],
          tip: 'Two short paragraphs can be enough: one on a couple of word choices and one on how the lines are built or ordered.',
          markerQuestionId: null,
        },
        {
          label: 'Question 3',
          kind: 'Language and structure analysis',
          marks: 12,
          objectives: [{ id: 'AO2', marks: 12 }],
          minutes: 15,
          task: "Explore how the writer of the other text (Text 2 in the papers checked) presents something the question names, such as a character's feelings or attitude, by looking closely at the language and structure of the lines given. Use subject terms where they help.",
          rewards: [
            'Comments on both language and structure: the higher levels expect detailed, fairly balanced analysis of the two.',
            'Short quotations, each with a close explanation of what it suggests about the character, mood or situation.',
            'Subject terms used accurately inside the explanation, not just named.',
            'A steady focus on exactly what the question asks about.',
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
                'Detailed, subtle analysis of language and structure in every point, showing exactly how the writer shapes what the reader feels. Terms are exact and strengthen the argument.',
            },
          ],
          avoid: [
            'Retelling what happens in the lines instead of analysing how they are written.',
            'Naming a technique without explaining its effect.',
            'Leaving structure out, or adding one sentence about it at the end.',
            'Going outside the lines you are given.',
          ],
          tip: 'Find three or four moments that show what the question asks about. For each, analyse a word choice, then say where that moment sits in the passage and why its placing matters.',
          markerQuestionId: null,
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
          task: 'Respond to a statement about both texts and decide how far you agree. The bullet points steer you to weigh up your impressions of the texts and their effect on you (evaluation, AO4, 12 marks) and to compare how the two writers present their ideas (comparison, AO3, 6 marks). To evaluate is to judge how well something works and give your reasons. Quote from both texts.',
          rewards: [
            'A clear answer to how far you agree, kept up through the whole answer. You can find the statement truer of one text than the other.',
            'Your impressions of the characters, settings and events, and how they affect you as a reader, backed by quotations from both texts.',
            'A comparison of how the two writers present their ideas, for example through viewpoint, description or dialogue. OCR accepts evaluation and comparison woven together all the way through.',
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
            'Retelling the stories instead of judging them.',
            'Writing about the two texts separately and never linking them, which earns very little of the comparison mark.',
            'Quoting from only one of the texts.',
          ],
          tip: "Plan three or four points about the statement. In each paragraph, judge the point in both texts, compare the writers' methods and quote from each.",
          markerQuestionId: null,
        },
      ],
    },
    {
      name: 'Section B: Writing imaginatively and creatively',
      marks: 40,
      about:
        'One piece of creative writing, from a choice of two tasks linked to the theme of the reading texts.',
      questions: [
        {
          label: 'Question 5 or 6 (answer one)',
          kind: 'Creative writing',
          marks: 40,
          objectives: [
            { id: 'AO5', marks: 24 },
            { id: 'AO6', marks: 16 },
          ],
          minutes: 60,
          task: 'Choose one task. In the papers checked, the two tasks were a story from a given title and a piece of personal writing about an experience, each with bullet points suggesting what to include, such as a clear viewpoint, the setting, or thoughts and feelings. The examiner marks content and organisation (AO5) out of 24 and technical accuracy (AO6) out of 16, then adds the two.',
          rewards: [
            'A clear, consistent viewpoint and voice that fit the task.',
            'Vivid, precise description of setting, people and feelings, chosen to build a mood.',
            'A deliberate shape: an opening that draws the reader in, a focus that develops, and an ending that feels intended.',
            'Varied sentences and ambitious vocabulary used for effect.',
            'Accurate spelling and punctuation, including the punctuation of speech if you use dialogue.',
          ],
          levels: [
            {
              name: 'Level 1 (AO5)',
              marks: '1-4',
              looksLike:
                'Makes some attempt at the kind of writing asked for, but does little to suit the tone to the reader, and there is little sense of a planned shape or paragraphs.',
            },
            {
              name: 'Level 2 (AO5)',
              marks: '5-8',
              looksLike:
                'Mostly keeps to the task, tries for a fitting tone, and shows some organisation through paragraphs and links.',
            },
            {
              name: 'Level 3 (AO5)',
              marks: '9-12',
              looksLike:
                'Stays with the task and keeps the reader in mind. The tone is right but slips at times. The piece has a clear shape overall, and paragraphs mostly work.',
            },
            {
              name: 'Level 4 (AO5)',
              marks: '13-16',
              looksLike:
                'Handles the form clearly for the reader, with a voice and style that suit the task. A well-organised piece that sometimes uses its structure for effect.',
            },
            {
              name: 'Level 5 (AO5)',
              marks: '17-20',
              looksLike:
                'Writes with confidence, and the voice and style suit the task from start to finish. The piece is firmly shaped, and paragraphs and sentences are planned to do specific jobs for the reader.',
            },
            {
              name: 'Level 6 (AO5)',
              marks: '21-24',
              looksLike:
                'Shapes every part of the piece on purpose to work on the reader. Bold, well-judged choices of voice and style, and a structure fully under control and used for a range of effects.',
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
            'Cramming in too many events: one clear situation, described closely, gives you more to work with than a crowded plot.',
            'Losing the viewpoint, for example drifting between first and third person.',
            'Ignoring the title or the bullet points of the task you chose.',
            'Leaving no time to check: spelling, punctuation and sentences (AO6) are worth 16 of the 40 marks.',
          ],
          tip: 'Plan the shape before you write: where the piece starts, the moment it builds to and how it ends. Then spend most of your words on a few moments described in close detail.',
          markerQuestionId: 'Q4',
        },
      ],
    },
  ],
  timing: [
    "OCR's advice on the paper: about 1 hour on Section A and 1 hour on Section B.",
    'Section A, as a suggestion: about 12 minutes reading both texts, then about 5 minutes on Question 1, 8 on Question 2, 15 on Question 3 and 20 on Question 4.',
    'Section B, as a suggestion: 5 to 10 minutes planning, about 45 minutes writing and 5 minutes checking.',
    "The minutes for each question are a suggestion worked out from the marks, not OCR's own figures.",
  ],
  checklist: [
    'Each Section A answer uses the text and the lines the question names.',
    'Questions 2 and 3 say something about structure as well as language.',
    'Question 4 gives a clear verdict on the statement, quotes both texts and compares them.',
    'Your creative piece keeps one viewpoint and follows the task you chose.',
    'Spelling, punctuation and paragraphs checked, including speech marks and apostrophes.',
  ],
}
