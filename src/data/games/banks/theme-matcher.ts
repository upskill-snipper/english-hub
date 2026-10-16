import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Theme Matcher: select every set text in which a theme appears.
 *
 * Moved out of src/app/games/theme-matcher/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHICH TEXTS COUNT, AND WHAT WAS WRONG (found writing those explanations). A
 * round marks every text in the grid, so a text missing from a theme's list is
 * marked wrong for the student who picks it, just as a text wrongly listed is
 * marked wrong for the student who leaves it. Each list was checked both ways.
 * A listed text stays where it plainly shows the theme. A missing text is added
 * where the site's own guide to it names the theme, or the same idea in other
 * words, as one of its main themes (src/app/revision/texts/<slug> and its
 * themes page, src/data/study-guides/<slug>.ts, and
 * src/data/aqa-poetry-power-conflict.ts for the four poems): a student who
 * learnt it there should not be marked wrong for it. A text that only touches
 * a theme is not added.
 *
 * Nineteen links were missing. Eighteen are themes the text's own guide names:
 *
 *   - Social inequality: Animal Farm ("Class and Labour") and Jane Eyre ("Class
 *     and social position");
 *   - Power and control: Lord of the Flies ("Power and Leadership"), London
 *     ("Abuse of institutional power"), Much Ado About Nothing ("Gender and
 *     power") and Tissue ("Fragility of power and human structures");
 *   - Guilt and conscience: Great Expectations ("Crime, Guilt and Justice") and
 *     Jane Eyre ("Religion and conscience");
 *   - The supernatural: Jane Eyre ("The Gothic and the supernatural");
 *   - Isolation and loneliness: A Christmas Carol ("Family and Isolation");
 *   - Conflict and violence: Jekyll and Hyde ("Violence and Respectability");
 *   - Appearance vs Reality: The Tempest ("Illusion and reality");
 *   - Justice and morality: Great Expectations ("Crime, Guilt and Justice") and
 *     Jane Eyre ("Religion and morality");
 *   - Nature and the environment: Macbeth ("Nature & the Unnatural": the
 *     natural world rebels against the murder of a king) and Tissue ("Nature vs
 *     human creation");
 *   - Corruption of innocence: London ("Loss of innocence") and Frankenstein,
 *     whose "Nature vs Nurture" asks whether the creature is born evil or made
 *     evil.
 *
 * The nineteenth is a plot rather than a named theme: Love and relationships
 * now includes The Tempest, where Ferdinand and Miranda fall in love at first
 * sight and are betrothed (Act 1 Scene 2, Act 3 Scene 1, Act 4 Scene 1).
 *
 * One link was wrong. Fate vs Free will listed An Inspector Calls, whose guide
 * names no such theme: the play is about the choices each Birling made and
 * their responsibility for them, not about fate. It is removed, and the round
 * is Macbeth and Romeo and Juliet.
 *
 * The twenty themes, and every other link, are unchanged.
 *
 * ONE EFFECT ON PLAY (found by the second reader). The page deals a board its
 * own themes only when at least fifteen have two or more of its texts in the
 * grid. The Edexcel IGCSE grid (Macbeth, An Inspector Calls, Romeo and Juliet,
 * Great Expectations and the four poems) had fourteen, so it was dealt all
 * twenty, Science and responsibility among them, where none of its texts
 * counts and a student, who must pick at least one, cannot be right. With Great
 * Expectations under Justice and morality it has fifteen, and is dealt those.
 */

export interface ThemeRound {
  theme: string
  /** Every text where this theme is present */
  correctTexts: string[]
}

export const ALL_TEXTS = [
  'Macbeth',
  'A Christmas Carol',
  'An Inspector Calls',
  'Jekyll and Hyde',
  'Romeo and Juliet',
  'Lord of the Flies',
  'Animal Farm',
  'Great Expectations',
  'Jane Eyre',
  'Frankenstein',
  'The Tempest',
  'Much Ado About Nothing',
  'Ozymandias',
  'London (Blake)',
  'War Photographer',
  'Tissue',
] as const

export const THEME_DATA: ThemeRound[] = [
  {
    theme: 'Social inequality',
    correctTexts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Great Expectations',
      'London (Blake)',
      'Animal Farm',
      'Jane Eyre',
    ],
  },
  {
    theme: 'Ambition',
    correctTexts: ['Macbeth', 'Ozymandias', 'Great Expectations', 'Frankenstein'],
  },
  {
    theme: 'Redemption',
    correctTexts: ['A Christmas Carol', 'Great Expectations', 'The Tempest'],
  },
  {
    theme: 'Good vs Evil',
    correctTexts: ['Jekyll and Hyde', 'Macbeth', 'Lord of the Flies', 'Frankenstein'],
  },
  {
    theme: 'Love and relationships',
    correctTexts: [
      'Romeo and Juliet',
      'Much Ado About Nothing',
      'Jane Eyre',
      'Great Expectations',
      'The Tempest',
    ],
  },
  {
    theme: 'Power and control',
    correctTexts: [
      'Macbeth',
      'Animal Farm',
      'An Inspector Calls',
      'Ozymandias',
      'The Tempest',
      'Lord of the Flies',
      'London (Blake)',
      'Much Ado About Nothing',
      'Tissue',
    ],
  },
  {
    theme: 'Guilt and conscience',
    correctTexts: [
      'Macbeth',
      'An Inspector Calls',
      'A Christmas Carol',
      'War Photographer',
      'Great Expectations',
      'Jane Eyre',
    ],
  },
  {
    theme: 'The supernatural',
    correctTexts: [
      'Macbeth',
      'Jekyll and Hyde',
      'A Christmas Carol',
      'Frankenstein',
      'The Tempest',
      'Jane Eyre',
    ],
  },
  {
    theme: 'Isolation and loneliness',
    correctTexts: [
      'Frankenstein',
      'Jane Eyre',
      'Jekyll and Hyde',
      'War Photographer',
      'A Christmas Carol',
    ],
  },
  {
    theme: 'Conflict and violence',
    correctTexts: [
      'Romeo and Juliet',
      'Macbeth',
      'Lord of the Flies',
      'Animal Farm',
      'War Photographer',
      'Jekyll and Hyde',
    ],
  },
  {
    theme: 'Appearance vs Reality',
    correctTexts: [
      'Macbeth',
      'Jekyll and Hyde',
      'Much Ado About Nothing',
      'An Inspector Calls',
      'Great Expectations',
      'The Tempest',
    ],
  },
  {
    theme: 'Family and duty',
    correctTexts: [
      'Romeo and Juliet',
      'An Inspector Calls',
      'A Christmas Carol',
      'Great Expectations',
    ],
  },
  {
    theme: 'Justice and morality',
    correctTexts: [
      'An Inspector Calls',
      'Animal Farm',
      'A Christmas Carol',
      'The Tempest',
      'Great Expectations',
      'Jane Eyre',
    ],
  },
  {
    theme: 'Identity and self-discovery',
    correctTexts: ['Jekyll and Hyde', 'Jane Eyre', 'Great Expectations', 'Frankenstein', 'Tissue'],
  },
  {
    theme: 'Nature and the environment',
    correctTexts: [
      'Frankenstein',
      'Lord of the Flies',
      'The Tempest',
      'London (Blake)',
      'Ozymandias',
      'Macbeth',
      'Tissue',
    ],
  },
  {
    theme: 'Corruption of innocence',
    correctTexts: [
      'Lord of the Flies',
      'Macbeth',
      'A Christmas Carol',
      'Great Expectations',
      'London (Blake)',
      'Frankenstein',
    ],
  },
  {
    theme: 'Fate vs Free will',
    correctTexts: ['Romeo and Juliet', 'Macbeth'],
  },
  {
    theme: 'Revolution and rebellion',
    correctTexts: ['Animal Farm', 'An Inspector Calls', 'London (Blake)', 'The Tempest'],
  },
  {
    theme: 'Memory and the past',
    correctTexts: [
      'A Christmas Carol',
      'War Photographer',
      'Ozymandias',
      'Great Expectations',
      'Tissue',
    ],
  },
  {
    theme: 'Science and responsibility',
    correctTexts: ['Frankenstein', 'Jekyll and Hyde'],
  },
]

export const BANK: GameBank<ThemeRound> = {
  slug: 'theme-matcher',
  items: THEME_DATA,
  // No two rounds share a theme, and the theme is what the student sees.
  key: (r) => r.theme,
  answer: (r) => r.correctTexts.join(', '),
  // The student selects any number of texts from the grid, so no question has
  // a fixed list of options with one of them right.
  options: () => null,
  tag: (r) => r.theme,
}
