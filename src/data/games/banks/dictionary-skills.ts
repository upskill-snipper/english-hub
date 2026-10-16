import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Dictionary Skills: four kinds of question about using a dictionary, mixed in
 * a round by the page. Which of four words comes first in alphabetical order
 * (14 questions), whether a word would be found between two guide words (14),
 * which definition matches a word (14), and what part of speech a word is in a
 * sentence (15).
 *
 * Moved out of src/app/games/dictionary-skills/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 * The four banks are joined into one list, BANK.items, in the order above.
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations, and
 * checking them).
 *
 *   - The alphabetical-order question planet, plaster, plank, platform was
 *     marked plank. Planet and plank both begin "plan", so the fifth letter
 *     decides, and e comes before k: planet is first. A student who compared the
 *     letters correctly was marked wrong. The marked answer is now planet.
 *   - A definition question could be answered without reading it. The right
 *     definition was the longest of the four in 10 of the 14 and level with the
 *     longest in an 11th, so always choosing the longest scored about 75%, and
 *     in 7 it was the only one with a semicolon. The wrong definitions were
 *     rewritten to lengths around the right one's, some with a semicolon, and
 *     each is still plainly wrong. The right one is now the longest in 3 of the
 *     14 and the shortest in 4, and choosing the longest, the shortest or the
 *     one with a semicolon each scores within a few points of guessing (25%).
 *     The right definitions did not change.
 *   - The guide-words answers used a spaced hyphen as a dash ('Yes - "casual"
 *     is on this page'), which the house style does not; they read 'Yes,
 *     "casual" is on this page'.
 *
 * KEPT AS IT WAS. The definition of gleam, "To shine with a soft, steady light",
 * was replaced while the explanations were written, on the ground that steady
 * is the sense of glow. It is not wrong. Merriam-Webster's first sense of gleam
 * is "to shine with or as if with subdued steady light or moderate brightness",
 * and its note on synonyms says gleam "suggests a steady light", so the
 * original was restored.
 *
 * The other questions were checked: every alphabetical and guide-word answer was
 * worked letter by letter, every definition has three options that cannot fit,
 * and every word in the word-class sentences is one class in its sentence.
 *
 * NOTICED AND NOT CHANGED. "Yes" is right in 9 of the 14 guide-words
 * questions, and it is always shown first, so always answering Yes scores 64%
 * where guessing scores 50%. Evening it out means new words in two of the Yes
 * questions, which this change did not make.
 */

export type Subtype = 'alpha' | 'guide' | 'define' | 'pos'

export interface AlphaItem {
  type: 'alpha'
  words: [string, string, string, string]
  /** The word that comes first alphabetically */
  answer: string
}

export interface GuideItem {
  type: 'guide'
  left: string
  right: string
  word: string
  /** True if `word` falls between `left` and `right` on the page */
  answer: boolean
}

export interface DefineItem {
  type: 'define'
  word: string
  /** Correct definition */
  answer: string
  /** Three plausible but wrong definitions */
  distractors: [string, string, string]
}

export interface PosItem {
  type: 'pos'
  word: string
  example: string
  /** 'n.' | 'v.' | 'adj.' */
  answer: string
}

export type BankItem = AlphaItem | GuideItem | DefineItem | PosItem

// Original content bank - UK English, 50+ items typed by subtype.
export const ALPHA_BANK: AlphaItem[] = [
  { type: 'alpha', words: ['orchard', 'ocean', 'olive', 'oyster'], answer: 'ocean' },
  { type: 'alpha', words: ['breeze', 'brick', 'branch', 'bridge'], answer: 'branch' },
  { type: 'alpha', words: ['carpet', 'cabin', 'cellar', 'clutch'], answer: 'cabin' },
  { type: 'alpha', words: ['stream', 'storm', 'stone', 'stove'], answer: 'stone' },
  { type: 'alpha', words: ['planet', 'plaster', 'plank', 'platform'], answer: 'planet' },
  { type: 'alpha', words: ['frost', 'fragment', 'frame', 'freckle'], answer: 'fragment' },
  { type: 'alpha', words: ['thunder', 'thimble', 'thorn', 'throne'], answer: 'thimble' },
  { type: 'alpha', words: ['velvet', 'vacant', 'vessel', 'vivid'], answer: 'vacant' },
  { type: 'alpha', words: ['gravel', 'glance', 'glory', 'grain'], answer: 'glance' },
  { type: 'alpha', words: ['mirror', 'meadow', 'mingle', 'mosaic'], answer: 'meadow' },
  { type: 'alpha', words: ['ribbon', 'rhythm', 'rescue', 'ripple'], answer: 'rescue' },
  { type: 'alpha', words: ['shadow', 'shallow', 'shatter', 'shelter'], answer: 'shadow' },
  { type: 'alpha', words: ['drizzle', 'drama', 'driftwood', 'drowsy'], answer: 'drama' },
  { type: 'alpha', words: ['anchor', 'amber', 'apron', 'awning'], answer: 'amber' },
]

export const GUIDE_BANK: GuideItem[] = [
  { type: 'guide', left: 'castle', right: 'cattle', word: 'casual', answer: true },
  { type: 'guide', left: 'garden', right: 'gather', word: 'garlic', answer: true },
  { type: 'guide', left: 'pebble', right: 'pepper', word: 'pencil', answer: true },
  { type: 'guide', left: 'lemon', right: 'lever', word: 'mango', answer: false },
  { type: 'guide', left: 'frost', right: 'fungus', word: 'fragment', answer: false },
  { type: 'guide', left: 'marble', right: 'meadow', word: 'mayhem', answer: true },
  { type: 'guide', left: 'noble', right: 'novel', word: 'nostril', answer: true },
  { type: 'guide', left: 'sail', right: 'salt', word: 'scarf', answer: false },
  { type: 'guide', left: 'tablet', right: 'talent', word: 'tackle', answer: true },
  { type: 'guide', left: 'velvet', right: 'vessel', word: 'venom', answer: true },
  { type: 'guide', left: 'brave', right: 'breeze', word: 'broom', answer: false },
  { type: 'guide', left: 'orchard', right: 'ostrich', word: 'oregano', answer: true },
  { type: 'guide', left: 'hammer', right: 'harvest', word: 'happen', answer: true },
  { type: 'guide', left: 'dusk', right: 'dwell', word: 'cradle', answer: false },
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
  },
]

export const POS_BANK: PosItem[] = [
  {
    type: 'pos',
    word: 'harbour',
    example: 'The boats stayed safe inside the harbour.',
    answer: 'n.',
  },
  { type: 'pos', word: 'whisper', example: 'She began to whisper the secret.', answer: 'v.' },
  { type: 'pos', word: 'ancient', example: 'They explored the ancient ruins.', answer: 'adj.' },
  { type: 'pos', word: 'lantern', example: 'A lantern glowed in the window.', answer: 'n.' },
  { type: 'pos', word: 'scatter', example: 'The wind began to scatter the leaves.', answer: 'v.' },
  { type: 'pos', word: 'fierce', example: 'A fierce storm crossed the coast.', answer: 'adj.' },
  { type: 'pos', word: 'meadow', example: 'Cattle grazed in the open meadow.', answer: 'n.' },
  { type: 'pos', word: 'tremble', example: 'His hands began to tremble.', answer: 'v.' },
  { type: 'pos', word: 'gentle', example: 'A gentle breeze cooled the room.', answer: 'adj.' },
  { type: 'pos', word: 'bridge', example: 'They crossed the old stone bridge.', answer: 'n.' },
  { type: 'pos', word: 'gather', example: 'The class will gather in the hall.', answer: 'v.' },
  {
    type: 'pos',
    word: 'curious',
    example: 'The curious child asked many questions.',
    answer: 'adj.',
  },
  {
    type: 'pos',
    word: 'cottage',
    example: 'They rented a small cottage by the sea.',
    answer: 'n.',
  },
  { type: 'pos', word: 'vanish', example: 'The fog will vanish by morning.', answer: 'v.' },
  { type: 'pos', word: 'brilliant', example: 'The plan was a brilliant idea.', answer: 'adj.' },
]

export const POS_OPTIONS = ['n.', 'v.', 'adj.']

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
      return 'Which word comes first in alphabetical order?'
    case 'guide':
      return `Guide words at the top of a page are "${item.left}" and "${item.right}". Would you find "${item.word}" on this page?`
    case 'define':
      return `Which definition correctly matches the word "${item.word}"?`
    case 'pos':
      return `What part of speech is "${item.word}" in this sentence?`
  }
}

/**
 * The two answers to a guide-words question, as shown. Built here so the page
 * and the explanations name the options in exactly the same words: a "why not"
 * filed under text the student never sees would never be displayed.
 */
export function guideOptions(item: GuideItem): { yes: string; no: string } {
  return {
    yes: `Yes, "${item.word}" is on this page`,
    no: `No, "${item.word}" is not on this page`,
  }
}

export const BANK: GameBank<BankItem> = {
  slug: 'dictionary-skills',
  items: [...ALPHA_BANK, ...GUIDE_BANK, ...DEFINE_BANK, ...POS_BANK],
  // Every prompt is different except the alphabetical-order one, which asks the
  // same thing of every set of four words, so that one adds its words.
  key: (item) =>
    item.type === 'alpha' ? `${promptFor(item)} ${item.words.join(', ')}` : promptFor(item),
  answer: (item) => {
    switch (item.type) {
      case 'guide': {
        const { yes, no } = guideOptions(item)
        return item.answer ? yes : no
      }
      default:
        return item.answer
    }
  },
  // The page shuffles the words and the definitions per question; the set is fixed.
  options: (item) => {
    switch (item.type) {
      case 'alpha':
        return item.words
      case 'guide': {
        const { yes, no } = guideOptions(item)
        return [yes, no]
      }
      case 'define':
        return [item.answer, ...item.distractors]
      case 'pos':
        return POS_OPTIONS
    }
  },
  tag: (item) => SUBTYPE_LABEL[item.type],
}
