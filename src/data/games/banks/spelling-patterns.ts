import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Spelling Patterns: pick the correctly spelt word from four, then learn the
 * rule behind it. A question asks "Which spelling is correct?" of a word, of a
 * word to be built from a root and an ending ("refer + -ed"), or of the word
 * that fills the gap in a sentence. The four options are shuffled for each
 * attempt. The game uses British spelling, and the page says so.
 *
 * Moved out of src/app/games/spelling-patterns/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts). Each
 * question carries `pattern`, the heading it sat under in the page's list,
 * which is the tag the account records. The old one-line `rule` is kept in the
 * data on the old questions but no longer shown: the explanation after each
 * answer covers it.
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations, and by the
 * second reader who checked them). The game asks for THE correct spelling and
 * marks one option right. Thirteen questions had a second spelling a careful
 * student could defend, or showed one option twice:
 *
 *   - hoping offered "hopping", babies offered "babes", planned offered "planed"
 *     (from plane, to smooth wood), knives offered "knifes" (to knife, a verb)
 *     and leaves offered "leafs" (as in "leafs through a book"). Each is an
 *     ordinary word, spelt correctly, and the question gives no sentence to
 *     choose between them. Each is now a non-word ("hoppeing", "babyes",
 *     "plannd", "knifs", "leafes");
 *   - stopped offered "stoped", which is also a correct spelling: the past tense
 *     of stope, a mining verb for digging out ore, in the larger dictionaries.
 *     Few students know it, but the same test removed "planed", so it is now
 *     the non-word "stopd". The p left single is still offered, in "stopeed";
 *   - usable offered "useable", lovable offered "loveable", roofs offered
 *     "rooves" and organise offered "organize". The standard British dictionaries
 *     list each as an accepted spelling (rooves rarely, organize as the Oxford
 *     spelling), so a student who knew it was marked wrong. Each is now a
 *     non-word ("usible", "lovabel", "rooffs", "orginise");
 *   - the noun practice offered "practise" and "practice" as bare words. Both are
 *     right, as a verb and as a noun, and nothing said which was wanted. The four
 *     options now carry the noun phrase "football practice", as the verb question
 *     beside it carries "the song";
 *   - controlled showed "controled" twice, and gardening showed "gardenning"
 *     twice, so each was a three-option question. A new wrong spelling replaces
 *     the repeat ("controllled", "gardeneing").
 *
 * Six of the old one-line rules were also wrong or misleading, and are corrected:
 *
 *   - protein said "ei after a vowel", but the letter before the ei is t;
 *   - television said "after a long vowel sound", but the vowel before -sion is
 *     short. The ending is the /zh/ sound;
 *   - decision said "after a /zh/ sound use -sion". The ending is that sound;
 *   - expansion said "after n the ending is often -sion", yet attention, from a
 *     verb that also ends in nd, takes -tion. Now expansion says that a verb
 *     ending in -d often takes -sion, and attention says it is the exception;
 *   - controlled said "UK English doubles the final l". American English doubles
 *     it here too, because the stress is on the last syllable. It now says so.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "weak in
 * depth and content"; the audit (.tmp-games-audit/REPORT-ks3.md) found 65
 * questions on primary-school words, wrong options no one writes ("car ried",
 * "carriedd"), explanations that named other questions' words ("Compare
 * cried"), and American spellings marked wrong with no word on screen that
 * British spelling was wanted. The bank now holds 204 questions in three tiers
 * (`tier`), each with its word `family`:
 *
 *   - tier 1, 51: a common word with one pattern (definitely, February,
 *     scissors, niece, behaviour, permission, loneliness);
 *   - tier 2, 91: the harder patterns and the exceptions (weird, protein,
 *     awful, wholly), endings that sound alike (-able or -ible, -ance or
 *     -ence, -ant or -ent, -ary or -ery, -cial or -tial), British spellings
 *     (analyse, pyjamas, manoeuvre), the terms of analysis a student writes
 *     (simile, stanza, atmosphere), and a new kind: a root and an ending to
 *     join (`prompt`: "forget + -able", "mis- + spell", "journey + -s"), where
 *     the rule must be applied to a word;
 *   - tier 3, 62: the exam skill, the word in a sentence (`sentence`): 43 real
 *     lines from texts out of UK copyright in src/data/full-texts (Jane Eyre,
 *     Pride and Prejudice, Frankenstein, The Sign of Four, Animal Farm, Great
 *     Expectations), checked word for word against those files by a script,
 *     each with its `source` shown under it; the hardest terms of analysis in a
 *     sentence of the site's own (onomatopoeia, soliloquy, juxtaposition,
 *     playwright, rhythm); and the joins where two rules meet (occur +
 *     -ence, prefer + -ence, fulfil + -ment).
 *
 * Every wrong option is a misspelling people really make: a letter not doubled
 * or doubled wrongly, a silent letter dropped, a vowel spelt as it sounds, the
 * wrong ending of two that sound alike, the American spelling. None has a
 * space, a tripled letter or a stray doubled final letter. A real line was
 * used only where every word is spelt as British English spells it now: no
 * "to-morrow", no "shew". No option is a correct spelling of another word,
 * except "believes" beside beliefs, where the sentence decides.
 *
 * THE OLD QUESTIONS. 36 are kept. Twelve had a malformed or typed-looking wrong
 * option, each replaced by a real misspelling: beginnning (begginning),
 * travelng and travellling (travaling, travling), gardeneing (gardining),
 * noticeible (noticible), arguemnt (arguemant), happieness (happines), decison
 * and decistion (desision, decission), discussian (discution), posesssion
 * (posesion), attentcion (atention), televsion (telivision) and centr (senter).
 * 29 were removed: the primary-school words (piece, thief, weight, running,
 * stopped, planned, swimming, making, hoping, writing, cried, carried, babies,
 * studying, played, enjoyed, monkeys, information, knives, leaves, wives,
 * halves, shelves, hopeful); controlled, which has no second real misspelling;
 * and usable, lovable, roofs and organise, whose wrong options had become
 * non-words because their real variants are accepted spellings.
 *
 * FACTS AND EXPLANATIONS. No two questions on one word family share a round
 * (BANK.facts: the family, and `shares`, a family whose word a sentence, a
 * source or an explanation shows: the line that gaps magnificent also prints
 * character, and every line from Pride and Prejudice prints prejudice in its
 * source). Every explanation was rewritten, and none names a word another
 * question asks for: a rule is taught with an example of its own.
 *
 * CHECKED (31 October 2026) by a second, independent reader, as the founder
 * decided. All 43 real lines match their held text word for word, in the
 * chapter named, with the right speaker. Fixed:
 *   - publicly removed: its trap, publically, is recorded by Collins and
 *     Merriam-Webster, and the founder decided on 23 October 2026 that
 *     spellings dictionaries accept are right;
 *   - wrong options that dictionaries accept, or that are words: hight
 *     (listed as a variant of height) became hite, accidently (listed as a
 *     variant of accidentally) became accidentially, and loafs (he loafs
 *     about) became loafves;
 *   - exxagerate, a mistake nobody makes, became exagerrate;
 *   - prejudice was gapped in a line from Pride and Prejudice, whose source,
 *     shown under it, spelt the answer; its line is now the Creature's, from
 *     Frankenstein, Chapter 15;
 *   - the licence options carry their article ("a licence to drive"), so that
 *     "license to drive" cannot be read as the British verb;
 *   - `shares` added to 13 questions: the eight from Pride and Prejudice share
 *     prejudice, two sentences print know, others print satisfy, natural and
 *     whole, and mischief's explanation spells chief.
 * Kept wrong, because the page says British spelling is wanted: the American
 * spellings (color, center, neighbor, analyze, jewelry), which Collins gives as
 * US.
 */

export interface PatternItem {
  /** The four spellings offered: the right one and three misspellings people make. */
  options: [string, string, string, string]
  answerIndex: 0 | 1 | 2 | 3
  /** The one-line rule shown before 16 October 2026: kept on the old questions, no longer shown. */
  rule?: string
  /** The spelling pattern the question tests: the heading it sat under in the page's list. */
  pattern: string
  /** 1, 2 or 3: see the docblock. */
  tier: 1 | 2 | 3
  /** The word family, a root and the words built on it: no two of one family share a round. */
  family: string
  /** Another family whose word the question's sentence prints, kept out of its round. */
  shares?: string[]
  /** For a word to be built: the root and the ending to join ("refer + -ed"), shown in the question. */
  prompt?: string
  /** A sentence the word belongs in, its place shown as ___. */
  sentence?: string
  /**
   * Where a real sentence comes from, as the study guides cite it, with its
   * speaker where one speaks it; shown under it. Absent where the sentence is
   * the site's own.
   */
  source?: string
}

export const PATTERN_BANK: PatternItem[] = [
  // i before e
  {
    options: ['recieve', 'receive', 'receeve', 'receve'],
    answerIndex: 1,
    tier: 1,
    pattern: 'i before e',
    family: 'receive',
    rule: "'i' before 'e' except after 'c' - so 'ceive', not 'cieve'.",
  },
  {
    options: ['beleive', 'beleeve', 'believe', 'bilieve'],
    answerIndex: 2,
    tier: 1,
    pattern: 'i before e',
    family: 'believe',
    rule: "'i' before 'e' when there is no 'c': bel-ieve.",
  },
  {
    options: ['acheive', 'achieve', 'acheeve', 'acheve'],
    answerIndex: 1,
    tier: 1,
    pattern: 'i before e',
    family: 'achieve',
    rule: "'i' before 'e' (no 'c' here): ach-ieve.",
  },
  {
    options: ['decieve', 'deceeve', 'deceive', 'deceve'],
    answerIndex: 2,
    tier: 1,
    pattern: 'i before e',
    family: 'deceive',
    rule: "After 'c', it is 'ei': dec-eive.",
  },
  {
    options: ['cieling', 'ceiling', 'ceeling', 'celing'],
    answerIndex: 1,
    tier: 1,
    pattern: 'i before e',
    family: 'ceiling',
    rule: "After 'c', use 'ei': c-eiling.",
  },
  {
    options: ['nieghbour', 'neighbour', 'neighbor', 'naighbour'],
    answerIndex: 1,
    tier: 1,
    pattern: 'i before e',
    family: 'neighbour',
    rule: "Exception: 'ei' for the /ay/ sound; UK keeps the 'u' in -bour.",
  },
  {
    options: ['feirse', 'fierse', 'fierce', 'feirce'],
    answerIndex: 2,
    tier: 1,
    pattern: 'i before e',
    family: 'fierce',
  },
  {
    options: ['niese', 'neese', 'neice', 'niece'],
    answerIndex: 3,
    tier: 1,
    pattern: 'i before e',
    family: 'niece',
  },
  {
    options: ['mischif', 'mistchief', 'mischief', 'mischeif'],
    answerIndex: 2,
    tier: 1,
    pattern: 'i before e',
    family: 'mischief',
    shares: ['chief'],
  },
  {
    options: ['wierd', 'weird', 'weerd', 'weired'],
    answerIndex: 1,
    tier: 2,
    pattern: 'i before e',
    family: 'weird',
    rule: "Exception: 'weird' is spelled 'ei' though no 'c' precedes it.",
  },
  {
    options: ['seize', 'sieze', 'seeze', 'seaze'],
    answerIndex: 0,
    tier: 2,
    pattern: 'i before e',
    family: 'seize',
    rule: "Exception: 'seize' breaks the rule and uses 'ei'.",
  },
  {
    options: ['protien', 'protein', 'proteen', 'protian'],
    answerIndex: 1,
    tier: 2,
    pattern: 'i before e',
    family: 'protein',
    rule: "Exception: 'protein' has 'ei' although no 'c' comes before it.",
  },
  {
    sentence: '“What ___ country was he going to, Bessie?”',
    source: 'Jane Eyre, Chapter 10',
    options: ['foreign', 'forein', 'foriegn', 'forign'],
    answerIndex: 0,
    tier: 3,
    pattern: 'i before e',
    family: 'foreign',
  },
  {
    sentence: 'Mary was too slim for her ___, but Blanche was moulded like a Dian.',
    source: 'Jane Eyre, Chapter 17',
    options: ['hite', 'hieght', 'height', 'heigth'],
    answerIndex: 2,
    tier: 3,
    pattern: 'i before e',
    family: 'height',
  },
  {
    sentence: '"I have not ___ to think of that," said I.',
    source: 'Great Expectations, Chapter 55',
    options: ['lesiure', 'liesure', 'leasure', 'leisure'],
    answerIndex: 3,
    tier: 3,
    pattern: 'i before e',
    family: 'leisure',
  },
  {
    sentence: 'It was the one grain of ___ I had.',
    source: 'Great Expectations, Chapter 39',
    options: ['relief', 'releaf', 'releif', 'relif'],
    answerIndex: 0,
    tier: 3,
    pattern: 'i before e',
    family: 'relief',
  },
  {
    sentence: 'This was indeed a godlike ___, and I ardently desired to become acquainted with it.',
    source: 'Frankenstein, Chapter 12',
    options: ['sience', 'scince', 'science', 'sceince'],
    answerIndex: 2,
    tier: 3,
    pattern: 'i before e',
    family: 'science',
    shares: ['acquaint', 'desire'],
  },
  {
    sentence: 'And in many ways the animal method of doing things was more ___ and saved labour.',
    source: 'Animal Farm, Chapter 6',
    options: ['efficient', 'efficeint', 'eficient', 'effishent'],
    answerIndex: 0,
    tier: 3,
    pattern: 'i before e',
    family: 'efficient',
  },
  // consonant doubling
  {
    options: ['begining', 'beginning', 'beggining', 'begginning'],
    answerIndex: 1,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'begin',
    rule: "Stress on last syllable: double the 'n' - begin → beginning.",
  },
  {
    options: ['prefered', 'preferred', 'preffered', 'prefferred'],
    answerIndex: 1,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'prefer',
    rule: "Stress on final syllable: double the 'r' - prefer → preferred.",
  },
  {
    options: ['committed', 'comitted', 'commited', 'comited'],
    answerIndex: 0,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'commit',
    rule: "Stressed final syllable: double 't' (and keep both 'm's) - commit → committed.",
  },
  {
    options: ['traveling', 'travelling', 'travaling', 'travling'],
    answerIndex: 1,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'travel',
    rule: "UK English doubles the 'l' even when unstressed: travel → travelling.",
  },
  {
    options: ['gardenning', 'gardening', 'gardning', 'gardining'],
    answerIndex: 1,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'garden',
    rule: 'Stress is NOT on the last syllable, so do not double: garden → gardening.',
  },
  {
    prompt: 'refer + -ed',
    options: ['refered', 'referred', 'reffered', 'refferred'],
    answerIndex: 1,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'refer',
  },
  {
    prompt: 'commit + -ment',
    options: ['commitment', 'comitment', 'committment', 'commitmant'],
    answerIndex: 0,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'commit',
  },
  {
    prompt: 'admit + -ance',
    options: ['admittance', 'admittence', 'addmittance', 'admitance'],
    answerIndex: 0,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'admit',
  },
  {
    prompt: 'visit + -ed',
    options: ['visitid', 'visitted', 'visited', 'vissited'],
    answerIndex: 2,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'visit',
  },
  {
    prompt: 'happen + -ed',
    options: ['happened', 'happend', 'hapened', 'happenned'],
    answerIndex: 0,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'happen',
  },
  {
    prompt: 'target + -ed',
    options: ['targeted', 'targitted', 'targited', 'targetted'],
    answerIndex: 0,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'target',
  },
  {
    prompt: 'forget + -able',
    options: ['forgettable', 'forgettible', 'forgetable', 'forgetible'],
    answerIndex: 0,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'forget',
  },
  {
    prompt: 'control + -able',
    options: ['controlible', 'controllible', 'controllable', 'controlable'],
    answerIndex: 2,
    tier: 2,
    pattern: 'consonant doubling',
    family: 'control',
  },
  {
    prompt: 'occur + -ence',
    options: ['occurrence', 'ocurrence', 'occurence', 'occurrance'],
    answerIndex: 0,
    tier: 3,
    pattern: 'consonant doubling',
    family: 'occur',
  },
  {
    prompt: 'prefer + -ence',
    options: ['prefference', 'preferance', 'preference', 'preferrence'],
    answerIndex: 2,
    tier: 3,
    pattern: 'consonant doubling',
    family: 'prefer',
  },
  {
    sentence: 'He was lifting the latch: a sudden thought ___ to me.',
    source: 'Jane Eyre, Chapter 33',
    options: ['occurred', 'ocurred', 'ocured', 'occured'],
    answerIndex: 0,
    tier: 3,
    pattern: 'consonant doubling',
    family: 'occur',
  },
  // silent e
  {
    options: ['excitement', 'exitement', 'excitemant', 'excitment'],
    answerIndex: 0,
    tier: 1,
    pattern: 'silent e',
    family: 'excite',
  },
  {
    options: ['noticable', 'noticeable', 'noticible', 'notisable'],
    answerIndex: 1,
    tier: 2,
    pattern: 'silent e',
    family: 'notice',
    rule: "Keep the 'e' after soft 'c' to keep it soft: notice → noticeable.",
  },
  {
    options: ['courageous', 'couragous', 'curageous', 'courageus'],
    answerIndex: 0,
    tier: 2,
    pattern: 'silent e',
    family: 'courage',
    rule: "Keep the 'e' after 'g' to keep it soft: courage → courageous.",
  },
  {
    options: ['arguement', 'argument', 'arguemant', 'argumant'],
    answerIndex: 1,
    tier: 2,
    pattern: 'silent e',
    family: 'argue',
    rule: "Exception: drop the 'e' - argue → argument.",
  },
  {
    options: ['truely', 'truly', 'trully', 'truley'],
    answerIndex: 1,
    tier: 2,
    pattern: 'silent e',
    family: 'true',
    rule: "Exception: drop the 'e' - true → truly.",
  },
  {
    options: ['aweful', 'awfull', 'orful', 'awful'],
    answerIndex: 3,
    tier: 2,
    pattern: 'silent e',
    family: 'awe',
  },
  {
    options: ['wholley', 'wholey', 'wholly', 'wholy'],
    answerIndex: 2,
    tier: 2,
    pattern: 'silent e',
    family: 'whole',
  },
  {
    prompt: 'desire + -able',
    options: ['desirable', 'dezirable', 'desireable', 'desirible'],
    answerIndex: 0,
    tier: 2,
    pattern: 'silent e',
    family: 'desire',
  },
  {
    prompt: 'value + -able',
    options: ['valuble', 'valueable', 'valuible', 'valuable'],
    answerIndex: 3,
    tier: 2,
    pattern: 'silent e',
    family: 'value',
  },
  {
    prompt: 'change + -able',
    options: ['chaingeable', 'changeable', 'changible', 'changable'],
    answerIndex: 1,
    tier: 2,
    pattern: 'silent e',
    family: 'change',
  },
  {
    prompt: 'noise + -y',
    options: ['noizy', 'noysy', 'noisey', 'noisy'],
    answerIndex: 3,
    tier: 2,
    pattern: 'silent e',
    family: 'noise',
  },
  {
    prompt: 'outrage + -ous',
    options: ['outragous', 'outrageous', 'outragious', 'outrageus'],
    answerIndex: 1,
    tier: 2,
    pattern: 'silent e',
    family: 'outrage',
  },
  {
    prompt: 'manage + -able',
    options: ['manageable', 'managable', 'manageble', 'managible'],
    answerIndex: 0,
    tier: 2,
    pattern: 'silent e',
    family: 'manage',
  },
  {
    prompt: 'advantage + -ous',
    options: ['advantagious', 'advantagous', 'advantageous', 'advantageus'],
    answerIndex: 2,
    tier: 3,
    pattern: 'silent e',
    family: 'advantage',
  },
  {
    sentence: 'I love my cousin tenderly and ___.',
    source: 'Frankenstein, Chapter 18 (Victor)',
    options: ['sincerly', 'sincerley', 'sinserely', 'sincerely'],
    answerIndex: 3,
    tier: 3,
    pattern: 'silent e',
    family: 'sincere',
  },
  // y to i
  {
    options: ['happyness', 'happiness', 'hapiness', 'happines'],
    answerIndex: 1,
    tier: 1,
    pattern: 'y to i',
    family: 'happy',
    rule: "Consonant + 'y' → change 'y' to 'i': happy → happiness.",
  },
  {
    options: ['beautyful', 'beautiful', 'beutiful', 'beautifull'],
    answerIndex: 1,
    tier: 1,
    pattern: 'y to i',
    family: 'beauty',
    rule: "Change 'y' to 'i' before a suffix: beauty → beautiful.",
  },
  {
    options: ['business', 'busness', 'bussiness', 'buisness'],
    answerIndex: 0,
    tier: 1,
    pattern: 'y to i',
    family: 'busy',
  },
  {
    options: ['loneliness', 'lonelyness', 'lonliness', 'lonelines'],
    answerIndex: 0,
    tier: 1,
    pattern: 'y to i',
    family: 'lonely',
  },
  {
    prompt: 'hurry + -ed',
    options: ['hurrid', 'hurryed', 'huried', 'hurried'],
    answerIndex: 3,
    tier: 2,
    pattern: 'y to i',
    family: 'hurry',
  },
  {
    prompt: 'carry + -age',
    options: ['carriage', 'carrige', 'cariage', 'carryage'],
    answerIndex: 0,
    tier: 2,
    pattern: 'y to i',
    family: 'carry',
  },
  {
    prompt: 'pity + -ful',
    options: ['pitiful', 'pitifull', 'pittiful', 'pityful'],
    answerIndex: 0,
    tier: 2,
    pattern: 'y to i',
    family: 'pity',
  },
  {
    prompt: 'mercy + -less',
    options: ['mercyless', 'mercilless', 'merciless', 'mersiless'],
    answerIndex: 2,
    tier: 2,
    pattern: 'y to i',
    family: 'mercy',
  },
  {
    prompt: 'employ + -er',
    options: ['employer', 'imployer', 'emploier', 'employor'],
    answerIndex: 0,
    tier: 2,
    pattern: 'y to i',
    family: 'employ',
  },
  {
    prompt: 'journey + -s',
    options: ['journies', 'journeys', 'journeyes', 'jurneys'],
    answerIndex: 1,
    tier: 2,
    pattern: 'y to i',
    family: 'journey',
  },
  // tion sion cian
  {
    options: ['decision', 'desicion', 'desision', 'decission'],
    answerIndex: 0,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'decide',
    rule: 'The /zh/ sound at the end is spelt -sion: decide → decision.',
  },
  {
    options: ['expansion', 'expantion', 'expancion', 'expanssion'],
    answerIndex: 0,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'expand',
    rule: 'A verb ending in -d often takes -sion: expand → expansion.',
  },
  {
    options: ['discussion', 'discusion', 'discustion', 'discution'],
    answerIndex: 0,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'discuss',
    rule: 'Verbs ending in -ss take -ion: discuss → discussion.',
  },
  {
    options: ['musician', 'musicion', 'musition', 'musitian'],
    answerIndex: 0,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'music',
    rule: 'A person/job often takes -cian: music → musician.',
  },
  {
    options: ['electrision', 'electricion', 'electrician', 'electritian'],
    answerIndex: 2,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'electric',
    rule: 'Job ending uses -cian: electric → electrician.',
  },
  {
    options: ['posession', 'possesion', 'possession', 'posesion'],
    answerIndex: 2,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'possess',
    rule: "Double 's' twice, then -ion: possess → possession.",
  },
  {
    options: ['attension', 'attention', 'attencion', 'atention'],
    answerIndex: 1,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'attend',
    rule: 'This noun takes -tion, not -sion: attend → attention (compare expand → expansion).',
  },
  {
    options: ['telivision', 'television', 'televistion', 'televicion'],
    answerIndex: 1,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'vision',
    rule: 'The /zh/ sound at the end is spelt -sion: television.',
  },
  {
    options: ['permission', 'permision', 'permittion', 'premission'],
    answerIndex: 0,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'permit',
  },
  {
    options: ['confution', 'confushion', 'confussion', 'confusion'],
    answerIndex: 3,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'confuse',
  },
  {
    options: ['politition', 'politicion', 'polititian', 'politician'],
    answerIndex: 3,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'politic',
  },
  {
    options: ['competetion', 'compitition', 'competision', 'competition'],
    answerIndex: 3,
    tier: 1,
    pattern: 'tion sion cian',
    family: 'compete',
  },
  {
    options: ['suspicion', 'suspition', 'suspiscion', 'suspision'],
    answerIndex: 0,
    tier: 2,
    pattern: 'tion sion cian',
    family: 'suspect',
  },
  // ves plurals
  {
    options: ['theifs', 'thiefs', 'thieves', 'thievs'],
    answerIndex: 2,
    tier: 1,
    pattern: 'ves plurals',
    family: 'thief',
    rule: '-f → -ves: thief → thieves.',
  },
  {
    options: ['loafves', 'loavs', 'loaves', 'loafes'],
    answerIndex: 2,
    tier: 1,
    pattern: 'ves plurals',
    family: 'loaf',
  },
  {
    options: ['cheifs', 'chiefs', 'chieves', 'chiefes'],
    answerIndex: 1,
    tier: 2,
    pattern: 'ves plurals',
    family: 'chief',
    rule: "Exception: 'chief' just adds 's' - chiefs.",
  },
  {
    options: ['clives', 'cliffs', 'clifs', 'cliffes'],
    answerIndex: 1,
    tier: 2,
    pattern: 'ves plurals',
    family: 'cliff',
  },
  {
    sentence: 'People of many faiths hold strong religious ___.',
    options: ['beliefs', 'beliefes', 'believes', 'beleifs'],
    answerIndex: 0,
    tier: 2,
    pattern: 'ves plurals',
    family: 'believe',
  },
  // UK spelling
  {
    options: ['color', 'colour', 'coler', 'colur'],
    answerIndex: 1,
    tier: 1,
    pattern: 'UK spelling',
    family: 'colour',
    rule: "UK English keeps the 'u': colour, not 'color'.",
  },
  {
    options: ['favorite', 'favourite', 'faverite', 'favourit'],
    answerIndex: 1,
    tier: 1,
    pattern: 'UK spelling',
    family: 'favour',
    rule: "UK English keeps the 'u': favourite.",
  },
  {
    options: ['centre', 'center', 'senter', 'sentre'],
    answerIndex: 0,
    tier: 1,
    pattern: 'UK spelling',
    family: 'centre',
    rule: "UK English uses -re: centre, not 'center'.",
  },
  {
    options: [
      'a licence to drive',
      'a license to drive',
      'a licanse to drive',
      'a lisence to drive',
    ],
    answerIndex: 0,
    tier: 1,
    pattern: 'UK spelling',
    family: 'licence',
    rule: "Noun = 'licence' with a 'c' in UK English.",
  },
  {
    options: ['behaviour', 'behavour', 'behavior', 'behaveour'],
    answerIndex: 0,
    tier: 1,
    pattern: 'UK spelling',
    family: 'behave',
  },
  {
    options: ['theater', 'theatre', 'theetre', 'theatur'],
    answerIndex: 1,
    tier: 1,
    pattern: 'UK spelling',
    family: 'theatre',
  },
  {
    options: ['deffence', 'defance', 'defence', 'defense'],
    answerIndex: 2,
    tier: 1,
    pattern: 'UK spelling',
    family: 'defend',
  },
  {
    options: ['catalogue', 'catalog', 'cataloge', 'catologue'],
    answerIndex: 0,
    tier: 1,
    pattern: 'UK spelling',
    family: 'catalogue',
  },
  {
    options: ['football practise', 'football practice', 'football practece', 'football practiss'],
    answerIndex: 1,
    tier: 2,
    pattern: 'UK spelling',
    family: 'practise',
    rule: "Noun = 'practice' with a 'c' (the verb is 'practise').",
  },
  {
    options: ['practice the song', 'practise the song', 'practece the song', 'practiss the song'],
    answerIndex: 1,
    tier: 2,
    pattern: 'UK spelling',
    family: 'practise',
    rule: "Verb = 'practise' with an 's' (the noun is 'practice').",
  },
  {
    options: ['analyze', 'annalyse', 'analyse', 'analise'],
    answerIndex: 2,
    tier: 2,
    pattern: 'UK spelling',
    family: 'analyse',
  },
  {
    options: ['pajamas', 'pijamas', 'pyjamas', 'pyjammas'],
    answerIndex: 2,
    tier: 2,
    pattern: 'UK spelling',
    family: 'pyjamas',
  },
  {
    options: ['aluminuim', 'aluminium', 'aluminum', 'alluminium'],
    answerIndex: 1,
    tier: 2,
    pattern: 'UK spelling',
    family: 'aluminium',
  },
  {
    options: ['manoeuver', 'manoeuvre', 'manouvre', 'maneuver'],
    answerIndex: 1,
    tier: 2,
    pattern: 'UK spelling',
    family: 'manoeuvre',
  },
  {
    prompt: 'cancel + -ed',
    options: ['canceled', 'canselled', 'cancelled', 'cancled'],
    answerIndex: 2,
    tier: 2,
    pattern: 'UK spelling',
    family: 'cancel',
  },
  {
    prompt: 'humour + -ous',
    options: ['humorous', 'humourous', 'humerous', 'humorus'],
    answerIndex: 0,
    tier: 2,
    pattern: 'UK spelling',
    family: 'humour',
  },
  {
    prompt: 'model + -ing',
    options: ['moddeling', 'modelling', 'modeling', 'modaling'],
    answerIndex: 1,
    tier: 2,
    pattern: 'UK spelling',
    family: 'model',
  },
  {
    prompt: 'skill + -ful',
    options: ['skillfull', 'skilful', 'skilfull', 'skillful'],
    answerIndex: 1,
    tier: 2,
    pattern: 'UK spelling',
    family: 'skill',
  },
  {
    prompt: 'wool + -en',
    options: ['woolen', 'woolin', 'woollen', 'wollen'],
    answerIndex: 2,
    tier: 2,
    pattern: 'UK spelling',
    family: 'wool',
  },
  {
    prompt: 'fulfil + -ment',
    options: ['fulfilment', 'fulfillment', 'fullfilment', 'fulfilmant'],
    answerIndex: 0,
    tier: 3,
    pattern: 'UK spelling',
    family: 'fulfil',
  },
  {
    prompt: 'jewel + -ery',
    options: ['jewellery', 'jewelry', 'jewelery', 'jewlery'],
    answerIndex: 0,
    tier: 3,
    pattern: 'UK spelling',
    family: 'jewel',
  },
  // double letters
  {
    options: ['tomorow', 'tommorow', 'tomorrow', 'tommorrow'],
    answerIndex: 2,
    tier: 1,
    pattern: 'double letters',
    family: 'tomorrow',
  },
  {
    options: ['address', 'adres', 'adress', 'addres'],
    answerIndex: 0,
    tier: 1,
    pattern: 'double letters',
    family: 'address',
  },
  {
    options: ['acomodation', 'acommodation', 'accomodation', 'accommodation'],
    answerIndex: 3,
    tier: 2,
    pattern: 'double letters',
    family: 'accommodate',
  },
  {
    options: ['recomend', 'reccommend', 'recommend', 'reccomend'],
    answerIndex: 2,
    tier: 2,
    pattern: 'double letters',
    family: 'recommend',
  },
  {
    sentence: '“Is it ___ to change my frock?”',
    source: 'Jane Eyre, Chapter 13',
    options: ['necessary', 'neccesary', 'necesary', 'neccessary'],
    answerIndex: 0,
    tier: 3,
    pattern: 'double letters',
    family: 'necessary',
  },
  {
    sentence: 'I felt a little ___.',
    source: 'Jane Eyre, Chapter 37',
    options: ['embarassed', 'embarrased', 'embarased', 'embarrassed'],
    answerIndex: 3,
    tier: 3,
    pattern: 'double letters',
    family: 'embarrass',
  },
  {
    sentence: 'He was especially ___ with the sheep.',
    source: 'Animal Farm, Chapter 5',
    options: ['sucessful', 'succesful', 'successfull', 'successful'],
    answerIndex: 3,
    tier: 3,
    pattern: 'double letters',
    family: 'success',
  },
  {
    sentence: 'I will not be ___.',
    source: 'Pride and Prejudice, Chapter 56 (Lady Catherine)',
    options: ['interupted', 'intterupted', 'interrupted', 'interruped'],
    answerIndex: 2,
    tier: 3,
    pattern: 'double letters',
    family: 'interrupt',
    shares: ['prejudice'],
  },
  {
    sentence: 'But I suppose you had no ___.',
    source: 'Pride and Prejudice, Chapter 29 (Lady Catherine)',
    options: ['opportunity', 'oppurtunity', 'oportunity', 'opportunaty'],
    answerIndex: 0,
    tier: 3,
    pattern: 'double letters',
    family: 'opportunity',
    shares: ['prejudice'],
  },
  {
    sentence: 'I see no ___ for that.',
    source: 'Pride and Prejudice, Chapter 1 (Mr Bennet)',
    options: ['occasion', 'ocasion', 'ocassion', 'occassion'],
    answerIndex: 0,
    tier: 3,
    pattern: 'double letters',
    family: 'occasion',
    shares: ['prejudice'],
  },
  {
    sentence: 'Say whatever your memory suggests is true; but add nothing and ___ nothing.',
    source: 'Jane Eyre, Chapter 8 (Miss Temple)',
    options: ['exaggerate', 'exaggarate', 'exagerate', 'exagerrate'],
    answerIndex: 0,
    tier: 3,
    pattern: 'double letters',
    family: 'exaggerate',
    shares: ['true'],
  },
  {
    sentence: '“Where do you see the ___?” he asked suddenly.',
    source: 'Jane Eyre, Chapter 23',
    options: ['neccessity', 'necessity', 'necesity', 'neccesity'],
    answerIndex: 1,
    tier: 3,
    pattern: 'double letters',
    family: 'necessary',
  },
  {
    sentence: 'They had never kept to the main road if a ___ side-street would serve their turn.',
    source: 'The Sign of Four, Chapter 7',
    options: ['paralel', 'parallel', 'parrallel', 'paralell'],
    answerIndex: 1,
    tier: 3,
    pattern: 'double letters',
    family: 'parallel',
  },
  {
    sentence: 'Yes, a violent ___ was in progress.',
    source: 'Animal Farm, Chapter 10',
    options: ['quorrel', 'quarel', 'quarrell', 'quarrel'],
    answerIndex: 3,
    tier: 3,
    pattern: 'double letters',
    family: 'quarrel',
  },
  // silent letters
  {
    options: ['Wednsday', 'Wensday', 'Wednesday', 'Wendesday'],
    answerIndex: 2,
    tier: 1,
    pattern: 'silent letters',
    family: 'wednesday',
  },
  {
    options: ['Febrary', 'Feburary', 'Febuary', 'February'],
    answerIndex: 3,
    tier: 1,
    pattern: 'silent letters',
    family: 'february',
  },
  {
    options: ['government', 'goverment', 'govenment', 'governmant'],
    answerIndex: 0,
    tier: 1,
    pattern: 'silent letters',
    family: 'govern',
  },
  {
    options: ['enviroment', 'enviornment', 'environment', 'envirement'],
    answerIndex: 2,
    tier: 1,
    pattern: 'silent letters',
    family: 'environment',
  },
  {
    options: ['scisors', 'sissors', 'scissors', 'scissers'],
    answerIndex: 2,
    tier: 1,
    pattern: 'silent letters',
    family: 'scissors',
  },
  {
    options: ['column', 'colomn', 'collumn', 'colum'],
    answerIndex: 0,
    tier: 1,
    pattern: 'silent letters',
    family: 'column',
  },
  {
    options: ['muscel', 'musscle', 'muscle', 'mussle'],
    answerIndex: 2,
    tier: 1,
    pattern: 'silent letters',
    family: 'muscle',
  },
  {
    options: ['subtel', 'subtle', 'sutle', 'suttle'],
    answerIndex: 1,
    tier: 2,
    pattern: 'silent letters',
    family: 'subtle',
  },
  {
    sentence: 'Once again the animals were ___ of a vague uneasiness.',
    source: 'Animal Farm, Chapter 6',
    options: ['consious', 'concious', 'conscous', 'conscious'],
    answerIndex: 3,
    tier: 3,
    pattern: 'silent letters',
    family: 'conscious',
  },
  {
    sentence: 'I looked at him with ___.',
    source: 'Jane Eyre, Chapter 34',
    options: ['surprise', 'suprise', 'suprize', 'surprize'],
    answerIndex: 0,
    tier: 3,
    pattern: 'silent letters',
    family: 'surprise',
  },
  {
    sentence: 'I ardently desired the acquisition of ___.',
    source: 'Frankenstein, Chapter 3 (Victor)',
    options: ['knowlege', 'nowledge', 'knoledge', 'knowledge'],
    answerIndex: 3,
    tier: 3,
    pattern: 'silent letters',
    family: 'know',
    shares: ['desire'],
  },
  {
    sentence: 'Does he know his real ___?',
    source: 'Pride and Prejudice, Chapter 47',
    options: ['charecter', 'caracter', 'character', 'charactor'],
    answerIndex: 2,
    tier: 3,
    pattern: 'silent letters',
    family: 'character',
    shares: ['prejudice', 'know'],
  },
  {
    sentence: 'If I ___ them, that is enough for you.',
    source: 'The Sign of Four, Chapter 5 (Thaddeus Sholto)',
    options: ['garantee', 'guarentee', 'guarantee', 'gaurantee'],
    answerIndex: 2,
    tier: 3,
    pattern: 'silent letters',
    family: 'guarantee',
  },
  {
    sentence: 'Come as soon as you can on the ___ of this.',
    source: 'Pride and Prejudice, Chapter 7',
    options: ['recipt', 'reciept', 'receipt', 'receit'],
    answerIndex: 2,
    tier: 3,
    pattern: 'silent letters',
    family: 'receive',
    shares: ['prejudice'],
  },
  {
    sentence: 'And what meaning is that in their ___ depth?',
    source: 'Jane Eyre, Chapter 13 (Mr Rochester)',
    options: ['solemn', 'sollemn', 'solem', 'solumn'],
    answerIndex: 0,
    tier: 3,
    pattern: 'silent letters',
    family: 'solemn',
  },
  // unstressed vowels
  {
    options: ['defenitely', 'definitely', 'definately', 'definitly'],
    answerIndex: 1,
    tier: 1,
    pattern: 'unstressed vowels',
    family: 'definite',
  },
  {
    options: ['librery', 'library', 'libary', 'libery'],
    answerIndex: 1,
    tier: 1,
    pattern: 'unstressed vowels',
    family: 'library',
  },
  {
    options: ['gramar', 'grammor', 'grammar', 'grammer'],
    answerIndex: 2,
    tier: 1,
    pattern: 'unstressed vowels',
    family: 'grammar',
  },
  {
    options: ['calandar', 'calendar', 'calander', 'callendar'],
    answerIndex: 1,
    tier: 1,
    pattern: 'unstressed vowels',
    family: 'calendar',
  },
  {
    options: ['vegetible', 'vegetable', 'vegtable', 'vegatable'],
    answerIndex: 1,
    tier: 1,
    pattern: 'unstressed vowels',
    family: 'vegetable',
  },
  {
    options: ['categery', 'catagory', 'category', 'catogory'],
    answerIndex: 2,
    tier: 2,
    pattern: 'unstressed vowels',
    family: 'category',
  },
  {
    sentence: 'I lay in that ___ building across the courtyard.',
    source: 'Great Expectations, Chapter 38',
    options: ['seperete', 'separate', 'separete', 'seperate'],
    answerIndex: 1,
    tier: 3,
    pattern: 'unstressed vowels',
    family: 'separate',
  },
  {
    sentence: 'We must not make him ___.',
    source: 'Pride and Prejudice, Chapter 40',
    options: ['desperate', 'desprate', 'desparate', 'desperite'],
    answerIndex: 0,
    tier: 3,
    pattern: 'unstressed vowels',
    family: 'desperate',
    shares: ['prejudice'],
  },
  {
    sentence: 'But I knew I should ___ you at last.',
    source: 'Pride and Prejudice, Chapter 2 (Mrs Bennet)',
    options: ['persuaid', 'persuade', 'pursuade', 'presuade'],
    answerIndex: 1,
    tier: 3,
    pattern: 'unstressed vowels',
    family: 'persuade',
    shares: ['prejudice'],
  },
  {
    sentence:
      'I have good dispositions; my life has been hitherto harmless, and in some degree beneficial; but a fatal ___ clouds their eyes, and where they ought to see a feeling and kind friend, they behold only a detestable monster.',
    source: 'Frankenstein, Chapter 15 (the Creature)',
    options: ['prejedice', 'prejudise', 'prejudice', 'predjudice'],
    answerIndex: 2,
    tier: 3,
    pattern: 'unstressed vowels',
    family: 'prejudice',
  },
  {
    sentence: 'Her ___ however was unexpectedly relieved.',
    source: 'Pride and Prejudice, Chapter 16',
    options: ['curiocity', 'curiosity', 'curiousity', 'curiosaty'],
    answerIndex: 1,
    tier: 3,
    pattern: 'unstressed vowels',
    family: 'curious',
    shares: ['relief', 'prejudice'],
  },
  {
    sentence: '“Well, Jane, do you know me?” asked the ___ voice.',
    source: 'Jane Eyre, Chapter 19',
    options: ['familiar', 'familar', 'famillar', 'familier'],
    answerIndex: 0,
    tier: 3,
    pattern: 'unstressed vowels',
    family: 'familiar',
    shares: ['know'],
  },
  {
    sentence: 'There were articles in most of the papers upon the Norwood ___.',
    source: 'The Sign of Four, Chapter 9',
    options: ['tragidy', 'tragady', 'tragedy', 'tradgedy'],
    answerIndex: 2,
    tier: 3,
    pattern: 'unstressed vowels',
    family: 'tragedy',
  },
  // able ible
  {
    options: ['responsable', 'responsible', 'responcible', 'responsibel'],
    answerIndex: 1,
    tier: 2,
    pattern: 'able ible',
    family: 'respond',
  },
  {
    options: ['vissible', 'visible', 'visibel', 'visable'],
    answerIndex: 1,
    tier: 2,
    pattern: 'able ible',
    family: 'visible',
  },
  {
    options: ['terribel', 'terible', 'terrable', 'terrible'],
    answerIndex: 3,
    tier: 2,
    pattern: 'able ible',
    family: 'terrible',
  },
  {
    options: ['comfterble', 'comftable', 'comfortible', 'comfortable'],
    answerIndex: 3,
    tier: 2,
    pattern: 'able ible',
    family: 'comfort',
  },
  {
    options: ['avaliable', 'availible', 'available', 'availabel'],
    answerIndex: 2,
    tier: 2,
    pattern: 'able ible',
    family: 'avail',
  },
  {
    options: ['inevitible', 'inevitabel', 'inevitable', 'inevatable'],
    answerIndex: 2,
    tier: 2,
    pattern: 'able ible',
    family: 'inevitable',
  },
  {
    options: ['acessible', 'accessible', 'accesible', 'accessable'],
    answerIndex: 1,
    tier: 2,
    pattern: 'able ible',
    family: 'access',
  },
  // ance ence
  {
    options: ['experiense', 'experiance', 'experience', 'expirience'],
    answerIndex: 2,
    tier: 2,
    pattern: 'ance ence',
    family: 'experience',
  },
  {
    options: ['patiance', 'patience', 'pacience', 'paitence'],
    answerIndex: 1,
    tier: 2,
    pattern: 'ance ence',
    family: 'patient',
  },
  {
    options: ['independance', 'indipendence', 'independense', 'independence'],
    answerIndex: 3,
    tier: 2,
    pattern: 'ance ence',
    family: 'depend',
  },
  {
    sentence: 'But I abhor the dull routine of ___.',
    source: 'The Sign of Four, Chapter 1 (Holmes)',
    options: ['existence', 'exsistence', 'existense', 'existance'],
    answerIndex: 0,
    tier: 3,
    pattern: 'ance ence',
    family: 'exist',
  },
  {
    sentence: 'I am a stranger, without ___ in this place.',
    source: 'Jane Eyre, Chapter 28 (Jane)',
    options: ['acquantance', 'acquaintence', 'aquaintance', 'acquaintance'],
    answerIndex: 3,
    tier: 3,
    pattern: 'ance ence',
    family: 'acquaint',
  },
  {
    sentence: 'The ___ of Justine was calm.',
    source: 'Frankenstein, Chapter 8',
    options: ['apperance', 'appearance', 'appearanse', 'appearence'],
    answerIndex: 1,
    tier: 3,
    pattern: 'ance ence',
    family: 'appear',
  },
  {
    sentence: 'What is the chief ___?',
    source: 'The Sign of Four, Chapter 7 (Holmes)',
    options: ['difference', 'diference', 'differance', 'diffrence'],
    answerIndex: 0,
    tier: 3,
    pattern: 'ance ence',
    family: 'differ',
    shares: ['chief'],
  },
  // ant ent
  {
    options: ['asistant', 'assisstant', 'assistant', 'assistent'],
    answerIndex: 2,
    tier: 2,
    pattern: 'ant ent',
    family: 'assist',
  },
  {
    options: ['pleasent', 'plesant', 'pleasant', 'pleasint'],
    answerIndex: 2,
    tier: 2,
    pattern: 'ant ent',
    family: 'please',
  },
  {
    options: ['conveniant', 'convinient', 'convenient', 'convenent'],
    answerIndex: 2,
    tier: 2,
    pattern: 'ant ent',
    family: 'convenient',
  },
  {
    options: ['relivant', 'relevent', 'relevant', 'revelant'],
    answerIndex: 2,
    tier: 2,
    pattern: 'ant ent',
    family: 'relevant',
  },
  {
    sentence: 'Are you an ___ woman?',
    source: 'Jane Eyre, Chapter 37 (Mr Rochester)',
    options: ['indipendent', 'independint', 'independent', 'independant'],
    answerIndex: 2,
    tier: 3,
    pattern: 'ant ent',
    family: 'depend',
  },
  {
    sentence:
      'Still, as I ascended higher, the valley assumed a more ___ and astonishing character.',
    source: 'Frankenstein, Chapter 9',
    options: ['magnifficent', 'magnificant', 'magnifisent', 'magnificent'],
    answerIndex: 3,
    tier: 3,
    pattern: 'ant ent',
    family: 'magnificent',
    shares: ['character'],
  },
  {
    sentence: 'Natural affection only, of all the sentiments, has ___ power over me.',
    source: 'Jane Eyre, Chapter 32',
    options: ['permenant', 'pernament', 'permanant', 'permanent'],
    answerIndex: 3,
    tier: 3,
    pattern: 'ant ent',
    family: 'permanent',
    shares: ['nature'],
  },
  // ary ery ory
  {
    options: ['temperary', 'tempory', 'temporery', 'temporary'],
    answerIndex: 3,
    tier: 2,
    pattern: 'ary ery ory',
    family: 'temporary',
  },
  {
    options: ['cemetry', 'semetery', 'cemetary', 'cemetery'],
    answerIndex: 3,
    tier: 2,
    pattern: 'ary ery ory',
    family: 'cemetery',
  },
  {
    options: ['secretery', 'secretary', 'secratary', 'secertary'],
    answerIndex: 1,
    tier: 2,
    pattern: 'ary ery ory',
    family: 'secret',
  },
  {
    sentence: 'No feature in the scene was ___, but all was pleasing.',
    source: 'Jane Eyre, Chapter 11',
    options: ['extrordinary', 'extraordinary', 'extraordinery', 'extraordinairy'],
    answerIndex: 1,
    tier: 3,
    pattern: 'ary ery ory',
    family: 'extraordinary',
    shares: ['please'],
  },
  // cious tious cial tial
  {
    options: ['delitious', 'delicous', 'delisious', 'delicious'],
    answerIndex: 3,
    tier: 2,
    pattern: 'cious tious cial tial',
    family: 'delicious',
  },
  {
    options: ['ambicious', 'ambishous', 'ambitous', 'ambitious'],
    answerIndex: 3,
    tier: 2,
    pattern: 'cious tious cial tial',
    family: 'ambition',
  },
  {
    options: ['offitial', 'official', 'oficial', 'offical'],
    answerIndex: 1,
    tier: 2,
    pattern: 'cious tious cial tial',
    family: 'office',
  },
  {
    options: ['artifitial', 'artificial', 'artifishal', 'artifical'],
    answerIndex: 1,
    tier: 2,
    pattern: 'cious tious cial tial',
    family: 'artificial',
  },
  {
    sentence: 'But even human sympathies were not ___ to satisfy his eager mind.',
    source: 'Frankenstein, Chapter 18',
    options: ['sufficent', 'sufficient', 'suffiscient', 'suficient'],
    answerIndex: 1,
    tier: 3,
    pattern: 'cious tious cial tial',
    family: 'sufficient',
    shares: ['satisfy'],
  },
  // prefixes
  {
    prompt: 'dis- + satisfied',
    options: ['disatisfied', 'disatisfyed', 'dissatisfyed', 'dissatisfied'],
    answerIndex: 3,
    tier: 2,
    pattern: 'prefixes',
    family: 'satisfy',
  },
  {
    prompt: 'mis- + spell',
    options: ['misspel', 'mispell', 'mispel', 'misspell'],
    answerIndex: 3,
    tier: 2,
    pattern: 'prefixes',
    family: 'spell',
  },
  {
    prompt: 'un- + necessary',
    options: ['unneccessary', 'unecessary', 'unnecesary', 'unnecessary'],
    answerIndex: 3,
    tier: 2,
    pattern: 'prefixes',
    family: 'necessary',
  },
  {
    prompt: 'ir- + regular',
    options: ['irregular', 'iregular', 'irregulor', 'irreguler'],
    answerIndex: 0,
    tier: 2,
    pattern: 'prefixes',
    family: 'regular',
  },
  {
    prompt: 'il- + legal',
    options: ['illegle', 'ilegle', 'ilegal', 'illegal'],
    answerIndex: 3,
    tier: 2,
    pattern: 'prefixes',
    family: 'legal',
  },
  {
    prompt: 'im- + mature',
    options: ['inmature', 'immachure', 'immature', 'imature'],
    answerIndex: 2,
    tier: 2,
    pattern: 'prefixes',
    family: 'mature',
  },
  {
    prompt: 'un- + natural',
    options: ['unnatrual', 'unatural', 'unnaturel', 'unnatural'],
    answerIndex: 3,
    tier: 2,
    pattern: 'prefixes',
    family: 'nature',
  },
  {
    sentence: 'I confess that I am surprised and ___.',
    source: 'The Sign of Four, Chapter 9 (Holmes)',
    options: ['disapointed', 'disappointed', 'dissapointed', 'dissappointed'],
    answerIndex: 1,
    tier: 3,
    pattern: 'prefixes',
    family: 'disappoint',
    shares: ['surprise'],
  },
  {
    sentence: 'Three days later Mollie ___.',
    source: 'Animal Farm, Chapter 5',
    options: ['dissappeared', 'disapeared', 'dissapeared', 'disappeared'],
    answerIndex: 3,
    tier: 3,
    pattern: 'prefixes',
    family: 'disappear',
  },
  // ful and ly
  {
    options: ['greatful', 'graitful', 'gratefull', 'grateful'],
    answerIndex: 3,
    tier: 1,
    pattern: 'ful and ly',
    family: 'grateful',
  },
  {
    options: ['accidentally', 'accidentlly', 'accidentaly', 'accidentially'],
    answerIndex: 0,
    tier: 2,
    pattern: 'ful and ly',
    family: 'accident',
  },
  {
    options: ['basicly', 'basically', 'basiclly', 'basicaly'],
    answerIndex: 1,
    tier: 2,
    pattern: 'ful and ly',
    family: 'basic',
  },
  // words of analysis
  {
    sentence: "A ___ compares one thing to another using 'like' or 'as'.",
    options: ['simile', 'similee', 'similie', 'simily'],
    answerIndex: 0,
    tier: 2,
    pattern: 'words of analysis',
    family: 'simile',
  },
  {
    sentence: "A ___ says that one thing is another, as in 'the classroom was a zoo'.",
    options: ['metapher', 'metafor', 'metaphor', 'metaphore'],
    answerIndex: 2,
    tier: 2,
    pattern: 'words of analysis',
    family: 'metaphor',
  },
  {
    sentence: 'Each ___ of the poem has four lines.',
    options: ['stanza', 'stansa', 'stanzer', 'stanser'],
    answerIndex: 0,
    tier: 2,
    pattern: 'words of analysis',
    family: 'stanza',
  },
  {
    sentence: 'The ___ is the voice that tells the story.',
    options: ['narrater', 'narratour', 'narrator', 'narator'],
    answerIndex: 2,
    tier: 2,
    pattern: 'words of analysis',
    family: 'narrate',
  },
  {
    sentence: 'Short, sharp sentences build a tense ___.',
    options: ['atmosphere', 'atmosfere', 'atmousphere', 'atmosphear'],
    answerIndex: 0,
    tier: 2,
    pattern: 'words of analysis',
    family: 'atmosphere',
    shares: ['tense'],
  },
  {
    sentence: 'The ___ rises as the footsteps come closer.',
    options: ['tension', 'tention', 'tenshion', 'tencion'],
    answerIndex: 0,
    tier: 2,
    pattern: 'words of analysis',
    family: 'tense',
  },
  {
    sentence: 'The ___ of fire runs through the whole poem.',
    options: ['imagery', 'imagry', 'immagery', 'imigery'],
    answerIndex: 0,
    tier: 2,
    pattern: 'words of analysis',
    family: 'image',
    shares: ['whole'],
  },
  {
    sentence: "A ___ speech uses evidence to change the listener's mind.",
    options: ['perswasive', 'persuasive', 'persuassive', 'pursuasive'],
    answerIndex: 1,
    tier: 2,
    pattern: 'words of analysis',
    family: 'persuade',
  },
  {
    sentence: "The writer's use of ___ in 'buzz' and 'hiss' lets the reader hear the bees.",
    options: ['onomatopoea', 'onamatopoeia', 'onomatopoeia', 'onomatopeia'],
    answerIndex: 2,
    tier: 3,
    pattern: 'words of analysis',
    family: 'onomatopoeia',
  },
  {
    sentence: 'Shakespeare gives Hamlet a ___, so the audience hears his private thoughts.',
    options: ['solilaquy', 'soliloqy', 'soliloquey', 'soliloquy'],
    answerIndex: 3,
    tier: 3,
    pattern: 'words of analysis',
    family: 'soliloquy',
  },
  {
    sentence: 'Shakespeare was a ___ as well as a poet.',
    options: ['plawright', 'playwrite', 'playwright', 'playright'],
    answerIndex: 2,
    tier: 3,
    pattern: 'words of analysis',
    family: 'playwright',
  },
  {
    sentence: "The ___ of 'light' and 'dark' in one line makes the contrast sharp.",
    options: ['juxtapostion', 'juxtiposition', 'juxtaposition', 'juxstaposition'],
    answerIndex: 2,
    tier: 3,
    pattern: 'words of analysis',
    family: 'juxtapose',
  },
  {
    sentence: 'Giving the wind human feelings is an example of ___.',
    options: ['personifacation', 'personification', 'personnification', 'personafication'],
    answerIndex: 1,
    tier: 3,
    pattern: 'words of analysis',
    family: 'person',
  },
  {
    sentence: 'The ___ of the poem is steady, like a heartbeat.',
    options: ['rythm', 'rhythem', 'rhythym', 'rhythm'],
    answerIndex: 3,
    tier: 3,
    pattern: 'words of analysis',
    family: 'rhythm',
  },
  {
    sentence: "The ___ of the word 'red' include danger and love.",
    options: ['connotations', 'connotaitions', 'conotations', 'connatations'],
    answerIndex: 0,
    tier: 3,
    pattern: 'words of analysis',
    family: 'connote',
  },
  {
    sentence: 'Pip, the ___ of Great Expectations, tells his own story.',
    options: ['protagenist', 'protagonist', 'protaganist', 'protagonest'],
    answerIndex: 1,
    tier: 3,
    pattern: 'words of analysis',
    family: 'protagonist',
  },
  {
    sentence: "A ___ question, such as 'Who would not want this?', needs no answer.",
    options: ['rhetorecal', 'rhetorical', 'retorical', 'rhetorrical'],
    answerIndex: 1,
    tier: 3,
    pattern: 'words of analysis',
    family: 'rhetoric',
  },
  {
    sentence: "The ___ of 'never' three times makes the line insistent.",
    options: ['repetition', 'repatition', 'repetetion', 'repitition'],
    answerIndex: 0,
    tier: 3,
    pattern: 'words of analysis',
    family: 'repeat',
  },
  {
    sentence: 'Early ___ of the storm hints at the trouble to come.',
    options: ['foreshadowing', 'foreshadoing', 'forshadowing', 'foreshaddowing'],
    answerIndex: 0,
    tier: 3,
    pattern: 'words of analysis',
    family: 'shadow',
  },
  {
    sentence: "The ___ 'cold fire' joins two opposite words.",
    options: ['oximoron', 'oxymoran', 'oxymoron', 'oxymorron'],
    answerIndex: 2,
    tier: 3,
    pattern: 'words of analysis',
    family: 'oxymoron',
  },
  {
    sentence: "Saying 'I have told you a million times' is ___.",
    options: ['hiperbole', 'hyperboly', 'hyperbole', 'hyperbolie'],
    answerIndex: 2,
    tier: 3,
    pattern: 'words of analysis',
    family: 'hyperbole',
  },
  {
    sentence: '___ is the repeating of a sound at the start of words close together.',
    options: ['Aliteration', 'Allitteration', 'Alliteration', 'Alliterration'],
    answerIndex: 2,
    tier: 3,
    pattern: 'words of analysis',
    family: 'alliteration',
    shares: ['repeat'],
  },
]

export const BANK: GameBank<PatternItem> = {
  slug: 'spelling-patterns',
  items: PATTERN_BANK,
  // A question is named by the four spellings it shows, in the order they are
  // written, after what it joins or the sentence it fills, where it has one.
  key: (q) =>
    q.sentence
      ? `${q.sentence} (${q.options.join(' / ')})`
      : q.prompt
        ? `${q.prompt}: ${q.options.join(' / ')}`
        : q.options.join(' / '),
  answer: (q) => q.options[q.answerIndex],
  // The same four options are always shown (their order is shuffled per
  // attempt), so they are fixed options.
  options: (q) => q.options,
  tag: (q) => q.pattern,
  tier: (q) => q.tier,
  // No two questions on one word family in a round.
  facts: (q) => [q.family, ...(q.shares ?? [])],
  deepened: '2026-10-24',
}
