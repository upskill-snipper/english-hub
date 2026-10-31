import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Dictionary Skills: four kinds of question about using a dictionary, mixed in
 * a round by the page, four of alphabetical order, four of guide words, four
 * of meanings and three of word classes. The items of each kind are in their
 * own list below, joined into one, BANK.items, in that order.
 *
 * Moved out of src/app/games/dictionary-skills/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations, and
 * checking them, 16 October 2026).
 *
 *   - The alphabetical-order question planet, plaster, plank, platform was
 *     marked plank. Planet and plank both begin "plan", so the fifth letter
 *     decides, and e comes before k: planet is first. The marked answer is now
 *     planet.
 *   - The right definition was the longest of the four in 10 of the 14, so
 *     always choosing the longest scored about 75%. The wrong definitions were
 *     rewritten to lengths around the right one's; the right ones did not
 *     change. The definition of gleam was kept: Merriam-Webster's first sense
 *     is "to shine with or as if with subdued steady light".
 *   - The guide-words answers used a spaced hyphen as a dash; they read 'Yes,
 *     "casual" is on this page'.
 *
 * REBUILT FOR DEPTH (24 October 2026). The audit (.tmp-games-audit/
 * REPORT-ks3.md) found 57 questions, all recall; "Yes" right in 9 of the 14
 * guide-words questions, and a student who answered No only when a word's
 * first letter differed from the guide words' scored 80 per cent there; and
 * twelve words recurring across the kinds (vacant, vivid, meadow, frost and
 * fragment among them), so one question could answer another. It now holds
 * 212, every one with a tier:
 *
 *   - Alphabetical order, 52 (18 at tier 1, 19 at 2, 15 at 3). New: which
 *     word comes LAST (`last`), and at tier 3 the cases students get wrong: a
 *     short word that begins a longer one comes first ("nothing before
 *     something": cart before carton), and words alike to the fifth letter or
 *     beyond (presence, present, preserve, president).
 *   - Guide words, 54 (15, 23 and 16 by tier). Each now has three answers,
 *     on this page, on an earlier page or on a later page, since a dictionary
 *     user must know which way to turn, and a rebuilt bank needs three
 *     options (src/__tests__/a-game-question-takes-knowing.test.ts); the
 *     three are shuffled. They are balanced: 19 on the page, 18 earlier and
 *     17 later, where "Yes" had been right in 9 of the 14. Every new word
 *     shares its first letter with its guide words, so the first-letter short
 *     cut fails; tier 3 asks about a guide word itself (it is on its own
 *     page) and the "nothing before something" cases (car is not on the page
 *     card to cargo). The page's hint for guide words now says a page holds
 *     every word from its left guide word to its right one, since the old one
 *     ("must come after the left guide word") was wrong for a guide word
 *     itself.
 *   - Meanings, 62 (16, 23 and 23 by tier). New: the meaning a word has in
 *     a sentence (`sentence`), its wrong options the word's other dictionary
 *     senses, as the audit proposed ("In 'a sharp reply', sharp means": harsh
 *     and critical / having a fine edge / exactly on time / quick to notice).
 *     23 at tier 2 in the site's own sentences; 23 at tier 3 in real lines
 *     from texts out of UK copyright (src/data/full-texts), copied exactly,
 *     each with its `source`, where the word has an older or less common
 *     sense: a fair wind, a mean street, Mont Blanc in awful majesty, strange
 *     and unexpected intelligence, a captious and insolent carriage.
 *   - Word classes, 44 (15, 17 and 12 by tier). Adverb is now a fourth
 *     option (adv.), so a question can ask about often, soon or indoors, and
 *     an -ly word can be an adjective (friendly, lonely, costly). New at tier 2: a word in the class
 *     students do not expect (dock, book and water as verbs; a sigh); at tier
 *     3, real lines where the class must be worked out (the cold within
 *     Scrooge, a noun; "The said Eliza", an adjective; "the only creature").
 *
 * The page still deals the same fixed mix by kind (src/app/games/
 * dictionary-skills/page.tsx). Every question names its headwords as facts
 * (BANK.facts), so no two questions that show the same word share a round.
 *
 * CHECKED (24 October 2026) by a second reader, every question, with each
 * alphabetical and guide-word answer worked out again letter by letter and
 * every real line found word for word in src/data/full-texts:
 *
 *   - the blue mood's answer said "low in spirits", which told a student what
 *     Elizabeth's spirits are in the Pride and Prejudice question: it is now
 *     "low in mood";
 *   - the civil housekeeper's answer alone named the scene ("to the
 *     visitors") among general senses: now "in her manner";
 *   - three real lines stop mid-sentence (Pip's humour, Jane's raw twilight,
 *     "The said Eliza") and now end in an ellipsis, as the other games mark a
 *     cut;
 *   - "taking a walk" and "no lies" are tier 2, not 3: an article or "no"
 *     before the word settles its class, as in the tier-2 "a deep sigh".
 */

export type Subtype = 'alpha' | 'guide' | 'define' | 'pos'

/** 1 recall, 2 applying the skill to a harder case, 3 the hardest cases and real lines (GameBank.tier). */
export type Tier = 1 | 2 | 3

export interface AlphaItem {
  type: 'alpha'
  words: [string, string, string, string]
  /** The word that comes first alphabetically, or last where `last` is set */
  answer: string
  /** The question asks which word comes last (added 24 October 2026). */
  last?: true
  tier: Tier
}

export interface GuideItem {
  type: 'guide'
  left: string
  right: string
  word: string
  /**
   * True if `word` falls between `left` and `right` on the page, either
   * included; where false, guideAnswer says which way to turn.
   */
  answer: boolean
  tier: Tier
}

export interface DefineItem {
  type: 'define'
  word: string
  /** Correct definition */
  answer: string
  /** Three plausible but wrong definitions */
  distractors: [string, string, string]
  tier: Tier
  /**
   * A sentence the word is used in; the question asks what it means there,
   * and the wrong options are the word's other senses (added 24 October 2026).
   */
  sentence?: string
  /** Where a real sentence comes from, shown under it. */
  source?: string
}

export interface PosItem {
  type: 'pos'
  word: string
  example: string
  answer: 'n.' | 'v.' | 'adj.' | 'adv.'
  tier: Tier
  /** Where a real sentence comes from, shown with it. */
  source?: string
}

export type BankItem = AlphaItem | GuideItem | DefineItem | PosItem

export const ALPHA_BANK: AlphaItem[] = [
  { type: 'alpha', words: ['orchard', 'ocean', 'olive', 'oyster'], answer: 'ocean', tier: 1 },
  { type: 'alpha', words: ['breeze', 'brick', 'branch', 'bridge'], answer: 'branch', tier: 2 },
  { type: 'alpha', words: ['carpet', 'cabin', 'cellar', 'clutch'], answer: 'cabin', tier: 2 },
  { type: 'alpha', words: ['stream', 'storm', 'stone', 'stove'], answer: 'stone', tier: 2 },
  { type: 'alpha', words: ['planet', 'plaster', 'plank', 'platform'], answer: 'planet', tier: 3 },
  { type: 'alpha', words: ['frost', 'fragment', 'frame', 'freckle'], answer: 'fragment', tier: 2 },
  { type: 'alpha', words: ['thunder', 'thimble', 'thorn', 'throne'], answer: 'thimble', tier: 2 },
  { type: 'alpha', words: ['velvet', 'vacant', 'vessel', 'vivid'], answer: 'vacant', tier: 1 },
  { type: 'alpha', words: ['gravel', 'glance', 'glory', 'grain'], answer: 'glance', tier: 2 },
  { type: 'alpha', words: ['mirror', 'meadow', 'mingle', 'mosaic'], answer: 'meadow', tier: 1 },
  { type: 'alpha', words: ['ribbon', 'rhythm', 'rescue', 'ripple'], answer: 'rescue', tier: 1 },
  { type: 'alpha', words: ['shadow', 'shallow', 'shatter', 'shelter'], answer: 'shadow', tier: 2 },
  { type: 'alpha', words: ['drizzle', 'drama', 'driftwood', 'drowsy'], answer: 'drama', tier: 2 },
  { type: 'alpha', words: ['anchor', 'amber', 'apron', 'awning'], answer: 'amber', tier: 1 },
  // Added 24 October 2026. Tier 1: the first or second letter decides.
  { type: 'alpha', words: ['quarrel', 'pigeon', 'orbit', 'nectar'], answer: 'nectar', tier: 1 },
  { type: 'alpha', words: ['walrus', 'umbrella', 'timber', 'vulture'], answer: 'timber', tier: 1 },
  {
    type: 'alpha',
    words: ['dolphin', 'cobweb', 'engine', 'beacon'],
    answer: 'engine',
    last: true,
    tier: 1,
  },
  {
    type: 'alpha',
    words: ['satchel', 'quiver', 'rhubarb', 'puddle'],
    answer: 'satchel',
    last: true,
    tier: 1,
  },
  { type: 'alpha', words: ['tunnel', 'tangle', 'tremor', 'timid'], answer: 'tangle', tier: 1 },
  { type: 'alpha', words: ['pulse', 'plume', 'prism', 'peril'], answer: 'peril', tier: 1 },
  { type: 'alpha', words: ['cactus', 'crumb', 'citrus', 'comet'], answer: 'cactus', tier: 1 },
  {
    type: 'alpha',
    words: ['glimmer', 'gargoyle', 'gutter', 'gecko'],
    answer: 'gutter',
    last: true,
    tier: 1,
  },
  { type: 'alpha', words: ['hurdle', 'hamlet', 'hinge', 'helmet'], answer: 'hamlet', tier: 1 },
  {
    type: 'alpha',
    words: ['mammoth', 'mischief', 'muffin', 'meteor'],
    answer: 'muffin',
    last: true,
    tier: 1,
  },
  { type: 'alpha', words: ['sombre', 'sapling', 'sundial', 'spindle'], answer: 'sapling', tier: 1 },
  { type: 'alpha', words: ['blossom', 'bargain', 'biscuit', 'buckle'], answer: 'bargain', tier: 1 },
  {
    type: 'alpha',
    words: ['radish', 'rumble', 'robin', 'recipe'],
    answer: 'rumble',
    last: true,
    tier: 1,
  },
  // Tier 2: the third or fourth letter decides.
  { type: 'alpha', words: ['spark', 'spade', 'spill', 'sponge'], answer: 'spade', tier: 2 },
  { type: 'alpha', words: ['crest', 'crater', 'crimson', 'crouch'], answer: 'crater', tier: 2 },
  {
    type: 'alpha',
    words: ['stencil', 'stem', 'stew', 'steep'],
    answer: 'stew',
    last: true,
    tier: 2,
  },
  { type: 'alpha', words: ['glimpse', 'glossy', 'glider', 'gladly'], answer: 'gladly', tier: 2 },
  {
    type: 'alpha',
    words: ['trowel', 'tribe', 'treaty', 'trance'],
    answer: 'trowel',
    last: true,
    tier: 2,
  },
  { type: 'alpha', words: ['banquet', 'bandage', 'banner', 'bangle'], answer: 'bandage', tier: 2 },
  {
    type: 'alpha',
    words: ['moorland', 'monster', 'mortar', 'mosquito'],
    answer: 'monster',
    tier: 2,
  },
  { type: 'alpha', words: ['plumber', 'pluck', 'plunge', 'plural'], answer: 'pluck', tier: 2 },
  { type: 'alpha', words: ['scrape', 'screech', 'scroll', 'scruffy'], answer: 'scrape', tier: 2 },
  {
    type: 'alpha',
    words: ['lanyard', 'landmark', 'language', 'lanky'],
    answer: 'lanyard',
    last: true,
    tier: 2,
  },
  { type: 'alpha', words: ['loose', 'lose', 'lost', 'loss'], answer: 'loose', tier: 2 },
  // Tier 3: a word that begins another, or words alike to the fifth letter and beyond.
  {
    type: 'alpha',
    words: ['stare', 'star', 'starling', 'startle'],
    answer: 'startle',
    last: true,
    tier: 3,
  },
  { type: 'alpha', words: ['nothing', 'note', 'notch', 'noted'], answer: 'notch', tier: 3 },
  { type: 'alpha', words: ['carton', 'cart', 'carol', 'carrot'], answer: 'carol', tier: 3 },
  {
    type: 'alpha',
    words: ['personal', 'person', 'persuade', 'perspire'],
    answer: 'persuade',
    last: true,
    tier: 3,
  },
  {
    type: 'alpha',
    words: ['present', 'preserve', 'president', 'presence'],
    answer: 'presence',
    tier: 3,
  },
  {
    type: 'alpha',
    words: ['conserve', 'consider', 'consist', 'console'],
    answer: 'console',
    last: true,
    tier: 3,
  },
  {
    type: 'alpha',
    words: ['desert', 'dessert', 'deserve', 'design'],
    answer: 'dessert',
    last: true,
    tier: 3,
  },
  {
    type: 'alpha',
    words: ['stationary', 'stationery', 'station', 'statistic'],
    answer: 'statistic',
    last: true,
    tier: 3,
  },
  { type: 'alpha', words: ['ever', 'evening', 'event', 'eventual'], answer: 'evening', tier: 3 },
  {
    type: 'alpha',
    words: ['thorough', 'through', 'though', 'thought'],
    answer: 'thorough',
    tier: 3,
  },
  {
    type: 'alpha',
    words: ['compliment', 'complement', 'complete', 'complex'],
    answer: 'compliment',
    last: true,
    tier: 3,
  },
  {
    type: 'alpha',
    words: ['practise', 'practice', 'practical', 'practically'],
    answer: 'practical',
    tier: 3,
  },
  {
    type: 'alpha',
    words: ['beneath', 'benefit', 'bench', 'beneficial'],
    answer: 'benefit',
    last: true,
    tier: 3,
  },
  { type: 'alpha', words: ['chimney', 'chime', 'chirp', 'chisel'], answer: 'chime', tier: 3 },
]

export const GUIDE_BANK: GuideItem[] = [
  { type: 'guide', left: 'castle', right: 'cattle', word: 'casual', answer: true, tier: 2 },
  { type: 'guide', left: 'garden', right: 'gather', word: 'garlic', answer: true, tier: 2 },
  { type: 'guide', left: 'pebble', right: 'pepper', word: 'pencil', answer: true, tier: 2 },
  { type: 'guide', left: 'lemon', right: 'lever', word: 'mango', answer: false, tier: 1 },
  { type: 'guide', left: 'frost', right: 'fungus', word: 'fragment', answer: false, tier: 2 },
  { type: 'guide', left: 'marble', right: 'meadow', word: 'mayhem', answer: true, tier: 2 },
  { type: 'guide', left: 'noble', right: 'novel', word: 'nostril', answer: true, tier: 2 },
  { type: 'guide', left: 'sail', right: 'salt', word: 'scarf', answer: false, tier: 1 },
  { type: 'guide', left: 'tablet', right: 'talent', word: 'tackle', answer: true, tier: 2 },
  { type: 'guide', left: 'velvet', right: 'vessel', word: 'venom', answer: true, tier: 2 },
  { type: 'guide', left: 'brave', right: 'breeze', word: 'broom', answer: false, tier: 2 },
  { type: 'guide', left: 'orchard', right: 'ostrich', word: 'oregano', answer: true, tier: 2 },
  { type: 'guide', left: 'hammer', right: 'harvest', word: 'happen', answer: true, tier: 2 },
  { type: 'guide', left: 'dusk', right: 'dwell', word: 'cradle', answer: false, tier: 1 },
  // Added 24 October 2026: every word shares its guide words' first letter.
  // Tier 1: the second or third letter decides.
  { type: 'guide', left: 'badge', right: 'bait', word: 'bubble', answer: false, tier: 1 },
  { type: 'guide', left: 'magpie', right: 'mammal', word: 'mackerel', answer: false, tier: 1 },
  { type: 'guide', left: 'tadpole', right: 'tame', word: 'tulip', answer: false, tier: 1 },
  { type: 'guide', left: 'fable', right: 'false', word: 'fairy', answer: true, tier: 1 },
  { type: 'guide', left: 'lobster', right: 'lodge', word: 'legend', answer: false, tier: 1 },
  { type: 'guide', left: 'rabbit', right: 'rally', word: 'raft', answer: true, tier: 1 },
  { type: 'guide', left: 'nettle', right: 'newt', word: 'nugget', answer: false, tier: 1 },
  { type: 'guide', left: 'jacket', right: 'jangle', word: 'jigsaw', answer: false, tier: 1 },
  { type: 'guide', left: 'wafer', right: 'walnut', word: 'waddle', answer: false, tier: 1 },
  { type: 'guide', left: 'dagger', right: 'damp', word: 'decimal', answer: false, tier: 1 },
  { type: 'guide', left: 'gable', right: 'gamble', word: 'gabble', answer: false, tier: 2 },
  { type: 'guide', left: 'cockle', right: 'coffee', word: 'cabbage', answer: false, tier: 1 },
  { type: 'guide', left: 'pigment', right: 'pirate', word: 'pickle', answer: false, tier: 1 },
  // Tier 2: the fourth letter decides, or the word is checked against both guide words.
  { type: 'guide', left: 'parcel', right: 'pastry', word: 'parade', answer: false, tier: 2 },
  { type: 'guide', left: 'tempest', right: 'tendon', word: 'telescope', answer: false, tier: 2 },
  { type: 'guide', left: 'goblin', right: 'gondola', word: 'gorilla', answer: false, tier: 2 },
  { type: 'guide', left: 'shiver', right: 'shoulder', word: 'shrimp', answer: false, tier: 2 },
  { type: 'guide', left: 'cobble', right: 'collar', word: 'cobalt', answer: false, tier: 2 },
  { type: 'guide', left: 'meddle', right: 'mellow', word: 'melon', answer: false, tier: 2 },
  { type: 'guide', left: 'winter', right: 'wizard', word: 'wizened', answer: false, tier: 2 },
  { type: 'guide', left: 'inform', right: 'inhale', word: 'inflate', answer: false, tier: 2 },
  { type: 'guide', left: 'seam', right: 'seaside', word: 'seat', answer: false, tier: 2 },
  { type: 'guide', left: 'dinner', right: 'dinosaur', word: 'dine', answer: false, tier: 2 },
  { type: 'guide', left: 'cushion', right: 'custard', word: 'curtain', answer: false, tier: 2 },
  // Tier 3: a guide word itself, a word that begins another, letters five and beyond.
  { type: 'guide', left: 'canal', right: 'candle', word: 'canal', answer: true, tier: 3 },
  { type: 'guide', left: 'honey', right: 'hood', word: 'hood', answer: true, tier: 3 },
  { type: 'guide', left: 'card', right: 'cargo', word: 'car', answer: false, tier: 3 },
  { type: 'guide', left: 'pea', right: 'peach', word: 'peace', answer: true, tier: 3 },
  { type: 'guide', left: 'fortune', right: 'forum', word: 'fort', answer: false, tier: 3 },
  { type: 'guide', left: 'hand', right: 'handle', word: 'handbag', answer: true, tier: 3 },
  { type: 'guide', left: 'plump', right: 'plunder', word: 'plum', answer: false, tier: 3 },
  { type: 'guide', left: 'ample', right: 'amuse', word: 'amplify', answer: true, tier: 3 },
  { type: 'guide', left: 'boulder', right: 'bounce', word: 'bound', answer: false, tier: 3 },
  { type: 'guide', left: 'crime', right: 'crisp', word: 'crimp', answer: true, tier: 3 },
  {
    type: 'guide',
    left: 'lighthouse',
    right: 'lightning',
    word: 'lightly',
    answer: true,
    tier: 3,
  },
  { type: 'guide', left: 'rest', right: 'restless', word: 'restaurant', answer: true, tier: 3 },
  { type: 'guide', left: 'plasma', right: 'plastic', word: 'plasticine', answer: false, tier: 3 },
  { type: 'guide', left: 'heart', right: 'heat', word: 'heater', answer: false, tier: 3 },
  { type: 'guide', left: 'mother', right: 'motion', word: 'moth', answer: false, tier: 3 },
  { type: 'guide', left: 'worse', right: 'worth', word: 'worthy', answer: false, tier: 3 },
]

export const DEFINE_BANK: DefineItem[] = [
  {
    type: 'define',
    word: 'meander',
    answer: 'To follow a winding course; to wander without a fixed direction',
    distractors: [
      'To complain loudly about a small problem; to grumble and moan',
      'To repair something using simple tools; to patch it up',
      'To gather a large crowd of people together in one place',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'brittle',
    answer: 'Hard but easily broken or snapped',
    distractors: [
      'Soft and able to bend without breaking',
      'Warm, soft and pleasant to the touch',
      'Heavy and difficult to lift or carry',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'vacant',
    answer: 'Empty; not occupied or in use',
    distractors: [
      'Full; crowded with many people',
      'Decorated for a celebration',
      'Locked and impossible to enter',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'summit',
    answer: 'The highest point of a hill or mountain',
    distractors: [
      'A deep, narrow valley between two steep slopes',
      'A path that leads all the way around a lake',
      'The flat ground at the foot of a hill or mountain',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'fragile',
    answer: 'Easily damaged or broken; delicate',
    distractors: [
      'Strong enough to carry heavy loads; tough',
      'Bright and colourful to look at',
      'Slow-moving but very steady',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'drowsy',
    answer: 'Sleepy and lacking energy or alertness',
    distractors: [
      'Excited, wide awake and full of fresh energy',
      'Angry; quick to argue and hard to calm down',
      'Curious about new surroundings',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'gleam',
    answer: 'To shine with a soft, steady light',
    distractors: [
      'To make a sudden loud noise, such as a bang',
      'To move quickly out of sight and disappear',
      'To grow dim and fade slowly into darkness',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'pursue',
    answer: 'To follow or chase in order to catch or achieve something',
    distractors: [
      'To turn away from a goal and give up trying to reach it',
      'To rest after a long effort; to take a break',
      'To explain an idea clearly so that others understand it',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'scarce',
    answer: 'Available only in small amounts; hard to find',
    distractors: [
      'Found everywhere in large numbers; very common',
      'Cheap and easy to buy in most shops',
      'New; invented or made only recently',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'mimic',
    answer: 'To copy the speech or actions of someone, often for amusement',
    distractors: [
      'To create something entirely new that nobody has ever seen before',
      'To hide an object carefully so nobody can find it',
      'To measure the size of something; to find out exactly how big it is',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'feeble',
    answer: 'Lacking strength; weak',
    distractors: [
      'Full of power and force',
      'Tall and clearly visible',
      'Relaxed; free from worry',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'linger',
    answer: 'To stay in a place longer than necessary; to be slow to leave',
    distractors: [
      'To rush ahead of the others; to hurry to arrive first',
      'To shout loudly in order to be heard above a noisy crowd',
      'To divide something into parts; to share it out equally between people',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'vivid',
    answer: 'Producing strong, clear images; bright and intense',
    distractors: [
      'Dull and faded; difficult to notice or remember',
      'Quiet and shy; rarely speaking to other people',
      'Cold, damp and unpleasant to the touch',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'sturdy',
    answer: 'Strongly built and unlikely to break or fall',
    distractors: [
      'Thin, weak and likely to bend or snap under weight',
      'Light enough to float on the surface of water',
      'Smooth and slippery; hard to keep hold of',
    ],
    tier: 1,
  },
  // Added 24 October 2026.
  {
    type: 'define',
    word: 'reluctant',
    answer: 'Unwilling and slow to do something',
    distractors: [
      'Eager and quick to agree to anything',
      'Unable to remember things clearly',
      'Proud of something you have done',
    ],
    tier: 1,
  },
  {
    type: 'define',
    word: 'nimble',
    answer: 'Quick and light in movement',
    distractors: [
      'Clumsy and heavy on your feet',
      'Hard to break or bend',
      'Quiet and easy to miss',
    ],
    tier: 1,
  },
  // Tier 2: the meaning a word has in a sentence; the wrong options are its other senses.
  {
    type: 'define',
    word: 'sharp',
    sentence: 'Her sharp reply made the whole table go quiet.',
    answer: 'Harsh and critical, in a way that stings',
    distractors: [
      'Having a fine edge that cuts easily',
      'Exactly on time, to the very minute',
      'Quick to notice and understand things',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'bright',
    sentence: 'Amir is a bright pupil who solves puzzles faster than anyone.',
    answer: 'Clever and quick to learn',
    distractors: [
      'Giving out a lot of light',
      'Strong and vivid in colour',
      'Cheerful and lively in mood',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'fine',
    sentence: 'Grandma’s hair is so fine that it tangles in the wind.',
    answer: 'Very thin, like a single thread',
    distractors: [
      'Of high quality and well made',
      'Bright and dry, with no rain',
      'Healthy and well, with nothing wrong',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'smart',
    sentence: 'Everyone looked smart for the school photograph.',
    answer: 'Neat, tidy and well dressed',
    distractors: [
      'Clever and good at thinking',
      'Stinging, as a cut does',
      'Quick and brisk in movement',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'light',
    sentence: 'She packed a light bag so that she could carry it up the hill.',
    answer: 'Not heavy, so easy to lift',
    distractors: [
      'Pale in colour, not dark',
      'Bright, with plenty of sunshine',
      'Gentle and soft, not strong',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'cool',
    sentence: 'The new teacher seemed cool towards us at first, but she soon warmed up.',
    answer: 'Unfriendly and a little distant',
    distractors: [
      'Slightly cold in a pleasant way',
      'Calm and not easily worried',
      'Fashionable and admired',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'plain',
    sentence: 'The soup was plain, with no herbs, spices or salt.',
    answer: 'Simple, with nothing added',
    distractors: [
      'Not beautiful to look at',
      'Easy to see or understand',
      'Honest and direct in speech',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'rich',
    sentence: 'The chocolate cake was so rich that nobody could finish a slice.',
    answer: 'Heavy with cream, butter or sugar',
    distractors: [
      'Having a lot of money',
      'Full of goodness for growing plants',
      'Deep and strong in colour',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'tender',
    sentence: 'The steak was so tender that it fell apart under the fork.',
    answer: 'Soft and easy to cut or chew',
    distractors: [
      'Gentle, kind and full of love',
      'Sore and painful when touched',
      'Young and without experience',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'blue',
    sentence: 'Gran has felt blue since her best friend moved away.',
    answer: 'Sad and rather low in mood',
    distractors: [
      'Having the colour of a clear sky',
      'Rude or slightly shocking',
      'Cold enough to look pale',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'odd',
    sentence: 'There is an odd number of pupils, so one will have to work alone.',
    answer: 'Not able to be divided by two',
    distractors: [
      'Strange or unusual',
      'Left without its partner from a pair',
      'Done now and then, not regularly',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'close',
    sentence: 'The two sisters are very close and talk on the phone every day.',
    answer: 'Deeply fond of and loyal to each other',
    distractors: [
      'Near to each other in distance',
      'Warm and airless, as before a storm',
      'Careful and detailed in its attention',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'lean',
    sentence: 'In a lean year, the farm barely grew enough to feed the family.',
    answer: 'Producing little; hard and poor',
    distractors: [
      'Thin and fit, with no spare fat',
      'Containing little fat, as some meat does',
      'Efficient, with nothing wasted',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'deep',
    sentence: 'Granddad has a deep voice that fills the whole room.',
    answer: 'Low in pitch, like a big drum',
    distractors: [
      'Going a long way down from the top',
      'Strong and intense, as a feeling can be',
      'Serious and hard to understand',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'heavy',
    sentence: 'Heavy traffic made us an hour late for the wedding.',
    answer: 'Great in amount; very busy',
    distractors: [
      'Weighing a lot; hard to lift',
      'Sad and hard to bear, like bad news',
      'Thick and warm, like a winter coat',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'tip',
    sentence: 'Dad gave the taxi driver a five-pound tip.',
    answer: 'Extra money given for good service',
    distractors: [
      'The pointed end of something thin',
      'A small piece of useful advice',
      'A place where rubbish is taken',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'scale',
    sentence: 'Each scale on the snake’s back shone like polished glass.',
    answer: 'A small hard plate on a reptile’s skin',
    distractors: [
      'A set of notes going up or down',
      'A machine used for weighing things',
      'How big a map is compared with reality',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'bark',
    sentence: 'The bark of the old oak was rough and covered in moss.',
    answer: 'The tough outer layer of a tree trunk',
    distractors: [
      'The short, loud cry a dog makes',
      'An old kind of sailing ship',
      'A sharp, loud order shouted out',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'match',
    sentence: 'The match flared, and the candle was lit.',
    answer: 'A small stick that lights when struck',
    distractors: [
      'A game between two teams',
      'Someone or something equal to another',
      'A pair that goes well together',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'fresh',
    sentence: 'The bread is fresh from the oven.',
    answer: 'Just made and not yet stale',
    distractors: [
      'Cool and pleasantly clean',
      'Not salty, like river water',
      'New and not tried before',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'charge',
    sentence: 'The museum makes no charge for entry on Sundays.',
    answer: 'A price that must be paid',
    distractors: [
      'A sudden rush at an enemy',
      'Electricity stored in a battery',
      'Responsibility for looking after someone',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'row',
    sentence: 'There was a terrible row next door, with shouting until midnight.',
    answer: 'A loud, angry quarrel between people',
    distractors: [
      'A line of seats side by side',
      'A trip in a small boat with oars',
      'A street of houses joined in a line',
    ],
    tier: 2,
  },
  {
    type: 'define',
    word: 'coach',
    sentence: 'Our coach made us run laps until we could hardly stand.',
    answer: 'A person who trains a sports team',
    distractors: [
      'A comfortable bus for long trips',
      'A carriage pulled by horses',
      'One carriage of a train',
    ],
    tier: 2,
  },
  // Tier 3: real lines, copied exactly, where the word has an older or less common sense.
  {
    type: 'define',
    word: 'fair',
    sentence:
      'We took our passage on board a vessel bound for Havre-de-Grace, and sailed with a fair wind from the Irish shores.',
    source: 'Mary Shelley, Frankenstein, Chapter 21',
    answer: 'Blowing the way you want to sail',
    distractors: [
      'Treating everyone in the same way',
      'Pale or light in colour',
      'Neither very strong nor very weak',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'dull',
    sentence:
      "Now, when you take me in hand in my learning, Pip (and I tell you beforehand I am awful dull, most awful dull), Mrs. Joe mustn't see too much of what we're up to.",
    source: 'Charles Dickens, Great Expectations, Chapter 7',
    answer: 'Slow at learning or understanding',
    distractors: [
      'Boring and uninteresting to others',
      'Grey and cloudy, without sunshine',
      'Not sharp enough to cut',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'mean',
    sentence:
      'Overjoyed at this discovery, he hastened to the house, which was situated in a mean street, near the Reuss.',
    source: 'Mary Shelley, Frankenstein, Chapter 1',
    answer: 'Poor and shabby-looking',
    distractors: [
      'Unkind and spiteful',
      'Unwilling to spend money',
      'Average, neither high nor low',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'awful',
    sentence:
      'From the side where I now stood Montanvert was exactly opposite, at the distance of a league; and above it rose Mont Blanc, in awful majesty.',
    source: 'Mary Shelley, Frankenstein, Chapter 10',
    answer: 'Filling you with wonder and awe',
    distractors: [
      'Very bad and unpleasant to see',
      'Very great in amount or number',
      'Shocking and hard to look at',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'sensible',
    sentence: 'If my children are silly I must hope to be always sensible of it.',
    source: 'Jane Austen, Pride and Prejudice, Chapter 7',
    answer: 'Aware of something; noticing it',
    distractors: [
      'Wise and practical in what you do',
      'Practical rather than fashionable',
      'Calm and not easily upset',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'presently',
    sentence: 'But he was silent, and presently retired to his cabin.',
    source: 'Mary Shelley, Frankenstein, Letter 4',
    answer: 'Soon; after a short time',
    distractors: [
      'At this moment; right now',
      'Very quietly and calmly',
      'For a long time afterwards',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'civil',
    sentence:
      'The housekeeper came; a respectable-looking, elderly woman, much less fine, and more civil, than she had any notion of finding her.',
    source: 'Jane Austen, Pride and Prejudice, Chapter 43',
    answer: 'Polite and courteous in her manner',
    distractors: [
      'Belonging to citizens, not soldiers',
      'Fought between people of one country',
      'To do with private law, not crime',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'carriage',
    sentence:
      'Georgiana, who had a spoiled temper, a very acrid spite, a captious and insolent carriage, was universally indulged.',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 2',
    answer: 'The way someone holds herself',
    distractors: [
      'A vehicle pulled by horses',
      'One of the coaches of a train',
      'The cost of sending goods',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'temper',
    sentence:
      'Scrooge resumed his labours with an improved opinion of himself, and in a more facetious temper than was usual with him.',
    source: 'Charles Dickens, A Christmas Carol, Stave 1',
    answer: 'A mood or frame of mind',
    distractors: ['A sudden fit of anger', 'The hardness of a metal', 'The ability to stay calm'],
    tier: 3,
  },
  {
    type: 'define',
    word: 'humour',
    sentence:
      'On the way home, if I had been in the humour for talking, the talk must have been all on my side...',
    source: 'Charles Dickens, Great Expectations, Chapter 10',
    answer: 'The mood someone is in at a time',
    distractors: [
      'The quality of being funny',
      'A person’s whole character and nature',
      'A liquid in the body, in old medicine',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'fancy',
    sentence: 'He was a boy of singular talent and fancy.',
    source: 'Mary Shelley, Frankenstein, Chapter 2',
    answer: 'The power to imagine things',
    distractors: [
      'A sudden liking for someone',
      'A small iced and decorated cake',
      'A belief that is not true',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'common',
    sentence:
      'I took the opportunity of being alone in the courtyard, to look at my coarse hands and my common boots.',
    source: 'Charles Dickens, Great Expectations, Chapter 8',
    answer: 'Plain and low-class, not refined',
    distractors: [
      'Happening often, so not rare',
      'Shared by two or more people',
      'Belonging to everyone in a village',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'raw',
    sentence:
      'I never liked long walks, especially on chilly afternoons: dreadful to me was the coming home in the raw twilight, with nipped fingers and toes...',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 1',
    answer: 'Cold, damp and unpleasant',
    distractors: ['Not cooked', 'Sore, with skin rubbed away', 'New and without experience'],
    tier: 3,
  },
  {
    type: 'define',
    word: 'depth',
    sentence:
      'Snowball was a more vivacious pig than Napoleon, quicker in speech and more inventive, but was not considered to have the same depth of character.',
    source: 'George Orwell, Animal Farm, Chapter 2',
    answer: 'Seriousness and strength of mind',
    distractors: [
      'The distance from top to bottom',
      'The deepest, darkest part of the sea',
      'The richness of a colour',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'countenance',
    sentence:
      'Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary and yet somehow lovable.',
    source: 'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde, Chapter 1',
    answer: 'A face, and the look on it',
    distractors: [
      'Approval or support for something',
      'A woman married to an earl',
      'The way a person stands or walks',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'curious',
    sentence: 'It was a curious place, indeed; but remarkably well kept and clean.',
    source: 'Charles Dickens, Great Expectations, Chapter 46',
    answer: 'Strange, odd and unusual',
    distractors: [
      'Eager to find things out',
      'Nosy about other people’s lives',
      'Made with great care and skill',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'intelligence',
    sentence: 'This was strange and unexpected intelligence; what could it mean?',
    source: 'Mary Shelley, Frankenstein, Chapter 8',
    answer: 'News or information about something',
    distractors: [
      'The ability to learn and to think',
      'Information gathered by spies',
      'A clever being from another world',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'condescension',
    sentence:
      'She is all affability and condescension, and I doubt not but you will be honoured with some portion of her notice when service is over.',
    source: 'Jane Austen, Pride and Prejudice, Chapter 28',
    answer: 'Graciousness to people of lower rank',
    distractors: [
      'Talking down to people as if they were stupid',
      'Giving way in an argument',
      'Coming down from a high place',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'sound',
    sentence:
      'I put my light out, and crept into bed; and it was an uneasy bed now, and I never slept the old sound sleep in it any more.',
    source: 'Charles Dickens, Great Expectations, Chapter 18',
    answer: 'Deep, peaceful and undisturbed',
    distractors: [
      'Healthy and in good condition',
      'Sensible and based on good reasons',
      'Solid and safely built',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'air',
    sentence:
      'Her garb was rustic, and her cheek pale; but there was an air of dignity and beauty, that hardly permitted the sentiment of pity.',
    source: 'Mary Shelley, Frankenstein, Chapter 7',
    answer: 'A look or manner about someone',
    distractors: [
      'The gas that we breathe',
      'A simple tune or melody',
      'A show put on to seem important',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'spirits',
    sentence:
      'This letter gave Elizabeth some pain; but her spirits returned as she considered that Jane would no longer be duped, by the sister at least.',
    source: 'Jane Austen, Pride and Prejudice, Chapter 26',
    answer: 'Her cheerfulness and good mood',
    distractors: [
      'Ghosts of people who have died',
      'Her soul, the religious part of her',
      'Friends who think as she does',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'want',
    sentence:
      'Many thousands are in want of common necessaries; hundreds of thousands are in want of common comforts, sir.',
    source: 'Charles Dickens, A Christmas Carol, Stave 1',
    answer: 'Lacking, without enough of something',
    distractors: [
      'Wishing for, as you wish for a treat',
      'Being looked for by the police',
      'In the habit of using something',
    ],
    tier: 3,
  },
  {
    type: 'define',
    word: 'engaged',
    sentence: 'The mother and her daughters were engaged in sewing.',
    source: 'Charles Dickens, A Christmas Carol, Stave 4',
    answer: 'Busy doing something',
    distractors: ['Promised to be married', 'Hired to do a job', 'Fighting against an enemy'],
    tier: 3,
  },
]

export const POS_BANK: PosItem[] = [
  {
    type: 'pos',
    word: 'harbour',
    example: 'The boats stayed safe inside the harbour.',
    answer: 'n.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'whisper',
    example: 'She began to whisper the secret.',
    answer: 'v.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'ancient',
    example: 'They explored the ancient ruins.',
    answer: 'adj.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'lantern',
    example: 'A lantern glowed in the window.',
    answer: 'n.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'scatter',
    example: 'The wind began to scatter the leaves.',
    answer: 'v.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'fierce',
    example: 'A fierce storm crossed the coast.',
    answer: 'adj.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'meadow',
    example: 'Cattle grazed in the open meadow.',
    answer: 'n.',
    tier: 1,
  },
  { type: 'pos', word: 'tremble', example: 'His hands began to tremble.', answer: 'v.', tier: 1 },
  {
    type: 'pos',
    word: 'gentle',
    example: 'A gentle breeze cooled the room.',
    answer: 'adj.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'bridge',
    example: 'They crossed the old stone bridge.',
    answer: 'n.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'gather',
    example: 'The class will gather in the hall.',
    answer: 'v.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'curious',
    example: 'The curious child asked many questions.',
    answer: 'adj.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'cottage',
    example: 'They rented a small cottage by the sea.',
    answer: 'n.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'vanish',
    example: 'The fog will vanish by morning.',
    answer: 'v.',
    tier: 1,
  },
  {
    type: 'pos',
    word: 'brilliant',
    example: 'The plan was a brilliant idea.',
    answer: 'adj.',
    tier: 1,
  },
  // Added 24 October 2026. Tier 2: a word in the class students do not expect, an
  // adverb without -ly, an adjective with it.
  {
    type: 'pos',
    word: 'friendly',
    example: 'The puppy was so friendly that it licked everyone’s hand.',
    answer: 'adj.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'often',
    example: 'We often walk to school when it is sunny.',
    answer: 'adv.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'soon',
    example: 'The plane will land soon, so please fasten your seat belt.',
    answer: 'adv.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'seldom',
    example: 'Grandpa seldom uses the old tools in his shed.',
    answer: 'adv.',
    tier: 2,
  },
  { type: 'pos', word: 'dock', example: 'The ferry will dock at noon.', answer: 'v.', tier: 2 },
  {
    type: 'pos',
    word: 'book',
    example: 'Can you book the tickets for Saturday?',
    answer: 'v.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'lonely',
    example: 'The lonely lighthouse keeper had not spoken to anyone for weeks.',
    answer: 'adj.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'early',
    example: 'The last train leaves early on Sundays.',
    answer: 'adv.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'indoors',
    example: 'We stayed indoors while the storm raged.',
    answer: 'adv.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'ugly',
    example: 'The ugly duckling grew into a beautiful swan.',
    answer: 'adj.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'face',
    example: 'Our team will face the champions in the final.',
    answer: 'v.',
    tier: 2,
  },
  { type: 'pos', word: 'sigh', example: 'She gave a deep sigh of relief.', answer: 'n.', tier: 2 },
  {
    type: 'pos',
    word: 'upstairs',
    example: 'The children ran upstairs to bed.',
    answer: 'adv.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'water',
    example: 'Please water the plants while I am away.',
    answer: 'v.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'costly',
    example: 'The costly repairs took all of their savings.',
    answer: 'adj.',
    tier: 2,
  },
  // Tier 3: real lines, copied exactly, where the class must be worked out.
  {
    type: 'pos',
    word: 'cold',
    example:
      'The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice.',
    source: 'Charles Dickens, A Christmas Carol, Stave 1',
    answer: 'n.',
    tier: 3,
  },
  {
    type: 'pos',
    word: 'walk',
    example: 'There was no possibility of taking a walk that day.',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 1',
    answer: 'n.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'easy',
    example: 'He is not easy to describe.',
    source: 'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde, Chapter 1',
    answer: 'adj.',
    tier: 3,
  },
  {
    type: 'pos',
    word: 'good',
    example: 'Four legs good, two legs bad.',
    source: 'George Orwell, Animal Farm, Chapter 3',
    answer: 'adj.',
    tier: 3,
  },
  {
    type: 'pos',
    word: 'beware',
    example: 'Beware; for I am fearless, and therefore powerful.',
    source: 'Mary Shelley, Frankenstein, Chapter 20',
    answer: 'v.',
    tier: 3,
  },
  {
    type: 'pos',
    word: 'looks',
    example:
      'Nobody ever stopped him in the street to say, with gladsome looks, "My dear Scrooge, how are you? When will you come to see me?"',
    source: 'Charles Dickens, A Christmas Carol, Stave 1',
    answer: 'n.',
    tier: 3,
  },
  {
    type: 'pos',
    word: 'hard',
    example:
      'I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body.',
    source: 'Mary Shelley, Frankenstein, Chapter 5',
    answer: 'adv.',
    tier: 3,
  },
  {
    type: 'pos',
    word: 'again',
    example:
      'The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.',
    source: 'George Orwell, Animal Farm, Chapter 10',
    answer: 'adv.',
    tier: 3,
  },
  {
    type: 'pos',
    word: 'said',
    example:
      'The said Eliza, John, and Georgiana were now clustered round their mama in the drawing-room...',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 1',
    answer: 'adj.',
    tier: 3,
  },
  {
    type: 'pos',
    word: 'toils',
    example: 'It was on a dreary night of November, that I beheld the accomplishment of my toils.',
    source: 'Mary Shelley, Frankenstein, Chapter 5',
    answer: 'n.',
    tier: 3,
  },
  {
    type: 'pos',
    word: 'dear',
    example:
      'Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it.',
    source: 'Mary Shelley, Frankenstein, Chapter 10',
    answer: 'adj.',
    tier: 3,
  },
  {
    type: 'pos',
    word: 'right',
    example:
      'And from then on he adopted the maxim, "Napoleon is always right," in addition to his private motto of "I will work harder."',
    source: 'George Orwell, Animal Farm, Chapter 5',
    answer: 'adj.',
    tier: 3,
  },
  {
    type: 'pos',
    word: 'lies',
    example: "Ask no questions, and you'll be told no lies.",
    source: 'Charles Dickens, Great Expectations, Chapter 2',
    answer: 'n.',
    tier: 2,
  },
  {
    type: 'pos',
    word: 'only',
    example: 'Man is the only creature that consumes without producing.',
    source: 'George Orwell, Animal Farm, Chapter 1',
    answer: 'adj.',
    tier: 3,
  },
]

/** The four word classes, as a dictionary abbreviates them. Adverb added 24 October 2026. */
export const POS_OPTIONS = ['n.', 'v.', 'adj.', 'adv.']

/** What each kind of question is called on screen. It is also the question's tag. */
export const SUBTYPE_LABEL: Record<Subtype, string> = {
  alpha: 'Alphabetical order',
  guide: 'Guide words',
  define: 'Definitions',
  pos: 'Word classes',
}

/**
 * The question as the student reads it. The page shows this, and the key below
 * is built from it, so an explanation can never be filed under a prompt the
 * student was not shown.
 */
export function promptFor(item: BankItem): string {
  switch (item.type) {
    case 'alpha':
      return item.last
        ? 'Which word comes last in alphabetical order?'
        : 'Which word comes first in alphabetical order?'
    case 'guide':
      return `Guide words at the top of a page are "${item.left}" and "${item.right}". Would you find "${item.word}" on this page?`
    case 'define':
      return item.sentence
        ? `What does "${item.word}" mean in this sentence?`
        : `Which definition correctly matches the word "${item.word}"?`
    case 'pos':
      return `What part of speech is "${item.word}" in this sentence?`
  }
}

/**
 * The three answers to a guide-words question, as shown: the word is on this
 * page, on an earlier one or on a later one. Until 24 October 2026 there were
 * two, Yes and No; a dictionary user has to know which way to turn as well.
 * Built here so the page and the explanations name the options in exactly the
 * same words: a "why not" filed under text the student never sees would never
 * be displayed.
 */
export function guideOptions(item: GuideItem): { yes: string; earlier: string; later: string } {
  return {
    yes: `Yes, "${item.word}" is on this page`,
    earlier: `No, "${item.word}" is on an earlier page`,
    later: `No, "${item.word}" is on a later page`,
  }
}

/** The right one of the three: on this page, or which way to turn. */
export function guideAnswer(item: GuideItem): string {
  const { yes, earlier, later } = guideOptions(item)
  return item.answer ? yes : item.word < item.left ? earlier : later
}

/** Every word a question shows as a headword: no two questions sharing one are dealt together. */
function headwords(item: BankItem): string[] {
  switch (item.type) {
    case 'alpha':
      return item.words
    case 'guide':
      return [...new Set([item.left, item.right, item.word])]
    case 'define':
    case 'pos':
      return [item.word]
  }
}

export const BANK: GameBank<BankItem> = {
  slug: 'dictionary-skills',
  items: [...ALPHA_BANK, ...GUIDE_BANK, ...DEFINE_BANK, ...POS_BANK],
  // Every prompt is different except the alphabetical-order ones, which ask the
  // same thing of every set of four words, so they add their words, and a
  // meaning in a sentence, which adds the sentence.
  key: (item) =>
    item.type === 'alpha'
      ? `${promptFor(item)} ${item.words.join(', ')}`
      : item.type === 'define' && item.sentence
        ? `${promptFor(item)} ${item.sentence}`
        : promptFor(item),
  answer: (item) => {
    switch (item.type) {
      case 'guide':
        return guideAnswer(item)
      default:
        return item.answer
    }
  },
  // The page shuffles the words, the definitions and the three guide-word answers
  // per question; the set is fixed.
  options: (item) => {
    switch (item.type) {
      case 'alpha':
        return item.words
      case 'guide': {
        const { yes, earlier, later } = guideOptions(item)
        return [yes, earlier, later]
      }
      case 'define':
        return [item.answer, ...item.distractors]
      case 'pos':
        return POS_OPTIONS
    }
  },
  tag: (item) => SUBTYPE_LABEL[item.type],
  // A round still deals the page's fixed mix by kind; within it, easier first.
  tier: (item) => item.tier,
  facts: (item) => headwords(item).map((w) => `word:${w.toLowerCase()}`),
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
