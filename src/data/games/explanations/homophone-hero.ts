import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Homophone Hero: the explanation a student sees after each answer, by question key
 * (src/data/games/banks/homophone-hero.ts). Written with AI on 16 October 2026 and checked
 * against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: explanations for the new questions on
 * everyday and KS3 word sets, for the two-gap questions (each wrong pair is
 * told which gap it gets wrong) and for the real lines from texts out of UK
 * copyright, and new "why not" entries for the old questions that gained a
 * third option (were and we're, loss, expect). Written with AI and checked
 * against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second, independent reader, as the founder
 * decided, each explanation against its question. Rewritten: a memory trick
 * that did not work (sow and sew both begin with s), a wrong fact (flu is cut
 * from the middle of influenza, not its end), an over-reading of Malcolm's "I
 * know him now", a claim that the animals of Animal Farm have paws, and 24
 * explanations that named or taught a word another question asks for (heir,
 * whose and theirs, weight, wrap, device, tale, the witches, allowed, "a piece
 * of cake", scene, hear, "come to the fore"). New: the explanations for the
 * oarsmen line from Great Expectations and the personnel department sentence.
 */
export const EXPLANATIONS: GameExplanations = {
  'The students left ___ bags by the classroom door.': {
    why: 'The bags belong to the students. Their is the word that shows something belongs to them: their bags.',
    not: {
      there:
        "There means in that place, as in 'I left my keys there.' It does not show who owns the bags.",
      "they're":
        "They're is short for 'they are', as in 'They're ready.' 'Left they are bags' does not make sense.",
    },
    more: 'Their begins with the same three letters as they and them: all three words are about the same people.',
  },
  'Put the new books over ___ on the shelf.': {
    why: 'The sentence points to a place: over there. There tells you where something is.',
    not: {
      their:
        "Their shows that something belongs to them, as in 'Their house is big.' It does not name a place.",
      "they're":
        "They're means 'they are', as in 'They're my friends.' 'Over they are' does not make sense.",
    },
    more: "There has the word 'here' inside it. Here and there both point to places.",
  },
  '___ going to be late for the school trip.': {
    why: "The sentence needs 'they are': 'They are going to be late.' They're is the short form, and the apostrophe stands for the missing letter a.",
    not: {
      Their:
        "Their shows that something belongs to them, as in 'Their coach is here.' Nothing is owned in this sentence: it means 'they are'.",
      There:
        "There points to a place or starts 'There is...', as in 'There is a coach.' It does not mean 'they are' here.",
    },
  },
  'My cousins say ___ favourite subject is science.': {
    why: 'The favourite subject belongs to my cousins. Their is the word that shows belonging: their favourite subject.',
    not: {
      there:
        "There means in that place, as in 'I will meet you there.' It does not show that the subject belongs to them.",
      "they're":
        "They're means 'they are', as in 'They're very kind.' 'They are favourite subject' does not make sense.",
    },
  },
  'Is ___ enough time to finish the test?': {
    why: "'Is there enough time?' asks whether enough time exists. We use there with is or are to say that something exists.",
    not: {
      their:
        "Their shows belonging, as in 'Their dog is friendly.' Nobody owns the time in this question.",
      "they're":
        "They're means 'they are', as in 'They're in the garden.' 'Is they are enough time?' does not make sense.",
    },
  },
  'I think ___ waiting for us outside.': {
    why: "Put 'they are' in the gap: 'I think they are waiting for us outside.' That works, so you need the short form they're.",
    not: {
      their:
        "Their shows belonging, as in 'Their car is blue.' Nothing is owned here: the sentence means 'they are waiting'.",
      there:
        "There names a place or says that something exists, as in 'There is a car.' It cannot mean 'they are waiting'.",
    },
    tip: "Swap in 'they are'. If the sentence still makes sense, use they're, with the apostrophe.",
  },
  'The twins hung ___ wet coats by the radiator.': {
    why: 'The wet coats belong to the twins. Their is the word that shows something belongs to them: their coats.',
    not: {
      there:
        "There points to a place or says that something exists, as in 'Put it over there.' It cannot show who owns the coats.",
      "they're":
        "They're is short for 'they are'. 'The twins hung they are wet coats' makes no sense.",
    },
    tip: "Ask who the coats belong to. If the answer is 'to them', use their.",
  },
  '___ is a light on in the empty house.': {
    why: 'The sentence says that something exists: a light is on. There starts sentences like this: there is, there are, there was.',
    not: {
      Their:
        "Their shows belonging, as in 'Their dog barked.' Nobody owns anything in this sentence.",
      "They're": "They're means 'they are'. 'They are is a light on' makes no sense.",
    },
    more: 'There is used for a place (over there) and to say that something exists (there is a light). Their is only ever about belonging.',
  },
  'Ask the twins whether ___ coming to the party.': {
    why: "Put 'they are' in the gap: 'whether they are coming to the party'. It fits, so the short form they're is needed, with its apostrophe.",
    not: {
      their:
        "Their shows belonging, as in 'their bikes'. Nothing belongs to the twins here: the sentence means 'they are coming'.",
      there:
        "There points to a place or says that something exists. 'Whether there coming' leaves the sentence without a verb.",
    },
  },
  'Our neighbours have painted ___ front door red.': {
    why: 'The front door belongs to the neighbours. Their shows belonging: their front door.',
    not: {
      there:
        "There is about a place or about something existing, as in 'There is a cat.' It cannot say whose door it is.",
      "they're": "They're means 'they are'. 'Have painted they are front door' makes no sense.",
    },
  },
  '“___ all afraid,” said Poole.': {
    why: "Poole, Dr Jekyll's butler, means 'They are all afraid': every servant in the house is frightened. 'They are' shortens to they're.",
    not: {
      Their:
        "Their shows belonging, as in 'their master'. 'Their all afraid' has no verb: Poole means 'they are'.",
      There:
        "There points to a place or says that something exists. 'There all afraid' has no verb.",
    },
  },
  '___ is no doubt whatever about that.': {
    why: 'The narrator is saying that something exists, or here does not: no doubt at all. There starts sentences like this: there is, there was.',
    not: {
      Their:
        "Their shows belonging, as in 'their house'. Nothing belongs to anyone in this sentence.",
      "They're": "They're means 'they are'. 'They are is no doubt' makes no sense.",
    },
    more: "This is the second sentence of A Christmas Carol, straight after 'Marley was dead: to begin with.' Dickens insists on the death so that the ghost is a shock.",
  },
  'We are going ___ the library after lunch.': {
    why: 'The word shows direction towards a place: going to the library. To shows direction.',
    not: {
      too: "Too means 'also' or 'more than enough', as in 'I am too tired.' It does not show direction.",
      two: "Two is the number 2, as in 'two books'. It does not show direction.",
    },
    more: 'To has two main jobs. It shows direction (to the library) and it comes before a verb (to read, to sing).',
  },
  'The soup was far ___ hot to eat.': {
    why: "'Far too hot to eat' means hotter than is wanted, so the sentence needs too. Too means 'more than enough' or 'more than is wanted' before a word such as hot.",
    not: {
      to: "To shows direction or comes before a verb, as in 'to school' or 'to eat'. It cannot mean 'more than enough'.",
      two: "Two is the number 2, as in 'two bowls'. It does not mean 'more than enough'.",
    },
    tip: "A trick: too has too many o letters. Use it when you mean 'also' or 'more than enough'.",
  },
  'I need ___ pens for the exam.': {
    why: 'The gap is a number: I need 2 pens. Two is the word for the number 2.',
    not: {
      to: "To shows direction or comes before a verb, as in 'to school'. It is not a number.",
      too: "Too means 'also' or 'more than enough', as in 'Me too.' It is not a number.",
    },
    more: 'Two shares its w with twin and twice, which are also about the number 2.',
  },
  'Can I come ___, please?': {
    why: "The sentence means 'Can I come as well?' Here too means 'as well' or 'also'.",
    not: {
      to: "To shows direction, as in 'Can I come to the party?' Nothing follows it here to name a place, so it does not fit.",
      two: "Two is the number 2, as in 'two friends'. 'Can I come two, please?' does not make sense.",
    },
  },
  'She walked ___ the front of the room.': {
    why: 'The word shows movement towards a place: the front of the room. To shows direction.',
    not: {
      too: "Too means 'also' or 'more than enough', as in 'It is too far.' It does not show direction.",
      two: "Two is the number 2, as in 'two steps'. It does not show direction.",
    },
    tip: 'If the words after the gap say where someone goes, use to.',
  },
  'There are ___ weeks left until the holidays.': {
    why: 'The gap is a number: there are 2 weeks left. Two is the word for the number 2.',
    not: {
      to: "To shows direction or comes before a verb, as in 'to school'. It is not a number.",
      too: "Too means 'also' or 'more than enough', as in 'It is too late.' It is not a number.",
    },
  },
  'Tickets for the concert cost ___ much for most of us.': {
    why: "'Too much' means more than people can pay. Too, with two o letters, means 'more than is wanted' or 'also'.",
    not: {
      to: "To shows direction or comes before a verb, as in 'go to town' or 'to sing'. 'Cost to much' is a common slip.",
      two: "Two is the number 2. 'Cost two much' makes no sense.",
    },
    tip: "If you could put 'very' or 'more than enough' in the gap, you need too.",
  },
  'Only ___ people in the class had read the whole book.': {
    why: 'The gap is a number: only 2 people had read it. Two is the word for the number 2.',
    not: {
      to: "To shows direction or comes before a verb, as in 'to read'. It is not a number.",
      too: "Too means 'also' or 'more than is wanted', as in 'too cold'. It is not a number.",
    },
    more: 'Two shares its w with twin, twice and between, which are all about the number 2.',
  },
  'The puppy was ___ small to climb the stairs.': {
    why: "The puppy was smaller than it needed to be, so it could not climb. Too means 'more than is wanted', here 'not big enough': too small.",
    not: {
      to: "To comes before a verb or shows direction, as in 'to climb'. The second to in the sentence is right, but the gap needs too.",
      two: "Two is the number 2. 'Two small' would mean two of something small, which makes no sense here.",
    },
  },
  'The ___ teams shook hands before the match.': {
    why: 'A match is played by 2 teams, and the gap counts them. Two is the word for the number 2.',
    not: {
      to: "To shows direction or comes before a verb, as in 'to the pitch'. It cannot count the teams.",
      too: "Too means 'also' or 'more than is wanted'. 'The too teams' makes no sense.",
    },
  },
  '___ of both kinds makes up ___.': {
    why: 'Puck is counting lovers: two men and two women make four. Both gaps are numbers: two and four.',
    not: {
      'Two … for': 'The first word is right. But the total is a number, four, with a u.',
      'Too … four':
        'The second word is right. But too means also or more than wanted; the count is two.',
      'Too … for': 'Neither fits. Both gaps are numbers: two and four.',
    },
    more: "Puck has three of the four Athenian lovers in front of him and waits for the fourth: 'Yet but three? Come one more.'",
  },
  '___ did you put my calculator?': {
    why: 'The sentence asks about a place: in what place did you put it? Where is the word for asking about places.',
    not: {
      Wear: "Wear means to have clothes on, as in 'I wear a coat.' It does not ask about a place.",
      Were: "Were is a past form of 'be', as in 'We were late.' 'Were did you put it?' asks nothing about a place.",
      "We're":
        "We're is short for 'we are', as in 'We're ready.' 'We are did you put my calculator?' makes no sense.",
    },
    more: "Where and there both have the word 'here' inside them. All three words are about places.",
  },
  'You must ___ a tie with the school uniform.': {
    why: 'A tie is an item of clothing. Wear means to have clothes on your body: wear a tie.',
    not: {
      where:
        "Where asks about a place, as in 'Where is the hall?' It cannot mean to have clothes on.",
      were: "Were is a past form of 'be', as in 'They were happy.' After 'must' the sentence needs an action, and 'must were' is not English.",
      "we're": "We're is short for 'we are'. 'You must we are a tie' makes no sense.",
    },
  },
  'This is the room ___ we sit our exams.': {
    why: "The gap joins 'the room' to what happens in it: we sit our exams in that place. Where links a place to what happens in it.",
    not: {
      wear: "Wear means to have clothes on, as in 'I wear a hat.' It does not name a place.",
      were: "Were is a past form of 'be', as in 'You were right.' It cannot link the room to what happens in it.",
      "we're":
        "We're means 'we are'. 'The room we are we sit our exams' says 'we' twice and makes no sense.",
    },
  },
  'What will you ___ to the school disco?': {
    why: 'The question is about clothes: what will you put on for the disco? Wear means to have clothes on your body.',
    not: {
      where:
        "Where asks about a place, as in 'Where is the gym?' This question is about clothes, not a place.",
      were: "Were is a past form of 'be'. After 'will you' the sentence needs an action word such as put on.",
      "we're": "We're is short for 'we are'. 'What will you we are to the disco?' makes no sense.",
    },
  },
  'We ___ late because the bus broke down.': {
    why: "The sentence says what we were in the past: late. Were is the past form of 'be' after we, you and they: we were late.",
    not: {
      where: "Where asks or tells about a place, as in 'Where is it?' 'We where late' has no verb.",
      wear: "Wear means to have clothes on, as in 'I wear a scarf.' It does not fit with 'late'.",
      "we're":
        "We're means 'we are'. 'We we are late' says 'we' twice, and 'because the bus broke down' is in the past.",
    },
    tip: "Were has no h. If no place is meant, and you could say 'are' in the present, it is were.",
  },
  'Can you tell me ___ the nearest station is?': {
    why: 'The question asks about a place: the nearest station. Where asks or tells about places.',
    not: {
      were: "Were is a past form of 'be', as in 'You were kind.' It cannot ask about a place.",
      wear: "Wear means to have clothes on. 'Tell me wear the station is' makes no sense.",
      "we're": "We're means 'we are'. 'Tell me we are the nearest station is' makes no sense.",
    },
  },
  'They ___ the first to arrive at the party.': {
    why: "The sentence says what they were in the past: the first to arrive. Were is the past form of 'be' after they, we and you.",
    not: {
      where:
        "Where is about a place, as in 'Where did they go?' 'They where the first' has no verb.",
      wear: "Wear means to have clothes on. 'They wear the first' makes no sense.",
      "we're": "We're means 'we are'. 'They we are the first' makes no sense.",
    },
  },
  'If you ___ in my place, what would you do?': {
    why: "'If you were in my place' imagines something that is not true. After if, were is used for an imagined situation: if you were, if I were.",
    not: {
      where:
        "Where asks about a place, as in 'Where are you?' The sentence needs a verb after 'you'.",
      wear: "Wear means to have clothes on. 'If you wear in my place' makes no sense.",
      "we're": "We're means 'we are'. 'If you we are in my place' makes no sense.",
    },
    more: "This is a standard way to imagine: 'If I were rich, I would travel.' Careful writers use were, not was, after if.",
  },
  '___ going to the beach if the sun comes out.': {
    why: "Put 'we are' in the gap: 'We are going to the beach.' It fits, so the short form we're is needed, with its apostrophe.",
    not: {
      Were: "Were is a past form of 'be'. 'Were going to the beach' has no subject: we need to know who is going.",
      Where: "Where is about a place. 'Where going to the beach' is not a full sentence.",
      Wear: "Wear means to have clothes on. 'Wear going to the beach' makes no sense.",
    },
    tip: "The apostrophe in we're stands for the missing a of 'are'. If you can say 'we are', use we're.",
  },
  'The old houses ___ knocked down to make room for a car park.': {
    why: "The sentence tells what happened to the houses in the past. Were is the past form of 'be' with a plural subject: the houses were knocked down.",
    not: {
      where: "Where is about a place. 'The houses where knocked down' has no verb.",
      wear: 'Wear means to have clothes on. Houses cannot wear anything here.',
      "we're": "We're means 'we are'. 'The houses we are knocked down' makes no sense.",
    },
  },
  'This is the park ___ I learnt to ride a bike.': {
    why: 'The gap joins the park to what happened in it: I learnt to ride a bike in that place. Where links a place to what happens there.',
    not: {
      were: "Were is a past form of 'be'. It cannot join the park to what happened in it.",
      wear: "Wear means to have clothes on. 'The park wear I learnt' makes no sense.",
      "we're": "We're means 'we are'. 'The park we are I learnt' makes no sense.",
    },
  },
  '___ not going to pick up any rubbish that drifts in.': {
    why: "The artilleryman is describing his plan: 'We are not going to pick up any rubbish.' 'We are' shortens to we're, with an apostrophe.",
    not: {
      Were: "Were is a past form of 'be'. 'Were not going' has no subject, and the plan is for the future.",
      Where: "Where is about a place. 'Where not going' is not a sentence.",
      Wear: "Wear means to have clothes on. 'Wear not going' makes no sense.",
    },
  },
  '___ all good friends ___, I hope.': {
    why: "The landlord means 'We are all good friends here.' 'We are' shortens to we're. Here means in this place, the inn.",
    not: {
      "We're … hear": "The first word is right. But hear is about sound; 'in this place' is here.",
      'Were … here':
        "The second word is right. But were is a past form of 'be', and the sentence needs 'we are'.",
      'Were … hear': "Neither fits. 'We are' needs we're, and 'in this place' needs here.",
    },
  },
  'There is ___ point in waiting any longer.': {
    why: "The sentence means waiting is useless: there is not any point. No means 'not any' here.",
    not: {
      know: "Know means to have information in your mind, as in 'I know the way.' 'There is know point' makes no sense.",
      now: "Now means at this moment. 'There is now point' is not English: the sentence needs 'not any'.",
    },
    tip: "Know is about knowledge, and both words begin with a silent k. No is a refusal or 'not any'.",
  },
  'I have ___ idea what time the film starts.': {
    why: "'I have no idea' means I do not know at all. No means 'not any': I have not any idea.",
    not: {
      know: "Know is a verb, as in 'I know her.' 'I have know idea' puts a verb where 'not any' is needed.",
      now: "Now means at this moment, as in 'Come now.' 'I have now idea' is not English.",
    },
  },
  'I ___ him ___.': {
    why: 'Malcolm recognises the man who has just arrived. The first gap is the verb know, to recognise. The second is a time word: at this moment, now.',
    not: {
      'no … now':
        "The second word is right. But no means 'not any'; 'I no him' needs the verb know, with its silent k.",
      'know … know':
        'The first word is right. But the second gap means at this moment, which is now.',
      'now … know': 'Both are the wrong way round. The verb is know, and the time word is now.',
    },
    more: "Just before, Malcolm says 'My countryman; but yet I know him not.' The repeated 'know him' marks the moment he recognises Ross.",
  },
  '___ does he ___ live?': {
    why: "Jane asks about Mr Rochester's home, a place, so the first gap is where. The second is about the present time, as opposed to before: now.",
    not: {
      'Where … know':
        'The first word is right. But the second gap is a time word, now, not the verb know.',
      'Were … now':
        "The second word is right. But were is a past form of 'be'; a question about a place starts with where.",
      'Were … know':
        "Neither fits. A question about a place needs where, and 'at this time' is now.",
    },
  },
  'I want to ___ a present for my sister.': {
    why: 'To get a present from a shop you pay for it. Buy means to get something by paying for it.',
    not: {
      by: "By means beside, through or done by someone, as in 'a book by Dickens'. After 'to' the sentence needs a verb.",
      bye: "Bye is short for goodbye, as in 'Bye for now.' You cannot 'bye' a present.",
    },
    more: 'Buy, by and bye are three different words. Buy is about paying, by is a small linking word, and bye is a farewell.',
  },
  '“___, see you tomorrow,” she called from the gate.': {
    why: 'She is saying goodbye. Bye is the short, friendly form of goodbye.',
    not: {
      Buy: "Buy means to get something by paying, as in 'Buy some bread.' It is not a way of saying goodbye.",
      By: "By means beside or done by someone, as in 'by the sea'. It is not a farewell.",
    },
  },
  'The book was written ___ a famous explorer.': {
    why: 'The gap names who wrote the book. By shows who did something: written by a famous explorer.',
    not: {
      buy: "Buy means to get something by paying. 'Written buy a famous explorer' makes no sense.",
      bye: 'Bye is short for goodbye. It cannot show who wrote the book.',
    },
  },
  'This present is ___ you.': {
    why: 'The present is meant to go to you. For shows who something is meant for.',
    not: {
      four: "Four is the number 4, as in 'four legs'. 'This present is four you' makes no sense.",
      fore: "Fore means at the front, as in 'fore and aft' on a ship. It cannot show who the present is meant for.",
    },
  },
  'A square has ___ equal sides.': {
    why: 'A square has 4 sides, all the same length. Four is the word for the number 4.',
    not: {
      for: "For shows who or what something is meant for, as in 'a gift for you'. It is not a number.",
      fore: "Fore means the front part, as in 'the fore of the ship'. It is not a number.",
    },
    more: 'Four keeps its u in fourteen, but loses it in forty. Forty is one of the most often misspelt number words.',
  },
  'Her talent for music came to the ___ in the school concert.': {
    why: 'To come to the fore means to come to the front, where people notice it. Fore means the front part of something.',
    not: {
      for: "For shows purpose, as in the 'talent for music' earlier in the sentence. 'Came to the for' makes no sense.",
      four: "Four is the number 4. 'Came to the four' makes no sense.",
    },
    more: 'Fore appears at the start of words about the front or what comes first: forehead, foreground, forecast and foresee.',
  },
  'We waited ___ an hour in the cold.': {
    why: 'The gap says how long we waited. For shows a length of time: for a minute, for a month.',
    not: {
      four: "Four is the number 4. 'We waited four an hour' makes no sense, although 'four hours' would.",
      fore: 'Fore means the front part of something. It cannot show how long we waited.',
    },
  },
  'Thank you ___ helping me with my homework.': {
    why: "The gap gives the reason for the thanks. For shows the reason after 'thank you': thank you for helping.",
    not: {
      four: "Four is the number 4. 'Thank you four helping me' makes no sense.",
      fore: 'Fore means the front part of something. It cannot give the reason for the thanks.',
    },
  },
  'What did you have ___ lunch today?': {
    why: 'The question asks what food you ate as lunch. For links a meal to what is eaten: for lunch, for breakfast.',
    not: {
      four: "Four is the number 4. 'What did you have four lunch?' makes no sense.",
      fore: "Fore means the front part of something. It does not fit with 'lunch'.",
    },
  },
  'The clock struck ___, and school was over.': {
    why: "The clock's chimes count the time: here 4 o'clock, when school ended. Four is the word for the number 4.",
    not: {
      for: "For shows purpose or who something is meant for. 'The clock struck for' makes no sense.",
      fore: 'Fore means the front part of something. A clock cannot strike the front.',
    },
  },
  '___ were ___ of us.': {
    why: "Mary Shelley counts the people in the ghost-story contest. 'There were' says that people existed, and the number 4 is four.",
    not: {
      'There … for': 'The first word is right. But the gap is a number: four, with a u.',
      'Their … four':
        "The second word is right. But their shows belonging; 'There were' says how many there were.",
      'Their … for': "Neither fits. 'There were' needs there, and the number is four.",
    },
    more: "The four were Lord Byron, Percy Shelley, Mary Shelley and Byron's doctor, John Polidori. The contest of 1816 began Frankenstein.",
  },
  'Please ___ your name at the top of the page.': {
    why: 'You put your name on the page with a pen. Write means to put words on paper or a screen.',
    not: {
      right:
        "Right means correct, or the side opposite left. 'Please right your name' makes no sense.",
      rite: 'A rite is a ceremony, such as a wedding. You cannot rite your name.',
    },
    more: 'Write begins with a silent w, like wrist, wrong and wreck. Its past form is wrote.',
  },
  'Turn ___ at the traffic lights.': {
    why: 'The sentence gives a direction: the side opposite left. Right names that direction.',
    not: {
      write: "Write means to put words on paper. 'Turn write' makes no sense.",
      rite: "A rite is a ceremony. 'Turn rite' makes no sense.",
    },
  },
  'Starting secondary school can feel like a ___ of passage.': {
    why: "A rite of passage is a ceremony or event that marks a big change in someone's life. A rite is a ceremony.",
    not: {
      right:
        "Right means correct, or the side opposite left. 'A right of passage' is a common mistake for this phrase.",
      write: "Write means to put words on paper. It is a verb, and the gap needs a noun after 'a'.",
    },
    more: 'Rites of passage mark moving from one stage of life to the next, such as a first day at school, a wedding or a coming-of-age ceremony.',
  },
  'Is this the ___ answer?': {
    why: 'The question asks whether the answer is correct. Right means correct.',
    not: {
      write:
        "Write means to put words on paper. 'The write answer' makes no sense: the gap needs a describing word.",
      rite: "A rite is a ceremony, such as a wedding. 'The rite answer' makes no sense.",
    },
  },
  'Farmers ___ their seeds in spring.': {
    why: 'Farmers put seeds into the ground to grow. Sow means to plant seeds.',
    not: {
      sew: 'Sew means to join cloth with a needle and thread. Farmers do not sew seeds.',
      so: "So links a reason to a result, as in 'It rained, so we stayed in.' It cannot be what farmers do.",
    },
    more: 'Sow ends in ow, like grow: you sow seeds so that they grow. Sew has an e, like needle and thread.',
  },
  'Can you ___ this button back on my coat?': {
    why: 'A button is fixed on with a needle and thread. Sew means to join or fix with a needle and thread.',
    not: {
      sow: "Sow means to plant seeds, as in 'sow the seeds in rows'. You cannot plant a button.",
      so: "So links a reason to a result, as in 'I was cold, so I wore a coat.' It cannot be the action here.",
    },
  },
  'It was raining, ___ we stayed indoors.': {
    why: 'The second half is the result of the first: it rained, and because of that we stayed in. So links a reason to its result.',
    not: {
      sew: "Sew means to join cloth with a needle and thread. 'It was raining, sew we stayed indoors' makes no sense.",
      sow: 'Sow means to plant seeds. It cannot link the rain to staying in.',
    },
  },
  'She ___ her bike to school every day.': {
    why: 'The gap is an action in the past: she travelled on her bike. Rode is the past form of ride.',
    not: {
      road: "A road is a way for traffic, as in 'Cross the road.' It is a noun, and the gap needs a verb.",
      rowed: 'Rowed is the past form of row, to move a boat with oars. You cannot row a bike.',
    },
    more: "Ride is an irregular verb: ride, rode, ridden. 'I have ridden' is correct, and 'I have rode' is a common mistake.",
  },
  'The ___ was closed because of the flood.': {
    why: 'Something was closed to traffic because of the flood. A road is a way for cars and people to travel along.',
    not: {
      rode: "Rode is the past form of ride, as in 'He rode a horse.' The gap needs a noun after 'the'.",
      rowed:
        "Rowed is the past form of row, to move a boat with oars. The gap needs a noun after 'the'.",
    },
  },
  'I felt mortified to be of so little use in the boat; but there were few better oarsmen than my two friends, and they ___ with a steady stroke, that was to last all day.':
    {
      why: 'Oarsmen move a boat with oars, and a stroke is one pull on the oars. Rowed is the past form of row, to move a boat with oars.',
      not: {
        rode: "Rode is the past form of ride, as in 'She rode a horse.' Oarsmen pulling with a steady stroke are rowing, not riding.",
        road: "A road is a way for traffic. It is a noun, and after 'they' the sentence needs a verb.",
      },
      more: "Pip's arm was badly burnt in the fire at Satis House, so he can only steer while Herbert and Startop row Magwitch down the Thames.",
    },
  'The nurse will ___ the baby every month.': {
    why: 'The nurse measures how heavy the baby is. Weigh means to find out how heavy something is.',
    not: {
      way: "Way means a route or a method, as in 'the way home'. It is a noun, and after 'will' the sentence needs a verb.",
      whey: 'Whey is the watery liquid left when milk turns into cheese. It cannot be what the nurse does.',
    },
    more: 'Weigh has the same eigh as eight and neighbour, and the gh is silent in all three.',
  },
  'Cheese is made from curds, and the liquid left over is called ___.': {
    why: 'When milk is made into cheese it splits into solid curds and a thin liquid. That liquid is called whey.',
    not: {
      way: "Way means a route or a method, as in 'the way to school'. It is not a liquid.",
      weigh:
        'Weigh means to find out how heavy something is. It is a verb, and the gap needs the name of a liquid.',
    },
    more: 'Whey is an old word, kept in the nursery rhyme about Little Miss Muffet, who ate her curds and whey.',
  },
  'I bought a new ___ of trainers.': {
    why: 'Trainers come in twos, one for each foot. A pair is two things that go together: a pair of trainers, a pair of gloves.',
    not: {
      pear: "A pear is a fruit, as in 'a ripe pear'. You cannot buy a pear of trainers.",
      pare: "Pare is a verb meaning to cut away the outer layer, as in 'pare an apple'. The gap needs a noun after 'a new'.",
    },
  },
  'She cut the ripe ___ into slices.': {
    why: 'Something ripe that can be sliced is a fruit. A pear is a sweet fruit, narrow at the top and round at the bottom.',
    not: {
      pair: "A pair is two things that go together, as in 'a pair of socks'. A pair cannot be ripe.",
      pare: "Pare is a verb meaning to trim the skin off. The gap needs a noun after 'the ripe'.",
    },
    tip: 'A memory trick: you eat a pear, and both words contain ea.',
  },
  'Use a sharp knife to ___ the skin off the apple.': {
    why: 'The knife takes the thin outer layer off the apple. Pare means to cut away the outer layer or edge of something.',
    not: {
      pair: "A pair is two things that go together. It is a noun, and after 'to' the sentence needs a verb.",
      pear: "A pear is a fruit. 'To pear the skin off the apple' makes no sense.",
    },
    more: "Pare can also mean to cut something back bit by bit: 'The school had to pare its spending to the bone.'",
  },
  'The library was so ___ that I could hear the clock ticking.': {
    why: 'If you can hear a clock ticking, there is very little noise. Quiet means making little or no noise. It ends in -et.',
    not: {
      quite:
        "Quite means fairly or completely, as in 'quite good'. 'So quite' makes no sense: the gap needs a describing word.",
      quit: "Quit means to stop or leave, as in 'quit the club'. It cannot describe a room.",
    },
    tip: "Quiet ends -et, the same letters that end 'secret', and a secret is told quietly. Quite comes before another word: quite small, quite sure.",
  },
  'She ___ the team after an argument with the coach.': {
    why: 'She left the team for good. Quit means to stop doing something or to leave, and its past form is also quit.',
    not: {
      quite:
        "Quite means fairly or completely, as in 'quite late'. It cannot be the action she did.",
      quiet: "Quiet means making little noise. 'She quiet the team' makes no sense.",
    },
  },
  'He laughed until his ears were ___ red.': {
    why: 'His ears went very red from laughing. Quite here means very, or completely: quite red.',
    not: {
      quiet: "Quiet means making little noise. 'His ears were quiet red' makes no sense.",
      quit: 'Quit means to stop or leave. It cannot describe how red his ears were.',
    },
    more: "Quite has two meanings in British English: 'fairly' (quite good) and 'completely' (quite sure). The sentence decides which.",
  },
  'Estella returned, and she ___ remained ___.': {
    why: 'Pip has just stayed silent, and Estella does the same. Too here means also: she too. Remaining silent is remaining quiet.',
    not: {
      'too … quite':
        'The first word is right. But quite means fairly or completely; silent is quiet, ending -et.',
      'to … quiet': "The second word is right. But 'she to remained' needs too, meaning also.",
      'to … quite': "Neither fits. 'She also' needs too, and silent is quiet.",
    },
  },
  'The goalkeeper ___ the ball to the defender.': {
    why: 'The goalkeeper launched the ball through the air with an arm. Threw is the past form of throw.',
    not: {
      through:
        "Through means from one side to the other, as in 'through the door'. The sentence needs the verb, the action.",
      thorough:
        "Thorough means careful and complete, as in 'a thorough check'. It is a describing word, not an action.",
    },
    more: 'Throw is an irregular verb: throw, threw, thrown, like grow, grew, grown.',
  },
  'He ___ the letter into her lap.': {
    why: 'He tossed the letter so it landed in her lap. Threw is the past form of throw.',
    not: {
      through:
        "Through means from one side to the other, as in 'through the door'. The sentence needs the action, a verb.",
      thorough: 'Thorough means careful and complete. It is a describing word, not an action.',
    },
  },
  'Well, I gave my mind a ___ rest by plunging into a chemical analysis.': {
    why: 'Holmes rested his mind completely by doing chemistry. Thorough means complete and careful: a thorough rest.',
    not: {
      through:
        "Through means from one side to the other. 'A through rest' makes no sense: the gap needs a describing word.",
      threw: "Threw is the past form of throw. 'A threw rest' makes no sense.",
    },
    more: 'Thorough is through with an extra o in the middle. Thoroughly and thoroughness keep both.',
  },
  'Be careful not to ___ your bus pass.': {
    why: 'The sentence means do not let your pass go missing. Lose means to no longer have something. It has one o.',
    not: {
      loose:
        "Loose is usually a describing word meaning not tight, as in 'a loose tooth'. Here the sentence needs a verb meaning to stop having something.",
      loss: "Loss is a noun, the thing that happens when something goes, as in 'a sad loss'. After 'not to' the sentence needs a verb.",
    },
    more: 'Lose ends with a z sound, but loose ends with an s sound. A common mistake is to put loose when you mean lose.',
  },
  'This screw is too ___ and needs tightening.': {
    why: 'The screw needs tightening, so it is not tight. Loose means not tight or not firmly fixed. It has two o letters.',
    not: {
      lose: "Lose means to no longer have something, as in 'I hope I do not lose my place.' It is a verb, and the sentence needs a describing word.",
      loss: "Loss is a noun meaning something gone, as in 'a loss of money'. 'Too loss' makes no sense: the sentence needs a describing word.",
    },
  },
  'If we ___ this match, we are out of the cup.': {
    why: 'The sentence is about not winning: if we do not win, we are out. Lose is the verb that means the opposite of win.',
    not: {
      loose:
        "Loose means not tight or not fixed, as in 'a loose button'. It does not mean the opposite of win.",
      loss: "Loss is the noun: 'the loss of this match'. After 'if we' the sentence needs a verb, an action.",
    },
  },
  'The dog got out through a ___ fence panel.': {
    why: 'A fence panel that is not fixed firmly lets a dog out. Loose means not held firmly in place.',
    not: {
      lose: "Lose means to no longer have something, as in 'I always lose my pencil.' It is a verb, and here a describing word is needed.",
      loss: "Loss is a noun meaning something gone. 'A loss fence panel' makes no sense: the word must describe the panel.",
    },
  },
  'The team was upset after its ___ in the final.': {
    why: "After 'its', the gap needs a noun: the thing that happened in the final. A loss is a defeat, the result of not winning.",
    not: {
      lose: "Lose is the verb, as in 'We may lose the final.' After 'its' the sentence needs a noun.",
      loose:
        "Loose means not tight, as in 'a loose shoelace'. It cannot name what happened in the final.",
    },
    more: "Loss is the noun and lose the verb: 'If we lose, it will be our first loss of the season.'",
  },
  "But don't ___ your temper.": {
    why: 'Drummle tells Pip not to get angry. To lose your temper is to stop keeping calm. Lose, with one o, is the verb meaning to stop having something.',
    not: {
      loose:
        "Loose means not tight, as in 'a loose knot'. Putting loose here, where the verb lose is meant, is a very common mistake.",
      loss: "Loss is a noun, as in 'a great loss'. After 'don't' the sentence needs a verb.",
    },
  },
  'Everyone passed the test ___ one student.': {
    why: "The sentence leaves out one student. Except means 'not including'.",
    not: {
      accept:
        "Accept means to take or agree to something, as in 'She will accept the prize.' It does not mean 'not including'.",
      expect:
        "Expect means to think something will happen, as in 'I expect rain.' 'Everyone passed the test expect one student' makes no sense.",
    },
    tip: 'Except has an x. Picture an x crossing out the student who is left out.',
  },
  'The shop is open every day ___ Sunday.': {
    why: "Sunday is the one day when the shop is not open. Except means 'not including': every day but Sunday.",
    not: {
      accept:
        "Accept means to take or agree to something, as in 'Please accept my apology.' It does not mean 'not including'.",
      expect:
        "Expect means to think something will happen, as in 'We expect visitors.' It cannot leave Sunday out.",
    },
  },
  'I ___ your apology, so let us say no more about it.': {
    why: 'The speaker takes the apology and forgives: so let us say no more. Accept means to take or agree to something offered.',
    not: {
      except:
        "Except means 'not including', as in 'everyone except me'. It cannot be what the speaker does with the apology.",
      expect:
        "Expect means to think something will happen. 'I expect your apology, so let us say no more' contradicts itself: the apology has not been made.",
    },
    tip: 'You accept a gift, an offer or an apology. Both accept and agree begin with a.',
  },
  'We ___ the parcel to arrive on Friday.': {
    why: 'We think the parcel will arrive on Friday. Expect means to think that something will happen.',
    not: {
      except: "Except means 'not including'. 'We except the parcel to arrive' makes no sense.",
      accept:
        "Accept means to take something offered. You can accept a parcel, but 'accept the parcel to arrive' is not English.",
    },
  },
  'All the men ___ gone ___ one.': {
    why: "The men had all run away, but one had not. Were is the past of 'be' with men. Except means 'not including': all but one.",
    not: {
      'were … accept':
        "The first word is right. But accept means to take something offered; 'not including' is except.",
      'where … except':
        "The second word is right. But where is about a place; 'the men were gone' needs the verb were.",
      'where … accept':
        "Neither fits. The sentence needs the verb were and the word for 'not including', except.",
    },
  },
  'The bride walked slowly down the ___.': {
    why: 'In a church, people walk to the front along the passage between the rows of seats. That passage is called the aisle.',
    not: {
      isle: 'An isle is an island, as in the Isle of Skye. You cannot walk down an isle in a church.',
      "I'll": "I'll is short for 'I will'. 'Down the I will' makes no sense.",
    },
    more: 'Aisle and isle both have a silent s. An aisle is also the passage between shelves in a supermarket or seats on a plane.',
  },
  '___ meet you at the bus stop after school.': {
    why: "Put 'I will' in the gap: 'I will meet you at the bus stop.' It fits, so the short form I'll is needed, with its apostrophe.",
    not: {
      Aisle: "An aisle is a passage between rows of seats. 'Aisle meet you' makes no sense.",
      Isle: "An isle is an island. 'Isle meet you' makes no sense.",
    },
  },
  'They spent the summer on a small Scottish ___.': {
    why: 'You spend a summer on a piece of land in the sea. An isle is an island, a word often used in names such as the Isle of Mull.',
    not: {
      aisle:
        'An aisle is a passage between rows of seats or shelves. You cannot spend a summer on one.',
      "I'll": "I'll is short for 'I will'. 'A small Scottish I will' makes no sense.",
    },
  },
  'The cut on my knee should ___ in a few days.': {
    why: 'A cut gets better and closes up. Heal means to become healthy again, or to make someone healthy.',
    not: {
      heel: "Your heel is the back part of your foot. It is a noun, and after 'should' the sentence needs a verb.",
      "he'll": "He'll is short for 'he will'. 'The cut should he will' makes no sense.",
    },
    tip: 'Heal and health share the letters hea, which helps you remember the spelling.',
  },
  'My new shoes have rubbed the back of my ___.': {
    why: 'New shoes often rub the back of the foot. That part of the foot is the heel.',
    not: {
      heal: "Heal means to get better, as in 'The wound will heal.' It is a verb, and the gap needs a part of the body.",
      "he'll": "He'll means 'he will'. 'The back of my he will' makes no sense.",
    },
  },
  '___ be here as soon as his train arrives.': {
    why: "Put 'he will' in the gap: 'He will be here as soon as his train arrives.' It fits, so the short form he'll is needed.",
    not: {
      Heal: "Heal means to get better. 'Heal be here' makes no sense.",
      Heel: "A heel is the back of the foot. 'Heel be here' makes no sense.",
    },
  },
  'I ___ my cousin a birthday card.': {
    why: 'The card went from me to my cousin in the past. Sent is the past form of send.',
    not: {
      scent: "A scent is a smell, as in 'the scent of roses'. It is not an action.",
      cent: 'A cent is a coin in some currencies, such as the euro. It is not an action.',
    },
  },
  'Nearly forty per ___ of the class walk to school.': {
    why: 'Per cent means out of every hundred: forty per cent is forty out of a hundred. The cent in it comes from the Latin word for a hundred.',
    not: {
      scent: "A scent is a smell. 'Forty per scent' makes no sense.",
      sent: "Sent is the past form of send. 'Forty per sent' makes no sense.",
    },
    more: 'Cent, meaning a hundred, also begins century, centimetre and centipede. In British English, per cent is written as two words.',
  },
  '“This sounds well. He has evidently picked up the ___ again,” said I.': {
    why: 'A dog following a trail picks up its smell. A scent is a smell, especially one an animal can follow.',
    not: {
      sent: "Sent is the past form of send. 'Picked up the sent' makes no sense.",
      cent: 'A cent is a coin. What a tracker follows along a trail is a smell, not a coin.',
    },
    more: 'Holmes uses a dog, Toby, to follow a smell across London in this novel. Picking up the scent also means finding a clue again.',
  },
  'My legs were ___ after the long walk.': {
    why: 'After a long walk your legs ache. Sore means painful or aching.',
    not: {
      soar: "Soar means to fly or rise high, as in 'The kite will soar.' It is a verb, and the gap needs a describing word.",
      saw: "Saw is the past form of see, or a tool for cutting wood. 'My legs were saw' makes no sense.",
    },
  },
  'We watched the eagle ___ high above the valley.': {
    why: 'The eagle was flying high in the air. Soar means to fly or rise high, often gliding.',
    not: {
      sore: "Sore means painful, as in 'a sore throat'. It is a describing word, and the gap needs an action.",
      saw: "Saw is the past form of see. 'We watched the eagle saw' makes no sense.",
    },
  },
  'Prices began to ___ after the storm ruined the harvest.': {
    why: 'Prices went up fast. Soar means to rise high, and it can be used for numbers as well as birds: prices soar, temperatures soar.',
    not: {
      sore: "Sore means painful. After 'began to' the sentence needs a verb.",
      saw: "Saw is the past form of see. 'Prices began to saw' makes no sense.",
    },
    more: "Writers use soar for anything that rises quickly and high: hopes, spirits, music. A bird's flight is the picture behind it.",
  },
  'The cat licked its muddy ___.': {
    why: "A cat has feet with soft pads. An animal's feet are called paws.",
    not: {
      pause: "A pause is a short stop, as in 'a pause in the music'. A cat cannot lick a pause.",
      pores: "Pores are tiny holes in the skin. 'Its muddy pores' is not what a cat licks clean.",
      pours: "Pours is a verb: it pours, she pours. After 'its muddy' the gap needs a noun.",
    },
  },
  'Your skin has millions of tiny ___.': {
    why: 'Skin is covered in tiny openings that let out sweat. These openings are called pores.',
    not: {
      pours: "Pours is a verb, as in 'She pours the juice.' The gap needs a noun.",
      paws: "Paws are an animal's feet. Your skin does not have paws.",
      pause: "A pause is a short stop. 'Millions of tiny pause' makes no sense.",
    },
  },
  'It always ___ with rain on sports day.': {
    why: "'It pours with rain' means it rains very hard. Pours is the verb for liquid flowing out fast.",
    not: {
      pores: 'Pores are tiny holes in the skin. It is a noun, and the sentence needs a verb.',
      paws: "Paws are an animal's feet. 'It always paws with rain' makes no sense.",
      pause:
        "Pause means to stop for a moment. With 'it' the verb would be pauses, and the sentence would make no sense.",
    },
  },
  'I ___ for a reply.': {
    why: 'Brutus stops speaking for a moment so that the crowd can answer. To pause is to stop briefly.',
    not: {
      paws: "Paws are an animal's feet. 'I paws for a reply' makes no sense.",
      pores: 'Pores are tiny holes in the skin. It is a noun, and the sentence needs a verb.',
      pours: 'Pours means makes a liquid flow, and it goes with he or she, not I. It does not fit.',
    },
    more: 'Brutus asks the crowd whether anyone he has offended will speak, then waits. The short sentence makes his pause part of the speech.',
  },
  'That gave the animals ___, and there was a hush.': {
    why: 'To give someone pause is to make them stop and think. Here something makes the animals stop, and they fall silent.',
    not: {
      paws: "Paws are an animal's feet. 'Gave the animals paws' makes no sense: the phrase is 'gave them pause', made them stop and think.",
      pores: "Pores are tiny holes in the skin. 'Gave the animals pores' makes no sense.",
      pours: "Pours is a verb. After 'gave the animals' the gap needs a noun.",
    },
  },
  'She would ___ over old maps for hours.': {
    why: 'To pore over something is to study it very closely. Pore is the verb for reading or looking with great care.',
    not: {
      pour: "Pour means to make a liquid flow, as in 'pour the tea'. 'Pour over old maps' is a common mistake for pore over.",
      poor: 'Poor means having little money, or of low quality. It is a describing word, not an action.',
    },
    tip: 'Pore over has the same letters as the pores in your skin: you look so closely that you could see them.',
  },
  'Please ___ the milk into the jug.': {
    why: 'Milk flows from one container into another. Pour means to make a liquid flow out.',
    not: {
      pore: "Pore over means to study closely, as in 'pore over a book'. You cannot pore milk.",
      poor: 'Poor means having little money. It is a describing word, not an action.',
    },
  },
  'The storm whipped up huge ___ around the island.': {
    why: "A storm makes the sea rough. Seas is the plural of sea, and 'heavy seas' means big, rough waves.",
    not: {
      sees: 'Sees is a verb: she sees, he sees. The storm whipped up something, so the gap needs a noun.',
      seize: "Seize means to grab, as in 'seize the rope'. It is a verb, and the gap needs a noun.",
    },
  },
  'My grandmother ___ much better with her new glasses.': {
    why: 'Glasses help her eyes. Sees is the form of see used with she, he or it: she sees.',
    not: {
      seas: "Seas is the plural of sea. 'My grandmother seas much better' makes no sense.",
      seize: 'Seize means to grab suddenly. Glasses help someone see, not seize.',
    },
  },
  'The police were able to ___ the stolen goods.': {
    why: 'The police took the stolen goods away. Seize means to take hold of something suddenly or by force, or to take it by law.',
    not: {
      seas: "Seas is the plural of sea. After 'able to' the sentence needs a verb.",
      sees: "Sees is a form of see, used after she or he. After 'able to' you would need the plain verb, and seeing goods is not taking them.",
    },
    more: "Seize breaks the 'i before e' rule: it is spelt ei. Remember: seize the e first.",
  },
  'The ___ stayed close to her newborn lamb.': {
    why: "A lamb's mother is a female sheep. A female sheep is called a ewe.",
    not: {
      yew: 'A yew is a kind of evergreen tree. A tree does not have a lamb.',
      you: "You is the word for the person being spoken to. 'The you stayed close' makes no sense.",
    },
  },
  'An ancient ___ tree grows in the churchyard.': {
    why: 'The gap names a kind of tree. The yew is a dark evergreen tree that can live for well over a thousand years and is often found in churchyards.',
    not: {
      ewe: "A ewe is a female sheep. 'A ewe tree' makes no sense.",
      you: "You is the word for the person being spoken to. 'An ancient you tree' makes no sense.",
    },
  },
  'Half the class were off school with ___.': {
    why: 'The class were ill. Flu is a common illness, short for influenza, with a fever, aches and a cough.',
    not: {
      flew: "Flew is the past form of fly, as in 'The bird flew away.' You cannot be off school with flew.",
      flue: 'A flue is a pipe or passage that takes smoke up a chimney. It is not an illness.',
    },
    more: 'Flu is a clipped word, cut from the middle of influenza. Others are phone, from telephone, and fridge, from refrigerator.',
  },
  'The pigeons ___ up onto the roof.': {
    why: 'The pigeons moved through the air. Flew is the past form of fly.',
    not: {
      flu: 'Flu is an illness. It is a noun, and the sentence needs a verb.',
      flue: 'A flue is a passage that takes smoke up a chimney. It is a noun, and the sentence needs a verb.',
    },
    more: "Fly is an irregular verb: fly, flew, flown. 'The birds have flown' is correct, and 'have flew' is a common mistake.",
  },
  'Smoke from the fire rises up the ___ and out of the chimney.': {
    why: 'Smoke needs a passage to travel up through. A flue is the pipe or channel inside a chimney that carries smoke away.',
    not: {
      flu: 'Flu is an illness. Smoke cannot rise up an illness.',
      flew: "Flew is the past form of fly. After 'up the' the gap needs a noun.",
    },
  },
  "Queen Victoria's ___ lasted for over sixty years.": {
    why: 'The time a king or queen rules is their reign. Queen Victoria ruled from 1837 to 1901, a reign of more than sixty-three years.',
    not: {
      rein: 'A rein is a strap used to guide a horse. It cannot last sixty years.',
      rain: "Rain is water falling from clouds. 'Queen Victoria's rain' makes no sense.",
    },
    more: 'Reign is linked to regal and royal, and the g is a clue: regal, reign. Sovereign, a word for a monarch, is spelt the same way.',
  },
  'The rider pulled on the left ___ to turn the horse.': {
    why: 'A rider steers a horse with long straps. Each strap is called a rein.',
    not: {
      reign: 'A reign is the time a king or queen rules. You cannot pull on a reign.',
      rain: 'Rain is water from the sky. You cannot pull on rain.',
    },
    more: "To 'keep a tight rein' on something means to keep it under strict control, like a rider holding the horse back.",
  },
  'Remember to ___ the line number when you quote from the poem.': {
    why: 'When you quote, you name where the words come from. Cite means to quote or name something as evidence.',
    not: {
      site: "A site is a place where something is built or happens, as in 'a building site'. It is a noun, and the sentence needs a verb.",
      sight:
        "Sight is the ability to see, or something seen. 'Sight the line number' is not the word for quoting.",
    },
    tip: 'In an essay, to cite a line is to quote it and say where it comes from. Citing evidence is what examiners look for.',
  },
  'The builders cleared the ___ before work on the new school began.': {
    why: 'The builders cleared a piece of land. A site is a place where something is built or happens.',
    not: {
      sight:
        "Sight is the power to see, or something you see, as in 'a strange sight'. Builders do not clear a sight.",
      cite: "Cite is a verb meaning to quote as evidence. After 'cleared the' the gap needs a noun.",
    },
    more: 'A website is a place on the internet, and a campsite a place to camp. Both keep the spelling site.',
  },
  'Why did the Forsters ever let her go out of their ___?': {
    why: 'Mrs Bennet complains that the Forsters stopped watching Lydia. Out of sight means where someone cannot be seen. Sight is the power of seeing.',
    not: {
      site: "A site is a place where something is built or happens. 'Out of their site' makes no sense.",
      cite: "Cite is a verb meaning to quote as evidence. After 'their' the gap needs a noun.",
    },
  },
  'A terrible ___ had met ___ eyes.': {
    why: 'The animals saw something terrible: the ruined windmill. Something seen is a sight. The eyes belong to the animals, so the second gap is their.',
    not: {
      'sight … there':
        'The first word is right. But the eyes belong to them, so the word is their.',
      'site … their':
        'The second word is right. But a site is a place for building. Something seen is a sight.',
      'site … there': 'Neither fits. Something seen is a sight, and belonging needs their.',
    },
  },
  'On a frosty winter afternoon, I ___ in ___ of Thornfield Hall.': {
    why: "Mr Rochester came near enough on horseback to see Thornfield. Rode is the past form of ride, and 'in sight of' means near enough to see.",
    not: {
      'rode … site':
        "The first word is right. But 'in sight of' is about seeing; a site is a place for building.",
      'road … sight':
        'The second word is right. But a road is a way for traffic; riding a horse is rode.',
      'road … site': 'Neither fits. The action is rode, and seeing is sight.',
    },
    more: 'Rochester is telling Jane about the evening they first met, when his horse slipped on the ice near Thornfield.',
  },
  'The weather ___ on the church roof showed the wind was from the north.': {
    why: 'A weather vane is a pointer on a roof that swings round to show which way the wind is blowing. Vane is the word for that pointer.',
    not: {
      vain: 'Vain means too proud of your looks, or without success. It cannot sit on a roof.',
      vein: 'A vein is a tube that carries blood around the body. It cannot show the wind.',
    },
  },
  'The nurse took a blood sample from a ___ in my arm.': {
    why: 'Blood is taken from the tubes that carry it back to the heart. Each of those tubes is a vein.',
    not: {
      vain: 'Vain means too proud of your looks, or without success. It is a describing word, and the gap needs a noun.',
      vane: 'A vane is a pointer that turns in the wind. It is not part of the body.',
    },
  },
  'We searched everywhere for the lost ring, but in ___.': {
    why: "'In vain' means without success: the search did not find the ring. Vain is the word in this phrase.",
    not: {
      vein: "A vein carries blood around the body. 'In vein' is a common mistake for in vain.",
      vane: "A vane is a pointer that turns in the wind. 'In vane' makes no sense.",
    },
    more: "Vain has a second meaning: too proud of your looks. 'He was so vain that he checked every mirror.'",
  },
  'The local ___ voted to build a new skate park.': {
    why: 'A group of elected people who run a town or area is a council. Councils vote on what to build.',
    not: {
      counsel:
        "Counsel means advice, as in 'wise counsel', or a lawyer in court. Advice cannot vote.",
      consul:
        "A consul is an official who looks after a country's citizens abroad. 'The local consul' cannot vote on a park on their own.",
    },
    tip: 'Council, with a c, is a group of people, like a committee. Counsel, with an s, is advice: think of a counsellor, who gives advice.',
  },
  'My grandmother always gave wise ___ when I was worried.': {
    why: 'Someone who is worried needs advice. Counsel means advice, especially careful or wise advice.',
    not: {
      council: 'A council is a group of people who run a town. You cannot give a council.',
      consul: 'A consul is an official who works abroad. You cannot give a consul.',
    },
  },
  "A ___ is an official who helps a country's citizens living in a foreign city.": {
    why: 'Countries send officials to cities abroad to help their own people there. Such an official is a consul.',
    not: {
      council:
        'A council is a group of elected people who run a town or area. The sentence describes one official.',
      counsel:
        'Counsel means advice, or a lawyer in court. It is not the name of an official abroad.',
    },
  },
  'The ___ met to discuss the park, and a lawyer gave ___ on the new rules.': {
    why: 'A group of elected people who run an area is a council, and a group can meet. Advice from a lawyer is counsel.',
    not: {
      'counsel … council':
        'Both are the wrong way round. The group is a council, and the advice is counsel.',
      'council … council': 'The first word is right. But advice is counsel, ending -sel.',
      'counsel … counsel':
        'The second word is right. But advice cannot meet: the group that met is a council.',
    },
  },
  'And so I thank you for ___ good ___.': {
    why: 'Ophelia thanks her listeners for the advice they have given: your good counsel. Counsel means advice.',
    not: {
      'your … council':
        'The first word is right. But a council is a group of people who decide things; advice is counsel.',
      "you're … counsel":
        "The second word is right. But you're means 'you are', which makes no sense before 'good counsel': the advice belongs to them, so your.",
      "you're … council": 'Neither fits. Belonging is your, and advice is counsel.',
    },
    more: 'Ophelia speaks these words in her madness. Polite phrases like this, said at the wrong moment, make her more painful to watch.',
  },
  'Check your answers to ___ that there are no careless mistakes.': {
    why: 'Checking makes certain that nothing is wrong. Ensure means to make certain that something happens or is true.',
    not: {
      insure:
        'Insure means to pay for insurance, so you get money if something is lost or damaged. It is not about making certain.',
      assure:
        "Assure means to tell someone something to remove their doubt, and it needs a person: 'I assure you.' There is no person here.",
    },
    tip: 'Ensure is to make sure, insure is about insurance, and assure is to reassure a person.',
  },
  'It is sensible to ___ your bike against theft.': {
    why: 'If you insure a bike, an insurance company pays you if it is stolen. Insure means to arrange insurance against theft or damage.',
    not: {
      ensure:
        "Ensure means to make certain, as in 'ensure the door is locked'. You do not 'ensure against theft'.",
      assure:
        'Assure means to tell a person something firmly, so they stop worrying. You assure people, not bikes.',
    },
  },
  'I can ___ you that the coach will wait for us.': {
    why: 'The speaker tells someone firmly, to remove their worry. Assure means to tell a person something so that they feel sure.',
    not: {
      ensure:
        "Ensure means to make certain that something happens, as in 'ensure we are on time'. It is not used with 'you that'.",
      insure:
        'Insure means to arrange insurance. You cannot insure someone that a coach will wait.',
    },
  },
  'The roof of your mouth is called the ___.': {
    why: 'The hard and soft parts of the top of your mouth are together called the palate.',
    not: {
      palette: 'A palette is a board for mixing paint. It is not part of the mouth.',
      pallet: 'A pallet is a wooden platform for goods. It is not part of the mouth.',
    },
    more: 'Palate also means a sense of taste: a cook with a good palate can tell what a dish needs.',
  },
  'The forklift lifted a wooden ___ stacked with boxes.': {
    why: 'Goods in a warehouse sit on flat wooden frames that a forklift can lift. Such a frame is a pallet.',
    not: {
      palate: 'Your palate is the roof of your mouth. A forklift cannot lift it.',
      palette: "A palette is an artist's board for paint. It is not stacked with boxes.",
    },
  },
  'Jerusalem is a ___ city for several religions.': {
    why: 'Jerusalem is sacred to Jews, Christians and Muslims. Holy means sacred, connected with God or religion.',
    not: {
      wholly:
        "Wholly means completely, as in 'wholly true'. It is an adverb, and it cannot describe a city.",
      holey: "Holey means full of holes, as in 'holey socks'. It does not mean sacred.",
    },
  },
  'His old socks were so ___ that his toes poked out.': {
    why: 'His toes came through the socks, so the socks were full of holes. Holey means full of holes.',
    not: {
      holy: 'Holy means sacred, connected with religion. It does not describe worn-out socks.',
      wholly: "Wholly means completely. 'So wholly that his toes poked out' makes no sense.",
    },
    more: 'Holey keeps the e of hole: hole plus -y. Holy, with no e, has nothing to do with holes.',
  },
  'I am not ___ convinced by his excuse.': {
    why: 'The speaker is partly but not completely convinced. Wholly means completely, entirely.',
    not: {
      holy: "Holy means sacred. 'Not holy convinced' makes no sense.",
      holey:
        'Holey means full of holes. It describes things such as socks, not how convinced someone is.',
    },
    tip: 'Wholly comes from whole, which means all of something. Wholly keeps the w and both letters l.',
  },
  'He was growing ___ inattentive to other people, and ___ engrossed by her.': {
    why: 'Elizabeth says Bingley was paying little attention to others and was completely taken up with Jane. Quite here means very, and wholly means completely.',
    not: {
      'quite … holy': 'The first word is right. But holy means sacred; completely is wholly.',
      'quiet … wholly':
        'The second word is right. But quiet means making little noise; very or fairly is quite.',
      'quiet … holy': 'Neither fits. Very is quite, and completely is wholly.',
    },
  },
  'The singer was a teenage ___ in the 1960s.': {
    why: 'Teenagers admired and adored the singer. An idol is someone who is greatly admired, or a statue that is worshipped.',
    not: {
      idle: "Idle means not working or lazy. It is a describing word, and the gap needs a noun after 'a teenage'.",
      idyll:
        "An idyll is a peaceful, happy scene or time, as in 'a country idyll'. A singer is not a scene.",
    },
  },
  'The factory machines stood ___ during the strike.': {
    why: 'During a strike nobody works, so the machines were not being used. Idle means not working or not in use.',
    not: {
      idol: 'An idol is someone greatly admired. Machines cannot stand idol.',
      idyll: 'An idyll is a peaceful, happy scene. It is a noun and does not describe machines.',
    },
    more: "Idle can describe people too: 'an idle afternoon' or an idle person who avoids work.",
  },
  'The cottage by the lake was a peaceful country ___.': {
    why: 'The cottage and the lake make a peaceful, happy picture. An idyll is a perfect, peaceful place or time, often in the countryside.',
    not: {
      idle: 'Idle means not working or lazy. It is a describing word, and the gap needs a noun.',
      idol: 'An idol is someone greatly admired. A cottage is not a person.',
    },
    more: "The describing word is idyllic: 'an idyllic summer'. In British English, idyll is spelt with a y and two l letters.",
  },
  'They were ignorant, ___, and ___.': {
    why: 'Kitty and Lydia are lazy and too proud of their looks. Idle means lazy or not working. Vain means too proud of how you look.',
    not: {
      'idle … vein': 'The first word is right. But a vein carries blood; too proud is vain.',
      'idol … vain': 'The second word is right. But an idol is someone admired; lazy is idle.',
      'idol … vein': 'Neither fits. Lazy is idle, and too proud is vain.',
    },
    more: "Austen lists the faults in three short words, like a judge's verdict. The list explains why Lydia later runs away with Wickham.",
  },
  'The climbers reached the ___ of the mountain at dawn.': {
    why: 'Climbers aim for the very top of a mountain. The pointed top is the peak.',
    not: {
      peek: "Peek means to take a quick look, as in 'peek through the curtains'. It is not the top of a mountain.",
      pique:
        'Pique means to stir up interest, or a feeling of hurt pride. It is not part of a mountain.',
    },
    more: "Peak also means the highest point of anything: 'Traffic is at its peak at eight o'clock.'",
  },
  "Close your eyes and don't ___ until I say so.": {
    why: 'The speaker does not want a secret look. Peek means to take a quick look, often secretly.',
    not: {
      peak: 'A peak is the pointed top of a mountain. It is not a way of looking.',
      pique: "Pique means to stir up interest. 'Don't pique until I say so' makes no sense.",
    },
    tip: 'Peek has two letters e, like the two eyes you peek with.',
  },
  "A mysterious first line can ___ a reader's curiosity.": {
    why: 'A mysterious opening makes a reader want to know more. To pique curiosity or interest means to stir it up.',
    not: {
      peak: "A peak is the top of a mountain. 'Peak a reader's curiosity' is a common mistake for pique.",
      peek: "Peek means to take a quick look. You cannot peek someone's curiosity.",
    },
    tip: "Pique is a French word that came into English. In an essay you might say that an opening line piques the reader's interest.",
  },
  'She ___ the present in shiny paper.': {
    why: 'Paper is folded round a present to cover it. Wrapped is the past form of wrap, to cover something by folding paper or cloth round it.',
    not: {
      rapped:
        "Rapped means knocked sharply, as in 'He rapped on the window.' You cannot rap a present in paper.",
      rapt: 'Rapt means so interested that you notice nothing else. It is a describing word, not an action.',
    },
    more: 'Wrap begins with a silent w, like wrong, wrist and wreck.',
  },
  'Someone ___ loudly on the front door.': {
    why: 'A sharp, loud knock on a door is a rap. Rapped is the past form of rap, to knock sharply.',
    not: {
      wrapped: 'Wrapped means covered in paper or cloth. You cannot wrap loudly on a door.',
      rapt: "Rapt means completely absorbed, as in 'rapt attention'. It is not an action.",
    },
  },
  'The audience listened with ___ attention.': {
    why: 'The audience was completely absorbed and noticed nothing else. Rapt means so interested that you notice nothing else.',
    not: {
      rapped: 'Rapped means knocked sharply. It does not describe attention.',
      wrapped:
        "Wrapped means covered in paper or cloth. 'Wrapped attention' is a common mistake for rapt attention.",
    },
    more: 'Rapt comes from a Latin word meaning seized or carried away: a rapt listener is carried away by what they are listening to.',
  },
  'A ___ switches the lights on when someone walks into the room.': {
    why: 'Something notices that a person has come in and turns the lights on. A sensor is an instrument that detects movement, heat, light or sound.',
    not: {
      censor:
        'A censor is a person who removes parts of books, films or letters. A censor does not switch on lights.',
      censure: "Censure is strong criticism, as in 'public censure'. It cannot switch on lights.",
    },
    more: 'Sensor comes from sense: a sensor senses things, just as your eyes and ears do.',
  },
  "In wartime, a ___ read soldiers' letters and removed secret details.": {
    why: "In both world wars, officials read soldiers' letters home and cut out anything that could help the enemy. Such an official is a censor.",
    not: {
      sensor:
        'A sensor is an instrument that detects light, heat or movement. It cannot read letters.',
      censure:
        "Censure is strong criticism, as in 'He faced censure.' It is not a person who reads letters.",
    },
    more: 'Censor is also a verb: to censor a film is to cut out parts thought unfit to be seen. Censorship is the noun.',
  },
  'The referee faced public ___ for his poor decision.': {
    why: 'People criticised the referee strongly and openly. Censure means strong, formal criticism.',
    not: {
      censor:
        "A censor is a person who removes parts of books, films or letters. 'Faced public censor' makes no sense.",
      sensor:
        'A sensor is an instrument that detects light, heat or movement. It is not criticism.',
    },
  },
  'She won a gold ___ at the swimming gala.': {
    why: 'A prize for winning a race is a medal, a metal disc on a ribbon: gold for first, silver for second, bronze for third.',
    not: {
      meddle:
        "Meddle is a verb meaning to interfere, as in 'Don't meddle with my things.' You cannot win a meddle.",
      metal:
        "Gold is a metal, but the prize you win is called a medal. 'Won a gold metal' is a common mistake.",
      mettle:
        'Mettle means courage and determination. You show mettle; you do not win it as a prize.',
    },
  },
  "Please don't ___ in other people's arguments.": {
    why: 'The speaker asks you not to interfere. Meddle means to interfere in something that is not your business.',
    not: {
      medal:
        'A medal is a prize, a metal disc on a ribbon. It is a noun, and the sentence needs a verb.',
      metal: 'Metal is a hard material such as iron or gold. It is a noun, not an action.',
      mettle: "Mettle means courage. It is a noun, and 'don't mettle' makes no sense.",
    },
    more: 'Someone who meddles is meddlesome or a meddler: a busybody who interferes.',
  },
  'The old gate was made of rusty ___.': {
    why: 'Rust forms on iron, a metal. Metal is a hard material such as iron, steel or copper.',
    not: {
      mettle: 'Mettle means courage and spirit. A gate cannot be made of courage.',
      medal: 'A medal is a prize on a ribbon. A gate is not made of medals.',
      meddle: 'Meddle is a verb meaning to interfere. A gate cannot be made of a verb.',
    },
  },
  'The young team showed real ___ by fighting back from three goals down.': {
    why: 'Fighting back from three goals down takes courage and determination. Mettle means courage and strength of character.',
    not: {
      metal: 'Metal is a material such as iron. A team cannot show metal by fighting back.',
      medal:
        'A medal is a prize you win. The sentence is about what the team showed, not what it won.',
      meddle:
        "Meddle is a verb meaning to interfere. After 'showed real' the sentence needs a noun.",
    },
    more: "'To be on your mettle' means to be ready to do your best. Writers use mettle when a character's courage is tested.",
  },
  'If you have a question, ___ your hand.': {
    why: 'You lift your hand to show you want to speak. Raise means to lift something up.',
    not: {
      rays: "Rays are lines of light, as in 'the sun's rays'. It is a noun, and the sentence needs a verb.",
      raze: 'Raze means to destroy a building or town completely. You do not raze your hand.',
    },
  },
  "The sun's ___ warmed the sand.": {
    why: 'Sunlight reaches the earth in beams. Each beam is a ray, and rays is the plural.',
    not: {
      raise:
        "Raise means to lift up, as in 'raise your hand'. It is a verb, and the gap needs a noun after 'the sun's'.",
      raze: 'Raze means to destroy completely. It is a verb, and the gap needs a noun.',
    },
  },
  'The invaders threatened to ___ the town to the ground.': {
    why: 'To raze a place to the ground is to destroy it completely, so nothing is left standing.',
    not: {
      raise:
        "Raise means to lift up or build up, almost the opposite. 'Raise the town to the ground' is a common mistake.",
      rays: "Rays are beams of light. It is a noun, and after 'to' the sentence needs a verb.",
    },
    more: "Raze is almost always followed by 'to the ground'. It comes from a Latin word meaning to scrape.",
  },
  'If ___ cold, put on ___ jumper.': {
    why: "The first gap means 'you are': 'If you are cold'. That is you're. The jumper belongs to you, so the second gap is your.",
    not: {
      "your … you're":
        "Both are the wrong way round. 'If you are cold' needs you're, and the jumper you own needs your.",
      "you're … you're":
        "The first word is right. But 'put on you are jumper' makes no sense: belonging needs your.",
      'your … your':
        "The second word is right. But 'If your cold' is missing 'you are'. That needs you're.",
    },
    tip: "Say 'you are' in the gap. If it fits, use you're. If the word shows that something belongs to you, use your.",
  },
  '“Go to ___ room, and put on ___ bonnet,” he replied.': {
    why: 'Mr Rochester tells Jane to go to the room and put on the bonnet that belong to her. Both gaps show belonging: your.',
    not: {
      "your … you're":
        "The first word is right. But you're means 'you are', which makes no sense before 'bonnet': the bonnet belongs to her, so your.",
      "you're … your":
        "The second word is right. But you're means 'you are', which cannot come before 'room': the room belongs to her, so your.",
      "you're … you're": "Neither fits. You're means 'you are', and both gaps show belonging.",
    },
  },
  '___ lies ___ love.': {
    why: "Oberon points to where Titania's beloved is lying: there. The love belongs to her, so the second gap is your.",
    not: {
      "There … you're":
        "The first word is right. But 'you are love' does not fit: the love belongs to her, so your.",
      'Their … your':
        'The second word is right. But their shows belonging; pointing to a place is there.',
      "Their … you're": 'Neither fits. Pointing to a place is there, and belonging is your.',
    },
    more: "Titania wakes to find she has loved Bottom, wearing an ass's head, while under a spell. Oberon shows her what she loved.",
  },
  '___ mother insists upon ___ accepting it.': {
    why: 'Mr Bennet tells Elizabeth that her mother wants her to marry Mr Collins. Both gaps show belonging: your mother, and your accepting.',
    not: {
      "Your … you're":
        "The first word is right. But 'upon you are accepting it' does not fit: the phrase is 'your accepting'.",
      "You're … your":
        "The second word is right. But 'You are mother' makes no sense: belonging is your.",
      "You're … you're": "Neither fits. You're means 'you are', and both gaps show belonging.",
    },
    more: 'Mr Bennet then adds that if she refuses Mr Collins her mother will never see her again, and if she accepts him, he will never see her again.',
  },
  '___ clear that the club has lost ___ best player.': {
    why: "The first gap means 'it is': 'It is clear'. That is it's, with an apostrophe. The best player belongs to the club, so the second gap shows belonging: its, with no apostrophe.",
    not: {
      "Its … it's":
        "Both are the wrong way round. 'It is clear' needs it's, and the club's player needs its.",
      "It's … it's":
        "The first word is right. But 'the club has lost it is best player' makes no sense: belonging needs its.",
      'Its … its':
        "The second word is right. But the first gap means 'it is', and that needs the apostrophe: it's.",
    },
    tip: "Test every its or it's by saying 'it is'. If 'it is' fits, use it's. If not, use its, like his or her.",
  },
  'When ___ dark, the owl leaves ___ nest.': {
    why: "'When it is dark' needs it's, the short form of 'it is'. The nest belongs to the owl, so the second gap needs its, which shows belonging.",
    not: {
      "its … it's":
        "Both are the wrong way round. 'When it is dark' needs it's, and the owl's nest needs its.",
      "it's … it's":
        "The first word is right. But 'the owl leaves it is nest' makes no sense: belonging needs its.",
      'its … its':
        "The second word is right. But 'when its dark' is missing the apostrophe for 'it is'.",
    },
  },
  'The robot raised ___ arm and pointed ___ finger at me.': {
    why: 'The arm and the finger both belong to the robot. Its, with no apostrophe, shows belonging, so it fills both gaps.',
    not: {
      "it's … its":
        "The second word is right. But 'raised it is arm' makes no sense: the arm belongs to the robot, so it is its.",
      "its … it's":
        "The first word is right. But 'pointed it is finger' makes no sense: the finger belongs to the robot.",
      "it's … it's":
        "Neither fits. It's means 'it is', and nothing in this sentence means 'it is'.",
    },
    more: 'Its works like his and her, which never take an apostrophe: his arm, her arm, its arm.',
  },
  '___ too late ___, though.': {
    why: "The first gap means 'it is': it is too late. That is it's. The second gap is about this moment: now.",
    not: {
      "It's … know":
        'The first word is right. But the second gap is a time word: now, not the verb know.',
      'Its … now': "The second word is right. But 'it is too late' needs the apostrophe: it's.",
      'Its … know': "Neither fits. 'It is too late' needs it's, and 'at this moment' is now.",
    },
  },
  '___ worse ___ the Workhouse.': {
    why: "Eppie is saying that the town is worse than the Workhouse. The first gap stands for 'it is', which shortens to it's, and worse compares two things, so it needs than.",
    not: {
      "It's … then": 'The first word is right. But after worse, a comparing word, use than.',
      'Its … than': "The second word is right. But 'It is worse' needs it's, with the apostrophe.",
      'Its … then': "Neither fits. 'It is' needs it's, and comparing needs than.",
    },
  },
  'No, ___ not ___ so bad as that.': {
    why: "Holmes is saying that things are not as bad as that. The first gap stands for 'it is', which shortens to it's. Quite here means completely: not completely so bad.",
    not: {
      "it's … quiet":
        'The first word is right. But quiet means making little noise; the gap means completely, quite.',
      'its … quite': "The second word is right. But 'it is not' needs it's, with an apostrophe.",
      'its … quiet': "Neither fits. 'It is' needs it's, and 'completely' is quite.",
    },
  },
  'Can you ___ the birds? I ___ them every morning.': {
    why: 'Both gaps are about noticing sounds: hearing the birds sing. Hear means to notice sound with your ears, so it fills both gaps.',
    not: {
      'here … hear':
        "The second word is right. But here means in this place; 'Can you here the birds?' needs the verb hear.",
      'hear … here':
        "The first word is right. But 'I here them every morning' needs the verb hear.",
      'here … here': 'Neither fits. Here is about a place, and both gaps are about sound.',
    },
    tip: 'Hear has the word ear inside it. You hear with your ears.',
  },
  'Come over ___ so you can ___ the music better.': {
    why: 'The first gap is a place: come to this place. That is here. The second is about sound: so you can notice the music. That is hear.',
    not: {
      'hear … here': 'Both are the wrong way round. A place is here, and noticing sound is hear.',
      'here … here':
        "The first word is right. But 'so you can here the music' needs the verb hear, about sound.",
      'hear … hear': "The second word is right. But 'come over hear' needs the place word here.",
    },
  },
  'First we ate, ___ we danced, and ___ we went home.': {
    why: 'The sentence puts three events in order: first, next, last. Then is the word for what happens next, so it fills both gaps.',
    not: {
      'than … then':
        "The second word is right. But than is for comparing, as in 'taller than'. The first gap is about order.",
      'then … than':
        'The first word is right. But the last gap tells what happened next, so it needs then too.',
      'than … than': 'Neither fits. Than compares two things, and nothing is compared here.',
    },
    tip: "Then, with an e, is about time and order, like 'next'. Than, with an a, is for comparing.",
  },
  'She ran faster ___ ever, and ___ she collapsed on the grass.': {
    why: "'Faster than ever' compares her speed with every other time, so it needs than. Then tells what happened next: she collapsed.",
    not: {
      'then … than':
        "Both are the wrong way round. 'Faster than' compares, and 'then she collapsed' tells what came next.",
      'than … than':
        "The first word is right. But 'and than she collapsed' should show what happened next: then.",
      'then … then':
        "The second word is right. But 'faster then ever' is a mistake: after a comparing word such as faster, use than.",
    },
  },
  'But ___ is worse ___ that.': {
    why: 'Squealer says something exists that is worse: there is. Worse compares two things, and comparing needs than.',
    not: {
      'there … then': 'The first word is right. But after worse, a comparing word, you need than.',
      'their … than':
        "The second word is right. But their shows belonging; the sentence needs 'there is'.",
      'their … then': "Neither fits. 'There is' needs there, and 'worse than' needs than.",
    },
  },
  'I wonder ___ it will rain, and ___ the trip will go ahead.': {
    why: 'Both gaps bring in two possibilities: it will rain or not, the trip will go ahead or not. Whether introduces such a choice, so it fills both gaps.',
    not: {
      'weather … whether':
        "The second word is right. But weather means the rain, sun and wind outside; 'I wonder weather it will rain' needs whether.",
      'whether … weather':
        'The first word is right. But the second gap also brings in a choice, about the trip: whether.',
      'weather … weather':
        'Neither fits. Weather is the sun, rain and wind, a noun. Both gaps need whether.',
    },
    tip: "If you can add 'or not' after the gap, you need whether: 'whether or not it will rain'.",
  },
  'In January ___ came bitterly hard ___.': {
    why: "'There came' is a way of saying that something arrived or existed: there. Cold, frost and snow are weather.",
    not: {
      'there … whether':
        'The first word is right. But whether brings in a choice; frost and cold are weather.',
      'their … weather':
        'The second word is right. But their shows belonging, and nothing is owned here.',
      'their … whether':
        'Neither fits. The sentence needs there, and the cold outside is the weather.',
    },
  },
  'Squeeze the ___ gently, or the chain might ___.': {
    why: 'You squeeze the brake, the part that slows a bike down. A chain can break, or snap. So the answer is brake, then break.',
    not: {
      'break … brake':
        'Both are the wrong way round: you squeeze the part that slows the bike, the brake, and a chain can break.',
      'brake … brake':
        'The first word is right. But a chain does not brake: it can break, which means snap.',
      'break … break':
        'The second word is right. But the part you squeeze to slow down is the brake, not a break.',
    },
    tip: 'Brake is about stopping a vehicle. Break is about snapping, damaging or a rest.',
  },
  'If you ___ too late, you will have to ___ much harder.': {
    why: 'Both gaps are about slowing a vehicle: if you slow down too late, you must slow down harder. Brake is the verb for slowing down, so it fills both gaps.',
    not: {
      'break … brake':
        'The second word is right, but the first is not. Break means to snap or damage; the sentence is about slowing down.',
      'brake … break':
        "The first word is right. But 'break much harder' would mean snap or damage, not slow down.",
      'break … break':
        'Neither fits. Break means to snap, damage or rest. Both gaps are about slowing down, so both need brake.',
    },
  },
  'Drivers who ___ the speed limit may have to ___ suddenly.': {
    why: 'To break a rule or limit is to go against it, so drivers break the speed limit. Then they may have to slow down fast: brake suddenly.',
    not: {
      'brake … break':
        'Both are the wrong way round. You break a limit, and you brake to slow down.',
      'break … break':
        "The first word is right. But 'break suddenly' would mean snap; slowing down is brake.",
      'brake … brake':
        "The second word is right. But a limit is broken, not braked: 'break the speed limit'.",
    },
    more: 'Break has many meanings: snap (break a plate), rest (a break), and go against a rule (break the law). Brake has one: to slow a vehicle.',
  },
  'You should ___ seen the look ___ surprise on his face.': {
    why: "After should, could or would, the verb form is have: 'should have seen'. Then 'the look of surprise' uses of to link the look to what it shows.",
    not: {
      'of … of':
        "The second word is right, but 'should of' is a well-known mistake. It comes from the sound of should've. The word is have.",
      'have … off':
        "The first word is right. But off means away from or not on; 'the look off surprise' makes no sense.",
      'of … off':
        "Neither fits. After 'should' you need have, and 'the look of surprise' needs of.",
    },
    tip: "Should've, could've and would've are short for should have, could have and would have. Never use 'should of'.",
  },
  'She must ___ taken her coat ___ in the hall.': {
    why: "'Must have taken' is the correct form after must. Then 'taken her coat off' means removed it, so the second gap is off.",
    not: {
      'of … off':
        "The second word is right, but 'must of' is a mistake that comes from the sound of must've. The word is have.",
      'have … of':
        'The first word is right. But to remove a coat is to take it off, with two f letters.',
      'of … of': "Neither fits. After 'must' you need have, and removing a coat is taking it off.",
    },
  },
  'Take ___ your muddy boots and get ___ the sofa.': {
    why: 'Both gaps mean away from: take the boots away from your feet, and get away from the sofa. Off means away from or not on, so it fills both.',
    not: {
      'of … off':
        "The second word is right. But 'take of your boots' should be 'take off', meaning remove.",
      'off … of':
        "The first word is right. But 'get of the sofa' should be 'get off', meaning move away from it.",
      'of … of':
        "Neither fits. Of links things, as in 'a cup of tea'. Both gaps mean away from, which is off.",
    },
    tip: 'Off has two f letters and is the opposite of on. Of has one f and links words: a glass of milk.',
  },
  "I could ___ won if I hadn't fallen ___ my bike.": {
    why: "After could, the verb form is have: 'could have won'. To come away from a bike suddenly is to fall off it.",
    not: {
      'of … off':
        "The second word is right, but 'could of' is a mistake from the sound of could've. The word is have.",
      'have … of':
        "The first word is right. But you fall off a bike, with two f letters, not 'fall of'.",
      'of … of':
        "Neither fits. 'Could of' should be 'could have', and 'fallen of my bike' should be 'fallen off'.",
    },
  },
  'We ___ the old mill, then ___ the church on the hill.': {
    why: 'Both gaps are actions in the past: we went by the mill, then by the church. Passed is the past form of the verb pass, so it fills both gaps.',
    not: {
      'past … passed':
        "The second word is right. But past is not a verb: 'we past the old mill' has no action. Use passed.",
      'passed … past':
        "The first word is right. But 'then past the church' also needs the verb: then passed the church.",
      'past … past':
        'Neither fits. Past names a time gone by or means beyond. Both gaps need the action, passed.',
    },
    tip: "If the word is the action, use passed. If it means 'beyond' or 'time gone by', use past: walked past, in the past.",
  },
  '___ weeks ___ away, and Jane saw nothing of him.': {
    why: 'The gap counts the weeks: four. Then the weeks went by, an action in the past: passed, the past form of pass.',
    not: {
      'Four … past':
        'The first word is right. But the weeks went by, an action, so the verb passed is needed.',
      'For … passed': 'The second word is right. But the number of weeks is four, with a u.',
      'For … past': 'Neither fits. The number is four, and the action is passed.',
    },
  },
  'And ___, as it was long ___ one, I prepared to leave him.': {
    why: "Now tells the moment Jane decides to go. 'Long past one' means well after one o'clock: past means beyond or after.",
    not: {
      'now … passed':
        "The first word is right. But 'long past one' tells the time, and the time word is past, not the verb passed.",
      'know … past': 'The second word is right. But know is about knowledge; the moment is now.',
      'know … passed': "Neither fits. The moment is now, and 'after one o'clock' is past one.",
    },
    tip: 'Past tells a time or a place beyond: half past two, walk past the shop. Passed is always an action.',
  },
  '"And shall I still be ___ to ___ ribbons in my mane?" asked Mollie.': {
    why: 'Mollie asks whether she will still have permission: be allowed. Ribbons are put on like clothes, so she would wear them.',
    not: {
      'allowed … where':
        'The first word is right. But where is about a place; putting ribbons on is wear.',
      'aloud … wear':
        'The second word is right. But aloud means spoken so others hear; having permission is allowed.',
      'aloud … where': 'Neither fits. Permission is allowed, and putting on ribbons is wear.',
    },
    more: 'Snowball tells Mollie that ribbons are a badge of slavery. Her wish for ribbons and sugar shows the animals who care more for comfort than freedom.',
  },
  'We dine at Rosings twice every ___, and are never ___ to walk home.': {
    why: 'Mr Collins boasts about Lady Catherine: they dine there twice every seven days, a week, and are never permitted to walk home: never allowed.',
    not: {
      'week … aloud':
        'The first word is right. But aloud means out loud; having permission is allowed.',
      'weak … allowed':
        'The second word is right. But weak means not strong; seven days is a week.',
      'weak … aloud': 'Neither fits. Seven days is a week, and permission is allowed.',
    },
  },
  '___ is her father’s house, I’ll call ___.': {
    why: 'Roderigo points to the house: here it is. He will shout so that people inside can hear: call aloud.',
    not: {
      'Here … allowed':
        'The first word is right. But allowed means permitted; shouting out is calling aloud.',
      'Hear … aloud':
        'The second word is right. But hear is about sound; pointing to a place is here.',
      'Hear … allowed': 'Neither fits. Pointing to a place is here, and out loud is aloud.',
    },
    more: "Iago and Roderigo shout under Brabantio's windows to tell him that Desdemona has married Othello. Othello opens with this night-time noise.",
  },
  'We clambered up ___ the ___.': {
    why: 'They climbed from one side of an opening to the other: through it. The opening is a gap in the ceiling: a hole.',
    not: {
      'through … whole':
        'The first word is right. But whole means complete; an opening is a hole, with no w.',
      'threw … hole':
        'The second word is right. But threw is the past of throw; climbing up into a space is through.',
      'threw … whole': 'Neither fits. The movement is through, and the opening is a hole.',
    },
  },
  'Leave me in ___ to finish my ___ of toast.': {
    why: "'Leave me in peace' means let me be calm and undisturbed. A piece is a part of something, here a part of the toast.",
    not: {
      'piece … peace':
        'Both are the wrong way round. Calm is peace, and a part of the toast is a piece.',
      'peace … peace':
        'The first word is right. But a part of the toast is a piece, spelt like a piece of pie.',
      'piece … piece':
        "The second word is right. But 'leave me in piece' should be peace, meaning calm.",
    },
    tip: "A piece of pie: both piece and pie begin with pie. Peace has 'ea', like the calm of the sea.",
  },
  '___ do, brother, let her be at ___ a while.': {
    why: 'Diana urges St John: now, at this moment. To be at peace is to be calm and left alone.',
    not: {
      'Now … piece': 'The first word is right. But a piece is a part of something; calm is peace.',
      'Know … peace':
        'The second word is right. But know is about knowledge; the urging word here is now.',
      'Know … piece': "Neither fits. 'At this moment' is now, and calm is peace.",
    },
  },
  'The bridge was ___, and the old fence beside it was ___ too.': {
    why: 'Both gaps describe something not strong: the bridge and the fence. Weak means not strong, so it fills both gaps.',
    not: {
      'week … weak':
        "The second word is right. But a week is seven days; 'the bridge was week' makes no sense.",
      'weak … week':
        'The first word is right. But the fence was not seven days: it was not strong, so it was weak.',
      'week … week': 'Neither fits. A week is seven days. Both gaps need a describing word: weak.',
    },
  },
  'I ___ sat down: I felt ___ and tired.': {
    why: 'Jane tells what she did next: then she sat down. She felt she had no strength, so she felt weak.',
    not: {
      'then … week':
        'The first word is right. But a week is seven days; feeling without strength is weak.',
      'than … weak':
        "The second word is right. But than is for comparing; 'I then sat down' tells what came next.",
      'than … week': 'Neither fits. What came next is then, and without strength is weak.',
    },
  },
  '“The ___ is much ___ small,” he answered.': {
    why: 'Holmes means the fireplace is too small for a man to climb through. The iron frame in a fireplace is a grate. Too means more than is wanted.',
    not: {
      'grate … to':
        "The first word is right. But 'much to small' needs too, meaning more than is wanted.",
      'great … too':
        'The second word is right. But great means big or very good; the frame in a fireplace is a grate.',
      'great … to': "Neither fits. The fireplace frame is a grate, and 'much too small' needs too.",
    },
  },
  'We ___ the farmer calling his ___ of cows.': {
    why: 'The first gap is about sound in the past: heard, the past form of hear. The second names a group of cattle: a herd.',
    not: {
      'herd … heard':
        'Both are the wrong way round. Noticing a sound is heard, and a group of cows is a herd.',
      'heard … heard': 'The first word is right. But a group of cows is a herd, not heard.',
      'herd … herd':
        "The second word is right. But 'We herd the farmer' needs the past of hear: heard.",
    },
    tip: 'Heard has the word ear inside it, like hear. You heard it with your ears.',
  },
  '___ train was an ___ late.': {
    why: 'The train belongs to us, so the first gap is our. It was sixty minutes late, so the second gap is hour.',
    not: {
      'Hour … our':
        "Both are the wrong way round. 'Our train' shows belonging, and sixty minutes is an hour.",
      'Our … our':
        "The first word is right. But 'an our late' makes no sense: sixty minutes is an hour.",
      'Hour … hour':
        "The second word is right. But 'Hour train' makes no sense: the train belongs to us, so it is our.",
    },
    tip: "Hour has a silent h, which is why it takes 'an': an hour.",
  },
  'He had plenty to do ___ the next ___.': {
    why: 'Silas was busy all the way across the next sixty minutes: through the next hour. Through means from start to finish.',
    not: {
      'through … our':
        'The first word is right. But our shows belonging; sixty minutes is an hour.',
      'threw … hour':
        "The second word is right. But threw is the past of throw; 'from start to finish' is through.",
      'threw … our': 'Neither fits. Across a time is through, and sixty minutes is an hour.',
    },
  },
  'It was the most dramatic ___ I have ever watched, and the final ___ was even better.': {
    why: 'Both gaps name a part of a play or film. A scene is one part of a play or film in one place, so it fills both gaps.',
    not: {
      'seen … scene':
        "The second word is right. But seen is a form of the verb see; after 'dramatic' the gap needs a noun: scene.",
      'scene … seen':
        "The first word is right. But 'the final seen' needs a noun too: the final scene.",
      'seen … seen':
        "Neither fits. Seen is part of the verb see, as in 'I have seen it.' Both gaps need the noun scene.",
    },
  },
  '___ they saw what Clover had ___.': {
    why: "Then tells what happened next: the animals rushed into the yard, and then they saw. Seen is the form of see after 'had'.",
    not: {
      'Then … scene':
        "The first word is right. But after 'had' the sentence needs a form of the verb: seen.",
      'Than … seen': 'The second word is right. But than is for comparing; what came next is then.',
      'Than … scene': "Neither fits. What happened next is then, and 'had seen' is the verb.",
    },
    more: 'What Clover had seen was a pig walking on its hind legs: the moment the pigs start to become the humans they overthrew.',
  },
  'Please ___ here while the nurse checks your height and ___.': {
    why: 'You stay where you are while the nurse works: wait. The nurse measures how tall and how heavy you are: height and weight.',
    not: {
      'weight … wait':
        'Both are the wrong way round. Staying put is wait, and how heavy you are is weight.',
      'wait … wait':
        'The first word is right. But how heavy you are is your weight, spelt with eigh like height.',
      'weight … weight':
        "The second word is right. But 'Please weight here' should be wait, meaning stay.",
    },
    more: 'Weight is spelt eigh, like eight. Height is spelt eigh too, though it sounds different.',
  },
  'We shall ___ here until ___ return.': {
    why: 'Holmes means they will stay until the other man comes back. Wait means to stay where you are. The return belongs to him, so the second gap is your.',
    not: {
      "wait … you're":
        "The first word is right. But 'until you are return' makes no sense: belonging is your.",
      'weight … your':
        'The second word is right. But weight is how heavy something is; staying put is wait.',
      "weight … you're": 'Neither fits. Staying put is wait, and the return belongs to him: your.',
    },
  },
  '___ you help me carry this ___ into the shed?': {
    why: 'The first gap makes a polite request: Would you help me? The second names what is carried: logs or planks, that is, wood.',
    not: {
      'Wood … would':
        'Both are the wrong way round. A polite request starts with would, and logs are wood.',
      'Would … would':
        "The first word is right. But 'carry this would' makes no sense: the thing carried is wood.",
      'Wood … wood':
        "The second word is right. But a request needs the verb would, as in 'Would you like tea?'",
    },
  },
  'The team ___ the cup, and then it ___ the league as well.': {
    why: 'Both gaps are victories in the past: the team won the cup and won the league. Won is the past form of win, so it fills both gaps.',
    not: {
      'one … won':
        "The second word is right. But one is the number 1; 'the team one the cup' makes no sense.",
      'won … one':
        "The first word is right. But 'then it one the league' needs the past of win: won.",
      'one … one': 'Neither fits. One is a number. Both gaps need the action, won.',
    },
  },
  'Only ___ team ___ every match this season.': {
    why: 'The first gap is the number 1: only one team. The second is the past form of win: that team won every match.',
    not: {
      'won … one': 'Both are the wrong way round. The number is one, and the past of win is won.',
      'one … one': "The first word is right. But 'one every match' needs the past of win: won.",
      'won … won': "The second word is right. But 'only won team' should be the number: one.",
    },
  },
  'Of ___, the sand on this beach is very ___.': {
    why: "'Of course' means naturally or certainly, so the first gap is course. Sand made of large, rough grains is coarse, meaning rough.",
    not: {
      'coarse … course':
        "Both are the wrong way round. 'Of course' is spelt with ou, and rough sand is coarse.",
      'course … course':
        'The first word is right. But a course is a route or a set of lessons; rough sand is coarse.',
      'coarse … coarse':
        "The second word is right. But the phrase 'of course' always uses course, with ou.",
    },
  },
  'It is not ___ that the bus ___ has gone up again.': {
    why: "'Not fair' means not just or reasonable, so the first gap is fair. The money paid for a journey is a fare.",
    not: {
      'fare … fair':
        'Both are the wrong way round. Just and reasonable is fair, and the price of a ticket is a fare.',
      'fair … fair':
        'The first word is right. But the price of a bus journey is the fare, spelt -are.',
      'fare … fare': "The second word is right. But 'it is not fare' should be fair, meaning just.",
    },
    more: "Fare also means to get on: 'How did you fare in the test?' Fair can also mean pale, or an outdoor show with rides.",
  },
  '___ is foul, and foul is ___: / Hover through the fog and filthy air.': {
    why: 'The witches mean that what seems good is evil, and evil seems good. Fair here means good or beautiful, and it fills both gaps.',
    not: {
      'Fair … fare':
        'The first word is right. But fare is the price of a journey; the line ends by repeating fair.',
      'Fare … fair':
        "The second word is right. But fare is a price; 'Fare is foul' makes no sense.",
      'Fare … fare':
        'Neither fits. Fare is the money paid for a journey. Both gaps mean good or beautiful: fair.',
    },
    more: 'The line is a paradox and a chiasmus: fair and foul swap places. It warns the audience that appearances will deceive in Macbeth.',
  },
  'The ___ could not decide ___ spell to cast.': {
    why: 'Someone who casts spells is a witch, so the first gap is witch. The second asks about a choice between spells: which spell.',
    not: {
      'which … witch':
        'Both are the wrong way round. A person who casts spells is a witch, and a choice is which.',
      'witch … witch':
        "The first word is right. But a choice between spells needs which, as in 'Which one?'",
      'which … which':
        "The second word is right. But 'The which could not decide' needs the person: witch.",
    },
  },
  'She won the main ___, and her brother got a small ___ in the same play.': {
    why: 'Both gaps name a part in a play. A role is a part played by an actor, so it fills both gaps.',
    not: {
      'roll … role':
        "The second word is right. But a roll is bread, or a movement; an actor's part is a role.",
      'role … roll': "The first word is right. But her brother's part in the play is also a role.",
      'roll … roll':
        'Neither fits. A roll is a small loaf or a turning movement. Both gaps name parts in a play: role.',
    },
  },
  'Her ___ in the play was to ___ the dice at the start.': {
    why: 'A part in a play is a role. To throw dice so they turn over is to roll them.',
    not: {
      'roll … role':
        'Both are the wrong way round. A part in a play is a role, and dice are rolled.',
      'role … role': "The first word is right. But after 'to' the sentence needs the verb, roll.",
      'roll … roll': 'The second word is right. But her part in the play is her role, with an e.',
    },
  },
  "I can't ___ walking in ___ feet on hot sand.": {
    why: "'I can't bear it' means I cannot stand it. Bear means to put up with. Feet with no shoes are bare, meaning uncovered.",
    not: {
      'bare … bear':
        'Both are the wrong way round. To put up with something is to bear it, and uncovered feet are bare.',
      'bear … bear': 'The first word is right. But feet without shoes are bare, meaning uncovered.',
      'bare … bare':
        "The second word is right. But 'I can't bare walking' should be bear, meaning stand or tolerate.",
    },
    more: 'Bear has several meanings: the animal, to carry (bear a load) and to put up with (bear the pain). Bare means uncovered or empty.',
  },
  'Our ___ explained the ___ behind the rule.': {
    why: 'The person in charge of a school or college is its principal. The idea or belief a rule is based on is its principle.',
    not: {
      'principle … principal':
        'Both are the wrong way round. The head of a school is the principal, and the idea behind a rule is a principle.',
      'principal … principal':
        'The first word is right. But the idea behind a rule is a principle, ending -ple.',
      'principle … principle':
        'The second word is right. But the person in charge is the principal, ending -pal.',
    },
    tip: 'The principal is your pal, a person. A principle is a rule or belief: both principle and rule end in -le.',
  },
  'Fairness is a ___ I believe in, and honesty is another ___ I try to follow.': {
    why: 'Fairness and honesty are beliefs about how to act. A belief or rule like this is a principle, so it fills both gaps.',
    not: {
      'principal … principle':
        'The second word is right. But a belief is a principle; a principal is the head of a school or college.',
      'principle … principal':
        'The first word is right. But honesty is also a belief: a principle.',
      'principal … principal':
        'Neither fits. A principal is a head teacher, or means main. Both gaps are beliefs: principle.',
    },
  },
  'I have been a selfish being all my life, in ___, though not in ___.': {
    why: 'Mr Darcy means he acted selfishly, though he believed in doing good. In practice, the noun, means in what you actually do. A principle is a belief about how to act.',
    not: {
      'practice … principal':
        'The first word is right. But principal means main, or the head of a school; a belief is a principle.',
      'practise … principle':
        "The second word is right. But 'in practice' uses the noun, which in British English is spelt with a c.",
      'practise … principal':
        'Neither fits. The noun is practice, with a c, and a belief is a principle.',
    },
    more: "Darcy's confession shows how far he has changed since his proud first proposal. Setting practice against principle sets what he did against what he believed.",
  },
  'Bingley was the ___ spokesman, and Miss Bennet the ___ object.': {
    why: 'Bingley did most of the talking, and Jane got most of his attention. Both gaps mean main or chief: principal.',
    not: {
      'principal … principle':
        'The first word is right. But the second gap also means main: the principal object of his attention.',
      'principle … principal':
        'The second word is right. But a principle is a belief; main is principal.',
      'principle … principle':
        'Neither fits. A principle is a belief or rule. Both gaps mean main: principal.',
    },
    tip: "Principal can mean main as well as head teacher. If you can put 'main' in the gap, use principal.",
  },
  'The red scarf will ___ your coat, and you are sure to get a ___.': {
    why: 'To complement is to go well with something and complete it: the scarf goes with the coat. A compliment is a kind remark: someone will praise you.',
    not: {
      'compliment … complement':
        'Both are the wrong way round. Going well with something is complement, and praise is a compliment.',
      'complement … complement':
        'The first word is right. But a kind remark is a compliment, with an i.',
      'compliment … compliment':
        'The second word is right. But the scarf does not praise the coat: it goes well with it, so it complements it.',
    },
    tip: 'Complement, with an e, completes something. Compliment, with an i, is praise: I like your coat.',
  },
  'The coach paid her a ___, and then paid her team-mate the same ___.': {
    why: 'To pay someone a compliment is to praise them. Both gaps name the same kind remark, so compliment, with an i, fills both.',
    not: {
      'complement … compliment':
        'The second word is right. But a kind remark is a compliment; a complement completes or goes well with something.',
      'compliment … complement':
        "The first word is right. But 'the same' remark is also praise: a compliment.",
      'complement … complement':
        'Neither fits. A complement is something that completes or suits another thing. Both gaps are praise.',
    },
  },
  'Every guest received a ___ drink, and the colours of the room were ___.': {
    why: 'A complimentary drink is free, given as a courtesy. Colours that go well together and complete each other are complementary.',
    not: {
      'complementary … complimentary':
        'Both are the wrong way round. Free is complimentary, and colours that suit each other are complementary.',
      'complimentary … complimentary':
        'The first word is right. But colours that go well together are complementary, with an e.',
      'complementary … complementary':
        'The second word is right. But a free drink is complimentary, with an i.',
    },
    more: 'Complimentary comes from compliment, a kind remark: a free gift is a kind gesture. Complementary comes from complement, to complete.',
  },
  '___ my thanks for the ___ you are paying me.': {
    why: 'Elizabeth asks Mr Collins to take her thanks: accept them. A compliment is praise, and he pays her one by proposing.',
    not: {
      'Accept … complement':
        'The first word is right. But a complement completes something; praise is a compliment, with an i.',
      'Except … compliment':
        "The second word is right. But except means 'not including'; taking thanks offered is accept.",
      'Except … complement':
        'Neither fits. Taking something offered is accept, and praise is a compliment.',
    },
    more: "Elizabeth is refusing Mr Collins's proposal politely. He takes her refusal as modesty, which makes the moment comic.",
  },
  'I did not ___ such a ___.': {
    why: 'Jane did not think she would be asked to dance twice. Expect means to think something will happen. The honour of being asked was a compliment, a mark of praise.',
    not: {
      'expect … complement':
        'The first word is right. But a complement completes something; an honour or praise is a compliment.',
      'except … compliment':
        "The second word is right. But except means 'not including'; 'I did not except' makes no sense.",
      'except … complement': 'Neither fits. The verb is expect, and praise is a compliment.',
    },
  },
  'Loud noise can ___ your sleep, and the ___ may last all day.': {
    why: 'The first gap is a verb meaning to change or influence: noise can affect your sleep. The second is a noun meaning a result: the effect.',
    not: {
      'effect … affect':
        'Both are the wrong way round. The verb, to influence, is affect, and the result is the effect.',
      'affect … affect':
        "The first word is right. But after 'the' the gap needs a noun, the result: effect.",
      'effect … effect':
        "The second word is right. But 'can effect your sleep' needs the verb meaning to influence: affect.",
    },
    tip: 'A for action, E for end result. Affect is the action word, and effect is the result.',
  },
  'The new rule had no ___ at first, but it soon began to ___ how people behaved.': {
    why: "'Had no effect' needs the noun, a result. 'Began to affect how people behaved' needs the verb, to influence.",
    not: {
      'affect … effect':
        'Both are the wrong way round. A result is an effect, and to influence is to affect.',
      'effect … effect':
        "The first word is right. But 'began to effect' needs the verb meaning to influence: affect.",
      'affect … affect':
        "The second word is right. But 'had no affect' needs the noun, the result: effect.",
    },
  },
  'The film had a strange ___ on me, and its music had the same ___ on my sister.': {
    why: 'Both gaps name a result: what the film and its music did to people. A result is an effect, the noun, so it fills both gaps.',
    not: {
      'affect … effect':
        "The second word is right. But 'a strange affect' needs the noun, a result: effect.",
      'effect … affect':
        "The first word is right. But 'the same affect' also needs the noun: effect.",
      'affect … affect':
        "Neither fits. Affect is usually the verb, to influence. After 'a' and 'the same', both gaps need nouns.",
    },
    tip: "If you can put 'a', 'an' or 'the' before the gap, you almost always need effect.",
  },
  '___ was also a postscript to this ___.': {
    why: "A postscript existed: there was. 'To this effect' means with this meaning. Effect is the noun.",
    not: {
      'There … affect':
        "The first word is right. But after 'this' the gap needs a noun, effect; affect is usually the verb.",
      'Their … effect':
        "The second word is right. But their shows belonging; 'there was' says that something existed.",
      'Their … affect': "Neither fits. 'There was' needs there, and the noun is effect.",
    },
    more: "A postscript, or PS, is a note added after the end of a letter. This one is in Mr Gardiner's letter about Lydia.",
  },
  'I do ___ you, that the news does not ___ me either with pleasure or pain.': {
    why: 'Jane tells Elizabeth firmly, to remove her doubt: I assure you. The news does not change her feelings: it does not affect her. Affect is the verb.',
    not: {
      'assure … effect':
        "The first word is right. But 'does not effect me' needs the verb meaning to influence: affect.",
      'ensure … affect':
        'The second word is right. But ensure means to make certain; telling a person firmly is assure.',
      'ensure … effect': 'Neither fits. Telling a person is assure, and the verb is affect.',
    },
    more: "Jane insists that Bingley's return means nothing to her. Elizabeth, and the reader, do not fully believe her.",
  },
  'You need to ___ every day, because ___ makes perfect.': {
    why: "After 'need to' comes a verb: practise, with an s, in British English. The second gap is the noun, the subject of 'makes': practice, with a c.",
    not: {
      'practice … practise':
        'Both are the wrong way round. The verb is practise, with an s, and the noun is practice, with a c.',
      'practise … practise':
        "The first word is right. But the subject of 'makes perfect' is a thing, a noun: practice.",
      'practice … practice':
        "The second word is right. But after 'need to' the sentence needs the verb: practise.",
    },
    tip: "If you can put 'the' in front, it is the noun, practice. If you can put 'to' in front, it is the verb, practise.",
  },
  'I ___ the piano before school, and I ___ my lines after it.': {
    why: 'Both gaps are actions: what I do with the piano and with my lines. In British English the verb is practise, with an s, so it fills both gaps.',
    not: {
      'practice … practise':
        'The second word is right. But the first gap is also an action, a verb: practise.',
      'practise … practice':
        "The first word is right. But 'I practice my lines' needs the verb too: practise.",
      'practice … practice':
        'Neither fits in British English. Practice, with a c, is the noun. Both gaps are verbs.',
    },
  },
  'It was not the rector’s ___ to let a charming blush pass without an appropriate ___.': {
    why: 'It was not his habit to stay silent when a girl blushed; he always praised her. A habit is a practice, the noun. The praise is a compliment.',
    not: {
      'practice … complement':
        'The first word is right. But a complement completes something; praise is a compliment.',
      'practise … compliment':
        "The second word is right. But 'the rector's practice' is a noun, spelt with a c in British English.",
      'practise … complement': 'Neither fits. The noun is practice, and praise is a compliment.',
    },
  },
  'The bus stood ___ in traffic, so I read the list of ___ I needed for the new term.': {
    why: 'A bus that is not moving is stationary. Pens, paper and folders are stationery. Both words are spelt the same until the ending.',
    not: {
      'stationery … stationary':
        'Both are the wrong way round. Not moving is stationary, and pens and paper are stationery.',
      'stationary … stationary':
        'The first word is right. But pens and paper are stationery, with an e.',
      'stationery … stationery':
        'The second word is right. But a bus that is not moving is stationary, with an a.',
    },
    tip: "Stationery, with e, is envelopes, pens and paper. Stationary, with a, means standing still: a for 'at a standstill'.",
  },
  'For, ___ was something very comfortable in having plenty of ___.': {
    why: 'Something comforting existed, there was. Pens, ink and paper, which Pip and Herbert have just laid out, are stationery.',
    not: {
      'there … stationary':
        'The first word is right. But stationary means not moving; paper and pens are stationery.',
      'their … stationery':
        "The second word is right. But their shows belonging; 'there was' says that something existed.",
      'their … stationary':
        "Neither fits. 'There was' needs there, and paper and pens are stationery.",
    },
    more: 'Pip and Herbert sit down to sort out their debts, but enjoy the pens and paper more than the sums. Dickens makes the moment gently comic.',
  },
  'The class was split into ___ groups for the project, and the teacher was ___ about who was struggling.':
    {
      why: 'Separate groups are discrete, meaning distinct and apart. A teacher who avoids embarrassing pupils is discreet, meaning careful and tactful.',
      not: {
        'discreet … discrete':
          'Both are the wrong way round. Separate is discrete, and tactful is discreet.',
        'discrete … discrete':
          'The first word is right. But a tactful teacher is discreet, with ee together.',
        'discreet … discreet':
          'The second word is right. But separate groups are discrete, with the e letters apart.',
      },
      tip: 'In discrete the two e letters are kept apart by the t, just as discrete things are separate.',
    },
  'Be ___ about the surprise party, and ask the others to be ___ too.': {
    why: 'Both gaps ask people to be careful not to give the secret away. Discreet means careful and tactful, so it fills both gaps.',
    not: {
      'discrete … discreet':
        'The second word is right. But discrete means separate; keeping a secret needs discreet.',
      'discreet … discrete':
        'The first word is right. But the others are also asked to keep the secret: discreet.',
      'discrete … discrete':
        'Neither fits. Discrete means separate and distinct. Both gaps are about keeping quiet: discreet.',
    },
  },
  'You need a ___ to fish in this lake, and the owners will only ___ ten anglers a day.': {
    why: 'In British English the noun, the document, is licence, with a c. The verb, to give permission, is license, with an s.',
    not: {
      'license … licence':
        'Both are the wrong way round. The document is a licence, and to give permission is to license.',
      'licence … licence':
        'The first word is right. But the second gap is a verb, what the owners do: license.',
      'license … license':
        'The second word is right. But the document is a noun, licence. In British English, license is only the verb.',
    },
    tip: 'Advice and advise follow the same pattern: c for the noun, s for the verb. Practice and practise do too.',
  },
  'A driving ___ costs money, and so does a fishing ___.': {
    why: 'Both gaps name a document that gives permission. In British English that noun is licence, with a c, so it fills both gaps.',
    not: {
      'license … licence':
        'The second word is right. But a driving licence is a noun too; in British English, license is the verb.',
      'licence … license':
        'The first word is right. But a fishing licence is also a document, a noun: licence.',
      'license … license':
        'Neither fits in British English. License is the verb, to give permission. Both gaps are nouns.',
    },
    more: 'American English uses license for the noun as well, which is why the spelling is so often mixed up.',
  },
  '___ many farmers had assumed, without due enquiry, that on such a farm a spirit of ___ and indiscipline would prevail.':
    {
      why: 'Mr Pilkington says more farmers than should have had made the wrong guess: too many. Licence here means too much freedom, a lack of rules, and the noun is spelt with a c.',
      not: {
        'Too … license':
          'The first word is right. But licence is a noun here, and in British English the noun is spelt with a c.',
        'To … licence':
          "The second word is right. But 'more than should' is too, with two o letters.",
        'To … license': "Neither fits. 'More than should' is too, and the British noun is licence.",
      },
      more: "Pilkington's speech near the end of Animal Farm praises the pigs for working their animals harder than any human farmer. Orwell lets the reader see the irony.",
    },
  "My teacher's ___ was to read the poem again, and I would ___ you to do the same.": {
    why: 'The first gap is the noun, the help given: advice, with a c. The second is the verb, the action: advise, with an s.',
    not: {
      'advise … advice':
        'Both are the wrong way round. The noun is advice, and the verb is advise.',
      'advice … advice': "The first word is right. But 'I would ___ you' needs the verb, advise.",
      'advise … advise': "The second word is right. But 'my teacher's ___' needs the noun, advice.",
    },
    tip: 'Advice rhymes with ice, a thing, and advise rhymes with prize. The c and the s even sound different.',
  },
  '___ is one point, on which I want your ___.': {
    why: 'Elizabeth says one point exists that she needs help with: there is. The help she wants is a noun, advice, with a c.',
    not: {
      'There … advise':
        "The first word is right. But after 'your' the gap needs the noun, advice; advise is the verb.",
      'Their … advice':
        "The second word is right. But their shows belonging; 'There is' says that something exists.",
      'Their … advise': "Neither fits. 'There is' needs there, and the noun is advice.",
    },
  },
  'If my ___ had been asked, I should not have been ___.': {
    why: 'Mr Jaggers says nobody asked his opinion, and if they had, he would not be in this place. The noun is advice. Here means in this place.',
    not: {
      'advice … hear': "The first word is right. But hear is about sound; 'in this place' is here.",
      'advise … here':
        "The second word is right. But after 'my' the gap needs the noun, advice, with a c.",
      'advise … hear': "Neither fits. The noun is advice, and 'in this place' is here.",
    },
    more: 'Jaggers has come to tell Pip of his great expectations. Saying it was not his idea shows how coldly he treats the business.',
  },
  'He had the ___ of an eminent oculist; and he eventually recovered the ___ of that one eye.': {
    why: "Mr Rochester saw an eye doctor, an oculist, and got the doctor's help: the noun advice. He then partly got back the power of seeing: sight.",
    not: {
      'advice … site':
        'The first word is right. But a site is a place for building; the power of seeing is sight.',
      'advise … sight':
        "The second word is right. But after 'the' the gap needs the noun, advice, with a c.",
      'advise … site': 'Neither fits. The noun is advice, and seeing is sight.',
    },
    more: 'Rochester was blinded in the fire at Thornfield. Getting back the sight of one eye lets him see his first child.',
  },
  'But ___ is one thing on which you may ___ me.': {
    why: 'Dr Jekyll says one thing exists that he needs help with: there is. To give advice is the verb, advise, with an s.',
    not: {
      'there … advice':
        "The first word is right. But after 'may' the sentence needs the verb, advise; advice is the noun.",
      'their … advise':
        "The second word is right. But their shows belonging; 'there is' says that something exists.",
      'their … advice':
        "Neither fits. 'There is' needs there, and after 'may' comes the verb advise.",
    },
    tip: 'The noun advice has a c and the verb advise an s, and they sound different: ice, prize. Licence and license follow the same rule, though they sound alike.',
  },
  "The engineers had to ___ a new ___ for measuring the river's depth.": {
    why: 'The first gap is an action: to invent or plan, which is devise. The second is a thing, a machine or tool: device.',
    not: {
      'device … devise':
        'Both are the wrong way round. To invent is devise, and the tool is a device.',
      'devise … devise':
        'The first word is right. But the tool is a thing, a noun: device, with a c.',
      'device … device':
        "The second word is right. But 'had to device' needs the verb, devise, with an s.",
    },
    tip: 'The noun has c and the verb has s, as with advice and advise.',
  },
  'This falls out better ___ I could ___.': {
    why: 'Oberon means things are going better than he could have planned. Better compares, so it needs than. To plan or invent is the verb devise, with an s.',
    not: {
      'than … device':
        "The first word is right. But after 'could' the sentence needs a verb, devise; a device is a thing.",
      'then … devise': 'The second word is right. But after better, a comparing word, use than.',
      'then … device': 'Neither fits. Comparing needs than, and planning is devise.',
    },
  },
  'I sat staring before me, trying in ___ to ___ some countervailing thought.': {
    why: 'The narrator tries without success, in vain, to think up an argument against the artilleryman. To think up or invent is devise.',
    not: {
      'vain … device':
        "The first word is right. But after 'to' the sentence needs a verb, devise; a device is a thing.",
      'vein … devise':
        "The second word is right. But a vein carries blood; 'without success' is in vain.",
      'vein … device': "Neither fits. 'Without success' is in vain, and to think up is devise.",
    },
    more: 'Countervailing means pushing against: he wants a thought strong enough to answer what he has been told.',
  },
  '“I ___ that you will travel far,” said the fortune-teller, but nobody believed her ___.': {
    why: 'To foretell the future is to prophesy, the verb, with an s. What she foretold is a prophecy, the noun, with a c.',
    not: {
      'prophecy … prophesy':
        "Both are the wrong way round. 'I prophesy' is the verb, and what nobody believed is the noun, prophecy.",
      'prophesy … prophesy':
        "The first word is right. But 'her prophesy' should be the noun, prophecy, with a c.",
      'prophecy … prophecy':
        "The second word is right. But after 'I' the sentence needs a verb: I prophesy.",
    },
    more: "In Macbeth the weird sisters make prophecies, and Macbeth acts on them. The noun ends with the sound 'see'; the verb with the sound 'sigh'.",
  },
  'And when the human beings listened to it, they secretly trembled, hearing in it a ___ of ___ future doom.':
    {
      why: 'The farmers take the song as a warning of what will happen to them. A warning of the future is a prophecy, the noun. The future belongs to the humans, so the second gap is their.',
      not: {
        'prophecy … there':
          'The first word is right. But the future belongs to the humans, so the word is their.',
        'prophesy … their':
          "The second word is right. But after 'a' the gap needs the noun, prophecy; prophesy is the verb.",
        'prophesy … there': 'Neither fits. The noun is prophecy, and belonging is their.',
      },
    },
  "The family's only ___ is their young son, who is ___ on them for everything.": {
    why: 'In British English the noun, a person who relies on others, is a dependant. The describing word, relying on, is dependent.',
    not: {
      'dependent … dependant':
        'Both are the wrong way round. The person is a dependant, and relying on is dependent.',
      'dependant … dependant':
        "The first word is right. But 'who is dependent on them' needs the describing word, ending -ent.",
      'dependent … dependent':
        'The second word is right. But the person, a noun, is a dependant in British English.',
    },
    tip: 'The noun ends -ant, like a person who is an assistant or an attendant. The describing word ends -ent.',
  },
  "The team's ___ was low after the defeat, but the ___ of the story is that you should never give up.":
    {
      why: 'Morale is the confidence and spirit of a group, and it can be low after a defeat. A moral is the lesson a story teaches.',
      not: {
        'moral … morale':
          "Both are the wrong way round. A team's spirit is its morale, and a story's lesson is its moral.",
        'morale … morale':
          'The first word is right. But the lesson of a story is its moral, without the final e.',
        'moral … moral':
          "The second word is right. But the team's spirit is its morale, with a final e.",
      },
      more: "Moral can also describe good and bad behaviour: 'a moral choice'. Morale is only ever about spirit and confidence.",
    },
  'Tell the ___ department if you must miss work for ___ reasons.': {
    why: "Personnel means the people who work for an organisation, so the department that looks after staff is the personnel department. Personal means to do with one person's own life: personal reasons.",
    not: {
      'personal … personnel':
        'Both are the wrong way round. The department for staff is personnel, and reasons from your own life are personal.',
      'personnel … personnel':
        'The first word is right. But reasons to do with your own life are personal, ending -al.',
      'personal … personal':
        'The second word is right. But the department that looks after staff is the personnel department, ending -el.',
    },
    more: 'Personnel is stressed at the end, per-son-NEL, and personal at the start, PER-son-al. Saying each word carefully helps you tell them apart.',
  },
  'The police tried to ___ information about the ___ sale of fireworks.': {
    why: 'To elicit information is to draw it out of people by asking. Illicit means against the law, so an illicit sale is an illegal one.',
    not: {
      'illicit … elicit':
        'Both are the wrong way round. Drawing out information is elicit, and illegal is illicit.',
      'elicit … elicit':
        'The first word is right. But an illegal sale is illicit, which begins with ill, like illegal.',
      'illicit … illicit':
        "The second word is right. But after 'tried to' the gap needs the verb: elicit.",
    },
    tip: 'Illicit and illegal both begin ill-. Elicit begins e-, like extract: to draw something out.',
  },
  'The ___ scientist warned that a storm was ___.': {
    why: 'An eminent scientist is famous and respected. An imminent storm is about to happen very soon.',
    not: {
      'imminent … eminent':
        'Both are the wrong way round. Famous is eminent, and about to happen is imminent.',
      'eminent … eminent':
        'The first word is right. But a storm about to happen is imminent, with mm.',
      'imminent … imminent':
        'The second word is right. But a respected scientist is eminent, beginning e-.',
    },
    tip: 'Imminent and immediate both begin imm-: something imminent will happen almost immediately.',
  },
  'Take a deep ___ and ___ out slowly.': {
    why: 'The first gap is a noun, the air you take in: a breath. The second is the verb, the action: breathe, with a final e.',
    not: {
      'breathe … breath':
        'Both are the wrong way round. The noun is breath, and the action is breathe.',
      'breath … breath':
        "The first word is right. But the action in 'and ___ out slowly' is the verb, breathe.",
      'breathe … breathe':
        "The second word is right. But after 'a deep' the gap needs the noun, breath.",
    },
    tip: 'The verb breathe has an extra e, and the e changes the sound of th. Bathe and bath work the same way.',
  },
  'At the churchyard wicket he stopped: he discovered I was ___ out of ___.': {
    why: 'Mr Rochester has hurried Jane to the church so fast that she cannot breathe properly. Quite out of breath means completely out of breath. Breath is the noun.',
    not: {
      'quite … breathe':
        "The first word is right. But 'out of breath' needs the noun; breathe, with an e, is the verb.",
      'quiet … breath':
        'The second word is right. But quiet means making little noise; completely is quite.',
      'quiet … breathe':
        "Neither fits. Completely is quite, and after 'out of' the noun is breath.",
    },
  },
  'A flash of ___ lit the sky, and an hour later the sky was ___ as the storm moved away.': {
    why: 'The flash in a storm is lightning, with no e. A sky becoming lighter is lightening, from the verb lighten.',
    not: {
      'lightening … lightning':
        'Both are the wrong way round. The flash is lightning, and getting lighter is lightening.',
      'lightning … lightning':
        'The first word is right. But a sky becoming lighter is lightening, with an e.',
      'lightening … lightening':
        'The second word is right. But the flash in a storm is lightning, with no e.',
    },
  },
  'In thunder, ___, or in ___?': {
    why: 'The First Witch lists what a storm brings: thunder, the flash of lightning, and rain falling from clouds.',
    not: {
      'lightning … reign':
        "The first word is right. But a reign is a monarch's time on the throne; falling water is rain.",
      'lightening … rain':
        'The second word is right. But lightening means becoming lighter; the flash in a storm is lightning.',
      'lightening … reign': 'Neither fits. The flash is lightning, and falling water is rain.',
    },
    more: 'Macbeth opens in a storm, with the witches meeting in thunder and lightning. A reign is exactly what Macbeth will kill to get.',
  },
  'The flat is on the third ___, and the lift stops at every ___.': {
    why: 'Both gaps name a floor of a building. In British English a floor is a storey, so it fills both gaps.',
    not: {
      'story … storey':
        'The second word is right. But a story is a tale; the third floor is the third storey.',
      'storey … story': 'The first word is right. But the lift stops at every floor, every storey.',
      'story … story':
        'Neither fits in British English. A story is a tale. Both gaps name floors: storey.',
    },
    more: 'American English uses story for both, which is one reason the British spelling is often missed.',
  },
  'The ___ is set in a house where the attic is on the fourth ___.': {
    why: 'Something set in a house, with a plot and characters, is a story, so the first gap is story. A floor of a building is, in British English, a storey.',
    not: {
      'storey … story': 'Both are the wrong way round. A tale is a story, and a floor is a storey.',
      'story … story':
        'The first word is right. But a floor of a building is a storey in British English.',
      'storey … storey': 'The second word is right. But a tale that is set somewhere is a story.',
    },
  },
  'It came out of the third ___; for it ___ overhead.': {
    why: "The cry came from the third floor of Thornfield Hall, and in British English a floor is a storey. It went over Jane's room, an action: passed.",
    not: {
      'storey … past':
        "The first word is right. But 'it ___ overhead' needs a verb, the action passed.",
      'story … passed': 'The second word is right. But a story is a tale; a floor is a storey.',
      'story … past': 'Neither fits. A floor is a storey, and the action is passed.',
    },
  },
  'I finished the first ___ of my essay and shut the window to keep out the ___.': {
    why: 'A first version of a piece of writing is a draft. A cold current of air coming in is a draught.',
    not: {
      'draught … draft':
        'Both are the wrong way round. A first version is a draft, and cold air is a draught.',
      'draft … draft':
        'The first word is right. But cold air through a window is a draught in British English.',
      'draught … draught': 'The second word is right. But a first version of an essay is a draft.',
    },
    more: 'Draught has other British meanings too: a drink, and the game of draughts. Draft also means a plan or a bank order.',
  },
  'Bessie ___ endeavoured to persuade her to take a sedative ___: she succeeded with difficulty.': {
    why: 'Now tells the moment Bessie tried. A sedative draught is a dose of calming medicine, a drink, and in British English that is a draught.',
    not: {
      'now … draft':
        'The first word is right. But a draft is a first version of writing; a dose to drink is a draught.',
      'know … draught': 'The second word is right. But know is about knowledge; the moment is now.',
      'know … draft': 'Neither fits. The moment is now, and the dose of medicine is a draught.',
    },
  },
  'The soldiers swore never to ___ their post, even in the burning ___.': {
    why: 'To desert a post is to leave it when you should stay. A burning desert is a hot, dry land. Both are spelt desert, with one s.',
    not: {
      'dessert … desert':
        "The second word is right. But a dessert is a pudding; 'never to dessert their post' needs the verb, desert.",
      'desert … dessert':
        'The first word is right. But a burning, dry land is a desert, with one s.',
      'dessert … dessert':
        'Neither fits. A dessert is a sweet course after a meal. Both gaps are spelt desert.',
    },
    tip: 'Dessert has two s letters, like a second helping of pudding. Everything else is desert.',
  },
  'We had ice cream for ___ after our long trek across the ___.': {
    why: 'Ice cream at the end of a meal is a dessert, with two s letters. A dry, sandy land is a desert, with one.',
    not: {
      'desert … dessert':
        'Both are the wrong way round. Pudding is a dessert, and sandy land is a desert.',
      'dessert … dessert':
        'The first word is right. But a dry, sandy land is a desert, with one s.',
      'desert … desert':
        'The second word is right. But a pudding is a dessert, with two s letters.',
    },
  },
  '___ is something terribly appalling in our situation, yet my courage and hopes do not ___ me.': {
    why: 'Walton says something terrible exists: there is. His courage does not leave him: it does not desert him. To desert is to abandon.',
    not: {
      'There … dessert':
        'The first word is right. But a dessert is a pudding; to abandon is desert, with one s.',
      'Their … desert':
        "The second word is right. But their shows belonging; 'there is something' needs there.",
      'Their … dessert': "Neither fits. 'There is' needs there, and to abandon is desert.",
    },
    more: "Walton's ship is trapped in the ice, just as Victor is trapped by his creation. His letters frame the whole novel.",
  },
  'The old pipes were made of ___, and the plumber ___ us straight to the leak.': {
    why: 'Lead is a heavy, soft grey element once used for water pipes, spelt lead. The plumber guided us in the past, and the past form of lead is led.',
    not: {
      'led … lead':
        'Both are the wrong way round. The metal is lead, and the past of guide is led.',
      'lead … lead': 'The first word is right. But the guiding happened in the past, so it is led.',
      'led … led':
        'The second word is right. But the metal is spelt lead, even though it sounds like led.',
    },
    tip: "The past of lead is led, never 'lead'. Lead, the element, sounds like led, which is why people mix them up.",
  },
  '___ he stretched his hand out to be ___.': {
    why: 'Then tells what happened next. Mr Rochester, now blind, wants to be guided: to be led, the past form of lead.',
    not: {
      'Then … lead':
        "The first word is right. But after 'to be' the sentence needs led, the past form; 'to be lead' is a common mistake.",
      'Than … led':
        'The second word is right. But than is for comparing; what happened next is then.',
      'Than … lead': "Neither fits. What happened next is then, and 'to be guided' is to be led.",
    },
  },
  '___ the way, ___, and we’ll all follow you.': {
    why: "The Squire tells someone to go first and guide them: lead the way. Then here means 'in that case'.",
    not: {
      'Lead … than': "The first word is right. But than is for comparing; 'in that case' is then.",
      'Led … then':
        'The second word is right. But an order uses the present form: lead the way. Led is the past.',
      'Led … than': "Neither fits. An order needs lead, and 'in that case' is then.",
    },
  },
  'Snowball was racing across the long pasture that ___ to the ___.': {
    why: 'The pasture went towards the road, in the past: it led there, the past form of lead. A way for traffic is a road.',
    not: {
      'led … rode':
        'The first word is right. But rode is the past of ride; the way for traffic is a road.',
      'lead … road':
        'The second word is right. But the story is in the past, so it is led, not lead.',
      'lead … rode': 'Neither fits. The past of lead is led, and the way is a road.',
    },
    more: "This is Snowball's escape from the dogs that Napoleon has secretly trained. From now on Napoleon rules alone.",
  },
  'The flowers on the church ___ had to be moved, so we had to ___ our plans.': {
    why: 'The table at the front of a church is the altar. To change plans is to alter them.',
    not: {
      'alter … altar':
        'Both are the wrong way round. The church table is an altar, and to change is to alter.',
      'altar … altar':
        'The first word is right. But to change your plans is to alter them, with -er.',
      'alter … alter': 'The second word is right. But the church table is an altar, with -ar.',
    },
    tip: 'Alter and other both end -er: to alter something is to make it other than it was.',
  },
  '___ coming now and saying ‘I’m her father’ doesn’t ___ the feelings inside us.': {
    why: 'Silas tells Godfrey that his arrival, the coming that belongs to him, cannot change their love. Belonging is your, and to change is to alter.',
    not: {
      'Your … altar':
        'The first word is right. But an altar is a church table; to change is alter.',
      "You're … alter":
        "The second word is right. But 'You are coming now' changes the meaning: the sentence is about his coming, so your.",
      "You're … altar": 'Neither fits. Belonging is your, and to change is alter.',
    },
    more: "Godfrey is Eppie's real father, but Silas raised her. The novel argues that love, not blood, makes a family.",
  },
  'By my ___ I swear / There is no power in the tongue of man / To ___ me.': {
    why: 'Shylock swears by his soul, his inner self, that no words can change his mind. Soul is the spirit; to change is to alter.',
    not: {
      'soul … altar':
        'The first word is right. But an altar is a church table; to change someone is to alter them.',
      'sole … alter':
        'The second word is right. But a sole is the bottom of a shoe or a fish; the spirit is the soul.',
      'sole … altar': 'Neither fits. The spirit is the soul, and to change is alter.',
    },
    more: 'Shylock refuses every plea for mercy in court. His oath shows how fixed he is on his bond.',
  },
  'She was ___ introduced to the man who had ___ been her neighbour.': {
    why: 'Formally means in a proper, official way, from formal. Formerly means in the past, before now: he used to be her neighbour.',
    not: {
      'formerly … formally':
        'Both are the wrong way round. The introduction was formal, and the neighbour was in the past: formerly.',
      'formally … formally':
        "The first word is right. But 'had formerly been' means had been in the past.",
      'formerly … formerly':
        'The second word is right. But a proper, official introduction is made formally.',
    },
    tip: 'Formally comes from formal. Formerly comes from former, meaning earlier.',
  },
  '“___,” I answered, “because you did not love me; ___, I reply, because you almost hate me.': {
    why: 'Jane contrasts the past and the present. Formerly means in the past, before. Now means at the present time.',
    not: {
      'Formerly … know':
        'The first word is right. But know is about knowledge; the present time is now.',
      'Formally … now':
        "The second word is right. But formally means in an official way; 'in the past' is formerly.",
      'Formally … know': 'Neither fits. In the past is formerly, and the present is now.',
    },
    more: "Jane is refusing St John's proposal. Setting formerly against now shows her reasons have changed and grown stronger.",
  },
  'A short speech will ___ the prize-giving, and then we will ___ to the hall.': {
    why: 'To precede is to come before: the speech comes before the prize-giving. To proceed is to go forward: we will go on to the hall.',
    not: {
      'proceed … precede':
        'Both are the wrong way round. Coming before is precede, and going on is proceed.',
      'precede … precede':
        'The first word is right. But going on to the hall is proceed, with -ceed.',
      'proceed … proceed':
        'The second word is right. But a speech that comes before something precedes it.',
    },
    more: 'Proceed is one of only three common words ending -ceed: proceed, exceed and succeed. Precede ends -cede, like recede.',
  },
  'I will ___ with my ___.': {
    why: 'Victor goes on with his story. To proceed is to continue or go forward. A story is a tale.',
    not: {
      'proceed … tail':
        'The first word is right. But a tail belongs to an animal; a story is a tale.',
      'precede … tale':
        'The second word is right. But precede means to come before; going on is proceed.',
      'precede … tail': 'Neither fits. Going on is proceed, and a story is a tale.',
    },
    more: "Victor tells most of Frankenstein as his own tale to Walton, and the creature's story sits inside Victor's: stories within stories.",
  },
  'The girl ___ bag was lost is the one ___ crying by the gate.': {
    why: "The bag belongs to the girl, so the first gap shows belonging: whose. The second means 'who is': the one who is crying, so who's.",
    not: {
      "who's … whose": "Both are the wrong way round. Belonging is whose, and 'who is' is who's.",
      'whose … whose':
        "The first word is right. But 'the one who is crying' needs who's, with an apostrophe.",
      "who's … who's":
        "The second word is right. But 'the girl who is bag was lost' makes no sense: belonging is whose.",
    },
    tip: "Say 'who is' in the gap. If it fits, use who's. If the word shows belonging, use whose.",
  },
  '___, Joe kept a journeyman at weekly wages ___ name was Orlick.': {
    why: 'Pip uses now to start a new point in his story. The name belongs to the journeyman, so the second gap shows belonging: whose.',
    not: {
      "Now … who's":
        "The first word is right. But who's means 'who is', which cannot come before 'name': the name belongs to the journeyman, so whose.",
      'Know … whose':
        'The second word is right. But know is about knowledge; starting a new point is now.',
      "Know … who's": 'Neither fits. The story word is now, and belonging is whose.',
    },
    more: "Orlick, the forge worker, becomes one of the most dangerous people in Pip's life. Dickens introduces him plainly before revealing his menace.",
  },
  '___ there, besides foul ___?': {
    why: "Kent asks 'Who is there?' in the storm: who's. The storm itself is foul weather.",
    not: {
      "Who's … whether":
        'The first word is right. But whether brings in a choice; rain and wind are weather.',
      'Whose … weather':
        "The second word is right. But whose shows belonging; 'Who is there?' needs who's.",
      'Whose … whether': "Neither fits. 'Who is' is who's, and the storm is weather.",
    },
    more: "Lear's storm is wild weather that mirrors the chaos in his mind and his kingdom: an example of pathetic fallacy.",
  },
  'Then tell me, / ___ the next ___ of Naples?': {
    why: "Antonio asks who is next in line for the crown. 'Who is' shortens to who's. An heir is the person who will inherit next.",
    not: {
      "Who's … air":
        'The first word is right. But air is what we breathe; the person who inherits is an heir.',
      'Whose … heir':
        "The second word is right. But whose shows belonging, and the question means 'who is', which is who's.",
      'Whose … air': "Neither fits. 'Who is' is who's, and the person who inherits is an heir.",
    },
    more: "Antonio is tempting Sebastian to kill his brother, the King, and take the crown, as Antonio once took Prospero's dukedom.",
  },
  'See ___ he is, ___ with him, what he does.': {
    why: "Cleopatra wants to know Antony's place, his company and his actions. A place is where. 'Who is with him' shortens to who's.",
    not: {
      'where … whose':
        "The first word is right. But whose shows belonging; 'who is with him' needs who's.",
      "were … who's":
        "The second word is right. But were is a past form of 'be'; a place is where.",
      'were … whose': "Neither fits. A place is where, and 'who is' is who's.",
    },
  },
  'The blue tent is ___, but ___ still room in ours.': {
    why: "The tent belongs to them: it is theirs, with no apostrophe. 'There is still room' shortens to there's.",
    not: {
      "there's … theirs":
        "Both are the wrong way round. Belonging is theirs, and 'there is' is there's.",
      'theirs … theirs':
        "The first word is right. But 'there is still room' needs there's, with an apostrophe.",
      "there's … there's":
        "The second word is right. But 'the blue tent is there is' makes no sense: belonging is theirs.",
    },
    tip: 'Theirs, like ours, yours and hers, never takes an apostrophe.',
  },
  'That was ___ too, but they ___ frightened to go inside.': {
    why: "After the Rebellion, the farmhouse belonged to the animals: it was theirs, with no apostrophe. 'They were frightened' needs the past of 'be': were.",
    not: {
      'theirs … where':
        "The first word is right. But where is about a place; 'they ___ frightened' needs the verb were.",
      "there's … were":
        "The second word is right. But there's means 'there is'; belonging is theirs.",
      "there's … where": "Neither fits. Belonging is theirs, and 'they were' needs were.",
    },
  },
  'And even if ___ a delay, how can it ___ the end?': {
    why: "The artilleryman means 'even if there is a delay'. 'There is' shortens to there's. To change something is to alter it.",
    not: {
      "there's … altar":
        'The first word is right. But an altar is a church table; to change is alter.',
      'theirs … alter':
        "The second word is right. But theirs shows belonging; 'there is a delay' needs there's.",
      'theirs … altar': "Neither fits. 'There is' is there's, and to change is alter.",
    },
  },
  'It must be ___ imagination then, and not ___.': {
    why: "Hippolyta says the play's worth must come from the audience's imagination, not the actors'. Both gaps show belonging: your, and theirs.",
    not: {
      "your … there's":
        "The first word is right. But there's means 'there is'; belonging is theirs, with no apostrophe.",
      "you're … theirs":
        "The second word is right. But 'it must be you are imagination' makes no sense: belonging is your.",
      "you're … there's": 'Neither fits. Both gaps show belonging: your and theirs.',
    },
  },
  'I need not sell my ___ to ___ bliss.': {
    why: "The fortune-teller reads Jane's face as saying she will not give up her inner self to get happiness. The inner self is the soul; to get by paying is to buy.",
    not: {
      'soul … by':
        'The first word is right. But by is a small linking word; getting by paying is buy.',
      'sole … buy':
        'The second word is right. But sole means only, or the bottom of a shoe; the inner self is the soul.',
      'sole … by': 'Neither fits. The inner self is the soul, and paying for something is buy.',
    },
    more: "The fortune-teller is Mr Rochester in disguise. The words he reads in Jane's brow describe her: she will not marry without love and self-respect.",
  },
  'Never did mockers ___ more ___ breath.': {
    why: 'Helena says the others are wasting their words on mocking her. To waste is to use up for nothing, and idle breath is talk with no purpose.',
    not: {
      'waste … idol':
        'The first word is right. But an idol is someone adored; pointless talk is idle breath.',
      'waist … idle':
        'The second word is right. But a waist is the middle of the body; using up for nothing is waste.',
      'waist … idol': 'Neither fits. Using up is waste, and pointless is idle.',
    },
  },
}
