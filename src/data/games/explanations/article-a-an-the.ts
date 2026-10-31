import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * A, An, The or Nothing?: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/article-a-an-the.ts). Written with AI on 16
 * October 2026 and checked against each question and its options, as the founder
 * decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 183 new questions in three tiers (A1,
 * A2 and B1), among them sentences where the sound and not the first letter
 * decides (an hour, a one-way ticket, an MP, a UK passport), questions where
 * the reason decides (first mention or known, one of many or the only one, no
 * article for general plurals and uncountables), and at the top tier short
 * texts with two or three gaps, answered with a set of articles, nine of them
 * real lines from novels out of UK copyright, checked word for word against
 * src/data/full-texts/. The 16 October explanations were rewritten wherever
 * they named another question's answer. Written with AI and checked against
 * each question, as the founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'She works as ___ nurse at the local clinic.': {
    why: "Say 'nurse' and listen to its first sound. It is 'n', a consonant sound (not a, e, i, o, u). Before a consonant sound we use 'a'. After 'works as' we name one job, so: a nurse.",
    not: {
      an: "'An' is for words that start with a vowel sound. 'Nurse' starts with 'n', so we do not say 'an nurse'.",
      the: "'The' means one special nurse that you both know. Here we only say what her job is, so we use 'a'.",
      '- (no article)':
        "One person's job needs 'a' or 'an' before it. We cannot say 'works as nurse'. Say 'works as a nurse'.",
    },
    more: "After 'works as', 'is' or 'wants to be', we name a job with 'a' or 'an': a teacher, a driver, an optician. The job is one of many, so we do not use 'the'.",
    tip: "When you write about a person's job, check how the job word starts: a nurse, a pilot, an author.",
  },
  'My brother wants to be ___ engineer one day.': {
    why: "'Engineer' starts with the vowel sound 'e', like the start of 'egg'. Before a vowel sound we use 'an'. After 'wants to be' we name a job, so: an engineer.",
    not: {
      a: "'A' is for consonant sounds. 'Engineer' starts with the vowel sound 'e', so 'a engineer' is hard to say. Use 'an'.",
      the: "'The' is for one special engineer that you both know. Here we only name the job your brother wants, so we use 'an'.",
      '- (no article)':
        "One job word needs 'a' or 'an'. We cannot say 'wants to be engineer'. Say 'an engineer'.",
    },
    more: "Jobs that start with a vowel sound take 'an': an author, an optician, an illustrator. Jobs that start with a consonant sound take 'a': a baker, a pilot, a vet.",
    tip: "Say it aloud: 'an engineer'. If 'a engineer' feels hard to say, you need 'an'. That is the reason 'an' exists.",
  },
  'We waited for ___ hour before the train arrived.': {
    why: "We do not say the 'h' in 'hour'. It sounds like 'our', so the word starts with a vowel sound. Before a vowel sound we use 'an': an hour. The sound matters, not the letter.",
    not: {
      a: "'A' is for consonant sounds. The 'h' in 'hour' is silent, so the word starts with a vowel sound. Use 'an'.",
      the: "'The hour' would point to one special hour that you both know. Here we only say how long we waited, so we use 'an'.",
      '- (no article)':
        "One hour needs 'a' or 'an' before it. We cannot say 'waited for hour'. Say 'waited for an hour'.",
    },
    more: "Only a few words begin with a silent 'h', like 'heir'. Most 'h' words are said, so they take 'a': a house, a hat, a hill.",
    tip: "Do not trust the letter a word starts with. Say the word aloud. If you cannot hear the 'h', use 'an'.",
  },
  'He is ___ university student in Manchester.': {
    why: "The word after the gap is 'university'. It begins with the letter u, but we say 'you-niversity'. Its first sound is 'y', a consonant sound. So we use 'a': a university student.",
    not: {
      an: "'An' is for vowel sounds. 'University' starts with a 'you' sound, not a vowel sound, so 'an university' is wrong.",
      the: "'The' would mean one special student that you both know. Here we only say he is a student at a university, so we use 'a'.",
      '- (no article)':
        "When we say what one person is, we need 'a' or 'an'. We cannot say 'He is university student'. Say 'a university student'.",
    },
    more: "Some words start with the letter u but sound like 'you': university, unit, union. They take 'a'. Words that start with 'uh', like 'untidy', take 'an'.",
    tip: "The letter and the sound can be different. Always listen to how the very next word starts before you choose 'a' or 'an'.",
  },
  'There is ___ apple on the kitchen table.': {
    why: "'Apple' starts with the vowel sound 'a', as in 'cat'. Before a vowel sound we use 'an': an apple. 'There is' brings in one new thing, so we use 'an', not 'the'.",
    not: {
      a: "'A' is for consonant sounds. 'Apple' starts with a vowel sound, so we use 'an': 'an apple'.",
      the: "'The' is for something you both already know about. 'There is' tells us about something new, so 'the' does not fit.",
      '- (no article)':
        "We cannot leave out the article before one apple. Say 'an apple'. We say 'apples' with no article only when there are many.",
    },
    more: "The five vowel letters are a, e, i, o and u. Most words that start with them take 'an': an apple, an owl, an eel. Check the sound too, because a few words, like 'unit', do not.",
    tip: "Use 'There is' or 'There are' to introduce new things in a room: There is an apple in the bowl. There are two pears.",
  },
  'Could I have ___ glass of water, please?': {
    why: "'Glass' starts with the consonant sound 'g'. Before a consonant sound we use 'a'. You are asking for one glass of water, so we count the glass: a glass of water.",
    not: {
      an: "'An' is for vowel sounds. 'Glass' starts with 'g', a consonant sound. Say 'a glass'.",
      the: "'The glass' would mean one special glass that you both know. You are asking for any glass, so use 'a'.",
      '- (no article)':
        "'Water' needs no article, but 'glass' is a thing we can count. We need 'a' before it: 'a glass of water'.",
    },
    more: "We can count a glass, a mug or a jug, but we do not count water. So we say 'a glass of water' and 'a mug of cocoa'. The drink itself has no article.",
    tip: 'When you ask for a drink in a cafe, use this pattern: Could I have a (container) of (drink), please?',
  },
  'My grandfather is ___ honest man.': {
    why: "The 'h' in 'honest' is silent. We say 'onest', so the word starts with a vowel sound. Before a vowel sound we use 'an': an honest man.",
    not: {
      a: "'A' is for consonant sounds. 'Honest' has a silent 'h' and starts with the vowel sound 'o'. Use 'an'.",
      the: "'The honest man' would point to one man we both know. Here we only say what kind of man he is, so we use 'an'.",
      '- (no article)':
        "One man needs 'a' or 'an'. We cannot say 'He is honest man'. Say 'an honest man'.",
    },
    more: "The article goes with the very next word. Here that word is 'honest' (silent h), so: an honest man. Without it you would say 'a man'. With 'kind' you would say 'a kind man'.",
    tip: "'A honest person' is a common mistake in learners' writing. Check words with a silent 'h' when you read your writing again.",
  },
  'My cousin owns ___ umbrella shop in the city.': {
    why: "The word after the gap is 'umbrella'. It starts with the vowel sound 'uh', as in 'up'. Before a vowel sound we use 'an', so: an umbrella shop.",
    not: {
      a: "'A' is for consonant sounds. 'Umbrella' starts with the vowel sound 'uh', so we need 'an'.",
      the: "'The' would mean one shop that you both know. Here we are telling you about the shop for the first time, so we use 'an'.",
      '- (no article)':
        "One shop needs 'a' or 'an' before it. We cannot say 'owns umbrella shop'. Say 'an umbrella shop'.",
    },
    more: "Words that start with the letter u can go either way. 'Umbrella' and 'untidy' start with 'uh', so they take 'an'. 'Unit' and 'union' start with 'you', so they take 'a'.",
    tip: "Learn u words in two lists: 'uh' words (an umbrella, an untidy room) and 'you' words (a unit, a union).",
  },
  'That was ___ useful tip for my homework.': {
    why: "'Useful' starts with the sound 'you': the letter u, but a 'y' sound. 'Y' is a consonant sound, so we use 'a': a useful tip. The article goes with the word right after it.",
    not: {
      an: "'An' is for vowel sounds. 'Useful' starts with a 'you' sound, which is a consonant sound, so 'an useful' is wrong.",
      the: "'The' means one special tip that you both know. Here we only say what kind of tip it was, so we say 'a useful tip'.",
      '- (no article)':
        "One tip needs 'a' or 'an' before it. We cannot say 'That was useful tip'. Say 'a useful tip'.",
    },
    more: "Say 'a' before these u words: a useful tip, a usual day, a unit. They all start with 'you'.",
    tip: "Use 'That was a useful ...' to thank someone for help. Notice that 'a useful idea' keeps 'a', because the word after it is 'useful', not 'idea'.",
  },
  'She gave me ___ orange from her bag.': {
    why: "'Orange' starts with the vowel sound 'o', as in 'on'. Before a vowel sound we use 'an': an orange. She gave me one orange, and it is new information, so we do not use 'the'.",
    not: {
      a: "'A' is for consonant sounds. 'Orange' starts with a vowel sound, so we need 'an'.",
      the: "'The orange' would mean one orange that we both know about. We hear about it for the first time, so we say 'an orange'.",
      '- (no article)':
        "One fruit needs 'a' or 'an'. We say 'orange' alone only for the colour or the flavour, not for one fruit. Say 'an orange'.",
    },
    more: "The article goes with the word after it. 'An orange', but 'a sweet orange' or 'a ripe orange'. When you add a describing word, check the sound of that word.",
    tip: "Say the two words together: 'an orange'. When you put a word between them, say it again: 'a juicy orange'.",
  },
  'He drew ___ X on the map to mark the spot.': {
    why: "We say the letter X as 'ex', which starts with the vowel sound 'e'. With letters, we choose 'a' or 'an' by how the letter is said, not by how it looks. So: an X.",
    not: {
      a: "'A' is for consonant sounds. The letter X is said 'ex', which starts with a vowel sound, so we need 'an'.",
      the: "'The X' would mean an X that we both know about. He made a new mark, so we say 'an X'.",
      '- (no article)': "One mark needs 'a' or 'an' before it. We cannot say 'drew X'. Say 'an X'.",
    },
    more: "Letters follow this rule too. Say the letter's name: an F (ef), an X (ex). But 'a B' (bee) and 'a D' (dee) take 'a'.",
    tip: 'For letters and short names, say the letter names aloud to choose: an FBI agent, a BBC film.',
  },
  'We need ___ one-way ticket to London.': {
    why: "We say 'one' as 'wun', so it starts with the consonant sound 'w'. Before a consonant sound we use 'a': a one-way ticket. We look at how the word sounds, not how it is spelled.",
    not: {
      an: "'An' is for vowel sounds. 'One' starts with a 'w' sound, which is a consonant sound, so 'an one-way ticket' is wrong.",
      the: "'The ticket' would mean one special ticket that you both know. You are asking for a ticket, so we use 'a'.",
      '- (no article)':
        "One ticket needs 'a' or 'an' before it. We cannot say 'We need one-way ticket'. Say 'a one-way ticket'.",
    },
    more: "Phrases that begin with 'one' take 'a' too: a one-year course, a one-off event. Only the sound counts, and 'one' starts with a consonant sound.",
    tip: "At a ticket office, say: 'A single to London, please' or 'A one-way ticket to London, please.'",
  },
  'The teacher asked ___ easy question.': {
    why: "'Easy' starts with the vowel sound 'ee'. Before a vowel sound we use 'an': an easy question. The article goes with 'easy', the very next word, not with 'question'.",
    not: {
      a: "'A' is for consonant sounds. 'Easy' starts with a vowel sound, so we need 'an'. Compare 'a difficult question'.",
      the: "'The easy question' would mean one question that you both know. The teacher asked one new question, so we use 'an'.",
      '- (no article)':
        "One question needs 'a' or 'an' before it. We cannot say 'asked easy question'. Say 'an easy question'.",
    },
    more: "A describing word can change the article: 'an easy question', but 'a hard question'. Without a describing word it is 'a question', because 'question' starts with a consonant sound.",
    tip: "When you describe something, choose 'a' or 'an' for the describing word first, then say the noun: an easy test, a difficult test.",
  },
  'I bought ___ new phone yesterday.': {
    why: "'New' starts with the consonant sound 'n', so we use 'a'. The phone is new to the listener, so we say 'a new phone', not 'the new phone'.",
    not: {
      an: "'An' is for vowel sounds. 'New' starts with 'n', a consonant sound. Say 'a new phone'.",
      the: "'The new phone' would mean a phone that you both already know about. You tell someone about it for the first time, so use 'a'.",
      '- (no article)':
        "One phone needs 'a' or 'an' before it. We cannot say 'bought new phone'. We can leave out the article for plurals: 'I bought new shoes'.",
    },
    more: "When you name something new, use 'a' or 'an'. When you mention it again, use 'the': I bought a new phone. The phone is very fast.",
    tip: "Start a story with 'a' or 'an', and then use 'the' when you talk about that thing again.",
  },
  'My aunt is ___ MP.': {
    why: "We say the letters M and P as 'em-pee'. Its first sound is 'e', a vowel sound, so we use 'an': an MP. For short names made of letters, we choose by how their first letter is said.",
    not: {
      a: "'A' is for consonant sounds. We say 'M' as 'em', which starts with a vowel sound, so we need 'an'.",
      the: "'The MP' would mean one MP that we both know about. Here we only say what job your aunt does, so we use 'an'.",
      '- (no article)':
        "One person's job needs 'a' or 'an' before it. We cannot say 'My aunt is MP'. Say 'an MP'.",
    },
    more: 'MP means Member of Parliament. Short names follow the sound of their first letter: an FBI agent, but a BBC presenter.',
    tip: 'Say each letter, and listen to the sound it starts with. Some consonant letters, like F, have names that start with a vowel sound.',
  },
  'It is ___ honour to meet you.': {
    why: "The 'h' in 'honour' is silent. We say 'onour', so the word starts with a vowel sound. Before a vowel sound we use 'an': an honour.",
    not: {
      a: "'A' is for consonant sounds. 'Honour' has a silent 'h' and starts with a vowel sound, so we need 'an'.",
      the: "'It is an honour' is a fixed phrase for a special chance or event. 'The honour' would point to one honour that we both know.",
      '- (no article)':
        "Here 'honour' is a thing we count, so it needs 'an'. We cannot say 'It is honour to meet you'. Say 'an honour'.",
    },
    more: "In British English we write 'honour'. We say 'It is an honour to meet you' in a polite, formal way. A more everyday way is 'Nice to meet you'.",
    tip: "Use 'It is an honour to meet you' in formal situations, such as meeting a head teacher or a guest. In daily life, 'Nice to meet you' is more usual.",
  },
  'He told ___ funny story at dinner.': {
    why: "'Funny' starts with the consonant sound 'f'. Before a consonant sound we use 'a': a funny story. He told one story, and it is new information for the listener.",
    not: {
      an: "'An' is for vowel sounds. 'Funny' starts with 'f', a consonant sound. Say 'a funny story'.",
      the: "'The funny story' would mean a story that you both know about. Here the story is new, so we use 'a'.",
      '- (no article)':
        "One story needs 'a' or 'an' before it. We cannot say 'told funny story'. We can leave out the article for plurals: 'funny stories'.",
    },
    more: "Check the word right after the article. 'A funny story', but 'an interesting story'. The noun does not change, 'story', but the describing word changes the article.",
    tip: "If you are not sure, say both aloud: 'a funny story' and 'an funny story'. The correct one is easier to say.",
  },
  'There was ___ ice cube in my drink.': {
    why: "'Ice' sounds like 'eye', so it starts with a vowel sound. Before a vowel sound we use 'an': an ice cube. 'There was' brings in one new thing, so 'an' fits.",
    not: {
      a: "'A' is for consonant sounds. 'Ice' starts with the vowel sound 'eye', so we need 'an'.",
      the: "'The ice cube' would mean one that we both know. 'There was' introduces something new, so 'the' does not fit.",
      '- (no article)':
        "One ice cube needs 'a' or 'an'. We use 'ice' with no article only for ice in general: 'There was ice in my drink'.",
    },
    more: "We do not count 'ice', so we say 'some ice'. But we can count cubes: an ice cube, two ice cubes. We also say 'an ice cream' and 'an ice rink'.",
    tip: "When you count things, use 'a' or 'an' for one (an ice cube) and a number for more (two ice cubes).",
  },
  'My father is ___ European citizen.': {
    why: "'European' starts with a 'you' sound: the letters 'eu' are said 'yoo'. That is a consonant sound, so we use 'a': a European citizen.",
    not: {
      an: "'An' is for vowel sounds. 'European' starts with 'y', a consonant sound, so 'an European' is wrong.",
      the: "'The European citizen' would mean one special person that we both know. Here we say what kind of citizen your father is, so we use 'a'.",
      '- (no article)':
        "One citizen needs 'a' or 'an' before it. We cannot say 'My father is European citizen'. Say 'a European citizen'.",
    },
    more: "Words that start with 'eu' usually sound like 'you', so they take 'a': a European, a eucalyptus tree. Compare 'an eel', which starts with 'ee'.",
    tip: "A nationality word alone needs no article: 'My father is European.' With a noun after it, you need 'a': 'My father is a European citizen.'",
  },
  'We saw ___ elephant at the zoo.': {
    why: "'Elephant' starts with the vowel sound 'e', as in 'egg'. Before a vowel sound we use 'an': an elephant. This elephant is new to the listener.",
    not: {
      a: "'A' is for consonant sounds. 'Elephant' starts with a vowel sound, so we need 'an'.",
      the: "'The elephant' would mean one elephant that we both know. We tell you about it for the first time, so we use 'an'.",
      '- (no article)':
        "One elephant needs 'a' or 'an' before it. We cannot say 'We saw elephant'. For many, we say 'We saw elephants'.",
    },
    more: "Many animal names start with a vowel sound and take 'an': an elephant, an owl, an eagle. Others take 'a': a lion, a monkey, a zebra.",
    tip: "When you tell a story about a visit to the zoo, introduce each new animal with 'a' or 'an': We saw an elephant and a monkey.",
  },
  'She needs ___ uniform for her new job.': {
    why: "'Uniform' begins with the letter u, but we say 'you-niform'. Its first sound is 'y', a consonant sound. So we use 'a': a uniform.",
    not: {
      an: "'An' is for vowel sounds. 'Uniform' starts with a 'you' sound, so 'an uniform' is wrong. Say 'a uniform'.",
      the: "'The uniform' would mean one that you both know. We are saying what she needs for the first time, so we use 'a'.",
      '- (no article)':
        "One uniform needs 'a' or 'an'. We use 'uniform' alone only for a general idea, such as 'Pupils wear uniform'.",
    },
    more: "Words that start with 'uni' are usually said 'you-ni', so they take 'a': a uniform, a union, a unit. Words that start with 'uh' take 'an': an untidy room.",
    tip: "Add 'a' for one thing: 'I need a uniform'. Use the plural for many: 'We wear uniforms'.",
  },
  'I had ___ egg for breakfast this morning.': {
    why: "'Egg' starts with the vowel sound 'e'. Before a vowel sound we use 'an': an egg. The speaker ate one whole egg, so it is counted. It is new information for the listener, so not 'the'.",
    not: {
      a: "'A' is for consonant sounds. 'Egg' starts with a vowel sound, so we need 'an'.",
      the: "'The egg' would mean one egg that we both know. The speaker mentions the egg for the first time, so we use 'an'.",
      '- (no article)':
        "One whole egg is eaten here, so it is counted: 'an egg'. We use 'egg' alone for egg as a food in general, like 'egg on toast'.",
    },
    more: "You can ask a friend: What did you eat this morning? Answer with 'a' or 'an' for each single item: an egg, a pear, a slice of toast.",
    tip: "The things you ate need 'a' or 'an' when you count them: 'I had an egg and a pear.'",
  },
  'Please close ___ door when you leave.': {
    why: "'The door' means one door that both people know about: the door of this room. When the speaker and the listener can see or know the thing, we use 'the'.",
    not: {
      a: "'A door' means any door. The speaker means one door that you both can see, so we say 'the door'.",
      an: "'An' is for vowel sounds, and 'door' starts with 'd'. The speaker also means one special door, so we use 'the'.",
      '- (no article)':
        "One door needs an article before it. We cannot say 'close door'. Say 'the door'.",
    },
    more: "We use 'the' when the listener knows which thing we mean: the door, the lights, the stairs. In a room, we often say 'the' for things everyone can see.",
    tip: "For polite requests about a known thing, use 'the' and 'please': Please close the door. Could you turn off the radio?",
  },
  '___ sun rises in the east every morning.': {
    why: "There is only one sun, so we use 'the': the sun. We also use 'the' with other one-of-a-kind things, like the world. Here 'the' stands at the start of the sentence.",
    not: {
      a: "'A sun' would mean one of many suns. We talk about our own sun, the only one we know, so we say 'the sun'.",
      an: "'An' is for vowel sounds, and 'sun' starts with 's'. There is only one sun, so we use 'the'.",
      '- (no article)':
        "'Sun rises in the east' is not normal. We use 'the' with one-of-a-kind things, so we say 'The sun rises in the east'.",
    },
    more: "After 'in', directions take 'the' too: in the east, in the north, in the south, in the west.",
    tip: "In a story or description, use 'the' before one-of-a-kind things: The horizon was bright. The world was quiet.",
  },
  'I read ___ book you lent me last week.': {
    why: "The words 'you lent me last week' tell us exactly which book. When the listener knows or can work out which one, we use 'the': the book.",
    not: {
      a: "'A book' means any book. You lent me one book, and the words after 'book' tell us which one, so we use 'the'.",
      an: "'An' is for vowel sounds, and 'book' starts with 'b'. This sentence needs 'the', because we know which book.",
      '- (no article)':
        "One book needs an article. We cannot say 'I read book'. Say 'the book you lent me'.",
    },
    more: "A phrase after the noun can make it exact, so we use 'the': the book you lent me, the man in the blue coat, the shop on the corner.",
    tip: "Say 'the' when you add details that show which one you mean: the film we saw, the bus to town.",
  },
  'She is ___ tallest student in the class.': {
    why: "We use 'the' with superlatives, words like tallest, biggest and fastest. There is only one tallest student in the class, so we say 'the tallest'.",
    not: {
      a: "'A tallest' is wrong. 'Tallest' points to one student above all the others, so we use 'the'.",
      an: "'An' is for vowel sounds, and 'tallest' starts with 't'. A superlative like 'tallest' needs 'the'.",
      '- (no article)':
        "'She is tallest student' is wrong. Before a superlative and its noun, we need 'the': 'the tallest student'.",
    },
    more: "Superlatives end in -est or use 'most': tallest, biggest, most interesting. Before a superlative and a noun, we usually put 'the': the smallest room, the quietest street.",
    tip: "When you compare three or more things, use 'the' and a superlative: She is the tallest in the class.",
  },
  'We watched ___ moon from the garden last night.': {
    why: "There is only one moon in our sky, so we say 'the moon'. We use 'the' for things that are one of a kind and that everyone knows.",
    not: {
      a: "'A moon' would mean one of many moons. We mean the one moon in our sky, so we say 'the moon'.",
      an: "'An' is for vowel sounds, and 'moon' starts with 'm'. We also mean the one moon in our sky, so 'the' is right.",
      '- (no article)':
        "We cannot say 'watched moon' here. We use 'the' with the moon, the sun and the sky, because there is only one of each.",
    },
    more: "With a describing word, we can sometimes use 'a': a bright orange moon. But for the moon itself, we say 'the moon'.",
    tip: "When you describe the night, use 'the' for things everyone can see: The moon was bright and the stars were clear.",
  },
  'Can you pass me ___ salt, please?': {
    why: "At a meal, both people know which salt: the salt that is there. When a thing is present and known to both people, we use 'the'.",
    not: {
      a: "'A salt' is not usual, because we do not count salt. You mean the salt on the table, so we say 'the salt'.",
      an: "'An' is for vowel sounds, and 'salt' starts with 's'. Salt is not counted either, so we do not use 'a' or 'an'.",
      '- (no article)':
        "'Pass me salt' is not the normal way to ask. We say 'the salt' for the salt on the table, or 'some salt'.",
    },
    more: "Things in front of both people at a meal are known to them, so we say 'the': the salt, the pepper, the bread, the menu. For a little of something, you can say 'some': Can I have some salt?",
    tip: "At a meal, use 'the' to ask for something you can both see: Could you pass the pepper, please?",
  },
  'He sailed across ___ Atlantic Ocean last year.': {
    why: "We use 'the' with the names of oceans and seas: the Atlantic Ocean, the Pacific, the Mediterranean Sea. There is only one Atlantic Ocean, so we say 'the'.",
    not: {
      a: "'A' means one of many. There is only one Atlantic Ocean, and ocean names take 'the', so we say 'the Atlantic Ocean'.",
      an: "'Atlantic' starts with a vowel sound, so you may choose 'an'. But there is only one Atlantic Ocean, so we use 'the'.",
      '- (no article)':
        "Names of oceans and seas take 'the'. 'Across Atlantic Ocean' is wrong. Say 'across the Atlantic Ocean'.",
    },
    more: "Rivers, oceans and seas take 'the': the Danube, the Pacific, the Black Sea. Learn each name with its 'the'.",
    tip: "Learn geography names with their 'the': the Atlantic, the Danube, the Andes. The 'the' is part of how we say them.",
  },
  'They live near ___ River Thames.': {
    why: "We use 'the' with the names of rivers: the River Thames, the Amazon, the Danube. There is only one River Thames, so 'the' fits.",
    not: {
      a: "'A River Thames' would mean one of many rivers with that name. There is only one, and river names take 'the'.",
      an: "'An' is for vowel sounds, and 'River' starts with 'r'. River names take 'the'.",
      '- (no article)':
        "We cannot leave out 'the' before a river name. 'Near River Thames' is wrong. Say 'near the River Thames'.",
    },
    more: "Rivers take 'the' (the Thames, the Severn), but towns and cities do not (York, Leeds). 'River' has a capital letter when it is part of a name: the River Thames.",
    tip: "Say 'the' before a river's name, with or without the word 'River': the River Severn or the Severn.",
  },
  'I want to visit ___ United Kingdom next year.': {
    why: "Some country names take 'the': the United Kingdom, the Czech Republic. They contain a word like Kingdom or Republic. We say 'the' before them.",
    not: {
      a: "'A United Kingdom' would mean one of many kingdoms. We mean one country with that name, and the name takes 'the'.",
      an: "'An' is for vowel sounds, but 'United' starts with a 'you' sound. Anyway, this country name takes 'the'.",
      '- (no article)':
        "Most countries take no article (France, Spain), but 'United Kingdom' is a special name. We say 'the United Kingdom'.",
    },
    more: "Most country names take no article: Poland, Peru, Kenya. But a few take 'the', and this is one of them. Learn them as exceptions.",
    tip: "If a country name has 'Kingdom' or 'Republic' in it, put 'the' before it. The short form 'the UK' keeps 'the' too.",
  },
  'She is ___ first person to finish the race.': {
    why: "We use 'the' before ordinal numbers like first, second and last. There is only one first person, so we say 'the first person'.",
    not: {
      a: "'A first person' is wrong here. There can be only one first, so we need 'the'.",
      an: "'An' is for vowel sounds, and 'first' starts with 'f'. Words like 'first' take 'the'.",
      '- (no article)':
        "'She is first person' is wrong. We need 'the' before 'first' and its noun: 'the first person'.",
    },
    more: "'The' also goes with words like 'only' and 'same' when they point to one exact thing.",
    tip: "To talk about a race or a queue, use 'the' with order words: the second, the third.",
  },
  'Look at ___ sky. It is full of stars tonight.': {
    why: "There is only one sky above us, so we say 'the sky'. We use 'the' with one-of-a-kind things that everyone shares.",
    not: {
      a: "'A sky' is used only with a describing word, like 'a clear sky'. Here we mean the sky that we both can see.",
      an: "'An' is for vowel sounds, and 'sky' starts with 's'. We also mean the one sky we can both see, so we use 'the'.",
      '- (no article)':
        "We cannot say 'Look at sky' here. There is only one sky above us, so it needs 'the'.",
    },
    more: "We usually say 'the sky', but 'a' when a describing word adds a type: a clear sky, a dark sky, a blue sky. 'The sky is blue' and 'We saw a blue sky' are both correct.",
    tip: "When you point at something everyone can see, use 'the': Look at the sky. Look at the rainbow.",
  },
  'We went to ___ cinema on Saturday evening.': {
    why: "In British English we say 'go to the cinema', 'go to the theatre' and 'go to the shops'. These are the usual places in a town that everyone knows, so we use 'the'.",
    not: {
      a: "'A cinema' would mean some cinema you have not mentioned. 'Go to the cinema' is the normal way to say you went to see a film.",
      an: "'An' is for vowel sounds. 'Cinema' starts with the sound 's', and we say 'the cinema' as a set phrase anyway.",
      '- (no article)':
        "We say 'go to bed' and 'go to school' with no article, but 'cinema' needs 'the': 'go to the cinema'.",
    },
    more: "Some places take 'the' in everyday phrases: go to the cinema, the theatre, the shops. We mean the usual place of that kind in our town.",
    tip: "Use 'the' to talk about places in your town: I am going to the shop. We met at the station.",
  },
  '___ children love playing in parks.': {
    why: "This sentence is about children in general, not about some children we know. With plural nouns in general, English uses no article: children, birds, books. 'Parks' is general and plural too.",
    not: {
      a: "'A' is only for one thing. 'Children' is plural (more than one child), so 'a children' is wrong.",
      an: "'An' is only for one thing, and 'children' is plural. For children in general, we use no article.",
      the: "'The children' would mean children that we both know. This sentence is about children everywhere, so we use no article.",
    },
    more: "Compare: 'Children love playing' (a general fact about all children) and 'The children are playing' (one group we can see).",
    tip: 'For general facts about people, animals or things, use the plural with no article: Spiders have eight legs. Birds build nests.',
  },
  'I really enjoy ___ music, especially jazz.': {
    why: "'Music' is a general idea here, and we do not count it. For general ideas and things we do not count, English uses no article: music, art, time. 'Jazz' has no article for this reason too.",
    not: {
      a: "'A music' is wrong, because we do not count music. We cannot say 'one music, two musics'. We use no article.",
      an: "'An' is only for single things that we can count. We do not count music, so we use no article.",
      the: "'The music' would mean music that we both know, such as the song playing now. This sentence is about music in general, so we use no article.",
    },
    more: "We say 'I enjoy the music' when we mean music we are hearing at this moment, for example at a party. For music in general, the word stands alone: I like music. I love jazz.",
    tip: 'To talk about your likes, name them with no article: I enjoy music, I like hockey, I love art.',
  },
  '___ Sara is coming to the party tonight.': {
    why: "'Sara' is a person's name. We do not use 'the', 'a' or 'an' before first names. We just say her name: Sara is coming.",
    not: {
      a: "People's names do not take 'a'. We say 'Sara', not 'a Sara'.",
      an: "'An' is for single things with a vowel sound. A person's name needs no article: 'Sara is coming'.",
      the: "'The Sara' sounds wrong. People's names take no 'the'. We say 'Sara is coming to the party'.",
    },
    more: "No article with first names (Sara, Tom) or with a title and name (Mrs Evans, Dr Smith). But we use 'the' with a family name in the plural: the Khans means the Khan family.",
    tip: "Do not put 'the' or 'a' before a person's name when you speak or write: Sara is my friend.",
  },
  'We had ___ breakfast at seven o’clock.': {
    why: "In English we say 'have breakfast' and 'have dinner' with no article. This is a fixed pattern, so we usually do not say 'a breakfast' or 'the breakfast'.",
    not: {
      a: "We say 'a breakfast' only with a describing word, like 'a big breakfast'. A plain 'We had breakfast' needs no article.",
      an: "'An' is for vowel sounds, and 'breakfast' starts with 'b'. For meals, we use no article.",
      the: "'The breakfast' would mean one breakfast that we both know, such as the hotel breakfast. Here we just say what meal we had.",
    },
    more: "With a describing word, a meal can take 'a': We had a quick breakfast. With 'the' we point to a known meal: The breakfast at the hotel was great.",
    tip: "Say 'at seven o'clock' for times. Meals use no article: I have breakfast at seven and dinner at six.",
  },
  'She speaks ___ Arabic and English fluently.': {
    why: "The names of languages take no article: Arabic, English, Polish. We say 'She speaks Arabic', not 'the Arabic'. Here two languages are joined by 'and'.",
    not: {
      a: "A language name is not counted like a thing, so we do not say 'a Arabic'. We say 'Arabic'.",
      an: "'Arabic' starts with a vowel sound, so you may think of 'an'. But language names take no article.",
      the: "'The Arabic and English' sounds wrong. We say 'the Arabic language' with the word 'language', but 'Arabic' alone has no article.",
    },
    more: "Languages take no article when they stand alone: I speak Arabic. But with the word 'language' we use 'the': the Arabic language, the English language.",
    tip: "To say what languages you speak, use: I speak (language) and (language). Do not add 'the'.",
  },
  '___ water is essential for life.': {
    why: 'This sentence is about water in general. We do not count water, and we mean water everywhere, not the water in one cup. For things we do not count, used in general, English uses no article.',
    not: {
      a: "'A water' is wrong, because we do not count water as one thing. We say 'a glass of water' when we count the glass.",
      an: "'An' is for single things we can count. Water is not counted here, so for water in general we use no article.",
      the: "'The water' would mean water that we both know, like the water in this bottle. This sentence says water in general is needed, so we use no article.",
    },
    more: "We use no article for general ideas and materials: Water is life. Gold is precious. When we point to some water we both know, we say 'the water': The water is cold.",
    tip: 'When you write a general fact in science or geography, start with the plain noun: Water boils at 100 degrees Celsius. Oil floats on water.',
  },
  'I live in ___ London with my family.': {
    why: "Most city and town names take no article: London, Paris, Cairo. So we say 'I live in London'. We do not say 'the London'.",
    not: {
      a: "'A London' would mean one of many cities called London. We mean the city itself, and its name takes no article.",
      an: "'An' is for single things with a vowel sound. 'London' is a city name, so it takes no article.",
      the: "'The London' is wrong for the city. City names take no 'the'. Compare 'the River Thames', which does.",
    },
    more: 'City names take no article, and nor do most countries: Paris, Rome, Brazil, Kenya.',
    tip: "Use 'in' with a city or a country: I live in London. She lives in Kenya. No article is needed.",
  },
  '___ dogs are very loyal animals.': {
    why: "This sentence is about dogs in general. For plural nouns used in general, English uses no article: Dogs are loyal. Owls are wise. We do not say 'the dogs' or 'a dogs'.",
    not: {
      a: "'A' is for one thing, and 'dogs' is plural. 'A dogs' is wrong.",
      an: "'An' is for one thing, and 'dogs' is plural. 'An dogs' is wrong. For dogs in general, use no article.",
      the: "'The dogs' would mean dogs that we both know. This sentence says something true about all dogs, so we use no article.",
    },
    more: "We use no article for the whole group: Dogs are loyal. Birds can fly. We use 'the' when we mean dogs we know: The dogs next door are loud.",
    tip: "To describe a group, start with a plural noun and no article, then use 'are': Horses are strong. Mice are small.",
  },
  'He travels to ___ France every summer.': {
    why: "Most country names take no article: France, Brazil, Kenya. We say 'travels to France'. A few exceptions have 'the' as part of their names.",
    not: {
      a: "'A France' is wrong, because there is only one France and its name is not counted. Use no article.",
      an: "'An' is for single things with a vowel sound. 'France' starts with 'f', and country names take no article.",
      the: "'The France' is wrong. Most countries take no 'the'. Only some, such as 'the United Kingdom', take it.",
    },
    more: 'Names of people, cities and most countries take no article: Maya, Paris, France. Learn the few country exceptions by heart.',
    tip: "After 'to', 'in' or 'from', put the country name directly: to France, in Peru, from Poland.",
  },
  'They study ___ mathematics at school.': {
    why: "School subjects take no article: mathematics, art, science, geography. We say 'They study mathematics', because a subject is a general area of study, not one thing we count.",
    not: {
      a: "'A mathematics' is wrong. A school subject has no article, and we do not count 'mathematics'.",
      an: "'An' is for single things we can count. 'Mathematics' is a subject name, so we use no article.",
      the: "We do not say 'the mathematics' for a school subject. A subject that we study takes no article: 'They study mathematics'.",
    },
    more: "In everyday British English we say 'maths': They study maths. Other subjects work like this too: art, geography, science. One lesson can take 'the': the maths lesson.",
    tip: 'To talk about your timetable, name subjects with no article: I have maths and English on Monday.',
  },
  'We play ___ football after class.': {
    why: "Sports and games take no article after 'play': play football, play hockey, play chess. We say 'We play football', not 'the football'.",
    not: {
      a: "'A football' means the ball. For the sport itself, we use no article.",
      an: "'An' is for single things with a vowel sound, and 'football' starts with 'f'. The sport takes no article.",
      the: "'The football' would mean one ball or match that we both know. The sport in general takes no article.",
    },
    more: "Sports and games take no article: play football, hockey, chess, cards. With 'a' it is the thing: 'a football' is the ball you kick.",
    tip: "Use 'play' and the sport, with no article: We play hockey on Fridays.",
  },
  '___ honey is sweeter than sugar.': {
    why: 'This sentence compares two foods in general: honey and sugar. We do not count them, and we mean all honey and all sugar. So both have no article.',
    not: {
      a: "'A honey' is wrong, because we do not count honey. We say 'a jar of honey' when we count the jar.",
      an: "'An' is for single things we can count, and 'honey' starts with the consonant sound 'h'. We do not count honey, so we use no article.",
      the: "'The honey' would mean honey that we both know, like the jar on the table. Here we compare honey and sugar in general, so we use no article.",
    },
    more: "Look again: 'than sugar' also has no article. We compare general things with no article on both sides: Silver is cheaper than gold.",
    tip: 'When you compare materials or foods in general, use no article: Wood is lighter than stone.',
  },
  'My sister teaches ___ history at the college.': {
    why: "School and college subjects take no article: history, science, art. So we say 'teaches history'. 'The college' has 'the' because it is one college that we both know.",
    not: {
      a: "'A history' means one story or record, like 'a history of Rome'. For the school subject, we use no article.",
      an: "'An' is for single things with a vowel sound, and 'history' starts with the consonant sound 'h'. A subject takes no article.",
      the: "'The history' would mean the history of one thing, such as one town. The subject in general takes no article.",
    },
    more: 'Compare: She teaches history (the subject). She wrote a history of Rome (one book about the past).',
    tip: 'To say what someone teaches or studies, use the subject with no article: She teaches history. He studies chemistry.',
  },
  'I usually go to ___ bed before midnight.': {
    why: "'Go to bed' is a fixed phrase with no article. It means going to sleep, not walking to the bed itself.",
    not: {
      a: "'A bed' means one bed as an object, like in a shop. When we mean sleeping, 'go to bed' has no article.",
      an: "'An' is for vowel sounds, and 'bed' starts with 'b'. In the phrase 'go to bed' there is no article at all.",
      the: "'Go to the bed' would mean walking to one bed that you know. For the normal action of going to sleep, we say 'go to bed'.",
    },
    more: "Some places have no article when we use them for their normal purpose: go to bed, go to church. With 'the' we mean the thing or the building itself: Sit on the bed.",
    tip: "Learn 'go to bed' as a whole phrase. When you mean the furniture, use 'the': Your book is on the bed.",
  },
  '___ Mr Khan is our new teacher.': {
    why: "'Mr Khan' is a title and a name. We use no article before a person's title and name: Mr Khan, Mrs Smith, Dr Patel. We say 'Mr Khan is our new teacher'.",
    not: {
      a: "'A Mr Khan' is wrong. A title and name stands alone. We say 'Mr Khan'.",
      an: "'An' is for single things with a vowel sound. A title and name needs no article.",
      the: "'The Mr Khan' is wrong. We use 'the' only in special cases, like 'the Khans' for a family. Here we say 'Mr Khan'.",
    },
    more: "Titles with a name take no article: Mr Brown, Mrs Evans, Dr Patel, Professor Lee. Without a name, the job word needs a word like 'our': our new teacher.",
    tip: "When you introduce a teacher, say 'This is Mr Khan, our new teacher.' You use 'a' or 'an' only for the job word: He is a teacher.",
  },
  '___ rice is grown in many warm countries.': {
    why: "This sentence is about rice in general. We do not count rice (we do not say 'one rice, two rices'). For a food or material in general, English uses no article.",
    not: {
      a: "'A rice' is wrong, because we do not count rice. We say 'a bowl of rice' when we count the bowl.",
      an: "'An' is for single things we can count. We do not count 'rice', so we use no article.",
      the: "'The rice' would mean rice that we both know, such as the rice on your plate. Here we say where rice is grown in general, so we use no article.",
    },
    more: "Many foods and materials are not counted: rice, flour, gold, wood. We use no article for them in general: Gold is valuable. We add 'some' or 'a bag of' for an amount.",
    tip: 'For facts about farming or food, begin with the plain noun: Wheat grows in cool places. Cotton grows in warm, dry places.',
  },
  'She loves ___ flowers, especially roses.': {
    why: "She loves flowers in general, and 'roses' names a kind of flower. Plural nouns used in general take no article: She loves flowers. She likes roses.",
    not: {
      a: "'A' is for one thing, and 'flowers' is plural. 'A flowers' is wrong.",
      an: "'An' is for one thing, and 'flowers' is plural. For flowers in general, use no article.",
      the: "'The flowers' would mean flowers that we both know, like the flowers in her garden. 'Especially roses' shows she means flowers in general.",
    },
    more: "When we love or like a whole group, we use the plural with no article: I love horses. He hates spiders. They like grapes. 'The' appears when we point to some we know: I love the horses next door.",
    tip: "Use 'love', 'like' or 'hate' with a plural noun and no article to talk about your tastes: I love flowers. I hate spiders.",
  },
  'We learn ___ English on Mondays.': {
    why: "Language names take no article: English, Polish, Urdu. So we say 'We learn English'. Here 'English' is the language that we study, not a thing we count.",
    not: {
      a: "'A' is for one counted thing. A language name is not counted, so we do not use 'a' with it.",
      an: "'English' starts with a vowel sound, so 'an' may seem right. But a language name takes no article: 'We learn English'.",
      the: "'The English' means the people of England, not the language. For the language, use no article.",
    },
    more: "'The English' means people from England. 'English' with no article is the language. Nationalities often work like this: the Spanish (people) and Spanish (language).",
    tip: "To talk about learning a language, use: I study English, She speaks Polish, We are learning Spanish. Do not add 'the'.",
  },
  'I saw ___ cat in the street earlier.': {
    why: "This cat is new information: you did not know about it before. When we mention a single thing that is new, we use 'a' or 'an'. 'Cat' starts with the sound 'k', so we use 'a'.",
    not: {
      an: "'An' is for vowel sounds. 'Cat' starts with the sound 'k', a consonant sound, so we say 'a cat'.",
      the: "'The cat' would mean a cat that you both already know. This is the first time you hear about it, so we use 'a'.",
      '- (no article)':
        "One cat needs 'a' or 'an' before it. We cannot say 'I saw cat'. We can leave out the article for plurals: 'I saw cats'.",
    },
    more: "Use 'a' or 'an' for something new, and 'the' when you talk about it again: I saw a cat. The cat was black. 'The' tells the listener: you already know the one I mean.",
    tip: "When you tell a story, introduce each new person or thing with 'a' or 'an'. Use 'the' when you mention it again.",
  },
  'There is ___ school at the end of our road.': {
    why: "'There is' brings in something new: the listener did not know about this school. For one new thing that we can count, we use 'a' or 'an'. 'School' starts with the sound 's', so we say 'a school'.",
    not: {
      an: "'An' is for vowel sounds. 'School' starts with 's', a consonant sound, so we say 'a school'.",
      the: "'There is the school' is not normal here, because 'there is' usually brings in something new. 'The' is for a thing that both people already know.",
      '- (no article)':
        "One school needs 'a' or 'an' before it. We cannot say 'There is school at the end of our road'. Say 'a school'.",
    },
    more: "'There is' and 'There are' bring new things into the conversation, so they usually go with 'a' or 'an', a number, or no article for plurals: There is a school. There are two schools. There is snow on the roof.",
    tip: "To describe a place, start with 'There is a ...' for each new thing: There is a shop, a park and a school on my road.",
  },
  'He bought ___ car. The car is bright red.': {
    why: "The opening sentence brings in a car, so we use 'a'. In the second sentence we talk about that car again, so it becomes 'The car'. First mention: 'a'. Second mention: 'the'.",
    not: {
      an: "'An' is for vowel sounds. 'Car' starts with the sound 'k', a consonant sound, so we say 'a car'.",
      the: "'The car' is for a car that you both know about. The next sentence says 'The car', so the first mention must be 'a'.",
      '- (no article)':
        "One car needs 'a' or 'an' before it. We cannot say 'He bought car'. Say 'a car'. The plural 'cars' would need no article.",
    },
    more: "This article rule is very useful in stories: new thing = 'a' or 'an', same thing again = 'the'. He bought a car. The car is red. The listener learns about the car first, then knows which one you mean.",
    tip: "After you write a story, read it once just to check the articles. When you first mention something, use 'a' or 'an'. After that, use 'the'.",
  },
  'Would you like ___ cup of tea?': {
    why: "We are offering one cup of tea, and any cup will do. For one single, countable, non-specific thing we use 'a'. 'Cup' starts with the sound 'k', so: a cup of tea.",
    not: {
      an: "'An' is for vowel sounds. 'Cup' starts with the consonant sound 'k', so we say 'a cup of tea'.",
      the: "'The cup of tea' would mean one cup that you both know, for example the one on the table. Here we offer a new cup, so use 'a'.",
      '- (no article)':
        "'Tea' has no article, but we can count a cup. We need 'a' before it: 'a cup of tea'.",
    },
    more: "In offers, we use 'a' or 'an' with the container or the slice: Would you like a cup of tea? Would you like a slice of cake?",
    tip: "To offer something politely, use 'Would you like ...?' Choose 'a' or 'an' for one item, or 'some' for an amount: Would you like some tea?",
  },
  'She is ___ doctor at the hospital.': {
    why: "We name a person's job with 'a' or 'an'. 'Doctor' starts with the consonant sound 'd', so we use 'a': a doctor. A hospital has many doctors, and we do not say which one.",
    not: {
      an: "'An' is for vowel sounds. 'Doctor' starts with 'd', a consonant sound, so we say 'a doctor'.",
      the: "'The doctor' would mean the one doctor that you both know. A hospital has many doctors, and we only say what her job is, so use 'a'.",
      '- (no article)':
        "One job word needs 'a' or 'an' before it. We cannot say 'She is doctor'. Say 'a doctor'.",
    },
    more: "A job needs 'a' or 'an', but a title with a name does not: She is a doctor. She is Dr Patel. Compare: He is a teacher. He is Mr Brown.",
    tip: "When someone asks 'What do you do?', answer with 'a' or 'an' and your job: I am a pilot. He is an author.",
  },
  "There is ___ unicorn on my sister's bag.": {
    why: "'Unicorn' starts with the letter u, but we say 'you-nicorn'. Its first sound is 'y', a consonant sound, so we use 'a': a unicorn. 'There is' brings in something new, so 'the' does not fit.",
    not: {
      an: "'An' is for vowel sounds. 'Unicorn' starts with a 'you' sound, which is a consonant sound, so 'an unicorn' is wrong.",
      the: "'There is' tells us about something new, so we use 'a' or 'an', not 'the'. 'There is the unicorn' is not normal English.",
      '- (no article)':
        "One unicorn needs 'a' before it. We cannot say 'There is unicorn on my bag'.",
    },
    more: "Many words that start with 'uni' sound like 'you': unicorn, unit, union. They take 'a'. Listen to the sound, not the letter.",
    tip: "Say the word aloud before you choose. If it starts with a 'you' sound, use 'a'.",
  },
  'There is ___ horse in the field behind our school.': {
    why: "We say the 'h' in 'horse', so the word starts with a consonant sound. Before a consonant sound we use 'a': a horse. 'There is' brings in something new, so we do not use 'the'.",
    not: {
      an: "'An' is for vowel sounds. The 'h' in 'horse' is not silent: we say it. So we use 'a'.",
      the: "'There is' tells the listener about something new. We use 'a' or 'an' with it, not 'the'.",
      '- (no article)':
        "One horse needs 'a' before it. We cannot say 'There is horse in the field'.",
    },
    more: "Most words that start with 'h' take 'a', because we say the 'h': a hat, a hand, a holiday. Only a few words have a silent 'h'.",
    tip: "Put your hand in front of your mouth and say 'horse'. If you feel air for the 'h', use 'a'.",
  },
  'I eat ___ banana every morning.': {
    why: "'Banana' starts with the consonant sound 'b', so we use 'a': a banana. 'Every morning' means a different banana each day, so we do not use 'the'.",
    not: {
      an: "'An' is for vowel sounds. 'Banana' starts with 'b', a consonant sound. Say 'a banana'.",
      the: "'The banana' would mean one banana that we both know. You eat a new one every morning, so use 'a'.",
      '- (no article)':
        "One banana needs 'a' before it. We cannot say 'I eat banana'. For many, say 'I eat bananas'.",
    },
    tip: "To talk about one thing you eat every day, use 'a' or 'an': I eat a pear every morning.",
  },
  'My grandparents have got ___ yellow car.': {
    why: "'Yellow' starts with a 'y' sound, and 'y' is a consonant sound. The article goes with the word after it, so we say 'a yellow car'. They have one car, and this is new information.",
    not: {
      an: "'An' is for vowel sounds. 'Yellow' starts with 'y', a consonant sound. Say 'a yellow car'.",
      the: "'Have got' tells us what someone owns, for the first time. We use 'a' with it, not 'the'.",
      '- (no article)': "One car needs 'a' before it. We cannot say 'They have got yellow car'.",
    },
    more: "The letter y at the start of a word is a consonant sound: a year, a young man, a yoghurt. So these words take 'a'.",
    tip: 'When a colour comes before the noun, choose the article for the colour word: a red bag, a blue pen.',
  },
  'I have ___ dog and two cats.': {
    why: "'Dog' starts with the consonant sound 'd', so we use 'a'. 'A' means one, and here we count: one dog and two cats. The dog is new to the listener.",
    not: {
      an: "'An' is for vowel sounds. 'Dog' starts with 'd', a consonant sound. Say 'a dog'.",
      the: "'The dog' would mean a dog that the listener already knows. Here you tell them what pets you have, so use 'a'.",
      '- (no article)':
        "One dog needs 'a' before it. We cannot say 'I have dog'. With two, we say 'two cats'.",
    },
    tip: "To talk about your pets, use 'a' or 'an' for one and a number for more: I have a rabbit and two fish.",
  },
  'There is ___ big apple tree in our garden.': {
    why: "The article goes with the very next word, and here that word is 'big'. 'Big' starts with the consonant sound 'b', so we say 'a big apple tree', even though 'apple' starts with a vowel.",
    not: {
      an: "'An' would be right before 'apple', but 'big' comes first. 'Big' starts with 'b', a consonant sound, so we need 'a'.",
      the: "'There is' brings in something new, so we use 'a' or 'an', not 'the'.",
      '- (no article)': "One tree needs 'a' before it. We cannot say 'There is big apple tree'.",
    },
    more: 'A describing word between the article and the noun can change the article: an onion, but a red onion; a coat, but an ugly coat.',
    tip: 'Always look at the word right after the gap, not at the noun after it.',
  },
  'There is ___ ant on your arm.': {
    why: "'Ant' starts with the vowel sound 'a', as in 'cat'. Before a vowel sound we use 'an': an ant. 'There is' tells us about something new, so 'the' does not fit.",
    not: {
      a: "'A' is for consonant sounds. 'Ant' starts with a vowel sound, so we say 'an ant'.",
      the: "'There is' brings in something new. We use 'a' or 'an' with it, not 'the'.",
      '- (no article)': "One ant needs 'an' before it. We cannot say 'There is ant on your arm'.",
    },
    more: "'An' makes two vowel sounds easier to say together. Try it: 'a ant' is hard to say, but 'an ant' is easy.",
    tip: "Small animals that start with a vowel sound take 'an': an owl, an eel, an earwig.",
  },
  "I have ___ idea. Let's play a game outside.": {
    why: "'Idea' starts with the vowel sound 'eye'. Before a vowel sound we use 'an': an idea. 'I have an idea' is the usual way to say that a plan has just come to you.",
    not: {
      a: "'A' is for consonant sounds. 'Idea' starts with a vowel sound, so we say 'an idea'.",
      the: "'The idea' would mean a plan that we have already talked about. Here the idea is new, so we use 'an'.",
      '- (no article)':
        "'Idea' is a thing we count, so one idea needs 'an'. We cannot say 'I have idea'.",
    },
    tip: "Use 'I have an idea' to suggest a plan in class or with friends. Then say the plan: 'Let's ...'.",
  },
  'My aunt lives on ___ island in Scotland.': {
    why: "We say 'island' as 'eye-land': the 's' is silent and its first sound is 'eye', a vowel sound. So we use 'an': an island. Scotland has many islands, and we do not say which one.",
    not: {
      a: "'A' is for consonant sounds. 'Island' starts with the vowel sound 'eye', so we say 'an island'.",
      the: "'The island' would mean one island that we both know. Scotland has many, and this is new information, so use 'an'.",
      '- (no article)': "One island needs 'an' before it. We cannot say 'She lives on island'.",
    },
    more: "Some words have a silent letter. In 'island' the 's' is silent. Listen to the sound you hear first, and choose 'a' or 'an' by that.",
    tip: "Use 'on' with islands: She lives on an island. We had a holiday on a Greek island.",
  },
  'I have ___ uncle in Canada.': {
    why: "'Uncle' starts with the vowel sound 'uh', as in 'up'. Before a vowel sound we use 'an': an uncle. You are telling someone about him as new information.",
    not: {
      a: "'A' is for consonant sounds. 'Uncle' starts with 'uh', a vowel sound, so we say 'an uncle'.",
      the: "'The uncle' would mean one uncle that we both know. You are telling the listener something new, so use 'an'.",
      '- (no article)': "One uncle needs 'an' before it. We cannot say 'I have uncle in Canada'.",
    },
    more: "The letter u has two sounds at the start of words. 'Uh' words take 'an': an uncle, an ugly coat. 'You' words take 'a': a unit, a union.",
    tip: "Say the word aloud. If it starts like 'up', use 'an'. If it starts like 'you', use 'a'.",
  },
  'There is ___ old castle on the hill.': {
    why: "The word after the gap is 'old', which starts with the vowel sound 'o'. Before a vowel sound we use 'an': an old castle. 'There is' brings in something new, so not 'the'.",
    not: {
      a: "'Castle' starts with a consonant, but 'old' comes first. The article goes with 'old', a vowel sound, so we need 'an'.",
      the: "'There is' tells us about something new. We use 'a' or 'an' with it, not 'the'.",
      '- (no article)':
        "One castle needs 'an' before it. We cannot say 'There is old castle on the hill'.",
    },
    more: 'Look at the word after the gap: a castle, but an old castle; an owl, but a white owl.',
    tip: 'When you add a describing word, say the article and that word together: an old town, a quiet town.',
  },
  'My sister is ___ artist. She paints every day.': {
    why: "We name a job with 'a' or 'an'. 'Artist' starts with the vowel sound 'a', so we use 'an': an artist. There are many artists, and she is one of them.",
    not: {
      a: "'A' is for consonant sounds. 'Artist' starts with a vowel sound, so we say 'an artist'.",
      the: "'The artist' would mean one artist that we both know, like the artist of a picture. Here we only say what she does.",
      '- (no article)':
        "A job needs 'a' or 'an' before it in English. We cannot say 'She is artist'.",
    },
    more: "Some languages say 'She is artist' with no article, but English needs 'a' or 'an' before a job: a pilot, an author, a cook.",
    tip: "To say what people do, use 'is a' or 'is an' and the job: My mum is a pilot. My dad is an author.",
  },
  'Put the butter in ___ fridge, please.': {
    why: "A home has one fridge, and both people know which one: the fridge in this home. When the speaker and the listener know the thing, we use 'the'.",
    not: {
      a: "'A fridge' means any fridge. The speaker means the fridge in this home, which you both know, so use 'the'.",
      an: "'An' is for vowel sounds, and 'fridge' starts with 'f'. The speaker means one fridge you both know, so use 'the'.",
      '- (no article)':
        "One fridge needs an article. We cannot say 'Put it in fridge'. Say 'in the fridge'.",
    },
    more: "In a house we say 'the' for things everyone there knows: the fridge, the oven, the bathroom, the garden.",
    tip: "Use 'the' for things in your home when you ask for help: Can you open the oven? Is the bathroom free?",
  },
  'Please turn off ___ light when you go to sleep.': {
    why: "The speaker means the light in this room, which both people can see. When we both know which thing, we use 'the': turn off the light.",
    not: {
      a: "'A light' means any light. The speaker means the one in this room, so we say 'the light'.",
      an: "'An' is for vowel sounds, and 'light' starts with 'l'. The speaker means one light you both know, so use 'the'.",
      '- (no article)': "One light needs an article here. We cannot say 'turn off light'.",
    },
    tip: "Learn these phrases with 'the': turn on the light, turn off the light, turn up the heating.",
  },
  'What is ___ name of your school?': {
    why: "Your school has one name, and 'of your school' tells us exactly which name. When a phrase after the noun shows which one, we use 'the': the name of your school.",
    not: {
      a: "'A name' would mean one of many names. Your school has only one name, so we say 'the name'.",
      an: "'An' is for vowel sounds, and 'name' starts with 'n'. 'Of your school' shows which name, so use 'the'.",
      '- (no article)': "'Name' here needs 'the'. We cannot say 'What is name of your school?'.",
    },
    more: "'The ... of ...' is a common pattern: the name of the road, the colour of the walls, the price of the ticket.",
    tip: "To ask about something that has only one, use 'What is the ... of ...?': What is the name of your town?",
  },
  'December is ___ last month of the year.': {
    why: "There is only one last month of the year, so we say 'the last month'. We use 'the' with words like last and next when they point to one exact thing.",
    not: {
      a: "'A last month' is wrong. Only one month can be the last, so we use 'the'.",
      an: "'An' is for vowel sounds, and 'last' starts with 'l'. Only one month is the last, so use 'the'.",
      '- (no article)': "We cannot say 'December is last month of the year'. Say 'the last month'.",
    },
    more: "Be careful: 'last month' with no article means the month before now: I was ill last month. 'The last month of the year' is December.",
    tip: "Use 'the second' and 'the last' to talk about order: Z is the last letter of the alphabet.",
  },
  'Mount Everest is ___ highest mountain in the world.': {
    why: "'Highest' is a superlative: it means more high than all the others. Only one mountain can be the highest, so we use 'the': the highest mountain.",
    not: {
      a: "'A highest mountain' is wrong. Only one mountain is the highest, so we say 'the'.",
      an: "'An' is for vowel sounds, and 'highest' starts with the sound 'h'. A superlative needs 'the'.",
      '- (no article)':
        "We cannot say 'is highest mountain in the world'. A superlative before a noun needs 'the'.",
    },
    more: "'Mount Everest' itself has no article, because most single mountains do not: Snowdon, Kilimanjaro. But 'the highest mountain' needs 'the'.",
    tip: "Superlatives end in -est or use 'most', and they almost always take 'the': the longest river, the coldest city.",
  },
  'We swim in ___ sea every summer.': {
    why: "In English we say 'the sea' for the sea as a place we go to: swim in the sea, go to the sea. We say 'the', not 'a', and we do not leave it out.",
    not: {
      a: "'A sea' would mean one of many seas, like the Red Sea. For swimming at the coast, we say 'in the sea'.",
      an: "'An' is for vowel sounds, and 'sea' starts with 's'. We say 'swim in the sea'.",
      '- (no article)': "We cannot say 'swim in sea'. The phrase is 'in the sea'.",
    },
    more: "These places take 'the' when we mean the kind of place, not one we name: the sea, the beach, the mountains, the coast.",
    tip: "Use 'the' to talk about holidays by the coast: We went to the beach. The waves were big.",
  },
  'Who is ___ girl in the red coat?': {
    why: "'In the red coat' tells us exactly which girl we mean. When words after the noun show which one, we use 'the': the girl in the red coat.",
    not: {
      a: "'A girl' means any girl. 'In the red coat' points to one girl we can both see, so use 'the'.",
      an: "'An' is for vowel sounds, and 'girl' starts with 'g'. We mean one girl we can see, so use 'the'.",
      '- (no article)':
        "One girl needs an article here. We cannot say 'Who is girl in the red coat?'.",
    },
    more: "Phrases with 'in', 'with' or 'on' can show which one: the man with the camera, the house on the corner, the boy in the blue shirt.",
    tip: "To ask about a person you can see, use 'Who is the ... in ...?': Who is the boy in the green hat?",
  },
  'The teacher is writing on ___ board.': {
    why: "In a classroom there is one board, and everyone knows which one. When everyone there knows the thing, we use 'the': on the board.",
    not: {
      a: "'A board' means any board. Everyone in the room knows this one, so we say 'the board'.",
      an: "'An' is for vowel sounds, and 'board' starts with 'b'. We mean the board in the classroom, so use 'the'.",
      '- (no article)':
        "We cannot say 'writing on board'. The board is one thing we count, so it needs 'the'.",
    },
    tip: "In class, use 'the' for things everyone can see: Look at the board. Open the cupboard.",
  },
  'My bedroom is at ___ top of the house.': {
    why: "A house has only one top, and 'of the house' shows which. We say 'at the top of' and 'at the bottom of' with 'the': at the top of the house.",
    not: {
      a: "'A top' would mean one of many tops. A house has only one top, so we say 'the top'.",
      an: "'An' is for vowel sounds, and 'top' starts with 't'. The phrase is 'at the top of'.",
      '- (no article)':
        "We cannot say 'at top of the house'. The phrase needs 'the': 'at the top of'.",
    },
    tip: 'Learn these as whole phrases: at the top of the page, at the bottom of the stairs, at the back of the class.',
  },
  'Mum is in ___ kitchen. She is making a cake.': {
    why: "Your home has one kitchen, and everyone in the family knows which one. For rooms in your own home, we use 'the': in the kitchen, in the garden.",
    not: {
      a: "'A kitchen' means any kitchen. You mean the kitchen in your home, which the listener knows, so use 'the'.",
      an: "'An' is for vowel sounds, and 'kitchen' starts with 'k'. You mean the kitchen at home, so use 'the'.",
      '- (no article)':
        "We cannot say 'Mum is in kitchen'. One room needs an article: 'in the kitchen'.",
    },
    tip: "Say where people are in the house with 'in the': in the bathroom, in the garden, in the hall.",
  },
  'Can you close ___ curtains, please?': {
    why: "The speaker means the curtains in this room, which both people can see. When we both know which things, we use 'the', and 'the' works for plurals too: the curtains.",
    not: {
      a: "'A' is for one thing, and 'curtains' is plural. We cannot say 'a curtains'.",
      an: "'An' is for one thing with a vowel sound. 'Curtains' is plural and starts with 'k', so use 'the'.",
      '- (no article)':
        "'Close curtains' is not right here. The speaker means the curtains in this room, so we say 'the curtains'.",
    },
    tip: "'The' goes with one thing or many: the chair, the chairs, the plate, the plates.",
  },
  'Look at ___ clock. We are late.': {
    why: "The speaker points to one clock that both people can see. When we both know which thing, we use 'the': look at the clock.",
    not: {
      a: "'A clock' means any clock. The speaker means the clock in the room, so we say 'the clock'.",
      an: "'An' is for vowel sounds, and 'clock' starts with 'k'. The speaker means one clock you both see, so use 'the'.",
      '- (no article)': "We cannot say 'Look at clock'. One clock needs an article: 'the clock'.",
    },
    tip: "Use 'Look at the ...' to point to something you both can see: Look at the time. Look at that bird.",
  },
  'May I use ___ toilet, please?': {
    why: "In a house or an office, the toilet is a place everyone knows. So we say 'the toilet'. 'May I ...?' is a polite way to ask.",
    not: {
      a: "'A toilet' means any toilet. In a house or school you mean the one there, so use 'the'.",
      an: "'An' is for vowel sounds, and 'toilet' starts with 't'. You mean the toilet in this building, so use 'the'.",
      '- (no article)': "We cannot say 'May I use toilet?'. Say 'May I use the toilet, please?'.",
    },
    more: "In British English people also say 'the loo'. In a restaurant you can ask: 'Where are the toilets, please?'",
    tip: "Learn this polite question for class: 'May I go to the toilet, please?'",
  },
  'Our cat is asleep on ___ sofa.': {
    why: "The speaker means the sofa in their home, which the family knows. For furniture and rooms in your own home we use 'the': on the sofa, in the hall.",
    not: {
      a: "'A sofa' means any sofa. The speaker means the sofa at home, which the family knows, so use 'the'.",
      an: "'An' is for vowel sounds, and 'sofa' starts with 's'. The speaker means their own sofa, so use 'the'.",
      '- (no article)': "We cannot say 'asleep on sofa'. One sofa needs an article: 'on the sofa'.",
    },
    tip: "Use 'the' for things in your home: My coat is on the chair. The keys are in the drawer.",
  },
  'I like ___ apples, but I do not like pears.': {
    why: "This is about apples and pears in general, not some apples we can see. For plural nouns in general, English uses no article. 'Pears' has no article for this reason too.",
    not: {
      a: "'A' is for one thing, and 'apples' is plural. 'A apples' is wrong.",
      an: "'An' is for one thing. 'Apples' is plural, so 'an apples' is wrong. For apples in general, use no article.",
      the: "'The apples' would mean some apples we both know, like apples in a bowl. Here we mean all apples, like 'pears' after it.",
    },
    tip: 'To say what food you like, use a plural with no article: I like grapes. I do not like onions.',
  },
  'My grandfather drinks ___ milk every day.': {
    why: "We do not count milk: we cannot say 'one milk, two milks'. For things we do not count, used in general, we use no article: He drinks milk every day.",
    not: {
      a: "'A milk' is not usual, because we do not count milk. Say 'a carton of milk' to count it.",
      an: "'An' is for single things we can count. Milk is not counted, so we use no article.",
      the: "'The milk' would mean some milk we both know, like the milk in a jug on the table. Here we mean milk in general.",
    },
    more: 'Drinks like milk and juice are not counted. To count them, use a container: a carton of milk, two cartons of juice.',
    tip: 'To talk about drinks in general, use no article: I drink juice every morning.',
  },
  '___ Ali is my best friend.': {
    why: "'Ali' is a person's name. We do not put 'a', 'an' or 'the' before a person's first name. We just say his name: Ali is my best friend.",
    not: {
      a: "Names of people do not take 'a'. We say 'Ali', not 'a Ali'.",
      an: "'Ali' starts with a vowel sound, but names take no article. We just say 'Ali'.",
      the: "'The Ali' is wrong. People's first names take no 'the'.",
    },
    tip: 'Start a sentence about a friend with their name, with no article: Maya is my neighbour.',
  },
  'We are going to ___ Spain on holiday.': {
    why: "Most country names take no article: Spain, Italy, Peru. So we say 'going to Spain'. We do not say 'the Spain'.",
    not: {
      a: "'A Spain' is wrong. There is only one Spain, and country names take no article.",
      an: "'An' is for single things with a vowel sound, and 'Spain' starts with 's'. Country names take no article.",
      the: "'The Spain' is wrong. Most countries take no 'the'.",
    },
    tip: "Use 'go to' with a country and no article: We go to Italy every summer.",
  },
  'My mother is from ___ Egypt.': {
    why: "'Egypt' is a country's name, and most country names take no article. So we say 'from Egypt', with nothing before it.",
    not: {
      a: "'A Egypt' is wrong. A country name takes no article.",
      an: "'Egypt' starts with a vowel sound, so 'an' may seem right. But country names take no article: 'from Egypt'.",
      the: "'The Egypt' is wrong. Most country names take no 'the'.",
    },
    more: "A few country names take 'the', but most, like Egypt, Peru and India, take none. Learn the few that do as exceptions.",
    tip: "Say where someone is from with 'from' and the country: She is from India. He is from Peru.",
  },
  'Do you speak ___ French?': {
    why: "'French' here is a language, and the names of languages take no article. We say 'speak French', 'learn Polish', 'study German'.",
    not: {
      a: "A language is not counted like a thing, so we do not say 'a French'. Say 'speak French'.",
      an: "'An' is for single things with a vowel sound. A language name takes no article.",
      the: "'The French' means the people of France, not the language. For the language, use no article.",
    },
    tip: 'Ask about languages with no article: Do you speak Polish? Can you read Urdu?',
  },
  'I play ___ tennis on Saturdays.': {
    why: "'Tennis' is a sport. After 'play', the names of sports and games take no article: play tennis, play chess, play cricket.",
    not: {
      a: "'A tennis' is wrong. The sport is not one thing we count, so it takes no article.",
      an: "'An' is for single things with a vowel sound. Sports take no article.",
      the: "'The tennis' would mean one tennis match that we both know. For the sport in general, use no article.",
    },
    tip: "Use 'play' and the sport with no article: I play cricket. She plays chess.",
  },
  "We have ___ lunch at one o'clock.": {
    why: "Meals take no article when we say when we eat them: have lunch, have dinner. So we say 'We have lunch at one o'clock'.",
    not: {
      a: "We say 'a lunch' only with a describing word, like 'a quick lunch'. Plain 'have lunch' needs no article.",
      an: "'An' is for vowel sounds, and 'lunch' starts with 'l'. Meals take no article here.",
      the: "'The lunch' would mean one lunch that we both know, like the lunch at a party. Here we only say when we eat.",
    },
    tip: "Use 'have' with meals and no article: I have dinner at seven.",
  },
  'My little brother walks to ___ school every day.': {
    why: "We say 'go to school' and 'walk to school' with no article when we mean going there to learn. He is a pupil, so it is 'walks to school'.",
    not: {
      a: "'A school' would mean one school of many, as a building. For a pupil going to lessons, we use no article.",
      an: "'An' is for vowel sounds, and 'school' starts with 's'. In 'walk to school' there is no article.",
      the: "'The school' means the building, for example when a parent visits it. A pupil going to lessons walks to school.",
    },
    more: "Some places take no article when we use them for their main purpose: school for pupils and church for prayer. A visitor goes to the building, so a visitor uses 'the'.",
    tip: 'Say how you get to lessons with no article: I walk to school. I go to school by bike.',
  },
  'She is at ___ home today because she is ill.': {
    why: "'At home' is a fixed phrase with no article. It means in your own house. We say 'at home', 'go home' and 'stay at home'.",
    not: {
      a: "'A home' means a house or a place to live, like 'a home for old people'. 'At home' has no article.",
      an: "'An' is for vowel sounds, and 'home' starts with 'h'. The phrase 'at home' has no article.",
      the: "'At the home' is not normal here. The phrase for your own house is 'at home'.",
    },
    tip: "Do not say 'go to home'. Say 'go home', with no 'to' and no article.",
  },
  'I cannot sleep at ___ night when it is hot.': {
    why: "'At night' is a fixed phrase with no article. It means during the dark hours. We do not say 'at the night'.",
    not: {
      a: "We do not say 'at a night' here. The fixed phrase is 'at night'.",
      an: "'An' is for vowel sounds, and 'night' starts with 'n'. The phrase 'at night' has no article.",
      the: "'At the night' is a common mistake. The phrase is 'at night', with no article.",
    },
    more: "Times of day are tricky: in the afternoon and in the evening take 'the', but at night does not. Learn them as whole phrases.",
    tip: "Use 'at night' for the dark part of the day: Owls hunt at night.",
  },
  'I never drink ___ coffee. It keeps me awake.': {
    why: 'This is about coffee in general, not one cup of it. We do not count coffee as a drink in general, so we use no article: I never drink coffee.',
    not: {
      a: "'A coffee' means one cup of coffee, as in a café. Here we mean coffee in general, with 'never', so we use no article.",
      an: "'An' is for vowel sounds, and 'coffee' starts with 'k'. For coffee in general, use no article.",
      the: "'The coffee' would mean some coffee we both know, like the coffee in this pot. Here we mean all coffee.",
    },
    more: "In a café, 'a coffee' means one cup: Can I have a coffee, please? But for the drink in general, we use no article.",
    tip: "With 'never', 'always' or 'often', talk about food and drink in general with no article: I never eat sweets.",
  },
  '___ chocolate is my favourite food.': {
    why: 'This is about chocolate in general. We do not count chocolate here, so we use no article: Chocolate is my favourite food.',
    not: {
      a: "'A chocolate' means one small sweet from a box. Here we mean chocolate as a food in general.",
      an: "'An' is for vowel sounds, and 'chocolate' starts with 'ch'. For chocolate in general, use no article.",
      the: "'The chocolate' would mean some chocolate we both know, like the bar on the table. Here we mean chocolate in general.",
    },
    tip: 'To name your favourite food, use no article for foods we do not count: Pasta is my favourite food.',
  },
  'We are going to see ___ Grandma on Sunday.': {
    why: "Here 'Grandma' is used as her name, with a capital G. Like a name, it takes no article. We say 'see Grandma', just as we say 'see Maya'.",
    not: {
      a: "'A Grandma' is wrong here. 'Grandma' is used like a name, so it takes no article.",
      an: "'An' is for vowel sounds, and 'Grandma' starts with 'g'. Used as a name, it takes no article.",
      the: "'The Grandma' is wrong. When we use a family word as a name, we use no article.",
    },
    more: "We can say 'Grandma' like a name, or 'my grandma' with 'my'. Both are fine, but we do not say 'the Grandma'.",
    tip: 'Use family words as names with a capital letter: Dad is in the garden. Mum is cooking.',
  },
  'There is ___ hourly bus from here to the airport.': {
    why: "We do not say the 'h' in 'hourly'. It sounds like 'our-ly', so it starts with a vowel sound, and we use 'an': an hourly bus. 'There is' brings in something new, so not 'the'.",
    not: {
      a: "'A' is for consonant sounds. The 'h' in 'hourly' is silent, so the word starts with a vowel sound. Use 'an'.",
      the: "'There is' tells us about something new, so we use 'a' or 'an', not 'the'.",
      '- (no article)': "One bus needs an article. We cannot say 'There is hourly bus'.",
    },
    more: "'Hourly' means once every hour. It keeps the silent 'h' of the word it comes from, so it takes 'an'.",
    tip: "When you see 'h', say the word aloud. If you hear the 'h', use 'a'. If you do not, use 'an'.",
  },
  'The speed limit on this road is 30 miles ___ hour.': {
    why: "Here 'an' means 'in each': 30 miles in each hour. The 'h' in 'hour' is silent, so the word starts with a vowel sound and takes 'an'.",
    not: {
      a: "'A' is for consonant sounds. We do not say the 'h' in 'hour', so we need 'an'.",
      the: "We do not say 'miles the hour'. To mean 'in each', English uses 'a' or 'an'.",
      '- (no article)': "'30 miles hour' is wrong. We need 'an' to mean 'in each hour'.",
    },
    more: "'A' and 'an' can mean 'in each' or 'for each': twice a year, 50p a bag. On British road signs, speed limits are in miles, not kilometres.",
    tip: "To give a price or a speed for each one, use 'a' or 'an': £3 a ticket, 20p a sweet.",
  },
  'I found ___ euro coin in my pocket.': {
    why: "'Euro' starts with the sound 'you', and 'y' is a consonant sound. So we use 'a': a euro coin. The letters 'eu' look like vowels, but the sound decides.",
    not: {
      an: "'An' is for vowel sounds. 'Euro' starts with a 'you' sound, which is a consonant sound, so 'an euro' is wrong.",
      the: "'The euro coin' would mean a coin we both know about. You found it and are telling someone for the first time, so use 'a'.",
      '- (no article)': "One coin needs 'a' before it. We cannot say 'I found euro coin'.",
    },
    more: "Words that start with 'eu' usually sound like 'you': euro, eucalyptus. They take 'a'. (A eucalyptus is a tree.)",
    tip: "Do not trust the letter a word starts with. Say 'a euro' aloud: it sounds right because 'euro' starts like 'you'.",
  },
  'It was ___ unique chance to see a whale.': {
    why: "'Unique' starts with the sound 'you', a consonant sound, so we use 'a': a unique chance. 'Unique' means that there is nothing else like it.",
    not: {
      an: "'An' is for vowel sounds. 'Unique' starts with a 'you' sound, which is a consonant sound, so 'an unique' is wrong.",
      the: "'The unique chance' would point to one chance we both know. Here we only describe the chance, so use 'a'.",
      '- (no article)': "One chance needs 'a' before it. We cannot say 'It was unique chance'.",
    },
    tip: "Words like 'unique' and 'unit' start with 'you' and take 'a'. Say them aloud to check.",
  },
  'The driver made ___ U-turn in the middle of the road.': {
    why: "We say the letter U as 'you'. That starts with a consonant sound, so we use 'a': a U-turn. With letters, the sound of the letter's name decides.",
    not: {
      an: "'An' is for vowel sounds. The letter U is said 'you', a consonant sound, so 'an U-turn' is wrong.",
      the: "'The U-turn' would mean one turn we already know about. Here we hear about it for the first time, so use 'a'.",
      '- (no article)': "One U-turn needs 'a' before it. We cannot say 'The driver made U-turn'.",
    },
    more: 'A U-turn takes a driver back the way they came, in the shape of the letter U.',
    tip: "Say the letter's name aloud: U is 'you', so 'a U-turn'; F is 'ef', so 'an F'.",
  },
  'This is ___ UK passport, not an Irish one.': {
    why: "We say 'UK' as 'you-kay'. Its first sound is 'y', a consonant sound, so we use 'a': a UK passport. For short names made of letters, the sound of their first letter decides.",
    not: {
      an: "'An' is for vowel sounds. The letter U is said 'you', which starts with a consonant sound, so we say 'a UK passport'.",
      the: "Here we only say what kind of passport this is, a UK one and not an Irish one, so we use 'a'.",
      '- (no article)': "One passport needs 'a' before it. We cannot say 'This is UK passport'.",
    },
    more: "The article goes with the word after it. Here 'UK' comes before 'passport', so the sound of 'UK' decides: a UK passport, a UK address.",
    tip: 'Before a short name made of letters, say its first letter aloud: a UK address, an EU country.',
  },
  'We went on ___ one-day trip to York.': {
    why: "We say 'one' as 'wun', so it starts with the consonant sound 'w'. Before a consonant sound we use 'a': a one-day trip. The letter o does not decide: the sound does.",
    not: {
      an: "'An' is for vowel sounds. 'One' starts with a 'w' sound, which is a consonant sound, so 'an one-day trip' is wrong.",
      the: "'The one-day trip' would mean a trip we both know about. We are telling someone about it for the first time, so use 'a'.",
      '- (no article)': "One trip needs 'a' before it. We cannot say 'We went on one-day trip'.",
    },
    more: "Words that start with 'one' take 'a': a one-off event, a one-year course. Compare 'an only child', where 'only' starts with a vowel sound.",
    tip: "Say it aloud: 'a wun-day trip'. If the word starts with a 'w' sound, use 'a'.",
  },
  'Have you got ___ one-pound coin for the trolley?': {
    why: "'One' starts with a 'w' sound, as in 'won'. That is a consonant sound, so we use 'a': a one-pound coin. Any coin of that kind will do, so not 'the'.",
    not: {
      an: "'An' is for vowel sounds. 'One' starts with a 'w' sound, so 'an one-pound coin' is wrong.",
      the: "'The one-pound coin' would mean one coin we both know about. The speaker wants any coin of that kind, so use 'a'.",
      '- (no article)':
        "One coin needs 'a' before it. We cannot say 'Have you got one-pound coin?'",
    },
    more: 'In many British supermarkets you put a coin into a trolley to use it, and you get it back when you return the trolley.',
    tip: "To ask to borrow something, use 'Have you got a ...?': Have you got a ruler?",
  },
  'You need ___ username and a password to log in.': {
    why: "'Username' starts with the sound 'you', a consonant sound, so we use 'a': a username. The letter u does not decide; the sound does.",
    not: {
      an: "'An' is for vowel sounds. 'Username' starts with a 'you' sound, so 'an username' is wrong.",
      the: "'The username' would mean one we both know. The website asks for any username you choose, so use 'a', like 'a password'.",
      '- (no article)': "One username needs 'a' before it, just like 'a password' after it.",
    },
    tip: "Read the sentence aloud. 'A username' and 'a password' both sound right, because both words start with consonant sounds.",
  },
  'My little brother thinks he saw ___ UFO.': {
    why: "We say 'UFO' as 'you-eff-oh'. Its first sound is 'y', a consonant sound, so we use 'a': a UFO. He saw something new, so we do not use 'the'.",
    not: {
      an: "'An' is for vowel sounds. The letter U is said 'you', a consonant sound, so 'an UFO' is wrong.",
      the: "'The UFO' would mean one we already know about. This is new information, so use 'a'.",
      '- (no article)': "One UFO needs 'a' before it. We cannot say 'he saw UFO'.",
    },
    more: 'UFO means unidentified flying object: something flying that nobody can name.',
    tip: 'For short names made of letters, say their first letter aloud, then choose: a UFO, an FBI agent.',
  },
  'There is ___ huge elephant at the safari park.': {
    why: "The article goes with the word after it, 'huge'. We say the 'h' in 'huge', so it starts with a consonant sound, and we use 'a': a huge elephant. 'Elephant' starts with a vowel, but it comes later.",
    not: {
      an: "'An' would fit before 'elephant' alone, but 'huge' comes first. 'Huge' starts with a consonant sound, so we need 'a'.",
      the: "'There is' brings in something new, so we use 'a' or 'an', not 'the'.",
      '- (no article)': "One elephant needs 'a' before it. We cannot say 'There is huge elephant'.",
    },
    tip: 'When you add a describing word, check the article again: an owl, but a huge owl.',
  },
  'We go swimming twice ___ week.': {
    why: "Here 'a' means 'in each': twice in each week. 'Week' starts with the consonant sound 'w', so we use 'a': twice a week.",
    not: {
      an: "'An' is for vowel sounds, and 'week' starts with 'w'. Say 'twice a week'.",
      the: "'Twice the week' is wrong. To say how often, English uses 'a' or 'an'.",
      '- (no article)': "'Twice week' is wrong. We need 'a' to mean 'in each week'.",
    },
    more: "To say how often, use 'once', 'twice' or 'three times' and 'a' or 'an': three times a year, once a fortnight.",
    tip: "Answer 'How often do you ...?' like this: I go running three times a week.",
  },
  'Take this medicine three times ___ day.': {
    why: "Here 'a' means 'in each': three times in each day. 'Day' starts with the consonant sound 'd', so we use 'a': three times a day.",
    not: {
      an: "'An' is for vowel sounds, and 'day' starts with 'd'. Say 'three times a day'.",
      the: "'Three times the day' is wrong. To say how often, English uses 'a' or 'an'.",
      '- (no article)': "'Three times day' is wrong. We need 'a' to mean 'in each day'.",
    },
    tip: 'Doctors and chemists use this pattern: one tablet twice a day, after food.',
  },
  'I visit my grandparents once ___ month.': {
    why: "Here 'a' means 'in each': once in each month. 'Month' starts with the consonant sound 'm', so we use 'a': once a month.",
    not: {
      an: "'An' is for vowel sounds, and 'month' starts with 'm'. Say 'once a month'.",
      the: "'Once the month' is wrong. To say how often, English uses 'a' or 'an'.",
      '- (no article)': "'Once month' is wrong. We need 'a' to mean 'in each month'.",
    },
    tip: "To say how often you see someone, use 'once' or 'twice' and 'a': I see my cousins once a year.",
  },
  'There were ___ lot of people at the concert.': {
    why: "'A lot of' is a fixed phrase that means 'many' or 'much'. It always has 'a': a lot of people, a lot of noise.",
    not: {
      an: "'An' is for vowel sounds, and 'lot' starts with 'l'. The phrase is 'a lot of'.",
      the: "'The lot of people' is wrong here. The fixed phrase for 'many' is 'a lot of'.",
      '- (no article)': "'There were lot of people' is wrong. The phrase always needs 'a'.",
    },
    tip: "Use 'a lot of' with plurals and with things we do not count: a lot of friends, a lot of time.",
  },
  'She has ___ unusual name.': {
    why: "'Unusual' starts with the sound 'uh', as in 'up'. That is a vowel sound, so we use 'an': an unusual name. It does not start with a 'you' sound.",
    not: {
      a: "'A' is for consonant sounds. 'Unusual' starts with 'uh', a vowel sound, so 'a unusual' is wrong.",
      the: "'The unusual name' would point to a name we both know. Here we only describe her name, so use 'an'.",
      '- (no article)': "One name needs 'an' before it. We cannot say 'She has unusual name'.",
    },
    more: "Words that start with 'un-' meaning 'not' usually start with 'uh': unusual, unhappy, unkind. They take 'an'. But words like 'unit' start with 'you' and take 'a'.",
    tip: 'Do not choose by the letter u. Say the word: an unhappy face, a unit of work.',
  },
  'Her mother is ___ NHS doctor.': {
    why: "We say 'NHS' as 'en-aitch-ess'. Its first sound is 'e', a vowel sound, so we use 'an': an NHS doctor. The letter N is a consonant, but its name starts with a vowel sound.",
    not: {
      a: "'A' is for consonant sounds. We say N as 'en', which starts with a vowel sound, so we need 'an'.",
      the: "'The NHS doctor' would mean one doctor we both know. Here we only say what her job is, so use 'an'.",
      '- (no article)': "A job needs an article. We cannot say 'Her mother is NHS doctor'.",
    },
    more: "The NHS is the National Health Service, which gives free health care in the UK. One person who works for it is 'an NHS nurse' or 'an NHS dentist'.",
    tip: "Say a short name's first letter aloud: an NHS nurse, a BBC film.",
  },
  'Her uncle works as ___ RSPCA inspector.': {
    why: "We say 'RSPCA' letter by letter, and its first letter, R, is said 'ar'. That starts with a vowel sound, so we use 'an': an RSPCA inspector.",
    not: {
      a: "'A' is for consonant sounds. R is said 'ar', which starts with a vowel sound, so we need 'an'.",
      the: "'The RSPCA inspector' would mean one inspector we both know. Here we only say what his job is, so use 'an'.",
      '- (no article)': "A job needs an article. We cannot say 'He works as RSPCA inspector'.",
    },
    more: 'The RSPCA is a British charity that looks after animals. Its inspectors help animals that are hurt or badly treated.',
    tip: "Short names said letter by letter follow how their first letter is said: R is 'ar', so 'an RSPCA'.",
  },
  'The sailors sent ___ SOS message.': {
    why: "We say 'SOS' letter by letter: 'ess-oh-ess'. Its first sound is 'e', a vowel sound, so we use 'an': an SOS message.",
    not: {
      a: "'A' is for consonant sounds. S is said 'ess', which starts with a vowel sound, so we need 'an'.",
      the: "'The SOS message' would mean one we both know about. Here we hear about it for the first time, so use 'an'.",
      '- (no article)':
        "One message needs an article. We cannot say 'The sailors sent SOS message'.",
    },
    more: 'SOS is a call for help that ships and planes send when they are in danger.',
    tip: "Some letters are consonants, but their names start with a vowel sound. Say the letter's name, then choose.",
  },
  'Our school has ___ L-shaped playground.': {
    why: "We say the letter L as 'el', which starts with the vowel sound 'e'. 'L-shaped' means shaped like the letter L, and the article goes with how that letter is said: an L-shaped playground.",
    not: {
      a: "'A' is for consonant sounds. L is a consonant letter, but we say it 'el', which starts with a vowel sound, so we need 'an'.",
      the: "'The L-shaped playground' would mean one we both know. 'Has' tells us about it for the first time, so we use 'an'.",
      '- (no article)':
        "One playground needs an article. We cannot say 'Our school has L-shaped playground'.",
    },
    more: "Things named after the shape of a letter follow how the letter is said: a T-shirt, because T is 'tee', but an L-shaped room, because L is 'el'.",
    tip: "Before a letter, say its name aloud. If it starts with a vowel sound, as 'el' does, use 'an'.",
  },
  'My cousin has ___ 11-year-old son.': {
    why: "We read '11' as 'eleven', which starts with the vowel sound 'e'. So we use 'an': an 11-year-old son. With numbers, the way we say them decides.",
    not: {
      a: "'A' is for consonant sounds. '11' is said 'eleven', which starts with a vowel sound, so we need 'an'.",
      the: "'Has' tells us about her family for the first time, so we use 'a' or 'an', not 'the'.",
      '- (no article)': "One son needs an article. We cannot say 'My cousin has 11-year-old son'.",
    },
    more: "Numbers that start with a vowel sound take 'an': an 8-year-old girl. Numbers that start with a consonant sound take 'a': a 7-year-old boy.",
    tip: 'Say the number in words in your head, then choose: an eleven-year-old, a twelve-year-old.',
  },
  'My aunt owns ___ 18th-century cottage.': {
    why: "We read '18th' as 'eighteenth', which starts with the vowel sound 'ay'. So we use 'an': an 18th-century cottage. It is a cottage built between 1700 and 1799.",
    not: {
      a: "'A' is for consonant sounds. '18th' is said 'eighteenth', which starts with a vowel sound, so we need 'an'.",
      the: "'Owns' tells us about her house for the first time, so we use 'a' or 'an', not 'the'.",
      '- (no article)':
        "One cottage needs an article. We cannot say 'She owns 18th-century cottage'.",
    },
    more: 'Centuries are named one number above their years: the 1700s are the 18th century. So the 18th century runs from 1700 to 1799.',
    tip: 'Read a number aloud in words before you choose: an 18th-century house, a 19th-century house.',
  },
  'There will be ___ 80th birthday party for my grandmother on Saturday.': {
    why: "We read '80th' as 'eightieth', which starts with the vowel sound 'ay'. So we use 'an': an 80th birthday party. 'There will be' brings in something new, so not 'the'.",
    not: {
      a: "'A' is for consonant sounds. '80th' is said 'eightieth', which starts with a vowel sound, so we need 'an'.",
      the: "'There will be' brings in something new, so we use 'a' or 'an', not 'the'.",
      '- (no article)':
        "One party needs an article. We cannot say 'There will be 80th birthday party'.",
    },
    tip: 'Say the number aloud to choose: a 50th birthday, but an 80th birthday.',
  },
  'My cousin dreams of being ___ F1 driver.': {
    why: "We say 'F1' as 'ef-one'. Its first sound is 'e', a vowel sound, so we use 'an': an F1 driver. F1 is short for Formula One, a kind of motor racing.",
    not: {
      a: "'A' is for consonant sounds. F is said 'ef', which starts with a vowel sound, so we need 'an'.",
      the: "'The F1 driver' would mean one driver we both know. Here we only say what job he dreams of, so use 'an'.",
      '- (no article)': "A job needs an article. We cannot say 'He dreams of being F1 driver'.",
    },
    tip: "Some consonant letters have names that start with a vowel sound. F is 'ef', so we write 'an F1 car'.",
  },
  'She has ___ expensive watch.': {
    why: "The word after the gap is 'expensive', which starts with the vowel sound 'e'. So we use 'an': an expensive watch. 'Has' tells us something new about her, so not 'the'.",
    not: {
      a: "'Watch' starts with a consonant, but 'expensive' comes first. The article goes with 'expensive', a vowel sound, so we need 'an'.",
      the: "'Has' tells us about her watch for the first time, so we use 'a' or 'an', not 'the'.",
      '- (no article)': "One watch needs an article. We cannot say 'She has expensive watch'.",
    },
    more: 'A describing word can change the article: a watch, but an expensive watch; an onion, but a sweet onion.',
    tip: 'Check the article each time you add a describing word: a cheap watch, an ugly watch.',
  },
  'There is ___ empty seat next to me.': {
    why: "The word after the gap is 'empty', which starts with the vowel sound 'e'. So we use 'an': an empty seat. 'There is' brings in something new, so not 'the'.",
    not: {
      a: "'Seat' starts with a consonant, but 'empty' comes first. The article goes with 'empty', so we need 'an'.",
      the: "'There is' tells us about something new. We use 'a' or 'an' with it, not 'the'.",
      '- (no article)':
        "One seat needs an article. We cannot say 'There is empty seat next to me'.",
    },
    tip: "To offer a seat, say: 'There is an empty seat here. Would you like to sit down?'",
  },
  'She has ___ amazing voice.': {
    why: "The word after the gap is 'amazing', which starts with a vowel sound. So we use 'an': an amazing voice. We are describing her voice, not pointing to one we both know.",
    not: {
      a: "'Voice' starts with a consonant, but 'amazing' comes first. The article goes with 'amazing', a vowel sound, so we need 'an'.",
      the: "'The amazing voice' would point to a voice we both know. Here we only describe her voice, so use 'an'.",
      '- (no article)': "Here 'voice' needs an article. We cannot say 'She has amazing voice'.",
    },
    tip: "To praise someone, use 'You have a lovely ...' or 'She has an amazing ...'.",
  },
  'My uncle is ___ electrician.': {
    why: "We name a job with 'a' or 'an'. 'Electrician' starts with the vowel sound 'e', so we use 'an': an electrician. An electrician fixes the electric wires and lights in buildings.",
    not: {
      a: "'A' is for consonant sounds. 'Electrician' starts with a vowel sound, so we say 'an electrician'.",
      the: "'The electrician' would mean one electrician we both know. Here we only say what his job is.",
      '- (no article)':
        "A job needs 'a' or 'an' in English. We cannot say 'My uncle is electrician'.",
    },
    tip: 'Practise jobs that start with a vowel sound: an author, an optician, an illustrator.',
  },
  'He wants to be ___ actor when he is older.': {
    why: "We name a job with 'a' or 'an'. 'Actor' starts with the vowel sound 'a', so we use 'an': an actor. There are many actors, and he wants to be one of them.",
    not: {
      a: "'A' is for consonant sounds. 'Actor' starts with a vowel sound, so we say 'an actor'.",
      the: "'The actor' would mean one actor we both know, such as the actor in a film. Here we name a job, so use 'an'.",
      '- (no article)': "A job needs 'a' or 'an'. We cannot say 'He wants to be actor'.",
    },
    tip: "Use 'wants to be a/an ...' to talk about future jobs: She wants to be a vet. I want to be an author.",
  },
  'I ordered a pizza and a salad. ___ pizza was cold.': {
    why: "The opening sentence brings in a pizza with 'a'. Now we talk about that pizza again, so the listener knows which one: 'The pizza was cold'. First mention 'a', second mention 'the'.",
    not: {
      a: "'A pizza' would sound like a new pizza. We already know about this one from the first sentence, so use 'the'.",
      an: "'An' is for vowel sounds, and 'pizza' starts with 'p'. This is the same pizza again, so use 'the'.",
      '- (no article)':
        "One pizza needs an article. We cannot say 'Pizza was cold' about this one.",
    },
    tip: "When you write about a meal, bring in each dish with 'a' or 'an', then use 'the': I had a burger and a milkshake. The burger was great.",
  },
  'Tom has a cat and a parrot. ___ parrot can say hello.': {
    why: "The parrot was brought in with 'a' in the opening sentence. Now it is mentioned again, so we know which parrot: Tom's. A second mention takes 'the': The parrot can say hello.",
    not: {
      a: "'A parrot' would sound like a different parrot. We mean Tom's parrot from the first sentence, so use 'the'.",
      an: "'An' is for vowel sounds, and 'parrot' starts with 'p'. This is the same parrot again, so use 'the'.",
      '- (no article)': "One parrot needs an article. We cannot say 'Parrot can say hello' here.",
    },
    tip: "In your writing, use 'the' when you go back to something you have already named.",
  },
  'Where is ___ remote control? I want to watch a film.': {
    why: "In a house there is usually one remote control, and everyone knows which one. So the speaker says 'the remote control'. 'The' is for a thing both people know.",
    not: {
      a: "'A remote control' means any one. The speaker means the one in this house, so use 'the'.",
      an: "'An' is for vowel sounds, and 'remote' starts with 'r'. The speaker means the family's one, so use 'the'.",
      '- (no article)':
        "One remote control needs an article. We cannot say 'Where is remote control?'",
    },
    tip: "Use 'Where is the ...?' for things you all know in your house: Where is the phone charger?",
  },
  'Can you feed ___ dog before you go out?': {
    why: "The family has one dog, and both people know which one. So we say 'the dog'. We use 'the' for a pet or a thing that both people know.",
    not: {
      a: "'A dog' means any dog. The speaker means the family's own dog, so use 'the'.",
      an: "'An' is for vowel sounds, and 'dog' starts with 'd'. The speaker means one dog you both know, so use 'the'.",
      '- (no article)': "One dog needs an article. We cannot say 'Can you feed dog?'",
    },
    tip: "In your house, use 'the' for your own pets and things: Can you walk the dog? Can you water the plants?",
  },
  "I'll meet you outside ___ library at four o'clock.": {
    why: "Both people know which library: the one in their town or school. When we say where to meet, we use 'the' for a place we both know: outside the library.",
    not: {
      a: "'A library' means any library. You cannot meet someone at any library, so we say 'the library'.",
      an: "'An' is for vowel sounds, and 'library' starts with 'l'. The meeting place is one you both know, so use 'the'.",
      '- (no article)': "One library needs an article. We cannot say 'outside library'.",
    },
    tip: "To arrange to meet, use 'the' with a place you both know: I will meet you at the bus station.",
  },
  'Did you lock ___ front door?': {
    why: "A house has one front door, and both people know which one. So we say 'the front door'.",
    not: {
      a: "'A front door' means any front door. The speaker means the one of your house, so use 'the'.",
      an: "'An' is for vowel sounds, and 'front' starts with 'f'. The speaker means your own front door, so use 'the'.",
      '- (no article)': "One door needs an article. We cannot say 'Did you lock front door?'",
    },
    tip: "Use 'the' for the parts of your home: the front door, the back garden, the stairs.",
  },
  'I found the answer on ___ internet.': {
    why: "There is only one internet, and everyone knows it. So we say 'the internet'. We use 'on' with it: on the internet.",
    not: {
      a: "'A' would mean one of many. There is only one internet, so we use 'the'.",
      an: "'An' would mean one of many, and there is only one internet. We say 'on the internet'.",
      '- (no article)': "'On internet' is a common mistake. Say 'on the internet'.",
    },
    tip: 'Learn the whole phrase: I read it on the internet. I looked it up on the internet.',
  },
  'What is ___ weather like in Leeds today?': {
    why: "We say 'the weather' for the weather in one place at one time. 'What is the weather like?' is the usual question. We never say 'a weather', because we do not count weather.",
    not: {
      a: "We do not count weather, so we do not say 'a weather'. The question is 'What is the weather like?'",
      an: "'An' is for vowel sounds, and 'weather' starts with 'w'. We also do not count weather. Use 'the'.",
      '- (no article)': "'What is weather like?' is a common mistake. We say 'the weather'.",
    },
    more: "We do not count weather, so it never takes 'a'. A describing word can come before it with no article: We had bad weather last week.",
    tip: "Ask 'What is the weather like?' and answer: It is sunny. It is raining.",
  },
  'Someone took my bike, so I called ___ police.': {
    why: "We always say 'the police' for the police in a country or town: there is one service, and everyone knows it. So: I called the police.",
    not: {
      a: "We do not say 'a police'. 'Police' means the whole service, so we say 'the police'.",
      an: "'An' is for vowel sounds, and 'police' starts with 'p'. We say 'the police'.",
      '- (no article)': "'I called police' is not British English. We say 'I called the police'.",
    },
    more: "'Police' is plural: The police are coming. For one person, say 'a police officer'.",
    tip: 'In an emergency in the UK, you call 999 and ask for the police, the fire service or an ambulance.',
  },
  'Did you watch ___ news last night?': {
    why: "In British English we say 'watch the news' for the news programme on television. So we use 'the': Did you watch the news?",
    not: {
      a: "We do not say 'a news'. 'News' is not counted. For the programme, we say 'the news'.",
      an: "'An' is for vowel sounds, and 'news' starts with 'n'. We say 'watch the news'.",
      '- (no article)': "'Watch news' is not the usual phrase. We say 'watch the news'.",
    },
    more: "'News' looks plural, but it takes 'is': The news is on at six. For one item of it, say 'a news story'.",
    tip: 'Learn these phrases: watch the news, read the news, hear the news.',
  },
  'My grandparents live in ___ countryside.': {
    why: "We say 'the countryside' for land outside towns, with fields and farms. It is a fixed phrase: live in the countryside, walk in the countryside.",
    not: {
      a: "We do not say 'a countryside'. The phrase is 'in the countryside'.",
      an: "'An' is for vowel sounds, and 'countryside' starts with 'k'. We say 'the countryside'.",
      '- (no article)': "'Live in countryside' is a common mistake. Say 'in the countryside'.",
    },
    tip: "Compare: I live in a city. They live in the countryside. 'City' can take 'a', but 'countryside' takes 'the'.",
  },
  '___ water in this bottle is very cold.': {
    why: "'In this bottle' tells us exactly which water: the water in this bottle, not water in general. When words after the noun show which one, we use 'the'.",
    not: {
      a: "We do not count water, so we do not say 'a water'. This is particular water, so use 'the'.",
      an: "'An' is for vowel sounds, and 'water' starts with 'w'. We also do not count water. Use 'the'.",
      '- (no article)':
        "'Water in this bottle is cold' is not right. 'In this bottle' points to particular water, so we need 'the'.",
    },
    more: "No article for water in general, and 'the' for particular water: Plants need water. The water in the pond is green.",
    tip: "If you can add 'in this', 'on that' or 'that you ...' after the noun, use 'the': the juice in my glass.",
  },
  'This is ___ best day of my life.': {
    why: "'Best' is a superlative: better than all the others. Only one day can be the best, so we use 'the': the best day of my life.",
    not: {
      a: "'A best day' is wrong. Only one day can be the best, so we use 'the'.",
      an: "'An' is for vowel sounds, and 'best' starts with 'b'. A superlative needs 'the'.",
      '- (no article)':
        "'This is best day' is wrong. Before a superlative and a noun we need 'the'.",
    },
    tip: "Use 'the best ... I have ever ...' to say something was better than all the others: It was the best book I have ever read.",
  },
  'She is ___ only person who knows the answer.': {
    why: "'Only' here means there is just one: no one else knows the answer. When we say there is just one, we use 'the': the only person.",
    not: {
      a: "'A only person' is wrong. 'Only' shows there is just one person, so we use 'the'.",
      an: "'An only person' is wrong here. Because there is just one person who knows, we use 'the'.",
      '- (no article)': "'She is only person' is wrong. We need 'the' before 'only' and the noun.",
    },
    more: "'An only child' is a special phrase: a child with no brothers or sisters. Otherwise, 'only' before a noun takes 'the': the only way, the only time.",
    tip: "Use 'the only ... who ...' to say no one else does something: He is the only boy who can juggle.",
  },
  '___ Nile is the longest river in Africa.': {
    why: "The names of rivers take 'the': the Nile, the Amazon, the Severn. So we say 'The Nile is the longest river in Africa'.",
    not: {
      a: "'A Nile' is wrong. There is only one Nile, and river names take 'the'.",
      an: "'An' is for vowel sounds, and 'Nile' starts with 'n'. River names take 'the'.",
      '- (no article)': "River names need 'the'. We cannot say 'Nile is the longest river'.",
    },
    more: "Rivers, seas and oceans take 'the': the Nile, the Red Sea, the Pacific. Learn the 'the' as part of each name.",
    tip: "When you learn a river's name, learn its 'the' too: the Danube, the Ganges.",
  },
  'We went skiing in ___ Alps last winter.': {
    why: "Groups of mountains, called mountain ranges, take 'the': the Alps, the Andes, the Pennines. So we say 'in the Alps'.",
    not: {
      a: "'A Alps' is wrong. 'Alps' is plural and is a name, so we use 'the'.",
      an: "'An' is for one thing, and 'Alps' is plural. Mountain ranges take 'the'.",
      '- (no article)': "'In Alps' is wrong. Mountain ranges need 'the': 'in the Alps'.",
    },
    more: "Compare: the Alps (many mountains), but Mont Blanc (one mountain). A range takes 'the'; one mountain usually does not.",
    tip: "If a place name is plural, it usually takes 'the': the Andes, the Hebrides.",
  },
  'My cousin lives in ___ Netherlands.': {
    why: "Most country names take no article, but a few take 'the'. 'Netherlands' is one: its name is plural, so we say 'the Netherlands'.",
    not: {
      a: "'A Netherlands' is wrong. It is the name of one country, and the name takes 'the'.",
      an: "'An' is for vowel sounds, and 'Netherlands' starts with 'n'. This country name takes 'the'.",
      '- (no article)':
        "Most countries take no article, but this one does. We say 'in the Netherlands'.",
    },
    more: "Country names that are plural, like the Netherlands and the Philippines, take 'the'. So do some names with a word like 'Republic' in them.",
    tip: "Learn the few countries with 'the' as a short list, and use no article with the rest.",
  },
  'We took photos of ___ Eiffel Tower.': {
    why: "Many famous buildings and towers take 'the': the Eiffel Tower, the Taj Mahal, the Shard. So we say 'photos of the Eiffel Tower'.",
    not: {
      a: "'A' would mean one of many. There is only one Eiffel Tower, and its name takes 'the'.",
      an: "'Eiffel' starts with a vowel sound, so 'an' may seem right. But there is only one, and the name takes 'the'.",
      '- (no article)': "'Photos of Eiffel Tower' is wrong. The name needs 'the'.",
    },
    more: "Building names are tricky. Many take 'the' (the Shard, the Taj Mahal), but some do not: Edinburgh Castle, Windsor Castle.",
    tip: "When you learn a famous place, learn whether it has 'the': the Shard, but Edinburgh Castle.",
  },
  'We must all help to protect ___ environment.': {
    why: "'The environment' means the natural world around us: air, water, land, plants and animals. There is one, and we all share it, so we say 'the environment'.",
    not: {
      a: "'A' is for consonant sounds, and 'environment' starts with a vowel. We also mean the one natural world we share, so we say 'the environment'.",
      an: "'An environment' means one kind of place, as in 'a calm environment for study'. For the natural world, we say 'the environment'.",
      '- (no article)': "'Protect environment' is wrong. We say 'protect the environment'.",
    },
    tip: "Use 'the environment' in writing about nature: Plastic bags are bad for the environment.",
  },
  'We sailed on ___ Lake Windermere.': {
    why: "Names of single lakes usually take no article: Lake Windermere, Lake Geneva. So we say 'on Lake Windermere'.",
    not: {
      a: "'A Lake Windermere' is wrong. There is only one, and lake names take no article.",
      an: "'An' is for single things with a vowel sound, and lake names take no article.",
      the: "'The Lake Windermere' is wrong. When 'Lake' comes before the name, we use no article.",
    },
    more: 'Lake Windermere is the largest natural lake in England. It is in Cumbria, in the north-west of England.',
    tip: "If a lake's name begins with 'Lake', use no article: Lake Victoria, Lake Como.",
  },
  'We had a picnic in ___ Hyde Park.': {
    why: "Most park names take no article: Hyde Park, Central Park. So we say 'in Hyde Park', with nothing before it.",
    not: {
      a: "'A Hyde Park' is wrong. There is only one, and park names take no article.",
      an: "'An' is for single things with a vowel sound. A park's name takes no article.",
      the: "'The Hyde Park' is wrong. Park names usually take no 'the'.",
    },
    more: "Compare: 'the park' (a park we both know, with no name) and 'Hyde Park' (a park's name, with no article).",
    tip: "Use no article with the names of parks and streets: We walked through Regent's Park.",
  },
  'She went shopping on ___ Oxford Street.': {
    why: "Most street names take no article: Oxford Street, Baker Street, Park Road. So we say 'on Oxford Street'.",
    not: {
      a: "'A Oxford Street' is wrong. A street name takes no article.",
      an: "'Oxford' starts with a vowel sound, so 'an' may seem right. But street names take no article.",
      the: "'The Oxford Street' is wrong. Most street names take no 'the'.",
    },
    more: "A few streets in the capital do take 'the', such as the Strand and the Mall. Most streets, roads and avenues do not.",
    tip: "Use 'on' with streets and no article: My friend lives on Station Road.",
  },
  'Our plane lands at ___ Heathrow at six.': {
    why: "Names of airports usually take no article: Heathrow, Gatwick, Stansted. So we say 'lands at Heathrow'.",
    not: {
      a: "'A Heathrow' is wrong. There is only one, and airport names take no article.",
      an: "'An' is for vowel sounds, and 'Heathrow' starts with 'h'. Airport names take no article.",
      the: "'The Heathrow' is wrong. Airport names usually take no 'the'.",
    },
    more: "Heathrow is London's biggest airport. We say 'at Heathrow' or 'at Heathrow Airport', both with no article.",
    tip: "Use 'at' with airports and no article: We met at Gatwick.",
  },
  'Cardiff is the capital of ___ Wales.': {
    why: "'Wales' is a country's name, and most country names take no article. So we say 'the capital of Wales'. 'The capital' has 'the' because each country has one capital.",
    not: {
      a: "'A Wales' is wrong. There is only one Wales, and its name takes no article.",
      an: "'An' is for vowel sounds, and 'Wales' starts with 'w'. A country name takes no article.",
      the: "'The Wales' is wrong. Wales takes no 'the', like Scotland and England.",
    },
    more: "Cardiff is the capital city of Wales. Each country has one capital, so we always say 'the capital'.",
    tip: "Use 'the capital of' and the country with no article: Rome is the capital of Italy.",
  },
  'Thousands of tourists visit ___ Buckingham Palace every year.': {
    why: "'Buckingham Palace' is a name. Names of palaces and castles that begin with a place name or a person's name take no article: Buckingham Palace, Windsor Castle.",
    not: {
      a: "'A Buckingham Palace' is wrong. There is only one, and its name takes no article.",
      an: "'An' is for vowel sounds, and 'Buckingham' starts with 'b'. The name takes no article.",
      the: "'The Buckingham Palace' is wrong. This kind of name takes no 'the'.",
    },
    more: 'Buckingham Palace is in the centre of the capital. It is the official home of the king or queen.',
    tip: 'Learn famous places with their article, or without it: Windsor Castle, but the Shard.',
  },
  '___ vegetables are good for you.': {
    why: 'This is about vegetables in general, all of them. For plural nouns used in general, we use no article: Vegetables are good for you.',
    not: {
      a: "'A' is for one thing, and 'vegetables' is plural. 'A vegetables' is wrong.",
      an: "'An' is for one thing, and 'vegetables' is plural. For vegetables in general, use no article.",
      the: "'The vegetables' would mean some vegetables we both know, like the ones on your plate. Here we mean all vegetables.",
    },
    tip: 'For health facts, start with a plural and no article: Carrots are good for your eyes.',
  },
  '___ sugar is bad for your teeth.': {
    why: 'This is about sugar in general. We do not count sugar, and we mean all sugar, so we use no article: Sugar is bad for your teeth.',
    not: {
      a: "We do not count sugar, so we do not say 'a sugar' here. In a café, 'a sugar' can mean a spoon of it, but not here.",
      an: "'An' is for single things we count, and 'sugar' starts with 'sh'. For sugar in general, use no article.",
      the: "'The sugar' would mean some sugar we both know, like the sugar in this bowl. Here we mean all sugar.",
    },
    tip: 'Use no article for foods we do not count when you give a general fact: Flour is made from wheat.',
  },
  '___ honesty is very important in a friendship.': {
    why: "'Honesty' is a quality, not a thing we count. For ideas in general, we use no article: Honesty is important. Kindness matters.",
    not: {
      a: "We do not count ideas like honesty, so we do not say 'a honesty'. Use no article.",
      an: "The 'h' in 'honesty' is silent, so 'an' may seem right. But we do not count honesty, so it takes no article.",
      the: "'The honesty' would mean one person's honesty that we both know about. Here we mean honesty in general.",
    },
    more: 'Ideas and feelings take no article when we mean them in general: honesty, kindness, friendship, happiness.',
    tip: 'When you write about values, start with the idea and no article: Respect is important. Patience helps.',
  },
  '___ tea is very popular in Britain.': {
    why: 'This is about tea in general, the drink. We do not count tea in general, so we use no article: Tea is very popular in Britain.',
    not: {
      a: "'A tea' means one cup of tea, as in a café. Here we mean tea in general, so we use no article.",
      an: "'An' is for vowel sounds, and 'tea' starts with 't'. For tea in general, use no article.",
      the: "'The tea' would mean some tea we both know, like the tea in this pot. Here we mean tea in general.",
    },
    more: 'Many British people drink several cups of tea every day.',
    tip: "In a café, 'a tea' means one cup. To talk about the drink in general, just say 'tea'.",
  },
  'My teacher gave me ___ good advice.': {
    why: "In English, 'advice' is not counted: we cannot say 'an advice' or 'two advices'. So even with 'good' before it, it takes no article: good advice.",
    not: {
      a: "'A good advice' is a very common mistake. 'Advice' is not counted, so it never takes 'a'.",
      an: "'An' is for single things we count. 'Advice' is not counted in English, so it takes no article.",
      the: "'The good advice' would point to advice we both already know about. Here it is new, so use no article.",
    },
    more: 'Some nouns are counted in other languages but not in English: advice, information, luggage, equipment.',
    tip: "To talk about an amount of advice, use 'some': She gave me some useful advice.",
  },
  'Our teacher gives us ___ homework on Fridays.': {
    why: "'Homework' is not counted in English: we do not say 'a homework' or 'two homeworks'. So it takes no article: She gives us homework.",
    not: {
      a: "'A homework' is a common mistake. 'Homework' is not counted, so it takes no article.",
      an: "'An' is for single things we count, and 'homework' starts with 'h'. It is not counted, so use no article.",
      the: "'The homework' would mean one task we both know about. Here we mean homework in general on Fridays.",
    },
    tip: 'To count homework, talk about pieces or tasks: two pieces of homework, three tasks.',
  },
  'My sister has ___ long hair.': {
    why: "When we mean all the hair on a head, 'hair' is not counted, so it takes no article: She has long hair. 'A hair' means one single hair.",
    not: {
      a: "'A long hair' means one single hair, like a hair on your coat. For all the hair on her head, use no article.",
      an: "'An' is for single things with a vowel sound, and 'long' starts with 'l'. Use no article for hair on the head.",
      the: "'The long hair' would point to hair we both already know about. Here we just describe her, so use no article.",
    },
    tip: 'Describe people with no article before hair: He has short hair. She has curly hair.',
  },
  'We bought ___ new furniture for the living room.': {
    why: "'Furniture' is not counted in English. We do not say 'a furniture' or 'furnitures'. So it takes no article, even with 'new' before it.",
    not: {
      a: "'A new furniture' is a common mistake. 'Furniture' is not counted, so it takes no article. Say 'a piece of furniture' for one thing.",
      an: "'An' is for single things we count, and 'new' starts with 'n'. 'Furniture' is not counted, so use no article.",
      the: "'The new furniture' would mean furniture we both already know about. Here it is new information, so use no article.",
    },
    more: 'Furniture means tables, chairs, beds and sofas together. To count it, name the things: a table, two chairs.',
    tip: "If you are not sure whether a noun is counted, ask: can I say 'two' of it? 'Two furnitures' is wrong, so no 'a'.",
  },
  'There was ___ heavy traffic in the city centre.': {
    why: "'Traffic' is not counted: we do not say 'a traffic' or 'two traffics'. So it takes no article, even with 'heavy' before it: There was heavy traffic.",
    not: {
      a: "'A heavy traffic' is wrong. 'Traffic' is not counted, so it takes no article.",
      an: "'An' is for single things we count, and 'heavy' starts with 'h'. 'Traffic' is not counted, so use no article.",
      the: "'There was' brings in something new, so 'the' does not fit. And 'traffic' never takes 'a'.",
    },
    tip: "Use 'heavy' and 'light' to describe traffic: There was light traffic this morning.",
  },
  'What ___ lovely weather we are having today.': {
    why: "'Weather' is not counted in English, so it never takes 'a', even after 'What'. With a noun we do not count, we say 'What lovely weather', with no article.",
    not: {
      a: "'What a lovely weather' is a very common mistake. 'Weather' is not counted, so it takes no article.",
      an: "'An' is for single things we count, and 'lovely' starts with 'l'. 'Weather' is not counted, so use no article.",
      the: "'What the lovely weather' is not English. After 'What' in this kind of sentence we use 'a', 'an' or nothing.",
    },
    more: "After 'What' we use 'a' or 'an' with one thing we count: What a lovely garden. With things we do not count, or plurals, we use nothing: What lovely shoes.",
    tip: "Use 'What' with no article to praise things we do not count: What delicious food. What fresh air.",
  },
  'Thank you. That is such ___ helpful advice.': {
    why: "After 'such', we use 'a' or 'an' only with one thing we count: such a kind man. 'Advice' is not counted, so we say 'such helpful advice', with no article.",
    not: {
      a: "'Such a helpful advice' is wrong. 'Advice' is not counted, so it never takes 'a'.",
      an: "'An' is for single things we count. 'Advice' is not counted, so 'such helpful advice' has no article.",
      the: "'Such the helpful advice' is not English. After 'such' we use 'a', 'an' or nothing.",
    },
    tip: "Use 'such' with no article for things we do not count: such bad luck, such kind help.",
  },
  '___ hard work is the secret of success.': {
    why: "'Hard work' here means effort in general, and we do not count work in this meaning. For ideas and things we do not count, used in general, we use no article.",
    not: {
      a: "'A hard work' is wrong. 'Work' in this meaning is not counted, so it takes no article.",
      an: "'An' is for single things we count, and 'hard' starts with the sound 'h'. Use no article here.",
      the: "'The hard work' would mean particular work we both know about, like the work on one project. Here we mean hard work in general.",
    },
    more: "'Work' as effort is not counted: hard work, too much work. 'A work' means one piece of art or writing: a work by Shakespeare.",
    tip: 'In an essay, start a general point with the idea and no article: Practice makes perfect.',
  },
  'She speaks ___ excellent English.': {
    why: 'A language takes no article, and a describing word before it does not change that: excellent English, perfect Polish. So: She speaks excellent English.',
    not: {
      a: "We do not count a language, so we do not say 'a excellent English'. Use no article.",
      an: "'Excellent' starts with a vowel sound, so 'an' may seem right. But a language is not counted, so it takes no article.",
      the: "'The excellent English' would point to some English we both know. To describe how she speaks, use no article.",
    },
    more: "With the word 'language', we use 'the' or 'a': the English language, a difficult language. Without it, a language takes no article.",
    tip: 'To praise someone, say: You speak very good English. Your English is excellent.',
  },
  '___ unemployment is a big problem in some towns.': {
    why: "'Unemployment' means people not having jobs, as a problem in general. It is something we do not count, so it takes no article.",
    not: {
      a: "'A unemployment' is wrong. We do not count unemployment, so it takes no article.",
      an: "'Unemployment' starts with a vowel sound, so 'an' may seem right. But we do not count it, so use no article.",
      the: "'The unemployment' would mean particular unemployment we both know about. Here we mean the problem in general.",
    },
    tip: 'Words for problems in a society often take no article in general: Pollution is a problem in many cities.',
  },
  'I have never seen such ___ beautiful sunset.': {
    why: "After 'such', we use 'a' or 'an' with one thing we can count: such a beautiful sunset. 'Beautiful' starts with the consonant sound 'b', so it is 'a'.",
    not: {
      an: "'An' is for vowel sounds, and 'beautiful' starts with 'b'. Say 'such a beautiful sunset'.",
      the: "'Such the' is not English. After 'such' we use 'a', 'an' or nothing.",
      '- (no article)':
        "'Sunset' is a thing we count, so 'such beautiful sunset' is wrong. We need 'a': such a beautiful sunset.",
    },
    more: "'Such a' goes before a describing word and a noun we count: such a hot day. 'So' goes before a describing word alone: The day was so long.",
    tip: "Use 'such a' to make a feeling stronger: It was such a good film.",
  },
  'We had ___ wonderful time at the party.': {
    why: "'Time' is usually not counted, but 'have a good time' is a fixed phrase that means 'enjoy yourself', and it takes 'a': We had a wonderful time.",
    not: {
      an: "'An' is for vowel sounds, and 'wonderful' starts with 'w'. Say 'a wonderful time'.",
      the: "'The wonderful time' would point to a time we both know about. The phrase for enjoying yourself is 'have a good time'.",
      '- (no article)':
        "'We had wonderful time' is wrong. In this phrase 'time' takes 'a': have a good time.",
    },
    more: "Compare: 'I have no time today' (time in general, not counted) and 'We had a lovely time' (one experience, with 'a').",
    tip: "Use 'Have a good time' to wish someone well before a party or a holiday.",
  },
  'My little brother has ___ high temperature, so we called the doctor.': {
    why: "In British English we say 'have a temperature' or 'have a high temperature' when someone is hot because they are ill. Here 'temperature' takes 'a', and 'high' starts with a consonant sound.",
    not: {
      an: "'An' is for vowel sounds. We say the 'h' in 'high', so we need 'a'.",
      the: "'The high temperature' would point to one we both know. Here we say what is wrong with him, so use 'a'.",
      '- (no article)':
        "'He has high temperature' is wrong. The phrase is 'have a high temperature'.",
    },
    more: "Some illnesses take 'a': a cough, a sore throat, a temperature. Some take no article: measles, chickenpox.",
    tip: "To say you feel ill, use 'I have a ...': I have a cough. I have a sore throat.",
  },
  'My parents met in ___ 1990s.': {
    why: "We say 'the' before a decade, a group of ten years: the 1990s, the 1960s. So: My parents met in the 1990s.",
    not: {
      a: "'A 1990s' is wrong. A decade like the 1990s is one exact time, so it takes 'the'.",
      an: "'An' is for one thing with a vowel sound. A decade takes 'the': in the 1990s.",
      '- (no article)': "'In 1990s' is a common mistake. A decade needs 'the': in the 1990s.",
    },
    more: "Compare: in 1995 (one year, no article) and in the 1990s (ten years, with 'the'). We say 'the nineteen-nineties'.",
    tip: "To write about the past, use 'in the' with decades: In the 1960s, many families bought their first television.",
  },
  'We went to a wedding on Saturday. ___ bride wore a red dress.': {
    why: "The opening sentence tells us about a wedding, and every wedding has a bride. So we know which bride: the one at this wedding. 'The' works for something linked to what we have already said.",
    not: {
      a: "'A bride' would sound like any bride. We mean the bride at the wedding we just talked about, so use 'the'.",
      an: "'An' is for vowel sounds, and 'bride' starts with 'b'. We know which bride, so use 'the'.",
      '- (no article)': "One bride needs an article. We cannot say 'Bride wore a red dress'.",
    },
    more: "When we mention a thing, we can use 'the' for its parts or its people: a wedding, the bride; a house, the roof; a play, the actors.",
    tip: "In your stories, use 'the' for people and things that belong to a place you have named: We went to a café. The owner was friendly.",
  },
  'I took a taxi to the station, but ___ driver got lost.': {
    why: "A taxi has a driver, so after 'a taxi' we know which driver: the driver of that taxi. 'The' works for someone linked to what we have already said.",
    not: {
      a: "'A driver' would sound like some other driver. We mean the driver of the taxi, so use 'the'.",
      an: "'An' is for vowel sounds, and 'driver' starts with 'd'. We know which driver, so use 'the'.",
      '- (no article)': "One driver needs an article. We cannot say 'Driver got lost' here.",
    },
    tip: "Link your sentences with 'the': I bought a ticket. The price was high.",
  },
  'I bought a new laptop, but ___ screen is already broken.': {
    why: "A laptop has one screen, so once the laptop is named, we know which screen: the screen of that laptop. We use 'the' for a part of something we have just named.",
    not: {
      a: "'A screen' would sound like some other screen. We mean the laptop's own screen, so use 'the'.",
      an: "'An' is for vowel sounds, and 'screen' starts with 's'. We know which screen, so use 'the'.",
      '- (no article)': "One screen needs an article. We cannot say 'Screen is already broken'.",
    },
    tip: "Parts of a thing you have named take 'the': I have a phone, but the battery is weak.",
  },
  '___ life of a firefighter can be dangerous.': {
    why: "'Of a firefighter' tells us which life we mean: the life of a firefighter, not life in general. With 'of' after the noun, we often use 'the'.",
    not: {
      a: "'A life of a firefighter' is not natural. We mean the kind of life firefighters live, so we say 'the life of'.",
      an: "'An' is for vowel sounds, and 'life' starts with 'l'. 'Of a firefighter' shows which life, so use 'the'.",
      '- (no article)':
        "'Life' alone means life in general. With 'of a firefighter' after it, we need 'the'.",
    },
    more: "Compare: 'Life is short' (life in general, no article) and 'The life of a firefighter is busy' (one kind of life, with 'the').",
    tip: "Use 'the ... of ...' to write about one part of something larger: the life of a farmer, the cost of food.",
  },
  'She is reading about ___ history of Japan.': {
    why: "'Of Japan' shows which history we mean: the past of one country. With 'of' after it, 'history' takes 'the'. The school subject has no article.",
    not: {
      a: "'Reading about a history of Japan' is not natural. She is reading about the past of Japan itself, so 'the history of Japan'.",
      an: "'An' is for vowel sounds. We say the 'h' in 'history', so 'an' is wrong, and 'of Japan' shows which history: 'the'.",
      '- (no article)':
        "'History' alone is the subject in general. With 'of Japan' after it, we need 'the'.",
    },
    more: "Compare: 'I love history' (the subject, no article) and 'the history of Japan' (the past of one country, with 'the').",
    tip: "In history essays, write 'the history of' and the place: the history of Peru.",
  },
  '___ coffee that you made for me this morning was delicious.': {
    why: "'That you made for me this morning' tells us exactly which coffee: one particular coffee, not coffee in general. When words after the noun show which one, we use 'the'.",
    not: {
      a: "'A coffee that you made for me' sounds like one of many. You made one coffee, which we both know, so 'the'.",
      an: "'An' is for vowel sounds, and 'coffee' starts with 'k'. This is particular coffee, so use 'the'.",
      '- (no article)':
        "Coffee in general takes no article, but this is particular coffee: the coffee you made. So we need 'the'.",
    },
    more: "Compare: 'I love coffee' (all coffee) and 'The coffee you made was good' (one particular coffee).",
    tip: "A phrase like 'that you made' or 'in this café' points to particular things, so use 'the'.",
  },
  'In ___ end, we decided to walk.': {
    why: "'In the end' is a fixed phrase that means 'finally, after thinking or waiting'. It always has 'the'.",
    not: {
      a: "'In a end' is wrong. The fixed phrase is 'in the end'.",
      an: "'In an end' is wrong. The fixed phrase is 'in the end'.",
      '- (no article)': "'In end' is wrong. The phrase always has 'the': 'in the end'.",
    },
    more: "Do not mix up 'in the end' (finally) and 'at the end' (at the final part): at the end of the film.",
    tip: "Use 'In the end' to finish a story: In the end, everyone was happy.",
  },
  'At ___ moment, I am studying for my exams.': {
    why: "'At the moment' is a fixed phrase that means 'now'. It always has 'the'. It often goes with the present continuous: I am studying.",
    not: {
      a: "'At a moment' is not the phrase for 'now'. Say 'at the moment'.",
      an: "'An' is for vowel sounds, and 'moment' starts with 'm'. The phrase is 'at the moment'.",
      '- (no article)': "'At moment' is a common mistake. The phrase is 'at the moment'.",
    },
    tip: "Use 'at the moment' to talk about now: At the moment, I am reading a good book.",
  },
  'They arrived in ___ middle of the night.': {
    why: "'In the middle of' is a fixed phrase, and a night has only one middle. So we say 'in the middle of the night'.",
    not: {
      a: "'In a middle' is wrong. Something has only one middle, so the phrase is 'in the middle of'.",
      an: "'An' is for vowel sounds, and 'middle' starts with 'm'. The phrase is 'in the middle of'.",
      '- (no article)': "'In middle of the night' is wrong. The phrase needs 'the'.",
    },
    tip: "Learn 'in the middle of' as a whole phrase: in the middle of the room, in the middle of the lesson.",
  },
  'We moved to Leeds in 2019, and ___ next year we moved to York.': {
    why: "In a story about the past, 'the next year' means the year after the one we named: 2020. 'Next year' with no article means the year after now, which does not fit a story about 2019.",
    not: {
      a: "'A next year' is wrong. We mean one exact year, the year after 2019, so we use 'the'.",
      an: "'An' is for vowel sounds, and 'next' starts with 'n'. We need 'the next year'.",
      '- (no article)':
        "'Next year' alone means the year after now, in the future. This story is in the past, so we say 'the next year'.",
    },
    more: "Compare: 'I will go to York next year' (the future, counted from now) and 'We moved, and the next year we moved again' (the year after, in a story).",
    tip: "In stories, use 'the next day', 'the next week' and 'the next year' for what came after.",
  },
  '___ people who live next door are very friendly.': {
    why: "'Who live next door' tells us exactly which people: our neighbours. When words after the noun show which ones, we use 'the', even with a plural.",
    not: {
      a: "'A' is for one thing, and 'people' is plural. 'A people' is wrong here.",
      an: "'An' is for one thing, and 'people' is plural. These are particular people, so use 'the'.",
      '- (no article)':
        "'People' alone means people in general. 'Who live next door' points to particular people, so we need 'the'.",
    },
    more: "Compare: 'People are friendly here' (people in general) and 'The people next door are friendly' (particular people).",
    tip: "A 'who' or 'that' clause after a noun often points to particular things: the boy who sits next to me.",
  },
  'We are going to ___ Lake District for the weekend.': {
    why: "'The Lake District' is an area in north-west England, with many lakes and hills. Names of areas like this take 'the'.",
    not: {
      a: "'A Lake District' is wrong. There is only one, and its name takes 'the'.",
      an: "'An' is for vowel sounds, and 'Lake' starts with 'l'. This name takes 'the'.",
      '- (no article)': "'Going to Lake District' is wrong. The name of the area needs 'the'.",
    },
    more: "A single lake takes no article when 'Lake' comes first. But the area is 'the Lake District', just as we say 'the Peak District'.",
    tip: "Areas of a country often take 'the': the Lake District, the Highlands, the Midlands.",
  },
  'My cousin works for ___ BBC.': {
    why: "We say 'the BBC', with 'the', because it names one organisation, and the letters stand for its full name, which begins with 'the'.",
    not: {
      a: "'A BBC' is wrong. There is only one BBC, and its name takes 'the'.",
      an: "'An' is for vowel sounds, and B is said 'bee'. The name takes 'the' anyway: the BBC.",
      '- (no article)': "'Works for BBC' is wrong. We say 'works for the BBC'.",
    },
    more: "Organisations said letter by letter often take 'the': the BBC, the UN, the EU. Their full names have 'the' in them too.",
    tip: 'Learn organisation names with their article: She works for the UN. He works for the BBC.',
  },
  'I went to the shops and bought ___ bike and ___ helmet. ___ bike was cheap, but the helmet was not.':
    {
      why: "Gap 1: 'a bike', because the bike is new to us. Gap 2: 'a helmet', also new. Gap 3: 'The bike', because now we know which bike: the one bought at the shops.",
      not: {
        '- / the / the':
          "Gaps 1 and 2 are wrong. One bike needs an article, so 'bought bike' is wrong. And the helmet is new here, so it needs 'a', not 'the'.",
        '- / a / a':
          "Gaps 1 and 3 are wrong. 'Bought bike' needs 'a'. And by gap 3 we know which bike, so we say 'The bike', not 'A bike'.",
        'a / the / a':
          "Gaps 2 and 3 are wrong. The helmet is new, so 'a helmet'. The bike is now known, so 'The bike'.",
      },
      more: "This pattern is very useful in stories: 'a' or 'an' when something is new, and 'the' when we meet it again.",
      tip: "When you check a story, find each thing where you first name it ('a') and every time after ('the').",
    },
  'Our neighbours have ___ old car and ___ new van. ___ car is red, and the van is white.': {
    why: "Gap 1: 'an old car', because 'old' starts with a vowel sound and the car is new to us. Gap 2: 'a new van', also new. Gap 3: 'The car', because now we know which car.",
    not: {
      'a / the / the':
        "Gaps 1 and 2 are wrong. 'Old' starts with a vowel sound, so 'an old car'. The van is new here, so 'a new van', not 'the'.",
      'a / a / a':
        "Gaps 1 and 3 are wrong. 'A old car' should be 'an old car'. By gap 3 we know which car, so 'The car'.",
      'an / the / a':
        "Gaps 2 and 3 are wrong. The van is new, so 'a new van'. The car is now known, so 'The car is red'.",
    },
    tip: "After 'have' or 'have got', use 'a' or 'an' for each thing someone owns. Then use 'the'.",
  },
  'A: Is there ___ bank near here? B: Yes. Go straight on, and ___ bank is on ___ left.': {
    why: "Gap 1: 'a bank', because 'Is there' asks about any bank. Gap 2: 'the bank', because B now means the one A asked about. Gap 3: 'on the left' is a fixed phrase.",
    not: {
      'the / - / the':
        "Gaps 1 and 2 are wrong. 'Is there' asks about any bank, so 'a bank'. And one bank needs an article: 'the bank is on the left'.",
      'the / the / a':
        "Gaps 1 and 3 are wrong. 'Is there the bank' is not English: use 'a'. And the phrase is 'on the left', not 'on a left'.",
      'a / - / a':
        "Gaps 2 and 3 are wrong. 'Bank is on the left' needs 'the', and the phrase is 'on the left'.",
    },
    more: "Directions use 'the': on the left, on the right, at the corner.",
    tip: "To ask the way, use 'Is there a ... near here?' Then listen for 'on the left' or 'on the right'.",
  },
  'There is ___ cinema in our town, but ___ cinema is very small. It shows ___ old films on Sundays.':
    {
      why: "Gap 1: 'a cinema', because 'There is' brings in something new. Gap 2: 'the cinema', because now we know which one. Gap 3: no article, because 'old films' is a plural used in general.",
      not: {
        'the / a / -':
          "Gaps 1 and 2 are wrong. 'There is' brings in something new, so 'a cinema'. Then we know it, so 'the cinema is very small'.",
        'the / the / an':
          "Gaps 1 and 3 are wrong. 'There is the cinema' is not normal: use 'a'. 'An' cannot go before a plural like 'films'.",
        'a / a / an':
          "Gaps 2 and 3 are wrong. The second mention needs 'the cinema'. And 'an old films' is wrong: plurals never take 'an'.",
      },
      tip: "'A' and 'an' never go before a plural. Use no article, 'some' or 'the'.",
    },
  '___ dogs need exercise every day. ___ dog next door goes for ___ long walk every morning.': {
    why: "Gap 1: no article, because 'dogs' here means all dogs. Gap 2: 'The dog next door', because 'next door' shows which dog. Gap 3: 'a long walk', one walk each morning.",
    not: {
      'a / - / a':
        "Gaps 1 and 2 are wrong. 'A dogs' is wrong: 'a' never goes before a plural. And 'Dog next door' needs 'the'.",
      'a / the / an':
        "Gaps 1 and 3 are wrong. 'A dogs' is wrong. And 'long' starts with 'l', a consonant sound, so 'a long walk'.",
      '- / - / an':
        "Gaps 2 and 3 are wrong. One dog needs an article: 'The dog next door'. And 'long' needs 'a', not 'an'.",
    },
    more: "General plural, no article: Dogs need exercise. A particular thing, 'the': the dog next door. One of many, 'a': a long walk.",
    tip: "Have a rest, take a break, go for a swim: these everyday phrases take 'a'.",
  },
  "___ honey is good for a sore throat. ___ honey in this jar comes from my grandad's bees.": {
    why: "Gap 1: no article, because the opening sentence is about honey in general. Gap 2: 'The honey', because 'in this jar' shows which honey we mean.",
    not: {
      'a / the':
        "Gap 1 is wrong. We do not count honey, so 'a honey' is wrong. For honey in general, use no article.",
      '- / -':
        "Gap 2 is wrong. 'In this jar' points to particular honey, so we need 'The honey in this jar'.",
      'a / -':
        "Both gaps are wrong. 'A honey' is wrong, because we do not count honey. And honey in this jar is particular, so it needs 'the'.",
    },
    tip: "Ask: do I mean all of it, or this one? All of it: no article. This one: 'the'.",
  },
  'We waited ___ hour for the bus. Then ___ old man told us there was ___ one-hour delay.': {
    why: "Gap 1: 'an hour', because the 'h' is silent. Gap 2: 'an old man', because 'old' starts with a vowel sound. Gap 3: 'a one-hour delay', because 'one' starts with a 'w' sound.",
    not: {
      'a / a / a':
        "Gaps 1 and 2 are wrong. 'Hour' has a silent 'h', so 'an hour'. 'Old' starts with a vowel sound, so 'an old man'.",
      'a / an / an':
        "Gaps 1 and 3 are wrong. 'An hour', because the 'h' is silent. 'A one-hour delay', because 'one' starts with a 'w' sound.",
      'an / a / an':
        "Gaps 2 and 3 are wrong. 'An old man', because 'old' starts with a vowel sound. 'A one-hour delay', because 'one' sounds like 'wun'.",
    },
    tip: 'Read the whole text aloud. Your ear will often hear the right article before your eye sees it.',
  },
  'Last summer we visited ___ Scotland. We climbed ___ Ben Nevis and swam in ___ sea near Oban.': {
    why: "Gap 1: no article, because most country names take none. Gap 2: no article, because single mountains usually take none. Gap 3: 'the sea', the usual phrase for swimming at the coast.",
    not: {
      'the / the / the':
        "Gaps 1 and 2 are wrong. 'The Scotland' is wrong: most countries take no article. 'The Ben Nevis' is wrong: one mountain takes none.",
      'the / - / -':
        "Gaps 1 and 3 are wrong. 'The Scotland' is wrong. And 'swam in sea' is wrong: the phrase is 'in the sea'.",
      '- / the / -':
        "Gaps 2 and 3 are wrong. 'The Ben Nevis' is wrong, and 'swam in sea' needs 'the'.",
    },
    more: "Ben Nevis is the UK's tallest mountain. Oban is a seaside town on the west coast of Scotland.",
  },
  'My mum gets up at six. She has ___ shower, eats ___ breakfast and goes to ___ work by train.': {
    why: "Gap 1: 'a shower', because in British English we 'have a shower'. Gap 2: no article, because we 'eat breakfast'. Gap 3: no article, because we 'go to work'.",
    not: {
      '- / a / -':
        "Gaps 1 and 2 are wrong. We say 'have a shower', with 'a'. And a plain meal takes no article: 'eats breakfast'.",
      '- / - / the':
        "Gaps 1 and 3 are wrong. 'Has shower' needs 'a'. And 'goes to the work' is wrong: we say 'goes to work'.",
      'a / a / the':
        "Gaps 2 and 3 are wrong. 'Eats breakfast' has no article, and neither does 'goes to work'.",
    },
    more: "Daily routines mix the rules: 'have a shower' and 'have a bath' take 'a', but plain meals and 'go to work' take no article.",
    tip: "Learn your routine as whole phrases, with or without 'a': I have a shower, then I eat breakfast.",
  },
  'There was no possibility of taking ___ walk that day. We had been wandering, indeed, in the leafless shrubbery ___ hour in ___ morning...':
    {
      why: "Gap 1: 'a walk', because 'take a walk' is the usual phrase. Gap 2: 'an hour', because the 'h' in 'hour' is silent. Gap 3: 'in the morning', a fixed phrase with 'the'. These are the opening words of the novel.",
      not: {
        'the / a / the':
          "Gap 2 is wrong: 'hour' has a silent 'h', so it takes 'an'. Brontë also wrote 'a walk', the usual phrase.",
        'the / an / -':
          "Gap 3 is wrong: 'in morning' needs 'the'. Brontë also wrote 'a walk', the usual phrase.",
        'a / a / -':
          "Gaps 2 and 3 are wrong. 'Hour' has a silent 'h', so 'an hour'. And the phrase is 'in the morning'.",
      },
      more: "A shrubbery is a part of a garden full of bushes. 'Leafless' means without leaves: it is winter in this scene.",
      tip: 'Learn phrases from books as whole pieces: take a walk, an hour in the morning.',
    },
  'Word had gone round during the day that old Major, the prize Middle White boar, had had ___ strange dream on ___ previous night and wished to communicate it to ___ other animals.':
    {
      why: "Gap 1: 'a strange dream', because the dream is new to us. Gap 2: 'the previous night', one exact night: the night before. Gap 3: 'the other animals', meaning all the rest of the animals there.",
      not: {
        'the / a / the':
          "Gaps 1 and 2 are wrong. The dream is new to us, so Orwell wrote 'a strange dream'. And 'the previous night' is one exact night, so it needs 'the'.",
        'the / the / an':
          "Gaps 1 and 3 are wrong. The dream is new to us, so 'a strange dream'. And 'an' cannot go before a plural like 'animals'.",
        'a / a / an':
          "Gaps 2 and 3 are wrong. 'The previous night' is one exact night. And 'an other animals' is wrong: plurals never take 'an'.",
      },
      more: "Old Major is the old pig whose dream starts the story. 'The other' means all the rest; 'another' means one more.",
      tip: "Use 'the previous day' or 'the day before' when you tell a story in the past.",
    },
  'Clover was ___ stout motherly mare approaching ___ middle life, who had never quite got her figure back after her fourth foal. Boxer was ___ enormous beast, nearly eighteen hands high, and as strong as any two ordinary horses put together.':
    {
      why: "Gap 1: 'a stout motherly mare', because 'stout' starts with a consonant sound. Gap 2: no article, because 'middle life' means middle age. Gap 3: 'an enormous beast', because 'enormous' starts with a vowel sound.",
      not: {
        'an / the / an':
          "Gaps 1 and 2 are wrong. 'Stout' starts with 's', so 'a stout motherly mare'. And 'middle life' takes no article.",
        'an / - / a':
          "Gaps 1 and 3 are wrong. 'A stout motherly mare', because 'stout' starts with a consonant. 'An enormous beast', because 'enormous' starts with a vowel sound.",
        'a / the / a':
          "Gaps 2 and 3 are wrong. 'Middle life' takes no article. And 'enormous' starts with a vowel sound, so 'an enormous beast'.",
      },
      more: "A mare is a female horse, and a foal is a young horse. Horses are measured in 'hands': eighteen hands is about 1.8 metres.",
      tip: "Describe a character with 'was a' or 'was an' and describing words: She was a kind old woman.",
    },
  'Benjamin was ___ oldest animal on ___ farm, and ___ worst tempered.': {
    why: "All three gaps take 'the'. 'Oldest' and 'worst' are superlatives, which take 'the'. And 'the farm' is the one farm the story is about.",
    not: {
      'an / - / the':
        "Gaps 1 and 2 are wrong. 'Oldest' is a superlative, so 'the oldest', not 'an oldest'. And 'on farm' needs 'the'.",
      'an / the / a':
        "Gaps 1 and 3 are wrong. Superlatives take 'the': 'the oldest' and 'the worst tempered'.",
      'the / - / a':
        "Gaps 2 and 3 are wrong. 'On farm' needs 'the'. And 'worst' is a superlative, so 'the worst tempered'.",
    },
    more: "Benjamin is the donkey in Animal Farm. 'Worst tempered' means more often in a bad mood than anyone else.",
    tip: "A vowel sound does not always mean 'an'. Before a superlative like 'oldest', the article is 'the'.",
  },
  "The door of Scrooge's counting-house was open that he might keep his eye upon his clerk, who in ___ dismal little cell beyond, a sort of tank, was copying letters. Scrooge had ___ very small fire, but ___ clerk's fire was so very much smaller that it looked like one coal.":
    {
      why: "Gap 1: 'a dismal little cell', new to us, and 'dismal' starts with a consonant. Gap 2: 'a very small fire', also new. Gap 3: 'the clerk's fire', because we already know which clerk: Scrooge's.",
      not: {
        'an / the / the':
          "Gaps 1 and 2 are wrong. 'Dismal' starts with 'd', so 'a dismal little cell'. Scrooge's fire is new to us, so 'a very small fire'.",
        'an / a / -':
          "Gaps 1 and 3 are wrong. 'A dismal little cell', because 'dismal' starts with a consonant. And 'clerk's fire' needs 'the'.",
        'a / the / -':
          "Gaps 2 and 3 are wrong. The fire is new, so 'a very small fire'. And we know which clerk, so 'the clerk's fire'.",
      },
      more: 'A counting-house was an office where a business kept its accounts. Bob Cratchit, the clerk, works in the cold while Scrooge keeps the coal-box in his own room.',
      tip: "With a word like 'clerk's', the article goes with the owner: the clerk's fire, a friend's house.",
    },
  'Miss Morstan entered the room with ___ firm step and ___ outward composure of manner. She was ___ blonde young lady, small, dainty, well gloved, and dressed in the most perfect taste.':
    {
      why: "Gap 1: 'a firm step', because 'firm' starts with a consonant sound. Gap 2: 'an outward composure', because 'outward' starts with a vowel sound. Gap 3: 'a blonde young lady', because 'blonde' starts with 'b'.",
      not: {
        'an / a / a':
          "Gaps 1 and 2 are wrong. 'Firm' starts with 'f', so 'a firm step'. 'Outward' starts with a vowel sound, so 'an outward composure'.",
        'an / an / an':
          "Gaps 1 and 3 are wrong. 'Firm' and 'blonde' start with consonant sounds, so they take 'a'.",
        'a / a / an':
          "Gaps 2 and 3 are wrong. 'An outward composure', because 'outward' starts with a vowel sound. 'A blonde young lady', because 'blonde' starts with 'b'.",
      },
      more: 'Composure means being calm. Watson sees that Miss Morstan looks calm on the outside, although she has come to ask for help.',
      tip: 'In a description, check the article for each new detail: a firm step, an outward calm.',
    },
  '___ fearful man, all in coarse grey, with ___ great iron on his leg. A man with no hat, and with broken shoes, and with ___ old rag tied round his head.':
    {
      why: "Gap 1: 'A fearful man', because Pip has never seen him before. Gap 2: 'a great iron', also new. Gap 3: 'an old rag', because 'old' starts with a vowel sound.",
      not: {
        'an / the / an':
          "Gaps 1 and 2 are wrong. 'Fearful' starts with 'f', so 'A fearful man'. The iron is new to us, so 'a great iron'.",
        'an / a / a':
          "Gaps 1 and 3 are wrong. 'Fearful' takes 'a'. And 'old' starts with a vowel sound, so 'an old rag'.",
        'a / the / a':
          "Gaps 2 and 3 are wrong. The iron is new to us, so 'a great iron'. And 'old' needs 'an': 'an old rag'.",
      },
      more: 'This is the convict, Magwitch, who frightens young Pip in a churchyard. The iron on his leg shows that he has escaped from a prison ship.',
      tip: "Dickens builds a picture from a list of new details, each with 'a' or 'an'. Try it in your own descriptions.",
    },
  'It was on ___ dreary night of November, that I beheld ___ accomplishment of my toils. With ___ anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet.':
    {
      why: "Gap 1: 'a dreary night', one night of many in November. Gap 2: 'the accomplishment of my toils', because 'of my toils' shows which. Gap 3: 'an anxiety', because 'anxiety' starts with a vowel sound.",
      not: {
        'the / - / an':
          "Gap 2 is wrong: 'beheld accomplishment' needs an article, and 'of my toils' shows which one, so 'the'. Shelley also wrote 'a dreary night'.",
        'the / the / a':
          "Gap 3 is wrong: 'anxiety' starts with a vowel sound, so 'an anxiety'. Shelley also wrote 'a dreary night', one night of many.",
        'a / - / a':
          "Gaps 2 and 3 are wrong. 'Of my toils' shows which accomplishment, so 'the'. And 'anxiety' needs 'an'.",
      },
      more: "Here Victor Frankenstein brings his creature to life. 'Beheld' means saw, and 'the accomplishment of my toils' means the completion of all his hard work.",
      tip: "'The ... of ...' points to one thing: the result of the test, the price of the ticket.",
    },
  'It chanced on one of these rambles that their way led them down ___ by-street in ___ busy quarter of London. ___ street was small and what is called quiet, but it drove a thriving trade on the weekdays.':
    {
      why: "Gap 1: 'a by-street', a narrow side street we have not met before. Gap 2: 'a busy quarter', one of many parts of London. Gap 3: 'The street', because now we know which street.",
      not: {
        'the / - / the':
          "Gap 2 is wrong: 'in busy quarter' needs an article. Stevenson also wrote 'a by-street', because the street is new to us.",
        'the / a / a':
          "Gap 3 is wrong: by now we know which street, so 'The street was small'. Stevenson also wrote 'a by-street', new to us.",
        'a / - / a':
          "Gaps 2 and 3 are wrong. 'A busy quarter' needs 'a'. And the street is now known, so 'The street'.",
      },
      more: 'Mr Utterson and his relative, Mr Enfield, are on one of their Sunday walks. In this quiet street they will see a door, and the mystery begins.',
      tip: "When a story moves to another place, the place takes 'a' first and 'the' after.",
    },
  'Our school has ___ library and ___ gym. ___ library is open every lunchtime.': {
    why: "Gap 1: 'a library', because 'has' tells us something new. Gap 2: 'a gym', also new, and 'gym' starts with a consonant sound. Gap 3: 'The library', because now we know which one.",
    not: {
      'the / an / the':
        "Gaps 1 and 2 are wrong. 'Has' brings in new things, so 'a library'. 'Gym' starts with a 'j' sound, so 'a gym', not 'an'.",
      'the / a / a':
        "Gaps 1 and 3 are wrong. The library is new at first, so 'a library'. Then it is known, so 'The library is open'.",
      'a / an / a':
        "Gaps 2 and 3 are wrong. 'Gym' starts with a consonant sound, so 'a gym'. And the library is now known: 'The library'.",
    },
    tip: "To describe your school, use 'has a' or 'has an' for each place, then 'the' when you say more about it.",
  },
  'I need ___ bread and ___ eggs. Can you also buy ___ bottle of milk?': {
    why: "Gap 1: no article, because we do not count bread. Gap 2: no article, because 'eggs' is plural. Gap 3: 'a bottle', because we count bottles: one bottle of milk.",
    not: {
      'a / an / a':
        "Gaps 1 and 2 are wrong. We do not count bread, so 'a bread' is wrong. And 'an' cannot go before a plural like 'eggs'.",
      'a / - / -':
        "Gaps 1 and 3 are wrong. 'A bread' is wrong: bread is not counted. And one bottle needs 'a': 'a bottle of milk'.",
      '- / an / -':
        "Gaps 2 and 3 are wrong. 'An eggs' is wrong, because 'eggs' is plural. And 'buy bottle' needs 'a'.",
    },
    more: 'For things we do not count, we count a container or a slice: a carton of juice, a slice of bread.',
    tip: "In a shop, ask for things we do not count with 'some': Can I have some bread, please?",
  },
  '___ sun was shining, and there was not ___ cloud in ___ sky.': {
    why: "Gap 1: 'The sun', because there is only one. Gap 2: 'not a cloud', meaning not even one cloud. Gap 3: 'the sky', because there is only one sky above us.",
    not: {
      'a / - / the':
        "Gaps 1 and 2 are wrong. There is only one sun, so 'The sun'. And 'not cloud' needs 'a': 'not a cloud'.",
      'a / a / -':
        "Gaps 1 and 3 are wrong. 'The sun' and 'the sky' both take 'the', because there is only one of each.",
      'the / - / -':
        "Gaps 2 and 3 are wrong. 'Not a cloud' means not even one, so it needs 'a'. And 'in sky' needs 'the'.",
    },
    more: "'Not a ...' means 'not even one': There was not a sound. Not a single person came.",
    tip: "Use 'the' for things in nature that we see as one: the horizon, the coast, the open air.",
  },
  'We had dinner at ___ new restaurant last night. ___ food was delicious, but ___ waiter was very slow.':
    {
      why: "Gap 1: 'a new restaurant', new to the listener. Gap 2: 'The food', the food at that restaurant. Gap 3: 'the waiter', the one who served us there. We know which, because of the restaurant.",
      not: {
        'the / a / the':
          "Gap 2 is wrong: we do not count food, so 'a food' is wrong. We say 'The food was delicious'.",
        'the / the / -':
          "Gap 3 is wrong: one waiter needs an article. We know which waiter, the one at the restaurant, so 'the waiter'.",
        'a / a / -':
          "Gaps 2 and 3 are wrong. 'A food' is wrong, because we do not count food. And one waiter needs an article: 'the waiter'.",
      },
      more: "After we name a place, we use 'the' for the things that belong to it: a restaurant, the menu, the food, the bill.",
      tip: "In a review, name the place with 'a', then describe it with 'the': We went to a café. The cakes were lovely.",
    },
  'My brother is ___ vegetarian. He does not eat ___ meat, but he loves ___ cheese.': {
    why: "Gap 1: 'a vegetarian', one person who does not eat meat. Gap 2: no article, because we mean meat in general. Gap 3: no article, because we mean cheese in general.",
    not: {
      'an / a / -':
        "Gaps 1 and 2 are wrong. 'Vegetarian' starts with 'v', so 'a vegetarian'. And we do not count meat, so 'a meat' is wrong.",
      'an / - / the':
        "Gap 1 is wrong: 'vegetarian' starts with a consonant sound, so 'a vegetarian'. And with 'loves', we usually mean cheese in general, with no article.",
      'a / a / the':
        "Gap 2 is wrong: we do not count meat, so 'a meat' is wrong. Use no article for meat in general.",
    },
    more: "We can also say 'He is vegetarian', with no article, using it as a describing word. With 'a', it is a noun: He is a vegetarian.",
    tip: 'To talk about what people eat, use no article for food in general: She does not eat fish. He loves pasta.',
  },
  'My cousin is ___ engineer, and her husband is ___ university lecturer. They both work at ___ same university.':
    {
      why: "Gap 1: 'an engineer', a job that starts with a vowel sound. Gap 2: 'a university lecturer', because 'university' starts with a 'you' sound. Gap 3: 'the same', because 'same' always takes 'the'.",
      not: {
        'a / an / the':
          "Gaps 1 and 2 are wrong. 'Engineer' starts with a vowel sound, so 'an engineer'. 'University' starts with 'you', so 'a university'.",
        'a / a / a':
          "Gaps 1 and 3 are wrong. 'An engineer', because of the vowel sound. And 'same' always takes 'the': the same university.",
        'an / an / a':
          "Gaps 2 and 3 are wrong. 'University' starts with a 'you' sound, so 'a university lecturer'. And we say 'the same'.",
      },
      tip: "Learn 'the same' as one phrase: We go to the same club. We like the same films.",
    },
  'Sam has ___ older brother and ___ younger sister. ___ younger one is called Ana.': {
    why: "Gap 1: 'an older brother', because 'older' starts with a vowel sound. Gap 2: 'a younger sister', because 'younger' starts with a 'y' sound. Gap 3: 'The younger one', because we know which of the two.",
    not: {
      'a / an / the':
        "Gaps 1 and 2 are wrong. 'Older' starts with a vowel sound, so 'an older brother'. 'Younger' starts with 'y', a consonant sound, so 'a younger sister'.",
      'a / a / a':
        "Gaps 1 and 3 are wrong. 'An older brother'. And with two people, 'the younger one' points to one of them.",
      'an / an / a':
        "Gaps 2 and 3 are wrong. 'Younger' starts with a consonant sound, so 'a younger sister'. And we know which one: 'The younger one'.",
    },
    more: "With two people or things, we use 'the' and a comparative to point to one: the taller one, the older one.",
    tip: "When you talk about your family, use 'a' or 'an' first, then 'the' to say more: I have a cousin and a nephew. The nephew is ten.",
  },
  '___ sunlight is important for plants, so put ___ plant near ___ window.': {
    why: "Gap 1: no article, because the opening part is about sunlight in general. Gap 2: 'the plant', the one we both know. Gap 3: 'the window', the window in this room.",
    not: {
      'the / an / the':
        "Gap 2 is wrong: 'plant' starts with 'p', so 'an plant' is wrong. For sunlight in general, use no article.",
      'the / the / -':
        "Gap 3 is wrong: one window needs an article, so 'near the window'. For sunlight in general, we use no article.",
      '- / an / -':
        "Gaps 2 and 3 are wrong. 'An plant' is wrong, because 'plant' starts with a consonant sound. And 'near window' needs 'the'.",
    },
    tip: "In advice, a general fact often comes first with no article, then a particular thing with 'the'.",
  },
  'My cousin lives in ___ United States. She works in ___ New York, near ___ Hudson River.': {
    why: "Gap 1: 'the United States', a country name with 'States' in it. Gap 2: no article, because city names take none. Gap 3: 'the Hudson River', because river names take 'the'.",
    not: {
      '- / the / the':
        "Gaps 1 and 2 are wrong. 'United States' needs 'the'. And city names take no article, so 'in New York'.",
      '- / - / -':
        "Gaps 1 and 3 are wrong. 'The United States' and 'the Hudson River' both need 'the'.",
      'the / the / -':
        "Gaps 2 and 3 are wrong. 'The New York' is wrong: cities take no article. And rivers take 'the'.",
    },
    more: "New York City stands at the mouth of the Hudson River. People also say 'the US' and 'the USA', always with 'the'.",
    tip: "Check place names in three groups: no article (most countries and cities), 'the' (rivers and seas), and the few countries with 'the'.",
  },
  'A: Where is ___ cat? B: She is asleep in ___ box under ___ table.': {
    why: "Gap 1: 'the cat', the family's own cat. Gap 2: 'a box', one we have not talked about before. Gap 3: 'the table', the one in this home.",
    not: {
      'a / the / the':
        "Gap 1 is wrong: speaker A means the family's own cat, so 'Where is the cat?' 'Where is a cat?' would mean any cat.",
      'a / a / -':
        "Gaps 1 and 3 are wrong. 'Where is the cat?' asks about our own cat. And 'under table' needs 'the'.",
      'the / the / -':
        "Gap 3 is wrong: 'under table' needs an article, and we mean the table at home, so 'the table'.",
    },
    tip: "In a dialogue, listen for things both speakers know ('the') and new things ('a').",
  },
  'I go to ___ gym three times ___ week. Each class lasts ___ hour.': {
    why: "Gap 1: 'the gym', the usual phrase for the gym we go to. Gap 2: 'three times a week', where 'a' means 'in each'. Gap 3: 'an hour', because the 'h' is silent.",
    not: {
      '- / the / an':
        "Gaps 1 and 2 are wrong. We say 'go to the gym'. And 'three times the week' is wrong: we say 'a week'.",
      '- / a / a':
        "Gaps 1 and 3 are wrong. We say 'go to the gym'. And 'hour' has a silent 'h', so 'an hour'.",
      'the / the / a':
        "Gaps 2 and 3 are wrong. 'Three times a week' uses 'a'. And 'a hour' is wrong: the 'h' is silent, so 'an hour'.",
    },
    tip: "Use 'go to the gym', 'go to the dentist' and 'go to the shops' for everyday places.",
  },
  'This is ___ first time I have been to ___ Wales. It is ___ most beautiful place I know.': {
    why: "Gap 1: 'the first time', because 'first' points to one exact time. Gap 2: no article, because country names like Wales take none. Gap 3: 'the most beautiful', a superlative.",
    not: {
      'a / the / the':
        "Gaps 1 and 2 are wrong. 'The first time' takes 'the'. And 'the Wales' is wrong: the country takes no article.",
      'a / - / a':
        "Gaps 1 and 3 are wrong. 'The first time' and 'the most beautiful' both need 'the'.",
      'the / the / a':
        "Gaps 2 and 3 are wrong. 'Wales' takes no article. And a superlative needs 'the': 'the most beautiful place'.",
    },
    tip: "Use 'This is the first time I have ...' to talk about something new to you.",
  },
  '___ cats are popular pets in Britain. ___ cats next door often sleep in our garden.': {
    why: "Gap 1: no article, because the opening sentence is about cats in general. Gap 2: 'The cats next door', because 'next door' shows which cats we mean.",
    not: {
      'a / the':
        "Gap 1 is wrong: 'a' cannot go before a plural like 'cats'. For cats in general, use no article.",
      '- / -':
        "Gap 2 is wrong. 'Next door' points to particular cats, so we need 'The cats next door'.",
      'a / -':
        "Both gaps are wrong. 'A cats' is wrong, because 'cats' is plural. And particular cats need 'the': 'The cats next door'.",
    },
    tip: "'The' works with plurals too, when we mean particular ones: the cats next door, the books on my desk.",
  },
  'Can I give you ___ piece of advice? Never leave ___ money in ___ car.': {
    why: "Gap 1: 'a piece of advice', because we count advice with 'a piece of'. Gap 2: no article, because we mean money in general. Gap 3: 'the car', your car, which we both know about.",
    not: {
      'an / a / the':
        "Gaps 1 and 2 are wrong. 'Piece' starts with 'p', so 'a piece'. And money is not counted, so 'a money' is wrong.",
      'an / - / a':
        "Gap 1 is wrong: 'piece' starts with a consonant sound, so 'a piece of advice'.",
      'a / a / a':
        "Gap 2 is wrong: money is not counted, so 'leave a money' is wrong. Use no article for money in general.",
    },
    more: "'Advice' and 'money' are not counted in English. To count advice, say 'a piece of advice'. Money is counted in pounds and pence instead.",
    tip: "Use 'Can I give you a piece of advice?' to give friendly advice politely.",
  },
  'I feel ill today. I have ___ cold and ___ headache, and ___ doctor says I need to rest.': {
    why: "Gap 1: 'a cold', an illness that takes 'a'. Gap 2: 'a headache', which also takes 'a'. Gap 3: 'the doctor', my own doctor, whom we both know about.",
    not: {
      '- / the / the':
        "Gaps 1 and 2 are wrong. We say 'have a cold' and 'have a headache', both with 'a'.",
      '- / a / a':
        "Gap 1 is wrong: we say 'I have a cold', with 'a'. 'I have cold' is not English.",
      'a / the / a': "Gap 2 is wrong: we say 'I have a headache', not 'the headache'.",
    },
    more: "Some illnesses take 'a': a cold, a headache, a sore throat. Others take no article: measles, chickenpox. 'The doctor' is your own doctor.",
    tip: 'To explain why you are away, say: I have a cold, so I cannot come today.',
  },
  'Last year we stayed in ___ small hotel by ___ sea. Every morning, we sat on ___ balcony and watched the boats.':
    {
      why: "Gap 1: 'a small hotel', new to the listener. Gap 2: 'by the sea', the usual phrase for the coast. Gap 3: 'the balcony', the balcony of our room at that hotel.",
      not: {
        'the / a / the': "Gap 2 is wrong: we say 'by the sea', not 'by a sea'.",
        'the / the / -':
          "Gap 3 is wrong: 'sat on balcony' needs an article. It is the balcony of our room, so 'the balcony'.",
        'a / a / -':
          "Gaps 2 and 3 are wrong. The phrase is 'by the sea'. And 'sat on balcony' needs 'the'.",
      },
      tip: "In holiday writing, 'We stayed in a ...' brings in the place, then 'the' is used for its parts: the pool, the garden.",
    },
  'I found ___ wallet in the park. There was ___ ID card in it, so I took ___ wallet to the police station.':
    {
      why: "Gap 1: 'a wallet', which we have just found. Gap 2: 'an ID card', because 'ID' starts with the vowel sound 'eye'. Gap 3: 'the wallet', that wallet again.",
      not: {
        'the / a / the': "Gap 2 is wrong: 'ID' is said 'eye-dee', a vowel sound, so 'an ID card'.",
        'the / an / a':
          "Gap 3 is wrong: this is the same wallet again, so 'the wallet'. 'A wallet' would sound like a different one.",
        'a / a / a':
          "Gaps 2 and 3 are wrong. 'An ID card', because of the vowel sound. And 'the wallet', because we know which one.",
      },
      tip: "In a story, track each thing: first 'a' or 'an', then 'the' every time after.",
    },
  '___ chocolate is made from cocoa beans. ___ chocolate that you gave me was delicious.': {
    why: "Gap 1: no article, because the opening sentence is about chocolate in general. Gap 2: 'The chocolate', because 'that you gave me' shows which chocolate.",
    not: {
      'an / the':
        "Gap 1 is wrong: 'chocolate' starts with 'ch', so 'an' cannot fit. For chocolate in general, use no article.",
      '- / -':
        "Gap 2 is wrong: 'that you gave me' points to particular chocolate, so we need 'The chocolate'.",
      'an / -':
        "Both gaps are wrong. 'An chocolate' is wrong. And particular chocolate needs 'the'.",
    },
    tip: "A 'that' clause after a noun points to particular things: the cake that you made, the song that we heard.",
  },
  'We have ___ English lesson every morning. ___ teacher is very kind, and she gives us ___ homework every day.':
    {
      why: "Gap 1: 'an English lesson', because 'English' starts with a vowel sound. Gap 2: 'The teacher', the one who teaches that lesson. Gap 3: no article, because we do not count homework.",
      not: {
        'a / a / -':
          "Gaps 1 and 2 are wrong. 'English' starts with a vowel sound, so 'an English lesson'. And we know which teacher, so 'The teacher'.",
        'a / the / the':
          "Gap 1 is wrong: 'English' starts with a vowel sound, so we need 'an English lesson'.",
        'an / a / the':
          "Gap 2 is wrong: we know which teacher, the one who teaches the lesson, so 'The teacher is very kind'.",
      },
      more: "A language alone takes no article, but 'an English lesson' takes 'an', because the article goes with 'lesson'. 'English' only decides the sound.",
      tip: "When a language comes before a noun, the noun can take 'a' or 'an': an English lesson, a French book.",
    },
  'My brother plays ___ football for ___ local team. He is ___ excellent player.': {
    why: "Gap 1: no article, because sports take none after 'play'. Gap 2: 'a local team', one of many teams. Gap 3: 'an excellent player', because 'excellent' starts with a vowel sound.",
    not: {
      'the / the / an':
        "Gap 1 is wrong: after 'play', sports take no article, so 'plays football'.",
      'the / a / a':
        "Gaps 1 and 3 are wrong. 'Plays football' has no article. And 'excellent' starts with a vowel sound, so 'an excellent player'.",
      '- / the / a':
        "Gap 3 is wrong: 'excellent' starts with a vowel sound, so 'an excellent player'.",
    },
    tip: "To describe how good someone is, use 'a' or 'an' and a describing word: She is a fast runner.",
  },
  'The doctor sent me for ___ X-ray. Then I waited ___ hour in ___ long queue.': {
    why: "Gap 1: 'an X-ray', because X is said 'ex', a vowel sound. Gap 2: 'an hour', because the 'h' is silent. Gap 3: 'a long queue', one queue we have not met before.",
    not: {
      'a / a / a':
        "Gaps 1 and 2 are wrong. X is said 'ex', so 'an X-ray'. 'Hour' has a silent 'h', so 'an hour'.",
      'a / an / the': "Gap 1 is wrong: X is said 'ex', a vowel sound, so 'an X-ray'.",
      'an / a / the': "Gap 2 is wrong: the 'h' in 'hour' is silent, so 'an hour'.",
    },
    tip: 'Letters and silent letters both follow the sound rule: an X-ray, an hour, an MOT.',
  },
  'My new friend is ___ Ugandan student. She lives in ___ old flat near ___ busy road.': {
    why: "Gap 1: 'a Ugandan student', because 'Ugandan' starts with a 'you' sound. Gap 2: 'an old flat', because 'old' starts with a vowel sound. Gap 3: 'a busy road', because 'busy' starts with 'b'.",
    not: {
      'an / a / a':
        "Gaps 1 and 2 are wrong. 'Ugandan' starts with a 'you' sound, so 'a Ugandan student'. 'Old' starts with a vowel sound, so 'an old flat'.",
      'an / an / an':
        "Gaps 1 and 3 are wrong. 'A Ugandan student', because of the 'you' sound. And 'busy' starts with a consonant, so 'a busy road'.",
      'a / a / an':
        "Gaps 2 and 3 are wrong. 'An old flat', because 'old' starts with a vowel sound. 'A busy road', because 'busy' starts with 'b'.",
    },
    tip: 'Nationalities follow the sound rule too: a Ugandan student, an Indian student, an Irish student.',
  },
  'We flew from London to ___ Canary Islands. Our hotel was next to ___ beach, and we swam in ___ Atlantic every day.':
    {
      why: "Gap 1: 'the Canary Islands', because a group of islands takes 'the'. Gap 2: 'a beach', one of many beaches there. Gap 3: 'the Atlantic', because oceans take 'the'.",
      not: {
        '- / the / the':
          "Gap 1 is wrong: a group of islands takes 'the', so 'to the Canary Islands'.",
        '- / a / -':
          "Gaps 1 and 3 are wrong. Island groups and oceans take 'the': the Canary Islands, the Atlantic.",
        'the / the / -': "Gap 3 is wrong: oceans take 'the', so 'swam in the Atlantic'.",
      },
      more: 'The Canary Islands are Spanish islands in the Atlantic Ocean, off the north-west coast of Africa. Many British people go there on holiday.',
      tip: "Plural place names usually take 'the': the Canary Islands, the Highlands, the Hebrides.",
    },
  'It was ___ Sunday morning. Dad was still in ___ bed, and Mum was at ___ work.': {
    why: "Gap 1: 'a Sunday morning', one Sunday of many. Gap 2: no article, because 'in bed' means sleeping or resting there. Gap 3: no article, because 'at work' means at your job.",
    not: {
      'the / the / -':
        "Gap 2 is wrong: 'still in bed' means he had not got up yet. That phrase takes no article.",
      'the / - / the':
        "Gap 3 is wrong: 'at work' means at your job, with no article. 'At the work' is not English.",
      'a / the / the':
        "Gaps 2 and 3 are wrong. We say 'in bed' and 'at work', both with no article.",
    },
    more: "We can also say 'It was Sunday morning', with no article. With 'a', it means one Sunday morning among many.",
    tip: "Learn 'in bed' and 'at work' as whole phrases with no article.",
  },
  '___ tigers are bigger than ___ leopards, but ___ cheetah is the fastest land animal.': {
    why: "Gaps 1 and 2: no article, because we compare tigers and leopards in general. Gap 3: 'the cheetah', meaning the cheetah as a kind of animal, the fastest of all.",
    not: {
      'the / a / the':
        "Gap 2 is wrong: 'a' cannot go before a plural like 'leopards'. In general comparisons, plurals take no article.",
      'the / - / -':
        "Gap 3 is wrong: 'cheetah is the fastest' needs an article. For a whole kind of animal, we can say 'the cheetah'.",
      '- / a / -':
        "Gaps 2 and 3 are wrong. 'A leopards' is wrong, because 'leopards' is plural. And 'cheetah is' needs 'the'.",
    },
    more: "We can talk about a whole kind of animal in two ways: 'Cheetahs are fast' (plural, no article) or 'The cheetah is fast' (singular, with 'the').",
    tip: "In science writing, 'the' with a singular animal can mean the whole kind: The blue whale is the largest animal.",
  },
  'My mum is ___ chef, and my dad works for ___ bank in ___ city centre.': {
    why: "Gap 1: 'a chef', a job, and 'chef' starts with a consonant sound. Gap 2: 'a bank', one of many banks. Gap 3: 'the city centre', the centre of our town, which we both know.",
    not: {
      'an / the / the':
        "Gap 1 is wrong: 'chef' starts with a 'sh' sound, a consonant sound, so 'a chef'.",
      'an / a / -':
        "Gaps 1 and 3 are wrong. 'A chef', because of the consonant sound. And 'in city centre' needs 'the'.",
      'a / the / -':
        "Gap 3 is wrong: 'in city centre' needs an article. We mean the centre of our own town, so 'the city centre'.",
    },
    tip: "Use 'works for a ...' for a company: She works for a bank. He works for a supermarket.",
  },
  'We arrived in Rome on ___ Friday. ___ next day, we visited ___ Colosseum.': {
    why: "Gap 1: no article, because days of the week usually take none: on Friday. Gap 2: 'The next day', the day after Friday, in a story about the past. Gap 3: 'the Colosseum', a famous building whose name takes 'the'.",
    not: {
      'the / a / the':
        "Gap 2 is wrong: 'A next day' is not English. In a story, we say 'The next day'.",
      'the / the / -':
        "Gap 3 is wrong: 'visited Colosseum' needs 'the'. Its name is 'the Colosseum'.",
      '- / a / -': "Gaps 2 and 3 are wrong. We say 'The next day' and 'the Colosseum'.",
    },
    more: 'The Colosseum is a vast stone arena in Rome, built nearly 2,000 years ago.',
    tip: 'In a story about the past, use these to show what came after: The next day it rained. The next week we flew back.',
  },
  'I read ___ article on ___ internet about ___ new film.': {
    why: "Gap 1: 'an article', because 'article' starts with a vowel sound. Gap 2: 'the internet', because there is only one. Gap 3: 'a new film', one film we have not talked about.",
    not: {
      'a / - / a':
        "Gaps 1 and 2 are wrong. 'Article' starts with a vowel sound, so 'an article'. And 'on internet' needs 'the'.",
      'a / the / the': "Gap 1 is wrong: 'article' starts with a vowel sound, so 'an article'.",
      'an / - / the': "Gap 2 is wrong: there is only one internet, so 'on the internet'.",
    },
    tip: 'Name your source in a simple way: I read an article in a magazine. I heard it on a podcast.',
  },
  'For the picnic, we need ___ loaf of bread, ___ cheese and ___ apple for each person.': {
    why: "Gap 1: 'a loaf of bread', because we count loaves. Gap 2: no article, because we do not count cheese here. Gap 3: 'an apple', because 'apple' starts with a vowel sound.",
    not: {
      'the / an / an':
        "Gap 2 is wrong: 'cheese' starts with 'ch', so 'an' cannot fit, and here we do not count cheese.",
      'the / - / a': "Gap 3 is wrong: 'apple' starts with a vowel sound, so 'an apple'.",
      'a / an / a':
        "Gaps 2 and 3 are wrong. 'An cheese' is wrong. And 'apple' needs 'an': 'an apple for each person'.",
    },
    more: 'A loaf is one whole piece of bread before it is cut. Bread and cheese are not counted, so we count a loaf or a slice.',
    tip: 'For a shopping list, count with containers and pieces: a loaf of bread, a carton of juice.',
  },
  'Leo is ___ tallest boy in our class. He is also ___ only one who can speak ___ Japanese.': {
    why: "Gap 1: 'the tallest boy', a superlative. Gap 2: 'the only one', because there is just one. Gap 3: no article, because languages take none.",
    not: {
      'a / an / -':
        "Gaps 1 and 2 are wrong. 'The tallest', because it is a superlative. And 'the only one', because there is just one.",
      'a / the / the':
        "Gaps 1 and 3 are wrong. 'The tallest boy'. And a language takes no article: 'speak Japanese'.",
      'the / an / the':
        "Gaps 2 and 3 are wrong. 'The only one', because no one else can. And 'speak Japanese', with no article.",
    },
    tip: "'The only one who ...' is a pattern worth learning: She is the only one who knows.",
  },
  'A: Can I have ___ glass of orange juice, please? B: Of course. Would you like ___ ice in it? A: No, thanks. And ___ sandwich, please.':
    {
      why: "Gap 1: 'a glass of orange juice', one glass. Gap 2: no article, because we do not count ice here. Gap 3: 'a sandwich', one more new thing.",
      not: {
        'the / an / a':
          "Gap 2 is wrong: we do not count ice here, so 'an ice' is wrong. 'Would you like ice?' needs no article.",
        'the / - / an': "Gap 3 is wrong: 'sandwich' starts with 's', so 'a sandwich'.",
        'a / an / an':
          "Gaps 2 and 3 are wrong. 'An ice' is wrong, because ice is not counted here. And 'a sandwich', because of the 's'.",
      },
      more: "In a café, use 'a' or 'an' for one item, and no article or 'some' for things we do not count: a sandwich, some ice.",
      tip: "Order politely: 'Can I have a ..., please?' or 'Could I have some ..., please?'",
    },
  'We have two cats and ___ dog. ___ cats sleep all day, but ___ dog likes to play.': {
    why: "Gap 1: 'a dog', new to the listener. Gap 2: 'The cats', the two cats we just named. Gap 3: 'the dog', that dog again.",
    not: {
      'the / - / the':
        "Gap 1 is wrong: 'have' brings in new things, so 'and a dog'. The cats are known by now, so 'The cats sleep all day'.",
      'the / the / a':
        "Gaps 1 and 3 are wrong. The dog is new at first, so 'a dog'. Then it is known, so 'the dog likes to play'.",
      'a / - / a': "Gap 3 is wrong: this is the same dog again, so 'the dog likes to play'.",
    },
    tip: "'The' also works for a group you have named: two cats, then the cats.",
  },
  'We had ___ lunch at one. It was ___ very good lunch, and ___ dessert was amazing.': {
    why: "Gap 1: no article, because a plain meal takes none: have lunch. Gap 2: 'a very good lunch', because a describing word lets a meal take 'a'. Gap 3: 'the dessert', the dessert at that lunch.",
    not: {
      'a / the / the':
        "Gaps 1 and 2 are wrong. 'Had lunch' takes no article. And with a describing word we say 'It was a very good lunch'.",
      'a / a / -': "Gap 1 is wrong: a plain meal takes no article, so 'We had lunch at one'.",
      '- / the / -':
        "Gap 2 is wrong: 'It was the very good lunch' is not English. With a describing word, we say 'a very good lunch'.",
    },
    more: 'Meals change with a describing word: have lunch, but have a quick lunch; have dinner, but have a lovely dinner.',
    tip: "Use 'a' with a meal when you describe it: We had a late dinner.",
  },
  'We must look after ___ environment. ___ plastic in ___ sea kills many animals.': {
    why: "Gap 1: 'the environment', the natural world we all share. Gap 2: no article, because we mean plastic in general. Gap 3: 'the sea', the usual way to talk about the oceans of the world.",
    not: {
      'an / the / the':
        "Gap 1 is wrong: for the natural world we all share, we say 'the environment'.",
      'an / - / a': "Gaps 1 and 3 are wrong. We say 'the environment' and 'in the sea'.",
      'the / the / a': "Gap 3 is wrong: we say 'in the sea', not 'in a sea'.",
    },
    more: 'We do not count plastic as a material: Plastic is useful. We can count things made of it: a plastic bag, two plastic bottles.',
    tip: "In a speech about nature, use 'the' for the world we share: the environment, the planet, the oceans.",
  },
  'They live in ___ flat on ___ fourth floor, but ___ lift is often broken.': {
    why: "Gap 1: 'a flat', new to the listener. Gap 2: 'the fourth floor', because 'fourth' points to one exact floor. Gap 3: 'the lift', the lift in their building.",
    not: {
      'the / a / the':
        "Gap 2 is wrong: 'fourth' points to one exact floor, so 'on the fourth floor'.",
      'the / the / -':
        "Gap 3 is wrong: 'lift is often broken' needs an article. It is the lift in their building, so 'the lift'.",
      'a / a / -': "Gaps 2 and 3 are wrong. We say 'on the fourth floor' and 'the lift'.",
    },
    more: "In British English a lift carries people between floors, and the floor at street level is the ground floor. Americans say 'elevator'.",
    tip: "Use 'the' with order words: the second floor, the third street after the bridge.",
  },
  '___ teachers work very hard. ___ teacher I like best is Mrs Shah.': {
    why: "Gap 1: no article, because we mean teachers in general. Gap 2: 'The teacher I like best', because 'I like best' points to one teacher.",
    not: {
      'a / the': "Gap 1 is wrong: 'a' cannot go before a plural like 'teachers'.",
      '- / a': "Gap 2 is wrong: 'I like best' points to one exact teacher, so 'The teacher'.",
      'a / a':
        "Both gaps are wrong. 'A teachers' is wrong, because it is plural. And 'the teacher I like best' needs 'the'.",
    },
    tip: "'Best' and 'most' point to one, so they take 'the': the subject I like best, the game I play most.",
  },
  'There was ___ full moon last night. ___ moon was so bright that I could read ___ book by its light.':
    {
      why: "Gap 1: 'a full moon', because 'There was' brings in something new, and 'full' gives one kind of moon. Gap 2: 'The moon', the one moon in the night sky. Gap 3: 'a book', any book.",
      not: {
        'the / a / a':
          "Gaps 1 and 2 are wrong. 'There was' brings in something new, so 'a full moon'. Then 'The moon', because there is only one.",
        'the / the / the':
          "Gap 1 is wrong: after 'There was', we use 'a' or 'an', so 'a full moon'.",
        'a / a / the':
          "Gap 2 is wrong: there is only one moon in the sky, so 'The moon was so bright'.",
      },
      more: "We say 'the moon', but with a describing word for its shape we can use 'a': a full moon, a half moon.",
      tip: "'There was a ...' is a good way to start describing a scene: There was a strong wind.",
    },
  'It was ___ cold, wet day. ___ rain did not stop, and ___ wind was very strong.': {
    why: "Gap 1: 'a cold, wet day', one day of many. Gap 2: 'The rain', the rain on that day. Gap 3: 'the wind', the wind on that day.",
    not: {
      'the / - / the': "Gap 1 is wrong: we describe one day of many, so 'It was a cold, wet day'.",
      'the / the / a':
        "Gaps 1 and 3 are wrong. 'It was a cold, wet day'. And 'a wind was very strong' is wrong: we mean the wind on that day.",
      'a / - / a': "Gap 3 is wrong: we mean the wind on that day, so 'the wind was very strong'.",
    },
    tip: "To describe one day's rain and wind, use 'the': The rain stopped at noon. The clouds cleared.",
  },
  'Our class went on ___ trip to ___ British Museum. We saw ___ Egyptian mummy.': {
    why: "Gap 1: 'a trip', one trip, new to the listener. Gap 2: 'the British Museum', a famous museum whose name takes 'the'. Gap 3: 'an Egyptian mummy', because 'Egyptian' starts with a vowel sound.",
    not: {
      'the / - / an': "Gap 2 is wrong: the museum's name takes 'the', so 'to the British Museum'.",
      'the / the / a':
        "Gap 3 is wrong: 'Egyptian' starts with a vowel sound, so 'an Egyptian mummy'.",
      'a / - / a':
        "Gaps 2 and 3 are wrong. 'The British Museum' takes 'the'. And 'an Egyptian mummy', because of the vowel sound.",
    },
    more: 'The British Museum is free to visit. Its Egyptian rooms hold many mummies and the Rosetta Stone.',
    tip: "Many museum names take 'the': the Science Museum, the National Gallery.",
  },
  'A: Have you got ___ pen I can borrow? B: Yes, there is one in ___ top drawer of my desk.': {
    why: "Gap 1: 'a pen', because speaker A wants any pen. Gap 2: 'the top drawer', because a desk has only one top drawer.",
    not: {
      '- / the': "Gap 1 is wrong: one pen needs an article. Speaker A wants any pen, so 'a pen'.",
      'a / a': "Gap 2 is wrong: a desk has only one top drawer, so 'the top drawer'.",
      '- / a':
        "Both gaps are wrong. 'Have you got pen' needs 'a'. And 'the top drawer', because there is only one.",
    },
    tip: "Ask to borrow things with 'a': Have you got a ruler I can borrow?",
  },
}
