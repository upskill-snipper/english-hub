import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * The Verb To Be: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/to-be-conjugation.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'I ___ a student at the language school.': {
    why: "'I' always goes with 'am' in the present: I am a student at the language school. The label says present, and the sentence tells us a fact about now.",
    not: {
      is: "'Is' goes with he, she, it and one thing. With 'I' we use 'am'.",
      are: "'Are' goes with you, we, they and more than one thing. With 'I' we use 'am'.",
      was: "'Was' is for the past. This sentence is about now, and the label says present, so we use 'am'.",
      were: "'Were' is for the past. This sentence is about now, and the label says present, so we use 'am'.",
      'will be':
        "'Will be' is for the future. This sentence is about now, and the label says present, so we use 'am'.",
      been: "We cannot say 'I been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'am'.",
      being:
        "We cannot say 'I being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'am'.",
    },
    more: "In speaking and in messages to friends, we shorten it: I'm a student. The apostrophe takes the place of the missing letter a.",
    tip: "When you introduce yourself, say 'I am' or 'I'm'. Never say 'I is' or 'I are'.",
  },
  'She ___ my best friend from class.': {
    why: "'She' is one person, so the present form is 'is': She is my best friend. 'He', 'she' and 'it' all go with 'is'.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'she', so we use 'is'.",
      are: "'Are' goes with you, we, they and more than one thing. 'She' is one person, so we use 'is'.",
      was: "'Was' is for the past. This sentence is about now, and the label says present, so we use 'is'.",
      were: "'Were' is for the past. This sentence is about now, and the label says present, so we use 'is'.",
      'will be':
        "'Will be' is for the future. This sentence is about now, and the label says present, so we use 'is'.",
      been: "We cannot say 'She been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'is'.",
      being:
        "We cannot say 'She being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'is'.",
    },
    more: "We often shorten it when we speak: She's my best friend. The apostrophe takes the place of the letter i.",
    tip: "To say who someone is to you, use 'is': She is my friend. He is my brother. It is my book.",
  },
  'They ___ from Spain and Portugal.': {
    why: "'They' means more than one person, so the present form is 'are': They are from Spain and Portugal.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'they', so we use 'are'.",
      is: "'Is' goes with he, she, it and one thing. With 'they' we use 'are'.",
      was: "'Was' is for the past. This sentence is about now, and the label says present, so we use 'are'.",
      were: "'Were' is for the past. This sentence is about now, and the label says present, so we use 'are'.",
      'will be':
        "'Will be' is for the future. This sentence is about now, and the label says present, so we use 'are'.",
      been: "We cannot say 'They been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'are'.",
      being:
        "We cannot say 'They being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'are'.",
    },
    more: "'Are' goes with we, you, they and any plural noun: The students are late. Short forms: they're, we're, you're.",
    tip: "To say where people come from, use 'are from': They are from Spain. We are from Poland.",
  },
  'We ___ ready to begin the lesson.': {
    why: "'We' always goes with 'are' in the present: We are ready to begin the lesson.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'we', so we use 'are'.",
      is: "'Is' goes with he, she, it and one thing. With 'we' we use 'are'.",
      was: "'Was' is for the past. This sentence is about now, and the label says present, so we use 'are'.",
      were: "'Were' is for the past. This sentence is about now, and the label says present, so we use 'are'.",
      'will be':
        "'Will be' is for the future. This sentence is about now, and the label says present, so we use 'are'.",
      been: "We cannot say 'We been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'are'.",
      being:
        "We cannot say 'We being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'are'.",
    },
    more: "The verb 'to be' links a person to a description, such as ready, tired or happy. With 'we', the link is always 'are'.",
    tip: "To say you can start, use: We are ready. In speaking, you can say: We're ready.",
  },
  'He ___ a very kind teacher.': {
    why: "'He' is one person, so the present form is 'is': He is a very kind teacher.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'he', so we use 'is'.",
      are: "'Are' goes with you, we, they and more than one thing. 'He' is one person, so we use 'is'.",
      was: "'Was' is for the past. This sentence is about now, and the label says present, so we use 'is'.",
      were: "'Were' is for the past. This sentence is about now, and the label says present, so we use 'is'.",
      'will be':
        "'Will be' is for the future. This sentence is about now, and the label says present, so we use 'is'.",
      been: "We cannot say 'He been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'is'.",
      being:
        "We cannot say 'He being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'is'.",
    },
    more: "'Is' links 'he' to a description. Use 'is' with he, she, it and with one noun: The teacher is kind.",
    tip: "Use 'He is' or 'She is' to describe people, for example in a message about your teacher.",
  },
  'You ___ very good at grammar.': {
    why: "'You' always goes with 'are', for one person or for many: You are very good at grammar.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'you', so we use 'are'.",
      is: "'Is' goes with he, she, it and one thing. With 'you' we always use 'are', even for one person.",
      was: "'Was' is for the past. This sentence is about now, and the label says present, so we use 'are'.",
      were: "'Were' is for the past. This sentence is about now, and the label says present, so we use 'are'.",
      'will be':
        "'Will be' is for the future. This sentence is about now, and the label says present, so we use 'are'.",
      been: "We cannot say 'You been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'are'.",
      being:
        "We cannot say 'You being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'are'.",
    },
    more: "In English 'you' is both singular and plural, and the verb is always 'are', never 'is'. In speaking we say 'you're'.",
    tip: "To praise someone, say: You are very good at it. Or: You're very good at it.",
  },
  'The coffee ___ too hot to drink.': {
    why: "'The coffee' is one thing, so the present form is 'is': The coffee is too hot to drink.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'the coffee', so we use 'is'.",
      are: "'Are' goes with you, we, they and more than one thing. 'The coffee' is one thing, so we use 'is'.",
      was: "'Was' is for the past. This sentence is about now, and the label says present, so we use 'is'.",
      were: "'Were' is for the past. This sentence is about now, and the label says present, so we use 'is'.",
      'will be':
        "'Will be' is for the future. This sentence is about now, and the label says present, so we use 'is'.",
      been: "We cannot say 'The coffee been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'is'.",
      being:
        "We cannot say 'The coffee being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'is'.",
    },
    more: "'Too hot' means hotter than is good. 'Too hot to drink' means you cannot drink it yet.",
    tip: "Replace the subject with 'it' to check: It is too hot. If 'it' fits, use 'is'.",
  },
  'My parents ___ at work right now.': {
    why: "'My parents' means two people, so the present form is 'are'. 'Right now' also shows that the sentence is about this moment.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'my parents', so we use 'are'.",
      is: "'Is' goes with one person or thing. 'My parents' means more than one, so we use 'are'.",
      was: "'Was' is for the past. 'Right now' shows this is about now, so we use 'are'.",
      were: "'Were' is for the past. 'Right now' shows this is about now, so we use 'are'.",
      'will be':
        "'Will be' is for the future. 'Right now' shows this is about now, so we use 'are'.",
      been: "We cannot say 'My parents been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'are'.",
      being:
        "We cannot say 'My parents being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'are'.",
    },
    more: "Replace 'my parents' with 'they' to check: They are at work. If 'they' fits, use 'are'.",
    tip: "Use 'be' and 'at' to say where people are: My parents are at work. I am at school.",
  },
  'It ___ a beautiful sunny day today.': {
    why: "'It' goes with 'is' in the present. We use 'it' for the weather and the day: It is a beautiful sunny day today.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'it', so we use 'is'.",
      are: "'Are' goes with you, we, they and more than one thing. 'It' is one thing, so we use 'is'.",
      was: "'Was' is for the past. 'Today' is now, and the label says present, so we use 'is'.",
      were: "'Were' is for the past. 'Today' is now, and the label says present, so we use 'is'.",
      'will be':
        "'Will be' is for the future. 'Today' is now, and the label says present, so we use 'is'.",
      been: "We cannot say 'It been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'is'.",
      being:
        "We cannot say 'It being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'is'.",
    },
    more: "We use 'it is' for the weather, the time and the date: It is raining. It is five o'clock. It is Monday.",
    tip: "To describe the weather, start with 'It is': It is cold. It is windy. It's sunny.",
  },
  'The children ___ playing in the garden.': {
    why: "'The children' means more than one, so the present form is 'are'. Here 'are' also goes with the -ing word: are playing.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'the children', so we use 'are'.",
      is: "'Is' goes with one person or thing. 'The children' means more than one, so we use 'are'.",
      was: "'Was' is for the past. This sentence is about now, and the label says present, so we use 'are'.",
      were: "'Were' is for the past. This sentence is about now, and the label says present, so we use 'are'.",
      'will be':
        "'Will be' is for the future. This sentence is about now, and the label says present, so we use 'are'.",
      been: "We cannot say 'The children been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'are'.",
      being:
        "We cannot say 'The children being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'are'.",
    },
    more: "'Children' does not end in -s, but it is still plural. Replace it with 'they' to check: They are playing.",
    tip: "Remember that plurals without -s, such as children, people and men, take 'are': The people are happy.",
  },
  'I ___ happy to help you with English.': {
    why: "'I' always goes with 'am' in the present: I am happy to help you with English.",
    not: {
      is: "'Is' goes with he, she, it and one thing. With 'I' we use 'am'.",
      are: "'Are' goes with you, we, they and more than one thing. With 'I' we use 'am'.",
      was: "'Was' is for the past. This sentence is about now, and the label says present, so we use 'am'.",
      were: "'Were' is for the past. This sentence is about now, and the label says present, so we use 'am'.",
      'will be':
        "'Will be' is for the future. This sentence is about now, and the label says present, so we use 'am'.",
      been: "We cannot say 'I been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'am'.",
      being:
        "We cannot say 'I being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'am'.",
    },
    more: "'I am happy to ...' is a polite way to offer help. Other ways: I am glad to help. I am pleased to meet you.",
    tip: "Use 'I am happy to help' when someone asks for help. In speaking, say 'I'm happy to help'.",
  },
  'This book ___ very interesting.': {
    why: "'This book' is one thing, so the present form is 'is': This book is very interesting.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'this book', so we use 'is'.",
      are: "'Are' goes with you, we, they and more than one thing. 'This book' is one thing, so we use 'is'.",
      was: "'Was' is for the past. This sentence is about now, and the label says present, so we use 'is'.",
      were: "'Were' is for the past. This sentence is about now, and the label says present, so we use 'is'.",
      'will be':
        "'Will be' is for the future. This sentence is about now, and the label says present, so we use 'is'.",
      been: "We cannot say 'This book been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'is'.",
      being:
        "We cannot say 'This book being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'is'.",
    },
    more: "With 'this' (one thing near you) use 'is'. With 'these' (more than one) use 'are': These books are interesting.",
    tip: "Use 'is' or 'are' with 'this' and 'these' to give an opinion: This film is good. These pens are cheap.",
  },
  'We ___ in the same class this term.': {
    why: "'We' always goes with 'are' in the present. 'This term' is the school term we are in now.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'we', so we use 'are'.",
      is: "'Is' goes with he, she, it and one thing. With 'we' we use 'are'.",
      was: "'Was' is for the past. 'This term' is the term we are in now, so we use 'are'.",
      were: "'Were' is for the past. 'This term' is the term we are in now, so we use 'are'.",
      'will be':
        "'Will be' is for the future. 'This term' is the term we are in now, so we use 'are'.",
      been: "We cannot say 'We been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'are'.",
      being:
        "We cannot say 'We being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'are'.",
    },
    more: "'Are in' tells us where we belong: in the same class, in the same team, in the same group.",
    tip: 'To say you share a class or a team, use: We are in the same class. They are in my team.',
  },
  'Tom and Lucy ___ brother and sister.': {
    why: "Two people joined by 'and' are plural, so the present form is 'are': Tom and Lucy are brother and sister.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'Tom and Lucy', so we use 'are'.",
      is: "'Is' goes with one person or thing. 'Tom and Lucy' means more than one, so we use 'are'.",
      was: "'Was' is for the past. This sentence is about now, and the label says present, so we use 'are'.",
      were: "'Were' is for the past. This sentence is about now, and the label says present, so we use 'are'.",
      'will be':
        "'Will be' is for the future. This sentence is about now, and the label says present, so we use 'are'.",
      been: "We cannot say 'Tom and Lucy been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'are'.",
      being:
        "We cannot say 'Tom and Lucy being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'are'.",
    },
    more: "'Tom and Lucy' means the same as 'they'. Two names joined with 'and' take 'are'. One name takes 'is': Tom is my brother.",
    tip: "Look for 'and' in the subject. If two names are joined by 'and', use 'are'.",
  },
  'The weather ___ cold in winter.': {
    why: "'The weather' is one thing, so the present form is 'is': The weather is cold in winter. 'In winter' shows that this is always true.",
    not: {
      am: "'Am' only goes with 'I'. The subject here is 'the weather', so we use 'is'.",
      are: "'Are' goes with you, we, they and more than one thing. 'The weather' is one thing, so we use 'is'.",
      was: "'Was' is for the past. This sentence is a fact that is always true, and the label says present, so we use 'is'.",
      were: "'Were' is for the past. This sentence is a fact that is always true, and the label says present, so we use 'is'.",
      'will be':
        "'Will be' is for the future. This sentence is a fact that is always true, and the label says present, so we use 'is'.",
      been: "We cannot say 'The weather been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'is'.",
      being:
        "We cannot say 'The weather being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'is'.",
    },
    more: 'We use the present for facts that are always true: The weather is cold in winter. The sun is hot.',
    tip: "To describe a season, use 'is': Winter is cold. Summer is hot.",
  },
  'Yesterday I ___ very tired after work.': {
    why: "'Yesterday' shows the past, and 'I' goes with 'was' in the past: Yesterday I was very tired after work.",
    not: {
      am: "'Am' is for now. 'Yesterday' shows the past, so we use 'was'.",
      is: "'Is' is for now. 'Yesterday' shows the past, so we use 'was'.",
      are: "'Are' is for now. 'Yesterday' shows the past, so we use 'was'.",
      were: "'Were' goes with you, we, they and more than one thing. With 'I' we use 'was'.",
      'will be': "'Will be' is for the future. 'Yesterday' shows the past, so we use 'was'.",
      been: "We cannot say 'Yesterday I been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'was'.",
      being:
        "We cannot say 'Yesterday I being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'was'.",
    },
    more: "The past of 'am' and 'is' is 'was'. The past of 'are' is 'were'. So: I am, I was; she is, she was; they are, they were.",
    tip: "Use time words such as yesterday, last night and last week with 'was' or 'were' to talk about the past.",
  },
  'She ___ at the cinema last night.': {
    why: "'Last night' shows the past, and 'she' goes with 'was': She was at the cinema last night.",
    not: {
      am: "'Am' is for now. 'Last night' shows the past, so we use 'was'.",
      is: "'Is' is for now. 'Last night' shows the past, so we use 'was'.",
      are: "'Are' is for now. 'Last night' shows the past, so we use 'was'.",
      were: "'Were' goes with you, we, they and more than one thing. 'She' is one person, so we use 'was'.",
      'will be': "'Will be' is for the future. 'Last night' shows the past, so we use 'was'.",
      been: "We cannot say 'She been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'was'.",
      being:
        "We cannot say 'She being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'was'.",
    },
    more: "'Was' is the past of 'is' and 'am'. After 'was' we add a place or a description: She was at the cinema. She was tired.",
    tip: "To tell a short story about yesterday, begin with 'was' or 'were': I was at home. She was at the cinema.",
  },
  'They ___ on holiday in Italy last summer.': {
    why: "'Last summer' shows the past, and 'they' goes with 'were': They were on holiday in Italy last summer.",
    not: {
      am: "'Am' is for now. 'Last summer' shows the past, so we use 'were'.",
      is: "'Is' is for now. 'Last summer' shows the past, so we use 'were'.",
      are: "'Are' is for now. 'Last summer' shows the past, so we use 'were'.",
      was: "'Was' goes with I, he, she, it and one thing. With 'they' we use 'were'.",
      'will be': "'Will be' is for the future. 'Last summer' shows the past, so we use 'were'.",
      been: "We cannot say 'They been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'were'.",
      being:
        "We cannot say 'They being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'were'.",
    },
    more: "'Were' is the past of 'are'. It goes with you, we, they and plural nouns. They are on holiday now. They were on holiday last summer.",
    tip: "To talk about a past holiday, use 'was' and 'were': We were in Italy. The hotel was nice.",
  },
  'We ___ late for the bus yesterday morning.': {
    why: "'Yesterday morning' shows the past, and 'we' goes with 'were': We were late for the bus yesterday morning.",
    not: {
      am: "'Am' is for now. 'Yesterday morning' shows the past, so we use 'were'.",
      is: "'Is' is for now. 'Yesterday morning' shows the past, so we use 'were'.",
      are: "'Are' is for now. 'Yesterday morning' shows the past, so we use 'were'.",
      was: "'Was' goes with I, he, she, it and one thing. With 'we' we use 'were'.",
      'will be':
        "'Will be' is for the future. 'Yesterday morning' shows the past, so we use 'were'.",
      been: "We cannot say 'We been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'were'.",
      being:
        "We cannot say 'We being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'were'.",
    },
    more: "'Late for' a bus, a train or a lesson means you arrived after the time. In the past, use 'were' with we, you and they.",
    tip: 'To explain why you missed something, say: We were late for the bus.',
  },
  'He ___ a footballer when he was young.': {
    why: "'When he was young' shows the past, and 'he' goes with 'was': He was a footballer when he was young.",
    not: {
      am: "'Am' is for now. 'When he was young' shows the past, so we use 'was'.",
      is: "'Is' is for now. 'When he was young' shows the past, so we use 'was'.",
      are: "'Are' is for now. 'When he was young' shows the past, so we use 'was'.",
      were: "'Were' goes with you, we, they and more than one thing. 'He' is one person, so we use 'was'.",
      'will be':
        "'Will be' is for the future. 'When he was young' shows the past, so we use 'was'.",
      been: "We cannot say 'He been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'was'.",
      being:
        "We cannot say 'He being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'was'.",
    },
    more: "Both parts of the sentence use 'was'. The first part says what he was, and the second part says when.",
    tip: "To talk about someone's past job or hobby, use 'was' and a noun: My father was a driver.",
  },
  'You ___ very helpful yesterday, thank you.': {
    why: "'Yesterday' shows the past, and 'you' always goes with 'were', for one person or many: You were very helpful yesterday.",
    not: {
      am: "'Am' is for now. 'Yesterday' shows the past, so we use 'were'.",
      is: "'Is' is for now. 'Yesterday' shows the past, so we use 'were'.",
      are: "'Are' is for now. 'Yesterday' shows the past, so we use 'were'.",
      was: "'Was' goes with I, he, she, it and one thing. With 'you' we always use 'were', even for one person.",
      'will be': "'Will be' is for the future. 'Yesterday' shows the past, so we use 'were'.",
      been: "We cannot say 'You been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'were'.",
      being:
        "We cannot say 'You being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'were'.",
    },
    more: "Like 'are', the past form 'were' is used with 'you' even for one person. 'You was' is a common mistake.",
    tip: "Use 'You were very helpful' to thank someone for help they gave in the past.",
  },
  'The film we saw last night ___ really exciting.': {
    why: "'The film we saw last night' is one thing, and 'last night' shows the past. One thing in the past takes 'was': The film was really exciting.",
    not: {
      am: "'Am' is for now. 'Last night' shows the past, so we use 'was'.",
      is: "'Is' is for now. 'Last night' shows the past, so we use 'was'.",
      are: "'Are' is for now. 'Last night' shows the past, so we use 'was'.",
      were: "'Were' goes with you, we, they and more than one thing. 'The film' is one thing, so we use 'was'.",
      'will be': "'Will be' is for the future. 'Last night' shows the past, so we use 'was'.",
      been: "We cannot say 'The film we saw last night been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'was'.",
      being:
        "We cannot say 'The film we saw last night being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'was'.",
    },
    more: "Think of the subject as 'it': It was really exciting. The words 'we saw last night' only tell us which film.",
    tip: "To give your opinion about something in the past, use 'was': The film was great. The food was cold.",
  },
  'My grandparents ___ born in Wales.': {
    why: "'My grandparents' means more than one person, and being born happened in the past. So we use 'were': My grandparents were born in Wales.",
    not: {
      am: "'Am' is for now. Being born happened in the past, so we use 'were'.",
      is: "'Is' is for now. Being born happened in the past, so we use 'were'.",
      are: "'Are' is for now. Being born happened in the past, so we use 'were'.",
      was: "'Was' goes with one person or thing. 'My grandparents' means more than one, so we use 'were'.",
      'will be': "'Will be' is for the future. Being born happened in the past, so we use 'were'.",
      been: "We cannot say 'My grandparents been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'were'.",
      being:
        "We cannot say 'My grandparents being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'were'.",
    },
    more: "We always say 'was born' or 'were born': I was born in Cairo. My parents were born in Wales. We never say 'I am born'.",
    tip: 'To say where and when you were born, use: I was born in Cairo in 2012.',
  },
  'It ___ raining when we left the house.': {
    why: "'When we left the house' shows the past, and 'it' goes with 'was': It was raining. 'Was raining' tells us what was happening at that time.",
    not: {
      am: "'Am' is for now. 'When we left the house' shows the past, so we use 'was'.",
      is: "'Is' is for now. 'When we left the house' shows the past, so we use 'was'.",
      are: "'Are' is for now. 'When we left the house' shows the past, so we use 'was'.",
      were: "'Were' goes with you, we, they and more than one thing. 'It' is one thing, so we use 'was'.",
      'will be':
        "'Will be' is for the future. 'When we left the house' shows the past, so we use 'was'.",
      been: "We cannot say 'It been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'was'.",
      being:
        "We cannot say 'It being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'was'.",
    },
    more: "'Was' or 'were' and an -ing word describe something that was happening in the past: I was sleeping. They were playing.",
    tip: "To set the scene in a story, use 'was' and an -ing word: It was raining. The birds were singing.",
  },
  'Last Sunday the shops ___ closed.': {
    why: "'Last Sunday' shows the past. 'The shops' is plural, so we use 'were': Last Sunday the shops were closed.",
    not: {
      am: "'Am' is for now. 'Last Sunday' shows the past, so we use 'were'.",
      is: "'Is' is for now. 'Last Sunday' shows the past, so we use 'were'.",
      are: "'Are' is for now. 'Last Sunday' shows the past, so we use 'were'.",
      was: "'Was' goes with one person or thing. 'The shops' means more than one, so we use 'were'.",
      'will be': "'Will be' is for the future. 'Last Sunday' shows the past, so we use 'were'.",
      been: "We cannot say 'Last Sunday the shops been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'were'.",
      being:
        "We cannot say 'Last Sunday the shops being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'were'.",
    },
    more: "Replace 'the shops' with 'they': They were closed. Plural nouns take 'were' in the past, as they take 'are' in the present.",
    tip: "Use 'was' or 'were' to say what a place was like at a time: The bank was open. The shops were closed.",
  },
  'I ___ born in nineteen ninety.': {
    why: "'In nineteen ninety' shows the past, and being born happened in the past. 'I' goes with 'was': I was born in nineteen ninety.",
    not: {
      am: "'Am' is for now. 'In nineteen ninety' shows the past, so we use 'was'.",
      is: "'Is' is for now. 'In nineteen ninety' shows the past, so we use 'was'.",
      are: "'Are' is for now. 'In nineteen ninety' shows the past, so we use 'was'.",
      were: "'Were' goes with you, we, they and more than one thing. With 'I' we use 'was'.",
      'will be':
        "'Will be' is for the future. 'In nineteen ninety' shows the past, so we use 'was'.",
      been: "We cannot say 'I been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'was'.",
      being:
        "We cannot say 'I being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'was'.",
    },
    more: "We say years in two parts: nineteen ninety. For 2012 we say 'twenty twelve' or 'two thousand and twelve'.",
    tip: "Never say 'I am born in ...'. For your birth, always use the past: I was born in 2010.",
  },
  'The students ___ quiet during the test yesterday.': {
    why: "'Yesterday' shows the past. 'The students' is plural, so we use 'were': The students were quiet during the test yesterday.",
    not: {
      am: "'Am' is for now. 'Yesterday' shows the past, so we use 'were'.",
      is: "'Is' is for now. 'Yesterday' shows the past, so we use 'were'.",
      are: "'Are' is for now. 'Yesterday' shows the past, so we use 'were'.",
      was: "'Was' goes with one person or thing. 'The students' means more than one, so we use 'were'.",
      'will be': "'Will be' is for the future. 'Yesterday' shows the past, so we use 'were'.",
      been: "We cannot say 'The students been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'were'.",
      being:
        "We cannot say 'The students being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'were'.",
    },
    more: "'During' and a noun tell us when something happened: during the test, during the lesson. Use 'were' with plural nouns.",
    tip: "Replace the subject with 'they' to check: They were quiet. If 'they' fits, use 'were'.",
  },
  'Last week ___ very busy at the office.': {
    why: "'Last week' is the subject of this sentence. It is one period of time in the past, so we use 'was': Last week was very busy at the office.",
    not: {
      am: "'Am' is for now. 'Last week' shows the past, so we use 'was'.",
      is: "'Is' is for now. 'Last week' shows the past, so we use 'was'.",
      are: "'Are' is for now. 'Last week' shows the past, so we use 'was'.",
      were: "'Were' goes with you, we, they and more than one thing. 'Last week' is one period of time, so we use 'was'.",
      'will be': "'Will be' is for the future. 'Last week' shows the past, so we use 'was'.",
      been: "We cannot say 'Last week been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'was'.",
      being:
        "We cannot say 'Last week being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'was'.",
    },
    more: 'Time words can be the subject of a sentence: Yesterday was Monday. Last year was difficult.',
    tip: "To describe a period of time, use 'was': Last month was cold. This morning was quiet.",
  },
  'I ___ at home soon.': {
    why: "'Soon' looks ahead to the future, so we use 'will be': I will be at home soon. 'Will be' is the same for every subject.",
    not: {
      am: "'Am' is a present form. 'Soon' looks ahead to the future, and the label says future, so we use 'will be'.",
      is: "'Is' is a present form. 'Soon' looks ahead to the future, and the label says future, so we use 'will be'.",
      are: "'Are' is a present form. 'Soon' looks ahead to the future, and the label says future, so we use 'will be'.",
      was: "'Was' is for the past. 'Soon' looks ahead to the future, and the label says future, so we use 'will be'.",
      were: "'Were' is for the past. 'Soon' looks ahead to the future, and the label says future, so we use 'will be'.",
      been: "We cannot say 'I been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'will be'.",
      being:
        "We cannot say 'I being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'will be'.",
    },
    more: "'Will' does not change with I, you, he, she, it, we or they. In speaking we shorten it: I'll be at home soon.",
    tip: "To tell someone when you arrive, use 'will be' and a time: I will be home soon.",
  },
  'She ___ ready in five minutes.': {
    why: "'In five minutes' means five minutes from now, so it is the future: She will be ready in five minutes.",
    not: {
      am: "'Am' is a present form. 'In five minutes' looks ahead to the future, and the label says future, so we use 'will be'.",
      is: "'Is' is a present form. 'In five minutes' looks ahead to the future, and the label says future, so we use 'will be'.",
      are: "'Are' is a present form. 'In five minutes' looks ahead to the future, and the label says future, so we use 'will be'.",
      was: "'Was' is for the past. 'In five minutes' looks ahead to the future, and the label says future, so we use 'will be'.",
      were: "'Were' is for the past. 'In five minutes' looks ahead to the future, and the label says future, so we use 'will be'.",
      been: "We cannot say 'She been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'will be'.",
      being:
        "We cannot say 'She being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'will be'.",
    },
    more: "'In' and a time (in five minutes, in two days, in a week) means 'from now'. It is a clue for the future.",
    tip: "To say how long to wait, use 'will be' and 'in': Dinner will be ready in ten minutes.",
  },
  'They ___ here in about an hour.': {
    why: "'In about an hour' means about one hour from now, so it is the future: They will be here in about an hour.",
    not: {
      am: "'Am' is a present form. 'In about an hour' looks ahead to the future, and the label says future, so we use 'will be'.",
      is: "'Is' is a present form. 'In about an hour' looks ahead to the future, and the label says future, so we use 'will be'.",
      are: "'Are' is a present form. 'In about an hour' looks ahead to the future, and the label says future, so we use 'will be'.",
      was: "'Was' is for the past. 'In about an hour' looks ahead to the future, and the label says future, so we use 'will be'.",
      were: "'Were' is for the past. 'In about an hour' looks ahead to the future, and the label says future, so we use 'will be'.",
      been: "We cannot say 'They been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'will be'.",
      being:
        "We cannot say 'They being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'will be'.",
    },
    more: "'About' means 'not exactly'. With 'in about', we give an estimate: in about ten minutes, in about a week.",
    tip: "When you wait for someone, you can say: They will be here soon. They'll be here in about an hour.",
  },
  'This time next week we ___ on holiday.': {
    why: "'This time next week' looks ahead to the future, so we use 'will be': This time next week we will be on holiday.",
    not: {
      am: "'Am' is a present form. 'This time next week' looks ahead to the future, and the label says future, so we use 'will be'.",
      is: "'Is' is a present form. 'This time next week' looks ahead to the future, and the label says future, so we use 'will be'.",
      are: "'Are' is a present form. 'This time next week' looks ahead to the future, and the label says future, so we use 'will be'.",
      was: "'Was' is for the past. 'This time next week' looks ahead to the future, and the label says future, so we use 'will be'.",
      were: "'Were' is for the past. 'This time next week' looks ahead to the future, and the label says future, so we use 'will be'.",
      been: "We cannot say 'This time next week we been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'will be'.",
      being:
        "We cannot say 'This time next week we being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'will be'.",
    },
    more: 'The phrase means one week from now, at this same time. Similar phrases: this time tomorrow, this time next year.',
    tip: "Use 'This time next week ...' to talk about your plans: This time next week I will be on the beach.",
  },
  'It ___ sunny at the weekend, I hope.': {
    why: "'I hope' shows that the weekend has not come yet, so we use 'will be': It will be sunny at the weekend, I hope. We use 'will be' for hopes and guesses about the future.",
    not: {
      am: "'Am' is a present form. 'At the weekend, I hope' looks ahead to the future, and the label says future, so we use 'will be'.",
      is: "'Is' is a present form. 'At the weekend, I hope' looks ahead to the future, and the label says future, so we use 'will be'.",
      are: "'Are' is a present form. 'At the weekend, I hope' looks ahead to the future, and the label says future, so we use 'will be'.",
      was: "'Was' is for the past. 'At the weekend, I hope' looks ahead to the future, and the label says future, so we use 'will be'.",
      were: "'Were' is for the past. 'At the weekend, I hope' looks ahead to the future, and the label says future, so we use 'will be'.",
      been: "We cannot say 'It been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'will be'.",
      being:
        "We cannot say 'It being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'will be'.",
    },
    more: "We use 'will be' to say what we think or hope. Words such as 'I think', 'I hope' and 'probably' often go with it.",
    tip: "For the weather forecast, use 'will be': It will be sunny tomorrow. It will be cold tonight.",
  },
  'You ___ fine after a good rest.': {
    why: 'These are kind words to someone who is tired or ill. The rest has not happened yet, so we say what will happen: You will be fine after a good rest.',
    not: {
      am: "'Am' is a present form. The rest has not happened yet, and the label says future, so we use 'will be'.",
      is: "'Is' is a present form. The rest has not happened yet, and the label says future, so we use 'will be'.",
      are: "'Are' is a present form. The rest has not happened yet, and the label says future, so we use 'will be'.",
      was: "'Was' is for the past. The rest has not happened yet, and the label says future, so we use 'will be'.",
      were: "'Were' is for the past. The rest has not happened yet, and the label says future, so we use 'will be'.",
      been: "We cannot say 'You been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'will be'.",
      being:
        "We cannot say 'You being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'will be'.",
    },
    more: "We use 'will be fine' to comfort someone. Similar phrases: It will be OK. Everything will be all right.",
    tip: "To comfort a friend, say: Don't worry, you'll be fine. 'You'll' is the short form of 'you will'.",
  },
  'The exam ___ over in two hours.': {
    why: "'In two hours' means two hours from now, so it is the future: The exam will be over in two hours.",
    not: {
      am: "'Am' is a present form. 'In two hours' looks ahead to the future, and the label says future, so we use 'will be'.",
      is: "'Is' is a present form. 'In two hours' looks ahead to the future, and the label says future, so we use 'will be'.",
      are: "'Are' is a present form. 'In two hours' looks ahead to the future, and the label says future, so we use 'will be'.",
      was: "'Was' is for the past. 'In two hours' looks ahead to the future, and the label says future, so we use 'will be'.",
      were: "'Were' is for the past. 'In two hours' looks ahead to the future, and the label says future, so we use 'will be'.",
      been: "We cannot say 'The exam been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'will be'.",
      being:
        "We cannot say 'The exam being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'will be'.",
    },
    more: "'Over' here means 'finished'. We can say the exam is over, the lesson is over, the film is over. For the future, add 'will be'.",
    tip: "Use 'will be over' to say when something finishes: The match will be over soon.",
  },
  'He ___ taller than his father one day.': {
    why: "'One day' here means some time in the future. We are guessing what will happen, so we use 'will be': He will be taller than his father one day.",
    not: {
      am: "'Am' is a present form. 'One day' looks ahead to the future, and the label says future, so we use 'will be'.",
      is: "'Is' is a present form. 'One day' looks ahead to the future, and the label says future, so we use 'will be'.",
      are: "'Are' is a present form. 'One day' looks ahead to the future, and the label says future, so we use 'will be'.",
      was: "'Was' is for the past. 'One day' looks ahead to the future, and the label says future, so we use 'will be'.",
      were: "'Were' is for the past. 'One day' looks ahead to the future, and the label says future, so we use 'will be'.",
      been: "We cannot say 'He been' here. 'Been' needs 'have', 'has' or 'had' before it, as in 'I have been'. Here we use 'will be'.",
      being:
        "We cannot say 'He being' here. 'Being' needs 'am', 'is' or 'are' before it, as in 'You are being kind'. Here we use 'will be'.",
    },
    more: "We use 'will be' for guesses about the future: You will be tall. It will be cold tomorrow. For a fixed date, such as a birthday, English often uses the present: He is twelve next month.",
    tip: "To talk about someone's future, use 'will be' and 'one day': She will be a doctor one day.",
  },
  'I have ___ to London many times.': {
    why: "After 'have' we use 'been': I have been to London many times. 'Have been to' tells us that you went there and came back.",
    not: {
      am: "We cannot say 'I have am'. After 'have', the verb 'be' becomes 'been'.",
      is: "We cannot say 'I have is'. After 'have', the verb 'be' becomes 'been'.",
      are: "We cannot say 'I have are'. After 'have', the verb 'be' becomes 'been'.",
      was: "'Was' is a simple past form. We cannot say 'I have was'. After 'have' we use 'been'.",
      were: "'Were' is a simple past form. We cannot say 'I have were'. After 'have' we use 'been'.",
      'will be':
        "'Will be' is for the future. We cannot say 'I have will be'. After 'have' we use 'been'.",
      being:
        "'Being' goes after 'am', 'is' or 'are', as in 'is being'. After 'have' we use 'been'.",
    },
    more: "Compare 'been' and 'gone'. 'She has been to London' means she went and came back. 'She has gone to London' means she is there now, or on her way.",
    tip: "Use 'have been to' to talk about your travels: I have been to Paris twice. I have never been to Japan.",
  },
  'She has ___ a teacher for ten years.': {
    why: "After 'has' we use 'been': She has been a teacher for ten years. 'For ten years' shows that she is still a teacher now.",
    not: {
      am: "We cannot say 'She has am'. After 'has', the verb 'be' becomes 'been'.",
      is: "We cannot say 'She has is'. After 'has', the verb 'be' becomes 'been'.",
      are: "We cannot say 'She has are'. After 'has', the verb 'be' becomes 'been'.",
      was: "'Was' is a simple past form. We cannot say 'She has was'. After 'has' we use 'been'.",
      were: "'Were' is a simple past form. We cannot say 'She has were'. After 'has' we use 'been'.",
      'will be':
        "'Will be' is for the future. We cannot say 'She has will be'. After 'has' we use 'been'.",
      being: "'Being' goes after 'am', 'is' or 'are', as in 'is being'. After 'has' we use 'been'.",
    },
    more: "'Has been' and 'have been' show something that started in the past and goes on now. Use 'for' and a length of time: for ten years, for two weeks.",
    tip: "To say how long you have done something, use 'have been' and 'for': I have been here for two years.",
  },
  'They have ___ very busy this week.': {
    why: "After 'have' we use 'been': They have been very busy this week. 'This week' is a time that is not finished yet.",
    not: {
      am: "We cannot say 'They have am'. After 'have', the verb 'be' becomes 'been'.",
      is: "We cannot say 'They have is'. After 'have', the verb 'be' becomes 'been'.",
      are: "We cannot say 'They have are'. After 'have', the verb 'be' becomes 'been'.",
      was: "'Was' is a simple past form. We cannot say 'They have was'. After 'have' we use 'been'.",
      were: "'Were' is a simple past form. We cannot say 'They have were'. After 'have' we use 'been'.",
      'will be':
        "'Will be' is for the future. We cannot say 'They have will be'. After 'have' we use 'been'.",
      being:
        "'Being' goes after 'am', 'is' or 'are', as in 'is being'. After 'have' we use 'been'.",
    },
    more: "'Have been' links the past to now. The busy time started earlier this week and may go on. Use it with 'this week', 'today' and 'this month'.",
    tip: "Ask 'How have you been?' to greet a friend you have not seen for a while.",
  },
  'Have you ever ___ to Scotland?': {
    why: "In a question with 'have you ever', we use 'been': Have you ever been to Scotland? 'Ever' means 'at any time in your life'.",
    not: {
      am: "We cannot say 'Have you ever am'. After 'have', the verb 'be' becomes 'been'.",
      is: "We cannot say 'Have you ever is'. After 'have', the verb 'be' becomes 'been'.",
      are: "We cannot say 'Have you ever are'. After 'have', the verb 'be' becomes 'been'.",
      was: "'Was' is a simple past form. We cannot say 'Have you ever was'. After 'have' we use 'been'.",
      were: "'Were' is a simple past form. We cannot say 'Have you ever were'. After 'have' we use 'been'.",
      'will be':
        "'Will be' is for the future. We cannot say 'Have you ever will be'. After 'have' we use 'been'.",
      being:
        "'Being' goes after 'am', 'is' or 'are', as in 'is being'. After 'have' we use 'been'.",
    },
    more: "Short answers: Yes, I have. No, I haven't. A longer answer: No, I have never been there. We say 'never been', not 'never be'.",
    tip: "Use 'Have you ever been to ...?' to start a conversation about travel.",
  },
  'The dog is ___ very noisy today.': {
    why: "After 'is' we use 'being' to talk about how something behaves now: The dog is being very noisy today. It describes today only, not how the dog always is.",
    not: {
      am: "We cannot say 'The dog is am'. The sentence already has 'is', so we add 'being' to talk about behaviour now.",
      is: "We cannot say 'The dog is is'. The sentence already has 'is', so we add 'being' to talk about behaviour now.",
      are: "We cannot say 'The dog is are'. The sentence already has 'is', so we add 'being' to talk about behaviour now.",
      was: "We cannot say 'The dog is was'. It mixes the present and the past. After 'is' we use 'being'.",
      were: "We cannot say 'The dog is were'. It mixes the present and the past. After 'is' we use 'being'.",
      'will be':
        "We cannot say 'The dog is will be'. It mixes the present and the future. After 'is' we use 'being'.",
      been: "'Been' goes after 'have', 'has' or 'had'. After 'is' we use 'being', not 'been'.",
    },
    more: "Compare: The dog is noisy (it is always noisy) and The dog is being noisy (today, for now). 'Being' shows behaviour that lasts only a short time.",
    tip: "Use 'is being' or 'are being' to talk about behaviour now: You are being kind. He is being silly.",
  },
  'Why are you ___ so unkind to him?': {
    why: "After 'are' we use 'being' to talk about behaviour now: Why are you being so unkind to him? We are asking about the way you are acting at this moment.",
    not: {
      am: "We cannot say 'Why are you am'. The sentence already has 'are', so we add 'being' to talk about behaviour now.",
      is: "We cannot say 'Why are you is'. The sentence already has 'are', so we add 'being' to talk about behaviour now.",
      are: "We cannot say 'Why are you are'. The sentence already has 'are', so we add 'being' to talk about behaviour now.",
      was: "We cannot say 'Why are you was'. It mixes the present and the past. After 'are' we use 'being'.",
      were: "We cannot say 'Why are you were'. It mixes the present and the past. After 'are' we use 'being'.",
      'will be':
        "We cannot say 'Why are you will be'. It mixes the present and the future. After 'are' we use 'being'.",
      been: "'Been' goes after 'have', 'has' or 'had'. After 'are' we use 'being', not 'been'.",
    },
    more: "'Being' and a describing word are about behaviour. Compare: You are unkind (you are always like this) and You are being unkind (what you do now).",
    tip: "Use 'Why are you being ...?' to ask about someone's behaviour: Why are you being so quiet?",
  },
  'You are ___ very patient with the class.': {
    why: "After 'are' we use 'being' to describe how someone behaves now: You are being very patient with the class. This praises how you act at this moment.",
    not: {
      am: "We cannot say 'You are am'. The sentence already has 'are', so we add 'being' to talk about behaviour now.",
      is: "We cannot say 'You are is'. The sentence already has 'are', so we add 'being' to talk about behaviour now.",
      are: "We cannot say 'You are are'. The sentence already has 'are', so we add 'being' to talk about behaviour now.",
      was: "We cannot say 'You are was'. It mixes the present and the past. After 'are' we use 'being'.",
      were: "We cannot say 'You are were'. It mixes the present and the past. After 'are' we use 'being'.",
      'will be':
        "We cannot say 'You are will be'. It mixes the present and the future. After 'are' we use 'being'.",
      been: "'Been' goes after 'have', 'has' or 'had'. After 'are' we use 'being', not 'been'.",
    },
    more: "We can use 'being' with good and bad behaviour: kind, silly, rude, helpful, patient. It tells us what a person is doing now.",
    tip: 'To praise someone, say: You are being very helpful. You are being so patient.',
  },
  'He had ___ ill for a week before the trip.': {
    why: "After 'had' we use 'been': He had been ill for a week before the trip. 'Had been' shows something that began earlier in the past.",
    not: {
      am: "We cannot say 'He had am'. After 'had', the verb 'be' becomes 'been'.",
      is: "We cannot say 'He had is'. After 'had', the verb 'be' becomes 'been'.",
      are: "We cannot say 'He had are'. After 'had', the verb 'be' becomes 'been'.",
      was: "'Was' is a simple past form. We cannot say 'He had was'. After 'had' we use 'been'.",
      were: "'Were' is a simple past form. We cannot say 'He had were'. After 'had' we use 'been'.",
      'will be':
        "'Will be' is for the future. We cannot say 'He had will be'. After 'had' we use 'been'.",
      being: "'Being' goes after 'am', 'is' or 'are', as in 'is being'. After 'had' we use 'been'.",
    },
    more: "'Had been' talks about something before another time in the past. First he was ill, and then the trip came. Use 'had been' for the earlier event.",
    tip: "Use 'had been' to explain why something happened: He had been ill, so he did not go.",
  },
  '___ a teacher, not a student. (I am)': {
    why: "The short form of 'I am' is I'm. The apostrophe takes the place of the missing letter a. The gap also needs the word 'I', so the answer is I'm.",
    not: {
      am: "The gap needs the word 'I' as well, and 'am' alone leaves it out. The short form puts them together: I'm.",
      is: "'Is' goes with he, she and it. The bracket says (I am), and the gap needs 'I' too, so the answer is I'm.",
      are: "'Are' goes with you, we and they. The bracket says (I am), and the gap needs 'I' too, so the answer is I'm.",
      was: "'Was' is a past form. The bracket says (I am), which is about now, and the gap needs 'I' too: I'm.",
      were: "'Were' is a past form for you, we and they. The bracket says (I am), and the gap needs 'I' too: I'm.",
      'will be':
        "'Will be' is for the future. The bracket says (I am), which is about now, and the gap needs 'I' too: I'm.",
    },
    more: "Short forms are common in speaking and informal writing. Other examples: you're, he's, she's, it's, we're, they're.",
    tip: 'Use short forms when you speak and in messages to friends. In formal writing, use the full form: I am.',
  },
  'She ___ very tall. (she is not)': {
    why: "The short form of 'is not' is isn't. The apostrophe takes the place of the letter o in 'not'. So: She isn't very tall.",
    not: {
      am: "'Am' goes only with 'I'. The bracket says (she is not), and the short form of 'is not' is isn't.",
      is: "'Is' says that she is tall, but the bracket says (she is not). The short form of 'is not' is isn't.",
      are: "'Are' goes with you, we and they, not with 'she'. The bracket says (she is not), so we need isn't.",
      was: "'Was' is the past, and it does not say 'not'. The bracket says (she is not), so we need isn't.",
      were: "'Were' is a past form for you, we and they. The bracket says (she is not), so we need isn't.",
      'will be':
        "'Will be' is for the future, and it does not say 'not'. The bracket says (she is not): isn't.",
    },
    more: "In a short negative, 'not' joins the verb: isn't (is not), aren't (are not), wasn't (was not), weren't (were not). For 'I', we say 'I'm not'.",
    tip: "You can say 'She isn't tall' or 'She's not tall'. Both are correct and mean the same.",
  },
  'We ___ ready yet. (we are not)': {
    why: "The short form of 'are not' is aren't. The apostrophe takes the place of the letter o in 'not'. So: We aren't ready yet.",
    not: {
      am: "'Am' goes only with 'I'. The bracket says (we are not), and the short form of 'are not' is aren't.",
      is: "'Is' goes with he, she and it, not with 'we'. The bracket says (we are not), so we need aren't.",
      are: "'Are' fits 'we', but it does not say 'not'. The bracket says (we are not), so we need the short form aren't.",
      was: "'Was' is the past, and it does not say 'not'. The bracket says (we are not), so we need aren't.",
      were: "'Were' is the past, and it does not say 'not'. The bracket says (we are not), so we need aren't.",
      'will be':
        "'Will be' is for the future, and it does not say 'not'. The bracket says (we are not): aren't.",
    },
    more: "'Yet' is often used in negative sentences and questions: We aren't ready yet. Are you ready yet? It means 'up to now'.",
    tip: "You can also say 'We're not ready yet'. Both are correct.",
  },
  'He ___ at school yesterday. (he was not)': {
    why: "The short form of 'was not' is wasn't. The apostrophe takes the place of the letter o in 'not'. So: He wasn't at school yesterday.",
    not: {
      am: "'Am' goes only with 'I', and it is a present form. The bracket says (he was not), so we need wasn't.",
      is: "'Is' is a present form. 'Yesterday' and the bracket (he was not) ask for the past negative: wasn't.",
      are: "'Are' is a present form, and it does not go with 'he'. The bracket says (he was not): wasn't.",
      was: "'Was' fits 'he' in the past, but it does not say 'not'. The bracket says (he was not), so we need wasn't.",
      were: "'Were' goes with you, we and they, not with 'he', and it does not say 'not'. We need wasn't.",
      'will be':
        "'Will be' is for the future. 'Yesterday' shows the past, and the bracket says (he was not): wasn't.",
    },
    more: "The past short forms are wasn't (was not) and weren't (were not). Use wasn't with I, he, she and it. Use weren't with you, we and they.",
    tip: "To explain an absence, say: He wasn't at school yesterday because he was ill.",
  },
  'They ___ at home last night. (they were not)': {
    why: "The short form of 'were not' is weren't. The apostrophe takes the place of the letter o in 'not'. So: They weren't at home last night.",
    not: {
      am: "'Am' goes only with 'I', and it is a present form. The bracket says (they were not), so we need weren't.",
      is: "'Is' goes with he, she and it, and it is a present form. The bracket says (they were not): weren't.",
      are: "'Are' is a present form. 'Last night' and the bracket (they were not) ask for the past negative: weren't.",
      was: "'Was' goes with I, he, she and it, not with 'they', and it does not say 'not'. We need weren't.",
      were: "'Were' fits 'they' in the past, but it does not say 'not'. The bracket says (they were not), so we need weren't.",
      'will be':
        "'Will be' is for the future. 'Last night' shows the past, and the bracket says (they were not): weren't.",
    },
    more: "'Weren't' goes with you, we, they and plural nouns: The shops weren't open.",
    tip: "Use 'weren't' to say where people were not: We weren't at the party.",
  },
  "You ___ late, don't worry. (you are not)": {
    why: "The short form of 'are not' is aren't. The apostrophe takes the place of the letter o in 'not'. So: You aren't late, don't worry.",
    not: {
      am: "'Am' goes only with 'I'. The bracket says (you are not), and the short form of 'are not' is aren't.",
      is: "'Is' goes with he, she and it, not with 'you'. The bracket says (you are not), so we need aren't.",
      are: "'Are' fits 'you', but it does not say 'not'. 'You are late' would mean the opposite. We need aren't.",
      was: "'Was' is the past, and it does not say 'not'. The bracket says (you are not), so we need aren't.",
      were: "'Were' is the past, and it does not say 'not'. The bracket says (you are not), so we need aren't.",
      'will be':
        "'Will be' is for the future, and it does not say 'not'. The bracket says (you are not): aren't.",
    },
    more: "'Don't' in the same sentence is also a short form (do not). 'Don't worry' is a kind way to calm someone who feels bad.",
    tip: "To comfort someone who thinks they are late, say: You aren't late. Or: You're not late.",
  },
  'It ___ very cold today. (it is not)': {
    why: "The short form of 'is not' is isn't. The apostrophe takes the place of the letter o in 'not'. So: It isn't very cold today.",
    not: {
      am: "'Am' goes only with 'I'. The bracket says (it is not), and the short form of 'is not' is isn't.",
      is: "'Is' fits 'it', but it does not say 'not'. 'It is very cold' would mean the opposite. We need isn't.",
      are: "'Are' goes with you, we and they, not with 'it'. The bracket says (it is not), so we need isn't.",
      was: "'Was' is the past, and it does not say 'not'. 'Today' and the bracket (it is not) ask for isn't.",
      were: "'Were' is a past form for you, we and they, and it does not say 'not'. We need isn't.",
      'will be':
        "'Will be' is for the future, and it does not say 'not'. 'Today' is now, so we need isn't.",
    },
    more: "'Isn't' goes with he, she, it and one thing: The water isn't hot.",
    tip: "To talk about the weather, you can say 'It isn't cold' or 'It's not cold'.",
  },
  '___ going to the party tonight. (We are)': {
    why: "The short form of 'we are' is we're. The apostrophe takes the place of the letter a. The gap also needs the word 'We', so the answer is We're.",
    not: {
      am: "The gap needs the word 'We' as well, and 'am' goes only with 'I'. The short form joins 'we' and 'are': We're.",
      is: "'Is' goes with he, she and it. The bracket says (We are), and the gap needs 'We' too, so the answer is We're.",
      are: "'Are' is the right verb, but the gap also needs the word 'We'. The short form joins them: We're.",
      was: "'Was' is a past form. The bracket says (We are), which is about now, and the gap needs 'We' too: We're.",
      were: "'Were' is a past form. The bracket says (We are), which is about now, and the gap needs 'We' too: We're.",
      'will be':
        "'Will be' is for the future. The bracket says (We are), which is about now, and the gap needs 'We' too: We're.",
    },
    more: "Be careful: 'we're' (we are) has an apostrophe, but 'were' (the past of 'are') has none. They sound similar but they are different words.",
    tip: "In messages to friends, write 'We're going ...'. Check: can you say 'we are' in its place? Then use 'we're'.",
  },
  '___ a good friend of mine. (He is)': {
    why: "The short form of 'he is' is he's. The apostrophe takes the place of the letter i. The gap also needs the word 'He', so the answer is He's.",
    not: {
      am: "The gap needs the word 'He' as well, and 'am' goes only with 'I'. The short form joins 'he' and 'is': He's.",
      is: "'Is' is the right verb, but the gap also needs the word 'He'. The short form joins them: He's.",
      are: "'Are' goes with you, we and they, and the gap needs 'He' too. The bracket says (He is), so the answer is He's.",
      was: "'Was' is a past form. The bracket says (He is), which is about now, and the gap needs 'He' too: He's.",
      were: "'Were' is a past form for you, we and they. The bracket says (He is), and the gap needs 'He' too: He's.",
      'will be':
        "'Will be' is for the future. The bracket says (He is), which is about now, and the gap needs 'He' too: He's.",
    },
    more: "Be careful: 's can also show that something belongs to someone, as in 'Tom's book'. Read the whole sentence to see which meaning it has.",
    tip: "Use 'He's' when you speak or write informally. In formal writing, use 'He is'.",
  },
  '___ from a small village. (They are)': {
    why: "The short form of 'they are' is they're. The apostrophe takes the place of the letter a. The gap also needs the word 'They', so the answer is They're.",
    not: {
      am: "The gap needs the word 'They' as well, and 'am' goes only with 'I'. The short form joins 'they' and 'are': They're.",
      is: "'Is' goes with he, she and it. The bracket says (They are), and the gap needs 'They' too, so the answer is They're.",
      are: "'Are' is the right verb, but the gap also needs the word 'They'. The short form joins them: They're.",
      was: "'Was' is a past form. The bracket says (They are), which is about now, and the gap needs 'They' too: They're.",
      were: "'Were' is a past form. The bracket says (They are), which is about now, and the gap needs 'They' too: They're.",
      'will be':
        "'Will be' is for the future. The bracket says (They are), which is about now, and the gap needs 'They' too: They're.",
    },
    more: "Three words sound the same: they're (they are), their (it belongs to them) and there (a place). Only 'they're' has an apostrophe before the letter r.",
    tip: "When you write 'they're', check: can you say 'they are' in its place? If yes, the spelling is right.",
  },
}
