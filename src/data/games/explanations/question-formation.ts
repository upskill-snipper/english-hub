import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Build the Question: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/question-formation.ts). Written with AI on 16
 * October 2026 and checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'Where do you live?': {
    why: "A question with 'do' follows this order: question word, 'do', subject, main verb. So we say 'Where do you live?'. The main verb 'live' stays in its base form.",
    more: "'Do' is a helper verb. It has no meaning of its own here. It only helps to make the question. For he, she or it we use 'does': 'Where does she live?'",
    tip: "Check your question by answering it. 'I live in Cairo' uses the same verb, 'live'. Begin with a capital letter and end with a question mark.",
  },
  'What time does the train leave?': {
    why: "'What time' is the question word. Next come 'does', the subject 'the train' and the main verb 'leave'. We use 'does' because 'the train' means 'it', one thing.",
    more: "The -s is already in 'does', so the main verb has no -s. We say 'does the train leave', never 'does the train leaves'.",
    tip: "Use 'What time' to ask for a clock time: 'What time does the film start?' A good answer is 'At six.'",
  },
  'When did you arrive in London?': {
    why: "'Did' shows that the question is about the past, so the main verb stays in its base form: 'arrive', not 'arrived'. The order is: 'When', 'did', 'you', 'arrive', 'in London'.",
    more: "Only 'did' shows the past in this kind of question. Write 'When did you arrive?', not 'When did you arrived?'. The same rule works for 'Where did you go?' and 'What did you eat?'",
    tip: "Before you finish a question with 'did', look at the main verb. It must not end in -ed.",
  },
  'Why does she always arrive late?': {
    why: "The question word is 'Why'. Then come 'does', the subject 'she', 'always' and the main verb 'arrive'. A word like 'always' goes between the subject and the main verb.",
    more: "Words such as 'always', 'never', 'often' and 'usually' sit before the main verb. 'Does' already carries the -s for 'she', so 'arrive' has no -s.",
    tip: "To answer a 'Why' question, start with 'Because': 'Because she misses the bus.'",
  },
  'How often do you go to the gym?': {
    why: "'How often' asks how many times something happens. The two words stay together at the start. Then come 'do', 'you' and the main verb 'go' in its base form.",
    more: "Answer with a time word or phrase: 'twice a week', 'every day' or 'never'. Compare 'How long' (how much time) and 'How far' (what distance).",
    tip: "Answer with how many times and a time word: 'once a week', 'twice a month', 'three times a year'.",
  },
  'What did they say about the plan?': {
    why: "'Did' shows the past, so 'say' stays in its base form. The order is: 'What', 'did', 'they', 'say', 'about the plan'. 'What' asks about the thing that was said.",
    more: "Do not write 'said' after 'did'. The form 'said' belongs in statements: 'They said it was a good plan.' In the question, 'did' shows the past.",
    tip: "Turn a statement into a question to practise: 'They said something about the plan' becomes 'What did they say about the plan?'",
  },
  'Which book do you recommend?': {
    why: "'Which book' stays together at the start. Then come 'do', the subject 'you' and the main verb 'recommend'. We use 'which' when there is a small group of choices.",
    more: "'Which book' asks about a choice from a group you know, such as the books on a shelf. The noun 'book' must stay right after 'Which'.",
    tip: "Use 'Which one?' when you must choose from a group: 'Which bag is yours?'",
  },
  'How much does this jacket cost?': {
    why: "'How much' asks about the price. Next come 'does', the subject 'this jacket' and the main verb 'cost'. We use 'does' because 'this jacket' means 'it'.",
    more: "'How much' is for amounts you do not count one by one, such as price. For things you can count, use 'How many': 'How many jackets do you have?'",
    tip: "You can also ask 'How much is this jacket?'. That question uses 'is' and has no 'does'.",
  },
  'Who did you meet at the conference?': {
    why: "You met somebody, so 'who' is the object of 'meet'. When 'who' is the object, we need 'did' before the subject 'you'. The verb 'meet' stays in its base form.",
    more: "Compare: 'Who met you?' Here 'who' is the subject, so there is no 'did'. In 'Who did you meet?' the subject is 'you', so 'did' is needed.",
    tip: "Test it with the answer. 'I met Sam' needs 'did'. 'Sam met me' needs no 'did': 'Who met you?'",
  },
  'How long did the meeting last?': {
    why: "'How long' asks about time from the start to the end. 'Did' shows the past, so 'last' stays in its base form. The order is: 'How long', 'did', 'the meeting', 'last'.",
    more: "Here 'last' is a verb that means 'continue for a time'. It is not the word 'last' that means 'final'. A good answer is 'About an hour.'",
    tip: "Learn the common question 'How long did it take?'. It also asks about time.",
  },
  'Where does your sister work?': {
    why: "'Your sister' means 'she', so we use 'does'. The order is: 'Where', 'does', 'your sister', 'work'. The main verb 'work' has no -s, because 'does' already carries it.",
    more: "Do not write 'Where does your sister works?'. After 'does' the main verb is always in the base form. For 'your brothers' we use 'do': 'Where do your brothers work?'",
    tip: "Count the people. One person (he, she, it or one name) needs 'does'. More than one person needs 'do'.",
  },
  'What do these words mean?': {
    why: "'These words' is plural, so we use 'do', not 'does'. The order is: 'What', 'do', 'these words', 'mean'. The main verb 'mean' stays in its base form.",
    more: "For one word the question changes: 'What does this word mean?'. The words 'this' and 'these' show whether to use 'does' or 'do'.",
    tip: "Look at the subject, not at the question word. 'What' never changes. The subject decides between 'do' and 'does'.",
  },
  'Are you ready to go?': {
    why: "With the verb 'be', we make a question by moving the verb in front of the subject. 'You are ready' becomes 'Are you ready?'. We do not add 'do' to a question with 'be'.",
    more: "This works for every form of 'be': 'Is she ready?', 'Am I late?' and 'Were they ready?'. Do not write 'Do you are ready?'.",
    tip: "Learn 'Are you ready?' as a whole phrase. You will hear it before a trip, a game or a test.",
  },
  'Is she coming to the party?': {
    why: "This is the present continuous: 'is' plus a verb ending in -ing. To ask the question, put 'is' before the subject: 'Is she coming?'. The -ing verb stays after the subject.",
    more: "'She is coming' becomes 'Is she coming?'. The same pattern works with other subjects: 'Are they coming?' and 'Am I coming?'. Only the form of 'be' moves.",
    tip: "In speech your voice goes up at the end of a yes or no question. Say it aloud: 'Is she coming to the party?'",
  },
  'Were they at home yesterday?': {
    why: "'Were' is the past of 'be' for 'they'. To ask a question with 'be', move it in front of the subject: 'They were' becomes 'Were they'. The time word 'yesterday' comes at the end.",
    more: "In the past, 'was' goes with I, he, she and it. 'Were' goes with you, we and they. We say 'Was he at home?' but 'Were you at home?'.",
    tip: "Time words such as 'yesterday' and 'last night' usually come at the end of a question.",
  },
  'Why are you so tired today?': {
    why: "After the question word 'Why', the verb 'be' goes before the subject: 'Why are you...'. The words 'so tired' say how you feel, and 'today' says when. We do not use 'do' with 'be'.",
    more: "'So' makes the adjective stronger: 'so tired' means 'very tired'. You can also use it in statements: 'You look so happy.'",
    tip: "Questions with a question word and 'be' follow one pattern: question word, 'be', subject. Try 'Why is he sad?' and 'Where are they?'",
  },
  'What are you doing this weekend?': {
    why: "This is the present continuous: 'are' plus 'doing'. The order is: 'What', 'are', 'you', 'doing'. English often uses this tense to ask about plans for the future.",
    more: "With 'this weekend', the question asks about your plans, not about right now. A good answer is 'I am visiting my grandmother.'",
    tip: "A time word such as 'tonight' or 'this weekend' tells the listener that you mean the future. Use it to start a friendly chat on a Friday.",
  },
  'Where was the meeting held?': {
    why: "The meeting was held by someone: this is a passive question. The order is: 'Where', 'was', 'the meeting', 'held'. 'Held' is the past participle of 'hold'.",
    more: "A passive verb is a form of 'be' plus a past participle: 'was held', 'is made', 'were sold'. To ask a question, put the form of 'be' before the subject.",
    tip: "Use the passive when the person who did the action is not important or not known: 'Where was it made?'",
  },
  'Is this seat free?': {
    why: "'Is' is the verb 'be', so it goes before the subject: 'This seat is free' becomes 'Is this seat free?'. 'Free' is an adjective that tells us about the seat.",
    more: "Answer with a short answer: 'Yes, it is.' or 'No, it is not.' Use 'it' for the seat and the same verb, 'is'.",
    tip: "Ask it politely on a bus or in a cafe: 'Excuse me, is this seat free?'",
  },
  'How are your parents?': {
    why: "'How' asks about health or condition. With the verb 'be', the verb goes before the subject: 'How', 'are', 'your parents'. 'Parents' is plural, so we use 'are'.",
    more: "For one person we use 'is': 'How is your mother?'. A good answer is 'Fine, thanks.' or 'They are well, thank you.'",
    tip: "People ask this question when they meet. Always answer politely, and then ask back: 'And how are you?'",
  },
  'Can you help me with this?': {
    why: "'Can' is a modal verb. It goes before the subject, and the main verb comes after the subject in its base form: 'Can you help me?'. We never use 'do' with a modal verb.",
    more: "Do not write 'Do you can help me?'. 'Can' already does the job that 'do' does in other questions. 'With this' tells us what you need help with.",
    tip: "'Can you help me with this?' is a useful polite request. Add 'please' to make it even more polite.",
  },
  'Could you repeat that, please?': {
    why: "'Could' is a modal verb, so it goes before the subject 'you'. The main verb 'repeat' stays in its base form. 'Could' is more polite than 'can' when you ask someone to do something.",
    more: "'Please' can go at the end, with a comma before it, or before the main verb: 'Could you please repeat that?'",
    tip: "Use it in class when you did not hear the teacher. It is polite and clear. 'Sorry, could you repeat that, please?' sounds even kinder.",
  },
  'Should I bring anything to the party?': {
    why: "'Should' is a modal verb that asks for advice. It goes before the subject 'I', and the main verb 'bring' stays in its base form. In questions we usually use 'anything'.",
    more: "'Anything' is the usual word in questions: 'Should I bring anything?'. A possible answer is 'Yes, bring some drinks.' or 'No, just yourself.'",
    tip: "Use 'Should I...?' when you want to know the right thing to do. For example: 'Should I wait here?'",
  },
  'Would you like some tea?': {
    why: "'Would' is a modal verb. 'Would you like...?' is a polite way to offer something. 'Would' goes before 'you', and 'like' stays in its base form.",
    more: "In offers and polite requests we use 'some', not 'any': 'Would you like some tea?'. In most other questions we use 'any': 'Do you have any tea?'",
    tip: "'Do you want some tea?' is correct, but 'Would you like some tea?' sounds more polite. Use it with guests and in shops.",
  },
  'May I open the window?': {
    why: "'May' is a modal verb that asks for permission. It goes before the subject 'I', and 'open' stays in its base form. 'May I...?' is polite and rather formal.",
    more: "'Can I open the window?' also asks for permission and is more common in everyday speech. 'May I' is better with a teacher or a person you do not know.",
    tip: "In a speaking exam, 'May I...?' sounds polite and careful. For example: 'May I ask a question?'",
  },
  'Will you be at the office tomorrow?': {
    why: "'Will' is a modal verb for the future. It goes before the subject 'you'. After the subject, 'be' stays in its base form: 'Will you be...?'. 'Tomorrow' shows the time.",
    more: "Do not write 'Will you are at the office?'. After 'will' we always use the base form 'be'. The same is true for 'Will she be late?'",
    tip: "Ask about a plan or a promise with 'Will you...?': 'Will you help me tomorrow?'",
  },
  'Must we finish this today?': {
    why: "'Must' is a modal verb for strong need. It goes before the subject 'we', and 'finish' stays in its base form. The question asks if it is necessary to finish today.",
    more: "'Must we...?' sounds strong and rather formal. In everyday speech people often say 'Do we have to finish this today?'. Both ask about necessity.",
    tip: "'Must' has no past form. For the past, use 'had to': 'Did we have to finish it?'",
  },
  'Can she speak three languages?': {
    why: "'Can' is a modal verb, so it goes before the subject 'she'. The main verb 'speak' stays in its base form with no -s. The words 'three languages' come last.",
    more: "A modal verb never takes -s, even for he, she or it. Do not write 'Can she speaks...?'. Compare 'Does she speak...?', where the -s is already in 'does'.",
    tip: "Use 'Can you speak...?' to ask about skills: 'Can you swim?' and 'Can he drive?'",
  },
  'Have you ever been to Spain?': {
    why: "This is the present perfect: 'have' plus a past participle. In a question, 'have' goes before the subject. 'Been' is the past participle of 'be'. 'Ever' means 'at any time in your life'.",
    more: "'Have you ever been to...?' asks about experience, not about when. A possible answer is 'Yes, I have.' or 'No, I have never been there.'",
    tip: "Do not add a finished time. Write 'Have you ever been to Spain?', not 'Have you ever been to Spain last year?'",
  },
  'Has he finished his homework?': {
    why: "This is the present perfect. With he, she and it we use 'has', not 'have'. In a question, 'has' goes before the subject. 'Finished' is the past participle of 'finish'.",
    more: "Do not write 'Has he finish...?' or 'Does he finished...?'. After 'has' use the past participle. A short answer is 'Yes, he has.' or 'No, he has not.'",
    tip: "Use this tense for something that has just finished or matters now. 'Has he finished?' means 'Is it done now?'",
  },
  'How long have you known her?': {
    why: "'How long' asks about time up to now. We use the present perfect for a situation that began in the past and continues now. 'Known' is the past participle of 'know'.",
    more: "'Know' does not usually take the -ing form, so we say 'have you known', not 'have you been knowing'. A good answer is 'I have known her for two years.'",
    tip: "Answer with 'for' and a length of time ('for ten years') or with 'since' and a starting point ('since 2020').",
  },
  'What have you done today?': {
    why: "This is the present perfect: 'have' plus a past participle. 'Done' is the past participle of 'do'. 'Today' is not finished yet, so the present perfect fits. The order is: 'What', 'have', 'you', 'done'.",
    more: "Do not write 'What have you did?'. The past simple is 'did', but the past participle is 'done'. More examples: 'gone', 'seen', 'eaten', 'written'.",
    tip: "If a question ends with 'today', 'this week' or 'so far', the present perfect is often right.",
  },
  'Have they arrived yet?': {
    why: "This is the present perfect, so 'have' goes before the subject 'they', and 'arrived' is the past participle. 'Yet' asks if something has happened by now, and it goes at the end.",
    more: "We use 'yet' in questions and negatives: 'Have they arrived yet?' and 'They have not arrived yet.' In positive sentences we use 'already'.",
    tip: "Short answers sound natural: 'Yes, they have.' or 'No, not yet.'",
  },
  'Who broke the window?': {
    why: "Here 'who' is the subject: it asks which person did the action. When the question word is the subject, there is no 'did', and the verb follows it straight away: 'Who broke...'.",
    more: "The verb is in the past form because there is no 'did' to show the past. Compare 'Who did you see?', where 'you' is the subject and 'did' is needed.",
    tip: "Test it with an answer. If the answer is 'Tom broke the window', then 'who' is the subject and you need no 'did'.",
  },
  'What happened at the end?': {
    why: "'What' is the subject: it asks which thing happened. There is no 'did', because 'what' already acts as the subject. The verb 'happened' shows the past tense.",
    more: "When 'what' is the subject, we do not add 'did': 'What happened?'. More subject questions: 'What changed?' and 'What caused the fire?'",
    tip: "'What happened at the end?' is a typical reading question. Answer it in one clear sentence.",
  },
  'Who is knocking at the door?': {
    why: "'Who' is the subject, so the verb follows it directly: 'Who is knocking'. The tense is the present continuous, 'is' plus 'knocking'. There is no other subject, so nothing comes between 'Who' and 'is'.",
    more: "Compare: 'Who is calling you?' (who is the subject) and 'Who are you calling?' (you is the subject). The first has 'is' straight after 'who'.",
    tip: "After 'who' as the subject, we normally use a singular verb: 'Who is coming?'",
  },
  'Which team won the match?': {
    why: "'Which team' is the subject. It asks which team did the action, so no 'did' is needed. The verb 'won' is the past simple. The order is the same as in a statement: subject, verb, object.",
    more: "Compare: 'Which team did you support?'. Here 'you' is the subject, so 'did' is needed. In 'Which team won?' the team is the subject.",
    tip: "If the answer is the person or thing that does the action, put the question word first and add no 'do', 'does' or 'did'.",
  },
  "You're coming, aren't you?": {
    why: "The statement is positive ('You're coming'), so the tag is negative: 'aren't you'. 'You're' is short for 'you are'. The tag repeats the helper verb 'are' and then the pronoun 'you'.",
    more: "A tag asks the listener to agree. If your voice goes down, you expect 'yes'. If your voice goes up, you really are not sure.",
    tip: "Copy the helper verb from the statement and change positive to negative. For example: 'She is late, isn't she?'",
  },
  'She does not eat meat, does she?': {
    why: "The first part is negative ('does not eat'), so the tag is positive: 'does she'. The tag repeats the helper verb 'does' and uses the pronoun 'she'.",
    more: "A negative statement with a positive tag often shows that you expect the answer 'no'. 'She does not eat meat, does she?' means 'I think she does not.'",
    tip: "Look at the helper verb in the statement. Here it is 'does'. Use it again in the tag, and make it positive.",
  },
  "It's a lovely day, isn't it?": {
    why: "The statement is positive ('It's a lovely day'), so the tag is negative: 'isn't it'. 'It's' is short for 'it is'. The tag repeats 'is' and uses 'it'. A comma separates the statement from the tag.",
    more: "In Britain this is a very common way to start a friendly chat about the weather. The tag asks the listener to agree: 'Yes, it is.'",
    tip: "In the tag the pronoun comes after the verb: 'isn't it', not 'it isn't'.",
  },
  "They've left already, haven't they?": {
    why: "'They've' is short for 'they have', so the statement is in the present perfect: 'have left'. The tag repeats 'have': 'haven't they'. The statement is positive, so the tag is negative.",
    more: "'Haven't' is the short form of 'have not'. The tag uses only the helper verb 'have'. It does not repeat 'left'.",
    tip: 'When the statement has a helper verb (have, is, can, will), use that same verb in the tag. Do not change the tense.',
  },
  'You cannot swim, can you?': {
    why: "'Can' is a modal verb. The statement is negative ('cannot swim'), so the tag is positive: 'can you'. The tag repeats the same modal verb, 'can', and then the pronoun 'you'.",
    more: "'Cannot' is one word, and its short form is 'can't'. The long form never goes in a tag: we say 'can you?' or 'can't you?', never 'cannot you?'.",
    tip: "Use a modal tag to check an ability: 'You can drive, can't you?' or 'You can't drive, can you?'",
  },
  'He did not call you, did he?': {
    why: "The statement is negative ('did not call'), so the tag is positive: 'did he'. The tag repeats the helper verb 'did' and uses the pronoun 'he'. The main verb 'call' is not repeated.",
    more: "Use 'did' in the tag when the statement is in the past simple. The pronoun must match the subject: 'The girls did not call, did they?'",
    tip: "Check the pronoun. It must match the subject: 'he' for a man, 'she' for a woman, 'they' for more than one person.",
  },
  'Do you know where the station is?': {
    why: "This is an indirect question. 'Do you know' is the question, but after 'where' the order is the same as in a statement: 'the station is'. We do not say 'where is the station' here.",
    more: "Compare the direct question: 'Where is the station?'. The verb 'is' comes first. After 'Do you know', the words swap back: 'where the station is'.",
    tip: "Use indirect questions to sound polite when you ask a stranger for help: 'Do you know where the station is?'",
  },
  'Could you tell me how this works?': {
    why: "'Could you tell me' is a polite question. After 'how', use the order of a statement: 'this works', not 'does this work'. The verb 'works' keeps its -s because 'this' means 'it'.",
    more: "Compare the direct question: 'How does this work?'. In the indirect form the helper 'does' disappears, and the -s goes back onto the main verb.",
    tip: "Use 'Could you tell me...?' to ask people for information. It sounds more polite than a direct question.",
  },
  'Do you know why she left so early?': {
    why: "This is an indirect question. 'Do you know' makes the question, so after 'why' the words keep the order of a statement: 'she left'. There is no 'did' after 'why'.",
    more: "Compare the direct question: 'Why did she leave so early?'. There 'did' needs the base form 'leave'. In the indirect question the past form 'left' comes back.",
    tip: "After 'Do you know' or 'Can you tell me', put the question word first, then the subject, then the verb, as in a statement.",
  },
  'Do you have any idea what time it is?': {
    why: "This is an indirect question. 'Do you have any idea' is the question, and 'what time it is' follows in statement order: subject 'it', then verb 'is'. We do not say 'what time is it' here.",
    more: "Compare the direct question: 'What time is it?'. After 'Do you have any idea', 'it' and 'is' swap places. 'Any idea' means 'any knowledge about this'.",
    tip: "A shorter polite question is 'Do you know what time it is?'. Both use statement order after 'what time'.",
  },
  'How do you spell your surname?': {
    why: "'How' asks about the way to do something. Here it asks for the letters. The order is: 'How', 'do', 'you', 'spell', 'your surname'. The main verb 'spell' stays in its base form.",
    more: "A surname is your family name. People answer by saying the letters one at a time: 'S, M, I, T, H.'",
    tip: "Use this question at a hotel, a school or a bank when you must write someone's name correctly. Practise the names of the letters too.",
  },
  'What does this word mean?': {
    why: "'This word' is one thing, so we use 'does'. The order is: 'What', 'does', 'this word', 'mean'. The main verb 'mean' stays in its base form, because 'does' already carries the -s.",
    more: "'What do these words mean?' is the plural question. Use these questions in class when you meet a new word.",
    tip: "You can ask 'What does ... mean?' about a sign, a phrase or a sentence, not only a single word.",
  },
  'Where did you buy that bag?': {
    why: "'Did' shows that the question is about the past, so the main verb stays in its base form: 'buy', not 'bought'. The order is: 'Where', 'did', 'you', 'buy', 'that bag'.",
    more: "The answer can use the past form: 'I bought it in Leeds.' The question needs 'buy', but the answer needs 'bought'.",
    tip: "Use this question to start a chat about shopping. 'Where did you get that bag?' also works.",
  },
  'Are there any tickets left?': {
    why: "'There are' is the statement, so the question moves 'are' in front of 'there': 'Are there'. The plural word 'tickets' needs 'are'. 'Any' is used in questions, and 'left' means 'still available'.",
    more: "For one thing we use 'Is there': 'Is there a ticket left?'. A short answer is 'Yes, there are.' or 'No, there are not.'",
    tip: "Use it at a cinema or a station. You can also ask 'How many tickets are left?'",
  },
}
