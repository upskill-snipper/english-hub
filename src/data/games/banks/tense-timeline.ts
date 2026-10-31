import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Tense Timeline: name the tense of a sentence (tier 1), or choose the form
 * of the verb in brackets that fits the gap (tiers 2 and 3).
 *
 * Moved out of src/app/games/tense-timeline/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * game asks "Which tense is this?", marks one tense right, and offers three
 * others drawn at random from the remaining seven. In 15 of the 56 sentences a
 * second verb is written in another of the eight tenses, so the draw could
 * offer a tense that is plainly in the sentence, and a student who read it
 * closely was marked wrong:
 *
 *   - "I was cooking dinner when the phone rang" could offer Past Simple
 *     (rang) beside Past Continuous; "He was waiting ... when he saw", "While
 *     she was walking home, it began to rain" the same;
 *   - seven Past Perfect sentences carry a Past Simple verb for the later
 *     event ("By the time we arrived", "When I got home", "until I moved");
 *   - "I think it will rain", "I am sure you will pass" and "I promise I will
 *     phone you when I land" carry a Present Simple verb (think, am, promise,
 *     land), and "We are going to have a barbecue if the weather stays fine"
 *     another (stays);
 *   - "I have lost my keys and I cannot find them" carries a second present
 *     verb.
 *
 * In six of them the tense that was marked right is not the main clause's:
 * "While she was walking home, it began to rain", "They were tired because
 * they had walked all day", "He realised he had forgotten his passport", "I
 * think it will rain", "I promise I will phone you" and "I am sure you will
 * pass" all have a main verb in another tense, so a student who named THAT was
 * right on any reading of the sentence.
 *
 * Each of those 15 now names the other tense in `alsoReadAs`, and the page no
 * longer offers it as a wrong answer, so exactly one option is right, as in
 * Speed Analysis. The explanation of the sentence says what the other verb is
 * doing.
 *
 * AN ORDER HAS NO TENSE (second reader, 16 October 2026). "Don't worry, I will
 * help you with your bags" was listed too, for the don't of its order. But an
 * order uses the plain verb and is not the present simple, as that sentence's
 * own explanation said, and the other three orders ("Look", "Look at those
 * dark clouds", "Be careful") were never listed. It has no `alsoReadAs` now, so
 * Present Simple may be offered there as it always could be, and the
 * explanations of all four sentences say why an order is not the present
 * simple.
 *
 * PUNCTUATION (second reader, 16 October 2026). Three sentences used an
 * exclamation mark or a spaced hyphen, which the house style does not, and the
 * student reads them: "Look! The children ..." now has a comma after Look, and
 * "Look at those dark clouds" and "Be careful" a colon, with a full stop for
 * the closing exclamation mark. Otherwise the sentences are unchanged.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy". Measured that day (.tmp-games-audit/REPORT-eal.md): the
 * game only ever asked students to NAME a tense, never to use one, and a round
 * of 15 from 56 repeated two thirds of itself by the fifth play. Now:
 *
 *   - tier 1 (80): name the tense, as before, from four tenses chosen as near
 *     neighbours (the present continuous beside the present simple and the
 *     past continuous, the past perfect beside the past simple and the
 *     present perfect), no longer three drawn at random from seven, so a
 *     question cannot offer a tense nobody would choose. The 42 sentences in
 *     the six tenses whose names do not print their own marker word are kept;
 *     18 are real lines from books out of UK copyright (`source` names each,
 *     and each was checked word for word against src/data/full-texts); 20 are
 *     new;
 *   - the 14 sentences in Future 'will' and 'going to' Future no longer ask
 *     for the tense's name, because the name prints the word a student has
 *     only to match ("She is going to study medicine", "'going to' Future").
 *     They became questions that ask for the form instead ("Look at those
 *     dark clouds: it ___ (rain)."), in tier 2, all but one ("She will be
 *     twenty years old next month", whose present, "She is twenty next
 *     month", is just as good English). Removed as naming questions: "I
 *     think it will rain later this afternoon", "Don't worry, I will help
 *     you with your bags", "She will be twenty years old next month", "The
 *     shop will close early on Christmas Eve", "I promise I will phone you
 *     when I land", "Perhaps they will arrive before dark", "I am sure you
 *     will pass the test", "We are going to visit the museum tomorrow",
 *     "Look at those dark clouds: it is going to rain", "She is going to
 *     study medicine at university", "They are going to sell their old car
 *     next week", "I am going to start a new job in September", "Be
 *     careful: you are going to drop those plates" and "We are going to have
 *     a barbecue if the weather stays fine";
 *   - tier 2 (80): form the tense in one sentence with a clue to its time
 *     ("I ___ (live) here since 2015."), ten for each of the eight tenses;
 *     the wrong options are the mistakes learners make (am living, lived,
 *     live; have gone with a finished time; will going to; doesn't drinks);
 *   - tier 3 (80): choose and form the tense in a short dialogue or text,
 *     where the context decides: the present perfect or the past simple, the
 *     past perfect for the earlier of two past events, the past continuous
 *     for the scene, the present simple or continuous, a plan, a prediction
 *     or a decision about the future, the present after when, if and as
 *     soon as, for and since, and a story in several tenses;
 *   - in every tier exactly one option is good British English: where a
 *     second tense could also be right (the past simple beside the past
 *     perfect in "When I got home, he ___ (cook) dinner", or "will" beside
 *     "going to"), that tense is not offered;
 *   - `verbs` names the verb a question turns on, and no two questions on one
 *     verb are dealt in one round, so a question never shows the form the
 *     next one asks for.
 *
 * CHECKED BY A SECOND READER (31 October 2026). Every answer and option was
 * read against its sentence and context, and the 18 real lines against their
 * books, chapter and stave as well as word for word: each is the held text
 * and sits where its `source` says. Fixed:
 *
 *   - "Is your brother still at university?" "Yes, he ___ (study) law there
 *     for two years." allowed "is studying", read as a two-year course ("he
 *     is studying there for two years"); it ends "for two years now".
 *   - Eight questions show in their dialogue a verb another question asks
 *     for, and did not list it, as the writer listed "He left at three":
 *     "Is Grandma coming today?" and "Are you coming to football tonight?"
 *     print "is coming", the answer to "Hurry up. The bus ___ (come)."; "What
 *     were you doing when I called?" is the naming question "What were you
 *     doing at midnight?" nearly word for word; "What does your sister do?"
 *     and "What is your sister doing?" answer each other; "when we left the
 *     house", "I left my bag" and "When Mia got home" show leave and get.
 *     Each now lists the verb (come, do, leave, get).
 *   - Questions on different verbs whose explanations teach each other's
 *     rule now share it in `rules` and never meet in one round: "While" and
 *     the past continuous (3), the present after when, if, before, after and
 *     as soon as for a future time (12), and "Look" or "Listen" before the
 *     present continuous (4).
 */

export type Tense =
  | 'Present Simple'
  | 'Present Continuous'
  | 'Past Simple'
  | 'Past Continuous'
  | 'Present Perfect'
  | 'Past Perfect'
  | "Future 'will'"
  | "'going to' Future"

export const ALL_TENSES: Tense[] = [
  'Present Simple',
  'Present Continuous',
  'Past Simple',
  'Past Continuous',
  'Present Perfect',
  'Past Perfect',
  "Future 'will'",
  "'going to' Future",
]

export interface TenseItem {
  /**
   * What the student reads. To name: the sentence. To form: the sentence with
   * ___ for the gap and the verb in brackets after it.
   */
  sentence: string
  /** The tense of the sentence, or of the form that fills the gap. */
  tense: Tense
  /** 1 to name a tense; 2 to form it in one sentence; 3 to choose and form it in context. */
  tier: 1 | 2 | 3
  /** The four options shown, the answer among them; the page deals them in a new order. */
  options: readonly string[]
  /** To form: the form that fills the gap. A question that names a tense has its tense as the answer. */
  answer?: string
  /** Lines shown before the sentence: a dialogue, or the start of a short text. */
  context?: readonly string[]
  /** For a real line from a book out of UK copyright: the book, its writer, the date and the chapter. */
  source?: string
  /** The verb or verbs the question turns on: no two questions on one verb are dealt in one round. */
  verbs: readonly string[]
  /**
   * A rule this question teaches, and that questions on other verbs test, so
   * that one's explanation would answer another ("While" and the past
   * continuous): no two questions with one rule are dealt in one round.
   */
  rules?: readonly string[]
  /**
   * Another tense that a second verb in the sentence is written in. It is never
   * offered as a wrong answer, because it is also in the sentence.
   */
  alsoReadAs?: readonly Tense[]
}

const PS: Tense = 'Present Simple'
const PC: Tense = 'Present Continuous'
const PaS: Tense = 'Past Simple'
const PaC: Tense = 'Past Continuous'
const PP: Tense = 'Present Perfect'
const PaP: Tense = 'Past Perfect'
const FW: Tense = "Future 'will'"
const GT: Tense = "'going to' Future"

/** A question that asks for the tense's name, with three near neighbours. */
function name(
  sentence: string,
  tense: Tense,
  others: [Tense, Tense, Tense],
  verbs: string[],
  extra: Pick<TenseItem, 'alsoReadAs' | 'source'> = {},
): TenseItem {
  return { sentence, tense, tier: 1, options: [tense, ...others], verbs, ...extra }
}

/** A question that asks for the form: the answer, and three mistakes learners make. */
function form(
  tier: 2 | 3,
  tense: Tense,
  sentence: string,
  answer: string,
  wrong: [string, string, string],
  verbs: string[],
  context?: string[],
): TenseItem {
  return {
    sentence,
    tense,
    tier,
    answer,
    options: [answer, ...wrong],
    verbs,
    ...(context ? { context } : {}),
  }
}

/** A question that shares a rule with questions on other verbs (`rules`). */
function sharing(rule: string, item: TenseItem): TenseItem {
  return { ...item, rules: [...(item.rules ?? []), rule] }
}

export const SENTENCE_BANK: TenseItem[] = [
  // ── Tier 1: name the tense. Present Simple ─────────────────────────
  name('The train leaves at half past seven every morning.', PS, [PC, PaS, PP], ['leave']),
  name('My sister works in a small bakery on the high street.', PS, [PC, PP, PaC], ['work']),
  name('Water boils at one hundred degrees Celsius.', PS, [PC, PaS, PaC], ['boil']),
  name('We usually have dinner at about seven o’clock.', PS, [PaS, PP, PaC], ['have']),
  name('She speaks three languages fluently.', PS, [PC, PP, PaS], ['speak']),
  name('The shop opens at nine and closes at six.', PS, [PC, PaS, PaP], ['open', 'close']),
  name('He never drinks coffee after lunch.', PS, [PP, PC, PaC], ['drink']),
  name('My cousin plays the guitar in a band.', PS, [PC, PaS, PP], ['play']),
  name('Our lessons start at nine o’clock.', PS, [PC, PP, PaC], ['start']),
  name('Cats sleep for most of the day.', PS, [PC, PaS, PaC], ['sleep']),
  name('Do you walk to school every day?', PS, [PC, PaS, PP], ['walk']),
  name('He doesn’t eat meat or fish.', PS, [PaS, PC, PP], ['eat']),
  name('I wear the chain I forged in life.', PS, [PC, PP, PaC], ['wear', 'forge'], {
    alsoReadAs: [PaS],
    source: 'A Christmas Carol by Charles Dickens (1843), Stave I',
  }),
  name(
    'I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy.',
    PS,
    [PC, PaS, PP],
    ['be'],
    { source: 'A Christmas Carol by Charles Dickens (1843), Stave V' },
  ),

  // ── Tier 1: Present Continuous ──────────────────────────────────────
  sharing(
    'look or listen',
    name('Look, the children are playing in the garden right now.', PC, [PS, PaC, PP], ['play']),
  ),
  name('I am reading a fascinating novel this week.', PC, [PS, PP, PaS], ['read']),
  name('They are building a new library near the station.', PC, [PS, PaC, PaS], ['build']),
  name('Why are you wearing your coat indoors?', PC, [PS, PaC, PP], ['wear']),
  name('My parents are travelling around Italy at the moment.', PC, [PS, PP, PaC], ['travel']),
  name('She is studying for her exams this month.', PC, [PS, PaS, PP], ['study']),
  name('The weather is getting colder these days.', PC, [PS, PP, PaC], ['get']),
  sharing(
    'look or listen',
    name('Shh, the baby is sleeping upstairs.', PC, [PS, PaC, PP], ['sleep']),
  ),
  name('We are learning about volcanoes this term.', PC, [PS, PP, PaS], ['learn']),
  name('Is it raining outside?', PC, [PS, PaC, PaS], ['rain']),
  name('I am sitting alone on the hearth.', PC, [PS, PaC, PP], ['sit'], {
    source: 'Jane Eyre by Charlotte Brontë (1847), Chapter 31',
  }),
  name('No one is living there.', PC, [PS, PaC, PaS], ['live'], {
    source: 'Jane Eyre by Charlotte Brontë (1847), Chapter 36',
  }),
  name('I am going out now.', PC, [PS, PP, PaC], ['go'], {
    source: 'The Sign of Four by Arthur Conan Doyle (1890), Chapter II',
  }),
  name('Your lip is trembling.', PC, [PS, PaC, PaS], ['tremble'], {
    source: 'A Christmas Carol by Charles Dickens (1843), Stave II',
  }),

  // ── Tier 1: Past Simple ─────────────────────────────────────────────
  name('We visited my grandmother in Wales last summer.', PaS, [PS, PP, PaC], ['visit']),
  name('He bought a second-hand bicycle yesterday.', PaS, [PP, PS, PaP], ['buy']),
  name('The film started at eight and finished at ten.', PaS, [PaC, PP, PS], ['start', 'finish']),
  name('They moved to Manchester three years ago.', PaS, [PP, PaP, PS], ['move']),
  name('I broke my arm when I was nine.', PaS, [PP, PaC, PaP], ['break']),
  name('She wrote a letter to the council last week.', PaS, [PP, PS, PaC], ['write']),
  name('We did not see anyone at the party.', PaS, [PS, PP, PaP], ['see']),
  name('I lost my phone on the bus last week.', PaS, [PP, PS, PaC], ['lose']),
  name('Did you enjoy the concert?', PaS, [PS, PP, PaP], ['enjoy']),
  name('They didn’t win the match on Saturday.', PaS, [PS, PP, PaC], ['win']),
  name('My grandparents met in 1970.', PaS, [PP, PaP, PS], ['meet']),
  name('Old Marley was as dead as a door-nail.', PaS, [PS, PP, PaC], ['be'], {
    source: 'A Christmas Carol by Charles Dickens (1843), Stave I',
  }),
  name('Reader, I married him.', PaS, [PP, PS, PaP], ['marry'], {
    source: 'Jane Eyre by Charlotte Brontë (1847), Chapter 38',
  }),

  // ── Tier 1: Past Continuous ─────────────────────────────────────────
  name('I was cooking dinner when the phone rang.', PaC, [PC, PaP, PP], ['cook', 'ring'], {
    alsoReadAs: [PaS],
  }),
  name('They were watching television all evening.', PaC, [PaS, PC, PaP], ['watch']),
  sharing(
    'while',
    name('While she was walking home, it began to rain.', PaC, [PC, PaP, PS], ['walk', 'begin'], {
      alsoReadAs: [PaS],
    }),
  ),
  name('At nine o’clock last night we were still revising.', PaC, [PaS, PC, PP], ['revise']),
  name(
    'He was waiting for the bus when he saw the accident.',
    PaC,
    [PC, PP, PaP],
    ['wait', 'see'],
    {
      alsoReadAs: [PaS],
    },
  ),
  name('The sun was shining and the birds were singing.', PaC, [PaS, PC, PaP], ['shine', 'sing']),
  name('What were you doing at midnight?', PaC, [PC, PaS, PP], ['do']),
  name('We were sitting in the garden at six o’clock.', PaC, [PC, PaS, PaP], ['sit']),
  name('Were you having a shower when I called?', PaC, [PC, PP, PaP], ['have', 'call'], {
    alsoReadAs: [PaS],
  }),
  name('It was snowing all night.', PaC, [PaS, PC, PP], ['snow']),
  name('He was waiting for me with great impatience.', PaC, [PC, PaS, PP], ['wait'], {
    source: 'Great Expectations by Charles Dickens (1861), Chapter 19',
  }),
  name('It was beginning to rain fast.', PaC, [PaS, PC, PaP], ['begin', 'rain'], {
    source: 'Great Expectations by Charles Dickens (1861), Chapter 53',
  }),
  name(
    'Estella was knitting, and Miss Havisham was looking on.',
    PaC,
    [PC, PaS, PP],
    ['knit', 'look'],
    {
      source: 'Great Expectations by Charles Dickens (1861), Chapter 44',
    },
  ),

  // ── Tier 1: Present Perfect ─────────────────────────────────────────
  name('I have never been to Japan.', PP, [PaS, PaP, PS], ['be']),
  name('She has just finished her homework.', PP, [PaS, PaP, PC], ['finish']),
  name('We have lived in this village since 2015.', PP, [PaS, PS, PC], ['live']),
  name('They have already eaten their lunch.', PP, [PaP, PaS, PC], ['eat']),
  name('Have you ever ridden a horse?', PP, [PaS, PS, PaP], ['ride']),
  name('He has worked here for ten years.', PP, [PaS, PS, PaP], ['work']),
  name('I have lost my keys and I cannot find them.', PP, [PaS, PaP, PC], ['lose', 'find'], {
    alsoReadAs: [PS],
  }),
  name('Have you finished your homework yet?', PP, [PaS, PC, PS], ['finish']),
  name('We have known each other for years.', PP, [PS, PaS, PaP], ['know']),
  name(
    'This expedition has been the favourite dream of my early years.',
    PP,
    [PaS, PS, PaP],
    ['be'],
    {
      source: 'Frankenstein by Mary Shelley (1818), Letter I',
    },
  ),
  name('But I have forgotten one thing.', PP, [PaS, PaP, PC], ['forget'], {
    source: 'Great Expectations by Charles Dickens (1861), Chapter 22',
  }),
  name(
    'Mrs. Joe has been out a dozen times, looking for you, Pip.',
    PP,
    [PaS, PC, PS],
    ['be', 'look'],
    {
      source: 'Great Expectations by Charles Dickens (1861), Chapter 2',
    },
  ),
  name('I have come to dinner.', PP, [PaS, PS, PaP], ['come'], {
    source: 'A Christmas Carol by Charles Dickens (1843), Stave V',
  }),

  // ── Tier 1: Past Perfect ────────────────────────────────────────────
  name(
    'By the time we arrived, the train had already left.',
    PaP,
    [PP, PaC, PS],
    ['arrive', 'leave'],
    {
      alsoReadAs: [PaS],
    },
  ),
  name(
    'She had finished the report before the meeting began.',
    PaP,
    [PP, PaC, PC],
    ['finish', 'begin'],
    {
      alsoReadAs: [PaS],
    },
  ),
  name('They were tired because they had walked all day.', PaP, [PP, PaC, PS], ['walk'], {
    alsoReadAs: [PaS],
  }),
  name('When I got home, my brother had cooked dinner.', PaP, [PP, PaC, PC], ['get', 'cook'], {
    alsoReadAs: [PaS],
  }),
  name('He realised he had forgotten his passport.', PaP, [PP, PS, PaC], ['realise', 'forget'], {
    alsoReadAs: [PaS],
  }),
  name('The film had started by the time we sat down.', PaP, [PP, PaC, PC], ['start', 'sit'], {
    alsoReadAs: [PaS],
  }),
  name('I had never seen snow until I moved to Scotland.', PaP, [PP, PaC, PS], ['see', 'move'], {
    alsoReadAs: [PaS],
  }),
  name('When we arrived, the shop had closed.', PaP, [PP, PaC, PS], ['arrive', 'close'], {
    alsoReadAs: [PaS],
  }),
  name('She had never flown before her trip to Spain.', PaP, [PaS, PP, PaC], ['fly']),
  name('By ten o’clock, everyone had gone home.', PaP, [PaS, PP, PC], ['go']),
  name('His words had given me a start.', PaP, [PaS, PP, PaC], ['give'], {
    source: 'Great Expectations by Charles Dickens (1861), Chapter 50',
  }),
  name('I had visited it frequently during my boyhood.', PaP, [PaS, PP, PC], ['visit'], {
    source: 'Frankenstein by Mary Shelley (1818), Chapter IX',
  }),
  name(
    'I had tried hard at it, but had made nothing of it.',
    PaP,
    [PaS, PP, PaC],
    ['try', 'make'],
    {
      source: 'Great Expectations by Charles Dickens (1861), Chapter 16',
    },
  ),
  // ── Tier 2, new on 24 October 2026: form the tense. Present Simple ──
  form(
    2,
    PS,
    'My brother ___ (like) spicy food.',
    'likes',
    ['is liking', 'like', 'liking'],
    ['like'],
  ),
  form(
    2,
    PS,
    'I ___ (recognise) that man from the news.',
    'recognise',
    ['am recognising', 'recognises', 'recognising'],
    ['recognise'],
  ),
  form(
    2,
    PS,
    'This phone ___ (belong) to my sister.',
    'belongs',
    ['is belonging', 'belong', 'belonging'],
    ['belong'],
  ),
  form(
    2,
    PS,
    'This bag ___ (contain) my school books.',
    'contains',
    ['is containing', 'contain', 'containing'],
    ['contain'],
  ),
  form(
    2,
    PS,
    'My dad ___ (not / drink) coffee.',
    'doesn’t drink',
    ['don’t drink', 'doesn’t drinks', 'not drinks'],
    ['drink'],
  ),
  form(
    2,
    PS,
    'Does your sister ___ (speak) French?',
    'speak',
    ['speaks', 'speaking', 'spoke'],
    ['speak'],
  ),
  form(
    2,
    PS,
    'The bus to town ___ (leave) every twenty minutes.',
    'leaves',
    ['leave', 'leaving', 'is leave'],
    ['leave'],
  ),
  form(
    2,
    PS,
    'We ___ (go) swimming every Saturday morning.',
    'go',
    ['goes', 'going', 'are go'],
    ['go'],
  ),
  form(
    2,
    PS,
    'What time does the film ___ (begin)?',
    'begin',
    ['begins', 'began', 'beginning'],
    ['begin'],
  ),
  form(
    2,
    PS,
    'Ali ___ (want) a new bike for his birthday.',
    'wants',
    ['is wanting', 'want', 'wanting'],
    ['want'],
  ),

  // ── Tier 2: Present Continuous ──────────────────────────────────────
  sharing(
    'look or listen',
    form(
      2,
      PC,
      'Listen. Someone ___ (sing) in the next room.',
      'is singing',
      ['sings', 'sing', 'singing'],
      ['sing'],
    ),
  ),
  form(
    2,
    PC,
    'Be quiet, please. I ___ (talk) on the phone.',
    'am talking',
    ['talk', 'talking', 'is talking'],
    ['talk'],
  ),
  form(
    2,
    PC,
    'Where is Tom? He ___ (have) a shower.',
    'is having',
    ['has', 'have', 'having'],
    ['have'],
  ),
  sharing(
    'look or listen',
    form(2, PC, 'Look. It ___ (snow).', 'is snowing', ['snows', 'snow', 'snowing'], ['snow']),
  ),
  form(
    2,
    PC,
    'My parents ___ (paint) the kitchen this weekend.',
    'are painting',
    ['paint', 'painting', 'is painting'],
    ['paint'],
  ),
  form(2, PC, 'Why are you ___ (laugh)?', 'laughing', ['laugh', 'laughed', 'laughs'], ['laugh']),
  form(
    2,
    PC,
    'Turn the TV off. Nobody ___ (watch) it.',
    'is watching',
    ['watch', 'watching', 'are watching'],
    ['watch'],
  ),
  form(
    2,
    PC,
    'What is that noise? My brothers ___ (fight) over the remote control again.',
    'are fighting',
    ['fight', 'fights', 'is fighting'],
    ['fight'],
  ),
  form(
    2,
    PC,
    'I can’t come out. I ___ (do) my homework.',
    'am doing',
    ['do', 'doing', 'does'],
    ['do'],
  ),
  form(2, PC, 'Hurry up. The bus ___ (come).', 'is coming', ['comes', 'come', 'coming'], ['come']),

  // ── Tier 2: Past Simple ─────────────────────────────────────────────
  form(
    2,
    PaS,
    'We ___ (swim) in the sea last Saturday.',
    'swam',
    ['have swum', 'swim', 'swum'],
    ['swim'],
  ),
  form(
    2,
    PaS,
    'I ___ (draw) a picture of my cat yesterday.',
    'drew',
    ['have drawn', 'draw', 'drawn'],
    ['draw'],
  ),
  form(
    2,
    PaS,
    'She ___ (buy) a new coat two days ago.',
    'bought',
    ['has bought', 'buys', 'brought'],
    ['buy'],
  ),
  form(
    2,
    PaS,
    'When did you ___ (arrive) in England?',
    'arrive',
    ['arrived', 'arriving', 'arrives'],
    ['arrive'],
  ),
  form(
    2,
    PaS,
    'My aunt ___ (move) to Canada in 2019.',
    'moved',
    ['has moved', 'moves', 'move'],
    ['move'],
  ),
  form(
    2,
    PaS,
    'I ___ (not / understand) the question, so I asked the teacher.',
    'didn’t understand',
    ['don’t understand', 'haven’t understood', 'not understood'],
    ['understand'],
  ),
  form(
    2,
    PaS,
    'The match ___ (end) ten minutes ago.',
    'ended',
    ['has ended', 'ends', 'is ending'],
    ['end'],
  ),
  form(
    2,
    PaS,
    'We ___ (eat) pizza for dinner last night.',
    'ate',
    ['have eaten', 'eat', 'eaten'],
    ['eat'],
  ),
  form(
    2,
    PaS,
    'Last year we ___ (fly) to Lagos to see my uncle.',
    'flew',
    ['have flown', 'fly', 'are flying'],
    ['fly'],
  ),
  form(
    2,
    PaS,
    'My grandmother ___ (write) this letter in 1965.',
    'wrote',
    ['has written', 'writes', 'written'],
    ['write'],
  ),

  // ── Tier 2: Past Continuous ─────────────────────────────────────────
  form(
    2,
    PaC,
    'At eight o’clock last night, I ___ (watch) a film.',
    'was watching',
    ['am watching', 'were watching', 'was watch'],
    ['watch'],
  ),
  form(
    2,
    PaC,
    'They ___ (play) tennis when it started to rain.',
    'were playing',
    ['are playing', 'was playing', 'were play'],
    ['play'],
  ),
  form(
    2,
    PaC,
    'Who were you ___ (talk) to on the phone?',
    'talking',
    ['talk', 'talked', 'talks'],
    ['talk'],
  ),
  form(
    2,
    PaC,
    'It ___ (rain) when we left the house.',
    'was raining',
    ['is raining', 'were raining', 'was rain'],
    ['rain', 'leave'],
  ),
  form(
    2,
    PaC,
    'I ___ (cycle) to school when I met my old teacher.',
    'was cycling',
    ['am cycling', 'were cycling', 'cycling'],
    ['cycle', 'meet'],
  ),
  form(
    2,
    PaC,
    'We ___ (not / listen) when the teacher explained the homework.',
    'weren’t listening',
    ['aren’t listening', 'wasn’t listening', 'didn’t listening'],
    ['listen'],
  ),
  form(
    2,
    PaC,
    'My sister ___ (sleep) when the storm began.',
    'was sleeping',
    ['is sleeping', 'were sleeping', 'was sleep'],
    ['sleep'],
  ),
  form(
    2,
    PaC,
    'At this time yesterday, we ___ (fly) to Spain.',
    'were flying',
    ['are flying', 'was flying', 'were fly'],
    ['fly'],
  ),
  form(
    2,
    PaC,
    'Was it ___ (snow) when you got up?',
    'snowing',
    ['snow', 'snowed', 'snows'],
    ['snow'],
  ),
  form(
    2,
    PaC,
    'Last night the baby ___ (cry) for hours.',
    'was crying',
    ['is crying', 'were crying', 'was cry'],
    ['cry'],
  ),

  // ── Tier 2: Present Perfect ─────────────────────────────────────────
  form(
    2,
    PP,
    'I ___ (live) in this flat since 2018.',
    'have lived',
    ['am living', 'lived', 'live'],
    ['live'],
  ),
  form(
    2,
    PP,
    'She ___ (work) at the hospital for ten years, and she still loves it.',
    'has worked',
    ['is working', 'worked', 'works'],
    ['work'],
  ),
  form(2, PP, 'Have you ever ___ (see) a whale?', 'seen', ['saw', 'see', 'seeing'], ['see']),
  form(
    2,
    PP,
    'I ___ (just / finish) my homework.',
    'have just finished',
    ['have just finish', 'has just finished', 'just have finished'],
    ['finish'],
  ),
  form(
    2,
    PP,
    'We ___ (not / see) the new film yet.',
    'haven’t seen',
    ['don’t see', 'haven’t saw', 'hasn’t seen'],
    ['see'],
  ),
  form(
    2,
    PP,
    'My brother ___ (break) his arm, so he can’t play today.',
    'has broken',
    ['has broke', 'is breaking', 'have broken'],
    ['break'],
  ),
  form(
    2,
    PP,
    'They ___ (already / eat) all the biscuits.',
    'have already eaten',
    ['have already ate', 'has already eaten', 'already have eat'],
    ['eat'],
  ),
  form(2, PP, 'How long have you ___ (know) Sara?', 'known', ['knew', 'know', 'knowing'], ['know']),
  form(
    2,
    PP,
    'My uncle ___ (own) this shop since 2010.',
    'has owned',
    ['owns', 'owned', 'is owning'],
    ['own'],
  ),
  form(
    2,
    PP,
    'I ___ (never / ride) a horse.',
    'have never ridden',
    ['have never rode', 'has never ridden', 'never have ride'],
    ['ride'],
  ),

  // ── Tier 2: Past Perfect ────────────────────────────────────────────
  form(
    2,
    PaP,
    'When I got to the cinema, the film ___ (already / start).',
    'had already started',
    ['has already started', 'had already start', 'have already started'],
    ['start'],
  ),
  form(
    2,
    PaP,
    'She was tired because she ___ (not / sleep) the night before.',
    'hadn’t slept',
    ['hasn’t slept', 'hadn’t sleep', 'haven’t slept'],
    ['sleep'],
  ),
  form(
    2,
    PaP,
    'I ___ (never / eat) sushi before I visited Japan.',
    'had never eaten',
    ['have never eaten', 'had never ate', 'has never eaten'],
    ['eat', 'visit'],
  ),
  form(
    2,
    PaP,
    'By the time the doctor arrived, the pain ___ (go).',
    'had gone',
    ['has gone', 'had went', 'have gone'],
    ['go', 'arrive'],
  ),
  form(
    2,
    PaP,
    'He couldn’t pay because he ___ (lose) his wallet.',
    'had lost',
    ['has lost', 'had lose', 'have lost'],
    ['lose'],
  ),
  form(
    2,
    PaP,
    'After we ___ (finish) dinner, we watched a film.',
    'had finished',
    ['have finished', 'had finish', 'has finished'],
    ['finish', 'watch'],
  ),
  form(
    2,
    PaP,
    'The house was quiet. Everyone ___ (fall) asleep.',
    'had fallen',
    ['has fallen', 'had fell', 'have fallen'],
    ['fall'],
  ),
  form(
    2,
    PaP,
    'I ___ (already / read) the book, so I knew the ending.',
    'had already read',
    ['have already read', 'has already read', 'was already read'],
    ['read'],
  ),
  form(
    2,
    PaP,
    'She ___ (study) English for two years before she came to Britain.',
    'had studied',
    ['has studied', 'studies', 'is studying'],
    ['study'],
  ),
  form(
    2,
    PaP,
    'They ___ (just / leave) when we arrived.',
    'had just left',
    ['have just left', 'has just left', 'had just leave'],
    ['leave', 'arrive'],
  ),

  // ── Tier 2: Future 'will' ───────────────────────────────────────────
  form(
    2,
    FW,
    'I think it ___ (rain) later.',
    'will rain',
    ['rains', 'will rains', 'will to rain'],
    ['rain'],
  ),
  form(
    2,
    FW,
    'Don’t worry. I ___ (help) you with your bags.',
    'will help',
    ['help', 'helps', 'am help'],
    ['help'],
  ),
  form(
    2,
    FW,
    'I’m sure you ___ (pass) the test.',
    'will pass',
    ['pass', 'passes', 'will passing'],
    ['pass'],
  ),
  form(
    2,
    FW,
    'Perhaps they ___ (arrive) before dark.',
    'will arrive',
    ['arrive', 'arrives', 'will arrived'],
    ['arrive'],
  ),
  sharing(
    'present after when or if',
    form(
      2,
      FW,
      'I promise I ___ (phone) you when I land.',
      'will phone',
      ['phone', 'phones', 'will to phone'],
      ['phone'],
    ),
  ),
  form(
    2,
    FW,
    'The shop ___ (close) early on Christmas Eve.',
    'will close',
    ['will closes', 'will closing', 'is close'],
    ['close'],
  ),
  form(
    2,
    FW,
    'In 2050, people ___ (live) on the Moon, perhaps.',
    'will live',
    ['live', 'lived', 'will lives'],
    ['live'],
  ),
  form(
    2,
    FW,
    'It’s cold in here. I ___ (shut) the window.',
    'will shut',
    ['shut', 'shuts', 'will to shut'],
    ['shut'],
  ),
  form(
    2,
    FW,
    'I don’t think he ___ (come) to the party.',
    'will come',
    ['will comes', 'will coming', 'come'],
    ['come'],
  ),
  form(
    2,
    FW,
    'Will you ___ (carry) this box for me, please?',
    'carry',
    ['carries', 'carrying', 'to carry'],
    ['carry'],
  ),

  // ── Tier 2: 'going to' Future ───────────────────────────────────────
  form(
    2,
    GT,
    'Look at those dark clouds: it ___ (rain).',
    'is going to rain',
    ['going to rain', 'is go to rain', 'is going to raining'],
    ['rain'],
  ),
  form(
    2,
    GT,
    'We ___ (visit) the museum tomorrow. We bought the tickets online.',
    'are going to visit',
    ['going to visit', 'are go to visit', 'will going to visit'],
    ['visit', 'buy'],
  ),
  form(
    2,
    GT,
    'She ___ (study) medicine at university next year.',
    'is going to study',
    ['going to study', 'is go to study', 'will going to study'],
    ['study'],
  ),
  form(
    2,
    GT,
    'They ___ (sell) their old car next week.',
    'are going to sell',
    ['going to sell', 'are go to sell', 'are going to selling'],
    ['sell'],
  ),
  form(
    2,
    GT,
    'I ___ (start) a new job in September.',
    'am going to start',
    ['going to start', 'am go to start', 'is going to start'],
    ['start'],
  ),
  form(
    2,
    GT,
    'Be careful: you ___ (drop) those plates.',
    'are going to drop',
    ['going to drop', 'are go to drop', 'will going to drop'],
    ['drop'],
  ),
  sharing(
    'present after when or if',
    form(
      2,
      GT,
      'We ___ (have) a barbecue if the weather stays fine.',
      'are going to have',
      ['going to have', 'are go to have', 'will going to have'],
      ['have', 'stay'],
    ),
  ),
  form(
    2,
    GT,
    'Watch out. That ladder ___ (fall).',
    'is going to fall',
    ['falls', 'going to fall', 'is going to falling'],
    ['fall'],
  ),
  form(
    2,
    GT,
    'What are you going to ___ (do) this weekend?',
    'do',
    ['doing', 'did', 'does'],
    ['do'],
  ),
  form(
    2,
    GT,
    'My brother ___ (not / come) with us tomorrow.',
    'isn’t going to come',
    ['not going to come', 'doesn’t going to come', 'isn’t go to come'],
    ['come'],
  ),
  // ── Tier 3, new on 24 October 2026: the context decides. Present
  //    Perfect or Past Simple ────────────────────────────────────────
  form(
    3,
    PaS,
    'B: Yes, I ___ (see) it on the kitchen table five minutes ago.',
    'saw',
    ['have seen', 'see', 'seen'],
    ['see'],
    ['A: Have you seen my phone?'],
  ),
  form(
    3,
    PP,
    'B: No, he ___ (go) home. He left at three.',
    'has gone',
    ['has went', 'have gone', 'goes'],
    ['go', 'leave'],
    ['A: Is Leo here?'],
  ),
  form(
    3,
    PaS,
    'B: Great. We ___ (stay) in a small hotel by the sea.',
    'stayed',
    ['have stayed', 'stay', 'are staying'],
    ['stay'],
    ['A: How was your holiday?'],
  ),
  form(
    3,
    PP,
    'B: Yes, I ___ (hear) it many times.',
    'have heard',
    ['has heard', 'hear', 'am hearing'],
    ['hear'],
    ['A: Do you know this song?'],
  ),
  form(
    3,
    PaS,
    'B: Yes. I first ___ (ride) one when I was five.',
    'rode',
    ['have ridden', 'ride', 'ridden'],
    ['ride'],
    ['A: Can you ride a bike?'],
  ),
  form(
    3,
    PP,
    'B: No, I ___ (just / eat) a big sandwich.',
    'have just eaten',
    ['have just ate', 'has just eaten', 'have just eat'],
    ['eat'],
    ['A: Are you hungry?'],
  ),
  form(
    3,
    PP,
    'B: Someone ___ (steal) it. I left it outside the shop last night.',
    'has stolen',
    ['has stole', 'steals', 'is stealing'],
    ['steal', 'leave'],
    ['A: Where is your bike?'],
  ),
  form(
    3,
    PP,
    'B: I don’t know. I ___ (not / watch) it yet.',
    'haven’t watched',
    ['don’t watch', 'haven’t watch', 'hasn’t watched'],
    ['watch'],
    ['A: Did you like the film?'],
  ),
  form(
    3,
    PaS,
    'B: Yes, I ___ (visit) Edinburgh last summer.',
    'visited',
    ['have visited', 'visit', 'am visiting'],
    ['visit', 'be'],
    ['A: Have you ever been to Scotland?'],
  ),
  form(
    3,
    PP,
    'B: I ___ (pass) my driving test.',
    'have passed',
    ['pass', 'am passing', 'has passed'],
    ['pass'],
    ['A: Why are you so happy?'],
  ),

  // ── Tier 3: Past Perfect, for the earlier of two past events ───────
  form(
    3,
    PaP,
    'The film ___ (start) ten minutes before, so we missed the beginning.',
    'had started',
    ['has started', 'starts', 'had start'],
    ['start'],
    ['We got to the cinema at eight.'],
  ),
  form(
    3,
    PaP,
    'Her brother ___ (wash) all the dishes.',
    'had washed',
    ['has washed', 'washes', 'had wash'],
    ['wash', 'get'],
    ['When Mia got home, the kitchen was clean.'],
  ),
  form(
    3,
    PaP,
    'I ___ (never / fly) before.',
    'had never flown',
    ['have never flown', 'had never flew', 'has never flown'],
    ['fly'],
    ['I was very nervous on the plane.'],
  ),
  form(
    3,
    PaP,
    'He ___ (forget) his homework again.',
    'had forgotten',
    ['has forgotten', 'had forgot', 'forgets'],
    ['forget'],
    ['The teacher was angry with Sam.'],
  ),
  form(
    3,
    PaP,
    'When we arrived at the party, most of the guests ___ (leave).',
    'had left',
    ['have left', 'has left', 'had leave'],
    ['arrive', 'leave'],
  ),
  form(
    3,
    PaP,
    'She ___ (stay) up late to finish her project.',
    'had stayed',
    ['has stayed', 'stays', 'is staying'],
    ['stay'],
    ['Ana was tired at school.'],
  ),
  form(
    3,
    PaP,
    'I ___ (meet) him at a wedding two years before.',
    'had met',
    ['have met', 'meet', 'has met'],
    ['meet'],
    ['I recognised the man at once.'],
  ),
  form(
    3,
    PaP,
    'It ___ (rain) in the night.',
    'had rained',
    ['has rained', 'rains', 'is raining'],
    ['rain'],
    ['The streets were wet in the morning.'],
  ),
  form(
    3,
    PaP,
    'She ___ (leave) her keys at school.',
    'had left',
    ['has left', 'leaves', 'had leave'],
    ['leave'],
    ['Zara could not get into her flat.'],
  ),
  form(
    3,
    PaP,
    'By the end of the first day, we ___ (cycle) fifty kilometres.',
    'had cycled',
    ['have cycled', 'cycle', 'had cycle'],
    ['cycle'],
    ['Last summer we went on a cycling holiday.'],
  ),

  // ── Tier 3: Past Continuous for the scene, Past Simple for events ──
  form(
    3,
    PaC,
    'I ___ (stand) at the bus stop when two cars crashed.',
    'was standing',
    ['am standing', 'were standing', 'have stood'],
    ['stand', 'see'],
    ['Yesterday I saw an accident.'],
  ),
  form(
    3,
    PaC,
    'I ___ (drive), so I could not answer.',
    'was driving',
    ['were driving', 'have driven', 'was drive'],
    ['drive'],
    ['Sorry I missed your call.'],
  ),
  sharing(
    'while',
    form(
      3,
      PaC,
      'While we ___ (have) dinner, the lights went out.',
      'were having',
      ['are having', 'was having', 'have had'],
      ['have'],
    ),
  ),
  form(
    3,
    PaC,
    'The wind ___ (blow) gently and the sea was calm.',
    'was blowing',
    ['is blowing', 'were blowing', 'blows'],
    ['blow'],
    ['It was a beautiful morning.'],
  ),
  form(
    3,
    PaC,
    'I ___ (read) in bed when it started.',
    'was reading',
    ['am reading', 'were reading', 'have read'],
    ['read'],
    ['Last night I heard a strange noise.'],
  ),
  form(
    3,
    PaC,
    'B: I ___ (tidy) my room.',
    'was tidying',
    ['am tidying', 'were tidying', 'have tidied'],
    ['tidy', 'do'],
    ['A: What were you doing when I called?'],
  ),
  form(
    3,
    PaS,
    'First I ___ (clean) my room, then I went shopping.',
    'cleaned',
    ['clean', 'have cleaned', 'am cleaning'],
    ['clean'],
    ['Last Saturday was busy.'],
  ),
  form(
    3,
    PaS,
    'When the phone rang, I ___ (answer) it at once.',
    'answered',
    ['answer', 'have answered', 'answers'],
    ['answer'],
  ),
  form(
    3,
    PaC,
    'B: No, I ___ (study) for my test all evening.',
    'was studying',
    ['am studying', 'were studying', 'have studied'],
    ['study'],
    ['A: Did you see the match last night?'],
  ),
  form(
    3,
    PaC,
    'At midnight, my parents ___ (still / dance).',
    'were still dancing',
    ['are still dancing', 'was still dancing', 'have still danced'],
    ['dance'],
    ['The wedding party went on very late.'],
  ),

  // ── Tier 3: Present Simple or Present Continuous ────────────────────
  form(
    3,
    PS,
    'He ___ (work) in a restaurant in the city centre.',
    'works',
    ['work', 'working', 'is work'],
    ['work'],
    ['My dad is a chef.'],
  ),
  form(
    3,
    PC,
    'B: She ___ (work) in the garden.',
    'is working',
    ['works', 'work', 'working'],
    ['work'],
    ['A: Where is Mum?'],
  ),
  form(
    3,
    PS,
    'B: Yes, I ___ (love) it.',
    'love',
    ['loves', 'loving', 'am love'],
    ['love'],
    ['A: Do you like this music?'],
  ),
  form(
    3,
    PS,
    'B: She ___ (teach) maths at a school in Leeds.',
    'teaches',
    ['teach', 'teaching', 'is teach'],
    ['teach', 'do'],
    ['A: What does your sister do?'],
  ),
  form(
    3,
    PC,
    'B: She ___ (write) an email to her teacher.',
    'is writing',
    ['writes', 'write', 'writing'],
    ['write', 'do'],
    ['A: What is your sister doing?'],
  ),
  form(
    3,
    PC,
    'B: Because it ___ (snow) outside.',
    'is snowing',
    ['snows', 'snow', 'snowing'],
    ['snow', 'wear'],
    ['A: Why are you wearing a coat?'],
  ),
  form(
    3,
    PC,
    'Usually I walk to school, but this week I ___ (take) the bus.',
    'am taking',
    ['takes', 'taking', 'is taking'],
    ['take', 'walk'],
    ['This week is different.'],
  ),
  form(
    3,
    PS,
    'B: No, I ___ (not / understand) it.',
    'don’t understand',
    ['am not understanding', 'doesn’t understand', 'not understand'],
    ['understand'],
    ['A: Do you understand the question?'],
  ),
  form(
    3,
    PC,
    'B: Sorry, I ___ (use) it right now.',
    'am using',
    ['use', 'uses', 'using'],
    ['use'],
    ['A: Can I borrow your pen?'],
  ),
  form(
    3,
    PS,
    'We ___ (rent) a small cottage near the beach.',
    'rent',
    ['rents', 'renting', 'rented'],
    ['rent'],
    ['Every summer my family goes to the coast.'],
  ),

  // ── Tier 3: the future: a plan, a decision, a prediction ───────────
  form(
    3,
    FW,
    'B: OK, I ___ (answer) it.',
    'will answer',
    ['answer', 'answers', 'will to answer'],
    ['answer'],
    ['A: The phone is ringing.'],
  ),
  form(
    3,
    GT,
    'B: Yes, I ___ (see) my cousins. We booked the tickets last week.',
    'am going to see',
    ['see', 'sees', 'am go to see'],
    ['see', 'book'],
    ['A: Have you got any plans for Saturday?'],
  ),
  form(
    3,
    FW,
    'B: Sit down. I ___ (get) you some water.',
    'will get',
    ['get', 'gets', 'will getting'],
    ['get'],
    ['A: I have a terrible headache.'],
  ),
  form(
    3,
    GT,
    'B: I ___ (study) art at college. I have already applied.',
    'am going to study',
    ['study', 'studies', 'will going to study'],
    ['study', 'apply'],
    ['A: What are your plans after school?'],
  ),
  form(
    3,
    GT,
    'There ___ (be) a storm.',
    'is going to be',
    ['is be', 'going to be', 'will going to be'],
    ['be'],
    ['The sky is dark grey and the wind is strong.'],
  ),
  form(
    3,
    FW,
    'B: Of course. I ___ (show) you after lunch.',
    'will show',
    ['show', 'shows', 'am show'],
    ['show'],
    ['A: Can you help me with my maths?'],
  ),
  form(
    3,
    PC,
    'B: Yes, he ___ (move) there in June. He has booked his flight.',
    'is moving',
    ['move', 'moving', 'are moving'],
    ['move', 'book'],
    ['A: I heard that Omar has a new job in Spain.'],
  ),
  form(
    3,
    FW,
    'B: Don’t worry. I ___ (phone) the bus company for you.',
    'will phone',
    ['phone', 'phones', 'will phoning'],
    ['phone', 'leave'],
    ['A: I think I left my bag on the bus.'],
  ),
  form(
    3,
    PS,
    'The next train to London ___ (leave) at 10.15.',
    'leaves',
    ['leave', 'is leave', 'leaving'],
    ['leave'],
    ['The timetable is on the wall.'],
  ),
  form(
    3,
    FW,
    'B: Good idea. I think it ___ (stay) dry.',
    'will stay',
    ['stays', 'will stays', 'stay'],
    ['stay'],
    ['A: Shall we go to the beach tomorrow?'],
  ),

  // ── Tier 3: when, if and as soon as with the present ───────────────
  sharing(
    'present after when or if',
    form(
      3,
      PS,
      'I will call you when I ___ (reach) home.',
      'reach',
      ['will reach', 'reached', 'reaches'],
      ['reach'],
    ),
  ),
  sharing(
    'present after when or if',
    form(
      3,
      PS,
      'If it ___ (rain) tomorrow, we will stay inside.',
      'rains',
      ['will rain', 'rained', 'rain'],
      ['rain', 'stay'],
    ),
  ),
  sharing(
    'present after when or if',
    form(
      3,
      PS,
      'B: Yes, after you ___ (tidy) your room.',
      'tidy',
      ['will tidy', 'tidied', 'tidies'],
      ['tidy'],
      ['A: Can I watch TV?'],
    ),
  ),
  sharing(
    'present after when or if',
    form(
      3,
      PS,
      'As soon as the bell ___ (ring), we can go home.',
      'rings',
      ['will ring', 'rang', 'ring'],
      ['ring'],
    ),
  ),
  sharing(
    'present after when or if',
    form(
      3,
      PS,
      'Before you ___ (lock) the door, check the windows.',
      'lock',
      ['will lock', 'locked', 'locks'],
      ['lock'],
    ),
  ),
  sharing(
    'present after when or if',
    form(
      3,
      PS,
      'B: Yes. I will make tea when she ___ (arrive).',
      'arrives',
      ['will arrive', 'arrived', 'arrive'],
      ['arrive', 'come'],
      ['A: Is Grandma coming today?'],
    ),
  ),
  sharing(
    'present after when or if',
    form(
      3,
      PS,
      'If you ___ (not / hurry), you will miss the bus.',
      'don’t hurry',
      ['won’t hurry', 'didn’t hurry', 'doesn’t hurry'],
      ['hurry'],
    ),
  ),
  sharing(
    'present after when or if',
    form(
      3,
      PS,
      'I will send you a message as soon as I ___ (hear) the results.',
      'hear',
      ['will hear', 'heard', 'am hearing'],
      ['hear'],
    ),
  ),
  sharing(
    'present after when or if',
    form(
      3,
      PS,
      'If Sam ___ (phone) tonight, I will tell him the news.',
      'phones',
      ['will phone', 'phoned', 'phone'],
      ['phone'],
    ),
  ),
  sharing(
    'present after when or if',
    form(
      3,
      PS,
      'We can go out when the rain ___ (stop).',
      'stops',
      ['will stop', 'stopped', 'stop'],
      ['stop'],
    ),
  ),

  // ── Tier 3: for and since, up to now ────────────────────────────────
  form(
    3,
    PP,
    'He ___ (live) in Bristol since then.',
    'has lived',
    ['lives', 'lived', 'is living'],
    ['live'],
    ['Omar came to England in 2020.'],
  ),
  form(
    3,
    PP,
    'B: We ___ (have) him for three years.',
    'have had',
    ['have', 'had', 'are having'],
    ['have'],
    ['A: How long have you had your dog?'],
  ),
  form(
    3,
    PP,
    'She ___ (play) the piano for eight years now.',
    'has played',
    ['plays', 'played', 'is playing'],
    ['play'],
    ['My sister started piano lessons when she was six.'],
  ),
  form(
    3,
    PP,
    'B: I ___ (not / sleep) well for a week.',
    'haven’t slept',
    ['don’t sleep', 'hasn’t slept', 'not slept'],
    ['sleep'],
    ['A: Why do you look so tired?'],
  ),
  form(
    3,
    PP,
    'He ___ (sell) fruit and vegetables there for over twenty-five years.',
    'has sold',
    ['sells', 'sold', 'is selling'],
    ['sell'],
    ['Mr Khan opened his shop in 1998, and he is still there every day.'],
  ),
  form(
    3,
    PP,
    'B: Yes, I ___ (know) her since we were children.',
    'have known',
    ['know', 'knew', 'am knowing'],
    ['know'],
    ['A: Do you know Priya well?'],
  ),
  form(
    3,
    PP,
    'She ___ (work) here since September.',
    'has worked',
    ['works', 'worked', 'is working'],
    ['work'],
    ['Our school has a new head teacher.'],
  ),
  form(
    3,
    PP,
    'B: Yes, he ___ (study) law there for two years now.',
    'has studied',
    ['studies', 'studied', 'is studying'],
    ['study'],
    ['A: Is your brother still at university?'],
  ),
  form(
    3,
    PP,
    'B: I ___ (not / see) him since the summer.',
    'haven’t seen',
    ['didn’t see', 'don’t see', 'hadn’t seen'],
    ['see'],
    ['A: When did you last see Ben?'],
  ),
  form(
    3,
    PP,
    'I ___ (come) here every Friday for years.',
    'have come',
    ['come', 'came', 'am coming'],
    ['come'],
    ['This café is my favourite.'],
  ),

  // ── Tier 3: a story in several tenses ───────────────────────────────
  form(
    3,
    PaS,
    'At first I ___ (not / know) anyone at my new school.',
    'didn’t know',
    ['don’t know', 'haven’t known', 'wasn’t knowing'],
    ['know', 'move'],
    ['Last year my family moved to a new town.'],
  ),
  form(
    3,
    PP,
    'B: Thank you. I ___ (study) it since I was ten.',
    'have studied',
    ['study', 'studied', 'am studying'],
    ['study', 'speak'],
    ['A: You speak English very well.'],
  ),
  form(
    3,
    PaS,
    'But yesterday she ___ (sleep) until ten.',
    'slept',
    ['sleeps', 'has slept', 'was sleep'],
    ['sleep'],
    ['Every morning, Lena gets up at seven.'],
  ),
  form(
    3,
    PP,
    'B: He ___ (just / go) out. He will be back in ten minutes.',
    'has just gone',
    ['has just went', 'have just gone', 'has just go'],
    ['go'],
    ['A: Where is Dad?'],
  ),
  form(
    3,
    PaS,
    'Every day I ___ (walk) two kilometres to school.',
    'walked',
    ['walk', 'have walked', 'am walking'],
    ['walk'],
    ['When I was a child, I lived in a small village.'],
  ),
  form(
    3,
    PP,
    'B: I can’t. I ___ (hurt) my leg, so I need to rest.',
    'have hurt',
    ['am hurting', 'hurts', 'has hurt'],
    ['hurt', 'come'],
    ['A: Are you coming to football tonight?'],
  ),
  sharing(
    'while',
    form(
      3,
      PaC,
      'While I ___ (make) breakfast, I burnt my finger.',
      'was making',
      ['am making', 'were making', 'have made'],
      ['make'],
    ),
  ),
  form(
    3,
    PP,
    'B: No thanks. I ___ (already / see) that film.',
    'have already seen',
    ['have already saw', 'has already seen', 'have already see'],
    ['see'],
    ['A: Do you want to come to the cinema?'],
  ),
  form(
    3,
    PaC,
    'It was dark, and it ___ (snow) heavily.',
    'was snowing',
    ['is snowing', 'were snowing', 'has snowed'],
    ['snow'],
    ['Tom looked out of the window at nine.'],
  ),
  form(
    3,
    PaS,
    'B: I ___ (fall) off my bike yesterday.',
    'fell',
    ['have fallen', 'fall', 'has fallen'],
    ['fall'],
    ['A: Why are you limping?'],
  ),
]

/** The options a question offers, the answer among them. */
export function optionsOf(item: TenseItem): readonly string[] {
  return item.options
}

/** The right option: the form for the gap, or the tense's name. */
export function answerOf(item: TenseItem): string {
  return item.answer ?? item.tense
}

export const BANK: GameBank<TenseItem> = {
  slug: 'tense-timeline',
  items: SENTENCE_BANK,
  // A sentence is unique on its own, and with the dialogue before it.
  key: (item) => (item.context ? `${item.context.join(' ')} ${item.sentence}` : item.sentence),
  answer: answerOf,
  options: optionsOf,
  tag: (item) => item.tense,
  tier: (item) => item.tier,
  // A question on a verb gives its forms away to another on the same verb.
  facts: (item) => [
    ...item.verbs.map((v) => `verb:${v}`),
    ...(item.rules ?? []).map((r) => `rule:${r}`),
  ],
  deepened: '2026-10-24',
}

/** Whether a question asks for the form that fills a gap, rather than the tense's name. */
export const isForming = (item: TenseItem): boolean => item.answer !== undefined
