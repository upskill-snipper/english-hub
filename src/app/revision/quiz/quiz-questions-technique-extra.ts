// ─── Extra Exam-Technique questions (100) ──────────────────────────────────
// Covers timing, mark allocations, essay structure, quote integration,
// AO recognition, and board-specific rules for GCSE English Lang & Lit.

import type { QuizQuestion } from './quiz-data'

export const techniqueExtraQuestions: QuizQuestion[] = [
  // ─── TIMING (20) ─────────────────────────────────────────────────────────
  {
    id: 'technique-extra-001',
    topic: 'exam-technique',
    question:
      'AQA English Language Paper 1 lasts 1 hour 45 minutes. Roughly how long should you spend on Question 5 (the writing task)?',
    options: ['25 minutes', '35 minutes', '45 minutes', '60 minutes'],
    correctIndex: 2,
    explanation:
      'Q5 is worth 40 marks (50% of the paper) so the recommended split is 45 minutes writing (including 5-10 mins planning), leaving ~60 minutes for the four reading questions.',
  },
  {
    id: 'technique-extra-002',
    topic: 'exam-technique',
    question:
      'On AQA English Language Paper 1, how long should you ideally spend on the 4-mark Question 1?',
    options: ['About 4-5 minutes', 'About 15 minutes', 'About 20 minutes', 'About 25 minutes'],
    correctIndex: 0,
    explanation:
      'A rough rule of thumb is 1 minute per mark plus brief reading. Q1 is only 4 marks (list 4 things), so 4-5 minutes is plenty - do not waste time here.',
  },
  {
    id: 'technique-extra-003',
    topic: 'exam-technique',
    question: 'AQA Language Paper 1 Question 4 is worth 20 marks. How long should you spend on it?',
    options: ['10 minutes', '15 minutes', '22-25 minutes', '40 minutes'],
    correctIndex: 2,
    explanation:
      'At roughly 1 minute per mark, plus a few minutes for re-reading and planning, 22-25 minutes is sensible for Q4 (the evaluation question).',
  },
  {
    id: 'technique-extra-004',
    topic: 'exam-technique',
    question:
      'AQA English Language Paper 2 lasts 1 hour 45 minutes. How long should you spend reading the two non-fiction sources before answering?',
    options: [
      'No reading time - start immediately',
      'About 15 minutes',
      'About 30 minutes',
      'About 45 minutes',
    ],
    correctIndex: 1,
    explanation:
      'Around 15 minutes of careful reading and annotation of both sources is recommended before answering, leaving ~45 minutes for Section A and 45 minutes for Section B (Q5).',
  },
  {
    id: 'technique-extra-005',
    topic: 'exam-technique',
    question: 'The AQA Literature Paper 1 (Shakespeare and 19th-century novel) lasts how long?',
    options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '2 hours 15 minutes'],
    correctIndex: 1,
    explanation:
      'AQA Literature Paper 1 is 1 hour 45 minutes - typically split ~55 minutes on the Shakespeare question and ~50 minutes on the 19th-century novel question.',
  },
  {
    id: 'technique-extra-006',
    topic: 'exam-technique',
    question: 'AQA Literature Paper 2 (Modern texts, Poetry, Unseen) lasts how long?',
    options: ['1 hour 45 minutes', '2 hours', '2 hours 15 minutes', '2 hours 30 minutes'],
    correctIndex: 2,
    explanation:
      'AQA Literature Paper 2 is 2 hours 15 minutes, covering Section A modern text (45 mins), Section B anthology poetry (45 mins) and Section C unseen poetry (45 mins).',
  },
  {
    id: 'technique-extra-007',
    topic: 'exam-technique',
    question:
      'On AQA Lit Paper 2, how long should you typically spend on the unseen poetry comparison (Q27.2)?',
    options: ['About 10 minutes', 'About 20 minutes', 'About 30 minutes', 'About 45 minutes'],
    correctIndex: 1,
    explanation:
      'Section C is 45 minutes total: roughly 25-30 minutes on the first unseen (24 marks) and 15-20 minutes on the comparison (8 marks), since the second question is worth far fewer marks.',
  },
  {
    id: 'technique-extra-008',
    topic: 'exam-technique',
    question: 'How long should you spend planning a 30-mark essay response in GCSE Literature?',
    options: ["Don't plan at all", '2 minutes maximum', '5-10 minutes', 'Half the available time'],
    correctIndex: 2,
    explanation:
      '5-10 minutes spent planning a thesis, choosing quotations and sketching paragraph order pays off enormously - examiners consistently note that unplanned essays drift and lose AO1.',
  },
  {
    id: 'technique-extra-009',
    topic: 'exam-technique',
    question:
      'You have 45 minutes for an AQA Lit modern text question worth 30 + 4 SPaG. How long should you leave for checking?',
    options: ["Don't check - keep writing", '2-3 minutes', '15 minutes', '20 minutes'],
    correctIndex: 1,
    explanation:
      'A 2-3 minute final check is wise because the SPaG mark (4 on AQA Lit) rewards accurate spelling, punctuation and ambitious vocabulary - easy marks if you proofread.',
  },
  {
    id: 'technique-extra-010',
    topic: 'exam-technique',
    question: 'Edexcel English Language Paper 1 lasts how long?',
    options: ['1 hour', '1 hour 45 minutes', '2 hours', '2 hours 15 minutes'],
    correctIndex: 1,
    explanation:
      'Edexcel GCSE English Language Paper 1 (Fiction and Imaginative Writing) is 1 hour 45 minutes, split between reading (Section A, ~45 mins) and a transactional/imaginative writing task (Section B, ~45 mins).',
  },
  {
    id: 'technique-extra-011',
    topic: 'exam-technique',
    question: 'Eduqas English Language Component 1 lasts how long?',
    options: ['1 hour', '1 hour 45 minutes', '2 hours', '2 hours 30 minutes'],
    correctIndex: 1,
    explanation:
      'Eduqas Component 1 (20th-century literature reading and creative prose writing) is 1 hour 45 minutes - 1 hour reading, 45 minutes writing.',
  },
  {
    id: 'technique-extra-012',
    topic: 'exam-technique',
    question:
      'Roughly how many minutes per mark is a useful timing rule of thumb in GCSE English exams?',
    options: [
      '30 seconds per mark',
      '1 minute per mark',
      '2 minutes per mark',
      '5 minutes per mark',
    ],
    correctIndex: 1,
    explanation:
      'A rough 1-minute-per-mark rule helps you allocate time fairly. Adjust for reading time: writing tasks usually need slightly more, short reading questions slightly less.',
  },
  {
    id: 'technique-extra-013',
    topic: 'exam-technique',
    question: "You've overrun on Q3 of AQA Lang Paper 1 by 10 minutes. The best response is:",
    options: [
      'Skip Q4 entirely to save time',
      'Move on now and stick to remaining time slots even if responses are shorter',
      'Carry on overrunning until Q4 is finished',
      'Cut Q5 (the writing task) by half',
    ],
    correctIndex: 1,
    explanation:
      'Cutting your losses and moving on protects easier marks elsewhere. Q5 alone is worth 40 marks, so never sacrifice it. Better to write a shorter Q4 answer than to abandon Q5.',
  },
  {
    id: 'technique-extra-014',
    topic: 'exam-technique',
    question:
      'On the AQA Lit anthology poetry comparison (Section B, 30 marks), how long should you spend?',
    options: ['20 minutes', '35 minutes', '45 minutes', '70 minutes'],
    correctIndex: 2,
    explanation:
      'Section B of AQA Lit Paper 2 is allocated 45 minutes - including time to choose your second poem, plan a comparative thesis and write 4-5 comparative paragraphs.',
  },
  {
    id: 'technique-extra-015',
    topic: 'exam-technique',
    question:
      'OCR English Literature Paper 1 (Exploring modern and literary heritage texts) lasts how long?',
    options: ['1 hour', '1 hour 30 minutes', '2 hours', '2 hours 30 minutes'],
    correctIndex: 2,
    explanation:
      'OCR J352 Paper 1 is 2 hours, covering modern prose/drama and 19th-century prose with extract-based questions.',
  },
  {
    id: 'technique-extra-016',
    topic: 'exam-technique',
    question:
      'You have 45 minutes for a 40-mark Section B writing task. Roughly how should you split this?',
    options: [
      '0 mins plan, 45 mins write, 0 mins check',
      '5 mins plan, 35 mins write, 5 mins check',
      '20 mins plan, 25 mins write, 0 mins check',
      '5 mins plan, 5 mins write, 35 mins check',
    ],
    correctIndex: 1,
    explanation:
      'Roughly 5-10 mins planning, 30-35 mins drafting and 2-5 mins proofreading is the standard balance - leaves time to fix SPaG slips, the easiest marks to lose.',
  },
  {
    id: 'technique-extra-017',
    topic: 'exam-technique',
    question:
      'AQA Lit Paper 1 Section A (Shakespeare) is worth 30 + 4 SPaG. What is a sensible time allocation?',
    options: ['25 minutes', '40 minutes', '50-55 minutes', '75 minutes'],
    correctIndex: 2,
    explanation:
      'Of the 1h 45m paper, ~50-55 minutes for Shakespeare and ~50 minutes for the 19th-century novel is the standard split. Both questions are worth roughly the same.',
  },
  {
    id: 'technique-extra-018',
    topic: 'exam-technique',
    question:
      'How long is the AQA Lit Paper 2 Section A (modern text) question worth 30 + 4 SPaG typically allotted?',
    options: ['25 minutes', '45 minutes', '60 minutes', '75 minutes'],
    correctIndex: 1,
    explanation:
      'Each of the three sections of AQA Lit Paper 2 is roughly 45 minutes long - Section A (modern text) is one of those equal slots.',
  },
  {
    id: 'technique-extra-019',
    topic: 'exam-technique',
    question: 'On AQA Language Paper 1 Q2 (8 marks, language analysis), how long should you spend?',
    options: ['About 3 minutes', 'About 10 minutes', 'About 20 minutes', 'About 30 minutes'],
    correctIndex: 1,
    explanation:
      'At ~1 minute per mark plus a little re-reading, around 10 minutes is appropriate for the 8-mark language question.',
  },
  {
    id: 'technique-extra-020',
    topic: 'exam-technique',
    question: 'Best practice for reading a Lit extract before writing:',
    options: [
      'Read the extract once quickly and start writing',
      'Read the question first, then read the extract twice (once for sense, once annotating against the question)',
      'Skip the extract - answer from memory of the whole text',
      'Annotate every word for at least 20 minutes',
    ],
    correctIndex: 1,
    explanation:
      'Reading the question first focuses your annotation. A quick read for sense followed by a targeted second read for evidence keeps you efficient and on-topic.',
  },

  // ─── MARK ALLOCATIONS (20) ───────────────────────────────────────────────
  {
    id: 'technique-extra-021',
    topic: 'exam-technique',
    question:
      'On AQA Literature Paper 1, how many marks is the Macbeth (or other Shakespeare) extract-plus-whole-play question worth?',
    options: ['20 marks', '24 marks', '30 marks plus 4 SPaG (34 total)', '40 marks'],
    correctIndex: 2,
    explanation:
      'The Shakespeare question on AQA Lit Paper 1 is worth 30 marks for the response plus 4 marks for SPaG, giving 34 in total.',
  },
  {
    id: 'technique-extra-022',
    topic: 'exam-technique',
    question: 'How many marks is AQA Language Paper 1 Question 5 (the writing task) worth?',
    options: ['24 marks', '30 marks', '40 marks (24 content + 16 technical accuracy)', '50 marks'],
    correctIndex: 2,
    explanation:
      'Q5 is worth 40 marks: 24 for content and organisation, 16 for technical accuracy (SPaG, sentence variety, vocabulary).',
  },
  {
    id: 'technique-extra-023',
    topic: 'exam-technique',
    question: 'How many marks is AQA Language Paper 1 Question 1 worth?',
    options: ['4 marks', '8 marks', '10 marks', '20 marks'],
    correctIndex: 0,
    explanation:
      'Q1 asks you to list four things from a specified part of the source - 1 mark each, 4 in total. It should take only a few minutes.',
  },
  {
    id: 'technique-extra-024',
    topic: 'exam-technique',
    question: 'On AQA Lang Paper 1 the four reading questions add up to how many marks?',
    options: ['30 marks', '40 marks', '50 marks', '60 marks'],
    correctIndex: 1,
    explanation:
      'Section A reading: Q1 (4) + Q2 (8) + Q3 (8) + Q4 (20) = 40 marks. Section B (Q5) is worth another 40, totalling 80.',
  },
  {
    id: 'technique-extra-025',
    topic: 'exam-technique',
    question: 'On AQA Lang Paper 2, the writing task (Q5) is worth how many marks?',
    options: ['20', '30', '40 (24 content + 16 TA)', '50'],
    correctIndex: 2,
    explanation:
      'As on Paper 1, Q5 on Paper 2 is worth 40 marks (24 for content/organisation and 16 for technical accuracy).',
  },
  {
    id: 'technique-extra-026',
    topic: 'exam-technique',
    question: 'AQA Lit Paper 2 Section A (modern text e.g. An Inspector Calls) is worth:',
    options: ['20 marks', '24 marks', '30 + 4 SPaG (34 total)', '40 marks'],
    correctIndex: 2,
    explanation:
      '30 marks for the response and 4 marks for SPaG. SPaG is awarded on Section A only, not on poetry sections.',
  },
  {
    id: 'technique-extra-027',
    topic: 'exam-technique',
    question: 'AQA Lit Paper 2 Section B (anthology poetry comparison) is worth:',
    options: ['15 marks', '20 marks', '30 marks (no SPaG)', '40 marks'],
    correctIndex: 2,
    explanation:
      "30 marks. SPaG is NOT separately credited on the poetry sections - only on Section A modern text and on Paper 1's two questions.",
  },
  {
    id: 'technique-extra-028',
    topic: 'exam-technique',
    question:
      'AQA Lit Paper 2 Section C unseen poetry: how are the marks split between the two questions?',
    options: ['16 + 16', '20 + 12', '24 + 8', '30 + 4'],
    correctIndex: 2,
    explanation:
      'Q27.1 (a single unseen poem) is worth 24 marks; Q27.2 (compare with a second unseen) is worth 8 marks.',
  },
  {
    id: 'technique-extra-029',
    topic: 'exam-technique',
    question: 'How many SPaG marks are awarded across the AQA Literature GCSE in total?',
    options: ['0 (SPaG is only on Lang)', '4', '8', '16'],
    correctIndex: 2,
    // VERIFIED: AQA Spec 8702 §4 (Scheme of Assessment), accessed 2026 - AO4 = 2.5% on Paper 1 + 2.5% on Paper 2 = 5% of 160 = 8 marks total. SPaG awarded ONLY on Section A of each paper (Shakespeare on P1; Modern text on P2). NOT on the 19th-c novel section, NOT on poetry sections.
    explanation:
      'AQA Lit awards 4 SPaG (AO4) marks on Paper 1 Section A (Shakespeare) and 4 SPaG marks on Paper 2 Section A (Modern Text) - 8 marks in total. SPaG is NOT credited on the 19th-century novel section, the anthology poetry, or the unseen poetry.',
  },
  {
    id: 'technique-extra-030',
    topic: 'exam-technique',
    question: 'On AQA Lang Paper 1, how is the 40-mark Q5 broken down?',
    options: [
      '40 for content, 0 for SPaG',
      '24 for content & organisation; 16 for technical accuracy',
      '30 for ideas; 10 for spelling',
      '20 for plot; 20 for characters',
    ],
    correctIndex: 1,
    explanation:
      '24 marks reward content, structure and audience awareness; 16 marks reward technical accuracy (sentence variety, punctuation, vocabulary, spelling).',
  },
  {
    id: 'technique-extra-031',
    topic: 'exam-technique',
    question: 'Edexcel English Language Paper 1 Section B (Imaginative writing) is worth:',
    options: ['20 marks', '30 marks', '40 marks', '60 marks'],
    correctIndex: 2,
    explanation:
      "Edexcel Lang Paper 1 Section B is 40 marks (24 content/structure + 16 SPaG/vocabulary), mirroring AQA's structure.",
  },
  {
    id: 'technique-extra-032',
    topic: 'exam-technique',
    question: 'Eduqas English Language Component 1 reading section is worth how many marks?',
    options: ['20', '30', '40', '60'],
    correctIndex: 2,
    explanation:
      'Eduqas Component 1 reading section is 40 marks across 5 questions; the writing section is also 40, totalling 80 for the component.',
  },
  {
    id: 'technique-extra-033',
    topic: 'exam-technique',
    question:
      'In AQA Lit, what is the maximum mark for a single Shakespeare extract-and-whole-play question (response + SPaG)?',
    options: ['24', '30', '34', '40'],
    correctIndex: 2,
    explanation: '30 marks for the response plus 4 SPaG = 34 marks maximum.',
  },
  {
    id: 'technique-extra-034',
    topic: 'exam-technique',
    question: 'AQA Lang Paper 1 Q3 (structure) is worth:',
    options: ['4 marks', '8 marks', '12 marks', '20 marks'],
    correctIndex: 1,
    explanation: 'Q3 on AQA Lang Paper 1 - the structural analysis question - is worth 8 marks.',
  },
  {
    id: 'technique-extra-035',
    topic: 'exam-technique',
    question: "AQA Lang Paper 2 Q4 (compare writers' methods/perspectives) is worth:",
    options: ['8 marks', '12 marks', '16 marks', '20 marks'],
    correctIndex: 2,
    explanation:
      "Q4 on AQA Lang Paper 2 is 16 marks - the demanding comparison question evaluating writers' methods and viewpoints across both sources.",
  },
  {
    id: 'technique-extra-036',
    topic: 'exam-technique',
    question: 'AQA Lang Paper 2 Q2 (summary/synthesis) is worth:',
    options: ['4 marks', '8 marks', '12 marks', '16 marks'],
    correctIndex: 1,
    explanation:
      'Q2 on AQA Lang Paper 2 is 8 marks - a summary using both sources, testing inference and synthesis (AO1).',
  },
  {
    id: 'technique-extra-037',
    topic: 'exam-technique',
    question: 'Across both AQA English Language papers, the total number of marks available is:',
    options: ['80', '100', '160', '200'],
    correctIndex: 2,
    explanation: 'Each paper is 80 marks (40 reading + 40 writing). Total across both = 160 marks.',
  },
  {
    id: 'technique-extra-038',
    topic: 'exam-technique',
    question:
      'Across both AQA English Literature papers, the total number of marks (response + SPaG) is:',
    options: ['96', '128', '160', '192'],
    correctIndex: 2,
    // VERIFIED: AQA Spec 8702 §4 (Scheme of Assessment), accessed 2026 - Paper 1 = 64 marks (60 response + 4 SPaG); Paper 2 = 96 marks (92 response + 4 SPaG). Total 160.
    explanation:
      'Paper 1: 60 response + 4 SPaG = 64 marks (Shakespeare 30+4, 19th-c novel 30). Paper 2: 92 response + 4 SPaG = 96 marks (Modern text 30+4, anthology 30, unseen 24+8). 64 + 96 = 160 marks.',
  },
  {
    id: 'technique-extra-039',
    topic: 'exam-technique',
    question: 'On AQA Lit Paper 1, the 19th-century novel question is worth:',
    options: ['20 marks', '24 marks', '30 marks (no SPaG)', '34 marks (30 + 4 SPaG)'],
    correctIndex: 2,
    // VERIFIED: AQA Spec 8702 §4, accessed 2026 - SPaG (AO4) is awarded on Section A only of Paper 1 (Shakespeare). Section B 19th-century novel = 30 marks, no SPaG.
    explanation:
      'The 19th-century novel question is worth 30 marks. SPaG (AO4) is only awarded on Paper 1 Section A (Shakespeare) and Paper 2 Section A (Modern text) - not on the 19th-c novel section.',
  },
  {
    id: 'technique-extra-040',
    topic: 'exam-technique',
    question: 'Of the 40 marks on AQA Lang Q5, how many are for technical accuracy?',
    options: ['8', '12', '16', '20'],
    correctIndex: 2,
    explanation:
      '16 marks reward technical accuracy: sentence demarcation, varied sentence forms, punctuation, vocabulary and spelling.',
  },

  // ─── ESSAY STRUCTURE (20) ────────────────────────────────────────────────
  {
    id: 'technique-extra-041',
    topic: 'exam-technique',
    question: 'What does PETAL stand for in literature essay paragraphs?',
    options: [
      'Plot, Evidence, Theme, Author, Language',
      'Point, Evidence, Technique, Analysis, Link',
      'Plan, Examine, Test, Analyse, Learn',
      'Paragraph, Effect, Thesis, Argument, Logic',
    ],
    correctIndex: 1,
    explanation:
      "PETAL = Point, Evidence, Technique, Analysis, Link. It extends PEEL by explicitly naming a technique to analyse, encouraging stronger AO2 (writer's methods).",
  },
  {
    id: 'technique-extra-042',
    topic: 'exam-technique',
    question: 'How does PETAL differ most clearly from PEEL?',
    options: [
      'PETAL has no evidence step',
      "PETAL adds an explicit 'Technique' step before analysis, foregrounding writer's methods",
      'PETAL is for Language papers only',
      "PETAL replaces the 'Point' with a question",
    ],
    correctIndex: 1,
    explanation:
      'PETAL inserts T (Technique) between Evidence and Analysis, making AO2 explicit. PEEL collapses these into one explanation step.',
  },
  {
    id: 'technique-extra-043',
    topic: 'exam-technique',
    question: 'In a thesis-led introduction, the thesis statement should:',
    options: [
      'Summarise the plot of the text',
      'Make an arguable, focused claim that answers the question and previews the line of argument',
      "Describe the writer's biography",
      'Define every term in the question',
    ],
    correctIndex: 1,
    explanation:
      'A strong thesis takes a clear, arguable position on the question and signals the direction of the argument. This frames the whole essay around AO1 and AO3.',
  },
  {
    id: 'technique-extra-044',
    topic: 'exam-technique',
    question: 'Which is the strongest opening sentence of a Lit essay on Macbeth?',
    options: [
      'Macbeth is a play by Shakespeare written around 1606.',
      'In this essay I will discuss ambition.',
      'Shakespeare presents ambition as a corrosive force that hollows out moral identity, a theme rooted in Jacobean anxieties about regicide.',
      'I really enjoyed reading Macbeth.',
    ],
    correctIndex: 2,
    explanation:
      'Option 3 is a thesis-led opener: it makes a critical argument and links to context (AO3), immediately signalling top-band thinking.',
  },
  {
    id: 'technique-extra-045',
    topic: 'exam-technique',
    question: 'A WHAT-HOW-WHY paragraph structure is most useful because it:',
    options: [
      'Avoids any need for quotations',
      'Forces students to move beyond identifying features (WHAT) into method (HOW) and effect/intent (WHY)',
      'Replaces the need for a thesis',
      'Limits answers to only three sentences',
    ],
    correctIndex: 1,
    explanation:
      "WHAT (point/feature) → HOW (method/technique, AO2) → WHY (effect on reader / writer's purpose / context, AO1+AO3) pushes thinking up the AO bands.",
  },
  {
    id: 'technique-extra-046',
    topic: 'exam-technique',
    question: 'A strong conclusion to a Lit essay should:',
    options: [
      'Introduce a brand-new quotation never seen before',
      'Repeat the introduction word-for-word',
      "Synthesise the argument, return to the thesis with added nuance, and (often) zoom out to writer's overall purpose / context",
      'Apologise for any weaknesses',
    ],
    correctIndex: 2,
    explanation:
      'Conclusions should crystallise the argument, not summarise the plot. A pivot to authorial purpose or wider context elevates AO1/AO3.',
  },
  {
    id: 'technique-extra-047',
    topic: 'exam-technique',
    question: 'Which of these is NOT a recommended conclusion strategy?',
    options: [
      "Zoom out to writer's purpose",
      'Return to thesis with added nuance',
      'Introduce a fresh, unexplored argument',
      'Reflect on contemporary relevance / context',
    ],
    correctIndex: 2,
    explanation:
      "New arguments belong in body paragraphs. The conclusion should consolidate, not open new lines you can't develop.",
  },
  {
    id: 'technique-extra-048',
    topic: 'exam-technique',
    question: 'A "tracking" essay structure works best when:',
    options: [
      'You list every quotation in the order they appear',
      'You trace how an idea/character develops across the text in chronological stages, linked by a thesis',
      'You ignore the question and write about your favourite scenes',
      'You only quote from the first chapter',
    ],
    correctIndex: 1,
    explanation:
      "Tracking is effective for character or theme questions: trace development (e.g. Macbeth's deteriorating moral state) Act by Act, with each paragraph adding to a unified argument.",
  },
  {
    id: 'technique-extra-049',
    topic: 'exam-technique',
    question: 'A "thematic" or conceptual essay structure does what?',
    options: [
      'Organises paragraphs around different aspects of one big idea (the thesis), rather than chronologically',
      'Lists themes alphabetically',
      'Avoids using any quotations',
      'Only works for poetry',
    ],
    correctIndex: 0,
    explanation:
      "Conceptual structures (e.g. 'Macbeth as victim' / 'Macbeth as agent' / 'Macbeth as warning') can score higher than chronological ones because they showcase a sustained argument.",
  },
  {
    id: 'technique-extra-050',
    topic: 'exam-technique',
    question: 'On the AQA Lit anthology comparison, the strongest paragraph structure is:',
    options: [
      'Write all about Poem A then all about Poem B',
      "Compare/contrast within each paragraph using connectives like 'similarly', 'however', 'whereas'",
      'Quote without analysis',
      'List every device in each poem',
    ],
    correctIndex: 1,
    explanation:
      'Integrated comparison (point about both poems within the same paragraph) scores far higher than block-by-block writing because it sustains AO2 comparison throughout.',
  },
  {
    id: 'technique-extra-051',
    topic: 'exam-technique',
    question: 'Which sequence reflects an effective thesis-led essay?',
    options: [
      'Plot summary → quotes → vague conclusion',
      'Thesis intro → 3-4 argument-driven body paragraphs each with embedded evidence and analysis → conclusion that returns to thesis',
      'Random paragraphs → no introduction → multiple conclusions',
      'Long introduction → no body → long conclusion',
    ],
    correctIndex: 1,
    explanation:
      'The thesis-led essay opens with a clear argument, develops it through purposeful paragraphs, and consolidates it in the conclusion.',
  },
  {
    id: 'technique-extra-052',
    topic: 'exam-technique',
    question: 'A common weakness in PEEL paragraphs is:',
    options: [
      'Too much analysis',
      'Spending too long on Point and Evidence and not enough on Explanation/effect (AO2)',
      'Always linking back to the question',
      'Embedding short quotations',
    ],
    correctIndex: 1,
    explanation:
      "Examiners frequently report that students stop at 'identifying' devices. Pushing the Explanation step (HOW and WHY) is what separates Grade 5 from Grade 7+.",
  },
  {
    id: 'technique-extra-053',
    topic: 'exam-technique',
    question: 'A "zoom-in" or "drilling-down" technique within a paragraph involves:',
    options: [
      'Using a microscope on the page',
      'Moving from a broader observation to the precise effect of a single word, syllable or punctuation choice',
      'Writing in a smaller font',
      'Avoiding quotations',
    ],
    correctIndex: 1,
    explanation:
      'Top-band analysis often zooms from a whole-line/quote level down to the connotations of a single word, showing close reading and AO2 mastery.',
  },
  {
    id: 'technique-extra-054',
    topic: 'exam-technique',
    question: 'Which best signals a sophisticated, conceptualised argument?',
    options: [
      '"In this paragraph I will talk about..."',
      '"Crucially, Shakespeare suggests..." / "Arguably, the duality presented..."',
      '"Firstly, secondly, thirdly..."',
      '"The writer used a metaphor."',
    ],
    correctIndex: 1,
    explanation:
      'Tentative, evaluative discourse markers (arguably, crucially, this could be read as) signal critical thinking and meet the top-band AO1 descriptor.',
  },
  {
    id: 'technique-extra-055',
    topic: 'exam-technique',
    question: 'The "single-paragraph" or "topic sentence" rule says:',
    options: [
      'Each paragraph should make one main point clearly stated in its first sentence',
      'You should only write one paragraph in total',
      'Topic sentences should be in the conclusion',
      'Paragraphs are optional',
    ],
    correctIndex: 0,
    explanation:
      'A clear topic sentence at the start of every body paragraph keeps your argument focused and helps examiners follow your line of reasoning (AO1).',
  },
  {
    id: 'technique-extra-056',
    topic: 'exam-technique',
    question: "Which is the best example of a focused topic sentence on Macbeth's ambition?",
    options: [
      'Macbeth has lots of feelings.',
      'In Act 1 Macbeth is brave.',
      "Shakespeare initially frames Macbeth's ambition as a noble martial drive, before reframing it as a self-consuming sin.",
      'Macbeth and Lady Macbeth are married.',
    ],
    correctIndex: 2,
    explanation:
      "Option 3 advances a precise, arguable point about authorial method and is grounded in the play's structure - a hallmark of Grade 8/9 writing.",
  },
  {
    id: 'technique-extra-057',
    topic: 'exam-technique',
    question: 'Linking sentences ("connectives") between paragraphs help to:',
    options: [
      'Pad out word count',
      "Show development of argument (e.g. 'Building on this idea...', 'In contrast...')",
      'Repeat the question',
      'Introduce new texts',
    ],
    correctIndex: 1,
    explanation:
      'Discourse connectives demonstrate that paragraphs are part of a single argument, not isolated points - boosting AO1 (cohesion).',
  },
  {
    id: 'technique-extra-058',
    topic: 'exam-technique',
    question: 'On a Lit extract question (e.g. AQA Macbeth), best practice is:',
    options: [
      'Ignore the extract; write only about the rest of the play',
      'Stay only within the extract; never reference the wider play',
      'Use the extract as your starting point and then move outwards to relevant moments across the whole play',
      'Quote every line of the extract',
    ],
    correctIndex: 2,
    explanation:
      'AQA explicitly rewards moving from the extract to the wider play. A strong response anchors in the extract, then traces how the idea develops elsewhere.',
  },
  {
    id: 'technique-extra-059',
    topic: 'exam-technique',
    question: 'Which is the better way to deploy context (AO3) in a paragraph?',
    options: [
      "A separate 'context paragraph' with no analysis",
      "Bolted-on facts at the end like 'Also, this was the Jacobean era'",
      "Woven into analysis to illuminate meaning, e.g. linking Macbeth's regicide to Jacobean anxieties about divine right",
      'Avoid context entirely',
    ],
    correctIndex: 2,
    explanation:
      'AO3 should support analysis, not sit alongside it. Integrated context - used to deepen meaning - meets the highest band descriptors.',
  },
  {
    id: 'technique-extra-060',
    topic: 'exam-technique',
    question: 'A useful planning technique for a 30-mark essay is:',
    options: [
      'Write five paragraphs in random order',
      'A spider diagram or 3-bullet plan: thesis + 3 argument points + key quotes for each',
      'Write the conclusion first then improvise',
      'Skip planning to maximise writing time',
    ],
    correctIndex: 1,
    explanation:
      'A 3-point plan with a thesis and key quotations gives structural clarity, prevents drift and saves time overall.',
  },

  // ─── QUOTE INTEGRATION (15) ──────────────────────────────────────────────
  {
    id: 'technique-extra-061',
    topic: 'exam-technique',
    question: 'The single most important rule when integrating a quotation is:',
    options: [
      'Quote at least one full sentence each time',
      'Embed short, well-chosen quotations that fit the grammar of your sentence',
      "Always introduce a quote with 'This quote shows...'",
      'Quote without quotation marks',
    ],
    correctIndex: 1,
    explanation:
      'Short, embedded quotations (a word or phrase) keep analysis precise and demonstrate close reading. Long block quotes waste time and dilute analysis.',
  },
  {
    id: 'technique-extra-062',
    topic: 'exam-technique',
    question:
      'How do you signal that you have shortened a quotation by removing words in the middle?',
    options: ['A semi-colon ;', 'An ellipsis (...)', 'A dash -', 'Curly brackets { }'],
    correctIndex: 1,
    explanation:
      'An ellipsis (three dots) indicates omitted text in the middle of a quotation, e.g. "Out, out... candle".',
  },
  {
    id: 'technique-extra-063',
    topic: 'exam-technique',
    question: 'Square brackets [ ] inside a quotation are used to:',
    options: [
      'Show your own added word(s) for grammatical clarity or to alter a pronoun/tense',
      'Show that the quotation is from poetry',
      "Hide a quotation you don't like",
      'Indicate a stage direction',
    ],
    correctIndex: 0,
    explanation:
      'Square brackets show editorial additions, e.g. "[Macbeth] is too full o\' the milk of human kindness" - clarifying who is being referred to.',
  },
  {
    id: 'technique-extra-064',
    topic: 'exam-technique',
    question: 'Which is the best embedded quotation?',
    options: [
      '"This quote shows ambition: \'I have no spur to prick the sides of my intent, but only vaulting ambition\'."',
      'Shakespeare describes Macbeth\'s "vaulting ambition", an image of a rider over-leaping the saddle and falling.',
      'The quote is "vaulting ambition".',
      'Macbeth says he has ambition, this is a quote.',
    ],
    correctIndex: 1,
    explanation:
      'Option 2 embeds a short phrase grammatically into the sentence and immediately analyses the image - concise and analytical.',
  },
  {
    id: 'technique-extra-065',
    topic: 'exam-technique',
    question:
      "If you've forgotten the exact wording of a quote in a closed-book exam, the best strategy is:",
    options: [
      'Make up a convincing-looking fake quotation in inverted commas',
      'Paraphrase or reference the moment without quotation marks (e.g. "when Macbeth speaks of his \'vaulting\' desire to take the throne")',
      'Skip the point entirely',
      'Leave a blank space and come back to it',
    ],
    correctIndex: 1,
    explanation:
      'Examiners do credit accurate textual reference even without quote marks. Faking a quotation risks being penalised; paraphrase honestly and analyse the moment.',
  },
  {
    id: 'technique-extra-066',
    topic: 'exam-technique',
    question: 'When quoting poetry across a line break, you should:',
    options: [
      'Ignore the line break',
      'Use a forward slash to mark the break, e.g. "Season of mists / and mellow fruitfulness"',
      'Use square brackets',
      'Use an ellipsis',
    ],
    correctIndex: 1,
    explanation:
      'A single forward slash ( / ) marks a line break in run-on poetry quotations. Use a double slash // for stanza breaks.',
  },
  {
    id: 'technique-extra-067',
    topic: 'exam-technique',
    question: 'Which quotation is best for tight analysis?',
    options: [
      'A 30-word quotation copied verbatim with no analysis',
      'A 1-4 word quotation chosen for a specific feature (e.g. "vaulting") that you can drill into',
      'No quotation, just paraphrase',
      'A made-up quotation',
    ],
    correctIndex: 1,
    explanation:
      'Tight, focused quotations (often a single image or word) allow you to zoom into language and methods (AO2) - the hallmark of top-band analysis.',
  },
  {
    id: 'technique-extra-068',
    topic: 'exam-technique',
    question:
      'When you alter the tense of a verb inside a quotation to fit your sentence, you should:',
    options: [
      'Just change it silently',
      'Place the changed letters in square brackets, e.g. "Macbeth \'cannot but remember\' [remembers] Duncan"',
      'Add an asterisk',
      'Use bold',
    ],
    correctIndex: 1,
    explanation:
      'Square brackets signal any editorial change to a quotation, including tense or pronoun adjustments - preserves accuracy and clarity.',
  },
  {
    id: 'technique-extra-069',
    topic: 'exam-technique',
    question: '"Quote-sandwich" structure means:',
    options: [
      'Eating between paragraphs',
      'Introducing the quote in your own words, presenting it, then analysing it',
      'Quoting two things at once',
      'Replacing the quote with food imagery',
    ],
    correctIndex: 1,
    explanation:
      'Set-up → quotation → analysis. The quote should never sit alone - always frame and analyse it.',
  },
  {
    id: 'technique-extra-070',
    topic: 'exam-technique',
    question: 'Which quote integration is grammatically correct?',
    options: [
      'Macbeth thinks. "I have no spur".',
      'Macbeth admits he has "no spur" to drive him to murder.',
      'Macbeth: I have no spur.',
      '"I have no spur" Macbeth.',
    ],
    correctIndex: 1,
    explanation:
      "Embedding the phrase 'no spur' grammatically into your own sentence keeps the sentence flowing while allowing close analysis.",
  },
  {
    id: 'technique-extra-071',
    topic: 'exam-technique',
    question: 'Examiners reward "judicious" use of quotation, which means:',
    options: [
      'As many quotations as possible',
      'Carefully chosen, well-suited quotations that illustrate the precise point',
      'Long, dramatic block quotations',
      'Quoting the title repeatedly',
    ],
    correctIndex: 1,
    explanation:
      '"Judicious" appears in mark scheme top-band descriptors and means well-chosen and apt - quality over quantity.',
  },
  {
    id: 'technique-extra-072',
    topic: 'exam-technique',
    question: 'In an open-book exam (e.g. Eduqas Lit poetry), how should you use the text?',
    options: [
      'Copy out long sections to fill space',
      'Use it to retrieve precise short quotations and verify spellings, but spend most of your time analysing',
      'Avoid the book - examiners prefer answers from memory',
      'Quote whole stanzas',
    ],
    correctIndex: 1,
    explanation:
      'Open-book is a tool for accuracy, not a crutch. Top responses still embed precisely chosen, short quotations and analyse them.',
  },
  {
    id: 'technique-extra-073',
    topic: 'exam-technique',
    question:
      'You half-remember a quote as "milk of human kindness" but think it might be "milk of mercy". The safest move is:',
    options: [
      "Write 'milk of mercy' confidently in quote marks",
      'Refer to the moment generally - "Lady Macbeth fears her husband\'s milky compassion" - and analyse the metaphor',
      "Don't use it at all",
      'Make up a different quote',
    ],
    correctIndex: 1,
    explanation:
      'A clear textual reference plus analysis of the image will be credited; an incorrect quotation in inverted commas can lose credibility.',
  },
  {
    id: 'technique-extra-074',
    topic: 'exam-technique',
    question: 'A "spotlight" quotation is:',
    options: [
      'A quotation written in highlighter pen',
      'A short, vivid quotation chosen for its richness - one you can analyse from multiple angles',
      'A very long quotation',
      'A quotation about lighting',
    ],
    correctIndex: 1,
    explanation:
      'Spotlight quotations earn their keep by yielding multiple analytical angles (image, sound, structure, context). A few well-chosen spotlight quotes per text are worth more than dozens of short factual ones.',
  },
  {
    id: 'technique-extra-075',
    topic: 'exam-technique',
    question: 'Which mark scheme phrase rewards strong quotation use?',
    options: [
      '"Frequent and lengthy quotations"',
      '"Judicious use of subject terminology / textual references"',
      '"Quotations from outside the text"',
      '"Avoidance of quotations"',
    ],
    correctIndex: 1,
    explanation:
      'AQA and Eduqas top-band descriptors reward "judicious" or "well-chosen" textual references - concise and well-targeted.',
  },

  // ─── AO RECOGNITION (15) ─────────────────────────────────────────────────
  {
    id: 'technique-extra-076',
    topic: 'exam-technique',
    question:
      'In GCSE English Literature, which Assessment Objective rewards understanding of contextual factors (e.g. Jacobean kingship, Victorian class)?',
    options: ['AO1', 'AO2', 'AO3', 'AO4'],
    correctIndex: 2,
    explanation:
      'AO3: "Show understanding of the relationships between texts and the contexts in which they were written." Context goes here in Lit.',
  },
  {
    id: 'technique-extra-077',
    topic: 'exam-technique',
    question:
      "In GCSE English Literature, which AO assesses analysis of the writer's methods (language, structure, form)?",
    options: ['AO1', 'AO2', 'AO3', 'AO4'],
    correctIndex: 1,
    explanation:
      'AO2: "Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate."',
  },
  {
    id: 'technique-extra-078',
    topic: 'exam-technique',
    question: 'In GCSE English Literature, what does AO1 reward?',
    options: [
      'Spelling and punctuation only',
      'Reading, understanding and responding to texts; using textual references including quotations to support and illustrate interpretations',
      "Knowledge of the author's biography",
      'Comparing texts only',
    ],
    correctIndex: 1,
    explanation:
      'AO1 rewards a personal, well-supported response with apt textual references - your interpretation and the evidence you use to back it up.',
  },
  {
    id: 'technique-extra-079',
    topic: 'exam-technique',
    question: 'In GCSE English Literature, what does AO4 cover?',
    options: [
      'Comparison of poems in the anthology',
      'Use of a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation (the SPaG-style mark)',
      'Context only',
      "Writer's methods",
    ],
    correctIndex: 1,
    explanation:
      "AO4 in Lit covers technical accuracy of writing - assessed only on certain questions (e.g. AQA awards 4 SPaG marks per relevant question, separate from the response's 30 marks).",
  },
  {
    id: 'technique-extra-080',
    topic: 'exam-technique',
    question: 'How many Assessment Objectives are there in GCSE English Literature?',
    options: ['3', '4', '5', '6'],
    correctIndex: 1,
    explanation:
      'GCSE Literature has 4 AOs (AO1 response, AO2 methods, AO3 context, AO4 written accuracy). It is GCSE Language that has more.',
  },
  {
    id: 'technique-extra-081',
    topic: 'exam-technique',
    question: 'How many Assessment Objectives are there in GCSE English Language?',
    options: ['4', '5', '6', '7'],
    correctIndex: 2,
    explanation: 'GCSE Language has 6 AOs. Reading: AO1, AO2, AO3, AO4. Writing: AO5, AO6.',
  },
  {
    id: 'technique-extra-082',
    topic: 'exam-technique',
    question: 'In GCSE English Language, AO6 assesses:',
    options: [
      'Understanding of context',
      'Use of vocabulary and sentence structures for effect, with accurate spelling and punctuation (SPaG)',
      "Comparison of writers' viewpoints",
      'Reading inference',
    ],
    correctIndex: 1,
    explanation:
      'AO6 covers technical accuracy in writing tasks - analogous to (but separate from) AO4 in Literature.',
  },
  {
    id: 'technique-extra-083',
    topic: 'exam-technique',
    question: 'In GCSE English Language, AO5 assesses:',
    options: [
      'Communicating clearly, effectively and imaginatively, adapting tone, style and register; organising ideas using structural and grammatical features',
      'Spelling and punctuation only',
      'Comparison of two sources',
      'Inference and deduction',
    ],
    correctIndex: 0,
    explanation:
      'AO5 is the content-and-organisation half of writing tasks: ideas, audience, purpose, structure. AO6 is the technical accuracy half.',
  },
  {
    id: 'technique-extra-084',
    topic: 'exam-technique',
    question: 'In GCSE English Language, AO2 assesses:',
    options: [
      'Identifying and interpreting explicit and implicit information',
      'Explaining, commenting on and analysing how writers use language and structure to achieve effects, using relevant subject terminology',
      "Comparing writers' ideas across texts",
      'Evaluating texts critically',
    ],
    correctIndex: 1,
    explanation:
      'Lang AO2 is the language/structure analysis objective - the bulk of marks on AQA Lang Paper 1 Q2 and Q3.',
  },
  {
    id: 'technique-extra-085',
    topic: 'exam-technique',
    question:
      "AQA Language Paper 2 Question 4 (compare writers' methods/perspectives) primarily targets which AO(s)?",
    options: ['AO1', 'AO2', 'AO3', 'AO4'],
    correctIndex: 2,
    explanation:
      'Lang AO3: "Compare writers\' ideas and perspectives, as well as how these are conveyed, across two or more texts." Q4 on Lang Paper 2 is the AO3 question.',
  },
  {
    id: 'technique-extra-086',
    topic: 'exam-technique',
    question: 'AQA Lang Paper 1 Question 4 (the "evaluation" question) primarily targets which AO?',
    options: ['AO1', 'AO2', 'AO3', 'AO4'],
    correctIndex: 3,
    explanation:
      'Lang AO4: "Evaluate texts critically and support this with appropriate textual references." Q4 on Lang Paper 1 is the AO4 evaluation question. (Note: this is Lang AO4, not Lit AO4!)',
  },
  {
    id: 'technique-extra-087',
    topic: 'exam-technique',
    question:
      "A student writes about Priestley's socialist beliefs and the welfare state in An Inspector Calls. Which AO does this hit?",
    options: ['AO1', 'AO2', 'AO3', 'AO4'],
    correctIndex: 2,
    explanation: 'Authorial purpose and historical/social context = AO3 in Literature.',
  },
  {
    id: 'technique-extra-088',
    topic: 'exam-technique',
    question:
      'A student notices that Macbeth is written largely in iambic pentameter but the witches speak in trochaic tetrameter. Which AO does this hit?',
    options: ['AO1', 'AO2', 'AO3', 'AO4'],
    correctIndex: 1,
    explanation:
      "Form and structural choices (and their effects) sit under AO2 in Literature - the writer's methods.",
  },
  {
    id: 'technique-extra-089',
    topic: 'exam-technique',
    question:
      'A student supports an interpretation of Sheila Birling with three apt short quotations and a clear personal argument. Which AO does this primarily hit?',
    options: ['AO1', 'AO2', 'AO3', 'AO4'],
    correctIndex: 0,
    explanation:
      'AO1 rewards a clear, well-supported personal response using textual references including quotations.',
  },
  {
    id: 'technique-extra-090',
    topic: 'exam-technique',
    question: 'In AQA Lit, the 4 SPaG marks attached to certain questions are formally:',
    options: [
      'Part of the 30-mark response',
      'A separate AO4 mark (technical accuracy of writing), awarded out of 4',
      'Lang AO6 marks',
      'Bonus marks not counted to the grade',
    ],
    correctIndex: 1,
    explanation:
      "AQA Lit's 4 SPaG marks per relevant question are AO4 (Lit) marks - a discrete 4-mark band for spelling, punctuation and vocabulary range. They are NOT Lang AO6.",
  },

  // ─── BOARD-SPECIFIC RULES (10) ───────────────────────────────────────────
  {
    id: 'technique-extra-091',
    topic: 'exam-technique',
    question: 'Is AQA GCSE English Literature a closed-book or open-book exam?',
    options: [
      'Open book - copies of all texts are provided',
      'Closed book - no copies of set texts are allowed',
      'Mixed - open for poetry, closed for novels',
      'Open for the unseen poetry only',
    ],
    correctIndex: 1,
    explanation:
      'AQA GCSE Literature is closed-book for set texts. The unseen poetry section provides the poems, but anthology poems and set texts must be remembered.',
  },
  {
    id: 'technique-extra-092',
    topic: 'exam-technique',
    question: 'Is the Edexcel GCSE Literature poetry anthology open or closed book in the exam?',
    options: [
      'Open book',
      'Closed book',
      'Open only for unseen poems',
      'Open only for the modern text',
    ],
    correctIndex: 1,
    explanation:
      'Edexcel GCSE Literature is closed-book for the anthology and all set texts. Only the unseen poems are provided in the exam.',
  },
  {
    id: 'technique-extra-093',
    topic: 'exam-technique',
    question: 'Is OCR GCSE English Literature (J352) closed-book?',
    options: [
      'Open for everything',
      'Closed book for all set texts; unseen materials provided in the unseen section',
      'Open only for Shakespeare',
      'Open only for poetry',
    ],
    correctIndex: 1,
    explanation:
      'OCR GCSE Literature is closed-book; texts are not allowed into the exam. Unseen poetry comes printed on the paper.',
  },
  {
    id: 'technique-extra-094',
    topic: 'exam-technique',
    question: 'On AQA English Language Paper 2, are the source materials seen before the exam?',
    options: [
      'Yes - released two weeks before',
      'No - the two non-fiction sources are unseen, printed in the exam',
      'Only Source A is unseen',
      'You may bring annotated copies',
    ],
    correctIndex: 1,
    explanation:
      'Both sources on AQA Lang Paper 2 (one 19th-century, one 20th/21st-century non-fiction) are unseen and printed in the insert.',
  },
  {
    id: 'technique-extra-095',
    topic: 'exam-technique',
    question: 'On AQA English Language Paper 1, is the fiction extract seen before the exam?',
    options: [
      'Yes - given a week ahead',
      "No - it's an unseen 20th/21st-century literary fiction extract printed in the insert",
      'Yes - chosen from a set list',
      'It is from your set text',
    ],
    correctIndex: 1,
    explanation:
      'Both AQA Language papers use unseen sources. Paper 1 source is an unseen 20th/21st-century literary fiction extract.',
  },
  {
    id: 'technique-extra-096',
    topic: 'exam-technique',
    question: 'For AQA Literature anthology poetry, students must:',
    options: [
      'Compare two named poems given in the question',
      'Write about ONE named poem and CHOOSE one other from the same cluster of the anthology to compare',
      'Compare any two poems from any cluster',
      'Compare a set poem with an unseen poem',
    ],
    correctIndex: 1,
    explanation:
      'On AQA Lit Paper 2 Section B, the question prints ONE named poem; you select a second poem from the same anthology cluster (e.g. Power and Conflict) to compare with.',
  },
  {
    id: 'technique-extra-097',
    topic: 'exam-technique',
    question: 'On Eduqas GCSE Literature, the poetry anthology section is:',
    options: [
      'Closed book - anthology not allowed; the named poem is printed on the paper as stimulus, the comparison poem must be recalled from memory',
      'Open book - a clean copy of the anthology is provided',
      'Open book - your annotated anthology is allowed',
      'Not assessed',
    ],
    correctIndex: 0,
    // VERIFIED: Eduqas GCSE English Literature spec (from 2015, exams to 2026), accessed 2026 - Eduqas is a closed-book exam. The first ("named") anthology poem appears printed in the question paper as stimulus; the second poem for comparison must be recalled from memory. NO clean anthology is provided.
    explanation:
      'Eduqas GCSE Literature is a closed-book exam - students cannot bring texts in. The named anthology poem is reproduced on the paper as stimulus, but the second poem for the comparison question must be quoted from memory. Set prose/drama and Shakespeare are also closed-book.',
  },
  {
    id: 'technique-extra-098',
    topic: 'exam-technique',
    question: 'On Edexcel GCSE Literature Paper 2, what poetry comparisons appear?',
    options: [
      'Section B Part 1: compare a printed anthology poem with another poem from the same collection (recalled from memory). Section B Part 2: compare two unseen poems',
      'Compare two unseen poems only - no anthology in the exam',
      'Compare a poem with a novel',
      'No comparison at all',
    ],
    correctIndex: 0,
    // VERIFIED: Edexcel/Pearson 1ET0/02 specimen and 2023/2024 question papers, accessed 2026 - Paper 2 (2h 15m) Section A = 19th-century novel; Section B Part 1 = anthology poetry comparison (printed named poem + one chosen poem from the same collection, recalled from memory); Section B Part 2 (Q12) = unseen poetry comparison. Closed-book exam.
    explanation:
      'Edexcel Lit Paper 2 Section A is the 19th-century novel. Section B is poetry: Part 1 prints one named poem from the studied collection and asks students to compare it with another poem from the same collection (recalled from memory - closed book); Part 2 compares two contemporary unseen poems printed on the paper.',
  },
  {
    id: 'technique-extra-099',
    topic: 'exam-technique',
    question: 'For AQA Lit unseen poetry (Section C), the second question asks you to:',
    options: [
      "Compare the two unseen poems' content only",
      "Compare the writers' use of methods (language, structure, form) in the two unseen poems - worth 8 marks",
      'Memorise both poems',
      'Compare an unseen with an anthology poem',
    ],
    correctIndex: 1,
    explanation:
      "Q27.2 on AQA Lit Paper 2 asks for a comparison of the writers' methods in the two unseen poems for 8 marks - focused on AO2.",
  },
  {
    id: 'technique-extra-100',
    topic: 'exam-technique',
    question: 'On AQA Lit Paper 1 Shakespeare, the question always:',
    options: [
      'Provides an extract and asks you to write about both the extract and the rest of the play',
      'Provides no extract - write entirely from memory',
      'Provides the whole play',
      'Asks you to compare Shakespeare with a modern playwright',
    ],
    correctIndex: 0,
    explanation:
      'AQA Lit Paper 1 Section A gives a printed extract from your studied Shakespeare play and asks you to discuss the focus theme/character in BOTH the extract AND the play as a whole.',
  },
]
