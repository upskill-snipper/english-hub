import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Build the Question: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/question-formation.ts). Written with AI on 16
 * October 2026 and checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 240 questions in three tiers, 153 of
 * them shown with their answer first and 45 of them real questions from books
 * out of UK copyright, each explanation naming who asks it; the questions kept
 * from before were given new explanations for tiles without a capital or a
 * question mark. No explanation quotes another question where the two can share
 * a round. Written with AI and checked against each question, as the founder
 * decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'Who are you?': {
    why: "'Who' asks about a person, so it comes first. Then comes the verb 'are', and then the subject 'you'. In A Christmas Carol, Scrooge asks the ghost of Marley this question.",
    more: "With 'be', the verb itself moves in front of the subject: 'you are' becomes 'are you'.",
    tip: "Answer with a name or a role: 'I'm Sam' or 'I'm the new student'.",
  },
  'What is the matter?': {
    why: "'What' starts the question. Then the verb 'is' comes before its subject, 'the matter'. 'What is the matter?' means 'What is wrong?'. In A Christmas Carol, the Ghost of Christmas Past asks Scrooge this.",
    more: "People often say the short form, 'What's the matter?'. Both are kind ways to ask if someone has a problem.",
    tip: 'If someone looks upset, this is a kind question to ask.',
  },
  'What do you call this?': {
    why: "'What' comes first. Then come the helper 'do', the subject 'you' and the verb 'call'. In A Christmas Carol, old Joe asks this as he unrolls a bundle that a woman has brought him to sell.",
    more: "'What do you call this?' asks for the name of a thing. It is a useful question when you do not know a word in English.",
    tip: 'Point at the thing as you ask, and repeat the word when you hear it.',
  },
  'Would you like to go to school?': {
    why: "'Would' goes first, before the subject 'you'. Then come 'like' and 'to go to school'. In Jane Eyre, Mr Lloyd asks young Jane this, and her answer changes her life.",
    more: "'Would you like...?' is a polite way to offer something or to ask what someone wants. After 'like', use 'to' and a verb: 'to go', 'to eat'.",
    tip: "Answer 'Yes, I would' or 'Yes, I'd love to'. Never answer 'Yes, I like'.",
  },
  'Does he live here?': {
    why: "'He' takes 'does', so 'Does' starts the question. Then come the subject 'he', the verb 'live' and 'here'. In Jane Eyre, Jane asks Helen Burns this about Mr Brocklehurst, who runs their school.",
    more: "After 'does', the verb has no -s: 'live', not 'lives'. In the book, Helen answers that he lives two miles away.",
    tip: "Short answers: 'Yes, he does' or 'No, he doesn't'.",
  },
  'Is he a good man?': {
    why: "With 'be', the verb comes first: 'Is'. Then come the subject 'he' and 'a good man'. In Jane Eyre, Jane asks Helen Burns this about Mr Brocklehurst, the man in charge of Lowood school.",
    more: "Helen answers carefully: 'He is a clergyman, and is said to do a great deal of good.' She does not quite say yes.",
    tip: "Short answers: 'Yes, he is' or 'No, he isn't'.",
  },
  'Are you happy here?': {
    why: "A yes or no question with 'be' starts with the verb, 'Are'. Then comes the subject, 'you', and then 'happy here'. Jane asks Helen Burns this at Lowood school in Jane Eyre.",
    more: "In speech, people sometimes say a statement with a rising voice: 'You're happy here?'. A written question puts the verb first.",
    tip: "The short answers are 'Yes, I am' and 'No, I'm not'.",
  },
  'Is your book interesting?': {
    why: "With 'be', the verb comes first: 'Is'. Then comes the subject, 'your book', and then the describing word, 'interesting'. In Jane Eyre, Jane asks Helen Burns this, hoping to borrow the book.",
    more: "The subject can be more than one word, such as 'your book' or 'the new teacher'. Keep those words together after the verb.",
    tip: "A good answer gives a reason: 'Yes, it's about a girl who runs away.'",
  },
  'Do you want to see it?': {
    why: "The helper 'Do' starts the question, then the subject 'you', then 'want to see it'. In Dr Jekyll and Mr Hyde, Mr Utterson asks his clerk this about a letter.",
    more: "After 'want', use 'to' and a verb: 'want to see', 'want to go'.",
    tip: "With friends, 'Do you want...?' is fine. With adults you do not know, 'Would you like...?' sounds more polite.",
  },
  'What is his name?': {
    why: "'What' comes first, then the verb 'is', then the subject 'his name'. In Pride and Prejudice, Mr Bennet asks this about the rich young man who has come to live nearby.",
    more: "The answer in the book is one word: 'Bingley.' Short answers are normal in conversation.",
    tip: "To ask someone their own name, change 'his' to 'your'.",
  },
  'Can I have the carriage?': {
    why: "'Can' goes before the subject 'I'. Then come 'have' and 'the carriage'. In Pride and Prejudice, Jane Bennet asks her mother this before a visit. A carriage was pulled by horses.",
    more: "'Can I have...?' asks for something politely. It is the usual way to ask in a shop or a café.",
    tip: "Add 'please' at the end to make it more polite.",
  },
  'Is my father in town?': {
    why: "With 'be', the verb comes first: 'Is'. Then comes the subject, 'my father', and then where he is: 'in town'. In Pride and Prejudice, Elizabeth asks her sister Jane this.",
    more: "'In town' means in the city. In Pride and Prejudice it means London.",
    tip: "Keep 'in town' together at the end. A place usually comes last in a question.",
  },
  'How are you all?': {
    why: "'How' comes first, then the verb 'are', then the subject 'you all'. In Pride and Prejudice, Elizabeth asks this about her family at home.",
    more: "'You all' means every one of you. It is a friendly way to ask about a whole group.",
    tip: "Answer for the group: 'We're all fine, thanks.'",
  },
  'What do you think?': {
    why: "'What' asks for an opinion, so it comes first. Then come the helper 'do', the subject 'you' and the verb 'think'. In Pride and Prejudice, Lydia says this just before she shares her news.",
    more: "People use this to ask for an opinion: 'I love this song. What about you?' works the same way.",
    tip: "Answer with 'I think...': 'I think it's great.'",
  },
  'Do you hear that?': {
    why: "The helper 'Do' starts the question, then the subject 'you', then the verb 'hear' and 'that'. In Great Expectations, Pip's sister says this to him at Christmas dinner.",
    more: "'Do you hear that?' can also mean 'Listen to this', said to make a point, as Pip's sister does.",
    tip: "Short answers: 'Yes, I do' or 'No, I don't'.",
  },
  'Are you ready to play?': {
    why: "With 'be', the verb comes first: 'Are'. Then the subject 'you', and then 'ready to play'. In Great Expectations, Miss Havisham asks Pip this.",
    more: "After 'ready', use 'to' and a verb: 'ready to play', 'ready to leave'.",
    tip: "Answer 'Yes, I'm ready' or 'Not yet'.",
  },
  'Can I help you?': {
    why: "'Can' goes before the subject 'I'. Then come the verb 'help' and 'you'. In Great Expectations, Pip offers help to the young man he has just fought.",
    more: 'Shop assistants say this too. It offers help.',
    tip: "Accept with 'Yes, please' or refuse with 'No, thanks, I'm fine'.",
  },
  'What do you want?': {
    why: "'What' comes first, then the helper 'do', the subject 'you' and the verb 'want'. In Great Expectations, Sarah Pocket asks Pip this at the gate.",
    more: 'Said sharply, this question can sound rude, as it does in the book. A kind voice changes it.',
    tip: "With adults you do not know, choose a softer question with 'would'.",
  },
  'Where is Mollie?': {
    why: "'Where' asks about a place, so it comes first. Then the verb 'is', then the subject 'Mollie'. In Animal Farm, someone shouts this after the battle, because the horse Mollie is missing.",
    more: 'Names always keep their capital letter, wherever they are in a question.',
    tip: "Answer with a place: 'She's in the stable.'",
  },
  'Who is there?': {
    why: "'Who' asks about a person, so it comes first. Then come the verb 'is' and the word 'there'. In Frankenstein, the old blind man says this when someone knocks at his door.",
    more: 'People say this when they hear a knock but cannot see who it is.',
    tip: "Answer with your name: 'It's me, Sam.'",
  },
  'What do you mean?': {
    why: "'What' comes first, then the helper 'do', the subject 'you' and the verb 'mean'. In Frankenstein, Victor says this to the sailors who want to turn back.",
    more: 'Use this question when you do not understand what someone is trying to say.',
    tip: "'Sorry, what do you mean?' is softer and very polite.",
  },
  'Where do you live?': {
    why: "The answer, 'I live in Leeds', tells a place, so the question starts with 'Where'. Then come 'do', the subject 'you' and the verb 'live'. 'Live' stays the same as in the answer.",
    more: "'Do' is a helper verb here. It has no meaning of its own; it only makes the question. For he or she, use 'does'.",
    tip: 'Check a question with its answer: the answer keeps the same main verb.',
  },
  'What do these words mean?': {
    why: "'What' comes first. Then come 'do', the subject 'these words' and the verb 'mean'. 'These words' is plural, so the helper is 'do'.",
    more: 'The helper changes with the subject. For one thing it takes an -s, and the main verb still stays the same.',
    tip: 'This question is very useful in class. Point at the words as you ask.',
  },
  'What does this word mean?': {
    why: "'What' comes first. Then come the helper 'does', the subject 'this word' and the verb 'mean'. 'This word' means one word, so the helper is 'does', with the -s.",
    more: "The -s goes on 'does', not on 'mean'. We never say 'does... means'.",
    tip: 'Use this question whenever you meet a new word. It is one of the most useful questions in English.',
  },
  'Are you ready to go?': {
    why: "With 'be', the verb comes first: 'Are'. Then the subject 'you', and then 'ready to go'. No 'do' is needed with 'be'.",
    more: "Without 'are' at the start, 'you are ready to go' is a statement. People sometimes say it with a rising voice, but a written question puts the verb first.",
    tip: "Short answers: 'Yes, I am' or 'Not yet'.",
  },
  'Is this seat free?': {
    why: "With 'be', the verb comes first: 'Is'. Then comes the subject, 'this seat', and then 'free'. 'Free' here means that nobody is sitting there.",
    more: "'Free' can also mean 'costing nothing'. In this question it means 'not taken'.",
    tip: "On a bus or in a café, say 'Excuse me' before you ask.",
  },
  'How are your parents?': {
    why: "The answer, 'They are very well', says how they are, so the question starts with 'How'. Then come the verb 'are' and the subject 'your parents'.",
    more: "'How are...?' asks about someone's health or how they are getting on. It is a kind question about someone's family.",
    tip: "'Your parents' is plural, so the verb is 'are'. For one person, use 'is'.",
  },
  'Would you like some tea?': {
    why: "'Would' goes first, then the subject 'you', then 'like some tea'. It is a polite offer.",
    more: "'Some' is normal in offers, even in a question: 'Would you like some cake?'",
    tip: "Accept with 'Yes, please' and refuse with 'No, thank you'.",
  },
  'Can she speak three languages?': {
    why: "The answer starts 'Yes, she can', so the question starts with 'Can'. Then come the subject 'she' and the verb 'speak'. 'Can' never takes an -s, even with 'she'.",
    more: "After 'can', the verb stays in its base form: 'speak', not 'speaks'.",
    tip: "Answer a 'Can...?' question with 'can' or 'can't'.",
  },
  'How do you spell your surname?': {
    why: "'How' comes first, then the helper 'do', the subject 'you' and the verb 'spell'. Your surname is your family name.",
    more: 'People ask this in offices, at school and on the phone. Answer by saying the letters one by one.',
    tip: 'Practise spelling your own name with the English names of the letters. You will need it often.',
  },
  'Where does your sister work?': {
    why: "The answer, 'She works in a hospital', tells a place, so the question starts with 'Where'. Then come 'does', the subject 'your sister' and 'work'. 'Your sister' means 'she', so the helper is 'does'.",
    more: "The -s moves from 'works' in the answer to 'does' in the question. The main verb, 'work', has no -s.",
    tip: "Check the subject: he, she and it take 'does'; I, you, we and they take 'do'.",
  },
  'Can you help me?': {
    why: "'Can' goes before the subject 'you'. Then come the verb 'help' and 'me'. It is a simple, polite request.",
    more: "'Could' instead of 'can' makes a request a little more polite. Both are fine in class.",
    tip: "Add 'please' for extra politeness.",
  },
  "What's your name?": {
    why: "'What's' is short for 'What is'. 'What' comes first, then 'is', then the subject 'your name'. The answer, 'My name's Ola', has the same words in statement order.",
    more: "In the statement, the subject comes first: 'My name is Ola.' In the question, 'is' comes before 'your name'.",
    tip: "When someone tells you their name, use it: 'Nice to meet you, Ola.'",
  },
  'How old are you?': {
    why: "The answer gives an age, so the question starts with 'How old'. 'How' and 'old' stay together. Then come the verb 'are' and the subject 'you'.",
    more: "In English, age uses 'be': 'I am twelve', not 'I have twelve years'. So the question uses 'are'.",
    tip: 'Some adults do not like this question. Between young people it is fine.',
  },
  'How old is your brother?': {
    why: "'How old' asks about age and stays together at the start. Then come the verb 'is' and the subject 'your brother'. One brother takes 'is'.",
    more: "The answer, 'He's sixteen', uses 'he' for 'your brother'.",
    tip: "Ask about other people's ages with 'is' for one person and 'are' for more than one.",
  },
  'Where are you from?': {
    why: "The answer names a country, so the question starts with 'Where'. Then come the verb 'are' and the subject 'you'. The little word 'from' goes at the end.",
    more: "Words like 'from', 'to' and 'with' often sit at the end of English questions.",
    tip: "Answer with a country or a town: 'I'm from Krakow.'",
  },
  'Where is the library?': {
    why: "The answer tells a place, so the question starts with 'Where'. Then come the verb 'is' and the subject 'the library'.",
    more: "The short form 'Where's' is common in speech.",
    tip: "Start with 'Excuse me' when you ask a stranger.",
  },
  'Is it cold outside?': {
    why: "With 'be', the verb comes first: 'Is'. Then the subject 'it', then 'cold' and 'outside'. 'It' here means the weather.",
    more: "English uses 'it' for the weather: 'It's cold', 'It's raining'.",
    tip: "Short answers: 'Yes, it is' or 'No, it isn't'.",
  },
  'Are you hungry?': {
    why: "The answer starts 'Yes, I am', so the question starts with the same verb, 'Are'. Then come the subject 'you' and 'hungry'.",
    more: "'I could eat a horse' is a funny British way to say you are very hungry.",
    tip: "In English we say 'I am hungry', with 'be', not 'I have hunger'.",
  },
  'Is he your brother?': {
    why: "The answer starts 'Yes, he is', so the question starts with 'Is'. Then comes the subject 'he', then 'your brother'.",
    more: "In a statement the order is 'He is your brother'. In the question, 'is' moves in front of 'he'.",
    tip: "To ask about two people, change 'is he' to 'are they'.",
  },
  'Are they your friends?': {
    why: "With 'be', the verb comes first: 'Are'. Then comes the subject 'they', and then 'your friends'. 'They' is plural, so the verb is 'are'.",
    more: "In the statement the order is 'They are your friends'. The question swaps the first two words.",
    tip: "Short answers: 'Yes, they are' or 'No, they aren't'.",
  },
  'Is it your birthday?': {
    why: "The answer starts with 'Yes', so this is a yes or no question, and with 'be' it starts with the verb 'Is'. Then come the subject 'it' and 'your birthday'.",
    more: "'It' here means 'today'. English often uses 'it' for days, times and dates: 'It's Monday', 'It's my birthday'.",
    tip: "If the answer is yes, say 'Happy birthday'.",
  },
  'Do you like pizza?': {
    why: "The answer, 'Yes, I love it', answers a yes or no question, so the question starts with the helper 'Do'. Then come the subject 'you' and the verb 'like'.",
    more: "'Do you like...?' asks what someone enjoys in general. It is not an offer of pizza now.",
    tip: "Short answers: 'Yes, I do' or 'No, I don't'. 'I love it' is a warmer yes.",
  },
  'Does she like cats?': {
    why: "The answer says 'she doesn't', so the question uses 'does' for 'she'. 'Does' comes first, then the subject 'she', then 'like cats'. The verb 'like' has no -s, because 'does' already has it.",
    more: "Never put the -s on both verbs. 'Does she likes' is a common mistake.",
    tip: "Match the short answer to the question: 'Does she...?' 'Yes, she does' or 'No, she doesn't'.",
  },
  'Do you have a pet?': {
    why: "This is a yes or no question, so it starts with the helper 'Do'. Then come the subject 'you' and the verb 'have'. The answer names the pet: a rabbit.",
    more: "British English also says 'Have you got a pet?'. Both questions mean the same.",
    tip: "Add a detail to your answer, such as the pet's name. It keeps the chat going.",
  },
  'Do you play football?': {
    why: "The helper 'Do' starts the question, then the subject 'you', then the verb 'play' and 'football'. No 'the' before a sport.",
    more: "We 'play' games with a ball, such as football and tennis. We 'go' swimming and 'do' judo.",
    tip: "Short answers: 'Yes, I do' or 'No, I don't'.",
  },
  'Does he speak English?': {
    why: "'He' takes 'does', so 'Does' starts the question. Then come the subject 'he' and the verb 'speak'. 'Speak' has no -s after 'does'.",
    more: 'Names of languages always have a capital letter in English: English, French, Arabic.',
    tip: "Answer 'Yes, he does' or 'Yes, a little'.",
  },
  'Do they live near you?': {
    why: "'They' takes 'do', so 'Do' starts the question. Then come the subject 'they', the verb 'live' and 'near you'.",
    more: "'Near you' means close to where you live. The place goes at the end.",
    tip: "Short answers: 'Yes, they do' or 'No, they don't'.",
  },
  'What sports do you like?': {
    why: "'What sports' asks you to name sports, and the two words stay together at the start. Then come 'do', the subject 'you' and the verb 'like'.",
    more: "'What' can go with a noun: what sports, what music, what colour. The noun comes straight after 'what'.",
    tip: "Answer with names: 'I like tennis and swimming.'",
  },
  'What time is it?': {
    why: "The answer gives a time on the clock, so the question starts with 'What time'. Then come the verb 'is' and the word 'it'.",
    more: "English uses 'it' for the time: 'It's half past three', 'It's ten o'clock'.",
    tip: "A polite version for a stranger: 'Excuse me, have you got the time?'",
  },
  'What time do you get up?': {
    why: "The answer is a clock time, so the question starts with 'What time'. Then come 'do', the subject 'you' and 'get up'. 'Get up' is one verb in two parts.",
    more: "In verbs like 'get up', the little word stays with its verb: 'get up', not 'up get'.",
    tip: "Answer with 'at': 'At seven o'clock.'",
  },
  'Where do you go to school?': {
    why: "The answer names a school, a place, so the question starts with 'Where'. Then come 'do', the subject 'you' and 'go to school'.",
    more: "We say 'go to school' with no 'the' when we mean going there to learn.",
    tip: "Answer with the school's name: 'I go to Park Lane School.'",
  },
  'When is your birthday?': {
    why: "The answer is a date, so the question starts with 'When'. Then come the verb 'is' and the subject 'your birthday'.",
    more: "Use 'on' with dates: 'It's on 4 June.' Use 'in' with months: 'It's in June.'",
    tip: "In Britain people say dates as 'the fourth of June'.",
  },
  'Who is your teacher?': {
    why: "The answer names a person, so the question starts with 'Who'. Then come the verb 'is' and the subject 'your teacher'.",
    more: 'Teachers in Britain are called by title and family name, such as Mr Okafor or Ms Shah.',
    tip: "To ask about more than one teacher, change 'is' to 'are'.",
  },
  'How many people are in your family?': {
    why: "The answer is a number, so the question starts with 'How many people'. Those three words stay together. Then come the verb 'are' and 'in your family'.",
    more: "'How many' goes with things you can count: people, brothers, books. 'People' is plural, so the verb is 'are'.",
    tip: "Answer with the number and then the people: 'Five: my parents, my two brothers and me.'",
  },
  'Can you ride a bike?': {
    why: "The answer is 'Yes, I can', so the question starts with 'Can'. Then come the subject 'you' and the verb 'ride'.",
    more: "'Can' asks about ability. After 'can', the verb stays in its base form.",
    tip: "We 'ride' a bike or a horse, but we 'drive' a car.",
  },
  'Can I go to the toilet?': {
    why: "'Can' goes before the subject 'I' to ask permission. Then come 'go' and 'to the toilet'.",
    more: "In British schools this is a very common question. 'May I...?' is a little more formal.",
    tip: "Add 'please' when you ask a teacher.",
  },
  'Can we play outside?': {
    why: "'Can' goes before the subject 'we' to ask permission. Then come the verb 'play' and 'outside'.",
    more: "'We' includes you and the people with you. The question asks permission for all of you.",
    tip: "Short answers: 'Yes, you can' or 'No, you can't'.",
  },
  'Are there any biscuits?': {
    why: "To ask if something exists, start with 'Are there' for plural things. 'Are' comes first, then 'there', then 'any biscuits'.",
    more: "'Any' is normal in questions with 'there': 'Are there any chairs?' In a statement we say 'some'.",
    tip: "Short answers: 'Yes, there are' or 'No, there aren't'.",
  },
  'Is there any milk?': {
    why: "Milk is not counted one by one, so we use 'Is there', not 'Are there'. 'Is' comes first, then 'there', then 'any milk'.",
    more: "Use 'is there' with things like milk, water and money, and 'are there' with things you count.",
    tip: "Short answers: 'Yes, there is' or 'No, there isn't'.",
  },
  'Who is that boy?': {
    why: "The answer names a person, so the question starts with 'Who'. Then come the verb 'is' and the subject 'that boy'.",
    more: "'That' points at someone further away. 'This' points at someone close to you.",
    tip: "Point politely, or say where he is: 'the boy by the door'.",
  },
  'What is your phone number?': {
    why: "'What' comes first, then the verb 'is', then the subject 'your phone number'. The three words of the subject stay together.",
    more: "British people say phone numbers one figure at a time, and often 'oh' for zero.",
    tip: 'Only give your number to people you know and trust.',
  },
  'Where are my keys?': {
    why: "The answer tells a place, so the question starts with 'Where'. Then come the verb 'are' and the subject 'my keys'. 'Keys' is plural, so the verb is 'are'.",
    more: "For one key, the verb changes to 'is'.",
    tip: 'Answer with a place word: on the table, in your bag, under the sofa.',
  },
  'Do you speak French?': {
    why: "The helper 'Do' starts the question, then the subject 'you', then the verb 'speak' and 'French'.",
    more: 'Names of languages always have a capital letter in English.',
    tip: "A useful honest answer: 'A little.'",
  },
  'Is your sister at home?': {
    why: "With 'be', the verb comes first: 'Is'. Then comes the subject 'your sister', and then the place: 'at home'.",
    more: "We say 'at home' for being in your house, and 'go home' with no 'to'.",
    tip: "The answer, 'No, she's at work', gives a reason as well as no. It is helpful.",
  },
  'Are you a student?': {
    why: "With 'be', the verb comes first: 'Are'. Then come the subject 'you' and 'a student'.",
    more: "Jobs and roles take 'a' or 'an' in English: a student, an engineer.",
    tip: "Short answers: 'Yes, I am' or 'No, I'm not'.",
  },
  'What does your dad do?': {
    why: "This question asks about a job, so the answer is a job: 'He's a bus driver.' 'What' comes first, then 'does', the subject 'your dad', and the verb 'do'.",
    more: "This question has two forms of 'do': 'does' is the helper, and 'do' at the end is the main verb. Together they ask what someone's job is.",
    tip: "Answer with 'He's a...' or 'He works in...'.",
  },
  'How do you get to school?': {
    why: "'How' asks about the way you travel, so it comes first. Then come 'do', the subject 'you' and 'get to school'.",
    more: "Answers to this question: 'I walk', 'By bus', 'My mum drives me'.",
    tip: "Use 'by' with transport: by bus, by train, by bike. But we say 'on foot'.",
  },
  'Where do your grandparents live?': {
    why: "The answer names a city, so the question starts with 'Where'. Then come 'do', the subject 'your grandparents' and the verb 'live'.",
    more: "'Your grandparents' means 'they', so the helper is 'do', not 'does'.",
    tip: 'A long subject still sits between the helper and the main verb.',
  },
  'Do you like my new shoes?': {
    why: "This yes or no question starts with the helper 'Do'. Then come the subject 'you', the verb 'like' and 'my new shoes'. 'New' comes before 'shoes'.",
    more: 'In English, describing words come before the noun: new shoes, a red bike.',
    tip: "If you like them, say so: 'Yes, they're great.'",
  },
  'Is she your teacher?': {
    why: "With 'be', the verb comes first: 'Is'. Then come the subject 'she' and 'your teacher'.",
    more: "The statement order is 'She is your teacher'. In the question, 'is' moves to the front.",
    tip: "Short answers: 'Yes, she is' or 'No, she isn't'.",
  },
  'What colour is your bike?': {
    why: "The answer is a colour, so the question starts with 'What colour'. Those two words stay together. Then come the verb 'is' and the subject 'your bike'.",
    more: "'Colour' is the British spelling, with 'ou'.",
    tip: "Answer with 'It's...': 'It's red.'",
  },
  'Can you open the door?': {
    why: "'Can' goes before the subject 'you'. Then come the verb 'open' and 'the door'. It is a request.",
    more: "Here 'Can you...?' asks someone to do something, not about their ability.",
    tip: "Add 'please' at the end to make it polite.",
  },
  'Would you like a drink?': {
    why: "'Would' goes first, before the subject 'you'. Then come 'like' and 'a drink'. It is a polite offer.",
    more: 'In Britain, a host often asks this as soon as a guest arrives.',
    tip: "Answer 'Yes, please' and say which drink.",
  },
  'What would you like?': {
    why: "The answer names food, so the question starts with 'What'. Then come 'would', the subject 'you' and 'like'. It is how a waiter or an assistant asks for your order.",
    more: "With 'would', the question is softer and more polite than one with 'want'.",
    tip: "Answer with the thing and 'please': 'A cheese sandwich, please.'",
  },
  "Where's the toilet?": {
    why: "'Where's' is short for 'Where is'. 'Where' comes first, then 'is', then the subject 'the toilet'.",
    more: "In Britain people also say 'loo' (casual) or 'toilets'. In a shop, ask for 'the toilets'.",
    tip: "Start with 'Excuse me' when you ask in a shop or a café.",
  },
  'How much is this?': {
    why: "The answer is a price, so the question starts with 'How much'. Then come the verb 'is' and 'this'.",
    more: "'How much' asks about price and amounts you do not count. 'How many' is for things you count.",
    tip: 'Point at the thing as you ask in a shop.',
  },
  'What day is it?': {
    why: "The answer is a day of the week, so the question starts with 'What day'. Then come the verb 'is' and 'it'.",
    more: "English uses 'it' for days and dates: 'It's Thursday.'",
    tip: "To ask the date, say 'What's the date?'.",
  },
  'Is your mum a teacher?': {
    why: "With 'be', the verb comes first: 'Is'. Then come the subject 'your mum' and 'a teacher'.",
    more: "A job takes 'a' or 'an': a teacher, a nurse, an engineer.",
    tip: "Short answers: 'Yes, she is' or 'No, she isn't'.",
  },
  'Do you walk to school?': {
    why: "This yes or no question starts with the helper 'Do'. Then come the subject 'you', the verb 'walk' and 'to school'.",
    more: "We say 'walk to school', not 'walk at school'. 'To' shows where you are going.",
    tip: "Short answers: 'Yes, I do' or 'No, I don't'.",
  },
  'When will you come to see me?': {
    why: "'When' asks about a time, so it comes first. Then 'will' comes before the subject 'you', and then 'come to see me'. In A Christmas Carol, nobody ever says this friendly question to Scrooge: he has no friends who visit.",
    more: "'Will' makes questions about the future. After 'will', the verb stays in its base form: 'come', not 'comes'.",
    tip: 'An invitation can be a question too. It sounds warm and friendly.',
  },
  'Why did you get married?': {
    why: "'Why' asks for a reason, so it comes first. Then 'did' shows the past, before the subject 'you'. The verb stays in its base form: 'get married'. In A Christmas Carol, Scrooge asks his nephew Fred this.",
    more: "Fred's answer is 'Because I fell in love.' Answers to 'Why?' often start with 'Because'.",
    tip: "After 'did', never use the past form: 'did you get', not 'did you got'.",
  },
  'What do you want with me?': {
    why: "'What' comes first, then the helper 'do', the subject 'you' and the verb 'want'. 'With me' goes at the end. In A Christmas Carol, Scrooge asks Marley's ghost this.",
    more: "'What do you want with me?' asks why someone has come to see you. Said like Scrooge, it sounds cold.",
    tip: "Keep small groups of words together, such as 'with me', and put them where they belong.",
  },
  'Why do you doubt your senses?': {
    why: "'Why' comes first, then the helper 'do', the subject 'you' and the verb 'doubt'. In A Christmas Carol, Marley's ghost asks Scrooge this, because Scrooge will not believe what he sees.",
    more: "To 'doubt' something is to feel it may not be true. Your 'senses' are sight, hearing, smell, taste and touch.",
    tip: 'Learn new verbs inside a question. It helps you remember both the verb and the word order.',
  },
  'Will you do me that favour?': {
    why: "'Will' comes first, before the subject 'you'. Then come 'do me that favour'. In A Christmas Carol, the changed Scrooge asks this when he promises a large gift of money to help the poor.",
    more: "'Do someone a favour' means help them with something. 'Favour' is the British spelling.",
    tip: "'Will you...?' can make a request. 'Could you...?' sounds a little more polite today.",
  },
  'What does he look like?': {
    why: "'What' comes first, then 'does', the subject 'he' and 'look like'. 'Look like' asks about appearance. In Jane Eyre, Jane asks Bessie this about her cousin John.",
    more: "Answer with how the person looks: 'He's very tall with dark hair.' Do not answer with what he likes.",
    tip: "'What does he look like?' asks about looks. 'What is he like?' asks about character.",
  },
  'What is it about?': {
    why: "'What' comes first, then the verb 'is' and the subject 'it'. The little word 'about' goes at the end. In Jane Eyre, Jane asks Helen Burns this about her book.",
    more: "Words like 'about', 'for' and 'from' often end an English question.",
    tip: "Answer with the topic: 'It's about a prince who leaves home.'",
  },
  'Can you tell me some of them?': {
    why: "'Can' comes before the subject 'you'. Then come 'tell me' and 'some of them'. In Jane Eyre, Mr Lloyd asks Jane this about the things that make her unhappy.",
    more: "'Tell' is followed by the person: 'tell me', 'tell her'. Then comes what you tell.",
    tip: "'Can you tell me...?' is a gentle way to ask someone to share something.",
  },
  'How did you know me?': {
    why: "'How' comes first, then 'did' for the past, then the subject 'you' and the verb 'know' in its base form. In Dr Jekyll and Mr Hyde, Mr Hyde asks Mr Utterson this when they meet at a door.",
    more: "After 'did', the verb stays in its base form: 'know', not 'knew'.",
    tip: "Check the main verb in every question with 'did'. It never ends in -ed and is never a past form.",
  },
  'Have you seen him?': {
    why: "'Have' comes first, before the subject 'you'. Then come the past participle 'seen' and 'him'. In Dr Jekyll and Mr Hyde, Mr Utterson asks Dr Lanyon this about Jekyll.",
    more: "This is the present perfect: 'have' plus a past participle. It asks about any time up to now.",
    tip: "Short answers: 'Yes, I have' or 'No, I haven't'.",
  },
  'What has he done?': {
    why: "'What' comes first, then 'has', the subject 'he' and the past participle 'done'. In Dr Jekyll and Mr Hyde, Hyde's housekeeper asks this when the police arrive.",
    more: "'Done' is the past participle of 'do'. 'He' takes 'has'; I, you, we and they take 'have'.",
    tip: 'The present perfect asks about the result now: something has happened, and it matters now.',
  },
  'Are you pleased with Kent?': {
    why: "With 'be', the verb comes first: 'Are'. Then come the subject 'you', 'pleased' and 'with Kent'. In Pride and Prejudice, Mr Darcy asks Elizabeth this while she is visiting Kent.",
    more: "'Pleased with' means happy with. Kent is a county in the south-east of England.",
    tip: 'Learn the little word that goes with each feeling: pleased with, interested in, afraid of.',
  },
  'Are you going much farther?': {
    why: "'Are' comes first, then the subject 'you', then 'going' and 'much farther'. In Pride and Prejudice, Colonel Fitzwilliam asks Elizabeth this when he meets her on a walk.",
    more: "'Farther' means a longer distance. 'Further' is also correct and more common today.",
    tip: "'Are you going...?' with -ing asks about what someone is doing now.",
  },
  'What is your own opinion?': {
    why: "'What' comes first, then the verb 'is', then the subject 'your own opinion'. In Pride and Prejudice, Jane asks her sister Elizabeth this.",
    more: "'Own' makes it stronger: your opinion, not anyone else's.",
    tip: "Answer with 'I think...' or 'In my opinion...'.",
  },
  'What do you think of her?': {
    why: "'What' comes first, then the helper 'do', the subject 'you', the verb 'think' and 'of her'. In Great Expectations, Miss Havisham asks Pip this about Estella.",
    more: "'What do you think of...?' asks for an opinion about a person or a thing.",
    tip: "Pip whispers his answer: 'I think she is very proud.' An opinion often starts 'I think'.",
  },
  'Does he like the trade?': {
    why: "'He' takes 'does', so 'Does' comes first. Then come the subject 'he', the verb 'like' and 'the trade'. In Great Expectations, Miss Havisham asks Joe this about Pip.",
    more: "A 'trade' is a skilled job learned by working, such as being a blacksmith, which is Joe's trade.",
    tip: "After 'does', the verb has no -s: 'like', not 'likes'.",
  },
  'What did you say?': {
    why: "'What' comes first, then 'did' for the past, then the subject 'you' and the verb 'say' in its base form. In Great Expectations, Pip's sister screams this in a quarrel with Orlick.",
    more: 'Said kindly, it asks someone to repeat. Said sharply, as in the book, it is a challenge.',
    tip: "'Sorry, what did you say?' is a polite way to ask someone to repeat.",
  },
  'How can I get the money?': {
    why: "'How' comes first, then 'can', then the subject 'I', then the verb 'get' and 'the money'. In Silas Marner, Godfrey Cass asks his brother this, in a panic.",
    more: "'How can I...?' asks for a way to do something.",
    tip: "After 'can', the verb stays in its base form.",
  },
  'What do you intend to do?': {
    why: "'What' comes first, then the helper 'do', the subject 'you', the verb 'intend' and 'to do'. In Frankenstein, Clerval asks Victor this after terrible news from home.",
    more: "'Intend' means plan. 'What do you intend to do?' is a formal way to ask about plans.",
    tip: "This question uses 'do' twice: as the helper and as the main verb at the end.",
  },
  'What did this mean?': {
    why: "'What' comes first, then 'did' for the past, then the subject 'this' and the verb 'mean' in its base form. In Frankenstein, the creature asks himself this about his own life.",
    more: "Questions about the past use 'did' and the base form of the verb, whatever the subject is.",
    tip: 'Writers often use a question to show a character thinking.',
  },
  'What time does the train leave?': {
    why: "The answer is a time, so the question starts with 'What time'. Then come 'does', the subject 'the train' and the verb 'leave'. 'The train' means 'it', so the helper is 'does'.",
    more: "Timetables use the present simple even for the future: 'The train leaves at 9.10.'",
    tip: "At a station, add 'please' and 'Excuse me' to make it polite.",
  },
  'When did you arrive?': {
    why: "The answer gives a day, so the question starts with 'When'. Then 'did' shows the past, before the subject 'you'. The verb stays in its base form: 'arrive'.",
    more: "The answer uses the past form, 'arrived', but the question uses 'did' and 'arrive'.",
    tip: "One past mark is enough: 'did' in the question, '-ed' in the answer.",
  },
  'Why does she always arrive late?': {
    why: "'Why' comes first, then 'does', the subject 'she', the word 'always' and the verb 'arrive'. 'Always' goes just before the main verb.",
    more: "Words like 'always', 'never' and 'often' sit between the subject and the main verb.",
    tip: "Answers to 'Why...?' often start with 'Because'.",
  },
  'What did they say?': {
    why: "'What' comes first, then 'did' for the past, then the subject 'they' and the verb 'say'. The answer uses the past form 'said', but the question uses 'did' and 'say'.",
    more: "Never put two past forms in one question: 'did they say', not 'did they said'.",
    tip: "When you report an answer, use the past: 'They said yes.'",
  },
  'Which book do you recommend?': {
    why: "'Which book' asks you to choose from a group, and the two words stay together at the start. Then come 'do', the subject 'you' and the verb 'recommend'.",
    more: "'Which' is for a choice from a known group, such as the books in a library.",
    tip: 'To recommend is to say something is good and someone should try it.',
  },
  'How much does this jacket cost?': {
    why: "The answer is a price, so the question starts with 'How much'. Then come 'does', the subject 'this jacket' and the verb 'cost'.",
    more: "'How much' is for prices and amounts. In the answer, the verb has its -s again: 'It costs forty pounds.'",
    tip: "You can also ask a price with 'is' and no 'does', pointing at the thing you mean.",
  },
  'How long did the meeting last?': {
    why: "The answer is a length of time, so the question starts with 'How long'. Then come 'did' for the past, the subject 'the meeting' and the verb 'last'.",
    more: "Here 'last' is a verb meaning 'go on for a time'. It is not 'last' meaning 'final'.",
    tip: "Answer with a length of time: 'About an hour.'",
  },
  'Is she coming to the party?': {
    why: "The answer, 'Yes, she is', shows the question starts with 'Is'. Then come the subject 'she', 'coming' and 'to the party'. 'Is' and '-ing' talk about a plan.",
    more: "The present continuous, 'is coming', can talk about a plan for the future.",
    tip: "Short answers: 'Yes, she is' or 'No, she isn't'.",
  },
  'Were they at home?': {
    why: "The answer uses 'were', the past of 'are'. So the question starts with 'Were', then the subject 'they', then 'at home'.",
    more: "Past 'be': 'was' for I, he, she and it; 'were' for you, we and they.",
    tip: "No 'did' with 'be' in the past: 'Were they...?', not 'Did they be...?'.",
  },
  'Why are you so tired?': {
    why: "The answer gives a reason, so the question starts with 'Why'. Then come the verb 'are', the subject 'you' and 'so tired'.",
    more: "'So' makes the describing word stronger: so tired, so happy.",
    tip: "Answer with the reason: 'I went to bed late.'",
  },
  'What are you doing?': {
    why: "The answer, 'I'm making a cake', is about now, so the question uses 'are' and '-ing'. 'What' comes first, then 'are', the subject 'you' and 'doing'.",
    more: "The present continuous, 'be' plus '-ing', talks about something happening now.",
    tip: "Answer with the same form: 'I'm making...', 'I'm reading...'.",
  },
  'Should I bring anything to the party?': {
    why: "'Should' asks for advice, and it comes before the subject 'I'. Then come 'bring', 'anything' and 'to the party'.",
    more: "'Anything' is normal in questions. In a positive statement we use 'something'.",
    tip: 'Asking this before a party is polite in Britain. Many guests bring a small gift or some food.',
  },
  'May I open the window?': {
    why: "'May' asks for permission, and it comes before the subject 'I'. Then come 'open' and 'the window'.",
    more: "'May I...?' is a little more formal than 'Can I...?'. Both ask permission.",
    tip: 'Ask before you change something in a shared room, such as a classroom.',
  },
  'Will you be at home?': {
    why: "The answer is about the future, so the question uses 'will'. 'Will' comes first, then the subject 'you', then 'be at home'.",
    more: "After 'will', 'be' stays in its base form: 'will you be', never 'will you are'.",
    tip: "Short answers: 'Yes, I will' or 'No, I won't'.",
  },
  'Has he finished his homework?': {
    why: "'Has' comes first, before the subject 'he'. Then come the past participle 'finished' and 'his homework'. 'He' takes 'has'.",
    more: "The answer 'Not yet' is common after present perfect questions about things we expect to happen.",
    tip: "Short answers: 'Yes, he has' or 'No, he hasn't'.",
  },
  'Have you ever been to Spain?': {
    why: "'Have' comes first, then the subject 'you', then 'ever', then 'been to Spain'. 'Ever' sits just before the past participle.",
    more: "'Have you ever...?' asks about any time in your life up to now. 'Been to' means visited.",
    tip: "Answer with a number of times: 'Yes, twice', or 'No, never'.",
  },
  'Who broke the window?': {
    why: "The answer says who did it: Leo. 'Who' is the subject here, so there is no 'did': 'Who broke the window?'. The verb is in the past form, 'broke'.",
    more: "When 'who' asks about the person who does the action, the order is the same as a statement: 'Leo broke the window.'",
    tip: "Answer a subject question with the person and 'did': 'Leo did.'",
  },
  'Which team won?': {
    why: "'Which team' is the subject: it is the team that did the winning. So there is no 'did', and the verb is in the past form: 'won'.",
    more: 'When the question word is the subject, it is followed by the verb directly.',
    tip: "Answer with the team: 'The blue team.'",
  },
  'What happened to your bike?': {
    why: "'What' is the subject: something happened. So there is no 'did'. 'What' is followed by the past verb 'happened' and 'to your bike'.",
    more: "'Happen' is almost always used with 'what' as the subject: 'What happened?'",
    tip: "Answer with what happened: 'The tyre went flat.'",
  },
  'Could you repeat that?': {
    why: "'Could' comes first, before the subject 'you'. Then come 'repeat' and 'that'. It is a polite request.",
    more: "'Could you...?' is a little more polite than 'Can you...?'. Adding 'please' makes it more polite again.",
    tip: 'Use this whenever you do not catch something. Teachers are happy to repeat.',
  },
  'Where did you buy that bag?': {
    why: "The answer is a place, so the question starts with 'Where'. Then come 'did' for the past, the subject 'you' and the verb 'buy' in its base form.",
    more: "The past form 'bought' belongs in the answer: 'I bought it in town.'",
    tip: "It is a nice question to ask when you like someone's things.",
  },
  'Are there any tickets left?': {
    why: "'Are there' asks if something exists, and 'tickets' is plural. 'Are' comes first, then 'there', then 'any tickets' and 'left'.",
    more: "'Left' here means 'not yet sold'. 'Any' is normal in questions.",
    tip: "Short answers: 'Yes, there are' or 'No, sorry, there aren't'.",
  },
  'Did you have a nice weekend?': {
    why: "This yes or no question is about the past, so it starts with 'Did'. Then come the subject 'you', the verb 'have' in its base form and 'a nice weekend'.",
    more: "In English we 'have' a nice weekend, a good time and a great holiday.",
    tip: 'Ask this on a Monday. It is friendly small talk in Britain.',
  },
  'Did she call you?': {
    why: "The answer is about last night, so the question uses 'Did' for the past. 'Did' comes first, then the subject 'she', then the verb 'call' in its base form and 'you'.",
    more: "In British English, 'call' and 'ring' both mean phone someone.",
    tip: "Short answers: 'Yes, she did' or 'No, she didn't'.",
  },
  'Where did you stay?': {
    why: "The answer names a place, so the question starts with 'Where'. Then come 'did' for the past, the subject 'you' and the verb 'stay' in its base form.",
    more: "'Stay' here means sleep somewhere for a short time, such as in a hotel on holiday.",
    tip: "Add a detail to your answer: 'In a small hotel by the sea.'",
  },
  'How was your weekend?': {
    why: "The weekend is in the past, so the verb is 'was'. 'How' comes first, then 'was', then the subject 'your weekend'.",
    more: "'How was...?' asks for your opinion of something that has finished: a film, a trip, a test.",
    tip: "Answer with a word and one detail: 'Great, thanks. I went swimming.'",
  },
  'Was it expensive?': {
    why: "The answer uses 'was', so the question starts with 'Was'. Then come the subject 'it' and the describing word 'expensive'.",
    more: "The opposite of 'expensive' is 'cheap'. In the past, 'it is' becomes 'it was'.",
    tip: "Short answers: 'Yes, it was' or 'No, it wasn't'.",
  },
  'Are you going to watch the match?': {
    why: "'Going to' talks about plans. 'Are' comes first, then the subject 'you', then 'going to watch' and 'the match'.",
    more: "The pattern is 'be' plus 'going to' plus a verb: 'I'm going to watch', 'Are you going to watch?'",
    tip: "Short answers: 'Yes, I am' or 'No, I'm not'.",
  },
  'What are you going to wear?': {
    why: "The answer names clothes, so the question starts with 'What'. Then come 'are', the subject 'you' and 'going to wear'.",
    more: "'Going to' asks about plans you have already made.",
    tip: 'Ask this before a party or a special day.',
  },
  'When are you going to tell her?': {
    why: "The answer is a time, so the question starts with 'When'. Then come 'are', the subject 'you', 'going to tell' and 'her'.",
    more: "'Tell' is followed by the person: tell her, tell your teacher.",
    tip: "Answers can be vague: 'Soon' or 'Tomorrow, I think.'",
  },
  'Is it going to rain?': {
    why: "'Going to' predicts the future from what we can see now, such as dark clouds. 'Is' comes first, then the subject 'it', then 'going to rain'.",
    more: "English uses 'it' for the weather: 'It's going to rain.'",
    tip: 'Look at the clue in the answer: dark clouds now mean rain soon.',
  },
  'Are you listening to me?': {
    why: "'Are' comes first, then the subject 'you', then 'listening' and 'to me'. 'Be' plus '-ing' asks about right now.",
    more: "We 'listen to' someone or something. The 'to' is needed before the person.",
    tip: 'People ask this when they think you are not paying attention.',
  },
  'What is she reading?': {
    why: "The answer names a book, so the question starts with 'What'. Then come 'is', the subject 'she' and 'reading'.",
    more: "'Is reading' is the present continuous: she is reading it now.",
    tip: "Answer with what it is about: 'A book about space.'",
  },
  'Why is the baby crying?': {
    why: "The answer is a reason, so the question starts with 'Why'. Then come 'is', the subject 'the baby' and 'crying'.",
    more: "Keep 'the baby' together. The subject sits between 'is' and the '-ing' verb.",
    tip: "We often call a baby 'she' or 'he', not 'it', when we know the baby.",
  },
  'Who is she talking to?': {
    why: "The answer names a person, so the question starts with 'Who'. Then come 'is', the subject 'she', 'talking' and 'to' at the end.",
    more: "In everyday English, little words like 'to' go at the end of 'Who' questions.",
    tip: "Answer with the person: 'Her best friend.'",
  },
  "What's the weather like?": {
    why: "'What's' is short for 'What is'. 'What' comes first, then 'is', then the subject 'the weather', and 'like' at the end. It asks you to describe the weather.",
    more: "'Like' here means 'similar to'. It is not the verb 'like' that means enjoy.",
    tip: "Answer with weather words: 'Cold and windy.'",
  },
  'What is your school like?': {
    why: "'What... like?' asks you to describe something. 'What' comes first, then 'is', the subject 'your school', and 'like' at the end.",
    more: "The answer describes the school: 'It's big and friendly.' It does not say what you enjoy.",
    tip: 'Use two describing words in your answer to make it interesting.',
  },
  'How far is the station?': {
    why: "The answer is a distance, so the question starts with 'How far'. Then come the verb 'is' and the subject 'the station'.",
    more: "Answers can be a distance or a time: 'Two miles' or 'Ten minutes' walk'.",
    tip: 'In Britain, road distances are in miles.',
  },
  'How long is the film?': {
    why: "The answer is a length of time, so the question starts with 'How long'. Then come the verb 'is' and the subject 'the film'.",
    more: "'How long' can ask about time (a film) or length (a river).",
    tip: "Answer with hours and minutes: 'Two hours.'",
  },
  'How much water do you drink?': {
    why: "'How much water' stays together at the start, because water is not counted one by one. Then come 'do', the subject 'you' and the verb 'drink'.",
    more: "'How much' goes with water, money and time. 'How many' goes with glasses, coins and hours.",
    tip: "Answer with a measure: 'About six glasses a day.'",
  },
  'Which bus goes to Leeds?': {
    why: "'Which bus' is the subject: the bus is the thing that goes. So there is no 'does', and the verb has its -s: 'goes'.",
    more: "When the question word is the subject, the order is the same as a statement: 'The number 36 goes to Leeds.'",
    tip: "At a bus stop, start with 'Excuse me'.",
  },
  'Whose coat is on the floor?': {
    why: "The answer says who owns it: 'It's mine.' So the question starts with 'Whose coat'. Then come the verb 'is' and 'on the floor'.",
    more: "'Whose' asks who something belongs to. It always goes straight before its noun: whose coat, whose bag.",
    tip: "Do not mix up 'whose' and 'who's'. 'Who's' means 'who is'.",
  },
  'Who wants an ice cream?': {
    why: "'Who' is the subject: someone wants an ice cream. So there is no 'does', and the verb keeps its -s: 'wants'.",
    more: "A subject question with 'who' takes the verb with -s in the present: 'Who lives here?', 'Who knows?'",
    tip: "Answer with 'Me, please', or 'I do'.",
  },
  'Who lives next door?': {
    why: "'Who' is the subject: someone lives next door. So there is no 'does', and the verb keeps its -s: 'lives'.",
    more: "Compare a question about the object, which needs 'do' or 'does'. Here 'who' is the person doing the action.",
    tip: "Answer with the person: 'An old man with a dog.'",
  },
  'What makes you happy?': {
    why: "'What' is the subject: something makes you happy. So there is no 'does', and the verb keeps its -s: 'makes'.",
    more: "'Make' plus a person plus a feeling: it makes me happy, it makes her sad.",
    tip: 'This is a nice question for getting to know someone.',
  },
  'Should I call the doctor?': {
    why: "'Should' asks for advice, and it comes before the subject 'I'. Then come the verb 'call' and 'the doctor'.",
    more: "After 'should', the verb stays in its base form: 'call', not 'to call'.",
    tip: "Short answers: 'Yes, you should' or 'No, I don't think so'.",
  },
  'Could you carry my bag?': {
    why: "'Could' comes before the subject 'you'. Then come the verb 'carry' and 'my bag'. It is a polite request.",
    more: "'Could you...?' is a polite way to ask for help. Add 'please' to make it more polite still.",
    tip: 'Say thank you when the person helps.',
  },
  'Would you like to come?': {
    why: "'Would' comes before the subject 'you'. Then come 'like' and 'to come'. It is a polite invitation.",
    more: "After 'would like', use 'to' and a verb: 'to come', 'to play'.",
    tip: "Accept with 'Yes, I'd love to.'",
  },
  'Can I borrow your pen?': {
    why: "'Can' comes before the subject 'I' to ask permission. Then come 'borrow' and 'your pen'.",
    more: "You borrow from someone, and they lend to you. So 'Can I borrow...?' is right, not 'Can I lend...?'.",
    tip: 'Give it back with a thank you.',
  },
  'Shall we go to the park?': {
    why: "'Shall we...?' makes a suggestion. 'Shall' comes first, then the subject 'we', then 'go to the park'.",
    more: "'Shall' is mostly used with 'I' and 'we' in questions, to suggest or offer.",
    tip: "Agree with 'Good idea' or 'OK, let's go.'",
  },
  'Shall I open the window?': {
    why: "'Shall I...?' offers to do something. 'Shall' comes first, then the subject 'I', then 'open the window'.",
    more: "The person can accept with 'Yes, please' or refuse with 'No, thanks, I'm fine'.",
    tip: 'Offering to help is polite in a classroom or at home.',
  },
  'Were your friends at the party?': {
    why: "The party is in the past, and 'your friends' is plural, so the question starts with 'Were'. Then come the subject 'your friends' and 'at the party'.",
    more: "The subject can be long. Keep 'your friends' together after 'were'.",
    tip: "Short answers: 'Yes, they were' or 'No, they weren't'.",
  },
  'Did you enjoy the film?': {
    why: "This yes or no question is about the past, so it starts with 'Did'. Then come the subject 'you', the verb 'enjoy' and 'the film'.",
    more: "'Enjoy' always needs an object: enjoy the film, enjoy yourself.",
    tip: "Short answers: 'Yes, I did' or 'Not really'.",
  },
  'Did your team win?': {
    why: "This yes or no question is about the past, so it starts with 'Did'. Then come the subject 'your team' and the verb 'win' in its base form.",
    more: "The past form 'won' belongs in the answer: 'Yes, we won.'",
    tip: "Short answers: 'Yes, they did' or 'No, they didn't'.",
  },
  'Where did you find it?': {
    why: "The answer names a place, so the question starts with 'Where'. Then come 'did', the subject 'you' and 'find it'.",
    more: "The past form 'found' goes in the answer, not in the question.",
    tip: 'Answer with a place word: under, behind, next to.',
  },
  'When did you start learning English?': {
    why: "The answer is a time, so the question starts with 'When'. Then come 'did', the subject 'you', 'start' and 'learning English'.",
    more: "After 'start', you can use '-ing' or 'to': start learning, start to learn.",
    tip: "Answer with 'ago' for time back from now: 'Two years ago.'",
  },
  'What time did you go to bed?': {
    why: "The answer is a time on the clock, so the question starts with 'What time'. Then come 'did', the subject 'you' and 'go to bed'.",
    more: "We say 'go to bed' with no 'the'.",
    tip: "Answer with 'at': 'At eleven.'",
  },
  'What did your teacher say?': {
    why: "'What' comes first, then 'did' for the past, then the subject 'your teacher' and the verb 'say'.",
    more: "A long subject such as 'your teacher' still goes between 'did' and the main verb.",
    tip: "When you report a teacher's words, use 'said': 'She said we have a test.'",
  },
  'Must we wear a tie?': {
    why: "'Must' asks if something is a rule. It comes before the subject 'we', and then come 'wear' and 'a tie'.",
    more: "'Must' and 'have to' both talk about rules. 'Do we have to wear a tie?' is more common in speech.",
    tip: 'Many British schools have a uniform with a tie.',
  },
  'Was there a lot of traffic?': {
    why: "'There was' becomes 'Was there' in a question. 'Was' comes first, then 'there', then 'a lot of traffic'.",
    more: "'A lot of' goes with things you can count and things you cannot: a lot of cars, a lot of traffic.",
    tip: "Short answers: 'Yes, there was' or 'No, there wasn't'.",
  },
  'What has he done with his money?': {
    why: "'What' comes first, then 'has', the subject 'he' and the past participle 'done', then 'with his money'. In A Christmas Carol, a businessman asks this about a rich man who has just died.",
    more: "The present perfect, 'has done', asks about a result that matters now: where is the money now?",
    tip: "Keep 'with his money' together at the end of the question.",
  },
  'How long has she been such a favourite?': {
    why: "'How long' comes first and stays together. Then come 'has', the subject 'she', the past participle 'been' and 'such a favourite'. In Pride and Prejudice, Miss Bingley asks Mr Darcy this, jealous of Elizabeth.",
    more: "'How long' with the present perfect asks about a time that started in the past and goes on now.",
    tip: "Answers use 'since' with a start point and 'for' with a length of time.",
  },
  'What sort of a girl is Miss Darcy?': {
    why: "'What sort of a girl' is one question phrase, so its five words stay together at the start. Then come the verb 'is' and the subject 'Miss Darcy'. In Pride and Prejudice, Elizabeth asks Mr Wickham this about Darcy's sister.",
    more: "'What sort of...?' and 'What kind of...?' ask someone to describe a person or a thing.",
    tip: "Answer with describing words: 'She's shy but kind.'",
  },
  'Is it written down anywhere?': {
    why: "This passive question starts with 'Is', then the subject 'it', then the past participle 'written' and 'down', then 'anywhere'. In Animal Farm, Squealer asks this to trick the animals, because he knows nothing was written down.",
    more: "The passive is 'be' plus a past participle. It is about what happens to something, not who does it.",
    tip: "'Anywhere' is normal in questions. In a positive statement we say 'somewhere'.",
  },
  'How long have you known her?': {
    why: "The answer, 'Since we were five', gives a start point, so the question starts with 'How long'. Then come 'have', the subject 'you' and the past participle 'known'.",
    more: "With 'know', we use the present perfect, not the '-ing' form. We do not say 'have you been knowing'.",
    tip: "Answer with 'since' and a start point, or 'for' and a length of time.",
  },
  'Where was the meeting held?': {
    why: "The answer is a place, so the question starts with 'Where'. Then the passive: 'was', the subject 'the meeting' and the past participle 'held'.",
    more: "'Hold a meeting' means organise it. In the passive, the meeting 'was held'.",
    tip: "In a passive question, the subject sits between 'was' and the past participle.",
  },
  'What have you bought?': {
    why: "The answer, 'I've bought a new jumper', uses the present perfect, so the question does too. 'What' comes first, then 'have', the subject 'you' and the past participle 'bought'.",
    more: "'Bought' is both the past form and the past participle of 'buy'.",
    tip: 'Ask this when someone comes back with shopping bags.',
  },
  'Has the film started?': {
    why: "'Has' comes first, then the subject 'the film', then the past participle 'started'. 'The film' means 'it', so the helper is 'has'.",
    more: "Without 'has' at the start, 'the film has started' is a statement. In a written question, the helper comes first.",
    tip: "Short answers: 'Yes, it has' or 'No, it hasn't'.",
  },
  'Who is making that noise?': {
    why: "The answer names who is doing it: the boys next door. 'Who' is the subject, so the order is like a statement: 'Who', then 'is making', then 'that noise'.",
    more: "When 'who' is the subject, no extra helper is needed. The verb follows 'who' at once.",
    tip: "Keep 'that noise' together as the object at the end.",
  },
  "You're coming, aren't you?": {
    why: "A question tag turns a statement into a question. The statement is positive, 'You're coming', so the tag is negative: 'aren't you'. The tag uses the same verb as the statement.",
    more: 'We use a tag to check something we think is true. The voice goes down if we are sure.',
    tip: 'In writing, put a comma before the tag.',
  },
  "She eats meat, doesn't she?": {
    why: "The statement 'She eats meat' has no helper verb, so the tag uses 'does'. The statement is positive, so the tag is negative: 'doesn't she'.",
    more: "For a statement with an ordinary verb, the tag uses 'do', 'does' or 'did': 'You live here, don't you?'",
    tip: "Check the subject: 'she' in the statement means 'she' in the tag.",
  },
  "It's a lovely day, isn't it?": {
    why: "The statement 'It's a lovely day' uses 'is', so the tag uses 'is' too. The statement is positive, so the tag is negative: 'isn't it'.",
    more: 'British people often use tags in small talk about the weather. They invite you to agree.',
    tip: "Answer with agreement: 'Yes, it's beautiful.'",
  },
  "They've left, haven't they?": {
    why: "'They've' is short for 'they have', so the tag uses 'have'. The statement is positive, so the tag is negative: 'haven't they'.",
    more: 'The tag copies the helper verb of the statement: have, is, can, will.',
    tip: "Short answers: 'Yes, they have' or 'No, they haven't'.",
  },
  'You cannot swim, can you?': {
    why: "The statement is negative, 'You cannot swim', so the tag is positive: 'can you'. The tag uses the same helper verb, 'can'.",
    more: "Negative statement, positive tag; positive statement, negative tag. 'Cannot' is written as one word.",
    tip: "The answer 'No, I can't' agrees with the statement.",
  },
  "He called you, didn't he?": {
    why: "The statement 'He called you' is in the past and has no helper verb, so the tag uses 'did'. The statement is positive, so the tag is negative: 'didn't he'.",
    more: "For a past statement with an ordinary verb, the tag is 'didn't' or 'did'.",
    tip: "'Rang' in the answer is British English for 'phoned'.",
  },
  'Who did you meet?': {
    why: "The answer, 'I met my cousin', shows 'who' is the object: you met someone. So the question needs 'did': 'Who did you meet?'. 'Meet' stays in its base form.",
    more: "Compare a subject question, where 'who' does the action and there is no 'did'. The answer tells you which one you need.",
    tip: "Look at the answer: if 'I' did the action, the question needs 'did you'.",
  },
  'Do you know if she likes pizza?': {
    why: "This polite question has a second question inside it, after 'if'. The inside part keeps statement order, 'she likes pizza', with no 'does'. The question part is 'Do you know'.",
    more: "Inside the question, the verb keeps its -s: 'if she likes', because there is no 'does'.",
    tip: "Use 'Do you know if...?' to ask politely about something you are not sure of.",
  },
  'How long have you lived here?': {
    why: "The answer gives a start point, 'Since I was six', so the question starts with 'How long'. Then come 'have', the subject 'you' and the past participle 'lived', then 'here'.",
    more: 'The present perfect is used because you still live here now.',
    tip: "'Since' goes with a start point; 'for' goes with a length of time.",
  },
  'How long have you been learning English?': {
    why: "'How long' comes first. Then come 'have', the subject 'you', 'been' and 'learning English'. This form talks about an activity that started in the past and is still going on.",
    more: "'Have been learning' is the present perfect continuous: have, been and an '-ing' verb.",
    tip: "A good answer uses 'for': 'For two years.'",
  },
  'How long have you been waiting?': {
    why: "'How long' comes first, then 'have', the subject 'you', 'been' and 'waiting'. You started waiting in the past and you are still waiting.",
    more: "People often ask this to be polite when someone arrives late: 'Sorry, how long have you been waiting?'",
    tip: "Answer with a length of time: 'About twenty minutes.'",
  },
  'Have you ever eaten sushi?': {
    why: "'Have' comes first, then the subject 'you', then 'ever', then the past participle 'eaten' and 'sushi'.",
    more: "'Ever' means 'at any time in your life'. It sits just before the past participle.",
    tip: "Answer 'Yes, once' or 'No, never'.",
  },
  'Has anyone seen my phone?': {
    why: "'Has' comes first, then the subject 'anyone', then the past participle 'seen' and 'my phone'. 'Anyone' takes 'has'.",
    more: "'Anyone' is used in questions; 'someone' is used in statements.",
    tip: 'A useful question when you have lost something at home or at school.',
  },
  'Where have you been?': {
    why: "The answer names a place, so the question starts with 'Where'. Then come 'have', the subject 'you' and the past participle 'been'.",
    more: "'Been' is the past participle of 'be'. 'Where have you been?' asks where someone was until now.",
    tip: 'Parents often ask this when someone comes home late.',
  },
  'What have you done to your hair?': {
    why: "'What' comes first, then 'have', the subject 'you' and the past participle 'done', then 'to your hair'.",
    more: "We say 'do something to' something to mean change it.",
    tip: "If you like the change, say so: 'It looks great.'",
  },
  'Who has eaten my sandwich?': {
    why: "'Who' is the subject: someone has eaten it. So 'who' comes first, followed at once by 'has eaten' and 'my sandwich'.",
    more: "A subject question can use any tense: 'Who ate it?', 'Who has eaten it?'",
    tip: "The answer can use the helper alone: 'I have.'",
  },
  'Why have you stopped?': {
    why: "The answer gives a reason, so the question starts with 'Why'. Then come 'have', the subject 'you' and the past participle 'stopped'.",
    more: 'The present perfect shows the stopping happened just now and matters now.',
    tip: "Answers to 'Why' questions often give a feeling or a reason.",
  },
  'How many times have you seen it?': {
    why: "'How many times' stays together at the start. Then come 'have', the subject 'you' and the past participle 'seen', then 'it'.",
    more: "'How many times' asks how often something has happened up to now.",
    tip: "Answer with a number: 'Three times.'",
  },
  'Have you met my sister?': {
    why: "'Have' comes first, then the subject 'you', then the past participle 'met' and 'my sister'.",
    more: 'This question is a friendly way to start an introduction.',
    tip: 'If you have not met, the answer leads to an introduction.',
  },
  'What were you doing?': {
    why: "The answer, 'I was reading', uses the past continuous, so the question does too. 'What' comes first, then 'were', the subject 'you' and 'doing'.",
    more: "The past continuous, 'was' or 'were' plus '-ing', describes an activity in progress in the past.",
    tip: "Answer with 'I was...' and an '-ing' verb.",
  },
  'Where were you going?': {
    why: "The answer is a place, so the question starts with 'Where'. Then come 'were', the subject 'you' and 'going'.",
    more: "'You' always takes 'were', even for one person.",
    tip: "Answer with 'to': 'To the shops.'",
  },
  'Who were you talking to?': {
    why: "'Who' comes first, then 'were', the subject 'you' and 'talking', with 'to' at the end. The answer names the person.",
    more: "In everyday English, 'to' stays at the end of a 'who' question. Very formal English says 'To whom...?'.",
    tip: "Answer with the person: 'My cousin in Spain.'",
  },
  'Was it raining?': {
    why: "'Was' comes first, then the subject 'it', then 'raining'. 'It' is the weather.",
    more: "'Pouring' means raining very hard. British English has many rain words: drizzle, shower, downpour.",
    tip: "Short answers: 'Yes, it was' or 'No, it wasn't'.",
  },
  'When was this bridge built?': {
    why: "The answer is a year, so the question starts with 'When'. Then the passive: 'was', the subject 'this bridge' and the past participle 'built'.",
    more: "We use the passive when the thing matters more than who did the action. Nobody needs the builders' names.",
    tip: "Years after 'in': 'In 1890.'",
  },
  'Where were these photos taken?': {
    why: "The answer is a place, so the question starts with 'Where'. Then the passive: 'were', the subject 'these photos' and the past participle 'taken'.",
    more: "'Photos' is plural, so the verb is 'were'. For one photo, it is 'was'.",
    tip: "We 'take' a photo in English, not 'make' one.",
  },
  'Who was this book written by?': {
    why: "This is a passive question: 'was' and the past participle 'written'. 'Who' comes first, and 'by' goes at the end, because the answer names the writer.",
    more: "In the passive, 'by' introduces the person who did the action. In everyday English, 'by' stays at the end of the question.",
    tip: "An active way to ask the same thing: 'Who wrote this book?'",
  },
  'How is cheese made?': {
    why: "'How' asks about the way something is done, so it comes first. Then the passive: 'is', the subject 'cheese' and the past participle 'made'.",
    more: 'The passive is common when we describe a process: how bread is baked, how paper is made.',
    tip: "Answer with the steps, or the main material: 'From milk.'",
  },
  'Is English spoken here?': {
    why: "This passive question starts with 'Is'. Then come the subject 'English', the past participle 'spoken' and 'here'.",
    more: "Shops in Britain sometimes show signs for other languages, such as 'Polish spoken here'.",
    tip: "Short answers: 'Yes, it is' or 'No, it isn't'.",
  },
  'Was anyone hurt?': {
    why: "This passive question starts with 'Was', then the subject 'anyone', then the past participle 'hurt'. 'Anyone' takes 'was'.",
    more: "'Hurt' is the same in the present, the past and the past participle.",
    tip: 'People ask this after an accident to check everyone is safe.',
  },
  'Has the window been fixed?': {
    why: "This is a passive in the present perfect: 'has', the subject 'the window', 'been' and the past participle 'fixed'.",
    more: "Present perfect passive: has or have, then 'been', then a past participle.",
    tip: "'Not yet' is a natural short answer to a present perfect question.",
  },
  'Who called you?': {
    why: "The answer, 'My aunt called me', shows 'who' is the subject: someone called you. So there is no 'did', and the past form 'called' comes straight after 'who'.",
    more: "Look at the answer. If the other person did the action, 'who' is the subject.",
    tip: 'Subject questions often have only three or four words.',
  },
  'Who did you call?': {
    why: "The answer, 'I called my aunt', shows 'who' is the object: you called someone. So the question needs 'did' before 'you', and the base form 'call'.",
    more: 'Object questions follow the usual order: question word, helper, subject, verb.',
    tip: "Ask yourself who did the action. If it was 'you', the question needs 'did you'.",
  },
  'Who told you?': {
    why: "The answer, 'Sam told me', shows 'who' is the subject: someone told you. So 'who' comes first and is followed at once by the past form 'told'.",
    more: "There is no 'did' in a subject question in the past simple.",
    tip: 'People ask this when they are surprised that you know something.',
  },
  'Who did you tell?': {
    why: "The answer, 'I told my mum', shows 'who' is the object: you told someone. So the question needs 'did', then 'you', then the base form 'tell'.",
    more: "The past form 'told' belongs in the answer, never after 'did'.",
    tip: 'Check the answer to see which person did the telling.',
  },
  'Who won the race?': {
    why: "The answer, 'Amira won it', shows 'who' is the subject: someone won. So 'who' comes first, followed at once by the past form 'won' and 'the race'.",
    more: "'Won' is the past form of 'win'. It rhymes with 'one'.",
    tip: "Answer a subject question with the name and the helper: 'Amira did.'",
  },
  'What did you win?': {
    why: "The answer, 'I won a medal', shows 'what' is the object: you won something. So the question needs 'did', then 'you', then the base form 'win'.",
    more: "We 'win' a prize or a race, but we 'beat' a person or a team.",
    tip: "After 'did', always use the base form: 'win', not 'won'.",
  },
  'Who likes chocolate?': {
    why: "'Who' is the subject: someone likes chocolate. So there is no 'does', and the verb keeps its -s: 'likes'.",
    more: "Subject questions in the present take the -s form, as if 'who' meant 'he' or 'she'.",
    tip: "Answer with 'I do', 'We all do' or 'Everyone does'.",
  },
  'What did she buy?': {
    why: "The answer, 'She bought a new coat', shows 'what' is the object: she bought something. So the question needs 'did', then 'she', then the base form 'buy'.",
    more: "'Bought' is the past of 'buy'. Be careful: 'brought' is the past of 'bring'.",
    tip: 'Object questions need a helper: do, does or did.',
  },
  'Who saw you?': {
    why: "The answer, 'My teacher saw me', shows 'who' is the subject: someone saw you. So 'who' comes first, followed at once by the past form 'saw'.",
    more: 'Compare the answers to tell subject and object questions apart: here the other person did the seeing.',
    tip: 'Subject questions are short. No helper is needed.',
  },
  'Who did you see?': {
    why: "The answer, 'I saw my teacher', shows 'who' is the object: you saw someone. So the question needs 'did', then 'you', then the base form 'see'.",
    more: "'Saw' is the past of 'see'. It goes in the answer, not after 'did'.",
    tip: "If the answer starts with 'I', the question usually needs 'did you' or 'do you'.",
  },
  "You live near here, don't you?": {
    why: "The statement 'You live near here' has no helper verb, so the tag uses 'do'. The statement is positive, so the tag is negative: 'don't you'.",
    more: "Tags for ordinary verbs: 'do' and 'does' in the present, 'did' in the past.",
    tip: "'Round the corner' in the answer means very near.",
  },
  "She's your sister, isn't she?": {
    why: "'She's' is short for 'she is', so the tag uses 'is'. The statement is positive, so the tag is negative: 'isn't she'.",
    more: "Be careful: 'she's' can also mean 'she has'. Here it means 'she is', so the tag is 'isn't she'.",
    tip: 'Use a tag to check a fact you think is true.',
  },
  "You'll be there, won't you?": {
    why: "'You'll' is short for 'you will', so the tag uses 'will'. The negative of 'will' is 'won't', so the tag is 'won't you'.",
    more: "'Won't' is short for 'will not'. It does not look like 'will', so learn it on its own.",
    tip: 'People use this tag to ask for a promise.',
  },
  "You've never been there, have you?": {
    why: "'Never' makes the statement negative, so the tag is positive: 'have you'. 'You've' means 'you have', so the tag uses 'have'.",
    more: "Words like 'never' and 'nobody' make a statement negative even without 'not'.",
    tip: "Answer 'No, never' to agree with the statement.",
  },
  "Why didn't you call me?": {
    why: "The answer gives a reason, so the question starts with 'Why'. Then come 'didn't', the subject 'you' and the base form 'call', then 'me'.",
    more: "In a negative question, the 'not' joins the helper: 'didn't', 'isn't', 'can't'.",
    tip: 'Negative questions can sound upset. Say them gently.',
  },
  "Don't you like it?": {
    why: "This negative question starts with 'Don't', then the subject 'you', then 'like it'. It shows surprise: the speaker thought you would like it.",
    more: "To answer, think of the facts. If you do not like it, say 'No'. If you do, say 'Yes, I do'.",
    tip: "A kind way to say no: 'No, sorry, it's not for me.'",
  },
  "Isn't it beautiful?": {
    why: "This negative question starts with 'Isn't', then the subject 'it', then 'beautiful'. It is not a real question: the speaker expects you to agree.",
    more: "Negative questions like this share a feeling. They mean 'It is beautiful, don't you think?'",
    tip: "Answer with agreement: 'Yes, it's amazing.'",
  },
  "Why isn't she here?": {
    why: "The answer gives a reason, so the question starts with 'Why'. Then come 'isn't', the subject 'she' and 'here'.",
    more: "The 'not' joins 'is' to make 'isn't', and both come before the subject.",
    tip: "At school, the answer often explains an absence: 'She's ill.'",
  },
  "Why can't you come?": {
    why: "The answer gives a reason, so the question starts with 'Why'. Then come 'can't', the subject 'you' and the base form 'come'.",
    more: "'Can't' is short for 'cannot'. It comes before the subject in a question.",
    tip: 'When you cannot come, a reason is polite.',
  },
  'Do you know if they won?': {
    why: "The polite question 'Do you know' comes first. After 'if', the inside part keeps statement order: 'they won', with no 'did'.",
    more: "'If' here means 'whether'. It introduces a yes or no question inside another question.",
    tip: "A direct question needs 'did'; the same question after 'Do you know if' does not.",
  },
  'Do you know if he plays chess?': {
    why: "'Do you know' comes first. After 'if', the inside part keeps statement order, 'he plays chess', with the -s and no 'does'.",
    more: "Asking 'Do you know if...?' is softer than a direct question. It is useful when you are not sure the person knows.",
    tip: 'Check the inside part: it should sound like a statement.',
  },
  "Do you know if she's coming?": {
    why: "'Do you know' comes first. After 'if', the inside part keeps statement order: 'she's coming', with 'she' before 'is'.",
    more: "'She's' here means 'she is'. In the inside part, the subject comes before the verb, as in a statement.",
    tip: "If you do not know, say so: 'No idea. I'll ask her.'",
  },
  'Who are you waiting for?': {
    why: "'Who' comes first, then 'are', the subject 'you' and 'waiting', with 'for' at the end. We 'wait for' someone.",
    more: "Many verbs need a little word: wait for, look at, listen to. In a 'who' question it goes at the end.",
    tip: "Answer with the person: 'My brother.'",
  },
  'Who does this bag belong to?': {
    why: "'Who' comes first, then 'does', the subject 'this bag', the verb 'belong' and 'to' at the end. Something 'belongs to' its owner.",
    more: "'Belong to' means is owned by. A shorter way to ask is with 'whose'.",
    tip: "Answer with the owner: 'It's Sam's.'",
  },
  'Who did you go with?': {
    why: "'Who' comes first, then 'did', the subject 'you', 'go' and 'with' at the end. The answer names the people you went with.",
    more: "The little word 'with' moves to the end because 'who' has moved to the front.",
    tip: "Answer with 'with': 'With my cousins.'",
  },
  'Who is this present for?': {
    why: "'Who' comes first, then 'is', the subject 'this present', and 'for' at the end. A present is 'for' someone.",
    more: "'For' shows who will get something: a present for my mum, a card for my teacher.",
    tip: "Answer with 'It's for...': 'It's for my mum.'",
  },
  'What is this button for?': {
    why: "'What' comes first, then 'is', the subject 'this button', and 'for' at the end. 'What... for?' asks about the use of something.",
    more: "'What is it for?' asks what something does or why we need it.",
    tip: 'Ask this when you meet a new machine or tool.',
  },
  'Did you use to live here?': {
    why: "'Used to' talks about the past. In a question, 'did' comes first, then the subject 'you', then 'use to live', without the -d.",
    more: "The -d goes away after 'did': 'did you use to', just as 'did you lived' is wrong.",
    tip: "Answer with 'used to': 'Yes, I used to live here when I was little.'",
  },
  'Where did you use to go to school?': {
    why: "The answer names a place, so the question starts with 'Where'. Then come 'did', the subject 'you', 'use to go' and 'to school'.",
    more: "'Used to' is for things that were true for a long time in the past but are not true now.",
    tip: "No -d on 'use' after 'did'.",
  },
  'What games did you use to play?': {
    why: "'What games' stays together at the start. Then come 'did', the subject 'you', 'use to' and the verb 'play'.",
    more: "'Used to' describes old habits: games you played often as a child.",
    tip: 'A lovely question to ask grandparents about their childhood.',
  },
  'What should I do?': {
    why: "'What' comes first, then 'should', the subject 'I' and the verb 'do'. 'Should' asks for advice.",
    more: "After 'should', the verb stays in its base form.",
    tip: "Advice answers often start with a verb: 'Tell your teacher.'",
  },
  'Could it be true?': {
    why: "'Could' comes first, then the subject 'it', then 'be true'. Here 'could' asks if something is possible.",
    more: "'Could' has two jobs: polite requests and possibility. Here it is about possibility.",
    tip: "Answers: 'Maybe', 'Possibly' or 'I doubt it'.",
  },
  'Would you mind closing the door?': {
    why: "'Would' comes first, then the subject 'you', then 'mind closing' and 'the door'. After 'mind', the verb takes '-ing'.",
    more: "'Would you mind...?' is a very polite request. 'Not at all' means 'I don't mind, I'll do it'.",
    tip: "Do not answer 'Yes'. Yes would mean you do mind.",
  },
  'How could you forget?': {
    why: "'How' comes first, then 'could', the subject 'you' and the verb 'forget'. It is not a real question: it shows surprise and upset.",
    more: 'Some questions show feelings rather than ask for facts.',
    tip: "An apology is the best answer: 'I'm so sorry.'",
  },
  'What would you do?': {
    why: "'What' comes first, then 'would', the subject 'you' and the verb 'do'. It asks about an imagined situation.",
    more: "'Would' talks about what someone imagines doing, not what they will do.",
    tip: "Answer with 'I'd': 'I'd tell the truth.'",
  },
  'Who should I ask?': {
    why: "'Who' is the object here: you will ask someone. So 'who' comes first, then 'should', the subject 'I' and the verb 'ask'.",
    more: "'Should' asks for advice: who is the best person to ask?",
    tip: 'At school, the office or your form tutor can often help.',
  },
  'How long does it take to get there?': {
    why: "'How long' comes first. Then come 'does', the subject 'it', 'take' and 'to get there'. 'It takes' is how English talks about the time a journey needs.",
    more: "The answer uses the same verb: 'It takes about half an hour.'",
    tip: 'Ask this before you plan a trip, to know when to leave.',
  },
  'Why did nobody tell me?': {
    why: "'Why' comes first, then 'did', then the subject 'nobody', then 'tell me'. 'Nobody' is the subject, and it sits between 'did' and the verb.",
    more: "'Nobody' already makes the question negative, so we do not add 'not'.",
    tip: 'Say it calmly. It can sound like a complaint.',
  },
  'What did you think of the film?': {
    why: "'What' comes first, then 'did', the subject 'you', 'think' and 'of the film'. It asks for an opinion about something in the past.",
    more: "'Think of' asks for an opinion. The answer gives one: 'It was brilliant.'",
    tip: "Give a reason with your opinion: 'The ending was so clever.'",
  },
  'Which one do you want?': {
    why: "'Which one' asks for a choice from a group, and the two words stay together at the start. Then come 'do', the subject 'you' and 'want'.",
    more: "'One' saves repeating a noun: 'which cake' becomes 'which one'.",
    tip: "Answer with 'The... one': 'The blue one, please.'",
  },
  'How much do I owe you?': {
    why: "The answer is an amount of money, so the question starts with 'How much'. Then come 'do', the subject 'I' and 'owe you'.",
    more: "To 'owe' money is to need to pay it back to someone.",
    tip: 'Ask this when a friend has paid for you.',
  },
}
