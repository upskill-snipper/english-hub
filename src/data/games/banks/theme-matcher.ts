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
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy"; this bank asked only which texts carry a theme, twenty
 * times, all recall (.tmp-games-audit/REPORT-gcse.md). It now holds 186
 * rounds in three tiers, all played in the same grid: 41 at tier 1, 94 at
 * tier 2 and 51 at tier 3.
 *
 *   - tier 1, recall: the twenty themes, and moments a student must place
 *     ("A wedding is interrupted or turned into a disaster");
 *   - tier 2, how a theme is presented: a precise claim, true of some texts
 *     and plainly false of others ("Helping the poor is presented as a duty
 *     the better-off must be taught");
 *   - tier 3, how a text works: form, structure, method and context ("A
 *     circular ending suggests those in power will not change").
 *
 * A claim can be argued for a text it was not written about, so every round
 * but sixteen of the twenty themes carries its own grid (`texts`, four to
 * eleven): its right texts and texts that are plainly wrong for it, with any
 * text that could be argued either way left out. The page plays those
 * texts, keeping only a board's own, and deals a round to a board only while
 * it keeps two right and two wrong texts there
 * (src/app/games/theme-matcher/page.tsx). A claim's right texts are always
 * among its theme's own list, so a student taught by a claim that
 * Frankenstein shows guilt is not then marked wrong for picking it. Three
 * themes are claims only, with no list to keep them to: Gender roles,
 * Religion and faith, and Death and mortality.
 *
 * HOW A GRID WAS MADE SAFE. Each text in a grid had to be defensible in one
 * sentence, and the explanation's `more` gives that sentence for the nearest
 * wrong texts. A second reading against the full texts took out every text a
 * well-read teacher could argue the other way, 35 texts from 29 rounds,
 * and dropped one round whose grid could not be made safe ("thought mad or
 * ill": Bob Cratchit reaches for a strait-waistcoat, Lanyon sickens after the
 * change, and Alonso is "distracted"). Jane Eyre, for example, left the chains round
 * because she keeps imagining fetters ("forging a fresh chain to fetter your
 * heart", Chapter 32), and Animal Farm left "violence excites those who
 * commit it" because, after the Battle of the Cowshed, the animals reassemble
 * "in the wildest excitement" (Chapter 4). A poem plainly outside a claim was
 * added to its grid where that let a board with few texts play it: Edexcel
 * IGCSE now has 52 rounds of its own and OCR A level 34. The IAL board's
 * texts carry only nine themes, too few for a game, so it plays every text,
 * as before.
 * Every quotation in the explanations was checked word for word against the
 * held texts and guides, and the four works in UK copyright are quoted only
 * as their guides already quote them.
 *
 * Writing the claims found five links missing from the theme lists, each
 * plain in the text, and they are added:
 *
 *   - Ambition: The Tempest (Prospero to Antonio, "You, brother mine, that
 *     entertain'd ambition", Act 5 Scene 1);
 *   - Redemption: Jane Eyre (Rochester's "remorse, repentance; the wish for
 *     reconcilement to my Maker", Chapter 37);
 *   - Guilt and conscience: The Tempest (Gonzalo, "their great guilt", Act 3
 *     Scene 3) and Frankenstein (Victor "seized by remorse and the sense of
 *     guilt", Chapter 9);
 *   - Fate vs Free will: Frankenstein ("Destiny was too potent, and her
 *     immutable laws had decreed my utter and terrible destruction",
 *     Chapter 2).
 *
 * Nothing was removed from the lists, and the twenty themes' explanations
 * were rewritten to name the added texts and to leave the claims' evidence to
 * the claims.
 *
 * CHECKED BY A SECOND READER (24 October 2026), each grid against the held
 * texts, the guides and this bank's own explanations. No right text was
 * wrong. What follows takes out of a grid a text a teacher could argue was
 * right (the passage that argues it is named), and, where a grid was left
 * with fewer than two wrong texts, puts in one plainly outside the claim,
 * usually a poem. Every explanation that named a text taken out was rewritten.
 *
 *   - The four themes whose lists the rebuild changed now carry grids. Adding
 *     The Tempest to Ambition on Antonio's words made Napoleon and Jack as
 *     plain, so Animal Farm and Lord of the Flies count too; An Inspector
 *     Calls (a claim here calls Birling's hope of a knighthood ambition),
 *     A Christmas Carol, Jekyll and Hyde, Jane Eyre, Much Ado, Romeo and
 *     Juliet and Tissue are left out. Fate vs Free will counts A Christmas
 *     Carol, whose Stave 4 asks if the future is "shadows of things that May
 *     be, only", as this bank's own tip on visions said; Jane Eyre (Rochester
 *     answers Destiny, "I dare like it", Chapter 15), The Tempest, An
 *     Inspector Calls, Jekyll and Hyde, Lord of the Flies, Great Expectations,
 *     Animal Farm and Ozymandias are left out. Guilt and conscience leaves out
 *     Jekyll and Hyde (his conscience "slumbered"), Lord of the Flies, Much
 *     Ado, Romeo and Juliet, Animal Farm (Boxer's tears) and London;
 *     Redemption leaves out Much Ado, An Inspector Calls, Jekyll and Hyde
 *     ("redeem the past"), Romeo and Juliet and Frankenstein. The other
 *     sixteen themes, whose lists were not changed, still play on the whole
 *     grid under the rule of 16 October above.
 *   - Chains: An Inspector Calls out (the Inspector's chain of events).
 *   - Climbing a class: Romeo and Juliet out (this bank's claim on marriage
 *     plans says Capulet's choice of Paris is about status).
 *   - Ambition for a throne: Animal Farm out (hens confess "a plot to murder
 *     Napoleon", Chapter 8).
 *   - Ambition ends in death: Great Expectations out (Magwitch dies, his
 *     possessions "forfeited to the Crown", Chapter 54).
 *   - Ambition unsatisfied: Jane Eyre out (restless in the post she longed
 *     for, Chapter 12).
 *   - Ambition told second-hand: Great Expectations out (Magwitch's story,
 *     retold by Pip, Chapter 42).
 *   - Promise of greatness: Jane Eyre out (St John's "ambition of the high
 *     master-spirit", Chapter 38).
 *   - Evil grows step by step: A Christmas Carol (Marley's chain made "link by
 *     link"), The Tempest (Antonio's "ambition growing", Act 1 Scene 2) and
 *     Much Ado (Don John lies at the ball, then plots the window) out.
 *   - Goodness helpless: Macbeth out (Lady Macduff, "to do good sometime /
 *     Accounted dangerous folly", Act 4 Scene 2).
 *   - Love at first sight: Frankenstein out (the Turk promises Felix Safie's
 *     hand, Chapter 14).
 *   - Young love checked: Much Ado out (Leonato puts the wedding off a week,
 *     Act 2 Scene 1).
 *   - "A lover's language changes from cliché to sincerity" became "A lover's
 *     fancy language is mocked by a friend": Beatrice and Benedick's early
 *     words are mockery, not cliché, so Much Ado could not be defended there.
 *   - Human power fragile: A Christmas Carol out (Scrooge's goods stripped
 *     from his deathbed, Stave 4).
 *   - Boasts undercut: Frankenstein ("more, far more, will I achieve", Chapter
 *     3) and Romeo and Juliet (Capulet sure Juliet "will be rul'd", Act 3
 *     Scene 4) out.
 *   - Power from knowledge: An Inspector Calls (the Inspector's knowledge) and
 *     Macbeth (the witches' foreknowledge) out.
 *   - Allegory: Jane Eyre out (Helen Burns, Brocklehurst and St John are often
 *     read as types).
 *   - The powerful fear losing: Animal Farm's evidence is now Napoleon's food
 *     taster (Chapter 8), not his blaming Snowball, which shows no fear.
 *   - Guilt in the body: London out (the soldier's blood on palace walls).
 *   - Guilt for a death not caused: Macbeth out (Lady Macbeth's guilt for
 *     murders she did not commit).
 *   - Audience shares guilt: Macbeth out (the soliloquies' complicity).
 *   - Guilt begins with a theft: The Tempest (a stolen dukedom) and Macbeth (a
 *     "dwarfish thief", Act 5 Scene 2) out.
 *   - Rejected for looks: Jane Eyre out (Abbot, "if she were a nice, pretty
 *     child", Chapter 3).
 *   - Violence harms its doer: Animal Farm out (Boxer, "I have no wish to take
 *     life", Chapter 4).
 *   - Evil behind an innocent face: Romeo and Juliet out ("O serpent heart,
 *     hid with a flowering face", Act 3 Scene 2).
 *   - Feast ruined: Much Ado out (the wedding).
 *   - Clothes that do not fit: A Christmas Carol out (Peter's "monstrous shirt
 *     collar", Stave 3).
 *   - Truth withheld: Macbeth out (Macduff "untimely ripp'd", Act 5 Scene 8).
 *   - Young wiser than old: Romeo and Juliet out (the lovers against the feud).
 *   - Family meal: A Christmas Carol out ("The Founder of the Feast indeed",
 *     Stave 3).
 *   - Mercy over revenge: Frankenstein out (Walton's "curiosity and
 *     compassion", Chapter 24).
 *   - Mouthpiece: Great Expectations out (Herbert's "true gentleman at heart",
 *     Chapter 22).
 *   - Speech of judgement: Much Ado out (Dogberry's charges, Act 5 Scene 1);
 *     The Tempest's evidence is now Prospero naming each enemy in turn (Act 5
 *     Scene 1), not the harpy's speech, which charges the three together.
 *   - Nature healing: Macbeth out (sleep, "great nature's second course", Act
 *     2 Scene 2).
 *   - Land owned: Romeo and Juliet out (the Prince's "our streets", Act 1 Scene
 *     1).
 *   - Cruelty learned: Romeo and Juliet (the inherited grudge) and Lord of the
 *     Flies out.
 *   - Child victims: An Inspector Calls (Eva's unborn child) and The Tempest
 *     (Miranda set adrift as a baby) out.
 *   - Corruption spreads down: A Christmas Carol (Ignorance and Want), Great
 *     Expectations (Estella) and Frankenstein out.
 *   - Fall from paradise: London out (a Song of Experience).
 *   - Blames fate: Jane Eyre out (Rochester lays "half the blame on ill
 *     fortune", Chapter 14).
 *   - Dares fate: Jane Eyre out ("I dare like it", Chapter 15).
 *   - Past relived in images: Macbeth (the sleepwalking) and Jekyll and Hyde
 *     (Utterson's dream) out.
 *   - Past second-hand: War Photographer out (its speaker tells another's
 *     memories).
 *   - Secret pieced together: Great Expectations out (Estella's parents).
 *   - Woman challenges society: Frankenstein out (Safie, Chapter 14).
 *   - Woman questions courage: Romeo and Juliet out (the Nurse, "stand, and you
 *     be a man", Act 3 Scene 3).
 *   - Man who shows feeling mocked: The Tempest out (Antonio and Sebastian mock
 *     Gonzalo's comfort of the grieving King, Act 2 Scene 1).
 *   - Powerful woman monstrous: Much Ado out ("the infernal Ate", Act 2 Scene 1).
 *   - Religion a tool of power: A Christmas Carol out (the spirit condemns
 *     Sunday closing done "in our name", Stave 3).
 *   - Goodness worn away: Jane Eyre out (Rochester, "Nature meant me to be, on
 *     the whole, a good man", Chapter 14).
 *   - Haste: An Inspector Calls out (Sheila's complaint made in a temper).
 *   - Faith facing death: Macbeth out (Cawdor's "deep repentance", Act 1 Scene 4).
 *   - Kindness: Macbeth out (King Edward heals the sick, Act 4 Scene 3).
 *   - Fear of discovery: The Tempest out (Sebastian's quick lie, Act 2 Scene 1).
 *   - Bible words: London out (its "mark" is read as Ezekiel's).
 *   - Dies of grief: Jane Eyre out (Mrs Reed's stroke at her son's death,
 *     Chapter 21).
 *   - Gentle spirit: Jane Eyre ("My daughter, flee temptation", Chapter 27) and
 *     Macbeth (the crowned child, Act 4 Scene 1) out.
 *   - Staged scene: Great Expectations (Wopsle's Hamlet) and Jekyll and Hyde
 *     (Hyde changes before Lanyon, Chapter 9) out.
 *   - Deception for good: Macbeth out (Malcolm tests Macduff, Act 4 Scene 3);
 *     the explanation said Herbert never learns who helped him, but he does
 *     (Chapter 58).
 *   - Woman speaks out: Macbeth (Lady Macduff), Frankenstein (Safie) and Romeo
 *     and Juliet (the Nurse) out.
 *   - Detective figure: Romeo and Juliet out (the Prince's inquiry, Act 5
 *     Scene 3).
 *
 * WHAT KEEPS A ROUND HONEST. `facts` gives every round its theme, so no two
 * rounds of one theme meet in a game (their explanations name the same
 * texts), and the moments its explanation rests on, so two rounds whose
 * explanations share a scene or a quotation are never dealt together
 * (src/lib/games/deal-round.ts).
 */

export interface ThemeRound {
  /** The theme the round tests: the prompt for a tier 1 theme, and the tag every answer is recorded under. */
  theme: string
  /** A statement about the theme, true of some texts and plainly false of the others in its grid. */
  claim?: string
  /** Every text in the grid where the theme is present, or the claim is true. */
  correctTexts: string[]
  /**
   * The grid for a round with a claim, and for four of the themes: its right texts and texts
   * plainly without it, any text that could be argued either way left out. Without it the
   * round is played on the board's whole grid.
   */
  texts?: string[]
  /** 1 recall, 2 how the theme is presented, 3 how the text works (GameBank.tier). */
  tier: 1 | 2 | 3
  /** The moments its explanation rests on, so two rounds that share one are not dealt together. */
  facts?: string[]
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
  // ─── Tier 1: the twenty themes, played on the board's whole grid ─────────────
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
    tier: 1,
    facts: ['Animal Farm: pigs and men'],
  },
  {
    theme: 'Ambition',
    correctTexts: [
      'Macbeth',
      'Ozymandias',
      'Great Expectations',
      'Frankenstein',
      'The Tempest',
      'Animal Farm',
      'Lord of the Flies',
    ],
    texts: [
      'Macbeth',
      'Lord of the Flies',
      'Animal Farm',
      'Great Expectations',
      'Frankenstein',
      'The Tempest',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
    ],
    tier: 1,
    facts: [
      "The Tempest: Antonio's usurpation",
      'Animal Farm: Snowball expelled',
      'Lord of the Flies: Castle Rock',
    ],
  },
  {
    theme: 'Redemption',
    correctTexts: ['A Christmas Carol', 'Great Expectations', 'The Tempest', 'Jane Eyre'],
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Lord of the Flies',
      'Animal Farm',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
      'Tissue',
    ],
    tier: 1,
    facts: [
      'A Christmas Carol: the three spirits',
      'The Tempest: virtue, not vengeance',
      'Great Expectations: Joe',
      'Jane Eyre: Rochester blinded',
    ],
  },
  {
    theme: 'Good vs Evil',
    correctTexts: ['Jekyll and Hyde', 'Macbeth', 'Lord of the Flies', 'Frankenstein'],
    tier: 1,
    facts: ['Frankenstein: the creature rejected'],
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
    tier: 1,
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
    tier: 1,
    facts: ['London: church and palace'],
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
      'The Tempest',
      'Frankenstein',
    ],
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Great Expectations',
      'Jane Eyre',
      'Frankenstein',
      'The Tempest',
      'Ozymandias',
      'War Photographer',
      'Tissue',
    ],
    tier: 1,
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
    tier: 1,
    facts: ['Jane Eyre: the voice', 'Jekyll and Hyde: the potion', 'Frankenstein: the creation'],
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
    tier: 1,
    facts: ['Frankenstein: the creature rejected', 'Jane Eyre: Gateshead'],
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
    tier: 1,
    facts: [
      "Romeo and Juliet: Mercutio's death",
      'Animal Farm: the executions',
      'Jekyll and Hyde: the trampling',
      'Jekyll and Hyde: the Carew murder',
      'Lord of the Flies: the hunt',
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
    tier: 1,
    facts: [
      'Much Ado: the masked ball',
      'Much Ado: the wedding',
      'Great Expectations: Magwitch returns',
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
    tier: 1,
    facts: [
      'Romeo and Juliet: Paris',
      "A Christmas Carol: the Cratchits' Christmas",
      'Great Expectations: Joe',
      "An Inspector Calls: the Inspector's last speech",
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
    tier: 1,
    facts: ['Jane Eyre: Brocklehurst'],
  },
  {
    theme: 'Identity and self-discovery',
    correctTexts: ['Jekyll and Hyde', 'Jane Eyre', 'Great Expectations', 'Frankenstein', 'Tissue'],
    tier: 1,
    facts: ['Great Expectations: Magwitch returns'],
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
    tier: 1,
    facts: [
      'Ozymandias: the sands',
      'London: chartered',
      'Macbeth: nature in disorder',
      'Lord of the Flies: the island',
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
    tier: 1,
    facts: ['Frankenstein: misery made me a fiend', 'Frankenstein: the creature rejected'],
  },
  {
    theme: 'Fate vs Free will',
    correctTexts: ['Romeo and Juliet', 'Macbeth', 'Frankenstein', 'A Christmas Carol'],
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Romeo and Juliet',
      'Frankenstein',
      'Much Ado About Nothing',
      'London (Blake)',
      'War Photographer',
      'Tissue',
    ],
    tier: 1,
    facts: ['Romeo and Juliet: the Prologue', 'A Christmas Carol: the future and the grave'],
  },
  {
    theme: 'Revolution and rebellion',
    correctTexts: ['Animal Farm', 'An Inspector Calls', 'London (Blake)', 'The Tempest'],
    tier: 1,
    facts: [
      "The Tempest: Antonio's usurpation",
      'An Inspector Calls: the young and the old',
      'An Inspector Calls: the strike',
    ],
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
    tier: 1,
    facts: ['Ozymandias: the broken statue', 'Great Expectations: the older Pip'],
  },
  {
    theme: 'Science and responsibility',
    correctTexts: ['Frankenstein', 'Jekyll and Hyde'],
    tier: 1,
    facts: [
      'Jekyll and Hyde: the potion',
      'Frankenstein: the creation',
      'Jekyll and Hyde: the cabinet',
      "Frankenstein: Victor's secret work",
    ],
  },

  // ─── Social inequality ────────────────────────────────────────────────────────
  {
    theme: 'Social inequality',
    claim: 'Helping the poor is presented as a duty the better-off must be taught',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Animal Farm',
      'Frankenstein',
    ],
    correctTexts: ['A Christmas Carol', 'An Inspector Calls'],
    tier: 2,
    facts: [
      'A Christmas Carol: the charity collectors',
      'A Christmas Carol: Christmas morning',
      "An Inspector Calls: the Inspector's last speech",
      'Animal Farm: the milk and apples',
      'Frankenstein: the De Laceys',
    ],
  },
  {
    theme: 'Social inequality',
    claim: 'Those in charge live in comfort while those beneath them go hungry',
    texts: [
      'Macbeth',
      'Animal Farm',
      'Jane Eyre',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
    ],
    correctTexts: ['Animal Farm', 'Jane Eyre'],
    tier: 2,
    facts: ['Animal Farm: the milk and apples', 'Jane Eyre: Brocklehurst'],
  },
  {
    theme: 'Social inequality',
    claim:
      'Inequality is attacked through a story with a clear moral, like a fable or a morality play',
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Animal Farm',
      'Great Expectations',
      'Jane Eyre',
      'London (Blake)',
    ],
    correctTexts: ['A Christmas Carol', 'An Inspector Calls', 'Animal Farm'],
    tier: 3,
    facts: ['form: fable, allegory or morality play'],
  },
  {
    theme: 'Social inequality',
    claim:
      'A character looked down on for their class is shown to be worth more than that judgement',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
      'Frankenstein',
    ],
    correctTexts: ['An Inspector Calls', 'Great Expectations', 'Jane Eyre'],
    tier: 2,
    facts: [
      'Great Expectations: Joe',
      'Jane Eyre: poor, obscure, plain, and little',
      'An Inspector Calls: the charity committee',
      "An Inspector Calls: Eric's theft",
      'Frankenstein: the creature rejected',
      'Romeo and Juliet: the Prologue',
    ],
  },
  {
    theme: 'Social inequality',
    claim: 'The poor are shown with warmth and dignity, not only as victims',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Great Expectations',
      'Much Ado About Nothing',
      'London (Blake)',
      'War Photographer',
    ],
    correctTexts: ['A Christmas Carol', 'Great Expectations'],
    tier: 2,
    facts: [
      "A Christmas Carol: the Cratchits' Christmas",
      'Great Expectations: Joe',
      'London: marks of weakness, marks of woe',
    ],
  },
  {
    theme: 'Social inequality',
    claim: 'Inequality is felt through the memories of a narrator who was once a poor child',
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Animal Farm',
      'Great Expectations',
      'Jane Eyre',
      'London (Blake)',
    ],
    correctTexts: ['Great Expectations', 'Jane Eyre'],
    tier: 3,
    facts: [
      'Great Expectations: the older Pip',
      'Great Expectations: coarse hands',
      'Jane Eyre: the older Jane',
      'Jane Eyre: Gateshead',
    ],
  },
  {
    theme: 'Social inequality',
    claim: "A character's ambition is to climb into a higher social class",
    texts: [
      'An Inspector Calls',
      'Lord of the Flies',
      'Great Expectations',
      'Jane Eyre',
      'Frankenstein',
      'Ozymandias',
    ],
    correctTexts: ['An Inspector Calls', 'Great Expectations'],
    tier: 2,
    facts: [
      'Great Expectations: on her account',
      'An Inspector Calls: the knighthood',
      'Jane Eyre: the jewels and silks',
    ],
  },
  {
    theme: 'Social inequality',
    claim: 'Chains stand for what binds people, forged by themselves or by their society',
    texts: ['A Christmas Carol', 'Ozymandias', 'London (Blake)', 'War Photographer', 'Tissue'],
    correctTexts: ['A Christmas Carol', 'London (Blake)'],
    tier: 3,
    facts: ["A Christmas Carol: Marley's ghost", 'London: mind-forged manacles'],
  },
  {
    theme: 'Social inequality',
    claim: 'Workers are used up and thrown away by those who profit from them',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Animal Farm',
      'Great Expectations',
    ],
    correctTexts: ['An Inspector Calls', 'Animal Farm'],
    tier: 2,
    facts: [
      'An Inspector Calls: the strike',
      'Animal Farm: Boxer',
      'A Christmas Carol: Christmas morning',
      'Great Expectations: Joe',
    ],
  },
  {
    theme: 'Social inequality',
    claim: 'A poor character is raised up by an unexpected fortune',
    texts: [
      'An Inspector Calls',
      'Animal Farm',
      'Great Expectations',
      'Jane Eyre',
      'London (Blake)',
    ],
    correctTexts: ['Great Expectations', 'Jane Eyre'],
    tier: 1,
    facts: [
      'Jane Eyre: the inheritance',
      'Jane Eyre: the Rivers cousins',
      'Great Expectations: Magwitch returns',
      "An Inspector Calls: Eric's theft",
    ],
  },
  {
    theme: 'Social inequality',
    claim: 'A character works for a harsh master who pays or feeds them badly',
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Animal Farm',
      'Great Expectations',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['A Christmas Carol', 'An Inspector Calls', 'Animal Farm'],
    tier: 1,
    facts: [
      "A Christmas Carol: Bob's coal",
      'An Inspector Calls: the strike',
      'Animal Farm: worked like slaves',
      'Great Expectations: Joe',
    ],
  },

  // ─── Ambition ─────────────────────────────────────────────────────────────────
  {
    theme: 'Ambition',
    claim: 'Ambition for a throne leads to a plot to kill a king',
    texts: ['Macbeth', 'Romeo and Juliet', 'The Tempest', 'Much Ado About Nothing', 'Ozymandias'],
    correctTexts: ['Macbeth', 'The Tempest'],
    tier: 2,
    facts: [
      "Macbeth: Duncan's murder",
      "Macbeth: the witches' prophecy",
      "The Tempest: Antonio and Sebastian's plot",
      "The Tempest: Antonio's usurpation",
      'Much Ado: Don John',
    ],
  },
  {
    theme: 'Ambition',
    claim: 'Ambition ends in death and the loss of everything it gained',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Animal Farm',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'Frankenstein', 'Ozymandias'],
    tier: 2,
    facts: [
      "Macbeth: Macbeth's death",
      "Frankenstein: Victor's death",
      'Ozymandias: Nothing beside remains',
      'Animal Farm: pigs and men',
    ],
  },
  {
    theme: 'Ambition',
    claim: 'Ambition is looked back on with regret by the one who had it, telling their own story',
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Great Expectations',
      'Jane Eyre',
      'Frankenstein',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
    ],
    correctTexts: ['Great Expectations', 'Frankenstein'],
    tier: 3,
    facts: [
      'Great Expectations: the older Pip',
      'Frankenstein: Victor warns Walton',
      'Ozymandias: the inscription',
    ],
  },
  {
    theme: 'Ambition',
    claim: 'Ambition drives a character to break the laws of nature',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Great Expectations',
      'Frankenstein',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Macbeth', 'Frankenstein'],
    tier: 2,
    facts: ['Frankenstein: the creation', 'Macbeth: nature in disorder'],
  },
  {
    theme: 'Ambition',
    claim: 'Ambition stays unsatisfied even when it reaches its goal',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Great Expectations',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'Great Expectations', 'Frankenstein'],
    tier: 2,
    facts: [
      'Macbeth: To be thus is nothing',
      'Great Expectations: more or less miserable',
      'Frankenstein: the creation',
    ],
  },
  {
    theme: 'Ambition',
    claim: "An ambitious figure's story reaches us second-hand, through another teller",
    texts: ['Macbeth', 'Frankenstein', 'Ozymandias', 'London (Blake)', 'Tissue'],
    correctTexts: ['Frankenstein', 'Ozymandias'],
    tier: 3,
    facts: ["Frankenstein: Walton's letters", 'Ozymandias: the traveller'],
  },
  {
    theme: 'Ambition',
    claim: 'An ambitious character is spurred on by a promise of future greatness',
    texts: ['Macbeth', 'Romeo and Juliet', 'Great Expectations', 'The Tempest', 'Ozymandias'],
    correctTexts: ['Macbeth', 'Great Expectations', 'The Tempest'],
    tier: 2,
    facts: [
      "Macbeth: the witches' prophecy",
      'Great Expectations: great expectations',
      "The Tempest: Antonio and Sebastian's plot",
      'Ozymandias: the inscription',
    ],
  },

  // ─── Redemption ───────────────────────────────────────────────────────────────
  {
    theme: 'Redemption',
    claim: 'A character who did wrong makes up for it with money or gifts',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Great Expectations',
      'Jane Eyre',
      'Frankenstein',
    ],
    correctTexts: ['A Christmas Carol', 'Great Expectations'],
    tier: 2,
    facts: [
      'A Christmas Carol: Christmas morning',
      "Great Expectations: Herbert's partnership",
      "Great Expectations: Miss Havisham's remorse",
      "An Inspector Calls: Birling's offer of money",
      'Jane Eyre: the inheritance',
    ],
  },
  {
    theme: 'Redemption',
    claim: 'Redemption comes only after losing sight, health or fortune',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
    ],
    correctTexts: ['Great Expectations', 'Jane Eyre'],
    tier: 2,
    facts: ['Jane Eyre: Rochester blinded', "Great Expectations: Pip's fever"],
  },
  {
    theme: 'Redemption',
    claim: 'A character is forgiven, or offered forgiveness, but shows no sign of changing',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Great Expectations',
      'Jane Eyre',
      'Frankenstein',
      'The Tempest',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Jane Eyre', 'The Tempest'],
    tier: 2,
    facts: [
      "The Tempest: Antonio's silence",
      "Jane Eyre: Mrs Reed's deathbed",
      "Great Expectations: Miss Havisham's remorse",
    ],
  },
  // ─── Good vs Evil ─────────────────────────────────────────────────────────────
  {
    theme: 'Good vs Evil',
    claim: 'Evil is presented as part of every human being, not an outside force',
    texts: [
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Lord of the Flies',
      'Jane Eyre',
      'Frankenstein',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Jekyll and Hyde', 'Lord of the Flies'],
    tier: 2,
    facts: [
      'Jekyll and Hyde: truly two',
      "Lord of the Flies: maybe it's only us",
      'Lord of the Flies: the end of innocence',
      'Frankenstein: misery made me a fiend',
      'Much Ado: Don John',
    ],
  },
  {
    theme: 'Good vs Evil',
    claim: 'Evil grows step by step: one wrong act leads to worse ones',
    texts: [
      'Macbeth',
      'Jekyll and Hyde',
      'Lord of the Flies',
      'Ozymandias',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'Jekyll and Hyde', 'Lord of the Flies'],
    tier: 2,
    facts: [
      "Macbeth: Duncan's murder",
      "Macbeth: Macduff's family",
      'Jekyll and Hyde: the trampling',
      'Jekyll and Hyde: the Carew murder',
      'Lord of the Flies: the hunt',
      "Lord of the Flies: Simon's death",
      "Lord of the Flies: Piggy's death",
      'idea: evil grows step by step',
    ],
  },
  {
    theme: 'Good vs Evil',
    claim: 'Goodness is shown to be helpless against evil',
    texts: [
      'A Christmas Carol',
      'Lord of the Flies',
      'Frankenstein',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
    ],
    correctTexts: ['Lord of the Flies', 'Frankenstein'],
    tier: 2,
    facts: [
      "Lord of the Flies: Simon's death",
      "Lord of the Flies: Piggy's death",
      'Frankenstein: Justine',
      'Frankenstein: the wedding night',
      'Much Ado: the Watch',
    ],
  },
  {
    theme: 'Good vs Evil',
    claim: "Evil takes the shape of something that may exist only in the characters' minds",
    texts: [
      'Macbeth',
      'Jekyll and Hyde',
      'Lord of the Flies',
      'Frankenstein',
      'The Tempest',
      'Ozymandias',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'Lord of the Flies'],
    tier: 3,
    facts: [
      'Lord of the Flies: the beast',
      'Lord of the Flies: the dead parachutist',
      'Macbeth: the dagger',
      "Macbeth: Banquo's ghost",
      'Jekyll and Hyde: the Carew murder',
    ],
  },

  // ─── Love and relationships ───────────────────────────────────────────────────
  {
    theme: 'Love and relationships',
    claim: 'Love at first sight leads quickly to a promise of marriage',
    texts: [
      'Macbeth',
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
      'Ozymandias',
    ],
    correctTexts: ['Romeo and Juliet', 'The Tempest'],
    tier: 2,
    facts: ['Romeo and Juliet: the balcony', 'The Tempest: Ferdinand and Miranda'],
  },
  {
    theme: 'Love and relationships',
    claim: 'Love is expressed through a shared sonnet or poems the lovers write',
    texts: [
      'Macbeth',
      'Romeo and Juliet',
      'Great Expectations',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Romeo and Juliet', 'Much Ado About Nothing'],
    tier: 3,
    facts: ['Romeo and Juliet: the shared sonnet', 'Much Ado: the sonnets'],
  },
  {
    theme: 'Love and relationships',
    claim: 'Love grows out of witty arguments between equals',
    texts: [
      'An Inspector Calls',
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Jane Eyre', 'Much Ado About Nothing'],
    tier: 2,
    facts: ['Much Ado: the merry war', 'Jane Eyre: do you think me handsome'],
  },
  {
    theme: 'Love and relationships',
    claim: 'A love affair crosses a divide of class or wealth',
    texts: [
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Great Expectations', 'Jane Eyre'],
    tier: 2,
    facts: [
      'Jane Eyre: rank and wealth sever us',
      'Jane Eyre: the inheritance',
      'Great Expectations: coarse hands',
      'Romeo and Juliet: the Prologue',
    ],
  },
  {
    theme: 'Love and relationships',
    claim: 'A character hides behind a mask or costume at a party',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Romeo and Juliet',
      'Jane Eyre',
      'Frankenstein',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Romeo and Juliet', 'Jane Eyre', 'Much Ado About Nothing'],
    tier: 1,
    facts: [
      'Much Ado: the masked ball',
      'Romeo and Juliet: the Capulet feast',
      'Jane Eyre: the gypsy',
      "Macbeth: Banquo's ghost",
    ],
  },
  {
    theme: 'Love and relationships',
    claim: 'A character is wrongly told that someone they love is dead',
    texts: [
      'Macbeth',
      'Romeo and Juliet',
      'Frankenstein',
      'The Tempest',
      'Much Ado About Nothing',
      'War Photographer',
    ],
    correctTexts: ['Romeo and Juliet', 'The Tempest', 'Much Ado About Nothing'],
    tier: 1,
    facts: [
      'The Tempest: the drowned son',
      "Much Ado: Hero's death",
      'Romeo and Juliet: the potion',
      "Macbeth: Macduff's family",
    ],
  },
  {
    theme: 'Love and relationships',
    claim: 'A wedding is interrupted or turned into a disaster',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Animal Farm',
      'Jane Eyre',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Romeo and Juliet', 'Jane Eyre', 'Much Ado About Nothing'],
    tier: 1,
    facts: ['Much Ado: the wedding', 'Jane Eyre: the impediment', 'Romeo and Juliet: the potion'],
  },
  {
    theme: 'Love and relationships',
    claim: 'A near-tragedy turns into a happy ending',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Romeo and Juliet',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['The Tempest', 'Much Ado About Nothing'],
    tier: 3,
    facts: [
      "Much Ado: Hero's death",
      'Much Ado: Kill Claudio',
      'Much Ado: the double wedding',
      "The Tempest: Antonio and Sebastian's plot",
      'The Tempest: virtue, not vengeance',
      'An Inspector Calls: the final phone call',
    ],
  },
  {
    theme: 'Love and relationships',
    claim: 'The story ends with a marriage that settles its conflicts',
    texts: [
      'An Inspector Calls',
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
      'London (Blake)',
    ],
    correctTexts: ['Jane Eyre', 'The Tempest', 'Much Ado About Nothing'],
    tier: 2,
    facts: [
      'Jane Eyre: Reader, I married him',
      'Much Ado: the double wedding',
      'The Tempest: Ferdinand and Miranda',
      'Great Expectations: eleven years later',
    ],
  },
  {
    theme: 'Love and relationships',
    claim: "The speed of young love is checked by an older character's caution",
    texts: ['Macbeth', 'Romeo and Juliet', 'Great Expectations', 'The Tempest', 'Ozymandias'],
    correctTexts: ['Romeo and Juliet', 'The Tempest'],
    tier: 3,
    facts: [
      'Romeo and Juliet: Wisely and slow',
      'The Tempest: this swift business',
      'The Tempest: Ferdinand and Miranda',
    ],
  },
  {
    theme: 'Love and relationships',
    claim: 'Lovers are parted for a long time before they meet again, changed',
    texts: [
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Great Expectations', 'Jane Eyre'],
    tier: 2,
    facts: [
      'Jane Eyre: the voice',
      'Jane Eyre: Rochester blinded',
      'Great Expectations: eleven years later',
    ],
  },
  {
    theme: 'Love and relationships',
    claim: "A lover's fancy language is mocked by a friend",
    texts: [
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
      'Tissue',
    ],
    correctTexts: ['Romeo and Juliet', 'Much Ado About Nothing'],
    tier: 3,
    facts: [
      "Romeo and Juliet: Mercutio mocks Romeo's love",
      "Much Ado: Benedick mocks Claudio's words",
    ],
  },

  // ─── Power and control ────────────────────────────────────────────────────────
  {
    theme: 'Power and control',
    claim: 'Power is held through fear of violence',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Lord of the Flies',
      'Animal Farm',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Macbeth', 'Lord of the Flies', 'Animal Farm'],
    tier: 2,
    facts: [
      'Animal Farm: the dogs',
      'Animal Farm: the executions',
      "Macbeth: Macduff's family",
      'Lord of the Flies: Castle Rock',
      'An Inspector Calls: the strike',
    ],
  },
  {
    theme: 'Power and control',
    claim: 'Human power is shown to be fragile and temporary',
    texts: ['Much Ado About Nothing', 'Ozymandias', 'London (Blake)', 'War Photographer', 'Tissue'],
    correctTexts: ['Ozymandias', 'Tissue'],
    tier: 2,
    facts: [
      'Ozymandias: the broken statue',
      'Ozymandias: the sands',
      'Tissue: paper buildings',
      'London: mind-forged manacles',
    ],
  },
  {
    theme: 'Power and control',
    claim: 'A circular ending suggests those in power will not change',
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Animal Farm',
      'Jane Eyre',
    ],
    correctTexts: ['An Inspector Calls', 'Animal Farm'],
    tier: 3,
    facts: [
      'Animal Farm: pigs and men',
      'An Inspector Calls: the final phone call',
      'An Inspector Calls: the young and the old',
    ],
  },
  {
    theme: 'Power and control',
    claim: "A powerful man's boasts are undercut by irony the reader or audience can see",
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
    ],
    correctTexts: ['An Inspector Calls', 'Ozymandias'],
    tier: 3,
    facts: [
      'Ozymandias: the inscription',
      'Ozymandias: Nothing beside remains',
      'An Inspector Calls: the Titanic speech',
    ],
  },
  {
    theme: 'Power and control',
    claim: 'Power over others comes from books, learning or knowledge',
    texts: [
      'Animal Farm',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Animal Farm', 'The Tempest'],
    tier: 2,
    facts: [
      "The Tempest: Prospero's books",
      'Animal Farm: reading and writing',
      'Animal Farm: Squealer and the Commandments',
      'Animal Farm: Boxer',
    ],
  },
  {
    theme: 'Power and control',
    claim: "A system of votes and debate gives way to a tyrant's rule",
    texts: ['Macbeth', 'Lord of the Flies', 'Animal Farm', 'The Tempest', 'Ozymandias'],
    correctTexts: ['Lord of the Flies', 'Animal Farm'],
    tier: 2,
    facts: [
      'Lord of the Flies: the conch and the vote',
      "Lord of the Flies: Piggy's death",
      'Animal Farm: Snowball expelled',
      'Animal Farm: the dogs',
    ],
  },
  {
    theme: 'Power and control',
    claim: 'A symbol of authority or order is broken or destroyed',
    texts: [
      'An Inspector Calls',
      'Lord of the Flies',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
    ],
    correctTexts: ['Lord of the Flies', 'The Tempest', 'Ozymandias'],
    tier: 3,
    facts: [
      "Lord of the Flies: Piggy's death",
      'Ozymandias: the broken statue',
      "The Tempest: Prospero's books",
      'London: church and palace',
    ],
  },
  {
    theme: 'Power and control',
    claim: 'Characters stand for wider groups or ideas, as in an allegory',
    texts: [
      'An Inspector Calls',
      'Romeo and Juliet',
      'Lord of the Flies',
      'Animal Farm',
      'Great Expectations',
      'Much Ado About Nothing',
    ],
    correctTexts: ['An Inspector Calls', 'Lord of the Flies', 'Animal Farm'],
    tier: 3,
    facts: ['form: fable, allegory or morality play'],
  },
  {
    theme: 'Power and control',
    claim: 'The powerful are shown to fear losing what they have',
    texts: ['Macbeth', 'An Inspector Calls', 'Animal Farm', 'Ozymandias', 'Tissue'],
    correctTexts: ['Macbeth', 'An Inspector Calls', 'Animal Farm'],
    tier: 2,
    facts: [
      'Macbeth: To be thus is nothing',
      'An Inspector Calls: the knighthood',
      'Animal Farm: the food taster',
      'Animal Farm: the dogs',
      'Ozymandias: the inscription',
    ],
  },
  {
    theme: 'Power and control',
    claim: 'Brothers are divided by a struggle for power',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Romeo and Juliet',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['The Tempest', 'Much Ado About Nothing'],
    tier: 2,
    facts: ["The Tempest: Antonio's usurpation", 'Much Ado: Don John'],
  },
  {
    theme: 'Power and control',
    claim: 'Words are twisted or rewritten to control or destroy others',
    texts: ['Animal Farm', 'Much Ado About Nothing', 'Ozymandias', 'War Photographer', 'Tissue'],
    correctTexts: ['Animal Farm', 'Much Ado About Nothing'],
    tier: 3,
    facts: [
      'Animal Farm: Squealer and the Commandments',
      "Much Ado: Hero's epitaph",
      'Much Ado: Don John',
    ],
  },

  // ─── Guilt and conscience ─────────────────────────────────────────────────────
  {
    theme: 'Guilt and conscience',
    claim: 'Guilt shows itself in what a character sees or hears that others cannot',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Jekyll and Hyde',
      'Lord of the Flies',
      'Animal Farm',
      'The Tempest',
    ],
    correctTexts: ['Macbeth', 'The Tempest'],
    tier: 3,
    facts: [
      'Macbeth: the dagger',
      "Macbeth: Banquo's ghost",
      "The Tempest: Alonso's guilt",
      "Lord of the Flies: the talking pig's head",
      'An Inspector Calls: the lighting',
    ],
  },
  {
    theme: 'Guilt and conscience',
    claim: 'Guilt shows itself in the body: in hands, sleep or health',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Jane Eyre',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Macbeth', 'Frankenstein', 'War Photographer'],
    tier: 2,
    facts: [
      'Macbeth: sleepwalking',
      'War Photographer: trembling hands',
      "Frankenstein: Victor's fever",
    ],
  },
  {
    theme: 'Guilt and conscience',
    claim: 'A character feels guilty for a death they did not directly cause',
    texts: ['An Inspector Calls', 'Jane Eyre', 'Frankenstein', 'Ozymandias', 'Tissue'],
    correctTexts: ['An Inspector Calls', 'Frankenstein'],
    tier: 2,
    facts: ['Frankenstein: Justine', 'An Inspector Calls: the chain of events'],
  },
  {
    theme: 'Guilt and conscience',
    claim: 'The audience or reader is made to share the guilt',
    texts: [
      'An Inspector Calls',
      'Great Expectations',
      'Jane Eyre',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['An Inspector Calls', 'War Photographer'],
    tier: 3,
    facts: [
      "An Inspector Calls: the Inspector's last speech",
      "War Photographer: the readers' Sunday",
    ],
  },
  {
    theme: 'Guilt and conscience',
    claim: 'Only some of the guilty accept their guilt by the end',
    texts: ['A Christmas Carol', 'An Inspector Calls', 'The Tempest', 'Ozymandias', 'Tissue'],
    correctTexts: ['An Inspector Calls', 'The Tempest'],
    tier: 3,
    facts: [
      'An Inspector Calls: the young and the old',
      "The Tempest: Alonso's guilt",
      "The Tempest: Antonio's silence",
    ],
  },
  {
    theme: 'Guilt and conscience',
    claim: 'One setting and an unbroken stretch of time trap the guilty together',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Jekyll and Hyde',
      'Romeo and Juliet',
      'The Tempest',
    ],
    correctTexts: ['An Inspector Calls', 'The Tempest'],
    tier: 3,
    facts: ['form: one place, one stretch of time'],
  },
  {
    theme: 'Guilt and conscience',
    claim: "A character's guilt begins with a theft",
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Great Expectations',
      'Jane Eyre',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['An Inspector Calls', 'Great Expectations'],
    tier: 1,
    facts: ['Great Expectations: stolen food', "An Inspector Calls: Eric's theft"],
  },
  // ─── The supernatural ─────────────────────────────────────────────────────────
  {
    theme: 'The supernatural',
    claim: 'A ghost of the dead appears to warn or accuse the living',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Frankenstein',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Macbeth', 'A Christmas Carol'],
    tier: 1,
    facts: ["Macbeth: Banquo's ghost", "A Christmas Carol: Marley's ghost"],
  },
  {
    theme: 'The supernatural',
    claim: 'Science, not magic, produces the horror',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Jane Eyre',
      'Frankenstein',
      'The Tempest',
    ],
    correctTexts: ['Jekyll and Hyde', 'Frankenstein'],
    tier: 3,
    facts: [
      'Frankenstein: the creation',
      'Jekyll and Hyde: the potion',
      "The Tempest: Prospero's books",
    ],
  },
  {
    theme: 'The supernatural',
    claim: 'The supernatural leads a character towards good',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Jane Eyre',
      'Frankenstein',
      'The Tempest',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['A Christmas Carol', 'Jane Eyre', 'The Tempest'],
    tier: 2,
    facts: [
      'A Christmas Carol: the three spirits',
      'Jane Eyre: the voice',
      "The Tempest: Ariel's pity",
    ],
  },
  {
    theme: 'The supernatural',
    claim: 'The supernatural is there from the very first scene, before anything else happens',
    texts: ['Macbeth', 'Jekyll and Hyde', 'Jane Eyre', 'Frankenstein', 'The Tempest'],
    correctTexts: ['Macbeth', 'The Tempest'],
    tier: 3,
    facts: ['Macbeth: Fair is foul', 'The Tempest: the storm', 'Jane Eyre: the red-room'],
  },
  {
    theme: 'The supernatural',
    claim: 'Spirits show a character visions of what is to come',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Macbeth', 'A Christmas Carol'],
    tier: 1,
    facts: ['Macbeth: the apparitions', 'A Christmas Carol: the future and the grave'],
  },
  {
    theme: 'The supernatural',
    claim: 'A character tries to explain the supernatural away',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Jane Eyre',
      'The Tempest',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Macbeth', 'A Christmas Carol', 'Jane Eyre'],
    tier: 2,
    facts: [
      'A Christmas Carol: undigested beef',
      "Macbeth: Banquo's ghost",
      'Jane Eyre: the red-room',
    ],
  },

  // ─── Isolation and loneliness ─────────────────────────────────────────────────
  {
    theme: 'Isolation and loneliness',
    claim: 'A character chooses isolation to keep a secret',
    texts: [
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Jekyll and Hyde', 'Frankenstein'],
    tier: 2,
    facts: [
      'Jekyll and Hyde: the cabinet',
      'Frankenstein: the creation',
      "Frankenstein: Victor's secret work",
      'Jane Eyre: Gateshead',
    ],
  },
  {
    theme: 'Isolation and loneliness',
    claim: 'An outsider is rejected because of how they look',
    texts: [
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Jekyll and Hyde', 'Frankenstein'],
    tier: 2,
    facts: ['Frankenstein: the creature rejected', "Jekyll and Hyde: Hyde's deformity"],
  },
  {
    theme: 'Isolation and loneliness',
    claim: 'Isolation ends in a return to family and community',
    texts: ['A Christmas Carol', 'Jekyll and Hyde', 'Jane Eyre', 'Ozymandias', 'War Photographer'],
    correctTexts: ['A Christmas Carol', 'Jane Eyre'],
    tier: 3,
    facts: [
      "A Christmas Carol: dinner at Fred's",
      'A Christmas Carol: second father',
      'Jane Eyre: the Rivers cousins',
      'Jane Eyre: the inheritance',
      "Frankenstein: Victor's death",
    ],
  },
  {
    theme: 'Isolation and loneliness',
    claim: "A lonely figure watches other people's warmth from outside",
    texts: [
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Jane Eyre',
      'Frankenstein',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
    ],
    correctTexts: ['A Christmas Carol', 'Jane Eyre', 'Frankenstein'],
    tier: 3,
    facts: [
      'Frankenstein: the De Laceys',
      'A Christmas Carol: watching unseen',
      "A Christmas Carol: the Cratchits' Christmas",
      'Jane Eyre: the window-seat',
    ],
  },
  {
    theme: 'Isolation and loneliness',
    claim: 'A character is driven out of a home that should have sheltered them',
    texts: [
      'Jekyll and Hyde',
      'Jane Eyre',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Jane Eyre', 'Frankenstein'],
    tier: 2,
    facts: [
      'Frankenstein: the De Laceys',
      'Frankenstein: the creature rejected',
      'Jane Eyre: Gateshead',
    ],
  },
  {
    theme: 'Isolation and loneliness',
    claim: 'A child is sent away to school and left lonely there',
    texts: [
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Jane Eyre',
      'Frankenstein',
      'War Photographer',
    ],
    correctTexts: ['A Christmas Carol', 'Jane Eyre'],
    tier: 1,
    facts: ['A Christmas Carol: the lonely schoolboy', 'Jane Eyre: Gateshead', 'Jane Eyre: Lowood'],
  },

  // ─── Conflict and violence ────────────────────────────────────────────────────
  {
    theme: 'Conflict and violence',
    claim: 'Violence excites those who commit it',
    texts: [
      'Jekyll and Hyde',
      'Lord of the Flies',
      'The Tempest',
      'Much Ado About Nothing',
      'War Photographer',
    ],
    correctTexts: ['Jekyll and Hyde', 'Lord of the Flies'],
    tier: 2,
    facts: [
      'Lord of the Flies: the hunt',
      'Jekyll and Hyde: a transport of glee',
      'Animal Farm: the Battle of the Cowshed',
    ],
  },
  {
    theme: 'Conflict and violence',
    claim: 'The central act of violence happens out of sight and is reported',
    texts: [
      'Macbeth',
      'Jekyll and Hyde',
      'Romeo and Juliet',
      'Lord of the Flies',
      'Animal Farm',
      'Ozymandias',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'Jekyll and Hyde', 'War Photographer'],
    tier: 3,
    facts: [
      "Macbeth: Duncan's murder",
      'Jekyll and Hyde: the Carew murder',
      'Jekyll and Hyde: the trampling',
      'War Photographer: the face in the tray',
      "Lord of the Flies: Simon's death",
      "Lord of the Flies: Piggy's death",
      'Animal Farm: the executions',
    ],
  },
  {
    theme: 'Conflict and violence',
    claim: 'War in the background explains the violence',
    texts: [
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Romeo and Juliet',
      'Lord of the Flies',
      'War Photographer',
    ],
    correctTexts: ['Lord of the Flies', 'War Photographer'],
    tier: 3,
    facts: ['Lord of the Flies: the dead parachutist', 'War Photographer: the war cities'],
  },
  {
    theme: 'Conflict and violence',
    claim: 'Violence harms the person who commits it',
    texts: [
      'Macbeth',
      'Jekyll and Hyde',
      'Romeo and Juliet',
      'Ozymandias',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'Jekyll and Hyde', 'Romeo and Juliet'],
    tier: 2,
    facts: [
      'Macbeth: full of scorpions',
      'Jekyll and Hyde: losing control',
      "Romeo and Juliet: fortune's fool",
      "Romeo and Juliet: Mercutio's death",
    ],
  },
  {
    theme: 'Conflict and violence',
    claim: "A battle is described with admiration for the fighters' courage",
    texts: ['Macbeth', 'Jekyll and Hyde', 'Romeo and Juliet', 'Animal Farm', 'War Photographer'],
    correctTexts: ['Macbeth', 'Animal Farm'],
    tier: 2,
    facts: ["Macbeth: the Captain's report", 'Animal Farm: the Battle of the Cowshed'],
  },
  {
    theme: 'Conflict and violence',
    claim: 'A peacemaker tries to stop the fighting and fails',
    texts: [
      'Macbeth',
      'Jekyll and Hyde',
      'Romeo and Juliet',
      'Lord of the Flies',
      'Animal Farm',
      'War Photographer',
    ],
    correctTexts: ['Romeo and Juliet', 'Lord of the Flies'],
    tier: 2,
    facts: [
      'Romeo and Juliet: the opening brawl',
      "Romeo and Juliet: Mercutio's death",
      "Lord of the Flies: Piggy's death",
    ],
  },
  {
    theme: 'Conflict and violence',
    claim: 'The story opens in the middle of, or just after, a fight or battle',
    texts: [
      'Macbeth',
      'Jekyll and Hyde',
      'Romeo and Juliet',
      'Animal Farm',
      'Ozymandias',
      'London (Blake)',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'Romeo and Juliet'],
    tier: 1,
    facts: [
      'Romeo and Juliet: the opening brawl',
      "Macbeth: the Captain's report",
      'Macbeth: Fair is foul',
    ],
  },
  {
    theme: 'Conflict and violence',
    claim: 'Its view of violence is shaped by the Second World War, which its writer lived through',
    texts: [
      'Macbeth',
      'Jekyll and Hyde',
      'Romeo and Juliet',
      'Lord of the Flies',
      'Animal Farm',
      'War Photographer',
    ],
    correctTexts: ['Lord of the Flies', 'Animal Farm'],
    tier: 3,
    facts: ['context: the Second World War'],
  },
  // ─── Appearance vs Reality ────────────────────────────────────────────────────
  {
    theme: 'Appearance vs Reality',
    claim: 'Evil hides behind a respectable or innocent face',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Great Expectations',
      'Frankenstein',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'Jekyll and Hyde', 'Great Expectations'],
    tier: 2,
    facts: [
      'Macbeth: the innocent flower',
      "Jekyll and Hyde: Jekyll's respectability",
      'Jekyll and Hyde: the trampling',
      'Great Expectations: Compeyson',
    ],
  },
  {
    theme: 'Appearance vs Reality',
    claim: 'A feast or celebration is ruined by a guilty secret coming out',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Romeo and Juliet',
      'The Tempest',
      'Ozymandias',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'An Inspector Calls', 'The Tempest'],
    tier: 1,
    facts: [
      "Macbeth: Banquo's ghost",
      'An Inspector Calls: the engagement dinner',
      'The Tempest: the harpy and the banquet',
    ],
  },
  {
    theme: 'Appearance vs Reality',
    claim: 'A character lives two lives, one public and one hidden',
    texts: [
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Great Expectations',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Jekyll and Hyde', 'Great Expectations'],
    tier: 2,
    facts: ['Jekyll and Hyde: two lives', 'Great Expectations: Wemmick'],
  },
  {
    theme: 'Appearance vs Reality',
    claim: 'Clothes that do not fit show a character in the wrong role',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Jekyll and Hyde',
      'Romeo and Juliet',
      'Great Expectations',
      'The Tempest',
      'Ozymandias',
    ],
    correctTexts: ['Macbeth', 'Jekyll and Hyde', 'Great Expectations', 'The Tempest'],
    tier: 3,
    facts: [
      'Macbeth: borrowed robes',
      'Jekyll and Hyde: clothes too large',
      "Great Expectations: Joe's visit",
      'The Tempest: the stolen clothes',
    ],
  },
  {
    theme: 'Appearance vs Reality',
    claim: 'Reputation is protected by keeping silent about a scandal',
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Jekyll and Hyde',
      'The Tempest',
      'Ozymandias',
    ],
    correctTexts: ['An Inspector Calls', 'Jekyll and Hyde'],
    tier: 2,
    facts: ['Jekyll and Hyde: the bargain of silence', 'An Inspector Calls: the scandal'],
  },
  {
    theme: 'Appearance vs Reality',
    claim: 'Characters judge others by their faces, and get it wrong',
    texts: [
      'Macbeth',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
    ],
    correctTexts: ['Macbeth', 'The Tempest', 'Much Ado About Nothing'],
    tier: 2,
    facts: [
      "Macbeth: no art to find the mind's construction",
      'Much Ado: how like a maid she blushes',
      'The Tempest: brave new world',
      'Ozymandias: the sculptor',
      'London: marks of weakness, marks of woe',
    ],
  },
  {
    theme: 'Appearance vs Reality',
    claim: 'A key truth is withheld until near the end to create mystery',
    texts: [
      'An Inspector Calls',
      'Jekyll and Hyde',
      'Romeo and Juliet',
      'Great Expectations',
      'Frankenstein',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['An Inspector Calls', 'Jekyll and Hyde', 'Great Expectations'],
    tier: 3,
    facts: [
      "Jekyll and Hyde: Jekyll's statement",
      'Great Expectations: Magwitch returns',
      "An Inspector Calls: Eric's part",
      'Romeo and Juliet: the Prologue',
      "Frankenstein: Walton's letters",
    ],
  },
  {
    theme: 'Appearance vs Reality',
    claim: 'Life itself is compared to a play or a dream',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Great Expectations',
      'The Tempest',
      'Much Ado About Nothing',
      'London (Blake)',
    ],
    correctTexts: ['Macbeth', 'The Tempest'],
    tier: 3,
    facts: ['Macbeth: a poor player', 'The Tempest: such stuff as dreams'],
  },
  {
    theme: 'Appearance vs Reality',
    claim: 'Light threatens to expose what a character wants hidden',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
      'London (Blake)',
    ],
    correctTexts: ['Macbeth', 'An Inspector Calls'],
    tier: 3,
    facts: ['An Inspector Calls: the lighting', 'Macbeth: Let not light see'],
  },

  // ─── Family and duty ──────────────────────────────────────────────────────────
  {
    theme: 'Family and duty',
    claim: 'A family is shown to be loving, though it is poor',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Great Expectations',
    ],
    correctTexts: ['A Christmas Carol', 'Great Expectations'],
    tier: 2,
    facts: [
      "A Christmas Carol: the Cratchits' Christmas",
      'Great Expectations: Joe',
      'Great Expectations: eleven years later',
    ],
  },
  {
    theme: 'Family and duty',
    claim: 'The younger generation is shown to be wiser than the older',
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Lord of the Flies',
      'Great Expectations',
      'The Tempest',
    ],
    correctTexts: ['A Christmas Carol', 'An Inspector Calls'],
    tier: 2,
    facts: ['An Inspector Calls: the young and the old', 'A Christmas Carol: Fred'],
  },
  {
    theme: 'Family and duty',
    claim: "A parent's plans for a child's marriage are about money or status",
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Great Expectations',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['An Inspector Calls', 'Romeo and Juliet'],
    tier: 2,
    facts: [
      'Romeo and Juliet: Paris',
      'An Inspector Calls: the engagement dinner',
      'Great Expectations: Break their hearts',
    ],
  },
  {
    theme: 'Family and duty',
    claim: "A family meal becomes the stage for the family's tensions",
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Great Expectations',
      'Much Ado About Nothing',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['An Inspector Calls', 'Great Expectations'],
    tier: 2,
    facts: [
      'An Inspector Calls: the engagement dinner',
      'Great Expectations: the Christmas dinner',
    ],
  },

  // ─── Justice and morality ─────────────────────────────────────────────────────
  {
    theme: 'Justice and morality',
    claim: 'Mercy is chosen over revenge',
    texts: [
      'Macbeth',
      'Animal Farm',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Great Expectations', 'Jane Eyre', 'The Tempest'],
    tier: 2,
    facts: [
      'The Tempest: virtue, not vengeance',
      "Jane Eyre: Mrs Reed's deathbed",
      "Great Expectations: Miss Havisham's remorse",
    ],
  },
  {
    theme: 'Justice and morality',
    claim: 'A figure of religion or charity is exposed as a hypocrite',
    texts: ['Macbeth', 'A Christmas Carol', 'An Inspector Calls', 'Jane Eyre', 'The Tempest'],
    correctTexts: ['An Inspector Calls', 'Jane Eyre'],
    tier: 2,
    facts: [
      'Jane Eyre: Brocklehurst',
      'An Inspector Calls: the charity committee',
      'A Christmas Carol: the charity collectors',
    ],
  },
  {
    theme: 'Justice and morality',
    claim: 'A character speaks for the writer, delivering the moral lesson directly',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Much Ado About Nothing',
      'Ozymandias',
    ],
    correctTexts: ['A Christmas Carol', 'An Inspector Calls'],
    tier: 3,
    facts: [
      "An Inspector Calls: the Inspector's last speech",
      "A Christmas Carol: Marley's ghost",
      'A Christmas Carol: Ignorance and Want',
    ],
  },
  {
    theme: 'Justice and morality',
    claim: "A speech of judgement names each wrongdoer's crime in turn",
    texts: ['A Christmas Carol', 'An Inspector Calls', 'Jane Eyre', 'The Tempest', 'Ozymandias'],
    correctTexts: ['An Inspector Calls', 'The Tempest'],
    tier: 3,
    facts: [
      "An Inspector Calls: the Inspector's last speech",
      "The Tempest: Prospero's judgement",
      "The Tempest: Antonio's usurpation",
      'Jane Eyre: Arraigned at my own bar',
    ],
  },
  {
    theme: 'Justice and morality',
    claim: 'A court or committee treats people differently according to their class',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Great Expectations',
      'The Tempest',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['An Inspector Calls', 'Great Expectations'],
    tier: 2,
    facts: ['Great Expectations: Compeyson', 'An Inspector Calls: the charity committee'],
  },

  // ─── Identity and self-discovery ──────────────────────────────────────────────
  {
    theme: 'Identity and self-discovery',
    claim: 'A character takes a false name to hide who they are',
    texts: [
      'A Christmas Carol',
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
      'Frankenstein',
      'The Tempest',
    ],
    correctTexts: ['Great Expectations', 'Jane Eyre'],
    tier: 1,
    facts: ['Great Expectations: Provis', 'Jane Eyre: Jane Elliott'],
  },
  {
    theme: 'Identity and self-discovery',
    claim: 'A character discovers a family link or origin they never suspected',
    texts: [
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Great Expectations',
      'Jane Eyre',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Great Expectations', 'Jane Eyre', 'Frankenstein'],
    tier: 2,
    facts: [
      'Jane Eyre: the Rivers cousins',
      'Jane Eyre: the inheritance',
      "Great Expectations: Estella's parents",
      'Frankenstein: the journal',
    ],
  },
  {
    theme: 'Identity and self-discovery',
    claim: 'Self-discovery comes through leaving home and travelling',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Jekyll and Hyde',
      'Great Expectations',
      'Jane Eyre',
      'Tissue',
    ],
    correctTexts: ['Great Expectations', 'Jane Eyre'],
    tier: 2,
    facts: [
      'Jane Eyre: from Gateshead to Ferndean',
      'Great Expectations: from the forge to London',
    ],
  },
  {
    theme: 'Identity and self-discovery',
    claim: "A character's sense of self is shaped by the names others call them",
    texts: [
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Great Expectations',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Great Expectations', 'Frankenstein'],
    tier: 2,
    facts: [
      'Frankenstein: Was I then a monster',
      'Great Expectations: coarse hands',
      'Great Expectations: common labouring-boy',
    ],
  },
  // ─── Nature and the environment ───────────────────────────────────────────────
  {
    theme: 'Nature and the environment',
    claim: 'A storm breaks at the moment of a killing',
    texts: [
      'Macbeth',
      'Jekyll and Hyde',
      'Lord of the Flies',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
    ],
    correctTexts: ['Macbeth', 'Lord of the Flies'],
    tier: 2,
    facts: [
      "Lord of the Flies: Simon's death",
      'Macbeth: nature in disorder',
      'Jane Eyre: the proposal',
      'The Tempest: the storm',
      'Jekyll and Hyde: the Carew murder',
      'Great Expectations: Magwitch returns',
    ],
  },
  {
    theme: 'Nature and the environment',
    claim: 'Nature is shown as a healing, comforting force',
    texts: ['Jekyll and Hyde', 'Frankenstein', 'The Tempest', 'Ozymandias', 'London (Blake)'],
    correctTexts: ['Frankenstein', 'The Tempest'],
    tier: 2,
    facts: [
      'Frankenstein: the Alps',
      'The Tempest: the isle is full of noises',
      'London: chartered',
    ],
  },
  {
    theme: 'Nature and the environment',
    claim: 'Even land, rivers or streets are owned and controlled by the powerful',
    texts: [
      'Macbeth',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['The Tempest', 'London (Blake)', 'Tissue'],
    tier: 2,
    facts: [
      'London: chartered',
      "The Tempest: Caliban's island",
      'Tissue: maps and borderlines',
      'Ozymandias: the sands',
    ],
  },
  {
    theme: 'Nature and the environment',
    claim: 'An island cut off from the world is the main setting',
    texts: [
      'Macbeth',
      'Lord of the Flies',
      'The Tempest',
      'Ozymandias',
      'London (Blake)',
      'Tissue',
    ],
    correctTexts: ['Lord of the Flies', 'The Tempest'],
    tier: 1,
    facts: ['Lord of the Flies: the island', "The Tempest: Caliban's island"],
  },
  {
    theme: 'Nature and the environment',
    claim: "A Romantic writer shows nature's vastness dwarfing human ambition",
    texts: ['Macbeth', 'Frankenstein', 'Ozymandias', 'London (Blake)', 'Tissue'],
    correctTexts: ['Frankenstein', 'Ozymandias'],
    tier: 3,
    facts: ['context: the Romantics', 'Frankenstein: the Alps', 'Ozymandias: the sands'],
  },
  {
    theme: 'Nature and the environment',
    claim: 'Fire changes from a source of warmth or hope into a force of destruction',
    texts: [
      'Lord of the Flies',
      'Frankenstein',
      'The Tempest',
      'Ozymandias',
      'London (Blake)',
      'Tissue',
    ],
    correctTexts: ['Lord of the Flies', 'Frankenstein'],
    tier: 3,
    facts: [
      'Lord of the Flies: the signal fire',
      'Frankenstein: fire',
      'Frankenstein: the De Laceys',
    ],
  },

  // ─── Corruption of innocence ──────────────────────────────────────────────────
  {
    theme: 'Corruption of innocence',
    claim: 'Cruelty is learned: a young or newly made being is taught it by others',
    texts: [
      'Macbeth',
      'Jekyll and Hyde',
      'Great Expectations',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Great Expectations', 'Frankenstein'],
    tier: 2,
    facts: [
      'Great Expectations: Break their hearts',
      'Great Expectations: I am what you have made me',
      'Frankenstein: misery made me a fiend',
    ],
  },
  {
    theme: 'Corruption of innocence',
    claim: 'Children are shown as victims of adult society',
    texts: [
      'A Christmas Carol',
      'Great Expectations',
      'Much Ado About Nothing',
      'Ozymandias',
      'London (Blake)',
      'Tissue',
    ],
    correctTexts: ['A Christmas Carol', 'Great Expectations', 'London (Blake)'],
    tier: 2,
    facts: [
      'London: the chimney-sweeper and the infant',
      'A Christmas Carol: Ignorance and Want',
      "Great Expectations: Magwitch's story",
    ],
  },
  {
    theme: 'Corruption of innocence',
    claim: 'Corruption spreads from those in power down to the powerless',
    texts: [
      'Macbeth',
      'Jekyll and Hyde',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'London (Blake)'],
    tier: 2,
    facts: [
      'London: church and palace',
      'London: chartered',
      'London: the chimney-sweeper and the infant',
      'Macbeth: Bleed, poor country',
    ],
  },
  {
    theme: 'Corruption of innocence',
    claim: "Innocence is lost as in Adam and Eve's fall from paradise",
    texts: [
      'A Christmas Carol',
      'Romeo and Juliet',
      'Lord of the Flies',
      'Frankenstein',
      'Ozymandias',
    ],
    correctTexts: ['Lord of the Flies', 'Frankenstein'],
    tier: 3,
    facts: [
      'Lord of the Flies: the island',
      'Lord of the Flies: the end of innocence',
      'Frankenstein: thy Adam',
    ],
  },
  {
    theme: 'Corruption of innocence',
    claim: 'Love of money pushes out love of people',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Lord of the Flies',
      'Great Expectations',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['A Christmas Carol', 'Great Expectations'],
    tier: 2,
    facts: ['A Christmas Carol: Belle', 'Great Expectations: Joe'],
  },

  // ─── Fate vs Free will ────────────────────────────────────────────────────────
  {
    theme: 'Fate vs Free will',
    claim: 'A character blames fate for what their own choices caused',
    texts: [
      'An Inspector Calls',
      'Romeo and Juliet',
      'Great Expectations',
      'Frankenstein',
      'The Tempest',
    ],
    correctTexts: ['Romeo and Juliet', 'Frankenstein'],
    tier: 2,
    facts: ["Romeo and Juliet: fortune's fool", 'Frankenstein: Destiny was too potent'],
  },
  {
    theme: 'Fate vs Free will',
    claim: 'The ending is made clear at the start, so we watch how, not what, happens',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Jekyll and Hyde',
      'Romeo and Juliet',
      'Great Expectations',
      'Frankenstein',
    ],
    correctTexts: ['Romeo and Juliet', 'Frankenstein'],
    tier: 3,
    facts: [
      'Romeo and Juliet: the Prologue',
      "Frankenstein: Walton's letters",
      'Frankenstein: nothing can alter my destiny',
    ],
  },
  {
    theme: 'Fate vs Free will',
    claim: 'A character dares fate to fight them',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Frankenstein',
      'The Tempest',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'Romeo and Juliet'],
    tier: 2,
    facts: ['Romeo and Juliet: I defy you, stars', 'Macbeth: come, fate, into the list'],
  },
  {
    theme: 'Fate vs Free will',
    claim: 'A prophecy or threat comes true in a way the character did not expect',
    texts: ['Macbeth', 'A Christmas Carol', 'Great Expectations', 'Frankenstein', 'The Tempest'],
    correctTexts: ['Macbeth', 'Frankenstein'],
    tier: 2,
    facts: [
      'Macbeth: the apparitions',
      'Macbeth: untimely ripped',
      'Frankenstein: the wedding night',
      'A Christmas Carol: the future and the grave',
    ],
  },

  // ─── Revolution and rebellion ─────────────────────────────────────────────────
  {
    theme: 'Revolution and rebellion',
    claim: 'A rebellion against one master ends with a new master just as bad, or worse',
    texts: ['An Inspector Calls', 'Animal Farm', 'The Tempest', 'Ozymandias', 'London (Blake)'],
    correctTexts: ['Animal Farm', 'The Tempest'],
    tier: 2,
    facts: ['Animal Farm: pigs and men', "The Tempest: Caliban's new master"],
  },
  {
    theme: 'Revolution and rebellion',
    claim: "A real revolution of the writer's time shapes the text",
    texts: ['Macbeth', 'Animal Farm', 'The Tempest', 'London (Blake)', 'Tissue'],
    correctTexts: ['Animal Farm', 'London (Blake)'],
    tier: 3,
    facts: ['context: the Russian Revolution', 'context: the French Revolution'],
  },
  {
    theme: 'Revolution and rebellion',
    claim: 'Workers who strike or protest are crushed',
    texts: ['Macbeth', 'A Christmas Carol', 'An Inspector Calls', 'Animal Farm', 'London (Blake)'],
    correctTexts: ['An Inspector Calls', 'Animal Farm'],
    tier: 1,
    facts: ['An Inspector Calls: the strike', 'Animal Farm: the hens'],
  },
  {
    theme: 'Revolution and rebellion',
    claim: 'A song spreads the spirit of rebellion',
    texts: ['Macbeth', 'An Inspector Calls', 'Animal Farm', 'The Tempest', 'Ozymandias'],
    correctTexts: ['Animal Farm', 'The Tempest'],
    tier: 1,
    facts: ['Animal Farm: Old Major and Beasts of England', "The Tempest: Caliban's new master"],
  },
  {
    theme: 'Revolution and rebellion',
    claim: 'Those in power mock or punish anyone who calls for change',
    texts: ['An Inspector Calls', 'Animal Farm', 'The Tempest', 'Ozymandias', 'London (Blake)'],
    correctTexts: ['An Inspector Calls', 'Animal Farm', 'The Tempest'],
    tier: 2,
    facts: [
      'An Inspector Calls: community and all that nonsense',
      'An Inspector Calls: the strike',
      'Animal Farm: the executions',
      'The Tempest: Caliban punished',
    ],
  },

  // ─── Memory and the past ──────────────────────────────────────────────────────
  {
    theme: 'Memory and the past',
    claim: 'The past is relived through images that bring it back',
    texts: [
      'A Christmas Carol',
      'Romeo and Juliet',
      'Much Ado About Nothing',
      'London (Blake)',
      'War Photographer',
    ],
    correctTexts: ['A Christmas Carol', 'War Photographer'],
    tier: 2,
    facts: [
      'War Photographer: the face in the tray',
      'A Christmas Carol: the lonely schoolboy',
      'A Christmas Carol: Belle',
    ],
  },
  {
    theme: 'Memory and the past',
    claim: "The past reaches us second-hand, through someone else's account",
    texts: ['A Christmas Carol', 'Great Expectations', 'Ozymandias', 'London (Blake)'],
    correctTexts: ['Great Expectations', 'Ozymandias'],
    tier: 3,
    facts: ['Ozymandias: the traveller', "Great Expectations: Magwitch's story"],
  },
  {
    theme: 'Memory and the past',
    claim: "Fragile records hold the memory of ordinary people's lives",
    texts: ['Macbeth', 'Ozymandias', 'London (Blake)', 'War Photographer', 'Tissue'],
    correctTexts: ['War Photographer', 'Tissue'],
    tier: 3,
    facts: ["Tissue: the Koran's records", 'War Photographer: spools of suffering'],
  },
  {
    theme: 'Memory and the past',
    claim: 'Childhood memories are shown to shape the adult',
    texts: ['A Christmas Carol', 'Great Expectations', 'Ozymandias', 'War Photographer', 'Tissue'],
    correctTexts: ['A Christmas Carol', 'Great Expectations'],
    tier: 2,
    facts: [
      'A Christmas Carol: the lonely schoolboy',
      'Great Expectations: the convict in the churchyard',
    ],
  },

  // ─── Science and responsibility ───────────────────────────────────────────────
  {
    theme: 'Science and responsibility',
    claim: "A secret is pieced together from letters, statements and other people's accounts",
    texts: ['Macbeth', 'A Christmas Carol', 'Jekyll and Hyde', 'Frankenstein', 'Ozymandias'],
    correctTexts: ['Jekyll and Hyde', 'Frankenstein'],
    tier: 3,
    facts: [
      'form: documents and nested narratives',
      "Jekyll and Hyde: Jekyll's statement",
      "Frankenstein: Walton's letters",
    ],
  },
  {
    theme: 'Science and responsibility',
    claim: 'A maker refuses responsibility for what he has made, and others pay for it',
    texts: [
      'An Inspector Calls',
      'Jekyll and Hyde',
      'Great Expectations',
      'Frankenstein',
      'The Tempest',
    ],
    correctTexts: ['Jekyll and Hyde', 'Frankenstein'],
    tier: 2,
    facts: [
      'Frankenstein: Victor abandons the creature',
      'Jekyll and Hyde: That child of Hell',
      'The Tempest: this thing of darkness',
      "Great Expectations: I've made a gentleman",
    ],
  },

  // ─── Gender roles: claims only, so no theme list to keep them to ──────────────
  {
    theme: 'Gender roles',
    claim: 'A woman challenges what her society expects of women',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Animal Farm',
      'Jane Eyre',
      'Much Ado About Nothing',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Macbeth', 'Jane Eyre', 'Much Ado About Nothing'],
    tier: 2,
    facts: [
      'Jane Eyre: women feel just as men feel',
      'Much Ado: other metal than earth',
      'Macbeth: unsex me here',
    ],
  },
  {
    theme: 'Gender roles',
    claim: 'A woman at the heart of the plot never speaks for herself',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Jane Eyre',
      'Frankenstein',
      'Much Ado About Nothing',
    ],
    correctTexts: ['An Inspector Calls', 'Jane Eyre'],
    tier: 3,
    facts: ['An Inspector Calls: Eva never seen', 'Jane Eyre: Bertha'],
  },
  {
    theme: 'Gender roles',
    claim: "A woman questions a man's courage to push him into action",
    texts: ['Macbeth', 'An Inspector Calls', 'Jane Eyre', 'Frankenstein', 'Much Ado About Nothing'],
    correctTexts: ['Macbeth', 'Much Ado About Nothing'],
    tier: 2,
    facts: [
      'Macbeth: When you durst do it',
      'Much Ado: Kill Claudio',
      'Much Ado: manhood is melted',
    ],
  },
  {
    theme: 'Gender roles',
    claim: 'A man who shows feeling is mocked, or fears he is less of a man',
    texts: [
      'Macbeth',
      'Romeo and Juliet',
      'Jane Eyre',
      'Frankenstein',
      'Ozymandias',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Macbeth', 'Romeo and Juliet'],
    tier: 3,
    facts: ['Macbeth: feel it as a man', 'Romeo and Juliet: made me effeminate'],
  },
  {
    theme: 'Gender roles',
    claim: "A father tries to choose his daughter's husband",
    texts: [
      'Macbeth',
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Romeo and Juliet', 'The Tempest', 'Much Ado About Nothing'],
    tier: 2,
    facts: [
      'Romeo and Juliet: Paris',
      'The Tempest: Ferdinand and Miranda',
      'Much Ado: you know your answer',
    ],
  },
  {
    theme: 'Gender roles',
    claim: 'A powerful woman is presented as unnatural or monstrous',
    texts: ['Macbeth', 'A Christmas Carol', 'Romeo and Juliet', 'The Tempest', 'Ozymandias'],
    correctTexts: ['Macbeth', 'The Tempest'],
    tier: 3,
    facts: ['Macbeth: fiend-like queen', 'The Tempest: Sycorax'],
  },
  {
    theme: 'Gender roles',
    claim: 'A father would rather lose his daughter than his honour',
    texts: [
      'An Inspector Calls',
      'Romeo and Juliet',
      'Jane Eyre',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Romeo and Juliet', 'Much Ado About Nothing'],
    tier: 2,
    facts: [
      'Much Ado: Do not live, Hero',
      'Romeo and Juliet: die in the streets',
      'The Tempest: in care of thee',
    ],
  },
  {
    theme: 'Gender roles',
    claim: 'A woman refuses to marry a man she does not love, despite heavy pressure',
    texts: [
      'Macbeth',
      'Romeo and Juliet',
      'Jane Eyre',
      'Frankenstein',
      'The Tempest',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Romeo and Juliet', 'Jane Eyre'],
    tier: 2,
    facts: ['Romeo and Juliet: die in the streets', 'Jane Eyre: St John'],
  },

  // ─── Religion and faith: claims only ──────────────────────────────────────────
  {
    theme: 'Religion and faith',
    claim: 'Organised religion is shown as a tool of those in power',
    texts: ['Animal Farm', 'Jane Eyre', 'London (Blake)', 'War Photographer', 'Tissue'],
    correctTexts: ['Animal Farm', 'Jane Eyre', 'London (Blake)'],
    tier: 2,
    facts: ['Animal Farm: Moses', 'Jane Eyre: Brocklehurst', 'London: church and palace'],
  },
  {
    theme: 'Religion and faith',
    claim: 'Religious words give dignity to someone who has died',
    texts: ['Animal Farm', 'Great Expectations', 'Jane Eyre', 'London (Blake)', 'War Photographer'],
    correctTexts: ['Great Expectations', 'Jane Eyre', 'War Photographer'],
    tier: 3,
    facts: [
      'War Photographer: the darkroom church',
      'Jane Eyre: Helen Burns',
      "Great Expectations: Magwitch's death",
      'Animal Farm: Boxer',
    ],
  },
  {
    theme: 'Religion and faith',
    claim: 'Love is presented as a kind of worship',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Jane Eyre',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Romeo and Juliet', 'Jane Eyre'],
    tier: 3,
    facts: ['Romeo and Juliet: the shared sonnet', 'Jane Eyre: an idol'],
  },
  // ─── More rounds, many playable on the smaller boards' texts (24 October 2026) ─
  {
    theme: 'Guilt and conscience',
    claim: 'A character pushes the blame for a death onto someone else',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Frankenstein',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
    ],
    correctTexts: ['Macbeth', 'An Inspector Calls', 'Frankenstein'],
    tier: 2,
    facts: [
      'Macbeth: the grooms framed',
      'An Inspector Calls: Go and look for the father',
      'Frankenstein: Justine',
    ],
  },
  {
    theme: 'Guilt and conscience',
    claim: 'Guilt comes to light when a character is questioned or overheard',
    texts: ['Macbeth', 'An Inspector Calls', 'Ozymandias', 'London (Blake)', 'War Photographer'],
    correctTexts: ['Macbeth', 'An Inspector Calls'],
    tier: 2,
    facts: ['Macbeth: sleepwalking', "An Inspector Calls: the Inspector's questions"],
  },
  {
    theme: 'Family and duty',
    claim: 'A father fails to understand his own child',
    texts: ['Macbeth', 'An Inspector Calls', 'Romeo and Juliet', 'Ozymandias', 'War Photographer'],
    correctTexts: ['An Inspector Calls', 'Romeo and Juliet'],
    tier: 2,
    facts: [
      'An Inspector Calls: not the kind of father',
      "Romeo and Juliet: Capulet's rage",
      "Macbeth: Macduff's family",
    ],
  },
  {
    theme: 'Conflict and violence',
    claim: 'A character is killed in revenge for a killing',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
    ],
    correctTexts: ['Macbeth', 'Romeo and Juliet'],
    tier: 1,
    facts: [
      "Romeo and Juliet: Mercutio's death",
      "Macbeth: Macbeth's death",
      "Macbeth: Macduff's family",
    ],
  },
  {
    theme: 'Corruption of innocence',
    claim: 'Innocence is destroyed by those who should protect it',
    texts: ['Macbeth', 'Great Expectations', 'Ozymandias', 'London (Blake)', 'Tissue'],
    correctTexts: ['Macbeth', 'Great Expectations', 'London (Blake)'],
    tier: 2,
    facts: [
      "Macbeth: Duncan's murder",
      "Macbeth: Macduff's family",
      'Great Expectations: Break their hearts',
      'London: the chimney-sweeper and the infant',
    ],
  },
  {
    theme: 'Corruption of innocence',
    claim: "A character's goodness is worn away step by step",
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Romeo and Juliet',
      'Lord of the Flies',
      'Much Ado About Nothing',
      'Ozymandias',
    ],
    correctTexts: ['Macbeth', 'A Christmas Carol', 'Lord of the Flies'],
    tier: 2,
    facts: [
      'Macbeth: fiend-like queen',
      'A Christmas Carol: Belle',
      'Lord of the Flies: the piglet',
      'idea: evil grows step by step',
    ],
  },
  {
    theme: 'Fate vs Free will',
    claim: 'Haste is shown to be dangerous: characters act before they think',
    texts: ['Macbeth', 'Romeo and Juliet', 'Great Expectations', 'Ozymandias', 'War Photographer'],
    correctTexts: ['Macbeth', 'Romeo and Juliet'],
    tier: 2,
    facts: ['Romeo and Juliet: too rash', "Macbeth: Macduff's family", 'Macbeth: the firstlings'],
  },
  {
    theme: 'Revolution and rebellion',
    claim: 'A writer warns that injustice will end in bloodshed if nothing changes',
    texts: [
      'An Inspector Calls',
      'Great Expectations',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
    ],
    correctTexts: ['An Inspector Calls', 'London (Blake)'],
    tier: 3,
    facts: [
      "An Inspector Calls: the Inspector's last speech",
      'London: church and palace',
      'context: the French Revolution',
    ],
  },
  {
    theme: 'Love and relationships',
    claim: 'Love is presented as painful and destructive',
    texts: ['Romeo and Juliet', 'Great Expectations', 'Ozymandias', 'War Photographer', 'Tissue'],
    correctTexts: ['Romeo and Juliet', 'Great Expectations'],
    tier: 2,
    facts: ['Romeo and Juliet: violent delights', 'Great Expectations: against reason'],
  },
  {
    theme: 'Love and relationships',
    claim: 'Love is tested by a deliberate trick before it is allowed to succeed',
    texts: [
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Jane Eyre', 'The Tempest'],
    tier: 2,
    facts: [
      'Jane Eyre: the gypsy',
      'Jane Eyre: Blanche Ingram',
      'The Tempest: this swift business',
    ],
  },
  {
    theme: 'Love and relationships',
    claim: 'A wedding takes place quietly or in secret, with hardly any witnesses',
    texts: ['Macbeth', 'Romeo and Juliet', 'Jane Eyre', 'The Tempest', 'Much Ado About Nothing'],
    correctTexts: ['Romeo and Juliet', 'Jane Eyre'],
    tier: 1,
    facts: ['Romeo and Juliet: the secret wedding', 'Jane Eyre: Reader, I married him'],
  },
  {
    theme: 'Isolation and loneliness',
    claim: "A character's loneliness is eased by an unexpected friendship",
    texts: ['Jane Eyre', 'Frankenstein', 'Ozymandias', 'London (Blake)', 'War Photographer'],
    correctTexts: ['Jane Eyre', 'Frankenstein'],
    tier: 2,
    facts: ['Jane Eyre: Helen Burns', "Frankenstein: Walton's letters"],
  },
  {
    theme: 'Religion and faith',
    claim: 'Faith gives a character the courage to face death calmly',
    texts: ['Romeo and Juliet', 'Jane Eyre', 'Frankenstein', 'Ozymandias', 'Tissue'],
    correctTexts: ['Jane Eyre', 'Frankenstein'],
    tier: 2,
    facts: ['Jane Eyre: Helen Burns', 'Frankenstein: Justine'],
  },
  {
    theme: 'Redemption',
    claim: 'A character proves they have changed by caring for someone they once wronged',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Great Expectations',
      'Jane Eyre',
      'Ozymandias',
    ],
    correctTexts: ['A Christmas Carol', 'Great Expectations'],
    tier: 2,
    facts: [
      'A Christmas Carol: second father',
      'A Christmas Carol: Christmas morning',
      "Great Expectations: Magwitch's death",
    ],
  },
  {
    theme: 'Good vs Evil',
    claim: 'Goodness is shown in kindness to those who cannot repay it',
    texts: ['Lord of the Flies', 'Frankenstein', 'Ozymandias', 'War Photographer', 'Tissue'],
    correctTexts: ['Lord of the Flies', 'Frankenstein'],
    tier: 2,
    facts: [
      'Lord of the Flies: Simon helps the littluns',
      'Frankenstein: the De Laceys',
      'Frankenstein: the drowning girl',
    ],
  },
  {
    theme: 'Identity and self-discovery',
    claim: 'A character tries to become someone else and loses who they were',
    texts: ['Jekyll and Hyde', 'Great Expectations', 'Jane Eyre', 'War Photographer', 'Tissue'],
    correctTexts: ['Jekyll and Hyde', 'Great Expectations'],
    tier: 2,
    facts: [
      'Jekyll and Hyde: losing control',
      'Great Expectations: from the forge to London',
      'Jane Eyre: I care for myself',
    ],
  },
  {
    theme: 'Social inequality',
    claim: 'A child stands for a whole class of suffering people',
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Animal Farm',
      'Jane Eyre',
      'London (Blake)',
    ],
    correctTexts: ['A Christmas Carol', 'London (Blake)'],
    tier: 3,
    facts: ['A Christmas Carol: Ignorance and Want', 'London: the chimney-sweeper and the infant'],
  },
  {
    theme: 'Power and control',
    claim: 'A dead ruler is remembered with contempt',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Ozymandias',
      'London (Blake)',
      'War Photographer',
    ],
    correctTexts: ['Macbeth', 'Ozymandias'],
    tier: 2,
    facts: ['Macbeth: fiend-like queen', 'Ozymandias: the sculptor'],
  },
  {
    theme: 'Death and mortality',
    claim: 'Sleep is presented as an image of death',
    texts: [
      'Macbeth',
      'An Inspector Calls',
      'Jekyll and Hyde',
      'Romeo and Juliet',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Macbeth', 'Romeo and Juliet', 'The Tempest'],
    tier: 3,
    facts: [
      'Macbeth: the sleeping and the dead',
      'Romeo and Juliet: the potion',
      'The Tempest: such stuff as dreams',
    ],
  },
  {
    theme: 'Death and mortality',
    claim: 'A character glimpses their own death before it comes',
    texts: [
      'A Christmas Carol',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Jane Eyre',
      'Much Ado About Nothing',
    ],
    correctTexts: ['A Christmas Carol', 'Romeo and Juliet'],
    tier: 1,
    facts: ['A Christmas Carol: the future and the grave', 'Romeo and Juliet: the dream of death'],
  },
  {
    theme: 'Love and relationships',
    claim: 'A character falls in love with someone from an enemy family',
    texts: [
      'An Inspector Calls',
      'Romeo and Juliet',
      'Great Expectations',
      'Jane Eyre',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['Romeo and Juliet', 'The Tempest'],
    tier: 2,
    facts: ['Romeo and Juliet: the Capulet feast', 'The Tempest: Ferdinand and Miranda'],
  },
  {
    theme: 'Guilt and conscience',
    claim: "Guilt shows in a character's fear of being found out",
    texts: ['Macbeth', 'A Christmas Carol', 'Great Expectations', 'Ozymandias', 'War Photographer'],
    correctTexts: ['Macbeth', 'Great Expectations'],
    tier: 2,
    facts: ['Macbeth: every noise appals me', 'Great Expectations: stolen food'],
  },
  {
    theme: 'Justice and morality',
    claim: 'The law is shown to be harsh on the poor',
    texts: ['Macbeth', 'A Christmas Carol', 'Great Expectations', 'Jane Eyre', 'The Tempest'],
    correctTexts: ['A Christmas Carol', 'Great Expectations'],
    tier: 2,
    facts: [
      "Great Expectations: Magwitch's story",
      "Great Expectations: Magwitch's death",
      'A Christmas Carol: the charity collectors',
    ],
  },
  {
    theme: 'Religion and faith',
    claim: "Words from the Bible give a writer's protest its authority",
    texts: ['Macbeth', 'An Inspector Calls', 'Romeo and Juliet', 'War Photographer', 'Tissue'],
    correctTexts: ['An Inspector Calls', 'War Photographer'],
    tier: 3,
    facts: [
      'War Photographer: the darkroom church',
      "An Inspector Calls: the Inspector's last speech",
    ],
  },
  {
    theme: 'Death and mortality',
    claim: 'A character dies of grief',
    texts: [
      'A Christmas Carol',
      'Romeo and Juliet',
      'Great Expectations',
      'Frankenstein',
      'The Tempest',
    ],
    correctTexts: ['Romeo and Juliet', 'Frankenstein'],
    tier: 1,
    facts: ['Romeo and Juliet: Lady Montague', "Frankenstein: Victor's father"],
  },
  {
    theme: 'The supernatural',
    claim: 'A character makes a promise to a supernatural being',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'Jekyll and Hyde',
      'The Tempest',
      'Much Ado About Nothing',
    ],
    correctTexts: ['A Christmas Carol', 'The Tempest'],
    tier: 1,
    facts: ["The Tempest: Ariel's freedom", 'A Christmas Carol: the future and the grave'],
  },
  {
    theme: 'The supernatural',
    claim: 'A spirit is presented as gentle or childlike, not frightening',
    texts: [
      'A Christmas Carol',
      'Jekyll and Hyde',
      'Frankenstein',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
    ],
    correctTexts: ['A Christmas Carol', 'The Tempest'],
    tier: 2,
    facts: ['A Christmas Carol: the Ghost of Christmas Past', "The Tempest: Ariel's freedom"],
  },
  {
    theme: 'Appearance vs Reality',
    claim: 'A scene is staged on purpose to fool or move the characters watching it',
    texts: ['The Tempest', 'Much Ado About Nothing', 'Ozymandias', 'London (Blake)', 'Tissue'],
    correctTexts: ['The Tempest', 'Much Ado About Nothing'],
    tier: 3,
    facts: [
      'Much Ado: the gulling scenes',
      'Much Ado: the window',
      'The Tempest: the harpy and the banquet',
      'The Tempest: the masque',
    ],
  },
  {
    theme: 'Family and duty',
    claim: 'Important events take place on Christmas Eve or Christmas Day',
    texts: [
      'Macbeth',
      'A Christmas Carol',
      'An Inspector Calls',
      'Romeo and Juliet',
      'Great Expectations',
      'Frankenstein',
    ],
    correctTexts: ['A Christmas Carol', 'Great Expectations'],
    tier: 1,
    facts: [
      'A Christmas Carol: Christmas morning',
      'Great Expectations: stolen food',
      'Great Expectations: the Christmas dinner',
    ],
  },
  {
    theme: 'Appearance vs Reality',
    claim: 'A deception is used for a good purpose',
    texts: [
      'Jekyll and Hyde',
      'Great Expectations',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
      'War Photographer',
    ],
    correctTexts: ['Great Expectations', 'The Tempest', 'Much Ado About Nothing'],
    tier: 2,
    facts: [
      'The Tempest: the harpy and the banquet',
      "Much Ado: Hero's death",
      'Much Ado: the gulling scenes',
      "Great Expectations: Herbert's partnership",
    ],
  },
  {
    theme: 'Gender roles',
    claim: 'A woman speaks out against how men treat women',
    texts: [
      'Jane Eyre',
      'The Tempest',
      'Much Ado About Nothing',
      'Ozymandias',
      'War Photographer',
      'Tissue',
    ],
    correctTexts: ['Jane Eyre', 'Much Ado About Nothing'],
    tier: 2,
    facts: ['Jane Eyre: women feel just as men feel', 'Much Ado: manhood is melted'],
  },
  {
    theme: 'Appearance vs Reality',
    claim: 'A detective figure pieces the truth together from clues',
    texts: ['Macbeth', 'An Inspector Calls', 'Jekyll and Hyde', 'The Tempest', 'Ozymandias'],
    correctTexts: ['An Inspector Calls', 'Jekyll and Hyde'],
    tier: 3,
    facts: ["An Inspector Calls: the Inspector's questions", 'Jekyll and Hyde: Mr Seek'],
  },
]

export const BANK: GameBank<ThemeRound> = {
  slug: 'theme-matcher',
  items: THEME_DATA,
  // A theme's prompt is its name; a claim's is the claim. Each is shown once.
  key: (r) => r.claim ?? r.theme,
  answer: (r) => r.correctTexts.join(', '),
  // The student selects any number of texts from the grid, so no question has
  // a fixed list of options with one of them right.
  options: () => null,
  tag: (r) => r.theme,
  tier: (r) => r.tier,
  // Its theme, so two rounds of one theme are never dealt together, and the
  // moments its explanation names.
  facts: (r) => [`theme: ${r.theme}`, ...(r.facts ?? [])],
  deepened: '2026-10-24',
}
