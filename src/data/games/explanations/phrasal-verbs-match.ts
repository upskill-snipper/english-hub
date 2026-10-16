import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Phrasal Verb Match: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/phrasal-verbs-match.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'get up': {
    why: "In 'I usually get up at seven o’clock on weekdays', the time and the word 'weekdays' show a daily routine. 'Get up' means to leave your bed after sleeping.",
    not: {
      'to feel very tired':
        "Feeling very tired is 'be worn out' or 'be exhausted'. It is not a meaning of 'get up'.",
      'to make a mistake':
        "Making a mistake is 'slip up'. 'Get up' is about leaving your bed, not about errors.",
      'to clean a room':
        "Cleaning a room is 'tidy up' or 'clean up'. 'Get up' is about leaving your bed.",
    },
    more: "'Get up' also means to stand from a seat: 'She got up to answer the door.'",
    tip: "Do not mix up 'get up' (leave your bed) with 'wake up' (stop sleeping). You wake up first and get up later.",
  },
  'give up': {
    why: "Smoking is a habit, and she decided to stop it after twenty years. To 'give up' a habit means to stop doing it.",
    not: {
      'to start a new hobby':
        "Starting a new hobby is 'take up'. 'Give up' is the opposite: it means to stop.",
      'to win a prize': "Winning a prize is 'win'. 'Give up' means to stop, not to win.",
      'to ask for help':
        "Asking for help is 'turn to someone' or 'call for help'. 'Give up' means to stop.",
    },
    more: "'Give up' can also mean to stop trying: 'Do not give up, you are nearly there.'",
    tip: "After 'give up', use a noun or the -ing form: 'give up chocolate', 'give up smoking'.",
  },
  'look after': {
    why: "In the sentence, someone is asked to care for a dog while the speaker is away. 'Look after' means to take care of someone or something.",
    not: {
      'to search for something':
        "Searching for something is 'look for'. 'Look after' is about taking care.",
      'to ignore a problem':
        "Ignoring something is the opposite of caring. 'Look after' means to take care of someone or something.",
      'to follow behind':
        "Following is 'follow' or 'come after'. 'Look after' is about care, not about position.",
    },
    more: "We use 'look after' for children, pets, plants and things you borrow. You can also say 'take care of'.",
    tip: "'Look after' stays together: say 'look after the dog' or 'look after it', never 'look the dog after'.",
  },
  'run out of': {
    why: "The speaker says 'so I’ll buy some more', which tells us the milk is finished. 'Run out of' means to have no more of something left.",
    not: {
      'to leave a building quickly':
        "That is the usual meaning of 'run out of the house'. Here 'run out of milk' means there is none left.",
      'to buy a large amount':
        "Buying a large amount is 'stock up on'. 'Run out of' means there is none left, so you must buy more.",
      'to win a race': "Winning a race is 'win'. 'Run out of' is about having none left.",
    },
    more: "'Run out' can stand alone for time or supplies: 'Time is running out.'",
    tip: "Use 'run out of' with the thing that has finished: 'We have run out of sugar.'",
  },
  'put off': {
    why: "'Until next Monday' shows the meeting moved to a later day. 'Put off' means to delay or postpone something.",
    not: {
      'to switch off a light':
        "A meeting cannot be switched off like a light. 'Until next Monday' shows that the meeting moves to a later day, so 'put off' means to delay.",
      'to remove your coat': "Removing a coat is 'take off'. 'Put off' is about delaying.",
      'to make someone angry':
        "That is closer to 'wind someone up' or 'annoy'. 'Put off' means to delay something.",
    },
    more: "'Put off' can also mean to make someone not want something: 'The smell put me off the soup.'",
    tip: "You can split 'put off': 'put off the meeting' or 'put it off'. Before another verb, use -ing: 'I put off calling him.'",
  },
  'find out': {
    why: "The speaker needs to learn the train time. 'Find out' means to discover information that you did not know.",
    not: {
      'to go outside': "Going outside is 'go out'. 'Find out' is about learning facts.",
      'to lose something':
        "Losing something is 'lose'. 'Find out' is about discovering, not losing.",
      'to invite a friend':
        "Inviting a friend is 'invite' or 'ask someone over'. 'Find out' is about information.",
    },
    more: "'Find' alone is about getting or seeing something: 'I found my keys.' 'Find out' is about learning a fact.",
    tip: "Use 'find out' with a question word: 'find out when', 'find out who', 'find out why'.",
  },
  'turn down': {
    why: "He refused the job because the pay was low. To 'turn down' an offer means to say no to it.",
    not: {
      'to accept gladly': "That is the opposite of 'turn down'. The pay was low, so he refused.",
      'to turn around':
        "That is a different verb: 'turn round' means to face the other way. It is not about refusing.",
      'to reduce the volume':
        "That is another meaning of 'turn down' ('turn down the music'). Here the job offer shows it means refuse.",
    },
    more: "'Turn down' has a second meaning: to make a machine quieter or cooler, as in 'Turn down the music.' The words around it show which meaning.",
    tip: "Use 'turn down' for offers, invitations and requests: 'She turned down my invitation.'",
  },
  'carry on': {
    why: "The speaker asks someone to keep working and says 'I’ll wait here'. 'Carry on' means to continue doing something.",
    not: {
      'to lift something heavy':
        "That is 'carry' by itself, as in 'carry a box'. 'Carry on' means to continue.",
      'to stop suddenly': "That is the opposite. 'Carry on' means to keep going.",
      'to take a break':
        'That is the opposite of the sentence. The speaker says to carry on with your work.',
    },
    more: "'Carry on' can be followed by -ing or by 'with': 'carry on working' or 'carry on with your work'.",
    tip: "Use 'carry on' in speaking when you want someone to continue: 'Carry on, please.'",
  },
  'take off': {
    why: "The subject is a plane, and the sentence says it will 'take off' soon. For a plane, 'take off' means to leave the ground and begin to fly.",
    not: {
      'to land safely':
        "Landing is 'land'. 'Take off' is the opposite: the plane leaves the ground.",
      'to slow down': "Slowing down is 'slow down'. 'Take off' is about starting to fly.",
      'to remove a label':
        "That is another meaning of 'take off' (take off a label or a coat). Here the plane shows it means leave the ground.",
    },
    more: "'Take off' also means to remove clothes: 'Take off your coat.' The thing it goes with shows the meaning.",
    tip: "At an airport you will hear the words 'take-off' and 'landing'. Take-off is the start of the flight.",
  },
  'look forward to': {
    why: "The speaker is excited about a holiday that has not happened yet. 'Look forward to' means to feel happy about something that will happen.",
    not: {
      'to remember the past':
        "Remembering the past is 'look back on'. 'Look forward to' is about the future.",
      'to look in front of you':
        "That is the usual meaning of the words. As a phrasal verb, 'look forward to' means to feel excited about the future.",
      'to worry about something':
        "Worrying is 'worry about' or 'dread'. 'Look forward to' is for good feelings about the future.",
    },
    more: "After 'look forward to', use a noun or the -ing form: 'I look forward to the holiday', 'I look forward to seeing you'.",
    tip: "End a letter or email with 'I look forward to hearing from you'. Do not write 'to hear'.",
  },
  'come across': {
    why: "The speaker was tidying the attic and found an old photo without looking for it. 'Come across' means to find something by chance.",
    not: {
      'to walk towards someone':
        "Walking towards someone is 'come up to' or 'approach'. 'Come across' is about finding something by chance.",
      'to agree with a plan':
        "Agreeing with a plan is 'go along with'. 'Come across' is about finding.",
      'to hide something':
        "Hiding is the opposite of finding. 'Come across' means to find something by chance.",
    },
    more: "'Come across' is also used for the impression a person gives: 'She comes across as friendly.'",
    tip: "'Come across' does not split: say 'come across a photo' or 'come across it'.",
  },
  'bring up': {
    why: "She did not want to talk about money. To 'bring up' a subject means to mention it or to start talking about it.",
    not: {
      'to carry upstairs':
        "That is the usual meaning, as in 'bring the bags up'. Here 'the subject of money' shows it means to mention.",
      'to end a conversation':
        "Ending a conversation is 'wrap up' or 'break off'. 'Bring up' starts a topic.",
      'to raise a child':
        "That is another meaning of 'bring up' (bring up children). Here 'the subject of money' shows it means to mention a topic.",
    },
    more: "'Bring up' also means to raise children: 'She was brought up in Leeds.'",
    tip: "Use 'bring up' with topics: 'bring up a problem', 'bring up an idea'.",
  },
  'call off': {
    why: "The rain stopped the match, so it did not take place. 'Call off' means to cancel a planned event.",
    not: {
      'to telephone someone': "Telephoning is 'call' or 'ring up'. 'Call off' means to cancel.",
      'to shout loudly': "Shouting is 'shout' or 'call out'. 'Call off' means to cancel.",
      'to begin a game':
        "Beginning a game is 'kick off' or 'start'. 'Call off' is the opposite: it cancels.",
    },
    more: "You can split 'call off': 'call off the match' or 'call it off'.",
    tip: "In news English you may read: 'The concert has been called off.'",
  },
  'check in': {
    why: "The speaker must arrive at the hotel and register before six. 'Check in' means to register your arrival at a hotel or an airport.",
    not: {
      'to look inside a bag':
        "Looking inside a bag is just 'check' it or 'look in' it. 'Check in' is about registering your arrival.",
      'to pay a bill':
        "Paying the bill and leaving a hotel is 'check out'. 'Check in' is the arrival.",
      'to leave a building': "Leaving a hotel is 'check out'. 'Check in' is for arriving.",
    },
    more: 'At an airport you check in to get your boarding pass and leave your bags. At a hotel you get your room key.',
    tip: "The noun is 'check-in': 'The check-in desk is open now.'",
  },
  'check out': {
    why: "Guests must leave their room by eleven. To 'check out' of a hotel means to pay and leave.",
    not: {
      'to look at a price':
        "Informally, 'check out' can mean 'look at'. Here it is about leaving a hotel.",
      'to arrive somewhere': "Arriving at a hotel is 'check in'. 'Check out' is when you leave.",
      'to fill in a form':
        "Filling in a form is 'fill in' or 'fill out'. 'Check out' is about leaving a hotel.",
    },
    more: "In informal speech, 'check out' also means to look at something interesting: 'Check out this photo.'",
    tip: "Hotels give a time for leaving: 'Check-out is at eleven.'",
  },
  'fill in': {
    why: "A form has empty spaces for your details. To 'fill in' a form means to complete it by writing the information.",
    not: {
      'to empty a container':
        "Emptying a container is 'pour out' or 'empty out'. 'Fill in' is about adding writing.",
      'to dig a hole':
        'Digging is the opposite of filling in a hole. A form needs information written in it.',
      'to colour a picture':
        "Colouring a picture is 'colour in'. 'Fill in a form' is about writing information.",
    },
    more: "Britons usually say 'fill in a form'. Americans usually say 'fill out'. Both mean the same.",
    tip: "You can split 'fill in': 'fill in the form' or 'fill it in'.",
  },
  'get on with': {
    why: "The word 'well' shows the relationship is good. To 'get on with' someone means to have a good relationship with them.",
    not: {
      'to climb onto a bus':
        "Climbing onto a bus is 'get on' by itself. 'Get on with' someone is about a relationship.",
      'to argue constantly':
        "Arguing and stopping being friends is 'fall out with' someone. 'Get on well with' means the opposite.",
      'to leave quickly':
        "Leaving quickly is 'get away' or 'rush off'. 'Get on with' is about friendship.",
    },
    more: "'Get on with' also means to continue a task: 'Get on with your work.' The words around it show which meaning.",
    tip: "'Get on with' and 'get along with' mean the same when we talk about people.",
  },
  'give back': {
    why: "The speaker lent a book and wants it returned. 'Give back' means to return something to its owner.",
    not: {
      'to keep something': "Keeping something is the opposite. 'Give back' means to return it.",
      'to step backwards':
        "Stepping backwards is 'step back' or 'move back'. 'Give back' is about returning something.",
      'to lend money':
        "Lending is 'lend'. 'Give back' is what you do afterwards: you return what was lent.",
    },
    more: "You can split 'give back': 'give back the book' or 'give it back'.",
    tip: "Use 'give back' for things you borrowed, and 'pay back' for money: 'I will pay you back on Friday.'",
  },
  'go on': {
    why: "The speaker asks what is happening in the street. 'What’s going on?' means 'What is happening?'",
    not: {
      'to switch off': "Switching off is 'turn off'. 'Go on' here is about something happening.",
      'to go away': "Going away is 'go away' or 'leave'. 'Go on' here means happen.",
      'to slow down': "Slowing down is 'slow down'. 'Go on' here means happen.",
    },
    more: "'Go on' has other meanings. It can mean to continue ('Go on with your story') or to encourage ('Go on, try it').",
    tip: "'What’s going on?' is a very common way to ask what is happening.",
  },
  'grow up': {
    why: "The sentence tells us where he spent his childhood. 'Grow up' means to develop from a child into an adult.",
    not: {
      'to get taller, like a plant':
        "Plants simply 'grow' or 'grow tall'. 'Grow up' is about a child becoming an adult.",
      'to move house often':
        "Moving house is 'move' or 'move around'. 'Grow up' is about childhood.",
      'to learn a language':
        "Learning a language is 'learn' or 'pick up'. 'Grow up' is about becoming an adult.",
    },
    more: "'Where did you grow up?' asks about the place of your childhood.",
    tip: "Use 'grow up' for people and 'grow' for plants and things: 'The tree grew quickly.'",
  },
  'hold on': {
    why: "The speaker needs a short time to check the diary. 'Hold on' means to wait for a short time.",
    not: {
      'to let go': 'Letting go is the opposite of holding on. Here the speaker asks you to wait.',
      'to hurry up': "Hurrying is the opposite of waiting. 'Hold on' asks someone to wait.",
      'to hang something up': "Hanging something up is 'hang up'. 'Hold on' means to wait.",
    },
    more: "On the phone, 'hold on' means 'please wait'. 'Hold on to' something means to keep holding it.",
    tip: "'Hold on' and 'hang on' mean the same in speaking: 'Hold on, please.'",
  },
  'look up': {
    why: "You use a dictionary to find a word you do not know. To 'look up' a word means to search for it in a book or on a website.",
    not: {
      'to raise your head':
        "That is the usual meaning of the words, as in 'look up at the sky'. With a dictionary, 'look up' means to search for information.",
      'to admire someone':
        "Admiring someone is 'look up to' them. Without 'to', 'look up' is about searching.",
      'to clean a shelf':
        "Cleaning a shelf is 'dust' or 'wipe down'. 'Look up' is about finding information.",
    },
    more: 'You can look up words, phone numbers and facts, in a dictionary, in a book or on an app.',
    tip: "You can split 'look up'. With a word such as 'it', put it in the middle: 'look it up', not 'look up it'.",
  },
  'pick up': {
    why: "The speaker will meet you at the station and take you somewhere. 'Pick up' means to collect someone or something.",
    not: {
      'to drop something':
        "Dropping something is the opposite of picking it up. 'Drop off' means to leave a person at a place, and 'pick up' is to collect them.",
      'to choose carefully':
        "Choosing is 'pick' or 'pick out'. 'Pick up' here means to collect a person.",
      'to lift weights':
        "Lifting weights is exercise. 'Pick up' can mean to lift, but here the speaker is collecting a person.",
    },
    more: "'Pick up' also means to lift something from a surface, or to learn something easily: 'pick up a new language'.",
    tip: "You can split 'pick up': 'pick you up' or 'pick up the parcel'.",
  },
  'put on': {
    why: "The speaker says it is cold, so the person should wear a coat. To 'put on' clothing means to dress yourself in it.",
    not: {
      'to take off clothes':
        "That is the opposite: 'take off'. 'Put on' means to start wearing something.",
      'to switch off a device':
        "Switching off a device is 'turn off'. 'Put on' is about clothes here.",
      'to place on a table':
        "That is the usual meaning of 'put' plus 'on', as in 'put the book on the table'. Here 'put on your coat' is about clothing.",
    },
    more: "'Put on' is also used for lights and music: 'Put on the radio.'",
    tip: "Use 'put on' for the action and 'wear' for the state: 'Put on your coat' but 'She is wearing a coat'.",
  },
  'set up': {
    why: "They started a business last year. To 'set up' a business means to start or establish it.",
    not: {
      'to sit down': "Sitting down is 'sit down'. 'Set up' is about starting something.",
      'to close a company':
        "Closing a company is 'close down' or 'shut down'. 'Set up' is the opposite: it starts one.",
      'to tidy a desk': "Tidying a desk is 'tidy up'. 'Set up' is about starting or preparing.",
    },
    more: "'Set up' also means to prepare equipment: 'Set up the projector before the lesson.'",
    tip: "You can split 'set up': 'set up a company' or 'set it up'.",
  },
  'take up': {
    why: "She began painting after she retired. To 'take up' an activity or hobby means to start doing it.",
    not: {
      'to lift upwards':
        "Lifting is 'pick up' or 'lift'. Here 'took up painting' is about starting an activity.",
      'to give up a hobby': "That is the opposite: 'give up'. 'Take up' means to start.",
      'to use space':
        "That is another meaning: 'take up space'. Here painting shows it means starting a hobby.",
    },
    more: "'Take up' also means to fill space or time: 'This table takes up too much room.'",
    tip: "'Take up' is the opposite of 'give up': take up a hobby, give up a bad habit.",
  },
  'turn up': {
    why: "He came late for the interview. 'Turn up' means to arrive, often late or without warning.",
    not: {
      'to leave early': 'Leaving early is the opposite. The sentence says he came late.',
      'to increase the heat':
        "That is another meaning of 'turn up' ('turn up the heating'). Here 'late for the interview' shows it means arrive.",
      'to fold a sleeve':
        "That is another meaning: to 'turn up' a sleeve means to fold the end up. The interview shows it means arrive.",
    },
    more: "'Turn up' also means to make something louder or hotter: 'Turn up the music.'",
    tip: "'Turn up' and 'show up' both mean to arrive: 'She turned up at ten.'",
  },
  'work out': {
    why: "The speaker could not find the answer to a puzzle. To 'work out' an answer means to solve it by thinking.",
    not: {
      'to exercise at a gym':
        "That is another meaning of 'work out'. Here the puzzle shows it means to solve.",
      'to leave a job': "Leaving a job is 'quit'. 'Work out' here is about solving a puzzle.",
      'to go outside': "Going outside is 'go out'. 'Work out' means to solve.",
    },
    more: "'Work out' also means to exercise: 'I work out at the gym three times a week.'",
    tip: "You can split 'work out': 'work out the answer' or 'work it out'.",
  },
  'break down': {
    why: "The car stopped working on the motorway. 'Break down' means to stop working, for a machine or a vehicle.",
    not: {
      'to fall to the ground':
        "Falling is 'fall down'. 'Break down' is about a machine that stops working.",
      'to start easily': 'That is the opposite of a car that stops working.',
      'to drive fast':
        "Driving fast is 'speed' or 'race along'. 'Break down' is about a car that stops.",
    },
    more: "People can 'break down' too: 'She broke down in tears.' It means they could not stay calm.",
    tip: "The noun is 'breakdown': 'We called a breakdown service.'",
  },
  'cut down on': {
    why: "A doctor tells someone to eat less sugar. To 'cut down on' something means to reduce the amount you use.",
    not: {
      'to chop a tree':
        "That is 'cut down' without 'on': 'cut down a tree'. With 'on', it means to reduce.",
      'to add more of something': "That is the opposite. 'Cut down on' means to use less.",
      'to throw away': "Throwing away is 'throw away'. 'Cut down on' means to use less, not none.",
    },
    more: "We use 'cut down on' for things we want less of: sugar, coffee, screen time.",
    tip: "You can also say 'cut back on'. Both mean to reduce.",
  },
  'deal with': {
    why: "A complaint is a problem, and the manager will take action on it today. To 'deal with' a problem means to handle it.",
    not: {
      'to play cards':
        "Playing cards uses 'deal' by itself: 'deal the cards'. 'Deal with' is about handling a problem.",
      'to ignore an issue': "That is the opposite. 'Deal with' means to take action.",
      'to make a deal':
        "A deal is an agreement, but 'deal with' here is about handling the complaint.",
    },
    more: "'Deal with' can also mean 'be about': 'The book deals with war.'",
    tip: "'Deal with' does not split: say 'deal with the problem' or 'deal with it'.",
  },
  'end up': {
    why: "They got lost, and the journey finished in a place they did not plan. 'End up' means to reach a final place or situation.",
    not: {
      'to finish on time':
        "Finishing on time is 'finish' or 'be on time'. 'End up' is about where you finally are.",
      'to stand up': "Standing is 'stand up'. 'End up' is about the final result.",
      'to begin a journey':
        "Beginning a journey is 'set off'. 'End up' is about where you finally arrive.",
    },
    more: "'End up' often shows a result you did not plan: 'He ended up as a teacher.'",
    tip: "After 'end up', you can use -ing: 'We ended up walking home.'",
  },
  'figure out': {
    why: "The speaker does not understand how the machine works. 'Figure out' means to understand something after thinking about it.",
    not: {
      'to draw a shape': "Drawing a shape is 'draw'. 'Figure out' is about understanding.",
      'to count numbers':
        "Counting is 'count' or 'add up'. 'Figure out' is about understanding, as with how a machine works.",
      'to leave a place':
        "Leaving a place is 'get out' or 'go out'. 'Figure out' is about thinking.",
    },
    more: "'Figure out' is informal and means almost the same as 'work out': 'I cannot figure out the answer.'",
    tip: "'Figure out' goes well with question words: 'figure out how', 'figure out why'.",
  },
  'get along with': {
    why: "The question asks if you are on friendly terms with your neighbours. To 'get along with' someone means to have a friendly relationship with them.",
    not: {
      'to walk slowly': "Walking slowly is 'stroll'. 'Get along with' is about friendship.",
      'to dislike someone':
        "That is the opposite. 'Get along with' means to have a friendly relationship.",
      'to follow a path':
        "Following a path is 'follow' or 'go along'. 'Get along with' is about people.",
    },
    more: "'Get on with' means the same, and it is very common in British English.",
    tip: "Use it in questions about people: 'Do you get along with your teacher?'",
  },
  'get back': {
    why: "The question asks about the time you returned from a trip. 'Get back' means to return to a place.",
    not: {
      'to move backwards':
        "Moving backwards is 'step back' or 'move back'. 'Get back' here means to return.",
      'to recover money':
        "That is another meaning: 'get your money back'. Here 'from the trip' shows it means return.",
      'to take revenge': "That is 'get back at' someone. Without 'at', 'get back' means return.",
    },
    more: "'Get back' also means to receive something again: 'I got my money back.'",
    tip: "'Get back to' a person means to reply later: 'I will get back to you tomorrow.'",
  },
  'give in': {
    why: "After a long argument, he stopped arguing for what he wanted. 'Give in' means to stop resisting and agree.",
    not: {
      'to hand in homework':
        "That is another meaning, used in British English: 'give in your homework'. Here the argument shows it means to stop resisting.",
      'to enter a room':
        "Entering is 'go in' or 'come in'. 'Give in' is about stopping an argument.",
      'to donate money': "Donating is 'give' or 'donate'. 'Give in' is about stopping resisting.",
    },
    more: "'Give in' can be used alone ('He gave in') or with 'to' ('She gave in to the pressure').",
    tip: "'Give in' and 'give up' are different. 'Give in' means to agree; 'give up' means to stop trying.",
  },
  'go off': {
    why: "The milk smells terrible, so it is no longer good to drink. 'Go off' means that food or drink has become bad.",
    not: {
      'to leave a party':
        "Leaving is usually 'leave' or 'go away'. Here the terrible smell shows the milk is bad.",
      'to switch on': "Switching on is 'turn on'. 'Go off' here is about food that is bad.",
      'to explode loudly':
        "That is another meaning: a firework 'goes off' when it explodes. Here the terrible smell shows that the milk has gone bad.",
    },
    more: "'Go off' also means that an alarm rings: 'The fire alarm went off.'",
    tip: "In British English, we say food 'goes off'. Americans say it 'goes bad'.",
  },
  'hang on': {
    why: "The speaker needs a moment to find the keys. 'Hang on' means to wait for a moment.",
    not: {
      'to let go of something':
        'Letting go is the opposite of holding on. Here the speaker asks you to wait.',
      'to hang up clothes': "Hanging up clothes is 'hang up'. 'Hang on' here means to wait.",
      'to hold tightly':
        "That is another meaning: 'hang on to the rope'. Here 'while I find my keys' shows it means wait.",
    },
    more: "'Hang on' is informal. It means almost the same as 'hold on', and you can say 'Hang on a minute.'",
    tip: "Say 'Just a moment, please' in a formal situation, and 'Hang on' with friends.",
  },
  'hang up': {
    why: "She ended the call before the speaker could answer. To 'hang up' the phone means to end a telephone call.",
    not: {
      'to wait patiently': "Waiting is 'hang on' or 'hold on'. 'Hang up' ends the call.",
      'to hang a picture':
        "That is another meaning: 'hang up a picture'. The phone shows it means end the call.",
      'to call someone': "Calling is 'call' or 'ring up'. 'Hang up' is when the call ends.",
    },
    more: "'Hang up' also means to put something on a hook: 'Hang up your coat.'",
    tip: "'Hang up' is the opposite of 'pick up' the phone. You pick up to answer and hang up to finish.",
  },
  'keep up with': {
    why: "News changes fast. To 'keep up with' it is to learn each new thing as it happens. 'Keep up with' means to stay at the same level or pace as something.",
    not: {
      'to fall behind': "That is the opposite. 'Keep up with' means to stay level with something.",
      'to lift something':
        "Lifting is 'pick up' or 'lift up'. 'Keep up with' is about staying level.",
      'to store food':
        "Storing food is 'keep' or 'store'. 'Keep up with' is about staying at the same pace.",
    },
    more: 'You can keep up with a person who walks fast, with changes or with fashion.',
    tip: "After 'keep up with', use a noun: 'keep up with the news', 'keep up with your homework'.",
  },
  'let down': {
    why: "The speaker made a promise to help and says they will not break it. To 'let down' someone means to disappoint them by not doing what you promised.",
    not: {
      'to lower a rope':
        "That is the usual meaning: 'let down a rope'. Here a promise shows it means to disappoint.",
      'to support a friend':
        "That is the opposite of 'let down'. Supporting a friend is 'stand by' them.",
      'to relax fully':
        "Relaxing fully is 'chill out' or 'unwind'. 'Let down' is about disappointing someone.",
    },
    more: "'Let down' also means to lower something: 'They let down the rope.'",
    tip: "You can split 'let down': 'let you down' or 'let them down'.",
  },
  'log in': {
    why: "A password is needed to enter the website. To 'log in' means to enter a computer system or website using your details.",
    not: {
      'to write in a diary':
        "Writing in a diary is 'write down' or 'note down'. 'Log in' is about entering a website.",
      'to leave a website': "Leaving a website is 'log out'. 'Log in' is the opposite.",
      'to record a video':
        "Recording is 'record' or 'film'. 'Log in' is about entering with your details.",
    },
    more: "You can also say 'sign in'. The noun is 'login'. The opposite is 'log out'.",
    tip: 'Keep your password private when you log in. Do not share it with anyone.',
  },
  'make up': {
    why: "A story about a dragon is not true, so the children created it themselves. To 'make up' a story means to invent it.",
    not: {
      'to apply cosmetics':
        "That is another use of the words, as in 'make-up' for the face. The story about a dragon shows it means invent.",
      'to tell the truth': 'Telling the truth is the opposite of inventing a story.',
      'to wake up early': "Waking up is 'wake up'. 'Make up' is about inventing.",
    },
    more: "'Make up' also means to become friends again after an argument: 'They made up yesterday.'",
    tip: "You can split 'make up': 'make up a story' or 'make it up'.",
  },
  'pass away': {
    why: "'Passed away peacefully' is a gentle way to say that her grandfather died. 'Pass away' is a polite expression for 'die'.",
    not: {
      'to walk past':
        "Walking past is 'pass by' or 'walk past'. 'Pass away' is a gentle way to say die.",
      'to fall asleep':
        "Falling asleep is 'drop off' or 'nod off'. 'Pass away' is about death, not sleep.",
      'to move house': "Moving house is 'move out' or 'move away'. 'Pass away' means to die.",
    },
    more: "People say 'pass away' to be kind when they talk about death. 'He died' is more direct.",
    tip: "Use 'pass away' in kind, polite writing, for example in a message to someone who is sad.",
  },
  'point out': {
    why: "She told the writer about a mistake that he or she had not seen. To 'point out' something means to tell someone about it.",
    not: {
      'to leave a room':
        "Leaving is 'go out' or 'walk out'. 'Point out' is about showing something.",
      'to draw an arrow':
        "Drawing an arrow is just 'draw'. 'Point out' means to show or tell about something.",
      'to choose an option':
        "Choosing is 'pick out' or 'choose'. 'Point out' means to tell someone about something.",
    },
    more: 'You can point out a mistake, a problem or a fact. You can also point with your finger.',
    tip: "When you write about a text, 'points out' is a useful verb: 'The writer points out the cost of war.'",
  },
  'put up with': {
    why: "The speaker finds the noise unpleasant and cannot accept it any longer. 'Put up with' means to tolerate something unpleasant.",
    not: {
      'to build a tent':
        "That is 'put up' without 'with': 'put up a tent'. With 'with', it means to tolerate.",
      'to enjoy something': "That is the opposite. We 'put up with' things we do not like.",
      'to raise an arm':
        "Raising an arm is 'put up' or 'raise'. With 'with', it means to tolerate.",
    },
    more: 'You put up with things or people that you dislike but cannot change: the weather, a noisy neighbour.',
    tip: "'Put up with' does not split. After it, use a noun or -ing: 'put up with the noise', 'put up with waiting'.",
  },
  'run into': {
    why: "The speaker did not plan to see the friend; they met by chance at the supermarket. To 'run into' someone means to meet them unexpectedly.",
    not: {
      'to crash a car':
        "That is another meaning: to 'run into' a wall means to hit it. An old friend shows it means meet by chance.",
      'to enter a building':
        "That is the usual meaning: 'run into the shop'. An old friend shows it means meet by chance.",
      'to avoid someone': "That is the opposite. 'Run into' means to meet someone.",
    },
    more: "'Run into' also means to hit something: 'The car ran into a tree.'",
    tip: "'Run into' is usually for people. For things that you find by chance, use 'come across'.",
  },
  'set off': {
    why: "They left early so that the traffic would be light. 'Set off' means to begin a journey.",
    not: {
      'to arrive home': "Arriving is 'get in' or 'arrive'. 'Set off' is the start of a journey.",
      'to switch off an alarm':
        "Switching off an alarm is 'turn off'. Note that 'set off an alarm' means to make it ring.",
      'to put down luggage':
        "Putting down luggage is 'put down'. 'Set off' is about starting to travel.",
    },
    more: "'Set off' also means to make something start: 'Burnt toast set off the smoke alarm.'",
    tip: "'Set off' and 'set out' are similar. Both can mean to start a journey.",
  },
  'show up': {
    why: "Only some of the team came to practice. 'Show up' means to arrive or to appear at an event.",
    not: {
      'to leave early': "Leaving early is the opposite. 'Show up' means to arrive.",
      'to display proudly': "Showing something proudly is 'show off'. 'Show up' means to arrive.",
      'to climb up': "Climbing is 'climb up' or 'go up'. 'Show up' means to appear.",
    },
    more: "'Show up' is informal. It is used when someone comes, or does not come: 'He never showed up.'",
    tip: "'Show up' is similar to 'turn up'. You can use either in speaking: 'Did she show up?'",
  },
  'sort out': {
    why: "The files need to be put in order before the deadline. 'Sort out' means to organise something or to solve a problem.",
    not: {
      'to throw away': "Throwing away is 'throw away'. 'Sort out' is about organising.",
      'to make a mess': "That is the opposite. 'Sort out' makes things organised.",
      'to leave the office': "Leaving is 'go out' or 'leave'. 'Sort out' is about organising.",
    },
    more: "'Sort out' is friendly and common in British English: 'Don’t worry, I will sort it out.'",
    tip: "You can split 'sort out': 'sort out the files' or 'sort them out'.",
  },
  'stay up': {
    why: "The children watched a film late at night instead of going to bed. 'Stay up' means to remain awake instead of going to bed.",
    not: {
      'to stand still': "Standing still is 'stand still'. 'Stay up' is about not going to bed.",
      'to wake up early':
        "That is 'wake up' early: you stop sleeping early in the morning. 'Stay up' is about going to bed late.",
      'to remain standing':
        "That is about standing. 'Stay up' is about staying awake, not about standing.",
    },
    more: "You can stay up late to study, to watch something or to wait for someone: 'I stayed up until midnight.'",
    tip: "Add 'late' to show it was after your normal bedtime: 'stay up late'.",
  },
  'take after': {
    why: "The sentence says she is like her mother in many ways. 'Take after' means to look or behave like an older family member.",
    not: {
      'to follow someone':
        "Following is 'follow' or 'go after'. 'Take after' is about being similar to a parent.",
      'to look behind you':
        "Looking behind is 'look back' or 'look behind'. 'Take after' is about family likeness.",
      'to chase a person':
        "Chasing is 'chase' or 'run after'. 'Take after' is about being like a family member.",
    },
    more: "'Take after' is used for people in your family: 'He takes after his father.'",
    tip: "'Take after' can be about character or looks. 'Look like' is only about looks: 'She looks like her mother.'",
  },
  'throw away': {
    why: "The speaker says not to put the bottles in the bin, because they can be recycled. 'Throw away' means to get rid of something you do not want.",
    not: {
      'to keep safely':
        "That is the opposite of 'throw away'. The sentence says 'Don’t throw away', so the bottles are kept.",
      'to toss a ball':
        "Tossing a ball is 'throw' or 'toss'. 'Throw away' means to get rid of something.",
      'to give as a gift':
        "Giving a gift is 'give'. 'Throw away' is about getting rid of something.",
    },
    more: "You can split 'throw away': 'throw away the bottles' or 'throw them away'. 'Throw out' is similar.",
    tip: "Use 'throw away' for rubbish and 'recycle' for things that can be used again.",
  },
  'try on': {
    why: "The speaker wants to put the shoes on before buying them, to see if they fit. To 'try on' clothes means to wear them to test them.",
    not: {
      'to attempt a task':
        "Attempting a task is 'try' or 'have a go'. 'Try on' is for clothes and shoes.",
      'to take off clothes':
        "Taking off clothes is 'take off'. 'Try on' is putting them on to test.",
      'to test a machine': "Testing a machine is 'try out'. 'Try on' is for clothing.",
    },
    more: "We use 'try on' in shops for clothes, shoes and hats. We use 'try out' for machines and ideas.",
    tip: "You can split 'try on': 'try on the shoes' or 'try them on'.",
  },
  'turn off': {
    why: "Lights are electrical, and the speaker wants them switched off when you leave. To 'turn off' a device means to stop it working.",
    not: {
      'to start an engine':
        "Starting an engine is 'start up' or 'turn on'. 'Turn off' is the opposite.",
      'to leave a road':
        "That is another meaning: 'turn off the main road'. The lights show it means switch off.",
      'to refuse politely':
        "Refusing is 'turn down'. 'Turn off' here is about switching off a light.",
    },
    more: "'Turn off' also means to leave a road: 'Turn off at the next junction.'",
    tip: "'Turn off' and 'switch off' mean the same. The opposite is 'turn on'.",
  },
  'turn on': {
    why: "The speaker asks for the heating to be started. To 'turn on' a device means to make it start working.",
    not: {
      'to switch off a light': "That is the opposite: 'turn off'. 'Turn on' starts a device.",
      'to face someone': "Facing someone is 'turn to' or 'turn round'. 'Turn on' starts a device.",
      'to rotate slowly': "Rotating is 'turn' or 'turn round'. 'Turn on' starts a device.",
    },
    more: "The opposite is 'turn off'. 'Switch on' means the same: 'Switch on the light.'",
    tip: "You can split 'turn on': 'turn on the heating' or 'turn it on'.",
  },
  'wake up': {
    why: "The speaker stopped sleeping early so that they could catch the first bus. 'Wake up' means to stop sleeping.",
    not: {
      'to get out of bed': "That is 'get up'. You wake up first, then you get up later.",
      'to fall asleep':
        "That is the opposite: 'fall asleep' or 'go to sleep'. 'Wake up' means to stop sleeping.",
      'to feel sleepy': "Feeling sleepy is 'be tired'. 'Wake up' is when sleep ends.",
    },
    more: "'Wake up' can also be used for another person: 'Please wake me up at six.'",
    tip: "Say 'I woke up at six and got up at seven' to show both steps.",
  },
  'warm up': {
    why: "Athletes prepare their bodies before a race so that they do not hurt themselves. 'Warm up' means to prepare the body with gentle exercise.",
    not: {
      'to heat a meal':
        "That is another meaning: 'warm up the soup'. Athletes and a race show it means exercise.",
      'to cool down':
        "That is the opposite: 'cool down' happens after exercise. 'Warm up' is before.",
      'to put on a jumper':
        "Putting on a jumper is 'put on'. 'Warm up' for athletes means gentle exercise.",
    },
    more: "'Warm up' also means to make food or a room warm: 'Warm up the soup.' The noun 'warm-up' is the exercise before sport.",
    tip: "Use 'warm up' before sport and 'cool down' after it.",
  },
}
