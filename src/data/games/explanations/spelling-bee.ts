import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Spelling Bee: the explanation a student sees after each answer, by question key
 * (src/data/games/banks/spelling-bee.ts). Written with AI on 16 October 2026 and
 * checked against each word (the student types, so there are no options), as the
 * founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: explanations for the 360 words added to
 * the bank (the everyday words examiners report misspelt, the terms of
 * analysis, British spellings, set-text names, and ninety-nine words that sound
 * like another, each shown in a sentence whose gap decides the spelling, most
 * of them real lines from texts out of copyright), and 26 of the original 42
 * rewritten so that none names another word in the bank (the tip for separate
 * named Jekyll; receive listed believe, ceiling, deceive and receipt). Each
 * says the spelling trap and a way to remember it; for a word in a sentence,
 * why says what the gap needs in that line. Written with AI and checked
 * against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked on 24 October 2026 by a second, independent reader, as the founder
 * decided: nineteen explanations corrected. Devise named Puck for a line Oberon
 * speaks; caesura called cesura a misspelling, though dictionaries list it;
 * draught called its gh silent; sarcasm was said to hold sc; and seven more
 * were imprecise or named a near neighbour of another answer. Precede, eminent
 * and incite were rewritten for the real lines that replaced their sentences.
 */
export const EXPLANATIONS: GameExplanations = {
  definitely: {
    why: "The tricky part is the middle: definitely is definite + ly, and definite contains the word finite. So it is de + finite + ly, with an i after the n, never an a. 'Definately' is a very common mistake.",
    more: "Memory aid: there is a finite number of ways to spell definitely, and only one is right. The word comes from the Latin finis, 'end' or 'limit', like finish and infinite.",
    tip: "Use it in a sentence: 'Dickens definitely wants his readers to see that Scrooge can change.' In an essay, 'clearly' is often a stronger choice.",
  },
  separate: {
    why: "The tricky part is the second vowel: sep-A-rate, not sep-E-rate. 'Seperate' is a very common mistake, because the a is not clearly pronounced in normal speech.",
    more: "Memory aid: there is 'a rat' in sep-a-rat-e. The same spelling runs through the whole word family: separately, separation and separable.",
    tip: "Use it in a sentence: 'The doctor hopes his potion will separate the good and evil sides of his nature.'",
  },
  necessary: {
    why: 'The tricky part is the mix of single and double letters: one c, then a double s: ne-c-e-ss-ary. Writers often double the c or use a single s.',
    more: "Memory aid: a shirt has one collar and two sleeves, so necessary has one c and two s's. Adding un- gives unnecessary, with a double n.",
    tip: "Use it in a sentence: 'It is necessary to support every point with evidence from the text.'",
  },
  environment: {
    why: "The tricky part is the n hiding before -ment: environ + ment. In speech the n is often dropped, so people write 'enviroment', but it must be there: enviro-N-ment.",
    more: "Memory aid: there is 'iron' in envIRONment. The word is built from environ, an old verb meaning 'to surround', plus -ment, which is why the n stays.",
    tip: "Use it in a sentence: 'The harsh environment of the trenches is central to Owen's poetry.'",
  },
  beginning: {
    why: 'The tricky part is the double n: begin + n + ing. When a word ends in one vowel and one consonant, and the stress falls on that last syllable (be-GIN), you double the final consonant before adding -ing or -er.',
    more: 'The same rule gives beginner, forgetting and referred. Compare visiting and opening: the stress falls on the first syllable (VIS-it, O-pen), so the consonant is not doubled. British English doubles a final l anyway: labelling, cancelled.',
    tip: "Use it in a sentence: 'From the beginning of the novella, Dickens presents Scrooge as cold and isolated.'",
  },
  occurred: {
    why: 'The tricky part is the two double letters: double c and double r. Occur already has a double c, and because the stress falls on its last syllable (oc-CUR), the r doubles before -ed.',
    more: "The same doubling gives occurring and occurrence. The noun is often misspelt 'occurence', but it keeps both pairs of double letters: o-cc-u-rr-ence.",
    tip: "Use it in a sentence: 'The murder occurred offstage, so we must imagine it.'",
  },
  disappoint: {
    why: "The tricky part is one s and two p's. The word is the prefix dis- added to appoint, so you keep dis exactly as it is and appoint exactly as it is: dis + appoint.",
    more: "The same thinking works for dishonest (dis + honest) and dissolve (dis + solve, so two s's). When you are unsure, split off the prefix and check the root word.",
    tip: "Use it in a sentence: 'The ending may disappoint readers who expect everyone to be punished.'",
  },
  argument: {
    why: 'The tricky part is the missing e. Argue ends in e, but argument drops it: argu + ment. This is an exception, because most words keep the e before -ment, as in amazement and movement.',
    more: "Memory aid: 'I lost an e in an argument.' Arguing drops the e as well, as most words ending in e do before -ing.",
    tip: "Use it in a sentence: 'The writer's argument rests on statistics and a personal story.'",
  },
  receive: {
    why: "The tricky part is the ei after the c. The rule 'i before e, except after c' works here: when the sound is 'ee' and it follows a c, write ei: rec-EI-ve.",
    more: 'The same rule gives conceive and perceive. Words without a c before the sound usually use ie, as in field, thief and shield.',
    tip: "Use it in a sentence: 'Scrooge does not expect to receive a visit from Marley's ghost.'",
  },
  achieve: {
    why: "The tricky part is ie, not ei. The sound is 'ee' and the letter before it is h, not c, so 'i before e' applies: ach-IE-ve.",
    more: 'Achieve keeps its final e in achievement, because -ment begins with a consonant. Words with the same ie pattern include relieve, grief and thief.',
    tip: "Use it in a sentence: 'To achieve a high mark, link each quotation to the writer's purpose.'",
  },
  conscience: {
    why: 'The tricky part is the middle: conscience is con + science. Writers often leave out the s, the c or the i, but if you can spell science, you can spell conscience.',
    more: 'Do not confuse it with conscious, meaning awake or aware, which ends in -ious. Conscience is your sense of right and wrong, and conscientious, meaning careful and hard-working, comes from it.',
    tip: "Use it in a sentence: 'Macbeth's guilty conscience torments him after he murders Duncan.'",
  },
  privilege: {
    why: 'The tricky part is the vowels and the ending: priv-I-l-E-ge, with no d. People often add a d, as in ledge or hedge, but privilege ends in -lege.',
    more: 'Memory aid: it is vile to spell privilege with a d. Look closely and you will see vile inside the word: pri + vile + ge.',
    tip: "Use it in a sentence: 'Wealth and privilege blind the family to the struggles of workers like Eva Smith.'",
  },
  accommodate: {
    why: "The tricky part is the two pairs of double letters, double c and double m: a-cc-o-mm-odate. Many people write 'accomodate' with one m.",
    more: "Memory aid: the word is big enough to accommodate two c's and two m's. The noun accommodation keeps both pairs.",
    tip: "Use it in a sentence: 'The hotel could accommodate all the guests, but the dining room was far too small.'",
  },
  embarrass: {
    why: "The tricky part is the two pairs of double letters, double r and double s: emba-rr-a-ss. 'Embarass' with one r is a very common mistake.",
    more: "Memory aid: when you are embarrassed you go Really Red and Smile Shyly: two r's and two s's. Compare harass, which has one r and two s's.",
    tip: "Use it in a sentence: 'The father fears that a public scandal will embarrass the family.'",
  },
  believe: {
    why: "The trap is the ie in the middle: bel-IE-ve. The sound is 'ee' and no c comes before it, so the rule is i before e. 'Beleive' is the usual slip.",
    more: 'Memory aid: never believe a lie. The word lie is hidden inside it, be-LIE-ve, and keeping that lie in the middle stops the two vowels swapping round.',
    tip: "In an essay: 'At first Scrooge refuses to believe in Marley's ghost.'",
  },
  government: {
    why: "The trap is the n in the middle, which most people do not sound: gover-N-ment. The word is govern + ment, and the n of govern stays, so it is never 'goverment'.",
    more: 'Memory aid: a government governs. Say the root word first, govern, then add -ment. Keeping the root whole works for governor too: govern + or.',
    tip: "In an essay: 'Orwell shows a government that rules through fear and lies.'",
  },
  persuade: {
    why: "The trap is the u after the s: per-SUA-de. People hear 'per-swade' and write 'perswade', or swap the vowels to 'persaude'. Here the w sound is spelt with a u.",
    more: "It comes from the Latin suadere, 'to urge', which also gives dissuade, to talk someone out of something. Both words share the same three letters: s, u, a.",
    tip: "In an essay: 'The leaflet uses statistics to persuade the reader to act.'",
  },
  disappear: {
    why: "The trap is the single s and the double p. The word is dis + appear: the prefix keeps its one s, and appear keeps its double p, so it is never 'dissappear' or 'disapear'.",
    more: 'When you are unsure, split off the prefix and spell each part as it is. Add dis- to a word that starts with s and you get a double s, as in dissolve, because both parts keep their letters.',
    tip: "In an essay: 'When the witches disappear, Macbeth wishes they had stayed.'",
  },
  dissatisfied: {
    why: "The trap is the double s. The word is dis + satisfied, and because satisfied begins with s, two s's meet where the parts join: dis-satisfied. Writers often drop one, but each part keeps all its letters.",
    more: 'The rule for prefixes: never add or drop a letter where two parts join. Mis + spell gives a double s; un + natural gives a double n; dis + similar gives dissimilar.',
    tip: "In an essay: 'Sheila grows dissatisfied with her parents' excuses as the evening goes on.'",
  },
  interrupt: {
    why: "The trap is the double r: inter-RUPT. The word is inter, 'between', plus rupt, 'break', so the r at the end of inter meets the r at the start of rupt.",
    more: "The Latin rumpere, 'to break', gives rupt, as in rupture and erupt. To interrupt is to break in between: picture the two r's as the two sides of the break.",
    tip: "In an essay: 'The sharp ring of the doorbell seems to interrupt the speech, as if to answer it.'",
  },
  immediately: {
    why: 'The traps are the double m at the start and the -ately ending. The word is immediate + ly, and the e of immediate stays: im-me-di-ate-ly.',
    more: "Immediate comes from Latin: in-, 'not', joined to medius, 'middle', so nothing comes in between. The n of in- turns to m before another m, which is where the double m comes from.",
    tip: "In an essay: 'Romeo falls for Juliet immediately, which suggests his love is rash.'",
  },
  surprise: {
    why: "The trap is the first r: SUR-prise. In most British speech it is not sounded, so people write 'suprise'. The word begins with sur-, as in surface and surname.",
    more: "Sur- comes from the French for 'over' or 'upon': a surprise takes you over suddenly. It always ends in -ise, in British and American spelling alike.",
    tip: "In an essay: 'The twist at the end comes as a surprise, forcing the reader to rethink earlier clues.'",
  },
  tomorrow: {
    why: "The trap is one m and a double r: to-MO-RR-ow. People often double the wrong letter and write 'tommorow' or 'tommorrow'.",
    more: "Memory aid: Tom Or Row. One Tom, but the r of or meets the r of row, so two r's. It was once two words, to and morrow, an old word for morning.",
    tip: "In an essay: 'Macbeth's \"Tomorrow, and tomorrow, and tomorrow\" makes time crawl, each day as empty as the last.'",
  },
  Wednesday: {
    why: "The trap is the silent d and the hidden e: WED-nes-day. It is said 'wenz-day', so people write 'Wensday', but the spelling keeps the d and the e of the old name.",
    more: "It means Woden's day, after the chief god of the Anglo-Saxons. Say it to yourself as it is spelt, Wed-nes-day, whenever you write it.",
    tip: "Check it: in a letter, a date such as 'Wednesday 4 June' needs a capital and every letter, even the d you never say.",
  },
  February: {
    why: "The trap is the first r: Feb-RU-ary. Many people say 'Feb-yoo-ary', so they leave it out, but the spelling has an r straight after the b and another near the end.",
    more: "It comes from februa, a Roman festival of cleansing held in that month. Say it slowly as it is spelt, Feb-ru-ar-y, to fix both r's in your memory.",
    tip: "Write it: 'On a raw February morning, the streets were silent.' Naming a month sets the season in a single word.",
  },
  beautiful: {
    why: 'The trap is the start, b-e-a-u: three vowels in a row before the t. It comes from the French beau, so it keeps the French eau. Then beauty changes its y to i before -ful.',
    more: 'Memory aid: Big Elephants Are Ugly, for b-e-a-u. Watch the ending too: -ful has only one l, as in hopeful and careful, even though the word full has two.',
    tip: "In an essay: 'The lady in Keats's ballad is beautiful but merciless.'",
  },
  business: {
    why: "The trap is the i after the s: BUSI-ness. The word is busy + ness, and the y of busy changes to i before the ending, so it is busi-ness, even though you hear 'biz-ness'.",
    more: 'The same y-to-i change gives happiness from happy and laziness from lazy. Spell the root word first, then make the change.',
    tip: "In an essay: 'Marley was Scrooge's business partner, and his ghost returns as a warning.'",
  },
  foreign: {
    why: "The traps are the ei and the silent g: for-EIG-n. It breaks the 'i before e' rule, and the g is not sounded at all, so people write 'foriegn' or 'forein'.",
    more: "It comes from the Old French forain, 'from outside', which had no g at all. The g was added later to match other words ending -eign, which is why you never hear it.",
    tip: "Write it: 'She felt like a stranger in a foreign land.'",
  },
  sincerely: {
    why: "The trap is the e before -ly: sin-cere-ly. The word is sincere + ly, and because -ly begins with a consonant, the e of sincere stays. 'Sincerly' drops a letter that belongs there.",
    more: 'Most words keep a final e before an ending that starts with a consonant: hopeful, lovely, safely. Only a few drop it, such as awful from awe.',
    tip: "In a letter: end with 'Yours sincerely' when you named the person at the start, and 'Yours faithfully' when you began 'Dear Sir or Madam'.",
  },
  unfortunately: {
    why: "The word is built in three parts: un + fortunate + ly. The trap is the e of fortunate, which stays before -ly: un-for-tu-nate-ly. People often drop it and write 'unfortunatly'.",
    more: 'Build long words from their parts and every letter stays in place: un + fortunate + ly. The same e stays in fortunately and in privately.',
    tip: "In an essay: 'Unfortunately for Juliet, the friar's letter never reaches Romeo.'",
  },
  address: {
    why: "The trap is the two pairs of double letters: a-DD-re-SS. People often write 'adress' with one d, but the word has a double d and a double s.",
    more: 'As a verb, address means to speak to someone, or to deal with something: a speech addresses a crowd, and an essay addresses a question. Every form keeps both pairs: addressed, addressing.',
    tip: 'In an essay: \'The speaker addresses the reader directly as "you", which feels personal.\'',
  },
  across: {
    why: "The trap is that there is only one c: a-CROSS. People often write 'accross', thinking of words like accurate or account, but across is simply a + cross.",
    more: "It began as 'in cross', in the shape of a cross. Add a single a to cross and you have it, with one c and the double s of cross: a + cross.",
    tip: "In an essay: 'The image of the river stretches across the whole poem.'",
  },
  awkward: {
    why: "The trap is the w that comes before the k: AWK-ward. The first part is aw, as in saw or claw, and the second is ward, as in backward, so the word has two w's: aw-k-ward.",
    more: "It comes from an old word, awk, meaning 'the wrong way round', plus -ward, 'in the direction of'. So awkward first meant turned the wrong way, and it still means clumsy or difficult.",
    tip: "In an essay: 'The long, awkward silence at dinner shows the tension in the family.'",
  },
  calendar: {
    why: "The trap is the ending: calend-AR, not -er. People write 'calender', but the word ends -ar, like the endings of cellar and collar.",
    more: 'It comes from the Latin kalendae, the first day of each Roman month, when accounts were settled. A calender, with an e, is a different word: a machine that presses cloth or paper between rollers.',
    tip: 'Check it: -ar, -er and -or sound the same at the end of a word, so learn the -ar words by sight: calendar, cellar, collar, dollar.',
  },
  committee: {
    why: 'The trap is three pairs of double letters: co-MM-i-TT-EE. It is easy to miss one. Count them: double m, double t and double e.',
    more: 'It comes from commit, which has one t, but committee doubles it, and ends -ee, the ending for the person or group something is given to, as in employee and trainee.',
    tip: "In an essay: 'Napoleon hands every decision to a committee of pigs that he leads himself.'",
  },
  desperate: {
    why: "The trap is the middle vowel: des-PER-ate. In speech it is barely sounded, so people write 'desparate' or 'desprate', but it is an e: des + per + ate.",
    more: "It comes from the Latin desperare, 'to give up hope', from de, 'without', and sperare, 'to hope'. The noun keeps the e too: desperation.",
    tip: "In an essay: 'Macbeth grows more desperate as the English army closes in.'",
  },
  discipline: {
    why: "The trap is the sc in the middle: di-SC-ipline. The c is silent, so people write 'disipline', but the word keeps both letters, just as disciple does.",
    more: "It comes from the Latin discipulus, 'a learner', the same root as disciple: a learner is shaped by training. A silent c after s also appears in science and scene.",
    tip: "In an essay: 'Golding shows that without adult discipline the boys' order collapses.'",
  },
  excellent: {
    why: "There are two traps: the double l, and the ending -ent, not -ant. People write 'excelent' or 'excellant'. The word comes from excel, which doubles its l before an ending: ex-ce-LL-ent.",
    more: 'The noun is excellence, with -ence to match. When a word ends -ent, its noun usually ends -ence; when it ends -ant, the noun usually ends -ance. Learning them in pairs settles the ending.',
    tip: "Check it: in your own writing, a precise word usually beats 'excellent'. 'Vivid' or 'striking' says what makes an image work.",
  },
  existence: {
    why: "The trap is the ending: exist-ENCE, not -ance. People often write 'existance'. One check helps: every vowel after the x is an i or an e, and none is an a: ex-ist-ence.",
    more: 'The -ence and -ance endings sound identical, so each word has to be learnt by sight. Existence shares its ending with presence and absence: being here, being away, and simply being.',
    tip: "In an essay: 'Scrooge's lonely existence is shown through his cold, dark rooms.'",
  },
  familiar: {
    why: "The trap is the ending: famil-IAR. People write 'familer' or 'familar'. The word is related to family: the y of family becomes an i, and -ar follows it: famili-ar.",
    more: "It comes from the Latin familiaris, 'of the household'. Memory aid: the people you know best are your family, so famili- starts familiar. The same -iar ending closes peculiar and liar.",
    tip: "In an essay: 'The familiar setting of a family dinner makes the Inspector's arrival more unsettling.'",
  },
  forty: {
    why: "The trap is the missing u: four has a u, but forty does not. People write 'fourty' because they think of four, but the u drops out: f-o-r-t-y.",
    more: 'Only forty drops the u: fourteen and four both keep it. Memory aid: forty is a fort with a y on the end.',
    tip: 'Check it: numbers written as words are easy to slip on. Forty has no u, though fourteen and four both keep theirs.',
  },
  grammar: {
    why: "The trap is the ending: gramm-AR, not -er. People write 'grammer', because the last syllable is unstressed and sounds like 'er'. The word also has a double m.",
    more: "It comes from the Greek grammatike, 'the art of letters', from gramma, 'a letter', which explains the double m. Memory aid: do not mar your grammar; both end -ar.",
    tip: 'Check it: in the writing papers, technical accuracy is marked as a skill of its own, so a slip in this word costs marks.',
  },
  grateful: {
    why: "The trap is the first part: GRATE-ful, not great. People write 'greatful', but the word has nothing to do with great. It comes from the Latin gratus, 'pleasing' or 'thankful'.",
    more: 'The same root gives gratitude and congratulate, both with grat-. Then add -ful, with one l: grate + ful.',
    tip: "In an essay: 'Scrooge's nephew is grateful for Christmas, though it has never put money in his pocket.'",
  },
  guard: {
    why: "The trap is the silent u: G-U-ard. It is said 'gard', so people leave the u out, but the word keeps it: gu + ard.",
    more: 'Guard came into English from French, which spelt it with gu, and the letters stayed though the u is not sounded. Guess, guide and guilt also have a silent u after the g.',
    tip: "In an essay: 'Sheila drops her guard and admits her part in what happened.'",
  },
  height: {
    why: "The trap is the ei and the gh: h-EI-ght. It breaks 'i before e' because the sound is 'eye', not 'ee'. Some people also add th at the end, as if it matched width and depth, but it ends -ght.",
    more: 'Memory aid: height and weight both hold the letters of eight: h + eight, w + eight. Only the vowel sound differs.',
    tip: "In an essay: 'At the height of his power, Macbeth has never felt less safe.'",
  },
  island: {
    why: "The trap is the silent s: I-S-land. You never hear it, so people write 'iland', but the word keeps the s.",
    more: 'Old English had no s: igland. The s was added around 1600, under the influence of isle, a different word that comes from the Latin insula. It has stayed silent ever since.',
    tip: "In an essay: 'The island in Lord of the Flies is cut off from adult rules.'",
  },
  jealous: {
    why: 'The trap is the ea: j-EA-lous. The vowel sounds like the e in bell, but it is spelt ea, as in head and bread. The ending is -ous, never -us.',
    more: "Jealous and zealous are one word that split in two: both come from the Greek zelos, 'eager rivalry'. They are spelt alike apart from the first letter.",
    tip: "In an essay: 'Othello's jealous rage is stirred up by Iago's lies.'",
  },
  knowledge: {
    why: 'There are two traps: the silent k at the start and the d before the g. The word is know + ledge: if you can spell know and ledge, you can spell this word.',
    more: "The k was once sounded in English, as it still is in the German Knie, 'knee'. The d makes the -dge ending, the same as in bridge and hedge.",
    tip: "In an essay: 'Victor's thirst for knowledge leads him to create a being he cannot control.'",
  },
  library: {
    why: "The trap is the first r: li-BRAR-y. Many people say 'libary', so the r after the b goes missing in writing, but the word has two r's: l-i-b-r-a-r-y.",
    more: "It comes from the Latin liber, 'book', which is why it starts libr-. A librarian works there, and the r after the b stays in every form.",
    tip: 'Check it: say it slowly as it is spelt, li-brar-y, until the first r feels natural.',
  },
  marriage: {
    why: "The trap is the i before the a: marr-I-age. The word comes from marry + age, and the y of marry changes to i before the ending. People write 'marrage' or 'marridge'.",
    more: 'The same y-to-i change gives carriage from carry. There is no d, unlike in bridge or ridge: the ending is -age, as in village.',
    tip: "In an essay: 'The secret marriage of Romeo and Juliet comes within a day of their first meeting.'",
  },
  neighbour: {
    why: "There are two traps: the eigh, as in eight, and the British -our ending: n-EIGH-b-OUR. The 'ay' sound is spelt eigh, and British English keeps the u in the ending.",
    more: "American spelling drops the u, but British spelling keeps -our in neighbour, colour, honour and humour. The eigh goes back to the Old English neahgebur, 'near dweller'.",
    tip: "In an essay: 'A Christmas Carol asks the reader to treat the poor as a neighbour, not a stranger.'",
  },
  nervous: {
    why: "The trap is the ending -ous: nerv-OUS. It sounds like 'us', so people write 'nervus', but this adjective ending is -ous, as in famous and dangerous.",
    more: "It comes from the Latin nervosus, 'sinewy': it first meant strong and vigorous, and only later anxious. Build it from nerve: drop the e and add -ous.",
    tip: "In your writing: 'His fingers drummed on the table' shows a nervous man without naming the feeling.",
  },
  occasion: {
    why: "The trap is the double c and the single s: o-CC-a-S-ion. People often double the s or forget the second c. Count them: two c's, one s.",
    more: "It comes from the Latin occasio, from ob, 'towards', and cadere, 'to fall': an occasion is a moment that falls your way. The ob became oc before the c, giving the double c.",
    tip: "In your writing: 'On one occasion, the whole street fell silent' opens a short story neatly.",
  },
  opportunity: {
    why: "The trap is the double p: o-PP-ortunity. People often write 'oportunity' or 'oppurtunity'. Fix the double p, then the or: op-por-tu-ni-ty.",
    more: "It comes from the Latin ob portum, 'towards the harbour': a wind blowing a ship towards port was a chance to sail home. The port inside the word helps with the middle.",
    tip: "In an essay: 'Lady Macbeth urges her husband to take the opportunity while Duncan sleeps under their roof.'",
  },
  possess: {
    why: "The trap is two pairs of double s: po-SS-e-SS. People often write 'posess' or 'posses'. Count them: four s's in two pairs.",
    more: 'Memory aid: someone who wants to own everything wants two of each, so possess has two pairs of s. Every form keeps them: possessed, possesses.',
    tip: "In an essay: 'The doctor seems possessed by a second self he can no longer control.'",
  },
  queue: {
    why: "The trap is the four vowels after the q: q-UEUE. The word sounds like the letter q, and the ueue is a French spelling. It is easy to stop at 'que' or write 'queu'.",
    more: "It comes from the French queue, 'tail': a queue is a line of people trailing behind one another. Memory aid: q, then u-e twice: q + ue + ue.",
    tip: 'Check it: say the letters as a chant, q, u-e, u-e, until the pattern sticks.',
  },
  recommend: {
    why: "The trap is one c and a double m: re-C-o-MM-end. It is re + commend, so the c of commend stays single and the m stays double. People write 'reccomend' or 'recomend'.",
    more: 'Commend means to praise, so to recommend is to praise something to someone else. If you can spell commend, add re- at the front and keep every letter.',
    tip: "In your writing: 'I would strongly recommend...' gives a speech or article a clear call to action.",
  },
  restaurant: {
    why: "The trap is the au in the middle: rest-AU-rant. The word is French, from restaurer, 'to restore', so the au of the French stays. People write 'resturant' or 'restraunt'.",
    more: 'A restaurant was first a bowl of broth meant to restore a hungry guest, and then the place that served it. Split it as rest + au + rant to keep the letters in order.',
    tip: 'Check it: say it in three parts, rest, au, rant, as you write it.',
  },
  rhyme: {
    why: "The traps are the rh at the start and the y: RH-Y-me. The h is silent, and the 'eye' sound is spelt with a y. People write 'ryme' or 'rhime'.",
    more: 'The h was added around 1600 by scholars who thought the word came from Greek. It came from the French rime, but the Greek-looking rh stayed.',
    tip: "In an essay: 'The rhyme breaks down in the last stanza, as if the speaker has lost control.'",
  },
  scissors: {
    why: "The traps are the silent c and the double s: s-C-i-SS-ors. The c is not sounded, and the pair of s's in the middle sounds like z. The ending is -ors, not -ers.",
    more: "The silent c came from linking the word, wrongly, to the Latin scindere, 'to cut'. Like trousers and glasses, scissors is always plural: a pair of scissors.",
    tip: "In your writing: 'The wind cut through him like scissors' turns cold into something sharp.",
  },
  soldier: {
    why: "The trap is the di, which sounds like 'j': sol-DI-er. People write 'soljer' or 'souldier', but the spelling is sol + di + er.",
    more: "It comes from the Old French soudier, from soulde, 'pay': a soldier was someone paid to fight. Say it as it is spelt, sol-di-er, when you write it.",
    tip: "In an essay: 'Owen presents the soldier as a victim, not a hero.'",
  },
  strength: {
    why: "The trap is the g before the th: stren-G-th. In quick speech it sounds like 'strenth', so people leave the g out, but the word is built from strong: stren-g-th.",
    more: 'Strong gives this word as long gives length: in both, the o changes to e, and the ng stays before the th. If you can spell length, you can spell this.',
    tip: "In an essay: 'The main strength of the article is its use of personal detail.'",
  },
  success: {
    why: "The trap is two pairs of double letters: su-CC-e-SS. People write 'sucess' or 'succes'. Count them: double c, then double s.",
    more: "It comes from the Latin succedere, 'to come after', from sub, 'next', and cedere, 'to go'. The sub became suc before the c, which is where the double c comes from.",
    tip: "In an essay: 'Macbeth's success in battle wins him the title Thane of Cawdor.'",
  },
  succeed: {
    why: 'The traps are the double c and the ending -ceed, with a double e: su-CC-EED. Only three common words end in -ceed: this one, proceed and exceed. Almost every other ends -cede.',
    more: "Memory aid: this word doubles everything, two c's and two e's. The noun, success, keeps the double c.",
    tip: "In an essay: 'Macbeth's plan seems to succeed, but each murder makes him less secure.'",
  },
  tongue: {
    why: "The trap is the silent ue at the end: ton-GUE. The word sounds like 'tung', so people write 'tung' or 'tounge', but it ends -gue, with the o straight after the t.",
    more: 'The -gue ending, as in league and plague, comes from French spelling habits. Memory aid: start with ton, then add gue: ton + gue.',
    tip: "In an essay: 'The poem treats the speaker's mother tongue as part of who she is.'",
  },
  truly: {
    why: "The trap is the missing e. True ends in e, but this word drops it: tru + ly. That breaks the usual rule, because most words keep the e before -ly, as in lovely and safely. 'Truely' is the usual slip.",
    more: 'It is one of a handful of exceptions, with duly from due and wholly from whole. Memory aid: true sheds its e only when -ly arrives.',
    tip: "In a letter: 'Yours truly' is an informal sign-off. A formal letter that begins 'Dear Sir or Madam' closes with 'Yours faithfully'.",
  },
  weird: {
    why: "The trap is the ei: w-EI-rd. The sound is 'ee', there is no c before it, and still it is ei. This is one of the best-known exceptions to 'i before e except after c', so it has to be learnt by sight.",
    more: "It comes from the Old English wyrd, 'fate'. The witches in Macbeth are the weird sisters: not strange, but sisters of fate. The meaning 'strange' grew from them.",
    tip: "In an essay: 'Calling the witches the weird sisters links them to fate, not just to strangeness.'",
  },
  temperature: {
    why: "The trap is the vowels in the middle: tem-PER-A-ture. In speech the middle blurs, so people write 'temprature' or 'tempreture', but it is temper + a + ture.",
    more: 'It is related to temper, as in a temperate climate: one that keeps a balanced warmth. Say all four parts, tem-per-a-ture, as you write it.',
    tip: "In your writing: 'The temperature dropped as the door creaked open' uses the setting to build tension.",
  },
  eighth: {
    why: "The trap is the end: eight + h. The t of eight and the added h make the th sound, so the word has two h's, one silent and one sounded. 'Eigth' leaves out the first h.",
    more: 'Other ordinal numbers add -th the same way: six gives sixth, ten gives tenth. Eight already ends in t, so only an h is added: eight + h.',
    tip: 'Check it: write eight first, then add h: e-i-g-h-t-h.',
  },
  twelfth: {
    why: "The trap is the f: twel-F-th. In speech the f is often dropped, so people write 'twelth', but the word is built from twelve, with the v changed to f before the th.",
    more: 'The same v-to-f change happens in fifth, from five. The comedy Twelfth Night takes its name from the twelfth night of Christmas, when the old festive season ended.',
    tip: 'Check it: think of twelve, swap the v for f, and add th: twelf + th.',
  },
  vehicle: {
    why: "The trap is the silent h: ve-H-icle. You hear 'vee-ick-ul', so people write 'vehical' or 'veicle', but the word keeps an h after the e and ends -icle.",
    more: "It comes from the Latin vehere, 'to carry'. The -icle ending, as in article and particle, never changes to -ical in this word.",
    tip: "In an essay: 'The car becomes a vehicle for the writer's ideas about freedom.' A vehicle can carry an idea as well as people.",
  },
  medicine: {
    why: "The trap is the i in the middle: med-I-cine. People write 'medecine' or 'medicin', but the word is medi + cine: medi as in medical, then cine at the end.",
    more: "It comes from the Latin medicina, from medicus, 'doctor'. Medical keeps the same medi- start, so if you can spell medical, you have the first half.",
    tip: "In an essay: 'The Inspector's lesson is a bitter medicine that the older generation refuses to take.'",
  },
  loneliness: {
    why: 'The trap is the i in the middle: lonel-I-ness. The word is lonely + ness, and the y of lonely changes to i before the ending: loneli + ness.',
    more: 'The same rule turns empty into emptiness and ugly into ugliness. Spell the root, lonely, then change its y to i and add -ness.',
    tip: "In an essay: 'Scrooge's loneliness is the price he has paid for his greed.'",
  },
  independent: {
    why: "The trap is the ending: independ-ENT, not -ant. People often write 'independant'. Every vowel after the first is an e: in-de-pend-ent.",
    more: "The noun takes -ence to match. Memory aid: depend, the word at its heart, has only e's, and so does the ending.",
    tip: "In an essay: 'Jane Eyre is fiercely independent, refusing to marry without love.'",
  },
  intelligence: {
    why: "The traps are the double l and the ending -ence: inte-LL-ig-ENCE. People write 'inteligence' or 'intelligance'. The word comes from the Latin intellegere, 'to understand'.",
    more: "Intellegere joins inter, 'between', and legere, 'to choose': this is the power to choose between ideas. The r of inter turned into l where the two parts met, giving the double l.",
    tip: "In an essay: 'Piggy's intelligence makes him the boys' best hope, and their easiest target.'",
  },
  laboratory: {
    why: "The trap is the run of vowels in the middle: lab-OR-a-tor-y. In quick speech they blur into 'lab-ra-tree', so people write 'labratory' or 'laboratary'. It is labor + a + tory.",
    more: "It comes from the Latin laborare, 'to work': a laboratory is a workplace. Unlike the British word labour, it has no u: l-a-b-o-r.",
    tip: "In an essay: 'Victor's laboratory becomes a place of secrecy and guilt.'",
  },
  ridiculous: {
    why: "The trap is the first vowel: r-I-diculous, not 're'. People write 'rediculous' because the start sounds like 'ruh'. The word comes from ridicule, so it begins rid-.",
    more: "Both come from the Latin ridere, 'to laugh', so something ridiculous deserves to be laughed at. If you can spell ridicule, you have the start: ridicul + ous.",
    tip: "In an essay: 'The pigs' rewritten commandments grow ridiculous, yet the animals accept them.'",
  },
  category: {
    why: "The trap is the middle vowel: cat-E-gory. In speech it sounds like 'cat-uh-gory', so people write 'catagory', but the vowel after cat is an e.",
    more: "It comes from the Greek kategoria, 'a statement' or 'a charge'. Say it as it is spelt, cat-e-go-ry, putting weight on the e.",
    tip: "In an essay: 'The poems fall into two categories: those that celebrate power and those that question it.'",
  },
  aggressive: {
    why: "The trap is two pairs of double letters: a-GG-re-SS-ive. People write 'agressive' with one g. Count them: double g, then double s.",
    more: "It comes from the Latin aggredi, 'to attack', from ad, 'towards', and gradi, 'to step'. The ad became ag before the g, which is where the double g comes from.",
    tip: "In an essay: 'His aggressive questions put the family on the defensive.'",
  },
  apparently: {
    why: "The traps are the double p and the ending -ently: a-PP-ar-ent-ly. People write 'apparantly' or 'aparently'. The word is apparent + ly, and apparent ends -ent.",
    more: "It comes from the Latin apparere, 'to appear', which explains the double p. Memory aid: there is a parent in it: ap + parent + ly.",
    tip: "In an essay: 'The family is apparently happy, but the Inspector exposes the cracks.'",
  },
  appearance: {
    why: 'The traps are the double p and the ending -ance: a-PP-ear-ANCE. The word is appear + ance, so keep the whole of appear, ear and all, then add -ance, not -ence.',
    more: 'Memory aid: appear has an ear in it, and the ending is -ance, as in a dance: appear + ance.',
    tip: "In an essay: 'Hyde's appearance disgusts everyone, though no one can say exactly why.'",
  },
  atmosphere: {
    why: 'The traps are the ph and the ending -ere: atmo-SPH-ERE. The second part is sphere, a ball, from Greek, with ph for the f sound and -ere at the end.',
    more: "It joins two Greek words: atmos, 'vapour', and sphaira, 'ball': the ball of air around the Earth. In English writing it also means the mood of a place.",
    tip: "In an essay: 'The fog creates a tense atmosphere, hiding every face on the street.'",
  },
  audience: {
    why: "The trap is the ending: audi-ENCE, not -ance. People write 'audiance'. The word starts audi-, from the Latin audire, 'to hear', and ends -ence.",
    more: 'Audi- appears in audio, audition and audible: all to do with hearing. An audience is first of all a group of listeners.',
    tip: "In an essay: 'Dramatic irony lets the audience know more than the characters on stage.'",
  },
  punctuation: {
    why: "The trap is the ct in the middle: pun-CT-u-ation. In speech the c and t blur, so people write 'puncuation' or 'punctiation'. The word is punctu + ation.",
    more: "It comes from the Latin punctum, 'a point', as in punctual and puncture. These marks are points that guide a reader through a sentence.",
    tip: "In an essay: 'The poet's heavy punctuation slows the line to a halt.'",
  },
  explanation: {
    why: "The trap is the missing i: explain has ai, but the noun drops the i: expl-A-nation. People write 'explaination', but it is ex + plan + ation.",
    more: 'The same thing happens to proclaim and proclamation, and to acclaim and acclamation: the ai of the verb becomes a in the noun.',
    tip: 'Check it: think of the plan inside it: ex + plan + ation.',
  },
  accidentally: {
    why: "The trap is the -ally ending: accident-ALLY. People write 'accidently', leaving out the al, but the word is accidental + ly, with a double c at the start and a double l at the end.",
    more: 'Adjectives ending -al keep their al before -ly: final gives finally, and incidental gives incidentally. Say all five beats: ac-ci-den-tal-ly.',
    tip: "In your writing: 'He accidentally knocked the vase' grows tenser as 'His elbow caught the vase'.",
  },
  ceiling: {
    why: "The trap is the ei after c: c-EI-ling. This is the rule working as it should: after c, write ei. The 'ee' sound might tempt you to write 'cieling'.",
    more: "The rule 'i before e, except after c' holds for the 'ee' sound: conceit, perceive, conceive. This word starts with the c, so the ei follows straight away.",
    tip: "In your writing: 'Cracks ran over the ceiling like a spider's web' gives a room a sense of decay.",
  },
  deceive: {
    why: "The trap is the ei after c: dec-EI-ve. The 'ee' sound follows a c, so the rule is ei, never 'decieve'.",
    more: "It comes from the Latin decipere, 'to catch out' or 'to trick'. The noun deceit keeps the ei, but deception has none.",
    tip: "In an essay: 'Iago deceives Othello by seeming honest.'",
  },
  exaggerate: {
    why: "The trap is the double g and the single r: exa-GG-e-R-ate. People write 'exagerate' or 'exaggerrate'. Memory aid: the word exaggerates its g's, but not its r.",
    more: "It comes from the Latin exaggerare, 'to heap up', from agger, 'a heap'. To exaggerate is to heap up more than is really there.",
    tip: 'In your writing: in an article, one well-chosen exaggeration makes a point vivid, but too many make you sound unreliable.',
  },
  favourite: {
    why: 'There are two traps: the British -our and the ending -ite: fav-OUR-ite. American spelling drops the u, but British spelling keeps it, and the end is -ite, not -it.',
    more: 'It comes from favour, which keeps the u in British English, just as colour and honour do. Build it as favour + ite.',
    tip: 'Check it: in your writing, keep British spellings throughout: favourite, colour, centre.',
  },
  column: {
    why: "The trap is the silent n at the end: colum-N. You hear 'col-um', so people write 'colum', but the word ends -mn.",
    more: 'The n is sounded in columnist, someone who writes a regular newspaper column, which is a way to remember it. Hymn and condemn also end with a silent n after the m.',
    tip: 'Check it: think of columnist, where you can hear the n, and keep it in column.',
  },
  autumn: {
    why: "The trap is the silent n at the end: autum-N. You hear 'or-tum', so people write 'autum', but the word ends -mn. The au at the start sounds like 'or'.",
    more: "The n is sounded in autumnal, 'to do with autumn', which helps you remember it. The word comes from the Latin autumnus.",
    tip: "In your writing: 'The autumn leaves fell like burnt paper' sets a season and a mood together.",
  },
  doubt: {
    why: "The trap is the silent b: dou-B-t. You hear 'dowt', but the word keeps a b that is never sounded.",
    more: "The b was added by scholars to match the Latin dubitare, 'to waver', which also gives dubious. If you can spell dubious, you can see where the b came from.",
    tip: "In an essay: 'The ending leaves the reader in doubt about whether justice has been done.'",
  },
  debt: {
    why: "The trap is the silent b: de-B-t. You hear 'det', but the word keeps a b that is never sounded.",
    more: "Scholars put the b back to match its Latin root, debitum, 'what is owed', which also gives debit, where the b is sounded.",
    tip: "In an essay: 'Pip's sense of debt to the convict slowly grows into love.'",
  },
  solemn: {
    why: "The trap is the silent n at the end: solem-N. You hear 'sol-um', so people write 'solem', but the word ends -mn.",
    more: "The n comes back in solemnity, where you can hear it. It comes from the Latin sollemnis, 'ceremonial', which is why it suits serious ceremonies.",
    tip: "In your writing: 'A solemn hush fell over the hall' sets a serious mood in a few words.",
  },
  colleague: {
    why: "The traps are the double l and the -league ending: co-LL-eague. People write 'collegue' or 'colleage'. The word ends -eague, as league does.",
    more: "It comes from the French collègue, from the Latin collega, 'one chosen along with another'. Memory aid: colleagues are in the same league: col + league.",
    tip: "In a letter: 'My colleagues and I would like to thank you' is a polite opening.",
  },
  pursue: {
    why: "The trap is the first vowel: PUR-sue, not per-. People write 'persue', but the word begins pur-, as in purpose. It ends -sue, like the name Sue.",
    more: "It comes from the Old French poursuir, 'to chase', which explains the pur-. The noun is pursuit, with ui.",
    tip: "In an essay: 'Victor's choice to pursue his creation over the ice shows his obsession.'",
  },
  secretary: {
    why: "The traps are the ending -ary and the e in the middle: secr-E-t-ARY. People write 'secretery' or 'secratary'. The word is secret + ary.",
    more: 'A secretary was first someone trusted with secrets, from the Latin secretarius. If you can spell secret, add -ary: secret + ary.',
    tip: 'Check it: secret + ary. The secret is in the word.',
  },
  persistent: {
    why: "The trap is the ending: persist-ENT, not -ant. People write 'persistant'. The vowel in the ending is an e: persist + ent.",
    more: "The noun is persistence, ending -ence. It comes from the Latin persistere, 'to stand firm'.",
    tip: "In an essay: 'The Inspector's persistent questions strip away the family's pretences.'",
  },
  hygiene: {
    why: "The traps are the y and the ie: h-Y-g-IE-ne. The 'eye' sound after the h is spelt y, and the 'ee' sound is spelt ie, following 'i before e'.",
    more: 'It comes from Hygieia, the Greek goddess of health, which is where the y and the ie come from. The adjective is hygienic.',
    tip: 'Check it: h, y, g, ie, ne: hy + gie + ne.',
  },
  metaphor: {
    why: 'The tricky parts are the ph, which makes an f sound, and the ending -or, not -er or -ore. Words with ph for the f sound usually come from Greek.',
    more: "It comes from the Greek metapherein, 'to transfer': a metaphor carries the qualities of one thing over to another.",
    tip: "Use it in a sentence: 'The metaphor presents the sea as a monster, suggesting its power to destroy.'",
  },
  simile: {
    why: "The tricky part is the ending: simile has three syllables, sim-i-lee, but the last sound is spelt with a single e. People often write 'similie' or 'simily'.",
    more: "It comes from the Latin similis, 'like', the same root as similar, which helps with the first part: simil-. Similes compare using 'like' or 'as'.",
    tip: "Use it in a sentence: 'The simile compares the exhausted men to old beggars, stripping them of heroism.'",
  },
  allegory: {
    why: "The tricky parts are the double l at the start and the ending -ory: a-ll-eg-ory. Some write 'alegory' or 'allegary', but it is allegory.",
    more: "It comes from the Greek allos, 'other', and agoreuein, 'to speak': an allegory says one thing and means another. The adjective is allegorical.",
    tip: "Use it in a sentence: 'Animal Farm is an allegory of the Russian Revolution.'",
  },
  soliloquy: {
    why: "The tricky part is the ending, -loquy, with qu and a final y. It is easy to write 'soliloquey', but the word ends -quy.",
    more: "It comes from the Latin solus, 'alone', and loqui, 'to speak'. Solus gives solo and solitary; loqui gives eloquent. The plural is soliloquies.",
    tip: "Use it in a sentence: 'In his soliloquy before the murder, Macbeth imagines a dagger leading him towards Duncan.'",
  },
  juxtaposition: {
    why: "The tricky part is the start, juxta-, with a u and an x: jux-ta-po-si-tion. People often write 'juxtoposition', but the first part is juxta, the Latin for 'next to'.",
    more: 'Split it into two parts: juxta + position. If you can spell position, you only have to remember juxta. The verb is juxtapose.',
    tip: "Use it in a sentence: 'The juxtaposition of light and dark images highlights the conflict between good and evil.'",
  },
  onomatopoeia: {
    why: 'The tricky part is the ending, -poeia: o-no-ma-to-POE-ia. After the p come four vowels in a row: o, e, i, a. Learn it in three chunks: ono, mato, poeia.',
    more: "It comes from the Greek onoma, 'name', and poiein, 'to make': making a name from a sound. The poe part shares its root with poem and poet.",
    tip: "Use it in a sentence: 'In Anthem for Doomed Youth, Owen's onomatopoeia brings the noise of the guns into the poem.'",
  },
  alliteration: {
    why: "The tricky parts are the double l and the single t: a-ll-i-t-eration. People often write 'aliteration' or 'allitteration'.",
    more: "Memory aid: alliteration is all + iteration, and iteration means repeating, which is exactly what alliteration does with sounds. The word actually comes from the Latin littera, 'letter', though English keeps just one t.",
    tip: "Use it in a sentence: 'The harsh alliteration of the hard b sound makes the battle feel violent.'",
  },
  personification: {
    why: 'The tricky part is the join: personify becomes personif-ication. The y of personify changes to i, then -cation is added: per-son-i-fi-ca-tion.',
    more: 'The same pattern turns classify into classification and justify into justification. If you can spell personify, change the y to i and add -cation.',
    tip: "Use it in a sentence: 'The personification of the wind as howling makes the storm seem angry and alive.'",
  },
  denouement: {
    why: 'The tricky part is the middle, -oue-: de-NOUE-ment. The word is French, which is why the vowels look unusual. Say it as day-NOO-mon, but spell it d-e-n-o-u-e-m-e-n-t.',
    more: "It means 'untying' in French, from dénouer, 'to untie'. Some English writers keep the French accent, dénouement, and that spelling is also correct: this game accepts it too.",
    tip: "Use it in a sentence: 'In the denouement, Scrooge wakes on Christmas morning a changed man.'",
  },
  protagonist: {
    why: "The tricky part is the middle. People often write 'protaganist', but after the g comes an o, because the word is prot + agonist.",
    more: "It comes from the Greek protos, 'first', and agonistes, 'actor' or 'competitor': the first actor. Antagonist has the same ending, so learn the two together.",
    tip: "Use it in a sentence: 'Scrooge is the protagonist of A Christmas Carol, and the story follows his transformation.'",
  },
  antagonist: {
    why: "The tricky part is the same as in protagonist: after the g comes an o, because the word is ant + agonist. People often write 'antaganist'. Ant comes from anti, 'against'.",
    more: "It comes from the Greek antagonistes, 'opponent'. The verb antagonise means to make someone hostile, and the noun antagonism means hostility.",
    tip: "Use it in a sentence: 'Juliet's hot-headed cousin acts as an antagonist, provoking the fight that ends in Romeo's banishment.'",
  },
  foreshadowing: {
    why: "The tricky part is the start: fore, meaning 'before', not for. Foreshadowing hints at what will happen before it happens, so it uses the fore of before: fore + shadowing.",
    more: 'Other words with fore in this sense include forecast, foresee and forewarn. Then add shadow and -ing: fore + shadow + ing.',
    tip: "Use it in a sentence: 'The witches' predictions act as foreshadowing, preparing us for Macbeth's rise and fall.'",
  },
  verisimilitude: {
    why: "The tricky part is the run of i's: ver-i-si-mil-i-tude. After ver, all four vowels are i, until the ending -tude.",
    more: "Split it into two Latin parts: veri, 'true' (as in verify), and similitude, 'likeness' (as in similar). Verisimilitude is the likeness of truth.",
    tip: "Use it in a sentence: 'The novella creates verisimilitude through letters and eyewitness accounts.'",
  },
  enjambment: {
    why: "The tricky part is the silent b: en-JAMB-ment, like the b in lamb. The word comes from the French jambe, 'leg', because the sentence strides over the end of the line.",
    more: 'Some writers use the French spelling, enjambement, with an extra e, and that spelling is also correct: this game accepts it too. Its opposite is an end-stopped line.',
    tip: "Use it in a sentence: 'The enjambment makes the sentence spill over into the next line, mirroring the speaker's racing thoughts.'",
  },
  caesura: {
    why: "The trap is the ae at the start: c-AE-sura. It is said 'siz-yoor-a', and people often swap the vowels to write 'ceasura'. It begins with the Latin ae: caes + ura. Some dictionaries also list a rarer form, cesura, and that spelling is also correct: this game accepts it too, though caesura is the usual British spelling.",
    more: "It comes from the Latin caedere, 'to cut': a caesura cuts a line in two. Memory aid: the same ae begins Caesar, so picture Caesar cutting a line in half.",
    tip: "In an essay: 'A full stop in mid-line creates a caesura, making the reader pause on the word before it.'",
  },
  hyperbole: {
    why: "The trap is the ending: hyper-BOLE, said 'hy-PER-bo-lee'. People write 'hyperbowl' or 'hyperboly', but the last sound is spelt with a single e, as at the end of catastrophe.",
    more: "It comes from the Greek hyper, 'beyond', and ballein, 'to throw': hyperbole throws words beyond the truth. Hyper- also begins hyperactive, so the start is easy to remember.",
    tip: "In an essay: 'Calling the wait \"forever\" is hyperbole that shows the speaker's impatience.'",
  },
  metaphorical: {
    why: "The word is metaphor + ical. The trap is keeping the root whole, ph and -or included, before the ending: meta-PHOR-ical. People write 'metaphorcal' or 'metaforical'.",
    more: 'Adding -ical turns a noun into an adjective, as in historical. The adverb then adds -ly, with a double l: metaphorically.',
    tip: "In an essay: 'The storm is metaphorical, mirroring the chaos in the king's mind.'",
  },
  oxymoron: {
    why: "The traps are the y and the ending -on: ox-Y-mor-ON. People write 'oxymoran' or 'oximoron'. The word is two Greek parts: oxy, 'sharp', and moron, 'dull'.",
    more: "An oxymoron is itself an oxymoron: it means 'sharp-dull', or pointedly foolish. The same oxy- begins oxygen, so if you can spell oxygen you have the start.",
    tip: "In an essay: 'Romeo's oxymorons, such as \"cold fire\", show how confused his feelings are.'",
  },
  sibilance: {
    why: "The trap is the ending: sibil-ANCE, not -ence. People write 'sibilence' or 'sibalance'. The vowels run i, i, a, e: s-i-b-i-l-a-n-c-e.",
    more: "It comes from the Latin sibilare, 'to hiss'. A sound that hisses is called sibilant, and the name of the technique ends -ance.",
    tip: "In an essay: 'The sibilance in the line hisses like the sea against the shore.'",
  },
  assonance: {
    why: "The traps are the double s and the ending -ance: a-SS-on-ANCE. People write 'asonance' or 'assonence'. The word is from the Latin assonare, 'to answer with a sound'.",
    more: "Assonare joins ad, 'to', and sonare, 'to sound', as in sonic. The ad became as before the s, which is where the double s comes from.",
    tip: "In an essay: 'The long o sounds slow the line, an assonance that suits its sadness.'",
  },
  rhetorical: {
    why: "The traps are the silent h and the ending -ical: r-H-etor-ical. People write 'retorical'. The word comes from the Greek rhetor, 'a public speaker', so it keeps the Greek rh.",
    more: 'Rhetoric is the art of moving listeners through speech, studied in ancient Greece and Rome. A rhetorical question is asked for its impact, not for an answer.',
    tip: "In an essay: 'The rhetorical question makes readers answer it for themselves, in the writer's favour.'",
  },
  anecdote: {
    why: "The trap is the vowels: an-EC-dote. People write 'annecdote', or confuse it with antidote, which is a different word. It is an + ec + dote, with one n.",
    more: "It comes from the Greek anekdota, 'things not published': private stories. An antidote, by contrast, is a cure for poison.",
    tip: "In an essay: 'The writer opens with an anecdote about her grandmother, drawing the reader in.'",
  },
  imperative: {
    why: "The trap is the middle vowel: imper-A-tive. People write 'imperitive' or 'imparative'. The word is imper + a + tive, from the Latin imperare, 'to command'.",
    more: "Imperare also gives emperor and empire: a commander's words. In a sentence, an imperative verb usually comes first and gives an order: 'Act now.'",
    tip: 'In an essay: \'Imperatives such as "Look" and "Imagine" pull the reader straight in.\'',
  },
  colloquial: {
    why: "The traps are the double l and the qu: co-LL-o-QU-ial. People write 'colloquel' or 'coloquial'. It comes from the Latin colloquium, 'a conversation'.",
    more: "Colloquium joins con, 'together', and loqui, 'to speak': speaking together. The con became col before the l, which gives the double l.",
    tip: 'In an essay: \'The colloquial "mate" makes the speaker sound friendly and ordinary.\'',
  },
  euphemism: {
    why: "The traps are the eu at the start and the ph: EU-PH-emism. People write 'uphemism' or 'euphamism'. Both the eu and the ph come from Greek.",
    more: "It comes from the Greek eu, 'well', and pheme, 'speaking': speaking well of something unpleasant. Eu- also begins euphoria, a feeling of great happiness.",
    tip: 'In an essay: \'The euphemism "let go" hides the harshness of being sacked.\'',
  },
  satirical: {
    why: "The word is satire + ical, and the e of satire drops before the ending: satir-ICAL. People write 'satyrical', confusing it with satyr, a goat-man of Greek myth.",
    more: 'Satire mocks people or institutions to make readers see their faults. Animal Farm is a satire of the Russian Revolution, and its humour has a serious point.',
    tip: "In an essay: 'Orwell's satirical tone makes the pigs' greed both funny and frightening.'",
  },
  sonnet: {
    why: "The trap is the double n: so-NN-et. People write 'sonet' or 'sonnett'. It has one double letter and a single t at the end: s-o-n-n-e-t.",
    more: "It comes from the Italian sonetto, 'a little song'. Its fourteen lines often shift their thought at a set point, called the volta, or turn.",
    tip: "In an essay: 'The first conversation between Romeo and Juliet forms a sonnet, so their love sounds like poetry from the start.'",
  },
  iambic: {
    why: "The trap is the start, iamb-: i-AMB-ic. People write 'iambik' or 'iambec'. The b belongs to iamb, the name of the beat unit, and -ic ends the adjective.",
    more: "An iamb is a pair of syllables, unstressed then stressed, as in 'today'. Five of them make a line of five beats, the beat of most speeches in Macbeth.",
    tip: "In an essay: 'The iambic beat breaks when Macbeth's thoughts race, showing his panic.'",
  },
  pentameter: {
    why: "The trap is the ending: penta-METER, not -metre. British English spells the unit of length metre, but this word keeps -meter. It is penta, 'five', and meter, 'measure'.",
    more: 'Penta- means five, as in pentagon. A line of pentameter has five strong beats; with each beat falling on the second syllable of a pair, it is the usual line of English verse drama around 1600.',
    tip: "In an essay: 'The witches break from pentameter into chanting four-beat lines.'",
  },
  prologue: {
    why: "The trap is the ending: pro-LOGUE, with a silent ue. People write 'prolog' or 'prologe'. The word comes from Greek: pro, 'before', and logos, 'speech'.",
    more: 'Pro- here means before, as in programme, a plan set out in advance. The same -logue ending, from logos, closes several words about speech, and British English keeps the ue in all of them.',
    tip: "In an essay: 'The Prologue tells us that the lovers will die, so the tension comes from how, not whether.'",
  },
  dialogue: {
    why: "The traps are the ia and the ending -logue: d-IA-LOGUE. People write 'diologue', or stop after the g. British English keeps the silent ue at the end.",
    more: "It comes from the Greek dia, 'through', and logos, 'speech': speech passing between people. It does not mean two speakers: the di- here is not 'two'.",
    tip: "In an essay: 'The short, clipped dialogue shows the tension between them.'",
  },
  narrator: {
    why: "The traps are the double r and the ending -or: na-RR-at-OR. People write 'narator' or 'narrater'. The word comes from narrate, which has the same double r.",
    more: "It comes from the Latin narrare, 'to tell'. A first-person one says 'I'; a third-person one stands outside the story. An unreliable one cannot be trusted.",
    tip: "In an essay: 'Jane, as narrator, looks back on her childhood with an adult's understanding.'",
  },
  chronological: {
    why: "The traps are the ch, which sounds like k, and the -logical ending: CHRON-o-logical. People write 'cronological' or 'chronalogical'. Chron comes from the Greek khronos, 'time'.",
    more: "The ending -logical comes from logos, 'reasoning': following the logic of time. The same chron gives chronic and synchronise.",
    tip: "In an essay: 'The story is told out of chronological order, so we learn the ending first.'",
  },
  cyclical: {
    why: "The traps are the y and the three c's, which do not all sound alike: C-Y-C-li-C-al. The first c is soft, the other two hard. People write 'cylical' or 'cyclicle'. It is cycle + ical, with the e dropped.",
    more: "It comes from the Greek kyklos, 'circle', which is where the y comes from, as in bicycle. A cyclical structure ends where it began.",
    tip: "In an essay: 'The cyclical structure of Blood Brothers, opening and closing with the same deaths, suggests nothing can change.'",
  },
  symbolism: {
    why: "The trap is the y: s-Y-mbolism. People write 'simbolism' or 'symbolisim'. The word is symbol + ism, and the y comes from Greek, as in sympathy.",
    more: "It comes from the Greek symbolon, 'a token': a sign that stands for something else. Add -ism to symbol, keeping every letter: symbol + ism.",
    tip: "In an essay: 'The colour red builds a symbolism of danger and passion through the play.'",
  },
  imagery: {
    why: "The trap is the e in the middle: imag-E-ry. The word is image + ry, so the e of image stays. In speech it sounds like 'im-idge-ree', and people write 'imagry'.",
    more: "It comes from the Latin imago, 'likeness'. In English writing it means all the pictures a text creates for the senses, not only for the eyes.",
    tip: "In an essay: 'The imagery of darkness grows thicker as Macbeth's crimes mount.'",
  },
  connotation: {
    why: "The trap is the double n: co-NN-otation. The word is con + notation: the n of con meets the n of notation. People write 'conotation'.",
    more: "Con- means 'together with': a connotation is a meaning that comes along with the main one. Its partner term, for the literal meaning, drops the con: denotation.",
    tip: 'In an essay: \'The word "crimson" carries connotations of blood and danger.\'',
  },
  ambiguous: {
    why: "The trap is the ending: ambig-UOUS. People write 'ambigous' or 'ambiguos'. There is a u before the -ous, which you can hear: am-BIG-you-us.",
    more: "It comes from the Latin ambi, 'both ways', as in ambidextrous: something ambiguous can be read two ways. The noun is ambiguity.",
    tip: "In an essay: 'The ending is ambiguous: we never learn whether the ghost was real.'",
  },
  hamartia: {
    why: "The trap is the run of a's: ha-MAR-ti-a. People write 'hamatia' or 'hamartier'. The word is Greek, and three of its four vowels are a: h-a-m-a-r-t-i-a.",
    more: "It comes from the Greek hamartanein, 'to miss the mark', as an archer misses a target. Aristotle used it for the error or flaw that brings a hero down.",
    tip: "In an essay: 'Macbeth's hamartia, his hunger for power, turns a loyal general into a tyrant.'",
  },
  tragedy: {
    why: "The trap is the g: tra-GE-dy, with no d before it. People write 'tradgedy', adding a d as in hedge or badge, but the word is t-r-a-g-e-d-y.",
    more: "It comes from the Greek tragoidia, 'goat song', perhaps because a goat was the prize at early drama contests. The adjective is tragic, with the same trag- and no d.",
    tip: "In an essay: 'As a tragedy, the play leads its hero step by step towards his death.'",
  },
  cacophony: {
    why: "The traps are the c's and the ph: ca-CO-PH-ony. People write 'cacophany' or 'cacaphony'. The vowels run a, o, o, then y: c-a-c-o-ph-o-n-y.",
    more: "It comes from the Greek kakos, 'bad', and phone, 'sound', as in telephone and microphone. Its opposite, a pleasant sound, is euphony, from eu, 'good'.",
    tip: 'In your writing: a cacophony of horns and engines can open a city scene with noise.',
  },
  stereotype: {
    why: "The traps are the ereo and the y: ster-EO-t-Y-pe. People write 'sterotype' or 'stereotipe'. It is stereo + type: the stereo of stereo sound, then type.",
    more: "It comes from the Greek stereos, 'solid', and was first a printing word: a solid metal plate that printed the same image again and again. A stereotype repeats one fixed picture of a group.",
    tip: "In an essay: 'The writer challenges the stereotype of teenagers as lazy.'",
  },
  archetype: {
    why: "The trap is the ch, which sounds like k: AR-CHE-type. People write 'arketype' or 'archtype'. It is arche + type, and the e after the ch stays.",
    more: "It comes from the Greek arkhe, 'first' or 'original', and typos, 'model': the first model that all later copies follow, such as the wise mentor or the trickster.",
    tip: "In an essay: 'The ghost fits the archetype of the guide who leads the hero towards change.'",
  },
  antithesis: {
    why: "The traps are the anti and the -thesis ending: ANTI-THESIS. People write 'antithisis' or 'anthithesis'. It is anti, 'against', plus thesis, 'a placing'.",
    more: "It comes from the Greek antitithenai, 'to set against'. The plural follows the Greek pattern: antitheses, as theses comes from thesis.",
    tip: 'In an essay: \'"It was the best of times, it was the worst of times" is a famous antithesis.\'',
  },
  ellipsis: {
    why: "The traps are the double l and the single p: e-LL-i-P-sis. People write 'elipsis' or 'ellipssis'. The word ends -sis, like many words from Greek.",
    more: "It comes from the Greek elleipsis, 'falling short' or 'leaving out'. The plural is ellipses. In a character's speech, the three dots can show a voice trailing away.",
    tip: "In an essay: 'The ellipsis at the end of the line suggests the speaker cannot go on.'",
  },
  parenthesis: {
    why: "The traps are the -thesis ending and the e after the r: par-EN-thesis. People write 'parenthasis' or 'parenthisis'. It is par + en + thesis, and the vowels after the a run e, e, i.",
    more: "It comes from the Greek parentithenai, 'to put in beside'. The plural, parentheses, is also a name for the brackets themselves.",
    tip: 'In your writing: a parenthesis lets you add an aside (like this one) without breaking the sentence.',
  },
  apostrophe: {
    why: "The trap is the ending: apostro-PHE, said 'a-POS-truh-fee'. The last sound is spelt phe, not fee or phy. People write 'apostrophy' or 'apostraphe'.",
    more: "It comes from the Greek apostrophos, 'turning away'. In poetry it is also a technique: the speaker turns away to speak to someone absent, or to something that cannot answer, such as the moon.",
    tip: "Check it: an apostrophe shows a missing letter (it's) or that something belongs to someone (Juliet's). Never use one to make a plain plural.",
  },
  auxiliary: {
    why: "The trap is the single l: aux-I-L-iary. People write 'auxillary' with a double l, influenced by words like ancillary, but this word has one l and ends -iary.",
    more: "It comes from the Latin auxilium, 'help'. An auxiliary verb helps the main verb: in 'She has gone', has is the helper and gone is the main verb.",
    tip: 'Check it: say aux-IL-ya-ree, leaning on the single l, as you write it.',
  },
  persuasive: {
    why: "The word is built on persuade, but the d changes to s before the ending: persua-SIVE. People write 'perswasive', or keep the d and write 'persuadive'.",
    more: 'The same d-to-s change gives invasive from invade and evasive from evade. The noun follows it too, with an s.',
    tip: "In an essay: 'The writer's persuasive techniques include statistics and a personal story.'",
  },
  patriarchal: {
    why: "The traps are the ch, which sounds like k, and the -al ending: patri-ARCH-al. People write 'patriachal', leaving out the r. It is patri, 'father', plus arch, 'rule', plus -al.",
    more: "It comes from the Greek patriarkhes, 'father and ruler'. The arch, meaning 'rule', also appears in monarch: one ruler.",
    tip: "In an essay: 'Juliet's father shows his patriarchal power when he chooses her husband.'",
  },
  hierarchy: {
    why: "The traps are the ie at the start and the ch: HIER-ar-CHY. People write 'heirarchy' or 'hierachy'. It is hier, 'sacred', plus archy, 'rule'.",
    more: "It comes from the Greek hierarkhia, the rule of priests, who were ranked one above another. The ie, said 'eye-uh', comes from hieros, 'sacred', as in hieroglyphics.",
    tip: "In an essay: 'The pigs place themselves at the top of the farm's new hierarchy.'",
  },
  apparition: {
    why: "The traps are the double p and the single r: a-PP-a-R-ition. People write 'aparition' or 'apparrition'. It comes from the Latin apparere, 'to appear', which explains the double p.",
    more: 'An apparition is something that appears suddenly, especially a ghost. The same root gives appear, with its double p and a single r.',
    tip: "In an essay: 'The apparitions show Macbeth his future, and he hears only what he wants to hear.'",
  },
  fallacy: {
    why: "The gap needs the word for a mistaken belief: in pathetic fallacy, nature seems to share human feelings. The traps are the double l and the -acy ending: fa-LL-acy, not 'falacy' or 'fallecy'.",
    more: "It comes from the Latin fallere, 'to trick', as in false and fallible. The critic John Ruskin named pathetic fallacy in 1856, and he meant it as a criticism: a false way of seeing nature.",
    tip: "In an essay: 'The storm that rages on the night the king is murdered is pathetic fallacy.'",
  },
  epiphany: {
    why: "The traps are the ph and the -any ending: e-PI-PH-any. People write 'epifany' or 'epiphiny'. The ph comes from Greek, and the vowels run e, i, a, then y.",
    more: "It comes from the Greek epiphaneia, 'a revealing'. In stories it is the moment a character suddenly understands something important about their life.",
    tip: "In an essay: 'Sheila's epiphany comes when she realises her part in Eva's death.'",
  },
  interpretation: {
    why: "The trap is the middle: inter-PRE-tation. People write 'interpritation' or 'interpretion'. Build it from interpret: inter + pret, then add -ation.",
    more: "It comes from the Latin interpres, 'a go-between'. An interpretation goes between a text and its reader, explaining what it might mean, and there can be more than one valid one.",
    tip: "In an essay: 'One interpretation is that the ghost is real; another is that it is guilt made visible.'",
  },
  perspective: {
    why: "The trap is the start: PER-spective, not pre-. People write 'prespective', swapping the e and r. It is per, 'through', plus spective, 'looking': looking through.",
    more: "It comes from the Latin perspicere, 'to look through' or 'to see clearly'. The same spect, 'look', appears in inspect and spectator.",
    tip: "In an essay: 'Seeing the events from a child's perspective makes the cruelty more shocking.'",
  },
  analyse: {
    why: 'The trap is the British ending: analy-SE, not -ze. American spelling uses z, but British English writes analyse, and the y in the middle stays: an-a-ly-se.',
    more: "It comes from the Greek analusis, 'a loosening' or 'breaking up': to analyse is to break something into parts. Paralyse follows the same British pattern.",
    tip: "In an essay: 'To analyse a quotation, pick out a single word and explain what it does.'",
  },
  sceptical: {
    why: "The trap is the British sc: SCEP-tical. American spelling begins with sk, but British English keeps the c of the Latin scepticus, which came from the Greek skeptikos, 'thoughtful'. Say 'skep', write scep.",
    more: 'A sceptic is someone who questions what others accept. The c is hard here, sounding like k, which is unusual before an e in English.',
    tip: "In an essay: 'Scrooge is sceptical about the ghost at first, blaming it on indigestion.'",
  },
  travelled: {
    why: 'The trap is the double l: trave-LL-ed. British English doubles a final l before -ed and -ing, even when the stress falls on the first syllable. American spelling keeps one l.',
    more: 'The same British doubling gives cancelled, labelled and modelled. A traveller doubles it too.',
    tip: "In your writing: 'We travelled through the night' carries more weight than 'We went through the night'.",
  },
  jewellery: {
    why: "The trap is the double l and the -ery: jew-ELL-ery. British English doubles the l of jewel before the ending; American spelling is shorter. People also write 'jewelery' or 'jewlery'.",
    more: 'It comes from jewel, from the Old French jouel. A jeweller sells it, also with a double l. You say three beats, jew-el-ry, but write four: jew-ell-er-y.',
    tip: "In your writing: 'Her jewellery glittered coldly' tells the reader about wealth and character at once.",
  },
  defence: {
    why: 'The trap is the British ending -ence: def-ENCE. American spelling ends -se, but British English writes defence, as it writes offence and pretence.',
    more: 'The verb is defend, with a d, and the adjective defensive takes an s even in British English, so only the noun has the c.',
    tip: "In an essay: 'Gerald's defence is that he cared for Daisy, at least for a while.'",
  },
  fulfil: {
    why: 'The trap is the single l in each half: f-U-L-f-I-L. British English spells it ful + fil, with one l each time. American spelling doubles the final l.',
    more: 'Before an ending that starts with a vowel, British English doubles the final l: fulfilled, fulfilling. But fulfilment keeps one l, because -ment starts with a consonant.',
    tip: "In an essay: 'Macbeth seems to fulfil the witches' predictions, but only by his own hand.'",
  },
  skilful: {
    why: "The trap is the single l's: ski-L-fu-L. British English drops one l of skill before -ful, so it is skil + ful. American spelling keeps both.",
    more: 'The -ful ending always has one l. In British English, skill and will both drop an l before it: skilful, wilful.',
    tip: "In an essay: 'The writer's skilful use of contrast keeps the reader unsure.'",
  },
  manoeuvre: {
    why: 'The trap is the oeu in the middle: man-OEU-vre. British English keeps the French spelling, with o, e and u together, and ends -vre. American spelling is quite different.',
    more: "It comes from the French manoeuvre, 'work done by hand', from the Latin manu operare. You say 'man-oo-ver', but write the French letters: man, oeu, vre.",
    tip: "In an essay: 'Iago's every manoeuvre brings Othello closer to ruin.'",
  },
  rhythm: {
    why: "The trap is that the word has no ordinary vowel: r-H-Y-th-m. The h after the r is silent, the y does a vowel's work, and the word ends -thm. People write 'rythm' or 'rhythem'.",
    more: "Memory aid: Rhythm Helps Your Two Hips Move: r, h, y, t, h, m. It comes from the Greek rhythmos, 'flow', which is where the rh and the y come from.",
    tip: "In an essay: 'The steady rhythm of the lines mimics the marching of the men.'",
  },
  occurrence: {
    why: "The traps are the two pairs of double letters and the ending: o-CC-u-RR-ENCE. People write 'occurence' or 'occurance'. The word is occur + r + ence: the r doubles because the stress falls on cur.",
    more: 'When an ending that starts with a vowel is added to occur, the r doubles: occurring, too. The noun ends -ence, not -ance, so every vowel after the u is an e.',
    tip: "In an essay: 'Ghostly visits are a regular occurrence in Gothic stories.'",
  },
  believable: {
    why: "The trap is the dropped e: the final e of the root word goes before -able: believ + able. People write 'believeable', but the e drops because -able begins with a vowel.",
    more: 'Most words ending in a silent e drop it before -able: love gives lovable, and use gives usable. A few keep it to keep a soft sound, as changeable does.',
    tip: "In an essay: 'The details of the setting make the ghost story believable.'",
  },
  embarrassment: {
    why: "The traps are the two pairs of double letters, double r and double s, before the -ment ending: emba-RR-a-SS-ment. People write 'embarassment', with one r.",
    more: 'Keep the root word whole, then add -ment. Because -ment starts with a consonant, nothing changes where the two parts join.',
    tip: "In an essay: 'The family's embarrassment matters more to them than the girl's death.'",
  },
  harass: {
    why: "The trap is one r and a double s: ha-R-a-SS. People write 'harrass', doubling the r as in embarrass, but this word has only one.",
    more: "It comes from the French harasser, 'to tire out'. Every form keeps the same letters: harassed, harassment. Start with hara, then add the double s.",
    tip: "In an essay: 'The witches harass Macbeth's mind with half-truths.'",
  },
  acquaintance: {
    why: "The traps are the c before the q, and the ending -ance: a-C-QU-aint-ANCE. People write 'aquaintance' or 'acquaintence'. It is ac + quaint + ance.",
    more: 'It comes from the Old French acointier, meaning to make something known. Memory aid: c and q both make a k sound, and this word uses both: ac-quaint. The verb acquaint keeps the same start.',
    tip: "In an essay: 'Mr Collins treats every new acquaintance as a chance to boast of his patroness.'",
  },
  cemetery: {
    why: "The trap is the vowels: c-E-m-E-t-E-ry. Every vowel before the y is an e, though the ending sounds like 'tree' or 'tary'. People write 'cemetary' or 'cematery'.",
    more: "Memory aid: someone passing a cemetery at night cries 'Eee' three times: three e's. It comes from the Greek koimeterion, 'a sleeping place'.",
    tip: "In your writing: 'Mist hung low over the cemetery' sets a Gothic scene in a single line.",
  },
  fascinating: {
    why: "The trap is the silent c after the s: fa-SC-inating. People write 'facinating' or 'fasinating'. The word has both letters, as scene does, then -inating.",
    more: "It comes from the Latin fascinare, 'to bewitch': something fascinating holds you as if under a spell. The sc is like the one in science and scent.",
    tip: "In an essay: 'The writer finds the city both fascinating and frightening.'",
  },
  guarantee: {
    why: "The traps are the silent u and the double e: G-U-arant-EE. People write 'garantee' or 'guarentee'. Gu at the start, a after the r, and ee at the end.",
    more: 'It is a twin of warranty: both come from one old word for protection, which reached English twice, once with g through French and once with w.',
    tip: "In your writing: 'I guarantee you will not regret it' is a bold promise to end a speech.",
  },
  hypocrisy: {
    why: "The traps are the y and the ending -isy: h-Y-pocr-ISY. People write 'hipocrisy' or 'hypocracy', confusing the end with words like democracy. It ends -isy.",
    more: "It comes from the Greek hypokrisis, 'acting a part': a hypocrite plays a part they do not live. Hypo- also begins hypothesis, so the start is shared.",
    tip: "In an essay: 'The play exposes the hypocrisy of a family that preaches respectability.'",
  },
  irrelevant: {
    why: "The traps are the double r and the ending -ant: i-RR-elev-ANT. The word is ir + relevant: the prefix ir- meets the r of relevant. People write 'irelevant' or 'irrelevent'.",
    more: "The prefix in-, 'not', changes to ir- before r, as in irregular and irresponsible. Then keep relevant whole, with its -ant ending.",
    tip: 'Check it: in an essay, cut any quotation that is irrelevant to your point, however impressive it sounds.',
  },
  irresistible: {
    why: "The traps are the double r and the ending -ible: i-RR-esist-IBLE. People write 'irresistable', but resist takes -ible, not -able.",
    more: 'Like irregular, it doubles the r because ir- meets the r of resist. The -ible ending usually follows a root that is not a whole English word, so resist is an exception to learn.',
    tip: "In an essay: 'The witches' words prove irresistible to Macbeth.'",
  },
  leisure: {
    why: "The trap is the ei: l-EI-sure. The sound is the e of 'measure', and the spelling breaks 'i before e'. People write 'liesure' or 'lesure'.",
    more: "It comes from the Old French leisir, 'to be permitted'. Memory aid: leisure and pleasure both end -sure, and both are about enjoyment.",
    tip: "In an essay: 'The wealthy characters live lives of leisure while others labour.'",
  },
  maintenance: {
    why: "The trap is the middle: main-TEN-ance. The verb is maintain, but the noun drops the ai of tain: main + ten + ance. People write 'maintainance' or 'maintenence'.",
    more: 'Memory aid: main-ten-ance, the main ten. The same ai-to-e change appears in sustain and sustenance, and in abstain and abstinence.',
    tip: 'Check it: if you can spell maintain, you are halfway there; just change tain to ten before -ance.',
  },
  millennium: {
    why: "The trap is two pairs of double letters: mi-LL-e-NN-ium. People write 'millenium' with one n. It joins the Latin mille, 'thousand', with its double l, and annus, 'year', with its double n.",
    more: 'Mille gives million and millimetre; annus gives annual and anniversary. Both doubles come from those roots: mill + enn + ium.',
    tip: "Check it: two l's for a thousand, two n's for years. The plural is millennia.",
  },
  mischievous: {
    why: "The traps are the ie and the ending -vous: mis-CHIE-vous. People write 'mischievious', adding an extra i, or 'mischevious'. It has three syllables: mis-chi-vous.",
    more: 'It comes from mischief, so keep the ie of mischief, then change the f to v before -ous: mischie + vous.',
    tip: "In an essay: 'Puck is mischievous, but his tricks cause real chaos.'",
  },
  noticeable: {
    why: 'The trap is the e before -able: notice-ABLE. Usually a silent e drops before -able, but here it stays, because without it the c would sound like k: notic-able.',
    more: 'The same e keeps a g soft in changeable and manageable. A soft c or g needs that e when an ending starting with a, o or u follows.',
    tip: "In an essay: 'There is a noticeable shift in tone as the poem turns to grief.'",
  },
  nuisance: {
    why: "The trap is the ui and the ending -ance: n-UI-s-ANCE. It is said 'new-sance', so people write 'newsance' or 'nuisence'. The u and i sit together, as in suit.",
    more: "It comes from the Old French nuisance, 'harm', from nuire, 'to harm'. Memory aid: a nuisance annoys both U and I, so both letters are in it.",
    tip: "In an essay: 'To Scrooge, the poor are a nuisance, not people to be helped.'",
  },
  parallel: {
    why: "The trap is where the doubling falls: pa-R-a-LL-e-L. One r, then a double l, then another single l. People write 'paralell' or 'parrallel'.",
    more: "Memory aid: the double l in the middle is a pair of parallel lines. It comes from the Greek para allelois, 'beside one another'.",
    tip: "In an essay: 'The two plots run in parallel, so each comments on the other.'",
  },
  parliament: {
    why: "The trap is the silent i: parl-I-ament. It is said 'par-luh-ment', so people write 'parlament', but the word keeps an i after the l.",
    more: "It comes from the French parler, 'to speak': a parliament is a place for talking. Memory aid: I am in parliament: parl + i + am + ent.",
    tip: 'In your writing: a letter to your MP might ask them to raise an issue in Parliament.',
  },
  perseverance: {
    why: "The traps are the extra r people add and the ending: per-SEV-er-ANCE. 'Perserverance' and 'perseverence' are both common. Build it from persevere, per + severe, then drop the e and add -ance.",
    more: "It comes from the Latin perseverare, 'to persist', from per, 'through', and severus, 'strict'. Pushing through something severe is exactly what the word means.",
    tip: "In an essay: 'Jane's perseverance through cruelty at school shapes the woman she becomes.'",
  },
  playwright: {
    why: 'The trap is the ending: play-WRIGHT, not -write. A playwright writes plays, but the word is not write: a wright is a maker, as in shipwright and wheelwright.',
    more: 'Wright is an old English word for a worker or maker. A playwright is a maker of plays, just as a wheelwright makes wheels. The w is silent, and so is the gh.',
    tip: "In an essay: 'The playwright uses the Inspector to voice his own views.'",
  },
  possession: {
    why: "The trap is the two pairs of double s: po-SS-e-SS-ion. The word is possess + ion, and both pairs stay. People write 'posession' or 'possesion'.",
    more: 'Keeping the root whole works the same way for obsession from obsess and confession from confess.',
    tip: "In your writing: describing a character's one prized possession reveals what they value.",
  },
  preferred: {
    why: "The trap is the double r: pre-FE-RR-ed. Prefer is stressed on its last syllable, pre-FER, so the r doubles before -ed and -ing. People write 'prefered'.",
    more: 'Compare preference, where the stress moves to the start, PREF-er-ence, and the r does not double. Where the stress lands decides the spelling.',
    tip: 'Check it: say the word out loud. If the stress falls on fer, double the r: preferring, too.',
  },
  prejudice: {
    why: "The trap is the middle: pre-JU-dice, with no d before the j. People write 'predjudice' or 'prejudise'. It is pre, 'before', plus judice, from judge: judging before you know.",
    more: "It comes from the Latin praejudicium, 'judgement in advance'. Pre- means before, as in predict and prepare.",
    tip: "In an essay: 'The novel shows how first impressions can harden into prejudice.'",
  },
  pronunciation: {
    why: "The trap is the missing o: pronounce has ou, but this word drops the o: pro-NUN-ciation. People write 'pronounciation', but it is pro + nun + ciation.",
    more: 'The same change happens to denounce and denunciation, and to renounce and renunciation. Memory aid: a nun sits in the middle of it: pro + nun + ciation.',
    tip: "Check it: the verb keeps the ou (pronounce); the noun does not. Say 'pro-nun-see-ay-shun' as you write.",
  },
  questionnaire: {
    why: "The traps are the double n and the ending -aire: question-N-AIRE. People write 'questionaire' with one n. The word is French, so it keeps the French ending.",
    more: "It comes from the French questionner, 'to ask', which has a double n, plus the ending -aire. Compare millionaire, which has only one n in English.",
    tip: "In your writing: an article can open with a fact from a questionnaire: 'Nine in ten pupils said...'",
  },
  receipt: {
    why: "The traps are the ei after c and the silent p: rec-EI-P-t. People write 'reciept' or 'receit'. The ei follows the rule after c, and the p is there but never sounded.",
    more: "It comes from the Latin recepta, 'things taken'. The p was lost in French, and English scholars later put it back in the spelling to show the Latin, though it was never said.",
    tip: "Check it: write rec, then ei for the 'ee' after c, then the silent p and the t: rec + ei + pt.",
  },
  repetition: {
    why: "The trap is the middle vowel: rep-E-tition. The verb is repeat, with ea, but the noun has only an e: re + pe + tition. People write 'repitition' or 'repeatition'.",
    more: 'The ea of repeat shortens to e in the noun, just as the sound shortens when you say it: re-pe-TI-tion. The adjective repetitive keeps the same letters.',
    tip: "In an essay: 'The repetition of \"never\" hammers home the speaker's despair.'",
  },
  sacrifice: {
    why: "The trap is the middle vowel: sacr-I-fice. People write 'sacrafice' or 'sacrifise'. It joins the Latin sacer, 'holy', and facere, 'to make': sacri + fice.",
    more: "A sacrifice was first an offering made holy. The -fice ending also comes from facere, 'to make', as in office.",
    tip: "In an essay: 'Boxer's sacrifice for the farm is rewarded with betrayal.'",
  },
  schedule: {
    why: "The traps are the sch at the start and the ending -dule: SCH-e-DULE. In British English it is often said 'shed-yool', but it is spelt with sch, as if said 'sk'. People write 'shedule' or 'schedual'.",
    more: "It comes from the Late Latin schedula, 'a slip of paper'. The 'sh' and the 'sk' sounds share one spelling, so neither tells you the letters.",
    tip: 'Check it: s, c, h, then e, then dule: sch + e + dule.',
  },
  seize: {
    why: "The trap is the ei: s-EI-ze. The sound is 'ee', there is no c, and still it is ei. This is a well-known exception to 'i before e', so it must be learnt by sight. People write 'sieze'.",
    more: "It comes from the Old French seisir, 'to take hold of'. The noun seizure keeps the ei too.",
    tip: "In an essay: 'Macbeth decides to seize the crown rather than wait for fate.'",
  },
  siege: {
    why: "The trap is the ie: s-IE-ge. The sound is 'ee' and there is no c before it, so the rule 'i before e' applies here. People write 'seige'.",
    more: "It comes from the Old French sege, 'a seat': an army sits down outside a town until it gives in.",
    tip: "In an essay: 'Macbeth's castle prepares for a siege as the English army arrives.'",
  },
  subtle: {
    why: "The trap is the silent b: su-B-tle. It is said 'suttle', so people write 'suttle' or 'sutle', but the word keeps a b that is never sounded.",
    more: "It comes from the Latin subtilis, 'finely woven'. The b was put back by scholars to match the Latin, but it never came back into speech. The adverb is subtly, with no e.",
    tip: "In an essay: 'The writer's criticism is subtle, hidden inside humour.'",
  },
  tyranny: {
    why: "The traps are the y and the double n: t-Y-ra-NN-y. People write 'tiranny' or 'tyrany'. The y comes from the Greek tyrannos, 'ruler'.",
    more: "A tyrant rules cruelly, and a tyrant's rule is tyranny, with the n doubled before the final y. The adjective is tyrannical.",
    tip: "In an essay: 'Macbeth's rule descends into tyranny, and Scotland suffers.'",
  },
  unnecessary: {
    why: 'The traps are the double n at the start and the double s: u-NN-ece-SS-ary. The word is un + necessary: the n of un meets the n at the start of the root, so it has a double n.',
    more: "Keep both parts whole: un + necessary. Then the root's own pattern follows: one c, then a double s.",
    tip: "In your writing: cut unnecessary words. 'In my opinion, I think' says the same thing twice.",
  },
  villain: {
    why: "The trap is the ending: vill-AIN, not -ian or -an. People write 'villian', putting the i in the wrong place. It is vill + ain, like the ain in captain.",
    more: "It comes from the Latin villanus, a farm worker on a villa, which explains the double l. Over centuries the word sank from 'peasant' to 'wicked person'.",
    tip: "In an essay: 'Iago is a villain who never fully explains his motives.'",
  },
  vicious: {
    why: "The trap is the ending: vic-IOUS. People write 'viscious' or 'vicous'. It comes from vice, so the c of vice stays, then -ious: vic + ious.",
    more: 'Vice means wickedness, so something vicious is full of vice. Do not confuse it with viscous, meaning thick and sticky, which has an s before the c.',
    tip: "In an essay: 'The vicious attack in the street shows Hyde's evil unleashed.'",
  },
  vocabulary: {
    why: "The trap is the middle: voc-A-bu-lary. People write 'vocabluary' or 'vocabulery'. It is vocab + u + lary, with an a after the c and another a near the end.",
    more: "It comes from the Latin vocabulum, 'a name', from vocare, 'to call', as in vocal and vocation. Say each part as you write it: vo-cab-u-lar-y.",
    tip: 'In your writing: varied vocabulary earns marks, but only when each word is precise.',
  },
  regicide: {
    why: "The traps are the soft g and the soft c: re-G-i-C-ide. People write 'regiside' or 'redgicide'. It joins the Latin rex, 'king', in its form regi-, and -cide, 'killing'.",
    more: "Regi- appears in regal; the ending -cide, from caedere, 'to kill', appears in pesticide and insecticide.",
    tip: "In an essay: 'Regicide was seen as a crime against God, so Duncan's murder shakes nature itself.'",
  },
  ambitious: {
    why: "The trap is the ending: ambi-TIOUS, not -cious or -shus. People write 'ambicious' or 'ambitous'. The word comes from ambition, so the t stays: ambit + ious.",
    more: "It comes from the Latin ambitio, 'going round', as candidates went round asking for votes. When a noun ends -tion, its adjective usually ends -tious: caution gives cautious.",
    tip: "In an essay: 'Lady Macbeth is more openly ambitious than her husband at first.'",
  },
  benevolent: {
    why: "The trap is the vowels: ben-E-vol-ENT. People write 'benevolant' or 'benovolent'. It joins the Latin bene, 'well', and volens, 'wishing': wishing well.",
    more: 'Bene- appears in benefit and benefactor; vol- appears in volunteer. The ending is -ent, as in many adjectives from Latin.',
    tip: "In an essay: 'The old employer is benevolent, showing what Scrooge could have been.'",
  },
  malevolent: {
    why: "The trap is the vowels: mal-E-vol-ENT. People write 'malevolant' or 'malavolent'. It joins the Latin male, 'badly', and volens, 'wishing': wishing harm.",
    more: 'Mal- appears in malice and malfunction; vol- appears in voluntary. The ending is -ent, never -ant.',
    tip: "In an essay: 'The witches' malevolent presence hangs over the whole play.'",
  },
  Elizabethan: {
    why: "The traps are the z and the ending -than: Eli-Z-a-be-THAN. People write 'Elisabethan' or 'Elizabethian'. Take the queen's name, Elizabeth, and add -an: Elizabeth + an.",
    more: 'Like other words made from names, it takes a capital, as Victorian does. Plays of the 1590s, such as Romeo and Juliet, belong to this age.',
    tip: "In an essay: 'Elizabethan playgoers would have seen a family feud as a matter of honour.'",
  },
  Jacobean: {
    why: "The trap is the ending: Jacob-EAN, not -ian. People write 'Jacobian' or 'Jacobeen'. It comes from Jacobus, the Latin form of James.",
    more: "It describes the years of James I's rule, from 1603. Macbeth, written around 1606, is a Jacobean play, shaped by the new king's interest in witchcraft.",
    tip: "In an essay: 'Jacobean fears of witchcraft give the opening scene its menace.'",
  },
  aristocracy: {
    why: "The traps are the ending -cracy and the vowels: aris-TO-CRACY. People write 'aristocrasy' or 'arristocracy'. It is aristo, 'best', plus cracy, 'rule'.",
    more: "The -cracy ending, from the Greek kratos, 'power', appears in democracy, rule by the people. A member of this class is an aristocrat.",
    tip: "In an essay: 'Lady Catherine's pride shows the aristocracy's belief in its own superiority.'",
  },
  sovereign: {
    why: "The traps are the ei and the silent g: sover-EIGN. It is said 'sov-rin', so people write 'sovrin' or 'soverign', but it ends -eign, with a g that is never sounded.",
    more: 'It comes from the Old French soverain, which had no g. The g was added later, under the influence of a word with a similar ending, and it stayed.',
    tip: "In an essay: 'Macbeth kills his sovereign, breaking every bond of loyalty.'",
  },
  yacht: {
    why: "The trap is the silent ch: ya-CH-t. It is said 'yot', so people write 'yot' or 'yatch', but the word has a, c and h between the y and the t.",
    more: "It comes from the Dutch jaght, short for jaghtschip, a fast 'hunting ship'. The ch is left from the Dutch spelling, though English never sounded it.",
    tip: 'Check it: y, a, then the silent ch, then t: ya + ch + t.',
  },
  curiosity: {
    why: "The trap is the missing u: curious has ou, but this word drops the u: curi-O-sity. People write 'curiousity', but it is curi + osity.",
    more: 'The same u drops out of generous to give generosity, and out of monstrous to give monstrosity.',
    tip: "In an essay: 'Curiosity drives Victor to dig into secrets best left alone.'",
  },
  Banquo: {
    why: "The trap is the ending: Ban-QUO, with qu and an o. People write 'Banqo' or 'Bankquo'. It is Ban + quo: the k sound is spelt qu, then o.",
    more: 'In English a q is almost always followed by u, as in quote and quota. Memory aid: Ban, then quo, as in the start of quota.',
    tip: "In an essay: 'Banquo's ghost at the feast shows that Macbeth cannot bury his guilt.'",
  },
  Birling: {
    why: "The trap is the vowel: B-I-rling, not 'Burling' or 'Berling'. All three sound the same before an r, so the name must be learnt by sight: B, then ir, as in bird.",
    more: "The 'ur' sound has several spellings in English: ir in bird, ur in burn, er in her. This surname uses ir: Birl + ing.",
    tip: "In an essay: 'Mr Birling calls the Titanic unsinkable, which makes him look foolish to anyone who knows what happened next.'",
  },
  Prospero: {
    why: "The trap is the vowels: Pros-PER-o. People write 'Prospro' or 'Prosparo'. It is pros + per + o, like the word prosper with an o on the end.",
    more: 'Memory aid: Prospero hopes to prosper again: prosper + o. Several Italian names in the play end in o, as Antonio and Gonzalo do.',
    tip: "In an essay: 'Prospero's magic gives him control, but he chooses forgiveness in the end.'",
  },
  Utterson: {
    why: "The trap is the double t: U-TT-erson. People write 'Uterson'. Think of the verb utter, to speak, which has a double t: utter + son.",
    more: 'Memory aid: this lawyer barely utters a word about his own feelings. Utter + son, with every letter of utter kept.',
    tip: "In an essay: 'Utterson's loyalty to his friend stops him asking hard questions.'",
  },
  Tybalt: {
    why: "The trap is the y: T-Y-balt, not 'Tibalt'. The 'i' sound after the T is spelt y, and the name ends -balt, like the start of Baltic.",
    more: 'The name comes from Tibert, the cat in old fables, which is why he is mocked as the Prince of Cats.',
    tip: "In an essay: 'Tybalt's rage at the party hints at the deaths to come.'",
  },
  Benvolio: {
    why: "The trap is the vowels: Ben-VOL-io. People write 'Benvoleo' or 'Benvolo'. It is Ben + vol + io, with the Italian ending -io.",
    more: "The name suggests goodwill, from the Latin bene, 'well', and velle, 'to wish'. It suits a peacemaker.",
    tip: "In an essay: 'Benvolio's attempt to keep the peace fails, and the feud explodes.'",
  },
  Capulet: {
    why: "The trap is that every consonant is single: Ca-P-u-L-e-T. People write 'Cappulet' or 'Capulett'.",
    more: 'The name comes from the Cappelletti, a family in old Italian stories of the feud, but English kept it short: Cap + u + let.',
    tip: "In an essay: 'Lord Capulet's fury when Juliet refuses Paris shows his control over her.'",
  },
  Montague: {
    why: "The trap is the ending: Mont-AGUE, with a silent ue. People write 'Montagu' or 'Montigue'. It is mont + ague, like the -gue in league.",
    more: 'The name comes from the Montecchi of old Italian stories. In English it ends -gue, which sounds like a hard g with the ue silent, as in vague.',
    tip: "In an essay: 'Romeo's name, Montague, is the only thing that keeps him from Juliet.'",
  },
  Macduff: {
    why: "The traps are the Mac and the double f: MAC-du-FF. People write 'McDuff' or 'Macduf'. In the play it is one word, written with a small d, and it ends with a double f.",
    more: "Mac means 'son of' in Scottish Gaelic, so the name means son of Duff. Many Scottish surnames begin Mac or Mc.",
    tip: "In an essay: 'Macduff's grief for his family gives the play one of its most human moments.'",
  },
  Fleance: {
    why: "The trap is the ea in the middle: Fl-EA-nce. It is said 'flee-unce', so people write 'Fleeance' or 'Fliance'. It is Fle + ance.",
    more: 'Memory aid: Fleance flees, but the name keeps only one e before the a: Fle + ance. The ending -ance is the same as in dance.',
    tip: "In an essay: 'Fleance's escape leaves Macbeth's hold on the crown insecure.'",
  },
  Estella: {
    why: "The trap is the double l: Este-LL-a. People write 'Estela' or 'Estelle'. It is Est + ella, ending in a.",
    more: "The name comes from the Latin stella, 'star', and she is as distant and cold as a star to Pip: her light comes down a dark passage 'like a star'. Stella keeps its double l, and so does Estella.",
    tip: "In an essay: 'Estella has been raised to feel nothing, and she warns Pip of it herself.'",
  },
  Magwitch: {
    why: "The trap is the tch at the end: Mag-WI-TCH. People write 'Magwich' or 'Magwhich'. The end of the name is spelt like witch.",
    more: 'Memory aid: Mag + witch. Abel Magwitch is no witch, but a convict whose money secretly makes Pip a gentleman.',
    tip: "In an essay: 'Magwitch's return shatters Pip's belief that his fortune came from a lady.'",
  },
  Lanyon: {
    why: "The trap is the y: Lan-Y-on. People write 'Lanion' or 'Lanyan'. It is Lan + yon, and the y makes the 'yuh' sound.",
    more: 'Dr Lanyon is the rational scientist of the story, and his name ends -yon, as canyon does.',
    tip: "In an essay: 'Lanyon's shock at what he sees shows that science cannot explain everything.'",
  },
  Squealer: {
    why: "The trap is the ea: Squ-EA-ler. People write 'Squeeler' or 'Squealor'. It is squeal + er, and squeal, the sound a pig makes, is spelt with ea.",
    more: "Orwell's names describe their owners: this pig squeals out propaganda for Napoleon, turning lies into what sounds like truth. Keep squeal whole, then add -er.",
    tip: 'In an essay: \'Squealer "could turn black into white", which shows how propaganda twists language.\'',
  },
  Lennie: {
    why: "The trap is the ending: Lenn-IE, not -y. People write 'Lenny', the more usual spelling, but Steinbeck's character is Lennie, with a double n and -ie.",
    more: 'His surname is Small, an irony, since he is a huge, powerful man.',
    tip: "In an essay: 'Lennie's dream of tending rabbits shows his childlike innocence.'",
  },
  Curley: {
    why: "The trap is the ending: Curl-EY, not 'Curly'. People write the ordinary word curly, but the character's name ends -ey: Curl + ey.",
    more: "He is the boss's son, small and quick to fight, and his name has an e that the everyday word curly does not.",
    tip: "In an essay: 'Curley picks fights with bigger men to prove he is tough.'",
  },
  Shelley: {
    why: "The trap is the ending: Shell-EY, not 'Shelly'. People write it like the word shelly, but it is shell + ey, with an e before the y.",
    more: 'Percy Bysshe Shelley was a Romantic poet; his wife, Mary Shelley, wrote a gothic novel of 1818 about a scientist who builds a creature.',
    tip: "In an essay: 'Shelley's poem mocks the pride of tyrants whose power crumbles.'",
  },
  Tennyson: {
    why: "The traps are the double n and the y: Te-NN-Y-son. People write 'Tenyson' or 'Tennison'. It is Tenny + son.",
    more: 'Alfred, Lord Tennyson was Poet Laureate for more than four decades of Victorian Britain. His name, like Johnson or Robinson, ends with son.',
    tip: "In an essay: 'Tennyson's poem honours the cavalry's courage while admitting that someone blundered.'",
  },
  Caliban: {
    why: "The trap is the vowels: Cal-I-ban. People write 'Calaban' or 'Caliben'. It is Cal + i + ban, with an i in the middle and an a at the end.",
    more: 'Some think the name plays on cannibal, with the letters rearranged. Memory aid: Cal, i, ban: he is banned from land he calls his own.',
    tip: "In an essay: 'Caliban's claim to the land makes the magician look like a colonial ruler.'",
  },
  Shylock: {
    why: "The trap is the y: Sh-Y-lock. People write 'Shilock' or 'Shylok'. It is shy + lock, two ordinary words joined.",
    more: 'Memory aid: shy + lock. He is the moneylender who demands a pound of flesh when a loan is not repaid.',
    tip: "In an essay: 'Shylock's question, \"Hath not a Jew eyes?\", asks us to see him as human.'",
  },
  anaphora: {
    why: "The traps are the ph and the three a's: an-A-PH-or-A. People write 'anafora' or 'anaphra'. The word is Greek, so the f sound is spelt ph.",
    more: "It comes from the Greek anaphora, 'carrying back'. Jane Eyre's furious questions to Rochester, each starting 'Do you think', in Chapter 23, are anaphora: the repeated opening builds pressure.",
    tip: "In an essay: 'The anaphora of \"Do you think\" makes Jane's anger build with every question.'",
  },
  tricolon: {
    why: "The trap is the -colon ending: tri-COLON, like the colon in a sentence. People write 'tricolan' or 'tricolin'. It is tri, 'three', plus colon, 'a part'.",
    more: "In Greek, kolon meant a limb, and then a section of a sentence. Antony's 'Friends, Romans, countrymen' in Julius Caesar is a tricolon: three groups called on at once.",
    tip: "In an essay: 'The tricolon gives the line a beat that is easy to remember.'",
  },
  superlative: {
    why: "The trap is the middle: super-LA-tive. People write 'superlitive' or 'superlutive'. It is super, 'above', plus lative: super + la + tive.",
    more: "It comes from the Latin superlatus, 'carried beyond'. Superlatives end in -est (fastest) or use most (most famous); comparatives end in -er or use more.",
    tip: 'In an essay: \'The superlative "darkest" leaves no room for hope.\'',
  },
  subordinate: {
    why: "The trap is the vowel after the d: sub-OR-din-ATE. People write 'subordanate' or 'subbordinate'. It is sub, 'under', plus ordinate, as in co-ordinate.",
    more: "It comes from the Latin subordinare, 'to place below in rank'. A subordinate clause, such as 'although it was late', cannot stand on its own.",
    tip: "In your writing: open a sentence with a subordinate clause, 'Although she was afraid,' to vary your sentences.",
  },
  interrogative: {
    why: "The traps are the double r and the vowels: inte-RR-og-A-tive. People write 'interogative' or 'interrogitive'. It is inter + rogative: the r of inter meets the r of rogare, 'to ask'.",
    more: "It comes from the Latin interrogare, 'to question', as in interrogate. An interrogative sentence is a question.",
    tip: "In an essay: 'The interrogative \"Is this a dagger which I see before me\" shows Macbeth's mind questioning itself.'",
  },
  exclamatory: {
    why: "The trap is the missing i: exclaim has ai, but this word drops the i: excl-A-matory. People write 'exclaimatory'. It is ex + clam + atory.",
    more: 'The same ai-to-a change happens in exclamation and proclamation. An exclamatory sentence voices a cry or an outburst.',
    tip: 'Check it: in an exam essay, keep exclamatory sentences for quotation, not for your own writing about the text.',
  },
  monologue: {
    why: "The traps are the mono and the -logue ending: mono-LOGUE. People write 'monolog' or 'monologe'. British English keeps the silent ue at the end.",
    more: "It comes from the Greek monos, 'alone', and logos, 'speech'. A dramatic monologue, such as Browning's 'My Last Duchess', is a poem spoken by one character.",
    tip: "In an essay: 'The Duke's monologue reveals more than he means to.'",
  },
  narrative: {
    why: "The traps are the double r and the -ive ending: na-RR-at-IVE. People write 'narative' or 'narritive'. The vowels before the final e are a, a, i: narr + at + ive.",
    more: "It comes from the Latin narrare, 'to tell', which also gives narrate. Jane Eyre is a first-person narrative: Jane tells her own story.",
    tip: "In an essay: 'The narrative jumps back in time, so we learn the cause after the result.'",
  },
  quatrain: {
    why: "The trap is the qua and the -ain ending: QUA-train. People write 'quatrian' or 'quatrane'. It is qua + train, like the word train.",
    more: "It comes from the French quatre, 'four', as in quarter. Fourteen-line poems often divide into three quatrains and a closing pair of lines.",
    tip: "In an essay: 'Each quatrain adds a new image before the final pair of lines resolves them.'",
  },
  couplet: {
    why: "The trap is the ou and the single p: c-OU-P-let. People write 'cuplet' or 'couplett'. It is coup + let, with one p and one t.",
    more: "It comes from the French couple, 'a pair', plus -et, 'little': a little pair of lines. A rhyming couplet often ends a speech or a scene with a sense of completion.",
    tip: "In an essay: 'The closing couplet sums up the lovers' fate.'",
  },
  elegy: {
    why: "The trap is the vowels: el-E-gy. People write 'elegey', 'elergy' or 'elegie'. It is e-l-e-g-y, five letters, with a soft g.",
    more: "It comes from the Greek elegos, 'a song of mourning'. The adjective is elegiac. Do not confuse it with eulogy, a speech praising someone who has died.",
    tip: "In an essay: 'The poem reads as an elegy, mourning a way of life as well as a person.'",
  },
  epithet: {
    why: "The traps are the e at the start and the -thet ending: ep-I-THET. People write 'epithat' or 'epithit'. It is epi + thet.",
    more: "It comes from the Greek epitheton, 'something added'. An epithet can praise or mock, and a repeated one fixes a quality to a character.",
    tip: "In an essay: 'The epithet repeated for the character fixes him in the reader's mind.'",
  },
  nemesis: {
    why: "The trap is the vowels: nem-E-sis. People write 'nemisis' or 'nemesus'. The vowels are e, e, i: n-e-m-e-s-i-s.",
    more: 'It comes from Nemesis, the Greek goddess of retribution, who punished those who were too proud. A nemesis is the enemy or fate a character cannot escape.',
    tip: "In an essay: 'The one man not covered by the witches' riddles becomes Macbeth's nemesis.'",
  },
  hubris: {
    why: "The trap is the ending: hu-BRIS, with one s. People write 'hubriss' or 'hubrus'. It is h-u-b-r-i-s, from Greek.",
    more: 'In Greek drama, hubris was the pride that defied the gods and brought punishment. A rarer spelling closer to the Greek, hybris, is also correct: this game accepts it too. The adjective is hubristic.',
    tip: "In an essay: 'Macbeth's hubris shows when he trusts that no man born of woman can harm him.'",
  },
  pathos: {
    why: "The trap is the th and the -os ending: pa-TH-OS. People write 'pathus' or 'patheos'. It is path + os, from Greek.",
    more: "It comes from the Greek pathos, 'suffering' or 'feeling', the root of sympathy and pathetic. Writers use pathos to move readers to pity.",
    tip: "In an essay: 'The empty seat by the fire in Stave 3 is full of pathos.'",
  },
  plosive: {
    why: "The trap is the -sive ending: plo-SIVE. People write 'plossive' or 'plosiv'. It is the end of explosive: (ex)plosive.",
    more: "A plosive sound bursts out: p, b, t, d, k and g. Owen's 'Bent double, like old beggars under sacks' is thick with plosive b sounds.",
    tip: "In an essay: 'The plosive b sounds make the line feel heavy and broken.'",
  },
  colloquialism: {
    why: "The traps are the double l, the qu and the -ism ending: co-LL-o-QU-ial-ISM. People write 'colloquilism' or 'coloquialism'. It is colloquial + ism.",
    more: "Keep the whole root, colloquial, then add -ism. A colloquialism is a single chatty word or phrase, such as 'mate' or 'gonna'.",
    tip: "In an essay: 'The colloquialism makes the speaker sound like one of us.'",
  },
  vernacular: {
    why: "The traps are the -ular ending and the vowels: ver-NAC-u-lar. People write 'vernacula' or 'vernaculer'. It ends -ular, as popular does.",
    more: "It comes from the Latin vernaculus, 'native' or 'home-born'. Robert Burns wrote in the Scots vernacular, the language of ordinary people.",
    tip: "In an essay: 'Writing in the vernacular gives the characters authentic voices.'",
  },
  analogy: {
    why: "The trap is the vowels: an-AL-o-gy. People write 'anology' or 'analagy'. It is ana + logy: the same -logy ending as biology.",
    more: "It comes from the Greek analogia, 'proportion'. An analogy explains something hard by comparing it with something well known, at greater length than a single image.",
    tip: "In an essay: 'The writer's analogy turns a complex problem into a simple story.'",
  },
  exposition: {
    why: "The trap is the middle: ex-PO-si-tion. People write 'exposistion' or 'expositon'. It is expose without its e, plus -ition: expos + ition.",
    more: "It comes from the Latin exponere, 'to set out'. The exposition sets out who, where and when, before the conflict starts.",
    tip: "In an essay: 'The witches' brief scene makes a startling exposition.'",
  },
  grotesque: {
    why: "The trap is the French ending -esque: grot-ESQUE. People write 'grotesk' or 'groteque'. The k sound is spelt que, as in picturesque.",
    more: 'It comes from the Italian grottesca, the strange paintings found in ancient Roman grottoes, or caves. Gothic writing loves the grotesque: deformity, decay and horror.',
    tip: "In an essay: 'The grotesque description makes the creature both pitiful and terrifying.'",
  },
  parody: {
    why: "The trap is the vowels: par-O-dy. People write 'parady' or 'parrody'. It is p-a-r-o-d-y, one r.",
    more: "It comes from the Greek parodia, 'a song sung beside', an imitation that mocks the original. Parody pushes a style's habits so far that they look absurd.",
    tip: "In an essay: 'The scene works as a parody of romantic poetry.'",
  },
  sarcasm: {
    why: "The trap is the ending: sar-CASM. You hear a z, but it is spelt with an s, and no vowel comes between the s and the m. People write 'sarcazm' or 'sarcasim'. It is sar + casm, like the end of chasm.",
    more: "It comes from the Greek sarkazein, 'to tear flesh': sarcasm is meant to wound. The adjective is sarcastic.",
    tip: "In an essay: 'His sarcasm hides real bitterness.'",
  },
  allegorical: {
    why: "The word is allegory + ical: the y of allegory drops before the ending, so it is allegor + ical. People write 'alegorical' or 'allegoricle'.",
    more: 'Keep the double l of the root, drop the y and add -ical, as history gives historical. Fables are often allegorical: animals stand for people and ideas.',
    tip: "In an essay: 'Lord of the Flies can be read as allegorical, with each boy standing for a part of society.'",
  },
  didactic: {
    why: "The trap is the repeated d and c: DI-DAC-tic. People write 'diadactic' or 'dydactic'. It is di + dac + tic, three short parts.",
    more: "It comes from the Greek didaskein, 'to teach'. A didactic text sets out to teach a lesson, often about right and wrong.",
    tip: "In an essay: 'An Inspector Calls is openly didactic: the Inspector's final speech is a lesson for everyone watching.'",
  },
  juxtapose: {
    why: "The trap is the start, juxta-, with a u and an x: JUX-ta-pose. People write 'juxtopose' or 'juxterpose'. It is juxta, the Latin for 'next to', plus pose.",
    more: 'Split it in two: juxta + pose. Pose means to place, so to juxtapose is to place next to.',
    tip: "In an essay: 'The poet juxtaposes the calm sea with the men's panic.'",
  },
  sycophantic: {
    why: "The tricky parts are the y after the s, and the ph for the f sound. People often write 'sicophantic' or 'sycofantic', but both the y and the ph come from Greek.",
    more: 'Build it from sycophant, a flatterer, plus -ic. The other forms keep the same spelling: sycophancy and sycophantically.',
    tip: "Use it in a sentence: 'Mr Collins's sycophantic praise of Lady Catherine makes him absurd.'",
  },
  anachronism: {
    why: "The tricky part is the ch, which sounds like k. It comes from the Greek khronos, 'time', the same root as chronic and chronicle, which also spell the k sound ch.",
    more: "Build it in three parts: ana, 'against', chron, 'time', and -ism. The adjective is anachronistic.",
    tip: "Use it in a sentence: 'The striking clock in Julius Caesar is a famous anachronism, since ancient Rome had no such clocks.'",
  },
  didacticism: {
    why: 'The tricky part is the c before -ism: didactic + ism. Keep the whole of didactic, then add ism: di-dac-ti-cism. The final c of didactic now sounds like s.',
    more: 'The same pattern turns romantic into romanticism and critic into criticism. In each, the hard c of the first word becomes a soft c before -ism.',
    tip: "Use it in a sentence: 'The didacticism of A Christmas Carol is clear: Dickens wants readers to help the poor.'",
  },
  catharsis: {
    why: 'The tricky parts are the th and the ending -sis: ca-THAR-sis. It comes from Greek, where many words end in -sis, such as crisis and thesis.',
    more: 'The plural follows the Greek pattern too: catharses, just as crises is the plural of crisis. The adjective is cathartic.',
    tip: "Use it in a sentence: 'The tragic ending offers playgoers catharsis, releasing the tension built up through the play.'",
  },
  polysyllabic: {
    why: "The tricky part is the two y's: pol-Y-s-Y-llabic. Both parts come from Greek: poly, 'many', and syllable, which also has a y and a double l.",
    more: 'If you can spell syllable, you can spell polysyllabic: poly + syllab + ic. Its opposite, monosyllabic, follows the same pattern: mono + syllab + ic.',
    tip: "Use it in a sentence: 'His polysyllabic words make him sound pompous and self-important.'",
  },
  ephemeral: {
    why: "The tricky parts are the e at the start and the ph, which sounds like f: e-PHEM-er-al. People often write 'efemeral' or 'ephemoral'.",
    more: "It comes from the Greek ephemeros, 'lasting a day', from hemera, 'day'. Like many Greek words, it uses ph for the f sound, as in phone and photograph.",
    tip: "Use it in a sentence: 'The poet presents youth as ephemeral, gone almost as soon as it arrives.'",
  },
  magnanimous: {
    why: "The tricky part is the middle: magn + animous. It joins two Latin words, magnus, 'great', and animus, 'mind' or 'soul'. Say it slowly: mag-NAN-i-mous.",
    more: 'Magn- appears in magnificent and magnify; anim- appears in animal and animated. Spell the two parts and join them: magn + anim + ous.',
    tip: "Use it in a sentence: 'After winning, she was magnanimous, praising her opponent's courage.'",
  },
  melancholic: {
    why: "The tricky part is the ch, which sounds like k: mel-an-CHOL-ic. It comes from the Greek melas, 'black', and khole, 'bile', and words from Greek often use ch for the k sound.",
    more: 'The related words keep the ch: melancholy and melancholia. Other Greek words with ch for k include character, chorus and chaos.',
    tip: "Use it in a sentence: 'The rain and the empty streets create a melancholic mood.'",
  },
  idiosyncratic: {
    why: "The tricky part is the syn in the middle, with a y, not an i. People often write 'idiosincratic', but syn comes from the Greek for 'together', as in synonym and synchronise.",
    more: "Build it in three parts: idio, 'one's own' (as in idiom), syn, 'together', and cratic. The noun is idiosyncrasy, which ends in -asy, not -acy.",
    tip: "Use it in a sentence: 'The character's idiosyncratic habits make her memorable and convincing.'",
  },
  perfunctory: {
    why: 'The tricky part is the ending: perfunct + ory. The middle, -funct-, is the same as in function, so if you can spell function, you can spell this: per-FUNC-tory.',
    more: "It comes from the Latin perfungi, 'to get through' a task: something perfunctory is done just to get it over with. The ending -ory also appears in compulsory and satisfactory.",
    tip: "Use it in a sentence: 'Her perfunctory apology suggests she does not really feel sorry.'",
  },
  acquiesce: {
    why: "The tricky parts are the c before the q, and the sc near the end: ac + quie + sce. People often write 'aquiesce' or 'acquiese'.",
    more: 'Memory aid: acquiesce contains quie, as in quiet: to acquiesce is to accept quietly, without protest. The same c before q appears in acquire and acquit.',
    tip: "Use it in a sentence: 'At first Sheila acquiesces to her parents' views, but she soon challenges them.'",
  },
  bourgeoisie: {
    why: 'The tricky part is the French spelling: bour-geois-ie. It has ou, then geoi, then ie at the end. Learn it in three chunks: bour, geois and ie.',
    more: 'Bourgeois, without the -ie, describes a middle-class person or attitude; bourgeoisie, with it, is the middle class as a group. Karl Marx used bourgeoisie for the class that owns factories and firms.',
    tip: "Use it in a sentence: 'An Inspector Calls criticises the bourgeoisie for exploiting workers like Eva Smith.'",
  },
  dichotomy: {
    why: "The tricky part is the ch, which sounds like k: di-CHOT-o-my. It comes from the Greek dicha, 'in two', and temnein, 'to cut', so a dichotomy is something cut into two.",
    more: "The ending -tomy, 'cutting', also appears in anatomy. A dichotomy is a sharp division into two opposites, such as good and evil, or reason and emotion.",
    tip: "Use it in a sentence: 'The novella explores the dichotomy between a respectable public life and a hidden, violent one.'",
  },
  quintessential: {
    why: 'The tricky parts are quint at the start and the -tial ending. It is quint + essential, so if you can spell essential, with its double s and -tial, you can spell this.',
    more: "Quint means 'fifth'. Medieval thinkers imagined a fifth element, purer than earth, air, fire and water: the quintessence, or 'fifth essence'. Quintessential now means the most perfect example of something.",
    tip: "Use it in a sentence: 'Scrooge is the quintessential miser, so his transformation is all the more striking.'",
  },
  conscientious: {
    why: "The traps are the sc and the ending -tious: con-SC-ien-TIOUS. People write 'conscientous' or 'consciencious'. The word comes from conscience, with its final ce changed to t before -ious.",
    more: 'A conscientious person does carefully what their sense of right and wrong tells them. Say all four beats as you write: con-shee-EN-shus.',
    tip: "In an essay: 'Jane is conscientious, doing her duty even when no one is watching.'",
  },
  bureaucracy: {
    why: "The traps are the eau and the -cracy ending: bur-EAU-CRACY. People write 'beaurocracy' or 'bureacracy'. It is bureau, the French for 'office' or 'desk', plus cracy, 'rule'.",
    more: "Bureau keeps its French eau, and -cracy comes from the Greek kratos, 'power'. So the word means rule by the desk: power held by officials.",
    tip: "In an essay: 'The writer mocks a bureaucracy so slow that help arrives too late.'",
  },
  liaison: {
    why: "The trap is the three vowels in a row, i, a, i: l-IAI-son. People write 'liason' or 'liasion'. Memory aid: the i's sit on both sides of the a: l-i-a-i-son.",
    more: "It comes from the French lier, 'to bind', as in liable. A liaison binds two people or groups together, at work or in love.",
    tip: "In an essay: 'Gerald's secret liaison with Daisy Renton comes out under the Inspector's questioning.'",
  },
  silhouette: {
    why: "The traps are the h and the French ending -ouette: sil-H-OUETTE. People write 'silouette' or 'silhuette'. It ends -ette, with a double t, after ou.",
    more: 'It is named after Etienne de Silhouette, an eighteenth-century French minister whose name became a word for cheap outline portraits. So the spelling is a surname.',
    tip: "In your writing: 'A silhouette filled the doorway' creates suspense by hiding who it is.",
  },
  mnemonic: {
    why: "The trap is the silent m at the start: M-nemonic. It is said 'nem-on-ic', so people write 'nemonic', but the word begins mn, from Greek.",
    more: "It comes from the Greek mnemon, 'mindful', related to Mnemosyne, the goddess of memory. The memory aids that help with spelling are themselves mnemonics.",
    tip: 'Check it: start with the silent m, then write what you hear: m + nemonic.',
  },
  omniscient: {
    why: "The traps are the sc and the -ient ending: omni-SC-IENT. People write 'omnicient' or 'omniscent'. It is omni, 'all', plus scient, 'knowing'.",
    more: "Scient comes from the Latin scire, 'to know', the same root as science. An omniscient storyteller knows everything, including every character's private thoughts.",
    tip: "In an essay: 'The omniscient voice moves freely between the characters' thoughts.'",
  },
  philanthropist: {
    why: "The traps are the ph and the th: PH-ilan-TH-ropist. People write 'filanthropist' or 'philantropist'. It is phil, 'loving', plus anthrop, 'human', plus -ist.",
    more: "Phil- appears in philosophy, 'love of wisdom'; anthrop- in anthropology, the study of people. A philanthropist loves people enough to give to them.",
    tip: "In an essay: 'By the end, Scrooge has become a philanthropist, giving freely to the poor.'",
  },
  misanthropic: {
    why: "The traps are the single s and the th: mi-S-an-TH-ropic. People write 'misantropic' or 'missanthropic'. It is mis, 'hating', plus anthrop, 'human', plus -ic.",
    more: "Mis- here comes from the Greek misein, 'to hate', as in misogyny; it is not the English prefix mis-, 'wrongly'. So there is only one s.",
    tip: "In an essay: 'At the start, Scrooge is misanthropic, shutting out every human contact.'",
  },
  synecdoche: {
    why: "The traps are the y and the ending -oche, said 'sin-EK-duh-kee': s-Y-nec-d-OCHE. People write 'synecdoke' or 'sinecdoche'. The ch sounds like k, and the final e is sounded.",
    more: "It comes from the Greek synekdokhe, 'taking up together'. A part stands for the whole, as when sailors are called 'hands' or a car is called 'wheels'.",
    tip: 'In an essay: \'Calling the workers "hands" is synecdoche that reduces people to their labour.\'',
  },
  Havisham: {
    why: "The trap is the middle: Hav-I-sham, not 'Haversham'. People add an r, but the name is Hav + i + sham, three short parts.",
    more: 'Memory aid: the word sham, a fake, is at the end of her name, and her whole life has become a sham since her wedding day. Hav + i + sham.',
    tip: "In an essay: 'Miss Havisham's stopped clocks show a life frozen at the moment of her heartbreak.'",
  },
  Mercutio: {
    why: "The trap is the t: Mercu-T-io, not 'Mercucio'. The 'sh' sound before the io is spelt with a t, as in nation and portion.",
    more: 'The name suggests Mercury, the quick messenger god, and he has the quickest wit in the play. Merc + ut + io: keep the u of Mercury.',
    tip: "In an essay: 'Mercutio's curse, \"A plague o' both your houses\", marks the moment the play darkens for good.'",
  },
  Jekyll: {
    why: "The traps are the y and the double l: Jek-Y-LL. People write 'Jeckyll', 'Jekyl' or 'Jekell'. It is Jek + yll: one k and no c, then y and a double l.",
    more: "The author himself is said to have pronounced it 'Jee-kul', though most people now say 'Jek-ul'. Either way, the spelling is the same: J-e-k-y-l-l.",
    tip: "In an essay: 'Jekyll's respectable life depends on hiding his darker urges.'",
  },
  Ozymandias: {
    why: "The traps are the y and the -ias ending: Oz-Y-mand-IAS. People write 'Ozimandias' or 'Ozymandius'. It is Ozy + mand + ias.",
    more: 'It is the Greek name for Ramesses II, a pharaoh of ancient Egypt. The poem shows his boastful statue in ruins: power does not last.',
    tip: "In an essay: 'The broken statue of Ozymandias mocks the king's boast that his works would last.'",
  },
  Shakespeare: {
    why: "The trap is the ending: Shake-SPEARE, with ea and a final e. People write 'Shakespear' or 'Shakespere'. It is shake + speare: the word spear, with an e on the end.",
    more: 'In his own time the name was spelt many ways, and he signed it differently himself, but the form fixed in print is Shakespeare. Memory aid: shake a spear, then add e.',
    tip: "Check it: an essay that misspells the author's name undermines itself at once, so learn this one by heart.",
  },
  Priestley: {
    why: "The trap is the ending: Priest-LEY, not -ly. People write 'Priestly', like the adjective for a priest, but the author's name ends -ley: priest + ley.",
    more: 'J. B. Priestley wrote An Inspector Calls in 1945. Memory aid: the name is priest + ley; the everyday word priestly has no e.',
    tip: "In an essay: 'Priestley sets the play in 1912, looking back from 1945 at a world about to change.'",
  },
  Stevenson: {
    why: "The trap is the v: Ste-V-enson, not -ph-. People write 'Stephenson', confusing him with the railway engineer, but the author's name has a v: Steven + son.",
    more: 'Robert Louis Stevenson was a Scottish author who also wrote Kidnapped. Memory aid: Steven, with a v, plus son.',
    tip: "In an essay: 'Stevenson uses fog to hide the city's secrets.'",
  },
  Fezziwig: {
    why: "The traps are the double z and the -wig: Fe-ZZ-i-WIG. People write 'Fezzywig' or 'Fezziwigg'. It is Fezz + i + wig.",
    more: 'Dickens chose comic, bouncing sounds for kind characters. Memory aid: a fez and a wig, with an extra z: Fezz + i + wig.',
    tip: "In an essay: 'Fezziwig's party shows that an employer can make people happy at little cost.'",
  },
  Cratchit: {
    why: "The trap is the ending: Cratch-IT, not -et or -ett. People write 'Cratchet' or 'Cratchitt'. It is Cratch + it, with tch in the middle.",
    more: "Bob Cratchit is Scrooge's clerk, paid fifteen shillings a week. Memory aid: Cratch + it: the tch of scratch, without the s.",
    tip: "In an essay: 'The Cratchits' Christmas dinner shows that love matters more than money.'",
  },
  Ebenezer: {
    why: "The trap is the vowels: E-ben-E-zer. People write 'Ebeneezer' or 'Ebenezar'. Every vowel is a single e: E-b-e-n-e-z-e-r.",
    more: "It is a Hebrew name from the Bible, meaning 'stone of help'. Memory aid: four e's, each on its own: E, be, ne, zer.",
    tip: "In an essay: 'Dickens gives his miser a name with a holy meaning, which makes his meanness more striking.'",
  },
  Pumblechook: {
    why: "The trap is the length: Pum-ble-CHOOK. People write 'Pumblechuck' or 'Pumbelchook'. It is Pum + ble + chook, ending with a double o.",
    more: "Dickens gives pompous characters lumbering names. Uncle Pumblechook claims to be the founder of Pip's fortunes, though he did nothing for him.",
    tip: "In an essay: 'Pumblechook's boasting shows how people flatter the rich.'",
  },
  Dunsinane: {
    why: "The trap is the vowels: Dun-SIN-ane. People write 'Dunsinan', 'Dunsinnane' or 'Dunsinain'. It is Dun + sin + ane, with a single n in each part.",
    more: 'Macbeth is told he is safe until Birnam Wood comes to Dunsinane. Memory aid: Dun + sin + ane: it is where his sin catches up with him.',
    tip: "In an essay: 'When the wood moves towards Dunsinane, Macbeth's confidence collapses.'",
  },
  Benedick: {
    why: "The trap is the ending: Bene-DICK, not -dict. People write 'Benedict', the usual name, but this character is Benedick, with ck and no t.",
    more: "The name plays on benedict, 'blessed', but the playful spelling suits a man who mocks love and then falls in love.",
    tip: "In an essay: 'Benedick's battles of wit with Beatrice hide real feeling.'",
  },
  Malvolio: {
    why: "The trap is the vowels: Mal-VOL-io. People write 'Malvollio' or 'Malvolo'. It is Mal + vol + io, with a single l each time.",
    more: "The name suggests 'ill will' in Italian: mal, 'bad', and voglio, 'I want'. It suits a steward who wishes everyone's fun would end.",
    tip: "In an essay: 'Malvolio's last line, \"I'll be revenged on the whole pack of you\", leaves the comedy with a bitter end.'",
  },
  Desdemona: {
    why: "The trap is the vowels: Des-DE-mona. People write 'Desdamona' or 'Desdimona'. It is Des + de + mona: e twice, then o and a.",
    more: "The name is often linked to the Greek dysdaimon, 'ill-fated', which suits her end. Say each part as you write it: Des-de-mo-na.",
    tip: "In an essay: 'Desdemona's loyalty never wavers, which makes Othello's suspicion more tragic.'",
  },
  Bennet: {
    why: "The trap is the single t: Benn-ET. People write 'Bennett', the more common surname today, but this family has a double n and only one t.",
    more: 'The novel follows the second of five sisters, whose mother longs to see them all married.',
    tip: "In an essay: 'Lizzy Bennet's quick wit sets her apart from her sisters.'",
  },
  Frankenstein: {
    why: "The trap is the ending: Franken-STEIN, with ei. People write 'Frankenstien'. The name is German, and German spells this 'eye' sound ei, as in stein, 'stone'.",
    more: "Victor Frankenstein is the scientist, not the creature: the creature has no name. Memory aid: German ei says 'eye', as in Einstein.",
    tip: "In an essay: 'Frankenstein abandons his creation, and the creature's anger grows from that neglect.'",
  },
  Rossetti: {
    why: "The trap is two pairs of double letters: Ro-SS-e-TT-i. People write 'Rosetti' or 'Rossetty'. Double s, then double t, then i.",
    more: 'Christina Rossetti came from an Italian family in London, which is why the name ends in i. Her brother Dante Gabriel Rossetti was a painter.',
    tip: "In an essay: 'Rossetti's speaker asks to be remembered, then says she would rather be forgotten if memory brings grief.'",
  },
  Austen: {
    why: "The trap is the ending: Aust-EN, not -in. People write 'Austin', the more common name, but the novelist's name is Austen, with an e.",
    more: "Jane Austen published her novels without her name in her lifetime, as 'A Lady'. Memory aid: Austen ends with an e, and so does her first name, Jane.",
    tip: "In an essay: 'Austen uses irony to mock people who marry for money.'",
  },
  Hecate: {
    why: "The trap is the ending: Hec-ATE. In the play it is said 'HEK-it', in two beats, so people write 'Heckat' or 'Hecat', but it is Hec + ate, with a final e.",
    more: 'She is the Greek goddess of witchcraft and crossroads. In Macbeth she scolds the three witches for meddling without her.',
    tip: "In an essay: 'Hecate's arrival shows that the witches serve a darker power.'",
  },
  Glamis: {
    why: "The trap is the ending: Glam-IS, said 'glahmz'. The i is not sounded, so people write 'Glams' or 'Glammis', but the name is Glam + is, with one m.",
    more: 'It is a real place in Scotland, and Glamis Castle still stands. Macbeth is Thane of Glamis when the play begins; the witches add Cawdor, and then king.',
    tip: "In an essay: 'Hailed as Glamis, Cawdor and king, Macbeth hears his secret wishes spoken by strangers.'",
  },
  affect: {
    why: "The gap needs a verb, the action of changing something: the news does not affect her, for pleasure or pain. Affect, with an a, is the verb; effect, with an e, is usually the noun, the result. 'Does not' before the gap shows a verb is needed.",
    more: 'Memory aid: RAVEN: Remember, Affect is a Verb, Effect is a Noun. Something affects you, and the effect is what it leaves behind.',
    tip: "In an essay: 'The image affects the reader' is weaker than naming the feeling: 'The image unsettles the reader.'",
  },
  effect: {
    why: "The gap needs a noun after 'a strange': the result the words had on him. Effect, with an e, is the noun; affect, with an a, is the verb that causes it. Victor says this of the creature's plea.",
    more: 'Memory aid: an Effect is the End result; Affect is the Action. One rarer use: to effect a change means to bring it about, so effect can be a verb too.',
    tip: "In an essay: name the effect precisely. 'Builds tension' or 'slows the pace' says more than 'has an effect on the reader'.",
  },
  practice: {
    why: "The gap needs a noun after 'out of': to be out of practice is to have stopped doing something regularly. In British English the noun ends -ice and the verb ends -ise, so the noun here is practice.",
    more: 'Memory aid: advice is a noun and advise is a verb, and you can hear the difference. Swap in advice: if it fits, the word is practice; if advise fits, it is practise.',
    tip: "Check it: a doctor's practice, piano practice and a practice paper are all nouns, so all end -ice.",
  },
  practise: {
    why: "The gap needs a verb: to practise what you know is to put it into action. In British English the verb ends -ise and the noun ends -ice, so after 'also' the action word is practise. The village's deputy clerk quotes these lines from a psalm.",
    more: 'Memory aid: s for the verb, c for the noun. If you could put advise in the gap, write practise; if advice would fit, write practice.',
    tip: 'Check it: American English uses practice for both, so a spellchecker set to American will not catch this. Set yours to British English.',
  },
  licence: {
    why: "The gap needs a noun after 'a special': a special licence, the document that let two people marry quickly. In British English the noun ends -ence, with a c, and the verb ends -ense, with an s.",
    more: 'The same rule gives practice and practise: c for the noun, s for the verb. Memory aid: c for card, since a licence is often a card.',
    tip: 'Check it: a TV licence, a driving licence and a fishing licence are all nouns, so all take a c.',
  },
  license: {
    why: 'The gap needs a verb: to license the club is to give it official permission. In British English the verb ends -se, with an s; the noun, the document itself, ends -ce.',
    more: 'The pattern matches practise and practice, and advise and advice: s for the verb. A shop that is licensed to sell something has been given that permission.',
    tip: "Check it: if you can put 'to' in front of the word, as in 'to license', it is the verb and takes an s.",
  },
  advice: {
    why: "The gap needs a noun after 'her': he took her advice, the suggestion itself. Advice, with a c and an 'ice' sound, is the noun; advise, with an s and a 'z' sound, is the verb.",
    more: 'Here you can hear the difference: ad-VICE ends like ice, ad-VISE ends like size. That is why this pair is used to check others, such as practice and practise.',
    tip: "Check it: advice never takes 'an' or a plural s: write 'some advice' or 'a piece of advice'.",
  },
  advise: {
    why: "The gap needs a verb, a plea for guidance: advise me what to do. Advise, with an s, ends with the z sound of 'size' and is the action; advice, with a c, ends like 'ice' and is the thing given.",
    more: 'Because you can hear the z sound, this pair is the easiest test for the trickier ones: practise, license and devise all behave in the same way.',
    tip: "In your writing: 'I would advise every reader to...' is a firm, polite way to end an article.",
  },
  device: {
    why: "The gap needs a noun after 'a': Bottom has a device, a plan, to put everything right. Device, with a c and an 'ice' sound, is the noun; devise, with an s and a 'z' sound, is the verb.",
    more: 'A literary device is any technique a writer uses for impact. You can hear the difference: de-VICE ends like nice, de-VISE ends like wise.',
    tip: "In an essay: naming the device is only the start. Say what it does: 'The cliffhanger leaves the reader anxious for the next chapter.'",
  },
  devise: {
    why: "The gap needs a verb after 'could': Oberon means things have turned out better than he could have planned. Devise, with an s and a 'z' sound, is the verb; device, with a c, is the plan or thing made.",
    more: "It comes from the Old French deviser, 'to divide' or 'to plan'. Memory aid: you devise a plan, and the plan might be a device.",
    tip: "In an essay: 'Golding shows the boys devise rules, then abandon them as fear grows.'",
  },
  prophecy: {
    why: "The gap needs a noun after 'a': to the humans, the animals' song sounds like a prophecy, a prediction of their doom. The noun ends -cy, said 'see'; the verb ends -sy, said 'sigh'.",
    more: 'It follows the same c-for-noun, s-for-verb pattern as advice and advise, and here too you can hear it: PROF-uh-see for the thing, PROF-uh-sigh for the action.',
    tip: "In an essay: 'The prophecy plants an idea; Macbeth chooses to act on it.'",
  },
  prophesy: {
    why: "The gap needs a verb after 'I will': Hamlet predicts what the old courtier is coming to tell him. The verb ends -sy, said 'sigh'; the noun, the prediction itself, ends -cy, said 'see'.",
    more: "Both come from the Greek prophetes, 'one who speaks before'. The verb's -ed form is prophesied, and a person who prophesies is a prophet.",
    tip: "Check it: say the word. If it ends 'sigh', write -sy; if it ends 'see', write -cy.",
  },
  lose: {
    why: "The gap needs the verb meaning to stop having: when did you lose your daughter? Lose has one o and a z sound, as in 'choose'; loose has two o's and an s sound, as in 'goose'.",
    more: "Memory aid: lose has lost one of its o's. Loose, with two, is the opposite of tight. The -ed form of lose is irregular: lost.",
    tip: 'Check it: if the sentence is about failing to keep or win something, write it with one o.',
  },
  loose: {
    why: "The gap needs the word meaning free, no longer held: moles let loose. Loose has two o's and an s sound, as in 'goose'; lose, with one o, is the verb meaning to stop having.",
    more: "Memory aid: loose is the opposite of tight, and its two o's have room to rattle about. It can also be a verb, to set free, as in 'to loose an arrow'.",
    tip: "In your writing: 'A loose shutter banged in the wind' adds sound and unease to a setting.",
  },
  principal: {
    why: 'The gap needs the adjective meaning main: his principal enjoyments, the chief ones. Principal ends -pal; principle, ending -ple, is a rule or belief.',
    more: 'Memory aid: the principal is your pal, the head of the school, and the principal reason is the main one. A principle is a rule, and both of those end -le.',
    tip: "Check it: if you could write 'main' instead, the word is principal.",
  },
  principle: {
    why: 'The gap needs the noun for a rule or belief: the principle he acted upon. Principle ends -ple, as rule ends in le; principal, ending -pal, means main.',
    more: 'Memory aid: a principle is a rule, and both end in le. Someone with principles holds firm beliefs about right and wrong.',
    tip: "In an essay: 'Boxer's principle that Napoleon is always right makes him easy to exploit.'",
  },
  complement: {
    why: 'The gap needs the verb meaning to go well with and complete: the setting completes the mood of the plot. Complement, with an e, shares its root with complete; compliment, with an i, means praise.',
    more: 'Memory aid: a complement completes something, and both have e after the l: compl-e. A compliment is praise, and I like to get one: compl-i.',
    tip: "In an essay: 'The weather complements the mood, so the setting and the action feel as one.'",
  },
  compliment: {
    why: 'The gap needs the noun meaning a remark of praise: something the men might take as a compliment. Compliment, with an i, is praise; complement, with an e, is something that completes.',
    more: 'Memory aid: I like a compliment, so it has an i. A complement completes, so it shares the e of complete.',
    tip: "In your writing: a backhanded compliment, praise with a sting, can reveal a character's spite in one line.",
  },
  stationary: {
    why: 'The gap needs the adjective meaning not moving: the boat races so fast that the barges seem to stand still. Stationary, ending -ary, means standing still; stationery, ending -ery, means paper and pens.',
    more: "Memory aid: a for 'at a standstill'; e for the e's in 'letter'. The one that stands still has the a.",
    tip: 'Check it: if the sentence is about movement, or the lack of it, write the -ary form.',
  },
  stationery: {
    why: 'The gap needs the noun for writing materials: the comfort of having plenty of paper and pens. Stationery, ending -ery, is writing materials; stationary, ending -ary, means standing still.',
    more: 'A stationer was a seller of books and paper who kept a fixed stall, a station, rather than moving from place to place. The goods sold there take -ery.',
    tip: 'Check it: e for the letters you write on it; a for the car that sits at a standstill.',
  },
  passed: {
    why: 'The gap needs a verb: the months passed away, went by. Passed, ending -ed, is the action form of pass; past is a noun, adjective or preposition, never the verb itself.',
    more: "Test it: if you can put 'went by' in its place and the sentence still works as an action, write passed. 'The hours went by' works, so the verb is passed.",
    tip: "Check it: in 'She walked past the house' the action is walked; in 'She passed the house' the action is passed.",
  },
  past: {
    why: 'The gap needs a noun: you cannot repeat the past, the time before now. Past is the noun; passed, ending -ed, is the verb meaning went by.',
    more: 'Past can also be an adjective (in past years) or a preposition (she walked past the door), but it is never the action of passing itself.',
    tip: "In an essay: 'Scrooge's past explains how he became so cold.'",
  },
  breath: {
    why: "The gap needs a noun: scarce in breath means short of air. Breath, with no e, is the noun, with the short vowel of 'Beth'; breathe, with an e, is the verb, with the long vowel of 'seethe'.",
    more: 'Memory aid: the final e of the verb makes the vowel long, as e does in bath and bathe, and in cloth and clothe. The noun is short; the verb is long.',
    tip: "In your writing: 'Her breath hung in the frozen air' shows cold without naming it.",
  },
  breathe: {
    why: "The gap needs a verb after 'to': you seem to breathe quickly. Breathe, with a final e, is the verb, said with a long ee; breath, without the e, is the noun.",
    more: 'The same final e turns the noun wreath into the verb wreathe, and teeth into teethe. In each pair, the e makes the th soft, and the word becomes an action.',
    tip: "Check it: if 'to' fits in front of the word, it is the verb and needs the e.",
  },
  allusion: {
    why: "The gap needs the word for a reference: Rochester has just spoken of a Turkish sultan's court, and the reference stings Jane. Allusion, with a double l, comes from allude, to refer; illusion, with an i, is a false impression.",
    more: 'Memory aid: an allusion alludes, and both start all-. An illusion is ill-founded, and starts ill-. Writers use allusions to borrow the meaning of another story.',
    tip: "In an essay: 'The allusion to the Garden of Eden suggests a fall from innocence.'",
  },
  illusion: {
    why: 'The gap needs the word for a magic trick of the eyes: Oberon wants Helena brought by some illusion. Illusion, starting ill-, means something that tricks the senses; allusion, starting all-, is a reference.',
    more: "It comes from the Latin illudere, 'to mock' or 'to play with'. A magician creates illusions; a writer may expose them, showing the truth beneath.",
    tip: "In an essay: 'The Inspector strips away the family's illusion of innocence.'",
  },
  conscious: {
    why: 'The gap needs the adjective meaning aware: the animals were conscious of an uneasiness. Conscious ends -ious, as many adjectives do (anxious, curious); conscience, ending -ence, is the noun for your sense of right and wrong.',
    more: "Both come from the Latin conscire, 'to know together', which is why both have sc. Memory aid: you are conscious when you are awake; your conscience is what keeps you awake at night.",
    tip: "Check it: if 'aware' fits the gap, write conscious; if 'sense of right and wrong' fits, write conscience.",
  },
  climactic: {
    why: 'The gap needs the adjective from climax, the high point of a story: the climactic scene. Climatic, without the second c, is about weather and climate, so it cannot fit here.',
    more: 'Climactic is built from climax, whose x turns into ct: clima-C-tic. Climatic is built from climate. Keep the extra c when you mean the peak of the plot.',
    tip: "In an essay: 'The climactic fight brings every tension in the play to a head.'",
  },
  led: {
    why: "The gap needs the -ed form of lead after 'must have': God must have led me on. The form is led, with no a. Lead, with an a, is the present form, or the grey metal.",
    more: "People write 'lead' for this form because the metal lead sounds exactly like led. Remember: today I lead, yesterday I led.",
    tip: "Check it: if the sentence is about yesterday, write led: 'Greed led him to ruin.'",
  },
  minor: {
    why: 'The gap needs the adjective meaning lesser: an inn of minor reputation, not well known. Minor ends -or; miner, ending -er, is a person who digs in a mine.',
    more: "It comes from the Latin minor, 'smaller', the opposite of major. Memory aid: minor and major both end -or, a matching pair.",
    tip: "In an essay: 'Even a minor character like the Porter adds meaning to the play.'",
  },
  moral: {
    why: "The gap needs the noun for a lesson: a good moral, the lesson drawn from what has just been said. Moral, stressed MOR-al, is the lesson; morale, stressed mor-AHL, with a final e, is a group's spirit.",
    more: "It comes from the Latin moralis, 'to do with customs'. The stress tells them apart: MOR-al, the lesson; mor-ALE, the confidence of a team.",
    tip: "In an essay: 'The moral of the story is clear: greed destroys those who live by it.'",
  },
  morale: {
    why: "The gap needs the noun for a group's confidence and spirit: the troops' morale. Morale, with a final e, is stressed on the end, mor-AHL; moral, without it, is the lesson of a story.",
    more: "It comes from the French moral, used for a group's spirit. English added the final e to mark the stress on the last syllable and to keep it apart from moral.",
    tip: "In your writing: 'Morale sank with every cancelled match' shows a mood through events.",
  },
  precede: {
    why: "The gap needs the verb meaning to go before: Jane lets Mrs Fairfax walk into the room ahead of her. Precede, with pre-, 'before', ends -cede; proceed, with pro-, 'forward', ends -ceed, and could not be followed by 'me' here.",
    more: 'Memory aid: pre- means before, as in prefix and preview. Only three common words end -ceed (proceed, exceed and succeed), and this is not one of them.',
    tip: "Check it: if 'go before' or 'come before' fits the gap, write precede.",
  },
  proceed: {
    why: "The gap needs the verb meaning to go on: Victor will proceed with his story. Proceed, with pro-, 'forward', ends -ceed; precede, with pre-, 'before', ends -cede.",
    more: 'It is one of only three common words ending -ceed. Its noun changes spelling: procedure has a single e, but proceeds and proceeding keep both.',
    tip: "In your writing: in a speech, 'Let us proceed with care' sounds measured and calm.",
  },
  formally: {
    why: 'The gap needs the adverb from formal: summoned formally, in an official way. Formally is formal + ly; formerly, built on former, means in earlier times.',
    more: "Test it: if you can say 'in a formal way', write formally. If you can say 'in earlier times', write formerly. In much British speech the two sound the same.",
    tip: 'In your writing: an exam letter should be written formally, even when it is angry.',
  },
  formerly: {
    why: 'The gap needs the adverb meaning in earlier times: he no longer speaks as well of Wickham as he once did. Formerly is former + ly; formally, from formal, means in a correct, official way.',
    more: "Former means earlier, as in a former pupil. Add -ly and you have formerly. Test it: if 'in earlier times' fits, write formerly.",
    tip: "In your writing: 'The ruined mill, formerly the heart of the village...' adds history to a setting.",
  },
  council: {
    why: 'The gap needs the noun for a meeting to discuss and decide: they held a serious council by the fire. Council, ending -cil, is the meeting or group; counsel, ending -sel, is wise guidance.',
    more: 'A councillor, with a double l in British English, is a member of a council. A counsellor, with -sel, gives guidance.',
    tip: 'In your writing: in a letter to the local council, state your complaint in the first sentence.',
  },
  counsel: {
    why: 'The gap needs the noun for wise guidance: thank you for your good counsel. Counsel, ending -sel, means guidance, or to give it; council, ending -cil, is a group or meeting that decides.',
    more: "It comes from the Latin consilium, 'plan' or 'guidance'. A lawyer in court can also be called counsel, because lawyers guide their clients.",
    tip: "In an essay: 'Romeo ignores the friar's counsel to love moderately.'",
  },
  discreet: {
    why: 'The gap needs the adjective meaning careful not to draw attention: going abroad would cause less talk. Discreet ends -eet; discrete, ending -ete, means distinct, in parts.',
    more: "Memory aid: discreet keeps its two e's together, ee, close like a secret; discrete keeps its e's apart, like distinct pieces.",
    tip: "In your writing: 'A discreet cough from the doorway' shows a servant's manners in four words.",
  },
  discrete: {
    why: "The gap needs the adjective meaning distinct: three discrete sections, each standing alone. Discrete ends -ete, with the e's apart; discreet, ending -eet, means careful to keep a secret.",
    more: "It comes from the Latin discretus, 'divided'. Memory aid: in discrete, the t comes between the two e's and keeps them apart, just as the word means.",
    tip: "In an essay: 'The novel's discrete sections, told by different voices, piece the truth together.'",
  },
  eminent: {
    why: "The gap needs the adjective meaning famous and respected: several of the other ministers were eminent, yet the young minister's fame outshone them all. Eminent starts e-, from the Latin eminere, 'to stand out'; imminent, starting im-, means about to happen.",
    more: 'Memory aid: an eminent person is esteemed, and both words start with e. The eminent stand out; the imminent hang over you.',
    tip: "In an essay: 'The eminent doctor's spotless reputation hides a secret.'",
  },
  imminent: {
    why: 'The gap needs the adjective meaning about to happen: the danger of being crushed by the ice is close at hand. Imminent starts im-, as impending does; eminent, starting e-, means famous and respected.',
    more: "It comes from the Latin imminere, 'to hang over': an imminent danger hangs over you, ready to fall. Note the double m and the single n's: i-mm-i-n-e-n-t.",
    tip: "In your writing: 'Danger felt imminent' tells; 'The floorboards creaked behind her' shows.",
  },
  desert: {
    why: 'The gap needs the verb meaning to abandon: Pip had once meant to desert the convict who loved him. Desert, with one s, is the verb, stressed on the end, de-ZERT; dessert, with two, is the sweet course.',
    more: "The noun desert, a dry sandy place, is stressed on the start, DEZ-ert, and also has one s. Memory aid: dessert has two s's because it is so sweet: two sugars.",
    tip: "In an essay: 'As his allies desert him, Macbeth is left with nothing but his armour.'",
  },
  dessert: {
    why: 'The gap needs the noun for the sweet course: the dessert was carried out after nine. Dessert, with a double s, is the pudding; desert, with one s, is a dry place, or a verb meaning to abandon.',
    more: "It comes from the French desservir, 'to clear the table': dessert comes once the main dishes are cleared. Memory aid: dessert has two s's, like two sugars.",
    tip: 'In your writing: a dinner scene that lingers over dessert can slow time before a shock.',
  },
  aloud: {
    why: 'The gap needs the word meaning in a speaking voice: saying prayers aloud, so others can hear. It is a + loud. Allowed, which sounds the same, means permitted.',
    more: "The a- at the start means 'on' or 'in', as in asleep and ashore: this word means in a loud voice. Test it: if 'permitted' fits, write allowed.",
    tip: 'Check it: reading your work aloud is one of the best ways to catch slips before the exam.',
  },
  reign: {
    why: 'The gap needs the noun for a period of rule: the old Squire ruled his house, and his reign was a wifeless one. Reign has a silent g; rein, without it, is a strap for guiding a horse.',
    more: "It comes from the Latin regnum, 'kingdom', which explains the g, as in regal. Memory aid: a reign needs the g of a king.",
    tip: "In an essay: 'Macbeth's reign of terror turns Scotland into a grave.'",
  },
  rein: {
    why: "The gap needs the noun for what controls a horse, used here for control itself: no rein can hold back wickedness once it is running. Rein has no g; reign, with a g, is a king's or queen's rule.",
    more: "When a rider lets the reins go slack, the horse goes where it likes: that is free rein. 'Free reign' is a very common mistake, even in print.",
    tip: "Check it: to rein in is to pull the straps tight, and so to control: 'She reined in her anger.'",
  },
  lightning: {
    why: 'The gap needs the noun for the flash in a storm: the witches will meet in thunder, lightning or rain. Lightning has no e after the t: light + ning. Lightening, with an e, means becoming lighter.',
    more: 'Memory aid: lightning is too quick to stop for an e. Lightening is lighten + ing: the sky lightens at dawn, or a load lightens.',
    tip: "In your writing: 'Lightning split the sky' is stronger than 'There was lightning', because the verb does the work.",
  },
  lightening: {
    why: 'The gap needs the form meaning becoming lighter: the sky was lightening at dawn. It is lighten + ing, so it keeps the e. Lightning, with no e, is the flash in a storm.',
    more: 'Lighten means to make or become lighter, in colour or in weight, and adding -ing keeps every letter. Say it in three beats, light-en-ing, and the e is easy to hear.',
    tip: "In your writing: 'The sky was lightening over the hills' quietly marks the end of a long night.",
  },
  draft: {
    why: 'The gap needs the noun for an early version of a piece of writing: a quick first draft. In British English that is draft; draught, with ugh, is a current of air or a drink from a barrel.',
    more: 'British English keeps both spellings for different meanings: a draft essay or a bank draft, but a cold draught, draught beer and the game of draughts. American English uses draft for all of them.',
    tip: 'In the exam: a short plan is worth more than a full draft, because time is tight.',
  },
  draught: {
    why: 'The gap needs the noun for a drink, here a figurative one: the intoxicating draught is the dangerous thirst for discovery. In British English this is draught, with ugh; draft is a first version of writing.',
    more: 'The gh says f, as it does in laugh, so the word rhymes with craft. The board game draughts, and draught beer, use the same British spelling.',
    tip: "In your writing: 'A draught made the candle flicker' adds movement and unease to a still room.",
  },
  duel: {
    why: 'The gap needs the noun for a fight between two people: a duel at dawn. Duel, ending -uel, is the fight; dual, ending -ual, means having two parts.',
    more: "It comes from the Latin duellum, an old word for war that came to be linked with duo, 'two', because a duel is fought by two. Memory aid: a duel ends -el, as a quarrel does.",
    tip: "In an essay: 'The duel in the street shows how quickly pride turns to bloodshed.'",
  },
  dual: {
    why: "The gap needs the adjective meaning having two parts: the doctor's dual nature. Dual, ending -ual, means double; duel, ending -uel, is a fight between two people.",
    more: "It comes from the Latin dualis, from duo, 'two'. Memory aid: dual ends -al, as equal does: it describes, it does not fight.",
    tip: "In an essay: 'His dual nature is the novel's central idea: one man, two selves.'",
  },
  envelop: {
    why: 'The gap needs the verb meaning to wrap or surround: fog began to envelop the city. The verb has no final e and is stressed in the middle, en-VEL-op; envelope, with an e, is the paper cover for a letter.',
    more: "It comes from the Old French envoluper, 'to wrap up'. The stress moves: en-VEL-op the action, EN-ve-lope the thing. The verb's -ed form is enveloped, with one p.",
    tip: "In your writing: 'Darkness began to envelop the house' makes the night feel like a living thing.",
  },
  envelope: {
    why: 'The gap needs the noun for the paper cover of a letter: the lawyer asks whether the letter came in one. The noun ends with an e and is stressed at the start, EN-ve-lope; envelop, with no e, is the verb meaning to wrap.',
    more: 'The noun came into English from the French enveloppe. Memory aid: the e on the end seals the word, like the flap of the paper.',
    tip: "Check it: if 'a' or 'an' comes before the word, it is the noun and needs the final e.",
  },
  loathe: {
    why: "The gap needs the verb meaning to hate: Demetrius says he loathed Helena as a sick man loathes food. Loathe, with a final e, is the verb, with the soft th of 'clothe'; loath, without it, means unwilling.",
    more: "The same final e turns the noun sheath into the verb sheathe, with a soft th. The adjective for unwilling, without the e, ends with the hard th of 'both'.",
    tip: "In an essay: 'The two houses loathe each other so long that no one remembers why.'",
  },
  incite: {
    why: 'The gap needs the verb meaning to stir people up to act: Henry warns the Archbishop that many men will die in any war his reasoning stirs them to. Incite is in + cite and is a verb; insight, with an s and gh, is a noun meaning deep understanding.',
    more: "It comes from the Latin incitare, 'to set in motion'. The stress falls on the end, in-CITE, while insight is stressed at the start, IN-sight.",
    tip: "In an essay: 'Antony's speech incites the crowd to turn on the conspirators.'",
  },
  insight: {
    why: "The gap needs the noun meaning deep understanding: real insight into the writer's purpose. Insight is in + sight, seeing into something; incite, with a c, is a verb meaning to stir up.",
    more: 'Memory aid: an insight lets you see inside, so it contains sight. Incite has no sight in it; it starts something moving.',
    tip: 'In an essay: show insight by saying something about a quotation that is not obvious at first glance.',
  },
  cite: {
    why: 'The gap needs the verb meaning to quote as evidence: the devil can quote Scripture to suit himself. Cite starts with c; site is a place, and sight is the power of seeing.',
    more: "It comes from the Latin citare, 'to call': you call on a source to support you. The noun is citation, and to recite is to say a text from memory.",
    tip: 'In an essay: cite the shortest quotation that proves your point, then explore a single word in it.',
  },
  heroine: {
    why: 'The gap needs the noun for the main female character: the author says she never made herself the heroine of her own stories. The word ends -ine. Without the final e it becomes a quite different word, so the e matters.',
    more: "It comes from the Greek heroine, the female form of heros, 'hero'. The same -ine ending marks other female names and titles, such as Caroline and Josephine.",
    tip: "In an essay: 'Jane is an unusual heroine: plain, poor and fiercely honest.'",
  },
  storey: {
    why: 'The gap needs the noun for a floor of a building: a visit to the second storey. In British English a floor is a storey, with -ey; a story, with -y, is something told.',
    more: 'The plural keeps the e: storeys, not stories. American English uses story for both meanings, but British English keeps them apart.',
    tip: "In your writing: 'The tower rose six storeys above the town' gives the reader a clear sense of scale.",
  },
  bated: {
    why: "The gap needs the old word bated, meaning held back: with bated breath, holding your breath. It is bated, not 'baited', which means with bait on a hook. The moneylender imagines speaking this humbly to Antonio.",
    more: "Bated is a shortened form of abated, 'lessened': your breath is held back. The phrase is old, and appears in The Merchant of Venice.",
    tip: 'Check it: think of breath that has abated, or died down: bated, with no i.',
  },
  pique: {
    why: "The gap needs the verb meaning to stir up: to pique the reader's interest. Pique, from French, is spelt p-i-q-u-e. 'Peak', a high point, and 'peek', a quick look, are common mistakes here.",
    more: "It comes from the French piquer, 'to prick' or 'to sting'. A fit of pique is a moment of hurt pride, as if someone had been pricked.",
    tip: "In your writing: an opening that piques the reader's interest raises a question they want answered.",
  },
  pore: {
    why: "The gap needs the verb meaning to study closely: scientists who pore over the microscope. It is pore, not 'pour', which means to tip out a liquid. 'Pour over' is a very common mistake.",
    more: 'Pore over is a fixed phrase, always with over. A pore is also a tiny opening in the skin, but the verb has nothing to do with it.',
    tip: "In your writing: 'He pored over the letter for hours' suggests obsession in a few words.",
  },
  elicit: {
    why: 'The gap needs the verb meaning to draw out: the step should elicit an early answer. Elicit starts e-; illicit, starting ill-, means forbidden by law.',
    more: "It comes from the Latin elicere, 'to draw out', from e, 'out', and lacere, 'to lure'. The two words sound close but mean very different things.",
    tip: "In an essay: 'The writer's questions are designed to elicit agreement.'",
  },
  ensure: {
    why: 'The gap needs the verb meaning to make certain: the father took care to make sure his son had company. Ensure starts en-; insure, starting in-, means to protect with an insurance policy.',
    more: 'Both share sure. Memory aid: to ensure is to make sure; to insure is to buy insurance. The en- of ensure is the same as in enable.',
    tip: "Check it: if 'make sure' fits the gap, write ensure.",
  },
  foreword: {
    why: "The gap needs the noun for a book's introduction: in the foreword, a writer explains why the book matters. Foreword is fore + word, words that come before; forward means towards the front.",
    more: "Fore- means 'before', as in forecast. A foreword is a word before the main text. Memory aid: it has the word 'word' in it.",
    tip: 'Check it: if it is part of a book, write foreword; if it is a direction, write forward.',
  },
  wander: {
    why: 'The gap needs the verb meaning to walk without aim: here one could wander unseen. Wander, with an a, is to roam; wonder, with an o, is to think about or marvel at something.',
    more: "Memory aid: wander has an a, as in 'away': you wander away. Wonder has an o, as in 'oh': you wonder, and say 'oh'.",
    tip: "In your writing: 'She let her thoughts wander' moves a story inward, into a character's mind.",
  },
  alter: {
    why: 'The gap needs the verb meaning to change: how can a delay change the end? Alter ends -er; altar, ending -ar, is the holy table in a church.',
    more: "It comes from the Latin alter, 'other': to alter something is to make it other than it was. The same root gives alternative.",
    tip: "In your writing: 'Nothing could alter her mind' is weightier than 'Nothing could change her mind'.",
  },
  altar: {
    why: 'The gap needs the noun for the holy table where people marry: Mr Collins hopes to lead her to the altar. Altar ends -ar; alter, ending -er, is the verb meaning to change.',
    more: "It comes from the Latin altare, perhaps from altus, 'high', since altars were raised up. Memory aid: the altar stands at the far end of a church, and altar and far both end -ar.",
    tip: "In an essay: 'Juliet would rather face death than stand at the altar with Paris.'",
  },
  weary: {
    why: "The gap needs the adjective meaning very tired: you are wet, and you look weary. Weary, with ea, sounds like 'dreary'; wary, with a, means cautious and sounds like 'hairy'.",
    more: "Memory aid: weary and dreary share their ea and their mood. Wary has the a of 'alert'.",
    tip: "In your writing: 'His weary steps dragged on the stair' shows tiredness through movement.",
  },
  wary: {
    why: "The gap needs the adjective meaning watchful for danger: day has broken, so be wary. Wary, with a, sounds like 'hairy'; weary, with ea, means tired.",
    more: "It comes from the old word ware, 'watchful', which also gives aware and beware: all three keep the same a.",
    tip: "In an essay: 'The Nurse's warning to be wary shows how dangerous the lovers' secret has become.'",
  },
  vain: {
    why: "The gap needs the word in the phrase 'in vain', meaning with no result: he pressed on, but got nowhere. Vain, with ai, is this word; vein, with ei, is a blood vessel, and vane, with a-e, turns in the wind.",
    more: "Vain also means conceited, too proud of yourself. Both senses come from the Latin vanus, 'empty': empty effort, or empty pride.",
    tip: "In an essay: 'Every attempt to escape proves vain, and the ice closes in.'",
  },
  vein: {
    why: 'The gap needs the noun for a mood or style: a livelier vein of talk. Vein, with ei, is this word, first meaning a blood vessel; vain, with ai, means proud or useless.',
    more: 'A vein carries blood, and a seam of metal running through rock is also a vein; from there it came to mean a strand of mood running through talk or writing.',
    tip: "In an essay: 'The poem ends in a darker vein, as the speaker turns to grief.'",
  },
  heir: {
    why: 'The gap needs the noun for the person who will inherit: she is his only heir. Heir starts with a silent h, so it sounds like air, but it is spelt h-e-i-r.',
    more: "It comes from the Latin heres, 'heir', which also gives heritage and inherit, both keeping the h. The h in heir, like the h in honest and hour, is never sounded.",
    tip: "In an essay: 'Macbeth's hopes are blocked when Malcolm is named Duncan's heir.'",
  },
  tale: {
    why: 'The gap needs the noun for a story: is it not an odd tale? Tale, with -ale, is a story; tail, with -ail, is the end of an animal.',
    more: 'Tale is related to tell: a tale is something told, which is why tell and tale share t, e and l. A telltale is someone who tells tales.',
    tip: "In an essay, quote him exactly: life is a tale told by an idiot, 'full of sound and fury'.",
  },
  mantle: {
    why: "The gap needs the noun for a cloak: Antony holds up Caesar's mantle to the crowd. Mantle, ending -tle, is a cloak; mantel, ending -tel, is the shelf above a fireplace.",
    more: 'A mantle is also a duty handed on, as when a leader passes on the mantle. Mantel was once just another spelling of the same word, for the hood of stone above a fire.',
    tip: "In an essay: 'Antony uses Caesar's torn mantle to turn the crowd's grief into rage.'",
  },
  veil: {
    why: 'The gap needs the noun for fine cloth worn over the face: Olivia asks for her veil. Veil, with ei, is this word; vale, with a-e, is an old word for a valley.',
    more: "It comes from the Latin velum, 'a covering'. To unveil is to take the cover away, so the word also means to reveal something hidden.",
    tip: "In an essay: 'Olivia's veil hides her face, as her mourning hides her from the world.'",
  },
  rite: {
    why: 'The gap needs the noun for a ceremony: Claudio vows to perform this rite every year. Rite, with -ite, is a ceremony; right, with -ight, is what is correct, and write is to put words on paper.',
    more: "It comes from the Latin ritus, 'a custom or ceremony', which also gives ritual. A rite of passage is a ceremony that marks a stage in life.",
    tip: "In an essay: 'The rite at the tomb shows Claudio's sorrow, but it comes too late.'",
  },
  wreak: {
    why: 'The gap needs the verb meaning to inflict: why should she wreak revenge on all men? Wreak, with a silent w and ea, is this word; reek, with ee, means to smell strongly.',
    more: "It comes from the Old English wrecan, 'to drive out' or 'to avenge', when the w was still sounded. The usual phrases are 'wreak havoc' and 'wreak revenge'.",
    tip: "In an essay: 'The jilted bride raises a girl to wreak revenge on men.'",
  },
  hoard: {
    why: "The gap needs the noun for a hidden store: the squirrel's hoard of nuts. Hoard, with oa, is a store; horde, with or and a final e, is a large crowd.",
    more: 'Memory aid: a hoard is a store of gold, and both hoard and gold have an o and a d. A horde is a crowd on the move.',
    tip: "In your writing: 'A miser's hoard of coins lay hidden under the floor' paints a character in one image.",
  },
  allowed: {
    why: 'The gap needs the verb meaning let or permitted: they allowed the others to walk ahead. It is allow + ed; aloud, which sounds the same, means in a speaking voice.',
    more: "Test it: if 'let' or 'permitted' fits, write allowed, with the double l and the -ed. If 'out loud' fits, write aloud.",
    tip: 'Check it: allowed is always a form of allow, so it keeps the double l of allow.',
  },
  coarse: {
    why: "The gap needs the adjective meaning rough or crude: Pip is called a 'little coarse monster'. Coarse, with oa, is rough; course, with ou, is a route, a series of lessons, or a part of a meal.",
    more: 'The two were once one word: coarse began as a spelling of course, used of ordinary, everyday cloth, and so came to mean rough. The oa spelling settled in the 1500s.',
    tip: "In an essay: 'Pip is mocked as coarse and common, and he grows ashamed of his home.'",
  },
  forth: {
    why: 'The gap needs the word meaning forward or onwards: the Ghost waves Hamlet forth. Forth, with or, means onwards; fourth, with our, is the number after third.',
    more: 'Forth appears in set phrases: back and forth, and so forth, to set forth. If a number fits, write fourth, built from four; if a direction fits, write forth.',
    tip: 'Check it: fourth keeps the u of four; forth has no number in it at all.',
  },
  idle: {
    why: "The gap needs the adjective meaning lazy or doing nothing: 'you are idle, shallow things'. Idle, ending -le, is this word; idol, ending -ol, is something worshipped.",
    more: 'An idle engine is running but not working; an idle threat is one that will not be carried out. Memory aid: idle people lie about, and both idle and lie have an l and an e.',
    tip: "In an essay: 'The steward scorns the others as idle, but his own pride makes him the fool.'",
  },
  idol: {
    why: "The gap needs the noun for something worshipped: Belle says a golden idol has taken her place in Scrooge's heart. Idol, ending -ol, is this word; idle, ending -le, means lazy.",
    more: "It comes from the Greek eidolon, 'an image': an idol was first an image worshipped as a god. Memory aid: an idol is often of gold, and both have an o and an l.",
    tip: "In an essay: 'Money becomes Scrooge's golden idol, taking the place of love.'",
  },
  peer: {
    why: 'The gap needs the verb meaning to look closely: a longing to peer into the pit. Peer, with ee, is this word; pier, with ie, is a structure built out over water.',
    more: 'Peer also means an equal, as in peer pressure, and a lord, as in the House of Lords. All three senses share one spelling, with a double e.',
    tip: "In your writing: 'She peered into the gloom' is tenser than 'She looked into the dark'.",
  },
  berth: {
    why: 'The gap needs the noun for a sleeping place on a ship: he has taken a berth on a ship bound for India. Berth, with er, is this word; birth, with ir, is being born.',
    more: 'To give someone a wide berth is to keep well away from them, as ships kept clear of each other. Memory aid: a berth is on a vessel, and both have an e.',
    tip: 'Check it: if the sentence is about being born, write birth; if it is about a place to sleep or to moor, write berth.',
  },
  suite: {
    why: "The gap needs the noun for a set of rooms: a swell suite at the hotel. Suite, from French, is said 'sweet' but spelt s-u-i-t-e; a suit is clothing, and sweet is sugary.",
    more: "It comes from the French suite, 'a following' or 'a set': a suite of rooms, of furniture or of music. It is the same word as suit, with a French spelling and sound.",
    tip: 'Check it: three words, three spellings: suite (rooms), suit (clothes), sweet (sugar).',
  },
  exult: {
    why: "The gap needs the verb meaning to rejoice in triumph: Jane's soul begins to exult. Exult, with a u, means to rejoice; exalt, with an a, means to praise or raise up high.",
    more: "It comes from the Latin exsultare, 'to leap up for joy'. Exalt comes from altus, 'high', as in altitude, which is the way to keep the two apart.",
    tip: "In an essay: 'Jane exults in her freedom after standing up to Mrs Reed, but the feeling soon fades.'",
  },
  gait: {
    why: "The gap needs the noun for a way of walking: 'I know his gait'. Gait, with ai, is this word; gate, with a and a final e, is a door in a fence or wall.",
    more: 'Gait was once another spelling of gate, an old word for a way or path, and the spellings split to keep the meanings apart. You can know someone by their gait before you see their face.',
    tip: "In your writing: 'His limping gait gave him away' identifies a character without naming him.",
  },
  faint: {
    why: 'The gap needs the adjective meaning weak or slight: she gave a faint cry. Faint, with ai, is this word; feint, with ei, is a pretend move to mislead.',
    more: "Faint also means to pass out. Strangely, faint and feint both come from the Old French feindre, 'to pretend', but the spellings split to keep the meanings apart.",
    tip: "In your writing: 'a faint light under the door' builds more suspense than 'a light'.",
  },
  feint: {
    why: "The gap needs the noun for a pretence meant to mislead: Victor wonders if the creature's promise is a feint. Feint, with ei, is this word; faint, with ai, means weak or slight.",
    more: "It comes from the French feinte, 'a pretence', from feindre, 'to pretend', as in feign. A boxer's feint is a pretend punch that tricks the opponent.",
    tip: 'Check it: feint keeps the ei of feign, its cousin; both are about pretending.',
  },
  censure: {
    why: 'The gap needs the noun for blame or disapproval: would you brave censure for my sake? Censure, ending -ure, is blame; censor, ending -or, is to cut parts out of a text or film.',
    more: "Both come from the Latin censere, 'to judge', which also gives census. A censor cuts; censure condemns.",
    tip: "In an essay: 'Society's censure frightens the characters more than their own guilt does.'",
  },
  assent: {
    why: 'The gap needs the verb meaning to agree: it was all Pip could do to assent. Assent, with ss, means agreement; ascent, with sc, is a climb.',
    more: "It comes from the Latin assentire, 'to agree with', from ad, 'to', and sentire, 'to feel', as in consent. The ad became as before the s, giving the double s.",
    tip: "In your writing: 'She gave her assent with a single nod' shows agreement without a word.",
  },
  ascent: {
    why: 'The gap needs the noun for a climb: he reached the top of the ascent. Ascent, with sc, is a climb or the way up; assent, with ss, means agreement.',
    more: "It comes from ascend, from the Latin ascendere, 'to climb', which keeps the sc; descend and descent follow the same pattern.",
    tip: 'Check it: if the word is about going up, write it with sc, as ascend is.',
  },
  excess: {
    why: "The gap needs the noun for too much: the rewritten commandment forbids drinking 'TO EXCESS'. Excess, starting ex-, means too much; access, starting ac-, is a way in.",
    more: "It comes from the Latin excedere, 'to go beyond', as in exceed. Excess goes beyond the limit; access is the way to reach something.",
    tip: "In an essay: 'The pigs add two words to the commandment, quietly changing its meaning.'",
  },
  averse: {
    why: 'The gap needs the adjective meaning strongly unwilling: his father is averse to delay. Averse means opposed or unwilling; adverse, with a d, means harmful, as in adverse weather.',
    more: "Both come from the Latin vertere, 'to turn': averse is turned away from something, adverse is turned against you. Memory aid: averse goes with aversion, a dislike.",
    tip: 'Check it: a person is averse to something; conditions are adverse.',
  },
  throne: {
    why: "The gap needs the noun for a royal seat: the barge shone like a burnished throne. Throne, with an e at the end, is the seat; thrown, ending -own, is a form of the verb throw, as in 'had thrown'.",
    more: "It comes from the Greek thronos, 'a high seat'. The final e makes the o long; thrown is built from throw, so it ends like grown and shown.",
    tip: "In an essay: 'Macbeth gains the throne but never the peace he hoped for.'",
  },
}
