import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Picture Word Match: look at the picture and choose the English word that
 * matches it, from the right word and three others.
 *
 * Moved out of src/app/games/picture-word-match/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * question is "Which word matches this picture?" and the picture is an emoji.
 * In 15 of the 63 questions another option fitted the picture as well as the
 * answer, so a learner who read the picture correctly was marked wrong. Each
 * picture was checked as drawn (the Windows emoji set, 16 October 2026), and a
 * second reader then checked every one against the emoji's own Unicode name,
 * because each platform draws an emoji differently; that found no other fault:
 *
 *   - The six Family pictures show only a gender and an age: a woman, a man, a
 *     baby, an older woman, an older man and a girl. A picture of a woman is as
 *     much "sister", "aunt" and "daughter" as "mother", and a baby is as much a
 *     "child", a "cousin" or a "twin" as a baby. Each now offers its word
 *     beside three that the picture cannot be: three men's words for the woman
 *     and the older woman, three women's for the man and the older man, three
 *     grown-ups for the baby and three male words for the girl.
 *   - bee offered wasp, which is drawn the same way (a striped insect), so wasp
 *     became spider.
 *   - hair is a person having a haircut, so the head and the face are in the
 *     picture as well; head, face and neck became foot, knee and leg.
 *   - cap offered hat, and a cap is a hat, so hat became gloves.
 *   - snow is a snowflake, the sign weather apps also use for ice, so ice became
 *     wind.
 *   - cloud is a sun behind a cloud, so the sun is in the picture, and the sky is
 *     where both are; sun and sky became snow and wind.
 *   - rainbow offered cloud (many designs draw one at each end) and sky; they
 *     became snow and wind.
 *   - lightning offered thunder, and the lightning bolt is also the sign weather
 *     apps use for a thunderstorm; thunder became fog.
 *   - ship offered boat, and a ship is a boat, so boat became bus.
 *   - taxi offered car, and a taxi is a car, so car became lorry.
 *
 * The pictures, the words and the topics are unchanged; so are the answers. Only
 * distractors were replaced.
 */

export interface PictureItem {
  emoji: string
  word: string
  topic: string
  distractors: [string, string, string]
}

export const PICTURE_BANK: PictureItem[] = [
  // Food & drink
  { emoji: '🍎', word: 'apple', topic: 'Food & drink', distractors: ['orange', 'banana', 'pear'] },
  { emoji: '🍞', word: 'bread', topic: 'Food & drink', distractors: ['cheese', 'butter', 'rice'] },
  { emoji: '🥛', word: 'milk', topic: 'Food & drink', distractors: ['water', 'juice', 'tea'] },
  { emoji: '🧀', word: 'cheese', topic: 'Food & drink', distractors: ['egg', 'bread', 'ham'] },
  {
    emoji: '🍓',
    word: 'strawberry',
    topic: 'Food & drink',
    distractors: ['cherry', 'grape', 'plum'],
  },
  {
    emoji: '🥕',
    word: 'carrot',
    topic: 'Food & drink',
    distractors: ['potato', 'onion', 'tomato'],
  },
  { emoji: '🍵', word: 'tea', topic: 'Food & drink', distractors: ['coffee', 'soup', 'milk'] },
  { emoji: '🥚', word: 'egg', topic: 'Food & drink', distractors: ['cheese', 'bean', 'nut'] },

  // Animals
  { emoji: '🐶', word: 'dog', topic: 'Animals', distractors: ['cat', 'fox', 'wolf'] },
  { emoji: '🐱', word: 'cat', topic: 'Animals', distractors: ['dog', 'rabbit', 'mouse'] },
  { emoji: '🐮', word: 'cow', topic: 'Animals', distractors: ['sheep', 'horse', 'pig'] },
  { emoji: '🐴', word: 'horse', topic: 'Animals', distractors: ['cow', 'donkey', 'goat'] },
  { emoji: '🐑', word: 'sheep', topic: 'Animals', distractors: ['goat', 'cow', 'pig'] },
  { emoji: '🐦', word: 'bird', topic: 'Animals', distractors: ['fish', 'bee', 'bat'] },
  { emoji: '🐟', word: 'fish', topic: 'Animals', distractors: ['frog', 'crab', 'bird'] },
  { emoji: '🐝', word: 'bee', topic: 'Animals', distractors: ['ant', 'fly', 'spider'] },

  // Family
  { emoji: '👩', word: 'mother', topic: 'Family', distractors: ['father', 'brother', 'uncle'] },
  { emoji: '👨', word: 'father', topic: 'Family', distractors: ['mother', 'sister', 'aunt'] },
  { emoji: '👶', word: 'baby', topic: 'Family', distractors: ['mother', 'father', 'grandmother'] },
  {
    emoji: '👵',
    word: 'grandmother',
    topic: 'Family',
    distractors: ['grandfather', 'father', 'uncle'],
  },
  {
    emoji: '👴',
    word: 'grandfather',
    topic: 'Family',
    distractors: ['grandmother', 'mother', 'aunt'],
  },
  { emoji: '👧', word: 'daughter', topic: 'Family', distractors: ['son', 'father', 'grandfather'] },

  // The home
  { emoji: '🏠', word: 'house', topic: 'The home', distractors: ['garden', 'room', 'door'] },
  { emoji: '🚪', word: 'door', topic: 'The home', distractors: ['window', 'wall', 'roof'] },
  { emoji: '🛏️', word: 'bed', topic: 'The home', distractors: ['chair', 'sofa', 'table'] },
  { emoji: '🪑', word: 'chair', topic: 'The home', distractors: ['bed', 'shelf', 'desk'] },
  { emoji: '🛁', word: 'bath', topic: 'The home', distractors: ['sink', 'shower', 'mirror'] },
  { emoji: '🕰️', word: 'clock', topic: 'The home', distractors: ['lamp', 'shelf', 'mirror'] },
  { emoji: '🔑', word: 'key', topic: 'The home', distractors: ['lock', 'handle', 'bell'] },

  // The body
  { emoji: '✋', word: 'hand', topic: 'The body', distractors: ['foot', 'arm', 'leg'] },
  { emoji: '👁️', word: 'eye', topic: 'The body', distractors: ['ear', 'nose', 'mouth'] },
  { emoji: '👂', word: 'ear', topic: 'The body', distractors: ['eye', 'nose', 'chin'] },
  { emoji: '👃', word: 'nose', topic: 'The body', distractors: ['mouth', 'eye', 'ear'] },
  { emoji: '🦶', word: 'foot', topic: 'The body', distractors: ['hand', 'leg', 'knee'] },
  { emoji: '🦷', word: 'tooth', topic: 'The body', distractors: ['tongue', 'lip', 'jaw'] },
  { emoji: '💇', word: 'hair', topic: 'The body', distractors: ['foot', 'knee', 'leg'] },

  // Clothes
  { emoji: '👕', word: 'shirt', topic: 'Clothes', distractors: ['coat', 'jumper', 'dress'] },
  { emoji: '👖', word: 'trousers', topic: 'Clothes', distractors: ['shorts', 'skirt', 'socks'] },
  { emoji: '👗', word: 'dress', topic: 'Clothes', distractors: ['skirt', 'shirt', 'coat'] },
  { emoji: '👟', word: 'shoes', topic: 'Clothes', distractors: ['socks', 'boots', 'gloves'] },
  { emoji: '🧥', word: 'coat', topic: 'Clothes', distractors: ['jumper', 'shirt', 'scarf'] },
  { emoji: '🧦', word: 'socks', topic: 'Clothes', distractors: ['shoes', 'gloves', 'shorts'] },
  { emoji: '🧢', word: 'cap', topic: 'Clothes', distractors: ['gloves', 'scarf', 'belt'] },

  // Weather
  { emoji: '☀️', word: 'sun', topic: 'Weather', distractors: ['rain', 'cloud', 'snow'] },
  { emoji: '🌧️', word: 'rain', topic: 'Weather', distractors: ['snow', 'sun', 'wind'] },
  { emoji: '❄️', word: 'snow', topic: 'Weather', distractors: ['rain', 'wind', 'fog'] },
  { emoji: '⛅', word: 'cloud', topic: 'Weather', distractors: ['rain', 'snow', 'wind'] },
  { emoji: '🌈', word: 'rainbow', topic: 'Weather', distractors: ['storm', 'snow', 'wind'] },
  { emoji: '⚡', word: 'lightning', topic: 'Weather', distractors: ['fog', 'wind', 'rain'] },

  // Transport
  { emoji: '🚗', word: 'car', topic: 'Transport', distractors: ['bus', 'van', 'lorry'] },
  { emoji: '🚌', word: 'bus', topic: 'Transport', distractors: ['car', 'train', 'taxi'] },
  {
    emoji: '🚲',
    word: 'bicycle',
    topic: 'Transport',
    distractors: ['motorbike', 'scooter', 'car'],
  },
  {
    emoji: '✈️',
    word: 'aeroplane',
    topic: 'Transport',
    distractors: ['helicopter', 'rocket', 'boat'],
  },
  { emoji: '🚂', word: 'train', topic: 'Transport', distractors: ['tram', 'bus', 'lorry'] },
  { emoji: '🚢', word: 'ship', topic: 'Transport', distractors: ['bus', 'plane', 'train'] },
  { emoji: '🚕', word: 'taxi', topic: 'Transport', distractors: ['bus', 'lorry', 'van'] },

  // School
  { emoji: '📚', word: 'books', topic: 'School', distractors: ['pens', 'bags', 'rulers'] },
  { emoji: '✏️', word: 'pencil', topic: 'School', distractors: ['pen', 'ruler', 'rubber'] },
  { emoji: '🎒', word: 'bag', topic: 'School', distractors: ['book', 'desk', 'pencil case'] },
  { emoji: '✂️', word: 'scissors', topic: 'School', distractors: ['glue', 'ruler', 'tape'] },
  { emoji: '📏', word: 'ruler', topic: 'School', distractors: ['pencil', 'rubber', 'pen'] },
  { emoji: '🖍️', word: 'crayon', topic: 'School', distractors: ['pencil', 'paint', 'chalk'] },
  { emoji: '🧮', word: 'abacus', topic: 'School', distractors: ['calculator', 'clock', 'ruler'] },
]

export const BANK: GameBank<PictureItem> = {
  slug: 'picture-word-match',
  items: PICTURE_BANK,
  // Each word is pictured once, and the picture is what the student sees.
  key: (q) => q.word,
  answer: (q) => q.word,
  // The page deals these four in a new order each time; the four are fixed.
  options: (q) => [q.word, ...q.distractors],
  tag: (q) => q.topic,
}
