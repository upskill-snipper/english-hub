/**
 * OCR GCSE English Literature (J352), Component 01: Exploring modern and literary
 * heritage texts.
 *
 * Checked on 24 October 2026 against OCR's J352/01 mark scheme for June 2024 (the
 * intended weighting of each objective in each part, the level ranges and the
 * rubric rules), the J352 specification (Version 3.0, November 2025: 2 hours, 80
 * marks, 50%, 25% per section, AO weightings), the June 2023 mark scheme (the same
 * weightings) and the June 2024 question paper (question numbers and OCR's timing
 * advice). ocr.org.uk was down for scheduled maintenance that morning, so each PDF
 * was read from the Internet Archive's capture of its ocr.org.uk address. The URLs
 * below are OCR's own.
 *
 * SECOND CHECK, 24 October 2026. ocr.org.uk still showed its maintenance page, so
 * every figure was read again from Internet Archive captures of OCR's own URLs:
 * the June 2024 mark scheme and question paper and the June 2023 mark scheme
 * (captured 2 May 2026) and the specification Version 3.0 (captured 1 October
 * 2026). Every tariff, objective split, level range, rubric rule, question number
 * and timing in the guide, and the page 46 slip below, was confirmed; the
 * marker's figures were read from its own data, not its comments
 * (.tmp-guides/check-ocr-marker.ts). Fixes made:
 * - Section B: added that a passing mention of the rest of the novel, or a brief
 *   second moment, was capped at Level 4 (June 2023 mark scheme). The June 2024
 *   one states only the Level 3 caps, which the guide already gave.
 * - "Apt quotations" in three Level 5 lines is now "well-suited quotations", a
 *   plainer word for a 14-year-old.
 * - Added the marker's own ladders to the difference of method below.
 *
 * AGAINST THE AI MARKER (ocrLitComponent01 in
 * src/lib/marking/mark-schemes/ocr-lit.ts): the total (80), the duration (120) and
 * every tariff and objective split agree: part (a) 20 (AO1 8, AO2 4, AO3 8), part
 * (b) 20 (AO1 10, AO2 10), Section B 40 (AO1 14, AO2 14, AO3 8, AO4 4). One
 * difference of method: the marker scores each objective on its own ladder,
 * where OCR marks each answer as a whole on one six-level grid (1-3, 4-6, 7-10,
 * 11-14, 15-17, 18-20 for a part; 1-6 up to 31-36 for Section B's AO1 to AO3),
 * with AO4 on its own grid of 1, 2-3 and 4. The marker's AO4 ladder is OCR's.
 * Its other ladders, after scaleAO: part (a) AO1 1, 2-3, 4, 5, 6-7, 8; AO2 four
 * one-mark levels named Level 1, 3, 4 and 6 (the rescale drops Levels 2 and 5);
 * AO3 three levels, 1-3, 4-5, 6-8; part (b) AO1 and AO2 each 1-2, 3, 4-5, 6-7, 8,
 * 9-10; Section B AO1 and AO2 each 1-2, 3-5, 6-7, 8-9, 10-12, 13-14, and AO3 1-3,
 * 4-5, 6-8.
 *
 * Do not use the AO grid on page 46 of OCR's June 2024 mark scheme: it is the
 * J352/02 grid (questions 1a to 11, AO1 8 and AO2 12 in part (a)) and contradicts
 * the weightings table on page 11 of the same document, the June 2023 mark scheme
 * and the specification.
 * The question numbers (1 to 6, then 7 to 18) are those of the 2023 and 2024
 * papers; they follow the set-text list.
 */

import type { MarkSchemeGuide } from './types'

export const GUIDE: MarkSchemeGuide = {
  schemeId: 'ocr-lit-component01',
  title: 'OCR English Literature Component 01',
  board: 'OCR',
  qualification: 'GCSE English Literature (J352)',
  paperName: 'Exploring modern and literary heritage texts',
  durationMinutes: 120,
  totalMarks: 80,
  weighting: '50% of the GCSE',
  summary:
    'A closed-book paper (you cannot take your texts into the exam) on two set texts. In Section A you compare an extract from your modern novel or play with an unseen extract, then write about another moment in your text. In Section B you write one essay on your 19th-century novel.',
  source: {
    document:
      'OCR GCSE English Literature J352/01 mark scheme, June 2024, checked with the J352 specification (Version 3.0, November 2025)',
    url: 'https://www.ocr.org.uk/Images/727832-mark-scheme-exploring-modern-and-literary-heritage-texts.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://www.ocr.org.uk/qualifications/gcse/english-literature-j352-from-2015/assessment/',
  objectives: [
    {
      id: 'AO1',
      plain:
        'Read, understand and respond: give your own informed view of the text as an argument, backed by references and quotations.',
    },
    {
      id: 'AO2',
      plain:
        "Analyse how the writer uses language, form (the type of text and its features, such as a first-person narrator or a play's stage directions) and structure (how it is put together and ordered) to create meanings and effects, using subject terms where they help.",
    },
    {
      id: 'AO3',
      plain:
        'Show how a text connects with its context: the society, time, place and ideas it was written in or shows.',
    },
    {
      id: 'AO4',
      plain:
        'Write accurately: spell and punctuate correctly, and vary your vocabulary and sentences. Marked in Section B only.',
    },
  ],
  sections: [
    {
      name: 'Section A: Modern prose or drama',
      marks: 40,
      about:
        'One two-part question on your studied modern novel or play (Questions 1 to 6, one for each set text). Part (a) compares a printed extract from it with an unseen extract; part (b) moves to another moment in your text.',
      questions: [
        {
          label: 'Questions 1 to 6, part (a) (answer the one on your text)',
          kind: 'Comparing your extract with an unseen extract',
          marks: 20,
          objectives: [
            { id: 'AO1', marks: 8 },
            { id: 'AO2', marks: 4 },
            { id: 'AO3', marks: 8 },
          ],
          minutes: 45,
          task: "Compare how two printed extracts present the idea the question names: one from your studied text and one from a modern text of the same kind (prose with prose, drama with drama) that you have not seen before. The bullet points direct you to the situations the characters face, how they react, and the writers' techniques. Stay with the two extracts: the paper tells you to keep to them here, not to the rest of your text.",
          rewards: [
            'Comparison all the way through: what is alike and different in what the extracts show, and in how each one shows it.',
            'Your own view of each extract, backed by short quotations from both.',
            'Context worked into the comparison (8 of the 20 marks): the social and family situations, ages, classes or cultures the details of each extract suggest. The short introduction above each extract gives you some of this.',
            'Some comment on language, form and structure, with subject terms where they help (4 of the 20 marks).',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-3',
              looksLike:
                'A few relevant remarks about the extracts, with little reference to them, very little on how they are written, hardly any links between the two and context only hinted at.',
            },
            {
              name: 'Level 2',
              marks: '4-6',
              looksLike:
                'A simple answer with some support from the extracts, simple comments on the writing, a few basic links between the extracts and some awareness of context.',
            },
            {
              name: 'Level 3',
              marks: '7-10',
              looksLike:
                "A fuller answer that shows understanding, makes some direct comparisons, uses some relevant quotations, explains some of the writers' choices and comments on context in places.",
            },
            {
              name: 'Level 4',
              marks: '11-14',
              looksLike:
                'A detailed answer with a developing argument: key points of comparison are developed, quotations are relevant, there is some real analysis of the writing, and context clearly shapes the reading.',
            },
            {
              name: 'Level 5',
              marks: '15-17',
              looksLike:
                'A well-built, persuasive argument that compares the extracts throughout, with well-suited quotations built into the sentences, careful analysis, and context that informs the interpretation.',
            },
            {
              name: 'Level 6',
              marks: '18-20',
              looksLike:
                'An insightful, tightly argued answer that compares the extracts in every paragraph, with exact quotations built into the argument, close analysis of the writing and a subtle grasp of how context shapes each extract.',
            },
          ],
          avoid: [
            'Writing about each extract separately with no links between them.',
            'Bringing in other parts of your studied text: part (a) is about the two extracts only.',
            'Context as a block of facts that does not connect to the extracts or the question.',
            'Retelling what happens instead of commenting on it.',
          ],
          tip: 'Read the introduction above each extract first: it tells you the situation, which gives you context to compare from the start.',
          markerQuestionId: 'Section A (a)',
        },
        {
          label: 'Questions 1 to 6, part (b) (the same question as your part (a))',
          kind: 'Another moment in your studied text',
          marks: 20,
          objectives: [
            { id: 'AO1', marks: 10 },
            { id: 'AO2', marks: 10 },
          ],
          minutes: 30,
          task: 'Explore another moment in your studied text that fits the idea the question names. It must be a different moment from the part (a) extract, and you write from memory, because the paper is closed book.',
          rewards: [
            'A well-chosen moment that clearly fits the question, explored in detail.',
            'Your own view of the moment, backed by quotations or close references from memory.',
            'Analysis of how the writer uses language, form and structure at that moment, with subject terms. Response (AO1) and analysis (AO2) carry equal marks here.',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-3',
              looksLike:
                'A few relevant remarks with little reference to the text and little awareness of how it is written.',
            },
            {
              name: 'Level 2',
              marks: '4-6',
              looksLike:
                'A simple answer that begins to address the question, with some support from the text and simple comments on the writing.',
            },
            {
              name: 'Level 3',
              marks: '7-10',
              looksLike:
                "A fuller answer that shows understanding, with some relevant references or quotations and a reasonable explanation of the writer's choices, using some subject terms.",
            },
            {
              name: 'Level 4',
              marks: '11-14',
              looksLike:
                'A detailed, focused answer with a developing argument, relevant references and some real analysis of language, form and structure.',
            },
            {
              name: 'Level 5',
              marks: '15-17',
              looksLike:
                'A well-built, persuasive argument with well-suited quotations built in, and careful, detailed analysis that uses subject terms well.',
            },
            {
              name: 'Level 6',
              marks: '18-20',
              looksLike:
                'An insightful, tightly argued answer throughout, with exact quotations from memory and close, detailed analysis of how the writer creates meaning.',
            },
          ],
          avoid: [
            'Reusing the part (a) extract: an answer that discusses only that extract scores 0.',
            'Choosing a moment you cannot remember any details or words from.',
            'Narrating the plot around the moment instead of analysing it.',
          ],
          tip: 'Before the exam, learn a few short quotations for each key moment in your text, so you can pick the moment that fits part (b) best.',
          markerQuestionId: 'Section A (b)',
        },
      ],
    },
    {
      name: 'Section B: 19th century prose',
      marks: 40,
      about:
        'One essay on your studied 19th-century novel, from a choice of two questions (Questions 7 to 18, two for each set text).',
      questions: [
        {
          label: 'Questions 7 to 18 (answer one of the two on your text)',
          kind: '19th-century novel essay',
          marks: 40,
          objectives: [
            { id: 'AO1', marks: 14 },
            { id: 'AO2', marks: 14 },
            { id: 'AO3', marks: 8 },
            { id: 'AO4', marks: 4 },
          ],
          minutes: 45,
          task: 'Choose one of the two questions on your novel. One is extract-based: it prints a passage and asks about it and about elsewhere in the novel. The other is discursive (an essay question with no extract), asking you to range across the novel, using two or more moments. OCR marks AO1, AO2 and AO3 together on one grid out of 36, and spelling, punctuation and grammar (AO4) on a separate grid out of 4.',
          rewards: [
            'A clear argument that answers the exact question, with your own interpretation of the novel.',
            'Evidence from across the novel: beyond the extract in the extract-based question, and two or more moments in the discursive one.',
            "Analysis of the writer's language, form and structure, with subject terms.",
            "Context that matters to the question, such as the period's social or historical ideas or the conventions of a genre like the Gothic or science fiction, linked to your points.",
            'Accurate spelling, punctuation and grammar, with varied vocabulary and sentences (AO4, 4 marks).',
          ],
          levels: [
            {
              name: 'Level 1',
              marks: '1-6',
              looksLike:
                'A few relevant comments with little reference to the text, very little sense of how it is written, and context only hinted at.',
            },
            {
              name: 'Level 2',
              marks: '7-12',
              looksLike:
                'A simple answer that begins to address the question, with some support from the text, simple comments on the writing and some awareness of context.',
            },
            {
              name: 'Level 3',
              marks: '13-18',
              looksLike:
                "A fuller answer that shows understanding, with some relevant quotations, a reasonable explanation of the writer's methods and some relevant comments on context.",
            },
            {
              name: 'Level 4',
              marks: '19-24',
              looksLike:
                'A detailed answer with a developing argument, relevant quotations, some real analysis of language, form and structure, and a clear grasp of context that shapes the points.',
            },
            {
              name: 'Level 5',
              marks: '25-30',
              looksLike:
                'A well-built, persuasive argument with well-suited quotations built in, careful analysis that uses subject terms well, and context that informs the interpretation.',
            },
            {
              name: 'Level 6',
              marks: '31-36',
              looksLike:
                'An insightful essay argued tightly from start to finish, with exact quotations, close and detailed analysis of language, form and structure, and a subtle understanding of how context shapes meaning.',
            },
            {
              name: 'AO4: Threshold performance',
              marks: '1',
              looksLike:
                'Mostly accurate spelling and punctuation and some variety in words and sentences. Errors do not get in the way of the meaning.',
            },
            {
              name: 'AO4: Intermediate performance',
              marks: '2-3',
              looksLike:
                'Spelling and punctuation are largely accurate, and the vocabulary and sentences are varied enough to keep the meaning generally clear and controlled.',
            },
            {
              name: 'AO4: High performance',
              marks: '4',
              looksLike:
                'Spelling and punctuation are accurate throughout, and well-chosen vocabulary and varied sentences keep the meaning precise and fully under control.',
            },
          ],
          avoid: [
            'Staying inside the printed extract: OCR caps that at Level 3, and a passing mention of the rest of the novel is not enough (OCR capped that at Level 4 in June 2023).',
            'In the discursive question, writing about only one moment: also capped at Level 3, and a brief second moment was capped at Level 4 in June 2023.',
            'Context as a block of history with no link to the question.',
            'Retelling the plot instead of analysing it.',
          ],
          tip: 'Plan four or five paragraphs, each pairing a moment from the novel with a point that answers the question. For the extract question, start in the extract, then move out to the rest of the novel.',
          markerQuestionId: 'Section B',
        },
      ],
    },
  ],
  timing: [
    "OCR's advice printed on the paper: about 45 minutes on part (a), about 30 minutes on part (b) and about 45 minutes on Section B.",
    'Part (a), as a suggestion: spend the first 10 minutes reading both extracts and noting links before you write.',
    'Section B, as a suggestion: about 5 minutes choosing your question and planning, about 35 minutes writing and 5 minutes checking spelling and punctuation.',
  ],
  checklist: [
    'Part (a) compares the two extracts throughout and stays with the extracts.',
    'Part (b) is about a different moment from the extract, in the same text.',
    'Your Section B essay goes beyond the extract, or covers two or more moments in the discursive question.',
    'Context is tied to the question, not added as a separate block.',
    'Spelling, punctuation and grammar checked in Section B, where they earn 4 marks.',
  ],
}
