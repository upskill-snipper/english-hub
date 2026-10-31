import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Figurative Language Finder: name the device in a sentence, or say what a
 * word or phrase in it suggests.
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
 *     "knocked", the alarm clock's "screamed" and the winds' "whistled";
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
 *     words, and "Opportunity knocked softly" plays on the saying
 *     "opportunity knocks", so Pun could be defended.
 *
 * Those sentences list the other devices in `alsoFits`, and the page never
 * offers those devices beside that sentence, so exactly one option is right.
 * Two sentences were rewritten then: the "living legend locally" actor (four
 * ideas in one sentence, and a legend is also simply a famous person) and a
 * broken ruler that was a "pointless instrument" (a ruler never has a point;
 * a compass does).
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy", and an audit (.tmp-games-audit/REPORT-ks3.md) measured
 * why here: every question asked "which device?"; all seven similes contained
 * "like" or "as" and nothing else did; all seven alliterations were four or
 * more words on one letter; all seven puns were jokes about a job; Metaphor
 * was never offered beside a personification; `alsoFits` took away the
 * hardest wrong option in 24 of the 56. The rebuild, 56 questions to 307:
 *
 *   - 252 new questions. 232 are real lines from 32 texts out of UK
 *     copyright (Shakespeare, Dickens, Stevenson, Mary Shelley, Charlotte
 *     Brontë, Austen, George Eliot, Conan Doyle, Wells, Orwell, Fitzgerald,
 *     Hawthorne and the poets), each copied exactly from the edition in
 *     src/data/full-texts/ and named in `source`, which the page shows under
 *     the line. 20 are the site's own, where no real line served: similes
 *     made with "resembled" and "the way", a metaphor that understates,
 *     modern weather that mirrors a mood, an "as ... as" that is hyperbole,
 *     puns that are not about jobs, and the stairs that "groaned" (the
 *     audit's worked example). Sentences without a source are the site's own;
 *   - pathetic fallacy, the near neighbour of personification, as a ninth
 *     device;
 *   - the page asks for the MOST PRECISE name. Personification is a kind of
 *     metaphor, which is why Metaphor had been kept away from every
 *     personification; asked for the most precise name, Metaphor can be
 *     offered beside one and still be wrong;
 *   - `near` (80 questions): a near neighbour always offered where it is
 *     genuinely wrong, so the hardest wrong option is on screen rather than
 *     drawn by chance: Metaphor beside a simile made without "like"; Simile
 *     beside a "like" or "as" that compares nothing ("I like him not", "is
 *     like to be", "As we went along"); Personification beside a person
 *     called an animal or a thing; Pathetic fallacy beside a personified
 *     object or idea, and Personification beside weather that mirrors a mood
 *     without being given human feelings; Onomatopoeia and Alliteration beside
 *     each other; Metaphor beside an overstatement, Hyperbole beside a
 *     metaphor that does not overstate;
 *   - questions with their own `prompt` and fixed options: the two meanings
 *     of a pun (tier 2, 9 questions) and what a word, image, sound or the
 *     weather suggests (tier 3, 85), each wrong option a real misreading (the
 *     literal one, the opposite, the detail mistaken for the point).
 *
 * Tiers 134 / 88 / 85: 1 name the device in a line that does not wear its
 * label; 2 tell it from its near neighbour, or say what a pun's two meanings
 * are; 3 what a precise word, image or sound suggests. `facts` keep apart
 * questions from one speech or passage, questions whose explanation teaches
 * the word another turns on (buzzed, groaned, hiss, creaked, roar, bark, hum,
 * crash, neigh), and questions decided by a rule another explains (a simile
 * without "like"; a "like" or "as" that compares nothing; alliteration by
 * sound, not letter; hard and soft sounds).
 *
 * EXISTING QUESTIONS FIXED (24 October 2026):
 *
 *   - the seven personifications no longer list Metaphor in `alsoFits`, now
 *     that the page asks for the most precise name; the wind, the waves and
 *     the dawn list Pathetic fallacy instead (a careful reader could say the
 *     personified weather or dawn reflects a mood);
 *   - Pathetic fallacy, new, is listed where a careful reader could say the
 *     weather or the scene sets a mood: the blizzards, the mountain mist, the
 *     February flood, the rain and the kettle, the bees and the brook, the
 *     thunder over the mud, the cold field;
 *   - "Her explanation was as clear as a freshly cleaned window" lists
 *     Alliteration ("clear ... cleaned"); "My alarm clock screamed at me"
 *     lists Hyperbole;
 *   - the exam hall, fear and the motorway metaphors always offer Simile
 *     (`near`), because `alsoFits` had taken away their other hard option;
 *   - "The award ceremony was an open secret that everyone pretended not to
 *     know" did not make sense (a ceremony is not a secret): it is now "The
 *     winner's name was an open secret long before the envelope was opened.";
 *   - every explanation was rewritten where it taught the old tells (a simile
 *     "uses like or as"; the elephant schoolbag was "not a simile" for using
 *     "more than"), or where a tip named another question's trigger word
 *     (an adverb such as "angrily" personifies, beside "The wind hammered
 *     angrily"; sound words that other questions turn on).
 *
 * REMOVED: "Wild winter winds whistled through the worn wooden window." With
 * pathetic fallacy added, four other devices were arguable in it
 * (onomatopoeia, personification, metaphor, pathetic fallacy), which left
 * only easy wrong options, and it was a tongue-twister of the kind the audit
 * counted.
 *
 * CHECKED BY A SECOND READER (31 October 2026), as the founder decided.
 * Every real line was found word for word in src/data/full-texts/, in the
 * chapter, stave, act, scene and speaker its `source` names (the six Henry V
 * lines and Sonnet 116 by hand, since the held-text test does not match those
 * titles). Fixed:
 *
 *   - "Bees buzzed lazily": "lazily" gives bees a human trait and
 *     Personification could be drawn as wrong; now in `alsoFits`;
 *   - the elephant schoolbag: "weighs more than" is an open comparison some
 *     definitions call a simile, and Simile could be drawn; now in `alsoFits`;
 *   - "thou gaudy gold", "Fire, burn; and cauldron, bubble" and "O brawling
 *     love!" speak to a thing as if it could hear, which this game's own
 *     explanations teach as personification; Personification now in `alsoFits`;
 *   - Don John's "enfranchised with a clog" joins contradictory words, and
 *     Oxymoron could be drawn; now in `alsoFits`;
 *   - Jane Eyre's winter in summer: the prompt said Jane "writes this on the
 *     day", but she tells the story years later; now "describes her feelings";
 *   - "The week Dad got the all-clear from the doctor": a parent's health
 *     scare is needless in a children's game; now Gran home from abroad;
 *   - Pip's rising mists: "He feels guilty and wishes he could stay behind" is
 *     true of Pip in that passage (he thinks of walking back); replaced;
 *   - Caliban's isle: the prompt called the "s" sounds "soft", giving the
 *     answer away against the hissing reading; now "repeated";
 *   - Lawrence's "tinkling" piano: the answer reused "cosy" from the line; now
 *     "warm";
 *   - Benedick's errands: "He wants to leave Messina" was nearly what the
 *     errands mean; replaced with boasting of past journeys;
 *   - "Crystal is muddy": "Crystal is too ordinary to compare with anything"
 *     was nearly the right reading; replaced;
 *   - "thou liest in't": the answer had the gravedigger "lying down" while the
 *     prompt has him standing; now "being inside the grave", and one wrong
 *     option ("Resting, and lying asleep inside the grave") names the grave
 *     too, so the answer is not the only option that does;
 *   - "civil as an orange": "sold by civil servants" was a joke, not a
 *     misreading, and the answer was the only option not shaped "Oranges
 *     are ..., so the Count must be ..."; both now share that shape;
 *   - five answers repeated a word from their own line or prompt that no
 *     wrong option shared, so they could be matched without reading: Silas's
 *     "without", Malcolm's "break ... heart", the "murder" Macbeth waits for,
 *     Juliet's "parting ... sweet", Silas's "bitter" frost; reworded;
 *   - Jane's "invisible bond": the prompt said she spoke back "for the first
 *     time" (she already had, in that chapter), and "She feels guilty and
 *     ashamed" is how she feels half an hour later; both replaced;
 *   - `facts` added: "Kingdoms are clay" with "Let Rome in Tiber melt" (one
 *     speech); "It was wretched weather" with the sound-not-letter questions.
 */

export type Device =
  | 'simile'
  | 'metaphor'
  | 'personification'
  | 'pathetic-fallacy'
  | 'alliteration'
  | 'onomatopoeia'
  | 'hyperbole'
  | 'oxymoron'
  | 'pun'

export interface Question {
  /**
   * What the student reads. A real line is copied exactly as its edition
   * prints it (a verse line break is a newline); it is the question's key.
   */
  sentence: string
  /** The device the sentence uses; in a question with its own prompt, the device it is about. */
  device: Device
  /**
   * 1: name the device in a line that does not wear its label. 2: tell it
   * from a near neighbour, or say what a pun's two meanings are. 3: what a
   * precise word, image or sound suggests.
   */
  tier: 1 | 2 | 3
  /** Where a real line comes from, as the page shows it. None for the site's own sentences. */
  source?: string
  /**
   * Other devices a careful reader could fairly say this sentence uses. The
   * page never draws them as wrong options beside it, so exactly one option
   * is right (see WHAT WAS WRONG above). Never so many that fewer than three
   * wrong options are left to draw. Device-naming questions only.
   */
  alsoFits?: Device[]
  /**
   * A near neighbour always offered as a wrong option, because it is
   * genuinely wrong here and the likeliest mistake. Device-naming questions
   * only.
   */
  near?: Device
  /** Asked in place of the page's usual question, where the question has its own options. */
  prompt?: string
  /** The right option, where it is not the device's name (what a word suggests). */
  answer?: string
  /** The three wrong options of a question with its own prompt. */
  wrong?: readonly [string, string, string]
  /**
   * What this question shares with another that would give one away (the
   * same speech or passage): no two questions sharing one are dealt in one
   * round.
   */
  facts?: readonly string[]
}

export const DEVICE_LABELS: Record<Device, string> = {
  simile: 'Simile',
  metaphor: 'Metaphor',
  personification: 'Personification',
  'pathetic-fallacy': 'Pathetic fallacy',
  alliteration: 'Alliteration',
  onomatopoeia: 'Onomatopoeia',
  hyperbole: 'Hyperbole',
  oxymoron: 'Oxymoron',
  pun: 'Pun',
}
export const QUESTION_BANK: Question[] = [
  // ── The questions of 16 October 2026: the site's own sentences, tier 1 ──
  {
    sentence: 'The new pupil was as quiet as a switched-off radio on her first morning.',
    device: 'simile',
    tier: 1,
  },
  // A sack of bricks also exaggerates the weight.
  {
    sentence: 'My rucksack felt like a sack of bricks by the end of the school trip.',
    device: 'simile',
    tier: 1,
    alsoFits: ['hyperbole'],
  },
  {
    sentence: 'The frightened kitten trembled like a leaf caught in an autumn gale.',
    device: 'simile',
    tier: 1,
  },
  // "clear ... cleaned" repeats its opening sound.
  {
    sentence: 'Her explanation was as clear as a freshly cleaned window.',
    device: 'simile',
    tier: 1,
    alsoFits: ['alliteration'],
  },
  {
    sentence: 'The athlete shot off the starting line like an arrow loosed from a bow.',
    device: 'simile',
    tier: 1,
  },
  // A frozen pond also exaggerates the cold, as the sack of bricks does the weight.
  {
    sentence: 'The old floorboards were as cold as a frozen pond beneath our bare feet.',
    device: 'simile',
    tier: 1,
    alsoFits: ['hyperbole'],
  },
  // "buzzed" imitates a sound, and "buzzed like a beehive" alliterates.
  {
    sentence: 'The classroom buzzed like a beehive whenever the teacher stepped out.',
    device: 'simile',
    tier: 1,
    alsoFits: ['onomatopoeia', 'alliteration'],
    facts: ['the word buzzed'],
  },
  // The chest is "waiting", like a person.
  {
    sentence: 'The library was a treasure chest waiting to be unlocked by curious minds.',
    device: 'metaphor',
    tier: 1,
    alsoFits: ['personification'],
  },
  // It also exaggerates how much he knows.
  {
    sentence: 'My grandfather is a walking encyclopaedia of village history.',
    device: 'metaphor',
    tier: 1,
    alsoFits: ['hyperbole'],
  },
  // "silent, sweating students" alliterates.
  {
    sentence: 'The exam hall was a desert of silent, sweating students.',
    device: 'metaphor',
    tier: 1,
    alsoFits: ['alliteration'],
    near: 'simile',
  },
  // A thief who steals gives fear a human action.
  {
    sentence: 'Fear is a thief that steals your best ideas during a presentation.',
    device: 'metaphor',
    tier: 1,
    alsoFits: ['personification'],
    near: 'simile',
  },
  {
    sentence: 'The internet is an ocean, and most of us only paddle in the shallows.',
    device: 'metaphor',
    tier: 1,
  },
  {
    sentence: 'Her words were daggers that found every weak point in his argument.',
    device: 'metaphor',
    tier: 1,
    facts: ['words as blades'],
  },
  // "ribbon of red" alliterates.
  {
    sentence: 'The motorway was a ribbon of red brake lights winding into the night.',
    device: 'metaphor',
    tier: 1,
    alsoFits: ['alliteration'],
    near: 'simile',
  },
  // Weather with a human mood: a careful reader could call it pathetic fallacy.
  {
    sentence: 'The wind hammered angrily at the windows, demanding to be let inside.',
    device: 'personification',
    tier: 1,
    alsoFits: ['pathetic-fallacy'],
  },
  // "groaned" imitates a sound.
  {
    sentence: 'The ancient clock groaned before it reluctantly chimed the hour.',
    device: 'personification',
    tier: 1,
    alsoFits: ['onomatopoeia'],
    facts: ['the word groaned'],
  },
  // "knocked" imitates a sound. It plays on the saying "opportunity knocks": "answer" is both opening the door and taking the chance.
  {
    sentence: 'Opportunity knocked softly, but nobody in the office bothered to answer.',
    device: 'personification',
    tier: 1,
    alsoFits: ['onomatopoeia', 'pun'],
  },
  // "snatched at the sandcastle" alliterates; the sea is given a human appetite.
  {
    sentence: 'The hungry waves snatched at the sandcastle until nothing remained.',
    device: 'personification',
    tier: 1,
    alsoFits: ['alliteration', 'pathetic-fallacy'],
  },
  // A gentle dawn over a sleeping town: a careful reader could say the scene sets a calm mood.
  {
    sentence: 'Dawn tiptoed over the hills, careful not to wake the sleeping town.',
    device: 'personification',
    tier: 1,
    alsoFits: ['pathetic-fallacy'],
  },
  {
    sentence: 'The stubborn jar refused to open no matter how hard she twisted the lid.',
    device: 'personification',
    tier: 1,
  },
  // "screamed" can be heard as a sound word, and it overstates the noise.
  {
    sentence: 'My alarm clock screamed at me, furious that I had ignored it twice.',
    device: 'personification',
    tier: 1,
    alsoFits: ['onomatopoeia', 'hyperbole'],
  },
  // Bitter blizzards against brave builders: the weather could be said to match the struggle.
  {
    sentence: 'The brave builders battled bitter blizzards to finish the bridge.',
    device: 'alliteration',
    tier: 1,
    alsoFits: ['pathetic-fallacy'],
    facts: ['plosive sounds suit force'],
  },
  {
    sentence: 'Silly Sam sold seven slippery snails on Saturday.',
    device: 'alliteration',
    tier: 1,
  },
  // A muffling mist sets a hushed mood.
  {
    sentence: 'The mighty mountain mist muffled every morning sound.',
    device: 'alliteration',
    tier: 1,
    alsoFits: ['pathetic-fallacy'],
    facts: ['soft sounds suit calm'],
  },
  {
    sentence: 'Tiny Tom tiptoed towards the towering tower of toast.',
    device: 'alliteration',
    tier: 1,
  },
  // A fierce flood and frantic foxes: the weather could be said to match the panic.
  {
    sentence: 'Frantic foxes fled the fierce February flood.',
    device: 'alliteration',
    tier: 1,
    alsoFits: ['pathetic-fallacy'],
  },
  {
    sentence: 'Greedy gulls gathered greedily on the glistening grey groyne.',
    device: 'alliteration',
    tier: 1,
  },
  {
    sentence: 'The fireworks crackled and boomed above the cheering crowd.',
    device: 'onomatopoeia',
    tier: 1,
  },
  // Rain on the roof and a cosy kitchen: the weather could be said to set the mood.
  {
    sentence: 'Rain pattered on the tin roof while the kettle began to hiss.',
    device: 'onomatopoeia',
    tier: 1,
    alsoFits: ['pathetic-fallacy'],
    facts: ['the word hiss'],
  },
  {
    sentence: 'The old gate creaked, then slammed with a tremendous bang.',
    device: 'onomatopoeia',
    tier: 1,
    facts: ['the word creaked'],
  },
  // "Bees buzzed" and "smooth stones" alliterate; a calm summer scene sets a
  // mood; "lazily" gives the bees a human trait, which is personification.
  {
    sentence: 'Bees buzzed lazily while the brook gurgled over smooth stones.',
    device: 'onomatopoeia',
    tier: 1,
    alsoFits: ['alliteration', 'pathetic-fallacy', 'personification'],
    facts: ['the word buzzed'],
  },
  // "the moment the milk" alliterates.
  {
    sentence: 'The cereal went snap and crackle the moment the milk hit the bowl.',
    device: 'onomatopoeia',
    tier: 1,
    alsoFits: ['alliteration'],
  },
  // Thunder over a muddy walk sets a stormy mood.
  {
    sentence: 'My trainers squelched through the mud as thunder rumbled overhead.',
    device: 'onomatopoeia',
    tier: 1,
    alsoFits: ['pathetic-fallacy'],
  },
  {
    sentence: 'The vending machine whirred, clunked, and finally thudded out a can.',
    device: 'onomatopoeia',
    tier: 1,
  },
  // "times to tidy" alliterates.
  {
    sentence: 'I have told you a million times to tidy your room before dinner.',
    device: 'hyperbole',
    tier: 1,
    alsoFits: ['alliteration'],
  },
  {
    sentence: 'This homework is going to take me a thousand years to finish.',
    device: 'hyperbole',
    tier: 1,
  },
  // An open comparison made with "more than": some definitions count it as a
  // simile, so Simile is never offered as wrong beside it.
  {
    sentence: 'My schoolbag weighs more than a fully grown elephant today.',
    device: 'hyperbole',
    tier: 1,
    alsoFits: ['simile'],
  },
  {
    sentence: 'She was so embarrassed she could have died right there on the spot.',
    device: 'hyperbole',
    tier: 1,
  },
  {
    sentence: 'I am so hungry I could eat everything in the entire canteen twice.',
    device: 'hyperbole',
    tier: 1,
  },
  // Weather, though no mood is mirrored: listed so a careful reader is never marked wrong.
  {
    sentence: 'It was so cold on the field that we nearly turned into icebergs.',
    device: 'hyperbole',
    tier: 1,
    alsoFits: ['pathetic-fallacy'],
  },
  {
    sentence: 'He laughed so hard at the joke that the whole street could hear him.',
    device: 'hyperbole',
    tier: 1,
  },
  // Rewritten 24 October 2026: "The award ceremony was an open secret" did not make sense.
  {
    sentence: "The winner's name was an open secret long before the envelope was opened.",
    device: 'oxymoron',
    tier: 1,
  },
  // "deafening" also exaggerates, as Speed Analysis found of the same phrase.
  {
    sentence: 'There was a deafening silence in the room after the headteacher spoke.',
    device: 'oxymoron',
    tier: 1,
    alsoFits: ['hyperbole'],
  },
  // "film was seriously funny from" alliterates, and the clash depends on a play on "seriously", which in everyday speech just means "very".
  {
    sentence: 'The film was seriously funny from the opening scene to the credits.',
    device: 'oxymoron',
    tier: 1,
    alsoFits: ['alliteration', 'pun'],
  },
  {
    sentence: 'It was a bittersweet farewell at the end of our final term.',
    device: 'oxymoron',
    tier: 1,
  },
  {
    sentence: 'The crowd waited in a kind of organised chaos before the gates opened.',
    device: 'oxymoron',
    tier: 1,
  },
  // "clearly confusing" alliterates, and the clash depends on a play on "clearly", which also means "obviously".
  {
    sentence: 'He gave a clearly confusing answer that left the whole class baffled.',
    device: 'oxymoron',
    tier: 1,
    alsoFits: ['alliteration', 'pun'],
  },
  {
    sentence: 'The actor became well known for playing one of the living dead.',
    device: 'oxymoron',
    tier: 1,
  },
  {
    sentence: 'The baker quit his job because he simply could not make enough dough.',
    device: 'pun',
    tier: 1,
  },
  {
    sentence: 'I used to be a banker, but I lost interest in the work.',
    device: 'pun',
    tier: 1,
  },
  {
    sentence: 'The electrician was shocked when he was suddenly let go from the firm.',
    device: 'pun',
    tier: 1,
  },
  // "called the broken compass" alliterates.
  {
    sentence: 'My maths teacher called the broken compass a pointless instrument.',
    device: 'pun',
    tier: 1,
    alsoFits: ['alliteration'],
  },
  {
    sentence: 'The gardener was thrilled because business was really growing this spring.',
    device: 'pun',
    tier: 1,
  },
  {
    sentence: 'A clock factory worker said the job was a great way to pass the time.',
    device: 'pun',
    tier: 1,
  },
  // "impossible to put down" is also an exaggerated idiom.
  {
    sentence: 'The author of a book about anti-gravity said it was impossible to put down.',
    device: 'pun',
    tier: 1,
    alsoFits: ['hyperbole'],
  },

  // ── Simile: real lines, and similes without "like" ──
  {
    sentence: 'It was long, and wound about him like a tail',
    device: 'simile',
    tier: 1,
    source: 'Charles Dickens, A Christmas Carol (Stave 1)',
  },
  // a "mad cat" overstates her wildness.
  {
    sentence: 'Hold her arms, Miss Abbot: she’s like a mad cat.',
    device: 'simile',
    tier: 1,
    source: 'Charlotte Brontë, Jane Eyre (Chapter 2)',
    alsoFits: ['hyperbole'],
  },
  // "my master", "rat, and run": repeated opening sounds.
  {
    sentence: 'If it was my master, why did he cry out like a rat, and run from me?',
    device: 'simile',
    tier: 1,
    source: 'Robert Louis Stevenson, Jekyll and Hyde ("The Last Night")',
    alsoFits: ['alliteration'],
    facts: ['Poole describes the voice behind the door'],
  },
  // "Weeping like a woman" repeats its opening w sound.
  {
    sentence: 'Weeping like a woman or a lost soul',
    device: 'simile',
    tier: 1,
    source: 'Robert Louis Stevenson, Jekyll and Hyde ("The Last Night", Poole)',
    alsoFits: ['alliteration'],
    facts: ['Poole describes the voice behind the door'],
  },
  // "look ... like a lapwing" repeats l.
  {
    sentence:
      'For look where Beatrice, like a lapwing, runs\nClose by the ground, to hear our conference.',
    device: 'simile',
    tier: 1,
    source: 'William Shakespeare, Much Ado About Nothing (Act 3 Scene 1, Hero)',
    alsoFits: ['alliteration'],
  },
  // "floats ... feather ... flamingo" repeats f; a dawn sky could be said to set a mood.
  {
    sentence:
      'See how that one little cloud floats like a pink feather from some gigantic flamingo.',
    device: 'simile',
    tier: 1,
    source: 'Arthur Conan Doyle, The Sign of Four (Chapter 7)',
    alsoFits: ['alliteration', 'pathetic-fallacy'],
  },
  {
    sentence: 'As it bulged up and caught the light, it glistened like wet leather.',
    device: 'simile',
    tier: 1,
    source: 'H. G. Wells, The War of the Worlds (Book 1, Chapter 4)',
  },
  // Beasts running away in fear exaggerates; "bear ... beasts" alliterates.
  {
    sentence: 'No, no, I am as ugly as a bear,\nFor beasts that meet me run away for fear',
    device: 'simile',
    tier: 1,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 2 Scene 2, Helena)",
    alsoFits: ['hyperbole', 'alliteration'],
  },
  {
    sentence: 'And then it started, like a guilty thing\nUpon a fearful summons.',
    device: 'simile',
    tier: 1,
    source: 'William Shakespeare, Hamlet (Act 1 Scene 1, Horatio)',
  },
  // "comfort ... cold" alliterates, and Alonso has just said "peace", which sounded like pease, a porridge.
  {
    sentence: 'He receives comfort like cold porridge.',
    device: 'simile',
    tier: 1,
    source: 'William Shakespeare, The Tempest (Act 2 Scene 1, Sebastian)',
    alsoFits: ['alliteration', 'pun'],
  },
  {
    sentence:
      'The only completely stationary object in the room was an enormous couch on which two young women were buoyed up as though upon an anchored balloon.',
    device: 'simile',
    tier: 1,
    source: 'F. Scott Fitzgerald, The Great Gatsby (Chapter 1)',
    facts: ['a simile made without like', 'Daisy and Jordan on the couch'],
  },
  {
    sentence:
      'The quality of mercy is not strain’d,\nIt droppeth as the gentle rain from heaven\nUpon the place beneath.',
    device: 'simile',
    tier: 2,
    source: 'William Shakespeare, The Merchant of Venice (Act 4 Scene 1, Portia)',
    near: 'metaphor',
    facts: ['a simile made without like'],
  },
  // "So ... snowy" repeats its opening s sound.
  {
    sentence: 'So shows a snowy dove trooping with crows\nAs yonder lady o’er her fellows shows.',
    device: 'simile',
    tier: 2,
    source: 'William Shakespeare, Romeo and Juliet (Act 1 Scene 5, Romeo)',
    alsoFits: ['alliteration'],
    near: 'metaphor',
    facts: ['a simile made without like'],
  },
  // "fluttering" can be heard as a sound word; "blown back" alliterates.
  {
    sentence:
      'They were both in white, and their dresses were rippling and fluttering as if they had just been blown back in after a short flight around the house.',
    device: 'simile',
    tier: 2,
    source: 'F. Scott Fitzgerald, The Great Gatsby (Chapter 1)',
    alsoFits: ['onomatopoeia', 'alliteration'],
    near: 'metaphor',
    facts: ['a simile made without like', 'Daisy and Jordan on the couch'],
  },
  {
    sentence:
      'From the plane window, the fields resembled a quilt made of green and brown patches.',
    device: 'simile',
    tier: 2,
    near: 'metaphor',
    facts: ['a simile made without like'],
  },
  {
    sentence: 'Ana slipped through the busy corridor the way a fish moves between reeds.',
    device: 'simile',
    tier: 2,
    near: 'metaphor',
    facts: ['a simile made without like'],
  },
  {
    sentence:
      'I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy.',
    device: 'simile',
    tier: 3,
    source: 'Charles Dickens, A Christmas Carol (Stave 5)',
    prompt: "What do Scrooge's three similes suggest about him on Christmas morning?",
    answer: 'His joy has made him feel free, good and young again',
    wrong: [
      "He has grown weak and thin after the ghosts' visits",
      'He is only pretending to be happy for the spirits',
      'He is still as cold and mean as he always was',
    ],
  },
  {
    sentence: 'Though not yet full-grown, they were huge dogs, and as fierce-looking as wolves.',
    device: 'simile',
    tier: 3,
    source: 'George Orwell, Animal Farm (Chapter 5)',
    prompt: 'What does the simile suggest about the dogs Napoleon has raised?',
    answer: 'They have been trained into dangerous, wild hunters',
    wrong: [
      'They are loyal pets who will guard the farm kindly',
      'They are still young puppies who like to play',
      'They have escaped from a wild pack living in the woods',
    ],
  },
  {
    sentence: 'his affections, like ivy, were the growth of time',
    device: 'simile',
    tier: 3,
    source: 'Robert Louis Stevenson, Jekyll and Hyde ("Story of the Door")',
    prompt: "What does the simile suggest about Mr Utterson's friendships?",
    answer: 'They grew slowly over years and now hold fast',
    wrong: [
      'They were made in a hurry and are soon forgotten',
      'They slowly choke the very people he cares about',
      'They spread quickly to everyone he meets',
    ],
  },
  {
    sentence:
      'It is too rash, too unadvis’d, too sudden,\nToo like the lightning, which doth cease to be\nEre one can say “It lightens.”',
    device: 'simile',
    tier: 3,
    source: 'William Shakespeare, Romeo and Juliet (Act 2 Scene 2, Juliet)',
    prompt: "What does Juliet's simile suggest about her new love?",
    answer: 'It is thrilling, but it may end as fast as it began',
    wrong: [
      'It is slow and steady and will surely last for ever',
      'It is dangerous because a storm is on its way',
      'It is something she feels ashamed to talk about',
    ],
  },
  {
    sentence:
      'he doth bestride the narrow world\nLike a Colossus, and we petty men\nWalk under his huge legs',
    device: 'simile',
    tier: 3,
    source: 'William Shakespeare, Julius Caesar (Act 1 Scene 2, Cassius)',
    prompt: "What does Cassius's simile suggest about Caesar?",
    answer: 'He has grown so powerful that other Romans seem tiny',
    wrong: [
      'He is a kind giant who protects the people of Rome',
      'He is a statue that the Romans have built to honour him',
      'He is tall and strong, so he wins every battle',
    ],
  },
  {
    sentence: 'He seemed to weave, like the spider, from pure impulse, without reflection.',
    device: 'simile',
    tier: 3,
    source: 'George Eliot, Silas Marner (Chapter 2)',
    prompt: "What does the simile suggest about Silas's weaving?",
    answer: 'He works on and on by habit, never stopping to think why',
    wrong: [
      'He is cunning and weaves to trap other people',
      'He is a skilled artist who plans every pattern carefully',
      'He is frightened of the spiders in his cottage',
    ],
  },
  {
    sentence: 'And each particular hair to stand on end\nLike quills upon the fretful porpentine.',
    device: 'simile',
    tier: 3,
    source: 'William Shakespeare, Hamlet (Act 1 Scene 5, the Ghost)',
    prompt: "What does the Ghost's simile suggest his story would do to Hamlet?",
    answer: 'Frighten him so much his hair would bristle',
    wrong: [
      "Make him proud of his father's courage",
      'Turn all of his hair grey with grief and worry',
      'Make him laugh at how strange the tale is',
    ],
  },
  {
    sentence: 'I see you stand like greyhounds in the slips,\nStraining upon the start.',
    device: 'simile',
    tier: 3,
    source: 'William Shakespeare, Henry V (Act 3 Scene 1, Henry)',
    prompt: "What does the simile suggest about Henry's soldiers?",
    answer: 'They are eager to charge the moment they are freed',
    wrong: [
      'They are tired and want to rest before the next battle',
      'They are loyal pets who follow Henry everywhere',
      'They are nervous and trying to slip away unseen',
    ],
    facts: ['Once more unto the breach'],
  },
  {
    sentence:
      'In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars.',
    device: 'simile',
    tier: 3,
    source: 'F. Scott Fitzgerald, The Great Gatsby (Chapter 3)',
    prompt: "What does the simile suggest about Gatsby's party guests?",
    answer: 'They are drawn to the bright lights without real purpose',
    wrong: [
      'They are shy and hide away in the dark gardens',
      'They are pests that Gatsby would like to get rid of',
      'They come only at night, because they are busy working by day',
    ],
  },
  {
    sentence: 'She sat like patience on a monument,\nSmiling at grief.',
    device: 'simile',
    tier: 3,
    source: 'William Shakespeare, Twelfth Night (Act 2 Scene 4, Viola)',
    prompt: "What does Viola's simile suggest about the woman she describes?",
    answer: 'She hid her pain and waited quietly, without complaint',
    wrong: [
      "She enjoyed other people's sorrow and laughed at it",
      'She was made of stone and could feel nothing at all',
      'She was too lazy to do anything at all about her troubles',
    ],
  },
  {
    sentence:
      'The saintly soul of Elizabeth shone like a shrine-dedicated lamp in our peaceful home.',
    device: 'simile',
    tier: 3,
    source: 'Mary Shelley, Frankenstein (Chapter 2)',
    prompt: 'What does the simile suggest about Elizabeth?',
    answer: 'She is pure and good, and brings peace to the home',
    wrong: [
      'She is fierce and fiery, quick to lose her temper',
      'She is bright and clever, always first with the answer',
      'She is a nun who keeps a lamp burning in a church',
    ],
  },
  {
    sentence:
      'It was not in impenetrable shadow as the other objects in the yard were, but had a dismal light about it, like a bad lobster in a dark cellar.',
    device: 'simile',
    tier: 3,
    source: 'Charles Dickens, A Christmas Carol (Stave 1)',
    prompt: "What does the simile suggest about the light around Marley's face?",
    answer: 'It is a sickly, eerie glow, both creepy and a bit comic',
    wrong: [
      'It is a warm, welcoming glow that cheers Scrooge up',
      'It comes from a lamp that someone left down in the cellar',
      'It smells strongly of the sea and of fish',
    ],
  },
  {
    sentence: 'You start a question, and it’s like starting a stone.',
    device: 'simile',
    tier: 3,
    source: 'Robert Louis Stevenson, Jekyll and Hyde ("Story of the Door")',
    prompt: "What does Enfield's simile suggest about asking questions?",
    answer: 'One question can set off trouble that nobody can stop',
    wrong: [
      'Questions are heavy, and only the strongest can ask them',
      'Asking questions is a way to start a friendly game',
      'A good question builds something solid, stone by stone',
    ],
  },

  // ── Metaphor: real lines, a "like" or "as" that compares nothing, and near neighbours ──
  {
    sentence: 'There’s daggers in men’s smiles',
    device: 'metaphor',
    tier: 1,
    source: 'William Shakespeare, Macbeth (Act 2 Scene 3, Donalbain)',
    facts: ['Donalbain after the murder'],
  },
  {
    sentence:
      'She was a vixen when she went to school,\nAnd though she be but little, she is fierce.',
    device: 'metaphor',
    tier: 1,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 3 Scene 2, Helena)",
  },
  {
    sentence: 'Something is rotten in the state of Denmark.',
    device: 'metaphor',
    tier: 1,
    source: 'William Shakespeare, Hamlet (Act 1 Scene 4, Marcellus)',
    facts: ['rot in Denmark'],
  },
  {
    sentence: 'But I will wear my heart upon my sleeve\nFor daws to peck at',
    device: 'metaphor',
    tier: 1,
    source: 'William Shakespeare, Othello (Act 1 Scene 1, Iago)',
  },
  {
    sentence: 'the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.',
    device: 'metaphor',
    tier: 1,
    source: 'Charles Dickens, Great Expectations (Chapter 1)',
  },
  // "vast" exaggerates, and "substantial smile" alliterates.
  {
    sentence: 'In came Mrs. Fezziwig, one vast substantial smile.',
    device: 'metaphor',
    tier: 1,
    source: 'Charles Dickens, A Christmas Carol (Stave 2)',
    alsoFits: ['hyperbole', 'alliteration'],
  },
  {
    sentence: 'The Thane of Cawdor lives: why do you dress me\nIn borrow’d robes?',
    device: 'metaphor',
    tier: 1,
    source: 'William Shakespeare, Macbeth (Act 1 Scene 3, Macbeth)',
  },
  // "every word stabs" overstates; "speaks ... stabs" repeats s.
  {
    sentence: 'She speaks poniards, and every word stabs',
    device: 'metaphor',
    tier: 1,
    source: 'William Shakespeare, Much Ado About Nothing (Act 2 Scene 1, Benedick)',
    alsoFits: ['hyperbole', 'alliteration'],
    facts: ['words as blades', "Benedick's rant about Beatrice"],
  },
  {
    sentence: 'I was a discord in Gateshead Hall',
    device: 'metaphor',
    tier: 1,
    source: 'Charlotte Brontë, Jane Eyre (Chapter 2)',
  },
  {
    sentence: 'Her voice is full of money',
    device: 'metaphor',
    tier: 1,
    source: 'F. Scott Fitzgerald, The Great Gatsby (Chapter 7, Gatsby)',
  },
  // "eye of ice" opens two words with the same vowel sound.
  {
    sentence: 'her eye of ice continued to dwell freezingly on mine.',
    device: 'metaphor',
    tier: 1,
    source: 'Charlotte Brontë, Jane Eyre (Chapter 4)',
    alsoFits: ['alliteration'],
  },
  {
    sentence:
      'By degrees, Wemmick got dryer and harder as we went along, and his mouth tightened into a post-office again.',
    device: 'metaphor',
    tier: 2,
    source: 'Charles Dickens, Great Expectations (Chapter 25)',
    near: 'simile',
    facts: ['a like or as that compares nothing'],
  },
  // Rather die than marry another: an overstatement a reader could point to; "be married ... be my wedding bed" repeats b.
  {
    sentence: 'If he be married,\nMy grave is like to be my wedding bed.',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, Romeo and Juliet (Act 1 Scene 5, Juliet)',
    alsoFits: ['hyperbole', 'alliteration'],
    near: 'simile',
    facts: ['a like or as that compares nothing'],
  },
  // "play a part" alliterates.
  {
    sentence:
      'I hold the world but as the world, Gratiano,\nA stage, where every man must play a part,\nAnd mine a sad one.',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, The Merchant of Venice (Act 1 Scene 1, Antonio)',
    alsoFits: ['alliteration'],
    near: 'simile',
    facts: ['a like or as that compares nothing', 'life as a stage'],
  },
  {
    sentence: 'that’s as much to say, I wear not motley in my brain.',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, Twelfth Night (Act 1 Scene 5, Feste)',
    near: 'simile',
    facts: ['a like or as that compares nothing'],
  },
  // "stands it safe" repeats its opening s sound; madness roaming free could be read as a person.
  {
    sentence: 'I like him not, nor stands it safe with us\nTo let his madness range.',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, Hamlet (Act 3 Scene 3, Claudius)',
    alsoFits: ['alliteration', 'personification'],
    near: 'simile',
    facts: ['a like or as that compares nothing'],
  },
  // "salad ... say ... said" repeats s.
  {
    sentence:
      'My salad days,\nWhen I was green in judgment, cold in blood,\nTo say as I said then.',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, Antony and Cleopatra (Act 1 Scene 5, Cleopatra)',
    alsoFits: ['alliteration'],
    near: 'simile',
    facts: ['a like or as that compares nothing'],
  },
  // "scorch'd the snake" repeats its opening s sound.
  {
    sentence: 'We have scorch’d the snake, not kill’d it.',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, Macbeth (Act 3 Scene 2, Macbeth)',
    alsoFits: ['alliteration'],
    near: 'personification',
  },
  {
    sentence: 'Come not between the dragon and his wrath.',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, King Lear (Act 1 Scene 1, Lear)',
    near: 'personification',
  },
  // A funeral fog over London after a murder: the weather could be said to set the mood.
  {
    sentence: 'A great chocolate-coloured pall lowered over heaven',
    device: 'metaphor',
    tier: 2,
    source: 'Robert Louis Stevenson, Jekyll and Hyde ("The Carew Murder Case")',
    alsoFits: ['pathetic-fallacy'],
    near: 'personification',
  },
  // "Me, poor man, my" repeats m, if only in small words.
  {
    sentence: 'Me, poor man, my library\nWas dukedom large enough',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, The Tempest (Act 1 Scene 2, Prospero)',
    alsoFits: ['alliteration'],
    near: 'hyperbole',
  },
  {
    sentence: 'For Antony is but a limb of Caesar.',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, Julius Caesar (Act 2 Scene 1, Brutus)',
    near: 'hyperbole',
  },
  {
    sentence: "Worry was a pebble in Leah's shoe all through the school trip.",
    device: 'metaphor',
    tier: 2,
    near: 'hyperbole',
  },
  {
    sentence:
      'Yet do I fear thy nature;\nIt is too full o’ th’ milk of human kindness\nTo catch the nearest way.',
    device: 'metaphor',
    tier: 3,
    source: 'William Shakespeare, Macbeth (Act 1 Scene 5, Lady Macbeth)',
    prompt: 'What does "milk of human kindness" suggest about Macbeth, as his wife sees him?',
    answer: 'He is too gentle to take the crown by murder',
    wrong: [
      'He is a loving father who cares for his children',
      'He is strong and fierce, ready for anything',
      'He is kind to everyone, which makes him a good king',
    ],
  },
  {
    sentence:
      'Life’s but a walking shadow; a poor player,\nThat struts and frets his hour upon the stage,\nAnd then is heard no more',
    device: 'metaphor',
    tier: 3,
    source: 'William Shakespeare, Macbeth (Act 5 Scene 5, Macbeth)',
    prompt: 'What do the metaphors suggest about how Macbeth now sees life?',
    answer: 'It is short and empty, and means nothing in the end',
    wrong: [
      'It is an exciting show to be enjoyed while it lasts',
      'It is dark and frightening, like a shadow at night',
      'It is a career on the stage that he wishes he had chosen',
    ],
    facts: ['life as a stage'],
  },
  {
    sentence:
      '’tis an unweeded garden\nThat grows to seed; things rank and gross in nature\nPossess it merely.',
    device: 'metaphor',
    tier: 3,
    source: 'William Shakespeare, Hamlet (Act 1 Scene 2, Hamlet)',
    prompt: 'What does the "unweeded garden" suggest about the world, as Hamlet sees it?',
    answer: 'It has been left to rot, and foul things have taken over',
    wrong: [
      'It is natural and free, which Hamlet finds beautiful',
      'It needs a gardener, a job Hamlet longs to do',
      'It is full of flowers that will soon come into bloom',
    ],
    facts: ['rot in Denmark'],
  },
  {
    sentence: 'Who steals my purse steals trash.',
    device: 'metaphor',
    tier: 3,
    source: 'William Shakespeare, Othello (Act 3 Scene 3, Iago)',
    prompt: 'What does Iago mean by calling his purse "trash"?',
    answer: 'Money matters little compared with a good name',
    wrong: [
      'His purse is old and worn, and should be thrown away',
      'He would be glad if a thief took it from him',
      'He has spent all his money and has none left',
    ],
    facts: ['Iago on a good name'],
  },
  {
    sentence: 'What the hammer? what the chain?\nIn what furnace was thy brain?',
    device: 'metaphor',
    tier: 3,
    source: 'William Blake, The Tyger',
    prompt: 'What does the "furnace" suggest about how the tiger was made?',
    answer: 'It was forged in fierce heat, like iron by a smith',
    wrong: [
      'It was born somewhere hot, deep in a jungle far away',
      'It was made gently and slowly, with love',
      'It has a fever and its brain is burning',
    ],
  },
  {
    sentence:
      'But manhood is melted into curtsies, valour into compliment, and men are only turned into tongue, and trim ones too',
    device: 'metaphor',
    tier: 3,
    source: 'William Shakespeare, Much Ado About Nothing (Act 4 Scene 1, Beatrice)',
    prompt: "What does Beatrice's metaphor suggest about the men around her?",
    answer: 'They talk politely but no longer act bravely',
    wrong: [
      'They are skilled dancers who bow beautifully',
      'They are brave soldiers who fight for honour',
      'They are too shy to speak to women at all',
    ],
  },
  {
    sentence:
      'Now the melancholy god protect thee, and the tailor make thy doublet of changeable taffeta, for thy mind is a very opal.',
    device: 'metaphor',
    tier: 3,
    source: 'William Shakespeare, Twelfth Night (Act 2 Scene 4, Feste)',
    prompt: 'What does Feste mean by calling Orsino’s mind "a very opal"?',
    answer: 'His moods keep shifting and never settle',
    wrong: [
      'His mind is precious and worth a great deal',
      'His mind is hard, cold and quite unfeeling',
      'His thinking is clear, so he sees the truth',
    ],
  },
  {
    sentence:
      'A Christmas frost had come at midsummer; a white December storm had whirled over June; ice glazed the ripe apples, drifts crushed the blowing roses',
    device: 'metaphor',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre (Chapter 26)',
    prompt:
      'Jane describes her feelings on the day her wedding is stopped. What do the images of winter in summer suggest?',
    answer: 'Her hopes have been ruined suddenly, out of season',
    wrong: [
      'The weather really turned cold and snowy that June',
      'She has always loved winter more than summer',
      'Her wedding has been moved to Christmas instead',
    ],
  },

  // ── Personification: real lines, objects beside pathetic fallacy, ideas beside metaphor ──
  // "strength ... siege ... scorn" repeats s; the boast overstates.
  {
    sentence: 'Our castle’s strength\nWill laugh a siege to scorn',
    device: 'personification',
    tier: 1,
    source: 'William Shakespeare, Macbeth (Act 5 Scene 5, Macbeth)',
    alsoFits: ['alliteration', 'hyperbole'],
  },
  // "whisper" can be heard as a sound word.
  {
    sentence: 'Her heart did whisper, that he had done it for her.',
    device: 'personification',
    tier: 1,
    source: 'Jane Austen, Pride and Prejudice (Chapter 52)',
    alsoFits: ['onomatopoeia'],
  },
  // "misery ... man" repeats m.
  {
    sentence: 'misery acquaints a man with strange bed-fellows.',
    device: 'personification',
    tier: 1,
    source: 'William Shakespeare, The Tempest (Act 2 Scene 2, Trinculo)',
    alsoFits: ['alliteration'],
  },
  // "stealing steps", "claw'd ... clutch" alliterate.
  {
    sentence: 'But age with his stealing steps\nHath claw’d me in his clutch',
    device: 'personification',
    tier: 1,
    source: 'William Shakespeare, Hamlet (Act 5 Scene 1, the Gravedigger)',
    alsoFits: ['alliteration'],
  },
  {
    sentence:
      'Four days will quickly steep themselves in night;\nFour nights will quickly dream away the time',
    device: 'personification',
    tier: 1,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 1 Scene 1, Hippolyta)",
  },
  // A smiling morning: the scene could be said to set a hopeful mood.
  {
    sentence:
      'The grey-ey’d morn smiles on the frowning night,\nChequering the eastern clouds with streaks of light',
    device: 'personification',
    tier: 1,
    source: 'William Shakespeare, Romeo and Juliet (Act 2 Scene 3, Friar Lawrence)',
    alsoFits: ['pathetic-fallacy'],
  },
  // A storm before the drama in Cyprus: the weather could be said to set the mood.
  {
    sentence: 'Methinks the wind hath spoke aloud at land.',
    device: 'personification',
    tier: 1,
    source: 'William Shakespeare, Othello (Act 2 Scene 1, Montano)',
    alsoFits: ['pathetic-fallacy'],
  },
  // Turning politeness itself rude overstates; "Courtesy ... convert ... come" repeats k.
  {
    sentence: 'Courtesy itself must convert to disdain if you come in her presence.',
    device: 'personification',
    tier: 1,
    source: 'William Shakespeare, Much Ado About Nothing (Act 1 Scene 1, Beatrice)',
    alsoFits: ['hyperbole', 'alliteration'],
  },
  // "four of his five" alliterates; losing four wits in one argument overstates.
  {
    sentence: 'In our last conflict four of his five wits went halting off',
    device: 'personification',
    tier: 1,
    source: 'William Shakespeare, Much Ado About Nothing (Act 1 Scene 1, Beatrice)',
    alsoFits: ['alliteration', 'hyperbole'],
  },
  {
    sentence: 'The clock upbraids me with the waste of time.',
    device: 'personification',
    tier: 2,
    source: 'William Shakespeare, Twelfth Night (Act 3 Scene 1, Olivia)',
    near: 'pathetic-fallacy',
  },
  // A mask coming alive to join in overstates his anger.
  {
    sentence: 'my very visor began to assume life and scold with her.',
    device: 'personification',
    tier: 2,
    source: 'William Shakespeare, Much Ado About Nothing (Act 2 Scene 1, Benedick)',
    alsoFits: ['hyperbole'],
    near: 'pathetic-fallacy',
  },
  {
    sentence: 'The gold had asked that he should sit weaving longer and longer',
    device: 'personification',
    tier: 2,
    source: 'George Eliot, Silas Marner (Chapter 14)',
    near: 'pathetic-fallacy',
  },
  // "sinister ... street", "block of building" alliterate; a sinister building could be said to set the mood.
  {
    sentence:
      'just at that point a certain sinister block of building thrust forward its gable on the street.',
    device: 'personification',
    tier: 2,
    source: 'Robert Louis Stevenson, Jekyll and Hyde ("Story of the Door")',
    alsoFits: ['alliteration', 'pathetic-fallacy'],
    near: 'metaphor',
  },
  // Caesar boasts that he is more dangerous than danger.
  {
    sentence: 'Danger knows full well\nThat Caesar is more dangerous than he.',
    device: 'personification',
    tier: 2,
    source: 'William Shakespeare, Julius Caesar (Act 2 Scene 2, Caesar)',
    alsoFits: ['hyperbole'],
    near: 'metaphor',
  },
  // "Sham’st thou to show", "brow by" alliterate.
  {
    sentence:
      'O conspiracy,\nSham’st thou to show thy dangerous brow by night,\nWhen evils are most free?',
    device: 'personification',
    tier: 2,
    source: 'William Shakespeare, Julius Caesar (Act 2 Scene 1, Brutus)',
    alsoFits: ['alliteration'],
    near: 'metaphor',
  },
  {
    sentence: 'Mischief, thou art afoot',
    device: 'personification',
    tier: 2,
    source: 'William Shakespeare, Julius Caesar (Act 3 Scene 2, Antony)',
    near: 'metaphor',
  },
  {
    sentence: 'Till gathering sleep had mothered them from him.',
    device: 'personification',
    tier: 2,
    source: 'Wilfred Owen, Disabled',
    near: 'metaphor',
    facts: ['Disabled: voices of play'],
  },
  // A gentle night for two lovers: the scene could be said to mirror their mood; "no noise" alliterates.
  {
    sentence:
      'In such a night as this,\nWhen the sweet wind did gently kiss the trees,\nAnd they did make no noise',
    device: 'personification',
    tier: 2,
    source: 'William Shakespeare, The Merchant of Venice (Act 5 Scene 1, Lorenzo)',
    alsoFits: ['pathetic-fallacy', 'alliteration'],
    near: 'simile',
    facts: ['a like or as that compares nothing'],
  },
  {
    sentence: 'The stairs groaned under every step as Jess climbed towards the attic.',
    device: 'personification',
    tier: 3,
    prompt: 'What does "groaned" suggest?',
    answer: 'The old house seems to suffer, which builds unease',
    wrong: [
      'Jess has hurt herself and cries out in pain',
      'The stairs are being mended by builders working below',
      'The house is glad to welcome a new visitor',
    ],
    facts: ['the word groaned'],
  },
  {
    sentence: 'The evil that men do lives after them,\nThe good is oft interred with their bones',
    device: 'personification',
    tier: 3,
    source: 'William Shakespeare, Julius Caesar (Act 3 Scene 2, Antony)',
    prompt: 'What does Antony suggest about how people are remembered?',
    answer: 'Their wrongs live on, but their good deeds are buried',
    wrong: [
      'Their good deeds are never forgotten by anyone',
      'Evil people are punished long after they have died',
      'Everyone is remembered fairly, good and bad alike',
    ],
  },
  {
    sentence: 'Age cannot wither her, nor custom stale\nHer infinite variety.',
    device: 'personification',
    tier: 3,
    source: 'William Shakespeare, Antony and Cleopatra (Act 2 Scene 2, Enobarbus)',
    prompt: 'What does Enobarbus suggest about Cleopatra?',
    answer: 'She never seems old or dull to those who know her',
    wrong: [
      'She has grown old and tired of the same habits',
      'She is very young, so age has not reached her yet',
      'She changes her mind so often that nobody trusts her',
    ],
  },
  {
    sentence:
      'Love’s not Time’s fool, though rosy lips and cheeks\nWithin his bending sickle’s compass come',
    device: 'personification',
    tier: 3,
    source: 'William Shakespeare, Sonnet 116',
    prompt: 'What does the sonnet suggest about time and true love?',
    answer: 'Time cuts down youth and beauty, but not true love',
    wrong: [
      'Time makes true love grow stronger with every passing year',
      'True love is foolish, because time destroys it',
      'Time is a farmer who looks after young lovers',
    ],
  },
  {
    sentence: 'If you can fill the unforgiving minute\nWith sixty seconds’ worth of distance run',
    device: 'personification',
    tier: 3,
    source: 'Rudyard Kipling, If',
    prompt: 'What does "unforgiving" suggest about the minute?',
    answer: 'It will not wait, and gives no second chance',
    wrong: [
      'It is angry with the reader for being lazy',
      'It feels endless, because the runner is so tired',
      'It forgives anyone who has tried their best',
    ],
  },
  {
    sentence:
      'The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait',
    device: 'personification',
    tier: 3,
    source: 'Charles Dickens, A Christmas Carol (Stave 1)',
    prompt: 'What does the description suggest about Scrooge?',
    answer: 'His cold heart shows on the outside, in his face and body',
    wrong: [
      'He lives in a freezing house and cannot afford a single fire',
      'He is ill with a fever that makes him shiver',
      'He is old, and age has made him look stiff and tired',
    ],
  },
  {
    sentence:
      'Love looks not with the eyes, but with the mind;\nAnd therefore is wing’d Cupid painted blind.',
    device: 'personification',
    tier: 3,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 1 Scene 1, Helena)",
    prompt: 'What does Helena suggest about love?',
    answer: 'It sees what the mind imagines, not what is really there',
    wrong: [
      'It only cares about how beautiful someone looks',
      'It is cruel, because Cupid shoots his arrows at people blindly',
      'It is wise, so it always chooses the right person',
    ],
  },
  {
    sentence:
      'Night’s candles are burnt out, and jocund day\nStands tiptoe on the misty mountain tops.',
    device: 'personification',
    tier: 3,
    source: 'William Shakespeare, Romeo and Juliet (Act 3 Scene 5, Romeo)',
    prompt: 'What does "Stands tiptoe" suggest about the day?',
    answer: 'It is about to arrive, so Romeo must leave at once',
    wrong: [
      'It is shy and does not want to disturb the lovers',
      'It is far away, so the lovers have plenty of time',
      'It is dancing for joy because Romeo and Juliet are married',
    ],
  },
  {
    sentence: 'Purple the sails, and so perfumed that\nThe winds were love-sick with them',
    device: 'personification',
    tier: 3,
    source: 'William Shakespeare, Antony and Cleopatra (Act 2 Scene 2, Enobarbus)',
    prompt: 'What does "love-sick" suggest about Cleopatra’s barge?',
    answer: 'It is so beautiful that even the winds fall in love',
    wrong: [
      'The winds are making the sailors seasick on the river',
      'The perfume is so strong that it makes people ill',
      'The weather is calm because nobody wants to travel',
    ],
  },
  {
    sentence: 'When sorrows come, they come not single spies,\nBut in battalions.',
    device: 'personification',
    tier: 3,
    source: 'William Shakespeare, Hamlet (Act 4 Scene 5, Claudius)',
    prompt: 'What does Claudius suggest about sorrows?',
    answer: 'Troubles never come one at a time, but all together',
    wrong: [
      'Sad news is spread by secret spies at court',
      'Sorrows can be fought off and beaten, like an invading army',
      'Each sorrow comes alone, so it is easy to bear',
    ],
  },
  {
    sentence: 'I have a high respect for your nerves. They are my old friends.',
    device: 'personification',
    tier: 3,
    source: 'Jane Austen, Pride and Prejudice (Chapter 1)',
    prompt: 'What does Mr Bennet’s joke suggest?',
    answer: 'He has heard his wife complain of her nerves for years',
    wrong: [
      'He truly respects his wife’s feelings and worries',
      'His wife has many friends who help her stay calm',
      'He is as nervous as his wife, and always has been',
    ],
  },
  {
    sentence: 'The grief that does not speak\nWhispers the o’er-fraught heart, and bids it break.',
    device: 'personification',
    tier: 3,
    source: 'William Shakespeare, Macbeth (Act 4 Scene 3, Malcolm)',
    prompt: 'What does Malcolm suggest about grief that is kept silent?',
    answer: 'Grief kept inside can crush a person, so it must be spoken',
    wrong: [
      'Grief is best kept quiet so that it fades away',
      'A man should never weep, or talk to anyone about his grief',
      'Grief speaks loudly, so everyone can hear it',
    ],
  },
  {
    sentence: 'Vaulting ambition, which o’erleaps itself\nAnd falls on th’ other',
    device: 'personification',
    tier: 3,
    source: 'William Shakespeare, Macbeth (Act 1 Scene 7, Macbeth)',
    prompt: 'What does Macbeth suggest about his own ambition?',
    answer: 'It may leap too far and bring about his own fall',
    wrong: [
      'It will carry him safely over every obstacle in his way',
      'It is a fine horse that he is proud to ride',
      'It is too weak to make him do anything at all',
    ],
  },
  {
    sentence:
      'The lawn started at the beach and ran toward the front door for a quarter of a mile, jumping over sun-dials and brick walks and burning gardens',
    device: 'personification',
    tier: 3,
    source: 'F. Scott Fitzgerald, The Great Gatsby (Chapter 1)',
    prompt: 'What does Nick suggest by making the lawn run and jump?',
    answer: 'It seems alive, rushing eagerly up to the grand house',
    wrong: [
      'It is overgrown, because nobody bothers to cut it',
      'Children are running races across it in the sun',
      'It is uneven and dangerous, full of hidden holes and bumps',
    ],
  },

  // ── Pathetic fallacy: weather and setting that mirror a feeling ──
  // "three ... thunder" repeats th.
  {
    sentence: 'When shall we three meet again?\nIn thunder, lightning, or in rain?',
    device: 'pathetic-fallacy',
    tier: 1,
    source: 'William Shakespeare, Macbeth (Act 1 Scene 1, the First Witch)',
    alsoFits: ['alliteration'],
    near: 'personification',
  },
  // A "melancholy" wind is a sad one, so the wind is personified too; "melancholy ... marshes" repeats m.
  {
    sentence: 'There was a melancholy wind, and the marshes were very dismal.',
    device: 'pathetic-fallacy',
    tier: 1,
    source: 'Charles Dickens, Great Expectations (Chapter 53)',
    alsoFits: ['personification', 'alliteration'],
  },
  {
    sentence: 'On the day her best friend moved away, a thin grey rain fell until dark.',
    device: 'pathetic-fallacy',
    tier: 1,
    near: 'personification',
  },
  {
    sentence:
      'Just as Zara heard that she had won the art prize, the sun came out over the garden.',
    device: 'pathetic-fallacy',
    tier: 1,
    near: 'personification',
    facts: ['a like or as that compares nothing'],
  },
  // "sick at heart" is an old metaphor.
  {
    sentence: 'For this relief much thanks. ’Tis bitter cold,\nAnd I am sick at heart.',
    device: 'pathetic-fallacy',
    tier: 2,
    source: 'William Shakespeare, Hamlet (Act 1 Scene 1, Francisco)',
    alsoFits: ['metaphor'],
    near: 'personification',
  },
  {
    sentence:
      'I pray thee, good Mercutio, let’s retire:\nThe day is hot, the Capulets abroad,\nAnd if we meet, we shall not scape a brawl',
    device: 'pathetic-fallacy',
    tier: 2,
    source: 'William Shakespeare, Romeo and Juliet (Act 3 Scene 1, Benvolio)',
    near: 'personification',
  },
  // "weather ... wet" alliterates on w ("wretched" opens with r).
  {
    sentence:
      'It was wretched weather; stormy and wet, stormy and wet; mud, mud, mud, deep in all the streets.',
    device: 'pathetic-fallacy',
    tier: 2,
    source: 'Charles Dickens, Great Expectations (Chapter 39)',
    alsoFits: ['alliteration'],
    near: 'personification',
    // Its tip teaches that "wretched weather" does not alliterate.
    facts: ['alliteration by sound, not letter'],
  },
  {
    sentence:
      'On the night the factory closed and two hundred people lost their jobs, a heavy fog settled over the town.',
    device: 'pathetic-fallacy',
    tier: 2,
    near: 'personification',
  },
  {
    sentence:
      'The week Gran came home after six months abroad, the snow melted and the first green shoots appeared.',
    device: 'pathetic-fallacy',
    tier: 2,
    near: 'personification',
  },
  {
    sentence: 'Storm clouds gathered over the pitch as the two captains glared at each other.',
    device: 'pathetic-fallacy',
    tier: 2,
    near: 'personification',
    facts: ['a like or as that compares nothing'],
  },
  {
    sentence: 'Light thickens; and the crow\nMakes wing to th’ rooky wood.',
    device: 'pathetic-fallacy',
    tier: 3,
    source: 'William Shakespeare, Macbeth (Act 3 Scene 2, Macbeth)',
    prompt:
      'Macbeth says this as he waits for Banquo to be murdered. What does the fading light suggest?',
    answer: 'Evil is gathering as night falls, ready to strike',
    wrong: [
      'The day is ending peacefully and everyone can rest',
      'A storm is on its way, so the crow is flying home',
      'Macbeth is tired and wants to go to sleep early',
    ],
  },
  {
    sentence: 'Mud-coloured clouds drooped sadly over the muddy streets.',
    device: 'pathetic-fallacy',
    tier: 3,
    source: 'Arthur Conan Doyle, The Sign of Four (Chapter 3)',
    prompt: 'What does "drooped sadly" add to the scene?',
    answer: 'The weather is as low and gloomy as the mood',
    wrong: [
      'The clouds are about to break and let the sun through',
      'The streets have been flooded by a sudden storm',
      'Watson is excited about the adventure that lies ahead',
    ],
    facts: ["Watson's dreary evening"],
  },
  {
    sentence:
      'A glooming peace this morning with it brings;\nThe sun for sorrow will not show his head.',
    device: 'pathetic-fallacy',
    tier: 3,
    source: 'William Shakespeare, Romeo and Juliet (Act 5 Scene 3, the Prince)',
    prompt: 'What does the sun refusing to "show his head" suggest?',
    answer: 'Nature itself seems to mourn the lovers',
    wrong: [
      'It will rain later, so the families should go home',
      'The feud is over, so everyone can be happy again',
      'The sun is shy and hiding from the angry Prince',
    ],
  },
  {
    sentence:
      'Morning, dismal and wet, at length dawned, and discovered to my sleepless and aching eyes the church of Ingolstadt, its white steeple and clock, which indicated the sixth hour.',
    device: 'pathetic-fallacy',
    tier: 3,
    source: 'Mary Shelley, Frankenstein (Chapter 5)',
    prompt:
      'Victor has just brought his creature to life and fled from it. What does the weather suggest?',
    answer: 'His triumph has turned into horror and misery',
    wrong: [
      'He is excited and cannot wait to show his work',
      'Autumn has come, and the town is getting colder',
      'He has slept well and feels ready for a new day',
    ],
  },
  {
    sentence:
      'No fog, no mist; clear, bright, jovial, stirring, cold; cold, piping for the blood to dance to; Golden sunlight; Heavenly sky; sweet fresh air; merry bells.',
    device: 'pathetic-fallacy',
    tier: 3,
    source: 'Charles Dickens, A Christmas Carol (Stave 5)',
    prompt: 'What does the weather on Christmas morning suggest about Scrooge?',
    answer: 'His new joy is matched by a clear, bright, lively day',
    wrong: [
      'He is still cold and mean, like the frosty air',
      'He wishes the day were warm instead of cold',
      'He is too tired after the night to enjoy the weather',
    ],
  },
  {
    sentence: 'The day agreed upon was pouring rain.',
    device: 'pathetic-fallacy',
    tier: 3,
    source: 'F. Scott Fitzgerald, The Great Gatsby (Chapter 5)',
    prompt:
      'This is the day Gatsby is to meet Daisy again after five years. What might the rain suggest?',
    answer: 'His nerves about how the meeting will go',
    wrong: [
      'The meeting will be cancelled because of the storm',
      'Gatsby is calm and has no worries about the meeting',
      'Summer is over and autumn has already arrived',
    ],
  },
  {
    sentence: 'The next day was broiling, almost the last, certainly the warmest, of the summer.',
    device: 'pathetic-fallacy',
    tier: 3,
    source: 'F. Scott Fitzgerald, The Great Gatsby (Chapter 7)',
    prompt:
      'The angry quarrel between Gatsby and Tom takes place on this day. What does the heat suggest?',
    answer: 'Tempers are close to boiling point',
    wrong: [
      'The summer has been a happy, relaxed one for everyone',
      'The characters are going on a pleasant trip to the beach',
      'The weather is about to turn cold and wintry',
    ],
  },
  {
    sentence: 'And the mists had all solemnly risen now, and the world lay spread before me.',
    device: 'pathetic-fallacy',
    tier: 3,
    source: 'Charles Dickens, Great Expectations (Chapter 19)',
    prompt:
      'Pip is leaving home for London to become a gentleman. What do the rising mists suggest?',
    answer: 'His future now seems open and full of possibility',
    wrong: [
      'He is lost in thick fog and cannot find his way',
      'His future looks dark, and he expects only trouble',
      'The weather on the marshes is getting worse',
    ],
    facts: ['Pip leaves home'],
  },
  {
    sentence:
      'the great horse-chestnut at the bottom of the orchard had been struck by lightning in the night, and half of it split away.',
    device: 'pathetic-fallacy',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre (Chapter 23)',
    prompt:
      'This happens on the night Rochester asks Jane to marry him. What does the split tree suggest?',
    answer: 'Something will soon tear the couple apart',
    wrong: [
      'The storm has ruined the garden for the wedding',
      'Rochester will grow strong and tall like the tree',
      'Jane and Rochester have quarrelled in the night',
    ],
  },

  // ── Alliteration: real lines, a sound and not a letter, and beside onomatopoeia ──
  {
    sentence: 'Full fathom five thy father lies.',
    device: 'alliteration',
    tier: 1,
    source: 'William Shakespeare, The Tempest (Act 1 Scene 2, Ariel)',
  },
  {
    sentence: 'Ill met by moonlight, proud Titania.',
    device: 'alliteration',
    tier: 1,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 2 Scene 1, Oberon)",
  },
  {
    sentence: 'Thou and I are too wise to woo peaceably.',
    device: 'alliteration',
    tier: 1,
    source: 'William Shakespeare, Much Ado About Nothing (Act 5 Scene 2, Benedick)',
  },
  {
    sentence: 'I do perceive here a divided duty',
    device: 'alliteration',
    tier: 1,
    source: 'William Shakespeare, Othello (Act 1 Scene 3, Desdemona)',
  },
  {
    sentence: 'Let me speak proudly: tell the Constable\nWe are but warriors for the working-day.',
    device: 'alliteration',
    tier: 1,
    source: 'William Shakespeare, Henry V (Act 4 Scene 3, Henry)',
  },
  // "Hard food for Midas" calls gold a food; Bassanio speaks to the gold as
  // "thou", as if it could hear, which this game teaches as personification.
  {
    sentence: 'Therefore thou gaudy gold,\nHard food for Midas, I will none of thee',
    device: 'alliteration',
    tier: 1,
    source: 'William Shakespeare, The Merchant of Venice (Act 3 Scene 2, Bassanio)',
    alsoFits: ['metaphor', 'personification'],
  },
  {
    sentence: 'She found me roots of relish sweet,\nAnd honey wild, and manna dew',
    device: 'alliteration',
    tier: 1,
    source: 'John Keats, La Belle Dame sans Merci',
  },
  {
    sentence: 'And shivered in his ghastly suit of grey',
    device: 'alliteration',
    tier: 1,
    source: 'Wilfred Owen, Disabled',
  },
  // "that ever I heard" overstates.
  {
    sentence: 'This is the silliest stuff that ever I heard.',
    device: 'alliteration',
    tier: 1,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 5 Scene 1, Hippolyta)",
    alsoFits: ['hyperbole'],
  },
  // Kingdoms are called clay, which is a metaphor.
  {
    sentence: 'Kingdoms are clay.',
    device: 'alliteration',
    tier: 2,
    source: 'William Shakespeare, Antony and Cleopatra (Act 1 Scene 1, Antony)',
    alsoFits: ['metaphor'],
    facts: ['alliteration by sound, not letter', 'Antony gives up Rome for Cleopatra'],
  },
  {
    sentence: 'Thou naughty knave, what trade?',
    device: 'alliteration',
    tier: 2,
    source: 'William Shakespeare, Julius Caesar (Act 1 Scene 1, Marullus)',
    facts: ['alliteration by sound, not letter'],
  },
  {
    sentence:
      'The jocund travellers came on; and as they came, Scrooge knew and named them every one.',
    device: 'alliteration',
    tier: 2,
    source: 'Charles Dickens, A Christmas Carol (Stave 2)',
    facts: ['alliteration by sound, not letter', 'a like or as that compares nothing'],
  },
  // "moaning" can be heard as a sound word.
  {
    sentence:
      'The air was filled with phantoms, wandering hither and thither in restless haste, and moaning as they went.',
    device: 'alliteration',
    tier: 2,
    source: 'Charles Dickens, A Christmas Carol (Stave 1)',
    alsoFits: ['onomatopoeia'],
    facts: ['alliteration by sound, not letter'],
  },
  {
    sentence: 'I fully expected to find a Constable in the kitchen, waiting to take me up.',
    device: 'alliteration',
    tier: 2,
    source: 'Charles Dickens, Great Expectations (Chapter 4)',
    facts: ['alliteration by sound, not letter'],
  },
  {
    sentence:
      'I’ll lead you about a round,\nThrough bog, through bush, through brake, through brier',
    device: 'alliteration',
    tier: 2,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 3 Scene 1, Puck)",
    near: 'onomatopoeia',
  },
  {
    sentence: 'Fillet of a fenny snake,\nIn the cauldron boil and bake',
    device: 'alliteration',
    tier: 2,
    source: 'William Shakespeare, Macbeth (Act 4 Scene 1, the Second Witch)',
    near: 'onomatopoeia',
  },
  {
    sentence: 'Heavy hooves hit the hard, dry ground as the horses galloped past.',
    device: 'alliteration',
    tier: 2,
    near: 'onomatopoeia',
    facts: ['a like or as that compares nothing'],
  },
  {
    sentence:
      'Poor naked wretches, wheresoe’er you are,\nThat bide the pelting of this pitiless storm',
    device: 'alliteration',
    tier: 3,
    source: 'William Shakespeare, King Lear (Act 3 Scene 4, Lear)',
    prompt: 'What do the repeated "p" sounds add to Lear’s words?',
    answer: 'The sharp blows of rain on people with no shelter',
    wrong: [
      'A cheerful rhythm, like children playing in the rain',
      'A soft, soothing calm as the storm slowly passes',
      'The sound of a clock ticking as Lear waits for help',
    ],
    facts: ['plosive sounds suit force'],
  },
  {
    sentence:
      'The isle is full of noises,\nSounds, and sweet airs, that give delight, and hurt not.',
    device: 'alliteration',
    tier: 3,
    source: 'William Shakespeare, The Tempest (Act 3 Scene 2, Caliban)',
    prompt: 'What do the repeated "s" sounds add to Caliban’s speech?',
    answer: 'A soft, musical calm, like the island’s music',
    wrong: [
      'A threatening hiss, as if Caliban were a snake',
      'A sense of loud, harsh noise that hurts his ears',
      'A fast, excited rhythm, as if he were running',
    ],
    facts: ['soft sounds suit calm', 'Caliban: the isle is full of noises'],
  },
  {
    sentence: 'Enjoy the honey-heavy dew of slumber',
    device: 'alliteration',
    tier: 3,
    source: 'William Shakespeare, Julius Caesar (Act 2 Scene 1, Brutus)',
    prompt: 'What does "honey-heavy" suggest about the boy’s sleep?',
    answer: 'It is sweet and deep, too heavy to wake from',
    wrong: [
      'It is sticky and uncomfortable, like spilt honey',
      'It is short and light, so he will soon wake up',
      'It is troubled by bad dreams about the plot',
    ],
  },
  {
    sentence:
      'And for a little while they halted in sorrowful silence at the place where the windmill had once stood.',
    device: 'alliteration',
    tier: 3,
    source: 'George Orwell, Animal Farm (Chapter 8)',
    prompt: 'What does "sorrowful silence" add to the moment?',
    answer: 'A hushed, heavy grief for what they have lost',
    wrong: [
      'A peaceful calm because their hard work is over',
      'A secret plan, whispered so the pigs cannot hear',
      'A sense that the animals are bored and want to rest',
    ],
    facts: ['soft sounds suit calm'],
  },
  {
    sentence: "The bully's big black boots came down the corridor towards us.",
    device: 'alliteration',
    tier: 3,
    prompt: 'What do the repeated "b" sounds add?',
    answer: 'A heavy, threatening sense of him coming closer',
    wrong: [
      'A cheerful, bouncing rhythm, like a ball on the floor',
      'A quiet, gentle mood in the empty corridor',
      'A feeling that the bully is tired and slow',
    ],
    facts: ['plosive sounds suit force'],
  },

  // ── Onomatopoeia: real lines, and sound words beside alliteration ──
  // "toil and trouble" alliterates; the witches command the fire and the
  // cauldron as if they could hear, which this game teaches as personification.
  {
    sentence: 'Double, double, toil and trouble;\nFire, burn; and cauldron, bubble.',
    device: 'onomatopoeia',
    tier: 1,
    source: 'William Shakespeare, Macbeth (Act 4 Scene 1, the Witches)',
    alsoFits: ['alliteration', 'personification'],
  },
  // "wow ... watch" repeats w.
  {
    sentence: 'Bow-wow. The watch dogs bark.',
    device: 'onomatopoeia',
    tier: 1,
    source: 'William Shakespeare, The Tempest (Act 1 Scene 2, Ariel)',
    alsoFits: ['alliteration'],
    facts: ['the word bark'],
  },
  // A night of prowling animals could be said to set an eerie mood.
  {
    sentence:
      'Now the hungry lion roars,\nAnd the wolf behowls the moon;\nWhilst the heavy ploughman snores',
    device: 'onomatopoeia',
    tier: 1,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 5 Scene 1, Puck)",
    alsoFits: ['pathetic-fallacy'],
    facts: ['the word roar'],
  },
  // She would rather hear any noise than a declaration of love: an overstatement.
  {
    sentence: 'I had rather hear my dog bark at a crow than a man swear he loves me.',
    device: 'onomatopoeia',
    tier: 1,
    source: 'William Shakespeare, Much Ado About Nothing (Act 1 Scene 1, Beatrice)',
    alsoFits: ['hyperbole'],
    facts: ['the word bark'],
  },
  // "like a great metallic heart" is a simile.
  {
    sentence:
      'The furnaces roared, and the powerful engines whizzed and clanked, like a great metallic heart.',
    device: 'onomatopoeia',
    tier: 1,
    source: 'Arthur Conan Doyle, The Sign of Four (Chapter 10)',
    alsoFits: ['simile'],
    facts: ['the word roar'],
  },
  // A door that "groaned" is given a human sound.
  {
    sentence: 'It creaked and groaned, but did not yield.',
    device: 'onomatopoeia',
    tier: 1,
    source: 'Arthur Conan Doyle, The Sign of Four (Chapter 5)',
    alsoFits: ['personification'],
    facts: ['the word creaked', 'the word groaned'],
  },
  {
    sentence:
      'The cows lowed it, the dogs whined it, the sheep bleated it, the horses whinnied it, the ducks quacked it.',
    device: 'onomatopoeia',
    tier: 1,
    source: 'George Orwell, Animal Farm (Chapter 1)',
  },
  // "do ... dog ... day" alliterates, and "dog will have his day" is a proverb that works as a metaphor.
  {
    sentence: 'Let Hercules himself do what he may,\nThe cat will mew, and dog will have his day.',
    device: 'onomatopoeia',
    tier: 1,
    source: 'William Shakespeare, Hamlet (Act 5 Scene 1, Hamlet)',
    alsoFits: ['alliteration', 'metaphor'],
  },
  // "as if a shot had hit it" is a simile; "cracked ... came clattering" alliterates.
  {
    sentence:
      'One of our chimneys cracked as if a shot had hit it, flew, and a piece of it came clattering down the tiles',
    device: 'onomatopoeia',
    tier: 1,
    source: 'H. G. Wells, The War of the Worlds (Book 1, Chapter 9)',
    alsoFits: ['simile', 'alliteration'],
    facts: ['the word crack'],
  },
  // "babble of the brook" alliterates; a brook that babbles chatters like a person.
  {
    sentence: 'Keep where thou canst hear the babble of the brook.',
    device: 'onomatopoeia',
    tier: 1,
    source: 'Nathaniel Hawthorne, The Scarlet Letter (Chapter 16)',
    alsoFits: ['alliteration', 'personification'],
  },
  // "a thousand" instruments overstates.
  {
    sentence: 'Sometimes a thousand twangling instruments\nWill hum about mine ears',
    device: 'onomatopoeia',
    tier: 1,
    source: 'William Shakespeare, The Tempest (Act 3 Scene 2, Caliban)',
    alsoFits: ['hyperbole'],
    facts: ['Caliban: the isle is full of noises', 'the word hum'],
  },
  // "Like horse, hound, hog" is a simile and alliterates.
  {
    sentence:
      'And neigh, and bark, and grunt, and roar, and burn,\nLike horse, hound, hog, bear, fire, at every turn.',
    device: 'onomatopoeia',
    tier: 1,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 3 Scene 1, Puck)",
    alsoFits: ['simile', 'alliteration'],
    facts: ['the word roar', 'the word bark', 'the word neigh'],
  },
  {
    sentence:
      'The cellar-door flew open with a booming sound, and then he heard the noise much louder, on the floors below',
    device: 'onomatopoeia',
    tier: 2,
    source: 'Charles Dickens, A Christmas Carol (Stave 1)',
    near: 'alliteration',
  },
  {
    sentence: 'The creature instantly broke into a succession of high, tremulous yelps',
    device: 'onomatopoeia',
    tier: 2,
    source: 'Arthur Conan Doyle, The Sign of Four (Chapter 7)',
    near: 'alliteration',
  },
  {
    sentence:
      'Heavy steps and the clamour of loud voices were audible from below, and the hall door shut with a loud crash.',
    device: 'onomatopoeia',
    tier: 2,
    source: 'Arthur Conan Doyle, The Sign of Four (Chapter 6)',
    near: 'alliteration',
    facts: ['the word crash'],
  },
  {
    sentence: 'Moses sprang off his perch and flapped after her, croaking loudly.',
    device: 'onomatopoeia',
    tier: 2,
    source: 'George Orwell, Animal Farm (Chapter 2)',
    near: 'alliteration',
  },
  // A hissing breath likens Hyde to a snake.
  {
    sentence: 'Mr. Hyde shrank back with a hissing intake of the breath.',
    device: 'onomatopoeia',
    tier: 2,
    source: 'Robert Louis Stevenson, Jekyll and Hyde ("Search for Mr. Hyde")',
    alsoFits: ['metaphor'],
    near: 'alliteration',
    facts: ['the word hiss'],
  },
  // A storm that worsens as Victor walks could be said to mirror his mood.
  {
    sentence:
      'I quitted my seat, and walked on, although the darkness and storm increased every minute, and the thunder burst with a terrific crash over my head.',
    device: 'onomatopoeia',
    tier: 2,
    source: 'Mary Shelley, Frankenstein (Chapter 7)',
    alsoFits: ['pathetic-fallacy'],
    near: 'alliteration',
    facts: ['the word crash'],
  },
  {
    sentence: 'Ice clinked in the jug as Dad poured the lemonade.',
    device: 'onomatopoeia',
    tier: 2,
    near: 'alliteration',
    facts: ['a like or as that compares nothing'],
  },
  {
    sentence:
      'The hum of either army stilly sounds,\nThat the fix’d sentinels almost receive\nThe secret whispers of each other’s watch',
    device: 'onomatopoeia',
    tier: 3,
    source: 'William Shakespeare, Henry V (Act 4, Chorus, the Chorus)',
    prompt: 'What do "hum" and "whispers" suggest about the night before the battle?',
    answer: 'The armies are close, and the night is tense',
    wrong: [
      'The soldiers are singing happily around their fires',
      'The battle has already started in the dark',
      'Both armies are fast asleep and nothing stirs',
    ],
    facts: ['the word hum'],
  },
  {
    sentence: 'Then slowly the hissing passed into a humming, into a long, loud, droning noise.',
    device: 'onomatopoeia',
    tier: 3,
    source: 'H. G. Wells, The War of the Worlds (Book 1, Chapter 5)',
    prompt: 'What does the change from "hissing" to "humming" to "droning" suggest?',
    answer: 'A machine is starting up and growing more powerful',
    wrong: [
      'A swarm of bees is gathering in the sandpit',
      'The noise is fading away as the danger passes',
      'People in the crowd are whispering to each other',
    ],
    facts: ['the word hiss', 'the word hum'],
  },
  {
    sentence:
      'But suddenly the dogs sitting round Napoleon let out deep, menacing growls, and the pigs fell silent and sat down again.',
    device: 'onomatopoeia',
    tier: 3,
    source: 'George Orwell, Animal Farm (Chapter 5)',
    prompt: 'What do the dogs’ "menacing growls" show about power on the farm?',
    answer: 'Napoleon now rules by the threat of force',
    wrong: [
      'The dogs are hungry and want their dinner',
      'The pigs are frightened of the other animals',
      'The animals enjoy a lively, open debate',
    ],
  },
  {
    sentence: 'And hymns in the cosy parlour, the tinkling piano our guide.',
    device: 'onomatopoeia',
    tier: 3,
    source: 'D. H. Lawrence, Piano',
    prompt: 'What does "tinkling" suggest about the piano in the speaker’s memory?',
    answer: 'It belongs to a warm, happy childhood',
    wrong: [
      'It is out of tune and painful to listen to',
      'It is loud and grand, played in a concert hall',
      'It is broken, and only a few keys still work',
    ],
  },
  {
    sentence: 'Clash, clang, hammer; ding, dong, bell.',
    device: 'onomatopoeia',
    tier: 3,
    source: 'Charles Dickens, A Christmas Carol (Stave 5)',
    prompt: 'What do the bell sounds suggest about Christmas morning for Scrooge?',
    answer: 'The world is ringing with joy, and he loves to hear it',
    wrong: [
      'The noise gives him a headache and spoils his mood',
      'A fire has broken out and the alarm bells are ringing',
      'The church bells are calling him to his own funeral',
    ],
  },
  {
    sentence: 'The fridge hummed in the empty flat.',
    device: 'onomatopoeia',
    tier: 3,
    prompt: 'What does "hummed" add to the scene?',
    answer: 'A lonely quiet, broken only by one small sound',
    wrong: [
      'A cheerful tune that someone in the flat is singing',
      'A busy, crowded party going on in the next room',
      'A warning that the fridge is broken and dangerous',
    ],
    facts: ['the word hum'],
  },

  // ── Hyperbole: real lines, beside metaphor and simile ──
  // "cleft his club" alliterates.
  {
    sentence:
      'she would have made Hercules have turned spit, yea, and have cleft his club to make the fire too.',
    device: 'hyperbole',
    tier: 1,
    source: 'William Shakespeare, Much Ado About Nothing (Act 2 Scene 1, Benedick)',
    alsoFits: ['alliteration'],
    facts: ["Benedick's rant about Beatrice"],
  },
  // A city melting into a river is also a metaphor.
  {
    sentence: 'Let Rome in Tiber melt',
    device: 'hyperbole',
    tier: 1,
    source: 'William Shakespeare, Antony and Cleopatra (Act 1 Scene 1, Antony)',
    alsoFits: ['metaphor'],
    facts: ['Antony gives up Rome for Cleopatra'],
  },
  // "as though" makes a comparison; "let loose" alliterates.
  {
    sentence: 'It looks as though all the moles in England had been let loose in it.',
    device: 'hyperbole',
    tier: 1,
    source: 'Arthur Conan Doyle, The Sign of Four (Chapter 5)',
    alsoFits: ['simile', 'alliteration'],
  },
  {
    sentence: 'it became a thing such as even Dante could not have conceived.',
    device: 'hyperbole',
    tier: 1,
    source: 'Mary Shelley, Frankenstein (Chapter 5)',
  },
  // "looked like one coal" makes a comparison.
  {
    sentence:
      "Scrooge had a very small fire, but the clerk's fire was so very much smaller that it looked like one coal.",
    device: 'hyperbole',
    tier: 1,
    source: 'Charles Dickens, A Christmas Carol (Stave 1)',
    alsoFits: ['simile'],
  },
  // "iced his office" is a metaphor; "didn't ... degree", "dog-days" alliterate.
  {
    sentence:
      "He carried his own low temperature always about with him; he iced his office in the dog-days; and didn't thaw it one degree at Christmas.",
    device: 'hyperbole',
    tier: 1,
    source: 'Charles Dickens, A Christmas Carol (Stave 1)',
    alsoFits: ['metaphor', 'alliteration'],
  },
  // "roar" imitates its sound.
  {
    sentence: 'Sure, it was the roar\nOf a whole herd of lions.',
    device: 'hyperbole',
    tier: 1,
    source: 'William Shakespeare, The Tempest (Act 2 Scene 1, Antonio)',
    alsoFits: ['onomatopoeia'],
    facts: ['the word roar'],
  },
  {
    sentence: 'Now would I give a thousand furlongs of sea for an acre of barren ground.',
    device: 'hyperbole',
    tier: 2,
    source: 'William Shakespeare, The Tempest (Act 1 Scene 1, Gonzalo)',
    near: 'metaphor',
  },
  {
    sentence:
      'I had rather be married to a death’s-head with a bone in his mouth than to either of these.',
    device: 'hyperbole',
    tier: 2,
    source: 'William Shakespeare, The Merchant of Venice (Act 1 Scene 2, Portia)',
    near: 'metaphor',
    facts: ['Portia mocks her suitors'],
  },
  {
    sentence: 'Yours is the Earth and everything that’s in it',
    device: 'hyperbole',
    tier: 2,
    source: 'Rudyard Kipling, If',
    near: 'metaphor',
  },
  {
    sentence:
      'Nobody in the history of the world has ever felt as bored as I did in that assembly.',
    device: 'hyperbole',
    tier: 2,
    near: 'simile',
    facts: ['a like or as that compares nothing'],
  },
  {
    sentence: 'My little sister takes about three hours to put on one shoe.',
    device: 'hyperbole',
    tier: 2,
    near: 'metaphor',
  },
  {
    sentence:
      'I will fetch you a toothpicker now from the furthest inch of Asia; bring you the length of Prester John’s foot; fetch you a hair off the Great Cham’s beard',
    device: 'hyperbole',
    tier: 3,
    source: 'William Shakespeare, Much Ado About Nothing (Act 2 Scene 1, Benedick)',
    prompt: 'What do Benedick’s impossible errands suggest?',
    answer: 'He would go anywhere to avoid Beatrice',
    wrong: [
      'He is a famous explorer who has travelled across Asia',
      'He is trying to impress Beatrice with expensive gifts',
      'He is boasting about journeys he has already made',
    ],
    facts: ["Benedick's rant about Beatrice"],
  },
  {
    sentence:
      'He does smile his face into more lines than is in the new map with the augmentation of the Indies.',
    device: 'hyperbole',
    tier: 3,
    source: 'William Shakespeare, Twelfth Night (Act 3 Scene 2, Maria)',
    prompt: 'What does Maria’s comparison suggest about Malvolio’s smile?',
    answer: 'He is grinning so hard that his face is creased all over',
    wrong: [
      'He has drawn a careful map of the world on his face',
      'He is old, and his face is wrinkled from travel',
      'He is smiling politely, just enough to be friendly',
    ],
  },
  {
    sentence:
      'Sir, I love you more than word can wield the matter;\nDearer than eyesight, space, and liberty',
    device: 'hyperbole',
    tier: 3,
    source: 'William Shakespeare, King Lear (Act 1 Scene 1, Goneril)',
    prompt: 'What does Goneril’s speech to her father suggest?',
    answer: 'She flatters him to win land, without meaning it',
    wrong: [
      'She loves him more than anyone has ever loved a father',
      'She cannot find the words, because she is shy and quiet',
      'She would gladly lose her sight and freedom for him',
    ],
  },
  {
    sentence: 'His legs bestrid the ocean; his reared arm\nCrested the world',
    device: 'hyperbole',
    tier: 3,
    source: 'William Shakespeare, Antony and Cleopatra (Act 5 Scene 2, Cleopatra)',
    prompt: 'What does Cleopatra’s description suggest about how she sees Antony?',
    answer: 'To her he was a giant, greater than the whole world',
    wrong: [
      'He was a sailor who crossed every ocean on earth',
      'He was a tall, strong man who won wrestling contests',
      'He was a statue standing at the entrance to a harbour',
    ],
  },
  {
    sentence:
      'He trots the air; the earth sings when he touches it; the basest horn of his hoof is more musical than the pipe of Hermes.',
    device: 'hyperbole',
    tier: 3,
    source: 'William Shakespeare, Henry V (Act 3 Scene 7, the Dauphin)',
    prompt: 'What does the Dauphin’s praise of his horse suggest about him?',
    answer: 'He is vain, and more interested in show than war',
    wrong: [
      'He knows exactly how many horses the French army has',
      'He is a modest man who rarely talks about himself',
      'He is afraid of horses and is trying to sound brave',
    ],
  },
  {
    sentence: 'The others said of Squealer that he could turn black into white.',
    device: 'hyperbole',
    tier: 3,
    source: 'George Orwell, Animal Farm (Chapter 2)',
    prompt: 'What does the saying about Squealer suggest?',
    answer: 'He is so persuasive that he can make lies sound true',
    wrong: [
      'He is a skilled painter who can change any colour',
      'He is honest and always tells the animals the truth',
      'He is clever at sums and keeps the farm’s accounts',
    ],
  },
  {
    sentence:
      'I sometimes used to wonder whether it was possible she washed herself with a nutmeg-grater instead of soap.',
    device: 'hyperbole',
    tier: 3,
    source: 'Charles Dickens, Great Expectations (Chapter 2)',
    prompt: 'What does Pip’s joke suggest about his sister?',
    answer: 'She is so red and rough that her skin looks scraped raw',
    wrong: [
      'She is a careful cook who grates nutmeg into every meal',
      'She is very gentle and soft with her family',
      'She cannot afford soap, so the family is poor',
    ],
  },
  {
    sentence:
      'her eyes in heaven\nWould through the airy region stream so bright\nThat birds would sing and think it were not night.',
    device: 'hyperbole',
    tier: 3,
    source: 'William Shakespeare, Romeo and Juliet (Act 2 Scene 2, Romeo)',
    prompt: 'What does Romeo suggest about Juliet’s eyes?',
    answer: 'Their light could make the birds think it is day',
    wrong: [
      'They are dangerous, so the birds fly away in fear',
      'They are tired, because it is the middle of the night',
      'They reflect the stars, so she must be looking up',
    ],
  },
  {
    sentence: 'To what, my love, shall I compare thine eyne?\nCrystal is muddy.',
    device: 'hyperbole',
    tier: 3,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 3 Scene 2, Demetrius)",
    prompt: 'What does Demetrius mean by "Crystal is muddy"?',
    answer: 'Her eyes are so clear that even crystal looks dirty',
    wrong: [
      'He has dropped some crystal into a muddy puddle',
      'Helena’s eyes are cloudy and she needs help to see',
      'Crystal is clear enough to match her eyes',
    ],
  },

  // ── Oxymoron: real lines, and what a contradiction suggests ──
  // "love ... loving" repeats its opening l sound; Romeo speaks to love and
  // hate as if they could hear, and love brawls, which is personification.
  {
    sentence: 'Why, then, O brawling love! O loving hate!',
    device: 'oxymoron',
    tier: 1,
    source: 'William Shakespeare, Romeo and Juliet (Act 1 Scene 1, Romeo)',
    alsoFits: ['alliteration', 'personification'],
    facts: ["Romeo's speech on love and hate"],
  },
  // "strange snow" alliterates.
  {
    sentence: 'Merry and tragical? Tedious and brief?\nThat is hot ice and wondrous strange snow.',
    device: 'oxymoron',
    tier: 1,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 5 Scene 1, Theseus)",
    alsoFits: ['alliteration'],
  },
  // "most ... most" and "comedy ... cruel" repeat sounds; the title overstates.
  {
    sentence: 'The most lamentable comedy and most cruel death of Pyramus and Thisbe',
    device: 'oxymoron',
    tier: 1,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 1 Scene 2, Quince)",
    alsoFits: ['alliteration', 'hyperbole'],
  },
  // "foul and fair" alliterates; a stormy day could be said to set the mood.
  {
    sentence: 'So foul and fair a day I have not seen.',
    device: 'oxymoron',
    tier: 1,
    source: 'William Shakespeare, Macbeth (Act 1 Scene 3, Macbeth)',
    alsoFits: ['alliteration', 'pathetic-fallacy'],
  },
  // "my stars" stands for his fate, a metaphor; stars shining darkly over a sad man could be read as nature mirroring him.
  {
    sentence: 'my stars shine darkly over me',
    device: 'oxymoron',
    tier: 1,
    source: 'William Shakespeare, Twelfth Night (Act 2 Scene 1, Sebastian)',
    alsoFits: ['metaphor', 'pathetic-fallacy'],
  },
  {
    sentence:
      'though I cannot be said to be a flattering honest man, it must not be denied but I am a plain-dealing villain.',
    device: 'oxymoron',
    tier: 1,
    source: 'William Shakespeare, Much Ado About Nothing (Act 1 Scene 3, Don John)',
  },
  // "cruel kindness" repeats its opening k sound.
  {
    sentence: 'But that would be a cruel kindness, and I dare not do it.',
    device: 'oxymoron',
    tier: 1,
    source: 'Mary Shelley, Frankenstein (Chapter 7)',
    alsoFits: ['alliteration'],
  },
  // "hiss" imitates its sound.
  {
    sentence: 'Our cat greeted us with a friendly hiss.',
    device: 'oxymoron',
    tier: 1,
    alsoFits: ['onomatopoeia'],
    facts: ['the word hiss'],
  },
  // Calling a garden a wilderness is a metaphor.
  {
    sentence: 'Mum describes our garden as a controlled wilderness.',
    device: 'oxymoron',
    tier: 2,
    alsoFits: ['metaphor'],
    near: 'simile',
    facts: ['a like or as that compares nothing'],
  },
  {
    sentence: 'O heavy lightness! serious vanity!\nMisshapen chaos of well-seeming forms!',
    device: 'oxymoron',
    tier: 3,
    source: 'William Shakespeare, Romeo and Juliet (Act 1 Scene 1, Romeo)',
    prompt: 'What do Romeo’s oxymorons suggest about his feelings?',
    answer: 'Love has left him torn and confused',
    wrong: [
      'He is calm and thinking clearly about the feud',
      'He is happy because his love is returned at last',
      'He finds the fight in the street exciting and fun',
    ],
    facts: ["Romeo's speech on love and hate"],
  },
  {
    sentence: 'Parting is such sweet sorrow\nThat I shall say good night till it be morrow.',
    device: 'oxymoron',
    tier: 3,
    source: 'William Shakespeare, Romeo and Juliet (Act 2 Scene 2, Juliet)',
    prompt: 'What does "sweet sorrow" suggest about saying goodbye?',
    answer: 'The pain of leaving is mixed with the joy of love',
    wrong: [
      'She is glad that Romeo is leaving at last',
      'The night has been sad, so she will not miss him',
      'Goodbyes are easy when you know you will meet again',
    ],
  },
  {
    sentence:
      'Despised substance of divinest show!\nJust opposite to what thou justly seem’st,\nA damned saint, an honourable villain!',
    device: 'oxymoron',
    tier: 3,
    source: 'William Shakespeare, Romeo and Juliet (Act 3 Scene 2, Juliet)',
    prompt: 'Romeo has just killed Juliet’s cousin Tybalt. What do her oxymorons show?',
    answer: 'She still loves Romeo, though she is horrified by him',
    wrong: [
      'She hates Romeo now and wants him punished at once',
      'She thinks Romeo is a perfect, holy man in every way',
      'She does not care about Tybalt or what happened to him',
    ],
    facts: ['Juliet on Romeo after Tybalt dies'],
  },
  {
    sentence: 'I never heard\nSo musical a discord, such sweet thunder.',
    device: 'oxymoron',
    tier: 3,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 4 Scene 1, Hippolyta)",
    prompt: 'What does Hippolyta mean by "such sweet thunder"?',
    answer: 'The hounds’ baying was loud, yet beautiful to hear',
    wrong: [
      'A storm broke out, but it was over very quickly',
      'The music at the wedding was soft and gentle',
      'The hounds were silent, so the hunt was peaceful',
    ],
  },
  {
    sentence:
      'Have we, as ’twere with a defeated joy,\nWith one auspicious and one dropping eye,\nWith mirth in funeral, and with dirge in marriage',
    device: 'oxymoron',
    tier: 3,
    source: 'William Shakespeare, Hamlet (Act 1 Scene 2, Claudius)',
    prompt:
      'Claudius is explaining why he married his brother’s widow so soon. What do his oxymorons suggest?',
    answer: 'He wants to seem sad and happy at once, to excuse it',
    wrong: [
      'He is honestly grieving and has no wish to marry',
      'He thinks the funeral and the wedding were both mistakes',
      'He is confused and has forgotten which event came first',
    ],
  },
  {
    sentence: 'ALL ANIMALS ARE EQUAL\nBUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS',
    device: 'oxymoron',
    tier: 3,
    source: 'George Orwell, Animal Farm (Chapter 10)',
    prompt: 'What does the new commandment suggest about the pigs?',
    answer: 'They have twisted the idea of equality to keep power',
    wrong: [
      'They have made sure every animal is treated the same',
      'They are bad at spelling and have painted it wrongly',
      'They want the other animals to work less and rest more',
    ],
  },

  // ── Pun: real lines and new jokes that are not about jobs ──
  {
    sentence: 'Truly, sir, all that I live by is with the awl',
    device: 'pun',
    tier: 1,
    source: 'William Shakespeare, Julius Caesar (Act 1 Scene 1, the Cobbler)',
    facts: ["the Cobbler's jokes"],
  },
  // "best at a beast" repeats its opening b sound.
  {
    sentence: 'The very best at a beast, my lord, that e’er I saw.',
    device: 'pun',
    tier: 1,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 5 Scene 1, Demetrius)",
    alsoFits: ['alliteration'],
  },
  // "I", "eyes" and "Ay" open with the same vowel sound.
  {
    sentence: 'I am not I if there be such an I;\nOr those eyes shut that make thee answer Ay.',
    device: 'pun',
    tier: 1,
    source: 'William Shakespeare, Romeo and Juliet (Act 3 Scene 2, Juliet)',
    alsoFits: ['alliteration'],
  },
  // Cupid's arrow is a metaphor for love; "sore ... soar" repeats a sound.
  {
    sentence:
      'I am too sore enpierced with his shaft\nTo soar with his light feathers, and so bound,\nI cannot bound a pitch above dull woe.',
    device: 'pun',
    tier: 1,
    source: 'William Shakespeare, Romeo and Juliet (Act 1 Scene 4, Romeo)',
    alsoFits: ['metaphor', 'alliteration'],
  },
  {
    sentence: '“If he be Mr. Hyde,” he had thought, “I shall be Mr. Seek.”',
    device: 'pun',
    tier: 1,
    source: 'Robert Louis Stevenson, Jekyll and Hyde ("Search for Mr. Hyde")',
  },
  // "long ... love lost" repeats its opening l sound.
  {
    sentence: 'The two tennis players had a long rally, but there was no love lost between them.',
    device: 'pun',
    tier: 1,
    alsoFits: ['alliteration'],
  },
  {
    sentence:
      "Ella's model aeroplane never left the ground, but her idea for the science fair really took off.",
    device: 'pun',
    tier: 1,
  },
  {
    sentence: "The library's new reading corner was so popular that it was fully booked.",
    device: 'pun',
    tier: 1,
  },
  {
    sentence: 'I think it be thine indeed, for thou liest in’t.',
    device: 'pun',
    tier: 2,
    source: 'William Shakespeare, Hamlet (Act 5 Scene 1, Hamlet)',
    prompt:
      'The gravedigger is standing in the grave he is digging. What are the two meanings of "liest" here?',
    answer: 'Telling lies, and being inside the grave',
    wrong: [
      'Resting, and lying asleep inside the grave',
      'Telling the truth, and telling a long story',
      'Lying in wait, and lying low to hide',
    ],
  },
  {
    sentence:
      'This precious book of love, this unbound lover,\nTo beautify him, only lacks a cover',
    device: 'pun',
    tier: 2,
    source: 'William Shakespeare, Romeo and Juliet (Act 1 Scene 3, Lady Capulet)',
    prompt: 'Lady Capulet describes Paris as a fine book. What is the double meaning of "cover"?',
    answer: "A book's binding, and a wife to complete Paris",
    wrong: [
      'A book’s binding, and a blanket to keep Paris warm',
      'A disguise, and a place for Paris to hide',
      'A lid, and a roof over the house where Paris lives',
    ],
  },
  {
    sentence:
      'The Count is neither sad, nor sick, nor merry, nor well; but civil Count, civil as an orange, and something of that jealous complexion.',
    device: 'pun',
    tier: 2,
    source: 'William Shakespeare, Much Ado About Nothing (Act 2 Scene 1, Beatrice)',
    prompt: 'What is the pun in "civil as an orange"?',
    answer: 'Seville oranges are bitter, so the Count must be sour',
    wrong: [
      'Oranges are round, so the Count must be plump',
      'Oranges are sweet, so the Count must be kind',
      'Oranges are bright, so the Count must be cheerful',
    ],
  },
  {
    sentence:
      'You had musty victual, and he hath holp to eat it; he is a very valiant trencher-man; he hath an excellent stomach.',
    device: 'pun',
    tier: 2,
    source: 'William Shakespeare, Much Ado About Nothing (Act 1 Scene 1, Beatrice)',
    prompt: 'What does Beatrice mean by "he hath an excellent stomach"?',
    answer: 'A big appetite, when it should mean great courage',
    wrong: [
      'He never feels sick, even on a rough sea voyage',
      'He is an excellent cook who feeds the army',
      'He is very strong, with powerful muscles',
    ],
  },
  {
    sentence:
      'Nay, I beseech you, sir, be not out with me; yet, if you be out, sir, I can mend you.',
    device: 'pun',
    tier: 2,
    source: 'William Shakespeare, Julius Caesar (Act 1 Scene 1, the Cobbler)',
    prompt: 'What is the Cobbler’s joke?',
    answer: "'Out' means angry, and worn through, like old shoes",
    wrong: [
      'He is offering to fix the official’s broken arm',
      'He wants the official to walk out and leave him alone',
      'He is admitting that his own shoes are worn out',
    ],
    facts: ["the Cobbler's jokes"],
  },
  {
    sentence: 'thou hadst little wit in thy bald crown when thou gav’st thy golden one away.',
    device: 'pun',
    tier: 2,
    source: 'William Shakespeare, King Lear (Act 1 Scene 4, the Fool)',
    prompt: 'What is the Fool’s pun on "crown"?',
    answer: 'Lear’s head lacked sense when he gave his crown away',
    wrong: [
      'Lear’s crown was made of gold and was very heavy',
      'Lear has lost his hair because he is getting old',
      'Lear won the crown in a contest of wits long ago',
    ],
  },
  {
    sentence: 'They often "came down" handsomely, and Scrooge never did.',
    device: 'pun',
    tier: 2,
    source: 'Charles Dickens, A Christmas Carol (Stave 1)',
    prompt:
      'Dickens has been comparing Scrooge with rain and snow. What is the pun in "came down"?',
    answer: 'Rain falls freely; Scrooge never pays out',
    wrong: [
      'Scrooge never came down the stairs to his office',
      'The weather was mild, so no snow fell that winter',
      'Scrooge never fell over, however icy the ground',
    ],
  },
  {
    sentence: "There's more of gravy than of grave about you, whatever you are!",
    device: 'pun',
    tier: 3,
    source: 'Charles Dickens, A Christmas Carol (Stave 1)',
    prompt: 'Why does Scrooge joke that there is "more of gravy than of grave" about the ghost?',
    answer: 'He blames indigestion, to fight his fear',
    wrong: [
      'He is hungry and wants his supper before he talks',
      'He is sure the ghost has come to take him to his grave',
      'He thinks the ghost is a cook who has spilt his gravy',
    ],
  },
  {
    sentence: 'the near in blood,\nThe nearer bloody.',
    device: 'pun',
    tier: 3,
    source: 'William Shakespeare, Macbeth (Act 2 Scene 3, Donalbain)',
    prompt: 'What does Donalbain’s play on "blood" suggest?',
    answer: 'Their closest relatives are the most likely to kill them',
    wrong: [
      'They are covered in blood after finding their father',
      'Their family is the strongest and healthiest in Scotland',
      'The murderer must be a stranger with no link to them',
    ],
    facts: ['Donalbain after the murder'],
  },
  {
    sentence: 'This is to make an ass of me, to fright me, if they could.',
    device: 'pun',
    tier: 3,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 3 Scene 1, Bottom)",
    prompt:
      'Bottom has been given a donkey’s head, though he does not know it. Why is his line funny?',
    answer: 'He fears being made an ass of, and he already is one',
    wrong: [
      'He knows about his new head and is joking about it',
      'He has been turned into a real donkey and can only bray',
      'His friends are playing a trick by dressing as donkeys',
    ],
  },
  {
    sentence:
      'O world, thou wast the forest to this hart;\nAnd this indeed, O world, the heart of thee.',
    device: 'pun',
    tier: 3,
    source: 'William Shakespeare, Julius Caesar (Act 3 Scene 1, Antony)',
    prompt: 'What does Antony’s pun on "hart" and "heart" suggest about Caesar?',
    answer: 'He was noble prey hunted down, and the world’s heart',
    wrong: [
      'He was a coward who ran from danger like a deer',
      'He loved to hunt deer in the forests around Rome',
      'He was cold-hearted and cared for nobody but himself',
    ],
  },
  {
    sentence:
      'When we have match’d our rackets to these balls,\nWe will, in France, by God’s grace, play a set\nShall strike his father’s crown into the hazard.',
    device: 'pun',
    tier: 3,
    source: 'William Shakespeare, Henry V (Act 1 Scene 2, Henry)',
    prompt:
      'The Dauphin has sent Henry a gift of tennis balls as an insult. What do Henry’s tennis puns warn?',
    answer: 'He will answer the insult with a real war against France',
    wrong: [
      'He will challenge the Dauphin to a game of tennis',
      'He is grateful for the gift and will practise his tennis',
      'He is too young to rule and prefers to play games',
    ],
  },

  // ── More near neighbours, from real lines (tier 2) ──
  // Caesar overstates his own constancy.
  {
    sentence: 'But I am constant as the northern star',
    device: 'simile',
    tier: 2,
    source: 'William Shakespeare, Julius Caesar (Act 3 Scene 1, Caesar)',
    alsoFits: ['hyperbole'],
    near: 'metaphor',
    facts: ['a simile made without like'],
  },
  // "disinherited ... disinclined to dig" repeats d.
  {
    sentence:
      'The disinherited son of a small squire, equally disinclined to dig and to beg, was almost as helpless as an uprooted tree',
    device: 'simile',
    tier: 2,
    source: 'George Eliot, Silas Marner (Chapter 3)',
    alsoFits: ['alliteration'],
    near: 'metaphor',
    facts: ['a simile made without like'],
  },
  // "dozen ... digging", "felt ... foundations" repeat sounds.
  {
    sentence:
      'I felt as a rabbit might feel returning to his burrow and suddenly confronted by the work of a dozen busy navvies digging the foundations of a house.',
    device: 'simile',
    tier: 2,
    source: 'H. G. Wells, The War of the Worlds (Book 2, Chapter 6)',
    alsoFits: ['alliteration'],
    near: 'metaphor',
    facts: ['a simile made without like'],
  },
  // Being startled by a falling leaf overstates his nerves.
  {
    sentence:
      'the fall of a leaf startled me, and I shunned my fellow-creatures as if I had been guilty of a crime.',
    device: 'simile',
    tier: 2,
    source: 'Mary Shelley, Frankenstein (Chapter 4)',
    alsoFits: ['hyperbole'],
    near: 'metaphor',
    facts: ['a simile made without like'],
  },
  // Empty, lamplit streets at night could be said to set an eerie mood.
  {
    sentence:
      'street after street, all lighted up as if for a procession and all as empty as a church',
    device: 'simile',
    tier: 2,
    source: 'Robert Louis Stevenson, Jekyll and Hyde ("Story of the Door")',
    alsoFits: ['pathetic-fallacy'],
    near: 'metaphor',
    facts: ['a simile made without like'],
  },
  // "fair flower" alliterates; fading "that very hour" overstates.
  {
    sentence:
      'For women are as roses, whose fair flower\nBeing once display’d, doth fall that very hour.',
    device: 'simile',
    tier: 2,
    source: 'William Shakespeare, Twelfth Night (Act 2 Scene 4, Orsino)',
    alsoFits: ['alliteration', 'hyperbole'],
    near: 'metaphor',
    facts: ['a simile made without like'],
  },
  {
    sentence: 'As I perchance hereafter shall think meet\nTo put an antic disposition on',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, Hamlet (Act 1 Scene 5, Hamlet)',
    near: 'simile',
    facts: ['a like or as that compares nothing'],
  },
  {
    sentence:
      'There was witchcraft in little Pearl’s eyes; and her face, as she glanced upward at the minister, wore that naughty smile which made its expression frequently so elvish.',
    device: 'metaphor',
    tier: 2,
    source: 'Nathaniel Hawthorne, The Scarlet Letter (Chapter 12)',
    near: 'simile',
    facts: ['a like or as that compares nothing'],
  },
  // The earth "lurches" like a staggering person; nightfall brightening a party could be said to set its mood.
  {
    sentence:
      'The lights grow brighter as the earth lurches away from the sun, and now the orchestra is playing yellow cocktail music, and the opera of voices pitches a key higher.',
    device: 'metaphor',
    tier: 2,
    source: 'F. Scott Fitzgerald, The Great Gatsby (Chapter 3)',
    alsoFits: ['personification', 'pathetic-fallacy'],
    near: 'simile',
    facts: ['a like or as that compares nothing'],
  },
  {
    sentence: 'Was ever book containing such vile matter\nSo fairly bound?',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, Romeo and Juliet (Act 3 Scene 2, Juliet)',
    near: 'personification',
    facts: ['Juliet on Romeo after Tybalt dies'],
  },
  {
    sentence: 'How low am I, thou painted maypole?',
    device: 'metaphor',
    tier: 2,
    source: "William Shakespeare, A Midsummer Night's Dream (Act 3 Scene 2, Hermia)",
    near: 'personification',
  },
  {
    sentence: 'The boy was the very staff of my age, my very prop.',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, The Merchant of Venice (Act 2 Scene 2, Gobbo)',
    near: 'personification',
  },
  // "enfranchised with a clog" (set free, with a weight tied on) joins
  // contradictory words, so a careful reader could call it an oxymoron.
  {
    sentence:
      'I am trusted with a muzzle and enfranchised with a clog; therefore I have decreed not to sing in my cage.',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, Much Ado About Nothing (Act 1 Scene 3, Don John)',
    alsoFits: ['oxymoron'],
    near: 'personification',
  },
  // "I will do anything" overstates.
  {
    sentence: 'I will do anything, Nerissa, ere I will be married to a sponge.',
    device: 'metaphor',
    tier: 2,
    source: 'William Shakespeare, The Merchant of Venice (Act 1 Scene 2, Portia)',
    alsoFits: ['hyperbole'],
    near: 'personification',
    facts: ['Portia mocks her suitors'],
  },
  {
    sentence: 'The storm burst upon us six years ago now.',
    device: 'metaphor',
    tier: 2,
    source: 'H. G. Wells, The War of the Worlds (Book 1, Chapter 1)',
    near: 'pathetic-fallacy',
  },
  // Rain on an emotional day could be said to set the mood.
  {
    sentence: 'The exhilarating ripple of her voice was a wild tonic in the rain.',
    device: 'metaphor',
    tier: 2,
    source: 'F. Scott Fitzgerald, The Great Gatsby (Chapter 5)',
    alsoFits: ['pathetic-fallacy'],
    near: 'hyperbole',
  },
  // "hollow hell" alliterates.
  {
    sentence: 'Arise, black vengeance, from thy hollow hell!',
    device: 'personification',
    tier: 2,
    source: 'William Shakespeare, Othello (Act 3 Scene 3, Othello)',
    alsoFits: ['alliteration'],
    near: 'pathetic-fallacy',
  },
  // "like discharges of cannon" is a simile; "rushing up the river" alliterates and "rushing" can be heard as a sound word.
  {
    sentence:
      'We lived at the top of the last house, and the wind rushing up the river shook the house that night, like discharges of cannon, or breakings of a sea.',
    device: 'pathetic-fallacy',
    tier: 2,
    source: 'Charles Dickens, Great Expectations (Chapter 39)',
    alsoFits: ['simile', 'alliteration', 'onomatopoeia'],
    near: 'personification',
  },
  // Lightning as "fire" dropping from the sky is a metaphor.
  {
    sentence: 'But never till tonight, never till now,\nDid I go through a tempest dropping fire.',
    device: 'pathetic-fallacy',
    tier: 2,
    source: 'William Shakespeare, Julius Caesar (Act 1 Scene 3, Casca)',
    alsoFits: ['metaphor'],
    near: 'personification',
  },
  // Fog "pouring" like liquid, and houses as "phantoms", are metaphors.
  {
    sentence:
      'The fog came pouring in at every chink and keyhole, and was so dense without, that although the court was of the narrowest, the houses opposite were mere phantoms.',
    device: 'pathetic-fallacy',
    tier: 2,
    source: 'Charles Dickens, A Christmas Carol (Stave 1)',
    alsoFits: ['metaphor'],
    near: 'personification',
    facts: ['the fog of Stave One'],
  },
  // "Strand ... splotches ... slimy" repeat s; "splotches" of light is a metaphor.
  {
    sentence:
      'Down the Strand the lamps were but misty splotches of diffused light which threw a feeble circular glimmer upon the slimy pavement.',
    device: 'pathetic-fallacy',
    tier: 2,
    source: 'Arthur Conan Doyle, The Sign of Four (Chapter 3)',
    alsoFits: ['alliteration', 'metaphor'],
    near: 'personification',
    facts: ["Watson's dreary evening"],
  },
  {
    sentence: 'Stiffen the sinews, summon up the blood',
    device: 'alliteration',
    tier: 2,
    source: 'William Shakespeare, Henry V (Act 3 Scene 1, Henry)',
    near: 'onomatopoeia',
    facts: ['Once more unto the breach'],
  },
  // Daylight "dropping" like a falling thing is a metaphor for sunset.
  {
    sentence: 'The dropping of the daylight in the West',
    device: 'alliteration',
    tier: 2,
    source: 'Robert Browning, My Last Duchess',
    alsoFits: ['metaphor'],
    near: 'onomatopoeia',
  },
  {
    sentence: 'Voices of play and pleasures after day',
    device: 'alliteration',
    tier: 2,
    source: 'Wilfred Owen, Disabled',
    near: 'onomatopoeia',
    facts: ['Disabled: voices of play'],
  },
  // "hearts of controversy", fighting spirit, is a metaphor.
  {
    sentence:
      'The torrent roar’d, and we did buffet it\nWith lusty sinews, throwing it aside\nAnd stemming it with hearts of controversy.',
    device: 'onomatopoeia',
    tier: 2,
    source: 'William Shakespeare, Julius Caesar (Act 1 Scene 2, Cassius)',
    alsoFits: ['metaphor'],
    near: 'alliteration',
    facts: ['the word roar'],
  },
  // The "visiting moon" is given a human visit.
  {
    sentence: 'The odds is gone,\nAnd there is nothing left remarkable\nBeneath the visiting moon.',
    device: 'hyperbole',
    tier: 2,
    source: 'William Shakespeare, Antony and Cleopatra (Act 4 Scene 15, Cleopatra)',
    alsoFits: ['personification'],
    near: 'metaphor',
  },
  {
    sentence:
      'I’ll be your foil, Laertes; in mine ignorance\nYour skill shall like a star i’ th’ darkest night,\nStick fiery off indeed.',
    device: 'pun',
    tier: 2,
    source: 'William Shakespeare, Hamlet (Act 5 Scene 2, Hamlet)',
    prompt: 'Before their fencing match, what two meanings does "foil" have?',
    answer: 'A fencing sword, and something that makes another shine',
    wrong: [
      'A fencing sword, and a way to spoil an enemy’s plan',
      'A shield for blocking blows, and a wrapping for food',
      'A dull jewel, and a dark night with no stars',
    ],
  },
  {
    sentence: 'He’s a soldier; and for one to say a soldier lies is stabbing.',
    device: 'pun',
    tier: 2,
    source: 'William Shakespeare, Othello (Act 3 Scene 4, the Clown)',
    prompt:
      'Desdemona has asked where Cassio "lies", meaning where he lodges. What is the Clown’s joke?',
    answer: "'Lies' also means tells lies, an insult to a soldier",
    wrong: [
      'Cassio is lying ill in bed after being stabbed',
      'Soldiers never tell anyone at all where they are living',
      'The Clown is too frightened of Cassio to answer',
    ],
  },

  // ── More effects, from real lines (tier 3) ──
  {
    sentence:
      'Trifles light as air\nAre to the jealous confirmations strong\nAs proofs of holy writ.',
    device: 'simile',
    tier: 3,
    source: 'William Shakespeare, Othello (Act 3 Scene 3, Iago)',
    prompt: 'What does Iago suggest about jealous people?',
    answer: 'The smallest things seem like solid proof to them',
    wrong: [
      'They only believe what they read in the Bible',
      'They forget small worries as quickly as air',
      'They need a great deal of evidence before they act',
    ],
  },
  {
    sentence: 'His reasons are as two grains of wheat hid in two bushels of chaff',
    device: 'simile',
    tier: 3,
    source: 'William Shakespeare, The Merchant of Venice (Act 1 Scene 1, Bassanio)',
    prompt: 'What does Bassanio suggest about Gratiano’s talk?',
    answer: 'There is little sense in all his chatter',
    wrong: [
      'He talks about farming and the price of wheat',
      'He saves his best ideas and shares them with friends',
      'He speaks very little, so every word is precious',
    ],
  },
  {
    sentence:
      'It seemed as if an invisible bond had burst, and that I had struggled out into unhoped-for liberty.',
    device: 'simile',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre (Chapter 4)',
    prompt:
      'Jane has just told her cruel aunt exactly what she thinks of her. What does the simile suggest?',
    answer: 'She feels suddenly free after years of being held down',
    wrong: [
      'She is tied up with rope and struggling to escape from her room',
      'She is sure that her aunt will love her now',
      'She is too frightened of her aunt to say any more',
    ],
  },
  {
    sentence:
      'The fountains of human love and of faith in a divine love had not yet been unlocked, and his soul was still the shrunken rivulet',
    device: 'metaphor',
    tier: 3,
    source: 'George Eliot, Silas Marner (Chapter 10)',
    prompt: 'What does "the shrunken rivulet" suggest about Silas?',
    answer: 'His feelings have dried to a blocked trickle',
    wrong: [
      'He lives beside a small stream that is drying out',
      'He is thin and weak because he does not eat enough',
      'His love for his neighbours is growing day by day',
    ],
    facts: ['Silas alone at Christmas'],
  },
  {
    sentence:
      'Heaven knows we need never be ashamed of our tears, for they are rain upon the blinding dust of earth, overlying our hard hearts.',
    device: 'metaphor',
    tier: 3,
    source: 'Charles Dickens, Great Expectations (Chapter 19)',
    prompt: 'What does Pip suggest about tears?',
    answer: 'Crying clears what blinds us and softens hard hearts',
    wrong: [
      'Tears are a sign of weakness that should be hidden',
      'Rain on the road has made his journey dusty and hard',
      'People cry only when the weather is bad',
    ],
    facts: ['Pip leaves home'],
  },
  {
    sentence:
      'To see the dingy cloud come drooping down, obscuring everything, one might have thought that Nature lived hard by, and was brewing on a large scale.',
    device: 'personification',
    tier: 3,
    source: 'Charles Dickens, A Christmas Carol (Stave 1)',
    prompt: 'What does Dickens suggest by picturing Nature "brewing on a large scale"?',
    answer: 'The fog is as thick as steam from a brewery',
    wrong: [
      'Nature is making tea and coffee for the clerks',
      'The weather is warm and pleasant, like a kitchen',
      'Scrooge is secretly running a brewery next door',
    ],
    facts: ['the fog of Stave One'],
  },
  {
    sentence: 'the sky was just a row of long angry red lines and dense black lines intermixed',
    device: 'pathetic-fallacy',
    tier: 3,
    source: 'Charles Dickens, Great Expectations (Chapter 1)',
    prompt:
      'Pip has just been terrified by a convict on the marshes. What does the "angry" sky suggest?',
    answer: 'The world seems as frightening as his ordeal',
    wrong: [
      'A summer sunset is making the marshes beautiful',
      'The convict is angry with the weather on the marshes',
      'The sky will clear soon, and he will feel calmer',
    ],
  },
  {
    sentence:
      'he looked out on the black frost that seemed to press cruelly on every blade of grass, while the half-icy red pool shivered under the bitter wind',
    device: 'pathetic-fallacy',
    tier: 3,
    source: 'George Eliot, Silas Marner (Chapter 10)',
    prompt:
      'Silas has been robbed of the gold he lived for. What does the weather on Christmas morning suggest?',
    answer: 'His loss feels as harsh and crushing as the frost',
    wrong: [
      'Winter has come early, and he must find more firewood',
      'He is looking forward to Christmas with his neighbours',
      'The frost is beautiful, and it cheers him up',
    ],
    facts: ['Silas alone at Christmas'],
  },
  {
    sentence:
      'Presently I heard Pilot bark far below, out of his distant kennel in the courtyard: hope revived.',
    device: 'onomatopoeia',
    tier: 3,
    source: 'Charlotte Brontë, Jane Eyre (Chapter 20)',
    prompt:
      'Jane has spent a frightening night alone, caring for a wounded man. Why does the bark revive her hope?',
    answer: 'It shows the normal world is waking, so help will come',
    wrong: [
      'It warns her that a dangerous dog is coming to attack',
      'It means Pilot has found the person who hurt the man',
      'It tells her the wounded man has died in the night',
    ],
    facts: ['the word bark'],
  },
  {
    sentence:
      'Thrift, thrift, Horatio! The funeral bak’d meats\nDid coldly furnish forth the marriage tables.',
    device: 'hyperbole',
    tier: 3,
    source: 'William Shakespeare, Hamlet (Act 1 Scene 2, Hamlet)',
    prompt: 'What does Hamlet’s bitter joke suggest about his mother’s wedding?',
    answer: 'It followed the funeral so fast that food was reused',
    wrong: [
      'His family is so poor that they cannot afford a feast',
      'The wedding food was cold because the cooks were late',
      'Hamlet enjoyed the wedding more than the funeral',
    ],
  },
]

export const ALL_DEVICES: Device[] = [
  'simile',
  'metaphor',
  'personification',
  'pathetic-fallacy',
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
  answer: (q) => q.answer ?? DEVICE_LABELS[q.device],
  // A question with its own prompt has fixed options. The others draw their
  // wrong devices on the page, so they have none here
  // (src/lib/games/explanations/types.ts).
  options: (q) => (q.wrong ? [q.answer ?? DEVICE_LABELS[q.device], ...q.wrong] : null),
  tag: (q) => q.device,
  tier: (q) => q.tier,
  facts: (q) => q.facts ?? [],
  // Rebuilt for depth on 24 October 2026: held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
