import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Everyday Vocabulary Flashcards: the explanation a student sees after each
 * answer, by question key
 * (src/data/games/banks/everyday-vocab-flashcards.ts). Written with AI on 16
 * October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  family: {
    why: 'A family is the group of people who are related to each other, such as a mother, a father, children and grandparents. Some families are big and some are small. You can say: There are five people in my family.',
    more: "'Family' is one word for many people. We usually say 'My family is big'.",
    tip: 'Learn the family words together: mother, father, brother, sister, grandmother, grandfather.',
  },
  friend: {
    why: 'A friend is a person you like and trust, and you enjoy time together. A friend is more than someone you only know a little. You can say: I play football with my friend after school.',
    more: "We say 'my friend' or 'a friend of mine'. The spelling has 'ie': f, r, i, e, n, d.",
    tip: "Remember the spelling with a rhyme: a friend is there until the end. 'Friend' ends with 'end'.",
  },
  neighbour: {
    why: 'A neighbour is a person who lives near you, in the next house or flat or on the same street. You do not have to be friends. You can say: My neighbour feeds my cat when I am away.',
    more: "In British English the spelling is 'neighbour', with 'our'. The letters 'gh' are silent: say NAY-bor.",
    tip: "Spell it in two parts: neigh + bour. The 'eigh' sounds like 'ay' in 'eight'.",
  },
  teacher: {
    why: 'A teacher helps students to learn, usually in a school. Teachers explain lessons, give homework and answer questions. You can say: Our teacher gives us a spelling test every Friday.',
    more: "Add '-er' to a verb to name the person who does it: teach, teacher; work, worker; read, reader.",
    tip: "Say the subject before 'teacher': a maths teacher, an English teacher.",
  },
  doctor: {
    why: 'A doctor is a person who is trained to treat people who are ill or hurt. You go to see a doctor when you do not feel well. You can say: I have a sore throat, so I will see the doctor.',
    more: "We say 'go to the doctor' or 'see a doctor'. In Britain a doctor often works at a surgery, a clinic or a hospital.",
    tip: "Learn the phrase 'make an appointment'. You make an appointment to see the doctor.",
  },
  child: {
    why: 'A child is a young person, a boy or a girl. Parents also call their own son or daughter their child. You can say: The child is learning to read.',
    more: "The plural is irregular: one child, two children. Do not say 'childs'.",
    tip: 'Learn the irregular plurals together: child, children; man, men; woman, women; foot, feet.',
  },
  parent: {
    why: "A parent is a mother or a father. The word 'parents' means the mother and the father together. You can say: My parents come to every school concert.",
    more: "Do not confuse 'parents' with 'relatives', which means all the members of a family, such as parents, brothers, sisters, grandparents, aunts, uncles and cousins.",
    tip: "Use 'my parents' when you mean your mother and father together.",
  },
  colleague: {
    why: 'A colleague is a person who works with you, in the same job or workplace. Teachers have colleagues in the staff room. You can say: I eat lunch with my colleagues.',
    more: "Say it as KOL-eeg. The letters 'ue' at the end are silent.",
    tip: "Do not mix up 'colleague' and 'college'. A colleague is a person, and a college is a place to study.",
  },
  stranger: {
    why: 'A stranger is a person you have never met or do not know. You can say: I did not know anyone at the party, so everyone was a stranger.',
    more: 'The opposite is a friend, or an acquaintance, which means someone you know a little.',
    tip: "Use 'a complete stranger' to say that you do not know the person at all.",
  },
  customer: {
    why: 'A customer is a person who buys things or pays for a service, for example in a shop, a cafe or a bank. You can say: The customer asked for a bigger size.',
    more: 'A person who uses a service, such as a hairdresser, is also a customer.',
    tip: 'Learn the pair: the customer buys, and the shop assistant serves.',
  },
  home: {
    why: 'Home is the place where you live, such as a house or a flat. It is also the place where you feel you belong. You can say: I feel happy at home.',
    more: "We say 'at home' and 'go home'. We do not say 'to home' or 'in home'.",
    tip: "Learn the phrases at home, go home, come home. None of them uses 'to'.",
  },
  school: {
    why: 'A school is a place where children go to learn with teachers. In the UK children usually start school at four or five years old. You can say: My brother starts school in September.',
    more: "We say 'at school', 'go to school' and 'after school' with no 'the'.",
    tip: "Use 'the school' only for one particular building: 'The school is closed today.'",
  },
  shop: {
    why: 'A shop is a place where you buy things, such as bread or clothes. Shops can be big or small. You can say: There is a shop at the end of our street.',
    more: "Americans say 'store'. In British English 'shop' is the usual word, and 'store' is mostly used for a big shop.",
    tip: "Use 'go shopping' for the activity and 'go to the shop' for the place.",
  },
  street: {
    why: 'A street is a road in a town or a city, with houses or shops on both sides. You can say: I live on Church Street.',
    more: "We say 'on' a street with its name. We say 'in the street' for the area, as in 'children playing in the street'.",
    tip: "Street names often end in 'Street' or 'Road'. Learn to say your own address.",
  },
  hospital: {
    why: 'A hospital is a large building where doctors and nurses look after people who are ill or hurt. Some patients stay there for days. You can say: The ambulance took him to the hospital.',
    more: "In British English we say 'in hospital', with no 'the', when someone is a patient there. 'She is in hospital' means she is ill.",
    tip: "Compare 'She works at the hospital' (her job) with 'She is in hospital' (she is ill).",
  },
  station: {
    why: 'A station is a place where trains or buses stop and people get on and off. A train station has platforms and a ticket office. You can say: The bus station is next to the market.',
    more: "You can say 'train station' or 'bus station' to be clear. 'Station' is also in 'police station' and 'petrol station'.",
    tip: "Say 'at the station' for the place where you wait.",
  },
  office: {
    why: 'An office is a place where people work at desks, often with computers and telephones. You can say: She walks to the office every morning.',
    more: "'Office' also means a place for a special job, such as the school office or the post office.",
    tip: "Use 'work in an office' and 'go to the office'.",
  },
  kitchen: {
    why: 'The kitchen is the room in a home where we prepare and cook food. It has a cooker, a fridge and a sink. You can say: My mother is cooking in the kitchen.',
    more: 'Learn the other rooms in a home: living room, bedroom, bathroom.',
    tip: "Say 'in the kitchen' for the room, and use the verb 'cook' for the action.",
  },
  garden: {
    why: 'A garden is the area of ground next to a house, with grass, flowers or vegetables. You can say: The children play in the garden.',
    more: "In British English 'garden' is the whole area at the front or back of a house. Americans often say 'yard' for the grass part.",
    tip: "Say 'in the garden' and 'work in the garden'.",
  },
  market: {
    why: 'A market is a place where people sell food, clothes and other things, often from small tables called stalls. Many markets are outside. You can say: We buy fresh fruit at the market.',
    more: 'There are many kinds of market: a food market, a fish market and a flea market, where people sell old things.',
    tip: "Use 'go to the market' and 'at the market'.",
  },
  today: {
    why: "'Today' means the day that it is now. It is not yesterday and not tomorrow. You can say: Today is Friday, so we have a spelling test.",
    more: "'Today' can be an adverb ('I work today') and a noun ('Today is sunny').",
    tip: 'Learn the three time words together: yesterday, today, tomorrow.',
  },
  tomorrow: {
    why: "'Tomorrow' means the day after today. If today is Monday, tomorrow is Tuesday. You can say: Tomorrow we are going to the museum.",
    more: "We say 'tomorrow morning' and 'tomorrow night' with no 'in' or 'on'.",
    tip: "Use 'will' or 'going to' with tomorrow: 'I will call you tomorrow.'",
  },
  yesterday: {
    why: "'Yesterday' means the day before today. If today is Wednesday, yesterday was Tuesday. You can say: I visited my grandmother yesterday.",
    more: "Use the past tense with yesterday: 'I went', not 'I go'.",
    tip: "Say 'yesterday evening' or 'last night', not 'yesterday night'.",
  },
  morning: {
    why: "The morning is the early part of the day, from when you wake up until about twelve o'clock. You can say: I have breakfast in the morning.",
    more: "We say 'in the morning', 'in the afternoon' and 'in the evening', but 'at night'.",
    tip: "Say 'Good morning' as a greeting before twelve o'clock.",
  },
  evening: {
    why: "The evening is the part of the day between the afternoon and the night, from about six o'clock until bedtime. You can say: We have dinner at seven in the evening.",
    more: "We say 'Good evening' to greet people, but we say 'Good night' when we go to bed or leave late.",
    tip: "Use 'in the evening' with 'in', but 'at night' with 'at'.",
  },
  week: {
    why: 'A week is a period of seven days, for example from Monday to Sunday. You can say: There are fifty-two weeks in a year.',
    more: "We say 'this week', 'last week' and 'next week' with no 'in': 'I will see him next week.'",
    tip: "Use 'a week' to talk about time: 'two weeks', 'every week', 'once a week'.",
  },
  month: {
    why: 'A month is one of the twelve parts of a year, such as January or February. A month has 28, 29, 30 or 31 days. You can say: The course lasts three months.',
    more: "We say 'next month', 'last month' and 'this month' with no 'in' or 'on'.",
    tip: "'Month' and 'moon' are related words: the moon goes round the Earth about once a month.",
  },
  year: {
    why: 'A year is a period of twelve months, or 365 days. We say how old we are in years. You can say: She is ten years old.',
    more: 'A leap year has 366 days. It happens about every four years.',
    tip: "Say 'last year', 'this year' and 'next year'. Say 'a year ago' for a time in the past.",
  },
  hour: {
    why: 'An hour is a period of sixty minutes. A day has twenty-four hours. You can say: The lesson is one hour long.',
    more: "The letter 'h' is silent in 'hour'. We say 'an hour', not 'a hour'.",
    tip: "Remember the silent 'h': an hour, but a house.",
  },
  early: {
    why: "'Early' means before the usual or planned time. The opposite is 'late'. You can say: We had an early lunch, at half past eleven.",
    more: "'Early' can be an adjective ('an early bus') or an adverb ('I arrived early'). The word does not change.",
    tip: 'Learn the opposites together: early and late, first and last.',
  },
  eat: {
    why: 'To eat is to put food in your mouth, chew it and swallow it. We eat meals such as breakfast, lunch and dinner. You can say: I eat fruit every day.',
    more: "The past tense is irregular: eat, ate, eaten. 'I ate an apple yesterday.'",
    tip: "We also say 'have lunch' for 'eat lunch'. Both are correct.",
  },
  drink: {
    why: 'To drink is to take a liquid into your mouth and swallow it, such as water, tea or juice. You can say: I drink milk with my breakfast.',
    more: "The past tense is irregular: drink, drank, drunk. 'I drank two glasses of water.'",
    tip: "Use 'drink' for liquids and 'eat' for food. In British English we usually 'eat' soup.",
  },
  walk: {
    why: 'To walk is to move forward on your feet, one step after another, at a normal speed. You can say: We walk in the park on Sundays.',
    more: "'Walk' is also a noun: 'We went for a walk.' The 'l' is silent: say 'wawk'.",
    tip: "Use 'on foot' for the same idea: 'I go to school on foot' means 'I walk to school'.",
  },
  speak: {
    why: 'To speak is to say words aloud with your voice. We speak a language and we speak to people. You can say: She speaks three languages.',
    more: "The past tense is irregular: speak, spoke, spoken. 'He spoke to the teacher.'",
    tip: "Use 'speak' with languages: 'I speak Arabic and English.' Use 'say' for words: 'say hello'.",
  },
  listen: {
    why: 'To listen is to pay attention to a sound so that you hear it well. You listen on purpose. You can say: Listen to the teacher, please.',
    more: "We say 'listen to' and then what you listen to: 'listen to music', 'listen to the teacher'. Do not say 'listen music'.",
    tip: 'Remember the pair: you hear a sound by accident, but you listen on purpose.',
  },
  read: {
    why: 'To read is to look at written words and understand them. You can read a book, a sign or a message. You can say: I read the newspaper on the bus.',
    more: "'Read' is spelt the same in the present and the past, but we say it differently: 'I read' (reed) now, and 'I read' (red) yesterday.",
    tip: "Say 'read a book' and 'read aloud'. 'Aloud' means in a voice that other people can hear.",
  },
  write: {
    why: 'To write is to make words with a pen, a pencil or a keyboard. You write letters, notes and emails. You can say: I write a letter to my friend every month.',
    more: "The past tense is irregular: write, wrote, written. The 'w' is silent: say 'rite'.",
    tip: "Do not mix up the sound-alikes 'write' (make words) and 'right' (correct).",
  },
  buy: {
    why: 'To buy is to get something by paying money for it. You give money, and the seller gives you the thing. You can say: She bought some bread and milk.',
    more: "The past tense is irregular: buy, bought. The opposite is 'sell'.",
    tip: "Use 'buy something from' a place or a person: 'I bought a book from the shop.'",
  },
  help: {
    why: 'To help is to do something useful for another person, so that a task is easier for them. You can say: My brother helps me with my homework.',
    more: "We say 'help someone' or 'help someone with something'.",
    tip: "Learn the polite phrases 'Can you help me?' and 'Can I help you?'.",
  },
  learn: {
    why: 'To learn is to get new knowledge or a new skill, by study or by practice. You can say: Children learn quickly.',
    more: "'Learn' is not the same as 'teach'. A teacher teaches, and a student learns.",
    tip: "Use 'learn to do something': 'I am learning to swim.'",
  },
  work: {
    why: 'To work is to do a job, usually to earn money. It can also mean to use effort to do a task. You can say: He works in a bank.',
    more: "'Work' is also a noun: 'I go to work by bus.' We say 'at work' and 'go to work' with no 'the'. We say 'a lot of work', not 'a lot of works'.",
    tip: "Use 'work' for a job and 'play' for fun: 'I work in the morning and play football in the evening.'",
  },
  sleep: {
    why: 'To sleep is to rest with your eyes closed, when your body and mind are quiet. Most people sleep at night. You can say: I sleep for eight hours every night.',
    more: "The past tense is irregular: sleep, slept. 'Asleep' describes the state: 'The baby is asleep.'",
    tip: "Say 'go to sleep' for starting to sleep and 'fall asleep' for the moment you begin.",
  },
  happy: {
    why: "'Happy' means feeling good and pleased, usually because something nice has happened. You can say: I am happy because it is my birthday.",
    more: "The opposite is 'sad' or 'unhappy'. The noun is 'happiness'. Before '-er' and '-est' the 'y' changes to 'i': happier, happiest.",
    tip: "Say 'I am happy' for a feeling. Use 'Happy birthday' to wish someone well.",
  },
  sad: {
    why: "'Sad' means feeling unhappy, often because something bad has happened or because you miss someone. You can say: The film made me sad.",
    more: "The opposite is 'happy'. The comparative has two 'd' letters: sadder.",
    tip: "Use 'feel sad' or 'be sad': 'I feel sad today.'",
  },
  tired: {
    why: "'Tired' means that you need to rest or sleep because you have used a lot of energy. You can say: She went to bed early because she was tired.",
    more: "'Tired' describes how you feel: 'I am tired.' 'Tiring' describes what makes you tired: 'a tiring day'.",
    tip: 'Learn the pair: I am tired (the feeling), and the walk was tiring (the cause).',
  },
  angry: {
    why: "'Angry' is a strong feeling. You may feel angry when someone is unfair to you, and your face can go red and hot. You can say: She was angry with her brother.",
    more: "We say 'angry with a person' and 'angry about a thing': 'She is angry with her brother about the mess.'",
    tip: 'Learn the strength of the words: annoyed (a little), angry (more), furious (very much).',
  },
  afraid: {
    why: "'Afraid' means feeling fear because something may hurt you, or because you are worried. You can say: He is afraid of the dark.",
    more: "We say 'afraid of' something: 'afraid of spiders'. We can also say 'scared'.",
    tip: "Use 'I'm afraid' to say sorry politely: 'I'm afraid I can't come.'",
  },
  excited: {
    why: "'Excited' means feeling very happy and full of energy about something that is going to happen. You can say: I am excited about my holiday.",
    more: "We say 'excited about' an event. 'Exciting' describes the thing: 'an exciting match'.",
    tip: "Remember '-ed' for the feeling and '-ing' for the cause: I am excited, and the film is exciting.",
  },
  worried: {
    why: "'Worried' means feeling unhappy and nervous because you think something bad might happen. You can say: Her mother was worried when she came home late.",
    more: "We say 'worried about' something. The noun and the verb are 'worry', and 'y' changes to 'ied': worried.",
    tip: "Use the phrase 'Don't worry' to comfort someone.",
  },
  bored: {
    why: "'Bored' means feeling unhappy because something is not interesting, or because you have nothing to do. You can say: I am bored. There is nothing to do.",
    more: "We say 'bored with' or 'bored of' something. 'Boring' describes the thing: 'a boring film'.",
    tip: 'Remember: if a lesson is boring, you feel bored.',
  },
  proud: {
    why: "'Proud' means feeling pleased about something good that you or someone you love has done. You can say: He is proud of his sister's exam result.",
    more: "We say 'proud of' someone or something: 'I am proud of my son.' The noun is 'pride'.",
    tip: "Use 'proud of', not 'proud about'.",
  },
  calm: {
    why: "'Calm' means relaxed and quiet, without worry or anger. The sea or the weather can be calm too. You can say: The sea was calm this morning.",
    more: "'Calm' can also be a verb: 'The teacher calmed the class.' The 'l' is silent: say 'kahm'.",
    tip: "Use 'stay calm' and 'keep calm' to give advice.",
  },
  book: {
    why: 'A book is a set of printed pages joined together in a cover. We read books for pleasure or to study. You can say: She borrowed a book from the library.',
    more: "'Book' is also a verb: 'I booked a table' means I arranged a table before I arrived.",
    tip: "Say 'read a book' and 'borrow a book from the library'.",
  },
  phone: {
    why: 'A phone is a device that you use to talk to people far away, send messages and use the internet. You can say: I call my grandmother on the phone.',
    more: "'Phone' is short for 'telephone'. A 'mobile phone' is one that you carry. Americans say 'cell phone'.",
    tip: "Say 'answer the phone' and 'make a phone call'.",
  },
  key: {
    why: 'A key is a small metal object that you put in a lock to open it. Keys open doors, cars and boxes. You can say: The key is in the lock.',
    more: "'Key' is also a button on a keyboard, and it can mean the most important part: 'the key to success'.",
    tip: "The plural is 'keys', not 'keies'.",
  },
  bag: {
    why: 'A bag is a container that you carry things in, made of cloth, plastic or leather. You can say: My school bag is very heavy.',
    more: 'There are many kinds of bag: a school bag, a shopping bag, a handbag and a sleeping bag.',
    tip: "Say 'in my bag' to tell where something is.",
  },
  chair: {
    why: 'A chair is a seat for one person, usually with four legs and a back. You can say: There are thirty chairs in the classroom.',
    more: "A chair with arms is an 'armchair'. A long seat for two or more people is a 'sofa' or a 'bench'.",
    tip: "Say 'sit on a chair' and 'stand up from a chair'.",
  },
  table: {
    why: 'A table is a piece of furniture with a flat top and legs. We eat, write or work at a table. You can say: We sit at the table to eat.',
    more: "We say 'at the table' when people sit around it and 'on the table' for things on top. 'Table' also means numbers or facts in rows and columns.",
    tip: "Learn 'set the table': it means to put plates, knives, forks and spoons on the table before a meal.",
  },
  water: {
    why: 'Water is the clear liquid that falls as rain, fills rivers and seas, and that we drink. You can say: I drink water when I am thirsty.',
    more: "We say 'some water' or 'a glass of water', not 'a water'.",
    tip: 'Learn the containers: a glass of water, a bottle of water.',
  },
  money: {
    why: 'Money is what we use to pay for things: coins and notes, or cards and apps. You can say: How much money do you have?',
    more: "We say 'some money' and 'a lot of money', not 'a money'. For one piece we say 'a coin' or 'a note'.",
    tip: "Use 'spend money' in a shop and 'save money' in a bank.",
  },
  clock: {
    why: 'A clock is a device that shows the time, often with a round face, numbers and hands. It can hang on a wall or stand on a table. You can say: The clock says ten past nine.',
    more: "A clock that is 'slow' shows an earlier time than the real time. A clock that is 'fast' shows a later time.",
    tip: 'A clock stays in one place. A watch is a small clock that you wear on your wrist.',
  },
  door: {
    why: 'A door is the part of a building or a room that you open to go in or out. It can be made of wood, glass or metal. You can say: Someone is knocking at the door.',
    more: "We open, close, lock and knock on a door. The plural is 'doors'.",
    tip: "Learn the phrase 'next door': 'My neighbour lives next door' means in the next house.",
  },
  window: {
    why: 'A window is a glass opening in a wall that lets in light and air. You can look out through it. You can say: The cat is sitting by the window.',
    more: "We open, close and look out of a window. 'Window shopping' means looking at things in a shop window without buying.",
    tip: "Say 'look out of the window', not 'look from the window'.",
  },
  letter: {
    why: 'A letter is a written message that you put in an envelope and send by post. You can say: I got a letter from my grandmother.',
    more: "'Letter' also means a sign of the alphabet, such as A or B. The word has two meanings.",
    tip: "Say 'write a letter' and 'post a letter'. Americans say 'mail a letter'.",
  },
}
