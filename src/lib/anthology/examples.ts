/**
 * examples.ts - Worked examples for each Anthology document type.
 *
 * These match the four canonical specimens from the design handoff.
 * Use them for testing, demos, and as reference implementations.
 */

import type {
  StudyGuideContent,
  EssayFeedbackContent,
  RevisionBookletContent,
  CleanReportContent,
} from './types'

// ═══════════════════════════════════════════════════════════════════════════
//  1. Study Guide - the canonical Macbeth I.vii specimen
// ═══════════════════════════════════════════════════════════════════════════

export const EXAMPLE_STUDY_GUIDE: StudyGuideContent = {
  brand: { edition: 'Spring Anthology · Vol. III', code: 'Study Guide № 14' },
  cover: {
    super: 'Close Reading · Macbeth I.vii',
    titleLines: ['If it were done', "when 'tis done."],
    accentWord: 'done',
    sub: 'Twenty-eight lines, three registers, one collapse - a guide to the most examined soliloquy in English.',
    byline: { prefix: 'Edited by', name: 'Ms R. Halstead' },
  },
  chapters: [
    {
      kind: 'narrative',
      chapNum: 'Chapter i.',
      title: 'The scene',
      numPrefix: 'i.',
      drop: true,
      body: 'Macbeth enters alone. Duncan is feasting in the next room; the daggers lie waiting upstairs. In the space of this speech Shakespeare compresses the whole tragedy to come - a man arguing himself out of an act his hands are already moving to commit. The soliloquy is, famously, a failed argument: Macbeth reasons against the murder and concludes he will not proceed, only for Lady Macbeth to reverse him in forty lines of dialogue.',
      paragraphs: [
        'Three movements structure the speech - the conditional, the legalistic, and pity - and at the hinge of the third, the argument collapses into self-diagnosis.',
      ],
      sidebar: {
        kicker: 'At a glance',
        value: '28',
        sub: "lines · Shakespeare's tightest moral argument",
        list: [
          'Form: blank-verse soliloquy',
          "Setting: Macbeth's castle, during the banquet",
          'Mood: pressured, legalistic, collapsing',
          'AO focus: AO2 (imagery), AO3 (divine right)',
        ],
      },
    },
    {
      kind: 'pullquote',
      body: "I have no spur to prick the sides of my intent,<br/>but only vaulting ambition, which <em>o'erleaps itself</em>.",
      cite: 'Macbeth · Act I Sc. vii · Lines 25-27',
    },
    {
      kind: 'quote-list',
      title: 'The four hinge quotations',
      numPrefix: 'ii.',
      items: [
        '<em>"If it were done when \'tis done"</em> - a fantasy of consequence-free action. The murder as event without duration.',
        '<em>"Commends the chalice to our own lips"</em> - hospitality inverted. The host drinks his own cup; the crime returns.',
        '<em>"Pity, like a naked new-born babe, striding the blast"</em> - defencelessness against armoured intent. The image that breaks the argument.',
        '<em>"Vaulting ambition, which o\'erleaps itself"</em> - horse and rider. Force without direction. The play\'s most self-diagnostic phrase.',
      ],
    },
    {
      kind: 'callout',
      kicker: "Examiner's Note · AO2",
      body: "The grade-nine move is to track <em>imagery as argument</em> - how Macbeth's own metaphors dismantle his reasoning. Don't list devices. Show the movement between registers: legal → religious → equestrian.",
    },
  ],
  footer: {
    left: 'The English Hub · GCSE English',
    centre: 'Spring Anthology · Vol. <em>III</em>',
    right: 'Study Guide № 14 · p. 1',
  },
}

// ═══════════════════════════════════════════════════════════════════════════
//  2. Essay Feedback - the canonical Evie M specimen
// ═══════════════════════════════════════════════════════════════════════════

export const EXAMPLE_ESSAY_FEEDBACK: EssayFeedbackContent = {
  brand: { edition: "Essay Feedback · Spring '26", code: 'EM-0314 · Evie M · 11E' },
  cover: {
    super: 'Marked Essay · 428 words · 14 March 2026',
    titleLines: ['"Shakespeare presents', 'ambition as a force', 'that defeats itself."'],
    accentWord: 'ambition',
    sub: '',
    byline: { prefix: 'Marked by', name: 'Ms R. Halstead' },
    titleSize: 38,
  },
  essay: {
    paragraphs: [
      {
        html: 'In Act I Sc. vii, Shakespeare uses Macbeth\'s soliloquy to dramatise <mark class="strong">the collapse of rational argument under the weight of its own moral imagery</mark><span class="comment-anchor">[1]</span>. The scene opens with a conditional - "If it were done when \'tis done" - and this syntactic hesitation already <mark>suggests</mark><span class="comment-anchor">[2]</span> a mind at war with itself.',
      },
      {
        html: 'Macbeth begins by reasoning: he lists objections to killing Duncan. However, his own metaphors turn against him. The "chalice" becomes "poison\'d," and the reader senses that <mark class="strong">the very language of power is being rewritten as a vocabulary of self-destruction</mark><span class="comment-anchor">[3]</span>.',
      },
      {
        html: 'The pivotal image is the "naked new-born babe" of pity, which <mark class="weak">is a good image</mark><span class="comment-anchor">[4]</span>. Here Shakespeare places defencelessness against armoured intent, and the soliloquy\'s scaffolding cannot survive the contact.',
      },
      {
        html: 'A Jacobean audience would have read this through divine right. Regicide was not a political but a metaphysical rupture, and <mark class="weak">the play shows this clearly</mark><span class="comment-anchor">[5]</span> through the weather and the supernatural.',
      },
    ],
    marginComments: [
      { anchor: '[1] AO2 ★', body: 'Thesis is grade-8. Keep this abstraction.' },
      { anchor: '[2] Verb', body: 'Replace "suggests" - try "dramatises" or "stages."' },
      { anchor: '[3] AO2 ★', body: 'Imagery <em>as</em> argument. Examiner catnip.' },
      { anchor: '[4] Register', body: '"Is a good image" collapses into description.' },
      { anchor: '[5] AO3', body: 'Assertion. Anchor to a quoted phrase.' },
    ],
  },
  scores: {
    aos: [
      { label: 'AO1', score: 78 },
      { label: 'AO2', score: 82 },
      { label: 'AO3', score: 62 },
      { label: 'AO4', score: 75 },
    ],
    grade: { value: '7', label: 'Working at' },
  },
  nextSteps: {
    title: 'Next steps',
    numPrefix: '-',
    items: [
      'Integrate context with quotation. Thread a phrase of Jacobean divine-right thinking through "chalice" or "judgment."',
      'Replace weak verbs: "suggests," "is a good image," "shows clearly." Name the theatrical effect.',
      'Pathway assigned: <em>Language Analysis Booster</em> · AO2. Begins Monday, 4 lessons.',
    ],
  },
  footer: {
    left: 'Ref EM-0314',
    centre: 'Marked by <em>Ms Halstead</em>',
    right: 'Essay Feedback · p. 1',
  },
}

// ═══════════════════════════════════════════════════════════════════════════
//  3. Revision Booklet - the canonical classroom handout
// ═══════════════════════════════════════════════════════════════════════════

export const EXAMPLE_REVISION_BOOKLET: RevisionBookletContent = {
  brand: { edition: 'Revision · Year 11 · Week 24', code: '45-min session' },
  cover: {
    super: 'Classroom Handout · Macbeth I.vii',
    titleLines: ['Ambition, undone.'],
    accentWord: 'undone.',
    sub: 'Five tasks, four hinge quotations, one grade-nine move - a structured revision of the seventh-scene soliloquy.',
  },
  sections: [
    {
      kind: 'index',
      title: 'Contents',
      numPrefix: 'i.',
      items: [
        { numeral: 'i.', label: 'Starter - pair discussion', ref: '5 min' },
        { numeral: 'ii.', label: 'Warm-up - individual writing', ref: '3 min' },
        { numeral: 'iii.', label: 'The four hinge quotations', ref: '15 min' },
        { numeral: 'iv.', label: 'Main task - imagery as argument', ref: '20 min' },
        { numeral: 'v.', label: 'Plenary - exit ticket', ref: '10 min' },
        { numeral: 'vi.', label: 'Homework - memorisation', ref: 'due Fri' },
      ],
    },
    {
      kind: 'task-list',
      title: 'Starter · 5 min',
      numPrefix: 'ii.',
      items: [
        'Find the verb in line 1. What does Macbeth want the murder to <em>be</em>?',
        'Who is absent from stage - and why does that matter?',
        'Annotate three words that suggest <em>containment</em>.',
      ],
    },
    {
      kind: 'task-with-callout',
      title: 'Four hinge quotations',
      numPrefix: 'iii.',
      items: [
        '<em>"If it were done"</em> - conditional. Time-pressure. A fantasy of consequence-free action.',
        '<em>"Poison\'d chalice"</em> - hospitality inverted. Host becomes victim.',
        '<em>"Naked new-born babe"</em> - defenceless pity. The image that breaks the argument.',
        '<em>"Vaulting ambition"</em> - horse and rider. Force without direction.',
      ],
      callout: {
        kicker: "Examiner's eye · AO2",
        body: "Don't list devices. Show <em>imagery as argument</em> - how one metaphor turns into another, and what that turn reveals.",
      },
    },
    {
      kind: 'pullquote',
      body: 'Track the movement between registers:<br/>legal · religious · <em>equestrian</em>.',
      cite: 'Ms Halstead · Head of English',
    },
  ],
  footer: {
    left: 'The English Hub',
    centre: 'Revision <em>№ 24</em>',
    right: 'p. 1',
  },
}

// ═══════════════════════════════════════════════════════════════════════════
//  4. Clean Report - the canonical progress report
// ═══════════════════════════════════════════════════════════════════════════

export const EXAMPLE_CLEAN_REPORT: CleanReportContent = {
  brand: { edition: 'Progress Report · Spring Term 2026', code: 'Private · EM-11E-S26' },
  cover: {
    super: 'Termly Progress · Evie Matthews · 11E',
    titleLines: ['English Literature', '& Language.'],
    accentWord: 'Literature',
    sub: 'Twelve weeks of work, summarised for parent and guardian.',
    titleSize: 50,
  },
  kpis: {
    title: 'Headline figures',
    numPrefix: 'i.',
    cards: [
      { kicker: 'Working grade', value: '7', sub: 'was 5 - up two grades' },
      { kicker: 'Predicted', value: '7.8', sub: 'target 8 · on track' },
      {
        kicker: 'Weekly active',
        value: '92<span style="font-size:26px;">%</span>',
        sub: 'was 48% · sustained',
      },
    ],
  },
  table: {
    title: 'Activity summary',
    numPrefix: 'ii.',
    headers: ['Measure', 'Last term', 'This term', 'Movement'],
    rows: [
      { cells: ['Essays submitted', '4', '9', 'More than double'] },
      { cells: ['Timed mocks', '2', '6', 'Up'] },
      { cells: ['Lessons completed', '22', '47', 'Up'] },
      { cells: ['Target grade', '8', '8', 'On track'], isSummary: true },
    ],
  },
  narrative: {
    title: "Teacher's note",
    numPrefix: 'iii.',
    paragraphs: [
      'Evie has transformed her relationship with <em>Macbeth</em> this term. Her AO2 work - tracking imagery of containment collapsing into imagery of exposure - is substantially above target. Several sentences in her most recent essay approached the upper band.',
      'The area to focus on is AO3. Evie asserts context rather than integrating it; this is the single shift that will lift her from a secure 7 to the 8/9 bands. She has been assigned the <em>Language Analysis Booster</em> pathway.',
    ],
  },
  outlook: {
    kicker: 'Outlook · Summer Mocks',
    body: 'If Evie sustains her current pace - 92% weekly activity and a pathway begun - she will meet her target grade by summer mocks.',
  },
  footer: {
    left: 'Issued 20 March 2026',
    centre: 'Private to <em>parent/guardian</em>',
    right: 'Report · p. 1',
  },
}
