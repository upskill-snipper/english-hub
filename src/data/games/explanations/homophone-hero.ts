import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Homophone Hero: the explanation a student sees after each answer, by question key
 * (src/data/games/banks/homophone-hero.ts). Written with AI on 16 October 2026 and checked
 * against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
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
    more: "Their has the word 'heir' inside it. An heir is someone who will own things, which helps you remember that their shows belonging.",
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
    tip: "Swap in 'they are'. If the sentence still makes sense, write they're, with the apostrophe.",
  },
  'Have you finished ___ homework yet?': {
    why: 'The homework belongs to the person you are speaking to. Your shows that something belongs to you: your homework.',
    not: {
      "you're":
        "You're is short for 'you are', as in 'You're tall.' 'Finished you are homework' does not make sense.",
    },
    more: "Your shows belonging, as in your bag or your name. You're is two words joined, you are, so it always has an apostrophe.",
  },
  '___ doing really well in this lesson.': {
    why: "The sentence needs 'you are': 'You are doing really well.' You're is the short form, so it takes an apostrophe.",
    not: {
      Your: "Your shows that something belongs to you, as in 'Your work is good.' Nothing is owned here: the sentence means 'you are doing well'.",
    },
    tip: "Say the gap as 'you are'. If it fits, write you're. If it shows ownership, write your.",
  },
  'Please bring ___ pencil case tomorrow.': {
    why: 'The pencil case belongs to the person you are speaking to. Your shows belonging: your pencil case.',
    not: {
      "you're":
        "You're means 'you are', as in 'You're ready.' 'Bring you are pencil case' does not make sense.",
    },
  },
  'I think ___ going to enjoy this story.': {
    why: "Put 'you are' in the gap: 'I think you are going to enjoy this story.' That works, so you need the short form you're.",
    not: {
      your: "Your shows belonging, as in 'your book'. Nothing is owned here: the sentence means 'you are going to enjoy'.",
    },
  },
  'Is this ___ jacket on the chair?': {
    why: 'The question asks whether the jacket belongs to the person you are speaking to. Your shows belonging: your jacket.',
    not: {
      "you're":
        "You're means 'you are', as in 'You're cold.' 'Is this you are jacket?' does not make sense.",
    },
  },
  'We are going ___ the library after lunch.': {
    why: 'The word shows direction towards a place: going to the library. To shows direction.',
    not: {
      too: "Too means 'also' or 'more than enough', as in 'I am too tired.' It does not show direction.",
      two: "Two is the number 2, as in 'two books'. It does not show direction.",
    },
    more: 'To has two main jobs. It shows direction (to the library) and it comes before a verb (to read, to write).',
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
    tip: 'If the words after the gap say where someone goes, write to.',
  },
  'There are ___ weeks left until the holidays.': {
    why: 'The gap is a number: there are 2 weeks left. Two is the word for the number 2.',
    not: {
      to: "To shows direction or comes before a verb, as in 'to school'. It is not a number.",
      too: "Too means 'also' or 'more than enough', as in 'It is too late.' It is not a number.",
    },
  },
  'The dog wagged ___ tail happily.': {
    why: 'The tail belongs to the dog. Its, with no apostrophe, shows that something belongs to it: its tail.',
    not: {
      "it's":
        "It's is short for 'it is' or 'it has', as in 'It's a big dog.' 'The dog wagged it is tail' does not make sense.",
    },
    more: "Nouns take an apostrophe to show belonging, as in the dog's tail, but its never does. Its works like his and her.",
  },
  '___ raining heavily this morning.': {
    why: "The sentence needs 'it is': 'It is raining heavily.' It's is the short form, so it takes an apostrophe.",
    not: {
      Its: "Its shows that something belongs to it, as in 'The bird built its nest.' Nothing is owned here: the sentence means 'it is raining'.",
    },
    tip: "Say the gap as 'it is'. If it fits, write it's. If it shows belonging, write its.",
  },
  'The school is proud of ___ exam results.': {
    why: 'The exam results belong to the school. Its shows belonging: its exam results. Its, like his or her, never takes an apostrophe.',
    not: {
      "it's":
        "It's means 'it is' or 'it has', as in 'It's a good school.' 'Proud of it is exam results' does not make sense.",
    },
  },
  'I think ___ time to start the test.': {
    why: "Put 'it is' in the gap: 'I think it is time to start the test.' That works, so you need the short form it's.",
    not: {
      its: "Its shows belonging, as in 'The test has its rules.' Nothing is owned here: the sentence means 'it is time'.",
    },
  },
  'The phone lost ___ signal in the tunnel.': {
    why: 'The signal belongs to the phone. Its shows belonging: its signal. Its, like his or her, never takes an apostrophe.',
    not: {
      "it's":
        "It's means 'it is' or 'it has', as in 'It's a new phone.' 'The phone lost it is signal' does not make sense.",
    },
  },
  '___ did you put my calculator?': {
    why: 'The sentence asks about a place: in what place did you put it? Where is the word for asking about places.',
    not: {
      Wear: "Wear means to have clothes on, as in 'I wear a coat.' It does not ask about a place.",
    },
    more: "Where and there both have the word 'here' inside them. All three words are about places.",
  },
  'You must ___ a tie with the school uniform.': {
    why: 'A tie is an item of clothing. Wear means to have clothes on your body: wear a tie.',
    not: {
      where:
        "Where asks about a place, as in 'Where is the hall?' It cannot mean to have clothes on.",
    },
  },
  'This is the room ___ we sit our exams.': {
    why: "The gap joins 'the room' to what happens in it: we sit our exams there. Where links a place to what happens in it.",
    not: {
      wear: "Wear means to have clothes on, as in 'I wear a hat.' It does not name a place.",
    },
  },
  'What will you ___ to the school disco?': {
    why: 'The question is about clothes: what will you put on for the disco? Wear means to have clothes on your body.',
    not: {
      where:
        "Where asks about a place, as in 'Where is the gym?' This question is about clothes, not a place.",
    },
  },
  'Please come and sit ___ next to me.': {
    why: "The sentence means 'in this place, next to me'. Here means in this place.",
    not: {
      hear: "Hear means to notice sounds with your ears, as in 'I can hear music.' It does not name a place.",
    },
    more: 'Here is the opposite of there, and both words are about places.',
  },
  'Can you ___ the bell from the playground?': {
    why: 'The sentence is about sound. Hear means to notice sounds with your ears, and a bell makes a sound.',
    not: {
      here: "Here means in this place, as in 'The bus stops here.' It does not mean to notice a sound.",
    },
    more: "Hear has the word 'ear' inside it. You hear with your ears.",
  },
  'I cannot ___ the teacher from the back row.': {
    why: "The sentence is about not being able to notice the teacher's voice. Hear means to notice sounds with your ears.",
    not: {
      here: "Here means in this place, as in 'Wait here.' It does not mean to notice a sound.",
    },
  },
  'Leave your homework ___ on my desk.': {
    why: "The sentence means 'in this place, on my desk'. Here means in this place.",
    not: {
      hear: "Hear means to notice sounds with your ears, as in 'I can hear a bird.' It does not name a place.",
    },
    tip: 'Remove the t from there and you have here. Both words are about places.',
  },
  'The ___ was cold and rainy all weekend.': {
    why: 'The sentence is about cold and rain, which is weather. Weather means the sun, rain, wind and temperature outside.',
    not: {
      whether:
        "Whether brings in two possibilities, as in 'Let me know whether you can come.' It does not describe cold and rain.",
    },
  },
  'I am not sure ___ to bring an umbrella.': {
    why: 'The sentence is about two possibilities: bring an umbrella or not. Whether introduces them.',
    not: {
      weather:
        "Weather means the sun, rain and wind, as in 'the weather forecast'. Here the sentence is about two possibilities, not the sky.",
    },
    more: "Whether often goes with 'or' or 'or not'. Try adding 'or not' after the gap: 'whether or not to bring an umbrella' still makes sense.",
  },
  'Ask the teacher ___ the trip is still on.': {
    why: 'The sentence is about two possibilities: the trip is still on, or it is not. Whether introduces them.',
    not: {
      weather:
        "Weather means the sun, rain and wind, as in 'Check the weather.' It is not a word for a choice.",
    },
  },
  'Bad ___ delayed the start of the match.': {
    why: 'The sentence names something that can be bad and can delay a match, such as rain, wind or fog. Weather is the word for conditions outside.',
    not: {
      whether:
        "Whether brings in two possibilities, as in 'I will see whether the shop is open.' It cannot mean rain, wind or fog.",
    },
  },
  'Did the school ___ your late application?': {
    why: 'The sentence asks whether the school said yes to the application. Accept means to take or agree to something.',
    not: {
      except:
        "Except means 'not including', as in 'We ate all the fruit except the apples.' It does not mean to say yes to something.",
    },
    more: "Accept is a verb: you accept a gift, an invitation or an apology. Except usually means 'but not'.",
  },
  'Everyone passed the test ___ one student.': {
    why: "The sentence leaves out one student. Except means 'not including'.",
    not: {
      accept:
        "Accept means to take or agree to something, as in 'She will accept the prize.' It does not mean 'not including'.",
    },
    tip: 'Except has an x. Picture an x crossing out the student who is left out.',
  },
  'I will gladly ___ your kind offer of help.': {
    why: 'You say yes to an offer of help. Accept means to take or agree to something that is offered.',
    not: {
      except:
        "Except means 'not including', as in 'I like all fruit except bananas.' It does not mean to take an offer.",
    },
  },
  'The shop is open every day ___ Sunday.': {
    why: "Sunday is the one day when the shop is not open. Except means 'not including': every day except Sunday.",
    not: {
      accept:
        "Accept means to take or agree to something, as in 'Please accept my apology.' It does not mean 'not including'.",
    },
  },
  'Loud noise can ___ your concentration.': {
    why: 'The sentence needs a verb that means to change or influence: noise can change your concentration. Affect is that verb.',
    not: {
      effect:
        "Effect is usually a noun meaning a result, as in 'the effect of the medicine'. As a verb it means to make happen, so it does not fit here.",
    },
    more: 'A trick: affect is the action word, and effect is the end result. A is for action; E is for end.',
  },
  'The new rules had a positive ___ on behaviour.': {
    why: "After 'a positive', the sentence needs a noun that means a result. Effect is the noun: a positive effect.",
    not: {
      affect:
        "Affect is usually a verb meaning to change something, as in 'The storm affected our journey.' Here you need a noun, a thing.",
    },
    more: "You can put 'an' or 'the' before effect: an effect, the effect. That shows it is a noun.",
  },
  'How did the news ___ the rest of the class?': {
    why: 'The sentence needs an action word that means to influence: how did the news influence the rest of the class? Affect is that verb.',
    not: {
      effect:
        "Effect is usually a noun meaning a result, as in 'a big effect'. As a verb it means to make happen, so it does not fit here.",
    },
  },
  'Revising every night had a great ___ on her marks.': {
    why: "After 'a great', the sentence needs a noun that means a result. Effect is the noun: a great effect on her marks.",
    not: {
      affect:
        "Affect is usually a verb meaning to change something, as in 'Rain affected the crops.' Here you need a noun, a thing.",
    },
    tip: "Use both in one sentence to remember them: 'The storm affected the match, and the effect was a long delay.'",
  },
  'Football ___ is on Thursday after school.': {
    why: 'Football practice is a thing, a training session, so the word is a noun. In British English, the noun is spelt with a c: practice.',
    not: {
      practise:
        "Practise, with an s, is the verb, as in 'I practise on Fridays.' Here the word names a thing, so it is a noun.",
    },
    more: 'Think of advice and advise. The noun has a c (advice) and the verb has an s (advise). Practice and practise work the same way.',
  },
  'You should ___ the piano every day.': {
    why: "After 'should', the sentence needs a verb: you should do something. In British English, the verb is spelt with an s: practise.",
    not: {
      practice:
        "Practice, with a c, is the noun, as in 'The practice went well.' Here the word is an action, so it is a verb.",
    },
    tip: "Try swapping in another verb such as 'play'. 'You should play the piano' works, so the gap is a verb, and the spelling is practise.",
  },
  'It takes a lot of ___ to learn a new language.': {
    why: "After 'a lot of', the sentence needs a noun: a lot of practice. In British English, the noun is spelt with a c.",
    not: {
      practise:
        "Practise, with an s, is the verb, as in 'Pupils practise their handwriting.' Here the word follows 'a lot of', so it is a noun.",
    },
  },
  'We need to ___ our lines before the school play.': {
    why: "After 'need to', the sentence needs a verb: we need to do something. In British English, the verb is spelt with an s: practise.",
    not: {
      practice:
        "Practice, with a c, is the noun, as in 'Daily practice helps.' Here the word is an action, so it is a verb.",
    },
  },
  'Finish your work, ___ you may go to break.': {
    why: 'The sentence puts events in order: first finish the work, next go to break. Then shows what comes next.',
    not: {
      than: "Than is used to compare, as in 'The lake is deeper than the pool.' It does not show order or time.",
    },
    more: 'Then and than differ by only one letter. Then is about time and order, and than is for comparing.',
    tip: 'A trick: than has an a, like comparison. Then has an e, like next.',
  },
  'Maths is harder ___ I expected.': {
    why: 'The sentence compares two things: how hard maths is and how hard I expected it to be. Than is the word for comparing.',
    not: {
      then: "Then shows time or order, as in 'Stir the sauce, and then add the salt.' It does not compare.",
    },
  },
  'She is taller ___ her older brother.': {
    why: "'Taller' compares two people, so the sentence needs than. Than comes after comparing words such as taller, faster or better.",
    not: {
      then: "Then shows time or order, as in 'First stir and then pour.' It does not compare.",
    },
    more: 'Than often follows a word that ends in -er, such as taller, and the words more and less: more than, less than.',
  },
  'We had lunch and ___ went back to class.': {
    why: 'The sentence shows what happened next: lunch, and after that, class. Then shows what comes next.',
    not: {
      than: "Than is used to compare, as in 'faster than me'. It does not show what happened next.",
    },
  },
  'Please switch ___ the lights when you leave.': {
    why: "The sentence needs the opposite of 'on': switch off the lights. Off means not on, or away from.",
    not: {
      of: "Of links one thing to another, as in 'a piece of cake'. It is not the opposite of 'on'.",
    },
    more: 'Say them aloud. Off ends with an f sound, but of ends with a v sound.',
  },
  'She read the first chapter ___ the novel.': {
    why: 'The chapter is a part of the novel. Of links a part to the whole thing: the first chapter of the novel.',
    not: {
      off: "Off means not on, or away from, as in 'The bus drove off.' It does not link a part to a whole.",
    },
    more: 'Of is one of the most common words in English. It links things in phrases such as the top of the hill, the name of the song and the end of the day.',
  },
  'Take your muddy boots ___ before you come in.': {
    why: "The sentence means to remove your boots. 'Take off' means to remove, so the missing word is off.",
    not: {
      of: "Of links one thing to another, as in 'one of my friends'. It does not fit after 'take' to mean remove.",
    },
  },
  'A glass ___ water is on the table.': {
    why: "The phrase 'a glass of water' names what the glass holds. Of shows what something contains.",
    not: {
      off: "Off means not on, or away from, as in 'He jumped off the wall.' It does not show what a glass contains.",
    },
  },
  'Be careful not to ___ your bus pass.': {
    why: 'The sentence means do not let your pass go missing: do not lose it. Lose means to no longer have something. It has one o.',
    not: {
      loose:
        "Loose is usually a describing word meaning not tight, as in 'a loose tooth'. As a verb it means to let go, so it does not fit here.",
    },
    more: 'Lose ends with a z sound, but loose ends with an s sound. A common mistake is to write loose when you mean lose.',
  },
  'This screw is too ___ and needs tightening.': {
    why: 'The screw needs tightening, so it is not tight. Loose means not tight or not firmly fixed. It has two o letters.',
    not: {
      lose: "Lose means to no longer have something, as in 'I hope I do not lose my place.' It is a verb, and the sentence needs a describing word.",
    },
  },
  'If we ___ this match, we are out of the cup.': {
    why: 'The sentence is about not winning: if we do not win, we are out. Lose is the opposite of win.',
    not: {
      loose:
        "Loose means not tight or not fixed, as in 'a loose button'. It does not mean the opposite of win.",
    },
  },
  'The dog got out through a ___ fence panel.': {
    why: 'A fence panel that is not fixed firmly lets a dog out. Loose means not held firmly in place.',
    not: {
      lose: "Lose means to no longer have something, as in 'I always lose my pencil.' It is a verb, and here a describing word is needed.",
    },
  },
  'The cyclist hit the ___ to stop quickly.': {
    why: 'The cyclist wants to stop, and the brake is the part of a bike that slows it down. Brake is a noun here.',
    not: {
      break:
        "Break means a rest, or to snap something, as in 'The plate may break.' It is not the part that stops a bike.",
    },
    more: "Brake can also be a verb meaning to slow down: 'Brake early at a red light.' It is spelt the same either way.",
  },
  'We get a short ___ between lessons.': {
    why: 'A short rest between lessons is a break. Break is the noun for a pause or rest.',
    not: {
      brake:
        "Brake is the part that stops a vehicle, as in 'the handbrake'. It does not mean a rest.",
    },
    more: 'Break has more than one meaning: a rest (a lunch break), to snap (break a plate) and to stop working (the machine will break). It is spelt the same each time.',
  },
  'Try not to ___ the ruler when you bend it.': {
    why: 'A ruler can snap if it is bent too far. Break is the verb that means to snap or damage something.',
    not: {
      brake:
        "Brake is the part that stops a vehicle, or a verb meaning to slow down, as in 'brake gently'. It does not mean to snap something.",
    },
    more: 'Break is an irregular verb: break, broke, broken.',
  },
  'The car would not slow down because the ___ failed.': {
    why: 'The car could not slow down because the part that stops it failed. The brake is that part.',
    not: {
      break:
        "Break means a rest, or to snap something, as in 'Glass can break easily.' It is not the part that slows a car.",
    },
  },
}
