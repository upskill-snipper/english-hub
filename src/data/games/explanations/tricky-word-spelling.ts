import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Tricky Word Sprint: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/tricky-word-spelling.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'becuase|because|becouse|becasue': {
    why: "The correct spelling is 'because'. The letters are b-e-c-a-u-s-e, with a before u. We use it to give a reason: 'I stayed at home because it was raining.'",
    not: {
      becuase: 'The a and u are the wrong way round. After c, the order is a, then u: c-a-u-s-e.',
      becouse: 'This has o where it needs a. The middle of the word is c-a-u-s-e.',
      becasue: 'The u and s are the wrong way round. The ending is u, then s, then e: -use.',
    },
    more: "'Because' is 'be' plus 'cause'. If you can spell 'cause', you can spell 'because'.",
    tip: "Say 'be-cause' in two chunks as you write it. In school work, write the full word and never shorten it to 'cos'.",
  },
  'freind|frend|friend|friende': {
    why: "The correct spelling is 'friend'. The letters are f-r-i-e-n-d, with i before e. A friend is a person you like and know well: 'She is my best friend.'",
    not: {
      freind: "The i and e are the wrong way round. In 'friend' the i comes first: f-r-i-e-n-d.",
      frend: 'The i is missing. After f-r you need both i and e.',
      friende: 'There is an extra e at the end. The word ends in -nd.',
    },
    more: "Words made from 'friend' keep the same spelling: friendly, friendship, boyfriend.",
    tip: "Make a list of other 'ie' words and practise them together: friend, field, piece, believe.",
  },
  'beutiful|beautiful|beautifull|beatiful': {
    why: "The correct spelling is 'beautiful'. It starts with beau (b-e-a-u), then ti, then ful: beau-ti-ful. Example: 'The garden looks beautiful in spring.'",
    not: {
      beutiful: 'The a is missing. The start of the word is b-e-a-u, with both a and u.',
      beautifull: 'This has two l letters at the end. The ending -ful has only one l.',
      beatiful: 'The u is missing. After b-e-a you also need u: b-e-a-u.',
    },
    more: "'Beautiful' comes from 'beauty'. The y changes to i before -ful. The ending -ful always has one l: careful, helpful, useful.",
  },
  'diffrent|different|differant|diferent': {
    why: "The correct spelling is 'different'. It has a double f, then er, then ent: dif-fer-ent. Example: 'My two bags are different colours.'",
    not: {
      diffrent: 'The e after the double f is missing. Write dif-fer-ent: f, e, r come together.',
      differant: 'The ending is wrong. It is -ent, with e, not -ant.',
      diferent: 'This has one f. The word has a double f at the start: d-i-f-f.',
    },
    more: "'Different' comes from the verb 'differ'. The noun, 'difference', ends in -ence.",
    tip: "Many people say 'diff-rent' with two parts, but you must write three: dif-fer-ent.",
  },
  'bussiness|buisness|business|bisness': {
    why: "The correct spelling is 'business'. It starts with busi (b-u-s-i) and ends with ness: busi-ness. Example: 'My uncle has a small business.'",
    not: {
      bussiness: 'This has a double s in the middle. The start is bus-i, with one s before the i.',
      buisness: 'The s and i are the wrong way round. The order is b-u-s-i.',
      bisness:
        'The u is missing, and the i and s are the wrong way round. The first four letters are b-u-s-i.',
    },
    more: "'Business' is 'busy' with the y changed to i, plus -ness. It sounds like 'biz-ness', but the u is still in the spelling.",
  },
  'surprise|suprise|surprice|surpise': {
    why: "The correct spelling is 'surprise'. It has two r letters with a p between them, and it ends in -ise: s-u-r-p-r-i-s-e. Example: 'The party was a big surprise.'",
    not: {
      suprise: 'The first r is missing. The word starts s-u-r-p, with r before the p.',
      surprice: "The ending is wrong. 'Surprise' ends in -ise, with s, not c.",
      surpise: 'The second r is missing. After the p, write r: s-u-r-p-r-i-s-e.',
    },
    more: 'Surprise, advertise, exercise and revise all end in -ise, never -ize.',
  },
  'adress|addres|address|adresse': {
    why: "The correct spelling is 'address'. It has a double d and a double s: a-d-d-r-e-s-s. Example: 'What is your home address?'",
    not: {
      adress: 'A d is missing. The word starts with a double d: a-d-d-r.',
      addres: 'An s is missing. The word ends in a double s: -ss.',
      adresse:
        'This has one d and ends in -sse. The word has a double d and ends in -ss, with no e.',
    },
    more: 'Other words that end in a double s: dress, press, class, glass, business.',
  },
  'callendar|calandar|calendar|calander': {
    why: "The correct spelling is 'calendar'. The middle is -len- and the ending is -ar: c-a-l-e-n-d-a-r. Example: 'I wrote the test date on the calendar.'",
    not: {
      callendar: "This has a double l. 'Calendar' has only one l.",
      calandar: 'The middle is wrong. It has -lan-, but the word has -len-, with e.',
      calander: 'Two letters are wrong. It needs e in the middle (-len-) and a at the end (-ar).',
    },
    more: 'A calendar shows the days and months. Months and days start with a capital letter: January, Monday. A common slip is to end the word in -er. It ends in -ar.',
    tip: "Look for the word 'end' in the middle: cal-end-ar.",
  },
  'restaraunt|restaurant|resturant|restarant': {
    why: "The correct spelling is 'restaurant'. After rest comes au, then rant: r-e-s-t-a-u-r-a-n-t. Example: 'We had dinner in a restaurant.'",
    not: {
      restaraunt: 'The au is in the wrong place. It comes straight after rest, then r-a-n-t.',
      resturant: 'The a is missing. After rest, the word has a and u: rest-au-rant.',
      restarant: 'The u is missing. After rest-a, you need u: rest-au-rant.',
    },
    more: 'The word comes from French, so the au looks unusual.',
    tip: "Do not spell it as it sounds. Many people say 'res-trant', but you must write the a and the u.",
  },
  'foriegn|forein|foreign|forreign': {
    why: "The correct spelling is 'foreign'. The letters are f-o-r-e-i-g-n, with e before i and a g before the n. Example: 'She speaks three foreign languages.'",
    not: {
      foriegn:
        "The e and i are the wrong way round. In 'foreign' the e comes first: f-o-r-e-i-g-n.",
      forein: 'The g is missing. The word ends in -eign, with g before n.',
      forreign: "This has a double r. 'Foreign' has only one r.",
    },
    more: "The rule 'i before e' does not work here. Foreign is an exception, like 'weird' and 'seize'. The g is silent, but you must write it.",
  },
  'que|queue|quew|queu': {
    why: "The correct spelling is 'queue'. It sounds like the letter Q, but it has four more letters after the q: q-u-e-u-e. Example: 'There was a long queue at the bus stop.'",
    not: {
      que: "This is too short. 'Queue' has two u letters and two e letters: q-u-e-u-e.",
      quew: 'The ending is wrong. There is no w. After q, the letters are u, e, u, e.',
      queu: 'The last e is missing. The word ends in -ueue.',
    },
    more: "A queue is a line of people waiting. It is the usual British word. Many Americans say 'line' instead.",
  },
  'Wensday|Wednsday|Wednesday|Wendsday': {
    why: "The correct spelling is 'Wednesday'. It has a d and an e that you do not say: W-e-d-n-e-s-d-a-y. Days of the week start with a capital letter. Example: 'We have English on Wednesday.'",
    not: {
      Wensday:
        'The d after We is missing, and so is the e after the n. The word begins W-e-d-n-e-s.',
      Wednsday: 'The e after the n is missing. The middle is -nes-: W-e-d-n-e-s-d-a-y.',
      Wendsday: 'The d and n are in the wrong order, and an e is missing. The word begins Wed-nes.',
    },
    more: "The name comes from 'Woden's day'. Woden was an old god of early England, and the spelling still keeps the d from his name.",
  },
  'definately|definitely|definatly|definetly': {
    why: "The correct spelling is 'definitely'. The middle is -ite-, with i, and the e stays before -ly: d-e-f-i-n-i-t-e-l-y. Example: 'I will definitely come to your party.'",
    not: {
      definately: 'The middle has a where it needs i. It is -ite-, not -ate-.',
      definatly: 'Two mistakes: it has a instead of i, and the e before -ly is missing.',
      definetly:
        'The vowels are wrong: it has e where i belongs, and the e after the t is missing. The ending is -itely.',
    },
    more: "'Definitely' comes from 'definite'. Add -ly and keep the e: definite + ly.",
    tip: 'The common mistake is -ately. Check the letter after the n: it is i.',
  },
  'seperate|separate|seperete|saparate': {
    why: "The correct spelling is 'separate'. The letters are s-e-p-a-r-a-t-e, with a after the p and a before the t. Example: 'Please keep the red pens separate.'",
    not: {
      seperate: 'The a after p is written as e. It should be sep-a-rate, with a.',
      seperete: 'Two letters are wrong. Both e letters in the middle should be a: sep-a-r-a-te.',
      saparate: 'The first vowel is wrong. The word starts s-e-p, with e, not a.',
    },
    more: "The same spelling is used for the verb ('separate the eggs') and the adjective ('separate rooms').",
  },
  'neccessary|necesary|necessary|neccesary': {
    why: "The correct spelling is 'necessary'. It has one c and a double s: n-e-c-e-s-s-a-r-y. Example: 'It is necessary to wear a seat belt.'",
    not: {
      neccessary: 'This has a double c. The word has only one c, near the start: n-e-c.',
      necesary: 'An s is missing. The word has a double s in the middle: -ess-.',
      neccesary: 'The double letters are in the wrong place. Write one c and a double s.',
    },
    more: "The opposite is 'unnecessary': un + necessary, so it has a double n: u-n-n-e-c-e-s-s-a-r-y.",
  },
  'enviroment|environment|enviornment|enviromnent': {
    why: "The correct spelling is 'environment'. It has -iron- in the middle and -ment at the end: e-n-v-i-r-o-n-m-e-n-t. Example: 'We should protect the environment.'",
    not: {
      enviroment: 'The n after -iro is missing. The word has -iron-, then -ment.',
      enviornment: 'The o and r are the wrong way round. The word has -iron-, with r before o.',
      enviromnent: 'The m and n are the wrong way round. After -iro comes n, then m: -ironm-.',
    },
    more: "The adjective is 'environmental': the same letters plus -al.",
  },
  'begining|beggining|beginning|begginning': {
    why: "The correct spelling is 'beginning'. It is 'begin' with the n doubled before -ing: b-e-g-i-n-n-i-n-g. Example: 'At the beginning of the lesson, we read.'",
    not: {
      begining: 'The n is not doubled. Write n twice before -ing: begin + n + ing.',
      beggining: 'The wrong letter is doubled. This doubles the g, but you double the n.',
      begginning: 'There is an extra g. Only the n is doubled: b-e-g-i-n-n-i-n-g.',
    },
    more: "Double the last letter when the word ends in one vowel and one consonant and the stress is on the last part: be-GIN becomes beginning. 'Open' has its stress at the start, so it becomes opening.",
    tip: 'Short words double the last letter in a similar way: run becomes running, and sit becomes sitting.',
  },
  'untill|untl|until|unitl': {
    why: "The correct spelling is 'until'. It is one word with one l at the end: u-n-t-i-l. We use it to say when something stops: 'Wait here until I come back.'",
    not: {
      untill: "This has two l letters at the end. 'Until' has only one.",
      untl: 'The i is missing. The word is u-n-t-i-l, with i before the l.',
      unitl: 'The i and t are the wrong way round. After n, write t, then i: u-n-t-i-l.',
    },
    more: "'Until' and 'till' mean the same. Only 'till' has two l letters, so do not write 'untill'.",
  },
  'whic|whitch|which|wihch': {
    why: "The correct spelling is 'which'. It starts with wh and ends with ich: w-h-i-c-h. We use it to ask about a choice: 'Which bag is yours?'",
    not: {
      whic: 'The last h is missing. The word ends in -ich: w-h-i-c-h.',
      whitch: 'This has an extra t. The ending is -ich, with no t.',
      wihch: 'The i and h are in the wrong order. After w, write h, then i: w-h-i-c-h.',
    },
    more: "Do not mix up 'which' with 'witch', a woman in stories. They sound the same in many accents, but 'which' has wh and no t.",
  },
  'recieve|receive|receeve|receve': {
    why: "The correct spelling is 'receive'. After c, the letters are e then i: r-e-c-e-i-v-e. This follows the rule 'i before e, except after c'. Example: 'I receive a letter every week.'",
    not: {
      recieve: 'The i and e are the wrong way round. After c, write e before i: c-e-i.',
      receeve: 'The i is written as e. After c, the letters are e and i: -ceive.',
      receve: 'The i is missing. After the second e comes i, then v: -ceive.',
    },
    more: 'Other words with ei after c: receipt, deceive, ceiling, perceive.',
  },
  'beleive|believe|beleeve|believ': {
    why: "The correct spelling is 'believe'. The middle has i before e: b-e-l-i-e-v-e. We use it for something you think is true: 'I believe you.'",
    not: {
      beleive: 'The i and e are the wrong way round. After l, write i, then e: -lieve.',
      beleeve: 'The i is written as e. The word has i and e: b-e-l-i-e-v-e.',
      believ: 'The final e is missing. The word ends in -ieve.',
    },
    more: "Other words with the same pattern: achieve, relieve, field, piece. The rule 'i before e' works because there is no c before the letters.",
  },
  'acheive|achieve|acheeve|achive': {
    why: "The correct spelling is 'achieve'. The ending is -ieve, with i before e: a-c-h-i-e-v-e. Example: 'You can achieve your goals if you practise.'",
    not: {
      acheive: 'The i and e are the wrong way round. After ach, write i, then e.',
      acheeve: 'The i is written as e. The word has i and e: -chieve.',
      achive: 'The e after the i is missing. The ending is -ieve, not -ive.',
    },
    more: "'Achieve' follows the same 'i before e' pattern as 'believe'. The noun 'achievement' keeps the e before -ment.",
  },
  'tommorow|tomorow|tomorrow|tommorrow': {
    why: "The correct spelling is 'tomorrow'. It has one m and a double r: t-o-m-o-r-r-o-w. Example: 'I will see you tomorrow.'",
    not: {
      tommorow: 'This has a double m and one r. The word has one m and a double r.',
      tomorow: 'One r is missing. The word has a double r: -rr-.',
      tommorrow: "This has a double m. 'Tomorrow' has only one m.",
    },
    more: "The word is 'to' plus 'morrow'. 'Morrow' is an old word for the next day, and it has a double r.",
  },
  'favourate|favourit|favourite|faverite': {
    why: "The correct British spelling is 'favourite'. It has our, like 'colour', and ends in -ite: f-a-v-o-u-r-i-t-e. Example: 'Blue is my favourite colour.'",
    not: {
      favourate: 'The ending is wrong. It is -ite, with i, not -ate.',
      favourit: 'The final e is missing. The word ends in -ite.',
      faverite: 'The ou is replaced by e. In British English the start is favour-: f-a-v-o-u-r.',
    },
    more: 'American English leaves out the u in this word. British English keeps it, as in colour, neighbour and honour.',
    tip: 'In school work in the UK, use the British spellings. A spell checker set to American English may remove the u.',
  },
  'colour|coulor|colur|collour': {
    why: "The correct British spelling is 'colour'. The ending is -our: c-o-l-o-u-r. Example: 'What colour is your bag?'",
    not: {
      coulor: 'The u is in the wrong place. The ending is -our: col-our.',
      colur: 'The second o is missing. The ending is -our, with o before u.',
      collour: "This has a double l. There is only one l in 'colour'.",
    },
    more: 'American English leaves out the u. British English keeps it in colour, favourite, neighbour and behaviour.',
  },
  'neighbour|nieghbour|naybour|neibour': {
    why: "The correct British spelling is 'neighbour'. It starts with neigh (n-e-i-g-h) and ends with bour: n-e-i-g-h-b-o-u-r. Example: 'Our neighbour has a friendly dog.'",
    not: {
      nieghbour: 'The e and i are the wrong way round. The word starts n-e-i-g-h.',
      naybour: 'This is spelled as it sounds. The first part is written neigh, not nay.',
      neibour: 'The gh is missing. The word has neigh before the b.',
    },
    more: "The letters eigh sound like 'ay' here, as in 'eight' and 'weigh'. American English leaves out the u in the ending.",
  },
  'accross|acros|across|akross': {
    why: "The correct spelling is 'across'. It is a + cross: a-c-r-o-s-s, with one c and a double s. Example: 'We walked across the bridge.'",
    not: {
      accross: "This has a double c. 'Across' has only one c.",
      acros: "An s is missing. The word ends in a double s, like 'cross'.",
      akross: "The k is wrong. We write c in 'across', not k.",
    },
    more: "If you can spell 'cross', you can spell 'across': add an a at the start.",
  },
  'allways|always|alwais|olways': {
    why: "The correct spelling is 'always'. It has only one l: a-l-w-a-y-s. We use it for something that happens every time: 'She always arrives early.'",
    not: {
      allways: "This has a double l. 'Always' has only one l.",
      alwais: 'The ending is wrong. It is -ways, with y, not -wais.',
      olways: 'The first letter is wrong. The word starts with a, not o.',
    },
    more: "Put 'always' before the main verb ('I always walk to school') but after 'am', 'is' and 'are' ('She is always late').",
  },
  'arguement|argument|argumant|arguemnt': {
    why: "The correct spelling is 'argument'. The verb 'argue' loses its e before -ment: a-r-g-u-m-e-n-t. Example: 'They had an argument about the film.'",
    not: {
      arguement: "This keeps the e from 'argue'. Drop the e: argu + ment.",
      argumant: 'The ending is wrong. It is -ment, with e, not -mant.',
      arguemnt: 'The m and e are the wrong way round. The ending is -ment: m, e, n, t.',
    },
    more: "Most words keep the final e before -ment or -ly: move becomes movement, and safe becomes safely. 'Argue' drops it: argument. So does 'true': truly.",
  },
  'embarass|embarrass|embaras|embarras': {
    why: "The correct spelling is 'embarrass'. It has a double r and a double s: e-m-b-a-r-r-a-s-s. Example: 'Please do not embarrass me in front of my friends.'",
    not: {
      embarass: 'One r is missing. The word has a double r in the middle: -arr-.',
      embaras: 'One r and one s are missing. The word has a double r and a double s.',
      embarras: 'One s is missing. The word ends in a double s: -ss.',
    },
    more: "The adjective 'embarrassed' and the noun 'embarrassment' keep both double letters.",
  },
  'occassion|occasion|ocasion|ocassion': {
    why: "The correct spelling is 'occasion'. It has a double c and one s: o-c-c-a-s-i-o-n. Example: 'My birthday is a special occasion.'",
    not: {
      occassion: "This has a double s. 'Occasion' has only one s.",
      ocasion: 'One c is missing. The word starts with a double c: o-c-c-a.',
      ocassion: 'This has one c and a double s. The word has a double c and one s.',
    },
    more: "The adverb 'occasionally' starts the same way: occasion + ally.",
  },
  'posession|possesion|possession|posesion': {
    why: "The correct spelling is 'possession'. It has four s letters in two pairs: p-o-s-s-e-s-s-i-o-n. Example: 'Please keep your phone in your possession.'",
    not: {
      posession: 'The first pair of s letters has only one s. After po, write two s letters.',
      possesion: 'The second pair of s letters has only one s. After the e, write two s letters.',
      posesion: 'Both pairs have only one s. Each pair needs two: po-ss-e-ss-ion.',
    },
    more: "A possession is something that you own. The verb 'possess' also has four s letters.",
  },
  'grammer|gramar|grammar|gramer': {
    why: "The correct spelling is 'grammar'. It has a double m and ends in -ar: g-r-a-m-m-a-r. Example: 'We study English grammar at school.'",
    not: {
      grammer: 'The ending is wrong. It is -ar, not -er.',
      gramar: 'An m is missing. The word has a double m in the middle: g-r-a-m-m-a-r.',
      gramer: "This has one m and ends in -er. 'Grammar' has a double m and ends in -ar.",
    },
    more: 'Grammar means the rules for putting words together in a language.',
  },
  'Febuary|February|Februery|Feburary': {
    why: "The correct spelling is 'February'. The first r is easy to forget: F-e-b-r-u-a-r-y. Months start with a capital letter. Example: 'My birthday is in February.'",
    not: {
      Febuary: 'The first r is missing. After Feb, write r, then u: Feb-ru-ary.',
      Februery: 'The ending is wrong. It is -uary, with a, not -uery.',
      Feburary: 'The u and r are the wrong way round. After Feb, write r, then u.',
    },
    more: "Many people say 'Feb-yoo-ary', but the spelling has an r after Feb. Say 'Feb-roo-ary' slowly when you write it.",
  },
  'probaly|probably|probebly|probbly': {
    why: "The correct spelling is 'probably'. It has three parts, prob-ab-ly, so the b comes twice: p-r-o-b-a-b-l-y. Example: 'It will probably rain tomorrow.'",
    not: {
      probaly: 'The second b is missing. After the a, write b: prob-ab-ly.',
      probebly: 'The a is written as e. The middle is -ab-, with a.',
      probbly: 'The a is missing. The word has prob, then a, then b: prob-a-b-ly.',
    },
    more: "'Probably' comes from 'probable'. The ending -le changes to -ly. It means 'very likely'.",
  },
  'intresting|interesting|intersting|interrsting': {
    why: "The correct spelling is 'interesting'. It has two e letters: i-n-t-e-r-e-s-t-i-n-g. Example: 'That is an interesting book.'",
    not: {
      intresting: 'The first e is missing. The word starts inter, with e after the t.',
      intersting: 'The second e is missing. After inter, write e: inter-e-sting.',
      interrsting: 'This has a double r. After inter, the next letter is e, not r.',
    },
    more: "Many people say 'in-tres-ting', with fewer parts. You must write four: in-ter-est-ing.",
  },
  'libary|library|librery|liberary': {
    why: "The correct spelling is 'library'. It has two r letters: l-i-b-r-a-r-y. Example: 'I borrow books from the library.'",
    not: {
      libary: 'An r is missing. After the b, write r: lib-r-a-r-y.',
      librery: 'The ending is wrong. It is -rary, with a, not -rery.',
      liberary: 'There is an extra e. The word is lib-rar-y, with no e.',
    },
    more: "'Library' comes from the Latin word 'liber', which means book. A library lends books, but a bookshop sells them.",
  },
  'decison|desicion|decision|decistion': {
    why: "The correct spelling is 'decision'. It comes from 'decide' and ends in -sion: d-e-c-i-s-i-o-n. Example: 'It was a hard decision.'",
    not: {
      decison: 'An i is missing before the o. The ending is -ision.',
      desicion: 'The c and s are mixed up. The word starts dec, with c, then is: d-e-c-i-s.',
      decistion: 'There is an extra t. The ending is -sion, not -stion.',
    },
    more: 'Some verbs that end in -de change to -sion: decide becomes decision, divide becomes division, collide becomes collision.',
  },
  'definate|definit|definite|definete': {
    why: "The correct spelling is 'definite'. The ending is -ite, with i: d-e-f-i-n-i-t-e. It means clear and certain. Example: 'We need a definite answer by Friday.'",
    not: {
      definate: 'The a is wrong. The ending is -ite, with i, not -ate.',
      definit: 'The final e is missing. The word ends in -ite.',
      definete: 'The ending is wrong. It is -ite, with i, not -ete.',
    },
    more: "Add -ly to make 'definitely' and keep the e. The opposite, 'indefinite', means not fixed or not clear.",
  },
  'truely|truly|trooly|truley': {
    why: "The correct spelling is 'truly'. The word 'true' loses its e before -ly: t-r-u-l-y. Example: 'I am truly sorry.'",
    not: {
      truely: "This keeps the e from 'true'. Drop it: tru + ly.",
      trooly: 'This is spelled as it sounds. The spelling uses u, not oo.',
      truley: "There is an extra e. 'Truly' has no e at all.",
    },
    more: "'True' is one of a few words that drop the e before -ly. Most keep it: sure becomes surely, and nice becomes nicely.",
  },
  'begginer|beginer|beginner|biginner': {
    why: "The correct spelling is 'beginner'. It is 'begin' with the n doubled before -er: b-e-g-i-n-n-e-r. Example: 'This class is for beginners.'",
    not: {
      begginer: 'The wrong letter is doubled. This doubles the g, but you double the n.',
      beginer: 'The n is not doubled. Write n twice before -er: begin + n + er.',
      biginner: 'The first vowel is wrong. The word starts b-e-g, with e after the b.',
    },
    more: "The stress is on the last part of 'begin', so the n doubles. Short words do the same: run becomes runner, and swim becomes swimmer.",
  },
  'wierd|weird|weard|weirde': {
    why: "The correct spelling is 'weird'. It has e before i: w-e-i-r-d. This is an exception to the rule 'i before e'. Example: 'That is a weird noise.'",
    not: {
      wierd: "The i and e are the wrong way round. In 'weird' the e comes first: w-e-i-r-d.",
      weard: 'The i is written as a. The word has e and i together: w-e-i-r-d.',
      weirde: 'There is an extra e at the end. The word ends in -rd.',
    },
    more: "Weird means strange. A few words break the 'i before e' rule, such as weird, seize and foreign.",
  },
  'piece|peice|piec|peese': {
    why: "The correct spelling is 'piece'. It has ie after p and ends in -ce: p-i-e-c-e. Example: 'Can I have a piece of cake?'",
    not: {
      peice: "The i and e are the wrong way round. In 'piece' the i comes first: p-i-e-c-e.",
      piec: 'The last e is missing. The word ends in -ce: p-i-e-c-e.',
      peese: 'The first vowel is wrong, and the ending is -se. The word starts pie and ends -ce.',
    },
    more: "Do not mix up 'piece' (a part of something) with 'peace' (a calm time without war). They sound the same but are spelled differently.",
  },
  'thier|theire|their|theyr': {
    why: "The correct spelling is 'their'. It means 'belonging to them': t-h-e-i-r. Example: 'The students left their bags in the classroom.'",
    not: {
      thier: 'The i and e are the wrong way round. After th, write e, then i: t-h-e-i-r.',
      theire: 'There is an extra e at the end. The word ends in -ir.',
      theyr: "The ending is wrong. 'Their' ends in -eir, not -eyr.",
    },
    more: "Three words sound the same: 'their' (belonging to them), 'there' (a place, as in 'Put it there') and 'they’re' (they are). Choose by meaning.",
    tip: "Test it: if the word 'our' fits in the same place, write 'their'. 'Our bags' becomes 'their bags'.",
  },
  'wan’t|won’t|woun’t|wo’nt': {
    why: "The correct spelling is 'won’t'. It is the short form of 'will not'. The apostrophe takes the place of the o in 'not'. Example: 'I won’t be late.'",
    not: {
      'wan’t': "The vowel is wrong. 'Won’t' has o, not a: w-o-n, then the apostrophe, then t.",
      'woun’t': 'There is an extra u. The word is w-o-n, then the apostrophe, then t.',
      'wo’nt': 'The apostrophe is in the wrong place. It goes between the n and the t: won’t.',
    },
    more: "Other short forms work the same way: don’t is 'do not' and isn’t is 'is not'. A common slip is to leave out the apostrophe.",
    tip: "Short forms like 'won’t' are fine in speaking and informal writing. In a formal essay, write 'will not'.",
  },
  'alot|a lot|alote|a lott': {
    why: "The correct way to write it is 'a lot', as two words. It means 'many' or 'much'. Example: 'I have a lot of homework.'",
    not: {
      alot: "This joins the two words. 'A lot' is always two separate words.",
      alote: 'This joins the words and adds an e. Write two words, a and lot.',
      'a lott': "This has a double t. 'Lot' has only one t.",
    },
    more: "A different word, 'allot', means to give out a share of something. It is not used to say 'many'.",
    tip: "'A lot of' is quite informal. In an essay, you can write 'many' or 'much' instead.",
  },
  'wheter|whether|whather|wheather': {
    why: "The correct spelling is 'whether'. It starts with wh and has -ether at the end: w-h-e-t-h-e-r. We use it for a choice: 'I do not know whether he is at home.'",
    not: {
      wheter: "The h after the t is missing. 'Whether' has th in the middle: wh-e-th-er.",
      whather: 'The a is wrong. After wh, the word is -ether, with e.',
      wheather: "There is an extra a. It looks like 'weather'. 'Whether' is w-h-e-t-h-e-r.",
    },
    more: "Do not mix up 'whether' with 'weather' (rain, sun and wind). You can often use 'if' instead: 'I do not know if he is at home.'",
  },
  'accomodation|acommodation|accommodation|accomadation': {
    why: "The correct spelling is 'accommodation'. It has a double c and a double m: a-c-c-o-m-m-o-d-a-t-i-o-n. It means a place to stay. Example: 'The school helps students find accommodation.'",
    not: {
      accomodation: 'One m is missing. The word has a double m after the o: -ommo-.',
      acommodation: 'One c is missing. The word starts with a double c: a-c-c.',
      accomadation: 'The middle is wrong. It needs a double m and then o: -mmod-.',
    },
    more: "The verb 'accommodate' has the same double c and double m.",
  },
  'oppertunity|opportunity|oportunity|opportunaty': {
    why: "The correct spelling is 'opportunity'. It has a double p and ends in -tunity: o-p-p-o-r-t-u-n-i-t-y. It means a chance. Example: 'This is a good opportunity to practise English.'",
    not: {
      oppertunity: 'The vowel after opp is wrong. It should be o, not e: opp-or-tunity.',
      oportunity: 'One p is missing. The word starts with a double p: o-p-p.',
      opportunaty: 'The ending is wrong. It is -nity, with i, not -naty.',
    },
    more: "The plural is 'opportunities': the y changes to i, and es is added.",
  },
  'existance|existence|exsistence|existense': {
    why: "The correct spelling is 'existence'. The ending is -ence, with e: e-x-i-s-t-e-n-c-e. Example: 'Do you believe in the existence of ghosts?'",
    not: {
      existance: 'The ending is wrong. It is -ence, not -ance.',
      exsistence: 'There is an extra s after the x. The word starts e-x-i-s-t.',
      existense: 'The ending is wrong. It is -ence, with c, not -ense.',
    },
    more: "The verb is 'exist'. Other words that end in -ence: difference, silence, experience.",
  },
  'independant|independent|independnt|indipendent': {
    why: "The correct spelling is 'independent'. The ending is -ent, with e: i-n-d-e-p-e-n-d-e-n-t. It means able to do things without help. Example: 'She is a very independent girl.'",
    not: {
      independant: 'The ending is wrong. It is -ent, not -ant.',
      independnt: 'The e is missing in the ending. Write -dent: independ-ent.',
      indipendent: 'The first e is wrong. The word starts in-de-pen, with e after the d.',
    },
    more: "The noun is 'independence'. It ends in -ence.",
  },
  'rythm|rhythm|rythym|rhythem': {
    why: "The correct spelling is 'rhythm'. It has two h letters and the vowel y: r-h-y-t-h-m. Example: 'The music has a strong rhythm.'",
    not: {
      rythm: 'The first h is missing. The word starts rh-: r-h-y.',
      rythym:
        'The first h is missing and there is an extra y before the m. The word is r-h-y-t-h-m.',
      rhythem: "There is an extra e. 'Rhythm' has no e. It ends in -thm.",
    },
    more: 'Rhythm is one of the few English words with no a, e, i, o or u. It means a regular pattern of beats in music or speech.',
  },
  'adventrous|adventerous|adventurous|adventourous': {
    why: "The correct spelling is 'adventurous'. It is 'adventure' without the final e, plus -ous: a-d-v-e-n-t-u-r-o-u-s. Example: 'My brother is adventurous and loves climbing.'",
    not: {
      adventrous: "The u is missing. Keep the ur from 'adventure': adventur-ous.",
      adventerous: 'The u is written as e. The word has -tur-: advent-ur-ous.',
      adventourous: 'There is an extra o before the u. The only o is in the ending -ous.',
    },
    more: "'Adventure' drops its final e before -ous, like 'fame' in famous.",
  },
  'conscous|concious|conscious|consious': {
    why: "The correct spelling is 'conscious'. It has sc in the middle and ends in -cious: c-o-n-s-c-i-o-u-s. It means awake and aware. Example: 'The patient was conscious after the operation.'",
    not: {
      conscous: 'The i is missing near the end. The ending is -cious.',
      concious: 'The s is missing. The word has sc in the middle: con-sc-ious.',
      consious: 'The c is missing. The word has sc in the middle: con-sc-ious.',
    },
    more: "The noun is 'consciousness'. The opposite is 'unconscious'. Both keep the sc.",
  },
  'goverment|government|govenment|governmant': {
    why: "The correct spelling is 'government'. It is the verb 'govern' plus -ment: g-o-v-e-r-n-m-e-n-t. Example: 'The government made a new law.'",
    not: {
      goverment: "The n is missing. Keep the n from 'govern': govern + ment.",
      govenment: "The r is missing. The word starts gover-, from 'govern'.",
      governmant: 'The ending is wrong. It is -ment, with e, not -mant.',
    },
    more: 'Many nouns are made by adding -ment to a verb: agree becomes agreement, and move becomes movement.',
  },
  'knowlege|knowledge|knowladge|knoledge': {
    why: "The correct spelling is 'knowledge'. It begins with kn (the k is silent) and ends with -ledge: k-n-o-w-l-e-d-g-e. Example: 'Reading gives you knowledge.'",
    not: {
      knowlege: 'The d is missing. The ending is -ledge, with d before g.',
      knowladge: 'The vowel in the ending is wrong. It is -ledge, with e, not -ladge.',
      knoledge: "The w is missing. The word has 'know' inside it: know + ledge.",
    },
    more: "'Knowledge' comes from the verb 'know'. Other words with a silent k: knee, knife and knock.",
  },
  'succesful|successful|sucessful|successfull': {
    why: "The correct spelling is 'successful'. It is 'success' plus -ful, and the ending has only one l: s-u-c-c-e-s-s-f-u-l. Example: 'She is a successful writer.'",
    not: {
      succesful: "An s is missing. 'Success' ends in a double s: suc-cess.",
      sucessful: "A c is missing. 'Success' has a double c: suc-cess.",
      successfull: 'This has two l letters at the end. The ending -ful has only one l.',
    },
    more: "'Success' keeps both double letters when -ful is added. The opposite is 'unsuccessful'.",
  },
  'immediatly|immediately|imediately|immediatley': {
    why: "The correct spelling is 'immediately'. It has a double m at the start and keeps the e before -ly: i-m-m-e-d-i-a-t-e-l-y. Example: 'Please come here immediately.'",
    not: {
      immediatly: "The e before -ly is missing. 'Immediate' keeps its e: immediate + ly.",
      imediately: 'One m is missing. The word starts with a double m: i-m-m.',
      immediatley: 'The l and e are the wrong way round. The ending is -ely.',
    },
    more: "'Immediately' means straight away. It comes from the adjective 'immediate'.",
  },
  'oppinion|opinion|opinon|openion': {
    why: "The correct spelling is 'opinion'. It has one p and ends in -ion: o-p-i-n-i-o-n. It means what you think about something. Example: 'In my opinion, the film was too long.'",
    not: {
      oppinion: "This has a double p. 'Opinion' has only one p.",
      opinon: 'The second i is missing. The ending is -ion, with i before o.',
      openion: 'The first vowel after p is wrong. It should be i, not e: o-p-i-n.',
    },
    more: "Use 'In my opinion' or 'I think' to give your view. 'Opinion' is a noun: 'She gave her opinion.'",
    tip: "In an essay, give a reason for each opinion: 'In my opinion, schools should start later because students need more sleep.'",
  },
  'parlament|parliment|parliament|parliamant': {
    why: "The correct spelling is 'parliament'. It has -ia- in the middle: p-a-r-l-i-a-m-e-n-t. Example: 'Parliament voted on the new law.'",
    not: {
      parlament: 'The i is missing. After l, write i, then a: parl-i-a-ment.',
      parliment: 'The a is missing. After the i, write a: parli-a-ment.',
      parliamant: 'The ending is wrong. It is -ment, with e, not -mant.',
    },
    more: "The word comes from the French verb 'parler', to speak. It starts with a capital letter when it names the UK Parliament.",
  },
  'pronounciation|pronunciation|pronounciaton|pronunceation': {
    why: "The correct spelling is 'pronunciation'. It has -nun- in the middle: p-r-o-n-u-n-c-i-a-t-i-o-n. Example: 'My teacher helps me with my pronunciation.'",
    not: {
      pronounciation:
        "This has an extra o. The verb is 'pronounce', but the noun is spelled -nun-.",
      pronounciaton: 'Two mistakes: an extra o in the middle, and the i is missing in -ation.',
      pronunceation: 'The i in -ciation is written as e. The ending is -ciation: c-i-a-t-i-o-n.',
    },
    more: "The verb 'pronounce' has -ou-, but the noun 'pronunciation' does not. This is a common mistake.",
  },
  'recomend|reccommend|recommend|reccomend': {
    why: "The correct spelling is 'recommend'. It has one c and a double m: r-e-c-o-m-m-e-n-d. Example: 'Can you recommend a good restaurant?'",
    not: {
      recomend: 'One m is missing. The word has a double m: reco-mm-end.',
      reccommend: "This has a double c. 'Recommend' has only one c.",
      reccomend: 'This has a double c and one m. The word has one c and two m letters.',
    },
    more: "'Recommend' is 're' plus 'commend'. To commend is to praise, and you recommend what you praise.",
  },
  'responsable|responsible|responsibel|responseble': {
    why: "The correct spelling is 'responsible'. The ending is -ible, with i: r-e-s-p-o-n-s-i-b-l-e. It means in charge or to blame. Example: 'You are responsible for your own homework.'",
    not: {
      responsable: 'The ending is wrong. It is -ible, with i, not -able.',
      responsibel: 'The l and e are the wrong way round. The word ends in -le.',
      responseble: 'The vowel before -ble is wrong. It should be i, not e: respons-i-ble.',
    },
    more: "Both -ible and -able make adjectives, and there is no simple rule. Learn each word. The noun is 'responsibility'.",
  },
  'restraunt|restauraunt|restaurant|resteraunt': {
    why: "The correct spelling is 'restaurant'. After rest comes au, then rant: r-e-s-t-a-u-r-a-n-t. It is a place where you pay to eat a meal. Example: 'We eat at a restaurant on Saturdays.'",
    not: {
      restraunt: 'The r comes too early and an a is missing. After rest comes au, then r-a-n-t.',
      restauraunt: 'This has an extra u in the ending. The ending is -rant, with a and no u.',
      resteraunt: 'The middle is wrong. It should be au, then rant: rest-au-rant.',
    },
    more: "The word comes from French, so the au looks unusual. It begins with 'rest', but it has nothing to do with resting.",
    tip: 'Say it slowly in three parts: res-tau-rant. Write the au as a pair.',
  },
  'vegtable|vegetable|vegatable|vegitable': {
    why: "The correct spelling is 'vegetable'. There is an e after the g, even though we often do not say it: v-e-g-e-t-a-b-l-e. Example: 'Carrots and peas are vegetables.'",
    not: {
      vegtable: 'The e after the g is missing. The word is veg-e-table.',
      vegatable: 'The vowel after g is wrong. It should be e, not a: veg-e-table.',
      vegitable: 'The vowel after g is wrong. It should be e, not i: veg-e-table.',
    },
    more: "Many people say 'vej-ta-bul', with three parts. You must write four: veg-e-ta-ble.",
  },
  'Aprul|Aprill|April|Apryl': {
    why: "The correct spelling is 'April'. It has one l, and months start with a capital letter: A-p-r-i-l. Example: 'The holiday starts in April.'",
    not: {
      Aprul: 'The u is wrong. The vowel is i: A-p-r-i-l.',
      Aprill: "This has a double l. 'April' has only one l.",
      Apryl: 'The y is wrong. The word has i near the end, not y: A-p-r-i-l.',
    },
    more: 'April is the fourth month. Months and days always begin with a capital letter in English: April, May, Monday.',
  },
  'enuff|enough|enuogh|enouth': {
    why: "The correct spelling is 'enough'. The letters gh sound like f: e-n-o-u-g-h. Example: 'I have had enough food, thank you.'",
    not: {
      enuff: 'This is spelled as it sounds. The standard spelling ends in -ough, not -uff.',
      enuogh: 'The o and u are the wrong way round. The word has ou, then gh: e-n-o-u-g-h.',
      enouth: 'The ending is wrong. It ends in gh, not th.',
    },
    more: 'The letters ough sound different in different words: enough (uff), though (oh), through (oo) and cough (off). Learn each word on its own.',
  },
  'heigth|hieght|height|heihgt': {
    why: "The correct spelling is 'height'. It ends in -ght: h-e-i-g-h-t. It tells us how tall or high something is. Example: 'What is the height of that tower?'",
    not: {
      heigth: 'The t and h are the wrong way round. The ending is -ght.',
      hieght: "The e and i are the wrong way round. In 'height' the e comes first: h-e-i-g-h-t.",
      heihgt: 'The g and h are the wrong way round. After the i, write g, then h.',
    },
    more: "Eight, weight and height all end in -eight, but 'height' sounds different. The noun 'height' comes from the adjective 'high'.",
  },
  'lenght|length|lengh|lenth': {
    why: "The correct spelling is 'length'. It is the noun for 'long', and it keeps the n and g: l-e-n-g-t-h. Example: 'Measure the length of the table.'",
    not: {
      lenght: 'The t and h are the wrong way round. The word ends in -th.',
      lengh: 'The t is missing. The ending is -gth, with t before h.',
      lenth: 'The g is missing. After n, write g: len-g-th.',
    },
    more: "'Length' (from long) and 'strength' (from strong) both have -ngth.",
  },
}
