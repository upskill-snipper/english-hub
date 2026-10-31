import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Prefix & Suffix Lab: the explanation a student sees after each answer, by question key
 * (src/data/games/banks/prefix-suffix-lab.ts). Written with AI on 16 October 2026 and checked
 * against each question and every affix the page can deal with it, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: every question now has its own wrong
 * options, each with a "why not"; 173 questions were added (which "not" prefix a
 * word takes, spelling where a suffix joins, the form a sentence needs, prefixes
 * and suffixes the old bank never taught, and what an affix does in a real line
 * of a set text); every old explanation has new "why not"s for its new options,
 * and 72 of the 94 old questions kept had their explanation rewritten as well,
 * so that none names another question's answer. Written with AI and checked
 * against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second, independent reader, as the founder
 * decided: 46 explanations corrected. Six stated context the text does not hold
 * (the windmill rebuilt "after the battle", dogs standing by Squealer's argument,
 * the creature "about to show himself" to De Lacey, Victor having already fled,
 * "unhallowed arts" given as Victor's words when they are the 1831
 * Introduction's, the dogs ringing all the pigs). Nine stated a spelling or
 * prefix rule without the exception a student meets (y before -ing and -ness,
 * -ible after a whole word, e after a soft c or g, British l-doubling, -our
 * before other endings, Latin roots that take un-). Others named another
 * question's answer ("disqualify", "unkindness", "misspelling"), taught a false
 * rule ("making something smaller is a suffix's job", "in- means beyond"), or
 * explained wrong options that were replaced; three questions now print a real
 * line in place of an invented sentence.
 */
export const EXPLANATIONS: GameExplanations = {
  'prefix: happy | meaning: NOT happy': {
    why: "The prefix un- means 'not'. Added to happy, it makes unhappy, which means not happy. Another word with un-: unlucky.",
    not: {
      'dis-':
        "Dis- also means 'not', but it goes with roots such as loyal and trust, not with happy. 'Dishappy' is not an English word.",
      'in-':
        "In- means 'not' in words that come from Latin, such as inactive. Happy is an old English word, and 'inhappy' is not a word.",
      'non-':
        "Non- means 'not' in words such as nonsense and non-stop. 'Nonhappy' is not used: the word you need is unhappy.",
    },
    more: "Un- is the most common 'not' prefix, but it does not suit every word: some roots take dis- or in- instead. If you are unsure which prefix a word takes, check a dictionary.",
    tip: "In writing, one un- word can replace two: 'She was unhappy' says almost the same as 'She was not happy', and it reads more smoothly.",
  },
  'prefix: lock | meaning: to OPEN a lock': {
    why: "Before a verb, un- means 'undo' or 'do the opposite'. Added to lock, it makes unlock, which means to open a lock. Another word like this: untie, which means to undo a knot.",
    not: {
      're-':
        "Re- means 'again'. Relock is a real word, but it means to lock something again, which is the opposite of opening it.",
      'dis-':
        "Dis- can reverse a verb, as in disconnect, but it does not go with lock. 'Dislock' is not a word.",
      'de-':
        "De- means 'remove' or 'reverse', as in defrost, but it does not go with lock. 'Delock' is not an English word.",
    },
    more: "Un- before a verb reverses the action: unlock, untie, unpack, unzip. Un- before a describing word means 'not': unwell, unsafe. Check whether the root is an action or a description.",
  },
  'prefix: kind | meaning: NOT kind': {
    why: "The prefix un- means 'not'. Added to kind, it makes unkind, which means not kind. Another word with un-: unfriendly.",
    not: {
      'dis-':
        "Dis- means 'not' in words such as disloyal, but kind does not take it. 'Diskind' is not a word.",
      'non-':
        "Non- means 'not', as in non-stop, but it is not used with kind. The word for 'not kind' is unkind.",
      'mis-':
        "Mis- means 'wrongly' or 'badly', as in misread. It does not mean 'not', and 'miskind' is not a word.",
    },
    more: "Un- words are often milder than a single word with a similar meaning. 'An unkind remark' is milder than 'a cruel remark'. Choose the word that fits how strong the feeling is.",
  },
  'prefix: fair | meaning: NOT fair': {
    why: "The prefix un- means 'not'. Added to fair, it makes unfair, which means not fair or not just. Another word with un-: unequal.",
    not: {
      'dis-':
        "Dis- means 'not' in words such as distrust, but fair does not take it. 'Disfair' is not a word.",
      'in-':
        "In- means 'not' in words that come from Latin, such as inactive. Fair is an old English word, and 'infair' is not a word.",
      'non-':
        "Non- means 'not', as in nonsense, but it is not used with fair. The word for 'not fair' is unfair.",
    },
    tip: "Unfair is a handy word in discussion writing. A sentence such as 'It seems unfair that...' gives your opinion in one word.",
  },
  'prefix: agree | meaning: to NOT agree': {
    why: "The prefix dis- means 'not' or 'the opposite of'. Added to agree, it makes disagree, which means to not agree. Another word with dis-: disconnect.",
    not: {
      'un-':
        "Un- means 'not' with many words, but agree is not one of them. 'Unagree' is a common mistake: the word is disagree.",
      'mis-': "Mis- means 'wrongly' or 'badly', as in misread. 'Misagree' is not a word.",
      'in-':
        "In- means 'not' in words such as inactive, but agree does not take it. 'Inagree' is not a word.",
    },
    more: 'Spell it dis + agree, with one s: disagree. Do not add a second s.',
  },
  'prefix: appear | meaning: to STOP being seen': {
    why: "The prefix dis- means 'not' or 'the opposite of'. Added to appear, it makes disappear, which means to stop being seen. Another word with dis-: disorder.",
    not: {
      're-':
        "Re- means 'again'. Reappear is a real word, but it means to be seen again, the opposite of what the goal asks.",
      'un-':
        "Un- means 'not' with many words, but appear does not take it. 'Unappear' is not a word.",
      'mis-': "Mis- means 'wrongly' or 'badly', as in misread. 'Misappear' is not a word.",
    },
    more: 'Disappear is dis + appear: one s and two p letters. A double s comes only when the root itself begins with s, as in dissimilar.',
  },
  'prefix: honest | meaning: NOT honest': {
    why: "The prefix dis- means 'not' or 'the opposite of'. Added to honest, it makes dishonest, which means not honest. Another word with dis-: disloyal.",
    not: {
      'un-':
        "Un- is the most common 'not' prefix, but honest does not take it in modern English. 'Unhonest' is a mistake: the word is dishonest.",
      'in-':
        "In- means 'not' in words such as inactive, but honest does not take it. 'Inhonest' is not a word.",
      'non-':
        "Non- means 'not', as in non-stop, but it is not used with honest. The word you need is dishonest.",
    },
    more: 'Some roots take dis- and others take un-, so learn them in pairs: dishonest and disloyal, but unwise and untrue.',
  },
  'prefix: obey | meaning: to NOT obey': {
    why: "The prefix dis- means 'not' or 'the opposite of'. Added to obey, it makes disobey, which means to not obey. Another word with dis-: disapprove.",
    not: {
      'un-': "Un- means 'not' with many words, but obey does not take it. 'Unobey' is not a word.",
      'mis-':
        "Mis- means 'wrongly' or 'badly'. 'Misobey' is not a word: refusing to obey is disobeying.",
      'in-':
        "In- means 'not' in words such as inactive, but obey does not take it. 'Inobey' is not a word.",
    },
    more: 'Disobey is a verb. The noun is disobedience and the adjective is disobedient. The prefix stays the same while the ending changes.',
  },
  'prefix: like | meaning: to feel you do NOT like something': {
    why: "The prefix dis- means 'not' or 'the opposite of'. Added to like, it makes dislike, a verb meaning to not like something. Another word with dis-: distrust.",
    not: {
      'in-':
        "In- means 'not' in words such as inactive, but like does not take it. 'Inlike' is not a word.",
      'non-':
        "Non- means 'not', as in non-stop, but it is not used with like. The word for this feeling is dislike.",
      'de-': "De- means 'remove' or 'reverse', as in defrost. 'Delike' is not a word.",
    },
    more: "Unlike is a different word. As a preposition it means 'different from' ('Unlike his sister, he loves maths'), and online, to unlike a post means to take back a like. Dislike is the word for the feeling.",
  },
  'prefix: spell | meaning: to spell WRONGLY': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to spell, it makes misspell, which means to spell a word wrongly. Another word with mis-: misprint.",
    not: {
      'dis-':
        "Dis- means 'not' or 'the opposite of'. 'Disspell' is not a word; dispel, with one s, is a different word meaning to drive a worry away.",
      're-':
        "Re- means 'again'. Respell is a real word, but it means to spell something again, not to spell it wrongly.",
      'un-':
        "Un- means 'not' or 'undo'. Unspell is a rare word for breaking a magic spell, not for spelling wrongly.",
    },
    more: "Keep both s letters: mis + spell = misspell. Writing 'mispell' is itself a common misspelling.",
  },
  'prefix: understand | meaning: to understand WRONGLY': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to understand, it makes misunderstand, which means to get the meaning wrong. Another word with mis-: misread.",
    not: {
      'dis-':
        "Dis- means 'not' or 'the opposite of'. 'Disunderstand' is not a word: getting a meaning wrong is misunderstanding.",
      'un-':
        "Un- means 'not'. 'Ununderstand' is not a word, and getting a meaning wrong is not the same as not understanding at all.",
      'non-': "Non- means 'not', as in non-stop. 'Nonunderstand' is not a word.",
    },
    more: 'Misunderstand has three small parts: mis + under + stand. Spot them one at a time and the spelling is easy.',
    tip: 'If you meet a long, unfamiliar word in a reading task, split off the prefix first. Mis- tells you that something is wrong or bad.',
  },
  'prefix: behave | meaning: to behave BADLY': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to behave, it makes misbehave, which means to behave badly. Another word with mis-: mistreat.",
    not: {
      'dis-':
        "Dis- means 'not' or 'the opposite of'. 'Disbehave' is not a word: behaving badly is misbehaving.",
      'un-':
        "Un- means 'not'. 'Unbehave' is not a word, and the goal is behaving badly, not failing to behave at all.",
      'de-': "De- means 'remove' or 'reverse', as in defrost. 'Debehave' is not a word.",
    },
    more: 'The noun is misbehaviour, spelt with -our in British English.',
  },
  'prefix: lead | meaning: to lead in the WRONG direction': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to lead, it makes mislead, which means to lead someone the wrong way or give them a false idea. Another word with mis-: misinform.",
    not: {
      'dis-': "Dis- means 'not' or 'the opposite of'. 'Dislead' is not a word.",
      'un-':
        "Un- means 'not' or 'undo'. 'Unlead' is not a verb; unleaded petrol is about the metal lead, a different word spelt the same.",
      're-':
        "Re- means 'again'. Leading again is not the goal here, which is leading someone the wrong way.",
    },
    more: "The past tense is misled, spelt with one s and no a: 'The advert misled customers.'",
  },
  'prefix: judge | meaning: to judge WRONGLY': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to judge, it makes misjudge, which means to judge a person or situation wrongly. Another word with mis-: miscount.",
    not: {
      'pre-':
        "Pre- means 'before'. Prejudge is a real word, but it means to judge before you know the facts. The goal is judging wrongly.",
      'dis-': "Dis- means 'not' or 'the opposite of'. 'Disjudge' is not a word.",
      'un-': "Un- means 'not' or 'undo'. 'Unjudge' is not a word.",
    },
    more: "You can misjudge a distance, a person or a plan: 'She misjudged the gap and clipped the kerb.'",
  },
  'prefix: build | meaning: to build AGAIN': {
    why: "The prefix re- means 'again'. Added to build, it makes rebuild, which means to build again. Another word with re-: repaint.",
    not: {
      'un-':
        "Un- means 'undo'. Unbuild is a rare word for taking something apart, the opposite of building it again.",
      'de-': "De- means 'remove' or 'down', as in defrost. 'Debuild' is not a word.",
      'mis-':
        "Mis- means 'wrongly' or 'badly'. 'Misbuild' is not a word, and the goal is building again, not building badly.",
    },
    tip: "To describe a second try, a re- verb is shorter than a whole phrase: 'They rebuilt the bridge' means 'They built the bridge again'.",
  },
  'prefix: write | meaning: to write AGAIN': {
    why: "The prefix re- means 'again'. Added to write, it makes rewrite, which means to write something again, often to improve it. Another word with re-: redo.",
    not: {
      'un-':
        "Un- means 'not' or 'undo'. 'Unwrite' is not a word: you cannot undo writing, only rub it out.",
      'mis-':
        "Mis- means 'wrongly' or 'badly'. Writing wrongly is not the goal here, which is writing again.",
      'de-': "De- means 'remove' or 'down', as in defrost. 'Dewrite' is not a word.",
    },
    more: 'Rewrite follows the pattern of write: the past tense is rewrote and the past participle is rewritten.',
    tip: 'Good writers rewrite. In an exam, leave a few minutes to read your answer and rewrite any sentence that is unclear.',
  },
  'prefix: play | meaning: to play AGAIN': {
    why: "The prefix re- means 'again'. Added to play, it makes replay, which means to play again. Another word with re-: restart.",
    not: {
      'dis-':
        'Display is a real word, but it means to show something, as in a shop window. It does not mean to play again.',
      'mis-':
        'Misplay is a real word in sport, meaning to play a shot or a card badly. The goal is playing again.',
      'pre-':
        "Pre- means 'before'. 'Preplay' is not a standard word, and the goal is playing again, not before.",
    },
    more: "Replay can be a verb ('replay the match') or a noun ('watch the replay'). The word class can change without any change in spelling.",
  },
  'prefix: use | meaning: to use AGAIN': {
    why: "The prefix re- means 'again'. Added to use, it makes reuse, which means to use again. Another word with re-: recycle.",
    not: {
      'mis-':
        'Misuse is a real word, but it means to use something wrongly or for the wrong purpose, not to use it again.',
      'dis-':
        "Disuse is a real word, but it is a noun for no longer being used: 'The old mill fell into disuse.'",
      'ab-':
        'Abuse is a real word, but it means to treat someone or something cruelly or wrongly. It has nothing to do with using again.',
    },
    more: "Re- can also mean 'back', as in return and repay. Look at the root and the sentence to decide which meaning is meant.",
  },
  'prefix: consider | meaning: to think about AGAIN': {
    why: "The prefix re- means 'again'. Added to consider, it makes reconsider, which means to think about something again, and perhaps change your mind. Another word with re-: rearrange.",
    not: {
      'pre-':
        "Pre- means 'before'. 'Preconsider' is not a standard word, and the goal is thinking again, not before.",
      'mis-':
        "Mis- means 'wrongly' or 'badly'. 'Misconsider' is not a standard word, and the goal is thinking again.",
      'un-':
        "Un- means 'not'. 'Unconsider' is not a verb; unconsidered is a describing word meaning not thought about.",
    },
    more: "No hyphen is needed in reconsider. A hyphen is used when it avoids confusion, as in 're-cover' (cover again) and 'recover' (get better).",
  },
  'prefix: fill | meaning: to fill AGAIN': {
    why: "The prefix re- means 'again'. Added to fill, it makes refill, which means to fill again. Another word with re-: reopen.",
    not: {
      'over-':
        "Over- means 'too much'. Overfill is a real word, but it means to fill something until it spills, not to fill it again.",
      'un-':
        "Un- means 'undo'. 'Unfill' is not a standard word; emptying a bottle is the opposite of filling it.",
      'de-': "De- means 'remove' or 'down', as in defrost. 'Defill' is not a word.",
    },
    more: "Refill is both a verb ('refill your bottle') and a noun ('a refill for the pen').",
  },
  'prefix: view | meaning: to look at something BEFORE release': {
    why: "The prefix pre- means 'before'. Added to view, it makes preview, which means to look at something before it is released to everyone. Another word with pre-: predict.",
    not: {
      're-':
        "Re- means 'again'. A review looks at something again to judge it, usually after it is released, not before.",
      'over-':
        'Over- here means seen from above. An overview is a short summary of the whole thing, not an early look at it.',
      'inter-':
        "Inter- means 'between'. An interview is a formal talk between people, not an early look at something.",
    },
    more: 'A film trailer is a kind of preview: you see parts of the film before it comes out.',
  },
  'prefix: historic | meaning: BEFORE recorded history': {
    why: "The prefix pre- means 'before'. Added to historic, it makes prehistoric, which means from the time before events were written down. Another word with pre-: prefix itself.",
    not: {
      'post-':
        "Post- means 'after', as in postscript, the note added after a letter. It points the wrong way in time: the goal is before history.",
      'non-':
        "Non- means 'not'. 'Nonhistoric' would mean not historic, which is not the same as before history began.",
      'sub-': "Sub- means 'under' or 'below'. 'Subhistoric' is not a word.",
    },
    more: 'Dinosaurs and early cave paintings are both prehistoric, because they belong to the time before written records.',
    tip: 'To work out an unfamiliar word, split off the prefix. Pre- tells you that something comes before something else.',
  },
  'prefix: heat | meaning: to heat BEFOREHAND': {
    why: "The prefix pre- means 'before'. Added to heat, it makes preheat, which means to heat something before you use it, such as an oven. Another word with pre-: precook.",
    not: {
      're-':
        "Re- means 'again'. Reheat is a real word, but it means to heat food again once it has cooled.",
      'over-':
        "Over- means 'too much'. Overheat is a real word, but it means to get too hot, as an engine can.",
      'fore-':
        "Fore- does mean 'before', as in forecast, but it does not go with heat. 'Foreheat' is not a word.",
    },
    more: "A recipe says 'preheat the oven' so that it is already hot when the food goes in.",
  },
  'prefix: pay | meaning: to pay BEFORE you receive': {
    why: "The prefix pre- means 'before'. Added to pay, it makes prepay, which means to pay before you receive something. Another word with pre-: prewash.",
    not: {
      're-':
        "Re- here means 'back'. Repay is a real word, but it means to pay back money you owe, after you have had it.",
      'over-':
        "Over- means 'too much'. Overpay is a real word, but it means to pay more than something costs.",
      'under-':
        "Under- means 'too little'. Underpay is a real word, but it means to pay less than you should.",
    },
    more: 'A prepaid ticket is paid for in advance, so you only have to collect it. The past tense follows pay: prepay, prepaid.',
  },
  'prefix: school | meaning: education BEFORE school': {
    why: "The prefix pre- means 'before'. Added to school, it makes preschool, the years of learning for young children before they start school. Another word with pre-: prearrange.",
    not: {
      'post-':
        "Post- means 'after'. Post-school describes what comes after leaving school, such as college, the opposite of the goal.",
      'sub-': "Sub- means 'under' or 'below'. 'Subschool' is not a word.",
      'fore-':
        "Fore- means 'before' in words such as forecast, but it does not go with school. 'Foreschool' is not a word.",
    },
    more: "Pre- is the opposite of post-, which means 'after'. You may also see preschool written with a hyphen, as pre-school.",
  },
  'prefix: caution | meaning: care taken BEFORE acting': {
    why: "The prefix pre- means 'before'. Added to caution, it makes precaution, a sensible step taken before something happens, to avoid trouble. Another word with pre-: prepare.",
    not: {
      're-': "Re- means 'again'. 'Recaution' is not a word.",
      'fore-':
        "Fore- means 'before' in words such as forewarn, but it does not go with caution. 'Forecaution' is not a word.",
      'post-':
        "Post- means 'after'. A step taken after trouble comes too late to be a precaution, and 'postcaution' is not a word.",
    },
    more: 'Wearing a seat belt and checking the weather before a trip are precautions. You take them in advance, just in case.',
  },
  'prefix: freeze | meaning: AGAINST freezing': {
    why: "The prefix anti- means 'against'. Added to freeze, it makes antifreeze, a liquid that works against freezing. Another word with anti-: antidote.",
    not: {
      'un-':
        'Unfreeze is a real word, but it means to thaw something that is already frozen. Antifreeze stops the freezing happening.',
      'de-':
        "De- means 'remove'. The word for removing ice is defrost; 'defreeze' is not standard English.",
      'counter-':
        "Counter- also means 'against', as in counterattack, but it does not go with freeze. 'Counterfreeze' is not a word.",
    },
    more: 'Antifreeze is added to the water in a car engine so that it does not freeze in cold weather.',
  },
  'prefix: social | meaning: AGAINST social behaviour': {
    why: "The prefix anti- means 'against'. Added to social, it makes antisocial, which describes behaviour that goes against what is good for other people. Another word with anti-: antivirus.",
    not: {
      'un-':
        'Unsocial is a real word, but it means not wanting company, or working when others are off, as in unsocial hours. It does not mean acting against others.',
      'non-':
        "Non- simply means 'not'. 'Non-social' is a rare word, and it carries no sense of acting against other people.",
      'de-': "De- means 'remove' or 'down'. 'Desocial' is not a word.",
    },
    more: "Antisocial often describes behaviour that upsets or harms others, such as vandalism. People also use it loosely to mean 'not wanting company'.",
  },
  'prefix: clockwise | meaning: AGAINST the clock’s direction': {
    why: "The prefix anti- means 'against' or 'opposite to'. Added to clockwise, it makes anticlockwise, which means turning the opposite way to the hands of a clock. Another word with anti-: anticlimax.",
    not: {
      'un-':
        "Un- means 'not'. 'Unclockwise' is not a word: the opposite direction is anticlockwise.",
      'non-':
        "Non- means 'not'. 'Nonclockwise' is not a word, and it would not say which way to turn.",
      'dis-':
        "Dis- means 'the opposite of' in verbs such as disconnect, but it does not go with clockwise. 'Disclockwise' is not a word.",
    },
    more: "Anticlockwise is the British English word. Americans say counterclockwise. You might read 'Turn the lid anticlockwise to open the jar'.",
  },
  'prefix: bacterial | meaning: AGAINST bacteria': {
    why: "The prefix anti- means 'against'. Added to bacterial, it makes antibacterial, which means working against bacteria. Another word with anti-: antiviral.",
    not: {
      'non-':
        'Non-bacterial is a real word, but it means not caused by bacteria, as a doctor might say of an illness. It does not fight bacteria.',
      'sub-': "Sub- means 'under' or 'below'. 'Subbacterial' is not a word.",
      'un-': "Un- means 'not'. 'Unbacterial' is not a word.",
    },
    more: 'Antibacterial soaps and sprays are made to kill bacteria or stop them growing. Look for the word on cleaning products.',
  },
  'prefix: septic | meaning: AGAINST infection': {
    why: "The prefix anti- means 'against'. Added to septic, which means infected by germs, it makes antiseptic, a substance that works against infection. Another word with anti-: antibiotic.",
    not: {
      'non-':
        "Non- means 'not'. 'Nonseptic' is not a standard word, and the goal is something that works against infection.",
      'un-': "Un- means 'not'. 'Unseptic' is not a word.",
      'de-': "De- means 'remove'. 'Deseptic' is not a word.",
    },
    more: 'Antiseptic cream is put on a cut so that germs cannot grow. An antibiotic is different: it is a medicine that treats a bacterial infection already inside the body.',
  },
  'prefix: marine | meaning: a vessel that goes UNDER the sea': {
    why: "The prefix sub- means 'under' or 'below'. Added to marine, which means to do with the sea, it makes submarine, a vessel that travels under the sea. Another word with sub-: subsoil.",
    not: {
      'ultra-':
        "Ultramarine is a real word, but it is a bright blue colour. Ultra- means 'beyond': the colour was once brought from beyond the sea.",
      'aqua-':
        "Aquamarine is a real word, but it is a blue-green gem and colour. Aqua- means 'water', and nothing here goes under the sea.",
      'inter-': "Inter- means 'between'. 'Intermarine' is not a word.",
    },
    more: "Submarine can also be a describing word, as in 'submarine cables', which lie on the sea floor.",
  },
  'prefix: way | meaning: a path or railway UNDER the ground': {
    why: "The prefix sub- means 'under' or 'below'. Added to way, it makes subway, a way that runs under the ground. Another word with sub-: subzero.",
    not: {
      'mid-':
        "Midway is a real word, but it means halfway, in the middle of a journey. Mid- means 'middle', not 'under'.",
      'inter-': "Inter- means 'between'. 'Interway' is not a word.",
      'over-':
        "Over- means 'above' or 'too much'. 'Overway' is not a word; a road that crosses over another is a flyover.",
    },
    more: 'In Britain a subway is usually a path for walkers that goes under a busy road. In some cities, such as Glasgow and New York, the underground railway is called the subway.',
  },
  'prefix: heading | meaning: a smaller heading UNDER the main one': {
    why: "The prefix sub- means 'under' or 'below'. Added to heading, it makes subheading, a smaller heading under the main heading. Another word with sub-: subtopic.",
    not: {
      'super-':
        "Super- means 'above' or 'more than'. 'Superheading' is not a standard word, and the goal is a smaller heading underneath.",
      'pre-': "Pre- means 'before'. 'Preheading' is not a word.",
      'inter-': "Inter- means 'between'. 'Interheading' is not a word.",
    },
    more: "Here 'under' also means 'a smaller part of'. A subheading divides a long text into parts, so the reader can find the part they need.",
    tip: 'In your own reports, leaflets and articles, use subheadings. They help a reader find each part fast.',
  },
  'prefix: standard | meaning: BELOW the standard': {
    why: "The prefix sub- means 'under' or 'below'. Added to standard, it makes substandard, which means below the level that is expected or acceptable. Another word with sub-: subconscious.",
    not: {
      'non-':
        'Non-standard is a real word, but it means different from the usual form, as in non-standard spelling. It does not mean below the expected level.',
      'super-':
        "Super- means 'above' or 'more than', the opposite of the goal. 'Superstandard' is not a word.",
      'inter-': "Inter- means 'between'. 'Interstandard' is not a word.",
    },
    more: 'You can use it to criticise quality, for example substandard housing or substandard work.',
  },
  'prefix: merge | meaning: to sink completely UNDER water': {
    why: "The prefix sub- means 'under' or 'below'. Added to merge, it makes submerge, which means to go, or to put something, completely under water. Another word with sub-: subdivide.",
    not: {
      'e-': "E- means 'out', as in emit, to send out. Emerge is a real word, but it means to come up out of water, the opposite of the goal.",
      'de-':
        'Demerge is a real business word: to split one company back into two. It has nothing to do with water.',
      're-':
        "Re- means 'again'. 'Remerge' would mean to join together again, not to go under water.",
    },
    more: "Take care: merge by itself means to join together. Submerge keeps an older meaning of the root, 'to dip', so it is best learned as one whole word.",
  },
  'prefix: title | meaning: text BELOW the main image (on screen)': {
    why: "The prefix sub- means 'under' or 'below'. Added to title, it makes subtitle, which is text shown below the picture on a screen, often giving the words people say. Another word with sub-: subsection.",
    not: {
      'en-':
        "En- means 'give' or 'put into'. Entitle is a real word, but it means to give someone a right, or to give a book its title.",
      'sur-':
        "Sur- means 'over' or 'above'. Surtitles are real: words shown above the stage at an opera. The goal is text below the picture.",
      're-':
        "Re- means 'again'. Retitle is a real word, but it means to give something a new title.",
    },
    more: 'A subtitle can also be the second, smaller title of a book or article, written under the main title.',
    tip: 'Subtitles help your listening. Watch a short clip with English subtitles, then watch it again without them.',
  },
  'prefix: national | meaning: BETWEEN nations': {
    why: "The prefix inter- means 'between' or 'among'. Added to national, it makes international, which means between nations. Another word with inter-: internet.",
    not: {
      'sub-':
        'Subnational is a real word, but it describes part of a country, such as a region. It is below the level of a nation, not between nations.',
      'anti-':
        "Anti- means 'against'. 'Antinational' would mean against a nation, which is not the goal.",
      'super-':
        "Super- means 'above'. A body that stands above nations is called supranational; it is not between them.",
    },
    more: 'International describes things that involve two or more countries, such as an international match or an international airport. National is about one country only.',
  },
  'prefix: act | meaning: to act BETWEEN people': {
    why: "The prefix inter- means 'between' or 'among'. Added to act, it makes interact, which means to act with each other. Another word with inter-: interweave.",
    not: {
      're-':
        'React is a real word, but it means to act in reply to something, such as jumping at a loud noise. It is one person responding.',
      'over-':
        'Overact is a real word, but it means to act a part too strongly on stage, as if everything were a great drama.',
      'counter-':
        'Counteract is a real word, but it means to act against something to cancel it out, as a medicine counteracts a poison.',
    },
    more: 'The noun is interaction and the describing word is interactive. An interactive game lets you act on the screen and then responds to you.',
  },
  'prefix: change | meaning: to swap BETWEEN two things': {
    why: "The prefix inter- means 'between' or 'among'. Added to change, it makes interchange, which means to swap two things with each other. Another word with inter-: interval.",
    not: {
      're-':
        "Re- means 'again'. 'Rechange' is not a standard word, and the goal is a swap between two things.",
      'pre-': "Pre- means 'before'. 'Prechange' is not a word.",
      'sub-': "Sub- means 'under' or 'below'. 'Subchange' is not a word.",
    },
    more: 'As a noun, an interchange can also be a place where roads or train lines meet, so that you can switch between them.',
  },
  'prefix: city | meaning: travelling BETWEEN cities': {
    why: "The prefix inter- means 'between' or 'among'. Added to city, it makes intercity, which means travelling between cities. Another word with inter-: interlock.",
    not: {
      'sub-':
        "Sub- means 'under' or 'below'. 'Subcity' is not a word; the area at the edge of a city is a suburb.",
      'mid-':
        "Mid- means 'middle'. 'Midcity' is not a standard word, and the goal is travel between cities.",
      'super-':
        "Super- means 'above' or 'very large'. A supercity would be a huge city, not a journey between cities.",
    },
    more: 'Intercity is a describing word: an intercity train, bus or road links one city with another. It is usually written as one word, with no hyphen.',
  },
  'prefix: connected | meaning: with links BETWEEN all the parts': {
    why: "The prefix inter- means 'between' or 'among'. Added to connected, it makes interconnected, which means linked with one another. Another word with inter-: intersect.",
    not: {
      'dis-':
        'Disconnected is a real word, but it means cut off or separated, the opposite of parts that link together.',
      'un-':
        "Unconnected is a real word, but it means not linked at all: 'two unconnected events'.",
      're-':
        'Reconnected is a real word, but it means joined again after a break, not linked between all the parts.',
    },
    tip: "In an essay, interconnected is a good word for linking ideas: 'The themes of power and guilt are interconnected in the play.'",
  },
  'prefix: tidy | meaning: NOT tidy': {
    why: "The prefix un- means 'not'. Added to tidy, it makes untidy, which means not tidy. Another word with un-: unclear.",
    not: {
      'dis-':
        "Dis- means 'not' or 'the opposite of', as in disorder, but tidy does not take it. 'Distidy' is not a word.",
      'mis-':
        "Mis- means 'wrongly' or 'badly', as in misread. It does not mean 'not', and 'mistidy' is not a word.",
      'in-':
        "In- means 'not' in words that come from Latin, such as inactive. Tidy is an old English word, and 'intidy' is not a word.",
    },
    more: "Untidy can describe a place or a person: 'an untidy desk', 'untidy handwriting'. The noun is untidiness: the y changes to i before -ness.",
  },
  'prefix: wrap | meaning: to take the wrapping OFF': {
    why: "Before a verb, un- means 'undo' or 'do the opposite'. Added to wrap, it makes unwrap, which means to take the wrapping off. Another word with un-: unpack.",
    not: {
      're-':
        "Re- means 'again'. Rewrap is a real word, but it means to wrap something again, not to take the wrapping off.",
      'dis-':
        "Dis- can reverse a verb, as in disconnect, but it does not go with wrap. 'Diswrap' is not a word.",
      'de-':
        "De- means 'remove', as in defrost, but it does not go with wrap. 'Dewrap' is not an English word.",
    },
    more: 'Un- and re- give opposite meanings on the same verb: unwrap and rewrap, unpack and repack. Read the prefix first and you know which way the action goes.',
  },
  'prefix: cover | meaning: to take a cover OFF': {
    why: "Before a verb, un- means 'undo' or 'do the opposite'. Added to cover, it makes uncover, which means to take the cover off. Another word with un-: unfold.",
    not: {
      're-':
        "Re- means 'again' or 'back'. Recover means to get something back or to get well, and re-cover means to cover again. Neither takes a cover off.",
      'de-':
        "De- means 'remove', as in defrost, but it does not go with cover. 'Decover' is not an English word.",
      'mis-':
        "Mis- means 'wrongly' or 'badly'. 'Miscover' is not a word, and nothing here is done wrongly.",
    },
    more: "Uncover can also mean to find something hidden, as in 'The police uncovered a plot'. Discover is a different word: it usually means to find something for the first time.",
  },
  'prefix: place | meaning: to put in the WRONG place and lose it': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to place, it makes misplace, which means to put something in the wrong place, so that you cannot find it. Another word with mis-: mislabel.",
    not: {
      'dis-':
        'Displace is a real word, but it means to force something or someone out of its usual place. It does not mean losing it.',
      're-':
        'Replace is a real word, but it means to put something back, or to swap it for another. Nothing is lost.',
      'un-': "Un- means 'not' or 'undo'. 'Unplace' is not an English verb.",
    },
    more: "Misplace is gentler than lose: 'I have misplaced my keys' suggests they are somewhere nearby.",
  },
  'prefix: view | meaning: a formal talk BETWEEN people': {
    why: "The prefix inter- means 'between' or 'among'. Added to view, it makes interview, a formal talk between people in which one asks questions and the other answers. Another word with inter-: intertwine.",
    not: {
      're-':
        "Re- means 'again'. A review looks at something again to judge it, such as a film or a book. It is not a talk between people.",
      'pre-':
        "Pre- means 'before'. A preview is an early look at something before it is released, not a talk between people.",
      'over-':
        'An overview is a short summary of the whole of something, as if seen from above. It is not a talk between people.',
    },
    more: "Interview comes from an old French word meaning 'to see each other': the two people meet face to face.",
  },
  'suffix: care | meaning: “full of care”': {
    why: "The suffix -ful means 'full of'. Added to care, it makes careful, a describing word meaning full of care, taking care. Another word with -ful: helpful.",
    not: {
      '-less':
        "The suffix -less means 'without'. Careless is a real word, but it means without care, the opposite of the goal.",
      '-er':
        "The suffix -er can mean 'a person who'. A carer is a person who looks after someone, not a describing word.",
      '-free':
        'Carefree is a real word, but it means free from worry, happy and relaxed. It does not mean full of care.',
    },
    more: 'Spell -ful with one l, even though the word full has two: careful, helpful, joyful.',
    tip: 'Careful + ly gives two l letters, one from each ending: carefully.',
  },
  'suffix: hope | meaning: “full of hope”': {
    why: "The suffix -ful means 'full of'. Added to hope, it makes hopeful, which means full of hope that something good will happen. Another word with -ful: cheerful.",
    not: {
      '-less':
        "The suffix -less means 'without'. Hopeless is a real word, but it means without hope, the opposite of the goal.",
      '-ous':
        "The suffix -ous also means 'full of', as in joyous, but hope does not take it. 'Hopeous' is not a word.",
      '-ing':
        "Hoping is the verb hope with -ing, as in 'I am hoping for sun'. It is an action, not a word meaning full of hope.",
    },
    more: 'Hopeful keeps the e of hope, because -ful begins with a consonant. Hoping drops it, because -ing begins with a vowel.',
  },
  'suffix: mercy | meaning: “full of mercy”': {
    why: "The suffix -ful means 'full of'. Added to mercy, it makes merciful, which means full of mercy, ready to forgive. The y changes to i before the suffix, as in pitiful.",
    not: {
      '-less':
        "The suffix -less means 'without'. Merciless is a real word, but it means without mercy, cruel, the opposite of the goal.",
      '-ous':
        "The suffix -ous also means 'full of', as in joyous, but mercy does not take it. 'Mercious' is not a word.",
      '-ness':
        'The suffix -ness makes nouns for a state, such as fondness. It does not make a word meaning full of mercy.',
    },
    more: 'When a word ends in a consonant and y, the y changes to i before most suffixes: mercy, merciful; pity, pitiful. Before -ing it stays, so that two i letters never meet: pitying, crying.',
  },
  'suffix: use | meaning: “full of use”': {
    why: "The suffix -ful means 'full of'. Added to use, it makes useful, which means full of use, helpful for a job. Another word with -ful: skilful.",
    not: {
      '-less':
        "The suffix -less means 'without'. Useless is a real word, but it means of no use at all, the opposite of the goal.",
      '-er':
        "The suffix -er can mean 'a person who'. A user is someone who uses something, not a describing word.",
      '-age':
        "The suffix -age makes nouns. Usage is a real word, but it means the way something is used, as in 'water usage'.",
    },
    more: 'Useful keeps the e of use, because -ful begins with a consonant. Usage drops it, because -age begins with a vowel.',
  },
  'suffix: care | meaning: “without care”': {
    why: "The suffix -less means 'without'. Added to care, it makes careless, which means without enough care, making mistakes. Another word with -less: endless.",
    not: {
      '-ful':
        "The suffix -ful means 'full of'. Careful is a real word, but it means taking care, the opposite of the goal.",
      '-er':
        'A carer is a person who looks after someone. It is a noun for a person, not a word meaning without care.',
      '-ing':
        'Caring is a real word, but it means kind and looking after others. It is close to the opposite of careless.',
    },
    more: "The suffix -less turns a noun into a describing word meaning 'without it': care, careless; end, endless; point, pointless.",
  },
  'suffix: hope | meaning: “without hope”': {
    why: "The suffix -less means 'without'. Added to hope, it makes hopeless, which means without hope, or very bad at something. Another word with -less: pointless.",
    not: {
      '-ful':
        "The suffix -ful means 'full of'. Hopeful is a real word, but it means full of hope, the opposite of the goal.",
      '-ing':
        "Hoping is the verb hope with -ing: 'I am hoping to win.' It is an action, not a word meaning without hope.",
      '-ous':
        "The suffix -ous means 'full of' in words such as joyous, but hope does not take it. 'Hopeous' is not a word.",
    },
    more: "Hopeless has two uses: 'a hopeless situation' has no chance of getting better, and 'hopeless at maths' means very bad at it.",
  },
  'suffix: fear | meaning: “without fear”': {
    why: "The suffix -less means 'without'. Added to fear, it makes fearless, which means without fear, very brave. Another word with -less: tireless.",
    not: {
      '-ful':
        'Fearful is a real word: today it usually means frightened, full of fear. Either way, it does not mean without fear.',
      '-some':
        "Fearsome is a real word, but it means frightening to others, as in 'a fearsome storm'. It does not mean without fear.",
      '-ed':
        'Feared is a real word, but it means that others are afraid of you. It says nothing about being without fear.',
    },
    more: 'Fearless and fearsome are worth telling apart: fearless means without fear, and fearsome means causing fear in others.',
  },
  'suffix: home | meaning: “without a home”': {
    why: "The suffix -less means 'without'. Added to home, it makes homeless, which means without a home to live in. Another word with -less: penniless.",
    not: {
      '-ly':
        "Homely is a real word, but in British English it means cosy and simple, as in 'a homely kitchen'. It does not mean without a home.",
      '-y': 'Homey is a real, informal word for cosy, like home. It does not mean without a home.',
      '-ward':
        "The suffix -ward means 'towards'. Homeward means towards home, as in 'the homeward journey'.",
    },
    more: 'Homeless keeps the e of home, because -less begins with a consonant. Most nouns can take -less: penniless, friendless, helpless.',
  },
  'suffix: kind | meaning: “the state of being kind”': {
    why: 'The suffix -ness turns a describing word into a noun for a state or quality. Added to kind, it makes kindness, the quality of being kind. Another word with -ness: fondness.',
    not: {
      '-ly':
        "Kindly is a real word, but it describes ('a kindly smile') or tells how ('she spoke kindly'). It is not a noun for the state.",
      '-ship':
        "The suffix -ship makes nouns for a state or bond, as in hardship, but kind does not take it. 'Kindship' is not a word.",
      '-ity':
        "The suffix -ity makes nouns for a state, as in rarity, but kind does not take it. 'Kindity' is not a word.",
    },
    more: "Some -ness nouns can be counted: 'small kindnesses'. Busy + -ness gives business, which once meant the state of being busy.",
  },
  'suffix: happy | meaning: “the state of being happy”': {
    why: 'The suffix -ness turns a describing word into a noun for a state. Added to happy, it makes happiness: the y changes to i before the suffix. Another word like this: tidiness.',
    not: {
      '-ly':
        "Happily is a real word, but it is an adverb telling how something is done: 'They played happily.' It is not a noun.",
      '-ity':
        "The suffix -ity makes nouns for a state, as in rarity, but happy does not take it. 'Happity' is not a word.",
      '-ment':
        "The suffix -ment makes nouns from verbs, as in payment. Happy is a describing word, and 'happiment' is not a word.",
    },
    more: 'When a word ends in a consonant and y, change the y to i before -ness: happy, happiness; lazy, laziness. A word of one syllable usually keeps its y (dry, dryness), and so does a y after a vowel (coy, coyness).',
  },
  'suffix: dark | meaning: “the state of being dark”': {
    why: 'The suffix -ness turns a describing word into a noun for a state. Added to dark, it makes darkness, the state of being dark. Another word with -ness: stillness.',
    not: {
      '-en':
        "The suffix -en makes verbs meaning 'make or become'. Darken is a real word, but it means to make or grow darker.",
      '-ly':
        "Darkly is a real word, but it is an adverb telling how: 'He laughed darkly.' It is not a noun for the state.",
      '-ity':
        "The suffix -ity makes nouns for a state, as in rarity, but dark does not take it. 'Darkity' is not a word.",
    },
    more: 'Writers use darkness for more than night. It can stand for fear, evil or mystery, so notice when a story moves into darkness.',
  },
  'suffix: sad | meaning: “the state of being sad”': {
    why: 'The suffix -ness turns a describing word into a noun for a state. Added to sad, it makes sadness, the feeling of being sad. Another word with -ness: gladness.',
    not: {
      '-en':
        "The suffix -en makes verbs meaning 'make'. Sadden is a real word, with a double d, but it means to make someone sad.",
      '-ly':
        "Sadly is a real word, but it is an adverb telling how: 'She waved sadly.' It is not a noun.",
      '-ity':
        "The suffix -ity makes nouns for a state, but sad does not take it. 'Sadity' is not a word.",
    },
    more: 'Sadness keeps both parts whole: sad + ness. No letter doubles or drops, because -ness begins with a consonant.',
  },
  'suffix: ill | meaning: “the state of being ill”': {
    why: 'The suffix -ness turns a describing word into a noun for a state. Added to ill, it makes illness, the state of being unwell. Keep both l letters: ill + ness. Another word like this: dullness.',
    not: {
      '-ity':
        "The suffix -ity makes nouns for a state, as in rarity, but ill does not take it. 'Illity' is not a word.",
      '-ment':
        "The suffix -ment makes nouns from verbs. 'Illment' is not a word; ailment, which sounds a little like it, means an illness.",
      '-ly': 'Illy is a rare word for badly, and it is an adverb, not a noun for a state.',
    },
    more: 'Illness is the usual word in British English for being unwell. Sickness often means feeling as if you will be sick.',
  },
  'suffix: educate | meaning: “the act of educating”': {
    why: 'The suffix -tion turns a verb into a noun for an action or its result. Educate drops its final e: educate, education. Another word like this: location.',
    not: {
      '-or':
        'Educator is a real word, but it is a noun for a person who educates, not for the act.',
      '-ive':
        'Educative is a real word, but it is a describing word meaning helping people learn. It is not a noun.',
      '-ment':
        "The suffix -ment makes nouns from verbs, as in payment, but educate does not take it. 'Educatement' is not a word.",
    },
    more: 'Verbs ending in -ate usually make nouns in -ation by dropping the e: locate, location; rotate, rotation; donate, donation.',
  },
  'suffix: create | meaning: “the act of creating”': {
    why: 'The suffix -tion turns a verb into a noun for an action or its result. Create drops its final e: create, creation. Another word like this: relation.',
    not: {
      '-or': 'Creator is a real word, but it is a person who creates, not the act of creating.',
      '-ive':
        'Creative is a real word, but it is a describing word meaning good at making new things.',
      '-ure':
        'Creature is a real word, but it means a living animal or being. It comes from the same root but names a thing, not the act.',
    },
    more: 'One root, four word classes: create (verb), creation (noun), creative (describing word), creatively (adverb). Suffixes do this work.',
  },
  'suffix: celebrate | meaning: “the act of celebrating”': {
    why: 'The suffix -tion turns a verb into a noun for an action. Celebrate drops its final e: celebrate, celebration. Another word like this: decoration.',
    not: {
      '-ory':
        "Celebratory is a real word, but it is a describing word meaning to do with a celebration, as in 'a celebratory meal'.",
      '-ed':
        "Celebrated is a real word, but it means famous, as in 'a celebrated writer'. It is not a noun for the act.",
      '-ment':
        "The suffix -ment makes nouns from verbs, but celebrate does not take it. 'Celebratement' is not a word.",
    },
    more: "A celebration can be a party or the act of marking something: 'the celebration of her birthday'.",
  },
  'suffix: inform | meaning: “the facts that inform you”': {
    why: 'The suffix -tion, with -a- before it, turns the verb inform into the noun information: the facts that tell you about something. Another word like this: formation.',
    not: {
      '-er':
        'An informer is a real word, but it means a person who passes on secrets, often to the police.',
      '-al':
        'Informal is a real word, but it means relaxed and casual, as in informal clothes. It is in- plus formal, not inform plus -al.',
      '-ant':
        'An informant is a real word, but it is a person who gives information, not the facts themselves.',
    },
    more: "Information cannot be counted in English: say 'some information' or 'a piece of information', never 'an information'.",
  },
  'suffix: pollute | meaning: “the act of polluting”': {
    why: 'The suffix -tion turns a verb into a noun for an action or its result. Pollute drops its final e: pollute, pollution. Another word like this: contribution.',
    not: {
      '-ant':
        'A pollutant is a real word, but it is the harmful substance itself, such as smoke, not the act of polluting.',
      '-er': 'A polluter is a real word, but it is a person or company that pollutes.',
      '-ment':
        "The suffix -ment makes nouns from verbs, but pollute does not take it. 'Pollutement' is not a word.",
    },
    more: 'Pollution, pollutant and polluter make a precise set for a speech about the environment: the harm, the substance and who causes it.',
  },
  'suffix: enjoy | meaning: “able to be enjoyed”': {
    why: "The suffix -able means 'able to be' or 'giving'. Added to enjoy, it makes enjoyable, which means able to be enjoyed, fun. Another word with -able: readable.",
    not: {
      '-ment':
        'Enjoyment is a real word, but it is a noun for the feeling of enjoying, not a describing word.',
      '-ible':
        "The suffix -ible means the same as -able, but it goes with other roots, such as horrible. 'Enjoyible' is a misspelling.",
      '-ful': "'Enjoyful' is not standard English. The describing word from enjoy is enjoyable.",
    },
    more: 'Enjoy keeps its y before a suffix, because a vowel comes before the y: enjoyable, enjoying.',
  },
  'suffix: comfort | meaning: “giving comfort”': {
    why: "The suffix -able means 'able to' or 'giving'. Added to comfort, it makes comfortable, which describes something that gives comfort, such as a soft chair. Another word with -able: agreeable.",
    not: {
      '-er':
        'A comforter is a real word, but it is a person or thing that comforts someone. It is a noun, not a describing word.',
      '-less':
        'Comfortless is a real word, but it means without comfort, the opposite of the goal.',
      '-ible':
        "The suffix -ible means the same as -able but goes with other roots, such as horrible. 'Comfortible' is a misspelling.",
    },
    more: "Comfortable is often said with three syllables, 'comf-ta-ble', but it is spelt with comfort in full: comfort + able.",
  },
  'suffix: value | meaning: “having great value”': {
    why: 'The suffix -able makes describing words. Value drops its final e before it: value, valuable, which means worth a lot. Another word like this: excusable.',
    not: {
      '-less':
        'Valueless is a real word, but it means worth nothing at all, the opposite of the goal.',
      '-ation':
        'A valuation is a real word, but it is a noun for an estimate of what something is worth.',
      '-ible':
        "The suffix -ible goes with other roots, such as horrible. 'Valuible' is a misspelling.",
    },
    more: 'Valuable keeps the u of value and drops only the e: valu + able. Saying the word one beat at a time helps: val-u-a-ble.',
  },
  'suffix: rely | meaning: “able to be relied on”': {
    why: "The suffix -able means 'able to be'. Rely changes its y to i before it: rely, reliable, which means able to be trusted. Another word like this: deniable.",
    not: {
      '-ance':
        "Reliance is a real word, but it is a noun meaning dependence, as in 'reliance on the bus'. It is not a describing word.",
      '-ible':
        "The suffix -ible goes with other roots, such as horrible. 'Reliible' is not a word: rely takes -able, and its y becomes i before it.",
      '-ant':
        "Reliant is a real word, but it describes the one who relies, as in 'reliant on help', not the one relied on.",
    },
    more: "Reliable describes the person or thing you can rely on: 'a reliable friend'. Reliant describes the one who does the relying.",
  },
  'suffix: wash | meaning: “able to be washed”': {
    why: "The suffix -able means 'able to be'. Added to wash, it makes washable, which means it can be washed without damage. Another word with -able: drinkable.",
    not: {
      '-er':
        'A washer is a real word, but it is a machine that washes, or a small ring used with a bolt. It is a noun.',
      '-ible':
        "The suffix -ible goes with other roots, such as horrible. 'Washible' is a misspelling.",
      '-ing':
        'Washing is a real word, but it is the act of washing or the clothes being washed. It does not mean able to be washed.',
    },
    more: 'When the root is a whole English word, the suffix is usually -able: washable, drinkable, readable. -ible usually follows a part that is not a word on its own, as in horrible. A few whole words take -ible all the same, such as flexible and sensible, so learn those by sight.',
  },
  'suffix: quick | meaning: “in a quick way”': {
    why: 'The suffix -ly turns a describing word into an adverb that tells how something is done. Added to quick, it makes quickly, which means in a quick way. Another word with -ly: loudly.',
    not: {
      '-en':
        "Quicken is a real word, but it is a verb meaning to make or become faster: 'Her pulse quickened.'",
      '-ness':
        'Quickness is a real word, but it is a noun for the quality of being quick, not a word telling how.',
      '-est':
        "Quickest is a real word, but it means the most quick of all: 'the quickest runner'. It compares; it does not tell how.",
    },
    more: "Adverbs made with -ly answer the question 'how?': He ran quickly. She spoke softly. Ask 'how?' of the verb to find them.",
  },
  'suffix: slow | meaning: “in a slow way”': {
    why: 'The suffix -ly turns a describing word into an adverb that tells how something is done. Added to slow, it makes slowly, which means in a slow way. Another word with -ly: gladly.',
    not: {
      '-ness':
        'Slowness is a real word, but it is a noun for the quality of being slow, not a word telling how.',
      '-est':
        'Slowest is a real word, but it means the most slow of all. It compares; it does not tell how.',
      '-ish':
        "The suffix -ish means 'rather'. Slowish means fairly slow, as in 'a slowish start'. It does not tell how.",
    },
    more: "In writing, an adverb such as slowly can build tension: 'The door slowly opened.' Choose it when the speed of an action matters.",
  },
  'suffix: happy | meaning: “in a happy way”': {
    why: 'The suffix -ly turns a describing word into an adverb that tells how. Happy changes its y to i first: happy, happily, which means in a happy way. Another word like this: lazily.',
    not: {
      '-ness':
        'Happiness is a real word, but it is a noun for the feeling, not a word telling how something is done.',
      '-er':
        'Happier is a real word, but it means more happy. It compares two things; it does not tell how.',
      '-est':
        'Happiest is a real word, but it means the most happy of all. It compares; it does not tell how.',
    },
    tip: "In a story, an adverb can show a feeling in a few letters: 'She sang happily as she worked.'",
  },
  'suffix: gentle | meaning: “in a gentle way”': {
    why: 'The suffix -ly turns a describing word into an adverb that tells how. Gentle ends in -le, so the -le changes to -ly: gentle, gently. Another word like this: humbly.',
    not: {
      '-ness':
        'Gentleness is a real word, but it is a noun for the quality of being gentle, not a word telling how.',
      '-er':
        'Gentler is a real word, but it means more gentle. It compares; it does not tell how something is done.',
      '-man':
        'A gentleman is a real word, but it is a noun for a polite or well-born man. It does not tell how.',
    },
    more: "Words ending in a consonant and -le change the -le to -ly: gentle, gently; humble, humbly; able, ably. 'Gentlely' is a common mistake.",
  },
  'suffix: enjoy | meaning: “the feeling of enjoying”': {
    why: 'The suffix -ment turns a verb into a noun for an action or a feeling. Added to enjoy, it makes enjoyment, the feeling of enjoying something. Another word with -ment: amusement.',
    not: {
      '-able':
        'Enjoyable is a real word, but it is a describing word meaning fun. It is not a noun for the feeling.',
      '-tion':
        "The suffix -tion makes nouns from many verbs, but enjoy does not take it. 'Enjoytion' is not a word.",
      '-ful':
        "'Enjoyful' is not standard English, and it would be a describing word, not a noun for the feeling.",
    },
    more: 'Enjoy keeps its y before -ment, because a vowel comes before the y: enjoy, enjoyment; pay, payment.',
  },
  'suffix: agree | meaning: “the act of agreeing”': {
    why: 'The suffix -ment turns a verb into a noun for an action or its result. Added to agree, it makes agreement, and agree keeps both its e letters. Another word with -ment: payment.',
    not: {
      '-able':
        'Agreeable is a real word, but it is a describing word meaning pleasant or willing. It is not a noun for the act.',
      '-tion':
        "The suffix -tion makes nouns from many verbs, but agree does not take it. 'Agreetion' is not a word.",
      '-ness':
        "The suffix -ness makes nouns from describing words, not from verbs. 'Agreeness' is not a word.",
    },
    more: "An agreement can be the act of agreeing or a deal: 'They signed an agreement.'",
  },
  'suffix: move | meaning: “the act of moving”': {
    why: 'The suffix -ment turns a verb into a noun for an action. Move keeps its e, because -ment begins with a consonant: move, movement. Another word like this: statement.',
    not: {
      '-er':
        'A mover is a real word, but it is a person or thing that moves, such as a removal firm. It is not the act.',
      '-ie':
        'A movie is a real word, an American word for a film. It names a thing, not the act of moving.',
      '-able':
        'Movable is a real word, but it is a describing word meaning able to be moved. It is not a noun.',
    },
    more: "Movement can also mean a group with a shared aim: 'the movement to protect rainforests'.",
  },
  'suffix: develop | meaning: “the process of developing”': {
    why: 'The suffix -ment turns a verb into a noun for an action or process. Added to develop, it makes development, the process of growing or changing. Another word with -ment: equipment.',
    not: {
      '-er':
        'A developer is a real word, but it is a person or company that develops, such as a builder of houses.',
      '-ed':
        "Developed is a real word, but it is the past tense, or a describing word as in 'a developed country'. It is not a noun.",
      '-tion':
        "The suffix -tion makes nouns from many verbs, but develop does not take it. 'Develoption' is not a word.",
    },
    more: "Develop and development have no e after the p. 'Developement' is a common mistake.",
  },
  'suffix: govern | meaning: “the group of people who govern”': {
    why: 'The suffix -ment turns a verb into a noun. Added to govern, it makes government, the group of people who run a country. Another word with -ment: management.',
    not: {
      '-or':
        'A governor is a real word, but it is one person who governs, such as the governor of a prison. The goal is a group.',
      '-ance':
        'Governance is a real word, but it means the way a country or a company is run, not the people who run it.',
      '-ess':
        'A governess is a real word, but it is a woman once employed to teach children at home, as Jane Eyre is.',
    },
    more: 'Government has an n before the m: govern + ment. Saying it carefully helps: gov-ern-ment.',
  },
  'suffix: danger | meaning: “full of danger”': {
    why: "The suffix -ous means 'full of' or 'having'. Added to danger, it makes dangerous, which means full of danger, likely to cause harm. Another word with -ous: joyous.",
    not: {
      '-ful':
        "The suffix -ful also means 'full of', but danger does not take it. 'Dangerful' is not a word: the word is dangerous.",
      '-less':
        "'Dangerless' is not a standard word, and -less means 'without', the opposite of the goal.",
      '-y': "The suffix -y makes describing words such as stormy, but danger does not take it. 'Dangery' is not a word.",
    },
    more: "Two suffixes can share a meaning, as -ful and -ous both mean 'full of'. The root decides which one is used, so learn the whole word.",
  },
  'suffix: poison | meaning: “containing poison”': {
    why: "The suffix -ous means 'full of' or 'having'. Added to poison, it makes poisonous, which means containing poison. Another word with -ous: mountainous.",
    not: {
      '-er':
        'A poisoner is a real word, but it is a person who poisons someone. It is a noun, not a describing word.',
      '-ful':
        "The suffix -ful means 'full of', but poison does not take it. 'Poisonful' is not a word.",
      '-less':
        "'Poisonless' is not a standard word, and -less means 'without', the opposite of the goal.",
    },
    more: 'Poisonous and venomous are not the same: a poisonous berry harms you if you eat it, and a venomous snake injects its venom by biting.',
  },
  'suffix: fame | meaning: “having fame”': {
    why: "The suffix -ous means 'having' or 'full of'. Fame drops its e before it: fame, famous, which means known by many people. Another word like this: porous.",
    not: {
      '-ful':
        "The suffix -ful means 'full of', but fame does not take it. 'Fameful' is not a word.",
      '-less': "'Fameless' is a rare word meaning without fame, the opposite of the goal.",
      '-ish': "The suffix -ish means 'rather' or 'like', as in reddish, but fame does not take it.",
    },
    more: "Infamous, with in- in front, does not mean 'not famous'. It means famous for something bad, as a villain is.",
  },
  'suffix: mystery | meaning: “full of mystery”': {
    why: "The suffix -ous means 'full of'. Mystery changes its y to i before it: mystery, mysterious, which means strange and hard to explain. Another word like this: harmonious.",
    not: {
      '-ful':
        "The suffix -ful means 'full of', but mystery does not take it. 'Mysteryful' is not a word.",
      '-less': "'Mysteryless' is not a word, and -less means 'without', the opposite of the goal.",
      '-al':
        "The suffix -al makes describing words such as magical, but mystery does not take it. 'Mysterial' is not a word.",
    },
    more: "Mysterious is a strong word for openings: 'A mysterious figure stood at the gate.' It makes a reader ask questions.",
  },
  'suffix: nerve | meaning: “anxious, on edge”': {
    why: 'The suffix -ous makes describing words. Nerve drops its e before it: nerve, nervous, which means anxious or on edge. Another word like this: adventurous.',
    not: {
      '-less':
        'Nerveless is a real word, but it means without strength, or so calm that nothing frightens you. It does not mean anxious.',
      '-ful':
        "The suffix -ful means 'full of', but nerve does not take it. 'Nerveful' is not a word.",
      '-al':
        "The suffix -al makes describing words such as musical, but nerve does not take it. 'Nerval' is not an everyday word.",
    },
    more: "Nervous can be a quick way to name a character's feelings, but showing them is stronger: 'She twisted her ring round and round.'",
  },
  'suffix: thought | meaning: “full of thought for others”': {
    why: "The suffix -ful means 'full of'. Added to thought, it makes thoughtful, which means full of thought for other people, considerate. Another word with -ful: tactful.",
    not: {
      '-less':
        "The suffix -less means 'without'. Thoughtless is a real word, but it means not thinking of others, the opposite of the goal.",
      '-ous':
        "The suffix -ous means 'full of' in words such as joyous, but thought does not take it. 'Thoughtous' is not a word.",
      '-ive':
        "The suffix -ive makes describing words such as active, but thought does not take it. 'Thoughtive' is not a word.",
    },
    more: "Thoughtful has two meanings: 'kind to others' ('a thoughtful gift') and 'deep in thought' ('a thoughtful look'). The sentence tells you which is meant.",
  },
  'suffix: power | meaning: “full of power”': {
    why: "The suffix -ful means 'full of'. Added to power, it makes powerful, which means full of power, strong. Another word with -ful: forceful.",
    not: {
      '-less':
        "The suffix -less means 'without'. Powerless is a real word, but it means without power, unable to act, the opposite of the goal.",
      '-ous':
        "The suffix -ous means 'full of' in words such as joyous, but power does not take it. 'Powerous' is not a word.",
      '-ed':
        "Powered is a real word, but it means driven by something, as in 'a battery-powered torch'. It does not mean full of power.",
    },
    more: 'Powerful and powerless make a handy pair for writing about characters: who holds power in a story, and who has none?',
  },
  'suffix: pain | meaning: “without pain”': {
    why: "The suffix -less means 'without'. Added to pain, it makes painless, which means causing no pain. Another word with -less: spotless.",
    not: {
      '-ful':
        'Painful is a real word, but it means full of pain or causing pain, the opposite of the goal.',
      '-ed':
        "Pained is a real word, but it means showing hurt feelings, as in 'a pained expression'.",
      '-ous':
        "The suffix -ous means 'full of', as in joyous, but pain does not take it. 'Painous' is not a word.",
    },
    more: 'A painless visit to the dentist does not hurt. People also call a task painless when it was quick and easy.',
  },
  'suffix: weight | meaning: “without weight”': {
    why: "The suffix -less means 'without'. Added to weight, it makes weightless, which means having no weight, as astronauts seem to in space. Another word with -less: shapeless.",
    not: {
      '-y': "Weighty is a real word, but it means heavy, or serious and important, as in 'a weighty decision'.",
      '-ed': "Weighted is a real word, but it means made heavier, as in 'a weighted blanket'.",
      '-ful': "The suffix -ful means 'full of', and 'weightful' is not a word.",
    },
    more: 'Weightless and weighty are opposites made from one root with two suffixes: without weight, and full of weight.',
  },
  'suffix: weak | meaning: “the state of being weak”': {
    why: 'The suffix -ness turns a describing word into a noun for a state. Added to weak, it makes weakness, the state of being weak, or a fault. Another word with -ness: softness.',
    not: {
      '-en': 'Weaken is a real word, but it is a verb meaning to make or become weaker.',
      '-ling':
        'Weakling is a real word, but it means a weak person or animal, not the state of being weak.',
      '-ly':
        "Weakly is a real word, but it tells how something is done: 'She smiled weakly.' It is not a noun.",
    },
    more: "Weakness can mean a fault ('His weakness is pride') or a liking ('a weakness for chocolate'). Both help in character writing.",
  },
  'suffix: protect | meaning: “the act of protecting”': {
    why: 'The suffix -tion turns a verb into a noun for an action. Added to protect, it makes protection, keeping someone or something safe. Another word like this: collection.',
    not: {
      '-or': 'A protector is a real word, but it is a person or thing that protects, not the act.',
      '-ive':
        "Protective is a real word, but it is a describing word, as in 'protective gloves'. It is not a noun.",
      '-ment':
        "The suffix -ment makes nouns from verbs, but protect does not take it. 'Protectment' is not a word.",
    },
    more: 'Protect already ends in t, so it simply adds -ion: protect, protection. Compare act, action and select, selection.',
  },
  'suffix: break | meaning: “able to be broken”': {
    why: "The suffix -able means 'able to be'. Added to break, it makes breakable, which means it can be broken, like a glass. Another word with -able: bendable.",
    not: {
      '-age':
        "Breakage is a real word, but it is a noun for something broken, as in 'Breakages must be paid for'.",
      '-er':
        'A breaker is a real word, but it is a big wave, or a person or tool that breaks things. It is a noun.',
      '-ible':
        "The suffix -ible goes with other roots, such as horrible. 'Breakible' is a misspelling.",
    },
    more: 'The opposite is unbreakable, with un- in front: un + break + able. Many long words are built from three small parts like this.',
  },
  'suffix: brave | meaning: “in a brave way”': {
    why: 'The suffix -ly turns a describing word into an adverb that tells how. Brave keeps its e, because -ly begins with a consonant: brave, bravely. Another word like this: safely.',
    not: {
      '-ery':
        'Bravery is a real word, but it is a noun for the quality of being brave. It names; it does not tell how.',
      '-er':
        'Braver is a real word, but it means more brave. It compares; it does not tell how something is done.',
      '-est':
        'Bravest is a real word, but it means the most brave of all. It compares; it does not tell how.',
    },
    more: 'Most words keep the e before a suffix that starts with a consonant (bravely, lonely, tasteful) and drop it before one that starts with a vowel (braver, bravest). A few words break each half of the rule, so learn those by sight.',
  },
  'suffix: punish | meaning: “the act of punishing”': {
    why: 'The suffix -ment turns a verb into a noun for an action or its result. Added to punish, it makes punishment, what is done to someone who has done wrong. Another word with -ment: treatment.',
    not: {
      '-able':
        "Punishable is a real word, but it is a describing word meaning able to be punished, as in 'a punishable offence'.",
      '-er': 'A punisher is a real word, but it is a person who punishes, not the act itself.',
      '-ness':
        "The suffix -ness makes nouns from describing words, not from verbs. 'Punishness' is not a word.",
    },
    more: 'Many nouns for actions end in -ment: treatment, payment, punishment. If the root is a verb, -ment is worth trying.',
  },
  'suffix: courage | meaning: “brave, having courage”': {
    why: "The suffix -ous means 'having' or 'full of'. Courage keeps its e before it, so that the g stays soft: courage, courageous. Another word like this: advantageous.",
    not: {
      '-ful':
        "The suffix -ful means 'full of', but courage does not take it. 'Courageful' is not a word.",
      '-less': "'Courageless' is a rare word meaning without courage, the opposite of the goal.",
      '-ly':
        "'Couragely' is not a word. The suffix -ly makes adverbs from describing words, and courage is a noun.",
    },
    more: "Without the e, the g would sound hard, as in 'gate'. The e keeps it soft, as in 'gem'.",
  },
  'Her writing was so messy it was ___.': {
    why: "Legible means clear enough to read. The 'not' prefix in- becomes il- before a word starting with l, so the two l letters meet: il + legible = illegible, writing nobody can read.",
    not: {
      ilegible:
        'This has the right prefix but only one l. The prefix il- keeps its l and legible keeps its own, so there are two.',
      unlegible:
        'Un- is the wrong prefix here. Legible comes from Latin, and it takes the Latin prefix in-, which changes to il- before l.',
      inlegible:
        'In- is the right prefix, but it changes to il- before an l, to make the word easier to say: illegible, not inlegible.',
    },
    more: 'The prefix in- changes to match the next sound: il- before l, im- before b, m or p, and ir- before r. Other examples: illiterate, impure, irreparable.',
  },
  'It is impossible for _me_ to be ___.': {
    why: 'To be partial is to favour one side. Wickham says he cannot be fair to Darcy, so he needs the word for not taking sides. Before p, in- becomes im-: impartial.',
    not: {
      unpartial:
        'Un- is the wrong prefix. Partial comes from Latin and takes in-, which changes to im- before a p.',
      inpartial:
        'In- is the right prefix, but before a p it changes to im-, because im-p is easier to say than in-p.',
      dispartial:
        "Dis- means 'not' with some roots, such as loyal, but partial is not one of them. 'Dispartial' is not a word.",
    },
    more: "Austen prints 'me' in italics: Wickham stresses that he, of all people, cannot judge Darcy fairly. Readers later learn how false his account is.",
    tip: 'Impartial is a precise word for an essay: a narrator, a judge or a witness can be impartial, or fail to be.',
  },
  'But I was ___ to arrive at the termination of my journey.': {
    why: 'Victor wants his journey to end soon, so he is not patient: impatient. Patient begins with p, and before p the prefix in- becomes im-.',
    not: {
      inpatient:
        "Inpatient is a real word, but it means a patient who stays in hospital overnight. Here in- means 'in', not 'not'.",
      unpatient:
        "Un- is the wrong prefix. Patient takes in-, which becomes im- before p. 'Unpatient' is a common mistake.",
      impatience:
        "Impatience is the noun for the feeling. The sentence needs a describing word after 'was', as in 'I was eager'.",
    },
    more: "Termination means the end. 'Impatient to arrive' shows how much Victor wants the journey over.",
  },
  'I hurried on with ___ steps, not daring to look about me': {
    why: 'Victor is so afraid that his steps are uneven, not regular. Before r, the prefix in- becomes ir-, so two r letters meet: ir + regular = irregular.',
    not: {
      unregular:
        "Un- is the wrong prefix. Regular comes from Latin and takes in-, which becomes ir- before r. 'Unregular' is a common mistake.",
      inregular:
        'In- is the right prefix, but it changes to ir- before an r, to make the word easier to say.',
      iregular:
        'This has the right prefix but only one r. The prefix ir- keeps its r and regular keeps its own, so there are two.',
    },
    more: 'Irregular steps show fear through the body: Victor cannot even walk steadily after seeing what he has made.',
  },
  'I loved her simply because I found her ___.': {
    why: 'Pip cannot resist Estella: she is beyond resisting. Before r, in- becomes ir-, and the ending is -ible: ir + resist + ible = irresistible. Resist is a whole word, which usually means -able, so this ending has to be learned.',
    not: {
      unresistible: 'Un- is the wrong prefix. Resistible takes in-, which becomes ir- before r.',
      inresistible: 'In- is the right prefix, but before an r it changes to ir-: irresistible.',
      irresistable:
        'The prefix is right, but the ending is -ible, even though resist is a whole word: resistible is one of the exceptions to learn. Irresistable is a very common mistake.',
    },
    more: 'Pip admits he loved Estella against all reason. The ir- word suggests a force he could not fight.',
  },
  'a tale otherwise so utterly ___': {
    why: 'Probable means likely to be true. Victor fears no one would believe his story, so it is unlikely: improbable. Before p, in- becomes im-.',
    not: {
      unprobable:
        'Un- is the wrong prefix. Probable comes from Latin and takes in-, which becomes im- before p.',
      inprobable:
        'In- is the right prefix, but it changes to im- before a p, to make the word easier to say.',
      disprobable: "Dis- does not go with probable. 'Disprobable' is not a word.",
    },
    more: "'Improbable' is not as strong as 'cannot be true': an improbable tale could be true, but nobody would expect it. That is exactly Victor's problem.",
  },
  'But she always made such excellent excuses, and purred so affectionately, that it was ___ not to believe in her good intentions.':
    {
      why: 'The cat is so charming that nobody can help believing her: it was not possible not to believe her. Possible begins with p, so in- becomes im-: impossible.',
      not: {
        unpossible:
          "Un- is the wrong prefix. 'Unpossible' is a mistake young children often make; possible takes im-.",
        inpossible: 'In- is the right prefix, but before a p it changes to im-: impossible.',
        imposible: 'The prefix is right, but possible has a double s: im + possible = impossible.',
      },
      more: "Orwell is being dry: the cat never works, yet her excuses always win. 'Impossible not to believe' uses two negatives that cancel out: everyone believed her.",
    },
  'Wearing a woolly hat in a heatwave seemed completely ___.': {
    why: 'Logical means sensible and following reason. A woolly hat in a heatwave makes no sense, so it is not logical: illogical. Before l, in- becomes il-, so two l letters meet.',
    not: {
      unlogical:
        "Un- is the wrong prefix. 'Unlogical' is a common mistake; logical takes in-, which becomes il- before l.",
      inlogical: 'In- is the right prefix, but before an l it changes to il-: illogical.',
      ilogical:
        'The prefix is right but one l is missing. The prefix il- has its own l, and logical starts with another.',
    },
    tip: "Illogical is handy in a debate: 'It is illogical to ban phones but allow tablets' is sharper than 'It does not make sense'.",
  },
  'Here I found some young onions, a couple of gladiolus bulbs, and a quantity of ___ carrots': {
    why: "Mature means fully grown. The carrots are young, like the 'young onions' beside them, so they are not fully grown: immature. Before m, in- becomes im-, so two m letters meet.",
    not: {
      unmature:
        'Un- is the wrong prefix. Mature comes from Latin and takes in-, which becomes im- before m.',
      inmature:
        "In- is the right prefix, but it changes to im- before an m. 'Inmature' is a common mistake.",
      imature:
        'The prefix is right but one m is missing. The prefix im- has its own m, and mature starts with another.',
    },
    more: 'Immature also describes people who behave younger than their age. Here Wells uses it plainly, of vegetables picked before they are ready.',
  },
  'I have sat ___ beside you many and many a day.': {
    why: 'Marley has been beside Scrooge without being seen, so he was not visible: invisible. Visible begins with v, so in- stays as it is.',
    not: {
      unvisible: 'Un- is the wrong prefix. Visible comes from Latin and takes in-.',
      imvisible: 'In- changes to im- only before b, m or p. Before v it stays in-: invisible.',
      invisable:
        'The prefix is right, but the ending is -ible, as in visible. Invisable is a common misspelling.',
    },
    more: 'The line is chilling: Scrooge learns that a ghost has watched him for years without his knowing.',
  },
  'Even now I cannot recollect, without passion, my reveries while the work was ___.': {
    why: 'Victor remembers his daydreams while his work was not yet finished: not complete. Complete begins with c, so in- stays as it is: incomplete.',
    not: {
      uncomplete: "Un- is the wrong prefix. 'Uncomplete' is a common mistake; complete takes in-.",
      imcomplete: 'In- changes to im- only before b, m or p. Before c it stays in-: incomplete.',
      discomplete: "Dis- does not go with complete. 'Discomplete' is not a word.",
    },
    more: 'Reveries are daydreams. Victor still feels the old thrill as he remembers the work he once could not wait to finish.',
  },
  'I listened to my father in silence, and remained for some time ___ of offering any reply.': {
    why: "Capable means able to do something. Victor could not reply at all, so he was not capable: incapable. It fits 'of offering', as in 'capable of'.",
    not: {
      uncapable:
        "Un- is the wrong prefix in modern English: capable takes in-. Shakespeare could write 'uncapable', but Shelley, like English today, uses incapable.",
      incapible: 'The prefix is right, but the ending is -able, as in capable.',
      imcapable: 'In- changes to im- only before b, m or p. Before c it stays in-.',
    },
    more: "Incapable takes 'of': incapable of speech, incapable of lying. A word such as unwilling takes 'to': unwilling to speak.",
  },
  'the morning papers had contained only a very ___ description': {
    why: 'The first reports of the Martians got the facts wrong, so they were not accurate: inaccurate. Accurate begins with a, so in- stays as it is, with one n.',
    not: {
      unaccurate: "Un- is the wrong prefix. 'Unaccurate' is a common mistake; accurate takes in-.",
      innaccurate:
        'The prefix is right but there is one n too many. In- has one n, and accurate starts with a, so nothing doubles.',
      disaccurate: "Dis- does not go with accurate. 'Disaccurate' is not a word.",
    },
    tip: 'A letter doubles at the join only when the root begins with the letter the prefix ends with: in + nate would double, in + accurate does not.',
  },
  'an ___ criticism that made it no less charming': {
    why: "Relevant means connected to the point. Nick says the criticism of Daisy's murmur does not matter: it is not relevant. Before r, in- becomes ir-: irrelevant.",
    not: {
      unrelevant:
        'Un- is the wrong prefix. Relevant comes from Latin and takes in-, which becomes ir- before r.',
      inrelevant: 'In- is the right prefix, but it changes to ir- before an r.',
      irrelevent:
        "The prefix is right, but the ending is -ant: relevant, irrelevant. 'Irrelevent' is a common misspelling.",
    },
    tip: "In an exam, 'irrelevant' is the word examiners use for detail that does not answer the question. Keep every point tied to the task.",
  },
  'Notwithstanding my ___ to settle to anything': {
    why: "Pip means that he could not settle to anything. The noun from able is ability, and its 'not' form takes in-: inability. Notwithstanding means 'in spite of'.",
    not: {
      unability:
        "The describing word takes un- (un + able), but the noun takes in-. 'Unability' is a common mistake.",
      inabilty:
        'The prefix is right, but an i is missing: ability has three i letters, a-bil-i-ty.',
      inabillity: 'The prefix is right, but ability has one l. Only the ending -ity is added.',
    },
    more: 'This pair has to be learned: the describing word and the noun take different prefixes.',
  },
  'The more I looked into the glowing coals, the more incapable I became of looking at Joe; the longer the silence lasted, the more ___ I felt to speak.':
    {
      why: 'Pip cannot bring himself to speak: he is not able to. The describing word able takes un-: unable. A describing word is what the gap after felt needs, as in felt sure or felt ready.',
      not: {
        inable:
          "In- is the wrong prefix for able, even though able comes from Latin: the describing word takes un-. 'Inable' is a common mistake.",
        disable:
          'Disable is a real word, but it is a verb meaning to stop something working. A verb cannot fill the gap after felt.',
        enable:
          'Enable is a real word, but it is a verb meaning to make something possible. A verb cannot fill the gap after felt.',
      },
      more: "Dickens puts incapable and unable side by side, two different 'not' prefixes for nearly the same meaning, as Pip sinks into guilty silence.",
    },
  'the ___ hideousness of my person was the chief object of horror': {
    why: 'The creature knows his ugliness is not like anything in nature: it is unnatural. Natural takes un-, and the two n letters meet: un + natural.',
    not: {
      innatural:
        "In- is the wrong prefix for natural. Natural comes from Latin, yet it takes un-: a Latin root does not settle it. 'Innatural' is a common mistake.",
      unatural:
        'The prefix is right but one n is missing. Un- ends in n and natural starts with n, so there are two.',
      disnatural: "Dis- does not go with natural. 'Disnatural' is not a word.",
    },
    more: 'Unnatural is a key word in Gothic stories: it marks something that breaks the order of nature, as the creature himself does.',
  },
  'I shall watch their progress with ___ anxiety': {
    why: 'To utter is to speak. The creature means an anxiety too great to put into words: not utterable. Utter is an old English word, and it takes un-: unutterable.',
    not: {
      inutterable: 'In- is the wrong prefix. Utter is an everyday English word, and it takes un-.',
      disutterable: "Dis- does not go with utter. 'Disutterable' is not a word.",
      unutterible:
        'The prefix is right, but the ending is -able: utter is a whole word, and whole words usually take -able.',
    },
    more: 'Words such as unutterable say that a feeling is beyond language, which tells a reader how strong it is.',
  },
  'I suffered ___ trouble while I considered and reconsidered whether I should at last dissolve that spell of my childhood and tell Joe all the story.':
    {
      why: 'Pip means trouble too great to describe in words. Speak is an English word, and the describing word built on it takes un-: un + speak + able.',
      not: {
        inspeakable:
          'In- is the wrong prefix. Speak is an everyday English word, and it takes un-.',
        disspeakable: "Dis- does not go with speak. 'Disspeakable' is not a word.",
        unspeakible:
          'The prefix is right, but the ending is -able: speak is a whole word, and whole words usually take -able.',
      },
      more: "Pip's guilt about the convict is so strong that it feels beyond words, though it is only a boy's secret.",
    },
  'Then he fell into such ___ fits of meditation, with his fork midway between his plate and his mouth':
    {
      why: 'Pip cannot explain why Joe keeps stopping to think, fork in the air: there is no accounting for it. Accountable takes un-: unaccountable, meaning that nobody could explain it.',
      not: {
        inaccountable: "In- is the wrong prefix for accountable. 'Inaccountable' is not a word.",
        disaccountable: "Dis- does not go with accountable. 'Disaccountable' is not a word.",
        unaccountible:
          'The prefix is right, but the ending is -able: account is a whole word, and whole words usually take -able.',
      },
      more: 'Joe is uncomfortable in his best clothes in London, and Pip, embarrassed by him, describes his manners as strange. The comedy has a cruel edge.',
    },
  'And again, since no animal now stole, it was ___ to fence off pasture from arable land': {
    why: 'With no stealing, fences were not needed: not necessary. Un- ends in n and necessary begins with n, so the word has two n letters, then one c and two s letters: un-ne-ce-ssary.',
    not: {
      unecessary:
        'One n is missing. The prefix un- keeps its n, and necessary keeps its own, so two n letters meet.',
      unneccessary:
        'The n letters are right, but necessary has one c and two s letters, not two c letters.',
      unnecesary: 'The n letters are right, but necessary has two s letters: ne-ce-ssary.',
    },
    tip: 'A way to remember necessary: one collar (one c) and two sleeves (two s letters). Add un- in front and keep every letter.',
  },
  'I felt more than ever ___ with my home and with my trade and with everything': {
    why: 'After visiting Miss Havisham, Pip is discontented with his whole life: not satisfied. Dis- ends in s and satisfied begins with s, so two s letters meet: dis + satisfied.',
    not: {
      disatisfied:
        'One s is missing at the join. The prefix dis- keeps its s, and satisfied keeps its own.',
      dissatified: 'The join is right, but an s is missing inside the root: sat-is-fied.',
      dissatisfyed: 'The join is right, but satisfy changes its y to i before -ed: satisfied.',
    },
    more: "Pip's dissatisfaction is the engine of the novel: once he has seen Satis House, the forge and Joe no longer seem enough.",
  },
  'I come back ignorant and ___.': {
    why: 'Walton has to turn back without reaching the Pole, so his hopes are let down. The word is dis + appointed: one s, because appointed begins with a, and two p letters from appointed itself.',
    not: {
      dissapointed:
        'Only one s belongs here. Appointed begins with a, so nothing doubles at the join.',
      disapointed: 'The join is right, but appointed has two p letters: ap-pointed.',
      dissappointed:
        'This doubles both letters. Only the p is double, and it belongs to appointed: dis + appointed.',
    },
    tip: 'Split the word to spell it: dis + appoint + ed. Each part keeps exactly the letters it had.',
  },
  'perhaps, if I walk softly, I can slip away ___.': {
    why: 'Jane hopes to leave without being seen: not noticed. Un- ends in n and noticed begins with n, so the word has two n letters: un + noticed.',
    not: {
      unoticed: 'One n is missing. The prefix un- keeps its n, and noticed keeps its own.',
      innoticed: 'In- is the wrong prefix. Noticed is an English word and takes un-.',
      unnotised: 'The prefix is right, but notice is spelt with a c: noticed.',
    },
  },
  'The imaginary student pursued by the ___ creature he had impiously made': {
    why: 'The creature is badly formed: wrongly shaped. Mis- means wrongly, and shapen begins with s, so two s letters meet: mis + shapen.',
    not: {
      mishapen: 'One s is missing. The prefix mis- keeps its s, and shapen keeps its own.',
      misshappen: 'The join is right, but shapen has one p, as in shape.',
      disshapen:
        'Dis- does not go with shapen. The word for badly shaped uses mis-, which means wrongly.',
    },
    more: 'Pip is thinking of Frankenstein here: he feels pursued by Magwitch, the man who made his fortune, as Victor is pursued by the creature he made.',
  },
  "he didn't know whether a ghost so transparent might find himself in a condition to take a chair":
    {
      why: "Trans- means 'across' or 'through'. Something transparent can be seen through, as Marley's ghost can: Scrooge wonders whether a see-through ghost can even sit on a chair.",
      not: {
        'able to pass through walls':
          'Ghosts may do that, but it is not what transparent means. Trans- here goes with seeing: light passes through it.',
        'pale and very thin':
          'A ghost may be pale, but transparent means more than pale: you can see right through it.',
        'shining with a cold light':
          'That would be a glowing ghost. Transparent means that you can see through it, not that it shines.',
      },
      more: 'Other trans- words: transport (carry across), translate (carry across into another language), transatlantic (across the Atlantic).',
    },
  'found his supernatural visitor confronting him in an erect attitude': {
    why: "Super- means 'above' or 'beyond'. A supernatural visitor, here Marley's ghost, comes from beyond the natural world: nothing in nature can explain it.",
    not: {
      'very large and powerful':
        'Super- can mean very great, as in superstar, but here it goes with natural: beyond nature, not big.',
      'arriving without warning':
        'Marley does arrive suddenly, but that is not what supernatural means. It means beyond nature.',
      'strangely dressed':
        'Marley is dressed oddly, in chains, but supernatural says where he comes from: beyond the natural world.',
    },
    tip: "Supernatural is a key word for Gothic writing. 'The supernatural' as a noun covers ghosts, spirits and witches, as in Macbeth.",
  },
  'three faint points of light, three telescopic stars infinitely remote': {
    why: "Tele- means 'far' or 'at a distance', and scope means look. Telescopic stars are so far away that they can be seen only through a telescope, which fits 'infinitely remote'.",
    not: {
      'shaped like a long tube':
        'A telescope is a tube, but the stars are not tube-shaped. Telescopic says how they are seen.',
      'shining brightly and close':
        "The sentence calls them faint and 'infinitely remote': far away, not close or bright.",
      'moving quickly across the sky': 'Nothing in telescopic is about speed. Tele- means far.',
    },
    more: 'Tele- words all reach across a distance: telephone (sound from far away), television (pictures from far away), telescope (seeing far).',
  },
  'A monstrous tripod, higher than many houses, striding over the young pine trees': {
    why: "Tri- means 'three', and -pod comes from a Greek word for foot. The Martians' fighting machine strides on three tall legs.",
    not: {
      'It stands on two legs.': 'Two is what bi- means, as in bicycle. Tri- means three.',
      'It stands on four legs.': 'Four is what quad- means, as in quad bike. Tri- means three.',
      'It stands on eight legs.': 'Eight is what octo- means, as in octopus. Tri- means three.',
    },
    more: 'A camera tripod has three legs too, which is why it stands steady on uneven ground.',
  },
  'with the nine young dogs forming a semicircle round them': {
    why: "Semi- means 'half'. The dogs form half a circle round Napoleon, Squealer and Minimus at the front of the platform, guarding them from the animals facing them.",
    not: {
      'a small ring': 'Small is what micro- means. Semi- means half.',
      'a full ring': 'A full ring is a circle. Semi- cuts it in half.',
      'two rings': 'Two is what bi- means, as in bicycle. Semi- means half.',
    },
    more: "Orwell's picture matters: the pigs now sit behind a wall of dogs. A semicircle faces outwards, towards the animals it controls.",
  },
  'I foresaw what was coming, and I felt that this time I really was gone.': {
    why: "Fore- means 'before'. Pip foresaw the trouble: he could see it coming before it happened, because he knew the pie he had stolen would be found missing.",
    not: {
      'again, a second time': 'Again is what re- means, as in replay. Fore- means before.',
      'from a long way off': 'Far off is what tele- means. Fore- means before.',
      'wrongly or badly': 'Wrongly or badly is what mis- means. Fore- means before.',
    },
    more: 'Fore- words look ahead: forecast (say what the weather will do), forewarn (warn in advance), foresight (thinking ahead).',
  },
  'And in a postscript here he says ‘alone.’': {
    why: "Post- means 'after', and script means writing. A postscript is a note written after the end of a letter, the P.S. at the bottom.",
    not: {
      'a note written before the letter':
        'Before is what pre- means, the opposite of post-. A postscript comes after the letter.',
      'a secret message in code':
        "Hamlet's letter is no code. Post- means after: the postscript is added at the end.",
      'the address on the envelope':
        'That goes on the outside. Post- here has nothing to do with the post: it means after.',
    },
    more: 'Other post- words: postpone (put off until after), post-war (after a war). Pre- and post- make an easy pair to remember.',
  },
  'But this is not to be a regular autobiography': {
    why: "Auto- means 'self', bio- means life and -graphy means writing. An autobiography is a life written by the person who lived it, as Jane tells her own story.",
    not: {
      'a life story told by a friend or a fan':
        'That is a biography, without auto-. Auto- means self: the writer is the person the story is about.',
      'a book about cars and how they work':
        'Auto is short for automobile, a car, but auto- itself means self: an automobile moves by itself.',
      'a diary kept from day to day':
        'A diary is written as you go. Jane looks back over her life, and auto- tells you she writes about herself.',
    },
    more: 'Auto- + bio- + -graphy: self, life, writing. A biography, without auto-, is a life written by someone else.',
  },
  'Biddy leading with a high shrill monotonous voice': {
    why: "Mono- means 'one'. A monotonous voice stays on one tone, never rising or falling, so it sounds dull. Biddy leads the class reading in exactly that way.",
    not: {
      'It is pitched high and sharp.':
        "That is what 'high shrill' tells you. Monotonous adds something else: the voice never changes.",
      'It shouts over everyone.':
        'Nothing in monotonous is about loudness. Mono- means one: one tone throughout.',
      'It is full of feeling.':
        'A monotonous voice has no rise and fall, so it carries little feeling at all.',
    },
    tip: "Monotonous is a precise word for dullness in a description: 'the monotonous ticking of the clock'.",
  },
  'I am no bird; and no net ensnares me': {
    why: "A snare is a trap. The prefix en- means 'put into', and it turns the noun into a verb: to ensnare is to catch someone in a trap. Jane says no trap can hold her.",
    not: {
      'makes it mean the opposite: to free':
        'Reversing an action is what un- does, as in untie. En- means put into: ensnared is caught, not freed.',
      'makes it happen again':
        'Again is what re- means. En- means put into, and it turns snare into a verb.',
      'makes it smaller: a little snare':
        'Small is what mini- or -let means, as in minibus or piglet. En- means put into, and it turns snare into a verb.',
    },
    more: 'Other en- verbs: enslave (make a slave of), endanger (put in danger), encircle (put in a circle).',
  },
  'You shall outlive the lady whom you serve.': {
    why: "Before a verb, out- can mean 'more than' or 'longer than'. The Soothsayer tells Charmian she will live longer than Cleopatra, the lady she serves.",
    not: {
      'live outside a place':
        'Out- can mean outside, as in outdoors, but before a verb such as live it means longer or more than.',
      'live without something': 'Without is what -less means. Out- before a verb means more than.',
      'live again': 'Again is what re- means, as in relive. Out- means longer than.',
    },
    more: 'Other out- verbs work the same way: outrun (run faster than), outgrow (grow bigger than), outnumber (be more than).',
  },
  'But he really is ___, and above small jealousy and spite, I have heard?': {
    why: "Estella means Matthew Pocket wants nothing for himself: he is free of self-interest, so he is 'above small jealousy and spite'. That is what disinterested means: not acting for your own gain.",
    not: {
      uninterested:
        "Uninterested means bored, not curious. It does not fit 'above small jealousy and spite', which is about wanting nothing for yourself.",
      uninteresting:
        'Uninteresting means dull. Estella is praising his character, not calling him boring.',
      interested:
        'Interested would mean wanting something for himself, which is the opposite of being above jealousy and spite.',
    },
    more: 'Many people now use disinterested to mean bored, but the older meaning, free of self-interest, is still the precise one, and it is the one Dickens uses.',
    tip: 'In an essay, call a narrator or a judge disinterested when they have nothing to gain; call a reader uninterested when they are bored.',
  },
  'Miss Eyre has been an ___ companion to me, and a kind and careful teacher to Adèle.': {
    why: "Mrs Fairfax is praising Jane: she has been worth more than anyone could measure. Invaluable looks like 'not valuable', but it means too valuable to put a value on.",
    not: {
      valueless:
        'Valueless means worth nothing, which is the opposite of the praise in the rest of the sentence.',
      unvaluable: "'Unvaluable' is not a word. The word Mrs Fairfax needs means priceless.",
      devalued:
        "Devalued means made worth less. Nothing in the sentence says Jane's worth has gone down.",
    },
    more: "Here in- does mean 'not', but valuable keeps an old sense, 'able to be valued': invaluable is too precious to be valued at all. Priceless works the same way: too precious to have a price.",
  },
  'A shark is neither good nor wicked: it has no sense of right and wrong at all. It is ___.': {
    why: "The prefix a- can mean 'without', as in asymmetrical. Amoral means without any sense of right and wrong. A shark cannot choose to do wrong; it simply has no morals.",
    not: {
      immoral:
        'Immoral means knowing right from wrong and choosing wrong. The sentence says the shark has no sense of right and wrong at all.',
      moralistic:
        'Moralistic means always telling others how to behave. A shark does nothing of the kind.',
      demoralised:
        'Demoralised means having lost hope or confidence. It says nothing about right and wrong.',
    },
    tip: 'Amoral and immoral are handy in essays about villains: a villain who knows he is wicked is immoral; a force of nature is amoral.',
  },
  'The guards ___ the intruder and led him away.': {
    why: "The guards took the intruder's weapons from him. Dis- reverses a verb: to disarm is to take weapons away. It is an action, which fits 'The guards ___ the intruder'.",
    not: {
      unarmed:
        "Unarmed is a describing word for someone with no weapons. An old verb, unarm, once meant to disarm, but today the action is disarm: 'the guards unarmed him' sounds wrong.",
      rearmed:
        'Rearmed means gave weapons again, the opposite of what guards would do to an intruder.',
      forearmed:
        "Forearmed means prepared in advance, as in 'forewarned is forearmed'. It does not fit here.",
    },
    more: 'Dis- on a verb undoes the action: disarm, disconnect, disinfect. Un- on a describing word means not: unarmed, unsafe.',
  },
  'The runner was ___ for setting off before the starting pistol.': {
    why: 'A false start breaks the rules, so the runner is removed from the race: disqualified. Dis- reverses qualified, taking the right to compete away.',
    not: {
      unqualified:
        'Unqualified means without the right training or certificates, as in an unqualified doctor. It is not a punishment for a false start.',
      overqualified:
        'Overqualified means having more qualifications than a job needs. It has nothing to do with a race.',
      qualified:
        'Qualified would mean allowed to compete, the opposite of what happens after a false start.',
    },
  },
  'The flood ___ hundreds of families from their homes.': {
    why: "To displace is to force someone out of the place where they belong. The flood drove families out of their homes, and 'from their homes' fits displaced.",
    not: {
      misplaced:
        'To misplace is to put something in the wrong place and lose it, like keys. A flood does not lose families.',
      replaced:
        'To replace is to put something back, or swap it for another. The families were driven out, not swapped.',
      placed:
        "Placed would mean put somewhere on purpose. 'Placed from their homes' is not English.",
    },
    more: 'Displaced people is the phrase used in the news for people forced from their homes by war or disaster.',
  },
  'Britain ___ most of its bananas, because they will not grow in our cool climate.': {
    why: "The root port means carry. Here im- means 'in', not 'not': to import is to bring goods into a country. Bananas cannot grow here, so they are brought in.",
    not: {
      exports:
        'Ex- means out. To export is to send goods out of a country, which Britain cannot do with bananas it does not grow.',
      transports:
        'To transport is to carry something from one place to another. It does not say the bananas come into the country.',
      deports: 'To deport is to send a person out of a country by law. It is not used of goods.',
    },
    more: 'In- and im- have two meanings: not (impolite) and in or into (import, inhale). The sentence tells you which one is working.',
  },
  'When the engine caught fire, the pilot pressed a button to ___ from the plane.': {
    why: "The root ject means throw. E- means 'out': to eject is to be thrown out. A pilot's seat shoots out of a plane in danger.",
    not: {
      inject: 'In- means into. To inject is to put a liquid into something, as with a needle.',
      reject: 'Re- means back. To reject is to refuse something, to throw it back.',
      project:
        'Pro- means forward. To project is to throw forward, such as a picture onto a screen.',
    },
    more: 'The root ject, throw, is in many words: eject (throw out), inject (throw in), reject (throw back), object (throw against).',
  },
  'The figure of the Martian grew smaller as he ___, and presently the mist and the gathering night had swallowed him up.':
    {
      why: "The root cede means go. Re- means 'back': to recede is to move back into the distance, which is why the Martian grew smaller until the mist hid him.",
      not: {
        preceded:
          'Pre- means before. To precede is to come before something. It does not explain why the Martian looked smaller.',
        conceded:
          'To concede is to admit or give up a point. It has nothing to do with moving away.',
        exceeded: 'To exceed is to go beyond a limit. Nothing here is beyond a limit.',
      },
      more: 'Recede is used of things moving back: a tide recedes, floodwater recedes, a hairline recedes.',
    },
  'The team ___ their opponents, expecting an easy win, and lost 5-0.': {
    why: "Under- means 'too little'. The team rated their opponents too low, expecting an easy win, and paid for it: they underestimated them.",
    not: {
      overestimated:
        "Over- means too much. Overestimating opponents means expecting them to be stronger than they are, which does not fit 'expecting an easy win'.",
      outplayed:
        'To outplay a team is to play better than them. A team that lost 5-0 did not outplay anyone.',
      outnumbered:
        'To outnumber is to be more in number. Two teams have the same number of players.',
    },
  },
  'Fallen leaves slowly ___ and feed the soil.': {
    why: "De- means 'undo' or 'break down'. To decompose is to break down into simpler parts, which is how leaves rot and feed the soil.",
    not: {
      compose: 'To compose is to put together, such as music or a letter. Leaves do not compose.',
      expose: 'To expose is to uncover or show. It does not describe leaves rotting.',
      impose: 'To impose is to force something on someone, such as a rule. It does not fit leaves.',
    },
    more: 'One root, many prefixes: compose (put together), decompose (break down), expose (put out on show), impose (put on).',
  },
  'Every where I see bliss, from which I alone am irrevocably ___.': {
    why: "Ex- means 'out'. The creature sees joy everywhere but is shut out of it, for ever: excluded. 'From which' fits, as in 'excluded from'.",
    not: {
      included:
        'In- here means in. Included would mean he shares the bliss, the opposite of his complaint.',
      concluded:
        'To conclude is to finish, or to decide. It does not fit being shut out of happiness.',
      deluded:
        'Deluded means fooled into believing something false. It does not fit being shut out.',
    },
    more: 'Irrevocably means in a way that can never be undone: ir- (not) + revoke (call back) + -able + -ly. The creature feels shut out for good.',
  },
  'Napoleon ___ from the farmhouse, wearing both his medals': {
    why: "E- means 'out'. To emerge is to come out into view. Napoleon comes out of the farmhouse like a ruler appearing before his people.",
    not: {
      submerged:
        'Sub- means under. Submerged means sunk under water, which makes no sense for leaving a farmhouse.',
      merged: 'Merged means joined together. Napoleon did not join with the farmhouse.',
      immersed:
        "Immersed means plunged into something, such as water or work. 'Immersed from the farmhouse' is not English.",
    },
    more: 'Orwell lets the verb do the work: Napoleon now emerges rarely, wearing medals he gave himself, like a king.',
  },
  'as I dabbled among the unhallowed damps of the grave': {
    why: "Hallowed means made holy, as a churchyard is. Un- reverses it: unhallowed means unholy. Victor's work among graves becomes a crime against what is sacred, not just an experiment.",
    not: {
      'It shows the graves were new and the soil still wet.':
        'Damps does mean the wet of the grave, but the question is about un-. Unhallowed is about holiness, not soil.',
      'It suggests he treated the bodies of the dead with great care and respect.':
        'Un- reverses hallowed, so the word suggests the opposite of respect: Victor disturbs what should be left in peace.',
      'It shows he worked by night, when no one could see him.':
        'His work was secret, but unhallowed says something else: that it breaks what is holy.',
    },
    more: "Mary Shelley returns to the word: Victor later dreads anyone learning of his 'unhallowed acts'. The prefix keeps reminding readers that his science trespasses on sacred ground.",
    tip: "In an essay, a prefix can carry your point: 'The prefix un- presents Victor's work as a violation of the sacred.'",
  },
  'Such unscientific balderdash': {
    why: "Un- turns scientific into its opposite. To Lanyon, a cautious man of science, calling Jekyll's work unscientific, and balderdash (nonsense), is the harshest dismissal he can give.",
    not: {
      'He admires Jekyll for daring to go further than ordinary science has ever gone.':
        'Lanyon is angry, not admiring: he flushes purple as he speaks. Un- rejects the work rather than praising it.',
      "He admits that Jekyll's science is too difficult for him to follow.":
        'Lanyon does not say he cannot follow it. He says it is not science at all.',
      'He believes Jekyll has made one small mistake in an experiment.':
        'One mistake would still be science. Un- denies that the work is science in the first place.',
    },
    more: "The irony is that Jekyll's 'unscientific' ideas work. Lanyon is later shattered by seeing them succeed.",
  },
  'minds that are to our minds as ours are to those of the beasts that perish, intellects vast and cool and unsympathetic':
    {
      why: "Sympathetic means feeling for others. Un- removes that: the Martians' huge minds have no feeling for us. Beside 'vast and cool', the word makes their intelligence cold and threatening.",
      not: {
        'They are lonely and long for human friendship and kindness.':
          'Nothing here suggests longing. Unsympathetic means without fellow feeling: they do not care for humans at all.',
        'They are too stupid to understand how humans feel.':
          'The line calls their intellects vast. They understand well enough; they simply do not care.',
        'They pity humans for being so small, but cannot find any way to help them.':
          'Pity is a kind of sympathy, and un- takes all sympathy away.',
      },
      more: "Wells compares humans to 'the beasts that perish': the Martians look at us as we look at animals, without sympathy.",
    },
  'These Seven Commandments would now be inscribed on the wall; they would form an unalterable law by which all the animals on Animal Farm must live for ever after.':
    {
      why: 'Un- + alter + -able: not able to be changed. The pigs later change the commandments one by one, so a law meant never to change keeps changing.',
      not: {
        'The animals cannot read, so nobody ever knows what the law says.':
          'Some animals read poorly, but the pigs read well, and use it. The irony is that the unchangeable law is changed.',
        'The law is painted so high that no animal can reach to change it.':
          'The height of the wall is not the point. The pigs do change the law, with a ladder and a pot of paint.',
        'The animals hold a meeting and vote to change the law, which shows that they are truly free.':
          'The animals never vote on it. The pigs change it in secret, which shows the animals are not free.',
      },
      more: "'No animal shall drink alcohol' becomes 'No animal shall drink alcohol to excess'. Each change looks small, which is how the pigs get away with it.",
    },
  'Come, you spirits\nThat tend on mortal thoughts, unsex me here,\nAnd fill me, from the crown to the toe, top-full\nOf direst cruelty':
    {
      why: "Un- reverses: to unsex is to take away her sex. She asks the spirits to remove what she sees as a woman's softness, pity and remorse, and to fill her with 'direst cruelty' instead.",
      not: {
        'To be turned into a man in body, so that she can lead an army.':
          "She does not ask to lead an army. Unsex is about removing feeling, as 'fill me ... Of direst cruelty' shows.",
        'To be made invisible, so that nobody can see her that night.':
          'She does later ask the night to hide the deed, but unsex is about changing what she feels, not being seen.',
        'To forget that she is married, so she can leave Macbeth for ever.':
          'Nothing here is about leaving Macbeth. She wants the hardness to help him to the crown.',
      },
      more: "The spirits she calls on serve thoughts of murder. To Shakespeare's audience, a woman asking to lose her womanhood would have seemed deeply wrong, against nature itself.",
    },
  'This was the most unkindest cut of all;': {
    why: "Un- + kind + -est means the least kind, and Antony adds most as well. The doubled superlative piles on emphasis: of all the wounds, the one from Caesar's friend Brutus was the cruellest.",
    not: {
      'Antony is so upset that he makes a mistake in his grammar.':
        "Shakespeare's audience accepted a double superlative for emphasis. Antony is a skilled speaker, choosing words to move the crowd.",
      "It suggests that Brutus's stab was the gentlest of all the wounds.":
        'Unkindest means least kind, the cruellest, not the gentlest. Un- reverses kind.',
      'It shows that Caesar thought every one of his killers was unkind.':
        "Antony singles out one cut, Brutus's. The point is that a friend's blow hurts most.",
    },
    more: 'Kind once also meant natural, as in kin, family. Brutus was like a son to Caesar, so his cut was unkind in both senses: cruel and against nature.',
  },
  'O deadly sin, O rude unthankfulness': {
    why: 'Un- + thank + -ful + -ness: the state of not being thankful. The Prince could have had Romeo executed but banished him instead. The Friar calls it a sin not to be thankful for that mercy.',
    not: {
      'Forgetting to thank the Friar for hiding him in his cell.':
        "The Friar is not asking for thanks for himself. He means the Prince's mercy, which Romeo cannot see.",
      'Being too grateful, so that he seems weak in front of others.':
        'Un- reverses the meaning: unthankfulness is a lack of gratitude, not too much of it.',
      'Refusing to say thank you to Juliet for her loyalty.':
        'Juliet is not the point here. The Friar means the mercy of the Prince.',
    },
    more: 'Four parts make the word: un + thank + ful + ness. Splitting a long word like this is the quickest way to its meaning.',
  },
  'The quarrel with Lanyon was incurable.': {
    why: 'In- + cure + -able: not able to be cured. Doctors cure the sick, so the medical word suits them, and it suggests their old bond is past saving.',
    not: {
      'It shows the quarrel was small and would soon be forgotten.':
        'In- reverses curable: the quarrel can never be healed, the opposite of soon forgotten.',
      'It suggests that Jekyll is searching for a medicine to cure his friend Lanyon.':
        'The word is a metaphor for the quarrel, not a real search for a cure.',
      'It shows that both doctors have agreed about a new medicine.':
        'They disagree, sharply. Incurable says the quarrel cannot be mended.',
    },
    more: "The quarrel began over Jekyll's experiments, which Lanyon could not accept. Words from medicine run through the novel, fitting its world of doctors and lawyers.",
  },
  'Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.':
    {
      why: 'Self- means of or by itself. Self-contained means holding everything within: like an oyster shut in its shell, Scrooge keeps his feelings and his money closed off from others.',
      not: {
        'He lives in a small flat that has its own front door.':
          'That is what an estate agent means by a self-contained flat. Dickens means Scrooge himself, shut in like an oyster.',
        'He is a careful businessman who never wastes a single penny of his money.':
          'Scrooge is mean with money, but self-contained describes his nature: closed, sharing nothing.',
        'He is shy and nervous whenever he meets a stranger.':
          'Scrooge is not shy: he is rude to visitors. Self-contained means closed off, not nervous.',
      },
      more: 'The list builds one idea: secret, self-contained, solitary. Each word shuts Scrooge further away, which makes his change at the end more striking.',
    },
  'they had better do it, and decrease the surplus population.': {
    why: 'Sur- means over or beyond, as in surpass. A surplus is an amount over what is needed. Scrooge talks of poor people as if they were extra stock: a cold, business word for human lives.',
    not: {
      'As people who are too ill to work for their living.':
        'Nothing in surplus is about illness. It means more than is needed.',
      'As people who deserve kindness and help from the rich at Christmas.':
        "That is the visitors' view, not Scrooge's. Surplus treats the poor as extra, not as deserving.",
      'As people who live far away from the city of London.':
        "Surplus is about number, not place: too many people, in Scrooge's view.",
    },
    more: 'The Ghost of Christmas Present later throws the phrase back at Scrooge when he asks whether Tiny Tim will live, and Scrooge is ashamed.',
  },
  'It is the star to every wandering bark,\nWhose worth’s unknown, although his height be taken.': {
    why: 'Love is compared to the star that guides ships. Sailors can measure its height to steer by, but un- + known says its true worth is beyond knowing: love is precious beyond measure.',
    not: {
      'Nobody has ever seen the star, so it may not even exist.':
        'The star is seen; sailors steer by it. What is unknown is its worth, not whether it exists.',
      'It is worth nothing at all, like a love that fades as people grow older.':
        'Unknown worth is not no worth. The sonnet praises love as precious, not worthless.',
      'Sailors know exactly what the star is worth to them.':
        'Un- says the opposite: its worth is not known, though its height is.',
    },
    more: 'A bark is a sailing boat. The whole sonnet defines true love by what it is not: it does not alter, bend or end.',
  },
  'If you can fill the unforgiving minute\nWith sixty seconds’ worth of distance run,': {
    why: 'Un- + forgive + -ing: a minute that does not forgive. Kipling treats time like a strict judge: it lets nothing off, so you must fill each of its sixty seconds.',
    not: {
      'It is too short to forgive anyone who has hurt you.':
        'The poem is not about forgiving people. It is the minute that does not forgive.',
      'It forgives every mistake, as long as you run fast enough to make up for it.':
        'Un- says the opposite: the minute forgives nothing.',
      'It passes so slowly that you grow bored and tired.':
        'Nothing here is about boredom. The minute is strict, so you must use all of it.',
    },
    more: 'Giving time a human quality, forgiving or not, is personification. The prefix turns a plain minute into a stern master.',
  },
  'What immortal hand or eye\nCould frame thy fearful symmetry?': {
    why: 'Mortal means bound to die. Im- reverses it: an immortal hand belongs to a being who never dies, so the speaker wonders what kind of god could make something as fearsome as the tiger.',
    not: {
      'The tiger itself will live for ever and never grow old.':
        'Immortal describes the hand that made the tiger, not the tiger itself.',
      'The maker is a famous artist whom everyone remembers.':
        "Immortal can mean long remembered, as in 'an immortal poem', but here it describes a maker beyond any human.",
      'The maker must be as cruel and wicked as the tiger.':
        'The poem asks what the maker is like. Immortal tells us only that it cannot die.',
    },
    more: 'The whole poem is a string of questions about the maker. Im- lifts the questions from a craftsman to a god.',
  },
  'Whose misadventur’d piteous overthrows\nDoth with their death bury their parents’ strife.': {
    why: 'Mis- means badly or wrongly, and a misadventure is an accident, something that goes wrong by chance. The Prologue tells the audience that mishap and fate, not evil, bring the lovers down.',
    not: {
      'They are a punishment for a crime that the lovers knowingly chose to commit.':
        'Mis- points to bad luck, not guilt. The Prologue asks the audience to pity the lovers.',
      'They happen at the end of a brave and exciting journey.':
        'An adventure can be exciting, but mis- turns it into a mishap.',
      'They were planned by the two families from the very start.':
        "Nothing is planned: a misadventure is an accident. The families' quarrel is the cause, not a plot.",
    },
    more: 'Piteous means deserving pity. Together the two words tell the audience how to feel before the play has even begun.',
  },
  'I have no spur\nTo prick the sides of my intent, but only\nVaulting ambition, which o’erleaps itself\nAnd falls on th’ other':
    {
      why: 'O’er is over, so o’erleaps is overleaps: jumps too far. Macbeth pictures his ambition as a rider who vaults so hard that he goes right over the horse and lands on the other side.',
      not: {
        'It is so small that it will never leap high enough to matter.':
          'Vaulting means leaping high. The danger is too much ambition, not too little.',
        'It will carry him safely over every obstacle between him and the crown.':
          'Over- here means too much: the leap goes past its target and ends in a fall.',
        'It makes him run away from danger whenever he is afraid.':
          'Nothing here is about running away. Ambition drives him on, too far.',
      },
      more: 'The spur and the horse belong to one picture: Macbeth has no good reason to kill, only ambition, which will bring him down.',
      tip: 'Over- often means too much: overleap, overreach, overconfident. It is a neat way to show a character going too far.',
    },
  'Hitherto I have recorded in detail the events of my insignificant existence: to the first ten years of my life I have given almost as many chapters.':
    {
      why: 'In- + significant: not important. Jane modestly calls her life insignificant, yet she has given almost ten chapters to ten years, which hints that a child’s life matters more than she claims.',
      not: {
        'She boasts that her life has been full of great events worth recording.':
          'In- reverses significant: she calls her life unimportant, the opposite of boasting.',
        'She admits that she has forgotten most of her childhood.':
          "She has recorded it 'in detail', so she remembers it well.",
        'She says her life has been too sad for her to describe.':
          'She does not say it was too sad to tell. She has just told it, in detail.',
      },
      more: 'Hitherto means until now. Jane is a poor, plain orphan whom the world calls insignificant, and the novel argues against that judgement.',
    },
  'The freshness of her beauty was indeed gone, but its indescribable majesty and its indescribable charm remained.':
    {
      why: 'In- + describe + -able: not able to be described. Pip repeats the word: her youth is gone, but something in her is beyond what words can catch, and the repetition shows his lasting love.',
      not: {
        'She has grown plain and dull, with nothing left worth describing.':
          'The sentence says her majesty and charm remained. Indescribable means too fine for words, not nothing to describe.',
        'He cannot remember clearly what she looked like any more.':
          'He is looking at her as he speaks. The word is about the limits of language, not memory.',
        'He refuses to describe her because he is still angry.':
          'Nothing here is angry. Pip is struck by her, as he always was.',
      },
    },
  'The thunder ceased; but the rain still continued, and the scene was enveloped in an impenetrable darkness.':
    {
      why: 'Im- + penetrate + -able: not able to be got through. Victor has just seen the creature vanish up a mountainside, and now the dark swallows everything, so the word builds dread of what is hidden.',
      not: {
        'It is thin and fading now that the storm is over.':
          'The thunder has stopped, but the darkness has not thinned: im- says nothing can get through it.',
        'It is lit up again and again by bright flashes of lightning across the lake.':
          'The thunder has ceased, and the darkness is complete. Im- shuts out all light.',
        'It hides a calm and beautiful view of the lake.':
          'Whatever lies in the dark cannot be seen. That uncertainty is what builds dread, not calm.',
      },
      more: 'Enveloped means wrapped. Dark that wraps and cannot be pierced is a favourite Gothic setting: it hides threats and mirrors a troubled mind.',
    },
  'and all around it was the unfathomable darkness of empty space': {
    why: 'A fathom is a measure of how deep water is. Un- + fathom + -able: too deep to measure. Space seems endless and dark around the small light of Mars, and the word makes humans feel tiny.',
    not: {
      'It is dark but close, just beyond the reach of the highest clouds above us.':
        'Unfathomable means too deep to measure, not close.',
      'It is full of light that human eyes are unable to see.':
        'The word is about depth and darkness, not hidden light.',
      'It is easy to explore with a good, strong telescope.':
        'The narrator stresses how remote everything is. Unfathomable means beyond measuring.',
    },
    more: 'To fathom something is also to understand it. Unfathomable can mean too deep to understand, which suits the strange minds out there in the dark.',
  },
  'Thou art the thing itself: unaccommodated man is no more but such a poor, bare, forked animal as thou art.':
    {
      why: "To accommodate is to provide with what is needed. Un- removes it all: without clothes, shelter and comforts, Lear sees, a human being is no more than 'a poor, bare, forked animal'.",
      not: {
        'A man without a bed for the night is simply unlucky.':
          'Lear means more than a bed for the night. He sees what a human is when everything is taken away.',
        'A man who will not change his mind or adapt to others is foolish and proud.':
          'Accommodate can mean adapt, but here Lear is thinking of clothes and comfort: he tears off his own.',
        'A man who has no servants cannot be a true king.':
          'Lear has lost his followers, but here he thinks about all human beings, not only kings.',
      },
      more: 'Forked means two-legged. Lear, once a king, now looks at a man sheltering from the storm and sees humanity stripped to its bare animal form.',
    },
  'I am a free human being with an independent will, which I now exert to leave you.': {
    why: 'Dependent means relying on someone. In- reverses it: an independent will relies on no one. Jane, a poor governess, claims the same freedom of choice as her wealthy master.',
    not: {
      'She depends on Rochester for everything, and she knows it.':
        'In- says the opposite: her will does not depend on him.',
      'She is too stubborn ever to listen to anyone’s advice.':
        'Independent is about who decides, not about refusing advice. She makes her own choice.',
      'She is about to inherit a fortune and will no longer need to work as a governess.':
        'She does inherit later in the novel, but here the word is about her will: her freedom to choose.',
    },
    more: 'To exert a will is to use it. Jane says this to her employer, a man of higher class, which made her a bold heroine for 1847.',
  },
  'It was with great astonishment, and with a strange, inexplicable dread, that as he looked, he saw this bell begin to swing.':
    {
      why: 'Explicable means able to be explained, and in- reverses it. Scrooge feels dread before anything has happened, and no reason is given, so the reader shares his unease.',
      not: {
        'He is afraid because he already knows the bell will soon ring very loudly.':
          'He does not yet know what will happen. Inexplicable means he cannot say why he fears it.',
        'He is not afraid at all, only a little surprised by it.':
          'The sentence names dread, a strong fear, as well as astonishment.',
        'His fear is easy to explain: he hates the sound of bells.':
          'In- says the opposite: his fear cannot be explained.',
      },
      more: 'Fear without a cause is a classic way to build tension in a ghost story: something is wrong before anything is seen.',
    },
  'O swear not by the moon, th’inconstant moon,\nThat monthly changes in her circled orb': {
    why: "Constant means unchanging and faithful. In- reverses it: the moon waxes and wanes, it 'monthly changes'. Juliet fears a love sworn by so fickle a thing might change as well.",
    not: {
      'It is always full and bright, like the love of a loyal and faithful lover.':
        'In- says the opposite: the moon is not constant. It changes every month.',
      'It is much too far away to hear a lover’s promise.':
        "Distance is not her worry. She fears change, as 'monthly changes' says.",
      'It is envious of her beauty, as Romeo said, and may spoil their love.':
        "Romeo calls the moon envious earlier in the scene, but inconstant means changeable. Juliet fears that the moon 'monthly changes', and a love sworn by it might too.",
    },
  },
  'Yet in the number I do know but one\nThat unassailable holds on his rank,': {
    why: 'Un- + assail (attack) + -able: not able to be attacked. Caesar compares himself to the fixed northern star, and within moments the conspirators stab him. His proud word is proved terribly wrong.',
    not: {
      'He admits that he is weak and needs his friends to guard him.':
        'Un- makes the word a boast of strength, not an admission of weakness.',
      'He warns the senators that Cassius and the others are planning to attack him.':
        'Caesar suspects nothing here. He boasts that no one can move him or attack him.',
      'He means that he will never again leave the city of Rome.':
        'Rank here means his place, his position, not Rome. He claims no one can shift him from it.',
    },
    more: "When a character's words mean more to the audience than to the speaker, that is dramatic irony. The audience knows what is about to happen.",
  },
  'Disguise fair nature with hard-favour’d rage;': {
    why: "Dis- + guise (outward look): to change how you appear. Henry tells his men that their 'fair nature' is gentle, and that they must cover it with 'hard-favour’d rage' for battle, like a mask.",
    not: {
      'Dress up in costume so that the enemy does not know you.':
        'He does not mean costumes. The disguise is a fierce face put on over a gentle nature.',
      'Show the enemy your true and gentle nature.':
        'Dis- here means hiding it, the opposite of showing it.',
      'Stay calm and patient, as you would in times of peace.':
        'That is how he says men should behave in peace. In war, he wants rage.',
    },
    more: 'Hard-favour’d means grim-faced. The speech asks men to act a part, which suits a king who knows how much depends on how things look.',
  },
  'The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.':
    {
      why: 'Im- + possible: it cannot be done. The animals cannot tell pigs from men because there is no longer any difference: the revolution has ended where it began.',
      not: {
        "The animals' eyesight has grown weak after years of hard work.":
          'The problem is not their eyes. The pigs now walk, dress and cheat like the men.',
        'The pigs and the men are wearing masks so that the animals will be fooled.':
          'There are no masks. The pigs have truly become like the men.',
        'The farmhouse is so dark that no animal can see clearly.':
          'The animals look in through the window and see clearly. They cannot tell the difference because none is left.',
      },
      more: "The sentence swings from pig to man and back three times, like the animals' eyes, before impossible closes the question: no difference is left.",
    },
  'Gatsby, who represented everything for which I have an unaffected scorn.': {
    why: "To affect a feeling is to put it on for show. Un- + affected: not put on, so genuine. Nick's scorn for what Gatsby stands for is real, which makes his admiration for Gatsby himself surprising.",
    not: {
      'not changed or touched by anything':
        "Unaffected means not changed when 'by' follows, as in 'unaffected by the rain'. Before a feeling, as in 'unaffected scorn' or 'unaffected joy', it means sincere.",
      'gentle and very quiet': 'Scorn is never gentle. Unaffected tells you it is real.',
      'forgotten long ago': "Nick says 'I have', in the present: the scorn is still real.",
    },
    tip: 'When a word has two meanings, test each in the sentence. Only one will make sense of what the writer is saying.',
  },
  'Age cannot wither her, nor custom stale\nHer infinite variety.': {
    why: 'In- + finite (having an end): without end. Enobarbus says neither age nor habit can make Cleopatra stale, because there is no limit to the different sides of her.',
    not: {
      'She changes her mind so often that nobody, not even Antony, can trust her.':
        'Enobarbus is praising her, not warning against her. Infinite variety means endlessly fascinating.',
      'She is very old, and has lived through endless years.':
        "'Age cannot wither her' says the opposite: time does not dull her.",
      'She owns an endless number of fine clothes and jewels.':
        'The variety is in her nature, not her wardrobe.',
    },
    more: 'Custom means habit. Most pleasures grow stale when they become familiar; Enobarbus says Cleopatra never does.',
  },
  'when you have eliminated the impossible whatever remains, _however improbable_, must be the truth':
    {
      why: 'Im- + possible means cannot be; im- + probable means not likely. Holmes’s rule needs the difference: throw out what cannot be, and whatever is left, however unlikely, must be true.',
      not: {
        'They mean the same, so Holmes repeats himself for effect.':
          'If they meant the same, the rule would make no sense. Holmes depends on the difference.',
        'Improbable cannot happen at all, while impossible is only unlikely.':
          'This swaps them round. Possible means can happen; probable means likely.',
        'Impossible is used of people, and improbable of objects.':
          'Both words are used of events and explanations, not divided between people and things.',
      },
      tip: "Holmes's precept is a model for exam reasoning too: rule out the readings the text cannot support, then argue for what remains.",
    },
  'Tired out but proud, the animals walked round and round their masterpiece, which appeared even more ___ in their eyes than when it had been built the first time.':
    {
      why: 'Beauty ends in a consonant and y, so the y changes to i before -ful: beauti + ful. The suffix -ful has only one l.',
      not: {
        beautyful: 'The y of beauty must change to i before the suffix, as in pity, pitiful.',
        beautifull: 'The suffix -ful has one l, even though the word full has two.',
        beutiful: 'An a is missing. Beauty begins b-e-a-u, and beautiful keeps all four letters.',
      },
      more: "The windmill has just been rebuilt after the storm brought it down. 'Even more beautiful in their eyes' shows how the animals' pride keeps them working.",
    },
  'There was an air of utter ___ upon her, that would have moved me to pity though she had wilfully done me a deeper injury than I could charge her with.':
    {
      why: 'Lonely ends in a consonant and y, so the y changes to i before -ness: loneli + ness. Every other letter of lonely stays.',
      not: {
        lonelyness: 'The y of lonely must change to i before -ness, as in happy, happiness.',
        lonliness: 'The e of lone is missing. Lonely is lone + ly, and the e stays: loneliness.',
        lonelines: 'The suffix is -ness, with two s letters.',
      },
      more: "Pip pities Miss Havisham even though she hurt him. 'Utter loneliness' shows how her revenge has left her completely alone.",
    },
  'A sudden ___ seemed to flow now from the windows and the great doors, endowing with complete isolation the figure of the host':
    {
      why: 'Empty ends in a consonant and y, so the y changes to i before -ness: empti + ness.',
      not: {
        emptyness: 'The y of empty must change to i before -ness.',
        emptines: 'The suffix is -ness, with two s letters.',
        emptieness:
          'The y changes to i, and nothing is added: there is no e between the i and -ness.',
      },
      more: 'The party is over, and Gatsby stands alone on his porch. The emptiness flowing from his house shows how lonely he is among all his guests.',
    },
  'I answered, more in ___ than politeness': {
    why: 'Shy keeps its y before -ness: shyness. Before -ness, a word of one syllable such as shy or dry keeps its y, though longer words change it (lazy, laziness). Before -ed it still changes: dry, dried.',
    not: {
      shiness: 'This applies the y-to-i rule where it does not belong. Shy keeps its y: shyness.',
      shyeness: 'Nothing is added between shy and -ness.',
      shynes: 'The suffix is -ness, with two s letters.',
    },
    more: "Pip, a village boy at Satis House for the first time, is too shy to go through the door first. Dickens's word choice shows his discomfort.",
  },
  'There were shoutings, bangings on the table, sharp suspicious glances, ___ denials.': {
    why: 'Fury ends in a consonant and y, so the y changes to i before -ous: furi + ous. It means full of fury, very angry.',
    not: {
      furyous: 'The y of fury must change to i before -ous, as in glory, glorious.',
      furius: 'The suffix is -ous, with an o: furious.',
      furrious: 'Fury has one r, and furious keeps just one.',
    },
    more: 'The pigs and the men are quarrelling over a game of cards: Napoleon and Mr Pilkington have each played an ace of spades.',
  },
  'it is more than usually ___ that we should make some slight provision for the Poor and destitute, who suffer greatly at the present time.':
    {
      why: 'Desire ends in e, and -able begins with a vowel, so the e is dropped: desir + able.',
      not: {
        desireable:
          'Drop the e of desire before a suffix that starts with a vowel, as in believe, believable.',
        desirible:
          'The ending is -able here. Desire is a whole English word, and whole words usually take -able.',
        disirable: 'The first vowel is e: desire, desirable.',
      },
      more: 'The collector asks politely for help for the poor. Scrooge answers with his well-known refusal, which makes his meanness plain.',
    },
  'The singing of this song threw the animals into the wildest ___.': {
    why: 'Excite ends in e, and -ment begins with a consonant, so the e stays: excite + ment.',
    not: {
      excitment:
        "Keep the e of excite before -ment, which starts with a consonant. 'Excitment' is a very common mistake.",
      exitement: 'A c is missing. Excite is spelt e-x-c-i-t-e.',
      excitemant: 'The suffix is -ment, with an e.',
    },
    more: "The song is Beasts of England. The animals' wild excitement shows how hungry they are for change.",
  },
  'Once again this ___ was unanswerable.': {
    why: 'Argue drops its e before -ment, although -ment begins with a consonant: argu + ment. It is one of a few words that break the keep-the-e rule.',
    not: {
      arguement:
        "This keeps the e of argue, which the rule would suggest, but argument is an exception. 'Arguement' is one of the commonest misspellings.",
      argumant: 'The suffix is -ment, with an e.',
      arguemant:
        'This has two mistakes: the e of argue is dropped in argument, and the suffix is -ment.',
    },
    more: "The argument is Squealer's, and it is unanswerable only because it plays on fear: nobody wants Jones back. Orwell's dry word shows how the animals are managed.",
  },
  'Tomorrow ___ will I meet with thee.': {
    why: 'True drops its e before -ly: tru + ly. It is an exception, since most words keep the e before a consonant, as in safely.',
    not: {
      truely:
        "This keeps the e, as safely does, but truly is an exception. 'Truely' is a very common misspelling.",
      truley: 'The ending is -ly, added straight to tru-: truly.',
      trully: 'There is only one l. The suffix -ly adds one.',
    },
    tip: 'Truly, duly, wholly and argument are the main words that drop an e before a consonant suffix. Learn them as a set.',
  },
  "There was something very ___, too, in the spectre's being provided with an infernal atmosphere of its own.":
    {
      why: 'Awful comes from awe + ful, and the e is dropped: awful. The suffix -ful has one l.',
      not: {
        aweful:
          "This keeps the e of awe, but awful is an exception and drops it. 'Aweful' is a common misspelling.",
        awfull: 'The suffix -ful has one l, even though full has two.',
        auful: 'The word begins with aw, as in awe.',
      },
      more: "Here awful keeps its old meaning: filling you with awe and dread. Marley's ghost seems to carry its own hellish air with it.",
    },
  "Both Mr. and Mrs. Pocket had such a ___ air of being in somebody else's hands": {
    why: 'Notice keeps its e before -able. Without the e, the c would sound hard, like a k: the e keeps it soft, as in nice.',
    not: {
      noticable:
        "Dropping the e would make the c hard. 'Noticable' is one of the commonest misspellings.",
      noticible: 'The ending is -able, and the e of notice stays.',
      noticeible: 'The e of notice stays, but the ending is -able, not -ible.',
    },
    more: 'Usually an e is dropped before a vowel suffix. After a soft c or g, before -able or -ous, it stays: noticeable, peaceable, advantageous. A few British spellings keep it elsewhere too, such as likeable and sizeable.',
  },
  'The different accidents of life are not so ___ as the feelings of human nature.': {
    why: 'Change keeps its e before -able, so that the g stays soft, as in gentle. Without the e it would sound like the g in gate.',
    not: {
      changable: "Dropping the e would make the g hard. 'Changable' is a common misspelling.",
      changeble: 'The ending is -able, with an a.',
      changeible: 'The e of change stays, but the ending is -able, not -ible.',
    },
    more: 'Victor has just brought his creature to life and is horrified by it. He means that feelings change faster than events: his dream has turned to horror in a moment.',
  },
  'with a face like a red brick, and an ___ hat all over bells': {
    why: 'Outrage keeps its e before -ous, so that the g stays soft: outrage + ous.',
    not: {
      outragous:
        "Dropping the e would make the g hard, as in gas. 'Outragous' is a common misspelling.",
      outragious: 'There is no i here. The e of outrage stays, then -ous.',
      outrageus: 'The suffix is -ous, with an o.',
    },
    more: 'Outrageous here means wildly over the top, which suits a comic actor on stage.',
  },
  'That is the true ___ of our end.': {
    why: 'Begin ends in one vowel and one consonant, and the stress falls on its last part, be-GIN. So the n doubles before -ing: beginning.',
    not: {
      begining:
        "The n must double, because the stress is on -gin. 'Begining' is one of the commonest misspellings.",
      beggining: 'It is the n that doubles, not the g.',
      begginning: 'Only the n doubles. The g stays single.',
    },
    more: "Quince's prologue is so badly punctuated that it says the opposite of what he means. 'The true beginning of our end' sounds like the start of the actors' ruin.",
  },
  'and Scrooge sat down upon a form, and wept to see his poor ___ self as he used to be.': {
    why: 'Forgot ends in one vowel and one consonant, with the stress on -got, so the t doubles before -en: forgotten.',
    not: {
      forgoten: 'The t must double before -en, as in rotten.',
      forgotton: 'The ending is -en, not -on.',
      forgottin: 'The ending is -en, not -in.',
    },
    more: 'The Ghost of Christmas Past shows Scrooge himself as a lonely schoolboy. Weeping for his forgotten self is the first sign that he can feel again.',
  },
  'But for the first time it ___ to him that he was eleven years old and that perhaps his great muscles were not quite what they had once been.':
    {
      why: 'Occur ends in one vowel and one consonant, with the stress on the last part, oc-CUR. So the r doubles before -ed: occurred. The two c letters stay too.',
      not: {
        occured:
          "The r must double, because the stress is on -cur. 'Occured' is one of the commonest misspellings.",
        ocurred: 'Occur begins with two c letters, and they stay.',
        ocured: 'Two letters are doubled in this word: the c of occur, and the r before -ed.',
      },
      more: 'Boxer begins to feel his age. The plain verb makes the moment quietly sad, because the reader knows what the pigs will do with him.',
    },
  'My life might have been passed in ease and luxury; but I ___ glory to every enticement that wealth placed in my path.':
    {
      why: 'Prefer is stressed on its last part, pre-FER, so the r doubles before -ed: preferred.',
      not: {
        prefered: 'The r must double before -ed, because the stress is on -fer.',
        preffered: 'It is the r that doubles, not the f.',
        prefferred: 'Only the r doubles. The f stays single.',
      },
      more: 'Walton chose glory over comfort, as Victor did. Mary Shelley sets up the two ambitious men side by side from the first letter.',
    },
  'I thought I would mention it to Biddy in ___.': {
    why: 'Before -ence the stress moves to the start of the word, PREF-er-ence, so the r does not double. That is why preferred has two r letters but preference has one.',
    not: {
      preferrence:
        'The r doubles only when the stress falls on -fer, as in preferring. In preference the stress has moved, so one r.',
      prefference: 'The f never doubles in this word.',
      preferance: 'The ending is -ence, with an e.',
    },
    tip: 'Say the word aloud and listen for the stress. Re-FER-ring doubles; REF-er-ence does not. The same goes for confer and conference.',
    more: 'British English has one big exception: a final l after a single vowel doubles whatever the stress, as in travel, travelling and cancel, cancelled.',
  },
  'With an ill-will Scrooge dismounted from his stool, and tacitly ___ the fact to the expectant clerk in the Tank':
    {
      why: 'Admit is stressed on its last part, ad-MIT, and ends in one vowel and one consonant, so the t doubles before -ed: admitted.',
      not: {
        admited: 'The t must double before -ed, because the stress is on -mit.',
        addmitted: 'The d stays single. Only the t doubles.',
        admmited: 'It is the t that doubles, not the m.',
      },
      more: 'Tacitly means without saying a word. Scrooge cannot bring himself to say it is closing time on Christmas Eve, so he only gets off his stool.',
    },
  'But, they were happy, ___, pleased with one another, and contented with the time': {
    why: 'Grateful is spelt with grate-, from an old word for thanks, not with great. The suffix -ful has one l.',
    not: {
      greatful:
        "Grateful has nothing to do with great. 'Greatful' is one of the commonest misspellings.",
      gratefull: 'The suffix -ful has one l, even though full has two.',
      greatfull: 'This has two mistakes: grate- is not great-, and -ful has one l.',
    },
    tip: 'Link grateful with gratitude, which shares its first part: g-r-a-t.',
  },
  'He was especially ___ with the sheep.': {
    why: 'Success keeps all its letters, two c and two s, and -ful adds one l: success + ful.',
    not: {
      successfull: 'The suffix -ful has one l.',
      sucessful: 'Success has two c letters: suc-cess.',
      succesful: 'Success ends in two s letters, and both stay.',
    },
    more: "Napoleon wins the sheep over between meetings, and they learn to drown out Snowball's speeches with their bleating.",
  },
  'when I ___ held our Prayer-Book upside down': {
    why: 'The adverb is built on accidental, not accident: accidental + ly, so it ends -ally with two l letters.',
    not: {
      accidently:
        "This adds -ly to accident, but the adverb comes from accidental. 'Accidently' is a very common misspelling.",
      accidentaly: 'Accidental ends in l, and -ly adds another: two l letters.',
      acidentally: 'Accident has two c letters: ac-cident.',
    },
    tip: 'Say it one beat at a time, ac-ci-den-tal-ly, and you hear the -al that is easy to leave out.',
  },
  'My tale was not one to announce ___; its astounding horror would be looked upon as madness by the vulgar.':
    {
      why: 'Most words ending in -ic add -ally (tragically, basically), but public is the exception: it adds only -ly. Public + ly = publicly.',
      not: {
        publically:
          'This follows the -ically pattern, but public is the well-known exception. Publically is a very common misspelling.',
        publicaly: 'Public adds -ly straight on: publicly, with no a.',
        publickly: 'There is no k. Public ends in c, and adds -ly.',
      },
      more: 'Victor fears people would think him mad, so he keeps silent, and an innocent woman pays for his silence.',
    },
  'There is a ___ about me that never can bear to be frightened at the will of others.': {
    why: 'Stubborn ends in n, and -ness begins with n, so the word has two n letters where they meet: stubborn + ness.',
    not: {
      stubborness:
        "One n is missing at the join. Keep the n of stubborn and the n of -ness. 'Stubborness' is a common mistake.",
      stubbornes: 'The suffix -ness has two s letters.',
      stubbournness: 'Stubborn has no u: s-t-u-b-b-o-r-n.',
    },
    more: 'Elizabeth is teasing Darcy, but she means it: she will not be frightened into anything. Her spirit is what he comes to love.',
  },
  'Napoleon took them away from their mothers, saying that he would make himself ___ for their education.':
    {
      why: 'Responsible ends in -ible. Its stem, respons-, is not a whole English word, and -ible usually follows a stem like that.',
      not: {
        responsable:
          "This is the French spelling. In English the word ends -ible: 'responsable' is a common mistake.",
        resposible: 'The n before s is missing: re-spon-sible.',
        responsibel: 'The ending is -ible, with the e last.',
      },
      more: 'Napoleon takes the puppies away, he says, to teach them, and secretly trains them as his guard dogs. The kindly words hide his plan.',
    },
  'Snowball used as his study a shed which had once been used for incubators and had a smooth wooden floor, ___ for drawing on.':
    {
      why: 'Suit is a whole English word, so it takes -able: suit + able = suitable, able to suit the job.',
      not: {
        suitible: 'Whole words such as suit usually take -able, not -ible.',
        sutable: 'Suit keeps its i: s-u-i-t.',
        suiteable: 'Suit has no e to keep. The word is suit + able.',
      },
    },
  'A white stripe down his nose gave him a somewhat stupid ___': {
    why: 'The noun from appear ends -ance: appear + ance. Appear keeps all its letters, including the double p.',
    not: {
      appearence:
        "The ending is -ance, with an a. 'Appearence' is one of the commonest misspellings.",
      apperance: 'An a is missing: appear keeps its a, ap-pear-ance.',
      appearanse: 'The ending is -ance, with a c.',
    },
    more: "Orwell adds that Boxer 'was not of first-rate intelligence' but was respected by all. His looks hide his great strength and loyalty.",
  },
  'I had believed in the forge as the glowing road to manhood and ___.': {
    why: 'The noun ends -ence: in + depend + ence. Every vowel after the d is an e: in-de-pen-dence.',
    not: {
      independance: "The ending is -ence, with an e. 'Independance' is a very common misspelling.",
      indipendence: 'The vowel after the d is e, as in depend.',
      independense: 'The ending is -ence, with a c.',
    },
    more: 'Once Pip has seen Estella, the forge no longer feels like a road to anything. He is ashamed of the life he once wanted.',
  },
  'A ___ suggestion was made that she sing the notes on her face': {
    why: 'Humour drops its u before -ous: humor + ous. British English keeps the u in humour, but not in humorous.',
    not: {
      humourous:
        "This keeps the u of humour, but humorous drops it. 'Humourous' is a common mistake in British English.",
      humerous: 'The vowel after the m is o, as in humour. The humerus is a bone in the arm.',
      humorus: 'The suffix is -ous, with an o.',
    },
    more: 'Glamour and vigour do the same: glamorous, vigorous. The u drops before -ous but stays before other endings: humourless, honourable.',
  },
  'of good discourse, an excellent ___': {
    why: 'A person who works with music is a musician: music + ian. The c of music stays, and before -ian it says sh.',
    not: {
      musition:
        'The c of music stays: music + ian. Words for skilled people often end -cian, as in electrician.',
      musicion: 'The ending is -ian: musician.',
      musican: 'An i is missing. The ending is -ian.',
    },
    more: 'Benedick is listing the perfect wife he will never find. The audience knows he is about to fall for Beatrice.',
  },
  'This, I thought, was the moment of ___, which was to rob me of, or bestow happiness on me for ever.':
    {
      why: 'Decide drops its -de and takes -sion: decide, decision. Verbs ending in -de often do this: explode, explosion; divide, division.',
      not: {
        decition: 'Verbs ending in -de take -sion, not -tion: decide, decision.',
        desicion: 'The c and s are swapped. It is de-ci-sion: c first, as in decide.',
        decison: 'An i is missing: de-ci-sion.',
      },
      more: "The creature is talking with the blind old man and is about to tell him who the friends he hopes to meet are: the old man's own family. Everything turns on this moment.",
    },
  'I should have forced the lock like a ___.': {
    why: 'Burglar ends in -ar, like beggar and liar, although most words for people end -er or -or.',
    not: {
      burgler:
        "Most people words end -er, but burglar is one of the few ending -ar. 'Burgler' is a common misspelling.",
      burgular:
        "There is no u between the g and l. 'Burgular' spells a common way of mispronouncing it.",
      burglur: 'The ending is -ar.',
    },
    tip: 'The -ar people words are few enough to learn: beggar, burglar, liar, scholar.',
  },
  'He gave it as his opinion that Snowball had ___ come from the direction of Foxwood Farm.': {
    why: 'Probable ends in a consonant and -le, so the -le changes to -ly: probable, probably.',
    not: {
      probly: 'This spells a quick way of saying it. The word keeps every syllable: prob-ab-ly.',
      probabley: 'The -le changes to -ly. No e is left.',
      probablely:
        "Do not add -ly after -le: the -le itself changes to -ly. 'Probablely' doubles the ending.",
    },
    more: "Napoleon sniffs at some footprints and blames Snowball for the windmill's fall. 'Probably' is all the proof he offers.",
  },
  'In a word, I was too ___ to do what I knew to be right': {
    why: "After 'too' the sentence needs a describing word, as in too shy. Cowardly is one: coward + ly. Here -ly makes a describing word, not an adverb, as it does in friendly.",
    not: {
      coward: "A coward is a noun, a person. 'Too coward' is not modern English.",
      cowardice: "Cowardice is the noun for the quality. After 'too', a describing word is needed.",
      cowardliness: "Cowardliness is a noun too. After 'too', a describing word is needed.",
    },
    more: 'Pip is judging his younger self, who kept quiet about helping the convict. Describing words ending in -ly, such as cowardly, friendly and lonely, are worth spotting.',
  },
  'He was a brilliant talker, and when he was arguing some difficult point he had a way of skipping from side to side and whisking his tail which was somehow very ___.':
    {
      why: "'Was somehow very ___' needs a describing word. Persuade changes its d to s before -ive: persuasive, able to make people believe something.",
      not: {
        persuade: "Persuade is a verb. After 'was very', a describing word is needed.",
        persuasion: 'Persuasion is a noun, the act of persuading.',
        persuasively:
          "Persuasively is an adverb. After 'was very', a describing word is needed, not a word telling how.",
      },
      more: "Squealer's tail-whisking is comic, but Orwell means it: Squealer's way with words keeps the animals obedient.",
    },
  'The lesson was so ___ that half the class yawned.': {
    why: 'The lesson causes the boredom, so it is boring. The -ing form describes what causes a feeling; the -ed form describes the person who feels it.',
    not: {
      bored:
        'Bored describes the people who feel it: the class was bored. The lesson itself is boring.',
      boredom: "Boredom is the noun for the feeling. After 'so', a describing word is needed.",
      bore: "A bore is a noun, a dull person or thing. 'So bore' is not English.",
    },
    tip: 'Ask: does it cause the feeling, or feel it? A shocking noise makes you shocked.',
  },
  'Too ___ and frightened to speak, all the animals crowded through the door to watch the chase.': {
    why: 'The animals feel the wonder, so they are amazed, and frightened beside it is a feeling of the same kind. The -ed form describes the one who feels something; the -ing form describes what causes it.',
    not: {
      amazing:
        "Amazing describes what causes wonder: the chase is amazing. The animals are the ones who feel it, like 'frightened' beside it.",
      amazement:
        "Amazement is the noun for the feeling. 'Too ___ to speak' needs a describing word, as in too shocked to speak.",
      amaze:
        "Amaze is a verb in its plain form. 'Too amaze to speak' is not English: the -ed form is needed.",
    },
    more: 'Nine huge dogs have just burst into the barn and chased Snowball out. Amazed and frightened together catch the moment Napoleon takes power by force.',
    tip: 'Ask: does it cause the feeling, or feel it? An amazing trick leaves the audience amazed.',
  },
  'After running the marathon, she was completely ___.': {
    why: 'She feels the tiredness, so she is exhausted. The -ed form describes the person who feels it.',
    not: {
      exhausting: 'Exhausting describes what causes tiredness: the marathon was exhausting.',
      exhaustion:
        "Exhaustion is the noun for the feeling. After 'was completely', a describing word is needed.",
      exhaustive:
        "Exhaustive means complete and thorough, as in 'an exhaustive list'. It is not about being tired.",
    },
  },
  'Please ___ the guy ropes so that the tent does not blow away.': {
    why: "After 'Please', the sentence needs a verb, an action. Tight + -en = tighten, to make tight.",
    not: {
      tight: "Tight is a describing word. 'Please tight the ropes' is not English.",
      tightly: 'Tightly is an adverb telling how. The sentence needs the action itself.',
      tightness: 'Tightness is a noun. The sentence needs a verb.',
    },
    more: 'The suffix -en turns describing words into verbs: tight, tighten; loose, loosen; bright, brighten.',
  },
  'The ___ of the new bridge took three years.': {
    why: "After 'The', a noun is needed: construct + -ion = construction, the act of building.",
    not: {
      construct: "Construct is a verb, to build. After 'The', a noun is needed.",
      constructive:
        "Constructive is a describing word meaning helpful, as in 'constructive advice'.",
      constructively: "Constructively is an adverb. After 'The', a noun is needed.",
    },
  },
  'Snowball was a more vivacious pig than Napoleon, quicker in speech and more inventive, but was not considered to have the same ___ of character.':
    {
      why: "After 'the same', a noun is needed. Deep + -th, with a change of vowel, makes depth. Depth of character means seriousness and strength of mind, which Napoleon is thought to have.",
      not: {
        deep: "Deep is a describing word. 'The same deep of character' is not English: after 'the same', a noun is needed.",
        deeply: "Deeply is an adverb telling how. After 'the same', a noun is needed.",
        deepen: "Deepen is a verb, to make deeper. After 'the same', a noun is needed.",
      },
      more: "The -th ending makes nouns from describing words: deep, depth; long, length; strong, strength. Orwell's phrase sounds like praise of Napoleon, but his depth turns out to be cunning.",
    },
  'The pleasant showers and genial ___ of spring greatly altered the aspect of the earth.': {
    why: 'After genial, a describing word, a noun is needed: warm + -th makes warmth, the gentle heat of spring that changes the land.',
    not: {
      warm: "Warm is a describing word or a verb. After 'genial' and before 'of spring', a noun is needed.",
      warmly: "Warmly is an adverb telling how. After 'genial', a noun is needed.",
      warmer: "Warmer compares, as in 'warmer than before'. It is not a noun for the heat itself.",
    },
    more: 'Genial means kindly and pleasant. The creature, living alone beside the cottagers, greets spring with real joy, which shows how gentle he is at first.',
  },
  'suffix: child | meaning: “the time of being a child”': {
    why: 'The suffix -hood makes a noun for a state or a time of life. Added to child, it makes childhood. Another word with -hood: adulthood.',
    not: {
      '-ship':
        'The suffix -ship makes nouns for a bond or a position, as in hardship, but child does not take it.',
      '-dom':
        'The suffix -dom makes nouns for a state or a realm, as in wisdom, but child does not take it.',
      '-ish':
        'Childish is a real word, but it is a describing word meaning silly, like a child. It is not a noun for a time of life.',
    },
    more: 'Childish and childlike are both describing words, but childish is a criticism (silly) and childlike is praise (innocent).',
  },
  'suffix: friend | meaning: “the bond between friends”': {
    why: 'The suffix -ship makes a noun for a bond, a state or a position. Added to friend, it makes friendship. Another word with -ship: partnership.',
    not: {
      '-hood':
        'The suffix -hood makes nouns for a state or a time of life, as in adulthood, but friend does not take it.',
      '-dom':
        'The suffix -dom makes nouns for a state or a realm, as in wisdom, but friend does not take it.',
      '-ly':
        'Friendly is a real word, but it is a describing word meaning kind and welcoming. It is not a noun for the bond.',
    },
  },
  'suffix: king | meaning: “the land a king rules”': {
    why: 'The suffix -dom makes a noun for a state or a realm. Added to king, it makes kingdom, the land a king rules. Another word with -dom: wisdom, from wise.',
    not: {
      '-ship':
        'Kingship is a real word, but it means the position or power of being king, not the land he rules.',
      '-ly': 'Kingly is a real word, but it is a describing word meaning like a king, royal.',
      '-hood':
        "The suffix -hood makes nouns for a state or a time of life, as in adulthood. 'Kinghood' is not a modern word.",
    },
  },
  'suffix: violin | meaning: “a person who plays the violin”': {
    why: 'The suffix -ist makes a noun for a person who does a skilled thing, often playing an instrument. Violin + ist = violinist. Another word with -ist: pianist.',
    not: {
      '-er': 'The suffix -er makes many person words, as in teacher, but violin takes -ist.',
      '-ian': 'The suffix -ian makes person words such as librarian, but violin takes -ist.',
      '-or': 'The suffix -or makes person words such as actor, but violin takes -ist.',
    },
  },
  'suffix: history | meaning: “a person who studies history”': {
    why: 'The suffix -ian makes a noun for a person skilled in a subject. History drops its y: histor + ian = historian. Another word with -ian: librarian.',
    not: {
      '-ist': 'The suffix -ist makes person words such as scientist, but history takes -ian.',
      '-er': 'The suffix -er makes person words such as teacher, but history takes -ian.',
      '-or': 'The suffix -or makes person words such as actor, but history takes -ian.',
    },
    more: 'Historian, librarian, comedian: -ian often names someone expert in a subject or an art.',
  },
  'suffix: invent | meaning: “a person who invents things”': {
    why: 'The suffix -or makes a noun for a person who does something. Invent + or = inventor. Another word with -or: actor.',
    not: {
      '-ist': 'The suffix -ist makes person words such as artist, but invent takes -or.',
      '-ian': 'The suffix -ian makes person words such as librarian, but invent takes -or.',
      '-ive':
        'Inventive is a real word, but it is a describing word meaning full of new ideas. It is not a person.',
    },
    more: "'Inventer' is a common mistake. Inventor, actor, visitor and conductor all end in -or.",
  },
  'suffix: pure | meaning: “to make pure”': {
    why: "The suffix -ify makes a verb meaning 'make'. Pure drops its e: pur + ify = purify, to make pure, as water is purified. Another word with -ify: simplify.",
    not: {
      '-ity':
        'Purity is a real word, but it is a noun for the state of being pure. It is not an action.',
      '-ist':
        'A purist is a real word, but it is a person who insists on doing things the correct way.',
      '-ly':
        'Purely is a real word, but it is an adverb meaning only or completely. It is not an action.',
    },
    more: 'The suffix -ify turns describing words into actions: simple, simplify; solid, solidify; clear, clarify.',
  },
  'suffix: modern | meaning: “to make modern”': {
    why: "The suffix -ise makes a verb meaning 'make' or 'become'. Modern + ise = modernise, to bring up to date. Another word with -ise: civilise.",
    not: {
      '-ity': 'Modernity is a real word, but it is a noun for the state of being modern.',
      '-ist': 'A modernist is a real word, a person or artist who follows modern ideas.',
      '-ism':
        'Modernism is a real word, a movement in art and writing in the early twentieth century.',
    },
    more: 'British English usually spells this ending -ise: modernise, civilise, apologise. American English uses -ize.',
  },
  'suffix: wide | meaning: “to make wider”': {
    why: "The suffix -en makes a verb meaning 'make' or 'become'. Wide drops its e: wid + en = widen. Another word with -en: sharpen.",
    not: {
      '-th': 'Width is a real word, but it is a noun for how wide something is, not an action.',
      '-ly':
        "Widely is a real word, but it is an adverb, as in 'widely known'. It is not an action.",
      '-est':
        'Widest is a real word, but it means the most wide. It compares; it is not an action.',
    },
    more: 'Some describing words make three: wide, widen (make wide), width (how wide). Long, lengthen, length works the same way.',
  },
  'suffix: active | meaning: “the state of being active”': {
    why: 'The suffix -ity makes a noun for a state or quality. Active drops its e: activ + ity = activity.',
    not: {
      '-ism': 'Activism is a real word, but it means campaigning for a cause.',
      '-ist': 'An activist is a real word, a person who campaigns for a cause.',
      '-ate': 'Activate is a real word, but it is a verb meaning to switch something on.',
    },
    more: "Activity also means a thing you do: 'an activity for the class'. The suffix -ity often names a quality: purity, rarity, equality.",
  },
  'She is tolerable; but not handsome enough to tempt _me_': {
    why: "Tolerate means to put up with something, so tolerable means able to be put up with: just about bearable. Darcy's word is so cool that it insults Elizabeth, who overhears it.",
    not: {
      'Very beautiful, the most handsome woman in the room.':
        'Darcy says she is not handsome enough to tempt him. Tolerable is the opposite of high praise.',
      "Patient and willing to put up with other people's faults.":
        'That would be tolerant, a word for a person who puts up with others. Tolerable describes what is put up with.',
      'Easy to understand, like a clear and simple book that anyone could follow.':
        'Tolerable has nothing to do with understanding. It means bearable, only just acceptable.',
    },
    more: "The insult starts the story: Elizabeth's prejudice against Darcy begins with one cool -able word.",
  },
  'a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner': {
    why: "Each -ing word comes from a verb: squeeze, wrench, grasp, scrape, clutch. Used as a string of describing words, they make Scrooge's greed an action that never stops, gripping and twisting money from people.",
    not: {
      'They show that Scrooge is working hard at an honest trade.':
        'The words are about grabbing, not honest effort. Squeezing and wrenching take from others.',
      'They describe the noises Scrooge makes as he moves about his office.':
        'They are actions of the hands, not sounds. Squeezing and clutching show greed.',
      'They show that Scrooge is growing older and weaker as the story goes on, losing his grip.':
        'The -ing forms show active, present grabbing, not weakness: his grip is tight.',
    },
    more: 'The list ends with covetous, from covet, to want what others have. Dickens builds his miser out of verbs of greed before Scrooge says a word.',
  },
  'regarded this earth with envious eyes, and slowly and surely drew their plans against us': {
    why: "Envy + -ous, with the y changing to i: full of envy, wanting what someone else has. The Martians look at Earth as a prize, and the steady way they 'drew their plans' makes the threat calm and certain.",
    not: {
      'They admire the Earth from afar and wish it well.':
        'Envy is not admiring and wishing well: it is wanting what another has.',
      'They are afraid that humans will attack Mars first, so they plan to defend themselves.':
        'Nothing here says the Martians fear us. Envious means they want our world.',
      'They are jealous of one another, so they quarrel among themselves.':
        'Their envy is turned on Earth, not on each other.',
    },
    more: 'The narrator writes after the war is over, so his calm tone carries the weight of what he knows came next.',
  },
  'but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart.':
    {
      why: 'Breath + -less: without breath. The horror hits Victor at the very moment his work is done, so hard that it seems to stop his breathing. The dream of beauty turns at once into disgust.',
      not: {
        'He has run so far from the room that he is out of breath.':
          'He runs from the room later. Here breathless describes the horror itself, which takes his breath.',
        'It is quiet and gentle, a feeling that slowly fades away.':
          'Breathless horror is sudden and overwhelming, the opposite of a gentle feeling.',
        'He feels calm and relieved that his long work is finished at last.':
          "The sentence says the dream 'vanished' and horror 'filled my heart'. There is no relief.",
      },
      more: 'Two years of work end in one sentence. The suffix -less sums up a shock too great for words.',
    },
  'a miserable spectacle of wrecked humanity, pitiable to others, and intolerable to myself': {
    why: 'Pitiable means deserving pity; intolerable, with in-, means not able to be borne. Victor sees himself through two pairs of eyes: an object of pity to others, and unbearable to himself.',
    not: {
      'Others admire him, and he is proud of what he has achieved.':
        'Pitiable is not admiration, and intolerable is not pride. He is ashamed.',
      'Others find him funny, and he enjoys making people laugh.':
        "A spectacle can be a show, but a 'wrecked' one is sad, not funny.",
      'Others can easily forgive him, and so he forgives himself too, as anyone would.':
        'Intolerable to myself means he cannot forgive or bear himself.',
    },
    more: 'The two -able words balance like the pans of a scale, a pattern called parallelism, which makes his self-hatred sound final.',
  },
  'something displeasing, something down-right detestable': {
    why: 'Displeasing (dis- + please + -ing) is mild: not pleasant. Detestable (detest + -able) is strong: deserving to be hated. Enfield gropes for a word and lands on a harsher one, as if the feeling grows as he speaks.',
    not: {
      'They mean the same, so Enfield simply repeats himself.':
        'They differ in strength: displeasing is mild, detestable is fierce. The second outdoes the first.',
      'They show that Enfield quite likes Hyde at first.':
        'Both words are negative. Neither shows liking.',
      "They describe Hyde's clothes, which are dirty and torn, rather than the man himself.":
        'Enfield is describing something wrong in Hyde himself, which nobody can quite name.',
    },
    more: "Enfield never says exactly what is wrong. Repeating 'something' while the describing words grow stronger keeps Hyde a mystery.",
  },
  'cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary and yet somehow lovable.':
    {
      why: "Love + -able, dropping the e: able to be loved. After cold, dusty and dreary, 'and yet somehow lovable' turns the sentence round: Utterson's goodness shows through his dry manner.",
      not: {
        'It sums up the list: he is cold and dull, and nobody likes him.':
          "'And yet' marks a turn. Lovable goes against the list, not with it.",
        'It shows that he is a famous lawyer whom everyone in London admires for his success.':
          'Lovable is about warmth, not fame or success.',
        'It means that he falls in love easily with the people he meets.':
          'Lovable means others can love him, not that he falls in love.',
      },
      more: "'Somehow' admits the narrator cannot explain it, which makes Utterson's goodness feel real rather than announced.",
    },
  'How sharper than a serpent’s tooth it is\nTo have a thankless child': {
    why: "Thank + -less: without thanks. Lear has just given Goneril half his land, and she treats him coldly. A child's ingratitude, he says, bites deeper than a snake.",
    not: {
      'She is too shy to thank her father in front of the court.':
        'Lear is not complaining about shyness. He feels betrayed by her coldness.',
      'She has given her father a great gift without expecting thanks.':
        'Thankless here means ungrateful, not generous without wanting thanks.',
      'She is unhappy because her father never thanks her for all the work she does for him.':
        'It is Lear who expected thanks, after giving her his land.',
    },
    more: 'A thankless job is one nobody thanks you for, but a thankless child is one who gives no thanks. The same suffix points both ways.',
  },
  'Some are born great, some achieve greatness, and some have greatness thrust upon ’em.': {
    why: 'Great is a describing word; -ness turns it into a noun, greatness, a thing. That lets the line treat it like an object: something you can achieve, or have thrust upon you.',
    not: {
      'It makes the word mean less great, a little smaller.':
        'The suffix -ness does not make a word smaller. It makes a noun for a state or quality.',
      'It turns great into a verb, an action that someone does to others with force.':
        'Greatness is a noun, not a verb. Thrust is the action here.',
      'It turns great into an adverb, saying how someone rises in life.':
        'An adverb from great would be greatly. Greatness is a noun, which is why it can follow achieve and have, as the thing they act on.',
    },
    more: 'Malvolio reads this in a forged letter and believes greatness is about to be thrust upon him. The joke is cruel: he is being tricked.',
  },
  'Yet do I fear thy nature;\nIt is too full o’ th’ milk of human kindness\nTo catch the nearest way.':
    {
      why: "Kind + -ness makes a noun for a quality. 'Milk of human kindness' pictures his gentleness as something soft and nourishing, the opposite of the hardness she thinks murder needs. 'The nearest way' is killing Duncan.",
      not: {
        'He is too generous with money and will give the crown away to his friends.':
          'The kindness here is not about money. It is gentleness, which might hold him back from murder.',
        'He is too weak and ill to fight in another battle.':
          'Macbeth has just won great battles. Her fear is of his gentleness.',
        'He loves his own children too much to leave them.':
          'Children are not mentioned here. Her fear is that he is too gentle to kill.',
      },
      more: 'Kind once meant natural, as in mankind: human kindness is the feeling natural to humans.',
    },
  'They were careless people, Tom and Daisy': {
    why: 'Care + -less: without care. Nick means more than clumsiness: Tom and Daisy harm people and then retreat into their money, leaving others to deal with the damage.',
    not: {
      'They are clumsy and often drop or break their things.':
        'Careless can mean clumsy, but here it is a moral judgement: they do not care whom they hurt.',
      'They are cheerful and free from worry, which Nick admires.':
        'That would be carefree. Careless is a criticism here, not praise.',
      'They work so hard that they are too tired to notice the people who serve them.':
        'They do not work at all. Their money lets them leave the mess to others.',
    },
    more: "The word comes back at once as 'their vast carelessness'. The -ness noun turns one fault into a whole way of living.",
  },
  'So we beat on, boats against the current, borne back ceaselessly into the past.': {
    why: 'Cease + -less + -ly: without ceasing, never stopping. The boats push forward but are carried back without end, a picture of Gatsby, and all of us, reaching for a past we cannot get back.',
    not: {
      'The boats move quickly and smoothly towards their goal.':
        'The current is against them: they are borne back, not carried forward.',
      'The journey will end soon, once the current has calmed down and the river is still.':
        'Ceaselessly means it never stops. There is no end in sight.',
      'The rowers rest at times and let the current carry them.':
        "They 'beat on', rowing hard. It is the current that never rests.",
    },
    more: 'Three parts make the word: cease + less + ly. The -less ending gives the line its sense of endless, doomed effort.',
  },
  'The glamour\nOf childish days is upon me, my manhood is cast\nDown in the flood of remembrance, I weep like a child for the past.':
    {
      why: "Man + -hood: the state of being a man. The poem says his adult self is 'cast down' in a flood of memory, so that he weeps 'like a child'. The suffix sets manhood against childish days.",
      not: {
        'He is proud of becoming a man and no longer cries.':
          "He says he weeps 'like a child', the opposite of a proud grown man.",
        'He is learning to play the piano as an adult, which is a hard and lonely thing to do.':
          'The poem is about a song and memories, not learning to play.',
        "He remembers the men who sang at his family's parties.":
          'Manhood means his own grown-up state, not other men.',
      },
      more: 'Childish and manhood sit in the same line: two suffixes, two stages of life, and the struggle between them.',
    },
  'O what can ail thee, knight-at-arms\nAlone and palely loitering?': {
    why: 'Pale + -ly makes an adverb: he loiters in a pale way. The knight has no colour and no purpose, and the question what can ail him, what is wrong, hints that something has drained him.',
    not: {
      'He is dressed in white armour that shines in the sun.':
        'Palely describes how he looks and moves, not his armour.',
      'He is resting calmly after winning a great battle against his many enemies.':
        'The speaker asks what ails him: he is suffering, not resting after victory.',
      'He moves quickly and with purpose through the wood.':
        'Loitering means lingering without purpose, the opposite of moving quickly.',
    },
    more: 'An adverb made from a colour is unusual. Keats’s choice makes the knight’s whole way of being seem drained.',
  },
  'Dare frame thy fearful symmetry?': {
    why: "Fearful can mean full of fear or causing fear. Here it describes the tiger's symmetry, its shape, which cannot feel afraid. So it means fearsome: the tiger's perfect form is terrifying.",
    not: {
      'Afraid: the tiger is frightened of the one who made it.':
        'A shape cannot be afraid. Fearful here must mean causing fear.',
      'Careless: the tiger was made quickly and badly.':
        'Symmetry means perfect balance, the opposite of something made badly.',
      "Worried: the maker is anxious that the tiger's shape may not come out right.":
        "Fearful describes the tiger's symmetry, not the maker's feelings, and a shape cannot worry. Here it means causing fear.",
    },
    more: 'Older writers often use fearful to mean fear-causing. When a word has two senses, ask what it describes.',
  },
  'You do not imagine, I hope, that we pigs are doing this in a spirit of selfishness and privilege?':
    {
      why: 'Self + -ish + -ness: the state of caring only for yourself. Squealer denies exactly what the pigs are doing: taking the milk and apples for themselves. The suffix names the truth he hides.',
      not: {
        'The pigs are sharing the milk and apples equally with every animal.':
          'They are not sharing: the milk and apples go to the pigs alone.',
        'The other animals have openly accused the pigs of selfishness, so Squealer says sorry.':
          'Nobody accuses them openly, and Squealer does not apologise. He explains the theft away.',
        'The pigs dislike milk and apples and take them only to help.':
          'Squealer claims many pigs dislike them, but that is part of his lie.',
      },
      more: "Squealer's question expects the answer no. A question asked to shut down a debate is a rhetorical question.",
    },
  'Yond Cassius has a lean and hungry look;\nHe thinks too much: such men are dangerous.': {
    why: 'Danger + -ous: full of danger. To Caesar, a man who thinks too much may see through him and plot. He is right: Cassius is already planning against him.',
    not: {
      'They are clumsy and likely to hurt themselves.':
        'The danger is to Caesar, not to Cassius himself.',
      'They are clever enough to become his most loyal and useful servants in the Senate.':
        'Caesar fears thinking men; he does not trust them to serve him.',
      'They eat too little and grow weak and ill.':
        "Lean and hungry describes Cassius, but Caesar's fear is of his thinking.",
    },
    more: "'Lean and hungry' makes Cassius sound like a hunting animal, starved for power. The audience already knows he leads the plot.",
  },
  'Then imitate the action of the tiger;\nStiffen the sinews, summon up the blood,': {
    why: "The suffix -en turns a describing word into a verb meaning 'make': stiff, stiffen; hard, harden. Henry orders his men to make their sinews, their muscles, hard and ready, like a tiger's.",
    not: {
      "It makes the soldiers' bodies softer and more relaxed.":
        'Stiffen means make stiff, hard, the opposite of soft.',
      'It turns stiff into a noun naming a kind of weapon used by soldiers in old wars.':
        'Stiffen is a verb, an action, not a noun for a weapon.',
      'It tells the men to stand still and keep quiet.':
        'Stiffen is about tensing the body for action, not standing still.',
    },
    more: "Henry's speech is full of commands: imitate, stiffen, summon, disguise. Each verb drives the men back towards the breach.",
  },
  'she hauled me to the washstand, inflicted a merciless, but happily brief scrub on my face and hands with soap, water, and a coarse towel':
    {
      why: "Happily can mean in a happy way or fortunately. 'Merciless, but happily brief' sets two describing words against each other: the scrub was harsh but, luckily, short. Jane writes with dry humour.",
      not: {
        "Cheerfully: Bessie enjoyed scrubbing Jane's face.":
          "If Bessie were enjoying it, happily would not follow 'but'. The but marks good news after bad.",
        "Gently: Bessie was kind and careful with Jane's skin.":
          'Merciless says the opposite of gentle. Happily goes with brief: fortunately short.',
        'Slowly: the scrub went on for a long time, gently and carefully, until her face was clean.':
          'Brief means short. Happily brief means luckily short, not slow.',
      },
      more: "Words such as happily, luckily and sadly can comment on a whole statement: 'Happily, nobody was hurt.'",
    },
  'I heard of the discovery of the American hemisphere, and wept with Safie over the hapless fate of its original inhabitants.':
    {
      why: 'Hap is an old word for luck, as in happen and perhaps. Hap + -less: without luck. The creature weeps for the peoples who suffered when Europeans reached America.',
      not: {
        'careless, and to blame for their own troubles':
          'Hapless means unlucky, not to blame. The creature pities them.',
        'wealthy and powerful, ruling over many lands':
          'The creature weeps over their fate, which would make no sense if it were good fortune.',
        'cheerful and carefree, untroubled by what was happening around them':
          'Hapless is the opposite of carefree: their fate is sad.',
      },
      more: 'The creature learns history by listening to Felix teach Safie, and it shows him how cruel humans can be.',
    },
  'he gave an impression of deformity without any nameable malformation': {
    why: 'Name + -able: able to be named. Hyde gives an impression of deformity, yet no one can name what is wrong. The suffix makes his strangeness hard to pin down, more frightening than any clear fault.',
    not: {
      'He has an injury that a doctor could easily name and treat with the right medicine.':
        'Nameable is denied: there is no malformation anyone can name.',
      'He is handsome, with nothing at all wrong with him.':
        "He gives 'an impression of deformity', so something does seem wrong.",
      'He hides his face, so no one can see it.':
        'His face is seen. What is wrong with it cannot be named.',
    },
    more: 'Mal- means badly: a malformation is a badly formed part. Stevenson uses both affixes to say Hyde is wrong in a way no one can put into words.',
  },
  'In spite of myself, the insidious mastery of song\nBetrays me back, till the heart of me weeps to belong':
    {
      why: "Master + -y: the power of a master. 'In spite of myself' and 'Betrays me' show the song taking control of him against his will, pulling him back to when he was a child.",
      not: {
        'The song is so loud that it drowns out every other sound in the room.':
          'Loudness is not the point. The power of the song is quiet and creeping: insidious.',
        'The song is a lesson that he is learning to play.':
          'Nobody is learning here. The song has power over him.',
        'The song is weak, and he can easily ignore it.':
          "'In spite of myself' shows he cannot ignore it.",
      },
      more: 'Insidious means working quietly and secretly. Paired with mastery, it makes the song a gentle trap.',
    },
  "Too easily impressed; she liked whate'er\nShe looked on, and her looks went everywhere.": {
    why: "Easy + -ly, with the y changing to i: easily says how she was impressed, and 'too' makes it a fault. The Duke blames her for being pleased by everything, which shows his jealousy and need for control.",
    not: {
      "He admires his wife's cleverness and her many talents.":
        'Too easily is a complaint, not praise. He resents her pleasure.',
      'He worries that his wife was too easily frightened by the dark and by strangers in the house.':
        'Impressed means pleased and moved, not frightened.',
      'He thinks his wife never smiled at anyone.':
        "Her looks 'went everywhere': she smiled at everything, which is his complaint.",
    },
    more: 'The Duke means to sound reasonable, but each complaint reveals more about him than about her. A speaker giving himself away like this is typical of a dramatic monologue.',
  },
  'it is a tale\nTold by an idiot, full of sound and fury,\nSignifying nothing.': {
    why: "Sign + -ify makes a verb, to signify: to mean. 'Full of sound and fury, / Signifying nothing': life is all noise and rage with no meaning. Macbeth has the crown, and it has come to mean nothing.",
    not: {
      'Life is full of signs and warnings that he should have read more carefully.':
        'Signify here means mean, not give warnings. Macbeth says life means nothing.',
      'Life is a happy story that ends well for everyone.':
        'A tale told by an idiot is no happy story. Macbeth is in despair.',
      'Life is quiet and peaceful, with little to say.':
        'Sound and fury are noise and rage, the opposite of quiet.',
    },
    more: "He speaks these lines just after hearing of his wife's death. The -ify verb turns a whole life into a sign with nothing behind it.",
  },
  'I am a man\nMore sinn’d against than sinning.': {
    why: "The -ed form, sinn'd against, is something done to him; the -ing form, sinning, is something done by him. Lear admits he has done wrong but feels others have wronged him far more.",
    not: {
      'He admits that he is the worst sinner in the whole kingdom.':
        "He says the opposite: he is 'more sinn’d against' than sinning.",
      'He believes he has never done anything wrong at all in his whole long life.':
        "'Than sinning' admits some wrongdoing. He does not claim to be blameless.",
      'He blames the storm for all the sins of his daughters.':
        'The storm is not blamed for any sin. He means what his daughters did to him.',
    },
    more: 'The balance of done to and done by is at the heart of the tragedy: Lear is both victim and cause.',
  },
  'Therefore, since brevity is the soul of wit,': {
    why: 'Brief + -ity, with the f changing to v, makes brevity: the quality of being brief. Wit here means good sense. Polonius praises short speech in one of the longest, most roundabout speeches in the play.',
    not: {
      'He is the shortest character, and he jokes about his own height.':
        'Brevity is about words, not height. The joke is that he is long-winded.',
      'He means that clever people should always make long speeches full of fine words.':
        'He says the opposite: brevity, shortness, is the soul of wit.',
      'He is mocking Hamlet for speaking too briefly.':
        'Polonius is talking to the King and Queen, and Hamlet is not there. The joke is on Polonius himself, who cannot stop talking.',
    },
    more: 'Tediousness, being dull, is the next noun he uses. His own speech proves both words at once.',
  },
  'Comparisons are odorous': {
    why: 'Odour + -ous, dropping the u: odorous, full of smell. Dogberry reaches for the grand word odious, hateful, and lands on one that means smelly. Mixing up long words like this is called a malapropism.',
    not: {
      'Odorous means wise, so he is praising his own learning.':
        'Odorous comes from odour, a smell. It has nothing to do with wisdom, which is the joke.',
      "Odorous means quiet, so he tells Verges to stop talking about other people's business.":
        'Odorous comes from odour, a smell. It has nothing to do with being quiet.',
      'Odorous means old, so he calls Verges an old man.':
        'Verges is old, but that is not what the word means. Odorous comes from odour, a smell.',
    },
    more: 'The joke depends on suffixes: odious and odorous sound alike and both end in -ous, but one is built on hate and the other on smell.',
  },
  'Pip, dear old chap, life is made of ever so many partings welded together': {
    why: "Part + -ing makes a noun: a parting, a time of leaving. Joe, a blacksmith, pictures life as many goodbyes 'welded together', joined like pieces of iron in his forge.",
    not: {
      'the parts of a machine fitted together in a workshop':
        'Welded comes from his work, but partings are not machine parts. A parting is a goodbye.',
      'the lines in your hair where it is combed to each side':
        'A parting is also the line in your hair, but Joe is saying goodbye to Pip.',
      'arguments and quarrels between old friends who no longer speak to each other at all':
        'Joe does not quarrel with Pip. He is gently saying goodbye.',
    },
    more: "Joe's speech is plain and wise. The smith's word welded makes his picture of life his own.",
  },
  '“My mind,” he said, “rebels at stagnation.': {
    why: 'Stagnate + -ion, dropping the e: stagnation, the state of being still. Stagnant water stops flowing and goes bad. Holmes means his mind rots without work: it needs problems the way water needs to flow.',
    not: {
      'It is too busy, so he longs for a long and peaceful holiday by the sea.':
        'Holmes wants the opposite of rest: he rebels against stillness.',
      'It is growing old, so he can no longer think clearly.':
        'Stagnation is about stillness, not age. His mind is sharp but has nothing to do.',
      'It is angry at other detectives who solve crimes faster than he does.':
        'Holmes rebels against having nothing to do, not against other detectives.',
    },
    more: "He goes on: 'Give me problems, give me work.' The -ion noun makes boredom sound like a disease.",
  },
  'I learned to recognise the thorough and primitive duality of man': {
    why: 'Dual means two, and -ity makes a noun for a state: duality, the state of being two. Jekyll believes each person holds two natures at war inside, which is the idea behind Hyde.',
    not: {
      'Every person is born a twin, with a brother or sister somewhere in the world.':
        'Duality is about two natures in one person, not twins.',
      'Every person is simple and the same all the way through.':
        'That is the opposite: duality means two-sided, not simple.',
      'Every person has two jobs, one by day and one by night.':
        'Jekyll does lead a double life, but duality means two natures, not two jobs.',
    },
    more: 'Primitive here means basic, there from the start. Jekyll says the split is in everyone, not only in him.',
  },
  'I have been a selfish being all my life, in practice, though not in principle.': {
    why: 'Self + -ish: given to the self, caring for yourself first. Darcy separates practice (what he did) from principle (what he believed): he knew how to be good but acted selfishly. It is a humble confession from a proud man.',
    not: {
      'He has always shared everything he has with everyone, in practice and in principle alike.':
        'Selfish is the opposite of sharing. He admits he acted for himself.',
      'He has spent too much money on his estate.':
        'Nothing here is about money. He means how he treated others.',
      'He prefers being alone to being in company.':
        'Selfish is about putting yourself before others, not liking to be alone.',
    },
    more: 'The confession shows how far Darcy has come from the proud man Elizabeth first met: he now judges himself as harshly as she once judged him.',
  },
  'Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless?': {
    why: "Soul + -less and heart + -less: without a soul, without a heart. Jane throws Rochester's assumption back at him: being poor and plain does not mean she lacks a soul or feelings.",
    not: {
      'She admits that she has no feelings left for anyone at all, not even herself.':
        'Her question expects the answer no. She insists she has a heart and a soul.',
      'She says that poor people are colder than rich people.':
        'Jane argues the opposite: the poor feel as deeply as the rich.',
      'She complains that she is hungry and has nowhere to live.':
        'She is not complaining of hunger. Soulless and heartless are about feeling.',
    },
    more: 'She goes on to say she has as much soul as he and full as much heart. The pair of -less words is the idea she is about to destroy.',
  },
  'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.':
    {
      why: 'Universe + -al + -ly: in a way that covers everyone. The grand word claims the whole world agrees, but the novel shows it is mothers like Mrs Bennet who want it to be true.',
      not: {
        'It is proved by science and true in every country of the world without exception.':
          "Austen is joking. The 'truth' is the hope of match-making families, not a fact.",
        'Austen means that rich single men never want to marry.':
          'The sentence claims rich single men must want wives. The irony is about who really wants it.',
        'Austen means that everyone in England is rich.':
          'The sentence is about one rich single man, not about everyone being rich.',
      },
      more: "Reading a novel's first sentence closely pays off: Austen's irony is set up in one long word.",
    },
  'No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man’s and yet as mortal as his own':
    {
      why: 'Mort- means death, and -al makes a describing word: mortal, bound to die. Wells hints in the very first sentence that the Martians, though cleverer than us, can be killed, which is how the novel ends.',
      not: {
        'They will live for ever and can never be defeated by anything on the Earth.':
          'Mortal means bound to die, the opposite of living for ever.',
        'They are kind and gentle, like human beings.':
          'Mortal says nothing about kindness. The Martians are cold and cruel.',
        'They are much smaller than humans and easy to see.': 'Mortal is about death, not size.',
      },
      more: 'A hint early in a story of what happens later is called foreshadowing. Here it hangs on one -al word.',
    },
  'this thing of darkness I\nAcknowledge mine.': {
    why: "Dark + -ness makes a noun: a thing of darkness is something evil or ignorant. 'Acknowledge mine' accepts that Caliban belongs to him, and perhaps that the darkness is partly Prospero's own.",
    not: {
      'He admits that he is afraid of the dark and of what hides in it at night.':
        'Darkness here is moral, meaning wickedness, not night.',
      'He says that Caliban is a shadow and not really alive.':
        'Thing of darkness is an insult, but Caliban is alive, and Prospero claims him.',
      'He claims that Caliban is a stranger he has never met.':
        'Prospero has ruled Caliban for years. Acknowledge mine says he knows him well.',
    },
    more: 'Many readers hear a second meaning: Prospero admits the dark side in himself. When a text supports two readings, an essay can argue both.',
  },
  'my life has been hitherto harmless, and in some degree beneficial; but a fatal prejudice clouds their eyes, and where they ought to see a feeling and kind friend, they behold only a detestable monster.':
    {
      why: 'Harm + -less: without harm. Detest + -able: deserving hatred. The creature sets his blameless life against how people see him: they judge him by his looks, not his deeds.',
      not: {
        'He admits he has caused great harm and deserves to be hated.':
          'He says the opposite: his life has been harmless, even beneficial.',
        'Both words show he is proud of how frightening he looks to the people who meet him.':
          "He is grieved, not proud: 'a fatal prejudice clouds their eyes'.",
        'Both words mean the same: he is dangerous.':
          'They mean opposite things: harmless is innocent, detestable is hateful.',
      },
      more: "Hitherto means until now. 'Hitherto harmless' is chilling, because the creature's life will not stay harmless.",
    },
  'No, this my hand will rather\nThe multitudinous seas incarnadine,\nMaking the green one red.': {
    why: 'Multitude + -ous: full of multitudes, countless. Macbeth says his bloody hand would turn all the countless seas red, rather than the seas washing it clean: his guilt is bigger than the oceans.',
    not: {
      'The seas are calm and clean, ready to wash his hands.':
        'He says the opposite: his hand would turn the seas red, not be washed clean.',
      'The seas are crowded with ships that could carry him far away from Scotland.':
        'The seas are many, not crowded with ships. He is not thinking of escape.',
      'The seas are already red with the blood of the battles he has fought.':
        "The seas are green now: 'Making the green one red' says his hand would turn them red. Multitudinous makes them countless, so his guilt is vast.",
    },
    more: "Incarnadine means turn red. Shakespeare follows two long Latin words with a plain line, 'Making the green one red', which hits all the harder.",
  },
  'If you can meet with Triumph and Disaster\nAnd treat those two impostors just the same;': {
    why: 'An impostor, with the -or ending for a person, is someone who pretends to be what he is not. Kipling says winning and losing both deceive us about how much they matter, so a wise person treats them alike.',
    not: {
      'They are two real people who pretend to be the speaker’s friends.':
        'Triumph and Disaster are ideas given capital letters, as if they were people. That is personification.',
      'They both last for ever, so a wise man should fear them.':
        "The poem says to 'treat those two impostors just the same', calmly, not to fear them.",
      'Triumph is honest and true, but Disaster always lies, so you should trust only success.':
        "He calls both impostors: 'those two'. Neither is to be trusted.",
    },
    more: 'Capital letters turn Triumph and Disaster into characters, and the -or word makes them con men.',
  },
  'The quality of mercy is not strain’d,\nIt droppeth as the gentle rain from heaven\nUpon the place beneath.':
    {
      why: "Strain'd is strained, the -ed form of strain: forced or squeezed out. Portia says mercy cannot be forced from anyone; it falls freely, 'as the gentle rain from heaven'.",
      not: {
        'It is weak and tired, worn out by being used too much.':
          'Strained here means forced, not worn out. Mercy falls freely.',
        'It must be filtered and cleaned before it can be used, like dirty water from a river.':
          'Strain can mean filter, but Portia says mercy is not strained: it comes freely, like rain.',
        'It falls only on rich and powerful people.':
          "It falls on 'the place beneath', on everyone, as rain does.",
      },
      more: 'Portia is answering Shylock’s question about why he must show mercy: mercy, she says, cannot be ordered; it must be chosen.',
    },
  'When that the poor have cried, Caesar hath wept;\nAmbition should be made of sterner stuff:': {
    why: 'Stern + -er: more stern, harder. Antony argues that a really ambitious man would be harder than Caesar, who wept when the poor cried. So, he hints, Brutus was wrong to call Caesar ambitious.',
    not: {
      'Caesar was harder and crueller than any other man in Rome.':
        'Antony says Caesar wept for the poor: he was softer than an ambitious man would be.',
      'The poor of Rome should be sterner and stop crying so much in front of their rulers.':
        'Sterner describes ambition, not the poor. Antony is defending Caesar.',
      'Ambition is a soft and gentle quality in a ruler.':
        'Sterner says the opposite: ambition is hard.',
    },
    more: "Antony never says Brutus lied. He lets the comparison do it, then repeats that Brutus is 'an honourable man' until the words sound false.",
  },
  'This boy is Ignorance. This girl is Want. Beware them both': {
    why: 'Ignore + -ance, dropping the e, gives Ignorance: the state of not knowing. The boy is a symbol, not a person: Dickens warns that leaving poor children without schooling will bring ruin on everyone.',
    not: {
      'He is a real boy who refuses to listen to anyone, especially to his teachers at school.':
        'The children are symbols with capital-letter names. He stands for a lack of learning, not a bad attitude.',
      'He is the Ghost’s own son, whom the Ghost is ashamed of.':
        "The Ghost says they are 'Man's', humanity's children, not his own.",
      'He is Scrooge himself as a lonely child, shown to shame him.':
        "That is the first Ghost's lesson, when Scrooge sees his lonely schoolboy self. This boy is a symbol, named for what he stands for.",
    },
    more: "The Ghost says Ignorance is the greater threat of the two. Dickens's own campaign for schools for poor children lies behind the scene.",
  },
  'I was a discord in Gateshead Hall: I was like nobody there; I had nothing in harmony with Mrs. Reed or her children, or her chosen vassalage.':
    {
      why: "Dis- means apart, and the cord in discord comes from a Latin word for heart: hearts apart. In music a discord is notes that clash. 'Nothing in harmony' completes the picture: Jane is the note that does not fit.",
      not: {
        'She is the loudest and most cheerful person in the house.':
          'A discord is not loud cheerfulness. It is something that clashes with everything around it.',
        'She is the music teacher who gives lessons to the Reed children every afternoon.':
          'Harmony and discord are words from music, but Jane is a child here, not a teacher.',
        'She has quarrelled with one cousin but gets on with the rest.':
          'She says she was like nobody there and in harmony with none of them.',
      },
      more: "The music words, discord and harmony, make Jane's isolation something you can almost hear.",
    },
  'I was benevolent and good; misery made me a fiend.': {
    why: 'Bene- means well, as in benefit, and -volent comes from a Latin word for wishing: benevolent, wishing good to others. Setting it beside fiend, the creature argues that misery, not his nature, made him what he is.',
    not: {
      'He was always wicked, and only pretended to be good.':
        'He says the opposite: he was benevolent first, and misery made him a fiend.',
      'He has been rich and generous all his life, giving money to the poor in the town.':
        'Benevolent is about wishing others well, not about money. The creature has never been rich.',
      'He is still good, and fiend is only a joke.':
        'He is not joking. He blames Victor and the world for what he has become.',
    },
    more: "This is the creature's central claim, and the question the novel leaves with its readers: are monsters born, or made?",
  },
}
