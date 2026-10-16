import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Where Is It?: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/prepositions-of-place.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'The milk is _____ the fridge.': {
    why: "The milk is inside the fridge, in the closed space where we keep cold food. We use 'in' for something inside a space with walls or sides.",
    not: {
      between:
        "'Between' needs two things, one on each side, as in 'between the fridge and the wall'. Here there is only the fridge.",
      under:
        "'Under' would put the milk on the floor below the fridge. Milk is kept inside the fridge to stay cold.",
      above:
        "'Above' would put the milk higher than the fridge, for example on a shelf over it. The fridge is where the milk stays cold.",
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
  'The cat is _____ the box, hiding completely.': {
    why: "The cat is hiding completely, so the box must cover it. The cat is in the space below the box, so we use 'under'.",
    not: {
      on: "'On' would put the cat on top of the box, where everyone can see it. The scene says the cat is hiding completely.",
      above: "'Above' would put the cat higher than the box, where everyone can see it.",
      opposite:
        "'Opposite' would put the cat across from the box, facing it. The cat would not be hidden.",
    },
    more: "'Under' means below something, often covered by it: under a blanket, under the bed.",
    tip: "Look for clues in the scene. 'Hiding completely' tells you the cat is covered, not on top.",
  },
  'There is a lovely picture _____ the wall.': {
    why: "The picture hangs flat against the wall and touches its surface. We use 'on' for things that are fixed to a wall.",
    not: {
      in: "'In' would mean the picture is inside the wall, as if it were built into it. A hanging picture is on the surface.",
      at: "'At' is for a point or a place, like 'at the door'. For something touching the surface of a wall, we use 'on'.",
      under:
        "'Under' would put the picture below the wall, which does not make sense for a picture that hangs on it.",
    },
    more: "We also say 'on the ceiling' and 'on the floor'. All of them are surfaces that things touch.",
  },
  'The keys are _____ my pocket.': {
    why: "A pocket is a small space with sides, and the keys are inside it. We use 'in' for things inside a space.",
    not: {
      on: "'On' would put the keys on the outside of the pocket, which is hard to picture. Keys go inside a pocket.",
      above: "'Above' would put the keys higher than the pocket. That does not fit a pocket.",
      between: "'Between' needs two things, one on each side. A pocket is one thing.",
    },
    more: "We say 'in my pocket', 'in my bag' and 'in my hand'.",
  },
  'The dog is sleeping _____ the bed.': {
    why: "The dog is in the space below the bed, so we use 'under'. 'Under' means directly below something.",
    not: {
      between: "'Between' needs two things, one on each side. There is only one bed.",
      at: "'At' is for a point, like 'at the door'. It does not say where the dog lies compared with the bed.",
      above: "'Above' would put the dog higher than the bed. A dog cannot sleep in the air.",
    },
    more: "'Under' means directly below something, often close to it or covered by it: under the bed, under a tree.",
  },
  'Write your name _____ the top of the page.': {
    why: "The top of the page is a position on the page, not a space that you go inside. We use 'at' with a position: at the top, at the bottom.",
    not: {
      in: "'In' is for inside a space, like a box. The top of a page is a position, so we say 'at the top'.",
      under: "'Under' would put your name below the top of the page, not at it.",
      behind:
        "'Behind' would put your name on the back of the page, on the other side. You write on the front.",
    },
    more: "We say 'at the top' and 'at the bottom' of a page, and 'at the back' of a room.",
    tip: 'In an exam, write your name at the top of the answer sheet, as the instructions say.',
  },
  'The spider is _____ the ceiling.': {
    why: "A spider walks on the ceiling as it would on any surface, touching it. We use 'on' for something that touches a surface, even upside down.",
    not: {
      in: "'In' would put the spider inside the ceiling, in a hole. It is on the surface.",
      under:
        "'Under' would put the spider below the ceiling, in the air. It would be hanging, not walking on the surface.",
      'next to':
        "'Next to' means beside something, like two desks in a row. A spider on a ceiling is touching it, not beside it.",
    },
    more: "'On' means touching a surface, even if the surface is above you: on the ceiling, on the wall.",
  },
  'My shoes are _____ the stairs.': {
    why: "The shoes are in the space below the stairs. We use 'under' for something directly below another thing.",
    not: {
      in: "'In' would put the shoes inside the stairs, which are solid steps. The shoes are in the space under them.",
      above:
        "'Above' would put the shoes higher than the stairs. We say 'under the stairs' for the space below them.",
      between:
        "'Between' needs two things, such as 'between the stairs and the wall'. Here there is only the stairs.",
    },
    more: "Many houses have a cupboard under the stairs. We also say 'at the bottom of the stairs' and 'at the top of the stairs'.",
  },
  'There is some money _____ my wallet.': {
    why: "A wallet is a small case, and the money is inside it. We use 'in' for things inside a container.",
    not: {
      on: "'On' would put the money on the outside of the wallet. Money is kept inside it.",
      at: "'At' is for a point or a place, like 'at the bank'. It does not say the money is inside.",
      above: "'Above' would put the money higher than the wallet. It does not fit a wallet.",
    },
    more: "Wallets, bags, boxes and drawers are containers. Things inside them are 'in' the container: in my bag, in the drawer.",
  },
  'The car is parked _____ the house, out of sight.': {
    why: "'Out of sight' means you cannot see the car from the front. So the car is at the back of the house, and we use 'behind'.",
    not: {
      'in front of':
        "'In front of' would put the car at the front of the house, where people can see it. The scene says it is out of sight.",
      on: "'On' would put the car on top of the house, for example on the roof.",
      above:
        "'Above' would put the car higher up, for example on a hill. 'Out of sight' means the house hides it, so we use 'behind'.",
    },
    more: "'Behind' is the opposite of 'in front of'. 'The garden is behind the house' means it is at the back.",
  },
  'The bus stop is right _____ the school, by the main gate.': {
    why: "The bus stop is by the main gate, which is at the front of the school. So the stop is at the front of the school, and we use 'in front of'.",
    not: {
      behind:
        "'Behind' would put the bus stop at the back of the school. The main gate is at the front, and the stop is by the gate.",
      under:
        "'Under' would put the bus stop below the school, which does not make sense for a building.",
      in: "'In' would put the bus stop inside the school. A bus stop is on the street outside.",
    },
    more: "'In front of' means at the front of something: in front of the school, in front of the TV.",
  },
  'Sara sits _____ me; our desks are side by side.': {
    why: "The desks are side by side, so Sara is beside me, with no one between us. We use 'next to' for things that are side by side.",
    not: {
      behind:
        "'Behind' would put Sara in the next row, not beside me. Side by side means beside, not in front or behind.",
      under: "'Under' would mean Sara is below me, which does not fit two students at desks.",
      above:
        "'Above' would mean Sara is higher than me. Two students at desks are on the same level.",
    },
    more: "'Next to' and 'beside' mean nearly the same: 'Sara sits beside me.'",
  },
  'The bin is _____ the door, just beside it.': {
    why: "The scene says the bin is just beside the door, so it is at the door's side. We use 'next to' for something close beside another thing.",
    not: {
      in: "'In' would put the bin inside the door, which makes no sense. The bin stands beside it.",
      above: "'Above' would put the bin higher than the door. The scene says 'just beside it'.",
      opposite: "'Opposite' would put the bin across from the door, facing it, not beside it.",
    },
    more: "'Beside' means the same as 'next to'. You can use either one: 'The bin is beside the door.'",
  },
  'The garden is _____ the house, at the back.': {
    why: "The scene says the garden is at the back, so it is on the side of the house away from the street. We use 'behind'.",
    not: {
      'in front of':
        "'In front of' would put the garden at the front of the house. The scene says it is at the back.",
      on: "'On' would put the garden on top of the house, for example on the roof. A garden is on the ground, not on the roof.",
      at: "'At the house' does not say which side the garden is on. The scene says the back, so we need 'behind'.",
    },
    more: 'A house often has a front garden and a back garden. The front garden is in front of the house, and the back garden is behind it.',
  },
  'A tall tree stands _____ the window, blocking the view outwards.': {
    why: "The tree blocks the view out of the window, so it stands in the way, outside the window. We use 'in front of' for something at the front of another thing.",
    not: {
      behind:
        "'Behind the window' would put the tree inside the room, behind the glass. This tree stands outside and blocks the view out, so we use 'in front of'.",
      under:
        "'Under' would put the tree lower than the window, below it. It would not block the view.",
      in: "'In' would put the tree inside the window, which makes no sense. The tree is outside, facing the glass.",
    },
    more: 'If something stands in front of a window, it can block the view. A tall tree or a big car can do this.',
  },
  'The chemist is _____ the bakery, right beside it.': {
    why: "The scene says 'right beside it', so the chemist and the bakery are side by side on the same street. We use 'next to'.",
    not: {
      above:
        "'Above' would put the chemist on a higher floor, over the bakery. The scene says it is beside it.",
      under:
        "'Under' would put the chemist on a lower floor, below the bakery. The scene says it is beside it.",
      opposite:
        "'Opposite' would put the chemist across the street, facing the bakery. The scene says it is right beside it.",
    },
    more: "We use 'next to' for shops in a row: 'The bank is next to the post office.'",
  },
  'He is hiding _____ the curtain so nobody can see him.': {
    why: "He is hiding so that nobody can see him, so the curtain must cover him. He stands with the curtain between him and the room, so we use 'behind'.",
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
  'The lamp hangs _____ the table, higher up.': {
    why: "The lamp hangs higher up, in the air over the table. We use 'above' for something at a higher level than another thing.",
    not: {
      under: "'Under' would put the lamp lower than the table. The scene says it is higher up.",
      in: "'In' would put the lamp inside the table, which makes no sense.",
      between: "'Between' needs two things, one on each side. There is only one table.",
    },
    more: "'Above' means higher than something. The lamp hangs in the air over the table.",
  },
  'Sign your name _____ the dotted line, in the space under it.': {
    why: "The scene says your name goes in the space under the dotted line, so it is at a lower level than the line. We use 'below'.",
    not: {
      above:
        "'Above' would put your name higher on the form than the dotted line. The scene says it goes under it.",
      in: "'In' would put your name inside the line, which is only a mark. Here your name goes under it.",
      behind:
        "'Behind' would put your name on the back of the form. Here it goes on the front, in the space under the line.",
    },
    more: "'Below' and 'under' both mean lower than. We often use 'below' for a position on a page: see the list below.",
    tip: "On a form, read each instruction slowly. 'Sign on the line' and 'sign below the line' are different.",
  },
  'The café is _____ the library; the street is between them.': {
    why: "The street is between the café and the library, so they face each other across it. We use 'opposite'.",
    not: {
      'next to':
        "'Next to' would put the café side by side with the library, with no street between them.",
      under:
        "'Under' would put the café on a lower floor, below the library. The scene says the street is between them.",
      in: "'In' would put the café inside the library. The scene says the street is between them.",
    },
    more: "'Opposite' means facing across a space: opposite the park, opposite the school gate.",
  },
  'The village lies _____ the two hills, in the valley.': {
    why: "A valley is low land with a hill on each side. The village lies in it, so there is a hill on either side. We use 'between'.",
    not: {
      above: "'Above' would put the village higher than the hills. A village in a valley is lower.",
      on: "'On' would put the village on top of the hills. The scene says it is in the valley.",
      at: "'At' is for a point, like 'at the station'. It does not say the village has a hill on each side.",
    },
    more: "Use 'between' for two things: 'between the river and the road'.",
  },
  'Birds are flying _____ the clouds; the clouds are lower than the birds.': {
    why: "'The clouds are lower than the birds' tells us the birds are higher up. We use 'above' for something at a higher level.",
    not: {
      below:
        "'Below' would put the birds lower than the clouds. The scene says the clouds are lower.",
      in: "'In' would put the birds inside the clouds. The scene says the clouds are lower than the birds.",
      'next to':
        "'Next to' would put the birds beside the clouds, level with them. The scene says the clouds are lower.",
    },
    more: "'Above' is the opposite of 'below'. Aeroplanes fly above the clouds, and rain falls from the clouds to the ground below.",
  },
  'The car park is _____ ground level; it is underground, under the shop.': {
    why: "'Underground' tells us the car park is lower than the street. We use 'below' for a level that is lower than another.",
    not: {
      above:
        "'Above' would put the car park higher than ground level, over the shop. The scene says it is underground.",
      on: "'On ground level' would mean at the same level as the street. The scene says the car park is underground.",
      opposite:
        "'Opposite' would put the car park across the street. The scene says it is under the shop.",
    },
    more: "'Below' can mean a lower floor or a lower level. We say 'below ground level' for something under the ground.",
  },
  'My house is _____ the park; I can see it from my front door.': {
    why: "From my front door I can see the park, so the park faces my house across the road. We use 'opposite' for two things that face each other.",
    not: {
      between:
        "'Between' needs two things, one on each side of my house. The scene names only the park.",
      in: "'In' would put my house inside the park, among the trees. Here the park is something I look at from my door.",
      under:
        "'Under' would put my house in a lower place under the park. The scene says I look across at it from my door.",
    },
    more: "'Opposite' is often used for roads and streets: 'The school is opposite the library.'",
  },
  'The cat is sitting _____ the two cushions, one on each side.': {
    why: "There is one cushion on each side of the cat. A thing that has something on both sides is 'between' them.",
    not: {
      above:
        "'Above' would put the cat higher than the cushions. The scene says one cushion is on each side.",
      on: "'On' would put the cat on top of the cushions. The scene says one is on each side of it.",
      behind:
        "'Behind' would put the cat at the back of the cushions, in a line. The scene says one is on each side.",
    },
    more: "'Between' is used for two things. For more than two, we often use 'among'.",
  },
  'The shelf is _____ the desk, fixed higher on the wall.': {
    why: "The shelf is fixed higher on the wall, over the desk. We use 'above' for something at a higher level than another thing.",
    not: {
      under:
        "'Under' would put the shelf lower than the desk. The scene says it is higher on the wall.",
      in: "'In' would put the shelf inside the desk, which makes no sense for a shelf fixed to a wall.",
      between: "'Between' needs two things, one on each side. There is only one desk.",
    },
    more: "A shelf above a desk is higher than the desk. We can also say 'over' in this meaning: a shelf over the desk.",
  },
  'I will meet you _____ the bus stop.': {
    why: "A bus stop is a point where people wait, so it is a good meeting point. We use 'at' for a point or a place like this.",
    not: {
      in: "'In' is for inside a space with sides, like a room. A bus stop is an open point on the street.",
      on: "'On' is for a surface, like 'on the floor'. A bus stop is a place, not a surface.",
      under:
        "'Under' would put you below the bus stop, which does not make sense as a meeting place.",
    },
    more: "We use 'at' for meeting points: at the station, at the door, at the corner.",
  },
  'She lives _____ Manchester.': {
    why: "Manchester is a city, a large area, and she lives inside it. We use 'in' for cities, towns and countries.",
    not: {
      at: "'At' is for a small point, like 'at the station', or a full address, like 'at 12 Oak Road'. A whole city is too large.",
      on: "'On' is for a surface or a street name, like 'on Oak Road'. A city is an area, so we say 'in'.",
      above:
        "'Above' would put her higher than the city, like a person in a plane. It does not say where she lives.",
    },
    more: "Use 'in' for a whole area: in Manchester, in England, in a village. Use 'at' with a full address: at 12 Oak Road.",
  },
  'My flat is _____ the third floor.': {
    why: "We use 'on' with the floors of a building, as if each floor is a surface that the flat is on.",
    not: {
      in: "'In' would suggest the flat is inside the floor itself. We say 'on the third floor'.",
      at: "'At' is for a point, like 'at the door'. For the floors of a building, we use 'on'.",
      under: "'Under' would put the flat below the third floor, on a lower floor.",
    },
    more: "We say 'on the ground floor', 'on the first floor' and 'on the top floor'.",
  },
  'The children are _____ home this evening.': {
    why: "'At home' is a fixed phrase for being in your own house or flat. We say 'at home', 'at school' and 'at work'.",
    not: {
      in: "We do not say 'in home' for being in your house. We say 'at home'.",
      on: "'On' is for a surface. 'On home' is not a phrase in English.",
      behind:
        "'Behind' would put the children at the back of the home. It does not mean being in the house.",
    },
    more: "Other fixed phrases with 'at': at school, at work, at university, at the shops.",
  },
  'We stayed _____ a small hotel near the sea.': {
    why: "A hotel is a building, and we stayed inside it. We use 'in' for being inside a building.",
    not: {
      on: "'On' would put us on the roof or on the outside of the hotel, not inside it.",
      behind: "'Behind' would put us at the back of the hotel, outside it, not staying in it.",
      above:
        "'Above' would put us higher than the hotel, which does not make sense for where we slept.",
    },
    more: "We can also say 'at a small hotel'. Both are common. 'At' names the place, and 'in' says we were inside the building.",
  },
  'There is a famous painting _____ the museum.': {
    why: "The painting is inside the museum building, where visitors can see it. We use 'in' for something inside a building.",
    not: {
      between:
        "'Between' needs two things, one on each side, such as 'between the museum and the library'. There is only one museum here.",
      on: "'On' would put the painting on the outside of the building, like a poster. A famous painting is kept inside.",
      under:
        "'Under' would put the painting below the museum, for example underground. A famous painting is shown inside.",
    },
    more: "We can also say 'at the museum' for the place. 'In the museum' says it is inside the building.",
  },
  'He is waiting _____ the corner of the street.': {
    why: "The corner of a street is a point where two streets meet. We use 'at' for a point.",
    not: {
      in: "'In the corner' is for the inside corner of a room or a box. For a street corner we use 'at' (or 'on').",
      under:
        "'Under' would put him below the corner, in a lower place. A street corner is a point on the ground.",
      between:
        "'Between' needs two things, such as 'between the bank and the shop'. A corner is one point.",
    },
    more: "People also say 'on the corner of the street'. For the corner inside a room, we say 'in the corner'.",
  },
  'The shop is _____ the high street.': {
    why: "The shop is along the high street, a road with shops on it. We use 'on' with the name of a street or road.",
    not: {
      between:
        "'Between' needs two things, such as 'between the bank and the chemist'. The high street is one road.",
      at: "'At' is for a point or a full address, like 'at 12 High Street'. For a shop somewhere along the street, we say 'on the high street'.",
      under:
        "'Under' would put the shop below the street, like an underground shop. It does not say the shop is along the road.",
    },
    more: "'In the High Street' is also used in Britain. With most street and road names, 'on' is the safe choice: on Oak Road.",
  },
  'The students are _____ the classroom now.': {
    why: "A classroom is a room with walls, and the students are inside it. We use 'in' for being inside a room.",
    not: {
      at: "'At' is for a place seen as a whole, like 'at school'. For a room with walls, we say 'in the classroom'.",
      on: "'On' is for a surface, like 'on the floor'. The students are inside the room, not on a surface.",
      above: "'Above' would put the students higher than the classroom, which does not make sense.",
    },
    more: "Compare 'in the classroom' (the room) with 'at school' (the place where you study).",
  },
  'I saw her _____ the party last night.': {
    why: "A party is an event that people go to, and we say that someone was at it. We use 'at' for events like a party, a concert or a meeting.",
    not: {
      in: "'In the party' is not used in standard English. We say 'at the party'. 'In' is for the room or building where it was.",
      on: "'On' is for a surface. A party is an event, so we do not say 'on the party'.",
      behind:
        "'Behind' would put her at the back of the party. It does not say she was at the event.",
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
    more: "Use 'at' with clock times: at six, at half past two, at midnight.",
  },
  'My birthday is _____ July.': {
    why: "July is a month, a long period of time. We use 'in' with months, seasons and years.",
    not: {
      at: "'At' is for exact times, like 'at six o’clock'. A month is a long period.",
      on: "'On' is for days and dates, like 'on 5 July'. July on its own is a whole month.",
      under: "'Under' is a place word, so it does not tell us when my birthday is.",
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
    more: "We also use 'on' with dates and special days: on 5 May, on Friday evening, on Christmas Day.",
  },
  'It often snows _____ winter.': {
    why: "Winter is a season, and a season lasts for months. We use 'in' with seasons.",
    not: {
      at: "'At' is for exact times, like 'at noon'. A season is a long period.",
      on: "'On' is for days and dates. Winter is a season, not a day.",
      above: "'Above' is a place word, so it does not tell us when it snows.",
    },
    more: "Months, seasons and years all use 'in': in spring, in May, in 2030.",
  },
  'I usually read _____ night before sleeping.': {
    why: "'At night' is a fixed phrase for the time when it is dark. We say 'at night', but 'in the morning' and 'in the afternoon'.",
    not: {
      in: "'In night' is not English. We say 'at night' for the dark hours in general, and 'in the night' for one particular night.",
      on: "'On' is for days and dates, like 'on Friday'. With the word 'night' alone we say 'at night'.",
      under: "'Under' is a place word, so it does not tell us when I read.",
    },
    more: "Compare: 'at night', but 'in the morning', 'in the afternoon' and 'in the evening'.",
  },
  'The shop opens _____ the morning.': {
    why: "We say 'in the morning', 'in the afternoon' and 'in the evening'. A part of the day uses 'in'.",
    not: {
      at: "'At' is for exact times or fixed phrases like 'at night'. We do not say 'at the morning'.",
      on: "'On' is for days and dates, like 'on Monday'. For a part of the day on its own, we use 'in'.",
      under: "'Under' is a place word, so it does not tell us when the shop opens.",
    },
    more: "When a day is named, the word changes: 'on Friday morning', but 'in the morning'.",
  },
  "We always celebrate _____ New Year's Day.": {
    why: "New Year’s Day is one named day. We use 'on' with a named day or date.",
    not: {
      at: "'At' is used for a holiday period, like 'at Christmas'. A single named day uses 'on'.",
      in: "'In' is for months, seasons and years, like 'in January'. A named day needs 'on'.",
      by: "'By' means 'at or before', so it would suggest celebrating before the day or on it.",
    },
    more: "'On' goes with named days: on Christmas Day, on my birthday, on Friday.",
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
      under: "'Under' is a place word, so it does not tell us when the train leaves.",
    },
    more: "Use 'at' with clock times: at 6.30, at noon, at midnight. 'In' counts time from now: 'The train leaves in ten minutes.'",
  },
  'Many people relax _____ the weekend.': {
    why: "In British English we say 'at the weekend'. 'At' is used for this short time off, as in 'at night' and 'at Christmas'.",
    not: {
      in: "'In the weekend' is not used in British English. We say 'at the weekend'.",
      under: "'Under' is a place word, so it does not tell us when people relax.",
      by: "'By' means 'at or before'. 'By the weekend' would mean before it starts, not during it.",
    },
    more: "Americans say 'on the weekend'. British English says 'at the weekend'. Both are understood.",
    tip: "In British English, use 'at the weekend'. For one named day, use 'on': on Saturday.",
  },
  'The film begins _____ midnight.': {
    why: "Midnight is an exact point in time. We use 'at' with exact times, and with midnight, noon and night.",
    not: {
      in: "'In' is for longer periods, like 'in the evening'. Midnight is one exact moment.",
      on: "'On' is for days and dates. Midnight is a time, not a day.",
      by: "'By' means 'at or before'. 'Begins by midnight' would say it begins at midnight or before it.",
    },
    more: "We say 'at midnight', 'at noon' and 'at night'. Each one names a point or a part of the day.",
  },
  'We are going on holiday _____ August.': {
    why: "August is a month, a long period of time. We use 'in' with months.",
    not: {
      at: "'At' is for exact times, like 'at five o’clock'. A month is a long period.",
      on: "'On' is for days and dates, like 'on 12 August'. August on its own needs 'in'.",
      under: "'Under' is a place word, so it does not tell us when we go.",
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
    more: "Compare: 'in the afternoon', but 'on Friday afternoon'. Once you name the day, use 'on'.",
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
  'The umbrella is _____ the bag, tucked inside.': {
    why: "'Tucked inside' tells us the umbrella is inside the bag, with the bag around it. We use 'in' for something inside a container.",
    not: {
      on: "'On' would put the umbrella on the outside of the bag. The scene says it is tucked inside.",
      above: "'Above' would put the umbrella higher than the bag. The scene says it is inside.",
      opposite:
        "'Opposite' would put the umbrella across from the bag, facing it. The scene says it is inside.",
    },
    more: "Compare 'in the bag' (inside it) and 'on the bag' (on the outside of it).",
  },
  'The clock is _____ the door, fixed higher up.': {
    why: "The clock is fixed higher up on the wall, over the door. We use 'above' for something at a higher level than another thing.",
    not: {
      under:
        "'Under' would put the clock lower than the door. The scene says it is fixed higher up.",
      in: "'In' would put the clock inside the door, which makes no sense for a clock on a wall.",
      between: "'Between' needs two things, one on each side. There is only one door.",
    },
    more: "'Above' means higher than something. Compare 'above the door' with 'on the door'.",
  },
  'The post office is _____ the bank and the chemist.': {
    why: "The scene names two buildings, the bank and the chemist, and the post office is in the middle: one on each side. We use 'between' for something in the middle of two things.",
    not: {
      on: "'On' would put the post office on top of the bank and the chemist, which does not fit a street of shops.",
      under:
        "'Under' would put the post office below the two buildings, like a room under the ground. It does not say it is in the middle.",
      in: "'In' would put the post office inside the bank and the chemist, which are two other buildings.",
    },
    more: "'Between' is often used with 'and': between the bank and the chemist.",
  },
  'A small mat lies _____ the front door.': {
    why: "A doormat lies on the floor at the front of the door, so people step on it as they come in. We use 'in front of' for something at the front of another thing.",
    not: {
      between: "'Between' needs two things, one on each side. There is only one door.",
      in: "'In' would put the mat inside the door, which does not make sense for a flat mat.",
      above: "'Above' would put the mat higher than the door. A mat lies on the floor.",
    },
    more: "'In front of' is the opposite of 'behind'. If something is in front of the door, you reach it before you reach the door.",
  },
}
