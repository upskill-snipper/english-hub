import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Collocations Challenge: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/collocations-challenge.ts). Written with AI on
 * 16 October 2026 and checked against each question and its options, as the founder
 * decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 206 questions new or rewritten (240 in
 * all, 80 at each tier), among them odd-one-out questions, noun, adjective and
 * adverb partners, short dialogues and real lines from texts out of UK
 * copyright, each with an explanation for every wrong option; explanations of
 * kept questions that named another question's partnership were reworded, or
 * the two questions kept out of one round. Written with AI and checked against
 * each question, as the founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 31 October 2026: six questions changed (see
 * the bank's docblock), with new or re-keyed explanations, and ten were
 * corrected: the rule for do and play (martial arts take do, games and ball
 * sports play), the languages that say 'make a photo', talk and speak with a
 * language, make news, informal do, and make a baby.
 */
export const EXPLANATIONS: GameExplanations = {
  "Don't ___ a noise: the baby is sleeping.": {
    why: "We say 'make a noise'. A noise is a sound that you cause. Example: 'The children made a lot of noise.' The noun 'noise' goes with 'make'.",
    not: {
      do: "We do not say 'do a noise'. A noise is a sound you create, so you make it.",
      have: "We do not say 'have a noise'. Use 'make a noise'.",
      take: "We do not say 'take a noise'. Use 'make a noise' for creating a sound.",
    },
    more: "We also make a sound, a mess and a speech. Things that you create usually take 'make'.",
    tip: "'Don’t make a noise' is a polite request to be quiet. 'Be quiet' is a more direct way to say it.",
  },
  'Can you ___ a phone call to the office for me?': {
    why: "We say 'make a phone call'. It means you ring someone. Example: 'I need to make a phone call to my mother.'",
    not: {
      do: "'Do a phone call' is only informal. When you ring someone, you make a phone call.",
      have: "'Have a phone call' means you talk or receive a call. Here the speaker asks you to ring the office, so we say 'make a phone call'.",
      take: "'Take a call' means to answer it when someone rings you. Here you are the one ringing the office, so we say 'make'.",
    },
    more: 'You make a call when you ring someone, and you take or answer a call when someone rings you. We also make a video call.',
    tip: 'Learn the pair together: make a call, take a call.',
  },
  'She tried to ___ friends on her first day at school.': {
    why: "We say 'make friends'. It means you meet people and begin to like each other. Example: 'He made friends quickly at the new school.'",
    not: {
      do: "We do not say 'do friends'. Beginning a friendship is making something new, so we use 'make'.",
      have: "'Have friends' means you already know people who like you. She is new, so she tries to make friends.",
      take: "We do not say 'take friends'. Use 'make friends'.",
    },
    more: "'Make friends with someone' is also common: 'She made friends with a girl in her class.' The usual form is the plural, 'friends'.",
    tip: "A useful sentence for a speaking test: 'It is easy to make friends at my school.'",
  },
  'I have to ___ my homework before I can watch television.': {
    why: "We say 'do homework'. Homework is school work that you complete at home, and English uses 'do' for tasks like this. Example: 'I do my homework after dinner.'",
    not: {
      make: "We do not say 'make homework'. This is a common mistake, because some languages use one verb for 'make' and 'do'.",
      have: "We do not say 'have homework' for completing it. 'I have homework' only means that the teacher gave you some.",
      take: "We do not say 'take homework'. You might take your homework to school, but the work itself is done.",
    },
    more: "'Homework' is uncountable, so we say 'some homework' or 'a lot of homework', not 'homeworks'.",
    tip: "Learn 'do' with jobs you complete: do homework, do the windows, do the accounts.",
  },
  'She needs to ___ the washing-up after dinner.': {
    why: "We say 'do the washing-up'. It means you wash the plates and cups after a meal (British English). Example: 'I did the washing-up for my mum.'",
    not: {
      make: "We do not say 'make the washing-up'. Jobs around the house usually use 'do'.",
      have: "We do not say 'have the washing-up'. 'Have' is used for meals and rests, not for jobs.",
      take: "We do not say 'take the washing-up'. Use 'do the washing-up'.",
    },
    more: "Many house jobs take 'do': do the hoovering, do the windows, do the bathroom. 'Washing-up' is a British word for washing plates and cups after a meal.",
    tip: "Use it when you talk about your home life: 'I do the washing-up on Sundays.'",
  },
  "It's my turn to ___ the housework this week.": {
    why: "We say 'do the housework'. It means the jobs that keep a home clean and tidy, such as cleaning and washing. Example: 'We share the housework.'",
    not: {
      make: "We do not say 'make the housework'. Jobs and chores use 'do'.",
      have: "We do not say 'have the housework'. 'Have' is for meals and rests.",
      take: "We do not say 'take the housework'. Use 'do the housework'.",
    },
    more: "'Housework' is uncountable, so it has no plural. The same is true of 'homework'. Small jobs at home are 'chores': 'do the chores'.",
    tip: "In a speaking test, describe your routine: 'I help my parents do the housework on Saturdays.'",
  },
  'Please ___ your best in the exam tomorrow.': {
    why: "We say 'do your best'. It means you try as hard as you can. Example: 'I did my best in the test.' The phrase is fixed: 'do' plus 'best'.",
    not: {
      make: "We do not say 'make your best'. We say 'do your best' or 'make an effort'.",
      have: "We do not say 'have your best'. The fixed phrase is 'do your best'.",
      take: "We do not say 'take your best'. Use 'do your best'.",
    },
    more: "People say 'do your best' to encourage someone before a test or a match. The word before 'best' changes with the person: 'my', 'her', 'their'.",
    tip: "A kind way to wish someone luck: 'Just do your best.'",
  },
  'I need to ___ the shopping on my way home.': {
    why: "We say 'do the shopping'. It means you buy food and other things you need at the shops. Example: 'I do the shopping on Saturdays.' This is the usual phrase in British English.",
    not: {
      make: "We do not say 'make the shopping'. Buying things at the shops is a job you do.",
      have: "We do not say 'have the shopping'. 'Have' is not used for jobs.",
      take: "'Take the shopping' means to carry it somewhere, such as 'take the shopping home'. To buy things, we say 'do the shopping'.",
    },
    more: "Compare 'do the shopping' (a job: buy food and things for the home) and 'go shopping' (an activity, often for pleasure): 'We went shopping for shoes.'",
    tip: "Learn the pair: 'do the shopping' is a job, and 'go shopping' is an activity.",
  },
  'Can you ___ the cooking while I clean the kitchen?': {
    why: "We say 'do the cooking'. It means you are the person who prepares the meals. Example: 'My dad does the cooking at weekends.' With 'the cooking', English uses 'do'.",
    not: {
      make: "We do not say 'make the cooking'. We make a meal or a cake, but we do the cooking as a job.",
      have: "We do not say 'have the cooking'. 'Have' is used for eating the food, not for preparing it.",
      take: "We do not say 'take the cooking'. You can 'take over' the cooking, which means you begin to do it instead of someone else.",
    },
    more: "Compare 'make dinner' (one meal) and 'do the cooking' (the job in general). We also do the cleaning and do the washing.",
    tip: "Use 'do the' plus a job word to talk about who does what at home: 'Who does the cooking?'",
  },
  "Let's ___ the dishes together so it's quicker.": {
    why: "We say 'do the dishes'. It means you wash the plates, cups and pans. Example: 'I’ll do the dishes tonight.'",
    not: {
      make: "We do not say 'make the dishes'. We make a meal, but we do the dishes after it.",
      have: "We do not say 'have the dishes' for washing them. 'Have' is for eating.",
      take: "We do not say 'take the dishes' for washing. 'Take the dishes to the kitchen' means to carry them.",
    },
    more: "'Let’s' suggests doing something together: 'Let’s do the dishes and then go out.'",
    tip: "Use 'Let’s' plus a base verb to suggest an action together: 'Let’s do the dishes.'",
  },
  'They are going to ___ a party for his birthday.': {
    why: "We say 'have a party'. It means you invite people to a celebration. Example: 'They are having a party on Saturday.' 'Have' is the usual verb for parties.",
    not: {
      make: "We do not say 'make a party'. You have or 'throw' a party.",
      do: "'Do a party' is only very informal. The usual phrase is 'have a party' or 'throw a party'.",
      take: "We do not say 'take a party'. You can take someone to a party, but the event itself is something you have.",
    },
    more: "People also say 'throw a party'. 'Have' is the safest verb: 'have a party', 'have a celebration'.",
    tip: "In an invitation: 'We are having a party for his birthday. Please come.'",
  },
  'Did you ___ a good time at the concert last night?': {
    why: "We say 'have a good time'. It means you enjoy yourself. Example: 'We had a good time at the beach.' It is a fixed phrase with 'have'.",
    not: {
      make: "We do not say 'make a good time'. There is a different phrase, 'make good time', which means to travel quickly.",
      do: "We do not say 'do a good time'. Use 'have a good time'.",
      take: "We do not say 'take a good time'. Use 'have a good time'.",
    },
    more: "People also say 'enjoy yourself'. A question is 'Did you have a good time?' and an answer is 'Yes, I had a great time.'",
    tip: "'Have a good time' wishes someone well before a trip or a party.",
  },
  'She is going to ___ a baby in the spring.': {
    why: "We say 'have a baby'. It means that a baby will be born to the woman. Example: 'My sister had a baby in May.' The words 'is going to' show that it will happen soon.",
    not: {
      make: "'Make a baby' is not the phrase for this. When a baby is born, we say that the mother has a baby.",
      do: "We do not say 'do a baby'. Use 'have a baby'.",
      take: "We do not say 'take a baby' for giving birth. 'Take a baby' would mean to pick it up or carry it.",
    },
    more: "We use 'have' for family events: 'have a baby', 'have a child', 'have twins'. Another polite phrase is 'is expecting a baby'.",
    tip: "Use 'is going to' for a plan or something that is sure to happen: 'She is going to have a baby in the spring.'",
  },
  "Don't forget to ___ a photo of the sunset.": {
    why: "We say 'take a photo'. It means you use a camera or a phone to record a picture. Example: 'She took a photo of the sea.' The noun 'photo' goes with 'take'.",
    not: {
      make: "We do not say 'make a photo'. Some languages, such as Spanish, Italian and German, use their word for 'make' here, but English uses 'take'.",
      do: "We do not say 'do a photo'. Use 'take a photo'.",
      have: "'Have a photo' means to own one. To use a camera, we say 'take a photo'. People also say 'have your photo taken'.",
    },
    more: "A similar phrase is 'take a picture'.",
    tip: "When you want help, say: 'Could you take a photo of us, please?'",
  },
  'Please ___ care when you cross the busy road.': {
    why: "We say 'take care'. It means you are careful. Example: 'Take care on the stairs.' The noun 'care' goes with 'take', and we do not use 'a' before it.",
    not: {
      make: "We do not say 'make care'. Being careful is taking care.",
      do: "We do not say 'do care'. Use 'take care'.",
      have: "We do not say 'have care' for being careful. Use 'take care'.",
    },
    more: "'Take care' is also a friendly way to end a conversation: 'Bye, take care.' With 'of', it means to care for someone: 'take care of the baby'.",
    tip: "'Take care of' is used for people, animals and things you look after: 'She takes care of her little brother.'",
  },
  'Don’t ___ a mess in the kitchen.': {
    why: "We say 'make a mess'. A mess is what you leave when things are dirty or all over the place, and English uses 'make' for it. Example: 'The puppy made a mess on the floor.'",
    not: {
      do: "We do not say 'do a mess'. A mess is something you cause, so you make it.",
      have: "'Have a mess' is not natural. You make a mess, and then the room is in a mess.",
      take: "We do not say 'take a mess'. Use 'make a mess'.",
    },
    more: 'After you make a mess, you clear it up or tidy it up.',
  },
  'Close your eyes and ___ a wish.': {
    why: "We say 'make a wish'. You close your eyes and think of something you hope for, often before you blow out the candles on a birthday cake.",
    not: {
      do: "We do not say 'do a wish'. A wish is something you make.",
      have: "'Have a wish' is not the phrase for this. When you think of your hope, you make a wish.",
      take: "We do not say 'take a wish'. Use 'make a wish'.",
    },
    more: "If your wish happens, it 'comes true': 'I hope your wish comes true.'",
  },
  'She can ___ a paper plane in one minute.': {
    why: "We say 'make a paper plane'. When you build or create something with your hands, English uses 'make'. Example: 'We made a card for Grandma.'",
    not: {
      do: "We do not say 'do a paper plane'. Creating a thing with your hands is making it.",
      have: "'Have a paper plane' would mean to own one. Here she creates it in a minute, so we say 'make'.",
      take: "'Take a paper plane' would mean to pick one up. To create it, we say 'make'.",
    },
    more: "'Make' is for things you create: make a card, make a model, make a kite.",
  },
  'Let’s go outside and ___ a snowman.': {
    why: "We say 'make a snowman'. You make the figure of a person from snow, so English uses 'make', as for anything you create. You can also say 'build a snowman'.",
    not: {
      do: "We do not say 'do a snowman'. Creating something from snow is making it.",
      have: "'Have a snowman' would mean to own one. To create one, we say 'make'.",
      take: "We do not say 'take a snowman'. Use 'make a snowman'.",
    },
  },
  'Funny films always ___ me laugh.': {
    why: "We say 'make someone laugh'. 'Make' plus a person plus a verb means to cause it: 'Funny films make me laugh.' The verb after the person has no 'to'.",
    not: {
      do: "We do not say 'do me laugh'. To cause a feeling or an action, we use 'make'.",
      have: "'Have me laugh' is not natural. Use 'make me laugh'.",
      take: "We do not say 'take me laugh'. Use 'make me laugh'.",
    },
    more: "The same pattern: 'Onions make me cry.' 'Sad songs make her feel low.'",
    tip: "Do not add 'to' after the person: say 'make me laugh', not 'make me to laugh'.",
  },
  'I ___ the ironing on Sundays.': {
    why: "We say 'do the ironing'. Ironing is a job in the home: you make clothes smooth with a hot iron. English uses 'do' with 'the' and many jobs in the home.",
    not: {
      make: "We do not say 'make the ironing'. A job you complete in the home takes 'do'.",
      have: "We do not say 'have the ironing'. Use 'do the ironing'.",
      take: "We do not say 'take the ironing'. Use 'do the ironing'.",
    },
    more: "Other jobs that take 'do the': do the hoovering, do the windows.",
  },
  'My sisters ___ judo after school.': {
    why: "We say 'do judo'. English uses 'do' with judo and the other martial arts, and with some other activities, such as gymnastics. Example: 'They do judo on Fridays.'",
    not: {
      play: "'Play' goes with games and ball sports, such as tennis. Judo is a martial art, so we say 'do judo'.",
      make: "We do not say 'make judo'. Use 'do judo'.",
      go: "'Go judo' is not English. Judo takes 'do': 'They do judo.'",
    },
    more: "Gymnastics and athletics take 'do' as well, like judo.",
  },
  'Please ___ exercise 4 on page 20.': {
    why: "We say 'do an exercise'. Here an exercise is a task in a book, and you complete it, so English uses 'do'. Example: 'Do exercises 1 and 2 at home.'",
    not: {
      make: "We do not say 'make an exercise' for completing one. Use 'do'.",
      have: "'Have exercise 4' is not natural. You do it.",
      take: "We do not say 'take exercise 4'. Use 'do exercise 4'.",
    },
    more: "'Exercise' also means using your body to keep fit.",
  },
  'I can’t ___ this puzzle. It is too hard.': {
    why: "We say 'do a puzzle'. You try to finish it or find the answer, so English uses 'do'. Example: 'We did a puzzle on the train.'",
    not: {
      make: "'Make a puzzle' would mean to create one. Here you try to finish one, so we say 'do'.",
      have: "'Have this puzzle' would mean to own it. To try to finish it, we say 'do'.",
      take: "We do not say 'take a puzzle'. Use 'do a puzzle'.",
    },
    more: "You can also 'solve' a puzzle when you find the answer.",
  },
  'I need to ___ my hair before the party.': {
    why: "We say 'do your hair'. It means you brush it and make it look nice. Example: 'I need ten minutes to do my hair.' This is common in British English.",
    not: {
      make: "We do not say 'make my hair'. To brush and style it, we say 'do my hair'.",
      have: "'Have my hair' is not complete. We say 'have my hair cut' when someone else cuts it.",
      take: "We do not say 'take my hair'. Use 'do my hair'.",
    },
    more: "'Do' works with other parts of you too: do your make-up, do your nails.",
  },
  'Can you ___ the gardening this weekend?': {
    why: "We say 'do the gardening'. It means you look after the plants and the grass in a garden. Jobs like this take 'do the'.",
    not: {
      make: "We do not say 'make the gardening'. A job you complete takes 'do'.",
      have: "We do not say 'have the gardening'. Use 'do the gardening'.",
      take: "We do not say 'take the gardening'. Use 'do the gardening'.",
    },
    more: 'A person who does the gardening as a job is a gardener.',
  },
  'Did you ___ well in the test?': {
    why: "We say 'do well'. It means to be successful and get a good result. Example: 'She did well in her exams.'",
    not: {
      make: "We do not say 'make well'. To talk about a good result, we say 'do well'.",
      have: "We do not say 'have well'. Use 'do well'.",
      take: "We do not say 'take well' for a test. Use 'do well'.",
    },
    more: "'How did you do?' asks about a result: 'How did you do in the test?'",
  },
  'I ___ a lot of sport to stay fit.': {
    why: "We say 'do sport'. 'Sport' is a general word for all sports, and British English often uses 'do' with it. Example: 'Do you do any sport?'",
    not: {
      make: "We do not say 'make sport'. This is a common mistake from languages that use one verb for 'make' and 'do'.",
      have: "We say 'have sport' only for a timetable: 'We have sport on Fridays.' For taking part, we say 'do sport'.",
      take: "We do not say 'take sport'. Use 'do sport'.",
    },
    more: "You can also 'play sport' in British English. 'Sport' has no plural in this use.",
  },
  'We ___ fun at the beach.': {
    why: "We say 'have fun'. It means you enjoy yourself. Example: 'Have fun on your trip.' There is no 'a' before 'fun'.",
    not: {
      made: "'Made fun' is part of 'make fun of', which means to laugh at someone unkindly. It is a different phrase.",
      did: "We do not say 'did fun'. Use 'had fun'.",
      took: "We do not say 'took fun'. Use 'had fun'.",
    },
    more: "'Fun' is a noun here, so we say 'great fun' or 'a lot of fun', not 'a fun'.",
  },
  'I ___ a strange dream last night.': {
    why: "We say 'have a dream'. A dream is what you see in your sleep, and English uses 'have' for it. Example: 'I had a funny dream about my dog.'",
    not: {
      made: "We do not say 'made a dream'. In English, dreams come to you, so you have them.",
      did: "We do not say 'did a dream'. Use 'had a dream'.",
      took: "We do not say 'took a dream'. Use 'had a dream'.",
    },
    more: "Some languages say 'make a dream' or 'see a dream'. English says 'have a dream'.",
  },
  'She ___ a headache, so she lay down.': {
    why: "We say 'have a headache'. It means you have a pain in your head. English uses 'have' for many pains and illnesses. Example: 'I have a headache.'",
    not: {
      made: "We do not say 'made a headache'. A pain is something you have.",
      did: "We do not say 'did a headache'. Use 'had a headache'.",
      took: "We do not say 'took a headache'. You take something for a headache, such as a tablet.",
    },
    more: "We also say 'get a headache' when it starts: 'Loud music gives me a headache.'",
  },
  'Did you ___ a good weekend?': {
    why: "We say 'have a good weekend'. It means you enjoy it. People say it on Friday: 'Have a good weekend.' On Monday: 'Did you have a good weekend?'",
    not: {
      make: "We do not say 'make a good weekend'. Use 'have'.",
      do: "We do not say 'do a good weekend'. Use 'have'.",
      take: "'Take a weekend off' means not to work. 'Take a good weekend' is not English.",
    },
    more: 'The same pattern works for other times: have a good day, have a good evening.',
  },
  'Let’s ___ a picnic in the park.': {
    why: "We say 'have a picnic'. It means you eat a meal outside, often in a park or on a beach. Example: 'We had a picnic by the river.'",
    not: {
      make: "We do not say 'make a picnic'. This is a common mistake. Use 'have a picnic'.",
      go: "We do not say 'go a picnic'. We can 'go for a picnic' or 'go on a picnic', with 'for' or 'on'. With nothing between, we say 'have a picnic'.",
      spend:
        "We spend time, such as a day or an afternoon, but we do not 'spend a picnic'. Use 'have a picnic'.",
    },
    more: 'Picnic food is often sandwiches and fruit, carried in a basket or a bag.',
  },
  'Our cat ___ four kittens last night.': {
    why: "We say 'have kittens'. It means the kittens are born: the mother has them. Example: 'The dog had six puppies.'",
    not: {
      made: "We do not say 'made kittens'. When young animals are born, the mother has them.",
      did: "We do not say 'did kittens'. Use 'had kittens'.",
      took: "We do not say 'took kittens' for birth. 'Took the kittens' would mean to carry them.",
    },
    more: 'A young cat is a kitten, and a young dog is a puppy.',
  },
  'I ___ a cold, so I am staying in bed.': {
    why: "We say 'have a cold'. It means you are ill now, with a runny nose and a sore throat. English uses 'have' for an illness you have now.",
    not: {
      catch:
        "'Catch' is for the moment you get the illness: 'I caught a cold last week.' For being ill now, we say 'have'.",
      make: "We do not say 'make a cold'. Use 'have a cold'.",
      take: "We do not say 'take a cold'. Use 'have a cold'.",
    },
    more: 'The same pattern: have a sore throat, have a cough.',
  },
  'You ___ a lovely smile.': {
    why: "We say 'have a smile' for the kind of smile a person has. 'You have a lovely smile' means you smile in a nice way.",
    not: {
      make: "We do not say 'make a lovely smile'. To describe a smile, we say 'have'.",
      do: "We do not say 'do a lovely smile'. Use 'have'.",
      take: "We do not say 'take a lovely smile'. Use 'have'.",
    },
    more: "For the action, use the verb: 'She smiled at me.'",
  },
  'Can I ___ a go on your bike?': {
    why: "We say 'have a go'. It means to try something. Example: 'Can I have a go?' It is common in British English.",
    not: {
      make: "We do not say 'make a go' here. Use 'have a go'.",
      do: "We do not say 'do a go'. Use 'have a go'.",
      take: "We do not say 'take a go'. Use 'have a go'.",
    },
    more: "'Have a go at' can mean to try a task: 'Have a go at question 3.'",
  },
  'We ___ a good laugh at the funny film.': {
    why: "We say 'have a laugh'. It means you laugh and enjoy yourselves together. Example: 'We had a good laugh at his jokes.'",
    not: {
      made: "We do not say 'made a good laugh'. Use 'had a laugh'.",
      did: "We do not say 'did a good laugh'. Use 'had a laugh'.",
      took: "We do not say 'took a good laugh'. Use 'had a laugh'.",
    },
    more: "'Have a laugh' is informal and very British. 'Laugh' can also be a verb: 'We laughed a lot.'",
  },
  'I ___ a good idea. Why don’t we paint the fence?': {
    why: "We say 'have an idea'. An idea comes into your head, and you have it. Example: 'I have an idea: let’s go to the beach.'",
    not: {
      make: "We do not say 'make an idea'. Use 'have an idea'.",
      do: "We do not say 'do an idea'. Use 'have an idea'.",
      take: "We do not say 'take an idea'. Use 'have an idea'.",
    },
    more: "You can also 'get an idea' or 'come up with an idea'.",
  },
  'Can you ___ the dog for a walk?': {
    why: "We say 'take the dog for a walk'. 'Take' means you go with the dog and lead it. Example: 'I take my dog for a walk after school.'",
    not: {
      make: "We do not say 'make the dog for a walk'. Use 'take'.",
      do: "We do not say 'do the dog for a walk'. Use 'take'.",
      have: "'Have the dog' means to own it or look after it. To go out with it, we say 'take the dog for a walk'.",
    },
    more: "You can also say 'walk the dog': 'Can you walk the dog?'",
  },
  'It will ___ ten minutes to walk to the shop.': {
    why: "We say 'it takes ten minutes'. 'Take' is used for the time that something needs. Example: 'It takes an hour to get to London.'",
    not: {
      make: "We do not say 'it will make ten minutes'. For time that something needs, we say 'take'.",
      do: "We do not say 'it will do ten minutes'. Use 'take'.",
      have: "We do not say 'it will have ten minutes'. Use 'take'.",
    },
    more: "To find out, you can say: 'How long does it take?'",
  },
  'I ___ the lift to the fifth floor.': {
    why: "We say 'take the lift'. 'Take' is used for ways of travelling: the lift, the stairs, a bus. 'Lift' is the British word; American English says 'elevator'.",
    not: {
      made: "We do not say 'made the lift'. Use 'took the lift'.",
      did: "We do not say 'did the lift'. Use 'took'.",
      had: "We do not say 'had the lift' for going up in it. Use 'took'.",
    },
  },
  'You can ___ your time. There is no rush.': {
    why: "We say 'take your time'. It means you do not need to hurry. Example: 'Take your time and read the question carefully.'",
    not: {
      make: "We do not say 'make your time'. Use 'take your time'.",
      do: "We do not say 'do your time' here. Use 'take your time'.",
      have: "We do not say 'have your time'. Use 'take your time'.",
    },
    tip: 'In an exam, take your time to read each question before you answer.',
  },
  'Let’s ___ a selfie by the lake.': {
    why: "We say 'take a selfie'. A selfie is a picture of yourself, and it goes with 'take', as every picture from a camera does. Example: 'She took a selfie with her friends.'",
    not: {
      make: "We do not say 'make a selfie'. Some languages use 'make' here, but English says 'take'.",
      do: "'Do a selfie' is only very informal. The usual phrase is 'take a selfie'.",
      give: "We do not say 'give a selfie'. Use 'take'.",
    },
  },
  'Can you ___ me the time, please?': {
    why: "We say 'tell someone the time'. 'Tell' is used when a person comes next: 'Can you tell me the time?' It is a polite way to ask what time it is.",
    not: {
      say: "We do not say 'say me the time'. 'Say' does not take a person straight after it.",
      speak: "We do not say 'speak me the time'. Use 'tell'.",
      talk: "We do not say 'talk me the time'. Use 'tell'.",
    },
    more: "Children learn to 'tell the time' when they can read a clock.",
  },
  'Can you ___ me your name?': {
    why: "We say 'tell someone your name'. 'Tell' is followed by the person, then the thing you give them in words: tell me your name, tell us your address.",
    not: {
      say: "'Say me your name' is a common mistake. 'Say' does not take a person straight after it.",
      speak: "We do not say 'speak me your name'. Use 'tell'.",
      talk: "We do not say 'talk me your name'. Use 'tell'.",
    },
    more: "You can also ask, 'What is your name?'",
  },
  'Please ___ sorry to your sister.': {
    why: "We say 'say sorry'. With words that you speak, English uses 'say': 'He said sorry for being late.'",
    not: {
      tell: "We do not say 'tell sorry'. 'Tell' needs a person or a story after it. Use 'say sorry'.",
      speak: "We do not say 'speak sorry'. Use 'say'.",
      talk: "We do not say 'talk sorry'. Use 'say'.",
    },
    more: "After 'say sorry', use 'to' for the person: 'say sorry to your sister'.",
  },
  'I have to ___ goodbye now.': {
    why: "We say 'say goodbye'. It means you speak the word 'goodbye' when you leave. Example: 'We said goodbye at the gate.'",
    not: {
      tell: "We do not say 'tell goodbye'. Use 'say goodbye'.",
      speak: "We do not say 'speak goodbye'. Use 'say'.",
      talk: "We do not say 'talk goodbye'. Use 'say'.",
    },
    more: "Use 'to' for the person: 'Say goodbye to your friends.'",
  },
  'Can you ___ English?': {
    why: "We say 'speak English'. With languages, English uses 'speak': speak French, speak Arabic, speak two languages.",
    not: {
      talk: "'Talk' is for having a conversation. To say which languages a person knows, English uses 'speak': 'She speaks three languages.'",
      say: "We do not say 'say English'. Use 'speak'.",
      tell: "We do not say 'tell English'. Use 'speak'.",
    },
  },
  'Grandma, can you ___ me a story?': {
    why: "We say 'tell a story'. It means you give someone a story in words. Example: 'Dad tells us a story every night.'",
    not: {
      say: "We do not say 'say me a story'. Use 'tell'.",
      speak: "We do not say 'speak me a story'. Use 'tell'.",
      talk: "We do not say 'talk me a story'. Use 'tell'.",
    },
    more: 'A person who tells stories well is a good storyteller.',
  },
  'Please ___ hello to your mum for me.': {
    why: "We say 'say hello'. It means you greet someone, or pass on a friendly greeting. 'Say hello to your mum for me' means 'Send her my best wishes.'",
    not: {
      tell: "We do not say 'tell hello'. Use 'say hello'.",
      speak: "We do not say 'speak hello'. Use 'say'.",
      talk: "We do not say 'talk hello'. Use 'say'.",
    },
  },
  'Let’s ___ a song together.': {
    why: "We say 'sing a song'. You use your voice to make music. Example: 'We sang a song at the end of term.'",
    not: {
      say: "We do not say 'say a song'. You say words, but you sing a song.",
      tell: "We do not say 'tell a song'. Use 'sing'.",
      speak: "We do not say 'speak a song'. Use 'sing'.",
    },
    more: "'Sing' is irregular: sing, sang, sung.",
  },
  'We ___ football in the park.': {
    why: "We say 'play football'. With games and sports played with a ball, English uses 'play'. Example: 'They play tennis on Fridays.'",
    not: {
      do: "We do not say 'do football'. Ball games take 'play'.",
      make: "We do not say 'make football'. Use 'play'.",
      go: "We do not say 'go football'. You can go to a football ground, but you play football.",
    },
  },
  'I ___ swimming every Saturday.': {
    why: "We say 'go swimming'. With many activities that end in -ing, English uses 'go': go fishing, go skiing, go riding.",
    not: {
      play: "We do not say 'play swimming'. 'Play' goes with games and ball sports. Swimming is an activity that ends in -ing, so it takes 'go'.",
      make: "We do not say 'make swimming'. Use 'go swimming'.",
      take: "We do not say 'take swimming'. Use 'go swimming'.",
    },
    more: "You can also say 'I swim every Saturday.'",
  },
  'Can you ___ the piano?': {
    why: "We say 'play the piano'. With musical instruments, English uses 'play', and usually 'the': play the guitar, play the violin.",
    not: {
      go: "'Go' goes with activities ending in -ing, like 'go swimming'. We do not say 'go the piano'.",
      make: "We do not say 'make the piano'. Use 'play'.",
      do: "We do not say 'do the piano'. Use 'play'.",
    },
  },
  'Let’s ___ a game of cards.': {
    why: "We say 'play a game'. Example: 'We played a game of draughts after dinner.'",
    not: {
      make: "'Make a game' would mean to invent one. To take part in it, we say 'play'.",
      do: "We do not say 'do a game'. Use 'play a game'.",
      go: "We do not say 'go a game'. Use 'play'.",
    },
    more: "British English also says 'have a game': 'Let's have a game of cards.'",
  },
  'Can your sister ___ a car yet?': {
    why: "We say 'drive a car'. You sit inside and control it. Example: 'My dad drives a red car.'",
    not: {
      ride: 'You ride something you sit on top of. A car is something you drive.',
      conduct: "'Conduct a car' is a mistake from French or Spanish. In English you drive a car.",
      lead: "We do not say 'lead a car'. Use 'drive'.",
    },
  },
  'I ___ my bike to school.': {
    why: "We say 'ride a bike'. You sit on top of it and make it move. Example: 'She rides her bike to the park.'",
    not: {
      drive: 'You drive something you sit inside. A bike is something you ride.',
      go: "'Go my bike' is not English. You can say 'go by bike', but with 'my bike' we say 'ride'.",
      conduct: "'Conduct a bike' is not English. Use 'ride'.",
    },
    more: "'Ride' is irregular: ride, rode, ridden.",
  },
  'We ___ shopping on Saturday.': {
    why: "We say 'go shopping'. It means you visit the shops, often for fun. Example: 'Let's go shopping for shoes.'",
    not: {
      do: "'Do the shopping', with 'the', means the job of buying food. For a trip to the shops, we say 'go shopping'.",
      make: "We do not say 'make shopping'. Use 'go shopping'.",
      take: "We do not say 'take shopping'. Use 'go shopping'.",
    },
  },
  'I ___ to bed at ten o’clock.': {
    why: "We say 'go to bed'. It means you lie down in bed to sleep for the night. Example: 'Children should go to bed early.'",
    not: {
      make: "We do not say 'make to bed'. Use 'go to bed'.",
      do: "We do not say 'do to bed'. Use 'go'.",
      take: "We do not say 'take to bed' here. Use 'go to bed'.",
    },
    more: "There is no 'the' in 'go to bed'.",
  },
  'I ___ television every evening.': {
    why: "We say 'watch television'. 'Watch' means to look at something that moves or changes for a time. Example: 'I watched a programme about sharks.'",
    not: {
      see: "We do not say 'see television'. Use 'watch'.",
      look: "'Look television' is not English. 'Look' needs 'at', and for television we say 'watch'.",
      read: "We do not read television. Use 'watch'.",
    },
    more: "British people often say 'watch TV' or 'watch telly'.",
  },
  'Please ___ at the board.': {
    why: "We say 'look at'. 'Look' means to turn your eyes towards something, and it needs 'at' before the thing. Example: 'Look at this picture.'",
    not: {
      see: "We do not say 'see at the board'. 'See' has no 'at'.",
      watch:
        "We do not say 'watch at the board'. 'Watch' has no 'at', and it is for things that move.",
      view: "We do not say 'view at the board'. Use 'look at'.",
    },
  },
  'Did you ___ that noise outside?': {
    why: "We say 'hear a noise'. 'Hear' is for sounds that come to your ears, even when you do not try. Example: 'I heard a car outside.'",
    not: {
      listen:
        "'Listen' means to try to hear, and it needs 'to': 'listen to music'. For a noise you notice, we say 'hear'.",
      sound: "We do not say 'sound a noise' here. Use 'hear'.",
      feel: "We feel things we touch, not sounds. Use 'hear'.",
    },
  },
  'Did you ___ the match?': {
    why: "We say 'win a match'. You win a match when you score more than the other team. Example: 'Our team won the final.'",
    not: {
      gain: "We do not say 'gain the match'. Use 'win'.",
      earn: "We do not say 'earn the match'. Use 'win'.",
      beat: "You beat the other team, but you win the match. 'Beat' needs a person or a team after it.",
    },
  },
  'Don’t ___ your keys again.': {
    why: "We say 'lose your keys'. It means you cannot find them. Example: 'I lost my phone at school.'",
    not: {
      miss: "We do not say 'miss your keys' for not finding them. Many languages use one verb, but in English you lose a thing.",
      fail: "We do not say 'fail your keys'. Use 'lose'.",
      waste: "We waste time or money, not keys. Use 'lose'.",
    },
    more: "'Lose' is irregular: lose, lost, lost. Do not mix it up with 'loose', which means not tight.",
  },
  'Hurry up or we will ___ the start of the film.': {
    why: "We say 'miss the start'. 'Miss' means you are not there at the right time, so you do not see it. Example: 'We missed the first goal.'",
    not: {
      lose: "We do not say 'lose the start'. Many languages use one verb for both, but in English you miss an event and lose a thing.",
      fail: "We do not say 'fail the start'. Use 'miss'.",
      drop: "We do not say 'drop the start'. Use 'miss'.",
    },
  },
  'Can I ___ by card?': {
    why: "We say 'pay by card' or 'pay in cash'. 'Pay' means to give money for something you buy.",
    not: {
      make: "We do not say 'make by card'. Use 'pay'.",
      do: "We do not say 'do by card'. Use 'pay'.",
      give: 'We give money, but we pay by card.',
    },
  },
  'Can you ___ me a hand with this box?': {
    why: "We say 'give someone a hand'. It means to help them. Example: 'Can you give me a hand with my bags?'",
    not: {
      make: "We do not say 'make me a hand'. Use 'give'.",
      do: "We do not say 'do me a hand'. Use 'give me a hand'.",
      take: "We do not say 'take me a hand'. Use 'give'.",
    },
    more: "People also say 'lend me a hand', with the same meaning.",
  },
  'Let’s ___ in touch after the holidays.': {
    why: "We say 'keep in touch'. It means you go on writing or calling after you are apart. Example: 'Let's keep in touch by email.'",
    not: {
      make: "We do not say 'make in touch'. Use 'keep in touch'.",
      do: "We do not say 'do in touch'. Use 'keep'.",
      take: "We do not say 'take in touch'. Use 'keep'.",
    },
    more: "To start talking to someone again, you 'get in touch'.",
  },
  'Please ___ quiet in the library.': {
    why: "We say 'keep quiet'. It means you stay silent. Example: 'Keep quiet: the baby is asleep.'",
    not: {
      make: "We do not say 'make quiet'. Use 'keep quiet'.",
      do: "We do not say 'do quiet'. Use 'keep quiet'.",
      take: "We do not say 'take quiet'. Use 'keep'.",
    },
    more: "People also say 'be quiet' and 'stay quiet'.",
  },
  'Can I ___ a question?': {
    why: "We say 'ask a question'. You ask a question to get an answer. Example: 'Can I ask you a question?'",
    not: {
      make: "'Make a question' is a common mistake from languages such as Spanish. In English you ask a question.",
      do: "We do not say 'do a question' here. You do question 3 in a test, but you ask a question to learn something.",
      say: "We do not say 'say a question'. Use 'ask'.",
    },
  },
  'Please ___ me your phone number.': {
    why: "We say 'give someone your number'. 'Give' means to pass it to them, here in words. Example: 'Can you give me your address?'",
    not: {
      make: "We do not say 'make me your number'. Use 'give'.",
      do: "We do not say 'do me your number'. Use 'give'.",
      take: "'Take' goes the other way: you take someone's number when they give it to you.",
    },
  },
  'Come here and ___ me a hug.': {
    why: "We say 'give someone a hug'. A hug is when you put your arms round someone. Example: 'Give your brother a hug.'",
    not: {
      make: "We do not say 'make me a hug'. Use 'give'.",
      do: "We do not say 'do me a hug'. Use 'give'.",
      take: "We do not say 'take me a hug'. Use 'give'.",
    },
    more: 'The same pattern: give someone a kiss, give someone a wave.',
  },
  'Can you ___ me a lift to the station?': {
    why: "We say 'give someone a lift'. In British English it means to take them somewhere in your car. Example: 'Can you give me a lift home?'",
    not: {
      make: "We do not say 'make me a lift'. Use 'give'.",
      do: "We do not say 'do me a lift'. Use 'give'.",
      take: "'Take me to the station' is right, but with 'a lift' we say 'give'.",
    },
    more: "'Lift' has another meaning in British English: the machine that carries you up and down a building.",
  },
  'Please ___ me know when you arrive.': {
    why: "We say 'let someone know'. It means to tell them. Example: 'Let me know if you need help.'",
    not: {
      make: "We do not say 'make me know'. Use 'let me know'.",
      do: "We do not say 'do me know'. Use 'let'.",
      give: "We do not say 'give me know'. Use 'let me know'.",
    },
    more: "After 'let', the verb has no 'to': 'let me know', not 'let me to know'.",
  },
  'I’ll throw the ball to you. Try to ___ it.': {
    why: "We say 'catch a ball'. It means you take hold of it as it comes through the air. Example: 'Catch it with both hands.'",
    not: {
      take: "'Take' is for holding something given to you. A ball flying through the air is something you catch.",
      keep: "'Keep' means to have it and not give it back. Here you must catch it first.",
      win: "We win a game, not a ball. Use 'catch'.",
    },
  },
  'Hurry up and ___ dressed. We are late.': {
    why: "We say 'get dressed'. It means to put your clothes on. Example: 'I get dressed after breakfast.'",
    not: {
      make: "We do not say 'make dressed'. Use 'get dressed'.",
      do: "We do not say 'do dressed'. Use 'get'.",
      take: "We do not say 'take dressed'. Use 'get dressed'.",
    },
    more: "'Get' often means a change: get dressed, get ready, get older.",
  },
  'Stay close, or you will ___ lost in the big city.': {
    why: "We say 'get lost'. It means you do not know where you are. Example: 'Take a map, so you don't get lost.'",
    not: {
      make: "We do not say 'make lost'. Use 'get lost'.",
      do: "We do not say 'do lost'. Use 'get'.",
      take: "We do not say 'take lost'. Use 'get lost'.",
    },
    more: "Be careful: 'Get lost', said on its own, is a rude way to tell someone to go away.",
  },
  'We ___ our summer holidays in Wales.': {
    why: "We say 'spend' for time as well as money: spend a week, spend the summer, spend your holidays somewhere.",
    not: {
      make: "We do not say 'make our holidays'. Use 'spend'.",
      do: "We do not say 'do our holidays'. Use 'spend'.",
      go: "We do not say 'go our holidays'. We go on holiday, with 'on', but the time we have there is something we spend.",
    },
  },
  'At least ___ hands.': {
    why: "We say 'shake hands'. You take someone's hand and move it up and down, to greet them or to agree. In Jane Eyre, after Jane saves his life, Rochester asks her, 'At least shake hands.'",
    not: {
      give: "We do not say 'give hands'. Use 'shake hands'.",
      make: "We do not say 'make hands'. Use 'shake'.",
      do: "We do not say 'do hands'. Use 'shake'.",
    },
    more: "'Shake' is irregular: shake, shook, shaken.",
  },
  'Please try not to ___ a mistake on the application form.': {
    why: "We say 'make a mistake'. A mistake is something that happens when you get something wrong, and English uses 'make' with it. Example: 'He made a mistake in his sum.'",
    not: {
      do: "We do not say 'do a mistake'. This is a very common learner error. Use 'make a mistake'.",
      have: "'Have' is not the verb that goes with 'mistake' when you get something wrong. We say 'make a mistake'.",
      take: "We do not say 'take a mistake'. 'Take' is used for photos, taxis and medicine. A mistake is something you make.",
    },
    more: "The same verb goes with the plural: 'She made three mistakes'. We also 'correct' a mistake and 'spot' a mistake.",
    tip: "In many languages one verb covers both 'make' and 'do', so learners say 'do a mistake'. Remember: make a mistake.",
  },
  'Could you ___ an effort to arrive on time tomorrow?': {
    why: "We say 'make an effort'. It means you try hard to do something. Example: 'She made an effort to be kind.' The noun 'effort' goes with 'make'.",
    not: {
      do: "We do not say 'do an effort'. Trying hard is making an effort.",
      have: "We do not say 'have an effort'. The phrase is 'make an effort'.",
      take: "We do not say 'take an effort'. Use 'make an effort' for trying hard.",
    },
    more: "'Make an effort' is followed by 'to' and a verb: 'make an effort to learn'. 'Try hard' means almost the same.",
    tip: "'Make an effort' is a polite way to ask someone to try: 'Please make an effort to arrive early.'",
  },
  "Let's sit down and ___ a plan for the trip.": {
    why: "We say 'make a plan'. You sit down to think about what to do and decide the steps, so you make the plan: you create it. Example: 'We made a plan for the summer.'",
    not: {
      do: "We do not say 'do a plan'. 'Do' is for tasks and jobs. A plan is something you create, so you make it.",
      have: "'Have a plan' means a plan already exists. Here they sit down to create one, so we say 'make a plan'.",
      take: "We do not say 'take a plan'. Use 'make a plan'.",
    },
    more: "Once you have made it, you have a plan: 'Don't worry, I have a plan.' The verb changes with the moment: make it first, then have it.",
    tip: "'Plans' in the plural is common too: 'We are making plans for the holidays.'",
  },
  'Phone the surgery and ___ an appointment for Monday.': {
    why: "We say 'make an appointment'. You phone the surgery to arrange a time to see the doctor, so you make the appointment. Example: 'I made an appointment for ten o'clock.'",
    not: {
      do: "We do not say 'do an appointment'. Arranging a time with a person is making an appointment.",
      have: "'Have an appointment' means one is already in your diary: 'I have an appointment at three.' Here you phone to arrange it, so we say 'make'.",
      take: "We do not say 'take an appointment' in British English. Use 'make an appointment'.",
    },
    more: "A surgery is the place where a doctor or a dentist sees people. 'Book an appointment' means the same as 'make an appointment'.",
    tip: "On the phone, say: 'I would like to make an appointment, please.'",
  },
  'Before I go to the shops, I sit down and ___ a list.': {
    why: "We say 'make a list'. You sit down and write the things you need, one under another, so you make the list. Example: 'She made a list of birthday presents.'",
    not: {
      do: "'Do a list' is only informal. Writing a list is making something new, so the usual phrase is 'make a list'.",
      have: "'Have a list' means you already own one. Here you sit down to write it, so we say 'make a list'.",
      take: "'Take a list to the shops' would mean to carry it there. To write one, we say 'make a list'.",
    },
    more: "You can also 'write a list'. A list of jobs is a 'to-do list'.",
    tip: 'Make a list of new words in your notebook after each lesson. It helps you learn them.',
  },
  'Phone the restaurant and ___ a reservation for eight o’clock.': {
    why: "We say 'make a reservation'. It means you book a table, a room or a seat before you go. You phone the restaurant to arrange it, so you make it. Example: 'We made a reservation for four people.'",
    not: {
      do: "We do not say 'do a reservation'. Booking a table is making a reservation.",
      have: "'Have a reservation' means it is already booked: 'We have a reservation for eight.' Here you phone to arrange it, so we say 'make'.",
      take: 'The restaurant takes your reservation when you phone. You, the customer, make it.',
    },
    more: "In British English 'make a booking' is common too. After you make it, you have a reservation.",
  },
  'Could you ___ me a favour and post this letter?': {
    why: "We say 'do me a favour'. A favour is a kind act for someone. Example: 'Could you do me a favour?' is a polite way to ask for help.",
    not: {
      make: "We do not say 'make me a favour'. In this fixed phrase the verb is 'do'.",
      have: "'Have a favour' is wrong here. We 'ask' for a favour or 'do' one.",
      take: "We do not say 'take me a favour'. Use 'do me a favour'.",
    },
    more: "Other phrases: 'ask a favour', 'owe someone a favour' and 'return a favour'. You do a favour for someone, and you ask someone for a favour.",
    tip: "Say what you need straight after the request: 'Could you do me a favour and post this letter?'",
  },
  'We must ___ some research before writing the report.': {
    why: "We say 'do research'. It means you look for information before you write or decide. Example: 'We did some research on the internet.' 'Research' is uncountable, so we say 'some research'.",
    not: {
      make: "We do not say 'make research'. This is a very common mistake. Use 'do research' or 'carry out research'.",
      have: "We do not say 'have research' for looking for information. We do research.",
      take: "We do not say 'take research'. Use 'do research'.",
    },
    more: "Do not add 'a' to 'research'. Say 'some research' or 'a piece of research'.",
    tip: "In project work, write 'I did some research on ...' to show how you found your information.",
  },
  'They had to ___ the laundry at the weekend.': {
    why: "We say 'do the laundry'. It means you wash and dry the clothes. Example: 'I do the laundry on Sundays.' 'Laundry' is the clothes that need washing.",
    not: {
      make: "We do not say 'make the laundry'. Washing clothes is a household job, so we say 'do'.",
      have: "We do not say 'have the laundry' for washing it. 'Have' is for meals and rests.",
      take: "'Take the laundry' needs a place, such as 'take the laundry upstairs'. For washing it, we say 'do the laundry'.",
    },
    more: "'Laundry' can also mean a business that washes clothes. The machine at home is the 'washing machine'.",
    tip: 'Group the jobs in your notebook: do the laundry, do the windows, do the hoovering.',
  },
  "Let's ___ a chat about the holiday plans later.": {
    why: "We say 'have a chat'. It means you talk in a friendly way. Example: 'We had a chat over coffee.' The noun 'chat' goes with 'have'.",
    not: {
      make: "We do not say 'make a chat'. Talking in a friendly way is something you have.",
      do: "We do not say 'do a chat'. Use 'have a chat'.",
      take: "We do not say 'take a chat'. Use 'have a chat'.",
    },
    more: "Other talking phrases with 'have': have a discussion, have a row. A chat is short and relaxed.",
    tip: "'Let’s have a chat' is a friendly way to suggest a talk, at school or at work.",
  },
  'He needs to ___ a word with his manager about the rota.': {
    why: "We say 'have a word with someone'. It means you talk to them for a short time, often about a problem. Example: 'I need to have a word with you.' This is a fixed phrase.",
    not: {
      make: "'Make a word' means to form a word from letters. For a short talk with a person, we say 'have a word'.",
      do: "We do not say 'do a word'. Use 'have a word with' someone.",
      take: "We do not say 'take a word'. Use 'have a word'.",
    },
    more: "'Can I have a word?' often means a short, serious talk. The phrase needs 'with' before the person: 'have a word with my manager'.",
    tip: "To ask to speak to someone: 'Could I have a word with you, please?'",
  },
  'We should ___ a meeting to discuss the budget.': {
    why: "We say 'have a meeting'. It means people come together to talk about something. Example: 'We have a meeting every Monday.' 'Hold a meeting' means the same.",
    not: {
      make: "We do not say 'make a meeting'. People have or 'hold' a meeting, and they can 'arrange' one.",
      do: "'Do a meeting' is only informal. The usual phrase is 'have a meeting' or 'hold a meeting'.",
      take: "We do not usually say 'take a meeting'. Use 'have a meeting'.",
    },
    more: "Other verbs that go with 'meeting': 'arrange a meeting', 'attend a meeting', 'cancel a meeting' and 'chair a meeting'.",
    tip: "In an email, write 'Can we have a meeting on Friday?' to ask for a time.",
  },
  'Could we ___ a conversation about this in private?': {
    why: "We say 'have a conversation'. It means you talk with someone. Example: 'We had a long conversation about school.' The noun 'conversation' goes with 'have'.",
    not: {
      make: "We do not say 'make a conversation'. There is a phrase 'make conversation' with no 'a', which means to talk politely to fill the silence.",
      do: "We do not say 'do a conversation'. Use 'have a conversation'.",
      take: "We do not say 'take a conversation'. Use 'have a conversation'.",
    },
    more: "'In private' means without other people near.",
    tip: 'Join the verb and noun in your notes: have a conversation, have a discussion.',
  },
  'They decided to ___ a risk and start a business.': {
    why: "We say 'take a risk'. It means you do something that might go wrong. Example: 'She took a risk and changed jobs.' 'Take a risk' is the fixed phrase.",
    not: {
      make: "We do not say 'make a risk'. You take a risk, which means you choose to try.",
      do: "We do not say 'do a risk'. Use 'take a risk'.",
      have: "'Have' does not fit here. A person who chooses to do something that might go wrong takes a risk.",
    },
    more: "People also say 'run a risk': 'You run the risk of being late.' 'Take a risk' means to choose to try, and 'run a risk' means that the danger exists.",
    tip: "Use 'risk' in the plural for more than one: 'take risks'.",
  },
  'Can you ___ a message if she rings while I’m out?': {
    why: "We say 'take a message'. It means you write down or remember what a caller says for someone else. Example: 'I’ll take a message.' The person who answers takes the message.",
    not: {
      make: "We do not say 'make a message' here. A caller leaves a message, and the other person takes it.",
      do: "We do not say 'do a message'. Use 'take a message'.",
      have: "We do not say 'have a message' for writing down what a caller says. 'Have a message for you' means you have something to tell someone.",
    },
    more: "The caller 'leaves' a message and the listener 'takes' it. People say 'Can I take a message?' on the phone.",
    tip: "On the phone, say 'Can I take a message?' when the person is not there.",
  },
  'Please make your ___ before you go to school.': {
    why: "We say 'make your bed'. It means to pull the covers straight and tidy after you sleep. Example: 'I make my bed every morning.'",
    not: {
      homework: 'We do homework; we do not make it.',
      ironing: 'We do the ironing; we do not make it.',
      shopping: 'We do the shopping, or go shopping. We do not make it.',
    },
    more: "'Make' is often for something we build or put in order, like a bed or a cake. 'Do' is for jobs and work, like homework and the ironing.",
  },
  'Can you do the ___ before the guests arrive?': {
    why: "We say 'do the vacuuming'. It means to clean the floor with a vacuum cleaner. Many jobs in the house take 'do the' and a word ending in -ing.",
    not: {
      mistake: 'We make a mistake; we do not do one.',
      noise: 'We make a noise; we do not do one.',
      mess: 'We make a mess, then clean it up. We do not do a mess.',
    },
    more: "Other jobs like this are 'do the dusting' and 'do the cleaning'.",
  },
  'Let’s have a ___ in the garden on Saturday.': {
    why: "We say 'have a barbecue'. A barbecue is a meal cooked outside over a fire, and we use 'have' for meals and events we enjoy.",
    not: {
      homework:
        "'Homework' cannot be counted, so it cannot follow 'a'. And homework is not something we hold in a garden.",
      mess: "We make a mess. 'Have a mess in the garden' is not natural.",
      noise: "We make a noise. 'Have a noise' is not natural.",
    },
    more: 'In summer, many British families have barbecues outside when the weather is good.',
  },
  'We have to catch the ___ at nine, so be quick.': {
    why: "We say 'catch the train'. 'Catch' means to get on a train or plane that leaves at a fixed time.",
    not: {
      car: 'We drive a car, or go by car. A car does not leave at nine for us to catch.',
      bike: 'We ride a bike. Nobody catches a bike.',
      van: 'We drive a van. A van is not public transport, so we do not catch it.',
    },
    more: "We can also say 'get the train' or 'take the train'.",
  },
  'You pay ___ for your flat every month.': {
    why: "We say 'pay rent'. Rent is the money you pay each month to live in a flat or house that someone else owns.",
    not: {
      cost: "'Cost' is how much something is, but we do not 'pay cost'. We say 'It costs £500.'",
      value: "'Value' is how much something is worth. We do not pay value.",
      worth: "'Worth' tells us how much money something could be sold for. We do not pay worth.",
    },
    more: 'The person who owns the flat is the landlord. The person who pays rent is the tenant.',
  },
  'Did you catch a ___ in the rain?': {
    why: "We say 'catch a cold'. An illness that passes from person to person, like a cold or flu, is something we catch.",
    not: {
      headache:
        'We have a headache; we do not catch one. A headache does not pass from person to person.',
      pain: 'We have or feel a pain; we do not catch one.',
      temperature: 'We have a temperature when we are ill. We do not catch one.',
    },
    more: "Once you have caught it, you have a cold: 'I have a bad cold.'",
  },
  'My grandad loves to tell ___ that make us laugh.': {
    why: "We say 'tell a joke', or 'tell jokes'. 'Tell' goes with words that carry a message, and a joke is one.",
    not: {
      sorry: 'We say sorry; we do not tell it.',
      hello: 'We say hello; we do not tell it.',
      thanks: 'We say thanks, or give thanks. We do not tell them.',
    },
    more: 'We tell a joke, and the people who hear it laugh.',
  },
  'Please don’t break the ___. You will be in trouble.': {
    why: "We say 'break the rules'. It means to do something that the rules say you must not do.",
    not: {
      truth: 'We tell the truth; we do not break it.',
      secret: 'We keep a secret, or tell it. We do not break a secret.',
      mistake: 'We make a mistake; we do not break one.',
    },
    more: "The opposite is 'follow the rules' or 'keep the rules'.",
  },
  'Can you ride a ___?': {
    why: "We say 'ride a horse'. We ride an animal, or a machine like a bike, that we sit on top of.",
    not: {
      car: 'We drive a car, or ride in one. We do not ride a car.',
      lorry: 'We drive a lorry. We do not ride one.',
      plane: 'We fly a plane, or travel by plane. We do not ride one.',
    },
    more: 'A person who rides a horse is a rider, and the sport is called riding.',
  },
  'My uncle drives a ___ for his job.': {
    why: "We say 'drive a lorry'. A lorry is a big vehicle that carries goods by road. A person who drives one is a lorry driver.",
    not: {
      plane: 'We fly a plane; we do not drive one. The person who flies it is a pilot.',
      bike: 'We ride a bike; we do not drive one.',
      ship: 'We sail or steer a ship; we do not drive one.',
    },
    more: 'We drive things we sit inside and steer with a wheel, like a car, a van or a lorry.',
  },
  'Hurry, or we will miss the ___.': {
    why: "We say 'miss the bus'. It means you arrive too late, and the bus leaves without you.",
    not: {
      keys: "We lose keys when we cannot find them. 'Miss the keys' is not natural.",
      wallet: 'We lose a wallet when we cannot find it. We do not miss it in this way.',
      glasses: 'We lose our glasses, or break them. We do not miss them.',
    },
    more: "The opposite is 'catch the bus'.",
  },
  'Don’t lose your ___ on the train.': {
    why: "We say 'lose your ticket'. To lose something is to put it down somewhere and then not be able to find it.",
    not: {
      bus: 'We miss a bus when we are too late. We do not lose it.',
      lesson: 'We miss a lesson when we are not there. We do not lose it.',
      flight: 'We miss a flight when we are too late for the plane. We do not lose it.',
    },
    more: "'Lose' is for things you cannot find. 'Miss' is for things you are too late for, or do not go to.",
  },
  'She won a ___ for her painting.': {
    why: "We say 'win a prize'. You win a prize when you are the best in a competition, or lucky in a draw.",
    not: {
      salary: 'We earn a salary from a job; we do not win one.',
      wage: 'We earn a wage for our work; we do not win one.',
      living: 'We earn a living; we do not win one.',
    },
    more: "'Earn' is for money you get from work: a salary or a wage.",
  },
  'He earns a good ___ as a nurse.': {
    why: "We say 'earn a salary'. A salary is the money you get for your job.",
    not: {
      prize: 'We win a prize; we do not earn one by doing a job.',
      match: 'We win or lose a match; we do not earn one.',
      race: 'We win or run a race; we do not earn one.',
    },
    more: 'A salary is often paid each month. A wage is often paid each week, or by the hour.',
  },
  'I keep a ___ and write in it every night.': {
    why: "We say 'keep a diary'. It means to write about your day in a book, often every day.",
    not: {
      story: 'We write or tell a story; we do not keep one to write in.',
      novel: 'We write or read a novel. We do not keep one to write in each night.',
      poem: 'We write a poem; we do not keep one to write in.',
    },
    more: "Here 'keep' means to do something regularly. We also say 'keep a record' of things.",
  },
  'You have been working all morning. Why not take a ___?': {
    why: "We say 'take a break'. A break is a short time when you stop work to rest.",
    not: {
      mistake: 'We make a mistake; we do not take one.',
      noise: 'We make a noise; we do not take one.',
      mess: 'We make a mess; we do not take one.',
    },
    more: "In British English we can also 'have a break'. At school, the time between lessons is often just called 'break'.",
  },
  'Take an umbrella. There is ___ rain outside.': {
    why: "We say 'heavy rain'. 'Heavy' tells us that a lot of rain is falling.",
    not: {
      strong: "We say 'a strong wind', but not 'strong rain'. Rain is heavy.",
      big: "We do not say 'big rain'. Use 'heavy rain'.",
      thick: "We say 'thick fog', but not 'thick rain'.",
    },
    more: "The opposite is 'light rain'. We also say 'heavy snow' and 'heavy traffic'.",
  },
  'This coffee is too ___. Can I have some more milk in it?': {
    why: "We say 'strong coffee'. 'Strong' means it has a lot of taste, and more milk will make it weaker.",
    not: {
      heavy: "We do not say 'heavy coffee'. 'Heavy' is for weight, rain and traffic.",
      hard: "We do not say 'hard coffee'. Use 'strong'.",
      powerful: "'Powerful' is for engines and machines. We do not say 'powerful coffee'.",
    },
    more: "We also say 'strong tea'. The opposite is 'weak': 'This tea is too weak.'",
  },
  'Sara is my ___ friend. We share everything.': {
    why: "We say 'a close friend'. It means a friend you know very well and trust.",
    not: {
      near: "'Near' is about distance. We do not say 'a near friend'.",
      next: "'Next' means the one after. 'My next friend' is not natural.",
      deep: "We say 'deep water', but not 'a deep friend'.",
    },
    more: "We also say 'close family': the people in your family you see most.",
  },
  'There was a ___ noise in the night, and I woke up.': {
    why: "We say 'a loud noise'. 'Loud' means that it makes a lot of sound.",
    not: {
      strong: "We say 'a strong smell', but not 'a strong noise'.",
      high: "We say 'a high note' in music, but not 'a high noise' for a sound that wakes you.",
      hard: "We do not say 'a hard noise'.",
    },
    more: "The opposite of 'loud' is 'quiet': 'a quiet voice'.",
  },
  'My mum never stops working. She is a ___ worker.': {
    why: "We say 'a hard worker'. It means someone who works a lot and always tries their best.",
    not: {
      heavy: "We do not say 'a heavy worker'. 'Heavy' is for weight, rain and traffic.",
      big: "We do not say 'a big worker'.",
      high: "We do not say 'a high worker'.",
    },
    more: "We can also say 'She works hard'. Here 'hard' is an adverb.",
  },
  'The baby is ___ asleep in her cot.': {
    why: "We say 'fast asleep'. It means sleeping very deeply. 'Sound asleep' means the same.",
    not: {
      quick: "We do not say 'quick asleep'. 'Fast' here does not mean quick.",
      heavy: "We call a person 'a heavy sleeper', but we do not say 'heavy asleep'.",
      strong: "We do not say 'strong asleep'.",
    },
    more: "'Fast' here has an old meaning, 'firmly'. It has nothing to do with speed.",
  },
  'It’s midnight, but I am ___ awake.': {
    why: "We say 'wide awake'. It means fully awake, with no wish to sleep at all.",
    not: {
      big: "We do not say 'big awake'.",
      full: "We say 'fully awake', but not 'full awake'.",
      high: "We do not say 'high awake'.",
    },
    more: "If you are nearly sleeping, you are 'half asleep'.",
  },
  'Please ___ attention to the instructions.': {
    why: "We say 'pay attention'. It means to listen, watch or think carefully.",
    not: {
      make: "We do not say 'make attention'. Use 'pay'.",
      take: 'We take notice of something, but we pay attention to it.',
      do: "We do not say 'do attention'. Use 'pay'.",
    },
    more: "Teachers often say 'Pay attention, please.' Some languages use 'give' or 'make' here, but English uses 'pay'.",
  },
  'My aunt is going to ___ married in June.': {
    why: "We say 'get married'. 'Get' here means 'become': she will become a married person.",
    not: {
      make: "We do not say 'make married'. Use 'get'.",
      do: "We do not say 'do married'. Use 'get'.",
      take: "We do not say 'take married'. Use 'get'.",
    },
    more: "'Get' with an adjective often means 'become': get tired, get older. We can also say 'She will marry Tom.'",
  },
  'Can you ___ me some advice about my essay?': {
    why: "We say 'give someone advice'. Advice is what you think another person should do.",
    not: {
      make: 'We do not make advice. We give it.',
      do: 'We do not do advice. We give it.',
      take: "We take advice when someone gives it to us. We do not 'take me' advice.",
    },
    more: "'Advice' cannot be counted. We say 'some advice' or 'a piece of advice', not 'an advice'.",
  },
  'Can you ___ an eye on my bag for a minute?': {
    why: "We say 'keep an eye on' something. It means to watch it so that it stays safe.",
    not: {
      have: "We do not say 'have an eye on my bag'. Use 'keep'.",
      take: "We do not say 'take an eye on'. Use 'keep'.",
      hold: "We do not say 'hold an eye on'. Use 'keep'.",
    },
    more: "This is a fixed phrase. 'Keep an eye on the soup' means watch it so that it does not burn.",
  },
  'I can’t ___ the difference between these two colours.': {
    why: "We say 'tell the difference'. Here 'tell' means to see or know that two things are not the same.",
    not: {
      say: "We do not say 'say the difference'. Use 'tell'.",
      speak: "We do not say 'speak the difference'. Use 'tell'.",
      do: "We do not say 'do the difference'. Use 'tell'.",
    },
    more: "'Tell' can mean 'know' or 'see': 'I can tell you are tired.' We also say 'tell the twins apart'.",
  },
  'Our team wants to ___ the school record for the relay race.': {
    why: "We say 'break a record'. It means to do better than anyone has done before.",
    not: {
      do: "We do not say 'do a record'. Use 'break'.",
      make: "We do not say 'make the school record'. Use 'break'.",
      win: 'We win a race, but we do not win a record. We break it.',
    },
    more: "The first person to get a new best 'sets' the record. Anyone who does better later 'breaks' it.",
  },
  'Please ___ me a call this evening.': {
    why: "We say 'give someone a call'. It means to phone them.",
    not: {
      make: "We make a call, but with a person straight after the verb we say 'give me a call'.",
      do: "We do not say 'do me a call'.",
      take: "We do not say 'take me a call'.",
    },
    more: "'Give me a ring' means the same in British English.",
  },
  'Can you ___ your breath for a minute under the water?': {
    why: "We say 'hold your breath'. It means to stop breathing for a short time.",
    not: {
      keep: "We do not say 'keep your breath'. Use 'hold'.",
      take: 'We take a breath when we breathe in. We hold it when we stop breathing.',
      make: "We do not say 'make your breath'.",
    },
    more: "We also hold our breath when we wait for news: 'We held our breath as the scores came in.'",
  },
  'I want to ___ some weight before the summer.': {
    why: "We say 'lose weight'. It means to become lighter.",
    not: {
      miss: "We do not say 'miss weight'. Use 'lose'.",
      leave: "We do not say 'leave weight'. Use 'lose'.",
      fail: "We do not say 'fail weight'. Use 'lose'.",
    },
    more: "The opposite is 'put on weight' or 'gain weight'.",
  },
  'Grandad likes to ___ the crossword in his newspaper.': {
    why: "We say 'do the crossword'. A crossword is a word game in squares, and English uses 'do' with it.",
    not: {
      make: 'We make a crossword only if we write one for other people. Grandad fills it in, so he does it.',
      have: "We do not say 'have the crossword' for filling it in.",
      take: "We do not say 'take the crossword'.",
    },
    more: "We also say 'do a quiz' and 'do a sudoku'.",
  },
  'A walk in the fresh air will ___ you good.': {
    why: "We say 'do you good'. It means to make you healthier or happier.",
    not: {
      make: "We do not say 'make you good'. Use 'do'.",
      have: "We do not say 'have you good'.",
      take: "We do not say 'take you good'.",
    },
    more: "We use this after something healthy: 'A good night's sleep will do you good.'",
  },
  'Can you ___ chess?': {
    why: "We say 'play chess'. 'Play' goes with chess, cards and sports with a ball, and with music on an instrument.",
    not: {
      do: "We do not say 'do chess'. Chess is a game, and we play games.",
      make: "We do not say 'make chess'. Use 'play'.",
      go: "'Go' goes with activities ending in -ing, like 'go swimming'. We do not say 'go chess'.",
    },
    more: 'A person who plays chess well is a good chess player.',
  },
  'Put your coat on, or you will ___ wet.': {
    why: "We say 'get wet'. 'Get' here means 'become': if rain falls on you, you become wet.",
    not: {
      make: "'Make' needs a thing after it: 'Don't make the floor wet.' About yourself, we say 'get wet'.",
      do: "We do not say 'do wet'. Use 'get wet'.",
      take: "We do not say 'take wet'. Use 'get wet'.",
    },
    more: "If you are very wet, you can say you got 'soaked'.",
  },
  'Shall we ___ for a walk after lunch?': {
    why: "We say 'go for a walk'. It means to leave the house and walk for fun or for exercise.",
    not: {
      make: "We do not say 'make for a walk'. Use 'go for a walk'.",
      do: "We do not say 'do for a walk'. Use 'go'.",
      take: "'Take' needs someone after it: 'take the dog for a walk'. With no one after the verb, we say 'go for a walk'.",
    },
    more: "We go for a walk, a swim or a run. With a person or a pet after the verb, we use 'take': 'Take the dog for a walk.'",
  },
  'Who is going to ___ the bill for dinner?': {
    why: "We say 'pay the bill'. A bill is a piece of paper that tells you how much you must pay, for instance after a meal in a restaurant.",
    not: {
      make: "We do not say 'make the bill'. Use 'pay'.",
      do: "We do not say 'do the bill'. Use 'pay'.",
      give: 'The waiter gives you the bill, but the customer pays it.',
    },
    more: "In a restaurant you can ask, 'Could we have the bill, please?'",
  },
  'We went to the river to ___ some fish.': {
    why: "We say 'catch fish'. To catch a fish is to take it out of the water with a rod or a net.",
    not: {
      hold: 'We can hold a fish in our hands, but first we must catch it.',
      keep: 'We can keep fish as pets, but at the river we catch them.',
      win: "We do not say 'win fish'. Use 'catch'.",
    },
    more: 'A person who catches fish for sport is an angler, and the sport is fishing.',
  },
  'Don’t ___ excuses. You are late again.': {
    why: "We say 'make excuses'. An excuse is a reason you give, often not a true one, for doing something wrong.",
    not: {
      do: "We do not say 'do excuses'. Use 'make'.",
      have: "We do not say 'have excuses'. Use 'make'.",
      take: "We do not say 'take excuses'. Use 'make'.",
    },
    more: "We can also make an excuse to leave: 'She made an excuse and went home.'",
  },
  'Please ___ room for Grandma on the sofa.': {
    why: "We say 'make room'. It means to move so that there is space for someone or something.",
    not: {
      do: "We do not say 'do room'. Use 'make'.",
      have: "'Have room' means there is space already: 'We have room for one more.' To ask people to move, we say 'make room'.",
      take: "We do not say 'take room'. Use 'make'.",
    },
    more: "'Room' here means space, not a room in a house.",
  },
  'Please ___ sure the door is locked.': {
    why: "We say 'make sure'. It means to check that something is true or has been done.",
    not: {
      do: "We do not say 'do sure'. Use 'make sure'.",
      have: "We do not say 'have sure'. Use 'make sure'.",
      take: "We do not say 'take sure'. Use 'make sure'.",
    },
    more: "'Make sure' is often followed by a sentence: 'Make sure you lock the door.'",
  },
  'Twenty schools will ___ part in the quiz.': {
    why: "We say 'take part'. It means to join in an activity with other people.",
    not: {
      make: "We do not say 'make part'. Use 'take part'.",
      do: "We do not say 'do part'. Use 'take part'.",
      have: "We do not say 'have part in the quiz'. Use 'take part'.",
    },
    more: "After 'take part' we use 'in': 'take part in a race'.",
  },
  'Please ___ a step back from the edge.': {
    why: "We say 'take a step'. It means to move one foot forward or back.",
    not: {
      make: "We do not usually say 'make a step'. Use 'take a step'.",
      do: "We do not say 'do a step back'. Use 'take'.",
      have: "We do not say 'have a step'. Use 'take'.",
    },
    more: "We also 'take steps' to fix a problem: we do things to solve it.",
  },
  'She ___ an accident on her bike, but she is fine.': {
    why: "We say 'have an accident'. An accident is something bad that happens by chance, like a fall or a crash.",
    not: {
      made: "We do not say 'made an accident'. Accidents happen to us; we have them.",
      did: "We do not say 'did an accident'. Use 'had'.",
      took: "We do not say 'took an accident'. Use 'had'.",
    },
    more: 'If you do something by accident, you did not mean to do it.',
  },
  'I ___ a problem with my laptop. It won’t turn on.': {
    why: "We say 'have a problem'. It means something is wrong and needs to be put right.",
    not: {
      make: "We do not say 'make a problem' about a laptop that has stopped working. Use 'have'.",
      do: "We do not say 'do a problem' about a laptop. Use 'have'.",
      take: "We do not say 'take a problem'. Use 'have'.",
    },
    more: "To end it, we 'solve' or 'fix' the problem.",
  },
  'Don’t ___ all your money on sweets.': {
    why: "We say 'spend money on' something. It means to use money to buy it.",
    not: {
      pass: "We do not say 'pass money on sweets'. Use 'spend'.",
      pay: "We pay for things: 'pay for the sweets'. We do not 'pay money on' them.",
      give: 'We give money to a person, but we spend it on things.',
    },
    more: "We can also spend time: 'I spent the day at the beach.'",
  },
  'The children ___ hands as they cross the road.': {
    why: "We say 'hold hands'. It means two people hold each other's hand, often to stay safe or close.",
    not: {
      keep: "We do not say 'keep hands'. Use 'hold hands'.",
      have: "We do not say 'have hands' for this. Use 'hold'.",
      carry: "We carry bags, not hands. Use 'hold hands'.",
    },
    more: "When we meet someone, we 'shake hands'. That is a different action.",
  },
  'Don’t forget to ___ your alarm for six o’clock.': {
    why: "We say 'set an alarm'. It means to make a clock or a phone ring at a time you choose.",
    not: {
      make: "We do not say 'make your alarm'. Use 'set'.",
      take: "We do not say 'take your alarm'. Use 'set'.",
      give: "We do not say 'give your alarm'. Use 'set'.",
    },
    more: "We also 'set a timer' when we cook.",
  },
  'Try not to ___ any lessons this term.': {
    why: "We say 'miss a lesson'. It means you are not there when it happens.",
    not: {
      lose: 'We lose things we cannot find, like keys. We do not lose lessons.',
      fail: 'We fail a test when we do badly. We do not fail lessons by being away.',
      break: "We do not say 'break a lesson'. Use 'miss'.",
    },
    more: 'If you miss school, ask a friend for the work.',
  },
  'make a mistake / make a decision / make homework / make a noise': {
    why: "'Make homework' is not natural. We do homework: 'I do my homework after school.' 'Make' goes with a mistake, a decision and a noise.",
    not: {
      'make a mistake': "This is natural: we make a mistake. 'Do a mistake' is the common error.",
      'make a decision':
        "This is natural: we make a decision. British speakers also say 'take a decision'.",
      'make a noise': 'This is natural: we make a noise.',
    },
    more: "'Do' is for jobs and work: homework, housework, the shopping. 'Make' is for things that did not exist before.",
  },
  'do yoga / do karate / do a law degree / do an effort': {
    why: "'Do an effort' is not natural. We say 'make an effort'. Many languages use one verb for both, but English uses 'make' with 'effort'.",
    not: {
      'do yoga': 'This is natural: we do yoga.',
      'do karate': 'This is natural: we do karate, as we do judo and the other martial arts.',
      'do a law degree': 'This is natural in British English: to do a degree is to study for one.',
    },
    more: "'Make an effort' means to try hard: 'Please make an effort to be on time.'",
  },
  'take a taxi / take a seat / take a deep breath / take a mistake': {
    why: "'Take a mistake' is not natural. We make a mistake. 'Take' goes with a taxi, a seat and a breath.",
    not: {
      'take a taxi': 'This is natural: we take a taxi, a bus or a train.',
      'take a seat': "This is natural: 'Please take a seat' means 'Please sit down'.",
      'take a deep breath': 'This is natural: we take a deep breath to calm down.',
    },
    more: "In some languages one verb means both 'make' and 'take'. In English, mistakes are made, not taken.",
  },
  'tell a joke / tell a secret / tell a lie / tell sorry': {
    why: "'Tell sorry' is not natural. We say sorry. 'Tell' goes with things that carry a message: a joke, a secret, a lie.",
    not: {
      'tell a joke': 'This is natural: we tell a joke to make people laugh.',
      'tell a secret': 'This is natural: we tell a secret, or keep it.',
      'tell a lie': "This is natural: we tell a lie. The opposite is 'tell the truth'.",
    },
    more: "'Tell' usually has a person after it: 'Tell me a joke.' 'Say' does not: 'Say sorry.'",
  },
  'say yes / say no / say thank you / say a story': {
    why: "'Say a story' is not natural. We tell a story. 'Say' goes with short words we speak: yes, no, thank you.",
    not: {
      'say yes': 'This is natural: we say yes, or say no.',
      'say no': 'This is natural: to say no is to refuse.',
      'say thank you': 'This is natural: we say thank you when someone helps us.',
    },
    more: "We tell stories. We say words: 'Say please.'",
  },
  'strong coffee / a strong wind / strong tea / strong rain': {
    why: "'Strong rain' is not natural. We say 'heavy rain'. 'Strong' goes with coffee, tea and wind.",
    not: {
      'strong coffee': 'This is natural: strong coffee has a lot of taste.',
      'a strong wind': 'This is natural: a strong wind blows hard.',
      'strong tea': 'This is natural: strong tea is made with a lot of tea.',
    },
    more: "Many languages use their word for 'strong' with rain. English uses 'heavy': heavy rain, heavy snow.",
  },
  'fast asleep / sound asleep / wide awake / wide asleep': {
    why: "'Wide asleep' is not natural. 'Wide' goes with 'awake', and 'fast' and 'sound' go with 'asleep'.",
    not: {
      'fast asleep': 'This is natural: fast asleep means sleeping deeply.',
      'sound asleep': 'This is natural: sound asleep means the same as fast asleep.',
      'wide awake': 'This is natural: wide awake means fully awake.',
    },
    more: 'These pairs are fixed. Learn them together: fast asleep, wide awake.',
  },
  'lose a game / lose your way / lose your voice / lose the bus': {
    why: "'Lose the bus' is not natural. We miss the bus when we are too late for it. We lose things we cannot find.",
    not: {
      'lose a game': 'This is natural: we lose a game when the other team wins.',
      'lose your way': 'This is natural: to lose your way is to get lost.',
      'lose your voice':
        'This is natural: if you lose your voice, you cannot speak, often because of a cold.',
    },
    more: "In many languages one verb means both 'lose' and 'miss'. In English, use 'miss' for things you are too late for.",
  },
  'earn a living / earn money / earn respect / earn a race': {
    why: "'Earn a race' is not natural. We win a race. We earn what we get by working: a living, money, respect.",
    not: {
      'earn a living': 'This is natural: to earn a living is to earn the money you need to live.',
      'earn money': 'This is natural: we earn money by working.',
      'earn respect': 'This is natural: we earn respect by the way we act.',
    },
    more: "Some languages use one verb for 'win' and 'earn'. In English, you win a competition and earn your pay.",
  },
  'play tennis / play the guitar / play golf / play judo': {
    why: "'Play judo' is not natural. We do judo. 'Play' goes with ball sports, like tennis and golf, and with musical instruments.",
    not: {
      'play tennis': 'This is natural: we play tennis, a sport with a ball.',
      'play the guitar': "This is natural: we play an instrument, with 'the': play the guitar.",
      'play golf': 'This is natural: we play golf, a sport with a ball.',
    },
    more: "Judo is a martial art, and martial arts take 'do', as gymnastics does.",
  },
  'go sightseeing / go fishing / go camping / go football': {
    why: "'Go football' is not natural. We play football. 'Go' goes with activities ending in -ing: go fishing, go camping.",
    not: {
      'go sightseeing': 'This is natural: to go sightseeing is to visit famous places.',
      'go fishing': 'This is natural: we go fishing at a river or the sea.',
      'go camping': 'This is natural: we go camping and sleep in a tent.',
    },
    more: "We can say 'go to football' for a match or a club, but not 'go football'.",
  },
  'drive a taxi / drive a van / drive a tractor / drive a bike': {
    why: "'Drive a bike' is not natural. We ride a bike. We drive things we sit inside and steer with a wheel.",
    not: {
      'drive a taxi': 'This is natural: a taxi driver drives a taxi.',
      'drive a van': 'This is natural: we drive a van, as we drive a car.',
      'drive a tractor': 'This is natural: farmers drive tractors.',
    },
    more: 'We ride things we sit on top of, like a bike or a motorbike.',
  },
  'catch a cold / catch the flu / catch chickenpox / catch a headache': {
    why: "'Catch a headache' is not natural. We have a headache. We catch illnesses that pass from person to person.",
    not: {
      'catch a cold': 'This is natural: we catch a cold from other people.',
      'catch the flu': 'This is natural: we catch the flu, or just catch flu.',
      'catch chickenpox': 'This is natural: chickenpox passes between people, so we catch it.',
    },
    more: 'Pains do not pass from person to person, so we have them: a headache, a toothache, a stomach ache.',
  },
  'make a cake / make a speech / make a joke / make a walk': {
    why: "'Make a walk' is not natural. We go for a walk, or take a walk. 'Make' goes with a cake, a speech and a joke.",
    not: {
      'make a cake': 'This is natural: we make a cake when we bake one.',
      'make a speech': 'This is natural: we make a speech, or give one.',
      'make a joke': 'This is natural: we make a joke, or tell one.',
    },
    more: "Some languages say 'make a walk'. In English, a walk takes 'go for' or 'take'.",
  },
  'make breakfast / make a cup of tea / make a sandwich / make the cooking': {
    why: "'Make the cooking' is not natural. We do the cooking. 'Make' goes with the food or drink itself: breakfast, a cup of tea, a sandwich.",
    not: {
      'make breakfast': 'This is natural: we make breakfast when we cook it.',
      'make a cup of tea': 'This is natural: we make a cup of tea.',
      'make a sandwich': 'This is natural: we make a sandwich.',
    },
    more: "'Do the cooking' is the job. 'Make dinner' is the meal you produce.",
  },
  'She wants to ___ a good impression at the interview.': {
    why: "We say 'make a good impression'. It means that other people think well of you when they meet you. Example: 'He made a good impression on the teacher.'",
    not: {
      do: "'Do an impression of someone' means to copy how they speak. That is a different idea. For a good first meeting we say 'make'.",
      have: "'Have an impression of someone' means you form an idea about them. Here she wants to give others a good idea of her, so we use 'make'.",
      take: "'Take an impression' does not mean this. For a good first meeting, the phrase is 'make a good impression'.",
    },
    more: "We use 'on' after this phrase: 'make a good impression on someone'. The first time you meet someone gives a 'first impression'.",
    tip: "Use the phrase in a speaking test: 'I want to make a good impression on my teachers.'",
  },
  'They are going to ___ a complaint about the noisy neighbours.': {
    why: "We say 'make a complaint'. It means you tell someone officially that something is wrong. Example: 'We made a complaint to the council.'",
    not: {
      do: "We do not say 'do a complaint'. When you tell someone about a problem, you make a complaint.",
      have: "'Have a complaint' means you feel unhappy about something. This sentence is about taking action, so we say 'make a complaint'.",
      take: "We do not say 'take a complaint' for someone who is unhappy. People who have a problem make a complaint.",
    },
    more: "You can make a complaint to a person or a company: 'make a complaint to the manager'. A written complaint is often called 'a letter of complaint'.",
    tip: "In a letter of complaint, begin with 'I am writing to make a complaint about ...'.",
  },
  'Can I ___ a suggestion? Why don’t we meet on Monday instead?': {
    why: "We say 'make a suggestion'. It means you offer an idea for other people to think about. Here the speaker's idea is to meet on Monday. Example: 'I would like to make a suggestion.'",
    not: {
      do: "We do not say 'do a suggestion'. You make a suggestion when you offer an idea.",
      have: "'Can I have a suggestion?' would ask someone else for an idea. Here the speaker gives one, so we say 'make a suggestion'.",
      take: "'Take a suggestion' means to accept someone else’s idea. Here the speaker offers one, so we say 'make a suggestion'.",
    },
    more: "We also 'make' a proposal, a request and an offer. All of them are things you give to other people.",
    tip: "In a meeting, be polite before you share your idea: 'Could I make a suggestion? Let’s start at nine.'",
  },
  'They want to ___ progress on the project this month.': {
    why: "We say 'make progress'. It means you move forward or improve. Example: 'She is making good progress in English.' There is no 'a' before 'progress'.",
    not: {
      do: "We do not say 'do progress'. Moving forward is something you make.",
      have: "We do not say 'have progress'. Use 'make progress'.",
      take: "We do not say 'take progress'. Use 'make progress'.",
    },
    more: "'Progress' is uncountable, so we do not say 'a progress'. We say 'some progress' or 'good progress'. The verb is often continuous: 'He is making progress'.",
    tip: "School reports often say 'is making good progress'. Use it to talk about your own learning.",
  },
  'He promised to ___ an exception just this once.': {
    why: "We say 'make an exception'. It means you allow something that is not normally allowed. Example: 'The teacher made an exception for him.'",
    not: {
      do: "We do not say 'do an exception'. We make an exception when we break the normal rule.",
      have: "'Have an exception' is not the usual phrase. A rule can have exceptions, but a person makes one.",
      take: "'Take exception to' means to be offended by something. It is a different phrase. To allow something special, we make an exception.",
    },
    more: "The phrase 'with the exception of' means 'except for': 'Everyone came, with the exception of Tom.'",
    tip: "'Just this once' is useful when you ask for special treatment: 'Could you make an exception, just this once?'",
  },
  'It was a pleasure to ___ business with you.': {
    why: "We say 'do business'. It means you buy and sell with other people or companies. 'It was a pleasure to do business with you' is a polite sentence at the end of a deal.",
    not: {
      make: "We do not say 'make business'. When people trade together, they do business.",
      have: "'Have business with someone' means you have something to discuss with them. At the end of a deal, we say 'do business'.",
      take: "We do not say 'take business'. Use 'do business with'.",
    },
    more: "'Do business with' is for trade between people or companies: 'We do business with farms near the town.'",
  },
  'We need to ___ action before the problem gets worse.': {
    why: "We say 'take action'. It means you do something to solve a problem. Example: 'The school took action against bullying.' 'Action' goes with 'take' and has no 'a' here.",
    not: {
      make: "We do not say 'make action'. Doing something about a problem is taking action.",
      do: "We do not say 'do action'. Use 'take action'.",
      have: "We do not say 'have action'. Use 'take action'.",
    },
    more: "'Take action' is common in the news and in speeches about problems: 'The council must take action now.'",
    tip: "Use it in discussion writing: 'We must take action to protect the environment.'",
  },
  'You should ___ advantage of the free training offer.': {
    why: "We say 'take advantage of'. It means you use a chance in a good way. Example: 'Take advantage of the sunny weather.' There is no 'an' or 'the' before 'advantage' in this phrase.",
    not: {
      make: "We do not say 'make advantage'. Use 'take advantage of'.",
      do: "We do not say 'do advantage'. Use 'take advantage of'.",
      have: "'Have an advantage' means that you are in a better position than others. It is a different phrase. Here we say 'take advantage of'.",
    },
    more: "'Take advantage of' can also mean to use someone unfairly: 'He took advantage of her kindness.' The sentence shows which meaning it has.",
    tip: "In a letter, 'I would like to take advantage of your offer' is a polite way to say yes.",
  },
  'The manager will make an important ___ at the meeting tomorrow.': {
    why: "We say 'make an announcement'. An announcement is news that someone tells a group of people, and the verb 'make' goes with it. It also fits 'an important', as 'announcement' can be counted.",
    not: {
      news: "'News' cannot be counted, so it cannot follow 'an'. We say 'some important news', and we give news, or break it, to people.",
      advice:
        "'Advice' cannot be counted, so it cannot follow 'an'. We give advice; we do not make it.",
      information:
        "'Information' cannot be counted, so it cannot follow 'an'. We give information; we do not make it.",
    },
    more: "Some nouns for what we tell people cannot be counted: news, advice, information. Use 'some' or 'a piece of' with them: 'a piece of advice'.",
    tip: "An announcement is often public: 'The head teacher made an announcement in assembly.'",
  },
  'To ___ you the truth, I had been looking forward to my retirement.': {
    why: "We say 'tell the truth'. With 'truth', English uses 'tell': tell you the truth, tell me the truth. In Animal Farm, Boxer the horse says, 'To tell you the truth, I had been looking forward to my retirement.'",
    not: {
      say: "We do not say 'say you the truth'. 'Say' does not take a person straight after it, and the truth is something you tell.",
      speak:
        "'Speak you the truth' is not English. With a person and 'the truth', the verb is 'tell'.",
      talk: "'Talk you the truth' is not English. Use 'tell'.",
    },
    more: "'To tell you the truth' is a fixed phrase that means 'honestly'. People use it before they say something that may surprise the listener.",
    tip: "Use 'tell' when a person comes next: tell me, tell her. Use 'say' when no person follows: say yes.",
  },
  'One ___ a secret better than two.': {
    why: "We say 'keep a secret'. It means you do not tell it to anyone. In Great Expectations, Orlick says that one person keeps a secret better than two.",
    not: {
      takes: "We do not say 'takes a secret'. Not telling a secret is keeping it.",
      makes: "We do not say 'makes a secret'. Use 'keeps a secret'.",
      does: "We do not say 'does a secret'. Use 'keeps a secret'.",
    },
    more: 'Some secrets are hard to keep: you want to share them.',
  },
  'I ___ my word.': {
    why: "We say 'keep your word'. It means you do what you promised. In Jane Eyre, Jane decides to draw two pictures to teach herself a lesson, and then she says, 'I kept my word.'",
    not: {
      made: "We do not say 'made my word'. Doing what you promised is keeping your word.",
      took: "'Took my word' is part of 'take someone's word for it', which means to believe them. It is a different phrase.",
      did: "We do not say 'did my word'. Use 'kept my word'.",
    },
    more: "To 'give your word' means to promise: 'I give you my word.' Then you keep it.",
  },
  'What awful event has ___ place?': {
    why: "We say 'take place'. It means to happen, often for an event or a big change. In Jane Eyre, Miss Ingram asks, 'What awful event has taken place?' after a cry in the night.",
    not: {
      had: "We do not say 'had place'. For something that happens, we say 'take place'.",
      made: "We do not say 'made place'. Use 'taken place'.",
      got: "We do not say 'got place'. Use 'taken place'.",
    },
    more: "There is no 'a' before 'place' in this phrase: 'The wedding took place in June.'",
  },
  "Don't ___ your temper.": {
    why: "We say 'lose your temper'. It means you suddenly become very angry. In Great Expectations, Mr Pumblechook tells Mrs Joe, 'Don't lose your temper.'",
    not: {
      miss: "We do not say 'miss your temper'. Becoming angry is losing your temper.",
      break: "We do not say 'break your temper'. Use 'lose your temper'.",
      drop: "We do not say 'drop your temper'. Use 'lose your temper'.",
    },
    more: "To stay calm is to 'keep your temper'.",
  },
  '"But it ___ no difference to you, you know," said Biddy, calmly.': {
    why: "We say 'make a difference'. 'It makes no difference to you' means it changes nothing for you. In Great Expectations, Biddy tells Pip calmly that it makes no difference to him.",
    not: {
      does: "We do not say 'does no difference'. This is a common mistake. Use 'makes'.",
      has: "We do not say 'has no difference to you'. Use 'makes no difference'.",
      gives: "We do not say 'gives no difference'. Use 'makes'.",
    },
    more: "'Make a difference' can also mean to do something good: 'Teachers make a difference to young lives.'",
  },
  'Hats and dresses ___ fire.': {
    why: "We say 'catch fire'. It means to start burning. In The War of the Worlds, the heat from the Martians' weapon is so great that hats and dresses catch fire.",
    not: {
      made: "We do not say 'made fire' here. 'Make a fire' means to build one on purpose, with wood.",
      set: "'Set fire' needs 'to': 'set fire to a house'. For things that start to burn, we say 'catch fire'.",
      got: "We do not say 'got fire'. Use 'caught fire'.",
    },
    more: "There is no 'a' before 'fire' in this phrase: 'The curtains caught fire.'",
  },
  'Because I ___ in love.': {
    why: "We say 'fall in love'. It means you begin to love someone. In A Christmas Carol, Scrooge asks his nephew why he married, and Fred answers, 'Because I fell in love.'",
    not: {
      went: "We do not say 'went in love'. Use 'fell in love'.",
      got: "We do not say 'got in love'. Use 'fell in love'.",
      dropped: "We do not say 'dropped in love'. The verb is 'fall': fell in love.",
    },
    more: "'Fall' is irregular: fall, fell, fallen. We also 'fall asleep' and 'fall ill'.",
  },
  'You can ___ his heart.': {
    why: "We say 'break someone's heart'. It means to make someone very sad, often in love. In Great Expectations, Miss Havisham tells Estella that she can break Pip's heart.",
    not: {
      smash: "We do not say 'smash his heart'. The fixed phrase is 'break someone's heart'.",
      tear: "We do not say 'tear his heart'. Use 'break his heart'.",
      burn: "We do not say 'burn his heart'. Use 'break his heart'.",
    },
    more: "A person who feels this is 'heartbroken'.",
  },
  'I ___ that train, and then another, before I could get myself away.': {
    why: "We say 'miss a train'. It means you are too late for it. In The Great Gatsby, Nick does not want to leave Gatsby, so he misses that train, and then another.",
    not: {
      lost: "We do not say 'lost that train'. Many languages use one verb for both, but in English you lose a thing and miss a train.",
      failed: "We do not say 'failed that train'. You fail a test, but you miss a train.",
      dropped: "We do not say 'dropped that train'. Use 'missed'.",
    },
    more: 'You can also miss a flight or a chance.',
  },
  'It ___ him no reply.': {
    why: "We say 'give a reply'. In A Christmas Carol, Scrooge begs the last of the Spirits to speak to him, but it gives him no reply: it says nothing.",
    not: {
      told: "We do not say 'told him no reply'. A reply is something you give.",
      said: "We do not say 'said him no reply'. A reply is something you give.",
      spoke: "We do not say 'spoke him no reply'. Use 'gave'.",
    },
    more: 'We give an answer to a question in the same way.',
  },
  "Napoleon ___ no interest in Snowball's committees.": {
    why: "We say 'take an interest in'. It means you want to know about something and care about it. In Animal Farm, Napoleon takes no interest in Snowball's committees.",
    not: {
      made: "We do not say 'made no interest'. Use 'took no interest'.",
      did: "We do not say 'did no interest'. Use 'took no interest'.",
      gave: "We do not say 'gave no interest'. Use 'took no interest'.",
    },
    more: "'Have an interest in' means much the same: 'He has no interest in music.'",
  },
  'I must ___ a visit to the second storey.': {
    why: "We say 'pay a visit'. It means to go and see a person or a place. In Jane Eyre, Rochester tells Jane he must pay a visit to the second storey of the house.",
    not: {
      take: "We do not say 'take a visit'. Use 'pay a visit'.",
      give: "We do not say 'give a visit'. Use 'pay a visit'.",
      keep: "We do not say 'keep a visit'. Use 'pay a visit'.",
    },
    more: "'Pay a visit' is a little formal. In everyday speech we also say 'visit': 'I visited my aunt.'",
  },
  "Ask no questions, and you'll be ___ no lies.": {
    why: "We say 'tell a lie', and in the passive 'be told lies'. In Great Expectations, Mrs Joe snaps at Pip, 'Ask no questions, and you'll be told no lies.'",
    not: {
      said: "We do not say 'be said no lies'. Lies are told.",
      spoken: "We do not say 'be spoken no lies'. Use 'told'.",
      talked: "We do not say 'be talked no lies'. Use 'told'.",
    },
    more: 'A person who tells lies is a liar.',
  },
  "I couldn't ___ my eyes off him.": {
    why: "We say 'can't keep your eyes off someone'. It means you cannot stop looking at them. In Great Expectations, Pip says he couldn't keep his eyes off Mr Pumblechook at the Christmas dinner.",
    not: {
      hold: "'Hold' does not go with 'eyes' in this phrase. The fixed phrase uses 'keep'.",
      put: "'Put' does not go with 'eyes' in this phrase. The fixed phrase uses 'keep'.",
      have: "'Have' does not go with 'eyes' in this phrase. The fixed phrase uses 'keep'.",
    },
    more: "People also use 'take' in this phrase, with the same meaning.",
  },
  '"I ___ no patience with him," observed Scrooge\'s niece.': {
    why: "We say 'have patience'. Patience means staying calm when you wait or when someone annoys you. In A Christmas Carol, Scrooge's niece says she has no patience with him.",
    not: {
      make: "We do not say 'make no patience'. Use 'have no patience'.",
      take: "We do not say 'take no patience'. Use 'have'.",
      keep: "We do not say 'keep no patience'. Use 'have no patience'.",
    },
    more: "If you stop being calm, you 'run out of patience'.",
  },
  'I want to ___ my duty.': {
    why: "We say 'do your duty'. It means you do what you should do. In Silas Marner, Godfrey says it is his duty to look after his own daughter: 'I want to do my duty.'",
    not: {
      make: "We do not say 'make my duty'. Use 'do my duty'.",
      have: "'Have my duty' is not natural here. Use 'do my duty'.",
      take: "We do not say 'take my duty'. Use 'do my duty'.",
    },
    more: 'A duty is something you must do because it is right, or because it is your job.',
  },
  'I have ___ no harm.': {
    why: "We say 'do harm'. It means to hurt someone or to cause damage. In Macbeth, Lady Macduff says, 'I have done no harm.'",
    not: {
      made: "We do not say 'made no harm'. Many languages use their word for 'make' here, but English says 'do harm'.",
      given: "We do not say 'given no harm'. Use 'done no harm'.",
      taken: "We do not say 'taken no harm'. Use 'done no harm'.",
    },
    more: "We also say 'There is no harm in trying', which means that trying cannot hurt anyone.",
  },
  'I will ___ no promise of the kind.': {
    why: "We say 'make a promise'. In Pride and Prejudice, Lady Catherine asks Elizabeth to promise she will never marry Darcy, and Elizabeth answers, 'I will make no promise of the kind.'",
    not: {
      do: "We do not say 'do a promise'. Use 'make a promise'.",
      say: "We do not say 'say a promise'. A promise is something you make, or give.",
      tell: "We tell a story or a lie, but we do not tell a promise. Use 'make'.",
    },
    more: "'Promise' can also be a verb: 'I promise to help.'",
  },
  'Mr. Pocket and I ___ a long talk together.': {
    why: "We say 'have a talk'. It means you talk about something together. In Great Expectations, Pip and Mr Pocket have a long talk about Pip's future.",
    not: {
      made: "We do not say 'made a long talk'. Use 'had a long talk'.",
      did: "We do not say 'did a long talk' for talking together. Use 'had'.",
      took: "We do not say 'took a long talk'. Use 'had a long talk'.",
    },
    more: "'Give a talk' is different: it means to speak to an audience.",
  },
  'Would you like to ___ a look at Newgate?': {
    why: "We say 'have a look'. It means you look at something for a short time. In Great Expectations, Wemmick asks Pip if he would like to have a look at Newgate, the London prison.",
    not: {
      make: "We do not say 'make a look'. Use 'have a look'.",
      do: "We do not say 'do a look'. Use 'have a look'.",
      give: "'Give a look' is not natural with 'at Newgate'. Use 'have a look'.",
    },
    more: "'Take a look' is natural English too, but it is not one of the choices here.",
  },
  'The men ___ a shout of triumph.': {
    why: "We say 'give a shout'. It means you shout once, loudly. In Animal Farm, the men give a shout of triumph when they think the animals are running away.",
    not: {
      made: "We do not say 'made a shout'. Use 'gave a shout'.",
      did: "We do not say 'did a shout'. Use 'gave'.",
      took: "We do not say 'took a shout'. Use 'gave a shout'.",
    },
    more: 'The same pattern: give a cry, give a sigh.',
  },
  'I ___ the advice.': {
    why: "We say 'take advice'. It means you do what someone says is best. In Great Expectations, Joe tells Pip to hide behind the door, and Pip says, 'I took the advice.'",
    not: {
      made: "We do not say 'made the advice'. Use 'took the advice'.",
      did: "We do not say 'did the advice'. Use 'took'.",
      had: "We do not say 'had the advice' for doing what someone says. Use 'took'.",
    },
    more: "You can also 'follow' advice.",
  },
  'A: What did the teacher ___ about the test? B: It is on Friday, in Room 4.': {
    why: "We use 'say' for someone's words: 'What did the teacher say?' 'Say' does not need a person after it, so 'What did the teacher say about the test?' is right.",
    not: {
      tell: "'Tell' needs a person after it: 'What did the teacher tell you about the test?' With no person, we use 'say'.",
      speak: "'Speak' does not take 'what' as its object like this. Use 'say'.",
      talk: "'Talk' does not take 'what' and a topic together like this. Use 'say'.",
    },
    more: "Use 'say' for the words, and 'tell' for a person and the words: 'Tell me what she said.'",
  },
  'Do you dare to ___ your promise?': {
    why: "We say 'break a promise'. It means to not do what you said you would do. In Frankenstein, the creature asks Victor this after Victor destroys the companion he promised to make.",
    not: {
      lose: "We do not say 'lose a promise'. Use 'break'.",
      miss: 'We miss a bus or a lesson, not a promise.',
      drop: "We do not say 'drop a promise'. Use 'break'.",
    },
    more: "The opposite is 'keep a promise': to do what you said you would.",
  },
  'Let us ___ good use of it.': {
    why: "We say 'make use of' something, or 'make good use of' it. It means to use it well. In The Sign of Four, Holmes says this to Watson about the half hour they have to themselves.",
    not: {
      do: "'Do' does not go with 'use' in this phrase. Use 'make'.",
      have: "'Have' does not go with 'use' in this phrase. Use 'make'.",
      take: "'Take' does not go with 'use' in this phrase. Use 'make'.",
    },
    more: "We can also make the most of something: 'Let's make the most of the sunshine.'",
  },
  'You were born to ___ your fortune.': {
    why: "We say 'make your fortune'. It means to become rich. In A Christmas Carol, old Joe says this to the woman who has brought him Scrooge's things to sell.",
    not: {
      do: "We do not say 'do your fortune'. Use 'make'.",
      have: "We do not say 'have your fortune' here. Use 'make'.",
      take: "We do not say 'take your fortune'. Use 'make'.",
    },
    more: "A fortune is a very large amount of money. Something very dear can 'cost a fortune'.",
  },
  'I ___ no remark, however, but sat nursing my wounded leg.': {
    why: "We say 'make a remark'. A remark is something you say about a person or a thing. In The Sign of Four, Watson notices Holmes's vanity but says nothing about it.",
    not: {
      did: "We do not say 'did a remark'. Use 'made'.",
      had: "We do not say 'had no remark'. Use 'made'.",
      took: "We do not say 'took no remark'. Use 'made'.",
    },
    more: "'Made no remark' is a formal way of saying 'said nothing'. 'Nursing my wounded leg' means resting a leg that was hurt.",
  },
  'I knew right away I ___ a mistake.': {
    why: "We say 'make a mistake'. In The Great Gatsby, Myrtle Wilson says she knew at once that her marriage was a mistake.",
    not: {
      did: "We do not say 'did a mistake'. This is a common learner error. Use 'made'.",
      had: "We do not say 'had a mistake' for getting something wrong. Use 'made'.",
      took: "We do not say 'took a mistake'. Use 'made'.",
    },
    more: "'Right away' means at once. In British English we often say 'straight away'.",
  },
  'Michaelis ___ a clumsy attempt to distract him.': {
    why: "We say 'make an attempt'. An attempt is a try. In The Great Gatsby, Michaelis tries, not very well, to take George Wilson's mind off his grief.",
    not: {
      did: "We do not say 'did an attempt'. Use 'made'.",
      took: "We do not say 'took an attempt'. Use 'made'.",
      gave: "We do not say 'gave an attempt'. Use 'made'.",
    },
    more: "'Clumsy' means awkward. A clumsy attempt is an awkward try.",
  },
  'Of course I ___ no further effort to refer to it.': {
    why: "We say 'make an effort'. In Great Expectations, Miss Havisham allows no one to speak of her birthday, so Pip makes no further effort to mention it.",
    not: {
      did: "We do not say 'did an effort'. Many languages use their word for 'do' here, but English uses 'make'.",
      had: "'Have' does not go with 'effort' like this. Use 'made'.",
      took: "'Take' does not go with 'effort' like this. Use 'made'.",
    },
    more: "'Refer to' something means to mention it.",
  },
  'As he stood there, waiting his arrival, the knocker ___ his eye.': {
    why: "We say something 'catches your eye' when you suddenly notice it. In A Christmas Carol, Scrooge notices his door knocker on Christmas morning and loves it.",
    not: {
      took: "We do not say 'took his eye' for noticing. Use 'caught'.",
      made: "We do not say 'made his eye'. Use 'caught'.",
      got: "We do not say 'got his eye'. Use 'caught'.",
    },
    more: "'Waiting his arrival' is an old way to say that Scrooge was waiting for the man to come. To catch someone's eye can also mean to get them to look at you.",
  },
  'The nurse ___ a step forward and held out her hand.': {
    why: "We say 'take a step'. In The Great Gatsby, the nurse steps forward to take Daisy's little daughter away.",
    not: {
      did: "'Do' does not go with 'step' here. Use 'took'.",
      had: "'Have' does not go with 'step' here. Use 'took'.",
      gave: "'Give' does not go with 'step' here. Use 'took'.",
    },
    more: "'Held out her hand' means she put her hand out towards the child.",
  },
  'And the lawyer set out homeward with a very ___ heart.': {
    why: "We say 'a heavy heart' when someone feels very sad or worried. In Jekyll and Hyde, Utterson goes home worried after he learns that Hyde has a key to Jekyll's house.",
    not: {
      wide: "We do not say 'a wide heart'. Use 'heavy'.",
      thick: "We do not say 'a thick heart'. Use 'heavy'.",
      deep: "We do not say 'a deep heart'. Use 'heavy'.",
    },
    more: "The opposite is 'a light heart': feeling happy. 'Set out homeward' means started to go home.",
  },
  'Mr. Rochester lay stretched motionless, in ___ sleep.': {
    why: "We say 'a deep sleep'. It means sleeping so well that it is hard to wake. In Jane Eyre, Rochester sleeps on while his bed curtains burn, until Jane wakes him.",
    not: {
      fast: "We say 'fast asleep', but not 'in fast sleep'.",
      hard: "We do not say 'hard sleep'. Use 'deep'.",
      strong: "We do not say 'strong sleep'. Use 'deep'.",
    },
    more: "'Motionless' means not moving at all.",
  },
  'Then, overcome by fatigue, I lay down among some straw, and ___ asleep.': {
    why: "We say 'fall asleep'. It means to start sleeping. In Frankenstein, the creature, very tired, lies down in some straw and falls asleep.",
    not: {
      went: "We say 'went to sleep', but not 'went asleep'.",
      got: "We say 'got to sleep', but not 'got asleep'.",
      became:
        "We do not say 'became asleep'. 'Become' goes with words such as 'sleepy' or 'tired': 'I became sleepy.' To start sleeping, we fall asleep.",
    },
    more: "'Fatigue' means great tiredness. 'Fall' is irregular: fall, fell, fallen.",
  },
  'They were unnecessary, he said, and ___ time.': {
    why: "We say 'waste time'. It means to use time badly, on something that is not worth it. In Animal Farm, Napoleon says this to end the Sunday meetings where the animals vote.",
    not: {
      spent: "We spend time on things, but meetings do not 'spend' time. Use 'wasted'.",
      made: "We do not say 'made time' for this. Use 'wasted'.",
      gave: "We do not say 'gave time' for this. Use 'wasted'.",
    },
    more: "Napoleon's reason sounds sensible, but it takes away the animals' voice. That is how the pigs gain power.",
  },
  'Did Rivers ___ much time with the ladies of his family?': {
    why: "We say 'spend time with' someone. It means to be with them. In Jane Eyre, Rochester asks Jane whether her cousin St John spent much time with his sisters.",
    not: {
      keep: "'Keep' does not go with 'time' in this way. Use 'spend'.",
      make: 'We make time for someone, but we spend time with them.',
      give: 'We give time to something, but we spend time with someone.',
    },
    more: 'Rochester is jealous of St John, so he wants to know all about him.',
  },
  'Estella was the next to ___ the silence that ensued between us.': {
    why: "We say 'break the silence'. It means to be the first to speak after a long quiet time. In Great Expectations, Pip and Estella meet again, and she speaks first.",
    not: {
      crack: "We do not say 'crack the silence'. Use 'break'.",
      smash: "We do not say 'smash the silence'. Use 'break'.",
      tear: "We do not say 'tear the silence'. Use 'break'.",
    },
    more: "'Ensued' means followed. We also say 'break the news': to tell someone something important, often bad.",
  },
  'make an offer / make a comment / make arrangements / make research': {
    why: "'Make research' is not natural. We do research. 'Make' goes with an offer, a comment and arrangements.",
    not: {
      'make an offer': 'This is natural: we make an offer to buy something, or to help.',
      'make a comment': 'This is natural: we make a comment about something.',
      'make arrangements': 'This is natural: to make arrangements is to plan the details.',
    },
    more: "'Research' cannot be counted, so we say 'do some research', not 'a research'.",
  },
  'do damage / do a course / do the accounts / do progress': {
    why: "'Do progress' is not natural. We make progress. 'Do' goes with damage, a course and the accounts.",
    not: {
      'do damage': 'This is natural: a storm can do damage to a house.',
      'do a course': 'This is natural: to do a course is to study one.',
      'do the accounts':
        'This is natural: to do the accounts is to keep the money records of a business.',
    },
    more: "'Progress' cannot be counted: 'make good progress', not 'a progress'.",
  },
  'take control / take charge / take responsibility / take a conclusion': {
    why: "'Take a conclusion' is not natural. We draw a conclusion, or reach one. 'Take' goes with control, charge and responsibility.",
    not: {
      'take control': 'This is natural: to take control is to start to control something.',
      'take charge': 'This is natural: to take charge is to become the leader.',
      'take responsibility':
        'This is natural: to take responsibility is to accept that something is your job or your fault.',
    },
    more: 'A conclusion is what you decide after you think about the facts.',
  },
  'reach an agreement / come to an agreement / make an agreement / do an agreement': {
    why: "'Do an agreement' is not natural. We reach an agreement, come to one or make one.",
    not: {
      'reach an agreement': 'This is natural: to reach an agreement is to agree in the end.',
      'come to an agreement': 'This is natural: it means the same as reach an agreement.',
      'make an agreement': 'This is natural: two people can make an agreement.',
    },
    more: "In business, people also 'do a deal', but not 'do an agreement'.",
  },
  'a heavy heart / heavy traffic / heavy rain / heavy coffee': {
    why: "'Heavy coffee' is not natural. We say 'strong coffee'. 'Heavy' goes with a heart, traffic and rain.",
    not: {
      'a heavy heart': 'This is natural: a heavy heart is a sad one.',
      'heavy traffic': 'This is natural: heavy traffic means a lot of cars.',
      'heavy rain': 'This is natural: heavy rain means a lot of rain.',
    },
    more: "'Heavy' often means 'a lot of': heavy traffic, heavy rain, heavy snow.",
  },
  'a sense of humour / a sense of direction / a feeling of fear / a feeling of humour': {
    why: "'A feeling of humour' is not natural. We say 'a sense of humour'. A sense is something you are able to do or know.",
    not: {
      'a sense of humour': 'This is natural: a sense of humour lets you see what is funny.',
      'a sense of direction': 'This is natural: a good sense of direction helps you find your way.',
      'a feeling of fear':
        'This is natural: a feeling of fear is what you feel when you are afraid.',
    },
    more: "We use 'sense' for an ability, and 'feeling' for something we feel at one moment.",
  },
  'do a favour / ask a favour / return a favour / make a favour': {
    why: "'Make a favour' is not natural. We do someone a favour. We can also ask a favour, or return one.",
    not: {
      'do a favour': 'This is natural: to do someone a favour is to help them.',
      'ask a favour': "This is natural in British English: 'Can I ask a favour?'",
      'return a favour': 'This is natural: to return a favour is to help someone who helped you.',
    },
    more: "In many languages one verb means both 'make' and 'do', so learners say 'make a favour'.",
  },
  'score a goal / win a match / beat a team / win a team': {
    why: "'Win a team' is not natural. We beat a team, and win a match. You win the game, not the people you play against.",
    not: {
      'score a goal': 'This is natural: to score a goal is to get the ball in the net.',
      'win a match': 'This is natural: we win a match, a race or a game.',
      'beat a team': 'This is natural: to beat a team is to win against them.',
    },
    more: 'Win goes with the competition: a match, a prize, a cup. Beat goes with the people: a team, a player.',
  },
  'pass an exam / fail an exam / sit an exam / win an exam': {
    why: "'Win an exam' is not natural. We pass an exam when our marks are high enough. We win competitions, not exams.",
    not: {
      'pass an exam': 'This is natural: to pass an exam is to do well enough in it.',
      'fail an exam': 'This is natural: to fail an exam is to not do well enough.',
      'sit an exam': 'This is natural in British English: to sit an exam is to take it.',
    },
    more: "In British English we say 'sit', 'take' or 'do' an exam. The result is that we pass or fail it.",
  },
  'draw a conclusion / draw a picture / draw attention / draw a decision': {
    why: "'Draw a decision' is not natural. We make a decision. 'Draw' goes with a conclusion, a picture and attention.",
    not: {
      'draw a conclusion':
        'This is natural: to draw a conclusion is to decide what the facts mean.',
      'draw a picture': 'This is natural: we draw a picture with a pencil.',
      'draw attention':
        'This is natural: to draw attention to something is to make people notice it.',
    },
    more: "In British English we also 'take a decision'. Both 'make' and 'take' are natural with 'decision'.",
  },
  'fall asleep / fall ill / fall in love / fall tired': {
    why: "'Fall tired' is not natural. We get tired, or become tired. 'Fall' goes with asleep, ill and in love.",
    not: {
      'fall asleep': 'This is natural: to fall asleep is to start sleeping.',
      'fall ill': 'This is natural in British English: to fall ill is to become ill.',
      'fall in love': 'This is natural: to fall in love is to begin to love someone.',
    },
    more: "'Fall' here means 'become', but only in fixed phrases. For most feelings we use 'get' or 'become'.",
  },
  'highly recommended / highly unlikely / highly successful / highly tired': {
    why: "'Highly tired' is not natural. We say 'very tired' or 'extremely tired'. 'Highly' goes with some adjectives, like recommended, unlikely and successful.",
    not: {
      'highly recommended': 'This is natural: a highly recommended film is one many people praise.',
      'highly unlikely': 'This is natural: highly unlikely means almost certainly not.',
      'highly successful': 'This is natural: a highly successful business does very well.',
    },
    more: "'Highly' cannot replace 'very' everywhere. It goes with words about praise, chance and success.",
  },
  'A: Did the two companies agree in the end? B: Yes. They ___ an agreement last night.': {
    why: "We say 'reach an agreement'. It means to agree in the end, often after a long talk. We use 'reach' as if the agreement were a place you arrive at.",
    not: {
      did: "We do not say 'did an agreement'. Use 'reached'.",
      took: "We do not say 'took an agreement'. Use 'reached'.",
      arrived:
        "We can say 'arrived at an agreement', with 'at'. Without 'at', 'arrived' does not fit.",
    },
    more: "We also reach a decision. 'Reach' with no 'at' after it is the usual verb here.",
  },
  'A: Is your mum still working at the bakery? B: No. She ___ her own business now.': {
    why: "We say 'run a business'. It means to be in charge of it and make it work.",
    not: {
      makes: "We do not say 'makes her own business'. Use 'runs'.",
      does: 'We do business with people, but we run a business.',
      plays: "We do not say 'plays her own business'. Use 'runs'.",
    },
    more: 'We also run a shop, a hotel or a club.',
  },
  'A: That new phone looks great. B: It is, but it ___ a fortune.': {
    why: "We say 'cost a fortune'. It means to be very expensive. The thing costs money; the person pays or spends it.",
    not: {
      pays: 'A person pays for the phone. The phone itself costs money.',
      spends: 'A person spends money. The phone does not spend anything.',
      takes: "We do not say 'it takes a fortune'. Use 'costs'.",
    },
    more: "'Fortune' here means a very large amount of money.",
  },
  'A: I failed my driving test again. B: Never mind. You will ___ it next time.': {
    why: "We say 'pass a test'. It means to reach the standard you need. The opposite is 'fail a test'.",
    not: {
      win: 'We win a race or a prize, not a test.',
      succeed: "'Succeed' needs 'in': 'succeed in a test'. Even then, 'pass' is the usual word.",
      gain: "We do not say 'gain a test'. Use 'pass'.",
    },
    more: 'In Britain you take a driving test, and if you pass it you get your licence.',
  },
  'A: Why are you so quiet today? B: Sorry. I didn’t ___ much sleep last night.': {
    why: "We say 'get some sleep'. It means to manage to sleep. 'I didn't get much sleep' means I slept very little.",
    not: {
      make: "We do not say 'make sleep'. Use 'get'.",
      do: "We do not say 'do sleep'. Use 'get'.",
      take: "We do not say 'take sleep'. Use 'get'.",
    },
    more: "In British English people also say 'I didn't have much sleep'.",
  },
  'A: I can’t choose a course. B: Take your time. You don’t have to ___ up your mind today.': {
    why: "We say 'make up your mind'. It means to decide. 'You don't have to make up your mind today' means you can decide later.",
    not: {
      take: 'We take our time, but we make up our mind.',
      do: "We do not say 'do up your mind'. Use 'make'.",
      have: "We do not say 'have up your mind'. Use 'make'.",
    },
    more: 'If you decide one thing and then decide another, you change your mind.',
  },
  'A: Is there any news about Sam’s sister? B: Yes. She ___ birth to twins last night.': {
    why: "We say 'give birth'. It means that a baby is born to its mother. After it, we use 'to': 'She gave birth to twins.'",
    not: {
      had: "We say 'she had twins', but not 'had birth'. Use 'gave birth'.",
      made: "We do not say 'made birth'. Use 'gave'.",
      took: "We do not say 'took birth'. Use 'gave'.",
    },
    more: 'Twins are two babies born to the same mother at the same time.',
  },
  'A: Shall we take a taxi? B: No, let’s walk. It will ___ us some money.': {
    why: "We say 'save money'. It means to keep money instead of using it. Walking is free, so it saves the money a taxi would cost.",
    not: {
      keep: "We keep money in a bank, but walking does not 'keep us' money. Use 'save'.",
      spend: 'A taxi would make us spend money. Walking does the opposite.',
      pay: 'We pay for a taxi. Walking does not pay us anything.',
    },
    more: 'We also save time, and save energy.',
  },
  'A: How was your holiday? B: Great. We ___ lots of photos.': {
    why: "We say 'take a photo'. In the past, it is 'took': 'We took lots of photos.'",
    not: {
      made: "We do not say 'made photos'. Many languages use 'make' here, but English uses 'take'.",
      did: "We do not say 'did photos'. Use 'took'.",
      had: "'We had lots of photos' would mean we owned them. To use a camera, we take photos.",
    },
    more: 'We also take a picture with a camera or a phone.',
  },
  'A: What do you want to do after school? B: I want to ___ a living as an artist.': {
    why: "We say 'make a living'. It means to earn the money you need to live. We can also say 'earn a living'.",
    not: {
      do: "We do not say 'do a living'. Use 'make'.",
      have: "We do not say 'have a living'. Use 'make'.",
      take: "We do not say 'take a living'. Use 'make'.",
    },
    more: "'Living' here means the money you live on, not being alive.",
  },
  'A: My grandad is in hospital. B: I’m sorry. I hope he ___ better soon.': {
    why: "We say 'get better'. When someone is ill, 'get better' means to become well again.",
    not: {
      makes: "We do not say 'makes better' about someone who is ill. Use 'gets'.",
      goes: "We do not say 'goes better' about a person's health. Use 'gets'.",
      takes: "We do not say 'takes better'. Use 'gets'.",
    },
    more: "A card for someone who is ill often says 'Get well soon'.",
  },
  'A: Why did you phone the doctor? B: My little sister has a high ___ and a cough.': {
    why: "We say 'a high temperature'. It means your body is hotter than normal, which often happens when you are ill.",
    not: {
      heat: "We say 'high heat' for cooking, not for a person who is ill.",
      warmth: "'Warmth' is a pleasant, gentle heat. We do not say 'a high warmth'.",
      degree:
        "A temperature is measured in degrees, but we do not say 'a high degree' for being ill.",
    },
    more: "We can also say 'She has a temperature' to mean she has a high one.",
  },
  'A: Have you ___ your mind about the trip? B: Yes. I want to go after all.': {
    why: "We say 'change your mind'. It means to decide something different from what you decided before.",
    not: {
      made: "For deciding, we say 'made up your mind', with 'up'. Without 'up', it does not fit.",
      moved: "We do not say 'moved your mind'. Use 'changed'.",
      turned: "We do not say 'turned your mind' for this. Use 'changed'.",
    },
    more: "'After all' here means 'in the end', after saying no before.",
  },
  'A: Is your brother good at football? B: Yes. He ___ a goal in almost every match.': {
    why: "We say 'score a goal'. It means to get the ball into the net, which gives your team a point.",
    not: {
      makes: "We do not say 'makes a goal'. Use 'scores'.",
      wins: 'A team wins a match, but a player scores a goal.',
      takes: "We do not say 'takes a goal'. Use 'scores'.",
    },
    more: 'We also score points in a game.',
  },
  'A: Can you keep a secret? B: Of course. I won’t ___ a word to anyone.': {
    why: "We say 'not say a word'. It means to tell nobody anything at all.",
    not: {
      tell: "'Tell' needs a person and a message: 'tell someone the news'. With 'a word', we use 'say'.",
      talk: "We do not say 'talk a word'. Use 'say'.",
      make: "We do not say 'make a word' here. Use 'say'.",
    },
    more: "'Keep a secret' means to tell no one. 'I won't say a word' is a promise to keep it.",
  },
  'A: Why wasn’t Sara at school? B: She ___ ill on Monday, but she is better now.': {
    why: "We say 'fall ill'. It means to become ill. In British English it is a common way to say 'got ill'.",
    not: {
      went: "We say 'went red' or 'went quiet', but not 'went ill'.",
      dropped: "We do not say 'dropped ill'. Use 'fell'.",
      made: "We do not say 'made ill' about yourself. Use 'fell'.",
    },
    more: "'Ill' and 'sick' mean the same here. In British English 'ill' is more usual.",
  },
  'A: Why are you smiling? B: My aunt just ___ me a compliment about my cooking.': {
    why: "We say 'pay someone a compliment'. A compliment is something nice you say about someone.",
    not: {
      made: "We do not say 'made me a compliment'. Use 'paid'.",
      did: "We do not say 'did me a compliment'. Use 'paid'.",
      took: "We do not say 'took me a compliment'. Use 'paid'.",
    },
    more: "We can also give someone a compliment. 'Pay' is irregular: pay, paid, paid.",
  },
  'A: We’d like a table for two, please. B: Of course. Did you ___ a table?': {
    why: "We say 'reserve a table'. It means to ask a restaurant before you arrive to have a table ready for you.",
    not: {
      keep: 'The restaurant keeps a table for you. When you ask for one, you reserve it.',
      hold: 'The restaurant can hold a table for you. When you ask for one, you reserve it.',
      make: "We make a reservation, but we do not make a table. Use 'reserve'.",
    },
    more: "In British English we often say 'book a table'. Both mean the same.",
  },
  'A: Do you like your new teacher? B: Yes. She has a great ___ of humour.': {
    why: "We say 'a sense of humour'. It means the ability to see what is funny, and to enjoy jokes.",
    not: {
      feeling: "We do not say 'a feeling of humour'. Use 'sense'.",
      idea: "We do not say 'an idea of humour'. Use 'sense'.",
      mind: "We do not say 'a mind of humour'. Use 'sense'.",
    },
    more: 'Note the British spelling: humour.',
  },
  'A: Can you speak Spanish? B: Only a little, but my brother speaks it ___.': {
    why: "We say 'speak a language fluently'. It means to speak it easily and well, without stopping to think.",
    not: {
      strongly: 'We feel strongly about something, but we do not speak a language strongly.',
      heavily: "We do not say 'speaks it heavily'. Use 'fluently'.",
      deeply: "We do not say 'speaks it deeply'. Use 'fluently'.",
    },
    more: 'A person who speaks a language fluently is a fluent speaker.',
  },
}
