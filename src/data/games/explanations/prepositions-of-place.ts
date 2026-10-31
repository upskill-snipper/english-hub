import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Where Is It?: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/prepositions-of-place.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 185 new questions in three tiers (A1,
 * A2 and B1), among them British set phrases (in hospital, on TV, by train),
 * movement (through, over, into, off), for, since and during, prepositions
 * after an adjective, a verb or a noun ("afraid of", "depend on", "the reason
 * for"), fixed phrases ("on purpose", "by heart"), and two-line dialogues in
 * which a speaker says where someone is. The 16 October explanations were
 * rewritten wherever a scene or its options changed, or where they named
 * another question's answer. Written with AI and checked against each
 * question, as the founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'The milk is _____ the fridge.': {
    why: "The milk is inside the fridge, in the closed space where we keep cold food. We use 'in' for something inside a space with walls or sides.",
    not: {
      under:
        "'Under' would put the milk on the floor below the fridge. Milk is kept inside the fridge to stay cold.",
      into: "'Into' shows movement from outside to inside: Put the milk into the fridge. With 'is', for where it is now, we use 'in'.",
      at: "'At' is for a point, such as 'at the door', or for a person at a place. Milk is kept inside the fridge, so we use 'in'.",
    },
    more: "Use 'in' for containers and rooms: in a box, in a bag, in a room. 'In' means inside something that has sides.",
    tip: "Ask yourself: is the milk inside or outside? Inside means 'in'.",
  },
  'The book is _____ the table.': {
    why: "The book is lying on the top surface of the table and touching it. We use 'on' for something that rests on a surface.",
    not: {
      in: "'In' would put the book inside the table, as if in a hole or a drawer. A table top is a flat surface, not a container.",
      at: "'At' is for a point or a place where people are, such as 'at the table' for a person who sits to eat. A book rests on it.",
      between: "'Between' needs two things, one on each side. There is only one table.",
    },
    more: "Compare: 'The book is on the table' (touching the top) and 'The book is under the table' (below it).",
    tip: "'On' fits a surface that something rests on or touches: a table, a shelf, the floor, a wall.",
  },
  'The cat is hiding _____ the box.': {
    why: "The cat is hiding, so the box must cover it. The cat is in the space below the box, so we use 'under'.",
    not: {
      on: "'On' would put the cat on top of the box, where everyone can see it. A cat that is hiding is not on top.",
      above: "'Above' would put the cat higher than the box, where everyone can see it.",
      opposite:
        "'Opposite' would put the cat across from the box, facing it. It would not be hidden.",
    },
    more: "'Under' means below something, often covered by it: under a blanket, under the bed.",
    tip: 'Think about what the cat is doing. A hiding cat is covered by the box, so it is under it.',
  },
  'There is a lovely picture _____ the wall.': {
    why: "The picture hangs flat against the wall and touches its surface. We use 'on' for things that are fixed to a wall.",
    not: {
      in: "'In' would mean the picture is inside the wall, as if it were built into it. A hanging picture is on the surface.",
      at: "'At' is for a point or a place, like 'at the door'. For something touching the surface of a wall, we use 'on'.",
    },
    more: "We also say 'a notice on the door' and 'a poster on the noticeboard'. All of these are surfaces that things are fixed to.",
  },
  'The keys are _____ my pocket.': {
    why: "A pocket is a small space with sides, and the keys are inside it. We use 'in' for things inside a space.",
    not: {
      on: "'On' would put the keys on the outside of the pocket, which is hard to picture. Keys go inside a pocket.",
      at: "'At' is for a point or a place, like 'at the door'. Keys are inside a pocket, so we use 'in'.",
    },
    more: "We say 'in my pocket' and 'in my bag': both have a space inside.",
  },
  'The roots of a tree grow _____ the ground.': {
    why: "Roots grow down into the earth, below the surface we walk on. We use 'under' for something below another thing: under the ground.",
    not: {
      above:
        "'Above' would put the roots higher than the ground, in the air. The branches and leaves are above the ground, not the roots.",
      on: "'On' would put the roots on top of the ground, where we can see them. Roots grow down into the earth.",
      over: "'Over' means higher than something, often covering it. Roots grow down into the ground, not over it.",
    },
    more: "We say 'under the ground' or 'underground' for things below the earth: roots, pipes, tunnels and the London Underground.",
    tip: "Use 'under' for something below another thing, and 'above' or 'over' for something higher.",
  },
  'Write your name _____ the top of the page.': {
    why: "The top of the page is a position on the page, not a space that you go inside. We use 'at' with a position like this.",
    not: {
      in: "'In' is for inside a space, like a box. The top of a page is a position, so we say 'at the top'.",
      under: "'Under' would put your name below the top of the page, not at it.",
      behind:
        "'Behind' would put your name on the back of the page, on the other side. You write on the front.",
    },
    more: "We say 'at the top' of a page, and 'at the back' or 'at the front' of a room.",
    tip: 'In an exam, write your name at the top of the answer sheet, as the instructions say.',
  },
  'The spider is _____ the ceiling.': {
    why: "A spider walks on the ceiling as it would on any surface, touching it. We use 'on' for something that touches a surface, even upside down.",
    not: {
      in: "'In' would put the spider inside the ceiling, in a hole. It is on the surface.",
      at: "'At' is for a point or a place, like 'at the door'. A spider touching the ceiling is 'on' it.",
    },
    more: "'On' means touching a surface, even if the surface is above you: on the ceiling, on the underside of a bridge.",
  },
  'Many British houses have a small cupboard _____ the stairs.': {
    why: "In many British houses there is a small cupboard in the space below the stairs. We say 'the cupboard under the stairs', because the stairs are above it.",
    not: {
      on: "'On' would put the cupboard on the steps, where people walk. The cupboard is built into the space below them.",
      at: "'At the stairs' is not how we say where a cupboard is built. The space for it is below the stairs, so we say 'under'.",
    },
    more: "'Under the stairs' is where many families keep things like a vacuum cleaner and coats.",
    tip: "Use 'under' for a space below something: under the stairs, under the bed, under the table.",
  },
  'There is some money _____ my wallet.': {
    why: "A wallet is a small case, and the money is inside it. We use 'in' for things inside a container.",
    not: {
      on: "'On' would put the money on the outside of the wallet. Money is kept inside it.",
      at: "'At' is for a point or a place, like 'at the bank'. It does not say the money is inside.",
    },
    more: "Wallets, bags, boxes and drawers are containers. Things inside them are 'in' the container: in my bag, in the drawer.",
  },
  'The sun went _____ a cloud.': {
    why: 'Clouds are much nearer to us than the sun, so a cloud can hide the sun from us. When that happens, we say the sun went behind the cloud.',
    not: {
      'in front of':
        "'In front of' would put the sun nearer to us than the cloud. The sun is far beyond the clouds, so it can only go behind one.",
      under:
        "'Under' would put the sun below the cloud. From the ground, the cloud hides the sun because it is in front of it.",
      on: "'On' would put the sun on top of the cloud, touching it. The sun is very far away, beyond the clouds.",
    },
    more: "We use 'behind' when one thing hides another from us: The moon went behind a hill. The cat ran behind the sofa.",
    tip: 'Ask yourself which thing is nearer to you. The thing that hides the other is in front; the hidden thing is behind.',
  },
  'I could not see the board, because a tall boy was sitting _____ me.': {
    why: 'The board is at the front of the room. The tall boy hid it from me, so he was between me and the board: he was sitting in front of me.',
    not: {
      behind:
        'A boy sitting behind me could not hide the board, because the board is in front of me.',
      'next to': 'A boy sitting next to me, at my side, would not hide the board from me.',
    },
    more: "'In front of' means nearer the front, or ahead of someone. Its opposite is 'behind': if I sit in front of Tom, then Tom sits behind.",
    tip: 'When something blocks your view, it is between you and what you want to see.',
  },
  'Sara and I share a desk, so she sits _____ me.': {
    why: "When two pupils share a desk, they sit side by side at it. So Sara sits beside me, and we use 'next to'.",
    not: {
      behind:
        "'Behind' would put Sara at the desk at my back. We share one desk, so she sits at my side.",
      'in front of':
        "'In front of' would put Sara at the desk ahead of me. We share one desk, so she sits at my side.",
      between: "'Between' needs two people or things, one on each side. Here there is only me.",
    },
    more: "'Next to' means at the side of someone or something, with nothing between them: Sit next to me.",
    tip: "Use 'next to' for people side by side: I sit next to my best friend.",
  },
  'On a computer keyboard, the Q key is _____ the W key.': {
    why: 'On a keyboard, Q and W are side by side in the top row of letters, with no key between them. So the Q key is next to the W key.',
    not: {
      under: "'Under' would put Q in the row below W. Q and W are in the same row.",
      above: "'Above' would put Q in the row above W. Q and W are in the same row.",
      opposite: "'Opposite' would put Q across from W, facing it. The two keys are side by side.",
    },
    more: 'The top row of letters on most British keyboards starts Q, W, E, R, T, Y, which is why this kind of keyboard is called QWERTY.',
    tip: 'Look at a keyboard and practise: the A key is under the Q key, and the S key is beside the A key.',
  },
  'In a queue, the second person stands _____ the first person.': {
    why: 'In a queue, people stand one after another. The first person is at the front, so the second person stands behind them.',
    not: {
      'in front of':
        "'In front of' would put the second person before the first, at the front. In a queue, the first person is at the front.",
      'next to':
        "'Next to' would put them side by side. In a queue, people stand one behind another.",
      opposite:
        "'Opposite' would put them across from each other, face to face. A queue faces one way, one person behind another.",
    },
    more: "British people often say 'Please join the back of the queue'. The person at the front is served first.",
    tip: "In a line of people, use 'in front of' for the person ahead of you and 'behind' for the person after you.",
  },
  'Please do not stand _____ the TV. I cannot see the screen.': {
    why: 'The person is blocking the screen, so they are between the TV and the people watching. A person who blocks your view of something is standing in front of it.',
    not: {
      behind:
        'Standing behind the TV would not block the screen. The person must be between the screen and the people watching.',
      'next to': 'Standing next to the TV, at its side, would not block the screen.',
    },
    more: "'In front of' is three words, but it works like one preposition: in front of the house, in front of the school.",
    tip: 'Learn the opposite pair together: in front of and behind.',
  },
  'Two houses that share a wall are _____ each other.': {
    why: 'Houses that share a wall are joined side by side, like two houses in a terrace. So they are next to each other.',
    not: {
      opposite:
        'Houses opposite each other face each other across a road. They do not share a wall.',
      between:
        "'Between' needs something in the middle of two others. Two houses side by side are next to each other.",
    },
    more: 'In Britain, a semi-detached house shares one wall with the house next door. People call the family there their neighbours.',
    tip: "Use 'next door to' for the house beside yours: She lives next door to us.",
  },
  'He is hiding _____ the curtain.': {
    why: "He is hiding, so the curtain must cover him. He stands with the curtain between him and the room, so we use 'behind'.",
    not: {
      'in front of':
        "'In front of' would put him at the front of the curtain, where everyone can see him. He is hiding.",
      on: "'On' would put him on the curtain, for example hanging from it. A person hides behind it.",
      'next to': "'Next to' would put him beside the curtain, where he could still be seen.",
    },
    more: "'Behind' is a common word for hiding: behind a door, behind a tree. We also hide under a bed.",
  },
  'The letter B comes _____ A and C.': {
    why: "In the alphabet, B has A on one side and C on the other. We use 'between' for something that has one thing on each side.",
    not: {
      in: "'In' is for inside a space or container. Letters in a row are not inside each other.",
      behind: "'Behind' would put B at the back of both A and C. B comes after A but before C.",
      above:
        "'Above' would put B higher than A and C, as in a pile. In the alphabet they are in a line.",
    },
    more: "'Between' is often used with 'and': between A and C, between nine and ten o’clock.",
    tip: "Use 'between' for separate things that you name. Use 'among' for a group: 'The cat sat among the flowers.'",
  },
  'The lamp hangs _____ the table.': {
    why: "A lamp that hangs is fixed to the ceiling and comes down over the table, higher than it. We use 'above' for something at a higher level.",
    not: {
      under:
        "'Under' would put the lamp lower than the table, near the floor. A lamp that hangs from the ceiling is higher.",
      in: "'In' would put the lamp inside the table, which makes no sense.",
      between: "'Between' needs two things, one on each side. There is only one table.",
    },
    more: "'Above' means higher than something. The lamp hangs in the air over the table.",
  },
  'Last night the temperature fell _____ zero.': {
    why: 'When it is very cold, the temperature goes lower than zero degrees. We say it fell below zero, because it went to a lower level.',
    not: {
      above:
        "'Above zero' means warmer than zero. The temperature fell, so it went lower, not higher.",
      at: "'Fell at zero' is not English. To say it got colder than zero, we say 'fell below zero'.",
      in: "'Fell in zero' is not English. We say 'below zero' for temperatures colder than zero.",
    },
    more: "We also say 'ten degrees below zero', or 'minus ten'. Water turns to ice at zero degrees Celsius.",
    tip: "Use 'above' and 'below' for levels on a scale: above average, below zero.",
  },
  'In a game of chess, the two players sit _____ each other.': {
    why: 'In chess, the board sits on a table and the players face each other across it. Two people who face each other across something are opposite each other.',
    not: {
      'next to':
        "'Next to' would put the players side by side. In chess they face each other across the board.",
      behind:
        "'Behind each other' would put one player at the back of the other. They need to face each other to play.",
      between: "'Between' needs something in the middle. Here the board is between the players.",
    },
    more: "We use 'opposite' for people or buildings that face each other: The shop is opposite the bank.",
    tip: "When two things face each other across a table or a road, use 'opposite'.",
  },
  'The village lies _____ two hills.': {
    why: "'Between' goes with two things, one on each side. The village lies in the low land with a hill on each side of it, so it lies between two hills.",
    not: {
      at: "'At' is for a point, like 'at the station'. It does not say where the village is beside the hills.",
      in: "'In two hills' is not English. With two things, one on each side, we use 'between'.",
    },
    more: "Use 'between' for two things: 'between the river and the road'.",
  },
  'Birds often build their nests high _____ the ground.': {
    why: "Birds build nests in trees and on cliffs, to keep their eggs safe. That is at a higher level than the ground, so we say 'high above the ground'.",
    not: {
      below: "'Below the ground' would put the nest under the earth. Birds' nests are up in trees.",
      under:
        "'Under the ground' would put the nest in the earth, like a rabbit's home. Birds build high up.",
    },
    more: "'High above' is a common pair: high above the city, high above the sea. 'High' tells us how far above.",
    tip: "Use 'above' for a higher level and 'below' for a lower one: above the clouds, below the surface.",
  },
  'Most of an iceberg is _____ the water.': {
    why: 'An iceberg floats, but most of it is hidden under the sea. Only a small top part shows. So most of an iceberg is below the water.',
    not: {
      above:
        'Only a small part of an iceberg is above the water. Most of it is lower, under the surface.',
      on: "'On the water' would mean resting on top, like a boat. Most of an iceberg is under the surface.",
    },
    more: "This is why people say 'the tip of the iceberg': the small part you see is only a little of the whole thing.",
    tip: "Use 'below' for a lower level: below the water, below the line, below the knee.",
  },
  'On a football pitch, the centre spot is _____ the two goals.': {
    why: 'The centre spot is halfway along the pitch, with one goal at each end. Something with one thing on each side is between them.',
    not: {
      behind: 'Behind the goals is outside the pitch. The centre spot is in the middle of it.',
      'in front of':
        "In football, 'in front of the goal' means close to one goal, near its goal line. The centre spot is halfway along the pitch, with a goal at each end, so it is between them.",
    },
    more: 'Each half of the pitch has a goal at its end. A match starts with the ball on the centre spot.',
    tip: "Use 'between' with two things: between the goals, between the trees, between you and me.",
  },
  'The roof of a house is _____ the top floor.': {
    why: 'The roof is the highest part of a house, over all the floors. So it is above the top floor.',
    not: {
      below:
        "'Below' would put the roof lower than the top floor. The roof is the highest part of the house.",
      under:
        "'Under' would put the roof beneath the top floor. The roof covers the house from above.",
    },
    more: 'In some houses there is a room in the roof, called a loft or an attic, above the top floor.',
    tip: 'Learn the pairs together: above and below, over and under.',
  },
  'I will meet you _____ the bus stop.': {
    why: "A bus stop is a point where people wait, so it is a good meeting point. We use 'at' for a point or a place like this.",
    not: {
      in: "'In' is for inside a space with sides, like a room. A bus stop is an open point on the street.",
      on: "'On' is for a surface, like 'on the floor'. A bus stop is a place, not a surface.",
      to: "'To' shows movement towards a place: go to the bus stop. When we meet there, we are at it.",
    },
    more: "We use 'at' for a point where people meet or wait.",
  },
  'She lives _____ Manchester.': {
    why: "Manchester is a city, a large area, and she lives inside it. We use 'in' for cities, towns and countries.",
    not: {
      at: "'At' is for a small point, like 'at the station', or a full address, like 'at 12 Oak Road'. A whole city is too large.",
      on: "'On' is for a surface or a street name, like 'on Oak Road'. A city is an area, so we say 'in'.",
      to: "'To' shows movement: She is going to Manchester. To say where she lives, we use 'in'.",
    },
    more: "Use 'in' for a whole area: in Manchester, in England, in a village.",
  },
  'My flat is _____ the third floor.': {
    why: "We use 'on' with the floors of a building, as if each floor is a surface that the flat is on.",
    not: {
      in: "'In' would suggest the flat is inside the floor itself. We say 'on the third floor'.",
      at: "'At' is for a point, like 'at the door'. For the floors of a building, we use 'on'.",
      to: "'To' shows movement: Take the lift to the third floor. To say where the flat is, we use 'on'.",
    },
    more: "We use 'on' with every floor of a building: on the first floor, on the fifth floor.",
  },
  'The children are _____ home this evening.': {
    why: "'At home' is a fixed phrase for being in your own house or flat. We do not use 'the' or 'in' with it.",
    not: {
      in: "We do not say 'in home' for being in your house. We say 'at home'.",
      on: "'On' is for a surface. 'On home' is not a phrase in English.",
      to: "We do not say 'to home' at all: we say 'go home'. To say where the children are, we use 'at home'.",
    },
    more: "We use 'at' with a few places when we mean what we usually do there. Learn 'at home' as one phrase.",
  },
  'We stayed _____ a small hotel near the sea.': {
    why: "A hotel is a building, and we stayed inside it. We use 'in' for being inside a building.",
    not: {
      on: "'On' would put us on the roof or on the outside of the hotel, not inside it.",
      to: "'To' shows movement: We went to a small hotel. To say where we slept, we use 'in'.",
    },
    more: "We can also say 'at a small hotel'. Both are common. 'At' names the place, and 'in' says we were inside the building.",
  },
  'There is a famous painting _____ the museum.': {
    why: "The painting is inside the museum building, where visitors can see it. We use 'in' for something inside a building.",
    not: {
      on: "'On' would put the painting on the outside of the building, like a poster. A famous painting is kept inside.",
      to: "'To' shows movement: We went to the museum. The painting is inside it, so we use 'in'.",
    },
    more: "We can also say 'at the museum' for the place. 'In the museum' says it is inside the building.",
  },
  'He is waiting _____ the corner of the street.': {
    why: "The corner of a street is a point where two streets meet. We use 'at' for a point.",
    not: {
      in: "'In the corner' is for the inside corner of a room or a box. For a street corner we use 'at' (or 'on').",
      to: "'To' shows movement: He walked to the corner. When he waits there, he is at it.",
    },
    more: "People also say 'on the corner of the street'. For the corner inside a room, we say 'in the corner'.",
  },
  'The shop is _____ the high street.': {
    why: "The shop is along the high street, a road with shops on it. We use 'on' with the name of a street or road.",
    not: {
      at: "'At' is for a point or a full address, like 'at 12 High Street'. For a shop somewhere along the street, we say 'on the high street'.",
      to: "'To' shows movement: She went to the high street. To say where the shop is, we use 'on'.",
    },
    more: "'In the High Street' is also used in Britain. With most street and road names, 'on' is the safe choice: on Oak Road.",
  },
  'The students are _____ the classroom now.': {
    why: "A classroom is a room with walls, and the students are inside it. We use 'in' for being inside a room.",
    not: {
      at: "'At' is for a place seen as a whole, like 'at school'. For a room with walls, we say 'in the classroom'.",
      on: "'On' is for a surface, like 'on the floor'. The students are inside the room, not on a surface.",
      to: "'To' shows movement: The students went to the classroom. Now they are inside it, so we use 'in'.",
    },
    more: "Use 'in' for rooms: in the classroom, in the hall, in the library.",
  },
  'I saw her _____ the party last night.': {
    why: "A party is an event that people go to, and we say that someone was at it. We use 'at' for events like a party, a concert or a meeting.",
    not: {
      in: "'In the party' is not used in standard English. We say 'at the party'. 'In' is for the room or building where it was.",
      on: "'On' is for a surface. A party is an event, so we do not say 'on the party'.",
      to: "'To' shows movement: I went to the party. When I saw her there, she was at the party.",
    },
    more: "We say 'at' for events: at a wedding, at a concert, at the match, at a meeting.",
  },
  "The lesson starts _____ nine o'clock.": {
    why: "'Nine o’clock' is an exact time on the clock. We use 'at' for exact times.",
    not: {
      in: "'In' is for longer times, like 'in July' or 'in the morning'. Nine o’clock is one exact moment.",
      on: "'On' is for days and dates, like 'on Monday'. Nine o’clock is a time of day.",
      by: "'By' means 'at or before'. 'The lesson starts by nine' would say it starts at nine or before, not exactly at nine.",
    },
    more: "Use 'at' with clock times: at six, at quarter to four, at ten past two.",
  },
  'My birthday is _____ July.': {
    why: "July is a month, a long period of time. We use 'in' with months, seasons and years.",
    not: {
      at: "'At' is for exact times, like 'at six o’clock'. A month is a long period.",
      on: "'On' is for days and dates, like 'on 5 July'. July on its own is a whole month.",
      by: "'By July' means 'not later than July', for something that must be done before then. A birthday is in July.",
    },
    more: "Compare: 'in July' (the month) and 'on 5 July' (the day). We use 'on' only when a day or a date is named.",
    tip: "Give the full date when you can: 'My birthday is on 5 July.'",
  },
  'We have a meeting _____ Monday.': {
    why: "Monday is a day of the week. We use 'on' with days and dates.",
    not: {
      at: "'At' is for exact times, like 'at ten o’clock'. Monday is a whole day.",
      in: "'In' is for months, seasons and years, like 'in July'. A day of the week needs 'on'.",
      by: "'By' means 'at or before', so the meeting would be on Monday or before it. 'On Monday' names the day.",
    },
    more: "We also use 'on' with dates: on 5 May, on 23 June.",
  },
  'It often snows _____ winter.': {
    why: "Winter is a season, and a season lasts for months. We use 'in' with seasons.",
    not: {
      at: "'At' is for exact times, like 'at noon'. A season is a long period.",
      on: "'On' is for days and dates. Winter is a season, not a day.",
      by: "'By winter' means 'before winter comes'. To say when it snows, we use 'in winter'.",
    },
    more: "Months, seasons and years all use 'in': in spring, in May, in 2030.",
  },
  'I usually read _____ night before sleeping.': {
    why: "'At night' is a fixed phrase for the time when it is dark. We do not say 'in night' or 'on night'.",
    not: {
      in: "'In night' is not English. We say 'at night' for the dark hours in general, and 'in the night' for one particular night.",
      on: "'On' is for days and dates, like 'on Friday'. With the word 'night' alone we say 'at night'.",
    },
    more: "Learn 'at night' as one phrase. Most other parts of the day take a different word.",
  },
  'The shop opens _____ the morning.': {
    why: "'The morning' is the part of the day before twelve o'clock. We use 'in' with a part of the day: in the morning.",
    not: {
      at: "'At' is for exact times or fixed phrases like 'at night'. We do not say 'at the morning'.",
      on: "'On' is for days and dates, like 'on Monday'. For a part of the day on its own, we use 'in'.",
      by: "'By the morning' means 'before the morning comes'. For when the shop opens, we use 'in the morning'.",
    },
    more: "When a day is named, the word changes: 'on Sunday morning', but 'in the morning'.",
  },
  "We always celebrate _____ New Year's Day.": {
    why: "New Year’s Day is one named day. We use 'on' with a named day or date.",
    not: {
      at: "'At' is used for a holiday period, like 'at Christmas'. A single named day uses 'on'.",
      in: "'In' is for months, seasons and years, like 'in January'. A named day needs 'on'.",
      by: "'By' means 'at or before', so it would suggest celebrating before the day or on it.",
    },
    more: "'On' goes with named days: on Boxing Day, on Easter Sunday.",
  },
  'She was born _____ 2009.': {
    why: "2009 is a year. We use 'in' with years, as we do with months and seasons.",
    not: {
      at: "'At' is for exact times, like 'at noon'. A year is a long period.",
      on: "'On' is for days and dates, like 'on 4 May'. A year on its own needs 'in'.",
      by: "'By' means 'at or before'. 'Born by 2009' would not tell us the year.",
    },
    more: "With a full date, use 'on': 'She was born on 4 May 2009.' With only the year, use 'in': 'in 2009'.",
  },
  'The train leaves _____ half past six.': {
    why: "'Half past six' is an exact time on the clock. We use 'at' for exact times.",
    not: {
      in: "'In' is for longer periods, like 'in July'. We do not use it for a clock time.",
      on: "'On' is for days and dates. Half past six is a time of day.",
    },
    more: "Use 'at' with clock times: at 6.30, at ten to eight. 'In' counts time from now: The train leaves in ten minutes.",
  },
  'Many people relax _____ the weekend.': {
    why: "In British English we say 'at the weekend', a fixed phrase for Saturday and Sunday.",
    not: {
      in: "'In the weekend' is not used in British English. We say 'at the weekend'.",
      by: "'By' means 'at or before'. 'By the weekend' would mean before it starts, not during it.",
    },
    more: "Americans say 'on the weekend'. British English says 'at the weekend'. Both are understood.",
    tip: "In British English, use 'at the weekend'. For one named day, use 'on': on Thursday.",
  },
  'The film begins _____ midnight.': {
    why: "Midnight is an exact moment, when one day ends and the next begins. We use 'at' with exact times: at midnight, at noon.",
    not: {
      in: "'In' is for longer periods, like 'in the evening'. Midnight is one exact moment.",
      on: "'On' is for days and dates. Midnight is a time, not a day.",
      by: "'By' means 'at or before'. 'Begins by midnight' would say it begins at midnight or before it.",
    },
    more: "We say 'at midnight' and 'at noon'. Each one names an exact moment.",
  },
  'We are going on holiday _____ August.': {
    why: "August is a month, a long period of time. We use 'in' with months.",
    not: {
      at: "'At' is for exact times, like 'at five o’clock'. A month is a long period.",
      on: "'On' is for days and dates, like 'on 12 August'. August on its own needs 'in'.",
      by: "'By August' means 'not later than August'. To say when the holiday is, we use 'in August'.",
    },
    more: "With a date, the word changes: 'in August', but 'on 12 August'.",
  },
  'My appointment is _____ Friday afternoon.': {
    why: "'Friday afternoon' names a day, and we use 'on' with days even when we add a part of the day. So it is 'on Friday afternoon'.",
    not: {
      at: "'At' is for exact times, like 'at three o’clock'. Friday afternoon is part of a named day, not a clock time.",
      in: "'In the afternoon' is right on its own, but when a day is named first we say 'on Friday afternoon'.",
      by: "'By Friday afternoon' would mean not later than Friday afternoon. It does not name the time of the appointment.",
    },
    more: "Compare: 'in the evening', but 'on Friday evening'. Once you name the day, use 'on'.",
  },
  'The library closes early _____ Christmas Eve.': {
    why: "Christmas Eve is one named day, 24 December. We use 'on' with a named day or date.",
    not: {
      at: "'At' is used for the whole holiday time, as in 'at Christmas'. A single named day uses 'on': 'on Christmas Eve'.",
      in: "'In' is for months, seasons and years. Christmas Eve is one day.",
      by: "'By' means 'at or before'. 'Closes early by Christmas Eve' would not name the day.",
    },
    more: "'On' goes with named days: on Christmas Eve, on Boxing Day, on my birthday.",
  },
  'Put the ice cream _____ the freezer before it melts.': {
    why: "A freezer keeps food frozen inside it, behind a closed door. To keep ice cream cold, we put it inside the freezer, so we use 'in'.",
    not: {
      on: "'On the freezer' would put the ice cream on top, outside it, where it would melt.",
      under: "'Under the freezer' would put it on the floor below, where it would melt.",
      'next to': "'Next to the freezer' would put it beside it, outside, where it would melt.",
    },
    more: "We put food 'in' the freezer, the cupboard and the oven, because they all have a space inside.",
    tip: "Ask yourself: inside or outside? Inside a box, a freezer or a room is 'in'.",
  },
  'Your eyebrows are _____ your eyes.': {
    why: "Your eyebrows are the lines of hair on your face, higher than your eyes. We use 'above' for something at a higher level than another thing.",
    not: {
      below:
        "'Below your eyes' would put them lower down, on your cheeks. Eyebrows are higher than your eyes.",
      'next to':
        "'Next to your eyes' would put them at the sides of your eyes. Eyebrows are higher up.",
    },
    more: 'Practise with your own face: your nose is below your eyes, and your mouth is below your nose.',
    tip: "Use 'above' and 'below' to say where things are on a face or a page.",
  },
  'The post office is _____ the bank and the chemist.': {
    why: "The scene names two buildings, the bank and the chemist, and the post office has one of them on each side. We use 'between' for something with one thing on each side.",
    not: {
      on: "'On' would put the post office on top of the bank and the chemist, which does not fit a street of shops.",
      under:
        "'Under' would put the post office below the two buildings, like a room under the ground. It does not say it is in the middle.",
      in: "'In' would put the post office inside the bank and the chemist, which are two other buildings.",
    },
    more: "'Between' is often used with 'and': between the bank and the chemist.",
  },
  'A small mat lies _____ the door of our flat.': {
    why: "A doormat lies just outside the door, where people step on it as they come in. We use 'in front of' for something at the front of another thing.",
    not: {
      between: "'Between' needs two things, one on each side. There is only one door.",
      in: "'In' would put the mat inside the door, which does not make sense for a flat mat.",
      above: "'Above' would put the mat higher than the door. A mat lies on the floor.",
    },
    more: "'In front of' is the opposite of 'behind'. If something is in front of the door, you reach it before you reach the door.",
  },
  'The children are playing _____ the garden.': {
    why: "A garden is an area with edges, like a fence or a wall, and the children are inside it. We use 'in' for being inside an area: in the garden.",
    not: {
      on: "'On' is for a surface, like 'on the grass'. For being inside the garden as a whole, we say 'in the garden'.",
      at: "'At' is for a point or a place we visit, like 'at the shop'. Playing inside the garden is 'in the garden'.",
      to: "'To' shows movement towards a place: Go to the garden. To say where the children are playing, we use 'in'.",
    },
    tip: "Use 'in' for areas with edges: in the garden, in the playground, in a field.",
  },
  'There is a goldfish _____ the bowl.': {
    why: "A goldfish lives in water, and the water is inside the bowl. We use 'in' for something inside a container.",
    not: {
      on: "'On the bowl' would put the fish on top of the bowl, out of the water. A goldfish swims inside it.",
      under:
        "'Under the bowl' would put the fish below the bowl, on the table. A fish must be inside, in the water.",
      at: "'At' is for a point or a place, like 'at the door'. A fish inside a bowl is 'in' it.",
    },
    tip: "For things inside a container, use 'in': in the bowl, in the jar, in the tin.",
  },
  'Paris is _____ France.': {
    why: "Paris is a city, and France is the country around it. We use 'in' for a place inside a bigger area: Paris is in France.",
    not: {
      at: "'At' is for a point or a small place, like 'at the station'. A whole country is a big area, so we use 'in'.",
      on: "'On' is for a surface. A country is an area, so we say 'in France'.",
      to: "'To' shows movement: We are going to France. To say where Paris is, we use 'in'.",
    },
    more: "Use 'in' for big areas: in a town, in a country, in Europe.",
    tip: 'Say where your town is: Leeds is in England. Swansea is in Wales.',
  },
  'Mum is _____ the bathroom.': {
    why: "A bathroom is a room with walls and a door, and Mum is inside it. We use 'in' for being inside a room.",
    not: {
      at: "'At' is for a point or a place seen as a whole, like 'at the shop'. For being inside a room, we say 'in the bathroom'.",
      on: "'On' is for a surface, like 'on the floor'. A room is a space you are inside, so we use 'in'.",
      to: "'To' shows movement: She went to the bathroom. To say where she is now, we use 'in'.",
    },
    tip: "Rooms take 'in': in the kitchen, in the hall, in my bedroom.",
  },
  'There are six eggs _____ the box.': {
    why: "An egg box holds the eggs inside it, so they do not break. We use 'in' for things inside a container.",
    not: {
      on: "'On the box' would put the eggs on top of the box, where they could roll off. Eggs are kept inside it.",
      at: "'At' is for a point or a place. Things inside a box are 'in' it.",
      under: "'Under the box' would put the eggs below it. They are kept inside it.",
    },
    tip: "Count things inside a container with 'in': There are two apples in the bag.",
  },
  'I am holding a pen _____ my hand.': {
    why: "When you hold something, your fingers close round it, so it is inside your hand. We say 'in my hand'.",
    not: {
      on: "'On my hand' would put the pen on the back or top of your hand, resting there. When you hold it, it is in your hand.",
      at: "'At' is for a point or a place. A pen you are holding is in your hand.",
      by: "'By' means near or next to. A pen you are holding is not just near your hand: it is in it.",
    },
    tip: "Use 'in' for things you hold: in my hand, in my arms.",
  },
  'There is a sticker _____ my laptop.': {
    why: "A sticker is stuck to the outside of the laptop, on its surface. We use 'on' for something that touches or is fixed to a surface.",
    not: {
      in: "'In my laptop' would put the sticker inside the computer. A sticker is stuck to the outside.",
      at: "'At' is for a point or a place, like 'at the door'. A sticker on a surface is 'on' it.",
    },
    tip: "Use 'on' for things stuck to a surface: a sticker on a laptop, a poster on a door.",
  },
  'She wears a ring _____ her finger.': {
    why: "A ring goes round the finger and touches it, on the outside. We say 'a ring on her finger'.",
    not: {
      in: "'In her finger' would put the ring inside the finger, which is not possible.",
      at: "'At' is for a point or a place. A ring that touches the finger is 'on' it.",
      by: "'By' means near or next to. A ring she wears is on her finger, not near it.",
    },
    tip: "Things we wear take 'on': a ring on her finger, a watch on my wrist.",
  },
  'Please write the date _____ the board.': {
    why: "We write on the surface of a board, so the words touch it. We use 'on' for writing on a surface.",
    not: {
      in: "'In the board' would put the date inside the board. We write on its surface.",
      at: "'At the board' is for a person standing there: The teacher is at the board. The writing itself is on it.",
      to: "'To' shows movement towards something. Writing goes on the board, so we use 'on'.",
    },
    tip: "Use 'on' for writing and pictures on a surface: on the board, on a card, on a T-shirt.",
  },
  'There is snow _____ the roof.': {
    why: "Snow lies on the top surface of the roof, touching it. We use 'on' for something resting on a surface.",
    not: {
      in: "'In the roof' would put the snow inside it, in the space under the tiles. Snow lies on top.",
      at: "'At' is for a point or a place. Snow lying on a surface is 'on' it.",
    },
    tip: "Use 'on' for things lying on top of a surface: snow on the roof, leaves on the path.",
  },
  'Hang your coat _____ the hook.': {
    why: "A coat hangs from a hook, touching it and held by it. We use 'on' for things that hang from a hook or a nail.",
    not: {
      in: "'In the hook' would put the coat inside the hook, which is far too small.",
      at: "'At' is for a point or a place. A coat held by a hook is 'on' it.",
      under: "'Under the hook' would put the coat below it, not hanging from it.",
    },
    tip: "Use 'on' for hanging things: a coat on a hook, a picture on a nail.",
  },
  'Wait for me _____ the door.': {
    why: "The door is a point where you wait. We use 'at' for a point or a small place: at the door, at the gate.",
    not: {
      on: "'On the door' is for something fixed to it, like a sign. A person waits at the door.",
      to: "'To' shows movement: Come to the door. When you wait there, you are at it.",
    },
    tip: "Use 'at' for meeting and waiting points: at the gate, at the front desk.",
  },
  'Turn left _____ the traffic lights.': {
    why: "The traffic lights are the point where you turn. We use 'at' for a point: turn left at the traffic lights.",
    not: {
      in: "'In the traffic lights' would put you inside them. They are a point on the road, so we use 'at'.",
      on: "'On the traffic lights' would put you on top of them. We turn at them.",
      to: "'To' shows movement towards a place: Drive to the traffic lights. The turn happens at them.",
    },
    more: "Directions use 'at' for the point where you turn or stop: at the crossing, at the church.",
    tip: "To give directions, name the point with 'at': Stop at the post box.",
  },
  'Sit _____ the table. Dinner is ready.': {
    why: "To eat a meal, we sit on chairs round the table. We say 'sit at the table' for sitting there to eat or work.",
    not: {
      on: "'Sit on the table' means sitting on top of it, which people do not do at dinner.",
      in: "'In the table' would put you inside the table, which is not possible.",
      to: "'To' shows movement: Come to the table. When you are there to eat, you sit at it.",
    },
    tip: 'Learn these: sit at the table, sit at your desk, sit on a chair.',
  },
  'My brother is _____ school today.': {
    why: "In British English we say 'at school' for being at the place where pupils have lessons. My brother is there, having lessons today.",
    not: {
      on: "'On school' is not English. We say 'at school'.",
      to: "'To' shows movement: He goes to school every day. To say where he is now, we use 'at'.",
      by: "'By school' would mean near the school. He is there, having lessons, so he is at school.",
    },
    tip: "When you are at a place to do the usual thing there, use 'at': at school for lessons.",
  },
  'Dad is _____ work today.': {
    why: "'At work' means at the place where you do your job. Dad is there today, doing his job, so we say 'at work'.",
    not: {
      on: "'On work' is not English. We say 'at work'.",
      to: "'To' shows movement: Dad goes to work by bus. To say where he is, we use 'at'.",
    },
    tip: "Ask 'Where is he?' and answer: He is at work. She is at the shops.",
  },
  "Let's have a picnic _____ that big tree.": {
    why: "A picnic happens on the ground, and the tree's branches are higher, over the people. We say 'under the tree' for sitting below its branches.",
    not: {
      on: "'On the tree' would put the picnic up in the branches. People sit on the ground for a picnic.",
      in: "'In the tree' would put you up among the branches, like a bird. A picnic is on the ground, below them.",
    },
    tip: "Use 'under' for something below another thing: under a tree, under an umbrella.",
  },
  'Wednesday comes _____ Tuesday and Thursday.': {
    why: 'In the week, Tuesday comes first, then Wednesday, then Thursday. Wednesday has Tuesday on one side and Thursday on the other, so it comes between them.',
    not: {
      after:
        "Wednesday comes after Tuesday, but not after Thursday. With both days named, only 'between' fits.",
      before:
        "Wednesday comes before Thursday, but not before Tuesday. With both days named, only 'between' fits.",
      on: "'On' is for the day something happens: on Wednesday. It cannot join two days like this.",
    },
    tip: "Use 'between' with two things joined by 'and': between Tuesday and Thursday, between lunch and dinner.",
  },
  'I go _____ school with my sister.': {
    why: "'Go' shows movement towards a place. We use 'to' for the place you move towards: go to school.",
    not: {
      at: "'At' is for where you are, not where you are going: I am at school. With 'go', we use 'to'.",
      in: "'In' is for being inside a place. With 'go', we use 'to' for the place we move towards.",
      on: "'On' is for a surface or a bus: on the bus. With 'go' and a place, we use 'to'.",
    },
    tip: "After 'go', 'come', 'walk' and 'run', use 'to' for where you are going: run to the gate.",
  },
  'It is late, so please go _____ bed now.': {
    why: "'Go to bed' is a fixed phrase for going to sleep. 'Go' shows movement, so we use 'to'.",
    not: {
      at: "'At bed' is not English. We say 'go to bed', or 'in bed' for being in it.",
      in: "'Go in bed' is not English. We say 'go to bed'. When you are there, you are 'in bed'.",
      on: "'Go on bed' is not English. The phrase is 'go to bed'.",
    },
    tip: "Learn 'go to bed' as one phrase, like 'go to sleep'.",
  },
  'Come _____ my house after school.': {
    why: "'Come' shows movement towards a place. We use 'to' for the place: come to my house.",
    not: {
      at: "'At' is for where you are: I am at my house. With 'come', we use 'to'.",
      in: "'In' is for being inside. With 'come', we use 'to' for the place we move towards.",
      on: "'On' is for a surface. With 'come' and a place, we use 'to'.",
    },
    tip: "Invite a friend with 'Come to ...': Come to my party.",
  },
  'My family comes _____ Poland.': {
    why: "'Come from' tells us where someone started, or where their family lived first. My family's home country is Poland, so we say 'comes from Poland'.",
    not: {
      in: "'In' tells us where someone is now: We live in England. 'Come from' tells us where we started.",
      at: "'At' is for a point, like 'at the station'. With 'come', the start of the journey takes 'from'.",
      of: "'Of' does not go with 'come' in this meaning. We say 'come from'.",
    },
    tip: 'Ask a new friend: Where do you come from? Answer: I come from Ghana.',
  },
  'He lives _____ a small village near York.': {
    why: "A village is an area with houses and streets, and he lives inside it. We use 'in' for villages, towns and cities.",
    not: {
      at: "'At' is for a point or a full address. A whole village is an area, so we use 'in'.",
      on: "'On' is for a surface. A village is an area, so we use 'in'.",
      to: "'To' shows movement: He moved to a small village. To say where he lives, we use 'in'.",
    },
    tip: "Use 'in' with any place you live in: in a village, in a town, in a city.",
  },
  'There is a hole _____ my sock.': {
    why: "A hole goes through the cloth of the sock, so it is part of it. We say 'a hole in my sock'.",
    not: {
      on: "'On my sock' would mean something sitting on top of the sock, like a sticker. A hole is in the sock itself.",
      at: "'At' is for a point or a place. A hole that goes through the sock is 'in' it.",
      under: "'Under my sock' would put something below it, on your foot. The hole is in the sock.",
    },
    tip: "We say 'a hole in' and 'a mark on': a hole in my jeans, a mark on my shirt.",
  },
  'The bus comes _____ 8.15 every morning.': {
    why: "8.15 is an exact time on the clock. We use 'at' for exact times: at 8.15, at four o'clock.",
    not: {
      in: "'In' is for longer times, like months and years. A clock time takes 'at'.",
      on: "'On' is for days and dates. A clock time takes 'at'.",
    },
    tip: "Say clock times with 'at': at quarter past eight, at twenty to nine.",
  },
  'We have English _____ Tuesdays.': {
    why: "Tuesday is a day of the week. We use 'on' with days, and 'on Tuesdays' means every Tuesday.",
    not: {
      in: "'In' is for months, seasons and years. Days of the week take 'on'.",
      at: "'At' is for exact clock times. A day takes 'on'.",
      by: "'By' means 'not later than'. To say which day we have English, we use 'on'.",
    },
    tip: 'Add an s to talk about every week: on Mondays, on Fridays.',
  },
  'School starts _____ September.': {
    why: "September is a month. We use 'in' with months, seasons and years: in September.",
    not: {
      on: "'On' is for days and dates, like 'on 4 September'. A whole month takes 'in'.",
      at: "'At' is for exact clock times. A month takes 'in'.",
    },
    more: 'In the UK, the school year usually starts in September, after the summer holidays.',
  },
  'Leaves fall from the trees _____ autumn.': {
    why: "Autumn is a season, and a season lasts for months. We use 'in' with seasons: in autumn.",
    not: {
      on: "'On' is for days and dates. A season takes 'in'.",
      at: "'At' is for exact clock times. A season lasts for months, so we use 'in'.",
    },
    more: "In British English, 'autumn' is the season after summer. Americans often say 'fall'.",
  },
  "Let's meet _____ lunchtime.": {
    why: "Lunchtime is a fixed point in the day, around twelve or one o'clock. We use 'at' with it: at lunchtime.",
    not: {
      in: "'In lunchtime' is not English. We say 'at lunchtime'.",
      on: "'On' is for days and dates. Lunchtime takes 'at'.",
    },
    tip: "Learn these with 'at': at lunchtime, at bedtime, at dinner time.",
  },
  'We have a maths test _____ the afternoon.': {
    why: "The afternoon is the part of the day after twelve o'clock and before the evening. We use 'in' with parts of the day: in the afternoon.",
    not: {
      at: "'At the afternoon' is not English. We use 'at' for exact times, and 'in' for parts of the day.",
      on: "'On' is for days. 'The afternoon' alone takes 'in'.",
      by: "'By the afternoon' means before the afternoon comes. For when the test is, we use 'in'.",
    },
    tip: 'Say when things happen in your school day: We have maths in the afternoon.',
  },
  'My birthday is _____ 5 March.': {
    why: "5 March is a date: one day in the year. We use 'on' with dates and days: on 5 March.",
    not: {
      in: "'In March' is right for the whole month, but with the day named, we use 'on'.",
      at: "'At' is for clock times. A date takes 'on'.",
      by: "'By 5 March' means 'not later than 5 March'. A birthday is on that day.",
    },
    tip: 'Say dates like this: on 5 March, or on the fifth of March.',
  },
  'The cat is asleep _____ the sofa.': {
    why: "A sofa has a soft top surface for sitting, and the cat is lying on it. We use 'on' for something resting on a surface.",
    not: {
      in: "'In the sofa' would put the cat inside it, under the cushions. A sleeping cat lies on top.",
      at: "'At' is for a point or a place. A cat lying on a sofa is 'on' it.",
    },
    tip: "Use 'on' for things resting on furniture: on the sofa, on the bed, on a chair.",
  },
  'Put the dirty plates _____ the sink.': {
    why: "A sink is a deep bowl for water, and the plates go down inside it to be washed. We use 'in' for something inside a container like this.",
    not: {
      on: "'On the sink' would put the plates on its edge, where they could fall. To wash them, we put them inside it.",
      at: "'At the sink' is for a person washing up there. The plates go in it.",
    },
    tip: "Use 'in' for things inside a sink, a bath or a bowl: plates in the sink, water in the bath.",
  },
  'The baby is asleep _____ her cot.': {
    why: "A cot is a small bed with high sides, and the baby lies inside them. We use 'in' for a bed you lie inside.",
    not: {
      on: "'On her cot' would put the baby on top of the sides. A baby sleeps inside a cot.",
      at: "'At' is for a point or a place. A baby lying inside a cot is 'in' it.",
      under: "'Under her cot' would put the baby on the floor below it.",
    },
    tip: "Use 'in' for a bed you lie inside, under the covers: in a cot, in a sleeping bag.",
  },
  'There is a lot of traffic _____ the road today.': {
    why: "Cars and buses travel along the surface of a road, so we say they are on the road. We use 'on' for roads: on the road, on the motorway.",
    not: {
      in: "'In the road' is used for something standing in the way, like a box in the road. Moving traffic is on the road.",
      at: "'At' is for a point. Traffic moving along a road is 'on' it.",
    },
    tip: "Use 'on' for roads and paths: on the road, on the path, on the motorway.",
  },
  'The children are swimming _____ the pool.': {
    why: "The children are in the water, inside the pool. We use 'in' for being inside water: swim in the pool.",
    not: {
      on: "'On the pool' would put the children on top of the water, like a boat. Swimmers are in the water.",
      to: "'To' shows movement: They walked to the pool. When they are swimming, they are in it.",
    },
    tip: "Use 'in' for water: in the pool, in the river, in the bath.",
  },
  'There are lots of books _____ the shelf.': {
    why: "Books stand on the flat surface of a shelf. We use 'on' for things resting on a surface: on the shelf, on the desk.",
    not: {
      in: "'In the shelf' would put the books inside the wood. They stand on its surface.",
      at: "'At' is for a point or a place. Books resting on a shelf are 'on' it.",
    },
    tip: "Ask 'Where is it?' and answer with 'on' for a surface: It is on the desk.",
  },
  'Rome is the capital city _____ Italy.': {
    why: "We say 'the capital of' a country: Rome is the capital of Italy. 'Of' joins the city to the country it belongs to.",
    not: {
      in: "'In Italy' tells us where Rome is, but after 'the capital city' we need 'of': the capital of Italy.",
      at: "'At' is for a point, like 'at the station'. After 'capital', we use 'of'.",
      from: "'From' tells us where something started: pasta from Italy. After 'capital', we use 'of'.",
    },
    tip: 'Practise with other capitals: Madrid is the capital of Spain. Cardiff is the capital of Wales.',
  },
  'There are clouds _____ the sky.': {
    why: "We think of the sky as a huge space above us, and clouds float inside it. We say 'in the sky': clouds in the sky, stars in the sky.",
    not: {
      on: "'On the sky' would make the sky a surface. We think of it as a space, so things are in it.",
      at: "'At' is for a point or a place. The sky is a big space, so we use 'in'.",
    },
    tip: "Use 'in the sky' for anything up there: a plane in the sky, the moon in the sky.",
  },
  'A bird is sitting _____ the branch.': {
    why: "A branch is a long thin part of a tree, and the bird is resting on top of it. We use 'on' for something resting on a surface.",
    not: {
      in: "'In the branch' would put the bird inside the wood. It sits on top.",
      at: "'At' is for a point or a place. A bird resting on a branch is 'on' it.",
    },
    tip: "Birds sit on branches, on fences and on roofs: use 'on' for each one.",
  },
  'I put my bag _____ the floor.': {
    why: "The floor is the surface we walk on, and the bag rests on it. We use 'on' for things resting on a surface: on the floor.",
    not: {
      in: "'In the floor' would put the bag inside it, under the boards. It rests on top.",
      at: "'At' is for a point or a place. A bag resting on the floor is 'on' it.",
    },
    tip: 'In class, say: My bag is on the floor, next to my chair.',
  },
  'We are flying _____ Spain tomorrow.': {
    why: "'Fly' shows a journey towards a place, so we use 'to' for the place: fly to Spain, travel to London.",
    not: {
      in: "'In' is for where you are: We are in Spain. For the journey there, we use 'to'.",
      at: "'At' is for a point, like 'at the airport'. For the place you travel towards, we use 'to'.",
      on: "'On' is for a surface or a day. For the place you fly towards, we use 'to'.",
    },
    tip: "Talk about journeys with 'to': We drove to Wales. She flew to Kenya.",
  },
  'My grandad is _____ hospital with a broken leg.': {
    why: "In British English we say 'in hospital', with no 'the', for a person who is there to get better. Grandad is staying there while his leg mends.",
    not: {
      at: "'At hospital' is not used in British English for a patient. A person staying there to get better is 'in hospital'.",
      on: "'On hospital' is not English. We say 'in hospital'.",
    },
    more: "Americans usually say 'in the hospital'. In Britain, 'the' is left out when we mean being there as a patient.",
    tip: 'Learn the British phrase: He is in hospital. She came out of hospital yesterday.',
  },
  'My sister is _____ university in Leeds.': {
    why: "In British English a student is 'at university', with no 'the'. My sister studies there, in Leeds, so she is at university.",
    not: {
      on: "'On university' is not English. A student is 'at university'.",
      to: "'To' shows movement: She went to university last year. To say where she studies now, we use 'at'.",
    },
    tip: "Say where someone studies with 'at': She is at university. He is at college.",
  },
  'I read about the match _____ the newspaper.': {
    why: "A story is printed inside the pages of a newspaper, so we say it is 'in the newspaper'. We use 'in' for what is inside a newspaper, a book or a magazine.",
    not: {
      on: "'On' is used for a page or a screen, but a story inside a newspaper is 'in' it.",
      at: "'At' is for a point or a place. Words printed inside a newspaper are 'in' it.",
    },
    tip: "Use 'in' for what you read in printed things: in a magazine, in a letter.",
  },
  'There is a good film _____ TV tonight.': {
    why: "We say a programme or a film is 'on TV' when it is shown on television. There is no 'the' in this phrase.",
    not: {
      in: "'In TV' is not English. A film being shown is 'on TV'.",
      at: "'At TV' is not English. We say 'on TV'.",
    },
    more: "We say 'watch TV' with no preposition: I watched TV last night.",
    tip: "Ask a friend: What's on TV tonight?",
  },
  'I heard the news _____ the radio.': {
    why: "We hear programmes 'on the radio', just as we watch them on television. We use 'on' for things that are sent out for people to hear or watch.",
    not: {
      in: "'In the radio' would mean inside the machine itself. A programme you listen to is 'on the radio'.",
      at: "'At the radio' would mean standing next to it. The news you hear is 'on the radio'.",
    },
    tip: "Notice that this phrase needs 'the': on the radio.",
  },
  'The answers are _____ page 20.': {
    why: "Words and pictures are printed on the surface of a page. We use 'on' with a page: on page 20, on the next page.",
    not: {
      in: "'In' is for a whole book or newspaper. For one page, we use 'on'.",
      at: "'At page 20' does not say where something is. Something printed there is 'on page 20'.",
    },
    more: "In class, a teacher may say 'Open your books at page 20.' That is about opening a book. To say where something is, use 'on page 20'.",
  },
  'Who is the girl _____ this photo?': {
    why: "People and things shown in a photo are inside the picture's edges. We say 'in this photo' and 'in the picture'.",
    not: {
      on: "'On the photo' would mean something lying on top of it, like a sticker. A person shown in it is 'in' the photo.",
      at: "'At' is for a point or a place. A person shown in a photo is 'in' it.",
    },
    tip: "Describe a photo with 'in': In this photo, my brother is laughing.",
  },
  'She lives _____ 24 Park Road.': {
    why: "With a full address, a house number and a street, we use 'at'. The number names one exact point: one house.",
    not: {
      in: "'In' is used for a town or a country, like 'in Leeds'. With a house number, we use 'at'.",
      on: "'On' can go with a street name alone, but with a house number we use 'at': at 24 Park Road.",
    },
    tip: "Give your address with 'at': I live at 3 Hill Street.",
  },
  'There were no seats _____ the bus, so I stood.': {
    why: "We say 'on the bus' for a bus we travel in, because we can stand and walk about on it. It is the same for trains, planes and ships.",
    not: {
      in: "'In' tells us about the space inside something. For a passenger travelling on a bus, as here, British English says 'on the bus'.",
      at: "'At the bus' is not English. A passenger is 'on the bus'. We wait 'at the bus stop'.",
    },
    more: 'The same goes for a plane or a ship: on a plane, on a ship.',
    tip: "Say where you are when you phone home: I'm on the bus now.",
  },
  'Get _____ the car, please. We are late.': {
    why: "A car is small, and you sit down inside it. We use 'in' for a car or a taxi: get in the car, sit in the car.",
    not: {
      on: "'On' is for buses and trains, where you can stand up. For a car, we use 'in'.",
      at: "'At the car' would mean standing next to it. To go inside it, we say 'get in the car'.",
    },
    tip: 'Learn the pair: get in the car, get out of the car.',
  },
  'We travelled to Glasgow _____ train.': {
    why: "To say how we travel, we use 'by' and the kind of transport, with no 'the' or 'a': by train, by plane, by bike.",
    not: {
      on: "'On' needs 'the' or 'a': on the train. Without them, we say 'by train'.",
      in: "'In train' is not English. To say how you travel, use 'by train'.",
      with: "'With train' is a common mistake. In English, we say 'by train'.",
    },
    tip: "Say how you travel with 'by': by car, by bus, by plane.",
  },
  'We waited _____ a long queue outside the cinema.': {
    why: "A queue is a line of people waiting. You are one of the people inside the line, so we say 'in a queue'.",
    not: {
      on: "'On a queue' is not English. A person waiting in a line is 'in' it.",
      at: "'At a queue' is not English. We say 'in a queue'.",
    },
    more: "'Queue' is the British word. Americans often say 'line'.",
    tip: 'Learn the verb too: We queued for an hour.',
  },
  "It is too hot. Let's sit _____ the shade.": {
    why: "Shade is the cool, dark area where the sun cannot reach. You sit inside that area, so we say 'in the shade'.",
    not: {
      on: "'On the shade' is not English. We sit 'in the shade'.",
      at: "'At the shade' is not English. Shade is an area, so we use 'in'.",
    },
    tip: "Light and dark take 'in' too: in the sunshine, in the dark.",
  },
  'In Britain, people drive _____ the left.': {
    why: "We say 'on the left' and 'on the right' for the side of a road. In Britain, cars keep to the left side of the road.",
    not: {
      in: "'In the left' is not English. For the side of a road, we say 'on the left'.",
      at: "'At the left' is not English. We say 'on the left'.",
    },
    more: 'In most of Europe and in the USA, people drive on the right.',
    tip: "Give directions with 'on': It's the second house on the right.",
  },
  'We spent a sunny day _____ the seaside.': {
    why: "'The seaside' is a place by the sea that people visit for a day out or a holiday. We say 'at the seaside', as we say 'at the zoo'.",
    not: {
      in: "'In the seaside' is not English. We say 'at the seaside'.",
      on: "'On' is used for the sand of a beach, but the seaside as a place to visit takes 'at'.",
    },
    tip: "British people say 'go to the seaside' for a day out by the sea.",
  },
  'My grandparents live _____ a farm in Wales.': {
    why: "A farm is an area of land, and people live and work on that land. In English we say 'on a farm'.",
    not: {
      in: "'In a farm' is a common mistake. We say 'on a farm', even when we mean the farmhouse too.",
      to: "'To' shows movement: We drove to a farm. To say where they live, we use 'on'.",
    },
    tip: 'Learn it with work too: My uncle works on a farm.',
  },
  'The children built a sandcastle _____ the beach.': {
    why: "A beach is a surface of sand by the sea, and the sandcastle is built on that sand. We say 'on the beach'.",
    not: {
      in: "'In the beach' would put the children inside the sand. They are on top of it.",
      to: "'To' shows movement: We walked to the beach. To say where they built it, we use 'on'.",
    },
    tip: "Use 'on' for sand, snow and ice: on the sand, on the ice.",
  },
  "It is ten o'clock and the children are already _____ bed.": {
    why: "When you are lying under the covers to sleep, you are 'in bed', with no 'the'. The children are already there, ready to sleep.",
    not: {
      on: "'On the bed' means lying on top of the covers. 'On bed' with no 'the' is not English.",
      at: "'At bed' is not English. We say 'in bed'.",
      to: "'To' shows movement: They went to bed early. With 'are', we need 'in bed'.",
    },
    tip: 'Say it of yourself: I was in bed by ten.',
  },
  'We walked home _____ the rain.': {
    why: "When you walk outside while it rains, the rain is all around you, so we say 'in the rain'. We use 'in' for weather that is all around us.",
    not: {
      on: "'On the rain' is not English. We say 'in the rain'.",
      under:
        "'Under the rain' is a common mistake. Rain is all around you, not only above you, so we use 'in'.",
    },
    tip: "Use 'in' for weather: in the snow, in the wind.",
  },
  'I found the answer _____ the internet.': {
    why: "We say 'on the internet' and 'online' for things we find on websites. The answer was on a website, so it was on the internet.",
    not: {
      in: "'In the internet' is a common mistake. We say 'on the internet'.",
      at: "'At the internet' is not English. We say 'on the internet'.",
    },
    tip: "Use 'on' for websites too: I read it on a website.",
  },
  'There is a big table _____ the middle of the room.': {
    why: "The middle of a room is an area inside it, away from the walls. We say 'in the middle of'.",
    not: {
      on: "'On the middle' is not English. We say 'in the middle of the room'.",
      at: "'At the middle' is not usual English. We say 'in the middle'.",
    },
    tip: 'Learn it as one phrase: in the middle of the road.',
  },
  'There is a shed _____ the bottom of the garden.': {
    why: "The bottom of a garden is its far end, away from the house: a point we can name. We use 'at' with it: at the bottom of the garden.",
    not: {
      in: "'In the bottom' is used for the inside of a container, like a bag. For the far end of a garden, we say 'at the bottom'.",
      on: "'On the bottom' is used for the underside of something. For the far end of a garden, we say 'at the bottom'.",
    },
    tip: "Use 'at' with edges and sides: at the edge of the field, at the side of the house.",
  },
  'Can you find Cardiff _____ the map?': {
    why: "Places are printed on the flat surface of a map. We say 'on the map', just as we say a word is on a page.",
    not: {
      in: "'In the map' is not usual English. A place printed on a map is 'on' it.",
      at: "'At the map' would mean standing by it. A place printed there is 'on the map'.",
    },
    tip: "Use 'on' for maps and plans: The school is on this map.",
  },
  'My face looks strange _____ this old mirror.': {
    why: "What you see in a mirror seems to be inside the glass. We say 'in the mirror': I can see my face in the mirror.",
    not: {
      on: "'On the mirror' is for something on its surface, like a mark. What you see is 'in the mirror'.",
      at: "We look 'at' a mirror, but what we see there, like our face, is 'in' the mirror.",
    },
    tip: "Say what you see with 'in': I saw myself in the shop window.",
  },
  'Is my name _____ the list?': {
    why: "A name is written on a list, as it is written on a page. We say 'on the list': Your name is on the list.",
    not: {
      in: "'In' is for being inside something. A name written on a list is 'on' it, as words are on a page.",
      at: "'At the list' is not English. A name written there is 'on the list'.",
    },
    tip: "Use 'on' for what is written on lists and forms.",
  },
  'She goes to work _____ her bike.': {
    why: "You sit on top of a bike, so we say 'on her bike' or 'on my bike'. We use 'on' for bikes, horses and motorbikes.",
    not: {
      in: "'In her bike' would put her inside it, which is not possible. You ride on top of a bike.",
      at: "'At' is for a point or a place. Riding a bike is being 'on' it.",
    },
    more: "Without 'her' or 'my', we say 'by bike': She goes to work by bike.",
    tip: 'Learn both: on my bike, by bike.',
  },
  'Mount Everest is the highest mountain _____ the world.': {
    why: "After 'the highest', 'the biggest' and other words like them, we use 'in' with a place: the highest mountain in the world.",
    not: {
      on: "'On the world' is not English. After 'the highest', we use 'in the world'.",
      at: "'At the world' is not English. We say 'in the world'.",
    },
    more: 'The same goes for smaller places: the tallest girl in the class.',
    tip: "Do not use 'of' here: say 'the best player in the team'.",
  },
  'We carried the heavy boxes _____ the stairs to the top floor.': {
    why: "The boxes went from a lower floor to the top floor, so they moved higher. We use 'up' for moving higher: up a hill, up a ladder.",
    not: {
      down: "'Down' is for moving lower. The boxes went to the top floor, so they went up.",
      on: "'On the stairs' tells us where something is, not which way it moves. Here the boxes moved higher.",
    },
    tip: 'Learn the pair: up a ladder, down a ladder.',
  },
  'The train went _____ a long tunnel under the hills.': {
    why: "A tunnel has a way in at one end and a way out at the other. The train went in at one end and came out at the other, so it went 'through' it.",
    not: {
      across:
        "'Across' is for going from one side of a flat surface to the other, like a road. A tunnel is a space you go inside.",
      over: "'Over' would put the train above the tunnel. It went inside the tunnel, so we say 'through'.",
    },
    tip: "Use 'through' for going in one side and out of the other: through a forest, through a town.",
  },
  'Go _____ the door and turn left.': {
    why: "A doorway is an opening in a wall. When you go from one room to the next, you pass 'through' the door.",
    not: {
      across:
        "'Across' is for going from one side of a road or a room to the other. You pass through a doorway.",
      over: "'Over' would mean climbing above the door. We walk through it.",
    },
    tip: "Use 'through' for openings: through the gate, through the window.",
  },
  'Sunlight came in _____ a gap in the curtains.': {
    why: "The gap is an opening in the curtains. The light passed from outside, in at the gap and on into the room, so it came in 'through' it.",
    not: {
      across:
        "'Across' is for moving over a surface from side to side. Light coming in at an opening comes 'through' it.",
      over: "'Over' would mean the light went above the curtains. It came in at the gap, through it.",
    },
    tip: "Use 'through' for light and air that pass an opening: through the glass, through a crack.",
  },
  'Push the thread _____ the eye of the needle.': {
    why: "The eye of a needle is the tiny hole near its blunt end. The thread goes in one side of the hole and out of the other, so it goes 'through' it.",
    not: {
      across:
        "'Across' is for going over a surface from side to side. A thread goes inside the hole and out again.",
      over: "'Over' would put the thread above the hole. To sew, the thread must go through it.",
    },
    tip: "When something goes in one side and out of the other, choose 'through'.",
  },
  'There is an old stone bridge _____ the river.': {
    why: "A bridge goes from one side of a river to the other, high above the water. We use 'over' for something that is above another thing and crosses it.",
    not: {
      under: "'Under' would put the bridge below the river. A bridge goes above the water.",
      in: "'In the river' would put the bridge in the water. A bridge goes above it, from bank to bank.",
    },
    tip: "Use 'over' for bridges: a bridge over the road, a bridge over the railway.",
  },
  'The horse jumped _____ the fence.': {
    why: "The horse went up and above the fence, then came down on the other side. We use 'over' for going above something to the other side.",
    not: {
      across:
        "'Across' is for moving along a surface from one side to the other, like a road. A fence is jumped over.",
      through:
        "'Through' would mean the horse went inside the fence, breaking it. It jumped above it.",
    },
    tip: "Use 'over' with jump and climb: climb over a wall, jump over a puddle.",
  },
  'A plane flew low _____ our house.': {
    why: "The plane passed above our house in the air. We use 'over' for moving above something.",
    not: {
      across:
        "'Across' is for moving from one side of a surface to the other. A plane above a house flies over it.",
      through: "'Through' would mean the plane went inside our house. It flew above it.",
    },
    tip: "For something moving above us, 'over' is the usual word: Birds flew over the field.",
  },
  "The ball flew _____ the goalkeeper's head and into the net.": {
    why: "The ball passed above the goalkeeper's head, higher than it, and then went into the net. We use 'over' for passing above something.",
    not: {
      across:
        "'Across' is for moving from side to side over a surface. The ball went above his head.",
      through:
        "'Through' is for passing inside something, like a tunnel. The ball passed above his head.",
    },
    tip: 'In football, a ball can go over the bar, past the keeper and into the net.',
  },
  'She jumped _____ the swimming pool with a big splash.': {
    why: "She moved from outside the pool to inside the water. 'Into' shows movement from outside to inside something.",
    not: {
      onto: "'Onto' shows movement on to a surface, like a table. You cannot land on top of water.",
      on: "'On' tells us where something is, on a surface. Here she moved from outside to inside the water.",
    },
    tip: 'Learn the pair: into the water, out of the water.',
  },
  'We got _____ the train at York.': {
    why: "We 'get on' a train when we start a journey and 'get off' it when the journey is over. We left the train when it stopped at York, so we got off it.",
    not: {
      out: "'Get out' needs 'of' before a noun: get out of the car. For a train, we say 'get off'.",
      down: "'Get down' means moving lower, like from a tree. We leave a train by getting off it.",
    },
    tip: "Use 'get on' and 'get off' for buses, trains and planes.",
  },
  'Please keep _____ the grass.': {
    why: "'Keep off' means do not walk or stand on something. Signs in parks say 'Keep off the grass' where people must not walk on it.",
    not: {
      out: "'Keep out' is for a place you must not go inside, like a room. For a surface like grass, we say 'keep off'.",
      from: "'Keep from' means stop yourself doing something. A sign about grass says 'keep off'.",
    },
    tip: "Look for signs with 'off': Keep off the ice.",
  },
  'He fell _____ his bike and hurt his knee.': {
    why: "He was on top of his bike, and then he fell from it to the ground. We use 'off' for coming away from something you were on.",
    not: {
      out: "'Fall out' is for falling from inside something, like a bag. He was on top of the bike.",
      down: "'Fall down' means falling to the ground, but it does not go with 'his bike'. We say 'fell off his bike'.",
    },
    tip: "Use 'off' for things you sit or stand on: fall off a chair, jump off a wall.",
  },
  'A button came _____ my coat.': {
    why: "The button was fixed to the coat, and now it is not. We use 'off' when something comes away from the thing it was fixed to.",
    not: {
      out: "'Come out' is for leaving the inside of something, like a box. A button is on the outside of a coat.",
      down: "'Come down' means moving lower. A button that is no longer fixed to a coat has come off it.",
    },
    tip: "Learn 'come off' for things that were stuck or fixed: The label came off the jar.",
  },
  'We have lunch _____ midday.': {
    why: "Midday is twelve o'clock in the day, an exact time. We use 'at' for exact times: at midday.",
    not: {
      in: "'In' is for longer times, like months. Midday is one exact time, so we use 'at'.",
      on: "'On' is for days and dates. Midday is a time on the clock, so we use 'at'.",
    },
    tip: "'Midday' and 'noon' both mean twelve o'clock in the day.",
  },
  'My parents met _____ the 1990s.': {
    why: "The 1990s are ten years, from 1990 to 1999. We use 'in' for long stretches of time: years, ten-year periods and centuries.",
    not: {
      on: "'On' is for days and dates. Ten years take 'in'.",
      at: "'At' is for exact times. A ten-year period is long, so we use 'in'.",
    },
    tip: 'Say it like this: in the nineties, in the twenty-first century.',
  },
  'The holidays start _____ two weeks.': {
    why: "'In two weeks' means two weeks from now. We use 'in' and a length of time to say when something will happen.",
    not: {
      on: "'On' is for days and dates, like 'on Monday'. To say how long from now, we use 'in'.",
      at: "'At' is for exact times. To say how long from now, we use 'in'.",
    },
    tip: "Answer 'When?' with 'in': The film starts in ten minutes.",
  },
  'We waited _____ two hours, but the bus never came.': {
    why: "'Two hours' is a length of time. We use 'for' to say how long something goes on: for two hours, for a week.",
    not: {
      since:
        "'Since' needs a starting point, like 'since ten o'clock'. 'Two hours' is a length of time, so we use 'for'.",
      during:
        "'During' goes with an event or a period, like 'during the film'. For a length of time, we use 'for'.",
      in: "'In two hours' tells us when something will happen. To say how long we waited, we use 'for'.",
    },
    tip: "Ask 'How long?' and answer with 'for': for ten minutes, for a year.",
  },
  'I have lived here _____ 2015.': {
    why: "2015 is the year I started living here, and I still live here now. We use 'since' with the starting point of something that is still true.",
    not: {
      for: "'For' goes with a length of time, like 'for six years'. 2015 is a starting point, so we use 'since'.",
      in: "'In 2015' tells us when something happened. With 'have lived', which reaches up to now, we need 'since'.",
      at: "'At' is for clock times. The year something started takes 'since' here.",
    },
    more: "We use 'since' with 'have' and a past form of the verb: have lived, have known, have been.",
    tip: 'Say how long you have done something: I have played the piano since 2020.',
  },
  'My phone rang _____ the film.': {
    why: "The film went on for a time, and the phone rang at one moment in that time. We use 'during' and a noun for something that happens within an event.",
    not: {
      for: "'For' goes with a length of time, like 'for an hour'. 'The film' is an event, so we use 'during'.",
      since:
        "'Since' needs a starting point and goes with 'has' or 'have'. The phone rang at one moment, within the film.",
      while:
        "'While' needs a whole clause after it: while we were watching. Before a noun, use 'during'.",
    },
    tip: 'Learn the pair: during the film, while we were watching it.',
  },
  'There is a party _____ Saturday night.': {
    why: "When a part of the day comes with a named day, the day decides, and we use 'on'. So we say 'on Saturday night' and 'on Sunday morning'.",
    not: {
      at: "'At night' is right on its own, but with a named day we use 'on': on Saturday night.",
      in: "'In' is for longer times, like months, or for 'in the evening'. With a named day, we use 'on'.",
    },
    tip: "With a day name first, always use 'on': on Tuesday afternoon.",
  },
  'She is busy _____ the moment.': {
    why: "'At the moment' means now. It is a fixed phrase with 'at', used with verbs like 'is busy' or 'is working'.",
    not: {
      in: "'In the moment' is used for being fully in what you are doing. To mean 'now', we say 'at the moment'.",
      on: "'On the moment' is not English. We say 'at the moment'.",
    },
    tip: "Use it on the phone: Sorry, I'm busy at the moment.",
  },
  'The train arrived exactly _____ time.': {
    why: "'On time' means at the planned time, not early and not late. The train came at exactly the planned time, so it was on time.",
    not: {
      in: "'In time' means early enough to do something, like catching a train. 'Exactly' goes with 'on time'.",
      at: "'At time' is not English. We say 'on time'.",
    },
    tip: "Remember: 'on time' means not late. The bus is never on time.",
  },
  'We have a test _____ the start of every term.': {
    why: "The start of a term is one moment we can name. We use 'at' with 'the start of' and 'the beginning of'.",
    not: {
      in: "'In the start' is a common mistake. We say 'at the start of'.",
      on: "'On the start' is not English. We say 'at the start of'.",
    },
    tip: 'Use it with any time: at the start of the lesson, at the beginning of May.',
  },
  'She learnt to swim _____ the age of five.': {
    why: "Your age is a point in your life. We say 'at the age of five', or simply 'at five'.",
    not: {
      in: "'In the age of' is used for a long time in history, like 'the age of steam'. For a person's age, use 'at'.",
      on: "'On the age' is not English. We say 'at the age of five'.",
      with: "'With five' is a common mistake. In English, we say 'at the age of five' or 'at five'.",
    },
    tip: 'Talk about yourself: I started school at the age of four.',
  },
  'The shop is open from nine _____ half past five.': {
    why: "We use 'from' with the start of a stretch of time and 'to' with its end: from nine to half past five. 'From' and 'to' work as a pair.",
    not: {
      at: "'At' is for one exact time. Here we need the end of a stretch of time, after 'from', so we use 'to'.",
      in: "'In' is for longer times, like months. After 'from nine', the end time takes 'to'.",
    },
    tip: 'Say your school day: from half past eight to three.',
  },
  'My little brother hides _____ me when he sees a big dog.': {
    why: 'My brother is scared, so he puts me between him and the dog. He stands at my back, where the dog cannot reach him: he hides behind me.',
    not: {
      'in front of':
        "'In front of me' would put my brother nearer the dog than me. To hide, he goes to my back.",
      'next to':
        "'Next to me' would put him at my side, where the dog could still reach him. He hides at my back.",
    },
    tip: "Use 'behind' for a place at someone's back: She stood behind her dad.",
  },
  'In a race, the runner in second place finishes just _____ the winner.': {
    why: 'The winner crosses the line first. The runner in second place is a little further back, so they finish just behind the winner.',
    not: {
      'in front of':
        "'In front of' would mean the second runner was ahead of the winner. Then they would have won.",
      'next to':
        "'Next to' would mean side by side, at the same moment. Second place is a little further back.",
    },
    tip: "In races, use 'behind' and 'ahead of': Our team was behind, but now we are ahead.",
  },
  'When you walk in a line, you follow the person _____ you.': {
    why: 'To follow someone, you walk after them, so they must be ahead of you. The person you follow is in front of you.',
    not: {
      behind: 'The person behind you follows you. You follow the person ahead of you.',
      'next to':
        "'Next to you' means at your side. You cannot follow someone who walks at your side.",
    },
    tip: 'Think of a line of ducklings: each one follows the duck in front of it.',
  },
  'In a car, the driver sits _____ the passengers in the back seat.': {
    why: 'The back seat is behind the front seats. The driver sits in a front seat, so the driver is in front of the passengers in the back.',
    not: {
      behind: "'Behind' would put the driver in the back seat. The driver sits at the front.",
      'next to':
        "'Next to' is for someone in the seat at the driver's side. The back seat is behind the driver.",
    },
    tip: 'Learn the car words: the front seat, the back seat, the boot.',
  },
  'On your hand, the thumb is _____ the first finger.': {
    why: 'Look at your hand: the thumb is at one side, and the first finger is right beside it. Nothing comes between them, so the thumb is next to the first finger.',
    not: {
      between:
        "'Between' needs two things, one on each side. The thumb has a finger on one side only.",
      behind: "'Behind' would put the thumb at the back of the finger. It is at its side.",
    },
    tip: "Use 'next to' for things side by side, with nothing between them.",
  },
  'The basement is _____ the ground floor.': {
    why: 'A basement is a floor built lower than the street. It is lower than the ground floor, so the basement is below the ground floor.',
    not: {
      above:
        "'Above' would put the basement higher than the ground floor. A basement is the lowest floor.",
      on: "'On the ground floor' would put the basement at street level. It is lower than that.",
    },
    tip: "Use 'below' and 'above' for floors: The flat below ours is empty.",
  },
  'Your chin is _____ your mouth.': {
    why: "Your chin is the lowest part of your face, lower than your mouth. We use 'below' for something lower than something else.",
    not: {
      above: "'Above' means higher. Your nose is higher than your mouth, but your chin is lower.",
      behind:
        "'Behind' would put your chin at the back of your mouth. It is lower, at the front of your face.",
    },
    tip: "Describe a face with 'below' and 'above': My nose is above my mouth.",
  },
  'On a clock, the 6 is _____ the 12.': {
    why: 'On a clock face the 12 points straight up and the 6 points straight down. They face each other across the middle of the clock, so the 6 is opposite the 12.',
    not: {
      'next to':
        'The numbers next to the 12 are the 11 and the 1. The 6 is right across the clock.',
      between: "'Between' needs two things, one on each side. The 6 is across from the 12.",
    },
    tip: "Use 'opposite' for two things that face each other across a space.",
  },
  'On a dice, the 1 is always _____ the 6.': {
    why: 'On a dice, the numbers on the two faces that point away from each other always add up to 7. So the 1 and the 6 are on those two faces: the 1 is opposite the 6.',
    not: {
      'next to':
        'A face next to the 6 shares an edge with it. The 1 is on the face across from the 6.',
      between: "'Between' needs two things, one on each side. The 1 is across from the 6.",
    },
    more: 'In the same way, the 2 is always opposite the 5, and the 3 opposite the 4.',
  },
  'On a compass, north is _____ south.': {
    why: 'North and south point in two directions that face away from each other. On a compass they are across the circle from each other, so north is opposite south.',
    not: {
      'next to': 'East and west are at the sides of north. South is across the circle from it.',
      between: "'Between' needs two things, one on each side. North is across from south.",
    },
    tip: 'East is opposite west in the same way.',
  },
  'My brother is very interested _____ old cars.': {
    why: "After 'interested', English uses 'in': interested in music, interested in old cars. The word and its preposition always go together, so learn them as a pair.",
    not: {
      on: "'Interested on' is a common mistake. The adjective 'interested' always takes 'in'.",
      about: "'About' goes with words like 'worried', but 'interested' takes 'in'.",
      for: "'Interested for' is not English. We say 'interested in'.",
    },
    tip: 'Learn the noun too: my interest in art.',
  },
  'Maya is very good _____ maths and science.': {
    why: "To say someone does something well, English uses 'good at': good at maths, good at drawing. Maya does well in these subjects, so she is good at them.",
    not: {
      on: "'Good on' is not how we say someone does something well. We say 'good at'.",
      for: "'Good for' means something helps you: Fruit is good for you. For a skill, we say 'good at'.",
      to: "'Good to' a person means kind to them. For a skill or a subject, we say 'good at'.",
    },
    tip: "Use 'bad at' in the same way: I am bad at singing.",
  },
  'My little sister is afraid _____ the dark.': {
    why: "After 'afraid', English uses 'of' for the thing that scares you: afraid of spiders, afraid of the dark.",
    not: {
      from: "'Afraid from' is a common mistake. In English we say 'afraid of'.",
      for: "'Afraid for' means worried about someone who might get hurt. For the thing that scares you, use 'of'.",
      with: "'Afraid with' is not English. We say 'afraid of'.",
    },
    tip: "'Scared' works the same way: scared of dogs, scared of heights.",
  },
  'My grandmother is very proud _____ her garden.': {
    why: "After 'proud', English uses 'of' for the person or thing that makes you proud: proud of my work, proud of her garden.",
    not: {
      with: "'Proud with' is not English. We say 'proud of'.",
      from: "'Proud from' is not English. We say 'proud of'.",
    },
    tip: "Say it to a friend after a good result: I'm so proud of you.",
  },
  'Cornwall is famous _____ its beaches.': {
    why: "To say why a place or a person is well known, English uses 'famous for': Cornwall is famous for its beaches.",
    not: {
      of: "'Famous of' is a common mistake. We say 'famous for'.",
      with: "'Famous with' is not how we give the reason something is known. We say 'famous for'.",
      about: "'Famous about' is not English. We say 'famous for'.",
    },
    more: 'Cornwall is in the far south-west of England, by the sea.',
    tip: 'Say what a place is famous for: My town is famous for its old bridge.',
  },
  'My new school is very different _____ my old one.': {
    why: "To compare two things that are not the same, we use 'different from': My new school is different from my old one.",
    not: {
      of: "'Different of' is a common mistake. We say 'different from'.",
      with: "'Different with' is not English. We say 'different from'.",
      at: "'Different at' is not English. We say 'different from'.",
    },
    more: "British people also say 'different to'. Americans often say 'different than'.",
    tip: 'Compare two places: Wales is different from Spain.',
  },
  'The bus was full _____ noisy children.': {
    why: "After 'full', English uses 'of' for what fills something: full of water, full of people. The bus had lots of noisy children on it, so it was full of them.",
    not: {
      with: "'Full with' is a common mistake. We say 'full of', or 'filled with'.",
      from: "'Full from' is not English. We say 'full of'.",
      in: "'Full in' is not English. We say 'full of'.",
    },
    tip: 'Learn the pair: full of, filled with.',
  },
  'Be kind _____ the new boy in our class.': {
    why: "To say how you treat someone, English uses 'kind to': Be kind to your little brother. 'Nice to' and 'polite to' work the same way.",
    not: {
      with: "'Kind with' is not usual English. For how you treat a person, we say 'kind to'.",
      for: "'Kind for' is not English. We say 'kind to'.",
      at: "'Kind at' is not English. We say 'kind to'.",
    },
    tip: 'Learn the opposite too: Never be unkind to anyone.',
  },
  'Dad was angry _____ me for breaking the window.': {
    why: "In British English we are 'angry with' a person and 'angry about' a thing. Dad was angry with me, the person who broke the window.",
    not: {
      on: "'Angry on' is not English. With a person, we say 'angry with'.",
      to: "'Angry to' is not English. With a person, we say 'angry with'.",
      from: "'Angry from' is not English. With a person, we say 'angry with'.",
    },
    more: "You will also hear 'angry at' someone, especially in American English.",
    tip: 'Learn the pair: angry with a person, angry about a thing.',
  },
  'I am worried _____ my maths test tomorrow.': {
    why: "After 'worried', English uses 'about' for the thing on your mind: worried about the test, worried about my cat.",
    not: {
      of: "'Worried of' is a common mistake. We say 'worried about'.",
      on: "'Worried on' is not English. We say 'worried about'.",
      with: "'Worried with' is not English. We say 'worried about'.",
    },
    tip: 'Talk about a feeling: I am worried about my exam results.',
  },
  'Your bag is very similar _____ mine.': {
    why: "After 'similar', English uses 'to': similar to mine, similar to a cat. Two things that are almost the same are similar to each other.",
    not: {
      with: "'Similar with' is a common mistake. We say 'similar to'.",
      as: "'As' goes with 'the same': the same as mine. After 'similar', we use 'to'.",
      from: "'From' goes with 'different'. After 'similar', we use 'to'.",
    },
    tip: 'Learn the pair: similar to, the same as.',
  },
  'My aunt is married _____ a doctor.': {
    why: "We say a person is 'married to' their husband or wife: My aunt is married to a doctor.",
    not: {
      with: "'Married with' is a common mistake here. 'Married with children' means having children, not who you married.",
      at: "'Married at' tells us the place: married at a church. For the husband or wife, we use 'to'.",
      for: "'Married for' tells us how long: married for ten years. For the husband or wife, we use 'to'.",
    },
    tip: "Use 'to' with 'engaged' too: She is engaged to a teacher.",
  },
  'Tom is very keen _____ football.': {
    why: "'Keen on' means liking something a lot. It is a British phrase, and it always takes 'on': Tom is keen on football.",
    not: {
      in: "'Keen in' is not English. We say 'keen on'.",
      of: "'Keen of' is not English. We say 'keen on'.",
      at: "'Keen at' is not English. We say 'keen on'.",
    },
    tip: "Use it to say what you like: I'm keen on drawing.",
  },
  'The children are excited _____ the school trip.': {
    why: "After 'excited', English uses 'about' for the thing you are looking forward to: excited about my birthday, excited about the holidays.",
    not: {
      of: "'Excited of' is not English. We say 'excited about'.",
      on: "'Excited on' is not English. We say 'excited about'.",
      with: "'Excited with' is not usual English. We say 'excited about'.",
    },
    tip: "Share good news: I'm so excited about the weekend.",
  },
  'Who is responsible _____ feeding the class pet?': {
    why: "'Responsible for' means it is your job to look after something or to do something: She is responsible for the class pet.",
    not: {
      of: "'Responsible of' is a common mistake. We say 'responsible for'.",
      about: "'Responsible about' is not English. We say 'responsible for'.",
      with: "'Responsible with' means sensible, as in 'responsible with money'. For whose job it is, use 'for'.",
    },
    tip: "After 'for', use the -ing form of a verb: responsible for cleaning the board.",
  },
  'Hurry up, or we will be late _____ school.': {
    why: "After 'late', English uses 'for' with the event or place you should already be at: late for school, late for the film.",
    not: {
      at: "'Late at' is not used for the thing you are late arriving at. We say 'late for school'.",
      in: "'Late in' goes with times, like 'late in the evening'. For school, we say 'late for'.",
      on: "'Late on' is not English here. We say 'late for school'.",
    },
    tip: "Say sorry like this: Sorry I'm late for the lesson.",
  },
  'My friend is allergic _____ nuts.': {
    why: "After 'allergic', English uses 'to' for the thing that makes you ill: allergic to nuts, allergic to cats.",
    not: {
      of: "'Allergic of' is a common mistake. We say 'allergic to'.",
      with: "'Allergic with' is not English. We say 'allergic to'.",
      from: "'Allergic from' is not English. We say 'allergic to'.",
    },
    tip: 'Learn the noun too: an allergy to nuts.',
  },
  'The teacher was pleased _____ our work.': {
    why: "After 'pleased', English uses 'with' for something someone has done that makes you happy: The teacher was pleased with our work.",
    not: {
      of: "'Pleased of' is not English. We say 'pleased with'.",
      on: "'Pleased on' is not English. We say 'pleased with'.",
      to: "'Pleased to' goes before a verb: pleased to meet you. Before a noun like 'our work', we use 'with'.",
    },
    tip: "Say how you feel about your own work: I'm pleased with my drawing.",
  },
  'Please listen _____ your teacher.': {
    why: "After 'listen', English uses 'to' before the person or thing you hear: listen to music, listen to me.",
    not: {
      at: "'Listen at' is not English. We say 'listen to'.",
      on: "'Listen on' is not English. We say 'listen to'.",
      with: "'Listen with' tells us what you use: listen with your ears. For the person you hear, use 'to'.",
    },
    tip: "Compare: 'listen to' music, but 'hear' music with no preposition.",
  },
  'We arrived _____ the station ten minutes late.': {
    why: "We 'arrive at' a building or a place on a journey, like a station or an airport. The station is one place, so we arrived at it.",
    not: {
      to: "'Arrive to' is a common mistake. We say 'arrive at' a place like a station.",
      on: "'Arrive on' is used with days: arrive on Monday. For a station, use 'at'.",
    },
    more: "For a city or a country, we 'arrive in': arrive in Paris.",
    tip: "In speech, people often say 'get to': We got to the station just after six.",
  },
  'We arrived _____ London late last night.': {
    why: "We 'arrive in' a city, a town or a country, because it is a big area. London is a city, so we arrived in London.",
    not: {
      at: "'Arrive at' is for a building or a point, like a station. For a whole city, we use 'in'.",
      to: "'Arrive to' is a common mistake. We say 'arrive in' a city.",
    },
    tip: 'Talk about a trip: We arrived in Rome after a long flight.',
  },
  'We are waiting _____ the bus.': {
    why: "After 'wait', English uses 'for' before the person or thing you expect to come: wait for the bus, wait for me.",
    not: {
      to: "'Wait to' goes before a verb: I can't wait to see you. Before a noun, we say 'wait for'.",
      at: "'Wait at' tells us the place: wait at the bus stop. For what you expect to come, use 'for'.",
      with: "'Wait with' means staying beside someone while you wait. For the bus that is coming, use 'for'.",
    },
    tip: "Put the place after 'at' and the thing after 'for': We waited at the gate for Mum.",
  },
  'I am looking _____ my keys. Have you seen them?': {
    why: "'Look for' means try to find something you have lost. I cannot find my keys and I am trying to find them, so I am looking for them.",
    not: {
      at: "'Look at' means turn your eyes to something you can see. I cannot see my keys, so I am looking for them.",
      after:
        "'Look after' means take care of someone, like a baby. For trying to find something, use 'for'.",
      to: "'Look to' is not used for finding things. We say 'look for'.",
    },
    tip: 'Learn three: look at, look for, look after.',
  },
  'Our trip depends _____ the weather.': {
    why: "After 'depend', English uses 'on'. If it rains, we stay in; if it is sunny, we go. Whether we go changes with the weather, so the trip depends on it.",
    not: {
      of: "'Depend of' is a common mistake. In English we say 'depend on'.",
      from: "'Depend from' is not English. We say 'depend on'.",
      in: "'Depend in' is not English. We say 'depend on'.",
    },
    tip: "Answer a question with it: 'Are you coming?' 'It depends on my homework.'",
  },
  'Does this pencil case belong _____ Sam?': {
    why: "After 'belong', English uses 'to' for the owner: This pencil case belongs to me. We ask 'Does it belong to Sam?' to find out if it is his.",
    not: {
      at: "'Belong at' is not English. For the owner, we say 'belong to'.",
      of: "'Belong of' is a common mistake. For the owner, we say 'belong to'.",
      for: "'Belong for' is not English. We say 'belong to'.",
    },
    tip: "You can also ask 'Whose is this?' to find the owner.",
  },
  'I agree _____ you completely.': {
    why: "We 'agree with' a person or with what they say. I think the same as you, so I agree with you.",
    not: {
      to: "'Agree to' means say yes to a plan: She agreed to help. For a person you think the same as, use 'with'.",
      on: "'Agree on' means decide something together: We agreed on a time. For a person, use 'with'.",
      about: "We can agree about a subject, but with a person we say 'agree with'.",
    },
    tip: 'Say it in a class discussion: I agree with Sam, because he gives a reason.',
  },
  'Who will pay _____ the tickets?': {
    why: "We 'pay for' the thing we buy: pay for the tickets, pay for lunch. The money buys the tickets, so we pay for them.",
    not: {
      to: "'Pay to' is for the person who gets the money: pay the money to the shop. For what you buy, use 'for'.",
      on: "'Pay on' tells us when: pay on Friday. For what you buy, use 'for'.",
      with: "'Pay with' tells us how: pay with a card. For what you buy, use 'for'.",
    },
    tip: 'Learn three: pay for the tickets, pay with cash, pay at the till.',
  },
  'Please do not laugh _____ my drawing.': {
    why: "'Laugh at' means laugh because you think someone or something is funny or silly. I do not want that for my drawing, so I ask you not to laugh at it.",
    not: {
      on: "'Laugh on' is not English. We say 'laugh at'.",
      to: "'Laugh to' is not English. We say 'laugh at'.",
      with: "'Laugh with' someone means laugh together, as friends. 'Laugh at' my drawing makes fun of it.",
    },
    tip: 'Kind friends laugh with each other, not at each other.',
  },
  'Do you believe _____ ghosts?': {
    why: "'Believe in' means think that something is real: believe in ghosts, believe in magic. The question asks if you think ghosts are real.",
    not: {
      on: "'Believe on' is not English. We say 'believe in'.",
      to: "'Believe to' is not English. We say 'believe in'.",
      at: "'Believe at' is not English. We say 'believe in'.",
    },
    more: "Without 'in', 'believe' means think someone is telling the truth: I believe you.",
  },
  'My grandad suffers _____ hay fever every summer.': {
    why: "After 'suffer', English uses 'from' for an illness or a problem: suffer from hay fever, suffer from headaches.",
    not: {
      of: "'Suffer of' is a common mistake. We say 'suffer from'.",
      by: "'Suffers by hay fever' is not English. We say 'suffer from'.",
      on: "'Suffer on' is not English. We say 'suffer from'.",
    },
    more: 'Hay fever makes people sneeze in spring and summer, when there is pollen in the air.',
  },
  'I spent all my pocket money _____ sweets.': {
    why: "We 'spend' money 'on' the things we buy: spend money on clothes, spend money on sweets.",
    not: {
      for: "'Spend for' is a common mistake. We say 'spend money on'.",
      in: "'Spend in' tells us the place: spend money in a shop. For what you buy, use 'on'.",
      with: "'Spend with' tells us who you are with: spend the day with friends. For what you buy, use 'on'.",
    },
    tip: "Use 'on' for time too: I spend an hour on my homework.",
  },
  'Divide the class _____ four groups.': {
    why: "We 'divide' something 'into' parts or groups. The class becomes four groups, so we divide it into four groups.",
    not: {
      on: "'Divide on' is not English. We say 'divide into'.",
      to: "'Divide to' is not English. We say 'divide into'.",
      at: "'Divide at' is not English. We say 'divide into'.",
    },
    tip: 'Use it in maths too: Cut the cake into eight pieces.',
  },
  'Thank you _____ the lovely present.': {
    why: "We 'thank' someone 'for' what they gave or did: Thank you for the card, thank you for helping.",
    not: {
      about: "'Thank you about' is not English. We say 'thank you for'.",
      of: "'Thank you of' is not English. We say 'thank you for'.",
      to: "'Thank you to' is used before a person: Thank you to everyone. For the present, use 'for'.",
    },
    tip: "After 'for', use the -ing form of a verb: Thank you for coming.",
  },
  'Can I borrow a pen _____ you?': {
    why: "We 'borrow' something 'from' the person who owns it. The pen is yours, so I borrow it from you.",
    not: {
      of: "'Borrow of' is very old English. Today we say 'borrow from'.",
      to: "'To' goes with 'lend': I lend a pen to you. With 'borrow', use 'from'.",
      with: "'Borrow with' is not English. We say 'borrow from'.",
    },
    tip: 'Learn the pair: borrow from someone, lend to someone.',
  },
  'Please reply _____ my email.': {
    why: "After 'reply', English uses 'to' before the email, the letter or the person: reply to my letter, reply to me.",
    not: {
      on: "'Reply on' is not English. We say 'reply to'.",
      at: "'Reply at' is not English. We say 'reply to'.",
      for: "'Reply for' is not English. We say 'reply to'.",
    },
    tip: "'Answer' takes no preposition: Please answer my email.",
  },
  'He complained _____ the cold food.': {
    why: "We 'complain about' something we are not happy with: complain about the noise, complain about the weather.",
    not: {
      on: "'Complain on' is not English. We say 'complain about'.",
      for: "'Complain for' is not English. We say 'complain about'.",
      at: "'Complain at' is not English. We say 'complain about'.",
    },
    tip: "Use 'to' for the person: He complained to the waiter.",
  },
  'Can you explain the rule _____ my little brother?': {
    why: "We explain something 'to' a person: explain the game to me. The person who needs to understand comes after 'to'.",
    not: {
      at: "'Explain at' is not English. We explain something 'to' someone.",
      with: "'Explain with' tells us what you use: explain with a picture. For the person, use 'to'.",
      on: "'Explain on' is not English. We explain something 'to' someone.",
    },
    more: "Never say 'explain me the rule'. Say 'explain the rule to me'.",
  },
  'I bumped _____ my teacher at the shops.': {
    why: "'Bump into' someone means meet them by chance, when you did not plan it. I did not expect to see my teacher at the shops, but I did: I bumped into her.",
    not: {
      with: "'Bump with' is not English. We say 'bump into'.",
      to: "'Bump to' is not English. We say 'bump into'.",
      on: "'Bump on' is not English. We say 'bump into'.",
    },
    more: "'Bump into' can also mean hit something by accident: I bumped into the door.",
  },
  'She got _____ a taxi and went to the airport.': {
    why: "A taxi is a car, and you sit down inside it. We 'get into' a taxi or a car, moving from outside to inside it.",
    not: {
      on: "'Get on' is for buses, trains and planes, where you can stand up. For a taxi, we say 'get into' or 'get in'.",
      at: "'Get at' is not used for going inside. For a taxi, we say 'get into'.",
    },
    tip: 'Learn the pair: get into a taxi, get out of a taxi.',
  },
  'Can you help me _____ my homework?': {
    why: "We 'help' someone 'with' a job or a problem: help me with the cooking, help with the shopping.",
    not: {
      in: "'Help me in my homework' is a common mistake. We say 'help me with'.",
      for: "'Help me for' is not English here. We say 'help me with'.",
      at: "'Help at' tells us the place: help at a café. For the job, use 'with'.",
    },
    tip: 'Offer help like this: Can I help you with your bags?',
  },
  'Please share your sweets _____ your brother.': {
    why: "We 'share' something 'with' another person, so that you both have some: share your sweets with your brother.",
    not: {
      to: "'Share to' is a common mistake. We say 'share with'.",
      for: "'Share for' is not English. We say 'share with'.",
      between:
        "'Between' needs two or more people together: share them between you. With one person named, use 'with'.",
    },
    tip: "Use 'between' for a group: Share the cake between the four of you.",
  },
  "Don't worry _____ me. I will be fine.": {
    why: "After 'worry', English uses 'about' for the person or thing on your mind: Don't worry about me.",
    not: {
      on: "'Worry on' is not English. We say 'worry about'.",
      of: "'Worry of' is not English. We say 'worry about'.",
      with: "'Worry with' is not English. We say 'worry about'.",
    },
    tip: "Say it kindly to a friend: Don't worry about it.",
  },
  'What is the reason _____ the delay?': {
    why: "After the noun 'reason', English uses 'for': the reason for the delay, the reason for my visit.",
    not: {
      of: "'Reason of' is a common mistake. We say 'the reason for'.",
      to: "'Reason to' goes before a verb: a reason to smile. Before a noun like 'the delay', use 'for'.",
      about: "'Reason about' is not English. We say 'the reason for'.",
    },
    tip: "Give the reason with 'is that': The reason for the delay is that the bus broke down.",
  },
  'This is a photo _____ my family.': {
    why: "We say 'a photo of' the people or things it shows: a photo of my family, a photo of the sea.",
    not: {
      about:
        "'About' is for what a story or a film tells us. A photo shows people or things, so it is a photo of them.",
      at: "'A photo at' is used for a place: a photo at the beach. For who is in it, use 'of'.",
      on: "'On' is for the surface something is on, like a page. For who is in a photo, use 'of'.",
    },
    tip: 'Show your phone: This is a photo of my dog.',
  },
  'Do you know the answer _____ this question?': {
    why: "After the noun 'answer', English uses 'to': the answer to this question, the answer to the puzzle.",
    not: {
      of: "'The answer of' is a common mistake. We say 'the answer to'.",
      on: "'Answer on' is not English. We say 'the answer to'.",
      at: "'Answer at' is not English. We say 'the answer to'.",
    },
    tip: 'The verb takes no preposition: Answer the question.',
  },
  'We are going on a school trip _____ the zoo.': {
    why: "After 'trip', we use 'to' for the place we go: a trip to the zoo, a trip to London.",
    not: {
      at: "'A trip at the zoo' is not English. For the place you visit, use 'to'.",
      in: "'In' tells us where we are, not where we are going. A trip takes 'to'.",
      for: "'A trip for' tells us why: a trip for a birthday. For the place, use 'to'.",
    },
    tip: "Use 'to' after 'visit' as a noun too: a visit to the museum.",
  },
  'My dad is a big fan _____ Liverpool.': {
    why: "We say someone is 'a fan of' a team, a band or a writer they like a lot: a big fan of Liverpool.",
    not: {
      for: "'A fan for' is not English. We say 'a fan of'.",
      to: "'A fan to' is not English. We say 'a fan of'.",
      with: "'A fan with' is not English. We say 'a fan of'.",
    },
    tip: "Tell a friend what you like: I'm a big fan of comics.",
  },
  'Sorry, I did not break it _____ purpose.': {
    why: "'On purpose' means you planned to do it. 'I did not break it on purpose' means I did not mean to break it.",
    not: {
      by: "'By purpose' is a common mistake. We say 'on purpose'.",
      for: "'For purpose' is not English. We say 'on purpose'.",
      with: "'With purpose' means with a clear aim, like walking with purpose. The phrase here is 'on purpose'.",
    },
    tip: "The opposite of 'on purpose' is 'by accident'.",
  },
  'I took your coat _____ mistake.': {
    why: "'By mistake' means you did it without meaning to, because you got something wrong. I thought your coat was mine, so I took it by mistake.",
    not: {
      on: "'On mistake' is not English. We say 'by mistake'.",
      with: "'With mistake' is not English. We say 'by mistake'.",
      in: "'In mistake' is not English. We say 'by mistake'.",
    },
    tip: "'By accident' means the same: I deleted it by accident.",
  },
  'I learnt the poem _____ heart.': {
    why: "To learn something 'by heart' means to learn it so well that you can say it without looking. I can now say the whole poem from memory.",
    not: {
      with: "'With heart' is not English for learning. We say 'learn by heart'.",
      in: "'In heart' is not English. We say 'learn by heart'.",
      from: "'From heart' is not used. We say 'learn by heart', and 'from memory' for saying it.",
    },
    tip: 'Learn short quotations by heart before an exam.',
  },
  'We met Ali _____ our way to the park.': {
    why: "'On our way' means during our journey. We met Ali while we were going to the park.",
    not: {
      in: "'In our way' means blocking us. We met Ali during the journey, so we say 'on our way'.",
      at: "'At our way' is not English. We say 'on our way'.",
      by: "'By the way' is used to start a new topic. For a journey, we say 'on our way'.",
    },
    tip: "Use it on the phone: I'm on my way.",
  },
  'Call 999 _____ an emergency.': {
    why: "'In an emergency' means if something dangerous or serious happens. It is a fixed phrase with 'in'.",
    not: {
      on: "'On an emergency' is not English. We say 'in an emergency'.",
      at: "'At an emergency' is not English. We say 'in an emergency'.",
      by: "'By an emergency' is not English. We say 'in an emergency'.",
    },
    more: 'In the UK, 999 is the number for the police, the fire service and an ambulance.',
  },
  "Sorry, I can't stop. I am _____ a hurry.": {
    why: "'In a hurry' means you must go fast because you have little time. It is a fixed phrase with 'in'.",
    not: {
      on: "'On a hurry' is not English. We say 'in a hurry'.",
      at: "'At a hurry' is not English. We say 'in a hurry'.",
      with: "'With a hurry' is not English. We say 'in a hurry'.",
    },
    tip: "Learn the verb too: Hurry up, or we'll miss the bus.",
  },
  'We got to the station just _____ time to catch the train.': {
    why: "'In time' means early enough to do something. We reached the station with a little time left, early enough to catch the train.",
    not: {
      on: "'On time' means at the planned time, not late. With 'to catch the train', we need 'in time', early enough.",
      at: "'At time' is not English. We say 'in time'.",
    },
    tip: 'We got home just in time, before the rain started.',
  },
  'Please finish your homework _____ Friday.': {
    why: "'By Friday' means on Friday or before it, but not later. The homework must be done before the end of Friday at the latest.",
    not: {
      until:
        "'Until' is for something that goes on up to a time, like staying somewhere. Finishing happens once, so we say 'by Friday'.",
      in: "'In Friday' is not English. Days take 'on', and a deadline takes 'by'.",
    },
    tip: "Use 'by' for deadlines: Hand it in by Monday.",
  },
  'You can keep my book _____ Friday.': {
    why: "'Until' means up to a time, and then it stops. You can keep my book all the way up to Friday, and then give it back.",
    not: {
      by: "'By' is for something done once before a deadline. Keeping a book goes on for days, so we say 'until Friday'.",
      since:
        "'Since' looks back to a starting point in the past. Friday is when the keeping ends, so we use 'until'.",
    },
    tip: "Answer 'How long can I keep it?' with a day: Until Friday.",
  },
  'We stayed up _____ midnight to watch the fireworks.': {
    why: "'Until midnight' means up to midnight, and then it stopped. We did not sleep before twelve o'clock, because we wanted to see the fireworks.",
    not: {
      by: "'By midnight' means at midnight or before it. Staying up went on for hours, up to that time, so we use 'until'.",
      since:
        "'Since' looks back from now to a starting point. Here midnight is when staying up ended, so we use 'until'.",
    },
    tip: "In speech, 'till' means the same as 'until': We danced till late.",
  },
  'I was born _____ the morning of 3 May.': {
    why: "With a date, we use 'on', even when a part of the day comes first: on the morning of 3 May. The date decides.",
    not: {
      in: "'In the morning' is right on its own, but with a date after it we say 'on the morning of 3 May'.",
      at: "'At' is for exact clock times. With a date, we use 'on'.",
    },
    tip: 'Use it for special days: on the evening of my birthday.',
  },
  'I have known Ali _____ six years.': {
    why: "'Six years' is a length of time. With 'have known', which reaches up to now, we use 'for' to say how long: for six years.",
    not: {
      since:
        "'Since' needs a starting point, like 'since 2019'. 'Six years' is a length of time, so we use 'for'.",
      during:
        "'During' goes with an event, like 'during the match'. For a length of time, we use 'for'.",
      in: "'In six years' tells us when, in the future. With 'have known', we say 'for six years'.",
    },
    tip: "Ask a new friend: How long have you lived here? Answer with 'for': for three years.",
  },
  'It has rained every day _____ Monday.': {
    why: "Monday is the day the rain started, and it still rains every day now. We use 'since' with a starting point: since Monday.",
    not: {
      for: "'For' goes with a length of time, like 'for three days'. Monday is a starting point, so we use 'since'.",
      on: "'On Monday' tells us one day only. With 'has rained every day', which reaches up to now, we need 'since'.",
      in: "'In Monday' is not English. Days take 'on', and a starting point takes 'since'.",
    },
    tip: "Use 'since' with a day, a time or a year: since Tuesday, since 2010.",
  },
  "I have been waiting here _____ ten o'clock.": {
    why: "Ten o'clock is when I started waiting, and I am still waiting now. We use 'since' with the time something started: since ten o'clock.",
    not: {
      for: "'For' goes with a length of time, like 'for an hour'. Ten o'clock is a starting point, so we use 'since'.",
      at: "'At ten o'clock' tells us one moment only. With 'have been waiting', which reaches up to now, we need 'since'.",
      by: "'By ten o'clock' means not later than ten. With 'have been waiting', we need 'since'.",
    },
    tip: 'Learn the pattern: I have been waiting since ten, for an hour now.',
  },
  'She has worked here _____ last summer.': {
    why: "Last summer is when she started working here, and she still works here now. We use 'since' with a starting point: since last summer.",
    not: {
      for: "'For' goes with a length of time, like 'for a year'. 'Last summer' is a starting point, so we use 'since'.",
      in: "We say 'last summer', not 'in last summer'. With 'has worked', which reaches up to now, we need 'since'.",
      at: "'At' is for clock times. A starting point with 'has worked' takes 'since'.",
    },
    tip: "Notice that 'last' and 'next' take no preposition: I saw her last week.",
  },
  'He fell asleep _____ the lesson.': {
    why: "The lesson went on for a time, and he fell asleep at some point in it. We use 'during' and a noun for what happens within an event: during the lesson.",
    not: {
      for: "'For' goes with a length of time, like 'for an hour'. 'The lesson' is an event, so we use 'during'.",
      since:
        "'Since' needs a starting point and goes with 'has' or 'have'. He fell asleep within the lesson.",
      while:
        "'While' needs a whole clause after it: while the teacher was talking. Before a noun, use 'during'.",
    },
    tip: 'Learn the pair: during the lesson, while she was talking.',
  },
  'The lights went out _____ the storm.': {
    why: "The storm went on for some time, and the lights went out at one point in it. We use 'during' and a noun for what happens within an event.",
    not: {
      for: "'For' goes with a length of time, like 'for ten minutes'. 'The storm' is an event, so we use 'during'.",
      since:
        "'Since' needs a starting point and goes with 'has' or 'have'. The lights went out within the storm.",
      while:
        "'While' needs a whole clause after it: while it was raining. Before a noun, use 'during'.",
    },
    tip: "'During' answers 'When?' with an event: during the match, during the holidays.",
  },
  'It snowed _____ the night.': {
    why: "The night is a stretch of time, and the snow fell at some point within it. We use 'during' and a noun for what happens within a stretch of time.",
    not: {
      for: "'For the night' is used for staying somewhere, like 'stay for the night'. Snow that fell within the night came 'during' it.",
      since:
        "'Since' needs a starting point and goes with 'has' or 'have'. The snow fell within the night.",
      while:
        "'While' needs a whole clause after it: while we were asleep. Before a noun, use 'during'.",
    },
    more: "You can also say 'in the night' here.",
  },
  "Sam: Where are you?\nMia: I'm _____ the train. I'll be home soon.": {
    why: "Mia is travelling on a train at this moment. A train is something we travel 'on', so she says 'I'm on the train'.",
    not: {
      in: "'In' tells us about the space inside something. Mia is a passenger travelling home, and for a passenger British English says 'on the train'.",
      at: "'At the train' would mean standing next to it, outside. Mia is travelling, so she is on it.",
    },
    tip: "Answer a call like Mia: Sorry, I'm on the train, so I can't talk.",
  },
  "Leo: How old is your sister?\nZara: She's thirteen. She's _____ Year 9.": {
    why: "In British schools we say a pupil is 'in Year 9', as we say 'in my class'. Zara's sister is in that year group.",
    not: {
      at: "'At Year 9' is not English. We say 'in Year 9'.",
      on: "'On Year 9' is not English. We say 'in Year 9'.",
    },
    more: 'In England and Wales, pupils in Year 9 are usually 13 or 14 years old.',
  },
  "Tom: What's wrong?\nAmara: I've got something _____ my eye.": {
    why: "Something small, like dust or an eyelash, has got inside Amara's eye. We use 'in' for something inside a part of the body, like 'in my mouth'.",
    not: {
      on: "'On my eye' would put it on the outside, like on the eyelid. Dust that hurts gets inside the eye.",
      at: "'At my eye' is not English. We say 'in my eye'.",
    },
    tip: "Use 'in' for pains too: a pain in my leg.",
  },
  "Ali: Where did your parents meet?\nPriya: They met _____ a friend's wedding.": {
    why: "A wedding is an event, and we use 'at' for being at an event: at a concert, at a wedding.",
    not: {
      in: "'In a wedding' is not usual English for a guest. We say 'at a wedding'.",
      on: "'On a wedding' is not English. We say 'at a wedding'.",
    },
    tip: "Say where you met someone with 'at': We met at a concert.",
  },
  "Sam: Where is your dad from?\nLeo: He was born _____ Lagos. It's a huge city.": {
    why: "Lagos is a city, and we use 'in' for cities, towns and countries: born in Lagos, born in Nigeria.",
    not: {
      at: "'At' is for a point or a building, like a station. For a whole city, we use 'in'.",
      on: "'On' is for a surface or a day. For a city, we use 'in'.",
    },
    tip: 'Say where you were born: I was born in Kabul.',
  },
  "Mia: Where are my glasses?\nTom: They're _____ your head.": {
    why: "Mia has pushed her glasses up, and they are resting on top of her head. We use 'on' for something resting on a surface, even a head.",
    not: {
      in: "'In your head' means in your thoughts. The glasses are resting on top of her head.",
      at: "'At your head' is not English here. Glasses resting there are 'on your head'.",
    },
    tip: "Use 'on' for things we wear: a hat on your head, gloves on your hands.",
  },
  "Zara: Where were you yesterday?\nAli: I was _____ my grandmother's house.": {
    why: "Ali was at a place he visited: his grandmother's house. We use 'at' for being at someone's home: at my grandmother's, at Sam's house.",
    not: {
      to: "'To' shows movement: I went to my grandmother's house. To say where I was, we use 'at'.",
      on: "'On' is for a surface. For being at someone's home, we use 'at'.",
    },
    tip: "You can leave out 'house': I was at my grandmother's.",
  },
  "Leo: Where's Jack?\nPriya: He's _____ the dentist's. He has a bad tooth.": {
    why: "Jack is visiting the dentist, so he is at the dentist's surgery. We say 'at the dentist's' and 'at the doctor's' for these visits.",
    not: {
      to: "'To' shows movement: He went to the dentist's. To say where he is now, we use 'at'.",
      on: "'On' is for a surface. For a visit to the dentist, we use 'at'.",
    },
    more: "'The dentist's' means the dentist's surgery. British English often leaves the place word out: at the chemist's.",
  },
  "Amara: Where shall we meet?\nSam: Let's meet _____ the entrance to the bus station.": {
    why: "The entrance is the way in to the bus station, a point where people can meet. We use 'at' for a meeting point: at the entrance, at the gate.",
    not: {
      on: "'On the entrance' is not English. For a meeting point, we use 'at'.",
      to: "'To' shows movement: Come to the entrance. To say where we will meet, we use 'at'.",
    },
    tip: "Agree a meeting point with 'at': I'll meet you at the main gate.",
  },
  'Tom: Do you live near here?\nMia: Yes, I live _____ the end of this street.': {
    why: "The end of a street is a point we can name. We say 'at the end of the street' and 'at the end of the road'.",
    not: {
      in: "'In the end' means finally, after a long time. For a place, we say 'at the end of the street'.",
      on: "'On the end' is not how we say where in a street something is. We say 'at the end of the street'.",
    },
    tip: 'Give directions: Walk to the end of the road and turn right.',
  },
  "Priya: Where's the bathroom?\nAli: It's _____ the top of the stairs, on the right.": {
    why: "The top of the stairs is a point we can name, where the stairs end. We use 'at' with it: at the top of the stairs.",
    not: {
      in: "'In the top' is not used for a place like this. We say 'at the top of the stairs'.",
      to: "'To' shows movement: Go to the top. To say where the bathroom is, we use 'at'.",
    },
    tip: 'Learn the pair: at the top of the stairs, at the foot of the stairs.',
  },
  "Leo: Are you coming to my party?\nMia: Sorry, I can't. We'll be _____ holiday in Spain.": {
    why: "'On holiday' means away from home for a rest or a trip, not working or having lessons. It is a fixed phrase with 'on'.",
    not: {
      in: "'In holiday' is a common mistake. We say 'on holiday'.",
      at: "'At holiday' is not English. We say 'on holiday'.",
      for: "'For holiday' is a common mistake. We say 'on holiday', or 'for a holiday'.",
    },
    more: "'Holiday' is the British word. Americans often say 'vacation'.",
  },
  'Amara: Did you get my message?\nPriya: Sorry, no. I was _____ the cinema.': {
    why: "Priya was at the cinema watching a film, so she did not see the message. We use 'at' for being at a place to do what it is for: at the cinema, at the theatre.",
    not: {
      to: "'To' shows movement: I went to the cinema. To say where I was, we use 'at'.",
      on: "'On the cinema' is not English. We say 'at the cinema'.",
    },
    tip: "Say where you were with 'at': I was at the library.",
  },
  'Leo: Where do you live?\nZara: I live _____ a flat above a shop.': {
    why: "A flat is a home inside a building, and Zara lives inside it. We use 'in' for living in a home: in a flat, in a house.",
    not: {
      on: "'On a flat' is not English. We live 'in a flat'. We use 'on' for the floor it is on.",
      at: "'At a flat' is not usual English. We say 'live in a flat'.",
    },
    more: "'Flat' is the British word. Americans often say 'apartment'.",
  },
  "Amara: Where's the nearest bank?\nTom: Turn right _____ the roundabout. It's next to the café.":
    {
      why: "A roundabout is a place where roads meet and you can turn. In directions, we use 'at' for the point where you turn.",
      not: {
        in: "'In the roundabout' would put you in the middle of it. In directions, the turn happens at it.",
        on: "'On the roundabout' is for driving round it. To say where you turn, we use 'at'.",
      },
      tip: "Give directions with 'at': Turn left at the next corner.",
    },
}
