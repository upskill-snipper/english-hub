import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Speed Analysis: name the literary device in each extract.
 *
 * Moved out of src/app/games/speed-analysis/page.tsx on 13 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * game asks for THE device, and marks one option right. In 22 of the 30
 * questions another option was plainly also in the extract, and in 4 more it
 * was arguable, so a student who saw it was marked wrong for reading closely:
 *
 *   - "Tyger Tyger, burning bright" offered Alliteration and Repetition beside
 *     Metaphor, and both are there ("burning bright", "Tyger Tyger");
 *   - "Out, out, brief candle" offered Imperative and Apostrophe beside
 *     Metaphor, and it is both an order and an address to the candle;
 *   - the Ozymandias inscription offered Imperative ("Look") and Juxtaposition
 *     beside Irony; Porphyria's Lover offered Personification ("The sullen wind
 *     was soon awake") beside Pathetic fallacy; Prufrock's etherised evening
 *     offered Enjambment, which the extract shows, beside Simile;
 *   - and so on: "buzz of bees" offered Alliteration beside Onomatopoeia,
 *     "Peter Piper" Consonance beside Alliteration, Keats's "mists and mellow"
 *     Alliteration beside Personification.
 *
 * Two answers were wrong outright. Whitman's "I celebrate myself, and sing
 * myself" was marked Anaphora, which is repetition at the START of clauses;
 * the line repeats at the end ("myself ... myself", "assume ... assume"), so
 * the answer is Repetition. Eliot's "yellow smoke that rubs its muzzle on the
 * window-panes" was marked Personification, but a muzzle is an animal's: the
 * smoke is a cat, a metaphor, not a person.
 *
 * Every question now offers its device and three that the extract does not
 * contain, so exactly one answer is right; 28 of the 30 had at least one
 * option replaced. The extracts, their sources and the devices asked about are
 * unchanged except for those two answers.
 *
 * TWO EXTRACTS SHORTENED (16 October 2026). Eliot died in 1965, so Prufrock
 * is in UK copyright until the end of 2035, and the site quotes a text in
 * copyright to at most FAIR_DEALING.quoteWords words and
 * FAIR_DEALING.poemQuoteLines lines of a poem
 * (src/lib/study-guides/fair-dealing.ts). The etherised evening was 23 words
 * over three lines, and the ragged claws 16 words. Both were cut by deletion
 * only, marked with an ellipsis, keeping the comparison each question asks
 * about: the evening still lies "Like a patient etherised upon a table", and
 * the speaker still should have been "a pair of ragged claws".
 * src/__tests__/no-game-quotes-over-the-fair-dealing-limit.test.ts holds them.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy"; the audit (.tmp-games-audit/REPORT-gcse.md) found 30
 * extracts, a student who had met 29 of them by round 3, only names asked for,
 * and Simile offered in 29 of 30 questions. The bank now holds 325 questions
 * on 28 devices, eight to twenty-one each, so a round can keep to two of one
 * device, in three tiers (BANK.tier):
 *
 *   1  name a device that is plain to see;
 *   2  name it in a set-text line whose context must be known (a soliloquy
 *      or an aside, dramatic irony in "This castle hath a pleasant seat"), or
 *      tell it from its near neighbour: simile and metaphor ("As the sun
 *      rose" uses 'as' for time), oxymoron and paradox, personification and
 *      pathetic fallacy, alliteration and sibilance, repetition and anaphora;
 *   3  what one word or device does, asked in the question's own `prompt`
 *      ("What does 'scorpions' suggest about Macbeth's mind?"), or which of
 *      two devices in a line does a named job.
 *
 * Every option is a near miss that the extract does not contain, checked
 * against the extract, so exactly one answer can be defended. Most extracts are
 * real lines from texts out of UK copyright ("Real text first", the founder,
 * 24 October 2026), each checked word for word against src/data/full-texts,
 * the anthology poem pages under src/app/revision/poetry and src/app/igcse, or
 * a study guide's keyQuotes; the War Photographer lines are in copyright and
 * within the fair-dealing limit. Lines of the site's own remain where no real
 * line does the job: the near-neighbour traps, assonance (verse rarely shows
 * it without rhyme or alliteration) and the persuasive prose of Language
 * Paper 2. Two lines from one text are never dealt together (BANK.facts).
 *
 * The questions of 13 October 2026, kept: all 29 have tiers and near-miss
 * options, so Simile is no longer offered beside every device, and "no 'like'
 * or 'as', so it is a metaphor" is taught only where Simile is offered. Fixed:
 * "Is this a dagger" was marked a rhetorical question because "nobody
 * answers", but Macbeth answers it himself ("There's no such thing"); it is
 * now asked as the soliloquy it is. The Ozymandias inscription read "my Works";
 * all three boards' anthologies print "my works". Removed: Burns's "A Red, Red
 * Rose", whose anglicised wording matches no printing the site holds, and
 * which is a song.
 *
 * CHECKED (24 October 2026) by a second reader, as the founder decided. Every
 * real line was found again in the printing the site holds, with its speaker,
 * scene or stanza; every option was argued as right. What was wrong, and what
 * changed:
 *
 *   - Eleven of the questions kept from 13 October quoted a line that no
 *     edition the site holds prints (A Tale of Two Cities, My Heart Leaps Up,
 *     The Little Black Boy, Song of Myself, The Garden, Donne's Devotions), or
 *     a work in UK copyright with no study guide to quote from (Prufrock three
 *     times, Sandburg's Fog, Frost). Each is now a held line testing the same
 *     device: Brutus's "Not that I loved Caesar less", Viola's "wise enough to
 *     play the fool", Exposure's "dull rumour of some other war", Enfield's
 *     "hellish to see", "Macbeth shall sleep no more", Romeo's "smoke made
 *     with the fume of sighs", Gloucester's "I stumbled when I saw", "Words,
 *     words, words", Macbeth's "yellow leaf", Brutus's "tide in the affairs of
 *     men" and "Denmark's a prison".
 *   - The Tyger read "Tyger Tyger"; the anthology prints "Tyger, Tyger", as
 *     the poem's page has since 26 September. Now the anthology's.
 *   - Porphyria, Dulce, Daffodils and To Autumn ended on a full stop the poem
 *     does not print, where it has a comma or a semicolon. Dropped.
 *   - To Autumn's "the last oozings, hours by hours" had lost its comma.
 *   - "I hike by the wide river at nine" offered Internal rhyme, and "I" and
 *     "by" rhyme. Now Onomatopoeia.
 *   - "Cannon to right of them" offered Rule of three, which the stanza's
 *     third "Cannon" line (another question here) completes. Now
 *     Personification.
 *   - "Tired, hungry and soaked to the skin" offered Hyperbole, and "endless
 *     mud" exaggerates the very misery asked about. Now Personification.
 *   - "Get thee to a nunnery" offered Euphemism, and "nunnery" was also slang
 *     for a brothel. Now Oxymoron.
 *   - Henry's charge offered Rule of three, and his battle cry ("Harry,
 *     England and Saint George") is one that also drives the men on. Now
 *     Simile, and tier 2, since one device is left to find.
 *   - Shylock's "wilderness of monkeys" offered Metaphor, which the figurative
 *     "wilderness" can support. Now Simile.
 *   - Old Major's "Remove Man from the scene" offered Euphemism, and
 *     "remove" is a mild word for driving people out. Now Simile.
 *   - Four prompts named the rule that decides them: "seem almost human" and
 *     "seem a person" (Personification), "exaggerates" twice (Hyperbole). Now
 *     the job each does: the eagle's claws turned into hands, the season given
 *     a body, the wait made endless, the flowers made countless.
 *   - The Westminster Bridge prompt said "theatres" shares the first sound of
 *     "towers" and "temples"; it begins with "th". Now towers and temples.
 *   - The owl prompt asked which device lets the audience hear "the night",
 *     which the bellman's death-bell could also claim. Now "the owl".
 *   - Six effect answers were the longest option by eight characters or more
 *     (the sleeping fog, the firm-set earth, the Moor's free nature, "Stars,
 *     hide your fires", the blind forehead, the strangled lamp), and To
 *     Autumn's was the most detailed. Shortened, or a wrong option lengthened.
 *
 * SPEED_SOURCES in src/__tests__/no-game-quotes-over-the-fair-dealing-limit.test.ts
 * still places the sources no longer used (Prufrock, Fog, the Frost line,
 * Burns and the other six above); an unused entry holds nothing.
 */

export interface AnalysisQuestion {
  extract: string
  source: string
  /** The right option as the student sees it: the device, or in an effect question the effect. */
  correctDevice: string
  options: string[]
  /**
   * 1: name a device that is plain to see. 2: name it where the set text's
   * context must be known, or tell it from its near neighbour. 3: what one
   * word or device does (an effect question), or which of two devices in a
   * line does the work.
   */
  tier: 1 | 2 | 3
  /** The device an effect question is about, where the answer is not itself a device. */
  device?: string
  /** Asked in place of the page's usual question, where a question needs its own. */
  prompt?: string
}

/**
 * The sources that are the site's own lines. Two lines from one real text are
 * never dealt in one round (BANK.facts); the site's own lines share nothing,
 * so any number of them may.
 */
export const SITE_SOURCES: ReadonlySet<string> = new Set([
  'Example prose',
  'Example dialogue',
  'Example speech',
])

export const QUESTIONS: AnalysisQuestion[] = [
  // The questions of 13 October 2026, kept and given tiers
  {
    extract: '"The sea was a boiling cauldron of fury."',
    source: 'Example prose',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Oxymoron', 'Paradox'],
    tier: 1,
  },
  {
    extract: '"Her smile was like the sun breaking through clouds."',
    source: 'Example prose',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Personification', 'Oxymoron'],
    tier: 1,
  },
  {
    extract: '"The wind howled and the trees groaned under its weight."',
    source: 'Example prose',
    correctDevice: 'Personification',
    options: ['Personification', 'Hyperbole', 'Oxymoron', 'Paradox'],
    tier: 1,
  },
  {
    extract: '"Peter Piper picked a peck of pickled peppers."',
    source: 'Traditional tongue-twister',
    correctDevice: 'Alliteration',
    options: ['Alliteration', 'Sibilance', 'Onomatopoeia', 'Internal rhyme'],
    tier: 1,
  },
  {
    extract: '"The rain set early in to-night,\nThe sullen wind was soon awake"',
    source: "Porphyria's Lover - Browning",
    correctDevice: 'Pathetic fallacy',
    options: ['Pathetic fallacy', 'Simile', 'Hyperbole', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"I have told you a million times to clean your room!"',
    source: 'Example dialogue',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Irony', 'Euphemism', 'Metaphor'],
    tier: 1,
  },
  {
    extract: '"The soft, silky sound of the stream slipped through the stones."',
    source: 'Example prose',
    correctDevice: 'Sibilance',
    options: ['Sibilance', 'Plosives', 'Internal rhyme', 'Oxymoron'],
    tier: 1,
  },
  {
    extract: '"The buzz of bees and the hiss of the kettle filled the kitchen."',
    source: 'Example prose',
    correctDevice: 'Onomatopoeia',
    options: ['Onomatopoeia', 'Personification', 'Hyperbole', 'Metaphor'],
    tier: 1,
  },
  {
    extract: '"Is this a dagger which I see before me,\nThe handle toward my hand?"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Soliloquy',
    options: ['Soliloquy', 'Aside', 'Apostrophe', 'Prologue'],
    tier: 2,
  },
  {
    extract:
      '"Bent double, like old beggars under sacks,\nKnock-kneed, coughing like hags, we cursed through sludge"',
    source: 'Dulce et Decorum Est - Owen',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Look on my works, ye Mighty, and despair!\nNothing beside remains."',
    source: 'Ozymandias - Shelley',
    correctDevice: 'Irony',
    options: ['Irony', 'Paradox', 'Oxymoron', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"I wandered lonely as a cloud\nThat floats on high o\'er vales and hills"',
    source: 'Daffodils - Wordsworth',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Hyperbole', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"Out, out, brief candle!"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Hyperbole', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"Not that I loved Caesar less, but that I loved Rome more."',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Oxymoron', 'Personification', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"This fellow is wise enough to play the fool"',
    source: 'Twelfth Night - Shakespeare',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Oxymoron', 'Hyperbole', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"A deafening silence filled the room after the verdict."',
    source: 'Example prose',
    correctDevice: 'Oxymoron',
    options: ['Oxymoron', 'Paradox', 'Irony', 'Personification'],
    tier: 1,
  },
  {
    extract: '"The stars danced playfully in the moonlit sky."',
    source: 'Example prose',
    correctDevice: 'Personification',
    options: ['Personification', 'Simile', 'Hyperbole', 'Onomatopoeia'],
    tier: 1,
  },
  {
    extract: '"Far off, like a dull rumour of some other war."',
    source: 'Exposure - Owen',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Oxymoron', 'Hyperbole'],
    tier: 1,
  },
  {
    extract: '"It sounds nothing to hear, but it was hellish to see."',
    source: 'Jekyll and Hyde - Stevenson',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Oxymoron', 'Simile', 'Personification'],
    tier: 2,
  },
  {
    extract:
      "\"'Glamis hath murder'd sleep, and therefore Cawdor\nShall sleep no more. Macbeth shall sleep no more!'\"",
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Anaphora', 'Oxymoron', 'Simile'],
    tier: 2,
  },
  {
    extract: '"Love is a smoke made with the fume of sighs"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Hyperbole', 'Oxymoron', 'Euphemism'],
    tier: 1,
  },
  {
    extract: '"Season of mists and mellow fruitfulness,\nClose bosom-friend of the maturing sun"',
    source: 'To Autumn - Keats',
    correctDevice: 'Personification',
    options: ['Personification', 'Simile', 'Hyperbole', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"Half a league, half a league,\nHalf a league onward,"',
    source: 'Charge of the Light Brigade - Tennyson',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Onomatopoeia', 'Oxymoron', 'Personification'],
    tier: 2,
  },
  {
    extract: '"I have no way, and therefore want no eyes;\nI stumbled when I saw."',
    source: 'King Lear - Shakespeare',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Oxymoron', 'Hyperbole', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"Tyger, Tyger, burning bright,\nIn the forests of the night"',
    source: 'The Tyger - Blake',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Hyperbole', 'Onomatopoeia', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"Words, words, words."',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Onomatopoeia', 'Oxymoron', 'Simile'],
    tier: 1,
  },
  {
    extract: '"my way of life\nIs fall\'n into the sere, the yellow leaf"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Personification', 'Hyperbole', 'Oxymoron'],
    tier: 2,
  },
  {
    extract:
      '"There is a tide in the affairs of men,\nWhich, taken at the flood, leads on to fortune"',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Hyperbole', 'Simile', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"Denmark\'s a prison."',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Personification', 'Allusion', 'Simile'],
    tier: 1,
  },
  // Simile and metaphor: naming, telling apart, effect, the device doing the work
  {
    extract: '"As the sun rose, the city became a furnace."',
    source: 'Example prose',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Personification', 'Onomatopoeia'],
    tier: 2,
  },
  {
    extract: '"Dad would like us to think the shed is his castle."',
    source: 'Example prose',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Personification', 'Onomatopoeia'],
    tier: 2,
  },
  {
    extract: '"Your face, my thane, is as a book where men\nMay read strange matters."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"And like a thunderbolt he falls."',
    source: 'The Eagle - Tennyson',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Personification', 'Onomatopoeia'],
    tier: 2,
  },
  {
    extract:
      '"The dismal quarter of Soho ... seemed, in the lawyer\'s eyes, like a district of some city in a nightmare."',
    source: 'Jekyll and Hyde - Stevenson',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Voices of boys rang saddening like a hymn"',
    source: 'Disabled - Owen',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"I see a lily on thy brow"',
    source: 'La Belle Dame sans Merci - Keats',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Personification', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"I have no spur\nTo prick the sides of my intent"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Hard and sharp as flint, from which no steel had ever struck out generous fire"',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'No one can strike kindness from him',
    options: [
      'No one can strike kindness from him',
      'He is old and slowly crumbling away',
      'He hides a fiery temper',
      'He is easily hurt by others',
    ],
    tier: 3,
    device: 'Simile',
    prompt: 'What does the flint simile suggest about Scrooge?',
  },
  {
    extract: '"O, full of scorpions is my mind, dear wife!"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'It is tormented by stinging fears',
    options: [
      'It is tormented by stinging fears',
      'It is sharp and quick to plan',
      'It is calm now the deed is done',
      'It is planning to poison his wife',
    ],
    tier: 3,
    device: 'Metaphor',
    prompt: "What does 'scorpions' suggest about Macbeth's mind?",
  },
  {
    extract: '"So we beat on, boats against the current, borne back ceaselessly into the past."',
    source: 'The Great Gatsby - Fitzgerald',
    correctDevice: 'They push forward but keep being pulled back',
    options: [
      'They push forward but keep being pulled back',
      'They travel easily to wherever they choose to go',
      'They are lost at sea in a storm',
      'They race one another to the future',
    ],
    tier: 3,
    device: 'Metaphor',
    prompt: "What does 'boats against the current' suggest about people?",
  },
  {
    extract: '"I weep like a child for the past."',
    source: 'Piano - Lawrence',
    correctDevice: 'His memories have overwhelmed him',
    options: [
      'His memories have overwhelmed him',
      'He is putting on a show of tears',
      'He is weeping for a lost child',
      'He finds the memory funny now',
    ],
    tier: 3,
    device: 'Simile',
    prompt: "What does 'like a child' suggest about the grown man?",
  },
  {
    extract: '"My bounty is as boundless as the sea,\nMy love as deep"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Simile',
    options: ['Simile', 'Alliteration', 'Metaphor', 'Personification'],
    tier: 3,
    prompt: 'Which device measures how much love Juliet has to give?',
  },
  // Personification and pathetic fallacy
  {
    extract:
      '"If you can meet with Triumph and Disaster\nAnd treat those two impostors just the same"',
    source: 'If - Kipling',
    correctDevice: 'Personification',
    options: ['Personification', 'Pathetic fallacy', 'Simile', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"In spite of myself, the insidious mastery of song\nBetrays me back"',
    source: 'Piano - Lawrence',
    correctDevice: 'Personification',
    options: ['Personification', 'Pathetic fallacy', 'Simile', 'Onomatopoeia'],
    tier: 2,
  },
  {
    extract:
      '"Dawn massing in the east her melancholy army\nAttacks once more in ranks on shivering ranks of grey"',
    source: 'Exposure - Owen',
    correctDevice: 'Even the morning is an enemy',
    options: [
      'Even the morning is an enemy',
      'The battle is finally over',
      'Daylight brings the men hope',
      'The soldiers are marching home',
    ],
    tier: 3,
    device: 'Personification',
    prompt: 'What does turning dawn into an army suggest?',
  },
  {
    extract: '"The fog still slept on the wing above the drowned city"',
    source: 'Jekyll and Hyde - Stevenson',
    correctDevice: 'It hangs heavy and still',
    options: [
      'It hangs heavy and still',
      'It is about to lift and clear',
      'It is soft and comforting',
      'It is racing across the sky',
    ],
    tier: 3,
    device: 'Personification',
    prompt: "What does 'slept' suggest about the fog?",
  },
  {
    extract: '"Pale flakes with fingering stealth come feeling for our faces"',
    source: 'Exposure - Owen',
    correctDevice: 'Personification',
    options: ['Personification', 'Alliteration', 'Simile', 'Hyperbole'],
    tier: 3,
    prompt: 'Which device makes the snow seem to hunt the soldiers?',
  },
  {
    extract: '"He clasps the crag with crooked hands"',
    source: 'The Eagle - Tennyson',
    correctDevice: 'Personification',
    options: ['Personification', 'Alliteration', 'Simile', 'Onomatopoeia'],
    tier: 3,
    prompt: "Which device turns the eagle's claws into hands?",
  },
  {
    extract: '"The moment they began to argue, thunder rolled across the hills."',
    source: 'Example prose',
    correctDevice: 'Pathetic fallacy',
    options: ['Pathetic fallacy', 'Personification', 'Simile', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Alone in the hospital corridor, he watched the rain slide down the dark window."',
    source: 'Example prose',
    correctDevice: 'Pathetic fallacy',
    options: ['Pathetic fallacy', 'Personification', 'Extended metaphor', 'Hyperbole'],
    tier: 2,
  },
  {
    extract:
      '"It was on a dreary night of November, that I beheld the accomplishment of my toils."',
    source: 'Frankenstein - Mary Shelley',
    correctDevice: 'Pathetic fallacy',
    options: ['Pathetic fallacy', 'Personification', 'Extended metaphor', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"The sedge has withered from the lake,\nAnd no birds sing."',
    source: 'La Belle Dame sans Merci - Keats',
    correctDevice: 'Pathetic fallacy',
    options: ['Pathetic fallacy', 'Personification', 'Simile', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"For now these hot days, is the mad blood stirring."',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Pathetic fallacy',
    options: ['Pathetic fallacy', 'Personification', 'Simile', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"The night has been unruly: where we lay,\nOur chimneys were blown down"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Pathetic fallacy',
    options: ['Pathetic fallacy', 'Extended metaphor', 'Hyperbole', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"It was already one in the morning; the rain pattered dismally against the panes"',
    source: 'Frankenstein - Mary Shelley',
    correctDevice: 'A gloom that hangs over his success',
    options: [
      'A gloom that hangs over his success',
      'Relief that his work is finished',
      'A calm and sleepy evening',
      'Excitement about what will come next',
    ],
    tier: 3,
    device: 'Pathetic fallacy',
    prompt: "What does 'dismally' add to the moment?",
  },
  // Alliteration and sibilance
  {
    extract: '"Furious fans flooded the field, flags flapping."',
    source: 'Example prose',
    correctDevice: 'Alliteration',
    options: ['Alliteration', 'Sibilance', 'Internal rhyme', 'Personification'],
    tier: 2,
  },
  {
    extract: '"From forth the fatal loins of these two foes"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Alliteration',
    options: ['Alliteration', 'Onomatopoeia', 'Internal rhyme', 'Personification'],
    tier: 2,
  },
  {
    extract: '"Hover through the fog and filthy air."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Alliteration',
    options: ['Alliteration', 'Sibilance', 'Onomatopoeia', 'Personification'],
    tier: 2,
  },
  {
    extract: '"Let me not to the marriage of true minds"',
    source: 'Sonnet 116 - Shakespeare',
    correctDevice: 'Alliteration',
    options: ['Alliteration', 'Sibilance', 'Onomatopoeia', 'Personification'],
    tier: 2,
  },
  {
    extract: '"Of that colossal wreck, boundless and bare"',
    source: 'Ozymandias - Shelley',
    correctDevice: 'How vast and empty the desert is',
    options: [
      'How vast and empty the desert is',
      "How rich the king's empire was",
      'How loud the desert wind is',
      'How quickly the statue was built',
    ],
    tier: 3,
    device: 'Alliteration',
    prompt: "What does 'boundless and bare' emphasise?",
  },
  {
    extract: '"The hostess pressed the guests to finish their dessert."',
    source: 'Example prose',
    correctDevice: 'Sibilance',
    options: ['Sibilance', 'Alliteration', 'Onomatopoeia', 'Personification'],
    tier: 2,
  },
  {
    extract: '"Sudden successive flights of bullets streak the silence."',
    source: 'Exposure - Owen',
    correctDevice: 'Sibilance',
    options: ['Sibilance', 'Onomatopoeia', 'Personification', 'Simile'],
    tier: 2,
  },
  {
    extract: '"Storm\'d at with shot and shell"',
    source: 'Charge of the Light Brigade - Tennyson',
    correctDevice: 'Sibilance',
    options: ['Sibilance', 'Onomatopoeia', 'Personification', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"And the sheen of their spears was like stars on the sea"',
    source: 'The Destruction of Sennacherib - Byron',
    correctDevice: 'Sibilance',
    options: ['Sibilance', 'Onomatopoeia', 'Personification', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"spools of suffering"',
    source: 'War Photographer - Duffy',
    correctDevice: 'A hushed, solemn quiet',
    options: [
      'A hushed, solemn quiet',
      'Excitement at a good photograph',
      'The noise of a busy newsroom',
      'Anger at the editor',
    ],
    tier: 3,
    device: 'Sibilance',
    prompt: "What does the soft 's' sound of this phrase add?",
  },
  {
    extract: '"Worried by silence, sentries whisper, curious, nervous"',
    source: 'Exposure - Owen',
    correctDevice: 'A tense, hushed waiting',
    options: [
      'A tense, hushed waiting',
      'The roar of an attack',
      'A relaxed, sleepy calm',
      'Cheerful talk among friends',
    ],
    tier: 3,
    device: 'Sibilance',
    prompt: "What do the 's' sounds add to this moment?",
  },
  // Assonance and onomatopoeia
  {
    extract: '"We took the slow road home."',
    source: 'Example prose',
    correctDevice: 'Assonance',
    options: ['Assonance', 'Alliteration', 'Internal rhyme', 'Onomatopoeia'],
    tier: 1,
  },
  {
    extract: '"The deep green bay was calm in the evening heat."',
    source: 'Example prose',
    correctDevice: 'Assonance',
    options: ['Assonance', 'Alliteration', 'Sibilance', 'Onomatopoeia'],
    tier: 1,
  },
  {
    extract: '"I hike by the wide river at nine."',
    source: 'Example prose',
    correctDevice: 'Assonance',
    options: ['Assonance', 'Alliteration', 'Onomatopoeia', 'Sibilance'],
    tier: 1,
  },
  {
    extract: '"Hunched in the mud, the drummer struggled up."',
    source: 'Example prose',
    correctDevice: 'Assonance',
    options: ['Assonance', 'Alliteration', 'Internal rhyme', 'Onomatopoeia'],
    tier: 1,
  },
  {
    extract: '"The cool blue room smelled of food."',
    source: 'Example prose',
    correctDevice: 'Assonance',
    options: ['Assonance', 'Alliteration', 'Internal rhyme', 'Sibilance'],
    tier: 2,
  },
  {
    extract: '"The slow, low notes rolled across the frozen lake."',
    source: 'Example prose',
    correctDevice: 'A heavy, mournful mood',
    options: [
      'A heavy, mournful mood',
      'A quick and lively beat',
      'A harsh, violent sound',
      'A cheerful, playful tone',
    ],
    tier: 3,
    device: 'Assonance',
    prompt: "What do the long 'o' sounds add to the scene?",
  },
  {
    extract: '"Through the long, slow afternoon, the old dog dozed in the doorway."',
    source: 'Example prose',
    correctDevice: 'A lazy, drowsy pace',
    options: [
      'A lazy, drowsy pace',
      'A tense, nervous mood',
      'A sudden burst of action',
      'A loud, busy scene',
    ],
    tier: 3,
    device: 'Assonance',
    prompt: 'What do the long vowel sounds add?',
  },
  {
    extract: '"Cannon in front of them\nVolley\'d and thunder\'d"',
    source: 'Charge of the Light Brigade - Tennyson',
    correctDevice: 'Onomatopoeia',
    options: ['Onomatopoeia', 'Alliteration', 'Sibilance', 'Personification'],
    tier: 2,
  },
  {
    extract: '"Knock, knock, knock! Who\'s there?"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Onomatopoeia',
    options: ['Onomatopoeia', 'Sibilance', 'Personification', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"They were succeeded by a clanking noise, deep down below"',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'Onomatopoeia',
    options: ['Onomatopoeia', 'Personification', 'Hyperbole', 'Simile'],
    tier: 2,
  },
  {
    extract: '"A child sitting under the piano, in the boom of the tingling strings"',
    source: 'Piano - Lawrence',
    correctDevice: 'The music feels huge to him',
    options: [
      'The music feels huge to him',
      'The piano is being played badly',
      'A storm is raging outside',
      'His mother is shouting at him',
    ],
    tier: 3,
    device: 'Onomatopoeia',
    prompt: "What does 'boom' suggest about the child's experience?",
  },
  // Oxymoron and paradox
  {
    extract: '"She gave him a sad smile and walked away."',
    source: 'Example prose',
    correctDevice: 'Oxymoron',
    options: ['Oxymoron', 'Paradox', 'Irony', 'Hyperbole'],
    tier: 1,
  },
  {
    extract: '"In a loud whisper, Ella asked if anyone had a spare pen."',
    source: 'Example prose',
    correctDevice: 'Oxymoron',
    options: ['Oxymoron', 'Paradox', 'Irony', 'Euphemism'],
    tier: 1,
  },
  {
    extract: '"The frozen railing gave her a freezing burn."',
    source: 'Example prose',
    correctDevice: 'Oxymoron',
    options: ['Oxymoron', 'Paradox', 'Hyperbole', 'Simile'],
    tier: 1,
  },
  {
    extract: '"Locked in that cell for ten years, he called it a living death."',
    source: 'Example prose',
    correctDevice: 'Oxymoron',
    options: ['Oxymoron', 'Paradox', 'Euphemism', 'Pun'],
    tier: 2,
  },
  {
    extract: '"Feather of lead, bright smoke, cold fire, sick health!"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Oxymoron',
    options: ['Oxymoron', 'Paradox', 'Pun', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"Better a witty fool than a foolish wit."',
    source: 'Twelfth Night - Shakespeare',
    correctDevice: 'Oxymoron',
    options: ['Oxymoron', 'Euphemism', 'Hyperbole', 'Simile'],
    tier: 2,
  },
  {
    extract: '"They shared a bittersweet goodbye at the station."',
    source: 'Example prose',
    correctDevice: 'It was sad and happy at once',
    options: [
      'It was sad and happy at once',
      'It was angry and bitter',
      'It was quick and soon forgotten',
      'It was a relief to them both',
    ],
    tier: 3,
    device: 'Oxymoron',
    prompt: "What does 'bittersweet' suggest about the goodbye?",
  },
  {
    extract: '"Beautiful tyrant, fiend angelical,\nDove-feather\'d raven, wolvish-ravening lamb!"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'She loves him but is horrified by him',
    options: [
      'She loves him but is horrified by him',
      'She has stopped loving him',
      'She is afraid he will hurt her',
      'She is joking with the Nurse',
    ],
    tier: 3,
    device: 'Oxymoron',
    prompt: "What do these oxymorons show about Juliet's feelings for Romeo?",
  },
  {
    extract: '"The more I learn, the less I seem to know."',
    source: 'Example prose',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Oxymoron', 'Irony', 'Hyperbole'],
    tier: 1,
  },
  {
    extract: '"Sometimes you have to lose a battle to win the war."',
    source: 'Example speech',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Oxymoron', 'Irony', 'Euphemism'],
    tier: 1,
  },
  {
    extract: '"I am never so busy as when I am on holiday."',
    source: 'Example dialogue',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Oxymoron', 'Euphemism', 'Pun'],
    tier: 2,
  },
  {
    extract: '"Lesser than Macbeth, and greater."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Oxymoron', 'Irony', 'Pun'],
    tier: 2,
  },
  {
    extract: '"Wisely and slow; they stumble that run fast."',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Oxymoron', 'Euphemism', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"I must be cruel, only to be kind"',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Oxymoron', 'Irony', 'Euphemism'],
    tier: 2,
  },
  {
    extract:
      '"Cowards die many times before their deaths;\nThe valiant never taste of death but once."',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Paradox',
    options: ['Paradox', 'Oxymoron', 'Euphemism', 'Simile'],
    tier: 2,
  },
  {
    extract: '"And nothing is but what is not."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Only what he imagines feels real',
    options: [
      'Only what he imagines feels real',
      'He is calm and certain of his plans',
      'He has decided not to kill Duncan',
      'He no longer believes the witches',
    ],
    tier: 3,
    device: 'Paradox',
    prompt: "What does this paradox show about Macbeth's mind?",
  },
  // Juxtaposition and irony
  {
    extract: '"The mansion\'s golden gates opened onto a street of cardboard beds."',
    source: 'Example prose',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Oxymoron', 'Paradox', 'Hyperbole'],
    tier: 1,
  },
  {
    extract:
      '"Outside, children laughed in the sunshine; inside, the old man sat alone in the dark."',
    source: 'Example prose',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Oxymoron', 'Paradox', 'Simile'],
    tier: 1,
  },
  {
    extract: '"Her wedding dress hung in the wardrobe beside his black funeral suit."',
    source: 'Example prose',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Oxymoron', 'Paradox', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"I had gone to bed Henry Jekyll, I had awakened Edward Hyde."',
    source: 'Jekyll and Hyde - Stevenson',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Oxymoron', 'Pun', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"I was benevolent and good; misery made me a fiend."',
    source: 'Frankenstein - Mary Shelley',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Oxymoron', 'Paradox', 'Euphemism'],
    tier: 2,
  },
  {
    extract:
      '"Better by far you should forget and smile\nThan that you should remember and be sad."',
    source: 'Remember - Rossetti',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Oxymoron', 'Paradox', 'Pun'],
    tier: 2,
  },
  {
    extract: '"Four legs good, two legs bad."',
    source: 'Animal Farm - Orwell',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Oxymoron', 'Paradox', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"look like the innocent flower,\nBut be the serpent under\'t."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Hide his murderous plan behind innocence',
    options: [
      'Hide his murderous plan behind innocence',
      'Give up the plan and stay innocent',
      'Show everyone how dangerous he is',
      'Protect Duncan from hidden enemies',
    ],
    tier: 3,
    device: 'Juxtaposition',
    prompt: 'What does the contrast between the flower and the serpent tell Macbeth to do?',
  },
  {
    extract: '"In the glittering ballroom, a waiter wiped his cracked, sore hands on his apron."',
    source: 'Example prose',
    correctDevice: 'The hard work hidden behind the luxury',
    options: [
      'The hard work hidden behind the luxury',
      'That the ballroom has not been cleaned',
      'That the waiter longs to dance',
      'That the party is about to end',
    ],
    tier: 3,
    device: 'Juxtaposition',
    prompt: "What does placing the waiter's hands in the ballroom suggest?",
  },
  {
    extract:
      '"The palace blazed with a thousand candles while the poor shivered in the dark outside."',
    source: 'Example prose',
    correctDevice: 'Juxtaposition',
    options: ['Juxtaposition', 'Hyperbole', 'Oxymoron', 'Personification'],
    tier: 3,
    prompt: 'Which device exposes the gap between rich and poor?',
  },
  {
    extract: '"\'Lovely weather,\' said Dad, as the rain poured down the windows."',
    source: 'Example prose',
    correctDevice: 'Irony',
    options: ['Irony', 'Hyperbole', 'Euphemism', 'Paradox'],
    tier: 1,
  },
  {
    extract: '"The driving instructor failed his own driving test."',
    source: 'Example prose',
    correctDevice: 'Irony',
    options: ['Irony', 'Paradox', 'Hyperbole', 'Pun'],
    tier: 1,
  },
  {
    extract: '"The fire station burned down last night."',
    source: 'Example prose',
    correctDevice: 'Irony',
    options: ['Irony', 'Sarcasm', 'Paradox', 'Hyperbole'],
    tier: 2,
  },
  {
    extract:
      '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
    source: 'Pride and Prejudice - Austen',
    correctDevice: 'Irony',
    options: ['Irony', 'Paradox', 'Euphemism', 'Pun'],
    tier: 2,
  },
  {
    extract: '"This castle hath a pleasant seat."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Irony',
    options: ['Irony', 'Paradox', 'Euphemism', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"For Brutus is an honourable man,\nSo are they all, all honourable men"',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Irony',
    options: ['Irony', 'Paradox', 'Euphemism', 'Oxymoron'],
    tier: 2,
  },
  {
    extract:
      '"\'Are there no prisons?\' said the Spirit, turning on him for the last time with his own words."',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'Irony',
    options: ['Irony', 'Paradox', 'Euphemism', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Napoleon is always right."',
    source: 'Animal Farm - Orwell',
    correctDevice: 'Irony',
    options: ['Irony', 'Paradox', 'Euphemism', 'Pun'],
    tier: 2,
  },
  {
    extract: '"There\'s no art\nTo find the mind\'s construction in the face"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'He will now trust Macbeth, his murderer',
    options: [
      'He will now trust Macbeth, his murderer',
      'He has realised that Macbeth is a traitor',
      'He is speaking about the witches',
      'He knows he will die tonight',
    ],
    tier: 3,
    device: 'Irony',
    prompt: "Why are Duncan's words chilling for the audience?",
  },
  {
    extract:
      '"\'Thanks for your help,\' said Mia, staring at the paint her brother had spilled across her homework."',
    source: 'Example prose',
    correctDevice: 'She is angry that he ruined it',
    options: [
      'She is angry that he ruined it',
      'She is grateful for his help',
      'She wants him to help again',
      'She has not noticed the paint',
    ],
    tier: 3,
    device: 'Irony',
    prompt: 'What does Mia really mean?',
  },
  // Hyperbole and euphemism
  {
    extract: '"Her smile could light up the whole of London."',
    source: 'Example prose',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Simile', 'Understatement', 'Euphemism'],
    tier: 1,
  },
  {
    extract: '"This is the worst day in the history of the world."',
    source: 'Example dialogue',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Metaphor', 'Irony', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"Earth has not anything to show more fair"',
    source: 'Composed upon Westminster Bridge - Wordsworth',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Metaphor', 'Irony', 'Understatement'],
    tier: 2,
  },
  {
    extract: '"O, she doth teach the torches to burn bright!"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Simile', 'Understatement', 'Euphemism'],
    tier: 2,
  },
  {
    extract:
      '"every idiot who goes about with \'Merry Christmas\' on his lips, should be boiled with his own pudding"',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Euphemism', 'Understatement', 'Simile'],
    tier: 2,
  },
  {
    extract:
      '"Here\'s the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Simile', 'Understatement', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"The essay took me forever, and my hand has probably fallen off."',
    source: 'Example dialogue',
    correctDevice: 'They feel worn out and fed up',
    options: [
      'They feel worn out and fed up',
      'Their hand is badly injured',
      'They enjoyed writing the essay',
      'They finished the essay quickly',
    ],
    tier: 3,
    device: 'Hyperbole',
    prompt: 'What does the hyperbole show about the writer?',
  },
  {
    extract: '"The multitudinous seas incarnadine,\nMaking the green one red."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'It feels too vast ever to wash away',
    options: [
      'It feels too vast ever to wash away',
      'It will soon be forgotten',
      'He is proud of what he has done',
      'He plans to sail away from Scotland',
    ],
    tier: 3,
    device: 'Hyperbole',
    prompt: "What does this exaggeration show about Macbeth's guilt?",
  },
  {
    extract: '"My feet are blocks of ice after a hundred hours of waiting in the snow."',
    source: 'Example dialogue',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Metaphor', 'Simile', 'Understatement'],
    tier: 3,
    prompt: 'Which device makes the wait sound endless?',
  },
  {
    extract: '"After twenty years at the factory, Dad was let go."',
    source: 'Example prose',
    correctDevice: 'Euphemism',
    options: ['Euphemism', 'Hyperbole', 'Irony', 'Oxymoron'],
    tier: 1,
  },
  {
    extract: '"The company is making some staff reductions this year."',
    source: 'Example prose',
    correctDevice: 'Euphemism',
    options: ['Euphemism', 'Hyperbole', 'Irony', 'Paradox'],
    tier: 1,
  },
  {
    extract: '"He is between jobs at the moment."',
    source: 'Example dialogue',
    correctDevice: 'Euphemism',
    options: ['Euphemism', 'Hyperbole', 'Paradox', 'Pun'],
    tier: 1,
  },
  {
    extract: '"My little brother is a bit economical with the truth."',
    source: 'Example dialogue',
    correctDevice: 'Euphemism',
    options: ['Euphemism', 'Hyperbole', 'Oxymoron', 'Pun'],
    tier: 2,
  },
  {
    extract: '"Remember me when I am gone away,\nGone far away into the silent land"',
    source: 'Remember - Rossetti',
    correctDevice: 'Euphemism',
    options: ['Euphemism', 'Hyperbole', 'Oxymoron', 'Pun'],
    tier: 2,
  },
  {
    extract: '"I gave commands;\nThen all smiles stopped together."',
    source: 'My Last Duchess - Browning',
    correctDevice: 'Euphemism',
    options: ['Euphemism', 'Hyperbole', 'Oxymoron', 'Pun'],
    tier: 2,
  },
  {
    extract: '"they had better do it, and decrease the surplus population"',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'Euphemism',
    options: ['Euphemism', 'Hyperbole', 'Oxymoron', 'Pun'],
    tier: 2,
  },
  {
    extract: '"And may there be no moaning of the bar,\nWhen I put out to sea"',
    source: 'Crossing the Bar - Tennyson',
    correctDevice: 'Euphemism',
    options: ['Euphemism', 'Hyperbole', 'Oxymoron', 'Paradox'],
    tier: 2,
  },
  {
    extract: '"Our old dog was put to sleep last week."',
    source: 'Example dialogue',
    correctDevice: 'To soften the pain of saying it',
    options: [
      'To soften the pain of saying it',
      'To show the dog is only resting',
      'To make a joke about the dog',
      'To show the vet was gentle',
    ],
    tier: 3,
    device: 'Euphemism',
    prompt: "Why does the speaker say 'put to sleep'?",
  },
  {
    extract: '"He that\'s coming\nMust be provided for"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'To speak of murder without naming it',
    options: [
      'To speak of murder without naming it',
      "To plan a feast for Duncan's visit",
      'To warn Macbeth to protect Duncan',
      'To show she has changed her mind',
    ],
    tier: 3,
    device: 'Euphemism',
    prompt: "Why does Lady Macbeth say Duncan 'must be provided for'?",
  },
  // Repetition and anaphora
  {
    extract: '"It was cold, so cold that we could not feel our hands."',
    source: 'Example prose',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Anaphora', 'Rule of three', 'Simile'],
    tier: 1,
  },
  {
    extract: '"The rain fell and fell and fell until the river burst its banks."',
    source: 'Example prose',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Anaphora', 'Simile', 'Personification'],
    tier: 1,
  },
  {
    extract: '"The answer, the only answer, was to wait."',
    source: 'Example prose',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Anaphora', 'Rule of three', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"Mankind was my business. The common welfare was my business"',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Anaphora', 'Rule of three', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"O Romeo, Romeo, wherefore art thou Romeo?"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Anaphora', 'Oxymoron', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"Tomorrow, and tomorrow, and tomorrow,\nCreeps in this petty pace from day to day"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Each day is the same dull crawl',
    options: [
      'Each day is the same dull crawl',
      'He is excited about the future',
      'He is counting down to victory',
      'He wants time to slow down',
    ],
    tier: 3,
    device: 'Repetition',
    prompt: "What does repeating 'tomorrow' suggest about how Macbeth sees life?",
  },
  {
    extract: '"Run, she told herself. Run, run, run."',
    source: 'Example prose',
    correctDevice: 'Her panic and urgency',
    options: [
      'Her panic and urgency',
      'Her joy in exercise',
      'Her calm, careful plan',
      'Her tiredness after a race',
    ],
    tier: 3,
    device: 'Repetition',
    prompt: "What does the repetition of 'run' show?",
  },
  {
    extract: '"Again and again the waves struck the rocks like a giant\'s fist."',
    source: 'Example prose',
    correctDevice: 'Repetition',
    options: ['Repetition', 'Simile', 'Onomatopoeia', 'Oxymoron'],
    tier: 3,
    prompt: 'Which device shows that the attack never stops?',
  },
  {
    extract: '"Some came for the music; some came for the food."',
    source: 'Example prose',
    correctDevice: 'Anaphora',
    options: ['Anaphora', 'Epistrophe', 'Alliteration', 'Oxymoron'],
    tier: 1,
  },
  {
    extract: '"We need more doctors, we need more nurses, we need more beds, we need more time."',
    source: 'Example speech',
    correctDevice: 'Anaphora',
    options: ['Anaphora', 'Epistrophe', 'Rule of three', 'Hyperbole'],
    tier: 1,
  },
  {
    extract: '"I remember the smell of the bakery. I remember the bell above the door."',
    source: 'Example prose',
    correctDevice: 'Anaphora',
    options: ['Anaphora', 'Epistrophe', 'Rule of three', 'Simile'],
    tier: 1,
  },
  {
    extract: '"This is our town. This is our river. This is our home."',
    source: 'Example speech',
    correctDevice: 'Anaphora',
    options: ['Anaphora', 'Epistrophe', 'Alliteration', 'Hyperbole'],
    tier: 1,
  },
  {
    extract: '"Give me back my books, give me back my freedom."',
    source: 'Example speech',
    correctDevice: 'Anaphora',
    options: ['Anaphora', 'Epistrophe', 'Rule of three', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"Cannon to right of them,\nCannon to left of them"',
    source: 'Charge of the Light Brigade - Tennyson',
    correctDevice: 'Anaphora',
    options: ['Anaphora', 'Personification', 'Alliteration', 'Onomatopoeia'],
    tier: 2,
  },
  {
    extract:
      '"I love thee freely, as men strive for Right;\nI love thee purely, as they turn from Praise."',
    source: 'Sonnet 43 - Barrett Browning',
    correctDevice: 'Anaphora',
    options: ['Anaphora', 'Epistrophe', 'Rule of three', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"as he was fortunate, I rejoice at it; as he was valiant, I honour him"',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Anaphora',
    options: ['Anaphora', 'Epistrophe', 'Rule of three', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"We few, we happy few, we band of brothers."',
    source: 'Henry V - Shakespeare',
    correctDevice: 'Anaphora',
    options: ['Anaphora', 'Oxymoron', 'Euphemism', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Not this year. Not this time. Not ever again."',
    source: 'Example dialogue',
    correctDevice: 'A firm, determined refusal',
    options: [
      'A firm, determined refusal',
      'A gentle, hopeful tone',
      'Confusion and doubt',
      'A cheerful, playful rhythm',
    ],
    tier: 3,
    device: 'Anaphora',
    prompt: "What does beginning each sentence with 'Not' create?",
  },
  {
    extract: '"In every cry of every man,\nIn every infant\'s cry of fear"',
    source: 'London - Blake',
    correctDevice: 'It is everywhere, in everyone',
    options: [
      'It is everywhere, in everyone',
      'It affects only the very poor',
      'It will soon come to an end',
      'It affects children more than adults',
    ],
    tier: 3,
    device: 'Anaphora',
    prompt: "What does repeating 'every' suggest about suffering in London?",
  },
  {
    extract: '"He wore me like a silken knot,\nHe changed me like a glove"',
    source: 'Cousin Kate - Rossetti',
    correctDevice: 'Simile',
    options: ['Simile', 'Anaphora', 'Metaphor', 'Personification'],
    tier: 3,
    prompt: 'Which device shows how carelessly he treated her?',
  },
  // Rule of three and rhetorical question
  {
    extract: '"The room was cold, dark and silent."',
    source: 'Example prose',
    correctDevice: 'Rule of three',
    options: ['Rule of three', 'Anaphora', 'Alliteration', 'Oxymoron'],
    tier: 1,
  },
  {
    extract: '"Our new park will be safer, greener and quieter."',
    source: 'Example speech',
    correctDevice: 'Rule of three',
    options: ['Rule of three', 'Anaphora', 'Hyperbole', 'Alliteration'],
    tier: 1,
  },
  {
    extract: '"She was patient, honest and brave."',
    source: 'Example prose',
    correctDevice: 'Rule of three',
    options: ['Rule of three', 'Anaphora', 'Repetition', 'Oxymoron'],
    tier: 1,
  },
  {
    extract: '"Friends, Romans, countrymen, lend me your ears"',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Rule of three',
    options: ['Rule of three', 'Anaphora', 'Repetition', 'Alliteration'],
    tier: 2,
  },
  {
    extract: '"I will live in the Past, the Present, and the Future."',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'Rule of three',
    options: ['Rule of three', 'Hyperbole', 'Oxymoron', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"He plunges at me, guttering, choking, drowning."',
    source: 'Dulce et Decorum Est - Owen',
    correctDevice: 'Rule of three',
    options: ['Rule of three', 'Anaphora', 'Repetition', 'Alliteration'],
    tier: 2,
  },
  {
    extract: '"Theirs not to make reply,\nTheirs not to reason why,\nTheirs but to do and die"',
    source: 'Charge of the Light Brigade - Tennyson',
    correctDevice: 'Rule of three',
    options: ['Rule of three', 'Oxymoron', 'Euphemism', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"We only know war lasts, rain soaks, and clouds sag stormy."',
    source: 'Exposure - Owen',
    correctDevice: 'Rule of three',
    options: ['Rule of three', 'Anaphora', 'Repetition', 'Simile'],
    tier: 2,
  },
  {
    extract: '"Vote for a cleaner, safer, fairer town."',
    source: 'Example speech',
    correctDevice: 'To sound complete and persuasive',
    options: [
      'To sound complete and persuasive',
      'To show the town is perfect now',
      'To confuse the listeners',
      'To pad out a short speech',
    ],
    tier: 3,
    device: 'Rule of three',
    prompt: 'Why does the speaker list three qualities?',
  },
  {
    extract: '"Piercing, searching, biting cold."',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'It feels like a cruel attacker',
    options: [
      'It feels like a cruel attacker',
      'It is mild and easily ignored',
      'It is a welcome change',
      'It only troubles Scrooge',
    ],
    tier: 3,
    device: 'Rule of three',
    prompt: 'What does the list of three add to the cold?',
  },
  {
    extract: '"Tired, hungry and soaked to the skin, we trudged through the endless mud."',
    source: 'Example prose',
    correctDevice: 'Rule of three',
    options: ['Rule of three', 'Personification', 'Anaphora', 'Simile'],
    tier: 3,
    prompt: 'Which device builds up how miserable they feel?',
  },
  {
    extract: '"Who wants to spend their weekend stuck in traffic?"',
    source: 'Example speech',
    correctDevice: 'Rhetorical question',
    options: ['Rhetorical question', 'Imperative', 'Direct address', 'Hyperbole'],
    tier: 1,
  },
  {
    extract: '"Is it fair that a child should go hungry in a country this rich?"',
    source: 'Example speech',
    correctDevice: 'Rhetorical question',
    options: ['Rhetorical question', 'Imperative', 'Direct address', 'Euphemism'],
    tier: 1,
  },
  {
    extract: '"Do you really want to live in a town with no library?"',
    source: 'Example speech',
    correctDevice: 'Rhetorical question',
    options: ['Rhetorical question', 'Imperative', 'Hyperbole', 'Apostrophe'],
    tier: 1,
  },
  {
    extract: '"What, will these hands ne\'er be clean?"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Rhetorical question',
    options: ['Rhetorical question', 'Imperative', 'Apostrophe', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"If you prick us, do we not bleed?"',
    source: 'The Merchant of Venice - Shakespeare',
    correctDevice: 'Rhetorical question',
    options: ['Rhetorical question', 'Imperative', 'Hyperbole', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"Was this ambition?"',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Rhetorical question',
    options: ['Rhetorical question', 'Imperative', 'Euphemism', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"What immortal hand or eye\nCould frame thy fearful symmetry?"',
    source: 'The Tyger - Blake',
    correctDevice: 'Rhetorical question',
    options: ['Rhetorical question', 'Imperative', 'Hyperbole', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"Why don\'t they come\nAnd put him into bed? Why don\'t they come?"',
    source: 'Disabled - Owen',
    correctDevice: 'Rhetorical question',
    options: ['Rhetorical question', 'Imperative', 'Direct address', 'Apostrophe'],
    tier: 2,
  },
  {
    extract: '"How many more warnings do we need before we act?"',
    source: 'Example speech',
    correctDevice: 'To push the audience to act now',
    options: [
      'To push the audience to act now',
      'To find out an exact number',
      'To admit nothing can be done',
      'To praise the warnings so far',
    ],
    tier: 3,
    device: 'Rhetorical question',
    prompt: 'Why does the speaker ask this question?',
  },
  {
    extract: '"What are we doing here?"',
    source: 'Exposure - Owen',
    correctDevice: 'They see no point in being there',
    options: [
      'They see no point in being there',
      'They are lost and need directions',
      'They are eager for the battle',
      'They are waiting for new orders',
    ],
    tier: 3,
    device: 'Rhetorical question',
    prompt: 'What does this question suggest about the soldiers?',
  },
  {
    extract: '"Why should we pay more for less, when the bosses pay themselves millions?"',
    source: 'Example speech',
    correctDevice: 'Rhetorical question',
    options: ['Rhetorical question', 'Juxtaposition', 'Imperative', 'Euphemism'],
    tier: 3,
    prompt: 'Which device challenges the listener to agree?',
  },
  // Imperative, direct address and apostrophe
  {
    extract: '"Beware the Ides of March."',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Imperative',
    options: ['Imperative', 'Rhetorical question', 'Euphemism', 'Hyperbole'],
    tier: 1,
  },
  {
    extract: '"Begone! I will not hear you."',
    source: 'Frankenstein - Mary Shelley',
    correctDevice: 'Imperative',
    options: ['Imperative', 'Rhetorical question', 'Euphemism', 'Hyperbole'],
    tier: 1,
  },
  {
    extract: "\"'Hear me!' cried the Ghost. 'My time is nearly gone.'\"",
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'Imperative',
    options: ['Imperative', 'Rhetorical question', 'Hyperbole', 'Oxymoron'],
    tier: 1,
  },
  {
    extract: '"Get thee to a nunnery."',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'Imperative',
    options: ['Imperative', 'Rhetorical question', 'Oxymoron', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Tarry a little, there is something else."',
    source: 'The Merchant of Venice - Shakespeare',
    correctDevice: 'Imperative',
    options: ['Imperative', 'Rhetorical question', 'Euphemism', 'Hyperbole'],
    tier: 2,
  },
  {
    extract:
      '"Remove Man from the scene, and the root cause of hunger and overwork is abolished for ever."',
    source: 'Animal Farm - Orwell',
    correctDevice: 'Imperative',
    options: ['Imperative', 'Rhetorical question', 'Simile', 'Oxymoron'],
    tier: 2,
  },
  {
    extract:
      '"\'Hold your noise!\' cried a terrible voice, as a man started up from among the graves"',
    source: 'Great Expectations - Dickens',
    correctDevice: 'He is fierce and desperate',
    options: [
      'He is fierce and desperate',
      'He is kind but nervous',
      'He is joking with Pip',
      'He is too weak to speak',
    ],
    tier: 3,
    device: 'Imperative',
    prompt: "What does the convict's first command show about him?",
  },
  {
    extract: '"Beware; for I am fearless, and therefore powerful."',
    source: 'Frankenstein - Mary Shelley',
    correctDevice: 'He has turned on his creator',
    options: [
      'He has turned on his creator',
      'He is begging for forgiveness',
      'He is afraid of Victor',
      'He wants to be left alone',
    ],
    tier: 3,
    device: 'Imperative',
    prompt: "What does the creature's command show about him now?",
  },
  {
    extract:
      '"Follow your spirit, and upon this charge\nCry, \'God for Harry! England and Saint George!\'"',
    source: 'Henry V - Shakespeare',
    correctDevice: 'Imperative',
    options: ['Imperative', 'Simile', 'Rhetorical question', 'Euphemism'],
    tier: 2,
    prompt: 'Which device drives the soldiers into the attack?',
  },
  {
    extract: '"Reader, I married him."',
    source: 'Jane Eyre - Charlotte Brontë',
    correctDevice: 'Direct address',
    options: ['Direct address', 'Apostrophe', 'Imperative', 'Rhetorical question'],
    tier: 2,
  },
  {
    extract:
      '"You will therefore permit me to repeat, emphatically, that Marley was as dead as a door-nail."',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'Direct address',
    options: ['Direct address', 'Apostrophe', 'Rhetorical question', 'Euphemism'],
    tier: 1,
  },
  {
    extract:
      '"You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings."',
    source: 'Frankenstein - Mary Shelley',
    correctDevice: 'Direct address',
    options: ['Direct address', 'Apostrophe', 'Imperative', 'Hyperbole'],
    tier: 1,
  },
  {
    extract:
      '"If you can keep your head when all about you\nAre losing theirs and blaming it on you"',
    source: 'If - Kipling',
    correctDevice: 'Direct address',
    options: ['Direct address', 'Apostrophe', 'Imperative', 'Rhetorical question'],
    tier: 1,
  },
  {
    extract:
      '"The which, if you with patient ears attend,\nWhat here shall miss, our toil shall strive to mend."',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Direct address',
    options: ['Direct address', 'Apostrophe', 'Imperative', 'Rhetorical question'],
    tier: 2,
  },
  {
    extract: '"But release me from my bands\nWith the help of your good hands."',
    source: 'The Tempest - Shakespeare',
    correctDevice: 'Direct address',
    options: ['Direct address', 'Apostrophe', 'Rhetorical question', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Think but this, and all is mended,\nThat you have but slumber\'d here"',
    source: "A Midsummer Night's Dream - Shakespeare",
    correctDevice: 'Direct address',
    options: ['Direct address', 'Apostrophe', 'Rhetorical question', 'Hyperbole'],
    tier: 2,
  },
  {
    extract:
      '"My friend, you would not tell with such high zest\nTo children ardent for some desperate glory"',
    source: 'Dulce et Decorum Est - Owen',
    correctDevice: 'Direct address',
    options: ['Direct address', 'Imperative', 'Rhetorical question', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"as close to it as I am now to you, and I am standing in the spirit at your elbow"',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'A warm, friendly storyteller',
    options: [
      'A warm, friendly storyteller',
      'A cold, distant narrator',
      'A threat to the reader',
      "A list of the story's events",
    ],
    tier: 3,
    device: 'Direct address',
    prompt: "What does the narrator's direct address create?",
  },
  {
    extract: '"Gentle reader, may you never feel what I then felt!"',
    source: 'Jane Eyre - Charlotte Brontë',
    correctDevice: 'It draws us into her pain',
    options: [
      'It draws us into her pain',
      'It shows she distrusts the reader',
      'It makes the moment comic',
      'It hides what she felt',
    ],
    tier: 3,
    device: 'Direct address',
    prompt: "What does speaking to the 'gentle reader' do here?",
  },
  {
    extract: '"Come, you spirits\nThat tend on mortal thoughts, unsex me here"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Apostrophe',
    options: ['Apostrophe', 'Direct address', 'Rhetorical question', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Frailty, thy name is woman!"',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'Apostrophe',
    options: ['Apostrophe', 'Direct address', 'Rhetorical question', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"O judgement, thou art fled to brutish beasts,\nAnd men have lost their reason."',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Apostrophe',
    options: ['Apostrophe', 'Direct address', 'Rhetorical question', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"O time, thou must untangle this, not I,\nIt is too hard a knot for me t\'untie!"',
    source: 'Twelfth Night - Shakespeare',
    correctDevice: 'Apostrophe',
    options: ['Apostrophe', 'Direct address', 'Rhetorical question', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Who hath not seen thee oft amid thy store?"',
    source: 'To Autumn - Keats',
    correctDevice: 'Apostrophe',
    options: ['Apostrophe', 'Direct address', 'Imperative', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Blow, winds, and crack your cheeks! Rage! blow!"',
    source: 'King Lear - Shakespeare',
    correctDevice: 'Apostrophe',
    options: ['Apostrophe', 'Direct address', 'Rhetorical question', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"Disguise, I see thou art a wickedness\nWherein the pregnant enemy does much."',
    source: 'Twelfth Night - Shakespeare',
    correctDevice: 'Apostrophe',
    options: ['Apostrophe', 'Direct address', 'Rhetorical question', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Thou sure and firm-set earth,\nHear not my steps"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'He fears the ground could betray him',
    options: [
      'He fears the ground could betray him',
      'He is praying for forgiveness',
      'He is lost in the dark castle',
      "He wants the earth to hide Duncan's body",
    ],
    tier: 3,
    device: 'Apostrophe',
    prompt: 'Why does Macbeth speak to the earth?',
  },
  {
    extract:
      '"O, pardon me, thou bleeding piece of earth,\nThat I am meek and gentle with these butchers."',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'His true grief and anger',
    options: [
      'His true grief and anger',
      'His part in the murder',
      'His fear of Brutus',
      "His relief at Caesar's death",
    ],
    tier: 3,
    device: 'Apostrophe',
    prompt: "What does speaking to Caesar's body reveal about Antony?",
  },
  // Enjambment, caesura and rhyming couplet
  {
    extract: '"Until they melted all into one track\nOf sparkling light."',
    source: 'The Prelude - Wordsworth',
    correctDevice: 'Enjambment',
    options: ['Enjambment', 'Caesura', 'Rhyming couplet', 'Internal rhyme'],
    tier: 1,
  },
  {
    extract: '"We are such stuff\nAs dreams are made on"',
    source: 'The Tempest - Shakespeare',
    correctDevice: 'Enjambment',
    options: ['Enjambment', 'Caesura', 'Rhyming couplet', 'Internal rhyme'],
    tier: 1,
  },
  {
    extract: '"That there\'s some corner of a foreign field\nThat is for ever England."',
    source: 'The Soldier - Brooke',
    correctDevice: 'Enjambment',
    options: ['Enjambment', 'Caesura', 'Rhyming couplet', 'Internal rhyme'],
    tier: 1,
  },
  {
    extract: '"When we two parted\nIn silence and tears"',
    source: 'When We Two Parted - Byron',
    correctDevice: 'Enjambment',
    options: ['Enjambment', 'Caesura', 'Rhyming couplet', 'Internal rhyme'],
    tier: 1,
  },
  {
    extract: '"And mark in every face I meet\nMarks of weakness, marks of woe."',
    source: 'London - Blake',
    correctDevice: 'Enjambment',
    options: ['Enjambment', 'Rhyming couplet', 'Internal rhyme', 'Half-rhyme'],
    tier: 2,
  },
  {
    extract: '"This City now doth, like a garment, wear\nThe beauty of the morning"',
    source: 'Composed upon Westminster Bridge - Wordsworth',
    correctDevice: 'Enjambment',
    options: ['Enjambment', 'Rhyming couplet', 'Internal rhyme', 'Half-rhyme'],
    tier: 2,
  },
  {
    extract: '"I love thee to the depth and breadth and height\nMy soul can reach"',
    source: 'Sonnet 43 - Barrett Browning',
    correctDevice: 'Enjambment',
    options: ['Enjambment', 'Caesura', 'Rhyming couplet', 'Internal rhyme'],
    tier: 2,
  },
  {
    extract: '"She walks in beauty, like the night\nOf cloudless climes and starry skies"',
    source: 'She Walks in Beauty - Byron',
    correctDevice: 'Enjambment',
    options: ['Enjambment', 'Rhyming couplet', 'Internal rhyme', 'Blank verse'],
    tier: 2,
  },
  {
    extract: '"And growing still in stature the grim shape\nTowered up between me and the stars"',
    source: 'The Prelude - Wordsworth',
    correctDevice: 'The peak seems to loom up suddenly',
    options: [
      'The peak seems to loom up suddenly',
      'The boy rows calmly back home',
      'The stars are hidden by cloud',
      'The scene slows to a peaceful stop',
    ],
    tier: 3,
    device: 'Enjambment',
    prompt: "What does running the line on to 'Towered up' add?",
  },
  {
    extract: '"Love is not love\nWhich alters when it alteration finds"',
    source: 'Sonnet 116 - Shakespeare',
    correctDevice: 'It makes us wait for the definition',
    options: [
      'It makes us wait for the definition',
      'It shows the speaker no longer believes in love',
      'It makes the two lines rhyme',
      'It speeds the poem to its end',
    ],
    tier: 3,
    device: 'Enjambment',
    prompt: "What does breaking the line after 'Love is not love' do?",
  },
  {
    extract: '"Softly, in the dusk, a woman is singing to me;"',
    source: 'Piano - Lawrence',
    correctDevice: 'Caesura',
    options: ['Caesura', 'Enjambment', 'Rhyming couplet', 'Internal rhyme'],
    tier: 1,
  },
  {
    extract: '"Your face, and the God-curst sun, and a tree,"',
    source: 'Neutral Tones - Hardy',
    correctDevice: 'Caesura',
    options: ['Caesura', 'Enjambment', 'Rhyming couplet', 'Internal rhyme'],
    tier: 1,
  },
  {
    extract: '"Upreared its head. I struck and struck again,"',
    source: 'The Prelude - Wordsworth',
    correctDevice: 'Caesura',
    options: ['Caesura', 'Enjambment', 'Rhyming couplet', 'Internal rhyme'],
    tier: 1,
  },
  {
    extract: '"O, no! it is an ever-fixed mark,"',
    source: 'Sonnet 116 - Shakespeare',
    correctDevice: 'Caesura',
    options: ['Caesura', 'Enjambment', 'Rhyming couplet', 'Internal rhyme'],
    tier: 2,
  },
  {
    extract: '"This grew; I gave commands;"',
    source: 'My Last Duchess - Browning',
    correctDevice: 'Caesura',
    options: ['Caesura', 'Enjambment', 'Rhyming couplet', 'Internal rhyme'],
    tier: 2,
  },
  {
    extract: '"Once more unto the breach, dear friends, once more,"',
    source: 'Henry V - Shakespeare',
    correctDevice: 'Caesura',
    options: ['Caesura', 'Enjambment', 'Rhyming couplet', 'Internal rhyme'],
    tier: 2,
  },
  {
    extract: '"O, beware, my lord, of jealousy;"',
    source: 'Othello - Shakespeare',
    correctDevice: 'Caesura',
    options: ['Caesura', 'Enjambment', 'Rhyming couplet', 'Internal rhyme'],
    tier: 2,
  },
  {
    extract: '"I go, and it is done. The bell invites me."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'He is forcing himself to act',
    options: [
      'He is forcing himself to act',
      'He is relaxed and unafraid',
      'He is hurrying to escape',
      'He has decided not to go',
    ],
    tier: 3,
    device: 'Caesura',
    prompt: 'What do the pauses in this line suggest about Macbeth?',
  },
  {
    extract: '"Ne\'er saw I, never felt, a calm so deep!"',
    source: 'Composed upon Westminster Bridge - Wordsworth',
    correctDevice: 'Breathless wonder at the view',
    options: [
      'Breathless wonder at the view',
      'Boredom with the city',
      'Fear of the crowded streets',
      'Hurry to get across the bridge',
    ],
    tier: 3,
    device: 'Caesura',
    prompt: 'What do the pauses in this line add?',
  },
  {
    extract: '"For never was a story of more woe\nThan this of Juliet and her Romeo."',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Rhyming couplet',
    options: ['Rhyming couplet', 'Internal rhyme', 'Half-rhyme', 'Blank verse'],
    tier: 2,
  },
  {
    extract: '"The time is out of joint. O cursed spite,\nThat ever I was born to set it right."',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'Rhyming couplet',
    options: ['Rhyming couplet', 'Internal rhyme', 'Half-rhyme', 'Blank verse'],
    tier: 2,
  },
  {
    extract: '"That\'s my last Duchess painted on the wall,\nLooking as if she were alive. I call"',
    source: 'My Last Duchess - Browning',
    correctDevice: 'Rhyming couplet',
    options: ['Rhyming couplet', 'Internal rhyme', 'Half-rhyme', 'Blank verse'],
    tier: 2,
  },
  {
    extract:
      '"It is concluded. Banquo, thy soul\'s flight,\nIf it find heaven, must find it out tonight."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Rhyming couplet',
    options: ['Rhyming couplet', 'Internal rhyme', 'Half-rhyme', 'Blank verse'],
    tier: 2,
  },
  {
    extract: '"And this weak and idle theme,\nNo more yielding but a dream,"',
    source: "A Midsummer Night's Dream - Shakespeare",
    correctDevice: 'Rhyming couplet',
    options: ['Rhyming couplet', 'Internal rhyme', 'Half-rhyme', 'Blank verse'],
    tier: 2,
  },
  {
    extract: '"Gentle breath of yours my sails\nMust fill, or else my project fails,"',
    source: 'The Tempest - Shakespeare',
    correctDevice: 'Rhyming couplet',
    options: ['Rhyming couplet', 'Internal rhyme', 'Half-rhyme', 'Blank verse'],
    tier: 2,
  },
  {
    extract:
      "\"I have't. It is engender'd. Hell and night\nMust bring this monstrous birth to the world's light.\"",
    source: 'Othello - Shakespeare',
    correctDevice: 'Rhyming couplet',
    options: ['Rhyming couplet', 'Internal rhyme', 'Half-rhyme', 'Blank verse'],
    tier: 2,
  },
  {
    extract: '"Hear it not, Duncan, for it is a knell\nThat summons thee to heaven or to hell."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'It seals his decision to kill',
    options: [
      'It seals his decision to kill',
      'It shows he has changed his mind',
      'It makes the murder sound comic',
      'It tells us Duncan is already dead',
    ],
    tier: 3,
    device: 'Rhyming couplet',
    prompt: 'Why does the scene end on a rhyming couplet?',
  },
  {
    extract: '"The play\'s the thing\nWherein I\'ll catch the conscience of the King."',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'A firm close to his new plan',
    options: [
      'A firm close to his new plan',
      'A sense that he has given up',
      'A joke for the audience',
      'A hint the play will fail',
    ],
    tier: 3,
    device: 'Rhyming couplet',
    prompt: 'What does ending the speech on a rhyming couplet add?',
  },
  // Soliloquy and aside
  {
    extract:
      '"The raven himself is hoarse\nThat croaks the fatal entrance of Duncan\nUnder my battlements."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Soliloquy',
    options: ['Soliloquy', 'Aside', 'Prologue', 'Apostrophe'],
    tier: 2,
  },
  {
    extract: '"Gallop apace, you fiery-footed steeds,\nTowards Phoebus\' lodging."',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Soliloquy',
    options: ['Soliloquy', 'Aside', 'Prologue', 'Stichomythia'],
    tier: 2,
  },
  {
    extract:
      '"It must be by his death: and for my part,\nI know no personal cause to spurn at him"',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Soliloquy',
    options: ['Soliloquy', 'Aside', 'Prologue', 'Apostrophe'],
    tier: 2,
  },
  {
    extract: '"I left no ring with her; what means this lady?"',
    source: 'Twelfth Night - Shakespeare',
    correctDevice: 'Soliloquy',
    options: ['Soliloquy', 'Aside', 'Prologue', 'Stichomythia'],
    tier: 2,
  },
  {
    extract: '"This can be no trick: the conference was sadly borne."',
    source: 'Much Ado About Nothing - Shakespeare',
    correctDevice: 'Soliloquy',
    options: ['Soliloquy', 'Aside', 'Prologue', 'Stichomythia'],
    tier: 2,
  },
  {
    extract: '"And what\'s he then, that says I play the villain?"',
    source: 'Othello - Shakespeare',
    correctDevice: 'Soliloquy',
    options: ['Soliloquy', 'Aside', 'Prologue', 'Apostrophe'],
    tier: 2,
  },
  {
    extract: '"If it were done when \'tis done, then \'twere well\nIt were done quickly."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'His doubts about killing Duncan',
    options: [
      'His doubts about killing Duncan',
      'His joy at becoming king',
      'His plan to flee Scotland',
      'His trust in the witches',
    ],
    tier: 3,
    device: 'Soliloquy',
    prompt: 'What does this soliloquy let the audience see that others cannot?',
  },
  {
    extract:
      '"The Moor is of a free and open nature\nThat thinks men honest that but seem to be so"',
    source: 'Othello - Shakespeare',
    correctDevice: "He will exploit Othello's trust",
    options: [
      "He will exploit Othello's trust",
      "He admires Othello's honesty",
      'He plans to warn Othello',
      'He thinks Othello is too clever',
    ],
    tier: 3,
    device: 'Soliloquy',
    prompt: "What does this soliloquy reveal about Iago's plan?",
  },
  {
    extract: '"If chance will have me king, why, chance may crown me\nWithout my stir."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Aside',
    options: ['Aside', 'Soliloquy', 'Prologue', 'Stichomythia'],
    tier: 2,
  },
  {
    extract: '"Shall I hear more, or shall I speak at this?"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Aside',
    options: ['Aside', 'Soliloquy', 'Prologue', 'Stichomythia'],
    tier: 2,
  },
  {
    extract: '"He takes her by the palm. Ay, well said, whisper."',
    source: 'Othello - Shakespeare',
    correctDevice: 'Aside',
    options: ['Aside', 'Soliloquy', 'Prologue', 'Apostrophe'],
    tier: 2,
  },
  {
    extract: '"How like a fawning publican he looks!"',
    source: 'The Merchant of Venice - Shakespeare',
    correctDevice: 'Aside',
    options: ['Aside', 'Soliloquy', 'Prologue', 'Stichomythia'],
    tier: 2,
  },
  {
    extract: '"Though this be madness, yet there is method in\'t."',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'Aside',
    options: ['Aside', 'Soliloquy', 'Prologue', 'Stichomythia'],
    tier: 2,
  },
  {
    extract: '"What shall Cordelia speak? Love, and be silent."',
    source: 'King Lear - Shakespeare',
    correctDevice: 'Aside',
    options: ['Aside', 'Soliloquy', 'Prologue', 'Apostrophe'],
    tier: 2,
  },
  {
    extract: '"I must obey. His art is of such power,\nIt would control my dam\'s god, Setebos"',
    source: 'The Tempest - Shakespeare',
    correctDevice: 'Aside',
    options: ['Aside', 'Soliloquy', 'Prologue', 'Stichomythia'],
    tier: 2,
  },
  {
    extract: '"Stars, hide your fires!\nLet not light see my black and deep desires."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'His secret wish to kill for the crown',
    options: [
      'His secret wish to kill for the crown',
      'His loyalty to Malcolm, the new prince',
      'His fear of the dark',
      'His plan to leave the court',
    ],
    tier: 3,
    device: 'Aside',
    prompt: "What does this aside reveal that Duncan's court cannot see?",
  },
  {
    extract: '"Yet, a barful strife!\nWhoe\'er I woo, myself would be his wife."',
    source: 'Twelfth Night - Shakespeare',
    correctDevice: 'She secretly loves Orsino herself',
    options: [
      'She secretly loves Orsino herself',
      'She has fallen for Olivia',
      'She wants to stop serving Orsino',
      'She thinks Orsino is cruel',
    ],
    tier: 3,
    device: 'Aside',
    prompt: "What does Viola's aside reveal?",
  },
  // Pun and allusion
  {
    extract:
      '"Not I, believe me, you have dancing shoes,\nWith nimble soles, I have a soul of lead"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Pun',
    options: ['Pun', 'Oxymoron', 'Paradox', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Not so, my lord, I am too much i\' the sun."',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'Pun',
    options: ['Pun', 'Oxymoron', 'Paradox', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"A little more than kin, and less than kind."',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'Pun',
    options: ['Pun', 'Oxymoron', 'Euphemism', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: "\"'If he be Mr. Hyde,' he had thought, 'I shall be Mr. Seek.'\"",
    source: 'Jekyll and Hyde - Stevenson',
    correctDevice: 'Pun',
    options: ['Pun', 'Oxymoron', 'Paradox', 'Euphemism'],
    tier: 2,
  },
  {
    extract:
      '"A trade, sir, that I hope I may use with a safe conscience, which is indeed, sir, a mender of bad soles."',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Pun',
    options: ['Pun', 'Oxymoron', 'Paradox', 'Euphemism'],
    tier: 2,
  },
  {
    extract:
      '"I do live by the church, for I do live at my house, and my house doth stand by the church."',
    source: 'Twelfth Night - Shakespeare',
    correctDevice: 'Pun',
    options: ['Pun', 'Oxymoron', 'Paradox', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"Ask for me tomorrow, and you shall find me a grave man."',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'He keeps joking even as he dies',
    options: [
      'He keeps joking even as he dies',
      'He thinks the wound is nothing',
      'He has forgiven both families',
      'He wants Romeo to laugh at Tybalt',
    ],
    tier: 3,
    device: 'Pun',
    prompt: "What does Mercutio's pun show as he dies?",
  },
  {
    extract: '"I\'ll gild the faces of the grooms withal,\nFor it must seem their guilt."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'She can joke about the murder',
    options: [
      'She can joke about the murder',
      'She is overcome with guilt',
      'She wants to confess at once',
      'She is frightened of the grooms',
    ],
    tier: 3,
    device: 'Pun',
    prompt: "What does Lady Macbeth's pun reveal?",
  },
  {
    extract:
      "\"Well, in that hit you miss: she'll not be hit\nWith Cupid's arrow, she hath Dian's wit;\"",
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Allusion',
    options: ['Allusion', 'Euphemism', 'Oxymoron', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"I ought to be thy Adam; but I am rather the fallen angel"',
    source: 'Frankenstein - Mary Shelley',
    correctDevice: 'Allusion',
    options: ['Allusion', 'Euphemism', 'Pun', 'Oxymoron'],
    tier: 2,
  },
  {
    extract:
      '"If we were not perfectly convinced that Hamlet\'s Father died before the play began"',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'Allusion',
    options: ['Allusion', 'Euphemism', 'Pun', 'Paradox'],
    tier: 2,
  },
  {
    extract:
      "\"'I incline to Cain's heresy,' he used to say quaintly: 'I let my brother go to the devil in his own way.'\"",
    source: 'Jekyll and Hyde - Stevenson',
    correctDevice: 'Allusion',
    options: ['Allusion', 'Euphemism', 'Paradox', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"Will all great Neptune\'s ocean wash this blood\nClean from my hand?"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Allusion',
    options: ['Allusion', 'Euphemism', 'Pun', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"All flesh is grass"',
    source: 'War Photographer - Duffy',
    correctDevice: 'Allusion',
    options: ['Allusion', 'Euphemism', 'Pun', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"A Daniel come to judgment! Yea, a Daniel!"',
    source: 'The Merchant of Venice - Shakespeare',
    correctDevice: 'Allusion',
    options: ['Allusion', 'Euphemism', 'Pun', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"if ever I read Satan\'s signature upon a face, it is on that of your new friend"',
    source: 'Jekyll and Hyde - Stevenson',
    correctDevice: 'His evil is written on his face',
    options: [
      'His evil is written on his face',
      'He has signed a deal with Jekyll',
      'He is clever with words',
      'He is secretly religious',
    ],
    tier: 3,
    device: 'Allusion',
    prompt: "What does 'Satan's signature' suggest about Hyde?",
  },
  {
    extract: '"The old Lie: Dulce et decorum est\nPro patria mori."',
    source: 'Dulce et Decorum Est - Owen',
    correctDevice: 'Dying for your country is not sweet',
    options: [
      'Dying for your country is not sweet',
      'The Latin has been translated wrongly',
      'Old soldiers tell lies about the war',
      'The motto was written long ago',
    ],
    tier: 3,
    device: 'Allusion',
    prompt: "Why does Owen call the Latin motto 'the old Lie'?",
  },
  // Real lines for the figurative and sound devices
  {
    extract: '"Old Marley was as dead as a door-nail."',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Personification', 'Juxtaposition'],
    tier: 1,
  },
  {
    extract: '"My terror had fallen from me like a garment."',
    source: 'The War of the Worlds - Wells',
    correctDevice: 'Simile',
    options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
    tier: 1,
  },
  {
    extract: '"It is the east, and Juliet is the sun!"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Personification', 'Oxymoron'],
    tier: 1,
  },
  {
    extract: '"If music be the food of love, play on"',
    source: 'Twelfth Night - Shakespeare',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
    tier: 1,
  },
  {
    extract:
      '"the bride within the bridal dress had withered like the dress, and like the flowers"',
    source: 'Great Expectations - Dickens',
    correctDevice: 'She has decayed with her wedding',
    options: [
      'She has decayed with her wedding',
      'She is still young and lively',
      'She is soon to be married',
      'She has kept her dress and flowers fresh',
    ],
    tier: 3,
    device: 'Simile',
    prompt: 'What do the similes suggest about Miss Havisham?',
  },
  {
    extract: '"It is the star to every wandering bark"',
    source: 'Sonnet 116 - Shakespeare',
    correctDevice: 'It guides those who are lost',
    options: [
      'It guides those who are lost',
      'It is cold and far away',
      'It shines only for a short time',
      'It changes with every season',
    ],
    tier: 3,
    device: 'Metaphor',
    prompt: "What does calling love 'the star to every wandering bark' suggest?",
  },
  {
    extract:
      '"The Assyrian came down like the wolf on the fold,\nAnd his cohorts were gleaming in purple and gold;"',
    source: 'The Destruction of Sennacherib - Byron',
    correctDevice: 'Simile',
    options: ['Simile', 'Alliteration', 'Metaphor', 'Personification'],
    tier: 3,
    prompt: 'Which device makes the army seem a predator?',
  },
  {
    extract: '"Arise fair sun and kill the envious moon,\nWho is already sick and pale with grief"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Metaphor',
    options: ['Metaphor', 'Personification', 'Simile', 'Hyperbole'],
    tier: 3,
    prompt: 'Which device turns Juliet into the sun?',
  },
  {
    extract:
      '"The ancient tower of a church, whose gruff old bell was always peeping slily down at Scrooge"',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'Personification',
    options: ['Personification', 'Pathetic fallacy', 'Simile', 'Oxymoron'],
    tier: 2,
  },
  {
    extract: '"The river glideth at his own sweet will"',
    source: 'Composed upon Westminster Bridge - Wordsworth',
    correctDevice: 'Personification',
    options: ['Personification', 'Simile', 'Hyperbole', 'Oxymoron'],
    tier: 1,
  },
  {
    extract: '"the moon gazed on my midnight labours"',
    source: 'Frankenstein - Mary Shelley',
    correctDevice: 'Personification',
    options: ['Personification', 'Simile', 'Hyperbole', 'Oxymoron'],
    tier: 1,
  },
  {
    extract:
      '"nothing but a door on the lower storey and a blind forehead of discoloured wall on the upper"',
    source: 'Jekyll and Hyde - Stevenson',
    correctDevice: 'It is blank and secretive',
    options: [
      'It is blank and secretive',
      'It is grand and welcoming',
      'It has just been repaired',
      'It is full of bright windows',
    ],
    tier: 3,
    device: 'Personification',
    prompt: "What does 'a blind forehead' suggest about the building?",
  },
  {
    extract:
      '"the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further outdoor exercise was now out of the question"',
    source: 'Jane Eyre - Charlotte Brontë',
    correctDevice: 'Pathetic fallacy',
    options: ['Pathetic fallacy', 'Simile', 'Hyperbole', 'Oxymoron'],
    tier: 1,
  },
  {
    extract: '"the day had been a dreary one, and a dense drizzly fog lay low upon the great city"',
    source: 'The Sign of Four - Conan Doyle',
    correctDevice: 'Pathetic fallacy',
    options: ['Pathetic fallacy', 'Personification', 'Simile', 'Hyperbole'],
    tier: 2,
  },
  {
    extract:
      '"the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her"',
    source: 'Great Expectations - Dickens',
    correctDevice: 'Hope of a calm future together',
    options: [
      'Hope of a calm future together',
      'That Pip will soon leave Estella',
      'That a storm is about to break',
      'That Pip feels nothing but regret',
    ],
    tier: 3,
    device: 'Pathetic fallacy',
    prompt: "What does the 'tranquil light' suggest about the ending?",
  },
  {
    extract: '"The lone and level sands stretch far away."',
    source: 'Ozymandias - Shelley',
    correctDevice: 'Alliteration',
    options: ['Alliteration', 'Onomatopoeia', 'Internal rhyme', 'Personification'],
    tier: 1,
  },
  {
    extract: '"Pale grew thy cheek and cold,\nColder thy kiss"',
    source: 'When We Two Parted - Byron',
    correctDevice: 'Alliteration',
    options: ['Alliteration', 'Sibilance', 'Onomatopoeia', 'Internal rhyme'],
    tier: 1,
  },
  {
    extract: '"Men marched asleep. Many had lost their boots"',
    source: 'Dulce et Decorum Est - Owen',
    correctDevice: 'Alliteration',
    options: ['Alliteration', 'Sibilance', 'Onomatopoeia', 'Internal rhyme'],
    tier: 1,
  },
  {
    extract: '"It was cold, bleak, biting weather"',
    source: 'A Christmas Carol - Dickens',
    correctDevice: 'The sting of a harsh cold',
    options: [
      'The sting of a harsh cold',
      'A soft and gentle calm',
      'The cheer of Christmas bells',
      'A warm and cosy mood',
    ],
    tier: 3,
    device: 'Alliteration',
    prompt: "What do the hard 'b' sounds of 'bleak, biting' add?",
  },
  {
    extract:
      '"Ships, towers, domes, theatres, and temples lie\nOpen unto the fields, and to the sky"',
    source: 'Composed upon Westminster Bridge - Wordsworth',
    correctDevice: 'Alliteration',
    options: ['Alliteration', 'Rhyming couplet', 'Personification', 'Onomatopoeia'],
    tier: 3,
    prompt: "Which device links 'towers' and 'temples' in sound?",
  },
  {
    extract: '"Legless, sewn short at elbow."',
    source: 'Disabled - Owen',
    correctDevice: 'Sibilance',
    options: ['Sibilance', 'Plosives', 'Onomatopoeia', 'Personification'],
    tier: 1,
  },
  {
    extract: '"But such a tide as moving seems asleep,\nToo full for sound and foam"',
    source: 'Crossing the Bar - Tennyson',
    correctDevice: 'Sibilance',
    options: ['Sibilance', 'Plosives', 'Onomatopoeia', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Thou watchest the last oozings, hours by hours."',
    source: 'To Autumn - Keats',
    correctDevice: 'A slow, lingering mood',
    options: [
      'A slow, lingering mood',
      'A fast and busy rhythm',
      'A harsh, violent tone',
      'A cold and bitter feeling',
    ],
    tier: 3,
    device: 'Sibilance',
    prompt: "What do the soft 's' and 'z' sounds add?",
  },
  {
    extract: '"A dust whom England bore, shaped, made aware"',
    source: 'The Soldier - Brooke',
    correctDevice: 'Assonance',
    options: ['Assonance', 'Alliteration', 'Internal rhyme', 'Onomatopoeia'],
    tier: 2,
  },
  {
    extract: '"\'Ulla, ulla, ulla, ulla,\' wailed that superhuman note"',
    source: 'The War of the Worlds - Wells',
    correctDevice: 'Onomatopoeia',
    options: ['Onomatopoeia', 'Sibilance', 'Simile', 'Euphemism'],
    tier: 2,
  },
  {
    extract:
      '"It was the owl that shriek\'d, the fatal bellman,\nWhich gives the stern\'st good night."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Onomatopoeia',
    options: ['Onomatopoeia', 'Metaphor', 'Alliteration', 'Simile'],
    tier: 3,
    prompt: 'Which device lets the audience hear the owl?',
  },
  // Real lines: contrast, scale and what devices do
  {
    extract: '"There is a kind of merry war betwixt Signior Benedick and her"',
    source: 'Much Ado About Nothing - Shakespeare',
    correctDevice: 'Oxymoron',
    options: ['Oxymoron', 'Paradox', 'Pun', 'Euphemism'],
    tier: 1,
  },
  {
    extract: '"My only love sprung from my only hate!"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'She loves the son of her enemy',
    options: [
      'She loves the son of her enemy',
      'She hates Romeo now she knows him',
      'She has two different suitors',
      'She loved Tybalt all along',
    ],
    tier: 3,
    device: 'Paradox',
    prompt: "What does this paradox show about Juliet's situation?",
  },
  {
    extract:
      '"I lov\'d Ophelia; forty thousand brothers\nCould not, with all their quantity of love,\nMake up my sum."',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Simile', 'Understatement', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"I would not have given it for a wilderness of monkeys."',
    source: 'The Merchant of Venice - Shakespeare',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Simile', 'Understatement', 'Euphemism'],
    tier: 2,
  },
  {
    extract: '"and you shall put\nThis night\'s great business into my dispatch"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Euphemism',
    options: ['Euphemism', 'Hyperbole', 'Oxymoron', 'Pun'],
    tier: 2,
  },
  {
    extract: '"Shy as a leveret, swift as he,\nStraight and slight as a young larch tree"',
    source: "The Farmer's Bride - Mew",
    correctDevice: 'She is wild, timid and hard to hold',
    options: [
      'She is wild, timid and hard to hold',
      'She is calm and fond of her husband',
      'She is lazy and slow',
      'She is strong and fierce',
    ],
    tier: 3,
    device: 'Simile',
    prompt: 'What do these similes suggest about the bride?',
  },
  {
    extract:
      '"I am no bird; and no net ensnares me; I am a free human being with an independent will"',
    source: 'Jane Eyre - Charlotte Brontë',
    correctDevice: 'No one can trap or control her',
    options: [
      'No one can trap or control her',
      'She is afraid of being hunted',
      'She longs to fly away like a bird',
      'She has escaped from a real net',
    ],
    tier: 3,
    device: 'Metaphor',
    prompt: "What does Jane mean by 'no net ensnares me'?",
  },
  {
    extract: '"It is the green-ey\'d monster which doth mock\nThe meat it feeds on."',
    source: 'Othello - Shakespeare',
    correctDevice: 'It torments the person who feels it',
    options: [
      'It torments the person who feels it',
      "It protects a husband's honour",
      'It makes people more generous',
      'It is easy to hide and forget',
    ],
    tier: 3,
    device: 'Metaphor',
    prompt: "What does Iago's image suggest about jealousy?",
  },
  {
    extract: '"In every voice, in every ban,\nThe mind-forged manacles I hear"',
    source: 'London - Blake',
    correctDevice: 'People are trapped by ideas and rules',
    options: [
      'People are trapped by ideas and rules',
      'Prisoners are chained in the streets',
      'Londoners make iron in their factories',
      'The speaker is losing his mind',
    ],
    tier: 3,
    device: 'Metaphor',
    prompt: "What does 'mind-forged manacles' suggest?",
  },
  {
    extract:
      '"The smile on your mouth was the deadest thing\nAlive enough to have strength to die"',
    source: 'Neutral Tones - Hardy',
    correctDevice: 'It is empty, with no feeling left',
    options: [
      'It is empty, with no feeling left',
      'It is warm and full of love',
      'It is about to burst into laughter',
      'It shows she is very ill',
    ],
    tier: 3,
    device: 'Oxymoron',
    prompt: "What does 'the deadest thing / Alive' suggest about the smile?",
  },
  {
    extract:
      '"I was angry with my friend:\nI told my wrath, my wrath did end.\nI was angry with my foe:\nI told it not, my wrath did grow."',
    source: 'A Poison Tree - Blake',
    correctDevice: 'Anger hidden away grows stronger',
    options: [
      'Anger hidden away grows stronger',
      'Friends are easier to anger',
      'Enemies should always be forgiven',
      'Anger is always wrong',
    ],
    tier: 3,
    device: 'Juxtaposition',
    prompt: 'What does the contrast between friend and foe show?',
  },
  {
    extract:
      '"Yes; quaint and curious war is!\nYou shoot a fellow down\nYou\'d treat if met where any bar is,\nOr help to half-a-crown."',
    source: 'The Man He Killed - Hardy',
    correctDevice: 'He killed a man he might have befriended',
    options: [
      'He killed a man he might have befriended',
      'War is an exciting adventure',
      'Soldiers enjoy fighting each other',
      'His enemy was cruel and deserved it',
    ],
    tier: 3,
    device: 'Irony',
    prompt: "What does the speaker find 'quaint and curious' about war?",
  },
  {
    extract: '"How can the bird that is born for joy,\nSit in a cage and sing."',
    source: 'The Schoolboy - Blake',
    correctDevice: 'School traps his natural joy',
    options: [
      'School traps his natural joy',
      'He keeps a pet bird at home',
      'He sings well in his lessons',
      'He wants to become a bird',
    ],
    tier: 3,
    device: 'Metaphor',
    prompt: 'What does the caged bird suggest about the schoolboy?',
  },
  {
    extract: '"Ten thousand saw I at a glance,\nTossing their heads in sprightly dance."',
    source: 'Daffodils - Wordsworth',
    correctDevice: 'Hyperbole',
    options: ['Hyperbole', 'Personification', 'Simile', 'Oxymoron'],
    tier: 3,
    prompt: 'Which device makes the flowers seem countless?',
  },
  {
    extract: '"Twilight and evening bell,\nAnd after that the dark!"',
    source: 'Crossing the Bar - Tennyson',
    correctDevice: 'The approach of his death',
    options: [
      'The approach of his death',
      "The end of a long day's work",
      'A storm coming in from the sea',
      'His fear of the night',
    ],
    tier: 3,
    device: 'Euphemism',
    prompt: "What do 'twilight' and 'the dark' stand for?",
  },
  {
    extract: '"Thy hair soft-lifted by the winnowing wind"',
    source: 'To Autumn - Keats',
    correctDevice: 'Personification',
    options: ['Personification', 'Alliteration', 'Simile', 'Onomatopoeia'],
    tier: 3,
    prompt: 'Which device gives the season a body?',
  },
  {
    extract: '"Into the valley of Death\nRode the six hundred."',
    source: 'Charge of the Light Brigade - Tennyson',
    correctDevice: 'A solemn, biblical sense of doom',
    options: [
      'A solemn, biblical sense of doom',
      'A cheerful sense of victory',
      'A precise detail of the map',
      'A hint the men will escape',
    ],
    tier: 3,
    device: 'Allusion',
    prompt: "What does the allusion in 'the valley of Death' add?",
  },
  {
    extract: '"by the clock \'tis day,\nAnd yet dark night strangles the travelling lamp."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Nature is troubled by the murder',
    options: [
      'Nature is troubled by the murder',
      'An eclipse has been predicted',
      'The night watch overslept after the feast',
      'The storm has finally passed',
    ],
    tier: 3,
    device: 'Pathetic fallacy',
    prompt: 'What does the darkness in the daytime suggest?',
  },
  // Real lines: more from the plays and novels
  {
    extract: '"Now is it Rome indeed, and room enough,\nWhen there is in it but one only man."',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Caesar now fills the city alone',
    options: [
      'Caesar now fills the city alone',
      'Rome has grown far too crowded',
      'Cassius wants to leave Rome',
      'Caesar is building a new palace',
    ],
    tier: 3,
    device: 'Pun',
    prompt: "What does Cassius's pun on 'Rome' and 'room' suggest?",
  },
  {
    extract: '"Thou, Nature, art my goddess; to thy law\nMy services are bound."',
    source: 'King Lear - Shakespeare',
    correctDevice: 'Apostrophe',
    options: ['Apostrophe', 'Direct address', 'Rhetorical question', 'Hyperbole'],
    tier: 2,
  },
  {
    extract:
      '"How happy some o\'er other some can be!\nThrough Athens I am thought as fair as she."',
    source: "A Midsummer Night's Dream - Shakespeare",
    correctDevice: 'Soliloquy',
    options: ['Soliloquy', 'Aside', 'Prologue', 'Stichomythia'],
    tier: 2,
  },
  {
    extract:
      '"That every like is not the same, O Caesar,\nThe heart of Brutus yearns to think upon."',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Aside',
    options: ['Aside', 'Soliloquy', 'Prologue', 'Stichomythia'],
    tier: 2,
  },
  {
    extract: '"O, you are well tun\'d now,\nBut I\'ll set down the pegs that make this music"',
    source: 'Othello - Shakespeare',
    correctDevice: 'He will wreck their harmony',
    options: [
      'He will wreck their harmony',
      'He wants to play music for them',
      'He is happy for the couple',
      'He plans to leave Cyprus',
    ],
    tier: 3,
    device: 'Aside',
    prompt: "What does Iago's aside reveal about his plan?",
  },
  {
    extract: '"Out, damned spot! out, I say!"',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Imperative',
    options: ['Imperative', 'Rhetorical question', 'Euphemism', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Speak the speech, I pray you, as I pronounced it to you, trippingly on the tongue."',
    source: 'Hamlet - Shakespeare',
    correctDevice: 'Imperative',
    options: ['Imperative', 'Rhetorical question', 'Euphemism', 'Hyperbole'],
    tier: 2,
  },
  {
    extract: '"Sit still, and hear the last of our sea-sorrow."',
    source: 'The Tempest - Shakespeare',
    correctDevice: 'Imperative',
    options: ['Imperative', 'Rhetorical question', 'Euphemism', 'Hyperbole'],
    tier: 1,
  },
  {
    extract: '"O sweet Juliet,\nThy beauty hath made me effeminate"',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Apostrophe',
    options: ['Apostrophe', 'Direct address', 'Rhetorical question', 'Hyperbole'],
    tier: 2,
  },
  {
    extract:
      '"Farewell the tranquil mind! Farewell content!\nFarewell the plumed troops and the big wars"',
    source: 'Othello - Shakespeare',
    correctDevice: 'He feels he has lost everything he valued',
    options: [
      'He feels he has lost everything he valued',
      'He is happily retiring from the army',
      'He is saying goodbye to Desdemona',
      'He is leaving Venice for good',
    ],
    tier: 3,
    device: 'Anaphora',
    prompt: "What does repeating 'Farewell' show about Othello?",
  },
  {
    extract: '"Thou\'lt come no more,\nNever, never, never, never, never!"',
    source: 'King Lear - Shakespeare',
    correctDevice: "Lear's grief at a loss that is final",
    options: [
      "Lear's grief at a loss that is final",
      "Lear's anger at his daughter",
      "Lear's hope she will wake soon",
      "Lear's confusion about the time",
    ],
    tier: 3,
    device: 'Repetition',
    prompt: "What does repeating 'never' five times show?",
  },
  {
    extract: '"Romans, countrymen, and lovers, hear me for my cause"',
    source: 'Julius Caesar - Shakespeare',
    correctDevice: 'Rule of three',
    options: ['Rule of three', 'Anaphora', 'Repetition', 'Juxtaposition'],
    tier: 2,
  },
  {
    extract:
      '"Did my heart love till now? Forswear it, sight!\nFor I ne\'er saw true beauty till this night."',
    source: 'Romeo and Juliet - Shakespeare',
    correctDevice: 'Rhyming couplet',
    options: ['Rhyming couplet', 'Internal rhyme', 'Half-rhyme', 'Blank verse'],
    tier: 2,
  },
  {
    extract: '"Come what come may,\nTime and the hour runs through the roughest day."',
    source: 'Macbeth - Shakespeare',
    correctDevice: 'Rhyming couplet',
    options: ['Rhyming couplet', 'Internal rhyme', 'Half-rhyme', 'Blank verse'],
    tier: 2,
  },
  {
    extract:
      '"the sign of the house (the Ship) was creaking and banging about, with noises that startled me"',
    source: 'Great Expectations - Dickens',
    correctDevice: 'Onomatopoeia',
    options: ['Onomatopoeia', 'Simile', 'Personification', 'Hyperbole'],
    tier: 1,
  },
  {
    extract: '"a flock of geese hissing after them and pecking at their calves all the way"',
    source: 'Animal Farm - Orwell',
    correctDevice: 'Onomatopoeia',
    options: ['Onomatopoeia', 'Alliteration', 'Personification', 'Simile'],
    tier: 1,
  },
  {
    extract:
      '"the leaves rustled harmoniously when I stopped to listen; but, the clink of Joe\'s hammer was not in the midsummer wind"',
    source: 'Great Expectations - Dickens',
    correctDevice: 'Something at the forge has changed',
    options: [
      'Something at the forge has changed',
      'The forge has been sold to a stranger',
      'Joe has hurt his hand at work',
      'Pip is glad the noise has stopped',
    ],
    tier: 3,
    device: 'Onomatopoeia',
    prompt: "What does the missing 'clink' of Joe's hammer suggest?",
  },
]

export const BANK: GameBank<AnalysisQuestion> = {
  slug: 'speed-analysis',
  items: QUESTIONS,
  // No two extracts are the same, and the extract is what the student sees.
  key: (q) => q.extract,
  answer: (q) => q.correctDevice,
  options: (q) => q.options,
  // The device, also for an effect question, whose answer is an effect.
  tag: (q) => q.device ?? q.correctDevice,
  tier: (q) => q.tier,
  // Two lines from one poem, play or novel never share a round.
  facts: (q) => (SITE_SOURCES.has(q.source) ? [] : [q.source]),
  deepened: '2026-10-24',
}
