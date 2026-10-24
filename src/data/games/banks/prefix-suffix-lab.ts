import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Prefix & Suffix Lab: build a word by adding the right prefix or suffix to a
 * root. A prefix question gives a meaning to build ("NOT happy"), a suffix
 * question gives a word class and a meaning ("make an ADJECTIVE meaning full of
 * care"), and the student picks the affix from four dealt at random from a pool
 * of eight.
 *
 * Moved out of src/app/games/prefix-suffix-lab/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts). The
 * page had two banks, 47 prefix questions and 48 suffix questions. They are now
 * one list, each question saying which it is (`mode`), and the page derives its
 * two banks from it.
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The three
 * wrong affixes are dealt at random from the pool, so a question is only fair if
 * no other affix in the pool also builds a word that fits the goal as written,
 * and a goal has to be true, and clear, for the people who read it. Ten questions
 * failed that test, and one note taught a false rule:
 *
 *   - lock, "meaning: to OPEN a lock again": the goal wants un- (unlock), but
 *     "again" is what re- means (relock), so it pointed at a wrong option. It now
 *     reads "meaning: to OPEN a lock";
 *   - like, "meaning: to NOT like": un- builds unlike, which literally means "not
 *     like", beside dis- (dislike), and online to unlike a post is a verb too. It
 *     now reads "meaning: to feel you do NOT like something";
 *   - cover, "meaning: to take a cover OFF / reveal", was marked dis- (discover).
 *     That goal describes uncover, and un- was among the wrong options in about 3
 *     deals in 7. The question now asks for un-: the answer is un-, the word is
 *     uncover, the goal is "meaning: to take a cover OFF" and the note is
 *     rewritten. The affix tally becomes un- 7 and dis- 5;
 *   - place, "meaning: to put in the WRONG place": dis- builds displace, which a
 *     careful student could defend. It now ends "and lose it", which is misplace;
 *   - use (suffix), "make an ADJECTIVE meaning of use": -able builds usable, which
 *     also fits "of use". It now reads "full of use", as the other -ful goals say
 *     "full of";
 *   - beauty (suffix), "full of beauty": -ous builds beauteous, a poetic word that
 *     Shakespeare uses and that students meet in The Tempest, so a student could
 *     defend it. The question now uses mercy, "full of mercy", which has the same
 *     y-to-i spelling change, and only -ful in the pool builds a word with that
 *     meaning: merciful (-less builds merciless, its opposite);
 *   - way, "meaning: a railway UNDER the ground": that is the American and Glasgow
 *     sense. A British subway is usually a path under a road, so the goal now
 *     reads "a path or railway UNDER the ground";
 *   - city, "meaning: a road running BETWEEN cities": intercity is an adjective,
 *     chiefly for trains and coaches, not a noun for a road. It now reads
 *     "meaning: travelling BETWEEN cities";
 *   - connected, "meaning: linked BETWEEN each other", and govern, "make a NOUN for
 *     the body that governs", were hard to read: "between each other" is not
 *     standard English, and a child can read "body" as a human body. They now
 *     read "meaning: with links BETWEEN all the parts" and "make a NOUN for the
 *     group of people who govern";
 *   - gentle, the note said "Drop e: gentle becomes gently". Dropping the e would
 *     give gentlly. The -le changes to -ly, and the note now says so.
 *
 * Every other goal, root and answer is unchanged. The old one-line notes
 * (`meaningNote`) are kept in the data but no longer shown: the explanation
 * after each answer covers them.
 */

export type LabMode = 'prefix' | 'suffix'

export interface LabSeed {
  mode: LabMode
  /** The base/root word shown to the learner */
  root: string
  /** What the learner is aiming for: a meaning (prefix) or a word class (suffix) */
  target: string
  /** The correct affix */
  answer: string
  /** The finished word once the affix is attached */
  resultingWord: string
  /** A short teaching note (UK English morphology) */
  meaningNote: string
}

export const LAB_ITEMS: LabSeed[] = [
  // ── Prefixes ──────────────────────────────────────────────────────────────
  {
    mode: 'prefix',
    root: 'happy',
    target: 'meaning: NOT happy',
    answer: 'un-',
    resultingWord: 'unhappy',
    meaningNote: '“un-” means “not”. unhappy = not happy.',
  },
  {
    mode: 'prefix',
    root: 'lock',
    target: 'meaning: to OPEN a lock',
    answer: 'un-',
    resultingWord: 'unlock',
    meaningNote: '“un-” can reverse an action: unlock = undo a lock.',
  },
  {
    mode: 'prefix',
    root: 'kind',
    target: 'meaning: NOT kind',
    answer: 'un-',
    resultingWord: 'unkind',
    meaningNote: '“un-” means “not”: unkind = not kind.',
  },
  {
    mode: 'prefix',
    root: 'fair',
    target: 'meaning: NOT fair',
    answer: 'un-',
    resultingWord: 'unfair',
    meaningNote: '“un-” means “not”: unfair = not fair.',
  },
  {
    mode: 'prefix',
    root: 'agree',
    target: 'meaning: to NOT agree',
    answer: 'dis-',
    resultingWord: 'disagree',
    meaningNote: '“dis-” reverses a verb: disagree = not agree.',
  },
  {
    mode: 'prefix',
    root: 'appear',
    target: 'meaning: to STOP being seen',
    answer: 'dis-',
    resultingWord: 'disappear',
    meaningNote: '“dis-” = opposite: disappear = stop appearing.',
  },
  {
    mode: 'prefix',
    root: 'honest',
    target: 'meaning: NOT honest',
    answer: 'dis-',
    resultingWord: 'dishonest',
    meaningNote: '“dis-” means “not”: dishonest = not honest.',
  },
  {
    mode: 'prefix',
    root: 'obey',
    target: 'meaning: to NOT obey',
    answer: 'dis-',
    resultingWord: 'disobey',
    meaningNote: '“dis-” reverses a verb: disobey = not obey.',
  },
  {
    mode: 'prefix',
    root: 'like',
    target: 'meaning: to feel you do NOT like something',
    answer: 'dis-',
    resultingWord: 'dislike',
    meaningNote: '“dis-” = opposite of: dislike = not like.',
  },
  {
    mode: 'prefix',
    root: 'spell',
    target: 'meaning: to spell WRONGLY',
    answer: 'mis-',
    resultingWord: 'misspell',
    meaningNote: '“mis-” = badly/wrongly. Keep both s: mis + spell = misspell.',
  },
  {
    mode: 'prefix',
    root: 'understand',
    target: 'meaning: to understand WRONGLY',
    answer: 'mis-',
    resultingWord: 'misunderstand',
    meaningNote: '“mis-” = wrongly: misunderstand = understand incorrectly.',
  },
  {
    mode: 'prefix',
    root: 'behave',
    target: 'meaning: to behave BADLY',
    answer: 'mis-',
    resultingWord: 'misbehave',
    meaningNote: '“mis-” = badly: misbehave = behave badly.',
  },
  {
    mode: 'prefix',
    root: 'lead',
    target: 'meaning: to lead in the WRONG direction',
    answer: 'mis-',
    resultingWord: 'mislead',
    meaningNote: '“mis-” = wrongly: mislead = lead the wrong way.',
  },
  {
    mode: 'prefix',
    root: 'judge',
    target: 'meaning: to judge WRONGLY',
    answer: 'mis-',
    resultingWord: 'misjudge',
    meaningNote: '“mis-” = wrongly: misjudge = judge incorrectly.',
  },
  {
    mode: 'prefix',
    root: 'build',
    target: 'meaning: to build AGAIN',
    answer: 're-',
    resultingWord: 'rebuild',
    meaningNote: '“re-” = again: rebuild = build again.',
  },
  {
    mode: 'prefix',
    root: 'write',
    target: 'meaning: to write AGAIN',
    answer: 're-',
    resultingWord: 'rewrite',
    meaningNote: '“re-” = again: rewrite = write again.',
  },
  {
    mode: 'prefix',
    root: 'play',
    target: 'meaning: to play AGAIN',
    answer: 're-',
    resultingWord: 'replay',
    meaningNote: '“re-” = again: replay = play again.',
  },
  {
    mode: 'prefix',
    root: 'use',
    target: 'meaning: to use AGAIN',
    answer: 're-',
    resultingWord: 'reuse',
    meaningNote: '“re-” = again: reuse = use again.',
  },
  {
    mode: 'prefix',
    root: 'consider',
    target: 'meaning: to think about AGAIN',
    answer: 're-',
    resultingWord: 'reconsider',
    meaningNote: '“re-” = again: reconsider = consider again.',
  },
  {
    mode: 'prefix',
    root: 'view',
    target: 'meaning: to look at something BEFORE release',
    answer: 'pre-',
    resultingWord: 'preview',
    meaningNote: '“pre-” = before: preview = a view before.',
  },
  {
    mode: 'prefix',
    root: 'historic',
    target: 'meaning: BEFORE recorded history',
    answer: 'pre-',
    resultingWord: 'prehistoric',
    meaningNote: '“pre-” = before: prehistoric = before history.',
  },
  {
    mode: 'prefix',
    root: 'heat',
    target: 'meaning: to heat BEFOREHAND',
    answer: 'pre-',
    resultingWord: 'preheat',
    meaningNote: '“pre-” = before: preheat = heat in advance.',
  },
  {
    mode: 'prefix',
    root: 'pay',
    target: 'meaning: to pay BEFORE you receive',
    answer: 'pre-',
    resultingWord: 'prepay',
    meaningNote: '“pre-” = before: prepay = pay in advance.',
  },
  {
    mode: 'prefix',
    root: 'school',
    target: 'meaning: education BEFORE school',
    answer: 'pre-',
    resultingWord: 'preschool',
    meaningNote: '“pre-” = before: preschool = before primary school.',
  },
  {
    mode: 'prefix',
    root: 'freeze',
    target: 'meaning: AGAINST freezing',
    answer: 'anti-',
    resultingWord: 'antifreeze',
    meaningNote: '“anti-” = against: antifreeze stops liquid freezing.',
  },
  {
    mode: 'prefix',
    root: 'social',
    target: 'meaning: AGAINST social behaviour',
    answer: 'anti-',
    resultingWord: 'antisocial',
    meaningNote: '“anti-” = against/opposed: antisocial = against society.',
  },
  {
    mode: 'prefix',
    root: 'clockwise',
    target: 'meaning: AGAINST the clock’s direction',
    answer: 'anti-',
    resultingWord: 'anticlockwise',
    meaningNote: '“anti-” = against: anticlockwise (UK) = opposite to clockwise.',
  },
  {
    mode: 'prefix',
    root: 'bacterial',
    target: 'meaning: AGAINST bacteria',
    answer: 'anti-',
    resultingWord: 'antibacterial',
    meaningNote: '“anti-” = against: antibacterial = fights bacteria.',
  },
  {
    mode: 'prefix',
    root: 'marine',
    target: 'meaning: a vessel that goes UNDER the sea',
    answer: 'sub-',
    resultingWord: 'submarine',
    meaningNote: '“sub-” = under/below: submarine = under the sea.',
  },
  {
    mode: 'prefix',
    root: 'way',
    target: 'meaning: a path or railway UNDER the ground',
    answer: 'sub-',
    resultingWord: 'subway',
    meaningNote: '“sub-” = under: subway = an underground way.',
  },
  {
    mode: 'prefix',
    root: 'heading',
    target: 'meaning: a smaller heading UNDER the main one',
    answer: 'sub-',
    resultingWord: 'subheading',
    meaningNote: '“sub-” = below/secondary: subheading sits under a heading.',
  },
  {
    mode: 'prefix',
    root: 'standard',
    target: 'meaning: BELOW the standard',
    answer: 'sub-',
    resultingWord: 'substandard',
    meaningNote: '“sub-” = below: substandard = below an accepted level.',
  },
  {
    mode: 'prefix',
    root: 'merge',
    target: 'meaning: to sink completely UNDER water',
    answer: 'sub-',
    resultingWord: 'submerge',
    meaningNote: '“sub-” = under: submerge = put fully under water.',
  },
  {
    mode: 'prefix',
    root: 'national',
    target: 'meaning: BETWEEN nations',
    answer: 'inter-',
    resultingWord: 'international',
    meaningNote: '“inter-” = between/among: international = between nations.',
  },
  {
    mode: 'prefix',
    root: 'act',
    target: 'meaning: to act BETWEEN people',
    answer: 'inter-',
    resultingWord: 'interact',
    meaningNote: '“inter-” = between: interact = act with each other.',
  },
  {
    mode: 'prefix',
    root: 'change',
    target: 'meaning: to swap BETWEEN two things',
    answer: 'inter-',
    resultingWord: 'interchange',
    meaningNote: '“inter-” = between: interchange = exchange between.',
  },
  {
    mode: 'prefix',
    root: 'city',
    target: 'meaning: travelling BETWEEN cities',
    answer: 'inter-',
    resultingWord: 'intercity',
    meaningNote: '“inter-” = between: intercity = between cities.',
  },
  {
    mode: 'prefix',
    root: 'connected',
    target: 'meaning: with links BETWEEN all the parts',
    answer: 'inter-',
    resultingWord: 'interconnected',
    meaningNote: '“inter-” = between: interconnected = linked together.',
  },
  {
    mode: 'prefix',
    root: 'tidy',
    target: 'meaning: NOT tidy',
    answer: 'un-',
    resultingWord: 'untidy',
    meaningNote: '“un-” means “not”: untidy = not tidy.',
  },
  {
    mode: 'prefix',
    root: 'wrap',
    target: 'meaning: to take the wrapping OFF',
    answer: 'un-',
    resultingWord: 'unwrap',
    meaningNote: '“un-” reverses an action: unwrap = remove wrapping.',
  },
  {
    mode: 'prefix',
    root: 'cover',
    target: 'meaning: to take a cover OFF',
    answer: 'un-',
    resultingWord: 'uncover',
    meaningNote: '“un-” reverses an action: uncover = take the cover off.',
  },
  {
    mode: 'prefix',
    root: 'place',
    target: 'meaning: to put in the WRONG place and lose it',
    answer: 'mis-',
    resultingWord: 'misplace',
    meaningNote: '“mis-” = wrongly: misplace = put in the wrong place.',
  },
  {
    mode: 'prefix',
    root: 'fill',
    target: 'meaning: to fill AGAIN',
    answer: 're-',
    resultingWord: 'refill',
    meaningNote: '“re-” = again: refill = fill again.',
  },
  {
    mode: 'prefix',
    root: 'caution',
    target: 'meaning: care taken BEFORE acting',
    answer: 'pre-',
    resultingWord: 'precaution',
    meaningNote: '“pre-” = before: precaution = care taken in advance.',
  },
  {
    mode: 'prefix',
    root: 'septic',
    target: 'meaning: AGAINST infection',
    answer: 'anti-',
    resultingWord: 'antiseptic',
    meaningNote: '“anti-” = against: antiseptic = prevents infection.',
  },
  {
    mode: 'prefix',
    root: 'title',
    target: 'meaning: text BELOW the main image (on screen)',
    answer: 'sub-',
    resultingWord: 'subtitle',
    meaningNote: '“sub-” = below: subtitle = text shown below.',
  },
  {
    mode: 'prefix',
    root: 'view',
    target: 'meaning: a formal talk BETWEEN people',
    answer: 'inter-',
    resultingWord: 'interview',
    meaningNote: '“inter-” = between: interview = a meeting between people.',
  },

  // ── Suffixes ──────────────────────────────────────────────────────────────
  {
    mode: 'suffix',
    root: 'care',
    target: 'make an ADJECTIVE meaning “full of care”',
    answer: '-ful',
    resultingWord: 'careful',
    meaningNote: '“-ful” = full of: careful = full of care.',
  },
  {
    mode: 'suffix',
    root: 'hope',
    target: 'make an ADJECTIVE meaning “full of hope”',
    answer: '-ful',
    resultingWord: 'hopeful',
    meaningNote: '“-ful” = full of: hopeful = full of hope.',
  },
  {
    mode: 'suffix',
    root: 'mercy',
    target: 'make an ADJECTIVE meaning “full of mercy”',
    answer: '-ful',
    resultingWord: 'merciful',
    meaningNote: 'Spelling change: mercy → merciful (y → i).',
  },
  {
    mode: 'suffix',
    root: 'use',
    target: 'make an ADJECTIVE meaning “full of use”',
    answer: '-ful',
    resultingWord: 'useful',
    meaningNote: '“-ful” = full of: useful = having use.',
  },
  {
    mode: 'suffix',
    root: 'care',
    target: 'make an ADJECTIVE meaning “without care”',
    answer: '-less',
    resultingWord: 'careless',
    meaningNote: '“-less” = without: careless = without care.',
  },
  {
    mode: 'suffix',
    root: 'hope',
    target: 'make an ADJECTIVE meaning “without hope”',
    answer: '-less',
    resultingWord: 'hopeless',
    meaningNote: '“-less” = without: hopeless = without hope.',
  },
  {
    mode: 'suffix',
    root: 'fear',
    target: 'make an ADJECTIVE meaning “without fear”',
    answer: '-less',
    resultingWord: 'fearless',
    meaningNote: '“-less” = without: fearless = without fear.',
  },
  {
    mode: 'suffix',
    root: 'home',
    target: 'make an ADJECTIVE meaning “without a home”',
    answer: '-less',
    resultingWord: 'homeless',
    meaningNote: '“-less” = without: homeless = without a home.',
  },
  {
    mode: 'suffix',
    root: 'kind',
    target: 'make a NOUN meaning “the state of being kind”',
    answer: '-ness',
    resultingWord: 'kindness',
    meaningNote: '“-ness” makes a noun: kindness = being kind.',
  },
  {
    mode: 'suffix',
    root: 'happy',
    target: 'make a NOUN meaning “the state of being happy”',
    answer: '-ness',
    resultingWord: 'happiness',
    meaningNote: 'Spelling change: happy → happiness (y → i).',
  },
  {
    mode: 'suffix',
    root: 'dark',
    target: 'make a NOUN meaning “the state of being dark”',
    answer: '-ness',
    resultingWord: 'darkness',
    meaningNote: '“-ness” makes a noun: darkness = being dark.',
  },
  {
    mode: 'suffix',
    root: 'sad',
    target: 'make a NOUN meaning “the state of being sad”',
    answer: '-ness',
    resultingWord: 'sadness',
    meaningNote: '“-ness” makes a noun: sadness = being sad.',
  },
  {
    mode: 'suffix',
    root: 'ill',
    target: 'make a NOUN meaning “the state of being ill”',
    answer: '-ness',
    resultingWord: 'illness',
    meaningNote: 'Keep both l: ill + ness = illness.',
  },
  {
    mode: 'suffix',
    root: 'educate',
    target: 'make a NOUN for the act of educating',
    answer: '-tion',
    resultingWord: 'education',
    meaningNote: 'Drop “e”: educate → education.',
  },
  {
    mode: 'suffix',
    root: 'create',
    target: 'make a NOUN for the act of creating',
    answer: '-tion',
    resultingWord: 'creation',
    meaningNote: 'Drop “e”: create → creation.',
  },
  {
    mode: 'suffix',
    root: 'celebrate',
    target: 'make a NOUN for the act of celebrating',
    answer: '-tion',
    resultingWord: 'celebration',
    meaningNote: 'Drop “e”: celebrate → celebration.',
  },
  {
    mode: 'suffix',
    root: 'inform',
    target: 'make a NOUN meaning facts that inform',
    answer: '-tion',
    resultingWord: 'information',
    meaningNote: '“-tion” makes a noun: inform → information.',
  },
  {
    mode: 'suffix',
    root: 'pollute',
    target: 'make a NOUN for the act of polluting',
    answer: '-tion',
    resultingWord: 'pollution',
    meaningNote: 'Drop “e”: pollute → pollution.',
  },
  {
    mode: 'suffix',
    root: 'enjoy',
    target: 'make an ADJECTIVE meaning “able to be enjoyed”',
    answer: '-able',
    resultingWord: 'enjoyable',
    meaningNote: '“-able” = able to be: enjoyable = can be enjoyed.',
  },
  {
    mode: 'suffix',
    root: 'comfort',
    target: 'make an ADJECTIVE meaning “giving comfort”',
    answer: '-able',
    resultingWord: 'comfortable',
    meaningNote: '“-able” = able to: comfortable = gives comfort.',
  },
  {
    mode: 'suffix',
    root: 'value',
    target: 'make an ADJECTIVE meaning “having great value”',
    answer: '-able',
    resultingWord: 'valuable',
    meaningNote: 'Drop “e”: value → valuable.',
  },
  {
    mode: 'suffix',
    root: 'rely',
    target: 'make an ADJECTIVE meaning “able to be relied on”',
    answer: '-able',
    resultingWord: 'reliable',
    meaningNote: 'Spelling change: rely → reliable (y → i).',
  },
  {
    mode: 'suffix',
    root: 'wash',
    target: 'make an ADJECTIVE meaning “able to be washed”',
    answer: '-able',
    resultingWord: 'washable',
    meaningNote: '“-able” = able to be: washable = can be washed.',
  },
  {
    mode: 'suffix',
    root: 'quick',
    target: 'make an ADVERB meaning “in a quick way”',
    answer: '-ly',
    resultingWord: 'quickly',
    meaningNote: '“-ly” makes an adverb: quickly = in a quick way.',
  },
  {
    mode: 'suffix',
    root: 'slow',
    target: 'make an ADVERB meaning “in a slow way”',
    answer: '-ly',
    resultingWord: 'slowly',
    meaningNote: '“-ly” makes an adverb: slowly = in a slow way.',
  },
  {
    mode: 'suffix',
    root: 'happy',
    target: 'make an ADVERB meaning “in a happy way”',
    answer: '-ly',
    resultingWord: 'happily',
    meaningNote: 'Spelling change: happy → happily (y → i).',
  },
  {
    mode: 'suffix',
    root: 'careful',
    target: 'make an ADVERB meaning “in a careful way”',
    answer: '-ly',
    resultingWord: 'carefully',
    meaningNote: '“-ly” on an adjective: careful → carefully.',
  },
  {
    mode: 'suffix',
    root: 'gentle',
    target: 'make an ADVERB meaning “in a gentle way”',
    answer: '-ly',
    resultingWord: 'gently',
    meaningNote: 'Change “-le” to “-ly”: gentle → gently.',
  },
  {
    mode: 'suffix',
    root: 'enjoy',
    target: 'make a NOUN for the act/feeling of enjoying',
    answer: '-ment',
    resultingWord: 'enjoyment',
    meaningNote: '“-ment” makes a noun: enjoyment = the feeling of enjoying.',
  },
  {
    mode: 'suffix',
    root: 'agree',
    target: 'make a NOUN for the act of agreeing',
    answer: '-ment',
    resultingWord: 'agreement',
    meaningNote: '“-ment” makes a noun: agreement = an act of agreeing.',
  },
  {
    mode: 'suffix',
    root: 'move',
    target: 'make a NOUN for the act of moving',
    answer: '-ment',
    resultingWord: 'movement',
    meaningNote: '“-ment” makes a noun: movement = the act of moving.',
  },
  {
    mode: 'suffix',
    root: 'develop',
    target: 'make a NOUN for the process of developing',
    answer: '-ment',
    resultingWord: 'development',
    meaningNote: '“-ment” makes a noun: develop → development.',
  },
  {
    mode: 'suffix',
    root: 'govern',
    target: 'make a NOUN for the group of people who govern',
    answer: '-ment',
    resultingWord: 'government',
    meaningNote: '“-ment” makes a noun: govern → government.',
  },
  {
    mode: 'suffix',
    root: 'danger',
    target: 'make an ADJECTIVE meaning “full of danger”',
    answer: '-ous',
    resultingWord: 'dangerous',
    meaningNote: '“-ous” = full of/having: dangerous = full of danger.',
  },
  {
    mode: 'suffix',
    root: 'poison',
    target: 'make an ADJECTIVE meaning “containing poison”',
    answer: '-ous',
    resultingWord: 'poisonous',
    meaningNote: '“-ous” = having: poisonous = containing poison.',
  },
  {
    mode: 'suffix',
    root: 'fame',
    target: 'make an ADJECTIVE meaning “having fame”',
    answer: '-ous',
    resultingWord: 'famous',
    meaningNote: 'Drop “e”: fame → famous.',
  },
  {
    mode: 'suffix',
    root: 'mystery',
    target: 'make an ADJECTIVE meaning “full of mystery”',
    answer: '-ous',
    resultingWord: 'mysterious',
    meaningNote: 'Spelling change: mystery → mysterious (y → i).',
  },
  {
    mode: 'suffix',
    root: 'nerve',
    target: 'make an ADJECTIVE meaning “anxious / on edge”',
    answer: '-ous',
    resultingWord: 'nervous',
    meaningNote: 'Drop “e”: nerve → nervous.',
  },
  {
    mode: 'suffix',
    root: 'thought',
    target: 'make an ADJECTIVE meaning “full of thought for others”',
    answer: '-ful',
    resultingWord: 'thoughtful',
    meaningNote: '“-ful” = full of: thoughtful = considerate.',
  },
  {
    mode: 'suffix',
    root: 'power',
    target: 'make an ADJECTIVE meaning “full of power”',
    answer: '-ful',
    resultingWord: 'powerful',
    meaningNote: '“-ful” = full of: powerful = having great power.',
  },
  {
    mode: 'suffix',
    root: 'pain',
    target: 'make an ADJECTIVE meaning “without pain”',
    answer: '-less',
    resultingWord: 'painless',
    meaningNote: '“-less” = without: painless = without pain.',
  },
  {
    mode: 'suffix',
    root: 'weight',
    target: 'make an ADJECTIVE meaning “without weight”',
    answer: '-less',
    resultingWord: 'weightless',
    meaningNote: '“-less” = without: weightless = having no weight.',
  },
  {
    mode: 'suffix',
    root: 'weak',
    target: 'make a NOUN meaning “the state of being weak”',
    answer: '-ness',
    resultingWord: 'weakness',
    meaningNote: '“-ness” makes a noun: weakness = being weak.',
  },
  {
    mode: 'suffix',
    root: 'protect',
    target: 'make a NOUN for the act of protecting',
    answer: '-tion',
    resultingWord: 'protection',
    meaningNote: '“-tion” makes a noun: protect → protection.',
  },
  {
    mode: 'suffix',
    root: 'break',
    target: 'make an ADJECTIVE meaning “able to be broken”',
    answer: '-able',
    resultingWord: 'breakable',
    meaningNote: '“-able” = able to be: breakable = can be broken.',
  },
  {
    mode: 'suffix',
    root: 'brave',
    target: 'make an ADVERB meaning “in a brave way”',
    answer: '-ly',
    resultingWord: 'bravely',
    meaningNote: '“-ly” makes an adverb: bravely = in a brave way.',
  },
  {
    mode: 'suffix',
    root: 'punish',
    target: 'make a NOUN for the act of punishing',
    answer: '-ment',
    resultingWord: 'punishment',
    meaningNote: '“-ment” makes a noun: punish → punishment.',
  },
  {
    mode: 'suffix',
    root: 'courage',
    target: 'make an ADJECTIVE meaning “brave / having courage”',
    answer: '-ous',
    resultingWord: 'courageous',
    meaningNote: 'Keep the “e”: courage → courageous.',
  },
]

export const BANK: GameBank<LabSeed> = {
  slug: 'prefix-suffix-lab',
  items: LAB_ITEMS,
  // A root can appear twice (view, care, happy), so the key is the mode, the
  // root and the goal, which is everything the student is shown.
  key: (q) => `${q.mode}: ${q.root} | ${q.target}`,
  answer: (q) => q.answer,
  // The page deals four affixes at random from a pool of eight for every
  // question, so there is no fixed list of options.
  options: () => null,
  tag: (q) => `${q.mode} ${q.answer}`,
  // One root once a round: "happy" asked as unhappy, happiness and happily in
  // one round answers itself (24 October 2026).
  facts: (q) => [q.root],
}
