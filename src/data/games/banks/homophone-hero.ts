import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Homophone Hero: read each sentence and choose the word that fits the gap, from
 * words that are easily confused (their, there, they're). A sentence with two
 * gaps offers four pairs of words, each pair filling both gaps in order. The
 * options are shown in a new order for each question.
 *
 * Moved out of src/app/games/homophone-hero/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts). The
 * old one-line `tip` is kept in the data for the questions that had one, but is
 * no longer shown: the explanation after each answer covers it. The tag the
 * account records is the word set a question tests (`sets[0]`), in words, so
 * that it reads well in a student's report ("their there they are").
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "weak in
 * depth and content"; the audit (.tmp-games-audit/REPORT-ks3.md) found 62
 * questions on fourteen primary-school sets, a third of each round on a set
 * already met in it, and blind guessing worth 47 per cent, because 50 of the 62
 * offered two words. The bank now holds 281 questions on 91 word sets, in three
 * tiers (`tier`):
 *
 *   - tier 1, 86 questions: everyday sets in one gap (their, there and they're;
 *     where, wear, were and we're; aisle, isle and I'll; flu, flew and flue);
 *   - tier 2, 115: the sets a KS3 writer confuses, in one gap (cite, site and
 *     sight; council, counsel and consul; palate, palette and pallet; censor,
 *     censure and sensor), and two gaps in one sentence from the everyday sets;
 *   - tier 3, 80: two gaps in one sentence on the KS3 sets (principal and
 *     principle, complement and compliment, affect and effect, practice and
 *     practise, stationary and stationery, discreet and discrete, licence and
 *     license, storey and story), where the meaning decides each gap.
 *
 * A two-gap question offers four pairs: for each gap, the right word or its
 * nearest neighbour, so a student must decide both. Where both gaps come from
 * one set, a third of the answers put the same word in both gaps, so choosing
 * a mixed pair does not pay.
 *
 * REAL TEXT FIRST. The founder, 24 October 2026: "use as much actual text as
 * possible". 82 sentences are real lines from texts out of UK copyright in
 * src/data/full-texts (Pride and Prejudice, Jane Eyre, Great Expectations,
 * Animal Farm, Silas Marner, The Sign of Four, Frankenstein, the plays), checked
 * word for word against those files by a script, each with its `source` shown
 * under it and its speaker where one speaks it. A line of verse keeps its line
 * break as " / ". A line was used only where every word is spelt as British
 * English spells it now and the tested word keeps its modern sense: no
 * "to-day", no "shew", no "judgment".
 *
 * British usage throughout: practice and licence are the nouns, practise and
 * license the verbs; dependant is the noun and dependent the adjective; a
 * storey is a floor of a building; a draught is a drink or a cold current of air.
 *
 * FACTS. No two questions on one word set share a round (BANK.facts: the sets a
 * question tests, and `shares`, a set whose word its sentence or source shows,
 * or whose rule its explanation teaches; the weather vane question shows
 * weather). Their, there, they're, too, two, where, were and for are each the
 * answer to four questions or more, so that seeing one of them in another
 * sentence is the game's subject and not a give-away
 * (src/lib/games/give-aways.ts). A rarer word is the answer only where no
 * question on another set shows it in its sentence or source, or teaches it in
 * its explanation, unless that question names its set in `shares` (Roderigo's
 * "I'll call aloud"). An explanation may still use an everyday word in its own
 * sentences (one, which, through, whether, seen, story, piece), as any text a
 * student reads does; that says nothing about which word fills a gap. The
 * dealer cannot see this for itself: it reads a two-gap answer as one phrase,
 * never word by word.
 *
 * THE OLD QUESTIONS. A rebuilt bank offers three options or more. Of the 62, 22
 * are kept: the twelve on their, there and they're and on to, too and two as
 * they were; the four on where and wear now also offer were and we're, the
 * four on lose and loose also offer loss, and the two on except also offer
 * expect. 40 were removed. The 38 on nine two-word pairs (your and you're, its
 * and it's, here and hear, weather and whether, affect and effect, practice and
 * practise, then and than, of and off, brake and break) had no third word that
 * a student would really choose; each pair returns in two-gap questions. The
 * two on accept ("Did the school ___ your late application?", "I will gladly
 * ___ your kind offer of help.") would have had a second right answer once
 * expect was offered.
 *
 * Not every set is of true homophones: then and than, of and off, lose and
 * loose, quiet and quite, accept and except, affect and effect, and others
 * differ in sound or are only close. The explanations never say that those
 * sound alike.
 *
 * CHECKED (31 October 2026) by a second, independent reader, as the founder
 * decided. Every real line matches its held text word for word, in the chapter,
 * scene or stave named, with the right speaker. Fixed:
 *   - "We got aboard easily, and ___ out into the track of the steamer": rode
 *     could be argued, as one rides in a boat, and the line never says it is
 *     rowed; the oarsmen's "steady stroke" from the same chapter replaces it.
 *   - "The artist mixed blue and yellow on her ___" removed: Collins gives
 *     pallet as a variant spelling of palette, the artist's board, and the
 *     founder decided on 23 October 2026 that spellings dictionaries accept
 *     are right.
 *   - "The ___ manager keeps ___ details": "personnel details" is good English,
 *     so personnel in both gaps could be argued; the sentence is now about
 *     missing work for personal reasons.
 *   - `shares` added to 26 questions whose sentence, source or explanation shows
 *     or teaches another set's word: the eminent oculist, "Hover through the
 *     fog", the First Witch, "Licence and license work the same way".
 * Kept wrong, because the page says the game uses British spelling: story for
 * a floor, dependent for the noun and insure for ensure, which Collins gives
 * only as chiefly American.
 */

export interface HomophoneItem {
  /** The sentence the student sees, with ___ for each gap: one, or two. */
  sentence: string
  /**
   * The words offered. In a two-gap question each option names the words for
   * both gaps, in order, joined by GAP_JOIN.
   */
  options: string[]
  answer: string
  /** 1, 2 or 3: see the docblock. */
  tier: 1 | 2 | 3
  /** The word sets the question tests; the first is the one the account records. */
  sets: string[]
  /** A word set whose word the sentence shows, kept out of its round. */
  shares?: string[]
  /**
   * Where a real line comes from, as the study guides cite it, with its
   * speaker where one speaks it. Shown under the sentence. Absent where the
   * sentence is the site's own.
   */
  source?: string
  /** The one-line tip shown before 16 October 2026: kept in the data, no longer shown. */
  tip?: string
}

/** Joins the words of a two-gap option, in gap order: "principal … principle". */
export const GAP_JOIN = ' … '

export const HOMOPHONE_BANK: HomophoneItem[] = [
  // their there they are
  {
    sentence: 'The students left ___ bags by the classroom door.',
    options: ['their', 'there', "they're"],
    answer: 'their',
    tier: 1,
    sets: ['their there they are'],
    tip: '"Their" shows belonging - the bags belong to them.',
  },
  {
    sentence: 'Put the new books over ___ on the shelf.',
    options: ['their', 'there', "they're"],
    answer: 'there',
    tier: 1,
    sets: ['their there they are'],
    tip: '"There" points to a place - it contains the word "here".',
  },
  {
    sentence: '___ going to be late for the school trip.',
    options: ['Their', 'There', "They're"],
    answer: "They're",
    tier: 1,
    sets: ['their there they are'],
    tip: '"They\'re" is short for "they are".',
  },
  {
    sentence: 'My cousins say ___ favourite subject is science.',
    options: ['their', 'there', "they're"],
    answer: 'their',
    tier: 1,
    sets: ['their there they are'],
    tip: '"Their" = belonging to them (their subject).',
  },
  {
    sentence: 'Is ___ enough time to finish the test?',
    options: ['their', 'there', "they're"],
    answer: 'there',
    tier: 1,
    sets: ['their there they are'],
    tip: '"There is / there are" talks about existence.',
  },
  {
    sentence: 'I think ___ waiting for us outside.',
    options: ['their', 'there', "they're"],
    answer: "they're",
    tier: 1,
    sets: ['their there they are'],
    tip: 'Test: can you say "they are"? Then use "they\'re".',
  },
  {
    sentence: 'The twins hung ___ wet coats by the radiator.',
    options: ['their', 'there', "they're"],
    answer: 'their',
    tier: 1,
    sets: ['their there they are'],
  },
  {
    sentence: '___ is a light on in the empty house.',
    options: ['There', 'Their', "They're"],
    answer: 'There',
    tier: 1,
    sets: ['their there they are'],
  },
  {
    sentence: 'Ask the twins whether ___ coming to the party.',
    options: ["they're", 'their', 'there'],
    answer: "they're",
    tier: 1,
    sets: ['their there they are'],
    shares: ['weather whether'],
  },
  {
    sentence: 'Our neighbours have painted ___ front door red.',
    options: ['their', 'there', "they're"],
    answer: 'their',
    tier: 1,
    sets: ['their there they are'],
  },
  {
    sentence: '“___ all afraid,” said Poole.',
    options: ["They're", 'Their', 'There'],
    answer: "They're",
    tier: 1,
    sets: ['their there they are'],
    source: 'Jekyll and Hyde, The Last Night',
  },
  {
    sentence: '___ is no doubt whatever about that.',
    options: ['There', 'Their', "They're"],
    answer: 'There',
    tier: 1,
    sets: ['their there they are'],
    source: 'A Christmas Carol, Stave 1',
  },
  // to too two
  {
    sentence: 'We are going ___ the library after lunch.',
    options: ['to', 'too', 'two'],
    answer: 'to',
    tier: 1,
    sets: ['to too two'],
    tip: '"To" shows direction or is part of a verb (to go).',
  },
  {
    sentence: 'The soup was far ___ hot to eat.',
    options: ['to', 'too', 'two'],
    answer: 'too',
    tier: 1,
    sets: ['to too two'],
    tip: '"Too" means "also" or "more than enough".',
  },
  {
    sentence: 'I need ___ pens for the exam.',
    options: ['to', 'too', 'two'],
    answer: 'two',
    tier: 1,
    sets: ['to too two'],
    tip: '"Two" is the number 2.',
  },
  {
    sentence: 'Can I come ___, please?',
    options: ['to', 'too', 'two'],
    answer: 'too',
    tier: 1,
    sets: ['to too two'],
    tip: '"Too" here means "as well / also".',
  },
  {
    sentence: 'She walked ___ the front of the room.',
    options: ['to', 'too', 'two'],
    answer: 'to',
    tier: 1,
    sets: ['to too two'],
    tip: '"To" shows movement towards a place.',
  },
  {
    sentence: 'There are ___ weeks left until the holidays.',
    options: ['to', 'too', 'two'],
    answer: 'two',
    tier: 1,
    sets: ['to too two'],
    tip: '"Two" is a number - count the weeks.',
  },
  {
    sentence: 'Tickets for the concert cost ___ much for most of us.',
    options: ['too', 'to', 'two'],
    answer: 'too',
    tier: 1,
    sets: ['to too two'],
  },
  {
    sentence: 'Only ___ people in the class had read the whole book.',
    options: ['two', 'to', 'too'],
    answer: 'two',
    tier: 1,
    sets: ['to too two'],
  },
  {
    sentence: 'The puppy was ___ small to climb the stairs.',
    options: ['too', 'to', 'two'],
    answer: 'too',
    tier: 1,
    sets: ['to too two'],
  },
  {
    sentence: 'The ___ teams shook hands before the match.',
    options: ['two', 'to', 'too'],
    answer: 'two',
    tier: 1,
    sets: ['to too two'],
  },
  {
    sentence: '___ of both kinds makes up ___.',
    options: ['Two … four', 'Two … for', 'Too … four', 'Too … for'],
    answer: 'Two … four',
    tier: 2,
    sets: ['to too two', 'for four fore'],
    source: "A Midsummer Night's Dream, Act 3, Scene 2 (Puck)",
  },
  // where wear were we are
  {
    sentence: '___ did you put my calculator?',
    options: ['Where', 'Wear', 'Were', "We're"],
    answer: 'Where',
    tier: 1,
    sets: ['where wear were we are'],
    tip: '"Where" asks about a place.',
  },
  {
    sentence: 'You must ___ a tie with the school uniform.',
    options: ['where', 'wear', 'were', "we're"],
    answer: 'wear',
    tier: 1,
    sets: ['where wear were we are'],
    tip: '"Wear" means to have clothes on your body.',
  },
  {
    sentence: 'This is the room ___ we sit our exams.',
    options: ['where', 'wear', 'were', "we're"],
    answer: 'where',
    tier: 1,
    sets: ['where wear were we are'],
    tip: '"Where" points to a place or location.',
  },
  {
    sentence: 'What will you ___ to the school disco?',
    options: ['where', 'wear', 'were', "we're"],
    answer: 'wear',
    tier: 1,
    sets: ['where wear were we are'],
    tip: '"Wear" links to clothing - think "wardrobe".',
  },
  {
    sentence: 'We ___ late because the bus broke down.',
    options: ['were', 'where', 'wear', "we're"],
    answer: 'were',
    tier: 1,
    sets: ['where wear were we are'],
  },
  {
    sentence: 'Can you tell me ___ the nearest station is?',
    options: ['where', 'were', 'wear', "we're"],
    answer: 'where',
    tier: 1,
    sets: ['where wear were we are'],
  },
  {
    sentence: 'They ___ the first to arrive at the party.',
    options: ['were', 'where', 'wear', "we're"],
    answer: 'were',
    tier: 1,
    sets: ['where wear were we are'],
  },
  {
    sentence: 'If you ___ in my place, what would you do?',
    options: ['were', 'where', 'wear', "we're"],
    answer: 'were',
    tier: 1,
    sets: ['where wear were we are'],
  },
  {
    sentence: '___ going to the beach if the sun comes out.',
    options: ["We're", 'Were', 'Where', 'Wear'],
    answer: "We're",
    tier: 1,
    sets: ['where wear were we are'],
  },
  {
    sentence: 'The old houses ___ knocked down to make room for a car park.',
    options: ['were', 'where', 'wear', "we're"],
    answer: 'were',
    tier: 1,
    sets: ['where wear were we are'],
  },
  {
    sentence: 'This is the park ___ I learnt to ride a bike.',
    options: ['where', 'were', 'wear', "we're"],
    answer: 'where',
    tier: 1,
    sets: ['where wear were we are'],
  },
  {
    sentence: '___ not going to pick up any rubbish that drifts in.',
    options: ["We're", 'Were', 'Where', 'Wear'],
    answer: "We're",
    tier: 1,
    sets: ['where wear were we are'],
    source: 'The War of the Worlds, Book Two, Chapter 7 (the artilleryman)',
  },
  {
    sentence: '___ all good friends ___, I hope.',
    options: ["We're … here", "We're … hear", 'Were … here', 'Were … hear'],
    answer: "We're … here",
    tier: 2,
    sets: ['where wear were we are', 'here hear'],
    source: 'Silas Marner, Chapter 6 (the landlord)',
  },
  // know no now
  {
    sentence: 'There is ___ point in waiting any longer.',
    options: ['no', 'know', 'now'],
    answer: 'no',
    tier: 1,
    sets: ['know no now'],
  },
  {
    sentence: 'I have ___ idea what time the film starts.',
    options: ['no', 'know', 'now'],
    answer: 'no',
    tier: 1,
    sets: ['know no now'],
  },
  {
    sentence: 'I ___ him ___.',
    options: ['know … now', 'no … now', 'know … know', 'now … know'],
    answer: 'know … now',
    tier: 2,
    sets: ['know no now'],
    source: 'Macbeth, Act 4, Scene 3 (Malcolm)',
  },
  {
    sentence: '___ does he ___ live?',
    options: ['Where … now', 'Where … know', 'Were … now', 'Were … know'],
    answer: 'Where … now',
    tier: 2,
    sets: ['know no now', 'where wear were we are'],
    source: 'Jane Eyre, Chapter 36 (Jane)',
  },
  // by buy bye
  {
    sentence: 'I want to ___ a present for my sister.',
    options: ['buy', 'by', 'bye'],
    answer: 'buy',
    tier: 1,
    sets: ['by buy bye'],
  },
  {
    sentence: '“___, see you tomorrow,” she called from the gate.',
    options: ['Bye', 'Buy', 'By'],
    answer: 'Bye',
    tier: 1,
    sets: ['by buy bye'],
  },
  {
    sentence: 'The book was written ___ a famous explorer.',
    options: ['by', 'buy', 'bye'],
    answer: 'by',
    tier: 1,
    sets: ['by buy bye'],
  },
  // for four fore
  {
    sentence: 'This present is ___ you.',
    options: ['for', 'four', 'fore'],
    answer: 'for',
    tier: 1,
    sets: ['for four fore'],
  },
  {
    sentence: 'A square has ___ equal sides.',
    options: ['four', 'for', 'fore'],
    answer: 'four',
    tier: 1,
    sets: ['for four fore'],
  },
  {
    sentence: 'Her talent for music came to the ___ in the school concert.',
    options: ['fore', 'for', 'four'],
    answer: 'fore',
    tier: 2,
    sets: ['for four fore'],
  },
  {
    sentence: 'We waited ___ an hour in the cold.',
    options: ['for', 'four', 'fore'],
    answer: 'for',
    tier: 1,
    sets: ['for four fore'],
    shares: ['hour our'],
  },
  {
    sentence: 'Thank you ___ helping me with my homework.',
    options: ['for', 'four', 'fore'],
    answer: 'for',
    tier: 1,
    sets: ['for four fore'],
  },
  {
    sentence: 'What did you have ___ lunch today?',
    options: ['for', 'four', 'fore'],
    answer: 'for',
    tier: 1,
    sets: ['for four fore'],
  },
  {
    sentence: 'The clock struck ___, and school was over.',
    options: ['four', 'for', 'fore'],
    answer: 'four',
    tier: 1,
    sets: ['for four fore'],
  },
  {
    sentence: '___ were ___ of us.',
    options: ['There … four', 'There … for', 'Their … four', 'Their … for'],
    answer: 'There … four',
    tier: 2,
    sets: ['for four fore', 'their there they are'],
    source: 'Frankenstein, Introduction',
  },
  // right write rite
  {
    sentence: 'Please ___ your name at the top of the page.',
    options: ['write', 'right', 'rite'],
    answer: 'write',
    tier: 1,
    sets: ['right write rite'],
  },
  {
    sentence: 'Turn ___ at the traffic lights.',
    options: ['right', 'write', 'rite'],
    answer: 'right',
    tier: 1,
    sets: ['right write rite'],
  },
  {
    sentence: 'Starting secondary school can feel like a ___ of passage.',
    options: ['rite', 'right', 'write'],
    answer: 'rite',
    tier: 2,
    sets: ['right write rite'],
  },
  {
    sentence: 'Is this the ___ answer?',
    options: ['right', 'write', 'rite'],
    answer: 'right',
    tier: 1,
    sets: ['right write rite'],
  },
  // sew so sow
  {
    sentence: 'Farmers ___ their seeds in spring.',
    options: ['sow', 'sew', 'so'],
    answer: 'sow',
    tier: 1,
    sets: ['sew so sow'],
  },
  {
    sentence: 'Can you ___ this button back on my coat?',
    options: ['sew', 'sow', 'so'],
    answer: 'sew',
    tier: 1,
    sets: ['sew so sow'],
  },
  {
    sentence: 'It was raining, ___ we stayed indoors.',
    options: ['so', 'sew', 'sow'],
    answer: 'so',
    tier: 1,
    sets: ['sew so sow'],
  },
  // road rode rowed
  {
    sentence: 'She ___ her bike to school every day.',
    options: ['rode', 'road', 'rowed'],
    answer: 'rode',
    tier: 1,
    sets: ['road rode rowed'],
  },
  {
    sentence: 'The ___ was closed because of the flood.',
    options: ['road', 'rode', 'rowed'],
    answer: 'road',
    tier: 1,
    sets: ['road rode rowed'],
  },
  {
    sentence:
      'I felt mortified to be of so little use in the boat; but there were few better oarsmen than my two friends, and they ___ with a steady stroke, that was to last all day.',
    options: ['rowed', 'rode', 'road'],
    answer: 'rowed',
    tier: 2,
    sets: ['road rode rowed'],
    source: 'Great Expectations, Chapter 54',
  },
  // weigh way whey
  {
    sentence: 'The nurse will ___ the baby every month.',
    options: ['weigh', 'way', 'whey'],
    answer: 'weigh',
    tier: 1,
    sets: ['weigh way whey'],
  },
  {
    sentence: 'Cheese is made from curds, and the liquid left over is called ___.',
    options: ['whey', 'way', 'weigh'],
    answer: 'whey',
    tier: 2,
    sets: ['weigh way whey'],
  },
  // pair pear pare
  {
    sentence: 'I bought a new ___ of trainers.',
    options: ['pair', 'pear', 'pare'],
    answer: 'pair',
    tier: 1,
    sets: ['pair pear pare'],
  },
  {
    sentence: 'She cut the ripe ___ into slices.',
    options: ['pear', 'pair', 'pare'],
    answer: 'pear',
    tier: 1,
    sets: ['pair pear pare'],
  },
  {
    sentence: 'Use a sharp knife to ___ the skin off the apple.',
    options: ['pare', 'pair', 'pear'],
    answer: 'pare',
    tier: 2,
    sets: ['pair pear pare'],
    shares: ['of off have'],
  },
  // quiet quite quit
  {
    sentence: 'The library was so ___ that I could hear the clock ticking.',
    options: ['quiet', 'quite', 'quit'],
    answer: 'quiet',
    tier: 1,
    sets: ['quiet quite quit'],
    shares: ['here hear'],
  },
  {
    sentence: 'She ___ the team after an argument with the coach.',
    options: ['quit', 'quite', 'quiet'],
    answer: 'quit',
    tier: 1,
    sets: ['quiet quite quit'],
  },
  {
    sentence: 'He laughed until his ears were ___ red.',
    options: ['quite', 'quiet', 'quit'],
    answer: 'quite',
    tier: 1,
    sets: ['quiet quite quit'],
    source: 'The Sign of Four, Chapter 4',
  },
  {
    sentence: 'Estella returned, and she ___ remained ___.',
    options: ['too … quiet', 'too … quite', 'to … quiet', 'to … quite'],
    answer: 'too … quiet',
    tier: 2,
    sets: ['quiet quite quit', 'to too two'],
    source: 'Great Expectations, Chapter 11',
  },
  // threw through thorough
  {
    sentence: 'The goalkeeper ___ the ball to the defender.',
    options: ['threw', 'through', 'thorough'],
    answer: 'threw',
    tier: 1,
    sets: ['threw through thorough'],
  },
  {
    sentence: 'He ___ the letter into her lap.',
    options: ['threw', 'through', 'thorough'],
    answer: 'threw',
    tier: 1,
    sets: ['threw through thorough'],
    source: 'Jane Eyre, Chapter 30',
  },
  {
    sentence: 'Well, I gave my mind a ___ rest by plunging into a chemical analysis.',
    options: ['thorough', 'through', 'threw'],
    answer: 'thorough',
    tier: 2,
    sets: ['threw through thorough'],
    source: 'The Sign of Four, Chapter 10 (Holmes)',
  },
  // lose loose loss
  {
    sentence: 'Be careful not to ___ your bus pass.',
    options: ['lose', 'loose', 'loss'],
    answer: 'lose',
    tier: 1,
    sets: ['lose loose loss'],
    tip: '"Lose" (one o) means to no longer have something.',
  },
  {
    sentence: 'This screw is too ___ and needs tightening.',
    options: ['lose', 'loose', 'loss'],
    answer: 'loose',
    tier: 1,
    sets: ['lose loose loss'],
    tip: '"Loose" (two o\'s) means not tight or not fixed.',
  },
  {
    sentence: 'If we ___ this match, we are out of the cup.',
    options: ['lose', 'loose', 'loss'],
    answer: 'lose',
    tier: 1,
    sets: ['lose loose loss'],
    tip: '"Lose" is the opposite of "win".',
  },
  {
    sentence: 'The dog got out through a ___ fence panel.',
    options: ['lose', 'loose', 'loss'],
    answer: 'loose',
    tier: 1,
    sets: ['lose loose loss'],
    shares: ['threw through thorough'],
    tip: '"Loose" describes something not held firmly.',
  },
  {
    sentence: 'The team was upset after its ___ in the final.',
    options: ['loss', 'lose', 'loose'],
    answer: 'loss',
    tier: 1,
    sets: ['lose loose loss'],
    shares: ['its it is'],
  },
  {
    sentence: "But don't ___ your temper.",
    options: ['lose', 'loose', 'loss'],
    answer: 'lose',
    tier: 1,
    sets: ['lose loose loss'],
    source: 'Great Expectations, Chapter 43 (Drummle)',
  },
  // accept except expect
  {
    sentence: 'Everyone passed the test ___ one student.',
    options: ['accept', 'except', 'expect'],
    answer: 'except',
    tier: 1,
    sets: ['accept except expect'],
    shares: ['past passed'],
    tip: '"Except" means "not including".',
  },
  {
    sentence: 'The shop is open every day ___ Sunday.',
    options: ['accept', 'except', 'expect'],
    answer: 'except',
    tier: 1,
    sets: ['accept except expect'],
    tip: '"Except" leaves something out.',
  },
  {
    sentence: 'I ___ your apology, so let us say no more about it.',
    options: ['accept', 'except', 'expect'],
    answer: 'accept',
    tier: 2,
    sets: ['accept except expect'],
  },
  {
    sentence: 'We ___ the parcel to arrive on Friday.',
    options: ['expect', 'except', 'accept'],
    answer: 'expect',
    tier: 1,
    sets: ['accept except expect'],
  },
  {
    sentence: 'All the men ___ gone ___ one.',
    options: ['were … except', 'were … accept', 'where … except', 'where … accept'],
    answer: 'were … except',
    tier: 2,
    sets: ['accept except expect', 'where wear were we are'],
    source: 'Animal Farm, Chapter 4',
  },
  // aisle isle I will
  {
    sentence: 'The bride walked slowly down the ___.',
    options: ['aisle', 'isle', "I'll"],
    answer: 'aisle',
    tier: 1,
    sets: ['aisle isle I will'],
  },
  {
    sentence: '___ meet you at the bus stop after school.',
    options: ["I'll", 'Aisle', 'Isle'],
    answer: "I'll",
    tier: 1,
    sets: ['aisle isle I will'],
  },
  {
    sentence: 'They spent the summer on a small Scottish ___.',
    options: ['isle', 'aisle', "I'll"],
    answer: 'isle',
    tier: 2,
    sets: ['aisle isle I will'],
  },
  // heal heel he will
  {
    sentence: 'The cut on my knee should ___ in a few days.',
    options: ['heal', 'heel', "he'll"],
    answer: 'heal',
    tier: 1,
    sets: ['heal heel he will'],
  },
  {
    sentence: 'My new shoes have rubbed the back of my ___.',
    options: ['heel', 'heal', "he'll"],
    answer: 'heel',
    tier: 1,
    sets: ['heal heel he will'],
  },
  {
    sentence: '___ be here as soon as his train arrives.',
    options: ["He'll", 'Heal', 'Heel'],
    answer: "He'll",
    tier: 1,
    sets: ['heal heel he will'],
  },
  // cent scent sent
  {
    sentence: 'I ___ my cousin a birthday card.',
    options: ['sent', 'scent', 'cent'],
    answer: 'sent',
    tier: 1,
    sets: ['cent scent sent'],
  },
  {
    sentence: 'Nearly forty per ___ of the class walk to school.',
    options: ['cent', 'scent', 'sent'],
    answer: 'cent',
    tier: 2,
    sets: ['cent scent sent'],
  },
  {
    sentence: '“This sounds well. He has evidently picked up the ___ again,” said I.',
    options: ['scent', 'sent', 'cent'],
    answer: 'scent',
    tier: 2,
    sets: ['cent scent sent'],
    source: 'The Sign of Four, Chapter 9',
  },
  // sore saw soar
  {
    sentence: 'My legs were ___ after the long walk.',
    options: ['sore', 'soar', 'saw'],
    answer: 'sore',
    tier: 1,
    sets: ['sore saw soar'],
  },
  {
    sentence: 'We watched the eagle ___ high above the valley.',
    options: ['soar', 'sore', 'saw'],
    answer: 'soar',
    tier: 1,
    sets: ['sore saw soar'],
  },
  {
    sentence: 'Prices began to ___ after the storm ruined the harvest.',
    options: ['soar', 'sore', 'saw'],
    answer: 'soar',
    tier: 2,
    sets: ['sore saw soar'],
  },
  // pause paws pores pours
  {
    sentence: 'The cat licked its muddy ___.',
    options: ['paws', 'pause', 'pores', 'pours'],
    answer: 'paws',
    tier: 1,
    sets: ['pause paws pores pours'],
    shares: ['pore pour', 'its it is'],
  },
  {
    sentence: 'Your skin has millions of tiny ___.',
    options: ['pores', 'pours', 'paws', 'pause'],
    answer: 'pores',
    tier: 2,
    sets: ['pause paws pores pours'],
    shares: ['pore pour'],
  },
  {
    sentence: 'It always ___ with rain on sports day.',
    options: ['pours', 'pores', 'paws', 'pause'],
    answer: 'pours',
    tier: 1,
    sets: ['pause paws pores pours'],
    shares: ['pore pour'],
  },
  {
    sentence: 'I ___ for a reply.',
    options: ['pause', 'paws', 'pores', 'pours'],
    answer: 'pause',
    tier: 2,
    sets: ['pause paws pores pours'],
    shares: ['pore pour'],
    source: 'Julius Caesar, Act 3, Scene 2 (Brutus)',
  },
  {
    sentence: 'That gave the animals ___, and there was a hush.',
    options: ['pause', 'paws', 'pores', 'pours'],
    answer: 'pause',
    tier: 2,
    sets: ['pause paws pores pours'],
    shares: ['pore pour'],
    source: 'Animal Farm, Chapter 9',
  },
  // pore pour poor
  {
    sentence: 'She would ___ over old maps for hours.',
    options: ['pore', 'pour', 'poor'],
    answer: 'pore',
    tier: 2,
    sets: ['pore pour poor'],
    shares: ['pore pour'],
  },
  {
    sentence: 'Please ___ the milk into the jug.',
    options: ['pour', 'pore', 'poor'],
    answer: 'pour',
    tier: 1,
    sets: ['pore pour poor'],
    shares: ['pore pour'],
  },
  // seas sees seize
  {
    sentence: 'The storm whipped up huge ___ around the island.',
    options: ['seas', 'sees', 'seize'],
    answer: 'seas',
    tier: 1,
    sets: ['seas sees seize'],
  },
  {
    sentence: 'My grandmother ___ much better with her new glasses.',
    options: ['sees', 'seas', 'seize'],
    answer: 'sees',
    tier: 1,
    sets: ['seas sees seize'],
  },
  {
    sentence: 'The police were able to ___ the stolen goods.',
    options: ['seize', 'seas', 'sees'],
    answer: 'seize',
    tier: 2,
    sets: ['seas sees seize'],
  },
  // ewe you yew
  {
    sentence: 'The ___ stayed close to her newborn lamb.',
    options: ['ewe', 'yew', 'you'],
    answer: 'ewe',
    tier: 1,
    sets: ['ewe you yew'],
  },
  {
    sentence: 'An ancient ___ tree grows in the churchyard.',
    options: ['yew', 'ewe', 'you'],
    answer: 'yew',
    tier: 2,
    sets: ['ewe you yew'],
  },
  // flu flew flue
  {
    sentence: 'Half the class were off school with ___.',
    options: ['flu', 'flew', 'flue'],
    answer: 'flu',
    tier: 1,
    sets: ['flu flew flue'],
    shares: ['of off have'],
  },
  {
    sentence: 'The pigeons ___ up onto the roof.',
    options: ['flew', 'flu', 'flue'],
    answer: 'flew',
    tier: 1,
    sets: ['flu flew flue'],
  },
  {
    sentence: 'Smoke from the fire rises up the ___ and out of the chimney.',
    options: ['flue', 'flu', 'flew'],
    answer: 'flue',
    tier: 2,
    sets: ['flu flew flue'],
  },
  // rain reign rein
  {
    sentence: "Queen Victoria's ___ lasted for over sixty years.",
    options: ['reign', 'rein', 'rain'],
    answer: 'reign',
    tier: 2,
    sets: ['rain reign rein'],
  },
  {
    sentence: 'The rider pulled on the left ___ to turn the horse.',
    options: ['rein', 'reign', 'rain'],
    answer: 'rein',
    tier: 2,
    sets: ['rain reign rein'],
  },
  // cite site sight
  {
    sentence: 'Remember to ___ the line number when you quote from the poem.',
    options: ['cite', 'site', 'sight'],
    answer: 'cite',
    tier: 2,
    sets: ['cite site sight'],
  },
  {
    sentence: 'The builders cleared the ___ before work on the new school began.',
    options: ['site', 'sight', 'cite'],
    answer: 'site',
    tier: 2,
    sets: ['cite site sight'],
  },
  {
    sentence: 'Why did the Forsters ever let her go out of their ___?',
    options: ['sight', 'site', 'cite'],
    answer: 'sight',
    tier: 2,
    sets: ['cite site sight'],
    source: 'Pride and Prejudice, Chapter 47 (Mrs Bennet)',
  },
  {
    sentence: 'A terrible ___ had met ___ eyes.',
    options: ['sight … their', 'sight … there', 'site … their', 'site … there'],
    answer: 'sight … their',
    tier: 2,
    sets: ['cite site sight', 'their there they are'],
    source: 'Animal Farm, Chapter 6',
  },
  {
    sentence: 'On a frosty winter afternoon, I ___ in ___ of Thornfield Hall.',
    options: ['rode … sight', 'rode … site', 'road … sight', 'road … site'],
    answer: 'rode … sight',
    tier: 3,
    sets: ['cite site sight', 'road rode rowed'],
    source: 'Jane Eyre, Chapter 27 (Mr Rochester)',
  },
  // vain vane vein
  {
    sentence: 'The weather ___ on the church roof showed the wind was from the north.',
    options: ['vane', 'vain', 'vein'],
    answer: 'vane',
    tier: 2,
    sets: ['vain vane vein'],
    shares: ['weather whether'],
  },
  {
    sentence: 'The nurse took a blood sample from a ___ in my arm.',
    options: ['vein', 'vain', 'vane'],
    answer: 'vein',
    tier: 2,
    sets: ['vain vane vein'],
  },
  {
    sentence: 'We searched everywhere for the lost ring, but in ___.',
    options: ['vain', 'vein', 'vane'],
    answer: 'vain',
    tier: 2,
    sets: ['vain vane vein'],
  },
  // council counsel consul
  {
    sentence: 'The local ___ voted to build a new skate park.',
    options: ['council', 'counsel', 'consul'],
    answer: 'council',
    tier: 2,
    sets: ['council counsel consul'],
  },
  {
    sentence: 'My grandmother always gave wise ___ when I was worried.',
    options: ['counsel', 'council', 'consul'],
    answer: 'counsel',
    tier: 2,
    sets: ['council counsel consul'],
  },
  {
    sentence: "A ___ is an official who helps a country's citizens living in a foreign city.",
    options: ['consul', 'council', 'counsel'],
    answer: 'consul',
    tier: 2,
    sets: ['council counsel consul'],
  },
  {
    sentence: 'The ___ met to discuss the park, and a lawyer gave ___ on the new rules.',
    options: ['council … counsel', 'counsel … council', 'council … council', 'counsel … counsel'],
    answer: 'council … counsel',
    tier: 3,
    sets: ['council counsel consul'],
  },
  {
    sentence: 'And so I thank you for ___ good ___.',
    options: ['your … counsel', 'your … council', "you're … counsel", "you're … council"],
    answer: 'your … counsel',
    tier: 3,
    sets: ['council counsel consul', 'your you are'],
    source: 'Hamlet, Act 4, Scene 5 (Ophelia)',
  },
  // ensure insure assure
  {
    sentence: 'Check your answers to ___ that there are no careless mistakes.',
    options: ['ensure', 'insure', 'assure'],
    answer: 'ensure',
    tier: 2,
    sets: ['ensure insure assure'],
  },
  {
    sentence: 'It is sensible to ___ your bike against theft.',
    options: ['insure', 'ensure', 'assure'],
    answer: 'insure',
    tier: 2,
    sets: ['ensure insure assure'],
  },
  {
    sentence: 'I can ___ you that the coach will wait for us.',
    options: ['assure', 'ensure', 'insure'],
    answer: 'assure',
    tier: 2,
    sets: ['ensure insure assure'],
    shares: ['wait weight'],
  },
  // palate palette pallet
  {
    sentence: 'The roof of your mouth is called the ___.',
    options: ['palate', 'palette', 'pallet'],
    answer: 'palate',
    tier: 2,
    sets: ['palate palette pallet'],
  },
  {
    sentence: 'The forklift lifted a wooden ___ stacked with boxes.',
    options: ['pallet', 'palate', 'palette'],
    answer: 'pallet',
    tier: 2,
    sets: ['palate palette pallet'],
  },
  // holy wholly holey
  {
    sentence: 'Jerusalem is a ___ city for several religions.',
    options: ['holy', 'wholly', 'holey'],
    answer: 'holy',
    tier: 2,
    sets: ['holy wholly holey'],
  },
  {
    sentence: 'His old socks were so ___ that his toes poked out.',
    options: ['holey', 'holy', 'wholly'],
    answer: 'holey',
    tier: 2,
    sets: ['holy wholly holey'],
    shares: ['whole hole'],
  },
  {
    sentence: 'I am not ___ convinced by his excuse.',
    options: ['wholly', 'holy', 'holey'],
    answer: 'wholly',
    tier: 2,
    sets: ['holy wholly holey'],
  },
  {
    sentence: 'He was growing ___ inattentive to other people, and ___ engrossed by her.',
    options: ['quite … wholly', 'quite … holy', 'quiet … wholly', 'quiet … holy'],
    answer: 'quite … wholly',
    tier: 3,
    sets: ['holy wholly holey', 'quiet quite quit'],
    source: 'Pride and Prejudice, Chapter 25 (Elizabeth)',
  },
  // idle idol idyll
  {
    sentence: 'The singer was a teenage ___ in the 1960s.',
    options: ['idol', 'idle', 'idyll'],
    answer: 'idol',
    tier: 2,
    sets: ['idle idol idyll'],
  },
  {
    sentence: 'The factory machines stood ___ during the strike.',
    options: ['idle', 'idol', 'idyll'],
    answer: 'idle',
    tier: 2,
    sets: ['idle idol idyll'],
  },
  {
    sentence: 'The cottage by the lake was a peaceful country ___.',
    options: ['idyll', 'idle', 'idol'],
    answer: 'idyll',
    tier: 2,
    sets: ['idle idol idyll'],
  },
  {
    sentence: 'They were ignorant, ___, and ___.',
    options: ['idle … vain', 'idle … vein', 'idol … vain', 'idol … vein'],
    answer: 'idle … vain',
    tier: 3,
    sets: ['idle idol idyll', 'vain vane vein'],
    source: 'Pride and Prejudice, Chapter 37',
  },
  // peak peek pique
  {
    sentence: 'The climbers reached the ___ of the mountain at dawn.',
    options: ['peak', 'peek', 'pique'],
    answer: 'peak',
    tier: 2,
    sets: ['peak peek pique'],
  },
  {
    sentence: "Close your eyes and don't ___ until I say so.",
    options: ['peek', 'peak', 'pique'],
    answer: 'peek',
    tier: 2,
    sets: ['peak peek pique'],
  },
  {
    sentence: "A mysterious first line can ___ a reader's curiosity.",
    options: ['pique', 'peak', 'peek'],
    answer: 'pique',
    tier: 2,
    sets: ['peak peek pique'],
  },
  // rapped wrapped rapt
  {
    sentence: 'She ___ the present in shiny paper.',
    options: ['wrapped', 'rapped', 'rapt'],
    answer: 'wrapped',
    tier: 2,
    sets: ['rapped wrapped rapt'],
  },
  {
    sentence: 'Someone ___ loudly on the front door.',
    options: ['rapped', 'wrapped', 'rapt'],
    answer: 'rapped',
    tier: 2,
    sets: ['rapped wrapped rapt'],
  },
  {
    sentence: 'The audience listened with ___ attention.',
    options: ['rapt', 'rapped', 'wrapped'],
    answer: 'rapt',
    tier: 2,
    sets: ['rapped wrapped rapt'],
  },
  // censor censure sensor
  {
    sentence: 'A ___ switches the lights on when someone walks into the room.',
    options: ['sensor', 'censor', 'censure'],
    answer: 'sensor',
    tier: 2,
    sets: ['censor censure sensor'],
  },
  {
    sentence: "In wartime, a ___ read soldiers' letters and removed secret details.",
    options: ['censor', 'sensor', 'censure'],
    answer: 'censor',
    tier: 2,
    sets: ['censor censure sensor'],
  },
  {
    sentence: 'The referee faced public ___ for his poor decision.',
    options: ['censure', 'censor', 'sensor'],
    answer: 'censure',
    tier: 2,
    sets: ['censor censure sensor'],
  },
  // medal meddle metal mettle
  {
    sentence: 'She won a gold ___ at the swimming gala.',
    options: ['medal', 'meddle', 'metal', 'mettle'],
    answer: 'medal',
    tier: 2,
    sets: ['medal meddle metal mettle'],
    shares: ['one won'],
  },
  {
    sentence: "Please don't ___ in other people's arguments.",
    options: ['meddle', 'medal', 'metal', 'mettle'],
    answer: 'meddle',
    tier: 2,
    sets: ['medal meddle metal mettle'],
  },
  {
    sentence: 'The old gate was made of rusty ___.',
    options: ['metal', 'mettle', 'medal', 'meddle'],
    answer: 'metal',
    tier: 2,
    sets: ['medal meddle metal mettle'],
  },
  {
    sentence: 'The young team showed real ___ by fighting back from three goals down.',
    options: ['mettle', 'metal', 'medal', 'meddle'],
    answer: 'mettle',
    tier: 2,
    sets: ['medal meddle metal mettle'],
  },
  // raise rays raze
  {
    sentence: 'If you have a question, ___ your hand.',
    options: ['raise', 'rays', 'raze'],
    answer: 'raise',
    tier: 2,
    sets: ['raise rays raze'],
  },
  {
    sentence: "The sun's ___ warmed the sand.",
    options: ['rays', 'raise', 'raze'],
    answer: 'rays',
    tier: 2,
    sets: ['raise rays raze'],
  },
  {
    sentence: 'The invaders threatened to ___ the town to the ground.',
    options: ['raze', 'raise', 'rays'],
    answer: 'raze',
    tier: 2,
    sets: ['raise rays raze'],
  },
  // your you are
  {
    sentence: 'If ___ cold, put on ___ jumper.',
    options: ["you're … your", "your … you're", "you're … you're", 'your … your'],
    answer: "you're … your",
    tier: 2,
    sets: ['your you are'],
  },
  {
    sentence: '“Go to ___ room, and put on ___ bonnet,” he replied.',
    options: ['your … your', "your … you're", "you're … your", "you're … you're"],
    answer: 'your … your',
    tier: 2,
    sets: ['your you are'],
    source: 'Jane Eyre, Chapter 24 (Mr Rochester)',
  },
  {
    sentence: '___ lies ___ love.',
    options: ['There … your', "There … you're", 'Their … your', "Their … you're"],
    answer: 'There … your',
    tier: 2,
    sets: ['your you are', 'their there they are'],
    source: "A Midsummer Night's Dream, Act 4, Scene 1 (Oberon)",
  },
  {
    sentence: '___ mother insists upon ___ accepting it.',
    options: ['Your … your', "Your … you're", "You're … your", "You're … you're"],
    answer: 'Your … your',
    tier: 2,
    sets: ['your you are'],
    source: 'Pride and Prejudice, Chapter 20 (Mr Bennet)',
  },
  // its it is
  {
    sentence: '___ clear that the club has lost ___ best player.',
    options: ["It's … its", "Its … it's", "It's … it's", 'Its … its'],
    answer: "It's … its",
    tier: 2,
    sets: ['its it is'],
  },
  {
    sentence: 'When ___ dark, the owl leaves ___ nest.',
    options: ["it's … its", "its … it's", "it's … it's", 'its … its'],
    answer: "it's … its",
    tier: 2,
    sets: ['its it is'],
  },
  {
    sentence: 'The robot raised ___ arm and pointed ___ finger at me.',
    options: ['its … its', "it's … its", "its … it's", "it's … it's"],
    answer: 'its … its',
    tier: 2,
    sets: ['its it is'],
  },
  {
    sentence: '___ too late ___, though.',
    options: ["It's … now", "It's … know", 'Its … now', 'Its … know'],
    answer: "It's … now",
    tier: 2,
    sets: ['its it is', 'know no now'],
    source: 'Silas Marner, Chapter 13',
  },
  {
    sentence: '___ worse ___ the Workhouse.',
    options: ["It's … than", "It's … then", 'Its … than', 'Its … then'],
    answer: "It's … than",
    tier: 2,
    sets: ['its it is', 'then than'],
    source: 'Silas Marner, Chapter 21 (Eppie)',
  },
  {
    sentence: 'No, ___ not ___ so bad as that.',
    options: ["it's … quite", "it's … quiet", 'its … quite', 'its … quiet'],
    answer: "it's … quite",
    tier: 2,
    sets: ['its it is', 'quiet quite quit'],
    source: 'The Sign of Four, Chapter 8 (Holmes)',
  },
  // here hear
  {
    sentence: 'Can you ___ the birds? I ___ them every morning.',
    options: ['hear … hear', 'here … hear', 'hear … here', 'here … here'],
    answer: 'hear … hear',
    tier: 2,
    sets: ['here hear'],
  },
  {
    sentence: 'Come over ___ so you can ___ the music better.',
    options: ['here … hear', 'hear … here', 'here … here', 'hear … hear'],
    answer: 'here … hear',
    tier: 2,
    sets: ['here hear'],
  },
  // then than
  {
    sentence: 'First we ate, ___ we danced, and ___ we went home.',
    options: ['then … then', 'than … then', 'then … than', 'than … than'],
    answer: 'then … then',
    tier: 2,
    sets: ['then than'],
  },
  {
    sentence: 'She ran faster ___ ever, and ___ she collapsed on the grass.',
    options: ['than … then', 'then … than', 'than … than', 'then … then'],
    answer: 'than … then',
    tier: 2,
    sets: ['then than'],
  },
  {
    sentence: 'But ___ is worse ___ that.',
    options: ['there … than', 'there … then', 'their … than', 'their … then'],
    answer: 'there … than',
    tier: 2,
    sets: ['then than', 'their there they are'],
    source: 'Animal Farm, Chapter 7',
  },
  // weather whether
  {
    sentence: 'I wonder ___ it will rain, and ___ the trip will go ahead.',
    options: ['whether … whether', 'weather … whether', 'whether … weather', 'weather … weather'],
    answer: 'whether … whether',
    tier: 2,
    sets: ['weather whether'],
  },
  {
    sentence: 'In January ___ came bitterly hard ___.',
    options: ['there … weather', 'there … whether', 'their … weather', 'their … whether'],
    answer: 'there … weather',
    tier: 2,
    sets: ['weather whether', 'their there they are'],
    source: 'Animal Farm, Chapter 5',
  },
  // brake break
  {
    sentence: 'Squeeze the ___ gently, or the chain might ___.',
    options: ['brake … break', 'break … brake', 'brake … brake', 'break … break'],
    answer: 'brake … break',
    tier: 2,
    sets: ['brake break'],
  },
  {
    sentence: 'If you ___ too late, you will have to ___ much harder.',
    options: ['brake … brake', 'break … brake', 'brake … break', 'break … break'],
    answer: 'brake … brake',
    tier: 2,
    sets: ['brake break'],
  },
  {
    sentence: 'Drivers who ___ the speed limit may have to ___ suddenly.',
    options: ['break … brake', 'brake … break', 'break … break', 'brake … brake'],
    answer: 'break … brake',
    tier: 2,
    sets: ['brake break'],
  },
  // of off have
  {
    sentence: 'You should ___ seen the look ___ surprise on his face.',
    options: ['have … of', 'of … of', 'have … off', 'of … off'],
    answer: 'have … of',
    tier: 2,
    sets: ['of off have'],
    shares: ['seen scene'],
  },
  {
    sentence: 'She must ___ taken her coat ___ in the hall.',
    options: ['have … off', 'of … off', 'have … of', 'of … of'],
    answer: 'have … off',
    tier: 2,
    sets: ['of off have'],
  },
  {
    sentence: 'Take ___ your muddy boots and get ___ the sofa.',
    options: ['off … off', 'of … off', 'off … of', 'of … of'],
    answer: 'off … off',
    tier: 2,
    sets: ['of off have'],
  },
  {
    sentence: "I could ___ won if I hadn't fallen ___ my bike.",
    options: ['have … off', 'of … off', 'have … of', 'of … of'],
    answer: 'have … off',
    tier: 2,
    sets: ['of off have'],
    shares: ['one won'],
  },
  // past passed
  {
    sentence: 'We ___ the old mill, then ___ the church on the hill.',
    options: ['passed … passed', 'past … passed', 'passed … past', 'past … past'],
    answer: 'passed … passed',
    tier: 2,
    sets: ['past passed'],
  },
  {
    sentence: '___ weeks ___ away, and Jane saw nothing of him.',
    options: ['Four … passed', 'Four … past', 'For … passed', 'For … past'],
    answer: 'Four … passed',
    tier: 3,
    sets: ['past passed', 'for four fore'],
    source: 'Pride and Prejudice, Chapter 26',
  },
  {
    sentence: 'And ___, as it was long ___ one, I prepared to leave him.',
    options: ['now … past', 'now … passed', 'know … past', 'know … passed'],
    answer: 'now … past',
    tier: 3,
    sets: ['past passed', 'know no now'],
    source: 'Jane Eyre, Chapter 25',
  },
  // allowed aloud
  {
    sentence: '"And shall I still be ___ to ___ ribbons in my mane?" asked Mollie.',
    options: ['allowed … wear', 'allowed … where', 'aloud … wear', 'aloud … where'],
    answer: 'allowed … wear',
    tier: 2,
    sets: ['allowed aloud', 'where wear were we are'],
    source: 'Animal Farm, Chapter 2',
  },
  {
    sentence: 'We dine at Rosings twice every ___, and are never ___ to walk home.',
    options: ['week … allowed', 'week … aloud', 'weak … allowed', 'weak … aloud'],
    answer: 'week … allowed',
    tier: 2,
    sets: ['allowed aloud', 'weak week'],
    source: 'Pride and Prejudice, Chapter 28 (Mr Collins)',
  },
  {
    sentence: '___ is her father’s house, I’ll call ___.',
    options: ['Here … aloud', 'Here … allowed', 'Hear … aloud', 'Hear … allowed'],
    answer: 'Here … aloud',
    tier: 2,
    sets: ['allowed aloud', 'here hear'],
    shares: ['aisle isle I will'],
    source: 'Othello, Act 1, Scene 1 (Roderigo)',
  },
  // whole hole
  {
    sentence: 'We clambered up ___ the ___.',
    options: ['through … hole', 'through … whole', 'threw … hole', 'threw … whole'],
    answer: 'through … hole',
    tier: 2,
    sets: ['whole hole', 'threw through thorough'],
    source: 'The Sign of Four, Chapter 7',
  },
  // piece peace
  {
    sentence: 'Leave me in ___ to finish my ___ of toast.',
    options: ['peace … piece', 'piece … peace', 'peace … peace', 'piece … piece'],
    answer: 'peace … piece',
    tier: 2,
    sets: ['piece peace'],
  },
  {
    sentence: '___ do, brother, let her be at ___ a while.',
    options: ['Now … peace', 'Now … piece', 'Know … peace', 'Know … piece'],
    answer: 'Now … peace',
    tier: 2,
    sets: ['piece peace', 'know no now'],
    source: 'Jane Eyre, Chapter 29 (Diana)',
  },
  // weak week
  {
    sentence: 'The bridge was ___, and the old fence beside it was ___ too.',
    options: ['weak … weak', 'week … weak', 'weak … week', 'week … week'],
    answer: 'weak … weak',
    tier: 2,
    sets: ['weak week'],
  },
  {
    sentence: 'I ___ sat down: I felt ___ and tired.',
    options: ['then … weak', 'then … week', 'than … weak', 'than … week'],
    answer: 'then … weak',
    tier: 2,
    sets: ['weak week', 'then than'],
    source: 'Jane Eyre, Chapter 26',
  },
  // great grate
  {
    sentence: '“The ___ is much ___ small,” he answered.',
    options: ['grate … too', 'grate … to', 'great … too', 'great … to'],
    answer: 'grate … too',
    tier: 2,
    sets: ['great grate', 'to too two'],
    source: 'The Sign of Four, Chapter 6 (Holmes)',
  },
  // heard herd
  {
    sentence: 'We ___ the farmer calling his ___ of cows.',
    options: ['heard … herd', 'herd … heard', 'heard … heard', 'herd … herd'],
    answer: 'heard … herd',
    tier: 2,
    sets: ['heard herd'],
    shares: ['here hear'],
  },
  // hour our
  {
    sentence: '___ train was an ___ late.',
    options: ['Our … hour', 'Hour … our', 'Our … our', 'Hour … hour'],
    answer: 'Our … hour',
    tier: 2,
    sets: ['hour our'],
  },
  {
    sentence: 'He had plenty to do ___ the next ___.',
    options: ['through … hour', 'through … our', 'threw … hour', 'threw … our'],
    answer: 'through … hour',
    tier: 2,
    sets: ['hour our', 'threw through thorough'],
    source: 'Silas Marner, Chapter 12',
  },
  // seen scene
  {
    sentence:
      'It was the most dramatic ___ I have ever watched, and the final ___ was even better.',
    options: ['scene … scene', 'seen … scene', 'scene … seen', 'seen … seen'],
    answer: 'scene … scene',
    tier: 2,
    sets: ['seen scene'],
  },
  {
    sentence: '___ they saw what Clover had ___.',
    options: ['Then … seen', 'Then … scene', 'Than … seen', 'Than … scene'],
    answer: 'Then … seen',
    tier: 2,
    sets: ['seen scene', 'then than'],
    source: 'Animal Farm, Chapter 10',
  },
  // wait weight
  {
    sentence: 'Please ___ here while the nurse checks your height and ___.',
    options: ['wait … weight', 'weight … wait', 'wait … wait', 'weight … weight'],
    answer: 'wait … weight',
    tier: 2,
    sets: ['wait weight'],
  },
  {
    sentence: 'We shall ___ here until ___ return.',
    options: ['wait … your', "wait … you're", 'weight … your', "weight … you're"],
    answer: 'wait … your',
    tier: 2,
    sets: ['wait weight', 'your you are'],
    source: 'The Sign of Four, Chapter 5 (Holmes)',
  },
  // wood would
  {
    sentence: '___ you help me carry this ___ into the shed?',
    options: ['Would … wood', 'Wood … would', 'Would … would', 'Wood … wood'],
    answer: 'Would … wood',
    tier: 2,
    sets: ['wood would'],
  },
  // one won
  {
    sentence: 'The team ___ the cup, and then it ___ the league as well.',
    options: ['won … won', 'one … won', 'won … one', 'one … one'],
    answer: 'won … won',
    tier: 2,
    sets: ['one won'],
  },
  {
    sentence: 'Only ___ team ___ every match this season.',
    options: ['one … won', 'won … one', 'one … one', 'won … won'],
    answer: 'one … won',
    tier: 2,
    sets: ['one won'],
  },
  // course coarse
  {
    sentence: 'Of ___, the sand on this beach is very ___.',
    options: ['course … coarse', 'coarse … course', 'course … course', 'coarse … coarse'],
    answer: 'course … coarse',
    tier: 2,
    sets: ['course coarse'],
  },
  // fair fare
  {
    sentence: 'It is not ___ that the bus ___ has gone up again.',
    options: ['fair … fare', 'fare … fair', 'fair … fair', 'fare … fare'],
    answer: 'fair … fare',
    tier: 2,
    sets: ['fair fare'],
  },
  {
    sentence: '___ is foul, and foul is ___: / Hover through the fog and filthy air.',
    options: ['Fair … fair', 'Fair … fare', 'Fare … fair', 'Fare … fare'],
    answer: 'Fair … fair',
    tier: 2,
    sets: ['fair fare'],
    shares: ['threw through thorough', 'which witch'],
    source: 'Macbeth, Act 1, Scene 1 (the witches)',
  },
  // which witch
  {
    sentence: 'The ___ could not decide ___ spell to cast.',
    options: ['witch … which', 'which … witch', 'witch … witch', 'which … which'],
    answer: 'witch … which',
    tier: 2,
    sets: ['which witch'],
  },
  // role roll
  {
    sentence: 'She won the main ___, and her brother got a small ___ in the same play.',
    options: ['role … role', 'roll … role', 'role … roll', 'roll … roll'],
    answer: 'role … role',
    tier: 2,
    sets: ['role roll'],
    shares: ['one won'],
  },
  {
    sentence: 'Her ___ in the play was to ___ the dice at the start.',
    options: ['role … roll', 'roll … role', 'role … role', 'roll … roll'],
    answer: 'role … roll',
    tier: 2,
    sets: ['role roll'],
  },
  // bare bear
  {
    sentence: "I can't ___ walking in ___ feet on hot sand.",
    options: ['bear … bare', 'bare … bear', 'bear … bear', 'bare … bare'],
    answer: 'bear … bare',
    tier: 2,
    sets: ['bare bear'],
  },
  // principal principle
  {
    sentence: 'Our ___ explained the ___ behind the rule.',
    options: [
      'principal … principle',
      'principle … principal',
      'principal … principal',
      'principle … principle',
    ],
    answer: 'principal … principle',
    tier: 3,
    sets: ['principal principle'],
  },
  {
    sentence: 'Fairness is a ___ I believe in, and honesty is another ___ I try to follow.',
    options: [
      'principle … principle',
      'principal … principle',
      'principle … principal',
      'principal … principal',
    ],
    answer: 'principle … principle',
    tier: 3,
    sets: ['principal principle'],
  },
  {
    sentence: 'I have been a selfish being all my life, in ___, though not in ___.',
    options: [
      'practice … principle',
      'practice … principal',
      'practise … principle',
      'practise … principal',
    ],
    answer: 'practice … principle',
    tier: 3,
    sets: ['principal principle', 'practice practise'],
    source: 'Pride and Prejudice, Chapter 58 (Mr Darcy)',
  },
  {
    sentence: 'Bingley was the ___ spokesman, and Miss Bennet the ___ object.',
    options: [
      'principal … principal',
      'principal … principle',
      'principle … principal',
      'principle … principle',
    ],
    answer: 'principal … principal',
    tier: 3,
    sets: ['principal principle'],
    source: 'Pride and Prejudice, Chapter 15',
  },
  // complement compliment
  {
    sentence: 'The red scarf will ___ your coat, and you are sure to get a ___.',
    options: [
      'complement … compliment',
      'compliment … complement',
      'complement … complement',
      'compliment … compliment',
    ],
    answer: 'complement … compliment',
    tier: 3,
    sets: ['complement compliment'],
  },
  {
    sentence: 'The coach paid her a ___, and then paid her team-mate the same ___.',
    options: [
      'compliment … compliment',
      'complement … compliment',
      'compliment … complement',
      'complement … complement',
    ],
    answer: 'compliment … compliment',
    tier: 3,
    sets: ['complement compliment'],
  },
  {
    sentence: 'Every guest received a ___ drink, and the colours of the room were ___.',
    options: [
      'complimentary … complementary',
      'complementary … complimentary',
      'complimentary … complimentary',
      'complementary … complementary',
    ],
    answer: 'complimentary … complementary',
    tier: 3,
    sets: ['complement compliment'],
  },
  {
    sentence: '___ my thanks for the ___ you are paying me.',
    options: [
      'Accept … compliment',
      'Accept … complement',
      'Except … compliment',
      'Except … complement',
    ],
    answer: 'Accept … compliment',
    tier: 3,
    sets: ['complement compliment', 'accept except expect'],
    source: 'Pride and Prejudice, Chapter 19 (Elizabeth)',
  },
  {
    sentence: 'I did not ___ such a ___.',
    options: [
      'expect … compliment',
      'expect … complement',
      'except … compliment',
      'except … complement',
    ],
    answer: 'expect … compliment',
    tier: 3,
    sets: ['complement compliment', 'accept except expect'],
    source: 'Pride and Prejudice, Chapter 4 (Jane)',
  },
  // affect effect
  {
    sentence: 'Loud noise can ___ your sleep, and the ___ may last all day.',
    options: ['affect … effect', 'effect … affect', 'affect … affect', 'effect … effect'],
    answer: 'affect … effect',
    tier: 3,
    sets: ['affect effect'],
  },
  {
    sentence: 'The new rule had no ___ at first, but it soon began to ___ how people behaved.',
    options: ['effect … affect', 'affect … effect', 'effect … effect', 'affect … affect'],
    answer: 'effect … affect',
    tier: 3,
    sets: ['affect effect'],
  },
  {
    sentence: 'The film had a strange ___ on me, and its music had the same ___ on my sister.',
    options: ['effect … effect', 'affect … effect', 'effect … affect', 'affect … affect'],
    answer: 'effect … effect',
    tier: 3,
    sets: ['affect effect'],
    shares: ['its it is'],
  },
  {
    sentence: '___ was also a postscript to this ___.',
    options: ['There … effect', 'There … affect', 'Their … effect', 'Their … affect'],
    answer: 'There … effect',
    tier: 3,
    sets: ['affect effect', 'their there they are'],
    source: 'Pride and Prejudice, Chapter 48',
  },
  {
    sentence: 'I do ___ you, that the news does not ___ me either with pleasure or pain.',
    options: ['assure … affect', 'assure … effect', 'ensure … affect', 'ensure … effect'],
    answer: 'assure … affect',
    tier: 3,
    sets: ['affect effect', 'ensure insure assure'],
    source: 'Pride and Prejudice, Chapter 53 (Jane)',
  },
  // practice practise
  {
    sentence: 'You need to ___ every day, because ___ makes perfect.',
    options: [
      'practise … practice',
      'practice … practise',
      'practise … practise',
      'practice … practice',
    ],
    answer: 'practise … practice',
    tier: 3,
    sets: ['practice practise'],
  },
  {
    sentence: 'I ___ the piano before school, and I ___ my lines after it.',
    options: [
      'practise … practise',
      'practice … practise',
      'practise … practice',
      'practice … practice',
    ],
    answer: 'practise … practise',
    tier: 3,
    sets: ['practice practise'],
  },
  {
    sentence:
      'It was not the rector’s ___ to let a charming blush pass without an appropriate ___.',
    options: [
      'practice … compliment',
      'practice … complement',
      'practise … compliment',
      'practise … complement',
    ],
    answer: 'practice … compliment',
    tier: 3,
    sets: ['practice practise', 'complement compliment'],
    source: 'Silas Marner, Chapter 11',
  },
  // stationary stationery
  {
    sentence: 'The bus stood ___ in traffic, so I read the list of ___ I needed for the new term.',
    options: [
      'stationary … stationery',
      'stationery … stationary',
      'stationary … stationary',
      'stationery … stationery',
    ],
    answer: 'stationary … stationery',
    tier: 3,
    sets: ['stationary stationery'],
  },
  {
    sentence: 'For, ___ was something very comfortable in having plenty of ___.',
    options: [
      'there … stationery',
      'there … stationary',
      'their … stationery',
      'their … stationary',
    ],
    answer: 'there … stationery',
    tier: 3,
    sets: ['stationary stationery', 'their there they are'],
    source: 'Great Expectations, Chapter 34',
  },
  // discreet discrete
  {
    sentence:
      'The class was split into ___ groups for the project, and the teacher was ___ about who was struggling.',
    options: [
      'discrete … discreet',
      'discreet … discrete',
      'discrete … discrete',
      'discreet … discreet',
    ],
    answer: 'discrete … discreet',
    tier: 3,
    sets: ['discreet discrete'],
  },
  {
    sentence: 'Be ___ about the surprise party, and ask the others to be ___ too.',
    options: [
      'discreet … discreet',
      'discrete … discreet',
      'discreet … discrete',
      'discrete … discrete',
    ],
    answer: 'discreet … discreet',
    tier: 3,
    sets: ['discreet discrete'],
  },
  // licence license
  {
    sentence:
      'You need a ___ to fish in this lake, and the owners will only ___ ten anglers a day.',
    options: ['licence … license', 'license … licence', 'licence … licence', 'license … license'],
    answer: 'licence … license',
    tier: 3,
    sets: ['licence license'],
    shares: ['advice advise', 'practice practise'],
  },
  {
    sentence: 'A driving ___ costs money, and so does a fishing ___.',
    options: ['licence … licence', 'license … licence', 'licence … license', 'license … license'],
    answer: 'licence … licence',
    tier: 3,
    sets: ['licence license'],
  },
  {
    sentence:
      '___ many farmers had assumed, without due enquiry, that on such a farm a spirit of ___ and indiscipline would prevail.',
    options: ['Too … licence', 'Too … license', 'To … licence', 'To … license'],
    answer: 'Too … licence',
    tier: 3,
    sets: ['licence license', 'to too two'],
    source: 'Animal Farm, Chapter 10',
  },
  // advice advise
  {
    sentence: "My teacher's ___ was to read the poem again, and I would ___ you to do the same.",
    options: ['advice … advise', 'advise … advice', 'advice … advice', 'advise … advise'],
    answer: 'advice … advise',
    tier: 3,
    sets: ['advice advise'],
  },
  {
    sentence: '___ is one point, on which I want your ___.',
    options: ['There … advice', 'There … advise', 'Their … advice', 'Their … advise'],
    answer: 'There … advice',
    tier: 3,
    sets: ['advice advise', 'their there they are'],
    source: 'Pride and Prejudice, Chapter 40 (Elizabeth)',
  },
  {
    sentence: 'If my ___ had been asked, I should not have been ___.',
    options: ['advice … here', 'advice … hear', 'advise … here', 'advise … hear'],
    answer: 'advice … here',
    tier: 3,
    sets: ['advice advise', 'here hear'],
    source: 'Great Expectations, Chapter 18 (Mr Jaggers)',
  },
  {
    sentence:
      'He had the ___ of an eminent oculist; and he eventually recovered the ___ of that one eye.',
    options: ['advice … sight', 'advice … site', 'advise … sight', 'advise … site'],
    answer: 'advice … sight',
    tier: 3,
    sets: ['advice advise', 'cite site sight'],
    shares: ['eminent imminent'],
    source: 'Jane Eyre, Chapter 38',
  },
  {
    sentence: 'But ___ is one thing on which you may ___ me.',
    options: ['there … advise', 'there … advice', 'their … advise', 'their … advice'],
    answer: 'there … advise',
    tier: 3,
    sets: ['advice advise', 'their there they are'],
    shares: ['licence license'],
    source: 'Jekyll and Hyde, Incident of the Letter (Dr Jekyll)',
  },
  // device devise
  {
    sentence: "The engineers had to ___ a new ___ for measuring the river's depth.",
    options: ['devise … device', 'device … devise', 'devise … devise', 'device … device'],
    answer: 'devise … device',
    tier: 3,
    sets: ['device devise'],
    shares: ['advice advise'],
  },
  {
    sentence: 'This falls out better ___ I could ___.',
    options: ['than … devise', 'than … device', 'then … devise', 'then … device'],
    answer: 'than … devise',
    tier: 3,
    sets: ['device devise', 'then than'],
    source: "A Midsummer Night's Dream, Act 3, Scene 2 (Oberon)",
  },
  {
    sentence: 'I sat staring before me, trying in ___ to ___ some countervailing thought.',
    options: ['vain … devise', 'vain … device', 'vein … devise', 'vein … device'],
    answer: 'vain … devise',
    tier: 3,
    sets: ['device devise', 'vain vane vein'],
    source: 'The War of the Worlds, Book Two, Chapter 7',
  },
  // prophecy prophesy
  {
    sentence:
      '“I ___ that you will travel far,” said the fortune-teller, but nobody believed her ___.',
    options: [
      'prophesy … prophecy',
      'prophecy … prophesy',
      'prophesy … prophesy',
      'prophecy … prophecy',
    ],
    answer: 'prophesy … prophecy',
    tier: 3,
    sets: ['prophecy prophesy'],
  },
  {
    sentence:
      'And when the human beings listened to it, they secretly trembled, hearing in it a ___ of ___ future doom.',
    options: ['prophecy … their', 'prophecy … there', 'prophesy … their', 'prophesy … there'],
    answer: 'prophecy … their',
    tier: 3,
    sets: ['prophecy prophesy', 'their there they are'],
    source: 'Animal Farm, Chapter 4',
  },
  // dependant dependent
  {
    sentence: "The family's only ___ is their young son, who is ___ on them for everything.",
    options: [
      'dependant … dependent',
      'dependent … dependant',
      'dependant … dependant',
      'dependent … dependent',
    ],
    answer: 'dependant … dependent',
    tier: 3,
    sets: ['dependant dependent'],
  },
  // moral morale
  {
    sentence:
      "The team's ___ was low after the defeat, but the ___ of the story is that you should never give up.",
    options: ['morale … moral', 'moral … morale', 'morale … morale', 'moral … moral'],
    answer: 'morale … moral',
    tier: 3,
    sets: ['moral morale'],
    shares: ['storey story'],
  },
  // personal personnel
  {
    sentence: 'Tell the ___ department if you must miss work for ___ reasons.',
    options: [
      'personnel … personal',
      'personal … personnel',
      'personnel … personnel',
      'personal … personal',
    ],
    answer: 'personnel … personal',
    tier: 3,
    sets: ['personal personnel'],
  },
  // elicit illicit
  {
    sentence: 'The police tried to ___ information about the ___ sale of fireworks.',
    options: ['elicit … illicit', 'illicit … elicit', 'elicit … elicit', 'illicit … illicit'],
    answer: 'elicit … illicit',
    tier: 3,
    sets: ['elicit illicit'],
  },
  // eminent imminent
  {
    sentence: 'The ___ scientist warned that a storm was ___.',
    options: [
      'eminent … imminent',
      'imminent … eminent',
      'eminent … eminent',
      'imminent … imminent',
    ],
    answer: 'eminent … imminent',
    tier: 3,
    sets: ['eminent imminent'],
  },
  // breath breathe
  {
    sentence: 'Take a deep ___ and ___ out slowly.',
    options: ['breath … breathe', 'breathe … breath', 'breath … breath', 'breathe … breathe'],
    answer: 'breath … breathe',
    tier: 3,
    sets: ['breath breathe'],
  },
  {
    sentence: 'At the churchyard wicket he stopped: he discovered I was ___ out of ___.',
    options: ['quite … breath', 'quite … breathe', 'quiet … breath', 'quiet … breathe'],
    answer: 'quite … breath',
    tier: 3,
    sets: ['breath breathe', 'quiet quite quit'],
    source: 'Jane Eyre, Chapter 26',
  },
  // lightning lightening
  {
    sentence:
      'A flash of ___ lit the sky, and an hour later the sky was ___ as the storm moved away.',
    options: [
      'lightning … lightening',
      'lightening … lightning',
      'lightning … lightning',
      'lightening … lightening',
    ],
    answer: 'lightning … lightening',
    tier: 3,
    sets: ['lightning lightening'],
    shares: ['hour our'],
  },
  {
    sentence: 'In thunder, ___, or in ___?',
    options: ['lightning … rain', 'lightning … reign', 'lightening … rain', 'lightening … reign'],
    answer: 'lightning … rain',
    tier: 3,
    sets: ['lightning lightening', 'rain reign rein'],
    shares: ['which witch'],
    source: 'Macbeth, Act 1, Scene 1 (First Witch)',
  },
  // storey story
  {
    sentence: 'The flat is on the third ___, and the lift stops at every ___.',
    options: ['storey … storey', 'story … storey', 'storey … story', 'story … story'],
    answer: 'storey … storey',
    tier: 3,
    sets: ['storey story'],
  },
  {
    sentence: 'The ___ is set in a house where the attic is on the fourth ___.',
    options: ['story … storey', 'storey … story', 'story … story', 'storey … storey'],
    answer: 'story … storey',
    tier: 3,
    sets: ['storey story'],
  },
  {
    sentence: 'It came out of the third ___; for it ___ overhead.',
    options: ['storey … passed', 'storey … past', 'story … passed', 'story … past'],
    answer: 'storey … passed',
    tier: 3,
    sets: ['storey story', 'past passed'],
    source: 'Jane Eyre, Chapter 20',
  },
  // draft draught
  {
    sentence: 'I finished the first ___ of my essay and shut the window to keep out the ___.',
    options: ['draft … draught', 'draught … draft', 'draft … draft', 'draught … draught'],
    answer: 'draft … draught',
    tier: 3,
    sets: ['draft draught'],
  },
  {
    sentence:
      'Bessie ___ endeavoured to persuade her to take a sedative ___: she succeeded with difficulty.',
    options: ['now … draught', 'now … draft', 'know … draught', 'know … draft'],
    answer: 'now … draught',
    tier: 3,
    sets: ['draft draught', 'know no now'],
    source: 'Jane Eyre, Chapter 21',
  },
  // desert dessert
  {
    sentence: 'The soldiers swore never to ___ their post, even in the burning ___.',
    options: ['desert … desert', 'dessert … desert', 'desert … dessert', 'dessert … dessert'],
    answer: 'desert … desert',
    tier: 3,
    sets: ['desert dessert'],
  },
  {
    sentence: 'We had ice cream for ___ after our long trek across the ___.',
    options: ['dessert … desert', 'desert … dessert', 'dessert … dessert', 'desert … desert'],
    answer: 'dessert … desert',
    tier: 3,
    sets: ['desert dessert'],
  },
  {
    sentence:
      '___ is something terribly appalling in our situation, yet my courage and hopes do not ___ me.',
    options: ['There … desert', 'There … dessert', 'Their … desert', 'Their … dessert'],
    answer: 'There … desert',
    tier: 3,
    sets: ['desert dessert', 'their there they are'],
    source: 'Frankenstein, Chapter 24 (Walton)',
  },
  // led lead
  {
    sentence: 'The old pipes were made of ___, and the plumber ___ us straight to the leak.',
    options: ['lead … led', 'led … lead', 'lead … lead', 'led … led'],
    answer: 'lead … led',
    tier: 3,
    sets: ['led lead'],
  },
  {
    sentence: '___ he stretched his hand out to be ___.',
    options: ['Then … led', 'Then … lead', 'Than … led', 'Than … lead'],
    answer: 'Then … led',
    tier: 3,
    sets: ['led lead', 'then than'],
    source: 'Jane Eyre, Chapter 37',
  },
  {
    sentence: '___ the way, ___, and we’ll all follow you.',
    options: ['Lead … then', 'Lead … than', 'Led … then', 'Led … than'],
    answer: 'Lead … then',
    tier: 3,
    sets: ['led lead', 'then than'],
    source: 'Silas Marner, Chapter 11 (the Squire)',
  },
  {
    sentence: 'Snowball was racing across the long pasture that ___ to the ___.',
    options: ['led … road', 'led … rode', 'lead … road', 'lead … rode'],
    answer: 'led … road',
    tier: 3,
    sets: ['led lead', 'road rode rowed'],
    source: 'Animal Farm, Chapter 5',
  },
  // altar alter
  {
    sentence: 'The flowers on the church ___ had to be moved, so we had to ___ our plans.',
    options: ['altar … alter', 'alter … altar', 'altar … altar', 'alter … alter'],
    answer: 'altar … alter',
    tier: 3,
    sets: ['altar alter'],
  },
  {
    sentence: '___ coming now and saying ‘I’m her father’ doesn’t ___ the feelings inside us.',
    options: ['Your … alter', 'Your … altar', "You're … alter", "You're … altar"],
    answer: 'Your … alter',
    tier: 3,
    sets: ['altar alter', 'your you are'],
    source: 'Silas Marner, Chapter 19 (Silas)',
  },
  {
    sentence: 'By my ___ I swear / There is no power in the tongue of man / To ___ me.',
    options: ['soul … alter', 'soul … altar', 'sole … alter', 'sole … altar'],
    answer: 'soul … alter',
    tier: 3,
    sets: ['altar alter', 'sole soul'],
    source: 'The Merchant of Venice, Act 4, Scene 1 (Shylock)',
  },
  // formally formerly
  {
    sentence: 'She was ___ introduced to the man who had ___ been her neighbour.',
    options: [
      'formally … formerly',
      'formerly … formally',
      'formally … formally',
      'formerly … formerly',
    ],
    answer: 'formally … formerly',
    tier: 3,
    sets: ['formally formerly'],
  },
  {
    sentence:
      '“___,” I answered, “because you did not love me; ___, I reply, because you almost hate me.',
    options: ['Formerly … now', 'Formerly … know', 'Formally … now', 'Formally … know'],
    answer: 'Formerly … now',
    tier: 3,
    sets: ['formally formerly', 'know no now'],
    source: 'Jane Eyre, Chapter 35 (Jane)',
  },
  // precede proceed
  {
    sentence: 'A short speech will ___ the prize-giving, and then we will ___ to the hall.',
    options: ['precede … proceed', 'proceed … precede', 'precede … precede', 'proceed … proceed'],
    answer: 'precede … proceed',
    tier: 3,
    sets: ['precede proceed'],
  },
  {
    sentence: 'I will ___ with my ___.',
    options: ['proceed … tale', 'proceed … tail', 'precede … tale', 'precede … tail'],
    answer: 'proceed … tale',
    tier: 3,
    sets: ['precede proceed', 'tail tale'],
    source: 'Frankenstein, Chapter 18 (Victor)',
  },
  // whose who is
  {
    sentence: 'The girl ___ bag was lost is the one ___ crying by the gate.',
    options: ["whose … who's", "who's … whose", 'whose … whose', "who's … who's"],
    answer: "whose … who's",
    tier: 3,
    sets: ['whose who is'],
  },
  {
    sentence: '___, Joe kept a journeyman at weekly wages ___ name was Orlick.',
    options: ['Now … whose', "Now … who's", 'Know … whose', "Know … who's"],
    answer: 'Now … whose',
    tier: 3,
    sets: ['whose who is', 'know no now'],
    source: 'Great Expectations, Chapter 15',
  },
  {
    sentence: '___ there, besides foul ___?',
    options: ["Who's … weather", "Who's … whether", 'Whose … weather', 'Whose … whether'],
    answer: "Who's … weather",
    tier: 3,
    sets: ['whose who is'],
    shares: ['weather whether'],
    source: 'King Lear, Act 3, Scene 1 (Kent)',
  },
  {
    sentence: 'Then tell me, / ___ the next ___ of Naples?',
    options: ["Who's … heir", "Who's … air", 'Whose … heir', 'Whose … air'],
    answer: "Who's … heir",
    tier: 3,
    sets: ['whose who is', 'heir air'],
    source: 'The Tempest, Act 2, Scene 1 (Antonio)',
  },
  {
    sentence: 'See ___ he is, ___ with him, what he does.',
    options: ["where … who's", 'where … whose', "were … who's", 'were … whose'],
    answer: "where … who's",
    tier: 3,
    sets: ['whose who is', 'where wear were we are'],
    source: 'Antony and Cleopatra, Act 1, Scene 3 (Cleopatra)',
  },
  // theirs there is
  {
    sentence: 'The blue tent is ___, but ___ still room in ours.',
    options: ["theirs … there's", "there's … theirs", 'theirs … theirs', "there's … there's"],
    answer: "theirs … there's",
    tier: 3,
    sets: ['theirs there is'],
  },
  {
    sentence: 'That was ___ too, but they ___ frightened to go inside.',
    options: ['theirs … were', 'theirs … where', "there's … were", "there's … where"],
    answer: 'theirs … were',
    tier: 3,
    sets: ['theirs there is', 'where wear were we are'],
    source: 'Animal Farm, Chapter 2',
  },
  {
    sentence: 'And even if ___ a delay, how can it ___ the end?',
    options: ["there's … alter", "there's … altar", 'theirs … alter', 'theirs … altar'],
    answer: "there's … alter",
    tier: 3,
    sets: ['theirs there is', 'altar alter'],
    source: 'The War of the Worlds, Book Two, Chapter 7 (the artilleryman)',
  },
  {
    sentence: 'It must be ___ imagination then, and not ___.',
    options: ['your … theirs', "your … there's", "you're … theirs", "you're … there's"],
    answer: 'your … theirs',
    tier: 3,
    sets: ['theirs there is', 'your you are'],
    source: "A Midsummer Night's Dream, Act 5, Scene 1 (Hippolyta)",
  },
  // sole soul
  {
    sentence: 'I need not sell my ___ to ___ bliss.',
    options: ['soul … buy', 'soul … by', 'sole … buy', 'sole … by'],
    answer: 'soul … buy',
    tier: 3,
    sets: ['sole soul', 'by buy bye'],
    source: 'Jane Eyre, Chapter 19',
  },
  // waist waste
  {
    sentence: 'Never did mockers ___ more ___ breath.',
    options: ['waste … idle', 'waste … idol', 'waist … idle', 'waist … idol'],
    answer: 'waste … idle',
    tier: 3,
    sets: ['waist waste', 'idle idol idyll'],
    shares: ['breath breathe'],
    source: "A Midsummer Night's Dream, Act 3, Scene 2 (Helena)",
  },
]

export const BANK: GameBank<HomophoneItem> = {
  slug: 'homophone-hero',
  items: HOMOPHONE_BANK,
  // No two sentences are the same, and the sentence is what the student sees.
  key: (q) => q.sentence,
  answer: (q) => q.answer,
  options: (q) => q.options,
  tag: (q) => q.sets[0],
  tier: (q) => q.tier,
  // No two questions on one word set in a round, nor one whose sentence shows its word.
  facts: (q) => [...q.sets, ...(q.shares ?? [])],
  deepened: '2026-10-24',
}
