// Pearson Edexcel International A-Level (IAL) English Literature mock papers.
// One paper per unit (WET01 poetry & drama, WET02 prose, WET03 poetry & prose
// A2, WET04 Shakespeare + pre-1900 drama). These match the shape of the real
// IAL exam: unseen + named-text comparisons, timed extended responses, and
// AO5 critical-perspective prompts at A2.
//
// The extracts below are either public-domain (Victorian poetry, Shakespeare,
// pre-1900 prose) or concise placeholder summaries of copyrighted source
// material - the mock engine uses them for practice, not republication.

import type { MockExamPaper } from './mock-exams'

// ─── WET01 - Poetry and Drama (AS, 2h 15m) ────────────────────────────────

const WET01: MockExamPaper = {
  id: 'ial-wet01-full',
  board: 'Edexcel',
  paperNumber: 1,
  title: 'IAL English Literature - Unit 1 (Poetry and Drama)',
  subtitle: 'WET01 - full timed mock paper',
  code: 'WET01',
  totalTimeMinutes: 135,
  totalMarks: 60,
  qualification: 'International A-Level',
  subject: 'English Literature',
  paper: 'Unit 1',
  spec: 'Pearson Edexcel IAL YLE0',
  description:
    'Section A: unseen post-1900 poem linked to a named anthology poem. Section B: open essay on a studied drama text. 2h 15m, 60 marks total.',
  sections: [
    {
      id: 'wet01-a',
      title: 'Section A - Unseen + Anthology Comparison',
      description:
        'Read the unseen poem printed on the insert. Compare it with a named poem from your studied anthology. Respond to AO1, AO2 and AO4.',
      totalMarks: 30,
      suggestedTimeMinutes: 60,
      questions: [
        {
          id: 'wet01-a-1',
          questionNumber: 1,
          questionText:
            "Compare the ways the poets present loss and longing in the unseen poem and in a named poem from the anthology. In your answer you should focus on the writers' uses of language, form and structure, and make connections between the two poems.",
          marks: 30,
          suggestedTimeMinutes: 60,
          questionType: 'comparative-analysis',
          extract:
            '[Unseen stimulus] - a short post-1900 poem on longing. In your live paper the full poem (~14-20 lines) is printed on the insert; candidates annotate in the answer booklet and structure a comparative response.',
          markScheme: [
            'AO1 (8 marks): informed personal response with a clear argument; accurate terminology.',
            "AO2 (10 marks): analysis of writers' methods (form, structure, imagery, voice) with precise textual detail.",
            'AO4 (12 marks): sustained comparison - connections AND differences across both poems. Strong answers identify points of tension, not just surface similarities.',
          ],
        },
      ],
    },
    {
      id: 'wet01-b',
      title: 'Section B - Drama Essay',
      description:
        'One essay from a choice of two on your studied drama text. Write a sustained argument with close textual reference. AO1, AO2 and AO3.',
      totalMarks: 30,
      suggestedTimeMinutes: 75,
      questions: [
        {
          id: 'wet01-b-1',
          questionNumber: 2,
          questionText:
            'Explore how the dramatist presents power and its abuses in your studied drama text. You must refer to at least three moments across the play and situate your reading in its social and historical context.',
          marks: 30,
          suggestedTimeMinutes: 75,
          questionType: 'extended-response',
          markScheme: [
            'AO1 (8 marks): sustained personal response with an explicit thesis.',
            'AO2 (10 marks): analysis of dramatic methods - staging, dialogue, pace, dramatic irony - not just language.',
            'AO3 (12 marks): contextual understanding woven into argument. Historical, theatrical, biographical context that sharpens interpretation, not a separate paragraph.',
          ],
        },
      ],
    },
  ],
}

// ─── WET02 - Prose (AS, 1h 45m) ──────────────────────────────────────────

const WET02: MockExamPaper = {
  id: 'ial-wet02-full',
  board: 'Edexcel',
  paperNumber: 2,
  title: 'IAL English Literature - Unit 2 (Prose)',
  subtitle: 'WET02 - comparative prose mock',
  code: 'WET02',
  totalTimeMinutes: 105,
  totalMarks: 40,
  qualification: 'International A-Level',
  subject: 'English Literature',
  paper: 'Unit 2',
  spec: 'Pearson Edexcel IAL YLE0',
  description:
    'Single comparative essay on two prose texts from different time periods (one pre-1900, one post-1900), linked by a shared theme. 1h 45m, 40 marks.',
  sections: [
    {
      id: 'wet02-a',
      title: 'Comparative Prose Essay',
      description:
        'One essay comparing two studied prose texts from different periods. Weak answers narrate plot in parallel; strong answers structure around thematic arguments, using both texts as evidence.',
      totalMarks: 40,
      suggestedTimeMinutes: 105,
      questions: [
        {
          id: 'wet02-a-1',
          questionNumber: 1,
          questionText:
            "Compare the ways the authors explore the theme of identity in your two studied prose texts. In your answer, you must pair a pre-1900 and a post-1900 text, and show how each writer's methods shape the reader's response.",
          marks: 40,
          suggestedTimeMinutes: 105,
          questionType: 'comparative-analysis',
          markScheme: [
            'AO1 (10 marks): coherent argument with a clear line of comparison; accurate terminology.',
            'AO2 (10 marks): analysis of prose methods - narrative voice, structure, pacing, imagery - across both texts.',
            'AO3 (8 marks): historical and social context for BOTH texts. Contrast between periods should sharpen, not just decorate, the argument.',
            'AO4 (12 marks): sustained, precise comparison. Top-band answers identify DIFFERENCES as analytical points, not just surface similarities.',
          ],
        },
      ],
    },
  ],
}

// ─── WET03 - Poetry and Prose (A2, 2h 15m) ───────────────────────────────

const WET03: MockExamPaper = {
  id: 'ial-wet03-full',
  board: 'Edexcel',
  paperNumber: 1,
  title: 'IAL English Literature - Unit 3 (Poetry and Prose, A2)',
  subtitle: 'WET03 - A2 unseen + critical-perspective mock',
  code: 'WET03',
  totalTimeMinutes: 135,
  totalMarks: 60,
  qualification: 'International A-Level',
  subject: 'English Literature',
  paper: 'Unit 3',
  spec: 'Pearson Edexcel IAL YLE0',
  description:
    'Section A: unseen pre-1900 poem linked to the pre-1900 anthology. Section B: prose essay with named critical perspective. A2 introduces AO5 - alternative interpretations. 2h 15m, 60 marks.',
  sections: [
    {
      id: 'wet03-a',
      title: 'Section A - Pre-1900 Poetry',
      description:
        'Read the unseen pre-1900 poem on the insert. Compare it with a named poem from the pre-1900 anthology. AO1, AO2, AO3, AO4.',
      totalMarks: 30,
      suggestedTimeMinutes: 60,
      questions: [
        {
          id: 'wet03-a-1',
          questionNumber: 1,
          questionText:
            "Compare how the poets present the natural world in the unseen poem and in a named poem from the pre-1900 anthology. Consider the writers' uses of form, imagery and voice, and the historical contexts in which each poem was written.",
          marks: 30,
          suggestedTimeMinutes: 60,
          questionType: 'comparative-analysis',
          extract:
            '[Unseen Victorian-era stimulus] - e.g. an extract from a Tennyson, Hardy, or Rossetti lyric. In your live paper the full poem is printed on the insert.',
          markScheme: [
            'AO1 (6 marks): sustained personal response, accurate literary vocabulary.',
            'AO2 (8 marks): close reading of form + method + voice. Pre-1900 conventions (e.g. apostrophe, dramatic monologue, sonnet form) should be named.',
            'AO3 (6 marks): historical context - Romantic inheritance, Industrial Revolution, religious doubt.',
            'AO4 (10 marks): comparison as argument. Points of TENSION between the two poems score higher than surface shared images.',
          ],
        },
      ],
    },
    {
      id: 'wet03-b',
      title: 'Section B - Prose with Critical Perspective',
      description:
        'An essay on your studied prose text, engaging with a named critical perspective. AO5 is assessed here - 15% of marks at A2.',
      totalMarks: 30,
      suggestedTimeMinutes: 75,
      questions: [
        {
          id: 'wet03-b-1',
          questionNumber: 2,
          questionText:
            '"The novel presents its female characters as trapped by ideology." How far do you agree with this feminist reading of your studied prose text? Refer to specific moments in the novel and to at least one critical position beyond the one offered in the question.',
          marks: 30,
          suggestedTimeMinutes: 75,
          questionType: 'extended-response',
          markScheme: [
            'AO1 (5 marks): coherent argument with explicit thesis.',
            'AO2 (8 marks): analysis of prose methods - narrative voice, free indirect discourse, dialogue, closure.',
            'AO3 (5 marks): context - Victorian gender norms, legal status of women, marriage market.',
            'AO5 (12 marks): explicit engagement with TWO or more critical positions (e.g. Gilbert & Gubar feminist reading vs a Marxist reading of class-bound women). Student defends their own reading against these.',
          ],
        },
      ],
    },
  ],
}

// ─── WET04 - Shakespeare and Pre-1900 Drama (A2, 2h 15m) ─────────────────

const WET04: MockExamPaper = {
  id: 'ial-wet04-full',
  board: 'Edexcel',
  paperNumber: 2,
  title: 'IAL English Literature - Unit 4 (Shakespeare and Pre-1900 Drama)',
  subtitle: 'WET04 - A2 Shakespeare + pre-1900 drama mock',
  code: 'WET04',
  totalTimeMinutes: 135,
  totalMarks: 60,
  qualification: 'International A-Level',
  subject: 'English Literature',
  paper: 'Unit 4',
  spec: 'Pearson Edexcel IAL YLE0',
  description:
    'Section A: Shakespeare essay with named critical perspective. Section B: pre-1900 drama essay with named critical perspective. Both sections assess AO1, AO2, AO3 and AO5. 2h 15m, 60 marks.',
  sections: [
    {
      id: 'wet04-a',
      title: 'Section A - Shakespeare',
      description:
        'One essay on your studied Shakespeare play (Hamlet, King Lear, Othello, Antony and Cleopatra, etc.). Engage with a named critical perspective and sustained contextual reading.',
      totalMarks: 30,
      suggestedTimeMinutes: 70,
      questions: [
        {
          id: 'wet04-a-1',
          questionNumber: 1,
          questionText:
            '"Shakespeare\'s tragic protagonist is ultimately destroyed less by external forces than by their own psychological contradictions." How far do you agree? Refer to at least THREE moments across your studied Shakespeare play and engage with at least one critical perspective (e.g. psychoanalytic, feminist, New Historicist).',
          marks: 30,
          suggestedTimeMinutes: 70,
          questionType: 'extended-response',
          markScheme: [
            'AO1 (5 marks): sustained thesis across the essay; accurate terminology.',
            "AO2 (8 marks): analysis of Shakespeare's dramatic methods - soliloquy, staging, dramatic irony, versification (verse vs prose). Not just language but FORM.",
            "AO3 (5 marks): context as argument - Renaissance thought, Elizabethan/Jacobean theatre, religious/political climate, Shakespeare's sources.",
            'AO5 (12 marks): explicit use of one or more named critical perspectives. Top-band answers show the tension between a surface reading and the critical reading, and take a defended position.',
          ],
        },
      ],
    },
    {
      id: 'wet04-b',
      title: 'Section B - Pre-1900 Drama',
      description:
        'One essay on your studied pre-1900 drama text (e.g. She Stoops to Conquer, The Rover, Doctor Faustus, The Duchess of Malfi). Same AO weightings as Section A.',
      totalMarks: 30,
      suggestedTimeMinutes: 65,
      questions: [
        {
          id: 'wet04-b-1',
          questionNumber: 2,
          questionText:
            "Discuss how your studied pre-1900 drama text represents power and transgression. You must refer to the play's theatrical methods, its historical context, and at least one critical perspective on the play.",
          marks: 30,
          suggestedTimeMinutes: 65,
          questionType: 'extended-response',
          markScheme: [
            'AO1 (5 marks): coherent argument, controlled prose.',
            'AO2 (8 marks): drama-specific method analysis - structure, asides, stagecraft, character contrast.',
            'AO3 (5 marks): accurate period-specific context (e.g. Restoration theatre, Jacobean revenge tradition, early-modern religious politics).',
            "AO5 (12 marks): engagement with a named critic or critical position. Doesn't need to be exhaustive - one critic used well beats three namechecked.",
          ],
        },
      ],
    },
  ],
}

// ─── Export aggregated pack ──────────────────────────────────────────────

export const ialMockExams: MockExamPaper[] = [WET01, WET02, WET03, WET04]
