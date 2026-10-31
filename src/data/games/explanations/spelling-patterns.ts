import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Spelling Patterns: the explanation a student sees after each answer, by question key
 * (src/data/games/banks/spelling-patterns.ts). Written with AI on 16 October 2026 and checked
 * against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: every explanation rewritten, for the 36
 * old questions kept and the 169 new ones (words to build from a root and an
 * ending, words in real sentences from texts out of UK copyright, and the terms
 * of analysis), each teaching its rule with an example of its own, so that none
 * names a word another question asks for. Written with AI and checked against
 * each question, as the founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second, independent reader, as the founder
 * decided, each explanation against its question. Rewritten: two wrong facts
 * (trace and peace end in a soft c, not a soft g; the x of exist is not said
 * ks), a wrong tip (prejudice does have a d, just not before its j), two
 * examples with a second plural (roofs and rooves, staffs and staves), and three
 * that spelt out another question's word (conscience, vision, permissible).
 * Carried over to the questions whose options or line changed, with a new "why
 * not" for each new option: hite, loafves, exagerrate, accidentially, the
 * licence phrases with their article, and prejudice in its line from
 * Frankenstein.
 */
export const EXPLANATIONS: GameExplanations = {
  'recieve / receive / receeve / receve': {
    why: "The vowels make an 'ee' sound and come straight after a c, so the rule 'i before e, except after c' gives ei: rec-ei-ve.",
    not: {
      recieve:
        'This puts ie straight after the c. After a c, the order swaps to ei. This is one of the most common misspellings in English.',
      receeve: 'This spells the sound with ee. The word uses e then i after the c.',
      receve: 'This leaves out the i. The word needs both vowels, ei, before the v.',
    },
    tip: 'Words ending -ceive all keep ei after the c: conceive and perceive are spelt the same way.',
  },
  'beleive / beleeve / believe / bilieve': {
    why: "The vowels make an 'ee' sound and no c comes before them, so 'i before e' applies: bel-ie-ve.",
    not: {
      beleive: 'This swaps the vowels to ei. With no c before the pair, the order is ie.',
      beleeve: 'This spells the sound with ee. The word uses i then e.',
      bilieve: 'This changes the first vowel to i. The word begins be-, then the ie pair.',
    },
    tip: 'A memory trick: never believe a lie. The word has lie in the middle.',
  },
  'acheive / achieve / acheeve / acheve': {
    why: "The 'ee' sound comes after h, not c, so 'i before e' applies: ach-ie-ve. The c belongs to ch and does not count.",
    not: {
      acheive: 'This swaps the vowels to ei. The pair follows h, so the order is ie.',
      acheeve: 'This spells the sound with ee. The word uses i then e.',
      acheve: 'This leaves out the i. The word needs both vowels, ie, before the v.',
    },
    more: "The 'except after c' part counts only a c directly before the pair. In ch, the h comes between, so ie stays.",
  },
  'decieve / deceeve / deceive / deceve': {
    why: "The 'ee' sound comes straight after a c, so the vowels swap to ei: dec-ei-ve.",
    not: {
      decieve: 'This puts ie straight after the c. After c, the order is ei.',
      deceeve: 'This spells the sound with ee. The word uses e then i.',
      deceve: 'This leaves out the i. The word needs ei before the v.',
    },
    more: 'The noun is deceit, with the same ei after c. Conceit, from conceive, follows the pattern too.',
  },
  'cieling / ceiling / ceeling / celing': {
    why: "The vowel pair comes straight after the c, so it is ei: c-ei-ling. That is the 'except after c' part of the rule.",
    not: {
      cieling: 'This puts ie after the c. After a c, the order swaps to ei.',
      ceeling: 'This spells the sound with ee. The word uses e then i.',
      celing: 'This leaves out the i. The word needs both vowels, ei, after the c.',
    },
    tip: 'Look up at it and spell c, e, i: the ei comes straight after the c.',
  },
  'nieghbour / neighbour / neighbor / naighbour': {
    why: "The first syllable sounds like 'ay', and that sound is spelt ei, as in weigh and eight. British English also keeps the u in the ending -our.",
    not: {
      nieghbour: "This swaps the vowels to ie. The 'ay' sound is spelt ei: n-ei-gh.",
      neighbor: 'This is the American spelling. British English keeps the u before the final r.',
      naighbour: "This spells the 'ay' sound with ai. Here it is ei, followed by the silent gh.",
    },
    more: "The full rule runs 'i before e, except after c, or when sounding like ay, as in neighbour and weigh'.",
  },
  'feirse / fierse / fierce / feirce': {
    why: "The vowels make an 'ee' sound with no c before them, so 'i before e' applies: f-ie-rce. The ending is -ce, as in pierce.",
    not: {
      feirce: 'This swaps the vowels to ei. With no c before the pair, the order is ie.',
      fierse: 'This ends with -se. The word ends with -ce, like pierce.',
      feirse: 'This makes two mistakes: ei for ie, and -se for -ce.',
    },
    tip: 'Fierce and pierce rhyme and are spelt alike: -ierce.',
  },
  'niese / neese / neice / niece': {
    why: "The vowels make an 'ee' sound with no c before them, so 'i before e' applies: n-ie-ce.",
    not: {
      niese: 'This ends with -se. The word ends -ce, like piece.',
      neese: 'This spells the sound with ee. The word uses i then e.',
      neice: 'This swaps the vowels to ei. With no c before the pair, the order is ie.',
    },
    tip: 'A memory trick: a niece is nice, and both words have i before c.',
  },
  'mischif / mistchief / mischief / mischeif': {
    why: "The second syllable is spelt -chief, with ie: mis-chief. The c here belongs to ch, so 'except after c' does not apply.",
    not: {
      mischif: 'This leaves out the e. The ending is -chief, with ie.',
      mistchief: 'This adds a t. The word is mis plus -chief, with no t.',
      mischeif: 'This swaps the vowels to ei. The ending -chief has ie.',
    },
    more: 'The describing word is mischievous, with no i after the v. A common mistake is to add one: mischievious.',
  },
  'wierd / weird / weerd / weired': {
    why: "Weird breaks 'i before e'. No c comes before the pair, yet the spelling is ei: w-ei-rd. It has to be learnt as an exception.",
    not: {
      wierd:
        "This follows 'i before e', which is what you would expect here. But this word is an exception and uses ei.",
      weerd: 'This spells the sound with ee. The word uses e then i.',
      weired: 'This adds an e before the d. The word has five letters: w, e, i, r, d.',
    },
    more: 'Exceptions are easiest to learn as a list. Others outside this game include either, neither and caffeine.',
  },
  'seize / sieze / seeze / seaze': {
    why: "Seize breaks 'i before e'. The sound is 'ee' and there is no c, yet it is spelt ei: s-ei-ze.",
    not: {
      sieze: 'This follows the rule, but this word is an exception and uses ei.',
      seeze: 'This spells the sound with ee. The word uses e then i.',
      seaze: 'This spells the sound with ea. The word uses e then i.',
    },
    tip: 'Seize the e first: in this word the e comes before the i.',
  },
  'protien / protein / proteen / protian': {
    why: "Protein breaks 'i before e'. The vowels sound like 'ee' with no c before them, yet the spelling is ei: prot-ei-n.",
    not: {
      protien: 'This follows the rule, but this word is an exception and uses ei.',
      proteen: 'This spells the sound with ee. The word uses e then i.',
      protian: 'This uses ia. The word ends -ein, with e then i.',
    },
    more: "Protein comes from a Greek word meaning first, because proteins were thought to be the body's first and most important material.",
  },
  '“What ___ country was he going to, Bessie?” (foreign / forein / foriegn / forign)': {
    why: "Foreign breaks 'i before e': the vowels are ei, and a silent g follows them: for-eign.",
    not: {
      forein: 'This leaves out the silent g. The ending is -eign, as in sovereign.',
      foriegn: 'This swaps the vowels to ie. The ending is -eign.',
      forign: 'This leaves out the e. The ending is -eign, with e, i and a silent g.',
    },
    tip: 'Foreign and sovereign share the ending -eign: e, i, a silent g, then n.',
  },
  'Mary was too slim for her ___, but Blanche was moulded like a Dian. (hite / hieght / height / heigth)':
    {
      why: "The vowels make an 'eye' sound, not 'ee', so 'i before e' does not apply. The spelling is ei, followed by the silent gh and a t: h-eigh-t.",
      not: {
        hite: 'This spells the word as it sounds, like kite. The word keeps ei and a silent gh: h-eigh-t.',
        hieght: "This swaps the vowels to ie. The rule 'i before e' is for the 'ee' sound only.",
        heigth: 'This ends -th, as if it matched width and length. It ends -ght.',
      },
      more: 'Width and length end -th, so people expect the same here. This word ends -ght, like weight and eight.',
    },
  '"I have not ___ to think of that," said I. (lesiure / liesure / leasure / leisure)': {
    why: "Leisure breaks 'i before e': the vowels are ei, l-ei-sure. The sound is not 'ee' in British English, so the rule does not help.",
    not: {
      lesiure: 'This moves the i after the s. The ei comes together after the l.',
      liesure: 'This swaps the vowels to ie. The word is spelt with ei.',
      leasure: 'This spells the vowel sound with ea. The word uses e then i.',
    },
    tip: 'Leisure ends -sure, like measure and pleasure.',
  },
  'It was the one grain of ___ I had. (relief / releaf / releif / relif)': {
    why: "The vowels make an 'ee' sound with no c before them, so 'i before e' applies: rel-ie-f.",
    not: {
      releaf: 'This spells the sound with ea. The word uses i then e.',
      releif: 'This swaps the vowels to ei. With no c before the pair, the order is ie.',
      relif: 'This leaves out the e. The word needs both vowels, ie, before the f.',
    },
    more: 'The verb keeps the ie and changes f to v: relieve. Grief and grieve follow the same pattern.',
  },
  'This was indeed a godlike ___, and I ardently desired to become acquainted with it. (sience / scince / science / sceince)':
    {
      why: "Science is an exception: ie comes straight after a c, sc-ie-nce. The rule fails here because the vowels make two sounds, 'eye' and 'uh', not 'ee'.",
      not: {
        sience: 'This leaves out the c after the s. The word begins sc, like scene.',
        scince: 'This leaves out the e. The word has ie after the c: sc-ie-nce.',
        sceince:
          "This follows 'except after c', but the vowels here are not one 'ee' sound, so the order stays ie.",
      },
      tip: 'The ending -cient keeps ie after c too, as in ancient and proficient, and so does species.',
    },
  'And in many ways the animal method of doing things was more ___ and saved labour. (efficient / efficeint / eficient / effishent)':
    {
      why: "The ending -cient keeps ie straight after the c: effi-c-ie-nt. The vowels do not make one 'ee' sound, so 'except after c' does not apply. The f is doubled after ef.",
      not: {
        efficeint: 'This swaps the vowels to ei. In -cient the order is ie.',
        eficient: 'This has one f. The word begins eff-, with two.',
        effishent: "This spells the 'sh' sound as it is heard. In this ending it is spelt ci.",
      },
      tip: "Ancient and efficient both end -cient. The ci makes the 'sh' sound.",
    },
  'begining / beginning / beggining / begginning': {
    why: 'Begin is stressed on its last syllable, gin, and ends with one vowel and one consonant. So the n doubles before -ing: begin-n-ing.',
    not: {
      begining: 'This does not double the n. Because gin is stressed, the n doubles before -ing.',
      beggining: 'This doubles the g instead of the n. Only the last consonant, n, doubles.',
      begginning: 'This doubles the g as well as the n. Only the n doubles.',
    },
    tip: 'Say the word and listen for the stress. If the last syllable is stressed, double its final consonant: upset, upsetting.',
  },
  'prefered / preferred / preffered / prefferred': {
    why: 'Prefer is stressed on its last syllable, fer, and ends with one vowel and an r. So the r doubles before -ed: prefer-r-ed.',
    not: {
      prefered: 'This does not double the r. Because fer is stressed, the r doubles.',
      preffered: 'This doubles the f, not the r. Only the final consonant doubles.',
      prefferred: 'This doubles the f as well as the r. Only the r doubles.',
    },
    more: 'The stress matters. Add an ending that moves the stress to the front, and the doubling stops: confer becomes conference, with one r.',
  },
  'committed / comitted / commited / comited': {
    why: 'Commit is stressed on mit and ends with one vowel and a t, so the t doubles before -ed. The word also keeps the double m of its start: com-mit-ted.',
    not: {
      comitted: 'This has one m. The word begins com-mit, with two.',
      commited: 'This does not double the t. Because mit is stressed, the t doubles.',
      comited: 'This has one m and one t. The word has two of each.',
    },
  },
  'traveling / travelling / travaling / travling': {
    why: 'British English doubles a final l before -ing and -ed, even when the stress is not on the last syllable: trav-el, travel-l-ing.',
    not: {
      traveling: 'This is the American spelling, with one l. British English doubles the l.',
      travaling: 'This changes the e to a. The word is built on travel, with an e.',
      travling: 'This leaves out the e of travel. The root keeps all its letters.',
    },
    tip: 'In British English a final l doubles before -ed and -ing: fuel, label and signal all do.',
  },
  'gardenning / gardening / gardning / gardining': {
    why: 'Garden is stressed on its first syllable, gar, so the final n does not double before -ing: garden-ing.',
    not: {
      gardenning: 'This doubles the n. The stress is on gar, not den, so nothing doubles.',
      gardning: 'This leaves out the e of garden. The root keeps all its letters.',
      gardining: 'This changes the e of garden to i. The root keeps its own spelling.',
    },
    more: 'Compare open, opening and listen, listening: stress at the front means no doubling.',
  },
  'refer + -ed: refered / referred / reffered / refferred': {
    why: 'Refer is stressed on its last syllable, fer, and ends with one vowel and an r. So the r doubles before -ed: refer-r-ed.',
    not: {
      refered: 'This does not double the r. Because fer is stressed, the r doubles.',
      reffered: 'This doubles the f, not the r. Only the final consonant doubles.',
      refferred: 'This doubles the f as well as the r. Only the r doubles.',
    },
  },
  'commit + -ment: commitment / comitment / committment / commitmant': {
    why: 'The t of commit doubles only before an ending that starts with a vowel. -ment starts with a consonant, so the t stays single: commit-ment.',
    not: {
      comitment: 'This has one m. The word begins com-mit, with two m letters.',
      committment:
        'This doubles the t. Before -ment, which starts with a consonant, there is no doubling.',
      commitmant: 'This ends -mant. The ending is -ment.',
    },
    tip: 'Doubling happens before -ed, -ing, -er and other vowel endings, never before -ment, -ful or -ly.',
  },
  'admit + -ance: admittance / admittence / addmittance / admitance': {
    why: 'Admit is stressed on mit, and -ance starts with a vowel, so the t doubles: admit-t-ance.',
    not: {
      admittence: 'This ends -ence. The noun is admittance, with -ance.',
      addmittance: 'This doubles the d. The word begins ad-, with one d.',
      admitance:
        'This does not double the t. Because mit is stressed, the t doubles before a vowel ending.',
    },
  },
  'visit + -ed: visitid / visitted / visited / vissited': {
    why: 'Visit is stressed on its first syllable, vis, so the final t does not double before -ed: visit-ed.',
    not: {
      visitid: 'This ends -id. The ending is -ed.',
      visitted: 'This doubles the t. The stress is on vis, so nothing doubles.',
      vissited: 'This doubles the s. The word has one s.',
    },
    tip: 'Listen for the stress: VIS-it, so no doubling, but o-MIT, so omitted.',
  },
  'happen + -ed: happened / happend / hapened / happenned': {
    why: 'Happen is stressed on its first syllable, hap, so the final n does not double: happen-ed. The double p belongs to the root.',
    not: {
      happend: 'This leaves out the e of -ed. The full ending is -ed.',
      hapened: 'This has one p. The root is hap-pen, with two.',
      happenned: 'This doubles the n. The stress is on hap, so the n stays single.',
    },
  },
  'target + -ed: targeted / targitted / targited / targetted': {
    why: 'Target is stressed on its first syllable, tar, so the final t does not double: target-ed.',
    not: {
      targitted:
        'This changes the e to i and doubles the t. The root target keeps its spelling, and nothing doubles.',
      targited: 'This changes the e of target to i. The root keeps its own spelling.',
      targetted:
        'This doubles the t. The stress is on tar, so it stays single. This is a very common mistake.',
    },
    more: 'Budget and market work the same way: budgeted, marketing. Stress at the front means no doubling.',
  },
  'forget + -able: forgettable / forgettible / forgetable / forgetible': {
    why: 'Forget is stressed on get and ends with one vowel and a t, so the t doubles before -able: forget-t-able.',
    not: {
      forgettible:
        'This ends -ible. Forget is a whole English word, and whole words usually take -able.',
      forgetable:
        'This does not double the t. Because get is stressed, the t doubles before a vowel ending.',
      forgetible: 'This makes two mistakes: no doubling, and -ible for -able.',
    },
    tip: 'If the root is a whole word you know, the ending is usually -able.',
  },
  'control + -able: controlible / controllible / controllable / controlable': {
    why: 'Control is stressed on trol and ends with one vowel and an l, so the l doubles before -able: control-l-able.',
    not: {
      controlible:
        'This does not double the l and uses -ible. The word is control plus -able, with ll.',
      controllible: 'This ends -ible. Control is a whole word, so it takes -able.',
      controlable: 'This does not double the l. Because trol is stressed, the l doubles.',
    },
  },
  'occur + -ence: occurrence / ocurrence / occurence / occurrance': {
    why: 'Occur is stressed on cur, so the r doubles before a vowel ending: occur-r-ence. The ending is -ence, and the word keeps the double c of its start.',
    not: {
      ocurrence: 'This has one c. The word begins oc-cur, with two.',
      occurence:
        'This does not double the r. Because cur is stressed, the r doubles. This is a very common mistake.',
      occurrance: 'This ends -ance. The noun is spelt with -ence.',
    },
    tip: 'Double c, double r, then -ence. Say oc-CUR-rence to remember where the stress sits.',
  },
  'prefer + -ence: prefference / preferance / preference / preferrence': {
    why: 'Here two rules meet. The r would double after a stressed syllable, but adding -ence moves the stress to the front, PREF-er-ence. With no stress on fer, the r stays single.',
    not: {
      prefference: 'This doubles the f. The root prefer has one f.',
      preferance: 'This ends -ance. The noun is spelt with -ence.',
      preferrence:
        'This doubles the r, as in the past tense. But here the stress moves to pref, so the r stays single.',
    },
    more: 'Say each word: pre-FER, but PREF-erence. Doubling follows the stress of the new word.',
  },
  'He was lifting the latch: a sudden thought ___ to me. (occurred / ocurred / ocured / occured)': {
    why: 'Occur is stressed on its last syllable, cur, and ends with one vowel and an r, so the r doubles before -ed. The word also starts with two c letters: oc-cur-red.',
    not: {
      occured:
        'This does not double the r. Because cur is stressed, the r doubles. This is a very common mistake.',
      ocurred: 'This has one c. The word begins oc-cur, with two.',
      ocured: 'This has one c and one r. The word has two of each.',
    },
  },
  'excitement / exitement / excitemant / excitment': {
    why: 'Excite ends in a silent e, and -ment starts with a consonant, so the e stays: excite-ment.',
    not: {
      exitement: 'This leaves out the c. The root is ex-cite, with a c after the x.',
      excitemant: 'This ends -mant. The ending is -ment.',
      excitment:
        'This drops the e of excite. Before a consonant ending such as -ment, the e stays.',
    },
    tip: 'Drop a silent e before a vowel ending, keep it before a consonant ending: hope, hoping, but hope, hopeful.',
  },
  'noticable / noticeable / noticible / notisable': {
    why: "Notice ends in a soft c, said like s. Before -able the e stays, because a c before a keeps a hard 'k' sound. Keeping the e keeps the c soft: notice-able.",
    not: {
      noticable: 'This drops the e. Without it, c before a would sound like k.',
      noticible: 'This drops the e and uses -ible. The root notice keeps its e before -able.',
      notisable: "This spells the 's' sound with s. The root notice is spelt with a c.",
    },
    more: 'Trace and peace also end in a soft c, so they keep the e as well: traceable, peaceable.',
  },
  'courageous / couragous / curageous / courageus': {
    why: 'Courage ends with a soft g, said like j. Before -ous the e stays, because g before o would sound hard. Keeping the e keeps the g soft: courage-ous.',
    not: {
      couragous: 'This drops the e. Without it, g before o would sound hard, as in go.',
      curageous: 'This leaves out the o. The root is courage, beginning cour-.',
      courageus: 'This ends -eus. The ending is -ous.',
    },
    tip: 'A soft c or g keeps its e before a, o or u: gorgeous is another example.',
  },
  'arguement / argument / arguemant / argumant': {
    why: 'Argue drops its final e before -ment: argu-ment. This is an exception, because a silent e usually stays before a consonant ending.',
    not: {
      arguement:
        'This keeps the e of argue. This word is an exception and drops it. This is a very common mistake.',
      arguemant: 'This keeps the e and ends -mant. The word drops the e and ends -ment.',
      argumant: 'This ends -mant. The ending is -ment.',
    },
    more: "A few common words break the 'keep the e before a consonant' rule. Learn them as a group.",
  },
  'truely / truly / trully / truley': {
    why: 'True drops its final e before -ly: tru-ly. This is an exception, because a silent e usually stays before a consonant ending.',
    not: {
      truely: 'This keeps the e of true. This word is an exception and drops it.',
      trully: 'This doubles the l. The ending -ly has one l.',
      truley: 'This keeps the e and moves it to the end. The word is t, r, u, l, y.',
    },
    tip: 'Due becomes duly in the same way. These exceptions are worth learning by sight.',
  },
  'aweful / awfull / orful / awful': {
    why: 'Awe drops its final e before -ful: aw-ful. This is an exception, because a silent e usually stays before a consonant ending. The ending -ful has one l.',
    not: {
      aweful: 'This keeps the e of awe. This word is an exception and drops it.',
      awfull: 'This ends with two l letters. The ending -ful always has one.',
      orful: 'This spells the word as it sounds. It is built on awe, so it begins aw-.',
    },
  },
  'wholley / wholey / wholly / wholy': {
    why: 'Whole drops its e before -ly, and the l of whole meets the l of -ly, giving two l letters: whol-ly.',
    not: {
      wholley: 'This adds an e before the final y. The word ends -lly.',
      wholey: 'This keeps the e and has one l. The word drops the e and has two l letters.',
      wholy: 'This has one l. The l of whole and the l of -ly both stay.',
    },
    more: 'Wholly means completely. It is one of the few words that drops the e of its root before -ly.',
  },
  'desire + -able: desirable / dezirable / desireable / desirible': {
    why: 'Desire ends in a silent e, and -able starts with a vowel, so the e is dropped: desir-able.',
    not: {
      dezirable: "This spells the 'z' sound with z. The root desire is spelt with an s.",
      desireable: 'This keeps the e. Before a vowel ending, a silent e is dropped.',
      desirible: 'This ends -ible. Desire is a whole word, so it takes -able.',
    },
    tip: 'Drop the e before -able unless it keeps a c or g soft.',
  },
  'value + -able: valuble / valueable / valuible / valuable': {
    why: 'Value ends in a silent e, and -able starts with a vowel, so the e is dropped: valu-able.',
    not: {
      valuble: 'This leaves out the a of -able. The ending is -able in full.',
      valueable: 'This keeps the e. Before a vowel ending, the silent e is dropped.',
      valuible: 'This uses -ible. Value is a whole word, so it takes -able.',
    },
  },
  'change + -able: chaingeable / changeable / changible / changable': {
    why: 'Change ends with a soft g, said like j. Before -able the e stays, so that the g stays soft: change-able.',
    not: {
      chaingeable: 'This adds an i. The root is change, with a single a.',
      changible: 'This drops the e and uses -ible. The root keeps its e, and the ending is -able.',
      changable: 'This drops the e. Without it, g before a would sound hard, as in gate.',
    },
  },
  'noise + -y: noizy / noysy / noisey / noisy': {
    why: 'Noise ends in a silent e, and -y counts as a vowel ending, so the e is dropped: nois-y.',
    not: {
      noizy: "This spells the 'z' sound with z. The root noise is spelt with an s.",
      noysy: 'This spells the vowel sound oy. The root noise has oi.',
      noisey: 'This keeps the e. Before -y, a silent e is dropped.',
    },
    more: 'Ice becomes icy and stone becomes stony in the same way.',
  },
  'outrage + -ous: outragous / outrageous / outragious / outrageus': {
    why: 'Outrage ends with a soft g, said like j. Before -ous the e stays, so that the g stays soft: outrage-ous.',
    not: {
      outragous: 'This drops the e. Without it, g before o would sound hard, as in go.',
      outrageus: 'This ends -eus. The ending is -ous.',
      outragious: 'This adds an i, as in religious. The root is outrage, and it keeps its e.',
    },
  },
  'manage + -able: manageable / managable / manageble / managible': {
    why: 'Manage ends with a soft g, said like j. Before -able the e stays, so that the g stays soft: manage-able.',
    not: {
      managible: 'This drops the e and uses -ible. The root keeps its e, and the ending is -able.',
      manageble: 'This leaves out the a of -able. The ending is -able in full.',
      managable: 'This drops the e. Without it, g before a would sound hard.',
    },
  },
  'advantage + -ous: advantagious / advantagous / advantageous / advantageus': {
    why: 'Advantage ends with a soft g. Before -ous the e stays, so that the g stays soft: advantage-ous. Two rules meet here: drop the e before a vowel, but keep it after a soft g.',
    not: {
      advantagious: 'This adds an i, as in religious. The root keeps its e before -ous.',
      advantagous: 'This drops the e. Without it, g before o would sound hard.',
      advantageus: 'This ends -eus. The ending is -ous.',
    },
  },
  'I love my cousin tenderly and ___. (sincerly / sincerley / sinserely / sincerely)': {
    why: 'Sincere keeps its final e before -ly, because -ly starts with a consonant: sincere-ly.',
    not: {
      sincerly: 'This drops the e of sincere. Before -ly, a consonant ending, the e stays.',
      sincerley: 'This moves the e to the end. The root sincere stays whole, then -ly.',
      sinserely: "This spells the second 's' sound with s. The root sincere has a c.",
    },
    tip: 'Yours sincerely ends a letter that begins with a name. The adverb keeps the whole root, then adds -ly.',
  },
  'happyness / happiness / hapiness / happines': {
    why: 'Happy ends in a consonant then y, so the y changes to i before -ness: happi-ness. The double p and the double s both stay.',
    not: {
      happyness: 'This keeps the y. After a consonant, y changes to i before an ending.',
      hapiness: 'This has one p. The root happy has two.',
      happines: 'This has one s at the end. The ending -ness has two.',
    },
  },
  'beautyful / beautiful / beutiful / beautifull': {
    why: 'Beauty ends in a consonant then y, so the y changes to i before -ful: beauti-ful. The ending -ful has one l.',
    not: {
      beautyful: 'This keeps the y. After a consonant, y changes to i before an ending.',
      beutiful: 'This leaves out the a. The root is beauty, spelt b, e, a, u.',
      beautifull: 'This ends with two l letters. The ending -ful always has one.',
    },
    tip: "Say it in your head as 'be-a-u-ti-ful' to keep the vowels in order.",
  },
  'business / busness / bussiness / buisness': {
    why: 'The word is built on busy, and the y changes to i before -ness: busi-ness. The ending -ness has two s letters.',
    not: {
      busness: 'This leaves out the i. The root busy keeps a vowel there, changed from y to i.',
      bussiness: 'This doubles the first s. The root busy has one.',
      buisness: 'This puts the u and i the wrong way round. The word is b, u, s, i.',
    },
    tip: "Think 'busy-ness' with the y turned to i.",
  },
  'loneliness / lonelyness / lonliness / lonelines': {
    why: 'Lonely ends in a consonant then y, so the y changes to i before -ness: loneli-ness. The e of lone stays.',
    not: {
      lonelyness: 'This keeps the y. After a consonant, y changes to i before -ness.',
      lonliness: 'This drops the e of lone. The root lonely keeps it.',
      lonelines: 'This has one s at the end. The ending -ness has two.',
    },
  },
  'hurry + -ed: hurrid / hurryed / huried / hurried': {
    why: 'Hurry ends in a consonant then y, so the y changes to i before -ed: hurri-ed. The double r stays.',
    not: {
      hurrid: 'This leaves out the e of -ed. The ending is -ied.',
      hurryed: 'This keeps the y. After a consonant, y changes to i before -ed.',
      huried: 'This has one r. The root hurry has two.',
    },
  },
  'carry + -age: carriage / carrige / cariage / carryage': {
    why: 'Carry ends in a consonant then y, so the y changes to i before -age: carri-age.',
    not: {
      carrige: 'This leaves out the a of -age. The ending is -iage.',
      cariage: 'This has one r. The root carry has two.',
      carryage: 'This keeps the y. After a consonant, y changes to i before an ending.',
    },
    more: 'Marriage comes from marry in the same way.',
  },
  'pity + -ful: pitiful / pitifull / pittiful / pityful': {
    why: 'Pity ends in a consonant then y, so the y changes to i before -ful: piti-ful. The ending -ful has one l.',
    not: {
      pitifull: 'This ends with two l letters. The ending -ful always has one.',
      pittiful: 'This doubles the t. The root pity has one.',
      pityful: 'This keeps the y. After a consonant, y changes to i before an ending.',
    },
  },
  'mercy + -less: mercyless / mercilless / merciless / mersiless': {
    why: 'Mercy ends in a consonant then y, so the y changes to i before -less: merci-less.',
    not: {
      mercyless: 'This keeps the y. After a consonant, y changes to i before an ending.',
      mercilless: 'This doubles the l in the middle. The ending -less starts with one l.',
      mersiless: "This spells the 's' sound with s. The root mercy has a c.",
    },
  },
  'employ + -er: employer / imployer / emploier / employor': {
    why: 'Employ ends in a vowel then y, so the y stays before -er: employ-er.',
    not: {
      employor: 'This ends -or. A person who employs is an employer, with -er.',
      imployer: 'This begins im-. The root employ begins em-.',
      emploier: 'This changes y to i. After a vowel, the y stays.',
    },
    tip: 'Change y to i only after a consonant. After a vowel, as in play and enjoy, the y stays.',
  },
  'journey + -s: journies / journeys / journeyes / jurneys': {
    why: 'Journey ends in a vowel then y, so the plural just adds s: journey-s.',
    not: {
      journies:
        'This changes y to ies. That happens only after a consonant; here e comes before the y.',
      journeyes: 'This adds -es. A word ending in y after a vowel just adds s.',
      jurneys: 'This leaves out the o. The root journey begins jour-.',
    },
    more: 'Keys, valleys and donkeys follow the same pattern: vowel then y, so just add s.',
  },
  'decision / desicion / desision / decission': {
    why: "The word comes from decide, and the ending sounds like 'zhun'. That sound is spelt -sion: deci-sion. The c of decide stays.",
    not: {
      desicion: 'This swaps the c and the s. The root decide has its c first, then -sion.',
      desision: "This spells the first 's' sound with s. The root decide is spelt with a c.",
      decission: "This doubles the s. The 'zhun' ending is -sion, with one s.",
    },
    more: 'A verb ending -de often gives a noun ending -sion: divide gives division, and collide gives collision.',
  },
  'expansion / expantion / expancion / expanssion': {
    why: 'The word comes from expand. A verb ending -nd often makes its noun with -sion: expan-sion.',
    not: {
      expantion: 'This uses -tion. After the n of expand, this noun takes -sion.',
      expancion: 'This uses -cion. The ending is -sion.',
      expanssion: 'This doubles the s. The ending is -sion, with one s.',
    },
    more: 'Extend gives extension and comprehend gives comprehension in the same way.',
  },
  'discussion / discusion / discustion / discution': {
    why: 'The word comes from discuss, which already ends in ss. Add -ion and the ss stays: discuss-ion.',
    not: {
      discusion: 'This has one s. The root discuss ends in ss, and both stay.',
      discustion: 'This adds a t. The root discuss has no t: discuss plus -ion.',
      discution: 'This uses -tion and drops an s. The root discuss keeps ss, then -ion.',
    },
    tip: 'If the verb ends in -ss, the noun usually ends -ssion: express gives expression.',
  },
  'musician / musicion / musition / musitian': {
    why: 'A person whose job comes from a word ending in -ic usually takes -cian: music, musi-cian. The c of music stays.',
    not: {
      musicion: "This ends -cion. A person's job from a word in -ic ends -cian.",
      musition: 'This uses -tion and loses the c of music. A job from -ic ends -cian.',
      musitian: 'This loses the c of music. The c stays, then -ian.',
    },
    tip: 'Think of the person: -cian is for people, as in magician and optician.',
  },
  'electrision / electricion / electrician / electritian': {
    why: 'A person whose job comes from a word ending in -ic takes -cian: electric, electri-cian. The c of electric stays.',
    not: {
      electrision: "This uses -sion. A person's job from a word in -ic ends -cian.",
      electricion: 'This ends -cion. The ending for a person is -cian.',
      electritian: 'This loses the c of electric. The c stays, then -ian.',
    },
  },
  'posession / possesion / possession / posesion': {
    why: 'The word comes from possess, which has two pairs of s: po-ss-e-ss. Add -ion and both pairs stay: possess-ion.',
    not: {
      posession: 'This has one s in the first pair. The root possess has ss twice.',
      possesion: 'This has one s in the second pair. Both pairs of ss stay.',
      posesion: 'This has one s in each pair. The word has four s letters in all.',
    },
    tip: 'Count the letters s: four in all, two pairs of two.',
  },
  'attension / attention / attencion / atention': {
    why: 'The word comes from attend, but this noun takes -tion: atten-tion. The double t at the start stays.',
    not: {
      attension:
        'This uses -sion. This noun ends -tion, though other words from verbs in -nd take -sion.',
      attencion: 'This uses -cion. The ending is -tion.',
      atention: 'This has one t at the start. The word begins at-ten, with two.',
    },
    more: 'Words from verbs ending -nd can go either way, so this one must be learnt by sight. Intend gives intention, with -tion too.',
  },
  'telivision / television / televistion / televicion': {
    why: "The ending sounds like 'zhun', and that sound is spelt -sion: televi-sion. The word joins tele, far, and vision, seeing.",
    not: {
      telivision: 'This changes the second e to i. The word begins tele-, as in telephone.',
      televistion: 'This adds a t. The ending is -sion.',
      televicion: "This uses -cion. The 'zhun' sound is spelt -sion.",
    },
    tip: "The 'zhun' sound is almost always -sion: vision, revision, explosion.",
  },
  'permission / permision / permittion / premission': {
    why: 'The word comes from permit. Words ending -mit make their nouns with -ssion: permit, permi-ssion.',
    not: {
      permision: 'This has one s. The ending is -ssion.',
      permittion: 'This keeps the t of permit and adds -tion. Words in -mit change to -mission.',
      premission: 'This swaps the r and e. The word begins per-, as in permit.',
    },
    more: 'Admit and omit follow the same pattern: admission, omission.',
  },
  'confution / confushion / confussion / confusion': {
    why: "The word comes from confuse, and the ending sounds like 'zhun'. That sound is spelt -sion: confu-sion.",
    not: {
      confution: "This uses -tion. The 'zhun' ending is spelt -sion.",
      confushion: "This spells the ending as it might sound. The 'zhun' ending is -sion.",
      confussion: "This doubles the s. The 'zhun' ending has one s.",
    },
    tip: 'Verbs ending -use make nouns in -usion: fuse, fusion.',
  },
  'politition / politicion / polititian / politician': {
    why: 'A person whose work comes from a word ending in -ic takes -cian: politic, politi-cian.',
    not: {
      politition: "This uses -tion and loses the c. A person's job from -ic ends -cian.",
      politicion: 'This ends -cion. The ending for a person is -cian.',
      polititian: 'This loses the c. The c of politic stays, then -ian.',
    },
  },
  'competetion / compitition / competision / competition': {
    why: 'The word comes from compete, and the ending is -tion. The vowels follow the root: com-pe-ti-tion.',
    not: {
      competetion: 'This changes the i to e. The third vowel is i: compe-ti-tion.',
      compitition: 'This changes the e to i. The root compete gives com-pe-.',
      competision: 'This uses -sion. The ending is -tion.',
    },
    tip: 'Think of compete, then change its ending: compet-ition.',
  },
  'suspicion / suspition / suspiscion / suspision': {
    why: "Suspicion ends -cion, one of the very few English words that do. The c before -ion makes a 'sh' sound.",
    not: {
      suspition: 'This uses -tion. This word is one of the few with -cion.',
      suspiscion: 'This adds an s before the c. The word is sus-pi-cion.',
      suspision: 'This uses -sion. The ending is -cion.',
    },
    more: 'The describing word keeps the c: suspicious.',
  },
  'theifs / thiefs / thieves / thievs': {
    why: 'The singular ends in -f, and this plural changes f to v and adds -es: thie-ves. The ie stays, because there is no c before it.',
    not: {
      theifs: 'This swaps the vowels to ei and keeps the f. The plural is ie, then -ves.',
      thiefs: 'This keeps the f and adds s. This word changes f to v: -ves.',
      thievs: 'This leaves out the e of -ves. The plural ends -ves in full.',
    },
  },
  'loafves / loavs / loaves / loafes': {
    why: 'Loaf ends in -f, and its plural changes f to v and adds -es: loa-ves.',
    not: {
      loafves:
        'This keeps the f and adds -ves as well. The f changes to v, so only the v stays: loa-ves.',
      loavs: 'This leaves out the e. The plural ends -ves in full.',
      loafes: 'This keeps the f and adds -es. The f changes to v.',
    },
    more: 'Calf, half and wolf change in the same way: calves, halves, wolves.',
  },
  'cheifs / chiefs / chieves / chiefes': {
    why: 'Chief is an exception: its plural keeps the f and just adds s: chief-s.',
    not: {
      cheifs: 'This swaps the vowels to ei. With no c before the pair, the order is ie.',
      chieves:
        'This changes f to v, as many -f words do. This word is an exception and keeps the f.',
      chiefes: 'This adds -es. The plural just adds s.',
    },
    more: 'Proof and chef also keep the f: proofs, chefs.',
  },
  'clives / cliffs / clifs / cliffes': {
    why: 'A word ending in -ff just adds s to make its plural: cliff-s. The ff never changes to v.',
    not: {
      clives: 'This changes ff to v. Words ending in -ff keep it and add s.',
      clifs: 'This has one f. The word ends in -ff.',
      cliffes: 'This adds -es. The plural just adds s.',
    },
    tip: 'Words ending in -ff, such as sniff and cuff, just add s.',
  },
  'People of many faiths hold strong religious ___. (beliefs / beliefes / believes / beleifs)': {
    why: 'The sentence needs a noun: the things people hold to be true. The noun is belief, and its plural keeps the f: belief-s.',
    not: {
      beliefes: 'This adds -es. The plural just adds s.',
      believes:
        'This is a correct word, but it is the verb: she believes. The sentence needs the plural noun, which keeps the f.',
      beleifs: 'This swaps the vowels to ei. With no c before the pair, the order is ie.',
    },
    tip: 'The noun has f, and the verb has v: one belief, two beliefs, but she believes.',
  },
  'color / colour / coler / colur': {
    why: 'In British English, this word ends in -our: colour. The American spelling drops the u.',
    not: {
      color: 'This is the American spelling. British English keeps the u.',
      coler: 'This ends -er and leaves out the u. The ending is -our.',
      colur: 'This leaves out the o before the u. The ending is -our.',
    },
    more: 'Other British words ending -our include flavour, honour and harbour.',
  },
  'favorite / favourite / faverite / favourit': {
    why: 'In British English the word is built on favour, with a u: favour plus -ite. The American spelling drops the u.',
    not: {
      favorite: 'This is the American spelling. British English keeps the u.',
      faverite: 'This changes the vowel before the r to e. The root is favour.',
      favourit: 'This leaves out the final e. The ending is -ite.',
    },
  },
  'centre / center / senter / sentre': {
    why: 'In British English, words like this end in -re, not -er: c-e-n-t-r-e.',
    not: {
      center: 'This is the American spelling. British English ends the word in -re.',
      senter: 'This starts with s and ends -er. The word starts with c and ends -re.',
      sentre: "This starts with s. The word starts with c, though the first sound is 's'.",
    },
    more: 'Other British words ending -re: metre, litre, fibre and sombre.',
  },
  'a licence to drive / a license to drive / a licanse to drive / a lisence to drive': {
    why: 'In British English the noun, a document, is licence, with a c. A driving licence is a thing, so it takes a c.',
    not: {
      'a license to drive':
        "This is the verb in British English, as in 'to license a shop'. The document is a noun: licence.",
      'a licanse to drive':
        'This changes the second vowel to a and the c to s. The noun is licence.',
      'a lisence to drive': "This spells the first 's' sound with s. The word begins lic-.",
    },
    tip: 'Noun with c, verb with s, as with advice and advise.',
  },
  'behaviour / behavour / behavior / behaveour': {
    why: 'The word is built on behave, and in British English the ending is -our, with a u: behavi-our.',
    not: {
      behavour: 'This leaves out the i. The ending is -iour.',
      behavior: 'This is the American spelling. British English keeps the u.',
      behaveour: 'This keeps the e of behave. The ending is -iour, with an i.',
    },
  },
  'theater / theatre / theetre / theatur': {
    why: 'In British English, words like this end in -re: the-a-t-r-e. The American spelling ends -er.',
    not: {
      theater: 'This is the American spelling. British English ends the word in -re.',
      theetre: 'This spells the first vowels ee. The word begins thea-.',
      theatur: 'This ends -ur. The ending is -re.',
    },
  },
  'deffence / defance / defence / defense': {
    why: 'In British English the noun ends -ence, with a c. The American spelling uses s.',
    not: {
      deffence: 'This doubles the f. The word has one f.',
      defance: 'This ends -ance. The ending is -ence.',
      defense: 'This is the American spelling. British English uses a c.',
    },
    more: 'Offence and pretence follow the same British pattern.',
  },
  'catalogue / catalog / cataloge / catologue': {
    why: 'In British English the word ends -logue, with u and e: catalo-gue. The American spelling drops them.',
    not: {
      catalog: 'This is the American spelling. British English ends -logue.',
      cataloge: 'This leaves out the u. The ending is -logue.',
      catologue: 'This changes the second a to o. The word is cat-a-logue.',
    },
    more: 'Dialogue and prologue end the same way in British English.',
  },
  'football practise / football practice / football practece / football practiss': {
    why: 'Football practice is a thing, a training session, so the word is a noun. In British English the noun is spelt with a c.',
    not: {
      'football practise':
        "This is the verb, as in 'I practise on Fridays.' Here the word names a thing, so it is the noun, with a c.",
      'football practece': 'This changes the i to e. The word ends -ice.',
      'football practiss': 'This spells the end as it sounds. The noun ends -ice.',
    },
    tip: "If you can put 'the' in front, it is the noun, with c. If you can put 'to' in front, it is the verb, with s.",
  },
  'practice the song / practise the song / practece the song / practiss the song': {
    why: 'To practise the song is an action, so the word is a verb. In British English the verb is spelt with an s.',
    not: {
      'practice the song':
        "This is the noun, as in 'a practice'. Here the word is an action, so it is the verb, with s.",
      'practece the song': 'This changes the i to e. The verb ends -ise.',
      'practiss the song': 'This spells the end as it sounds. The verb ends -ise.',
    },
  },
  'analyze / annalyse / analyse / analise': {
    why: 'In British English the verb ends -yse, matching the noun analysis: analy-se.',
    not: {
      analyze: 'This is the American spelling. British English ends the word -yse.',
      annalyse: 'This doubles the n. The word begins an-, with one n.',
      analise: 'This uses i for the y. The word keeps the y of analysis.',
    },
    tip: 'Paralyse ends the same way. In an exam essay, the British spelling is the one to use.',
  },
  'pajamas / pijamas / pyjamas / pyjammas': {
    why: 'In British English the word is spelt with a y after the p: py-jamas. The American spelling uses a.',
    not: {
      pajamas: 'This is the American spelling. British English has py-.',
      pijamas: 'This uses i for the y. The British spelling is py-.',
      pyjammas: 'This doubles the m. The word has one m.',
    },
  },
  'aluminuim / aluminium / aluminum / alluminium': {
    why: 'In British English the metal ends -ium, like many chemical elements: alumin-ium.',
    not: {
      aluminuim: 'This swaps the i and u at the end. The ending is -ium.',
      aluminum: 'This is the American spelling. British English adds an i: -ium.',
      alluminium: 'This doubles the l. The word begins al-, with one l.',
    },
    more: 'Sodium, calcium and magnesium end -ium too, which is why the British name matches them.',
  },
  'manoeuver / manoeuvre / manouvre / maneuver': {
    why: 'In British English the word keeps its French spelling: man-oeu-vre, with oeu and an -re ending.',
    not: {
      manoeuver: 'This ends -er. The British ending is -re.',
      manouvre: 'This leaves out the e of oeu. The British spelling has o, e, u.',
      maneuver: 'This is the American spelling. British English keeps oeu and -re.',
    },
    tip: "Remember the vowels as 'o, e, u': man-oeu-vre.",
  },
  'cancel + -ed: canceled / canselled / cancelled / cancled': {
    why: 'British English doubles a final l before -ed: cancel-l-ed.',
    not: {
      canceled: 'This is the American spelling, with one l. British English doubles it.',
      canselled: "This spells the 's' sound with s. The root cancel has a c.",
      cancled: 'This drops the e of cancel. The root keeps its letters, then -led.',
    },
  },
  'humour + -ous: humorous / humourous / humerous / humorus': {
    why: 'Here the u of humour is dropped before -ous: humor-ous. Many British -our words lose their u before -ous.',
    not: {
      humourous:
        'This keeps the u of humour. Before -ous it is dropped. This is a common British mistake.',
      humerous: 'This changes the o to e. The word is hum-or-ous.',
      humorus: 'This ends -us. The ending is -ous.',
    },
    more: 'Glamour and vigour do the same: glamorous, vigorous. But honour keeps its u in honourable.',
  },
  'model + -ing: moddeling / modelling / modeling / modaling': {
    why: 'British English doubles a final l before -ing: model-l-ing.',
    not: {
      moddeling: 'This doubles the d and not the l. Only the final l doubles.',
      modeling: 'This is the American spelling, with one l. British English doubles it.',
      modaling: 'This changes the e of model to a. The root keeps its spelling.',
    },
  },
  'skill + -ful: skillfull / skilful / skilfull / skillful': {
    why: 'In British English the word joins skill and -ful with one l in each place: skil-ful. The double l of skill is cut to one.',
    not: {
      skillfull:
        'This keeps ll from skill and adds ll at the end. The British spelling has one l in each place.',
      skilfull: 'This ends with two l letters. The ending -ful has one.',
      skillful: 'This is the American spelling. British English has one l after ski-.',
    },
    more: 'Wilful follows the same British pattern.',
  },
  'wool + -en: woolen / woolin / woollen / wollen': {
    why: 'British English doubles the l of wool before -en: wool-l-en.',
    not: {
      woolen: 'This is the American spelling, with one l. British English doubles it.',
      woolin: 'This ends -in. The ending is -en.',
      wollen: 'This has one o. The root wool has two.',
    },
  },
  'fulfil + -ment: fulfilment / fulfillment / fullfilment / fulfilmant': {
    why: 'In British English the verb is fulfil, with one l at the end, and -ment adds no doubling: fulfil-ment.',
    not: {
      fullfilment: 'This doubles the l of ful-. The British spelling has one l in each place.',
      fulfilmant: 'This ends -mant. The ending is -ment.',
      fulfillment: 'This is the American spelling, with ll. British English has one l.',
    },
    tip: 'Two rules meet: the British root has a single l, and -ment never causes doubling.',
  },
  'jewel + -ery: jewellery / jewelry / jewelery / jewlery': {
    why: 'British English doubles the l of jewel before -ery: jewel-l-ery.',
    not: {
      jewelry: 'This is the American spelling. British English has ll and -ery.',
      jewelery: 'This has one l. British English doubles it.',
      jewlery: 'This leaves out the e of jewel. The root keeps its spelling.',
    },
    more: 'Say all three syllables, jew-el-lery, to keep every letter.',
  },
  'tomorow / tommorow / tomorrow / tommorrow': {
    why: 'The word has one m and two r letters: to-mor-row.',
    not: {
      tomorow: 'This has one r. The word has two: -rrow.',
      tommorow: 'This doubles the m and not the r. It is one m, two r.',
      tommorrow: 'This doubles the m as well as the r. It has one m.',
    },
    tip: 'Tom has one m and borrows two r letters: to-mor-row.',
  },
  'address / adres / adress / addres': {
    why: 'The word has two d letters and two s letters: a-dd-re-ss.',
    not: {
      adres: 'This has one d and one s. The word has two of each.',
      adress: 'This has one d. The word begins add-.',
      addres: 'This has one s at the end. The word ends -ess.',
    },
    tip: 'You add a postcode to an address: both begin add-.',
  },
  'acomodation / acommodation / accomodation / accommodation': {
    why: 'The word has two c letters and two m letters: a-cc-o-mm-odation.',
    not: {
      acomodation: 'This has one c and one m. The word has two of each.',
      acommodation: 'This has one c. The word begins acc-.',
      accomodation:
        'This has one m. The word has -mm- in the middle. This is one of the most misspelt words in English.',
    },
    tip: 'It is big enough to fit two c letters and two m letters.',
  },
  'recomend / reccommend / recommend / reccomend': {
    why: 'The word has one c and two m letters: re-co-mm-end.',
    not: {
      recomend: 'This has one m. The word has -mm-.',
      reccommend: 'This doubles the c. The word has one c.',
      reccomend: 'This doubles the c and not the m. It is one c, two m.',
    },
    tip: 'Think re plus commend: one c, two m.',
  },
  '“Is it ___ to change my frock?” (necessary / neccesary / necesary / neccessary)': {
    why: 'The word has one c and two s letters: ne-c-e-ss-ary.',
    not: {
      neccesary: 'This doubles the c and has one s. It is one c, two s.',
      necesary: 'This has one s. The word has -ss-.',
      neccessary: 'This doubles the c. The word has one c.',
    },
    tip: 'One collar and two sleeves: one c, two s.',
  },
  'I felt a little ___. (embarassed / embarrased / embarased / embarrassed)': {
    why: 'The word has two r letters and two s letters: emba-rr-a-ss-ed.',
    not: {
      embarassed: 'This has one r. The word has -rr-. This is a very common mistake.',
      embarrased: 'This has one s. The word has -ss-.',
      embarased: 'This has one r and one s. The word has two of each.',
    },
    tip: 'When you are red, you go really red: two r letters, and two s letters too.',
  },
  'He was especially ___ with the sheep. (sucessful / succesful / successfull / successful)': {
    why: 'The word is built on success, which has two c letters and two s letters, then -ful with one l: su-cc-e-ss-ful.',
    not: {
      sucessful: 'This has one c. The root has -cc-.',
      succesful: 'This has one s in the middle. The root ends -ss.',
      successfull: 'This ends with two l letters. The ending -ful has one.',
    },
  },
  'I will not be ___. (interupted / intterupted / interrupted / interruped)': {
    why: 'The word has two r letters: inte-rr-upted. It is inter, between, plus rupt, break.',
    not: {
      interupted: 'This has one r. The word has -rr-.',
      intterupted: 'This doubles the t and not the r. It is one t, two r.',
      interruped: 'This leaves out the t before -ed. The root ends -rupt.',
    },
    more: 'Rupt means break, as in rupture and erupt. To interrupt is to break in between.',
  },
  'But I suppose you had no ___. (opportunity / oppurtunity / oportunity / opportunaty)': {
    why: 'The word has two p letters: o-pp-ortunity. The vowel after the r is u: oppor-tu-nity.',
    not: {
      oppurtunity: 'This changes the o to u after pp. The word is op-por-tu-nity.',
      oportunity: 'This has one p. The word begins opp-.',
      opportunaty: 'This changes the i to a near the end. The ending is -ity.',
    },
    tip: 'Break it up: op, por, tu, ni, ty.',
  },
  'I see no ___ for that. (occasion / ocasion / ocassion / occassion)': {
    why: 'The word has two c letters and one s: o-cc-a-s-ion.',
    not: {
      ocasion: 'This has one c. The word begins occ-.',
      ocassion: 'This has one c and two s. It is the other way round.',
      occassion: 'This doubles the s. The word has one s.',
    },
    tip: 'Two c letters, one s: occasion.',
  },
  'Say whatever your memory suggests is true; but add nothing and ___ nothing. (exaggerate / exaggarate / exagerate / exagerrate)':
    {
      why: 'The word has two g letters: exa-gg-erate.',
      not: {
        exaggarate: 'This changes the e after gg to a. The word is ex-ag-ger-ate.',
        exagerate: 'This has one g. The word has -gg-.',
        exagerrate:
          'This doubles the r and not the g. The word has two g letters and one r: ex-ag-ger-ate.',
      },
      tip: 'To exaggerate is to make something bigger, and the g grows into two.',
    },
  '“Where do you see the ___?” he asked suddenly. (neccessity / necessity / necesity / neccesity)':
    {
      why: 'The word has one c and two s letters, like the adjective it comes from: ne-c-e-ss-ity.',
      not: {
        neccessity: 'This doubles the c. The word has one c.',
        necesity: 'This has one s. The word has -ss-.',
        neccesity: 'This doubles the c and has one s. It is one c, two s.',
      },
    },
  'They had never kept to the main road if a ___ side-street would serve their turn. (paralel / parallel / parrallel / paralell)':
    {
      why: 'The word has two l letters in the middle and one at the end: para-ll-el.',
      not: {
        paralel: 'This has one l in the middle. The word has -ll- there.',
        parrallel: 'This doubles the r. The word has one r.',
        paralell: 'This puts the double l at the end. The ll is in the middle: para-ll-el.',
      },
      tip: 'The two l letters in the middle stand side by side, like parallel lines.',
    },
  'Yes, a violent ___ was in progress. (quorrel / quarel / quarrell / quarrel)': {
    why: 'The word has two r letters and one l: qua-rr-el.',
    not: {
      quorrel: 'This changes the a to o. The word begins qua-.',
      quarel: 'This has one r. The word has -rr-.',
      quarrell: 'This doubles the l at the end. The word ends with one l.',
    },
    more: 'In British English the l doubles before -ed and -ing: quarrelled, quarrelling.',
  },
  'Wednsday / Wensday / Wednesday / Wendesday': {
    why: "The word keeps a silent d from its old meaning, Woden's day: We-d-nes-day.",
    not: {
      Wednsday: 'This leaves out the e after the d. The word is Wed-nes-day.',
      Wensday: 'This leaves out the silent d. The word is spelt Wed-.',
      Wendesday: 'This puts the n before the d. The order is d, then n: Wed-nes-day.',
    },
    tip: 'Say it as it is spelt in your head: Wed-nes-day.',
  },
  'Febrary / Feburary / Febuary / February': {
    why: 'The word has an r after the b that many people do not say: Feb-r-uary.',
    not: {
      Febrary: 'This leaves out the u. The word is Feb-ru-ary.',
      Feburary: 'This moves the r after the u. The order is b, r, u.',
      Febuary: 'This leaves out the first r. The word is Feb-ru-ary.',
    },
    tip: 'Say the r when you spell it: Feb-ru-ary.',
  },
  'government / goverment / govenment / governmant': {
    why: 'The word is govern plus -ment: govern-ment. The n of govern stays, even when it is not said.',
    not: {
      goverment: 'This leaves out the n of govern. The root keeps all its letters.',
      govenment: 'This leaves out the r. The root is govern.',
      governmant: 'This ends -mant. The ending is -ment.',
    },
    tip: 'Think of the verb first: to govern, then add -ment.',
  },
  'enviroment / enviornment / environment / envirement': {
    why: 'The word is environ plus -ment: environ-ment. The n of environ stays, even when it is not said.',
    not: {
      enviroment: 'This leaves out the n of environ. This is one of the most common misspellings.',
      enviornment: 'This swaps the r and the o. The root is en-vi-ron.',
      envirement: 'This changes on to e. The root is environ.',
    },
    tip: 'There is iron in the environment: en-v-iron-ment.',
  },
  'scisors / sissors / scissors / scissers': {
    why: 'The word begins with sc, with a silent c, and has two s letters in the middle: sc-i-ss-ors.',
    not: {
      scisors: 'This has one s in the middle. The word has -ss-.',
      sissors: 'This leaves out the silent c. The word begins sc-.',
      scissers: 'This ends -ers. The ending is -ors.',
    },
  },
  'column / colomn / collumn / colum': {
    why: 'The word ends with a silent n after the m: colu-mn.',
    not: {
      colomn: 'This changes the u to o. The word is col-umn.',
      collumn: 'This doubles the l. The word has one l.',
      colum: 'This leaves out the silent n. The word ends -mn.',
    },
    more: 'Autumn, hymn and condemn also end with a silent n after m.',
  },
  'muscel / musscle / muscle / mussle': {
    why: 'The word has a silent c after the s: mus-c-le. It comes from a Latin word for a little mouse.',
    not: {
      muscel: 'This ends -el. The ending is -le.',
      musscle: 'This doubles the s. The word has one s, then a silent c.',
      mussle: 'This leaves out the silent c and doubles the s. The word is mus-cle.',
    },
    more: 'The silent c shows in muscular, where it is said: mus-cu-lar.',
  },
  'subtel / subtle / sutle / suttle': {
    why: "The word has a silent b: su-b-tle. It is said 'suttle', but the b stays in the spelling.",
    not: {
      subtel: 'This ends -el. The ending is -le.',
      sutle: 'This leaves out the silent b. The word is sub-tle.',
      suttle: 'This spells the word as it sounds. It has a silent b, not a double t.',
    },
    more: 'Debt and doubt also have a silent b.',
  },
  'Once again the animals were ___ of a vague uneasiness. (consious / concious / conscous / conscious)':
    {
      why: "The word has sc in the middle and ends -ious: con-sc-ious. The sc makes a 'sh' sound.",
      not: {
        consious: 'This leaves out the c after the s. The middle is -sc-.',
        concious: 'This leaves out the s. The middle is -sc-. This is a very common mistake.',
        conscous: 'This leaves out the i. The ending is -ious.',
      },
      tip: 'Conscious has sc in the middle, as conscience does.',
    },
  'I looked at him with ___. (surprise / suprise / suprize / surprize)': {
    why: 'The word has an r in its first syllable that many people do not say: su-r-prise. It ends -ise, never -ize.',
    not: {
      suprise: 'This leaves out the first r. The word begins sur-.',
      suprize: 'This leaves out the first r and ends -ize. The word is sur-prise.',
      surprize: 'This ends -ize. The word always ends -ise.',
    },
    tip: 'Say the first r: SUR-prise.',
  },
  'I ardently desired the acquisition of ___. (knowlege / nowledge / knoledge / knowledge)': {
    why: 'The word is know plus -ledge, with a silent k and a d before the g: know-ledge.',
    not: {
      knowlege: 'This leaves out the d. The ending is -ledge, like a ledge.',
      nowledge: 'This leaves out the silent k. The word begins know-.',
      knoledge: 'This leaves out the w. The word begins with the whole of know.',
    },
    tip: 'Know plus a ledge: know-ledge.',
  },
  'Does he know his real ___? (charecter / caracter / character / charactor)': {
    why: "The word begins with ch said as 'k', and ends -er: ch-ar-ac-ter.",
    not: {
      charecter: 'This changes the a after r to e. The word is char-ac-ter.',
      caracter: 'This leaves out the h. The word begins ch-, though it sounds like k.',
      charactor: 'This ends -or. The ending is -er.',
    },
    more: "Chorus and chemist also spell a 'k' sound with ch. Many such words came into English from Greek.",
  },
  'If I ___ them, that is enough for you. (garantee / guarentee / guarantee / gaurantee)': {
    why: 'The word begins gua-, with a silent u, and ends -tee: gua-ran-tee.',
    not: {
      garantee: 'This leaves out the silent u. The word begins gua-.',
      guarentee: 'This changes the a after r to e. The word is gua-ran-tee.',
      gaurantee: 'This swaps the u and a. The word begins g, u, a.',
    },
    tip: 'Guard begins the same way: g, u, a.',
  },
  'Come as soon as you can on the ___ of this. (recipt / reciept / receipt / receit)': {
    why: 'The word has ei after the c, and a silent p before the t: rec-ei-pt.',
    not: {
      recipt: 'This leaves out the e. After a c the pair is ei.',
      reciept: 'This puts ie after the c. After a c the pair is ei.',
      receit: 'This leaves out the silent p. The word ends -pt.',
    },
    more: 'The p is silent, but it shows in the related word reception, where it is said.',
  },
  'And what meaning is that in their ___ depth? (solemn / sollemn / solem / solumn)': {
    why: 'The word ends with a silent n after the m: sole-mn.',
    not: {
      sollemn: 'This doubles the l. The word has one l.',
      solem: 'This leaves out the silent n. The word ends -mn.',
      solumn: 'This changes the e to u. The word is sol-emn.',
    },
    more: 'The n is said in solemnity, which shows why it is there.',
  },
  'defenitely / definitely / definately / definitly': {
    why: 'The word is built on finite: de-finite-ly. Every vowel after the f is i, and the e of finite stays before -ly.',
    not: {
      defenitely: 'This changes the first i to e. The word is built on finite: de-fin-ite.',
      definately:
        'This changes the second i to a. The root finite has i, never a. This is one of the most common misspellings.',
      definitly: 'This drops the e of finite. Before -ly, a consonant ending, the e stays.',
    },
    tip: 'Find the word finite inside it: de-FINITE-ly.',
  },
  'librery / library / libary / libery': {
    why: 'The word has an r after the b that many people do not say: lib-r-ary.',
    not: {
      librery: 'This ends -ery. The ending is -ary.',
      libary: 'This leaves out the first r. The word is li-brar-y.',
      libery: 'This leaves out the r and ends -ery. The word is lib-r-ary.',
    },
    more: 'The word comes from the Latin liber, a book. Keep the br together: lib-rary.',
  },
  'gramar / grammor / grammar / grammer': {
    why: 'The word has two m letters and ends -ar: gra-mm-ar.',
    not: {
      gramar: 'This has one m. The word has -mm-.',
      grammor: 'This ends -or. The ending is -ar.',
      grammer: 'This ends -er. The ending is -ar. This is a very common mistake.',
    },
    tip: "Don't mar your writing with bad grammar: the word ends -mar.",
  },
  'calandar / calendar / calander / callendar': {
    why: 'The word has e after the l, and ends -ar: cal-en-dar.',
    not: {
      calandar: 'This changes the e to a. The word is cal-en-dar.',
      calander: 'This changes the e to a and ends -er. The word is cal-en-dar.',
      callendar: 'This doubles the l. The word has one l.',
    },
    tip: 'The vowels go a, e, a: c-a-l-e-n-d-a-r.',
  },
  'vegetible / vegetable / vegtable / vegatable': {
    why: 'The word has four syllables, veg-e-ta-ble, and every one is spelt, even the e that many people do not say.',
    not: {
      vegetible: 'This ends -ible. The ending is -able.',
      vegtable: 'This leaves out the e after veg. The word is veg-e-ta-ble.',
      vegatable: 'This changes the second e to a. The word is veg-e-ta-ble.',
    },
  },
  'categery / catagory / category / catogory': {
    why: 'The vowels in this word go a, e, o: cat-e-gor-y.',
    not: {
      categery: 'This changes the o to e. The vowels go a, e, o.',
      catagory:
        'This changes the first e to a. The word is cat-e-gory. This is a very common mistake.',
      catogory: 'This changes the e to o. The word is cat-e-gory.',
    },
  },
  'I lay in that ___ building across the courtyard. (seperete / separate / separete / seperate)': {
    why: "The word has a in the middle: sep-a-rate. The unstressed vowel sounds like 'uh', so it is easy to spell it e.",
    not: {
      seperete: 'This changes both a letters to e. The word is sep-a-rate.',
      separete: 'This changes the last a to e. The word ends -rate.',
      seperate:
        'This changes the middle a to e. This is one of the most common misspellings in English.',
    },
    tip: 'There is a rat in separate: sep-a-RAT-e.',
  },
  'We must not make him ___. (desperate / desprate / desparate / desperite)': {
    why: "The vowels go e, e, a: des-per-ate. The middle vowel is said 'uh', so it is easy to spell it a.",
    not: {
      desprate: 'This leaves out the middle e. The word is des-per-ate.',
      desparate: 'This changes the middle e to a. The word is des-per-ate.',
      desperite: 'This changes the a to i. The word ends -ate.',
    },
    more: 'The word is linked to despair: someone desperate has almost lost hope.',
  },
  'But I knew I should ___ you at last. (persuaid / persuade / pursuade / presuade)': {
    why: 'The word begins per-, then -suade, with a u after the s: per-suade.',
    not: {
      persuaid: 'This ends -aid. The ending is -ade.',
      pursuade: 'This begins pur-. The word begins per-.',
      presuade: 'This swaps the r and e. The word begins per-.',
    },
    more: 'The noun keeps the same start: persuasion.',
  },
  'I have good dispositions; my life has been hitherto harmless, and in some degree beneficial; but a fatal ___ clouds their eyes, and where they ought to see a feeling and kind friend, they behold only a detestable monster. (prejedice / prejudise / prejudice / predjudice)':
    {
      why: 'The word is pre, before, and a root meaning judging: pre-ju-dice. A prejudice is a judgement made before you know, as the Creature fears the cottagers will judge him by his looks.',
      not: {
        prejedice: 'This changes the u to e. The middle is -ju-, as in judge.',
        prejudise: 'This ends -ise. The ending is -ice.',
        predjudice: 'This adds a d before the j. The word is pre plus judice, with no extra d.',
      },
      tip: 'Judge has a d before its g, but prejudice has no d before its j: pre-ju-dice.',
    },
  'Her ___ however was unexpectedly relieved. (curiocity / curiosity / curiousity / curiosaty)': {
    why: 'The word comes from curious, but the u of -ous is dropped before -ity: curi-os-ity.',
    not: {
      curiocity: "This uses c for the 's' sound. The word has s: curi-os-ity.",
      curiousity:
        'This keeps the u of curious. Before -ity it is dropped. This is a very common mistake.',
      curiosaty: 'This changes the i to a near the end. The ending is -ity.',
    },
    more: 'Generous and generosity work the same way: the u of -ous drops before -ity.',
  },
  '“Well, Jane, do you know me?” asked the ___ voice. (familiar / familar / famillar / familier)': {
    why: 'The word comes from family, and keeps the i of family before -ar: famil-i-ar.',
    not: {
      famillar: 'This doubles the l and leaves out the i. The word is fa-mil-i-ar.',
      familar: 'This leaves out the i before -ar. The word is fa-mil-i-ar.',
      familier: 'This ends -ier. The ending is -iar.',
    },
    tip: 'Something familiar is known like family: famil-i-ar.',
  },
  'There were articles in most of the papers upon the Norwood ___. (tragidy / tragady / tragedy / tradgedy)':
    {
      why: 'The word has no d before the g, and its vowels go a, e, y: tra-ge-dy.',
      not: {
        tragidy: 'This changes the e to i. The word is tra-ge-dy.',
        tragady: 'This changes the e to a. The word is tra-ge-dy.',
        tradgedy: 'This adds a d before the g. The word is tra-ge-dy.',
      },
      more: "The describing word is tragic. A Shakespeare tragedy, such as Macbeth, ends in the hero's death.",
    },
  'responsable / responsible / responcible / responsibel': {
    why: 'The word ends -ible: respons-ible. The root respons- is not a whole English word, and such roots usually take -ible.',
    not: {
      responsable: 'This ends -able. This word ends -ible. Responsable is the French spelling.',
      responcible: "This spells the 's' sound with c. The root is respons-.",
      responsibel: 'This ends -ibel. The ending is -ible.',
    },
    tip: 'If what comes before the ending is not a word on its own, try -ible.',
  },
  'vissible / visible / visibel / visable': {
    why: 'The word ends -ible: vis-ible. The root vis-, seeing, is not a whole English word, so the ending is -ible.',
    not: {
      vissible: 'This doubles the s. The word has one s.',
      visibel: 'This ends -ibel. The ending is -ible.',
      visable: 'This ends -able. This word ends -ible.',
    },
    more: 'Vis- means seeing, as in visual and invisible.',
  },
  'terribel / terible / terrable / terrible': {
    why: 'The word has two r letters and ends -ible: te-rr-ible. The root terr-, as in terror, is not a whole word, so the ending is -ible.',
    not: {
      terribel: 'This ends -ibel. The ending is -ible.',
      terible: 'This has one r. The word has -rr-, as in terror.',
      terrable: 'This ends -able. This word ends -ible.',
    },
  },
  'comfterble / comftable / comfortible / comfortable': {
    why: 'The word is comfort plus -able: comfort-able. Comfort is a whole English word, so the ending is -able.',
    not: {
      comfterble:
        'This spells the word as it is often said. Spell the whole root comfort, then -able.',
      comftable: 'This leaves out the or of comfort. The root keeps all its letters.',
      comfortible: 'This ends -ible. Comfort is a whole word, so it takes -able.',
    },
    tip: "People often say 'comf-ta-ble', but the spelling keeps comfort whole.",
  },
  'avaliable / availible / available / availabel': {
    why: 'The word is avail plus -able: avail-able. Avail is a whole English word, so the ending is -able.',
    not: {
      avaliable: 'This moves the i after the l. The root avail has ai together.',
      availible: 'This ends -ible. Avail is a whole word, so it takes -able.',
      availabel: 'This ends -abel. The ending is -able.',
    },
  },
  'inevitible / inevitabel / inevitable / inevatable': {
    why: 'The word ends -able: in-evit-able. It means certain to happen.',
    not: {
      inevitible: 'This ends -ible. This word ends -able.',
      inevitabel: 'This ends -abel. The ending is -able.',
      inevatable: 'This changes the i after v to a. The word is in-ev-i-ta-ble.',
    },
    more: 'The root is a Latin word meaning to avoid: something inevitable cannot be avoided.',
  },
  'acessible / accessible / accesible / accessable': {
    why: 'The word has two c letters and two s letters, and ends -ible: a-cc-e-ss-ible.',
    not: {
      acessible: 'This has one c. The word begins acc-.',
      accesible: 'This has one s. The word has -ss-.',
      accessable: 'This ends -able. This word ends -ible.',
    },
    more: 'Words built on a root ending -ss often take -ible: admissible and compressible are others.',
  },
  'experiense / experiance / experience / expirience': {
    why: 'The word ends -ence, and the vowels go e, e, i, e: ex-pe-ri-ence.',
    not: {
      experiense: 'This ends -ense. The ending is -ence, with a c.',
      experiance: 'This ends -ance. The ending is -ence.',
      expirience: 'This changes the e after p to i. The word is ex-pe-ri-ence.',
    },
    tip: 'Experiment and experience begin the same way: ex-pe-ri.',
  },
  'patiance / patience / pacience / paitence': {
    why: 'The word comes from patient, and the noun ends -ence: pati-ence.',
    not: {
      patiance: 'This ends -ance. The noun from patient ends -ence.',
      pacience: "This uses c for the 'sh' sound. The word has ti: pa-tience.",
      paitence: 'This swaps the i to before the t. The word is pa-ti-ence.',
    },
    tip: 'Adjectives ending -ent make nouns ending -ence: patient, patience.',
  },
  'independance / indipendence / independense / independence': {
    why: 'The word comes from independent, and the noun ends -ence: in-de-pen-dence. Every vowel after the first is e.',
    not: {
      independance: 'This ends -ance. The noun ends -ence. This is a very common mistake.',
      indipendence: 'This changes the e after d to i. The word is in-de-pen-dence.',
      independense: 'This ends -ense. The ending is -ence, with a c.',
    },
  },
  'But I abhor the dull routine of ___. (existence / exsistence / existense / existance)': {
    why: 'The word comes from exist, and the noun ends -ence: exist-ence.',
    not: {
      exsistence:
        'This adds an s after the x. The word is exist plus -ence, with no s between the x and the i.',
      existense: 'This ends -ense. The ending is -ence, with a c.',
      existance: 'This ends -ance. The noun ends -ence. This is a very common mistake.',
    },
    tip: 'Exist, then -ence: exist-ence.',
  },
  'I am a stranger, without ___ in this place. (acquantance / acquaintence / aquaintance / acquaintance)':
    {
      why: 'The word has a c before the q, and the noun ends -ance: ac-quaint-ance.',
      not: {
        acquantance: 'This leaves out the i of quaint. The root is ac-quaint.',
        acquaintence: 'This ends -ence. This noun ends -ance.',
        aquaintance: 'This leaves out the c before the q. The word begins acq-.',
      },
      more: 'Acquire and acquit also put c before q.',
    },
  'The ___ of Justine was calm. (apperance / appearance / appearanse / appearence)': {
    why: 'The word comes from appear, and the noun ends -ance: appear-ance. The double p stays.',
    not: {
      apperance: 'This leaves out the a of appear. The root keeps all its letters.',
      appearanse: 'This ends -anse. The ending is -ance, with a c.',
      appearence: 'This ends -ence. This noun ends -ance.',
    },
    tip: 'Appear, then -ance: appear-ance.',
  },
  'What is the chief ___? (difference / diference / differance / diffrence)': {
    why: 'The word comes from differ, and the noun ends -ence: differ-ence. The double f and the e before the r both stay.',
    not: {
      diference: 'This has one f. The root differ has two.',
      differance: 'This ends -ance. The noun ends -ence.',
      diffrence: 'This leaves out the e of differ. Say all three syllables: dif-fer-ence.',
    },
  },
  'asistant / assisstant / assistant / assistent': {
    why: 'The word has two s letters at the start and ends -ant: a-ss-ist-ant.',
    not: {
      asistant: 'This has one s at the start. The word begins ass-.',
      assisstant: 'This doubles the second s. The word has ss, then a single s.',
      assistent: 'This ends -ent. This word ends -ant.',
    },
    more: 'Assist gives assistance and assistant, both with a.',
  },
  'pleasent / plesant / pleasant / pleasint': {
    why: 'The word comes from please, keeps the ea, and ends -ant: pleas-ant.',
    not: {
      pleasent: 'This ends -ent. This word ends -ant.',
      plesant: 'This leaves out the a of please. The word keeps ea.',
      pleasint: 'This ends -int. The ending is -ant.',
    },
  },
  'conveniant / convinient / convenient / convenent': {
    why: 'The word ends -ient: con-ven-i-ent. The vowels go o, e, i, e.',
    not: {
      conveniant: 'This ends -iant. This word ends -ient.',
      convinient: 'This changes the e after v to i. The word is con-ven-ient.',
      convenent: 'This leaves out the i. The ending is -ient.',
    },
  },
  'relivant / relevent / relevant / revelant': {
    why: 'The word has l before v, and ends -ant: rel-ev-ant.',
    not: {
      relivant: 'This changes the e after l to i. The word is rel-ev-ant.',
      relevent: 'This ends -ent. This word ends -ant.',
      revelant: 'This swaps the l and the v. The order is rel-ev-, then -ant.',
    },
    tip: 'In an essay, keep only what is rel-e-vant to the question.',
  },
  'Are you an ___ woman? (indipendent / independint / independent / independant)': {
    why: 'The word ends -ent, and every vowel after the first is e: in-de-pen-dent.',
    not: {
      indipendent: 'This changes the e after d to i. The word is in-de-pen-dent.',
      independint: 'This ends -int. The ending is -ent.',
      independant: 'This ends -ant. The word ends -ent. This is a very common mistake.',
    },
    tip: 'In and depend, then -ent: in-depend-ent.',
  },
  'Still, as I ascended higher, the valley assumed a more ___ and astonishing character. (magnifficent / magnificant / magnifisent / magnificent)':
    {
      why: 'The word ends -ent, and has a single f: mag-ni-fi-cent.',
      not: {
        magnifficent: 'This doubles the f. The word has one.',
        magnificant: 'This ends -ant. The word ends -ent.',
        magnifisent: "This spells the 's' sound with s. The ending is -cent.",
      },
      more: 'Magnify and magnificent share the root magn-, meaning great.',
    },
  'Natural affection only, of all the sentiments, has ___ power over me. (permenant / pernament / permanant / permanent)':
    {
      why: 'The word ends -ent, and the vowels go e, a, e: per-ma-nent.',
      not: {
        permenant: 'This swaps the vowels: e where a goes. The word is per-ma-nent.',
        pernament: 'This swaps the m and n. The order is per-ma-nent.',
        permanant: 'This ends -ant. The word ends -ent.',
      },
    },
  'temperary / tempory / temporery / temporary': {
    why: 'The word has an o before the r and ends -ary: tem-po-rar-y. Every syllable is spelt, even if some are not said.',
    not: {
      temperary: 'This changes the o to e. The word is tem-po-rary.',
      tempory: 'This leaves out the ar. The word ends -orary.',
      temporery: 'This ends -ery. The ending is -ary.',
    },
    tip: 'Say all four syllables when you spell it: tem-po-ra-ry.',
  },
  'cemetry / semetery / cemetary / cemetery': {
    why: 'Every vowel after the c is e: c-e-m-e-t-e-r-y.',
    not: {
      cemetry: 'This leaves out the last e. The word is ce-me-te-ry.',
      semetery: 'This begins with s. The word begins with c, though it sounds like s.',
      cemetary: 'This ends -ary. The word ends -ery. This is a very common mistake.',
    },
    tip: 'Picture three letters e in a row of headstones: c-e-m-e-t-e-r-y.',
  },
  'secretery / secretary / secratary / secertary': {
    why: 'The word is built on secret and ends -ary: secret-ary.',
    not: {
      secretery: 'This ends -ery. The ending is -ary.',
      secratary: 'This changes the e of secret to a. The root secret stays whole.',
      secertary: 'This swaps the r and e. The root is secret.',
    },
    tip: 'A good secretary keeps a secret: secret-ary.',
  },
  'No feature in the scene was ___, but all was pleasing. (extrordinary / extraordinary / extraordinery / extraordinairy)':
    {
      why: 'The word is extra plus ordinary, and both parts keep all their letters: extra-ordinary.',
      not: {
        extrordinary: 'This drops the a of extra. Both parts stay whole.',
        extraordinery: 'This ends -ery. The ending is -ary, as in ordinary.',
        extraordinairy: 'This adds an i before the r. The ending is -ary.',
      },
      tip: 'It is literally extra plus ordinary: keep the a where they meet.',
    },
  'delitious / delicous / delisious / delicious': {
    why: "The 'sh' sound before -ous is spelt ci: deli-cious.",
    not: {
      delitious: "This uses ti for the 'sh' sound. This word has ci.",
      delicous: 'This leaves out the i. The ending is -cious.',
      delisious: "This uses s. The 'sh' sound here is spelt ci.",
    },
  },
  'ambicious / ambishous / ambitous / ambitious': {
    why: 'The word comes from ambition, which has a t, so the describing word keeps ti: ambi-tious.',
    not: {
      ambicious: 'This uses ci. The noun is ambition, with a t, so the ending is -tious.',
      ambishous: 'This spells the ending as it sounds. It is -tious.',
      ambitous: 'This leaves out the i. The ending is -tious.',
    },
    tip: 'Look at the noun: if it ends -tion, the describing word usually ends -tious. Caution gives cautious.',
  },
  'offitial / official / oficial / offical': {
    why: 'The word comes from office, which has a c, so the ending is -cial. The double f of office stays: o-ff-icial.',
    not: {
      offitial: 'This uses ti. The root office has a c, so the ending is -cial.',
      oficial: 'This has one f. The root office has two.',
      offical: 'This leaves out the i. The ending is -cial.',
    },
    tip: 'Look at the root: a c in the root, as in office, gives -cial.',
  },
  'artifitial / artificial / artifishal / artifical': {
    why: 'The word comes from art and the Latin for making, and ends -cial: arti-fi-cial.',
    not: {
      artifitial: 'This uses ti. The ending is -cial.',
      artifishal: 'This spells the ending as it sounds. It is -cial.',
      artifical: 'This leaves out the i. The ending is -cial.',
    },
  },
  'But even human sympathies were not ___ to satisfy his eager mind. (sufficent / sufficient / suffiscient / suficient)':
    {
      why: 'The word has two f letters, and the ending -cient keeps ie after the c: su-ff-i-cient.',
      not: {
        sufficent: 'This leaves out the i. The ending is -cient.',
        suffiscient: 'This adds an s. The ending is -cient.',
        suficient: 'This has one f. The word begins suff-.',
      },
      more: "The ci makes a 'sh' sound, as in ancient. The vowels are not one 'ee' sound, so 'except after c' does not apply.",
    },
  'dis- + satisfied: disatisfied / disatisfyed / dissatisfyed / dissatisfied': {
    why: 'When dis- meets a word starting with s, both s letters stay: dis-satisfied. The y of satisfy has already changed to i before -ed.',
    not: {
      disatisfied: 'This drops one s. The prefix dis- keeps its s, and satisfied keeps its own.',
      disatisfyed: 'This drops one s and keeps the y. It is dis plus satisfied, in full.',
      dissatisfyed: 'This keeps the y. After a consonant, y changes to i before -ed.',
    },
    tip: 'A prefix never changes the word it joins: just put the two together.',
  },
  'mis- + spell: misspel / mispell / mispel / misspell': {
    why: 'When mis- meets a word starting with s, both s letters stay: mis-spell.',
    not: {
      misspel: 'This drops an l. The word spell keeps its ll.',
      mispell: 'This drops one s. The prefix mis- keeps its s, and spell keeps its own.',
      mispel: 'This drops an s and an l. It is mis plus spell, in full.',
    },
    tip: 'It would be awkward to misspell misspell: mis plus spell, nothing lost.',
  },
  'un- + necessary: unneccessary / unecessary / unnecesary / unnecessary': {
    why: 'When un- meets a word starting with n, both n letters stay: un-necessary. The word itself keeps one c and two s.',
    not: {
      unneccessary: 'This doubles the c. The root has one c and two s.',
      unecessary: 'This drops one n. The prefix un- keeps its n, and the root keeps its own.',
      unnecesary: 'This has one s. The root has -ss-.',
    },
  },
  'ir- + regular: irregular / iregular / irregulor / irreguler': {
    why: 'Before r, the prefix in- becomes ir-, so the word has two r letters: ir-regular.',
    not: {
      irregulor: 'This ends -or. The root regular ends -ar.',
      iregular: 'This has one r. The prefix ir- keeps its r, and regular keeps its own.',
      irreguler: 'This ends -er. The root regular ends -ar.',
    },
    more: 'In- changes to match the next letter: im- before m or p, il- before l, ir- before r.',
  },
  'il- + legal: illegle / ilegle / ilegal / illegal': {
    why: 'Before l, the prefix in- becomes il-, so the word has two l letters at the start: il-legal.',
    not: {
      illegle: 'This ends -le. The root legal ends -al.',
      ilegle: 'This has one l at the start and ends -le. It is il plus legal.',
      ilegal: 'This has one l at the start. The prefix il- keeps its l, and legal keeps its own.',
    },
  },
  'im- + mature: inmature / immachure / immature / imature': {
    why: 'Before m, the prefix in- becomes im-, so the word has two m letters: im-mature.',
    not: {
      inmature: 'This keeps in-. Before m, in- changes to im-.',
      immachure: 'This spells the ending as it sounds. The root is mature.',
      imature: 'This has one m. The prefix im- keeps its m, and mature keeps its own.',
    },
    tip: 'Im- before m gives mm: immortal and immobile follow the same rule.',
  },
  'un- + natural: unnatrual / unatural / unnaturel / unnatural': {
    why: 'When un- meets a word starting with n, both n letters stay: un-natural.',
    not: {
      unnatrual: 'This swaps the r and u. The root is nat-ur-al.',
      unatural: 'This drops one n. The prefix un- keeps its n, and natural keeps its own.',
      unnaturel: 'This ends -el. The root natural ends -al.',
    },
  },
  'I confess that I am surprised and ___. (disapointed / disappointed / dissapointed / dissappointed)':
    {
      why: 'The prefix dis- joins appoint, which has two p letters: dis-appointed. There is one s, because appoint starts with a, not s.',
      not: {
        disapointed: 'This has one p. The root appoint has two.',
        dissapointed: 'This doubles the s and drops a p. It is dis plus appointed: one s, two p.',
        dissappointed: 'This doubles the s. Appoint starts with a, so there is one s.',
      },
      tip: "Dis plus the word it joins: one s, then appoint's two p letters.",
    },
  'Three days later Mollie ___. (dissappeared / disapeared / dissapeared / disappeared)': {
    why: 'The prefix dis- joins appear, which has two p letters: dis-appeared. There is one s, because appear starts with a.',
    not: {
      disapeared: 'This has one p. The root appear has two.',
      dissappeared: 'This doubles the s. Appear starts with a, so there is one s.',
      dissapeared: 'This doubles the s and drops a p. It is dis plus appeared: one s, two p.',
    },
  },
  'greatful / graitful / gratefull / grateful': {
    why: 'The word comes from an old word, grate, meaning pleasing or thankful, not from great: grate-ful. The ending -ful has one l.',
    not: {
      greatful:
        'This uses great. The word is spelt grate-, from an old word meaning thankful. This is a very common mistake.',
      graitful: 'This spells the vowel ai. The word begins grate-.',
      gratefull: 'This ends with two l letters. The ending -ful has one.',
    },
    more: 'Gratitude comes from the same root, and it too is spelt grat-.',
  },
  'accidentally / accidentlly / accidentaly / accidentially': {
    why: 'The word is accidental plus -ly: accidental-ly. The al stays, which gives two l letters.',
    not: {
      accidentlly: 'This leaves out the a of -al. The word is accident-al-ly.',
      accidentaly: 'This has one l. The al of accidental meets the l of -ly.',
      accidentially:
        'This adds an i after the t, as if the word ended like essentially. It is accidental plus -ly, with no i.',
    },
    tip: 'Make the -al word first, then add -ly: accidental, accidentally.',
  },
  'basicly / basically / basiclly / basicaly': {
    why: 'Words ending -ic make their adverbs with -ally: basic-ally.',
    not: {
      basicly: 'This adds -ly to basic. Words ending -ic take -ally.',
      basiclly: 'This leaves out the a. The ending is -ally.',
      basicaly: 'This has one l. The ending -ally has two.',
    },
    more: 'Magic gives magically and frantic gives frantically, in the same way.',
  },
  "A ___ compares one thing to another using 'like' or 'as'. (simile / similee / similie / simily)":
    {
      why: 'The word ends with a single e after the l: si-mi-le. It is said with three syllables.',
      not: {
        similee: 'This ends -ee. The word ends with one e.',
        similie:
          'This adds an i before the final e. The word is s-i-m-i-l-e. This is a very common mistake.',
        simily: 'This ends -y. The word ends -e.',
      },
      more: 'It is linked to similar: a simile shows that two things are similar.',
    },
  "A ___ says that one thing is another, as in 'the classroom was a zoo'. (metapher / metafor / metaphor / metaphore)":
    {
      why: "The word has ph for the 'f' sound and ends -or: meta-phor. It comes from Greek.",
      not: {
        metapher: 'This ends -er. The ending is -or.',
        metafor: "This uses f. The 'f' sound here is spelt ph, as in many words from Greek.",
        metaphore: 'This adds an e at the end. The word ends -phor.',
      },
      tip: "Ph for 'f' is a sign of a Greek word: phrase and phone are others.",
    },
  'Each ___ of the poem has four lines. (stanza / stansa / stanzer / stanser)': {
    why: 'The word ends with a: stan-za. It comes from Italian, where it means a room.',
    not: {
      stansa: 'This uses s. The word has a z.',
      stanzer: 'This spells the end as it sounds in many British accents. It ends with a single a.',
      stanser: 'This uses s and ends -er. The word is stan-za.',
    },
    more: "A stanza is a 'room' of a poem: a group of lines set apart from the next.",
  },
  'The ___ is the voice that tells the story. (narrater / narratour / narrator / narator)': {
    why: 'The word has two r letters at the start and ends -or: na-rr-at-or.',
    not: {
      narrater: 'This ends -er. The ending is -or.',
      narratour: 'This ends -our. The ending is -or.',
      narator: 'This has one r at the start. The word has -rr-, as in narrative.',
    },
  },
  'Short, sharp sentences build a tense ___. (atmosphere / atmosfere / atmousphere / atmosphear)': {
    why: "The word joins atmos, vapour, and sphere, a ball: atmo-sphere. The 'f' sound is spelt ph.",
    not: {
      atmosfere: 'This uses f. The word ends -sphere, with ph.',
      atmousphere: 'This adds a u. The word begins atmo-.',
      atmosphear: 'This ends -ear. The ending is -ere, as in sphere.',
    },
    tip: 'Find sphere at the end: atmo-sphere.',
  },
  'The ___ rises as the footsteps come closer. (tension / tention / tenshion / tencion)': {
    why: 'The word comes from tense, and the noun ends -sion: ten-sion.',
    not: {
      tention: 'This uses -tion. After the n of tense, the ending is -sion.',
      tenshion: 'This spells the ending as it sounds. It is -sion.',
      tencion: 'This uses -cion. The ending is -sion.',
    },
    tip: 'Tense ends in s, so the noun keeps an s: ten-sion.',
  },
  'The ___ of fire runs through the whole poem. (imagery / imagry / immagery / imigery)': {
    why: 'The word is image plus -ry: image-ry. The e of image stays.',
    not: {
      imagry: 'This drops the e of image. The word is image-ry.',
      immagery: 'This doubles the m. The root image has one.',
      imigery: 'This changes the a to i. The root is image.',
    },
    tip: 'Spell image first, then add -ry.',
  },
  "A ___ speech uses evidence to change the listener's mind. (perswasive / persuasive / persuassive / pursuasive)":
    {
      why: 'The word comes from persuade: the d changes to s before -ive, giving per-sua-sive.',
      not: {
        pursuasive: 'This begins pur-. The word begins per-.',
        perswasive: "This spells the 'sw' sound with w. The word has su.",
        persuassive: 'This doubles the s. The word has one s before -ive.',
      },
    },
  "The writer's use of ___ in 'buzz' and 'hiss' lets the reader hear the bees. (onomatopoea / onamatopoeia / onomatopoeia / onomatopeia)":
    {
      why: "The word comes from Greek for 'name making'. It is o-no-ma-to-poe-ia, with the vowels oe together near the end.",
      not: {
        onomatopoea: 'This leaves out the i near the end. The word ends -poeia.',
        onamatopoeia: 'This changes the o after n to a. The word begins o-no-ma.',
        onomatopeia: 'This leaves out the o of -poeia. The ending is p, o, e, i, a.',
      },
      tip: 'Split it into parts: on-o-mat-o-poe-ia. The ending is p, o, e, i, a.',
    },
  'Shakespeare gives Hamlet a ___, so the audience hears his private thoughts. (solilaquy / soliloqy / soliloquey / soliloquy)':
    {
      why: "The word comes from Latin for 'talking alone': so-li-lo-quy. It ends -quy.",
      not: {
        solilaquy: 'This changes the o after l to a. The word is so-li-lo-quy.',
        soliloqy:
          'This leaves out the u after the q. In English, q is almost always followed by u.',
        soliloquey: 'This adds an e. The word ends -quy.',
      },
      tip: 'Solo means alone: a soliloquy is a speech made alone.',
    },
  'Shakespeare was a ___ as well as a poet. (plawright / playwrite / playwright / playright)': {
    why: 'A playwright is a maker of plays. Wright is an old word for a maker, as in wheelwright: play-wright.',
    not: {
      plawright: 'This leaves out the y of play.',
      playwrite:
        'This uses write. A playwright is a maker, a wright, not a writer. This is a very common mistake.',
      playright: 'This leaves out the w of wright.',
    },
    more: "Shipwright and wheelwright are other makers' names that keep the old word wright.",
  },
  "The ___ of 'light' and 'dark' in one line makes the contrast sharp. (juxtapostion / juxtiposition / juxtaposition / juxstaposition)":
    {
      why: 'The word joins juxta, beside, and position: juxta-position. It means placing two things side by side.',
      not: {
        juxtapostion: 'This leaves out the i in -sition. The word ends with position in full.',
        juxtiposition: 'This changes the a to i. The word begins juxta-.',
        juxstaposition: 'This adds an s. The word begins jux-ta.',
      },
      tip: 'Find position at the end: juxta plus position.',
    },
  'Giving the wind human feelings is an example of ___. (personifacation / personification / personnification / personafication)':
    {
      why: 'The word is built on person: person-i-fi-cation. The vowels after person go i, i, a.',
      not: {
        personafication: 'This changes the first i to a. The word is person-i-fi-cation.',
        personifacation: 'This changes the second i to a. The word is person-i-fi-cation.',
        personnification: 'This doubles the n. The root person has one.',
      },
      tip: 'Person, then -ify, then -cation: personify gives personification.',
    },
  'The ___ of the poem is steady, like a heartbeat. (rythm / rhythem / rhythym / rhythm)': {
    why: 'The word has no vowel letter except y: r-h-y-t-h-m. It has an h after the r and an h after the t.',
    not: {
      rythm: 'This leaves out the h after the r. The word begins rh-.',
      rhythem: 'This adds an e before the m. The word ends -thm.',
      rhythym: 'This adds a second y. The word has one y.',
    },
    tip: 'A memory trick: Rhythm Helps Your Two Hips Move.',
  },
  "The ___ of the word 'red' include danger and love. (connotations / connotaitions / conotations / connatations)":
    {
      why: 'The word has two n letters at the start: co-nn-otations. It joins con, with, and notation, marking.',
      not: {
        connotaitions: 'This adds an i before -tions. The ending is -tions.',
        conotations: 'This has one n at the start. The word begins conn-.',
        connatations: 'This changes the o after nn to a. The word is con-no-ta-tions.',
      },
      more: 'Connotations are the ideas a word brings with it beyond its plain meaning.',
    },
  'Pip, the ___ of Great Expectations, tells his own story. (protagenist / protagonist / protaganist / protagonest)':
    {
      why: "The word comes from Greek for 'first actor': pro-ta-gon-ist. The vowel after g is o.",
      not: {
        protagenist: 'This changes the o after g to e. The word is pro-ta-gon-ist.',
        protaganist: 'This changes the o after g to a. The word is pro-ta-gon-ist.',
        protagonest: 'This ends -est. The ending is -ist.',
      },
      tip: 'Find agon, the Greek word for a contest, in the middle: prot-agon-ist.',
    },
  "A ___ question, such as 'Who would not want this?', needs no answer. (rhetorecal / rhetorical / retorical / rhetorrical)":
    {
      why: 'The word begins rh-, with a silent h, and comes from rhetoric: rhetor-ical.',
      not: {
        rhetorecal: 'This changes the i to e. The ending is -ical.',
        retorical: 'This leaves out the silent h. The word begins rh-.',
        rhetorrical: 'This doubles the r. The word has one r after the o.',
      },
      more: 'Words that start with rh- usually come from Greek. Rhinoceros is another.',
    },
  "The ___ of 'never' three times makes the line insistent. (repetition / repatition / repetetion / repitition)":
    {
      why: 'The word comes from repeat, but the vowels change: re-pe-ti-tion.',
      not: {
        repatition: 'This changes the e after p to a. The word is re-pe-ti-tion.',
        repetetion: 'This changes the i to e. The word is re-pe-ti-tion.',
        repitition:
          'This changes the e after p to i. This is the most common mistake with this word.',
      },
      tip: 'The vowels go e, e, i, i: r-e-p-e-t-i-t-i-o-n.',
    },
  'Early ___ of the storm hints at the trouble to come. (foreshadowing / foreshadoing / forshadowing / foreshaddowing)':
    {
      why: 'The word is fore, before, plus shadowing: fore-shadow-ing. The e of fore stays.',
      not: {
        foreshadoing: 'This leaves out the w. The root shadow keeps it.',
        forshadowing: 'This leaves out the e of fore. The prefix is fore-, meaning before.',
        foreshaddowing: 'This doubles the d. The root shadow has one.',
      },
      tip: 'Fore means before, as in forecast: the shadow comes before the event.',
    },
  "The ___ 'cold fire' joins two opposite words. (oximoron / oxymoran / oxymoron / oxymorron)": {
    why: 'The word comes from Greek oxy, sharp, and moron, dull: oxy-moron. It is itself a pair of opposites.',
    not: {
      oximoron: 'This uses i for the y. The word begins oxy-.',
      oxymoran: 'This ends -an. The ending is -on.',
      oxymorron: 'This doubles the r. The word has one r.',
    },
    more: 'Sharp and dull together: the name of the device is an example of it.',
  },
  "Saying 'I have told you a million times' is ___. (hiperbole / hyperboly / hyperbole / hyperbolie)":
    {
      why: 'The word comes from Greek hyper, over, and bole, a throw: hyper-bole. It ends with an e that is said.',
      not: {
        hiperbole: 'This uses i for the y. The word begins hyper-.',
        hyperboly: "This ends -y. The word ends -e, though it sounds like 'ee'.",
        hyperbolie: 'This adds an i. The word ends -bole.',
      },
      tip: 'Hyper means over, as in hyperactive: hyperbole goes over the top.',
    },
  '___ is the repeating of a sound at the start of words close together. (Aliteration / Allitteration / Alliteration / Alliterration)':
    {
      why: 'The word has two l letters at the start and one t: a-ll-i-te-ra-tion.',
      not: {
        Allitteration: 'This doubles the t. The word has one t.',
        Aliteration: 'This has one l. The word begins all-.',
        Alliterration: 'This doubles the r. The word has one r.',
      },
      tip: 'It begins with all, then -iteration: all-iteration.',
    },
}
