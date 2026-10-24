import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Spelling Bee: hear a word read aloud, read its definition, and type the
 * spelling. A round is five Foundation words, then eight Crossover and seven
 * Higher.
 *
 * Moved out of src/app/games/spelling-bee/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * The student types the answer, so no question has options, and what they type
 * is never recorded or sent: only whether the spelling was right. Two words
 * have a second spelling dictionaries accept, enjambement and dénouement (with
 * the accent). Until 23 October 2026 the game marked only the usual English
 * form right, because accepting the other is a scoring decision; the founder
 * then decided it, and each is listed in `alsoAccepted`, which the page accepts
 * (src/lib/games/scoring.ts). The explanations for those two words say so.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "weak in
 * depth and content"; the audit (.tmp-games-audit/REPORT-gcse.md) found this
 * bank had 42 words, that a student had met 41 of them by round 6, that no
 * word was ever used in a sentence, and that two definitions spelt their own
 * word ("Having many syllables" for polysyllabic; antagonist defined by
 * protagonist). It now holds 402: 100 Foundation, 159 Crossover, 143 Higher,
 * enough for nineteen full rounds of words a student has not met.
 *
 *   - Foundation: the everyday words examiners report misspelt in exam
 *     answers (believe, government, persuade, Wednesday, rhyme, audience).
 *   - Crossover: the terms of literary and language analysis (caesura,
 *     hyperbole, sibilance, pentameter, hamartia, anaphora, apostrophe), the
 *     harder words examiners list (rhythm, occurrence, harass, millennium),
 *     British spellings (analyse, travelled, defence, manoeuvre) and twenty
 *     set-text names (Banquo, Birling, Prospero, Utterson, Capulet).
 *   - Higher: the right word for the sentence, a new kind. Ninety-nine words
 *     that sound like another, or close to it (affect and effect, practice
 *     and practise, licence and license, principal and principle, heir,
 *     throne), each with a `sentence` whose gap decides the spelling, shown
 *     under the definition; the student still types one word. With them,
 *     twenty-one harder names (Havisham, Mercutio, Jekyll, Ozymandias,
 *     Shakespeare, Priestley) and nine hard words of analysis (omniscient,
 *     synecdoche, bureaucracy).
 *
 * REAL TEXT FIRST. The founder, 24 October 2026: "use as much actual text as
 * possible". Of the hundred sentences, 86 are real lines copied exactly from
 * the texts out of UK copyright in src/data/full-texts (Jane Eyre, Great
 * Expectations, Frankenstein, Pride and Prejudice, the plays and others),
 * each with its `source`, shown under it. The other fourteen are the
 * site's own, written only where no line in those texts uses the word in
 * the sense taught: older writers spell the noun "license" and use
 * "affect" to mean love, so a line had to show the modern British use.
 *
 * Each word names its spelling `trap`, which the dealer spreads through a
 * round (BANK.group), and a `family` where seeing one word spelt would help
 * with another: the two of a pair, words built on one root (occurred and
 * occurrence), two names from one text, or a source that names a word in the
 * bank (a line from Pride and Prejudice shares a family with prejudice). No
 * two of a family share a round (BANK.facts). No definition, sentence or
 * explanation spells another word in the bank unless the two share a family:
 * "with bated breath" must name breath, so bated is in its family. One
 * Crossover term has a sentence too: fallacy, in "pathetic ___".
 *
 * Every word added but two has one spelling in British dictionaries (caesura
 * and hubris, see CHECKED below). Words with a second accepted spelling
 * (judgement, focused, role, loath, sergeant, supersede, motif) were left
 * out: accepting it would be a scoring decision,
 * and src/__tests__/game-scoring-follows-the-founders-decisions.test.ts holds
 * `alsoAccepted` to the two the founder decided. Their, there, its and your
 * were left out too: they appear in almost every explanation, so the dealer
 * would read each as a give-away, and the KS3 Homophone Hero game drills them.
 * Consonance was left out because its root, consonant, is in many
 * explanations.
 *
 * Existing words fixed, each because its definition broke the rule above:
 * antagonist and polysyllabic (they spelt their own word); quintessential
 * (five letters of the word in a row); embarrass (awkward), allegory (moral),
 * soliloquy (aloud), alliteration (repetition), verisimilitude
 * (appearance), achieve (successfully), didacticism (practice, moral) and
 * definitely (doubt), each of which now names another word in the bank.
 * Their tiers and keys are unchanged, and nothing was removed.
 *
 * CHECKED (24 October 2026) by a second, independent reader, as the founder
 * decided. Every sourced sentence matches its held text word for word, in
 * the chapter, scene or stave named; every author of one died in 1950 or
 * before; every set-text name is spelt as its text spells it (for a text in
 * copyright, its study guide). Fixed:
 *   - precede, eminent, incite: the site's own sentence gave way to a real
 *     line that serves as well (Jane Eyre, Chapter 13; The Scarlet Letter,
 *     Chapter 11; King Henry V, Act 1, Scene 2), each checked against its text;
 *   - practise: the definition gave only "to improve at it", but in its line
 *     from Silas Marner the word means to act on what you know; it now gives
 *     both senses;
 *   - didacticism: the definition named a kind of writing, not the quality.
 * Left for the founder, because accepting a spelling is a scoring decision:
 * caesura and hubris each have a rarer form that Collins lists, cesura and
 * hybris, which the game marks wrong. Either becomes `alsoAccepted` (and the
 * scoring test's list of two grows) or the word leaves the bank.
 */

/** The spelling trap a word tests. A round spreads them (BANK.group). */
export type Trap =
  | 'double letters'
  | 'tricky vowel'
  | 'silent letter'
  | 'ie or ei'
  | 'adding an ending'
  | 'adding a beginning'
  | 'similar endings'
  | 'from Greek'
  | 'from French'
  | 'from Latin'
  | 'British spelling'
  | 'set-text name'
  | 'sounds the same'
  | 'sounds close'

export interface SpellingWord {
  word: string
  definition: string
  difficulty: 1 | 2 | 3
  /** Other spellings dictionaries accept, marked right too (see the docblock). */
  alsoAccepted?: string[]
  /** The spelling trap the word tests. */
  trap: Trap
  /**
   * A sentence the word belongs in, its place shown as ___ under the
   * definition. For a word that sounds like another, the sentence is what
   * decides which spelling is right. The student still types one word.
   * Wherever a real line serves, it is copied exactly from a text out of UK
   * copyright (src/data/full-texts), lines of verse joined by " / ", with only
   * the speech marks round the whole line dropped.
   */
  sentence?: string
  /**
   * Where a real sentence comes from, as the study guides cite it ("Macbeth,
   * Act 1, Scene 1"), shown under it. Absent where the sentence is the site's
   * own, written because no real line uses the word in this sense.
   */
  source?: string
  /**
   * Words that share a root, or are confused with each other, so that seeing
   * one spelt would help with another. No two that share one are dealt in one
   * round (BANK.facts).
   */
  family?: string | readonly string[]
}

export const SPELLING_BANK: SpellingWord[] = [
  // Difficulty 1 - Foundation
  {
    word: 'definitely',
    definition: 'Without any question; certainly',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  { word: 'separate', definition: 'To divide or keep apart', difficulty: 1, trap: 'tricky vowel' },
  {
    word: 'necessary',
    definition: 'Required; essential',
    difficulty: 1,
    trap: 'double letters',
    family: 'necessary',
  },
  {
    word: 'environment',
    definition: 'The surroundings or conditions in which something exists',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'beginning',
    definition: 'The start or first part of something',
    difficulty: 1,
    trap: 'adding an ending',
  },
  {
    word: 'occurred',
    definition: 'Happened or took place',
    difficulty: 1,
    trap: 'adding an ending',
    family: 'occur',
  },
  {
    word: 'disappoint',
    definition: 'To fail to meet expectations',
    difficulty: 1,
    trap: 'adding a beginning',
    family: 'dis',
  },
  {
    word: 'argument',
    definition: 'A reason or set of reasons given in support of an idea',
    difficulty: 1,
    trap: 'adding an ending',
  },
  {
    word: 'receive',
    definition: 'To be given or presented with something',
    difficulty: 1,
    trap: 'ie or ei',
    family: 'cei',
  },
  {
    word: 'achieve',
    definition: 'To reach a goal through effort',
    difficulty: 1,
    trap: 'ie or ei',
  },
  {
    word: 'conscience',
    definition: 'An inner feeling of right and wrong',
    difficulty: 1,
    trap: 'from Latin',
    family: 'consci',
  },
  {
    word: 'privilege',
    definition: 'A special right or advantage',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'accommodate',
    definition: 'To provide space or lodging for',
    difficulty: 1,
    trap: 'double letters',
  },
  {
    word: 'embarrass',
    definition: 'To make someone feel ashamed or uncomfortable in front of others',
    difficulty: 1,
    trap: 'double letters',
    family: 'embarrass',
  },
  // Added 24 October 2026: words examiners report misspelt in exam answers.
  {
    word: 'believe',
    definition: 'To accept that something is true or real',
    difficulty: 1,
    trap: 'ie or ei',
    family: 'believe',
  },
  {
    word: 'government',
    definition: 'The people in charge of running a country',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'persuade',
    definition: 'To talk someone into doing or thinking something',
    difficulty: 1,
    trap: 'from Latin',
    family: 'persuade',
  },
  {
    word: 'disappear',
    definition: 'To vanish from sight',
    difficulty: 1,
    trap: 'adding a beginning',
    family: 'dis',
  },
  {
    word: 'dissatisfied',
    definition: 'Not pleased with how something has turned out',
    difficulty: 1,
    trap: 'adding a beginning',
    family: 'dis',
  },
  {
    word: 'interrupt',
    definition: 'To break in while someone else is speaking',
    difficulty: 1,
    trap: 'double letters',
  },
  {
    word: 'immediately',
    definition: 'At once; without any delay',
    difficulty: 1,
    trap: 'double letters',
  },
  {
    word: 'surprise',
    definition: 'A sudden, unexpected event or feeling',
    difficulty: 1,
    trap: 'silent letter',
  },
  { word: 'tomorrow', definition: 'The day after today', difficulty: 1, trap: 'double letters' },
  {
    word: 'Wednesday',
    definition: 'The middle day of the Monday to Friday week',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'February',
    definition: 'The second month of the year',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'beautiful',
    definition: 'Very pleasing to look at or listen to',
    difficulty: 1,
    trap: 'from French',
  },
  {
    word: 'business',
    definition: 'Buying and selling, or a company that does it',
    difficulty: 1,
    trap: 'adding an ending',
  },
  {
    word: 'foreign',
    definition: 'From or belonging to another country',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'sincerely',
    definition: 'Honestly and genuinely; meaning what you say',
    difficulty: 1,
    trap: 'adding an ending',
  },
  {
    word: 'unfortunately',
    definition: 'Sadly; by bad luck',
    difficulty: 1,
    trap: 'adding an ending',
  },
  {
    word: 'address',
    definition: 'The house number, street and town where someone lives',
    difficulty: 1,
    trap: 'double letters',
  },
  {
    word: 'across',
    definition: 'From one side to the other',
    difficulty: 1,
    trap: 'double letters',
  },
  {
    word: 'awkward',
    definition: 'Clumsy, or uncomfortable and hard to deal with',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'calendar',
    definition: 'A chart showing the days, weeks and months of a year',
    difficulty: 1,
    trap: 'similar endings',
  },
  {
    word: 'committee',
    definition: 'A group of people chosen to make decisions for a larger group',
    difficulty: 1,
    trap: 'double letters',
  },
  {
    word: 'desperate',
    definition: 'Feeling that things are so bad you would try anything',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'discipline',
    definition: 'Training people to obey rules, and the control it produces',
    difficulty: 1,
    trap: 'silent letter',
  },
  { word: 'excellent', definition: 'Extremely good', difficulty: 1, trap: 'similar endings' },
  {
    word: 'existence',
    definition: 'The state of being real or alive',
    difficulty: 1,
    trap: 'similar endings',
  },
  {
    word: 'familiar',
    definition: 'Well known to you; seen or heard many times before',
    difficulty: 1,
    trap: 'similar endings',
  },
  { word: 'forty', definition: 'Ten more than thirty', difficulty: 1, trap: 'tricky vowel' },
  {
    word: 'grammar',
    definition: 'The rules for how words are put together in a language',
    difficulty: 1,
    trap: 'similar endings',
  },
  {
    word: 'grateful',
    definition: 'Feeling or showing thanks',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'guard',
    definition: 'A person who watches over a place or a prisoner',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'height',
    definition: 'How tall someone or something is',
    difficulty: 1,
    trap: 'ie or ei',
  },
  {
    word: 'island',
    definition: 'A piece of land with water all around it',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'jealous',
    definition: 'Unhappy and resentful because of what someone else has',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'knowledge',
    definition: 'Facts, information and understanding gained by learning',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'library',
    definition: 'A place where books are kept for people to borrow',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'marriage',
    definition: 'The legal union of two people as partners for life',
    difficulty: 1,
    trap: 'adding an ending',
  },
  {
    word: 'neighbour',
    definition: 'Someone who lives next door or nearby',
    difficulty: 1,
    trap: 'British spelling',
  },
  {
    word: 'nervous',
    definition: 'Anxious, uneasy or easily frightened',
    difficulty: 1,
    trap: 'similar endings',
  },
  {
    word: 'occasion',
    definition: 'A particular time, or a special event',
    difficulty: 1,
    trap: 'double letters',
  },
  {
    word: 'opportunity',
    definition: 'A chance to do something',
    difficulty: 1,
    trap: 'double letters',
  },
  {
    word: 'possess',
    definition: 'To own or have something',
    difficulty: 1,
    trap: 'double letters',
    family: 'possess',
  },
  {
    word: 'queue',
    definition: 'A line of people waiting their turn',
    difficulty: 1,
    trap: 'from French',
  },
  {
    word: 'recommend',
    definition: 'To suggest that something is good or suitable',
    difficulty: 1,
    trap: 'double letters',
  },
  {
    word: 'restaurant',
    definition: 'A place where people pay to sit and eat meals',
    difficulty: 1,
    trap: 'from French',
  },
  {
    word: 'rhyme',
    definition: 'When words end with the same sound, as cat and hat do',
    difficulty: 1,
    trap: 'from Greek',
  },
  {
    word: 'scissors',
    definition: 'A cutting tool with two blades joined in the middle',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'soldier',
    definition: 'A person who serves in an army',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'strength',
    definition: 'Physical power or toughness',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'success',
    definition: 'Getting what you aimed for',
    difficulty: 1,
    trap: 'double letters',
    family: 'succe',
  },
  {
    word: 'succeed',
    definition: 'To manage to do what you were trying to do',
    difficulty: 1,
    trap: 'similar endings',
    family: ['succe', 'cede'],
  },
  {
    word: 'tongue',
    definition: 'The soft, movable part inside your mouth used for tasting',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'truly',
    definition: 'In a real and honest way; genuinely',
    difficulty: 1,
    trap: 'adding an ending',
  },
  { word: 'weird', definition: 'Very strange or unusual', difficulty: 1, trap: 'ie or ei' },
  {
    word: 'temperature',
    definition: 'How hot or cold something is',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'eighth',
    definition: 'Coming next after the seventh',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'twelfth',
    definition: 'Coming next after the eleventh',
    difficulty: 1,
    trap: 'silent letter',
    family: 'twelfth',
  },
  {
    word: 'vehicle',
    definition: 'A machine such as a car, bus or lorry that carries people or goods',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'medicine',
    definition: 'A drug or remedy taken to treat an illness',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'loneliness',
    definition: 'Sadness at being without friends or company',
    difficulty: 1,
    trap: 'adding an ending',
  },
  {
    word: 'independent',
    definition: 'Free from the control of others; able to manage alone',
    difficulty: 1,
    trap: 'similar endings',
  },
  {
    word: 'intelligence',
    definition: 'The ability to learn, understand and think clearly',
    difficulty: 1,
    trap: 'similar endings',
  },
  {
    word: 'laboratory',
    definition: 'A room equipped for scientific experiments',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'ridiculous',
    definition: 'So silly that it deserves to be laughed at',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'category',
    definition: 'A group of things that share a type or quality',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'aggressive',
    definition: 'Ready to attack or confront others',
    difficulty: 1,
    trap: 'double letters',
  },
  {
    word: 'apparently',
    definition: 'As far as anyone can tell; so it seems',
    difficulty: 1,
    trap: 'double letters',
    family: 'appar',
  },
  {
    word: 'appearance',
    definition: 'The way someone or something looks',
    difficulty: 1,
    trap: 'similar endings',
  },
  {
    word: 'atmosphere',
    definition: 'The mood or feeling of a place; also the air around the Earth',
    difficulty: 1,
    trap: 'from Greek',
  },
  {
    word: 'audience',
    definition: 'The people watching or listening to a performance',
    difficulty: 1,
    trap: 'similar endings',
  },
  {
    word: 'punctuation',
    definition: 'Marks such as commas and full stops that organise writing',
    difficulty: 1,
    trap: 'silent letter',
  },
  {
    word: 'explanation',
    definition: 'A statement that makes something clear or gives a reason for it',
    difficulty: 1,
    trap: 'adding an ending',
  },
  {
    word: 'accidentally',
    definition: 'By chance, without meaning to',
    difficulty: 1,
    trap: 'adding an ending',
  },
  {
    word: 'ceiling',
    definition: 'The inside surface at the top of a room',
    difficulty: 1,
    trap: 'ie or ei',
    family: 'cei',
  },
  {
    word: 'deceive',
    definition: 'To trick someone into accepting something untrue',
    difficulty: 1,
    trap: 'ie or ei',
    family: 'cei',
  },
  {
    word: 'exaggerate',
    definition: 'To make something seem bigger or more important than it is',
    difficulty: 1,
    trap: 'double letters',
  },
  {
    word: 'favourite',
    definition: 'Liked more than all the others',
    difficulty: 1,
    trap: 'British spelling',
  },
  // Added 24 October 2026, second pass.
  {
    word: 'column',
    definition: 'A tall pillar; also a block of print running down a newspaper page',
    difficulty: 1,
    trap: 'silent letter',
    family: 'mn',
  },
  {
    word: 'autumn',
    definition: 'The season between summer and winter',
    difficulty: 1,
    trap: 'silent letter',
    family: 'mn',
  },
  {
    word: 'doubt',
    definition: 'A feeling of being unsure whether something is true',
    difficulty: 1,
    trap: 'silent letter',
    family: 'silent-b',
  },
  {
    word: 'debt',
    definition: 'Money or a favour that is owed to someone',
    difficulty: 1,
    trap: 'silent letter',
    family: 'silent-b',
  },
  {
    word: 'solemn',
    definition: 'Serious and dignified, without any joking',
    difficulty: 1,
    trap: 'silent letter',
    family: 'mn',
  },
  {
    word: 'colleague',
    definition: 'Someone you work with',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'pursue',
    definition: 'To follow or chase; also to work towards a goal',
    difficulty: 1,
    trap: 'tricky vowel',
  },
  {
    word: 'secretary',
    definition: 'Someone who handles letters, records and arrangements for a person or group',
    difficulty: 1,
    trap: 'similar endings',
  },
  {
    word: 'persistent',
    definition: 'Carrying on firmly, refusing to give up',
    difficulty: 1,
    trap: 'similar endings',
  },
  {
    word: 'hygiene',
    definition: 'Keeping yourself and your surroundings clean to stay healthy',
    difficulty: 1,
    trap: 'ie or ei',
  },
  // Difficulty 2 - Crossover
  {
    word: 'metaphor',
    definition: 'A figure of speech comparing two unlike things directly',
    difficulty: 2,
    trap: 'from Greek',
    family: 'metaphor',
  },
  {
    word: 'simile',
    definition: 'A comparison using "like" or "as"',
    difficulty: 2,
    trap: 'from Latin',
  },
  {
    word: 'allegory',
    definition: 'A story in which characters and events stand for ideas, often political ones',
    difficulty: 2,
    trap: 'from Greek',
    family: 'allegory',
  },
  {
    word: 'soliloquy',
    definition: 'A speech in which a character, alone on stage, voices their thoughts',
    difficulty: 2,
    trap: 'from Latin',
  },
  {
    word: 'juxtaposition',
    definition: 'Placing two things side by side for contrast',
    difficulty: 2,
    trap: 'from Latin',
    family: 'juxta',
  },
  {
    word: 'onomatopoeia',
    definition: 'Words that imitate the sound they describe',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'alliteration',
    definition: 'The same first sound, usually a consonant, in words close together',
    difficulty: 2,
    trap: 'double letters',
  },
  {
    word: 'personification',
    definition: 'Giving human qualities to non-human things',
    difficulty: 2,
    trap: 'adding an ending',
  },
  {
    word: 'denouement',
    definition: 'The final resolution of a story',
    difficulty: 2,
    alsoAccepted: ['dénouement'],
    trap: 'from French',
  },
  {
    word: 'protagonist',
    definition: 'The leading character in a story',
    difficulty: 2,
    trap: 'from Greek',
    family: 'agonist',
  },
  {
    word: 'antagonist',
    definition: 'The character or force that works against the hero of a story',
    difficulty: 2,
    trap: 'from Greek',
    family: 'agonist',
  },
  {
    word: 'foreshadowing',
    definition: 'Hints at what will happen later in the story',
    difficulty: 2,
    trap: 'adding a beginning',
    family: 'fore',
  },
  {
    word: 'verisimilitude',
    definition: 'The quality of seeming true or real',
    difficulty: 2,
    trap: 'from Latin',
  },
  {
    word: 'enjambment',
    definition: 'A sentence running over a line break in poetry',
    difficulty: 2,
    alsoAccepted: ['enjambement'],
    trap: 'from French',
  },
  // Added 24 October 2026: the terms of literary and language analysis.
  {
    word: 'caesura',
    definition: 'A pause near the middle of a line of verse, often marked by a full stop or comma',
    difficulty: 2,
    trap: 'from Latin',
  },
  {
    word: 'hyperbole',
    definition: 'Overstatement used on purpose, never meant to be taken literally',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'metaphorical',
    definition: 'Not literal; describing one thing as if it were another',
    difficulty: 2,
    trap: 'adding an ending',
    family: 'metaphor',
  },
  {
    word: 'oxymoron',
    definition: "Two words of opposite meaning placed together, as in 'deafening silence'",
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'sibilance',
    definition: 'The repeated hissing of s and sh sounds in nearby words',
    difficulty: 2,
    trap: 'similar endings',
    family: 'sound-ance',
  },
  {
    word: 'assonance',
    definition: "The same vowel sound repeated in words close together, as in 'cold' and 'stone'",
    difficulty: 2,
    trap: 'similar endings',
    family: 'sound-ance',
  },
  {
    word: 'rhetorical',
    definition: 'Of a question: asked to make a point, not to get an answer',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'anecdote',
    definition: 'A short, often personal story told to make a point',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'imperative',
    definition: "A verb form that gives a command, as in 'Stop' or 'Listen'",
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'colloquial',
    definition: 'Chatty and relaxed, like everyday speech',
    difficulty: 2,
    trap: 'from Latin',
    family: 'colloquial',
  },
  {
    word: 'euphemism',
    definition: "A mild or polite word used in place of a harsh one, as 'pass away' is for 'die'",
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'satirical',
    definition: 'Mocking people or society to expose their faults',
    difficulty: 2,
    trap: 'adding an ending',
  },
  {
    word: 'sonnet',
    definition: 'A poem of fourteen lines, often about love',
    difficulty: 2,
    trap: 'double letters',
  },
  {
    word: 'iambic',
    definition:
      "Describes a beat pattern of one unstressed syllable then one stressed, as in 'alone'",
    difficulty: 2,
    trap: 'from Greek',
    family: 'pentameter',
  },
  {
    word: 'pentameter',
    definition: 'A line of verse with five strong beats',
    difficulty: 2,
    trap: 'from Greek',
    family: 'pentameter',
  },
  {
    word: 'prologue',
    definition: 'An opening section that introduces a play or story',
    difficulty: 2,
    trap: 'from Greek',
    family: 'logue',
  },
  {
    word: 'dialogue',
    definition: 'Conversation between characters, as written in a story or play',
    difficulty: 2,
    trap: 'British spelling',
    family: 'logue',
  },
  {
    word: 'narrator',
    definition: 'The voice or person telling a story',
    difficulty: 2,
    trap: 'double letters',
    family: 'narra',
  },
  {
    word: 'chronological',
    definition: 'Arranged in the order in which events happened',
    difficulty: 2,
    trap: 'from Greek',
    family: 'chron',
  },
  {
    word: 'cyclical',
    definition: 'Ending where it began, so that the story or poem forms a circle',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'symbolism',
    definition: 'Using objects, colours or events to stand for ideas',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'imagery',
    definition: "Language that creates pictures in a reader's mind",
    difficulty: 2,
    trap: 'adding an ending',
  },
  {
    word: 'connotation',
    definition: 'An idea or feeling a word suggests beyond its literal meaning',
    difficulty: 2,
    trap: 'double letters',
  },
  {
    word: 'ambiguous',
    definition: 'Open to more than one meaning',
    difficulty: 2,
    trap: 'similar endings',
  },
  {
    word: 'hamartia',
    definition: "The fatal flaw that brings about a tragic hero's downfall",
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'tragedy',
    definition: 'A serious play that ends in the downfall or death of its hero',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'cacophony',
    definition: 'A harsh, jarring mixture of sounds',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'stereotype',
    definition: 'A fixed, oversimplified idea of what a type of person is like',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'archetype',
    definition:
      'A perfect, typical model of a kind of character or story, such as the wise old mentor',
    difficulty: 2,
    trap: 'from Greek',
    family: 'arch',
  },
  {
    word: 'antithesis',
    definition: 'Opposite ideas set against each other in balanced phrases',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'ellipsis',
    definition: 'Three dots showing that words are missing or that a voice trails off',
    difficulty: 2,
    trap: 'double letters',
  },
  {
    word: 'parenthesis',
    definition: 'Extra information placed inside a sentence between brackets, dashes or commas',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'apostrophe',
    definition:
      'The raised comma that shows a missing letter, or that something belongs to someone',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'auxiliary',
    definition: "A helping verb, such as 'have', 'be' or 'do', used with a main verb",
    difficulty: 2,
    trap: 'from Latin',
  },
  {
    word: 'persuasive',
    definition: 'Designed to talk people into agreeing or acting',
    difficulty: 2,
    trap: 'adding an ending',
    family: 'persuade',
  },
  {
    word: 'patriarchal',
    definition: 'Describes a society in which men hold the power',
    difficulty: 2,
    trap: 'from Greek',
    family: 'arch',
  },
  {
    word: 'hierarchy',
    definition: 'A system in which people are ranked one above another',
    difficulty: 2,
    trap: 'from Greek',
    family: 'arch',
  },
  {
    word: 'apparition',
    definition: 'A ghostly figure or vision',
    difficulty: 2,
    trap: 'double letters',
    family: 'appar',
  },
  {
    word: 'fallacy',
    definition: 'A mistaken belief',
    sentence:
      "When the weather seems to share a character's feelings, critics call it pathetic ___.",
    difficulty: 2,
    trap: 'double letters',
  },
  {
    word: 'epiphany',
    definition: 'A sudden moment of realisation that changes how someone sees things',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'interpretation',
    definition: 'One way of explaining what something means',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'perspective',
    definition: 'A point of view; a particular way of seeing something',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'analyse',
    definition: 'To examine something closely to show how it works',
    difficulty: 2,
    trap: 'British spelling',
  },
  {
    word: 'sceptical',
    definition: 'Not easily convinced; inclined to question claims',
    difficulty: 2,
    trap: 'British spelling',
  },
  {
    word: 'travelled',
    definition: 'Went from one place to another; made a journey',
    difficulty: 2,
    trap: 'British spelling',
  },
  {
    word: 'jewellery',
    definition: 'Rings, necklaces and other ornaments worn on the body',
    difficulty: 2,
    trap: 'British spelling',
  },
  {
    word: 'defence',
    definition: 'Protection against attack; also the case made for someone accused in court',
    difficulty: 2,
    trap: 'British spelling',
  },
  {
    word: 'fulfil',
    definition: 'To carry out a promise, a duty or a dream',
    difficulty: 2,
    trap: 'British spelling',
  },
  {
    word: 'skilful',
    definition: 'Having or showing great ability',
    difficulty: 2,
    trap: 'British spelling',
  },
  {
    word: 'manoeuvre',
    definition: 'A careful movement, or a clever plan to gain an advantage',
    difficulty: 2,
    trap: 'British spelling',
  },
  {
    word: 'rhythm',
    definition: 'The pattern of strong and weak beats in music or speech',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'occurrence',
    definition: 'Something that happens; an event',
    difficulty: 2,
    trap: 'double letters',
    family: 'occur',
  },
  {
    word: 'believable',
    definition: 'Convincing enough to be accepted as true',
    difficulty: 2,
    trap: 'adding an ending',
    family: 'believe',
  },
  {
    word: 'embarrassment',
    definition: 'The hot, uncomfortable feeling of being shamed in front of others',
    difficulty: 2,
    trap: 'double letters',
    family: 'embarrass',
  },
  {
    word: 'harass',
    definition: 'To trouble or pester someone again and again',
    difficulty: 2,
    trap: 'double letters',
    family: 'embarrass',
  },
  {
    word: 'acquaintance',
    definition: 'Someone you know slightly, but not well',
    difficulty: 2,
    trap: 'from Latin',
  },
  {
    word: 'cemetery',
    definition: 'A large burial ground, not beside a church',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'fascinating',
    definition: 'Extremely interesting; impossible to stop looking at',
    difficulty: 2,
    trap: 'silent letter',
  },
  {
    word: 'guarantee',
    definition: 'A firm promise that something will happen or work',
    difficulty: 2,
    trap: 'silent letter',
  },
  {
    word: 'hypocrisy',
    definition: 'Claiming to have standards or beliefs that you do not live up to',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'irrelevant',
    definition: 'Not connected with the matter being discussed',
    difficulty: 2,
    trap: 'adding a beginning',
  },
  {
    word: 'irresistible',
    definition: 'Too strong or tempting to be refused',
    difficulty: 2,
    trap: 'similar endings',
  },
  {
    word: 'leisure',
    definition: 'Free time, when you are not working',
    difficulty: 2,
    trap: 'ie or ei',
  },
  {
    word: 'maintenance',
    definition: 'The work of keeping something in good condition',
    difficulty: 2,
    trap: 'adding an ending',
  },
  {
    word: 'millennium',
    definition: 'A period of a thousand years',
    difficulty: 2,
    trap: 'double letters',
  },
  {
    word: 'mischievous',
    definition: 'Playfully naughty; fond of causing trouble',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'noticeable',
    definition: 'Easy to see or spot',
    difficulty: 2,
    trap: 'adding an ending',
  },
  {
    word: 'nuisance',
    definition: 'A person or thing that causes annoyance',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'parallel',
    definition: 'Side by side and always the same distance apart; also, very alike',
    difficulty: 2,
    trap: 'double letters',
  },
  {
    word: 'parliament',
    definition: "The group of elected people who make a country's laws",
    difficulty: 2,
    trap: 'silent letter',
  },
  {
    word: 'perseverance',
    definition: 'Carrying on with something even when it is difficult',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'playwright',
    definition: 'A person who writes plays',
    difficulty: 2,
    trap: 'silent letter',
  },
  {
    word: 'possession',
    definition: 'Something you own, or the state of owning it',
    difficulty: 2,
    trap: 'double letters',
    family: 'possess',
  },
  {
    word: 'preferred',
    definition: 'Liked better; chose first',
    difficulty: 2,
    trap: 'adding an ending',
  },
  {
    word: 'prejudice',
    definition: 'An unfair opinion formed before knowing the facts',
    difficulty: 2,
    trap: 'tricky vowel',
    family: 'austen',
  },
  {
    word: 'pronunciation',
    definition: 'The way a word is spoken',
    difficulty: 2,
    trap: 'adding an ending',
  },
  {
    word: 'questionnaire',
    definition: 'A printed or online form that asks people for their views in a survey',
    difficulty: 2,
    trap: 'from French',
  },
  {
    word: 'receipt',
    definition: 'A slip of paper showing that something has been paid for',
    difficulty: 2,
    trap: 'silent letter',
    family: 'cei',
  },
  {
    word: 'repetition',
    definition: 'Saying or doing the same thing again',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'sacrifice',
    definition: 'Giving up something you value for the sake of something else',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'schedule',
    definition: 'A plan listing when things will happen',
    difficulty: 2,
    trap: 'silent letter',
  },
  {
    word: 'seize',
    definition: 'To grab or take hold of something suddenly',
    difficulty: 2,
    trap: 'ie or ei',
  },
  {
    word: 'siege',
    definition: 'Surrounding a town or castle to force it to surrender',
    difficulty: 2,
    trap: 'ie or ei',
  },
  {
    word: 'subtle',
    definition: 'Delicate and hard to notice; not obvious',
    difficulty: 2,
    trap: 'silent letter',
    family: 'silent-b',
  },
  {
    word: 'tyranny',
    definition: 'Cruel and unjust rule by one powerful person',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'unnecessary',
    definition: 'Not needed',
    difficulty: 2,
    trap: 'adding a beginning',
    family: 'necessary',
  },
  {
    word: 'villain',
    definition: 'The wicked character in a story or play',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'vicious',
    definition: 'Cruel and violent, or meant to hurt',
    difficulty: 2,
    trap: 'similar endings',
  },
  {
    word: 'vocabulary',
    definition: 'All the words a person knows or uses',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'regicide',
    definition: 'The killing of a king',
    difficulty: 2,
    trap: 'from Latin',
  },
  {
    word: 'ambitious',
    definition: 'Hungry to rise, and to win power, wealth or fame',
    difficulty: 2,
    trap: 'similar endings',
  },
  {
    word: 'benevolent',
    definition: 'Kind and generous; wishing good to others',
    difficulty: 2,
    trap: 'from Latin',
    family: 'volent',
  },
  {
    word: 'malevolent',
    definition: 'Wishing harm to others',
    difficulty: 2,
    trap: 'from Latin',
    family: 'volent',
  },
  {
    word: 'Elizabethan',
    definition: 'From the time of the Tudor queen who ruled England from 1558 to 1603',
    difficulty: 2,
    trap: 'adding an ending',
    family: 'era',
  },
  {
    word: 'Jacobean',
    definition: 'From the time of King James I, who ruled England from 1603 to 1625',
    difficulty: 2,
    trap: 'from Latin',
    family: 'era',
  },
  {
    word: 'aristocracy',
    definition: 'The highest social class, whose titles and land are inherited',
    difficulty: 2,
    trap: 'from Greek',
    family: 'cracy',
  },
  {
    word: 'sovereign',
    definition: 'A king or queen who rules a country',
    difficulty: 2,
    trap: 'silent letter',
  },
  {
    word: 'yacht',
    definition: 'A sailing boat used for racing or pleasure trips',
    difficulty: 2,
    trap: 'silent letter',
  },
  {
    word: 'curiosity',
    definition: 'A strong wish to know or learn something',
    difficulty: 2,
    trap: 'adding an ending',
  },
  // Added 24 October 2026: names from the set texts that students must spell
  // in an answer. Two from one text are never dealt in one round (family).
  {
    word: 'Banquo',
    definition: "Macbeth's fellow general, told by the witches that his descendants will be kings",
    difficulty: 2,
    trap: 'set-text name',
    family: 'macbeth',
  },
  {
    word: 'Birling',
    definition: 'The surname of the wealthy family in An Inspector Calls',
    difficulty: 2,
    trap: 'set-text name',
    family: 'inspector',
  },
  {
    word: 'Prospero',
    definition: 'The exiled Duke of Milan whose magic drives the plot of The Tempest',
    difficulty: 2,
    trap: 'set-text name',
    family: 'tempest',
  },
  {
    word: 'Utterson',
    definition: "The calm lawyer who investigates his friend's link to Mr Hyde",
    difficulty: 2,
    trap: 'set-text name',
    family: 'jekyll',
  },
  {
    word: 'Tybalt',
    definition: "Juliet's hot-tempered cousin, mocked as the Prince of Cats",
    difficulty: 2,
    trap: 'set-text name',
    family: 'romeo',
  },
  {
    word: 'Benvolio',
    definition: "Romeo's cousin, who tries to keep the peace in the opening brawl",
    difficulty: 2,
    trap: 'set-text name',
    family: 'romeo',
  },
  {
    word: 'Capulet',
    definition: "The surname of Juliet's family",
    difficulty: 2,
    trap: 'set-text name',
    family: 'romeo',
  },
  {
    word: 'Montague',
    definition: "The surname of Romeo's family",
    difficulty: 2,
    trap: 'set-text name',
    family: 'romeo',
  },
  {
    word: 'Macduff',
    definition: 'The Thane of Fife, who kills Macbeth in the final act',
    difficulty: 2,
    trap: 'set-text name',
    family: 'macbeth',
  },
  {
    word: 'Fleance',
    definition: "The son who escapes when his father is ambushed on Macbeth's orders",
    difficulty: 2,
    trap: 'set-text name',
    family: 'macbeth',
  },
  {
    word: 'Estella',
    definition: "The proud girl Pip loves, raised by a jilted bride to break men's hearts",
    difficulty: 2,
    trap: 'set-text name',
    family: 'expectations',
  },
  {
    word: 'Magwitch',
    definition: 'The escaped convict Pip helps on the marshes, later revealed as his benefactor',
    difficulty: 2,
    trap: 'set-text name',
    family: 'expectations',
  },
  {
    word: 'Lanyon',
    definition: 'The doctor who dies of shock after seeing Hyde transform',
    difficulty: 2,
    trap: 'set-text name',
    family: 'jekyll',
  },
  {
    word: 'Squealer',
    definition: 'The smooth-talking pig who twists the truth for Napoleon in Animal Farm',
    difficulty: 2,
    trap: 'set-text name',
  },
  {
    word: 'Lennie',
    definition: 'The gentle, very strong man who travels with George in Of Mice and Men',
    difficulty: 2,
    trap: 'set-text name',
    family: 'mice',
  },
  {
    word: 'Curley',
    definition: "The boss's hot-headed son, who picks fights with bigger men, in Of Mice and Men",
    difficulty: 2,
    trap: 'set-text name',
    family: 'mice',
  },
  {
    word: 'Shelley',
    definition:
      'The surname shared by a Romantic poet and his wife, who wrote a famous gothic novel',
    difficulty: 2,
    trap: 'set-text name',
    family: 'shelley',
  },
  {
    word: 'Tennyson',
    definition: "The surname of the Victorian poet who wrote 'The Charge of the Light Brigade'",
    difficulty: 2,
    trap: 'set-text name',
  },
  {
    word: 'Caliban',
    definition: 'The creature in The Tempest who says the land was his before the magician came',
    difficulty: 2,
    trap: 'set-text name',
    family: 'tempest',
  },
  {
    word: 'Shylock',
    definition: 'The moneylender in The Merchant of Venice who demands a pound of flesh',
    difficulty: 2,
    trap: 'set-text name',
  },
  // Added 24 October 2026, second pass: more terms of analysis.
  {
    word: 'anaphora',
    definition: 'Repeating the same word or phrase at the start of several lines or sentences',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'tricolon',
    definition: 'A list or group of three, used for emphasis',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'superlative',
    definition: "The form of an adjective meaning 'most', as in 'tallest' or 'best'",
    difficulty: 2,
    trap: 'from Latin',
  },
  {
    word: 'subordinate',
    definition: 'Of a clause: depending on the main clause, unable to stand alone as a sentence',
    difficulty: 2,
    trap: 'tricky vowel',
  },
  {
    word: 'interrogative',
    definition: 'Asking a question; a sentence that is a question',
    difficulty: 2,
    trap: 'double letters',
  },
  {
    word: 'exclamatory',
    definition: 'Expressing strong feeling with force, as a cry or an outburst does',
    difficulty: 2,
    trap: 'adding an ending',
  },
  {
    word: 'monologue',
    definition: 'A long speech by one person, often in a play',
    difficulty: 2,
    trap: 'from Greek',
    family: 'logue',
  },
  {
    word: 'narrative',
    definition: 'A story, or the way a story is told',
    difficulty: 2,
    trap: 'double letters',
    family: 'narra',
  },
  {
    word: 'quatrain',
    definition: 'A verse of four lines',
    difficulty: 2,
    trap: 'from French',
  },
  {
    word: 'couplet',
    definition: 'Two lines of verse in a row, usually ending in matching sounds',
    difficulty: 2,
    trap: 'from French',
  },
  {
    word: 'elegy',
    definition: 'A poem of mourning for someone who has died',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'epithet',
    definition: "A describing word or phrase attached to a name, such as 'rosy-fingered dawn'",
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'nemesis',
    definition: 'An enemy or force that a character cannot escape, often bringing just punishment',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'hubris',
    definition: 'Too much pride, the kind that leads to a downfall',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'pathos',
    definition: 'The quality in writing that stirs pity or sadness',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'plosive',
    definition: 'A consonant made with a burst of air, such as p, b, t, d, k or g',
    difficulty: 2,
    trap: 'from Latin',
  },
  {
    word: 'colloquialism',
    definition: "A chatty word or phrase from everyday speech, such as 'mate'",
    difficulty: 2,
    trap: 'adding an ending',
    family: 'colloquial',
  },
  {
    word: 'vernacular',
    definition: 'The everyday language spoken by ordinary people in a place',
    difficulty: 2,
    trap: 'from Latin',
  },
  {
    word: 'analogy',
    definition: 'A comparison that explains one thing by showing how it is like another',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'exposition',
    definition: 'The opening part of a story that introduces the characters and situation',
    difficulty: 2,
    trap: 'from Latin',
  },
  {
    word: 'grotesque',
    definition: 'Strangely ugly or distorted, in a way that is disturbing or comic',
    difficulty: 2,
    trap: 'from French',
  },
  {
    word: 'parody',
    definition: "An imitation of a writer's or artist's style, made to mock it",
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'sarcasm',
    definition: 'Saying the opposite of what you mean, in order to mock or hurt',
    difficulty: 2,
    trap: 'from Greek',
  },
  {
    word: 'allegorical',
    definition: 'Using a story whose characters and events stand for ideas',
    difficulty: 2,
    trap: 'adding an ending',
    family: 'allegory',
  },
  {
    word: 'didactic',
    definition: 'Meant to teach, especially a lesson about how to live',
    difficulty: 2,
    trap: 'from Greek',
    family: 'didact',
  },
  {
    word: 'juxtapose',
    definition: 'To place two things side by side to show a contrast',
    difficulty: 2,
    trap: 'from Latin',
    family: 'juxta',
  },
  // Difficulty 3 - Higher
  {
    word: 'sycophantic',
    definition: 'Behaving in a servile way to gain advantage',
    difficulty: 3,
    trap: 'from Greek',
  },
  {
    word: 'anachronism',
    definition: 'Something placed in the wrong historical period',
    difficulty: 3,
    trap: 'from Greek',
    family: 'chron',
  },
  {
    word: 'didacticism',
    definition:
      'The quality, in a piece of writing, of setting out to teach a lesson about how to live',
    difficulty: 3,
    trap: 'adding an ending',
    family: 'didact',
  },
  {
    word: 'catharsis',
    definition: 'The release of strong emotions through art or drama',
    difficulty: 3,
    trap: 'from Greek',
  },
  {
    word: 'polysyllabic',
    definition: "Of a word: long, with many beats of sound, as 'electricity' has",
    difficulty: 3,
    trap: 'from Greek',
  },
  {
    word: 'ephemeral',
    definition: 'Lasting for only a short time',
    difficulty: 3,
    trap: 'from Greek',
  },
  {
    word: 'magnanimous',
    definition: 'Generous or forgiving, especially towards a rival',
    difficulty: 3,
    trap: 'from Latin',
  },
  {
    word: 'melancholic',
    definition: 'Feeling or expressing pensive sadness',
    difficulty: 3,
    trap: 'from Greek',
  },
  {
    word: 'idiosyncratic',
    definition: 'Peculiar or individual in behaviour or style',
    difficulty: 3,
    trap: 'from Greek',
  },
  {
    word: 'perfunctory',
    definition: 'Carried out without real interest or care',
    difficulty: 3,
    trap: 'from Latin',
  },
  {
    word: 'acquiesce',
    definition: 'To accept something reluctantly without protest',
    difficulty: 3,
    trap: 'from Latin',
  },
  {
    word: 'bourgeoisie',
    definition: 'The middle class, especially regarded as materialistic',
    difficulty: 3,
    trap: 'from French',
  },
  {
    word: 'dichotomy',
    definition: 'A division into two contrasting things',
    difficulty: 3,
    trap: 'from Greek',
  },
  {
    word: 'quintessential',
    definition: 'Being the purest, most typical example of its kind',
    difficulty: 3,
    trap: 'from Latin',
  },
  // Added 24 October 2026: the hardest words of analysis.
  {
    word: 'conscientious',
    definition: 'Careful and thorough in doing your work or duty',
    difficulty: 3,
    trap: 'from Latin',
    family: 'consci',
  },
  {
    word: 'bureaucracy',
    definition: 'Rule by officials, with their endless forms and procedures',
    difficulty: 3,
    trap: 'from French',
    family: 'cracy',
  },
  {
    word: 'liaison',
    definition: 'A close working link between people or groups; also, a secret love affair',
    difficulty: 3,
    trap: 'from French',
  },
  {
    word: 'silhouette',
    definition: 'The dark outline of someone or something against a light background',
    difficulty: 3,
    trap: 'from French',
  },
  {
    word: 'mnemonic',
    definition:
      'A trick that helps you remember something, such as a phrase made from first letters',
    difficulty: 3,
    trap: 'silent letter',
  },
  {
    word: 'omniscient',
    definition: "All-knowing, like a storyteller who can see into every character's mind",
    difficulty: 3,
    trap: 'from Latin',
    family: 'consci',
  },
  {
    word: 'philanthropist',
    definition: 'Someone who gives money and time to help others',
    difficulty: 3,
    trap: 'from Greek',
    family: 'anthrop',
  },
  {
    word: 'misanthropic',
    definition: 'Disliking and distrusting other people in general',
    difficulty: 3,
    trap: 'from Greek',
    family: 'anthrop',
  },
  {
    word: 'synecdoche',
    definition: "Using a part to stand for the whole, as 'hands' for workers",
    difficulty: 3,
    trap: 'from Greek',
  },
  // Added 24 October 2026: the harder set-text names.
  {
    word: 'Havisham',
    definition: 'The jilted bride in Great Expectations who stops every clock in her house',
    difficulty: 3,
    trap: 'set-text name',
    family: 'expectations',
  },
  {
    word: 'Mercutio',
    definition: "Romeo's quick-witted friend, killed in a street fight by Juliet's cousin",
    difficulty: 3,
    trap: 'set-text name',
    family: 'romeo',
  },
  {
    word: 'Jekyll',
    definition: 'The respectable doctor who transforms himself into Mr Hyde',
    difficulty: 3,
    trap: 'set-text name',
    family: 'jekyll',
  },
  {
    word: 'Ozymandias',
    definition: 'The boastful king whose broken statue lies half-buried in sand in a poem of 1818',
    difficulty: 3,
    trap: 'set-text name',
    family: 'shelley',
  },
  {
    word: 'Shakespeare',
    definition: 'The surname of the dramatist who wrote Macbeth and Romeo and Juliet',
    difficulty: 3,
    trap: 'set-text name',
  },
  {
    word: 'Priestley',
    definition: 'The surname of the author of An Inspector Calls',
    difficulty: 3,
    trap: 'set-text name',
    family: 'inspector',
  },
  {
    word: 'Stevenson',
    definition:
      "The surname of the Scottish author of Kidnapped, and of an 1886 story of a doctor's hidden, violent self",
    difficulty: 3,
    trap: 'set-text name',
    family: 'jekyll',
  },
  {
    word: 'Fezziwig',
    definition:
      'The jolly employer Scrooge worked for as an apprentice, who throws a Christmas ball',
    difficulty: 3,
    trap: 'set-text name',
    family: 'carol',
  },
  {
    word: 'Cratchit',
    definition: "The surname of Scrooge's underpaid clerk, Bob, and his family",
    difficulty: 3,
    trap: 'set-text name',
    family: 'carol',
  },
  {
    word: 'Ebenezer',
    definition: "Scrooge's first name",
    difficulty: 3,
    trap: 'set-text name',
    family: 'carol',
  },
  {
    word: 'Pumblechook',
    definition: "Joe's pompous uncle in Great Expectations, who claims credit for Pip's rise",
    difficulty: 3,
    trap: 'set-text name',
    family: 'expectations',
  },
  {
    word: 'Dunsinane',
    definition: 'The hill and castle where Macbeth makes his last stand',
    difficulty: 3,
    trap: 'set-text name',
    family: 'macbeth',
  },
  {
    word: 'Benedick',
    definition:
      'The lord who swears he will never marry, then falls for Beatrice, in Much Ado About Nothing',
    difficulty: 3,
    trap: 'set-text name',
  },
  {
    word: 'Malvolio',
    definition: "Olivia's puritanical steward, tricked into wearing yellow stockings",
    difficulty: 3,
    trap: 'set-text name',
  },
  {
    word: 'Desdemona',
    definition: "Othello's loyal wife, falsely accused of betraying him",
    difficulty: 3,
    trap: 'set-text name',
  },
  {
    word: 'Bennet',
    definition: 'The surname of Jane, Lydia and their three sisters in a novel of 1813',
    difficulty: 3,
    trap: 'set-text name',
    family: 'austen',
  },
  {
    word: 'Frankenstein',
    definition: 'The surname of Victor, the scientist who builds a creature in a novel of 1818',
    difficulty: 3,
    trap: 'set-text name',
    family: 'shelley',
  },
  {
    word: 'Rossetti',
    definition: "The surname of the Victorian poet Christina, who wrote 'Remember'",
    difficulty: 3,
    trap: 'set-text name',
  },
  {
    word: 'Austen',
    definition: 'The surname of the author of Emma and Sense and Sensibility',
    difficulty: 3,
    trap: 'set-text name',
    family: 'austen',
  },
  {
    word: 'Hecate',
    definition: 'The goddess of witchcraft who scolds the witches in Macbeth',
    difficulty: 3,
    trap: 'set-text name',
    family: 'macbeth',
  },
  {
    word: 'Glamis',
    definition:
      'The place Macbeth is thane of when the play begins, before he is also made Thane of Cawdor',
    difficulty: 3,
    trap: 'set-text name',
    family: 'macbeth',
  },
  // Added 24 October 2026: the right word for the sentence. Each sounds like
  // another word, or close to it, and the sentence decides which is right.
  // The two of a pair share a family, so they are never in one round.
  {
    word: 'affect',
    definition: 'To have an influence on, or make a difference to',
    sentence: 'I do assure you, that the news does not ___ me either with pleasure or pain.',
    source: 'Pride and Prejudice, Chapter 53',
    difficulty: 3,
    trap: 'sounds close',
    family: ['affect', 'austen'],
  },
  {
    word: 'effect',
    definition: 'A result, or the impression something makes',
    sentence: 'His words had a strange ___ upon me.',
    source: 'Frankenstein, Chapter 17',
    difficulty: 3,
    trap: 'sounds close',
    family: ['affect', 'shelley'],
  },
  {
    word: 'practice',
    definition: "The regular doing of something to improve at it, or a doctor's surgery",
    sentence: 'I’m all out of ___, you see.',
    source: 'The Great Gatsby, Chapter 5',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'c-s',
  },
  {
    word: 'practise',
    definition: 'To do something often to improve at it, or to carry it out as a habit',
    sentence: 'I know what’s right, nor only so, But also ___ what I know.',
    source: 'Silas Marner, Chapter 6',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'c-s',
  },
  {
    word: 'licence',
    definition: 'An official document that gives permission',
    sentence: 'You must and shall be married by a special ___.',
    source: 'Pride and Prejudice, Chapter 59',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['c-s', 'austen'],
  },
  {
    word: 'license',
    definition: 'To give official permission for something',
    sentence: 'Local officials refused to ___ the club to sell food after midnight.',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'c-s',
  },
  {
    word: 'advice',
    definition: 'Suggestions about what someone should do',
    sentence: 'Mr. Darcy took her ___, and did finish his letter.',
    source: 'Pride and Prejudice, Chapter 10',
    difficulty: 3,
    trap: 'sounds close',
    family: ['c-s', 'austen'],
  },
  {
    word: 'advise',
    definition: 'To tell someone what you think they should do',
    sentence: '___ me what to do.',
    source: 'The Scarlet Letter, Chapter 17',
    difficulty: 3,
    trap: 'sounds close',
    family: 'c-s',
  },
  {
    word: 'device',
    definition: 'A plan or method used for a purpose, or a small machine',
    sentence: 'Not a whit; I have a ___ to make all well.',
    source: "A Midsummer Night's Dream, Act 3, Scene 1",
    difficulty: 3,
    trap: 'sounds close',
    family: 'c-s',
  },
  {
    word: 'devise',
    definition: 'To plan or invent something clever',
    sentence: 'This falls out better than I could ___.',
    source: "A Midsummer Night's Dream, Act 3, Scene 2",
    difficulty: 3,
    trap: 'sounds close',
    family: 'c-s',
  },
  {
    word: 'prophecy',
    definition: 'A prediction of what will happen in the future',
    sentence:
      'And when the human beings listened to it, they secretly trembled, hearing in it a ___ of their future doom.',
    source: 'Animal Farm, Chapter 4',
    difficulty: 3,
    trap: 'sounds close',
    family: ['c-s', 'prophe'],
  },
  {
    word: 'prophesy',
    definition: 'To say what will happen in the future',
    sentence: 'I will ___ he comes to tell me of the players.',
    source: 'Hamlet, Act 2, Scene 2',
    difficulty: 3,
    trap: 'sounds close',
    family: ['c-s', 'prophe'],
  },
  {
    word: 'lose',
    definition: 'To fail to keep or to win something',
    sentence: 'When did you ___ your daughter?',
    source: 'The Tempest, Act 5, Scene 1',
    difficulty: 3,
    trap: 'sounds close',
    family: 'lose',
  },
  {
    word: 'loose',
    definition: 'Not firmly fixed, tied or held; free',
    sentence: 'It looks as though all the moles in England had been let ___ in it.',
    source: 'The Sign of Four, Chapter 5',
    difficulty: 3,
    trap: 'sounds close',
    family: 'lose',
  },
  {
    word: 'principal',
    definition: 'Most important; also the head of a college or school',
    sentence:
      'He was fond of the country and of books; and from these tastes had arisen his ___ enjoyments.',
    source: 'Pride and Prejudice, Chapter 42',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['principal', 'austen'],
  },
  {
    word: 'principle',
    definition: 'A basic rule or belief that guides how someone acts',
    sentence: 'And that’s the ___ I acted upon.',
    source: 'The War of the Worlds, Book Two, Chapter 7',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'principal',
  },
  {
    word: 'complement',
    definition: 'To go well with something, making it whole',
    sentence: 'The gloomy setting is chosen to ___ the dark events of the plot.',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'complement',
  },
  {
    word: 'compliment',
    definition: 'A remark that praises someone',
    sentence: 'And the Jolly Bargemen might take it as a ___.',
    source: 'Great Expectations, Chapter 18',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'complement',
  },
  {
    word: 'stationary',
    definition: 'Not moving; standing still',
    sentence: 'We shot past the long lines of loaded barges as though they were ___.',
    source: 'The Sign of Four, Chapter 10',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['stationary', 'passed'],
  },
  {
    word: 'stationery',
    definition: 'Paper, pens and other writing materials',
    sentence: 'For, there was something very comfortable in having plenty of ___.',
    source: 'Great Expectations, Chapter 34',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'stationary',
  },
  {
    word: 'passed',
    definition: 'Went by; also got through a test',
    sentence: 'October, November, December ___ away.',
    source: 'Jane Eyre, Chapter 12',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'passed',
  },
  {
    word: 'past',
    definition: 'The time before the present',
    sentence: 'You can’t repeat the ___.',
    source: 'The Great Gatsby, Chapter 6',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'passed',
  },
  {
    word: 'breath',
    definition: 'The air taken into and let out of the lungs',
    sentence: 'I am scarce in ___, my lord.',
    source: 'King Lear, Act 2, Scene 2',
    difficulty: 3,
    trap: 'sounds close',
    family: 'breath',
  },
  {
    word: 'breathe',
    definition: 'To take air into the lungs and let it out',
    sentence: 'You seem to ___ quickly.',
    source: 'Great Expectations, Chapter 50',
    difficulty: 3,
    trap: 'sounds close',
    family: 'breath',
  },
  {
    word: 'allusion',
    definition: 'A brief reference to another text, person or event, made without explaining it',
    sentence: 'The Eastern ___ bit me again.',
    source: 'Jane Eyre, Chapter 24',
    difficulty: 3,
    trap: 'sounds close',
    family: 'allusion',
  },
  {
    word: 'illusion',
    definition: 'Something that seems real but is not; a false impression',
    sentence: 'By some ___ see thou bring her here; / I’ll charm his eyes against she do appear.',
    source: "A Midsummer Night's Dream, Act 3, Scene 2",
    difficulty: 3,
    trap: 'sounds close',
    family: 'allusion',
  },
  {
    word: 'conscious',
    definition: 'Awake and aware of what is happening around you',
    sentence: 'Once again the animals were ___ of a vague uneasiness.',
    source: 'Animal Farm, Chapter 6',
    difficulty: 3,
    trap: 'sounds close',
    family: 'consci',
  },
  {
    word: 'climactic',
    definition: 'Forming the most exciting or important point of a story',
    sentence: 'The final battle is the ___ scene of the whole play.',
    difficulty: 3,
    trap: 'sounds close',
  },
  {
    word: 'led',
    definition: 'Guided or brought someone somewhere; was in charge of',
    sentence: 'God must have ___ me on.',
    source: 'Jane Eyre, Chapter 27',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'minor',
    definition: 'Small or less important',
    sentence:
      'Avoiding the Blue Boar, I put up at an inn of ___ reputation down the town, and ordered some dinner.',
    source: 'Great Expectations, Chapter 52',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'moral',
    definition: 'The lesson about right and wrong that a story teaches',
    sentence: 'A good ___, my lord: it is not enough to speak, but to speak true.',
    source: "A Midsummer Night's Dream, Act 5, Scene 1",
    difficulty: 3,
    trap: 'sounds close',
    family: 'moral',
  },
  {
    word: 'morale',
    definition: 'The confidence and spirit of a group of people',
    sentence: "Losing three battles in a row destroyed the troops' ___.",
    difficulty: 3,
    trap: 'sounds close',
    family: 'moral',
  },
  {
    word: 'precede',
    definition: 'To come before something in time or order',
    sentence:
      'I let Mrs. Fairfax ___ me into the dining-room, and kept in her shade as we crossed that apartment; and, passing the arch, whose curtain was now dropped, entered the elegant recess beyond.',
    source: 'Jane Eyre, Chapter 13',
    difficulty: 3,
    trap: 'sounds close',
    family: 'cede',
  },
  {
    word: 'proceed',
    definition: 'To go forward, or carry on with something',
    sentence: 'I will ___ with my tale.',
    source: 'Frankenstein, Chapter 18',
    difficulty: 3,
    trap: 'sounds close',
    family: ['cede', 'shelley', 'tale'],
  },
  {
    word: 'formally',
    definition: 'In an official, serious or correct way',
    sentence:
      'Unused as I was to strangers, it was rather a trial to appear thus ___ summoned in Mr. Rochester’s presence.',
    source: 'Jane Eyre, Chapter 13',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'formally',
  },
  {
    word: 'formerly',
    definition: 'In earlier times; before now',
    sentence: 'I must confess that he did not speak so well of Wickham as he ___ did.',
    source: 'Pride and Prejudice, Chapter 47',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['formally', 'austen'],
  },
  {
    word: 'council',
    definition: 'A group that meets to discuss and decide things, or such a meeting',
    sentence: 'Herbert had come in, and we held a very serious ___ by the fire.',
    source: 'Great Expectations, Chapter 47',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'council',
  },
  {
    word: 'counsel',
    definition: 'Wise guidance, or to give it',
    sentence: 'And so I thank you for your good ___.',
    source: 'Hamlet, Act 4, Scene 5',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'council',
  },
  {
    word: 'discreet',
    definition: 'Careful not to draw attention or give away secrets',
    sentence: 'It’d be more ___ to go to Europe.',
    source: 'The Great Gatsby, Chapter 2',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'discreet',
  },
  {
    word: 'discrete',
    definition: 'Distinct; existing as individual parts',
    sentence: 'The story is told in three ___ sections, each from a different point of view.',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'discreet',
  },
  {
    word: 'eminent',
    definition: 'Famous and highly respected in a particular field',
    sentence:
      'His fame, though still on its upward slope, already overshadowed the soberer reputations of his fellow-clergymen, ___ as several of them were.',
    source: 'The Scarlet Letter, Chapter 11',
    difficulty: 3,
    trap: 'sounds close',
    family: 'eminent',
  },
  {
    word: 'imminent',
    definition: 'About to happen very soon',
    sentence:
      'We are still surrounded by mountains of ice, still in ___ danger of being crushed in their conflict.',
    source: 'Frankenstein, Chapter 24',
    difficulty: 3,
    trap: 'sounds close',
    family: ['eminent', 'shelley'],
  },
  {
    word: 'desert',
    definition: 'To abandon someone or something, especially a duty',
    sentence:
      'I pressed his hand in silence, for I could not forget that I had once meant to ___ him.',
    source: 'Great Expectations, Chapter 56',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'desert',
  },
  {
    word: 'dessert',
    definition: 'The sweet course at the end of a meal',
    sentence:
      'The ___ was not carried out till after nine; and at ten footmen were still running to and fro with trays and coffee-cups.',
    source: 'Jane Eyre, Chapter 17',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'desert',
  },
  {
    word: 'aloud',
    definition: 'In a speaking voice, so that others can hear',
    sentence: 'I say my prayers ___.',
    source: 'Much Ado about Nothing, Act 2, Scene 1',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'aloud',
  },
  {
    word: 'reign',
    definition: "A ruler's time in power, or any period of rule",
    sentence:
      'A great change has come over the dark wainscoted parlour since we saw it in Godfrey’s bachelor days, and under the wifeless ___ of the old Squire.',
    source: 'Silas Marner, Chapter 17',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'reign',
  },
  {
    word: 'rein',
    definition: 'A strap used to guide a horse; also, control',
    sentence:
      'What ___ can hold licentious wickedness / When down the hill he holds his fierce career?',
    source: 'King Henry V, Act 3, Scene 3',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'reign',
  },
  {
    word: 'lightning',
    definition: 'The bright electrical flash in the sky during a thunderstorm',
    sentence: 'In thunder, ___, or in rain?',
    source: 'Macbeth, Act 1, Scene 1',
    difficulty: 3,
    trap: 'sounds close',
    family: 'lightning',
  },
  {
    word: 'lightening',
    definition: 'Becoming paler, or less heavy',
    sentence: 'The sky was slowly ___ as dawn broke over the hills.',
    difficulty: 3,
    trap: 'sounds close',
    family: 'lightning',
  },
  {
    word: 'draft',
    definition: 'An early version of a piece of writing',
    sentence: 'Write a quick first ___, then check it for errors.',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'draft',
  },
  {
    word: 'draught',
    definition: 'A long swallow of a drink; also a current of cold air in a room',
    sentence: 'Have you drank also of the intoxicating ___?',
    source: 'Frankenstein, Letter 4',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['draft', 'shelley'],
  },
  {
    word: 'duel',
    definition: 'An arranged fight between two people, often with swords or pistols',
    sentence: 'Insulted, he challenged his rival to a ___ at dawn.',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'duel',
  },
  {
    word: 'dual',
    definition: 'Having two parts; double',
    sentence:
      "The doctor's ___ nature, respectable by day and violent by night, is the novel's central idea.",
    difficulty: 3,
    trap: 'sounds the same',
    family: 'duel',
  },
  {
    word: 'envelop',
    definition: 'To wrap up or surround something completely',
    sentence: 'Thick fog began to ___ the whole city.',
    difficulty: 3,
    trap: 'sounds close',
    family: 'envelop',
  },
  {
    word: 'envelope',
    definition: 'A paper cover for a letter',
    sentence: '“Have you the ___?” he asked.',
    source: "Strange Case of Dr Jekyll and Mr Hyde, 'Incident of the Letter'",
    difficulty: 3,
    trap: 'sounds close',
    family: ['envelop', 'jekyll'],
  },
  {
    word: 'loathe',
    definition: 'To hate something or someone intensely',
    sentence: 'But like a sickness did I ___ this food.',
    source: "A Midsummer Night's Dream, Act 4, Scene 1",
    difficulty: 3,
    trap: 'sounds close',
  },
  {
    word: 'incite',
    definition: 'To stir people up to violent or angry action',
    sentence:
      'For God doth know how many now in health / Shall drop their blood in approbation / Of what your reverence shall ___ us to.',
    source: 'King Henry V, Act 1, Scene 2',
    difficulty: 3,
    trap: 'sounds close',
    family: ['incite', 'cite'],
  },
  {
    word: 'insight',
    definition: 'A deep and clear understanding of something',
    sentence: "Her essay shows real ___ into the writer's purpose.",
    difficulty: 3,
    trap: 'sounds close',
    family: 'incite',
  },
  {
    word: 'cite',
    definition: 'To quote or refer to something as evidence',
    sentence: 'Mark you this, Bassanio, / The devil can ___ Scripture for his purpose.',
    source: 'The Merchant of Venice, Act 1, Scene 3',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'cite',
  },
  {
    word: 'heroine',
    definition: 'The main female character in a story, or a woman admired for her courage',
    sentence: 'I did not make myself the ___ of my tales.',
    source: 'Frankenstein, Introduction',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['shelley', 'tale'],
  },
  {
    word: 'storey',
    definition: 'One level or floor of a building',
    sentence: 'I must pay a visit to the second ___.',
    source: 'Jane Eyre, Chapter 15',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'bated',
    definition: 'Held back or lessened; now used mainly of waiting in suspense',
    sentence: 'With ___ breath and whisp’ring humbleness,',
    source: 'The Merchant of Venice, Act 1, Scene 3',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'breath',
  },
  {
    word: 'pique',
    definition: "To arouse someone's interest",
    sentence: "A mysterious opening line is meant to ___ the reader's interest.",
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'pore',
    definition: 'To study or read something very closely',
    sentence:
      'But these philosophers, whose hands seem only made to dabble in dirt, and their eyes to ___ over the microscope or crucible, have indeed performed miracles.',
    source: 'Frankenstein, Chapter 3',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'shelley',
  },
  {
    word: 'elicit',
    definition: 'To draw out a reply or reaction from someone',
    sentence:
      'I had calculated with certainty on this step answering my end: I felt sure it would ___ an early answer.',
    source: 'Jane Eyre, Chapter 34',
    difficulty: 3,
    trap: 'sounds close',
  },
  {
    word: 'ensure',
    definition: 'To make certain that something happens',
    sentence: 'One paternal kind precaution he had taken to ___ my having a companion.',
    source: 'Frankenstein, Chapter 18',
    difficulty: 3,
    trap: 'sounds close',
    family: ['shelley', 'ensure'],
  },
  {
    word: 'foreword',
    definition:
      'A short introduction at the start of a book, often by someone other than the author',
    sentence: 'In the ___, a famous writer explains why the book matters.',
    difficulty: 3,
    trap: 'sounds close',
    family: 'fore',
  },
  {
    word: 'wander',
    definition: 'To walk slowly without a clear aim',
    sentence: 'Here one could ___ unseen.',
    source: 'Jane Eyre, Chapter 23',
    difficulty: 3,
    trap: 'sounds close',
  },
  {
    word: 'alter',
    definition: 'To change something',
    sentence: 'And even if there’s a delay, how can it ___ the end?',
    source: 'The War of the Worlds, Book Two, Chapter 7',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'alter',
  },
  {
    word: 'altar',
    definition: 'The holy table in a church, where a bride and groom stand to wed',
    sentence:
      'I am therefore by no means discouraged by what you have just said, and shall hope to lead you to the ___ ere long.',
    source: 'Pride and Prejudice, Chapter 19',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['alter', 'austen'],
  },
  // Added 24 October 2026, second pass: more sound-alike words, each in a real line.
  {
    word: 'weary',
    definition: 'Very tired; worn out',
    sentence: 'You are wet, and you look ___.',
    source: 'Great Expectations, Chapter 39',
    difficulty: 3,
    trap: 'sounds close',
    family: 'weary',
  },
  {
    word: 'wary',
    definition: 'Cautious; watchful for danger',
    sentence: 'The day is broke, be ___, look about.',
    source: 'Romeo and Juliet, Act 3, Scene 5',
    difficulty: 3,
    trap: 'sounds close',
    family: 'weary',
  },
  {
    word: 'vain',
    definition: 'Conceited; also useless, bringing no result',
    sentence: 'I pressed on, but in ___.',
    source: 'Frankenstein, Chapter 24',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['vain', 'shelley'],
  },
  {
    word: 'vein',
    definition: 'A tube carrying blood to the heart; also a particular mood or style',
    sentence: 'I resumed a livelier ___ of conversation.',
    source: 'Jane Eyre, Chapter 37',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'vain',
  },
  {
    word: 'heir',
    definition: "The person who will inherit someone's property or title",
    sentence: 'No child but Hero; she’s his only ___.',
    source: 'Much Ado about Nothing, Act 1, Scene 1',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'tale',
    definition: 'A story, often an invented one',
    sentence: 'Is it not an odd ___?',
    source: 'Jane Eyre, Chapter 33',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'tale',
  },
  {
    word: 'mantle',
    definition: 'A cloak worn over other clothes; also a duty handed on',
    sentence: 'You all do know this ___.',
    source: 'Julius Caesar, Act 3, Scene 2',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'veil',
    definition: 'A piece of fine cloth worn to cover the face',
    sentence: 'Give me my ___; come, throw it o’er my face.',
    source: 'Twelfth Night, Act 1, Scene 5',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'twelfth',
  },
  {
    word: 'rite',
    definition: 'A ceremony or set act, often a religious one',
    sentence: 'Yearly will I do this ___.',
    source: 'Much Ado about Nothing, Act 5, Scene 3',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'wreak',
    definition: 'To cause or inflict harm, revenge or havoc',
    sentence: 'Why should she ___ revenge on all the male sex?',
    source: 'Great Expectations, Chapter 22',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'hoard',
    definition: 'A secret store of money, food or other treasure',
    sentence:
      'I have a venturous fairy that shall seek / The squirrel’s ___, and fetch thee new nuts.',
    source: "A Midsummer Night's Dream, Act 4, Scene 1",
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'allowed',
    definition: 'Let someone do something; permitted',
    sentence: 'Bingley and Jane, however, soon ___ the others to outstrip them.',
    source: 'Pride and Prejudice, Chapter 58',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['aloud', 'austen'],
  },
  {
    word: 'coarse',
    definition: 'Rough to the touch; also crude or rude in manner',
    sentence: 'You little ___ monster, what do you think of me now?',
    source: 'Great Expectations, Chapter 11',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'forth',
    definition: 'Forward or onwards; out into view',
    sentence: 'It waves me ___ again.',
    source: 'Hamlet, Act 1, Scene 4',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'idle',
    definition: 'Lazy, or not working or busy',
    sentence: 'You are ___, shallow things.',
    source: 'Twelfth Night, Act 3, Scene 4',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['idle', 'twelfth'],
  },
  {
    word: 'idol',
    definition: 'Someone or something greatly admired or worshipped',
    sentence: '"What ___ has displaced you?" he rejoined.',
    source: 'A Christmas Carol, Stave 2',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'idle',
  },
  {
    word: 'peer',
    definition: 'To look closely, or with difficulty',
    sentence:
      'I did not dare to go back towards the pit, but I felt a passionate longing to ___ into it.',
    source: 'The War of the Worlds, Book One, Chapter 5',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'berth',
    definition: 'A bed or place to sleep on a ship or train',
    sentence:
      'Jane, I go in six weeks; I have taken my ___ in an East Indiaman which sails on the 20th of June.',
    source: 'Jane Eyre, Chapter 34',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'suite',
    definition: 'A set of connected rooms, as in a hotel',
    sentence: '“It’s a swell ___,” whispered Jordan respectfully, and every one laughed.',
    source: 'The Great Gatsby, Chapter 7',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'exult',
    definition: 'To rejoice wildly, especially in triumph',
    sentence:
      'Ere I had finished this reply, my soul began to expand, to ___, with the strangest sense of freedom, of triumph, I ever felt.',
    source: 'Jane Eyre, Chapter 4',
    difficulty: 3,
    trap: 'sounds close',
  },
  {
    word: 'gait',
    definition: "A person's way of walking",
    sentence: 'I know his ___; ’tis he.',
    source: 'Othello, Act 5, Scene 1',
    difficulty: 3,
    trap: 'sounds the same',
  },
  {
    word: 'faint',
    definition: 'Weak, hard to see or hear; also, to pass out',
    sentence: 'She gave a ___ cry.',
    source: 'The War of the Worlds, Book Two, Chapter 9',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'faint',
  },
  {
    word: 'feint',
    definition: 'A pretend move or action meant to mislead',
    sentence:
      'May not even this be a ___ that will increase your triumph by affording a wider scope for your revenge.',
    source: 'Frankenstein, Chapter 17',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['faint', 'shelley'],
  },
  {
    word: 'censure',
    definition: 'Strong, official disapproval or blame, or to give it',
    sentence: 'Then, you could dare ___ for my sake?',
    source: 'Jane Eyre, Chapter 19',
    difficulty: 3,
    trap: 'sounds close',
    family: 'ensure',
  },
  {
    word: 'assent',
    definition: 'Agreement or approval, or to agree',
    sentence: 'It was as much as I could do to ___.',
    source: 'Great Expectations, Chapter 48',
    difficulty: 3,
    trap: 'sounds the same',
    family: 'assent',
  },
  {
    word: 'ascent',
    definition: 'A climb upwards, or the way up',
    sentence: 'It was nearly noon when I arrived at the top of the ___.',
    source: 'Frankenstein, Chapter 10',
    difficulty: 3,
    trap: 'sounds the same',
    family: ['assent', 'shelley'],
  },
  {
    word: 'excess',
    definition: 'More than is needed or wise; too much',
    sentence: 'Actually the Commandment read: "No animal shall drink alcohol TO ___."',
    source: 'Animal Farm, Chapter 8',
    difficulty: 3,
    trap: 'sounds close',
  },
  {
    word: 'averse',
    definition: 'Strongly unwilling; opposed to something',
    sentence: "My father's age rendered him extremely ___ to delay.",
    source: 'Frankenstein, Chapter 18',
    difficulty: 3,
    trap: 'sounds close',
    family: 'shelley',
  },
  {
    word: 'throne',
    definition: 'The ceremonial seat of a king or queen',
    sentence: 'The barge she sat in, like a burnished ___, / Burned on the water.',
    source: 'Antony and Cleopatra, Act 2, Scene 2',
    difficulty: 3,
    trap: 'sounds the same',
  },
]

/** A word's families, as BANK.facts gives them to the dealer. */
const familiesOf = (w: SpellingWord): readonly string[] =>
  w.family === undefined ? [] : typeof w.family === 'string' ? [w.family] : w.family

export const BANK: GameBank<SpellingWord> = {
  slug: 'spelling-bee',
  items: SPELLING_BANK,
  // No two words are the same, and the word is what the student spells.
  key: (w) => w.word,
  answer: (w) => w.word,
  // Typed: there are no options, and nothing typed is ever recorded or sent.
  options: () => null,
  // The round climbs from the easier words to the hardest (24 October 2026).
  tier: (w) => w.difficulty,
  // Words that would help spell each other are never dealt in one round.
  facts: (w) => familiesOf(w).map((f) => `family:${f}`),
  // A round spreads the traps: not five double-letter words in a row.
  group: (w) => w.trap,
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
