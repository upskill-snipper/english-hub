import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * What Do You Say?: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/greetings-dialogue.ts). Written with AI on
 * 16 October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 240 exchanges in three tiers (set
 * phrases, the phrase that fits the context, and short exchanges where the
 * person and the place decide), every wrong reply a real reply of the wrong
 * job or register with its own "why not", and the 45 earlier exchanges given
 * new situations and wrong replies. No explanation names another exchange's
 * answer where the two can share a round. Written with AI and checked against
 * each question, as the founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'It is 8.30 am. You arrive at school. Your teacher, Ms Patel, is at the classroom door. | You greet her.':
    {
      why: "It is 8.30 am, so it is still the morning. We greet people with 'Good morning' from the time we get up until twelve o'clock. Adding the teacher's name makes it polite.",
      not: {
        'Good evening, Ms Patel.':
          "'Good evening' is a greeting for later in the day, from about six o'clock. At 8.30 am it is the wrong time.",
        'Good night, Ms Patel.':
          "'Good night' is not a greeting. We say it when we leave late in the evening or go to bed.",
        'Goodbye, Ms Patel.':
          "'Goodbye' is for leaving. You have just arrived, so you need a greeting.",
      },
      more: "In many British schools, pupils call a woman teacher 'Miss' and a man teacher 'Sir'. Using the teacher's name, as here, is polite too.",
      tip: 'Greet your teacher at the door with a smile. It is a small thing, and teachers notice it.',
    },
  'A classmate you know well walks past you in the corridor. | "Hi. How are you?"': {
    why: "'How are you?' asks how you feel today. 'Good, thanks' answers it, and 'And you?' asks the same question back. This is the friendly, normal reply to a classmate.",
    not: {
      "I'm fourteen. And you?":
        "This tells your age. It answers 'How old are you?', not 'How are you?'.",
      "I'm from Poland. And you?":
        "This tells where you come from. It answers 'Where are you from?'.",
      "I'm in Year 9. And you?": "This tells your school year. It answers 'What year are you in?'.",
    },
    more: "'How are you?' and 'How old are you?' look alike. Listen for 'old': that question wants a number of years.",
    tip: "In Britain, 'How are you?' is often just a friendly hello. Give a short, happy answer and ask it back.",
  },
  'It is 2 pm. You see your neighbour, Mr Jones, in the street. | You greet him.': {
    why: "At 2 pm it is the afternoon. We use 'Good afternoon' from twelve o'clock until about six. It is a polite greeting for a neighbour.",
    not: {
      'Good morning, Mr Jones.':
        "'Good morning' is for the time before twelve o'clock. At 2 pm the morning is over.",
      'Good night, Mr Jones.':
        "'Good night' is said when you leave late in the evening or go to bed. It is not a greeting.",
      'Goodbye, Mr Jones.':
        "'Goodbye' is for leaving. You have just met Mr Jones, so you greet him.",
    },
    more: "With a friend you can say 'Hi' or 'Hello' at any time of day. The time greetings sound a little more polite, so they suit an older neighbour.",
    tip: "Use 'Mr' for a man and 'Mrs', 'Ms' or 'Miss' for a woman, then the family name: 'Mr Jones'.",
  },
  'It is 7 pm. You get home. Your neighbour, Mrs Ali, is in her front garden. | You greet her.': {
    why: "At 7 pm it is the evening. We greet people with 'Good evening' from about six o'clock. It is polite and friendly for a neighbour.",
    not: {
      'Good afternoon, Mrs Ali.':
        "The afternoon ends at about six o'clock. At 7 pm this greeting is too late.",
      'Good night, Mrs Ali.':
        'This one sounds like a greeting, but it is a goodbye. We say it at the end of the evening or before bed.',
      'Good morning, Mrs Ali.': "'Good morning' is only for the time before twelve o'clock.",
    },
    more: "Two evening phrases are easy to mix up. 'Good evening' says hello. The one with 'night' says goodbye.",
    tip: "'Good evening' sounds polite in shops, restaurants and hotels. With friends, 'Hi' is fine at any time.",
  },
  'It is your first day at a new school. A girl sits next to you. You have never met her. | "Hello. I\'m Sara."':
    {
      why: "You are meeting Sara for the first time. When we meet someone new, we say 'Nice to meet you'. Saying her name back, 'Hi, Sara', shows that you heard it.",
      not: {
        'Hi, Sara. Nice to see you again.':
          "'Nice to see you again' is for someone you have met before. You have never met Sara.",
        "Hi, Sara. I'm fine, thank you.":
          "'I'm fine, thank you' answers 'How are you?'. Sara did not ask that.",
        "Hi, Sara. You're welcome.": "This is the answer to 'thank you'. Sara has not thanked you.",
      },
      more: "Then say your own name: 'I'm Ali.' A new friend often answers with the same phrase and 'too' at the end.",
      tip: 'When you meet someone new, smile and say their name. Using a name helps you remember it.',
    },
  'A girl at your new youth club starts talking to you. | "Where are you from?"': {
    why: "'Where are you from?' asks about your country or town. 'I'm from Poland' answers it. Use 'from' before the name of the place.",
    not: {
      "My name's Ola.":
        "This tells your name. It answers 'What's your name?', not 'Where are you from?'.",
      "I'm thirteen.": "This tells your age. It answers 'How old are you?'.",
      'Very well, thanks.': "This tells how you feel. It answers 'How are you?'.",
    },
    more: "You can give the country or the nationality: 'I'm from Poland' or 'I'm Polish'. Both need a capital letter.",
    tip: "Ask the question back to keep talking: 'What about you?'",
  },
  'A friend helps you carry a heavy bag up the stairs. | You speak to her.': {
    why: "Your friend helped you, so you thank her. 'Thanks so much for helping' says what she did and shows that you are grateful.",
    not: {
      "You're welcome, any time.":
        "This is the answer to 'thank you'. Your friend did the helping, so she would say it, not you.",
      'No problem, happy to help.':
        'This is what the helper says after being thanked. Here you are the one who was helped.',
      "Sorry, I'm really late.":
        'This is an apology for arriving late. Nothing in the situation is about time.',
    },
    more: "Thanks sound warmer with a reason: 'Thanks for waiting', 'Thanks for the lift', 'Thanks for helping'.",
    tip: 'Remember who says what. The person who was helped says thank you. The helper answers it.',
  },
  'You hold the door open for a man with a pushchair. | "Oh, thank you very much."': {
    why: "The man thanks you, so you answer his thanks. 'You're welcome' is the polite, standard reply. It means you were happy to help.",
    not: {
      'Sorry about that.':
        'This is an apology. You helped the man, so you have nothing to be sorry for.',
      'Here you are.':
        'We say this when we hand something to someone. You are not giving him anything.',
      'Yes, please.':
        "This accepts an offer, as in 'Would you like some tea?'. The man did not offer you anything.",
    },
    more: "Other friendly answers to thanks are 'No problem' and 'No worries'. They are a little more casual.",
    tip: "Small kindnesses, such as holding a door, are common in Britain. Expect a 'thank you', and answer it with a smile.",
  },
  'Someone gives you a small gift for your birthday. | "Here\'s a little present for you."': {
    why: "Someone is giving you a present, so you thank them. 'That's very kind' shows that you are pleased they thought of you.",
    not: {
      "Oh, you're welcome. Any time.":
        "This answers 'thank you'. The other person is giving, so they might say this to you later, not the other way round.",
      'Here you are. Enjoy it.':
        'We say this when we give something. Here you are receiving the present, not giving it.',
      "Oh, I'm so sorry. My fault.":
        'This apologises for a mistake. Nobody has made a mistake here.',
    },
    more: "When you open it, say something kind about the present: 'I love it' or 'It's perfect'.",
    tip: 'In Britain, people often send a short thank-you message after a birthday. A text or a card is enough.',
  },
  'You have forgotten your pen. A classmate gives you one. | She hands you the pen.': {
    why: "Your classmate has helped you by giving you a pen. 'Thanks a lot' is a friendly way to say thank you to someone your age.",
    not: {
      "You're welcome.":
        "This answers 'thank you'. Your classmate gave the pen, so she would say this, not you.",
      'Here you are.':
        'The giver says this when handing something over. Your classmate might say it as she gives you the pen.',
      'Yes, please.':
        'This accepts an offer. She has already given you the pen, so it is time to thank her.',
    },
    more: "'Thanks' and 'Thank you' work everywhere. In British English, friends also say 'Cheers'.",
    tip: "Give the pen back at the end of the lesson and say 'Thanks again'.",
  },
  'You helped a classmate with her homework. | "Thanks for your help."': {
    why: "Your classmate thanks you, so you answer her thanks. 'No problem, any time' means you were glad to help and would help again.",
    not: {
      "Never mind, it's OK.":
        "'Never mind' is for something that went wrong or does not matter, such as a small mistake. It does not answer thanks.",
      'Thank you for your help.':
        'This thanks someone who helped you. You were the helper, so it mixes up the roles.',
      'Yes, of course I will.':
        "This agrees to do something later, as after 'Will you help me?'. She is thanking you, not asking.",
    },
    more: "'Never mind' is for problems that do not matter: 'I've lost my pen.' 'Never mind, use mine.'",
    tip: 'When someone thanks you, a short, warm answer is best. You do not need to say more.',
  },
  "You step on someone's foot by accident on the bus. | You speak to them.": {
    why: "You hurt someone by accident, so you apologise at once. 'I'm so sorry' is a strong, kind apology, and 'Oh' shows you have only just noticed.",
    not: {
      'Oh, never mind.':
        'The other person might say this to you, to show it does not matter. You caused the problem, so you apologise.',
      "Oh, you're welcome.": "This answers 'thank you'. Nobody has thanked you.",
      'Oh, well done.':
        'This praises someone for doing something good. Stepping on a foot is not something to praise.',
    },
    more: "The other person often answers 'That's OK' or 'Don't worry'. In Britain, people say sorry a lot, even for small accidents.",
    tip: "Say sorry straight away and look at the person. 'Sorry, are you OK?' is kind.",
  },
  'You are waiting for a friend at the cinema. She arrives five minutes late. | "Sorry I\'m late."':
    {
      why: "Your friend apologises for being late. 'That's OK. Don't worry' accepts her apology kindly and shows that you are not angry.",
      not: {
        "Oh, you're very welcome.":
          "This answers 'thank you'. Your friend said sorry, not thank you.",
        'Excuse me, can I get past?':
          'This asks someone to move so you can pass. Your friend has just arrived and apologised.',
        'Same to you, thanks.':
          "This returns a good wish, as after 'Have a nice day'. An apology is not a wish.",
      },
      more: "Other kind answers to an apology are 'No problem' and 'It doesn't matter'.",
      tip: 'When someone apologises, accept it quickly. A short, kind answer helps everyone feel better.',
    },
  'You bump into a stranger in a busy shop. | You speak to them.': {
    why: "You bumped into someone, so you apologise. In Britain, a quick 'Sorry' is the normal thing to say after a small accident, even to a stranger.",
    not: {
      'Oh, never mind about that.':
        "'Never mind' tells someone a problem does not matter. The stranger could say it to you, but you caused the bump.",
      'Oh, thanks for that.': 'This thanks someone. The stranger has done nothing for you.',
      "Oh, you're welcome.": "This answers 'thank you'. Nobody has thanked you.",
    },
    more: 'British people often say sorry even when the other person bumped into them. It is a polite habit, not always a real apology.',
    tip: 'After a bump, apologise first and then check the person is all right.',
  },
  'Your friend promised to phone you last night, but she forgot. | "I\'m really sorry I forgot to call."':
    {
      why: "Your friend apologises. 'Don't worry. It's fine' accepts her apology and shows that you are not upset.",
      not: {
        "I'm sorry to hear that.":
          "We say this when someone tells us bad news, such as 'My cat is ill'. Your friend is apologising, not giving news.",
        "You're welcome, any time.":
          "This answers 'thank you'. Your friend said sorry, not thank you.",
        'Well done. Good for you.':
          'This praises someone for doing something good. Forgetting to call is not something to praise.',
      },
      more: "'I'm sorry' and 'I'm sorry to hear that' are different. The first apologises. The second shows you care about someone's bad news.",
      tip: "If you were a little upset, you can still be kind: 'It's fine. Call me tonight.'",
    },
  'Someone is standing in a doorway. You need to get past. | You speak to them.': {
    why: "You need the person to move, so you ask politely with 'Excuse me, please'. We say it before we interrupt someone or ask them to let us pass.",
    not: {
      'Yes, please. Thanks.': 'This accepts an offer. Nobody has offered you anything.',
      'Oh, here you are.':
        'We say this when we give something to someone. You are not giving anything.',
      'Oh, bless you.': 'We say this when someone sneezes. It does not ask anyone to move.',
    },
    more: "In Britain you will also hear 'Sorry, can I just squeeze past?'. People often say 'Sorry' after a bump, too.",
    tip: 'Say it with a smile and wait a moment. Most people step aside at once.',
  },
  'You are stuck on a maths question. Your teacher is walking past. | You speak to your teacher.': {
    why: "You need your teacher's help, so you make a polite request: 'Could you help me with this?' Starting with 'Sorry' is polite when you interrupt.",
    not: {
      'Help me with this question right now.':
        'This is an order, not a request. Speaking to a teacher like this sounds rude.',
      'Can I help you with this one, Miss?':
        'This offers help to the teacher. You are the one who needs help.',
      'Would you like some help with that?':
        'This is an offer of help. You want to receive help, not give it.',
    },
    more: "'Could you...?' sounds a little more polite than 'Can you...?'. Both are fine in class.",
    tip: 'Put up your hand, wait, and then say which question you are stuck on.',
  },
  'Someone asks you to pass the salt at dinner. | "Could you pass the salt, please?"': {
    why: "You hand the salt to the person, and as you give it you say 'Here you are'. It is the natural thing to say when you hand something over.",
    not: {
      'Yes, I could.':
        "'Could you pass...?' is a polite request, not a question about your ability. This answer sounds odd, and it does not pass the salt.",
      'Yes, help yourself.':
        "'Help yourself' tells someone to take something themselves. They asked you to pass it, so this sounds unhelpful.",
      "Yes, you're welcome.":
        "This answers 'thank you'. The person has asked for something, not thanked you.",
    },
    more: "'Here you go' means the same and is a little more casual.",
    tip: "At the table, ask for things you cannot reach: 'Could you pass the bread, please?'. Do not reach across other people.",
  },
  "It is 10 pm. You are leaving a friend's house after a film night. | You speak to your friend at the door.":
    {
      why: "It is late in the evening and you are leaving, so 'Good night' is the right goodbye. 'See you soon' is a friendly way to end.",
      not: {
        'Good evening. See you soon.':
          "'Good evening' is a greeting for when you arrive. You are leaving, so it does not fit.",
        'Good afternoon. See you soon.':
          'It is 10 pm, so the afternoon is long over. This is also a greeting, not a goodbye.',
        'Good morning. See you soon.':
          "'Good morning' greets people before twelve o'clock. It is night, and you are leaving.",
      },
      more: "'Good night' is only for leaving late in the day or for bedtime. It is never a hello.",
      tip: "With friends, 'Night' or 'See you' is fine. With a friend's parents, say the full phrase.",
    },
  'School has finished. Your friend is walking home the other way. | "See you tomorrow."': {
    why: "Your friend is leaving and says goodbye, so you answer with a goodbye: 'Bye. See you.' It is short and friendly.",
    not: {
      'Hi, nice to meet you.':
        'We say this the first time we meet someone. You know your friend, and he is leaving.',
      'Hello, how are you?':
        'This is a greeting and a question for when you meet. Your friend is going home.',
      "Sorry, I'm late.": 'This apologises for arriving late. Nobody is arriving here.',
    },
    more: "Friends also say 'See you later' or 'Take care'. 'Yeah' is casual: use it with friends, not in a job interview.",
    tip: "Answer a goodbye with a goodbye. It can be as short as 'Bye'.",
  },
  'You have bought a drink in a shop. The shop assistant gives you your change. | "Thank you. Bye now."':
    {
      why: "The assistant says goodbye, so you answer with a goodbye. 'Have a nice day' is a friendly wish that British people often say when they leave a shop.",
      not: {
        'Thanks. Nice to meet you.':
          'This is for meeting someone for the first time, usually after you hear their name. We do not say it to a shop assistant.',
        'Thanks. How are you?':
          'This starts a conversation. You are leaving, so it comes too late.',
        'Thanks. Help yourself.':
          "'Help yourself' invites someone to take something, such as food. It is not a goodbye.",
      },
      more: "In small shops, people often chat a little. In a big supermarket, a quick 'Thanks, bye' is enough.",
      tip: 'Look at the assistant and smile when you say goodbye. It is polite.',
    },
  'It is Friday afternoon. You are leaving school. You see your teacher, Miss Roberts. | You speak to her.':
    {
      why: "It is Friday, so the weekend is coming. 'Have a good weekend' is the usual friendly goodbye on a Friday.",
      not: {
        'Bye, Miss. Happy New Year.':
          'This wish is only for the start of January. On an ordinary Friday it does not fit.',
        'Bye, Miss. Good luck in the race.':
          'This wishes luck before a race. Nothing tells us she is running in one.',
        'Bye, Miss. I hope you feel better.':
          'This is for someone who is ill. Your teacher is not ill.',
      },
      more: "In many British schools, pupils call a woman teacher 'Miss' and a man teacher 'Sir'. Most teachers will wish you a good weekend back.",
      tip: "On a Friday you can also say 'See you on Monday'.",
    },
  'Your teacher says, "The castle was enormous." You do not understand the last word. | You put up your hand.':
    {
      why: "You do not understand the word, so you ask for its meaning with 'What does... mean?'. It is the most useful question to know in class.",
      not: {
        "How do you spell 'enormous', please?":
          'This asks for the letters of the word. Knowing the letters will not tell you what it means.',
        "How do you say 'enormous', please?":
          'This asks how to pronounce the word. You have just heard it, and you need its meaning.',
        "Can you write 'enormous', please?":
          'Seeing the word written does not tell you its meaning. You need to ask what it means.',
      },
      more: "Notice the order: 'What does this word mean?', not 'What means this word?'. The word 'does' helps make the question.",
      tip: 'Keep a list of new words with their meanings. Write an example sentence for each one.',
    },
  'Your teacher is speaking very fast. You cannot follow. | You ask politely.': {
    why: "The problem is speed: the teacher is too fast. 'More slowly' asks for a lower speed, so that you can follow.",
    not: {
      'Could you speak more loudly, please?':
        "'Loudly' is about volume, not speed. Use it when you cannot hear, not when the teacher is too fast.",
      'Could you speak more quickly, please?':
        "'Quickly' means fast. This asks the teacher to go even faster, the opposite of what you need.",
      'Could you speak more quietly, please?':
        "'Quietly' means with less noise. It would make the teacher harder to hear, and still fast.",
    },
    more: 'Opposites help you remember: slowly and quickly are about speed; loudly and quietly are about volume.',
    tip: 'It is fine to ask a teacher to slow down. Teachers want you to understand.',
  },
  'Your teacher tells the class where to look in the book, but you do not hear. | You ask the teacher.':
    {
      why: "You missed where to look in the book, so you ask for the page. 'Which page are we on?' asks for one page out of many.",
      not: {
        'Sorry, how many pages are there?':
          'This asks how long the book is. You need to know where to look now.',
        'Sorry, whose book is this?':
          'This asks who owns the book. It does not help you find the right place.',
        'Sorry, what time does it end?': 'This asks when the lesson finishes. You need the page.',
      },
      more: "'Sorry' at the start of a question is a polite British way to say you did not hear something.",
      tip: 'You can also ask a classmate quietly, so you do not stop the lesson.',
    },
  'Your teacher has explained a new task. You are confused. | "Is that all clear?"': {
    why: "'Is that all clear?' asks if everyone understands. You are confused, so you say so politely: 'Sorry, I don't understand.' Then the teacher can help.",
    not: {
      "Sorry, I don't agree with you.":
        'To agree is to share an opinion. The teacher gave instructions, not an opinion, and your problem is understanding them.',
      "Sorry, I don't remember.":
        'To remember is to keep something in your mind from before. The task is new, so the problem is understanding.',
      "Sorry, I don't like it.":
        'This gives your feeling about the task. It does not tell the teacher you need help.',
    },
    more: "Then say which part you do not understand: 'the second question', 'the last word', 'what we do first'.",
    tip: 'It is always fine to say you do not understand. Good learners ask.',
  },
  'Your teacher says a new word. You want to write it down, but you do not know the letters. | You ask the teacher.':
    {
      why: "You need the letters of the word, so you ask 'How do you spell that?' The teacher will say the letters or write the word.",
      not: {
        'What does that mean, please?':
          'This asks for the meaning. Your problem is writing the word, so you need its letters.',
        'How do you say that, please?':
          'This asks how to pronounce the word. You have heard it, and now you need to write it.',
        'Where does that word come from?':
          'This asks about the history of the word. It is interesting, but it does not give you the letters.',
      },
      more: 'English spelling is hard because letters and sounds do not always match. Even British people ask how to spell words.',
      tip: 'Learn the English names of the letters, so you can follow when someone spells a word aloud.',
    },
  'You are at a friend\'s house. You are thirsty. Her mum is making some tea. | "Would you like a cup of tea?"':
    {
      why: "'Would you like...?' is an offer. You are thirsty, so you accept it with 'Yes, please'. Adding 'With milk' tells her how you like it.",
      not: {
        'Yes, I like tea very much.':
          "This answers 'Do you like tea?', a question about what you enjoy. 'Would you like...?' offers you a cup now, so accept it with 'please'.",
        'Yes, here you are.':
          'We say this when we give something. She is offering tea to you, not taking something from you.',
        "Yes, you're welcome.": "This answers 'thank you'. She has made an offer, not thanked you.",
      },
      more: "In Britain, people often say how they take their tea: 'With milk, no sugar, please.'",
      tip: "'Would you like...?' offers something now. 'Do you like...?' asks what you enjoy. Listen for 'would'.",
    },
  'You are having dinner at a friend\'s house. You have eaten a lot and cannot eat any more. | "Would you like some more?"':
    {
      why: "You cannot eat any more, so you refuse the offer politely: 'No, thank you'. 'I'm full' gives a kind reason.",
      not: {
        "Yes, please. I'm full.":
          "'Yes, please' accepts more food, but 'I'm full' means you cannot eat more. The two halves say opposite things.",
        "No, I don't like it at all.":
          'This says the food is bad. It is unkind to the cook, and you ate a lot, so it is not true.',
        "No, you're welcome.": "This answers 'thank you'. To refuse an offer, say 'No, thank you'.",
      },
      more: "You can say something kind about the food too: 'That was delicious.'",
      tip: "Never answer an offer of food with just 'No'. Add 'thank you' and a kind reason.",
    },
  'Your friend runs up to you, smiling. | "I passed my piano exam."': {
    why: "Passing an exam is good news, so you praise your friend. 'Well done' is for something a person has worked hard to do.",
    not: {
      "Oh no. I'm sorry to hear that.":
        'This is for bad news. Your friend passed, which is good news.',
      'Never mind. Maybe next time.':
        'We say this to someone who has failed. Your friend has passed.',
      'Oh dear. Get well soon.': 'This is for someone who is ill. Your friend is happy and well.',
    },
    more: "'Congratulations' also works for good news, especially big news such as a new job or a wedding.",
    tip: "Show you are happy for your friend: smile and ask a question, such as 'Was it hard?'",
  },
  'You meet your friend at the school gate. He looks pale. | "I don\'t feel very well today."': {
    why: "Your friend feels ill, so you show that you care. 'I hope you feel better' is a kind wish for someone who is unwell.",
    not: {
      'Oh, great. Well done, you.': 'This praises good news or hard work. Feeling ill is bad news.',
      'Never mind. Better luck next time.':
        'This is for someone who has failed at something. Your friend is ill, not unlucky in a game or a test.',
      "Oh good. That's nice to hear.":
        'This shows you are pleased. You should not be pleased that your friend is ill.',
    },
    more: "You can also offer help: 'Do you want to sit down?' or 'Shall I tell the teacher?'",
    tip: "Say 'I hope you feel better' to someone who is with you. In a card or a message, people write 'Get well soon'.",
  },
  'You are on the bus. The woman next to you sneezes. | You speak to her.': {
    why: "In Britain, people often say 'Bless you' when someone sneezes. It is a small, kind custom, even with strangers.",
    not: {
      'Excuse me.':
        'The person who sneezed might say this. You did not sneeze, so it is not your line.',
      'Cheers.':
        "'Cheers' means 'thanks' in casual British English, or we say it when we lift our glasses together. It does not follow a sneeze.",
      'Sorry.': "'Sorry' is an apology. You have done nothing wrong.",
    },
    more: "The person who sneezed usually answers 'Thank you' or 'Thanks'. Nothing more is needed.",
    tip: 'Some people say nothing after a stranger sneezes, and that is fine too. The custom is friendly, never rude.',
  },
  'You have an important test today. Your friend speaks to you before it starts. | "Good luck with your test."':
    {
      why: "Your friend wishes you luck, so you thank them. 'I'll need it' is a friendly, British way to say the test will be hard.",
      not: {
        'Thanks. Well done.':
          "'Well done' praises someone after they succeed. Your friend has not done anything to praise.",
        'Thanks. Get well soon.': 'This is for someone who is ill. Your friend is not ill.',
        'Thanks. Congratulations.':
          'This is for good news, such as passing a test. Your test has not even started.',
      },
      more: "'Good luck' is for something that has not happened yet. Afterwards, people ask 'How did it go?'",
      tip: 'Wish your friends luck before tests and matches. It costs nothing and means a lot.',
    },
  'A new friend at your swimming club is chatting to you. | "How old are you?"': {
    why: "'How old are you?' asks your age, so you answer with a number of years: 'I'm thirteen.' You do not need to add 'years old'.",
    not: {
      "I'm from Syria.": "This tells where you come from. It answers 'Where are you from?'.",
      "I'm very well.": "This tells how you feel. It answers 'How are you?', which has no 'old'.",
      "My name's Amir.": "This tells your name. It answers 'What's your name?'.",
    },
    more: "In English we use 'be' for age: 'I am thirteen', never 'I have thirteen years'.",
    tip: 'Some adults do not like questions about their age, but between young people it is a normal question.',
  },
  'You have a bad cold. Your aunt phones you. | "Hello, love. How are you?"': {
    why: "You have a cold, so you give an honest answer, 'Not great', and say why: 'I've got a cold.' With family, an honest answer is normal.",
    not: {
      'Really good, thanks. And you?':
        'This is a happy answer, but you have a bad cold. It does not tell your aunt the truth.',
      "I'm sorry to hear that.":
        'We say this when someone else gives us bad news. Your aunt asked a question; she did not give news.',
      'I hope you feel better.':
        'This is for someone else who is ill. You are the one with the cold.',
    },
    more: "'Love' is a friendly word that many British people, especially older relatives, use with someone they care about.",
    tip: 'With strangers, people usually give a short, positive answer even on a bad day. With family and friends, you can tell the truth.',
  },
  'You are in a sports shop. You want some trainers, but you cannot find them. | "Hello. Can I help you?"':
    {
      why: "The assistant offers help, and you need it, so you accept with 'Yes, please'. Then you ask your question: 'Where are the trainers?'",
      not: {
        'Yes, I can help you. What do you need?':
          'This is what the shop assistant says. You are the customer, so the roles are the wrong way round.',
        "No, thanks. I'm just looking.":
          'This refuses help. You cannot find the trainers, so you need help.',
        'Yes, here you are. Thank you.':
          "We say 'Here you are' when we give something. You are not giving the assistant anything.",
      },
      more: "'Can I help you?' is the usual question in British shops. Answer it with 'Yes, please' and what you need.",
      tip: "In a shop, say what you want clearly: 'I'm looking for...' or 'Where are the...?'",
    },
  'You are in a clothes shop. You do not need help. You want to see what the shop has first. | "Hi there. Can I help you?"':
    {
      why: "You do not need help yet, so you refuse politely. 'I'm just looking' is the usual British phrase: you are looking at the things in the shop and may buy later.",
      not: {
        "No, thanks. I'm just leaving.":
          'This says you are going out of the shop. You want to stay and look around.',
        "Yes, please. I'm a student.":
          "'Yes, please' accepts help, but you do not need any, and saying you are a student does not answer the question.",
        "No, sorry. I can't help you.":
          'The assistant offered to help you; she did not ask for help. This gets the roles the wrong way round.',
      },
      more: "When you are ready, go back to the assistant: 'Have you got this in a smaller size?'",
      tip: "Always add 'thanks' when you say no to help in a shop. It keeps it friendly.",
    },
  'You are on a bus. The seat next to you is free. A woman points at it. | "Can I sit here?"': {
    why: "The woman asks for permission to sit, and the seat is free. 'Yes, of course' gives permission in a friendly way.",
    not: {
      'No, thank you.':
        "This refuses an offer, as in 'Would you like a sweet?'. She is asking to sit, not offering you something.",
      'Yes, I can.':
        "She asked if she can sit, not if you can. 'Can I...?' asks permission for the speaker.",
      "You're welcome.": "This answers 'thank you'. She has asked a question, not thanked you.",
    },
    more: "You can also move your bag and smile. Many people answer 'Sure' or 'Go ahead'.",
    tip: "'Can I...?' asks for permission. To say no, give a reason: 'Sorry, my friend is sitting there.'",
  },
  'You have one younger sister. A new friend asks about your family. | "Have you got any brothers or sisters?"':
    {
      why: "You have one sister, so the answer is yes, and you say who: 'I've got a sister.' The question uses 'have got', so the answer does too.",
      not: {
        "No, I'm an only child.":
          'An only child has no brothers or sisters. You have a sister, so this is not true.',
        "Yes, I've got two cats.":
          "Cats are pets, not brothers or sisters. This answers 'Have you got any pets?'.",
        "Yes, I'm fine, thanks.":
          "This tells how you feel. It answers 'Are you OK?', not a question about your family.",
      },
      more: "'Have you got...?' is very common in British English. 'Do you have...?' means the same.",
      tip: "Add one detail to keep the chat going: 'She's eight. She's really funny.'",
    },
  'You are at the pool with a new friend. You are a good swimmer. | "Can you swim?"': {
    why: "A short answer uses the same helping verb as the question. This question starts with 'Can', so the answer is 'Yes, I can.'",
    not: {
      'Yes, I do.':
        "'Do' answers a question that starts with 'Do', such as 'Do you like swimming?'. This question starts with 'Can'.",
      'Yes, I am.':
        "'Am' answers a question that starts with 'Are you'. This question starts with 'Can'.",
      'Yes, I have.':
        "'Have' answers a question that starts with 'Have you', such as 'Have you swum here before?'. This one starts with 'Can'.",
    },
    more: "A plain 'Yes' can sound short or unfriendly. The short answer with a verb is polite and natural.",
    tip: 'Look at the first word of a yes or no question. Use the same word in your short answer.',
  },
  'You get home from school. You have not eaten since lunch, and it is six o\'clock. | "Are you hungry?"':
    {
      why: "The question starts with 'Are you', so the short answer uses 'am': 'Yes, I am.' You have not eaten for hours, so the answer is yes.",
      not: {
        'Yes, I do.':
          "'Do' answers questions that start with 'Do', such as 'Do you want a snack?'. This one starts with 'Are'.",
        'Yes, I can.': "'Can' answers questions that start with 'Can'. This one starts with 'Are'.",
        'Yes, I have.':
          "'Have' answers questions that start with 'Have'. This one starts with 'Are'.",
      },
      more: "'Are you...?' gets 'Yes, I am' or 'No, I'm not'. Never shorten the yes answer: say 'I am', not 'I'm', at the end.",
      tip: "Short answers sound friendly. Add a little more if you like: 'What's for dinner?'",
    },
  'You play football every weekend. You love it. | "Do you like football?"': {
    why: "The question starts with 'Do you', so the short answer uses 'do': 'Yes, I do.' You love football, so the answer is yes.",
    not: {
      'Yes, I am.': "'Am' answers questions that start with 'Are you'. This one starts with 'Do'.",
      'Yes, I can.':
        "'Can' answers questions about ability, such as 'Can you play?'. This one starts with 'Do'.",
      'Yes, I have.': "'Have' answers questions that start with 'Have'. This one starts with 'Do'.",
    },
    more: "'Do you like...?' asks what you enjoy. The negative answer is 'No, I don't'.",
    tip: "After a short answer, add something true: 'I play every Saturday.'",
  },
  'You are waiting for the school bus with a friend. You look at your watch. | "What time is it?"':
    {
      why: "'What time is it?' asks for the time on the clock, so you give a time: 'It's half past eight.'",
      not: {
        "It's Tuesday today.": "This gives the day of the week. It answers 'What day is it?'.",
        "It's sunny and cold.":
          "This describes the weather. It answers 'What's the weather like?'.",
        "It's the tenth of May.": "This gives the date. It answers 'What's the date today?'.",
      },
      more: "All four answers start with 'It's', so listen carefully to the question: is it about the time, the day, the date or the weather?",
      tip: "In British English, 'half past eight' means 8.30. You can also say 'eight thirty'.",
    },
  'It is the school holidays. Your friend has forgotten what day it is. | "What day is it today?"':
    {
      why: "'What day is it?' asks for the day of the week, so you name a day: 'It's Thursday.'",
      not: {
        "It's ten o'clock.": "This gives the time on the clock. It answers 'What time is it?'.",
        "It's very windy.": "This describes the weather. It answers 'What's the weather like?'.",
        "It's in March.":
          "This gives a month. It answers a question such as 'When is your birthday?'.",
      },
      more: 'Days of the week always start with a capital letter in English.',
      tip: "To ask the date, say 'What's the date today?'. The answer is a number and a month.",
    },
  'Your friend is getting ready to walk to your house. She phones you first. | "What\'s the weather like?"':
    {
      why: "'What's the weather like?' asks you to describe the weather now, so you say what it is like: 'It's cold and windy.'",
      not: {
        'I like sunny days.':
          "This says what weather you enjoy. It answers 'What weather do you like?'. In the question, 'like' means 'similar to', not 'enjoy'.",
        "It's half past two.": "This gives the time. It answers 'What time is it?'.",
        "It's on Thursday.":
          "This says which day something happens. It answers a 'When...?' question.",
      },
      more: "'What is it like?' asks you to describe something: 'What's your school like?' 'It's big and friendly.'",
      tip: "Weather words often follow 'It's': sunny, raining, cloudy, freezing.",
    },
  'You left your homework at home. Your teacher is collecting it. | "Have you got your homework?"':
    {
      why: "You do not have your homework, so you apologise and say what happened: 'Sorry, I left it at home.' An honest answer is the best one.",
      not: {
        'Yes, here you are, Miss.':
          'You say this when you hand something over, but your homework is at home. You have nothing to give.',
        "Sorry, I don't understand.":
          'You understand the question. The problem is that your homework is not with you.',
        'No, thank you, Miss.':
          'This refuses an offer. The teacher is asking for your homework, not offering you anything.',
      },
      more: "Then offer a plan: 'Can I bring it tomorrow?'. Teachers usually like an honest answer and a plan.",
      tip: 'When something goes wrong, say sorry, say what happened, and say what you will do.',
    },
  'Your teacher, Mr Shah, reads your story. | "Well done. This is excellent work."': {
    why: "Your teacher praises your work, so you thank him: 'Thank you, Sir.' It is polite and shows that you are pleased.",
    not: {
      'Sorry, Sir.':
        "'Sorry' is an apology. Your teacher is pleased with you, so there is nothing to apologise for.",
      "You're welcome, Sir.":
        "This answers 'thank you'. Your teacher praised you; he did not thank you.",
      'Well done, Sir.':
        'This praises the other person. Your teacher did not write the story; you did.',
    },
    more: "Many pupils in British schools call a man teacher 'Sir'. You can also use his name: 'Mr Shah'.",
    tip: 'Take praise with a simple thank you. You do not need to say the work was bad.',
  },
  'It is the last day of school before Christmas. A classmate waves goodbye. | "Merry Christmas."':
    {
      why: "Your classmate wishes you a happy Christmas. 'Same to you' sends the same wish back. You can send it back because Christmas comes to both of you at the same time.",
      not: {
        'Thanks. Happy birthday.':
          "This is a birthday wish. Nothing tells you it is your classmate's birthday.",
        "Thanks. You're welcome.":
          "This answers 'thank you'. Your classmate gave you a wish, not thanks.",
        'Thanks. Get well soon.': 'This is for someone who is ill. Your classmate is not ill.',
      },
      more: "People also answer a Christmas wish with 'And you'. Not everyone celebrates Christmas, but a friendly wish is always kind.",
      tip: "Learn the wishes for the time of year: 'Merry Christmas' or 'Happy Christmas', and 'Happy New Year'.",
    },
  'You were ill last week. Today you are back at school, and you feel fine. | "Hi. Are you feeling better now?"':
    {
      why: "Your friend asks about your health, and you feel fine now. 'Yes, much better, thanks' answers the question and thanks your friend for asking.",
      not: {
        'Yes, I hope you feel better.':
          'This is a wish for someone who is ill. You were the one who was ill, not your friend.',
        'Yes, same to you, thanks.':
          "'Same to you' returns a wish. Your friend asked a question; it was not a wish.",
        "Yes, you're very welcome.": "This answers 'thank you'. Your friend did not thank you.",
      },
      more: "'Much better' means a lot better than before. People also say 'Back to normal, thanks'.",
      tip: 'When someone asks about your health, a short answer and a thank you is enough.',
    },
  'You left your bag on a chair in the library. A boy runs after you with it. | "Excuse me. Is this your bag?"':
    {
      why: "The bag belongs to you, so you say 'it's mine'. 'Mine' means 'belonging to me'. Then thank the boy for bringing it.",
      not: {
        "Oh, yes, it's yours. Thanks.":
          "'Yours' would mean it belongs to the boy. The bag is yours, so from your side it is 'mine'.",
        "Oh, yes, it's his. Thanks.":
          "'His' means it belongs to another boy or man. The bag belongs to you.",
        'Oh, yes, here you are.':
          'We say this when we give something. The boy is giving the bag to you.',
      },
      more: "Use mine, yours, his, hers, ours and theirs without a noun after them: 'It's mine', not 'It's mine bag'.",
      tip: 'When someone returns something you lost, thank them warmly.',
    },
  'It is your first day at a new school. The head teacher, Mr Grant, meets you at the door. | "Hello. Welcome to Park Lane School."':
    {
      why: "The head teacher welcomes you, which is kind, so you thank him. 'It's nice to be here' is a friendly, polite thing to add.",
      not: {
        "You're welcome. It's nice to be here.":
          "'Welcome to...' greets a newcomer, but 'You're welcome' answers 'thank you'. Both use 'welcome', but they do different jobs.",
        'Thank you. Nice to see you again.':
          "'Nice to see you again' is for someone you have met before. It is your first day, so you have not met him.",
        'Thanks. Same to you, Sir.':
          "'Same to you' returns a wish. 'Welcome' greets someone new, and the head teacher is not new.",
      },
      more: "'Welcome' on its own greets someone who arrives: 'Welcome to our home.' The reply is always a thank you.",
      tip: 'When an adult greets you formally, answer in a full sentence. Look at them and smile.',
    },
  'You gave your cousin a book for her birthday. She has just opened it. | "Thank you so much. I love it."':
    {
      why: "Your cousin thanks you and says she loves the present. 'I'm so glad you like it' shows you are happy that she is happy.",
      not: {
        'Thank you, I love it too.':
          'This thanks your cousin, but she is the one who got a present. You gave it, so you answer her thanks.',
        "Oh dear, I'm so sorry.":
          'This is an apology or a reply to sad news. Your cousin is happy, so nothing is wrong.',
        'Well done. Good for you.':
          'This praises someone for doing something well. Opening a present is not something to praise.',
      },
      more: "Another good answer is to say why you chose it: 'I know you like mystery stories.'",
      tip: 'When someone thanks you for a present, answer their thanks warmly. Do not thank them back.',
    },
  'You are standing in the doorway of a shop. A woman wants to come in. | "Excuse me."': {
    why: "The woman says 'Excuse me' because you are in her way. In Britain, the natural answer is a quick 'Oh, sorry' as you step aside.",
    not: {
      'Oh, bless you.':
        'We say this after a sneeze. The woman did not sneeze; she asked you to move.',
      'Oh, thank you.':
        'This thanks someone for something they did for you. The woman has not done anything for you.',
      'Oh, well done.':
        'This praises someone for doing something good. She only asked to get past.',
    },
    more: "'Excuse me' has two jobs: it asks someone to move, and it gets someone's attention before a question.",
    tip: "When someone says 'Excuse me' near a door or in a narrow place, look around: you are probably in the way.",
  },
  'A visitor at your school is looking for a teacher. You do not know where he is. | "Excuse me, where\'s Mr Davies?"':
    {
      why: "You do not know where the teacher is, so you say so politely: 'Sorry, I don't know.' The 'Sorry' makes it kind.",
      not: {
        "Sorry, I don't understand.":
          'You understand the question. The problem is that you do not know the answer.',
        "Sorry, I'm late.":
          'This apologises for arriving late. The visitor asked where a teacher is.',
        'Sorry to hear that.':
          'We say this when someone gives us bad news. The visitor asked a question.',
      },
      more: "Then try to help: 'You could ask at the school office.'",
      tip: 'Not knowing and not understanding are different. If you understand the question but have no answer, say you do not know.',
    },
  'You are lost in a new town. You need to find the train station. | You stop a woman in the street.':
    {
      why: "You need directions, so you ask where the place is: 'Where's the station, please?' Starting with 'Excuse me' is polite with a stranger.",
      not: {
        'Excuse me, what time is the next train?':
          'This asks about times. You do not know where the station is yet, so you need directions first.',
        'Excuse me, how are you today?':
          'We ask this to people we know. A stranger will be surprised, and it does not help you find the station.',
        'Excuse me, where are you from?':
          "This asks about the woman's home country or town. It does not help you find the station.",
      },
      more: "Other ways to ask: 'How do I get to the station?' and 'Is the station near here?'.",
      tip: 'Listen for direction words in the answer: left, right, straight on, opposite, next to.',
    },
  "You are at a friend's house. You are very thirsty. Your friend's dad is in the kitchen. | You ask him.":
    {
      why: "You are asking an adult for something, so you make a polite request: 'Could I have some water, please?' 'Could I have...?' and 'please' make it polite.",
      not: {
        'Give me a glass of water, quickly.':
          "This is an order. Giving orders to your friend's dad sounds rude, even with a good reason.",
        'I want a glass of water now.':
          "'I want' sounds like a demand, especially with 'now'. A question with 'Could I...?' is much more polite.",
        'Would you like a glass of water?':
          'This offers water to him. You are the one who is thirsty.',
      },
      more: "'Can I have...?' is fine with friends. 'Could I have...?' is a little more polite and good with adults.",
      tip: "In English, polite requests are usually questions. Add 'please' at the end.",
    },
  'Your friend picks up your phone from the floor and gives it to you. | "Here you are. You dropped this."':
    {
      why: "Your friend has helped you by picking up your phone, so you thank them. 'I didn't notice' explains why you did not pick it up yourself.",
      not: {
        'Oh, no problem. Any time.':
          "This answers 'thank you'. Your friend did the helping, so you thank them instead.",
        "Oh, never mind. It doesn't matter.":
          "'Never mind' tells someone a problem does not matter. Your friend has helped you, so this sounds strange.",
        'Oh, same to you, thanks.':
          "'Same to you' returns a wish. 'Here you are' is not a wish; your friend is giving you something.",
      },
      more: "'Here you are' and 'Here you go' are what we say as we hand something over.",
      tip: 'Thank people as soon as they help you. A quick thanks is better than a long one later.',
    },
  'Your friend shows you a photo on her phone. | "Look. We\'ve got a new puppy."': {
    why: "A new puppy is happy news, so you show you are pleased: 'Oh, how lovely.' Asking a question, such as its name, shows real interest.",
    not: {
      "Oh no. I'm sorry to hear that.":
        'This is for bad news, such as an illness. A new puppy is good news.',
      'Never mind. Maybe next time.':
        'We say this to someone who has failed at something. Your friend has not failed.',
      'Oh dear. I hope it gets better.':
        'This is for a pet or a person that is ill. Nothing tells you the puppy is ill.',
    },
    more: "'How lovely' and 'How exciting' are warm British replies to nice news.",
    tip: 'When a friend shares news, ask one question about it. It shows you are listening.',
  },
  'Your friend looks upset at break time. | "I think I\'ve lost my phone."': {
    why: "Losing a phone is bad news, so you show that you care: 'Oh no. That's awful.' Then you can help your friend look for it.",
    not: {
      'Oh good. Well done.': 'This is for good news or success. Losing a phone is bad news.',
      'Thanks. Same to you.':
        'This returns a wish. Your friend has told you about a problem, not wished you anything.',
      'Oh, how lovely.': 'This is for nice news, such as a new pet. Your friend is upset.',
    },
    more: "Offer to help: 'When did you last have it?' or 'Shall I ring it?'",
    tip: 'Match your face to the news. Look worried for bad news, and smile for good news.',
  },
  'The doorbell rings. It is a neighbour you know. Your mum is at work. | "Hello. Is your mum at home?"':
    {
      why: "Your mum is out, so the answer is no. 'Sorry' is polite, and 'She's at work' tells the neighbour where she is.",
      not: {
        "No, thanks. She's at work.":
          "'No, thanks' refuses an offer. The neighbour asked a question, so 'sorry' is the polite word here.",
        "Yes, she's at work.":
          "'Yes' means she is at home, but she is at work. The two halves do not agree.",
        "No, you're welcome.": "'You're welcome' answers 'thank you'. Nobody has thanked you.",
      },
      more: "You can offer to help: 'Can I give her a message?'",
      tip: 'Never tell a stranger at the door that you are alone at home. With a neighbour you know, saying where your mum is is fine.',
    },
  'You are wearing new shoes. A classmate looks at them. | "I really like your shoes."': {
    why: "Your classmate says something nice about your shoes. The natural answer to a compliment is to thank them. 'They're new' is a friendly detail.",
    not: {
      "Oh, you're welcome.":
        "This answers 'thank you'. Your classmate gave you a compliment, not thanks.",
      'Oh, sorry about that.': 'This is an apology. There is nothing wrong with liking your shoes.',
      'Oh, same to you.':
        "This returns a wish, such as 'Have a nice day'. A compliment is not a wish.",
    },
    more: "A compliment is a kind remark about someone. You can pay one back if it is true: 'I like your bag too.'",
    tip: 'Do not argue with a compliment. A smile and a thank you is the polite answer.',
  },
  'In class, the girl next to you has made a mistake in pencil. You have a rubber. | "Can I borrow your rubber?"':
    {
      why: "Your classmate asks to borrow your rubber, and you have one. 'Sure, here you go' agrees and hands it over at the same time.",
      not: {
        "Sorry, I haven't got one.": 'You have a rubber, so this is not true.',
        "Yes, I'd like to borrow it.":
          'Your classmate is the one who wants to borrow. You are lending, so the roles are the wrong way round.',
        "Yes, you're welcome.":
          "This answers 'thank you'. She has asked a question; she has not thanked you yet.",
      },
      more: 'A rubber is the British word for the thing that takes away pencil marks. In American English it is an eraser.',
      tip: "When you lend something, you can say when you need it back: 'Can I have it back after the lesson?'",
    },
  'You are in a café with your family. The waiter is ready to take your order. | "What would you like to drink?"':
    {
      why: "The waiter asks what drink you want, so you name a drink and add 'please': 'An orange juice, please.'",
      not: {
        'A cheese sandwich, please.':
          'A sandwich is food, not a drink. The waiter asked about drinks.',
        'I like orange juice.':
          'This says what you enjoy in general. The waiter wants to know what you will have now.',
        "Yes, I'm very thirsty.":
          "A 'What...?' question cannot be answered with 'yes'. Name the drink you want.",
      },
      more: "'What would you like?' is a polite way to ask what you want. In a café, a short answer with 'please' is perfect.",
      tip: "When you order, say what you want and 'please'. You do not need 'I want'.",
    },
  'It is your first day at a new school. A boy speaks to you in the lunch queue. | "Are you new here?"':
    {
      why: "It is your first day, so you are new, and the answer is yes. 'I started today' gives a little more information.",
      not: {
        'No, I started today.':
          "'No' means you are not new, but starting today means you are. The two halves disagree.",
        "Yes, I'm very well.": "This tells how you feel. It answers 'How are you?'.",
        "Yes, I'm in the queue.":
          "This answers 'Are you in the queue?'. The boy asked if you are new.",
      },
      more: "This is a friendly way to start a chat. You can ask back: 'How long have you been here?'",
      tip: 'A yes or no answer and one extra detail is the best way to keep a conversation going.',
    },
  'A new friend is asking you about school. | "What\'s your favourite subject?"': {
    why: "'What's your favourite subject?' asks which school subject you like most, so you name one: 'I really like art.'",
    not: {
      "It's in room 12.": "This says where a lesson is. It answers 'Where is it?'.",
      "It's on Mondays.": "This says when a lesson is. It answers 'When is it?'.",
      'Mr Lee teaches it.': "This says who teaches a subject. It answers 'Who teaches it?'.",
    },
    more: "'Favourite' means the one you like best. Note the British spelling with 'ou'.",
    tip: "Give a reason to make your answer more interesting: 'because I love drawing'.",
  },
  'You and a classmate are talking about birthdays. | "When\'s your birthday?"': {
    why: "'When' asks about a time, so you give a date: 'It's on 4 June.' We use 'on' with a date.",
    not: {
      "I'm going to be fourteen.":
        "This tells your age on your birthday. It answers 'How old will you be?'.",
      "It's at my house.": "This tells a place. It answers 'Where is your party?'.",
      "We're having a party.":
        "This tells your plans. It answers 'What are you doing for your birthday?'.",
    },
    more: "British people say the date as 'the fourth of June' or 'June the fourth'. Both are fine.",
    tip: "Remember: 'on' for dates and days, 'in' for months.",
  },
  'Your friend is looking at a photo on your wall. It shows your older brother. | "Who\'s that?"': {
    why: "'Who' asks about a person, so you say who he is: 'That's my big brother.' 'Big brother' means older brother.",
    not: {
      "He's fifteen next month.": "This tells his age. It answers 'How old is he?'.",
      "He's in the kitchen.": "This tells where he is now. It answers 'Where is he?'.",
      "He's very well, thanks.": "This tells how he is. It answers 'How is he?'.",
    },
    more: "We use 'That's...' to point at someone in a photo or across a room: 'That's my aunt.'",
    tip: 'Learn the question words: who asks for a person, where for a place, when for a time.',
  },
  'A new friend is asking about your day. | "How do you get to school?"': {
    why: "'How do you get to school?' asks how you travel, so you name the transport: 'By bus, usually.' We use 'by' with bus, car, train and bike.",
    not: {
      "At eight o'clock.": "This gives a time. It answers 'When do you get to school?'.",
      "It's Park Lane School.": "This names your school. It answers 'Which school do you go to?'.",
      'I like it a lot.': "This gives your feeling. It answers 'Do you like school?'.",
    },
    more: "Walking is different: we say 'on foot' or 'I walk', not 'by foot'.",
    tip: "Notice the word after 'How': 'How old', 'How long' and 'How far' each ask something different.",
  },
  'You fall over in the playground and hurt your knee. A teacher runs over. | "Oh dear. Are you OK?"':
    {
      why: "You are hurt, so the honest answer is 'Not really'. Then you say what is wrong: 'I've hurt my knee.'",
      not: {
        "Yes, please. I've hurt my knee.":
          "'Yes, please' accepts an offer. The teacher asked a question about how you are.",
        'Thanks. Same to you.':
          'This returns a wish. The teacher is not hurt, and did not wish you anything.',
        "No problem. You're welcome.": 'This answers thanks. Nobody has thanked you.',
      },
      more: "'I've hurt my...' is a useful phrase: my arm, my hand, my ankle.",
      tip: 'If you are hurt at school, always tell an adult, even if it seems small.',
    },
  'You are on a bus to the town centre. A woman getting on looks unsure. | "Excuse me, is this the bus to the town centre?"':
    {
      why: "The question starts with 'is this', so the short answer uses 'it is': 'Yes, it is.' The bus is going to the town centre.",
      not: {
        'Yes, it does.':
          "'Does' answers a question with 'does', such as 'Does this bus go to the town centre?'. This one starts with 'is'.",
        'Yes, I am.':
          "This answers a question about you, such as 'Are you going into town?'. She asked about the bus.",
        'Yes, there is.':
          "This answers 'Is there...?', a question about whether something exists. She asked about this bus.",
      },
      more: "In a short answer, 'this' becomes 'it': 'Is this your coat?' 'Yes, it is.'",
      tip: 'Strangers often ask quick questions on buses and trains. A short, clear answer is helpful.',
    },
  'You are on a crowded train with a heavy bag. A man stands up and points to his seat. | "Would you like to sit down?"':
    {
      why: "The man offers you his seat. You have a heavy bag, so you accept with 'Yes, please' and a warm thank you.",
      not: {
        'No problem. Any time at all.':
          'This answers thanks. The man made an offer, so you accept it.',
        'Yes, of course you can sit here.':
          'This gives someone permission to sit. The man is offering his seat to you, so the roles are the wrong way round.',
        "Sorry, I'm a bit late.": 'This apologises for being late. The man offered you a seat.',
      },
      more: 'If you do not need the seat, say no with a smile and a thank you.',
      tip: 'On British buses and trains, people offer seats to older people, pregnant women and people with heavy bags.',
    },
  'You are doing a puzzle in the library, and it is going well. The librarian walks past. | "Do you need any help?"':
    {
      why: "You do not need help, so you refuse politely: 'No, I'm fine, thanks.' Here 'I'm fine' means you are all right on your own.",
      not: {
        "No, you're welcome.":
          "This answers 'thank you'. The librarian offered help; she did not thank you.",
        "Yes, I'm fine, thanks.":
          "'Yes' means you need help, but 'I'm fine' means you do not. The two halves disagree.",
        "No, sorry, I can't.":
          'This refuses a request for help. The librarian is offering help, not asking for it.',
      },
      more: "'I'm fine, thanks' is a common British way to say 'no, thank you' to an offer.",
      tip: "Always add 'thanks' when you say no to an offer of help. It shows you are grateful for the offer.",
    },
  'It is the last day of term. Your friend is excited. | "We\'re going to Spain tomorrow."': {
    why: "Your friend is going on holiday, which is happy news. 'Have a great time' is a warm wish for someone who is going away to have fun.",
    not: {
      'Oh no, get well soon.': 'This is for someone who is ill. Your friend is going on holiday.',
      'Oh, happy birthday to you.':
        "This is for someone's birthday. Your friend told you about a holiday, not a birthday.",
      'Oh, well done, you.':
        'This praises someone for doing something well. Going on holiday is not something to praise.',
    },
    more: "When your friend comes back, ask about it: 'How was Spain?'",
    tip: "British people say 'holiday' for a trip away. In American English it is 'vacation'.",
  },
  'You meet a friend on the way to school. She is wearing a badge with a big 13 on it. | "It\'s my birthday today."':
    {
      why: "It is your friend's birthday, so you give her the birthday wish. The badge with 13 shows how old she is today.",
      not: {
        'Oh, Merry Christmas.':
          'This wish is only for Christmas, in December. Your friend told you about her birthday.',
        'Oh, get well soon.': 'This is for someone who is ill. Your friend is having a happy day.',
        'Oh, good luck.':
          'This is for something hard that has not happened yet, such as a test. A birthday is not a test.',
      },
      more: "You can add a question: 'Are you doing anything special?'",
      tip: 'In Britain, friends often sing to each other and give a card on a birthday.',
    },
  'You are staying with a British family. You leave the house for school in the morning. | "Bye. Have a good day."':
    {
      why: 'Your host says goodbye with a wish for your day. You thank her and say you will see her later, because you are coming back after school.',
      not: {
        'Thanks. Good night.':
          "'Good night' is for the end of the day or bedtime. It is the morning.",
        'Thanks. Nice to meet you.':
          'This is for a first meeting. You live with this family, so you know them.',
        'Thanks. Welcome back.':
          'We say this to someone who has just come home. You are the one who is leaving.',
      },
      more: "'See you later' is a friendly goodbye when you will meet again on the same day.",
      tip: 'With a host family, say goodbye when you go out and hello when you come back. It is polite.',
    },
  'You phone your grandma. She answers. | "Hello?"': {
    why: "You made the call, so you say who you are. On the phone, English uses 'It's me' or 'It's Leo', not 'I am Leo'.",
    not: {
      'Hi, Grandma. Who is it, please?':
        'You made the call, so you know who answered. Grandma is the one who needs to know who is calling.',
      'Hi, Grandma. Can I take a message?':
        'We say this when the caller wants someone who is out. You are the caller.',
      'Hi, Grandma. Bye for now.': 'This ends a call, but the call has only just started.',
    },
    more: "If someone else answers, say who you are and ask for the person you want: 'Hi, it's Leo. Is Grandma there, please?'",
    tip: 'When you call someone, say who you are first, then why you are calling.',
  },
  'You are in a supermarket. You need milk, but you cannot find it. An assistant is filling the shelves. | You speak to the assistant.':
    {
      why: "You cannot find the milk, so you ask where it is: 'Where's the milk, please?' 'Excuse me' is the polite way to start.",
      not: {
        'Excuse me, how much is the milk?':
          'This asks the price. You do not know where the milk is yet.',
        'Excuse me, is the milk fresh today?':
          'This asks if the milk is new. You have not found it yet.',
        'Excuse me, do you like milk?':
          "This asks about the assistant's taste. It does not help you find the milk.",
      },
      more: "Assistants often answer with an aisle number: 'Aisle 4, on the left.' An aisle is a row between shelves.",
      tip: "If you do not catch the answer, ask again: 'Sorry, which aisle?'",
    },
  'Your bus arrives at your stop. You walk to the front door to get off. | You speak to the driver.':
    {
      why: "In many parts of Britain, people thank the driver when they get off the bus. 'Thanks very much. Bye' is friendly and polite.",
      not: {
        'Hello. A single, please.':
          'This is what you say when you get on and buy a ticket. You are getting off.',
        "Sorry I'm late. Bye.": 'This apologises for being late. You have not kept anyone waiting.',
        "You're welcome. Bye.": "This answers 'thank you'. The driver has not thanked you.",
      },
      more: "A 'single' is a ticket for one journey. A 'return' takes you there and back.",
      tip: 'Thank the people who serve you: drivers, shop assistants and dinner staff at school.',
    },
  'You feel ill in class, so you go to the school nurse. | "Hello. What\'s the matter?"': {
    why: "'What's the matter?' asks what is wrong. You feel ill, so you say what the problem is: 'I've got a headache.'",
    not: {
      "I'm thirteen years old.": "This tells your age. It answers 'How old are you?'.",
      "I'm in Year 8.": "This tells your school year. It answers 'What year are you in?'.",
      "It's half past ten.": "This tells the time. It answers 'What time is it?'.",
    },
    more: "'What's the matter?' and 'What's wrong?' mean the same. Answer with 'I've got...': a cold, a sore throat, a stomach ache.",
    tip: "Say how long you have felt ill too, such as 'since this morning'. It helps the nurse.",
  },
  'Some children are playing football in the park. One of them waves at you. | "Do you want to play with us?"':
    {
      why: "The children invite you to join them. 'Yes, I'd love to' accepts the invitation happily, and 'Thanks' shows you are pleased to be asked.",
      not: {
        'Yes, I play every Sunday.':
          "This answers 'Do you play football?', a question about your habits. They are inviting you to play now.",
        "No, thanks. I'm full.":
          "'I'm full' means you cannot eat any more. It refuses food, not a game.",
        'Yes, here you are.': 'We say this when we give something. Nobody asked you for anything.',
      },
      more: "'I'd love to' is short for 'I would love to'. It is a warm way to say yes to an invitation.",
      tip: "If you cannot join in, say no kindly with a reason: 'Sorry, I have to go home.'",
    },
  'Your friend Jay sends you a text message. | "Hey. How\'s it going?"': {
    why: "'How's it going?' is a friendly way to ask how you are. 'Not bad, thanks' says things are fine, and 'You?' asks the same question back.",
    not: {
      "I'm going to the park.":
        "This answers 'Where are you going?'. 'How's it going?' is not about a place. It asks how you are.",
      "By bus, it's quicker.":
        "This answers 'How are you getting there?'. Your friend is asking how you are, not how you travel.",
      'Bye. See you soon.':
        'This ends a chat. Your friend has just started one, so you answer the question first.',
    },
    more: "'Not bad' means 'quite good' in British English. 'How's it going?' is informal, so use it with friends, not with your head teacher.",
    tip: 'When a friend asks how you are, answer and then ask back. It keeps the chat going.',
  },
  'You meet an old friend of your family. You have not seen her for two years. | "Long time no see. How have you been?"':
    {
      why: "'How have you been?' asks how your life has been since you last met. 'Really well, thanks' answers it, and 'You?' asks back. 'Long time no see' means 'We have not met for a long time'.",
      not: {
        'Nice to meet you too.':
          'We say this when we meet someone for the first time. You already know her.',
        "I've been to Spain.":
          "This answers 'Where have you been?'. She asked how you have been, not where.",
        'Since last summer, I think.':
          "This answers a 'How long...?' question. 'How have you been?' asks about you, not a length of time.",
      },
      more: "'How are you?' asks about today. 'How have you been?' asks about the time since you last met.",
      tip: "Answer with how things are and one piece of news: 'Really well. I've started a new school.'",
    },
  'Your name is Tom. You join a new football club and want to talk to another player. | You speak first.':
    {
      why: "Say your name, then ask for theirs: 'What's your name?' This is the friendly, normal way to start talking to someone new.",
      not: {
        "Hi, I'm Tom. Who are you?":
          "'Who are you?' is very direct. To a new person it can sound rude, as if they should not be there.",
        "Hi, I'm Tom. What do you want?":
          'This sounds unfriendly. It suggests the other player is bothering you.',
        "Hi, I'm Tom. Nice to see you again.":
          "'Nice to see you again' is for someone you have met before. This player is new to you.",
      },
      more: "After names, ask an easy question to keep talking: 'How long have you played here?'",
      tip: "Questions that start 'What's your...' are safe and friendly with new people.",
    },
  'You are at your friend Ben\'s house. His mum comes into the kitchen. You have not met her before. | "Mum, this is my friend from school."':
    {
      why: "You are meeting Ben's mum for the first time, so 'It's nice to meet you' is right. She is an adult you do not know, so a polite 'Hello' suits her better than a casual greeting.",
      not: {
        'Hiya, mate. You alright?':
          "'Mate' and 'You alright?' are what friends say to each other. To a friend's parent you have just met, they sound too casual.",
        'Hello. Nice to see you again.':
          "'Nice to see you again' is for someone you have met before. This is your first meeting.",
        'Oh, hello. Thanks a lot.':
          "'Thanks a lot' thanks someone for something. She has not done anything for you yet.",
      },
      more: "Many British parents are happy for their children's friends to use their first name, but wait until they ask.",
      tip: 'With adults you do not know, start polite: hello, please and thank you. You can relax later.',
    },
  'You have no pen. Your classmate has two. | You ask her.': {
    why: "You want to take a pen and give it back later, so you borrow it. 'Could I borrow a pen, please?' is a polite way to ask.",
    not: {
      'Could I lend you a pen, please?':
        'To lend is to give something for a short time. This offers her a pen, but you have none.',
      'Would you like to borrow a pen?':
        'This offers her a pen. You are the one without a pen, so the offer is the wrong way round.',
      'Do you want one of my pens?':
        'This offers your own pens. You have no pen, so you cannot offer one.',
    },
    more: "Borrow and lend are opposites. You borrow from someone: 'Can I borrow your ruler?' Someone lends to you: 'She lent me her ruler.'",
    tip: 'Ask before you take, and give it back with a thank you.',
  },
  'Your classmate did not hear the homework. She asks you. | "Could you say that again, please?"': {
    why: "Your classmate asks you to repeat something. 'Yes, of course' agrees warmly, and then you say it again.",
    not: {
      'Yes, I could.':
        "'Could you...?' here is a polite request, not a question about what you are able to do. This answer sounds as if you will not repeat it.",
      'No, thank you.':
        "This refuses an offer, as in 'Would you like some cake?'. She is asking for help, not offering anything.",
      "You're welcome.": "This answers 'thank you'. She has not thanked you yet.",
    },
    more: "'Could you...?' and 'Can you...?' ask someone to do something. Agree with 'Sure' or 'No problem', and then do it.",
    tip: 'Polite requests in English often look like questions. Answer them by agreeing and doing the thing.',
  },
  'It is very hot in the classroom. You would like to open the window yourself. | You ask the teacher.':
    {
      why: "You want to do something yourself, so you ask for permission. 'Is it OK if I...?' is a polite, natural way to ask a teacher.",
      not: {
        'Must I open the window, please?':
          "'Must I...?' asks if you have to do it. You want permission, not an order.",
        'Do you open the window, please?':
          "'Do you open...?' asks about a habit, as in 'Do you open it every day?'. It is not a request.",
        'Did you open the window, please?':
          "'Did you...?' asks about the past. You want to open it now.",
      },
      more: "Other ways to ask for permission are 'Can I...?' and, more formally, 'May I...?'.",
      tip: 'In a classroom, ask before you act, and wait for the answer.',
    },
  'You are at the bus stop. Your phone is dead, so you do not know the time. | You speak to a woman next to you.':
    {
      why: "'Have you got the time?' is a polite way to ask what time it is. The small word 'the' matters: it means the time on the clock.",
      not: {
        'Excuse me, have you got some time?':
          "Without 'the', this asks if the woman is free, as if you want her help with something.",
        "Excuse me, what's the date today?":
          'This asks for the date, such as 12 March. You need the time on the clock.',
        'Excuse me, do you know the way?':
          'This asks for directions. You want to know the time, not the way.',
      },
      more: "You can also ask 'Do you know what time it is?'. Answers sound like 'It's ten past four'.",
      tip: "With strangers, start politely and finish with 'thanks'. It makes a short question sound kind.",
    },
  'You are on the phone with a friend. You have talked for a long time, and now you need to go. | You end the call.':
    {
      why: "You want to end the call kindly, so you say goodbye. 'Bye for now' means you will talk again, and 'Take care' is a warm wish to finish.",
      not: {
        "Hello? Who's calling, please?":
          'This starts a call when you do not know the caller. You know your friend, and you are ending the call.',
        'OK, nice to meet you. Bye.':
          "'Nice to meet you' is for a first meeting. You know this friend well.",
        'Can I take a message, please?':
          'You say this when the caller wants someone who is not there. You are the person your friend wants.',
      },
      more: "Before the goodbye, people often give a reason: 'I'd better go, my dinner's ready.' It sounds kinder than just stopping.",
      tip: 'On the phone, make the end clear with a reason and a goodbye.',
    },
  'You need to go to the toilet during a lesson. | You ask the teacher.': {
    why: "You want permission, so you use 'May I...?'. 'May' is the polite word for asking permission, and it suits a teacher.",
    not: {
      'Must I go to the toilet, please?':
        "'Must I...?' asks if you have to do something. You want to be allowed to go, not told to.",
      'Shall I go to the toilet, please?':
        "'Shall I...?' offers to do something, as in 'Shall I help you?'. It does not ask permission.",
      'Should I go to the toilet, please?':
        "'Should I...?' asks for advice, as if you are not sure it is a good idea. You need permission.",
    },
    more: "'Can I go to the toilet, please?' is also very common in British classrooms. 'May I' is a little more formal.",
    tip: 'Ask quietly, so the lesson can go on.',
  },
  'You are walking your dog early on a sunny day. A man you do not know walks past and smiles. | You speak to him.':
    {
      why: "It is early in the day, so a short 'Morning' is a friendly greeting for a stranger. 'Lovely day' is light, polite small talk about the weather.",
      not: {
        'Good night. Lovely day.':
          "'Good night' is a goodbye for late in the evening or bedtime. It is early in the day.",
        'Nice to meet you.':
          'We say this after we are introduced to someone. A stranger walking past has not been introduced.',
        'How do you do?':
          'This very formal greeting is only used when two people are introduced. It is far too formal for a passer-by.',
      },
      more: "'Morning' is a short form of the full greeting. With strangers, British people like short comments about the weather: 'Cold today'.",
      tip: 'Small talk with strangers stays short and positive. The weather is the safest topic in Britain.',
    },
  'It is your birthday. A friend sends you a message. | "Happy birthday. Have a great day."': {
    why: "It is your birthday and your friend sends a kind wish, so you thank them. 'That's so kind' shows you are happy they remembered.",
    not: {
      'Happy birthday to you too.':
        "It is your birthday, not your friend's. We only wish someone a happy birthday on their own birthday.",
      'Thank you. Same to you.':
        "'Same to you' returns a wish to the other person. It is not your friend's birthday, so you cannot return this one.",
      "Oh, you're welcome.":
        "This answers 'thank you'. Your friend has wished you a happy birthday, so you are the one to say thanks.",
    },
    more: 'We can return wishes that are for everyone, such as a wish for a good weekend. A birthday wish is only for one person.',
    tip: "On a friend's birthday, a short message means a lot.",
  },
  'You live in Manchester. A friend from your football team sees you in town. | "Alright?"': {
    why: "In much of Britain, 'Alright?' is a casual hello that means 'How are you?'. It needs a short, friendly answer: 'Yeah, not bad. You?'",
    not: {
      "Yes, that's fine with me.":
        "This agrees to a plan, as if 'Alright?' meant 'Is that OK with you?'. Here it is just a greeting.",
      "Yes, you're right.":
        "This agrees with something your friend said. 'Alright?' has nothing to do with being right.",
      'Bye, see you soon.': 'This is a goodbye. Your friend has just said hello.',
    },
    more: "'Alright?' is very casual. Use it with friends, not with teachers or people you do not know. You will also hear 'You alright?'.",
    tip: "If someone greets you with 'Alright?', you do not need to give news. A short answer and 'You?' is enough.",
  },
  'You meet a friend from your old primary school in town. You have not seen him for two years. | You speak first.':
    {
      why: "You know this friend, and you have not seen him for a long time. 'Great to see you again' is how we greet someone we have met before.",
      not: {
        "Hi. It's so nice to meet you.":
          "'Nice to meet you' is only for the first time you meet someone. You were at primary school together.",
        'Hi. It was nice meeting you.':
          'This says goodbye after a first meeting. You are saying hello, and you know him already.',
        'Hi. Have a lovely day, then.': 'This is a goodbye. You have only just met him in town.',
      },
      more: "'Meet' is for the first time. 'See' is for people you already know: 'Good to see you again'.",
      tip: "After a long time, ask a catching-up question: 'What have you been up to?'",
    },
  'It is 9 pm. You arrive at a hotel with your family. The receptionist looks up and smiles. | You greet her.':
    {
      why: "You are arriving, so you need a greeting, and at 9 pm it is the evening. 'Good evening' is right even late at night, as long as you are saying hello.",
      not: {
        'Good night.':
          "This is the trap: 'Good night' is only for leaving or going to bed, never for saying hello, even at 9 pm.",
        'Good afternoon.': "The afternoon ends at about six o'clock. At 9 pm it is the evening.",
        'Goodbye.': 'This is for leaving. You have just arrived at the hotel.',
      },
      more: 'Hotel staff may greet you when you arrive and wish you a good night later, when you go up to your room.',
      tip: 'Ask yourself two questions: am I arriving or leaving, and what time is it?',
    },
  'At a family party, an uncle you have not met before is chatting to you. | "So, what do you do?"':
    {
      why: "'What do you do?' asks about your job or what you do every day. You are a pupil, so you say 'I'm still at school.'",
      not: {
        "I'm doing my homework.":
          "This answers 'What are you doing?', a question about right now. You are at a party, and 'What do you do?' asks about your job.",
        "I'm doing fine, thanks.":
          "This answers 'How are you doing?'. 'What do you do?' asks what your job is.",
        'I live near Leeds.': "This tells where you live. It answers 'Where do you live?'.",
      },
      more: "Adults often ask each other 'What do you do?' when they first meet. The answer is a job: 'I'm a nurse', 'I work in a bank'.",
      tip: "Adults may also ask a young person 'What year are you in?' or 'What do you want to do when you leave school?'",
    },
  'You moved from Iran to Leeds last year. A new classmate is getting to know you. | "Where do you live?"':
    {
      why: "'Where do you live?' asks about your home now. You live in Leeds, so you say 'In Leeds' and add a detail: 'near the park'.",
      not: {
        "I'm from Iran.":
          "This tells where you come from. It answers 'Where are you from?'. You live in Leeds now.",
        'With my mum and my sister.':
          "This tells who you live with. It answers 'Who do you live with?'.",
        "I'm fourteen.": "This tells your age. It answers 'How old are you?'.",
      },
      more: "'Where are you from?' asks about the country or place you grew up in. 'Where do you live?' asks about your home today. The answers can be different.",
      tip: 'You do not need to give your address. A town or an area is enough with someone you have just met.',
    },
  'You are walking with your friend Kasia. Your teacher, Mr Brown, stops to say hello. He has not met Kasia. | You introduce Kasia to him.':
    {
      why: "To introduce one person to another, English uses 'This is...': 'Mr Brown, this is my friend Kasia.' Say the teacher's name first, because he is the older person.",
      not: {
        'Mr Brown, she is my friend Kasia.':
          "We do not introduce people with 'she is' or 'he is'. Calling someone 'she' while she stands there can even sound rude in Britain.",
        'Mr Brown, it is my friend Kasia.':
          "'It is...' names someone you cannot see, such as a caller on the phone or a knock at the door. Kasia is standing next to you.",
        'Mr Brown, I present my friend Kasia.':
          "'I present' is very old-fashioned and formal, as at a royal event. It sounds strange in the street.",
      },
      more: "Then tell Kasia who he is: 'Kasia, this is Mr Brown, my maths teacher.'",
      tip: 'Introduce people with a little information: a name and how you know them.',
    },
  "You are leaving your friend's house after a sleepover. You say goodbye to her mum. | You speak to her mum.":
    {
      why: "You were a guest in their home, so you thank the host for having you. 'Thank you for having me' is the usual, polite British phrase for a guest who is leaving.",
      not: {
        'Thank you for coming.':
          'The host says this to the guest. You are the guest, so the words are the wrong way round.',
        "You're very welcome. Bye.":
          "This answers 'thank you'. Nobody has thanked you; you are the one who should say thanks.",
        'Thanks. Same to you.':
          "'Same to you' returns a wish. Her mum has not wished you anything.",
      },
      more: "'Having' here means having you to stay or to visit. Hosts like to hear it.",
      tip: "Thank the host for a meal too: 'Thank you for dinner. It was lovely.'",
    },
  'It is your birthday party at home. Your friends are leaving. | "Thanks for having us. It was great."':
    {
      why: "You are the host, and your guests thank you. The host's reply is 'Thanks for coming': you are glad they came to your party.",
      not: {
        'Thanks for having me. See you soon.':
          'This is what a guest says to the host. It is your party, so you are the host.',
        'Thanks for inviting me. See you soon.':
          'A guest says this too. You did the inviting, so it is the wrong way round.',
        'Same to you. See you soon.':
          "'Same to you' returns a wish. Your friends thanked you; they did not wish you anything.",
      },
      more: 'Guests and hosts thank each other in Britain. The guest thanks the host for the invitation, and the host thanks the guest for coming.',
      tip: 'Go to the door to say goodbye to your guests. It is a kind way to end a party.',
    },
  'You are on a train. The seat next to you is empty, and you are happy for someone to sit there. | "Excuse me, do you mind if I sit here?"':
    {
      why: "'Do you mind if...?' asks if something is a problem for you. You are happy for the person to sit, so the answer is no: 'No, not at all' means it is no problem.",
      not: {
        'Yes, I do mind, sorry.':
          "'Yes, I do mind' means you do not want the person to sit there. You are happy for them to sit.",
        'No, thank you, I am fine.':
          'This refuses an offer. The person is asking your permission, not offering you anything.',
        "Sorry, I can't help you.":
          'This refuses a request for help. The person only wants to sit down, and you are happy for them to.',
      },
      more: "With 'Do you mind...?', 'No' is the friendly answer. Many people add 'Go ahead' or move their bag.",
      tip: "Be careful: 'Yes' to 'Do you mind?' sounds like a refusal. Use 'No' to say that it is fine.",
    },
  'You are next to the window on a hot bus. The window is easy to open. The woman behind you speaks. | "Would you mind opening the window a little?"':
    {
      why: "'Would you mind...?' asks if it is a problem for you to do something. It is no problem, so you say 'No, of course not' and open the window.",
      not: {
        'Yes, I would mind.':
          'This means you do not want to open it. It sounds unkind when the job is so easy.',
        'Yes, please, thanks.':
          "'Yes, please' accepts an offer. The woman is asking you to do something; she is not offering anything.",
        'No, thanks. I am fine.': 'This refuses an offer. She asked you to open the window.',
      },
      more: "'Would you mind...?' is followed by the -ing form: 'Would you mind closing the door?'. It is a very polite way to ask.",
      tip: "Answer 'Would you mind...?' with a friendly 'No', and then do the thing.",
    },
  'You need your bike today to get to football. A friend asks to borrow it. | "Can I borrow your bike this afternoon?"':
    {
      why: "You need your bike, so you must say no, but kindly. 'Sorry' softens the no, and a reason, 'I need it today', helps your friend understand.",
      not: {
        "No, you can't have it.":
          "This says no, but coldly, as if you do not want to share. Friends say no kindly, with 'sorry' and a reason.",
        'Yes, of course you can.':
          'This lends the bike, but you need it this afternoon for football.',
        "Yes, you're welcome to it.":
          "'You're welcome to it' means 'Yes, take it'. You need the bike, so you cannot lend it today.",
      },
      more: "You can offer another time: 'Sorry, I need it today, but you can have it tomorrow.'",
      tip: 'A polite no has three parts: sorry, a reason and, if you can, another idea.',
    },
  'Your friend\'s family invites you to dinner on Friday. You already have a swimming lesson then. | "Would you like to come for dinner on Friday?"':
    {
      why: "You cannot go, so you refuse, but warmly. 'I'd love to, but...' shows you like the invitation, and the reason explains why you cannot come.",
      not: {
        "No, I don't want to come to dinner.":
          'This sounds as if you do not like the family or the food. It is true that you cannot go, but this is unkind.',
        "Yes, I'd love to come on Friday.":
          'This accepts, but you have a swimming lesson on Friday, so you cannot go.',
        "No, thank you. I'm already full.":
          "'I'm full' means you have eaten enough right now. The dinner is on Friday, so it is not a reason.",
      },
      more: "'I'd love to, but...' is the kindest way to say no to an invitation. Then thank them for asking.",
      tip: "If you can, suggest another time: 'Could I come next week instead?'",
    },
  'A classmate is having a party on Saturday. You are free, and you would like to go. | "Do you want to come to my party on Saturday?"':
    {
      why: "Your classmate invites you, and you want to go. 'I'd love to come' accepts happily, and 'Thanks' shows you are pleased to be asked.",
      not: {
        'Thanks. I love parties.':
          "This says you enjoy parties in general. It answers 'Do you like parties?', and it does not clearly say yes to this one.",
        'Thanks. You can come too.':
          "It is your classmate's party, so you cannot invite her to it.",
        'Thanks. I came last year.':
          'This talks about the past. She is asking about this Saturday.',
      },
      more: "'I'd love to' means 'I would love to'. The 'would' makes it about this invitation, not about what you like in general.",
      tip: 'After you say yes, ask the useful questions: what time it starts and where it is.',
    },
  'You are at your friend\'s house on a cold day. Her dad is making hot drinks. You would love one. | "Fancy a hot chocolate?"':
    {
      why: "'Fancy a...?' is a casual British way to offer something. You would love one, so you accept: 'Ooh, yes please.' 'Ooh' shows you are pleased.",
      not: {
        "I'm fine, thanks.":
          "In Britain this means 'No, thank you'. It refuses the drink, but you would love one.",
        'Here you are, thanks.':
          'We say this when we give something. Her dad is offering you a drink; you are not giving him anything.',
        "No, thanks. I'm full.":
          'This refuses food because you have eaten enough. You want the hot chocolate.',
      },
      more: "'Fancy a...?' means 'Would you like a...?'. It is friendly and informal: 'Fancy a biscuit?', 'Fancy going to the park?'",
      tip: "Be careful with 'I'm fine'. After an offer, it means no. To say yes, use 'Yes, please'.",
    },
  'You are carrying three heavy boxes into school. A teacher sees you. | "Shall I carry one of those for you?"':
    {
      why: "'Shall I...?' offers help. You need help with the boxes, so you accept warmly: 'That would be great, thanks.'",
      not: {
        'Yes, you shall, Sir.':
          "We do not answer an offer with 'you shall'. It sounds like an old-fashioned order.",
        'Yes, I can carry one for you.':
          'The teacher offered to carry a box for you. This offers to carry one for him, the wrong way round.',
        'No problem, Sir. Any time.':
          'This answers thanks. The teacher made an offer, so you accept it and thank him.',
      },
      more: "'Shall I...?' offers to do something for someone: 'Shall I open the door?'. 'That would be great' or 'Yes, please' accepts.",
      tip: 'Accepting help is polite. Say thank you again when the job is done.',
    },
  'It is a sunny Saturday. You and your friend are bored at home. | "Shall we go to the park?"': {
    why: "'Shall we...?' makes a suggestion. You like the idea, so you agree: 'Good idea. Let's go.' 'Let's' means 'let us'.",
    not: {
      'Yes, we shall.':
        "This sounds very old-fashioned. We answer a suggestion with 'Good idea' or 'OK'.",
      'Yes, I go to the park.':
        'This talks about what you do in general. The suggestion is about going now.',
      "No, thanks. I'm full.":
        'This refuses food because you have eaten enough. Your friend suggested a trip, not food.',
    },
    more: "Other ways to suggest are 'Let's go to the park' and 'Why don't we go to the park?'",
    tip: "If you do not like the idea, suggest another: 'I'd rather go swimming. What about you?'",
  },
  'Your friend is quiet today. You ask what is wrong. | "My grandad is in hospital."': {
    why: "Your friend has sad news about a family member. 'I'm sorry to hear that' shows you care, even though it is not your fault.",
    not: {
      "Oh, I'm sorry. It's my fault.":
        "This apologises for causing a problem. You did not cause your friend's grandad to be ill.",
      'Oh, never mind.':
        "'Never mind' means a problem is not important. A grandad in hospital is important to your friend.",
      'Oh, get well soon.':
        'We say this to the person who is ill. Your friend is not ill, and the grandad is not here.',
    },
    more: "You can add a kind wish: 'I hope he gets better soon.'",
    tip: "'I'm sorry' in English can be an apology or a way to show sympathy. 'Sorry to hear that' is always sympathy.",
  },
  'Your friend arrives at school smiling. | "My aunt has just had a baby girl."': {
    why: "A new baby is happy news, so you show you are pleased. 'How lovely' is a warm reply, and asking the baby's name shows interest.",
    not: {
      "Oh, I'm so sorry to hear that news.": 'This is for sad news. A new baby is happy news.',
      "Well done, you. That's brilliant.":
        "'Well done' praises the person you are talking to for something they did. Your friend did not have the baby.",
      'Oh dear. I hope she gets well soon.':
        'This is for someone who is ill. Nothing tells you the baby is ill.',
    },
    more: "To the new parents themselves, people say 'Congratulations'. To your friend, 'How lovely' or 'How exciting' fits.",
    tip: "Good news about a family is a nice chance to ask questions: 'Have you seen her yet?'",
  },
  'Your friend tried to join the school netball team. | "I didn\'t get into the team."': {
    why: "Your friend is disappointed, so you show sympathy: 'Oh, what a shame.' It means you are sorry this bad thing happened.",
    not: {
      'Oh, congratulations.':
        'We say this for good news, such as getting into the team. Your friend did not get in.',
      "Oh, sorry. It's my fault.":
        'This apologises for causing a problem. You did not choose the team.',
      'Oh, lucky you.':
        'This means something good has happened to your friend. Not getting in is not lucky.',
    },
    more: "'What a shame' and 'What a pity' are for small, disappointing news. For very sad news, say 'I'm so sorry'.",
    tip: "After bad news, a kind next step helps: 'You can try again next term.'",
  },
  'You are visiting a new town for the day. A man stops you in the street. | "Excuse me, do you know where Elm Street is?"':
    {
      why: "You are only visiting, so you do not know the way. 'Sorry, I'm not from round here' is the usual British way to explain politely that you cannot help.",
      not: {
        "Sorry, I don't know you at all.":
          'This says you do not know the man. He did not ask that; he asked about a street.',
        "Yes, it's a really nice street.":
          'This does not tell him where it is, and you do not know the street anyway.',
        "Sorry, I'm not very well.":
          'This says you feel ill. It is not a reason for not knowing the way.',
      },
      more: "'Round here' means 'in this area'. You might add: 'You could ask in that shop.'",
      tip: 'Strangers often ask the way in Britain. If you know it, help. If not, a polite sorry is fine.',
    },
  'On your first day, the teacher asks your name. You say it very quietly. | "Sorry?"': {
    why: "Here 'Sorry?' means 'I did not hear you. Please say it again.' So you repeat your name, more clearly: 'Sorry, it's Wiktoria.' Your 'sorry' is polite, because the teacher had to ask.",
    not: {
      "That's OK, don't worry.":
        'This accepts an apology. The teacher is not apologising; she is asking you to repeat.',
      "Oh, I'm sorry too.":
        'This sounds as if you are both apologising. The teacher only wants to hear your name again.',
      "You're welcome, Miss.": "This answers 'thank you'. The teacher has not thanked you.",
    },
    more: "'Sorry?' with a rising voice asks someone to repeat. 'Pardon?' does the same. 'What?' can sound rude.",
    tip: 'When someone asks you to repeat, speak a little more slowly and loudly. Spell a name if it is unusual.',
  },
  'You are paying in a noisy shop. The assistant asks you something, but you do not hear it. | You did not hear the question.':
    {
      why: "You did not hear, so you ask the assistant to repeat it. 'Sorry, what was that?' is polite and very common in Britain.",
      not: {
        'What? Say it again.':
          "'What?' on its own and an order to repeat sound rude to a stranger. Start with 'Sorry'.",
        'Sorry about that. My fault.':
          'This apologises for a mistake. You have not made one; you just did not hear.',
        "Yes, please. That's fine.":
          'This agrees without knowing the question. She might be asking something you do not want.',
      },
      more: "Other polite ways are 'Sorry, could you say that again?' and 'Pardon?'.",
      tip: 'Never say yes to a question you did not hear. Ask first; it is always polite.',
    },
  'You are in a café with a friend. You are ready to order, and the waiter is walking past. | You speak to the waiter.':
    {
      why: "'Excuse me' politely gets someone's attention. Then 'Can we order, please?' asks for what you want, kindly.",
      not: {
        'Hey, you. We want to order.':
          "'Hey, you' is a rude way to get a stranger's attention. Waiters are people, not servants.",
        'Pardon. Could we order, please?':
          "'Pardon' asks someone to repeat what they said. To get attention, use 'Excuse me'.",
        'Come here. We want to order now.':
          'This is an order. It sounds rude, even if you are in a hurry.',
      },
      more: "In Britain, people catch a waiter's eye or raise a hand a little. Clicking your fingers or shouting is rude.",
      tip: "Use 'Excuse me' to start talking to anyone you do not know: a waiter, a shop assistant, a person in the street.",
    },
  'You and an older man reach a door at the same time. He opens it and steps back for you. | "After you."':
    {
      why: "'After you' means 'You go first'. The man is being polite, so you thank him and go through the door.",
      not: {
        "Oh, you're very welcome.":
          "This answers 'thank you'. The man has not thanked you; he has done something kind for you.",
        'Oh, never mind, then.':
          "'Never mind' says a problem does not matter. The man has offered to let you go first; there is no problem.",
        "Oh, I'm sorry to hear that.":
          "This is for bad news. 'After you' is a polite offer, not news.",
      },
      more: "You can say 'After you' too, when you let someone go first through a door or onto a bus.",
      tip: 'Holding doors and letting people go first is very common in Britain. A quick thank you is always expected.',
    },
  'On a school trip to a castle, a guide leads your class down some old stone stairs into a cellar. | "Mind your head."':
    {
      why: "'Mind your head' is a warning: be careful not to hit your head, because the ceiling is low. You thank the guide for the warning and take care.",
      not: {
        "Oh, I don't mind at all.":
          "Here 'mind' means 'be careful of', not 'be unhappy about'. The warning is not asking for your opinion.",
        "Oh, you're very welcome.":
          "This answers 'thank you'. The guide gave you a warning; nobody thanked you.",
        'Oh, bless you.': 'We say this after a sneeze. Nobody sneezed.',
      },
      more: "'Mind' gives warnings in British English: 'Mind the step', 'Mind the gap' on the London Underground, 'Mind out' for 'move out of the way'.",
      tip: "When you hear 'Mind...', look for the danger: a step, a gap, a low ceiling, a hot plate.",
    },
  'You are visiting your friend\'s house. Her dad puts a plate of biscuits on the table. | "Help yourself to a biscuit."':
    {
      why: "'Help yourself' means 'Take one yourself; you do not need to ask'. So you thank him, and you can take a biscuit.",
      not: {
        "Sorry, I can't help you.":
          "'Help yourself' does not ask you to help anyone. It invites you to take a biscuit.",
        "OK, I'll help you now.":
          "He is not asking for help. 'Help yourself' means you may take what you want.",
        "You're welcome. Enjoy them.":
          'This is what the host might say. You are the guest, so you thank him.',
      },
      more: "Hosts say 'Help yourself' to make guests feel at home: 'Help yourself to anything in the fridge'.",
      tip: "When a British host says 'Help yourself', it is polite to take one. Say thank you as you do.",
    },
  'You are in a restaurant. The waiter puts your pizza on the table. | "Here you are. Enjoy your meal."':
    {
      why: "The waiter brings your food with a kind wish, so you thank him. 'It looks great' is a friendly thing to add.",
      not: {
        'Thanks. Enjoy your meal too.':
          'The waiter is working, not eating, so you cannot wish him the same. Even British people make this slip sometimes.',
        "You're welcome. Enjoy it.":
          'This is what the waiter might say. You are the customer, so you thank him.',
        "Yes, please. I'd love one.":
          'This accepts an offer. The waiter has already brought your pizza.',
      },
      more: 'We return a wish only when the other person will do the same thing. The waiter is not eating, so this wish cannot go back.',
      tip: 'If you return a wish by mistake, just smile. Everyone does it sometimes.',
    },
  'It is Friday. Your friend is leaving school. You will both be at home all weekend. | "Have a good weekend."':
    {
      why: "Your friend wishes you a good weekend, and your friend has a weekend too. 'You too' sends the same wish back: 'I hope you have a good weekend too.'",
      not: {
        'Thanks. Me too.':
          "'Me too' agrees that something is also true for you, as in 'I'm hungry.' 'Me too.' A wish needs 'You too'.",
        'Thanks. Me neither.':
          "'Me neither' agrees with a negative sentence, as in 'I don't like rain.' Your friend made a wish.",
        "Thanks. You're welcome.":
          "This answers 'thank you'. Your friend made a wish; she did not thank you.",
      },
      more: 'Think about who will have the weekend. Both of you will, so the wish can go back to your friend.',
      tip: "'Me' is about you; 'you' is about the other person. That is the difference between the two.",
    },
  'You are at a party with a friend. A song you both love starts to play. | "Oh, I love this song."':
    {
      why: "Your friend says something positive, and it is true for you too. 'Me too' agrees: it means 'I love it too'.",
      not: {
        "You too. It's great.":
          "'You too' returns a wish, as in 'Have a nice day.' 'You too.' Your friend did not make a wish.",
        "Me neither. It's great.":
          "'Me neither' agrees with a negative sentence, such as 'I don't like this song'. Your friend's sentence is positive.",
        "So am I. It's great.":
          "'So am I' agrees with a sentence with 'am', such as 'I'm hungry'. 'I love' needs 'So do I'.",
      },
      more: "'So do I' means the same here, and is a little more formal.",
      tip: "To agree, check if the sentence is positive or negative. A negative sentence needs 'neither'.",
    },
  'It is Sunday evening. You are texting a friend. Neither of you is looking forward to school. | "I don\'t like Mondays."':
    {
      why: "Your friend's sentence is negative, 'I don't like', and you feel the same. 'Me neither' agrees with a negative sentence.",
      not: {
        "So do I. They're the worst.":
          "'So do I' agrees with a positive sentence, such as 'I like Mondays'. It says you like Mondays, which you do not.",
        "Neither am I. They're the worst.":
          "'Neither' is right, but the verb must match. 'I don't like' needs 'do': 'Neither do I'.",
        "You too. They're the worst.":
          "'You too' returns a wish. Your friend did not wish you anything.",
      },
      more: "'Neither do I' and 'Nor do I' mean the same as 'Me neither'. They are a little more formal.",
      tip: "If you do not agree, say so kindly: 'Oh, I don't mind Mondays.'",
    },
  'You and your friend have just finished a long cross-country run. You are both exhausted. | "I\'m so tired."':
    {
      why: "Your friend says 'I'm tired', a positive sentence with 'am'. To agree, use the same verb: 'So am I.' It means 'I am tired too'.",
      not: {
        'So do I. That was hard.':
          "'So do I' matches sentences with an ordinary verb, such as 'I love running'. 'I'm tired' uses 'am'.",
        'Me neither. That was hard.':
          "'Me neither' agrees with a negative sentence. 'I'm so tired' is positive.",
        'Neither am I. That was hard.':
          "'Neither' agrees with a negative sentence, such as 'I'm not tired'. That would mean you are not tired either.",
      },
      more: "The verb after 'So' follows the first sentence: 'I can swim.' 'So can I.' 'I've finished.' 'So have I.'",
      tip: "In casual speech, 'Me too' works after any positive sentence. 'So am I' is a little more careful.",
    },
  'You are waiting at a bus stop on a warm, sunny morning. An older woman smiles at you. | "Lovely day, isn\'t it?"':
    {
      why: "The woman is making friendly small talk about the weather. It is sunny, so you agree: 'Yes, it's beautiful.' Agreeing is the usual answer.",
      not: {
        'Thanks. Same to you.':
          "This answers a wish, such as 'Have a lovely day'. She made a comment about the weather.",
        "Yes, it's Tuesday.":
          "'Day' here is about the weather, not the name of the day. She is not asking what day it is.",
        "No, it isn't, thanks.":
          "It is warm and sunny, so 'No' is not true. It also sounds unfriendly in small talk.",
      },
      more: "'Isn't it?' at the end invites you to agree. It is not a real question. British people often start small talk this way.",
      tip: "Weather small talk is short. Agree, add a word, and smile: 'Yes, lovely and warm.'",
    },
  'You hold the shop door open for a man carrying boxes. | "Cheers, mate."': {
    why: "'Cheers' is a casual British way to say thanks, and 'mate' is a friendly word for 'friend'. So you answer his thanks: 'Oh, no problem.'",
    not: {
      'Oh, cheers to you too.':
        "'Cheers' here means thanks, not a toast with drinks. You do not need to send it back.",
      'Oh, excuse me, please.':
        'This asks someone to let you pass. You are holding the door for him.',
      "Oh, I'm sorry, mate.":
        'This is an apology. You have done something kind, so there is nothing to be sorry for.',
    },
    more: "'Mate' is casual. Many British men say it to anyone, even a stranger, but do not say it yourself to a teacher or an older stranger.",
    tip: 'Answer casual thanks with something casual, or just a smile.',
  },
  'You are buying a sandwich in a café. You want to eat it on the train. | "Is that to eat in or take away?"':
    {
      why: "The question gives two choices: eat in the café, or take it away. You want to eat on the train, so you choose: 'To take away, please.'",
      not: {
        'Yes, please. Thank you.':
          "This is an either-or question, so 'yes' does not answer it. You must choose one of the two.",
        "No, thank you. I'm full.":
          'This refuses food. You want the sandwich; you just need to say where you will eat it.',
        "I'd like it very much.":
          "This answers 'Would you like it?'. The assistant asked where you will eat it.",
      },
      more: "'Takeaway' is also a noun in British English: a hot meal you buy and eat at home. In American English it is 'takeout'.",
      tip: "When a question has 'or' in it, answer with one of the choices, not yes or no.",
    },
  'Your friend\'s mum is making drinks. You would like tea. | "Would you like tea or coffee?"': {
    why: "She offers two choices, tea or coffee, so you choose one and add 'please': 'Tea, please.'",
    not: {
      'Yes, please.':
        "'Yes, please' accepts an offer of one thing. Here there are two choices, so she still does not know which one you want.",
      'Yes, I would.':
        "This answers 'Would you like a drink?'. With two choices, you need to name one.",
      'No, thank you.': 'This refuses both drinks, but you would like tea.',
    },
    more: "If you want neither, ask for something else politely: 'Could I just have some water, please?'",
    tip: "Listen for 'or'. It tells you to pick one, so answer with a name, not yes or no.",
  },
  'You are in a busy café. The chair next to you is empty. A woman points at it. | "Excuse me, is anyone sitting here?"':
    {
      why: "'Is anyone sitting here?' asks if the chair is taken. Nobody is sitting there, so the answer is no, and 'go ahead' tells her she can sit.",
      not: {
        'Yes, go ahead.':
          "'Yes' would mean someone is sitting there, but then 'go ahead' says she can sit. The two halves do not agree.",
        'No, thank you.': 'This refuses an offer. She asked a question about the chair.',
        'Yes, I am.':
          'This answers a question about you. She asked about the empty chair, not your chair.',
      },
      more: "People also ask 'Is this seat free?'. Then the answer turns round, and yes means she can sit.",
      tip: 'Before you answer yes or no, think about what the question asks: is the seat taken, or is it free?',
    },
  'You are waiting at the counter in a busy bakery. An assistant is already putting your cakes in a box. | Another assistant: "Are you being served?"':
    {
      why: "'Are you being served?' asks if someone is already helping you. An assistant is getting your cakes, so you say 'Yes, thanks' and show who is helping.",
      not: {
        "Yes, please. I'd like two cakes.":
          "'Yes, please' asks this assistant to serve you too, but someone is already doing that.",
        "No, thanks. I'm just looking.":
          'This says you do not want help, but you are buying cakes and someone is helping you.',
        "Yes, I'm serving myself.":
          'In a bakery the assistants serve you. Nobody is serving themselves here.',
      },
      more: "'Being served' means someone is serving you now. Shop staff ask it so that nobody waits for nothing.",
      tip: "If nobody is helping you yet, answer 'No, not yet' and say what you would like.",
    },
  'You are paying at a supermarket checkout. You have brought your own shopping bag. | "Do you need a bag?"':
    {
      why: "You have your own bag, so you do not need one. 'No, thanks' refuses politely, and 'I've brought one' gives the reason.",
      not: {
        "Yes, please. I've brought one.":
          "'Yes, please' asks for a bag, but you have brought your own. The two halves disagree.",
        "No, thanks. I'm just looking.":
          'We say this to refuse help while we look around a shop. You are paying, so you are not just looking.',
        'Yes, I need it, thank you.':
          'You have brought your own bag, so you do not need one from the shop.',
      },
      more: 'Most shops in Britain charge for bags, so many people bring their own.',
      tip: "At a checkout, short answers with 'thanks' are best.",
    },
  'You arrive to stay with a British family for a week. The mum shows you the living room. | "Make yourself at home."':
    {
      why: "'Make yourself at home' means 'Relax and feel comfortable here, as in your own home'. It is a kind thing to say, so you thank her.",
      not: {
        "Sorry, I can't make it today.":
          "'I can't make it' means 'I cannot come'. You have already arrived, and 'make' in her sentence means something different.",
        'Thanks. Same to you.':
          "'Same to you' returns a wish. It is her home, so she is already at home.",
        "No, thanks. I'm full.": 'This refuses food. She has not offered you anything to eat.',
      },
      more: "Other kind host phrases are 'Help yourself' and 'Just shout if you need anything'.",
      tip: "Even when told to make yourself at home, ask before you use things: 'Is it OK if I have a shower?'",
    },
  'You arrive at your friend\'s house. You are thirsty after the walk. Her mum speaks to you. | "Can I get you anything?"':
    {
      why: "'Can I get you anything?' is an offer of a drink or a snack. You are thirsty, so you accept and say what you want: 'Just some water, please.'",
      not: {
        'Yes, you can get it.':
          'This answers the words, not the offer. She wants to know what you would like.',
        "No, I can't get anything.":
          'She offered to get something for you; she did not ask you to get anything.',
        'Get me some water.':
          "This is an order, and an order to your friend's mum sounds rude. Ask with 'please'.",
      },
      more: "'Just' makes a request sound small and easy to do.",
      tip: 'When a host offers, it is fine to ask for something simple. Hosts like to look after guests.',
    },
  'A visitor to your town stops you outside the station. There is a bank next to the station. | "Excuse me, is there a bank near here?"':
    {
      why: "'Is there a bank near here?' asks if one is nearby, and where. There is one next to the station, so you say yes and where it is.",
      not: {
        "Yes, I'm going to the bank.":
          'This tells your own plans. It does not tell the visitor where the bank is.',
        'Yes, it opens at nine.': 'This gives the opening time. The visitor asked where a bank is.',
        "Yes, I've got a bank card.": 'This is about you. The visitor needs to find a bank.',
      },
      more: 'Direction words help: next to, opposite, behind, between, on the corner.',
      tip: "Point if it helps, and check the visitor understands: 'Can you see it, just there?'",
    },
  'In the supermarket, an old man dropped some apples. You helped him pick them up. | "That\'s very kind of you. Thank you."':
    {
      why: "The man thanks you. 'Not at all' is a polite British answer to thanks: it means 'It was no trouble'. 'Happy to help' adds warmth.",
      not: {
        'Never mind. Happy to help.':
          "'Never mind' is for a problem that does not matter. It does not answer thanks.",
        'Yes, I am very kind.':
          'This agrees that you are kind, which sounds proud. In English we answer thanks modestly.',
        'Thank you. You too.':
          'This thanks him back and returns a wish. He thanked you, and he did not make a wish.',
      },
      more: "'Not at all', 'No problem' and 'My pleasure' all answer thanks. 'Not at all' and 'My pleasure' sound a little more formal.",
      tip: 'British people answer thanks modestly. Say it was no trouble, even if it took some effort.',
    },
  'A new classmate told you her name this morning, but you have forgotten it. | You speak to her at lunch.':
    {
      why: "You have met, but you forgot her name. 'What's your name again?' is polite: 'again' shows you know she told you before.",
      not: {
        'Sorry, who are you again?':
          "'Who are you?' sounds rude, as if she is a stranger who should not be there.",
        'Sorry, can you tell me who you are?':
          'This sounds like a guard asking a stranger. It is too cold for a classmate you have met.',
        'Sorry, do you have a name?': 'Everyone has a name, so this sounds rude or silly.',
      },
      more: "Forgetting names is normal. British people often say 'I'm terrible with names' to make it easier.",
      tip: "When you hear the name again, use it at once: 'Thanks, Lina.' It helps you remember.",
    },
  'It is very hot in your friend\'s car. Her mum is driving. | "Shall I open a window for you?"': {
    why: "'Shall I...?' is an offer to do something for you. You are hot, so you accept it with 'Yes, please'. 'It's really hot' gives the reason.",
    not: {
      'Yes, you shall open it.':
        "We do not answer 'Shall I...?' with 'you shall'. It sounds like an old-fashioned order.",
      "Yes, I'd like to open it.":
        'She offered to open it herself. This says you want to do it, which is not what she offered.',
      "No, thanks. It's really hot.":
        "'No, thanks' refuses, but you are hot. The reason and the answer disagree.",
    },
    more: "'Shall I...?' offers to help. 'Shall we...?' suggests doing something together.",
    tip: "To refuse an offer kindly, say 'No, thanks, I'm fine'.",
  },
  'You have no plans this Saturday. A friend calls you. | "Are you free on Saturday?"': {
    why: "'Are you free?' asks if you have no plans. You have none, so you say yes. 'Why?' asks what your friend has in mind.",
    not: {
      "Yes, it doesn't cost anything.":
        "Here 'free' means 'not busy', not 'costing nothing'. Your friend is asking about your time.",
      'No, it costs five pounds.':
        "This is about a price. 'Free' in the question is about your plans.",
      "Yes, it's on Saturday.":
        'This says when something happens. Your friend wants to know if you have plans.',
    },
    more: "'Free' has two meanings: 'not busy' (Are you free?) and 'costing nothing' (Entry is free). The sentence tells you which.",
    tip: "Before you say yes, ask what the plan is. 'Why?' or 'What are you thinking?' is friendly.",
  },
  'Your neighbour waves at you over the garden fence. | "Hi. Could you do me a favour?"': {
    why: "'Could you do me a favour?' asks for help with something small. A friendly answer is 'Sure', and then you ask what the favour is.",
    not: {
      'Yes, please. Thank you.':
        'This accepts an offer. Your neighbour is asking for help, not offering it.',
      "No, I'm fine, thanks.": 'This refuses an offer. Your neighbour is asking you for help.',
      "You're welcome, any time.": 'This answers thanks. Your neighbour has not thanked you yet.',
    },
    more: "A favour is something kind you do to help someone. After a favour, people often say 'I owe you one'.",
    tip: 'It is fine to ask what the favour is before you agree to it.',
  },
  'You have just won the school poetry prize. Your friend\'s mum speaks to you. | "Congratulations. That\'s wonderful news."':
    {
      why: "Someone congratulates you on your prize, so you thank them. 'I'm really pleased' shares your happy feeling.",
      not: {
        'Same to you. Thank you.':
          "'Same to you' returns a wish. She has not won a prize, so you cannot send it back.",
        "Thank you. You're welcome.":
          "'You're welcome' answers thanks. She congratulated you; she did not thank you.",
        'Well done to you too.':
          'This praises her for doing something well, but you are the one who won.',
      },
      more: "You can also share the credit: 'Thank you. My teacher helped me a lot.'",
      tip: 'Accept praise with a thank you. You do not need to say it was nothing.',
    },
  'You and a friend have just come out of the cinema. You loved the film. | "What did you think of it?"':
    {
      why: "'What did you think of it?' asks for your opinion of the film. You loved it, so you give your opinion: 'I thought it was brilliant.' 'Thought' is past, like the question.",
      not: {
        'I think it starts at seven.':
          "This gives a time. It answers 'When does it start?'. You have already seen the film.",
        'I saw it with my sister.':
          "This tells who you went with. It answers 'Who did you see it with?'.",
        'Yes, I think so too.':
          "This agrees with an opinion, but your friend has not given one. A 'What...?' question cannot be answered with 'yes'.",
      },
      more: "Opinion words: amazing, good, OK, boring, awful. British people often say 'brilliant' for something very good.",
      tip: "Give a reason with your opinion: 'The ending was so clever.'",
    },
  'A new teacher comes into your class for the first time. | "Good morning, everyone. I\'m Mr Okafor."':
    {
      why: "To greet a teacher politely, use his title and family name: 'Mr Okafor'. It is how British pupils speak to teachers.",
      not: {
        'Good morning, Okafor.':
          "A family name with no title sounds rude to a teacher. Use 'Mr' with it.",
        'Good morning, teacher.':
          "In Britain, pupils do not call a teacher 'teacher'. They use the name, or 'Sir' and 'Miss'.",
        'Good morning, my teacher.':
          "English does not use 'my teacher' to speak to someone. It sounds strange.",
      },
      more: "Titles: 'Mr' for a man; 'Mrs' for a married woman; 'Ms' for any woman; 'Miss' for a young or unmarried woman.",
      tip: "When you hear a new teacher's name, use it straight away. It helps you remember it.",
    },
  'You are waiting for a train. A woman next to you has no watch. Your phone says 4.10. | "Sorry, have you got the time?"':
    {
      why: "'Have you got the time?' asks what time it is. Your phone says 4.10, so you tell her: 'Yes, it's ten past four.'",
      not: {
        "Yes, I've got lots of time.":
          "This says you are not in a hurry. 'The time' means the time on the clock, not free time.",
        "No, sorry, I'm very busy.":
          "This answers 'Have you got time?', a question about being free. She asked for the time on the clock.",
        "Yes, I've got a phone.":
          'This is true, but it does not tell her the time. Give her the time itself.',
      },
      more: "Say times the British way: 4.10 is 'ten past four', 4.30 is 'half past four', and 4.45 is 'quarter to five'.",
      tip: 'Look at your phone or watch, then answer with the time. Strangers will thank you.',
    },
  'You have waited a few minutes at the counter of a busy chemist. The assistant comes over. | "Sorry to keep you waiting."':
    {
      why: "The assistant apologises for the wait. 'That's OK. No problem' accepts the apology kindly. The shop is busy, so the wait is not her fault.",
      not: {
        "Yes, you're very slow.":
          'This is rude. She has apologised, and the shop is busy. Accept the apology kindly.',
        "You're welcome. Bye.":
          "This answers thanks, and 'Bye' ends the talk. She has come to serve you, so you still need her.",
        "I'm sorry too.": 'You did nothing wrong, so you do not need to apologise.',
      },
      more: "'Sorry to keep you waiting' is a polite set phrase in British shops, offices and phone calls.",
      tip: 'After a wait, smile and say what you need. A short wait is normal in a busy shop.',
    },
  'You arrive at the library at 5.05 pm. A member of staff is locking the door. | "Sorry, I\'m afraid we\'re closed."':
    {
      why: "'I'm afraid' here is a polite way to give bad news: it means 'I'm sorry, but...'. The library is closed, so you accept it and ask when it opens.",
      not: {
        "Don't be afraid. I'm very friendly.":
          "'I'm afraid' does not mean she is frightened here. It only makes bad news sound softer.",
        'Yes, please. Thank you very much.':
          'This accepts an offer. She has given you bad news, not offered you anything.',
        'Oh, OK. Thanks for coming.':
          'A host says this to a guest who came to visit. You are the one who came.',
      },
      more: "British people use 'I'm afraid' a lot to soften bad news: 'I'm afraid I can't come', 'I'm afraid it's sold out'.",
      tip: "When you hear 'I'm afraid', expect bad news. Answer calmly and ask a useful question.",
    },
  'You are buying a bottle of water at a kiosk. That is all you want. | "Would you like anything else?"':
    {
      why: "You only want the water, so you say no politely: 'No, thanks. That's all.' It tells the assistant you are ready to pay.",
      not: {
        "Yes, please. That's all.":
          "'Yes, please' asks for more, but 'That's all' says you want nothing more. The two halves disagree.",
        "No, I'm just looking.":
          'We say this before we choose anything. You are already buying the water.',
        'Yes, everything, thanks.': 'This asks for everything in the kiosk, which you do not want.',
      },
      more: "You might also hear 'Is that everything?' or 'Anything else for you?'. The answer is the same.",
      tip: 'Have your money or card ready when you say you have finished. The next step is paying.',
    },
  'You are paying for a T-shirt in a clothes shop. You want to use your bank card. | "How would you like to pay?"':
    {
      why: "'How would you like to pay?' asks how you will pay, with cash or a card. You want to use your card, so you say 'By card, please.'",
      not: {
        "I'd like it very much.":
          "This answers 'Would you like it?'. She asked how you will pay, not if you want the T-shirt.",
        'With pleasure, thanks.':
          "'With pleasure' agrees to do something for someone. It does not say how you will pay.",
        'Yes, I would like to.':
          "A 'How...?' question cannot be answered with 'yes'. Say cash or card.",
      },
      more: "In Britain many people pay 'contactless': they touch the card on the machine.",
      tip: 'Learn the payment words: cash, card, contactless, receipt and change.',
    },
  'Your friend is leaving your house to go home. She says goodbye at the door. | "Bye. Take care."':
    {
      why: "'Take care' is a kind goodbye that means 'Stay safe and well'. You send the same wish back with 'You too'.",
      not: {
        'Me too. Bye.':
          "'Me too' agrees that something is true for you as well. A goodbye wish needs 'You too'.",
        "I'll take it. Bye.":
          "'Take care' is a fixed phrase. It does not mean taking something with you.",
        'Thanks. Get well soon.': 'This is for someone who is ill. Your friend is not ill.',
      },
      more: "'Take care' is warm and friendly. People use it at the end of visits, phone calls and messages.",
      tip: "Many goodbye wishes can go back to the other person: 'Have a nice day', 'Have a good trip'.",
    },
  'Your friend is at your house. She knocks over a glass of water by accident. It is only water. | "Oh no, I\'m so sorry."':
    {
      why: "Your friend apologises for a small accident. 'Never mind' tells her it does not matter, and offering to get a cloth shows you are not upset.",
      not: {
        "Well done. I'll get a cloth.":
          "'Well done' praises someone for doing something good. Spilling water is not something to praise.",
        "You're welcome. I'll get a cloth.":
          "'You're welcome' answers thanks. Your friend said sorry, not thank you.",
        "Bless you. I'll get a cloth.":
          "We say 'Bless you' after a sneeze. Your friend spilt water; she did not sneeze.",
      },
      more: "'Never mind' is for small problems that are not important. For a bigger problem, people say 'Don't worry, we'll sort it out'.",
      tip: 'Accepting an apology quickly makes the other person feel better. Smile when you say it.',
    },
  'Your name is Sam. A shop said it would phone you today about a Saturday job. Your phone rings, and you do not know the number. | "Hello, is that Sam?"':
    {
      why: "On the phone, 'Speaking' means 'Yes, this is me'. You are Sam, so 'Yes, speaking' is the short, polite answer.",
      not: {
        'Yes, I am speaking.':
          "This means 'I am talking right now', which is not what the caller asked. The phone answer is just 'Speaking'.",
        'Yes, that is Sam.':
          "'That' points at someone else, so this sounds as if Sam is another person.",
        "Yes, it's Sam's phone.":
          'This says the phone belongs to Sam, as if you are someone else. You are Sam.',
      },
      more: "On the phone, English uses 'this' for yourself and 'that' for the other person: 'This is Sam. Is that Jo?'",
      tip: 'If you are not expecting a call, it is fine to ask who is calling before you say who you are.',
    },
  'You are at home. The phone rings. The caller wants a pizza shop, but this is your family\'s number. | "Hello, is that Pizza Palace?"':
    {
      why: "The caller has dialled the wrong number by mistake. 'Sorry, I think it's the wrong number' tells them politely.",
      not: {
        'Yes, it is. What pizza would you like?':
          'This pretends to be the pizza shop. It is not true, and the caller will wait for a pizza that never comes.',
        "Sorry, I'm not hungry right now.":
          'The caller is not offering you food. They want to order from a shop.',
        'Sorry, she is not here right now.':
          'We say this when a caller asks for a person who is out. This caller asked for a shop.',
      },
      more: "The caller will usually apologise for the mistake. You can answer 'No problem. Bye.'",
      tip: 'Never give your name or address to a caller you do not know. Saying it is the wrong number is enough.',
    },
  'You phone your friend Ella. Her dad answers. | "Hello? Who\'s calling, please?"': {
    why: "On the phone, say who you are with 'It's...': 'It's Maria.' Adding 'Ella's friend' helps her dad know who you are.",
    not: {
      "Here is Maria, Ella's friend.":
        "'Here is' introduces something you are handing over. On the phone, English says 'It's Maria' or 'This is Maria'.",
      "I'm calling Maria, Ella's friend.":
        'This means you are phoning someone called Maria. You are Maria, and you are phoning Ella.',
      "You're calling Maria, Ella's friend.":
        "This tells Ella's dad that he is phoning you. You made the call.",
    },
    more: "After saying who you are, ask for the person you want: 'Is Ella there, please?'",
    tip: 'Be polite to the person who answers. They will often pass the phone to your friend.',
  },
  'Your bus did not come, so you arrive ten minutes late for your English lesson. | You go into the classroom.':
    {
      why: "You are late, so you apologise as you come in and give a short reason: 'Sorry I'm late. The bus didn't come.' Then sit down quietly.",
      not: {
        'Hi, Miss. Did I miss anything good today?':
          'This does not apologise, and it sounds as if being late does not matter. It is too casual for a late arrival.',
        "Excuse me, Miss. I'm here now, OK?":
          "This does not say sorry, and 'OK?' sounds cheeky. Teachers expect an apology.",
        'Sorry to hear that, Miss.':
          "This is for someone else's bad news. You are the one who is late, so you apologise.",
      },
      more: "Note the difference: one 'sorry' apologises, and 'Sorry to hear that' shows sympathy.",
      tip: 'Keep the reason short. Ask the teacher later what you missed.',
    },
  'It is Monday morning. You went swimming on Saturday. A classmate asks about your weekend. | "How was your weekend?"':
    {
      why: "'How was your weekend?' asks about the past, so your news is in the past tense too: 'I went swimming.'",
      not: {
        "Great, thanks. I'll go swimming.":
          "'I'll go' is about the future. The weekend is over, so it is past.",
        'Great, thanks. I go swimming.':
          "'I go' is about habits, things you do often. The question is about last weekend.",
        "Great, thanks. I'm going swimming.":
          "'I'm going' is about now or a plan. The swimming was on Saturday, in the past.",
      },
      more: "Many past forms are irregular: 'go' becomes 'went', 'see' becomes 'saw', 'have' becomes 'had'.",
      tip: "Listen to the question's verb. 'Was' and 'did' ask about the past, so answer in the past.",
    },
  'It is Thursday. You have plans to visit your cousins on Saturday. A friend asks about your plans. | "What are you doing at the weekend?"':
    {
      why: "'What are you doing at the weekend?' asks about a plan. We use the same form for a fixed plan: 'I'm visiting my cousins.'",
      not: {
        'I visited my cousins.': "'Visited' is the past. The weekend has not happened yet.",
        "I've visited my cousins.":
          "'I've visited' is about an experience up to now. You are talking about a plan for Saturday.",
        'I was visiting my cousins.':
          "'I was visiting' describes the past. This is about the coming weekend.",
      },
      more: "'At the weekend' is British English. Americans say 'on the weekend'.",
      tip: "For plans you have made, use 'I'm' and the -ing form: 'I'm meeting Jo on Friday.'",
    },
  'You are walking down the street. A woman calls after you. | "Excuse me. You\'ve dropped your glove."':
    {
      why: 'The woman has helped you by telling you about your glove. You thank her warmly, then go back and pick it up.',
      not: {
        "Oh, you're very welcome.":
          'This answers thanks. The woman helped you, so you are the one who should say thank you.',
        'Oh, same to you.':
          "'Same to you' returns a wish. She did not wish you anything; she told you about your glove.",
        "Oh, I'm sorry to hear that.":
          'This is for sad news. A dropped glove is a small thing, and she is helping you.',
      },
      more: "'You've dropped your...' is a common way to tell someone about something they lost.",
      tip: 'When a stranger helps you, thank them with a smile, even for something small.',
    },
  'Your friend is nervous. She has an interview for a Saturday job tomorrow. | "I\'ve got my interview tomorrow."':
    {
      why: "The interview has not happened yet, so you wish your friend luck. 'You'll be great' helps her feel less nervous.",
      not: {
        'Congratulations. Well done.':
          'These are for after a success, such as getting the job. The interview has not happened yet.',
        'Never mind. Next time.':
          'This is for after a failure. Your friend has not had the interview yet.',
        'Bless you. Get well soon.':
          'These are for a sneeze and an illness. Your friend is nervous, not ill.',
      },
      more: "After the interview, ask 'How did it go?'",
      tip: 'Wish people luck for things in the future. Praise them for success that has already happened.',
    },
  'You have been ill at home for a week. A classmate brings you a card. | "Here. Get well soon."': {
    why: "Your classmate brings a card and a kind wish while you are ill. You thank them: 'Aw, thank you. That's kind.' 'Aw' shows you are touched.",
    not: {
      'Thanks. I hope you get well too.':
        'Your classmate is not ill, so you cannot wish them the same.',
      'Thanks. Same to you.':
        "'Same to you' sends a wish back, but this wish is for someone who is ill. Your classmate is well.",
      'Thanks. Well done.':
        "'Well done' praises someone for doing something well. Bringing a card is kind, so you thank them.",
    },
    more: 'Some wishes can go back to the other person, such as a wish for a good weekend. A wish for someone who is ill cannot.',
    tip: "When you are back at school, thank people again: 'Thanks for the card. It really helped.'",
  },
  'It is a cold day on the train. You are already cold. The man next to you speaks. | "Do you mind if I open the window?"':
    {
      why: "You are already cold, so you do mind, but you say it gently. 'Sorry, I'm a bit cold, actually' explains the problem without a hard 'yes'.",
      not: {
        'No, not at all. Please go ahead.':
          'This says you are happy for him to open it. You are already cold, so it is not true.',
        'Yes, please open it.':
          "'Yes' to 'Do you mind' means you do mind, but 'please open it' asks him to do it. The answer contradicts itself.",
        "Oh, I'm sorry to hear that.":
          "This is for someone's bad news. The man is asking your permission to open the window.",
      },
      more: "British people often refuse politely with 'Sorry' and a reason, instead of a plain yes. 'Actually' makes it softer.",
      tip: "To say no politely, start with 'Sorry', give a small reason, and speak in a friendly voice.",
    },
  'You arrive at a friend\'s birthday dinner. Her dad opens the door and holds out his hand. | "Come in. Can I take your coat?"':
    {
      why: "Her dad offers to hang up your coat for you, which is polite. You accept, give him the coat and say 'Here you are'.",
      not: {
        "Sorry, it's my coat.":
          "He is not trying to keep your coat. 'Take your coat' means take it from you to hang it up.",
        'Yes, you can have it.':
          'This gives him the coat to keep. He only wants to hang it up while you visit.',
        'No problem. Any time.': 'This answers thanks. He made an offer, so you accept it.',
      },
      more: "Hosts often say 'Come in', 'Can I take your coat?' and 'Can I get you a drink?'. They are all kind offers.",
      tip: "Remember to ask for your coat when you leave: 'Could I have my coat, please?'",
    },
  'You stayed after the lesson to help your teacher tidy the classroom. | "Thank you for helping me tidy up."':
    {
      why: "Your teacher thanks you for your help, so you answer her thanks. 'No problem, Miss' is friendly and polite enough for a teacher.",
      not: {
        'Thank you too, Miss.':
          'This thanks her back, but you were the helper. She thanked you, so you answer it.',
        'Never mind, Miss.':
          "'Never mind' is for a problem that does not matter. Your teacher has not had a problem.",
        'Same to you, Miss.':
          "'Same to you' returns a wish. Your teacher thanked you; she did not make a wish.",
      },
      more: "With teachers, 'That's OK' and 'You're welcome' work too. Adding 'Miss' or 'Sir' is extra polite.",
      tip: 'Helping a teacher is a good way to practise English outside the lesson.',
    },
  'You have an interview for a Saturday job at a café. You arrive and go to the counter. | Assistant: "Hi there. What can I get you?"':
    {
      why: "The assistant thinks you are a customer, so you explain why you have come: 'I'm here for an interview at ten.' It is clear and polite, and it gives the time.",
      not: {
        'Hiya. Just a large hot chocolate, please.':
          'This orders a drink, so the assistant will think you are a customer. You came for an interview.',
        "Hi. I'm here. Where's the boss, then?":
          "This is far too casual for an interview, and 'the boss' sounds rude. Say clearly why you have come.",
        'Hello. What can I get for you today?':
          "This is the assistant's line. You do not work there yet.",
      },
      more: 'Arrive five or ten minutes early for an interview. Tell the first person you meet why you are there and who you are seeing.',
      tip: 'In an interview, first impressions matter: a polite greeting, a clear reason and a smile.',
    },
  'You are at an interview for a Saturday job. The manager comes over to meet you. | Manager: "Hello. You must be Ana. I\'m Ruth Clarke."':
    {
      why: "The manager guesses your name, so you say yes, and you greet her politely. 'Nice to meet you' suits a first meeting at an interview.",
      not: {
        "Yeah, that's me. Alright, Ruth?":
          "'Yeah' and 'Alright?' are what friends say. At an interview they sound too casual, and you have only just met.",
        'Yes, I must be. Who are you?':
          "'You must be Ana' means 'I think you are Ana'. And she has just told you who she is, so 'Who are you?' sounds rude.",
        'Hello. Nice to see you again.':
          'This is for someone you have met before. It is your first meeting.',
      },
      more: 'If she offers her hand, shake it. Wait to see if she wants you to use her first name.',
      tip: "Copy the interviewer's tone: polite and friendly, never casual.",
    },
  'You are at an interview for a job at a sports shop. | Manager: "Come in and take a seat." | You: "Thank you." | Manager: "Did you find us all right?"':
    {
      why: "'Did you find us all right?' asks if the journey to the shop was easy. It is small talk, so a short, friendly answer is best: 'Yes, thanks. It was easy.'",
      not: {
        "Yes, I'm all right, thank you.":
          "This answers 'Are you all right?'. The manager asked about finding the shop.",
        'Yeah, no worries, mate.':
          "'Mate' and 'no worries' are too casual for an interview. Keep it polite.",
        "No, I didn't look for you.":
          "'Find us' means find the shop. The manager is asking about your journey, not about looking for people.",
      },
      more: 'Interviewers often start with small talk about the journey or the weather. It helps you relax before the real questions.',
      tip: 'Small talk at an interview stays short and positive. Save the details for the real questions.',
    },
  'You are waiting for an interview at an office. | Receptionist: "Mrs Hill will be with you in a few minutes." | Receptionist: "Can I get you a drink while you wait?"':
    {
      why: "The receptionist offers you a drink. You accept politely and say what you would like: 'Water would be lovely, thanks.' 'Lovely' sounds warm and British.",
      not: {
        'Yeah, get me a cola.':
          "This is an order, not a polite answer. 'Get me' sounds rude, especially before an interview.",
        'Yes, you can get me one.':
          "This answers the words 'Can I...?', not the offer. Say what you would like and thank her.",
        "No. I don't want anything from you.":
          "This is very cold. To say no politely, say 'No, thank you, I'm fine'.",
      },
      more: 'Water is a good choice before an interview: it is easy to drink while you talk.',
      tip: 'Be polite to everyone at an interview, including the receptionist. Managers often ask them what they thought.',
    },
  'You are at an interview for a weekend job at a garden centre. | Interviewer: "Thanks for coming in today." | Interviewer: "So, tell me a bit about yourself."':
    {
      why: "'Tell me about yourself' asks for a short picture of who you are. Give one or two facts and something that fits the job: a love of being outdoors suits a garden centre.",
      not: {
        "I'm fine, thanks. And how are you today?":
          "This answers 'How are you?'. The interviewer wants to hear about you and your life.",
        'What do you want to know about me, mate?':
          "'Mate' is too casual for an interview, and this sounds as if you do not want to answer.",
        "Nothing much, really. I'm just me.":
          'This gives the interviewer nothing. It is your chance to say good things about yourself.',
      },
      more: 'Prepare this answer before an interview: who you are, what you enjoy, and why you suit the job.',
      tip: 'Keep it to three or four sentences. Then stop and let the interviewer ask more.',
    },
  'Your interview for a job at a bookshop is nearly over. | Manager: "I think that\'s everything from me." | Manager: "Do you have any questions for us?"':
    {
      why: 'At the end, a good question shows you are interested in the job. Asking about the hours is useful and polite.',
      not: {
        'No, not really. Can I go home now?':
          'This sounds as if you do not care about the job and want to leave. It is a poor way to end an interview.',
        'Yes. How old are you?':
          "Questions about the interviewer's age are personal and rude. Ask about the job.",
        'Yes. How much money do you earn here?':
          "This asks about the manager's own pay, which is private. You can ask politely about the pay for your job.",
      },
      more: 'Good questions are about the work: hours, training, and what a normal day is like.',
      tip: 'Prepare two questions before an interview, in case the interviewer answers one while you talk.',
    },
  'Your interview for a job at a cinema has finished. The manager stands up. | Manager: "Well, thank you for coming." | Manager: "We\'ll be in touch next week."':
    {
      why: "The manager is ending the interview. You thank her for her time: 'Thank you for seeing me today.' It is polite and leaves a good last impression.",
      not: {
        'Cheers, mate. See you around, then.':
          "'Cheers, mate' and 'See you around' are what friends say. They sound too casual at the end of an interview.",
        "You're welcome. Come again any time.":
          'This is what a host says to a guest. The manager is the host here, not you.',
        'Thank you. Same to you, then.':
          "'Same to you' returns a wish. 'We'll be in touch' is a promise to contact you, not a wish.",
      },
      more: "'We'll be in touch' means 'We will contact you'. A formal answer is 'I look forward to hearing from you'.",
      tip: 'Shake hands if she offers, smile, and say goodbye to the receptionist on the way out.',
    },
  'You have an interview to join a sixth-form college. | Teacher: "So, you want to study here next year." | Teacher: "Which subjects are you interested in?"':
    {
      why: "'Which subjects...?' asks you to name subjects, so you name them: 'biology and chemistry'. 'I'd like to study' is clear and polite.",
      not: {
        "I'm a very interesting person, I think.":
          "'Interesting' describes something that makes people want to know more. The question is about what interests you.",
        "Yes, I'm very interested, thank you.":
          "A 'Which...?' question needs a name, not 'yes'. Say which subjects.",
        "Science, I suppose. Whatever's easiest.":
          'This sounds as if you do not care. At an interview, show that you want to learn.',
      },
      more: "'Interested' is how you feel: 'I'm interested in art.' 'Interesting' is what something is: 'Art is interesting.'",
      tip: "Give a reason for your choice: 'because I want to be a vet'.",
    },
  'You have waited ten minutes for an interview. The manager comes to meet you. | Manager: "I\'m so sorry to keep you waiting."':
    {
      why: "The manager apologises for the wait. 'That's quite all right' accepts the apology politely. 'Quite' makes it a little more formal, which suits an interview.",
      not: {
        "Yes, you're very late.":
          'This is true, but rude. At an interview, accept an apology kindly.',
        'No worries, mate. Happens.':
          'This is far too casual for a manager you are meeting for an interview.',
        "You're welcome. Thank you.":
          "'You're welcome' answers thanks. The manager apologised; she did not thank you.",
      },
      more: "Formal ways to accept an apology: 'That's quite all right', 'Not at all', 'Please don't worry'.",
      tip: 'Never complain about a wait at an interview. Use the time to read your notes.',
    },
  'It is your first day of work experience at a newspaper office. You go to reception. | Receptionist: "Good morning. Can I help you?"':
    {
      why: "The receptionist does not know you yet, so you say who you are there to see: 'I'm here to see Mr Hall.' It is polite and clear.",
      not: {
        "Morning. Where's Mr Hall, then?":
          'This demands an answer without explaining who you are. It sounds rude to a receptionist.',
        'Yes, please. How can I help you?':
          "'How can I help you?' is the receptionist's line. You are the visitor.",
        "Hi. I'm the new boy. I work here now.":
          'This is too casual, and the receptionist still does not know who you are seeing.',
      },
      more: "Give your name too: 'My name's Ali Khan. I'm here to see Mr Hall for my work experience.'",
      tip: 'At any reception, say your name, who you are seeing, and the time if you have one.',
    },
  'You are at an interview for a Saturday job at a bakery. | Owner: "I think you\'d be great here." | Owner: "When could you start?"':
    {
      why: "'When could you start?' asks for a day. 'Next Saturday, if that's OK' gives one, and 'if that's OK' is polite: the owner decides.",
      not: {
        "Whenever. I'm not bothered, to be honest.":
          "'I'm not bothered' sounds as if you do not care about the job. Give a clear day.",
        'I started there last year, I think.':
          'This talks about the past. The owner wants to know when you can begin this job.',
        'Yes, I could start it.': "A 'When...?' question needs a time or a day, not 'yes'.",
      },
      more: "'If that suits you' and 'if that's OK' make an answer polite, because they let the other person decide.",
      tip: 'Before an interview, check your diary so you can answer questions about dates at once.',
    },
  'You have an interview to help at a children\'s reading club at the library. | Librarian: "Why would you like to help at the club?"':
    {
      why: "'Why...?' asks for a reason, so you give one that fits the club: you love reading and you like helping children. It shows you will do the job well.",
      not: {
        'Because my mum told me I had to, really.':
          'This may be true, but it says you do not want to be there. Give a reason that shows you care.',
        'Yes, I would like to help very much, thank you.':
          "A 'Why...?' question needs a reason, not 'yes'.",
        "I wouldn't, really. It's only for my CV.":
          'This tells the librarian you do not want to help. It is honest, but unwise in an interview.',
      },
      more: 'A CV lists your education and experience. Helping at a club is good to put on it.',
      tip: "A good answer to 'why' has two parts: what you enjoy, and how it helps the job.",
    },
  'You need to see a doctor. You phone your local surgery. | Receptionist: "Good morning, Park Road Surgery. How can I help?"':
    {
      why: "You are phoning to book a visit, so you say so clearly and politely: 'Could I make an appointment?' It is the usual phrase in a British surgery.",
      not: {
        'Hiya. I want to see a doctor, yeah?':
          "'Hiya' and 'yeah?' are too casual for a surgery, and 'I want' sounds demanding.",
        'Good morning. How can I help you?':
          "This is the receptionist's line. You are the caller who needs help.",
        'Hello. Is that you, Doctor?':
          'The receptionist answers the phone, not the doctor. She has just said where you are calling.',
      },
      more: "In Britain, a 'surgery' is where you see your local doctor, called a GP. An 'appointment' is a fixed time to see them.",
      tip: 'Before you call, have your name, date of birth and the problem ready. Receptionists ask for them.',
    },
  'You are phoning your local surgery. | Receptionist: "Good morning, Park Road Surgery." | You: "Hello. Could I make an appointment, please?" | Receptionist: "Of course. Can I take your name?"':
    {
      why: "'Can I take your name?' is a polite way to ask 'What is your name?'. So you give it: 'Yes, it's Daniel Kowalski.' Use your full name on official calls.",
      not: {
        'Yes, of course you can take it.':
          "This answers the words, not the meaning. 'Take your name' means write it down, so she needs to hear it.",
        'Why do you need my name?':
          'The surgery needs your name to book the appointment. This sounds suspicious and rude.',
        "Daniel. What's yours, mate?":
          "This is too casual for a surgery, and the receptionist's name is not important here.",
      },
      more: "'Can I take...?' also appears in 'Can I take a message?' and 'Can I take your coat?'. Each means something different.",
      tip: 'On official calls, give your first name and your family name, and spell the family name if it is unusual.',
    },
  'You are booking an appointment on the phone. | Receptionist: "Can I take your name?" | You: "Yes, it\'s Daniel Kowalski." | Receptionist: "Could you spell your surname for me?"':
    {
      why: 'Your surname is your family name, Kowalski, so you say its letters one by one: K-O-W-A-L-S-K-I. This helps the receptionist write it correctly.',
      not: {
        'Yes, I could.':
          "'Could you spell...?' is a polite request. She wants to hear the letters, not whether you are able to spell them.",
        "Kowalski. It's a Polish name.":
          'This says the name again but not its letters. She asked you to spell it.',
        "Sure. It's Daniel, D-A-N-I-E-L.":
          'Daniel is your first name. Your surname is your family name, Kowalski.',
      },
      more: "'Surname' and 'family name' mean the same. In Britain it usually comes last.",
      tip: 'Practise the English names of the letters of your own name. You will spell it often in Britain.',
    },
  'You answer the phone at home. Your mum is at the shops. The caller is her friend, Mrs Evans. | Mrs Evans: "Hello, love. Is your mum there, please?" | You: "Sorry, she\'s out at the moment." | Mrs Evans: "Oh, I see. When will she be back?"':
    {
      why: 'Mrs Evans asks when your mum will return, so you give a time. Offering to take a message is polite and helps her reach your mum.',
      not: {
        "She came back at six o'clock.":
          'This is in the past, as if she is already home. She is out, so the answer needs a time later today.',
        'She is very well, thank you for asking.':
          "This answers 'How is she?'. Mrs Evans asked when she will be back.",
        'Yesterday, I think. Can I help?':
          "'Yesterday' is in the past. Mrs Evans asked when she will return.",
      },
      more: "Write down the caller's name, number and message, and give it to your mum.",
      tip: 'If a caller you do not know asks for your mum, never say you are home alone. Say she cannot come to the phone, and take a message.',
    },
  'You answer the phone at home. Your brother Leo is upstairs. | Caller: "Hi. Can I speak to Leo, please?"':
    {
      why: "The caller wants Leo, who is upstairs, so you ask them to wait and you fetch him: 'Hold on. I'll get him.' 'Hold on' means 'wait a moment'.",
      not: {
        'Speaking. How can I help?':
          "'Speaking' means 'This is the person you want'. You are not Leo, so it is not true.",
        'Yes, you can speak now.':
          'This answers the words, not the meaning. The caller wants you to fetch Leo.',
        "No. He's busy. Bye.":
          'Leo is only upstairs, and this ends the call rudely without asking him.',
      },
      more: "You can also say 'Just a minute' or 'One moment, please'.",
      tip: 'Put the phone down gently, or press mute, while you fetch someone. Do not shout across the phone.',
    },
  'You are on the phone to a friend. She is on a train, and you can hear only some of her words. | Friend: "So shall we meet at... the... at six?" | Friend: "Hello? Are you still there?"':
    {
      why: "You heard only part of the plan, so you tell your friend the line is bad. 'You're breaking up' means her voice keeps cutting out, so she will repeat it.",
      not: {
        'Yes, great. See you there, then.':
          'This agrees to a plan you did not hear. You do not know where to meet.',
        "No, I'm not there yet.":
          "'Are you still there?' asks if you are still on the call. It is not about a place.",
        'Yes. Where are you going?':
          'This changes the subject. You need her to repeat where to meet first.',
      },
      more: "On the phone, 'Are you still there?' means 'Can you still hear me?'. People ask it when a call goes quiet.",
      tip: "If a call keeps breaking up, offer to text: 'Sorry, the line's bad. Can you text me?'",
    },
  'You phone a local college to ask about English courses. | Receptionist: "Riverside College, good afternoon."':
    {
      why: "The receptionist has said where you are calling, so you say why: 'I'm calling about English courses.' It is clear and polite.",
      not: {
        'Hiya. Tell me about your English courses.':
          "'Hiya' is casual, and 'Tell me' is an order. It sounds rude to a college receptionist.",
        'Good afternoon. Is that Riverside College?':
          'She has just told you it is. Asking again shows you were not listening.',
        "Hello. Who's speaking, please?":
          "This is not needed: she answered with the college's name. Say why you are calling instead.",
      },
      more: "'I'm calling about...' and 'I'm ringing about...' both give the reason for a call. 'Ringing' is very British.",
      tip: 'Write two or three questions down before an official call. It helps you stay calm.',
    },
  'You have phoned the cinema to ask about tickets. | Assistant: "Let me check that for you." | Assistant: "Can you hold for a moment, please?"':
    {
      why: "'Can you hold?' means 'Can you wait on the line?' while she checks. You agree: 'Sure, no problem.' Then you wait without hanging up.",
      not: {
        'Hold what, sorry?':
          "On the phone, 'hold' means wait on the line. She is not asking you to hold anything.",
        "No, I'm fine, thanks.":
          'This refuses an offer. She asked you to wait; if you refuse, she cannot check for you.',
        "You're welcome. Bye.":
          'This answers thanks and ends the call. She has not finished helping you.',
      },
      more: "You may hear music while you hold. When she comes back, she may say 'Thanks for holding'.",
      tip: "If you have to go, say so politely: 'Sorry, could you call me back instead?'",
    },
  'You have booked a dentist appointment on the phone. | Receptionist: "So that\'s Tuesday at ten." | Receptionist: "Is there anything else I can help you with?"':
    {
      why: "You have what you need, so you say no and thank the receptionist: 'No, that's all. Thanks for your help.' It ends the call politely.",
      not: {
        "Yes, please. You're welcome, any time.":
          "'Yes, please' asks for more help, and 'You're welcome' answers thanks. Neither fits here.",
        "No, I'm fine. It was nice to meet you.":
          "You have not met; you are on the phone. 'Nice to meet you' is for a first meeting in person.",
        'Yes. Can I take a message for you?':
          'We say this when the person a caller wants is out. You are the caller.',
      },
      more: "Formal calls often end like this: 'Anything else?' 'No, that's everything, thank you.' 'Goodbye.'",
      tip: "Repeat the important detail before you hang up: 'Tuesday at ten. Thank you.'",
    },
  'You phone your friend Ella\'s mum to say Ella left her coat at your house. Nobody answers. | Recorded voice: "Please leave a message after the tone." | (Beep.)':
    {
      why: "A recorded voice asks you to leave a message, so you speak after the beep. Say who you are and why you called: 'Hi, it's Maya. Ella left her coat here.'",
      not: {
        "Hi. Who's this, please? Hello? Hello?":
          'Nobody is listening now; it is a recording. Asking who it is will get no answer.',
        'Hello? Can you hear me? Are you there?':
          'This is a machine, so nobody can answer. Leave your message instead.',
        'Hi. Please leave a message after the tone.':
          "This repeats the recording's own words. You are the one leaving a message.",
      },
      more: 'A good message has your name, the reason for your call, and how to call you back.',
      tip: 'Speak slowly and clearly on a voicemail, and say your number twice.',
    },
  'You phone your friend Jo. Her sister answers. Jo is in the shower. | Sister: "Hello?" | You: "Hi. Is Jo there, please?" | Sister: "She\'s in the shower. Can I take a message?"':
    {
      why: 'Jo cannot come to the phone, and her sister offers to pass on a message. The simplest message is to ask Jo to call you back.',
      not: {
        'Yes, you can take it. Thanks.':
          'This answers the words, but it gives her no message to take. Say what the message is.',
        "Oh, I'm sorry to hear that.": 'This is for bad news. Being in the shower is not bad news.',
        "Yes, please. Hold on, I'll get her.":
          "'Hold on, I'll get her' is what the person who answers says. You are the caller.",
      },
      more: "You can add your name: 'It's Maya. She's got my number.'",
      tip: 'When someone takes a message for you, thank them before you say goodbye.',
    },
  'You phone a bike shop to ask when it opens on Sunday. | Assistant: "Hello, Wheels Bike Shop. Sam speaking." | Assistant: "How can I help?"':
    {
      why: "The assistant asks how he can help, so you ask your question at once: 'When do you open on Sunday?' The present tense fits, because it is about the shop's usual times.",
      not: {
        'Hi, Sam. Is that you speaking?':
          "He has just told you his name. 'Sam speaking' means 'This is Sam'.",
        'Hi. Speaking. How can I help you?':
          "These are the shop's lines. You are the customer who called.",
        'Hi. When did you open on Sunday?':
          "'Did' is the past, about one Sunday that has gone. You want to know the usual time.",
      },
      more: "'Sam speaking' is a polite way to answer a work phone: it gives the shop and the person.",
      tip: 'Ask one clear question, listen, then say thank you. Short calls are fine.',
    },
  'You are in a restaurant with your sister. You have not chosen your food yet. | Waiter: "Are you ready to order?" | You: "Not quite. Could we have a few more minutes?" | Waiter: "Of course. Can I get you any drinks while you wait?"':
    {
      why: "The waiter offers drinks while you choose your food, so you order them: 'Two orange juices, please.' It answers his question and keeps things moving.",
      not: {
        "No, we're ready to order now.":
          'You have just asked for more time, so you are not ready yet. This contradicts what you said.',
        'Yes, you can get some.':
          "This answers the words 'Can I get...?', but not the question. Say which drinks.",
        'A few more minutes, please.':
          'You have already asked for more time, and he agreed. Now he is asking about drinks.',
      },
      more: "Waiters often take the drinks order first. 'Could we have...?' and '..., please' are both polite ways to order.",
      tip: 'When you order for two people, give the number of drinks.',
    },
  'You are buying a hot chocolate in a café. | Assistant: "What can I get you?" | You: "A hot chocolate, please." | Assistant: "Regular or large?"':
    {
      why: "The assistant gives you two sizes to choose from, so you pick one: 'Regular, please.' A 'regular' is the normal size.",
      not: {
        'Yes, please.':
          "This is an either-or question, so 'yes' does not answer it. Choose one size.",
        'A hot chocolate, please.': 'You have already ordered the drink. Now she needs the size.',
        'Thank you very much.':
          'This thanks her, but it does not answer the question. She still needs to know the size.',
      },
      more: "Cafés use different words for sizes: small, regular, medium, large. 'Regular' usually means the normal size.",
      tip: "If you do not know the sizes, ask: 'How big is the regular?'",
    },
  'You have finished a meal in a restaurant with your family. | Waiter: "Was everything all right with your meal?" | You: "Yes, it was lovely, thank you." | Waiter: "Can I get you anything else?"':
    {
      why: "You have finished and want to pay, so you ask for the bill: 'Just the bill, please.' 'Just' means you want nothing else.",
      not: {
        "Yes, please. That's all, thanks.":
          "'Yes, please' asks for more, but 'That's all' says you want nothing. The two halves disagree.",
        "No, thanks. I'm just looking.":
          'This is for a shop, when you do not need help. You have just eaten a meal.',
        'Yes. Bring the bill now.':
          "This is an order. In a restaurant, ask with 'please' or 'Could we...?'.",
      },
      more: "In Britain the 'bill' is what you pay in a restaurant. Americans call it the 'check'.",
      tip: 'In many British restaurants, people leave a tip of about ten per cent if the service was good.',
    },
  'You are eating in a café. Your soup is cold. | Waitress: "Is everything all right with your food?"':
    {
      why: "There is a problem, so you mention it, but politely. 'Sorry, but...' and 'a bit' make the complaint soft. The waitress will usually warm it up or bring a new one.",
      not: {
        'This soup is disgusting. Take it away.':
          "This is rude, and 'disgusting' is far too strong for soup that is only cold.",
        'Yes, everything is lovely, thanks.':
          'This is not true, and you will have to eat cold soup. Now is the time to say there is a problem.',
        "Excuse me. I'm sorry about the soup.":
          'This apologises as if you made the mistake. The kitchen did.',
      },
      more: "British people often soften complaints with 'Sorry, but...', 'I'm afraid...' or 'a bit'. It sounds polite, not weak.",
      tip: "Say what is wrong and what you would like: 'Could you warm it up, please?'",
    },
  'You paid for a £3.50 sandwich with a £10 note. The assistant gives you £1.50 change. | Assistant: "There you go. Here\'s your change."':
    {
      why: "You should get £6.50 back, but you got £1.50, as if you had paid with £5. So you point out the mistake politely: 'Sorry, I gave you a ten, not a five.'",
      not: {
        "You've stolen my money. Give it back.":
          'It is probably an honest mistake. Accusing someone of stealing is rude and unfair.',
        'Thanks. Keep the change, then.':
          "'Keep the change' gives the extra money away. You were given too little, so you need more back.",
        'Thanks. Have a nice day.':
          'This leaves without the money you are owed. Say there is a mistake first.',
      },
      more: "'A ten' and 'a five' are short for a ten-pound note and a five-pound note.",
      tip: 'Check your change before you leave the counter. A mistake is much easier to fix at once.',
    },
  'You bought a jumper yesterday, but it is too small. You go back to the shop with the receipt. | Assistant: "Hello. How can I help?"':
    {
      why: "You want to give the jumper back, so you say so and give the reason: 'Could I return this? It's too small.' The receipt shows you bought it there.",
      not: {
        'I want my money back. Now.':
          'This sounds angry and demanding. Ask politely; the assistant will help you.',
        "Hi. I'd like to buy this jumper, please.":
          'You have already bought it. You want to return it.',
        'Hello. How can I help you today?': "This is the assistant's line. You are the customer.",
      },
      more: "In a shop you can ask for a 'refund' (your money back) or an 'exchange' (the same thing in another size).",
      tip: 'Keep your receipt. Most British shops need it to give you a refund.',
    },
  'You are in a clothes shop. You want a hoodie in a medium. | You: "Excuse me, have you got this in a medium?" | Assistant: "I\'m afraid we\'ve only got large left." | Assistant: "Would you like to try the large?"':
    {
      why: "The shop has no medium, and a large will be too big. So you refuse the offer politely: 'No, thanks. It'll be too big.'",
      not: {
        "No, I'm not afraid, thanks.":
          "'I'm afraid' in her sentence did not mean fear. It only made the bad news, no medium, sound softer.",
        'Yes, please. A medium would be great.': 'She has just told you there is no medium left.',
        "Yes, please. I'm afraid so.":
          "'I'm afraid so' means 'Sadly, yes'. It answers a question about bad news, and it makes no sense here.",
      },
      more: "You could ask if another shop has one: 'Do you know if your other shop has a medium?'",
      tip: "Refusing an offer in a shop is fine. Just add 'thanks'.",
    },
  'You are in a queue at a busy bakery. The person in front of you has just been served. | Assistant: "Who\'s next, please?"':
    {
      why: "'Who's next?' asks whose turn it is. You are at the front of the queue, so you say it is you: 'I think it's me.' Then you order.",
      not: {
        "I'm next to you.":
          "'Next' here means the next person in the queue, not 'beside'. She wants to know whose turn it is.",
        'Next week, I think.':
          "'Next' here is about the queue, not about time. It is your turn now.",
        "Yes, please. Who's next?":
          'This repeats her question back to her. Answer it: it is your turn.',
      },
      more: 'Queuing matters a lot in Britain. Wait your turn, and never push in front of others.',
      tip: "If someone was there before you, let them go first: 'I think she was before me.'",
    },
  'You get on a bus and want a ticket to the town centre. | Driver: "Where to?"': {
    why: "'Where to?' is short for 'Where are you going?'. The driver needs your stop to sell you a ticket, so you name it: 'Town centre, please.'",
    not: {
      'Town centre, mate. Quick.':
        "'Quick' is an order and sounds rude. The driver is serving you, so say 'please'.",
      "At ten o'clock, please.": 'This gives a time. The driver asked where you are going.',
      'Yes, please. Where to?':
        'This repeats his question. He needs your answer: the place you are going to.',
    },
    more: "On many British buses you can also tap a bank card to pay. A 'single' is one way and a 'return' is there and back.",
    tip: "Short answers are fine with a busy driver. Just add 'please' and 'thanks'.",
  },
  'You are buying a train ticket to York. You will come home in the evening. | Clerk: "Next, please." | You: "A return to York, please." | Clerk: "Coming back today?"':
    {
      why: "The clerk asks if you will come back on the same day, which can change the price. You will, so you say yes and when: 'Yes, this evening.'",
      not: {
        'Yes, a return, please.':
          'You have already said you want a return. Now the clerk asks when you will come back.',
        'No, I came yesterday.':
          'This is about the past. The clerk is asking about your journey home later.',
        "Yes, I'm coming now.": 'This is about now. The question is about coming back later today.',
      },
      more: "A 'day return' is a cheaper ticket for coming back on the same day.",
      tip: 'At a ticket office, say where you are going, when you are coming back, and whether you have a railcard.',
    },
  'You are at the hairdresser. You only want a little cut off the ends. | Hairdresser: "Hi. Take a seat." | Hairdresser: "So, how would you like it?"':
    {
      why: "'How would you like it?' asks what kind of haircut you want. You want only a little cut off, so you say 'Just a trim, please.'",
      not: {
        "I'd like it very much.":
          "This answers 'Would you like it?'. She asked 'how', so describe the cut you want.",
        "Yes, please. I'd love it.":
          "A 'How...?' question cannot be answered with 'yes'. Say what you want.",
        'Very short, please. All off.':
          'This asks for a lot of hair to be cut. You only want a little off the ends.',
      },
      more: "A 'trim' is a small cut to tidy your hair. Other useful words: 'a bit shorter', 'the same style'.",
      tip: 'Show a photo if you are not sure of the words. Hairdressers find it helpful.',
    },
  'You are paying at a coffee shop. You do not have their card. | Assistant: "Have you got a loyalty card?"':
    {
      why: "A loyalty card is a shop's card that collects points when you buy things. You do not have one, so you say 'No, I haven't, thanks.'",
      not: {
        "Yes, I'm very loyal.":
          "She is asking about a card, not about you. 'Loyalty card' is the name of a points card.",
        "No, I'm just looking.":
          'You say this when you do not need help in a shop. You are paying for a coffee.',
        "Yes, I've got a bank card.":
          'A bank card pays for things. A loyalty card collects points, so this does not answer the question.',
      },
      more: "'Have you got...?' gets a short answer with 'have': 'Yes, I have' or 'No, I haven't'.",
      tip: "If you want one, ask: 'No, but can I get one?'",
    },
  'You are buying cough medicine at a chemist. You have never taken it before. | Pharmacist: "Have you taken this medicine before?"':
    {
      why: "'Have you taken this before?' asks about your experience up to now. You never have, so you say 'No, it's the first time.' The pharmacist will then explain how to take it.",
      not: {
        'Yes, I take it now.':
          'This says you take it, but you have never had it. The question is about the past up to now.',
        'No, I take it tomorrow.':
          "A plan needs 'I'll' or 'I'm going to', and the question was about the past.",
        "Yes, I'll take it, thanks.":
          'This says you will buy it. She asked if you have taken it before.',
      },
      more: 'Pharmacists ask this to keep you safe. Tell them about any other medicines you take too.',
      tip: 'Always read the label, and ask if you are not sure how much to take.',
    },
  'You want to keep your library book for two more weeks. | Librarian: "Hello. Can I help?"': {
    why: "To 'renew' a library book is to keep it for longer. You want two more weeks, so you ask politely: 'Can I renew this book, please?'",
    not: {
      'Yes. Could I buy this book, please?':
        'Libraries lend books; they do not sell them. You want to keep it longer, not buy it.',
      'Yes. Could I lend this book, please?':
        'You borrow from a library; the library lends to you. And you already have the book.',
      'Yes. Give me two more weeks with it.':
        "This is an order. Ask with 'Can I...?' or 'Could I...?' and 'please'.",
    },
    more: 'Library words: borrow, return, renew, overdue (late), and a fine (money you may pay if a book is late).',
    tip: 'You can often renew books online too, before the date they are due.',
  },
  'You did not finish your essay. Your teacher, Mr Ellis, is collecting the essays. | Mr Ellis: "Right, essays on my desk, please." | Mr Ellis: "Where\'s yours? It was due today."':
    {
      why: "You have not finished the essay, so you apologise and offer a solution: 'Sorry, Sir. Can I bring it tomorrow?' It is honest and polite.",
      not: {
        "Chill out, Sir. I'll do it later, OK?":
          "'Chill out' tells the teacher to relax, which is rude, and 'later' is not a real plan.",
        "Sorry, mate. It's at home somewhere.":
          "'Mate' is far too casual for a teacher, and 'somewhere' sounds as if you do not care.",
        "No problem, Sir. It doesn't matter.":
          'This tells the teacher his deadline does not matter. It does matter to him.',
      },
      more: "'Due' means 'expected on that day': 'The essay is due on Friday.' A 'deadline' is the last day you can hand work in.",
      tip: 'If you know your work will be late, tell the teacher before the deadline, not after.',
    },
  'You were ill on Monday. Your teacher speaks to you on Tuesday. | Teacher: "You weren\'t here on Monday."':
    {
      why: "The teacher says you weren't there, and that is true. In English, you agree with a negative sentence by saying 'No': 'No, I wasn't.' Then you give the reason.",
      not: {
        'Yes, I was, Miss. I was ill.':
          "'Yes, I was' means you were at school on Monday. You were at home, ill.",
        "Yes, I wasn't, Miss. I was ill.":
          "In English, 'yes' goes with a positive verb and 'no' with a negative one. 'Yes, I wasn't' mixes them, as some languages do.",
        'No, I was here, Miss. I was ill.':
          'This says you were at school, which is not true. You were ill at home.',
      },
      more: "Answer the facts, not the sentence: if you were not there, it is always 'No, I wasn't'. If you were there, it is 'Yes, I was'.",
      tip: "Then ask what you missed: 'Could you tell me what we did on Monday?'",
    },
  'You won a writing competition. The head teacher, Mrs Hughes, stops you in the corridor. | Mrs Hughes: "Congratulations on winning the competition."':
    {
      why: "The head teacher congratulates you, so you thank her politely and use her name: 'Thank you, Mrs Hughes.' A title and name suit a head teacher.",
      not: {
        'Cheers, Mrs Hughes. Nice one.':
          "'Cheers' and 'Nice one' are what friends say. They are too casual for a head teacher.",
        "Yes, I know. I'm the best.":
          'This sounds very proud. In Britain, people accept praise modestly.',
        'Same to you, Mrs Hughes.':
          "'Same to you' returns a wish. She did not win the competition; you did.",
      },
      more: "You can add something modest: 'I really enjoyed writing it.'",
      tip: 'With a head teacher, stand still, look at her and answer in a full sentence.',
    },
  'You have lost your bus pass. You go to the school office at break. | Receptionist: "Hello. What can I do for you?"':
    {
      why: "You lost your pass, so you ask if someone has found it and given it to the office: 'Has anyone handed in a bus pass?' To 'hand in' is to give something to the person in charge.",
      not: {
        'Give me a new bus pass.':
          'This is an order, and the office may not make new passes. Ask a polite question.',
        'Hi. What can I do for you?':
          "This is the receptionist's line. You are the one who needs help.",
        'Hi. Can I lend your bus pass?':
          "To lend is to give; you mean borrow. And you cannot use another person's bus pass.",
      },
      more: "'Lost property' is the place where found things are kept until the owner comes.",
      tip: "Describe what you lost: 'It's blue, with my name on it.'",
    },
  'Your teacher is setting homework at the end of the lesson. | Teacher: "For homework, write 200 words about your weekend." | Teacher: "Any questions?"':
    {
      why: "The teacher has not said when the homework is due, so you ask: 'When is it due?' It is a useful, polite question.",
      not: {
        "Why? That's so boring.":
          'This complains about the task. It is rude, and it does not help you do the homework.',
        'Yes, I wrote it at the weekend.':
          'The homework was only just set, so you cannot have written it already.',
        "No, but I don't agree, Miss.":
          'There is nothing to agree with; she gave an instruction. If something is unclear, ask a question.',
      },
      more: "Other useful questions: 'Can we type it?', 'Is it for Monday?', 'Can I write about Saturday only?'",
      tip: 'Write the homework and its due date in your planner before you leave the room.',
    },
  'The lesson has just ended. Your teacher calls your name. | Teacher: "Could you stay behind for a minute?"':
    {
      why: "'Stay behind' means stay in the room after the others leave. You agree politely and ask if everything is OK, in case there is a problem.",
      not: {
        'Yes, I can stand behind you.':
          "'Stay behind' is not about standing behind someone. It means staying after the lesson.",
        "No. I'm busy, mate.":
          "This refuses a teacher rudely, and 'mate' is far too casual. Teachers usually need only a minute.",
        'Yes, please. Thank you, Sir.':
          "'Yes, please' accepts an offer. Your teacher has asked you to do something, not offered you anything.",
      },
      more: 'Teachers ask pupils to stay behind for many reasons: good news, a message, or a quick talk about work.',
      tip: 'If you have a bus to catch, say so politely, and ask if you can talk another time.',
    },
  'You have a note from the office for your teacher. She is talking to another teacher. | You need to give her the note now.':
    {
      why: "You must interrupt, so you apologise for it first: 'Sorry to interrupt, Miss.' Then you say what you have: a note for her. It is quick and polite.",
      not: {
        "Oi, Miss. This note's for you, here.":
          "'Oi' is a very rude way to get attention in Britain. Never say it to a teacher.",
        'Excuse me, Miss. Could you stop talking now?':
          "Telling a teacher to stop talking is rude, even with 'excuse me'. Apologise for interrupting instead.",
        'Miss, Miss, Miss. Note from the office.':
          'Saying a name again and again is rude and impatient. Wait for a pause, then speak once.',
      },
      more: "'Sorry to interrupt' and 'Sorry to bother you' are polite ways to start talking when someone is busy.",
      tip: 'Wait for a small pause in the conversation before you speak.',
    },
  'You and a classmate are making a poster together. | Classmate: "Shall I do the drawing, and you do the writing?"':
    {
      why: "Your classmate makes a fair suggestion. 'Yeah, good idea' agrees in a friendly way, and a compliment about her drawing makes teamwork easier.",
      not: {
        'I would be delighted to agree to that.':
          'This is far too formal between classmates. It can even sound sarcastic.',
        'Yes, you shall do the drawing.':
          "'You shall' sounds like an old-fashioned order. Just agree in a friendly way.",
        "No, I'll do the drawing and the writing.":
          'This takes all the work and ignores your partner. Group work means sharing.',
      },
      more: "With friends, casual words are fine: 'Yeah', 'Cool', 'Sounds good'. With teachers, keep to 'Yes' and 'That's a good idea'.",
      tip: 'In group work, agree on jobs early, and say thanks when your partner does theirs.',
    },
  "It is the last day of the school year. You are leaving your teacher's class for good. | You speak to your teacher, Mr Shah.":
    {
      why: "At the end of the year, it is kind to thank a teacher for their help. 'Thanks for all your help, Sir' is warm and polite.",
      not: {
        'Cheers for everything, mate. Laters.':
          "'Mate' and 'Laters' are slang for friends. They are too casual for a teacher, even on the last day.",
        "You're welcome for this year, Sir.":
          "'You're welcome' answers thanks. You are the one who should say thank you.",
        'See you tomorrow, Sir. Bye.':
          'It is the last day of the school year, so you will not see him tomorrow. On a last day, a thank you means much more.',
      },
      more: 'Many British pupils give a teacher a card at the end of the year. A few kind words are enough.',
      tip: "Say what helped you: 'Thanks for helping me with my writing.' Teachers remember it.",
    },
  'You want to read a book from the classroom shelf at home this weekend. | You ask your teacher.':
    {
      why: "You want to take the book and bring it back, so you borrow it, and you ask first: 'Could I borrow this book, please?' 'Could I' is polite with a teacher.",
      not: {
        'Can you lend me this book, mate?':
          "'Lend me' is correct English, but 'mate' is far too casual for a teacher.",
        "I'm taking this book home, OK?":
          'This tells the teacher instead of asking. It sounds as if her answer does not matter.',
        'Would you like to borrow this book?':
          'This offers the book to the teacher. You are the one who wants to borrow it.',
      },
      more: "Say when you will return it: 'I'll bring it back on Monday.'",
      tip: 'Look after borrowed books, and return them on time. People lend more to those who do.',
    },
  'You are packing your bag after a lesson. A teacher you know comes over. | Teacher: "Have you got a minute?"':
    {
      why: "'Have you got a minute?' asks if you have a little time to talk. You agree and ask what she wants: 'Sure, Miss. What is it?'",
      not: {
        "Yes, it's ten past three.":
          'This tells the time. She is not asking what time it is; she wants to talk.',
        "No, thanks. I'm fine.":
          'This refuses an offer. She is asking for some of your time, not offering you something.',
        "No, I haven't got a watch.":
          "'A minute' here means a short time to talk, not a clock. A watch has nothing to do with it.",
      },
      more: "Similar phrases: 'Have you got a sec?' (casual) and 'Do you have a moment?' (formal).",
      tip: "If you really have no time, say when you are free: 'Sorry, I've got a bus. Can I come at lunch?'",
    },
  'You have been ill, and you are behind with your project. | Teacher: "How is your project going?"':
    {
      why: "You are honest about the problem and ask politely for help: 'I'm behind. Could I have more time?' 'Could I have...?' is the polite way to ask a teacher.",
      not: {
        'Terrible. I need way more time, yeah?':
          "'Way more' and 'yeah?' are casual, and it sounds like a demand. Ask the teacher politely.",
        'Very well, thank you, Miss. And you?':
          "This answers 'How are you?', and it is not true: your project is behind.",
        'It went really well, thanks, Miss.':
          'This is in the past, as if the project is finished. It is not, and you need more time.',
      },
      more: 'Teachers often say yes to a polite request with a good reason, such as illness. Say how much more time you need.',
      tip: "Ask early, give the reason, and suggest a new date: 'Could I hand it in next Monday?'",
    },
  'In a history lesson, your teacher asks you a question. You do not know the answer. | Teacher: "Can you tell us when the Second World War ended?" | Teacher: "Any idea?"':
    {
      why: "You do not know the answer, so you say so politely: 'Sorry, Sir. I'm not sure.' It is honest, and the teacher can help you or ask someone else.",
      not: {
        "Sorry, Sir. I don't understand.":
          'You understand the question; you just do not know the answer. This would make him explain the question again.',
        'No idea, mate. Ask someone else.':
          "'Mate' is too casual for a teacher, and telling him to ask someone else sounds rude.",
        'Yes, I have an idea, Sir.':
          "'Any idea?' means 'Do you know?'. Saying yes and then giving no answer will confuse him.",
      },
      more: "'I'm not sure' is softer than 'I don't know'. You can also guess: 'Was it 1945?'",
      tip: 'It is fine not to know. Try a guess if you can; teachers like to see you try.',
    },
  'You were chatting to your friend while the teacher was explaining something. | Teacher: "Can you two stop talking, please?"':
    {
      why: "You were talking, so the teacher is right. A short, honest 'Sorry, Miss' is the best answer. Then stop talking and listen.",
      not: {
        "We weren't talking, Miss.":
          'This is not true, and arguing with a teacher in front of the class makes things worse.',
        'Yes, we can, Miss.':
          "'Can you stop...?' is a polite order, not a question about what you are able to do. Answer it by stopping.",
        'OK, chill out, Miss.': "'Chill out' tells the teacher to relax. It is rude.",
      },
      more: "Polite requests and orders in English often look like questions: 'Can you...?', 'Could you...?'. The answer is to do the thing.",
      tip: 'A short apology is enough in class. You can explain later if you need to.',
    },
  'Your friend sends you a message on a Thursday. | Friend: "A few of us are going bowling on Saturday." | Friend: "Do you want to come?"':
    {
      why: "A friend invites you, so a friendly, casual yes fits: 'Yeah, I'd love to.' Asking 'What time?' is the useful next question.",
      not: {
        'I would be delighted to accept your kind invitation.':
          'This is the language of a formal letter. To a friend it sounds stiff, or as if you are joking.',
        'Yes, I go bowling.':
          'This says bowling is a habit of yours. Your friend asked if you want to come on Saturday.',
        "No, thank you. I'm full.": 'This refuses food. Your friend invited you to go bowling.',
      },
      more: "Match your words to the person. With a friend, keep it casual. For a formal invitation, such as a wedding, say 'Thank you, I'd be delighted to come'.",
      tip: 'When you accept, check the plan: when, where and who is going.',
    },
  'A friend asks you to come round to her house tonight. You have to look after your little brother. | Friend: "Fancy coming round to mine later?"':
    {
      why: "You cannot go, so you refuse kindly and suggest another day: 'Sorry, I can't tonight. Tomorrow?' It is casual, which suits a friend.",
      not: {
        'I regret that I am unable to attend.':
          'This is the language of a formal letter. To a friend it sounds cold and strange.',
        "No. I don't want to.":
          'This sounds as if you do not like your friend. Say you cannot, and why if you like.',
        "Yes, I can't tonight.":
          "'Yes' and 'I can't' say opposite things. To refuse, start with 'Sorry' or 'No'.",
      },
      more: "'Round to mine' is casual British English for 'to my house'.",
      tip: 'A kind refusal says sorry, gives a short reason if you want, and offers another time.',
    },
  'You are waiting for your friend outside the cinema. The film starts in ten minutes. | Friend: "Sorry, sorry. The bus was really late." | Friend: "Have I missed it?"':
    {
      why: "Your friend asks if the film has started. It has not, so you say so and calm her down: 'No, it hasn't started yet.'",
      not: {
        'Yes, it started ten minutes ago.':
          "The film starts in ten minutes, so it has not started yet. 'In ten minutes' is later; 'ten minutes ago' is earlier.",
        'Yes, you missed the bus.':
          'Her bus was late; she did not miss it. And she asked about the film.',
        'No, I missed you too.':
          "'Missed it' means arrived too late for it. 'I missed you' means you felt sad without her.",
      },
      more: "'Miss' has several meanings: arrive too late (miss the bus), not hit (miss the goal), and feel sad without someone (I miss you).",
      tip: "When a friend apologises for being late, a quick 'Don't worry' makes them feel better.",
    },
  'Your friend has just heard her piano exam result. She did not pass. | Friend: "I failed my piano exam." | Friend: "I\'m so annoyed with myself."':
    {
      why: "Your friend is upset about bad news, so you show sympathy and give hope: 'Oh no. You can take it again.' It is kind and true.",
      not: {
        "Congratulations. That's great news.":
          'This is for good news. Failing an exam is bad news.',
        "I'm so annoyed with you too.":
          'This makes it worse: it says you are angry with her as well.',
        "Well, it's your own fault, isn't it?":
          'Even if it is true, this is unkind. Your friend needs support now.',
      },
      more: "Kind things to say after bad news: 'What a shame', 'That's so annoying', 'You'll do it next time'.",
      tip: 'When a friend is upset, listen first. Advice can wait.',
    },
  'You and a friend are planning to see a film. | Friend: "Shall we meet outside the cinema?" | You: "Good idea. What time?" | Friend: "How about half six?"':
    {
      why: "Your friend suggests a time, half six, and you agree: 'Perfect. See you then.' 'Half six' is British English for 6.30.",
      not: {
        'Fine, thanks. And you?':
          "This answers 'How are you?'. 'How about...?' makes a suggestion, here a time.",
        'Outside the cinema.':
          'You have already agreed where to meet. Now your friend has suggested a time.',
        'It was great, thanks.':
          'This talks about the past. You are planning something in the future.',
      },
      more: "'How about...?' and 'What about...?' make suggestions: 'How about Saturday?' 'How about pizza?'",
      tip: "In Britain, 'half six' means half past six. In some other languages, 'half six' means 5.30, so be careful.",
    },
  'You are in an art lesson. Your friend looks at your drawing. | Friend: "Your drawing is amazing."':
    {
      why: "Your friend pays you a compliment, so you thank them in a friendly way: 'Aw, thanks.' 'It took ages' adds a little about the work, which is modest and natural.",
      not: {
        "I know. I'm the best in the class.":
          'This sounds proud and can upset others. In Britain people accept praise modestly.',
        'Thank you. I am grateful for your compliment.':
          'This is far too formal for a friend. It sounds stiff or even sarcastic.',
        "You're welcome. Any time.":
          'This answers thanks. Your friend praised your drawing; they did not thank you.',
      },
      more: "'Aw' shows that you are touched by something kind. 'Ages' is casual British English for 'a long time'.",
      tip: "Return a compliment only if you mean it: 'I love your colours too.'",
    },
  'You are waiting for a friend at the shopping centre. Your phone buzzes. | Text from friend: "Running 10 mins late, sorry."':
    {
      why: "'Running late' means 'I will arrive later than planned'. Your friend apologises, so you accept it casually and say where you will be: 'No worries. I'll wait by the door.'",
      not: {
        'Dear Sam, thank you for informing me.':
          'This is how a formal letter starts. A text to a friend is short and casual.',
        'Why are you running? Be careful.':
          "'Running late' does not mean your friend is running. It means they will be late.",
        "I'm sorry to hear that. Get well soon.":
          'These are for bad news and illness. Ten minutes late is a small thing.',
      },
      more: "Texts between friends use short forms, such as 'mins' for minutes. Do not use them in schoolwork.",
      tip: 'When you are late, send a text before the meeting time, not after.',
    },
  'Your friend was upset, and you listened to her for a long time. Now she feels better. | Friend: "Thanks for listening. I feel much better now."':
    {
      why: "Your friend thanks you, and she feels better. 'Any time' means you are always happy to help, and 'I'm glad you're OK' shows you care.",
      not: {
        "You're very welcome, madam.":
          "'Madam' is very formal, as in a smart shop. To a friend it sounds strange.",
        'Thank you for talking to me too.':
          'This thanks her back, but you were the one helping. A warm answer to her thanks is better.',
        "Oh no. I'm sorry to hear that.":
          'This is for bad news. Your friend has just said she feels better.',
      },
      more: "'That's what friends are for' is a warm phrase that means helping is part of being a friend.",
      tip: 'Keep what a friend tells you private, unless it makes you worried that they are not safe. Then tell an adult you trust.',
    },
  'You go to your friend Jess\'s house to walk to school together. Her mum opens the door. | Mum: "Hello. Are you here for Jess?"':
    {
      why: "Jess's mum asks if you have come for Jess. You greet her, say yes, and ask if Jess is ready. A friend's parent should always get a polite hello.",
      not: {
        "Yeah. Where's Jess, mate?":
          "'Mate' is for friends of your own age. To your friend's mum it sounds rude.",
        "Hello. Yes, I'm Jess.":
          "'Here for Jess' means you have come to see Jess. Her mum is not asking if you are Jess.",
        "No, I'm here for school.": 'You came to walk to school with Jess, so the answer is yes.',
      },
      more: "Many British children call their friends' parents 'Mrs Brown' or 'Mr Brown' until they are told to use a first name.",
      tip: "Say hello to your friends' parents. It is polite, and they will remember it.",
    },
  'Your friend runs over to you at lunch. | Friend: "Guess what?" | You: "What?" | Friend: "I got into the football team."':
    {
      why: "Your friend has great news, so you show you are excited for them. 'No way' is a casual British way to show surprise, and 'That's brilliant' is warm praise.",
      not: {
        'I would like to offer my congratulations.':
          'This is very formal, like a speech. To a friend it sounds cold or sarcastic.',
        'Oh no. Never mind.': 'These are for bad news. Getting into the team is good news.',
        'I know. I guessed.':
          "'Guess what?' does not ask you to guess. It just means 'I have news for you'.",
      },
      more: "'No way' here does not mean no. It means 'Wow, really?'. Your voice should sound happy.",
      tip: "Celebrate a friend's good news before you talk about your own.",
    },
  'Your friend forgot her money for the tuck shop. You have some coins. | Friend: "Could you lend me a pound? I\'ll pay you back tomorrow."':
    {
      why: "Your friend asks to borrow a pound and promises to pay it back. You agree and hand it over: 'Sure. Here you go.'",
      not: {
        'Sure. Could you lend me one?':
          'This asks your friend for money, but she has none. She asked you.',
        'Sure. Pay me back right now.':
          'She said she will pay you back tomorrow, because she has no money now.',
        "Sure. I'll borrow you one.":
          "'Borrow' is for taking something; 'lend' is for giving it. You lend money to someone.",
      },
      more: 'A tuck shop is a small shop in a British school that sells snacks.',
      tip: 'Only lend what you can manage without. Most friends pay back, but it is good to be careful.',
    },
  'Your friend has a new haircut. You think it looks great. | Friend: "Do you like my new haircut?"':
    {
      why: "'It suits you' means it looks good on you. It is the natural compliment for a haircut, a colour or a style.",
      not: {
        'Yes, it really fits you.':
          "'Fit' is about size, for clothes and shoes: 'These shoes fit me.' A haircut does not have a size.",
        'Yes, it really matches you.':
          "'Match' is for things that look good together, such as a scarf and a hat. We do not say a haircut matches a person.",
        'Yes, I like my haircut too.':
          'This talks about your own haircut. Your friend asked about theirs.',
      },
      more: 'Three verbs to keep apart: suit (looks good on you), fit (is the right size), match (goes well with something else).',
      tip: 'Compliments make friends happy, so give them when you mean them.',
    },
  'You are lost in a town centre. You ask a woman how to get to the library. | You: "Excuse me, how do I get to the library?" | Woman: "Go straight on, then take the second left. It\'s opposite the bank."':
    {
      why: "Repeating the key part, 'Second left', checks that you understood, and then you thank her. It is natural and polite.",
      not: {
        'Thanks. So I turn right at the bank?':
          'Checking is a good idea, but this is wrong: she said the second left, and the library is opposite the bank.',
        "You're welcome. Have a nice day.":
          "'You're welcome' answers thanks. She helped you, so you are the one who says thank you.",
        "Sorry, I'm not from round here.":
          'You say this when someone asks you the way and you do not know it. You asked her.',
      },
      more: "'Straight on' means keep going forward. 'Opposite' means on the other side of the road, facing it.",
      tip: 'Repeat directions back. It helps you remember, and the person can correct you.',
    },
  'You and your family arrive at a hotel in the evening. You have a room booked. | Receptionist: "Good evening. Welcome to the Grand Hotel."':
    {
      why: "The receptionist welcomes you, so you thank her and say why you are there: 'We've booked a room.' Then she will ask for your name.",
      not: {
        'Hi. Give us a room, please.':
          "'Give us' sounds like a demand, and it does not say that you have booked.",
        'Good night. We have a room booked.':
          "'Good night' is for going to bed or leaving. You have just arrived, so it is wrong as a greeting.",
        "Thank you. You're welcome too.":
          "'You're welcome' answers thanks. 'Welcome' greets a guest, and the reply is a thank you.",
      },
      more: "At a hotel, you 'check in' when you arrive and 'check out' when you leave.",
      tip: "Have the booking name ready. Receptionists often ask 'What name is it under?'",
    },
  'You left your rucksack on a train. You go to the lost property office at the station. | Officer: "Lost property. How can I help?"':
    {
      why: "The officer needs facts to find your bag: what you lost and where. 'I left my rucksack on the 8.15 train' gives both, clearly and politely.",
      not: {
        'Where is my bag? I want it back right now.':
          'This sounds angry, and it does not say what the bag looks like or where you left it.',
        "I've lost my train. It was the 8.15.":
          "You lost your rucksack, not the train. If you are too late for a train, you 'miss' it.",
        "Hello. I'm here. How can I help you?":
          "This is the officer's line. You are the one who needs help.",
      },
      more: 'Describe the thing: its colour, its size, and anything inside it, such as a book with your name in it.',
      tip: 'Leave your phone number, in case it is found later.',
    },
  'A man in front of you in the street drops a glove and walks on. You pick it up. | You call after him.':
    {
      why: "You want to tell a stranger he dropped something, so you get his attention politely with 'Excuse me' and say what happened: 'You've dropped this.'",
      not: {
        'Hey, you. Your glove. Catch.':
          "'Hey, you' is rude, and throwing his glove at him is not polite. Hand it to him.",
        'Sorry, is this my glove?': 'It is his glove, not yours. You saw him drop it.',
        'Excuse me. Have you got the time?':
          'This asks what time it is. It does not tell him about his glove.',
      },
      more: "'Dropped' is the past of 'drop': to let something fall by accident.",
      tip: 'Hold up the thing as you speak, so the person sees at once what you mean.',
    },
  'You are sitting on a busy bus. An old lady with a walking stick gets on. There are no free seats. | You stand up.':
    {
      why: "You are offering your seat, so you make a polite offer: 'Would you like to sit here?' 'Would you like...?' is the kind way to offer something.",
      not: {
        'Sit down, old lady.':
          "This is an order, and calling someone 'old lady' is rude. Offer politely instead.",
        'Can I sit here, please?':
          'This asks for a seat for yourself. You are giving your seat to her.',
        'Excuse me, is this seat free?':
          'This asks if you can sit somewhere. You already have a seat to give her.',
      },
      more: 'On British buses, some seats are kept for older people and people who find standing hard. Offering them is expected.',
      tip: "Offer with a smile. If she says no, that is fine: 'OK, no problem.'",
    },
  'You live in a town with a castle. A tourist stops you on the main street, which leads to it. | Tourist: "Excuse me, is this the way to the castle?"':
    {
      why: "The tourist is on the right road, so you tell him so with a short answer, and then give a simple direction: 'Keep going straight on.'",
      not: {
        'No idea at all, mate. Sorry about that.':
          'You live here and know the way, so this is not true. Help the tourist if you can.',
        "Yes, it's a lovely old castle.":
          'This is a nice comment, but it does not tell the tourist if this is the right way.',
        'Yes, I went there last year.':
          'This is about you. The tourist needs to know if this road goes to the castle.',
      },
      more: "You might add how far it is: 'about five minutes' walk'.",
      tip: 'Short, clear directions are best. Point if it helps.',
    },
  'You have waited in a long queue at the post office. A man walks in and stands in front of you. | You speak to him politely.':
    {
      why: "The man has pushed in, perhaps without noticing. 'Sorry, I think there's a queue' tells him politely. The British 'sorry' keeps it calm, and he can move without feeling silly.",
      not: {
        'Oi. Get to the back of the queue.':
          "'Oi' is very rude, and shouting an order may start an argument.",
        'Sorry, can I go in front of you?':
          'You were there first, and he is the one in the wrong place. This asks for the opposite.',
        "Excuse me, I'm sorry I'm late.":
          'This apologises for being late, but you have waited a long time. It does not tell him about the queue.',
      },
      more: "In Britain, pushing into a queue is called 'queue jumping', and most people find it very rude.",
      tip: "Soft words such as 'sorry' and 'I think' help you complain without a fight.",
    },
  'You and your friends are at the seaside. You want a photo of all of you together. | You speak to a woman walking past.':
    {
      why: "You want a stranger to do something for you, so you ask very politely: 'Sorry, could you take a photo of us?' 'Sorry' at the start is a polite British way to approach a stranger.",
      not: {
        'Take our photo. Quick.':
          'This is an order to a stranger. It sounds rude, and she does not have to help.',
        'Excuse me, can I take a photo of you?':
          'This asks to photograph her. You want her to photograph you and your friends.',
        'Excuse me, would you like a photo?':
          'This offers to take a photo for her. You want one of yourselves.',
      },
      more: "'Would you mind taking...?' is even more polite. Hand over your phone, and thank her afterwards.",
      tip: 'Make it easy: show which button to press, and stand where the light is good.',
    },
  'You have just arrived to stay with a British host family. | Host: "And this is the kitchen." | Host: "Help yourself to anything in the fridge."':
    {
      why: "Your host invites you to take food when you like. It is a kind offer, so you thank her: 'Thanks. That's kind of you.'",
      not: {
        "No, I'm fine. Help yourself.":
          "This is the host's line turned round. It is her kitchen, so she does not need your permission.",
        "You're welcome. Enjoy it.":
          'This answers thanks, as if you had given her something. She is offering, so you thank her.',
        "Sorry, I can't help you with that.":
          "'Help yourself' does not ask you to help. It means you may take what you want.",
      },
      more: "Even after 'Help yourself', it is polite to ask before you finish something: 'Is it OK if I have the last yoghurt?'",
      tip: 'In a host family, tidy up after yourself in the kitchen. Hosts notice.',
    },
  'It is your first morning with your host family. | Host: "Morning." | You: "Good morning." | Host: "Did you sleep well?"':
    {
      why: "'Did you sleep well?' asks about last night, so you answer about the past: 'Yes, really well, thanks.' It is a kind question, so you thank your host.",
      not: {
        'Yes, I sleep well.':
          'This is about your habits in general. She asked about last night, which needs the past.',
        "Yes, I'm sleeping now.":
          'You are awake and talking, so this is not true. The question is about last night.',
        "Yes, I'll sleep well, thanks.": 'This is about the future. Last night is in the past.',
      },
      more: "Hosts often ask this on the first morning. If you did not sleep well, you can say so kindly: 'Not really, I was a bit cold.'",
      tip: 'Mention a small problem early, such as being cold. Hosts would rather know.',
    },
  'You are going out with friends from your language school. Your host speaks to you at the door. | Host: "Have a nice time." | Host: "What time will you be back?"':
    {
      why: "Your host asks when you will return, so you give a time: 'About six, I think.' Hosts worry if they do not know when you will be home.",
      not: {
        'I came back at six.':
          'This is in the past. You are only just leaving, so you will come back later.',
        "I'll be back, thanks.": "This does not give a time, and 'What time...?' asks for one.",
        "Yes, I'll be back.": "A 'What time...?' question needs a time, not 'yes'.",
      },
      more: "'Be back' means return: 'I'll be back by six' means at six or before.",
      tip: 'If your plans change, text your host. It is polite and keeps everyone calm.',
    },
  'Your neighbours are going away for the weekend. They knock on your door. | Neighbour: "We\'re away this weekend." | Neighbour: "Could you keep an eye on our cat?"':
    {
      why: "'Keep an eye on' means watch and look after something. You agree and ask a useful question: 'Of course. Does she need feeding?'",
      not: {
        "Sorry, I haven't got a cat.":
          'They are not asking about a cat of yours. They want you to watch theirs while they are away.',
        'Yes, please. Thank you very much.':
          'This accepts an offer. Your neighbours are asking you for help.',
        'No, thanks. I have my own cat.':
          'They are not offering you a cat. They want help looking after theirs.',
      },
      more: "Other 'eye' phrases: 'catch someone's eye' (get their attention) and 'see eye to eye' (agree).",
      tip: 'Check with your parents first. Then ask the important details: when to visit, what to do, and where the key is.',
    },
  'You are playing music in your room. Your neighbour knocks on the door. | Neighbour: "Sorry to bother you." | Neighbour: "Your music is quite loud. My baby is trying to sleep."':
    {
      why: "Your music is causing a problem, so you apologise and fix it at once: 'I'll turn it down.' To 'turn down' music is to make it quieter.",
      not: {
        "So what? It's my house.":
          'This is rude, and a sleeping baby is a good reason to be quiet. Good neighbours help each other.',
        'Thanks. I love this song too.': 'Your neighbour is complaining, not praising your music.',
        "Don't worry about it.":
          'This accepts an apology, but you are the one who should apologise.',
      },
      more: "'Turn it down' makes it quieter, and 'turn it up' makes it louder. 'Quite loud' in British English is a polite way to say 'too loud'.",
      tip: 'When someone complains politely, answer politely and fix the problem. It keeps neighbours friends.',
    },
  'Your host mum is planning dinner. You do not eat meat. | Host: "Is there anything you don\'t eat?"':
    {
      why: "Your host wants to cook something you can eat. You do not eat meat, so the answer is yes, and you say what it is: 'Yes, I don't eat meat.'",
      not: {
        'No, I eat everything.': 'This is not true: you do not eat meat. Your host needs to know.',
        "No, thanks. I'm full.":
          'This refuses food now. She is asking what you do not eat, so she can plan.',
        'Yes, I love meat.': 'This says the opposite of the truth. You do not eat meat.',
      },
      more: "A 'vegetarian' eats no meat or fish. A 'vegan' eats nothing that comes from animals.",
      tip: 'Tell your host about any food you do not eat on your first day. It saves problems later.',
    },
  'You are taking the rubbish out. Your elderly neighbour is in her garden. | Neighbour: "Hello, dear. How\'s school going?"':
    {
      why: "'How's school going?' asks how school is for you at the moment. Answer briefly, 'Good, thanks', and ask about her too. 'Dear' is a kind word older people often use.",
      not: {
        'It starts at half past eight.':
          'This tells when school starts. She asked how it is going for you.',
        'By bus, usually.': "This tells how you travel. 'How's it going?' asks how things are.",
        "Yes, I'm going to school.":
          "'Going' here is about how things are, not about travelling. A 'How...?' question cannot be answered with 'yes'.",
      },
      more: "'How's it going?' and 'How are things?' ask for a short, general answer, not for details.",
      tip: 'Ask older neighbours a question back. Many enjoy a short chat.',
    },
  'Dinner is nearly ready at your host family\'s house. | Host: "Dinner in five minutes." | Host: "Could you lay the table, please?"':
    {
      why: "'Lay the table' means put out the plates, knives, forks and glasses. You agree and ask a useful question: 'Sure. How many places?'",
      not: {
        'Yes, I could.':
          "'Could you...?' is a polite request, not a question about what you are able to do. Answer by agreeing and doing it.",
        'Yes, please. I am hungry.':
          "'Yes, please' accepts an offer. She has asked you to help, not offered you food.",
        "No, thanks. I'm fine.":
          'This refuses an offer. She asked for help, so it sounds as if you will not help.',
      },
      more: "A 'place' is one person's knife, fork, plate and glass. Clearing the table after dinner is also a kind thing to offer.",
      tip: "Offer to help in a host family: 'Can I help with anything?'",
    },
}
