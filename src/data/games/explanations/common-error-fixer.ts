import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Fix the Common Mistake: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/common-error-fixer.ts). Written with AI on 16
 * October 2026 and checked against each question and its options, as the founder
 * decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: the four options are now four
 * corrections (the faulty sentence is never offered), every earlier question's
 * "why not" entries were rewritten for its new options, one question was
 * replaced (see the bank's docblock), and 187 more were added: tier 1 (A1)
 * first rules, tier 2 (A2) tenses, patterns and near neighbours, and tier 3
 * (B1) sentences and short texts with two mistakes, thirteen of them real lines
 * from books out of UK copyright. Written with AI and checked against each
 * question, as the founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 31 October 2026: ten explanations rewritten,
 * four for questions whose options changed (see the bank's docblock) and six
 * where a rule was stated too widely or showed another question's answer
 * ("only when the stress is at the end", which British "travelled" breaks;
 * "after 'is' use the third form", which "is raining" breaks; "never" with the
 * present simple, which "have never eaten" breaks; "two loaves of bread", the
 * answer to a real line from Great Expectations; "tell someone to"; "enjoy
 * never stands alone").
 */
export const EXPLANATIONS: GameExplanations = {
  'I am student at this college.': {
    why: "The mistake is the missing article. 'Student' is a singular noun that you can count, so it needs 'a' before it. 'I am a student' says you are one student among many.",
    not: {
      'I am an student at this college.':
        "'An' goes before a vowel sound. 'Student' starts with the sound 's', so it takes 'a', not 'an'.",
      'I am student at the college.':
        "This changes 'this' to 'the' but leaves the real mistake: there is still no article before 'student'.",
      'I am an student at the college.':
        "'An' is wrong before the consonant sound at the start of 'student'. The change to 'the college' does not mend that.",
    },
    more: "We need an article before a singular noun that we can count: 'a nurse', 'an actor', 'a pilot'. Some languages, such as Arabic, have no word for 'a' or 'an', so learners often leave it out.",
    tip: "When you write a job or a role, check for 'a' or 'an': 'I am a nurse.' 'She is an actor.'",
  },
  'He bought a umbrella yesterday.': {
    why: "The mistake is 'a' before 'umbrella'. We use 'an' before a vowel sound, and 'umbrella' starts with the vowel sound 'uh'. So we say 'an umbrella'.",
    not: {
      'He bought an umbrellas yesterday.':
        "'An' is right before 'umbrella', but it goes with one thing. 'Umbrellas' is plural, so 'an umbrellas' is wrong.",
      'He buyed an umbrella yesterday.':
        "'An umbrella' is now right, but 'buyed' is not a word. The past of 'buy' is irregular, and the sentence had it right.",
      'He buyed an umbrellas yesterday.':
        "This makes two new mistakes: 'buyed' is not a word, and 'an' cannot go with the plural 'umbrellas'.",
    },
    more: "The sound matters, not the letter. We say 'an hour' because the h is silent, but 'a university' because it starts with the sound 'y'.",
    tip: "Say the word aloud. If it starts with a vowel sound, use 'an': 'an apple', 'an egg', 'an umbrella'.",
  },
  'She plays the football on Sundays.': {
    why: "The mistake is 'the' before 'football'. We use no article with the name of a sport or game: 'play football', 'play tennis', 'play chess'. So we say 'She plays football on Sundays'.",
    not: {
      'She plays a football on Sundays.':
        "'A football' means one ball, not the game. To name the sport, use no article.",
      'She play football on Sundays.':
        "'Play football' is now right, but 'she' needs the -s form of the verb: 'she plays'.",
      'She play a football on Sundays.':
        "'A football' is a ball, not the game, and 'she' needs 'plays' with an -s.",
    },
    more: "Musical instruments are different: we say 'She plays the piano'. But sports take no article: 'He plays basketball.'",
    tip: "Learn the pairs: 'play football', 'play the guitar'.",
  },
  'He is engineer from Egypt.': {
    why: "The mistake is the missing article. A job is a singular noun that we can count, so it needs 'a' or 'an'. 'Engineer' starts with a vowel sound, so we say 'an engineer'.",
    not: {
      'He is a engineer from Egypt.':
        "'A' is used before a consonant sound. 'Engineer' starts with the vowel sound 'e', so we say 'an engineer'.",
      'He is an engineer from the Egypt.':
        "'An engineer' is right, but we do not use 'the' before the name of a country like Egypt.",
      'He is a engineer from the Egypt.':
        "'Engineer' starts with a vowel sound, so it takes 'an', and a country name like Egypt takes no 'the'.",
    },
    more: "Most country names take no article: 'from Egypt', 'in France'. A few do: 'the United Kingdom', 'the United States', 'the Netherlands'.",
    tip: "After 'He is' or 'She is', say the job with 'a' or 'an': 'a nurse', 'an electrician'.",
  },
  'She very tired today.': {
    why: "The mistake is the missing verb. English needs 'is', a form of 'be', in a sentence like this. 'She is very tired today' joins the subject 'she' to the adjective 'tired'.",
    not: {
      'She are very tired today.': "'Are' goes with you, we and they. With 'she' we use 'is'.",
      'She is very much tired today.':
        "'Is' is now right, but before an adjective like 'tired' we use 'very', not 'very much'.",
      'She are very much tired today.':
        "'She' takes 'is', not 'are', and an adjective like 'tired' takes 'very', not 'very much'.",
    },
    more: "Some languages, such as Arabic, leave out 'is', 'am' and 'are' in present sentences. In English you must always include one: 'He is tall', 'They are late'.",
    tip: "After you write a sentence, find the verb. If you cannot find one, add 'am', 'is' or 'are'.",
  },
  'They happy with the result.': {
    why: "The mistake is the missing verb. 'They' needs 'are' before the adjective 'happy'. So we say 'They are happy with the result'.",
    not: {
      'They is happy with the result.': "'Is' goes with he, she and it. With 'they' we use 'are'.",
      'Them are happy with the result.':
        "'Are' is now right, but 'them' is not used as a subject. Before the verb we need 'they'.",
      'Them is happy with the result.':
        "The subject must be 'they', not 'them', and 'they' takes 'are', not 'is'.",
    },
    more: "'They' always takes 'are' in the present, and in questions the verb comes first: 'Are they ready?'",
    tip: "Learn the short forms too: 'they’re', 'we’re', 'I’m'. You will see and hear them all the time.",
  },
  'I a teacher at this school.': {
    why: "The mistake is the missing verb. With 'I', the verb 'be' is 'am'. So the correct sentence is 'I am a teacher at this school'.",
    not: {
      'I are a teacher at this school.':
        "'Are' goes with you, we and they. With 'I' we always use 'am'.",
      'I am teacher at this school.':
        "'Am' is now right, but a job needs 'a' or 'an' before it: 'a teacher'.",
      'I are teacher at this school.': "'I' takes 'am', not 'are', and a job needs 'a' before it.",
    },
    more: "'Am' is used only with 'I'. Compare 'I am a teacher' and 'She is a teacher'.",
    tip: "On a form or when you introduce yourself, say 'I am' plus your job or your name: 'I am a teacher.'",
  },
  'The weather very hot in summer.': {
    why: "The mistake is the missing verb. 'Weather' is a singular, uncountable noun, so the verb is 'is'. We say 'The weather is very hot in summer'.",
    not: {
      'The weather are very hot in summer.':
        "'Are' is for plural subjects. 'Weather' is singular, so use 'is'.",
      'The weather is very hot on summer.': "'Is' is right, but seasons take 'in', not 'on'.",
      'The weather are very hot on summer.':
        "'Weather' is singular and takes 'is', and seasons take 'in', not 'on'.",
    },
    more: "'Weather' is uncountable: we say 'the weather is', never 'the weathers are'. The same is true of 'luggage' and 'money'.",
    tip: "Before you choose 'is' or 'are', ask: is the subject one thing or more than one? 'The weather' is one thing.",
  },
  'He not ready for the exam.': {
    why: "The mistake is the missing verb 'be'. To make a negative with 'be', put 'not' after 'is'. So the correct sentence is 'He is not ready for the exam'.",
    not: {
      'He are not ready for the exam.':
        "'Are' goes with you, we and they. With 'he' we use 'is not'.",
      'He is not ready for exam.':
        "'Is not' is now right, but 'exam' is a singular noun we can count, so it needs 'the' or 'an'.",
      'He are not ready for exam.':
        "'He' takes 'is', not 'are', and the singular noun 'exam' needs an article.",
    },
    more: "The short forms are 'He isn’t ready' and 'He’s not ready'. Both are correct in everyday speech and writing.",
    tip: "To make a negative with 'be', never remove the verb. Add 'not' after it: 'I am not', 'she is not', 'they are not'.",
  },
  'My parents at home now.': {
    why: "The mistake is the missing verb. 'Parents' is plural, so the verb is 'are'. We say 'My parents are at home now'.",
    not: {
      'My parents is at home now.':
        "'Is' goes with one person or thing. 'Parents' means two or more people, so use 'are'.",
      'My parents are in home now.':
        "'Are' is right, but the place where you live takes 'at home', not 'in home'.",
      'My parents is in home now.':
        "'Parents' is plural and takes 'are', and we say 'at home', not 'in home'.",
    },
    more: "Look at the end of the subject. Words that end in -s are usually plural and take 'are': 'my friends are', 'the books are'.",
    tip: "Match the verb to the number of people. 'My mother is at home' uses 'is'. 'My parents are at home' uses 'are'.",
  },
  'He go to the gym every morning.': {
    why: "The mistake is the verb 'go' after 'He'. In the present simple, a verb after he, she or it takes -s or -es. 'Go' becomes 'goes', so we say 'He goes to the gym every morning'.",
    not: {
      'He gos to the gym every morning.': "'Go' ends in -o, so it adds -es, not -s.",
      'He goes to gym every morning.':
        "The verb is now right, but we say 'go to the gym', with 'the'.",
      'He gos to gym every morning.':
        "A verb ending in -o adds -es, not -s, and 'gym' needs 'the' here.",
    },
    more: "Verbs ending in -o, -s, -sh, -ch or -x add -es: 'does', 'fixes', 'washes'. Other verbs add -s: 'reads', 'plays'.",
    tip: "A time phrase like 'every morning' or 'always' shows a habit. Use the present simple, and remember the -s for he, she and it.",
  },
  'My sister live in London.': {
    why: "The mistake is the verb 'live'. 'My sister' means 'she', one person, so the present simple verb needs -s. We say 'My sister lives in London'.",
    not: {
      'My sister is live in London.':
        "'Is' does not go before the base verb 'live'. The present simple is 'My sister lives'.",
      'My sister lives at London.': "'Lives' is now right, but a city takes 'in', not 'at'.",
      'My sister is live at London.':
        "'Is' does not go before the base verb, and a city takes 'in', not 'at'.",
    },
    more: "Where someone lives is a fact, so we use the present simple. We use 'is living' for a short time: 'She is living in London for a few months.'",
    tip: 'Ask yourself: is the subject one person or thing? If it is, the present simple verb ends in -s.',
  },
  'The students works very hard.': {
    why: "The mistake is 'works' after 'the students'. 'Students' is plural, so the present simple verb has no -s. We say 'The students work very hard'.",
    not: {
      'The students are work very hard.':
        "'Are' does not go before the base verb 'work'. A plural subject takes the plain verb with no -s.",
      'The students work very hardly.':
        "The verb is now right, but 'hardly' means 'almost not'. To say they try a lot, use 'hard'.",
      'The students are work very hardly.':
        "'Are' does not go before the base verb, and 'hardly' means 'almost not', the opposite of what is meant.",
    },
    more: "With regular words, the -s goes on the noun or the verb, not both: 'The student reads' and 'The students read'.",
    tip: 'If the subject noun has a plural -s, leave the -s off the verb. If the subject is singular, put the -s on the verb.',
  },
  'She have two brothers.': {
    why: "The mistake is 'have' after 'She'. With he, she and it, the verb 'have' changes to 'has'. So we say 'She has two brothers'.",
    not: {
      'She haves two brothers.':
        "'Haves' is not a form of the verb. The verb 'have' is irregular: its form for he, she and it is 'has'.",
      'She has two brother.': "'Has' is now right, but 'two' needs a plural noun: 'brothers'.",
      'She haves two brother.': "'Haves' is not a word, and after 'two' the noun must be plural.",
    },
    more: "'Have' is irregular, so it does not follow the normal -s rule. Another irregular verb is 'do': 'I do, she does'.",
    tip: "Say 'she has', 'he has' and 'it has' together as one set. It helps you remember.",
  },
  'My friend do not like coffee.': {
    why: "The mistake is 'do not' after 'my friend'. For one person (he, she, it) the helper verb is 'does'. We say 'My friend does not like coffee', and 'like' keeps its base form.",
    not: {
      'My friend does not likes coffee.':
        "'Does' is right, but the -s is already on 'does'. The main verb stays in its base form: 'like'.",
      'My friends does not like coffee.':
        "'Friends' is plural, and a plural subject takes 'do not', not 'does not'.",
      'My friends does not likes coffee.':
        "'Friends' is plural and takes 'do not', and after 'does' the verb has no -s.",
    },
    more: "The short form is 'doesn’t': 'My friend doesn’t like coffee.' The -s is in 'does', so 'like' has no -s.",
    tip: "In negatives, only the helper verb changes. Write 'does not like', never 'does not likes'.",
  },
  'I will see you in Monday.': {
    why: "The mistake is 'in' before 'Monday'. We use 'on' before days of the week. So we say 'I will see you on Monday'.",
    not: {
      'I will see you at Monday.':
        "We use 'at' for clock times and some fixed phrases, such as 'at noon'. For days, we use 'on'.",
      'I will to see you on Monday.':
        "'On Monday' is now right, but 'will' is followed by the base verb without 'to': 'will see'.",
      'I will to see you at Monday.':
        "'Will' takes the base verb without 'to', and a day takes 'on', not 'at'.",
    },
    more: "Days take 'on': 'on Friday', 'on my birthday', 'on Tuesday morning'.",
    tip: "Say the day with 'on' every time, even with a part of the day: 'on Friday evening'.",
  },
  'We arrived in 9 o’clock.': {
    why: "The mistake is 'in' before a clock time. We use 'at' for exact times. So we say 'We arrived at 9 o’clock'.",
    not: {
      'We arrived on 9 o’clock.': "'On' is for days and dates. Clock times take 'at'.",
      'We arrived at 9 hours.':
        "'At' is now right, but English does not say '9 hours' for a time. Say '9 o’clock' or 'nine'.",
      'We arrived on 9 hours.':
        "A clock time takes 'at', and English says '9 o’clock', not '9 hours'.",
    },
    more: "Use 'at' for clock times: 'at ten past four', 'at noon', 'at midnight'.",
    tip: "Test it: can you read the time on a clock? Then use 'at'.",
  },
  'I was born in 15 May.': {
    why: "The mistake is 'in' before a date. We use 'on' with a particular day or date. So the correct sentence is 'I was born on 15 May'.",
    not: {
      'I was born at 15 May.': "'At' is for clock times. A date takes 'on'.",
      'I born on 15 May.':
        "'On 15 May' is now right, but 'born' needs 'was': 'I was born'. It is a fixed past form.",
      'I born at 15 May.': "'Born' needs 'was' before it, and a date takes 'on', not 'at'.",
    },
    more: "A date takes 'on', even with the year: 'on 3 March 2012'.",
    tip: "In forms and exams, write the date after 'on': 'on 12 June'. Use 'in' only for a month or a year on its own.",
  },
  'I have a car red.': {
    why: "The mistake is the position of the adjective. In English an adjective comes before the noun it describes. So we say 'a red car', not 'a car red'.",
    not: {
      'I have red a car.':
        "The adjective must come after 'a', not before it. The order is: 'a', then the adjective, then the noun.",
      'I have a red cars.':
        "The order is now right, but 'a' goes with one thing. 'Cars' is plural.",
      'I have red a cars.':
        "'A' must come first, before the adjective, and 'a' cannot go with the plural 'cars'.",
    },
    more: "In some languages, such as Arabic and French, adjectives usually follow the noun. In English they usually come before it: 'a big house', 'an old man'.",
    tip: "Build a noun phrase in this order: a or the, then the adjective, then the noun. For example: 'a new red car'.",
  },
  'Where you are going now?': {
    why: "The mistake is the word order in a question. After a question word, the verb 'be' goes before the subject. So we say 'Where are you going now?', not 'Where you are going now?'",
    not: {
      'Where do you going now?':
        "'Do' does not go with an -ing verb. The present continuous uses 'are' before the subject.",
      'Where you are going tonight?':
        "This changes 'now' to 'tonight' but keeps the real mistake: 'you are' is still in the order of a statement.",
      'Where do you going tonight?':
        "'Do' does not go with an -ing verb. The question needs 'are' before 'you'.",
    },
    more: "In a question, put the helper verb before the subject: 'What are you reading?', 'Why is she laughing?'",
    tip: "Start from a statement. 'You are going to the shop' becomes 'Where are you going?' The words 'are' and 'you' swap places.",
  },
  'My mother is a doctor. He works in a hospital.': {
    why: "The mistake is the pronoun 'He'. 'My mother' is a woman, so the next sentence must use 'she'. So we say 'My mother is a doctor. She works in a hospital.'",
    not: {
      'My mother is a doctor. It works in a hospital.':
        "'It' is for things and animals. A person, such as your mother, is 'he' or 'she'.",
      'My mother is a doctor. She work in a hospital.':
        "'She' is right, but it needs the -s form of the verb.",
      'My mother is a doctor. It work in a hospital.':
        "'It' is not used for a person, and the verb after it would need an -s.",
    },
    more: "Match the pronoun to the person: 'he' for a man or boy, 'she' for a woman or girl. Words like 'mother', 'sister', 'aunt' and 'daughter' are female.",
    tip: "Before you write 'he' or 'she', look back at the noun it replaces. Is that person a man or a woman?",
  },
  'My brother is kind. She helps everyone.': {
    why: "The mistake is the pronoun 'She'. 'My brother' is a boy or a man, so the next sentence must use 'he'. So we say 'My brother is kind. He helps everyone.'",
    not: {
      'My brother is kind. Him helps everyone.':
        "'Him' is not used as a subject. Before the verb we need 'he'.",
      'My brother is kind. He help everyone.':
        "'He' is right, but it needs the -s form: 'he helps'.",
      'My brother is kind. Him help everyone.':
        "'Him' is not a subject, and the verb after 'he' needs an -s.",
    },
    more: "Male family words take 'he': 'father', 'son', 'grandson'. Female ones take 'she': 'mother', 'daughter', 'niece'.",
    tip: 'Say the two sentences aloud together. If the pronoun sounds wrong for the person, check the family word.',
  },
  'This is my friend Sara. He is from Jordan.': {
    why: "The mistake is the pronoun 'He'. Sara is a girl’s name, so we use 'she'. So we say 'This is my friend Sara. She is from Jordan.'",
    not: {
      'This is my friend Sara. Her is from Jordan.':
        "'Her' is not used as a subject. Before 'is' we need 'she'.",
      'This is my friend Sara. She are from Jordan.':
        "'She' is right, but it takes 'is', not 'are'.",
      'This is my friend Sara. Her are from Jordan.':
        "The subject must be 'she', not 'her', and 'she' takes 'is'.",
    },
    more: "Names usually tell you whether to use 'he' or 'she'. If you are not sure, ask the person or use their name again.",
    tip: "In a short text about a person, give the name first. Then use 'he' or 'she' for the next sentences.",
  },
  'I have a son. She is six years old.': {
    why: "The mistake is the pronoun 'She'. A son is a boy, so we use 'he'. So we say 'I have a son. He is six years old.'",
    not: {
      'I have a son. Him is six years old.':
        "'Him' is not used as a subject. Before 'is' we need 'he'.",
      'I have a son. He has six years old.':
        "'He' is right, but in English an age takes 'is', not 'has'.",
      'I have a son. Him has six years old.':
        "The subject must be 'he', and an age takes 'is', not 'has'.",
    },
    more: "To give an age, we use 'is' and the number: 'He is six years old' or just 'He is six'. We do not use 'has'.",
    tip: "Use 'he' for a son, a brother, a father and any boy or man. Use 'she' for a daughter, a sister, a mother and any girl or woman.",
  },
  'My sister is ten. His name is Hana.': {
    why: "The mistake is 'His'. The name belongs to my sister, a girl, so the word before 'name' must be 'her'. 'His' is for something that belongs to a man or a boy.",
    not: {
      'My sister is ten. Hers name is Hana.':
        "'Hers' stands alone, without a noun after it: 'The bag is hers.' Before a noun like 'name', use 'her'.",
      'My sister is ten. Her name are Hana.':
        "'Her' is now right, but 'name' is singular, so the verb is 'is', not 'are'.",
      'My sister is ten. Hers name are Hana.':
        "Before a noun we need 'her', not 'hers', and one name takes 'is'.",
    },
    more: "The word before the noun matches the owner: 'his coat' for a man or boy, 'her coat' for a woman or girl, 'its tail' for an animal or thing.",
    tip: "Look back at the person the sentence is about. A girl or a woman owns 'her' things; a boy or a man owns 'his'.",
  },
  'I have three brother.': {
    why: "The mistake is the singular noun after 'three'. After a number above one, the noun must be plural. So we add -s and say 'I have three brothers'.",
    not: {
      'I have three brother’s.':
        "An apostrophe does not make a plural. 'Brother’s' shows that something belongs to one brother.",
      'I has three brothers.': "'Brothers' is now right, but 'I' takes 'have', not 'has'.",
      'I has three brother’s.': "'I' takes 'have', and an apostrophe does not make a plural.",
    },
    more: "Nouns that end in -s, -x, -z, -ch or -sh add -es: 'bus, buses', 'dish, dishes'. Most other nouns just add -s.",
    tip: "Do not add an apostrophe to make a plural. 'Brothers' is a plural, and 'brother’s' shows that something belongs to one brother.",
  },
  'There are many car in the street.': {
    why: "The mistake is 'car' after 'many'. 'Many' is used with plural nouns, so the noun needs -s. We say 'There are many cars in the street'.",
    not: {
      'There are many car’s in the street.':
        "An apostrophe does not make a plural. 'Car’s' shows that something belongs to one car. The plural just adds -s: 'cars'.",
      'There is many cars in the street.':
        "'Cars' is now right, but a plural noun needs 'there are', not 'there is'.",
      'There is many car’s in the street.':
        "A plural noun needs 'there are', and an apostrophe does not make a plural: 'cars'.",
    },
    more: "These words need a plural noun: 'many', 'few', 'several' and numbers such as 'two'. For uncountable nouns we use 'much' and 'little'.",
    tip: "After 'many', 'several' or a number, add -s to the noun. After 'much', use an uncountable noun: 'much water'.",
  },
  'She bought two box of apples.': {
    why: "The mistake is 'box' after 'two'. We need the plural, and nouns ending in -x add -es. So we say 'She bought two boxes of apples'.",
    not: {
      'She bought two boxs of apples.': 'A noun that ends in -x adds -es, not just -s.',
      'She bought two boxes of apple.':
        "'Boxes' is now right, but 'apple' needs the plural too: 'boxes of apples'.",
      'She bought two boxs of apple.':
        "A noun ending in -x adds -es, and 'boxes of' needs the plural 'apples'.",
    },
    more: "Add -es to nouns that end in -s, -x, -z, -ch and -sh: 'class, classes', 'dish, dishes', 'fox, foxes'.",
    tip: "If a noun ends with a hissing sound, add -es. Say 'box' and 'boxes' aloud to hear the extra syllable.",
  },
  'There are five child in the room.': {
    why: "The mistake is 'child' after 'five'. 'Child' has an irregular plural, 'children'. So we say 'There are five children in the room'.",
    not: {
      'There are five childrens in the room.':
        "'Children' is already plural. We do not add another -s.",
      'There is five children in the room.':
        "'Children' is now right, but a plural noun needs 'there are'.",
      'There is five childrens in the room.':
        "'Childrens' adds an -s that 'children' does not need, and a plural needs 'there are'.",
    },
    more: "Other irregular plurals: 'mouse, mice', 'goose, geese', 'person, people'. They must be learnt one by one.",
    tip: 'Keep a list of irregular plurals in your notebook. Add a new one each time you meet it.',
  },
  'He has many friend at school.': {
    why: "The mistake is 'friend' after 'many'. 'Many' needs a plural noun, so we add -s. We say 'He has many friends at school'.",
    not: {
      'He has many friendes at school.':
        "'Friend' does not end in -s, -x, -ch or -sh, so it adds only -s.",
      'He have many friends at school.':
        "'Friends' is now right, but 'he' takes 'has', not 'have'.",
      'He have many friendes at school.':
        "'He' takes 'has', and 'friend' adds only -s in the plural.",
    },
    more: "'Many' is common in questions and negatives: 'How many friends do you have?' and 'He doesn’t have many friends'. In positive sentences 'a lot of' is often more natural.",
    tip: "Practise the pair: 'one friend, two friends'. Say the number first, then check the ending of the noun.",
  },
  'We saw three woman at the door.': {
    why: "The mistake is 'woman' after 'three'. 'Woman' has an irregular plural: 'women'. So we say 'We saw three women at the door'.",
    not: {
      'We saw three womens at the door.': "'Women' is already plural, so it needs no -s.",
      'We seen three women at the door.':
        "'Women' is now right, but 'seen' needs 'have'. The simple past is 'saw'.",
      'We seen three womens at the door.':
        "'Seen' needs 'have' before it, and 'women' takes no extra -s.",
    },
    more: "The pronunciation changes too: 'woman' and 'women' sound different, so listen for the first vowel. The pair 'man, men' works in the same way.",
    tip: "Learn irregular plurals in pairs: 'man and men', 'mouse and mice'.",
  },
  'There are a lot of book on the shelf.': {
    why: "The mistake is 'book' after 'a lot of'. With a countable noun, 'a lot of' needs a plural noun and 'are'. So we say 'There are a lot of books on the shelf'.",
    not: {
      'There are a lot of bookes on the shelf.':
        "'Book' adds only -s. The ending -es is for words that end in -s, -x, -ch or -sh.",
      'There are a lots of books on the shelf.':
        "'Books' is now right, but the phrase is 'a lot of', with no -s on 'lot'.",
      'There are a lots of bookes on the shelf.':
        "The phrase is 'a lot of', with no -s on 'lot', and 'book' adds only -s.",
    },
    more: "'A lot of' works with both kinds of noun. With a countable noun the verb is plural: 'a lot of books are'. With an uncountable noun it is singular: 'a lot of water is'.",
    tip: "Look at the noun after 'a lot of'. Can you count it? If you can, add -s and use 'are'.",
  },
  'My aunt is a artist in Paris.': {
    why: "The mistake is 'a' before 'artist'. 'Artist' starts with a vowel sound, so it takes 'an': 'an artist'. 'A' goes before a consonant sound.",
    not: {
      'My aunt is artist in Paris.':
        "This removes the article, but a job is a singular noun we can count, so it needs 'an' before it.",
      'My aunt are an artist in Paris.':
        "'An artist' is now right, but 'my aunt' is one person, so the verb is 'is', not 'are'.",
      'My aunt are artist in Paris.': "One person takes 'is', and a job needs 'an' before it.",
    },
    more: "Say the first sound, not the first letter: 'an actor', 'an author' but 'a pilot', 'a nurse'.",
    tip: "After 'is' or 'am', a job always has 'a' or 'an' before it: 'She is an actor.'",
  },
  'I eat a orange after lunch.': {
    why: "The mistake is 'a' before 'orange'. 'Orange' starts with a vowel sound, so we use 'an': 'an orange'.",
    not: {
      'I eat an oranges after lunch.':
        "'An' is right for one orange, but 'oranges' is plural. 'An' goes only with one thing.",
      'I eats an orange after lunch.':
        "'An orange' is now right, but 'I' takes 'eat' with no -s. The -s is only for he, she and it.",
      'I eats an oranges after lunch.':
        "'I' takes 'eat', not 'eats', and 'an' cannot go with the plural 'oranges'.",
    },
    more: "Other fruit words with a vowel sound take 'an' too: 'an apple', 'an apricot'. But 'a banana', 'a pear'.",
    tip: "Say 'an' and the word together: 'an apple'. The two vowel sounds join easily.",
  },
  'We have an new teacher.': {
    why: "The mistake is 'an' before 'new'. The article goes with the next word, and 'new' starts with the consonant sound 'n'. So we say 'a new teacher'.",
    not: {
      'We have new teacher.':
        "This removes the article, but 'teacher' is one person we can count, so it needs 'a'.",
      'We has a new teacher.': "'A new teacher' is now right, but 'we' takes 'have', not 'has'.",
      'We has new teacher.': "'We' takes 'have', and the singular noun 'teacher' needs 'a'.",
    },
    more: "Look at the word straight after the article, even if it is an adjective: 'an easy test', but 'a hard test'.",
    tip: "Check the sound of the word that comes right after 'a' or 'an', not the noun at the end.",
  },
  'It is a old house.': {
    why: "The mistake is 'a' before 'old'. 'Old' starts with a vowel sound, so it takes 'an': 'an old house'. The adjective, not the noun, decides.",
    not: {
      'It is an old houses.':
        "'An old' is right, but 'an' goes with one thing. 'Houses' is plural.",
      'It are an old house.': "'An old house' is now right, but 'it' takes 'is', not 'are'.",
      'It are an old houses.': "'It' takes 'is', and 'an' cannot go with the plural 'houses'.",
    },
    more: "The article matches the word after it: 'a house' but 'an old house', 'an empty room' but 'a room'.",
    tip: "If you add an adjective, check the article again: 'a car' can become 'an expensive car'.",
  },
  'My father is doctor.': {
    why: "The mistake is the missing article. A job is a singular noun we can count, so it needs 'a' or 'an'. 'Doctor' starts with a consonant sound, so we say 'a doctor'.",
    not: {
      'My father is an doctor.':
        "'An' goes before a vowel sound. 'Doctor' starts with the sound 'd', so it takes 'a'.",
      'My father are a doctor.':
        "'A doctor' is now right, but 'my father' is one person and takes 'is', not 'are'.",
      'My father are an doctor.':
        "One person takes 'is', and 'doctor' starts with a consonant sound, so it takes 'a'.",
    },
    more: "In many languages a job needs no article. In English it does: 'He is a pilot.' 'She is an actor.'",
    tip: "When you write about a person's job, look for the 'a' or 'an' before it.",
  },
  'I have twelve years old.': {
    why: "The mistake is 'have'. In English we give an age with the verb 'be', not 'have': 'I am twelve years old'. Many languages use 'have' here, so learners often copy it.",
    not: {
      'I is twelve years old.': "'Be' is right for an age, but 'I' always takes 'am', not 'is'.",
      'I am twelve year old.':
        "'Am' is now right, but after a number bigger than one, 'year' must be plural: 'years old'.",
      'I is twelve year old.': "'I' takes 'am', and after 'twelve' the noun is plural: 'years'.",
    },
    more: "You can also say just the number: 'I am twelve.' But never 'I have twelve'.",
    tip: "Give an age with 'I am' and the number. Never use 'have' for an age.",
  },
  'You is my best friend.': {
    why: "The mistake is 'is'. With 'you', the verb 'be' is always 'are', for one person or for many. So we say 'You are my best friend'.",
    not: {
      'You am my best friend.': "'Am' goes only with 'I'. With 'you', use 'are'.",
      'You are me best friend.':
        "'Are' is now right, but 'me' cannot go before a noun. To show who it belongs to, use 'my'.",
      'You am me best friend.': "'You' takes 'are', and before a noun we need 'my', not 'me'.",
    },
    more: "'You' always takes 'are', even for one person: 'You are kind.' 'Are you ready?'",
    tip: "Learn the short form too: 'you’re'. 'You’re my best friend' means the same.",
  },
  'We is in the same class.': {
    why: "The mistake is 'is'. 'We' means me and other people, so the verb 'be' is 'are'. So we say 'We are in the same class'.",
    not: {
      'We was in the same class.':
        "'We' never takes 'was'. This sentence is about now, so it needs the present form of 'be'.",
      'We are in same class.':
        "'Are' is now right, but 'same' needs 'the' before it: 'the same class'.",
      'We was in same class.': "'We' does not take 'was', and 'same' needs 'the' before it.",
    },
    more: "'The same' always has 'the': 'the same day', 'the same colour', 'the same idea'.",
    tip: "'We', 'you' and 'they' all take 'are' in the present: 'They are here.'",
  },
  'There is two cats in the garden.': {
    why: "The mistake is 'is'. After 'there', the verb matches the noun that follows. 'Two cats' is plural, so we say 'There are two cats in the garden'.",
    not: {
      'There has two cats in the garden.':
        "English does not use 'has' after 'there' to say something exists. Use 'there is' or 'there are'.",
      'There are two cat in the garden.':
        "'There are' is now right, but after 'two' the noun must be plural: 'cats'.",
      'There has two cat in the garden.':
        "'There has' is not used for something that exists, and after 'two' the noun needs -s.",
    },
    more: "Use 'there is' for one thing and 'there are' for more than one: 'There is a tree. There are three trees.'",
    tip: "Look at the noun after 'there' first. Then choose 'is' or 'are'.",
  },
  'It has a park near my house.': {
    why: "The mistake is 'It has'. To say that something exists in a place, English uses 'there is' for one thing. So we say 'There is a park near my house'.",
    not: {
      'There has a park near my house.':
        "'There' is right, but it is not followed by 'has'. To say something exists, use 'there is'.",
      'There are a park near my house.':
        "'There' is right, but 'a park' is one thing, so the verb is 'is', not 'are'.",
      'It have a park near my house.':
        "This keeps the idea of 'it' owning the park. To say something exists, use 'there is'.",
    },
    more: "Many languages say this with 'it has' or 'it is'. In English it is 'there is' or 'there are': 'There is a shop on my street.'",
    tip: "If you can ask 'Is there one?', answer with 'there is' or 'there are'.",
  },
  'There are a bank in the town centre.': {
    why: "The mistake is 'are'. 'A bank' is one thing, so after 'there' the verb is 'is'. We say 'There is a bank in the town centre'.",
    not: {
      'There has a bank in the town centre.':
        "English does not use 'has' after 'there' to say something exists. One thing takes 'there is'.",
      'There is an bank in the town centre.':
        "'There is' is now right, but 'bank' starts with a consonant sound, so it takes 'a'.",
      'There has an bank in the town centre.':
        "'There has' is not used for something that exists, and 'bank' takes 'a', not 'an'.",
    },
    more: "The short form of 'there is' is 'there’s': 'There’s a bank on the corner.'",
    tip: "One thing: 'there is'. Two or more: 'there are'. Count before you choose.",
  },
  'The shops is closed on Sunday.': {
    why: "The mistake is 'is'. 'Shops' is plural, so the verb 'be' is 'are'. We say 'The shops are closed on Sunday'.",
    not: {
      'The shops was closed on Sunday.':
        "'Was' is singular, and the shops are plural. This also changes the time to the past.",
      'The shops are closed in Sunday.': "'Are' is now right, but a day takes 'on', not 'in'.",
      'The shops was closed in Sunday.':
        "A plural subject does not take 'was', and a day takes 'on'.",
    },
    more: "The pair 'open' and 'closed' describes shops, doors and windows: 'The door is closed.'",
    tip: "If the subject ends in a plural -s, check that the verb is 'are' or 'were'.",
  },
  'She watch TV every evening.': {
    why: "The mistake is 'watch'. In the present simple, a verb after he, she or it takes an ending. 'Watch' ends in -ch, so it adds -es: 'She watches TV every evening'.",
    not: {
      'She watchs TV every evening.': 'A verb that ends in -ch adds -es, not just -s.',
      'She watches TV every evenings.':
        "The verb is now right, but after 'every' the noun stays singular: 'every evening'.",
      'She watchs TV every evenings.':
        "A verb ending in -ch adds -es, and 'every' takes a singular noun.",
    },
    more: "Verbs that end in -ch, -sh, -s or -x add -es after he, she or it: 'catches', 'washes', 'fixes'.",
    tip: "Say the verb aloud. If you hear an extra sound, like 'watch-iz', write -es.",
  },
  'My uncle work in a hotel.': {
    why: "The mistake is 'work'. 'My uncle' is one person, like 'he', so the present simple verb needs -s. We say 'My uncle works in a hotel'.",
    not: {
      'My uncle is work in a hotel.':
        "'Is' does not go before the base verb 'work'. The present simple is the verb with -s.",
      'My uncle works in hotel.':
        "The verb is now right, but 'hotel' is a singular noun we can count, so it needs 'a'.",
      'My uncle is work in hotel.':
        "'Is' does not go before the base verb, and 'hotel' needs 'a' before it.",
    },
    more: "A job or a regular activity uses the present simple: 'She teaches maths.' 'He drives a bus.'",
    tip: "Replace the subject with 'he' or 'she' in your head. Then add -s to the verb.",
  },
  'The baby cry at night.': {
    why: "The mistake is 'cry'. 'The baby' is one, like 'it' or 'he', so the verb needs an ending. A verb ending in a consonant and -y changes y to i and adds -es: 'cries'.",
    not: {
      'The baby crys at night.':
        "After a consonant, a final -y changes to -ies: 'try, tries'. 'Crys' is wrong.",
      'The baby cries at the night.':
        "The verb is now right, but we say 'at night', with no article.",
      'The baby crys at the night.':
        "A verb in consonant and -y changes to -ies, and 'at night' takes no 'the'.",
    },
    more: "After a vowel, -y stays: 'play, plays', 'enjoy, enjoys'. After a consonant it changes: 'fly, flies', 'study, studies'.",
    tip: 'Look at the letter before the -y. A consonant means -ies.',
  },
  'He don’t eat meat.': {
    why: "The mistake is 'don’t'. With he, she or it, the negative helper is 'doesn’t'. So we say 'He doesn’t eat meat', and 'eat' stays in its base form.",
    not: {
      'He doesn’t eats meat.':
        "'Doesn’t' is right, but the -s is already on 'does'. The main verb stays as 'eat'.",
      'Him doesn’t eat meat.':
        "'Doesn’t eat' is now right, but 'him' is not used as a subject. Before the verb we need 'he'.",
      'Him doesn’t eats meat.': "The subject must be 'he', and after 'doesn’t' the verb has no -s.",
    },
    more: "Only the helper verb changes: 'I don’t eat', 'she doesn’t eat', 'they don’t eat'.",
    tip: "Write 'doesn’t' plus the plain verb: 'doesn’t want', 'doesn’t know', 'doesn’t need'.",
  },
  'I get up at the morning.': {
    why: "The mistake is 'at'. Parts of the day take 'in the': 'in the morning', 'in the afternoon', 'in the evening'. So we say 'I get up in the morning'.",
    not: {
      'I get up on the morning.': "'On' is for days and dates. A part of the day takes 'in the'.",
      'I gets up in the morning.':
        "'In the morning' is now right, but 'I' takes 'get', not 'gets'.",
      'I gets up on the morning.': "'I' takes 'get', and a part of the day takes 'in', not 'on'.",
    },
    more: "A day with a part of the day takes 'on': 'on Monday morning', 'on Friday evening'.",
    tip: "Learn the set: 'in the morning', 'in the afternoon', 'in the evening'.",
  },
  'We go to the beach on summer.': {
    why: "The mistake is 'on'. Seasons take 'in': 'in spring', 'in autumn', 'in winter'. So we say 'We go to the beach in summer'.",
    not: {
      'We go to the beach at summer.':
        "'At' is for clock times and some fixed phrases. A season takes 'in'.",
      'We go to beach in summer.':
        "'In summer' is now right, but we say 'go to the beach', with 'the'.",
      'We go to beach at summer.': "A season takes 'in', and 'beach' needs 'the' here.",
    },
    more: "You can also say 'in the summer'. Both are correct. Never use 'on' or 'at' with a season.",
    tip: "Long times take 'in': seasons and years.",
  },
  'My birthday is on June.': {
    why: "The mistake is 'on'. A month takes 'in': 'in May', 'in October'. 'On' is for a day or a date. So we say 'My birthday is in June'.",
    not: {
      'My birthday is at June.': "'At' is for clock times. A month takes 'in'.",
      'My birthday is in the June.': "'In' is now right, but a month name takes no article.",
      'My birthday is at the June.':
        "A month takes 'in', not 'at', and a month name takes no 'the'.",
    },
    more: "If you add the day, the preposition changes: 'in March', but 'on 4 March'.",
    tip: "Month alone: 'in'. Month with a date: 'on'.",
  },
  'The film starts in half past seven.': {
    why: "The mistake is 'in'. A time on the clock takes 'at': 'at seven', 'at quarter to nine'. So we say 'The film starts at half past seven'.",
    not: {
      'The film starts on half past seven.': "'On' is for days and dates. A clock time takes 'at'.",
      'The film starts at half past of seven.':
        "'At' is now right, but there is no 'of' in this time: 'half past seven'.",
      'The film starts on half past of seven.':
        "A clock time takes 'at', and the time is 'half past seven', with no 'of'.",
    },
    more: "Times on the clock: 'at ten past four', 'at quarter to six'. There is no 'of' after 'past'.",
    tip: "If you can see the time on a clock, use 'at'.",
  },
  'I go to school with bus.': {
    why: "The mistake is 'with'. To say how you travel, use 'by' and no article: 'by car', 'by train'. So we say 'I go to school by bus'.",
    not: {
      'I go to school on bus.':
        "'On' needs 'the' after it: 'on the bus'. Without 'the', the travel phrase is 'by bus'.",
      'I go to school by the bus.':
        "'By the bus' means next to the bus. For a way of travelling, use 'by' with no article.",
      'I go to school with the bus.': "We do not travel 'with' a bus. Use 'by' and no article.",
    },
    more: "Two correct ways: 'by train' or 'on the train'. Walking is different: 'on foot'.",
    tip: "Learn 'by' plus the transport with nothing between them: 'by bike', 'by taxi'.",
  },
  'My grandmother is 80. He lives with us.': {
    why: "The mistake is 'He'. A grandmother is a woman, so the next sentence must use 'she'. So we say 'My grandmother is 80. She lives with us.'",
    not: {
      'My grandmother is 80. Her lives with us.':
        "'Her' is not used as a subject. Before the verb we need 'she'.",
      'My grandmother is 80. She live with us.':
        "'She' is right, but it needs the -s form of the verb.",
      'My grandmother is 80. Her live with us.':
        "The subject must be 'she', not 'her', and the verb after 'she' needs -s.",
    },
    more: "Some languages have one word for 'he' and 'she'. English has two, and the word must match the person.",
    tip: "Read the two sentences together. Does 'he' or 'she' match the person in the first one?",
  },
  'My uncle has a shop. She sells bread.': {
    why: "The mistake is 'She'. An uncle is a man, so the next sentence must use 'he'. So we say 'My uncle has a shop. He sells bread.'",
    not: {
      'My uncle has a shop. Him sells bread.':
        "'Him' is not used as a subject. Before the verb we need 'he'.",
      'My uncle has a shop. He sell bread.': "'He' is right, but it needs the -s form: 'he sells'.",
      'My uncle has a shop. Him sell bread.':
        "The subject must be 'he', and the verb after 'he' needs -s.",
    },
    more: "Male: 'uncle', 'nephew', 'grandson'. Female: 'aunt', 'niece', 'granddaughter'.",
    tip: 'When you change a noun to a pronoun, check that the pronoun is male or female like the noun.',
  },
  'Is cold today.': {
    why: "The mistake is the missing subject. An English sentence needs a subject, even for the weather. We use 'it': 'It is cold today'. Some languages leave the subject out, but English cannot.",
    not: {
      'There is cold today.':
        "'There is' is for something that exists, such as 'a park'. For the weather, use 'it'.",
      'Is very cold today.':
        "This adds 'very' but keeps the real mistake: there is still no subject before 'is'.",
      'There is very cold today.': "For the weather the subject is 'it', not 'there'.",
    },
    more: "'It' also starts sentences about time and distance: 'It is late.' 'It is two miles to town.'",
    tip: "For weather, start with 'It is': 'It is sunny.' 'It is windy.'",
  },
  'Them are my friends.': {
    why: "The mistake is 'Them'. Before a verb, the subject must be 'they'. 'Them' is used after a verb or a preposition: 'I like them.' So we say 'They are my friends'.",
    not: {
      'Their are my friends.':
        "'Their' shows that something belongs to them ('their house'). The subject is 'they'.",
      'They are my friend.':
        "'They' is now right, but 'they' is more than one person, so the noun is plural: 'friends'.",
      'Their are my friend.':
        "The subject must be 'they', and more than one person needs 'friends'.",
    },
    more: "The subject comes before the verb: 'They are here.' The object comes after it: 'I know them.'",
    tip: "Before the verb, use the subject form. After the verb, use the object form: 'They like us.'",
  },
  'I like she very much.': {
    why: "The mistake is 'she'. After a verb, we use the object form, and the object form of 'she' is 'her'. So we say 'I like her very much'.",
    not: {
      'I like herself very much.':
        "'Herself' is used when the subject and the object are the same person ('She hurt herself'). Here the object is 'her'.",
      'I likes her very much.': "'Her' is now right, but 'I' takes 'like', not 'likes'.",
      'I likes herself very much.':
        "'I' takes 'like', and the object after the verb is 'her', not 'herself'.",
    },
    more: "The object comes after the verb: 'I help him.' 'She calls us.' 'We visit them.'",
    tip: "If the word comes after the verb, check that it is 'me', 'him', 'her', 'us' or 'them'.",
  },
  'Is this you bag?': {
    why: "The mistake is 'you'. Before a noun, to show who owns it, we use 'your'. So we ask 'Is this your bag?'",
    not: {
      'Is this yours bag?': "'Yours' stands alone: 'Is this bag yours?' Before a noun, use 'your'.",
      'Is these your bag?':
        "'Your' is now right, but 'bag' is one thing, so we need 'this', not 'these'.",
      'Is these yours bag?': "One bag takes 'this', and before a noun we need 'your', not 'yours'.",
    },
    more: "Two ways to ask: 'Is this your pen?' or 'Is this pen yours?' 'Your' needs a noun after it; 'yours' does not.",
    tip: "Remember: 'your' plus a noun. 'Yours' at the end.",
  },
  'Me name is Ali.': {
    why: "The mistake is 'Me'. To show that the name belongs to me, the word before the noun is 'my'. So we say 'My name is Ali'.",
    not: {
      'Mine name is Ali.': "'Mine' stands alone: 'This book is mine.' Before a noun, use 'my'.",
      'My name are Ali.': "'My' is now right, but 'name' is singular, so the verb is 'is'.",
      'Mine name are Ali.': "Before a noun we need 'my', and one name takes 'is'.",
    },
    more: "'Me' is an object ('Help me'). 'My' goes before a noun ('my bag'). 'Mine' stands alone ('It is mine').",
    tip: "Introduce yourself with 'My name is...' or 'I am...'.",
  },
  'Does she likes music?': {
    why: "The mistake is 'likes'. In a question with 'does', the -s is already on 'does', so the main verb stays in its base form: 'Does she like music?'",
    not: {
      'Do she likes music?':
        "This changes the wrong word. 'She' needs 'does', and after 'does' the verb has no -s.",
      'Do she like music?': "'Like' is now right, but 'she' takes 'does', not 'do'.",
      'Does she liking music?':
        "'Does' is right, but it is followed by the base verb, not the -ing form.",
    },
    more: "The -s goes on one word only: on the verb in a statement ('She reads'), on 'does' in a question ('Does she read?').",
    tip: "After 'does', 'do' or 'did', always use the plain verb.",
  },
  'Where you live?': {
    why: "The mistake is the missing helper verb. A present simple question needs 'do' or 'does' before the subject. With 'you' it is 'do': 'Where do you live?'",
    not: {
      'Where does you live?': "'Does' goes with he, she and it. With 'you', the helper is 'do'.",
      'Where do you lives?':
        "'Do' is now right, but after 'do' the verb stays in its base form, with no -s.",
      'Where does you lives?': "'You' takes 'do', and after the helper the verb has no -s.",
    },
    more: "The pattern is question word, 'do' or 'does', subject, verb: 'What do they eat?' 'When does it open?'",
    tip: "Check every question for a helper verb. Without one, add 'do' or 'does'.",
  },
  'How old you are?': {
    why: "The mistake is the word order. In a question, the verb 'are' comes before the subject 'you'. So we ask 'How old are you?'",
    not: {
      'How old is you?': "'Is' does not go with 'you'. With 'you' the verb 'be' is 'are'.",
      'How old have you?':
        "In English an age takes 'be', not 'have'. Some languages say 'have' here, but English does not.",
      'How many years have you?':
        "This copies a pattern from other languages. In English we ask about age with 'How old', and the verb 'be'.",
    },
    more: "The answer uses 'be' too: 'I am thirteen' or 'I am thirteen years old'.",
    tip: "To make a question with 'be', swap the subject and the verb: 'You are' becomes 'are you'.",
  },
  'Are you like pizza?': {
    why: "The mistake is 'Are'. 'Like' is a normal verb, not 'be', so its question needs 'do': 'Do you like pizza?' 'Are' only makes questions with the verb 'be'.",
    not: {
      'Does you like pizza?': "'Does' goes with he, she and it. With 'you', the helper is 'do'.",
      'Do you likes pizza?':
        "'Do' is right, but after 'do' the verb stays in its base form: 'like'.",
      'Does you likes pizza?': "'You' takes 'do', and after the helper the verb has no -s.",
    },
    more: "Compare 'Are you hungry?' (with 'be') and 'Do you want food?' (with a normal verb).",
    tip: "If the sentence has a normal verb such as 'like', 'want' or 'live', use 'do' or 'does' in the question.",
  },
  'What she is doing?': {
    why: "The mistake is the word order. In a question, the helper 'is' comes before the subject 'she'. So we ask 'What is she doing?'",
    not: {
      'What does she doing?':
        "'Does' does not go with an -ing verb. The present continuous uses 'is' before the subject.",
      'What she is making?':
        "This changes 'doing' to 'making' but keeps the real mistake: 'she is' is still in statement order.",
      'What does she making?':
        "'Does' cannot go with an -ing verb. The question needs 'is' before 'she'.",
    },
    more: "Present continuous questions: 'What are you reading?' 'Why is he laughing?' The form of 'be' comes first.",
    tip: "Start from the statement 'She is doing...', then move 'is' to the front, after the question word.",
  },
  'What you want?': {
    why: "The mistake is the missing helper verb. A present simple question needs 'do' or 'does' before the subject, and 'you' takes 'do'. So we ask 'What do you want?'",
    not: {
      'What does you want?': "'Does' goes with he, she and it. With 'you', use 'do'.",
      'What do you wants?':
        "'Do' is right, but after it the verb stays in its base form, with no -s.",
      'What does you wants?': "'You' takes 'do', and after the helper the verb has no -s.",
    },
    more: "In speech you may hear 'What you want?', but it is not correct written English.",
    tip: "Question word, helper, subject, verb: 'What do you need?' 'Where does she work?'",
  },
  'Can you to help me?': {
    why: "The mistake is 'to'. After 'can', we use the base verb with no 'to'. So we ask 'Can you help me?'",
    not: {
      'Can you helping me?': "After 'can' the verb is the base form, not the -ing form.",
      'Can you help I?':
        "'Help' is now right, but after a verb we need the object form 'me', not 'I'.",
      'Can you helping I?': "After 'can' use the base verb, and after a verb use 'me', not 'I'.",
    },
    more: "The same is true of 'will', 'should' and 'must': 'Will you open the door?'",
    tip: "Remember: 'can' plus the plain verb. Never 'can to'.",
  },
  'She can swims very well.': {
    why: "The mistake is 'swims'. After 'can', the verb is always the base form, with no -s, even after 'she'. So we say 'She can swim very well'.",
    not: {
      'She can to swim very well.':
        "After 'can' there is no 'to'. The base verb comes straight after it.",
      'She can swim very good.':
        "'Can swim' is now right, but to say how she swims, use the adverb 'well', not 'good'.",
      'She can to swim very good.':
        "'Can' takes the base verb without 'to', and the adverb is 'well', not 'good'.",
    },
    more: "'Can' itself never changes either: 'I can', 'she can', 'they can'. There is no 'cans'.",
    tip: "Check the word after 'can'. It should be a plain verb: 'can run', 'can cook', 'can drive'.",
  },
  'I can to speak three languages.': {
    why: "The mistake is 'to'. After 'can', we use the base verb straight away, with no 'to'. So we say 'I can speak three languages'.",
    not: {
      'I can speaking three languages.':
        "After 'can' the verb is the base form, not the -ing form.",
      'I can speak three language.':
        "'Can speak' is now right, but after 'three' the noun must be plural: 'languages'.",
      'I can speaking three language.':
        "'Can' takes the base verb, and after 'three' the noun needs -s.",
    },
    more: "Compare 'can' with 'like': 'I can speak' (no 'to'), but 'I like to speak' (with 'to').",
    tip: "When you list your skills, write 'I can' and a plain verb: 'I can play the guitar.'",
  },
  'These book is mine.': {
    why: "The mistake is 'These'. 'Book' is singular and the verb is 'is', so we need the singular word 'this': 'This book is mine'.",
    not: {
      'This book are mine.': "'This book' is right, but one book takes 'is', not 'are'.",
      'These books is mine.':
        "'These books' is plural, so the verb must be 'are'. 'These books is' does not agree.",
      'This books is mine.': "'This' goes with one thing, but 'books' is plural.",
    },
    more: "Singular: 'this' (near) and 'that' (far). Plural: 'these' (near) and 'those' (far).",
    tip: "Check three words together: 'this book is' or 'these books are'.",
  },
  'This shoes are new.': {
    why: "The mistake is 'This'. 'Shoes' is plural and the verb is 'are', so we need the plural word 'these': 'These shoes are new'.",
    not: {
      'This shoes is new.':
        "This keeps 'this' before a plural noun. 'Shoes' needs 'these', and 'are'.",
      'These shoe are new.': "'These' is right, but it needs a plural noun: 'shoes'.",
      'These shoes is new.': "'These shoes' is plural, so the verb is 'are', not 'is'.",
    },
    more: "Words for things that come in pairs are plural: 'these trousers', 'these scissors', 'these jeans'.",
    tip: "If the noun ends in a plural -s, use 'these' or 'those', and 'are'.",
  },
  'My baby has two tooth.': {
    why: "The mistake is 'tooth'. After 'two' we need the plural, and 'tooth' has an irregular plural: 'teeth'. So we say 'My baby has two teeth'.",
    not: {
      'My baby has two teeths.': "'Teeth' is already plural. It does not take another -s.",
      'My baby have two teeth.':
        "'Teeth' is now right, but 'my baby' is one, like 'he' or 'she', so the verb is 'has'.",
      'My baby have two teeths.': "One baby takes 'has', and 'teeth' needs no extra -s.",
    },
    more: "A few nouns change the vowel inside to make the plural: 'mouse, mice', 'goose, geese'.",
    tip: 'Irregular plurals have no -s. Learn each one with its singular.',
  },
  'My foots are cold.': {
    why: "The mistake is 'foots'. 'Foot' has an irregular plural: the vowel changes and there is no -s. So we say 'My feet are cold'.",
    not: {
      'My feets are cold.': "'Feet' is already plural. It does not take another -s.",
      'My feet is cold.': "'Feet' is now right, but it is plural, so the verb is 'are'.",
      'My feets is cold.': "'Feet' takes no -s, and a plural takes 'are'.",
    },
    more: "We also use 'feet' to measure height in Britain: 'He is six feet tall.'",
    tip: 'Say the pair aloud: one foot, two feet. The sound inside the word changes.',
  },
  'I eat two banana every day.': {
    why: "The mistake is 'banana'. After 'two' the noun must be plural, and 'banana' just adds -s: 'I eat two bananas every day'.",
    not: {
      'I eat two banana’s every day.':
        "An apostrophe does not make a plural. 'Banana’s' would show that something belongs to a banana.",
      'I eat two bananas every days.':
        "'Bananas' is now right, but after 'every' the noun stays singular: 'every day'.",
      'I eat two banana’s every days.':
        "An apostrophe does not make a plural, and 'every' takes a singular noun.",
    },
    more: "'Every' is followed by one: 'every week', 'every house'. It never takes a plural noun.",
    tip: 'To make a plural, just add -s. Keep the apostrophe for things that belong to someone.',
  },
  'Is big your house?': {
    why: "The mistake is the word order. In a question with 'be', the verb comes first, then the subject, then the adjective: 'Is your house big?'",
    not: {
      'Is your big house?':
        "This puts the adjective inside the noun phrase and leaves the question with no ending. 'Big' goes after 'house'.",
      'Is you house big?':
        "The order is now right, but 'you' cannot go before a noun. To show who owns it, use 'your'.",
      'Is you big house?':
        "Before a noun we need 'your', and 'big' must come after the subject: 'your house big'.",
    },
    more: "Start from the statement: 'Your house is big.' Move 'is' to the front: 'Is your house big?'",
    tip: "In a yes or no question, the subject sits between 'is' and the adjective.",
  },
  'She is a girl clever.': {
    why: "The mistake is the position of 'clever'. In English an adjective comes before the noun: 'a clever girl'. So we say 'She is a clever girl'.",
    not: {
      'She is clever a girl.':
        "The adjective must come after 'a', not before it: 'a', then the adjective, then the noun.",
      'She is an clever girl.':
        "The order is now right, but 'clever' starts with a consonant sound, so it takes 'a'.",
      'She is clever an girl.':
        "'A' must come before the adjective, and 'clever' takes 'a', not 'an'.",
    },
    more: "Several adjectives can come before one noun: 'a kind, funny teacher'.",
    tip: 'Build the phrase in order: article, adjective, noun.',
  },
  'No touch the oven. It is hot.': {
    why: "The mistake is 'No'. To tell someone not to do something, English uses 'Don’t' and the base verb: 'Don’t touch the oven'.",
    not: {
      'Not touch the oven. It is hot.':
        "'Not' alone cannot start an order. The negative order needs 'don’t'.",
      'Don’t touching the oven. It is hot.':
        "'Don’t' is right, but it is followed by the base verb, not the -ing form.",
      'Not touching the oven. It is hot.':
        "This is not an order. To tell someone not to do something, use 'Don’t' and the base verb.",
    },
    more: "Polite orders work the same way: 'Please don’t run.' 'Don’t worry.'",
    tip: "For a warning, write 'Don’t' and the plain verb: 'Don’t forget your keys.'",
  },
  'I no like cold weather.': {
    why: "The mistake is 'no'. A present simple negative needs a helper verb. With 'I', it is 'don’t': 'I don’t like cold weather'.",
    not: {
      'I doesn’t like cold weather.':
        "'Doesn’t' is for he, she and it. With 'I', the helper is 'don’t'.",
      'I don’t likes cold weather.': "'Don’t' is right, but the verb after it has no -s.",
      'I doesn’t likes cold weather.':
        "'I' takes 'don’t', and after the helper the verb has no -s.",
    },
    more: "'No' goes before a noun ('no time', 'no money'), not before a verb.",
    tip: "To make a verb negative, put 'don’t' or 'doesn’t' before it.",
  },
  'She not works on Fridays.': {
    why: "The mistake is 'not works'. A present simple negative needs the helper 'doesn’t' after he, she or it, and then the base verb. So we say 'She doesn’t work on Fridays'.",
    not: {
      'She don’t work on Fridays.':
        "'Don’t' is for I, you, we and they. With 'she', use 'doesn’t'.",
      'She doesn’t works on Fridays.':
        "'Doesn’t' is right, but the -s is already on 'does', so the verb is 'work'.",
      'She don’t works on Fridays.':
        "'She' takes 'doesn’t', and after the helper the verb has no -s.",
    },
    more: "The long form is 'does not': 'She does not work on Fridays.' Use it in formal writing.",
    tip: "In a negative, the -s moves from the verb to 'does'.",
  },
  'My sister has got long hairs.': {
    why: "The mistake is 'hairs'. When we mean all the hair on the head, 'hair' is uncountable and has no -s. So we say 'My sister has got long hair'.",
    not: {
      'My sister have got long hair.':
        "'Hair' is now right, but 'my sister' is one person, so the verb is 'has got'.",
      'My sister have got long hairs.':
        "This changes 'has' to 'have', which is wrong for one person, and keeps the real mistake, 'hairs'.",
      'My sister has got longs hair.': "In English an adjective never takes -s. Say 'long hair'.",
    },
    more: "'Hairs' is only for single hairs that you count: 'I found a grey hair. Then I found three more grey hairs.'",
    tip: "Describe people with 'hair' and no -s: 'short hair', 'curly hair', 'black hair'.",
  },
  'She is best teacher in the school.': {
    why: "The mistake is the missing 'the'. We use 'the' before a superlative such as 'best', because only one person can be the best. 'The best teacher' means no other teacher there is as good.",
    not: {
      'She is the most best teacher in the school.':
        "'Best' is already a superlative, so 'most' is not needed. 'Most best' says the same thing twice.",
      'She is best teacher of the school.':
        "This changes 'in' to 'of' but keeps the real mistake: there is still no 'the' before 'best teacher'.",
      'She is the most best teacher of the school.':
        "'Most best' says the superlative twice. 'Best' alone, with 'the', is enough.",
    },
    more: "Other superlatives take 'the' too: 'the oldest building', 'the most useful book', 'the worst day'.",
    tip: "In an exam answer, write 'the most important reason', not 'most important reason'.",
  },
  'I go to the work by bus every day.': {
    why: "The mistake is 'the' before 'work'. We say 'go to work' with no article when we mean going to our job. So the correct sentence is 'I go to work by bus every day'.",
    not: {
      'I go to a work by bus every day.':
        "'A work' is wrong here. When 'work' means your job or workplace, it takes no article after 'go to'.",
      'I go to work by the bus every day.':
        "'Go to work' is now right, but a way of travelling takes no article after 'by'. 'By the bus' means next to it.",
      'I go to a work by the bus every day.':
        "Neither phrase takes an article: not 'a work' after 'go to', and not 'the bus' after 'by' for a way of travelling.",
    },
    more: "Some places lose the article when we mean their normal use: 'go to school', 'go to bed', 'go to hospital' (British English). Compare 'go to the school' for a visit.",
    tip: "Learn these phrases as wholes: 'go to work', 'go to school', 'go to bed'.",
  },
  'The honesty is very important.': {
    why: "The mistake is 'the' before 'honesty'. When we speak about a general idea, we use no article. 'Honesty' is an idea and cannot be counted, so we say 'Honesty is very important'.",
    not: {
      'An honesty is very important.':
        "'An' goes only with a countable singular noun. 'Honesty' is an idea that we cannot count, so it takes no article.",
      'Honesty are very important.':
        "'Honesty' is now right, but it is singular, so the verb is 'is', not 'are'.",
      'An honesty are very important.':
        "'An' cannot go before 'honesty', which we cannot count, and 'are' does not fit a singular subject.",
    },
    more: "Other ideas work in the same way: 'Health is important', 'Music helps me relax'. Use 'the' only for something particular: 'the honesty of the witness'.",
    tip: 'If the noun is a general idea, such as honesty, friendship or music, use no article.',
  },
  'I have a information for you.': {
    why: "The mistake is 'a' before 'information'. 'Information' is uncountable, so it cannot take 'a' or 'an', and it has no plural. We say 'some information' or just 'information'.",
    not: {
      'I have some informations for you.':
        "'Some' is right, but 'information' has no plural. 'Informations' is not used in English.",
      'I have an information for you.':
        "'An' is also wrong. 'Information' is uncountable, so neither 'a' nor 'an' can go before it.",
      'I have an informations for you.':
        "'Information' takes neither 'an' nor a plural -s. Both changes make new mistakes.",
    },
    more: "These common words are uncountable too: 'luggage', 'equipment', 'rice'. To count them, use a phrase: 'a piece of luggage', 'two bags of rice'.",
    tip: "Write 'some' or 'a piece of' before these words: 'some luggage', 'a piece of information'.",
  },
  'It cost ten pounds now.': {
    why: "The mistake is 'cost' after 'It'. 'Now' shows the present, and in the present simple a verb after 'it' takes -s. So we say 'It costs ten pounds now'.",
    not: {
      'It is cost ten pounds now.':
        "'Is' does not go before 'cost' here. For a price now, use the present simple with -s.",
      'It costs ten pound now.': "'Costs' is now right, but 'ten' needs the plural 'pounds'.",
      'It is cost ten pound now.':
        "'Is cost' is not a verb form here, and 'ten' needs the plural 'pounds'.",
    },
    more: "The verb 'cost' has the same form in the past and the present: 'It cost ten pounds last year.' The time word shows which one you mean.",
    tip: "Use a time word to make the tense clear: 'now', 'today', 'last year'. Then you know whether the verb needs -s.",
  },
  'Everyone in the class want to pass.': {
    why: "The mistake is 'want' after 'Everyone'. 'Everyone' means every person, but it is a singular word. So the present simple verb takes -s: 'Everyone in the class wants to pass'.",
    not: {
      'Everyone in the class are want to pass.':
        "'Are want' is not correct. 'Are' goes with a plural subject, and 'everyone' is singular.",
      'Everyone in the class wants pass.':
        "'Wants' is now right, but 'want' is followed by 'to' and a verb: 'wants to pass'.",
      'Everyone in the class are want pass.':
        "'Are want' is not a verb form, and 'want' needs 'to' before the next verb.",
    },
    more: "Other words that take a singular verb: 'everybody', 'somebody', 'nobody' and 'each'.",
    tip: "'Everyone' looks like many people but behaves like one. Use 'is', 'has' and 'wants' after it.",
  },
  'She is good in mathematics.': {
    why: "The mistake is 'in' after 'good'. We say 'good at' a subject or a skill. So the correct sentence is 'She is good at mathematics'.",
    not: {
      'She is good on mathematics.':
        "'On' is not used after 'good' for a skill. The phrase is 'good at'.",
      'She is well at mathematics.':
        "'At' is now right, but 'well' is an adverb or means healthy. A skill takes the adjective: 'good at'.",
      'She is well on mathematics.':
        "A skill takes the adjective 'good', not 'well', and the preposition after it is 'at'.",
    },
    more: "Other adjectives with 'at': 'bad at', 'brilliant at', 'terrible at'.",
    tip: "Learn the adjective and its preposition together: 'good at', 'proud of', 'keen on'.",
  },
  'He arrived to the airport late.': {
    why: "The mistake is 'to' after 'arrived'. We do not use 'to' with 'arrive'. For a place like an airport, a station or a hotel, we use 'at'. So we say 'He arrived at the airport late'.",
    not: {
      'He arrived on the airport late.':
        "'On' is for surfaces and days. For the airport as the place where you arrive, we use 'at'.",
      'He arrived at the airport lately.':
        "'At' is now right, but 'lately' means 'recently'. Here we need 'late', meaning after the right time.",
      'He arrived on the airport lately.':
        "An airport takes 'at', and 'lately' means 'recently', not 'after the right time'.",
    },
    more: "Compare 'arrive at' a small place (the airport, the station) and 'arrive in' a large place (Cairo, Britain). We can also say 'get to' the airport.",
    tip: "Remember 'arrive' with 'at' or 'in'. Never write 'arrive to'.",
  },
  'I am interested on this job.': {
    why: "The mistake is 'on' after 'interested'. The fixed phrase is 'interested in'. So the correct sentence is 'I am interested in this job'.",
    not: {
      'I am interested at this job.': "'At' is not used after 'interested'. Say 'interested in'.",
      'I am interesting in this job.':
        "'In' is now right, but 'interesting' describes the job, not you. You are 'interested in' it.",
      'I am interesting at this job.':
        "'Interesting' describes the job, not you, and 'interested' takes 'in', not 'at'.",
    },
    more: "Other fixed phrases: 'worried about', 'proud of', 'keen on'. Learn each one as a unit, because other languages use different small words.",
    tip: "Write 'interested in' plus a noun: 'interested in art', 'interested in this job'.",
  },
  'She depends of her parents.': {
    why: "The mistake is 'of' after 'depends'. The verb 'depend' is followed by 'on'. So we say 'She depends on her parents'.",
    not: {
      'She depends at her parents.': "'At' is not used with 'depend'. The verb takes 'on'.",
      'She is depend on her parents.':
        "'On' is now right, but 'is' does not go before the base verb 'depend'. Say 'She depends on'.",
      'She is depend at her parents.':
        "'Is' does not go before the base verb, and 'depend' takes 'on', not 'at'.",
    },
    more: "'Depend on' means 'need' or 'rely on': 'Children depend on their parents'. We also say 'It depends on the weather'.",
    tip: "Learn 'depend on' and 'rely on' as whole phrases.",
  },
  'He listened the music all night.': {
    why: "The mistake is the missing 'to'. The verb 'listen' is always followed by 'to' before its object. So the correct sentence is 'He listened to the music all night'.",
    not: {
      'He listened at the music all night.':
        "'At' is not used after 'listen'. The fixed phrase is 'listen to'.",
      'He listen to the music all night.':
        "'To' is now right, but 'he' needs 'listened' for the past or 'listens' for a habit. 'He listen' is wrong.",
      'He listen at the music all night.':
        "'Listen' takes 'to', not 'at', and 'he listen' has no ending: it needs 'listened' or 'listens'.",
    },
    more: "Compare 'hear' and 'listen'. 'Hear' needs no small word: 'He heard the music'. 'Listen' needs 'to': 'He listened to the music'.",
    tip: "Think of 'listen to' as one phrase, like 'look at'.",
  },
  'I don’t know nothing about it.': {
    why: "The mistake is two negatives: 'don’t' and 'nothing'. Standard English uses only one negative in a clause. We change 'nothing' to 'anything' and say 'I don’t know anything about it'.",
    not: {
      'I don’t know none about it.':
        "'None' is also a negative word, so there are still two negatives. Use an 'any' word.",
      'I doesn’t know anything about it.':
        "'Anything' is now right, but 'I' takes 'don’t', not 'doesn’t'.",
      'I doesn’t know none about it.':
        "'I' takes 'don’t', and 'none' is a second negative. Both are wrong.",
    },
    more: "In some languages, such as Spanish and French, two negatives are normal. In English, use 'any' words after a negative, or use one negative word: 'I know nothing.'",
    tip: "After 'don’t', 'didn’t' or 'can’t', use an 'any' word, never a 'no' word. Only one negative is allowed.",
  },
  'She didn’t see nobody at the party.': {
    why: "The mistake is two negatives: 'didn’t' and 'nobody'. We use only one. After 'didn’t' we need 'anybody', so the correct sentence is 'She didn’t see anybody at the party'.",
    not: {
      'She didn’t see no one at the party.':
        "'No one' is negative, just like 'nobody'. There are still two negatives.",
      'She didn’t saw anybody at the party.':
        "'Anybody' is right, but after 'didn’t' the verb stays in the base form: 'see', not 'saw'.",
      'She didn’t saw no one at the party.':
        "After 'didn’t' the verb is 'see', and 'no one' keeps the double negative.",
    },
    more: "You can also use one negative word with a positive verb: 'She met nobody at the party.' Both sentences mean the same.",
    tip: "Check the helper verb. After 'didn’t', always use the base form of the main verb.",
  },
  'We don’t have no homework today.': {
    why: "The mistake is two negatives: 'don’t' and 'no'. We keep one and change 'no' to 'any'. So we say 'We don’t have any homework today'.",
    not: {
      'We don’t have none homework today.':
        "'None' cannot go before a noun, and it is a second negative. Use 'any' before 'homework'.",
      'We don’t have any homeworks today.':
        "'Any' is now right, but 'homework' is uncountable and has no plural.",
      'We don’t have none homeworks today.':
        "'None' is a second negative and cannot go before a noun, and 'homework' has no plural.",
    },
    more: "You can also say 'We have no homework today.' It has one negative word. Both sentences are correct.",
    tip: "'Any' is for negative sentences and questions: 'We don’t have any homework' and 'Do we have any homework?'",
  },
  'He can’t find his keys nowhere.': {
    why: "The mistake is two negatives: 'can’t' and 'nowhere'. After a negative verb we use 'anywhere'. So the correct sentence is 'He can’t find his keys anywhere'.",
    not: {
      'He not can find his keys anywhere.':
        "'Anywhere' is now right, but 'not' goes after 'can' ('can’t' or 'cannot'), not before it.",
      'He can’t find the keys nowhere.':
        "This changes 'his' to 'the' but keeps the real mistake: 'can’t' and 'nowhere' are two negatives.",
      'He not can find the keys anywhere.':
        "'Not' cannot go before 'can'. The negative is 'can’t' or 'cannot'.",
    },
    more: "The same rule works for people and things: after a negative verb, 'no' words become 'any' words.",
    tip: "Circle every negative word in your sentence. If you find two in one clause, change the second to an 'any' word.",
  },
  'They never go nowhere on holiday.': {
    why: "The mistake is two negatives: 'never' and 'nowhere'. 'Never' is already negative, so the place word must be 'anywhere'. We say 'They never go anywhere on holiday'.",
    not: {
      'They don’t never go anywhere on holiday.':
        "'Don’t never' puts two negatives together again. 'Never' alone is enough.",
      'They never go anywhere in holiday.':
        "'Anywhere' is right, but the phrase is 'on holiday', not 'in holiday'.",
      'They don’t never go anywhere in holiday.':
        "'Don’t never' is a double negative, and the phrase is 'on holiday', not 'in holiday'.",
    },
    more: "Words such as 'never', 'nobody' and 'nothing' are already negative, so they do not need another negative word in the same clause.",
    tip: "Remember that 'never' means 'not ever'. You cannot add another 'not' to it.",
  },
  'She speaks very well English.': {
    why: "The mistake is putting 'very well' between the verb and its object. In English the object comes straight after the verb, and the adverb comes after the object. So we say 'She speaks English very well'.",
    not: {
      'She very well speaks English.':
        "In English 'very well' does not go before the verb in this kind of sentence. Put it at the end.",
      'She speaks the English very well.':
        "The order is right, but a language takes no article: 'speaks English'.",
      'She very well speaks the English.':
        "'Very well' does not go before the verb, and a language takes no 'the'.",
    },
    more: "The pattern is subject, verb, object, adverb: 'He reads the letter slowly.' Do not put an adverb between a verb and its object.",
    tip: "Check that the verb and its object are next to each other: 'speaks English', 'plays tennis', 'reads books'.",
  },
  'I like very much this book.': {
    why: "The mistake is putting 'very much' between the verb and its object. The object must come straight after the verb, so the correct sentence is 'I like this book very much'.",
    not: {
      'I like this book very.':
        "'Very' needs a word to describe, such as an adjective. With a verb, use 'very much'.",
      'I very like this book.':
        "'Very' cannot describe a verb on its own. You need 'very much', or you can say 'I really like this book'.",
      'I like this book much very.':
        "The words are in the wrong order. 'Very' comes first: 'very much'.",
    },
    more: "'Very much' can also go before the verb in careful English: 'I very much like this book.' But it never goes between the verb and its object.",
    tip: "A safe pattern for an exam: verb, object, then 'very much'. For example: 'I enjoy the film very much.'",
  },
  'Always she is late for class.': {
    why: "The mistake is the position of 'always'. A frequency adverb goes after the verb 'be': 'She is always late'. It does not normally go at the start of the sentence.",
    not: {
      'She is late always for class.':
        "'Always' does not go after the adjective 'late'. It sits between 'is' and 'late'.",
      'She are always late for class.':
        "'Always' is now in the right place, but 'she' takes 'is', not 'are'.",
      'She are late always for class.':
        "'She' takes 'is', and 'always' goes before 'late', not after it.",
    },
    more: "With other verbs, the adverb goes before the verb: 'She always arrives late.' With 'be', it goes after: 'She is always late.' Other adverbs: 'never', 'often', 'usually'.",
    tip: "Remember the rule 'after be, before other verbs': 'I am never late' but 'I never forget'.",
  },
  'Do you know where is the station?': {
    why: "The mistake is the word order after 'where'. When one question sits inside another, the order is the same as in a statement: 'the station is'. So we say 'Do you know where the station is?'",
    not: {
      'Do you know where the station?':
        "The verb is missing. After 'where the station' we need 'is'.",
      'Do you know where is station?':
        "This drops 'the' and keeps the real mistake: 'is' still comes before the subject.",
      'Do you know where the station it is?':
        "The order is right, but 'it' is not needed. 'The station' is already the subject.",
    },
    more: "Compare the direct question 'Where is the station?' with 'Do you know where the station is?'. The same happens after 'Can you tell me' and 'I don’t know'.",
    tip: "Use statement order after phrases like 'Do you know', 'Could you tell me' and 'I wonder'.",
  },
  'I need to buy some potato.': {
    why: "The mistake is the singular 'potato'. We buy more than one, so we need the plural. 'Potato' ends in -o and adds -es: 'potatoes'. So we say 'I need to buy some potatoes'.",
    not: {
      'I need to buy some potatos.': "The spelling is wrong. 'Potato' adds -es, not just -s.",
      'I need to buying some potatoes.':
        "'Potatoes' is now right, but 'need to' is followed by the base verb: 'need to buy'.",
      'I need to buying some potatos.':
        "'Need to' takes the base verb, and 'potato' adds -es in the plural.",
    },
    more: "Other nouns that add -es after -o: 'tomato, tomatoes' and 'hero, heroes'. But 'photo, photos' and 'piano, pianos' add only -s.",
    tip: 'When you are not sure how to spell a plural, check a dictionary. It shows the plural of difficult words.',
  },
  'Yesterday I go to the cinema.': {
    why: "The mistake is 'go'. 'Yesterday' shows a finished time in the past, so we need the past simple. 'Go' is irregular: its past is 'went'. So we say 'Yesterday I went to the cinema'.",
    not: {
      'Yesterday I goed to the cinema.':
        "'Goed' is not a word. 'Go' is irregular, so it does not add -ed.",
      'Yesterday I went to cinema.':
        "The verb is now right, but we say 'go to the cinema', with 'the'.",
      'Yesterday I goed to cinema.':
        "'Go' has an irregular past, so 'goed' is wrong, and 'cinema' needs 'the' here.",
    },
    more: "Time words such as 'yesterday', 'last week' and 'two days ago' tell you to use the past simple.",
    tip: "Learn the most common irregular pasts first: 'have, had', 'do, did', 'come, came', 'write, wrote'.",
  },
  'She buyed a new dress.': {
    why: "The mistake is 'buyed'. 'Buy' is an irregular verb, so it does not add -ed. Its past is 'bought'. So we say 'She bought a new dress'.",
    not: {
      'She boughted a new dress.': "'Bought' is already the past, so it does not take another -ed.",
      'She bought an new dress.':
        "'Bought' is now right, but 'new' starts with a consonant sound, so it takes 'a'.",
      'She boughted an new dress.': "'Bought' needs no -ed, and 'new' takes 'a', not 'an'.",
    },
    more: "Some irregular pasts end in -ought: 'think, thought', 'bring, brought', 'fight, fought'.",
    tip: "Do not confuse the pasts of 'buy' and 'bring'. Say each pair aloud until it is easy.",
  },
  'We was very tired after the trip.': {
    why: "The mistake is 'was'. In the past, 'be' has two forms: 'was' for I, he, she and it, and 'were' for you, we and they. So we say 'We were very tired after the trip'.",
    not: {
      'We been very tired after the trip.':
        "'Been' needs 'have' or 'had' before it. The simple past for 'we' is 'were'.",
      'We were very tire after the trip.':
        "'Were' is now right, but 'tire' is a verb. After 'very' we need the adjective 'tired'.",
      'We been very tire after the trip.':
        "'Been' cannot stand alone after 'we', and after 'very' we need the adjective 'tired'.",
    },
    more: "You may hear 'we was' in some parts of Britain, but it is not standard English. In writing, always use 'we were'.",
    tip: "Learn the past of 'be' as two groups: 'I, he, she, it was' and 'you, we, they were'.",
  },
  'I didn’t went to school on Monday.': {
    why: "The mistake is 'went'. 'Didn’t' already shows the past, so the main verb goes back to its base form: 'I didn’t go to school on Monday'.",
    not: {
      'I didn’t goes to school on Monday.':
        "After 'didn’t' the verb is the base form, with no -s and no past ending.",
      'I didn’t go to school in Monday.': "'Didn’t go' is now right, but days take 'on', not 'in'.",
      'I didn’t goes to school in Monday.':
        "After 'didn’t' use the base verb, and a day takes 'on'.",
    },
    more: "The past is shown only once, on 'did': 'I had' becomes 'I didn’t have'.",
    tip: "After 'did', 'didn’t' or 'did you', always write the plain verb.",
  },
  'Did you saw the match last night?': {
    why: "The mistake is 'saw'. In a past question, 'did' already shows the past, so the main verb is the base form: 'Did you see the match last night?'",
    not: {
      'Did you seen the match last night?':
        "'Seen' needs 'have' or 'had'. After 'did' the verb is the base form.",
      'Did you see the match at last night?':
        "'See' is now right, but 'last night' takes no preposition before it.",
      'Did you seen the match at last night?':
        "After 'did' we need the base verb, and 'last night' has no 'at' before it.",
    },
    more: "Time phrases with 'last' and 'next' take no preposition: 'last week', 'next year', 'last Friday'.",
    tip: "In a question, the past goes on 'did': 'Did you go?', 'Did she call?'",
  },
  'He maked a cake for my birthday.': {
    why: "The mistake is 'maked'. 'Make' is irregular: its past is 'made'. So we say 'He made a cake for my birthday'.",
    not: {
      'He maded a cake for my birthday.':
        "'Made' is already the past of 'make', so it does not take another -ed.",
      'He made a cake to my birthday.':
        "'Made' is now right, but the reason or event takes 'for': 'for my birthday'.",
      'He maded a cake to my birthday.':
        "'Made' needs no extra -ed, and the event takes 'for', not 'to'.",
    },
    more: "'Make' has one form for the past and after 'have': 'He made a cake' and 'He has made a cake'. 'Build, built' and 'send, sent' work the same way.",
    tip: "Irregular verbs do not add -ed. Learn each past with its verb: 'make, made', 'sell, sold'.",
  },
  'Last week we visit our grandparents.': {
    why: "The mistake is 'visit'. 'Last week' is a finished time in the past, so we need the past simple. 'Visit' is regular, so it adds -ed: 'Last week we visited our grandparents'.",
    not: {
      'Last week we visitted our grandparents.':
        "'Visit' has its stress at the start, 'VIsit', so the t is not doubled: 'visited'. Compare 'preFER, preferred', where the stress is at the end.",
      'Last week we visited ours grandparents.':
        "'Visited' is now right, but before a noun we use 'our', not 'ours'.",
      'Last week we visitted ours grandparents.':
        "'Visit' does not double the t, and before a noun we need 'our'.",
    },
    more: "Regular verbs add -ed in the past: 'call, called', 'open, opened', 'clean, cleaned'.",
    tip: "Look for a past time word, such as 'last', 'ago' or 'yesterday'. Then check the verb ends in -ed or is an irregular past.",
  },
  'The train leaved at six o’clock.': {
    why: "The mistake is 'leaved'. 'Leave' is irregular: its past is 'left'. So we say 'The train left at six o’clock'.",
    not: {
      'The train lefted at six o’clock.': "'Left' is already the past, so it does not take -ed.",
      'The train left in six o’clock.':
        "'Left' is now right, but a clock time takes 'at', not 'in'.",
      'The train lefted in six o’clock.': "'Left' needs no -ed, and a clock time takes 'at'.",
    },
    more: "'Left' is also the opposite of 'right': 'Turn left.' The context shows which meaning you want.",
    tip: "Some verbs change their vowel and end in -t in the past: 'sleep, slept', 'keep, kept', 'sweep, swept'.",
  },
  'My phone falled on the floor.': {
    why: "The mistake is 'falled'. 'Fall' is irregular: its past is 'fell'. So we say 'My phone fell on the floor'.",
    not: {
      'My phone felt on the floor.':
        "'Felt' is the past of 'feel', not 'fall'. The past of 'fall' is 'fell'.",
      'Mine phone fell on the floor.':
        "'Fell' is now right, but before a noun we use 'my', not 'mine'.",
      'Mine phone felt on the floor.':
        "'Felt' is the past of 'feel', and before a noun we need 'my'.",
    },
    more: "Three forms to learn: 'fall, fell, fallen'. Compare 'feel, felt, felt', which is a different verb.",
    tip: 'Make a list of irregular verbs that look alike and test yourself on them.',
  },
  'When I was young, I can swim very well.': {
    why: "The mistake is 'can'. The sentence is about the past ('When I was young'), and the past of 'can' is 'could'. So we say 'When I was young, I could swim very well'.",
    not: {
      'When I was young, I could swam very well.':
        "'Could' is right, but after it the verb stays in its base form: 'swim', not 'swam'.",
      'When I was young, I can swam very well.':
        "This keeps 'can', which is present, and changes 'swim' to 'swam', which cannot follow a modal verb.",
      'When I was young, I could swim very good.':
        "'Could swim' is now right, but to say how you swam, use the adverb 'well'.",
    },
    more: "'Could' shows an ability in the past: 'At five, she could read.' For one success, we often say 'was able to'.",
    tip: "Keep the tense the same through a sentence about the past: 'When I was young, I could...'",
  },
  'I am born in 2010.': {
    why: "The mistake is 'am'. Being born happened once, in the past, so we say 'I was born in 2010'. It is a fixed phrase with 'was' or 'were'.",
    not: {
      'I were born in 2010.': "'Were' goes with you, we and they. With 'I', the past is 'was'.",
      'I was born on 2010.': "'Was born' is now right, but a year takes 'in', not 'on'.",
      'I were born on 2010.': "'I' takes 'was', and a year takes 'in'.",
    },
    more: "Use 'was born' for one person and 'were born' for more: 'My cousins were born in Leeds.'",
    tip: "Never use 'am born'. Your birth is always in the past.",
  },
  'I am knowing the answer.': {
    why: "The mistake is 'am knowing'. 'Know' is a state verb, about what is in your head, and state verbs are not normally used with -ing. So we say 'I know the answer'.",
    not: {
      'I knows the answer.': "'Know' is right in the simple form, but with 'I' there is no -s.",
      'I know a answer.':
        "'I know' is now right, but 'answer' starts with a vowel sound, so it takes 'an'. Here, one answer we both know needs 'the'.",
      'I knows a answer.': "With 'I' the verb has no -s, and 'answer' cannot take 'a'.",
    },
    more: "Other state verbs: 'like', 'want', 'understand', 'believe', 'need'. We say 'I understand', not 'I am understanding'.",
    tip: 'If the verb is about thinking, feeling or owning, use the simple form.',
  },
  'Look, it rains outside.': {
    why: "The mistake is 'rains'. 'Look' shows that it is happening now, so we need the present continuous: 'Look, it is raining outside'.",
    not: {
      'Look, it is rainning outside.':
        "'Is raining' is the right tense, but 'rain' does not double the n: 'raining'.",
      'Look, it are raining outside.':
        "The -ing form is now right, but 'it' takes 'is', not 'are'.",
      'Look, it are rainning outside.': "'It' takes 'is', and 'raining' has one n.",
    },
    more: "Use the present simple for what is usual ('It rains a lot in Wales') and the present continuous for now ('It is raining').",
    tip: "Words like 'Look', 'Listen' and 'now' tell you to use 'is' or 'are' and -ing.",
  },
  'He is wanting a new bike.': {
    why: "The mistake is 'is wanting'. 'Want' is a state verb, so it takes the simple form, not -ing. With 'he' the verb adds -s: 'He wants a new bike'.",
    not: {
      'He want a new bike.': "The simple form is right, but after 'he' the verb needs -s.",
      'He wants an new bike.':
        "'Wants' is now right, but 'new' starts with a consonant sound, so it takes 'a'.",
      'He want an new bike.': "After 'he' the verb needs -s, and 'new' takes 'a', not 'an'.",
    },
    more: "State verbs such as 'want', 'need' and 'prefer' describe a wish, not an action, so they rarely take -ing.",
    tip: "If you can swap the verb for 'would like', use the simple form: 'He wants' or 'He would like'.",
  },
  'I live here since 2015.': {
    why: "The mistake is 'live'. 'Since 2015' joins the past to now, so we need the present perfect: 'have' plus the past participle. So we say 'I have lived here since 2015'.",
    not: {
      'I have live here since 2015.':
        "'Have' is right, but it needs the past participle: 'lived', not 'live'.",
      'I have lived here for 2015.':
        "The tense is now right, but 'for' goes with a length of time. A starting point such as 2015 takes 'since'.",
      'I have live here for 2015.':
        "'Have' needs the participle 'lived', and a starting point takes 'since', not 'for'.",
    },
    more: "'Since' gives the start: 'since Monday', 'since 2015'. 'For' gives the length: 'for two weeks', 'for a long time'.",
    tip: "If a sentence has 'since', check for 'have' or 'has' and a past participle.",
  },
  'I have seen him yesterday.': {
    why: "The mistake is 'have seen'. 'Yesterday' is a finished time, and the present perfect cannot go with a finished time. So we use the past simple: 'I saw him yesterday'.",
    not: {
      'I seen him yesterday.':
        "'Seen' needs 'have' or 'had' before it. On its own, the past is 'saw'.",
      'I saw he yesterday.':
        "'Saw' is now right, but after a verb we need the object form 'him', not 'he'.",
      'I seen he yesterday.': "'Seen' cannot stand alone, and after the verb we need 'him'.",
    },
    more: "Use the present perfect with no finished time: 'I have seen that film.' Add a finished time and change to the past: 'I saw it last week.'",
    tip: "Look for 'yesterday', 'last', 'ago' or a date. They need the past simple, not 'have'.",
  },
  'We have known each other since three years.': {
    why: "The mistake is 'since'. 'Three years' is a length of time, and a length takes 'for'. So we say 'We have known each other for three years'.",
    not: {
      'We have known each other during three years.':
        "'During' tells us when something happens inside a period ('during the holiday'). For how long, use 'for'.",
      'We have know each other for three years.':
        "'For' is now right, but 'have' needs the past participle: 'known'.",
      'We have know each other during three years.':
        "'Have' needs 'known', and a length of time takes 'for', not 'during'.",
    },
    more: "'Since' needs a starting point: 'since 2021', 'since last summer'. 'For' needs a length: 'for six months'.",
    tip: "Ask 'how long?' If the answer is a length of time, use 'for'.",
  },
  'Have you ever went to London?': {
    why: "The mistake is 'went'. After 'have' we need the past participle, and for visiting a place we use 'been': 'Have you ever been to London?'",
    not: {
      'Have you ever being to London?':
        "'Being' is the -ing form. After 'have' we need the participle 'been'.",
      'Has you ever been to London?': "'Been' is now right, but 'you' takes 'have', not 'has'.",
      'Has you ever being to London?':
        "'You' takes 'have', and after it we need 'been', not 'being'.",
    },
    more: "'Been to' means you went and came back: 'I have been to Rome.' 'Gone to' means the person is still there.",
    tip: "Ask about experiences with 'Have you ever been to...?' and answer 'Yes, I have' or 'No, I haven’t'.",
  },
  'She has finish her homework.': {
    why: "The mistake is 'finish'. After 'has' we need the past participle, and 'finish' is regular, so it adds -ed: 'She has finished her homework'.",
    not: {
      'She has finishing her homework.':
        "After 'has' we need the past participle, not the -ing form.",
      'She have finished her homework.':
        "'Finished' is now right, but 'she' takes 'has', not 'have'.",
      'She have finishing her homework.':
        "'She' takes 'has', and after it we need the participle 'finished'.",
    },
    more: "The present perfect is 'have' or 'has' plus the past participle: 'I have eaten', 'he has opened'.",
    tip: "After 'have' or 'has', check the next verb: it should end in -ed or be an irregular participle.",
  },
  'My house is more bigger than yours.': {
    why: "The mistake is 'more bigger'. 'Bigger' already means 'more big', so 'more' is not needed. A short adjective takes -er: 'My house is bigger than yours'.",
    not: {
      'My house is biger than yours.':
        "'Big' ends in one vowel and one consonant, so the g doubles before -er.",
      'My house is bigger that yours.':
        "'Bigger' is now right, but a comparison takes 'than', not 'that'.",
      'My house is biger that yours.': "The g doubles before -er, and a comparison takes 'than'.",
    },
    more: "Short adjectives add -er ('old, older'); long ones take 'more' ('more expensive'). Never use both.",
    tip: "Count the syllables. One syllable: add -er. Three or more: use 'more'.",
  },
  'This test is more easy than the last one.': {
    why: "The mistake is 'more easy'. 'Easy' has two syllables and ends in -y, so it takes -er, and the y changes to i: 'This test is easier than the last one'.",
    not: {
      'This test is easyer than the last one.':
        'After a consonant, the final -y changes to i before -er.',
      'This test is easier then the last one.':
        "'Easier' is now right, but a comparison takes 'than'. 'Then' means 'after that'.",
      'This test is easyer then the last one.':
        "The y changes to i before -er, and the comparison word is 'than'.",
    },
    more: "Two-syllable adjectives ending in -y follow the same rule: 'happy, happier', 'busy, busier', 'funny, funnier'.",
    tip: "'Than' compares, 'then' tells time. Check which one you mean.",
  },
  'My English is gooder now.': {
    why: "The mistake is 'gooder'. 'Good' is irregular: its comparative is 'better'. So we say 'My English is better now'.",
    not: {
      'My English is more better now.': "'Better' already compares, so 'more' is not needed.",
      'My English are better now.':
        "'Better' is now right, but 'my English' is singular, so the verb is 'is'.",
      'My English are more better now.':
        "'More better' compares twice, and a singular subject takes 'is'.",
    },
    more: "Learn the irregular sets: 'good, better, best', 'bad, worse, worst', 'far, further, furthest'.",
    tip: 'These three sets are very common, so learn them by heart.',
  },
  'She is the most tall girl in our class.': {
    why: "The mistake is 'most tall'. 'Tall' is a short adjective, so its superlative adds -est: 'the tallest'. So we say 'She is the tallest girl in our class'.",
    not: {
      'She is the most tallest girl in our class.':
        "'Tallest' already means 'most tall', so 'most' is not needed.",
      'She is the tallest girls in our class.':
        "'Tallest' is now right, but 'she' is one person, so the noun is 'girl'.",
      'She is the most tallest girls in our class.':
        "'Most tallest' says it twice, and one person needs 'girl', not 'girls'.",
    },
    more: "Short adjectives: 'old, the oldest'. Long ones: 'expensive, the most expensive'. Never both.",
    tip: "A superlative usually has 'the' before it and 'in' or 'of' after the noun: 'the youngest in the family'.",
  },
  'A car is fast than a bike.': {
    why: "The mistake is 'fast'. To compare two things, a short adjective adds -er: 'faster'. So we say 'A car is faster than a bike'.",
    not: {
      'A car is more fast than a bike.':
        "'Fast' is a short adjective, so it takes -er, not 'more'.",
      'A car is faster as a bike.':
        "'Faster' is now right, but a comparison takes 'than', not 'as'.",
      'A car is more fast as a bike.':
        "A short adjective takes -er, and a comparison takes 'than'.",
    },
    more: "'Than' follows every comparative, short or long: 'warmer than', 'more useful than'.",
    tip: "Comparative plus 'than': 'longer than', 'cheaper than', 'warmer than'.",
  },
  'My brother is as tall than my father.': {
    why: "The mistake is 'than'. To say two things are the same, the pattern is 'as' plus the adjective plus 'as'. So we say 'My brother is as tall as my father'.",
    not: {
      'My brother is as tall like my father.': "The pattern needs 'as' at both ends, not 'like'.",
      'My brother is as taller as my father.':
        "'As ... as' takes the plain adjective, not the comparative.",
      'My brother is as taller like my father.':
        "The pattern takes the plain adjective and 'as' at both ends.",
    },
    more: "Make it negative with 'not': 'not as cold as'. It means the first thing is less cold.",
    tip: 'Remember the frame: as + adjective + as. Nothing else goes in it.',
  },
  'Can I give you an advice?': {
    why: "The mistake is 'an advice'. 'Advice' is uncountable, so it cannot take 'a' or 'an', and it has no plural. We say 'some advice': 'Can I give you some advice?'",
    not: {
      'Can I give you many advice?':
        "'Many' goes with plural nouns we can count. 'Advice' is uncountable.",
      'Can I give you some advices?': "'Some' is right, but 'advice' has no plural form.",
      'Can I give you many advices?': "'Advice' takes neither 'many' nor a plural -s.",
    },
    more: "To count it, use 'a piece of': 'a piece of advice', 'two pieces of advice'.",
    tip: "Other uncountable nouns to watch: 'luggage', 'equipment', 'knowledge'.",
  },
  'There are too much cars in the city.': {
    why: "The mistake is 'much'. 'Cars' is a plural noun we can count, and countable nouns take 'many'. So we say 'There are too many cars in the city'.",
    not: {
      'There are too lot of cars in the city.':
        "'Lot' needs 'a' before it, and 'too' does not go with 'a lot of'. Use 'too many'.",
      'There are too many car in the city.':
        "'Too many' is now right, but it needs a plural noun: 'cars'.",
      'There are too lot of car in the city.':
        "'Too lot of' is not English, and the noun after it must be plural.",
    },
    more: "'Much' goes with uncountable nouns ('too much noise'); 'many' goes with plural nouns ('too many people').",
    tip: "Ask 'Can I count it?' If you can, use 'many'.",
  },
  'We bought some new furnitures.': {
    why: "The mistake is 'furnitures'. 'Furniture' is uncountable, so it has no plural. We say 'some new furniture'.",
    not: {
      'We bought a new furniture.': "'Furniture' is uncountable, so it cannot take 'a'.",
      'We bought a new furnitures.':
        "'A' goes with one thing, and 'furniture' has no plural anyway.",
      'We bought many new furniture.':
        "'Many' goes with plural nouns we can count. 'Furniture' is uncountable.",
    },
    more: "To count it, name the pieces: 'a chair', 'two tables', or say 'a piece of furniture'.",
    tip: 'If a noun names a whole group of things, such as furniture or luggage, it is often uncountable.',
  },
  'How much students are in your class?': {
    why: "The mistake is 'much'. 'Students' is a plural noun we can count, so the question word is 'How many'. We ask 'How many students are in your class?'",
    not: {
      'How many student are in your class?':
        "'How many' is right, but it needs a plural noun: 'students'.",
      'How much student are in your class?':
        "'Much' is for uncountable nouns, and 'student' should be plural here.",
      'How many students is in your class?': "'How many students' is plural, so the verb is 'are'.",
    },
    more: "'How much' is for uncountable nouns and prices: 'How much water?', 'How much is it?'",
    tip: "'How many' plus a plural noun: 'How many cousins?', 'How many days?'",
  },
  'I need a few water.': {
    why: "The mistake is 'a few'. 'Water' is uncountable, and uncountable nouns take 'a little', not 'a few'. So we say 'I need a little water'.",
    not: {
      'I need a little waters.':
        "'A little' is right, but 'water' is uncountable here and has no -s.",
      'I need few water.':
        "This drops 'a' and keeps 'few', which goes only with plural nouns we can count.",
      'I needs a little water.':
        "'A little water' is now right, but 'I' takes 'need', not 'needs'.",
    },
    more: "'A few' goes with plural nouns ('a few apples'); 'a little' goes with uncountable nouns ('a little milk').",
    tip: "Can you count it? Use 'a few'. Can you not? Use 'a little'.",
  },
  'The news are very good today.': {
    why: "The mistake is 'are'. 'News' ends in -s but it is uncountable and singular, so it takes 'is': 'The news is very good today'.",
    not: {
      'The news are very well today.':
        "This keeps 'are', the real mistake, and changes 'good' to 'well', which describes how you do something, not what news is like.",
      'The new is very good today.':
        "'New' is an adjective. The noun is always 'news', with the -s.",
      'The new is very well today.':
        "The noun is 'news', not 'new', and after 'is' we need the adjective 'good'.",
    },
    more: "A few nouns end in -s but are singular: 'news', 'maths', 'physics'. 'Maths is my best subject.'",
    tip: "Say 'the news is' as one fixed phrase, like 'the weather is'.",
  },
  'I enjoy to play the guitar.': {
    why: "The mistake is 'to play'. 'Enjoy' is followed by the -ing form of a verb, never by 'to': 'I enjoy playing the guitar'.",
    not: {
      'I enjoy to playing the guitar.':
        "'Enjoy' takes the -ing form straight after it, with no 'to'.",
      'I enjoys playing the guitar.':
        "'Playing' is now right, but 'I' takes 'enjoy', not 'enjoys'.",
      'I enjoys to playing the guitar.':
        "'I' takes 'enjoy', and after 'enjoy' the -ing form comes with no 'to'.",
    },
    more: "Other verbs that take -ing: 'finish', 'mind', 'keep', 'practise'. 'She practises singing after school.'",
    tip: "Learn 'enjoy' with an -ing word after it: 'enjoy reading', 'enjoy cooking'.",
  },
  'I want that you come with me.': {
    why: "The mistake is 'want that you come'. In English 'want' is followed by a person and 'to' plus a verb: 'I want you to come with me'.",
    not: {
      'I want you come with me.': "'I want you' is right, but the next verb needs 'to': 'to come'.",
      'I wants you to come with me.':
        "The pattern is now right, but 'I' takes 'want', not 'wants'.",
      'I wants you come with me.': "'I' takes 'want', and the verb after the person needs 'to'.",
    },
    more: "Other verbs use the same pattern: 'ask someone to', 'expect someone to', 'need someone to'.",
    tip: "Many languages say 'want that'. In English, say 'want' plus the person plus 'to'.",
  },
  'My parents let me to stay up late.': {
    why: "The mistake is 'to'. After 'let' and a person, the next verb is the base form with no 'to': 'My parents let me stay up late'.",
    not: {
      'My parents let me staying up late.':
        "After 'let me' the verb is the base form, not the -ing form.",
      'My parents let me stay up lately.':
        "'Let me stay' is now right, but 'lately' means 'recently'. After 'stay up' we need 'late'.",
      'My parents let me staying up lately.':
        "After 'let' use the base verb, and 'lately' means 'recently', not 'until a late hour'.",
    },
    more: "'Let' means 'allow'. Compare: 'They let me drive' but 'They allowed me to drive'. Only 'allow' takes 'to'.",
    tip: "Remember 'let' plus a person plus a plain verb: 'Let me help.'",
  },
  'He made me to laugh.': {
    why: "The mistake is 'to'. When 'make' means 'cause someone to do something', the next verb has no 'to': 'He made me laugh'.",
    not: {
      'He made me laughing.':
        "After 'make' and a person, the verb is the base form, not the -ing form.",
      'He did me laugh.': "'Do' cannot mean 'cause'. Use 'make': 'He made me laugh'.",
      'He did me laughing.':
        "'Do' does not have this meaning, and the verb after the person is the base form.",
    },
    more: "'Make' plus a person plus a base verb: 'The film made her cry.' 'Onions make me sneeze.'",
    tip: "With 'make' and 'let', leave out 'to' before the second verb.",
  },
  'I would like go to Spain.': {
    why: "The mistake is the missing 'to'. 'Would like' is followed by 'to' and the base verb: 'I would like to go to Spain'.",
    not: {
      'I would like to going to Spain.':
        "'To' is now right, but after it the verb is the base form: 'to go'.",
      'I would like to go in Spain.':
        "'Would like to go' is right, but we go 'to' a country, not 'in' it.",
      'I would like to going in Spain.':
        "After 'to' use the base verb, and a journey takes 'to', not 'in'.",
    },
    more: "'Would like' is a polite way to say 'want': 'I would like a drink.' With a verb, add 'to'.",
    tip: "The short form is 'I’d like to...': 'I’d like to visit Rome.'",
  },
  'Thank you for help me.': {
    why: "The mistake is 'help'. After a preposition such as 'for', a verb takes the -ing form: 'Thank you for helping me'.",
    not: {
      'Thank you for helped me.': 'After a preposition, the verb is the -ing form, not the past.',
      'Thanks you for helping me.':
        "'Helping' is now right, but we say 'Thank you' or 'Thanks', never 'Thanks you'.",
      'Thanks you for helped me.':
        "'Thanks you' is not English, and after 'for' the verb needs -ing.",
    },
    more: "The same rule after other prepositions: 'before leaving', 'after eating', 'without asking'.",
    tip: "Any verb straight after 'for', 'of', 'about' or 'without' ends in -ing.",
  },
  'You must to wear a uniform.': {
    why: "The mistake is 'to'. 'Must' is a modal verb, so the next verb is the base form with no 'to': 'You must wear a uniform'.",
    not: {
      'You must wearing a uniform.': "After 'must' the verb is the base form, not the -ing form.",
      'You must wear an uniform.':
        "'Must wear' is now right, but 'uniform' starts with the sound 'y', so it takes 'a'.",
      'You must wearing an uniform.':
        "After 'must' use the base verb, and 'uniform' takes 'a' because it starts with a 'y' sound.",
    },
    more: "Compare 'must' and 'have to': 'You must wear' and 'You have to wear'. Only 'have' takes 'to'.",
    tip: "Modal verbs, such as 'must', 'can', 'should' and 'will', are followed by the plain verb.",
  },
  'You should to drink more water.': {
    why: "The mistake is 'to'. 'Should' is a modal verb, so the next verb is the base form: 'You should drink more water'.",
    not: {
      'You should drinking more water.':
        "After 'should' the verb is the base form, not the -ing form.",
      'Your should drink more water.':
        "'Should drink' is now right, but 'your' shows that something belongs to you. The subject is 'you'.",
      'Your should drinking more water.':
        "The subject is 'you', not 'your', and after 'should' we need the base verb.",
    },
    more: "We use 'should' to say what is a good idea: 'You should rest.' 'You shouldn’t eat so fast.'",
    tip: "To suggest something in writing, use 'should' plus the plain verb.",
  },
  'I did a mistake in the test.': {
    why: "The mistake is 'did'. We 'make' a mistake, not 'do' one. It is a fixed pair, so the correct sentence is 'I made a mistake in the test'.",
    not: {
      'I maked a mistake in the test.':
        "'Make' is right, but it is irregular: its past is 'made', not 'maked'.",
      'I made a mistakes in the test.':
        "'Made' is now right, but 'a' goes with one thing, so 'mistake' has no -s.",
      'I maked a mistakes in the test.':
        "The past of 'make' is irregular, and 'a' goes with a singular noun.",
    },
    more: "Other fixed pairs with 'make': 'make a decision', 'make a noise', 'make friends'.",
    tip: 'Learn these pairs as wholes and note them in your vocabulary book.',
  },
  'She said me the answer.': {
    why: "The mistake is 'said me'. 'Say' is not followed straight away by a person. When we name the person, we use 'tell': 'She told me the answer'.",
    not: {
      'She told to me the answer.': "'Tell' takes the person straight after it, with no 'to'.",
      'She tell me the answer.':
        "'Tell' is the right verb, but it needs a form: 'told' for the past, as in this sentence, or 'tells' for now.",
      'She tell to me the answer.':
        "The verb needs the past form, and 'tell' takes the person with no 'to'.",
    },
    more: "'Say something' ('She said hello') but 'tell someone something' ('She told me a story').",
    tip: "Is there a person straight after the verb? Use 'tell'.",
  },
  'Can you borrow me your pen?': {
    why: "The mistake is 'borrow'. You 'borrow' something from someone, and you 'lend' something to someone. Here the other person gives the pen, so we say 'Can you lend me your pen?'",
    not: {
      'Can you lent me your pen?':
        "'Lend' is the right verb, but after 'can' it stays in the base form: 'lend', not 'lent'.",
      'Can you lend me you pen?':
        "'Lend' is now right, but before a noun we need 'your', not 'you'.",
      'Can you lent me you pen?':
        "After 'can' use the base verb 'lend', and before a noun use 'your'.",
    },
    more: "Two ways to ask: 'Can you lend me your pen?' or 'Can I borrow your pen?'",
    tip: 'Lend goes out from you; borrow comes in to you.',
  },
  'I always make my homework after dinner.': {
    why: "The mistake is 'make'. We 'do' homework: 'do' goes with tasks and work. So the correct sentence is 'I always do my homework after dinner'.",
    not: {
      'I always does my homework after dinner.':
        "'Do' is the right verb, but 'I' takes 'do', not 'does'.",
      'I always do my homeworks after dinner.':
        "'Do' is now right, but 'homework' is uncountable and has no -s.",
      'I always does my homeworks after dinner.': "'I' takes 'do', and 'homework' has no plural.",
    },
    more: "Other pairs with 'do': 'do the shopping', 'do an exercise', 'do the washing-up'.",
    tip: "If it is a task or a job, the verb is usually 'do'.",
  },
  'He explained me the rule.': {
    why: "The mistake is 'explained me'. 'Explain' cannot have the person straight after it. Put the thing first and the person after 'to': 'He explained the rule to me'.",
    not: {
      'He explained the rule me.':
        "The order is right, but the person needs 'to' before it: 'to me'.",
      'He explain the rule to me.':
        "The pattern is now right, but the verb needs the past form 'explained'.",
      'He explain the rule me.': "The verb needs the past form, and the person needs 'to'.",
    },
    more: "'Describe' works the same way: 'She described the house to me', not 'described me the house'.",
    tip: 'Remember: explain something to someone.',
  },
  'I am agree with you.': {
    why: "The mistake is 'am'. 'Agree' is a verb, not an adjective, so it does not need 'be'. We say 'I agree with you'.",
    not: {
      'I agrees with you.': "'Am' is gone, but with 'I' the verb has no -s.",
      'I agree to you.':
        "'I agree' is now right, but we agree 'with' a person. We agree 'to' a plan.",
      'I agrees to you.': "With 'I' the verb has no -s, and we agree 'with' a person.",
    },
    more: "Many languages say 'I am agree'. In English 'agree' works alone: 'Do you agree?' 'I don’t agree.'",
    tip: "In a discussion, say 'I agree with you' or 'I don’t agree with that'.",
  },
  'She is married with a pilot.': {
    why: "The mistake is 'with'. We are married 'to' a person. So we say 'She is married to a pilot'.",
    not: {
      'She is married at a pilot.': "'At' is not used after 'married'. The preposition is 'to'.",
      'She is marry to a pilot.':
        "'To' is now right, but after 'is' we need the adjective 'married', not the verb 'marry'.",
      'She is marry at a pilot.': "After 'is' we need 'married', and it is followed by 'to'.",
    },
    more: "The verb has no preposition: 'She married a pilot.' The adjective takes 'to': 'She is married to a pilot.'",
    tip: "Learn 'married to', 'engaged to' and 'related to' together.",
  },
  'I am afraid from spiders.': {
    why: "The mistake is 'from'. The adjective 'afraid' is followed by 'of'. So we say 'I am afraid of spiders'.",
    not: {
      'I am afraid at spiders.': "'At' is not used after 'afraid'. The phrase is 'afraid of'.",
      'I am afraid of spider.':
        "'Afraid of' is now right, but to talk about spiders in general, use the plural.",
      'I am afraid at spider.': "'Afraid' takes 'of', and spiders in general need the plural.",
    },
    more: "'Scared of' and 'frightened of' work the same way: 'He is scared of the dark.'",
    tip: "Fear words take 'of': 'afraid of', 'scared of', 'frightened of'.",
  },
  'Please wait me here.': {
    why: "The mistake is the missing 'for'. The verb 'wait' takes 'for' before the person or thing: 'Please wait for me here'.",
    not: {
      'Please wait to me here.': "'To' is not used after 'wait'. The verb takes 'for'.",
      'Please waiting for me here.':
        "'For me' is now right, but a request takes the base verb: 'wait'.",
      'Please waiting to me here.':
        "A request needs the base verb, and 'wait' is followed by 'for'.",
    },
    more: "'Await' is a formal verb with no 'for': 'We await your reply.' In everyday English, use 'wait for'.",
    tip: "Learn 'wait for' as one unit: 'wait for the bus', 'wait for your turn'.",
  },
  'We discussed about the problem.': {
    why: "The mistake is 'about'. 'Discuss' takes its object straight after it, with no preposition. So we say 'We discussed the problem'.",
    not: {
      'We discussed on the problem.':
        "'Discuss' takes no preposition at all, so 'on' is wrong too.",
      'Us discussed the problem.':
        "The verb is now right, but 'us' is not used as a subject. Before the verb we need 'we'.",
      'Us discussed on the problem.':
        "The subject must be 'we', and 'discuss' takes no preposition.",
    },
    more: "The noun is different: 'a discussion about the problem'. Only the verb has no preposition.",
    tip: "Other verbs with no preposition before the object: 'enter a room', 'answer a question'.",
  },
  'She is a honest girl.': {
    why: "The mistake is 'a' before 'honest'. The h in 'honest' is silent, so the word starts with a vowel sound and takes 'an': 'She is an honest girl'.",
    not: {
      'She is honest girl.':
        "This removes the article, but 'girl' is a singular noun we can count, so the phrase needs 'an'.",
      'She are an honest girl.': "'An honest' is now right, but 'she' takes 'is', not 'are'.",
      'She are honest girl.': "'She' takes 'is', and 'honest girl' needs 'an' before it.",
    },
    more: "A few words begin with a silent h: 'an hour', 'an heir', 'an honour'. But 'a house' and 'a hotel', where the h is spoken.",
    tip: "Listen to the first sound, not the first letter. A silent h means 'an'.",
  },
  'My cousin lives in the Spain.': {
    why: "The mistake is 'the'. Most country names take no article. So we say 'My cousin lives in Spain'.",
    not: {
      'My cousin lives in a Spain.': "A country is one particular place, so it never takes 'a'.",
      'My cousin live in Spain.':
        "'In Spain' is now right, but 'my cousin' is one person, so the verb needs -s.",
      'My cousin live in a Spain.': 'The verb needs -s, and a country name takes no article.',
    },
    more: "A few countries do take 'the', because their names contain a common noun: 'the United Kingdom', 'the United Arab Emirates'.",
    tip: "If the name is one word, such as Italy or Brazil, there is usually no 'the'.",
  },
  'My cousin speaks the Arabic.': {
    why: "The mistake is 'the'. The name of a language takes no article: 'speaks Arabic', 'learns Polish'. So we say 'My cousin speaks Arabic'.",
    not: {
      'My cousin speaks Arab.':
        "'Arab' is a person or an adjective ('an Arab country'). The language is 'Arabic'.",
      'My cousin speak Arabic.':
        "'Arabic' is now right, but 'my cousin' is one person, so the verb is 'speaks'.",
      'My cousin speak Arab.': "The verb needs -s, and the name of the language is 'Arabic'.",
    },
    more: "Use 'the' only with the word 'language': 'the Arabic language'. Alone, a language takes no article: 'Spanish is easy.'",
    tip: "Language names always start with a capital letter and take no article: 'Arabic', 'Urdu', 'Polish'.",
  },
  'I am very boring in this lesson.': {
    why: "The mistake is 'boring'. An -ing adjective describes the thing that causes the feeling. An -ed adjective describes how a person feels. You feel 'bored', so we say 'I am very bored in this lesson'.",
    not: {
      'I am very bore in this lesson.':
        "'Bore' is a verb or a noun. To describe how you feel, use the adjective with -ed.",
      'I have very bored in this lesson.':
        "'Bored' is right, but a feeling takes 'be', not 'have': 'I am bored'.",
      'I have very bore in this lesson.': "A feeling takes 'am', and the adjective needs -ed.",
    },
    more: "'I am boring' means you make other people feel bored, which is not what you mean.",
    tip: "People feel -ed; things are -ing. 'I am tired. The journey is tiring.'",
  },
  'The film was very interested.': {
    why: "The mistake is 'interested'. The film causes the feeling, so it takes the -ing adjective: 'The film was very interesting'. People feel 'interested'.",
    not: {
      'The film was very interestingly.':
        "After 'was' we need an adjective, not an adverb ending in -ly.",
      'The film were very interesting.':
        "'Interesting' is now right, but one film takes 'was', not 'were'.",
      'The film were very interestingly.':
        "One film takes 'was', and after it we need the adjective, not an adverb.",
    },
    more: "The same pair works for many feelings: 'amazing, amazed', 'surprising, surprised', 'tiring, tired'.",
    tip: 'Ask: does it cause the feeling (-ing) or feel it (-ed)?',
  },
  'We were very exciting about the trip.': {
    why: "The mistake is 'exciting'. We feel the excitement, so we use the -ed adjective: 'We were very excited about the trip'. The trip itself is 'exciting'.",
    not: {
      'We were very excite about the trip.':
        "'Excite' is a verb. After 'very' we need the adjective 'excited'.",
      'We was very excited about the trip.':
        "'Excited' is now right, but 'we' takes 'were', not 'was'.",
      'We was very excite about the trip.':
        "'We' takes 'were', and after 'very' we need the adjective with -ed.",
    },
    more: "'Excited about' is the usual phrase: 'excited about the holiday'. You can also be 'excited to see' someone.",
    tip: 'Check the subject. Is it a person with a feeling? Then the adjective ends in -ed.',
  },
  'He hurt hisself in the park.': {
    why: "The mistake is 'hisself'. It is not a word. The reflexive pronoun for 'he' is 'himself': 'He hurt himself in the park'.",
    not: {
      'He hurt his self in the park.':
        "'His self' is not used as a reflexive pronoun. The word is 'himself'.",
      'He hurted himself in the park.':
        "'Himself' is now right, but 'hurt' has the same form in the past: 'hurt', not 'hurted'.",
      'He hurted his self in the park.':
        "The past of 'hurt' is 'hurt', and the reflexive pronoun is 'himself'.",
    },
    more: "The reflexive pronouns are 'myself', 'yourself', 'herself', 'itself', 'ourselves', 'themselves'. 'Hisself' and 'theirselves' are not standard English.",
    tip: "Use a reflexive pronoun when the subject does something to itself: 'She taught herself to swim.'",
  },
  'My sister she plays the piano.': {
    why: "The mistake is 'she'. 'My sister' is already the subject, so English does not add a second subject 'she'. We say 'My sister plays the piano'.",
    not: {
      'My sister her plays the piano.':
        "This still has a second subject, and 'her' cannot be a subject anyway.",
      'My sister play the piano.':
        "The extra 'she' is gone, but 'my sister' is one person, so the verb needs -s.",
      'My sister her play the piano.': 'There is still a second subject, and the verb needs -s.',
    },
    more: "Some languages repeat the subject with a pronoun. In English, one sentence has one subject: 'The teacher explained it.'",
    tip: 'Find the subject and the verb. If there is a pronoun between them that means the same person, delete it.',
  },
  'I will to call you tomorrow.': {
    why: "The mistake is 'to'. 'Will' is a modal verb, so it is followed by the base verb with no 'to': 'I will call you tomorrow'.",
    not: {
      'I will calling you tomorrow.': "After 'will' the verb is the base form, not the -ing form.",
      'I wills call you tomorrow.': "'Will' never changes, so there is no 'wills'.",
      'I wills calling you tomorrow.':
        "'Will' never takes -s, and the verb after it is the base form.",
    },
    more: "The short form is 'I’ll': 'I’ll call you tomorrow.' The negative is 'won’t': 'I won’t forget.'",
    tip: "Write 'will' plus the plain verb for promises and plans made now.",
  },
  'What means this word?': {
    why: "The mistake is the word order. A present simple question needs 'does' before the subject, and then the base verb: 'What does this word mean?'",
    not: {
      'What does this word means?':
        "'Does' is right, but the -s is already on 'does', so the verb is 'mean'.",
      'What do this word mean?':
        "The order is right, but 'this word' is singular, so the helper is 'does'.",
      'What do this word means?':
        "'This word' takes 'does', and after the helper the verb has no -s.",
    },
    more: "To ask for a meaning in class, you can also say 'What is the meaning of this word?'",
    tip: "Question word, 'does', subject, base verb: 'What does it cost?' 'How does it work?'",
  },
  'My brother work in a bank and he don’t like it.': {
    why: "This has two mistakes, both about 'he'. 'My brother' is one person, so the present simple verb needs -s: 'works'. And the negative for he, she or it is 'doesn’t', not 'don’t'. So: 'My brother works in a bank and he doesn’t like it.'",
    not: {
      'My brother working in a bank and he doesn’t like it.':
        "'Doesn’t' is right, but 'working' alone is not a full verb. For a job, use the present simple: 'works'.",
      'My brother works in a bank and he don’t like it.':
        "This mends the first mistake only. 'He' takes 'doesn’t', not 'don’t'.",
      'My brother working in a bank and he don’t like it.':
        "Neither mistake is mended properly: 'working' needs 'is' or should be 'works', and 'he' takes 'doesn’t'.",
    },
    more: "Both mistakes break one rule: in the present simple, he, she and it carry an -s, either on the verb ('works') or on the helper ('doesn’t').",
    tip: 'When a sentence has two verbs about the same person, check both for the -s.',
  },
  'Last summer we go to Spain and the weather were very hot.': {
    why: "This has two mistakes. 'Last summer' is a finished past time, so 'go' must be the past 'went'. And 'weather' is singular, so its past verb is 'was', not 'were'. So: 'Last summer we went to Spain and the weather was very hot.'",
    not: {
      'Last summer we go to Spain and the weather was very hot.':
        "This mends 'was' but keeps 'go'. 'Last summer' needs the past simple: 'went'.",
      'Last summer we went to Spain and the weather is very hot.':
        "'Went' is right, but 'is' puts the weather in the present. The whole story is in the past.",
      'Last summer we go to Spain and the weather is very hot.':
        "Both verbs are in the present, but 'last summer' is finished. Both must be past.",
    },
    more: 'Keep one time through a short story: if the first verb is past, the next ones usually are too.',
    tip: 'In a holiday story, underline every verb and check that each one is past.',
  },
  'If it will rain, we will stays at home.': {
    why: "This has two mistakes. In the 'if' part of a sentence about the future, we use the present, not 'will': 'If it rains'. And after 'will' the verb has no -s: 'will stay'. So: 'If it rains, we will stay at home.'",
    not: {
      'If it rain, we will stay at home.':
        "'Will stay' is right, and 'will' has gone from the 'if' part, but 'it' needs the -s form: 'rains'.",
      'If it rains, we will stays at home.':
        "This mends the 'if' part only. After 'will' the verb is the base form, with no -s.",
      'If it rain, we will stays at home.':
        "'It' needs 'rains', and after 'will' the verb has no -s.",
    },
    more: "This is the first conditional: 'if' plus the present, then 'will' plus the base verb. 'If you hurry, you will catch the bus.'",
    tip: "Never put 'will' straight after 'if' when you talk about a possible future event.",
  },
  'My teacher said me to sitting down.': {
    why: "This has two mistakes. When you name the person, use 'tell', not 'say': 'told me'. And after 'told me to' the verb is the base form: 'to sit'. So: 'My teacher told me to sit down.'",
    not: {
      'My teacher said me to sit down.':
        "'To sit' is right, but 'say' cannot have the person straight after it. Use 'told me'.",
      'My teacher told me to sat down.':
        "'Told me' is right, but after 'to' the verb is the base form: 'sit', not 'sat'.",
      'My teacher said me to sat down.':
        "'Said me' should be 'told me', and after 'to' we need the base form 'sit'.",
    },
    more: "'Tell someone to do something' gives an order or a request: 'She told us to wait.'",
    tip: "After 'to', always write the plain verb: 'to go', 'to sit', 'to write'.",
  },
  'I am living in London since two years.': {
    why: "This has two mistakes. A time from the past up to now needs the present perfect: 'I have lived'. And a length of time takes 'for', not 'since'. So: 'I have lived in London for two years.'",
    not: {
      'I have live in London for two years.':
        "'For two years' is right, but after 'have' we need the past participle: 'lived'.",
      'I have lived in London since two years.':
        "The tense is mended, but 'two years' is a length of time, which takes 'for'.",
      'I have live in London since two years.':
        "'Have' needs 'lived', and a length of time takes 'for', not 'since'.",
    },
    more: "'Since' needs a starting point: 'since 2019', 'since I was ten'. 'For' needs a length: 'for six months'.",
    tip: "With 'for' or 'since' and a time up to now, use 'have' or 'has' plus the past participle.",
  },
  'There is many people in the park because is sunny.': {
    why: "This has two mistakes. 'Many people' is plural, so we need 'there are'. And the second part has no subject: for the weather, English uses 'it'. So: 'There are many people in the park because it is sunny.'",
    not: {
      'There is many people in the park because it is sunny.':
        "'It is sunny' is right, but a plural noun after 'there' needs 'are'.",
      'There are many people in the park because there is sunny.':
        "'There are' is right, but the weather takes 'it', not 'there'.",
      'There is many people in the park because there is sunny.':
        "A plural takes 'there are', and the weather takes 'it is'.",
    },
    more: "'There is' and 'there are' say that something exists; 'it is' describes the weather, the time or a situation.",
    tip: "Every English clause needs a subject. If none is there, ask whether it should be 'it'.",
  },
  'I have seen this film last week and I enjoyed very much.': {
    why: "This has two mistakes. 'Last week' is a finished time, so we use the past simple 'saw', not 'have seen'. And 'enjoy' needs an object: 'I enjoyed it'. So: 'I saw this film last week and I enjoyed it very much.'",
    not: {
      'I seen this film last week and I enjoyed it very much.':
        "'Enjoyed it' is right, but 'seen' cannot stand alone. The past simple is 'saw'.",
      'I saw this film last week and I enjoyed very much.':
        "The tense is mended, but 'enjoy' always needs an object, such as 'it'.",
      'I seen this film last week and I enjoyed very much.':
        "'Seen' needs 'have', so the past is 'saw', and 'enjoyed' needs the object 'it'.",
    },
    more: "'Enjoy' needs an object: 'I enjoyed the party', 'We enjoyed ourselves'. In a sentence like this one, it cannot stand alone.",
    tip: "A finished time word ('last week', 'yesterday') rules out 'have' plus a participle.",
  },
  'This year the exams were more easy and the results were more better.': {
    why: "This has two mistakes. 'Easy' takes -er, with the y changed to i: 'easier'. And 'better' already compares, so 'more' must go. So: 'This year the exams were easier and the results were better.'",
    not: {
      'This year the exams were more easy and the results were better.':
        "'Better' is mended, but 'easy' is a two-syllable adjective ending in -y, so it takes -er: 'easier'.",
      'This year the exams were easier and the results were more good.':
        "'Easier' is right, but 'good' is irregular: its comparative is 'better', not 'more good'.",
      'This year the exams were more easy and the results were more good.':
        "Both comparatives are wrong: 'easy' takes -er, and 'good' becomes 'better'.",
    },
    more: "Use 'more' only with longer adjectives: 'more difficult', 'more expensive'. Short ones and those ending in -y take -er.",
    tip: "Never use 'more' and -er together, and learn 'good, better' by heart.",
  },
  'Although it was rain, but we went to the beach.': {
    why: "This has two mistakes. 'It was' needs the -ing form for weather happening at that time: 'it was raining'. And 'although' already links the two parts, so 'but' must go. So: 'Although it was raining, we went to the beach.'",
    not: {
      'Although it was rained, we went to the beach.':
        "'But' has gone, but 'was rained' is not the past of 'rain'. Use 'it was raining' or 'it rained'.",
      'Although it was raining, but we went to the beach.':
        "The verb is mended, but 'although' and 'but' do the same job. Use only one of them.",
      'Although it was rained, but we went to the beach.':
        "'Was rained' is wrong, and 'although' and 'but' cannot both join the same two parts.",
    },
    more: "Use one linking word for one link: 'Although it was cold, we swam' or 'It was cold, but we swam'.",
    tip: "If a sentence starts with 'although', do not put 'but' in the middle.",
  },
  'I am look forward to meet you on Friday.': {
    why: "This has two mistakes. 'Am' needs the -ing form: 'I am looking forward'. And in 'look forward to', 'to' is a preposition, so the next verb takes -ing: 'to meeting'. So: 'I am looking forward to meeting you on Friday.'",
    not: {
      'I am look forward to meeting you on Friday.':
        "'To meeting' is right, but after 'am' the verb needs -ing: 'looking'.",
      'I am looking forward for meeting you on Friday.':
        "'Looking' is right, but the phrase is 'look forward to', never 'for'.",
      'I am look forward for meeting you on Friday.':
        "After 'am' we need 'looking', and the phrase is 'look forward to'.",
    },
    more: "'Look forward to' ends many letters and emails: 'I look forward to hearing from you.'",
    tip: "Learn 'look forward to' plus -ing as one phrase. The 'to' here is not part of a verb.",
  },
  'My friend suggested to go to the cinema, but I was too much tired.': {
    why: "This has two mistakes. 'Suggest' is followed by the -ing form, not 'to': 'suggested going'. And before an adjective we use 'too' alone, not 'too much': 'too tired'. So: 'My friend suggested going to the cinema, but I was too tired.'",
    not: {
      'My friend suggested to going to the cinema, but I was too tired.':
        "'Too tired' is right, but 'suggest' takes the -ing form with no 'to'.",
      'My friend suggested going to the cinema, but I was too much tired.':
        "'Suggested going' is right, but before an adjective we say 'too', not 'too much'.",
      'My friend suggested to going to the cinema, but I was too much tired.':
        "'Suggest' takes -ing with no 'to', and an adjective takes 'too' alone.",
    },
    more: "'Too much' goes with a noun: 'too much noise'. 'Too' alone goes with an adjective: 'too hot'.",
    tip: "Remember 'suggest' plus -ing: 'She suggested taking a taxi.'",
  },
  'The man which lives next door have three dogs.': {
    why: "This has two mistakes. For a person, the relative pronoun is 'who', not 'which'. And 'the man' is one person, so 'have' becomes 'has'. So: 'The man who lives next door has three dogs.'",
    not: {
      'The man which lives next door has three dogs.':
        "'Has' is right, but 'which' is for things and animals. For a person, use 'who'.",
      'The man who lives next door haves three dogs.':
        "'Who' is right, but 'have' is irregular: after 'he' or 'the man' it becomes 'has', never 'haves'.",
      'The man which lives next door haves three dogs.':
        "A person takes 'who', and the form of 'have' for one person is 'has'.",
    },
    more: "'Who' for people, 'which' for things, and 'that' for either: 'the woman who called', 'the bag which I lost'.",
    tip: "The verb matches the main subject, 'the man', not the words in between.",
  },
  'When I arrived to the station, the train has already left.': {
    why: "This has two mistakes. We arrive 'at' a place such as a station, never 'to' it. And the train left before I arrived, both in the past, so we need the past perfect: 'had already left'. So: 'When I arrived at the station, the train had already left.'",
    not: {
      'When I arrived on the station, the train had already left.':
        "'Had already left' is right, but a station takes 'at', not 'on'.",
      'When I arrived at the station, the train has already left.':
        "'At' is right, but 'has left' belongs to now. Before another past event, use 'had left'.",
      'When I arrived on the station, the train has already left.':
        "A station takes 'at', and the earlier past event needs 'had left'.",
    },
    more: "The past perfect, 'had' plus a participle, shows which of two past events came first: 'When we got there, the shop had closed.'",
    tip: "Telling a story in the past? An action that happened even earlier takes 'had'.",
  },
  'I didn’t knew the answer, so I asked to my teacher.': {
    why: "This has two mistakes. After 'didn’t' the verb is the base form: 'didn’t know'. And 'ask' takes the person straight after it, with no 'to': 'asked my teacher'. So: 'I didn’t know the answer, so I asked my teacher.'",
    not: {
      'I didn’t knew the answer, so I asked my teacher.':
        "'Asked my teacher' is right, but after 'didn’t' the verb is 'know', not 'knew'.",
      'I didn’t know the answer, so I asked at my teacher.':
        "'Didn’t know' is right, but 'ask' takes the person with no preposition.",
      'I didn’t knew the answer, so I asked at my teacher.':
        "After 'didn’t' use 'know', and 'ask' takes the person straight after it.",
    },
    more: "'Ask someone' and 'ask someone for something': 'I asked my neighbour for some help.'",
    tip: "The past is shown once: 'didn’t know', never 'didn’t knew'.",
  },
  'Everybody were happy because the teacher gave us less homeworks.': {
    why: "This has two mistakes. 'Everybody' is singular, so its past verb is 'was'. And 'homework' is uncountable, so it has no -s. So: 'Everybody was happy because the teacher gave us less homework.'",
    not: {
      'Everybody were happy because the teacher gave us less homework.':
        "'Less homework' is right, but 'everybody' takes a singular verb: 'was'.",
      'Everybody was happy because the teacher gave us fewer homework.':
        "'Was' is right, but 'fewer' goes with plural nouns we can count. 'Homework' takes 'less'.",
      'Everybody were happy because the teacher gave us fewer homework.':
        "'Everybody' takes 'was', and an uncountable noun takes 'less', not 'fewer'.",
    },
    more: "'Less' goes with uncountable nouns ('less time'); 'fewer' goes with plural ones ('fewer people').",
    tip: "'Everybody', 'everyone' and 'nobody' take a singular verb, even though they mean many people.",
  },
  'He is very good in football and he plays every days.': {
    why: "This has two mistakes. We are good 'at' a sport or a skill: 'good at football'. And 'every' takes a singular noun: 'every day'. So: 'He is very good at football and he plays every day.'",
    not: {
      'He is very good on football and he plays every day.':
        "'Every day' is right, but a skill takes 'good at', not 'good on'.",
      'He is very good at football and he plays every days.':
        "'Good at' is right, but after 'every' the noun stays singular.",
      'He is very good on football and he plays every days.':
        "A skill takes 'at', and 'every' takes a singular noun.",
    },
    more: "'Every' and 'each' are followed by one: 'every week', 'each player'. 'All' takes the plural: 'all the players'.",
    tip: "Write 'every' plus a singular noun, and check the verb is singular too.",
  },
  'We are friends since we was children.': {
    why: "This has two mistakes. A friendship from the past up to now needs the present perfect: 'We have been friends since...'. And 'we' takes 'were' in the past. So: 'We have been friends since we were children.'",
    not: {
      'We are friends since we were children.':
        "'We were' is right, but 'since' joins the past to now, so the first verb must be 'have been'.",
      'We have been friends since we are children.':
        "'Have been' is right, but the childhood is in the past, so it takes 'were'.",
      'We are friends since we are children.':
        "The first verb needs 'have been', and the time after 'since' is past: 'were'.",
    },
    more: "After 'since', the starting point is often in the past simple: 'I have known her since we met at school.'",
    tip: "Main part: 'have' plus a participle. The 'since' part: the past simple.",
  },
  'If I would have more money, I will travel around the world.': {
    why: "This has two mistakes. This is an imagined situation, so the 'if' part takes the past, not 'would': 'If I had'. And the result takes 'would', not 'will': 'I would travel'. So: 'If I had more money, I would travel around the world.'",
    not: {
      'If I would have more money, I would travel around the world.':
        "'I would travel' is right, but 'would' does not go in the 'if' part. Use 'If I had'.",
      'If I had more money, I would to travel around the world.':
        "'If I had' is right, but 'would' is followed by the base verb with no 'to'.",
      'If I would have more money, I would to travel around the world.':
        "The 'if' part needs 'had', and 'would' takes the base verb with no 'to'.",
    },
    more: "This is the second conditional, for something unlikely or imagined: 'If I lived by the sea, I would swim each morning.'",
    tip: "Put 'would' in one half of the sentence only: the half without 'if'.",
  },
  'Yesterday my mother made me to clean my room before I can go out.': {
    why: "This has two mistakes. After 'made me' the verb is the base form with no 'to': 'made me clean'. And 'yesterday' puts the story in the past, so 'can' becomes 'could'. So: 'Yesterday my mother made me clean my room before I could go out.'",
    not: {
      'Yesterday my mother made me cleaning my room before I could go out.':
        "'Could' is right, but after 'made me' the verb is the base form, not the -ing form.",
      'Yesterday my mother made me clean my room before I can go out.':
        "'Made me clean' is right, but the going out was yesterday too, so 'can' must become 'could'.",
      'Yesterday my mother made me cleaning my room before I can go out.':
        "After 'made me' use the base verb, and the past of 'can' is 'could'.",
    },
    more: "'Make someone do' means force them to do it: 'The rain made us stay inside.'",
    tip: "Keep a past story in the past: 'can' becomes 'could', 'will' becomes 'would'.",
  },
  'There aren’t no buses after midnight, so we taked a taxi.': {
    why: "This has two mistakes. 'Aren’t' is already negative, so 'no' becomes 'any': 'aren’t any buses'. And 'take' is irregular: its past is 'took'. So: 'There aren’t any buses after midnight, so we took a taxi.'",
    not: {
      'There aren’t no buses after midnight, so we took a taxi.':
        "'Took' is right, but 'aren’t' and 'no' are two negatives. Use 'any'.",
      'There aren’t any buses after midnight, so we tooked a taxi.':
        "'Any' is right, but 'took' is already the past, so it takes no -ed.",
      'There aren’t no buses after midnight, so we tooked a taxi.':
        "There is still a double negative, and 'took' needs no -ed.",
    },
    more: "You can also say 'There are no buses after midnight', with one negative word.",
    tip: 'Check each half of a long sentence on its own: negatives first, then verbs.',
  },
  'There were no possibility of take a walk that day.': {
    why: "This is the first line of Jane Eyre, with two mistakes put in. 'Possibility' is singular, so we need 'there was'. And after the preposition 'of', a verb takes -ing: 'of taking'. Charlotte Brontë wrote: 'There was no possibility of taking a walk that day.'",
    not: {
      'There are no possibility of taking a walk that day.':
        "'Of taking' is right, but 'are' is plural and 'possibility' is singular. The sentence needs 'was', the singular past.",
      'There was no possibility of take a walk that day.':
        "'There was' is right, but after 'of' the verb needs -ing: 'taking'.",
      'There are no possibility of take a walk that day.':
        "'Possibility' is singular, so it takes 'was', not 'are', and after 'of' the verb takes -ing.",
    },
    more: "A verb after any preposition takes -ing: 'the chance of winning', 'the idea of leaving'.",
    tip: 'Writers often open a story in the past simple. Keep every verb in the past unless the time changes.',
  },
  'Can you give me some informations about the trip and what time it start?': {
    why: "This has two mistakes. 'Information' is uncountable, so it has no -s. And 'it' needs the -s form of the verb: 'what time it starts'. So: 'Can you give me some information about the trip and what time it starts?'",
    not: {
      'Can you give me some informations about the trip and what time it starts?':
        "'It starts' is right, but 'information' has no plural.",
      'Can you give me some information about the trip and what time it starting?':
        "'Information' is right, but 'starting' alone is not a full verb. Use 'it starts'.",
      'Can you give me some informations about the trip and what time it starting?':
        "'Information' takes no -s, and the verb after 'it' should be 'starts'.",
    },
    more: "After 'what time' inside a longer question, keep statement order: 'what time it starts', not 'what time does it start'.",
    tip: "Check uncountable nouns such as 'information' and 'luggage' every time you write 'some'.",
  },
  'I don’t know where does she live, but I can ask to her brother.': {
    why: "This has two mistakes. Inside a longer sentence, a question takes statement order and no 'does': 'where she lives'. And 'ask' takes the person straight after it, with no 'to'. So: 'I don’t know where she lives, but I can ask her brother.'",
    not: {
      'I don’t know where she live, but I can ask her brother.':
        "The order is right, but 'she' needs the -s form: 'she lives'.",
      'I don’t know where she lives, but I can ask to her brother.':
        "'Where she lives' is right, but 'ask' takes no 'to' before the person.",
      'I don’t know where she live, but I can ask to her brother.':
        "'She' needs 'lives', and 'ask' takes the person with no 'to'.",
    },
    more: "When 'does' disappears, its -s goes back onto the verb: 'Where does she live?' becomes 'I know where she lives.'",
    tip: "After 'I don’t know', 'I wonder' or 'Can you tell me', use statement order.",
  },
  'Yesterday I have bought a new phone, but it doesn’t works.': {
    why: "This has two mistakes. 'Yesterday' is a finished time, so we use the past simple 'bought', not 'have bought'. And after 'doesn’t' the verb has no -s: 'doesn’t work'. So: 'Yesterday I bought a new phone, but it doesn’t work.'",
    not: {
      'Yesterday I have bought a new phone, but it doesn’t work.':
        "'Doesn’t work' is right, but 'yesterday' cannot go with 'have bought'.",
      'Yesterday I bought a new phone, but it don’t work.':
        "'Bought' is right, but 'it' takes 'doesn’t', not 'don’t'.",
      'Yesterday I have bought a new phone, but it don’t work.':
        "'Yesterday' needs the past simple, and 'it' takes 'doesn’t'.",
    },
    more: 'A sentence can mix times: the buying was yesterday (past simple), but the phone does not work now (present).',
    tip: "Put a finished time word with the past simple, and keep the -s on 'does' only.",
  },
  'My parents want that I study medicine, but I am prefer art.': {
    why: "This has two mistakes. 'Want' is followed by a person and 'to': 'want me to study'. And 'prefer' is a verb, so it does not need 'am': 'I prefer art'. So: 'My parents want me to study medicine, but I prefer art.'",
    not: {
      'My parents want me study medicine, but I prefer art.':
        "'I prefer art' is right, but after 'want me' the verb needs 'to'.",
      'My parents want me to study medicine, but I am prefer art.':
        "'Want me to' is right, but 'prefer' is a verb and takes no 'am'.",
      'My parents want me study medicine, but I am prefer art.':
        "After 'want me' we need 'to', and 'prefer' needs no 'am'.",
    },
    more: "School subjects take no article: 'I prefer history', 'She studies chemistry'.",
    tip: "Do not put 'am', 'is' or 'are' before a normal verb in the present simple.",
  },
  'The boys was playing football when it start to rain.': {
    why: "This has two mistakes. 'The boys' is plural, so the past of 'be' is 'were': 'were playing'. And the rain began at one moment in the past, so 'start' needs the past simple: 'started'. So: 'The boys were playing football when it started to rain.'",
    not: {
      'The boys was playing football when it started to rain.':
        "'Started' is right, but a plural subject takes 'were', not 'was'.",
      'The boys were playing football when it starting to rain.':
        "'Were playing' is right, but 'starting' alone is not a full verb. The moment needs 'started'.",
      'The boys was playing football when it starting to rain.':
        "A plural takes 'were', and the moment the rain began needs 'started'.",
    },
    more: "The past continuous ('were playing') is the longer action; the past simple ('started') is what happened in the middle of it.",
    tip: "Use 'was' or 'were' plus -ing for the background, and the past simple for the event.",
  },
  'I’m agree that we should to protect the environment.': {
    why: "This has two mistakes. 'Agree' is a verb, so it does not take 'am': 'I agree'. And after 'should' the verb has no 'to': 'should protect'. So: 'I agree that we should protect the environment.'",
    not: {
      'I agrees that we should protect the environment.':
        "'Should protect' is right, but with 'I' the verb has no -s.",
      'I agree that we should to protect the environment.':
        "'I agree' is right, but 'should' is followed by the base verb with no 'to'.",
      'I agrees that we should to protect the environment.':
        "With 'I' there is no -s, and 'should' takes no 'to'.",
    },
    more: "In a discussion essay you can write 'I agree that...' or 'I strongly agree that...'.",
    tip: "Modal verbs, such as 'should', 'must' and 'can', never take 'to' after them.",
  },
  'He drives very careful because the roads are very danger.': {
    why: "This has two mistakes. To describe how he drives, we need the adverb 'carefully'. And after 'are very' we need the adjective 'dangerous'; 'danger' is a noun. So: 'He drives very carefully because the roads are very dangerous.'",
    not: {
      'He drives very careful because the roads are very dangerous.':
        "'Dangerous' is right, but a verb like 'drives' is described by an adverb: 'carefully'.",
      'He drives very carefully because the roads are very dangerously.':
        "'Carefully' is right, but after 'are' we need the adjective 'dangerous', not an adverb.",
      'He drives very careful because the roads are very dangerously.':
        "The verb needs the adverb 'carefully', and after 'are' we need the adjective.",
    },
    more: "An adverb describes a verb ('speak quietly'); an adjective describes a noun or follows 'be' ('The room is quiet').",
    tip: "After 'be', use an adjective. After an action verb, use an adverb.",
  },
  'My sister is married with a man who work in Dubai.': {
    why: "This has two mistakes. We are married 'to' a person. And 'who' stands for 'a man', one person, so the verb needs -s: 'who works'. So: 'My sister is married to a man who works in Dubai.'",
    not: {
      'My sister is married at a man who works in Dubai.':
        "'Who works' is right, but 'married' takes 'to', not 'at'.",
      'My sister is married to a man who work in Dubai.':
        "'Married to' is right, but 'who' means one man here, so the verb is 'works'.",
      'My sister is married at a man who work in Dubai.':
        "'Married' takes 'to', and the verb after 'who' needs -s.",
    },
    more: "After 'who', the verb agrees with the noun before it: 'a man who works', 'people who work'.",
    tip: "Find the noun that 'who' replaces. Is it one or more? Then choose the verb.",
  },
  'How long time do you live in this city?': {
    why: "This has two mistakes. The question is 'How long', with no 'time'. And a time from the past up to now needs the present perfect: 'have you lived'. So: 'How long have you lived in this city?'",
    not: {
      'How long time have you lived in this city?':
        "'Have you lived' is right, but English says 'How long', not 'How long time'.",
      'How long have you live in this city?':
        "'How long' is right, but after 'have' we need the participle 'lived'.",
      'How long time have you live in this city?':
        "'How long' needs no 'time', and 'have' needs 'lived'.",
    },
    more: "You can also ask 'How long have you been living here?' Both are correct.",
    tip: "Answer with 'for' or 'since': 'I have lived here since 2018.'",
  },
  'I can’t to come to your party because I have help my parents.': {
    why: "This has two mistakes. After 'can’t' the verb has no 'to': 'can’t come'. And 'have' meaning 'must' needs 'to': 'have to help'. So: 'I can’t come to your party because I have to help my parents.'",
    not: {
      'I can’t coming to your party because I have to help my parents.':
        "'Have to help' is right, but after 'can’t' the verb is the base form.",
      'I can’t come to your party because I have help my parents.':
        "'Can’t come' is right, but 'have' for a duty needs 'to': 'have to help'.",
      'I can’t coming to your party because I have help my parents.':
        "After 'can’t' use the base verb, and a duty needs 'have to'.",
    },
    more: "'Can’t' takes no 'to', but 'have to' always has it. 'I can’t stay. I have to go.'",
    tip: "To say no politely, give a reason with 'have to': 'Sorry, I have to work.'",
  },
  'She is the more intelligent student in the class and she always help others.': {
    why: "This has two mistakes. Comparing one student with the whole class needs the superlative: 'the most intelligent'. And 'she' needs the -s form: 'she always helps'. So: 'She is the most intelligent student in the class and she always helps others.'",
    not: {
      'She is the more intelligent student in the class and she always helps others.':
        "'Helps' is right, but one compared with all the rest needs 'the most'.",
      'She is the most intelligent student in the class and she always helping others.':
        "'The most' is right, but 'helping' alone is not a full verb. Use 'helps'.",
      'She is the more intelligent student in the class and she always helping others.':
        "One out of a whole class needs 'the most', and the verb should be 'helps'.",
    },
    more: "'More' compares two things; 'the most' compares one with all the others: 'the most useful tool in the box'.",
    tip: "If the sentence says 'in the class' or 'in the world', you need a superlative.",
  },
  'Yesterday I saw a film. A film was about the history of the Egypt.': {
    why: "This has two mistakes, both articles. When we mention something a second time, it takes 'the': 'The film'. And a country name like Egypt takes no 'the'. So: 'Yesterday I saw a film. The film was about the history of Egypt.'",
    not: {
      'Yesterday I saw a film. Film was about the history of Egypt.':
        "'Of Egypt' is right, but the second mention of a singular noun needs 'the'.",
      'Yesterday I saw a film. The film was about the history of the Egypt.':
        "'The film' is right, but Egypt, like most countries, takes no 'the'.",
      'Yesterday I saw a film. Film was about the history of the Egypt.':
        "The second mention needs 'the', and Egypt takes no article.",
    },
    more: "First mention: 'a'. Second mention: 'the'. 'I found a coat. The coat was blue.'",
    tip: 'When you read your own writing, check every noun you mention twice.',
  },
  'Could you tell me where is the post office and when it close?': {
    why: "This has two mistakes. After 'Could you tell me', a question takes statement order: 'where the post office is'. And 'it' needs the -s form: 'when it closes'. So: 'Could you tell me where the post office is and when it closes?'",
    not: {
      'Could you tell me where is the post office and when it closes?':
        "'When it closes' is right, but the first part also needs statement order: 'where the post office is'.",
      'Could you tell me where the post office is and when does it close?':
        "The first part is right, but the second must also be in statement order, with no 'does'.",
      'Could you tell me where is the post office and when does it close?':
        "Both parts use direct question order. After 'Could you tell me', use statement order.",
    },
    more: "Polite questions often start 'Could you tell me' or 'Do you know'. The rest of the sentence then works like a statement.",
    tip: "Say the statement first: 'The post office is there. It closes at five.' Then add 'Could you tell me where... when...'.",
  },
  'The weather was so much bad that we must stay inside all day.': {
    why: "This has two mistakes. Before an adjective we use 'so', not 'so much': 'so bad'. And in a past story 'must' becomes 'had to': 'we had to stay'. So: 'The weather was so bad that we had to stay inside all day.'",
    not: {
      'The weather was such bad that we had to stay inside all day.':
        "'Had to' is right, but 'such' goes before a noun ('such bad weather'). Before an adjective alone, use 'so'.",
      'The weather was so bad that we must stay inside all day.':
        "'So bad' is right, but the story is in the past, so 'must' becomes 'had to'.",
      'The weather was such bad that we must stay inside all day.':
        "Before an adjective we use 'so', and the past of 'must' is 'had to'.",
    },
    more: "'So' plus an adjective, 'such' plus a noun: 'so cold', 'such a cold day'.",
    tip: "'Must' has no past form. For the past, use 'had to'.",
  },
  'I am interesting in learn new languages.': {
    why: "This has two mistakes. You feel the interest, so the adjective is 'interested', not 'interesting'. And after the preposition 'in', the verb takes -ing: 'learning'. So: 'I am interested in learning new languages.'",
    not: {
      'I am interesting in learning new languages.':
        "'Learning' is right, but 'interesting' describes the thing, not you. You are 'interested'.",
      'I am interested in to learn new languages.':
        "'Interested in' is right, but after 'in' the verb takes -ing, not 'to'.",
      'I am interesting in to learn new languages.':
        "You are 'interested', and after 'in' the verb takes -ing.",
    },
    more: "'Interested in' can be followed by a noun ('interested in music') or by -ing ('interested in cooking').",
    tip: "Only an -ing form can follow a preposition such as 'in', 'at' or 'of'.",
  },
  'My grandfather has 75 years and he still walk every day.': {
    why: "This has two mistakes. English gives an age with 'be', not 'have': 'is 75 years old'. And 'he' needs the -s form: 'he still walks'. So: 'My grandfather is 75 years old and he still walks every day.'",
    not: {
      'My grandfather is 75 years and he still walks every day.':
        "'Walks' is right, and 'is' is right, but '75 years' alone does not give an age. Add 'old', or say just 'is 75'.",
      'My grandfather is 75 years old and he still walk every day.':
        "The age is right, but 'he' takes 'walks'.",
      'My grandfather is 75 years and he still walk every day.':
        "The age needs 'years old', and 'he' takes 'walks'.",
    },
    more: "'Still' goes before the main verb: 'He still works.' With 'be' it goes after: 'He is still busy.'",
    tip: "Give an age as 'is 75' or 'is 75 years old', never 'has 75'.",
  },
  'The film was so bored that many people leaved before the end.': {
    why: "This has two mistakes. The film causes the feeling, so it is 'boring', not 'bored'. And 'leave' is irregular: its past is 'left'. So: 'The film was so boring that many people left before the end.'",
    not: {
      'The film was so bored that many people left before the end.':
        "'Left' is right, but a film cannot feel bored. It is 'boring'.",
      'The film was so boring that many people lefted before the end.':
        "'Boring' is right, but 'left' is already the past and takes no -ed.",
      'The film was so bored that many people lefted before the end.':
        "The film is 'boring', and the past of 'leave' is 'left'.",
    },
    more: "'So' plus an adjective plus 'that' gives a result: 'It was so hot that we stayed in.'",
    tip: "Things are -ing, people feel -ed: 'a tiring day', 'a tired child'.",
  },
  'I will to buy a new laptop because my old one is broke.': {
    why: "This has two mistakes. After 'will' the verb has no 'to': 'will buy'. And a thing that does not work is 'broken'; 'broke' is the past of 'break'. So: 'I will buy a new laptop because my old one is broken.'",
    not: {
      'I will buying a new laptop because my old one is broken.':
        "'Broken' is right, but after 'will' the verb is the base form, not -ing.",
      'I will buy a new laptop because my old one is broke.':
        "'Will buy' is right, but after 'is' we need the participle 'broken'.",
      'I will buying a new laptop because my old one is broke.':
        "After 'will' use the base verb, and a thing that does not work is 'broken'.",
    },
    more: "Three forms: 'break, broke, broken'. 'I broke it' (past) but 'It is broken' (its state now).",
    tip: "To describe the state something is in, use 'is' or 'are' with the third form of the verb: 'broken', 'stolen', 'lost'.",
  },
  'We didn’t went to the party because we was too tired.': {
    why: "This has two mistakes. After 'didn’t' the verb is the base form: 'didn’t go'. And 'we' takes 'were' in the past: 'we were too tired'. So: 'We didn’t go to the party because we were too tired.'",
    not: {
      'We didn’t went to the party because we were too tired.':
        "'We were' is right, but after 'didn’t' the verb is 'go'.",
      'We didn’t go to the party because we are too tired.':
        "'Didn’t go' is right, but the tiredness was then, in the past, so it needs 'were'.",
      'We didn’t went to the party because we are too tired.':
        "After 'didn’t' use 'go', and the reason is in the past: 'were'.",
    },
    more: "'Too' plus an adjective means more than is good or possible: 'too young to drive', 'too late to call'.",
    tip: "When 'because' gives the reason for a past event, keep the reason in the past too.",
  },
  'Usually I am going to work on foot, but yesterday I taked the bus.': {
    why: "This has two mistakes. 'Usually' shows a habit, so we use the present simple: 'I go', not 'I am going'. And 'take' is irregular: its past is 'took'. So: 'Usually I go to work on foot, but yesterday I took the bus.'",
    not: {
      'Usually I goes to work on foot, but yesterday I took the bus.':
        "'Took' is right, and the tense is now the present simple, but 'I' takes 'go', not 'goes'.",
      'Usually I go to work on foot, but yesterday I taked the bus.':
        "'I go' is right, but 'take' has an irregular past: 'took', not 'taked'.",
      'Usually I goes to work on foot, but yesterday I taked the bus.':
        "'I' takes 'go', and the past of 'take' is 'took'.",
    },
    more: 'One sentence can hold two times: a habit in the present simple and one past event in the past simple.',
    tip: "For a habit, frequency words such as 'usually', 'often' and 'sometimes' go with the present simple.",
  },
  'She can speak English very good, but she can’t writes it.': {
    why: "This has two mistakes. To say how she speaks, we need the adverb 'well', not the adjective 'good'. And after 'can’t' the verb is the base form: 'can’t write'. So: 'She can speak English very well, but she can’t write it.'",
    not: {
      'She can speak English very good, but she can’t write it.':
        "'Can’t write' is right, but 'speak' is described by the adverb 'well'.",
      'She can speak English very well, but she can’t to write it.':
        "'Very well' is right, but 'can’t' takes the base verb with no 'to'.",
      'She can speak English very good, but she can’t to write it.':
        "We need 'well' to describe how she speaks, and 'can’t' takes no 'to'.",
    },
    more: "'Good' is an adjective ('a good speaker'); 'well' is its adverb ('she speaks well'). 'Well' can also mean healthy.",
    tip: "After an action verb, ask 'how?' The answer needs an adverb.",
  },
  'Every students in my class has a laptop, but nobody bring it to school.': {
    why: "This has two mistakes. 'Every' takes a singular noun: 'Every student'. And 'nobody' is singular, so the verb needs -s: 'nobody brings'. So: 'Every student in my class has a laptop, but nobody brings it to school.'",
    not: {
      'Every of the students in my class has a laptop, but nobody brings it to school.':
        "'Nobody brings' is right, but 'every' cannot be followed by 'of the'. Say 'Every student' or 'Each of the students'.",
      'Every student in my class has a laptop, but nobody bring it to school.':
        "'Every student' is right, but 'nobody' takes the -s form: 'brings'.",
      'Every of the students in my class has a laptop, but nobody bring it to school.':
        "'Every of' is wrong, and 'nobody' needs 'brings'.",
    },
    more: "'Each of' is fine: 'Each of the students has a locker.' 'Every' needs a noun straight after it.",
    tip: "Words such as 'every', 'each', 'nobody' and 'somebody' take a singular verb.",
  },
  'I have been to Paris last year and I want go there again.': {
    why: "This has two mistakes. 'Last year' is a finished time, so we use the past simple: 'I went'. And 'want' is followed by 'to' and the base verb: 'want to go'. So: 'I went to Paris last year and I want to go there again.'",
    not: {
      'I have been to Paris last year and I want to go there again.':
        "'Want to go' is right, but 'last year' cannot go with 'have been'.",
      'I went to Paris last year and I want going there again.':
        "'Went' is right, but 'want' takes 'to' and the base verb, not -ing.",
      'I have been to Paris last year and I want going there again.':
        "'Last year' needs the past simple, and 'want' takes 'to go'.",
    },
    more: "Without a finished time, 'have been' is right: 'I have been to Paris twice.'",
    tip: "Remember 'want to', 'hope to', 'plan to': all take 'to' and the base verb.",
  },
  'There are a lot of traffics in the city centre.': {
    why: "This has two mistakes. 'Traffic' is uncountable, so it has no -s. And an uncountable noun after 'a lot of' takes a singular verb: 'There is'. So: 'There is a lot of traffic in the city centre.'",
    not: {
      'There are a lot of traffic in the city centre.':
        "'Traffic' is right, but an uncountable noun takes 'there is', not 'there are'.",
      'There is many traffic in the city centre.':
        "'There is' is right, but 'many' goes with plural nouns. Use 'a lot of' or 'much'.",
      'There are many traffic in the city centre.':
        "'Traffic' is uncountable, so it takes neither 'many' nor 'there are'.",
    },
    more: "'A lot of' works with both kinds: 'a lot of cars are...', 'a lot of traffic is...'. The noun decides the verb.",
    tip: "Find the noun after 'a lot of'. Plural noun: 'are'. Uncountable noun: 'is'.",
  },
  'My father doesn’t let me to go out alone at the night.': {
    why: "This has two mistakes. After 'let me' the verb is the base form with no 'to': 'let me go'. And we say 'at night', with no article. So: 'My father doesn’t let me go out alone at night.'",
    not: {
      'My father doesn’t let me going out alone at night.':
        "'At night' is right, but after 'let me' the verb is the base form, not -ing.",
      'My father doesn’t let me go out alone at the night.':
        "'Let me go' is right, but the phrase is 'at night', with no 'the'.",
      'My father doesn’t let me going out alone at the night.':
        "After 'let me' use the base verb, and 'at night' takes no article.",
    },
    more: "'Let' means 'allow' and is one of very few verbs followed by a person and a base verb: 'Let him speak.'",
    tip: "Learn 'at night' as a fixed phrase, with no 'the'.",
  },
  'The bus were late, so the teacher was angry on me.': {
    why: "This has two mistakes. 'The bus' is one, so the past of 'be' is 'was'. And we are angry 'with' a person. So: 'The bus was late, so the teacher was angry with me.'",
    not: {
      'The bus were late, so the teacher was angry with me.':
        "'Angry with me' is right, but one bus takes 'was', not 'were'.",
      'The bus was late, so the teacher was angry to me.':
        "'The bus was' is right, but 'angry' takes 'with' a person, not 'to'.",
      'The bus were late, so the teacher was angry to me.':
        "One bus takes 'was', and 'angry' takes 'with' a person.",
    },
    more: "We are angry 'with' a person and 'about' a thing: 'angry with her', 'angry about the noise'.",
    tip: "Learn feeling adjectives with their prepositions: 'angry with', 'pleased with', 'worried about'.",
  },
  'I want improve my English, so I read a lot of book.': {
    why: "This has two mistakes. 'Want' is followed by 'to' and the base verb: 'want to improve'. And a countable noun after 'a lot of' is plural: 'books'. So: 'I want to improve my English, so I read a lot of books.'",
    not: {
      'I want improving my English, so I read a lot of books.':
        "'Books' is right, but 'want' takes 'to' and the base verb, not -ing.",
      'I want to improve my English, so I read a lot of book.':
        "'Want to improve' is right, but 'book' must be plural after 'a lot of'.",
      'I want improving my English, so I read a lot of book.':
        "'Want' takes 'to improve', and 'a lot of' needs the plural 'books'.",
    },
    more: "'So' introduces a result: 'I was hungry, so I made a sandwich.'",
    tip: "Check a countable noun after 'a lot of', 'many' or 'several': it must be plural.",
  },
  'When I was child, I use to play football in the street.': {
    why: "This has two mistakes. A singular noun such as 'child' needs 'a': 'When I was a child'. And a past habit is 'used to', with -d: 'I used to play'. So: 'When I was a child, I used to play football in the street.'",
    not: {
      'When I was child, I used to play football in the street.':
        "'Used to play' is right, but 'child' needs 'a' before it.",
      'When I was a child, I used to playing football in the street.':
        "'A child' is right, but 'used to' for a past habit is followed by the base verb.",
      'When I was child, I used to playing football in the street.':
        "'Child' needs 'a', and 'used to' takes the base verb.",
    },
    more: "'Used to' shows something you did often in the past but no longer do: 'We used to live in Leeds.'",
    tip: "In questions and negatives, the -d goes: 'Did you use to...?', 'I didn’t use to...'.",
  },
  'My doctor told me don’t eat so much sugars.': {
    why: "This has two mistakes. To report an order not to do something, use 'told me not to' and the base verb. And 'sugar' as food is uncountable: 'so much sugar'. So: 'My doctor told me not to eat so much sugar.'",
    not: {
      'My doctor told me to don’t eat so much sugar.':
        "'So much sugar' is right, but 'don’t' cannot follow 'to'. The negative is 'not to eat'.",
      'My doctor told me not to eat so much sugars.':
        "'Not to eat' is right, but 'much' goes with uncountable nouns, so 'sugar' has no -s.",
      'My doctor told me to don’t eat so much sugars.':
        "The negative is 'not to', and after 'much' the noun is uncountable: 'sugar'.",
    },
    more: "Reported orders: 'She told us to sit' and 'She told us not to talk'. 'Not' goes before 'to'.",
    tip: "To report a 'Don’t...' order, change it to 'told someone not to...'.",
  },
  'I’m tired because I didn’t slept good last night.': {
    why: "This has two mistakes. After 'didn’t' the verb is the base form: 'didn’t sleep'. And to say how you slept, use the adverb 'well', not 'good'. So: 'I’m tired because I didn’t sleep well last night.'",
    not: {
      'I’m tired because I didn’t slept well last night.':
        "'Well' is right, but after 'didn’t' the verb is 'sleep', not 'slept'.",
      'I’m tired because I didn’t sleep nice last night.':
        "'Didn’t sleep' is right, but 'nice' is an adjective. To say how you slept, use 'well'.",
      'I’m tired because I didn’t slept nice last night.':
        "After 'didn’t' use 'sleep', and the adverb is 'well'.",
    },
    more: "'Sleep well' is also a kind thing to say at bedtime: 'Good night. Sleep well.'",
    tip: "After 'did', 'didn’t' or 'did you', the verb is always in its base form.",
  },
  'Last night we watch a film very funny.': {
    why: "This has two mistakes. 'Last night' is past, so 'watch' needs -ed: 'watched'. And the adjective goes before the noun: 'a very funny film'. So: 'Last night we watched a very funny film.'",
    not: {
      'Last night we watching a very funny film.':
        "The word order is right, but 'watching' alone is not a full verb. For a finished time, use 'watched'.",
      'Last night we watched a film very funny.':
        "'Watched' is right, but 'very funny' must come before 'film'.",
      'Last night we watching a film very funny.':
        "The verb needs the past 'watched', and 'very funny' goes before the noun.",
    },
    more: "'Very' stays with its adjective, and both go before the noun: 'a very old house', 'a really good idea'.",
    tip: "Build the noun phrase as article, 'very', adjective, noun.",
  },
  'I am waiting you since nine o’clock.': {
    why: "This has two mistakes. An action from the past up to now takes the present perfect continuous: 'I have been waiting'. And 'wait' takes 'for' before the person. So: 'I have been waiting for you since nine o’clock.'",
    not: {
      'I am waiting for you since nine o’clock.':
        "'Waiting for you' is right, but 'since' joins the past to now, so the tense must be 'have been waiting'.",
      'I have been waiting to you since nine o’clock.':
        "The tense is right, but 'wait' takes 'for', not 'to'.",
      'I am waiting to you since nine o’clock.':
        "'Since' needs 'have been waiting', and 'wait' takes 'for'.",
    },
    more: "The present perfect continuous stresses how long something has gone on: 'It has been raining all day.'",
    tip: "With 'since' or 'for' and an action still going on, use 'have been' plus -ing.",
  },
  'He is a person very kind and he always helps to his neighbours.': {
    why: "This has two mistakes. The adjective goes before the noun: 'a very kind person'. And 'help' takes its object straight after it, with no 'to': 'helps his neighbours'. So: 'He is a very kind person and he always helps his neighbours.'",
    not: {
      'He is a kind very person and he always helps his neighbours.':
        "'Helps his neighbours' is right, but 'very' must come before the adjective: 'very kind'.",
      'He is a very kind person and he always helps to his neighbours.':
        "The word order is right, but 'help' takes no 'to' before the person.",
      'He is a kind very person and he always helps to his neighbours.':
        "'Very' goes before 'kind', and 'help' takes the person with no 'to'.",
    },
    more: "'Help someone do something' needs no 'to' either, though 'help someone to do' is also correct.",
    tip: "Verbs such as 'help', 'call' and 'meet' take the person straight after them.",
  },
  'I prefer tea than coffee, but my sister prefer coffee.': {
    why: "This has two mistakes. 'Prefer' compares with 'to', not 'than': 'prefer tea to coffee'. And 'my sister' is one person, so the verb needs -s: 'prefers'. So: 'I prefer tea to coffee, but my sister prefers coffee.'",
    not: {
      'I prefer tea than coffee, but my sister prefers coffee.':
        "'Prefers' is right, but 'prefer' is followed by 'to', not 'than'.",
      'I prefer tea to coffee, but my sister is prefer coffee.':
        "'Prefer tea to' is right, but 'prefer' is a verb and takes no 'is'.",
      'I prefer tea than coffee, but my sister is prefer coffee.':
        "'Prefer' takes 'to', and it needs no 'is'.",
    },
    more: "With 'would rather', we do use 'than': 'I would rather have tea than coffee.'",
    tip: "Learn the pattern 'prefer A to B': 'I prefer walking to driving.'",
  },
  'I haven’t never eaten sushi, but I would like try it.': {
    why: "This has two mistakes. 'Haven’t' and 'never' are two negatives, so we keep one: 'I have never eaten'. And 'would like' is followed by 'to': 'would like to try'. So: 'I have never eaten sushi, but I would like to try it.'",
    not: {
      'I have never ate sushi, but I would like to try it.':
        "'Would like to try' is right, and 'have never' is right, but 'have' needs the participle 'eaten', not 'ate'.",
      'I have never eaten sushi, but I would like try it.':
        "'Have never eaten' is right, but 'would like' needs 'to' before the next verb.",
      'I have never ate sushi, but I would like try it.':
        "'Have' needs 'eaten', and 'would like' needs 'to try'.",
    },
    more: "You can also say 'I haven’t ever eaten sushi', with one negative. 'Never' and 'not ever' mean the same.",
    tip: "Three forms of 'eat': 'eat, ate, eaten'. After 'have', use the third.",
  },
  'I’m not enough tall to play basketball, so I play the tennis.': {
    why: "This has two mistakes. 'Enough' goes after an adjective: 'tall enough'. And a sport takes no article: 'play tennis'. So: 'I’m not tall enough to play basketball, so I play tennis.'",
    not: {
      'I’m not enough tall to play basketball, so I play tennis.':
        "'Play tennis' is right, but 'enough' comes after the adjective: 'tall enough'.",
      'I’m not tall enough to play basketball, so I play a tennis.':
        "'Tall enough' is right, but a sport takes no article at all.",
      'I’m not enough tall to play basketball, so I play a tennis.':
        "'Enough' goes after 'tall', and a sport takes no article.",
    },
    more: "With a noun, 'enough' goes before it: 'enough money', 'enough time'. With an adjective, after it: 'old enough'.",
    tip: "Remember: adjective plus 'enough', but 'enough' plus noun.",
  },
  'The shoes was too much expensive, so I didn’t buy them.': {
    why: "This has two mistakes. 'Shoes' is plural, so the past of 'be' is 'were'. And before an adjective we use 'too', not 'too much': 'too expensive'. So: 'The shoes were too expensive, so I didn’t buy them.'",
    not: {
      'The shoes is too expensive, so I didn’t buy them.':
        "'Too expensive' is right, but 'shoes' is plural and this is the past: 'were'.",
      'The shoes were too much expensive, so I didn’t buy them.':
        "'Were' is right, but an adjective takes 'too' alone.",
      'The shoes is too much expensive, so I didn’t buy them.':
        "A plural in the past takes 'were', and an adjective takes 'too', not 'too much'.",
    },
    more: "'Too much' goes before an uncountable noun: 'too much money'. 'Too many' goes before a plural: 'too many shoes'.",
    tip: "'Them' at the end must match a plural noun, such as 'shoes'. Check the verb matches it too.",
  },
  'Man is the only creature that consume without produce.': {
    why: "This is from Old Major’s speech in chapter 1 of Animal Farm, with two mistakes put in. 'That' stands for 'the only creature', one, so the verb needs -s: 'consumes'. And after 'without' a verb takes -ing: 'producing'. Orwell wrote: 'Man is the only creature that consumes without producing.'",
    not: {
      'Man is the only creature that consume without producing.':
        "'Without producing' is right, but 'that' means one creature here, so the verb is 'consumes'.",
      'Man is the only creature that consumes without to produce.':
        "'Consumes' is right, but after 'without' we need -ing, not 'to'.",
      'Man is the only creature that consume without to produce.':
        "The verb after 'that' needs -s, and 'without' takes -ing.",
    },
    more: "Orwell uses 'Man' for all people, as older writers often did. Old Major means that humans take food from animals and give nothing back.",
    tip: "In an essay, a verb after a preposition takes -ing: 'by working', 'without asking'.",
  },
  'I will to work more hard.': {
    why: "This is Boxer’s motto in Animal Farm, with two mistakes put in. After 'will' the verb has no 'to': 'will work'. And 'hard' is short, so it takes -er: 'harder'. Orwell wrote: 'I will work harder.'",
    not: {
      'I will working harder.':
        "'Harder' is right, but after 'will' the verb is the base form, not -ing.",
      'I will work more hard.':
        "'Will work' is right, but a one-syllable word takes -er, not 'more'.",
      'I will working more hard.': "After 'will' use the base verb, and 'hard' takes -er.",
    },
    more: 'Boxer, the farm’s strongest horse, answers every problem with these words. Readers often see his loyalty as both noble and sad.',
    tip: "Short words that compare take -er even as adverbs: 'work harder', 'arrive earlier'.",
  },
  'It were past two when he go to bed.': {
    why: "This is from Stave 2 of A Christmas Carol, with two mistakes put in. 'It' takes 'was' in the past, never 'were'. And the story is in the past, so 'go' must be 'went'. Dickens wrote: 'It was past two when he went to bed.'",
    not: {
      'It were past two when he went to bed.': "'Went' is right, but 'it' takes 'was', not 'were'.",
      'It was past two when he goed to bed.':
        "'Was' is right, but 'go' is irregular: its past is 'went', not 'goed'.",
      'It were past two when he goed to bed.': "'It' takes 'was', and the past of 'go' is 'went'.",
    },
    more: 'Scrooge has just heard the clock strike twelve, which seems impossible, because he went to bed after two. The muddle is the first sign that the night is strange.',
    tip: "'Go to bed' takes no article: 'I go to bed at ten.'",
  },
  'The voice were soft and gently.': {
    why: "This is from Stave 2 of A Christmas Carol, with two mistakes put in. 'The voice' is singular, so it takes 'was'. And after 'was' we need adjectives, so 'gently' must be 'gentle'. Dickens wrote: 'The voice was soft and gentle.'",
    not: {
      'The voices was soft and gentle.':
        "'Gentle' is right, but 'voices' is plural, so it would need 'were'. There is only one voice.",
      'The voice was soft and gently.':
        "'Was' is right, but after 'was' we need the adjective 'gentle', not the adverb.",
      'The voices was soft and gently.':
        "One voice takes 'was', and after 'was' we need the adjective 'gentle'.",
    },
    more: 'This is the voice of the Ghost of Christmas Past. Dickens adds that it was strangely low, as if it came from far away.',
    tip: "Linking verbs such as 'was', 'seemed' and 'sounded' take adjectives: 'It sounded soft.'",
  },
  'There are no doubt that Marley were dead.': {
    why: "This is from the opening of A Christmas Carol, with two mistakes put in. 'Doubt' is singular, so we need 'there is'. And 'Marley' is one person in the past, so the verb is 'was'. Dickens wrote: 'There is no doubt that Marley was dead.'",
    not: {
      'There are no doubt that Marley was dead.':
        "'Was dead' is right, but 'no doubt' is singular, so it takes 'there is'.",
      'There is no doubt that Marley dead.':
        "'There is' is right, but the second part has no verb. It needs 'was'.",
      'There are no doubt that Marley dead.':
        "'No doubt' takes 'there is', and the second part needs the verb 'was'.",
    },
    more: "The narrator says 'is' because there is no doubt now, as he tells the story, and 'was' because Marley died in the past.",
    tip: "Every clause needs its own verb. Check the part after 'that' as well as the first part.",
  },
  'I am as light than a feather, I am as happy like an angel, I am as merry as a schoolboy.': {
    why: "This is Scrooge on Christmas morning in Stave 5 of A Christmas Carol, with two mistakes put in. A comparison of sameness always uses 'as ... as', never 'than' or 'like' at the end. Dickens wrote: 'I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy.'",
    not: {
      'I am as lighter as a feather, I am as happy as an angel, I am as merry as a schoolboy.':
        "The second comparison is right, but 'as ... as' takes the plain adjective 'light', not 'lighter'.",
      'I am as light as a feather, I am as happy like an angel, I am as merry as a schoolboy.':
        "The first comparison is right, but the second must also end with 'as', not 'like'.",
      'I am as lighter as a feather, I am as happy like an angel, I am as merry as a schoolboy.':
        "'As ... as' takes the plain adjective, and the second comparison needs 'as', not 'like'.",
    },
    more: 'Dickens repeats the same pattern again and again to show Scrooge’s joy bursting out of him. Repeating a structure like this builds feeling.',
    tip: 'Look at the third comparison: it shows the pattern the other two must follow.',
  },
  'She had slight figure, a pale, gentle face, and fair hairs.': {
    why: "This is from chapter 17 of Jane Eyre, with two mistakes put in. 'Figure' is singular and countable, so it needs 'a': 'a slight figure'. And the hair on a head is uncountable: 'fair hair'. Charlotte Brontë wrote: 'She had a slight figure, a pale, gentle face, and fair hair.'",
    not: {
      'She had slight figure, a pale, gentle face, and fair hair.':
        "'Fair hair' is right, but 'figure' is a singular noun we can count, so it needs 'a'.",
      'She had a slight figure, a pale, gentle face, and fairs hair.':
        "'A slight figure' is right, but an adjective never takes -s in English. Say 'fair hair'.",
      'She had slight figure, a pale, gentle face, and fairs hair.':
        "'Figure' needs 'a', and the adjective 'fair' takes no -s.",
    },
    more: "Jane is describing Mrs Dent, one of the guests at Thornfield. 'Slight' means small and thin; 'fair' here means light in colour.",
    tip: "To describe a person, use 'a' with face and figure, and no article with hair: 'She had a round face and dark hair.'",
  },
  'There were nothing in them but a piece of breads.': {
    why: "This is from chapter 1 of Great Expectations, with two mistakes put in. 'Nothing' is singular, so we need 'there was'. And 'bread' is uncountable, so it has no -s: 'a piece of bread'. Dickens wrote: 'There was nothing in them but a piece of bread.'",
    not: {
      'There were nothing in them but a piece of bread.':
        "'A piece of bread' is right, but 'nothing' takes a singular verb: 'was'.",
      'There was nothing in them but piece of bread.':
        "'There was' is right, but 'piece' is a singular noun we can count, so it needs 'a'.",
      'There were nothing in them but piece of bread.':
        "'Nothing' takes 'was', and 'piece' needs 'a' before it.",
    },
    more: 'The convict has turned Pip upside down and emptied his pockets. The piece of bread shows how little the boy has.',
    tip: "To count an uncountable food, use a word for its unit: 'a slice of bread', 'a cup of tea'.",
  },
  'There was three lady in the room and one gentleman.': {
    why: "This is from chapter 11 of Great Expectations, with two mistakes put in. 'Three ladies' is plural, so we need 'there were'. And 'lady' ends in a consonant and -y, so its plural is 'ladies'. Dickens wrote: 'There were three ladies in the room and one gentleman.'",
    not: {
      'There was three ladies in the room and one gentleman.':
        "'Ladies' is right, but a plural noun after 'there' needs 'were'.",
      'There were three ladys in the room and one gentleman.':
        "'There were' is right, but after a consonant, -y becomes -ies: 'ladies'.",
      'There was three ladys in the room and one gentleman.':
        "A plural takes 'there were', and the plural of 'lady' is 'ladies'.",
    },
    more: "The verb agrees with the first noun after it: 'three ladies', so 'were', even though 'one gentleman' comes later.",
    tip: "Nouns in a consonant and -y: 'city, cities', 'baby, babies'. A vowel and -y just adds -s: 'day, days'.",
  },
  'He were waiting me with great impatience.': {
    why: "This is from chapter 19 of Great Expectations, with two mistakes put in. 'He' takes 'was' in the past, never 'were'. And 'wait' takes 'for' before the person. Dickens wrote: 'He was waiting for me with great impatience.'",
    not: {
      'He were waiting for me with great impatience.':
        "'Waiting for me' is right, but 'he' takes 'was', not 'were'.",
      'He was waiting to me with great impatience.':
        "'Was waiting' is right, but 'wait' takes 'for', not 'to'.",
      'He were waiting to me with great impatience.':
        "'He' takes 'was', and 'wait' is followed by 'for'.",
    },
    more: 'Mr Pumblechook is waiting for Pip, who has just heard he will be rich. Pumblechook was never this eager to see Pip before, and Dickens lets the reader notice why.',
    tip: "'Impatience' is uncountable, so it takes no 'a': 'with great impatience'.",
  },
  'Eliminate all other factor, and the one which remain must be the truth.': {
    why: "This is Sherlock Holmes in chapter 1 of The Sign of Four, with two mistakes put in. 'All other' takes a plural noun: 'factors'. And 'the one which' is singular, so its verb needs -s: 'remains'. Conan Doyle wrote: 'Eliminate all other factors, and the one which remains must be the truth.'",
    not: {
      'Eliminate all others factors, and the one which remains must be the truth.':
        "'Remains' is right, but 'other' before a noun never takes -s. Only the noun is plural: 'other factors'.",
      'Eliminate all other factors, and the one which remain must be the truth.':
        "'Factors' is right, but 'the one which' is singular, so the verb is 'remains'.",
      'Eliminate all others factors, and the one which remain must be the truth.':
        "'Other' takes no -s before a noun, and 'the one which' needs 'remains'.",
    },
    more: 'Holmes explains his method: rule out every answer that cannot be true, and what remains must be right. It is a good way to answer a multiple-choice question too.',
    tip: "Adjectives never take a plural -s in English: 'other books', 'young people'.",
  },
  'Darkness are cheap, and Scrooge liked.': {
    why: "This is from Stave 1 of A Christmas Carol, with two mistakes put in. 'Darkness' is uncountable and singular, so it takes 'is'. And 'like' always needs an object: 'liked it'. Dickens wrote: 'Darkness is cheap, and Scrooge liked it.'",
    not: {
      'Darkness are cheap, and Scrooge liked it.':
        "'Liked it' is right, but 'darkness' is singular, so it takes 'is'.",
      'Darkness is cheap, and Scrooge liking it.':
        "'Is' is right, but 'liking' alone is not a full verb. The story is in the past: 'liked'.",
      'Darkness are cheap, and Scrooge liking it.':
        "'Darkness' takes 'is', and the second part needs the full past verb 'liked'.",
    },
    more: "Scrooge climbs his dark stairs with only a cheap candle. 'Darkness is cheap' shows that he likes the dark because he does not have to pay for it.",
    tip: "Words for ideas and conditions, such as 'darkness', 'silence' and 'happiness', take 'is'.",
  },
  'The news were so surprising that nobody could believe them.': {
    why: "This has two mistakes. 'News' looks plural but is singular, so it takes 'was'. And the pronoun that stands for it must be singular too: 'believe it'. So: 'The news was so surprising that nobody could believe it.'",
    not: {
      'The news were so surprising that nobody could believe it.':
        "'Believe it' is right, but 'news' takes a singular verb: 'was'.",
      'The news was so surprising that nobody could to believe it.':
        "'Was' and 'it' are right, but 'could' takes the base verb with no 'to'.",
      'The news were so surprising that nobody could to believe it.':
        "'News' takes 'was', and 'could' takes no 'to'.",
    },
    more: "To count news, say 'a piece of news': 'I have a piece of good news.'",
    tip: "A pronoun must match its noun. Singular noun: 'it'. Plural noun: 'them'.",
  },
  'Peter is the person which I told you about him.': {
    why: "This has two mistakes. For a person, the relative pronoun is 'who', not 'which'. And 'who' already stands for Peter, so 'him' at the end repeats him and must go. So: 'Peter is the person who I told you about.'",
    not: {
      'Peter is the person what I told you about.':
        "'Him' has gone, but 'what' is not a relative pronoun after a noun. For a person, use 'who'.",
      'Peter is the person who I told you about him.':
        "'Who' is right, but 'who' already means 'him', so the extra 'him' must go.",
      'Peter is the person what I told you about him.':
        "Use 'who' for a person, and do not repeat the person with 'him'.",
    },
    more: "You can also leave the relative pronoun out: 'Peter is the person I told you about.' That is common in speech.",
    tip: 'After a relative clause, check that you have not repeated the noun with a pronoun.',
  },
  'She has gone to the market yesterday and bought three kilo of apples.': {
    why: "This has two mistakes. 'Yesterday' is a finished time, so we need the past simple: 'She went'. And after 'three', a unit such as 'kilo' is plural: 'three kilos'. So: 'She went to the market yesterday and bought three kilos of apples.'",
    not: {
      'She has gone to the market yesterday and bought three kilos of apples.':
        "'Three kilos' is right, but 'yesterday' cannot go with 'has gone'.",
      'She went to the market yesterday and bought three kilo’s of apples.':
        "'Went' is right, but an apostrophe does not make a plural. Write 'kilos'.",
      'She has gone to the market yesterday and bought three kilo’s of apples.':
        "'Yesterday' needs the past simple, and the plural is 'kilos', with no apostrophe.",
    },
    more: "Units of measure take a plural after numbers above one: 'two litres', 'five metres', 'ten grams'.",
    tip: "'Has gone' means she is still away; with a finished time, the past simple is the only choice.",
  },
  'My little brother is afraid from the dark, so he always sleep with the light on.': {
    why: "This has two mistakes. 'Afraid' is followed by 'of': 'afraid of the dark'. And 'he' needs the -s form of the verb: 'he always sleeps'. So: 'My little brother is afraid of the dark, so he always sleeps with the light on.'",
    not: {
      'My little brother is afraid at the dark, so he always sleeps with the light on.':
        "'Sleeps' is right, but 'afraid' takes 'of', not 'at'.",
      'My little brother is afraid of the dark, so he always sleep with the light on.':
        "'Afraid of' is right, but 'he' takes the -s form: 'sleeps'.",
      'My little brother is afraid at the dark, so he always sleep with the light on.':
        "'Afraid' takes 'of', and 'he' takes 'sleeps'.",
    },
    more: "'Always' goes between the subject and the verb: 'he always sleeps', 'she always arrives early'.",
    tip: "An adverb such as 'always' can hide the subject from the verb. Look past it.",
  },
  'We was lost, so we asked to a policeman the way to the station.': {
    why: "This has two mistakes. 'We' takes 'were' in the past, never 'was'. And 'ask' takes the person straight after it, with no 'to': 'asked a policeman'. So: 'We were lost, so we asked a policeman the way to the station.'",
    not: {
      'We was lost, so we asked a policeman the way to the station.':
        "'Asked a policeman' is right, but 'we' takes 'were'.",
      'We were lost, so we asked at a policeman the way to the station.':
        "'Were' is right, but 'ask' takes the person with no preposition.",
      'We was lost, so we asked at a policeman the way to the station.':
        "'We' takes 'were', and 'ask' takes the person straight after it.",
    },
    more: "'Ask someone the way' is a fixed pattern: person first, then 'the way to' the place.",
    tip: "When you are lost in Britain, say: 'Excuse me, which way is the station?'",
  },
  'This is the more beautiful place I have ever seen, and the people is very friendly.': {
    why: "This has two mistakes. 'I have ever seen' compares one place with all the others, so we need the superlative: 'the most beautiful'. And 'people' is plural, so it takes 'are'. So: 'This is the most beautiful place I have ever seen, and the people are very friendly.'",
    not: {
      'This is most beautiful place I have ever seen, and the people are very friendly.':
        "'Most' and 'are' are right, but a superlative needs 'the' before it.",
      'This is the most beautiful place I have ever seen, and the people is very friendly.':
        "'The most beautiful' is right, but 'people' is plural and takes 'are'.",
      'This is most beautiful place I have ever seen, and the people is very friendly.':
        "A superlative needs 'the', and 'people' takes 'are'.",
    },
    more: "A superlative is often followed by 'I have ever' plus a participle: 'the worst film I have ever seen'.",
    tip: "'People' and 'police' are plural, even without an -s.",
  },
  'I didn’t understood nothing, so the teacher explained it again.': {
    why: "This has two mistakes. After 'didn’t' the verb is the base form: 'didn’t understand'. And 'didn’t' is already negative, so 'nothing' becomes 'anything'. So: 'I didn’t understand anything, so the teacher explained it again.'",
    not: {
      'I didn’t understood anything, so the teacher explained it again.':
        "'Anything' is right, but after 'didn’t' the verb is 'understand'.",
      'I didn’t understand none, so the teacher explained it again.':
        "'Didn’t understand' is right, but 'none' is still a second negative. Use 'anything'.",
      'I didn’t understood none, so the teacher explained it again.':
        "After 'didn’t' use the base verb, and 'none' makes a double negative.",
    },
    more: "One negative word is enough: 'I understood nothing' and 'I didn’t understand anything' mean the same.",
    tip: "Check a negative sentence twice: one negative, and the base verb after 'didn’t'.",
  },
  'When I will finish school, I want to study for be a nurse.': {
    why: "This has two mistakes. After 'when' about the future, we use the present, not 'will': 'When I finish'. And to give a purpose we use 'to' plus the base verb: 'to be a nurse'. So: 'When I finish school, I want to study to be a nurse.'",
    not: {
      'When I finishing school, I want to study to be a nurse.':
        "'To be a nurse' is right, but 'finishing' alone is not a full verb. Use 'I finish'.",
      'When I finish school, I want to study for be a nurse.':
        "'When I finish' is right, but 'for' cannot go before a base verb. Use 'to be'.",
      'When I finishing school, I want to study for be a nurse.':
        "After 'when' use 'I finish', and a purpose takes 'to be', not 'for be'.",
    },
    more: "Time words such as 'when', 'after', 'before' and 'as soon as' take the present for the future: 'Call me when you arrive.'",
    tip: "'For' plus a noun ('for my exam'), but 'to' plus a verb ('to pass my exam').",
  },
  'There is a new student in our class. She come from Brazil and speak three languages.': {
    why: "This has two mistakes, both about 'she'. In the present simple, both verbs need -s: 'She comes from Brazil and speaks three languages'. The second verb shares the subject 'she', so it needs -s too.",
    not: {
      'There is a new student in our class. She come from Brazil and speaks three languages.':
        "'Speaks' is right, but 'come' also belongs to 'she', so it needs -s: 'comes'.",
      'There is a new student in our class. She comes from Brazil and speaking three languages.':
        "'Comes' is right, but 'speaking' alone is not a full verb. Use 'speaks'.",
      'There is a new student in our class. She come from Brazil and speaking three languages.':
        "Both verbs belong to 'she': 'comes' and 'speaks'.",
    },
    more: "When 'and' joins two verbs with one subject, both verbs follow the same rule: 'He cooks and cleans.'",
    tip: "After 'and', look back to find the subject of the second verb.",
  },
  'I lost my glasses. Did you see it anywhere? I can’t see nothing without them.': {
    why: "This has two mistakes. 'Glasses' is plural, so the pronoun is 'them', not 'it'. And 'can’t' is already negative, so 'nothing' becomes 'anything'. So: 'I lost my glasses. Did you see them anywhere? I can’t see anything without them.'",
    not: {
      'I lost my glasses. Did you see they anywhere? I can’t see anything without them.':
        "'Anything' is right, but after a verb we use the object form 'them', not 'they'.",
      'I lost my glasses. Did you see them anywhere? I can’t see nothing without them.':
        "'Them' is right, but 'can’t' and 'nothing' make a double negative.",
      'I lost my glasses. Did you see they anywhere? I can’t see nothing without them.':
        "After the verb we need 'them', and 'can’t' takes 'anything', not 'nothing'.",
    },
    more: "Things that come in pairs are plural: 'my glasses are', 'my jeans are', and we call them 'them'.",
    tip: "The last sentence already says 'them'. Use clues like that to check the earlier pronoun.",
  },
}
