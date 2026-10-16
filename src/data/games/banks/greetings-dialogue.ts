import type { GameBank } from '@/lib/games/explanations/types'

/**
 * What Do You Say?: an everyday situation, what the other person says, and four
 * replies. The student chooses the most polite, natural one. The page shuffles
 * the four replies for each attempt and marks the reply itself.
 *
 * Moved out of src/app/games/greetings-dialogue/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). Two
 * questions printed the answer in the prompt, so the student only had to find
 * the same words among the replies:
 *
 *   - The shop assistant. The prompt was "Thank you very much." "You're
 *     welcome.", and the right reply is "You're welcome." It is now just "Thank
 *     you very much."
 *   - The teacher. The prompt was "Could you say that again, please?" "Of
 *     course.", and the right reply is "Of course." It is now just "Could you
 *     say that again, please?"
 *
 * ONE PROMPT REPUNCTUATED (16 October 2026, by the second reader). The shop
 * assistant's goodbye read '"Thanks, goodbye!" (shop assistant) - you reply.',
 * a dash used as punctuation, which the house style does not use, in a line
 * the student reads. It is now '"Thanks, goodbye!" (shop assistant). You
 * reply.'; the words and the answer are the same. The exclamation marks inside
 * the quoted speech stay: they are part of what the people say.
 *
 * The other 43 exchanges are unchanged. Each keeps the one-line note it was
 * written with; the page no longer shows it, because the explanation says
 * more. In five of them ("Good morning", "Good afternoon", "Good evening",
 * "How do you do?" and "See you tomorrow") the right reply repeats what the
 * other person said. That is the custom being taught, not an answer printed in
 * the prompt, so they stay. No exchange names what it practises, so the
 * answers are recorded under the game's own skill and not a finer kind.
 */

export interface Exchange {
  situation: string
  prompt: string
  options: [string, string, string, string]
  answerIndex: number
  note: string // the earlier one-line note; the explanation replaced it on the page
}

export const EXCHANGE_BANK: Exchange[] = [
  // Greetings
  {
    situation: 'You arrive at college early in the morning and see your teacher.',
    prompt: '"Good morning!"',
    options: ['Good morning!', 'Good night!', 'Bye for now.', 'Not bad, thanks.'],
    answerIndex: 0,
    note: 'We say "Good morning" before midday to greet someone.',
  },
  {
    situation: 'A classmate you know well walks past you in the corridor.',
    prompt: '"Hi! How are you?"',
    options: ['How do you do.', "I'm fine, thanks. And you?", 'Good evening.', 'Here you are.'],
    answerIndex: 1,
    note: '"I\'m fine, thanks. And you?" is a friendly, natural reply.',
  },
  {
    situation: 'You meet a friend in the afternoon at the bus stop.',
    prompt: '"Good afternoon!"',
    options: ['Good morning!', 'Good afternoon!', 'Goodbye!', "Sorry, I'm late."],
    answerIndex: 1,
    note: 'Reply with the same greeting for the time of day.',
  },
  {
    situation: 'Your neighbour greets you when you get home in the evening.',
    prompt: '"Good evening."',
    options: ['Good evening.', 'Good morning.', 'Well done.', 'Never mind.'],
    answerIndex: 0,
    note: 'We say "Good evening" after about 6 pm.',
  },
  {
    situation: 'A friend texts you and asks how things are going.',
    prompt: '"How\'s it going?"',
    options: ['Here you go.', 'Not too bad, thanks!', 'Good night.', "You're welcome."],
    answerIndex: 1,
    note: '"How\'s it going?" is informal; "Not too bad, thanks!" fits well.',
  },
  {
    situation: 'You see a colleague you have not seen for a long time.',
    prompt: '"Long time no see! How have you been?"',
    options: ["I've been well, thanks!", 'No, thank you.', 'Mind the step.', 'See you later.'],
    answerIndex: 0,
    note: 'Answer the question about how you have been.',
  },

  // Introductions
  {
    situation: 'Someone introduces themselves to you at a new class.',
    prompt: '"Hello, I\'m Sara. Nice to meet you."',
    options: ['Nice to meet you too.', 'No problem.', 'Good luck.', 'Help yourself.'],
    answerIndex: 0,
    note: 'When someone says "Nice to meet you", reply "Nice to meet you too."',
  },
  {
    situation: 'You want to introduce yourself to a new person at work.',
    prompt: 'You speak first.',
    options: [
      'Sorry about that.',
      "Hello, I'm Tom. What's your name?",
      'Goodbye for now.',
      'Yes, please.',
    ],
    answerIndex: 1,
    note: 'A polite way to introduce yourself and ask for their name.',
  },
  {
    situation: 'At a formal event, an older manager offers a handshake.',
    prompt: '"How do you do?"',
    options: ['How do you do?', "I'm doing my homework.", 'Not bad, mate.', 'See you soon.'],
    answerIndex: 0,
    note: '"How do you do?" is formal; the polite reply is the same phrase.',
  },
  {
    situation: 'A friend introduces you to their sister.',
    prompt: '"This is my sister, Mia."',
    options: ['Goodbye, Mia.', 'Hello, Mia. Nice to meet you.', 'Sorry, Mia.', 'Thank you, Mia.'],
    answerIndex: 1,
    note: 'Greet the new person and say it is nice to meet them.',
  },
  {
    situation: 'Someone asks where you are from.',
    prompt: '"Where are you from?"',
    options: ["I'm from Poland.", "You're welcome.", 'Good night.', 'Excuse me.'],
    answerIndex: 0,
    note: 'Answer with your country or town.',
  },

  // Thanks
  {
    situation: 'A friend helps you carry a heavy bag.',
    prompt: 'You want to thank them.',
    options: ['Sorry!', 'Thank you so much!', 'Good morning!', 'See you!'],
    answerIndex: 1,
    note: 'Say "Thank you" to show you are grateful.',
  },
  {
    situation: 'You thank a shop assistant and they reply.',
    prompt: '"Thank you very much."',
    options: ["You're welcome.", 'No, thanks.', 'Good evening.', "Sorry, I can't."],
    answerIndex: 0,
    note: '"You\'re welcome" is the polite reply to "Thank you".',
  },
  {
    situation: 'Someone gives you a small gift for your birthday.',
    prompt: '"Here\'s a little present for you."',
    options: ['No problem.', "Thank you, that's very kind.", 'Mind the gap.', 'Good luck.'],
    answerIndex: 1,
    note: 'Thank the person and say it is kind of them.',
  },
  {
    situation: 'A classmate lends you a pen during a lesson.',
    prompt: 'They hand you the pen.',
    options: ['Thanks a lot!', 'Goodbye!', 'How do you do?', "Sorry, I'm late."],
    answerIndex: 0,
    note: '"Thanks a lot!" is a friendly way to say thank you.',
  },
  {
    situation: 'You want to reply politely when someone thanks you for help.',
    prompt: '"Thanks for your help!"',
    options: [
      'No worries, happy to help.',
      'Good night.',
      'Excuse me, please.',
      'See you tomorrow.',
    ],
    answerIndex: 0,
    note: '"No worries, happy to help" is a warm, natural reply.',
  },

  // Apologies
  {
    situation: "You step on someone's foot by accident on the bus.",
    prompt: 'You speak to them.',
    options: ['Well done!', "I'm so sorry!", 'Good afternoon!', "You're welcome!"],
    answerIndex: 1,
    note: 'Say sorry when you do something by accident.',
  },
  {
    situation: 'Someone apologises to you for being a little late.',
    prompt: '"Sorry I\'m late."',
    options: ["That's all right.", 'Good morning.', 'No, thank you.', 'See you later.'],
    answerIndex: 0,
    note: '"That\'s all right" kindly accepts an apology.',
  },
  {
    situation: 'You bump into a stranger in a busy shop.',
    prompt: 'You speak to them.',
    options: ["Excuse me, I'm sorry!", 'Good evening!', 'Here you are!', 'Cheers!'],
    answerIndex: 0,
    note: 'Apologise politely after bumping into someone.',
  },
  {
    situation: 'A friend says sorry for forgetting to call you.',
    prompt: '"I\'m really sorry I forgot to call."',
    options: ["Don't worry about it.", 'Good luck!', 'Nice to meet you.', 'How do you do?'],
    answerIndex: 0,
    note: '"Don\'t worry about it" forgives them kindly.',
  },
  {
    situation: 'You need to get past someone standing in a doorway.',
    prompt: 'You speak to them.',
    options: ['Excuse me, please.', 'Good night.', 'Thank you very much.', 'See you soon.'],
    answerIndex: 0,
    note: '"Excuse me, please" is polite when you need to pass.',
  },

  // Requests
  {
    situation: 'You want to borrow a pen from a classmate.',
    prompt: 'You ask them.',
    options: [
      'Could I borrow a pen, please?',
      'Good morning, pen.',
      'Sorry, pen.',
      'Goodbye, pen.',
    ],
    answerIndex: 0,
    note: '"Could I... please?" is a polite way to make a request.',
  },
  {
    situation: 'You ask the teacher to repeat something. They reply kindly.',
    prompt: '"Could you say that again, please?"',
    options: ['Of course.', 'Good evening.', 'No, thanks.', 'See you later.'],
    answerIndex: 0,
    note: '"Of course" is a friendly way to agree to a request.',
  },
  {
    situation: 'You want someone to help you with a question.',
    prompt: 'You ask politely.',
    options: ['Give me that now.', 'Could you help me, please?', 'Good night.', "You're welcome."],
    answerIndex: 1,
    note: 'Use "Could you... please?" to ask politely for help.',
  },
  {
    situation: 'You ask to open the window because it is hot.',
    prompt: 'You ask the teacher.',
    options: ['Is it OK if I open the window?', 'Goodbye!', "Sorry I'm late.", 'Nice to meet you.'],
    answerIndex: 0,
    note: '"Is it OK if I...?" politely asks for permission.',
  },
  {
    situation: 'Someone asks you to pass the salt at dinner.',
    prompt: '"Could you pass the salt, please?"',
    options: ['Here you are.', 'Good morning.', 'How do you do?', 'See you tomorrow.'],
    answerIndex: 0,
    note: '"Here you are" is what we say when handing something over.',
  },
  {
    situation: 'You want to ask the time from a stranger politely.',
    prompt: 'You speak first.',
    options: [
      'Excuse me, what time is it, please?',
      'Good night, time.',
      'Sorry, time.',
      'Cheers, time.',
    ],
    answerIndex: 0,
    note: 'Start with "Excuse me" before asking a stranger.',
  },

  // Leave-taking
  {
    situation: "You are leaving a friend's house at night.",
    prompt: 'You say goodbye.',
    options: ['Good morning!', 'Goodbye, see you soon!', 'Hello again!', 'Nice to meet you!'],
    answerIndex: 1,
    note: 'Use "Goodbye, see you soon" when you leave.',
  },
  {
    situation: 'A friend says they will see you the next day.',
    prompt: '"See you tomorrow!"',
    options: ['See you tomorrow!', 'Good morning!', 'How do you do?', 'Excuse me!'],
    answerIndex: 0,
    note: 'Reply with the same friendly phrase.',
  },
  {
    situation: 'You finish a phone call with a friend.',
    prompt: 'You end the call.',
    options: [
      'Bye for now, take care!',
      'Good morning, hello!',
      'Sorry, sorry!',
      'Nice to meet you!',
    ],
    answerIndex: 0,
    note: '"Bye for now, take care!" is a warm way to end a call.',
  },
  {
    situation: 'You leave a shop after buying something.',
    prompt: '"Thanks, goodbye!" (shop assistant). You reply.',
    options: ['Goodbye, have a nice day!', 'Good morning!', "Sorry I'm late!", 'How do you do?'],
    answerIndex: 0,
    note: '"Have a nice day!" is a friendly thing to say when leaving.',
  },
  {
    situation: 'You say goodbye to a colleague on Friday afternoon.',
    prompt: 'You speak to them.',
    options: ['Have a good weekend!', 'Good morning!', 'Nice to meet you!', 'Sorry about that!'],
    answerIndex: 0,
    note: '"Have a good weekend!" is common before the weekend.',
  },

  // Classroom phrases
  {
    situation: 'You do not understand a word the teacher said.',
    prompt: 'You ask for help.',
    options: [
      'What does this word mean, please?',
      'Good night.',
      "You're welcome.",
      'See you later.',
    ],
    answerIndex: 0,
    note: 'Ask "What does this word mean?" when you don\'t understand.',
  },
  {
    situation: 'The teacher is speaking too fast for you.',
    prompt: 'You ask politely.',
    options: ['Could you speak more slowly, please?', 'Goodbye!', 'Sorry, fast!', 'Cheers!'],
    answerIndex: 0,
    note: 'Politely ask the teacher to slow down.',
  },
  {
    situation: 'You need to leave the classroom for a moment.',
    prompt: 'You ask the teacher.',
    options: [
      'May I leave the room, please?',
      'Good morning!',
      'Nice to meet you!',
      'Here you are!',
    ],
    answerIndex: 0,
    note: '"May I... please?" politely asks for permission.',
  },
  {
    situation: 'You did not hear the page number.',
    prompt: 'You ask the teacher.',
    options: ['Which page are we on, please?', 'Good evening!', 'Sorry, page!', 'See you soon!'],
    answerIndex: 0,
    note: 'Ask clearly which page the class is on.',
  },
  {
    situation: 'The teacher asks if everyone understands.',
    prompt: '"Does everyone understand?" You do not.',
    options: ["Sorry, I don't understand.", 'Good morning.', "You're welcome.", 'Goodbye.'],
    answerIndex: 0,
    note: 'It is fine to say "Sorry, I don\'t understand."',
  },
  {
    situation: 'You want to know how to spell a word.',
    prompt: 'You ask the teacher.',
    options: [
      'How do you spell that, please?',
      'Good night, spell!',
      'Sorry, spell!',
      'Cheers, spell!',
    ],
    answerIndex: 0,
    note: 'Ask "How do you spell that?" to learn the spelling.',
  },

  // Everyday social
  {
    situation: 'A friend offers you a cup of tea.',
    prompt: '"Would you like a cup of tea?"',
    options: [
      'Yes, please. That would be lovely.',
      'Good night.',
      'Sorry, late.',
      'How do you do?',
    ],
    answerIndex: 0,
    note: '"Yes, please" politely accepts an offer.',
  },
  {
    situation: 'Someone offers you more food but you have had enough.',
    prompt: '"Would you like some more?"',
    options: ["No, thank you. I'm full.", 'Good morning.', 'See you later.', 'How do you do?'],
    answerIndex: 0,
    note: '"No, thank you" politely refuses an offer.',
  },
  {
    situation: 'A friend tells you they passed their exam.',
    prompt: '"I passed my exam!"',
    options: ['Well done! Congratulations!', 'Sorry to hear that.', 'Good night.', 'Excuse me.'],
    answerIndex: 0,
    note: 'Say "Congratulations!" for good news.',
  },
  {
    situation: 'A friend tells you they feel unwell.',
    prompt: '"I don\'t feel very well today."',
    options: [
      'Oh dear, I hope you feel better soon.',
      'Congratulations!',
      'Good morning!',
      'Here you are!',
    ],
    answerIndex: 0,
    note: 'Show you care by hoping they feel better.',
  },
  {
    situation: 'Someone sneezes near you.',
    prompt: '"Atchoo!"',
    options: ['Bless you!', 'Goodbye!', 'How do you do?', 'See you later!'],
    answerIndex: 0,
    note: 'In the UK we often say "Bless you!" after a sneeze.',
  },
  {
    situation: 'A friend wishes you luck before your test.',
    prompt: '"Good luck with your test!"',
    options: ['Thank you!', "Sorry I'm late.", 'Good night.', 'No, thanks.'],
    answerIndex: 0,
    note: 'Simply say "Thank you!" when someone wishes you luck.',
  },
  {
    situation: 'You greet someone you do not know on a quiet morning walk.',
    prompt: 'You speak first.',
    options: ['Good morning!', 'Goodbye!', 'Sorry!', 'How do you do?'],
    answerIndex: 0,
    note: 'A friendly "Good morning!" suits a passer-by.',
  },
  {
    situation: 'A friend says "Happy birthday!" to you.',
    prompt: '"Happy birthday!"',
    options: ['Thank you very much!', 'Good night.', 'Excuse me.', 'See you later.'],
    answerIndex: 0,
    note: 'Thank the person for the birthday wishes.',
  },
]

export const BANK: GameBank<Exchange> = {
  slug: 'greetings-dialogue',
  items: EXCHANGE_BANK,
  // The situation is different in every exchange; the prompt alone repeats
  // ("You speak to them."), so the key is the two together, as the student reads them.
  key: (e) => `${e.situation} | ${e.prompt}`,
  answer: (e) => e.options[e.answerIndex],
  options: (e) => e.options,
}
