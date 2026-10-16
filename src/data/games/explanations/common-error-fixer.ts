import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Fix the Common Mistake: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/common-error-fixer.ts). Written with AI on 16
 * October 2026 and checked against each question and its options, as the founder
 * decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'I am student at this college.': {
    why: "The mistake is the missing article. 'Student' is a singular noun that you can count, so it needs 'a' before it. 'I am a student' says you are one student among many.",
    not: {
      'I am an student at this college.':
        "Use 'an' before a vowel sound. 'Student' starts with the sound 's', so we say 'a student'.",
      'I am the student at this college.':
        "'The' points to one particular student that the listener already knows. You are one of many students, so use 'a'.",
      'I am student at this college.':
        "This is the sentence with the mistake. It still has no article before 'student'.",
    },
    more: "We need an article before a singular noun that we can count: 'a teacher', 'an engineer', 'a doctor'. Some languages, such as Arabic, have no word for 'a' or 'an', so learners often leave it out.",
    tip: "When you write a job or a role, check for 'a' or 'an': 'I am a nurse.' 'She is an artist.'",
  },
  'She is best teacher in the school.': {
    why: "The mistake is the missing 'the'. We use 'the' before a superlative such as 'best', because only one person can be the best. 'The best teacher' means better than all the others.",
    not: {
      'She is a best teacher in the school.':
        "'A' means one of many. A superlative like 'best' picks out only one, so 'a best teacher' is wrong. Use 'the'.",
      'She is best teacher in the school.':
        "This is the sentence with the mistake. It has no article before 'best teacher'.",
      'She is an best teacher in the school.':
        "'An' is only used before a vowel sound, and 'best' starts with 'b'. A superlative needs 'the' anyway.",
    },
    more: "Other superlatives take 'the' too: 'the tallest boy', 'the most interesting book', 'the worst day'.",
    tip: "In an exam answer, write 'the most important reason', not 'most important reason'.",
  },
  'He bought a umbrella yesterday.': {
    why: "The mistake is 'a' before 'umbrella'. We use 'an' before a vowel sound, and 'umbrella' starts with the vowel sound 'uh'. So we say 'an umbrella'.",
    not: {
      'He bought a umbrella yesterday.':
        "This is the sentence with the mistake. 'A' is wrong before the vowel sound at the start of 'umbrella'.",
      'He bought an umbrellas yesterday.':
        "'An' is right before 'umbrella', but it goes with one thing. 'Umbrellas' is plural, so 'an umbrellas' is wrong.",
      'He bought umbrella yesterday.':
        "A singular noun that we can count needs an article. 'Umbrella' alone is wrong. Say 'an umbrella'.",
    },
    more: "The sound matters, not the letter. We say 'an hour' because the h is silent, but 'a university' because it starts with the sound 'y'.",
    tip: "Say the word aloud. If it starts with a vowel sound, use 'an': 'an apple', 'an egg', 'an umbrella'.",
  },
  'I go to the work by bus every day.': {
    why: "The mistake is 'the' before 'work'. We say 'go to work' with no article when we mean going to our job. So the correct sentence is 'I go to work by bus every day'.",
    not: {
      'I go to a work by bus every day.':
        "'A work' is wrong here. 'Work' means our job or workplace in general, and it takes no article after 'go to'.",
      'I go to the work by bus every day.':
        "This is the sentence with the mistake. 'The work' is not used when we mean going to our job.",
      'I go to an work by bus every day.':
        "This has two problems: 'work' starts with a consonant sound, so 'an' is wrong, and 'go to work' needs no article.",
    },
    more: "Some places lose the article when we mean their normal use: 'go to school', 'go to bed', 'go to hospital' (British English). Compare 'go to the school' for a visit.",
    tip: "Learn these phrases as wholes: 'go to work', 'go to school', 'go to bed', 'at home'.",
  },
  'The honesty is very important.': {
    why: "The mistake is 'the' before 'honesty'. When we speak about a general idea, we use no article. 'Honesty' is an idea and cannot be counted, so we say 'Honesty is very important'.",
    not: {
      'A honesty is very important.':
        "'A' goes with one thing that we can count. 'Honesty' is an idea that we cannot count, so it cannot take 'a'.",
      'An honesty is very important.':
        "'An' also goes only with a countable singular noun. 'Honesty' is uncountable, so 'an honesty' is wrong.",
      'The honesty is very important.':
        "This is the sentence with the mistake. 'The' is wrong when we talk about honesty in general.",
    },
    more: "Other ideas work in the same way: 'Health is important', 'Music helps me relax'. Use 'the' only for something particular: 'the honesty of the witness'.",
    tip: 'If the noun is a general idea, such as honesty, friendship or music, use no article.',
  },
  'I have a information for you.': {
    why: "The mistake is 'a' before 'information'. 'Information' is uncountable, so it cannot take 'a' or 'an', and it has no plural. We say 'some information' or just 'information'.",
    not: {
      'I have an information for you.':
        "'An' is also wrong. 'Information' is uncountable, so neither 'a' nor 'an' can go before it.",
      'I have the informations for you.':
        "'Information' has no plural, so 'informations' is wrong. 'The' also points to information that both people already know.",
      'I have a information for you.':
        "This is the sentence with the mistake. 'A' cannot go before the uncountable noun 'information'.",
    },
    more: "These common words are uncountable too: 'advice', 'homework', 'furniture', 'news'. To count them, use a phrase: 'a piece of advice', 'two pieces of news'.",
    tip: "Write 'some' or 'a piece of' before these words: 'some advice', 'a piece of information'.",
  },
  'She plays the football on Sundays.': {
    why: "The mistake is 'the' before 'football'. We use no article with the name of a sport or game: 'play football', 'play tennis', 'play chess'. So we say 'She plays football on Sundays'.",
    not: {
      'She plays a football on Sundays.':
        "'A football' means one ball, not the game. To name the sport, use no article.",
      'She plays the football on Sundays.':
        "This is the sentence with the mistake. We do not use 'the' before the name of a sport.",
      'She plays an football on Sundays.':
        "'An' is wrong because 'football' starts with a consonant sound. The name of a sport also takes no article.",
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
        "'An engineer' is right, but we do not use 'the' before the name of a country like Egypt. Say 'from Egypt'.",
      'He is engineer from Egypt.':
        "This is the sentence with the mistake. It has no article before 'engineer'.",
    },
    more: "Most country names take no article: 'from Egypt', 'in France'. A few do: 'the United Kingdom', 'the United States', 'the Netherlands'.",
    tip: "After 'He is' or 'She is', say the job with 'a' or 'an': 'a nurse', 'an electrician'.",
  },
  'She very tired today.': {
    why: "The mistake is the missing verb. English needs 'is', a form of 'be', in a sentence like this. 'She is very tired today' joins the subject 'she' to the adjective 'tired'.",
    not: {
      'She very tired today.':
        'This is the sentence with the mistake. It has no verb, and an English sentence needs one.',
      'She are very tired today.': "'Are' goes with you, we and they. With 'she' we use 'is'.",
      'She be very tired today.':
        "'Be' is the base form. In a present sentence about 'she', we use 'is', not 'be'.",
    },
    more: "Some languages, such as Arabic, leave out 'is', 'am' and 'are' in present sentences. In English you must always include one: 'He is tall', 'They are late'.",
    tip: "After you write a sentence, find the verb. If you cannot find one, add 'am', 'is' or 'are'.",
  },
  'They happy with the result.': {
    why: "The mistake is the missing verb. 'They' needs 'are' before the adjective 'happy'. So we say 'They are happy with the result'.",
    not: {
      'They is happy with the result.': "'Is' goes with he, she and it. With 'they' we use 'are'.",
      'They happy with the result.':
        "This is the sentence with the mistake. There is no verb between 'They' and 'happy'.",
      'They be happy with the result.':
        "'Be' does not follow 'they' in a normal present sentence. Use 'are'.",
    },
    more: "The present of 'be' is: I am, you are, he is, she is, it is, we are, they are. Each subject has its own form.",
    tip: "Learn the short forms too: 'they’re', 'we’re', 'I’m'. You will see and hear them all the time.",
  },
  'I a teacher at this school.': {
    why: "The mistake is the missing verb. With 'I', the verb 'be' is 'am'. So the correct sentence is 'I am a teacher at this school'.",
    not: {
      'I a teacher at this school.':
        "This is the sentence with the mistake. There is no verb after 'I'.",
      'I are a teacher at this school.':
        "'Are' goes with you, we and they. With 'I' we always use 'am'.",
      'I be a teacher at this school.':
        "'Be' is the base form and does not follow 'I' in a present sentence. Use 'am'.",
    },
    more: "'Am' is used only with 'I'. Compare 'I am a teacher' and 'She is a teacher'.",
    tip: "On a form or when you introduce yourself, say 'I am' plus your job or your name: 'I am a teacher.'",
  },
  'The weather very hot in summer.': {
    why: "The mistake is the missing verb. 'Weather' is a singular, uncountable noun, so the verb is 'is'. We say 'The weather is very hot in summer'.",
    not: {
      'The weather very hot in summer.':
        "This is the sentence with the mistake. There is no verb after 'weather'.",
      'The weather are very hot in summer.':
        "'Are' is for plural subjects. 'Weather' is singular, so use 'is'.",
      'The weather be very hot in summer.':
        "'Be' is not used like this in a present sentence. Use 'is'.",
    },
    more: "'Weather' is uncountable: we say 'the weather is', never 'the weathers are'. The same is true of 'news' and 'advice'.",
    tip: "Before you choose 'is' or 'are', ask: is the subject one thing or more than one? 'The weather' is one thing.",
  },
  'He not ready for the exam.': {
    why: "The mistake is the missing verb 'be'. To make a negative with 'be', put 'not' after 'is'. So the correct sentence is 'He is not ready for the exam'.",
    not: {
      'He not ready for the exam.':
        "This is the sentence with the mistake. 'Not' cannot replace the verb. 'Is' must come before 'not'.",
      'He are not ready for the exam.':
        "'Are' goes with you, we and they. With 'he' we use 'is not'.",
      'He no ready for the exam.':
        "We do not use 'no' before an adjective like this. Use 'is not' (or 'isn’t') before 'ready'.",
    },
    more: "The short forms are 'He isn’t ready' and 'He’s not ready'. Both are correct in everyday speech and writing.",
    tip: "To make a negative with 'be', never remove the verb. Add 'not' after it: 'I am not', 'she is not', 'they are not'.",
  },
  'My parents at home now.': {
    why: "The mistake is the missing verb. 'Parents' is plural, so the verb is 'are'. We say 'My parents are at home now'.",
    not: {
      'My parents is at home now.':
        "'Is' goes with one person or thing. 'Parents' means two or more people, so use 'are'.",
      'My parents at home now.':
        "This is the sentence with the mistake. There is no verb after 'parents'.",
      'My parents be at home now.':
        "'Be' is not used with a plural subject in a present sentence like this. Use 'are'.",
    },
    more: "Look at the end of the subject. Words that end in -s are usually plural and take 'are': 'my friends are', 'the books are'.",
    tip: "Match the verb to the number of people. 'My mother is at home' uses 'is'. 'My parents are at home' uses 'are'.",
  },
  'He go to the gym every morning.': {
    why: "The mistake is the verb 'go' after 'He'. In the present simple, a verb after he, she or it takes -s or -es. 'Go' becomes 'goes', so we say 'He goes to the gym every morning'.",
    not: {
      'He go to the gym every morning.':
        "This is the sentence with the mistake. The verb after 'he' needs an ending: 'goes'.",
      'He going to the gym every morning.':
        "'Going' needs 'is' before it, and 'every morning' shows a habit, which uses the present simple.",
      'He gone to the gym every morning.':
        "'Gone' is the past participle. It needs 'has' before it, and it does not describe a regular habit.",
    },
    more: "Verbs ending in -o, -s, -sh, -ch or -x add -es: 'goes', 'does', 'watches', 'washes'. Other verbs add -s: 'works', 'plays'.",
    tip: "A time phrase like 'every morning' or 'always' shows a habit. Use the present simple, and remember the -s for he, she and it.",
  },
  'My sister live in London.': {
    why: "The mistake is the verb 'live'. 'My sister' means 'she', one person, so the present simple verb needs -s. We say 'My sister lives in London'.",
    not: {
      'My sister live in London.':
        "This is the sentence with the mistake. The verb after a singular subject needs -s: 'lives'.",
      'My sister living in London.':
        "'Living' alone is not a full verb here. A present sentence needs 'lives', or 'is living' with 'is'.",
      'My sister lived in London now.':
        "'Lived' is the past tense, and 'now' needs the present. Use 'lives' for where she lives now.",
    },
    more: "Where someone lives is a fact, so we use the present simple. We use 'is living' for a short time: 'She is living in London for a few months.'",
    tip: 'Ask yourself: is the subject one person or thing? If it is, the present simple verb ends in -s.',
  },
  'The students works very hard.': {
    why: "The mistake is 'works' after 'the students'. 'Students' is plural, so the present simple verb has no -s. We say 'The students work very hard'.",
    not: {
      'The students works very hard.':
        'This is the sentence with the mistake. A plural subject does not take the -s verb form.',
      'The students working very hard.':
        "'Working' alone is not a full verb. Use 'work' for a habit, or 'are working' for something happening now.",
      'The student work very hard.':
        "'Student' is singular, and a singular subject needs 'works'. This option changed the noun and made a new mistake.",
    },
    more: "With regular words, the -s goes on the noun or the verb, not both: 'The student works' and 'The students work'.",
    tip: 'If the subject noun has a plural -s, leave the -s off the verb. If the subject is singular, put the -s on the verb.',
  },
  'She have two brothers.': {
    why: "The mistake is 'have' after 'She'. With he, she and it, the verb 'have' changes to 'has'. So we say 'She has two brothers'.",
    not: {
      'She have two brothers.':
        "This is the sentence with the mistake. 'Have' goes with I, you, we and they. With 'she' it becomes 'has'.",
      'She having two brothers.':
        "'Having' is the -ing form. 'Have' for family is not used in the continuous, so the simple form 'has' is right.",
      'She haves two brothers.':
        "'Haves' is not a form of the verb. The verb 'have' is irregular: its form for he, she and it is 'has'.",
    },
    more: "'Have' is irregular, so it does not follow the normal -s rule. Other examples: 'I do, she does' and 'I go, he goes'.",
    tip: "Say 'she has', 'he has' and 'it has' together as one set. It helps you remember.",
  },
  'It cost ten pounds now.': {
    why: "The mistake is 'cost' after 'It'. 'Now' shows the present, and in the present simple a verb after 'it' takes -s. So we say 'It costs ten pounds now'.",
    not: {
      'It cost ten pounds now.':
        "This is the sentence with the mistake. 'Cost' without -s fits the past, not 'now'.",
      'It costing ten pounds now.':
        "'Costing' needs 'is' before it. For a price we normally use the simple form, 'costs'.",
      'It are cost ten pounds now.':
        "'Are' does not go with 'it', and 'are cost' is not a verb form. The correct form is 'costs'.",
    },
    more: "The verb 'cost' has the same form in the past and the present: 'It cost ten pounds last year.' The time word shows which one you mean.",
    tip: "Use a time word to make the tense clear: 'now', 'today', 'last year'. Then you know whether the verb needs -s.",
  },
  'My friend do not like coffee.': {
    why: "The mistake is 'do not' after 'my friend'. For one person (he, she, it) the helper verb is 'does'. We say 'My friend does not like coffee', and 'like' keeps its base form.",
    not: {
      'My friend do not like coffee.':
        "This is the sentence with the mistake. 'Do not' goes with I, you, we and they. With one friend we use 'does not'.",
      'My friend not like coffee.':
        "A present simple negative needs a helper verb: 'does not'. 'Not' cannot stand alone before the verb.",
      'My friend doing not like coffee.':
        "'Doing' is not a helper verb for a negative like this. Use 'does not' before the base verb.",
    },
    more: "The short form is 'doesn’t': 'My friend doesn’t like coffee.' The -s is in 'does', so 'like' has no -s.",
    tip: "In negatives, only the helper verb changes. Write 'does not like', never 'does not likes'.",
  },
  'Everyone in the class want to pass.': {
    why: "The mistake is 'want' after 'Everyone'. 'Everyone' means every person, but it is a singular word. So the present simple verb takes -s: 'Everyone in the class wants to pass'.",
    not: {
      'Everyone in the class want to pass.':
        "This is the sentence with the mistake. 'Everyone' is singular, so the verb needs -s.",
      'Everyone in the class wanting to pass.':
        "'Wanting' alone is not a full verb here. Use 'wants' to say what everyone wants in general.",
      'Everyone in the class are want to pass.':
        "'Are want' is not correct. 'Are' goes with a plural subject, and 'everyone' is singular, so use 'wants'.",
    },
    more: "Other words that take a singular verb: 'everybody', 'somebody', 'nobody', 'each' and 'every student'.",
    tip: "'Everyone' looks like many people but behaves like one. Use 'is', 'has' and 'wants' after it.",
  },
  'I will see you in Monday.': {
    why: "The mistake is 'in' before 'Monday'. We use 'on' before days of the week. So we say 'I will see you on Monday'.",
    not: {
      'I will see you at Monday.':
        "We use 'at' for clock times and some fixed phrases, such as 'at noon'. For days, we use 'on'.",
      'I will see you in Monday.':
        "This is the sentence with the mistake. 'In' is for months, years and seasons, not days.",
      'I will see you to Monday.':
        "'To' shows direction or an end point, not a day. Before a day, use 'on'.",
    },
    more: "A quick guide: 'on' for days and dates (on Monday, on 5 May), 'in' for months and years (in May, in 2030), 'at' for clock times (at six o’clock).",
    tip: 'Learn the three together: on Monday, in May, at six.',
  },
  'She is good in mathematics.': {
    why: "The mistake is 'in' after 'good'. We say 'good at' a subject or a skill. So the correct sentence is 'She is good at mathematics'.",
    not: {
      'She is good in mathematics.':
        "This is the sentence with the mistake. 'Good in' is not the usual phrase for a skill.",
      'She is good on mathematics.':
        "'On' is not used after 'good' for a skill. The phrase is 'good at'.",
      'She is good to mathematics.':
        "'Good to' is for kindness to people ('good to her friends'), not for a skill. Use 'good at'.",
    },
    more: "Other adjectives with 'at': 'bad at', 'brilliant at', 'terrible at'. Other fixed phrases: 'interested in', 'afraid of', 'proud of'.",
    tip: "Learn the adjective and its preposition together: 'good at', 'interested in', 'afraid of'.",
  },
  'He arrived to the airport late.': {
    why: "The mistake is 'to' after 'arrived'. We do not use 'to' with 'arrive'. For a place like an airport, a station or a hotel, we use 'at'. So we say 'He arrived at the airport late'.",
    not: {
      'He arrived to the airport late.':
        "This is the sentence with the mistake. 'Arrive' is not followed by 'to'.",
      'He arrived on the airport late.':
        "'On' is for surfaces and days. For the airport as the place where you arrive, we use 'at'.",
      'He arrived in the airport late.':
        "We use 'in' for cities and countries ('arrived in London'), not for a building like an airport. Use 'at'.",
    },
    more: "Compare 'arrive at' a small place (the airport, the station) and 'arrive in' a large place (Cairo, Britain). We can also say 'get to' the airport.",
    tip: "Remember 'arrive' with 'at' or 'in'. Never write 'arrive to'.",
  },
  'I am interested on this job.': {
    why: "The mistake is 'on' after 'interested'. The fixed phrase is 'interested in'. So the correct sentence is 'I am interested in this job'.",
    not: {
      'I am interested on this job.':
        "This is the sentence with the mistake. We do not say 'interested on'.",
      'I am interested at this job.': "'At' is not used after 'interested'. Say 'interested in'.",
      'I am interested to this job.':
        "'Interested to' is only used before a verb ('interested to hear'). Before a noun like 'job', use 'in'.",
    },
    more: "Other fixed phrases: 'good at', 'afraid of', 'worried about', 'different from'. Learn each one as a unit, because other languages use different small words.",
    tip: "Write 'interested in' plus a noun or an -ing verb: 'I am interested in this job' and 'I am interested in learning'.",
  },
  'We arrived in 9 o’clock.': {
    why: "The mistake is 'in' before a clock time. We use 'at' for exact times. So we say 'We arrived at 9 o’clock'.",
    not: {
      'We arrived in 9 o’clock.':
        "This is the sentence with the mistake. 'In' is for months, years and parts of the day, not clock times.",
      'We arrived on 9 o’clock.': "'On' is for days and dates. Clock times take 'at'.",
      'We arrived by 9 o’clock late.':
        "'By' means 'not later than' a time, so it does not fit with 'late'. For an exact time, use 'at'.",
    },
    more: "Use 'at' for clock times (at 9 o’clock, at half past two) and for 'at noon' and 'at night'. Use 'in' for 'in the morning' and 'in the evening'.",
    tip: "Test it: can you read the time on a clock? Then use 'at'.",
  },
  'She depends of her parents.': {
    why: "The mistake is 'of' after 'depends'. The verb 'depend' is followed by 'on'. So we say 'She depends on her parents'.",
    not: {
      'She depends of her parents.':
        "This is the sentence with the mistake. 'Depend' does not go with 'of'.",
      'She depends at her parents.': "'At' is not used with 'depend'. The verb takes 'on'.",
      'She depends to her parents.': "'To' is not used after 'depend'. Use 'on'.",
    },
    more: "'Depend on' means 'need' or 'rely on': 'Children depend on their parents'. We also say 'It depends on the weather'.",
    tip: "Learn 'depend on', 'rely on' and 'wait for' as whole phrases.",
  },
  'I was born in 15 May.': {
    why: "The mistake is 'in' before a date. We use 'on' with a particular day or date. So the correct sentence is 'I was born on 15 May'.",
    not: {
      'I was born in 15 May.':
        "This is the sentence with the mistake. 'In' is for a whole month or year, not a particular date.",
      'I was born at 15 May.': "'At' is for clock times. A date takes 'on'.",
      'I was born to 15 May.': "'To' does not give a date. Use 'on' before a particular date.",
    },
    more: "Compare 'on 15 May' (a date), 'in May' (the month) and 'in 2010' (the year). Together we can say 'I was born on 15 May 2010'.",
    tip: "In forms and exams, write the date after 'on': 'on 12 June'. Use 'in' only for a month or a year on its own.",
  },
  'He listened the music all night.': {
    why: "The mistake is the missing 'to'. The verb 'listen' is always followed by 'to' before its object. So the correct sentence is 'He listened to the music all night'.",
    not: {
      'He listened the music all night.':
        "This is the sentence with the mistake. 'Listen' needs 'to' before the thing you hear.",
      'He listened at the music all night.':
        "'At' is not used after 'listen'. The fixed phrase is 'listen to'.",
      'He listened on the music all night.': "'On' is not used after 'listen'. Use 'to'.",
    },
    more: "Compare 'hear' and 'listen'. 'Hear' needs no small word: 'He heard the music'. 'Listen' needs 'to': 'He listened to the music'.",
    tip: "Think of 'listen to' as one phrase, like 'look at' and 'wait for'.",
  },
  'I don’t know nothing about it.': {
    why: "The mistake is two negatives: 'don’t' and 'nothing'. Standard English uses only one negative in a clause. We change 'nothing' to 'anything' and say 'I don’t know anything about it'.",
    not: {
      'I don’t know nothing about it.':
        "This is the sentence with the mistake. 'Don’t' and 'nothing' are both negative. Standard English uses only one.",
      'I do know nothing not about it.':
        'This word order is not used in English, and it still has two negatives.',
      'I not know nothing about it.':
        "The negative needs 'do not' (don’t), not just 'not'. The sentence also still has two negatives.",
    },
    more: "In some languages, such as Spanish and French, two negatives are normal. In English, use 'any' words after a negative, or use one negative word: 'I know nothing.'",
    tip: "After 'don’t', 'didn’t', 'can’t' or 'never', use 'any' words: 'anything', 'anybody', 'anywhere'. Only one negative is allowed.",
  },
  'She didn’t see nobody at the party.': {
    why: "The mistake is two negatives: 'didn’t' and 'nobody'. We use only one. After 'didn’t' we need 'anybody', so the correct sentence is 'She didn’t see anybody at the party'.",
    not: {
      'She didn’t see nobody at the party.':
        "This is the sentence with the mistake. 'Didn’t' and 'nobody' are both negative.",
      'She didn’t saw anybody at the party.':
        "'Anybody' is right, but after 'didn’t' the verb stays in the base form: 'see', not 'saw'.",
      'She not see nobody at the party.':
        "The negative of the past simple needs 'didn’t'. 'Not' alone is wrong, and 'nobody' is a second negative.",
    },
    more: "You can also use one negative word with a positive verb: 'She saw nobody at the party.' Both sentences mean the same.",
    tip: "Check the helper verb. After 'didn’t', always use the base form of the main verb.",
  },
  'We don’t have no homework today.': {
    why: "The mistake is two negatives: 'don’t' and 'no'. We keep one and change 'no' to 'any'. So we say 'We don’t have any homework today'.",
    not: {
      'We don’t have no homework today.':
        "This is the sentence with the mistake. 'Don’t' and 'no' are both negative.",
      'We not have no homework today.':
        "The negative of 'have' here needs 'don’t', not 'not'. The sentence also has two negatives.",
      'We don’t have none homework today.':
        "'None' cannot go before a noun, and it is a second negative. Use 'any' before 'homework'.",
    },
    more: "You can also say 'We have no homework today.' It has one negative word. Both sentences are correct.",
    tip: "'Any' is for negative sentences and questions: 'We don’t have any homework' and 'Do we have any homework?'",
  },
  'He can’t find his keys nowhere.': {
    why: "The mistake is two negatives: 'can’t' and 'nowhere'. After a negative verb we use 'anywhere'. So the correct sentence is 'He can’t find his keys anywhere'.",
    not: {
      'He can’t find his keys nowhere.':
        "This is the sentence with the mistake. 'Can’t' and 'nowhere' are both negative.",
      'He can find his keys nowhere not.':
        'This word order is not used in English, and it still has two negatives.',
      'He not can find his keys nowhere.':
        "'Not' goes after 'can' ('can’t' or 'cannot'), not before it. The sentence also still has two negatives.",
    },
    more: "The same rule gives 'anything' and 'anybody' after a negative verb: 'He can’t find anything.' Here 'any' words replace 'no' words.",
    tip: "Circle every negative word in your sentence. If you find two in one clause, change the second to an 'any' word.",
  },
  'They never go nowhere on holiday.': {
    why: "The mistake is two negatives: 'never' and 'nowhere'. 'Never' is already negative, so the place word must be 'anywhere'. We say 'They never go anywhere on holiday'.",
    not: {
      'They never go nowhere on holiday.':
        "This is the sentence with the mistake. 'Never' and 'nowhere' are both negative.",
      'They not never go anywhere on holiday.':
        "'Not never' puts two negatives together again. 'Never' alone is enough.",
      'They never don’t go nowhere on holiday.':
        "This has three negatives: 'never', 'don’t' and 'nowhere'. Use 'never' with 'anywhere'.",
    },
    more: "Words such as 'never', 'nobody' and 'nothing' are already negative, so they do not need another negative word in the same clause.",
    tip: "Remember that 'never' means 'not ever'. You cannot add another 'not' to it.",
  },
  'I have a car red.': {
    why: "The mistake is the position of the adjective. In English an adjective comes before the noun it describes. So we say 'a red car', not 'a car red'.",
    not: {
      'I have a car red.':
        "This is the sentence with the mistake. The adjective 'red' comes after the noun.",
      'I have red a car.':
        "The adjective must come after 'a', not before it. The order is: 'a', then the adjective, then the noun.",
      'I have car a red.':
        "'A' must come before its noun and before the adjective. The correct order is 'a red car'.",
    },
    more: "In some languages, such as Arabic and French, adjectives usually follow the noun. In English they usually come before it: 'a big house', 'an old man'.",
    tip: "Build a noun phrase in this order: a or the, then the adjective, then the noun. For example: 'a new red car'.",
  },
  'She speaks very well English.': {
    why: "The mistake is putting 'very well' between the verb and its object. In English the object comes straight after the verb, and the adverb comes after the object. So we say 'She speaks English very well'.",
    not: {
      'She speaks very well English.':
        "This is the sentence with the mistake. 'Very well' separates the verb 'speaks' from its object 'English'.",
      'She very well speaks English.':
        "In English 'very well' does not go before the verb in this kind of sentence. Put it at the end.",
      'She speaks well very English.':
        "'Well' and 'very' must stay together as 'very well', and 'very' cannot go before 'English'.",
    },
    more: "The pattern is subject, verb, object, adverb: 'He plays football well.' Do not put an adverb between a verb and its object.",
    tip: "Check that the verb and its object are next to each other: 'speaks English', 'plays tennis', 'reads books'.",
  },
  'Where you are going now?': {
    why: "The mistake is the word order in a question. After a question word, the verb 'be' goes before the subject. So we say 'Where are you going now?', not 'Where you are going now?'",
    not: {
      'Where you are going now?':
        "This is the sentence with the mistake. The subject 'you' comes before the verb, which is the order of a statement.",
      'Where going you are now?':
        "The verb is split in the wrong place. In the present continuous, the form of 'be' comes first: 'are you going'.",
      'Where are going you now?':
        "'Are' is in the right place, but 'going' must stay after the subject: 'are you going'.",
    },
    more: "In a question, put the helper verb before the subject: 'What are you doing?', 'Why is she crying?', 'Where do they live?'",
    tip: "Start from a statement. 'You are going to the shop' becomes 'Where are you going?' The words 'are' and 'you' swap places.",
  },
  'I like very much this book.': {
    why: "The mistake is putting 'very much' between the verb and its object. The object must come straight after the verb, so the correct sentence is 'I like this book very much'.",
    not: {
      'I like very much this book.':
        "This is the sentence with the mistake. 'Very much' separates 'like' from its object, 'this book'.",
      'I very like this book.':
        "'Very' cannot describe a verb on its own. You need 'very much', or you can say 'I really like this book'.",
      'I like this book very.':
        "'Very' needs a word to describe, such as an adjective. With a verb, use 'very much'.",
    },
    more: "'Very much' can also go before the verb in careful English: 'I very much like this book.' But it never goes between the verb and its object.",
    tip: "A safe pattern for an exam: verb, object, then 'very much'. For example: 'I enjoy the film very much.'",
  },
  'Always she is late for class.': {
    why: "The mistake is the position of 'always'. A frequency adverb goes after the verb 'be': 'She is always late'. It does not normally go at the start of the sentence.",
    not: {
      'Always she is late for class.':
        "This is the sentence with the mistake. In a normal statement, 'always' does not go at the start.",
      'She always is late for class.':
        "'Always' goes before most verbs but after 'be'. With 'is' the order is 'is always'.",
      'She is late always for class.':
        "'Always' does not go after the adjective 'late'. It sits between 'is' and 'late'.",
    },
    more: "With other verbs, the adverb goes before the verb: 'She always arrives late.' With 'be', it goes after: 'She is always late.' Other adverbs: 'never', 'often', 'usually'.",
    tip: "Remember the rule 'after be, before other verbs': 'I am never late' but 'I never forget'.",
  },
  'Do you know where is the station?': {
    why: "The mistake is the word order after 'where'. When one question sits inside another, the order is the same as in a statement: 'the station is'. So we say 'Do you know where the station is?'",
    not: {
      'Do you know where is the station?':
        "This is the sentence with the mistake. 'Is' comes before the subject, which is the order of a direct question.",
      'Do you know where the station?':
        "The verb is missing. After 'where the station' we need 'is'.",
      'Do you know is where the station?':
        "'Is' is in the wrong place. In the second part, the order is 'where', then the subject, then the verb.",
    },
    more: "Compare the direct question 'Where is the station?' with 'Do you know where the station is?'. The same happens after 'Can you tell me' and 'I don’t know'.",
    tip: "Use statement order after phrases like 'Do you know', 'Could you tell me' and 'I wonder'.",
  },
  'My mother is a doctor. He works in a hospital.': {
    why: "The mistake is the pronoun 'He'. 'My mother' is a woman, so the next sentence must use 'she'. So we say 'My mother is a doctor. She works in a hospital.'",
    not: {
      'My mother is a doctor. He works in a hospital.':
        "This is the sentence with the mistake. 'He' is for a man or a boy, but 'my mother' is a woman.",
      'My mother is a doctor. It works in a hospital.':
        "'It' is for things and animals. A person, such as your mother, is 'he' or 'she'.",
      'My mother is a doctor. They works in a hospital.':
        "'They' is plural and needs the verb 'work'. We are talking about one woman, so use 'she works'.",
    },
    more: "Match the pronoun to the person: 'he' for a man or boy, 'she' for a woman or girl. Words like 'mother', 'sister', 'aunt' and 'daughter' are female.",
    tip: "Before you write 'he' or 'she', look back at the noun it replaces. Is that person a man or a woman?",
  },
  'My brother is kind. She helps everyone.': {
    why: "The mistake is the pronoun 'She'. 'My brother' is a boy or a man, so the next sentence must use 'he'. So we say 'My brother is kind. He helps everyone.'",
    not: {
      'My brother is kind. She helps everyone.':
        "This is the sentence with the mistake. 'She' is for a woman or a girl, but a brother is male.",
      'My brother is kind. It helps everyone.':
        "'It' is for things and animals. We use 'he' for a person who is male.",
      'My brother is kind. They helps everyone.':
        "'They' is plural and does not go with 'helps'. One brother is 'he', with 'helps'.",
    },
    more: "Male family words take 'he': 'father', 'brother', 'uncle', 'grandfather', 'son'. Female ones take 'she': 'mother', 'sister', 'aunt', 'grandmother', 'daughter'.",
    tip: 'Say the two sentences aloud together. If the pronoun sounds wrong for the person, check the family word.',
  },
  'This is my friend Sara. He is from Jordan.': {
    why: "The mistake is the pronoun 'He'. Sara is a girl’s name, so we use 'she'. So we say 'This is my friend Sara. She is from Jordan.'",
    not: {
      'This is my friend Sara. He is from Jordan.':
        "This is the sentence with the mistake. 'He' is for a man, but here the name is Sara.",
      'This is my friend Sara. It is from Jordan.':
        "'It' is not used for a person. Sara is a woman, so use 'she'.",
      'This is my friend Sara. They is from Jordan.':
        "'They' is plural and does not go with 'is'. For one woman, use 'she is'.",
    },
    more: "Names usually tell you whether to use 'he' or 'she'. If you are not sure, ask the person or use their name again.",
    tip: "In a short text about a person, give the name first. Then use 'he' or 'she' for the next sentences.",
  },
  'I have a son. She is six years old.': {
    why: "The mistake is the pronoun 'She'. A son is a boy, so we use 'he'. So we say 'I have a son. He is six years old.'",
    not: {
      'I have a son. She is six years old.':
        "This is the sentence with the mistake. 'She' is for a girl or a woman, but a son is male.",
      'I have a son. It is six years old.': "We do not use 'it' for a child. A boy is 'he'.",
      'I have a son. They is six years old.':
        "'They' is plural and does not go with 'is'. For one boy, use 'he is'.",
    },
    more: "To give an age, we use 'is' and the number: 'He is six years old' or just 'He is six'. We do not use 'has'.",
    tip: "Use 'he' for a son, a brother, a father and any boy or man. Use 'she' for a daughter, a sister, a mother and any girl or woman.",
  },
  'The teacher gave us homework. She told us his name.': {
    why: "The mistake is that 'She' and 'his' mean the same teacher but do not match. If the teacher is 'she', the name is 'her name'. So we say 'She told us her name'.",
    not: {
      'The teacher gave us homework. She told us his name.':
        "This is the sentence with the mistake. 'She' and 'his' do not match, and 'his' points to a man who is not in the sentence.",
      'The teacher gave us homework. He told us her name.':
        "Now 'He' and 'her' do not match. The teacher cannot be both a man and a woman.",
      'The teacher gave us homework. It told us her name.':
        "'It' is not used for a person, and 'it' and 'her' do not match.",
    },
    more: "The pronouns that mean one person must agree: 'She told us her name' or 'He told us his name'. A teacher can be a man or a woman.",
    tip: 'Check every pronoun that refers to one person. They must all be male (he, his) or all female (she, her).',
  },
  'I have three brother.': {
    why: "The mistake is the singular noun after 'three'. After a number bigger than one, the noun must be plural. So we add -s and say 'I have three brothers'.",
    not: {
      'I have three brother.':
        "This is the sentence with the mistake. 'Brother' is singular, but 'three' means more than one.",
      'I have three brotheres.':
        "Nouns ending in -s, -x, -ch or -sh add -es. 'Brother' just adds -s.",
      'I have three brothers’.':
        'An apostrophe after the -s shows that something belongs to the brothers. Here we only count them, so there is no apostrophe.',
    },
    more: "Nouns that end in -s, -x, -z, -ch or -sh add -es: 'bus, buses', 'box, boxes', 'watch, watches'. Most other nouns just add -s.",
    tip: "Do not add an apostrophe to make a plural. 'Brothers' is a plural, and 'brother’s' shows that something belongs to one brother.",
  },
  'There are many car in the street.': {
    why: "The mistake is 'car' after 'many'. 'Many' is used with plural nouns, so the noun needs -s. We say 'There are many cars in the street'.",
    not: {
      'There are many car in the street.':
        "This is the sentence with the mistake. 'Many' needs a plural noun.",
      'There are many cares in the street.':
        "'Cares' is a different word, meaning worries. 'Car' just adds -s to make 'cars'.",
      'There is many car in the street.':
        "'Is' goes with one thing. With 'many' we use 'are' and a plural noun.",
    },
    more: "These words need a plural noun: 'many', 'few', 'several' and numbers such as 'two'. For uncountable nouns we use 'much' and 'little'.",
    tip: "After 'many', 'several' or a number, add -s to the noun. After 'much', use an uncountable noun: 'much water'.",
  },
  'She bought two box of apples.': {
    why: "The mistake is 'box' after 'two'. We need the plural, and nouns ending in -x add -es. So we say 'She bought two boxes of apples'.",
    not: {
      'She bought two box of apples.':
        "This is the sentence with the mistake. 'Two' needs a plural noun.",
      'She bought two boxs of apples.':
        "A noun that ends in -x adds -es, not just -s. The spelling is 'boxes'.",
      'She bought two box of apple.':
        "'Box' is still singular after 'two', and 'apple' is missing its -s.",
    },
    more: "Add -es to nouns that end in -s, -x, -z, -ch and -sh: 'class, classes', 'dish, dishes', 'watch, watches'.",
    tip: "If a noun ends with a hissing sound, add -es. Say 'box' and 'boxes' aloud to hear the extra syllable.",
  },
  'There are five child in the room.': {
    why: "The mistake is 'child' after 'five'. 'Child' has an irregular plural, 'children'. So we say 'There are five children in the room'.",
    not: {
      'There are five childs in the room.':
        "'Childs' is not a word. 'Child' does not add -s; it changes to 'children'.",
      'There are five child in the room.':
        "This is the sentence with the mistake. 'Five' needs a plural noun.",
      'There are five childrens in the room.':
        "'Children' is already plural. We do not add another -s.",
    },
    more: "Other irregular plurals: 'man, men', 'woman, women', 'foot, feet', 'tooth, teeth', 'mouse, mice', 'person, people'. They must be learnt one by one.",
    tip: 'Keep a list of irregular plurals in your notebook. Add a new one each time you meet it.',
  },
  'I need to buy some potato.': {
    why: "The mistake is the singular 'potato'. We buy more than one, so we need the plural. 'Potato' ends in -o and adds -es: 'potatoes'. So we say 'I need to buy some potatoes'.",
    not: {
      'I need to buy some potato.':
        "This is the sentence with the mistake. With 'some', we need the plural 'potatoes' when we mean several.",
      'I need to buy some potatos.': "The spelling is wrong. 'Potato' adds -es, not just -s.",
      'I need to buy some potatoe.':
        "'Potatoe' is a wrong spelling of the singular. The singular is 'potato', and the plural is 'potatoes'.",
    },
    more: "Other nouns that add -es after -o: 'tomato, tomatoes' and 'hero, heroes'. But 'photo, photos' and 'piano, pianos' add only -s.",
    tip: 'When you are not sure how to spell a plural, check a dictionary. It shows the plural of difficult words.',
  },
  'He has many friend at school.': {
    why: "The mistake is 'friend' after 'many'. 'Many' needs a plural noun, so we add -s. We say 'He has many friends at school'.",
    not: {
      'He has many friend at school.':
        "This is the sentence with the mistake. 'Many' goes with a plural noun.",
      'He has many friendes at school.':
        "'Friend' does not end in -s, -x, -ch or -sh, so it adds only -s: 'friends'.",
      'He have many friend at school.':
        "'Have' is wrong with 'he': it should be 'has'. 'Friend' also needs the plural.",
    },
    more: "'Many' is common in questions and negatives: 'How many friends do you have?' and 'He doesn’t have many friends'. In positive sentences 'a lot of' is often more natural.",
    tip: "Practise the pair: 'one friend, two friends'. Say the number first, then check the ending of the noun.",
  },
  'We saw three woman at the door.': {
    why: "The mistake is 'woman' after 'three'. 'Woman' has an irregular plural: 'women'. So we say 'We saw three women at the door'.",
    not: {
      'We saw three womans at the door.':
        "'Womans' is not a word. This noun does not add -s; it changes inside: 'women'.",
      'We saw three woman at the door.':
        "This is the sentence with the mistake. 'Three' needs a plural noun.",
      'We saw three womens at the door.': "'Women' is already plural, so it needs no -s.",
    },
    more: "The pronunciation changes too: 'woman' and 'women' sound different, so listen for the first vowel. The pair 'man, men' works in the same way.",
    tip: 'Learn irregular plurals in pairs: man and men, woman and women, child and children, foot and feet.',
  },
  'There are a lot of book on the shelf.': {
    why: "The mistake is 'book' after 'a lot of'. With a countable noun, 'a lot of' needs a plural noun and 'are'. So we say 'There are a lot of books on the shelf'.",
    not: {
      'There are a lot of book on the shelf.':
        "This is the sentence with the mistake. A countable noun after 'a lot of' must be plural.",
      'There is a lot of book on the shelf.':
        "'There is a lot of' goes with uncountable nouns, such as 'water'. Books are countable, so use 'There are a lot of books'.",
      'There are a lot of bookes on the shelf.':
        "'Book' adds only -s. The ending -es is for words that end in -s, -x, -ch or -sh.",
    },
    more: "'A lot of' works with both kinds of noun. With a countable noun the verb is plural: 'a lot of books are'. With an uncountable noun it is singular: 'a lot of water is'.",
    tip: "Look at the noun after 'a lot of'. Can you count it? If you can, add -s and use 'are'.",
  },
}
