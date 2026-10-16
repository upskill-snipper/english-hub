import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * A, An, The or Nothing?: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/article-a-an-the.ts). Written with AI on 16
 * October 2026 and checked against each question and its options, as the founder
 * decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'She works as ___ nurse at the local clinic.': {
    why: "Say 'nurse' and listen to the first sound. It is 'n', a consonant sound (not a, e, i, o, u). Before a consonant sound we use 'a'. After 'works as' we name one job, so: a nurse.",
    not: {
      an: "'An' is for words that start with a vowel sound. 'Nurse' starts with 'n', so we do not say 'an nurse'.",
      the: "'The' means one special nurse that you both know. Here we only say what her job is, so we use 'a'.",
      '- (no article)':
        "One person's job needs 'a' or 'an' before it. We cannot say 'works as nurse'. Say 'works as a nurse'.",
    },
    more: "After 'works as', 'is' or 'wants to be', we name a job with 'a' or 'an': a teacher, a driver, an engineer. The job is one of many, so we do not use 'the'.",
    tip: "When you write about a person's job, check the first sound of the job word: a nurse, a pilot, an artist.",
  },
  'My brother wants to be ___ engineer one day.': {
    why: "'Engineer' starts with the vowel sound 'e', like the start of 'egg'. Before a vowel sound we use 'an'. After 'wants to be' we name a job, so: an engineer.",
    not: {
      a: "'A' is for consonant sounds. 'Engineer' starts with the vowel sound 'e', so 'a engineer' is hard to say. Use 'an'.",
      the: "'The' is for one special engineer that you both know. Here we only name the job your brother wants, so we use 'an'.",
      '- (no article)':
        "One job word needs 'a' or 'an'. We cannot say 'wants to be engineer'. Say 'an engineer'.",
    },
    more: "Jobs that start with a vowel sound take 'an': an actor, an artist, an electrician. Jobs that start with a consonant sound take 'a': a baker, a pilot, a vet.",
    tip: "Say it aloud: 'an engineer'. If 'a engineer' feels hard to say, you need 'an'. That is the reason 'an' exists.",
  },
  'We waited for ___ hour before the train arrived.': {
    why: "We do not say the 'h' in 'hour'. It sounds like 'our', so the word starts with a vowel sound. Before a vowel sound we use 'an': an hour. The sound matters, not the first letter.",
    not: {
      a: "'A' is for consonant sounds. The 'h' in 'hour' is silent, so the word starts with a vowel sound. Use 'an'.",
      the: "'The hour' would point to one special hour that you both know. Here we only say how long we waited, so we use 'an'.",
      '- (no article)':
        "One hour needs 'a' or 'an' before it. We cannot say 'waited for hour'. Say 'waited for an hour'.",
    },
    more: "Only a few words begin with a silent 'h': hour, honest, honour and heir. Most 'h' words are said, so they take 'a': a house, a horse, a hotel.",
    tip: "Do not trust the first letter. Say the word aloud. If you cannot hear the 'h', use 'an'.",
  },
  'He is ___ university student in Manchester.': {
    why: "The word after the gap is 'university'. It begins with the letter u, but we say 'you-niversity'. The first sound is 'y', a consonant sound. So we use 'a': a university student.",
    not: {
      an: "'An' is for vowel sounds. 'University' starts with a 'you' sound, not a vowel sound, so 'an university' is wrong.",
      the: "'The' would mean one special student that you both know. Here we only say he is a student at a university, so we use 'a'.",
      '- (no article)':
        "When we say what one person is, we need 'a' or 'an'. We cannot say 'He is university student'. Say 'a university student'.",
    },
    more: "Some words start with the letter u but sound like 'you': university, uniform, useful, unit. They all take 'a', and so does 'European', which starts with the same sound. Words like 'umbrella' and 'uncle' start with 'uh', so they take 'an'.",
    tip: "The letter and the sound can be different. Always listen for the first sound of the very next word before you choose 'a' or 'an'.",
  },
  'There is ___ apple on the kitchen table.': {
    why: "'Apple' starts with the vowel sound 'a', as in 'cat'. Before a vowel sound we use 'an': an apple. 'There is' brings in one new thing, so we use 'an', not 'the'.",
    not: {
      a: "'A' is for consonant sounds. 'Apple' starts with a vowel sound, so we use 'an': 'an apple'.",
      the: "'The' is for something you both already know about. 'There is' tells us about something new, so 'the' does not fit.",
      '- (no article)':
        "We cannot leave out the article before one apple. Say 'an apple'. We say 'apples' with no article only when there are many.",
    },
    more: "The five vowel letters are a, e, i, o and u. Most words that start with them take 'an': an apple, an egg, an idea. Check the sound too, because a few words, like 'university', do not.",
    tip: "Use 'There is' or 'There are' to introduce new things in a room: There is an apple on the table. There are two apples.",
  },
  'Could I have ___ glass of water, please?': {
    why: "'Glass' starts with the consonant sound 'g'. Before a consonant sound we use 'a'. You are asking for one glass of water, so we count the glass: a glass of water.",
    not: {
      an: "'An' is for vowel sounds. 'Glass' starts with 'g', a consonant sound. Say 'a glass'.",
      the: "'The glass' would mean one special glass that you both know. You are asking for any glass, so use 'a'.",
      '- (no article)':
        "'Water' needs no article, but 'glass' is a thing we can count. We need 'a' before it: 'a glass of water'.",
    },
    more: "We can count a glass, a cup or a bottle, but we do not count water. So we say 'a glass of water', 'a cup of tea' and 'a bottle of milk'. The drink itself has no article.",
    tip: 'When you ask for a drink in a cafe, use this pattern: Could I have a (container) of (drink), please?',
  },
  'It took ___ honest answer to solve the problem.': {
    why: "The 'h' in 'honest' is silent. We say 'onest', so the word starts with a vowel sound. Before a vowel sound we use 'an': an honest answer.",
    not: {
      a: "'A' is for consonant sounds. 'Honest' has a silent 'h' and starts with the vowel sound 'o'. Use 'an'.",
      the: "'The honest answer' would point to one answer that you both know. Here we only describe the kind of answer that was needed, so we use 'an'.",
      '- (no article)':
        "One answer needs 'a' or 'an'. We cannot say 'It took honest answer'. Say 'an honest answer'.",
    },
    more: "The article goes with the very next word. Here that word is 'honest' (silent h), so: an honest answer. Without it you would say 'an answer'. With 'clear' you would say 'a clear answer'.",
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
    more: "Words that start with the letter u can go either way. 'Umbrella', 'uncle' and 'ugly' start with 'uh', so they take 'an'. 'University', 'uniform' and 'useful' start with 'you', so they take 'a'.",
    tip: "Learn u words in two lists: 'uh' words (an umbrella, an uncle) and 'you' words (a university, a uniform).",
  },
  'That was ___ useful tip for my homework.': {
    why: "'Useful' starts with the sound 'you': the letter u, but a 'y' sound. 'Y' is a consonant sound, so we use 'a': a useful tip. The article goes with the word right after it.",
    not: {
      an: "'An' is for vowel sounds. 'Useful' starts with a 'you' sound, which is a consonant sound, so 'an useful' is wrong.",
      the: "'The' means one special tip that you both know. Here we only say what kind of tip it was, so we say 'a useful tip'.",
      '- (no article)':
        "One tip needs 'a' or 'an' before it. We cannot say 'That was useful tip'. Say 'a useful tip'.",
    },
    more: "Say 'a' before these u words: a useful tip, a usual day, a user, a unit. They all start with 'you'. Words that start with 'eu' work the same way: a European, a euro.",
    tip: "Use 'That was a useful ...' to thank someone for help. Notice that 'a useful idea' keeps 'a', because the next word is 'useful', not 'idea'.",
  },
  'She gave me ___ orange from her bag.': {
    why: "'Orange' starts with the vowel sound 'o', as in 'on'. Before a vowel sound we use 'an': an orange. She gave me one orange, and it is new information, so we do not use 'the'.",
    not: {
      a: "'A' is for consonant sounds. 'Orange' starts with a vowel sound, so we need 'an'.",
      the: "'The orange' would mean one orange that we both know about. We hear about it for the first time, so we say 'an orange'.",
      '- (no article)':
        "One fruit needs 'a' or 'an'. We say 'orange' alone only for the colour or the flavour, not for one fruit. Say 'an orange'.",
    },
    more: "The article goes with the next word. 'An orange', but 'a big orange' or 'a sweet orange'. When you add a describing word, check the sound of that word.",
    tip: "Say the two words together: 'an orange'. When you put a word between them, say it again: 'a juicy orange'.",
  },
  'He drew ___ X on the map to mark the spot.': {
    why: "We say the letter X as 'ex', which starts with the vowel sound 'e'. With letters, we choose 'a' or 'an' by how the letter is said, not by how it looks. So: an X.",
    not: {
      a: "'A' is for consonant sounds. The letter X is said 'ex', which starts with a vowel sound, so we need 'an'.",
      the: "'The X' would mean an X that we both know about. He made a new mark, so we say 'an X'.",
      '- (no article)': "One mark needs 'a' or 'an' before it. We cannot say 'drew X'. Say 'an X'.",
    },
    more: "Letters follow the same rule. Say the letter's name: an F (ef), an M (em), an S (ess), an X (ex). But 'a B' (bee), 'a D' (dee) and 'a U' (you) take 'a'.",
    tip: 'For letters and short names, say the letter names aloud to choose: an MP, an FBI agent, a UK passport.',
  },
  'We need ___ one-way ticket to London.': {
    why: "We say 'one' as 'wun', so it starts with the consonant sound 'w'. Before a consonant sound we use 'a': a one-way ticket. We look at how the word sounds, not how it is spelled.",
    not: {
      an: "'An' is for vowel sounds. 'One' starts with a 'w' sound, which is a consonant sound, so 'an one-way ticket' is wrong.",
      the: "'The ticket' would mean one special ticket that you both know. You are asking for a ticket, so we use 'a'.",
      '- (no article)':
        "One ticket needs 'a' or 'an' before it. We cannot say 'We need one-way ticket'. Say 'a one-way ticket'.",
    },
    more: "Phrases that begin with 'one' take 'a' too: a one-day trip, a one-year course, a one-hour lesson. Only the sound counts, and 'one' starts with a consonant sound.",
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
    why: "'New' starts with the consonant sound 'n', so we use 'a'. You are telling the listener about the phone for the first time, so we say 'a new phone', not 'the new phone'.",
    not: {
      an: "'An' is for vowel sounds. 'New' starts with 'n', a consonant sound. Say 'a new phone'.",
      the: "'The new phone' would mean a phone that you both already know about. You tell someone about it for the first time, so use 'a'.",
      '- (no article)':
        "One phone needs 'a' or 'an' before it. We cannot say 'bought new phone'. We can leave out the article for plurals: 'I bought new shoes'.",
    },
    more: "When you say something for the first time, use 'a' or 'an'. When you mention it again, use 'the': I bought a new phone. The phone is very fast.",
    tip: "Start a story with 'a' or 'an', and then use 'the' when you talk about the same thing again.",
  },
  'My aunt is ___ MP.': {
    why: "We say the letters M and P as 'em-pee'. The first sound is 'e', a vowel sound, so we use 'an': an MP. For short names made of letters, we choose by how the first letter is said.",
    not: {
      a: "'A' is for consonant sounds. We say 'M' as 'em', which starts with a vowel sound, so we need 'an'.",
      the: "'The MP' would mean one MP that we both know about. Here we only say what job your aunt does, so we use 'an'.",
      '- (no article)':
        "One person's job needs 'a' or 'an' before it. We cannot say 'My aunt is MP'. Say 'an MP'.",
    },
    more: "MP means Member of Parliament. Short names follow the sound of the first letter: an MP, an NHS nurse, an FBI agent, but a UK visa, because U is said 'you'.",
    tip: 'Say each letter and listen to the first one. A, E, F, H, I, L, M, N, O, R, S and X start with a vowel sound when you say them.',
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
    more: "Check the word right after the article. 'A funny story', but 'an interesting story'. The noun is the same, 'story', but the describing word changes the article.",
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
    more: "Words that start with 'eu' usually sound like 'you', so they take 'a': a European, a euro, a eucalyptus tree. Compare 'an easy question', which starts with 'ee'.",
    tip: "A nationality word alone needs no article: 'My father is European.' With a noun after it, you need 'a': 'My father is a European citizen.'",
  },
  'We saw ___ elephant at the zoo.': {
    why: "'Elephant' starts with the vowel sound 'e', as in 'egg'. Before a vowel sound we use 'an': an elephant. We are mentioning this elephant for the first time.",
    not: {
      a: "'A' is for consonant sounds. 'Elephant' starts with a vowel sound, so we need 'an'.",
      the: "'The elephant' would mean one elephant that we both know. We tell you about it for the first time, so we use 'an'.",
      '- (no article)':
        "One elephant needs 'a' or 'an' before it. We cannot say 'We saw elephant'. For many, we say 'We saw elephants'.",
    },
    more: "Many animal names start with a vowel sound and take 'an': an elephant, an owl, an ant, an eagle. Others take 'a': a lion, a monkey, a zebra.",
    tip: "When you tell a story about a trip, introduce each new animal with 'a' or 'an': We saw an elephant and a monkey.",
  },
  'She needs ___ uniform for her new job.': {
    why: "'Uniform' begins with the letter u, but we say 'you-niform'. The first sound is 'y', a consonant sound. So we use 'a': a uniform.",
    not: {
      an: "'An' is for vowel sounds. 'Uniform' starts with a 'you' sound, so 'an uniform' is wrong. Say 'a uniform'.",
      the: "'The uniform' would mean one that you both know. We are saying what she needs for the first time, so we use 'a'.",
      '- (no article)':
        "One uniform needs 'a' or 'an'. We use 'uniform' alone only for a general idea, such as 'Pupils wear uniform'.",
    },
    more: "Words that start with 'uni' are usually said 'you-ni', so they take 'a': a uniform, a union, a unit, a unique idea. Words that start with 'uh' take 'an': an umbrella, an uncle.",
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
    more: "You can ask a friend: What did you have for breakfast? Answer with 'a' or 'an' for each single item: an egg, a banana, a slice of toast.",
    tip: "The word 'breakfast' itself has no article: 'I had breakfast at seven.' The things you ate need 'a' or 'an' when you count them: 'I had an egg and a banana.'",
  },
  'Please close ___ door when you leave.': {
    why: "'The door' means one door that both people know about: the door of this room. When the speaker and the listener can see or know the thing, we use 'the'.",
    not: {
      a: "'A door' means any door. The speaker means one door that you both can see, so we say 'the door'.",
      an: "'An' is for vowel sounds, and 'door' starts with 'd'. The speaker also means one special door, so we use 'the'.",
      '- (no article)':
        "One door needs an article before it. We cannot say 'close door'. Say 'the door'.",
    },
    more: "We use 'the' when the listener knows which thing we mean: the door, the window, the teacher, the lights. In a room, we often say 'the' for things everyone can see.",
    tip: "For polite requests about a known thing, use 'the' and 'please': Please close the door. Could you open the window?",
  },
  '___ sun rises in the east every morning.': {
    why: "There is only one sun, so we use 'the': the sun. We also use 'the' with other one-of-a-kind things: the moon, the sky, the world. Here 'the' stands at the start of the sentence.",
    not: {
      a: "'A sun' would mean one of many suns. We talk about our own sun, the only one we know, so we say 'the sun'.",
      an: "'An' is for vowel sounds, and 'sun' starts with 's'. There is only one sun, so we use 'the'.",
      '- (no article)':
        "'Sun rises in the east' is not normal. We use 'the' with one-of-a-kind things, so we say 'The sun rises in the east'.",
    },
    more: "After 'in', directions take 'the' too: in the east, in the north, in the south, in the west. These one-of-a-kind things take 'the' as well: the sun, the moon, the sky, the world.",
    tip: "In a story or description, use 'the' before one-of-a-kind things: The moon was bright. The sky was dark.",
  },
  'I read ___ book you lent me last week.': {
    why: "The words 'you lent me last week' tell us exactly which book. When the listener knows or can work out which one, we use 'the': the book.",
    not: {
      a: "'A book' means any book. You lent me one book, and the words after 'book' tell us which one, so we use 'the'.",
      an: "'An' is for vowel sounds, and 'book' starts with 'b'. This sentence needs 'the', because we know which book.",
      '- (no article)':
        "One book needs an article. We cannot say 'I read book'. Say 'the book you lent me'.",
    },
    more: "A phrase after the noun can make it exact, so we use 'the': the book you lent me, the girl in the red coat, the shop on the corner.",
    tip: "Say 'the' when you add details that show which one you mean: the film we saw, the bus to town.",
  },
  'She is ___ tallest student in the class.': {
    why: "We use 'the' with superlatives, the words that show the most or the best: tallest, biggest, fastest. There is only one tallest student in the class, so we say 'the tallest'.",
    not: {
      a: "'A tallest' is wrong. 'Tallest' points to one student above all the others, so we use 'the'.",
      an: "'An' is for vowel sounds, and 'tallest' starts with 't'. A superlative like 'tallest' needs 'the'.",
      '- (no article)':
        "'She is tallest student' is wrong. Before a superlative and its noun, we need 'the': 'the tallest student'.",
    },
    more: "Superlatives end in -est or use 'most': the tallest, the biggest, the most interesting. Before a superlative and a noun, we usually put 'the': the best film, the smallest room.",
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
    more: "With a describing word that names a type, we can use 'a': a full moon, a new moon. But for the moon itself in the sky, we say 'the moon'.",
    tip: "When you describe the night, use 'the' for things in the sky: The moon was bright and the stars were clear.",
  },
  'Can you pass me ___ salt, please?': {
    why: "At the table, both people know which salt: the salt that is there. When a thing is present and known to both people, we use 'the'.",
    not: {
      a: "'A salt' is not usual, because we do not count salt. You mean the salt on the table, so we say 'the salt'.",
      an: "'An' is for vowel sounds, and 'salt' starts with 's'. Salt is not counted either, so we do not use 'a' or 'an'.",
      '- (no article)':
        "'Pass me salt' is not the normal way to ask. We say 'the salt' for the salt on the table, or 'some salt'.",
    },
    more: "Things at the table are known to both people, so we say 'the': the salt, the water, the bread, the menu. For a little of something, you can say 'some': Can I have some salt?",
    tip: "At a meal, use 'the' to ask for something on the table: Could you pass the water, please?",
  },
  'He sailed across ___ Atlantic Ocean last year.': {
    why: "We use 'the' with the names of oceans and seas: the Atlantic Ocean, the Pacific, the Mediterranean Sea. There is only one Atlantic Ocean, so we say 'the'.",
    not: {
      a: "'A' means one of many. There is only one Atlantic Ocean, and ocean names take 'the', so we say 'the Atlantic Ocean'.",
      an: "'Atlantic' starts with a vowel sound, so you may choose 'an'. But there is only one Atlantic Ocean, so we use 'the'.",
      '- (no article)':
        "Names of oceans and seas take 'the'. 'Across Atlantic Ocean' is wrong. Say 'across the Atlantic Ocean'.",
    },
    more: "Rivers, oceans, seas and mountain ranges take 'the': the Thames, the Pacific, the Black Sea, the Alps. Most single mountains and lakes do not: Mount Everest, Lake Windermere.",
    tip: "Learn geography names with their 'the': the Atlantic, the Nile, the Alps. The 'the' is part of how we say the name.",
  },
  'They live near ___ River Thames.': {
    why: "We use 'the' with the names of rivers: the River Thames, the Nile, the Amazon. There is only one River Thames, so 'the' fits.",
    not: {
      a: "'A River Thames' would mean one of many rivers with that name. There is only one, and river names take 'the'.",
      an: "'An' is for vowel sounds, and 'River' starts with 'r'. River names take 'the'.",
      '- (no article)':
        "We cannot leave out 'the' before a river name. 'Near River Thames' is wrong. Say 'near the River Thames'.",
    },
    more: "Rivers take 'the' (the Thames, the Severn), but towns and cities do not (London, Oxford). Before the name, 'River' has a capital letter: the River Thames.",
    tip: "Say 'the' before a river's name, with or without the word 'River': the River Nile or the Nile.",
  },
  'I want to visit ___ United Kingdom next year.': {
    why: "Some country names take 'the': the United Kingdom, the United States, the Czech Republic, the Netherlands. They contain a word like Kingdom, States or Republic, or they are plural. We say 'the' before them.",
    not: {
      a: "'A United Kingdom' would mean one of many kingdoms. We mean one country with that name, and the name takes 'the'.",
      an: "'An' is for vowel sounds, but 'United' starts with a 'you' sound. Anyway, this country name takes 'the'.",
      '- (no article)':
        "Most countries take no article (France, Spain), but 'United Kingdom' is a special name. We say 'the United Kingdom'.",
    },
    more: "Most country names take no article: France, Poland, Egypt. But some take 'the': the United Kingdom, the United States, the Netherlands, the Philippines. Learn these as exceptions.",
    tip: "If a country name has 'Kingdom', 'States' or 'Republic' in it, or is plural, put 'the' before it. The short form 'the UK' keeps 'the' too.",
  },
  'She is ___ first person to finish the race.': {
    why: "We use 'the' before ordinal numbers like first, second and last. There is only one first person, so we say 'the first person'.",
    not: {
      a: "'A first person' is wrong here. There can be only one first, so we need 'the'.",
      an: "'An' is for vowel sounds, and 'first' starts with 'f'. Words like 'first' take 'the'.",
      '- (no article)':
        "'She is first person' is wrong. We need 'the' before 'first' and its noun: 'the first person'.",
    },
    more: "'The' also goes with last, next, only and same: the last bus, the next lesson, the only answer, the same colour. They all point to one exact thing.",
    tip: "To talk about a race or a queue, say 'the first', 'the second' and 'the last'.",
  },
  'Look at ___ sky. It is full of stars tonight.': {
    why: "There is only one sky above us, so we say 'the sky'. We use 'the' with one-of-a-kind things that everyone shares: the sky, the sun, the moon, the sea.",
    not: {
      a: "'A sky' is used only with a describing word, like 'a clear sky'. Here we mean the sky that we both can see.",
      an: "'An' is for vowel sounds, and 'sky' starts with 's'. We also mean the one sky we can both see, so we use 'the'.",
      '- (no article)':
        "We cannot say 'Look at sky' here. We use 'the' with the sky, the sun and the sea, because there is only one of each.",
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
    more: "Some places take no article when we use them for their main purpose: go to school, go to bed, go to work. Other places take 'the': go to the cinema, the park, the bank, the supermarket.",
    tip: "Use 'the' to talk about places in your town: I am going to the shop. We met at the library.",
  },
  '___ children love playing in parks.': {
    why: "This sentence is about children in general, not about some children we know. With plural nouns in general, English uses no article: children, dogs, books. 'Parks' is general and plural too.",
    not: {
      a: "'A' is only for one thing. 'Children' is plural (more than one child), so 'a children' is wrong.",
      an: "'An' is only for one thing, and 'children' is plural. For children in general, we use no article.",
      the: "'The children' would mean children that we both know. This sentence is about children everywhere, so we use no article.",
    },
    more: "Compare: 'Children love playing' (all children) and 'The children are playing' (children we can see). The first is a general fact. The second is about one group.",
    tip: 'For general facts about people, animals or things, use the plural with no article: Cats sleep a lot. Teachers work hard.',
  },
  'I really enjoy ___ music, especially jazz.': {
    why: "'Music' is a general idea here, and we do not count it. For general ideas and things we do not count, English uses no article: music, water, time. 'Jazz' has no article for the same reason.",
    not: {
      a: "'A music' is wrong, because we do not count music. We cannot say 'one music, two musics'. We use no article.",
      an: "'An' is only for single things that we can count. We do not count music, so we use no article.",
      the: "'The music' would mean music that we both know, such as the song playing now. This sentence is about music in general, so we use no article.",
    },
    more: "We say 'I enjoy the music' when we mean music we are hearing at this moment, for example at a party. For music in general, the word stands alone: I like music. I love jazz.",
    tip: 'To talk about your likes, name them with no article: I enjoy music, I like football, I love English.',
  },
  '___ Sara is coming to the party tonight.': {
    why: "'Sara' is a person's name. We do not use 'the', 'a' or 'an' before first names. We just say the name: Sara is coming.",
    not: {
      a: "People's names do not take 'a'. We say 'Sara', not 'a Sara'.",
      an: "'An' is for single things with a vowel sound. A person's name needs no article: 'Sara is coming'.",
      the: "'The Sara' sounds wrong. People's names take no 'the'. We say 'Sara is coming to the party'.",
    },
    more: "No article with first names (Sara, Tom) or with a title and name (Mr Khan, Dr Smith). But we use 'the' with a family name in the plural: the Khans means the Khan family.",
    tip: "Do not put 'the' or 'a' before a person's name when you speak or write: Sara is my friend.",
  },
  'We had ___ breakfast at seven o’clock.': {
    why: "In English we say 'have breakfast', 'have lunch' and 'have dinner' with no article. This is a fixed pattern, so we usually do not say 'a breakfast' or 'the breakfast'.",
    not: {
      a: "We say 'a breakfast' only with a describing word, like 'a big breakfast'. A plain 'We had breakfast' needs no article.",
      an: "'An' is for vowel sounds, and 'breakfast' starts with 'b'. For meals, we use no article.",
      the: "'The breakfast' would mean one breakfast that we both know, such as the hotel breakfast. Here we just say what meal we had.",
    },
    more: "With a describing word, we can use 'a': We had a big breakfast. We had a lovely lunch. With 'the' we point to a known meal: The breakfast at the hotel was great.",
    tip: "Say 'at seven o'clock' for times. Meals use no article: I have breakfast at seven, lunch at one and dinner at six.",
  },
  'She speaks ___ Arabic and English fluently.': {
    why: "The names of languages take no article: Arabic, English, French. We say 'She speaks Arabic', not 'the Arabic'. Here two languages are joined by 'and'.",
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
    more: "We use no article for general ideas and materials: Water is life. Time is money. Rice is cheap. When we point to some water we both know, we say 'the water': The water is cold.",
    tip: 'When you write a general fact in science or geography, start with the plain noun: Water boils at 100 degrees Celsius. Oil floats on water.',
  },
  'I live in ___ London with my family.': {
    why: "Most city and town names take no article: London, Paris, Cairo. So we say 'I live in London'. We do not say 'the London'.",
    not: {
      a: "'A London' would mean one of many cities called London. We mean the city itself, and its name takes no article.",
      an: "'An' is for single things with a vowel sound. 'London' is a city name, so it takes no article.",
      the: "'The London' is wrong for the city. City names take no 'the'. Compare 'the River Thames', which does.",
    },
    more: "City names take no article, and nor do most countries: London, Paris, France, Brazil. A few take 'the': the United Kingdom, the Netherlands.",
    tip: "Use 'in' with a city or a country: I live in London. She lives in France. No article is needed.",
  },
  '___ dogs are very loyal animals.': {
    why: "This sentence is about dogs in general. For plural nouns used in general, English uses no article: Dogs are loyal. Cats are clever. We do not say 'the dogs' or 'a dogs'.",
    not: {
      a: "'A' is for one thing, and 'dogs' is plural. 'A dogs' is wrong.",
      an: "'An' is for one thing, and 'dogs' is plural. 'An dogs' is wrong. For dogs in general, use no article.",
      the: "'The dogs' would mean dogs that we both know. This sentence says something true about all dogs, so we use no article.",
    },
    more: "We use no article for the whole group: Dogs are loyal. Birds can fly. Children need sleep. We use 'the' only when we mean dogs we know: The dogs next door are loud.",
    tip: "To describe a group, start with a plural noun and no article, then use 'are': Dogs are friendly. Cats are quiet.",
  },
  'He travels to ___ France every summer.': {
    why: "Most country names take no article: France, Spain, Brazil. We say 'travels to France'. The few exceptions, like the United Kingdom, have 'the' as part of the name.",
    not: {
      a: "'A France' is wrong, because there is only one France and its name is not counted. Use no article.",
      an: "'An' is for single things with a vowel sound. 'France' starts with 'f', and country names take no article.",
      the: "'The France' is wrong. Most countries take no 'the'. Only some, such as 'the United Kingdom', take it.",
    },
    more: 'Names of people, cities and most countries take no article: Sara, London, France. Learn the few country exceptions by heart: the United Kingdom, the United States, the Netherlands.',
    tip: "After 'to', 'in' or 'from', put the country name directly: to France, in Spain, from Poland.",
  },
  'They study ___ mathematics at school.': {
    why: "School subjects take no article: mathematics, history, English, science. We say 'They study mathematics', because a subject is a general area of study, not one thing we count.",
    not: {
      a: "'A mathematics' is wrong. A school subject has no article, and we do not count 'mathematics'.",
      an: "'An' is for single things we can count. 'Mathematics' is a subject name, so we use no article.",
      the: "We do not say 'the mathematics' for a school subject. A subject that we study takes no article: 'They study mathematics'.",
    },
    more: "In everyday British English we say 'maths': They study maths. Other subjects work the same: art, history, geography, science, French. One lesson can take 'the': the maths lesson.",
    tip: 'To talk about your timetable, name subjects with no article: I have maths and English on Monday.',
  },
  'We play ___ football after class.': {
    why: "Sports and games take no article after 'play': play football, play tennis, play chess. We say 'We play football', not 'the football'.",
    not: {
      a: "'A football' means the ball. For the sport itself, we use no article.",
      an: "'An' is for single things with a vowel sound, and 'football' starts with 'f'. The sport takes no article.",
      the: "'The football' would mean one ball or match that we both know. The sport in general takes no article.",
    },
    more: "Sports and games take no article: play football, tennis, chess, cards. With 'a' it is the thing: 'a football' is the ball you kick.",
    tip: "Use 'play' and the name of the sport: I play tennis on Saturdays.",
  },
  '___ honey is sweeter than sugar.': {
    why: 'This sentence compares two foods in general: honey and sugar. We do not count them, and we mean all honey and all sugar. So both have no article.',
    not: {
      a: "'A honey' is wrong, because we do not count honey. We say 'a jar of honey' when we count the jar.",
      an: "'An' is for single things we can count, and 'honey' starts with the consonant sound 'h'. We do not count honey, so we use no article.",
      the: "'The honey' would mean honey that we both know, like the jar on the table. Here we compare honey and sugar in general, so we use no article.",
    },
    more: "Look at the end of the sentence: 'than sugar' also has no article. We compare general things with no article on both sides: Tea is cheaper than coffee.",
    tip: 'When you compare materials or foods in general, use no article: Rice is cheaper than meat. Honey is sweeter than sugar.',
  },
  'My sister teaches ___ history at the college.': {
    why: "School and college subjects take no article: history, science, music. So we say 'teaches history'. 'The college' has 'the' because it is one college that we both know.",
    not: {
      a: "'A history' means one story or record, like 'a history of Rome'. For the school subject, we use no article.",
      an: "'An' is for single things with a vowel sound, and 'history' starts with the consonant sound 'h'. A subject takes no article.",
      the: "'The history' would mean the history of one thing, such as one town. The subject in general takes no article.",
    },
    more: 'Compare: She teaches history (the subject). She wrote a history of Rome (one book about the past).',
    tip: 'To say what someone teaches or studies, use the subject with no article: She teaches history. He studies chemistry.',
  },
  'I usually go to ___ bed before midnight.': {
    why: "'Go to bed' is a fixed phrase with no article. We say 'go to bed', 'go to school' and 'go to work' when we mean the normal activity, not the object.",
    not: {
      a: "'A bed' means one bed as an object, like in a shop. When we mean sleeping, 'go to bed' has no article.",
      an: "'An' is for vowel sounds, and 'bed' starts with 'b'. In the phrase 'go to bed' there is no article at all.",
      the: "'Go to the bed' would mean walking to one bed that you know. For the normal action of going to sleep, we say 'go to bed'.",
    },
    more: "Some places have no article when we use them for their normal purpose: go to bed, go to school, go to hospital (when you are ill), go to church. With 'the' we mean the building: go to the school to see the head teacher.",
    tip: 'Learn these as whole phrases: go to bed, go to school, go to work, go home. You do not need an article in any of them.',
  },
  '___ Mr Khan is our new teacher.': {
    why: "'Mr Khan' is a title and a name. We use no article before a person's title and name: Mr Khan, Mrs Smith, Dr Ali. We say 'Mr Khan is our new teacher'.",
    not: {
      a: "'A Mr Khan' is wrong. A title and name stands alone. We say 'Mr Khan'.",
      an: "'An' is for single things with a vowel sound. A title and name needs no article.",
      the: "'The Mr Khan' is wrong. We use 'the' only in special cases, like 'the Khans' for a family. Here we say 'Mr Khan'.",
    },
    more: "Titles with a name take no article: Mr Brown, Mrs Evans, Dr Ali, Professor Lee. But 'teacher' without his name needs a word like 'our' or 'the': our teacher, the teacher.",
    tip: "When you introduce a teacher, say 'This is Mr Khan, our new teacher.' You use 'a' or 'an' only for the job word: He is a teacher.",
  },
  '___ rice is grown in many warm countries.': {
    why: "This sentence is about rice in general. We do not count rice (we do not say 'one rice, two rices'). For a food or material in general, English uses no article.",
    not: {
      a: "'A rice' is wrong, because we do not count rice. We say 'a bowl of rice' when we count the bowl.",
      an: "'An' is for single things we can count. We do not count 'rice', so we use no article.",
      the: "'The rice' would mean rice that we both know, such as the rice on your plate. Here we say where rice is grown in general, so we use no article.",
    },
    more: "Many foods and materials are not counted: rice, bread, milk, water, gold, wood. We use no article for them in general: Bread is made from flour. We add 'some' or 'a piece of' for an amount.",
    tip: 'For facts about farming or food, begin with the plain noun: Wheat grows in cool places. Tea grows in warm, wet places.',
  },
  'She loves ___ flowers, especially roses.': {
    why: "She loves flowers in general, and 'roses' names a kind of flower. Plural nouns used in general take no article: She loves flowers. She likes roses.",
    not: {
      a: "'A' is for one thing, and 'flowers' is plural. 'A flowers' is wrong.",
      an: "'An' is for one thing, and 'flowers' is plural. For flowers in general, use no article.",
      the: "'The flowers' would mean flowers that we both know, like the flowers in her garden. 'Especially roses' shows she means flowers in general.",
    },
    more: "When we love or like a whole group, we use the plural with no article: I love dogs. He hates spiders. They like apples. 'The' appears when we point to some we know: I love the dogs next door.",
    tip: "Use 'love', 'like' or 'hate' with a plural noun and no article to talk about your tastes: I love flowers. I hate spiders.",
  },
  'We learn ___ English on Mondays.': {
    why: "Language names take no article: English, French, Arabic. So we say 'We learn English'. Here 'English' is the language that we study, not a thing we count.",
    not: {
      a: "'A' is for one counted thing. A language name is not counted, so we do not use 'a' with it.",
      an: "'English' starts with a vowel sound, so 'an' may seem right. But a language name takes no article: 'We learn English'.",
      the: "'The English' means the people of England, not the language. For the language, use no article.",
    },
    more: "'The English' means the people of England. 'English' with no article is the language. Nationalities work like this: the French (people) and French (language); the Spanish (people) and Spanish (language).",
    tip: "To talk about learning a language, use: I study English, She speaks French, We are learning Spanish. Do not add 'the'.",
  },
  'I saw ___ cat in the street earlier.': {
    why: "This cat is new information: you did not know about it before. When we mention a single thing for the first time, we use 'a' or 'an'. 'Cat' starts with the sound 'k', so we use 'a'.",
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
    more: "'There is' and 'There are' bring new things into the conversation, so they usually go with 'a' or 'an', a number, or no article for plurals: There is a school. There are two schools. There is milk in the fridge.",
    tip: "To describe a place, start with 'There is a ...' for each new thing: There is a shop, a park and a school on my road.",
  },
  'He bought ___ car. The car is bright red.': {
    why: "The first sentence brings in a car for the first time, so we use 'a'. In the second sentence we talk about the same car again, so it becomes 'The car'. First mention: 'a'. Second mention: 'the'.",
    not: {
      an: "'An' is for vowel sounds. 'Car' starts with the sound 'k', a consonant sound, so we say 'a car'.",
      the: "'The car' is for a car that you both know about. The next sentence says 'The car', so the first mention must be 'a'.",
      '- (no article)':
        "One car needs 'a' or 'an' before it. We cannot say 'He bought car'. Say 'a car'. The plural 'cars' would need no article.",
    },
    more: "This is the most useful article rule in stories: new thing = 'a' or 'an', same thing again = 'the'. He bought a car. The car is red. The listener learns about the car first, then knows which one you mean.",
    tip: "After you write a story, read it once just to check the articles. The first time you mention something use 'a' or 'an'. The next time use 'the'.",
  },
  'Would you like ___ cup of tea?': {
    why: "We are offering one cup of tea, and any cup will do. For one single, countable, non-specific thing we use 'a'. 'Cup' starts with the sound 'k', so: a cup of tea.",
    not: {
      an: "'An' is for vowel sounds. 'Cup' starts with the consonant sound 'k', so we say 'a cup of tea'.",
      the: "'The cup of tea' would mean one cup that you both know, for example the one on the table. Here we offer a new cup, so use 'a'.",
      '- (no article)':
        "'Tea' has no article, but we can count a cup. We need 'a' before it: 'a cup of tea'.",
    },
    more: "In offers, we use 'a' or 'an' with the container: Would you like a cup of tea? Would you like a glass of water? Would you like a piece of cake?",
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
    more: "A job needs 'a' or 'an', but a title with a name does not: She is a doctor. She is Dr Ali. Compare: He is a teacher. He is Mr Khan.",
    tip: "When someone asks 'What do you do?', answer with 'a' or 'an' and your job: I am a nurse. He is an engineer.",
  },
}
