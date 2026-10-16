import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * What Do You Say?: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/greetings-dialogue.ts). Written with AI on
 * 16 October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'You arrive at college early in the morning and see your teacher. | "Good morning!"': {
    why: "It is early in the morning, so the right greeting is 'Good morning'. When someone greets you, you can answer with the same greeting. We say 'Good morning' from the time we wake up until about twelve o'clock.",
    not: {
      'Good night!':
        "'Good night' is only for the end of the day, when someone goes to bed or leaves late in the evening. It is not a greeting.",
      'Bye for now.':
        "'Bye for now' is a way to say goodbye. You have only just met your teacher, so a greeting fits better.",
      'Not bad, thanks.':
        "'Not bad, thanks' answers the question 'How are you?'. Your teacher has not asked that question, so it does not fit.",
    },
    more: "To a teacher, you can add a title: 'Good morning, Mrs Khan.' It is polite and common in British schools.",
    tip: "Greet your teacher at the door with 'Good morning' and a smile. It sounds friendly and polite.",
  },
  'A classmate you know well walks past you in the corridor. | "Hi! How are you?"': {
    why: "'How are you?' asks about you, so you answer it: 'I'm fine, thanks.' Then you ask the same question back: 'And you?'. This is the normal, friendly way to answer a classmate.",
    not: {
      'How do you do.':
        "'How do you do' is a very formal greeting for meeting someone new. It does not answer 'How are you?', and it is too formal for a classmate.",
      'Good evening.':
        "'Good evening' is a greeting for the evening. It does not answer the question 'How are you?'.",
      'Here you are.':
        "'Here you are' is what we say when we give something to someone. Nothing is being handed over here.",
    },
    more: "Other friendly answers are 'I'm good, thanks', 'Not bad' and 'Fine, thanks'. Always say 'thanks', and ask back: 'How about you?'.",
    tip: "In England, 'How are you?' is often just a greeting. Give a short, positive answer and ask the question back.",
  },
  'You meet a friend in the afternoon at the bus stop. | "Good afternoon!"': {
    why: "It is the afternoon, so we say 'Good afternoon'. A good rule is to answer a greeting with the same words. We use 'Good afternoon' from about twelve o'clock until about six o'clock.",
    not: {
      'Good morning!':
        "'Good morning' is for the time before twelve o'clock. It is the afternoon, so it is the wrong time of day.",
      'Goodbye!':
        "'Goodbye' is for leaving. Your friend has just said hello, so a greeting is the right answer.",
      "Sorry, I'm late.":
        "'Sorry, I'm late' is an apology for arriving after the time. Your friend only said hello, so it does not fit.",
    },
    more: "Among friends, many people just say 'Hi' or 'Hello' at any time of day. 'Good afternoon' sounds a little more polite.",
    tip: 'Learn the three greetings by time of day: Good morning, Good afternoon and Good evening.',
  },
  'Your neighbour greets you when you get home in the evening. | "Good evening."': {
    why: "It is the evening, so the greeting is 'Good evening'. Answer a greeting with the same words, and choose the right one for the time of day. We use 'Good evening' from about six o'clock.",
    not: {
      'Good morning.':
        "'Good morning' is for the early part of the day. It is evening now, so it is the wrong time of day.",
      'Well done.':
        "'Well done' is praise, for example after someone passes an exam. Your neighbour has only said hello.",
      'Never mind.':
        "'Never mind' means 'It does not matter'. We say it after a small problem or mistake, not as a greeting.",
    },
    more: "In everyday English, 'Good evening' is a greeting. To say goodbye late at night, use 'Good night'.",
    tip: "Use 'Good evening' with neighbours, guests and people you do not know well. With friends, you can just say 'Hi'.",
  },
  'A friend texts you and asks how things are going. | "How\'s it going?"': {
    why: "'How's it going?' is an informal way to ask 'How are you?'. You answer with a short report on how things are. 'Not too bad, thanks' is a friendly and common British answer.",
    not: {
      'Here you go.':
        "'Here you go' is what we say when we hand something to someone. It does not answer a question about how things are.",
      'Good night.':
        "'Good night' is a goodbye for the end of the day. It does not answer 'How's it going?'.",
      "You're welcome.":
        "'You're welcome' is the answer to 'Thank you'. Your friend has not thanked you, so it does not fit.",
    },
    more: "'Not too bad' and 'Not bad' mean 'quite good'. British people use them a lot. Other answers are 'Good, thanks', 'Fine, and you?' and 'Pretty good'.",
    tip: "Use 'How's it going?' with friends only. With a teacher or a manager, use 'How are you?'.",
  },
  'You see a colleague you have not seen for a long time. | "Long time no see! How have you been?"':
    {
      why: "'How have you been?' asks how you have been since you last met. 'I've been well, thanks' uses the same words, 'have been', so it answers the question exactly. 'Long time no see' means 'We have not met for a long time'.",
      not: {
        'No, thank you.':
          "'No, thank you' is a polite way to say no, for example to food. This is a question about how you have been, not an offer.",
        'Mind the step.':
          "'Mind the step' is a warning to be careful of a step. It has nothing to do with the question.",
        'See you later.':
          "'See you later' is a goodbye. You have only just met again, so it does not answer 'How have you been?'.",
      },
      more: "'Have been' links the past to now. You can answer 'I've been fine' or 'I've been very busy'. Then ask: 'And you?'.",
      tip: "After a long time, ask 'How have you been?'. Answer with 'I've been ...' and add one short piece of news.",
    },
  'Someone introduces themselves to you at a new class. | "Hello, I\'m Sara. Nice to meet you."': {
    why: "Sara says 'Nice to meet you', so you say the same back with 'too': 'Nice to meet you too.' The word 'too' means 'also'. It is the normal reply when someone says it to you first.",
    not: {
      'No problem.':
        "'No problem' is an answer to 'Thank you' or 'Sorry'. Sara has not thanked you or said sorry.",
      'Good luck.':
        "'Good luck' is a wish for someone before a test or a big event. It is not a reply to an introduction.",
      'Help yourself.':
        "'Help yourself' invites someone to take food or drink. Nothing is being offered here.",
    },
    more: "You can add the name: 'Nice to meet you too, Sara.' Using the name shows that you were listening.",
    tip: "When you meet someone new, smile, say your name and say 'Nice to meet you'. Say 'too' when they say it first.",
  },
  'You want to introduce yourself to a new person at work. | You speak first.': {
    why: "You speak first, so you start with a greeting ('Hello'), give your name ('I'm Tom') and ask for theirs ('What's your name?'). It is a clear, polite start, and it uses short, common phrases.",
    not: {
      'Sorry about that.':
        "'Sorry about that' is an apology for a mistake. You have not made one, and it does not introduce you.",
      'Goodbye for now.':
        "'Goodbye for now' ends a meeting. You are starting one, so it is the wrong end.",
      'Yes, please.':
        "'Yes, please' accepts an offer. Nobody has offered you anything, so it does not fit.",
    },
    more: "You can also say 'Hi, I'm Tom. I've just started here.' Then listen for the other person's name and say it back: 'Nice to meet you, Anna.'",
    tip: 'Give your name first, and then ask for theirs. Say their name once afterwards, because it helps you remember it.',
  },
  'At a formal event, an older manager offers a handshake. | "How do you do?"': {
    why: "'How do you do?' is a formal greeting for meeting someone for the first time. It is not a real question about your health. The polite reply is to say the same words back: 'How do you do?'.",
    not: {
      "I'm doing my homework.":
        "This answers 'How do you do?' as if it asked what you are doing. But it is a greeting, not a question, so this reply is a mistake.",
      'Not bad, mate.':
        "'Not bad, mate' is informal and answers 'How are you?'. At a formal event with a manager, it is too casual.",
      'See you soon.':
        "'See you soon' is a goodbye. You are meeting for the first time, so a greeting is the right answer.",
    },
    more: "'How do you do?' is not very common today. People use it in very formal situations. In most situations, you can say 'Nice to meet you' and shake hands.",
    tip: "If someone says 'How do you do?', do not answer about your health. Say 'How do you do?' back and shake hands.",
  },
  'A friend introduces you to their sister. | "This is my sister, Mia."': {
    why: "Your friend is introducing you to Mia, so you greet her and say you are pleased to meet her: 'Hello, Mia. Nice to meet you.' Saying her name shows that you are listening and that you are polite.",
    not: {
      'Goodbye, Mia.':
        "'Goodbye' is for leaving. You are meeting Mia for the first time, so you start with a greeting.",
      'Sorry, Mia.': "'Sorry' is an apology. You have done nothing wrong, so it does not fit.",
      'Thank you, Mia.':
        "'Thank you' is for a gift or help. Mia has not given you anything, so it does not fit an introduction.",
    },
    more: "You can add a friendly question: 'Hello, Mia. Nice to meet you. Do you live near here?'",
    tip: "When you meet a friend's family, say 'Nice to meet you' and use their name. Smile, and shake hands if they offer.",
  },
  'Someone asks where you are from. | "Where are you from?"': {
    why: "The question asks for the place you come from, so you answer with 'I'm from' and a place. The reply uses 'Poland' as an example. In real life, say your own country or town.",
    not: {
      "You're welcome.":
        "'You're welcome' is the answer to 'Thank you'. Nobody has thanked you here.",
      'Good night.':
        "'Good night' is a goodbye at the end of the day. It does not tell the person where you are from.",
      'Excuse me.':
        "'Excuse me' gets someone's attention or asks them to move. It does not answer a question about your country.",
    },
    more: "You can also say 'I come from Poland' or 'I'm Polish'. 'Polish' describes the person, and 'Poland' is the country.",
    tip: "Be ready to say where you are from and where you live: 'I'm from Poland, but I live in Leeds.'",
  },
  'A friend helps you carry a heavy bag. | You want to thank them.': {
    why: "You want to thank your friend, so you use words of thanks. 'Thank you so much' is warm and strong: 'so much' shows that you are very thankful for the help.",
    not: {
      'Sorry!': "'Sorry' is an apology. You did not do anything wrong. You want to say thank you.",
      'Good morning!': "'Good morning' is a greeting. It does not thank your friend for the help.",
      'See you!':
        "'See you' is a goodbye. You may say it later, but it does not thank your friend.",
    },
    more: "There are many ways to thank someone: 'Thanks', 'Thanks a lot', 'Thank you very much' and 'Thank you so much'. More words mean more thanks.",
    tip: "When someone helps you, thank them at once, and name the help if you can: 'Thank you so much for carrying my bag.'",
  },
  'You thank a shop assistant and they reply. | "Thank you very much."': {
    why: "The shop assistant has heard 'Thank you very much', so the polite reply is 'You're welcome.' It means 'It was a pleasure to help you'. It is the standard answer to thanks.",
    not: {
      'No, thanks.':
        "'No, thanks' refuses an offer. Nobody has offered the assistant anything, and it does not answer 'Thank you'.",
      'Good evening.': "'Good evening' is a greeting. It does not respond to thanks.",
      "Sorry, I can't.":
        "'Sorry, I can't' refuses a request. There is no request here, only thanks.",
    },
    more: "Other replies to thanks are 'No problem', 'Not at all' and 'My pleasure'. In shops, you may also hear 'Cheers' or 'Thanks'.",
    tip: "Answer 'Thank you' with 'You're welcome' or 'No problem'. A reply to thanks is polite and friendly.",
  },
  'Someone gives you a small gift for your birthday. | "Here\'s a little present for you."': {
    why: "Someone is giving you a present, so you thank them and say something kind: 'Thank you, that's very kind.' The word 'kind' means nice to other people. It is polite to show that you are pleased.",
    not: {
      'No problem.':
        "'No problem' is what the giver says after being thanked. You are the one who receives the gift, so you thank.",
      'Mind the gap.':
        "'Mind the gap' is a warning on trains: be careful of the space between the train and the platform. It does not fit a gift.",
      'Good luck.':
        "'Good luck' is a wish before a test or a trip. It is not an answer to a present.",
    },
    more: "You can also say 'That's lovely, thank you' or 'What a nice surprise'. Say what you like about the present.",
    tip: 'When you receive a gift, thank the person first, and then say something kind about it.',
  },
  'A classmate lends you a pen during a lesson. | They hand you the pen.': {
    why: "A classmate has lent you a pen, so you thank them. 'Thanks a lot' is a friendly, informal way to say thank you to a classmate or a friend. It shows that you are thankful.",
    not: {
      'Goodbye!':
        "'Goodbye' is for leaving. Your classmate has just helped you, so you should thank them.",
      'How do you do?':
        "'How do you do?' is a formal greeting for meeting someone for the first time. You already know your classmate.",
      "Sorry, I'm late.":
        "'Sorry, I'm late' is an apology for arriving after the time. Nobody is waiting here; you were helped.",
    },
    more: "'Thanks a lot' is friendlier than a short 'Thanks'. For a teacher or an adult, 'Thank you very much' is a little more polite.",
    tip: "Thank people each time they lend you something, and say 'Thanks' again when you give it back.",
  },
  'You want to reply politely when someone thanks you for help. | "Thanks for your help!"': {
    why: "Someone is thanking you, so you answer with a friendly reply. 'No worries, happy to help' means 'It was no problem, and I was glad to help'. It is warm and natural.",
    not: {
      'Good night.': "'Good night' is a goodbye at the end of the day. It does not answer thanks.",
      'Excuse me, please.':
        "'Excuse me, please' gets attention or asks someone to move. It does not answer thanks.",
      'See you tomorrow.':
        "'See you tomorrow' says you will meet again. It is not a reply to 'Thanks for your help'.",
    },
    more: "'No worries' is common in informal English. In a more formal place, you can say 'You're welcome' or 'My pleasure'.",
    tip: "Use 'No worries' with friends and classmates. Use 'You're welcome' with teachers and with adults you do not know well.",
  },
  "You step on someone's foot by accident on the bus. | You speak to them.": {
    why: "You hurt someone by accident, so you apologise at once. 'I'm so sorry' is strong: the word 'so' makes the apology bigger. We use it when we have made a mistake or caused a small problem.",
    not: {
      'Well done!':
        "'Well done' is praise for something good. You have just hurt someone, so it is the wrong thing to say.",
      'Good afternoon!': "'Good afternoon' is a greeting. It does not say that you are sorry.",
      "You're welcome!":
        "'You're welcome' is the answer to 'Thank you'. Nobody has thanked you here.",
    },
    more: "You can add a question: 'I'm so sorry. Are you all right?' This shows that you care about the other person.",
    tip: 'Say sorry at once, say it clearly, and look at the person. A short apology is better than a long one.',
  },
  'Someone apologises to you for being a little late. | "Sorry I\'m late."': {
    why: "The person is apologising, so you accept the apology kindly: 'That's all right.' It means 'It's OK, there is no problem'. It makes the other person feel better.",
    not: {
      'Good morning.': "'Good morning' is a greeting. It does not answer an apology.",
      'No, thank you.':
        "'No, thank you' refuses an offer. Nobody has offered anything, so it does not fit.",
      'See you later.':
        "'See you later' is a goodbye. The person has just arrived, so it is the wrong time.",
    },
    more: "Other ways to accept an apology are 'No problem', 'Don't worry' and 'It doesn't matter'.",
    tip: "When someone says sorry for a small thing, answer quickly with 'That's all right' and smile.",
  },
  'You bump into a stranger in a busy shop. | You speak to them.': {
    why: "You bump into a stranger, so you apologise politely. 'Excuse me' is a polite way to speak to someone you do not know, and 'I'm sorry' says that you feel bad about it. Together they sound polite.",
    not: {
      'Good evening!':
        "'Good evening' is a greeting for the evening. It does not say that you are sorry for the bump.",
      'Here you are!':
        "'Here you are' is what we say when we give something to someone. You are not giving anything.",
      'Cheers!':
        "'Cheers' can mean 'thanks', or people say it when they lift their glasses. It is not an apology.",
    },
    more: "'Excuse me' is for getting attention or passing. 'Sorry' is for a mistake or an accident. People often use both after a bump in a busy place.",
    tip: "In a busy shop or in the street, 'Sorry' is the quickest apology. Say it as soon as you touch someone.",
  },
  'A friend says sorry for forgetting to call you. | "I\'m really sorry I forgot to call."': {
    why: "Your friend is apologising, and you want to be kind. 'Don't worry about it' means 'It is not a big problem for me'. It forgives your friend and ends the worry.",
    not: {
      'Good luck!': "'Good luck' is a wish before a test or a trip. It does not answer an apology.",
      'Nice to meet you.':
        "'Nice to meet you' is for meeting a person for the first time. You already know your friend.",
      'How do you do?':
        "'How do you do?' is a formal greeting for new people. It does not answer an apology.",
    },
    more: "You can add a reason to make your friend feel better: 'Don't worry about it. I was busy too.' Or you can just say 'It's fine.'",
    tip: "To forgive someone, use a short, kind phrase: 'Don't worry about it', 'No problem' or 'It's OK'.",
  },
  'You need to get past someone standing in a doorway. | You speak to them.': {
    why: "You want someone to move so that you can pass. 'Excuse me, please' is the polite way to ask a person to give you space. The word 'please' makes it more polite.",
    not: {
      'Good night.':
        "'Good night' is a goodbye at the end of the day. It does not ask the person to move.",
      'Thank you very much.':
        "'Thank you very much' thanks someone after they have done something. It is too early, because the person has not moved yet.",
      'See you soon.': "'See you soon' is a goodbye. You want to get past, not to leave.",
    },
    more: "After the person moves, you say 'Thank you'. So the pattern is: 'Excuse me, please' first, and then 'Thank you'.",
    tip: "In a crowd, say 'Excuse me' in a calm voice before you try to pass. Pushing without speaking is rude.",
  },
  'You want to borrow a pen from a classmate. | You ask them.': {
    why: "You are asking for something, so you use a polite question. 'Could I borrow ...?' is a polite way to ask to use something for a short time. 'Please' makes it more polite. The other replies are not questions.",
    not: {
      'Good morning, pen.':
        "'Good morning' is a greeting, and you say it to a person, not to a pen. It does not ask for anything.",
      'Sorry, pen.':
        "'Sorry' is an apology, and you cannot say sorry to a pen. It does not ask for the pen.",
      'Goodbye, pen.':
        "'Goodbye, pen' says goodbye to an object. It does not ask your classmate for the pen.",
    },
    more: "'Borrow' means you take something and give it back. 'Lend' means you give it to someone for a short time. You borrow from a person, and a person lends to you.",
    tip: "Use 'Could I borrow ...?' when you ask for something. Remember to say 'Thank you' and to give it back.",
  },
  'You ask the teacher to repeat something. They reply kindly. | "Could you say that again, please?"':
    {
      why: "You asked the teacher to repeat something, and the teacher says yes kindly. 'Of course' means 'Yes, certainly'. It is a polite way to agree to a request.",
      not: {
        'Good evening.':
          "'Good evening' is a greeting. The teacher is answering a request, not greeting you.",
        'No, thanks.':
          "'No, thanks' refuses an offer. It would not be kind, and it does not agree to your request.",
        'See you later.': "'See you later' is a goodbye. The teacher is still helping you.",
      },
      more: "Other friendly ways to agree are 'Sure', 'Certainly' and 'No problem'. 'Of course' is polite, and 'Sure' is more informal.",
      tip: "If you do not hear something, ask 'Could you say that again, please?'. It is better than staying silent.",
    },
  'You want someone to help you with a question. | You ask politely.': {
    why: "You want help, so you must ask politely. 'Could you ..., please?' is a polite way to ask a person to do something for you. It sounds friendly and kind.",
    not: {
      'Give me that now.':
        "'Give me that now' is an order. It sounds rude, because there is no 'please' and it does not ask politely.",
      'Good night.': "'Good night' is a goodbye at the end of the day. It does not ask for help.",
      "You're welcome.":
        "'You're welcome' is a reply to 'Thank you'. You are asking for help, not answering thanks.",
    },
    more: "'Could' is more polite than 'Can'. Add 'please' and a smile for a polite request: 'Could you help me with this question, please?'",
    tip: "Do not use 'Give me' or 'I want' with people. Start with 'Could you ..., please?' instead.",
  },
  'You ask to open the window because it is hot. | You ask the teacher.': {
    why: "You ask the teacher for permission, so you use a polite question. 'Is it OK if I ...?' asks whether the teacher agrees, and it names what you want to do: open the window.",
    not: {
      'Goodbye!': "'Goodbye' is for leaving. You want to open a window, not leave the room.",
      "Sorry I'm late.":
        "'Sorry I'm late' is an apology for arriving after the time. You are not late, and you are not asking for anything.",
      'Nice to meet you.':
        "'Nice to meet you' is for meeting someone new. You know your teacher, and you need to ask for permission.",
    },
    more: "Other polite ways to ask permission are 'May I open the window?' and 'Can I open the window, please?'. 'May I' is the most formal.",
    tip: "To ask permission, begin with 'Is it OK if I ...?' or 'May I ...?', and then say what you want to do.",
  },
  'Someone asks you to pass the salt at dinner. | "Could you pass the salt, please?"': {
    why: "Someone asks you to pass the salt. You give it to them and say 'Here you are.' We say this when we hand something to a person. It is a short, friendly way to say 'This is for you'.",
    not: {
      'Good morning.':
        "'Good morning' is a greeting. It does not respond to a request for the salt.",
      'How do you do?':
        "'How do you do?' is a very formal greeting for meeting someone. It does not fit a request at dinner.",
      'See you tomorrow.':
        "'See you tomorrow' is a goodbye. The meal is happening now, and the person is waiting for the salt.",
    },
    more: "You can also say 'Here you go' or 'Here it is'. They all mean the same.",
    tip: "When you give something to someone, say 'Here you are'. The other person will say 'Thank you'.",
  },
  'You want to ask the time from a stranger politely. | You speak first.': {
    why: "You speak to a stranger, so you start with 'Excuse me' to get attention politely. Then you ask your question: 'what time is it, please?'. The word 'please' makes it more polite.",
    not: {
      'Good night, time.':
        "'Good night' is a goodbye, and 'time' is not a person. It does not ask a question.",
      'Sorry, time.': "'Sorry, time' is not a question. It does not ask the stranger for anything.",
      'Cheers, time.': "'Cheers, time' does not make sense, and it does not ask a question.",
    },
    more: "Other polite ways to ask are 'Do you have the time, please?' and 'Could you tell me the time, please?'. Start with 'Excuse me' each time.",
    tip: "Start with 'Excuse me' before you ask a stranger a question. Say 'Thank you' when they answer.",
  },
  "You are leaving a friend's house at night. | You say goodbye.": {
    why: "You are leaving, so you say goodbye. 'Goodbye, see you soon' is a warm goodbye: it says goodbye and shows that you hope to meet again.",
    not: {
      'Good morning!':
        "'Good morning' is a greeting, and it is for the early part of the day. You are leaving at night, so it does not fit.",
      'Hello again!':
        "'Hello again' is a greeting when you meet someone again. You are leaving, not arriving.",
      'Nice to meet you!':
        "'Nice to meet you' is for a first meeting. You already know your friend.",
    },
    more: "At night, you can also say 'Good night' as you leave. 'Good night' is a goodbye, and 'Goodbye' works at any time of day.",
    tip: "When you leave a friend's house, thank them too: 'Thanks for having me. See you soon.'",
  },
  'A friend says they will see you the next day. | "See you tomorrow!"': {
    why: "Your friend says 'See you tomorrow', and it is polite and friendly to answer with the same words. You can repeat a goodbye phrase back: 'See you tomorrow.'",
    not: {
      'Good morning!':
        "'Good morning' is a greeting. This is a goodbye moment, so a greeting does not fit.",
      'How do you do?':
        "'How do you do?' is a formal greeting for meeting someone new. You are saying goodbye to a friend.",
      'Excuse me!': "'Excuse me' gets attention or asks someone to move. It is not a goodbye.",
    },
    more: "You can also say 'Bye, see you' or just 'See you'. If you do not know when you will meet, say 'See you soon' or 'See you later'.",
    tip: "Match your goodbye to the plan: 'See you tomorrow' if you meet tomorrow, and 'See you on Monday' if you meet on Monday.",
  },
  'You finish a phone call with a friend. | You end the call.': {
    why: "You end the call with a goodbye, so you say 'Bye'. 'Bye for now' means 'Goodbye until we speak again'. 'Take care' is a kind wish for your friend.",
    not: {
      'Good morning, hello!':
        "'Good morning' and 'hello' are greetings for the start of a call, not the end.",
      'Sorry, sorry!':
        "'Sorry' is an apology. You have not done anything wrong, and you are ending a call, not apologising.",
      'Nice to meet you!':
        "'Nice to meet you' is for meeting someone new. You are speaking to a friend you already know.",
    },
    more: "More ways to end a call are 'Speak soon', 'Talk to you later' and 'See you soon'. Say thank you if the friend called you.",
    tip: "End a phone call with a short goodbye and a kind wish: 'Bye for now, take care.'",
  },
  'You leave a shop after buying something. | "Thanks, goodbye!" (shop assistant). You reply.': {
    why: "The assistant says goodbye, so you answer with a goodbye too. 'Have a nice day' is a friendly wish that people often add when they leave a shop.",
    not: {
      'Good morning!':
        "'Good morning' is a greeting, and you are leaving. It does not answer a goodbye.",
      "Sorry I'm late!":
        "'Sorry I'm late' is an apology for arriving after the time. You are leaving the shop, not arriving.",
      'How do you do?':
        "'How do you do?' is a formal greeting for meeting someone new. You are saying goodbye.",
    },
    more: "If the assistant says 'Have a nice day', you can answer 'Thanks, you too'. 'You too' means 'I wish you a nice day also'.",
    tip: "When you leave a shop, say 'Thank you' and 'Goodbye'. Add 'Have a nice day' to sound friendly.",
  },
  'You say goodbye to a colleague on Friday afternoon. | You speak to them.': {
    why: "It is Friday afternoon, and the weekend starts soon. People wish each other 'Have a good weekend' before they leave work or school. It shows that you hope the other person has a nice time.",
    not: {
      'Good morning!':
        "'Good morning' is a greeting for the early day. It is Friday afternoon, and you are leaving.",
      'Nice to meet you!':
        "'Nice to meet you' is for a first meeting. You already work with your colleague.",
      'Sorry about that!':
        "'Sorry about that' is an apology. You have not done anything wrong, so you do not need to apologise.",
    },
    more: "The answer is usually 'You too' or 'Thanks, you too'. At the start of the week, people ask 'Did you have a good weekend?'.",
    tip: "On Friday, use 'Have a good weekend' as your goodbye. On Monday, ask 'Did you have a good weekend?'.",
  },
  'You do not understand a word the teacher said. | You ask for help.': {
    why: "You do not know a word, so you ask what it means. 'What does ... mean?' is the normal question for a word you do not know. The word 'please' makes it polite.",
    not: {
      'Good night.':
        "'Good night' is a goodbye at the end of the day. It does not ask about the word.",
      "You're welcome.": "'You're welcome' answers 'Thank you'. You need help, so you must ask.",
      'See you later.':
        "'See you later' is a goodbye. You need the teacher's help now, so you should ask.",
    },
    more: "Other useful questions are 'Can you explain that, please?' and 'How do you say ... in English?'. Teachers are happy when students ask.",
    tip: "Point to the word if you can, and ask: 'What does this word mean, please?'",
  },
  'The teacher is speaking too fast for you. | You ask politely.': {
    why: "The teacher is going too fast, so you ask politely for a slower speed. 'Could you ..., please?' is polite, and 'more slowly' tells the teacher exactly what you need.",
    not: {
      'Goodbye!': "'Goodbye' ends the lesson. You want to keep learning, so you ask for help.",
      'Sorry, fast!':
        "'Sorry, fast' is not a full sentence, and it does not ask the teacher to slow down. Say clearly what you want.",
      'Cheers!':
        "'Cheers' means 'thanks', or people say it when they lift their glasses. It does not ask for anything.",
    },
    more: "You can also say 'Could you repeat that, please?' or 'I'm sorry, I didn't catch that.' Both are polite ways to ask for help.",
    tip: 'Do not be shy. Teachers are happy to speak more slowly when students ask politely.',
  },
  'You need to leave the classroom for a moment. | You ask the teacher.': {
    why: "You must ask the teacher for permission, so you use a polite question. 'May I ...?' is the most polite way to ask for permission. The word 'please' makes it even more polite.",
    not: {
      'Good morning!': "'Good morning' is a greeting. It does not ask for permission to leave.",
      'Nice to meet you!':
        "'Nice to meet you' is for meeting someone new. You know your teacher, and you need permission.",
      'Here you are!':
        "'Here you are' is what we say when we hand something over. You are asking to go out, not giving something.",
    },
    more: "'May I' is formal and very polite. In school you can also say 'Can I leave the room, please?'.",
    tip: "Catch the teacher's eye, and then ask: 'May I leave the room, please?'. Say 'Thank you' when the teacher says yes.",
  },
  'You did not hear the page number. | You ask the teacher.': {
    why: "You missed the page number, so you ask the teacher for it. 'Which page are we on?' is the clear question for this problem. The word 'please' makes it polite.",
    not: {
      'Good evening!': "'Good evening' is a greeting. It does not ask for the page number.",
      'Sorry, page!':
        "'Sorry, page' is not a question and does not ask for anything. The teacher cannot help from these words.",
      'See you soon!':
        "'See you soon' is a goodbye. You are in the lesson now and need the page number.",
    },
    more: "Other ways to ask are 'What page are we on?' and 'Which page is it, please?'. You can also ask a classmate quietly.",
    tip: "If you miss an instruction, ask early. A short question like 'Which page, please?' is enough.",
  },
  'The teacher asks if everyone understands. | "Does everyone understand?" You do not.': {
    why: "The teacher asks if everyone understands, and you do not. It is good and honest to say so: 'Sorry, I don't understand.' This lets the teacher help you.",
    not: {
      'Good morning.':
        "'Good morning' is a greeting. The teacher asked a question, so you should answer it.",
      "You're welcome.": "'You're welcome' answers 'Thank you'. The teacher has not thanked you.",
      'Goodbye.': "'Goodbye' ends the lesson. You still need to understand, so say so.",
    },
    more: "You can add a request: 'Sorry, I don't understand. Could you explain again, please?'. Teachers want to know when students are lost.",
    tip: 'It is fine to say that you do not understand. It helps the teacher, and often other students feel the same.',
  },
  'You want to know how to spell a word. | You ask the teacher.': {
    why: "You want to know the letters of a word, so you ask how to spell it. 'How do you spell that?' is the usual question. Adding 'please' keeps it polite.",
    not: {
      'Good night, spell!':
        "'Good night, spell' does not make sense. 'Good night' is a goodbye, and 'spell' alone does not ask a question.",
      'Sorry, spell!':
        "'Sorry, spell' is not a question, so the teacher does not know what you need.",
      'Cheers, spell!': "'Cheers, spell' does not ask for anything. The teacher cannot answer it.",
    },
    more: "You can also say 'Could you spell that for me?' or 'How is that spelled?'. Say the letters slowly when you spell aloud.",
    tip: 'When you ask how to spell a word, write the letters down as the teacher says them.',
  },
  'A friend offers you a cup of tea. | "Would you like a cup of tea?"': {
    why: "Your friend offers you tea and you want it, so you say 'Yes, please.' Then you add 'That would be lovely' to show that you are happy. The word 'lovely' means very nice.",
    not: {
      'Good night.':
        "'Good night' is a goodbye at the end of the day. It does not answer the offer.",
      'Sorry, late.':
        "'Sorry, late' is a short apology for arriving late. You are not arriving, and you must answer the offer.",
      'How do you do?':
        "'How do you do?' is a formal greeting for meeting someone new. It does not answer an offer of tea.",
    },
    more: "To accept an offer, say 'Yes, please'. To refuse, say 'No, thank you'. In English, 'please' goes with 'yes', and 'thank you' goes with 'no'.",
    tip: "Remember the pair: 'Yes, please' to accept and 'No, thank you' to refuse. A short 'Yes' or 'No' alone can sound impolite.",
  },
  'Someone offers you more food but you have had enough. | "Would you like some more?"': {
    why: "You have had enough, so you refuse politely. 'No, thank you' is the polite way to say no to an offer. 'I'm full' gives the reason: you cannot eat more.",
    not: {
      'Good morning.': "'Good morning' is a greeting. It does not answer the offer of more food.",
      'See you later.': "'See you later' is a goodbye. The offer needs a yes or a no.",
      'How do you do?':
        "'How do you do?' is a formal greeting for meeting someone new. It does not answer an offer.",
    },
    more: "'Full' means you cannot eat any more. You can also say 'That was delicious, thank you, but I couldn't eat any more'. It is kind to praise the food.",
    tip: "To refuse food politely, say 'No, thank you' and give a short reason. Add 'It was delicious' to be kind.",
  },
  'A friend tells you they passed their exam. | "I passed my exam!"': {
    why: "Your friend has good news. We show that we are happy for people with 'Well done' and 'Congratulations'. They are warm words for a success, such as passing an exam.",
    not: {
      'Sorry to hear that.':
        "'Sorry to hear that' is for bad news. Passing an exam is good news, so it would be strange.",
      'Good night.': "'Good night' is a goodbye at the end of the day. It does not fit good news.",
      'Excuse me.':
        "'Excuse me' gets attention or asks someone to move. It does not fit good news.",
    },
    more: "You can say more: 'That's great news' or 'How did it go?'. People like to tell you the details of a success.",
    tip: "Use 'Congratulations' for big successes, such as exams, new jobs and weddings. For small things, 'Well done' is enough.",
  },
  'A friend tells you they feel unwell. | "I don\'t feel very well today."': {
    why: "Your friend feels ill, so you show that you care. 'Oh dear' shows that you are sorry. 'I hope you feel better soon' is a kind wish. It is the right reply to news about illness.",
    not: {
      'Congratulations!':
        "'Congratulations' is for good news, like passing a test. Feeling unwell is not good news.",
      'Good morning!':
        "'Good morning' is a greeting. Your friend did not greet you; they told you about their health.",
      'Here you are!':
        "'Here you are' is what we say when we give something. Nothing is being handed over here.",
    },
    more: "Other kind replies are 'I'm sorry to hear that', 'Take care' and 'Get well soon'. You can also ask 'Can I help?'.",
    tip: "When someone is ill, show that you care with a short wish: 'Get well soon' or 'I hope you feel better soon'.",
  },
  'Someone sneezes near you. | "Atchoo!"': {
    why: "In Britain, people usually say 'Bless you' when someone sneezes. It is short and polite, and almost everyone says it. The person who sneezed usually answers 'Thank you'.",
    not: {
      'Goodbye!':
        "'Goodbye' is for leaving. Someone has only sneezed, so you can say something kind.",
      'How do you do?':
        "'How do you do?' is a formal greeting for meeting someone new. It does not fit a sneeze.",
      'See you later!': "'See you later' is a goodbye. It does not fit a sneeze.",
    },
    more: "Many languages have their own phrase for a sneeze. In English, the usual phrase is 'Bless you'.",
    tip: "If you sneeze and someone says 'Bless you', answer 'Thank you'.",
  },
  'A friend wishes you luck before your test. | "Good luck with your test!"': {
    why: "Your friend wishes you luck, which is a kind thing to do, so you thank them. 'Thank you' is short and polite. You can say it with a smile.",
    not: {
      "Sorry I'm late.":
        "'Sorry I'm late' is an apology for being late. Your friend did not say you were late; they wished you luck.",
      'Good night.':
        "'Good night' is a goodbye at the end of the day. It does not answer a wish for luck.",
      'No, thanks.':
        "'No, thanks' refuses an offer. A wish for luck is not an offer, and 'No, thanks' sounds unfriendly.",
    },
    more: "You can add something kind: 'Thanks, I need it', or, if your friend has a test too, 'Thanks, you too'.",
    tip: 'When someone is kind to you, say thank you. It takes one second and makes people happy.',
  },
  'You greet someone you do not know on a quiet morning walk. | You speak first.': {
    why: "You meet someone you do not know, in the morning. A friendly 'Good morning' is the normal, polite greeting. In quiet places in Britain, people often greet passers-by this way.",
    not: {
      'Goodbye!': "'Goodbye' is for leaving. You are just meeting the person, so you greet them.",
      'Sorry!':
        "'Sorry' is an apology. You have not done anything wrong, so you do not need to apologise.",
      'How do you do?':
        "'How do you do?' is a very formal greeting used after an introduction. You have not been introduced, so it would sound strange.",
    },
    more: "A smile and a short 'Morning' is also common. In the afternoon, use 'Good afternoon' or just 'Hello'.",
    tip: "On a walk in the country or in a quiet street, a short 'Morning' or 'Hello' is friendly. People will usually answer.",
  },
  'A friend says "Happy birthday!" to you. | "Happy birthday!"': {
    why: "A friend is wishing you a happy birthday, which is kind, so you thank them. 'Thank you very much' is warm and polite. It shows that you are happy your friend remembered.",
    not: {
      'Good night.':
        "'Good night' is a goodbye at the end of the day. It does not answer a birthday wish.",
      'Excuse me.':
        "'Excuse me' gets attention or asks someone to move. It does not answer a birthday wish.",
      'See you later.':
        "'See you later' is a goodbye. Your friend has just given you a wish, so you should thank them.",
    },
    more: "You can also say 'Thanks, that's so kind of you' or 'Thank you, I'm having a lovely day'. For a card or a gift, say thanks for that too.",
    tip: "Say thank you to everyone who wishes you a happy birthday. On a friend's birthday, say 'Happy birthday' and smile.",
  },
}
