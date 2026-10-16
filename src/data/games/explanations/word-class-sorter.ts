import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Word Class Sorter: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/word-class-sorter.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'The fox slipped quietly past the sleeping hounds.': {
    why: "'Fox' names an animal and is the one doing the slipping, so it is a noun. It follows 'The', which introduces a noun.",
    not: {
      Verb: "A verb is a doing or being word. 'Slipped' is the verb here. 'Fox' is the animal doing the action, not the action itself.",
      Adjective:
        "An adjective describes a noun, as 'sleeping' describes 'hounds'. 'Fox' describes nothing here; it names the animal.",
      Adverb:
        "An adverb tells you how, when or where something happens, as 'quietly' does. 'Fox' does not say how anything happened.",
      Pronoun:
        "A pronoun stands in for a noun, such as 'it' or 'he'. 'Fox' is the noun itself, not a stand-in for one.",
      Preposition:
        "A preposition links a noun to the rest of the sentence, as 'past' does. 'Fox' links nothing.",
      Conjunction:
        "A conjunction joins words or clauses, like 'and' or 'but'. 'Fox' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'The' in 'The fox'. 'Fox' is the noun that 'The' introduces.",
    },
    more: "Noun test: can you put 'the' or 'a' in front of it, or make it plural? 'The fox' and 'foxes' both work. Nouns can be the subject, as here, or the object of a verb.",
    tip: "A precise noun paints a sharper picture than a general one. 'Fox' beats 'animal' in descriptive writing.",
  },
  'They watched the ship slowly sink beneath the waves.': {
    why: "'Sink' is what the ship does, an action, so it is a verb. It can change tense: 'sank', 'has sunk'.",
    not: {
      Noun: "A noun names a thing, like the kitchen 'sink'. Here 'sink' does not name an object; it tells what the ship does.",
      Adjective:
        "An adjective describes a noun. 'Sink' does not describe the ship; it says what the ship does.",
      Adverb:
        "An adverb tells you how something happens, as 'slowly' does. 'Sink' is the action that 'slowly' describes.",
      Pronoun: "A pronoun stands in for a noun, such as 'They'. 'Sink' stands in for nothing.",
      Preposition:
        "A preposition links a noun to the sentence, as 'beneath' links 'the waves'. 'Sink' links nothing; it is an action.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Sink' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the waves'. 'Sink' is not introducing a noun.",
    },
    more: "Verb test: change the tense in a sentence of its own: 'The ship sinks', 'The ship sank', 'The ship will sink'. A noun cannot do that. The same spelling is a noun in 'the kitchen sink', so always check the job a word does.",
    tip: "When a word could be two classes, test it in your sentence. Can it change tense, or can you put 'the' in front of it?",
  },
  'A rusty old gate creaked in the bitter wind.': {
    why: "'Rusty' describes the gate, telling us what it looks like, so it is an adjective. It sits before the noun it describes.",
    not: {
      Noun: "A noun names a thing. 'Gate' is the noun here and 'rusty' describes it. Rust is a noun, but 'rusty' is not.",
      Verb: "A verb is a doing word, like 'creaked'. 'Rusty' does nothing; it says what the gate looked like.",
      Adverb:
        "An adverb says how an action happens. 'Rusty' describes the gate itself, not how it creaked.",
      Pronoun:
        "A pronoun stands in for a noun, such as 'it'. 'Rusty' replaces nothing; it adds detail about the gate.",
      Preposition:
        "A preposition, like 'in' in 'in the bitter wind', links a noun to the sentence. 'Rusty' does not.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Rusty' joins nothing.",
      Determiner:
        "A determiner, like 'A', introduces the noun. 'Rusty' says what the gate is like, not which or how many.",
    },
    more: "Adjective test: can it follow 'is' or 'was'? 'The gate was rusty' works. Adjectives answer the question 'what kind' and can stack up before a noun: 'rusty old gate'.",
    tip: "Choose adjectives that make the reader see something. 'Rusty' shows decay; 'old' alone only tells.",
  },
  'She answered the question remarkably calmly.': {
    why: "'Calmly' tells us how she answered, so it is an adverb. It gives more information about the verb 'answered' and ends in -ly.",
    not: {
      Noun: "A noun names a person, place or thing. 'Calmly' names nothing; it describes the way she answered.",
      Verb: "A verb is a doing word, like 'answered'. 'Calmly' is not the action; it describes the action.",
      Adjective:
        "An adjective describes a noun, like 'calm' in 'a calm voice'. 'Calmly' describes the verb 'answered', not a noun.",
      Pronoun: "A pronoun stands in for a noun, such as 'She'. 'Calmly' stands in for no one.",
      Preposition:
        "A preposition links a noun to the sentence, like 'in' or 'on'. 'Calmly' has no noun after it to link.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Calmly' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the'. 'Calmly' does not introduce a noun.",
    },
    more: "'Remarkably' is an adverb too: it describes 'calmly', not the verb. Adverbs can describe verbs, adjectives and other adverbs. Adding -ly to an adjective often makes one, but not always.",
    tip: "Use an adverb when it adds something. 'Answered calmly' shows her mood in one word.",
  },
  'Nobody believed the strange story he told.': {
    why: "'Nobody' means 'no person' and is the subject of 'believed'. A word that takes the place of a noun is a pronoun.",
    not: {
      Noun: "A noun names a person, place or thing, like 'story'. 'Nobody' does not name anyone; it means 'no person'.",
      Verb: "A verb is a doing or being word, like 'believed'. 'Nobody' is the subject of 'believed', not the action.",
      Adjective:
        "An adjective describes a noun, like 'strange' in 'strange story'. 'Nobody' describes nothing.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Nobody' answers the question who, not how.",
      Preposition:
        "A preposition links a noun to the sentence, like 'in' or 'on'. 'Nobody' links nothing.",
      Conjunction: "A conjunction joins words or clauses, like 'but'. 'Nobody' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the' before 'story'. 'Nobody' stands alone as the subject; no noun follows it.",
    },
    more: "Indefinite pronouns point to people or things without naming them: nobody, everyone, someone, anything. Those ending in -body, -one or -thing take a singular verb: 'Nobody believes', not 'Nobody believe'.",
    tip: "Check your verb after nobody, everyone and someone. Each takes the singular form: 'Nobody knows', 'Everyone is'.",
  },
  'The cat hid underneath the wooden bench.': {
    why: "'Underneath' shows where the cat hid, in relation to the bench, and 'the wooden bench' follows it. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Noun: "A noun names a person, place or thing. 'Underneath' names nothing here; it shows where the cat was.",
      Verb: "A verb is a doing word, like 'hid'. 'Underneath' is not an action; it shows where the action happened.",
      Adjective:
        "An adjective describes a noun, like 'wooden'. 'Underneath' does not describe the bench; it shows where the cat hid.",
      Adverb:
        "On its own, 'underneath' can be an adverb ('the cat hid underneath'). Here 'the wooden bench' follows it, which makes it a preposition.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Underneath' stands in for nothing.",
      Conjunction:
        "A conjunction joins words or clauses, like 'but'. 'Underneath' relates the cat to the bench by place; it joins no clauses.",
      Determiner:
        "A determiner introduces a noun, like 'the' in 'the wooden bench'. 'Underneath' comes before that whole phrase and shows place.",
    },
    more: "Prepositions show place (under, behind, on), direction (through, towards) or time (before, after). A preposition is followed by a noun phrase. Without one, 'underneath' is an adverb.",
    tip: "Use exact prepositions of place to put things in a scene. 'Underneath the bench' is more precise than 'near the bench'.",
  },
  'He wanted to leave, but the storm trapped them inside.': {
    why: "'But' joins two clauses, 'He wanted to leave' and 'the storm trapped them inside', and shows they pull against each other. A joining word like this is a conjunction.",
    not: {
      Noun: "A noun names a person, place or thing. 'But' names nothing; it links two ideas.",
      Verb: "A verb is a doing or being word, like 'wanted' or 'trapped'. 'But' is not an action.",
      Adjective: "An adjective describes a noun. 'But' describes nothing; it connects.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'But' does not; it joins the two halves of the sentence.",
      Pronoun: "A pronoun stands in for a noun, like 'He' or 'them'. 'But' stands in for no one.",
      Preposition:
        "A preposition goes before a noun phrase to show place or time. 'But' is followed by a whole clause, 'the storm trapped them inside'.",
      Determiner:
        "A determiner introduces a noun, like 'the' in 'the storm'. 'But' introduces a whole clause.",
    },
    more: "'But' is a coordinating conjunction: it joins two clauses of equal weight. The others are for, and, nor, or, yet and so. Many people remember them as FANBOYS.",
    tip: "Put a comma before 'but' when it joins two full clauses, as here. It marks the pause before the contrast.",
  },
  'Every student must bring their own pencil tomorrow.': {
    why: "'Every' comes before the noun 'student' and covers each one in turn. A word that introduces a noun like this is a determiner.",
    not: {
      Noun: "A noun names a person, place or thing. 'Student' is the noun here; 'Every' only introduces it.",
      Verb: "A verb is a doing or being word, like 'must bring'. 'Every' is not an action.",
      Adjective:
        "Older books call 'every' an adjective. Today it is a determiner: it introduces the noun and comes before any adjectives, as in 'every tired student'.",
      Adverb:
        "An adverb tells you how, when or where something happens, like 'tomorrow'. 'Every' tells how many students, not when.",
      Pronoun:
        "A pronoun stands alone in place of a noun. 'Every' cannot stand alone; it needs 'student' after it.",
      Preposition:
        "A preposition shows place, direction or time before a noun. 'Every' only says how many students.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Every' joins nothing.",
    },
    more: "Determiners include articles (a, an, the), demonstratives (this, those), possessives (my, their) and quantifiers (some, every, several). 'Every' usually goes with a singular noun: 'every student', not 'every students'.",
    tip: "After 'every', you usually need a singular noun and a singular verb: 'Every student has', not 'Every students have'.",
  },
  'The light from the window faded as evening came.': {
    why: "'Light' names a thing, the glow from the window. It follows 'The' and is the subject of 'faded', so here it is a noun.",
    not: {
      Verb: "A verb is a doing word, like 'faded'. 'Light' is not the action; it is the thing that faded.",
      Adjective:
        "An adjective describes a noun, as in 'a light breeze'. Here 'light' follows 'The' and is itself the thing that faded.",
      Adverb:
        "An adverb tells you how something happens. 'Light' names what faded; it does not say how.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Light' is the noun itself.",
      Preposition:
        "A preposition, like 'from' here, links a noun to the sentence. 'Light' is the noun it is linked to.",
      Conjunction:
        "A conjunction joins clauses, like 'as' in 'as evening came'. 'Light' joins nothing.",
      Determiner:
        "A determiner introduces a noun, like 'The'. 'Light' is the noun that follows it.",
    },
    more: "Many English words change class with their job. 'Light' is a noun in 'the light', a verb in 'light the candle' and an adjective in 'a light breeze'. Always read the whole sentence.",
    tip: "Spot a noun by the word before it. After 'the', 'a' or 'my', the next word is often a noun or an adjective.",
  },
  'Please light the candle before the guests arrive.': {
    why: "'Light' is the action you are asked to do to the candle, so it is a verb. It begins a polite instruction after 'Please'.",
    not: {
      Noun: "A noun names a thing, like 'candle'. Here 'light' is something you do, not the name of a thing.",
      Adjective:
        "An adjective describes a noun, as in 'a light breeze'. 'Light' does not describe the candle; it tells you what to do to it.",
      Adverb:
        "An adverb tells you how or when something happens. 'Light' is the action itself, not a description of it.",
      Pronoun:
        "A pronoun stands in for a noun, like 'you', which is understood here. 'Light' stands in for no one.",
      Preposition:
        "A preposition shows place or time before a noun. 'Light' tells you to do something.",
      Conjunction:
        "A conjunction joins clauses, like 'before' in 'before the guests arrive'. 'Light' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the candle'. 'Light' is an action, not an introducer.",
    },
    more: "Verb test: put 'to' in front, or change the tense. 'To light', 'lit' and 'lighting' all work. A command like this one begins with a verb, and its subject, 'you', is understood.",
    tip: "In instructions and recipes, start with a verb: 'Light the candle', 'Pour the milk'. It keeps commands short and clear.",
  },
  'A light breeze carried the scent of rain.': {
    why: "'Light' describes the noun 'breeze' and means gentle, not heavy, so it is an adjective. It sits between 'A' and the noun it describes.",
    not: {
      Noun: "A noun names a thing, like 'breeze' or 'scent'. 'Light' describes the breeze rather than naming anything.",
      Verb: "A verb is a doing word, like 'carried'. 'Light' is not the action; it says what kind of breeze it was.",
      Adverb:
        "An adverb tells you how an action happens. 'Light' describes the noun 'breeze', not the verb 'carried'.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Light' stands in for nothing.",
      Preposition:
        "A preposition links a noun to the sentence, like 'of' in 'of rain'. 'Light' does not link; it describes.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Light' joins nothing.",
      Determiner:
        "A determiner, like 'A', introduces the noun. 'Light' comes after it and describes the breeze.",
    },
    more: "Adjective test: it can follow 'was'. 'The breeze was light' works. Adjectives answer the question 'what kind'. Compare 'a strong breeze', where 'strong' does the same job.",
    tip: "Change the adjective and the mood changes. A 'light' breeze feels gentle; a 'bitter' one feels harsh. Choose the one that matches your mood.",
  },
  'We ran fast to catch the departing bus.': {
    why: "'Fast' tells us how we ran, so it describes the verb 'ran' and is an adverb here. It has no -ly, but the job a word does decides its class.",
    not: {
      Noun: "A noun names a person, place or thing. 'Fast' names nothing here; it says how we ran.",
      Verb: "A verb is a doing word, like 'ran' or 'catch'. 'Fast' is not an action; it describes how we ran.",
      Adjective:
        "'Fast' is often an adjective ('a fast car'), but an adjective describes a noun. Here it describes the verb 'ran', so it is an adverb.",
      Pronoun: "A pronoun stands in for a noun, such as 'We'. 'Fast' stands in for no one.",
      Preposition:
        "A preposition goes before a noun to show place or time. No noun follows 'fast' here.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Fast' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the'. 'Fast' is followed by 'to catch', not by a noun.",
    },
    more: "'Fast' is a flat adverb: it has the same form as the adjective. 'Hard' and 'late' work the same way. Compare 'a fast pace', where 'fast' is an adjective.",
    tip: "Do not write 'fastly'. Say 'ran fast'. Some adverbs, such as 'fast', 'hard' and 'late', do not take -ly.",
  },
  'The horse set a fast pace across the moor.': {
    why: "'Fast' describes the noun 'pace' and means quick, so it is an adjective. It sits between 'a' and the noun it describes.",
    not: {
      Noun: "A noun names a thing, like 'pace' or 'horse'. 'Fast' describes the pace; it does not name anything.",
      Verb: "A verb is a doing word, like 'set'. 'Fast' is not an action here; it says what kind of pace.",
      Adverb:
        "'Fast' can be an adverb ('ran fast'), but an adverb describes a verb. Here it describes the noun 'pace', so it is an adjective.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Fast' stands in for nothing.",
      Preposition:
        "A preposition links a noun to the sentence, like 'across' here. 'Fast' does not link; it describes.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Fast' joins nothing.",
      Determiner:
        "A determiner, like 'a', introduces the noun. 'Fast' comes after it and describes the pace.",
    },
    more: "The same word is an adjective in 'a fast pace' and an adverb in 'ran fast'. Ask what it describes: a noun means adjective, a verb means adverb.",
    tip: "In an exam answer, say what the word describes: 'The adjective fast suggests the horse's speed and energy.'",
  },
  'She painted the fence and then mowed the lawn.': {
    why: "'And' joins two actions, 'painted the fence' and 'mowed the lawn', that carry equal weight. A word that joins like this is a conjunction.",
    not: {
      Noun: "A noun names a person, place or thing, like 'fence' or 'lawn'. 'And' names nothing.",
      Verb: "A verb is a doing word, like 'painted' or 'mowed'. 'And' is not an action.",
      Adjective: "An adjective describes a noun. 'And' describes nothing; it links two actions.",
      Adverb: "An adverb tells you how or when, as 'then' does here. 'And' does not; it joins.",
      Pronoun: "A pronoun stands in for a noun, such as 'She'. 'And' stands in for no one.",
      Preposition:
        "A preposition goes before a noun to show place, direction or time. 'And' joins two actions of equal weight instead.",
      Determiner:
        "A determiner introduces a noun, like 'the' in 'the fence'. 'And' introduces no noun.",
    },
    more: "'And' is a coordinating conjunction. It can join words ('salt and pepper'), phrases or whole clauses. The two parts it joins carry equal weight, so neither depends on the other.",
    tip: "Join short, related ideas with 'and' to avoid choppy writing, but do not string together too many actions in one sentence.",
  },
  'Although it was raining, the match continued.': {
    why: "'Although' starts the clause 'it was raining' and sets it against the main clause, 'the match continued'. A word that introduces a clause like this is a conjunction.",
    not: {
      Noun: "A noun names a person, place or thing, like 'match'. 'Although' names nothing.",
      Verb: "A verb is a doing or being word, like 'was' or 'continued'. 'Although' is not an action.",
      Adjective: "An adjective describes a noun. 'Although' describes nothing; it begins a clause.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Although' links the two clauses instead.",
      Pronoun:
        "A pronoun stands in for a noun, such as 'she' or 'they'. 'Although' stands in for nothing.",
      Preposition:
        "A preposition goes before a noun phrase, like 'in the rain'. 'Although' is followed by a clause with its own verb, 'was'.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the match'. 'Although' introduces a whole clause.",
    },
    more: "'Although' is a subordinating conjunction: the clause it starts cannot stand alone. Others are because, while, if, unless and since. 'Though' means much the same.",
    tip: "When an 'although' clause comes first, put a comma after it: 'Although it was raining, the match continued.'",
  },
  'The crowd cheered as the champion crossed the line.': {
    why: "'Champion' names a person, the winner, and is the subject of 'crossed', so it is a noun. It follows 'the', which introduces a noun.",
    not: {
      Verb: "A verb is a doing word, like 'cheered' or 'crossed'. 'Champion' is the person who crossed the line, not an action.",
      Adjective:
        "An adjective describes a noun, as in 'a champion swimmer'. Here 'champion' is the noun itself: the person who crossed the line.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Champion' tells us who crossed the line, not how.",
      Pronoun:
        "A pronoun stands in for a noun, such as 'she'. 'Champion' names the person instead.",
      Preposition:
        "A preposition shows place, direction or time before a noun. 'Champion' is the noun that follows 'the'.",
      Conjunction:
        "A conjunction joins clauses, like 'as' in 'as the champion crossed'. 'Champion' sits inside that clause and joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the'. 'Champion' comes after 'the' and is the noun.",
    },
    more: "'Champion' changes class: a noun in 'the champion', an adjective in 'a champion swimmer' and a verb in 'champion a cause'. Check what job it does in the sentence.",
    tip: "A noun like 'champion' carries a lot of meaning in one word. Use it instead of a longer phrase such as 'the person who won'.",
  },
  'A champion swimmer trains for many hours each day.': {
    why: "'Champion' comes before 'swimmer' and describes the swimmer as top-class, so here it works as an adjective, as 'fast' or 'young' would. Many dictionaries list it as an adjective in this use.",
    not: {
      Verb: "A verb is a doing word. The verb here is 'trains'. 'Champion' is not an action; it describes the swimmer.",
      Adverb:
        "An adverb tells you how, when or where an action happens. 'Champion' describes the noun 'swimmer', not the action 'trains'.",
      Pronoun:
        "A pronoun stands in for a noun, such as 'she'. 'Champion' replaces nothing; it describes the swimmer.",
      Preposition:
        "A preposition links a noun to the sentence, like 'for' in 'for many hours'. 'Champion' does not link; it describes.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Champion' joins nothing.",
      Determiner:
        "A determiner, like 'A', comes first and introduces the noun. 'Champion' comes after it and says what kind of swimmer.",
    },
    more: "Some grammar books call 'champion' here a noun describing another noun, as 'kitchen' does in 'kitchen table', so this question does not offer Noun. The same word is a noun in 'the champion' and a verb in 'champion a cause'.",
    tip: "Describing words before a noun add information in very few words. 'Champion swimmer' says more than 'swimmer'.",
  },
  'They will champion the rights of every worker.': {
    why: "'Champion' means to support something strongly. It follows 'will' and has an object, 'the rights', so it is a verb: it tells what they will do.",
    not: {
      Noun: "A noun names a person, place or thing. A 'champion' is a winner, but here 'will champion' is an action, not a name.",
      Adjective:
        "An adjective describes a noun, as in 'a champion swimmer'. Here 'champion' is what 'they' will do, not a description.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Champion' is the action, not a description of it.",
      Pronoun: "A pronoun stands in for a noun, such as 'They'. 'Champion' replaces no one.",
      Preposition:
        "A preposition links a noun to the sentence, like 'of' in 'of every worker'. 'Champion' is an action, not a link.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Champion' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'every'. 'Champion' is not introducing a noun.",
    },
    more: "Verb test: it follows 'will' and can change tense: 'championed', 'championing'. Nouns and adjectives cannot do that. Verbs that take an object are common: 'champion the rights'.",
    tip: "'Champion' as a verb suits speeches and persuasive writing: 'champion a cause' sounds more committed than 'support a cause'.",
  },
  'He spoke to her quietly behind the curtain.': {
    why: "'Behind' shows where he spoke, in relation to the curtain, and 'the curtain' follows it. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Noun: "A noun names a person, place or thing, like 'curtain'. 'Behind' names nothing here; it shows position.",
      Verb: "A verb is a doing word, like 'spoke'. 'Behind' is not an action.",
      Adjective:
        "An adjective describes a noun. 'Behind' does not describe the curtain; it shows where he spoke.",
      Adverb:
        "An adverb can stand alone to say where ('he stayed behind'). Here 'the curtain' follows, so 'behind' is a preposition. 'Quietly' is the adverb.",
      Pronoun: "A pronoun stands in for a noun, like 'her' or 'He'. 'Behind' stands in for no one.",
      Conjunction:
        "A conjunction joins words or clauses, like 'and'. 'Behind' joins no clauses; it links 'spoke' to a place.",
      Determiner:
        "A determiner introduces a noun, like 'the'. 'Behind' comes before the whole phrase 'the curtain' and shows position.",
    },
    more: "A preposition is followed by a noun, pronoun or noun phrase, called its object: 'behind it', 'behind the curtain'. With no object, 'behind' is an adverb: 'He stayed behind.'",
    tip: "In stories, prepositions of place set the scene. 'Behind the curtain' hints at hiding or secrecy.",
  },
  'The runner who finished first collected the medal.': {
    why: "'Who' stands for 'the runner' and is the subject of 'finished', so it is a pronoun. It also links the clause 'who finished first' back to the runner.",
    not: {
      Noun: "A noun names a person, place or thing, like 'runner' or 'medal'. 'Who' names no one itself; it points back to the runner.",
      Verb: "A verb is a doing word, like 'finished' or 'collected'. 'Who' is the one who finished, not the action.",
      Adjective:
        "An adjective describes a noun. 'Who' does not describe the runner; it stands in for the runner.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'First' is the adverb here. 'Who' answers the question 'which person'.",
      Preposition:
        "A preposition goes before a noun phrase, like 'of' or 'in'. 'Who' is not followed by a noun phrase; it replaces 'the runner'.",
      Conjunction:
        "A conjunction, like 'and', only joins. 'Who' also links its clause to 'the runner', but it stands for the runner and is the subject of 'finished', so it is a pronoun.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the medal'. 'Who' is followed by a verb, 'finished', not a noun.",
    },
    more: "'Who' is a relative pronoun. It begins a relative clause that tells us more about a person. Use 'who' for people, 'which' for things, and 'that' for either. 'Whom' is the object form.",
    tip: "Relative pronouns pack in detail without a new sentence. Write 'the runner who finished first', not 'the runner which'.",
  },
  'Those mountains look impossibly tall from here.': {
    why: "'Those' points to which mountains and comes before the noun 'mountains', so it is a determiner. It tells us they are the ones over there.",
    not: {
      Noun: "A noun names a person, place or thing. 'Mountains' is the noun; 'Those' only points to it.",
      Verb: "A verb is a doing or being word, like 'look'. 'Those' is not an action.",
      Adjective:
        "Older books call 'those' a demonstrative adjective. Today it is a determiner: it points to the noun and comes before any adjectives, as in 'those tall mountains'.",
      Adverb:
        "An adverb tells you how, when or where something happens, like 'impossibly'. 'Those' tells which mountains, not how they look.",
      Pronoun:
        "'Those' is a pronoun when it stands alone ('Those are tall'). Here the noun 'mountains' follows it, so it is a determiner.",
      Preposition:
        "A preposition links a noun to the sentence, like 'from' in 'from here'. 'Those' links nothing; it points.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Those' joins nothing.",
    },
    more: "The demonstratives are this, that, these and those. 'This' and 'these' point to things near you, 'that' and 'those' to things further away. Match them to the noun: 'those mountains', not 'that mountains'.",
    tip: "Use 'those' to set things at a distance and 'these' to bring them close. It changes how near the reader feels.",
  },
  'The orchestra played a haunting melody at midnight.': {
    why: "'Haunting' describes the noun 'melody', saying it was beautiful but sad and hard to forget, so it is an adjective. It sits between 'a' and the noun.",
    not: {
      Noun: "A noun names a thing, like 'melody' or 'orchestra'. 'Haunting' describes the melody; it names nothing.",
      Verb: "'Haunting' comes from the verb 'haunt', but here it works as a describing word: you can say 'a very haunting melody'. That makes it an adjective.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Haunting' describes the noun 'melody', not the action 'played'.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Haunting' stands in for nothing.",
      Preposition:
        "A preposition links a noun to the sentence, like 'at' in 'at midnight'. 'Haunting' does not link; it describes.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Haunting' joins nothing.",
      Determiner:
        "A determiner, like 'a', introduces the noun. 'Haunting' comes after it and describes the melody.",
    },
    more: "Some adjectives are formed from verbs. Test: a verb form can take an object ('haunting him'), but an adjective only describes ('a haunting melody'). Compare 'a tired child' and 'a running tap'.",
    tip: 'One well-chosen adjective can set a mood. When you describe music or a setting, pick a word that shows how it feels.',
  },
  'Memories of that summer kept haunting him for years.': {
    why: "'Haunting' follows 'kept' and has an object, 'him', so it is a verb: the memories kept returning to trouble him. It does not describe a noun.",
    not: {
      Noun: "A noun names a person, place or thing, like 'memories' or 'summer'. 'Haunting' is what the memories do, not a thing.",
      Adjective:
        "'Haunting' can be an adjective ('a haunting melody'), but an adjective describes a noun. Here it has an object, 'him', which shows it is a verb.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Haunting' is the action itself.",
      Pronoun:
        "A pronoun stands in for a noun, like 'him'. 'Haunting' is the action done to him, not a stand-in.",
      Preposition:
        "A preposition links a noun to the sentence, like 'of' in 'of that summer'. 'Haunting' is an action.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Haunting' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'that' in 'that summer'. 'Haunting' is an action.",
    },
    more: "'Kept haunting' is one verb phrase: 'kept' plus the -ing form. To haunt means to come back to someone's mind again and again. Verb test: it can take an object.",
    tip: "To write about a character's past, a verb like 'haunting' shows a memory that will not go away. It is stronger than 'worried'.",
  },
  'She carefully wrapped the fragile vase in newspaper.': {
    why: "'Carefully' tells us how she wrapped the vase, so it is an adverb. It describes the verb 'wrapped' and ends in -ly.",
    not: {
      Noun: "A noun names a person, place or thing, like 'vase'. 'Carefully' names nothing; it describes the way she worked.",
      Verb: "A verb is a doing word, like 'wrapped'. 'Carefully' is not the action; it describes the action.",
      Adjective:
        "An adjective describes a noun, like 'fragile' in 'fragile vase'. 'Carefully' describes how she wrapped, not the vase.",
      Pronoun: "A pronoun stands in for a noun, such as 'She'. 'Carefully' stands in for no one.",
      Preposition:
        "A preposition links a noun to the sentence, like 'in' in 'in newspaper'. 'Carefully' has no noun after it to link.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Carefully' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the'. 'Carefully' comes before the verb 'wrapped', not before a noun.",
    },
    more: "'Fragile' is the adjective in this sentence and 'carefully' is the adverb: one describes the thing, the other describes the action. Adverbs can move: 'She wrapped the vase carefully.'",
    tip: "Adverbs of manner show attitude. 'Carefully' tells us she cares about the vase, so use them to hint at a character's feelings.",
  },
  'The dog buried its bone beneath the apple tree.': {
    why: "'Its' comes before the noun 'bone' and shows who owns it, the dog. A word that introduces a noun like this is a determiner, a possessive one.",
    not: {
      Noun: "A noun names a person, place or thing, like 'dog' or 'bone'. 'Its' names nothing; it shows who owns the bone.",
      Verb: "A verb is a doing word, like 'buried'. 'Its' is not an action.",
      Adjective:
        "Older books call 'its' a possessive adjective. Today it is a determiner: it introduces the noun and comes before any adjectives, as in 'its old bone'.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Its' tells whose bone it was.",
      Pronoun:
        "A pronoun stands alone in place of a noun, as 'mine' and 'hers' do. 'Its' needs the noun 'bone' after it, so it is a determiner.",
      Preposition:
        "A preposition links a noun to the sentence, like 'beneath' here. 'Its' links nothing; it shows ownership.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Its' joins nothing.",
    },
    more: "Do not confuse 'its' with 'it's'. 'Its' shows belonging (its bone). 'It's' is short for 'it is' or 'it has'. The possessive determiners are my, your, his, her, its, our and their.",
    tip: "Check any 'its' you write. Say 'it is' or 'it has' in its place. If the sentence still makes sense, write 'it's'; if not, write 'its'.",
  },
  'We waited until the rain finally stopped.': {
    why: "'Until' introduces the clause 'the rain finally stopped' and tells us how long we waited. A word that introduces a clause like this is a conjunction.",
    not: {
      Noun: "A noun names a person, place or thing, like 'rain'. 'Until' names nothing.",
      Verb: "A verb is a doing word, like 'waited' or 'stopped'. 'Until' is not an action.",
      Adjective: "An adjective describes a noun. 'Until' describes nothing; it begins a clause.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Finally' is the adverb here. 'Until' links the clause 'the rain finally stopped' to 'We waited'.",
      Pronoun: "A pronoun stands in for a noun, such as 'We'. 'Until' stands in for no one.",
      Preposition:
        "'Until' can be a preposition when a noun follows ('until noon'). Here a whole clause, 'the rain finally stopped', follows, so it is a conjunction.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the rain'. 'Until' comes before a whole clause.",
    },
    more: "'Until' is a subordinating conjunction of time: the clause it starts cannot stand alone. Compare 'We waited until noon', where a noun follows and 'until' is a preposition. Look at what comes next.",
    tip: "Use this test for 'until', 'before' and 'after'. A clause with its own verb after them means conjunction; a noun phrase means preposition.",
  },
  'The captain steered the boat through the narrow channel.': {
    why: "'Through' shows the boat's path in relation to the channel, with 'the narrow channel' after it. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Noun: "A noun names a person, place or thing, like 'boat' or 'channel'. 'Through' names nothing; it shows direction.",
      Verb: "A verb is a doing word, like 'steered'. 'Through' is not an action.",
      Adjective:
        "An adjective describes a noun, like 'narrow'. 'Through' does not describe the channel; it shows the route.",
      Adverb:
        "'Through' can be an adverb when nothing follows ('the boat sailed through'). Here 'the narrow channel' follows, so it is a preposition.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Through' stands in for nothing.",
      Conjunction:
        "A conjunction joins words or clauses, like 'and'. 'Through' joins no clauses; it links the boat's path to a place.",
      Determiner:
        "A determiner introduces a noun, like 'the'. 'Through' comes before the whole phrase 'the narrow channel'.",
    },
    more: "Prepositions of movement include through, across, along, over and towards. 'Through' means going in at one side and out at the other, so it suits a channel, a tunnel or a forest.",
    tip: "Pick the preposition that gives the exact movement. 'Through the channel' is not the same as 'along', 'across' or 'into' the channel.",
  },
  'Everyone in the village remembered the great flood.': {
    why: "'Everyone' stands in for all the people in the village without naming them, and it is the subject of 'remembered'. A word that takes the place of nouns is a pronoun.",
    not: {
      Noun: "A noun names a person, place or thing, like 'village' or 'flood'. 'Everyone' does not name anyone; it stands in for all of them.",
      Verb: "A verb is a doing word, like 'remembered'. 'Everyone' is who remembered, not the action.",
      Adjective:
        "An adjective describes a noun, like 'great' in 'great flood'. 'Everyone' describes nothing.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Everyone' answers the question who, not how.",
      Preposition:
        "A preposition links a noun to the sentence, as 'in' links 'the village'. 'Everyone' is not a link word; it says who remembered.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Everyone' joins nothing.",
      Determiner:
        "'Every' is a determiner, but 'everyone' is one word that stands alone as the subject, with no noun after it. That makes it a pronoun.",
    },
    more: "Indefinite pronouns such as everyone, nobody, someone and anything refer to people or things without naming them. Those ending in -one, -body or -thing take a singular verb: 'Everyone remembers', not 'remember'.",
    tip: "'Everyone' is one word. Two words, 'every one', mean each single thing, as in 'every one of the houses'.",
  },
  'The chef seasoned the soup with fresh herbs.': {
    why: "'Seasoned' is the action the chef did to the soup, in the past tense, with 'the soup' as its object. A word that tells what someone did is a verb.",
    not: {
      Noun: "A noun names a person, place or thing, like 'chef' or 'soup'. 'Seasoned' names nothing; it tells what the chef did.",
      Adjective:
        "'Seasoned' can be an adjective ('a seasoned traveller'), but an adjective describes a noun. Here it is what the chef did to the soup, so it is a verb.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Seasoned' is the action itself.",
      Pronoun:
        "A pronoun stands in for a noun, such as 'it'. 'Seasoned' is the action done to the soup.",
      Preposition:
        "A preposition links a noun to the sentence, like 'with' in 'with fresh herbs'. 'Seasoned' is an action.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Seasoned' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the'. 'Seasoned' is the chef's action, not an introducer.",
    },
    more: "Verb test: change the tense. 'Seasoned' becomes 'seasons' or 'will season'. A regular past tense ends in -ed, but the same form can be an adjective, so look for a subject and an object.",
    tip: "In a description of a process, precise verbs such as 'seasoned' or 'simmered' make each step clear. They beat vague ones like 'did'.",
  },
  'A seasoned traveller packs only what she needs.': {
    why: "'Seasoned' describes the noun 'traveller', meaning experienced, so it is an adjective. It sits between 'A' and the noun and does not describe an action.",
    not: {
      Noun: "A noun names a person, place or thing. 'Traveller' is the noun; 'seasoned' says what kind of traveller she is.",
      Verb: "'Seasoned' comes from the verb 'season', but nobody is seasoning anything here. It says what kind of traveller she is, so it is an adjective.",
      Adverb:
        "An adverb tells you how an action happens. 'Seasoned' describes the noun 'traveller', not the action 'packs'.",
      Pronoun: "A pronoun stands in for a noun, such as 'she'. 'Seasoned' stands in for no one.",
      Preposition:
        "A preposition links a noun to the sentence. 'Seasoned' does not link; it describes.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Seasoned' joins nothing.",
      Determiner:
        "A determiner, like 'A', introduces the noun. 'Seasoned' comes after it and describes the traveller.",
    },
    more: "Many adjectives are made from verbs, like 'tired', 'broken' and 'trained'. 'Seasoned' means experienced here. Test: the traveller is not being seasoned by anyone, so it is a description, not an action.",
    tip: "To describe a character in a few words, try an adjective with a story inside it. 'A seasoned traveller' suggests she has been far, often.",
  },
  'The children laughed loudly during the puppet show.': {
    why: "'Loudly' tells us how the children laughed, so it is an adverb. It describes the verb 'laughed' and ends in -ly.",
    not: {
      Noun: "A noun names a person, place or thing, like 'children' or 'show'. 'Loudly' names nothing.",
      Verb: "A verb is a doing word, like 'laughed'. 'Loudly' describes the laughing; it is not the action.",
      Adjective:
        "An adjective describes a noun. 'Loud' would describe 'laughter'; 'loudly' describes the verb 'laughed'.",
      Pronoun: "A pronoun stands in for a noun. 'Loudly' stands in for no one.",
      Preposition:
        "A preposition links a noun to the sentence, like 'during' here. 'Loudly' has no noun after it.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Loudly' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the'. 'Loudly' comes after the verb and describes it.",
    },
    more: "Adverb test: does it answer the question 'how'? How did the children laugh? Loudly. Its adjective is 'loud', as in 'a loud laugh'. Many adverbs are made by adding -ly to an adjective.",
    tip: "A verb plus an adverb can be replaced by one stronger verb. 'Laughed loudly' could be 'roared with laughter'.",
  },
  'He placed the letter on the kitchen table.': {
    why: "'On' shows where he placed the letter, with 'the kitchen table' after it. A word that links a noun phrase to the action by place is a preposition.",
    not: {
      Noun: "A noun names a person, place or thing, like 'letter' or 'table'. 'On' names nothing; it shows position.",
      Verb: "A verb is a doing word, like 'placed'. 'On' is not an action.",
      Adjective:
        "An adjective describes a noun. 'On' does not describe the table; it shows where the letter went.",
      Adverb:
        "'On' can be an adverb when nothing follows ('carry on'). Here 'the kitchen table' follows it, so it is a preposition.",
      Pronoun: "A pronoun stands in for a noun, such as 'He'. 'On' stands in for no one.",
      Conjunction:
        "A conjunction joins words or clauses, like 'and'. 'On' links the letter to the table by position; it joins no clauses.",
      Determiner:
        "A determiner introduces a noun, like 'the'. 'On' comes before the whole phrase 'the kitchen table'.",
    },
    more: "Prepositions of place are small but important: on, in, at, under, over, beside. 'On' means touching the top surface. 'In' would suggest the letter was inside something.",
    tip: "Learn prepositions in whole phrases: 'on the table', 'in the box', 'at the door'. The right one often sounds natural before you can explain why.",
  },
  'She and I will present the project together.': {
    why: "'I' stands in for the speaker, so the writer does not need to use a name. A word that takes the place of a noun is a pronoun, and 'I' is a personal pronoun used as part of the subject.",
    not: {
      Noun: "A noun names a person, place or thing, like 'project'. 'I' does not name the speaker; it stands in for the name.",
      Verb: "A verb is a doing word, like 'will present'. 'I' is who will do it, not the action.",
      Adjective:
        "An adjective describes a noun. 'I' describes nothing; it replaces a person's name.",
      Adverb:
        "An adverb tells you how, when or where something happens, like 'together'. 'I' says who, not how.",
      Preposition:
        "A preposition links a noun to the sentence, like 'in' or 'on'. 'I' links nothing.",
      Conjunction:
        "A conjunction joins words or clauses. 'And' is the conjunction here, joining 'She' and 'I'. 'I' is one of the words being joined.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the project'. 'I' stands alone as part of the subject.",
    },
    more: "'I' is the first person singular subject pronoun, and it is always a capital letter. The object form is 'me'. The other personal pronouns are you, he, she, it, we and they.",
    tip: "To check 'She and I' or 'her and me', take the other person out. 'I will present' sounds right; 'me will present' does not.",
  },
  'The ancient bridge groaned under the heavy lorry.': {
    why: "'Ancient' describes the noun 'bridge', telling us it is very old, so it is an adjective. It sits between 'The' and the noun it describes.",
    not: {
      Noun: "A noun names a person, place or thing. 'Bridge' is the noun; 'ancient' describes it.",
      Verb: "A verb is a doing word, like 'groaned'. 'Ancient' is not an action; it says what the bridge is like.",
      Adverb:
        "An adverb tells you how an action happens. 'Ancient' describes the noun 'bridge', not the action 'groaned'.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Ancient' stands in for nothing.",
      Preposition:
        "A preposition links a noun to the sentence, like 'under'. 'Ancient' does not link; it describes.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Ancient' joins nothing.",
      Determiner:
        "A determiner, like 'The', introduces the noun. 'Ancient' comes after it and describes the bridge.",
    },
    more: "Adjective test: 'The bridge is ancient' still works. 'Heavy' is another adjective here, describing the lorry. Adjectives can come before a noun or after a verb such as 'is'.",
    tip: "Pair a strong adjective with a strong verb. 'Ancient bridge' and 'groaned' together make the bridge seem alive and tired.",
  },
  'They march bravely into the freezing storm.': {
    why: "'March' is what they do: walk in step. It comes after the subject 'They' and before the adverb 'bravely', so it is a verb.",
    not: {
      Noun: "A noun names a person, place or thing. 'March' can name an event or the month, but here it is what 'they' do, so it is a verb.",
      Adjective:
        "An adjective describes a noun, like 'freezing' in 'freezing storm'. 'March' describes nothing; it is the action.",
      Adverb:
        "An adverb tells you how, when or where something happens, as 'bravely' does. 'March' is the action that 'bravely' describes.",
      Pronoun: "A pronoun stands in for a noun, such as 'They'. 'March' is what they do.",
      Preposition:
        "A preposition links a noun to the sentence, like 'into' here. 'March' is an action, not a link.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'March' joins nothing.",
      Determiner: "A determiner comes before a noun, like 'the'. 'March' is an action word.",
    },
    more: "Verb test: change the tense. 'They marched' and 'they will march' both work, and a noun does not change like this. The same spelling is a noun in 'the protest march'.",
    tip: "Verbs such as 'march' show movement and mood. Add an adverb, as here with 'bravely', to show how a group feels.",
  },
  'The protest march filled the entire high street.': {
    why: "'March' names an event, a walk by many people, and is the subject of 'filled', so it is a noun. 'Protest' tells us what kind of march it was.",
    not: {
      Verb: "A verb is a doing word. The verb here is 'filled'. 'March' names the event; it is not what the subject does.",
      Adjective:
        "An adjective describes a noun, like 'entire' in 'entire high street'. 'March' is the noun that 'protest' describes.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'March' names the event; it does not describe an action.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'March' is the noun itself.",
      Preposition:
        "A preposition links a noun to the sentence. 'March' is a noun, not a link word.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'March' joins nothing.",
      Determiner: "A determiner introduces a noun, like 'The'. 'March' is the noun it introduces.",
    },
    more: "Noun test: add 'the' or make it plural. 'The march' and 'marches' both work. Two nouns can sit together, as in 'protest march', where the first noun tells us about the second.",
    tip: "Noun pairs such as 'protest march' and 'school bus' are common. Put the describing noun first and the main noun last.",
  },
  'Neither answer was correct, so we tried again.': {
    why: "'Neither' comes before the noun 'answer' and means 'not one of the two', so it is a determiner. It limits the noun, like 'the' or 'each'.",
    not: {
      Noun: "A noun names a person, place or thing. 'Answer' is the noun here; 'Neither' only introduces it.",
      Verb: "A verb is a doing or being word, like 'was' or 'tried'. 'Neither' is not an action.",
      Adjective:
        "Older books call 'neither' an adjective. Today it is a determiner: it introduces the noun and limits it, rather than describing it as 'wrong' or 'hard' would.",
      Adverb:
        "An adverb tells you how, when or where something happens, like 'again'. 'Neither' tells us which answer, not when.",
      Pronoun:
        "'Neither' is a pronoun when it stands alone ('Neither was correct'). Here the noun 'answer' follows it, so it is a determiner.",
      Preposition:
        "A preposition links a noun to the sentence, like 'in' or 'on'. 'Neither' links nothing.",
      Conjunction:
        "'Neither' also joins words in 'neither... nor', but here there is no 'nor'. It introduces the noun 'answer', so it is a determiner.",
    },
    more: "'Neither' is for two things; use 'none' for more than two. It goes with a singular noun and verb here: 'Neither answer was correct', not 'were'.",
    tip: "'Neither answer was correct' is neat in formal writing. Make sure the verb agrees with the singular noun after 'neither'.",
  },
  'He whispered the secret, yet she heard every word.': {
    why: "'Yet' joins two clauses, 'He whispered the secret' and 'she heard every word', and means 'but'. It shows a surprising contrast, so it is a conjunction.",
    not: {
      Noun: "A noun names a person, place or thing, like 'secret' or 'word'. 'Yet' names nothing.",
      Verb: "A verb is a doing word, like 'whispered' or 'heard'. 'Yet' is not an action.",
      Adjective: "An adjective describes a noun. 'Yet' describes nothing; it joins.",
      Adverb:
        "'Yet' is often an adverb ('Is it ready yet?'). Here it joins two clauses and means 'but', so it is a conjunction.",
      Pronoun: "A pronoun stands in for a noun, like 'He' or 'she'. 'Yet' stands in for no one.",
      Preposition:
        "A preposition goes before a noun phrase to show place or time. 'Yet' is followed by a whole clause, 'she heard every word'.",
      Determiner:
        "A determiner comes before a noun, like 'every' in 'every word'. 'Yet' introduces a whole clause.",
    },
    more: "'Yet' is a coordinating conjunction, like 'but'. Put a comma before it when it joins two full clauses. As an adverb it means 'so far' or 'until now': 'Has she arrived yet?'",
    tip: "'Yet' sounds more surprising than 'but'. Use it when the second clause is the opposite of what the reader expects.",
  },
  'The owl perched silently above the barn door.': {
    why: "'Silently' tells us how the owl perched, so it is an adverb. It describes the verb 'perched' and ends in -ly.",
    not: {
      Noun: "A noun names a person, place or thing, like 'owl' or 'door'. 'Silently' names nothing; it describes how the owl perched.",
      Verb: "A verb is a doing word, like 'perched'. 'Silently' describes the action; it is not the action.",
      Adjective:
        "An adjective describes a noun. 'Silent' would describe the owl; 'silently' describes how it perched.",
      Pronoun: "A pronoun stands in for a noun. 'Silently' stands in for no one.",
      Preposition:
        "A preposition links a noun to the sentence, like 'above' here. 'Silently' has no noun after it.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Silently' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the'. 'Silently' comes after the verb and describes it.",
    },
    more: "An adverb often goes straight after its verb ('perched silently') but can move: 'Silently, the owl perched above the barn door.' 'Above the barn door' says where; 'silently' says how.",
    tip: "Open a sentence with an adverb to build atmosphere, and put a comma after it: 'Silently, the owl perched...'",
  },
  'Our team trained hard before the regional final.': {
    why: "'Our' comes before the noun 'team' and shows who it belongs to, so it is a possessive determiner. It answers the question 'whose team'.",
    not: {
      Noun: "A noun names a person, place or thing. 'Team' is the noun; 'Our' shows whose team it is.",
      Verb: "A verb is a doing word, like 'trained'. 'Our' is not an action.",
      Adjective:
        "Older books call 'our' a possessive adjective. Today it is a determiner: it introduces the noun and comes before any adjectives, as in 'our new team'.",
      Adverb:
        "An adverb tells you how, when or where something happens, like 'hard'. 'Our' tells us whose team.",
      Pronoun:
        "A pronoun stands alone in place of a noun, like 'ours'. 'Our' needs the noun 'team' after it, so it is a determiner.",
      Preposition:
        "A preposition links a noun to the sentence, like 'before' here. 'Our' links nothing; it shows ownership.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Our' joins nothing.",
    },
    more: "The possessive determiners are my, your, his, her, its, our and their. The forms that stand alone are mine, yours, his, hers, ours and theirs: 'The team is ours.'",
    tip: "Writers say 'our' to include the reader in 'us': 'our team', 'our school'. It builds a shared voice in speeches and persuasive writing.",
  },
  'The detective examined each clue with great care.': {
    why: "'Examined' is what the detective did to each clue, in the past tense, with 'each clue' as its object. A word that tells what someone did is a verb.",
    not: {
      Noun: "A noun names a person, place or thing, like 'detective' or 'clue'. 'Examined' names nothing; it tells what the detective did.",
      Adjective:
        "An adjective describes a noun, like 'great' in 'great care'. 'Examined' is an action here, not a description.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Examined' is the action itself.",
      Pronoun: "A pronoun stands in for a noun. 'Examined' stands in for no one.",
      Preposition:
        "A preposition links a noun to the sentence, like 'with' in 'with great care'. 'Examined' is an action.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Examined' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'each'. 'Examined' is not introducing a noun.",
    },
    more: "Verb test: change the tense. 'Examined' becomes 'examines' or 'will examine'. The verb links the doer, 'The detective', to the thing it acted on, 'each clue'.",
    tip: "A specific verb does the work of several words. 'Examined' is more precise than 'looked at'.",
  },
  'A single candle flickered against the darkness.': {
    why: "'Against' links the flickering candle to 'the darkness', showing what it is set against. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Noun: "A noun names a person, place or thing, like 'candle' or 'darkness'. 'Against' names nothing; it links the two.",
      Verb: "A verb is a doing word, like 'flickered'. 'Against' is not an action.",
      Adjective:
        "An adjective describes a noun, like 'single' in 'single candle'. 'Against' does not describe; it links.",
      Adverb:
        "An adverb stands alone to say how, when or where. 'Against' is followed by 'the darkness', so it is a preposition.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Against' stands in for nothing.",
      Conjunction:
        "A conjunction joins words or clauses, like 'and'. 'Against' links the candle to the darkness; it joins no clauses.",
      Determiner:
        "A determiner introduces a noun, like 'the'. 'Against' comes before the phrase 'the darkness'.",
    },
    more: "'Against' can mean touching ('leaning against the wall'), opposing ('against the rules') or contrasting with a background, as here. The candle seems brighter because darkness surrounds it.",
    tip: "'Against' sets one thing in contrast with another: a light against darkness, a hero against the odds. Use it to build contrast in descriptions.",
  },
  'She handed the keys to him without a word.': {
    why: "'Him' stands in for a man or boy the reader already knows about, so the writer does not repeat the name. A word that takes the place of a noun is a pronoun.",
    not: {
      Noun: "A noun names a person, place or thing, like 'keys' or 'word'. 'Him' does not name anyone; it stands in for a name.",
      Verb: "A verb is a doing word, like 'handed'. 'Him' is who received the keys, not the action.",
      Adjective:
        "An adjective describes a noun. 'Him' describes nothing; it takes a person's place.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Him' tells us who, not how.",
      Preposition:
        "A preposition links a noun to the sentence, like 'to' and 'without' here. 'Him' is the person that 'to' points at.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Him' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the keys'. 'Him' stands alone and introduces no noun.",
    },
    more: "'Him' is an object pronoun. The subject forms (he, she, I, we, they) go before a verb. The object forms (him, her, me, us, them) follow a verb or a preposition: 'to him', 'with them'.",
    tip: "After a preposition, use the object form: 'to him', 'between you and me'. 'Between you and I' is a common mistake.",
  },
  'The garden looked beautiful after the spring rain.': {
    why: "'Beautiful' describes the noun 'garden', saying how it looked, so it is an adjective. It follows the linking verb 'looked'.",
    not: {
      Noun: "A noun names a person, place or thing. 'Garden' is the noun; 'beautiful' says what it looked like.",
      Verb: "A verb is a doing or being word. The verb here is 'looked'. 'Beautiful' is not an action.",
      Adverb:
        "'Beautifully' would be an adverb. After a linking verb such as 'looked' we describe the garden itself, so we use the adjective 'beautiful'.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Beautiful' stands in for nothing.",
      Preposition:
        "A preposition links a noun to the sentence, like 'after' in 'after the spring rain'. 'Beautiful' describes the garden.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Beautiful' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the'. 'Beautiful' follows the verb and describes the garden.",
    },
    more: "Linking verbs such as be, seem, look, feel and become connect the subject to a describing word: 'She seemed happy', 'The soup tastes good'. The describing word is an adjective.",
    tip: "'Beautiful' is safe but common. To lift your writing, try more precise adjectives such as 'vivid', 'fresh' or 'dazzling'.",
  },
  'They built a sturdy shelter before nightfall.': {
    why: "'Shelter' names the thing they built, and it follows 'a sturdy', so it is a noun. You could say 'the shelter' or 'two shelters'.",
    not: {
      Verb: "A verb is a doing word, like 'built'. Here 'shelter' is the thing built, not an action.",
      Adjective:
        "An adjective describes a noun, like 'sturdy'. 'Shelter' is the noun that 'sturdy' describes.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Shelter' tells us what they built.",
      Pronoun: "A pronoun stands in for a noun, such as 'They'. 'Shelter' is the noun itself.",
      Preposition:
        "A preposition links a noun to the sentence, like 'before' in 'before nightfall'. 'Shelter' is a noun, not a link.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Shelter' joins nothing.",
      Determiner:
        "A determiner introduces a noun, like 'a'. 'Shelter' is the noun that follows 'a sturdy'.",
    },
    more: "Noun test: 'a shelter', 'two shelters'. The same spelling is a verb in 'The trees can shelter you', where it means to protect. Many English words work as both noun and verb.",
    tip: "A specific noun tells a reader more than a vague one. 'Shelter' says what the building is for; 'thing' says nothing.",
  },
  'The trees can shelter you from the worst of the rain.': {
    why: "'Shelter' follows 'can' and is something the trees do to 'you', so it is a verb meaning to protect. A word that tells what something does is a verb.",
    not: {
      Noun: "A noun names a person, place or thing, like 'trees' or 'rain'. 'Shelter' can name a place of safety, but here it is what the trees do.",
      Adjective:
        "An adjective describes a noun. 'Shelter' does not describe the trees; it tells what they do.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Shelter' is the action itself.",
      Pronoun: "A pronoun stands in for a noun, like 'you'. 'Shelter' is the action done to 'you'.",
      Preposition:
        "A preposition links a noun to the sentence, like 'from' in 'from the worst of the rain'. 'Shelter' is an action.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Shelter' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the'. 'Shelter' is not introducing a noun.",
    },
    more: "'Can' is a modal verb, and a modal is followed by the plain form of a verb: 'can shelter', 'will shelter'. A noun would not fit after 'can'. This verb has an object, 'you'.",
    tip: "'Shelter' can be a noun or a verb, so test it in the sentence. After 'can', only a verb fits: 'can shelter'.",
  },
  'He answered every question honestly and clearly.': {
    why: "'Honestly' tells us how he answered, so it is an adverb. It describes the verb 'answered' and ends in -ly.",
    not: {
      Noun: "A noun names a person, place or thing, like 'question'. 'Honestly' names nothing.",
      Verb: "A verb is a doing word, like 'answered'. 'Honestly' describes the answering; it is not the action.",
      Adjective:
        "An adjective describes a noun. 'Honest' would describe a person or an answer; 'honestly' describes how he answered.",
      Pronoun: "A pronoun stands in for a noun, such as 'He'. 'Honestly' stands in for no one.",
      Preposition:
        "A preposition links a noun to the sentence. 'Honestly' has no noun after it to link.",
      Conjunction:
        "A conjunction joins words or clauses. 'And' is the conjunction here, joining 'honestly' and 'clearly'. 'Honestly' is one of the words it joins.",
      Determiner:
        "A determiner comes before a noun, like 'every' in 'every question'. 'Honestly' describes the verb.",
    },
    more: "'Honestly' and 'clearly' are both adverbs, joined by 'and'. Both answer the question 'how did he answer'. Two adverbs of equal weight can be joined like this.",
    tip: 'Do not pile up adverbs. One or two precise ones, as here, are enough.',
  },
  'We sheltered beneath the bridge during the downpour.': {
    why: "'Beneath' shows where we sheltered, in relation to the bridge, with 'the bridge' after it. A word that links a noun phrase to the action by place is a preposition.",
    not: {
      Noun: "A noun names a person, place or thing, like 'bridge' or 'downpour'. 'Beneath' names nothing; it shows position.",
      Verb: "A verb is a doing word, like 'sheltered'. 'Beneath' is not an action.",
      Adjective:
        "An adjective describes a noun. 'Beneath' does not describe the bridge; it shows where we were.",
      Adverb:
        "An adverb can stand alone ('the water flowed beneath'). Here 'the bridge' follows, so 'beneath' is a preposition.",
      Pronoun: "A pronoun stands in for a noun, such as 'We'. 'Beneath' stands in for no one.",
      Conjunction:
        "A conjunction joins words or clauses, like 'and'. 'Beneath' links the action to a place; it joins no clauses.",
      Determiner:
        "A determiner introduces a noun, like 'the'. 'Beneath' comes before the whole phrase 'the bridge'.",
    },
    more: "'Beneath', 'below' and 'under' are close in meaning. 'Beneath' is a little more formal or literary. 'During' is also a preposition in this sentence, showing time instead of place.",
    tip: "Choose a formal or poetic preposition on purpose. 'Beneath the bridge' sounds more written than 'under the bridge'.",
  },
  'This map shows the safest route to the harbour.': {
    why: "'This' comes before the noun 'map' and points to which map, so it is a determiner. It stands in front of the noun it introduces.",
    not: {
      Noun: "A noun names a person, place or thing. 'Map' is the noun; 'This' only points to it.",
      Verb: "A verb is a doing word, like 'shows'. 'This' is not an action.",
      Adjective:
        "Older books call 'this' a demonstrative adjective. Today it is a determiner: it points to the noun and comes before any adjectives, as in 'this old map'.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'This' tells us which map.",
      Pronoun:
        "'This' is a pronoun when it stands alone ('This is mine'). Here the noun 'map' follows it, so it is a determiner.",
      Preposition:
        "A preposition links a noun to the sentence, like 'to' in 'to the harbour'. 'This' links nothing; it points.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'This' joins nothing.",
    },
    more: "'This' (near, one), 'these' (near, many), 'that' and 'those' (further away) are the demonstrative determiners. They point to which one. The same words are pronouns when no noun follows.",
    tip: "In an exam answer, write 'this map' or 'this detail', not just 'this'. A bare 'this' can leave the reader unsure what you mean.",
  },
  'The wind howled while the campers slept soundly.': {
    why: "'While' introduces the clause 'the campers slept soundly' and shows that it happened at the same time as the wind howled. A word that introduces a clause like this is a conjunction.",
    not: {
      Noun: "A noun names a person, place or thing, like 'wind' or 'campers'. 'While' names nothing here; it joins two clauses.",
      Verb: "A verb is a doing word, like 'howled' or 'slept'. 'While' is not an action.",
      Adjective: "An adjective describes a noun. 'While' describes nothing.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Soundly' is the adverb here. 'While' joins 'the campers slept soundly' to 'The wind howled'.",
      Pronoun: "A pronoun stands in for a noun, such as 'who'. 'While' stands in for no one.",
      Preposition:
        "A preposition goes before a noun phrase, like 'during the night'. 'While' goes before a whole clause with its own verb, 'slept'.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the campers'. 'While' introduces a whole clause.",
    },
    more: "'While' is a subordinating conjunction of time ('at the same time as'). It can also show contrast: 'She likes tea, while he likes coffee.' The clause it starts cannot stand alone.",
    tip: "'During' and 'while' mean similar things, but 'during' needs a noun ('during the storm') and 'while' needs a clause ('while it stormed').",
  },
  'A brave knight defended the trembling villagers.': {
    why: "'Brave' describes the noun 'knight', saying what kind of knight he was, so it is an adjective. It sits between 'A' and the noun it describes.",
    not: {
      Noun: "A noun names a person, place or thing. 'Knight' is the noun; 'brave' describes him.",
      Verb: "A verb is a doing word, like 'defended'. 'Brave' is not an action; it says what the knight was like.",
      Adverb:
        "An adverb tells you how an action happens. 'Bravely' would describe 'defended'; 'brave' describes the noun 'knight'.",
      Pronoun: "A pronoun stands in for a noun, such as 'he'. 'Brave' stands in for nothing.",
      Preposition:
        "A preposition links a noun to the sentence. 'Brave' does not link; it describes.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Brave' joins nothing.",
      Determiner:
        "A determiner, like 'A', introduces the noun. 'Brave' comes after it and describes the knight.",
    },
    more: "Adjective test: 'The knight was brave' works. 'Trembling' is another adjective in this sentence, describing the villagers. Adjectives answer the question 'what kind'.",
    tip: "An adjective can show the writer's view. Calling the knight 'brave' invites the reader to admire him.",
  },
  'She quickly realised that something was wrong.': {
    why: "'Quickly' tells us how fast she realised, so it is an adverb. It describes the verb 'realised' and ends in -ly.",
    not: {
      Noun: "A noun names a person, place or thing. 'Quickly' names nothing; it describes how fast she realised.",
      Verb: "A verb is a doing or being word, like 'realised' or 'was'. 'Quickly' describes the realising; it is not the action.",
      Adjective:
        "An adjective describes a noun. 'Wrong' is the adjective in this sentence. 'Quickly' describes the verb 'realised'.",
      Pronoun:
        "A pronoun stands in for a noun, such as 'She' or 'something'. 'Quickly' stands in for nothing.",
      Preposition:
        "A preposition links a noun to the sentence. 'Quickly' has no noun after it to link.",
      Conjunction:
        "A conjunction joins clauses. 'That' is the conjunction here, linking 'realised' to 'something was wrong'. 'Quickly' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the'. 'Quickly' comes before the verb and describes it.",
    },
    more: "Adverbs can sit before the verb ('quickly realised'), after it, or at the start of a sentence. 'Quickly' answers 'how fast?' and also hints at how sudden the discovery was.",
    tip: "In a story, an adverb of speed such as 'quickly' or 'slowly' controls pace. Use it to show how fast a character reacts.",
  },
  'The river flows gently towards the distant sea.': {
    why: "'Flows' is what the river does, an action in the present tense, so it is a verb. The -s ending goes with the single subject 'The river'.",
    not: {
      Noun: "A noun names a person, place or thing, like 'river' or 'sea'. 'Flows' names nothing; it is what the river does.",
      Adjective:
        "An adjective describes a noun, like 'distant' in 'distant sea'. 'Flows' is an action, not a description.",
      Adverb:
        "An adverb tells you how, when or where something happens, as 'gently' does. 'Flows' is the action that 'gently' describes.",
      Pronoun:
        "A pronoun stands in for a noun. 'Flows' stands in for no one; it is what the river does.",
      Preposition:
        "A preposition links a noun to the sentence, like 'towards' here. 'Flows' is an action.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Flows' joins nothing.",
      Determiner: "A determiner comes before a noun, like 'the'. 'Flows' is an action word.",
    },
    more: "Verb test: change the tense. 'Flows' becomes 'flowed' or 'will flow'. The -s on a present tense verb goes with one he, she or it: 'the river flows', but 'the rivers flow'.",
    tip: 'Check that the verb agrees with its subject: one river flows, two rivers flow. Agreement slips are easy to miss when you proofread.',
  },
  'Itself a mystery, the locked door fascinated them.': {
    why: "'Them' stands in for people the reader already knows about, so the writer does not repeat their names. A word that takes the place of nouns is a pronoun, and this one is the object of 'fascinated'.",
    not: {
      Noun: "A noun names a person, place or thing, like 'door'. 'Them' does not name anyone; it stands in for people.",
      Verb: "A verb is a doing word, like 'fascinated'. 'Them' is who was fascinated, not the action.",
      Adjective:
        "An adjective describes a noun, like 'locked'. 'Them' describes nothing; it stands for people.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Them' tells us who, not how.",
      Preposition:
        "A preposition links a noun to the sentence. 'Them' is the object of the verb, with no linking word before it.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Them' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the locked door'. No noun follows 'them', so it is a pronoun.",
    },
    more: "'Them' is an object pronoun. The subject forms (he, she, I, we, they) go before a verb. The object forms (him, her, me, us, them) come after a verb or a preposition. 'Itself' at the start is a pronoun too, pointing to the door.",
    tip: "Pronouns stop repetition, but make sure the reader knows who 'them' means. Name the people once before you replace them.",
  },
  'The mountain trail wound steeply between the cliffs.': {
    why: "'Between' shows where the trail wound, in relation to the cliffs, with 'the cliffs' after it. A word that links a noun phrase to the action by place is a preposition.",
    not: {
      Noun: "A noun names a person, place or thing, like 'trail' or 'cliffs'. 'Between' names nothing; it shows position.",
      Verb: "A verb is a doing word, like 'wound'. 'Between' is not an action.",
      Adjective:
        "An adjective describes a noun. 'Between' does not describe the cliffs; it shows where the trail went.",
      Adverb:
        "An adverb tells you how, when or where, like 'steeply' here. 'Between' is followed by 'the cliffs', which makes it a preposition.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Between' stands in for nothing.",
      Conjunction:
        "A conjunction joins words or clauses, like 'and'. 'Between' links the trail to the cliffs by position; it joins no clauses.",
      Determiner:
        "A determiner introduces a noun, like 'the'. 'Between' comes before the phrase 'the cliffs'.",
    },
    more: "'Between' is used for two or more clearly separate things; 'among' suits a group: 'between the cliffs', 'among the trees'. It can also show time ('between nine and ten') or a link ('between friends').",
    tip: "In descriptions, 'between' can show a narrow route. A trail winding between cliffs feels tight and dangerous.",
  },
  'Several pupils volunteered to tidy the library.': {
    why: "'Several' comes before the noun 'pupils' and says how many, so it is a determiner. It is a quantifier, a word that gives an amount.",
    not: {
      Noun: "A noun names a person, place or thing. 'Pupils' is the noun; 'Several' only says how many.",
      Verb: "A verb is a doing word, like 'volunteered'. 'Several' is not an action.",
      Adjective:
        "Older books call 'several' an adjective. Today it is a determiner: it gives an amount and comes before any adjectives, as in 'several tired pupils'.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Several' tells us how many pupils.",
      Pronoun:
        "'Several' is a pronoun when it stands alone ('Several of them volunteered'). Here 'pupils' follows it, so it is a determiner.",
      Preposition:
        "A preposition shows place, direction or time before a noun. 'Several' only gives an amount.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Several' joins nothing.",
    },
    more: "Quantifiers are determiners that give an amount: some, many, few, several, all, no. 'Several' means more than two but not a great many, and it goes with plural nouns.",
    tip: "Choose a quantifier that fits what you mean: 'several' is more than a couple, 'many' is a lot, 'few' is hardly any.",
  },
  'The thunder rumbled because the storm was near.': {
    why: "'Because' introduces the clause 'the storm was near' and gives the reason the thunder rumbled. A word that introduces a reason clause is a conjunction.",
    not: {
      Noun: "A noun names a person, place or thing, like 'thunder' or 'storm'. 'Because' names nothing.",
      Verb: "A verb is a doing or being word, like 'rumbled' or 'was'. 'Because' is not an action.",
      Adjective:
        "An adjective describes a noun. 'Near' is the adjective here. 'Because' only joins.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Because' tells us why, by joining two clauses.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Because' stands in for nothing.",
      Preposition:
        "A preposition goes before a noun phrase ('because of the storm'). 'Because' alone goes before a clause with its own verb, 'was'.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the storm'. 'Because' introduces a whole clause.",
    },
    more: "'Because' is a subordinating conjunction of reason. A clause starting with it needs a main clause too: 'Because the storm was near.' is not a full sentence on its own.",
    tip: "Use 'because' to explain, which earns marks in exam answers. Make a point, then say why with 'because'.",
  },
  'He polished the trophy until it gleamed brightly.': {
    why: "'Brightly' tells us how the trophy gleamed, so it is an adverb. It describes the verb 'gleamed' and ends in -ly.",
    not: {
      Noun: "A noun names a person, place or thing, like 'trophy'. 'Brightly' names nothing; it describes how it gleamed.",
      Verb: "A verb is a doing word, like 'polished' or 'gleamed'. 'Brightly' is not an action; it describes one.",
      Adjective:
        "An adjective describes a noun. 'Bright' would describe the trophy; 'brightly' describes how it gleamed.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Brightly' stands in for nothing.",
      Preposition:
        "A preposition links a noun to the sentence. 'Brightly' has no noun after it to link.",
      Conjunction: "A conjunction joins clauses, like 'until' here. 'Brightly' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the'. 'Brightly' comes after the verb and describes it.",
    },
    more: "Adverbs can describe verbs, as here, but also adjectives ('very bright') and other adverbs ('quite brightly'). Test: an adverb often answers 'how?' about the verb.",
    tip: 'A strong adverb can show the result of effort: he polished the trophy until it gleamed brightly. Use it to show what an action achieved.',
  },
  'A clever solution saved the entire experiment.': {
    why: "'Clever' describes the noun 'solution', saying it showed skill and good thinking, so it is an adjective. It sits between 'A' and the noun.",
    not: {
      Noun: "A noun names a person, place or thing, like 'solution' or 'experiment'. 'Clever' describes the solution.",
      Verb: "A verb is a doing word, like 'saved'. 'Clever' is not an action; it says what kind of solution.",
      Adverb:
        "An adverb tells you how an action happens. 'Cleverly' would describe how something was done; 'clever' describes the noun 'solution'.",
      Pronoun: "A pronoun stands in for a noun, such as 'it'. 'Clever' stands in for nothing.",
      Preposition:
        "A preposition links a noun to the sentence. 'Clever' does not link; it describes.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Clever' joins nothing.",
      Determiner:
        "A determiner, like 'A', introduces the noun. 'Clever' comes after it and describes the solution.",
    },
    more: "'Clever' becomes an adverb with -ly ('cleverly'). It is an adjective after 'was' too: 'The solution was clever'. 'Entire' is the other adjective here, describing 'experiment'.",
    tip: "Match the adjective to the point you are making. 'Clever' praises the thinking; 'quick' would praise the speed.",
  },
  'The author signed each book for the eager readers.': {
    why: "'Signed' is what the author did to each book, in the past tense, with 'each book' as its object. A word that tells what someone did is a verb.",
    not: {
      Noun: "A noun names a person, place or thing, like 'author' or 'book'. 'Signed' names nothing; it tells what the author did.",
      Adjective:
        "'Signed' can be an adjective ('a signed photo'). Here it is what the author did to each book, so it is a verb.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Signed' is the action itself.",
      Pronoun: "A pronoun stands in for a noun. 'Signed' stands in for no one.",
      Preposition:
        "A preposition links a noun to the sentence, like 'for' in 'for the eager readers'. 'Signed' is an action.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Signed' joins nothing.",
      Determiner: "A determiner comes before a noun, like 'each' or 'the'. 'Signed' is an action.",
    },
    more: "Verb test: change the tense. 'Signed' becomes 'signs' or 'will sign'. The same -ed form can also describe a thing, as in 'a signed copy', where nobody is signing right now.",
    tip: "Check -ed words. 'The author signed the book': verb. 'A signed copy': it describes a noun, so it is an adjective.",
  },
  'We could not find the exit anywhere in the maze.': {
    why: "'Exit' names a thing, the way out, and follows 'the', so it is a noun. It is the object of 'find'.",
    not: {
      Verb: "A verb is a doing word, like 'find'. Here 'exit' is the thing we could not find, not an action.",
      Adjective:
        "An adjective describes a noun. 'Exit' does not describe anything here; it is what we could not find.",
      Adverb:
        "An adverb tells you how, when or where something happens, like 'anywhere' here. 'Exit' names the thing we looked for.",
      Pronoun: "A pronoun stands in for a noun, such as 'We'. 'Exit' is the noun itself.",
      Preposition:
        "A preposition links a noun to the sentence, like 'in' in 'in the maze'. 'Exit' is a noun, not a link.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Exit' joins nothing.",
      Determiner: "A determiner introduces a noun, like 'the'. 'Exit' is the noun that follows it.",
    },
    more: "Noun test: 'the exit', 'two exits'. The same spelling is a verb in 'Please exit the building'. Always decide from the job the word does in the sentence.",
    tip: "A sign that says EXIT is a noun, but 'Exit now' is a command. Notice which job a word does before you label it.",
  },
  'Please exit the building calmly during the alarm.': {
    why: "'Exit' tells people what to do, which is to leave, and begins a polite instruction after 'Please'. A word that tells what to do is a verb.",
    not: {
      Noun: "A noun names a person, place or thing, like 'building' or 'alarm'. 'Exit' can name a way out, but here it is what you are asked to do.",
      Adjective:
        "An adjective describes a noun. 'Exit' does not describe the building; it says what to do.",
      Adverb:
        "An adverb tells you how, when or where something happens, like 'calmly' here. 'Exit' is the action that 'calmly' describes.",
      Pronoun:
        "A pronoun stands in for a noun. 'Exit' stands in for no one; it is the action 'you', understood, must do.",
      Preposition:
        "A preposition links a noun to the sentence, like 'during' here. 'Exit' is an action.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Exit' joins nothing.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the building'. 'Exit' is an action.",
    },
    more: "Verb test: 'exit' can change tense: 'exited', 'will exit'. It also has an object, 'the building'. A command like this starts with a verb, and its subject, 'you', is understood.",
    tip: "In notices and instructions, start with a verb: 'Exit calmly', 'Keep clear'. It is short, and it gets people to act.",
  },
  'She kept the secret safe within her own heart.': {
    why: "'Her' comes before 'own heart' and shows whose heart it is, so it is a possessive determiner. It answers the question 'whose'.",
    not: {
      Noun: "A noun names a person, place or thing. 'Heart' is the noun; 'her' shows whose heart it is.",
      Verb: "A verb is a doing word, like 'kept'. 'Her' is not an action.",
      Adjective:
        "Older books call 'her' a possessive adjective. Today it is a determiner: it introduces the noun and comes before any adjectives, as in 'her own heart'.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Her' tells us whose heart.",
      Pronoun:
        "'Her' is a pronoun when it is an object ('She handed it to her'). Here it answers the question 'whose heart', so it is a possessive determiner.",
      Preposition:
        "A preposition links a noun to the sentence, like 'within' here. 'Her' links nothing; it shows ownership.",
      Conjunction: "A conjunction joins words or clauses, like 'and'. 'Her' joins nothing.",
    },
    more: "'Her' has two jobs. Before a noun it is a determiner ('her book'). Standing alone as an object it is a pronoun ('I told her'). The possessive that stands alone is 'hers'.",
    tip: "Ask 'whose?'. 'Her own heart' answers it, so 'her' is a determiner. 'I saw her' does not, so 'her' is a pronoun.",
  },
  'The explorers travelled far across the frozen plain.': {
    why: "'Across' shows the direction of travel, in relation to the plain, with 'the frozen plain' after it. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Noun: "A noun names a person, place or thing, like 'explorers' or 'plain'. 'Across' names nothing; it shows direction.",
      Verb: "A verb is a doing word, like 'travelled'. 'Across' is not an action.",
      Adjective:
        "An adjective describes a noun, like 'frozen' in 'frozen plain'. 'Across' does not describe the plain; it shows where they travelled.",
      Adverb:
        "'Across' can be an adverb when nothing follows ('They walked across'). Here 'the frozen plain' follows, so it is a preposition. 'Far' is the adverb here.",
      Pronoun: "A pronoun stands in for a noun, such as 'they'. 'Across' stands in for nothing.",
      Conjunction:
        "A conjunction joins words or clauses, like 'and'. 'Across' links the journey to the plain; it joins no clauses.",
      Determiner:
        "A determiner introduces a noun, like 'the'. 'Across' comes before the whole phrase 'the frozen plain'.",
    },
    more: "Prepositions of movement show how something travels: across (from side to side), through (in and out), along, over, towards. 'Across the plain' suggests a long, open journey.",
    tip: "Choose your preposition to set the scale. 'Across the plain' feels wide and open; 'through the forest' feels enclosed.",
  },
}
