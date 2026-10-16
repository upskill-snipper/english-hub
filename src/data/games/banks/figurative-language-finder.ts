import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Figurative Language Finder: name the device each sentence uses. Each
 * question shows its own device and three of the other seven, drawn at random.
 *
 * Moved out of src/app/games/figurative-language-finder/page.tsx on 16 October
 * 2026, when every answer gained an explanation
 * (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * wrong options were drawn from all seven other devices, so a device the
 * sentence also used could be offered, and choosing it was marked wrong. In 25
 * of the 56 sentences a second device was plainly there, or arguable enough
 * for a careful reader to defend:
 *
 *   - every personification is also a kind of metaphor, so Metaphor was a
 *     defensible answer to all seven ("Dawn tiptoed over the hills"), as Speed
 *     Analysis found (src/data/games/banks/speed-analysis.ts);
 *   - "The classroom buzzed like a beehive" is a simile, but "buzzed" is
 *     onomatopoeia, and arguably so are the clock's "groaned", opportunity's
 *     "knocked", the alarm clock's "screamed" and the winds' "whistled"
 *     (whistling is also something people do, which personifies the wind, so
 *     Metaphor is kept from it too);
 *   - "buzzed like a beehive", "silent, sweating students", "ribbon of red",
 *     "snatched at the sandcastle", "Bees buzzed ... smooth stones", "the
 *     moment the milk", "times to tidy", "film was seriously funny from",
 *     "clearly confusing", "called the broken compass" and "living legend
 *     locally" all alliterate, though each sentence is asked about another
 *     device;
 *   - "Fear is a thief that steals" personifies fear, and the treasure chest
 *     "waiting to be unlocked" arguably does too;
 *   - a rucksack that "felt like a sack of bricks", floorboards "as cold as a
 *     frozen pond", a grandfather who is "a walking encyclopaedia", a
 *     "deafening" silence and a book "impossible to put down" exaggerate, so
 *     Hyperbole could be defended;
 *   - "seriously funny" and "clearly confusing" clash only through a play on
 *     words ("seriously" also means "very", "clearly" also means
 *     "obviously"), and "Opportunity knocked softly, but nobody ... bothered
 *     to answer" plays on the saying "opportunity knocks", so Pun could be
 *     defended.
 *
 * Twenty-four of those sentences now list the other devices in `alsoFits`,
 * and the page never offers those devices beside that sentence, so exactly one
 * option is right. (The second reader who checked these explanations added
 * five of the lists and lengthened three.) The sentences, and the device each
 * is asked about, are unchanged except two:
 *
 *   - "The actor was a minor celebrity famous for being a living legend
 *     locally" packed four ideas into one sentence, alliterated, and its
 *     oxymoron only works if "legend" means a story from long ago, when a
 *     legend is also simply a very famous person. It is now "The actor became
 *     well known for playing one of the living dead.";
 *   - "the broken ruler a pointless instrument": a ruler never has a point,
 *     broken or not, so breaking it had nothing to do with the joke. It is now
 *     a broken compass, which has a point to lose.
 *
 * Each question's one-line "why", and each device's definition, which the page
 * showed under the answer, gave way to the explanation
 * (src/data/games/explanations/figurative-language-finder.ts) and are not
 * carried here.
 */

export type Device =
  | 'simile'
  | 'metaphor'
  | 'personification'
  | 'alliteration'
  | 'onomatopoeia'
  | 'hyperbole'
  | 'oxymoron'
  | 'pun'

export interface Question {
  sentence: string
  device: Device
  /**
   * Other devices a careful reader could fairly say this sentence uses. The
   * page never draws them as wrong options beside it, so exactly one option
   * is right (see WHAT WAS WRONG above). Never more than four, so three wrong
   * options are always left to draw.
   */
  alsoFits?: Device[]
}

export const DEVICE_LABELS: Record<Device, string> = {
  simile: 'Simile',
  metaphor: 'Metaphor',
  personification: 'Personification',
  alliteration: 'Alliteration',
  onomatopoeia: 'Onomatopoeia',
  hyperbole: 'Hyperbole',
  oxymoron: 'Oxymoron',
  pun: 'Pun',
}

// All sentences below are original, written for this exercise.
export const QUESTION_BANK: Question[] = [
  // ── Simile ──
  {
    sentence: 'The new pupil was as quiet as a switched-off radio on her first morning.',
    device: 'simile',
  },
  {
    sentence: 'My rucksack felt like a sack of bricks by the end of the school trip.',
    device: 'simile',
    // A sack of bricks also exaggerates the weight.
    alsoFits: ['hyperbole'],
  },
  {
    sentence: 'The frightened kitten trembled like a leaf caught in an autumn gale.',
    device: 'simile',
  },
  {
    sentence: 'Her explanation was as clear as a freshly cleaned window.',
    device: 'simile',
  },
  {
    sentence: 'The athlete shot off the starting line like an arrow loosed from a bow.',
    device: 'simile',
  },
  {
    sentence: 'The old floorboards were as cold as a frozen pond beneath our bare feet.',
    device: 'simile',
    // A frozen pond also exaggerates the cold, as the sack of bricks does the weight.
    alsoFits: ['hyperbole'],
  },
  {
    sentence: 'The classroom buzzed like a beehive whenever the teacher stepped out.',
    device: 'simile',
    // "buzzed" imitates a sound, and "buzzed like a beehive" alliterates.
    alsoFits: ['onomatopoeia', 'alliteration'],
  },

  // ── Metaphor ──
  {
    sentence: 'The library was a treasure chest waiting to be unlocked by curious minds.',
    device: 'metaphor',
    // The chest is "waiting", like a person.
    alsoFits: ['personification'],
  },
  {
    sentence: 'My grandfather is a walking encyclopaedia of village history.',
    device: 'metaphor',
    // It also exaggerates how much he knows.
    alsoFits: ['hyperbole'],
  },
  {
    sentence: 'The exam hall was a desert of silent, sweating students.',
    device: 'metaphor',
    // "silent, sweating students" alliterates.
    alsoFits: ['alliteration'],
  },
  {
    sentence: 'Fear is a thief that steals your best ideas during a presentation.',
    device: 'metaphor',
    // A thief who steals gives fear a human action.
    alsoFits: ['personification'],
  },
  {
    sentence: 'The internet is an ocean, and most of us only paddle in the shallows.',
    device: 'metaphor',
  },
  {
    sentence: 'Her words were daggers that found every weak point in his argument.',
    device: 'metaphor',
  },
  {
    sentence: 'The motorway was a ribbon of red brake lights winding into the night.',
    device: 'metaphor',
    // "ribbon of red" alliterates.
    alsoFits: ['alliteration'],
  },

  // ── Personification ──
  {
    sentence: 'The wind hammered angrily at the windows, demanding to be let inside.',
    device: 'personification',
    // Personification is itself a kind of metaphor.
    alsoFits: ['metaphor'],
  },
  {
    sentence: 'The ancient clock groaned before it reluctantly chimed the hour.',
    device: 'personification',
    // Personification is itself a kind of metaphor. "groaned" imitates a sound.
    alsoFits: ['metaphor', 'onomatopoeia'],
  },
  {
    sentence: 'Opportunity knocked softly, but nobody in the office bothered to answer.',
    device: 'personification',
    // Personification is itself a kind of metaphor. "knocked" imitates a sound.
    // It plays on the saying "opportunity knocks": "answer" is both opening the
    // door and taking the chance.
    alsoFits: ['metaphor', 'onomatopoeia', 'pun'],
  },
  {
    sentence: 'The hungry waves snatched at the sandcastle until nothing remained.',
    device: 'personification',
    // Personification is itself a kind of metaphor. "snatched at the sandcastle" alliterates.
    alsoFits: ['metaphor', 'alliteration'],
  },
  {
    sentence: 'Dawn tiptoed over the hills, careful not to wake the sleeping town.',
    device: 'personification',
    // Personification is itself a kind of metaphor.
    alsoFits: ['metaphor'],
  },
  {
    sentence: 'The stubborn jar refused to open no matter how hard she twisted the lid.',
    device: 'personification',
    // Personification is itself a kind of metaphor.
    alsoFits: ['metaphor'],
  },
  {
    sentence: 'My alarm clock screamed at me, furious that I had ignored it twice.',
    device: 'personification',
    // Personification is itself a kind of metaphor. "screamed" can be heard as a sound word.
    alsoFits: ['metaphor', 'onomatopoeia'],
  },

  // ── Alliteration ──
  {
    sentence: 'The brave builders battled bitter blizzards to finish the bridge.',
    device: 'alliteration',
  },
  {
    sentence: 'Silly Sam sold seven slippery snails on Saturday.',
    device: 'alliteration',
  },
  {
    sentence: 'The mighty mountain mist muffled every morning sound.',
    device: 'alliteration',
  },
  {
    sentence: 'Tiny Tom tiptoed towards the towering tower of toast.',
    device: 'alliteration',
  },
  {
    sentence: 'Frantic foxes fled the fierce February flood.',
    device: 'alliteration',
  },
  {
    sentence: 'Wild winter winds whistled through the worn wooden window.',
    device: 'alliteration',
    // "whistled" imitates a sound, and whistling is something people do, which
    // personifies the wind, and personification is itself a kind of metaphor.
    alsoFits: ['onomatopoeia', 'personification', 'metaphor'],
  },
  {
    sentence: 'Greedy gulls gathered greedily on the glistening grey groyne.',
    device: 'alliteration',
  },

  // ── Onomatopoeia ──
  {
    sentence: 'The fireworks crackled and boomed above the cheering crowd.',
    device: 'onomatopoeia',
  },
  {
    sentence: 'Rain pattered on the tin roof while the kettle began to hiss.',
    device: 'onomatopoeia',
  },
  {
    sentence: 'The old gate creaked, then slammed with a tremendous bang.',
    device: 'onomatopoeia',
  },
  {
    sentence: 'Bees buzzed lazily while the brook gurgled over smooth stones.',
    device: 'onomatopoeia',
    // "Bees buzzed" and "smooth stones" alliterate.
    alsoFits: ['alliteration'],
  },
  {
    sentence: 'The cereal went snap and crackle the moment the milk hit the bowl.',
    device: 'onomatopoeia',
    // "the moment the milk" alliterates.
    alsoFits: ['alliteration'],
  },
  {
    sentence: 'My trainers squelched through the mud as thunder rumbled overhead.',
    device: 'onomatopoeia',
  },
  {
    sentence: 'The vending machine whirred, clunked, and finally thudded out a can.',
    device: 'onomatopoeia',
  },

  // ── Hyperbole ──
  {
    sentence: 'I have told you a million times to tidy your room before dinner.',
    device: 'hyperbole',
    // "times to tidy" alliterates.
    alsoFits: ['alliteration'],
  },
  {
    sentence: 'This homework is going to take me a thousand years to finish.',
    device: 'hyperbole',
  },
  {
    sentence: 'My schoolbag weighs more than a fully grown elephant today.',
    device: 'hyperbole',
  },
  {
    sentence: 'She was so embarrassed she could have died right there on the spot.',
    device: 'hyperbole',
  },
  {
    sentence: 'I am so hungry I could eat everything in the entire canteen twice.',
    device: 'hyperbole',
  },
  {
    sentence: 'It was so cold on the field that we nearly turned into icebergs.',
    device: 'hyperbole',
  },
  {
    sentence: 'He laughed so hard at the joke that the whole street could hear him.',
    device: 'hyperbole',
  },

  // ── Oxymoron ──
  {
    sentence: 'The award ceremony was an open secret that everyone pretended not to know.',
    device: 'oxymoron',
  },
  {
    sentence: 'There was a deafening silence in the room after the headteacher spoke.',
    device: 'oxymoron',
    // "deafening" also exaggerates, as Speed Analysis found of the same phrase.
    alsoFits: ['hyperbole'],
  },
  {
    sentence: 'The film was seriously funny from the opening scene to the credits.',
    device: 'oxymoron',
    // "film was seriously funny from" alliterates, and the clash depends on a
    // play on "seriously", which in everyday speech just means "very".
    alsoFits: ['alliteration', 'pun'],
  },
  {
    sentence: 'It was a bittersweet farewell at the end of our final term.',
    device: 'oxymoron',
  },
  {
    sentence: 'The crowd waited in a kind of organised chaos before the gates opened.',
    device: 'oxymoron',
  },
  {
    sentence: 'He gave a clearly confusing answer that left the whole class baffled.',
    device: 'oxymoron',
    // "clearly confusing" alliterates, and the clash depends on a play on
    // "clearly", which also means "obviously".
    alsoFits: ['alliteration', 'pun'],
  },
  {
    sentence: 'The actor became well known for playing one of the living dead.',
    device: 'oxymoron',
  },

  // ── Pun ──
  {
    sentence: 'The baker quit his job because he simply could not make enough dough.',
    device: 'pun',
  },
  {
    sentence: 'I used to be a banker, but I lost interest in the work.',
    device: 'pun',
  },
  {
    sentence: 'The electrician was shocked when he was suddenly let go from the firm.',
    device: 'pun',
  },
  {
    sentence: 'My maths teacher called the broken compass a pointless instrument.',
    device: 'pun',
    // "called the broken compass" alliterates.
    alsoFits: ['alliteration'],
  },
  {
    sentence: 'The gardener was thrilled because business was really growing this spring.',
    device: 'pun',
  },
  {
    sentence: 'A clock factory worker said the job was a great way to pass the time.',
    device: 'pun',
  },
  {
    sentence: 'The author of a book about anti-gravity said it was impossible to put down.',
    device: 'pun',
    // "impossible to put down" is also an exaggerated idiom.
    alsoFits: ['hyperbole'],
  },
]

export const ALL_DEVICES: Device[] = [
  'simile',
  'metaphor',
  'personification',
  'alliteration',
  'onomatopoeia',
  'hyperbole',
  'oxymoron',
  'pun',
]

export const BANK: GameBank<Question> = {
  slug: 'figurative-language-finder',
  items: QUESTION_BANK,
  // No two sentences are the same, and the sentence is what the student sees.
  key: (q) => q.sentence,
  answer: (q) => DEVICE_LABELS[q.device],
  // The page draws the three wrong devices at random for every question, so
  // no question has a fixed set of options (src/lib/games/explanations/types.ts).
  options: () => null,
  tag: (q) => q.device,
}
