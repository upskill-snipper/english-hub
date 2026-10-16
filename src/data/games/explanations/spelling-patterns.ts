import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Spelling Patterns: the explanation a student sees after each answer, by question key
 * (src/data/games/banks/spelling-patterns.ts). Written with AI on 16 October 2026 and checked
 * against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'recieve / receive / receeve / receve': {
    why: "The rule is 'i before e, except after c'. Here the two vowels come straight after a c, so the order is ei: rec-ei-ve. That gives receive.",
    not: {
      recieve: 'This puts ie after the c. After a c, the letters swap to ei.',
      receeve:
        'The pair ee makes the sound, but it is not the spelling. After a c, the pair is e then i.',
      receve: 'This leaves out the i. Receive needs both vowels, e then i, before the v.',
    },
    more: "The rule works for words with the long 'ee' sound. Other words that follow it after c: ceiling, deceive and receipt.",
    tip: "When i and e sit together and make an 'ee' sound, look at the letter before them. After c, write ei, as in receive and ceiling.",
  },
  'beleive / beleeve / believe / bilieve': {
    why: "No c comes before the vowel pair, so 'i before e' applies: bel-ie-ve. That gives believe, with ie in the middle.",
    not: {
      beleive:
        'The vowels are the wrong way round. There is no c here, so the order is ie, not ei.',
      beleeve: 'The pair ee makes the sound, but believe uses i and then e.',
      bilieve: 'This changes the first vowel to i. The first vowel in believe is e: be-lieve.',
    },
    more: "Believe, relieve, achieve and piece all follow 'i before e', because no c comes directly before the pair.",
    tip: "A memory trick: believe has the word 'lie' inside it. You should not believe a lie.",
  },
  'acheive / achieve / acheeve / acheve': {
    why: "No c comes directly before the vowel pair, so 'i before e' applies: ach-ie-ve. That gives achieve.",
    not: {
      acheive: 'This swaps the vowels to ei. The pair comes after h, not c, so the order is ie.',
      acheeve: 'The pair ee does not spell this sound here. The word uses i then e.',
      acheve: 'This misses out the i. The word needs both vowels, ie, before the v.',
    },
    more: "The c in achieve is part of ch. The rule 'except after c' only counts a c directly before the pair, as in receive.",
  },
  'decieve / deceeve / deceive / deceve': {
    why: "A c comes directly before the vowel pair, so the order is ei: dec-ei-ve. 'I before e, except after c' gives deceive.",
    not: {
      decieve: 'This puts ie straight after a c. After c, the letters swap to ei.',
      deceeve: 'The pair ee makes the sound, but it is not the spelling. After a c, use e then i.',
      deceve: 'This leaves out the i. Deceive needs ei before the v.',
    },
    more: 'Deceive, receive and conceive all end in -ceive. The nouns deceit and receipt also have ei after c.',
  },
  'cieling / ceiling / ceeling / celing': {
    why: "The vowel pair comes straight after a c, so it is ei: c-ei-ling. That is the 'except after c' part of the rule. The word is ceiling.",
    not: {
      cieling: 'This puts ie after the c. After a c, the order swaps to ei.',
      ceeling: 'The pair ee makes the sound, but ceiling uses e and then i.',
      celing: 'This leaves out the i. Ceiling needs both vowels, ei, after the c.',
    },
    tip: 'Look up at the ceiling and spell it as c, e, i. The ei comes straight after the c.',
  },
  'peice / piece / peece / piecce': {
    why: "No c comes before the vowel pair, so 'i before e' applies: p-ie-ce. The word is piece.",
    not: {
      peice: 'This swaps the vowels to ei. There is no c before the pair, so the order is ie.',
      peece: 'The pair ee makes the sound, but piece uses i and then e.',
      piecce: 'This adds an extra c. Piece has only one c, and it comes before the final e.',
    },
    more: 'A memory trick: have a piece of pie. Both words begin with the letters pie.',
  },
  'theif / theef / thief / thiefe': {
    why: "No c comes before the vowel pair, so 'i before e' applies: th-ie-f. The word is thief.",
    not: {
      theif: 'This swaps the vowels to ei. With no c before the pair, the order is ie.',
      theef: 'The pair ee makes the sound, but thief uses i and then e.',
      thiefe: 'This adds an extra e at the end. Thief ends with f.',
    },
    more: 'The plural is thieves. The f changes to v and the ie stays in place.',
  },
  'wieght / weight / weeght / waight': {
    why: "Weight follows the 'ay' part of the full rule. When the vowels sound like 'ay', as in weigh and eight, they are spelt ei. So the word is w-ei-ght.",
    not: {
      wieght: "This swaps the vowels to ie. In weight, the 'ay' sound is spelt ei.",
      weeght: "The pair ee does not spell the 'ay' sound. In weight it is spelt ei.",
      waight: "This uses ai for the 'ay' sound. In weight, the sound is spelt ei.",
    },
    more: "The full rule is 'i before e, except after c, or when it sounds like ay, as in neighbour and weigh'. Eight, freight and vein follow it too.",
  },
  'nieghbour / neighbour / neighbor / naighbour': {
    why: "Neighbour has an 'ay' sound in its first syllable, which is spelt ei, as in weigh. The British spelling also keeps the u: neighbour.",
    not: {
      nieghbour: "This swaps the vowels to ie. The 'ay' sound is spelt ei: n-ei-gh-b-our.",
      neighbor: 'This is the American spelling. British English keeps the u before the r.',
      naighbour: "This uses ai for the 'ay' sound. In neighbour, it is spelt ei.",
    },
    more: 'Many British words end in -our where American spellings end in -or: colour, behaviour, honour and humour.',
  },
  'wierd / weird / weerd / weired': {
    why: "Weird is an exception to 'i before e, except after c'. No c comes before the pair, but the spelling is still ei: w-ei-rd.",
    not: {
      wierd:
        "This follows the rule 'i before e', which would be expected here. But weird is an exception and uses ei.",
      weerd: 'The pair ee makes the sound, but weird uses e and then i.',
      weired: 'This adds an extra e before the d. Weird is spelt w-e-i-r-d.',
    },
    more: 'Other exceptions to the rule are seize, protein, caffeine and either. It helps to learn them as a short list.',
  },
  'seize / sieze / seeze / seaze': {
    why: "Seize is an exception to 'i before e'. No c comes before the pair, but the spelling is still ei: s-ei-ze.",
    not: {
      sieze: "This follows the 'i before e' rule, but seize is an exception and uses ei.",
      seeze: 'This has ee in the middle. Seize has e then i.',
      seaze: 'This uses ea for the sound. Seize uses e and then i.',
    },
    more: 'Seize means to take hold of something suddenly. Seize, weird and protein break the rule, so learn them by heart.',
  },
  'protien / protein / proteen / protian': {
    why: "Protein is an exception. The vowels sound like 'ee', and no c comes before them, so you might expect ie. But the word is spelt p-r-o-t-e-i-n.",
    not: {
      protien: "This follows the 'i before e' rule, but protein is an exception and uses ei.",
      proteen: 'The pair ee makes the sound, but protein uses e and then i.',
      protian: 'This uses ia for the sound. Protein uses e and then i.',
    },
    more: 'Protein is a nutrient found in foods such as meat, fish and beans. Say it in a spelling voice to hear the letters: pro-te-in.',
  },
  'runing / running / runnning / runeing': {
    why: 'Run has one syllable, a short vowel and one final consonant, so the n doubles before -ing: runn + ing = running.',
    not: {
      runing:
        'This does not double the n. Because run has a short vowel and one final consonant, the n doubles.',
      runnning: 'This has three n letters in a row. Only one extra n is needed: runn + ing.',
      runeing: 'This adds an e. Run has no silent e, so the n doubles instead.',
    },
    more: 'This is the 1-1-1 rule: one syllable, one vowel, one final consonant. Stop, swim and plan follow it too.',
    tip: 'In a one-syllable word that ends in one vowel letter and then one consonant, double that consonant before -ing or -ed. The letters w, x and y are never doubled.',
  },
  'stopd / stopped / stoppd / stopeed': {
    why: 'Stop has one syllable, a short vowel and one final consonant, so the p doubles before -ed: stopp + ed = stopped.',
    not: {
      stopd:
        'This does not double the p, and it leaves out the e of -ed. Stop doubles its p before -ed: stopp + ed.',
      stoppd: 'This leaves out the e of -ed. The ending is -ed, so write stopp + ed.',
      stopeed:
        "This has a single p and an extra e. With one p, the o would sound long, as in 'hoped'. The p doubles, and the ending is just -ed.",
    },
    more: 'Compare hoped and hopped. Hope has a long vowel and drops its e (hoped). Hop has a short vowel and doubles its p (hopped).',
  },
  'begining / beginning / beggining / beginnning': {
    why: 'Begin has its stress on the last syllable (be-GIN) and ends in one consonant after a short vowel, so the n doubles before -ing: beginn + ing.',
    not: {
      begining:
        'This does not double the n. Begin is stressed on its last syllable, so the n doubles.',
      beggining: 'This doubles the wrong letter, the g. The letter that doubles is the final n.',
      beginnning: 'This has three n letters in a row. Only one extra n is needed.',
    },
    more: 'In a word with more than one syllable, the last consonant usually doubles only when the stress is on the last syllable. So begin doubles, but visit (visiting) does not. British English also doubles a final l after one vowel letter, as in travelling.',
  },
  'plannd / plannned / planned / plaaned': {
    why: 'Plan has one syllable, a short vowel and one final consonant, so the n doubles before -ed: plann + ed = planned.',
    not: {
      plannned: 'This has three n letters in a row. Plan needs only one extra n before -ed.',
      plannd: 'This leaves out the e of -ed. The ending is -ed, so write plann + ed.',
      plaaned: 'This adds an extra a. Plan keeps its single a, and the n doubles instead.',
    },
    tip: 'Say the base word aloud. Plan has a short a, so with one final consonant the n doubles before -ed.',
  },
  'swiming / swimming / swimeing / swimmming': {
    why: 'Swim has one syllable, a short vowel and one final consonant, so the m doubles before -ing: swimm + ing = swimming.',
    not: {
      swiming:
        'This does not double the m. Swim has a short vowel and one final consonant, so the m doubles.',
      swimeing: 'This adds an e. Swim has no silent e, so the m doubles instead.',
      swimmming: 'This has three m letters in a row. Only one extra m is needed.',
    },
    more: 'Other words that double in the same way: running, sitting, getting and winning.',
  },
  'prefered / preferred / preffered / prefferred': {
    why: 'Prefer has its stress on the last syllable (pre-FER) and ends in one vowel letter and one consonant, so the r doubles before -ed: preferr + ed.',
    not: {
      prefered:
        'This does not double the r. Prefer is stressed on its last syllable, so the r doubles.',
      preffered: 'This doubles the f instead. The letter that doubles is the final r.',
      prefferred: 'This doubles both the f and the r. Only the final r doubles.',
    },
    more: 'In preference, the stress moves to the first syllable and the r does not double. Doubling depends on where the stress falls.',
  },
  'committed / comitted / commited / comited': {
    why: 'Commit has its stress on the last syllable (com-MIT), so the t doubles before -ed. Commit already has a double m, which stays: committed.',
    not: {
      comitted: 'This has one m. Commit has a double m, and it keeps both.',
      commited:
        'This does not double the t. Commit is stressed on its last syllable, so the t doubles.',
      comited: 'This has one m and one t. Committed needs mm and tt.',
    },
    more: 'Committed has two double letters, mm and tt. Say it in parts to remember: com-mit-ted.',
  },
  'controled / controlled / controllled / controlld': {
    why: 'Control has its stress on the last syllable (con-TROL) and ends in one vowel letter and one consonant, so the l doubles before -ed: controll + ed.',
    not: {
      controled:
        'This does not double the l. Control is stressed on its last syllable, so the l doubles.',
      controllled: 'This has three l letters in a row. Only one extra l is needed.',
      controlld: 'This leaves out the e of -ed. The ending is -ed, so write controll + ed.',
    },
    more: 'The same pattern gives controlling and controller. American and British English both double the l here.',
  },
  'traveling / travelling / travelng / travellling': {
    why: 'In British English, a final l after one vowel letter usually doubles before -ing, even when the stress is not on the last syllable: travel becomes travelling.',
    not: {
      traveling: 'This is the American spelling, with one l. British English doubles the l.',
      travelng:
        'This leaves out the i of -ing and does not double the l. The word is travel + l + ing.',
      travellling: 'This has three l letters in a row. Only one extra l is needed.',
    },
    more: 'Other British words that double a final l: cancelling, labelling and modelling. American English usually writes one l.',
  },
  'gardenning / gardening / gardning / gardeneing': {
    why: 'Garden has its stress on the first syllable (GAR-den), not the last, so the n does not double. Just add -ing: garden + ing = gardening.',
    not: {
      gardenning:
        'This doubles the n. Garden is stressed on the first syllable, so the final consonant stays single.',
      gardning: 'This leaves out the e of garden. Keep the whole word, then add -ing.',
      gardeneing: 'This adds an extra e. Garden already has its e, so just add -ing.',
    },
    more: 'Compare begin, where the stress is on the last syllable and the n doubles. With visit, offer and open, the stress is on the first syllable, so there is no doubling.',
  },
  'makeing / making / makking / maing': {
    why: 'Make ends in a silent e. Drop the e before an ending that starts with a vowel, such as -ing: mak + ing = making.',
    not: {
      makeing: 'This keeps the silent e. Drop it before -ing.',
      makking: 'This doubles the k. Make has a long vowel, so it drops the e instead of doubling.',
      maing: 'This drops the k as well as the e. Only the e is dropped: mak + ing.',
    },
    more: 'The same rule gives taking, having and hoping. Keep the e before an ending that starts with a consonant, such as -ful in hopeful or -ly in lovely.',
  },
  'hopeing / hoppeing / hoping / hopeng': {
    why: 'Hope ends in a silent e. Drop the e before -ing, which starts with a vowel: hope, drop the e, add -ing, and you get hoping. The single p shows that the vowel is long.',
    not: {
      hopeing: 'This keeps the silent e. Drop it before -ing.',
      hoppeing:
        'This doubles the p and keeps the e. Hope has a long vowel, so it drops the e and keeps one p.',
      hopeng: 'This keeps the e and leaves out the i of -ing. Drop the e and add -ing.',
    },
    more: 'One p or two changes the word. Hoping (long o) comes from hope. Hopping (short o) comes from hop.',
  },
  'writeing / writting / writing / wrighting': {
    why: 'Write ends in a silent e. Drop the e before -ing: write, drop the e, add -ing, and you get writing. The word has one t.',
    not: {
      writeing: 'This keeps the silent e. Drop it before -ing.',
      writting:
        'This doubles the t, which would make the vowel short. Write has a long vowel, so the t stays single.',
      wrighting:
        "This uses 'wright', a different word that means a maker, as in playwright. Write simply drops its e before -ing.",
    },
    more: 'Compare written, which has a double t. The i in written is short, so the t doubles. The i in writing is long, so the t stays single.',
  },
  'usible / usable / usabel / useible': {
    why: 'Use ends in a silent e. Drop the e before -able: us + able = usable.',
    not: {
      usible: 'This ends in -ible. Use takes -able, with an a.',
      usabel: 'The last two letters are the wrong way round. The ending is -able, not -abel.',
      useible: 'This keeps the silent e and uses -ible. Drop the e and use -able.',
    },
    more: 'Dictionaries also list useable, but usable is the more common spelling. Most words drop the e before -able, as in lovable and desirable.',
  },
  'lovabel / lovable / lovible / loveble': {
    why: 'Love ends in a silent e. Drop the e before -able: lov + able = lovable.',
    not: {
      lovabel: 'The last two letters are the wrong way round. The ending is -able.',
      lovible: 'This ends in -ible. Love takes -able, with an a.',
      loveble: 'This keeps the e and leaves out the a. Drop the e and write -able in full.',
    },
    more: 'Dictionaries also list loveable, but lovable is the more common spelling. The same rule gives adorable and desirable.',
  },
  'noticable / noticeable / noticeible / notisable': {
    why: 'Notice ends in e after a soft c. Keep the e before -able, so the c still sounds like s: notice + able = noticeable.',
    not: {
      noticable: 'This drops the e, so the c would sound hard, like k. Keep the e after a soft c.',
      noticeible: 'This ends in -ible. Notice takes -able, with an a.',
      notisable: 'This changes the c to s and drops the e. Keep the c and the e: notice + able.',
    },
    more: 'A soft c or g keeps its e before -able or -ous. That is why we write noticeable, manageable and courageous, but lovable.',
  },
  'courageous / couragous / curageous / courageus': {
    why: 'Courage ends in e after a soft g. Keep the e before -ous, so the g still sounds like j: courage + ous = courageous.',
    not: {
      couragous:
        "This drops the e, so the g would sound hard, as in 'got'. Keep the e after a soft g.",
      curageous: 'This leaves out the o. The word begins cour-: c, o, u, r.',
      courageus: 'The ending is -ous, not -us. Write courage + ous.',
    },
    more: 'The same happens in outrageous and advantageous. The e after the g keeps the sound soft.',
  },
  'hopful / hopeful / hopefull / hoppeful': {
    why: 'Hope ends in a silent e. Keep the e before -ful, because -ful starts with a consonant: hope + ful = hopeful.',
    not: {
      hopful: 'This drops the e. Keep it, because -ful starts with a consonant, not a vowel.',
      hopefull: 'This has two l letters. The ending -ful has only one l.',
      hoppeful: 'This doubles the p. Hope has a long vowel, so the p stays single: hope + ful.',
    },
    more: 'Drop a silent e before an ending that starts with a vowel (hoping), but keep it before an ending that starts with a consonant (hopeful, hopeless).',
  },
  'arguement / argument / arguemnt / argumant': {
    why: 'Argument is an exception. Argue ends in e, and you might expect to keep it before -ment, but this word drops it: argu + ment = argument.',
    not: {
      arguement: 'This keeps the e. Argument is an exception and drops it before -ment.',
      arguemnt: 'The letters of -ment are in the wrong order. The ending is m, e, n, t.',
      argumant: 'This changes the e of -ment to a. The ending is spelt -ment.',
    },
    more: 'Most words keep the e before -ment, as in movement and achievement, so argument is an exception to learn by heart. Truly is another exception: true drops its e before -ly.',
  },
  'truely / truly / trully / truley': {
    why: 'Truly is an exception. True ends in e, and you might expect to keep it before -ly, but this word drops it: tru + ly = truly.',
    not: {
      truely: 'This keeps the e. Truly is an exception and drops it before -ly.',
      trully: 'This doubles the l. Truly is tru, then ly, with a single l.',
      truley: 'This puts an e between the l and the y. The ending is just -ly.',
    },
    more: 'Most adjectives keep a silent e before -ly, as in nicely and bravely. Those ending in a consonant and then -le change to -ly, as in gently. Truly is a rare exception to the pattern, and argument is one with -ment.',
  },
  'happyness / happiness / hapiness / happieness': {
    why: 'Happy ends in a consonant and then y. Change the y to i before the ending: happi + ness = happiness.',
    not: {
      happyness: 'This keeps the y. After a consonant, change the y to i before adding -ness.',
      hapiness: 'This has only one p. Happy has a double p, and it keeps both.',
      happieness: 'This adds an extra e. The ending is -ness, so write happi + ness.',
    },
    more: 'Other words that change y to i: loneliness (from lonely), easily (from easy) and beautiful (from beauty).',
  },
  'cryed / cryd / cried / criede': {
    why: 'Cry ends in a consonant and then y. Change the y to i before -ed: cri + ed = cried.',
    not: {
      cryed: 'This keeps the y. After a consonant, change the y to i before -ed.',
      cryd: 'This keeps the y and leaves out the e. The ending is -ed, and the y becomes i.',
      criede: 'This adds an extra e at the end. The ending is just -ed: cri + ed.',
    },
    more: 'Compare played, where a vowel comes before the y, so the y stays. Cry has a consonant, r, before the y.',
  },
  'carryed / carried / car ried / carriedd': {
    why: 'Carry ends in a consonant and then y. Change the y to i before -ed: carri + ed = carried.',
    not: {
      carryed: 'This keeps the y. After a consonant, change the y to i before -ed.',
      'car ried': 'This has a space in the middle. Carried is one word with no gap.',
      carriedd: 'This has an extra d at the end. The ending is just -ed.',
    },
    more: 'The same rule gives worried, hurried and tried. The y stays before -ing, as in carrying, so that two i letters do not meet.',
  },
  'babys / babies / babyies / babyes': {
    why: 'Baby ends in a consonant and then y. For the plural, change the y to i and add -es: babi + es = babies.',
    not: {
      babys: 'This just adds s. After a consonant, the y changes to i and the ending is -es.',
      babyies: 'This keeps the y and adds -ies. The y is replaced by i, not kept.',
      babyes: 'This keeps the y and adds -es. Change the y to i first: babies.',
    },
    more: 'If a vowel comes before the y, just add s, as in boys, days and monkeys. Only a consonant and then y changes to -ies.',
  },
  'beautyful / beautiful / beutiful / beautifull': {
    why: 'Beauty ends in a consonant and then y. Change the y to i before the ending: beauti + ful = beautiful. The ending -ful has one l.',
    not: {
      beautyful: 'This keeps the y. After a consonant, change the y to i before -ful.',
      beutiful: 'This leaves out the a. Beautiful begins with beau: b, e, a, u.',
      beautifull: 'This has two l letters. The ending -ful has only one l.',
    },
    tip: 'Say it in parts: beau-ti-ful. The first part has four letters: b, e, a, u.',
  },
  'studie / studying / studiing / studdying': {
    why: 'Study ends in a consonant and then y, but -ing starts with i. Keep the y so you do not get two i letters in a row: study + ing = studying.',
    not: {
      studie: 'This changes the y to ie and has no -ing. Study keeps its y before -ing.',
      studiing: 'This changes the y to i, which gives two i letters. Keep the y before -ing.',
      studdying: 'This doubles the d. Study does not double: its y stays and -ing is added.',
    },
    more: 'The y changes to i before -ed (studied) and in the form studies, but it stays before -ing: studying, crying, carrying.',
  },
  'playd / plaied / played / plaiyed': {
    why: 'Play ends in a vowel and then y. When a vowel comes before the y, the y usually stays, so just add -ed: play + ed = played.',
    not: {
      playd: 'This leaves out the e of -ed. The ending is -ed.',
      plaied: 'This changes the y to i. After a vowel such as a, the y usually stays.',
      plaiyed: 'This adds an i as well as the y. Just keep the y and add -ed.',
    },
    more: 'Compare cried. Cry has a consonant before the y, so the y changes to i. Play has a vowel before the y, so it does not. Paid, laid and said are exceptions.',
  },
  'enjoyed / enjoied / enjoyd / enjoyyed': {
    why: 'Enjoy ends in a vowel and then y. When a vowel comes before the y, the y usually stays, so just add -ed: enjoy + ed = enjoyed.',
    not: {
      enjoied: 'This changes the y to i. After a vowel such as o, the y usually stays.',
      enjoyd: 'This leaves out the e of -ed. The ending is -ed.',
      enjoyyed: 'This doubles the y. The y stays single: enjoy + ed.',
    },
    more: 'The same rule applies to stayed, delayed and employed, where the y follows a vowel. Paid, laid and said are exceptions.',
  },
  'monkies / monkeys / monkys / monkyies': {
    why: 'Monkey ends in a vowel and then y. When a vowel comes before the y, keep the y and just add s: monkey + s = monkeys.',
    not: {
      monkies:
        'This turns the ending into -ies, as if the word ended in a consonant and y. Monkey has a vowel before the y, so keep -ey and add s.',
      monkys: 'This drops the e. Monkey ends in -ey, so keep both letters and add s.',
      monkyies: 'This drops the e and adds -ies. Monkey ends in -ey, so keep it and just add s.',
    },
    more: 'Compare babies: baby has a consonant before the y, so it changes to -ies. Boys, keys and days only add s.',
  },
  'decision / desicion / decison / decistion': {
    why: "The ending of decision has the 'zh' sound, as in vision. That sound is usually spelt -sion. The word is deci + sion, and it comes from decide.",
    not: {
      desicion: 'This swaps the c and the s. The word is deci-sion, with the c before the s.',
      decison: 'This leaves out the i of -sion. The ending is s, i, o, n.',
      decistion: 'This adds a t. The ending is -sion, with no t.',
    },
    more: "Other words with the 'zh' sound spelt -sion: division, confusion, collision and explosion.",
  },
  'informasion / information / informationn / informacion': {
    why: "Inform is a verb. When a noun made from a verb ends in a 'shun' sound, -tion is the usual spelling. Inform becomes information.",
    not: {
      informasion:
        "This spells the 'shun' sound with s. For a noun like this one, made from a verb, -tion is the usual spelling.",
      informationn: 'This has an extra n at the end. The word ends in -tion.',
      informacion: 'This spells the sound with c. The ending is -tion, with a t.',
    },
    more: "Here the ending is -ation: inform + ation. Information has no plural, so you cannot write 'informations'.",
  },
  'expansion / expantion / expancion / expanssion': {
    why: 'Expand ends in d, and verbs that end in d often take -sion for the noun: expand becomes expansion.',
    not: {
      expantion: 'This uses -tion. Expand is one of the d verbs that take -sion.',
      expancion: "This spells the 'shun' sound with c. The ending is -sion, with an s.",
      expanssion: 'This has a double s. Expansion has one s before the ion.',
    },
    more: 'Other verbs ending in d take -sion too: extend becomes extension, suspend becomes suspension and comprehend becomes comprehension.',
  },
  'discussion / discusion / discustion / discussian': {
    why: "Discuss ends in -ss. A 'shun' noun made from a verb that ends in -ss takes -ion: discuss + ion = discussion. Both s letters stay.",
    not: {
      discusion: 'This has only one s before the ion. Discuss ends in ss, and both letters stay.',
      discustion: 'This swaps the last s for a t. The word keeps ss: discuss + ion.',
      discussian: 'This ends in -ian. The ending is -ion: discuss + ion.',
    },
    more: 'Other nouns made from verbs that end in -ss: expression (from express), confession (from confess) and impression (from impress).',
  },
  'musician / musicion / musition / musitian': {
    why: 'The ending -cian names a person, often when the root word ends in c. Music ends in c, so a person who works with music is a musician.',
    not: {
      musicion:
        'This spells the ending -cion. For a person from a word ending in c, the ending is -cian, with an a.',
      musition:
        "This spells the 'shun' sound with t. For a person from music, the ending is -cian.",
      musitian: 'This uses t instead of c. Music ends in c, so the ending is -cian.',
    },
    more: 'Other -cian words for people: electrician, magician, technician and physician.',
  },
  'electrision / electricion / electrician / electritian': {
    why: 'The ending -cian names a person who does a job, often when the root word ends in c. Electric ends in c, so the job is electrician.',
    not: {
      electrision: 'This ends in -sion. A job name made from a word ending in c takes -cian.',
      electricion:
        'This spells the ending -cion. For a person from a word ending in c, the ending is -cian, with an a.',
      electritian: 'This uses t instead of c. Electric ends in c, so the ending is -cian.',
    },
    more: 'Compare electricity, the energy itself. An electrician is the person who works with it.',
  },
  'posession / possesion / possession / posesssion': {
    why: "Possess ends in -ss. A 'shun' noun made from a verb that ends in -ss takes -ion: possess + ion = possession. The word has four s letters.",
    not: {
      posession: 'This has only one s after the o. Possession has ss, then e, then ss.',
      possesion: 'This has only one s before the ion. Possess ends in ss, and both letters stay.',
      posesssion:
        'This has one s after the o and three after the e. Possession has two, then e, then two more.',
    },
    more: 'Possession has two double s pairs with an e between them. Say it in parts to spell it: pos-ses-sion.',
  },
  'attension / attention / attencion / attentcion': {
    why: 'The noun from attend is attention, spelt with -tion. Do not copy expansion: that comes from expand and takes -sion, but attention is an exception that takes -tion.',
    not: {
      attension: 'This uses -sion. The noun from attend takes -tion, with a t.',
      attencion: "This spells the 'shun' sound with c. The ending is -tion.",
      attentcion: 'This has both t and c. The ending is -tion, with a t and no c.',
    },
    more: 'The same -ntion ending appears in mention, invention and intention.',
  },
  'televsion / television / televistion / televicion': {
    why: "The 'zh' sound in the ending is usually spelt -sion, as in vision. Television is tele (far away) plus vision (seeing): tele + vision.",
    not: {
      televsion: 'This leaves out the i before the s. The word is tele-vi-sion.',
      televistion: 'This adds a t. The ending is -sion, with no t.',
      televicion: 'This spells the sound with c. The ending is -sion, with an s.',
    },
    tip: 'Break long words into parts you know: tele + vision. Then you only need to spell vision.',
  },
  'knifs / knives / knifves / knivs': {
    why: 'Knife ends in -fe. A few words ending in -fe change to -ves in the plural. The f becomes v and the e stays: knife becomes knives.',
    not: {
      knifs: 'This drops the e and just adds s. Knife changes its f to v in the plural.',
      knifves: 'This keeps the f and adds v. The f is replaced by v.',
      knivs: 'This leaves out the e. The plural is -ves: knives.',
    },
    more: 'Two other -fe words do the same: wife becomes wives and life becomes lives. Safe and giraffe just add s.',
  },
  'leafes / leeves / leaves / leavs': {
    why: 'Leaf ends in -f, and many words ending in -f change to -ves in the plural. The f becomes v and -es is added: leaf becomes leaves.',
    not: {
      leafes: 'This keeps the f and adds -es. The f is replaced by v: leaves.',
      leeves: 'This changes the vowels. Leaf keeps its ea: leaves.',
      leavs: 'This leaves out the e. The plural ending is -ves, with an e before the s.',
    },
    more: 'Other -f words that change to -ves: half, shelf, wolf and calf become halves, shelves, wolves and calves.',
  },
  'wifes / wives / wifves / wivs': {
    why: 'Wife ends in -fe. A few words ending in -fe change to -ves in the plural. The f becomes v and the e stays: wife becomes wives.',
    not: {
      wifes: 'This just adds s. Wife changes its f to v in the plural.',
      wifves: 'This keeps the f and adds v. The f is replaced by v.',
      wivs: 'This leaves out the e. The plural is wives.',
    },
  },
  'halves / halfs / halfes / halvs': {
    why: 'Half ends in -f, and many words ending in -f change to -ves in the plural. The f becomes v and -es is added: half becomes halves.',
    not: {
      halfs: 'This just adds s. Half changes its f to v in the plural.',
      halfes: 'This keeps the f and adds -es. The f is replaced by v.',
      halvs: 'This leaves out the e. The plural ending is -ves.',
    },
    more: "Halve is also a verb meaning to cut something into two equal parts: 'Halve the cake.' The plural noun is halves.",
  },
  'shelfs / shelfes / shelves / shelvs': {
    why: 'Shelf ends in -f, and many words ending in -f change to -ves in the plural. The f becomes v and -es is added: shelf becomes shelves.',
    not: {
      shelfs: 'This just adds s. Shelf changes its f to v in the plural.',
      shelfes: 'This keeps the f and adds -es. The f is replaced by v.',
      shelvs: 'This leaves out the e. The plural ending is -ves.',
    },
  },
  'theifs / thiefs / thieves / thievs': {
    why: 'Thief ends in -f, and many words ending in -f change to -ves in the plural. The f becomes v and -es is added: thief becomes thieves. The ie stays.',
    not: {
      thiefs: 'This just adds s. Thief changes its f to v in the plural.',
      theifs: 'This has ei and just adds s. Thief keeps ie, and the f changes to v.',
      thievs: 'This leaves out the e. The plural ending is -ves: thieves.',
    },
    more: 'Compare chief. It looks similar but just adds s: chiefs. Learn the pair together.',
  },
  'rooffs / roofs / roofes / roovs': {
    why: 'Roof is an exception. Many words ending in -f change to -ves, but roof just adds s: roofs.',
    not: {
      rooffs: 'This doubles the f. Keep one f and add s: roofs.',
      roofes: 'This adds -es. Roof only needs an s.',
      roovs: 'This changes the f to v. Roof keeps its f and just adds s.',
    },
    more: 'Other nouns that just add s: chiefs, beliefs, cliffs and proofs. You may also see rooves, but roofs is the usual plural.',
  },
  'cheifs / chiefs / chieves / chiefes': {
    why: 'Chief is an exception. Many words ending in -f change to -ves, but chief just adds s: chiefs.',
    not: {
      cheifs: "This has ei, not ie. Chief follows 'i before e': ch-ie-f.",
      chieves: 'This changes the f to v. Chief keeps its f and just adds s.',
      chiefes: 'This adds -es. Chief only needs an s.',
    },
    more: 'Compare thief, which changes to thieves. Chief looks similar but just adds s, so learn the pair.',
  },
  'color / colour / coler / colur': {
    why: 'In British English, this word ends in -our: colour. The American spelling drops the u.',
    not: {
      color: 'This is the American spelling. British English keeps the u.',
      coler: 'This changes the ending to -er and leaves out the u. The ending is -our.',
      colur: 'This leaves out the o before the u. The word ends in -our.',
    },
    more: 'Other British words that keep the u: favourite, neighbour, behaviour, honour and humour.',
  },
  'favorite / favourite / faverite / favourit': {
    why: 'In British English, the first part of this word is favour, with a u: favour + ite = favourite. The American spelling drops the u.',
    not: {
      favorite: 'This is the American spelling. British English keeps the u.',
      faverite: 'This changes the ou to e. The first part is favour: f, a, v, o, u, r.',
      favourit: 'This leaves out the final e. Favourite ends in -ite, with an e.',
    },
    more: "Favourite can be an adjective ('my favourite song') or a noun ('She is the favourite to win').",
  },
  'football practise / football practice / football practece / football practiss': {
    why: 'In British English, practice with a c is the noun, and practise with an s is the verb. Football practice names a thing, so it is the noun: practice.',
    not: {
      'football practise':
        'This uses the verb spelling, with an s. Football practice names a thing, a training session, so it needs the noun spelling with a c.',
      'football practece': 'This spells the ending -ece. The noun ends in -ice, with an i and a c.',
      'football practiss':
        'This ends in -iss. The noun ends in -ice, with a c, and the verb ends in -ise, with an s.',
    },
    more: 'Think of advice and advise: the noun has a c and the verb has an s. Licence and license follow the same pattern.',
    tip: "A trick: if you can put 'I' or 'we' before the word, it is a verb and takes an s (we practise). If you can put 'the' before it, it is a noun and takes a c (the practice).",
  },
  'practice the song / practise the song / practece the song / practiss the song': {
    why: "In British English, practise with an s is the verb. 'Practise the song' tells you to do something, so it is the verb: practise.",
    not: {
      'practice the song':
        "Here the word is an action, so it needs the verb spelling with an s. The noun, with a c, is a thing, as in 'band practice'.",
      'practece the song': 'This spells the ending -ece. The verb ends in -ise, with an s.',
      'practiss the song': 'This ends in -iss. The verb ends in -ise, with a silent e.',
    },
    more: 'American English uses practice for both the noun and the verb. In British English, the two spellings help you tell them apart, as with advice and advise.',
    tip: "Use both in one sentence to remember them: 'I practise every day at football practice.'",
  },
  'orginise / organise / organyse / organiize': {
    why: "Organise is the usual British spelling, with the ending -ise. The word is spelt o-r-g-a-n-i-s-e, and the s makes the 'z' sound.",
    not: {
      orginise: 'This changes the a to i. The word begins organ-: o, r, g, a, n.',
      organyse:
        'This uses y in the ending. A few words, such as analyse, end in -yse, but organise ends in -ise.',
      organiize: 'This has two i letters and a z. The ending is -ise, with one i and an s.',
    },
    more: 'Other British verbs that end in -ise: realise, recognise, apologise and summarise.',
  },
  'centre / center / centr / sentre': {
    why: 'In British English, words like centre end in -re, not -er. The word is spelt c-e-n-t-r-e.',
    not: {
      center: 'This is the American spelling. British English ends the word in -re.',
      centr: 'This leaves out the final e. The word ends in -re.',
      sentre: 'This starts with s. Centre starts with c, even though the first sound is s.',
    },
    more: 'Other British words ending in -re: theatre, metre, litre and fibre.',
  },
  'licence to drive / license to drive / licanse to drive / lisence to drive': {
    why: 'In British English, licence with a c is the noun. A driving licence is a thing, a document, so it takes a c: licence.',
    not: {
      'license to drive':
        'This uses the verb spelling, with an s. A licence to drive is a thing, so it is a noun and takes a c.',
      'licanse to drive':
        'This changes the first e to a and the second c to s. The word is l-i-c-e-n-c-e.',
      'lisence to drive': 'This spells the first c as s. The word begins lic-, with a c.',
    },
    more: "The verb is spelt license: 'The council will license the new shop.' Licence and license follow the same pattern as practice and practise.",
  },
}
