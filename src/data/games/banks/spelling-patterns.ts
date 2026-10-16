import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Spelling Patterns: pick the correctly spelt word from four, then learn the
 * rule behind it. Every question asks "Which spelling is correct?", and the four
 * options are shuffled for each attempt.
 *
 * Moved out of src/app/games/spelling-patterns/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts). Each
 * question now carries `pattern`, the heading it sat under in the page's list,
 * which is the tag the account records. The old one-line `rule` is kept in the
 * data but no longer shown: the explanation after each answer covers it.
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
 */

export interface PatternItem {
  options: [string, string, string, string]
  answerIndex: 0 | 1 | 2 | 3
  rule: string
  /** The spelling pattern the question tests: the heading it sat under in the page's list. */
  pattern: string
}

export const PATTERN_BANK: PatternItem[] = [
  // ── 'i before e except after c' ──────────────────────────────────────────
  {
    pattern: 'i before e',
    options: ['recieve', 'receive', 'receeve', 'receve'],
    answerIndex: 1,
    rule: "'i' before 'e' except after 'c' - so 'ceive', not 'cieve'.",
  },
  {
    pattern: 'i before e',
    options: ['beleive', 'beleeve', 'believe', 'bilieve'],
    answerIndex: 2,
    rule: "'i' before 'e' when there is no 'c': bel-ieve.",
  },
  {
    pattern: 'i before e',
    options: ['acheive', 'achieve', 'acheeve', 'acheve'],
    answerIndex: 1,
    rule: "'i' before 'e' (no 'c' here): ach-ieve.",
  },
  {
    pattern: 'i before e',
    options: ['decieve', 'deceeve', 'deceive', 'deceve'],
    answerIndex: 2,
    rule: "After 'c', it is 'ei': dec-eive.",
  },
  {
    pattern: 'i before e',
    options: ['cieling', 'ceiling', 'ceeling', 'celing'],
    answerIndex: 1,
    rule: "After 'c', use 'ei': c-eiling.",
  },
  {
    pattern: 'i before e',
    options: ['peice', 'piece', 'peece', 'piecce'],
    answerIndex: 1,
    rule: "'i' before 'e' with no 'c': p-iece (a piece of pie).",
  },
  {
    pattern: 'i before e',
    options: ['theif', 'theef', 'thief', 'thiefe'],
    answerIndex: 2,
    rule: "'i' before 'e' when not after 'c': th-ief.",
  },
  {
    pattern: 'i before e',
    options: ['wieght', 'weight', 'weeght', 'waight'],
    answerIndex: 1,
    rule: "Exception: 'weight' uses 'ei' for the /ay/ sound.",
  },
  {
    pattern: 'i before e',
    options: ['nieghbour', 'neighbour', 'neighbor', 'naighbour'],
    answerIndex: 1,
    rule: "Exception: 'ei' for the /ay/ sound; UK keeps the 'u' in -bour.",
  },
  {
    // The fourth option used to be a second copy of 'weird'. Scoring by index
    // marked that identical spelling wrong; scoring by value would mark two
    // buttons right. Either way it is a misprint, so it is now a distractor.
    pattern: 'i before e',
    options: ['wierd', 'weird', 'weerd', 'weired'],
    answerIndex: 1,
    rule: "Exception: 'weird' is spelled 'ei' though no 'c' precedes it.",
  },
  {
    pattern: 'i before e',
    options: ['seize', 'sieze', 'seeze', 'seaze'],
    answerIndex: 0,
    rule: "Exception: 'seize' breaks the rule and uses 'ei'.",
  },
  {
    pattern: 'i before e',
    options: ['protien', 'protein', 'proteen', 'protian'],
    answerIndex: 1,
    rule: "Exception: 'protein' has 'ei' although no 'c' comes before it.",
  },

  // ── Consonant doubling (1-1-1 rule) when adding -ing / -ed ────────────────
  {
    pattern: 'consonant doubling',
    options: ['runing', 'running', 'runnning', 'runeing'],
    answerIndex: 1,
    rule: 'Short vowel + single final consonant: double it - run → running.',
  },
  {
    pattern: 'consonant doubling',
    options: ['stopd', 'stopped', 'stoppd', 'stopeed'],
    answerIndex: 1,
    rule: 'One syllable, one vowel, one consonant: double - stop → stopped.',
  },
  {
    pattern: 'consonant doubling',
    options: ['begining', 'beginning', 'beggining', 'beginnning'],
    answerIndex: 1,
    rule: "Stress on last syllable: double the 'n' - begin → beginning.",
  },
  {
    pattern: 'consonant doubling',
    options: ['plannd', 'plannned', 'planned', 'plaaned'],
    answerIndex: 2,
    rule: 'Short vowel before single consonant: double - plan → planned.',
  },
  {
    pattern: 'consonant doubling',
    options: ['swiming', 'swimming', 'swimeing', 'swimmming'],
    answerIndex: 1,
    rule: "Short vowel + single 'm': double it - swim → swimming.",
  },
  {
    pattern: 'consonant doubling',
    options: ['prefered', 'preferred', 'preffered', 'prefferred'],
    answerIndex: 1,
    rule: "Stress on final syllable: double the 'r' - prefer → preferred.",
  },
  {
    pattern: 'consonant doubling',
    options: ['committed', 'comitted', 'commited', 'comited'],
    answerIndex: 0,
    rule: "Stressed final syllable: double 't' (and keep both 'm's) - commit → committed.",
  },
  {
    pattern: 'consonant doubling',
    options: ['controled', 'controlled', 'controllled', 'controlld'],
    answerIndex: 1,
    rule: "Stress on the last syllable: double the 'l' - control → controlled.",
  },
  {
    pattern: 'consonant doubling',
    options: ['traveling', 'travelling', 'travelng', 'travellling'],
    answerIndex: 1,
    rule: "UK English doubles the 'l' even when unstressed: travel → travelling.",
  },
  {
    pattern: 'consonant doubling',
    options: ['gardenning', 'gardening', 'gardning', 'gardeneing'],
    answerIndex: 1,
    rule: 'Stress is NOT on the last syllable, so do not double: garden → gardening.',
  },

  // ── Drop the silent 'e' before a vowel suffix ────────────────────────────
  {
    pattern: 'silent e',
    options: ['makeing', 'making', 'makking', 'maing'],
    answerIndex: 1,
    rule: "Drop the silent 'e' before -ing: make → making.",
  },
  {
    pattern: 'silent e',
    options: ['hopeing', 'hoppeing', 'hoping', 'hopeng'],
    answerIndex: 2,
    rule: "Drop the 'e' before -ing: hope → hoping (not 'hopping').",
  },
  {
    pattern: 'silent e',
    options: ['writeing', 'writting', 'writing', 'wrighting'],
    answerIndex: 2,
    rule: "Drop the silent 'e' before -ing: write → writing.",
  },
  {
    pattern: 'silent e',
    options: ['usible', 'usable', 'usabel', 'useible'],
    answerIndex: 1,
    rule: "Drop the 'e' before -able: use → usable.",
  },
  {
    pattern: 'silent e',
    options: ['lovabel', 'lovable', 'lovible', 'loveble'],
    answerIndex: 1,
    rule: "Drop the silent 'e' before -able: love → lovable.",
  },
  {
    pattern: 'silent e',
    options: ['noticable', 'noticeable', 'noticeible', 'notisable'],
    answerIndex: 1,
    rule: "Keep the 'e' after soft 'c' to keep it soft: notice → noticeable.",
  },
  {
    pattern: 'silent e',
    options: ['courageous', 'couragous', 'curageous', 'courageus'],
    answerIndex: 0,
    rule: "Keep the 'e' after 'g' to keep it soft: courage → courageous.",
  },
  {
    pattern: 'silent e',
    options: ['hopful', 'hopeful', 'hopefull', 'hoppeful'],
    answerIndex: 1,
    rule: "Keep the 'e' before a consonant suffix: hope → hopeful.",
  },
  {
    pattern: 'silent e',
    options: ['arguement', 'argument', 'arguemnt', 'argumant'],
    answerIndex: 1,
    rule: "Exception: drop the 'e' - argue → argument.",
  },
  {
    pattern: 'silent e',
    options: ['truely', 'truly', 'trully', 'truley'],
    answerIndex: 1,
    rule: "Exception: drop the 'e' - true → truly.",
  },

  // ── Change 'y' to 'i' ────────────────────────────────────────────────────
  {
    pattern: 'y to i',
    options: ['happyness', 'happiness', 'hapiness', 'happieness'],
    answerIndex: 1,
    rule: "Consonant + 'y' → change 'y' to 'i': happy → happiness.",
  },
  {
    pattern: 'y to i',
    options: ['cryed', 'cryd', 'cried', 'criede'],
    answerIndex: 2,
    rule: "Change 'y' to 'i' before -ed: cry → cried.",
  },
  {
    pattern: 'y to i',
    options: ['carryed', 'carried', 'car ried', 'carriedd'],
    answerIndex: 1,
    rule: "Consonant + 'y' → 'i' before -ed: carry → carried.",
  },
  {
    pattern: 'y to i',
    options: ['babys', 'babies', 'babyies', 'babyes'],
    answerIndex: 1,
    rule: "Consonant + 'y' → 'ies' for plurals: baby → babies.",
  },
  {
    pattern: 'y to i',
    options: ['beautyful', 'beautiful', 'beutiful', 'beautifull'],
    answerIndex: 1,
    rule: "Change 'y' to 'i' before a suffix: beauty → beautiful.",
  },
  {
    pattern: 'y to i',
    options: ['studie', 'studying', 'studiing', 'studdying'],
    answerIndex: 1,
    rule: "Keep the 'y' before -ing (never 'ii'): study → studying.",
  },
  {
    pattern: 'y to i',
    options: ['playd', 'plaied', 'played', 'plaiyed'],
    answerIndex: 2,
    rule: "Vowel + 'y' → keep the 'y': play → played.",
  },
  {
    pattern: 'y to i',
    options: ['enjoyed', 'enjoied', 'enjoyd', 'enjoyyed'],
    answerIndex: 0,
    rule: "Vowel + 'y' → keep the 'y': enjoy → enjoyed.",
  },
  {
    pattern: 'y to i',
    options: ['monkies', 'monkeys', 'monkys', 'monkyies'],
    answerIndex: 1,
    rule: "Vowel + 'y' → just add 's': monkey → monkeys.",
  },

  // ── -tion / -sion / -cian endings ────────────────────────────────────────
  {
    pattern: 'tion sion cian',
    options: ['decision', 'desicion', 'decison', 'decistion'],
    answerIndex: 0,
    rule: 'The /zh/ sound at the end is spelt -sion: decide → decision.',
  },
  {
    pattern: 'tion sion cian',
    options: ['informasion', 'information', 'informationn', 'informacion'],
    answerIndex: 1,
    rule: 'Most nouns from verbs use -tion: inform → information.',
  },
  {
    pattern: 'tion sion cian',
    options: ['expansion', 'expantion', 'expancion', 'expanssion'],
    answerIndex: 0,
    rule: 'A verb ending in -d often takes -sion: expand → expansion.',
  },
  {
    pattern: 'tion sion cian',
    options: ['discussion', 'discusion', 'discustion', 'discussian'],
    answerIndex: 0,
    rule: 'Verbs ending in -ss take -ion: discuss → discussion.',
  },
  {
    pattern: 'tion sion cian',
    options: ['musician', 'musicion', 'musition', 'musitian'],
    answerIndex: 0,
    rule: 'A person/job often takes -cian: music → musician.',
  },
  {
    pattern: 'tion sion cian',
    options: ['electrision', 'electricion', 'electrician', 'electritian'],
    answerIndex: 2,
    rule: 'Job ending uses -cian: electric → electrician.',
  },
  {
    pattern: 'tion sion cian',
    options: ['posession', 'possesion', 'possession', 'posesssion'],
    answerIndex: 2,
    rule: "Double 's' twice, then -ion: possess → possession.",
  },
  {
    pattern: 'tion sion cian',
    options: ['attension', 'attention', 'attencion', 'attentcion'],
    answerIndex: 1,
    rule: 'This noun takes -tion, not -sion: attend → attention (compare expand → expansion).',
  },
  {
    pattern: 'tion sion cian',
    options: ['televsion', 'television', 'televistion', 'televicion'],
    answerIndex: 1,
    rule: 'The /zh/ sound at the end is spelt -sion: television.',
  },

  // ── Plurals: -f / -fe → -ves ─────────────────────────────────────────────
  {
    pattern: 'ves plurals',
    options: ['knifs', 'knives', 'knifves', 'knivs'],
    answerIndex: 1,
    rule: 'Words ending -fe often become -ves: knife → knives.',
  },
  {
    pattern: 'ves plurals',
    options: ['leafes', 'leeves', 'leaves', 'leavs'],
    answerIndex: 2,
    rule: 'Many -f words become -ves: leaf → leaves.',
  },
  {
    pattern: 'ves plurals',
    options: ['wifes', 'wives', 'wifves', 'wivs'],
    answerIndex: 1,
    rule: '-fe → -ves: wife → wives.',
  },
  {
    pattern: 'ves plurals',
    options: ['halves', 'halfs', 'halfes', 'halvs'],
    answerIndex: 0,
    rule: '-f → -ves: half → halves.',
  },
  {
    pattern: 'ves plurals',
    options: ['shelfs', 'shelfes', 'shelves', 'shelvs'],
    answerIndex: 2,
    rule: '-f → -ves: shelf → shelves.',
  },
  {
    pattern: 'ves plurals',
    options: ['theifs', 'thiefs', 'thieves', 'thievs'],
    answerIndex: 2,
    rule: '-f → -ves: thief → thieves.',
  },
  {
    pattern: 'ves plurals',
    options: ['rooffs', 'roofs', 'roofes', 'roovs'],
    answerIndex: 1,
    rule: "Exception: 'roof' just adds 's' - roofs.",
  },
  {
    pattern: 'ves plurals',
    options: ['cheifs', 'chiefs', 'chieves', 'chiefes'],
    answerIndex: 1,
    rule: "Exception: 'chief' just adds 's' - chiefs.",
  },

  // ── UK spelling distinctions ─────────────────────────────────────────────
  {
    pattern: 'UK spelling',
    options: ['color', 'colour', 'coler', 'colur'],
    answerIndex: 1,
    rule: "UK English keeps the 'u': colour, not 'color'.",
  },
  {
    pattern: 'UK spelling',
    options: ['favorite', 'favourite', 'faverite', 'favourit'],
    answerIndex: 1,
    rule: "UK English keeps the 'u': favourite.",
  },
  {
    pattern: 'UK spelling',
    options: ['football practise', 'football practice', 'football practece', 'football practiss'],
    answerIndex: 1,
    rule: "Noun = 'practice' with a 'c' (the verb is 'practise').",
  },
  {
    pattern: 'UK spelling',
    options: ['practice the song', 'practise the song', 'practece the song', 'practiss the song'],
    answerIndex: 1,
    rule: "Verb = 'practise' with an 's' (the noun is 'practice').",
  },
  {
    pattern: 'UK spelling',
    options: ['orginise', 'organise', 'organyse', 'organiize'],
    answerIndex: 1,
    rule: 'UK English usually prefers -ise: organise.',
  },
  {
    pattern: 'UK spelling',
    options: ['centre', 'center', 'centr', 'sentre'],
    answerIndex: 0,
    rule: "UK English uses -re: centre, not 'center'.",
  },
  {
    pattern: 'UK spelling',
    options: ['licence to drive', 'license to drive', 'licanse to drive', 'lisence to drive'],
    answerIndex: 0,
    rule: "Noun = 'licence' with a 'c' in UK English.",
  },
]

export const BANK: GameBank<PatternItem> = {
  slug: 'spelling-patterns',
  items: PATTERN_BANK,
  // Every question asks "Which spelling is correct?", so a question is named
  // by the four spellings it shows, in the order they are written.
  key: (q) => q.options.join(' / '),
  answer: (q) => q.options[q.answerIndex],
  // The same four options are always shown (their order is shuffled per
  // attempt), so they are fixed options.
  options: (q) => q.options,
  tag: (q) => q.pattern,
}
