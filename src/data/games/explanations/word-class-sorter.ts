import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Word Class Sorter: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/word-class-sorter.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 to 31 October 2026. Every question now has three
 * wrong options of its own, so each old explanation keeps only the three "why
 * not"s a student can see. 136 questions were added: small words whose class
 * depends on what follows (since, before, as, like), words whose class the
 * sentence decides (that, only, still, kindly, present), what kind of phrase or
 * clause a group of words is, and what a clause does in a line of a set text. Of
 * the 64 old explanations, 41 were rewritten: seven no longer say an adverb "ends
 * in -ly", because the bank now asks -ly adjectives (friendly, lonely), and 35 no
 * longer give, as an example of a class, a word another question asks about (one
 * does both). "Light", "fast" and "champion" had answered each other from one old
 * question to the next; "and", "but", "across", "every", "mine" and "hers" are
 * asked by questions of their own. Written with AI and checked against each
 * question, as the founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second, independent reader against the
 * national curriculum glossary and each held text: 19 explanations corrected
 * or new. Three are for invented sentences now replaced by real lines (since,
 * so, still).
 * "Its" and "Our" no longer treat Pronoun as wrong (the glossary and this site
 * also call possessives possessive pronouns), and say why the curriculum lists
 * them as determiners; "her" and "burning" are new questions on real lines, the
 * second because "a very burning log" fails the test this game teaches. Others
 * stated what the text does not ("finished" for "well under way", Scrooge "half
 * hoping"), a false origin for "ghastly", an adverb "both" in "they both ran",
 * "hand cream" as a describing word, a sentence "with no verb" that has one, a
 * poem with one main clause where it has two; "late" said never to take -ly
 * beside "lately"; a "running tap" left unexplained; and one tip showed
 * "between", which another question asks, as a preposition.
 */
export const EXPLANATIONS: GameExplanations = {
  'The fox slipped quietly past the sleeping hounds.': {
    why: "'Fox' names an animal and is the one doing the slipping, so it is a noun. It follows 'The', which introduces a noun.",
    not: {
      Verb: "A verb is a doing or being word. 'Slipped' is the verb here. 'Fox' is the animal doing the action, not the action itself.",
      Adjective:
        "An adjective describes a noun, as 'sleeping' describes 'hounds'. 'Fox' describes nothing here; it names the animal.",
      Pronoun:
        "A pronoun stands in for a noun, such as 'it' or 'he'. 'Fox' is the noun itself, not a stand-in for one.",
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
    },
    more: "Adjective test: can it follow 'is' or 'was'? 'The gate was rusty' works. Adjectives answer the question 'what kind' and can stack up before a noun: 'rusty old gate'.",
    tip: "Choose adjectives that make the reader see something. 'Rusty' shows decay; 'old' alone only tells.",
  },
  'She answered the question remarkably calmly.': {
    why: "'Calmly' tells us how she answered, so it is an adverb: it gives more information about the verb 'answered'.",
    not: {
      Adjective:
        "An adjective describes a noun, like 'calm' in 'a calm voice'. 'Calmly' describes the verb 'answered', not a noun.",
      Verb: "A verb is a doing word, like 'answered'. 'Calmly' is not the action; it describes the action.",
      Noun: "A noun names a person, place or thing. 'Calmly' names nothing; it describes the way she answered.",
    },
    more: "'Remarkably' is an adverb too: it describes 'calmly', not the verb. Adverbs can describe verbs, adjectives and other adverbs. Adding -ly to an adjective often makes one, but not always.",
    tip: "Use an adverb when it adds something. 'Answered calmly' shows her mood in one word.",
  },
  'Nobody believed the strange story he told.': {
    why: "'Nobody' means 'no person' and is the subject of 'believed'. A word that takes the place of a noun is a pronoun.",
    not: {
      Noun: "A noun names a person, place or thing, like 'story'. 'Nobody' does not name anyone; it means 'no person'.",
      Determiner:
        "A determiner comes before a noun, like 'the' before 'story'. 'Nobody' stands alone as the subject; no noun follows it.",
      Adjective:
        "An adjective describes a noun, like 'strange' in 'strange story'. 'Nobody' describes nothing.",
    },
    more: "Indefinite pronouns point to people or things without naming them: nobody, somebody, anyone, anything. Those ending in -body, -one or -thing take a singular verb: 'Nobody believes', not 'Nobody believe'.",
    tip: "Check your verb after nobody, somebody and anyone. Each takes the singular form: 'Nobody knows', 'Somebody is'.",
  },
  'The cat hid underneath the wooden bench.': {
    why: "'Underneath' shows where the cat hid, in relation to the bench, and 'the wooden bench' follows it. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Adverb:
        "On its own, 'underneath' can be an adverb ('the cat hid underneath'). Here 'the wooden bench' follows it, which makes it a preposition.",
      Conjunction:
        "A conjunction joins words or clauses, as 'or' and 'if' do. 'Underneath' relates the cat to the bench by place; it joins no clauses.",
      Adjective:
        "An adjective describes a noun, like 'wooden'. 'Underneath' does not describe the bench; it shows where the cat hid.",
    },
    more: "Prepositions show place (under, beside, above), direction (into, towards) or time (during, at). A preposition is followed by a noun phrase. Without one, 'underneath' is an adverb.",
    tip: "Use exact prepositions of place to put things in a scene. 'Underneath the bench' is more precise than 'near the bench'.",
  },
  'He wanted to leave, but the storm trapped them inside.': {
    why: "'But' joins two clauses, 'He wanted to leave' and 'the storm trapped them inside', and shows they pull against each other. A joining word like this is a conjunction.",
    not: {
      Preposition:
        "A preposition goes before a noun phrase to show place or time. 'But' is followed by a whole clause, 'the storm trapped them inside'.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'But' does not; it joins the two halves of the sentence.",
      Determiner:
        "A determiner introduces a noun, like 'the' in 'the storm'. 'But' introduces a whole clause.",
    },
    more: "'But' is a coordinating conjunction: it joins two clauses of equal weight, so neither depends on the other. 'Or' and 'nor' work in the same way.",
    tip: "Put a comma before 'but' when it joins two full clauses, as here. It marks the pause before the contrast.",
  },
  'Every student must bring their own pencil tomorrow.': {
    why: "'Every' comes before the noun 'student' and covers each one in turn. A word that introduces a noun like this is a determiner.",
    not: {
      Pronoun:
        "A pronoun stands alone in place of a noun. 'Every' cannot stand alone; it needs 'student' after it.",
      Adjective:
        "Older books call 'every' an adjective. Today it is a determiner: it introduces the noun and comes before any adjectives, as in 'every tired student'.",
      Adverb:
        "An adverb tells you how, when or where something happens, like 'tomorrow'. 'Every' tells how many students, not when.",
    },
    more: "Determiners include articles (a, an, the), demonstratives (these), possessives (my, their) and quantifiers (many, few, every). 'Every' usually goes with a singular noun: 'every student', not 'every students'.",
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
    },
    more: "Many English words change class with their job. 'Light' is a verb in 'light a fire' and a describing word in 'a light bag'. Always read the whole sentence.",
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
    },
    more: "Adjective test: it can follow 'was'. 'The breeze was light' works. Adjectives answer the question 'what kind'. Compare 'a strong breeze', where 'strong' does the same job.",
    tip: "Change the adjective and the mood changes. A 'light' breeze feels gentle; a 'bitter' one feels harsh. Choose the one that matches your mood.",
  },
  'We ran fast to catch the departing bus.': {
    why: "'Fast' tells us how we ran, so it describes the verb 'ran' and is an adverb here. It has no -ly, but the job a word does decides its class.",
    not: {
      Adjective:
        "'Fast' is often an adjective ('a fast car'), but an adjective describes a noun. Here it describes the verb 'ran', so it is an adverb.",
      Noun: "A noun names a person, place or thing. 'Fast' names nothing here; it says how we ran.",
      Verb: "A verb is a doing word, like 'ran' or 'catch'. 'Fast' is not an action; it describes how we ran.",
    },
    more: "'Fast' is a flat adverb: it has the same form as the adjective. 'Late' works the same way. Compare 'a fast car', where 'fast' is an adjective.",
    tip: "Do not write 'fastly'. Say 'ran fast'. 'Lately' is a word, but it means recently, not in a late way.",
  },
  'The horse set a fast pace across the moor.': {
    why: "'Fast' describes the noun 'pace' and means quick, so it is an adjective. It sits between 'a' and the noun it describes.",
    not: {
      Adverb:
        "'Fast' can be an adverb ('ran fast'), but an adverb describes a verb. Here it describes the noun 'pace', so it is an adjective.",
      Noun: "A noun names a thing, like 'pace' or 'horse'. 'Fast' describes the pace; it does not name anything.",
      Verb: "A verb is a doing word, like 'set'. 'Fast' is not an action here; it says what kind of pace.",
    },
    more: "The same word is an adjective in 'a fast pace' and an adverb in 'she drove fast'. Ask what it describes: a noun means adjective, a verb means adverb.",
    tip: "In an exam answer, say what the word describes: 'The adjective fast suggests the horse's speed and energy.'",
  },
  'She painted the fence and then mowed the lawn.': {
    why: "'And' joins two actions, 'painted the fence' and 'mowed the lawn', that carry equal weight. A word that joins like this is a conjunction.",
    not: {
      Preposition:
        "A preposition goes before a noun to show place, direction or time. 'And' joins two actions of equal weight instead.",
      Adverb: "An adverb tells you how or when, as 'then' does here. 'And' does not; it joins.",
      Determiner:
        "A determiner introduces a noun, like 'the' in 'the fence'. 'And' introduces no noun.",
    },
    more: "'And' is a coordinating conjunction. It can join words ('salt and pepper'), phrases or whole clauses. The two parts it joins carry equal weight, so neither depends on the other.",
    tip: "Join short, related ideas with 'and' to avoid choppy writing, but do not string together too many actions in one sentence.",
  },
  'Although it was raining, the match continued.': {
    why: "'Although' starts the clause 'it was raining' and sets it against the main clause, 'the match continued'. A word that introduces a clause like this is a conjunction.",
    not: {
      Preposition:
        "A preposition goes before a noun phrase, like 'in the rain'. 'Although' is followed by a clause with its own verb, 'was'.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Although' links the two clauses instead.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the match'. 'Although' introduces a whole clause.",
    },
    more: "'Although' is a subordinating conjunction: the clause it starts cannot stand alone. Others are if, unless, when and whereas. 'Though' means much the same.",
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
    },
    more: "'Champion' changes class: it is a verb in 'champion a cause', meaning support it, as well as a noun for a winner. Check what job it does in the sentence.",
    tip: "A noun like 'champion' carries a lot of meaning in one word. Use it instead of a longer phrase such as 'the person who won'.",
  },
  'A champion swimmer trains for many hours each day.': {
    why: "'Champion' comes before 'swimmer' and describes the swimmer as top-class, so here it works as an adjective, as 'strong' or 'young' would. Many dictionaries list it as an adjective in this use.",
    not: {
      Verb: "A verb is a doing word. The verb here is 'trains'. 'Champion' is not an action; it describes the swimmer.",
      Adverb:
        "An adverb tells you how, when or where an action happens. 'Champion' describes the noun 'swimmer', not the action 'trains'.",
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
    },
    more: "Verb test: it follows 'will' and can change tense: 'championed', 'championing'. Nouns and adjectives cannot do that. Verbs that take an object are common: 'champion the rights'.",
    tip: "'Champion' as a verb suits speeches and persuasive writing: 'champion a cause' sounds more committed than 'support a cause'.",
  },
  'He spoke to her quietly behind the curtain.': {
    why: "'Behind' shows where he spoke, in relation to the curtain, and 'the curtain' follows it. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Adverb:
        "An adverb can stand alone to say where ('he stayed behind'). Here 'the curtain' follows, so 'behind' is a preposition. 'Quietly' is the adverb.",
      Conjunction:
        "A conjunction joins words or clauses, as 'or' and 'if' do. 'Behind' joins no clauses; it links 'spoke' to a place.",
      Adjective:
        "An adjective describes a noun. 'Behind' does not describe the curtain; it shows where he spoke.",
    },
    more: "A preposition is followed by a noun, pronoun or noun phrase, called its object: 'behind it', 'behind the curtain'. With no object, 'behind' is an adverb: 'He stayed behind.'",
    tip: "In stories, prepositions of place set the scene. 'Behind the curtain' hints at hiding or secrecy.",
  },
  'The runner who finished first collected the medal.': {
    why: "'Who' stands for 'the runner' and is the subject of 'finished', so it is a pronoun. It also links the clause 'who finished first' back to the runner.",
    not: {
      Conjunction:
        "A conjunction, such as 'or', only joins. 'Who' also links its clause to 'the runner', but it stands for the runner and is the subject of 'finished', so it is a pronoun.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the medal'. 'Who' is followed by a verb, 'finished', not a noun.",
      Noun: "A noun names a person, place or thing, like 'runner' or 'medal'. 'Who' names no one itself; it points back to the runner.",
    },
    more: "'Who' is a relative pronoun: it begins a relative clause that tells us more about a person, here the runner. 'Whom' is its object form.",
    tip: "Relative pronouns pack in detail without a new sentence. Write 'the runner who finished first', not 'the runner which'.",
  },
  'Those mountains look impossibly tall from here.': {
    why: "'Those' points to which mountains and comes before the noun 'mountains', so it is a determiner. It tells us they are the ones over there.",
    not: {
      Pronoun:
        "'Those' is a pronoun when it stands alone ('Those are tall'). Here the noun 'mountains' follows it, so it is a determiner.",
      Adjective:
        "Older books call 'those' a demonstrative adjective. Today it is a determiner: it points to the noun and comes before any adjectives, as in 'those tall mountains'.",
      Adverb:
        "An adverb tells you how, when or where something happens, like 'impossibly'. 'Those' tells which mountains, not how they look.",
    },
    more: "'Those' points to things further away, and 'these' to things near you. Match them to the noun: 'those mountains', 'this mountain'.",
    tip: "Use 'those' to set things at a distance and 'these' to bring them close. It changes how near the reader feels.",
  },
  'The orchestra played a haunting melody at midnight.': {
    why: "'Haunting' describes the noun 'melody', saying it was beautiful but sad and hard to forget, so it is an adjective. It sits between 'a' and the noun.",
    not: {
      Verb: "'Haunting' comes from the verb 'haunt', but here it works as a describing word: you can say 'a very haunting melody'. That makes it an adjective.",
      Noun: "A noun names a thing, like 'melody' or 'orchestra'. 'Haunting' describes the melody; it names nothing.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Haunting' describes the noun 'melody', not the action 'played'.",
    },
    more: "Some adjectives are formed from verbs. Test: an adjective can take 'very' ('a very haunting melody'); the verb form takes an object ('haunting the castle'). 'A very tired child' works too, so 'tired' there is an adjective.",
    tip: 'One well-chosen adjective can set a mood. When you describe music or a setting, pick a word that shows how it feels.',
  },
  'Memories of that summer kept haunting him for years.': {
    why: "'Haunting' follows 'kept' and has an object, 'him', so it is a verb: the memories kept returning to trouble him. It does not describe a noun.",
    not: {
      Adjective:
        "'Haunting' can be an adjective ('a haunting melody'), but an adjective describes a noun. Here it has an object, 'him', which shows it is a verb.",
      Noun: "A noun names a person, place or thing, like 'memories' or 'summer'. 'Haunting' is what the memories do, not a thing.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Haunting' is the action itself.",
    },
    more: "'Kept haunting' is one verb phrase: 'kept' plus the -ing form. To haunt means to come back to someone's mind again and again. Verb test: it can take an object.",
    tip: "To write about a character's past, a verb like 'haunting' shows a memory that will not go away. It is stronger than 'worried'.",
  },
  'She carefully wrapped the fragile vase in newspaper.': {
    why: "'Carefully' tells us how she wrapped the vase, so it is an adverb: it describes the verb 'wrapped'.",
    not: {
      Adjective:
        "An adjective describes a noun, like 'fragile' in 'fragile vase'. 'Carefully' describes how she wrapped, not the vase.",
      Verb: "A verb is a doing word, like 'wrapped'. 'Carefully' is not the action; it describes the action.",
      Noun: "A noun names a person, place or thing, like 'vase'. 'Carefully' names nothing; it describes the way she worked.",
    },
    more: "'Fragile' is the adjective in this sentence and 'carefully' is the adverb: one describes the thing, the other describes the action. Adverbs can move: 'She wrapped the vase carefully.'",
    tip: "Adverbs of manner show attitude. 'Carefully' tells us she cares about the vase, so use them to hint at a character's feelings.",
  },
  'The dog buried its bone beneath the apple tree.': {
    why: "'Its' comes before the noun 'bone' and shows who owns it, the dog. The national curriculum lists possessives like this among the determiners, because they introduce a noun as 'the' does. Some books call them possessive pronouns.",
    not: {
      Adjective:
        "Older books call 'its' a possessive adjective. Today it is a determiner: it introduces the noun and comes before any adjectives, as in 'its old bone'.",
      Noun: "A noun names a person, place or thing, like 'dog' or 'bone'. 'Its' names nothing; it shows who owns the bone.",
      Verb: "'It's', with an apostrophe, is short for 'it is' and has a verb in it. 'Its', with none, has no verb: it shows whose bone it is.",
    },
    more: "Do not confuse 'its' with 'it's'. 'Its' shows belonging (its bone). 'It's' is short for 'it is' or 'it has'. Other possessive determiners are my, your, his and their.",
    tip: "Check any 'its' you write. Say 'it is' or 'it has' in its place. If the sentence still makes sense, write 'it's'; if not, write 'its'.",
  },
  'We waited until the rain finally stopped.': {
    why: "'Until' introduces the clause 'the rain finally stopped' and tells us how long we waited. A word that introduces a clause like this is a conjunction.",
    not: {
      Preposition:
        "'Until' can be a preposition when a noun follows ('until noon'). Here a whole clause, 'the rain finally stopped', follows, so it is a conjunction.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Finally' is the adverb here. 'Until' links the clause 'the rain finally stopped' to 'We waited'.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the rain'. 'Until' comes before a whole clause.",
    },
    more: "'Until' is a subordinating conjunction of time: the clause it starts cannot stand alone. Compare 'We waited until noon', where a noun follows and 'until' is a preposition. Look at what comes next.",
    tip: "Test 'until' by what follows it. A clause with its own verb means it is a conjunction; a noun phrase on its own means it is a preposition.",
  },
  'The captain steered the boat through the narrow channel.': {
    why: "'Through' shows the boat's path in relation to the channel, with 'the narrow channel' after it. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Adverb:
        "'Through' can be an adverb when nothing follows ('the boat sailed through'). Here 'the narrow channel' follows, so it is a preposition.",
      Conjunction:
        "A conjunction joins words or clauses, as 'or' and 'if' do. 'Through' joins no clauses; it links the boat's path to a place.",
      Adjective:
        "An adjective describes a noun, like 'narrow'. 'Through' does not describe the channel; it shows the route.",
    },
    more: "Prepositions of movement include through, along, over, into and towards. 'Through' means going in at one side and out at the other, so it suits a channel, a tunnel or a forest.",
    tip: "Pick the preposition that gives the exact movement. 'Through the channel' is not the same as 'along' or 'into' the channel.",
  },
  'Everyone in the village remembered the great flood.': {
    why: "'Everyone' stands in for all the people in the village without naming them, and it is the subject of 'remembered'. A word that takes the place of nouns is a pronoun.",
    not: {
      Noun: "A noun names a person, place or thing, like 'village' or 'flood'. 'Everyone' does not name anyone; it stands in for all of them.",
      Determiner:
        "A determiner comes before a noun. 'Everyone' is one word that stands alone as the subject, with no noun after it, so it is a pronoun.",
      Adjective:
        "An adjective describes a noun, like 'great' in 'great flood'. 'Everyone' describes nothing.",
    },
    more: "Indefinite pronouns such as everyone, somebody, anyone and anything refer to people or things without naming them. Those ending in -one, -body or -thing take a singular verb: 'Everyone remembers', not 'remember'.",
    tip: "'Everyone' is one word. Two words, 'every one', mean each single thing, as in 'every one of the houses'.",
  },
  'The chef seasoned the soup with fresh herbs.': {
    why: "'Seasoned' is the action the chef did to the soup, in the past tense, with 'the soup' as its object. A word that tells what someone did is a verb.",
    not: {
      Adjective:
        "'Seasoned' can be an adjective ('a seasoned traveller'), but an adjective describes a noun. Here it is what the chef did to the soup, so it is a verb.",
      Noun: "A noun names a person, place or thing, like 'chef' or 'soup'. 'Seasoned' names nothing; it tells what the chef did.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Seasoned' is the action itself.",
    },
    more: "Verb test: change the tense. 'Seasoned' becomes 'seasons' or 'will season'. A regular past tense ends in -ed, but the same form can be an adjective, so look for a subject and an object.",
    tip: "In a description of a process, precise verbs such as 'seasoned' or 'simmered' make each step clear. They beat vague ones like 'did'.",
  },
  'A seasoned traveller packs only what she needs.': {
    why: "'Seasoned' describes the noun 'traveller', meaning experienced, so it is an adjective. It sits between 'A' and the noun and does not describe an action.",
    not: {
      Verb: "'Seasoned' comes from the verb 'season', but nobody is seasoning anything here. It says what kind of traveller she is, so it is an adjective.",
      Noun: "A noun names a person, place or thing. 'Traveller' is the noun; 'seasoned' says what kind of traveller she is.",
      Adverb:
        "An adverb tells you how an action happens. 'Seasoned' describes the noun 'traveller', not the action 'packs'.",
    },
    more: "Many adjectives are made from verbs, like 'tired' and 'trained'. 'Seasoned' means experienced here. Test: the traveller is not being seasoned by anyone, so it is a description, not an action.",
    tip: "To describe a character in a few words, try an adjective with a story inside it. 'A seasoned traveller' suggests she has been far, often.",
  },
  'The children laughed loudly during the puppet show.': {
    why: "'Loudly' tells us how the children laughed, so it is an adverb: it describes the verb 'laughed'.",
    not: {
      Adjective:
        "An adjective describes a noun. 'Loud' would describe 'laughter'; 'loudly' describes the verb 'laughed'.",
      Verb: "A verb is a doing word, like 'laughed'. 'Loudly' describes the laughing; it is not the action.",
      Noun: "A noun names a person, place or thing, like 'children' or 'show'. 'Loudly' names nothing.",
    },
    more: "Adverb test: does it answer the question 'how'? How did the children laugh? Loudly. Its adjective is 'loud', as in 'a loud laugh'. Many adverbs are made by adding -ly to an adjective.",
    tip: "A verb plus an adverb can be replaced by one stronger verb. 'Laughed loudly' could be 'roared with laughter'.",
  },
  'He placed the letter on the kitchen table.': {
    why: "'On' shows where he placed the letter, with 'the kitchen table' after it. A word that links a noun phrase to the action by place is a preposition.",
    not: {
      Adverb:
        "'On' can be an adverb when nothing follows ('carry on'). Here 'the kitchen table' follows it, so it is a preposition.",
      Conjunction:
        "A conjunction joins words or clauses, as 'or' and 'if' do. 'On' links the letter to the table by position; it joins no clauses.",
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
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the project'. 'I' stands alone as part of the subject.",
      Adjective:
        "An adjective describes a noun. 'I' describes nothing; it replaces a person's name.",
    },
    more: "'I' is the first person singular subject pronoun, and it is always a capital letter. The object form is 'me'. The other personal pronouns are you, he, she, it, we and they.",
    tip: "To check 'She and I' or 'her and me', take the other person out. 'I will present' sounds right; 'me will present' does not.",
  },
  'The ancient bridge groaned under the heavy lorry.': {
    why: "'Ancient' describes the noun 'bridge', telling us it is very old, so it is an adjective. It sits between 'The' and the noun it describes.",
    not: {
      Noun: "A noun names a person, place or thing. 'Bridge' is the noun; 'ancient' describes it.",
      Adverb:
        "An adverb tells you how an action happens. 'Ancient' describes the noun 'bridge', not the action 'groaned'.",
      Verb: "A verb is a doing word, like 'groaned'. 'Ancient' is not an action; it says what the bridge is like.",
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
    },
    more: "Verb test: change the tense. 'They marched' and 'they will march' both work, and a noun does not change like this. The same spelling is a noun in 'a long march', and a month's name, March.",
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
    },
    more: "Noun test: add 'the' or make it plural. 'The march' and 'marches' both work. Two nouns can sit together, as in 'protest march', where the first noun tells us about the second.",
    tip: "Noun pairs such as 'protest march' and 'school bus' are common. Put the describing noun first and the main noun last.",
  },
  'Neither answer was correct, so we tried again.': {
    why: "'Neither' comes before the noun 'answer' and means 'not one of the two', so it is a determiner. It limits the noun, as 'the' does.",
    not: {
      Pronoun:
        "'Neither' is a pronoun when it stands alone ('Neither was correct'). Here the noun 'answer' follows it, so it is a determiner.",
      Conjunction:
        "'Neither' also joins words in 'neither... nor', but here there is no 'nor'. It introduces the noun 'answer', so it is a determiner.",
      Adjective:
        "Older books call 'neither' an adjective. Today it is a determiner: it introduces the noun and limits it, rather than describing it as 'wrong' or 'easy' would.",
    },
    more: "'Neither' is for two things; use 'none' for more than two. It goes with a singular noun and verb here: 'Neither answer was correct', not 'were'.",
    tip: "'Neither answer was correct' is neat in formal writing. Make sure the verb agrees with the singular noun after 'neither'.",
  },
  'He whispered the secret, yet she heard every word.': {
    why: "'Yet' joins two clauses, 'He whispered the secret' and 'she heard every word', and means 'but'. It shows a surprising contrast, so it is a conjunction.",
    not: {
      Adverb:
        "'Yet' is often an adverb ('Is it ready yet?'). Here it joins two clauses and means 'but', so it is a conjunction.",
      Preposition:
        "A preposition goes before a noun phrase to show place or time. 'Yet' is followed by a whole clause, 'she heard every word'.",
      Determiner:
        "A determiner comes before a noun, like 'every' in 'every word'. 'Yet' introduces a whole clause.",
    },
    more: "'Yet' is a coordinating conjunction, like 'but'. Put a comma before it when it joins two full clauses. As an adverb it means 'so far' or 'until now': 'Has she arrived yet?'",
    tip: "'Yet' sounds more surprising than 'but'. Use it when the second clause is the opposite of what the reader expects.",
  },
  'The owl perched silently above the barn door.': {
    why: "'Silently' tells us how the owl perched, so it is an adverb: it describes the verb 'perched'.",
    not: {
      Adjective:
        "An adjective describes a noun. 'Silent' would describe the owl; 'silently' describes how it perched.",
      Verb: "A verb is a doing word, like 'perched'. 'Silently' describes the action; it is not the action.",
      Noun: "A noun names a person, place or thing, like 'owl' or 'door'. 'Silently' names nothing; it describes how the owl perched.",
    },
    more: "An adverb often goes straight after its verb ('perched silently') but can move: 'Silently, the owl perched above the barn door.' 'Above the barn door' says where; 'silently' says how.",
    tip: "Open a sentence with an adverb to build atmosphere, and put a comma after it: 'Silently, the owl perched...'",
  },
  'Our team trained hard before the regional final.': {
    why: "'Our' comes before the noun 'team' and shows whose team it is. The national curriculum lists possessives like this among the determiners, because they introduce a noun as 'the' does. Some books call them possessive pronouns.",
    not: {
      Adjective:
        "Older books call 'our' a possessive adjective. Today it is a determiner: it introduces the noun and comes before any adjectives, as in 'our new team'.",
      Noun: "A noun names a person, place or thing. 'Team' is the noun; 'Our' shows whose team it is.",
      Verb: "'Our' can sound like 'are', which is a verb, but they are different words. 'Our' shows whose team it is; 'trained' is the verb.",
    },
    more: "'Our' is a possessive determiner, like my, your and their. The forms that stand alone are different: yours, ours and theirs, as in 'The team is ours.'",
    tip: "Writers say 'our' to include the reader in 'us': 'our team', 'our school'. It builds a shared voice in speeches and persuasive writing.",
  },
  'The detective examined each clue with great care.': {
    why: "'Examined' is what the detective did to each clue, in the past tense, with 'each clue' as its object. A word that tells what someone did is a verb.",
    not: {
      Adjective:
        "An adjective describes a noun, like 'great' in 'great care'. 'Examined' is an action here, not a description.",
      Noun: "A noun names a person, place or thing, like 'detective' or 'clue'. 'Examined' names nothing; it tells what the detective did.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Examined' is the action itself.",
    },
    more: "Verb test: change the tense. 'Examined' becomes 'examines' or 'will examine'. The verb links the doer, 'The detective', to the thing it acted on, 'each clue'.",
    tip: "A specific verb does the work of several words. 'Examined' is more precise than 'looked at'.",
  },
  'A single candle flickered against the darkness.': {
    why: "'Against' links the flickering candle to 'the darkness', showing what it is set against. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Adverb:
        "An adverb stands alone to say how, when or where. 'Against' is followed by 'the darkness', so it is a preposition.",
      Conjunction:
        "A conjunction joins words or clauses, as 'or' and 'if' do. 'Against' links the candle to the darkness; it joins no clauses.",
      Adjective:
        "An adjective describes a noun, like 'single' in 'single candle'. 'Against' does not describe; it links.",
    },
    more: "'Against' can mean touching ('leaning against the wall'), opposing ('against the rules') or contrasting with a background, as here. The candle seems brighter because darkness surrounds it.",
    tip: "'Against' sets one thing in contrast with another: a light against darkness, a hero against the odds. Use it to build contrast in descriptions.",
  },
  'She handed the keys to him without a word.': {
    why: "'Him' stands in for a man or boy the reader already knows about, so the writer does not repeat the name. A word that takes the place of a noun is a pronoun.",
    not: {
      Noun: "A noun names a person, place or thing, like 'keys' or 'word'. 'Him' does not name anyone; it stands in for a name.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the keys'. 'Him' stands alone and introduces no noun.",
      Adjective:
        "An adjective describes a noun. 'Him' describes nothing; it takes a person's place.",
    },
    more: "'Him' is an object pronoun. Subject forms such as he and we go before a verb; object forms such as him, me and us follow a verb or a preposition: 'to him', 'with us'.",
    tip: "After a preposition, use the object form: 'to him', 'with you and me'. 'With you and I' is a common mistake.",
  },
  'The garden looked beautiful after the spring rain.': {
    why: "'Beautiful' describes the noun 'garden', saying how it looked, so it is an adjective. It follows the linking verb 'looked'.",
    not: {
      Adverb:
        "'Beautifully' would be an adverb. After a linking verb such as 'looked' we describe the garden itself, so we use the adjective 'beautiful'.",
      Noun: "A noun names a person, place or thing. 'Garden' is the noun; 'beautiful' says what it looked like.",
      Verb: "A verb is a doing or being word. The verb here is 'looked'. 'Beautiful' is not an action.",
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
    },
    more: "Noun test: 'a shelter', 'two shelters'. The same spelling is a verb in 'shelter from the storm', where it means to take cover. Many English words work as both noun and verb.",
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
    },
    more: "'Can' is a modal verb, and a modal is followed by the plain form of a verb: 'can shelter', 'will shelter'. A noun would not fit after 'can'. This verb has an object, 'you'.",
    tip: "'Shelter' can be a noun or a verb, so test it in the sentence. After 'can', only a verb fits: 'can shelter'.",
  },
  'He answered every question honestly and clearly.': {
    why: "'Honestly' tells us how he answered, so it is an adverb: it describes the verb 'answered'.",
    not: {
      Adjective:
        "An adjective describes a noun. 'Honest' would describe a person or an answer; 'honestly' describes how he answered.",
      Verb: "A verb is a doing word, like 'answered'. 'Honestly' describes the answering; it is not the action.",
      Noun: "A noun names a person, place or thing, like 'question'. 'Honestly' names nothing.",
    },
    more: "'Honestly' and 'clearly' are both adverbs, and both answer the question 'how did he answer'. Two adverbs of equal weight can be joined like this.",
    tip: 'Do not pile up adverbs. One or two precise ones, as here, are enough.',
  },
  'We sheltered beneath the bridge during the downpour.': {
    why: "'Beneath' shows where we sheltered, in relation to the bridge, with 'the bridge' after it. A word that links a noun phrase to the action by place is a preposition.",
    not: {
      Adverb:
        "An adverb can stand alone ('the water flowed beneath'). Here 'the bridge' follows, so 'beneath' is a preposition.",
      Conjunction:
        "A conjunction joins words or clauses, as 'or' and 'if' do. 'Beneath' links the action to a place; it joins no clauses.",
      Adjective:
        "An adjective describes a noun. 'Beneath' does not describe the bridge; it shows where we were.",
    },
    more: "'Beneath', 'below' and 'under' are close in meaning. 'Beneath' is a little more formal or literary. 'During' is also a preposition in this sentence, showing time instead of place.",
    tip: "Choose a formal or poetic preposition on purpose. 'Beneath the bridge' sounds more written than 'under the bridge'.",
  },
  'This map shows the safest route to the harbour.': {
    why: "'This' comes before the noun 'map' and points to which map, so it is a determiner. It stands in front of the noun it introduces.",
    not: {
      Pronoun:
        "'This' is a pronoun when it stands alone ('This is yours'). Here the noun 'map' follows it, so it is a determiner.",
      Adjective:
        "Older books call 'this' a demonstrative adjective. Today it is a determiner: it points to the noun and comes before any adjectives, as in 'this old map'.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'This' tells us which map.",
    },
    more: "'This' (near, one) and 'these' (near, many) are determiners when a noun follows, and pronouns when none does, as in 'This is yours'.",
    tip: "In an exam answer, write 'this map' or 'this detail', not just 'this'. A bare 'this' can leave the reader unsure what you mean.",
  },
  'The wind howled while the campers slept soundly.': {
    why: "'While' introduces the clause 'the campers slept soundly' and shows that it happened at the same time as the wind howled. A word that introduces a clause like this is a conjunction.",
    not: {
      Preposition:
        "A preposition goes before a noun phrase, like 'during the night'. 'While' goes before a whole clause with its own verb, 'slept'.",
      Noun: "A noun names a person, place or thing, like 'wind' or 'campers'. 'While' names nothing here; it joins two clauses.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Soundly' is the adverb here. 'While' joins 'the campers slept soundly' to 'The wind howled'.",
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
    },
    more: "Adjective test: 'The knight was brave' works. 'Trembling' is another adjective in this sentence, describing the villagers. Adjectives answer the question 'what kind'.",
    tip: "An adjective can show the writer's view. Calling the knight 'brave' invites the reader to admire him.",
  },
  'She quickly realised that something was wrong.': {
    why: "'Quickly' tells us how fast she realised, so it is an adverb: it describes the verb 'realised'.",
    not: {
      Adjective:
        "An adjective describes a noun. 'Wrong' is the adjective in this sentence. 'Quickly' describes the verb 'realised'.",
      Verb: "A verb is a doing or being word, like 'realised' or 'was'. 'Quickly' describes the realising; it is not the action.",
      Noun: "A noun names a person, place or thing. 'Quickly' names nothing; it describes how fast she realised.",
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
    },
    more: "Verb test: change the tense. 'Flows' becomes 'flowed' or 'will flow'. The -s on a present tense verb goes with one he, she or it: 'the river flows', but 'the rivers flow'.",
    tip: 'Check that the verb agrees with its subject: one river flows, two rivers flow. Agreement slips are easy to miss when you proofread.',
  },
  'Itself a mystery, the locked door fascinated them.': {
    why: "'Them' stands in for people the reader already knows about, so the writer does not repeat their names. A word that takes the place of nouns is a pronoun, and this one is the object of 'fascinated'.",
    not: {
      Noun: "A noun names a person, place or thing, like 'door'. 'Them' does not name anyone; it stands in for people.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the locked door'. No noun follows 'them', so it is a pronoun.",
      Adjective:
        "An adjective describes a noun, like 'locked'. 'Them' describes nothing; it stands for people.",
    },
    more: "'Them' is an object pronoun. Subject forms such as we and they go before a verb; object forms such as us and them come after a verb or a preposition. 'Itself' at the start is a pronoun too, pointing to the door.",
    tip: "Pronouns stop repetition, but make sure the reader knows who 'them' means. Name the people once before you replace them.",
  },
  'The mountain trail wound steeply between the cliffs.': {
    why: "'Between' shows where the trail wound, in relation to the cliffs, with 'the cliffs' after it. A word that links a noun phrase to the action by place is a preposition.",
    not: {
      Adverb:
        "An adverb tells you how, when or where, like 'steeply' here. 'Between' is followed by 'the cliffs', which makes it a preposition.",
      Conjunction:
        "A conjunction joins words or clauses, as 'or' and 'if' do. 'Between' links the trail to the cliffs by position; it joins no clauses.",
      Adjective:
        "An adjective describes a noun. 'Between' does not describe the cliffs; it shows where the trail went.",
    },
    more: "'Between' is used for two or more clearly separate things; 'among' suits a group: 'between the cliffs', 'among the trees'. It can also show time ('between nine and ten') or a link ('between friends').",
    tip: "In descriptions, 'between' can show a narrow route. A trail winding between cliffs feels tight and dangerous.",
  },
  'Several pupils volunteered to tidy the library.': {
    why: "'Several' comes before the noun 'pupils' and says how many, so it is a determiner. It is a quantifier, a word that gives an amount.",
    not: {
      Pronoun:
        "'Several' is a pronoun when it stands alone ('Several of them volunteered'). Here 'pupils' follows it, so it is a determiner.",
      Adjective:
        "Older books call 'several' an adjective. Today it is a determiner: it gives an amount and comes before any adjectives, as in 'several tired pupils'.",
      Noun: "A noun names a person, place or thing. 'Pupils' is the noun; 'Several' only says how many.",
    },
    more: "Quantifiers are determiners that give an amount before a noun: many animals, few people, several pupils. 'Several' means more than two but not a great many.",
    tip: "Choose a quantifier that fits what you mean: 'several' is more than a couple, 'many' is a lot, 'few' is hardly any.",
  },
  'The thunder rumbled because the storm was near.': {
    why: "'Because' introduces the clause 'the storm was near' and gives the reason the thunder rumbled. A word that introduces a reason clause is a conjunction.",
    not: {
      Preposition:
        "A preposition goes before a noun phrase ('because of the storm'). 'Because' alone goes before a clause with its own verb, 'was'.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Because' tells us why, by joining two clauses.",
      Determiner:
        "A determiner comes before a noun, like 'the' in 'the storm'. 'Because' introduces a whole clause.",
    },
    more: "'Because' is a subordinating conjunction of reason. A clause starting with it needs a main clause too: 'Because the storm was near.' is not a full sentence on its own.",
    tip: "Use 'because' to explain, which earns marks in exam answers. Make a point, then say why with 'because'.",
  },
  'He polished the trophy until it gleamed brightly.': {
    why: "'Brightly' tells us how it gleamed, so it is an adverb: it describes the verb 'gleamed'.",
    not: {
      Adjective:
        "An adjective describes a noun. 'Bright' would describe the trophy; 'brightly' describes how it gleamed.",
      Verb: "A verb is a doing word, like 'polished' or 'gleamed'. 'Brightly' is not an action; it describes one.",
      Noun: "A noun names a person, place or thing, like 'trophy'. 'Brightly' names nothing; it describes how it gleamed.",
    },
    more: "Adverbs can describe verbs, as here, but also adjectives ('very bright') and other adverbs ('quite brightly'). Test: an adverb often answers 'how?' about the verb.",
    tip: 'A strong adverb can show the result of effort: he polished the trophy until it gleamed brightly. Use it to show what an action achieved.',
  },
  'A clever solution saved the entire experiment.': {
    why: "'Clever' describes the noun 'solution', saying it showed skill and good thinking, so it is an adjective. It sits between 'A' and the noun.",
    not: {
      Adverb:
        "An adverb tells you how an action happens. 'Cleverly' would describe how something was done; 'clever' describes the noun 'solution'.",
      Noun: "A noun names a person, place or thing, like 'solution' or 'experiment'. 'Clever' describes the solution.",
      Verb: "A verb is a doing word, like 'saved'. 'Clever' is not an action; it says what kind of solution.",
    },
    more: "'Clever' becomes an adverb with -ly ('cleverly'). It is an adjective after 'was' too: 'The solution was clever'. 'Entire' is the other adjective here, describing 'experiment'.",
    tip: "Match the adjective to the point you are making. 'Clever' praises the thinking; 'quick' would praise the speed.",
  },
  'The author signed each book for the eager readers.': {
    why: "'Signed' is what the author did to each book, in the past tense, with 'each book' as its object. A word that tells what someone did is a verb.",
    not: {
      Adjective:
        "'Signed' can be an adjective ('a signed photo'). Here it is what the author did to each book, so it is a verb.",
      Noun: "A noun names a person, place or thing, like 'author' or 'book'. 'Signed' names nothing; it tells what the author did.",
      Adverb:
        "An adverb tells you how, when or where something happens. 'Signed' is the action itself.",
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
    },
    more: "Noun test: 'the exit', 'two exits'. The same spelling is a verb in 'exit by the side door'. Always decide from the job the word does in the sentence.",
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
    },
    more: "Verb test: 'exit' can change tense: 'exited', 'will exit'. It also has an object, 'the building'. A command like this starts with a verb, and its subject, 'you', is understood.",
    tip: "In notices and instructions, start with a verb: 'Exit calmly', 'Keep clear'. It is short, and it gets people to act.",
  },
  'If she wounds you, love her.': {
    why: "'Her' stands for Estella and is the object of the verb 'love'. No noun follows it, so it is not showing whose something is: it takes the place of a noun, which makes it a pronoun.",
    not: {
      Determiner:
        "'Her' is a determiner when a noun follows and it shows whose, as in 'her heart'. Here nothing follows: it is the object of 'love'.",
      Noun: "A noun would name her: 'Estella'. 'Her' stands in for the name.",
      Adjective:
        "An adjective describes a noun. 'Her' describes nothing here; it is the person to be loved.",
    },
    more: "'Her' has two jobs: before a noun it shows whose ('her heart'), and on its own it is the object of a verb, as here. Miss Havisham repeats the order fiercely: Pip must love Estella whatever it costs him.",
    tip: "Ask whether a noun follows. 'Her book': it shows whose. 'Love her': it stands alone, so it is a pronoun.",
  },
  'The explorers travelled far across the frozen plain.': {
    why: "'Across' shows the direction of travel, in relation to the plain, with 'the frozen plain' after it. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Adverb:
        "'Across' can be an adverb when nothing follows ('They walked across'). Here 'the frozen plain' follows, so it is a preposition. 'Far' is the adverb here.",
      Conjunction:
        "A conjunction joins words or clauses, as 'or' and 'if' do. 'Across' links the journey to the plain; it joins no clauses.",
      Adjective:
        "An adjective describes a noun, like 'frozen' in 'frozen plain'. 'Across' does not describe the plain; it shows where they travelled.",
    },
    more: "Prepositions of movement show how something travels: across (from side to side), along, over, into, towards. 'Across the plain' suggests a long, open journey.",
    tip: "Choose your preposition to set the scale. 'Across the plain' feels wide and open; 'along a narrow lane' feels hemmed in.",
  },
  'Old Benjamin, the donkey, seemed quite unchanged since the Rebellion.': {
    why: "'Since' is followed by a noun phrase, 'the Rebellion', with no verb of its own. A word that links a noun phrase to the rest of the sentence like this is a preposition.",
    not: {
      Conjunction:
        "'Since' is a conjunction when a whole clause, with its own verb, follows it. Here only a noun phrase follows: 'the Rebellion'.",
      Adverb:
        "'Since' is an adverb when nothing follows it, as in 'I have not seen him since'. Here it has a noun phrase after it.",
      Determiner:
        "A determiner comes straight before a noun, as 'the' does here. 'Since' introduces the whole phrase 'the Rebellion'.",
    },
    more: "One word, three classes: 'since the war' (preposition), 'since the war ended' (conjunction), 'I have not seen her since' (adverb). What follows decides.",
    tip: 'Test words like this one by what comes next: a noun phrase means preposition, a clause means conjunction, nothing at all means adverb.',
  },
  'The birds at first objected, since it seemed to them that they also had two legs, but Snowball proved to them that this was not so.':
    {
      why: "'Since' starts a clause with its own verb, 'it seemed to them...', and gives the reason the birds objected. Here it means 'because', and a word that introduces a clause like this is a conjunction.",
      not: {
        Preposition:
          "A preposition is followed by a noun phrase. Here 'since' is followed by a whole clause with its own verb: 'it seemed'.",
        Adverb:
          "'Since' is an adverb only when it stands alone, as in 'ever since'. Here it joins a clause to the sentence.",
        Pronoun:
          "A pronoun stands in for a noun. 'It' is the pronoun here; 'since' links the clause to what the birds did.",
      },
      more: "'Since' can mean 'from that time' or 'because'. Here it is 'because': the birds object because they too have two legs.",
    },
  'I have never been here since.': {
    why: "Nothing follows 'since': it ends the sentence and means 'since then', from that time to now. A word that tells when, with no noun or clause after it, is an adverb.",
    not: {
      Preposition:
        "A preposition needs a noun phrase after it, as in 'since that day'. Here 'since' has nothing after it.",
      Conjunction:
        "A conjunction joins on a clause, as in 'since she left'. Here no clause follows.",
      Noun: "'Since' never names a thing. Here it tells you when.",
    },
    more: "Pip has asked Estella whether she often comes back to Satis House, where they first met. Her answer, and his 'Nor I', show that both have stayed away.",
  },
  'But before he shut his heavy door, he walked through his rooms to see that all was right.': {
    why: "'Before' starts a clause with its own subject and verb, 'he shut his heavy door', and joins it to the main clause. A word that introduces a clause like this is a conjunction.",
    not: {
      Preposition:
        "'Before' is a preposition when a noun phrase follows, as in 'before midnight'. Here a clause follows: 'he shut'.",
      Adverb:
        "'Before' is an adverb when it stands alone, as in 'I have been here before'. Here it introduces a clause.",
      Determiner:
        "A determiner introduces a noun, as 'his' introduces 'door'. 'Before' introduces a whole clause.",
    },
    more: 'Scrooge checks his rooms after seeing Marley’s face in the door knocker. The clause of time slows the moment down before the ghost appears.',
  },
  'and sat down before the fire to take his gruel': {
    why: "'Before' is followed by a noun phrase, 'the fire', and shows where Scrooge sat: in front of it. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Conjunction:
        "A conjunction would be followed by a clause with its own verb. Here only 'the fire' follows.",
      Adverb: "'Before' is an adverb when nothing follows it. Here it has a noun phrase after it.",
      Adjective:
        "An adjective describes a noun. 'Before' does not describe the fire; it says where Scrooge sat.",
    },
    more: "Here 'before' means 'in front of', a place, not a time. The same preposition does both jobs.",
  },
  'I shall satiate my ardent curiosity with the sight of a part of the world never before visited':
    {
      why: "'Never before visited' means never visited until now. 'Before' has no noun or clause after it; with 'never', it tells when, so it is an adverb.",
      not: {
        Preposition:
          "A preposition needs a noun phrase after it. Here 'before' is followed by 'visited', a verb form, not a noun.",
        Conjunction:
          "A conjunction joins a clause. 'Visited' alone is not a clause with its own subject.",
        Adjective:
          "An adjective describes a noun. 'Before' here goes with 'never' to say when, not what kind.",
      },
      more: 'Satiate means to satisfy fully, and ardent means burning or eager. Walton longs to see places no one has seen.',
    },
  'After he had been employed thus about an hour, the young woman joined him, and they entered the cottage together.':
    {
      why: "'After' starts a clause with its own subject and verb, 'he had been employed', and joins it to the main clause. A word that introduces a clause like this is a conjunction.",
      not: {
        Preposition:
          "'After' is a preposition when a noun phrase follows, as in 'after an hour'. Here a clause follows.",
        Adverb:
          "'After' is an adverb when it stands alone, as in 'soon after'. Here it introduces a clause.",
        Determiner: "A determiner introduces a noun. 'After' introduces a whole clause.",
      },
    },
  'It happened that Jessie and Bluebell had both whelped soon after the hay harvest, giving birth between them to nine sturdy puppies.':
    {
      why: "'After' is followed by a noun phrase, 'the hay harvest', with no verb of its own. A word that links a noun phrase to the rest of the sentence is a preposition.",
      not: {
        Conjunction:
          "A conjunction would be followed by a clause, as in 'after the sun had set'. Here only a noun phrase follows.",
        Adverb:
          "'After' is an adverb when nothing follows it. Here it has 'the hay harvest' after it.",
        Adjective:
          "An adjective describes a noun. 'After' does not describe the harvest; it says when.",
      },
      more: 'These nine puppies matter: Napoleon takes them away and secretly trains them as his guard dogs.',
    },
  'We, however, lay to until the morning, fearing to encounter in the dark those large loose masses which float about after the breaking up of the ice.':
    {
      why: "'Until' is followed by a noun phrase, 'the morning', with no verb of its own. A word that links a noun phrase to the action like this is a preposition.",
      not: {
        Conjunction:
          "'Until' is a conjunction when a clause follows, as in 'until the sun rose'. Here only 'the morning' follows.",
        Adverb: "An adverb would stand alone. 'Until' has a noun phrase after it.",
        Determiner:
          "A determiner comes straight before a noun, as 'the' does. 'Until' introduces the phrase.",
      },
      more: 'To lie to is a sailing term: to stop the ship. Walton waits for daylight rather than risk the ice.',
    },
  'As a child, I had not been content with the results promised by the modern professors of natural science.':
    {
      why: "'As' is followed by a noun phrase, 'a child', with no verb of its own. A word that links a noun phrase to the sentence like this is a preposition: 'as a child' says at what age, or in what role, Victor felt this.",
      not: {
        Conjunction:
          "'As' is a conjunction when a clause follows, as in 'as I grew up'. Here only 'a child' follows.",
        Adverb:
          "'As' is an adverb in 'as tall as', where it shows degree. Here it introduces a noun phrase.",
        Determiner:
          "'A' is the determiner here, introducing 'child'. 'As' comes before the whole phrase.",
      },
    },
  "He took the toasting-fork and sausage from me as he spoke, and set forth the Aged's breakfast neatly on a little tray.":
    {
      why: "'As' starts a clause with its own subject and verb, 'he spoke', and means 'while'. A word that introduces a clause like this is a conjunction.",
      not: {
        Preposition:
          "'As' is a preposition when a noun phrase follows, as in 'as a child'. Here a clause follows: 'he spoke'.",
        Adverb: "'As' is an adverb in 'as fast as', where it shows degree. Here it joins a clause.",
        Pronoun: "'He' is the pronoun here. 'As' links his speaking to his taking the fork.",
      },
      more: 'The Aged is Wemmick’s deaf old father. Dickens shows Wemmick’s tenderness through small actions like this one.',
    },
  'I wept like a child.': {
    why: "'Like' is followed by a noun phrase, 'a child', and compares how Victor wept. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Verb: "'Like' is a verb when it means to enjoy, as in 'I like apples'. Here it compares: wept like a child.",
      Conjunction: "A conjunction would join a clause. Only a noun phrase follows 'like' here.",
      Adjective:
        "An adjective describes a noun. 'Like' links 'a child' to 'wept'; it describes nothing itself.",
    },
    more: "A comparison with 'like' is a simile. Grammatically, 'like' in a simile is a preposition.",
  },
  'Before the fire goes out, Joe, I should like to tell you something.': {
    why: "'Should like' means 'would like': want. 'Like' follows 'should' and takes 'to tell', so it is a verb, the action of wanting.",
    not: {
      Preposition:
        "'Like' is a preposition when it compares, as in 'like a child'. Here it means want, an action.",
      Conjunction: "'Like' does not join anything here. It is the verb of wanting.",
      Noun: "'Like' can be a noun, as in 'likes and dislikes', but after 'should' only a verb fits.",
    },
    more: "Pip is about to confess his lie about Miss Havisham's house. 'Before the fire goes out' gives him a moment to gather courage.",
  },
  "Napoleon was so gratified that he left his place and came round the table to clink his mug against Mr. Pilkington's before emptying it.":
    {
      why: "'Round' is followed by a noun phrase, 'the table', and shows the path Napoleon took. A word that links a noun phrase to the action like this is a preposition.",
      not: {
        Adverb:
          "'Round' is an adverb when nothing follows, as in 'he turned round'. Here 'the table' follows.",
        Adjective: "'Round' is an adjective in 'a round face'. Here it does not describe a noun.",
        Noun: "'Round' is a noun in 'a round of golf'. Here it shows movement around the table.",
      },
      more: 'Napoleon clinks mugs with a human farmer he once called an enemy. The pigs have become the humans the animals rebelled against.',
    },
  'When he came to the low church wall, he got over it, like a man whose legs were numbed and stiff, and then turned round to look for me.':
    {
      why: "'Turned round' has nothing after 'round': it says which way he turned. A word that adds to a verb like this, with no noun after it, is an adverb.",
      not: {
        Preposition:
          "A preposition needs a noun phrase after it, as in 'round the corner'. Here 'round' has none.",
        Adjective:
          "An adjective describes a noun, as in 'a round stone'. Here 'round' goes with the verb 'turned'.",
        Noun: "'Round' names nothing here. It tells how he turned.",
      },
    },
  'some workmen came past the door bound for his restaurant': {
    why: "'Past' is followed by a noun phrase, 'the door', and shows where the workmen went. A word that links a noun phrase to the action like this is a preposition.",
    not: {
      Noun: "'Past' is a noun in 'the past', meaning time gone by. Here it shows movement by the door.",
      Adjective: "'Past' is an adjective in 'the past week'. Here it does not describe a noun.",
      Adverb:
        "'Past' is an adverb when nothing follows, as in 'a car drove past'. Here 'the door' follows.",
    },
  },
  'Nowadays they did not sit all together as they had done in the past.': {
    why: "'The past' names a time, the days gone by. It follows 'the' and is the object of 'in', so it is a noun.",
    not: {
      Preposition:
        "'Past' is a preposition when a noun follows it, as in 'past the door'. Here it is the noun after 'the'.",
      Adjective:
        "An adjective would describe a noun, as in 'the past week'. Here no noun follows 'past'.",
      Adverb:
        "An adverb would go with a verb, as in 'walked past'. Here 'past' is the thing named.",
    },
    more: 'The animals used to meet as equals. Now the pigs sit apart, a sign of the changes Orwell traces chapter by chapter.',
  },
  'The pigs now revealed that during the past three months they had taught themselves to read and write from an old spelling book':
    {
      why: "'Past' describes the noun phrase 'three months', telling which months: the ones just gone. A word that describes a noun is an adjective.",
      not: {
        Noun: "'Past' is a noun in 'the past'. Here a noun, 'months', follows and 'past' describes it.",
        Preposition:
          "A preposition links a noun to an action, as in 'walked past the house'. Here 'past' describes the months.",
        Adverb: "An adverb goes with a verb. 'Past' here goes with the noun 'months'.",
      },
    },
  'Snowball climbed up and set to work, with Squealer a few rungs below him holding the paint-pot.':
    {
      why: "Nothing follows 'up': 'climbed up' says which way Snowball climbed. A word that adds to a verb like this, with no noun after it, is an adverb.",
      not: {
        Preposition:
          "'Up' is a preposition when a noun phrase follows, as in 'up the ladder'. Here 'and' follows instead.",
        Adjective: "An adjective describes a noun. 'Up' goes with the verb 'climbed'.",
        Verb: "'Climbed' is the verb. 'Up' adds the direction.",
      },
    },
  'I felt no fear, only a wild, trembling exultation, as I ran up the hill towards the motionless monster.':
    {
      why: "'Up' is followed by a noun phrase, 'the hill', and shows where the narrator ran. A word that links a noun phrase to the action like this is a preposition.",
      not: {
        Adverb:
          "'Up' is an adverb when nothing follows, as in 'he looked up'. Here 'the hill' follows.",
        Adjective:
          "An adjective describes a noun. 'Up' does not describe the hill; it shows the direction of running.",
        Conjunction: "A conjunction joins a clause. 'Up' introduces only a noun phrase.",
      },
      more: 'Exultation is wild joy. The monster is motionless because the Martians are dying, and the narrator is about to find out.',
    },
  'Old Fezziwig laid down his pen, and looked up at the clock, which pointed to the hour of seven.':
    {
      why: "'Laid down his pen' means put his pen down. 'His pen' is the object of the verb, not of 'down', so 'down' adds to the verb: an adverb.",
      not: {
        Preposition:
          "In 'down the stairs', 'down' is a preposition with a noun phrase after it. Here 'his pen' is what he laid, not where.",
        Adjective:
          "An adjective describes a noun, as in 'a down payment'. Here 'down' goes with the verb 'laid'.",
        Noun: "'Down' is a noun for soft feathers. Here it tells how he laid the pen.",
      },
      tip: "Test it: you can say 'laid his pen down', moving 'down' to the end. An adverb can move like that; a preposition cannot.",
    },
  'We hope to visit the castle again in the near future.': {
    why: "'Near' describes the noun 'future', saying which future: one coming soon. A word that describes a noun is an adjective.",
    not: {
      Preposition:
        "'Near' is a preposition in 'near the castle', with a noun phrase after it. Here it describes a noun.",
      Adverb: "'Near' is an adverb in 'come near'. Here it sits between 'the' and a noun.",
      Verb: "'Near' can be a verb, as in 'as we neared the shore'. Here it describes 'future'.",
    },
  },
  'Come inside quickly: it is starting to rain.': {
    why: "Nothing follows 'inside': 'come inside' says where to come. A word that adds where to a verb, with no noun after it, is an adverb.",
    not: {
      Preposition:
        "'Inside' is a preposition in 'inside the house'. Here no noun phrase follows it.",
      Noun: "'Inside' is a noun in 'the inside of the box'. Here it goes with the verb 'come'.",
      Adjective: "'Inside' is an adjective in 'the inside lane'. Here it does not describe a noun.",
    },
  },
  'That night there came from the farmhouse the sound of loud singing': {
    why: "'That' comes straight before the noun 'night' and points to which night. A word that introduces a noun like this is a determiner.",
    not: {
      Pronoun:
        "'That' is a pronoun when it stands alone, as in 'That is mine'. Here it has a noun after it: 'night'.",
      Conjunction:
        "'That' is a conjunction when it introduces a clause, as in 'I knew that he lied'. Here it introduces a noun.",
      Adverb: "'That' can be an adverb in speech, as in 'not that far'. Here it points to a noun.",
    },
    more: "'That' has four jobs: determiner (that night), pronoun (that is true), conjunction (I said that I would) and relative pronoun (the song that they sang).",
  },
  'That is hot ice and wondrous strange snow.': {
    why: "'That' stands alone as the subject of 'is': it stands for the strange play title Theseus has just read. A word that takes the place of a noun is a pronoun.",
    not: {
      Determiner:
        "'That' is a determiner when a noun follows, as in 'that title'. Here a verb, 'is', follows.",
      Conjunction:
        "A conjunction would join a clause to another. 'That' here begins the sentence as its subject.",
      Adverb:
        "An adverb would describe a verb or an adjective. 'That' is the thing being talked about.",
    },
    more: "Theseus mocks a title that calls the play both merry and tragic: as impossible as hot ice. 'Hot ice' is an oxymoron, two opposites together.",
  },
  'Once again some of the animals heard this with a certain bewilderment, but Squealer was soon able to convince them that their memories had been at fault.':
    {
      why: "'That' introduces a whole clause, 'their memories had been at fault', and joins it to 'convince them'. A word that joins a clause on like this is a conjunction.",
      not: {
        Pronoun:
          "'That' would be a pronoun if it stood for a thing. Here it introduces what Squealer convinced them of.",
        Determiner:
          "'That' would be a determiner before a noun, as in 'that memory'. Here a clause follows.",
        Adverb:
          "An adverb describes a verb or an adjective. 'That' links a clause to the sentence.",
      },
      more: 'Orwell repeats the pattern: the animals remember, Squealer convinces them they are wrong. The joining word carries the lie into their heads.',
    },
  'But of all their controversies, none was so bitter as the one that took place over the windmill.':
    {
      why: "'That' stands for 'the one', the controversy, and is the subject of 'took place'. A word that links a clause back to a noun and stands for it is a relative pronoun.",
      not: {
        Conjunction:
          "A conjunction only joins. This 'that' also stands for a noun, 'the one', and is the subject of its own clause: so it is a pronoun.",
        Determiner:
          "A determiner comes before a noun. Here 'that' comes after the noun it refers to.",
        Adverb: "An adverb describes a verb or adjective. 'That' here stands for the controversy.",
      },
      more: 'A relative pronoun does two jobs at once: it joins a clause to a noun, and it stands for that noun inside the clause.',
    },
  'As she is mine I may dispose of her;': {
    why: "'Mine' stands alone for 'my daughter' and shows ownership. A word that stands in for a noun phrase like this is a possessive pronoun.",
    not: {
      Determiner:
        "'My' is the determiner, used before a noun, as in 'my daughter'. 'Mine' stands alone.",
      Noun: "'Mine' is a noun when it names a pit for coal or gold. Here it means 'belonging to me'.",
      Adjective: "An adjective describes a noun. 'Mine' takes the place of one.",
    },
    more: 'Egeus claims Hermia as his property under Athenian law. The possessive pronoun shows how he sees his daughter.',
  },
  'A very different sort of mind was hers from that, for instance, of the sisters of St. John.': {
    why: "'Hers' stands alone for 'her mind' and shows whose it is. A word that stands in for a noun phrase like this is a possessive pronoun.",
    not: {
      Determiner:
        "A determiner comes before a noun, as 'my' does in 'my mind'. 'Hers' stands alone.",
      Noun: "'Hers' names nothing itself. It stands in for 'her mind'.",
      Adjective: "An adjective describes a noun. 'Hers' replaces one.",
    },
    more: 'Possessive pronouns such as yours, ours and theirs stand alone in the same way, and none of them takes an apostrophe.',
  },
  'They now walked on in silence; each of them deep in thought.': {
    why: "'Each' stands alone, followed by 'of them', and means each one of the two. A word that stands in for a noun like this is a pronoun.",
    not: {
      Determiner:
        "'Each' is a determiner when a noun follows directly, as in 'each walk'. Here 'of them' follows.",
      Adverb:
        "'Each' can be an adverb in 'two apples each'. Here it is the subject of the second part.",
      Adjective: "An adjective describes a noun. 'Each' stands for the people.",
    },
    tip: "Test for determiner or pronoun: does a noun follow straight away? 'Each day' is a determiner; 'each of us' is a pronoun.",
  },
  'At this some of the other animals murmured, but it was no use.': {
    why: "'Some' stands alone, followed by 'of the other animals', and is the subject of 'murmured'. A word that stands in for a noun like this is a pronoun.",
    not: {
      Determiner:
        "'Some' is a determiner when a noun follows directly, as in 'some animals'. Here 'of' follows.",
      Adverb:
        "'Some' can be an adverb before a number, meaning about, as in 'some fifty years ago'. Here it is the subject.",
      Adjective: "An adjective describes a noun. 'Some' stands in for the animals.",
    },
    more: 'The animals murmur when the pigs keep the milk and apples, but it is no use. Orwell shows protest fading at its first try.',
  },
  'An involuntary shudder passed over both of us.': {
    why: "'Both' stands alone, followed by 'of us', and is the object of 'over'. A word that stands in for a noun like this is a pronoun.",
    not: {
      Determiner: "'Both' is a determiner before a noun, as in 'both boys'. Here 'of us' follows.",
      Conjunction:
        "'Both' is part of a pair of conjunctions in 'both Pip and Herbert'. Here it stands alone.",
      Adverb:
        "An adverb tells how, when or where. 'Both' here follows a preposition, 'over', and stands for the two of them, as a pronoun does.",
    },
  },
  "All of them came to look at Snowball's drawings at least once a day.": {
    why: "'All' stands alone, followed by 'of them', and is the subject of 'came'. A word that stands in for a noun like this is a pronoun.",
    not: {
      Determiner:
        "'All' is a determiner before a noun, as in 'all the animals'. Here 'of them' follows.",
      Adverb: "'All' is an adverb in 'all alone', meaning completely. Here it is the subject.",
      Noun: "'All' can be a noun in 'gave his all'. Here it stands in for the animals.",
    },
  },
  'What time does the last train leave?': {
    why: "'What' comes straight before the noun 'time' and asks which time. A word that introduces a noun like this is a determiner.",
    not: {
      Pronoun:
        "'What' is a pronoun when it stands alone, as in 'What happened?'. Here a noun follows it.",
      Adverb: "An adverb describes a verb or adjective. 'What' introduces the noun 'time'.",
      Conjunction: "'What' does not join two clauses here. It asks about the noun.",
    },
  },
  'Which road leads to the old mill?': {
    why: "'Which' comes straight before the noun 'road' and asks which of several roads. A word that introduces a noun like this is a determiner.",
    not: {
      Pronoun:
        "'Which' is a pronoun when it stands alone, as in 'Which is yours?', or begins a relative clause. Here a noun follows.",
      Conjunction: "'Which' does not join two clauses here. It asks about the road.",
      Adjective:
        "Some older books call it an adjective, but today 'which' before a noun is a determiner, like 'this' or 'every'.",
    },
  },
  'Quite satisfied, he closed his door, and locked himself in; double-locked himself in, which was not his custom.':
    {
      why: "'Himself' stands for Scrooge, the same person as the subject 'he', and is the object of 'locked'. A word that points back to the subject like this is a reflexive pronoun.",
      not: {
        Determiner:
          "A determiner comes before a noun, as 'his' does in 'his door'. 'Himself' stands alone.",
        Noun: "'Himself' names nobody new. It refers back to 'he'.",
        Adverb: "'In' is the adverb that tells where. 'Himself' is who is locked in.",
      },
      more: "Scrooge double-locks his door, 'which was not his custom': after seeing Marley's face, he is more afraid than he will admit.",
    },
  'There was only one candidate, Napoleon, who was elected unanimously.': {
    why: "'One' comes straight before the noun 'candidate' and tells how many. A number before a noun is a determiner.",
    not: {
      Pronoun:
        "'One' is a pronoun when it stands alone, as in 'I lost my pen, so I borrowed one'. Here a noun follows.",
      Noun: "'One' can be a noun when it names the number itself, as in 'a one and a zero'. Here it counts the candidates.",
      Adverb:
        "An adverb would describe a verb, an adjective or a whole phrase. 'One' comes straight before the noun and counts it.",
    },
    more: "Orwell's dry joke: an election with one candidate, won 'unanimously'. The numbers expose the sham.",
  },
  'Miss Havisham was an only child?': {
    why: "'Only' sits between 'an' and the noun 'child' and describes it: a child with no brothers or sisters. A word that describes a noun like this is an adjective.",
    not: {
      Adverb:
        "'Only' is usually an adverb, as in 'only once'. Here it describes the noun 'child', so it is an adjective.",
      Determiner: "'An' is the determiner here. 'Only' comes after it and describes the noun.",
      Noun: "'Child' is the noun. 'Only' tells you something about the child.",
    },
  },
  'He had, he said, only one real ambition left': {
    why: "'Only' limits the number: no more than one ambition. It goes with the number, not with a noun, so it is an adverb.",
    not: {
      Adjective:
        "'Only' is an adjective in 'an only child', where it describes a noun. Here it limits the number 'one'.",
      Determiner:
        "'One' is the determiner, before 'real ambition'. 'Only' comes before it and limits it.",
      Conjunction: "'Only' does not join clauses here. It limits a number.",
    },
    more: "Boxer's one ambition is to see the windmill well under way before he retires. Readers who know what happens next feel the sadness in 'only'.",
  },
  'Even the horses and the dogs have no better fate.': {
    why: "'Even' adds emphasis to 'the horses and the dogs': surprisingly, these too. It does not describe a noun or name anything, so it is an adverb.",
    not: {
      Adjective:
        "'Even' is an adjective in 'an even number' or 'an even road'. Here it adds emphasis.",
      Determiner: "'The' is the determiner, before 'horses'. 'Even' comes before the whole phrase.",
      Conjunction: "'Even' does not join two parts. 'And' is the conjunction here.",
    },
  },
  'The soup was so hot that I burned my tongue.': {
    why: "'So' makes the adjective 'hot' stronger: how hot? So hot. A word that adds to an adjective like this is an adverb.",
    not: {
      Conjunction:
        "'So' is a conjunction when it joins two clauses, as in 'It was late, so we left'. Here it goes with 'hot'.",
      Adjective: "'Hot' is the adjective. 'So' tells you how hot.",
      Pronoun: "'So' stands in for no noun here. It strengthens 'hot'.",
    },
  },
  'She had finished her breakfast, so I permitted her to give a specimen of her accomplishments.': {
    why: "'So' joins two clauses, 'She had finished her breakfast' and 'I permitted her...', and shows that the second follows from the first. A joining word like this is a conjunction.",
    not: {
      Adverb:
        "'So' is an adverb in 'so hungry', where it strengthens an adjective. Here it joins two clauses.",
      Preposition:
        "A preposition is followed by a noun phrase. 'So' is followed by a whole clause, 'I permitted her'.",
      Pronoun: "'She' and 'I' are the pronouns here. 'So' links the two clauses.",
    },
    more: "Jane is Adèle's new governess. With breakfast over, she lets Adèle show off the songs her mother taught her.",
  },
  '"To the office," said I, for he was tending in that direction.': {
    why: "'For' starts a clause with its own subject and verb, 'he was tending', and means 'because'. A word that joins a clause on like this is a conjunction.",
    not: {
      Preposition:
        "'For' is usually a preposition, as in 'for you', with a noun after it. Here a clause follows.",
      Adverb: "'For' does not describe a verb here. It gives a reason.",
      Determiner:
        "A determiner comes before a noun. 'For' comes before a whole clause, with its own subject and verb.",
    },
    more: "'For' meaning 'because' sounds old-fashioned now, but it is still correct, and older novels use it often.",
  },
  'Is the bakery still open at this time?': {
    why: "'Still' means 'even now' and tells when the bakery is open. A word that adds time to the rest of the sentence like this is an adverb.",
    not: {
      Adjective:
        "'Still' is an adjective when it means not moving, as in 'still water'. Here it means even now.",
      Noun: "'Still' can be a noun, as in 'a still from a film'. Here it tells when.",
      Verb: "'Still' can be a verb, to calm, as in 'still the storm'. Here 'is' is the verb.",
    },
  },
  'The ground was hard, the air was still': {
    why: "'Still' follows 'was' and describes the air: calm, with no wind. A describing word after a verb such as 'was' is an adjective.",
    not: {
      Adverb:
        "'Still' is an adverb when it means even now, as in 'still open'. Here it describes the air.",
      Noun: "'Air' is the noun. 'Still' says what the air was like.",
      Verb: "'Was' is the verb. 'Still' describes the air.",
    },
    more: "Jane is walking to Hay on a frosty afternoon. The still air comes just before Rochester's horse breaks the silence of the lane.",
    tip: 'Writers use a still scene before something happens. A stillness in the air builds tension.',
  },
  'The relations between Napoleon and Pilkington, though they were only conducted through Whymper, were now almost friendly.':
    {
      why: "'Friendly' describes the relations after the verb 'were'. It ends in -ly but describes a noun, so it is an adjective.",
      not: {
        Adverb:
          "Many -ly words are adverbs, but not all. 'Friendly' describes the relations, a noun, so it is an adjective.",
        Noun: "'Relations' is the noun. 'Friendly' says what they were like.",
        Verb: "'Were' is the verb. 'Friendly' describes.",
      },
      more: 'Friendly, ugly, silly and costly all end in -ly and are adjectives. Do not trust the ending: ask what the word describes.',
    },
  'I doubt if a ghost could have been more terrible to me, up in those lonely rooms in the long evenings and long nights, with the wind and the rain always rushing by.':
    {
      why: "'Lonely' sits between 'those' and the noun 'rooms' and describes them. It ends in -ly, but it describes a noun, so it is an adjective.",
      not: {
        Adverb:
          "An adverb would describe how something is done. 'Lonely' describes the rooms, a noun.",
        Noun: "'Rooms' is the noun. 'Lonely' says what they were like.",
        Verb: "There is no action in 'lonely'. It describes.",
      },
      more: 'Pip is alone in his rooms with the convict he fears. The lonely rooms and the wind make the setting match his mood.',
    },
  'A lovely boy, stol’n from an Indian king;': {
    why: "'Lovely' sits between 'A' and the noun 'boy' and describes him. It ends in -ly, but it describes a noun, so it is an adjective.",
    not: {
      Adverb: "An adverb would say how an action is done. 'Lovely' describes the boy.",
      Noun: "'Boy' is the noun. 'Lovely' describes him.",
      Verb: "There is no action in 'lovely'. 'Stol’n' is the verb form here.",
    },
  },
  'That being the name I wanted, I knocked, and an elderly woman of a pleasant and thriving appearance responded.':
    {
      why: "'Elderly' sits between 'an' and the noun 'woman' and describes her: fairly old. It ends in -ly, but it describes a noun, so it is an adjective.",
      not: {
        Adverb: "An adverb would say how she responded. 'Elderly' describes the woman.",
        Noun: "'The elderly' can be a noun phrase, but here a noun, 'woman', follows and 'elderly' describes it.",
        Pronoun: "A pronoun stands in for a noun. 'Elderly' describes one.",
      },
      tip: "Elderly is a polite word for old. In descriptions, it is gentler than 'old' and kinder than 'aged'.",
    },
  'A ghastly grin wrinkled his lips as he gazed on me, where I sat fulfilling the task which he had allotted to me.':
    {
      why: "'Ghastly' sits between 'A' and the noun 'grin' and describes it: horrible to see. It ends in -ly, but it describes a noun, so it is an adjective.",
      not: {
        Adverb: "An adverb would say how he grinned. 'Ghastly' describes the grin itself.",
        Noun: "'Grin' is the noun. 'Ghastly' describes it.",
        Verb: "'Wrinkled' is the verb. 'Ghastly' describes.",
      },
      more: "The creature watches Victor at work on his promised mate. 'Ghastly' comes from an old word meaning to terrify, and took its h from 'ghost'.",
    },
  'Elizabeth read my anguish in my countenance, and kindly taking my hand, said': {
    why: "'Kindly' tells how Elizabeth took his hand: in a kind way. It goes with the verb 'taking', so here it is an adverb.",
    not: {
      Adjective:
        "'Kindly' is an adjective in 'a kindly old man', where it describes a noun. Here it describes how she took his hand.",
      Verb: "'Taking' is the verb form. 'Kindly' tells how.",
      Noun: "'Kindly' names nothing. It describes the action.",
    },
    more: 'Countenance means face. Elizabeth can read his suffering in it, though she does not know its cause.',
  },
  'Then again the kindly influence ceased to act': {
    why: "'Kindly' sits between 'the' and the noun 'influence' and describes it: gentle and good. Here it describes a noun, so it is an adjective.",
    not: {
      Adverb:
        "'Kindly' is an adverb when it tells how something is done, as in 'she spoke kindly'. Here it describes a noun.",
      Noun: "'Influence' is the noun. 'Kindly' describes it.",
      Verb: "'Ceased' is the verb. 'Kindly' describes.",
    },
    more: 'The kindly influence is the calm of the mountains, which soothes Victor for a while before his grief returns.',
  },
  'The men had milked the cows in the early morning and then had gone out rabbiting, without bothering to feed the animals.':
    {
      why: "'Early' sits between 'the' and the noun 'morning' and describes which part of it. A word that describes a noun is an adjective.",
      not: {
        Adverb:
          "'Early' is an adverb when it tells when something is done, as in 'they rose early'. Here it describes a noun.",
        Noun: "'Morning' is the noun. 'Early' describes it.",
        Verb: "'Had milked' is the verb. 'Early' describes the morning.",
      },
      more: 'The unfed animals break into the store-shed, and the Rebellion begins. Orwell starts it with simple neglect.',
    },
  'No doubt they rose up early to observe': {
    why: "'Early' tells when they rose. It goes with the verb 'rose', not a noun, so here it is an adverb, with no -ly added.",
    not: {
      Adjective: "'Early' is an adjective in 'the early morning'. Here it tells when they rose.",
      Noun: "'Early' names nothing. It tells when.",
      Preposition: "A preposition is followed by a noun phrase. 'Early' has none after it.",
    },
  },
  'He set his ears back, shook his forelock several times, and tried hard to marshal his thoughts':
    {
      why: "'Hard' tells how Boxer tried. It goes with the verb 'tried', so it is an adverb, though it has no -ly.",
      not: {
        Adjective:
          "'Hard' is an adjective in 'hard ground' or 'a hard question'. Here it describes how he tried.",
        Noun: "'Hard' names nothing here. It tells how.",
        Verb: "'Tried' is the verb. 'Hard' tells how.",
      },
      more: "'Hardly' is a different word: it means almost not. 'He tried hard' and 'he hardly tried' are opposites.",
    },
  "We're all suitable to our calling, we're well matched.": {
    why: "'Well' tells how they are matched: in a good way. It goes with 'matched', so it is an adverb.",
    not: {
      Adjective:
        "'Well' is an adjective when it means healthy, as in 'I feel well'. Here it tells how they are matched.",
      Noun: "'Well' is a noun when it names a hole for water. Here it tells how.",
      Verb: "'Well' can be a verb, as in 'tears welled up'. Here it describes 'matched'.",
    },
    more: 'Old Joe, a dealer in stolen goods, says this to three people who have come to sell a dead man’s belongings. Being well matched in that trade is a grim joke.',
  },
  'I pray thee, tell me then that he is well.': {
    why: "'Well' follows 'is' and describes him: healthy, unharmed. A describing word after a verb such as 'is' is an adjective.",
    not: {
      Adverb:
        "'Well' is an adverb when it tells how something is done, as in 'sing well'. Here it describes a person.",
      Noun: "'Well' is a noun for a water hole. Here it means healthy.",
      Verb: "'Is' is the verb. 'Well' describes him.",
    },
    more: 'Hermia fears that Demetrius has killed Lysander. Asking if he is well is asking if he is alive.',
  },
  'It swung so softly in the outset that it scarcely made a sound; but soon it rang out loudly, and so did every bell in the house.':
    {
      why: "'Soon' tells when the bell rang out. A word that tells when an action happens is an adverb, though it has no -ly.",
      not: {
        Adjective: "An adjective describes a noun. 'Soon' tells when the ringing happened.",
        Conjunction: "'But' is the conjunction here. 'Soon' tells when.",
        Noun: "'Soon' names nothing. It tells when.",
      },
      more: 'Dickens builds the scene in steps: a soft swing, then a loud ring, then every bell at once. The adverbs of time pace the fear.',
    },
  "She often cried out that it wasn't fair; and it really was not.": {
    why: "'Often' tells how many times she cried out. A word that tells how often an action happens is an adverb, though it has no -ly.",
    not: {
      Adjective: "An adjective describes a noun. 'Often' describes how frequently she cried out.",
      Conjunction: "'And' is the conjunction here. 'Often' tells how many times.",
      Pronoun: "'She' is the pronoun. 'Often' tells how frequently.",
    },
    more: "The game is blind man's buff, and Topper is cheating. Dickens's narrator joins in the fun: 'it really was not' fair.",
  },
  'Swimming is the best exercise for a sore back.': {
    why: "'Swimming' names an activity and is the subject of 'is'. An -ing word used as the name of an activity is a noun.",
    not: {
      Verb: "'Swimming' is a verb in 'She is swimming'. Here it is the subject, the thing the sentence is about.",
      Adjective: "'Swimming' is an adjective in 'a swimming pool'. Here it names the activity.",
      Adverb:
        "An adverb describes how something is done. 'Swimming' is what the sentence is about.",
    },
    tip: "Test: swap in a noun such as 'Yoga'. 'Yoga is the best exercise' works in the same place, so 'Swimming' is doing a noun's job.",
  },
  'The reins, the halters, the blinkers, the degrading nosebags, were thrown on to the rubbish fire which was burning in the yard.':
    {
      why: "'Was burning' tells what the fire was doing. The -ing form after 'was' is part of a verb, so 'burning' is a verb here.",
      not: {
        Adjective:
          "'Burning' is an adjective in 'the burning logs', before a noun. Here it follows 'was' and is the action.",
        Noun: "'Burning' would be a noun in 'The burning took an hour'. Here it is what the fire was doing.",
        Adverb: "An adverb describes how. 'Burning' is the action itself.",
      },
      more: 'The animals burn everything that reminds them of their slavery. Orwell lists the hated objects one by one.',
    },
  'But the most terrifying spectacle of all was Boxer, rearing up on his hind legs and striking out with his great iron-shod hoofs like a stallion.':
    {
      why: "'Terrifying' comes before the noun 'spectacle' and describes it, and 'most' says how strongly, as in 'most frightening'. An -ing word that can take 'very' or 'most' like this is an adjective.",
      not: {
        Verb: "'Rearing' and 'striking' are the verb forms here: they say what Boxer was doing. 'Terrifying' describes the spectacle, the noun after it.",
        Noun: "'Spectacle' is the noun. 'Terrifying' describes it.",
        Adverb:
          "An adverb would describe how something was done. 'Terrifying' describes the spectacle, a noun.",
      },
      more: 'This is the Battle of the Cowshed. Boxer, the gentlest worker on the farm, becomes its most frightening fighter.',
      tip: "Test an -ing word with 'very' or 'most'. 'A very terrifying sight' works, so it is an adjective; 'a very rearing horse' does not, so 'rearing' is a verb form.",
    },
  'Pondicherry Lodge stood in its own grounds, and was girt round with a very high stone wall topped with broken glass.':
    {
      why: "'Broken' comes before the noun 'glass' and describes the state it is in: nobody is breaking it now. It even has an adjective's opposite, unbroken. An -en form used like this is an adjective.",
      not: {
        Verb: "'Broken' is a verb in 'they had broken it', with 'had'. Here it describes a noun.",
        Noun: "'Glass' is the noun. 'Broken' describes it.",
        Adverb: "An adverb describes how something is done. 'Broken' describes the glass.",
      },
      more: 'Girt means surrounded. The broken glass on the wall tells the reader that whoever lives here fears visitors.',
    },
  'Yes, there it lay, the fruit of all their struggles, levelled to its foundations, the stones they had broken and carried so laboriously scattered all around.':
    {
      why: "'Had broken' tells what the animals did to the stones. With 'had', the -en form is part of a verb, so 'broken' is a verb here.",
      not: {
        Adjective:
          "'Broken' is an adjective in 'broken glass', before a noun. Here it follows 'had' and is an action.",
        Noun: "'Stones' is the noun. 'Broken' is what was done to them.",
        Adverb: "'Laboriously' is the adverb here, telling how. 'Broken' is the action.",
      },
    },
  'They went, the Ghost and Scrooge, across the hall, to a door at the back of the house.': {
    why: "'Back' follows 'the' and names the rear of the house. A word that names a thing or a place like this is a noun.",
    not: {
      Adverb: "'Back' is an adverb in 'they came back'. Here it follows 'the' and names a place.",
      Verb: "'Back' is a verb in 'back the car into the drive'. Here it names part of the house.",
      Adjective: "'Back' is an adjective in 'the back door'. Here no noun follows it.",
    },
  },
  'So the animals trooped down to the hayfield to begin the harvest, and when they came back in the evening it was noticed that the milk had disappeared.':
    {
      why: "'Came back' tells where they came: to where they started. 'Back' adds to the verb and has no noun after it, so it is an adverb.",
      not: {
        Noun: "'Back' is a noun in 'the back of the house'. Here it goes with the verb 'came'.",
        Preposition:
          "A preposition is followed by a noun phrase. 'Back' here is followed by 'in the evening', a separate phrase.",
        Verb: "'Came' is the verb. 'Back' tells where.",
      },
      more: "The milk has gone and nobody says where. The pigs' first theft passes almost without a word.",
    },
  'A fearful man, all in coarse grey, with a great iron on his leg.': {
    why: "'Iron' follows 'a great' and names a thing: a leg iron, a heavy ring chained to a prisoner. A word that names a thing is a noun.",
    not: {
      Adjective:
        "'Great' is the adjective here, describing the iron. 'Iron' is the thing described.",
      Verb: "'Iron' is a verb in 'iron a shirt'. Here it names an object.",
      Adverb: "'Iron' names something here; it does not tell how or when.",
    },
    more: 'The iron tells Pip and the reader at once that the man is an escaped convict.',
  },
  'Please iron your school shirt before Monday.': {
    why: "'Iron' follows 'Please' and is the action you are asked to do to the shirt. A word for an action is a verb.",
    not: {
      Noun: "'Iron' is a noun when it names the tool or the metal. Here it is what you do.",
      Adjective: "'Iron' can describe a noun, as in 'an iron gate'. Here it is an action.",
      Adverb: "An adverb would describe how. 'Iron' is the action.",
    },
  },
  'Could you hand me the scissors, please?': {
    why: "'Hand' follows 'Could you' and is the action asked for: to pass something. A word for an action is a verb.",
    not: {
      Noun: "'Hand' is usually a noun, the part of the body. After 'Could you', only a verb fits.",
      Adjective:
        "An adjective describes a noun. In 'hand cream', 'hand' is a noun describing another noun; here it is neither, but the action asked for.",
      Preposition: "A preposition links a noun phrase to the sentence. 'Hand' is the action.",
    },
    tip: "Test: after 'can', 'could' or 'will', try changing the tense. 'Handed' works, so it is a verb.",
  },
  'Sooner or later, we all have to face our fears.': {
    why: "'Face' follows 'have to' and takes an object, 'our fears': to meet them bravely. A word for an action is a verb.",
    not: {
      Noun: "'Face' is a noun when it names the front of the head. After 'have to', only a verb fits.",
      Adjective: "An adjective describes a noun. 'Face' is the action done to 'our fears'.",
      Adverb: "An adverb would describe how. 'Face' is the action itself.",
    },
  },
  'Everyone present agreed that the play had been a success.': {
    why: "'Present' describes 'Everyone': the people who were there. A word that describes a noun or pronoun is an adjective, even when it comes after it.",
    not: {
      Noun: "'Present' is a noun when it means a gift or the time now. Here it describes who agreed.",
      Verb: "'Present' is a verb, said pre-SENT, as in 'present the prizes'. Here it describes the people.",
      Adverb: "An adverb would describe how they agreed. 'Present' says which people.",
    },
    more: 'As a noun or adjective it is said PRES-ent; as a verb, pre-SENT. The stress often changes with the class.',
  },
  'The mayor will present the prizes at the end of the race.': {
    why: "'Present' follows 'will' and takes an object, 'the prizes': to give them out formally. A word for an action is a verb.",
    not: {
      Noun: "'Present' is a noun when it means a gift. After 'will', only a verb fits.",
      Adjective: "'Present' is an adjective in 'everyone present'. Here it is an action.",
      Adverb: "An adverb would describe how. 'Present' is the action.",
    },
  },
  'The storm will not last much longer.': {
    why: "'Last' follows 'will not' and means to go on. A word for an action or a state that can change tense ('lasted') is a verb.",
    not: {
      Adjective:
        "'Last' is an adjective in 'the last train'. Here it follows 'will not' and is a verb.",
      Noun: "'Last' can be a noun, as in 'the last of the cake'. After 'will not', only a verb fits.",
      Adverb: "'Longer' is the adverb here. 'Last' is the verb it describes.",
    },
  },
  'The rescuers worked all night to free the trapped miners.': {
    why: "'Free' follows 'to' and takes an object, 'the trapped miners': to release them. A word for an action is a verb.",
    not: {
      Adjective:
        "'Free' is an adjective in 'a free ticket' or 'the miners are free'. Here it is what the rescuers worked to do.",
      Adverb: "'Free' can be an adverb in 'travel free'. Here it is an action with an object.",
      Noun: "'Miners' is the noun. 'Free' is what they want to do to the miners.",
    },
  },
  'She stayed at home with a bad cold.': {
    why: "'Cold' follows 'a bad' and names an illness. A word that names a thing like this is a noun.",
    not: {
      Adjective:
        "'Cold' is an adjective in 'a cold day'. Here 'bad' is the adjective, and 'cold' is what it describes.",
      Verb: "'Cold' is never a verb. Here it names an illness.",
      Adverb: "'Cold' names something here; it does not tell how.",
    },
    tip: "Look at the word before it. After 'a bad', you expect a noun: 'a bad cold', 'a bad day'.",
  },
  'She was a woman of mean understanding, little information, and uncertain temper.': {
    why: "The group is built around one noun, 'woman', and everything else describes her. It has no verb of its own, so it is a noun phrase: a long, expanded one.",
    not: {
      'Prepositional phrase':
        "A prepositional phrase begins with a preposition. This group begins with 'a woman'; 'of mean understanding' inside it is the prepositional part.",
      'Relative clause':
        'A relative clause has its own verb and begins with who, which or that. This group has no verb at all.',
      'Main clause':
        "A main clause has a subject and a verb. The verb 'was' is outside the group; the group is what Mrs Bennet was.",
    },
    more: "Austen's expanded noun phrase sums Mrs Bennet up in three blows: not clever, not well informed, not even-tempered.",
    tip: 'An expanded noun phrase lets you pack a lot of description round one noun. Try one in your own character writing.',
  },
  'The course of true love never did run smooth.': {
    why: "The group is built around the noun 'course', and 'of true love' tells us which course. It has no verb of its own, and it is the subject of 'did run', so it is a noun phrase.",
    not: {
      'Prepositional phrase':
        "'Of true love' is a prepositional phrase inside the group, but the whole group begins with 'The course', a noun.",
      'Main clause':
        'The main clause is the whole sentence. The highlighted words have no verb of their own: they are its subject.',
      'Subordinate clause':
        'A subordinate clause has its own verb and begins with a word such as when or if. This group has no verb.',
    },
    more: 'The line is the play in miniature: every pair of lovers meets an obstacle before the comedy can end happily.',
  },
  'Boxer was an enormous beast, nearly eighteen hands high, and as strong as any two ordinary horses put together.':
    {
      why: "The group is built around the noun 'beast', with 'an' and 'enormous' before it. It has no verb of its own, so it is a noun phrase.",
      not: {
        'Prepositional phrase':
          'A prepositional phrase begins with a preposition such as in, on or of. This group begins with a determiner and an adjective.',
        'Relative clause':
          'A relative clause has its own verb and begins with who, which or that. This group has neither.',
        'Subordinate clause':
          'A subordinate clause has a subject and a verb of its own. This group has no verb.',
      },
      more: "The noun phrase makes Boxer's size the first thing we know about him. His strength, and how it is used, is the heart of his story.",
    },
  'The business of her life was to get her daughters married; its solace was visiting and news.': {
    why: "The group is built around the noun 'business', and 'of her life' tells us whose business. It has no verb of its own, and it is the subject of 'was', so it is a noun phrase.",
    not: {
      'Prepositional phrase':
        "'Of her life' is a prepositional phrase inside the group, but the group itself begins with 'The business', a noun.",
      'Main clause':
        "The main clause includes the verb 'was'. The highlighted words have no verb: they are its subject.",
      'Subordinate clause':
        'A subordinate clause has its own subject and verb. This group has no verb.',
    },
    more: "Calling marriage a 'business' is Austen's irony: Mrs Bennet treats her daughters' futures like trade.",
  },
  'External heat and cold had little influence on Scrooge.': {
    why: "The group is built around two nouns, 'heat' and 'cold', joined by 'and' and described by 'External'. It has no verb of its own and is the subject of 'had', so it is a noun phrase.",
    not: {
      'Prepositional phrase':
        "'On Scrooge' is the prepositional phrase in this sentence. The highlighted group begins with an adjective and nouns.",
      'Main clause':
        "The main clause needs the verb 'had'. The highlighted words have none: they are its subject.",
      'Relative clause':
        'A relative clause begins with who, which or that and has a verb. This group has neither.',
    },
    more: 'The weather cannot touch Scrooge, Dickens says, because he is colder than it. The noun phrase sets up that comic boast.',
  },
  'A man with no hat, and with broken shoes, and with an old rag tied round his head.': {
    why: "The group is built around the noun 'man', and 'with no hat' describes him. It has no verb of its own, so it is a noun phrase.",
    not: {
      'Prepositional phrase':
        "'With no hat' is a prepositional phrase inside the group, but the group begins with 'A man', a noun.",
      'Main clause':
        'A main clause needs a verb. The group has none, and the sentence has no main verb at all: it is a minor sentence, a list of what Pip saw.',
      'Subordinate clause':
        'A subordinate clause has its own subject and verb. This group has no verb.',
    },
    more: 'Dickens writes a sentence with no main verb, a minor sentence, so that the convict appears in flashes, as a frightened child would see him.',
  },
  'It was on a dreary night of November, that I beheld the accomplishment of my toils.': {
    why: "The group begins with the preposition 'on', followed by a noun phrase, 'a dreary night of November'. A group like this is a prepositional phrase: here it tells us when.",
    not: {
      'Noun phrase':
        "'A dreary night of November' is a noun phrase, but the highlighted group begins with 'on', a preposition.",
      'Subordinate clause': 'A subordinate clause has its own verb. This group has no verb.',
      'Relative clause':
        'A relative clause begins with who, which or that and has its own verb. This group has neither.',
    },
    more: "Mary Shelley said this was the first line of the story she wrote. Putting the phrase up front, 'It was on...', makes the setting grim before anything happens.",
  },
  'But I will wear my heart upon my sleeve': {
    why: "The group begins with the preposition 'upon', followed by the noun phrase 'my sleeve', and tells us where. A group like this is a prepositional phrase.",
    not: {
      'Noun phrase':
        "'My sleeve' is a noun phrase, but the group begins with 'upon', a preposition.",
      'Relative clause':
        'A relative clause begins with who, which or that and has its own verb. This group has no verb.',
      'Main clause':
        "The main clause is 'I will wear my heart'. The highlighted group has no verb of its own.",
    },
    more: 'Iago means he would show his true feelings openly, as he never will. The phrase is now an everyday saying.',
  },
  'We had been wandering, indeed, in the leafless shrubbery an hour in the morning': {
    why: "The group begins with the preposition 'in', followed by the noun phrase 'the leafless shrubbery', and tells us where they wandered. That makes it a prepositional phrase.",
    not: {
      'Noun phrase':
        "'The leafless shrubbery' is a noun phrase, but the group begins with 'in', a preposition.",
      'Subordinate clause':
        'A subordinate clause has its own subject and verb. This group has no verb.',
      'Main clause':
        "The main clause is 'We had been wandering'. The highlighted group adds where.",
    },
    more: "'Leafless' sets the cold, bare mood of the opening, which matches Jane's unhappy life at Gateshead.",
  },
  'I met a lady in the meads': {
    why: "The group begins with the preposition 'in', followed by the noun phrase 'the meads', meaning meadows. It tells us where, so it is a prepositional phrase.",
    not: {
      'Noun phrase': "'The meads' is a noun phrase, but the group begins with 'in', a preposition.",
      'Relative clause':
        'A relative clause begins with who, which or that and has its own verb. This group has none.',
      'Main clause': "The main clause is 'I met a lady'. The highlighted group adds where.",
    },
  },
  'Softly, in the dusk, a woman is singing to me;': {
    why: "The group begins with the preposition 'in', followed by the noun phrase 'the dusk', and tells us when. That makes it a prepositional phrase.",
    not: {
      'Noun phrase': "'The dusk' is a noun phrase, but the group begins with 'in', a preposition.",
      'Subordinate clause':
        'A subordinate clause has its own subject and verb. This group has no verb.',
      'Relative clause':
        'A relative clause begins with who, which or that. This group has no verb at all.',
    },
    more: 'The poem opens with an adverb and a prepositional phrase before the main clause, so the soft, dim mood comes before the singer.',
  },
  'Once more unto the breach, dear friends, once more,': {
    why: "The group begins with the preposition 'unto', an old form of 'to', followed by the noun phrase 'the breach', the gap in the wall. It is a prepositional phrase.",
    not: {
      'Noun phrase':
        "'The breach' is a noun phrase, but the group begins with 'unto', a preposition.",
      'Main clause':
        'A main clause has a subject and a verb. This line has no verb: Henry leaves out "let us go".',
      'Subordinate clause':
        'A subordinate clause has its own subject and verb. This group has neither.',
    },
    more: 'Leaving out the verb makes the command urgent: Henry speaks in a battle cry, not a full sentence.',
  },
  'Let me not to the marriage of true minds': {
    why: "The group begins with the preposition 'to', followed by the noun phrase 'the marriage of true minds'. It is a prepositional phrase.",
    not: {
      'Noun phrase':
        "'The marriage of true minds' is a noun phrase, but the group begins with 'to', a preposition.",
      'Relative clause':
        'A relative clause begins with who, which or that and has its own verb. This group has none.',
      'Subordinate clause':
        'A subordinate clause has its own subject and verb. This group has no verb.',
    },
    more: "The sentence runs on: 'Let me not to the marriage of true minds / Admit impediments.' Shakespeare holds back the verb, admit, to the next line.",
  },
  'Nothing will come of nothing: speak again.': {
    why: "The group begins with the preposition 'of', followed by 'nothing', a pronoun. A preposition with what follows it makes a prepositional phrase.",
    not: {
      'Noun phrase':
        "'Nothing' alone could be the head of a phrase, but the group begins with 'of', a preposition.",
      'Main clause':
        "The main clause is 'Nothing will come of nothing'. The highlighted words are only part of it, with no verb.",
      'Subordinate clause':
        'A subordinate clause has its own subject and verb. This group has no verb.',
    },
    more: "Cordelia will not flatter her father, and says 'Nothing'. Lear's warning comes true: from this nothing, the tragedy grows.",
  },
  'Clover was a stout motherly mare approaching middle life, who had never quite got her figure back after her fourth foal.':
    {
      why: "The clause begins with 'who', which stands for Clover, and has its own verb, 'had got'. It tells us more about the noun before it, so it is a relative clause.",
      not: {
        'Noun phrase':
          "A noun phrase has no verb of its own. This group has a verb: 'had never quite got'.",
        'Prepositional phrase':
          "A prepositional phrase begins with a preposition. 'After her fourth foal' is one, inside the clause, but the clause begins with 'who'.",
        'Main clause':
          "The main clause is 'Clover was a stout motherly mare'. This clause cannot stand alone: it hangs on 'who'.",
      },
      more: "Orwell's relative clause adds a gentle, homely detail: Clover is a mother, and she becomes the farm's most caring animal.",
    },
  'In fair Verona, where we lay our scene,': {
    why: "The clause has its own subject and verb, 'we lay', and begins with 'where', pointing back to Verona. It tells us more about that place, so it is a relative clause.",
    not: {
      'Noun phrase': "A noun phrase has no verb of its own. This clause has one: 'lay'.",
      'Prepositional phrase':
        "'In fair Verona' is the prepositional phrase here. The highlighted clause begins with 'where' and has a verb.",
      'Main clause':
        'A main clause can stand alone. This one hangs on Verona and cannot stand by itself.',
    },
    more: 'Where, when and whose can begin relative clauses too, as well as who, which and that.',
  },
  'There were only four dissentients, the three dogs and the cat, who was afterwards discovered to have voted on both sides.':
    {
      why: "The clause begins with 'who', standing for the cat, and has its own verb, 'was discovered'. It tells us more about the noun before it, so it is a relative clause.",
      not: {
        'Noun phrase': "A noun phrase has no verb. This clause has one: 'was discovered'.",
        'Prepositional phrase':
          "'On both sides' is a prepositional phrase inside it, but the clause begins with 'who'.",
        'Main clause':
          "The main clause is 'There were only four dissentients'. This clause cannot stand alone.",
      },
      more: 'Dissentients are those who vote against. Orwell saves the joke for the relative clause: the cat voted both ways.',
    },
  'The noisy little Cratchits were as still as statues in one corner, and sat looking up at Peter, who had a book before him.':
    {
      why: "The clause begins with 'who', standing for Peter, and has its own verb, 'had'. It tells us more about the noun before it, so it is a relative clause.",
      not: {
        'Noun phrase': "A noun phrase has no verb. This clause has one: 'had'.",
        'Prepositional phrase':
          "'Before him' is a prepositional phrase inside it, but the clause begins with 'who'.",
        'Main clause':
          "The main clause is 'The noisy little Cratchits were as still as statues'. This clause cannot stand alone.",
      },
      more: "'Noisy' and 'still as statues' clash on purpose: the children who were loud in Stave 3 are silent now, and Dickens lets the reader feel why.",
    },
  'He had SEEMED to oppose the windmill, simply as a manoeuvre to get rid of Snowball, who was a dangerous character and a bad influence.':
    {
      why: "The clause begins with 'who', standing for Snowball, and has its own verb, 'was'. It tells us more about the noun before it, so it is a relative clause.",
      not: {
        'Noun phrase':
          "'A dangerous character' is a noun phrase inside it, but the clause has its own verb, 'was', and begins with 'who'.",
        'Prepositional phrase':
          "'Of Snowball' comes before it. The highlighted clause begins with 'who', not a preposition.",
        'Main clause': 'A main clause can stand alone. This clause hangs on Snowball.',
      },
      more: 'Squealer slips his lie into a relative clause, as if it were an agreed fact: a quiet way to rewrite history.',
    },
  'As soon as the light in the bedroom went out there was a stirring and a fluttering all through the farm buildings.':
    {
      why: "The clause has its own subject and verb, 'the light ... went out', but it cannot stand alone: it hangs on 'As soon as'. A clause like this is a subordinate clause.",
      not: {
        'Main clause':
          "The main clause is 'there was a stirring and a fluttering'. 'As soon as' stops the highlighted clause standing alone.",
        'Relative clause':
          'A relative clause tells us more about a noun and begins with who, which or that. This clause tells us when.',
        'Prepositional phrase':
          "'In the bedroom' is a prepositional phrase inside it, but the whole group has a verb, 'went out'.",
      },
      more: 'Opening with the subordinate clause builds suspense: the light goes out first, then the farm comes alive.',
    },
  'When she was discontented she fancied herself nervous.': {
    why: "The clause has its own subject and verb, 'she was', but it begins with 'When' and cannot stand alone. It is a subordinate clause.",
    not: {
      'Main clause':
        "The main clause is 'she fancied herself nervous'. 'When' makes the highlighted clause depend on it.",
      'Relative clause':
        'A relative clause tells us more about a noun. This clause tells us when, and comes before the main clause.',
      'Noun phrase': 'A noun phrase has no verb. This clause has one: was.',
    },
    more: "Austen's joke is in the order: unhappiness comes first, and 'nerves' follow as its excuse.",
  },
  'If music be the food of love, play on,': {
    why: "The clause has its own subject and verb, 'music be', but it begins with 'If' and cannot stand alone. It is a subordinate clause.",
    not: {
      'Main clause':
        "The main clause is 'play on'. 'If' makes the highlighted clause depend on it.",
      'Relative clause':
        'A relative clause tells us more about a noun. This clause sets a condition.',
      'Prepositional phrase':
        "'Of love' is a prepositional phrase inside it, but the whole group has a verb.",
    },
    more: "'Be' here is an old form, as in 'if it be so'. Orsino is lovesick, and wants more music to feed his mood.",
  },
  'Though this be madness, yet there is method in’t.': {
    why: "The clause has its own subject and verb, 'this be', but it begins with 'Though' and cannot stand alone. It is a subordinate clause.",
    not: {
      'Main clause':
        "The main clause is 'yet there is method in’t'. 'Though' makes the highlighted clause depend on it.",
      'Relative clause':
        'A relative clause tells us more about a noun. This clause admits something before the main point.',
      'Noun phrase': 'A noun phrase has no verb. This clause has one: be.',
    },
    more: "Polonius suspects that Hamlet's madness has a purpose. The subordinate clause concedes; the main clause makes the point.",
  },
  'If you can wait and not be tired by waiting,': {
    why: "The clause has its own subject and verb, 'you can wait', but it begins with 'If' and cannot stand alone. It is a subordinate clause.",
    not: {
      'Main clause':
        'The main clause does not come until the last lines of the poem. This one hangs on If.',
      'Relative clause':
        'A relative clause tells us more about a noun. This clause sets a condition.',
      'Noun phrase': 'A noun phrase has no verb. This clause has verbs: wait and be.',
    },
    more: "The whole poem is one long sentence: a string of 'If' clauses, with the main clauses, 'Yours is the Earth' and 'you'll be a Man', only at the end.",
  },
  'Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea.':
    {
      why: "The clause has its own subject and verb, 'the river wound', but it begins with 'as' and cannot stand alone. It is a subordinate clause, dropped into the middle of the sentence.",
      not: {
        'Main clause':
          "The main clause is 'Ours was the marsh country'. 'As' makes the highlighted clause depend on it.",
        'Relative clause':
          'A relative clause tells us more about a noun. This clause tells us how the distance is measured.',
        'Prepositional phrase':
          "'Down by the river' is a prepositional phrase. The highlighted group has a verb, wound.",
      },
      more: 'Wound rhymes with sound here: it is the past of wind, as a river winds. The clause makes the sentence wind too.',
    },
  'Although I hate her, I’ll not harm her so.': {
    why: "The clause has its own subject and verb, 'I hate', but it begins with 'Although' and cannot stand alone. It is a subordinate clause.",
    not: {
      'Main clause':
        "The main clause is 'I’ll not harm her so'. 'Although' makes the highlighted clause depend on it.",
      'Relative clause':
        'A relative clause tells us more about a noun. This clause concedes something before the main point.',
      'Noun phrase': 'A noun phrase has no verb. This clause has one: hate.',
    },
    more: 'Lysander, under the love potion, says he hates Hermia, whom he loved hours before. The comedy runs on such sudden reversals.',
  },
  'If you have tears, prepare to shed them now.': {
    why: "The clause could stand alone as a sentence: 'Prepare to shed them now.' It is a command, and its subject, you, is understood. A clause that can stand alone is a main clause.",
    not: {
      'Subordinate clause':
        "'If you have tears' is the subordinate clause. The highlighted clause does not depend on it.",
      'Relative clause':
        'A relative clause tells us more about a noun and begins with who, which or that. This one gives an order.',
      'Noun phrase': "A noun phrase has no verb. This clause has one: 'prepare'.",
    },
    more: "Antony is about to show the crowd Caesar's cloak. The condition, then the order, works on their feelings step by step.",
  },
  'It is the east, and Juliet is the sun': {
    why: "'Juliet is the sun' has a subject and a verb and could stand alone. It is joined to another main clause, 'It is the east', by 'and'. Both are main clauses.",
    not: {
      'Subordinate clause':
        "A subordinate clause depends on another and begins with a word such as if or when. 'And' joins two equal clauses.",
      'Relative clause':
        'A relative clause tells us more about a noun and begins with who, which or that. This clause makes its own statement.',
      'Noun phrase': "A noun phrase has no verb. This group has one: 'is'.",
    },
    more: 'The metaphor is in the main clause: Juliet is not like the sun, she is the sun. The plain grammar makes the claim bold.',
  },
  'Darkness is cheap, and Scrooge liked it.': {
    why: "'Darkness is cheap' has a subject, 'Darkness', and a verb, 'is', and could stand alone as a sentence. 'And' joins it to a second main clause, so the two are equals.",
    not: {
      'Subordinate clause':
        "A subordinate clause cannot stand alone. 'Darkness is cheap' can: it is a complete statement.",
      'Relative clause':
        'A relative clause tells us more about a noun and begins with who, which or that. This clause makes its own statement.',
      'Noun phrase':
        "'Darkness' on its own is a noun, but the group has a verb, 'is', so it is a clause.",
    },
    more: 'Dickens explains why Scrooge likes the dark in a few plain words: it costs nothing. The short clauses are as tight-fisted as he is.',
  },
  'There was no possibility of taking a walk that day.': {
    why: "The whole sentence has a subject and a verb, 'There was', and stands alone. A sentence of one main clause is a simple sentence: this is it.",
    not: {
      'Subordinate clause':
        'A subordinate clause cannot stand alone. This one is a complete sentence.',
      'Noun phrase':
        "'No possibility of taking a walk' is a noun phrase inside it, but the whole group has a verb, 'was'.",
      'Prepositional phrase':
        "'Of taking a walk' is a prepositional phrase inside it. The whole group is more than that.",
    },
    more: 'The novel begins with what Jane cannot do. A simple main clause makes her shut-in life plain from the first line.',
  },
  'Fair is foul, and foul is fair:': {
    why: "'Foul is fair' has a subject and a verb and could stand alone. It is joined to another main clause, 'Fair is foul', by 'and', so both are main clauses.",
    not: {
      'Subordinate clause':
        "A subordinate clause depends on another, starting with a word such as if or when. 'And' joins equals.",
      'Relative clause':
        'A relative clause tells us more about a noun and begins with who, which or that. This clause makes its own statement.',
      'Noun phrase': "A noun phrase has no verb. This one has 'is'.",
    },
    more: 'Two main clauses that mirror each other turn values upside down. The pattern, called chiasmus, sets the mood of the whole play.',
  },
  'And above all, pass on this message of mine to those who come after you, so that future generations shall carry on the struggle until it is victorious.':
    {
      why: "Major wants the struggle carried on after he has gone: that is what passing on his message is for. 'So that' here means 'in order that', and a clause that gives the aim of an action is a clause of purpose.",
      not: {
        'It tells us what happens as a result.':
          "'So that' can give a result, but a result is something that has followed. Major is asking for something he hopes will happen.",
        'It tells us why something happens.':
          "A reason looks back to a cause, as 'because' does. This clause looks forward to an aim.",
        'It tells us when something happens.':
          "'Until it is victorious' inside it is about time, but the whole clause says what the message is for.",
      },
      more: 'Major expects to die soon, so his speech ends with a purpose: the dream of a rebellion must outlive him.',
      tip: "To test for purpose, put 'in order that' in place of 'so that'. If the sentence still makes sense, the clause gives a purpose.",
    },
  "The door of Scrooge's counting-house was open that he might keep his eye upon his clerk, who in a dismal little cell beyond, a sort of tank, was copying letters.":
    {
      why: "Scrooge keeps the door open for one aim: to watch Bob Cratchit. 'That he might' is an old way of saying 'so that he could', and it introduces a clause of purpose.",
      not: {
        'It tells us what happens as a result.':
          'A result would follow from the open door by chance. Scrooge leaves it open on purpose, to keep watch.',
        'It tells us why something happens.':
          "A reason gives a cause, as 'because it was hot' would. This clause gives an aim.",
        'It describes the noun just before it.':
          "The clause after 'clerk', beginning 'who', describes the clerk. The highlighted clause comes after 'open' and says what the open door is for.",
      },
      more: 'Dickens opens the door again in Stave 5, with a new aim: Scrooge waits to catch Bob arriving late, as a joke.',
    },
  'We shut our outer door on these solemn occasions in order that we might not be interrupted.': {
    why: "Pip and Herbert shut the door for one aim: to stay undisturbed. 'In order that' always introduces a clause of purpose, the aim of an action.",
    not: {
      'It tells us why something happens.':
        "A reason gives a cause, often with 'because'. Not being interrupted is what they want, not what made them shut the door.",
      'It tells us what happens as a result.':
        'A result is what follows, intended or not. This clause gives what they intend.',
      'It tells us when something happens.':
        "'On these solemn occasions' tells us when. The highlighted clause says what the shut door is for.",
    },
    more: "Calling a session of adding up debts 'solemn' is Pip's older self laughing at his younger one, who felt important without paying a bill.",
  },
  'After each question he tilted me over a little more, so as to give me a greater sense of helplessness and danger.':
    {
      why: "The convict tilts Pip on purpose, to frighten him into obeying. 'So as to' always gives a purpose: what an action is meant to achieve.",
      not: {
        'It tells us what happens as a result.':
          "A result just follows. 'So as to' tells us the convict means it: he tilts Pip in order to scare him.",
        'It tells us how something is done.':
          "How he does it is by tilting Pip 'a little more'. The highlighted words say what the tilting is for.",
        'It tells us when something happens.':
          "'After each question' tells us when. The highlighted words give the aim.",
      },
      tip: "'So as to' and 'in order to' always give a purpose. 'So that' can give a purpose or a result, so read it twice.",
    },
  'His body was transparent; so that Scrooge, observing him, and looking through his waistcoat, could see the two buttons on his coat behind.':
    {
      why: "Marley's body is see-through, and what follows from that is that Scrooge can see the buttons behind. 'So that' here means 'with the result that', so this is a clause of result.",
      not: {
        'It tells us what an action is for.':
          'Nobody planned this: the ghost is not see-through in order that Scrooge can count his buttons. It simply follows.',
        'It tells us why something happens.':
          'The cause is in the first half: his body was transparent. The highlighted clause gives what follows from it.',
        'It tells us how something is done.':
          'It does not say how Scrooge looks. It says what he could see, because the body was transparent.',
      },
      more: 'The detail of the buttons is comic and exact at once. It makes the ghost seem solid enough to be real, and strange enough to fear.',
      tip: "Ask whether anyone meant it. If someone did, 'so that' gives a purpose; if it simply followed, it gives a result.",
    },
  'He gave me a most tremendous dip and roll, so that the church jumped over its own weather-cock.':
    {
      why: "The convict turns Pip upside down, and what follows, as Pip sees it, is that the church seems to leap over its weather-cock. 'So that' means 'with the result that' here.",
      not: {
        'It tells us what an action is for.':
          'The convict is not tipping Pip in order to make the church jump. That is just what Pip sees as he turns over.',
        'It tells us how something is done.':
          'How he did it is the dip and roll itself. The highlighted clause gives what came of it.',
        'It tells us when something happens.':
          'It does not say when the dip happened. It says what followed.',
      },
      more: 'The church does not move: Pip does. Dickens shows the world through a frightened child’s eyes, and the comic picture makes the terror easier to bear.',
    },
  'The mist was heavier yet when I got out upon the marshes, so that instead of my running at everything, everything seemed to run at me.':
    {
      why: "The mist is so thick that things loom up without warning, and the result is that everything seems to rush at Pip. 'So that' means 'with the result that' here.",
      not: {
        'It tells us what an action is for.':
          'Pip does not want the world to rush at him. It follows from the mist; nobody aims at it.',
        'It tells us why something happens.':
          'The cause is the heavy mist, in the main clause. The highlighted clause gives what came of it.',
        'It tells us when something happens.':
          "'When I got out upon the marshes' tells us when. The highlighted clause comes after it and gives the result.",
      },
      more: 'Pip is carrying stolen food to the convict, and his guilty mind makes the marshes seem alive and accusing.',
    },
  'Mr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three and twenty years had been insufficient to make his wife understand his character.':
    {
      why: "'So odd ... that' is a pattern for a result: he is so odd that, as a result, twenty-three years of marriage have not taught his wife to understand him.",
      not: {
        'It tells us what an action is for.':
          'Mr Bennet is not odd in order to puzzle his wife. Her confusion simply follows from his character.',
        'It tells us why something happens.':
          'The cause is his odd mixture of qualities. The highlighted clause gives what follows from it.',
        'It describes the noun just before it.':
          "'That' can begin a clause describing a noun, as in 'the book that I read', but here it completes 'so odd'.",
      },
      more: 'Quick parts means a quick mind, and caprice means whim. Austen sets up the marriage in one sentence: a clever, teasing husband and a wife who never sees the joke.',
    },
  'Building had to stop because it was now too wet to mix the cement.': {
    why: "The clause gives the cause of the building stopping: the weather was too wet. A clause beginning 'because' gives a reason.",
    not: {
      'It tells us what an action is for.':
        'A purpose is an aim. Nobody stopped building in order to have wet weather; the wet weather made them stop.',
      'It tells us what happens as a result.':
        'The result is the stopping, in the main clause. The highlighted clause gives what caused it.',
      'It tells us when something happens.':
        "'Now' inside it is about time, but the clause says why the building stopped, not when.",
    },
    more: 'The quiet reason clause comes just before the storm: in the next lines a gale wrecks the windmill.',
  },
  'I cry because I am miserable.': {
    why: "Jane gives the cause of her crying: she is miserable. A clause beginning 'because' gives a reason, and this is the honest one.",
    not: {
      'It tells us what an action is for.':
        'A purpose is an aim. Jane does not cry in order to be miserable; misery is what makes her cry.',
      'It sets a condition for the main idea.':
        "A condition would be 'if I am miserable'. Jane says that she is.",
      'It tells us what happens as a result.':
        'The result is the crying, in the main clause. The highlighted clause gives its cause.',
    },
    more: 'Bessie has just said that Jane is crying because she could not go out in the carriage. Jane puts her right: the real reason is her life at Gateshead.',
  },
  'The fact is, if I do not ask you the name of the other party, it is because I know it already.':
    {
      why: "Utterson explains why he does not ask the name: he knows it already. A clause beginning 'because' gives the reason.",
      not: {
        'It sets a condition for the main idea.':
          "'If I do not ask you the name' is the condition in this sentence. The highlighted clause comes after it and gives a reason.",
        'It tells us what an action is for.':
          'A purpose is an aim. Knowing the name is not what Utterson is aiming at; it is why he need not ask.',
        'It tells us when something happens.':
          "'Already' is about time, but the clause explains why, not when.",
      },
      more: "Utterson knows the name because Jekyll's will leaves everything to an Edward Hyde. His calm clause hides how alarmed he is.",
    },
  'If you prick us, do we not bleed?': {
    why: "The clause sets up the condition for Shylock's question: suppose you prick us; then do we not bleed? A clause beginning 'if' sets a condition.",
    not: {
      'It tells us when something happens.':
        "'When' would say it happens at some time. 'If' only supposes it, to make the point.",
      'It tells us why something happens.':
        "A reason gives a cause, as 'because' does. This clause supposes something, then asks what follows.",
      'It gives a contrast with the main idea.':
        "A contrast would use 'though' or 'although'. Here the bleeding follows from the prick; it does not go against it.",
    },
    more: 'Shylock asks question after question in this pattern to show that Jews and Christians share the same bodies and the same feelings.',
  },
  'But she never was polite, unless there was company.': {
    why: "'Unless' means 'except if', so the clause sets the one condition in which Mrs Joe was polite: visitors in the house. A clause beginning 'unless' sets a condition.",
    not: {
      'It tells us when something happens.':
        "It does point to the times she was polite, but 'unless' makes it a condition: only if there was company.",
      'It gives a contrast with the main idea.':
        "A contrast would say she was polite even though something was so. 'Unless' gives the one case in which she was.",
      'It tells us why something happens.':
        'Company is not the cause of her rudeness. The clause gives the only case in which she stops.',
    },
    more: "Company means visitors. Pip's dry joke shows that his sister's manners are put on for guests, never for her own family.",
  },
  'If we shadows have offended,\nThink but this, and all is mended,': {
    why: "Puck supposes the play may have offended, and says what to do if it has. A clause beginning 'if' sets the condition for the rest of the sentence.",
    not: {
      'It tells us why something happens.':
        'A reason would say the actors did offend, and why. Puck only supposes that they might have.',
      'It tells us when something happens.':
        "'When' would say the offence happened. 'If' leaves it open.",
      'It tells us what happens as a result.':
        'The result is in the main clause: all is mended. The highlighted clause sets up the condition first.',
    },
    more: 'Shadows means the actors. Puck invites anyone who disliked the play to think of it as a dream they had while asleep.',
  },
  'When he had in some measure recovered, I removed him to my own cabin, and attended on him as much as my duty would permit.':
    {
      why: "The clause tells us when Walton moved Victor: once he had partly recovered. A clause beginning 'when' that sets the time of the main action is a clause of time.",
      not: {
        'It sets a condition for the main idea.':
          "A condition would be 'if he recovered'. Walton says that he did, and when the move came.",
        'It tells us why something happens.':
          "His recovery is not the cause of the move but its moment. 'When' points to time.",
        'It tells us how something is done.':
          "How Walton cared for him comes later: 'as much as my duty would permit'. The highlighted clause gives the time.",
      },
      more: 'In some measure means partly. Walton has just taken Victor, half frozen, on board from the ice: the novel’s main story grows out of this rescue.',
    },
  'Whenever anything went wrong it became usual to attribute it to Snowball.': {
    why: "'Whenever' means 'every time that', so the clause tells us when the blaming happened: each time something went wrong. It is a clause of time.",
    not: {
      'It tells us why something happens.':
        'It does not explain why Snowball was blamed. It tells us on which occasions he was.',
      'It tells us where something happens.':
        "'Wherever' would give a place. 'Whenever' gives the times.",
      'It tells us what happens as a result.':
        'The blaming is in the main clause. This clause says when it happened.',
    },
    more: 'Snowball has been driven off the farm, but the pigs keep him as a scapegoat: someone to blame for every failure, so that nobody blames them.',
  },
  'Before the time I did Lysander see,\nSeem’d Athens as a paradise to me.': {
    why: 'The words tell us when Athens seemed a paradise to Hermia: before she saw Lysander. A part that sets the time of the main idea like this is an adverbial of time.',
    not: {
      'It sets a condition for the main idea.':
        'A condition would suppose something. Hermia did see Lysander; the words fix the time before that.',
      'It tells us why something happens.':
        'Seeing Lysander is not the reason Athens seemed a paradise. The words mark the time before it.',
      'It tells us where something happens.':
        'Athens is the place, in the main clause. The highlighted words give the time.',
    },
    more: "'I did Lysander see' is old word order for 'I saw Lysander'. Love, Hermia goes on, has turned her heaven into a hell.",
  },
  'Since you left us, but one change has taken place in our little household.': {
    why: "The clause tells us the time the change belongs to: the time since Victor left home. 'Since' with a clause after it, meaning 'from the time that', begins a clause of time.",
    not: {
      'It tells us why something happens.':
        "'Since' can give a reason, meaning 'because', but Victor leaving did not cause the change. The clause dates it.",
      'It sets a condition for the main idea.':
        'A condition would suppose something. Victor did leave; the clause says from when.',
      'It tells us what happens as a result.':
        'The change is in the main clause, and it does not follow from his leaving. This clause gives its time.',
    },
    more: 'But one change means only one change. Elizabeth goes on to tell the story of Justine, who matters greatly later in the novel.',
  },
  'Though not yet full-grown, they were huge dogs, and as fierce-looking as wolves.': {
    why: "You would expect young dogs to be small. The 'though' part sets that up, and the main clause goes against it: they were huge. A part beginning 'though' gives a contrast.",
    not: {
      'It tells us why something happens.':
        'Being young is not the reason they are huge. It is what makes their size surprising.',
      'It tells us when something happens.':
        "'Not yet' is about time, but the words set up a contrast with the dogs' size.",
      'It sets a condition for the main idea.':
        'A condition would suppose something. The dogs really are not full-grown.',
    },
    more: 'These are the puppies Napoleon took from their mothers in Chapter 3. Their size shows how far his power has quietly grown.',
  },
  'Although well used to ghostly company by this time, Scrooge feared the silent shape so much that his legs trembled beneath him, and he found that he could hardly stand when he prepared to follow it.':
    {
      why: "By now Scrooge has met three ghosts, so you would expect him to be calm. The 'although' part sets that up, and the main clause goes against it: he is terrified. It gives a contrast.",
      not: {
        'It tells us why something happens.':
          'Being used to ghosts is not why he is afraid. It is what makes his fear surprising.',
        'It tells us what happens as a result.':
          'The result in this sentence is that his legs trembled. The highlighted part comes first and sets up a contrast.',
        'It tells us when something happens.':
          "'By this time' inside it is about time, but the whole part sets up a contrast with his fear.",
      },
      more: 'The last spirit never speaks. Dickens makes its silence more frightening than anything the earlier ghosts said.',
    },
  'The court was very cool and a little damp, and full of premature twilight, although the sky, high up overhead, was still bright with sunset.':
    {
      why: "Down in the court it is already dusk, but the sky above is still bright. The 'although' clause sets up that contrast between the gloomy court and the light overhead.",
      not: {
        'It tells us where something happens.':
          "'High up overhead' gives a place inside it, but the whole clause contrasts the bright sky with the dark court.",
        'It tells us why something happens.':
          'The bright sky does not explain why the court is dark. It goes against what we find below.',
        'It tells us when something happens.':
          'Sunset is a time of day, but the clause’s job is the contrast.',
      },
      more: 'Premature twilight means darkness that comes too early. A dark court under a bright sky suits a story about a respectable man with a hidden side.',
    },
  'But the ghost sat down on the opposite side of the fireplace, as if he were quite used to it.': {
    why: "The clause tells us how the ghost sat down: comfortably, like someone used to it. A clause beginning 'as if' describes the manner of an action.",
    not: {
      'It sets a condition for the main idea.':
        "'As if' contains 'if', but it sets no condition. It compares the way he sat to the way a regular visitor would.",
      'It tells us why something happens.': 'It does not say why he sat down. It says how.',
      'It tells us where something happens.':
        "Where he sat is 'on the opposite side of the fireplace'. The highlighted clause says how.",
    },
    more: "Scrooge has just asked whether the ghost can sit down, unsure whether so transparent a ghost could take a chair. Marley's easy manner is part of the comedy.",
  },
  "He was on his stool in a jiffy; driving away with his pen, as if he were trying to overtake nine o'clock.":
    {
      why: "The clause tells us how Bob writes: furiously fast, like a man racing the clock. A clause beginning 'as if' gives the manner of an action.",
      not: {
        'It tells us what an action is for.':
          'Bob is not really trying to overtake nine o’clock. The clause compares the way he writes to a race.',
        'It sets a condition for the main idea.':
          "'As if' contains 'if', but sets no condition. It describes the way he works.",
        'It tells us when something happens.':
          'Nine o’clock is a time, but the clause is about how he writes, not when.',
      },
      more: 'Bob is eighteen and a half minutes late. Dickens enjoys the joke, because Scrooge is about to raise his wages, not dock them.',
    },
  'Suddenly he halted as though his mind were made up.': {
    why: "The clause tells us how Napoleon halted: like someone who has just decided. A clause beginning 'as though' describes the manner of an action.",
    not: {
      'It tells us why something happens.':
        'We are not told why he stops. The clause only describes how it looked to the watching animals.',
      'It sets a condition for the main idea.':
        "'As though' sets no condition. It compares the way he halted to a decision being made.",
      'It tells us what happens as a result.':
        'Nothing here follows from the halt. The clause describes the halt itself.',
    },
    more: "'As though' is Orwell's hint that Napoleon is putting on a show. Next, he blames Snowball for the fallen windmill.",
  },
  'Where I have come, great clerks have purposed\nTo greet me with premeditated welcomes;': {
    why: "The clause tells us where the scholars planned to greet Theseus: in the places he has visited. A clause beginning 'where' that gives the place of the main idea is a clause of place.",
    not: {
      'It tells us when something happens.':
        "'When' would give a time. 'Where' gives the places he has been.",
      'It describes the noun just before it.':
        "A clause with 'where' can describe a noun, as in 'the house where I live'. This one has no noun before it.",
      'It sets a condition for the main idea.':
        'A condition would suppose something. Theseus really has been to these places.',
    },
    more: "Clerks here means scholars, and purposed means planned. Theseus is explaining why he will watch the workmen's clumsy play kindly.",
  },
  'With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet.':
    {
      why: "The clause comes straight after the noun 'anxiety' and tells us more about it: it was so strong it was nearly agony. A clause like this is a relative clause.",
      not: {
        'It tells us how something is done.':
          "The whole opening, 'With an anxiety...', tells us how Victor worked, but the highlighted clause only describes the anxiety.",
        'It tells us what an action is for.':
          "The purpose comes later, in 'that I might infuse a spark of being'. The highlighted clause describes a noun.",
        'It could stand alone as a sentence.':
          'It cannot stand alone: it needs the noun before it.',
      },
      more: "Victor uses 'that' three times in this sentence, for two different jobs. The long, building sentence holds the tension of the moment.",
    },
  'At one end of the big barn, on a sort of raised platform, Major was already ensconced on his bed of straw, under a lantern which hung from a beam.':
    {
      why: "The clause comes straight after the noun 'lantern' and tells us more about it: it hung from a beam. A clause beginning 'which' that describes the noun before it is a relative clause.",
      not: {
        'It tells us where something happens.':
          "'From a beam' does name a place, but the clause describes the lantern. Where Major lies is given by 'under a lantern'.",
        'It tells us how something is done.':
          'It does not describe how Major lay. It describes the lantern.',
        'It could stand alone as a sentence.':
          'It cannot stand alone: it needs the lantern before it.',
      },
      more: 'Ensconced means settled comfortably. Orwell sets the scene like a stage, with Major raised up and lit, ready to speak.',
    },
  '"Ay, he comes back," said the landlord, "to his great friends, now and again, and gives the cold shoulder to the man that made him."':
    {
      why: "The clause comes straight after the noun 'man' and tells us which man: the one who made him. A clause beginning 'that' that describes the noun before it is a relative clause.",
      not: {
        'It tells us why something happens.':
          'It does not say why he snubs the man. It says which man is meant.',
        'It could stand alone as a sentence.':
          "It cannot stand alone: it needs 'the man' before it.",
        'It tells us when something happens.':
          "'Now and again' tells us when. The highlighted clause says which man.",
      },
      more: 'The landlord means Pumblechook, and does not know he is talking to Pip. The reader knows Pumblechook did not make Pip’s fortune: Magwitch did.',
    },
  'We choose this time, because it is a time, of all others, when Want is keenly felt, and Abundance rejoices.':
    {
      why: "'We choose this time' has a subject, 'We', and a verb, 'choose', and could stand alone as a sentence. The rest hangs on it: the 'because' clause gives its reason.",
      not: {
        'It tells us why something happens.':
          "The reason comes after it, beginning 'because'. The highlighted clause is the statement the reason explains.",
        'It tells us when something happens.':
          "'This time' names a time, but the clause is the main statement of the sentence.",
        'It describes the noun just before it.':
          'It does not describe a noun before it. It begins the sentence and could stand alone.',
      },
      more: 'Want means poverty, and Abundance means plenty. The gentleman explains why they collect at Christmas, just before Scrooge refuses to give anything.',
    },
  'This room was chill, because it seldom had a fire; it was silent, because remote from the nursery and kitchen; solemn, because it was known to be so seldom entered.':
    {
      why: "'This room was chill' has a subject, 'This room', and a verb, 'was', and could stand alone. The 'because' part that follows gives its reason and could not stand alone.",
      not: {
        'It tells us why something happens.':
          "The reasons are the 'because' parts. The highlighted clause is the statement the first reason explains.",
        'It describes the noun just before it.':
          'It does not describe a noun before it. It begins the sentence with its own subject and verb.',
        'It gives a contrast with the main idea.':
          'Nothing here goes against the main idea. The parts after it give reasons.',
      },
      more: 'Chill means cold. Brontë gives a statement and a reason three times over, and the red-room grows colder, quieter and more shut away with each.',
    },
}
