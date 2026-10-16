import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Tricky Word Sprint: pick the correct British spelling of an everyday word
 * from four.
 *
 * Moved out of src/app/games/tricky-word-spelling/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations, and
 * again in two rounds of independent checking). The game asks "Which spelling
 * is correct?" with no sentence, and marks one of four tiles right, so a wrong
 * tile must not be a spelling a student could defend. 19 of the 69 questions
 * changed:
 *
 *   - 15 offered a wrong tile that is itself a word, and marked it wrong.
 *     Three were American spellings in a game that never says "British"
 *     (color, favorite, neighbor). Four were everyday words that sound like
 *     the answer, in a question with no meaning to choose by: peace for
 *     piece, there for their, cue for queue, allot for a lot. Ten were rarer
 *     or older words: wont (a word, said like won't), calender (a machine),
 *     wether (a sheep), whither and hight (old words), whish (a sound),
 *     surprize (an old variant), untile (to remove tiles), wich (a place name)
 *     and belive (an old Scots word). Each is now a slip that is not a word:
 *     coulor, favourit, neibour, piec, theire, quew, alote, wan’t, callendar,
 *     wheter, wheather, hieght, wihch, whic, surprice, unitl, believ. (The last
 *     four rarer words were found by a reader who checked every wrong tile
 *     against word lists.)
 *   - Four showed the same wrong spelling on two tiles (surprize, calandar,
 *     occassion, parliment), so a student chose from three. One tile of each
 *     pair is now different: surpise, calander, ocassion, parliamant.
 *   - 'grammar' offered 'adress' and 'agrument', which are misspellings of
 *     address and argument, not of grammar. They are now grammer and gramar.
 *   - February's four tiles were in lower case, though a month has a capital
 *     letter (Wednesday and April already did).
 *   - 'a lot' was the only tile with a space, so it could be picked by its
 *     shape without spelling anything: 'alott' is now 'a lott'.
 *
 * 25 memory tips changed. Six said what is not so: interesting has TWO Es, not
 * three; across has two Ss; successful has three S letters, one and a pair,
 * not "two Ss"; the gh in enough is not silent, it sounds like f; surprise has
 * two Rs with a P between them, not a "double R"; pronounce loses its o, not
 * "oun". Seven were hard for an A2 reader, cryptic, or showed a wrong
 * spelling: "Eat AU naturel", "Take AU to dinner", "a FINITE in definitely",
 * "A finite is definite", "HEIR is inside it", "WH like a question" and
 * "wh-itch". Twelve used a spaced hyphen or an exclamation mark as
 * punctuation.
 *
 * 'restaurant' is asked twice (questions 9 and 64) with different wrong tiles.
 * Both are kept, and each is explained from its own tiles, so a question's key
 * is its four tiles and not the right word alone.
 *
 * The words and their right answers are unchanged, except that February now
 * has its capital letter.
 */

export interface TrickyWord {
  /** Four candidate spellings - one correct, three plausible everyday errors */
  options: [string, string, string, string]
  /** Index (0-3) of the correct UK spelling */
  answerIndex: number
  /** One-line memory hook revealed after answering */
  tip: string
}

// 60+ high-frequency, everyday/functional words EAL (A2-B2) & KS3 learners
// commonly misspell. UK spelling. Distractors mirror real learner errors.
export const WORD_BANK: TrickyWord[] = [
  {
    options: ['becuase', 'because', 'becouse', 'becasue'],
    answerIndex: 1,
    tip: 'Big Elephants Can Always Understand Small Elephants.',
  },
  {
    options: ['freind', 'frend', 'friend', 'friende'],
    answerIndex: 2,
    tip: 'A friend is there to the END: fri-END.',
  },
  {
    options: ['beutiful', 'beautiful', 'beautifull', 'beatiful'],
    answerIndex: 1,
    tip: 'It is a BEAUty: think "be-a-u-tiful".',
  },
  {
    options: ['diffrent', 'different', 'differant', 'diferent'],
    answerIndex: 1,
    tip: 'Different has a "fer" in the middle: dif-FER-ent.',
  },
  {
    options: ['bussiness', 'buisness', 'business', 'bisness'],
    answerIndex: 2,
    tip: 'You take the BUS to your busi-ness.',
  },
  {
    options: ['surprise', 'suprise', 'surprice', 'surpise'],
    answerIndex: 0,
    tip: 'Two Rs with a P between them: su-R-P-R-ise.',
  },
  {
    options: ['adress', 'addres', 'address', 'adresse'],
    answerIndex: 2,
    tip: 'Two Ds and two Ss: add your address.',
  },
  {
    options: ['callendar', 'calandar', 'calendar', 'calander'],
    answerIndex: 2,
    tip: 'Ends in "-dar", like a radAR for dates.',
  },
  {
    options: ['restaraunt', 'restaurant', 'resturant', 'restarant'],
    answerIndex: 1,
    tip: 'A restaurant has AU in the middle: rest-AU-rant.',
  },
  {
    options: ['foriegn', 'forein', 'foreign', 'forreign'],
    answerIndex: 2,
    tip: 'Foreign breaks the rule: E before I here.',
  },
  {
    options: ['que', 'queue', 'quew', 'queu'],
    answerIndex: 1,
    tip: 'Q + UEUE: one letter, then a queue of others waiting.',
  },
  {
    options: ['Wensday', 'Wednsday', 'Wednesday', 'Wendsday'],
    answerIndex: 2,
    tip: 'Say it in your head: "Wed-nes-day".',
  },
  {
    options: ['definately', 'definitely', 'definatly', 'definetly'],
    answerIndex: 1,
    tip: 'Defin-ITE-ly. No A.',
  },
  {
    options: ['seperate', 'separate', 'seperete', 'saparate'],
    answerIndex: 1,
    tip: 'There is A RAT in sep-A-RAT-e.',
  },
  {
    options: ['neccessary', 'necesary', 'necessary', 'neccesary'],
    answerIndex: 2,
    tip: 'One Collar, two Sleeves: 1 C, 2 S.',
  },
  {
    options: ['enviroment', 'environment', 'enviornment', 'enviromnent'],
    answerIndex: 1,
    tip: 'IRON in the middle: env-IRON-ment.',
  },
  {
    options: ['begining', 'beggining', 'beginning', 'begginning'],
    answerIndex: 2,
    tip: 'Double the N before -ing: begin + n + ing.',
  },
  {
    options: ['untill', 'untl', 'until', 'unitl'],
    answerIndex: 2,
    tip: 'One L only: "until" the very end.',
  },
  {
    options: ['whic', 'whitch', 'which', 'wihch'],
    answerIndex: 2,
    tip: 'WH + ICH: it starts like "what".',
  },
  {
    options: ['recieve', 'receive', 'receeve', 'receve'],
    answerIndex: 1,
    tip: 'I before E, except after C: rec-EI-ve.',
  },
  {
    options: ['beleive', 'believe', 'beleeve', 'believ'],
    answerIndex: 1,
    tip: 'Never beLIEve a LIE: be-LIE-ve.',
  },
  {
    options: ['acheive', 'achieve', 'acheeve', 'achive'],
    answerIndex: 1,
    tip: 'I before E: ach-IE-ve.',
  },
  {
    options: ['tommorow', 'tomorow', 'tomorrow', 'tommorrow'],
    answerIndex: 2,
    tip: 'One M, two Rs: to-mor-row.',
  },
  {
    options: ['favourate', 'favourit', 'favourite', 'faverite'],
    answerIndex: 2,
    tip: 'UK keeps the U: favo-U-rite.',
  },
  {
    options: ['colour', 'coulor', 'colur', 'collour'],
    answerIndex: 0,
    tip: 'UK spelling keeps the U: col-O-U-r.',
  },
  {
    options: ['neighbour', 'nieghbour', 'naybour', 'neibour'],
    answerIndex: 0,
    tip: 'EIGH says "ay", plus the UK "-our".',
  },
  {
    options: ['accross', 'acros', 'across', 'akross'],
    answerIndex: 2,
    tip: 'One C, two Ss: a + cross.',
  },
  {
    options: ['allways', 'always', 'alwais', 'olways'],
    answerIndex: 1,
    tip: 'AL + WAYS: only one L.',
  },
  {
    options: ['arguement', 'argument', 'argumant', 'arguemnt'],
    answerIndex: 1,
    tip: 'Argue loses its E: argu + ment.',
  },
  {
    options: ['embarass', 'embarrass', 'embaras', 'embarras'],
    answerIndex: 1,
    tip: 'Really Red face: 2 Rs and 2 Ss.',
  },
  {
    options: ['occassion', 'occasion', 'ocasion', 'ocassion'],
    answerIndex: 1,
    tip: 'Two Cs, one S: a big occasion.',
  },
  {
    options: ['posession', 'possesion', 'possession', 'posesion'],
    answerIndex: 2,
    tip: 'Plenty of Ss: po-SS-e-SS-ion.',
  },
  {
    options: ['grammer', 'gramar', 'grammar', 'gramer'],
    answerIndex: 2,
    tip: 'Ends in "-mar", not "-mer": gram-MAR.',
  },
  {
    options: ['Febuary', 'February', 'Februery', 'Feburary'],
    answerIndex: 1,
    tip: 'There is an R after Feb: Feb-R-uary.',
  },
  {
    options: ['probaly', 'probably', 'probebly', 'probbly'],
    answerIndex: 1,
    tip: 'Say all three beats: prob-AB-ly.',
  },
  {
    options: ['intresting', 'interesting', 'intersting', 'interrsting'],
    answerIndex: 1,
    tip: 'Two Es: in-t-E-r-E-st-ing.',
  },
  {
    options: ['libary', 'library', 'librery', 'liberary'],
    answerIndex: 1,
    tip: 'Two Rs: lib-R-a-R-y.',
  },
  {
    options: ['decison', 'desicion', 'decision', 'decistion'],
    answerIndex: 2,
    tip: 'Decide → deci-SION.',
  },
  {
    options: ['definate', 'definit', 'definite', 'definete'],
    answerIndex: 2,
    tip: 'Definite ends in -ite, like "kite".',
  },
  {
    options: ['truely', 'truly', 'trooly', 'truley'],
    answerIndex: 1,
    tip: 'True drops the E: tru + ly.',
  },
  {
    options: ['begginer', 'beginer', 'beginner', 'biginner'],
    answerIndex: 2,
    tip: 'Double N: begin + n + er.',
  },
  {
    options: ['wierd', 'weird', 'weard', 'weirde'],
    answerIndex: 1,
    tip: 'Weird is weird: E before I here.',
  },
  {
    options: ['piece', 'peice', 'piec', 'peese'],
    answerIndex: 0,
    tip: 'A piece of PIE: P-I-E-ce.',
  },
  {
    options: ['thier', 'theire', 'their', 'theyr'],
    answerIndex: 2,
    tip: 'THEIR is "the" + "ir". It shows who owns something.',
  },
  {
    options: ['wan’t', 'won’t', 'woun’t', 'wo’nt'],
    answerIndex: 1,
    tip: 'Will not → won’t, apostrophe before T.',
  },
  {
    options: ['alot', 'a lot', 'alote', 'a lott'],
    answerIndex: 1,
    tip: '"A lot" is always two words.',
  },
  {
    options: ['wheter', 'whether', 'whather', 'wheather'],
    answerIndex: 1,
    tip: 'Whether starts with WH, like what, when and where.',
  },
  {
    options: ['accomodation', 'acommodation', 'accommodation', 'accomadation'],
    answerIndex: 2,
    tip: 'Two Cs, two Ms: room for everyone.',
  },
  {
    options: ['oppertunity', 'opportunity', 'oportunity', 'opportunaty'],
    answerIndex: 1,
    tip: 'Two Ps, then "-tunity".',
  },
  {
    options: ['existance', 'existence', 'exsistence', 'existense'],
    answerIndex: 1,
    tip: 'Ends in "-ence": exist-ENCE.',
  },
  {
    options: ['independant', 'independent', 'independnt', 'indipendent'],
    answerIndex: 1,
    tip: 'A dent at the end: independ-ENT.',
  },
  {
    options: ['rythm', 'rhythm', 'rythym', 'rhythem'],
    answerIndex: 1,
    tip: 'Rhythm Helps Your Two Hips Move.',
  },
  {
    options: ['adventrous', 'adventerous', 'adventurous', 'adventourous'],
    answerIndex: 2,
    tip: 'Adventure + ous: keep the "ur".',
  },
  {
    options: ['conscous', 'concious', 'conscious', 'consious'],
    answerIndex: 2,
    tip: 'SC in the middle: con-SC-ious.',
  },
  {
    options: ['goverment', 'government', 'govenment', 'governmant'],
    answerIndex: 1,
    tip: 'Govern + ment: do not drop the N.',
  },
  {
    options: ['knowlege', 'knowledge', 'knowladge', 'knoledge'],
    answerIndex: 1,
    tip: 'Know + ledge: like a window ledge.',
  },
  {
    options: ['succesful', 'successful', 'sucessful', 'successfull'],
    answerIndex: 1,
    tip: 'Double C, double S, one L at the end: suc-cess-ful.',
  },
  {
    options: ['immediatly', 'immediately', 'imediately', 'immediatley'],
    answerIndex: 1,
    tip: 'Immediate + ly: keep both Ms.',
  },
  {
    options: ['oppinion', 'opinion', 'opinon', 'openion'],
    answerIndex: 1,
    tip: 'One P only: o-PIN-ion.',
  },
  {
    options: ['parlament', 'parliment', 'parliament', 'parliamant'],
    answerIndex: 2,
    tip: 'I AM in parl-I-AM-ent.',
  },
  {
    options: ['pronounciation', 'pronunciation', 'pronounciaton', 'pronunceation'],
    answerIndex: 1,
    tip: 'Pronounce has ou, but pronunciation has only u: pro-NUN-ciation.',
  },
  {
    options: ['recomend', 'reccommend', 'recommend', 'reccomend'],
    answerIndex: 2,
    tip: 'One C, two Ms: re-com-mend.',
  },
  {
    options: ['responsable', 'responsible', 'responsibel', 'responseble'],
    answerIndex: 1,
    tip: 'Ends in "-ible": respons-IBLE.',
  },
  {
    options: ['restraunt', 'restauraunt', 'restaurant', 'resteraunt'],
    answerIndex: 2,
    tip: 'Put AU straight after rest: rest-AU-rant.',
  },
  {
    options: ['vegtable', 'vegetable', 'vegatable', 'vegitable'],
    answerIndex: 1,
    tip: 'Hidden middle E: veg-E-table.',
  },
  { options: ['Aprul', 'Aprill', 'April', 'Apryl'], answerIndex: 2, tip: 'Just one L: A-P-R-I-L.' },
  {
    options: ['enuff', 'enough', 'enuogh', 'enouth'],
    answerIndex: 1,
    tip: 'GH sounds like F: e-nough rhymes with "stuff".',
  },
  {
    options: ['heigth', 'hieght', 'height', 'heihgt'],
    answerIndex: 2,
    tip: 'Height ends in "-ght", like "eight".',
  },
  {
    options: ['lenght', 'length', 'lengh', 'lenth'],
    answerIndex: 1,
    tip: 'Long → length: keep the "ng".',
  },
]

export const BANK: GameBank<TrickyWord> = {
  slug: 'tricky-word-spelling',
  items: WORD_BANK,
  // The student sees four spellings and no prompt, so the four name the
  // question. The right word alone would not: 'restaurant' is asked twice.
  key: (w) => w.options.join('|'),
  answer: (w) => w.options[w.answerIndex],
  // The same four tiles every time; the page only shuffles their order.
  options: (w) => w.options,
}
