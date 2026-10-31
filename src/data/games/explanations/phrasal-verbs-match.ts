import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Phrasal Verb Match: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/phrasal-verbs-match.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: explanations for 182 new questions
 * (meanings, second meanings, opposites, gaps, dialogue turns and real lines
 * from Animal Farm), and every explanation of the first 58 rewritten for their
 * new wrong options; no why, more or tip names another question's answer
 * unless the two share a fact and so are never dealt together
 * (src/lib/games/give-aways.ts). Written with AI and checked against each
 * question, as the founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second reader, who rewrote 20 entries: two
 * for the questions that changed (hold up, and Boxer's "pick up"); seven whose
 * example or tip taught the phrasal verb without using it ("They argued, but
 * the next day they were friends again", now "they made up the next day"; "We
 * are running short of time", now "running out of time"; a graph tip that
 * never used the pair it taught); and eleven that said something untrue or
 * unclear ("For money, use 'repay' instead", as if money could not be given
 * back; "Without 'to', it means wait", though "Hang on tight" holds; set off
 * "the only option here that needs nothing after it", though show off needs
 * nothing either; a "takeaway" tip under take out; "Learners often say 'put off
 * your hat'"; the animals' hope said to show they were "loyal").
 */
export const EXPLANATIONS: GameExplanations = {
  'get up': {
    why: "The sentence is about a daily routine: the time you leave your bed on a school or work day. 'Get up' means to leave your bed after sleeping.",
    not: {
      'to put your clothes on for the day':
        "That is 'get dressed'. You usually get up first and get dressed after that.",
      'to stay in bed for a little longer':
        "That is the opposite. In British English, staying in bed longer than usual is called a 'lie-in'.",
      'to go to bed for the night':
        "That is the end of the day, not the start. 'Get up' is what you do in the morning.",
    },
    more: "'Get up' can also mean to stand up from a seat: 'He got up and opened the door.'",
    tip: "You wake up first, and then you get up. Say: 'I wake up at half past six and get up at seven.'",
  },
  'give up': {
    why: "She smoked for twenty years and then decided to stop. To 'give up' a habit means to stop doing it.",
    not: {
      'to start doing something new, like a hobby':
        "Starting a new hobby is 'take up'. 'Give up' is the opposite: it means to stop.",
      'to do something less often than before':
        "Doing something less is 'cut down on'. 'Give up' means to stop completely.",
      'to hand something to another person':
        "Handing something over is 'give' or 'hand over'. Here 'give up smoking' means to stop smoking.",
    },
    more: "'Give up' also means to stop trying: 'The puzzle was too hard, so I gave up.'",
    tip: "After 'give up', use a noun or the -ing form: 'give up chocolate', 'give up smoking'.",
  },
  'look after': {
    why: "The speaker is going away and asks someone to feed and care for the dog. 'Look after' means to take care of someone or something.",
    not: {
      'to try to find someone or something':
        "Trying to find something is 'look for'. 'Look after' is about care, not searching.",
      'to walk behind someone or something':
        "'After' can mean behind, but 'look after' is about care. Walking behind someone is 'follow'.",
      'to look at something for a long time':
        "Looking for a long time is 'stare' or 'watch'. 'Look after' means to take care of something.",
    },
    more: "We look after children, pets, plants and things we borrow. 'Take care of' means the same.",
    tip: "Keep 'look after' together: 'look after the dog' or 'look after it'. Do not put the dog in the middle.",
  },
  'run out of': {
    why: "The speaker must buy more milk, so there is none left at home. To 'run out of' something means to have none of it left.",
    not: {
      'to have plenty of something left':
        'That is the opposite. With plenty of milk, the speaker would not need to buy more.',
      'to leave a place in a hurry':
        "That is 'run out of' a place: 'She ran out of the room.' With milk, it means there is none left.",
      'to buy a lot of something at once':
        "Buying a lot is 'stock up on'. Here the milk is finished, so the speaker must buy more.",
    },
    more: "It can stand alone without 'of': 'The milk has run out.' We also run out of time, money and ideas.",
    tip: "Put the thing that is finished after it: 'We have run out of bread.'",
  },
  'put off': {
    why: "'Until next Monday' shows the meeting will still happen, but on a later day. To 'put off' something means to move it to a later time.",
    not: {
      'to stop something from happening at all':
        "That is 'call off', to cancel. Here the meeting still happens, next Monday.",
      'to move something to an earlier time':
        "That is 'bring forward'. 'Until next Monday' shows the meeting moved later, not earlier.",
      'to make someone not like something':
        "That is another meaning: 'The smell put me off.' Here a meeting is moved, so it means to delay.",
    },
    more: "Before another verb, use -ing: 'Don't put off doing your homework.' 'Postpone' is the formal word.",
    tip: "You can split it: 'put off the meeting' or 'put it off'. With 'it', the word goes in the middle.",
  },
  'find out': {
    why: "The speaker does not know the train time and needs to learn it. To 'find out' means to learn a fact you did not know.",
    not: {
      'to find something that was lost':
        "That is 'find' alone: 'I found my keys.' 'Find out' is about learning a fact.",
      'to go outside to look for something':
        "'Out' does not mean outside here. 'Find out' is about information, not a place.",
      'to forget something you once knew':
        'That is the opposite. When you find out, you learn something new.',
    },
    more: "It often comes before a question word: 'find out when', 'find out who', 'find out why'.",
    tip: "Use it for facts and news: 'I found out that the shop was closed.'",
  },
  'turn down': {
    why: "The pay was low, so he did not want the job. To 'turn down' an offer means to say no to it.",
    not: {
      'to make a sound or heat lower':
        "That is another meaning: 'Turn down the music.' Here a job offer shows it means to refuse.",
      'to say yes to an offer or request':
        "That is the opposite: 'accept'. The low pay is his reason for saying no.",
      'to turn round and face another way':
        "That is 'turn round'. To turn down an offer is about refusing, not moving.",
    },
    more: 'We turn down offers, invitations and requests. The words around a phrasal verb show which meaning it has.',
    tip: "It is polite and common in speaking. 'Refuse' and 'reject' are more formal.",
  },
  'carry on': {
    why: "The speaker will wait, so you do not need to stop working. 'Carry on' means to continue doing something.",
    not: {
      'to stop for a short time':
        "That is the opposite: 'take a break'. The speaker wants you to keep working.",
      'to take something heavy with you':
        "That is 'carry' alone: 'carry a bag'. 'Carry on' means to continue.",
      'to do something more quickly':
        "That is 'hurry up'. 'Carry on' means to keep going, not to go faster.",
    },
    more: "After it, use -ing or 'with': 'carry on working' or 'carry on with your work'.",
    tip: "In speaking, 'Sorry, carry on' tells someone you interrupted to continue.",
  },
  'take off': {
    why: "The subject is a plane, and it will start its flight soon. For a plane, 'take off' means to leave the ground and begin to fly.",
    not: {
      'to come down and land on the ground':
        "That is 'land', the end of a flight. Take-off is the start.",
      'to remove a piece of clothing':
        "That is another meaning of 'take off'. A plane wears no clothes, so here it means to leave the ground.",
      'to stop working because of a fault':
        "That is 'break down'. 'Take off' is about a plane starting to fly.",
    },
    more: "This phrasal verb has several meanings. With clothes, it means to remove them; with a plane, it means to start flying. The noun is 'take-off'.",
    tip: "At an airport you hear 'take-off' and 'landing'. Take-off is when the plane leaves the ground.",
  },
  'look forward to': {
    why: "The summer holiday has not come yet, and 'really' shows the speaker is excited. To 'look forward to' something means to feel happy about something to come.",
    not: {
      'to think about something in the past':
        "That is 'look back on'. 'Look forward to' is about the future.",
      'to feel worried about something to come':
        "That is 'dread' or 'worry about'. 'Look forward to' is a happy feeling.",
      'to look at the road in front of you':
        "'Forward' can mean in front, but this phrasal verb is about feelings for the future.",
    },
    more: "After it, use a noun or the -ing form: 'I look forward to the trip', 'I look forward to seeing you'.",
    tip: "End a letter or email with 'I look forward to hearing from you.' Never write 'to hear'.",
  },
  'come across': {
    why: "The speaker was tidying, not searching, and found the photo without planning to. To 'come across' something means to find it by chance.",
    not: {
      'to look for something carefully':
        "That is 'search for' or 'look for'. The speaker was not looking for the photo.",
      'to walk from one side to the other':
        "That is 'walk across' or 'cross'. To come across a photo means to find it.",
      'to throw something away':
        "That is 'throw away'. The speaker found the photo, and nothing says it went in the bin.",
    },
    more: "It also tells us how someone seems to others: 'She comes across as very kind.'",
    tip: "It does not split: say 'come across a photo' or 'come across it'.",
  },
  'bring up': {
    why: "'The subject of money' is a topic of conversation. To 'bring up' a topic means to start talking about it.",
    not: {
      'to raise a child until they are grown':
        "That is another meaning: 'She was brought up in Leeds.' Here it is about a subject, so it means to mention.",
      'to stop talking about a topic':
        "That is the opposite: 'drop the subject'. 'Bring up' starts a topic.",
      'to carry something to a higher floor':
        "That is the usual meaning of the words: 'bring the bags up'. With 'the subject', it means to mention.",
    },
    more: "It also means to raise children: 'My grandparents brought me up.'",
    tip: "Use it with topics: 'bring up a problem', 'bring up an idea at a meeting'.",
  },
  'call off': {
    why: "Heavy rain made it impossible to play, so the match did not happen. To 'call off' an event means to decide that it will not happen.",
    not: {
      'to move an event to a later date':
        "That is 'put off', to delay. 'Call off' means the event is cancelled.",
      'to telephone someone about an event':
        "That is 'call' alone, or 'ring'. 'Call off' means to cancel.",
      'to begin a game by kicking the ball':
        "That is 'kick off', the start of a football match. 'Call off' means the match does not happen.",
    },
    more: "You can split it: 'call off the match' or 'call it off'. 'Cancel' is the one-word verb.",
    tip: "News reports often say 'The game has been called off.'",
  },
  'check in': {
    why: "At a hotel you go to the desk when you arrive, give your name and get your key. To 'check in' means to tell the hotel desk you have arrived.",
    not: {
      'to pay the bill and leave a hotel':
        "That is 'check out', at the end of your stay. 'Check in' is at the start.",
      'to book a hotel room by phone':
        "That is 'book' or 'reserve', done before the trip. 'Check in' happens when you arrive.",
      'to look inside your bag at the door':
        "That is 'check' alone: 'check your bag'. 'Check in' is about arriving.",
    },
    more: 'You also check in at an airport, where you show your ticket and leave your big bags.',
    tip: "The noun has a hyphen: 'The check-in desk opens at nine.'",
  },
  'check out': {
    why: "Hotel guests must leave their room by a set time. To 'check out' means to pay the bill and leave a hotel.",
    not: {
      'to tell a hotel desk you have arrived':
        "That is 'check in', at the start of your stay. 'Check out' is at the end.",
      'to look at something interesting':
        "That is an informal meaning: 'Check out this video.' With 'of the room', it means to leave the hotel.",
      'to clean a hotel room for guests':
        "Cleaning is the hotel staff's job. 'Check out' is what the guest does when leaving.",
    },
    more: "Hotels give a time for leaving: 'Check-out is at eleven.'",
    tip: "Say 'check out of' a hotel or a room: 'We checked out of the hotel after breakfast.'",
  },
  'fill in': {
    why: "A form has empty spaces for your name, address and other details. To 'fill in' a form means to write information in the spaces.",
    not: {
      'to read all the information on a form':
        "Reading a form is 'read' or 'read through'. 'Fill in' means you write in it.",
      'to sign your name at the bottom':
        "That is 'sign'. You often sign at the end, after you fill in a form.",
      'to make a cup or glass full':
        "That is 'fill' or 'fill up'. To fill in a form means to write in it.",
    },
    more: "In British English we fill in a form. In American English people usually say 'fill out'.",
    tip: "You can split it: 'fill in the form' or 'fill it in'.",
  },
  'get on with': {
    why: "'Well' shows the relationship is good. To 'get on with' someone means to have a friendly relationship with them.",
    not: {
      'to argue a lot and stop being friends':
        "That is 'fall out with' someone. Getting on well with someone is the opposite.",
      'to climb onto a bus or a train':
        "That is 'get on' without 'with': 'get on the bus'. With a person, it is about friendship.",
      'to meet someone for the first time':
        "That is 'meet'. 'Get on with' describes how two people feel about each other.",
    },
    more: "It also means to continue a task: 'Get on with your homework.' The words around it show which meaning it has.",
    tip: "Add 'well' to make it stronger: 'I get on well with my sister.' 'Get along with' means the same.",
  },
  'give back': {
    why: "The speaker lent the book, so it belongs to the speaker. To 'give back' something means to return it to its owner.",
    not: {
      'to keep something you borrowed':
        'That is the opposite. The speaker wants the book returned.',
      'to lend something to a friend':
        "That is 'lend'. The speaker lent the book first; now it should come back.",
      'to give something away for nothing':
        "That is 'give away'. You give away things you do not want, and give back things that belong to others.",
    },
    more: "You can split it: 'give back the book' or 'give it back'. With 'it', the word goes in the middle.",
    tip: "For money you borrowed, people usually say 'I'll pay you back'.",
  },
  'go on': {
    why: "The speaker sees or hears something in the street and asks what it is. 'What's going on?' means 'What is happening?'",
    not: {
      'to continue after a break':
        "That is another meaning: 'After lunch, the lesson went on.' A question about the street asks what is happening.",
      'to start working, like a light':
        'Lights can go on, but this question is about events in the street, not lights.',
      'to leave a place': "That is 'leave' or 'go away'. 'What's going on?' asks about events.",
    },
    more: "This phrasal verb has several meanings: to happen, to keep going, and to start working. 'Go on, try it' also encourages someone.",
    tip: "'What's going on?' is a very common way to ask what is happening.",
  },
  'grow up': {
    why: "The sentence tells us where he lived as a child. 'Grow up' means to develop from a child into an adult.",
    not: {
      'to get taller, like a plant':
        "Plants grow taller. 'Grow up' is about a child becoming an adult.",
      'to move from one house to another': "That is 'move house'. 'Grow up' is about childhood.",
      'to live in a place for a short holiday':
        "That is 'stay'. 'Grow up' covers your whole childhood, not a holiday.",
    },
    more: "'Where did you grow up?' asks where you spent your childhood. It can also mean to behave like an adult: 'It is time to grow up.'",
    tip: "Use 'grow up' for people and 'grow' for plants, hair and numbers: 'The tree grew fast.'",
  },
  'hold on': {
    why: "The speaker needs a short time to look in the diary. 'Hold on' means to wait for a short time.",
    not: {
      'to stop holding something': "That is 'let go'. Here the speaker asks you to wait.",
      'to do something more quickly': "That is 'hurry up', the opposite of waiting.",
      'to end a phone call':
        "That is 'hang up'. 'Hold on' asks someone to wait, often on the phone.",
    },
    more: "On the phone, 'Hold on, please' means 'please wait'. 'Hold on to' something means to keep holding it.",
    tip: "'Hold on' and 'hang on' mean the same in speaking. In formal English, say 'One moment, please.'",
  },
  'look up': {
    why: "A dictionary is where you search for a word you do not know. To 'look up' a word means to search for it in a dictionary or online.",
    not: {
      'to raise your eyes to look higher':
        "That is the usual meaning of the words: 'look up at the sky'. With a dictionary, it means to search.",
      'to respect and admire someone':
        "That is 'look up to' someone. Without 'to', looking up a word means searching for it.",
      'to write a word in your notebook':
        "That is 'write down' or 'note down'. 'Look up' is about searching.",
    },
    more: 'You can look up words, phone numbers, times and facts, in a book or on an app.',
    tip: "With 'it' or 'them', put the word in the middle: 'look it up', never 'look up it'.",
  },
  'pick up': {
    why: "The speaker will meet you at the station and take you somewhere. To 'pick up' someone means to come and collect them.",
    not: {
      'to drop someone off somewhere':
        "That is the opposite: 'drop off'. You pick someone up at the start and drop them off at the end.",
      'to lift something from the floor':
        "That is another meaning: 'pick up a pen'. Here it is about a person at a station, so it means collect.",
      'to choose one from a group':
        "That is 'pick' alone, or 'pick out'. 'Pick you up' means collect you.",
    },
    more: "This phrasal verb has several meanings: to lift, to collect, and to learn without lessons, as in 'pick up a few words of French'.",
    tip: "With a person, the word goes in the middle: 'pick you up', 'pick her up'.",
  },
  'put on': {
    why: "It is cold, so the speaker tells you to wear your coat. To 'put on' clothes means to start wearing them.",
    not: {
      'to take a piece of clothing off':
        "That is the opposite, 'take off'. In the cold you add clothes.",
      'to hang your coat on a hook':
        "That is 'hang up'. In the cold you wear your coat; you do not hang it on a hook.",
      'to place something on top of a table':
        "That is 'put' with 'on' meaning on top: 'put the cup on the table'. 'Put on your coat' means wear it.",
    },
    more: "'Put on' is the action and 'wear' is the state: 'Put on your coat' but 'She is wearing a coat'.",
    tip: "You can split it: 'put on your coat' or 'put it on'.",
  },
  'set up': {
    why: "Last year they started a new business. To 'set up' a business means to start a new company or group.",
    not: {
      'to close a company for good': "That is 'close down' or 'shut down', the opposite.",
      'to buy a company from its owner':
        "That is 'buy' or 'take over'. The business was new, so they started it.",
      'to move a company to a new place':
        "That is 'move' or 'relocate'. To set up means to start something new.",
    },
    more: "It also means to get equipment ready: 'Set up the tables before the party.'",
    tip: "You can split it: 'set up a club' or 'set it up'.",
  },
  'take up': {
    why: "After she stopped work, painting became her new hobby. To 'take up' an activity means to start doing it.",
    not: {
      'to stop doing a hobby': "That is 'give up', the opposite. She started painting.",
      'to fill a space or time':
        "That is another meaning: 'The bed takes up half the room.' With a hobby, it means to start.",
      'to pick something up from the floor':
        "That is 'pick up'. Taking up painting is about starting a hobby.",
    },
    more: "We take up sports, instruments and hobbies: 'take up tennis', 'take up the guitar'.",
    tip: 'Use it for things you start in your free time, like a sport or a new skill.',
  },
  'turn up': {
    why: "He came to the interview, but late. To 'turn up' means to arrive at a place.",
    not: {
      'to make a sound louder':
        "That is another meaning: 'turn up the music'. Here a person comes to an interview.",
      'to leave early': 'That is the opposite. He came, and he was late, not early.',
      'to get ready for something':
        "That is 'get ready' or 'prepare'. 'Turn up' is about arriving.",
    },
    more: "It is often used when someone arrives late or without warning: 'He turned up at midnight with no warning.'",
    tip: "'Turn up' and 'show up' are both informal ways to say 'arrive'.",
  },
  'work out': {
    why: "A puzzle needs thinking, and the speaker could not find the answer. To 'work out' an answer means to find it by thinking.",
    not: {
      'to do exercise to keep fit':
        "That is another meaning: 'I work out at the gym.' A puzzle shows it means to solve.",
      'to write an answer down':
        "That is 'write down'. The speaker could not find the answer at all.",
      'to stop trying to find an answer':
        "That is 'give up'. 'Work out' means you think until you find it.",
    },
    more: "We work out answers, sums, plans and problems. You can split it: 'work it out'.",
    tip: "In maths, 'work out' means to calculate: 'Work out the total.'",
  },
  'break down': {
    why: "Something went wrong with the car and it stopped on the motorway. 'Break down' means to stop working because of a fault.",
    not: {
      'to crash into another car':
        "That is 'crash'. A car that breaks down stops because something inside it is wrong.",
      'to stop at the side of the road':
        "That is 'pull over', which a driver chooses to do. Breaking down is a fault.",
      'to go faster than the speed limit':
        "That is 'speed'. A car that breaks down cannot go at all.",
    },
    more: "The noun is 'breakdown': 'We called a breakdown service.' People can break down too, when they start to cry.",
    tip: "Use it for cars, machines and computers: 'The lift has broken down.'",
  },
  'cut down on': {
    why: "Too much sugar is bad for you, so the doctor wants him to have less. To 'cut down on' something means to have less of it.",
    not: {
      'to stop having something at all': "That is 'give up'. 'Cut down on' means less, not none.",
      'to have more of something': 'That is the opposite. The doctor wants less sugar.',
      'to cut something into small pieces':
        "That is 'cut up'. 'Cut down on' is about the amount you have.",
    },
    more: "We cut down on sugar, salt, coffee and screen time. 'Cut back on' means the same.",
    tip: "Without 'on', 'cut down' means to cut a tree so that it falls. Add 'on' for having less.",
  },
  'deal with': {
    why: "A complaint is a problem, and the manager will act on it today. To 'deal with' a problem means to take action to solve it.",
    not: {
      'to make a problem bigger':
        "That is 'make worse'. A manager deals with a complaint to solve it.",
      'to pretend a problem is not there': "That is 'ignore', the opposite of dealing with it.",
      'to agree to buy or sell something':
        "That is 'make a deal'. 'Deal with' is about handling a problem.",
    },
    more: "It can also mean 'be about': 'The book deals with friendship.'",
    tip: "It never splits: 'deal with it', 'deal with the problem'.",
  },
  'end up': {
    why: "They got lost, so the journey finished in a town they did not plan to visit. To 'end up' somewhere means to be in a place you did not plan.",
    not: {
      'to plan a journey very carefully':
        "That is 'plan'. They got lost, so the trip did not go to plan.",
      'to start a journey from a place':
        "That is 'set off'. 'End up' is about where you finally are.",
      'to finish a journey on time':
        "That is 'arrive on time'. They were lost, and in the wrong town.",
    },
    more: "It often shows a result nobody planned: 'He wanted to be a doctor but ended up as a teacher.'",
    tip: "After it, you can use -ing: 'We ended up walking home.'",
  },
  'figure out': {
    why: "The speaker does not understand the machine yet. To 'figure out' something means to understand it by thinking.",
    not: {
      'to draw a picture of something':
        "A figure can be a drawing, but 'figure out' means to understand.",
      'to count something with numbers':
        "Figures are numbers, but here the speaker wants to know how a machine works, so 'figure out' means to understand.",
      'to fix something that is broken':
        "That is 'fix' or 'repair'. The sentence does not say the machine is broken.",
    },
    more: "It is informal and very close to 'work out': 'I can't work out how it works.'",
    tip: "It goes well with question words: 'figure out how', 'figure out why', 'figure out what to do'.",
  },
  'get along with': {
    why: "The question asks if you and your neighbours are friendly. To 'get along with' someone means to be friendly with them.",
    not: {
      'to walk along a road with someone':
        "'Along' can mean down a road, but 'get along with' is about friendship.",
      'to argue with someone a lot': "That is the opposite: 'fall out with' someone.",
      'to live next door to someone':
        'That is what neighbours do, but the question asks if you are friendly with them.',
    },
    more: "'Get on with' means the same and is very common in British English.",
    tip: "Use it in questions about people: 'Do you get along with your teacher?'",
  },
  'get back': {
    why: "'From the trip' shows the person went away and then came home. 'Get back' means to return to a place.",
    not: {
      'to leave on a trip': "That is 'set off' or 'leave'. The question asks when the trip ended.",
      'to move backwards': "That is 'move back' or 'step back'. 'Get back' here means to return.",
      'to get something you lost again':
        "That is another meaning: 'I got my money back.' Here 'from the trip' shows it means return.",
    },
    more: "'Get back to' a person means to reply later: 'I will get back to you tomorrow.'",
    tip: "In speaking, 'When did you get back?' is more common than 'When did you return?'",
  },
  'give in': {
    why: "He argued for a long time and then stopped and agreed. To 'give in' means to stop arguing and agree.",
    not: {
      'to hand work to a teacher':
        "That is another meaning: 'give in your homework'. Here there is no work, only an argument.",
      'to enter a room or building':
        "That is 'go in' or 'come in'. 'Give in' is about stopping an argument.",
      'to win an argument': 'That is the opposite. When you give in, the other person wins.',
    },
    more: "'Give in to' someone means to let them have what they want: 'She gave in to her children.'",
    tip: "Use it after an argument or a fight: 'Neither of them would give in.'",
  },
  'go off': {
    why: "The milk smells terrible, so it is not good to drink. Food that has 'gone off' has become bad.",
    not: {
      'to make a loud ringing noise':
        'That is another meaning: an alarm goes off. Here the smell shows the milk is bad.',
      'to leave a place suddenly':
        "That is another meaning: 'He went off without a word.' Milk cannot leave.",
      'to be kept cold in a fridge':
        'That is what keeps milk fresh. Milk that has gone off is bad.',
    },
    more: 'This phrasal verb has several meanings: food goes bad, an alarm rings, a light stops working, and a person leaves.',
    tip: "In British English, food 'goes off'. In American English, it 'goes bad'.",
  },
  'hang on': {
    why: "The speaker needs a moment to find the keys. 'Hang on' means to wait for a moment.",
    not: {
      'to hold something very tightly':
        "That is 'hang on to' something, as in 'Hang on to the rope.' Here nothing is held: the speaker asks you to wait.",
      'to put clothes on a hook': "That is 'hang up'. 'Hang on' here asks you to wait.",
      'to go faster': "That is 'hurry up', the opposite of waiting.",
    },
    more: "It is informal and means the same as 'hold on'. People say 'Hang on a minute.'",
    tip: "Use it with friends. In formal speech, say 'Just a moment, please.'",
  },
  'hang up': {
    why: "The call ended before the speaker could answer. To 'hang up' means to end a telephone call.",
    not: {
      'to wait on the phone': "That is 'hold on'. She ended the call; she did not wait.",
      'to put a picture on a wall':
        "That is another meaning: 'hang up a picture'. The phone shows it means to end the call.",
      'to answer a telephone call': "That is 'pick up' or 'answer'. She ended the call.",
    },
    more: "It also means to put something on a hook: 'Hang up your coat.'",
    tip: 'To hang up on someone means to end the call while they are still talking. It is rude.',
  },
  'keep up with': {
    why: "News changes all the time, and the speaker finds it hard to know it all. To 'keep up with' the news means to learn about new things as they happen.",
    not: {
      'to fall behind with something':
        'That is the opposite. The speaker is trying not to fall behind.',
      'to stop reading or watching the news':
        "That is 'switch off' from the news. The speaker wants to know it.",
      'to keep a newspaper in a safe place for later':
        "That is 'keep' alone. 'Keep up with' is about staying up to date.",
    },
    more: "It also means to move at the same speed: 'Walk slowly. I can't keep up with you.'",
    tip: "After it, use a noun: 'keep up with the news', 'keep up with your homework'.",
  },
  'let down': {
    why: "The speaker made a promise and will keep it. To 'let someone down' means to disappoint someone who trusts you.",
    not: {
      'to help someone when they need it':
        "That is the opposite. 'I won't let you down' means 'I will help'.",
      'to lower something on a rope':
        "That is the usual meaning of the words: 'let down a rope'. With a promise, it means disappoint.",
      'to make someone feel calm':
        "That is 'calm down'. 'Let down' is about disappointing someone.",
    },
    more: "We also use it as an adjective: 'I felt let down when nobody came.'",
    tip: "The person usually goes in the middle: 'let you down', 'let her down'.",
  },
  'log in': {
    why: "You type a password to enter the website. To 'log in' means to enter a computer system.",
    not: {
      'to leave a computer system': "That is 'log out', the opposite.",
      'to write in a diary every day':
        "A log can be a diary, but 'log in' means to enter a website.",
      'to make a new account': "That is 'sign up'. You sign up once, then log in each time.",
    },
    more: "'Sign in' means the same. The noun is 'login': 'I forgot my login.'",
    tip: 'Keep your password private. Never tell a friend the details you use to log in.',
  },
  'make up': {
    why: "Dragons are not real, so the children invented the story. To 'make up' a story means to invent it.",
    not: {
      'to become friends again after a fight':
        'That is another meaning, but you make up with a person, not with a story.',
      'to put colour on your face': "That is 'make-up', a noun for things you put on your face.",
      'to read a story out loud': "That is 'read out'. The children created the story themselves.",
    },
    more: "It also means to become friends again: 'They argued, but they made up the next day.'",
    tip: "Use it for stories, excuses and games: 'He made up an excuse.'",
  },
  'pass away': {
    why: "'Peacefully' and 'last spring' tell us gently that her grandfather died. 'Pass away' is a kind, polite way to say 'die'.",
    not: {
      'to walk past someone in the street':
        "That is 'pass' or 'walk past'. 'Pass away' is about death.",
      'to fall asleep':
        "That is 'fall asleep'. 'Pass away' is a gentle word for dying, not sleeping.",
      'to move to another country':
        "That is 'move abroad'. 'Pass away' is a polite word for dying.",
    },
    more: "People say 'pass away' to be gentle when someone has died. 'Die' is more direct.",
    tip: 'Use it in kind, polite speech and writing, for example in a card to someone who is sad.',
  },
  'point out': {
    why: "She saw a mistake that the writer had missed and told them about it. To 'point out' something means to show someone something they missed.",
    not: {
      'to make a mistake in your work':
        "That is 'make a mistake'. She found the mistake; she did not make it.",
      'to correct a mistake yourself': "That is 'correct'. She showed the mistake to the writer.",
      'to put a mark like an arrow on paper':
        "That is 'draw'. 'Point out' means to show or tell someone.",
    },
    more: "You can point out a mistake, a problem or a fact. 'Point out that' starts a longer idea: 'She pointed out that it was late.'",
    tip: "In essays, 'points out' is a useful verb: 'The writer points out the cost of war.'",
  },
  'put up with': {
    why: "The speaker does not like the noise and cannot accept it any more. To 'put up with' something means to accept something you do not like.",
    not: {
      'to build something like a tent':
        "That is 'put up' without 'with': 'put up a tent'. With 'with', it means to accept.",
      'to enjoy something very much': 'That is the opposite. We put up with things we do not like.',
      'to complain about something':
        "That is 'complain'. The speaker may complain, but 'put up with' means to accept.",
    },
    more: 'We put up with things we cannot change: bad weather, a long wait, a noisy neighbour.',
    tip: "It never splits. After it, use a noun or -ing: 'put up with the noise', 'put up with waiting'.",
  },
  'run into': {
    why: "The speaker did not plan to see the friend; they met by chance while shopping. To 'run into' someone means to meet them by chance.",
    not: {
      'to run quickly into a shop':
        "That is the usual meaning of the words: 'She ran into the shop.' With a person, it means to meet by chance.",
      'to plan to meet someone':
        "That is 'arrange to meet'. 'Run into' is for meetings nobody planned.",
      'to try to avoid someone': 'That is the opposite. The speaker met the friend.',
    },
    more: "It also means to hit something while moving: 'The bike ran into a wall.'",
    tip: 'Use it for people you meet by chance in town, at the shops or at the station.',
  },
  'set off': {
    why: "At five in the morning they left home to start the journey to the airport. To 'set off' means to start a journey.",
    not: {
      'to finish a journey': "That is 'arrive'. At five in the morning the journey began.",
      'to make an alarm ring':
        "That is another meaning: 'Smoke set off the alarm.' Here 'for the airport' shows a journey.",
      'to get home': "That is 'get home' or 'get back'. They were leaving, not coming home.",
    },
    more: "It also means to make something start: 'Burnt toast set off the smoke alarm.'",
    tip: "Say 'set off for' a place: 'We set off for Wales after lunch.'",
  },
  'show up': {
    why: "Half the team came to practice and half stayed away. To 'show up' means to come to an event.",
    not: {
      'to make someone look bad':
        "That is another meaning, in British English: 'You showed me up.' Here it is about who came.",
      'to stay away from an event': 'That is the opposite. Half the team did come.',
      'to show something proudly': "That is 'show off'. 'Show up' means to arrive.",
    },
    more: "It is informal. We often use it in the negative: 'He never showed up.'",
    tip: "'Show up' and 'turn up' mean almost the same: to arrive.",
  },
  'sort out': {
    why: "The files are not in order, and the speaker must organise them by the deadline. To 'sort out' things means to put them in order.",
    not: {
      'to make things more messy': "That is 'mess up', the opposite.",
      'to choose the best one': "That is 'pick out'. 'Sort out' means to organise all of them.",
      'to leave work for later':
        "That is 'put off'. The speaker wants to do it before the deadline.",
    },
    more: "It also means to solve a problem: 'Don't worry, I will sort it out.' It is very common in British English.",
    tip: "You can split it: 'sort out the files' or 'sort them out'.",
  },
  'stay up': {
    why: "The children watched a film at a time when they would usually be asleep. To 'stay up' means to keep awake and not go to bed.",
    not: {
      'to wake up very early':
        "That is 'wake up early', at the start of the day. 'Stay up' is about going to bed late.",
      'to stand still without moving at all':
        "That is 'stand still'. 'Stay up' is about not sleeping.",
      'to go to bed early': 'That is the opposite. They stayed up late.',
    },
    more: "We stay up to study, to watch something or to wait for someone: 'I stayed up until midnight.'",
    tip: "Add 'late' to show it was after your usual bedtime: 'stay up late'.",
  },
  'take after': {
    why: "She is like her mother in looks or character. To 'take after' someone means to be like an older family member.",
    not: {
      'to take care of an older person':
        "That is 'look after'. 'Take after' is about being like someone in your family.",
      'to follow someone everywhere': "That is 'follow'. 'Take after' is about family likeness.",
      'to be different from your family':
        "That is the opposite. 'Take after' means she is similar.",
    },
    more: "We take after parents and grandparents, not friends: 'He takes after his grandfather.'",
    tip: "'Look like' is only about looks. 'Take after' can be about looks or character.",
  },
  'throw away': {
    why: "The bottles can be recycled, so the speaker says not to put them in the bin. To 'throw away' something means to put it in the bin.",
    not: {
      'to put something in its place':
        "That is 'put away'. 'Throw away' means to get rid of something.",
      'to throw a ball to someone':
        "That is 'throw' alone. 'Throw away' means to put something in the bin.",
      'to give something to a friend':
        "That is 'give' or 'give away'. Throwing away means nobody will use it again.",
    },
    more: "'Throw out' means almost the same. You can split it: 'throw them away'.",
    tip: "Use it for rubbish, and 'recycle' for things that can be used again.",
  },
  'try on': {
    why: "In a shop you put shoes on to see if they fit before you buy them. To 'try on' clothes means to wear them to see if they fit.",
    not: {
      'to try to do something hard':
        "That is 'try' alone: 'try to swim'. 'Try on' is for clothes and shoes.",
      'to take your shoes off': "That is 'take off'. You try shoes on, then take them off again.",
      'to clean shoes until they shine': "That is 'polish'. 'Try on' is about testing the size.",
    },
    more: "Shops have changing rooms where you try on clothes. For machines and ideas, use 'try out'.",
    tip: "You can split it: 'try on the shoes' or 'try them on'.",
  },
  'turn off': {
    why: "When you leave a room, the lights should not stay on. To 'turn off' a light or machine means to stop it working.",
    not: {
      'to make a light or machine start': "That is 'turn on', the opposite.",
      'to make a light less bright':
        "That is 'dim' or 'turn down'. When you turn off a light, it stops completely.",
      'to leave the road you are on':
        "That is another meaning: 'Turn off at the next exit.' Here it is about the lights.",
    },
    more: "'Switch off' means the same. It can also mean to leave a road for a smaller one.",
    tip: "You can split it: 'turn off the lights' or 'turn them off'.",
  },
  'turn on': {
    why: "The speaker wants the heating to start working. To 'turn on' a machine means to make it start working.",
    not: {
      'to make a machine stop working': "That is 'turn off', the opposite.",
      'to make a machine work harder':
        "That is 'turn up': it makes the heating hotter. 'Turn on' starts it.",
      'to turn your body round to face someone':
        "That is 'turn round' or 'turn to'. 'Turn on' starts a machine.",
    },
    more: "'Switch on' means the same. In British English you can also say 'Put the heating on.'",
    tip: "You can split it: 'turn on the heating' or 'turn it on'.",
  },
  'wake up': {
    why: "The first bus leaves early, so the speaker stopped sleeping early. 'Wake up' means to stop sleeping.",
    not: {
      'to get out of bed': "That is 'get up'. You wake up first, then you get up.",
      'to fall asleep': "That is the opposite: 'fall asleep' or 'go to sleep'.",
      'to feel sleepy': "That is 'be sleepy' or 'be tired'. 'Wake up' is when sleep ends.",
    },
    more: "You can wake up another person too: 'Please wake me up at six.'",
    tip: "Say 'I woke up at six and got up at seven' to show both steps.",
  },
  'warm up': {
    why: "Athletes do gentle exercise before a race so that they do not hurt themselves. To 'warm up' means to do easy exercise before sport.",
    not: {
      'to heat food that has gone cold':
        "That is another meaning: 'warm up the soup'. Athletes and a race show it is about exercise.",
      'to rest after a race is finished':
        "That is 'cool down', which comes after sport. 'Warm up' comes before.",
      'to put on warm clothes': "That is 'wrap up' or 'put on'. For athletes, it means exercise.",
    },
    more: "The noun is 'warm-up': 'We did a ten-minute warm-up.' It can also mean to make food or a room warm.",
    tip: "Use 'warm up' before sport and 'cool down' after it.",
  },
  'sit down': {
    why: "The speaker asks you to wait for the doctor, so you take a seat. To 'sit down' means to rest your body on a seat.",
    not: {
      'to get up from a seat':
        "That is 'stand up' or 'get up', the opposite. In a waiting room you sit and wait.",
      'to lie flat on a bed or sofa': "That is 'lie down'. In a waiting room you sit on a chair.",
      'to stand in a line and wait':
        "That is 'queue' or 'line up'. To sit down means you take a seat.",
    },
    more: "Teachers and doctors often say 'Please sit down' or 'Take a seat'. Both are polite.",
    tip: "Say 'sit down on a chair' but 'sit in an armchair', because you sink into an armchair.",
  },
  'stand up': {
    why: "The speaker wants you on your feet so that the class can see and hear you. To 'stand up' means to rise from a seat to your feet.",
    not: {
      'to lower yourself onto a seat': "That is 'sit down', the opposite.",
      'to raise your hand in class':
        "That is 'put up your hand'. Standing up moves your whole body.",
      'to walk to the front of a room':
        "You may do that next, but 'stand up' only means to get onto your feet.",
    },
    more: "'Stand up for' someone means to support them: 'She always stands up for her friends.'",
    tip: "In class you may hear 'Stand up, please' at the start and 'Sit down, please' after it.",
  },
  'come in': {
    why: "The speaker asks you to enter and then close the door behind you, so you are now inside. To 'come in' means to enter a room or a building.",
    not: {
      'to leave a room or a building': "That is 'go out' or 'leave', the opposite.",
      'to wait outside a room': "That is 'wait outside'. 'Come in' means you go inside.",
      'to knock on a door':
        "That is 'knock'. You knock first, and then someone tells you to enter.",
    },
    more: "It is said by the person inside. The person outside asks 'Can I come in?'",
    tip: "When someone knocks on your door, say 'Come in' to let them enter.",
  },
  'go out': {
    why: "Mum is not at home because she left to go to the shops. To 'go out' means to leave your home for a time.",
    not: {
      'to come back to your home':
        "That is 'come back' or 'get back'. Mum left; she has not returned.",
      'to stay inside your home all day': "That is 'stay in', the opposite. Mum is not at home.",
      'to go into a building': "That is 'go in'. 'Go out' means you leave a place.",
    },
    more: "It also means to go to a party, a film or a restaurant: 'We go out on Saturdays.'",
    tip: "Use 'go out to' with a place, 'go out to the park', and 'go out for' with an activity, 'go out for a walk'.",
  },
  'come back': {
    why: "Dad is at work now, and at six he will return home. To 'come back' means to return to where you were.",
    not: {
      'to leave a place for a time': "That is 'go away' or 'go out'. Dad will return at six.",
      'to stay at a place all day': "That is 'stay'. 'Come back' is about returning.",
      'to look behind you': "That is 'look back'. 'Come back' means to return.",
    },
    more: "It is about returning to where the speaker is: 'Come back soon.'",
    tip: "Add 'from' for the place you leave: 'He came back from school at four.'",
  },
  'lie down': {
    why: "The speaker feels ill and wants to rest with their body flat. To 'lie down' means to put your body flat to rest.",
    not: {
      'to sit up straight in a chair':
        "That is 'sit up'. When you lie down, your body is flat, not sitting.",
      'to say something that is not true':
        "That is another verb 'lie': 'Don't lie to me.' 'Lie down' is about resting flat.",
      'to fall onto the floor':
        "That is 'fall down' or 'fall over', which you do not choose. You choose to lie down.",
    },
    more: "The past here is 'lay': 'Yesterday I lay down after lunch.' The other 'lie', not telling the truth, has the past 'lied'.",
    tip: "Say 'lie down on the bed' or 'lie down on the sofa'.",
  },
  'look for': {
    why: "The speaker has lost the keys and is trying to find them, so they ask if you have seen them. To 'look for' something means to try to find it.",
    not: {
      'to take care of something':
        "That is 'look after'. The speaker is searching, not caring for something.",
      'to find something by chance':
        "That is 'come across'. The speaker is trying to find the keys on purpose.",
      'to look at a picture': "That is 'look at'. 'Look for' means to search.",
    },
    more: "'Look for' is the searching and 'find' is the result: 'I looked for my keys and found them under the bed.'",
    tip: "Shop assistants ask 'Are you looking for something?' It means 'Can I help you find it?'",
  },
  'write down': {
    why: "The speaker wants your phone number on paper so that they can keep it. To 'write down' something means to make a note of it.",
    not: {
      'to read something out loud':
        "That is 'read out'. The speaker wants the number on paper, not read aloud.",
      'to remove words from a page': "That is 'rub out' or 'cross out'. Writing down adds words.",
      'to send a letter to someone':
        "That is 'write to' someone. 'Write down' means to make a note.",
    },
    more: 'We write down numbers, names, new words and ideas so that we do not forget them.',
    tip: "Teachers often say 'Write this down.' Have your notebook ready.",
  },
  'hurry up': {
    why: "The bus leaves in two minutes, so there is very little time. 'Hurry up' means to do something more quickly.",
    not: {
      'to do something more slowly': "That is 'slow down', the opposite.",
      'to stop and wait for a moment':
        "That is 'wait' or 'hold on'. With only two minutes, you must be quick.",
      'to climb up a hill or stairs': "'Up' does not mean higher here. 'Hurry up' means be quick.",
    },
    more: "It is often said to someone else, as an order: 'Hurry up, please.'",
    tip: "It can sound rude. 'Please be quick' or 'We need to go now' is more polite.",
  },
  'slow down': {
    why: "You are walking too fast, and the speaker wants you to walk at a lower speed. To 'slow down' means to go less quickly.",
    not: {
      'to go more quickly': "That is 'speed up' or 'hurry up', the opposite.",
      'to stop for a short rest':
        "That is 'take a break'. When you slow down, you keep going, but less quickly.",
      'to walk down the stairs': "'Down' does not mean lower here. 'Slow down' is about speed.",
    },
    more: "Cars, people and work can all slow down: 'The car slowed down at the corner.'",
    tip: 'Road signs near schools tell drivers to go less quickly. Drivers must take care there.',
  },
  'get on': {
    why: "The bus stops outside the school, and that is where you climb onto it. To 'get on' means to go onto a bus or a train.",
    not: {
      'to leave a bus or a train': "That is 'get off', the opposite.",
      'to wait for a bus or a train': "That is 'wait for'. 'Get on' is when you climb onto it.",
      'to get into a car or a taxi': "That is 'get in'. We get in a car but get on a bus.",
    },
    more: "Use 'get on' and 'get off' for buses, trains, planes and bikes. Use 'get in' and 'get out of' for cars and taxis.",
    tip: 'When you get on a bus in Britain, people often say hello or thank you to the driver.',
  },
  'put down': {
    why: "The speaker wants you to stop writing and listen, so you leave your pens on the desk. To 'put down' something means to stop holding it.",
    not: {
      'to lift something from a table': "That is 'pick up', the opposite.",
      'to write something on paper':
        "'Put down' can mean to write, as in 'put down your name'. With pens, it means to stop holding them.",
      'to keep something in a bag':
        "That is 'put away' or 'keep'. 'Put down' means to place it on a surface.",
    },
    more: "It can also mean to write: 'Put down your answer here.' The words around a phrasal verb show which meaning it has.",
    tip: "At the end of a test, teachers say 'Pens down, please.' It means stop writing.",
  },
  'go away': {
    why: "The speaker will be away from home for a week, on holiday. To 'go away' means to leave home for a trip.",
    not: {
      'to stay at home for the holiday': "That is 'stay at home'. 'Go away' means you leave.",
      'to come home after a trip': "That is 'come back' or 'get back', at the end of the trip.",
      'to move to a new house': "That is 'move'. When you go away, you come home after the trip.",
    },
    more: "It also means 'leave me alone': 'Go away, I'm busy.' That is rude, so be careful with it.",
    tip: "Ask friends 'Are you going away this summer?' It means 'Are you going on holiday?'",
  },
  'tidy up': {
    why: "The bedroom is messy, and it must look nice before dinner. To 'tidy up' means to make a place clean and neat.",
    not: {
      'to make a place messy': "That is 'mess up', the opposite.",
      'to paint a room a new colour':
        "That is 'paint' or 'decorate'. Tidying up puts things back in order.",
      'to lock the door of a room':
        "That is 'lock'. 'Tidy up' is about putting things in their places.",
    },
    more: "'Tidy' is also an adjective: 'Her desk is always tidy.' 'Clean up' is similar.",
    tip: "A useful sentence at home: 'I'll tidy up after dinner.'",
  },
  'wash up': {
    why: "One person cooked the meal, so the other cleans the dirty plates. In British English, to 'wash up' means to clean the plates after a meal.",
    not: {
      'to cook a meal for the family': "That is 'cook'. The speaker has already cooked.",
      'to put the plates on the table':
        "That is 'lay the table', before the meal. Washing up comes after it.",
      'to throw away food after a meal':
        "That is 'throw away'. Washing up is about cleaning the plates.",
    },
    more: "In American English, 'wash up' means to wash your hands and face. In British English, it is the plates, pans and cups.",
    tip: "The British noun is 'the washing-up': 'Whose turn is it to do the washing-up?'",
  },
  'put away': {
    why: "The child has finished playing, so the toys go back to their box or shelf. To 'put away' something means to store it in its place.",
    not: {
      'to throw something in the bin': "That is 'throw away'. The toys are kept, not thrown out.",
      'to give something to another child': "That is 'give away'. The toys stay with the child.",
      'to leave things on the floor': 'That is the opposite. Putting toys away clears the floor.',
    },
    more: "You can split it: 'put your toys away' or 'put away your toys'. With 'them', the word goes in the middle.",
    tip: 'After cooking, put away the food that is left: it goes in the fridge or the cupboard.',
  },
  'take out': {
    why: "The lesson is starting, so you take your books from your bag or desk to open them. To 'take out' something means to remove it from a bag or desk.",
    not: {
      'to put something into a bag or desk': "That is 'put away' or 'put in', the opposite.",
      'to give your books back to the library':
        "That is 'take back' or 'return'. The books are needed in the lesson.",
      'to write your name inside a book':
        "That is 'write'. 'Take out' means to remove something from where it is.",
    },
    more: "We take out books, money and rubbish. 'Can you take out the rubbish?' means carry it outside to the bin.",
    tip: "In American English, a meal you buy to eat at home is 'takeout'. In British English, it is a 'takeaway'.",
  },
  'fall over': {
    why: "In the playground the boy lost his balance and landed on the ground. To 'fall over' means to drop to the ground by accident.",
    not: {
      'to jump over a wall or fence':
        "'Over' does not mean across here. Falling over is an accident, not a jump.",
      'to sit down on the ground to rest':
        "That is 'sit down', which you choose to do. Falling over is not planned.",
      'to run and play with friends':
        "That is 'play'. The boy was playing, but 'fell over' tells us he landed on the ground.",
    },
    more: "People fall over; tall things like trees and walls fall down: 'The old wall fell down.'",
    tip: "If a friend falls over, ask 'Are you all right?'",
  },
  'eat out': {
    why: "The family has dinner away from home on Friday nights. To 'eat out' means to have a meal in a restaurant.",
    not: {
      'to have a meal in the garden':
        "'Out' does not mean outside here. Eating in the garden is 'eating outside'.",
      'to cook a meal at home': "That is 'eat in', the opposite.",
      'to eat all of your food': "That is 'eat up'. 'Eat out' is about where you eat.",
    },
    more: "'Eat in' means to eat at home: 'Shall we eat out or eat in tonight?'",
    tip: "Say 'Let's eat out tonight' when you want to go to a restaurant.",
  },
  'run away': {
    why: "The loud noise frightened the dog, so it left fast to escape. To 'run away' means to leave a place fast to escape.",
    not: {
      'to come back home again': "That is 'come back', the opposite.",
      'to run in a race for a prize': "That is 'run' or 'race'. 'Run away' is about escaping.",
      'to hide somewhere and keep still':
        "That is 'hide'. A dog that runs away moves fast; it does not keep still.",
    },
    more: "Add 'from' to say what is escaped: 'The mouse ran away from the cat.'",
    tip: "The past is 'ran away', never 'runned away'.",
  },
  'look out': {
    why: "The ball is about to hit you, so the speaker warns you to take care. 'Look out' means to be careful because of danger, and people shout it as a warning.",
    not: {
      'to look through a window at something':
        "That is 'look out of' a window. On its own, 'Look out' is a warning.",
      'to catch a ball with your hands':
        "That is 'catch'. 'Look out' tells you to see the danger and move or take care.",
      'to wait for a friend': "That is 'wait for'. 'Look out' warns about danger.",
    },
    more: "'Watch out' means the same. 'Look out for' something means to watch so that you see it: 'Look out for the bus.'",
    tip: 'Shout it quickly when a friend is in danger: a car, a ball or a step.',
  },
  'calm down': {
    why: "Someone is upset, and the speaker wants them to relax before they talk. To 'calm down' means to become less upset or excited.",
    not: {
      'to get more and more excited': "That is the opposite. 'Calm down' means to relax.",
      'to lie down and go to sleep': "That is 'lie down'. You can calm down without sleeping.",
      'to speak more loudly':
        "That is 'speak up'. When you calm down, you often speak more quietly.",
    },
    more: "You can calm yourself or another person: 'The teacher calmed the children down.'",
    tip: "Saying 'Calm down' to an angry person can make them angrier. Try 'Take a deep breath.'",
  },
  'cheer up': {
    why: "A funny film makes people laugh, so it will make you happier. To 'cheer someone up' means to make them feel happier.",
    not: {
      'to make someone feel sad and alone': 'That is the opposite. A funny film makes you happier.',
      'to shout to help a team':
        "That is 'cheer' alone: 'We cheered for our team.' 'Cheer up' is about feelings.",
      'to make someone feel sleepy':
        'A funny film keeps you awake and makes you laugh, so it does not make you sleepy.',
    },
    more: "Say 'Cheer up' to a friend who looks sad: it means 'try to be happier'.",
    tip: "The person often goes in the middle: 'cheer you up', 'cheer her up'.",
  },
  'give out': {
    why: "The teacher handed a test paper to every student. To 'give out' things means to hand one to each person.",
    not: {
      'to collect one from each person': "That is 'collect' or 'take in', the opposite.",
      'to keep them for yourself': "That is 'keep'. The teacher gave the papers to the class.",
      'to throw them into the bin':
        "That is 'throw away'. The students need the papers for the test.",
    },
    more: "'Hand out' means the same. A 'handout' is a sheet that each student gets.",
    tip: "You can split it: 'give out the papers' or 'give them out'.",
  },
  'hand in': {
    why: "On Friday the students must give their homework to the teacher. To 'hand in' work means to give your work to a teacher.",
    not: {
      'to give work back to a student':
        "That is 'give back' or 'hand back'. The teacher returns work after marking it.",
      'to do your work at home': "That is 'do your homework'. You hand it in after you finish it.",
      'to copy work from a friend':
        "That is 'copy'. 'Hand in' means to give your work to the teacher.",
    },
    more: "You can hand in homework, a form, or something you found: 'I handed in the purse at the office.'",
    tip: "A useful question in class: 'When do we have to hand this in?'",
  },
  'turn round': {
    why: "The board is behind you, so you must face the other way to see it. To 'turn round' means to face the other way.",
    not: {
      'to go back the way you came':
        "That is 'turn back'. Here you stay in your place and face the board.",
      'to sit very still': "That is 'keep still'. To turn round, you move your body.",
      'to stand up from your seat':
        "That is 'stand up' or 'get up'. You can turn round in your chair.",
    },
    more: "British English says 'turn round'; American English says 'turn around'. Both are correct.",
    tip: "A teacher may say 'Turn round and face the front.' It means look towards the board.",
  },
  'put up': {
    why: "In class you raise your hand to show the teacher you know the answer. To 'put up' something means to raise it into the air.",
    not: {
      'to lower something to the ground': "That is 'put down', the opposite.",
      'to wave goodbye to someone':
        "That is 'wave'. You put up your hand to answer, not to say goodbye.",
      'to write an answer on the board':
        "That is 'write'. You put up your hand first, and then the teacher asks you.",
    },
    more: 'It has other meanings: to put up a tent is to build it, and to put up a picture is to hang it on a wall.',
    tip: "In class, 'Hands up' asks everyone who knows the answer to raise a hand.",
  },
  'take away': {
    why: "Our plates were empty, so the waiter took them from the table. To 'take away' something means to remove it from a place.",
    not: {
      'to bring something to a table': "That is 'bring'. The waiter removed the plates.",
      'to wash something after a meal':
        "That is 'wash up', in the kitchen. The waiter took the plates from the table.",
      'to put food on a plate': "That is 'serve'. The plates were empty, so the meal was over.",
    },
    more: "In maths, 'take away' means subtract: 'Ten take away four is six.' A 'takeaway' is food you buy to eat at home.",
    tip: "You can split it: 'take away the plates' or 'take them away'.",
  },
  'look round': {
    why: "On Saturday they visited the castle and walked through it to see it. To 'look round' a place means to visit a place and see it.",
    not: {
      'to look behind you quickly':
        "That is another meaning: 'She looked round when I called her.' With 'the old castle', it means to visit.",
      'to walk past a place without stopping':
        "That is 'walk past' or 'pass'. They went inside to see the castle.",
      'to search for something you lost': "That is 'look for'. They were visiting, not searching.",
    },
    more: "We look round museums, shops, towns and houses for sale. 'Look around' means the same.",
    tip: "In a shop, say 'I'm just looking round, thank you' when you do not need help.",
  },
  'blow out': {
    why: "On a birthday you make a wish and then use your breath to stop the candle flames. To 'blow out' a candle means to stop a flame with your breath.",
    not: {
      'to light a flame with a match':
        "That is 'light'. The candles are already lit, and you stop the flames.",
      'to blow air into a balloon': "That is 'blow up' a balloon. 'Blow out' stops a flame.",
      'to cut a cake into pieces':
        "That is 'cut'. You blow out the candles first, then cut the cake.",
    },
    more: "The wind can blow out a candle too: 'The wind blew the candle out.'",
    tip: "A birthday tradition: sing 'Happy Birthday', then blow out the candles and make a wish.",
  },
  'dress up': {
    why: "For the party the children wore pirate clothes, for fun. To 'dress up' means to wear special clothes for fun.",
    not: {
      'to take off your school clothes':
        "That is 'get changed'. Dressing up means putting on special clothes.",
      'to put on clothes in the morning':
        "That is 'get dressed'. Dressing up as a pirate is for fun, not every day.",
      'to make clothes for a party':
        "That is 'make' or 'sew'. 'Dress up' means to wear the clothes.",
    },
    more: "It also means to wear smart clothes: 'We dressed up for the wedding.'",
    tip: "Use 'dress up as' with a character: 'She dressed up as a cat.'",
  },
  'join in': {
    why: "The speaker invites you to take part in their game. To 'join in' means to take part in an activity.",
    not: {
      'to watch a game from the side': "That is 'watch'. When you join in, you play too.",
      'to start a new club or team':
        "That is 'set up' or 'start'. Joining in is taking part in something already happening.",
      'to stop playing a game': "That is 'stop', the opposite.",
    },
    more: "You can join in a game, a song, a conversation or a lesson: 'Everyone joined in the song.'",
    tip: "To make a new pupil feel welcome, ask: 'Do you want to join in?'",
  },
  'come down': {
    why: "Someone is up a tree, and the speaker wants them on the ground because it is not safe. To 'come down' means to move to a lower place.",
    not: {
      'to climb to a higher place': "That is 'climb up', the opposite.",
      'to fall from a high place':
        "That is 'fall'. Coming down is something you choose to do, carefully.",
      'to stay in the same place': "That is 'stay'. The speaker wants the person to move down.",
    },
    more: "Prices and numbers can come down too: 'The price of bread has come down.'",
    tip: "A parent at the bottom of the stairs might call 'Come down for dinner.'",
  },
  'put back': {
    why: "The milk came out of the fridge, and it must go back there. To 'put back' something means to return something to where it was.",
    not: {
      'to take something out of a place': "That is 'take out', the opposite.",
      'to put something in the bin':
        "That is 'throw away'. The milk goes back in the fridge, not in the bin.",
      'to move something further back': "'Back' here means to its old place, not further away.",
    },
    more: 'Shops ask you to put things back on the shelf if you do not want them.',
    tip: "With 'it' or 'them', the word goes in the middle: 'put it back', never 'put back it'.",
  },
  'take back': {
    why: "The shoes did not fit, so the speaker returned them to the shop. To 'take back' something means to return something you bought.",
    not: {
      'to try something on in a shop':
        "That is 'try on', which you do before you buy. The speaker had already bought the shoes.",
      'to keep something you bought':
        'That is the opposite. The shoes were too small, so they went back.',
      'to throw something in the bin':
        "That is 'throw away'. The shoes went back to the shop, not into the bin.",
    },
    more: "It also means to say you were wrong: 'I take it back, you were right.'",
    tip: 'Keep the receipt. Shops often ask for it when you take something back.',
  },
  'fill up': {
    why: "The glass is empty or nearly empty, and the speaker wants it full of water. To 'fill up' something means to make it completely full.",
    not: {
      'to make something empty': "That is 'empty', the opposite.",
      'to write words on every line of a form':
        "That is 'fill in' a form. 'Fill up' is about making a container full.",
      'to drink all of something': "That is 'drink up'. Filling a glass puts water in it.",
    },
    more: 'At a petrol station, drivers fill up the car: they fill the tank with petrol.',
    tip: "You can split it: 'fill up my glass' or 'fill it up'.",
  },
  'turn over': {
    why: "You have finished one side of the page and need to see the next part on the back. To 'turn over' a page means to move a page to see its other side.",
    not: {
      'to tear a page out of the book carefully':
        "That is 'tear out'. When you turn over a page, it stays in the book.",
      'to fold a page in half': "That is 'fold'. Turning over moves the page to show its back.",
      'to read a page again': "That is 'read again'. 'Turn over' shows the next side.",
    },
    more: "In a test, 'Turn over' at the bottom of a page means there are more questions on the back.",
    tip: "It can also mean to roll your body: 'He turned over in bed.'",
  },
  'do up': {
    why: "It is very cold, so the speaker wants your coat closed. In British English, to 'do up' a coat means to close the buttons or zip.",
    not: {
      'to open the buttons or zip': "That is 'undo', the opposite.",
      'to take off your coat':
        "That is 'take off'. In the cold you keep your coat on and close it.",
      'to wash a dirty coat': "That is 'wash'. 'Do up' is about the buttons or zip.",
    },
    more: 'We do up coats, shoes and buttons. To do up a house means to repair and paint it.',
    tip: "The opposite is 'undo': 'Undo your coat when you are inside.'",
  },
  'line up': {
    why: "When the bell rings, pupils make a line at the door. To 'line up' means to stand in a row, one behind another.",
    not: {
      'to sit down together in a big circle':
        "That is 'sit in a circle'. A line is a row, not a circle.",
      'to rush out of the room': "That is 'rush out'. Lining up means waiting in order, calmly.",
      'to wait at your desk': "That is 'wait'. To line up, you go to the door and stand in a row.",
    },
    more: "In British English, people queue at shops and bus stops. 'Line up' is used in schools, and in American English for queues.",
    tip: "Teachers often say 'Line up quietly, please.'",
  },
  'plug in': {
    why: "A computer needs power, so you connect it to the electricity before you start it. To 'plug in' a machine means to connect it to the power.",
    not: {
      'to disconnect a machine from the power': "That is 'unplug', the opposite.",
      'to start a machine working':
        "That is 'switch on'. The sentence says you plug it in before you switch it on.",
      'to fix a broken machine': "That is 'fix' or 'repair'. The computer is not broken.",
    },
    more: 'A plug is the part at the end of the wire. You push it into a socket on the wall.',
    tip: 'Before a long trip, plug in your phone so that it is charged.',
  },
  'come out': {
    why: "The rain has stopped, and now the sun is in the sky again. When the sun 'comes out', it appears in the sky.",
    not: {
      'to go behind a cloud': "That is the opposite. In British English we say the sun 'went in'.",
      'to go down at night': "That is 'set'. The sun came out after the rain, in the day.",
      'to leave a building':
        "That is another meaning: 'She came out of the shop.' Here it is the sun.",
    },
    more: "Things that come out appear: the sun, the stars, flowers and new books. 'Her new book comes out in May.'",
    tip: "Use it in weather reports: 'The sun should come out by lunchtime.'",
  },
  'cut up': {
    why: "Soup needs vegetables in small pieces, so the carrots must be cut. To 'cut up' food means to make something into small pieces.",
    not: {
      'to peel the skin off fruit or vegetables':
        "That is 'peel'. You may peel the carrots first, then cut them into pieces.",
      'to cook something in water':
        "That is 'boil'. The carrots are cut before they go into the soup.",
      'to wash fruit or vegetables': "That is 'wash'. 'Cut up' is about using a knife.",
    },
    more: "'Cut up' means many pieces. 'Cut' alone can be one cut: 'cut the bread in half'.",
    tip: 'Be careful with knives. Ask an adult to help you with hard vegetables.',
  },
  'Please take off your wet shoes at the door.': {
    why: "Wet shoes would make the floor dirty, so you remove them at the door. Here 'take off' means to remove a piece of clothing.",
    not: {
      'to start wearing a piece of clothing':
        "That is 'put on', the opposite. Wet shoes come off at the door.",
      'to leave the ground and fly':
        'That is what a plane does. Shoes show it is about clothes here.',
      'to dry something with a towel': "That is 'dry'. Taking off your shoes means removing them.",
    },
    more: "We take off coats, hats, shoes and glasses. You can split it: 'take them off'.",
    tip: 'In many homes, people take their shoes off at the front door.',
  },
  'Can you pick up that pen from the floor?': {
    why: "The pen is on the floor, and the speaker wants it lifted. Here 'pick up' means to lift something from a surface.",
    not: {
      'to drop something onto the floor':
        "That is 'drop', the opposite. The pen is already on the floor.",
      'to choose one from a group':
        "That is 'pick' alone, or 'pick out'. Here there is only one pen.",
      'to collect someone in a car':
        "That is another meaning: 'I'll pick you up at six.' A pen on the floor shows it means to lift.",
    },
    more: "With 'it' or 'them', the word goes in the middle: 'pick it up', never 'pick up it'.",
    tip: "Teachers say 'Pick up any rubbish near your desk.'",
  },
  'The music is too loud. Please turn it down.': {
    why: "The music is too loud, so the speaker wants less noise. Here 'turn down' means to make a sound quieter.",
    not: {
      'to make a sound louder': "That is 'turn up', the opposite. The music is already too loud.",
      'to say no to an offer or a job':
        "That is another meaning: 'He turned down the job.' Loud music shows it is about sound.",
      'to switch a machine on': "That is 'turn on'. The music is already playing.",
    },
    more: 'We turn down music, the television, the radio and the heating, to make it quieter or cooler.',
    tip: "With 'it', the word goes in the middle: 'turn it down', never 'turn down it'.",
  },
  'Please hang up your wet coat in the hall.': {
    why: "Your coat is wet, so you put it on a hook in the hall to dry. Here 'hang up' means to put something on a hook.",
    not: {
      'to end a telephone call':
        "That is another meaning: 'She hung up the phone.' A coat shows it means to put it on a hook.",
      'to put a coat in the washing machine':
        "That is 'wash'. The coat is wet from rain, not dirty.",
      'to fold clothes and put them away':
        "That is 'fold'. You hang a coat on a hook; you do not fold it.",
    },
    more: 'We hang up coats, pictures and posters. A hanger is the shape you hang clothes on.',
    tip: "With 'it', the word goes in the middle: 'hang it up'.",
  },
  'It is cold, so I put on my hat.': {
    why: "Here 'put on' means to start wearing a hat. The opposite is 'take off': you remove it, for example when you are inside again.",
    not: {
      'put off':
        "'Put off' means to delay something. With clothes, the opposite of 'put on' changes the verb as well: 'take off'.",
      'take on':
        "'Take on' means to agree to do work: 'She took on a new job.' It is not about clothes.",
      'put away':
        "'Put away' means to store something. You may store your hat after you remove it, but that is not the opposite.",
    },
    more: 'Some opposites change the verb as well as the small word. Learn them as pairs.',
    tip: 'Learn clothes verbs in pairs: on with a coat in the morning, off with it in the evening.',
  },
  'The class stood up when the visitor arrived.': {
    why: "Here 'stand up' means to rise from your seat to your feet. The opposite is 'sit down': to go back onto your seat.",
    not: {
      'stand down':
        "'Stand down' means to leave an important job. It is not the opposite of standing up.",
      'sit up':
        "'Sit up' means to sit with your back straight. You are still sitting, so it is not the opposite.",
      'get up': "'Get up' means almost the same as 'stand up'. It is not the opposite.",
    },
    more: 'These two are a pair. Both words change: stand becomes sit, and up becomes down.',
    tip: "Teachers use the pair every day: 'Stand up, please', and then 'Sit down, please'.",
  },
  'Pick up your bag and follow me.': {
    why: "Here 'pick up' means to lift your bag. The opposite is 'put down': to place it back on the floor or a table.",
    not: {
      'pick out': "'Pick out' means to choose. It is not the opposite of lifting.",
      'put up':
        "'Put up' means to raise or to build, like a tent. It is not the opposite of 'pick up'.",
      'put on':
        "'Put on' means to start wearing. You can put on a backpack, but that is not the opposite of 'pick up'.",
    },
    more: 'Opposites of phrasal verbs often change both words: pick becomes put, and up becomes down.',
    tip: 'In a shop, you lift something to look at it and place it back if you do not want it.',
  },
  'Get in the car. It is starting to rain.': {
    why: "Here 'get in' means to enter the car. The opposite is 'get out': to leave the car.",
    not: {
      'get off':
        "We get off a bus or a train, not a car. For a car, the opposite of 'get in' is 'get out'.",
      'get away': "'Get away' means to escape. It is not the opposite of entering a car.",
      'get up': "'Get up' means to leave your bed or stand up. It is not about cars.",
    },
    more: "Use 'get in' and 'get out' for cars and taxis, and 'get on' and 'get off' for buses, trains and bikes.",
    tip: "Say 'get out of the car', with 'of' before the car.",
  },
  'I love this song. Turn it up, please.': {
    why: "Here 'turn up' means to make the music louder. The opposite is 'turn down': to make it quieter.",
    not: {
      'turn back': "'Turn back' means to go back the way you came. It is not about sound.",
      'turn over':
        "'Turn over' means to move something so its other side shows. It is not about sound.",
      'turn into': "'Turn into' means to become something else. It is not about sound.",
    },
    more: 'The same pair works for heating: up makes it hotter, and down makes it cooler.',
    tip: "With 'it', put the small word after it: 'turn it up', never 'turn up it'.",
  },
  'The train speeds up after it leaves the station.': {
    why: "Here 'speed up' means to go faster. The opposite is 'slow down': to go less quickly.",
    not: {
      'calm down': "'Calm down' means to become less upset. It is about feelings, not speed.",
      'break down':
        "'Break down' means to stop working because of a fault. It is not the opposite of going faster.",
      'set off':
        "'Set off' means to start a journey. A train sets off from a station, but that is not the opposite of 'speed up'.",
    },
    more: 'These two are a pair. Before a station, a train goes less and less quickly.',
    tip: 'Both words change in this pair: speed becomes slow, and up becomes down.',
  },
  'Switch on the computer and wait for it to start.': {
    why: "Here 'switch on' means to start the computer. The opposite is 'switch off': to stop it working.",
    not: {
      'switch over':
        "'Switch over' means to change, for example to another television channel. It is not the opposite.",
      'turn on': "'Turn on' means the same as 'switch on'. It is not the opposite.",
      'log on':
        "'Log on' means to enter a computer system with your details. It does not stop the computer.",
    },
    more: "'Turn on' and 'turn off' mean the same as this pair.",
    tip: 'At the end of the day, switch computers and lights off to save energy.',
  },
  'I took out the plates for dinner.': {
    why: "Here 'take out' means to take the plates from the cupboard. The opposite is 'put away': to put them back in the cupboard.",
    not: {
      'take away':
        "'Take away' means to remove something from a place. A waiter takes plates away, but that does not put them back.",
      'put out':
        "'Put out' can mean to place things ready to use, which is close to taking them out. It is not the opposite.",
      'take off': "'Take off' means to remove clothes. It is not about plates.",
    },
    more: 'This pair works for anything you keep in a cupboard, a bag or a drawer.',
    tip: 'After the washing-up, the plates go back in the cupboard.',
  },
  'Please be quiet, or you will ___ the baby.': {
    why: "A sleeping baby can hear noise and stop sleeping. To 'wake up' someone means to make them stop sleeping, so the speaker asks you to be quiet.",
    not: {
      'stay up':
        "'Stay up' means to not go to bed. It cannot have a person after it: you cannot stay up the baby.",
      'look up': "'Look up' means to search for a word or a fact. It is not about sleep.",
      'grow up': "'Grow up' means to become an adult. A noise cannot do that to a baby.",
    },
    more: "You can wake yourself or another person: 'My mum woke me at six.'",
    tip: "With 'him' or 'her', the small word goes after it: 'Don't wake her up.'",
  },
  'I ___ the bus and walked the last few metres home.': {
    why: "The speaker walked home after the bus ride, so they left the bus first. To 'get off' a bus means to leave it; the past is 'got off'.",
    not: {
      'got on':
        "'Get on' means to go onto the bus. After getting on, you ride the bus; you do not walk home.",
      'got in': "We use 'get in' for cars and taxis, not buses.",
      'got over':
        "'Get over' means to feel better after an illness or a sad time. It is not about buses.",
    },
    more: "Use 'get on' and 'get off' for buses, trains and bikes. Use 'get in' and 'get out of' for cars.",
    tip: 'On a British bus, press the bell before your stop so that the driver knows to stop.',
  },
  'Please ___ your phones before the film starts.': {
    why: "A ringing phone would spoil the film for everyone, so the phones must stop working. To 'switch off' a machine means to stop it working.",
    not: {
      'switch on':
        "'Switch on' means to start a machine. A phone that is on can ring during the film.",
      'turn up':
        "'Turn up' means to make a sound louder. That is the opposite of what a cinema wants.",
      'put on':
        "'Put on' means to start wearing, or to start music or a film. It does not stop a phone.",
    },
    more: "'Turn off' means the same. At the cinema you may also hear: 'Please put your phones on silent.'",
    tip: "You can split it: 'switch off your phone' or 'switch it off'.",
  },
  'I forgot my bag, so I ___ to get it.': {
    why: "The speaker left the bag behind, so they returned to the place to get it. To 'go back' means to return to a place; the past is 'went back'.",
    not: {
      'gave back':
        "'Give back' means to return something to its owner. It needs a thing after it, and here the speaker is going somewhere.",
      'put back':
        "'Put back' means to return something to its place. It needs a thing after it: 'put the book back'.",
      'looked back':
        "'Look back' means to look behind you, or to think about the past. It does not get you the bag.",
    },
    more: "Use 'go back' for returning to a place, and 'give back' or 'put back' for returning things.",
    tip: "Say 'go back to' a place: 'We went back to the hotel.' With 'home', there is no 'to'.",
  },
  'There is paint on the floor. Please ___ the mess.': {
    why: "Paint on the floor is a mess, and the speaker wants the floor clean again. To 'clean up' a mess means to make a place clean.",
    not: {
      'cut up':
        "'Cut up' means to cut something into small pieces. You cannot do that to paint on the floor.",
      'fill up': "'Fill up' means to make a container full. A mess needs cleaning, not filling.",
      'grow up': "'Grow up' means to become an adult. It cannot have a mess after it.",
    },
    more: "We clean up a mess, a kitchen or a room. 'Tidy up' is close, but tidying puts things in order.",
    tip: "Say 'Sorry, I'll clean it up' when you make a mess.",
  },
  'I can’t find my phone. Can you help me ___ it?': {
    why: "The phone is lost, so the speaker needs help to search for it. To 'look for' something means to try to find it.",
    not: {
      'look after':
        "'Look after' means to take care of something. You cannot care for a phone you cannot find.",
      'look at':
        'To look at something, you need to see it first. The speaker cannot find the phone.',
      'look through':
        "'Look through' means to search inside something, like a bag or a drawer. You cannot search inside a phone you cannot find.",
    },
    more: "'Look for' is the search and 'find' is the end of it: 'I looked for an hour and found it in my coat.'",
    tip: "It does not split: say 'look for it', never 'look it for'.",
  },
  'I am very tired. I want to ___ on my bed.': {
    why: "A tired person wants to rest, and on a bed you rest flat. To 'lie down' means to put your body flat to rest.",
    not: {
      'sit up': "'Sit up' means to sit with a straight back. It does not help a tired person rest.",
      'stand up': "'Stand up' means to get onto your feet. You do not stand on a bed to rest.",
      'fall over': "'Fall over' means to drop to the ground by accident. Nobody wants to do that.",
    },
    more: "The past is 'lay down': 'I lay down for an hour.' Do not mix it up with 'lied', which means you said something untrue.",
    tip: "Say 'lie down on' a bed or a sofa: 'Lie down on the sofa for a while.'",
  },
  'Someone is at the door. Please tell them to ___.': {
    why: "A visitor is outside the door, and the speaker wants them inside. To 'come in' means to enter a room or a building.",
    not: {
      'go out': "'Go out' means to leave a building. The visitor is already outside.",
      'get out':
        "'Get out' means to leave, and it is rude to say it to someone. The visitor is outside, not inside.",
      'give in': "'Give in' means to stop arguing and agree. There is no argument here.",
    },
    more: "The person inside says the answer to let someone enter. The person outside asks 'May I come in?'",
    tip: 'In Britain, people often knock and wait for an answer before they open a door.',
  },
  'It is raining, so we can’t ___ to play.': {
    why: "Rain keeps the children inside, so they cannot leave the house to play. To 'go out' means to leave your home for a time.",
    not: {
      'stay in':
        "'Stay in' means to remain at home. Rain is a reason to stay in, so 'can't stay in' makes no sense.",
      'come in': "'Come in' means to enter. The children are already inside.",
      'get up': "'Get up' means to leave your bed. Rain does not stop you getting up.",
    },
    more: "It is the opposite of 'stay in': 'Shall we go out or stay in tonight?'",
    tip: "Say 'go out to play' for children and 'go out for a walk' for anyone.",
  },
  'The floor is wet. Walk slowly, or you will ___.': {
    why: "A wet floor is slippery, and walking fast on it can make you drop to the ground. To 'fall over' means to drop to the ground by accident.",
    not: {
      'fall out':
        "'Fall out' means to argue and stop being friends. A wet floor does not make people argue.",
      'fall apart':
        "'Fall apart' means to break into pieces. People do not do that on a wet floor.",
      'fall behind':
        "'Fall behind' means to be slower than others. Walking slowly would make that more likely, not less.",
    },
    more: "Schools and shops put up yellow signs that say 'Caution: wet floor', so that nobody slips.",
    tip: "To say what made you fall, add it: 'He fell over a bag.'",
  },
  'We have no food at home, so let’s ___ tonight.': {
    why: "There is no food at home, so the family must have dinner somewhere else. To 'eat out' means to have a meal in a restaurant.",
    not: {
      'eat in':
        "'Eat in' means to eat at home, not in a restaurant. With no food at home, that is not possible.",
      'eat up': "'Eat up' means to finish all your food. There is no food to finish.",
      'stay in':
        "'Stay in' means to stay at home. With no food there, staying in does not solve the problem.",
    },
    more: 'Families often have a meal in a restaurant for a birthday or another special day.',
    tip: "To suggest a restaurant, say 'Let's eat out.' To suggest eating at home, say 'Let's eat in.'",
  },
  'It is hot in here, so I will ___ my jumper.': {
    why: "When you are too hot, you remove a warm jumper. To 'take off' clothes means to remove them.",
    not: {
      'put on':
        "'Put on' means to start wearing. In a hot room you remove clothes; you do not add them.",
      'try on':
        "'Try on' means to wear clothes in a shop to see if they fit. That does not help you feel cooler.",
      'take out':
        "'Take out' means to remove something from a bag or a box, not to remove clothes you are wearing.",
    },
    more: 'We take off a coat, a jumper, shoes and glasses. The opposite is to put them on.',
    tip: "With 'it', the word goes in the middle: 'take it off'.",
  },
  'My alarm rings at seven, but I ___ at half past.': {
    why: "The alarm rings at seven, but the speaker stays in bed and leaves it thirty minutes later. To 'get up' means to leave your bed after sleeping.",
    not: {
      'give up':
        "'Give up' means to stop doing something. It does not tell us when you leave your bed.",
      'go up': "'Go up' means to move higher, or to rise, like prices. It is not about your bed.",
      'get on':
        "'Get on' means to go onto a bus or a train, or to be friendly with someone. It is not about the morning.",
    },
    more: 'Many people stay in bed for a few minutes after the alarm, before they leave it.',
    tip: "To ask about someone's day, say: 'What time do you get up?'",
  },
  'Don’t shout. Take a deep breath and ___.': {
    why: "The person is shouting because they are upset, and a deep breath helps them relax. To 'calm down' means to become less upset or excited.",
    not: {
      'hurry up': "'Hurry up' means to be quicker. A deep breath is for relaxing, not rushing.",
      'speak up': "'Speak up' means to speak more loudly. The person is already shouting.",
      'cheer up':
        "'Cheer up' means to become happier when you are sad. A person who is shouting is angry or upset, not sad.",
    },
    more: "You can calm down yourself, or calm someone else: 'His mum calmed him down.'",
    tip: 'When you feel angry, count to ten slowly. It can help.',
  },
  '___. There is a big hole in the road.': {
    why: "A big hole in the road is a danger, so the speaker warns you. 'Look out' is a warning: be careful because of danger.",
    not: {
      'Look up':
        "'Look up' means to raise your eyes. Looking higher would not help you see a hole in the road.",
      'Look after':
        "'Look after' means to take care of someone. It needs a person or a thing after it, and it is not a warning.",
      'Look away':
        "'Look away' means to turn your eyes from something. That would make the hole more dangerous.",
    },
    more: "'Watch out' means the same: 'Watch out, the step is broken.'",
    tip: 'Say the warning quickly and loudly when there is danger: a car, a hole or a step.',
  },
  'We are playing football. Do you want to ___?': {
    why: "The speaker is inviting you to play with them. To 'join in' means to take part in an activity.",
    not: {
      'give in': "'Give in' means to stop arguing and agree. You do not invite someone to do that.",
      'log in': "'Log in' means to enter a computer system. It is not about a game of football.",
      'check in':
        "'Check in' means to tell a hotel or an airport that you have arrived. It is not about football.",
    },
    more: "You can join in a game, a song or a conversation. 'Join' alone is for a club: 'join the football club'.",
    tip: "Children often ask 'Can I join in?' when they want to play.",
  },
  'My phone has no power. Where can I ___ the charger?': {
    why: "The phone needs power, and the charger must be connected to the electricity. To 'plug in' something means to connect it to the power.",
    not: {
      'log in':
        "'Log in' means to enter a computer system with a password. It does not give a phone power.",
      'fill in': "'Fill in' means to write information in a form. It is not about power.",
      'join in':
        "'Join in' means to take part in an activity. A charger cannot take part in anything.",
    },
    more: 'In Britain, plugs have three pins. Visitors from other countries often need an adapter.',
    tip: "You can split it: 'plug in the charger' or 'plug it in'.",
  },
  'Mr Lee is behind you. ___ and say hello.': {
    why: "Mr Lee is behind you, so you must face the other way to see him. To 'turn round' means to face the other way.",
    not: {
      'Turn over':
        "'Turn over' means to move something so its other side shows, like a page. It is not about facing someone.",
      'Turn up':
        "'Turn up' means to arrive, or to make a sound louder. It does not help you face Mr Lee.",
      'Turn off': "'Turn off' means to stop a machine. It is not about where you face.",
    },
    more: "In British English, 'turn round' and 'turn around' are both used.",
    tip: 'To be polite, face a person and look at them when they speak to you.',
  },
  'I am going to the shop. I will ___ in ten minutes.': {
    why: "The speaker is leaving now and will return after ten minutes. To 'come back' means to return to where you were.",
    not: {
      'go away':
        "'Go away' means to leave. The speaker is already leaving; the sentence is about returning.",
      'come in':
        "'Come in' means to enter a room. The speaker is talking about returning from the shop.",
      'come on':
        "'Come on' is said to make someone hurry or try harder. It does not mean to return.",
    },
    more: "'Be back' means the same in speaking: 'I'll be back in ten minutes.'",
    tip: "Add the place you leave with 'from': 'I came back from the shop.'",
  },
  'Write your name on your test and ___ your paper.': {
    why: "At the end of a test, students give their papers to the teacher. To 'hand in' work means to give your work to a teacher.",
    not: {
      'hand out':
        "'Hand out' means to give one to each person. The teacher hands out the papers at the start.",
      'give out':
        "'Give out' means to hand one to each person, like 'hand out'. Students do not do that with their tests.",
      'look up':
        "'Look up' means to search for a word or a fact. It is not what you do with a finished test.",
    },
    more: 'Teachers collect homework and later hand it back with marks.',
    tip: "You can split it: 'hand in your paper' or 'hand it in'.",
  },
  'When you finish this page, ___ and do the next one.': {
    why: "The next part is on the back of the page, so you move the page to see its other side. To 'turn over' means to move a page to see its other side.",
    not: {
      'turn round': "'Turn round' means to face the other way. You move the page, not your body.",
      'turn up': "'Turn up' means to arrive, or to make a sound louder. It is not about pages.",
      'turn off': "'Turn off' means to stop a machine. A page is not a machine.",
    },
    more: "'PTO' at the bottom of a page means 'please turn over'.",
    tip: 'In a test, check the back of each page before you finish.',
  },
  'pay back': {
    why: "The speaker borrowed money and will return it on Friday. To 'pay back' someone means to return money you borrowed.",
    not: {
      'to lend money to a friend':
        "That is 'lend'. The speaker borrowed the money, so now they must return it.",
      'to spend all of your money': "That is 'spend'. 'Pay back' is about returning money.",
      'to pay for something in a shop':
        "That is 'pay for'. 'Pay back' means to return money to a person.",
    },
    more: "You can say 'pay back the money' or 'pay you back'. 'Repay' is the formal word.",
    tip: "A promise to a friend: 'I'll pay you back tomorrow.'",
  },
  'give away': {
    why: "Her old clothes went to a charity shop, and she got no money for them. To 'give away' something means to let others have it for nothing.",
    not: {
      'to sell something for money': "That is 'sell'. A charity shop gets the clothes for free.",
      'to throw something in the bin':
        "That is 'throw away'. Other people can still use clothes that are given away.",
      'to lend something for a short time':
        "That is 'lend'. When you give something away, it does not come back.",
    },
    more: "It can also mean to tell a secret by mistake: 'Don't give away the end of the film.'",
    tip: "A 'giveaway' is something free: 'The magazine came with a free pen as a giveaway.'",
  },
  'ring back': {
    why: "The speaker is busy now and will phone again later. To 'ring someone back' means to phone someone who phoned you.",
    not: {
      'to end a phone call': "That is 'hang up'. The speaker will phone again later.",
      'to answer the phone': "That is 'answer' or 'pick up'. The speaker is already on the phone.",
      'to wait on the phone for a while': "That is 'hold on'. The speaker is too busy to wait.",
    },
    more: "'Ring' is British English for 'phone' or 'call'. 'Call back' means the same.",
    tip: "The person usually goes in the middle: 'Can I ring you back?'",
  },
  'break up': {
    why: "Next Friday is the last day of school before the summer holidays. In British English, schools 'break up' when they finish for a holiday.",
    not: {
      'to start school after a holiday':
        "That is 'go back to school'. 'Break up' is the end of the term.",
      'to break something into pieces':
        "That is another meaning: 'break up the chocolate'. With 'the summer holidays', it means school ends.",
      'to go on a school trip': "That is 'go on a trip'. 'Break up' is when the term ends.",
    },
    more: "Pupils and teachers both break up: 'When do you break up for Christmas?'",
    tip: "A useful question for friends at school: 'When do we break up?'",
  },
  'get together': {
    why: "The speaker wants to meet at the weekend and spend time with friends. To 'get together' means to meet friends to spend time.",
    not: {
      'to say goodbye to your friends': "That is 'say goodbye'. Getting together is when you meet.",
      'to work alone at home': "That is 'work alone'. 'Get together' needs two or more people.",
      'to stay away from people': "That is the opposite. 'Get together' means to meet.",
    },
    more: "The noun is 'get-together': 'We're having a little get-together on Sunday.'",
    tip: "Use it to make plans: 'Let's get together for lunch.'",
  },
  'come over': {
    why: "The speaker invites a friend to their home after school. To 'come over' means to visit someone at their home.",
    not: {
      'to walk past someone’s house':
        "That is 'walk past'. 'Come over' means you go inside and visit.",
      'to move into a new house': "That is 'move in'. A visit is for a short time.",
      'to leave someone’s house': "That is 'leave' or 'go home'. 'Come over' is when you arrive.",
    },
    more: "'Come round' means the same in British English: 'Come round on Saturday.'",
    tip: "To invite a friend, say 'Do you want to come over?'",
  },
  'move in': {
    why: "The new neighbours started living in their home last week. To 'move in' means to start living in a new home.",
    not: {
      'to stop living in a home': "That is 'move out', the opposite.",
      'to visit a home for a short time':
        "That is 'visit'. When you move in, you stay and live there.",
      'to build a new house':
        "That is 'build'. The neighbours moved into a home that was already there.",
    },
    more: "With a place, say 'move into': 'They moved into a flat by the sea.'",
    tip: "Say 'move in' with no place after it, and 'move into' with a place: 'We moved in on Monday.'",
  },
  'sell out': {
    why: "Everyone wanted the tickets, and after ten minutes there were none left. When tickets 'sell out', they are all sold, with none left.",
    not: {
      'to cost a lot of money':
        "That is 'be expensive'. The sentence is about how fast the tickets went, not the price.",
      'to be sold more cheaply':
        "That is 'be on sale' or 'be reduced'. Sold out means none are left.",
      'to go on sale for the first time':
        "That is 'go on sale'. The tickets sold out after they went on sale.",
    },
    more: "A shop can sell out of something: 'The bakery sold out of cakes by noon.' A show can be 'sold out'.",
    tip: "On a website, 'Sold out' next to a product means you cannot buy it now.",
  },
  'put out': {
    why: "The firefighters stopped the fire quickly. To 'put out' a fire means to stop something burning.",
    not: {
      'to start a fire':
        "That is 'start' or 'light'. Firefighters stop fires; they do not start them.",
      'to run away from a fire quickly':
        "That is 'run away'. Firefighters go towards a fire to stop it.",
      'to make a fire bigger':
        'That is the opposite. Firefighters make a fire smaller until it stops.',
    },
    more: "We put out fires and candles. It can also mean to place things ready: 'Put out the plates for dinner.'",
    tip: 'In Britain, the emergency number for the fire service is 999.',
  },
  'get over': {
    why: "The cold made the speaker ill, and after a week they felt well again. To 'get over' an illness means to feel well again after an illness.",
    not: {
      'to catch an illness from another person':
        "That is 'catch': 'I caught a cold from my sister.' Getting over it is the end of the illness.",
      'to climb over a wall':
        "That is the usual meaning of the words: 'get over the wall'. With 'my cold', it means to feel well again.",
      'to feel ill for a long time': "That is 'be ill'. 'Get over' is when the illness ends.",
    },
    more: 'You can also get over a sad or difficult time, like moving to a new country.',
    tip: "It does not split: say 'get over a cold', never 'get a cold over'.",
  },
  'try out': {
    why: "The speaker wants to ride the new bike to see what it is like. To 'try out' something means to test something by using it.",
    not: {
      'to buy something new': "That is 'buy'. The bike belongs to the other person.",
      'to fix something broken': "That is 'fix' or 'repair'. The bike is new, not broken.",
      'to wear clothes to see if they fit':
        "That is 'try on', for clothes and shoes. For a bike or a machine, use 'try out'.",
    },
    more: "We try out machines, games, ideas and new places: 'Let's try out the new cafe.'",
    tip: "You can split it: 'try out the bike' or 'try it out'.",
  },
  'cross out': {
    why: "A wrong word needs to be removed, so you draw a line through it. To 'cross out' a word means to draw a line through it.",
    not: {
      'to write a word again neatly':
        "That is 'write out' or 'copy'. Crossing out shows a word is wrong.",
      'to underline an important word':
        "That is 'underline': you draw a line under a word, not through it.",
      'to say a word out loud': "That is 'say' or 'read out'. 'Cross out' is about writing.",
    },
    more: "In British English, 'rub out' means to remove pencil with a rubber. With a pen, you cross out the word.",
    tip: 'In an exam, cross out a mistake with one neat line, and write the new answer next to it.',
  },
  'sign up': {
    why: "The speaker gave their name to join the school football team. To 'sign up' means to join by giving your name.",
    not: {
      'to leave a team or club': "That is 'leave' or 'drop out', the opposite.",
      'to watch a team play a match': "That is 'watch'. When you sign up, you join the team.",
      'to start a new team': "That is 'start' or 'set up'. The school team was already there.",
    },
    more: "We sign up for clubs, classes and websites: 'Sign up for our newsletter.'",
    tip: "Use 'sign up for' with the thing you join: 'sign up for a course'.",
  },
  'keep off': {
    why: "The sign asks people not to walk on the grass. To 'keep off' something means to avoid walking on it.",
    not: {
      'to cut the grass short':
        "That is 'cut' or 'mow'. The sign asks people to stay off the grass.",
      'to water the plants in a park': "That is 'water'. 'Keep off' asks you to keep away.",
      'to sit on the grass to rest':
        "That is the opposite. 'Keep off' means stay away from the grass.",
    },
    more: "In Britain, parks and schools sometimes have signs that say 'Please keep off the grass.'",
    tip: "It can also mean to stop something touching: 'Cover the food to keep the flies off.'",
  },
  'turn into': {
    why: "A caterpillar changes and becomes a butterfly. To 'turn into' something means to change and become something else.",
    not: {
      'to fly away from something':
        "That is 'fly away'. The caterpillar changed into a butterfly first.",
      'to eat a lot of leaves': "That is what caterpillars do, but 'turn into' means to change.",
      'to grow bigger and stronger over time':
        "That is 'grow'. 'Turn into' means to become something different.",
    },
    more: 'Things change into other things: water into ice, and a hobby into a job.',
    tip: "After it, use a noun: 'The rain turned into snow.'",
  },
  'hold up': {
    why: "The speaker missed the start because of the traffic. To 'hold up' someone means to make someone late; here the traffic held the speaker up.",
    not: {
      'to carry something high':
        "That is the usual meaning of the words: 'hold up a sign'. With traffic, it means to make you late.",
      'to arrive early':
        'That is the opposite. The speaker missed the start, so they arrived late.',
      'to get lost on the way': "That is 'get lost'. The speaker was stuck in traffic, not lost.",
    },
    more: "The noun is 'hold-up': 'There is a hold-up on the motorway.'",
    tip: "A polite way to say sorry: 'I'm sorry I'm late. I was held up.'",
  },
  'speak up': {
    why: "The listener cannot hear the speaker, so they ask for more volume. To 'speak up' means to talk more loudly.",
    not: {
      'to talk more quietly': 'That is the opposite. The listener cannot hear.',
      'to stop talking': "That is 'stop talking' or 'be quiet'. The listener wants to hear more.",
      'to talk more slowly':
        "That is 'slow down'. 'Speak up' is about how loud you are, not how fast.",
    },
    more: "'Speak up for' someone means to support them: 'She spoke up for her friend.'",
    tip: 'In a big room, speak up so that the people at the back can hear you.',
  },
  'drop off': {
    why: "Mum drove the speaker to school and left them there. To 'drop someone off' means to take someone to a place by car.",
    not: {
      'to collect someone from a place':
        "That is 'pick up', the opposite. Mum left the speaker at school.",
      'to fall from a high place':
        "That is 'drop' or 'fall'. Here 'dropped me off' is about a car journey.",
      'to fall asleep for a short time':
        "That is another meaning: 'I dropped off in front of the TV.' Here it is about school.",
    },
    more: "It has a pair: one at the start of the school day, and 'pick up' at the end of it.",
    tip: "With 'me', 'you' or 'her', the word goes in the middle: 'drop me off'.",
  },
  'lock up': {
    why: "When everyone leaves, the doors must be locked so that the building is safe. To 'lock up' means to close all the doors with a key.",
    not: {
      'to open all the doors': "That is 'open up' or 'unlock', the opposite.",
      'to clean a building': "That is 'clean'. 'Lock up' is about keeping a building safe.",
      'to turn off all the lights and heating':
        "You may do that too, but 'lock up' means to lock the doors.",
    },
    more: 'The last person to leave a shop or a school locks up. It can also mean to put something in a safe place and lock it.',
    tip: "A useful question at work: 'Who is locking up tonight?'",
  },
  'Grandad got up slowly from his chair.': {
    why: "Grandad was sitting in a chair, and he rose slowly onto his feet. Here 'get up' means to rise to your feet, not to leave your bed.",
    not: {
      'to leave your bed in the morning':
        "That is the most common meaning of 'get up'. Here Grandad gets up from a chair, so it means to stand.",
      'to sit down on a chair': 'That is the opposite. Grandad was already sitting.',
      'to fall asleep in a chair':
        "That is 'nod off' or 'fall asleep'. 'Got up slowly' shows he moved onto his feet.",
    },
    more: "'Get up' means to stand after sitting or lying, and also to leave your bed. The words 'from his chair' show which.",
    tip: 'When an older person comes into a room, it is polite to stand and offer your seat.',
  },
  'Can you put on some music?': {
    why: "The speaker wants music to start playing. Here 'put on' means to start playing music or a film.",
    not: {
      'to stop playing music or a film': "That is 'turn off' or 'switch off', the opposite.",
      'to start wearing a piece of clothing':
        "That is another meaning of 'put on'. Music is not clothing, so here it means to start playing.",
      'to sing a song for friends': "That is 'sing'. When you put on music, a machine plays it.",
    },
    more: 'In British English, you can put on music, the radio, the television and the kettle.',
    tip: "Ask politely: 'Could you put the radio on, please?'",
  },
  'My brother works out at the gym every morning.': {
    why: "A gym is a place for exercise. Here 'work out' means to do exercise to get strong.",
    not: {
      'to find an answer by thinking':
        "That is another meaning: 'work out the answer'. A gym shows it means exercise.",
      'to work in an office': "That is 'work'. Working out at a gym is exercise, not a job.",
      'to leave the house early':
        "That is 'leave early'. He may leave early, but 'works out' means he exercises.",
    },
    more: "The noun is 'workout': 'I did a short workout before school.'",
    tip: "Meaning exercise, it has nothing after it: 'He works out.' Meaning solve, it has a thing after it: 'work out the answer'.",
  },
  'Please go on. I am listening.': {
    why: "The speaker stopped talking, and the listener wants to hear more. Here 'go on' means to continue what you were doing.",
    not: {
      'to start something completely new':
        "That is 'start'. 'Go on' means to continue the same thing.",
      'to happen in a place':
        "That is another meaning: 'What's going on?' Here the listener wants the speaker to continue.",
      'to stop and think': "That is 'stop' or 'pause'. The listener wants the speaker to continue.",
    },
    more: "It can also encourage someone to try: 'Go on, you can do it.'",
    tip: "After it, use -ing for the same action: 'She went on talking.'",
  },
  'She looked up from her book and smiled at me.': {
    why: "She was reading, then she raised her eyes to see the speaker and smiled. Here 'look up' means to raise your eyes from something.",
    not: {
      'to search for a word in a dictionary':
        "That is another meaning: 'look up a word'. Here she looks up 'from her book' to smile.",
      'to close a book and stand up': "That is 'close' and 'stand up'. She only moved her eyes.",
      'to read a book very quickly': "That is 'skim'. She stopped reading to look at the speaker.",
    },
    more: "Meaning search, it has a thing after it: 'look up a word'. Meaning raise your eyes, it often has 'from' or 'at': 'look up at the sky'.",
    tip: "'Look up to' someone means to admire them: 'I look up to my big sister.'",
  },
  'I picked up some Spanish on holiday.': {
    why: "On holiday the speaker learnt some Spanish by hearing it, without lessons. Here 'pick up' means to learn something without lessons.",
    not: {
      'to lift something from the floor':
        "That is another meaning: 'pick up a pen'. You cannot lift a language.",
      'to collect someone from a place':
        "That is another meaning: 'pick you up at six'. Spanish is a language, not a person.",
      'to forget something you learnt at school': "That is 'forget', the opposite.",
    },
    more: "We pick up languages, skills and habits: 'He picked up the guitar quickly.'",
    tip: "Say 'pick up a few words' when you learn a little of a language.",
  },
  'Hurry, time is running out.': {
    why: "'Hurry' shows there is not much time left. Here 'run out' means to become less until none is left.",
    not: {
      'to leave a place quickly':
        "That is another meaning: 'He ran out of the room.' Time cannot leave a room.",
      'to go more slowly': "That is 'slow down'. Time running out means there is less and less.",
      'to start again from the beginning': "That is 'start again'. When time runs out, it ends.",
    },
    more: "Without 'of', the thing comes first: 'Time is running out.' With 'of', a person comes first: 'We are running out of time.'",
    tip: 'In an exam, keep an eye on the clock so that you finish in time.',
  },
  'My alarm went off at six.': {
    why: "An alarm makes a loud noise at the time you set. Here 'go off' means to ring or make a loud noise.",
    not: {
      'to become bad, like old milk':
        'That is another meaning: food goes off. An alarm is not food.',
      'to stop working for good': "That is 'break' or 'stop working'. The alarm worked: it rang.",
      'to leave a place quickly':
        "That is another meaning: 'He went off without a word.' An alarm does not leave.",
    },
    more: 'Alarms and fireworks go off. A light can go off too, when it stops shining.',
    tip: 'Set your alarm to ring ten minutes early on a school day.',
  },
  'Log in with your name and password.': {
    why: "Here 'log in' means to enter a computer system. The opposite is 'log out': to leave it.",
    not: {
      'log on': "'Log on' means the same as 'log in', not the opposite.",
      'sign up':
        "'Sign up' means to join, for example by making an account. It is not the opposite of entering.",
      'look up': "'Look up' means to search for information. It is not about leaving a system.",
    },
    more: "'Log off' means the same as 'log out'. 'Sign in' and 'sign out' are another pair.",
    tip: 'On a shared computer at school, always leave your account when you finish, so nobody else can use it.',
  },
  'The price of bread went up last week.': {
    why: "Here 'go up' means that a price becomes higher. The opposite is 'go down': the price becomes lower.",
    not: {
      'go off':
        "'Go off' means that food becomes bad, or that an alarm rings. It is not about prices.",
      'go over': "'Go over' means to look at something again carefully. It is not about prices.",
      'go out':
        "'Go out' means to leave your home, or for a light to stop shining. It is not about prices.",
    },
    more: "Prices, numbers and temperatures go up and go down: 'The temperature went down at night.'",
    tip: "To describe a graph, use the pair: 'Sales went up in May and went down in June.'",
  },
  'We moved in on a sunny day in May.': {
    why: "Here 'move in' means to start living in a new home. The opposite is 'move out': to leave a home and stop living there.",
    not: {
      'move over':
        "'Move over' means to move to make space for someone: 'Move over so I can sit down.' It is not about homes.",
      'move up':
        "'Move up' means to make space, or to go to a higher level. It is not about leaving a home.",
      'come in': "'Come in' means to enter a room. It is close to 'move in', not its opposite.",
    },
    more: "With a place, use 'into' and 'out of': 'We moved into a flat' and 'We moved out of the flat'.",
    tip: 'When you leave a rented flat for good, you give the keys back to the owner.',
  },
  'Then Napoleon stood up to reply.': {
    why: "At a meeting in the big barn in Animal Farm, Snowball speaks first. Then Napoleon rises to his feet to answer him, and soon sits down again. Here 'stand up' means to get onto your feet from sitting.",
    not: {
      'to sit back down again':
        "That is 'sit down', the opposite. Napoleon stood up to speak, and sat down afterwards.",
      'to stop talking and listen to others':
        "That is 'listen'. Napoleon stood up so that he could talk.",
      'to walk out of the room':
        "That is 'walk out'. He stood up to reply, so he stayed at the meeting.",
    },
    more: 'People often stand up to speak at a meeting, so that everyone can see and hear them.',
  },
  'They were going to knock the windmill down.': {
    why: "In Animal Farm, the animals worked for a long time to build their windmill. Now men with a crowbar and a hammer want to destroy it. To 'knock down' a building means to destroy it.",
    not: {
      'to build something stronger':
        'That is the opposite. The animals built the windmill; the men want to destroy it.',
      'to hit a door to be let in':
        "That is 'knock' alone, or 'knock on a door'. 'Knock down' means to destroy.",
      'to paint something a new colour':
        "That is 'paint'. 'Knock down' means to make a building fall.",
    },
    more: "Here the thing goes in the middle: 'knock the windmill down'. It can also go after the small word, as in knock down a wall.",
    tip: "We knock down old buildings and walls. 'Pull down' means the same.",
  },
  'Going back, the others found that she had remained behind in the best bedroom.': {
    why: "In Animal Farm, the animals are coming down the stairs of the farmhouse when they see that Mollie is missing. They return upstairs and find her. Here 'go back' means to return to a place.",
    not: {
      'to move backwards slowly': "'Back' here means to the place they were before, not backwards.",
      'to stay in the same place':
        "That is 'stay'. The others moved: they went back up to find her.",
      'to look behind you':
        "That is 'look back'. The others went back to the bedroom; they did not only look.",
    },
    more: "'Remained behind' means stayed after the others had left. Mollie stayed in the bedroom.",
    tip: "An -ing form can start a sentence: 'Going back, they found her' means 'When they went back, they found her'.",
  },
  'At eleven o’clock Squealer came out to make another announcement.': {
    why: "In Animal Farm, the pigs are inside the farmhouse, and the other animals wait outside for news. Squealer leaves the house to speak to them. Here 'come out' means to leave a building and be seen.",
    not: {
      'to stay inside a building':
        'That is the opposite. Squealer came out to speak to the animals.',
      'to go back into a building': "That is 'go back in'. He came out to make an announcement.",
      'to start to shine, like the sun':
        "That is another meaning: 'The sun came out.' Here it is a pig leaving a house.",
    },
    more: "An announcement is news told to everyone. In the novel, Squealer is the pig who tells the animals the leaders' news.",
    tip: "Add 'of' and the place: 'She came out of the shop with a bag.'",
  },
  'My grandma is ill, so my mum ___ her.': {
    why: "When someone is ill, another person takes care of them. To 'look after' someone means to take care of them; with 'my mum', it is 'looks after'.",
    not: {
      'looks for': "'Look for' means to try to find someone. Grandma is not lost.",
      'looks through':
        "'Look through' means to search or read quickly, like a bag or a book. You cannot do that to a person.",
      'looks round':
        "'Look round' means to visit a place and see it. It does not take a person after it.",
    },
    more: 'We look after people who need help: babies, children, older people and anyone who is ill.',
    tip: "'Take care of' means the same and is a little more formal.",
  },
  'I want to ___ who wrote this book.': {
    why: "The speaker does not know who wrote the book and wants to learn it. To 'find out' means to learn a fact you did not know.",
    not: {
      'fill in':
        "'Fill in' means to write information in a form. It cannot go before 'who wrote this book'.",
      'give out':
        "'Give out' means to hand something to each person. It is not about learning a fact.",
      'try out': "'Try out' means to test something by using it. You cannot test a fact.",
    },
    more: "It often goes before a question word: 'find out who', 'find out where', 'find out how'.",
    tip: 'To learn facts for a project, search online or ask a librarian to help you.',
  },
  'This puzzle is too hard. I ___.': {
    why: "The puzzle is too hard, so the speaker stops trying. To 'give up' means to stop trying.",
    not: {
      'give back': "'Give back' means to return something to its owner. It needs a thing after it.",
      'give away':
        "'Give away' means to let others have something for free. It needs a thing after it.",
      'give out':
        "'Give out' means to hand something to each person. It does not mean to stop trying.",
    },
    more: "People say this when they cannot find an answer: 'I give up. What is it?'",
    tip: "Teachers often say the opposite: 'Don't give up. Try again.'",
  },
  'I want to be a doctor when I ___.': {
    why: "The speaker is a child now and talks about the future, when they are an adult. To 'grow up' means to develop from a child into an adult.",
    not: {
      'give up': "'Give up' means to stop trying. It does not tell us about the future.",
      'get up':
        "'Get up' means to leave your bed. You do it every day, not once when you are an adult.",
      'show up': "'Show up' means to arrive at a place. It does not mean to become an adult.",
    },
    more: "A common question for children: 'What do you want to be when you grow up?'",
    tip: "After 'when', use the present tense for the future: 'when I grow up', never 'when I will grow up'.",
  },
  'Please arrive at the airport two hours early to ___.': {
    why: "At an airport, you show your ticket and leave your big bags before the flight. To 'check in' means to tell an airport or a hotel that you have arrived.",
    not: {
      'check out':
        "'Check out' means to pay and leave a hotel. At an airport, before a flight, you check in.",
      'take off':
        'Planes take off, not passengers. You check in, and later the plane leaves the ground.',
      'log in':
        "'Log in' means to enter a computer system. It is not what you do at the airport desk.",
    },
    more: 'Many airlines now let you check in online before you go to the airport.',
    tip: "At the airport, follow the signs that say 'Check-in' and the name of your airline.",
  },
  'Can you ___ my sister from school today?': {
    why: "The sister is at school and needs someone to collect her. To 'pick up' someone means to come and collect them.",
    not: {
      'pick out':
        "'Pick out' means to choose one from a group. You do not choose your sister from the school.",
      'pick on':
        "'Pick on' means to be unkind to someone again and again. It is not about collecting someone.",
      'drop off':
        "'Drop off' means to take someone to a place and leave them. You drop someone off at school, not from it.",
    },
    more: 'It has a pair: in the morning someone drops you off, and in the afternoon someone collects you.',
    tip: "With 'her' or 'him', the word goes in the middle: 'pick her up'.",
  },
  'The plane ___ late because of the snow.': {
    why: "Snow can stop planes leaving on time, so this plane left the ground late. For a plane, to 'take off' means to leave the ground and begin to fly.",
    not: {
      'took out':
        "'Take out' means to remove something from a bag or a box. A plane does not do that.",
      'took up': "'Take up' means to start a hobby, or to fill space. It is not about planes.",
      'took over': "'Take over' means to take control of something. It is not about flying.",
    },
    more: "The noun is 'take-off': 'Fasten your seat belt for take-off.'",
    tip: "The opposite of take-off is 'landing': the plane leaves the ground and later lands.",
  },
  'She said goodbye and ___ the phone.': {
    why: "After 'goodbye', a phone call ends. To 'hang up' means to end a telephone call; the past is 'hung up'.",
    not: {
      'hung on': "'Hang on' means to wait. After saying goodbye, she ended the call.",
      'picked up':
        "To pick up the phone means to answer it. That happens at the start of a call, not after 'goodbye'.",
      'held up':
        "'Hold up' means to raise something, or to make someone late. It does not end a call.",
    },
    more: 'It comes from old telephones, which were put back on a hook on the wall.',
    tip: 'To hang up on someone means to end the call while they are still talking. It is rude.',
  },
  'To join the club, ___ this form and give it to Mrs Khan.': {
    why: "A form has spaces for your details, and you write in them before you give it to someone. To 'fill in' a form means to write information in the spaces.",
    not: {
      'fill up':
        "'Fill up' means to make a container full, like a glass. A form needs writing, not filling.",
      'give out':
        "'Give out' means to hand one to each person. You are giving the form to one person, Mrs Khan.",
      'put out': "'Put out' means to stop a fire, or to place things ready. It is not about forms.",
    },
    more: 'In British English we fill in a form; in American English people fill out a form.',
    tip: "Use capital letters when a form says 'Please write in capitals'.",
  },
  'I will ___ these old shoes because they have holes in them.': {
    why: "Shoes with holes are no good any more, so the speaker will put them in the bin. To 'throw away' something means to put it in the bin.",
    not: {
      'put away': "'Put away' means to store something in its place. You keep things you put away.",
      'give away':
        "'Give away' means to let others have something for free. Nobody wants shoes with holes.",
      'try on':
        "'Try on' means to wear clothes to see if they fit. The holes are a reason to get rid of the shoes.",
    },
    more: "'Throw out' means the same: 'We threw out the old sofa.'",
    tip: 'Before you get rid of something, ask if it can be recycled.',
  },
  'I’m ___ seeing my cousins next week.': {
    why: "Next week is in the future, and the speaker is happy about it. To 'look forward to' something means to feel happy about something to come.",
    not: {
      'looking out for':
        "'Look out for' means to watch carefully so that you see something. It does not fit with a visit next week.",
      'looking up to': "'Look up to' someone means to admire them. It is not about a future visit.",
      'looking back on':
        "'Look back on' means to think about the past. Next week is in the future.",
    },
    more: "After it, use a noun or the -ing form: 'looking forward to the party', 'looking forward to seeing you'.",
    tip: "Remember the -ing after 'to' here: 'seeing you', never 'see you'.",
  },
  'The washing machine has ___ again. We need someone to fix it.': {
    why: "The machine needs fixing, so it has stopped working. To 'break down' means to stop working because of a fault; 'has broken down' is the present perfect.",
    not: {
      'broken up':
        "'Break up' means to break into pieces, or for school to end for a holiday. A machine that needs fixing has stopped working.",
      'broken in': "'Break in' means to get into a building to steal. It is not about machines.",
      'broken out':
        "'Break out' means to escape, or to start suddenly, like a fire. It is not about machines.",
    },
    more: "Cars, machines and computers can stop working like this. The noun is 'breakdown'.",
    tip: "Learn the forms: break, broke, broken. 'It has broken', 'It broke yesterday'.",
  },
  '___ a minute. I need to find my coat.': {
    why: "The speaker needs a moment to find a coat and asks the other person to wait. 'Hold on' means to wait for a short time.",
    not: {
      'Hold out': "'Hold out' means to put out your hand, or to last. It does not mean to wait.",
      'Hold back':
        "'Hold back' means to stop yourself or someone else from doing something. It is not a way to ask someone to wait.",
      'Hang up':
        "'Hang up' means to end a phone call, or to put something on a hook. It does not mean wait.",
    },
    more: "'Hang on' means the same. Both are friendly and informal.",
    tip: "In formal situations, say 'One moment, please.'",
  },
  'Let’s make a card to ___ Mia. She is sad today.': {
    why: "Mia is sad, and a card can make her happier. To 'cheer up' someone means to make them feel happier.",
    not: {
      'wake up': "'Wake up' means to stop someone sleeping. Mia is sad, not asleep.",
      'give up':
        "'Give up' means to stop doing something. You cannot give up a person with a card.",
      'make up':
        "'Make up' means to invent, or to become friends again after a fight. Mia is sad, not angry with anyone.",
    },
    more: "With 'her' or 'him', the word goes in the middle: 'cheer her up'.",
    tip: 'When a friend is sad, a kind message or a joke can make a big difference.',
  },
  'The lesson is over. Please ___ your books.': {
    why: "The lesson has ended, so the books go back into bags and cupboards. To 'put away' something means to store it in its place.",
    not: {
      'put up':
        "'Put up' means to raise something or to build it. You do not raise books when a lesson ends.",
      'put on': "'Put on' means to start wearing, or to start music. It is not about books.",
      'put off':
        "'Put off' means to delay something. The lesson is over; there is nothing to delay.",
    },
    more: "'Put back' is close: it means to return something to the place it came from.",
    tip: 'At home, putting your clothes away means putting them in the wardrobe or the drawers.',
  },
  'Mr Brown ___ a worksheet to each pupil.': {
    why: "The teacher gave one worksheet to every pupil. To 'hand out' things means to give one to each person; the past is 'handed out'.",
    not: {
      'handed in':
        "'Hand in' means to give work to a teacher. Pupils give work in; the teacher gives it out.",
      'took in':
        "'Take in' means to collect, or to understand. It does not go with 'to each pupil'.",
      'gave up': "'Give up' means to stop doing something. It is not about worksheets.",
    },
    more: "A 'handout' is a sheet that every pupil gets.",
    tip: "'Give out' means the same: 'Can you give out the books, please?'",
  },
  'In winter, the water in the pond ___ ice.': {
    why: "In cold weather, water changes and becomes ice. To 'turn into' something means to change and become something else.",
    not: {
      'turns over':
        "'Turn over' means to move something so its other side shows. Water does not do that when it freezes.",
      'turns off':
        "'Turn off' means to stop a machine, or to leave a road. A pond is not a machine.",
      'turns up':
        "'Turn up' means to arrive, or to make a sound louder. It does not mean to become.",
    },
    more: "It can be a big change: 'The small shop turned into a big supermarket.'",
    tip: "'Become' is the one-word verb. The phrasal verb is more common in speaking.",
  },
  'The shop has ___ of bread, so we will try another one.': {
    why: "The shop has no bread left because it sold it all, so the speaker will go to another shop. To 'sell out of' something means to sell all of it.",
    not: {
      'sold off':
        "'Sell off' means to sell things cheaply to get rid of them. It does not go with 'of bread'.",
      'sold up':
        "'Sell up' means to sell your house or business, often to move away. It is not about bread.",
      'bought up':
        "'Buy up' means to buy all of something. The shop sells bread; it does not buy it up.",
    },
    more: 'A show or a concert can be full too: every ticket has gone.',
    tip: "A shop assistant may say: 'Sorry, there are none left.'",
  },
  'The children at the back can’t hear you. Please ___.': {
    why: "The children at the back cannot hear, so the speaker must be louder. To 'speak up' means to talk more loudly.",
    not: {
      'speak out':
        "'Speak out' means to say what you think in public, often against something. It does not help children hear you.",
      'turn up':
        "'Turn up' means to arrive, or to make a machine louder. A person speaks more loudly; a machine is turned up.",
      'hold on': "'Hold on' means to wait. The children need you louder, not later.",
    },
    more: 'In class, a teacher might ask a quiet pupil to be louder in the same words.',
    tip: 'When you give a talk, look at the back of the room and speak to the people there.',
  },
  'I borrowed ten pounds from Sam, and I must ___ the money soon.': {
    why: "The speaker borrowed money from Sam, so they must return it. To 'pay back' money means to return money you borrowed.",
    not: {
      'pay for': "'Pay for' means to give money to buy something. You do not buy money.",
      'give away':
        "'Give away' means to let others have it for free. The speaker borrowed the money and must return it.",
      'put off':
        "'Put off' means to delay. The speaker says 'soon', so they want to return it, not delay it.",
    },
    more: "You can pay back a person or the money: 'pay Sam back', 'pay back the money'.",
    tip: "'Lend' and 'borrow' are a pair: Sam lent the money, and the speaker borrowed it.",
  },
  'You can ___ the new computer in the shop before you buy it.': {
    why: "In a shop you can use a computer to see if you like it before you buy it. To 'try out' something means to test something by using it.",
    not: {
      'try on':
        "'Try on' is for clothes and shoes, to see if they fit. You do not wear a computer.",
      'turn out':
        "'Turn out' means to happen in a way you did not expect. It is not about testing.",
      'sort out':
        "'Sort out' means to organise something or to solve a problem. The computer is new, not a problem.",
    },
    more: "We try out new games, ideas and recipes: 'Let's try out this new recipe.'",
    tip: 'Remember the pair: try on clothes, try out machines.',
  },
  'You spelt that word wrong. ___ the word and write it again.': {
    why: "The word is wrong, so you draw a line through it and write it again correctly. To 'cross out' a word means to draw a line through it.",
    not: {
      'Write down':
        "'Write down' means to make a note of something. The word is already written, and it is wrong.",
      'Fill in': "'Fill in' means to write information in a form. It does not remove a wrong word.",
      'Point out':
        "'Point out' means to show someone something they missed. A teacher may show you a mistake, but you remove it yourself.",
    },
    more: "With a pencil, you can 'rub out' a word with a rubber. With a pen, you draw a line through it.",
    tip: 'One neat line is enough. Then write the word again next to it.',
  },
  'You can ___ for swimming lessons at the front desk.': {
    why: "At the front desk you give your name to join the swimming lessons. To 'sign up' means to join by giving your name.",
    not: {
      'give up':
        "'Give up' means to stop doing something. You cannot stop lessons you have not started.",
      'set up': "'Set up' means to start a business or a group. The lessons are already there.",
      'grow up': "'Grow up' means to become an adult. It is not about joining.",
    },
    more: "We join classes, clubs and websites this way: 'Sign up for the football club.'",
    tip: 'To join something online, you often need an email address.',
  },
  'School ___ for the summer on Friday, so we are all excited.': {
    why: "Friday is the last day of school before the summer holiday, which makes everyone excited. In British English, school 'breaks up' when it ends for a holiday.",
    not: {
      'breaks down':
        "'Break down' means to stop working, like a car. A school does not do that for the summer.",
      'breaks out':
        "'Break out' means to start suddenly, like a fire, or to escape. It is not about holidays.",
      'breaks in':
        "'Break in' means to enter a building to steal. It is not about school holidays.",
    },
    more: "Pupils and teachers both use it: 'When do we break up for Christmas?'",
    tip: "The opposite at the end of a holiday: 'We go back to school on Monday.'",
  },
  'I can’t ___ late tonight. I have school tomorrow.': {
    why: "The speaker has school tomorrow, so they must go to bed at the usual time. To 'stay up' means to keep awake and not go to bed.",
    not: {
      'stay in': "'Stay in' means to stay at home. It does not go with 'late' and bedtime.",
      'get up': "'Get up' means to leave your bed in the morning. It does not happen 'tonight'.",
      'wake up': "'Wake up' means to stop sleeping. You wake up in the morning, not late at night.",
    },
    more: 'Children often ask to go to bed later on a holiday or at a weekend.',
    tip: "Add 'late' or 'until' and a time: 'We stayed up until midnight.'",
  },
  'The bus is here. Let’s ___.': {
    why: "The bus has arrived, and the speaker wants to climb onto it. To 'get on' a bus means to go onto a bus or a train.",
    not: {
      'get off': "'Get off' means to leave a bus. We are not on the bus yet.",
      'get over': "'Get over' means to feel better after an illness. It is not about buses.",
      'get away':
        "'Get away' means to escape, or to go on holiday. Here you want to climb onto the bus.",
    },
    more: "Use it for buses, trains and bikes; use 'get in' for cars and taxis.",
    tip: 'Let people leave the bus first, then climb on. It is polite and quicker.',
  },
  'And yet the animals never gave up hope.': {
    why: "Near the end of Animal Farm, life is still hard for the animals, but they keep hoping for better days. To 'give up' hope means to stop feeling it, and these animals never stopped.",
    not: {
      'to hand something over to another':
        "'Give up' can mean to hand something over, as in 'give up your seat'. Hope is a feeling, so here it means to stop having it.",
      'to keep something safe and hidden':
        "That is 'hide' or 'keep'. 'Never gave up hope' means they still hoped.",
      'to share something with others': "That is 'share' or 'give out'. 'Give up' means to stop.",
    },
    more: "'And yet' shows a contrast: life is hard, and yet they still hope. Orwell shows that the animals still believe in the dream of their farm.",
    tip: "We give up hope, give up trying and give up a habit. Each time, 'give up' means to stop.",
  },
  'When they got up again, a huge cloud of black smoke was hanging where the windmill had been.': {
    why: "In Animal Farm, the men destroy the windmill with explosives. The animals throw themselves flat on the ground, and after the noise they stand again. Here 'get up' means to rise to your feet after lying flat.",
    not: {
      'to leave your bed after a night’s sleep':
        "That is the most common meaning of 'get up', but the animals were lying on the ground, not in bed.",
      'to climb to a higher place':
        "That is 'climb up'. The animals only stood up from the ground.",
      'to run away from danger':
        "That is 'run away'. They got up and saw the smoke; they did not run.",
    },
    more: "'Again' shows they were on their feet before they lay down. The smoke where the windmill 'had been' tells us it is gone.",
    tip: 'When a phrasal verb has two meanings, read what came just before. Here the animals had just thrown themselves down.',
  },
  'Last night, however, it came back to me in my dream.': {
    why: "Old Major is talking about a song he knew when he was a little pig and then forgot. In his dream he remembered it again. Here 'come back' means to return to your memory.",
    not: {
      'to return to a place':
        'That is the usual meaning, but a song is not a person coming home. Here it returns to his memory.',
      'to leave your mind for good':
        "That is the opposite: just before, he says it 'had long since passed out of my mind'. Now it has returned.",
      'to make you feel afraid':
        "That is 'frighten'. The song comes back to him, and he wants to sing it.",
    },
    more: "In the same speech, Old Major says the song had 'passed out of my mind', which means he forgot it. 'Came back to me' is the opposite.",
    tip: "We use it for memories and names: 'Her name will come back to me in a minute.'",
  },
  'As soon as the light in the bedroom went out...': {
    why: "At the start of Animal Farm, Mr Jones goes up to bed. When the light in his bedroom stops shining, the animals know he is out of the way and can meet. Here 'go out' means to stop shining.",
    not: {
      'to leave a room':
        'That is what people do when they go out, but a light cannot leave a room.',
      'to grow brighter': 'That is the opposite. When a light goes out, it is dark.',
      'to be switched on':
        "That is 'go on' or 'come on', the opposite. The light went out, so it was off.",
    },
    more: "Lights, fires and candles go out when they stop: 'The fire went out in the night.'",
    tip: 'For a person, it means to leave home. For a light or a fire, it means to stop. Check what the subject is.',
  },
  'To tell you the truth, I had been looking forward to my retirement.': {
    why: "Boxer, the hard-working horse, is ill and talks about the rest he hoped to have when he stopped work. To 'look forward to' something means to wait happily for something in the future.",
    not: {
      'to feel sad about something that is ending':
        "That is 'miss' or 'be sad about'. Boxer was happy about the retirement to come.",
      'to plan something very carefully':
        "That is 'plan'. Boxer felt happy about it; the line does not say he planned it.",
      'to look back at your past work':
        "That is 'look back on', about the past. Retirement was in his future.",
    },
    more: "'Had been looking forward' is the past perfect continuous: he felt this for a long time before the moment he speaks.",
    tip: "'To tell you the truth' is a polite way to begin saying something honest about your feelings.",
  },
  'But the pigs seemed comfortable enough, and in fact were putting on weight if anything.': {
    why: "The other animals are given less and less food, but the pigs are comfortable and growing fatter. To 'put on' weight means to become heavier.",
    not: {
      'to start wearing clothes':
        "That is the most common meaning of 'put on', but here the thing after it is weight, not clothes.",
      'to become thinner': "That is 'lose weight', the opposite. The pigs were getting fatter.",
      'to carry heavy things': "That is 'carry'. Weight here is the pigs' own body weight.",
    },
    more: "Orwell shows that the leaders have more than everyone else. 'If anything' means 'if there was any change at all'.",
    tip: "The pair to learn: put on weight and lose weight. 'He has put on weight' means he is heavier.",
  },
  'You would not have us too tired to carry out our duties?': {
    why: "Squealer, the pig who speaks for the leaders, says the pigs need good beds so that they are not too tired for their work. To 'carry out' duties means to do a job or a task.",
    not: {
      'to carry something outside':
        "That is the usual meaning of the words: 'carry the box out'. Duties are jobs, so here it means to do them.",
      'to stop doing a job':
        "That is 'give up' or 'stop'. Squealer wants the pigs fresh enough to do their jobs.",
      'to give a job to someone else':
        "That is 'hand over' or 'pass on'. Squealer says the pigs do the jobs themselves.",
    },
    more: "We carry out duties, orders, plans and tests: 'The scientists carried out a test.'",
    tip: "It is formal. In speaking, 'do' is more common: 'do our jobs'.",
  },
  'Napoleon was hesitating between the two, unable to make up his mind.': {
    why: "Napoleon wants to sell the farm's timber to one of two farmers, Mr Pilkington or Mr Frederick, but he cannot choose. To 'make up' your mind means to decide after thinking.",
    not: {
      'to invent a story':
        "That is another meaning: 'make up a story'. With 'his mind', it means to decide.",
      'to become friends again':
        'That is another meaning, after a fight. Napoleon is choosing between two buyers.',
      'to change your opinion':
        "That is 'change your mind'. Napoleon has not decided anything yet.",
    },
    more: "'Hesitating' means waiting because you cannot decide. 'Unable to make up his mind' says the same thing again.",
    tip: 'Learn it as one phrase: make up your mind, make up my mind, make up his mind.',
  },
  'Curiously enough, they went on believing this even after the mislaid key was found under a sack of meal.':
    {
      why: "The animals were sure that Snowball had thrown a lost key down the well. Even when the key was found, they did not stop believing it. To 'go on' doing something means to keep doing it.",
      not: {
        'to stop doing something': "That is the opposite. 'Even after' shows they did not stop.",
        'to start doing something':
          "That is 'start'. They believed it already, before the key was found.",
        'to pretend to do something': "That is 'pretend'. The animals really did believe it.",
      },
      more: 'Orwell shows how the animals believe whatever they are told about Snowball, even when it is plainly wrong.',
      tip: "After it, use -ing for the same action: 'They went on talking.'",
    },
  'But it was some minutes before they could fully take it in.': {
    why: "Squealer tells the animals shocking news about Snowball, and it takes them minutes to understand it. To 'take something in' means to understand something surprising.",
    not: {
      'to bring something into a building':
        "That is the usual meaning of the words: 'take the washing in'. Here 'it' is news, so it means to understand.",
      'to forget something quickly':
        'That is the opposite. They needed time to understand the news.',
      'to make clothes smaller':
        "That is another meaning: 'take in a dress'. There are no clothes here.",
    },
    more: "'Fully' shows the news was too big to understand at once.",
    tip: "With 'it', the word goes in the middle: 'take it in'. 'I can't take it in' means 'I can't believe it yet'.",
  },
  'In the evenings she lay in his stall and talked to him, while Benjamin kept the flies off him.':
    {
      why: "Boxer is ill, and his friends stay with him. Clover talks to him, and Benjamin stops the flies landing on him. To 'keep something off' means to stop something from touching.",
      not: {
        'to make something come closer':
          'That is the opposite. Benjamin keeps the flies away from Boxer.',
        'to watch something very closely':
          "That is 'watch'. Benjamin does more: he stops the flies landing.",
        'to give food to something': "That is 'feed'. Flies are what Benjamin keeps away.",
      },
      more: "Earlier in the chapter, Benjamin does this with his long tail. The scene shows how much Boxer's friends care for him.",
      tip: "On a sign, 'Keep off' means do not touch it or walk on it.",
    },
  'It was used for milling corn, and brought in a handsome money profit.': {
    why: "The windmill grinds corn, and selling the corn makes money for the farm. To 'bring in' money means to earn it.",
    not: {
      'to spend money': "That is 'spend', the opposite. The windmill makes money.",
      'to carry inside':
        "That is the usual meaning of the words: 'bring in the chairs'. With a profit, it means to earn.",
      'to lose money': "That is 'lose'. A profit is money you gain.",
    },
    more: "'A handsome profit' means a large profit. 'Handsome' can mean large when we talk about money.",
    tip: "We say a job or a business brings in money: 'The shop brings in a lot at Christmas.'",
  },
  'But the problem the animals could not at first solve was how to break up the stone into pieces of suitable size.':
    {
      why: "To build the windmill, the animals need stones of the right size, but the stone in the quarry is in huge pieces. To 'break up' something means to divide something into smaller parts.",
      not: {
        'to finish school for a holiday':
          'That is another meaning in British English: schools do this before a holiday. Here it is stone.',
        'to stop being friends with someone':
          'That is another meaning: two people can break up. Stone is not a person.',
        'to carry something up a hill':
          "That is 'carry up'. 'Up' here means into pieces, not higher.",
      },
      more: 'Later the animals solve it: they drag big stones to the top of the quarry and drop them over the edge.',
      tip: "'Up' can mean completely, as in 'use up all the paper'.",
    },
  'Now, as it turned out, the Rebellion was achieved much earlier and more easily than anyone had expected.':
    {
      why: "The animals thought the Rebellion was far in the future. In the end it came early and easily. 'As it turned out' means 'as it happened in the end', often not as people expected.",
      not: {
        'to switch off a light':
          "That is another meaning: 'turn out the lights'. There is no light here.",
        'to come to a meeting':
          "That is another meaning: 'A big crowd turned out to watch.' Here it means how things happened.",
        'to be planned carefully':
          "That is 'plan'. 'Than anyone had expected' shows nobody planned it this way.",
      },
      more: "It is used for a result you learn later: 'The stranger was her uncle, as it turned out.'",
      tip: "Use 'as it turned out' to tell a story with a surprise: 'As it turned out, the shop was closed.'",
    },
  'The mystery of where the milk went to was soon cleared up.': {
    why: "The animals wondered where the cows' milk had gone. Soon they learnt the answer: it was mixed into the pigs' food. To 'clear up' a mystery means to explain something that was not known.",
    not: {
      'to tidy a room or a table after a meal':
        "That is another meaning: 'clear up the kitchen'. Here it is a mystery, not a room.",
      'to become sunny after rain':
        "That is another meaning, for the weather: 'It will clear up later.' Here it is a mystery.",
      'to make a mystery harder': 'That is the opposite. The mystery was solved.',
    },
    more: 'Orwell shows early that the pigs take more than their share, and the other animals accept it.',
    tip: "We clear up a mystery, a problem or a mistake: 'Let's clear up this mistake.'",
  },
  'Within a few weeks Snowball’s plans for the windmill were fully worked out.': {
    why: "Snowball spends weeks drawing his plans for the windmill until every part is ready. To 'work out' a plan means to plan all the details of something.",
    not: {
      'to do exercise to get strong':
        'That is another meaning, at a gym. Plans cannot do exercise.',
      'to stop working because of a fault':
        "That is 'break down'. The plans were finished, not broken.",
      'to throw a plan away':
        "That is 'throw away'. 'Fully worked out' shows the plans were complete.",
    },
    more: 'This phrasal verb has three common meanings: to solve, to plan in detail, and to exercise. The words around it show which.',
    tip: "'Fully' makes it stronger: every detail was ready.",
  },
  'It was always the pigs who put forward the resolutions.': {
    why: "At the farm's Sunday meetings, the pigs always suggested the plans, and the other animals only voted. To 'put forward' an idea means to suggest an idea for others to discuss.",
    not: {
      'to move something to an earlier time':
        "That is another meaning: 'put the meeting forward to Monday'. Resolutions are ideas, so here it means to suggest.",
      'to vote against an idea':
        "That is 'vote against'. The pigs suggested the ideas; they did not vote them down.",
      'to write down what others said':
        "That is 'write down' or 'take notes'. The pigs had the ideas themselves.",
    },
    more: 'A resolution here is a plan that a meeting votes on. Orwell shows that the pigs control the meetings from the start.',
    tip: "In a debate, you put forward an argument: 'She put forward three reasons.'",
  },
  'The pigs had set aside the harness-room as a headquarters for themselves.': {
    why: "The pigs took the harness-room and kept it just for themselves, as their headquarters. To 'set aside' something means to keep something for one use.",
    not: {
      'to throw something away': "That is 'throw away'. The pigs kept the room and used it.",
      'to share something with everyone':
        "That is the opposite. 'For themselves' shows the room was only for the pigs.",
      'to move something to the side':
        "That is the usual meaning of 'aside', but you cannot move a room. Here it means to keep for one use.",
    },
    more: 'A harness-room is where a farm keeps the leather straps for its horses. A headquarters is where leaders work.',
    tip: "We set aside money, time or a place: 'Set aside an hour each day to revise.'",
  },
  'Boxer will pick up when the spring grass comes on': {
    why: "Boxer is getting thinner and weaker, and the other animals hope that fresh spring grass will make him strong again. Here 'pick up' means to get well and strong again.",
    not: {
      'to lift something heavy':
        "That is another meaning, and Boxer lifts heavy stones all day. But here nothing comes after 'pick up', so it means to get better.",
      'to collect someone from a place':
        "That is another meaning: 'pick you up at six'. Nobody is collecting Boxer here.",
      'to get worse and weaker': 'That is the opposite. The animals hope he will get stronger.',
    },
    more: "'When the spring grass comes on' means when the new grass starts to grow. The animals hope good food will help him.",
    tip: "With nothing after it, it often means to get better: 'I hope the weather picks up.'",
  },
  'Without saying anything to the others, she went to Mollie’s stall and turned over the straw with her hoof.':
    {
      why: "Clover thinks Mollie is hiding something, so she moves the straw in Mollie's stall and finds sugar and ribbons under it. To 'turn over' something means to move something to see under it.",
      not: {
        'to face the other way': "That is 'turn round'. Clover moved the straw, not her own body.",
        'to give something to someone else':
          "That is another meaning: 'turn over a wallet to the police'. Here Clover is looking under the straw.",
        'to put new straw on the floor':
          "That is 'put down' new straw. Clover moved the old straw to look under it.",
      },
      more: "'Without saying anything to the others' shows Clover wants to check quietly. Under the straw she finds what Mollie has been hiding.",
      tip: 'We turn over a page, a card or a stone to see the other side, or what is under it.',
    },
  'We ___ early to miss the traffic.': {
    why: "The speakers left early, before the roads got busy. To 'set off' means to start a journey, and here it needs nothing after it.",
    not: {
      'called off':
        "'Call off' means to cancel an event, and it needs a thing after it: 'called off the match'.",
      'put off':
        "'Put off' means to delay something, and it needs a thing after it. Leaving early is the opposite of a delay.",
      'showed off':
        "'Show off' means to try to make people admire you. It has nothing to do with traffic.",
    },
    more: "Look at what comes after the gap. Two of these verbs with 'off' need a thing after them, like a match or a meeting; this one does not.",
    tip: "Add 'for' and a place: 'We set off for London at six.'",
  },
  'She ___ the invitation because she was busy that night.': {
    why: "She was busy, so she could not go, and she said no. To 'turn down' an invitation means to say no to it.",
    not: {
      'turned up':
        "'Turn up' means to arrive, or to make a sound louder. You cannot do either to an invitation.",
      'turned off': "'Turn off' means to stop a machine. An invitation is not a machine.",
      'turned over':
        "'Turn over' means to move something so its other side shows. Being busy is no reason to do that.",
    },
    more: "We turn down invitations, offers and requests. 'Refuse' and 'decline' are more formal.",
    tip: "A polite way to say no: 'Thank you for asking, but I can't come.'",
  },
  'The match was ___ until next Saturday because of the snow.': {
    why: "'Until next Saturday' shows the match will still be played, but later. To 'put off' an event means to move it to a later time.",
    not: {
      'called off':
        "'Call off' means to cancel, so the match would not happen at all. 'Until next Saturday' shows it will still happen.",
      'set off': "'Set off' means to start a journey. A match does not travel.",
      'turned off': "'Turn off' means to stop a machine. A match is an event.",
    },
    more: "'Postpone' is the formal word. It is common in news about sport.",
    tip: "Notice 'until' and a time: something delayed still happens, later.",
  },
  'I ___ an old friend at the station yesterday. I had not seen her for years.': {
    why: "The speaker did not plan to meet the friend; it happened by chance at the station. To 'run into' someone means to meet them by chance.",
    not: {
      'ran out of':
        "'Run out of' means to have none left, like milk or money. You cannot do that with a friend.",
      'ran away from':
        "'Run away from' means to escape. The speaker is pleased to see an old friend again.",
      'looked up to': "'Look up to' means to admire someone. It is not about meeting at a station.",
    },
    more: "'Bump into' means the same: 'I bumped into my teacher in town.'",
    tip: "Use the past to start a story: 'Guess who I saw at the station yesterday?'",
  },
  'Can you ___ a better idea? This one will not work.': {
    why: "The speaker needs a new idea because this one will not work. To 'come up with' an idea means to think of it.",
    not: {
      'come down with':
        "'Come down with' means to start to have an illness: 'come down with a cold'. It is not about ideas.",
      'catch up with':
        "'Catch up with' means to reach someone who is ahead. It is not about thinking of ideas.",
      'put up with':
        "'Put up with' means to accept something you do not like. Nobody needs to accept a better idea.",
    },
    more: "We come up with ideas, plans, answers and names: 'She came up with a great name for the team.'",
    tip: "In group work, ask 'Who can think of a title?'",
  },
  'We need to ___ all this old furniture before we move.': {
    why: "Before moving house, the family must remove the old furniture they do not want. To 'get rid of' something means to remove something you do not want, by throwing it away or giving it away.",
    not: {
      'get on with':
        "'Get on with' means to continue a task, or to be friendly with someone. It does not remove furniture.",
      'get over':
        "'Get over' means to feel better after an illness. You cannot do that to furniture.",
      'get away with':
        "'Get away with' means to do something wrong and not be caught. It is not about furniture.",
    },
    more: 'We get rid of things we do not want: old clothes, rubbish, a cold, a bad habit.',
    tip: "It never splits: 'get rid of it', never 'get it rid of'.",
  },
  'My little sister ___ my mum: she has the same smile and the same laugh.': {
    why: "The same smile and laugh show the sister is like their mum. To 'take after' someone means to be like an older family member.",
    not: {
      'looks after':
        "'Look after' means to take care of someone. The same smile does not show care.",
      'takes up': "'Take up' means to start a hobby. A mum is not a hobby.",
      'looks up to':
        "'Look up to' means to admire someone. You can admire your mum, but that does not give you her smile.",
    },
    more: 'The colon (:) here starts the reason: the same smile and the same laugh.',
    tip: "It never splits: 'She takes after her dad.'",
  },
  'The teacher ___ that my answer was too short.': {
    why: "The teacher told the pupil about a problem they had not noticed. To 'point out' something means to show someone something they missed.",
    not: {
      'made up': "'Make up' means to invent something. The teacher did not invent the problem.",
      'gave out': "'Give out' means to hand something to each person. It cannot go before 'that'.",
      'turned out':
        "'Turn out' means to happen in the end, and it goes with 'it': 'It turned out that I was right.'",
    },
    more: "'Point out that' is useful in essays: 'The writer points out that the rules are unfair.'",
    tip: 'In feedback, a teacher may show you one thing you did well and one thing to improve.',
  },
  'I can’t ___ his rude jokes any more. I am going to tell him.': {
    why: "The jokes are rude, and the speaker cannot accept them any longer, so they will speak to him. To 'put up with' something means to accept something you do not like.",
    not: {
      'come up with':
        "'Come up with' means to think of an idea. He makes the jokes; the speaker does not.",
      'catch up with':
        "'Catch up with' means to reach someone who is ahead. It is not about rude jokes.",
      'put up':
        "'Put up' means to raise or build something. Without 'with', it cannot go before 'his rude jokes'.",
    },
    more: "'Any more' at the end shows the speaker accepted the jokes before, but will not now.",
    tip: "'Tolerate' is the formal word. In speaking, 'I can't stand it' means much the same.",
  },
  'The school is ___ the problem with the heating.': {
    why: "There is a problem with the heating, and the school is trying to learn what is wrong. To 'look into' something means to try to learn the facts about it.",
    not: {
      'looking up to': "'Look up to' means to admire someone. Nobody admires a problem.",
      'looking forward to':
        "'Look forward to' means to feel happy about something to come. Nobody is happy about a broken heater.",
      'looking out for':
        "'Look out for' means to watch so that you see something. The school knows about the problem already.",
    },
    more: "'Investigate' is the formal word. Police, schools and companies look into problems and complaints.",
    tip: "A polite reply to a complaint: 'Thank you. We will look into it.'",
  },
  'If you don’t revise, you will ___ in class.': {
    why: "Without revision, a pupil learns less, and the others move ahead. To 'fall behind' means to be slower or less far on than others.",
    not: {
      'fall out':
        "'Fall out' means to argue and stop being friends. Not revising does not make you argue.",
      'fall over':
        "'Fall over' means to drop to the ground by accident. Revision has nothing to do with it.",
      'fall apart': "'Fall apart' means to break into pieces. It is not about school work.",
    },
    more: "You can fall behind with work, with payments, or in a race: 'She fell behind in the race.'",
    tip: 'If you miss lessons, ask for the work so that you stay level with the class.',
  },
  'The film ___ to be much better than I expected.': {
    why: "The speaker expected a bad film, but in the end it was good. To 'turn out' means to happen in the end; 'turned out to be' tells us what something was really like.",
    not: {
      'turned up':
        "'Turn up' means to arrive, or to make a sound louder. It cannot go before 'to be'.",
      'turned down':
        "'Turn down' means to say no to an offer, or to make a sound quieter. It does not fit 'to be'.",
      'turned into':
        "'Turn into' means to become something else. It goes before a noun, not before 'to be'.",
    },
    more: "'Turned out to be' is common in stories with a surprise: 'The stranger turned out to be her uncle.'",
    tip: "Use it when you learn the truth later: 'The test turned out to be easy.'",
  },
  'After the argument, Tom and Sam didn’t speak for a week, but now they have ___.': {
    why: "They argued and stopped speaking, but 'but now' shows that things are better. To 'make up' means to become friends again after a fight.",
    not: {
      'fallen out':
        "'Fall out' means to argue and stop being friends. That happened before; 'but now' shows a change.",
      'broken up':
        "'Break up' means to end a relationship. 'But now' shows things got better, not worse.",
      'set up': "'Set up' means to start a business or a group. It does not fit after an argument.",
    },
    more: "With a person, add 'with': 'Tom has made up with Sam.'",
    tip: 'After a fight, saying sorry is often the first step to being friends again.',
  },
  'Please ___ with the exercise while I talk to Leo.': {
    why: "The teacher will be busy for a moment, and the class should not stop working. To 'carry on' means to continue doing something.",
    not: {
      'carry out':
        "'Carry out' means to do a task, and the task comes straight after it: 'carry out the test'. It does not go with 'with'.",
      'take on':
        "'Take on' means to agree to do more work. It does not go with 'with the exercise'.",
      'turn on': "'Turn on' means to start a machine. An exercise is not a machine.",
    },
    more: 'Teachers often say this when they must leave the room for a moment.',
    tip: "After it, use 'with' and a noun, or the -ing form: 'with the exercise', or 'writing'.",
  },
  'She has ___ the piano, and she practises every day.': {
    why: "She has started to play the piano and practises every day, so it is her new hobby. To 'take up' an activity means to start doing it.",
    not: {
      'taken off':
        "'Take off' means to remove clothes, or for a plane to leave the ground. It is not about music.",
      'taken after':
        "'Take after' means to be like an older family member. A piano is not a person.",
      'taken in':
        "'Take in' means to understand, or to make clothes smaller. It is not about starting a hobby.",
    },
    more: "We take up sports, instruments and hobbies: 'He took up chess last year.'",
    tip: "Use the present perfect for a new hobby that goes on now: 'I've taken up running.'",
  },
  'Assistant: I’m sorry, we’ve ___ cheese. Would you like ham?': {
    why: "The customer wants cheese, but there is none left, so the assistant offers ham. To 'run out of' something means to have none of it left.",
    not: {
      'run into': "'Run into' means to meet someone by chance. You cannot meet cheese.",
      'run away from': "'Run away from' means to escape. A cafe does not escape from cheese.",
      'put up with':
        "'Put up with' means to accept something you do not like. It does not explain why there is no cheese.",
    },
    more: "Shops and cafes often say 'We've sold out' when there is none left.",
    tip: "An offer after bad news is polite: 'Would you like ham instead?'",
  },
  'Ali: It’s great. I ___ everyone in my class.': {
    why: "Ali says the new school is great because the class is friendly. To 'get on with' someone means to have a friendly relationship with them.",
    not: {
      'get over':
        "'Get over' means to feel better after an illness or a sad time. It does not describe friends.",
      'get away with':
        "'Get away with' means to do something wrong and not be caught. It is not about friends.",
      'get back': "'Get back' means to return to a place. It cannot go before 'everyone' here.",
    },
    more: "Add 'well' to make it stronger: 'I get on well with everyone.'",
    tip: "Gran's question asks how you feel about the school. Answer with a reason, as Ali does.",
  },
  'Lily: He hasn’t ___ yet. Maybe he is ill.': {
    why: "Jack is not here, and the coach leaves soon, so Lily says he has not arrived. To 'turn up' means to arrive at a place.",
    not: {
      'turned down': "'Turn down' means to say no to an offer. It needs a thing after it.",
      'turned off':
        "'Turn off' means to stop a machine, or to leave a road. It does not mean to arrive.",
      'turned over':
        "'Turn over' means to move something so its other side shows. Jack is not a page.",
    },
    more: "'Show up' means the same. Both are informal ways to say 'arrive'.",
    tip: "'Yet' goes with the present perfect in questions and negatives: 'He hasn't arrived yet.'",
  },
  'Max: No, it’s been ___. We won’t have a picnic at all.': {
    why: "Max says there will be no picnic at all, so it is cancelled. To 'call off' an event means to decide that it will not happen.",
    not: {
      'put off':
        "'Put off' means to move to a later time. Max says there will be no picnic at all, not a later one.",
      'set off': "'Set off' means to start a journey. A picnic cannot do that.",
      'turned off': "'Turn off' means to stop a machine. A picnic is not a machine.",
    },
    more: 'Remember the difference: a delayed event happens later; a cancelled event never happens.',
    tip: "'It's been called off' is the present perfect passive: someone has cancelled it.",
  },
  'Ravi: I ___ it in the garden when I was digging.': {
    why: "Ravi was digging, not looking for coins, when he found it. To 'come across' something means to find it by chance.",
    not: {
      'came up with':
        "'Come up with' means to think of an idea. You find a coin; you do not think of it.",
      'came over': "'Come over' means to visit someone. It cannot go before 'it' like this.",
      'came down with':
        "'Come down with' means to start to have an illness. A coin is not an illness.",
    },
    more: "We come across old things, photos and interesting facts: 'I came across a great book.'",
    tip: "It does not split: 'came across it', never 'came it across'.",
  },
  'Nia: My friend and I ___ a small business selling cakes.': {
    why: "Nia and her friend started a new business in the holidays. To 'set up' a business means to start a new company or group.",
    not: {
      'set off': "'Set off' means to start a journey. A business is not a journey.",
      'set back': "'Set back' means to delay something. It does not mean to start a business.",
      'set aside':
        "'Set aside' means to keep something for one use. You cannot keep a business you have not started.",
    },
    more: "We set up businesses, clubs and websites: 'They set up a website for the school.'",
    tip: 'When you describe a project, say who started it and when.',
  },
  'Assistant: I’m sorry. My manager will ___ it right away.': {
    why: "The customer has a problem, and the manager will act on it at once. To 'deal with' a problem means to take action to solve it.",
    not: {
      'put up with':
        "'Put up with' means to accept something you do not like. The manager wants to solve the problem.",
      'look up to': "'Look up to' means to admire someone. You do not admire a broken phone.",
      'get away with':
        "'Get away with' means to do something wrong and not be caught. It does not fit a broken phone.",
    },
    more: "'Sort out' means almost the same: 'We will sort it out for you.'",
    tip: 'In a shop, polite staff say sorry first, then say what they will do.',
  },
  'Leo: I know. I’m sorry I ___ the team.': {
    why: "Leo promised to come and did not, so the team was disappointed. To 'let down' someone means to disappoint someone who trusts you.",
    not: {
      'let in': "'Let in' means to allow someone to enter. That does not fit a broken promise.",
      'let off': "'Let off' means to not punish someone. The coach is the one who might do that.",
      'let out': "'Let out' means to allow someone to leave. It does not fit a broken promise.",
    },
    more: "With 'you', 'him' or 'them', the word goes in the middle: 'I'm sorry I let you down.'",
    tip: "A good apology says what you did and how you will change: 'I'll come every week now.'",
  },
  'Jo: I know. I am going to ___ sweets.': {
    why: "The doctor says Jo eats too many sweets, so Jo will eat fewer. To 'cut down on' something means to have less of it.",
    not: {
      'cut up':
        "'Cut up' means to cut something into small pieces. That does not mean eating fewer sweets.",
      'cut off':
        "'Cut off' means to remove a part with a knife, or to stop a supply. It does not fit 'sweets' here.",
      'put up with':
        "'Put up with' means to accept something you do not like. Jo likes sweets, and must eat fewer.",
    },
    more: 'It means less, not none: Jo will still eat some sweets, but fewer of them.',
    tip: 'Health advice often uses it: less salt, less sugar, less screen time.',
  },
  'Raj: Yes, ___.': {
    why: "Kim asks to borrow a pen, and Raj says yes. 'Go ahead' is a polite way to give someone permission to do something.",
    not: {
      'go away': "'Go away' means leave, and it is rude. Raj has just said yes.",
      'go off':
        "'Go off' means that food becomes bad, or that an alarm rings. It is not a way to say yes.",
      'go back': "'Go back' means to return to a place. It does not give permission.",
    },
    more: "It also means to start or to happen as planned: 'The match will go ahead.'",
    tip: "Other polite ways to say yes: 'Of course', 'Sure', 'Please do'.",
  },
  'Fin: We ___ yesterday about a game.': {
    why: "Fin is not sitting with Ella because they argued yesterday. To 'fall out' with someone means to argue and stop being friendly.",
    not: {
      'fell over':
        "'Fall over' means to drop to the ground by accident. It does not go with 'about a game'.",
      'fell behind':
        "'Fall behind' means to be slower than others. It does not explain why they are not sitting together.",
      'fell apart': "'Fall apart' means to break into pieces. People do not do that about a game.",
    },
    more: "With a person, add 'with': 'I fell out with my brother.'",
    tip: 'Friends often argue and then become friends again. Saying sorry helps.',
  },
  'Player: My older brother. I have always ___ him.': {
    why: "The player's hero is their older brother, so the player admires him. To 'look up to' someone means to admire and respect them.",
    not: {
      'looked down on':
        "'Look down on' means to think you are better than someone. That is the opposite of a hero.",
      'looked into':
        "'Look into' means to try to find out the facts about something. You do not do that to your hero.",
      'looked through':
        "'Look through' means to read or search something quickly. It does not go with a person here.",
    },
    more: 'We admire parents, teachers, older brothers and sisters, and sports stars in this way.',
    tip: "Remember both small words: 'up' and 'to'. Without 'to', it means something else.",
  },
}
