import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Prefix & Suffix Lab: the explanation a student sees after each answer, by question key
 * (src/data/games/banks/prefix-suffix-lab.ts). Written with AI on 16 October 2026 and checked
 * against each question and every affix the page can deal with it, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'prefix: happy | meaning: NOT happy': {
    why: "The prefix un- means 'not'. Added to happy, it makes unhappy, which means not happy. Another word with un-: unlucky.",
    more: "Un- is the most common 'not' prefix, but it does not suit every word. Honest takes dis- (dishonest), not un-. If you are unsure which prefix a word takes, check a dictionary.",
    tip: "In writing, one un- word can replace two words: 'She was unhappy' says almost the same as 'She was not happy', and it reads more smoothly.",
  },
  'prefix: lock | meaning: to OPEN a lock': {
    why: "Before a verb, un- means 'undo' or 'do the opposite'. Added to lock, it makes unlock, which means to open a lock. Another word like this: untie, which means to undo a knot.",
    more: 'Do not mix this up with re-. Relock means to lock again, but unlock means to open what was locked.',
  },
  'prefix: kind | meaning: NOT kind': {
    why: "The prefix un- means 'not'. Added to kind, it makes unkind, which means not kind. Another word with un-: unfriendly.",
    more: "Un- words are often milder than a single word with a similar meaning. 'An unkind remark' is milder than 'a cruel remark'. Choose the word that fits how strong the feeling is.",
  },
  'prefix: fair | meaning: NOT fair': {
    why: "The prefix un- means 'not'. Added to fair, it makes unfair, which means not fair or not just. Another word with un-: unequal.",
    tip: "Unfair is a handy word in discussion writing. A sentence such as 'It seems unfair that...' gives your opinion in one word.",
  },
  'prefix: agree | meaning: to NOT agree': {
    why: "The prefix dis- means 'not' or 'the opposite of'. Added to agree, it makes disagree, which means to not agree. Another word with dis-: disconnect.",
    more: 'Spell it dis + agree, with one s: disagree. Do not add a second s.',
  },
  'prefix: appear | meaning: to STOP being seen': {
    why: "The prefix dis- means 'not' or 'the opposite of'. Added to appear, it makes disappear, which means to stop being seen. Another word with dis-: disorder.",
    more: 'Disappear is dis + appear, with one s and two p letters. Compare dissatisfied, where the root satisfied begins with s, so you get a double s where the parts meet.',
  },
  'prefix: honest | meaning: NOT honest': {
    why: "The prefix dis- means 'not' or 'the opposite of'. Added to honest, it makes dishonest, which means not honest. Another word with dis-: disloyal.",
    more: "Un- does not work here, because 'unhonest' is not a word. Some roots take dis- and others take un-, so learn the pairs: dishonest and disloyal, but unkind and unfair.",
  },
  'prefix: obey | meaning: to NOT obey': {
    why: "The prefix dis- means 'not' or 'the opposite of'. Added to obey, it makes disobey, which means to not obey. Another word with dis-: disapprove.",
    more: 'Disobey is a verb. The noun is disobedience and the adjective is disobedient. The prefix stays the same while the ending changes.',
  },
  'prefix: like | meaning: to feel you do NOT like something': {
    why: "The prefix dis- means 'not' or 'the opposite of'. Added to like, it makes dislike, a verb meaning to not like something. Another word with dis-: distrust.",
    more: "Unlike is a different word. As a preposition it means 'different from' ('Unlike his sister, he loves maths'), and online, to unlike a post means to take back a like. Dislike is the word for the feeling.",
  },
  'prefix: spell | meaning: to spell WRONGLY': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to spell, it makes misspell, which means to spell a word wrongly. Another word with mis-: misuse.",
    more: "Keep both s letters: mis + spell = misspell. Writing 'mispell' is itself a common misspelling.",
  },
  'prefix: understand | meaning: to understand WRONGLY': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to understand, it makes misunderstand, which means to get the meaning wrong. Another word with mis-: misread.",
    more: 'Misunderstand has three small parts: mis + under + stand. Spot them one at a time and the spelling is easy.',
    tip: 'If you meet a long, unknown word in a reading task, split off the prefix first. Mis- tells you that something is wrong or bad.',
  },
  'prefix: behave | meaning: to behave BADLY': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to behave, it makes misbehave, which means to behave badly. Another word with mis-: mistreat.",
    more: 'The noun is misbehaviour, spelt with -our in British English.',
  },
  'prefix: lead | meaning: to lead in the WRONG direction': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to lead, it makes mislead, which means to lead someone the wrong way or give them a false idea. Another word with mis-: misinform.",
    more: "The past tense is misled, spelt with one s and no a: 'The advert misled customers.'",
  },
  'prefix: judge | meaning: to judge WRONGLY': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to judge, it makes misjudge, which means to judge a person or situation wrongly. Another word with mis-: miscount.",
    more: 'You can misjudge a distance, a person or a plan. Compare prejudge, with pre-, which means to judge before you know the facts.',
  },
  'prefix: build | meaning: to build AGAIN': {
    why: "The prefix re- means 'again'. Added to build, it makes rebuild, which means to build again. Another word with re-: repaint.",
    tip: "To describe a second try, a re- verb is shorter than a whole phrase: 'They rebuilt the bridge' means 'They built the bridge again'.",
  },
  'prefix: write | meaning: to write AGAIN': {
    why: "The prefix re- means 'again'. Added to write, it makes rewrite, which means to write something again, often to improve it. Another word with re-: redo.",
    more: 'Rewrite follows the pattern of write: the past tense is rewrote and the past participle is rewritten.',
    tip: 'Good writers rewrite. In an exam, leave a few minutes to read your answer and rewrite any sentence that is unclear.',
  },
  'prefix: play | meaning: to play AGAIN': {
    why: "The prefix re- means 'again'. Added to play, it makes replay, which means to play again. Another word with re-: restart.",
    more: "Replay can be a verb ('replay the match') or a noun ('watch the replay'). The word class can change without any change in spelling.",
  },
  'prefix: use | meaning: to use AGAIN': {
    why: "The prefix re- means 'again'. Added to use, it makes reuse, which means to use again. Another word with re-: recycle.",
    more: "Re- can also mean 'back', as in return and repay. Look at the root and the sentence to decide which meaning is meant.",
  },
  'prefix: consider | meaning: to think about AGAIN': {
    why: "The prefix re- means 'again'. Added to consider, it makes reconsider, which means to think about something again, and perhaps change your mind. Another word with re-: rearrange.",
    more: "No hyphen is needed in reconsider. A hyphen is used when it avoids confusion, as in 're-cover' (cover again) and 'recover' (get better).",
  },
  'prefix: view | meaning: to look at something BEFORE release': {
    why: "The prefix pre- means 'before'. Added to view, it makes preview, which means to look at something before it is released to everyone. Another word with pre-: prefix.",
    more: 'Compare review, with re-, which means to look at something again. A preview comes before and a review comes after.',
  },
  'prefix: historic | meaning: BEFORE recorded history': {
    why: "The prefix pre- means 'before'. Added to historic, it makes prehistoric, which means from the time before events were written down. Another word with pre-: predict.",
    more: 'Dinosaurs and early cave paintings are both prehistoric, because they belong to the time before written records.',
    tip: 'To work out an unknown word, split off the prefix. Pre- tells you that something comes before something else.',
  },
  'prefix: heat | meaning: to heat BEFOREHAND': {
    why: "The prefix pre- means 'before'. Added to heat, it makes preheat, which means to heat something before you use it, such as an oven. Another word with pre-: precook.",
    more: "A recipe says 'preheat the oven' so that it is already hot when the food goes in. Reheat, with re-, is different: it means to heat again.",
  },
  'prefix: pay | meaning: to pay BEFORE you receive': {
    why: "The prefix pre- means 'before'. Added to pay, it makes prepay, which means to pay before you receive something. Another word with pre-: prewash.",
    more: 'Prepay and repay look alike but differ in meaning. Prepay means to pay in advance, and repay means to pay back.',
  },
  'prefix: school | meaning: education BEFORE school': {
    why: "The prefix pre- means 'before'. Added to school, it makes preschool, which means education for young children before they start school. Another word with pre-: prearrange.",
    more: "Pre- is the opposite of post-, which means 'after'. You may also see preschool written with a hyphen, as pre-school.",
  },
  'prefix: freeze | meaning: AGAINST freezing': {
    why: "The prefix anti- means 'against'. Added to freeze, it makes antifreeze, a liquid that works against freezing. Another word with anti-: antidote.",
    more: 'Antifreeze is added to the water in a car engine so that it does not freeze in cold weather.',
  },
  'prefix: social | meaning: AGAINST social behaviour': {
    why: "The prefix anti- means 'against'. Added to social, it makes antisocial, which describes behaviour that goes against what is good for other people. Another word with anti-: antivirus.",
    more: "Antisocial often describes behaviour that upsets or harms others, such as vandalism. People also use it to mean 'not wanting company'.",
  },
  'prefix: clockwise | meaning: AGAINST the clock’s direction': {
    why: "The prefix anti- means 'against' or 'opposite to'. Added to clockwise, it makes anticlockwise, which means turning the opposite way to the hands of a clock. Another word with anti-: anticlimax.",
    more: "Anticlockwise is the British English word. Americans say counterclockwise. You might read 'Turn the lid anticlockwise to open the jar'.",
  },
  'prefix: bacterial | meaning: AGAINST bacteria': {
    why: "The prefix anti- means 'against'. Added to bacterial, it makes antibacterial, which means working against bacteria. Another word with anti-: antiviral.",
    more: 'Antibacterial soaps and sprays are made to kill bacteria or stop them growing. Look for the word on cleaning products.',
  },
  'prefix: marine | meaning: a vessel that goes UNDER the sea': {
    why: "The prefix sub- means 'under' or 'below'. Added to marine, which means to do with the sea, it makes submarine, a vessel that travels under the sea. Another word with sub-: subsoil.",
    more: "Submarine can also be an adjective, as in 'submarine cables', which lie on the sea floor.",
  },
  'prefix: way | meaning: a path or railway UNDER the ground': {
    why: "The prefix sub- means 'under' or 'below'. Added to way, it makes subway, a way that runs under the ground. Another word with sub-: subtitle.",
    more: 'In Britain a subway is usually a path for walkers that goes under a busy road. In some cities, such as Glasgow and New York, the underground railway is called the subway.',
  },
  'prefix: heading | meaning: a smaller heading UNDER the main one': {
    why: "The prefix sub- means 'under' or 'below'. Added to heading, it makes subheading, a smaller heading under the main heading. Another word with sub-: subtopic.",
    more: "Here 'under' also means 'a smaller part of'. A subheading divides a long text into parts, so the reader can find the part they need.",
    tip: 'In your own reports, leaflets and articles, use subheadings. They help the reader find each part quickly.',
  },
  'prefix: standard | meaning: BELOW the standard': {
    why: "The prefix sub- means 'under' or 'below'. Added to standard, it makes substandard, which means below the level that is expected or acceptable. Another word with sub-: subconscious.",
    more: 'You can use it to criticise quality, for example substandard housing or substandard work.',
  },
  'prefix: merge | meaning: to sink completely UNDER water': {
    why: "The prefix sub- means 'under' or 'below'. Added to merge, it makes submerge, which means to go, or to put something, completely under water. Another word with sub-: submarine.",
    more: "Careful: merge by itself means to join together. Submerge keeps an older meaning of the root, 'to dip', so it is best learned as one whole word.",
  },
  'prefix: national | meaning: BETWEEN nations': {
    why: "The prefix inter- means 'between' or 'among'. Added to national, it makes international, which means between nations. Another word with inter-: internet.",
    more: 'International describes things that involve two or more countries, such as an international match or an international airport. National is about one country only.',
  },
  'prefix: act | meaning: to act BETWEEN people': {
    why: "The prefix inter- means 'between' or 'among'. Added to act, it makes interact, which means to act with each other. Another word with inter-: interrupt.",
    more: 'The noun is interaction and the adjective is interactive. An interactive game lets you act on the screen and then responds to you.',
  },
  'prefix: change | meaning: to swap BETWEEN two things': {
    why: "The prefix inter- means 'between' or 'among'. Added to change, it makes interchange, which means to swap two things with each other. Another word with inter-: interval.",
    more: 'As a noun, an interchange can also be a place where roads or train lines meet, so that you can switch between them.',
  },
  'prefix: city | meaning: travelling BETWEEN cities': {
    why: "The prefix inter- means 'between' or 'among'. Added to city, it makes intercity, which means between cities. Another word with inter-: interlock.",
    more: 'Intercity is an adjective: an intercity train, bus or road links one city with another. It is usually written as one word, with no hyphen.',
  },
  'prefix: connected | meaning: with links BETWEEN all the parts': {
    why: "The prefix inter- means 'between' or 'among'. Added to connected, it makes interconnected, which means linked with one another. Another word with inter-: intersect.",
    tip: "In an essay, interconnected is a good word for linking ideas: 'The themes of power and guilt are interconnected in the play.'",
  },
  'prefix: tidy | meaning: NOT tidy': {
    why: "The prefix un- means 'not'. Added to tidy, it makes untidy, which means not tidy. Another word with un-: unclear.",
  },
  'prefix: wrap | meaning: to take the wrapping OFF': {
    why: "Before a verb, un- means 'undo' or 'do the opposite'. Added to wrap, it makes unwrap, which means to take the wrapping off. Another word with un-: unpack.",
    more: 'Rewrap would mean to wrap again. So un- and re- give different meanings when they are joined to the same root.',
  },
  'prefix: cover | meaning: to take a cover OFF': {
    why: "Before a verb, un- means 'undo' or 'do the opposite'. Added to cover, it makes uncover, which means to take the cover off. Another word with un-: unfold.",
    more: "Uncover can also mean to find something hidden, as in 'The police uncovered a plot'. Discover is a different word: it usually means to find something for the first time.",
  },
  'prefix: place | meaning: to put in the WRONG place and lose it': {
    why: "The prefix mis- means 'wrongly' or 'badly'. Added to place, it makes misplace, which means to put something in the wrong place, so that you cannot find it. Another word with mis-: mislabel.",
    more: 'Replace, with re-, means to put back, or to swap one thing for another. Displace, with dis-, means to move something out of its place.',
  },
  'prefix: fill | meaning: to fill AGAIN': {
    why: "The prefix re- means 'again'. Added to fill, it makes refill, which means to fill again. Another word with re-: reheat.",
    more: "Refill is both a verb ('refill your bottle') and a noun ('a refill for the pen').",
  },
  'prefix: caution | meaning: care taken BEFORE acting': {
    why: "The prefix pre- means 'before'. Added to caution, it makes precaution, which means a careful step taken before something happens, to avoid trouble. Another word with pre-: prepare.",
    more: 'Wearing a seat belt and checking the weather before a trip are precautions. You take them in advance, just in case.',
  },
  'prefix: septic | meaning: AGAINST infection': {
    why: "The prefix anti- means 'against'. Added to septic, which means infected by germs, it makes antiseptic, a substance that works against infection. Another word with anti-: antibiotic.",
    more: 'Antiseptic cream is put on a cut so that germs cannot grow. An antibiotic is different: it is a medicine that treats a bacterial infection already inside the body.',
  },
  'prefix: title | meaning: text BELOW the main image (on screen)': {
    why: "The prefix sub- means 'under' or 'below'. Added to title, it makes subtitle, which is text shown below the picture on a screen, often giving the words people say. Another word with sub-: subheading.",
    more: 'A subtitle can also be the second, smaller title of a book or article, written under the main title.',
    tip: 'Subtitles help your listening. Watch a short clip with English subtitles, then watch it again without them.',
  },
  'prefix: view | meaning: a formal talk BETWEEN people': {
    why: "The prefix inter- means 'between' or 'among'. Added to view, it makes interview, a formal talk between people in which one asks questions and the other answers. Another word with inter-: internet.",
    more: "Interview comes from an old French word meaning 'to see each other'. Compare preview (see before) and review (see again).",
  },
  'suffix: care | make an ADJECTIVE meaning “full of care”': {
    why: "The suffix -ful means 'full of'. Added to care, it makes the adjective careful, which means full of care. Another word with -ful: helpful.",
    more: 'Spell -ful with one l, even though the word full has two. Careful, helpful and hopeful all end in a single l.',
    tip: 'Careful + ly gives two l letters, one from each ending: carefully.',
  },
  'suffix: hope | make an ADJECTIVE meaning “full of hope”': {
    why: "The suffix -ful means 'full of'. Added to hope, it makes the adjective hopeful, which means full of hope. Another word with -ful: thankful.",
    more: 'Hope ends in a silent e, and the e stays because -ful starts with a consonant: hope + ful = hopeful. Compare hoping, where the e is dropped before a vowel.',
  },
  'suffix: mercy | make an ADJECTIVE meaning “full of mercy”': {
    why: "The suffix -ful means 'full of'. Added to mercy, it makes the adjective merciful, which means full of mercy. Another word with -ful: colourful.",
    more: 'The y changes to i before -ful: mercy becomes merci- and then merciful. The same happens with pity and pitiful.',
  },
  'suffix: use | make an ADJECTIVE meaning “full of use”': {
    why: "The suffix -ful means 'full of'. Added to use, it makes the adjective useful, which means full of use, or helpful. Another word with -ful: harmful.",
    more: 'Do not confuse useful with usable. Something usable can be used, but something useful actually helps you.',
  },
  'suffix: care | make an ADJECTIVE meaning “without care”': {
    why: "The suffix -less means 'without'. Added to care, it makes the adjective careless, which means without care. Another word with -less: endless.",
    more: 'The suffixes -ful and -less are opposites. Careful means full of care and careless means without care. Hopeful and hopeless work in the same way.',
  },
  'suffix: hope | make an ADJECTIVE meaning “without hope”': {
    why: "The suffix -less means 'without'. Added to hope, it makes the adjective hopeless, which means without hope. Another word with -less: harmless.",
    more: "The e in hope stays, because -less starts with a consonant. In speech, hopeless also describes poor ability: 'I am hopeless at drawing.'",
  },
  'suffix: fear | make an ADJECTIVE meaning “without fear”': {
    why: "The suffix -less means 'without'. Added to fear, it makes the adjective fearless, which means without fear. Another word with -less: speechless.",
    more: 'Fearless sounds positive, as in a fearless leader. Many -less words sound negative instead, such as useless and hopeless.',
  },
  'suffix: home | make an ADJECTIVE meaning “without a home”': {
    why: "The suffix -less means 'without'. Added to home, it makes the adjective homeless, which means without a home. Another word with -less: jobless.",
    more: "You can also use 'the homeless' as a noun phrase for people who have no home.",
  },
  'suffix: kind | make a NOUN meaning “the state of being kind”': {
    why: "The suffix -ness turns an adjective into a noun for 'the state of being'. Added to kind, it makes the noun kindness, which means the state of being kind. Another word with -ness: softness.",
    more: "Kind is an adjective and kindness is a noun. You can be kind, but you show kindness: 'She thanked him for his kindness.'",
  },
  'suffix: happy | make a NOUN meaning “the state of being happy”': {
    why: "The suffix -ness turns an adjective into a noun for 'the state of being'. Added to happy, it makes the noun happiness, which means the state of being happy. Another word with -ness: loneliness.",
    more: 'The y changes to i before -ness: happy becomes happi- and then happiness. Lonely and loneliness follow the same rule.',
  },
  'suffix: dark | make a NOUN meaning “the state of being dark”': {
    why: "The suffix -ness turns an adjective into a noun for 'the state of being'. Added to dark, it makes the noun darkness, which means the state of being dark. Another word with -ness: goodness.",
    more: 'Nothing changes in the root: dark + ness = darkness. Writers often use darkness to create a frightening or sad mood.',
  },
  'suffix: sad | make a NOUN meaning “the state of being sad”': {
    why: "The suffix -ness turns an adjective into a noun for 'the state of being'. Added to sad, it makes the noun sadness, which means the state of being sad. Another word with -ness: fitness.",
    more: 'Sad ends in one consonant after a short vowel, so you might expect the d to double. It does not, because -ness starts with a consonant. The d doubles only before a vowel, as in sadder.',
  },
  'suffix: ill | make a NOUN meaning “the state of being ill”': {
    why: "The suffix -ness turns an adjective into a noun for 'the state of being'. Added to ill, it makes the noun illness, which means the state of being ill. Another word with -ness: sickness.",
    more: 'Keep both l letters from ill and both s letters from -ness. Illness has a double l and a double s, and no letter is lost.',
  },
  'suffix: educate | make a NOUN for the act of educating': {
    why: 'The suffix -tion turns a verb into a noun for an action or result. With educate it makes the noun education, which means the act of educating or teaching. Another word with -tion: collection.',
    more: 'Drop the final e of educate, then add -ion: educat- plus -ion gives education. The t of the root becomes the t of -tion. The same happens with decorate and decoration.',
    tip: "The ending -tion sounds like 'shun'. For a noun made from a verb, -tion is the most common way to spell that sound.",
  },
  'suffix: create | make a NOUN for the act of creating': {
    why: 'The suffix -tion turns a verb into a noun for an action or result. With create it makes the noun creation, which means the act of creating, or the thing that is made. Another word with -tion: direction.',
    more: "Drop the final e of create, then add -ion: creat- plus -ion gives creation. The t of the root becomes the t of -tion. Writers also use 'creation' for what is made, such as Frankenstein's creation.",
  },
  'suffix: celebrate | make a NOUN for the act of celebrating': {
    why: 'The suffix -tion turns a verb into a noun for an action or result. With celebrate it makes the noun celebration, which means the act of celebrating, or a party. Another word with -tion: invention.',
    more: 'Drop the final e of celebrate, then add -ion. The t of the root becomes the t of -tion. Say it in beats to spell it: cel-e-bra-tion.',
  },
  'suffix: inform | make a NOUN meaning facts that inform': {
    why: 'The suffix -tion turns a verb into a noun. With inform the ending is -ation, which makes the noun information, meaning facts about something. Another word with this ending: invitation.',
    more: "Information is an uncountable noun, so it has no plural. You say 'some information' or 'a piece of information', never 'informations'.",
  },
  'suffix: pollute | make a NOUN for the act of polluting': {
    why: 'The suffix -tion turns a verb into a noun for an action or result. With pollute it makes the noun pollution, which means the act of polluting, or the harmful dirt and waste it puts into the air, water or land. Another word with -tion: prevention.',
    more: 'Drop the final e of pollute, then add -ion: pollut- plus -ion gives pollution. The t of the root becomes the t of -tion. The word turns up in geography and in writing about the environment.',
  },
  'suffix: enjoy | make an ADJECTIVE meaning “able to be enjoyed”': {
    why: "The suffix -able makes adjectives, often meaning 'able to be'. Added to enjoy, it makes the adjective enjoyable, which means able to be enjoyed. Another word with -able: readable.",
    more: 'Enjoyable is an adjective, but enjoyment, with -ment, is a noun. The same root can take different suffixes to make different kinds of word.',
  },
  'suffix: comfort | make an ADJECTIVE meaning “giving comfort”': {
    why: "The suffix -able makes adjectives and often means 'able to' or 'able to be'. Added to comfort, it makes the adjective comfortable, which means able to give comfort, or feeling at ease. Another word with -able: acceptable.",
    more: "A common mistake is to write 'comfertable'. Remember the whole word comfort, then add -able.",
  },
  'suffix: value | make an ADJECTIVE meaning “having great value”': {
    why: "The suffix -able makes adjectives, often meaning 'able to be' or 'having the quality of'. Added to value, it makes the adjective valuable, which means having great value. Another word with -able: adorable.",
    more: "Drop the final e of value, then add -able: valu- plus -able gives valuable. A common mistake is 'valueable'.",
  },
  'suffix: rely | make an ADJECTIVE meaning “able to be relied on”': {
    why: "The suffix -able makes adjectives, often meaning 'able to be'. Added to rely, it makes the adjective reliable, which means able to be relied on. Another word with -able: dependable.",
    more: 'The y in rely changes to i before -able: reli- plus -able gives reliable. In a reading task, a reliable source is one you can trust.',
  },
  'suffix: wash | make an ADJECTIVE meaning “able to be washed”': {
    why: "The suffix -able makes adjectives, often meaning 'able to be'. Added to wash, it makes the adjective washable, which means able to be washed. Another word with -able: drinkable.",
    more: 'A clothes label that says washable means the item can be cleaned in water. Nothing in the root changes: wash + able = washable.',
  },
  'suffix: quick | make an ADVERB meaning “in a quick way”': {
    why: 'The suffix -ly turns many adjectives into adverbs that say how something happens. Added to quick, it makes the adverb quickly, which means in a quick way. Another word with -ly: loudly.',
    more: "An adverb often describes a verb: 'She ran quickly.' The adjective quick describes a noun: 'a quick run'.",
  },
  'suffix: slow | make an ADVERB meaning “in a slow way”': {
    why: 'The suffix -ly turns many adjectives into adverbs that say how something happens. Added to slow, it makes the adverb slowly, which means in a slow way. Another word with -ly: quietly.',
    more: "Slow is used as an adverb on some road signs and in speech, as in 'Drive slow'. In careful writing, use slowly.",
  },
  'suffix: happy | make an ADVERB meaning “in a happy way”': {
    why: 'The suffix -ly turns many adjectives into adverbs that say how something happens. Added to happy, it makes the adverb happily, which means in a happy way. Another word with -ly: easily.',
    more: 'The y changes to i before -ly: happy becomes happi- and then happily. Easy and angry follow the same rule: easily and angrily.',
  },
  'suffix: careful | make an ADVERB meaning “in a careful way”': {
    why: 'The suffix -ly turns many adjectives into adverbs that say how something happens. Added to careful, it makes the adverb carefully, which means in a careful way. Another word with -ly: politely.',
    more: "Carefully has two l letters, one from -ful and one from -ly: careful + ly. Do not write 'carefuly'.",
  },
  'suffix: gentle | make an ADVERB meaning “in a gentle way”': {
    why: 'The suffix -ly turns many adjectives into adverbs that say how something happens. Added to gentle, it makes the adverb gently, which means in a gentle way. Another word with -ly: simply.',
    more: "For adjectives that end in a consonant and then -le, change the -le to -ly: gentle becomes gently, and simple becomes simply. Do not write 'gentlely'.",
  },
  'suffix: enjoy | make a NOUN for the act/feeling of enjoying': {
    why: 'The suffix -ment turns a verb into a noun for an action, a result or a feeling. Added to enjoy, it makes the noun enjoyment, which means the feeling of enjoying something. Another word with -ment: amazement.',
    more: 'Enjoy ends in y after a vowel, so the y stays: enjoy + ment = enjoyment. The y changes to i after a consonant, as in happy and happiness, but it usually stays after a vowel.',
  },
  'suffix: agree | make a NOUN for the act of agreeing': {
    why: 'The suffix -ment turns a verb into a noun for an action or result. Added to agree, it makes the noun agreement, which means the act of agreeing, or a deal. Another word with -ment: payment.',
    more: "The e stays before -ment: agree + ment = agreement. The word has three e letters, so do not write 'agrement'.",
  },
  'suffix: move | make a NOUN for the act of moving': {
    why: 'The suffix -ment turns a verb into a noun for an action or result. Added to move, it makes the noun movement, which means the act of moving. Another word with -ment: treatment.',
    more: 'The final e of move stays, because -ment starts with a consonant: move + ment = movement. A movement can also be a group working for a cause.',
  },
  'suffix: develop | make a NOUN for the process of developing': {
    why: 'The suffix -ment turns a verb into a noun for an action or result. Added to develop, it makes the noun development, which means the process of developing. Another word with -ment: improvement.',
    more: "There is no e between p and m: develop + ment = development. Many people write 'developement' by mistake.",
  },
  'suffix: govern | make a NOUN for the group of people who govern': {
    why: 'The suffix -ment turns a verb into a noun for an action, a result or a group. Added to govern, it makes the noun government, which means the group of people who govern a country. Another word with -ment: management.',
    more: "Say govern, then add ment. The n is often missed, which gives the common mistake 'goverment'.",
  },
  'suffix: danger | make an ADJECTIVE meaning “full of danger”': {
    why: "The suffix -ous makes adjectives meaning 'full of' or 'having the quality of'. Added to danger, it makes the adjective dangerous, which means full of danger. Another word with -ous: adventurous.",
    more: 'Do not confuse dangerous with endangered. A dangerous animal can hurt you, but an endangered animal is itself in danger.',
  },
  'suffix: poison | make an ADJECTIVE meaning “containing poison”': {
    why: "The suffix -ous makes adjectives meaning 'full of' or 'having the quality of'. Added to poison, it makes the adjective poisonous, which means containing poison. Another word with -ous: joyous.",
    more: 'Poisonous describes something that harms you if you eat or touch it, such as some mushrooms. Venomous is different: it describes animals, such as some snakes, that inject venom when they bite or sting.',
  },
  'suffix: fame | make an ADJECTIVE meaning “having fame”': {
    why: "The suffix -ous makes adjectives meaning 'full of' or 'having the quality of'. Added to fame, it makes the adjective famous, which means having fame. Another word with -ous: glorious.",
    more: "Drop the final e of fame before -ous: fam- plus -ous gives famous. Do not write 'fameous'.",
  },
  'suffix: mystery | make an ADJECTIVE meaning “full of mystery”': {
    why: "The suffix -ous makes adjectives meaning 'full of' or 'having the quality of'. Added to mystery, it makes the adjective mysterious, which means full of mystery. Another word with -ous: furious.",
    more: 'The y changes to i before -ous: mystery becomes mysteri- and then mysterious. In a story, a mysterious character keeps secrets from the reader.',
  },
  'suffix: nerve | make an ADJECTIVE meaning “anxious / on edge”': {
    why: "The suffix -ous makes adjectives meaning 'full of' or 'having the quality of'. Added to nerve, it makes the adjective nervous, which means anxious or on edge. Another word with -ous: ridiculous.",
    more: "Drop the final e of nerve before -ous: nerv- plus -ous gives nervous. In science, nervous also means 'to do with nerves', as in the nervous system.",
  },
  'suffix: thought | make an ADJECTIVE meaning “full of thought for others”': {
    why: "The suffix -ful means 'full of'. Added to thought, it makes the adjective thoughtful, which means full of thought for other people, or considerate. Another word with -ful: respectful.",
    more: 'Thoughtful can also mean deep in thought, as in a thoughtful look. Thoughtless is the opposite of the first meaning: it means not thinking about other people.',
  },
  'suffix: power | make an ADJECTIVE meaning “full of power”': {
    why: "The suffix -ful means 'full of'. Added to power, it makes the adjective powerful, which means full of power. Another word with -ful: successful.",
    tip: "In an essay, do not call a word 'powerful' and stop there. Say what effect it has, for example that it makes the reader feel afraid.",
  },
  'suffix: pain | make an ADJECTIVE meaning “without pain”': {
    why: "The suffix -less means 'without'. Added to pain, it makes the adjective painless, which means without pain. Another word with -less: pointless.",
    more: 'Painless and painful are opposites. A dentist may say a treatment is painless when it does not hurt.',
  },
  'suffix: weight | make an ADJECTIVE meaning “without weight”': {
    why: "The suffix -less means 'without'. Added to weight, it makes the adjective weightless, which means without weight. Another word with -less: cloudless.",
    more: 'Astronauts in orbit feel weightless, as if they had no weight. Spell weight with ei, as in weigh: w-e-i-g-h-t.',
  },
  'suffix: weak | make a NOUN meaning “the state of being weak”': {
    why: "The suffix -ness turns an adjective into a noun for 'the state of being'. Added to weak, it makes the noun weakness, which means the state of being weak. Another word with -ness: politeness.",
    more: "Do not confuse weak (not strong) with week (seven days). Weakness can also mean a fault, as in 'Pride was his weakness.'",
  },
  'suffix: protect | make a NOUN for the act of protecting': {
    why: 'The suffix -tion turns a verb into a noun for an action or result. With protect it makes the noun protection, which means the act of protecting, or something that keeps you safe. Another word with -tion: reaction.',
    more: 'Protect already ends in t, so only -ion is added: protect + ion = protection. That t is the t of -tion. React and reaction work the same way.',
  },
  'suffix: break | make an ADJECTIVE meaning “able to be broken”': {
    why: "The suffix -able makes adjectives, often meaning 'able to be'. Added to break, it makes the adjective breakable, which means able to be broken. Another word with -able: recyclable.",
    more: "Break is an irregular verb (break, broke, broken), but -able is added to the base form: break + able. Parcels with breakable things inside are marked 'Fragile'.",
  },
  'suffix: brave | make an ADVERB meaning “in a brave way”': {
    why: 'The suffix -ly turns many adjectives into adverbs that say how something happens. Added to brave, it makes the adverb bravely, which means in a brave way. Another word with -ly: nicely.',
    more: 'The silent e stays: brave + ly = bravely. Adjectives that end in a consonant and then -le are different, because they change -le to -ly, as in gentle and gently.',
  },
  'suffix: punish | make a NOUN for the act of punishing': {
    why: 'The suffix -ment turns a verb into a noun for an action or result. Added to punish, it makes the noun punishment, which means the act of punishing, or the penalty itself. Another word with -ment: replacement.',
    more: "You can say 'a harsh punishment', or just 'Punishment does not always work.' Both are correct.",
  },
  'suffix: courage | make an ADJECTIVE meaning “brave / having courage”': {
    why: "The suffix -ous makes adjectives meaning 'full of' or 'having the quality of'. Added to courage, it makes the adjective courageous, which means having courage, or brave. Another word with -ous: outrageous.",
    more: "Keep the final e of courage before -ous: courage + ous = courageous. The e keeps the g soft, like a j sound. Without it, the g would sound hard, as in 'got'.",
  },
}
