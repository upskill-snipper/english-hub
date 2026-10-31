import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Everyday Vocabulary Flashcards: the explanation a student sees after each
 * answer, by question key
 * (src/data/games/banks/everyday-vocab-flashcards.ts). Written with AI on 16
 * October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: explanations for the 176 new cards
 * (home, school, shops, travel, health, work and feelings, at A1, A2 and B1),
 * none naming another card's meaning unless the two share a fact and so are
 * never dealt together; the first 64 are unchanged. Written with AI and checked
 * against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second reader, who rewrote 7 entries: dentist
 * (it called a dentist a doctor), pleased (its back line changed, so its note
 * now says who speaks it), seat (its note on the Jane Eyre line said "she" for
 * two different women), comfortable ("COMF-ta-bul" taught the wrong vowel; it
 * is KUMF-tuh-bul), revise (it said only Americans use revise for improving
 * writing), souvenir (in French the noun means a memory, not "to remember"),
 * and annoyed (a tip that taught nothing).
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
  bed: {
    why: 'A bed is the thing you lie on at night to sleep. Most beds have a soft top, a sheet and a pillow for your head. You can say: My bed is next to the window.',
    more: "We say 'go to bed' for the time you start to sleep, and 'in bed' for where you are: 'I read in bed.' There is no 'the'.",
    tip: "On the back is a line from A Christmas Carol. 'Went to bed' means he lay down to sleep.",
  },
  sofa: {
    why: 'A sofa is a long, soft seat with a back, where two or more people can sit together. You can say: We all sat on the sofa to watch the film.',
    more: "In British English a sofa is also called a 'settee' or a 'couch'. It usually stands in the living room.",
    tip: "Say 'sit on the sofa', not 'sit in the sofa'.",
  },
  cup: {
    why: 'A cup is a small, round container with a handle. We drink hot drinks like tea and coffee from it. You can say: Mum drinks two cups of coffee in the morning.',
    more: "A cup has a handle; a glass does not. We say 'a cup of tea' and 'a glass of water'.",
    tip: "Learn 'cup' with what goes in it: a cup of tea, a cup of hot chocolate.",
  },
  plate: {
    why: 'A plate is a flat, round dish. You put your food on it when you eat. You can say: I put two pieces of toast on my plate.',
    more: 'A bowl is deeper than a plate, for soup or cereal.',
    tip: 'After a meal, take your plate to the kitchen. It is polite.',
  },
  shower: {
    why: 'A shower is water that comes down on you from above, so you can wash your body standing up. It is also the thing that sprays the water. You can say: I have a quick shower after football.',
    more: "We say 'have a shower' in British English and 'take a shower' in American English.",
    tip: "A 'shower' is also a short fall of rain: 'There will be showers this afternoon.'",
  },
  bathroom: {
    why: 'A bathroom is the room where you wash. It often has a bath or a shower, a sink and a toilet. You can say: There is a towel on the floor of the bathroom.',
    more: "In British English, people often say 'toilet' or 'loo' for the room with the toilet. 'Bathroom' is polite too.",
    tip: "To ask politely, say 'Excuse me, where is the toilet, please?'",
  },
  pen: {
    why: 'A pen is a thing you write with. It has ink inside, so the words stay on the paper. You can say: I need a red pen to mark my work.',
    more: 'A pencil writes in grey, and you can rub it out. Ink from a pen is harder to remove.',
    tip: 'In exams you usually write in black pen. Bring a spare one.',
  },
  lesson: {
    why: 'A lesson is a time when a teacher teaches you a subject, for example a maths lesson. You can say: We have six lessons every day.',
    more: "We say 'in the lesson' or 'during the lesson'. A driving lesson teaches you to drive.",
    tip: "Say the subject before 'lesson': an English lesson, a music lesson.",
  },
  homework: {
    why: 'Homework is the work your teacher gives you to do at home, after school. You can say: I finished my homework before dinner.',
    more: "Homework is uncountable: say 'some homework' or 'a piece of homework', never 'a homework' or 'homeworks'.",
    tip: "Say 'do your homework', not 'make your homework'.",
  },
  question: {
    why: 'A question is what you ask when you want to know something. In writing, a question ends with a question mark. You can say: Put up your hand if you have a question.',
    more: "We 'ask' a question. Question words are who, what, where, when, why and how.",
    tip: "Use 'ask a question', not 'make a question'.",
  },
  answer: {
    why: 'An answer is what you say or write back when someone asks you something. You can say: Do you know the answer to number three?',
    more: "'Answer' is also a verb: 'Please answer the phone.' We say 'the answer to' a question.",
    tip: 'In a test, read the question twice before you write your answer.',
  },
  student: {
    why: 'A student is a person who is learning, at a school, a college or a university. You can say: My sister is a student at the university in Leeds.',
    more: "In British schools, children are often called 'pupils', and older learners are called 'students'.",
    tip: "Use 'a student of' a subject: 'a student of music'.",
  },
  bread: {
    why: 'Bread is a food made from flour, water and yeast, and baked in an oven. You can say: We had soup and bread for lunch.',
    more: "Bread is uncountable: say 'some bread', 'a loaf of bread' or 'a slice of bread', not 'a bread'.",
    tip: 'Learn the pieces: a loaf is the whole bread, and a slice is one thin piece.',
  },
  milk: {
    why: 'Milk is the white drink that comes from cows, goats and other animals. You can say: I like cold milk with my cereal.',
    more: "Milk is uncountable: 'some milk', 'a glass of milk', 'a bottle of milk'.",
    tip: "In a British cafe, people may ask 'Milk and sugar?' They mean in your tea.",
  },
  cheap: {
    why: 'Something cheap does not cost much money. You can say: The bus is cheap, but a taxi costs a lot.',
    more: "The opposite is 'expensive'. Be careful: 'cheap' can also mean of poor quality, like cheap shoes that soon break.",
    tip: "Say 'cheaper' and 'cheapest' to compare: 'This shop is cheaper than that one.'",
  },
  expensive: {
    why: "Something expensive costs a lot of money. You can say: That watch is expensive, so I can't buy it.",
    more: "The opposite is 'cheap'. We say 'more expensive' and 'most expensive', never 'expensiver'.",
    tip: "Ask 'How much is it?' before you buy something that may be expensive.",
  },
  shoes: {
    why: 'Shoes are what you wear on your feet when you go outside. They are often made of leather, cloth or plastic. You can say: I need to clean my school shoes.',
    more: "We say 'a pair of shoes' for two shoes. Trainers are shoes for sport.",
    tip: "Say 'put on your shoes' and 'take off your shoes'.",
  },
  bus: {
    why: 'A bus is a big vehicle that carries lots of people along the roads. It stops at bus stops. You can say: The number 12 bus goes to the town centre.',
    more: "We say 'by bus' with no 'the': 'I go to school by bus.' We get on and get off a bus.",
    tip: "Say 'catch the bus' when you get it in time, and 'miss the bus' when you are too late.",
  },
  train: {
    why: 'A train is a long vehicle that runs on a railway, with many carriages for people or goods. You can say: The train to Glasgow leaves at noon.',
    more: "We say 'by train' with no 'the'. You get on a train at a station.",
    tip: "Say 'get on the train' and 'get off the train'.",
  },
  ticket: {
    why: 'A ticket is a small piece of paper or card that shows you have paid to travel, or to go into a place like a cinema. You can say: I bought two tickets for the concert.',
    more: "In British English, a 'single' ticket is for one way, and a 'return' ticket is for going and coming back.",
    tip: 'Keep your ticket until the end of your trip, because someone may ask to see it.',
  },
  map: {
    why: "A map is a drawing that shows where places, roads and rivers are. You can say: Let's look at the map to find the beach.",
    more: "A book of maps is an 'atlas'. Many people use a map on their phone.",
    tip: "Use 'on the map': 'Can you find London on the map?'",
  },
  holiday: {
    why: 'A holiday is a time when you do not go to school or work. People often go on a trip on holiday. You can say: We went to the seaside for a holiday.',
    more: "British English says 'on holiday' and 'the summer holidays'. American English says 'vacation'.",
    tip: "Ask a friend: 'Where did you go on holiday?'",
  },
  hotel: {
    why: 'A hotel is a building where you pay to stay the night and eat when you are travelling. You can say: The hotel room had a big bed and a view of the sea.',
    more: "We 'book' a room in a hotel and 'stay at' a hotel.",
    tip: 'At the hotel desk, give your name and say that you have a booking.',
  },
  ill: {
    why: 'If you are ill, you are not well in your body, for example with a cold. You can say: My brother is ill, so he is not at school today.',
    more: "'Ill' usually comes after the verb: 'She is ill.' Before a noun we say 'sick': 'a sick child'.",
    tip: "To say why you were away, say 'I was ill yesterday.'",
  },
  head: {
    why: 'Your head is the top part of your body. Your eyes, ears, nose and mouth are on it, and your brain is inside. You can say: She put her hat on her head.',
    more: "The head of a school or a company is the person in charge: 'the head teacher'.",
    tip: "Say 'nod your head' for yes and 'shake your head' for no.",
  },
  hand: {
    why: 'Your hand is the part at the end of your arm. It has four fingers and a thumb. You can say: Hold my hand when we cross the road.',
    more: 'Most people write with their right hand. Left-handed people write with their left hand.',
    tip: "Say 'wash your hands', and 'shake hands' when you meet someone.",
  },
  tooth: {
    why: 'A tooth is one of the hard white things in your mouth that you use to bite and chew food. You can say: My tooth hurts when I eat ice cream.',
    more: "The plural is irregular: one tooth, two teeth. Never say 'tooths'.",
    tip: 'Brush your teeth twice a day: in the morning and before bed.',
  },
  job: {
    why: 'A job is the work you do to earn money, for example as a nurse or a driver. You can say: My uncle has a job in a big hotel.',
    more: "'Job' is countable: 'a job', 'two jobs'. 'Work' is usually uncountable: 'I have a lot of work.'",
    tip: "Ask politely: 'What do you do?' It means 'What is your job?'",
  },
  waiter: {
    why: 'A waiter is a person who works in a restaurant or a cafe. A waiter brings the menu, writes down your order and carries the food to your table. You can say: The waiter asked if we wanted dessert.',
    more: "A woman can be called a 'waitress', but many people now say 'waiter' for everyone.",
    tip: "To call a waiter politely, catch their eye and say 'Excuse me'.",
  },
  hungry: {
    why: 'If you are hungry, you want or need food. Your stomach may make a noise when you are hungry. You can say: After football I am always very hungry.',
    more: 'On the back is a line from Animal Farm. The animals had little food, so they were cold and hungry.',
    tip: "Say 'I'm hungry' for food and 'I'm thirsty' for a drink.",
  },
  thirsty: {
    why: 'If you are thirsty, you want or need something to drink. You can say: It was a hot day, so we were all thirsty.',
    more: "'Thirsty' comes from 'thirst', the feeling of needing a drink.",
    tip: 'Drink water when you are thirsty, especially in hot weather.',
  },
  fridge: {
    why: 'A fridge is a tall, cold box in the kitchen that keeps food and drinks cold and fresh. You can say: Put the butter back in the fridge after breakfast.',
    more: "'Fridge' is short for 'refrigerator'. A 'freezer' is colder and keeps food frozen.",
    tip: "Say 'in the fridge': 'There is some cheese in the fridge.'",
  },
  cupboard: {
    why: 'A cupboard is a space with a door where you keep things, such as plates, food or clothes. Kitchens have cupboards on the walls. You can say: The plates are in the cupboard next to the sink.',
    more: "Say it 'KUB-erd': the 'p' is silent. A tall cupboard for clothes is often called a 'wardrobe'.",
    tip: 'Learn the parts of a kitchen: cupboard, sink, cooker and table.',
  },
  upstairs: {
    why: 'Upstairs means on or to a higher floor of a building. You can say: The bedrooms are upstairs, and the kitchen is downstairs.',
    more: "On the back is a line from Jane Eyre: 'ran upstairs' means ran up to a higher floor.",
    tip: "The opposite is 'downstairs'. Do not say 'go to upstairs': say 'go upstairs'.",
  },
  tidy: {
    why: 'Something tidy is neat, with everything in its right place. You can say: My desk is tidy, so I can find my pens.',
    more: "The opposite is 'untidy' or 'messy'. 'Tidy' is also a verb: 'Please tidy your room.'",
    tip: 'Keep your school bag tidy, and you will not lose your homework.',
  },
  comfortable: {
    why: 'Comfortable means relaxed, or making your body feel relaxed. A comfortable chair is soft and nice to sit in, and a comfortable person feels at ease. You can say: These shoes are comfortable for walking.',
    more: "On the back is a line from Pride and Prejudice: 'you will be very comfortable there' means you will feel relaxed and at home.",
    tip: "Say it in three parts: KUMF-tuh-bul. The 'or' in the middle is almost silent.",
  },
  heating: {
    why: 'Heating is the system that keeps a building warm, with hot water pipes or warm air. You can say: The heating comes on at six in the morning.',
    more: 'We turn the heating on or off, and turn it up when we are cold.',
    tip: "Many British homes have 'central heating', with a radiator in each room.",
  },
  flat: {
    why: 'A flat is a set of rooms for living in, on one floor of a bigger building. You can say: My cousin lives in a flat above a shop.',
    more: "British English says 'flat'; American English says 'apartment'. 'Flat' is also an adjective meaning smooth and level.",
    tip: "Say which floor: 'a flat on the third floor'.",
  },
  rubbish: {
    why: 'Rubbish is the things you throw away because you do not want them, like old paper and food. You can say: Please take the rubbish out to the bin.',
    more: "British English says 'rubbish'; American English says 'trash' or 'garbage'. Rubbish is uncountable: 'some rubbish'.",
    tip: "People also say 'Rubbish' to mean 'That is not true' or 'That is very bad'.",
  },
  invite: {
    why: 'To invite someone is to ask them to come to a party, a meal or an event. You can say: Ella invited me to her birthday party.',
    more: "The noun is 'invitation': 'I got an invitation to the wedding.' We invite someone 'to' something.",
    tip: "To invite politely, say 'Would you like to come to my party?'",
  },
  timetable: {
    why: 'A timetable is a list that shows the times when things happen, like lessons at school or trains at a station. You can say: Our timetable says we have PE on Tuesdays.',
    more: 'A bus or train timetable shows when each one leaves.',
    tip: 'At the start of term, keep a copy of your timetable in your bag.',
  },
  break: {
    why: 'A break is a short time when you stop to rest, for example between lessons at school. You can say: We eat a snack at break.',
    more: "In British schools, the morning rest is called 'break' and the midday one is 'lunch'. At work, people have a 'tea break'.",
    tip: "Say 'take a break' or 'have a break': 'Let's have a break.'",
  },
  exam: {
    why: 'An exam is an important test that shows what you know about a subject. You can say: We have our English exam next week.',
    more: "'Exam' is short for 'examination'. You take or sit an exam, and you pass or fail it.",
    tip: 'Study a little every day before an exam, not all at once.',
  },
  mark: {
    why: 'A mark is a number or a letter that shows how good your work is. You can say: I got eight marks out of ten in the spelling test.',
    more: "We say 'get a mark', and 'full marks' when every answer is right. Teachers 'mark' work: it is a verb too.",
    tip: "Read your teacher's comments as well as your mark. They show you how to improve.",
  },
  subject: {
    why: 'A subject is something you study at school, such as maths, science or history. You can say: Science is my favourite subject.',
    more: "In grammar, the subject of a sentence is who or what does the action: in 'Sam runs', the subject is 'Sam'.",
    tip: 'Learn your school subjects in English: maths, science, English, history, geography, art, music and PE.',
  },
  library: {
    why: 'A library is a place with many books, where you can read them, or borrow them for a while. You can say: The school library has computers too.',
    more: "Do not confuse 'library' with 'bookshop'. In a bookshop you buy books.",
    tip: 'You often need a library card to take books home.',
  },
  dictionary: {
    why: "A dictionary is a book or an app that gives the meanings of words, in order from A to Z. You can say: I looked up 'castle' in my dictionary.",
    more: 'A bilingual dictionary gives the words in two languages, for example English and Arabic.',
    tip: "Use a learner's dictionary: it gives simple meanings and example sentences.",
  },
  spell: {
    why: "To spell a word is to say or write its letters in the right order. You can say: Can you spell 'Wednesday', please?",
    more: 'On the back is a line from Great Expectations. Pip asks Joe how he spells his name. Joe can hardly read or write, so he says he does not spell it at all.',
    tip: "The past is 'spelt' in British English and 'spelled' in American English.",
  },
  practise: {
    why: 'To practise is to do something again and again so that you get better at it. You can say: I practise my spellings every evening.',
    more: "In British English, 'practise' with an s is the verb, and 'practice' with a c is the noun: 'football practice'.",
    tip: 'A little every day works better than one long time once a week.',
  },
  pupil: {
    why: 'A pupil is a child who goes to a school. You can say: The pupils lined up in the playground.',
    more: "'Pupil' is common in British schools. Older learners are usually called 'students'.",
    tip: "Your 'pupil' is also the black circle in the middle of your eye.",
  },
  borrow: {
    why: 'To borrow something is to take it from someone and give it back later. You can say: Can I borrow your ruler?',
    more: "'Borrow' and 'lend' are opposites. You borrow from someone, and they lend to you: 'Sam lent me his pen.'",
    tip: "Ask politely: 'Could I borrow your book, please?'",
  },
  queue: {
    why: 'A queue is a line of people waiting for something, like a bus or a turn at a shop till. You can say: We stood in the queue for the cinema.',
    more: "British English says 'queue'; American English says 'line'. 'Queue' is also a verb: 'We queued for an hour.'",
    tip: 'Spell it carefully: q-u-e-u-e. It sounds like the letter Q.',
  },
  change: {
    why: 'Change is the money you get back when you pay more than the price. You can say: The milk was one pound, I paid two, and my change was one pound.',
    more: "'Change' also means coins: 'Do you have any change for the parking machine?'",
    tip: 'Always check your change before you leave the till.',
  },
  size: {
    why: 'Size is how big or small something is. Clothes and shoes come in sizes, like small, medium and large. You can say: Do you have this jumper in a bigger size?',
    more: "Ask 'What size are you?' about clothes or shoes. British shoe sizes are different from European ones.",
    tip: 'Try clothes on to check the size before you buy them.',
  },
  sale: {
    why: 'A sale is a time when a shop sells things at lower prices than usual. You can say: Everything in the sale is half price.',
    more: "'For sale' means something can be bought: 'This house is for sale.'",
    tip: 'After Christmas, many shops in Britain have big sales.',
  },
  cost: {
    why: 'To cost means to have a price. When something costs ten pounds, you must pay ten pounds for it. You can say: How much does a cinema ticket cost?',
    more: "The past is the same: 'It cost a lot.' 'Cost' is also a noun: 'the cost of food'.",
    tip: "Ask 'How much does it cost?' or simply 'How much is it?'",
  },
  pay: {
    why: 'To pay is to give money for something you buy, or for work someone does. You can say: I paid for the tickets with my card.',
    more: "The past is 'paid', not 'payed'. We 'pay for' a thing and 'pay' a person: 'I paid the driver.'",
    tip: "On the back, from Great Expectations, 'pay all charges' means pay for everything that costs money.",
  },
  cash: {
    why: 'Cash is money in coins and notes, not on a card or a phone. You can say: The ice cream van only takes cash.',
    more: 'Some small shops and market stalls only take cash. A cash machine gives you notes from your bank.',
    tip: "Say 'Can I pay in cash?' or 'Can I pay by card?'",
  },
  basket: {
    why: 'A basket is a container for carrying things, often made of plastic or thin wood. Shops have baskets for your shopping. You can say: I put the bread and milk in my basket.',
    more: "A big shopping basket on wheels is a 'trolley' in British English.",
    tip: 'Take a basket for a few things and a trolley for a lot.',
  },
  fit: {
    why: "To fit is to be the right size for someone. If your shoes fit, they are not too big or too small. You can say: This coat doesn't fit me; it is too small.",
    more: "'Fit' is also an adjective: someone who is fit is strong and well.",
    tip: "In a shop, ask 'Can I try this on to see if it fits?'",
  },
  price: {
    why: 'The price of something is how much money it costs. You can say: The price of the jeans is twenty pounds.',
    more: "On the back is a line from The Sign of Four: 'what price would you ask' means how much money you want for something.",
    tip: "Look for the price on a label, or ask 'What is the price of this?'",
  },
  journey: {
    why: 'A journey is a trip from one place to another, often a long one. You can say: The journey from London to Edinburgh takes four hours by train.',
    more: "We say 'go on a journey' and 'make a journey'.",
    tip: "Ask 'How was your journey?' when someone arrives after travelling.",
  },
  platform: {
    why: 'A platform is the flat place next to the tracks at a station, where you wait and get on or off a train. You can say: The train to Bristol leaves from platform four.',
    more: 'Stations have signs with platform numbers. Listen for messages about changes.',
    tip: 'Stand behind the yellow line on the platform until the train stops.',
  },
  passport: {
    why: 'A passport is a small official book from your country, with your photo. You show it when you travel to another country. You can say: Please show your passport at the airport.',
    more: 'A passport has a number and a date when it ends. Check the date before you travel.',
    tip: 'Keep your passport in a safe place, and take a photo of the first page.',
  },
  luggage: {
    why: 'Luggage is the bags and cases you take with you when you travel. You can say: We carried our luggage to the hotel.',
    more: "'Luggage' is uncountable: say 'some luggage' or 'a piece of luggage', never 'a luggage' or 'luggages'.",
    tip: "'Baggage' means the same, and is often used at airports.",
  },
  traffic: {
    why: 'Traffic is all the cars, buses, lorries and bikes on a road. You can say: There is always a lot of traffic on Friday afternoons.',
    more: "A 'traffic jam' is when the traffic cannot move. 'Traffic lights' tell cars when to stop and go.",
    tip: "Traffic is uncountable: say 'a lot of traffic', not 'a lot of traffics'.",
  },
  arrive: {
    why: 'To arrive is to get to a place at the end of a trip. You can say: The plane arrives in Spain at ten.',
    more: "We say 'arrive at' a building or a small place, and 'arrive in' a town or a country: 'arrive at school', 'arrive in London'.",
    tip: "Never say 'arrive to': say 'arrive at' or 'arrive in'.",
  },
  tourist: {
    why: 'A tourist is a person who visits a place on holiday, to see it and enjoy it. You can say: In summer the town is full of tourists.',
    more: "A place that tourists visit is a 'tourist attraction'. 'Tourism' is the business of holidays.",
    tip: 'A tourist information centre gives free maps and advice.',
  },
  seat: {
    why: 'A seat is a place where you can sit, such as a chair or a place on a bus. You can say: There are no empty seats on the train.',
    more: "On the back is a line from Jane Eyre. A woman in a shop points to a seat, and Jane, who tells the story, is so tired that she 'sank into' it.",
    tip: "Ask politely: 'Excuse me, is this seat free?'",
  },
  airport: {
    why: 'An airport is a place where planes take off and land, with buildings for the people who fly. You can say: We had to be at the airport two hours before our flight.',
    more: 'At an airport you check in, go through security and wait at a gate.',
    tip: "Say 'at the airport': 'I'll meet you at the airport.'",
  },
  coach: {
    why: 'A coach is a comfortable bus for long trips between towns, or for school outings. You can say: The coach to the airport leaves every hour.',
    more: "A coach is also a person who trains a sports team: 'our football coach'.",
    tip: 'In British English, a bus goes around a town, and a coach goes between towns.',
  },
  headache: {
    why: 'A headache is a pain that you feel in your head. You can say: I went to bed early because I had a headache.',
    more: "We say 'have a headache'. Other aches: toothache, earache, stomach ache.",
    tip: 'Drink some water and sit quietly when you have a headache.',
  },
  temperature: {
    why: 'Temperature is how hot or cold something is. When you are ill, a high temperature means your body is too hot. You can say: The nurse said I had a temperature.',
    more: "We measure temperature in degrees: 'It is twenty degrees today.'",
    tip: "In weather reports, listen for the temperature and the word 'degrees'.",
  },
  dentist: {
    why: "A dentist is a person whose job is to look after people's teeth. You can say: The dentist cleaned my teeth and said they were fine.",
    more: "We say 'go to the dentist' or 'go to the dentist's', meaning the dentist's surgery.",
    tip: 'Visit the dentist twice a year, even when your teeth do not hurt.',
  },
  healthy: {
    why: 'Healthy means well and strong, or good for your body. Fruit is healthy food, and a person who is not ill is healthy. You can say: Walking every day keeps you healthy.',
    more: "The noun is 'health': 'Good food is important for your health.' The opposite is 'unhealthy'.",
    tip: 'Learn the pair: healthy food, and a healthy person.',
  },
  cough: {
    why: 'To cough is to push air out of your throat with a short, loud noise. People cough when they have a cold, or when there is smoke. You can say: He coughed all night.',
    more: "Say it 'koff': 'ough' sounds like 'off' here. 'Cough' is also a noun: 'a bad cough'.",
    tip: "The letters 'ough' make different sounds: cough, through, though.",
  },
  pain: {
    why: 'Pain is the bad feeling in part of your body when it is hurt or ill. You can say: I have a pain in my back.',
    more: "We say 'a pain in' a part of the body. 'Painful' means it hurts: 'a painful knee'.",
    tip: "A doctor may ask: 'Where is the pain?' Point to the place.",
  },
  chemist: {
    why: 'A chemist is a shop where you can buy medicine, and things like soap and plasters. You can say: Dad bought some medicine at the chemist.',
    more: "In British English we say 'the chemist' or 'the chemist's'. In American English it is a 'pharmacy' or a 'drugstore'.",
    tip: 'A chemist can also give advice when you feel a little ill.',
  },
  rest: {
    why: 'To rest is to relax, sleep or stop working for a while, so that you feel better. You can say: The doctor told me to rest at home.',
    more: "'Rest' is also a noun: 'have a rest'. 'The rest' means what is left: 'the rest of the cake'.",
    tip: 'When you are ill, rest and drink plenty of water.',
  },
  exercise: {
    why: 'Exercise is moving your body, for example by running or swimming, to keep it strong. You can say: Dancing is good exercise.',
    more: "We say 'do exercise' or 'take exercise'. An 'exercise' is also a piece of work in a lesson: 'Do exercise 3.'",
    tip: 'Try to do some exercise every day, even a short walk.',
  },
  sore: {
    why: 'Sore means painful, often because a part of your body is hurt or tired. You can say: My feet are sore after the walk.',
    more: "We often say 'a sore throat', 'sore eyes' and 'a sore knee'.",
    tip: "Say 'I have a sore throat' when it hurts to swallow.",
  },
  boss: {
    why: 'Your boss is the person in charge of you at work. A boss tells workers what to do. You can say: My boss lets me go home early on Fridays.',
    more: "'Boss' is informal. People often use it for the person who owns or runs a business.",
    tip: 'At work, be polite to your boss, and ask questions when you are not sure.',
  },
  interview: {
    why: 'An interview is a meeting where someone asks you questions to see if you are right for a job or a place at a school. You can say: She was nervous before her interview.',
    more: "'Interview' is also a verb: 'They interviewed six people.' A reporter interviews people on TV too.",
    tip: 'Before an interview, think about why you want the job.',
  },
  meeting: {
    why: "A meeting is a time when people come together to talk about something. You can say: There is a parents' meeting at school tonight.",
    more: "We 'have' or 'hold' a meeting, and we are 'in a meeting' when we are busy in one.",
    tip: "Say 'Sorry, I'm in a meeting' when you cannot answer the phone.",
  },
  busy: {
    why: 'If you are busy, you have a lot to do and no free time. A place can be busy too, when it is full of people. You can say: The shop is busy on Saturdays.',
    more: "We say 'busy with' something: 'I am busy with my homework.' The opposite is 'free'.",
    tip: "Say 'I'm busy right now. Can we talk later?'",
  },
  earn: {
    why: 'To earn is to get money for the work you do. You can say: Teenagers can earn money by washing cars.',
    more: "You can also earn a prize or someone's thanks by doing well.",
    tip: "Do not confuse 'earn' (get money by working) with 'win' (get money by luck or in a game).",
  },
  manager: {
    why: 'A manager is a person who is in charge of a shop, a team or part of a business. You can say: The manager of the cafe hired two new waiters.',
    more: "We say 'the manager of' a place. A football team has a manager too.",
    tip: 'In a shop, if there is a problem, you can ask to speak to the manager.',
  },
  factory: {
    why: 'A factory is a big building where people and machines make things, like cars, clothes or food. You can say: My aunt works in a factory that makes biscuits.',
    more: "The plural is 'factories': the 'y' changes to 'ies'.",
    tip: 'Learn the places of work: a factory, an office, a shop, a farm and a hospital.',
  },
  team: {
    why: 'A team is a group of people who work or play together. You can say: Our school football team won the cup.',
    more: "In British English you can say 'The team is' or 'The team are'. Both are correct.",
    tip: "Say 'work as a team' when people help each other.",
  },
  nurse: {
    why: 'A nurse is a person whose job is to care for people who are ill or hurt, often in a hospital. You can say: The nurse gave the boy some medicine.',
    more: 'Nurses work with doctors. Men and women can both be nurses.',
    tip: 'In a British hospital, you can ask a nurse if you need help.',
  },
  uniform: {
    why: 'A uniform is the special clothes that everyone in a school, a team or a job wears, so they all look the same. You can say: Nurses and police officers wear a uniform.',
    more: "We say 'in uniform': 'The pupils were in uniform.' A school uniform often has a jumper and a tie.",
    tip: "'Uni' means one: in a uniform, everyone wears one style.",
  },
  nervous: {
    why: 'If you are nervous, you feel worried and a little afraid about something that is going to happen. You can say: I was nervous before I sang in the concert.',
    more: "We say 'nervous about' something. Your hands may shake when you are nervous.",
    tip: 'Take slow, deep breaths when you feel nervous.',
  },
  surprised: {
    why: 'If you are surprised, you feel that something you did not expect has happened. You can say: I was surprised to win the prize.',
    more: "We say 'surprised at' or 'surprised by' something. The thing is 'surprising': 'surprising news'.",
    tip: "On the back is a line from Jekyll and Hyde: 'I am not surprised at that' means 'I expected that'.",
  },
  lonely: {
    why: 'If you are lonely, you feel sad because you are alone, or because you have no friends near you. You can say: He felt lonely on his first day at the new school.',
    more: "Lonely is a feeling; 'alone' means only that nobody is with you. You can be alone and happy.",
    tip: 'If a friend seems lonely, ask them to join in.',
  },
  friendly: {
    why: 'Someone friendly is nice and warm to other people, and easy to talk to. You can say: The people in the village were very friendly to us.',
    more: "'Friendly' ends in '-ly', but it is an adjective, not an adverb: 'a friendly dog'.",
    tip: 'Smile and say hello: it is a friendly way to meet people.',
  },
  kind: {
    why: 'Someone kind is caring and helpful to other people. You can say: It is kind to help someone carry a heavy bag.',
    more: "On the back is a line from A Christmas Carol. 'It was very kind of you' is a polite way to say thank you.",
    tip: "'Kind' is also a noun meaning a type: 'What kind of music do you like?'",
  },
  shy: {
    why: 'Someone shy is quiet and a little afraid when they are with people they do not know. You can say: She was shy at first, but now she talks a lot.',
    more: "The noun is 'shyness'. Many people are shy when they speak in front of a class.",
    tip: 'Be patient with shy people. They often need time before they talk.',
  },
  pleased: {
    why: 'If you are pleased, you are happy about something. You can say: The teacher was pleased with our work.',
    more: "We say 'pleased with' a thing and 'pleased to' do something. On the back, from Pride and Prejudice, Elizabeth asks her sister Jane if she is happy about Elizabeth's news.",
    tip: "'Pleased to meet you' is a polite thing to say when you meet someone new.",
  },
  sorry: {
    why: "If you are sorry, you feel bad about something you did, or sad for someone who has a problem. You can say: I'm sorry I was late.",
    more: "Say 'Sorry?' with a rising voice when you did not hear: it means 'Can you say that again?'",
    tip: "A good apology: 'I'm sorry. It was my fault. It won't happen again.'",
  },
  scared: {
    why: 'If you are scared, you are frightened because you think something bad could happen to you. You can say: I was scared when the lights went off.',
    more: "We say 'scared of' something: 'scared of spiders'. 'Scary' describes the thing: 'a scary film'.",
    tip: "It is a little more informal than 'frightened'.",
  },
  rent: {
    why: 'Rent is the money you pay, often every month, to live in a home that someone else owns. You can say: Students often share a flat to pay less rent.',
    more: "'Rent' is also a verb: 'We rent a house near the school.' You can rent a car or a bike too.",
    tip: "Say 'pay the rent', and ask 'How much is the rent?'",
  },
  landlord: {
    why: 'A landlord is a person who owns a house or a flat and lets other people live in it for money. You can say: The landlord came to mend the shower.',
    more: "A woman who does this is sometimes called a 'landlady'. The people who live in the home are 'tenants'.",
    tip: 'If something breaks in a home you do not own, tell the landlord quickly.',
  },
  furniture: {
    why: 'Furniture means the big things in a room that you use, like tables, chairs, beds and sofas. You can say: We bought some new furniture for the bedroom.',
    more: "'Furniture' is uncountable: say 'some furniture' or 'a piece of furniture', never 'furnitures'.",
    tip: "On the back is a line from Great Expectations: 'solid and good' means strong and well made.",
  },
  repair: {
    why: 'To repair something is to make it work again after it is broken. You can say: The man repaired the broken window.',
    more: "'Fix' means the same and is more common in speaking. 'Repair' is also a noun: 'The car needs repairs.'",
    tip: 'If you cannot do it yourself, take it to a repair shop.',
  },
  neighbourhood: {
    why: 'Your neighbourhood is the area around your home and the people who live there. You can say: Our neighbourhood has a park and two small shops.',
    more: "It has the British spelling with 'our', like 'neighbour'. On the back, from Pride and Prejudice, 'changes in the neighbourhood' means new things in the area.",
    tip: 'To describe your neighbourhood, say what is near your home: a shop, a park, a station.',
  },
  flatmate: {
    why: 'A flatmate is a person you share a home with, who is not part of your family. You can say: My flatmate and I take turns to clean the kitchen.',
    more: "British English says 'flatmate'; American English says 'roommate'. A 'housemate' shares a house.",
    tip: 'Flatmates often share the cost of food and heating.',
  },
  mess: {
    why: 'A mess is when a place is untidy or dirty, with things everywhere. You can say: The kitchen was a mess after the party.',
    more: "'Messy' is the adjective: 'a messy room'. 'Make a mess' means to make a place untidy.",
    tip: "Say sorry and clean up if you make a mess at someone's house.",
  },
  electricity: {
    why: 'Electricity is the power that makes lights, fridges, televisions and computers work. You can say: The lights went off because the electricity stopped.',
    more: "Things that use it are 'electric' or 'electrical'. Be careful near electricity and water.",
    tip: 'Save electricity: switch off the lights when you leave a room.',
  },
  bill: {
    why: 'A bill is a piece of paper or a message that tells you how much money you must pay, for example for gas or a meal. You can say: The phone bill was high this month.',
    more: "In a British restaurant, ask for 'the bill'. In American English people say 'the check'.",
    tip: 'Check a bill carefully before you pay it.',
  },
  decorate: {
    why: 'To decorate a room is to make it look nicer, with paint, wallpaper or pictures. You can say: We decorated the classroom with our paintings.',
    more: "You can also decorate a cake or a tree: 'We decorated the Christmas tree.' The noun is 'decoration'.",
    tip: "Say 'decorate with': 'They decorated the room with balloons.'",
  },
  recycle: {
    why: 'To recycle is to use something again, or to make old things like paper, glass and plastic into new things. You can say: We recycle all our newspapers.',
    more: 'Recycling bins often have different colours for paper, glass and plastic.',
    tip: 'Before you put something in the bin, ask: can it be recycled?',
  },
  assignment: {
    why: 'An assignment is a piece of work your teacher gives you to do, often by a set day. You can say: I typed my English assignment on the computer.',
    more: "'Assignment' is common in colleges and universities. In schools, people often say 'homework' or 'project'.",
    tip: 'Write down the day each assignment must be in, so that you do not forget.',
  },
  deadline: {
    why: 'A deadline is the last day or time when something must be finished. You can say: The deadline for the competition is Friday at five.',
    more: "We say 'meet a deadline' when we finish in time, and 'miss a deadline' when we are late.",
    tip: 'Start early, so that you are not rushing at the last minute.',
  },
  research: {
    why: 'Research is careful study to find out new facts about something. You can say: We did research about rainforests for our project.',
    more: "'Research' is uncountable: 'some research', not 'a research'. You do research 'on' or 'into' a topic.",
    tip: 'When you do research online, check that the website can be trusted.',
  },
  revise: {
    why: 'To revise is to study again what you have learnt, so that you are ready for an exam. You can say: I revised my notes every evening before the test.',
    more: "'Revise' for an exam is British English; Americans say 'review'. In both, 'revise' can also mean to change and improve a piece of writing.",
    tip: 'Revise in short sessions, with rests in between, and test yourself.',
  },
  certificate: {
    why: 'A certificate is an official paper that shows you passed a test, finished a course or did something special. You can say: Everyone in the swimming club got a certificate.',
    more: 'A birth certificate is a paper that shows when and where you were born.',
    tip: 'Keep certificates flat and dry in a folder.',
  },
  attend: {
    why: 'To attend is to go to an event or a place, such as a school, a lesson or a meeting. You can say: Over a hundred parents attended the concert.',
    more: "'Attend' is formal; in speaking, people often say 'go to'. Do not add 'to': say 'attend a meeting'.",
    tip: 'Schools check that pupils come in every day.',
  },
  absent: {
    why: 'If you are absent, you are not at school or work when you should be there. You can say: Two teachers were absent because of colds.',
    more: "The noun is 'absence'. The opposite is 'present': 'Everyone was present today.'",
    tip: 'If you miss school, your parent should tell the school why.',
  },
  knowledge: {
    why: 'Knowledge is the facts and information that you know, and what you understand. You can say: Her knowledge of animals is amazing.',
    more: "Say it 'NOL-ij': the 'k' and the 'w' are silent. It is uncountable: never 'knowledges'.",
    tip: "Use 'a good knowledge of' a subject: 'a good knowledge of maths'.",
  },
  progress: {
    why: 'Progress is when you get better at something, or move forward, over time. You can say: My reading has made good progress this year.',
    more: "'Progress' is uncountable: say 'make progress', never 'make a progress'.",
    tip: 'Ask your teacher what you can do to make more progress.',
  },
  discuss: {
    why: 'To discuss something is to talk about it with other people, sharing ideas. You can say: The class discussed the end of the story.',
    more: "Do not add 'about': say 'discuss the plan', not 'discuss about the plan'. The noun is 'discussion'.",
    tip: 'In a discussion, listen to others, then give your own idea with a reason.',
  },
  behave: {
    why: 'To behave is to act in a good or a bad way. If you behave well, you are polite and follow the rules. You can say: The children behaved very well at the museum.',
    more: 'On the back is a line from A Christmas Carol. Mrs Cratchit asks Bob how their little son behaved at church.',
    tip: "'Behave yourself' means 'be good': parents say it to children.",
  },
  receipt: {
    why: 'A receipt is a piece of paper that shows what you bought and how much you paid. You can say: The shop put the receipt in my bag.',
    more: "Say it 'ri-SEET': the 'p' is silent.",
    tip: 'Keep the receipt in case you want to take something back.',
  },
  refund: {
    why: 'A refund is money that a shop gives back to you, usually when you return something. You can say: The headphones were broken, so the shop gave me a refund.',
    more: "'Refund' is also a verb: 'They refunded my money.' Say the noun 'REE-fund' and the verb 're-FUND'.",
    tip: "Ask politely: 'Can I have a refund, please?'",
  },
  bargain: {
    why: 'A bargain is something you buy for less than its usual price, so it is good value. You can say: These boots were a real bargain.',
    more: "'Bargain' is also a verb: to bargain is to talk about the price to make it lower, for example at a market.",
    tip: 'Look for bargains at markets and at the end of the season.',
  },
  discount: {
    why: 'A discount is an amount of money taken off the usual price. You can say: The cinema gives a discount to students.',
    more: "We say 'a ten per cent discount' or 'a discount of five pounds'.",
    tip: "Ask 'Is there a discount for students?' when you buy tickets.",
  },
  afford: {
    why: 'If you can afford something, you have enough money to pay for it. You can say: We saved for a year so we could afford the trip.',
    more: "It is usually used with 'can' or 'can't': 'I can't afford it.' After it, use 'to': 'afford to buy'.",
    tip: 'Before you buy something, ask yourself: can I really afford it?',
  },
  complain: {
    why: 'To complain is to say that something is wrong or not good enough, often to someone who can change it. You can say: We complained to the waiter that the soup was cold.',
    more: "The noun is 'complaint': 'make a complaint'. We complain 'about' a thing and 'to' a person.",
    tip: 'Complain politely: say what is wrong and what you would like.',
  },
  exchange: {
    why: 'To exchange something is to give it back and get a different thing instead, for example in a shop. You can say: I exchanged the blue shirt for a red one.',
    more: "'Exchange' is also a noun. The 'exchange rate' is how much of one money you get for another.",
    tip: "Say 'exchange it for' another thing: 'exchange it for a bigger size'.",
  },
  brand: {
    why: 'A brand is the name a company gives to the things it makes, so that you can know them. You can say: My favourite brand of cereal has a bird on the box.',
    more: 'Famous brands often have a logo: a picture or sign that is easy to remember.',
    tip: "A shop's own brand is often less expensive and just as good.",
  },
  offer: {
    why: 'An offer is a lower price, or something extra for free, for a short time. You can say: The supermarket has an offer on bananas this week.',
    more: "'Special offer' and 'two for one' are common in British shops. 'Offer' also means saying you will give or do something: 'Thanks for the offer.'",
    tip: 'Read the small print on an offer: it may end on a certain day.',
  },
  advertisement: {
    why: 'An advertisement is a notice, a picture or a short film that tries to make you buy something or go somewhere. You can say: There is an advertisement for a new phone on the bus.',
    more: "The short forms are 'advert' and 'ad'. Say it 'ad-VER-tis-ment' in British English.",
    tip: 'When you read an advertisement, ask: what does it want me to do?',
  },
  deliver: {
    why: "To deliver something is to bring it to someone's home or workplace. You can say: A van delivers our shopping every Friday.",
    more: "The noun is 'delivery': 'Delivery is free on orders over twenty pounds.'",
    tip: 'When you shop online, check when they will deliver it.',
  },
  delay: {
    why: 'A delay is a time when something happens later than planned. You can say: There was a delay because of an accident on the road.',
    more: "'Delay' is also a verb: 'The train was delayed.' 'Without delay' means at once.",
    tip: "Listen for 'delayed' in station messages: it means late.",
  },
  destination: {
    why: 'Your destination is the place that you are travelling to. You can say: The bus shows its destination on the front.',
    more: "A 'holiday destination' is a place where people go on holiday.",
    tip: 'When you buy a ticket, say your destination clearly.',
  },
  abroad: {
    why: 'Abroad means in or to another country. You can say: Many students study abroad for a year.',
    more: "We do not say 'to abroad' or 'in abroad': say 'go abroad' and 'live abroad'.",
    tip: 'Before you go abroad, check the date in your passport.',
  },
  departure: {
    why: 'Departure is the time when a train, bus or plane leaves, or the act of leaving. You can say: Our departure is at eight, so we must be early.',
    more: "The verb is 'depart', a formal word for 'leave'. Airports have a 'departures' area.",
    tip: 'At an airport, check the departures board for your gate.',
  },
  passenger: {
    why: 'A passenger is a person who travels in a car, bus, train or plane but is not driving it. You can say: The train was full of passengers going to work.',
    more: 'The driver or the pilot is not a passenger. A ship carries passengers too.',
    tip: 'The front passenger seat is the seat next to the driver.',
  },
  crowded: {
    why: 'If a place is crowded, it is full of people. You can say: The shops are always crowded before Christmas.',
    more: "A 'crowd' is a large group of people: 'There was a crowd at the match.'",
    tip: 'Hold your bag close to you in crowded places.',
  },
  local: {
    why: 'Local means near your home, or from the area where you live. You can say: My mum works at the local hospital.',
    more: "'The locals' are the people who live in a place. 'Local time' is the time in that place.",
    tip: 'Visit local shops and markets to find food from your area.',
  },
  cancel: {
    why: 'To cancel something is to decide that something planned will not happen. You can say: The school cancelled the trip because of the snow.',
    more: "In British English the past has two l's: 'cancelled'. The noun is 'cancellation'.",
    tip: "If you can't come, cancel early and say sorry.",
  },
  direction: {
    why: 'A direction is the way that someone or something is going or facing, such as north, or towards the town. You can say: We walked in the direction of the river.',
    more: "'Directions' are instructions for how to get somewhere: 'Can you give me directions to the station?'",
    tip: "Ask 'Which direction is it?' or 'Is it this way?'",
  },
  accommodation: {
    why: 'Accommodation is a place to stay or live, like a hotel, a flat or a room. You can say: The price of the holiday includes accommodation.',
    more: "Spell it with two c's and two m's: a-c-c-o-m-m-o-d-a-t-i-o-n. It is uncountable in British English.",
    tip: 'Book your accommodation early for the summer holidays.',
  },
  souvenir: {
    why: 'A souvenir is something you buy or keep to remember a place or a holiday. You can say: I brought back a small model of a castle as a souvenir.',
    more: "It comes from French, where 'souvenir' means 'a memory'. Say it 'soo-ven-EER'.",
    tip: 'Buy souvenirs from small local shops to help people in that place.',
  },
  appointment: {
    why: 'An appointment is a time you agree to meet someone, especially a doctor, a dentist or a teacher. You can say: My appointment with the doctor is at half past four.',
    more: "We 'make' an appointment, 'have' one, and 'cancel' one if we can't go.",
    tip: 'Arrive a few minutes early for an appointment.',
  },
  prescription: {
    why: 'A prescription is a note from a doctor that lets you get a medicine. You can say: The chemist gave me the tablets on my prescription.',
    more: 'In Britain, you take a prescription to a chemist or a pharmacy. Some medicines need one, and others do not.',
    tip: 'Take medicine on a prescription exactly as the doctor says.',
  },
  injury: {
    why: 'An injury is harm done to your body, for example in an accident or in sport. You can say: She hurt her ankle and had to stop playing because of the injury.',
    more: "The verb is 'injure', and someone who is hurt is 'injured': 'Two players were injured.'",
    tip: 'Stretching before sport helps to stop injuries.',
  },
  recover: {
    why: 'To recover is to get well again after you have been ill or hurt. You can say: He recovered quickly after he broke his arm.',
    more: "We say 'recover from' an illness. The noun is 'recovery'.",
    tip: 'Sleep and good food help you get well again.',
  },
  treatment: {
    why: 'Treatment is the care a doctor or nurse gives to make you better, such as medicine or exercises. You can say: The treatment for his arm took six weeks.',
    more: "The verb is 'treat': 'The doctor treated the cut.'",
    tip: "Ask the doctor: 'What treatment do I need?'",
  },
  patient: {
    why: 'A patient is a person who is getting care from a doctor, a dentist or a nurse. You can say: The waiting room was full of patients.',
    more: "'Patient' is also an adjective meaning able to wait calmly: 'Be patient.' Both words sound the same.",
    tip: 'Hospitals have visiting times when families can see a patient.',
  },
  emergency: {
    why: 'An emergency is a dangerous situation when you need help fast, like a fire or a bad accident. You can say: Only use this door in an emergency.',
    more: "In Britain, call 999 in an emergency. The 'emergency services' are the police, the fire service and the ambulance.",
    tip: 'Learn your home address, so that you can give it in an emergency.',
  },
  allergic: {
    why: "If you are allergic to something, it makes you ill, though it does not make most people ill. You can say: My brother is allergic to cats, so we can't have one.",
    more: "The noun is 'allergy': 'She has a nut allergy.' We say 'allergic to' something.",
    tip: 'Tell a waiter if you are allergic to any food.',
  },
  bandage: {
    why: 'A bandage is a long piece of cloth that you wrap around a cut or a hurt part of your body, to keep it clean and safe. You can say: The nurse wrapped a bandage round my knee.',
    more: "A small one that sticks to the skin is a 'plaster' in British English.",
    tip: 'Learn the first aid words: bandage, plaster, cream.',
  },
  fever: {
    why: 'A fever is when your body is much hotter than usual because you are ill. You can say: She stayed in bed with a fever and a cough.',
    more: 'A fever often comes with a cold or flu. A doctor checks it with a thermometer.',
    tip: 'If a baby has a fever, call a doctor for advice.',
  },
  operation: {
    why: 'An operation is when a doctor opens part of your body to mend it or take something out, usually in a hospital. You can say: After his operation, Grandad needed a week of rest.',
    more: "A doctor who does operations is a 'surgeon'. The phrase is 'have an operation'.",
    tip: 'Before an operation, people often cannot eat for some hours.',
  },
  salary: {
    why: 'A salary is the money you get for your job, usually paid every month. You can say: Her salary went up when she became a manager.',
    more: "A salary is usually a fixed amount for a year. 'Wages' are often paid each week or for each hour.",
    tip: 'A job advert often shows the salary for one year.',
  },
  employer: {
    why: 'An employer is a person or a company that pays people to work for them. You can say: The supermarket is a big employer in our town.',
    more: "The worker is the 'employee'. 'Employ' means to give someone a job.",
    tip: 'Remember: the employer gives the job, and the employee does the job.',
  },
  experience: {
    why: 'Experience is what you know and can do because you have done something for a long time. You can say: Our football coach has lots of experience.',
    more: "'An experience' is also something that happens to you: 'The trip was a great experience.'",
    tip: 'In a job interview, talk about your experience with examples.',
  },
  skill: {
    why: 'A skill is the ability to do something well, because you have learnt and practised it, like cooking or drawing. You can say: Typing fast is a useful skill.',
    more: 'On the back is a line from Jane Eyre. Jane draws better than her friends, so her skill surprises them.',
    tip: 'Practise a skill a little every day, and you will get better.',
  },
  apply: {
    why: 'To apply is to ask in writing, often on a form, for a job, a course or a place at a school. You can say: She applied for a job at the library.',
    more: "We 'apply for' a job and 'apply to' a company. The noun is 'application'.",
    tip: 'Read the advert carefully before you apply.',
  },
  career: {
    why: 'A career is the jobs you do over many years of your life, often in one area of work. You can say: He wants a career in music.',
    more: "Say it 'ka-REER', with the stress at the end. Do not mix it up with 'carrier'.",
    tip: "Ask your school's careers adviser about jobs you might like.",
  },
  shift: {
    why: 'A shift is a period of time when a group of people work, before another group takes over, like at a hospital at night. You can say: Dad starts his shift at six in the morning.',
    more: "We say 'work a shift', 'the night shift' and 'the day shift'.",
    tip: 'Shift work means working at different times on different days.',
  },
  training: {
    why: 'Training is the teaching and practice that help you learn the skills for a job or a sport. You can say: The new nurses had training on the computer system.',
    more: "'Train' is the verb: 'She trains every morning.' 'Training' is uncountable: never 'trainings'.",
    tip: 'The same word works for sport and work: football training, job training.',
  },
  responsible: {
    why: 'If you are responsible for someone or something, it is your job to care for them, or to make sure things are done. You can say: Each pupil is responsible for their own books.',
    more: "We say 'responsible for'. The noun is 'responsibility'. A responsible person can be trusted.",
    tip: "Say 'I'll be responsible for the drinks' to offer to do one job for a group.",
  },
  retire: {
    why: 'To retire is to stop working because you are old enough to stop. You can say: My grandad retired after forty years as a bus driver.',
    more: "The noun is 'retirement'. A person who has stopped is 'retired': 'My neighbour is retired.'",
    tip: 'In Britain, many people stop work in their sixties.',
  },
  unemployed: {
    why: 'If you are unemployed, you do not have a job, though you would like one. You can say: After the shop closed, many people were unemployed.',
    more: "'Un-' means not: unemployed means not employed. The noun is 'unemployment'.",
    tip: 'People without a job can get help to find work at a job centre.',
  },
  confident: {
    why: 'If you are confident, you feel sure about yourself, or sure that something is true. You can say: After lots of practice, I felt confident about the race.',
    more: "On the back is a line from Pride and Prejudice: 'I am confident that' means 'I am sure that'.",
    tip: "The noun is 'confidence': 'Practice gives you confidence.'",
  },
  embarrassed: {
    why: 'If you are embarrassed, you feel silly or uncomfortable because of something you did, or because people are looking at you. You can say: I went red because I was embarrassed.',
    more: "Spell it with two r's and two s's: e-m-b-a-r-r-a-s-s-e-d. The thing is 'embarrassing'.",
    tip: "Remember '-ed' for the feeling and '-ing' for the cause: I was embarrassed, and it was embarrassing.",
  },
  jealous: {
    why: "If you are jealous, you feel unhappy because someone has something you want, or because you are afraid of losing someone's love. You can say: He was jealous of his friend's new phone.",
    more: 'On the back is a line from Jane Eyre. Mr Rochester asks Jane if she felt jealous.',
    tip: "We say 'jealous of' someone: 'jealous of her sister'.",
  },
  disappointed: {
    why: 'If you are disappointed, you feel sad because something was not as good as you hoped, or did not happen. You can say: We were disappointed when the match was cancelled.',
    more: "We say 'disappointed with' a thing or 'disappointed in' a person. The thing is 'disappointing'.",
    tip: "Spell it with one s and two p's: dis-ap-point-ed.",
  },
  anxious: {
    why: 'If you are anxious, you are very worried about something that might happen. You can say: She was anxious about her first day at the new job.',
    more: "The noun is 'anxiety'. Say it 'ANK-shus'. On the back, from Pride and Prejudice, a father looks grave and anxious.",
    tip: 'If you feel anxious, talk to someone you trust.',
  },
  grateful: {
    why: 'If you are grateful, you want to say thank you to someone for what they did. You can say: I am grateful to my teacher for her help.',
    more: "Spell it 'grate-', not 'great-'. We are grateful 'to' a person 'for' a thing.",
    tip: "Say 'I'm really grateful' to thank someone warmly.",
  },
  relieved: {
    why: 'If you are relieved, you are happy because something bad did not happen, or is over. You can say: I was relieved when the test was over.',
    more: "The noun is 'relief': 'What a relief.' On the back is a line from Animal Farm.",
    tip: "Remember the spelling: 'i' before 'e' in relieved.",
  },
  annoyed: {
    why: 'If you are annoyed, you are a little angry about something. You can say: Dad was annoyed because the bus was late again.',
    more: "We say 'annoyed with' a person and 'annoyed about' a thing. The thing is 'annoying'.",
    tip: "'Annoyed' is weaker than 'angry'. Use it for small things, like a late bus or a lost pen.",
  },
  upset: {
    why: 'If you are upset, you are unhappy and worried because something bad happened. You can say: She was upset when her friend forgot her birthday.',
    more: "The past is the same as the present: 'upset'. 'An upset stomach' means you feel a little ill.",
    tip: "If a friend is upset, ask: 'Are you all right? Do you want to talk?'",
  },
  ashamed: {
    why: 'If you are ashamed, you feel bad because you did something wrong, or something you think is not good. You can say: He was ashamed of his rude words.',
    more: 'On the back is a line from Great Expectations. Pip feels ashamed of his home after he meets rich people.',
    tip: "We say 'ashamed of' something: 'ashamed of what I did'.",
  },
}
