import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Apostrophe Ace: pick the sentence in which every apostrophe is used correctly.
 *
 * Moved out of src/app/games/apostrophe-ace/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). Three of
 * the 55 had a second right option or an answer that is not standard English:
 *
 *   - "Shouldn't we've told them sooner?" was marked right, but "we've" cannot
 *     follow "shouldn't we" in standard English: the sentence is "Shouldn't we
 *     have told them sooner?". The question now asks about "shouldn't" alone, and
 *     its wrong options changed with it ("Shouldnt we have", "Should'nt we have"
 *     and "Shouldn't' we have"). Its one-line `explanation` no longer mentions
 *     "we've".
 *   - "The student's worked hard all term." can be read as "The student has
 *     worked hard all term", because an apostrophe in "student's" can stand for
 *     "has". It was a correct sentence beside the marked "The students worked
 *     hard all term." It is now "The students's worked hard all term."
 *   - "The people's voices were finally heard." offered "The peoples' voices"
 *     beside it. "Peoples" is a word (separate nations or groups), so that was a
 *     correct sentence with another meaning. It is now "The people' voices".
 *
 * One wording fix in a field the page no longer shows: the `explanation` for
 * "They're certain that it's their turn now." called "their" a possessive
 * pronoun. It is a possessive determiner, as the site's grammar pages say.
 *
 * One house-style fix, by the second reader: "You're right - we're almost
 * there." and its three wrong versions joined the clauses with a hyphen used as
 * a dash, which the site does not use as punctuation, in a game about
 * punctuating correctly. All four now use a colon ("You're right: we're almost
 * there."); the apostrophes, which are what the question tests, are unchanged.
 *
 * THE LABEL IS PART OF THE QUESTION. The page shows `ruleTested` above every
 * question, and in the possession questions it is what says whether one owner or
 * several is meant. "The dogs bone" could be "The dog's bone" or "The dogs'
 * bone", and both are correct sentences about different dogs. The label
 * ("Singular possession" or "Plural possession") decides which one the question
 * asks for, and where the sentence has its own clue ("as it slept" for the cat's
 * whiskers, "Both" for the countries' leaders) that decides too. In 13 questions
 * the other number is a correct sentence, and the explanations name the label
 * there. Do not take the label off the page without putting the number of
 * owners into the question.
 *
 * `ruleTested` is unchanged and is still the label the page shows. The one-line
 * `explanation` is unchanged except as above; the page no longer shows it,
 * because the panel (src/data/games/explanations/apostrophe-ace.ts) covers it.
 */

export interface ApostropheQuestion {
  options: [string, string, string, string]
  answerIndex: number
  ruleTested: string
  explanation: string
}

export const QUESTION_BANK: ApostropheQuestion[] = [
  // ── Omission (contractions) ──
  {
    options: [
      'I dont know where she went.',
      "I don't know where she went.",
      "I do'nt know where she went.",
      "I don't' know where she went.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation: '"don\'t" is short for "do not". The apostrophe replaces the missing "o".',
  },
  {
    options: [
      'Its raining, so we cant go out.',
      "It's raining, so we can't go out.",
      "Its raining, so we can't go out.",
      "It's raining, so we cant go out.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"It\'s" = "it is" and "can\'t" = "cannot". Both need an apostrophe for the missing letters.',
  },
  {
    options: [
      'They wont be here until were ready.',
      "They won't be here until we're ready.",
      "They wo'nt be here until we're ready.",
      "They won't be here until were ready.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"won\'t" = "will not" and "we\'re" = "we are". Apostrophes mark the dropped letters.',
  },
  {
    options: [
      'Shes already finished, hasnt she?',
      "She's already finished, hasn't she?",
      "Shes' already finished, hasn't she?",
      "She's already finished, hasnt she?",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"She\'s" = "she has" and "hasn\'t" = "has not". Each contraction needs its apostrophe.',
  },
  {
    options: [
      'Were going to the park if its sunny.',
      "We're going to the park if it's sunny.",
      "Were going to the park if it's sunny.",
      "We're going to the park if its sunny.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"We\'re" = "we are" and "it\'s" = "it is". Plain "were" and "its" are different words.',
  },
  {
    options: [
      'Id rather wait until theyre back.',
      "I'd rather wait until they're back.",
      "I'd rather wait until theyre back.",
      "Id rather wait until they're back.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"I\'d" = "I would" and "they\'re" = "they are". The apostrophes show missing letters.',
  },
  {
    options: [
      'Lets see whos coming to the party.',
      "Let's see who's coming to the party.",
      "Lets see who's coming to the party.",
      "Let's see whos coming to the party.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"Let\'s" = "let us" and "who\'s" = "who is". Both are contractions needing apostrophes.',
  },
  {
    options: [
      'Youll be fine once youve practised.',
      "You'll be fine once you've practised.",
      "You'll be fine once youve practised.",
      "Youll be fine once you've practised.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"You\'ll" = "you will" and "you\'ve" = "you have". Apostrophes replace the dropped letters.',
  },
  {
    options: [
      'Theres no way hell agree to that.',
      "There's no way he'll agree to that.",
      "Theres no way he'll agree to that.",
      "There's no way hell agree to that.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation: '"There\'s" = "there is" and "he\'ll" = "he will". Each needs an apostrophe.',
  },
  {
    options: [
      'Im sure that wasnt my fault.',
      "I'm sure that wasn't my fault.",
      "Im sure that wasn't my fault.",
      "I'm sure that wasnt my fault.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation: '"I\'m" = "I am" and "wasn\'t" = "was not". Apostrophes mark the missing letters.',
  },
  {
    options: [
      'Shouldnt we have told them sooner?',
      "Shouldn't we have told them sooner?",
      "Should'nt we have told them sooner?",
      "Shouldn't' we have told them sooner?",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"Shouldn\'t" = "should not". The apostrophe sits where the "o" is removed, between the "n" and the "t".',
  },

  // ── its vs it's ──
  {
    options: [
      "The dog wagged it's tail happily.",
      'The dog wagged its tail happily.',
      "The dog wagged its' tail happily.",
      'The dog wagged it,s tail happily.',
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation:
      '"its" (no apostrophe) shows possession. "It\'s" only ever means "it is" or "it has".',
  },
  {
    options: [
      "Its been a long day, hasn't it?",
      "It's been a long day, hasn't it?",
      "Its' been a long day, hasn't it?",
      "Its been a long day, has'nt it?",
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation:
      'Here "It\'s" means "It has", so it needs an apostrophe. "Its" without one shows possession.',
  },
  {
    options: [
      "The team lost it's best player.",
      'The team lost its best player.',
      "The team lost its' best player.",
      "The team lost it's' best player.",
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation: 'The player belongs to the team, so use possessive "its" with no apostrophe.',
  },
  {
    options: [
      'I think its going to snow tonight.',
      "I think it's going to snow tonight.",
      "I think its' going to snow tonight.",
      'I think it,s going to snow tonight.',
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation: '"It\'s going" means "It is going", so the apostrophe is needed.',
  },
  {
    options: [
      "Every car has it's own number plate.",
      'Every car has its own number plate.',
      "Every car has its' own number plate.",
      "Every car has its own number plate'.",
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation: 'The number plate belongs to the car, so use possessive "its" - no apostrophe.',
  },

  // ── your vs you're ──
  {
    options: [
      'Your going to love this film.',
      "You're going to love this film.",
      'Youre going to love this film.',
      "Your' going to love this film.",
    ],
    answerIndex: 1,
    ruleTested: 'your vs you’re',
    explanation: '"You\'re" = "you are". "Your" shows possession (your book, your idea).',
  },
  {
    options: [
      "Is this you're coat on the chair?",
      'Is this your coat on the chair?',
      'Is this youre coat on the chair?',
      "Is this your' coat on the chair?",
    ],
    answerIndex: 1,
    ruleTested: 'your vs you’re',
    explanation: 'The coat belongs to you, so use possessive "your" with no apostrophe.',
  },
  {
    options: [
      'Your right: were almost there.',
      "You're right: we're almost there.",
      "Youre right: we're almost there.",
      "You're right: were almost there.",
    ],
    answerIndex: 1,
    ruleTested: 'your vs you’re',
    explanation:
      '"You\'re right" = "You are right", and "we\'re" = "we are". Both need apostrophes.',
  },
  {
    options: [
      "Remember to bring you're homework.",
      'Remember to bring your homework.',
      'Remember to bring youre homework.',
      "Remember to bring your' homework.",
    ],
    answerIndex: 1,
    ruleTested: 'your vs you’re',
    explanation: 'The homework belongs to you: possessive "your", no apostrophe.',
  },
  {
    options: [
      'Your the best person for the job.',
      "You're the best person for the job.",
      'Youre the best person for the job.',
      "Your' the best person for the job.",
    ],
    answerIndex: 1,
    ruleTested: 'your vs you’re',
    explanation: '"You\'re the best" = "You are the best", so the apostrophe is required.',
  },

  // ── Singular possession ──
  {
    options: [
      'The dogs bone was buried in the garden.',
      "The dog's bone was buried in the garden.",
      "The dogs' bone was buried in the garden.",
      'The dog,s bone was buried in the garden.',
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One dog owns the bone: add apostrophe + s to the singular noun ("dog\'s").',
  },
  {
    options: [
      'My sisters phone is broken again.',
      "My sister's phone is broken again.",
      "My sisters' phone is broken again.",
      'My sister,s phone is broken again.',
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One sister owns the phone, so use "sister\'s" (apostrophe before the s).',
  },
  {
    options: [
      'The teacher marked Toms essay first.',
      "The teacher marked Tom's essay first.",
      "The teacher marked Toms' essay first.",
      'The teacher marked Tom,s essay first.',
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'The essay belongs to Tom: add apostrophe + s to a singular name ("Tom\'s").',
  },
  {
    options: [
      'We met at the citys main library.',
      "We met at the city's main library.",
      "We met at the citys' main library.",
      "We met at the citie's main library.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One city owns the library: "city\'s". The apostrophe goes before the s.',
  },
  {
    options: [
      'The companys profits rose this year.',
      "The company's profits rose this year.",
      "The companys' profits rose this year.",
      "The companies' profits rose this year.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One company owns the profits, so use "company\'s" with apostrophe + s.',
  },
  {
    options: [
      'She borrowed the doctors pen.',
      "She borrowed the doctor's pen.",
      "She borrowed the doctors' pen.",
      'She borrowed the doctor,s pen.',
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One doctor owns the pen: add apostrophe + s ("doctor\'s").',
  },
  {
    options: [
      'The babys toy fell on the floor.',
      "The baby's toy fell on the floor.",
      "The babys' toy fell on the floor.",
      "The babies' toy fell on the floor.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One baby owns the toy: "baby\'s" (the y stays; just add ’s).',
  },
  {
    options: [
      "James car wouldn't start this morning.",
      "James's car wouldn't start this morning.",
      "James' car wouldnt start this morning.",
      "Jame's car wouldn't start this morning.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'For a singular name ending in s, modern UK style adds ’s: "James\'s car".',
  },

  // ── Plural possession ──
  {
    options: [
      'The dogs bones were scattered everywhere.',
      "The dogs' bones were scattered everywhere.",
      "The dog's bones were scattered everywhere.",
      "The dogs's bones were scattered everywhere.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation: 'Several dogs own the bones: add the apostrophe after the plural s ("dogs\'").',
  },
  {
    options: [
      'The students lockers are by the gym.',
      "The students' lockers are by the gym.",
      "The student's lockers are by the gym.",
      "The students's lockers are by the gym.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation:
      'Many students own the lockers, so the apostrophe goes after the s ("students\'").',
  },
  {
    options: [
      'The girls changing room was repainted.',
      "The girls' changing room was repainted.",
      "The girl's changing room was repainted.",
      "The girls's changing room was repainted.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation: 'The room belongs to the girls (plural): apostrophe after the s ("girls\'").',
  },
  {
    options: [
      'The teachers meeting starts at four.',
      "The teachers' meeting starts at four.",
      "The teacher's meeting starts at four.",
      "The teachers's meeting starts at four.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation: 'The meeting is for many teachers, so use "teachers\'" - apostrophe after the s.',
  },
  {
    options: [
      'Both countries leaders signed the treaty.',
      "Both countries' leaders signed the treaty.",
      "Both country's leaders signed the treaty.",
      "Both countries's leaders signed the treaty.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation:
      'The plural "countries" already ends in s, so just add an apostrophe ("countries\'").',
  },
  {
    options: [
      'The players kit was left in the bus.',
      "The players' kit was left in the bus.",
      "The player's kit was left in the bus.",
      "The players's kit was left in the bus.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation: 'The kit belongs to several players: apostrophe after the plural s ("players\'").',
  },

  // ── Irregular plural possession ──
  {
    options: [
      'The childrens playground was rebuilt.',
      "The children's playground was rebuilt.",
      "The childrens' playground was rebuilt.",
      "The childs' playground was rebuilt.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"Children" is an irregular plural (no s), so add apostrophe + s: "children\'s".',
  },
  {
    options: [
      'The mens department is upstairs.',
      "The men's department is upstairs.",
      "The mens' department is upstairs.",
      "The mens's department is upstairs.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"Men" is an irregular plural, so use apostrophe + s: "men\'s".',
  },
  {
    options: [
      'These are the womens trainers.',
      "These are the women's trainers.",
      "These are the womens' trainers.",
      "These are the womans' trainers.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"Women" is already plural without an s, so add ’s: "women\'s".',
  },
  {
    options: [
      'The peoples voices were finally heard.',
      "The people's voices were finally heard.",
      "The people' voices were finally heard.",
      "The peoples's voices were finally heard.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"People" is an irregular plural, so it takes apostrophe + s: "people\'s".',
  },
  {
    options: [
      'The mice nest was hidden in the wall.',
      "The mice's nest was hidden in the wall.",
      "The mices' nest was hidden in the wall.",
      "The mice' nest was hidden in the wall.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"Mice" is an irregular plural (no s), so add apostrophe + s: "mice\'s".',
  },

  // ── No apostrophe for plurals (the trap) ──
  {
    options: [
      "I bought three apple's at the shop.",
      'I bought three apples at the shop.',
      "I bought three apples' at the shop.",
      'I bought three apple,s at the shop.',
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    explanation:
      'A simple plural never takes an apostrophe. "apples" just means more than one apple.',
  },
  {
    options: [
      "The 1990's were a memorable decade.",
      'The 1990s were a memorable decade.',
      "The 1990s' were a memorable decade.",
      "The 199'0s were a memorable decade.",
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    explanation: 'Plurals of dates need no apostrophe: write "1990s", not "1990\'s".',
  },
  {
    options: [
      "We saw lots of bird's in the park.",
      'We saw lots of birds in the park.',
      "We saw lots of birds' in the park.",
      'We saw lots of bird,s in the park.',
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    explanation: 'Plain plurals take no apostrophe. "birds" is simply more than one bird.',
  },
  {
    options: [
      "The shop sells fresh vegetable's daily.",
      'The shop sells fresh vegetables daily.',
      "The shop sells fresh vegetables' daily.",
      'The shop sells fresh vegetable,s daily.',
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    explanation: 'No apostrophe is used to make a plural. "vegetables" is correct as it is.',
  },
  {
    options: [
      "There are five DVD's on the shelf.",
      'There are five DVDs on the shelf.',
      "There are five DVDs' on the shelf.",
      "There are five DV'Ds on the shelf.",
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    explanation: 'Plurals of initialisms take no apostrophe: write "DVDs", not "DVD\'s".',
  },
  {
    options: [
      'The students worked hard all term.',
      "The students's worked hard all term.",
      "The students' worked hard all term.",
      'The students,s worked hard all term.',
    ],
    answerIndex: 0,
    ruleTested: 'No apostrophe for plurals',
    explanation:
      'Here "students" is just a plural subject (nothing is owned), so no apostrophe is needed.',
  },

  // ── Mixed / discrimination ──
  {
    options: [
      'The cats whiskers twitched as it slept.',
      "The cat's whiskers twitched as it slept.",
      "The cats' whiskers twitched as it slept.",
      "The cats whisker's twitched as it slept.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One cat owns the whiskers, so use "cat\'s" (apostrophe before the s).',
  },
  {
    options: [
      'My parents house is near the river.',
      "My parents' house is near the river.",
      "My parent's house is near the river.",
      "My parents's house is near the river.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation:
      'Two parents share the house, so the apostrophe goes after the plural s ("parents\'").',
  },
  {
    options: [
      "Wheres the report you're writing?",
      "Where's the report you're writing?",
      'Wheres the report your writing?',
      "Where's the report your writing?",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"Where\'s" = "Where is" and "you\'re" = "you are". Both contractions need apostrophes.',
  },
  {
    options: [
      'Its time the school updated its website.',
      "It's time the school updated its website.",
      "Its time the school updated it's website.",
      "It's time the school updated it's website.",
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation:
      'First "It\'s" = "It is" (apostrophe). The second "its" is possessive (no apostrophe).',
  },
  {
    options: [
      'The boys football landed in next doors garden.',
      "The boy's football landed in next door's garden.",
      "The boys' football landed in next doors garden.",
      "The boys football landed in next door's garden.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation:
      'One boy owns the football and one neighbour owns the garden: "boy\'s" and "door\'s".',
  },
  {
    options: [
      'Charles bike has a flat tyre.',
      "Charles's bike has a flat tyre.",
      "Charles' bike has a flat tyre'.",
      "Charle's bike has a flat tyre.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'For a singular name ending in s, UK style usually adds ’s: "Charles\'s bike".',
  },
  {
    options: [
      'The witnesses statements matched exactly.',
      "The witnesses' statements matched exactly.",
      "The witness's statements matched exactly.",
      "The witnesses's statements matched exactly.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation:
      'Several witnesses own the statements; the plural ends in s, so add only an apostrophe ("witnesses\'").',
  },
  {
    options: [
      'Theyre certain that its their turn now.',
      "They're certain that it's their turn now.",
      "They're certain that its their turn now.",
      "Theyre certain that it's their turn now.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"They\'re" = "they are" and "it\'s" = "it is". "Their" stays the same (possessive determiner).',
  },
  {
    options: [
      'The geese pond freezes over in winter.',
      "The geese's pond freezes over in winter.",
      "The gooses' pond freezes over in winter.",
      "The geeses' pond freezes over in winter.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"Geese" is an irregular plural with no s, so add apostrophe + s: "geese\'s".',
  },
]

export const BANK: GameBank<ApostropheQuestion> = {
  slug: 'apostrophe-ace',
  items: QUESTION_BANK,
  // Every question shares one stem, so the right sentence names it. None repeats.
  key: (q) => q.options[q.answerIndex],
  answer: (q) => q.options[q.answerIndex],
  options: (q) => q.options,
  tag: (q) => q.ruleTested,
}
