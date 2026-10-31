import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * The Verb To Be: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/to-be-conjugation.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 240 questions, 80 a tier, with no
 * tense label and no bracketed answer; each question's own options, every
 * wrong one a mistake learners make; new kinds (questions, negatives, short
 * answers, there is and there are, be for age and feelings, be after must and
 * want, will be and won't be, and at tier 3 "to be" in a short text or a
 * dialogue: has been with for and since, the passive, was and were with an
 * -ing verb, question tags, if and when, being and to be, going to, used to
 * be). Every explanation of the 54 earlier questions was rewritten, because
 * their options changed and their reasons pointed to the label. Written with
 * AI and checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 31 October 2026. Twenty-three explanations
 * corrected: rules stated too absolutely for this bank's own questions ("were"
 * never with I, beside "If I were you"; "ago" always with the past simple;
 * never "do" with "to be", beside "Don't be late"), a tip whose example broke
 * its own rule, a "more" that named two other questions' verbs, a sound given
 * wrongly (we're rhymes with here), the "why not" for "am", no longer
 * capitalised, and a tip that showed "everyone is" beside the question that
 * asks it.
 */
export const EXPLANATIONS: GameExplanations = {
  'I ___ a student at the language school.': {
    why: "The subject is 'I', and in a present statement 'I' always takes 'am'. 'Is' and 'are' go with other subjects.",
    not: {
      is: "'Is' goes with one other person or thing, such as he, she or 'my teacher'. It never goes with 'I'.",
      are: "'Are' goes with you, we, they and plural nouns. With 'I', the only present form is 'am'.",
      were: "'Were' is a past form for you, we and they, and this sentence is about now. With 'I', the present form is 'am'.",
    },
    more: "In speaking we often join 'I' and 'am' with an apostrophe. The apostrophe stands for the missing letter a.",
    tip: "When you introduce yourself, begin with 'I am' and then your name, your job or where you study.",
  },
  'She ___ my best friend from class.': {
    why: "The subject 'she' means one person, so the present form is 'is'. We use 'is' for one person or thing that is not you or me.",
    not: {
      am: "'Am' goes only with 'I'. Here the subject is 'she', so the verb is 'is'.",
      are: "'Are' is for you, we, they and more than one person. 'She' means one person, so the verb is 'is'.",
      were: "'Were' is a past form for you, we and they. It does not go with 'she'.",
    },
    more: "'Is' can link a person to a noun, such as a friend or a doctor, or to an adjective, such as happy or tall.",
    tip: "To check, put 'he', 'she' or 'it' in place of the subject. If one of them fits, the present form is 'is'.",
  },
  'They ___ from Spain and Portugal.': {
    why: "'They' means more than one person, so the present form is 'are'. The plural subjects we, you and they all take 'are'.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'they', more than one person, so we need 'are'.",
      is: "'Is' is for one person or thing. 'They' means more than one, so the verb must be 'are'.",
      was: "'Was' is a past form for one person or thing. It never goes with 'they'.",
    },
    more: "To say where someone comes from, use 'to be', then 'from', then the place: from Spain, from a small town.",
    tip: "When you write about a group of people, check the verb: more than one person always needs 'are' in the present.",
  },
  'We ___ ready to begin the lesson.': {
    why: "The subject is 'we': you and other people together. That is more than one person, so the present form is 'are'.",
    not: {
      am: "'Am' is only for 'I'. 'We' includes other people too, so the verb is 'are'.",
      is: "'Is' is for one person or thing. 'We' means more than one, so use 'are'.",
      was: "'Was' is a past form for one person or thing. It never goes with 'we'.",
    },
    more: "'To be' joins a person to a word that describes them, such as ready, late or happy.",
    tip: "To tell a teacher you can start, use 'to be' with 'ready'. Do not leave the verb out: 'We ready' is not English.",
  },
  'He ___ a very kind teacher.': {
    why: "The subject 'he' means one person, so the present form is 'is'. One person or thing, other than you or me, takes 'is'.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'he', so the verb is 'is'.",
      are: "'Are' is for you, we, they and plural nouns. 'He' means one person, so use 'is'.",
      were: "'Were' is a past form for you, we and they. It does not go with 'he'.",
    },
    more: "We often describe people with 'to be', then 'a' or 'an', then an adjective and a noun: a kind teacher, an old friend.",
    tip: "When you describe someone in your writing, use 'is' for one person and 'are' for two or more.",
  },
  'You ___ very good at grammar.': {
    why: "'You' always takes 'are', whether you mean one person or a whole group. So the present form here is 'are'.",
    not: {
      am: "'Am' goes only with 'I'. When we speak to someone, the subject is 'you', and its verb is 'are'.",
      is: "Even when 'you' means only one person, the verb is never 'is'. 'You' always takes 'are'.",
      was: "'Was' never goes with 'you', even for one person. 'You' takes 'are' in the present and 'were' in the past.",
    },
    more: "'Good at' is followed by a subject or an activity: good at maths, good at swimming.",
    tip: "To praise someone in English, use 'are' with 'you' and an adjective such as good, clever or kind.",
  },
  'The coffee ___ too hot to drink.': {
    why: "'The coffee' is one thing, so the present form is 'is'. A noun for one thing takes 'is', just as the word 'it' does.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'the coffee', one thing, so use 'is'.",
      are: "'Are' is for more than one thing. 'The coffee' is one thing, so the verb is 'is'.",
      were: "'Were' is a past form for plurals. 'The coffee' is one thing, so 'were' does not fit.",
    },
    more: "'Too hot to drink' means so hot that you cannot drink it yet.",
    tip: "To check a noun subject, change it to 'it' or 'they' in your head. If 'it' fits, use 'is'.",
  },
  'My parents ___ at work right now.': {
    why: "'My parents' means two people, so the verb is 'are'. 'Right now' tells us the sentence is about this moment, so we need the present.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'my parents', so use 'are'.",
      is: "'Is' is for one person. 'My parents' are two people, so the verb is 'are'.",
      were: "'Were' is the past. 'Right now' means this moment, so the past does not fit here.",
    },
    more: "Use 'to be' with 'at' to say where people are: at work, at school, at home.",
    tip: "Time words such as 'now' and 'right now' tell you to use the present: am, is or are.",
  },
  'It ___ a beautiful sunny day today.': {
    why: "We use 'it' to talk about the weather and the day, and 'it' takes 'is' in the present: it is a beautiful sunny day.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'it', so use 'is'.",
      are: "'Are' is for more than one thing. The subject 'it' means one thing, so the verb is 'is'.",
      were: "'Were' is a past form for you, we, they and plurals. It does not go with 'it' here.",
    },
    more: "An English sentence needs a subject. For the weather and the day we use 'it', even though 'it' is not a thing we can see.",
    tip: "To talk about the weather or the day, start with 'It' and the right form of 'to be'.",
  },
  'The children ___ playing in the garden.': {
    why: "'Children' is the plural of 'child', so 'the children' means more than one, and the verb is 'are'.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'the children', so use 'are'.",
      is: "'Is' is for one person. 'Children' already means more than one, even without an s, so use 'are'.",
      was: "'Was' is a past form for one person or thing. 'The children' are more than one.",
    },
    more: "Here 'are' helps another verb: 'are playing' tells us what is happening at the moment.",
    tip: "Learn the plurals without -s, such as children, people, men and women. As subjects, they all need 'are' in the present.",
  },
  'I ___ happy to help you with English.': {
    why: "The subject is 'I', so the present form is 'am'. In a statement, 'I' never takes 'is' or 'are'.",
    not: {
      is: "'Is' goes with he, she, it and one thing. With 'I', the present form is 'am'.",
      are: "'Are' goes with you, we, they and plural nouns. With 'I', the present form is 'am'.",
      were: "'Were' is a past form for you, we and they, and this sentence is about now. With 'I', use 'am'.",
    },
    more: "'Happy to help' is a polite way to offer help. 'To be happy to' and a verb means you want to do it.",
    tip: "When someone thanks you, you can answer 'I am happy to help', or more simply 'Happy to help'.",
  },
  'This book ___ very interesting.': {
    why: "'This book' is one thing, so the present form is 'is'. 'This' always comes before one thing.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'this book', so use 'is'.",
      are: "'Are' is for more than one thing, as in 'these books'. 'This book' is one, so use 'is'.",
      were: "'Were' is a past form for plurals. 'This book' is one thing.",
    },
    more: "'This' is for one thing near you, and 'these' for more than one. 'This' takes 'is', and 'these' takes 'are'.",
    tip: "When you give your opinion of a book or a film, use 'is' and an adjective: interesting, boring, funny.",
  },
  'We ___ in the same class this term.': {
    why: "'We' means you and other people together. That is more than one person, so the present form is 'are'.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'we', so use 'are'.",
      is: "'Is' is for one person or thing. 'We' means more than one, so use 'are'.",
      was: "'Was' is a past form for one person or thing, so it never goes with 'we'.",
    },
    more: "'This term' means the part of the school year happening now, so the sentence is about the present.",
    tip: "With 'we', 'you' and 'they', the present form of 'to be' is always 'are'.",
  },
  'Tom and Lucy ___ brother and sister.': {
    why: "Two people joined by 'and' make a plural subject, so the verb is 'are'. Think of 'Tom and Lucy' as 'they'.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'Tom and Lucy', so use 'are'.",
      is: "'Is' is for one person. Tom and Lucy are two people, so the verb is 'are'.",
      was: "'Was' is a past form for one person. Tom and Lucy are two people.",
    },
    more: "Any two subjects joined by 'and' take 'are' in the present: a cat and a dog, my aunt and my cousin.",
    tip: "Before you choose the verb, count the people in the subject. Two or more always need 'are'.",
  },
  'The weather ___ cold in winter.': {
    why: "'The weather' is one thing, so the present form is 'is'. The sentence states a general fact, so we use the present.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'the weather', so use 'is'.",
      are: "'Are' is for more than one thing. 'The weather' is one thing, so use 'is'.",
      were: "'Were' is a past form for plurals. 'The weather' is one thing.",
    },
    more: 'We use the present for facts that are always or usually true, such as the weather in each season.',
    tip: "When you describe your country, use 'is' for one thing, such as the weather, and 'are' for plurals, such as the summers.",
  },
  'Yesterday I ___ very tired after work.': {
    why: "'Yesterday' tells us the sentence is about the past. With 'I', the past form of 'to be' is 'was'.",
    not: {
      were: "'Were' is the past form for you, we and they. With 'I', the past form is 'was'.",
      am: "'Am' is the present. 'Yesterday' shows the sentence is about the past, so use 'was'.",
    },
    more: "'To be' has only two past forms: 'was' for I, he, she, it and one thing, and 'were' for you, we, they and plurals.",
    tip: "Look for time words such as yesterday, last night and ago. They tell you to use 'was' or 'were'.",
  },
  'She ___ at the cinema last night.': {
    why: "'Last night' is in the past, and 'she' means one person, so the past form is 'was'.",
    not: {
      were: "'Were' is the past form for you, we and they. With 'she', the past form is 'was'.",
      is: "'Is' is the present. 'Last night' is in the past, so use 'was'.",
      'has been':
        "'Has been' links the past to now. 'Last night' is finished, so English uses the past form 'was'.",
    },
    more: "Use 'to be' with 'at' and a place to say where someone was: at the cinema, at the park.",
    tip: "In a story about last weekend, check every 'to be' verb: 'was' for one person, 'were' for two or more.",
  },
  'They ___ on holiday in Italy last summer.': {
    why: "'Last summer' is in the past, and 'they' means more than one person, so the past form is 'were'.",
    not: {
      was: "'Was' is the past form for I, he, she and it. With 'they', the past form is 'were'.",
      are: "'Are' is the present. 'Last summer' is in the past, so use 'were'.",
      'have been':
        "'Have been' links the past to now. With a finished time such as 'last summer', English uses the past form 'were'.",
    },
    more: "'On holiday' means away from home for a rest. British English says 'holiday' where American English says 'vacation'.",
    tip: "When you write about a past trip, use 'were' with we and they, and 'was' with I, he and she.",
  },
  'We ___ late for the bus yesterday morning.': {
    why: "'Yesterday morning' is in the past, and 'we' means more than one person, so the past form is 'were'.",
    not: {
      was: "'Was' is the past form for I, he, she and it. With 'we', the past form is 'were'.",
      are: "'Are' is the present. 'Yesterday morning' is in the past, so use 'were'.",
      'have been':
        "'Have been' links the past to now. With a finished time such as 'yesterday morning', use the past form 'were'.",
    },
    more: "'Late for' something means you arrived after it started or left: late for school, late for the bus.",
    tip: "To explain why someone was late, use 'to be' and 'because': Maria was late because her train broke down.",
  },
  'Forty years ago, my grandad ___ a footballer.': {
    why: "'Forty years ago' puts the sentence in the past, and 'my grandad' is one person, so the past form is 'was'.",
    not: {
      were: "'Were' is the past form for you, we and they. 'My grandad' is one person, so use 'was'.",
      is: "'Is' is the present. 'Forty years ago' is in the past, so use 'was'.",
      'has been':
        "'Has been' links the past to now. 'Forty years ago' is a finished time, so use 'was'.",
    },
    more: "'Ago' comes after a length of time: two days ago, forty years ago. It always goes with the past.",
    tip: "To talk about someone's old job, use 'was' or 'were' and 'a' or 'an': Ali was a nurse. The two brothers were farmers.",
  },
  'You ___ very helpful yesterday, thank you.': {
    why: "'Yesterday' is in the past, and 'you' always takes 'were' in the past, for one person or for many.",
    not: {
      was: "'Was' is for I, he, she and it. Even for one person, 'you' takes 'were'.",
      are: "'Are' is the present. 'Yesterday' is in the past, so use 'were'.",
      'have been':
        "'Have been' links a time to now. 'Yesterday' is finished, so English uses the past form 'were'.",
    },
    more: "'You' takes the same form for one person and for many: 'are' in the present and 'were' in the past.",
    tip: "To thank someone for help they gave, use 'were' and an adjective: Thank you, you were very kind.",
  },
  'The film we saw last night ___ really exciting.': {
    why: "The subject is 'the film', one thing, and 'last night' is in the past. So we need the past form for one thing: 'was'.",
    not: {
      were: "'Were' is the past form for plurals. The subject is 'the film', one thing, so use 'was'. 'We' is not the subject of this verb.",
      is: "'Is' is the present. We saw the film last night, in the past, so use 'was'.",
      are: "'Are' is the present, for plurals. The subject is one film, in the past, so use 'was'.",
    },
    more: "In this sentence, 'we saw last night' tells us which film. The main subject is still 'the film'.",
    tip: 'In a long subject, find the main noun and choose the verb for it. Ignore the words that describe it.',
  },
  'My grandparents ___ born in Wales.': {
    why: "We use the past of 'to be' with 'born', because a birth is in the past. 'My grandparents' is plural, so the verb is 'were'.",
    not: {
      was: "'Was' is the past form for one person. 'My grandparents' means two or more people, so use 'were'.",
      are: "We never use the present with 'born' for someone's birth. It happened in the past, so use 'were born'.",
      'have been':
        "We never use 'have been' with 'born' for a birth. A birth is at a finished time, so we use 'were born'.",
    },
    more: "Many learners use the present here, but English uses the past for a person's birth, because it happened at a finished time.",
    tip: "To write about your family history, use 'was born' or 'were born', then 'in' with a place or a year.",
  },
  'It ___ raining when we left the house.': {
    why: "'When we left the house' is in the past, so the verb is past too. The subject 'it' means one thing, so the past form is 'was'.",
    not: {
      were: "'Were' is the past form for you, we and they. With 'it', the past form is 'was'.",
      is: "'Is' is the present. 'We left' shows the time is past, so use 'was'.",
      'has been':
        "'Has been' links the past to now. 'When we left the house' is a finished time, so use 'was'.",
    },
    more: "'Was raining' describes weather that was already happening when something else happened.",
    tip: "In a story, use 'was' or 'were' with an -ing verb to set the scene: Snow was falling.",
  },
  'Last Sunday the shops ___ closed.': {
    why: "'Last Sunday' is in the past, and 'the shops' is plural, so the past form is 'were'.",
    not: {
      was: "'Was' is the past form for one thing. 'The shops' are more than one, so use 'were'.",
      are: "'Are' is the present. 'Last Sunday' is in the past, so use 'were'.",
      'have been': "'Have been' links the past to now. 'Last Sunday' is finished, so use 'were'.",
    },
    more: "'Closed' here describes the shops, like an adjective. Its opposite is 'open'.",
    tip: "Words with 'last', such as last Sunday, last week and last year, always point to the past.",
  },
  'I ___ born in nineteen ninety.': {
    why: "A birth is in the past, so we use the past of 'to be' with 'born'. With 'I', the past form is 'was'.",
    not: {
      were: "'Were' is the past form for you, we and they. With 'I', the past form is 'was'.",
      am: "We never use the present with 'born' for your own birth. It happened in the past, so use 'was'.",
    },
    more: 'Years are often said in two pairs of numbers: 1990 is nineteen ninety. For 2008 we say two thousand and eight.',
    tip: "When you tell someone about your birth, say 'I was born on' and the date, or 'in' and the year or the place.",
  },
  'The students ___ quiet during the test yesterday.': {
    why: "'Yesterday' is in the past, and 'the students' is plural, so the past form is 'were'.",
    not: {
      was: "'Was' is for one person or thing. 'The students' are more than one, so use 'were'.",
      are: "'Are' is the present. 'Yesterday' is in the past, so use 'were'.",
      'have been':
        "'Have been' links the past to now. 'Yesterday' is a finished time, so use 'were'.",
    },
    more: "'During' means all through a period of time: during the test, during the night.",
    tip: 'If a sentence has a time word at the end, read to the end before you choose the verb.',
  },
  'Last week ___ very busy at the office.': {
    why: "Here the subject is 'last week' itself: one period of time in the past. So the past form for one thing is 'was'.",
    not: {
      were: "'Were' is the past form for plurals. 'Last week' is one week, so use 'was'.",
      is: "'Is' is the present. 'Last week' is in the past, so use 'was'.",
      are: "'Are' is the present, for plurals. 'Last week' is one period in the past, so use 'was'.",
    },
    more: 'A time, such as Monday or the weekend, may be the subject of a sentence: Monday was busy.',
    tip: "To describe a period of time, use 'was' with busy, quiet, long or fun.",
  },
  'A: Are you a student here? B: No, ___ a teacher.': {
    why: "B talks about herself, so the subject is 'I', and 'I' takes 'am'. In speaking, 'I am' becomes 'I'm', with an apostrophe for the missing a.",
    not: {
      I: "'I a teacher' has no verb. English needs 'am' here, joined to 'I' in the short form.",
      am: "'No, am a teacher' does not say who. English needs the subject 'I' before the verb.",
    },
    more: "Some languages can leave out the subject, or the verb 'to be'. In a sentence like this, English never leaves out either.",
    tip: "Check that every sentence you write has a subject and a verb. In formal writing, use the full form 'I am'.",
  },
  'A: Who is that boy? B: ___ a good friend of mine.': {
    why: "The boy is one person, so the subject is 'he' and the verb is 'is'. 'He is' joins to make 'He's', with an apostrophe for the missing i.",
    not: {
      His: "'His' sounds similar, but it means 'belonging to him', as in 'his bag'. With 'his', the sentence would have no verb.",
      He: "'He a good friend' has no verb. English needs 'is' after 'he' here.",
      Is: "'Is a good friend' has no subject. English needs 'he' to say who.",
    },
    more: "The apostrophe in the short form stands for a missing letter. 'His' has no apostrophe, because no letter is missing.",
    tip: "If you can say 'he is' in its place, write the short form with an apostrophe. If you mean 'belonging to him', write 'his'.",
  },
  'A: Where are your grandparents from? B: ___ from a small village in Ghana.': {
    why: "Grandparents are more than one person, so the subject is 'they' and the verb is 'are'. 'They are' joins to make 'They're'.",
    not: {
      Their:
        "'Their' sounds the same, but it means 'belonging to them', as in 'their house'. With 'their', the sentence has no subject or verb.",
      There:
        "'There' sounds the same, but it means a place, or begins a sentence about what exists. It cannot stand for 'they are'.",
      They: "'They from a small village' has no verb. English needs 'are' after 'they' here.",
      'There are':
        "'There are' says what exists, as in 'There are two shops'. It cannot stand for 'they are', and 'There are from a village' is not English.",
    },
    more: "Their, there and they're sound the same. Only the one with an apostrophe means 'they are'.",
    tip: "Test it: if you can say 'they are' in its place, write the short form with an apostrophe.",
  },
  'A: What are you and Sam doing tonight? B: ___ going to the party.': {
    why: "B and Sam together make 'we', and 'we' takes 'are'. 'We are' joins to make 'We're', which here helps the verb 'going'.",
    not: {
      Were: "'Were' is the past form of 'to be', with no apostrophe. Here we need 'we' and 'are' joined together.",
      We: "'We going' has no verb 'to be'. With an -ing verb, English needs 'are' after 'we'.",
      Where:
        "'Where' is a question word about places. It sounds a little like the short form, but it has no verb in it.",
    },
    more: "'Were' and the short form of 'we are' look alike. 'Were' rhymes with 'her'; the short form rhymes with 'here' and has an apostrophe.",
    tip: "When you write plans with an -ing verb, check that a form of 'to be' comes before it.",
  },
  'She ___ very tall, but her brother is.': {
    why: "'But' shows a contrast with her brother, so this part needs the negative. With 'she', the negative of 'to be' is 'isn't', the short form of 'is not'.",
    not: {
      "doesn't":
        "'Doesn't' goes with other verbs, as in 'doesn't like'. 'Tall' is not a verb, so the negative comes from 'to be'.",
      not: "'Not' alone is not enough. English needs the verb 'to be' as well.",
      "aren't": "'Aren't' is for you, we, they and plurals. With 'she', the negative is 'isn't'.",
    },
    more: "To make 'to be' negative, add 'not' after it. In statements and questions, we do not use 'do' or 'does' with 'to be'.",
    tip: "In speaking, use the short forms isn't and aren't. In formal writing, you can write is not and are not.",
  },
  'We ___ ready yet. Please wait a minute.': {
    why: "'Yet' and 'please wait' tell us the answer is no. With 'we', the negative of 'to be' is 'aren't', the short form of 'are not'.",
    not: {
      "isn't": "'Isn't' is for he, she, it and one thing. With 'we', the negative is 'aren't'.",
      "don't":
        "'Don't' goes with other verbs, as in 'don't know'. 'Ready' is not a verb, so we use 'to be'.",
      not: "'Not' alone is not enough here. English needs 'to be' as well.",
      "haven't":
        "'Haven't' goes with another verb, as in 'haven't finished'. 'Ready' is an adjective, so we need 'to be': aren't.",
    },
    more: "'Yet' at the end of a negative sentence means 'until now'. It shows we expect it to happen soon.",
    tip: "To ask for more time politely, use 'not ready yet' and then 'Please wait a minute'.",
  },
  'Relax. You ___ late. The lesson starts at ten.': {
    why: "'Relax' and the time of the lesson tell us the answer is no. With 'you', the negative of 'to be' is 'aren't'.",
    not: {
      "isn't":
        "'Isn't' is for he, she, it and one thing. 'You' always takes 'are', so the negative is 'aren't'.",
      "don't":
        "'Don't' goes with other verbs, as in 'don't worry'. 'Late' is not a verb, so we use 'to be'.",
      not: "'Not' alone is not enough. English needs 'to be' too.",
    },
    more: "'Late' means after the right time. Its opposite is 'early', and 'on time' means at the right time.",
    tip: "To calm a friend, you can say 'Relax' or 'Don't worry' and then explain why.",
  },
  'It ___ very cold today, so you can leave your coat at home.': {
    why: "'So you can leave your coat at home' tells us the answer is no. With 'it', the negative of 'to be' is 'isn't', the short form of 'is not'.",
    not: {
      "doesn't":
        "'Doesn't' goes with other verbs. 'Cold' is an adjective, so the negative comes from 'to be'.",
      not: "'Not' alone is not enough. English needs the verb too.",
      "aren't":
        "'Aren't' is for plurals and for you, we and they. With 'it', the negative is 'isn't'.",
    },
    more: "'So' joins a reason to a result: the reason is the weather, and the result is no coat.",
    tip: "For the weather, use 'it' and the negative of 'to be': it isn't warm, it isn't windy.",
  },
  'My brother ___ at the dentist at the moment.': {
    why: "'My brother' is one person, so the verb is 'is'. 'At the moment' means now, so we need the present.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'my brother', so use 'is'.",
      are: "'Are' is for you, we, they and more than one person. 'My brother' is one person.",
      was: "'Was' is the past. 'At the moment' means now, so the past does not fit.",
    },
    more: "'At the moment' and 'right now' mean the same: this time, as we speak.",
    tip: "When you say where someone is now, use 'to be', a place and 'at the moment' or 'now'.",
  },
  'I ___ in the kitchen now. Come and help me.': {
    why: "The subject is 'I', and 'now' tells us the sentence is about this moment. So the present form for 'I' is 'am'.",
    not: {
      is: "'Is' goes with he, she, it and one thing. With 'I' we use 'am'.",
      are: "'Are' goes with you, we and they. With 'I' we use 'am'.",
      was: "'Was' is the past. 'Now' and 'Come and help me' show the sentence is about this moment.",
    },
    more: "'Come and help me' is a request. It shows the speaker needs help right now.",
    tip: "When you phone home, say 'I am' or its short form, then the room or the place.",
  },
  'Your keys ___ on the table by the door.': {
    why: "'Your keys' means more than one key, so the verb is 'are'. Listen for the -s at the end: 'keys' is plural.",
    not: {
      am: "'Am' goes only with 'I'. The subject here is 'your keys', so use 'are'.",
      is: "'Is' is for one thing. 'Keys' ends in -s and means more than one, so use 'are'.",
      was: "'Was' is a past form for one thing. It cannot go with a plural like 'your keys'.",
    },
    more: "'By the door' means next to the door. 'On the table' tells us exactly where the keys are.",
    tip: "Before you choose 'is' or 'are', check the end of the noun: one key, two keys.",
  },
  'Zara and I ___ in the same football team.': {
    why: "'Zara and I' means two people, so the subject is plural, like 'we'. The verb is 'are', even though 'I' comes just before the gap.",
    not: {
      am: "'Am' goes with 'I' alone. Here 'I' is part of 'Zara and I', two people, so use 'are'.",
      is: "'Is' is for one person. 'Zara and I' are two people, so use 'are'.",
      was: "'Was' is a past form for one person. 'Zara and I' are two people.",
    },
    more: "In English, we put ourselves last: 'Zara and I', not 'I and Zara'. This order is more polite.",
    tip: "If unsure, change 'Zara and I' to 'we' in your head. Then the verb is clear.",
  },
  'In 2018, my sister and I ___ at the same primary school.': {
    why: "'In 2018' is in the past, and 'my sister and I' means two people. So we need the plural past form: 'were'.",
    not: {
      was: "'Was' is the past form for one person. 'My sister and I' are two people, so use 'were'.",
      am: "'Am' goes with 'I' alone, and it is the present. Here the subject is two people and the time is past.",
      'have been':
        "'Have been' links the past to now. 'In 2018' is a finished time, so English uses 'were'.",
    },
    more: "'In' with a year before now, such as 'in 2018', needs the past form of 'to be'.",
    tip: "To write about your school days, use 'was' for one person and 'were' for two or more.",
  },
  'Last night the moon ___ very bright.': {
    why: "'Last night' is in the past, and 'the moon' is one thing. So the past form is 'was'.",
    not: {
      were: "'Were' is the past form for plurals. 'The moon' is one thing, so use 'was'.",
      is: "'Is' is the present. 'Last night' is in the past, so use 'was'.",
      'has been':
        "'Has been' links the past to now. 'Last night' is finished, so English uses 'was'.",
    },
    more: "'Bright' means full of light. We use it for the sun, the moon, lights and colours.",
    tip: "When you describe the night sky in a story, use 'was' and 'were': The stars were bright.",
  },
  'When I ___ a child, I lived in Lagos.': {
    why: "'I lived' shows the sentence is about the past: the speaker is not a child now. With 'I', the past form is 'was'.",
    not: {
      were: "'Were' is the past form for you, we and they. With 'I', the past form is 'was'.",
      am: "'Am' is the present, but the speaker is not a child now: 'I lived' is past. Use 'was'.",
    },
    more: "'When I was a child' is a common way to start a story about your own past.",
    tip: "To compare your past and present, use 'was' for then and 'am' for now.",
  },
  'A: What is the weather like today? B: ___ very cold. Take a coat.': {
    why: "For the weather, English uses 'it' as the subject, and 'it' takes 'is'. 'It is' joins to make 'It's', with an apostrophe for the missing i.",
    not: {
      Its: "'Its' without an apostrophe means 'belonging to it', as in 'The dog wagged its tail'. It has no verb.",
      It: "'It very cold' has no verb. English needs 'is' after 'it' here.",
      Is: "'Is very cold' has no subject. English always needs 'it' for the weather.",
    },
    more: "Some languages describe the weather with no subject. English always needs one, and for the weather that subject is the word 'it'.",
    tip: "When you mean 'it is', write the short form with an apostrophe. When you mean 'belonging to it', write 'its' with none.",
  },
  'A: Where are you and your brother? B: ___ at the bus stop.': {
    why: "B is answering about B and B's brother: that is 'we', and 'we' takes 'are'. 'We are' joins to make 'We're'.",
    not: {
      "They're": "'They're' would mean other people. B is one of the two, so B says 'we'.",
      "You're":
        "'You're' is about the person you are talking to. B is talking about B and the brother.",
      Were: "'Were' is the past form of 'to be', with no apostrophe. 'Were at the bus stop' has no subject.",
    },
    more: "When a question asks about 'you and your brother', the answer uses 'we', because it includes the speaker.",
    tip: "Answer about yourself and someone else with 'we' and 'are': we're at home, we're on the bus.",
  },
  'A: Who is that woman? B: ___ my aunt. Her name is Rosa.': {
    why: "A woman is one person, so the subject here is the word 'she', and 'she' takes 'is'. 'She is' joins to make 'She's'.",
    not: {
      She: "'She my aunt' has no verb. English needs 'is' after 'she'.",
      Is: "'Is my aunt' has no subject. English needs 'she' to say who.",
    },
    more: "We use 'she' for a woman or a girl and 'he' for a man or a boy, for family members too.",
    tip: "When you introduce a family member, use 'she' or 'he', the verb 'is', and a family word: my cousin, my uncle.",
  },
  'A: Am I late? B: No, ___ just in time.': {
    why: "A asks about A, so B answers about A with 'you', and 'you' takes 'are'. 'You are' joins to make 'you're'.",
    not: {
      your: "'Your' means 'belonging to you', as in 'your bag'. It is not a verb, so the sentence has no verb.",
      you: "'You just in time' has no verb. English needs 'are' after 'you'.",
      are: "'Are just in time' has no subject. English needs 'you' to say who.",
    },
    more: "'Just in time' means at the last moment, but not late.",
    tip: "If you can say 'you are' in its place, write the short form with an apostrophe. If you mean 'belonging to you', write 'your'.",
  },
  'I ___ hungry. I had a big lunch.': {
    why: "A big lunch means the speaker does not want food, so we need the negative. With 'I', the negative of 'to be' is 'am not'.",
    not: {
      not: "'Not' alone is not enough. English needs 'am' as well.",
      "don't":
        "'Don't' goes with other verbs, as in 'don't want'. 'Hungry' is an adjective, so we use 'to be'.",
      "isn't": "'Isn't' is for he, she, it and one thing. With 'I', the negative is 'am not'.",
      "aren't": "'Aren't' is for you, we and they. With 'I', the negative is 'am not'.",
    },
    more: "In speaking, we usually join 'I' and 'am' and keep 'not' separate. In a statement, no short form like 'isn't' exists for 'am not'.",
    tip: "To refuse food politely, use 'not hungry' and 'thank you'.",
  },
  'My brothers ___ at school now. They are ill in bed.': {
    why: "They are ill in bed, so they cannot be at school: the answer is no. 'My brothers' is plural and 'now' is present, so the negative is 'aren't'.",
    not: {
      "isn't":
        "'Isn't' is for one person or thing. 'My brothers' means more than one, so use 'aren't'.",
      "don't":
        "'Don't' goes with other verbs. 'At school' is a place, so the negative comes from 'to be'.",
      not: "'Not' alone is not enough. English needs 'are' as well.",
      "weren't":
        "'Weren't' is the past. 'Now' shows the sentence is about this moment, so use 'aren't'.",
    },
    more: "'Ill in bed' means so ill that you stay in bed.",
    tip: "To tell a teacher someone is absent, use the negative of 'to be' and give the reason.",
  },
  'This ___ my bag. Mine is blue.': {
    why: "'Mine is blue' tells us this bag is a different one, so the answer is no. 'This' is one thing, so the negative is 'isn't'.",
    not: {
      "aren't": "'Aren't' is for more than one thing. 'This' means one thing, so use 'isn't'.",
      "doesn't":
        "'Doesn't' goes with other verbs. Here the verb is 'to be', so the negative is 'isn't'.",
      not: "'Not' alone is not enough. English needs 'is' as well.",
    },
    more: "'Mine' means 'my one'. We use it to avoid saying 'my bag' twice.",
    tip: "To say something belongs to someone else, use the negative of 'to be' and a word like mine, yours or his.",
  },
  'The tickets ___ expensive. They only cost two pounds.': {
    why: "Two pounds is cheap, so the answer is no. 'The tickets' is plural, so the negative is 'aren't'.",
    not: {
      "isn't": "'Isn't' is for one thing. 'The tickets' are more than one, so use 'aren't'.",
      "don't":
        "'Don't' goes with other verbs, as in 'don't cost'. 'Expensive' is an adjective, so use 'to be'.",
      not: "'Not' alone is not enough. English needs 'are' as well.",
    },
    more: "'Expensive' means it costs a lot of money. Its opposite is 'cheap'.",
    tip: "When you write about prices, use 'is' or 'are' with expensive or cheap, and 'cost' with the amount.",
  },
  'Mr Patel ___ in his office now. He is at lunch.': {
    why: "He is at lunch, so he cannot be in his office: the answer is no. 'Mr Patel' is one person, so the negative is 'isn't'.",
    not: {
      "aren't":
        "'Aren't' is for you, we, they and plurals. 'Mr Patel' is one person, so use 'isn't'.",
      "doesn't":
        "'Doesn't' goes with other verbs. 'In his office' is a place, so the negative comes from 'to be'.",
      not: "'Not' alone is not enough. English needs 'is' as well.",
    },
    more: "'At lunch' means having lunch somewhere, away from work.",
    tip: 'On the phone, you can say someone is not in and offer to take a message.',
  },
  '___ you a student at this school?': {
    why: "To make a question with 'to be', put the verb before the subject. The subject is 'you', so the question starts with 'Are'.",
    not: {
      Is: "'Is' goes with he, she, it and one thing. With 'you', the question starts with 'Are'.",
      Do: "'Do' makes questions with other verbs, as in 'Do you study here?'. With 'to be', we just move the verb to the front.",
      Does: "'Does' makes questions with other verbs, for he, she and it. With 'to be', no 'does' is needed.",
    },
    more: 'A statement and its question use the same words in a different order: the verb comes first in the question.',
    tip: "To ask about someone's job or school, start with the right form of 'to be', then the person.",
  },
  '___ your sister at home now?': {
    why: "'Your sister' means one person, so the question starts with 'Is'. With 'to be', the verb simply moves before the subject.",
    not: {
      Are: "'Are' is for you, we, they and plurals. 'Your sister' is one person, so use 'Is'.",
      Does: "'Does' makes questions with other verbs, as in 'Does she live here?'. With 'to be', no 'does' is needed.",
      Do: "'Do' makes questions with other verbs. 'At home' is a place, so the question uses 'to be'.",
    },
    more: "'At home' needs no 'the': at home, at school, at work.",
    tip: "Read the subject before you choose: one person takes 'Is', more than one takes 'Are'.",
  },
  '___ I in the right room for the English class?': {
    why: "The subject is 'I', and 'I' takes 'am'. In a question, 'am' comes first, before 'I'.",
    not: {
      Is: "'Is' goes with he, she, it and one thing. With 'I', the question starts with 'Am'.",
      Are: "'Are' goes with you, we and they. With 'I', the question starts with 'Am'.",
      Do: "'Do' makes questions with other verbs, as in 'Do I need a pen?'. Here the verb is 'to be'.",
    },
    more: "'The right room' means the correct room. Its opposite is 'the wrong room'.",
    tip: "Lost in a new building? Ask 'Am I in the right place?' and say which room you need.",
  },
  '___ the children asleep?': {
    why: "'The children' is plural, so the question starts with 'Are'. With 'to be', the verb moves before the subject.",
    not: {
      Is: "'Is' is for one person or thing. 'Children' means more than one, so use 'Are'.",
      Do: "'Do' makes questions with other verbs. 'Asleep' is an adjective, so the question uses 'to be'.",
      Does: "'Does' is for questions with other verbs, about one person. Here we need 'to be', for a plural.",
    },
    more: "'Asleep' means sleeping. We use it after 'to be': the whole class was asleep.",
    tip: "'Asleep' and 'awake' are adjectives, so to ask whether someone is sleeping, use 'to be' and one of them: Is Grandad awake?",
  },
  '___ it far to the station?': {
    why: "The subject is 'it', and 'it' takes 'is'. 'Far' is an adjective here, so the question uses 'to be', and the verb comes first.",
    not: {
      Are: "'Are' is for you, we, they and plurals. With 'it', the question starts with 'Is'.",
      Does: "'Does' makes questions with other verbs. 'Far' is not a verb, so the question uses 'to be'.",
      Do: "'Do' makes questions with other verbs, and it does not go with 'it'. Here we need 'Is'.",
    },
    more: "We use 'it' to talk about distance, as in 'How far is it?', and about time.",
    tip: "To ask for directions, start with 'Excuse me' and then your question.",
  },
  '___ Ravi and Ana in your class?': {
    why: "'Ravi and Ana' are two people, so the question starts with 'Are'. Two names joined by 'and' are plural.",
    not: {
      Is: "'Is' is for one person. Ravi and Ana are two, so use 'Are'.",
      Do: "'Do' makes questions with other verbs. 'In your class' is a place, so the question uses 'to be'.",
      Does: "'Does' makes questions with other verbs, for one person. Here we need 'Are', for two people.",
    },
    more: "To check the verb, replace the two names with 'they' in your head.",
    tip: "Count the people in the subject before the verb: one name takes 'Is', two names take 'Are'.",
  },
  'How old ___ your brother?': {
    why: "English gives age with 'to be', not 'have'. 'Your brother' means one person, so the verb is 'is'.",
    not: {
      are: "'Are' is for plurals. 'Your brother' is one person, so use 'is'.",
      has: "Some languages use 'have' for age. English uses 'to be': we ask how old someone is.",
      does: "'Does' makes questions with other verbs. Age uses 'to be', so we need 'is'.",
    },
    more: "The answer also uses 'to be' and a number, with or without 'years old'.",
    tip: "Never use 'have' for age in English. Ask with 'How old' and the right form of 'to be'.",
  },
  'Where ___ the toilets, please?': {
    why: "'The toilets' is plural, so the verb is 'are'. In a question with 'where', the verb comes before the subject.",
    not: {
      is: "'Is' is for one thing. 'Toilets' ends in -s and means more than one, so use 'are'.",
      do: "'Do' makes questions with other verbs. To ask where things are, use 'to be'.",
      does: "'Does' makes questions with other verbs, for one thing. Here we need 'are', for a plural.",
    },
    more: "In British English, 'toilets' is the usual word in public places. You may also see 'WC', or 'Ladies' and 'Gents'.",
    tip: "Add 'please' or 'Excuse me' to make a question polite.",
  },
  '___ your parents from Turkey?': {
    why: "'Your parents' is plural, so the question starts with 'Are'. With 'to be', the verb moves before the subject.",
    not: {
      Is: "'Is' is for one person. 'Your parents' are two people, so use 'Are'.",
      Do: "'Do' makes questions with other verbs, as in 'Do your parents live here?'. With 'from', we use 'to be'.",
      Does: "'Does' is for questions with other verbs, about one person. Here we need 'Are', for two people.",
    },
    more: "We ask where someone comes from with 'to be' and 'from', or with the verb 'come from'.",
    tip: "To ask about someone's family, put the right form of 'to be' first, then 'your' and the family word.",
  },
  'A: Are you hungry? B: Yes, ___.': {
    why: "A asks about B, so B answers about B with 'I'. A short answer repeats the verb from the question, here 'to be', and ends with the full form.",
    not: {
      "I'm":
        "A short answer cannot end with a short form like this one. At the end, use the full form 'I am'.",
      'I do':
        "'Do' answers questions with 'do', such as 'Do you like tea?'. This question uses 'are', so the answer uses 'to be'.",
      'you are':
        "B is talking about B, not about A. The question says 'you', so the answer says 'I'.",
    },
    more: "Short answers sound more natural than just 'Yes'. They repeat the verb from the question.",
    tip: 'Listen to the first word of the question: it tells you which verb to use in your short answer.',
  },
  'A: Is your brother at school today? B: No, ___.': {
    why: "'Your brother' becomes 'he' in the answer. The question uses 'is', so the negative short answer uses 'isn't'.",
    not: {
      'he not': "A short answer needs the verb. 'He not' has no verb.",
      "he doesn't":
        "'Doesn't' answers questions with 'does'. This question uses 'is', so the answer uses 'isn't'.",
      "she isn't": "A brother is a man or a boy, so we use 'he', not 'she'.",
    },
    more: 'In a short answer, the noun changes to a pronoun: your brother becomes he, your sisters become they.',
    tip: "Check the first word of the question. 'Is' in the question means 'isn't' in a negative short answer.",
  },
  'A: Is it cold outside? B: Yes, ___.': {
    why: "The question uses 'it' and 'is', so the short answer uses them too. A positive short answer ends with the full form of the verb.",
    not: {
      "it's":
        'A short answer cannot end with a short form like this one. At the end, use the full form.',
      'it does':
        "'Does' answers questions with 'does'. This question uses 'is', so the answer uses 'is'.",
      'is it':
        "'Is it' is the order for a question. In an answer, the subject comes first, then the verb.",
    },
    more: "Negative short answers can end with a short form, such as 'isn't'. Positive ones cannot.",
    tip: 'In a positive short answer, always finish with the full verb, never a short form.',
  },
  'A: Are they your cousins? B: No, ___.': {
    why: "The question uses 'they' and 'are', so the negative short answer uses them too, with 'not' joined to 'are'.",
    not: {
      'they not':
        "A short answer needs the verb. 'They not' has no verb; we need 'are' with 'not'.",
      "they don't":
        "'Don't' answers questions with 'do'. This question uses 'are', so the answer uses 'aren't'.",
      "they doesn't":
        "'Doesn't' answers questions with 'does', and it never goes with 'they'. Here we need 'aren't'.",
    },
    more: "A second way to say this answer joins the subject and the verb, then adds 'not'. Both ways are correct.",
    tip: "Match your short answer to the first word of the question: a question with 'are' gets an answer with 'are' or 'aren't'.",
  },
  'A: Are you ready to go? B: No, ___. Give me five minutes.': {
    why: "B answers about B, so the subject is 'I'. With 'I', the negative is 'am not', and in a short answer 'I' and 'am' join: No, I'm not.",
    not: {
      "I don't":
        "'Don't' answers questions with 'do'. This question uses 'are', so the answer uses 'to be'.",
      'I not': "A short answer needs the verb. 'I not' has no verb; we need 'am' as well.",
      "I isn't": "'Isn't' is for he, she and it. With 'I', the negative is 'am not'.",
    },
    more: "In an answer like this, 'am not' has no short form of its own, unlike 'isn't' and 'aren't', so we join 'I' and 'am' instead.",
    tip: "'Give me five minutes' is a polite way to ask someone to wait.",
  },
  'A: Are your parents at home? B: Yes, ___.': {
    why: "'Your parents' becomes 'they' in the answer. The question uses 'are', and a positive short answer ends with the full form of the verb.",
    not: {
      "they're":
        'A short answer cannot end with a short form like this one. At the end, use the full form.',
      'they do':
        "'Do' answers questions with 'do'. This question uses 'are', so the answer uses 'are'.",
      'there are':
        "'There are' talks about what exists. The answer is about 'your parents', so the subject is 'they'.",
    },
    more: 'In a short answer, a noun becomes a pronoun: your parents become they, the car becomes it.',
    tip: 'Short answers make you sound friendly and natural. Practise them with a partner, using real questions about your family.',
  },
  'A: Is Paula from Brazil? B: Yes, ___.': {
    why: "Paula is a woman's name, so in the answer she becomes 'she'. The question uses 'is', and a positive short answer ends with the full form of the verb.",
    not: {
      "she's":
        'A short answer cannot end with a short form like this one. At the end, use the full form.',
      'she does':
        "'Does' answers questions with 'does'. This question uses 'is', so the answer uses 'is'.",
      'he is': "'He' is for a man or a boy. Paula is a woman's name, so we use 'she'.",
    },
    more: "After 'from' we put a country, a city or a town: from Brazil, from Manchester.",
    tip: 'Use the full form at the end of a short answer, and a short form in the middle of a sentence.',
  },
  'A: Are we late? B: No, ___. The film starts at eight.': {
    why: "B and A are going together, so B answers with 'we'. The question uses 'are', so the negative short answer uses 'aren't'.",
    not: {
      'we not': "A short answer needs the verb. 'We not' has no verb; we need 'are' with 'not'.",
      "we don't":
        "'Don't' answers questions with 'do'. This question uses 'are', so the answer uses 'aren't'.",
      "we weren't":
        "'Weren't' is the past, but the question is about now. The answer must use the same time as the question.",
    },
    more: "'The film starts at eight' gives the reason: they still have time.",
    tip: 'Your short answer keeps the time of the question: a present question gets a present answer.',
  },
  '___ a park near my house.': {
    why: "To say that something exists in a place, English uses 'there' and 'to be'. 'A park' is one thing, so we need 'There is'.",
    not: {
      'There are': "'There are' is for more than one thing. 'A park' is one, so use 'There is'.",
      'It has':
        "Some languages use 'have' to say what is in a place. English uses 'there' and 'to be' here.",
      Have: "'Have' cannot start this sentence. To say what exists in a place, English uses 'there' and 'to be'.",
    },
    more: "In speaking, we often shorten 'there is' with an apostrophe and an s.",
    tip: "To describe your town, use 'there' and the right form of 'to be', then the places.",
  },
  '___ two banks on this street.': {
    why: "'Two banks' is plural, so we need 'There are'. English uses 'there' and 'to be' to say that things exist in a place.",
    not: {
      'There is': "'There is' is for one thing. 'Two banks' are more than one, so use 'There are'.",
      'It has':
        "Some languages use 'have' here. English uses 'there' and 'to be' to say what is on a street.",
      Have: "'Have' cannot start this sentence. To say what exists, English uses 'there' and 'to be'.",
    },
    more: 'Look at the noun after the gap to choose: one bank, two banks.',
    tip: "In a description, count the things first, then choose the form of 'to be'.",
  },
  'There ___ three people in my family.': {
    why: "'Three people' is plural, so after 'there' we use 'are'. 'People' is already plural, without an s.",
    not: {
      is: "'Is' is for one thing. 'Three people' is more than one, so use 'are'.",
      have: "After 'there', English uses 'to be', not 'have', to say what exists.",
      has: "After 'there', English uses 'to be', not 'have'. And 'three people' is plural.",
    },
    more: "We can also say 'My family has three people', but with 'there' at the start, the verb is always 'to be'.",
    tip: "When you introduce your family, you can start with 'There' and 'to be', then the number of people.",
  },
  'How many students ___ there in your class?': {
    why: "'How many' asks about a number of things, and 'students' is plural, so the verb is 'are'.",
    not: {
      is: "'Is' is for one thing. 'How many students' is plural, so use 'are'.",
      have: "After 'there', English uses 'to be', not 'have'.",
      has: "After 'there', English uses 'to be'. 'Has' cannot go with 'there' here.",
    },
    more: "In a question with 'there', the verb comes before 'there'.",
    tip: "'How many' goes with plural nouns you can count: how many students, how many books.",
  },
  '___ any eggs in the fridge?': {
    why: "To ask whether things exist, put 'to be' before 'there'. 'Eggs' is plural, so the question starts 'Are there'.",
    not: {
      'Is there': "'Is there' is for one thing. 'Eggs' are more than one, so use 'Are there'.",
      'There are':
        "'There are' is the order for a statement. In a question, the verb comes before 'there'.",
      Have: "Some languages use 'have' to ask what is in a place. English uses 'there' and 'to be'.",
    },
    more: "We use 'any' in questions and negatives: any eggs, any milk. In positive sentences we use 'some'.",
    tip: "Before you go shopping, ask about the fridge with the right form of 'to be', then 'there' and 'any'.",
  },
  'A: Is there a bank near here? B: Yes, ___. It is next to the post office.': {
    why: "The question uses 'there' and 'is', so the short answer uses them too. A positive short answer ends with the full form: Yes, there is.",
    not: {
      "there's":
        'A short answer cannot end with a short form like this one. At the end, use the full form.',
      'it is':
        "The question asks if a bank exists, with 'there'. The answer keeps 'there', not 'it'.",
      'there are':
        "'There are' is for more than one thing. The question asks about 'a bank', so use 'is'.",
    },
    more: "After the short answer, B says where the bank is. Then we use 'it', because now we mean that one bank.",
    tip: "Use 'there' to say that something exists, and 'it' to talk about that thing after.",
  },
  'My sister ___ ten years old.': {
    why: "English gives age with 'to be', not 'have'. 'My sister' is one person, so the verb is 'is'.",
    not: {
      has: "Some languages say a person 'has' years. English uses 'to be' for age.",
      have: "English uses 'to be' for age, never 'have'. And 'my sister' is one person.",
      are: "'Are' is for plurals. 'My sister' is one person, so use 'is'.",
    },
    more: "We can give the age with or without 'years old': ten, or ten years old.",
    tip: "When you introduce your family, give each age with 'to be' and a number.",
  },
  'I ___ cold. Can you close the window?': {
    why: "English uses 'to be' for feeling cold, hot, hungry or thirsty. The subject is 'I', so the verb is 'am'.",
    not: {
      have: "Some languages say 'I have cold'. English uses 'to be' for how your body feels.",
      has: "English uses 'to be' for feeling cold. And 'has' never goes with 'I'.",
      is: "'Is' goes with he, she and it. With 'I', the verb is 'am'.",
    },
    more: "'A cold' with 'a' is an illness, and it goes with 'have'. Without 'a', 'cold' describes how you feel, with 'to be'.",
    tip: "Learn these with 'to be', not 'have': cold, hot, hungry, thirsty, tired.",
  },
  "We ___ hungry. Let's eat now.": {
    why: "English uses 'to be' for hunger, not 'have'. The subject is 'we', so the verb is 'are'.",
    not: {
      have: "Some languages say 'we have hunger'. English uses 'to be' with the adjective 'hungry'.",
      has: "English uses 'to be' for hunger. And 'has' never goes with 'we'.",
      is: "'Is' is for one person or thing. 'We' means more than one, so use 'are'.",
    },
    more: "'Hungry' is an adjective. The noun is 'hunger', but we rarely use it to say how we feel.",
    tip: "'Let's' means 'let us'. Use it to suggest doing something together.",
  },
  'He ___ thirsty. He wants a glass of water.': {
    why: "English uses 'to be' for thirst, not 'have'. The subject 'he' means one person, so the verb is 'is'.",
    not: {
      has: "Some languages say a person 'has thirst'. English uses 'to be' with the adjective 'thirsty'.",
      have: "English uses 'to be' for thirst, and 'have' does not go with 'he'.",
      are: "'Are' is for plurals. The subject 'he' means one person, so use 'is'.",
    },
    more: "'Thirsty' means you want a drink. 'Hungry' means you want food.",
    tip: 'If you feel thirsty in class, you can ask: Please may I get some water?',
  },
  'How old ___ you?': {
    why: "English asks about age with 'to be', not 'have'. The subject is 'you', so the verb is 'are'.",
    not: {
      have: "Some languages ask how many years you have. English uses 'to be' for age.",
      do: "'Do' makes questions with other verbs. Age uses 'to be', so we need 'are'.",
      is: "'Is' goes with he, she and it. 'You' always takes 'are'.",
    },
    more: "To answer, use 'to be' and a number. You do not need to add 'years old'.",
    tip: "Asking a child's age is friendly, but many adults prefer not to say theirs.",
  },
  'He ___ at school yesterday because he had a cold.': {
    why: "He had a cold and stayed away, so the answer is no. 'Yesterday' is past and the subject 'he' means one person, so the negative is 'wasn't'.",
    not: {
      "weren't":
        "'Weren't' is for you, we, they and plurals. With 'he', the past negative is 'wasn't'.",
      "didn't":
        "'Didn't' goes with other verbs, as in 'didn't go'. With 'to be', the past negative is 'wasn't' or 'weren't'.",
      "isn't": "'Isn't' is the present. 'Yesterday' is in the past, so use 'wasn't'.",
    },
    more: "'Wasn't' is the short form of 'was not', and 'weren't' of 'were not'.",
    tip: "In a note about a day off school, use 'was not' and 'because' to give the reason clearly.",
  },
  'They ___ at home last night. They went to a concert.': {
    why: "They went to a concert, so the answer is no. 'Last night' is past and 'they' is plural, so the negative is 'weren't'.",
    not: {
      "wasn't": "'Wasn't' is for I, he, she and it. With 'they', the past negative is 'weren't'.",
      "didn't":
        "'Didn't' goes with other verbs. With 'to be', the past negative for 'they' is 'weren't'.",
      "haven't been":
        "'Haven't been' links the past to now. 'Last night' is a finished time, so English uses 'weren't'.",
    },
    more: 'The second sentence explains the first: if they went out to a concert, they could not be at home.',
    tip: "To make a past 'to be' sentence negative, just add 'not': was not, were not.",
  },
  'I ___ at home soon.': {
    why: "'Soon' points to the future, and the future of 'to be' is 'will be'. After 'will', we need the plain verb 'be'.",
    not: {
      will: "'I will at home' has no main verb. After 'will', English needs the plain verb 'be'.",
      'will being':
        "After 'will', use the plain verb with no ending. 'Being' needs 'am', 'is' or 'are' before it.",
      'am being':
        "'Am being' describes how someone behaves right now, as in 'I am being careful'. 'At home soon' is about a place in the future, not behaviour.",
    },
    more: "'Will be' is the same for every subject: I, you, he, she, it, we and they.",
    tip: "In a message, you can write 'I will be home soon'. In speaking, 'will' is often shortened to 'll.",
  },
  'She ___ ready in five minutes.': {
    why: "'In five minutes' means five minutes from now, in the future. The future of 'to be' is 'will be', the same for every subject.",
    not: {
      will: "'She will ready' has no verb 'be'. 'Ready' is an adjective, so it needs 'be' after 'will'.",
      'will being': "After 'will', use the plain verb 'be', with no -ing ending.",
      'is being':
        "'Is being' describes behaviour happening now, as in 'being silly'. It does not fit a time in the future.",
    },
    more: "'In' with a length of time means after that much time from now: in five minutes, in two weeks.",
    tip: "When you tell someone how long to wait, use 'will be' and 'in': The food will be ready in ten minutes.",
  },
  'They ___ here in about an hour.': {
    why: "'In about an hour' is a time in the future. The future of 'to be' is 'will be', for every subject.",
    not: {
      will: "'They will here' has no main verb. After 'will', we need 'be'.",
      'are being':
        "'Are being' describes how people behave right now. 'In about an hour' is in the future.",
      'will being': "After 'will', the verb has no ending. Use the plain verb 'be'.",
    },
    more: "'About' before a time means not exactly: about an hour, about ten o'clock.",
    tip: "To tell someone when visitors will arrive, use 'will be here' and a time.",
  },
  'This time next week we ___ on holiday.': {
    why: "'This time next week' means one week from now. That is the future, so the verb is 'will be'.",
    not: {
      will: "'We will on holiday' has no main verb. After 'will', we need 'be'.",
      were: "'Were' is the past. 'Next week' is in the future, so use 'will be'.",
      'will being': "After 'will', use the plain verb 'be', with no -ing ending.",
    },
    more: "'This time next week' and 'this time tomorrow' mean the same time of day, but in the future.",
    tip: "When you look forward to a trip, you can start with 'This time next week' and 'will be'.",
  },
  'It ___ sunny at the weekend, I hope.': {
    why: "'I hope' looks forward to a weekend still to come, so we need a future form. Of these, only 'will be' is correct: after 'will', the plain verb 'be'.",
    not: {
      will: "'It will sunny' has no verb 'be'. 'Sunny' is an adjective, so it needs 'be' after 'will'.",
      'will being': "After 'will', the verb has no ending. Use the plain verb 'be'.",
      'is being':
        "'Is being' describes how a person behaves at the moment. We do not use it for the weather.",
    },
    more: "'At the weekend' is British English. American English says 'on the weekend'.",
    tip: "To talk about the weather tomorrow or at the weekend, use 'will be' and an adjective: sunny, windy, wet.",
  },
  'You ___ fine after a good rest.': {
    why: "'After a good rest' describes a time still to come, after you rest. So the verb is the future of 'to be', 'will be'.",
    not: {
      will: "'You will fine' has no verb 'be'. 'Fine' is an adjective, so it needs 'be' after 'will'.",
      'will being': "After 'will', the verb has no ending. Use the plain verb 'be'.",
      'are being':
        "'Are being' describes behaviour right now. A rest that has not happened yet points to the future.",
    },
    more: "'Fine' here means well or healthy. People often say this to someone who feels ill or is worried.",
    tip: "To make someone feel better, use 'will be' with fine, OK or all right.",
  },
  'The exam ___ over in two hours.': {
    why: "'In two hours' means two hours from now. The exam ends then, so we need the future of 'to be': 'will be'.",
    not: {
      will: "'The exam will over' has no verb 'be'. 'Over' here means finished, and it needs 'be'.",
      'will to be': "After 'will', there is no 'to'. The future of 'to be' is 'will be'.",
      'is being':
        "'Is being' describes behaviour now. An exam that ends in two hours needs the future.",
    },
    more: "'Over' after 'to be' means finished: The game is over. The holidays are over.",
    tip: "Use 'in two hours' for the future and 'two hours ago' for the past.",
  },
  'He ___ taller than his father one day.': {
    why: "'One day' here means some time in the future. This is a guess about the future, so the verb is 'will be'.",
    not: {
      will: "'He will taller' has no verb 'be'. 'Taller' is an adjective, so it needs 'be' after 'will'.",
      'will to be': "After 'will', there is no 'to'. The future of 'to be' is 'will be'.",
      'is being': "'Is being' describes behaviour now. Growing taller is a change in the future.",
    },
    more: "'One day' can point to the future, as here, or to the past: One day, a letter came.",
    tip: "Use 'will be' for guesses about the future: Maya will be a great teacher.",
  },
  'I have ___ to London many times.': {
    why: "After 'have', 'has' or 'had', we use 'been'. With 'to' and a place, it means you visited and came back.",
    not: {
      be: "'Be' is the plain verb, used after words like 'will' and 'must'. After 'have', we need 'been'.",
      being:
        "'Being' goes after 'am', 'is' or 'are', as in 'is being kind'. After 'have', we need 'been'.",
    },
    more: "'Many times' means the visits happened at different times in your life, and you may go again.",
    tip: "To list the places you have visited, use 'have' and 'been' with 'to' and the place.",
  },
  'She has ___ a teacher for ten years.': {
    why: "After 'has', we use 'been'. 'Has been a teacher for ten years' means she started ten years ago and still teaches.",
    not: {
      be: "'Be' is the plain verb, used after 'will', 'can' or 'must'. After 'has', we need 'been'.",
      being: "'Being' goes after 'am', 'is' or 'are'. After 'has', we need 'been'.",
    },
    more: "'For' and a length of time often go with this form: for ten years, for a long time.",
    tip: "To say how long something has lasted until now, use 'has' or 'have', then 'been', then 'for' and the time.",
  },
  'They have ___ very busy this week.': {
    why: "After 'have', we use 'been'. 'This week' is not finished yet, so 'have been' links the week so far to now.",
    not: {
      be: "'Be' is the plain verb, used after 'will' or 'must'. After 'have', we need 'been'.",
      being: "'Being' goes after 'am', 'is' or 'are'. After 'have', we need 'been'.",
    },
    more: "We use 'have been' with a time that is not finished: this week, today, this year.",
    tip: "To say you have had a lot to do, use 'have been busy'. In speaking, 'have' is often shortened to 've.",
  },
  'Have you ever ___ to Scotland?': {
    why: "After 'have', we use 'been'. This question asks if you visited a place at any time in your life.",
    not: {
      be: "'Be' is the plain verb. After 'have', we always use 'been'.",
      being: "'Being' goes after 'am', 'is' or 'are'. After 'have', we always use 'been'.",
    },
    more: "'Ever' means at any time in your life. We use it in questions like this one.",
    tip: "Answer this kind of question with 'Yes, I have' or 'No, I haven't', then give one detail.",
  },
  'He had ___ ill for a week before the trip.': {
    why: "After 'had', we use 'been'. 'Had been ill' means the illness lasted through the week before another past event, the trip.",
    not: {
      be: "'Be' is the plain verb. After 'had', we need 'been'.",
      being: "'Being' goes after 'am', 'is', 'are', 'was' or 'were'. After 'had', we need 'been'.",
    },
    more: "'Had been' looks back from a point in the past to an earlier time. With 'has' or 'have', we look back from now.",
    tip: "In a story, use 'had been' for what was true before the main event.",
  },
  'The dog is ___ very noisy today.': {
    why: "After 'is', use 'being'. 'Is being noisy' means the dog is acting noisily today, not that it always does.",
    not: {
      been: "'Been' goes after 'have', 'has' or 'had'. After 'is', we need 'being'.",
      be: "'Be' is the plain verb, used after 'will' or 'can'. After 'is', we need 'being'.",
    },
    more: "'The dog is noisy' simply describes the dog. 'The dog is being noisy' describes how the dog behaves now, which is not usual for it.",
    tip: "Use 'being' after 'is' or 'are' for behaviour that is different from usual: rude, silly, kind.",
  },
  'Why are you ___ so unkind to him?': {
    why: "After 'are', use 'being'. The question is about how someone is behaving right now.",
    not: {
      been: "'Been' goes after 'have', 'has' or 'had'. After 'are', we need 'being'.",
      be: "'Be' is the plain verb, used after 'will' or 'must'. After 'are', we need 'being'.",
    },
    more: "'Unkind' means not kind. Adding un- to an adjective often makes its opposite: unhappy, unfair.",
    tip: "Use 'being' with words for behaviour: being kind, being rude, being silly.",
  },
  'You are ___ very patient with the class.': {
    why: "After 'are', use 'being'. The sentence praises how someone is behaving right now.",
    not: {
      been: "'Been' goes after 'have', 'has' or 'had'. After 'are', we need 'being'.",
      be: "'Be' is the plain verb, used after 'will' or 'can'. After 'are', we need 'being'.",
    },
    more: "'Patient' means calm and willing to wait. Its opposite is 'impatient'.",
    tip: "To praise how someone behaves at this moment, use 'are being' and an adjective: careful, helpful, brave.",
  },
  'I ___ at the party on Saturday because I had to work.': {
    why: "The speaker had to work, so the answer is no. 'Had' shows the Saturday was in the past, and with 'I' the past negative of 'to be' is 'wasn't'.",
    not: {
      "weren't":
        "'Weren't' is for you, we, they and plurals. With 'I', the past negative is 'wasn't'.",
      "didn't":
        "'Didn't' goes with other verbs, as in 'didn't go'. With 'to be', the past negative is 'wasn't' or 'weren't'.",
      "haven't been":
        "'Haven't been' links the past to now. Saturday is finished, so English uses the past form 'wasn't'.",
    },
    more: "'Had to work' means work was necessary: the past of 'have to'.",
    tip: "To say sorry for missing an event, use 'wasn't' or 'weren't' and give a reason with 'because'.",
  },
  'The shops ___ open on Christmas Day, so we stayed at home.': {
    why: "'We stayed at home' shows we could not go shopping, and the time is past. 'The shops' is plural, so the past negative is 'weren't'.",
    not: {
      "wasn't":
        "'Wasn't' is for one person or thing. 'The shops' are more than one, so use 'weren't'.",
      "didn't":
        "'Didn't' goes with other verbs. 'Open' here is an adjective, so the negative comes from 'to be'.",
    },
    more: "'Open' is sometimes an adjective, as here, and sometimes a verb: The shop opens at nine.",
    tip: "To explain a change of plan, use the negative of 'to be' and 'so': The café wasn't open, so we went home.",
  },
  'My phone ___ in my bag yesterday. I left it at home.': {
    why: "'I left it at home' tells us the answer is no, and 'yesterday' is past. 'My phone' is one thing, so the past negative is 'wasn't'.",
    not: {
      "weren't": "'Weren't' is for plurals. 'My phone' is one thing, so use 'wasn't'.",
      "didn't":
        "'Didn't' goes with other verbs. 'In my bag' is a place, so the negative comes from 'to be'.",
      "isn't": "'Isn't' is the present. 'Yesterday' is in the past, so use 'wasn't'.",
    },
    more: "'Left' is the past of 'leave'. 'I left it at home' means I did not bring it.",
    tip: "When you explain why you do not have something, use 'wasn't' and then say where you left it.",
  },
  'Sorry, we ___ at home when you called. We went to the park.': {
    why: "We went to the park, so the answer is no. 'When you called' is past, and 'we' is plural, so the past negative is 'weren't'.",
    not: {
      "wasn't": "'Wasn't' is for I, he, she and it. With 'we', the past negative is 'weren't'.",
      "didn't":
        "'Didn't' goes with other verbs. 'At home' is a place, so the negative comes from 'to be'.",
      "haven't been":
        "'Haven't been' links the past to now. 'When you called' is a finished time, so English uses 'weren't'.",
    },
    more: "'Called' here means phoned. In British English, people also say 'rang': when you rang.",
    tip: "When you miss a call, say sorry, use the past negative of 'to be', and explain where you went.",
  },
  "Yesterday's test ___ difficult. Everyone finished early.": {
    why: "Everyone finished early, so the test was easy: the answer is no. 'Yesterday's test' is one thing in the past, so the negative is 'wasn't'.",
    not: {
      "weren't": "'Weren't' is for plurals. 'Yesterday's test' is one test, so use 'wasn't'.",
      "didn't":
        "'Didn't' goes with other verbs. 'Difficult' is an adjective, so the negative comes from 'to be'.",
      "isn't": "'Isn't' is the present. The test happened yesterday, so use 'wasn't'.",
    },
    more: "'Yesterday's test' means the test that happened yesterday. The apostrophe and s show it belongs to that day.",
    tip: "To describe a past event, put the past negative of 'to be' before an adjective: long, hard, boring.",
  },
  'You ___ in class on Monday. What happened?': {
    why: "'What happened?' shows Monday is in the past and the person was absent. 'You' always takes 'were', so the negative is 'weren't'.",
    not: {
      "wasn't": "'Wasn't' never goes with 'you', even for one person. Use 'weren't'.",
      "didn't":
        "'Didn't' goes with other verbs. 'In class' is a place, so the negative comes from 'to be'.",
      "haven't been":
        "'Haven't been' links the past to now. Monday is finished, so English uses 'weren't'.",
    },
    more: "'What happened?' asks about a past event, and here it kindly asks why someone was absent.",
    tip: 'If you miss a lesson, tell your teacher the reason and ask what you need to catch up on.',
  },
  '___ you at home yesterday?': {
    why: "'Yesterday' is past, and 'you' always takes 'were'. To make the question, put 'were' before 'you'.",
    not: {
      Was: "'Was' never goes with 'you', even for one person. Use 'Were'.",
      Did: "'Did' makes past questions with other verbs, as in 'Did you go out?'. With 'to be', just move the verb to the front.",
      Are: "'Are' is the present. 'Yesterday' is in the past, so use 'Were'.",
    },
    more: "Past questions with 'to be' need no 'did': the verb moves before the subject, as in the present.",
    tip: "To ask about the past, start with 'Was' or 'Were', then the person, then the place or time.",
  },
  '___ the film good last night?': {
    why: "'Last night' is past, and 'the film' is one thing, so the question starts with 'Was'.",
    not: {
      Were: "'Were' is for you, we, they and plurals. 'The film' is one thing, so use 'Was'.",
      Did: "'Did' makes questions with other verbs. 'Good' is an adjective, so the question uses 'to be'.",
      Is: "'Is' is the present. 'Last night' is in the past, so use 'Was'.",
    },
    more: "We often ask about a film, a party or a trip with the past of 'to be' and an adjective.",
    tip: "To start a chat about the weekend, ask about a film, a match or a party with 'Was' and an adjective.",
  },
  '___ your parents at the match last Saturday?': {
    why: "'Last Saturday' is past, and 'your parents' is plural, so the question starts with 'Were'.",
    not: {
      Was: "'Was' is for one person or thing. 'Your parents' are two people, so use 'Were'.",
      Did: "'Did' makes questions with other verbs. 'At the match' is a place, so the question uses 'to be'.",
      Are: "'Are' is the present. 'Last Saturday' is in the past, so use 'Were'.",
    },
    more: "A 'match' is a game of sport, such as football or tennis.",
    tip: "In a past yes or no question about more than one person, start with 'Were'.",
  },
  'Where ___ you born?': {
    why: "We talk about birth with the past of 'to be' and 'born'. 'You' takes 'were', so the question uses 'were'.",
    not: {
      was: "'Was' never goes with 'you'. Use 'were'.",
      are: "We never use the present to ask about someone's birth. It happened in the past, so use 'were'.",
      did: "'Did' makes past questions with other verbs, but 'born' needs 'to be'. We do not say 'did you born'.",
    },
    more: "'Born' is not a normal verb in English. We use it after 'was' or 'were'.",
    tip: "To answer, use 'was born in' and a place: in Kabul, in a small town.",
  },
  'What time ___ it when you got home?': {
    why: "'When you got home' is past, and the subject here is the word 'it', so the verb is 'was'. We use 'it' to talk about the time.",
    not: {
      were: "'Were' is for you, we, they and plurals. With 'it', the past form is 'was'.",
      is: "'Is' is the present. 'You got home' is in the past, so use 'was'.",
      did: "'Did' makes questions with other verbs. To ask the time, we use 'to be'.",
    },
    more: "For the time, English uses 'it' as the subject, in the present and in the past.",
    tip: "Ask 'What time...?' with the right form of 'to be' and 'it'.",
  },
  'Why ___ you late yesterday?': {
    why: "'Yesterday' is past, and 'you' takes 'were'. In a question with 'why', the verb comes before the subject.",
    not: {
      was: "'Was' never goes with 'you'. Use 'were'.",
      are: "'Are' is the present. 'Yesterday' is in the past, so use 'were'.",
      did: "'Did' makes questions with other verbs. 'Late' is an adjective, so the question uses 'to be'.",
    },
    more: "The answer usually begins with 'because': Because the bus did not come.",
    tip: "When a teacher asks about your lateness, answer politely with 'because' and a reason.",
  },
  '___ it cold in Scotland last week?': {
    why: "'Last week' is past, and the subject 'it' takes 'was'. We use 'it' for the weather, so the question starts with 'Was'.",
    not: {
      Were: "'Were' is for you, we, they and plurals. With 'it', use 'Was'.",
      Is: "'Is' is the present. 'Last week' is in the past, so use 'Was'.",
      Did: "'Did' makes questions with other verbs. 'Cold' is an adjective, so the question uses 'to be'.",
    },
    more: "To talk about the weather in the past, use 'it' and 'was'. We never leave out 'it'.",
    tip: "When you ask about someone's trip, ask about the weather, the food and the people.",
  },
  'How ___ your holiday in Spain last month?': {
    why: "'Last month' is past, and 'your holiday' is one thing, so the verb is 'was'.",
    not: {
      were: "'Were' is for plurals. 'Your holiday' is one holiday, so use 'was'.",
      is: "'Is' is the present. 'Last month' is in the past, so use 'was'.",
      did: "'Did' makes questions with other verbs. 'How' with 'to be' asks what something was like.",
    },
    more: "'How' with 'to be' asks for an opinion: about a film, a day at school or a trip.",
    tip: 'Answer a question like this with an adjective: great, fine, boring.',
  },
  '___ there many people at the concert last night?': {
    why: "'Last night' is past, and 'many people' is plural, so we need 'were'. In a question, 'were' comes before 'there'.",
    not: {
      Was: "'Was' is for one thing. 'Many people' is plural, so use 'Were'.",
      Did: "'Did' makes questions with other verbs. With 'there', English uses 'to be'.",
      Are: "'Are' is the present. 'Last night' is in the past, so use 'Were'.",
    },
    more: "'Many' goes with plural nouns you can count: many people, many songs.",
    tip: "To ask how busy a place was, use the past of 'to be' with 'there' and 'many' or 'a lot of'.",
  },
  'Who ___ your teacher last year?': {
    why: "'Last year' is past, and 'your teacher' means one person, so the verb is 'was'.",
    not: {
      were: "'Were' is for plurals. 'Your teacher' is one person, so use 'was'.",
      is: "'Is' is the present. 'Last year' is in the past, so use 'was'.",
      did: "'Did' makes questions with other verbs. To ask who someone was, use 'to be'.",
    },
    more: "'Who' asks about a person. With 'to be', the person comes after the verb.",
    tip: "To talk about your old school, use 'was' and 'were' with 'last year' or 'in Year 7'.",
  },
  'A: Was the museum open on Monday? B: No, ___.': {
    why: "'The museum' becomes 'it' in the answer. The question uses 'was', so the negative short answer uses 'wasn't'.",
    not: {
      "it didn't":
        "'Didn't' answers questions with 'did'. This question uses 'was', so the answer uses 'wasn't'.",
      "it weren't": "'Weren't' is for you, we, they and plurals. With 'it', use 'wasn't'.",
      "it isn't":
        "'Isn't' is the present, but the question is about the past. Keep the same time as the question.",
    },
    more: "A short answer repeats the verb from the question, so a question with 'was' gets an answer with 'was' or 'wasn't'.",
    tip: 'Check the first word of the question. It tells you the verb and the time for your short answer.',
  },
  'A: Were your friends at the cinema too? B: Yes, ___.': {
    why: "'Your friends' becomes 'they' in the answer. The question uses 'were', and a positive short answer ends with the full form.",
    not: {
      'they was': "'Was' is for one person or thing. With 'they', use 'were'.",
      'they did':
        "'Did' answers questions with 'did'. This question uses 'were', so the answer uses 'were'.",
      'there were':
        "'There were' says what existed. The answer is about 'your friends', so the subject is 'they'.",
    },
    more: "'Too' at the end of a question means 'also', as well as you.",
    tip: 'In a short answer, the noun in the question becomes a pronoun: your friends, they; the film, it.',
  },
  'A: Was your sister at the wedding? B: No, ___.': {
    why: "'Your sister' becomes 'she' in the answer. The question uses 'was', so the negative short answer uses 'wasn't'.",
    not: {
      "she didn't":
        "'Didn't' answers questions with 'did'. This question uses 'was', so the answer uses 'wasn't'.",
      "she weren't": "'Weren't' is for you, we, they and plurals. With 'she', use 'wasn't'.",
      "she isn't":
        "'Isn't' is the present, but the wedding was in the past. Keep the same time as the question.",
    },
    more: 'After a negative short answer, people often add a reason, or say where the person was instead.',
    tip: "Practise short answers in pairs: one asks with 'Was' or 'Were', the other answers with the same verb.",
  },
  'A: Were the questions difficult? B: No, ___. I finished in ten minutes.': {
    why: "'The questions' becomes 'they' in the answer. The question uses 'were', so the negative short answer uses 'weren't'.",
    not: {
      "they wasn't": "'Wasn't' is for one person or thing. With 'they', use 'weren't'.",
      "they didn't":
        "'Didn't' answers questions with 'did'. This question uses 'were', so the answer uses 'weren't'.",
      "they aren't":
        "'Aren't' is the present, but the question is about the past. Keep the same time as the question.",
      "there weren't":
        "'There weren't' says that something did not exist. The answer is about 'the questions', so the subject is 'they'.",
    },
    more: "'I finished in ten minutes' gives the reason for the answer: the test was easy.",
    tip: "When you talk about a test, use 'easy' and 'difficult' with the right form of 'to be'.",
  },
  'A: Was I very loud last night? B: Yes, ___. You woke the baby.': {
    why: "A asks about A, so B answers about A with 'you'. 'You' takes 'were', and a positive short answer ends with the full form.",
    not: {
      'you was': "'Was' never goes with 'you', even for one person. Use 'were'.",
      'I was':
        "B is talking about A, not about B. The question says 'I', so the answer says 'you'.",
      'you did':
        "'Did' answers questions with 'did'. This question uses 'was', so the answer uses 'to be'.",
    },
    more: "In a short answer, 'I' in the question becomes 'you', and 'you' becomes 'I'.",
    tip: "'Woke' is the past of 'wake'. 'You woke the baby' explains why the answer is yes.",
  },
  'A: Were you tired after the race? B: Yes, ___.': {
    why: "A asks about B, so B answers with 'I'. With 'I', the past form is 'was', even though the question used 'were'.",
    not: {
      'I were': "'Were' goes with 'you' in the question, but with 'I' the past form is 'was'.",
      'I did':
        "'Did' answers questions with 'did'. This question uses 'were', so the answer uses 'to be'.",
      'you were':
        "B is talking about B, not about A. The question says 'you', so the answer says 'I'.",
    },
    more: "The verb can change in a short answer: a question with 'you' and 'were' gets an answer with 'I' and 'was'.",
    tip: "After a race or a match, people ask how you felt. Answer with 'was' and an adjective.",
  },
  'A: Was the bus late again? B: Yes, ___. Twenty minutes late.': {
    why: "'The bus' becomes 'it' in the answer. The question uses 'was', and a positive short answer ends with the full form.",
    not: {
      'it did':
        "'Did' answers questions with 'did'. This question uses 'was', so the answer uses 'was'.",
      'it were': "'Were' is for you, we, they and plurals. With 'it', use 'was'.",
      'it is':
        "'Is' is the present, but the question is about the past. Keep the same time as the question.",
    },
    more: "'Again' means one more time, so the bus is often late.",
    tip: 'After a short answer, you may add a short detail, such as how late or how long.',
  },
  'A: Were you and Leo in the same class? B: Yes, ___.': {
    why: "A asks about B and Leo together. B is one of them, so B answers with 'we', and 'we' takes 'were'.",
    not: {
      'we was': "'Was' is for one person or thing. 'We' means more than one, so use 'were'.",
      'they were': "'They' would mean other people. B is one of the two, so B says 'we'.",
      'we did':
        "'Did' answers questions with 'did'. This question uses 'were', so the answer uses 'were'.",
    },
    more: "'You and Leo' in a question becomes 'we' in the answer, because the speaker is one of them.",
    tip: "Listen for 'you and' in a question. It means the answer will use 'we'.",
  },
  'There ___ a lot of rain last night.': {
    why: "'Last night' is past. 'Rain' cannot be counted, so it takes a singular verb, even after 'a lot of'.",
    not: {
      were: "'Were' is for plurals you can count, such as 'a lot of storms'. 'Rain' cannot be counted, so use 'was'.",
      is: "'Is' is the present. 'Last night' is in the past, so use 'was'.",
      had: "After 'there', English uses 'to be', not 'have', to say what existed.",
    },
    more: "With 'a lot of', the noun decides the verb: a lot of rain takes 'was', a lot of clouds takes 'were'.",
    tip: "When you describe the weather in the past, use 'There was' with rain, snow and wind.",
  },
  'There ___ twenty people at my birthday party last week.': {
    why: "'Last week' is past, and 'twenty people' is plural, so after 'there' we use 'were'.",
    not: {
      was: "'Was' is for one thing. 'Twenty people' is plural, so use 'were'.",
      are: "'Are' is the present. 'Last week' is in the past, so use 'were'.",
      'have been':
        "'Have been' links the past to now. 'Last week' is a finished time, so English uses 'were'.",
    },
    more: "'People' is the plural of 'person', so it always takes a plural verb.",
    tip: "To describe a party, say how many people came with 'There were' and a number.",
  },
  'There ___ some milk in the fridge.': {
    why: "'Milk' cannot be counted, so it takes a singular verb, even with 'some'. After 'there', we use 'is'.",
    not: {
      are: "'Are' is for plural nouns you can count, such as 'some eggs'. 'Milk' cannot be counted, so use 'is'.",
      has: "After 'there', English uses 'to be', not 'have'.",
      have: "After 'there', English uses 'to be', not 'have', to say what is in a place.",
    },
    more: 'Nouns we cannot count include milk, water, bread, rice and money. They all take a singular verb.',
    tip: "Before 'some', check the noun: some milk takes 'is', some apples takes 'are'.",
  },
  'There ___ a lot of children in the park today.': {
    why: "'Children' is plural, so after 'there' we use 'are'. With 'a lot of', the noun after 'of' decides the verb.",
    not: {
      is: "'Is' is for one thing, or for a noun we cannot count. 'Children' is plural, so use 'are'.",
      have: "After 'there', English uses 'to be', not 'have'.",
      has: "After 'there', English uses 'to be'. And 'children' is plural.",
    },
    more: "'A lot of' means many or much. It goes with plural nouns and with nouns we cannot count.",
    tip: "Look past 'a lot of' to the noun. That noun tells you whether to use 'is' or 'are'.",
  },
  'There ___ no buses after midnight.': {
    why: "'Buses' is plural, so after 'there' we use 'are'. 'No' does not change the verb: 'no buses' is still plural.",
    not: {
      is: "'Is' is for one thing. 'No buses' is plural, so use 'are'.",
      have: "After 'there', English uses 'to be', not 'have'.",
      has: "After 'there', English uses 'to be'. And 'buses' is plural.",
    },
    more: "'No buses' means zero buses, the same as 'not any buses'.",
    tip: "To make a strong negative, use 'no' before a noun with the right form of 'to be'.",
  },
  'There ___ an old castle on the hill, but it fell down years ago.': {
    why: "'It fell down years ago', so the castle is gone now. One castle existed in the past, so the verb is 'was'.",
    not: {
      were: "'Were' is for plurals. 'An old castle' is one thing, so use 'was'.",
      is: "'Is' is the present, but the castle fell down years ago. It does not exist now.",
      had: "After 'there', English uses 'to be', not 'have', to say what existed.",
    },
    more: "'Fell down' is the past of 'fall down', used for buildings, trees and people.",
    tip: "Use 'there' and the past of 'to be' to describe how a place looked in the past.",
  },
  'A: Is there any bread? B: No, ___. I will buy some.': {
    why: "The question uses 'there' and 'is', so the negative short answer uses them too: 'there' with 'isn't'.",
    not: {
      "there aren't":
        "'Aren't' is for plurals you can count. 'Bread' cannot be counted, so use 'isn't'.",
      "it isn't":
        "The question asks if any bread exists, with 'there'. The answer keeps 'there', not 'it'.",
      'there not': "A short answer needs the verb. 'There not' has no verb.",
    },
    more: "'Bread' cannot be counted. We say 'some bread' or 'a loaf of bread', not 'a bread'.",
    tip: "Offer to help with 'I will' and a verb: I will buy some, I will get it.",
  },
  'How many chairs ___ in the room?': {
    why: "'How many' asks about a number, and 'chairs' is plural. In the question, 'are' comes before 'there'.",
    not: {
      'is there': "'Is' is for one thing. 'Chairs' is plural, so use 'are'.",
      'there are':
        "'There are' is the order for a statement. In a question, the verb comes before 'there'.",
      'they are':
        "'They' means people or things we have already talked about. To count what exists, we use 'there'.",
    },
    more: 'The answer may be short, just a number: Twelve.',
    tip: "To ask for a number, start with 'How many' and a plural noun, then the verb, then 'there'.",
  },
  'Next year my brother ___ eighteen.': {
    why: "'Next year' is the future, and English gives age with 'to be'. So the future form is 'will be'.",
    not: {
      will: "'Will eighteen' has no verb 'be'. After 'will', English needs the plain verb 'be'.",
      was: "'Was' is the past. 'Next year' is in the future, so use 'will be'.",
      'will have': "English never uses 'have' for age. Use 'to be': will be.",
    },
    more: "We can also say 'He turns eighteen next year'. 'Turn' is another verb for a new age.",
    tip: "To talk about a birthday that is coming, use 'will be' and the new age.",
  },
  'I ___ fifteen in May.': {
    why: "English gives age with 'to be', and 'in May' here is a birthday still to come. After 'will', we need the plain verb 'be'.",
    not: {
      will: "'I will fifteen' has no verb 'be'. After 'will', English needs 'be'.",
      have: "English never uses 'have' for age. Use 'to be'.",
      'am being':
        "'Am being' describes how you behave right now, as in 'being careful'. Age is not behaviour.",
    },
    more: "English can also use the present for an age that is coming, as in 'Tom is twelve next month'.",
    tip: "Use 'in' with months and years, and 'on' with dates and days: in May, on 3 May.",
  },
  'I ___ at school tomorrow. It is a holiday.': {
    why: "'Tomorrow' is the future, and the answer is no. The future negative of 'to be' is 'won't be', short for 'will not be'.",
    not: {
      "wasn't": "'Wasn't' is the past. 'Tomorrow' is in the future.",
      "don't be": "'Don't be' is an order, as in 'Don't be late'. It cannot follow 'I' here.",
      'not will be': "In English, 'not' comes after 'will': will not be, or won't be.",
    },
    more: "'Won't' is the short form of 'will not', spelled with an o.",
    tip: "To tell your teacher about a day away, use 'won't be' and give the day and the reason.",
  },
  "Don't call after nine. We ___ awake then.": {
    why: "'After nine' is later, in the future, and the answer is no. For every subject, the future negative of 'to be' is 'won't be'.",
    not: {
      "weren't": "'Weren't' is the past. 'After nine' is still to come.",
      "don't be": "'Don't be' is an order. It cannot follow 'we' in a statement.",
      "aren't being": "'Aren't being' describes behaviour now. Being awake later is in the future.",
    },
    more: "'Awake' means not sleeping. Its opposite is 'asleep'.",
    tip: "Use 'won't be' to warn people when you will not be free.",
  },
  'The shop ___ open on Sunday, so buy the milk today.': {
    why: "Sunday is coming, and the shop will be closed then. The future negative of 'to be' is 'won't be', the same for every subject.",
    not: {
      "doesn't be": "We never use 'does' with 'to be'. The future negative is 'won't be'.",
      "isn't being":
        "'Isn't being' describes behaviour now. A shop's opening time is not behaviour.",
      'not will be': "In English, 'not' comes after 'will': will not be, or won't be.",
    },
    more: "Because opening times are a timetable, English can also use the present here, with 'isn't open'.",
    tip: 'When you warn someone about a closed shop, give the reason and what to do: buy it today.',
  },
  'It ___ sunny tomorrow, so take an umbrella.': {
    why: "'Tomorrow' is the future, and 'take an umbrella' tells us the answer is no. The future negative of 'to be' is 'won't be'.",
    not: {
      "wasn't": "'Wasn't' is the past. 'Tomorrow' is in the future.",
      "doesn't be": "We never use 'does' with 'to be'. The future negative is 'won't be'.",
      'not will be': "In English, 'not' comes after 'will': will not be, or won't be.",
    },
    more: "Weather forecasts use 'will be' and 'won't be' to talk about tomorrow.",
    tip: "When you read a forecast, look for 'will be' and 'won't be' before words like sunny, windy and wet.",
  },
  'Where have you ___? I waited for an hour.': {
    why: "After 'have', use 'been'. The question asks where someone was during a time up to now.",
    not: {
      be: "'Be' is the plain verb, used after 'will' or 'must'. After 'have', we need 'been'.",
      being: "'Being' goes after 'am', 'is' or 'are'. After 'have', we need 'been'.",
    },
    more: "'I waited for an hour' tells us the person is here now but came late.",
    tip: 'If a friend is late, ask kindly about the reason, and then whether everything is all right.',
  },
  'Stop ___ silly and sit down.': {
    why: "After 'stop', English uses the -ing form of a verb, so 'be' becomes 'being'.",
    not: {
      be: "'Be' is the plain verb. After 'stop', we need the -ing form, 'being'.",
      been: "'Been' goes after 'have', 'has' or 'had'. After 'stop', we need 'being'.",
    },
    more: "Other verbs that take -ing include 'enjoy', 'finish' and 'keep': keep trying.",
    tip: "Use 'being' with words for behaviour after 'stop': stop being rude, stop being lazy.",
  },
  'I ___ afraid of big dogs.': {
    why: "English uses 'to be' with 'afraid', not 'have'. The subject is 'I', so the verb is 'am'.",
    not: {
      have: "Some languages say 'I have fear'. In English, 'afraid' is an adjective, so we use 'to be'.",
      has: "English uses 'to be' with 'afraid'. And 'has' never goes with 'I'.",
      is: "'Is' goes with he, she and it. With 'I', use 'am'.",
    },
    more: "'Afraid of' is followed by the thing you fear: afraid of the dark, afraid of spiders.",
    tip: "'Scared of' means the same as 'afraid of' and also uses 'to be'.",
  },
  'You ___ right. The answer is seven.': {
    why: "English uses 'to be' with 'right', not 'have'. The subject is 'you', so the verb is 'are'.",
    not: {
      have: "Some languages say 'you have right'. In English, 'right' is an adjective here, so we use 'to be'.",
      has: "English uses 'to be' with 'right'. And 'has' never goes with 'you'.",
      is: "'Is' goes with he, she and it. 'You' always takes 'are'.",
    },
    more: "'Right' here means correct. Its opposite is 'wrong'.",
    tip: "When someone gives the correct answer, you can agree with 'to be' and 'right'.",
  },
  'I ___ sleepy. I went to bed very late.': {
    why: "English uses 'to be' with 'sleepy', not 'have'. The subject is 'I', so the verb is 'am'.",
    not: {
      have: "Some languages say 'I have sleep'. In English, 'sleepy' is an adjective, so we use 'to be'.",
      has: "English uses 'to be' with 'sleepy'. And 'has' never goes with 'I'.",
      is: "'Is' goes with he, she and it. With 'I', use 'am'.",
    },
    more: "'Sleepy' means you want to sleep. 'Tired' is close in meaning and also uses 'to be'.",
    tip: "Feelings in your body, such as sleepy, hungry and cold, use 'to be' in English.",
  },
  'You must ___ quiet in the library.': {
    why: "After 'must', English uses the plain verb with no 'to'. The plain verb is 'be': must be quiet.",
    not: {
      are: "After 'must', the verb never changes for the subject. Use the plain verb 'be'.",
      'to be': "'Must' is never followed by 'to'. Use the plain verb 'be'.",
      being: "After 'must', use the plain verb, not the -ing form.",
    },
    more: "'Must' shows a rule or something necessary. Words like it, such as can, should and will, also take the plain verb.",
    tip: "On signs and in rules, you often see 'must be' and an adjective: must be quiet, must be on time.",
  },
  'I want ___ a doctor when I grow up.': {
    why: "After 'want', English uses 'to' and the plain verb. So we need 'to' and 'be' together here.",
    not: {
      be: "After 'want', we need 'to' before the verb.",
      being: "After 'want', we need 'to' and the plain verb, not the -ing form.",
      am: "After 'want', the second verb never changes for the subject. Use 'to' and the plain verb.",
    },
    more: "Other verbs that take 'to' and a verb include 'decide' and 'plan': decide to stay, plan to travel.",
    tip: "Use 'want to be' to talk about your dream job: I want to be a nurse.",
  },
  'It can ___ very cold here in January.': {
    why: "After 'can', English uses the plain verb with no 'to'. So we need 'be': it can be very cold.",
    not: {
      is: "After 'can', the verb never changes for the subject. Use the plain verb 'be'.",
      'to be': "'Can' is never followed by 'to'. Use the plain verb 'be'.",
      being: "After 'can', use the plain verb, not the -ing form.",
    },
    more: "'Can be' here means sometimes: some days in January are very cold.",
    tip: "Use 'can be' to describe what is often, but not always, true.",
  },
  'You should ___ careful on the ice.': {
    why: "After 'should', English uses the plain verb with no 'to'. So we need 'be': you should be careful.",
    not: {
      are: "After 'should', the verb never changes for the subject. Use the plain verb 'be'.",
      'to be': "'Should' is never followed by 'to'. Use the plain verb 'be'.",
      being: "After 'should', use the plain verb, not the -ing form.",
    },
    more: "'Should' gives advice: doing this would be a good idea.",
    tip: "To give a friend advice, use 'You should' and a verb: You should be careful.",
  },
  'I would like ___ a pilot one day.': {
    why: "After 'would like', English uses 'to' and the plain verb. So we need 'to' and 'be' together here.",
    not: {
      be: "After 'would like', we need 'to' before the verb.",
      being: "After 'would like', we need 'to' and the plain verb, not the -ing form.",
      am: "After 'would like', the second verb never changes for the subject. Use 'to' and the plain verb.",
    },
    more: "'Would like' is a polite way to say 'want'. It also takes 'to' and a verb.",
    tip: "In a job interview, say 'I would like to' and a verb to explain your plans.",
  },
  "Tomorrow's lesson might ___ online.": {
    why: "After 'might', English uses the plain verb with no 'to'. So we need 'be': the lesson might be online.",
    not: {
      is: "After 'might', the verb never changes for the subject. Use the plain verb 'be'.",
      'to be': "'Might' is never followed by 'to'. Use the plain verb 'be'.",
      being: "After 'might', use the plain verb, not the -ing form.",
    },
    more: "'Might' means that something is possible but not certain.",
    tip: "To talk about a plan that may change, use 'might be': The match might be cancelled.",
  },
  'Everyone in my family ___ tall.': {
    why: "'Everyone' means all the people, but grammar treats it as one: it takes 'is'.",
    not: {
      are: "'Everyone' feels plural, but it takes a singular verb. Use 'is'.",
      were: "'Were' is a plural past form. 'Everyone' takes a singular verb, and the sentence is about now.",
    },
    more: 'Words like everyone, everybody, someone and nobody all take a singular verb.',
    tip: 'Before the verb, ask: does the subject begin with every, some or no, as in everyone, somebody or nothing? Then use the singular form.',
  },
  'The shops in our town ___ open until eight.': {
    why: "The subject is 'the shops', which is plural. 'In our town' only tells us which shops, so the verb is 'are'.",
    not: {
      is: "'Is' agrees with 'town', the nearest noun, but the subject is 'the shops'. Use 'are'.",
      was: "'Was' is for one thing. 'The shops' is plural.",
    },
    more: 'The verb agrees with the main noun of the subject, not with the last noun before the gap.',
    tip: 'In a long subject, find the first noun: that is usually the one the verb agrees with.',
  },
  'The news ___ good today.': {
    why: "'News' ends in -s, but the word is not plural. It takes a singular verb, so the answer is 'is'.",
    not: {
      are: "'News' looks plural because of the -s, but it takes a singular verb.",
      were: "'Were' is a plural past form. 'News' takes a singular verb, and 'today' is about now.",
    },
    more: "We say 'a piece of news', never 'a news'. Advice and information work the same way.",
    tip: "Learn 'news' with 'is': good news, bad news, the news is on at six.",
  },
  'My jeans ___ too long. I need a shorter pair.': {
    why: "'Jeans' is always plural in English, like trousers and shorts, so the verb is 'are'.",
    not: {
      is: "Jeans are one piece of clothing, but the word is plural. Use 'are'.",
      was: "'Was' is for one thing. 'Jeans' is plural, and the sentence is about now.",
    },
    more: "To count them, we say 'a pair of jeans': one pair, two pairs.",
    tip: 'Learn the clothes words that are always plural: jeans, trousers, shorts, pyjamas.',
  },
  'One of my friends ___ from Peru.': {
    why: "The subject is 'one', not 'friends'. 'One of my friends' means one person, so the verb is 'is'.",
    not: {
      are: "'Are' agrees with 'friends', but the subject is 'one'. Use 'is'.",
      were: "'Were' is a plural past form. The subject is 'one', and the sentence is about now.",
    },
    more: "'One of' is always followed by a plural noun, but it takes a singular verb.",
    tip: "When a subject starts with 'One of', use the singular verb, whatever comes after.",
  },
  'Maths ___ my favourite subject.': {
    why: "'Maths' ends in -s, but the word names one subject, so it takes 'is'.",
    not: {
      are: "'Maths' looks plural, but it names one subject. It takes a singular verb.",
      were: "'Were' is a plural past form. 'Maths' takes a singular verb, and the sentence is about now.",
    },
    more: "'Maths' is British English, and American English says 'math'. Physics and economics also take a singular verb.",
    tip: "Learn school subjects with 'is', even when they end in -s.",
  },
  'The police ___ outside the bank now.': {
    why: "'The police' always takes a plural verb in English, because it means the police officers. So the verb is 'are'.",
    not: {
      is: "'Police' has no -s, but it always takes a plural verb. Use 'are'.",
      was: "'Was' is for one thing. 'The police' takes a plural verb, and 'now' means the present.",
    },
    more: "For one person, say 'a police officer'. 'The police' means the officers as a group.",
    tip: "Learn 'the police' with 'are', and 'a police officer' with 'is'.",
  },
  'My friend and I ___ in the school play this year.': {
    why: "'My friend and I' means two people, like 'we', so the verb is 'are'. Do not let 'I' just before the gap trick you.",
    not: {
      am: "'Am' goes with 'I' alone. Here the subject is 'my friend and I', two people, so use 'are'.",
      is: "'Is' is for one person. 'My friend and I' are two people.",
      was: "'Was' is for one person. 'My friend and I' are two people, and 'this year' means now.",
    },
    more: "A 'school play' is a story acted on stage by students.",
    tip: "Read the whole subject before the verb: two people joined by 'and' always take a plural verb.",
  },
  'Why ___ you crying?': {
    why: "'Crying' is an -ing verb, and an -ing verb needs 'to be' before it. With 'you', the form is 'are'.",
    not: {
      do: "'Do' makes questions with the plain verb, as in 'Why do you cry?'. With an -ing verb, use 'to be'.",
      is: "'Is' goes with he, she and it. 'You' always takes 'are'.",
      does: "'Does' makes questions with the plain verb, for he, she and it. Here we need 'are', for 'you'.",
    },
    more: "With an -ing verb, the question asks about now. With 'do' and the plain verb, it asks about something that happens often.",
    tip: 'If a friend looks sad, ask gently if everything is all right, and offer to help.',
  },
  'She ___ not working today. It is her day off.': {
    why: "'Working' is an -ing verb, so it needs 'to be' before it. With 'she', the form is 'is', and 'not' goes after it.",
    not: {
      does: "'Does not' goes with the plain verb, as in 'does not work'. With 'working', use 'to be'.",
      are: "'Are' is for you, we, they and plurals. With 'she', use 'is'.",
    },
    more: "A 'day off' is a day when you do not go to work.",
    tip: "Use 'is not' or 'isn't' with an -ing verb for something not happening now.",
  },
  'Be quiet. The baby ___ sleeping.': {
    why: "'Sleeping' is an -ing verb, so it needs 'to be' before it. 'The baby' is one person, so the form is 'is'.",
    not: {
      are: "'Are' is for plurals. 'The baby' is one, so use 'is'.",
      does: "'Does' goes with the plain verb, as in 'does sleep'. With an -ing verb, use 'to be'.",
    },
    more: "'Be quiet' shows the baby is sleeping at this moment, so the sentence is about now.",
    tip: "Use 'is' or 'are' with an -ing verb to say what is happening at this moment.",
  },
  "What ___ you doing at eight o'clock last night?": {
    why: "'Last night' is past, and 'doing' is an -ing verb, so we need the past of 'to be'. 'You' takes 'were'.",
    not: {
      was: "'Was' never goes with 'you'. Use 'were'.",
      did: "'Did' goes with the plain verb, as in 'What did you do?'. With 'doing', use 'to be'.",
      are: "'Are' is the present. 'Last night' is in the past, so use 'were'.",
    },
    more: 'This question asks about an action in progress at one time in the past.',
    tip: "Answer with the past of 'to be' and an -ing verb, and say the time.",
  },
  'I ___ reading when you phoned.': {
    why: "'When you phoned' is past, and 'reading' is an -ing verb, so we need the past of 'to be'. With 'I', the form is 'was'.",
    not: {
      were: "'Were' is for you, we and they. With 'I', use 'was'.",
      am: "'Am' is the present. 'You phoned' shows the time is past.",
      did: "'Did' goes with the plain verb, as in 'did read'. With 'reading', use 'to be'.",
    },
    more: "'Was reading' describes an action that was in progress when something else happened.",
    tip: "In stories, use 'was' or 'were' with an -ing verb for the background, and the past simple for what happened.",
  },
  'Mia moved to Leeds in 2019. She ___ there ever since.': {
    why: "'Ever since' means from 2019 until now, so we need the present perfect of 'to be'. With 'she', that is 'has been'.",
    not: {
      is: "'Is' only describes now. To join a past start to now, English needs the present perfect: 'has been'.",
      was: "'Was' describes a finished past. She is still in Leeds, and 'ever since' reaches to now.",
      'have been': "'Have been' is for I, you, we and they. With 'she', use 'has been'.",
    },
    more: "'Since' gives the start of a time up to now: since 2019, since Monday. 'For' gives its length: for five years.",
    tip: "Many learners use the present with 'since'. In English, a time from the past up to now needs the present perfect.",
  },
  'My grandparents ___ married for fifty years, and they are still very happy.': {
    why: "They married fifty years ago and are still married now, so we need the present perfect of 'to be'. 'My grandparents' is plural: 'have been'.",
    not: {
      are: "'Are married for fifty years' is a common mistake. A time from the past up to now needs the present perfect.",
      were: "'Were married for fifty years' would mean the marriage has ended. 'They are still very happy' shows it has not.",
      'have being':
        "After 'have', use 'been', not 'being'. 'Being' goes after 'am', 'is' or 'are'.",
    },
    more: "'For fifty years' gives the length of time up to now. Fifty years of marriage is called a golden wedding.",
    tip: "To say how long something has lasted, use the present perfect of 'to be' and 'for' with the length of time.",
  },
  'A: When did you start at this school? B: Two years ago. A: Oh, so you ___ here for two years.': {
    why: "B started two years ago and is still at the school, so A needs the present perfect of 'to be'. With 'you', that is 'have been'.",
    not: {
      are: "'You are here for two years' is a common mistake. From a past start up to now, English uses the present perfect.",
      were: "'Were here for two years' would mean B has left. B is still at the school.",
      'has been': "'Has been' is for he, she and it. With 'you', use 'have been'.",
    },
    more: "'Two years ago' gives a finished time, so B answers with the past. 'For two years' joins that past to now.",
    tip: "Listen for the clue: 'ago' goes with the past simple, and 'for' up to now goes with the present perfect.",
  },
  'Our teacher is ill. She ___ off school since Monday.': {
    why: "She became ill on Monday and is still ill now. A time from the past up to now, with 'since', needs the present perfect: 'has been'.",
    not: {
      is: "'She is off school since Monday' is a common mistake. With 'since', English needs the present perfect.",
      was: "'Was' describes a finished past, but she is still ill now.",
      'had been':
        "'Had been' looks back from another point in the past. This sentence looks back from now.",
    },
    more: "'Off school' means away from school, often because of illness.",
    tip: "When you see 'since' and a day or a date, check that 'has' or 'have' comes before 'been'.",
  },
  'I joined the chess club three years ago, and I still go every week. So I ___ a member for three years.':
    {
      why: "The speaker joined three years ago and is still a member. From a past start up to now, we use the present perfect: with 'I', 'have been'.",
      not: {
        am: "'I am a member for three years' is a common mistake. With 'for' up to now, English needs the present perfect.",
        was: "'Was' would mean the speaker left the club. 'I still go every week' shows the opposite.",
        'have being': "After 'have', use 'been', not 'being'.",
      },
      more: "'Still' shows that something has not stopped: a strong clue for the present perfect.",
      tip: "When you write about your hobbies, say how long you have done them with the present perfect and 'for'.",
    },
  'We ___ friends since we were five.': {
    why: "The friendship started at the age of five and goes on now. With 'since', English needs the present perfect: with 'we', 'have been'.",
    not: {
      are: "'We are friends since we were five' is a common mistake. With 'since', English needs the present perfect.",
      were: "'Were friends' would mean they are not friends now. 'Since' reaches up to now.",
      'has been': "'Has been' is for he, she and it. With 'we', use 'have been'.",
    },
    more: "After 'since', we can put a time, as in 'since 2015', or a short past sentence, as in 'since we were five'.",
    tip: "Write about a friend: say how long you have known them with 'since' or 'for'.",
  },
  'It started raining on Friday. It ___ wet for three days now.': {
    why: "The rain started on Friday and has not stopped, so we join the past to now with the present perfect. With 'it', that is 'has been'.",
    not: {
      is: "'It is wet for three days' is a common mistake. A length of time up to now needs the present perfect.",
      was: "'Was' describes a finished past. 'Now' at the end shows the wet weather goes on.",
      'have been': "'Have been' is for I, you, we and they. With 'it', use 'has been'.",
    },
    more: "'For three days now' means three days up to this moment.",
    tip: "Weather can last: use the present perfect with 'for' or 'since' to say how long.",
  },
  'My uncle started driving buses in 2010. He still loves it. He ___ a bus driver since 2010.': {
    why: "He started in 2010 and still drives buses now, so with 'since' we need the present perfect. With 'he', that is 'has been'.",
    not: {
      is: "'He is a bus driver since 2010' is a common mistake. With 'since', English needs the present perfect.",
      was: "'Was' would mean he no longer drives buses. 'He still loves it' shows he does.",
      'have been': "'Have been' is for I, you, we and they. With 'he', use 'has been'.",
    },
    more: "We can say the same with 'for': for over fifteen years.",
    tip: "To talk about someone's job, use the present perfect with 'since' to say when it started.",
  },
  'The café on our street opened in 1985, and it is still busy every day. It ___ open for over forty years.':
    {
      why: "The café opened in 1985 and is still open, so we join the past to now with the present perfect. With 'it', that is 'has been'.",
      not: {
        is: "'It is open for forty years' is a common mistake. A length of time up to now needs the present perfect.",
        was: "'Was open for forty years' would mean it has closed. The first sentence says it is still busy.",
        'had been':
          "'Had been' looks back from another point in the past. Here we look back from now.",
      },
      more: "'Over' before a number means more than: over forty years, over a hundred people.",
      tip: "To describe a place in your town, say how long it has been open with 'for' or 'since'.",
    },
  'Our school is very old. It ___ built in 1902.': {
    why: "We do not need to say who built it, so we use the passive: 'to be' and 'built'. 1902 is a finished time, so the form is 'was'.",
    not: {
      is: "'Is built' is the present passive, for things done now or always. 1902 is in the past.",
      'has been':
        "'Has been' links the past to now. With a finished time like 1902, English uses 'was'.",
      were: "'Were' is for plurals. The school is one thing, so use 'was'.",
    },
    more: 'The passive puts the thing first and the action after. Who built the school does not matter here.',
    tip: "When you write about a building's history, use 'was built', 'was opened' or 'was named' and a year.",
  },
  'A: What a lovely old photo. B: Thanks. It ___ taken by my grandmother in 1975.': {
    why: "The photo is the subject, and someone else did the action, so we use the passive. 1975 is a finished time, and the photo is one thing: 'was taken'.",
    not: {
      is: "'Is taken' is the present passive. 1975 is in the past.",
      'has been':
        "'Has been' links the past to now. With a finished time like 1975, English uses 'was'.",
      were: "'Were' is for plurals. The photo is one thing.",
    },
    more: "'By' tells us who did the action in a passive sentence: taken by my grandmother.",
    tip: "Use the passive with 'by' when the person who did the action matters: painted by, written by, taken by.",
  },
  'Our street looks very different now. The old houses ___ knocked down in 1990.': {
    why: "The houses are the subject, and someone else knocked them down, so we use the passive. 1990 is finished, and 'the old houses' is plural: 'were'.",
    not: {
      was: "'Was' is for one thing. 'The old houses' are more than one.",
      are: "'Are knocked down' is the present passive. 1990 is in the past.",
      'have been':
        "'Have been' links the past to now. With a finished time like 1990, English uses 'were'.",
    },
    more: "'Knock down' means destroy a building on purpose.",
    tip: "In the passive, the form of 'to be' agrees with the thing, not with the person who did it.",
  },
  'Our city is getting greener. Every year, thousands of trees ___ planted here.': {
    why: "Trees cannot plant themselves, so we use the passive: 'to be' and 'planted'. 'Every year' shows a regular action now, and 'trees' is plural: 'are'.",
    not: {
      is: "'Is' is for one thing. 'Thousands of trees' is plural.",
      have: "'Trees have planted' would mean the trees did the planting. The passive needs 'to be'.",
      has: "'Has' is for one thing, and the passive needs 'to be', not 'have'.",
    },
    more: 'The present passive describes regular actions where the person does not matter: The bins are emptied on Mondays.',
    tip: 'If the subject cannot do the action, the sentence probably needs the passive.',
  },
  'People learn English all over the world. Today, English ___ spoken in many countries.': {
    why: "English is the subject, and people speak it, so we use the passive: 'to be' and 'spoken'. 'Today' shows the present, and English is one language: 'is'.",
    not: {
      are: "'Are' is for plurals. English, the language, is one thing.",
      was: "'Was' is the past. 'Today' shows the present.",
      has: "'English has spoken' would mean the language did the speaking. The passive needs 'to be'.",
    },
    more: "'Spoken' is the past participle of 'speak'. The passive always uses this form after 'to be'.",
    tip: "To write about languages, use 'is spoken in' and the places: Spanish is spoken in Mexico.",
  },
  'A: Why are you late? B: My bike ___ stolen last night, so I had to walk.': {
    why: "Someone stole the bike, and we do not know who, so we use the passive. 'Last night' is finished, and the bike is one thing: 'was stolen'.",
    not: {
      is: "'Is stolen' is the present passive. 'Last night' is in the past.",
      'has been':
        "'Has been' links the past to now. 'Last night' is a finished time, so English uses 'was'.",
      were: "'Were' is for plurals. 'My bike' is one thing.",
    },
    more: 'We use the passive when we do not know who did something: My phone was stolen.',
    tip: 'When you report a crime or an accident, the passive helps: was stolen, was broken, was damaged.',
  },
  'The classroom looks great this morning. The windows ___ cleaned yesterday.': {
    why: "Someone cleaned the windows, so we use the passive. 'Yesterday' is finished, and 'the windows' is plural: 'were cleaned'.",
    not: {
      was: "'Was' is for one thing. 'The windows' are more than one.",
      are: "'Are cleaned' is the present passive. 'Yesterday' is in the past.",
      'have been':
        "'Have been' links the past to now. 'Yesterday' is a finished time, so English uses 'were'.",
    },
    more: 'The first sentence describes now; the second explains it with a past action.',
    tip: "Read for the time word: 'yesterday' tells you to use the past form of 'to be' in the passive.",
  },
  'This bread is still warm. It ___ made an hour ago.': {
    why: "Someone made the bread, so we use the passive. 'An hour ago' is a finished time, and the bread is one thing: 'was made'.",
    not: {
      is: "'Is made' is the present passive, for things done regularly. 'An hour ago' is in the past.",
      'has been':
        "'Has been' links the past to now. 'Ago' goes with past forms, never with the present perfect.",
      were: "'Were' is for plurals. The bread is one thing.",
    },
    more: "'Ago' counts back from now: an hour ago, two days ago. It goes with past forms, never with the present perfect.",
    tip: 'Fresh food often uses the passive: made this morning, baked today, picked yesterday.',
  },
  'The new library is ready, but it is not open yet. It ___ opened by the mayor next week.': {
    why: "'Next week' is in the future, and the mayor will do the action, so we use the future passive: 'will be' and 'opened'.",
    not: {
      was: "'Was' is the past. 'Next week' is in the future.",
      'has been': "'Has been' links the past to now. 'Next week' is in the future.",
      will: "'It will opened' has no 'be'. The future passive needs 'will be' before 'opened'.",
    },
    more: "The future passive is 'will be' and a past participle: will be opened, will be built.",
    tip: "In news about plans for your town, look for 'will be' and a past participle.",
  },
  'Yesterday something strange happened. I ___ walking to school when I saw a fox.': {
    why: "The walk was in progress when the fox appeared, so we use the past continuous: the past of 'to be' and an -ing verb. With 'I', that is 'was'.",
    not: {
      were: "'Were' is for you, we and they. With 'I', use 'was'.",
      am: "'Am' is the present, but the story happened yesterday.",
      'have been':
        "'Have been' links the past to now. This story is about one finished time, yesterday.",
    },
    more: 'In a story, the past continuous gives the background, and the past simple gives the event that interrupts it.',
    tip: 'Start a story with the past continuous to set the scene, then use the past simple for what happened.',
  },
  "At eight o'clock last night, our house was very busy. My parents ___ cooking, and my sister was doing her homework.":
    {
      why: "At eight o'clock last night, the cooking was in progress, so we use the past continuous. 'My parents' is plural, so the form is 'were'.",
      not: {
        was: "'Was' is for one person. 'My parents' are two people.",
        are: "'Are' is the present, but the time is last night.",
        'have been': "'Have been' links the past to now. This is one moment last night.",
      },
      more: 'The past continuous can describe several things happening at the same moment in the past.',
      tip: "To describe a busy scene, use 'was' or 'were' and an -ing verb for each person.",
    },
  'While we ___ waiting for the bus, it started to rain.': {
    why: "The waiting was in progress when the rain began, so we use the past continuous. 'We' is plural, so the form is 'were'.",
    not: {
      was: "'Was' is for I, he, she and it. With 'we', use 'were'.",
      are: "'Are' is the present, but 'it started to rain' is in the past.",
      'have been': "'Have been' links the past to now. This happened at one time in the past.",
    },
    more: "'While' often comes before the longer action, in the past continuous.",
    tip: "Use 'while' for the longer action and 'when' for the short one that interrupts it.",
  },
  "Sorry I didn't answer your call last night. I ___ having a shower.": {
    why: "The shower was in progress when the phone rang last night, so we use the past continuous. With 'I', the form is 'was'.",
    not: {
      am: "'Am' is the present, but the call was last night.",
      were: "'Were' is for you, we and they. With 'I', use 'was'.",
      'have been':
        "'Have been' links the past to now. The call was at one finished time, last night.",
    },
    more: "'Having a shower' uses 'have' as an action, so it can take an -ing ending.",
    tip: 'To explain a missed call, use the past continuous to say what was happening at the time.',
  },
  'When the teacher came in, the students ___ talking loudly.': {
    why: "The talking was already in progress when the teacher came in, so we use the past continuous. 'The students' is plural, so the form is 'were'.",
    not: {
      was: "'Was' is for one person. 'The students' are more than one.",
      are: "'Are' is the present, but 'the teacher came in' is past.",
      'have been': "'Have been' links the past to now. This happened at one moment in the past.",
    },
    more: "The past simple 'came in' is the short event; the past continuous is what was already happening.",
    tip: "Ask: which action started first and went on? That one takes 'was' or 'were' and -ing.",
  },
  "A: Why didn't you hear the doorbell? B: Sorry, I ___ listening to music.": {
    why: "B was in the middle of listening when the doorbell rang, so B uses the past continuous. With 'I', the form is 'was'.",
    not: {
      am: "'Am' is the present, but the doorbell rang in the past.",
      were: "'Were' is for you, we and they. With 'I', use 'was'.",
    },
    more: "A's question uses the past simple, 'didn't hear', for the short event. B answers with the longer action.",
    tip: 'When someone asks about a missed sound or call, the past continuous explains what was going on.',
  },
  'Last Sunday, we had a picnic in the park. The sun ___ shining, and everyone looked happy.': {
    why: "The story is about last Sunday, and the sunshine was the background, so we use the past continuous. 'The sun' is one thing: 'was'.",
    not: {
      were: "'Were' is for plurals. 'The sun' is one thing.",
      is: "'Is' is the present, but the picnic was last Sunday.",
      'has been': "'Has been' links the past to now. The picnic was at a finished time.",
    },
    more: 'Writers often set the scene with the weather in the past continuous.',
    tip: 'In a description, the past continuous paints the picture: the wind was blowing, the leaves were falling.',
  },
  'Last night there was a power cut. We ___ watching a film when the lights went out.': {
    why: "We were in the middle of the film when the lights went out, so we use the past continuous. 'We' is plural, so the form is 'were'.",
    not: {
      was: "'Was' is for I, he, she and it. With 'we', use 'were'.",
      are: "'Are' is the present, but the power cut was last night.",
      'have been':
        "'Have been' links the past to now. The power cut happened at one finished time.",
    },
    more: "A 'power cut' is a time when the electricity stops working. American English says 'power outage'.",
    tip: "Use 'when' and the past simple for the event that stops or changes the longer action.",
  },
  "A: Look at the ice on the cars. B: It's really cold today, ___ it?": {
    why: "A question tag checks that someone agrees. After a positive sentence with 'is', the tag uses 'isn't': it's cold, isn't it?",
    not: {
      "doesn't": "The sentence uses 'is', not another verb, so the tag uses 'is' too.",
      "wasn't": 'The sentence is about today, in the present. The tag keeps the same time.',
      "aren't": "'Aren't' goes with you, we and they. The tag here goes with 'it'.",
    },
    more: 'A positive sentence takes a negative tag, and a negative sentence takes a positive tag.',
    tip: 'Use tags to make small talk friendly, especially about the weather.',
  },
  "A: Hi. I'm Omar. B: Hi, Omar. You're new here, ___ you?": {
    why: "'You're new here' uses 'are', so the negative tag uses 'aren't'. A tag repeats the verb from the sentence.",
    not: {
      "don't": "The sentence uses 'are', not another verb, so the tag uses 'are' too.",
      "isn't": "'Isn't' goes with he, she and it. With 'you', the tag is 'aren't'.",
      "weren't": 'The sentence is in the present, so the tag stays in the present.',
    },
    more: "'You're' is the short form of 'you are'. The tag uses the same verb, 'are', in the negative.",
    tip: 'A question tag is a polite way to start a conversation with someone new.',
  },
  'A: Lena and Max missed the start of the film. B: They were late again, ___ they?': {
    why: "The sentence uses 'were', so the negative tag uses 'weren't'. The tag keeps the same verb and the same time.",
    not: {
      "didn't": "The sentence uses 'were', not another verb, so the tag uses 'were' too.",
      "wasn't": "'Wasn't' goes with I, he, she and it. With 'they', the tag is 'weren't'.",
      "aren't": 'The sentence is in the past, so the tag stays in the past.',
    },
    more: "'Again' tells us this has happened before, so B expects A to agree.",
    tip: 'To make a tag, take the verb from the sentence, make it negative, and add the pronoun.',
  },
  "A: Where is Priya? B: I don't know. She isn't here today, ___ she?": {
    why: "The sentence is negative, with 'isn't', so the tag is positive. A negative sentence takes a positive tag.",
    not: {
      "isn't":
        'Two negatives do not go together here. After a negative sentence, the tag is positive.',
      does: "The sentence uses 'is', not another verb, so the tag uses 'is' too.",
      was: 'The sentence is about today, in the present, so the tag stays in the present.',
    },
    more: "With a positive tag after a negative sentence, the speaker expects the answer 'No'.",
    tip: "Check the sentence first: if it has 'not' or n't, the tag has no 'not'.",
  },
  "A: The lesson started ten minutes ago. B: Oh no. I'm late, ___ I?": {
    why: "The tag for 'I am' is special. In standard English, the negative tag here is 'aren't', because English has no short negative form for 'am'.",
    not: {
      "isn't": "'Isn't' goes with he, she and it. With 'I', the tag is 'aren't'.",
      "don't": "The sentence uses 'am', not another verb, so the tag comes from 'to be'.",
      "wasn't": 'The sentence is about now, so the tag stays in the present.',
    },
    more: "This is one of the few places where 'aren't' goes with 'I'. In a normal sentence, 'aren't' never follows 'I'.",
    tip: "Learn the tag for 'I'm' as a set phrase, because it does not follow the usual pattern.",
  },
  "A: I need to revise tonight. B: Oh yes. There's a test tomorrow, ___ there?": {
    why: "'There's' here means 'there is', so the negative tag is 'isn't there?'. A tag keeps 'there' as its subject.",
    not: {
      "doesn't": "The sentence uses 'is', not another verb, so the tag uses 'is' too.",
      "hasn't": "Here the 's means 'is', not 'has', so the tag uses 'isn't'.",
      "aren't": "'A test' is one thing, so the tag uses 'isn't', not 'aren't'.",
    },
    more: "The 's in 'there's' can mean 'is' or 'has'. Look at the next word to decide: a test after it means 'is', 'been' after it means 'has'.",
    tip: "Use tags with 'there' to check plans: There's a party on Friday, isn't there?",
  },
  'A: My parents speak Swahili at home. B: Your parents are from Kenya, ___ they?': {
    why: "The sentence uses 'are', so the negative tag uses 'aren't'. 'Your parents' becomes 'they' in the tag.",
    not: {
      "don't": "The sentence uses 'are', not another verb, so the tag uses 'are' too.",
      "isn't": "'Isn't' goes with one person or thing. 'Your parents' are two people.",
      "weren't": 'The sentence is in the present, so the tag stays in the present.',
    },
    more: 'In a tag, a noun always becomes a pronoun: your parents, they; the film, it.',
    tip: 'Use a tag when you think you know something and want to check it.',
  },
  "A: Tom missed the maths test. B: That's right. He wasn't at school yesterday, ___ he?": {
    why: "The sentence is negative, with 'wasn't', so the tag is positive. It keeps the past, like the sentence.",
    not: {
      "wasn't":
        'Two negatives do not go together here. After a negative sentence, the tag is positive.',
      did: "The sentence uses 'was', not another verb, so the tag uses 'was' too.",
      is: 'The sentence is about yesterday, in the past, so the tag stays in the past.',
    },
    more: 'Tags follow three rules: the same verb, the same time, and the opposite of the sentence, positive or negative.',
    tip: 'Practise tags aloud: say a sentence, then add its tag, keeping the same verb and time.',
  },
  "A: Whose coat is this? B: It's Leo's coat, ___ it?": {
    why: "'It's Leo's coat' uses 'is', so the negative tag is 'isn't it?'. B thinks it is Leo's coat and checks.",
    not: {
      "doesn't": "The sentence uses 'is', not another verb, so the tag uses 'is' too.",
      "aren't": "'Aren't' goes with you, we and they. The tag here goes with 'it'.",
      "wasn't": 'The sentence is about now, so the tag stays in the present.',
    },
    more: "The 's in 'Leo's' shows that the coat belongs to Leo. The 's in 'It's' means 'is'.",
    tip: 'Use a falling voice on the tag when fairly sure, and a rising voice when really asking.',
  },
  "A: Hurry up. The film starts at seven. B: We aren't late, ___ we? It is only six.": {
    why: "The sentence is negative, with 'aren't', so the tag is positive. B expects A to say no.",
    not: {
      "aren't":
        'Two negatives do not go together here. After a negative sentence, the tag is positive.',
      do: "The sentence uses 'are', not another verb, so the tag uses 'are' too.",
      were: 'The sentence is about now, so the tag stays in the present.',
    },
    more: "'It is only six' gives B's reason: the film is still an hour away.",
    tip: 'When you want someone to agree that all is well, use a negative sentence and a positive tag.',
  },
  'A: What shall we do on Saturday? B: If it ___ sunny, we will go to the beach.': {
    why: "After 'if', English uses the present for a future time, even when the other half has 'will'. With 'it', the present form is 'is'.",
    not: {
      'will be':
        "'If it will be sunny' is a common mistake. After 'if', use the present, even for the future.",
      was: "'Was' is the past. Saturday is still to come, and the other half of the sentence has 'will'.",
      'would be':
        "'Would be' does not go after 'if' here. After 'if', use the present for a real future plan.",
    },
    more: "This is the first conditional: 'if' and the present, then 'will' and a verb, for real possibilities.",
    tip: "When you make plans, check the 'if' half of your sentence: no 'will' there.",
  },
  'When I ___ older, I want to work with animals.': {
    why: "After 'when' for a future time, English uses the present, not 'will'. With 'I', the present form is 'am'.",
    not: {
      'will be':
        "'When I will be older' is a common mistake. After 'when', use the present for the future.",
      was: "'Was' is the past. Being older is still to come.",
      'would be': "'Would be' does not go after 'when' here. Use the present.",
    },
    more: "Words like when, before, after and as soon as work like 'if': they take the present for the future.",
    tip: "To talk about your future, start with 'When I am older' or 'When I leave school'.",
  },
  "A: I don't understand this homework. B: If I ___ you, I would ask the teacher for help.": {
    why: "This is a fixed way to give advice. It imagines something that is not true, so after 'if' it uses 'were', even with 'I'.",
    not: {
      am: "'If I am you' is impossible: I cannot really be you. For an imagined situation, English uses 'were'.",
      'will be': "'Will be' does not go after 'if' here. The advice phrase is 'If I were you'.",
      'would be':
        "'Would' goes in the other half of the sentence: I would ask. After 'if', use 'were'.",
    },
    more: "In everyday British English, many people use 'was' in this phrase. The form with 'were' is the standard one, and the safe choice in exams.",
    tip: "Use this phrase, then 'I would' and a verb, to give polite advice to a friend.",
  },
  'A: What time does your train arrive? B: About six. I will phone you when I ___ at the station.':
    {
      why: "After 'when' for a future time, English uses the present. With 'I', the present form is 'am'.",
      not: {
        'will be':
          "'When I will be' is a common mistake. After 'when', use the present, even for the future.",
        was: "'Was' is the past. The train has not arrived yet.",
        'would be': "'Would be' does not go after 'when' here. Use the present.",
      },
      more: "'Will' goes in the other half: I will phone you. Only the 'when' half takes the present.",
      tip: "Promise to call or text with 'I will' and a 'when' half in the present.",
    },
  'A: We still have a long way to walk. B: If you ___ tired, we can stop for a rest.': {
    why: "This is a real possibility, so we use 'if' and the present. 'You' takes 'are'.",
    not: {
      'will be': "After 'if', use the present, not 'will', even when we mean the future.",
      were: "'Were' after 'if' imagines something unreal, and it goes with 'could' or 'would'. Here B uses 'can', for a real plan.",
      'would be': "'Would be' does not go after 'if' here. Use the present.",
    },
    more: "'If you are tired' is kind and polite: it offers help without saying the person looks tired.",
    tip: "Offer help with 'If you are' and an adjective, then 'we can' or 'I can'.",
  },
  'If the weather ___ bad tomorrow, the match will be cancelled.': {
    why: "After 'if', English uses the present for a future time. 'The weather' is one thing, so the present form is 'is'.",
    not: {
      'will be':
        "'Will be' belongs in the other half: the match will be cancelled. After 'if', use the present.",
      was: "'Was' is the past. 'Tomorrow' is in the future.",
      'would be':
        "'Would be' does not go after 'if' here. For a real future possibility, use the present.",
    },
    more: "'Will be cancelled' is the future passive: someone will cancel the match.",
    tip: "In a sentence with 'if', find the 'if' half first and put its verb in the present.",
  },
  'Mum is at work until six. She will cook dinner when she ___ home.': {
    why: "After 'when' for a future time, English uses the present. With 'she', the present form is 'is'.",
    not: {
      'will be': "'When she will be home' is a common mistake. After 'when', use the present.",
      was: "'Was' is the past. Mum will come home later.",
      'would be': "'Would be' does not go after 'when' here. Use the present.",
    },
    more: "In everyday speech, 'to be home' needs no 'at': home by six, home late.",
    tip: "Use 'when' and the present to talk about the order of future events.",
  },
  'If I ___ rich, I would buy a house by the sea.': {
    why: "The speaker is not rich, so this is an imagined situation. For that, English uses 'if' and the past form 'were', with 'would' in the other half.",
    not: {
      am: "'If I am rich' would be a real possibility, but the other half uses 'would', for an imagined one.",
      'will be': "'Will be' does not go after 'if'. For an imagined situation, use 'were'.",
      'would be': "'Would' goes in the other half: I would buy. After 'if', use 'were'.",
    },
    more: "This is the second conditional, for dreams and imagined situations. Many people use 'was' here in everyday speech, but 'were' is the standard form.",
    tip: "Write about your dreams with 'If I were' and 'I would'.",
  },
  'We walk to school unless it ___ raining.': {
    why: "'Unless' means 'if not'. Like 'if', it takes the present here, because the sentence is about what usually happens. 'It' takes 'is'.",
    not: {
      'will be': "After 'unless', use the present, not 'will'.",
      was: "'Was' is the past. 'We walk' shows a habit in the present.",
      'would be': "'Would be' does not go after 'unless' here. Use the present.",
    },
    more: "'Unless it is raining' means 'if it is not raining'.",
    tip: "Use 'unless' to give the one case when your habit changes.",
  },
  "My brother is shy. He doesn't like ___ the centre of attention.": {
    why: "After 'like', English can use the -ing form. Of these options, only 'being' fits: he doesn't like being the centre of attention.",
    not: {
      be: "After 'like', we need the -ing form or 'to' and the verb, never the plain verb alone.",
      been: "'Been' goes after 'have', 'has' or 'had'. After 'like', use 'being'.",
      is: "A sentence needs only one verb form here. 'Like' is already the verb, so use 'being'.",
    },
    more: "After like, love and hate, English can also use 'to' and the verb. The -ing form and the 'to' form both work.",
    tip: "'The centre of attention' means the person that all the others look at. 'Centre' is the British spelling.",
  },
  'A: Here are the books you wanted. B: Great. Thank you for ___ so helpful today.': {
    why: "After a preposition such as 'for', English uses the -ing form of a verb, so 'be' becomes 'being'.",
    not: {
      be: "After 'for', we need the -ing form, not the plain verb.",
      'to be': "After a preposition like 'for', we never use 'to' and a verb. Use the -ing form.",
      been: "'Been' goes after 'have', 'has' or 'had'. After 'for', use 'being'.",
    },
    more: "'Thank you for' is always followed by a noun or an -ing verb: thank you for the books, thank you for helping.",
    tip: "End a thank-you message with 'Thank you for being so' and an adjective: kind, patient, helpful.",
  },
  "A: Why do you always run to the bus? B: I'm tired of ___ late every morning.": {
    why: "After a preposition such as 'of', English uses the -ing form of a verb, so 'be' becomes 'being'.",
    not: {
      be: "After 'of', we need the -ing form, not the plain verb.",
      'to be': "After a preposition like 'of', we never use 'to' and a verb. Use the -ing form.",
      been: "'Been' goes after 'have', 'has' or 'had'. After 'of', use 'being'.",
    },
    more: "'Tired of' something means you do not want it any more. Here the meaning has nothing to do with sleep.",
    tip: 'Learn adjectives with their prepositions: tired of, good at, interested in. Then add an -ing verb.',
  },
  'Kasia joined our class today. She seems ___ a little nervous.': {
    why: "After 'seem', English uses 'to' and the plain verb. So the answer is 'to be': she seems to be nervous.",
    not: {
      being: "After 'seem', we need 'to' and the plain verb, not the -ing form.",
      be: "After 'seem', we need 'to' before the verb.",
      is: "A sentence needs only one verb form here. 'Seems' is already the verb, so use 'to' and the plain verb.",
    },
    more: 'We can also leave the verb out: She seems nervous. Both are correct.',
    tip: "Use 'seems to be' when unsure: it describes how someone looks to you.",
  },
  'My cousin loves animals. She hopes ___ a vet one day.': {
    why: "After 'hope', English uses 'to' and the plain verb, so the answer is 'to be': she hopes to be a vet.",
    not: {
      being: "After 'hope', we need 'to' and the plain verb, not the -ing form.",
      be: "After 'hope', we need 'to' before the verb.",
      'will be': "'Hopes will be' has no subject for 'will'. With 'hope', use 'to' and the verb.",
    },
    more: "A 'vet' is a doctor for animals. The full word is 'veterinary surgeon'.",
    tip: "To write about your future, use 'I hope' with 'to' and a job or a verb.",
  },
  "A: Your parents are out tonight. B: That's OK. I don't mind ___ at home on my own.": {
    why: "After 'mind', English uses the -ing form, never 'to' and the verb. So 'be' becomes 'being'.",
    not: {
      'to be':
        "'I don't mind to be' is a common mistake. 'Mind' is always followed by the -ing form.",
      be: "After 'mind', we need the -ing form, not the plain verb.",
      been: "'Been' goes after 'have', 'has' or 'had'. After 'mind', use 'being'.",
    },
    more: "'I don't mind' means that something is fine for you and does not upset you.",
    tip: 'Learn the verbs that take only -ing: mind, enjoy, finish, avoid, keep.',
  },
  'Our team lost every match last year. This year we need ___ better.': {
    why: "After 'need', English uses 'to' and the plain verb. So we need 'to be': we need to be better.",
    not: {
      be: "After 'need' in a positive sentence, we need 'to' before the verb.",
      being: "After 'need', use 'to' and the plain verb here, not the -ing form.",
      are: "A sentence needs only one verb form here. 'Need' is already the verb, so use 'to' and the plain verb.",
    },
    more: "'Better' is the comparative of 'good': good, better, best.",
    tip: "To set a goal, use 'need to be' and an adjective: faster, stronger, better.",
  },
  'A: Why do you go to bed so early? B: I hate ___ tired in the morning.': {
    why: "After 'hate', English can use the -ing form. Of these options, only 'being' fits: I hate being tired.",
    not: {
      be: "After 'hate', we need the -ing form or 'to' and the verb, never the plain verb alone.",
      been: "'Been' goes after 'have', 'has' or 'had'. After 'hate', use 'being'.",
      am: "A sentence needs only one verb form here. 'Hate' is already the verb, so use 'being'.",
    },
    more: "After hate, love and like, the 'to' form also works: I hate to be late.",
    tip: "Explain your habits with 'because', or with 'I hate' and an -ing verb.",
  },
  'Look at those dark clouds. It ___ going to rain.': {
    why: "We use 'going to' for something we can see is coming. 'Going to' needs a form of 'to be' before it, and with 'it' the form is 'is'.",
    not: {
      will: "'Will going to' is a common mistake. 'Going to' needs 'am', 'is' or 'are' before it, never 'will'.",
      was: "'Was going to' is about the past. The clouds are here now, so use the present.",
      are: "'Are' is for you, we, they and plurals. With 'it', use 'is'.",
    },
    more: "Dark clouds are evidence: we can see now that rain is coming. That is why 'going to' fits.",
    tip: "When you can see what will happen next, use the right form of 'to be' and 'going to'.",
  },
  'We bought the train tickets yesterday. We ___ going to visit Grandma next weekend.': {
    why: "The plan was made before now, so we use 'going to'. It needs a form of 'to be' before it, and with 'we' the form is 'are'.",
    not: {
      will: "'Will going to' is a common mistake. 'Going to' needs 'to be' before it, never 'will'.",
      is: "'Is' is for he, she and it. With 'we', use 'are'.",
    },
    more: "Buying the tickets shows the plan is already made. 'Going to' is for plans like this.",
    tip: "Use 'going to' for plans you have already made, and say when: next weekend, in July.",
  },
  'A: Why are you wearing your football boots? B: I ___ going to play in the park.': {
    why: "B has already decided, so B uses 'going to' for the plan. It needs a form of 'to be' before it, and with 'I' the form is 'am'.",
    not: {
      will: "'Will going to' is a common mistake. 'Going to' needs 'to be' before it, never 'will'.",
      is: "'Is' is for he, she and it. With 'I', use 'am'.",
    },
    more: "'Going to play' is about the future, but its first verb, 'am', is in the present.",
    tip: "Say your plans for later with the right form of 'to be', then 'going to' and a verb.",
  },
  'I ___ going to call you, but my phone died.': {
    why: "This was a plan in the past that did not happen. For that, English uses the past of 'to be' with 'going to'. With 'I', the form is 'was'.",
    not: {
      am: "'Am going to' is a plan for now or later. 'My phone died' shows the plan was in the past.",
      will: "'Will going to' is a common mistake. 'Going to' needs 'to be' before it.",
      were: "'Were' is for you, we and they. With 'I', use 'was'.",
    },
    more: "'Was going to' often comes before 'but' and the reason the plan changed.",
    tip: "To say sorry for a broken plan, use 'was going to' and 'but' with the reason.",
  },
  'A: Do you have plans for the summer? B: Yes, my sister and I ___ going to learn to swim.': {
    why: "'My sister and I' means two people, like 'we', so the form of 'to be' is 'are'. 'Going to' always needs 'to be' before it.",
    not: {
      am: "'Am' goes with 'I' alone. 'My sister and I' are two people, so use 'are'.",
      is: "'Is' is for one person. 'My sister and I' are two people.",
      will: "'Will going to' is a common mistake. 'Going to' needs 'to be' before it.",
    },
    more: "'Learn to swim' means learn how to swim. 'Learn' is followed by 'to' and a verb.",
    tip: 'When you talk about plans with family or friends, name the others first and yourself last.',
  },
  'Be careful with that glass. You ___ going to drop it.': {
    why: "The speaker can see what is about to happen, so we use 'going to'. It needs a form of 'to be' before it, and with 'you' the form is 'are'.",
    not: {
      will: "'Will going to' is a common mistake. 'Going to' needs 'to be' before it.",
      is: "'Is' goes with he, she and it. 'You' always takes 'are'.",
      were: "'Were' is the past. 'Be careful' is a warning about right now.",
    },
    more: "'Going to' warns about something we can see is about to happen.",
    tip: "Use 'going to' in warnings about what you can see is about to happen.",
  },
  'This shop sells shoes now. It ___ a bank when I was a child.': {
    why: "'Used to be' describes something true in the past that is not true now. The shop was a bank, but it sells shoes now.",
    not: {
      'use to be':
        "'Use to' without the d is a common spelling mistake. In a positive sentence, write 'used to'.",
      'was used to':
        "'Was used to' means 'was familiar with', as in 'I was used to the cold'. It does not fit here.",
      'is used to':
        "'Is used to' means 'is familiar with'. The sentence is about what the shop was in the past.",
    },
    more: "'Used to' and the plain verb shows a past state or habit: I used to live in Lagos.",
    tip: "To describe how your town has changed, use 'used to be' for the old places and the present for now.",
  },
  'My grandad is very calm these days. But he ___ very strict when my dad was young.': {
    why: "'Used to be' shows a past state that has changed: strict then, and calm these days.",
    not: {
      'use to be':
        "'Use to' without the d is a common spelling mistake. In a positive sentence, write 'used to'.",
      'was used to':
        "'Was used to' means 'was familiar with'. It does not describe what someone was like.",
      'used to being':
        "'Used to being' follows a form of 'to be' and means 'familiar with', as in 'used to being busy'. It does not fit here.",
    },
    more: "'These days' and 'when my dad was young' compare now and then: a clue for 'used to'.",
    tip: "Compare people in the past and now with 'used to be' and the present.",
  },
  'There ___ a cinema in our town, but it closed years ago.': {
    why: "'There used to be' describes something that existed in the past but does not exist now. The cinema closed years ago.",
    not: {
      'use to be':
        "'Use to' without the d is a common spelling mistake. In a positive sentence, write 'used to'.",
      'was used to': "'Was used to' means 'was familiar with'. With 'there', we need 'used to be'.",
      'is used to': "'Is used to' means 'is familiar with', and the cinema does not exist now.",
    },
    more: "The past simple would also work here, but 'used to be' makes it clear that the cinema is gone now.",
    tip: "In a town description, 'there used to be' shows how the place has changed.",
  },
  'A: Why is there a new speed sign on this road? B: There ___ two accidents here since January.': {
    why: "'Since January' joins a past time to now, so we need the present perfect. 'Two accidents' is plural: 'have been'.",
    not: {
      were: "'Were' describes a finished past. 'Since January' reaches up to now, so use the present perfect.",
      are: "'Are' only describes now. With 'since', English needs the present perfect.",
      was: "'Was' is for one thing and a finished past. 'Two accidents' is plural, and 'since' needs the present perfect.",
    },
    more: "With 'there', the present perfect uses 'has' for one thing and 'have' for more than one, then 'been'.",
    tip: "News reports often use 'There have been' with a number and 'since'.",
  },
  'The weather forecast is bad. There ___ strong winds tonight, so stay inside.': {
    why: "'Tonight' is still to come, and this is a forecast, so we use the future: 'there will be'.",
    not: {
      were: "'Were' is the past. The winds are coming tonight, in the future.",
      will: "'There will strong winds' has no 'be'. After 'will', we need the plain verb 'be'.",
      was: "'Was' is the past, and it is for one thing. 'Strong winds' is plural and in the future.",
    },
    more: "'There will be' is the same for one thing and for many: there will be a storm, there will be storms.",
    tip: "Weather forecasts use 'there will be' with rain, snow, sunshine and winds.",
  },
  'A: How was the party? B: Great. There ___ so many people that we could not move.': {
    why: "The party is over, so the time is past. 'So many people' is plural, so we need 'there were'.",
    not: {
      was: "'Was' is for one thing. 'So many people' is plural.",
      are: "'Are' is the present. The party is over.",
      'have been': "'Have been' links the past to now. The party was at a finished time.",
    },
    more: "'So many ... that' shows a result: so many people that we could not move.",
    tip: "To describe a busy event, use 'there were' and 'so many' or 'a lot of'.",
  },
  'Our village is very quiet now. Fifty years ago, there ___ three shops and a school here.': {
    why: "'Fifty years ago' is a finished time, and 'three shops and a school' is plural. So we need 'there were'.",
    not: {
      was: "'Was' is for one thing. 'Three shops and a school' are more than one.",
      are: "'Are' is the present. 'Fifty years ago' is in the past.",
      'have been': "'Have been' links the past to now. With 'ago', English uses the past simple.",
    },
    more: "After 'there', the verb usually agrees with the noun that comes next. Here that is 'three shops', which is plural.",
    tip: "To compare a place then and now, use the past of 'to be' after 'there' for then, and the present for now.",
  },
  'A: Is everything OK? You look worried. B: Yes. There ___ a problem with my phone, but it works now.':
    {
      why: "'But it works now' shows the problem is over, so the time is past. 'A problem' is one thing: 'there was'.",
      not: {
        is: "'Is' is the present, but the phone works now: the problem has gone.",
        were: "'Were' is for plurals. 'A problem' is one thing.",
        has: "After 'there', English uses 'to be', not 'have'.",
      },
      more: "'Is everything OK?' is a kind way to ask if someone needs help.",
      tip: "Use 'there was' to explain a problem that is now solved.",
    },
  'The builders started work in March. Next year there ___ a new swimming pool in our town.': {
    why: "'Next year' is the future, so we need 'there will be'. 'Will be' is the same for one thing and for many.",
    not: {
      was: "'Was' is the past. 'Next year' is in the future.",
      'has been': "'Has been' links the past to now. 'Next year' is in the future.",
      will: "'There will a new pool' has no 'be'. After 'will', we need 'be'.",
    },
    more: "'The builders started work' tells us the plan is real and the pool is coming.",
    tip: "Describe future changes in your town with 'there will be'.",
  },
  'A: Where were you last night? B: At home, with my family. A: ___ your brother at home too?': {
    why: "The conversation is about last night, so A uses the past. 'Your brother' means one person, so the question starts with 'Was'.",
    not: {
      Were: "'Were' is for you, we, they and plurals. 'Your brother' is one person.",
      Is: "'Is' is the present. The conversation is about last night.",
      Did: "'Did' makes questions with other verbs. 'At home' is a place, so the question uses 'to be'.",
    },
    more: "B answers without a verb, 'At home', because the verb is clear from the question.",
    tip: 'In a conversation, keep the same time as the first question unless something changes.',
  },
  'A: I phoned you three times yesterday. B: Sorry, I ___ at football practice all afternoon.': {
    why: "A talks about yesterday, so B explains with the past. With 'I', the past form is 'was'.",
    not: {
      am: "'Am' is the present. A phoned yesterday, so B answers in the past.",
      were: "'Were' is for you, we and they. With 'I', use 'was'.",
      'have been': "'Have been' links the past to now. Yesterday afternoon is a finished time.",
    },
    more: "'All afternoon' means for the whole afternoon.",
    tip: 'When you say sorry for a missed call, give the reason in the past, with the place and the activity.',
  },
  'A: Is Sara still in hospital? B: No, she ___ at home since Tuesday.': {
    why: "Sara came home on Tuesday and is still at home now. With 'since', English needs the present perfect: with 'she', 'has been'.",
    not: {
      is: "'She is at home since Tuesday' is a common mistake. With 'since', use the present perfect.",
      was: "'Was' describes a finished past, but she is still at home.",
      'had been':
        "'Had been' looks back from another point in the past. This answer looks back from now.",
    },
    more: "'In hospital', with no 'the', is British English. American English says 'in the hospital'.",
    tip: "Good news about someone's health often uses 'has been' and 'since'.",
  },
  'A: How was your first day at the new school? B: Great. Everyone ___ really friendly.': {
    why: "A asks about the first day, in the past. 'Everyone' takes a singular verb, so the past form is 'was'.",
    not: {
      were: "'Everyone' feels plural, but it takes a singular verb: 'was', not 'were'.",
      are: "'Are' is a plural form, and 'everyone' takes a singular verb. The day was also in the past.",
    },
    more: 'Words like everyone, everybody and nobody always take a singular verb.',
    tip: "Describe a first day with 'everyone' and 'was': friendly, kind, helpful.",
  },
  'A: Was the exam hard? B: Not really. The questions ___ easier than I expected.': {
    why: "The exam is over, so B uses the past. 'The questions' is plural, so the form is 'were'.",
    not: {
      was: "'Was' is for one thing. 'The questions' are more than one.",
      are: "'Are' is the present, but the exam is over. 'I expected' is past too.",
      'have been': "'Have been' links the past to now. The exam was at a finished time.",
    },
    more: "'Easier than I expected' means less difficult than I thought it would be.",
    tip: 'After an exam, compare it with what you expected: easier than, harder than.',
  },
  'A: Why is the shop closed? B: I think the owner ___ on holiday this week.': {
    why: "'This week' is now, so B uses the present. 'The owner' is one person, so the form is 'is'.",
    not: {
      are: "'Are' is for plurals. 'The owner' is one person.",
      has: "'On holiday' is a state, so it needs 'to be', not 'have'.",
      will: "'The owner will on holiday' has no 'be'. After 'will', English needs a verb.",
    },
    more: "'I think' makes the answer less certain: B is guessing.",
    tip: "Put 'I think' before an answer when not completely sure.",
  },
  'A: Do you know Mr Evans? B: Yes, he ___ my teacher two years ago.': {
    why: "'Two years ago' is a finished time, so we need the past. The subject 'he' means one person: 'was'.",
    not: {
      is: "'Is' is the present. 'Two years ago' is in the past.",
      'has been':
        "'Has been' links the past to now. 'Ago' goes with past forms, never with the present perfect.",
      were: "'Were' is for you, we and they. With 'he', use 'was'.",
    },
    more: "'Do you know...?' asks if you have met someone. The answer can then give details in the past.",
    tip: "Remember: 'ago' goes with past forms, never with the present perfect.",
  },
  'A: You look tired. B: I am. I ___ awake half the night with toothache.': {
    why: "Half the night is a time already over, so B explains with the past. With 'I', the form is 'was'.",
    not: {
      am: "'Am' describes now. 'Half the night' is already over.",
      were: "'Were' is for you, we and they. With 'I', use 'was'.",
    },
    more: "'I am.' is a short answer to 'You look tired'. Then B explains why, in the past.",
    tip: "In British English, 'toothache' often has no 'a': I have toothache. You can also say 'a toothache'.",
  },
  'A: Was the party fun? B: Yes, but the music was very loud. A: ___ your neighbours angry about the noise?':
    {
      why: "The party is over, so A asks in the past. 'Your neighbours' is plural, so the question starts with 'Were'.",
      not: {
        Was: "'Was' is for one person or thing. 'Your neighbours' are more than one.",
        Did: "'Did' makes questions with other verbs. 'Angry' is an adjective, so the question uses 'to be'.",
      },
      more: "'Angry about' is followed by the cause: angry about the noise, angry about the mess.",
      tip: "To ask how people felt, use the past of 'to be' and an adjective: angry, happy, worried.",
    },
  'A: Where are my glasses? B: They ___ on the kitchen table five minutes ago.': {
    why: "'Five minutes ago' is a finished time, so B uses the past. The glasses are plural, so the form is 'were'.",
    not: {
      are: "'Are' is the present, but 'five minutes ago' is past. B is not sure they are still there.",
      was: "'Was' is for one thing. Glasses are always plural in English.",
      'have been': "'Have been' links the past to now. With 'ago', English uses the past simple.",
    },
    more: "'Glasses' for your eyes is always plural, like jeans and scissors.",
    tip: 'When you help someone find something, say where you last saw it, in the past.',
  },
  'A: Is it your birthday today? B: No, it ___ yesterday.': {
    why: "'Yesterday' is past, so B uses the past. The subject 'it' means one thing: 'was'.",
    not: {
      is: "'Is' is the present. 'Yesterday' is in the past.",
      were: "'Were' is for you, we, they and plurals. With 'it', use 'was'.",
      'has been': "'Has been' links the past to now. 'Yesterday' is a finished time.",
    },
    more: "To say 'happy birthday' late, you can say: Happy birthday for yesterday.",
    tip: "For a date that has passed, use 'was'; for a date still to come, use 'is' or 'will be'.",
  },
  'A: How long have you lived here? B: Only a month, so I ___ still new here.': {
    why: "B is still new now, so B uses the present. With 'I', the form is 'am'.",
    not: {
      was: "'Was' is the past, but B is still new now.",
      'have been':
        "'I have been still new' puts the words in the wrong order, and B is talking about now.",
      were: "'Were' is for you, we and they, and it is a past form. With 'I', use 'am'.",
    },
    more: "'Still' means something has not changed. It comes after 'am', 'is' or 'are': I am still here.",
    tip: "New somewhere? Say 'I am new here' and ask your question. People will help.",
  },
}
