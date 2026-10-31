import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Tricky Word Sprint: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/tricky-word-spelling.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 174 new words (240 in all, 80 for each
 * of tiers 1 to 3), each in a sentence or a real line from a text out of UK
 * copyright, with an explanation for each wrong tile; 18 kept questions whose
 * tiles changed have new explanations, and every explanation that spelt another
 * word in the bank was rewritten so that none does outside its family. Written
 * with AI and checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 31 October 2026: four questions whose tiles
 * changed (school, busy, enough, completely) have new explanations, and nine
 * were corrected. Four named the wrong languages (German writes Banane, Dutch
 * olifant, Spanish accidente with two Cs, and neither German nor Dutch has a
 * word for understand that ends in t); "often" was
 * given a silent t that many speakers say; "spelled" is now "spelt"; won't was
 * called the only short form that changes its first word (shan't does too);
 * Victor was "in prison" when he had been freed; and Snowball was said to read
 * the Commandments for the animals who cannot read, which the line does not
 * say. School's list of Greek words also lost "ache", which is English.
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
    tip: "Say 'be-cause' in two chunks as you write it. In written work, write the full word and never shorten it to 'cos'.",
  },
  'freind|frend|friend|frind': {
    why: "The correct spelling is 'friend': f-r-i-e-n-d. After f-r come i and then e, and the word ends in -end. In the line from Frankenstein, Henry calls Victor 'My dear friend' as he asks what is the matter.",
    not: {
      freind:
        "The i and e are the wrong way round. In 'friend' the i comes first, then the e: f-r-i-e-n-d.",
      frend:
        'This is spelt the way it sounds, so the i is missing. The word has both letters, i and e, after f-r.',
      frind: 'The e is missing. After f-r-i, write e before the n: fri-end.',
    },
    more: 'Words made from it keep the same spelling: friendly, friendship, boyfriend, girlfriend.',
    tip: "Find the little word 'end' at the end: fri + end. A friend stays with you to the end.",
  },
  'beutiful|beautiful|beautifull|beatiful': {
    why: "The correct spelling is 'beautiful'. It starts with beau (b-e-a-u), then ti, then ful: beau-ti-ful. In Great Expectations, Pip tells Magwitch that the child he lost is now 'a lady and very beautiful'.",
    not: {
      beutiful: 'The a is missing. The start of the word is b-e-a-u, with both a and u.',
      beautifull: 'This has two l letters at the end. The ending -ful has only one l.',
      beatiful: 'The u is missing. After b-e-a you also need u: b-e-a-u.',
    },
    more: "'Beautiful' comes from 'beauty': the y changes to i before -ful. The ending -ful has only one l, as in hopeful, thankful and helpful.",
  },
  'diffrent|different|differant|diferent': {
    why: "The correct spelling is 'different'. It has a double f, then er, then ent: dif-fer-ent. Example: 'My two bags are different sizes.'",
    not: {
      diffrent: 'The e after the double f is missing. Write dif-fer-ent: f, e, r come together.',
      differant: 'The ending is wrong. It is -ent, with e, not -ant.',
      diferent: 'This has one f. The word has a double f at the start: d-i-f-f.',
    },
    more: "'Different' comes from the verb 'differ'. The noun, 'difference', ends in -ence.",
    tip: "Many speakers say 'diff-rent' with two parts, but you must write three: dif-fer-ent.",
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
  'Febuary|February|Februery|Feburary': {
    why: "The correct spelling is 'February'. The first r is easy to forget: F-e-b-r-u-a-r-y. Months start with a capital letter. Example: 'The shortest month is February.'",
    not: {
      Febuary: 'The first r is missing. After Feb, write r, then u: Feb-ru-ary.',
      Februery: 'The ending is wrong. It is -uary, with a, not -uery.',
      Feburary: 'The u and r are the wrong way round. After Feb, write r, then u.',
    },
    more: "Many speakers say 'Feb-yoo-ary', but the spelling has an r after Feb. Say 'Feb-roo-ary' slowly when you write it.",
  },
  'Abril|Aprill|April|Aprile': {
    why: "The correct spelling is 'April': A-p-r-i-l, with a p, an i and one l. It is the fourth month of the year, and like all the months it starts with a capital letter.",
    not: {
      Abril:
        'This is the Spanish and Portuguese spelling, with a b. English writes a p: A-p-r-i-l.',
      Aprill: 'This has a double l. The word ends with just one l: A-p-r-i-l.',
      Aprile:
        'This adds an e at the end, as Italian does. In English the word ends in -il, with no e.',
    },
    more: 'Many months look almost the same in French, Spanish or Italian, so learners often write the spelling they learnt first. Learn the twelve English months one by one.',
  },
  'colour|coulor|colur|collour': {
    why: "The correct British spelling is 'colour'. The ending is -our: c-o-l-o-u-r. In A Christmas Carol, Mrs Cratchit puts down her sewing and says the colour hurts her eyes.",
    not: {
      coulor: 'The u is in the wrong place. The ending is -our: col-our.',
      colur: 'The second o is missing. The ending is -our, with o before u.',
      collour: "This has a double l. There is only one l in 'colour'.",
    },
    more: 'American English leaves out the u. British English keeps it, as in honour, humour and harbour.',
  },
  'favourate|favourit|favourite|faverite': {
    why: "The correct British spelling is 'favourite'. It has -our- after the v, the British pattern, and ends in -ite: f-a-v-o-u-r-i-t-e. Example: 'Football is my favourite sport.'",
    not: {
      favourate: 'The ending is wrong. It is -ite, with i, not -ate.',
      favourit: 'The final e is missing. The word ends in -ite.',
      faverite: 'The ou is replaced by e. In British English the start is favour-: f-a-v-o-u-r.',
    },
    more: 'American English leaves out the u in this word. British English keeps it, as in honour and harbour.',
    tip: 'In written work in the UK, use the British spellings. A spell checker set to American English may remove the u.',
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
  'thier|theire|their|theyr': {
    why: "The correct spelling is 'their'. It means 'belonging to them': t-h-e-i-r. Example: 'The twins left their bags on the bus.'",
    not: {
      thier: 'The i and e are the wrong way round. After th, write e, then i: t-h-e-i-r.',
      theire: 'There is an extra e at the end. The word ends in -ir.',
      theyr: "The ending is wrong. 'Their' ends in -eir, not -eyr.",
    },
    more: "Three words sound the same: 'their' (belonging to them), 'there' (a place, as in 'Put it there') and 'they’re' (they are). Choose by meaning.",
    tip: "Test it: if the word 'our' fits in the same place, write 'their'. 'Our bags' becomes 'their bags'.",
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
  'allways|always|alwais|olways': {
    why: "The correct spelling is 'always'. It has only one l: a-l-w-a-y-s. We use it for something that happens every time: 'She always arrives early.'",
    not: {
      allways: "This has a double l. 'Always' has only one l.",
      alwais: 'The ending is wrong. It is -ways, with y, not -wais.',
      olways: 'The first letter is wrong. The word starts with a, not o.',
    },
    more: "Put 'always' before the main verb ('I always walk to the shops') but after 'am', 'is' and 'are' ('She is always late').",
  },
  'libary|library|librery|liberary': {
    why: "The correct spelling is 'library'. It has two r letters: l-i-b-r-a-r-y. Example: 'I borrow books from the library.'",
    not: {
      libary: 'An r is missing. After the b, write r: lib-r-a-r-y.',
      librery: 'The ending is wrong. It is -rary, with a, not -rery.',
      liberary: 'There is an extra e. The word is lib-rar-y, with no e.',
    },
    more: "'Library' comes from the Latin word 'liber', meaning book. A library lends books, but a bookshop sells them.",
  },
  'intresting|interesting|intersting|interessting': {
    why: "The correct spelling is 'interesting': in-ter-est-ing. Many speakers say it fast, in three beats, but the spelling keeps four parts and two letters e. In Jane Eyre, Jane asks the girl beside her if her book is interesting.",
    not: {
      intresting:
        'The first e is missing. Many speakers drop it, but the word starts inter-, with e after the t.',
      intersting: 'The second e is missing. After inter- comes e, then -sting: inter-e-sting.',
      interessting:
        'This has a double s, as in French or German. English has one s: inter-e-s-t-ing.',
    },
    more: "'Interested' tells how you feel; 'interesting' tells what the thing is like: 'I am interested in this book. It is interesting.'",
    tip: 'Say it slowly in four parts as you write it: in-ter-est-ing.',
  },
  'restaraunt|restaurant|resturant|restarant': {
    why: "The correct spelling is 'restaurant'. After rest comes au, then rant: r-e-s-t-a-u-r-a-n-t. Example: 'We had lunch in a small restaurant.'",
    not: {
      restaraunt: 'The au is in the wrong place. It comes just after rest, then r-a-n-t.',
      resturant: 'The a is missing. After rest, the word has a and u: rest-au-rant.',
      restarant: 'The u is missing. After rest-a, you need u: rest-au-rant.',
    },
    more: 'The word comes from French, so the au looks unusual.',
    tip: "Do not spell it as it sounds. Many speakers say 'res-trant', but you must write the a and the u.",
  },
  'adress|addres|address|adresse': {
    why: "The correct spelling is 'address'. It has a double d and a double s: a-d-d-r-e-s-s. Example: 'Write your address on the form.'",
    not: {
      adress: 'A d is missing. The word starts with a double d: a-d-d-r.',
      addres: 'An s is missing. The word ends in a double s: -ss.',
      adresse:
        'This has one d and ends in -sse, as in French and German. The word has a double d and ends in -ss, with no e.',
    },
    more: 'Other words that end in a double s: dress, press, class, glass.',
  },
  'vegtable|vegetable|vegatable|vegitable': {
    why: "The correct spelling is 'vegetable'. There is an e after the g, even though we often do not say it: v-e-g-e-t-a-b-l-e. Example: 'Carrots and peas are vegetables.'",
    not: {
      vegtable: 'The e after the g is missing. The word is veg-e-table.',
      vegatable: 'The vowel after g is wrong. It should be e, not a: veg-e-table.',
      vegitable: 'The vowel after g is wrong. It should be e, not i: veg-e-table.',
    },
    more: "Many speakers say 'vej-ta-bul', with three parts. You must write four: veg-e-ta-ble.",
  },
  'wo’nt|won’t|willn’t|will’nt': {
    why: "The correct form is 'won’t', the short form of 'will not'. It is spelt w-o-n, then an apostrophe, then t. The apostrophe stands where the o of 'not' was.",
    not: {
      'wo’nt':
        "The apostrophe is in the wrong place. It goes between the n and the t, where the o of 'not' was: won’t.",
      'willn’t':
        "This joins 'will' and 'n’t', as 'is' and 'n’t' make 'isn’t'. But 'will not' is irregular: its short form is 'won’t'.",
      'will’nt':
        "This keeps 'will' and puts the apostrophe before the n. The short form of 'will not' changes its vowel: won’t.",
    },
    more: "Most short forms keep the first word whole: don’t, isn’t, can’t, didn’t. In 'won’t', the word 'will' changes to 'wo'.",
    tip: "Short forms are fine in speech and in informal notes. In a formal letter, write 'will not' in full.",
  },
  'Tusday|Teusday|Tuesday|Tuseday': {
    why: "The correct spelling is 'Tuesday': T-u-e-s-d-a-y. It starts with Tue, so u and e come together after the T. Days of the week start with a capital letter.",
    not: {
      Tusday: 'The e is missing. After T-u comes e: Tue-sday.',
      Teusday: 'The u and e are the wrong way round. After the T, write u first, then e: Tue-sday.',
      Tuseday: 'The e is in the wrong place. It comes just after the u, before the s: Tue-s-day.',
    },
    more: "The name comes from Tiw, an old god of war in early England: Tiw's day became Tuesday.",
  },
  'Thursday|Thrusday|Thurday|Thirsday': {
    why: "The correct spelling is 'Thursday': T-h-u-r-s-d-a-y. After Th comes u, then r, then s. It is the day before Friday, and like all the days it has a capital letter.",
    not: {
      Thrusday: 'The u and r are the wrong way round. After Th, write u first, then r: Thur-sday.',
      Thurday: 'The s is missing. Before -day comes s: Thurs-day.',
      Thirsday:
        "The vowel is wrong. It sounds the same as in 'thirst', but this word is spelt with u: Thurs-day.",
    },
    more: "The name comes from Thor, the god of thunder in old Norse stories: Thor's day became Thursday.",
  },
  'Saterday|Saturday|Satarday|Satuday': {
    why: "The correct spelling is 'Saturday': S-a-t-u-r-d-a-y. The middle is -tur-, as in Saturn, the planet it is named after. In Pride and Prejudice, Mrs Gardiner writes to Elizabeth that Darcy came again on Saturday.",
    not: {
      Saterday: 'The u is written as e. The middle is -tur-, from Saturn: Sat-ur-day.',
      Satarday: 'The u is written as a. The middle is -tur-, from Saturn: Sat-ur-day.',
      Satuday:
        'The r is missing. British speakers often do not say it, but it is written: Sat-ur-day.',
    },
    more: 'Saturday is the only English day named after a Roman god, Saturn. The others come from the sun, the moon and old gods of northern Europe.',
  },
  'Janaury|January|Janurary|Januar': {
    why: "The correct spelling is 'January': J-a-n-u-a-r-y, with u just after Jan and -ary at the end. It is the first month of the year. In Animal Farm, food on the farm runs short in January.",
    not: {
      Janaury: 'The u and a are the wrong way round. After Jan comes u, then -ary: Jan-u-ary.',
      Janurary: 'There is an extra r. The word has only one r, near the end: Jan-u-ar-y.',
      Januar: 'This is the German spelling, with no y. English ends in -ary: Jan-u-ar-y.',
    },
    more: 'The month is named after Janus, a Roman god with two faces: one looks back at the old year and one looks forward to the new.',
  },
  'Desember|Dezember|December|Decembre': {
    why: "The correct spelling is 'December': D-e-c-e-m-b-e-r, with c after De and -ber at the end. It is the last month of the year.",
    not: {
      Desember:
        'The c is written as s, as in Norwegian and Indonesian. English writes c: De-c-ember.',
      Dezember: 'This is the German spelling, with z. English writes c: De-c-ember.',
      Decembre: 'The ending is -bre, as in French. English ends in -ber: Decem-ber.',
    },
    more: 'Decem is Latin for ten. In the old Roman year, December was the tenth month.',
  },
  'fourty|forthy|forty|fourthy': {
    why: "The correct spelling is 'forty': f-o-r-t-y. 'Four' has a u, but 'forty' loses it. It is the number 40.",
    not: {
      fourty: "This keeps the u from 'four'. The u goes when -ty is added: forty.",
      forthy: 'There is an extra h. The word ends in -ty, not -thy: for-ty.',
      fourthy: "This mixes 'fourth' and 'forty'. The number 40 has no u and no h: f-o-r-t-y.",
    },
    more: "'Four', 'fourteen' and 'fourth' keep the u. Only 'forty' drops it.",
  },
  'ninty|ninety|ninetty|nintey': {
    why: "The correct spelling is 'ninety': nine + ty, n-i-n-e-t-y. It keeps the e from 'nine'. It is the number 90.",
    not: {
      ninty: "The e from 'nine' is missing. Keep it: nine + ty.",
      ninetty: 'This has a double t. The ending -ty has one t: nine-ty.',
      nintey: "The e is in the wrong place. It comes after the n, as in 'nine': nine-ty.",
    },
    more: "'Ninety' and 'nineteen' keep the e from 'nine', but 'ninth' loses it.",
  },
  'fivety|fifthy|fifty|fivty': {
    why: "The correct spelling is 'fifty': f-i-f-t-y. 'Five' changes to fif- before -ty. In Pride and Prejudice, Elizabeth will not call it an easy distance: 'It is nearly fifty miles.'",
    not: {
      fivety: "This keeps 'five'. Before -ty, five changes to fif-: fifty.",
      fifthy: "There is an extra h, as in 'fifth'. The number 50 ends in -ty: fif-ty.",
      fivty: "This has v, from 'five'. The number 50 has f: fif-ty.",
    },
    more: "'Fifteen' changes in the same way: five becomes fif-. Only 'fifth' adds an h.",
  },
  'hundered|hundred|hundret|hunderd': {
    why: "The correct spelling is 'hundred': h-u-n-d-r-e-d. After hund- comes r, then -ed: hund-red. In Jane Eyre, Rochester tells Jane, 'You don’t travel a hundred miles alone.'",
    not: {
      hundered: 'There is an extra e. After hund- comes r at once: hund-red.',
      hundret: "The last letter is t, as in the German 'hundert'. English ends in -ed: hund-red.",
      hunderd: 'The r and e are the wrong way round. The ending is -red: hund-red.',
    },
    more: "We say 'two hundred' and 'three hundred', with no s. Add s only for a large, unknown number: 'hundreds of birds'.",
  },
  'thousend|tousand|thousand|thousant': {
    why: "The correct spelling is 'thousand': thou + sand, t-h-o-u-s-a-n-d. It starts with th and ends in -and. In Great Expectations, Pip asks why he should repeat it a thousand times.",
    not: {
      thousend: 'The vowel in the ending is wrong. It is -and, with a: thou-sand.',
      tousand: "The h is missing. The word starts with th, as in 'think': thou-sand.",
      thousant: 'The last letter is wrong. The word ends in d, not t: thou-sand.',
    },
    more: "It takes no s after a number: 'three thousand'. Add s for a large, unknown number: 'thousands of stars'.",
  },
  'doughter|daughter|daugther|dauter': {
    why: "The correct spelling is 'daughter': d-a-u-g-h-t-e-r. The middle is -augh-, and the gh is silent. In Jane Eyre, Jane asks Mrs Fairfax if the little girl she will teach is her daughter.",
    not: {
      doughter: 'The first vowel is wrong. The word starts d-a-u, not d-o-u: d-augh-ter.',
      daugther:
        'The g and t are in the wrong order. After d-a-u comes g, then h, then t: daugh-ter.',
      dauter: 'The gh is missing. You do not hear it, but it is written: daugh-ter.',
    },
    more: "The same -augh- with a silent gh is in 'naughty' and 'haughty'.",
  },
  'childern|children|chidren|childen': {
    why: "The correct spelling is 'children': child + ren, c-h-i-l-d-r-e-n. It is the plural of 'child': one child, two children.",
    not: {
      childern: 'The r and e are the wrong way round. After child comes r, then -en: child-ren.',
      chidren: 'The l is missing. The word is child + ren: c-h-i-l-d.',
      childen: 'The r is missing. After child comes r: child-ren.',
    },
    more: "'Children' is already plural, so never add s. To show what belongs to them, add an apostrophe and s: 'the children's books'.",
  },
  'cusin|cousen|cousin|cousine': {
    why: "The correct spelling is 'cousin': c-o-u-s-i-n. It has ou after the c, and it ends in -in. A child of your aunt is your cousin.",
    not: {
      cusin: 'The o is missing. The word starts c-o-u: cou-sin.',
      cousen: 'The vowel in the ending is wrong. It is -in, with i: cou-sin.',
      cousine:
        'This adds an e, as in the French word for a girl cousin. In English one spelling covers a boy and a girl: cousin.',
    },
  },
  'uncel|unkle|oncle|uncle': {
    why: "The correct spelling is 'uncle': u-n-c-l-e. It is written with c and ends in -le. In A Christmas Carol, Fred says to Scrooge, 'Don't be angry, uncle.'",
    not: {
      uncel: 'The l and e are the wrong way round. The word ends in -le: unc-le.',
      unkle: 'The k is wrong. The sound is written with c: un-c-le.',
      oncle: 'This is the French spelling, with o. English starts with u: un-cle.',
    },
    more: 'Many words end in -le after a consonant: table, apple, circle.',
  },
  'parants|parentes|perents|parents': {
    why: "The correct spelling is 'parents': p-a-r-e-n-t-s. The ending is -ents, with e. Your parents are your mother and father. In Jane Eyre, Rochester asks Jane, 'Who are your parents?'",
    not: {
      parants: 'The vowel in the ending is wrong. It is -ent, with e: par-ents.',
      parentes: 'This adds an e before the s, as in Spanish. English adds only s: parent + s.',
      perents: "The first vowel is wrong. It is a, as in 'pair': par-ents.",
    },
    more: 'One parent, two parents. A grandparent is a parent of your mother or father.',
  },
  'husbend|husband|husban|housband': {
    why: "The correct spelling is 'husband': h-u-s-b-a-n-d. The ending is -band, like the ring called a band. A husband is a married man: 'Her husband is a nurse.'",
    not: {
      husbend: 'The vowel in the ending is wrong. It is -band, with a: hus-band.',
      husban: 'The d at the end is missing. The word ends in -and: hus-band.',
      housband: 'There is an extra o. The word starts h-u-s, not h-o-u-s: hus-band.',
    },
    more: "A married woman is a 'wife', and the plural is 'wives'.",
  },
  'peaple|poeple|people|peopel': {
    why: "The correct spelling is 'people': p-e-o-p-l-e. The middle has e and o together, an unusual pair, and the word ends in -le. 'People' is already plural: one person, two people.",
    not: {
      peaple: 'The o is written as a. The middle is -eo-: p-e-o-ple.',
      poeple: 'The e and o are the wrong way round. After the first p, write e, then o: p-e-o.',
      peopel: 'The l and e are the wrong way round. The word ends in -le: peop-le.',
    },
    more: "The letters eo are rare in English. You also see them in 'leopard' and 'jeopardy'.",
  },
  'shool|scool|school|shcool': {
    why: "The correct spelling is 'school': s-c-h-o-o-l. The letters ch sound like k here, and the middle has a double o. In Jane Eyre, Mr Lloyd asks Jane, 'Would you like to go to school?'",
    not: {
      shool: "The c is missing. The word starts s-c-h, though you hear only 'sk'.",
      scool: 'The h is missing. The sound k is written ch here: s-ch-ool.',
      shcool: 'The c and h are the wrong way round. After the s comes c, then h: s-c-h-ool.',
    },
    more: 'Ch sounds like k in many words that come from Greek: chemist, chorus, echo, orchestra.',
  },
  'teatcher|techer|teecher|teacher': {
    why: "The correct spelling is 'teacher': teach + er, t-e-a-c-h-e-r. The sound 'ee' is written ea, and there is no t before the ch.",
    not: {
      teatcher: 'There is an extra t. After the ea comes ch, with no t: teach-er.',
      techer: 'The a is missing. The vowel sound is written ea: t-ea-cher.',
      teecher: 'The vowel sound is written ea, not ee: t-ea-cher.',
    },
    more: 'Many words have tch after a short vowel, such as catch and match, but teach, reach and beach have only ch after the ea.',
  },
  'pensil|pencel|pencill|pencil': {
    why: "The correct spelling is 'pencil': p-e-n-c-i-l. The s sound is written c, and the word ends in -il with one l.",
    not: {
      pensil: 'The s sound is written with c here: pen-c-il.',
      pencel: 'The vowel in the ending is wrong. It is -il, with i: penc-il.',
      pencill: 'This has a double l. The word ends in one l: penc-il.',
    },
    more: 'C sounds like s before e, i or y: centre, circle, fancy.',
  },
  'dictionnary|dictionary|dictionery|diccionary': {
    why: "The correct spelling is 'dictionary': diction + ary, d-i-c-t-i-o-n-a-r-y. It has one n and ends in -ary. A dictionary tells you what words mean and how to spell them.",
    not: {
      dictionnary:
        "This has a double n, as in the French 'dictionnaire'. English has one n: diction-ary.",
      dictionery: 'The ending is wrong. It is -ary, with a: diction-ary.',
      diccionary: "This has cc, as in the Spanish 'diccionario'. English has ct: dic-tion-ary.",
    },
    more: 'Other words that end in -ary: ordinary, summary, salary.',
  },
  'sience|science|scince|sciense': {
    why: "The correct spelling is 'science': s-c-i-e-n-c-e. It starts with sc, though you hear only s, and it ends in -ence.",
    not: {
      sience:
        'The c after the s is missing. The word starts s-c, though the c is silent: sc-ience.',
      scince: 'The e after the i is missing. The middle is -ie-: sc-i-e-nce.',
      sciense: 'The ending is wrong. It is -ence, with c: sci-ence.',
    },
    more: 'A person who works in science is a scientist. Both words start with sc.',
  },
  'excercise|exersise|exercise|exercice': {
    why: "The correct spelling is 'exercise': e-x-e-r-c-i-s-e. There is no c after the x, and the word ends in -cise. Exercise means using your body to keep fit, or a task for practice.",
    not: {
      excercise: 'There is an extra c after the x. The word starts ex-er: ex-er-cise.',
      exersise: 'The c is written as s. The ending is -cise: exer-cise.',
      exercice: 'This is the French spelling, ending in -ice. English ends in -ise: exer-cise.',
    },
    more: "'Exercise' ends in -ise, never -ize, in British and American English alike.",
  },
  'studant|student|studen|estudent': {
    why: "The correct spelling is 'student': s-t-u-d-e-n-t. It ends in -ent, with e. A student is someone who is learning at a college or a university.",
    not: {
      studant: 'The vowel in the ending is wrong. It is -ent, with e: stud-ent.',
      studen: 'The t at the end is missing. The word ends in -ent.',
      estudent:
        "There is an extra e at the start, as in the Spanish 'estudiante'. English starts with st-: stu-dent.",
    },
    more: 'Spanish and Portuguese speakers often add e before st or sp. English words begin with the s itself: student, speak, stop.',
  },
  'kitchin|kichen|kitchan|kitchen': {
    why: "The correct spelling is 'kitchen': k-i-t-c-h-e-n. There is a t before the ch, and the word ends in -en. In Jane Eyre, Rochester cannot see, and Jane tells him that Mary is in the kitchen.",
    not: {
      kitchin: 'The vowel in the ending is wrong. It is -en, with e: kitch-en.',
      kichen: 'The t is missing. After the short i comes -tch: ki-tch-en.',
      kitchan: 'The vowel in the ending is wrong. It is -en, with e: kitch-en.',
    },
    more: "After a short vowel, the sound 'ch' is often written tch: match, catch, butcher.",
  },
  'sandwitch|sandwhich|sanwich|sandwich': {
    why: "The correct spelling is 'sandwich': sand + wich, s-a-n-d-w-i-c-h. The ending is -wich, with no t and no h after the w. Many speakers drop the d, but it is written.",
    not: {
      sandwitch: 'There is an extra t. The ending is -wich, not -witch: sand-wich.',
      sandwhich: 'There is an extra h after the w. The ending is -wich: sand-wich.',
      sanwich: 'The d is missing. Many speakers do not say it, but it is written: sand-wich.',
    },
    more: 'The food is named after the Earl of Sandwich. The story goes that he ate meat between bread so he could keep playing cards.',
  },
  'chocolat|choclate|chocolate|chocalate': {
    why: "The correct spelling is 'chocolate': c-h-o-c-o-l-a-t-e. Many speakers say it in two beats, 'choc-lit', but it has three parts: choc-o-late.",
    not: {
      chocolat:
        'The final e is missing, as in the French spelling. English ends in -ate: choco-late.',
      choclate:
        'The o in the middle is missing. Many speakers drop it, but it is written: choc-o-late.',
      chocalate: 'The vowel in the middle is wrong. It is o, like the first one: choc-o-late.',
    },
    more: 'The word came into English through Spanish, from Nahuatl, spoken by the Aztecs of Mexico.',
  },
  'biscit|bisquit|biscuit|buiscuit': {
    why: "The correct spelling is 'biscuit': b-i-s-c-u-i-t. There is a silent u after the c: bis-cu-it.",
    not: {
      biscit: 'The u is missing. You do not hear it, but there is a u after the c: bis-c-u-it.',
      bisquit: 'The c is written as qu. The word has c, then u: bis-cu-it.',
      buiscuit: 'There is an extra u after the b. The only u comes after the c: bis-cu-it.',
    },
    more: 'In British English a biscuit is sweet and hard, and often eaten with tea. American English calls it a cookie.',
  },
  'bananna|banan|banana|bannana': {
    why: "The correct spelling is 'banana': b-a-n-a-n-a. It has three beats, ba-na-na, and no double letters.",
    not: {
      bananna: 'This has a double n near the end. Each n stands alone: ba-na-na.',
      banan:
        'The final a is missing, as in Swedish, Polish or Russian. English ends in -ana: ba-na-na.',
      bannana: 'This has a double n near the start. Each n stands alone: ba-na-na.',
    },
    more: 'The plural adds s: one banana, two bananas.',
  },
  'tomatoe|tomate|tomato|tomatto': {
    why: "The correct spelling is 'tomato': t-o-m-a-t-o. One tomato has no e at the end. Only the plural adds -es: tomatoes.",
    not: {
      tomatoe:
        'There is an extra e at the end. The singular is tomato; the e comes only in the plural, tomatoes.',
      tomate: 'This is the French, Spanish and German spelling. English ends in o: toma-to.',
      tomatto: 'This has a double t. The word has one t in each part: to-ma-to.',
    },
    more: 'A few words that end in o add -es in the plural: tomatoes, potatoes, heroes, echoes.',
  },
  'breakfest|brekfast|breakfast|breackfast': {
    why: "The correct spelling is 'breakfast': break + fast, b-r-e-a-k-f-a-s-t. After the night you break your long fast. In Great Expectations, Pip decides he will tell Joe everything before breakfast.",
    not: {
      breakfest: 'The vowel in the second part is wrong. It is fast, with a: break-fast.',
      brekfast:
        "The a in 'break' is missing. Many speakers say 'brek', but it is written break: break-fast.",
      breackfast: "There is an extra c. 'Break' has no c: b-r-e-a-k.",
    },
    more: "To fast is to go without food. The word joins break and fast, though we say the first part like 'brek'.",
  },
  'coffe|cofee|coffie|coffee': {
    why: "The correct spelling is 'coffee': c-o-f-f-e-e, with a double f and a double e. In The Great Gatsby, Nick offers Gatsby's father some coffee.",
    not: {
      coffe: 'One e is missing. The word ends in a double e: coff-ee.',
      cofee: 'One f is missing. The word has a double f: co-ff-ee.',
      coffie: 'The ending is wrong. It is a double e, not -ie: coff-ee.',
    },
    more: 'Other words end in a double e as well: free, tree, toffee, committee.',
  },
  'langauge|languaje|language|langage': {
    why: "The correct spelling is 'language': l-a-n-g-u-a-g-e. After lang comes u, then -age: lang-u-age.",
    not: {
      langauge: 'The u and a are the wrong way round. After lang comes u, then a: lang-u-age.',
      languaje: "This ends in -aje, as in the Spanish 'lenguaje'. English ends in -age: langu-age.",
      langage:
        "The u is missing, as in the French 'langage'. English has u after the g: lang-u-age.",
    },
    more: "The u after the g sounds like w: 'lang-wij'. The same sound is in 'penguin' and 'linguist'.",
  },
  'yesturday|yestarday|yesterday|yesteday': {
    why: "The correct spelling is 'yesterday': yes-ter-day, y-e-s-t-e-r-d-a-y. The middle is -ter-, with e. In Great Expectations, Pip tells Herbert that Estella has come back and he saw her yesterday.",
    not: {
      yesturday: 'The vowel in the middle is wrong. It is -ter-, with e: yes-ter-day.',
      yestarday: 'The vowel in the middle is wrong. It is -ter-, with e: yes-ter-day.',
      yesteday:
        'The r is missing. British speakers often do not say it, but it is written: yes-ter-day.',
    },
    more: "Yesterday is the day before today. 'The day before yesterday' goes back two days.",
  },
  'minit|minuite|minute|minut': {
    why: "The correct spelling is 'minute': m-i-n-u-t-e. It sounds like 'minit', but it is written with u and a final e. In A Christmas Carol, the room at Fezziwig's party is cleared in a minute.",
    not: {
      minit: 'This is spelt the way it sounds. The word is written -ute: min-ute.',
      minuite: 'There is an extra i. The ending is -ute: min-u-te.',
      minut: 'The final e is missing, as in Swedish. English ends in -ute: min-ute.',
    },
    more: "Said 'my-NEWT', the same letters make an adjective that means very small: 'a minute insect'.",
  },
  'mornig|moring|mornning|morning': {
    why: "The correct spelling is 'morning': morn + ing, m-o-r-n-i-n-g, with one n in each part. In A Christmas Carol, Scrooge is early at the office the next morning, hoping to catch Bob Cratchit late.",
    not: {
      mornig: 'The n before the g is missing. The ending is -ing: morn-ing.',
      moring: 'The first n is missing. The word starts m-o-r-n: morn-ing.',
      mornning: 'This has a double n. There is one n before -ing and one in it: morn-ing.',
    },
    more: "Do not mix up 'morning' (the start of the day) with 'mourning' (sadness after someone dies). They sound the same.",
  },
  'weakend|wekend|weekend|weekand': {
    why: "The correct spelling is 'weekend': week + end, w-e-e-k-e-n-d. It is the end of the week, when many of us do not go to work.",
    not: {
      weakend: "The vowel is written ea, as in 'weak'. A week of days is spelt with ee: week-end.",
      wekend: "One e is missing. 'Week' has a double e: week-end.",
      weekand: "The vowel in the second part is wrong. It is 'end', with e: week-end.",
    },
    more: "'Week' (seven days) and 'weak' (not strong) sound the same. Choose the spelling by meaning.",
  },
  'pleese|please|plese|pleace': {
    why: "The correct spelling is 'please': p-l-e-a-s-e. The sound 'ee' is written ea, and the word ends in -se. We say it to ask for something politely.",
    not: {
      pleese: 'The vowel sound is written ea, not ee: pl-ea-se.',
      plese: 'The a is missing. The vowel sound is written ea: pl-ea-se.',
      pleace: 'The ending is wrong. It is -se, with s, not -ce: plea-se.',
    },
    more: "The same letters start 'pleasure' and 'pleased', though the sound changes there.",
  },
  'wellcome|welcom|welcome|wellcom': {
    why: "The correct spelling is 'welcome': w-e-l-c-o-m-e, with one l and the word 'come' at the end. We say it to greet a guest kindly.",
    not: {
      wellcome: "This has a double l. 'Welcome' has only one l, though 'well' has two.",
      welcom: "The final e is missing. The word ends with 'come': wel-come.",
      wellcom: 'This has a double l and no final e. The word is wel + come.',
    },
    more: "When 'well' or 'all' joins another word, it often keeps one l: welcome, welfare, almost, already.",
  },
  'usualy|usally|usually|ussually': {
    why: "The correct spelling is 'usually': usual + ly, u-s-u-a-l-l-y. The word 'usual' ends in l, and -ly adds another, so there is a double l.",
    not: {
      usualy: "One l is missing. Add -ly to 'usual' and keep both: usual-ly.",
      usally: 'The u in the middle is missing. The word is u-s-u-a-l, then -ly.',
      ussually: 'This has a double s. The word has one s: u-s-u-al-ly.',
    },
    more: 'An adjective that ends in -al keeps its l before -ly: real, really; natural, naturally.',
  },
  'bizy|busy|buisy|bisy': {
    why: "The correct spelling is 'busy': b-u-s-y. It sounds like 'bizzy', but it is written with u and one s. In A Christmas Carol, a gentleman tells Scrooge that the prisons and the workhouses are 'Both very busy'.",
    not: {
      bizy: 'This is spelt the way it sounds, with i and z. The word is written with u and s: b-u-s-y.',
      buisy: 'There is an extra i. The word has only u: b-u-s-y.',
      bisy: 'The u is written as i. The vowel sounds like i, but it is spelt u: b-u-s-y.',
    },
    more: "A u that sounds like i is rare. It is also in 'business', a word made from 'busy'.",
  },
  'hungery|hungri|hungry|hungrey': {
    why: "The correct spelling is 'hungry': h-u-n-g-r-y. There is no e between the g and the r. In Jane Eyre, Jane asks Adèle if she feels hungry, and Adèle answers in French.",
    not: {
      hungery: 'There is an extra e. After the g comes r at once: hung-ry.',
      hungri: 'The ending is wrong. The word ends in y: hung-ry.',
      hungrey: 'There is an extra e before the y. The ending is -ry: hung-ry.',
    },
    more: "The noun is 'hunger', with e, but the e goes in the adjective 'hungry'. 'Angry' works the same way: anger, angry.",
  },
  'expencive|expensiv|expensive|expesive': {
    why: "The correct spelling is 'expensive': ex-pen-sive, e-x-p-e-n-s-i-v-e. The middle has s, not c, and the word ends in -ive.",
    not: {
      expencive: "The s is written as c. The word comes from 'expense', with s: ex-pen-s-ive.",
      expensiv:
        'The final e is missing. English adjectives that end in -ive keep the e: expens-ive.',
      expesive: 'The n is missing. The word starts ex-pen-: ex-pen-sive.',
    },
    more: 'Other adjectives that end in -ive: active, massive, creative. If something is not expensive, it is cheap.',
  },
  'delicous|delicius|delicious|delitious': {
    why: "The correct spelling is 'delicious': de-li-cious, d-e-l-i-c-i-o-u-s. It ends in -cious: c, i, o, u, s. Delicious means it tastes very good.",
    not: {
      delicous: 'The i after the c is missing. The ending is -cious: deli-c-i-ous.',
      delicius: 'The o in the ending is missing. The ending is -cious: deli-ci-o-us.',
      delitious: 'The c is written as t. The ending is -cious, with c: deli-cious.',
    },
    more: "The 'shus' sound at the end is spelt -cious in delicious, precious and gracious.",
  },
  'famos|fameous|famouse|famous': {
    why: "The correct spelling is 'famous': fame + ous, f-a-m-o-u-s. The e of 'fame' is dropped before -ous. In Great Expectations, Magwitch boasts that he has done well and is famous for it.",
    not: {
      famos:
        "The u in the ending is missing, as in the Spanish 'famoso'. English ends in -ous: fam-ous.",
      fameous: "This keeps the e from 'fame'. The e is dropped: fam + ous.",
      famouse: 'There is an extra e at the end. The ending is -ous, with nothing after the s.',
    },
    more: 'Many adjectives end in -ous: dangerous, generous, enormous. None of them ends in -ouse.',
  },
  'importent|impotant|important|importante': {
    why: "The correct spelling is 'important': im-por-tant, i-m-p-o-r-t-a-n-t. It ends in -ant, with a. In Animal Farm, Napoleon tells the animals to forget the milk, as the harvest is more important.",
    not: {
      importent: 'The vowel in the ending is wrong. It is -ant, with a: import-ant.',
      impotant:
        "The r is missing. Many British speakers do not say it, but the word has 'port' in it: im-port-ant.",
      importante:
        'This adds an e, as in Spanish, Italian and Portuguese. English ends in -ant: import-ant.',
    },
    more: 'The noun ends in -ance: importance. The a stays in both words.',
  },
  'excelent|exellent|excellent|excellant': {
    why: "The correct spelling is 'excellent': ex-cel-lent, e-x-c-e-l-l-e-n-t. It has a c after the x, a double l, and ends in -ent. It means very good.",
    not: {
      excelent: 'One l is missing. The word has a double l: excel-lent.',
      exellent: 'The c after the x is missing. The word starts ex-c: ex-cel-lent.',
      excellant: 'The ending is wrong. It is -ent, with e: excell-ent.',
    },
    more: "The verb is 'excel', with one l. The l doubles before -ent in 'excellent', and before -ence in 'excellence'.",
  },
  'lisen|lissen|listen|listin': {
    why: "The correct spelling is 'listen': l-i-s-t-e-n. There is a silent t after the s. In Animal Farm, Clover and Benjamin tell Boxer to work less hard, but Boxer would not listen.",
    not: {
      lisen: 'The t is missing. You do not hear it, but it is written: lis-t-en.',
      lissen: 'This is spelt the way it sounds. The word has st, not ss: lis-ten.',
      listin: 'The vowel in the ending is wrong. It is -en, with e: list-en.',
    },
    more: "The t is silent in 'fasten', 'whistle' and 'soften' too.",
  },
  'rember|remeber|remember|rememeber': {
    why: "The correct spelling is 'remember': re-mem-ber, r-e-m-e-m-b-e-r. It has three parts and two letters m. In Animal Farm, the old animals try to recall if life was better in the early days, but they could not remember.",
    not: {
      rember: 'The middle part is missing. The word has three parts: re-mem-ber.',
      remeber: 'The second m is missing. The middle part is -mem-: re-mem-ber.',
      rememeber: 'There is an extra e. The word is re-mem-ber, with no e after the second m.',
    },
    more: "Both 'remember' and 'memory' come from the Latin 'memor', mindful.",
  },
  'understend|undrestand|understand|understant': {
    why: "The correct spelling is 'understand': under + stand, u-n-d-e-r-s-t-a-n-d. It is made of two words you know. In the first letter of Frankenstein, Walton asks his sister, 'Do you understand this feeling?'",
    not: {
      understend: "The vowel in 'stand' is wrong. It is a: under-stand.",
      undrestand: "The e and r are the wrong way round. The first word is 'under': und-er-stand.",
      understant:
        "The last letter is wrong. Many learners hear a t at the end, but the word ends in d, as 'stand' does: under-stand.",
    },
    more: "The past tense is 'understood', just as stand becomes stood.",
  },
  'hopital|hospitel|hospital|hopsital': {
    why: "The correct spelling is 'hospital': hos-pi-tal, h-o-s-p-i-t-a-l. It has an s before the p, and it ends in -al.",
    not: {
      hopital:
        "The s is missing, as in the French 'hôpital'. English has s before the p: hos-pi-tal.",
      hospitel: 'The vowel in the ending is wrong. It is -al, with a: hospit-al.',
      hopsital: 'The p and s are the wrong way round. After ho comes s, then p: hos-pi-tal.',
    },
    more: 'The French word lost its s long ago and marks it with the hat on the o: hôpital. English kept the s.',
  },
  'stasion|estation|station|stacion': {
    why: "The correct spelling is 'station': s-t-a-t-i-o-n. The 'shun' sound at the end is written -tion, as in most English words.",
    not: {
      stasion: "The ending is wrong. The 'shun' sound is written -tion here: sta-tion.",
      estation:
        "There is an extra e at the start, as in the Spanish 'estación'. English starts with st-: sta-tion.",
      stacion: 'The ending is -cion, as in Spanish. English writes -tion: sta-tion.',
    },
    more: "Most nouns that end in the 'shun' sound use -tion: nation, action, question.",
  },
  'supermaket|supermarkit|supermarket|supermarcket': {
    why: "The correct spelling is 'supermarket': super + market, s-u-p-e-r-m-a-r-k-e-t. It is two words joined, and 'market' keeps all its letters.",
    not: {
      supermaket:
        "The r in 'market' is missing. British speakers often do not say it, but it is written: super-mar-ket.",
      supermarkit: "The vowel in the ending is wrong. It is -ket, with e, as in 'market'.",
      supermarcket: "There is an extra c. 'Market' has only k: mar-ket.",
    },
    more: 'Many British speakers drop the r sound before a consonant, so write the r you cannot hear: market, start, word.',
  },
  'contry|countrey|country|countery': {
    why: "The correct spelling is 'country': c-o-u-n-t-r-y. It starts like 'count', with ou, and ends in -try.",
    not: {
      contry: "The u is missing. The word starts c-o-u, like 'count': coun-try.",
      countrey: 'There is an extra e before the y. The ending is -try: coun-try.',
      countery: 'There is an extra e. After coun- comes t-r-y: coun-try.',
    },
    more: 'The plural changes y to i and adds -es: one country, two countries.',
  },
  'vilage|villige|village|villege': {
    why: "The correct spelling is 'village': v-i-l-l-a-g-e, with a double l and the ending -age. A village is smaller than a town. In Great Expectations, Pip and his companions walk back together to the village.",
    not: {
      vilage: 'One l is missing. The word has a double l: vil-lage.',
      villige: 'The vowel in the ending is wrong. It is -age, with a: vill-age.',
      villege: 'The vowel in the ending is wrong. It is -age, with a: vill-age.',
    },
    more: "Many nouns end in -age said like 'ij': village, cabbage, sausage.",
  },
  'mountian|mountin|mountain|mountan': {
    why: "The correct spelling is 'mountain': mount + ain, m-o-u-n-t-a-i-n. It ends in -ain, with a before i, though we say it like 'mountin'.",
    not: {
      mountian: 'The a and i are the wrong way round. The ending is -ain: mount-ain.',
      mountin: 'The a is missing. The ending is -ain, with a and i: mount-ain.',
      mountan: 'The i is missing. The ending is -ain: mount-a-i-n.',
    },
    more: "Other words end in -ain said like 'in': captain, curtain, fountain.",
  },
  'Britian|Brittain|Britan|Britain': {
    why: "The correct spelling is 'Britain': B-r-i-t-a-i-n, with one t and the ending -ain. Great Britain is made up of England, Scotland and Wales.",
    not: {
      Britian: 'The a and i are the wrong way round. The ending is -ain: Brit-ain.',
      Brittain: 'This has a double t. The word has one t: Bri-tain.',
      Britan: 'The i in the ending is missing. The ending is -ain: Brit-ain.',
    },
    more: "The adjective is 'British', with one t as well: British English.",
  },
  'holliday|holidey|holiday|hollyday': {
    why: "The correct spelling is 'holiday': h-o-l-i-d-a-y, with one l. It began as 'holy day'. In Great Expectations, Wemmick says he is going to take a holiday, and asks Pip to walk with him.",
    not: {
      holliday: "This has a double l. 'Holiday' has one l: hol-i-day.",
      holidey: "The ending is wrong. It is 'day': holi-day.",
      hollyday: 'This has a double l and a y. The word is holi + day: h-o-l-i-day.',
    },
    more: "In British English a holiday is a trip away, or a day off. American English often says 'vacation' for the trip.",
  },
  'birtday|berthday|birthday|birthdey': {
    why: "The correct spelling is 'birthday': birth + day, b-i-r-t-h-d-a-y. It joins two words and keeps the th of 'birth'. In Great Expectations, Miss Havisham tells Pip, 'This is my birthday, Pip.'",
    not: {
      birtday: "The h is missing. 'Birth' ends in th: birth-day.",
      berthday: "The vowel is wrong. It is i, as in 'bird': birth-day.",
      birthdey: "The ending is wrong. The second part is 'day': birth-day.",
    },
    more: "We say 'happy birthday', and give birthday cards and presents.",
  },
  'televison|telivision|television|televition': {
    why: "The correct spelling is 'television': tele + vision, t-e-l-e-v-i-s-i-o-n. It joins 'tele', meaning far, and 'vision', meaning seeing.",
    not: {
      televison: 'The i before -on is missing. The ending is -vision: tele-vis-i-on.',
      telivision: 'The vowel after tel is wrong. It is e: tele-vision.',
      televition: "The ending is -sion, with s, as in 'vision': tele-vision.",
    },
    more: "Tele- means far: telephone, telescope. British speakers often say 'TV' or 'telly'.",
  },
  'elefant|elephent|eliphant|elephant': {
    why: "The correct spelling is 'elephant': e-l-e-p-h-a-n-t. The f sound is written ph, and the word ends in -ant.",
    not: {
      elefant: 'The ph is written f, as in German and Swedish. English writes ph: ele-ph-ant.',
      elephent: 'The vowel in the ending is wrong. It is -ant, with a: eleph-ant.',
      eliphant: 'The second vowel is wrong. It is e: e-le-phant.',
    },
    more: 'Ph spells the f sound in many words that come from Greek: phone, photo, dolphin, alphabet.',
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
  'begginer|beginer|beginner|biginner': {
    why: "The correct spelling is 'beginner'. It is 'begin' with the n doubled before -er: b-e-g-i-n-n-e-r. Example: 'This class is for beginners.'",
    not: {
      begginer: 'The wrong letter is doubled. This doubles the g, but you double the n.',
      beginer: 'The n is not doubled. Write n twice before -er: begin + n + er.',
      biginner: 'The first vowel is wrong. The word starts b-e-g, with e after the b.',
    },
    more: "The stress is on the last part of 'begin', so the n doubles. Short words do the same: run becomes runner, and swim becomes swimmer.",
  },
  'beleive|believe|beleeve|believ': {
    why: "The correct spelling is 'believe'. The middle has i before e: b-e-l-i-e-v-e. We use it for something you think is true: 'I believe you.'",
    not: {
      beleive: 'The i and e are the wrong way round. After l, write i, then e: -lieve.',
      beleeve: 'The i is written as e. The word has i and e: b-e-l-i-e-v-e.',
      believ: 'The final e is missing. The word ends in -ieve.',
    },
    more: "Other words with the same pattern: relieve, chief, thief. The rhyme 'i before e except after c' works here, as no c comes before the letters.",
  },
  'piece|peice|piec|peese': {
    why: "The correct spelling is 'piece'. It has ie after p and ends in -ce: p-i-e-c-e. In Great Expectations, the convict empties Pip's pockets and finds nothing but a piece of bread.",
    not: {
      peice: "The i and e are the wrong way round. In 'piece' the i comes first: p-i-e-c-e.",
      piec: 'The last e is missing. The word ends in -ce: p-i-e-c-e.',
      peese: 'The first vowel is wrong, and the ending is -se. The word starts pie and ends -ce.',
    },
    more: "Do not mix up 'piece' (a part of something) with 'peace' (a calm time without war). They sound the same but are not spelt the same.",
  },
  'bussiness|buisness|business|bisness': {
    why: "The correct spelling is 'business'. It starts with busi (b-u-s-i) and ends with ness: busi-ness. Example: 'My aunt has a small business.'",
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
    more: 'Surprise, advise and revise end in -ise, never -ize.',
  },
  'callendar|calandar|calendar|calander': {
    why: "The correct spelling is 'calendar'. The middle is -len- and the ending is -ar: c-a-l-e-n-d-a-r. Example: 'I wrote the test date on the calendar.'",
    not: {
      callendar: "This has a double l. 'Calendar' has only one l.",
      calandar: 'The middle is wrong. It has -lan-, but the word has -len-, with e.',
      calander: 'Two letters are wrong. It needs e in the middle (-len-) and a at the end (-ar).',
    },
    more: "A calendar shows the days and months of the year. A common slip is to end the word in -er, like 'calender', a machine that presses cloth. This word ends in -ar.",
    tip: "Look for the word 'end' in the middle: cal-end-ar.",
  },
  'grammer|gramar|grammar|gramer': {
    why: "The correct spelling is 'grammar'. It has a double m and ends in -ar: g-r-a-m-m-a-r. Example: 'English grammar has many rules.'",
    not: {
      grammer: 'The ending is wrong. It is -ar, not -er.',
      gramar: 'An m is missing. The word has a double m in the middle: g-r-a-m-m-a-r.',
      gramer: "This has one m and ends in -er. 'Grammar' has a double m and ends in -ar.",
    },
    more: 'Grammar means the rules for putting words together into sentences.',
  },
  'que|queue|quew|queu': {
    why: "The correct spelling is 'queue'. It sounds like the letter Q, but it has four more letters after the q: q-u-e-u-e. Example: 'We waited in a queue for the tickets.'",
    not: {
      que: "This is too short, and it is a Spanish and French word. 'Queue' has two u letters and two e letters: q-u-e-u-e.",
      quew: 'The ending is wrong. There is no w. After q, the letters are u, e, u, e.',
      queu: 'The last e is missing. The word ends in -ueue.',
    },
    more: "A queue is a line of shoppers or travellers waiting for a turn. It is the usual British word; American English often says 'line'.",
  },
  'probaly|probably|probebly|probally': {
    why: "The correct spelling is 'probably': prob-ab-ly. It has a b, then a, then a second b before -ly. It comes from 'probable', and it means very likely.",
    not: {
      probaly: 'The second b is missing. After prob-a, write b again: prob-ab-ly.',
      probebly: 'The vowel after prob is wrong. It is a, not e: prob-ab-ly.',
      probally:
        "This has a double l and no second b. The ending is -bly, from 'probable': prob-ab-ly.",
    },
    more: 'An adjective ending in -ble changes to -bly: probable becomes probably, sensible becomes sensibly, and visible becomes visibly.',
  },
  'oppinion|opinion|opinon|openion': {
    why: "The correct spelling is 'opinion'. It has one p and ends in -ion: o-p-i-n-i-o-n. It means what you think about something. Example: 'In my opinion, the film was too long.'",
    not: {
      oppinion: "This has a double p. 'Opinion' has only one p.",
      opinon: 'The second i is missing. The ending is -ion, with i before o.',
      openion: 'The first vowel after p is wrong. It should be i, not e: o-p-i-n.',
    },
    more: "Use 'In my opinion' or 'I think' to give your view. 'Opinion' is a noun: 'She gave her opinion.'",
    tip: "In an essay, give a reason for each opinion: 'In my opinion, lessons should start later, as we need more sleep.'",
  },
  'neighbour|nieghbour|naybour|neibour': {
    why: "The correct British spelling is 'neighbour'. It starts with neigh (n-e-i-g-h) and ends with bour: n-e-i-g-h-b-o-u-r. In Jane Eyre, Jane promises Rochester, 'I will be your neighbour, your nurse, your housekeeper.'",
    not: {
      nieghbour: 'The e and i are the wrong way round. The word starts n-e-i-g-h.',
      naybour: 'This is spelt as it sounds. The first part is written neigh, not nay.',
      neibour: 'The gh is missing. The word has neigh before the b.',
    },
    more: "The letters eigh sound like 'ay' here, as in 'eight' and 'sleigh'. American English leaves out the u in the ending.",
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
  'enouf|enough|enought|enogh': {
    why: "The correct spelling is 'enough': e-n-o-u-g-h. The ending sounds like 'uff' here, but it is written with o, u, g and h. In Animal Farm, Squealer says that bravery is not enough.",
    not: {
      enouf:
        'This writes the f sound with an f. In this word the sound is written gh: e-n-o-u-g-h.',
      enought: 'There is an extra t at the end. The word ends in -gh, with nothing after the h.',
      enogh: 'The u is missing. The ending is -ough: o, u, g, h.',
    },
    more: 'The letters ough have many sounds: tough and rough (uff), though (oh), through (oo), cough (off). Learn each one on its own.',
  },
  'heigth|hieght|height|heigt': {
    why: "The correct spelling is 'height': h-e-i-g-h-t. It has e before i, and it ends in -ght, like 'eight'. It is the noun from 'high', and it tells you how tall something is.",
    not: {
      heigth: 'The t and h are in the wrong order. The word ends in -ght: g, h, then t.',
      hieght: "The i and e are the wrong way round. In 'height' the e comes first: h-e-i.",
      heigt: 'The h after the g is missing. The ending has three letters: -ght.',
    },
    more: "The vowel sounds like 'high', not like 'eight', though the letters match. The adjective is 'high' and the noun is 'height': 'How high is it? What is its height?'",
  },
  'moveing|movving|moving|mooving': {
    why: "The correct spelling is 'moving': move + ing, m-o-v-i-n-g. When a word ends in a silent e, drop the e before -ing. The v is not doubled.",
    not: {
      moveing: "This keeps the e from 'move'. Drop the silent e before -ing: mov + ing.",
      movving: 'This doubles the v. When the silent e is dropped, nothing doubles: move, moving.',
      mooving:
        "This is spelt the way it sounds, with oo. The word is 'move' without its e: mov-ing.",
    },
    more: "The same rule works for many verbs: smile, smiling; dance, dancing; hope, hoping. Keep the e in 'being' and 'seeing', where the e is not silent.",
  },
  'writting|writeing|writing|riting': {
    why: "The correct spelling is 'writing': write + ing, w-r-i-t-i-n-g. Drop the silent e of 'write' and add -ing. The t is not doubled, as the i says its name.",
    not: {
      writting:
        "This doubles the t. The i in 'write' is long, so nothing doubles: writ-ing. A double t comes in 'written', where the i is short.",
      writeing: "This keeps the e of 'write'. Drop the silent e before -ing: writ + ing.",
      riting: "The silent w at the start is missing. The word begins w-r, as in 'write': w-riting.",
    },
    more: "Compare 'writing', with a long i and one t, and 'written', with a short i and a double t.",
  },
  'makeing|makking|making|macking': {
    why: "The correct spelling is 'making': make + ing, m-a-k-i-n-g. Drop the silent e of 'make' and add -ing. In Animal Farm, Snowball tells Mollie there is no way of making sugar on the farm.",
    not: {
      makeing: "This keeps the e of 'make'. Drop the silent e before -ing: mak + ing.",
      makking: "This doubles the k. The a in 'make' is long, so nothing doubles: mak-ing.",
      macking: "There is an extra c. 'Make' has only k: mak-ing.",
    },
    more: 'Take, bake and shake work the same way: taking, baking, shaking.',
  },
  'lieing|liying|lying|lyeing': {
    why: "The correct spelling is 'lying': l-y-i-n-g. When a verb ends in -ie, the ie changes to y before -ing: lie, lying. It means not telling the truth, or resting flat on a bed or the ground.",
    not: {
      lieing: "This keeps the ie of 'lie'. Before -ing, ie changes to y: ly-ing.",
      liying: "This keeps the i and adds a y. The ie of 'lie' becomes a single y: ly-ing.",
      lyeing: "There is an extra e. The ie of 'lie' becomes y, and -ing follows: ly-ing.",
    },
    more: 'Tie and die do the same: tying, dying.',
  },
  'forgoten|forgotton|forgotten|fogotten': {
    why: "The correct spelling is 'forgotten': for + got + ten, f-o-r-g-o-t-t-e-n. The t doubles before -en, as the o is short. In Great Expectations, Herbert stops his story to say, 'But I have forgotten one thing.'",
    not: {
      forgoten: 'One t is missing. After the short o, the t doubles before -en: forgot-ten.',
      forgotton: 'The ending is wrong. It is -en, with e: forgott-en.',
      fogotten:
        'The r is missing. British speakers often do not say it, but it is written: for-gotten.',
    },
    more: "The verb goes forget, forgot, forgotten. 'Got' and 'gotten' follow the same pattern, though British English mostly says 'got'.",
  },
  'studys|studyes|studies|studdies': {
    why: "The correct spelling is 'studies': the y of 'study' changes to i, then -es is added. In Pride and Prejudice, Bingley jokes that Darcy studies too much for words of four syllables.",
    not: {
      studys: 'This keeps the y. After a consonant, y changes to i before -es: stud-ies.',
      studyes: 'This keeps the y and adds -es. The y changes to i: stud-i-es.',
      studdies: 'This doubles the d. The word has one d: stu-dies.',
    },
    more: 'The rule works after a consonant: copy, copies; try, tries. After a vowel the y stays: play, plays.',
  },
  'carryed|caried|carried|carrid': {
    why: "The correct spelling is 'carried': c-a-r-r-i-e-d. The y of 'carry' changes to i before -ed, and the double r stays. Near the end of Animal Farm, Napoleon walks out on two legs and carries a whip in his trotter.",
    not: {
      carryed: 'This keeps the y. After a consonant, y changes to i before -ed: carr-ied.',
      caried: "One r is missing. 'Carry' has a double r, and it stays: carr-ied.",
      carrid: 'The e of -ed is missing. The ending is -ied: carr-i-ed.',
    },
    more: 'The same change happens in copy, copied, and marry, married. After a vowel the y stays: stay, stayed.',
  },
  'happyer|hapier|happier|happiyer': {
    why: "The correct spelling is 'happier': h-a-p-p-i-e-r. The y of 'happy' changes to i before -er, and the double p stays. At the end of Silas Marner, Eppie says nobody could be happier than they are.",
    not: {
      happyer: 'This keeps the y. After a consonant, y changes to i before -er: happ-ier.',
      hapier: "One p is missing. 'Happy' has a double p, and it stays: happ-ier.",
      happiyer: 'This keeps the y and adds an i. The y becomes i: happ-i-er.',
    },
    more: 'The same change gives the -est form: happiest. Other examples: funny, funnier; early, earlier.',
  },
  'easyly|easly|easily|easilly': {
    why: "The correct spelling is 'easily': e-a-s-i-l-y. The y of 'easy' changes to i before -ly, and there is one l.",
    not: {
      easyly: "This keeps the y. Before -ly, the y of 'easy' changes to i: eas-ily.",
      easly: "The i is missing. The y of 'easy' becomes i: eas-i-ly.",
      easilly: 'This has a double l. The ending is -ly, with one l: easi-ly.',
    },
    more: 'Other adjectives that end in y do the same: lucky, luckily; angry, angrily; noisy, noisily.',
  },
  'familys|familyes|families|famillies': {
    why: "The correct spelling is 'families': f-a-m-i-l-i-e-s. The y of 'family' changes to i, and -es is added. In Pride and Prejudice, Mrs Bennet boasts that they dine with four and twenty families.",
    not: {
      familys: 'This keeps the y. After a consonant, y changes to i before -es: famil-ies.',
      familyes: 'This keeps the y and adds -es. The y becomes i: famil-i-es.',
      famillies: "This has a double l, as in the French 'famille'. English has one l: fa-mi-lies.",
    },
    more: "'Four and twenty' is an old way to say twenty-four.",
  },
  'citys|cityes|cities|citties': {
    why: "The correct spelling is 'cities': c-i-t-i-e-s. The y of 'city' changes to i, and -es is added.",
    not: {
      citys: 'This keeps the y. After a consonant, y changes to i before -es: cit-ies.',
      cityes: 'This keeps the y and adds -es. The y becomes i: cit-i-es.',
      citties: "This doubles the t. 'City' has one t, and so does its plural.",
    },
    more: 'The rule is for a y after a consonant. After a vowel, just add s: day, days; boy, boys.',
  },
  'worryed|woried|worried|wurried': {
    why: "The correct spelling is 'worried': w-o-r-r-i-e-d. The y of 'worry' changes to i before -ed, and the double r stays. In The Great Gatsby, Nick tells the butler he has not seen Gatsby around and is rather worried.",
    not: {
      worryed: 'This keeps the y. After a consonant, y changes to i before -ed: worr-ied.',
      woried: "One r is missing. 'Worry' has a double r: worr-ied.",
      wurried: "The vowel is wrong. It sounds like 'wurr', but it is spelt with o: worr-ied.",
    },
    more: "The noun 'worry' has a plural too: worries. The y changes in the same way.",
  },
  'babys|babyes|babies|babbies': {
    why: "The correct spelling is 'babies': b-a-b-i-e-s. The y of 'baby' changes to i, and -es is added. One baby, two babies.",
    not: {
      babys: 'This keeps the y. After a consonant, y changes to i before -es: bab-ies.',
      babyes: 'This keeps the y and adds -es. The y becomes i: bab-i-es.',
      babbies: "This doubles the b. 'Baby' has one b in the middle: ba-bies.",
    },
    more: "Do not use an apostrophe for a plural. 'Babies' means more than one baby; 'the baby's toy' shows what belongs to one baby.",
  },
  'enjoied|enjoyd|enjoyed|injoyed': {
    why: "The correct spelling is 'enjoyed': enjoy + ed, e-n-j-o-y-e-d. The y stays, as it comes after a vowel, o.",
    not: {
      enjoied: 'This changes the y to i. After a vowel the y stays: enjoy-ed.',
      enjoyd: 'The e of -ed is missing. Add -ed: enjoy-ed.',
      injoyed: 'The first letter is wrong. The word starts with e: en-joy.',
    },
    more: 'After a vowel, y stays: play, played; stay, stayed. After a consonant it changes: cry, cried.',
  },
  'monkies|monkeyes|monkeys|monkys': {
    why: "The correct spelling is 'monkeys': monkey + s. The y comes after a vowel, e, so it stays and you just add s.",
    not: {
      monkies: 'This changes the y to i. After a vowel the y stays: monkey-s.',
      monkeyes: 'This adds -es. After a vowel and y, just add s: monkey-s.',
      monkys: "The e is missing. The word is 'monkey' plus s: monk-ey-s.",
    },
    more: 'Other words like this: key, keys; valley, valleys; donkey, donkeys.',
  },
  'carefull|carful|careful|carefool': {
    why: "The correct spelling is 'careful': care + ful, c-a-r-e-f-u-l. The ending -ful has one l, and 'care' keeps its e. In Great Expectations, Mr Jaggers warns Pip, 'Now, Pip, be careful.'",
    not: {
      carefull: 'This has two l letters at the end. The ending -ful has only one l: care-ful.',
      carful: "The e of 'care' is missing. Before -ful the e stays: care-ful.",
      carefool: 'This is spelt the way it sounds. The ending is -ful, with u: care-ful.',
    },
    more: "Add -ly and the l doubles: carefully. The word 'full' has two l letters, but the ending -ful has one.",
  },
  'usefull|usful|useful|usefool': {
    why: "The correct spelling is 'useful': use + ful, u-s-e-f-u-l. 'Use' keeps its e, and the ending -ful has one l. In Jane Eyre, Jane tells Rochester she will sit up with him whenever she can be useful.",
    not: {
      usefull: 'This has two l letters at the end. The ending -ful has only one l: use-ful.',
      usful: "The e of 'use' is missing. Before -ful the e stays: use-ful.",
      usefool: 'This is spelt the way it sounds. The ending is -ful, with u: use-ful.',
    },
    more: 'Words that end in a silent e keep it before -ful: hopeful, peaceful, graceful.',
  },
  'finaly|finnaly|finally|finnally': {
    why: "The correct spelling is 'finally': final + ly, f-i-n-a-l-l-y. 'Final' ends in l, and -ly adds another, so there is a double l. The n is single.",
    not: {
      finaly: "One l is missing. Add -ly to 'final' and keep both: final-ly.",
      finnaly: 'This doubles the n and drops an l. The word is f-i-n-a-l, then -ly.',
      finnally: "This doubles the n. 'Final' has one n: fi-nal-ly.",
    },
    more: 'An adjective that ends in -al keeps its l before -ly: final, finally; real, really.',
  },
  'suddently|sudenly|suddenly|sudently': {
    why: "The correct spelling is 'suddenly': sudden + ly, s-u-d-d-e-n-l-y. Keep the double d of 'sudden' and add -ly. There is no t.",
    not: {
      suddently: "There is an extra t. The word is 'sudden' plus -ly, with no t: sudden-ly.",
      sudenly: "One d is missing. 'Sudden' has a double d: sud-den-ly.",
      sudently: 'One d is missing and there is an extra t. The word is sudden + ly.',
    },
    more: 'Most adjectives just add -ly: sudden, suddenly; quick, quickly; quiet, quietly.',
  },
  'actualy|actully|actually|acctually': {
    why: "The correct spelling is 'actually': actual + ly, a-c-t-u-a-l-l-y, with a double l. In Animal Farm, Squealer claims that many of the pigs actually dislike the milk and apples they keep for themselves.",
    not: {
      actualy: 'One l is missing. Add -ly to actual and keep both l letters: actual-ly.',
      actully: 'The a before the l is missing. The word is actual plus -ly: actu-al-ly.',
      acctually: 'This doubles the c. The word starts a-c-t: ac-tu-al-ly.',
    },
    more: "'Actually' means 'in fact'. It does not mean 'now', as similar words do in French or Spanish: for 'now', English says 'at the moment'.",
  },
  'thum|thumbe|thumb|tumb': {
    why: "The correct spelling is 'thumb': t-h-u-m-b. There is a silent b after the m. In Romeo and Juliet, Sampson bites his thumb at the Montague servants to start a quarrel.",
    not: {
      thum: 'The silent b is missing. You do not hear it, but it is written: thum-b.',
      thumbe: 'There is an extra e at the end. The word ends in the silent b: t-h-u-m-b.',
      tumb: 'The h is missing. The word starts with th: th-umb.',
    },
    more: 'A silent b often follows m at the end of a word: lamb, comb, bomb, crumb.',
  },
  'iland|ailand|island|islend': {
    why: "The correct spelling is 'island': is + land, i-s-l-a-n-d. There is a silent s, and the word ends with 'land'.",
    not: {
      iland: 'The silent s is missing. You do not hear it, but it is written: is-land.',
      ailand: 'This is spelt the way it sounds. The word starts with i-s: is-land.',
      islend: "The vowel in the ending is wrong. It is 'land', with a: is-land.",
    },
    more: "The s came from the French word 'isle'. The old English word had no s at all.",
  },
  'haf|harf|halfe|half': {
    why: "The correct spelling is 'half': h-a-l-f. There is a silent l before the f. In Animal Farm, the animals' windmill is almost half built.",
    not: {
      haf: 'The silent l is missing. You do not hear it, but it is written: ha-l-f.',
      harf: "There is an r in place of the l. The vowel sounds like 'ah', but the word is spelt h-a-l-f.",
      halfe: 'There is an extra e at the end. The word ends in f: h-a-l-f.',
    },
    more: "The plural changes f to v: one half, two halves. The l is silent in 'calf' and 'walk' too.",
  },
  'onest|honnest|honest|honist': {
    why: "The correct spelling is 'honest': h-o-n-e-s-t. The h is silent, and the word ends in -est. Honest means telling the truth.",
    not: {
      onest: 'The silent h is missing. You do not hear it, but it is written: h-onest.',
      honnest: "This has a double n, as in the French 'honnête'. English has one n: hon-est.",
      honist: 'The vowel in the ending is wrong. It is -est, with e: hon-est.',
    },
    more: "As the h is silent, we say 'an honest man', not 'a honest man'. The h is silent in 'hour' and 'honour' too.",
  },
  'casle|castel|cassle|castle': {
    why: "The correct spelling is 'castle': c-a-s-t-l-e. There is a silent t after the s, and the word ends in -le.",
    not: {
      casle: 'The silent t is missing. You do not hear it, but it is written: cas-t-le.',
      castel: 'The l and e are the wrong way round. The word ends in -le: cast-le.',
      cassle: 'This has a double s. The word has s, then a silent t: cas-tle.',
    },
    more: "The t is silent before -le in 'whistle', 'bustle' and 'wrestle' too.",
  },
  'sissors|scisors|scissors|scissers': {
    why: "The correct spelling is 'scissors': s-c-i-s-s-o-r-s. It starts with sc, though the c is silent, has a double s in the middle, and ends in -ors.",
    not: {
      sissors: 'The silent c is missing. The word starts s-c: sc-issors.',
      scisors: 'One s is missing in the middle. The word has a double s: sci-ss-ors.',
      scissers: 'The vowel in the ending is wrong. It is -ors, with o: sciss-ors.',
    },
    more: "Like 'trousers', the word is plural: 'These scissors are sharp.' For one, say 'a pair of scissors'.",
  },
  'bild|biuld|build|buld': {
    why: "The correct spelling is 'build': b-u-i-l-d. There is a silent u after the b. In Animal Farm, after the windmill is destroyed, the animals are told, 'We will build another windmill.'",
    not: {
      bild: 'The silent u is missing. You do not hear it, but it comes after the b: b-u-ild.',
      biuld: 'The u and i are the wrong way round. After the b, write u first, then i: b-u-i-ld.',
      buld: 'The i is missing. The vowel sounds like i, and it is written ui: b-ui-ld.',
    },
    more: "The past tense is 'built', and the u stays. 'Guilt' and 'guitar' have a silent u too.",
  },
  'feild|feeld|field|fild': {
    why: "The correct spelling is 'field': f-i-e-l-d, with i before e. The rhyme 'i before e, except after c' works here. In Animal Farm, the animals are weeding the turnip field when the farmers come to visit.",
    not: {
      feild: 'The i and e are the wrong way round. After the f, write i first, then e: f-ie-ld.',
      feeld: 'The vowel sound is written ie here, not ee: f-ie-ld.',
      fild: 'The e is missing. The vowel sound is written ie: f-ie-ld.',
    },
    more: 'Other words with ie for this sound: shield, chief, thief, priest.',
  },
  'neice|neece|niece|niese': {
    why: "The correct spelling is 'niece': n-i-e-c-e. It has i before e, and it ends in -ce. Your niece is the girl child of your brother or sister. In A Christmas Carol, Scrooge's niece says she has no patience with him.",
    not: {
      neice: 'The e and i are the wrong way round. After the n, write i first, then e: n-ie-ce.',
      neece: 'The vowel sound is written ie here, not ee: n-ie-ce.',
      niese: 'The ending is wrong. It is -ce, with c: nie-ce.',
    },
    more: "'Niece' comes from the French 'nièce', with the same i before e.",
  },
  'cieling|celing|ceiling|seiling': {
    why: "The correct spelling is 'ceiling': c-e-i-l-i-n-g. After c, the letters are e then i, as the rhyme says. In The War of the Worlds, the narrator's brother wakes in London to see red reflections dancing on the ceiling.",
    not: {
      cieling: 'The i and e are the wrong way round. After c, write e first, then i: c-ei-ling.',
      celing: 'The i is missing. After c come e and i together: c-ei-ling.',
      seiling: 'The first letter is wrong. The word starts with c, not s: c-eiling.',
    },
    more: 'The ceiling is the inside top of a room; the roof is outside, on top of the house.',
  },
  'wieght|weigth|weight|weght': {
    why: "The correct spelling is 'weight': w + eight, w-e-i-g-h-t. It is the word 'eight' with a w in front, and it tells you how heavy something is.",
    not: {
      wieght: "The i and e are the wrong way round. The word has 'eight' in it: w-eight.",
      weigth: "The t and h are in the wrong order. The word ends like 'eight': -ght.",
      weght: "The i is missing. The word has 'eight' in it: w-e-i-ght.",
    },
    more: "The verb is 'weigh', with no t: 'How much do you weigh?' The noun adds t.",
  },
  'confortable|comfortible|comfortable|comfterble': {
    why: "The correct spelling is 'comfortable': comfort + able, c-o-m-f-o-r-t-a-b-l-e. It starts with com- and ends in -able. In Great Expectations, Biddy tells Pip she only wants him to do well and be comfortable.",
    not: {
      confortable:
        'This has n in place of the m, as in French and Spanish. English writes com-: com-fort-able.',
      comfortible: 'The ending is wrong. It is -able, with a: comfort-able.',
      comfterble:
        "This is spelt the way it sounds. The word is 'comfort' plus '-able': comfort-able.",
    },
    more: "Many speakers say it in three beats, 'comf-ta-bul', but write all four parts: com-for-ta-ble.",
  },
  'possable|posible|possible|possibile': {
    why: "The correct spelling is 'possible': p-o-s-s-i-b-l-e, with a double s and the ending -ible. In A Midsummer Night's Dream, Quince says the play cannot go on without Bottom: 'It is not possible.'",
    not: {
      possable: 'The ending is wrong. It is -ible, with i: poss-ible.',
      posible: 'One s is missing, as in Spanish. English has a double s: pos-sible.',
      possibile:
        "There is an extra i, as in the Italian 'possibile'. English ends in -ible: poss-ible.",
    },
    more: "Add im- for 'not possible': impossible. The adverb ends in -bly: possibly.",
  },
  'terible|terrable|terrible|terribel': {
    why: "The correct spelling is 'terrible': t-e-r-r-i-b-l-e, with a double r and the ending -ible. In Animal Farm, the hens raise a terrible outcry when they learn that the eggs must be sold.",
    not: {
      terible: 'One r is missing. The word has a double r: ter-rible.',
      terrable: 'The ending is wrong. It is -ible, with i: terr-ible.',
      terribel: 'The l and e are the wrong way round. The word ends in -le: terrib-le.',
    },
    more: "'Terrible' and 'horrible' both have a double r and end in -ible.",
  },
  'dissapear|disapear|disappear|dissappear': {
    why: "The correct spelling is 'disappear': dis + appear, d-i-s-a-p-p-e-a-r. Join 'dis-' and 'appear' and keep each one's letters: one s, then a double p.",
    not: {
      dissapear:
        "This doubles the s and has one p. 'Dis-' has one s, and 'appear' has a double p: dis-appear.",
      disapear: "One p is missing. 'Appear' has a double p: dis-appear.",
      dissappear: "This doubles the s. 'Dis-' has only one s: dis-appear.",
    },
    more: 'Add dis- to a word and change nothing: dis + like = dislike, dis + obey = disobey. A double s comes only when the word starts with s: dis + satisfied.',
  },
  'dissagree|disagre|disagree|disegree': {
    why: "The correct spelling is 'disagree': dis + agree, d-i-s-a-g-r-e-e. 'Dis-' keeps one s, and 'agree' keeps its double e at the end.",
    not: {
      dissagree: "This doubles the s. 'Dis-' has only one s: dis-agree.",
      disagre: "One e is missing. 'Agree' ends in a double e: dis-agree.",
      disegree: "The vowel after dis- is wrong. The word is 'agree', with a: dis-agree.",
    },
    more: "The noun is 'disagreement'. 'Dis-' turns a word round: agree, disagree; like, dislike.",
  },
  'infomation|imformation|information|informacion': {
    why: "The correct spelling is 'information': in + form + ation, i-n-f-o-r-m-a-t-i-o-n. It starts with in-, has 'form' in the middle, and ends in -ation.",
    not: {
      infomation:
        "The r is missing. British speakers often do not say it, but the word has 'form' in it: in-form-ation.",
      imformation: 'The n is written as m. The word starts with in-: in-formation.',
      informacion: 'This ends in -cion, as in Spanish. English ends in -tion: informa-tion.',
    },
    more: "'Information' has no plural in English: say 'some information', not 'informations'.",
  },
  'explaination|explenation|explanation|explination': {
    why: "The correct spelling is 'explanation': e-x-p-l-a-n-a-t-i-o-n. The verb 'explain' has ai, but the noun drops the i: expla-nation. In Jane Eyre, Rochester tells Jane, 'I want an explanation.'",
    not: {
      explaination: "This keeps the ai from 'explain'. The noun has only a: expla-nation.",
      explenation: 'The vowel after expl- is wrong. It is a: expla-nation.',
      explination: 'The vowel after expl- is wrong. It is a: expla-nation.',
    },
    more: "The same thing happens with 'exclaim' and 'exclamation': the noun drops the i.",
  },
  'bougth|baught|bought|boght': {
    why: "The correct spelling is 'bought': b-o-u-g-h-t. It is the past of 'buy', and it ends in -ought. In The Great Gatsby, Tom says of the yellow car, 'I bought it last week.'",
    not: {
      bougth: 'The t and h are in the wrong order. The ending is -ght: bou-ght.',
      baught: 'The vowel is written ou, not au: b-ou-ght.',
      boght: 'The u is missing. The ending is -ought: b-ough-t.',
    },
    more: "The vowel sounds like the 'or' in 'fort', but it is written ough.",
  },
  'thougth|thougt|thought|tought': {
    why: "The correct spelling is 'thought': t-h-o-u-g-h-t. It is the past of 'think', and it ends in -ought. In A Christmas Carol, Scrooge recalls a tale where a man thought he was dreaming.",
    not: {
      thougth: 'The t and h are in the wrong order. The ending is -ght: thou-ght.',
      thougt: 'The h before the t is missing. The ending is -ght: thoug-h-t.',
      tought:
        "The h after the first t is missing. The word starts with th, as in 'think': th-ought.",
    },
    more: "'Thought' is also a noun: 'a happy thought'. 'Though' and 'through' are other words, with no t at the end.",
  },
  'cought|caugth|caught|caugt': {
    why: "The correct spelling is 'caught': c-a-u-g-h-t. It is the past of 'catch', and it ends in -aught: a, u, g, h, t.",
    not: {
      cought: 'The vowel is wrong. It is written au, not ou: c-au-ght.',
      caugth: 'The t and h are in the wrong order. The ending is -ght: cau-ght.',
      caugt: 'The h is missing. The ending is -ght: caug-h-t.',
    },
    more: "Only a few past forms end in -aught: this one, and the past of 'teach'. Many more end in -ought.",
  },
  'taugth|taugt|taught|tawght': {
    why: "The correct spelling is 'taught': t-a-u-g-h-t. It is the past of 'teach', and it ends in -aught. In Great Expectations, Estella asks Miss Havisham, 'Who taught me to be proud?'",
    not: {
      taugth: 'The t and h are in the wrong order. The ending is -ght: tau-ght.',
      taugt: 'The h is missing. The ending is -ght: taug-h-t.',
      tawght: 'The vowel is written au, not aw: t-au-ght.',
    },
    more: "Do not mix up 'taught' (from teach) with 'taut', meaning pulled tight. They sound the same.",
  },
  'brougth|braught|brought|brougt': {
    why: "The correct spelling is 'brought': b-r-o-u-g-h-t. It is the past of 'bring', and it ends in -ought. In Great Expectations, the convict asks Pip, 'You brought no one with you?'",
    not: {
      brougth: 'The t and h are in the wrong order. The ending is -ght: brou-ght.',
      braught: 'The vowel is wrong. It is written ou: br-ou-ght.',
      brougt: 'The h is missing. The ending is -ght: broug-h-t.',
    },
    more: "'Bring' moves something here and 'take' moves it away. In the past: brought, took.",
  },
  'dificult|difficoult|difficult|dificcult': {
    why: "The correct spelling is 'difficult': d-i-f-f-i-c-u-l-t, with a double f and one c. It means hard to do.",
    not: {
      dificult:
        "One f is missing, as in the Spanish 'difícil'. English has a double f: dif-fi-cult.",
      difficoult: 'There is an extra o. The ending is -cult: diffi-cult.',
      dificcult:
        'The double letter is in the wrong place. It is the f that doubles, not the c: dif-fi-cult.',
    },
    more: "The noun is 'difficulty', and the plural is 'difficulties'.",
  },
  'autum|autumm|autumn|autumne': {
    why: "The correct spelling is 'autumn': a-u-t-u-m-n. There is a silent n after the m. In Animal Farm, by the autumn the animals are tired but happy after a year of hard work.",
    not: {
      autum: 'The silent n is missing. You do not hear it, but it is written: autum-n.',
      autumm: 'The last letter is n, not m: autum-n.',
      autumne: "There is an extra e, as in the French 'automne'. English ends in -mn: autu-mn.",
    },
    more: "You hear the n in the adjective 'autumnal'. A silent n after m is also in 'column' and 'solemn'.",
  },
  'discribe|describ|describe|descibe': {
    why: "The correct spelling is 'describe': de + scribe, d-e-s-c-r-i-b-e. It starts with de-, not dis-, and ends in -scribe. In Animal Farm, Old Major tells the animals he cannot describe his dream to them.",
    not: {
      discribe: 'The start is wrong. It is de-, with e: de-scribe.',
      describ: 'The final e is missing. The word ends in -scribe: de-scribe.',
      descibe: 'The r is missing. The ending is -scribe: de-sc-r-ibe.',
    },
    more: "The noun is 'description', where -scribe changes to -scrip-.",
  },
  'oposite|opposit|opposite|oppossite': {
    why: "The correct spelling is 'opposite': op-po-site, o-p-p-o-s-i-t-e. It has a double p, one s, and ends in -ite.",
    not: {
      oposite: 'One p is missing. The word has a double p: op-po-site.',
      opposit: 'The final e is missing. The word ends in -ite: oppos-ite.',
      oppossite: 'This has a double s. The word has one s: oppo-site.',
    },
    more: "'Opposite' can also tell you where: 'The bank is opposite the park.'",
  },
  'temprature|temperture|temperature|tempreture': {
    why: "The correct spelling is 'temperature': tem-per-a-ture, t-e-m-p-e-r-a-t-u-r-e. Many speakers say it in three beats, but it is written in four, with -er- and -a- in the middle.",
    not: {
      temprature: 'The e after the p is missing. The word starts temper-: temper-ature.',
      temperture: 'The a in the middle is missing. After temper- comes a: temper-a-ture.',
      tempreture: 'The middle is wrong. After temp- comes -er-, then a: temp-er-a-ture.',
    },
    more: 'Other words that end in -ature: nature, signature, literature.',
  },
  'streight|straigth|straight|straght': {
    why: "The correct spelling is 'straight': s-t-r-a-i-g-h-t. The vowel sound is written ai, and a silent gh comes before the t. In Animal Farm, Snowball charges straight at Mr Jones in the Battle of the Cowshed.",
    not: {
      streight: 'The vowel is written ai, not ei: str-ai-ght.',
      straigth: 'The t and h are in the wrong order. The ending is -ght: strai-ght.',
      straght: 'The i is missing. The vowel sound is written ai: str-ai-ght.',
    },
    more: "Do not mix up 'straight' (not bent) with 'strait', a narrow stretch of sea. They sound the same.",
  },
  'laught|lauf|lauph|laugh': {
    why: "The correct spelling is 'laugh': l-a-u-g-h. The f sound at the end is written gh. In Frankenstein, Clerval begs Victor, 'Do not laugh in that manner.'",
    not: {
      laught: 'There is an extra t. The word ends in -gh: l-a-u-gh.',
      lauf: 'The f sound is written gh in this word: lau-gh.',
      lauph: 'The f sound is written gh, not ph: lau-gh.',
    },
    more: "The gh sounds like f in 'laugh', 'cough', 'tough' and 'rough'. The noun 'laughter' keeps it.",
  },
  'quater|quartre|qwarter|quarter': {
    why: "The correct spelling is 'quarter': q-u-a-r-t-e-r. It starts with qu, and there is an r after the a. A quarter is one of four parts. In A Christmas Carol, Scrooge counts the chimes: 'A quarter past.'",
    not: {
      quater:
        'The r after the a is missing. British speakers often do not say it, but it is written: quar-ter.',
      quartre: 'The ending is -tre, as in French. English ends in -ter: quar-ter.',
      qwarter: "The w is wrong. The 'kw' sound is written qu: qu-arter.",
    },
    more: "We say 'a quarter past' and 'a quarter to' for times: 3:15 is a quarter past three.",
  },
  'twelth|twelvth|twelfth|twelveth': {
    why: "The correct spelling is 'twelfth': t-w-e-l-f-t-h. The ve of 'twelve' changes to f, and -th is added. It means number 12 in order.",
    not: {
      twelth: 'The f is missing. Many speakers do not say it, but it is written: twelf-th.',
      twelvth: 'The v is wrong. Twelve changes to twelf- before -th: twelf-th.',
      twelveth: "This keeps 'twelve'. The ve changes to f: twelf-th.",
    },
    more: "'Five' changes the same way: fifth. Only a few numbers change spelling before -th.",
  },
  'nervouse|nervious|nervos|nervous': {
    why: "The correct spelling is 'nervous': n-e-r-v-o-u-s. The e of 'nerve' drops before -ous. It means a little afraid before something happens.",
    not: {
      nervouse: 'There is an extra e at the end. The ending is -ous: nerv-ous.',
      nervious: "There is an extra i, as in the Spanish 'nervioso'. English has -vous: ner-vous.",
      nervos: 'The u in the ending is missing. The ending is -ous: nerv-ous.',
    },
    more: 'Adjectives that end in -ous never add e after the s: nervous, jealous, enormous.',
  },
  'mesage|messege|massege|message': {
    why: "The correct spelling is 'message': mess + age, m-e-s-s-a-g-e. It has a double s and ends in -age, though we say it like 'messij'.",
    not: {
      mesage: 'One s is missing. The word has a double s: mes-sage.',
      messege: 'The vowel in the ending is wrong. It is -age, with a: mess-age.',
      massege: 'Both vowels are wrong. The word starts mess- and ends in -age: mess-age.',
    },
    more: "Do not mix up 'message' with 'massage', a way of rubbing the body. The first vowel changes the word.",
  },
  'gost|ghoast|goast|ghost': {
    why: "The correct spelling is 'ghost': g-h-o-s-t. There is a silent h after the g, and the vowel is a single o.",
    not: {
      gost: 'The silent h is missing. You do not hear it, but it is written: g-h-ost.',
      ghoast: 'There is an extra a. The vowel is a single o: gh-o-st.',
      goast: 'The h is missing, and there is an extra a. The word is g-h-o-s-t.',
    },
    more: 'In A Christmas Carol, Scrooge meets the ghost of his old partner, Marley, and then three spirits.',
  },
  'clim|climbe|clymb|climb': {
    why: "The correct spelling is 'climb': c-l-i-m-b. There is a silent b after the m.",
    not: {
      clim: 'The silent b is missing. You do not hear it, but it is written: clim-b.',
      climbe: 'There is an extra e. The word ends in the silent b: c-l-i-m-b.',
      clymb: 'The vowel is i, not y: cl-i-mb.',
    },
    more: 'The b stays silent when you add an ending: climbing, climber, climbed.',
  },
  'acident|accidant|accidente|accident': {
    why: "The correct spelling is 'accident': ac-ci-dent, a-c-c-i-d-e-n-t. It has a double c and ends in -ent. In Jane Eyre, Rochester is late home, and Jane wonders if an accident has happened.",
    not: {
      acident:
        "One c is missing, as in the Portuguese 'acidente'. English has a double c: ac-cident.",
      accidant: 'The ending is wrong. It is -ent, with e: accid-ent.',
      accidente: 'There is an extra e, as in Spanish and Italian. English ends in -ent: acci-dent.',
    },
    more: "The double c sounds like 'ks': ak-si-dent. 'Accent' and 'accept' work the same way.",
  },
  'appartment|apartament|apartmant|apartment': {
    why: "The correct spelling is 'apartment': a + part + ment, a-p-a-r-t-m-e-n-t. It has one p. In The Great Gatsby, Myrtle wants to buy a dog for the apartment.",
    not: {
      appartment:
        "This doubles the p, as in the French 'appartement'. English has one p: a-part-ment.",
      apartament:
        'There is an extra a before -ment, as in Spanish or Polish. English has none: apart-ment.',
      apartmant: 'The ending is wrong. It is -ment, with e: apart-ment.',
    },
    more: "In British English a home on one floor of a block is most often called a 'flat'. 'Apartment' is the American word, now common in the UK as well.",
  },
  'bycicle|bicicle|bycycle|bicycle': {
    why: "The correct spelling is 'bicycle': bi + cycle, b-i-c-y-c-l-e. It starts with bi-, meaning two, and ends with 'cycle', spelt with a y.",
    not: {
      bycicle:
        'The i and y have changed places. It is bi- at the start and -cycle at the end: bi-cy-cle.',
      bicicle:
        "The y is written as i, as in the Spanish 'bicicleta'. English has -cycle: bi-cycle.",
      bycycle: 'The start is wrong. It is bi-, with i: bi-cycle.',
    },
    more: "Bi- means two: a bicycle has two wheels. In speech, most of us say 'bike'.",
  },
  'nefew|neffew|nepew|nephew': {
    why: "The correct spelling is 'nephew': n-e-p-h-e-w. The f sound is written ph, and the word ends in -ew. Your nephew is the son of your brother or sister.",
    not: {
      nefew: 'The f sound is written ph in this word: ne-ph-ew.',
      neffew: 'The f sound is written ph, not ff: ne-ph-ew.',
      nepew: 'The h is missing. The f sound is ph: ne-ph-ew.',
    },
    more: "In A Christmas Carol, Scrooge's nephew Fred invites him to Christmas dinner.",
  },
  'passanger|pasenger|passinger|passenger': {
    why: "The correct spelling is 'passenger': pas-sen-ger, p-a-s-s-e-n-g-e-r. It has a double s and -en- in the middle. A passenger travels on a bus, train or ship but does not drive it. In The Scarlet Letter, Hester asks a ship's captain if he has another passenger.",
    not: {
      passanger: 'The vowel in the middle is wrong. It is -en-: pass-en-ger.',
      pasenger: 'One s is missing. The word has a double s: pas-sen-ger.',
      passinger: 'The vowel in the middle is wrong. It is -en-, with e: pass-en-ger.',
    },
    more: "'Messenger' has the same -enger ending.",
  },
  'plesant|pleasent|pleazant|pleasant': {
    why: "The correct spelling is 'pleasant': p-l-e-a-s-a-n-t. It comes from 'please', so it keeps the ea, and it ends in -ant. Pleasant means nice and enjoyable.",
    not: {
      plesant: "The a in the middle is missing. The word keeps the ea of 'please': pl-ea-sant.",
      pleasent: 'The ending is wrong. It is -ant, with a: pleas-ant.',
      pleazant: "The s is written as z. The word comes from 'please', with s: plea-sant.",
    },
    more: "Add un- for 'not pleasant': unpleasant.",
  },
  'receipe|recepie|resipe|recipe': {
    why: "The correct spelling is 'recipe': r-e-c-i-p-e. It has three beats, re-ci-pe, and ends in -pe. A recipe tells you how to cook something.",
    not: {
      receipe: 'There is an extra e after the c. The word is re-ci-pe.',
      recepie: 'The i and e are the wrong way round. The word ends -ipe: rec-i-pe.',
      resipe: 'The c is written as s. The word has c: re-c-ipe.',
    },
    more: "The final e is said: 'RES-i-pee'.",
  },
  'severel|sevral|severall|several': {
    why: "The correct spelling is 'several': s-e-v-e-r-a-l. It ends in -al, with one l. 'Several' means more than two but not many. In A Christmas Carol, Scrooge walks round his room several times, then sits down.",
    not: {
      severel: 'The vowel in the ending is wrong. It is -al, with a: sever-al.',
      sevral: 'The e after the v is missing. Many speakers drop it, but it is written: sev-er-al.',
      severall: 'This has a double l. The word ends in one l: sever-al.',
    },
  },
  'stomache|stomac|stomack|stomach': {
    why: "The correct spelling is 'stomach': s-t-o-m-a-c-h. The k sound at the end is written ch. In Great Expectations, Magwitch says he had to put something into his stomach.",
    not: {
      stomache: "There is an extra e. It looks like 'ache', but the word ends in -ach: stom-ach.",
      stomac: "The h is missing, as in the French 'estomac'. English ends in -ch: stom-ach.",
      stomack: 'The k sound is written ch, not ck: stom-ach.',
    },
    more: "'Stomach ache' is two words: the ache is the pain.",
  },
  'recieve|receive|receeve|receve': {
    why: "The correct spelling is 'receive'. After c, the letters are e then i: r-e-c-e-i-v-e. This follows the rhyme 'i before e, except after c'. In Hamlet, the Queen asks if Hamlet received his visitors well.",
    not: {
      recieve: 'The i and e are the wrong way round. After c, write e before i: c-e-i.',
      receeve: 'The i is written as e. After c, the letters are e and i: -ceive.',
      receve: 'The i is missing. After the second e comes i, then v: -ceive.',
    },
    more: 'Other words with ei after c: deceive, perceive and conceit.',
  },
  'acheive|achieve|acheeve|achive': {
    why: "The correct spelling is 'achieve'. The ending is -ieve, with i before e: a-c-h-i-e-v-e. In Twelfth Night, Malvolio reads a letter that says some are born great and some achieve greatness.",
    not: {
      acheive: 'The i and e are the wrong way round. After ach, write i, then e.',
      acheeve: 'The i is written as e. The word has i and e: -chieve.',
      achive: 'The e after the i is missing. The ending is -ieve, not -ive.',
    },
    more: "No c comes before the ie, so the rhyme 'i before e, except after c' holds. The noun 'achievement' keeps the e before -ment.",
  },
  'wierd|weird|weard|weired': {
    why: "The correct spelling is 'weird': w-e-i-r-d, with e before i. It means very strange. It breaks the rhyme 'i before e except after c', so learn it on its own.",
    not: {
      wierd: "The i and e are the wrong way round. In 'weird' the e comes first: w-e-i-r-d.",
      weard:
        'The i is missing, and there is an a in its place. The word has e and i together: w-e-i-r-d.',
      weired: 'There is an extra e before the d. The word ends in -ird: w-e-i-r-d.',
    },
    more: 'A few common words break the rhyme in the same way: seize, either, neither and protein.',
    tip: "Think of 'we' at the start: we + ird. We think it is strange.",
  },
  'foriegn|forein|foreign|forreign': {
    why: "The correct spelling is 'foreign'. The letters are f-o-r-e-i-g-n, with e before i and a g before the n. Foreign means from another nation. Example: 'He sounds foreign. Is he from Spain?'",
    not: {
      foriegn:
        "The e and i are the wrong way round. In 'foreign' the e comes first: f-o-r-e-i-g-n.",
      forein: 'The g is missing. The word ends in -eign, with g before n.',
      forreign: "This has a double r. 'Foreign' has only one r.",
    },
    more: "The rhyme 'i before e' does not work here. Foreign is an exception, like 'seize'. The g is silent, but you must write it.",
  },
  'lenght|length|lengh|lenth': {
    why: "The correct spelling is 'length'. It is the noun for 'long', and it keeps the n and g: l-e-n-g-t-h. Example: 'Measure the length of the table.'",
    not: {
      lenght: 'The t and h are the wrong way round. The word ends in -th.',
      lengh: 'The t is missing. The ending is -gth, with t before h.',
      lenth: 'The g is missing. After n, write g: len-g-th.',
    },
    more: "'Long' becomes 'length': the vowel changes, but the ng stays. Width and depth are made in the same way: wide, width; deep, depth.",
  },
  'seperate|separate|seperete|saparate': {
    why: "The correct spelling is 'separate'. The letters are s-e-p-a-r-a-t-e, with a after the p and a before the t. Example: 'Keep the red pens separate.'",
    not: {
      seperate: 'The a after p is written as e. It should be sep-a-rate, with a.',
      seperete: 'Two letters are wrong. Both e letters in the middle should be a: sep-a-r-a-te.',
      saparate: 'The first vowel is wrong. The word starts s-e-p, with e, not a.',
    },
    more: "The same spelling is used for the verb ('separate the eggs') and the adjective ('separate rooms').",
  },
  'neccessary|necesary|necessary|neccesary': {
    why: "The correct spelling is 'necessary'. It has one c and a double s: n-e-c-e-s-s-a-r-y. In Great Expectations, Pip tells the convict who has come to thank him that it was not necessary.",
    not: {
      neccessary: 'This has a double c. The word has only one c, near the start: n-e-c.',
      necesary: 'An s is missing. The word has a double s in the middle: -ess-.',
      neccesary: 'The double letters are in the wrong place. Write one c and a double s.',
    },
    more: "Put un- in front for 'not needed': unnecessary, with a double n: u-n-n-e-c-e-s-s-a-r-y.",
  },
  'enviroment|environment|enviornment|environement': {
    why: "The correct spelling is 'environment': environ + ment. There is an n before the m that many speakers do not say: e-n-v-i-r-o-n-m-e-n-t. It means the natural world around us: air, water, land, plants and animals.",
    not: {
      enviroment:
        'The n before -ment is missing. Many speakers drop it, but the word is environ + ment.',
      enviornment: 'The o and r are the wrong way round. The middle is -iron-: env-i-r-o-n-ment.',
      environement:
        "There is an extra e before -ment, as in the French 'environnement'. English has none: environ + ment.",
    },
    more: 'The adjective adds -al: environmental. Keep the n in both words.',
    tip: "Find the word 'iron' inside it: env + iron + ment.",
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
  'arguement|argument|argumant|agrument': {
    why: "The correct spelling is 'argument': a-r-g-u-m-e-n-t. The verb is 'argue', but its last e is dropped before -ment. An argument is an angry talk between two sides that do not agree.",
    not: {
      arguement: "This keeps the e from 'argue'. The e is dropped before -ment: argu + ment.",
      argumant: "The ending is wrong. It is -ment, with e, as in 'payment' and 'movement'.",
      agrument: "The r and g are in the wrong order. The word starts a-r-g, like 'argue'.",
    },
    more: "Most words keep a final e before -ment: move becomes movement, and amaze becomes amazement. 'Argue' is an exception: it drops the e.",
    tip: "In an essay, 'argument' can also mean a reason you give: 'My first argument is that ...'.",
  },
  'embarass|embarrass|embaras|embarras': {
    why: "The correct spelling is 'embarrass'. It has a double r and a double s: e-m-b-a-r-r-a-s-s. To embarrass someone is to make them feel shy or silly in front of others.",
    not: {
      embarass: 'One r is missing. The word has a double r in the middle: -arr-.',
      embaras: 'One r and one s are missing. The word has a double r and a double s.',
      embarras: 'One s is missing. The word ends in a double s: -ss.',
    },
    more: "The adjective 'embarrassed' and the noun 'embarrassment' keep both double letters.",
  },
  'occassion|occasion|ocasion|ocassion': {
    why: "The correct spelling is 'occasion'. It has a double c and one s: o-c-c-a-s-i-o-n. An occasion is a special event, or a time when something happens. Example: 'We eat cake on a special occasion.'",
    not: {
      occassion: "This has a double s. 'Occasion' has only one s.",
      ocasion:
        "One c is missing, as in the Spanish 'ocasión'. The word starts with a double c: o-c-c-a.",
      ocassion: 'This has one c and a double s. The word has a double c and one s.',
    },
    more: "The adverb 'occasionally' starts the same way: occasion + ally.",
  },
  'posession|possesion|possession|posesion': {
    why: "The correct spelling is 'possession'. It has four s letters in two pairs: p-o-s-s-e-s-s-i-o-n. Example: 'Keep your phone in your possession.'",
    not: {
      posession: 'The first pair of s letters has only one s. After po, write two s letters.',
      possesion: 'The second pair of s letters has only one s. After the e, write two s letters.',
      posesion: 'Both pairs have only one s. Each pair needs two: po-ss-e-ss-ion.',
    },
    more: "A possession is something that you own. The verb 'possess' also has four s letters.",
  },
  'decison|desicion|decision|decition': {
    why: "The correct spelling is 'decision': d-e-c-i-s-i-o-n. It is the noun from 'decide', and it ends in -sion, with an i before it. A decision is a choice you make.",
    not: {
      decison: 'An i is missing. The word ends in -ision: d-e-c-i-s-i-o-n.',
      desicion:
        "The c and s have changed places. The word starts dec-, like 'decide', and ends in -sion.",
      decition:
        'The ending is -sion, with s, not -tion. Verbs that end in -de make nouns in -sion: decide, decision.',
    },
    more: 'Other verbs ending in -de do the same: divide becomes division, explode becomes explosion, and include becomes inclusion.',
  },
  'definate|definit|definite|definete': {
    why: "The correct spelling is 'definite'. The ending is -ite, with i: d-e-f-i-n-i-t-e. It means clear and certain. In The Sign of Four, Holmes says he expected something definite by this time.",
    not: {
      definate: 'The a is wrong. The ending is -ite, with i, not -ate.',
      definit: 'The final e is missing. The word ends in -ite.',
      definete: 'The ending is wrong. It is -ite, with i, not -ete.',
    },
    more: "Add -ly to make 'definitely' and keep the e. Add in- for 'not fixed': indefinite.",
  },
  'truely|truly|trooly|truley': {
    why: "The correct spelling is 'truly'. The word 'true' loses its e before -ly: t-r-u-l-y. Example: 'I am truly sorry.'",
    not: {
      truely: "This keeps the e from 'true'. Drop it: tru + ly.",
      trooly: 'This is spelt as it sounds. The spelling uses u, not oo.',
      truley: "There is an extra e. 'Truly' has no e at all.",
    },
    more: "'True' is one of a few words that drop the e before -ly. Most keep it: sure becomes surely, and nice becomes nicely.",
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
    why: "The correct spelling is 'accommodation'. It has a double c and a double m: a-c-c-o-m-m-o-d-a-t-i-o-n. It means a place to stay. Example: 'The hotel has accommodation for sixty guests.'",
    not: {
      accomodation: 'One m is missing. The word has a double m after the o: -ommo-.',
      acommodation: 'One c is missing. The word starts with a double c: a-c-c.',
      accomadation: 'The middle is wrong. It needs a double m and then o: -mmod-.',
    },
    more: "The verb 'accommodate' has the same double c and double m.",
  },
  'oppertunity|opportunity|oportunity|oppurtunity': {
    why: "The correct spelling is 'opportunity': op-por-tu-ni-ty, with a double p and -or- after it. It means a chance to do something. In Pride and Prejudice, Lady Catherine supposes that Elizabeth had no opportunity to learn to draw.",
    not: {
      oppertunity: 'The vowel after the double p is wrong. It is o, not e: opp-or-tunity.',
      oportunity:
        "One p is missing, as in the Spanish 'oportunidad'. English has a double p: o-p-p.",
      oppurtunity: 'The vowel after the double p is wrong. It is o, not u: opp-or-tunity.',
    },
    more: 'The plural changes y to i and adds -es: opportunities.',
    tip: "Find the word 'port' inside it: op + port + unity. A ship waits in port for its chance.",
  },
  'existance|existence|exsistence|existense': {
    why: "The correct spelling is 'existence'. The ending is -ence, with e: e-x-i-s-t-e-n-c-e. In Great Expectations, Pip tells Estella that she is part of his existence, part of himself.",
    not: {
      existance: 'The ending is wrong. It is -ence, not -ance.',
      exsistence: 'There is an extra s after the x. The word starts e-x-i-s-t.',
      existense: 'The ending is wrong. It is -ence, with c, not -ense.',
    },
    more: "The verb is 'exist'. Other words that end in -ence: silence, patience, absence.",
  },
  'independant|independent|independend|indipendent': {
    why: "The correct spelling is 'independent': in-de-pen-dent. It ends in -ent, with e, and all its vowels after the first are e. In Jane Eyre, Jane tells Rochester she is an independent woman now: she has money of her own.",
    not: {
      independant: 'The ending is wrong. It is -ent, not -ant: independ-ent.',
      independend: 'The last letter is wrong. The word ends in t, not d: independen-t.',
      indipendent:
        'The vowel after the d is wrong. It is e: in-de-pen-dent. The Italian word has an i here, but English does not.',
    },
    more: 'The noun ends in -ence: independence. Both words keep e all the way through.',
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
    why: "The correct spelling is 'adventurous'. It is 'adventure' without the final e, plus -ous: a-d-v-e-n-t-u-r-o-u-s. Example: 'She is adventurous and loves trying new things.'",
    not: {
      adventrous: "The u is missing. Keep the ur from 'adventure': adventur-ous.",
      adventerous: 'The u is written as e. The word has -tur-: advent-ur-ous.',
      adventourous: 'There is an extra o before the u. The only o is in the ending -ous.',
    },
    more: "'Adventure' drops its final e before -ous: adventur + ous.",
  },
  'conscius|concious|conscious|consious': {
    why: "The correct spelling is 'conscious': con-scious, with sc in the middle and -ious at the end. Conscious means awake, and able to see and hear what is around you.",
    not: {
      conscius: 'The o in the ending is missing. The word ends in -ious: con-sc-i-o-u-s.',
      concious: 'The s is missing. The middle has s and c together: con-sc-ious.',
      consious: 'The c is missing. The middle has s and c together: con-sc-ious.',
    },
    more: "Add un- for 'not awake': unconscious. The noun is consciousness. Both keep the sc.",
  },
  'goverment|government|governement|governmant': {
    why: "The correct spelling is 'government': govern + ment. Many speakers do not say the n, but it stays in the spelling: g-o-v-e-r-n-m-e-n-t. The government makes the laws and runs the nation.",
    not: {
      goverment: "The n before -ment is missing. The word is the verb 'govern' plus -ment.",
      governement:
        "There is an extra e before -ment, as in the French 'gouvernement'. English has none: govern + ment.",
      governmant: 'The ending is wrong. It is -ment, with e, not -mant.',
    },
    more: 'Many nouns are made by adding -ment to a verb: agree, agreement; pay, payment; move, movement.',
    tip: 'Say the hidden n to yourself as you write: gov-ern-ment.',
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
    why: "The correct spelling is 'successful'. It is 'success' plus -ful, and the ending has only one l: s-u-c-c-e-s-s-f-u-l. In Animal Farm, the farm has a fairly successful year but is still short of money.",
    not: {
      succesful: "An s is missing. 'Success' ends in a double s: suc-cess.",
      sucessful: "A c is missing. 'Success' has a double c: suc-cess.",
      successfull: 'This has two l letters at the end. The ending -ful has only one l.',
    },
    more: "'Success' keeps both double letters when -ful is added, and so does 'unsuccessful'.",
  },
  'immediatly|immediately|imediately|immediatley': {
    why: "The correct spelling is 'immediately'. It has a double m at the start and keeps the e before -ly: i-m-m-e-d-i-a-t-e-l-y. Example: 'Come here immediately.'",
    not: {
      immediatly: "The e before -ly is missing. 'Immediate' keeps its e: immediate + ly.",
      imediately: 'One m is missing. The word starts with a double m: i-m-m.',
      immediatley: 'The l and e are the wrong way round. The ending is -ely.',
    },
    more: "'Immediately' means at once, with no wait. It comes from the adjective 'immediate'.",
  },
  'Parlament|Parliment|Parliament|Parlaiment': {
    why: "The correct spelling is 'Parliament': P-a-r-l-i-a-m-e-n-t, with i and a together after the l. The UK Parliament makes the laws. In A Christmas Carol, Scrooge tells Fred he speaks so well he should go into Parliament.",
    not: {
      Parlament:
        'The i is missing. This is the German and Polish spelling. English has i and a after the l: Parl-ia-ment.',
      Parliment: 'The a is missing. After the l come i and a: Parl-i-a-ment.',
      Parlaiment:
        'The a and i are the wrong way round. After the l, write i first, then a: Parl-i-a-ment.',
    },
    more: "The word comes from the French 'parler', to speak. It has a capital P when it names the UK Parliament.",
  },
  'pronounciation|pronunciation|prononciation|pronunciacion': {
    why: "The correct spelling is 'pronunciation': pro-nun-ci-a-tion. The verb is 'pronounce', with -ou-, but the noun drops the o: -nun-. Pronunciation is the way you say words.",
    not: {
      pronounciation: "This keeps the ou from 'pronounce'. The noun has only u: pro-nun-ciation.",
      prononciation:
        'This is the French spelling, with o. English has u in the middle: pro-nun-ciation.',
      pronunciacion:
        'This is the Spanish spelling, with c near the end. English ends in -tion: pronuncia-tion.',
    },
    more: "The verb and the noun are not said alike either: 'pro-NOUNCE' but 'pro-NUN-see-ay-shun'.",
  },
  'recomend|reccommend|recommend|reccomend': {
    why: "The correct spelling is 'recommend'. It has one c and a double m: r-e-c-o-m-m-e-n-d. To recommend something is to tell others it is good. Example: 'Can you recommend a good book?'",
    not: {
      recomend: 'One m is missing. The word has a double m: reco-mm-end.',
      reccommend: "This has a double c. 'Recommend' has only one c.",
      reccomend: 'This has a double c and one m. The word has one c and two m letters.',
    },
    more: "'Recommend' is 're' plus 'commend'. To commend is to praise, and you recommend what you praise.",
  },
  'responsable|responsible|resposible|responseble': {
    why: "The correct spelling is 'responsible': re-spon-si-ble. It ends in -ible, with i, and keeps the n after the first o. Responsible means in charge of something, or to blame for it.",
    not: {
      responsable:
        'This is the French and Spanish spelling, with -able. English ends in -ible: respons-ible.',
      resposible: 'The n is missing. The word starts re-spon-, with n after the o.',
      responseble: 'The vowel before -ble is wrong. It is i: respons-i-ble.',
    },
    more: "The noun is 'responsibility'. There is no simple rule for -ible and -able, so learn each word.",
  },
  'especialy|expecially|especially|especally': {
    why: "The correct spelling is 'especially': e + special + ly, e-s-p-e-c-i-a-l-l-y. The word 'special' is inside it, and -ly adds a second l.",
    not: {
      especialy: "One l is missing. 'Special' ends in l, and -ly adds another: especial-ly.",
      expecially: 'The s is written as x. The word starts es-, with s: es-pecially.',
      especally: "The i after the c is missing. The middle is 'special': e-spec-i-al-ly.",
    },
    more: "Learners often write 'ex' at the start, as in 'expect'. Think of 'special' and add e- and -ly.",
  },
  'unfortunatly|unfortunetly|unfortunately|unfortunatelly': {
    why: "The correct spelling is 'unfortunately': un + fortunate + ly. The e of 'fortunate' stays before -ly, and there is one l: u-n-f-o-r-t-u-n-a-t-e-l-y.",
    not: {
      unfortunatly: "The e before -ly is missing. 'Fortunate' keeps its e: fortunate-ly.",
      unfortunetly:
        'The vowel before the t is wrong, and the e is missing. The word is fortun-ate-ly.',
      unfortunatelly: 'This has a double l. The ending -ly has one l: fortunate-ly.',
    },
    more: 'Most words that end in a silent e keep it before -ly: lovely, lately, safely, fortunately.',
  },
  'completly|compleetly|completely|completelly': {
    why: "The correct spelling is 'completely': complete + ly, c-o-m-p-l-e-t-e-l-y. The e of 'complete' stays before -ly. In Pride and Prejudice, Elizabeth expects a letter from Charlotte, none comes, and she is completely puzzled.",
    not: {
      completly: "The e before -ly is missing. 'Complete' keeps its e: complete-ly.",
      compleetly:
        "The vowel sound is written ee, as in the Dutch 'compleet'. English writes e, then t, then e: compl-e-te-ly.",
      completelly: 'This has a double l. The ending -ly has one l: complete-ly.',
    },
    more: "'Completely' means totally, in all ways.",
  },
  'availible|avaliable|available|avalible': {
    why: "The correct spelling is 'available': a-v-a-i-l-a-b-l-e. It has 'avail' at the start and ends in -able. Available means free to use or to buy.",
    not: {
      availible: 'The ending is wrong. It is -able, with a: avail-able.',
      avaliable: "The i and l are in the wrong order. The word starts 'avail': a-v-a-i-l.",
      avalible: "The i of 'avail' is missing, and the ending is wrong. The word is avail + able.",
    },
    more: "The noun is 'availability', with -ability.",
  },
  'dissapointed|disapointed|disappointed|dissappointed': {
    why: "The correct spelling is 'disappointed': dis + appoint + ed. 'Dis-' has one s, and 'appoint' has a double p. In Jane Eyre, Jane says cheerfully to Bessie, 'I am afraid you are disappointed in me.'",
    not: {
      dissapointed:
        "This doubles the s and has one p. 'Dis-' has one s, and 'appoint' has a double p.",
      disapointed: "One p is missing. 'Appoint' has a double p: dis-ap-pointed.",
      dissappointed: "This doubles the s. 'Dis-' has only one s: dis-appointed.",
    },
    more: 'You feel disappointed when something is not as good as you hoped.',
  },
  'prefered|preffered|preferred|preferd': {
    why: "The correct spelling is 'preferred': p-r-e-f-e-r-r-e-d. The stress is on the end, pre-FER, so the r doubles before -ed.",
    not: {
      prefered: 'The r is not doubled. The stress is on -fer, so the r doubles: prefer-red.',
      preffered: 'The f is doubled. Only the r doubles: pre-fer-red.',
      preferd: 'The e of -ed is missing. Double the r and add -ed: prefer-red.',
    },
    more: "Compare 'offered', with the stress on the first part, OF-fer, so no double r. 'Referred' doubles its r like 'preferred'.",
  },
  'occured|ocurred|occurred|ocured': {
    why: "The correct spelling is 'occurred': o-c-c-u-r-r-e-d. It has a double c, and the r doubles before -ed, as the stress is on -CUR. 'Occur' means to happen.",
    not: {
      occured: 'The r is not doubled. The stress is on -cur, so the r doubles: occur-red.',
      ocurred: 'One c is missing. The word starts with a double c: oc-curred.',
      ocured: 'One c and one r are missing. The word has two of each: oc-cur-red.',
    },
    more: 'The noun keeps the double r: occurrence.',
  },
  'reciept|receit|receipt|recipt': {
    why: "The correct spelling is 'receipt': r-e-c-e-i-p-t. After c comes e, then i, and there is a silent p before the t. A receipt is the paper a shop gives you to show what you paid.",
    not: {
      reciept: 'The i and e are the wrong way round. After c, write e first, then i: rec-ei-pt.',
      receit: 'The silent p is missing. You do not hear it, but it is written: recei-p-t.',
      recipt: 'The e after the c is missing. The middle is -cei-: rec-e-i-pt.',
    },
    more: "The silent p comes from the Latin 'recepta', meaning received.",
  },
  'experiance|expirience|experience|experence': {
    why: "The correct spelling is 'experience': ex-pe-ri-ence, e-x-p-e-r-i-e-n-c-e. The middle has -per-, and it ends in -ence. In Great Expectations, Estella asks Pip about Mr Jaggers: 'What is your own experience of him?'",
    not: {
      experiance: 'The ending is wrong. It is -ence, with e: experi-ence.',
      expirience: 'The vowel after exp- is wrong. It is e: ex-per-ience.',
      experence: 'The i before -ence is missing: exper-i-ence.',
    },
    more: "As a noun, experience is what you have learnt by doing: 'She has experience of teaching.' As a verb, it means to feel or go through something.",
  },
  'equiptment|equipement|equipment|equipmant': {
    why: "The correct spelling is 'equipment': equip + ment, e-q-u-i-p-m-e-n-t. Add -ment to 'equip', with no extra letters. Equipment means the tools or machines you need for a job or a sport.",
    not: {
      equiptment: "There is an extra t. The word is 'equip' plus -ment: equip-ment.",
      equipement:
        "There is an extra e, as in the French 'équipement'. English has none: equip-ment.",
      equipmant: 'The ending is wrong. It is -ment, with e: equip-ment.',
    },
    more: "'Equipment' has no plural: say 'some equipment', not 'equipments'.",
  },
  'advertisment|advertisemant|advertisement|adverticement': {
    why: "The correct spelling is 'advertisement': advertise + ment. The e of 'advertise' stays before -ment. In Jane Eyre, Jane tells Rochester that Mrs Fairfax answered her advertisement for a post as a governess.",
    not: {
      advertisment: "The e of 'advertise' is missing. It stays before -ment: advertise-ment.",
      advertisemant: 'The ending is wrong. It is -ment, with e: advertise-ment.',
      adverticement: "The s is written as c. The word is 'advertise', with s: advertis-ement.",
    },
    more: "In everyday British English, the short forms are 'advert' and 'ad'.",
  },
  'appearence|apperance|appearance|apearance': {
    why: "The correct spelling is 'appearance': appear + ance. The whole word 'appear' stays, with its double p and ea, and the ending is -ance. In Frankenstein, Justine looks calm at her trial: 'The appearance of Justine was calm.'",
    not: {
      appearence: 'The ending is wrong. It is -ance, with a: appear-ance.',
      apperance: "The a of 'appear' is missing. Keep the whole word: appear-ance.",
      apearance: "One p is missing. 'Appear' has a double p: ap-pear-ance.",
    },
    more: "'Appearance' also means arriving or being seen: 'her first appearance on stage'.",
  },
  'apparantly|aparently|apparently|apparrently': {
    why: "The correct spelling is 'apparently': a-p-p-a-r-e-n-t-l-y. It has a double p, one r, and -ent before -ly. In The Great Gatsby, a dog lead found in Wilson's house is apparently new.",
    not: {
      apparantly: 'The vowel in the ending is wrong. It is -ent: appar-ent-ly.',
      aparently: 'One p is missing. The word starts with a double p: ap-par-ently.',
      apparrently: 'This has a double r. The word has one r: appa-rent-ly.',
    },
    more: "'Apparently' means 'it seems', or 'so I am told'.",
  },
  'collegue|colleage|coleague|colleague': {
    why: "The correct spelling is 'colleague': col + league, c-o-l-l-e-a-g-u-e. It has a double l and ends like 'league': -eague. A colleague is someone you work with.",
    not: {
      collegue: "The a is missing. The ending is -eague, like 'league': col-league.",
      colleage: 'The u is missing, and the ending is wrong. It is -eague: col-league.',
      coleague: 'One l is missing. The word has a double l: col-league.',
    },
    more: "The silent u after g also ends 'league', 'vague' and 'plague'.",
  },
  'convinient|conveniant|convenient|convenent': {
    why: "The correct spelling is 'convenient': con-ve-ni-ent, c-o-n-v-e-n-i-e-n-t. It has e after the v and ends in -ient. In A Christmas Carol, Bob Cratchit asks for Christmas Day off, 'If quite convenient, sir.'",
    not: {
      convinient: 'The vowel after conv- is wrong. It is e: con-ven-ient.',
      conveniant: 'The ending is wrong. It is -ent, with e: conveni-ent.',
      convenent: 'The i before -ent is missing: conven-i-ent.',
    },
    more: "The noun is 'convenience', ending in -ence.",
  },
  'developement|developmant|development|devlopment': {
    why: "The correct spelling is 'development': develop + ment, d-e-v-e-l-o-p-m-e-n-t. Add -ment to 'develop', with no e between them.",
    not: {
      developement:
        "There is an extra e after the p, as in the French 'développement'. English has none: develop-ment.",
      developmant: 'The ending is wrong. It is -ment, with e: develop-ment.',
      devlopment: 'The e after the v is missing. The word is de-vel-op-ment.',
    },
    more: "'Develop' ends in p, with no e, so nothing changes when -ment is added.",
  },
  'familar|familliar|familier|familiar': {
    why: "The correct spelling is 'familiar': f-a-m-i-l-i-a-r. It has i before the ending -ar. Familiar means known to you, as if you have met it before.",
    not: {
      familar: 'The i before -ar is missing: famil-i-ar.',
      familliar: 'This has a double l. The word has one l: fa-mil-iar.',
      familier: "The ending is -ier, as in the French 'familier'. English ends in -iar: famil-iar.",
    },
    more: "It comes from the same root as 'family': something familiar feels like part of the family.",
  },
  'gaurd|gard|guarde|guard': {
    why: "The correct spelling is 'guard': g-u-a-r-d. There is a silent u after the g, then -ard.",
    not: {
      gaurd: 'The u and a are the wrong way round. After the g, write u first, then a: g-u-ard.',
      gard: 'The silent u is missing. You do not hear it, but it is written: g-u-ard.',
      guarde: 'There is an extra e at the end. The word ends in -ard: gu-ard.',
    },
    more: "The silent u came from French. You find the same gu in 'guess', 'guide' and 'guest'.",
  },
  'humourous|humerous|humoros|humorous': {
    why: "The correct spelling is 'humorous': h-u-m-o-r-o-u-s. British English writes 'humour', with -our, but the adjective drops that u before -ous: hu-mo-rous.",
    not: {
      humourous: "This keeps the u of 'humour'. The adjective drops it before -ous: hu-mo-rous.",
      humerous: "The vowel after hum- is wrong. It is o, as in 'humour': hu-mo-rous.",
      humoros: 'The u in the ending is missing. The ending is -ous: hu-mo-rous.',
    },
    more: "'Glamour' does the same: glamorous. 'Vigour' becomes 'vigorous'.",
  },
  'jewelery|jewlery|jewellry|jewellery': {
    why: "The correct British spelling is 'jewellery': j-e-w-e-l-l-e-r-y. It is 'jewel' with a double l, then -ery.",
    not: {
      jewelery: 'One l is missing. British English doubles the l: jewel-lery.',
      jewlery:
        'The e after the w is missing, and so is an l. The word is jewel + lery: j-e-w-e-l-l-ery.',
      jewellry: 'The e before the r is missing. The ending is -ery: jewell-ery.',
    },
    more: 'American English has a shorter form, with one l and no second e. In the UK, write jewellery.',
  },
  'medecine|medicin|medicene|medicine': {
    why: "The correct spelling is 'medicine': m-e-d-i-c-i-n-e. It has i after med-, then -cine. In The Scarlet Letter, the sick young minister says he needs no medicine.",
    not: {
      medecine:
        "The vowel after med- is wrong, as in the French 'médecine'. English has i: med-i-cine.",
      medicin: 'The final e is missing, as in Swedish. English ends in -ine: medic-ine.',
      medicene: 'The vowel before the n is wrong. It is i: medic-i-ne.',
    },
    more: "'Medical' and 'medicine' both have i after med-.",
  },
  'particulary|particullary|particularily|particularly': {
    why: "The correct spelling is 'particularly': particular + ly, p-a-r-t-i-c-u-l-a-r-l-y. Add -ly to 'particular' and keep all its letters, so there is an r before the l.",
    not: {
      particulary: "The l of -ly is missing. The word is 'particular' plus -ly: particular-ly.",
      particullary: 'This doubles the l and drops the r before -ly. The word is particular + ly.',
      particularily: "There is an extra i. Just add -ly to 'particular': particular-ly.",
    },
    more: "Many speakers say 'partic-ly', but write all of 'particular' before -ly.",
  },
  'pursuade|persuede|perswade|persuade': {
    why: "The correct spelling is 'persuade': per + suade, p-e-r-s-u-a-d-e. It starts with per-, and the 'sw' sound is written su. In Pride and Prejudice, Mrs Bennet tells Mr Bennet, 'But I knew I should persuade you at last.'",
    not: {
      pursuade: 'The start is wrong. It is per-, with e: per-suade.',
      persuede: 'The vowel after su- is wrong. It is a: persu-ade.',
      perswade: "The w is wrong. The 'sw' sound is written su: per-su-ade.",
    },
    more: "The noun is 'persuasion', with s in place of the d. Persuasion is also the title of a novel by Jane Austen.",
  },
  'phisical|fisical|physicall|physical': {
    why: "The correct spelling is 'physical': p-h-y-s-i-c-a-l. The f sound is written ph, the first i sound is written y, and it ends in -al with one l. Physical means to do with the body.",
    not: {
      phisical: 'The first vowel is written y, not i: ph-y-sical.',
      fisical: 'The f sound is written ph, and the vowel is y: ph-y-sical.',
      physicall: 'This has a double l. The ending -al has one l: physic-al.',
    },
    more: "'Physics', 'physical' and 'physician' all start with ph and y.",
  },
  'proffesional|profesional|proffessional|professional': {
    why: "The correct spelling is 'professional': pro-fes-sion-al, p-r-o-f-e-s-s-i-o-n-a-l. It has one f and a double s. A professional does a job for money, and does it well.",
    not: {
      proffesional:
        'This doubles the f and has one s. The word has one f and a double s: pro-fes-sional.',
      profesional: 'One s is missing, as in Spanish. English has a double s: pro-fes-sional.',
      proffessional: 'This doubles the f. The word has only one f: pro-fessional.',
    },
    more: "'Profession' and 'professor' have the same one f and double s.",
  },
  'questionaire|questionnair|questionnarie|questionnaire': {
    why: "The correct spelling is 'questionnaire': q-u-e-s-t-i-o-n-n-a-i-r-e. It has a double n and ends in -aire, as it comes from French. A questionnaire is a list of questions to answer.",
    not: {
      questionaire: 'One n is missing. The word has a double n: question-naire.',
      questionnair: 'The final e is missing. The ending is -aire: question-naire.',
      questionnarie: 'The i and r are in the wrong order. The ending is -aire: question-n-a-i-r-e.',
    },
    more: 'Other words from French end in -aire, such as millionaire, but they have one n.',
  },
  'relevent|relavant|revelant|relevant': {
    why: "The correct spelling is 'relevant': r-e-l-e-v-a-n-t. The l comes before the v, and the word ends in -ant. Relevant means connected to what you are talking about.",
    not: {
      relevent: 'The ending is wrong. It is -ant, with a: relev-ant.',
      relavant: 'The vowel after rel- is wrong. It is e: rel-e-vant.',
      revelant: 'The l and v have changed places. The word starts rel-: re-le-vant.',
    },
    more: "Add ir- for 'not relevant': irrelevant, with a double r.",
    tip: 'In an exam answer, check that each point is relevant to the question asked.',
  },
  'religous|religius|relegious|religious': {
    why: "The correct spelling is 'religious': re-li-gious, r-e-l-i-g-i-o-u-s. It keeps the i of 'religion' before -ous.",
    not: {
      religous: "The i before -ous is missing. The word keeps the i of 'religion': religi-ous.",
      religius: 'The o in the ending is missing. The ending is -ious: relig-i-o-us.',
      relegious: "The vowel after rel- is wrong. It is i, as in 'religion': rel-i-gious.",
    },
    more: "The noun is 'religion'. Both have i after rel- and after the g.",
  },
  'schedual|shedule|schedul|schedule': {
    why: "The correct spelling is 'schedule': s-c-h-e-d-u-l-e. It starts with sch and ends in -ule. British speakers often say 'shed-yool', but the c is written.",
    not: {
      schedual: 'The ending is wrong. It is -ule, with no a: sched-ule.',
      shedule: 'The c is missing. The word starts s-c-h: sch-edule.',
      schedul: 'The final e is missing. The ending is -ule: sched-ule.',
    },
    more: "Both 'shed-yool' (British) and 'sked-jool' (American) are heard, but the spelling is the same.",
  },
  'secretery|secratary|secetary|secretary': {
    why: "The correct spelling is 'secretary': secret + ary, s-e-c-r-e-t-a-r-y. It begins with the word 'secret' and ends in -ary.",
    not: {
      secretery: 'The ending is wrong. It is -ary, with a: secret-ary.',
      secratary: "The vowel after secr- is wrong. It is e, as in 'secret': secr-e-tary.",
      secetary: "The first r is missing. The word starts with 'secret': secr-etary.",
    },
    more: "The name comes from 'secret': a secretary once looked after private letters.",
  },
  'sincerly|sincerelly|sinserely|sincerely': {
    why: "The correct spelling is 'sincerely': sincere + ly, s-i-n-c-e-r-e-l-y. The e of 'sincere' stays before -ly. In Jane Eyre, Jane asks Rochester, 'Do you sincerely wish me to be your wife?'",
    not: {
      sincerly: "The e before -ly is missing. 'Sincere' keeps its e: sincere-ly.",
      sincerelly: 'This has a double l. The ending -ly has one l: sincere-ly.',
      sinserely: "The c is written as s. The word is 'sincere', with c: sin-cere-ly.",
    },
    more: 'Sincerely means in a way that is real and meant.',
    tip: "End a formal letter to a named person with 'Yours sincerely'.",
  },
  'strenght|strenth|strengh|strength': {
    why: "The correct spelling is 'strength': s-t-r-e-n-g-t-h. It is the noun from 'strong', and it keeps the ng before -th. In Frankenstein, after weeks of fever in an Irish prison, Victor is so weak that his strength is gone.",
    not: {
      strenght: 'The t and h are in the wrong order. The word ends in -th: streng-th.',
      strenth: 'The g is missing. After n comes g: stren-g-th.',
      strengh: 'The t is missing. The ending is -gth: streng-t-h.',
    },
    more: 'Strong becomes strength: the vowel changes, but the ng stays.',
  },
  'suceed|succede|sucseed|succeed': {
    why: "The correct spelling is 'succeed': s-u-c-c-e-e-d. It has a double c and a double e: succ-eed. In Frankenstein, Felix gives himself up to free his father and sister, but he did not succeed.",
    not: {
      suceed: 'One c is missing. The word has a double c: suc-ceed.',
      succede: 'The ending is wrong. It is -ceed, with a double e: suc-ceed.',
      sucseed: 'The c is written as s. The word has a double c: suc-ceed.',
    },
    more: 'Only three common words end in -ceed: succeed, proceed and exceed. Others end in -cede: precede, recede.',
  },
  'tounge|tonge|toung|tongue': {
    why: "The correct spelling is 'tongue': t-o-n-g-u-e. It starts like 'tong' and ends with a silent ue.",
    not: {
      tounge: 'The u is in the wrong place. It comes after the g: t-o-n-g-u-e.',
      tonge: 'The u is missing. The ending is -gue: ton-gue.',
      toung: 'The u is in the wrong place, and the final e is missing. The word ends in -gue.',
    },
    more: "Your 'mother tongue' is the one you spoke first, as a small child.",
  },
  'vehical|vehicule|vechicle|vehicle': {
    why: "The correct spelling is 'vehicle': v-e-h-i-c-l-e. There is a silent h after ve-, and the word ends in -cle. A vehicle is a car, bus, lorry or anything on wheels that carries a load.",
    not: {
      vehical: 'The ending is wrong. It is -cle, not -cal: vehi-cle.',
      vehicule: "There is an extra u, as in the French 'véhicule'. English ends in -cle: vehi-cle.",
      vechicle: 'There is an extra c before the h. The word starts v-e-h: ve-hi-cle.',
    },
    more: "The h is silent in British speech: 'VEE-i-kul'.",
  },
  'behavour|behaviur|behavoir|behaviour': {
    why: "The correct British spelling is 'behaviour': b-e-h-a-v-i-o-u-r. It comes from 'behave' and ends in -iour. In Animal Farm, the cat's behaviour is odd: she can never be found when there is work to do.",
    not: {
      behavour: 'The i is missing. The ending is -iour: behav-i-our.',
      behaviur: 'The o is missing. The ending is -iour: behav-i-o-ur.',
      behavoir: 'The ending is wrong. It is -iour, not -oir: behav-iour.',
    },
    more: 'American English leaves out the u. In the UK, write the -our form.',
  },
  'benifit|benefitt|bennefit|benefit': {
    why: "The correct spelling is 'benefit': bene + fit, b-e-n-e-f-i-t. The middle vowel is e: ben-e-fit. In Animal Farm, Snowball reads the Seven Commandments aloud for the benefit of the other animals.",
    not: {
      benifit: 'The vowel after ben- is wrong. It is e: ben-e-fit.',
      benefitt: 'This has a double t. The word ends in one t: bene-fit.',
      bennefit: 'This has a double n. The word has one n: be-ne-fit.',
    },
    more: "'Bene' is Latin for well or good: a benefit is something good for you.",
  },
  'charachter|caracter|charakter|character': {
    why: "The correct spelling is 'character': c-h-a-r-a-c-t-e-r. It starts with ch, said like k, and has -act- in the middle. A character is a person in a story, play or film.",
    not: {
      charachter: 'There is an extra h in the middle. Only the start has ch: char-ac-ter.',
      caracter: 'The h is missing, as in Spanish or French. English starts with ch: ch-aracter.',
      charakter:
        'The c in the middle is written k, as in German or Polish. English has c: char-ac-ter.',
    },
    more: "Character also means what a person is like: 'She has a strong character.'",
    tip: 'In an exam, write about how a writer presents a character, not just what the character does.',
  },
  'comunity|communitty|comminity|community': {
    why: "The correct spelling is 'community': c-o-m-m-u-n-i-t-y. It has a double m and ends in -ity. A community is a group who live in one place or share something.",
    not: {
      comunity: 'One m is missing, as in Spanish and Italian. English has a double m: com-mu-nity.',
      communitty: 'This has a double t. The ending -ity has one t: commun-ity.',
      comminity: 'The vowel after comm- is wrong. It is u: comm-u-nity.',
    },
    more: 'Words with the same root, such as common and communicate, also have a double m.',
  },
  'desparate|desprate|desperete|desperate': {
    why: "The correct spelling is 'desperate': des-per-ate, d-e-s-p-e-r-a-t-e. The middle is -per-, with e, and the word ends in -ate. Desperate means in great need, with little hope left.",
    not: {
      desparate: 'The vowel after desp- is wrong. It is e: desp-er-ate.',
      desprate:
        'The e after desp- is missing. Many speakers drop it, but it is written: des-per-ate.',
      desperete: 'The ending is wrong. It is -ate, with a: desper-ate.',
    },
    more: 'Think of it as des + per + ate: the e comes first, then the a.',
  },
  'exausted|exhaused|exhosted|exhausted': {
    why: "The correct spelling is 'exhausted': e-x-h-a-u-s-t-e-d. There is a silent h after the x, and the vowel is written au. Exhausted means very tired.",
    not: {
      exausted: 'The silent h is missing. You do not hear it, but it is written: ex-h-austed.',
      exhaused: "The t before -ed is missing. The verb is 'exhaust': exhaust-ed.",
      exhosted: 'The vowel is written au, not o: ex-h-au-sted.',
    },
    more: "The h is silent in 'exhibit' and 'exhilarating' too.",
  },
  'facinating|fasinating|fascinatting|fascinating': {
    why: "The correct spelling is 'fascinating': f-a-s-c-i-n-a-t-i-n-g. It has sc together, though you hear only s, and ends in -ating. Fascinating means it holds all your attention.",
    not: {
      facinating: 'The s is missing. The word has s and c together: fas-ci-nating.',
      fasinating: 'The c is missing. The word has s and c together: fas-c-inating.',
      fascinatting:
        "This doubles the t. The verb is 'fascinate', so drop the e and add -ing: fascinat-ing.",
    },
    more: "'Fascinate' drops its e before -ing, like 'create' and 'creating'.",
  },
  'greatful|gratefull|graitful|grateful': {
    why: "The correct spelling is 'grateful': g-r-a-t-e-f-u-l. It starts grate-, as in 'gratitude', not 'great', and the ending -ful has one l. Grateful means thankful.",
    not: {
      greatful:
        "This starts with 'great', but the word has nothing to do with it. It starts grate-, as in 'gratitude'.",
      gratefull: 'This has two l letters at the end. The ending -ful has only one l: grate-ful.',
      graitful: 'The vowel is written ai. The word starts grate-: grate-ful.',
    },
    more: "The noun is 'gratitude'. Both come from the Latin 'gratus', pleasing.",
  },
  'happyness|hapiness|happines|happiness': {
    why: "The correct spelling is 'happiness': happy + ness. The y changes to i, the double p stays, and -ness ends in a double s: h-a-p-p-i-n-e-s-s.",
    not: {
      happyness: "This keeps the y. Before -ness, the y of 'happy' changes to i: happi-ness.",
      hapiness: "One p is missing. 'Happy' has a double p: hap-piness.",
      happines: 'One s is missing. The ending -ness has a double s: happi-ness.',
    },
    more: 'Other nouns made the same way: lazy, laziness; lonely, loneliness; ugly, ugliness.',
  },
  'inteligent|intelligant|intellegent|intelligent': {
    why: "The correct spelling is 'intelligent': in-tel-li-gent, i-n-t-e-l-l-i-g-e-n-t. It has a double l, then i, and ends in -ent. Intelligent means clever.",
    not: {
      inteligent: 'One l is missing, as in Spanish. English has a double l: intel-ligent.',
      intelligant: 'The ending is wrong. It is -ent, with e: intellig-ent.',
      intellegent: 'The vowel after the double l is wrong. It is i: intell-i-gent.',
    },
    more: "The noun is 'intelligence', ending in -ence.",
  },
  'marrige|mariage|marraige|marriage': {
    why: "The correct spelling is 'marriage': m-a-r-r-i-a-g-e. It comes from 'marry': the y changes to i, and -age is added. The double r stays.",
    not: {
      marrige: 'The a after the i is missing. The ending is -iage: marri-age.',
      mariage: "One r is missing, as in the French 'mariage'. English has a double r: mar-riage.",
      marraige: 'The i and a are the wrong way round. After marr- comes i, then a: marr-i-age.',
    },
    more: "Like 'carriage', it ends in -rriage.",
  },
  'permenant|permanant|permanet|permanent': {
    why: "The correct spelling is 'permanent': per-ma-nent, p-e-r-m-a-n-e-n-t. The middle is -man-, and it ends in -ent. Permanent means lasting for ever, or for a very long time.",
    not: {
      permenant: 'The vowels are swapped. The middle is -man- and the end is -ent: per-man-ent.',
      permanant: 'The ending is wrong. It is -ent, with e: perman-ent.',
      permanet: 'The n before the t is missing. The ending is -ent: perma-n-ent.',
    },
    more: "Something that is not permanent is 'temporary'.",
  },
  'psycology|phychology|sychology|psychology': {
    why: "The correct spelling is 'psychology': p-s-y-c-h-o-l-o-g-y. It starts with a silent p, has ch for the k sound, and ends in -ology, the study of something. Psychology is the study of the mind.",
    not: {
      psycology: 'The h is missing. The k sound is written ch: psy-ch-ology.',
      phychology: 'The start is wrong. It is ps-, with a silent p: ps-ychology.',
      sychology: 'The silent p is missing. You do not hear it, but it is written: p-sychology.',
    },
    more: 'Words from Greek often start with a silent p: psychology, psalm, pneumonia.',
  },
}
