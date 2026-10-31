import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Picture Word Match: choose the English word that matches a picture or, since
 * 24 October 2026, the word that fits a sentence, a short text or a dialogue,
 * from the right word and three others (REBUILT FOR DEPTH, below).
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
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "weak in
 * depth and content ... too obvious and easy"; the audit
 * (.tmp-games-audit/REPORT-eal.md) found one A1 noun per picture, no sentence,
 * the girl's picture answered "daughter" beside three male words, and ten
 * pictures that In the Classroom also asks, with the same answers. The bank
 * grew from 63 questions to 246, in three tiers:
 *
 *   - Tier 1 (A1), 85: name the picture, as before. 34 new pictures (fruit,
 *     wild animals, people, clothes, the sky, transport, the home, sport).
 *   - Tier 2 (A2), 87, a new kind: the word in a sentence, where the sentence
 *     decides between near neighbours ("You can borrow books from the ___."
 *     library, bookshop, bakery, bank). Family words ("My aunt's son is my
 *     ___."), young animals, places in town, rooms, jobs, food, clothes for
 *     the weather, the body, feelings, weather, transport.
 *   - Tier 3 (B1), 74, a new kind: the word in a short text or a dialogue,
 *     which takes reading the whole of it: two-step family links ("Ella's mum
 *     has a brother called Ben. Ben has a son called Joe. Joe is Ella's ___."),
 *     shops, cafes, travel, health, the home. Eight questions are real lines
 *     (seven here, one in tier 2), copied exactly from src/data/full-texts and
 *     named in `source`: Dickens (A Christmas Carol, Great Expectations),
 *     Charlotte Bronte (Jane Eyre), Austen (Pride and Prejudice), Stevenson
 *     (Jekyll and Hyde) and Orwell (Animal Farm). A real line keeps its
 *     author's punctuation, Fred's "!" included, and "..." marks a cut.
 *
 * A sentence question has no picture: a picture of the scene would show its
 * word or argue for a wrong option. The page shows the sentence in the picture
 * card instead (src/app/games/picture-word-match/page.tsx).
 *
 * Existing questions fixed:
 *   - girl: the picture is a girl, and it cannot show whose daughter she is, so
 *     the answer "daughter" became "girl" (boy, man, baby).
 *   - woman and man: the same fault, answered "mother" and "father"; now
 *     "woman" (man, boy, old man) and "man" (woman, girl, old woman).
 *   - baby: offered three relations (mother, father, grandmother); now three
 *     people the picture cannot be (man, woman, old man).
 *   - strawberry: offered cherry, grape and plum, with the answer the only long
 *     word; now raspberry, blackberry and cherry, near neighbours.
 * Removed:
 *   - grandmother and grandfather (an older woman and an older man): the same
 *     fault as "daughter". Relation words are now asked in sentences.
 *   - books, pencil, bag, scissors, ruler, crayon, abacus, door, chair and
 *     clock: In the Classroom asks the same pictures, and they stay there, so
 *     no picture is in both games.
 *
 * CHECKED (24 October 2026) by a second reader, not the writer. What was
 * wrong, and what changed:
 *   - "A ___ puts out fires." (firefighter): the stem held the answer's own
 *     word, so "fire" could be matched without knowing the job; now "A ___
 *     sprays water on a burning house."
 *   - "It is very sunny. Wear your ___ ..." (sunglasses): the same fault with
 *     "sun"; now "It is very bright today."
 *   - glasses offered sunglasses, and most emoji sets draw these glasses with
 *     light blue lenses that can read as tinted; sunglasses became necklace.
 *   - Jane Eyre, "Mrs. Reed, my uncle's ___." (wife): nothing printed says the
 *     uncle is a Reed, so from the line alone she could as well be his sister
 *     or his cousin; replaced by the first sentence of Pride and Prejudice,
 *     where "single" leaves only "wife".
 *   - Jane Eyre's sofa offered ladder, which no reader would choose; now table.
 *   - Seven one-sentence questions decided by a phrase ("milk his ___", "a ___
 *     of tea", "A caterpillar turns into a ___") were tier 3, which asks for
 *     reading a whole text; they are tier 2 now.
 *   - The page showed the topic before the answer, and beside a sentence it
 *     could single the answer out ("Health" over dentist, library, hairdresser
 *     and bank); the topic now shows with a picture only, where every option
 *     shares it (src/app/games/picture-word-match/page.tsx).
 *
 * `facts` gives each question its word and every other word the bank asks for
 * that its sentence uses (with a plural or possessive read as the word), so
 * "A young cat is called a ___." is never dealt with the cat's picture, plus a
 * few by hand where an explanation must name a related word.
 */

export interface PictureItem {
  /**
   * The picture to name: tier 1 only. A sentence question has none, because
   * a picture of its scene would name its word or argue for a wrong one.
   */
  emoji?: string
  word: string
  topic: string
  distractors: [string, string, string]
  /** 1 name a picture (A1); 2 the word in a sentence (A2); 3 the word in a short text or dialogue (B1). */
  tier: 1 | 2 | 3
  /** Tiers 2 and 3: the sentence or short text the word belongs in, its place shown as ___. */
  sentence?: string
  /** Where a real sentence comes from, shown under it. Absent where the sentence is the site's own. */
  source?: string
  /** What else would give this question away to another, beyond the words it uses. */
  facts?: string[]
}

export const PICTURE_BANK: PictureItem[] = [
  // ── Tier 1 (A1): name the picture ─────────────────────────────────────────

  // Food & drink
  {
    emoji: '🍎',
    word: 'apple',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['orange', 'banana', 'pear'],
  },
  {
    emoji: '🍞',
    word: 'bread',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['cheese', 'butter', 'rice'],
  },
  {
    emoji: '🥛',
    word: 'milk',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['water', 'juice', 'tea'],
  },
  {
    emoji: '🧀',
    word: 'cheese',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['egg', 'bread', 'ham'],
  },
  {
    emoji: '🍓',
    word: 'strawberry',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['raspberry', 'blackberry', 'cherry'],
  },
  {
    emoji: '🥕',
    word: 'carrot',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['potato', 'onion', 'tomato'],
  },
  {
    emoji: '🍵',
    word: 'tea',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['coffee', 'soup', 'milk'],
  },
  {
    emoji: '🥚',
    word: 'egg',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['cheese', 'bean', 'nut'],
  },
  {
    emoji: '🍌',
    word: 'banana',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['lemon', 'orange', 'pear'],
  },
  {
    emoji: '🍕',
    word: 'pizza',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['pasta', 'cake', 'burger'],
  },
  {
    emoji: '🥔',
    word: 'potato',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['onion', 'carrot', 'mushroom'],
  },
  {
    emoji: '🍟',
    word: 'chips',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['crisps', 'rice', 'pasta'],
  },
  {
    emoji: '🍦',
    word: 'ice cream',
    topic: 'Food & drink',
    tier: 1,
    distractors: ['cake', 'chocolate', 'biscuit'],
  },

  // Animals
  { emoji: '🐶', word: 'dog', topic: 'Animals', tier: 1, distractors: ['cat', 'fox', 'wolf'] },
  { emoji: '🐱', word: 'cat', topic: 'Animals', tier: 1, distractors: ['dog', 'rabbit', 'mouse'] },
  { emoji: '🐮', word: 'cow', topic: 'Animals', tier: 1, distractors: ['sheep', 'horse', 'pig'] },
  { emoji: '🐴', word: 'horse', topic: 'Animals', tier: 1, distractors: ['cow', 'donkey', 'goat'] },
  { emoji: '🐑', word: 'sheep', topic: 'Animals', tier: 1, distractors: ['goat', 'cow', 'pig'] },
  { emoji: '🐦', word: 'bird', topic: 'Animals', tier: 1, distractors: ['fish', 'bee', 'bat'] },
  { emoji: '🐟', word: 'fish', topic: 'Animals', tier: 1, distractors: ['frog', 'crab', 'bird'] },
  { emoji: '🐝', word: 'bee', topic: 'Animals', tier: 1, distractors: ['ant', 'fly', 'spider'] },
  { emoji: '🐷', word: 'pig', topic: 'Animals', tier: 1, distractors: ['cow', 'sheep', 'horse'] },
  {
    emoji: '🐰',
    word: 'rabbit',
    topic: 'Animals',
    tier: 1,
    distractors: ['hamster', 'mouse', 'cat'],
  },
  { emoji: '🦁', word: 'lion', topic: 'Animals', tier: 1, distractors: ['tiger', 'bear', 'wolf'] },
  {
    emoji: '🐘',
    word: 'elephant',
    topic: 'Animals',
    tier: 1,
    distractors: ['kangaroo', 'giraffe', 'rhino'],
  },
  {
    emoji: '🐸',
    word: 'frog',
    topic: 'Animals',
    tier: 1,
    distractors: ['fish', 'snake', 'lizard'],
  },
  {
    emoji: '🐵',
    word: 'monkey',
    topic: 'Animals',
    tier: 1,
    distractors: ['donkey', 'bear', 'tiger'],
  },
  {
    emoji: '🦆',
    word: 'duck',
    topic: 'Animals',
    tier: 1,
    distractors: ['swan', 'owl', 'chicken'],
  },
  {
    emoji: '🐍',
    word: 'snake',
    topic: 'Animals',
    tier: 1,
    distractors: ['worm', 'lizard', 'crab'],
  },

  // People: each picture shows a person of an age, not a relation
  { emoji: '👶', word: 'baby', topic: 'People', tier: 1, distractors: ['man', 'woman', 'old man'] },
  { emoji: '👧', word: 'girl', topic: 'People', tier: 1, distractors: ['boy', 'man', 'baby'] },
  { emoji: '👦', word: 'boy', topic: 'People', tier: 1, distractors: ['girl', 'man', 'baby'] },
  { emoji: '👩', word: 'woman', topic: 'People', tier: 1, distractors: ['man', 'boy', 'old man'] },
  {
    emoji: '👨',
    word: 'man',
    topic: 'People',
    tier: 1,
    distractors: ['woman', 'girl', 'old woman'],
  },

  // The body
  { emoji: '✋', word: 'hand', topic: 'The body', tier: 1, distractors: ['foot', 'arm', 'leg'] },
  { emoji: '👁️', word: 'eye', topic: 'The body', tier: 1, distractors: ['ear', 'nose', 'mouth'] },
  { emoji: '👂', word: 'ear', topic: 'The body', tier: 1, distractors: ['eye', 'nose', 'chin'] },
  { emoji: '👃', word: 'nose', topic: 'The body', tier: 1, distractors: ['mouth', 'eye', 'ear'] },
  { emoji: '🦶', word: 'foot', topic: 'The body', tier: 1, distractors: ['hand', 'leg', 'knee'] },
  {
    emoji: '🦷',
    word: 'tooth',
    topic: 'The body',
    tier: 1,
    distractors: ['tongue', 'lip', 'jaw'],
  },
  { emoji: '💇', word: 'hair', topic: 'The body', tier: 1, distractors: ['foot', 'knee', 'leg'] },
  {
    emoji: '👄',
    word: 'mouth',
    topic: 'The body',
    tier: 1,
    distractors: ['nose', 'tongue', 'chin'],
  },
  { emoji: '🦵', word: 'leg', topic: 'The body', tier: 1, distractors: ['arm', 'hand', 'neck'] },

  // Clothes
  {
    emoji: '👕',
    word: 'shirt',
    topic: 'Clothes',
    tier: 1,
    distractors: ['coat', 'jumper', 'dress'],
  },
  {
    emoji: '👖',
    word: 'trousers',
    topic: 'Clothes',
    tier: 1,
    distractors: ['shorts', 'skirt', 'socks'],
  },
  {
    emoji: '👗',
    word: 'dress',
    topic: 'Clothes',
    tier: 1,
    distractors: ['skirt', 'shirt', 'coat'],
  },
  {
    emoji: '👟',
    word: 'shoes',
    topic: 'Clothes',
    tier: 1,
    distractors: ['socks', 'boots', 'gloves'],
  },
  {
    emoji: '🧥',
    word: 'coat',
    topic: 'Clothes',
    tier: 1,
    distractors: ['jumper', 'shirt', 'scarf'],
  },
  {
    emoji: '🧦',
    word: 'socks',
    topic: 'Clothes',
    tier: 1,
    distractors: ['shoes', 'gloves', 'shorts'],
  },
  { emoji: '🧢', word: 'cap', topic: 'Clothes', tier: 1, distractors: ['gloves', 'scarf', 'belt'] },
  { emoji: '🧣', word: 'scarf', topic: 'Clothes', tier: 1, distractors: ['tie', 'belt', 'gloves'] },
  {
    emoji: '🧤',
    word: 'gloves',
    topic: 'Clothes',
    tier: 1,
    distractors: ['socks', 'boots', 'jumper'],
  },
  { emoji: '👒', word: 'hat', topic: 'Clothes', tier: 1, distractors: ['tie', 'scarf', 'belt'] },
  {
    emoji: '👓',
    word: 'glasses',
    topic: 'Clothes',
    tier: 1,
    distractors: ['necklace', 'watch', 'ring'],
  },

  // Weather
  { emoji: '☀️', word: 'sun', topic: 'Weather', tier: 1, distractors: ['rain', 'cloud', 'snow'] },
  { emoji: '🌧️', word: 'rain', topic: 'Weather', tier: 1, distractors: ['snow', 'sun', 'wind'] },
  { emoji: '❄️', word: 'snow', topic: 'Weather', tier: 1, distractors: ['rain', 'wind', 'fog'] },
  { emoji: '⛅', word: 'cloud', topic: 'Weather', tier: 1, distractors: ['rain', 'snow', 'wind'] },
  {
    emoji: '🌈',
    word: 'rainbow',
    topic: 'Weather',
    tier: 1,
    distractors: ['storm', 'snow', 'wind'],
  },
  {
    emoji: '⚡',
    word: 'lightning',
    topic: 'Weather',
    tier: 1,
    distractors: ['fog', 'wind', 'rain'],
  },

  // Nature
  { emoji: '🌙', word: 'moon', topic: 'Nature', tier: 1, distractors: ['sun', 'star', 'cloud'] },
  { emoji: '⭐', word: 'star', topic: 'Nature', tier: 1, distractors: ['moon', 'cloud', 'flower'] },
  { emoji: '🌳', word: 'tree', topic: 'Nature', tier: 1, distractors: ['flower', 'grass', 'leaf'] },
  { emoji: '🍁', word: 'leaf', topic: 'Nature', tier: 1, distractors: ['tree', 'flower', 'grass'] },

  // Transport
  { emoji: '🚗', word: 'car', topic: 'Transport', tier: 1, distractors: ['bus', 'van', 'lorry'] },
  { emoji: '🚌', word: 'bus', topic: 'Transport', tier: 1, distractors: ['car', 'train', 'taxi'] },
  {
    emoji: '🚲',
    word: 'bicycle',
    topic: 'Transport',
    tier: 1,
    distractors: ['motorbike', 'scooter', 'car'],
  },
  {
    emoji: '✈️',
    word: 'aeroplane',
    topic: 'Transport',
    tier: 1,
    distractors: ['helicopter', 'rocket', 'boat'],
  },
  {
    emoji: '🚂',
    word: 'train',
    topic: 'Transport',
    tier: 1,
    distractors: ['tram', 'bus', 'lorry'],
  },
  {
    emoji: '🚢',
    word: 'ship',
    topic: 'Transport',
    tier: 1,
    distractors: ['bus', 'plane', 'train'],
  },
  { emoji: '🚕', word: 'taxi', topic: 'Transport', tier: 1, distractors: ['bus', 'lorry', 'van'] },
  {
    emoji: '🚁',
    word: 'helicopter',
    topic: 'Transport',
    tier: 1,
    distractors: ['aeroplane', 'rocket', 'hot-air balloon'],
  },
  {
    emoji: '🚑',
    word: 'ambulance',
    topic: 'Transport',
    tier: 1,
    distractors: ['police car', 'fire engine', 'taxi'],
  },
  {
    emoji: '⛵',
    word: 'boat',
    topic: 'Transport',
    tier: 1,
    distractors: ['car', 'bicycle', 'train'],
  },

  // The home
  {
    emoji: '🏠',
    word: 'house',
    topic: 'The home',
    tier: 1,
    distractors: ['garden', 'room', 'door'],
  },
  { emoji: '🛏️', word: 'bed', topic: 'The home', tier: 1, distractors: ['chair', 'sofa', 'table'] },
  {
    emoji: '🛁',
    word: 'bath',
    topic: 'The home',
    tier: 1,
    distractors: ['sink', 'shower', 'mirror'],
  },
  { emoji: '🔑', word: 'key', topic: 'The home', tier: 1, distractors: ['lock', 'handle', 'bell'] },
  { emoji: '🛋️', word: 'sofa', topic: 'The home', tier: 1, distractors: ['bed', 'chair', 'table'] },
  {
    emoji: '🚿',
    word: 'shower',
    topic: 'The home',
    tier: 1,
    distractors: ['bath', 'toilet', 'sink'],
  },
  {
    emoji: '🚽',
    word: 'toilet',
    topic: 'The home',
    tier: 1,
    distractors: ['bath', 'shower', 'sink'],
  },

  // Sport and music
  {
    emoji: '⚽',
    word: 'football',
    topic: 'Sport and music',
    tier: 1,
    distractors: ['basketball', 'tennis ball', 'golf ball'],
  },
  {
    emoji: '🎸',
    word: 'guitar',
    topic: 'Sport and music',
    tier: 1,
    distractors: ['violin', 'drum', 'piano'],
  },
  {
    emoji: '🪁',
    word: 'kite',
    topic: 'Sport and music',
    tier: 1,
    distractors: ['balloon', 'ball', 'flag'],
  },
  {
    emoji: '🎈',
    word: 'balloon',
    topic: 'Sport and music',
    tier: 1,
    distractors: ['kite', 'flag', 'present'],
  },

  // ── Tier 2 (A2): the word in a sentence ────────────────────────────────────
  {
    word: 'aunt',
    topic: 'Family',
    tier: 2,
    sentence: "My mum's sister is my ___.",
    distractors: ['cousin', 'niece', 'grandmother'],
  },
  {
    word: 'uncle',
    topic: 'Family',
    tier: 2,
    sentence: "My dad's brother is my ___.",
    distractors: ['cousin', 'nephew', 'grandfather'],
  },
  {
    word: 'cousin',
    topic: 'Family',
    tier: 2,
    sentence: "My aunt's son is my ___.",
    distractors: ['brother', 'nephew', 'uncle'],
  },
  {
    word: 'grandmother',
    topic: 'Family',
    tier: 2,
    sentence: "My dad's mum is my ___.",
    distractors: ['aunt', 'cousin', 'granddaughter'],
  },
  {
    word: 'grandfather',
    topic: 'Family',
    tier: 2,
    sentence: "My mum's dad is my ___.",
    distractors: ['uncle', 'great-uncle', 'grandson'],
  },
  {
    word: 'sister',
    topic: 'Family',
    tier: 2,
    sentence: "Tom and Lily have the same mum and dad. Lily is Tom's ___.",
    distractors: ['cousin', 'aunt', 'daughter'],
  },
  {
    word: 'wife',
    topic: 'Family',
    tier: 2,
    sentence: "Ana is married to Leo. Ana is Leo's ___.",
    distractors: ['sister', 'aunt', 'daughter'],
  },
  {
    word: 'son',
    topic: 'Family',
    tier: 2,
    sentence: 'Mr and Mrs Patel have two children, Raj and Priya. Raj is their ___.',
    distractors: ['brother', 'nephew', 'uncle'],
  },
  {
    word: 'grandparents',
    topic: 'Family',
    tier: 2,
    sentence: "My mum's mum and dad, and my dad's mum and dad, are my ___.",
    distractors: ['cousins', 'aunts', 'grandchildren'],
  },
  {
    word: 'twins',
    topic: 'Family',
    tier: 2,
    sentence: 'My brother and I were born on the same day, ten minutes apart. We are ___.',
    distractors: ['cousins', 'parents', 'neighbours'],
  },
  {
    word: 'niece',
    topic: 'Family',
    tier: 2,
    sentence: "My sister's daughter is my ___.",
    distractors: ['cousin', 'aunt', 'granddaughter'],
  },
  {
    word: 'nephew',
    topic: 'Family',
    tier: 2,
    sentence: "My brother's son is my ___.",
    distractors: ['cousin', 'uncle', 'grandson'],
  },
  {
    word: 'kitten',
    topic: 'Animals',
    tier: 2,
    sentence: 'A young cat is called a ___.',
    distractors: ['puppy', 'lamb', 'piglet'],
  },
  {
    word: 'puppy',
    topic: 'Animals',
    tier: 2,
    sentence: 'A young dog is called a ___.',
    distractors: ['kitten', 'foal', 'chick'],
  },
  {
    word: 'lamb',
    topic: 'Animals',
    tier: 2,
    sentence: 'A young sheep is called a ___.',
    distractors: ['calf', 'foal', 'kitten'],
  },
  {
    word: 'honey',
    topic: 'Animals',
    tier: 2,
    sentence: 'Bees make ___.',
    distractors: ['milk', 'butter', 'wool'],
  },
  {
    word: 'giraffe',
    topic: 'Animals',
    tier: 2,
    sentence: 'A ___ has a very long neck and eats leaves from tall trees.',
    distractors: ['zebra', 'hippo', 'kangaroo'],
  },
  {
    word: 'nest',
    topic: 'Animals',
    tier: 2,
    sentence: 'A bird lays its eggs in a ___.',
    distractors: ['web', 'hive', 'shell'],
  },
  {
    word: 'wings',
    topic: 'Animals',
    tier: 2,
    sentence: 'Birds fly with their ___.',
    distractors: ['legs', 'ears', 'beaks'],
  },
  {
    word: 'library',
    topic: 'Places in town',
    tier: 2,
    sentence: 'You can borrow books from the ___.',
    distractors: ['bookshop', 'bakery', 'bank'],
  },
  {
    word: 'bakery',
    topic: 'Places in town',
    tier: 2,
    sentence: 'You can buy bread and cakes at the ___.',
    distractors: ['library', 'pharmacy', 'bank'],
  },
  {
    word: 'pharmacy',
    topic: 'Places in town',
    tier: 2,
    sentence: 'You can buy medicine at the ___.',
    distractors: ['bakery', 'library', 'post office'],
  },
  {
    word: 'post office',
    topic: 'Places in town',
    tier: 2,
    sentence: 'You can send letters and parcels at the ___.',
    distractors: ['police station', 'bus station', 'swimming pool'],
  },
  {
    word: 'hospital',
    topic: 'Places in town',
    tier: 2,
    sentence: 'Doctors and nurses work in a ___.',
    distractors: ['hotel', 'museum', 'restaurant'],
  },
  {
    word: 'museum',
    topic: 'Places in town',
    tier: 2,
    sentence: 'You can see dinosaur bones in a ___.',
    distractors: ['cinema', 'stadium', 'hospital'],
  },
  {
    word: 'cinema',
    topic: 'Places in town',
    tier: 2,
    sentence: 'We watch a film at the ___.',
    distractors: ['museum', 'library', 'stadium'],
  },
  {
    word: 'station',
    topic: 'Places in town',
    tier: 2,
    sentence: 'You catch a train at the ___.',
    distractors: ['airport', 'harbour', 'car park'],
  },
  {
    word: 'airport',
    topic: 'Places in town',
    tier: 2,
    sentence: 'Planes take off and land at the ___.',
    distractors: ['station', 'harbour', 'garage'],
  },
  {
    word: 'stadium',
    topic: 'Places in town',
    tier: 2,
    sentence: 'You can watch a football match at the ___.',
    distractors: ['library', 'museum', 'hospital'],
  },
  {
    word: 'kitchen',
    topic: 'The home',
    tier: 2,
    sentence: 'We cook dinner in the ___.',
    distractors: ['bedroom', 'bathroom', 'garage'],
  },
  {
    word: 'bedroom',
    topic: 'The home',
    tier: 2,
    sentence: 'At night I sleep in my ___.',
    distractors: ['kitchen', 'bathroom', 'garden'],
  },
  {
    word: 'garage',
    topic: 'The home',
    tier: 2,
    sentence: 'Dad parks the car in the ___.',
    distractors: ['garden', 'kitchen', 'hall'],
  },
  {
    word: 'fridge',
    topic: 'The home',
    tier: 2,
    sentence: 'Keep the milk cold in the ___.',
    distractors: ['oven', 'cupboard', 'sink'],
  },
  {
    word: 'oven',
    topic: 'The home',
    tier: 2,
    sentence: 'Bake the cake in the ___.',
    distractors: ['fridge', 'sink', 'freezer'],
  },
  {
    word: 'pillow',
    topic: 'The home',
    tier: 2,
    sentence: 'Put your head on the ___ and go to sleep.',
    distractors: ['blanket', 'towel', 'carpet'],
  },
  {
    word: 'towel',
    topic: 'The home',
    tier: 2,
    sentence: 'Dry your hands with a ___.',
    distractors: ['soap', 'pillow', 'brush'],
  },
  {
    word: 'tap',
    topic: 'The home',
    tier: 2,
    sentence: 'Turn on the ___ and fill your glass with water.',
    distractors: ['plug', 'fan', 'lamp'],
  },
  {
    word: 'pilot',
    topic: 'Jobs',
    tier: 2,
    sentence: 'A ___ flies a plane.',
    distractors: ['driver', 'sailor', 'chef'],
  },
  {
    word: 'chef',
    topic: 'Jobs',
    tier: 2,
    sentence: 'A ___ cooks food in a restaurant.',
    distractors: ['waiter', 'farmer', 'vet'],
  },
  {
    word: 'waiter',
    topic: 'Jobs',
    tier: 2,
    sentence: 'A ___ brings your food to the table in a café.',
    distractors: ['driver', 'farmer', 'nurse'],
  },
  {
    word: 'dentist',
    topic: 'Jobs',
    tier: 2,
    sentence: 'A ___ looks after your teeth.',
    distractors: ['optician', 'vet', 'pilot'],
  },
  {
    word: 'vet',
    topic: 'Jobs',
    tier: 2,
    sentence: 'A ___ looks after sick animals.',
    distractors: ['dentist', 'pilot', 'waiter'],
  },
  {
    word: 'farmer',
    topic: 'Jobs',
    tier: 2,
    sentence: 'A ___ grows crops and looks after animals in the fields.',
    distractors: ['baker', 'butcher', 'builder'],
  },
  {
    word: 'firefighter',
    topic: 'Jobs',
    tier: 2,
    sentence: 'A ___ sprays water on a burning house.',
    distractors: ['police officer', 'lifeguard', 'builder'],
  },
  {
    word: 'butcher',
    topic: 'Jobs',
    tier: 2,
    sentence: 'A ___ sells meat.',
    distractors: ['baker', 'florist', 'waiter'],
  },
  {
    word: 'breakfast',
    topic: 'Food & drink',
    tier: 2,
    sentence: 'We eat ___ in the morning.',
    distractors: ['lunch', 'dinner', 'afternoon tea'],
  },
  {
    word: 'bar',
    topic: 'Food & drink',
    tier: 2,
    sentence: "I'd like a ___ of chocolate, please.",
    distractors: ['loaf', 'bunch', 'slice'],
  },
  {
    word: 'slice',
    topic: 'Food & drink',
    tier: 2,
    sentence: 'Can I have a ___ of bread, please?',
    distractors: ['cup', 'bar', 'bottle'],
  },
  {
    word: 'bunch',
    topic: 'Food & drink',
    tier: 2,
    sentence: 'I bought a ___ of bananas.',
    distractors: ['loaf', 'slice', 'bar'],
  },
  {
    word: 'sour',
    topic: 'Food & drink',
    tier: 2,
    sentence: 'Lemons taste ___.',
    distractors: ['sweet', 'salty', 'hot'],
  },
  {
    word: 'sweet',
    topic: 'Food & drink',
    tier: 2,
    sentence: 'Sugar tastes ___.',
    distractors: ['sour', 'salty', 'bitter'],
  },
  {
    word: 'spoon',
    topic: 'Food & drink',
    tier: 2,
    sentence: 'We eat soup with a ___.',
    distractors: ['fork', 'knife', 'plate'],
  },
  {
    word: 'gloves',
    topic: 'Clothes',
    tier: 2,
    sentence: 'It is snowing. Put on your ___ to keep your hands warm.',
    distractors: ['socks', 'scarf', 'slippers'],
  },
  {
    word: 'umbrella',
    topic: 'Clothes',
    tier: 2,
    sentence: 'It is raining. Open your ___ so you stay dry.',
    distractors: ['sunglasses', 'gloves', 'scarf'],
  },
  {
    word: 'sunglasses',
    topic: 'Clothes',
    tier: 2,
    sentence: 'It is very bright today. Wear your ___ to protect your eyes.',
    distractors: ['gloves', 'scarf', 'slippers'],
  },
  {
    word: 'pyjamas',
    topic: 'Clothes',
    tier: 2,
    sentence: 'Put on your ___ before you go to bed.',
    distractors: ['uniform', 'swimsuit', 'raincoat'],
  },
  {
    word: 'swimsuit',
    topic: 'Clothes',
    tier: 2,
    sentence: "Put on your ___. We're going into the sea.",
    distractors: ['raincoat', 'uniform', 'dressing gown'],
  },
  {
    word: 'helmet',
    topic: 'Clothes',
    tier: 2,
    sentence: 'Wear a ___ on your head when you ride your bike.',
    distractors: ['seat belt', 'life jacket', 'apron'],
  },
  {
    word: 'seat belt',
    topic: 'Clothes',
    tier: 2,
    sentence: 'In a car, the law says you must wear a ___.',
    distractors: ['helmet', 'life jacket', 'uniform'],
  },
  {
    word: 'knee',
    topic: 'The body',
    tier: 2,
    sentence: 'Your ___ is in the middle of your leg, where it bends.',
    distractors: ['elbow', 'wrist', 'ankle'],
    facts: ['leg'],
  },
  {
    word: 'finger',
    topic: 'The body',
    tier: 2,
    sentence: 'You wear a ring on your ___.',
    distractors: ['neck', 'knee', 'elbow'],
  },
  {
    word: 'wrist',
    topic: 'The body',
    tier: 2,
    sentence: 'You wear a watch on your ___.',
    distractors: ['ankle', 'elbow', 'knee'],
  },
  {
    word: 'teeth',
    topic: 'The body',
    tier: 2,
    sentence: 'I brush my ___ after every meal.',
    distractors: ['nails', 'ears', 'feet'],
    facts: ['tooth'],
  },
  {
    word: 'hungry',
    topic: 'Feelings',
    tier: 2,
    sentence: 'Tom has not eaten all day. He is very ___.',
    distractors: ['thirsty', 'full', 'cold'],
  },
  {
    word: 'thirsty',
    topic: 'Feelings',
    tier: 2,
    sentence: 'Mia needs a drink of water. She is ___.',
    distractors: ['hungry', 'full', 'excited'],
  },
  {
    word: 'tired',
    topic: 'Feelings',
    tier: 2,
    sentence: 'Leo is yawning, and his eyes keep closing. He is ___.',
    distractors: ['angry', 'hungry', 'thirsty'],
  },
  {
    word: 'happy',
    topic: 'Feelings',
    tier: 2,
    sentence: 'Our team won the cup. We are all very ___.',
    distractors: ['sad', 'angry', 'bored'],
  },
  {
    word: 'sad',
    topic: 'Feelings',
    tier: 2,
    sentence: 'Sam has lost his favourite cap. He is ___.',
    distractors: ['happy', 'excited', 'proud'],
  },
  {
    word: 'scared',
    topic: 'Feelings',
    tier: 2,
    sentence: 'Zoe sees a big spider on her bed. She is ___.',
    distractors: ['bored', 'proud', 'hungry'],
  },
  {
    word: 'bored',
    topic: 'Feelings',
    tier: 2,
    sentence: "There is nothing to do, and the rain won't stop. Max is ___.",
    distractors: ['proud', 'full', 'brave'],
  },
  {
    word: 'angry',
    topic: 'Feelings',
    tier: 2,
    sentence: "Ella's little brother broke her new phone. She is very ___.",
    distractors: ['happy', 'proud', 'bored'],
  },
  {
    word: 'cold',
    topic: 'Weather',
    tier: 2,
    sentence: "Take your coat. It's very ___ today.",
    distractors: ['hot', 'sunny', 'warm'],
  },
  {
    word: 'fog',
    topic: 'Weather',
    tier: 2,
    sentence: "There's a lot of ___ today. I can't see the end of the street.",
    distractors: ['sun', 'wind', 'heat'],
  },
  {
    word: 'windy',
    topic: 'Weather',
    tier: 2,
    sentence: "It's very ___ today. Hold on to your hat.",
    distractors: ['sunny', 'foggy', 'cold'],
  },
  {
    word: 'sunny',
    topic: 'Weather',
    tier: 2,
    sentence: "It's ___ today, so the beach will be hot and busy.",
    distractors: ['foggy', 'rainy', 'stormy'],
  },
  {
    word: 'ticket',
    topic: 'Transport',
    tier: 2,
    sentence: 'You need a ___ to travel by train.',
    distractors: ['stamp', 'receipt', 'map'],
  },
  {
    word: 'ferry',
    topic: 'Transport',
    tier: 2,
    sentence: 'We went across the sea on a ___.',
    distractors: ['bus', 'train', 'lorry'],
  },
  {
    word: 'road',
    topic: 'Transport',
    tier: 2,
    sentence: 'Look left and right before you cross the ___.',
    distractors: ['river', 'sea', 'beach'],
  },
  {
    word: 'tennis',
    topic: 'Sport and music',
    tier: 2,
    sentence: 'In ___, you hit a ball over a net with a racket.',
    distractors: ['golf', 'football', 'cricket'],
  },
  {
    word: 'piano',
    topic: 'Sport and music',
    tier: 2,
    sentence: 'You play the ___ by pressing black and white keys.',
    distractors: ['guitar', 'drum', 'violin'],
  },
  {
    word: 'cup',
    topic: 'Food & drink',
    tier: 2,
    sentence: 'The subject still held them when Joe came in from his work to have a ___ of tea.',
    source: 'Charles Dickens, Great Expectations, Chapter 9',
    distractors: ['loaf', 'slice', 'bar'],
  },
  {
    word: 'bowl',
    topic: 'The home',
    tier: 2,
    sentence: 'Mix the flour, sugar and eggs in a big ___.',
    distractors: ['plate', 'glass', 'tray'],
  },
  {
    word: 'cows',
    topic: 'Animals',
    tier: 2,
    sentence: 'The farmer gets up early to milk his ___.',
    distractors: ['hens', 'pigs', 'dogs'],
  },
  {
    word: 'shell',
    topic: 'Animals',
    tier: 2,
    sentence: 'The tortoise pulled its head into its ___.',
    distractors: ['nest', 'cage', 'pocket'],
  },
  {
    word: 'tail',
    topic: 'Animals',
    tier: 2,
    sentence: 'The dog wagged its ___ because it was happy to see us.',
    distractors: ['paws', 'ears', 'legs'],
  },
  {
    word: 'butterfly',
    topic: 'Animals',
    tier: 2,
    sentence: 'A caterpillar turns into a ___.',
    distractors: ['bee', 'spider', 'ladybird'],
  },
  {
    word: 'eggs',
    topic: 'Animals',
    tier: 2,
    sentence: 'We get honey from bees, wool from sheep and ___ from hens.',
    distractors: ['milk', 'butter', 'cheese'],
    facts: ['egg'],
  },
  // TIER2

  // ── Tier 3 (B1): the word in a short text or a dialogue ────────────────────
  {
    word: 'cousin',
    topic: 'Family',
    tier: 3,
    sentence: "Ella's mum has a brother called Ben. Ben has a son called Joe. Joe is Ella's ___.",
    distractors: ['nephew', 'brother', 'uncle'],
  },
  {
    word: 'nephew',
    topic: 'Family',
    tier: 3,
    sentence: "Sam's dad has a sister called Rosa. Sam is Rosa's ___.",
    distractors: ['son', 'cousin', 'brother'],
    facts: ['son'],
  },
  {
    word: 'cousin',
    topic: 'Family',
    tier: 3,
    sentence: "Lily's aunt Kate has just had a baby girl. The baby is Lily's ___.",
    distractors: ['sister', 'niece', 'aunt'],
  },
  {
    word: 'niece',
    topic: 'Family',
    tier: 3,
    sentence: "A: Who's that girl with your brother?\nB: That's Lucy, his daughter. She's my ___.",
    distractors: ['cousin', 'sister', 'granddaughter'],
  },
  {
    word: 'stepfather',
    topic: 'Family',
    tier: 3,
    sentence: "Leo's mum married again last year. Her new husband, Dan, is Leo's ___.",
    distractors: ['father-in-law', 'uncle', 'grandfather'],
  },
  {
    word: 'uncle',
    topic: 'Family',
    tier: 3,
    sentence: "My dad's sister is married to Carlos. Carlos is my ___.",
    distractors: ['cousin', 'nephew', 'grandfather'],
  },
  {
    word: 'cousins',
    topic: 'Family',
    tier: 3,
    sentence: "Grandma has two children: my mum and my uncle Pete. Pete's children are my ___.",
    distractors: ['brothers', 'nephews', 'uncles'],
    facts: ['cousin'],
  },
  {
    word: 'aunt',
    topic: 'Family',
    tier: 3,
    sentence: "Amy's sister has a baby boy. Amy is his ___.",
    distractors: ['cousin', 'niece', 'grandmother'],
  },
  {
    word: 'great-uncle',
    topic: 'Family',
    tier: 3,
    sentence: "My grandad's brother is my ___.",
    distractors: ['cousin', 'nephew', 'grandson'],
    facts: ['uncle'],
  },
  {
    word: 'change',
    topic: 'Shopping and eating out',
    tier: 3,
    sentence:
      "A: That's £4.50, please.\nB: Here's a five-pound note.\nA: Thank you. And here's your ___: 50p.",
    distractors: ['receipt', 'bill', 'ticket'],
  },
  {
    word: 'bill',
    topic: 'Shopping and eating out',
    tier: 3,
    sentence:
      "A: Excuse me, could we have the ___, please? We'd like to pay.\nB: Of course. I'll bring it now.",
    distractors: ['menu', 'change', 'recipe'],
  },
  {
    word: 'menu',
    topic: 'Shopping and eating out',
    tier: 3,
    sentence: 'A: Are you ready to order?\nB: Not yet, sorry. Could we see the ___ again?',
    distractors: ['bill', 'receipt', 'recipe'],
  },
  {
    word: 'receipt',
    topic: 'Shopping and eating out',
    tier: 3,
    sentence:
      "A: I'd like to take this jumper back. It's too small.\nB: Have you got the ___?\nA: Yes, here it is. I paid by card.",
    distractors: ['recipe', 'menu', 'change'],
  },
  {
    word: 'full',
    topic: 'Shopping and eating out',
    tier: 3,
    sentence: "A: Would you like some more cake?\nB: No, thank you. I'm ___. I've eaten too much.",
    distractors: ['hungry', 'thirsty', 'cold'],
  },
  {
    word: 'changing room',
    topic: 'Shopping and eating out',
    tier: 3,
    sentence:
      'A: Can I try these jeans on?\nB: Of course. The ___ is over there, next to the mirror.',
    distractors: ['waiting room', 'dining room', 'living room'],
  },
  {
    word: 'size',
    topic: 'Shopping and eating out',
    tier: 3,
    sentence:
      "A: These shoes are too small. Have you got a bigger ___?\nB: Yes. Try these. They're a 6.",
    distractors: ['price', 'colour', 'shop'],
  },
  {
    word: 'table',
    topic: 'Shopping and eating out',
    tier: 3,
    sentence:
      "A: Hello, I'd like to book a ___ for two people at eight o'clock.\nB: Certainly. Inside or outside?",
    distractors: ['room', 'ticket', 'taxi'],
  },
  {
    word: 'queue',
    topic: 'Shopping and eating out',
    tier: 3,
    sentence: 'The supermarket was very busy. I waited in a long ___ to pay.',
    distractors: ['row', 'crowd', 'team'],
  },
  {
    word: 'wallet',
    topic: 'Shopping and eating out',
    tier: 3,
    sentence: "I've lost my ___. All my money and bank cards were in it.",
    distractors: ['umbrella', 'ticket', 'passport'],
  },
  {
    word: 'child',
    topic: 'People',
    tier: 3,
    sentence: "A: Have you got any brothers or sisters?\nB: No, I haven't. I'm an only ___.",
    distractors: ['baby', 'cousin', 'twin'],
  },
  {
    word: 'nephew',
    topic: 'Family',
    tier: 3,
    sentence:
      '"A merry Christmas, uncle! God save you!" cried a cheerful voice. It was the voice of Scrooge\'s ___ ...',
    source: 'Charles Dickens, A Christmas Carol, Stave 1',
    distractors: ['uncle', 'son', 'brother'],
  },
  {
    word: 'wife',
    topic: 'Family',
    tier: 3,
    sentence:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a ___.',
    source: 'Jane Austen, Pride and Prejudice, Chapter 1',
    distractors: ['sister', 'daughter', 'cousin'],
  },
  {
    word: 'gold',
    topic: 'People',
    tier: 3,
    sentence:
      '"And how did little Tim behave?" asked Mrs. Cratchit ... "As good as ___," said Bob ...',
    source: 'Charles Dickens, A Christmas Carol, Stave 3',
    distractors: ['new', 'silver', 'honey'],
  },
  {
    word: 'loudly',
    topic: 'People',
    tier: 3,
    sentence: "My grandmother can't hear very well, so we have to speak ___.",
    distractors: ['quietly', 'angrily', 'sadly'],
  },
  {
    word: 'platform',
    topic: 'Travel',
    tier: 3,
    sentence: 'A: Which ___ does the London train leave from?\nB: Number 4, over the bridge.',
    distractors: ['terminal', 'gate', 'stop'],
  },
  {
    word: 'ticket',
    topic: 'Travel',
    tier: 3,
    sentence: 'A: How much is a ___ to Leeds?\nB: A single is £12, and a return is £20.',
    distractors: ['passport', 'suitcase', 'platform'],
  },
  {
    word: 'walk',
    topic: 'Travel',
    tier: 3,
    sentence:
      "A: Shall we take the bus to the beach?\nB: No, let's ___. It's only ten minutes on foot.",
    distractors: ['drive', 'fly', 'swim'],
  },
  {
    word: 'passengers',
    topic: 'Travel',
    tier: 3,
    sentence: 'The bus was full of ___. Every seat was taken, and some people had to stand.',
    distractors: ['drivers', 'pilots', 'tickets'],
  },
  {
    word: 'traffic',
    topic: 'Travel',
    tier: 3,
    sentence: 'There was so much ___ on the motorway that our journey took four hours.',
    distractors: ['weather', 'petrol', 'luggage'],
  },
  {
    word: 'passport',
    topic: 'Travel',
    tier: 3,
    sentence: "Don't forget your ___. You can't fly to Spain without it.",
    distractors: ['suitcase', 'umbrella', 'sunglasses'],
  },
  {
    word: 'luggage',
    topic: 'Travel',
    tier: 3,
    sentence: 'We had too much ___, so we paid extra at the airport.',
    distractors: ['passport', 'ticket', 'journey'],
  },
  {
    word: 'suitcase',
    topic: 'Travel',
    tier: 3,
    sentence:
      "A: Can you help me with my ___? It's really heavy.\nB: Of course. Which train are you getting?",
    distractors: ['passport', 'ticket', 'wallet'],
  },
  {
    word: 'bridge',
    topic: 'Travel',
    tier: 3,
    sentence:
      "A: Is it far to the castle?\nB: Not really. Go over the ___, and it's on the other side of the river.",
    distractors: ['tunnel', 'roof', 'wall'],
  },
  {
    word: 'weather',
    topic: 'Travel',
    tier: 3,
    sentence:
      'A: Did you enjoy your holiday?\nB: Yes, but the ___ was terrible. It rained every day.',
    distractors: ['food', 'hotel', 'journey'],
  },
  {
    word: 'dentist',
    topic: 'Health',
    tier: 3,
    sentence: "A: Where's Dad?\nB: He's at the ___. He's got toothache.",
    distractors: ['library', 'hairdresser', 'bank'],
  },
  {
    word: 'pharmacy',
    topic: 'Health',
    tier: 3,
    sentence:
      "A: Is there a ___ near here? I need some medicine for my cough.\nB: Yes, there's one next to the bank.",
    distractors: ['bakery', 'library', 'museum'],
  },
  {
    word: 'temperature',
    topic: 'Health',
    tier: 3,
    sentence: 'The doctor took my ___. It was 39 degrees, so I stayed in bed.',
    distractors: ['medicine', 'appointment', 'prescription'],
  },
  {
    word: 'throat',
    topic: 'Health',
    tier: 3,
    sentence: "I've got a sore ___. It hurts when I swallow.",
    distractors: ['knee', 'elbow', 'back'],
  },
  {
    word: 'plaster',
    topic: 'Health',
    tier: 3,
    sentence: 'I cut my finger, so Mum put a ___ on it.',
    distractors: ['ribbon', 'scarf', 'ring'],
  },
  {
    word: 'stomach',
    topic: 'Health',
    tier: 3,
    sentence:
      "A: You look pale. What's wrong?\nB: I feel sick. I ate too many sweets, and now my ___ hurts.",
    distractors: ['knee', 'elbow', 'ear'],
  },
  {
    word: 'pocket',
    topic: 'Clothes',
    tier: 3,
    sentence: 'My coat has a big ___. I keep my phone and keys in it.',
    distractors: ['button', 'collar', 'sleeve'],
  },
  {
    word: 'sleeves',
    topic: 'Clothes',
    tier: 3,
    sentence: 'This jumper is too long for me. The ___ cover my hands.',
    distractors: ['pockets', 'buttons', 'collars'],
  },
  {
    word: 'storm',
    topic: 'Weather',
    tier: 3,
    sentence: 'There was a ___ last night. The thunder was so loud that the baby woke up.',
    distractors: ['rainbow', 'breeze', 'frost'],
  },
  {
    word: 'frost',
    topic: 'Weather',
    tier: 3,
    sentence: 'In the morning the grass was white and crunchy. There had been a ___ in the night.',
    distractors: ['storm', 'rainbow', 'breeze'],
  },
  {
    word: 'slowly',
    topic: 'Travel',
    tier: 3,
    sentence: 'It is very foggy this morning, so please drive ___.',
    distractors: ['quickly', 'loudly', 'happily'],
  },
  {
    word: 'umbrella',
    topic: 'Weather',
    tier: 3,
    sentence:
      'We walked to town, my sister leading the way in a very large beaver bonnet, and carrying a basket ..., a spare shawl, and an ___, though it was a fine bright day.',
    source: 'Charles Dickens, Great Expectations, Chapter 13',
    distractors: ['apron', 'envelope', 'apple'],
  },
  {
    word: 'wind',
    topic: 'Weather',
    tier: 3,
    sentence:
      'It was a fine dry night; frost in the air; the streets as clean as a ballroom floor; the lamps, unshaken by any ___, drawing a regular pattern of light and shadow.',
    source: 'Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde, "Search for Mr. Hyde"',
    distractors: ['rain', 'sun', 'snow'],
  },
  {
    word: 'garage',
    topic: 'Transport',
    tier: 3,
    sentence: "Mum's car broke down, so she took it to the ___ to be mended.",
    distractors: ['bakery', 'library', 'museum'],
  },
  {
    word: 'lead',
    topic: 'The home',
    tier: 3,
    sentence:
      'Every morning I take my dog for a walk in the park. He pulls hard on his ___, so I hold it tightly.',
    distractors: ['bone', 'tail', 'kennel'],
  },
  {
    word: 'keys',
    topic: 'The home',
    tier: 3,
    sentence:
      "I forgot my ___, so I couldn't open the front door. I waited in the garden until Mum came home.",
    distractors: ['ticket', 'umbrella', 'wallet'],
    facts: ['key'],
  },
  {
    word: 'neighbour',
    topic: 'The home',
    tier: 3,
    sentence: 'Mrs Green lives in the house next to ours. She is our ___.',
    distractors: ['guest', 'passenger', 'customer'],
  },
  {
    word: 'recipe',
    topic: 'The home',
    tier: 3,
    sentence: "I'm going to make a cake. First I'll read the ___ to see what I need.",
    distractors: ['receipt', 'menu', 'bill'],
  },
  {
    word: 'curtains',
    topic: 'The home',
    tier: 3,
    sentence: 'Close the ___, please. The sun is shining in my eyes.',
    distractors: ['cupboards', 'books', 'drawers'],
  },
  {
    word: 'ceiling',
    topic: 'The home',
    tier: 3,
    sentence: 'Water is dripping from the ___. I think the roof is leaking.',
    distractors: ['floor', 'carpet', 'sink'],
  },
  {
    word: 'heating',
    topic: 'The home',
    tier: 3,
    sentence:
      'A: Why are you wearing your coat inside?\nB: The ___ is broken, and the house is freezing.',
    distractors: ['fridge', 'shower', 'doorbell'],
  },
  {
    word: 'flat',
    topic: 'The home',
    tier: 3,
    sentence: 'A: Do you live in a house?\nB: No, we live in a ___ on the fifth floor.',
    distractors: ['tent', 'farm', 'cottage'],
  },
  {
    word: 'stairs',
    topic: 'The home',
    tier: 3,
    sentence: 'The lift is not working, so you will have to use the ___.',
    distractors: ['ladder', 'roof', 'window'],
  },
  {
    word: 'volume',
    topic: 'The home',
    tier: 3,
    sentence: "I can't hear the TV. Can you turn the ___ up, please?",
    distractors: ['light', 'heating', 'oven'],
  },
  {
    word: 'quietly',
    topic: 'The home',
    tier: 3,
    sentence: 'The baby is asleep, so please speak ___.',
    distractors: ['loudly', 'quickly', 'angrily'],
  },
  {
    word: 'fence',
    topic: 'The home',
    tier: 3,
    sentence:
      'The tree fell down in the storm and broke our ___. Now the dog can get out of the garden.',
    distractors: ['roof', 'window', 'chimney'],
  },
  {
    word: 'feathers',
    topic: 'Animals',
    tier: 3,
    sentence: "A bird's body is covered in ___. A cat's body is covered in fur.",
    distractors: ['wings', 'scales', 'whiskers'],
  },
  {
    word: 'message',
    topic: 'Free time',
    tier: 3,
    sentence:
      "A: I'll meet you outside the cinema at seven.\nB: OK. If I'm late, I'll send you a ___.",
    distractors: ['letter', 'parcel', 'postcard'],
  },
  {
    word: 'start',
    topic: 'Free time',
    tier: 3,
    sentence:
      "A: The film begins at eight.\nB: Then we must leave at half past seven, or we'll miss the ___.",
    distractors: ['end', 'ticket', 'popcorn'],
  },
  {
    word: 'tent',
    topic: 'Free time',
    tier: 3,
    sentence: 'We put up our ___ in the field and slept in sleeping bags.',
    distractors: ['flag', 'fence', 'kite'],
  },
  {
    word: 'poster',
    topic: 'Free time',
    tier: 3,
    sentence: 'Our cat is lost. We have put a ___ with her photo on every tree in our street.',
    distractors: ['letter', 'ticket', 'menu'],
  },
  {
    word: 'party',
    topic: 'Free time',
    tier: 3,
    sentence: "My birthday ___ is on Saturday. I've invited ten friends.",
    distractors: ['present', 'cake', 'card'],
  },
  {
    word: 'number',
    topic: 'Free time',
    tier: 3,
    sentence: "A: What's your phone ___?\nB: It's 07700 900123.",
    distractors: ['address', 'name', 'age'],
  },
  {
    word: 'address',
    topic: 'Free time',
    tier: 3,
    sentence: 'A: Where do you live?\nB: My ___ is 12 Park Road, Leeds.',
    distractors: ['number', 'name', 'postcode'],
  },
  {
    word: 'goldfish',
    topic: 'Animals',
    tier: 3,
    sentence:
      'A: Have you got any pets?\nB: Yes, a ___. It lives in a glass tank and swims all day.',
    distractors: ['parrot', 'hamster', 'tortoise'],
  },
  {
    word: 'message',
    topic: 'Free time',
    tier: 3,
    sentence: "A: Can I speak to Mr Ali, please?\nB: I'm sorry, he's out. Can I take a ___?",
    distractors: ['photo', 'seat', 'ticket'],
  },
  {
    word: 'programme',
    topic: 'Free time',
    tier: 3,
    sentence: "A: Is there anything good on TV tonight?\nB: There's a ___ about penguins at eight.",
    distractors: ['channel', 'remote', 'screen'],
  },
  {
    word: 'sofa',
    topic: 'The home',
    tier: 3,
    sentence:
      'The said Eliza, John, and Georgiana were now clustered round their mama in the drawing-room: she lay reclined on a ___ by the fireside ...',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 1',
    distractors: ['stool', 'table', 'shelf'],
  },
  {
    word: 'horses',
    topic: 'Animals',
    tier: 3,
    sentence:
      'Boxer was an enormous beast, nearly eighteen hands high, and as strong as any two ordinary ___ put together.',
    source: 'George Orwell, Animal Farm, Chapter 1',
    distractors: ['hens', 'cats', 'mice'],
  },
  {
    word: 'card',
    topic: 'Free time',
    tier: 3,
    sentence: 'Our neighbours have a new baby. We sent them a ___ to say congratulations.',
    distractors: ['menu', 'receipt', 'ticket'],
  },
  // TIER3
]

/**
 * A sentence's words, lower case, each also read without a plural's "s" or
 * "es" and without a possessive "'s" ("my aunt's son" uses "aunt").
 */
function wordsAndStems(text: string): Set<string> {
  const out = new Set<string>()
  for (const w of text
    .toLowerCase()
    .replace(/’/g, "'")
    .split(/[^a-z'-]+/)) {
    if (!w) continue
    out.add(w)
    if (w.endsWith("'s")) out.add(w.slice(0, -2))
    if (w.endsWith('es')) out.add(w.slice(0, -2))
    if (w.endsWith('s')) out.add(w.slice(0, -1))
  }
  return out
}

const ANSWERS = [...new Set(PICTURE_BANK.map((q) => q.word.toLowerCase()))]

/**
 * What a question asks for or shows: its own word, and every other word the
 * bank asks for that its sentence uses ("A young cat is called a ___." shows
 * "cat"), so the two are never dealt in one round.
 */
function factsOf(q: PictureItem): string[] {
  const out = new Set<string>([q.word.toLowerCase(), ...(q.facts ?? [])])
  if (q.sentence) {
    const words = wordsAndStems(q.sentence)
    const text = ` ${q.sentence.toLowerCase().replace(/[^a-z'-]+/g, ' ')} `
    for (const a of ANSWERS)
      if (a.includes(' ') ? text.includes(` ${a} `) : words.has(a)) out.add(a)
  }
  return [...out]
}

export const BANK: GameBank<PictureItem> = {
  slug: 'picture-word-match',
  items: PICTURE_BANK,
  // A picture question is named by its word (each word is pictured once); a
  // sentence question by its sentence, which is what the student reads.
  key: (q) => q.sentence ?? q.word,
  answer: (q) => q.word,
  // The page deals these four in a new order each time; the four are fixed.
  options: (q) => [q.word, ...q.distractors],
  tag: (q) => q.topic,
  tier: (q) => q.tier,
  facts: factsOf,
  deepened: '2026-10-24',
}
