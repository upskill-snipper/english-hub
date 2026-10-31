import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Punctuation Repair: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/punctuation-repair.ts). Written with AI on 16
 * October 2026 and checked against each question and its options, as the founder
 * decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: an explanation for each of the 201
 * questions, the 43 kept rewritten for their new options and 158 new, among
 * them 93 real sentences from books out of UK copyright, meaning questions
 * with a prompt, colons, semicolons, brackets and the commas that keep the
 * meaning clear. No explanation quotes another question's sentence. Written
 * with AI and checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second reader, as the founder decided: 15
 * explanations rewritten. Two follow questions whose options changed (see the
 * bank's docblock). Ten corrected a fact, a muddle or a rule stated too
 * strongly: when Watson refuses the cocaine, what Major's "answer" is, what
 * the farm's list of needs shows, what "had occasion to" means, how Holmes's
 * split speech is punctuated, that "although" and "because" never take a
 * comma, that an interjection takes only a comma (twice), that only nouns take
 * a possessive apostrophe. Three, "the players changing room" and two time
 * phrases, now give the reason schools teach the apostrophe, without calling
 * the form some style guides accept a plain mistake.
 */
export const EXPLANATIONS: GameExplanations = {
  'no animal must ever kill any other animal all animals are equal': {
    why: "Old Major gives two separate rules, each a complete sentence with its own subject and verb. A full stop ends the first and a capital starts the second, which runs from 'All animals' straight into its verb, 'are'.",
    not: {
      'No animal must ever kill any other animal, all animals are equal.':
        'A comma alone joins two complete sentences, which is a comma splice. Each rule needs its own sentence.',
      'No animal must ever kill any other animal. All animals, are equal.':
        "The full stop is right, but the comma after 'animals' splits the subject from its verb, 'are'.",
      'No animal must ever kill any other animal, all animals, are equal.':
        "Two slips: a comma splice between the two rules, and a comma that splits 'all animals' from 'are'.",
    },
    more: "'All animals are equal' becomes the last of the Seven Commandments, and is later rewritten. Short, separate sentences make rules easy to remember, and easy to twist.",
    tip: 'Short sentences give rules and slogans their force. In persuasive writing, a short sentence after a long one makes a point land.',
  },
  'a terrible sight had met their eyes the windmill was in ruins': {
    why: "There are two complete sentences: 'A terrible sight had met their eyes' and 'The windmill was in ruins'. A full stop and a capital letter separate them. The second, short and blunt, tells us what the sight was.",
    not: {
      'A terrible sight had met their eyes, the windmill was in ruins.':
        "A comma alone cannot join two complete sentences. This is a comma splice; the first sentence ends after 'eyes'.",
      'A terrible sight had met their eyes. The windmill, was in ruins.':
        "The full stop is right, but the comma after 'windmill' splits the subject from its verb, 'was'.",
      'A terrible sight had met their eyes, the windmill, was in ruins.':
        "Two slips: a comma splice after 'eyes', and a comma that splits 'the windmill' from 'was'.",
    },
    more: 'Orwell makes the reader wait one sentence for the bad news. The short second sentence hits harder on its own than it would tucked into the first.',
    tip: 'A colon could also join these two, because the second explains the first. A comma alone never can.',
  },
  'the dog barked all night the neighbours were furious': {
    why: "'The dog barked all night' and 'The neighbours were furious' are two complete sentences, so a full stop separates them and a capital starts the second. 'Neighbours' is a plain plural, more than one neighbour, so it takes no apostrophe.",
    not: {
      'The dog barked all night, the neighbours were furious.':
        'A comma alone cannot join two complete sentences. That is a comma splice: end the first with a full stop.',
      "The dog barked all night. The neighbour's were furious.":
        "The full stop is right, but 'neighbours' only means more than one neighbour. A plural that owns nothing takes no apostrophe.",
      "The dog barked all night, the neighbour's were furious.":
        'Two slips: a comma splice between two complete sentences, and an apostrophe in a plain plural.',
    },
    more: "Each sentence holds one complete thought with its own subject and verb: 'The dog barked', 'The neighbours were'. Where a new subject and verb start a new thought, a new sentence usually starts too.",
    tip: 'Read your work aloud. Where your voice drops and stops, you probably need a full stop.',
  },
  'its getting dark we should head back': {
    why: "'It's getting dark' and 'We should head back' are two complete sentences, so a full stop separates them and a capital starts the second. 'It's' is short for 'it is', so it needs an apostrophe.",
    not: {
      "It's getting dark, we should head back.":
        "A comma alone between two complete sentences is a comma splice. A full stop belongs after 'dark'.",
      'Its getting dark. We should head back.':
        "The full stop is right, but 'Its' here means 'it is', so it needs an apostrophe: 'It's'.",
      'Its getting dark, we should head back.':
        "Two slips: 'It's' needs an apostrophe for 'it is', and a comma alone cannot join the two sentences.",
    },
    more: "'Its' without an apostrophe shows belonging: 'The owl spread its wings.' 'It's' always stands for 'it is' or 'it has'.",
    tip: 'A short sentence after another short sentence sounds urgent. In a story, that can build tension as night falls.',
  },
  'clover forced her way to the front the van began to gather speed': {
    why: "Two complete sentences, each with its own subject and verb: 'Clover forced' and 'The van began'. A full stop ends the first and a capital starts the second. Nothing comes between 'The van' and 'began'.",
    not: {
      'Clover forced her way to the front, the van began to gather speed.':
        "A comma alone cannot join two complete sentences. This is a comma splice; the first sentence ends after 'front'.",
      'Clover forced her way to the front. The van, began to gather speed.':
        "The full stop is right, but the comma after 'van' splits the subject from its verb, 'began'.",
      'Clover forced her way to the front, the van, began to gather speed.':
        "Two slips: a comma splice after 'front', and a comma that splits 'the van' from 'began'.",
    },
    more: 'The van is taking Boxer away. Two short sentences, one for Clover and one for the van, show the gap between them widening.',
    tip: 'In a tense moment, short separate sentences can speed the action. Each still needs its own full stop.',
  },
  'a sudden chill came over me there was a loud shriek from a woman behind': {
    why: "'A sudden chill came over me' and 'There was a loud shriek from a woman behind' are two complete sentences. A full stop separates them, and the subject of the first, 'A sudden chill', runs straight into its verb.",
    not: {
      'A sudden chill came over me, there was a loud shriek from a woman behind.':
        "A comma alone cannot join two complete sentences. This is a comma splice; the first ends after 'me'.",
      'A sudden chill, came over me. There was a loud shriek from a woman behind.':
        "The full stop is right, but the comma after 'chill' splits the subject, 'A sudden chill', from its verb, 'came'.",
      'A sudden chill, came over me, there was a loud shriek from a woman behind.':
        "Two slips: a comma between 'A sudden chill' and 'came', and a comma splice after 'me'.",
    },
    more: "The narrator is watching the first Martian emerge. Two short sentences set his private fear beside the crowd's panic.",
    tip: "Sentences that start with 'There was' or 'It was' are complete sentences. Check for a comma splice just before them.",
  },
  'first we mixed the ingredients then we baked the cake': {
    why: "'We mixed the ingredients' and 'we baked the cake' are both complete sentences. 'Then' is an adverb, not a joining word, so it cannot join them. A full stop ends the first, and 'Then' opens the second with a capital letter.",
    not: {
      'First, we mixed the ingredients, then we baked the cake.':
        "A comma and 'then' cannot join two complete sentences, because 'then' is not a joining word. This is a comma splice.",
      'First, we mixed the ingredients then we baked the cake.':
        "Two complete sentences run into each other with nothing to separate them. 'Then' cannot join them on its own.",
      'First, we mixed the ingredients then, we baked the cake.':
        "The comma after 'then' does not help: the two sentences still run together with no full stop or joining word between them.",
    },
    more: "Joining words such as 'and', 'but' and 'so' can link two sentences after a comma. 'Then', 'also' and 'however' cannot, so use a full stop or a semicolon, or add 'and': 'and then'.",
    tip: "In instructions and recounts, 'then' often starts a new sentence. When you write 'then', check whether a full stop belongs before it.",
  },
  'they limped into the yard the pellets under the skin of boxers leg smarted painfully': {
    why: "'They limped into the yard' is a complete sentence, and so is the next, with its own subject, 'The pellets', and verb, 'smarted'. A full stop separates them. The leg is Boxer's, so his name takes an apostrophe and 's'.",
    not: {
      "They limped into the yard, the pellets under the skin of Boxer's leg smarted painfully.":
        "A comma alone cannot join two complete sentences. This is a comma splice: end the first after 'yard'.",
      'They limped into the yard. The pellets under the skin of Boxers leg smarted painfully.':
        "The full stop is right, but the leg belongs to Boxer, so 'Boxers' needs an apostrophe: 'Boxer's leg'.",
      'They limped into the yard, the pellets under the skin of Boxers leg smarted painfully.':
        "Two slips: a comma splice after 'yard', and no apostrophe to show the leg is Boxer's.",
    },
    more: "The pellets come from the men's guns in the Battle of the Windmill. The short first sentence shows the animals' exhaustion before the detail of Boxer's wound.",
    tip: "To show that something belongs to a person, add an apostrophe and 's' to the name: Boxer's, Clover's, Napoleon's.",
  },
  'they had won but they were weary and bleeding slowly they began to limp back towards the farm': {
    why: "The first sentence joins two main clauses, 'They had won' and 'they were weary and bleeding', with 'but', and a comma comes before 'but'. Then a full stop: 'Slowly they began to limp back' is a new sentence.",
    not: {
      'They had won but, they were weary and bleeding. Slowly they began to limp back towards the farm.':
        "The comma belongs before 'but', where the two clauses meet, not after it.",
      'They had won, but they were weary and bleeding, slowly they began to limp back towards the farm.':
        "The comma after 'bleeding' joins two complete sentences without a joining word, a comma splice. A full stop belongs there.",
      'They had won but, they were weary and bleeding, slowly they began to limp back towards the farm.':
        "Two slips: the comma comes after 'but' instead of before it, and a comma splice joins the second sentence to the first.",
    },
    more: "'But' turns victory into cost: they had won, yet they were hurt. The contrast sits in one sentence before the story moves on.",
    tip: "A comma goes before 'but' when it joins two main clauses. Never put the comma after 'but'.",
  },
  'the experiment failed twice on the third try it worked': {
    why: "Two sentences are run together. The first ends after 'twice': the experiment failed twice. The second opens with 'On the third try', which belongs to it, followed by a comma, and then 'it worked'.",
    not: {
      'The experiment failed twice, on the third try, it worked.':
        "The comma after 'twice' joins two complete sentences, a comma splice. A full stop belongs there.",
      'The experiment failed twice on the third try. It worked.':
        "The full stop is in the wrong place. 'Failed twice on the third try' makes no sense; 'on the third try' belongs with 'it worked'.",
      'The experiment failed twice, on the third try it worked.':
        "A comma alone joins two complete sentences here. That is a comma splice: put a full stop after 'twice'.",
    },
    more: 'When a sentence boundary is missing, a phrase in the middle can seem to belong to either side. Decide which sentence it belongs to by reading for sense.',
    tip: 'In science write-ups, give each result its own sentence. Short, clear sentences make results easy to follow.',
  },
  'when we arrived the door was locked nobody answered': {
    why: "The first sentence opens with 'When we arrived', a time clause closed by a comma, then its main clause, 'the door was locked'. 'Nobody answered' is a new complete sentence, so a full stop comes before it.",
    not: {
      'When we arrived, the door was locked, nobody answered.':
        "The comma after 'locked' joins two complete sentences, which makes a comma splice. 'Nobody answered' needs its own sentence.",
      'When we arrived; the door was locked. Nobody answered.':
        "'Nobody answered' is rightly a new sentence, but a semicolon cannot follow 'When we arrived', which cannot stand alone.",
      'When we arrived; the door was locked, nobody answered.':
        "Two slips: a semicolon after the time clause, which needs a comma, and a comma splice before 'nobody answered'.",
    },
    more: 'A sentence can open with a clause that cannot stand alone, as long as a main clause completes it. Once that main clause is finished, a new thought needs a new sentence.',
    tip: "Short sentences after a longer one build suspense. Here, 'Nobody answered.' works because it stands alone.",
  },
  'startled the animals stopped in their tracks it was clovers voice': {
    why: "Three choices. 'Startled' is an opener describing the animals, so a comma follows it. 'The animals stopped in their tracks' and 'It was Clover's voice' are separate sentences. The voice belongs to Clover, so 'Clover's' needs an apostrophe.",
    not: {
      "Startled; the animals stopped in their tracks, it was Clover's voice.":
        "A semicolon cannot follow the single word 'Startled', and the comma after 'tracks' joins two complete sentences, a comma splice.",
      'Startled; the animals stopped in their tracks. It was Clovers voice.':
        "The semicolon after 'Startled' should be a comma, and the voice belongs to Clover, so 'Clovers' needs an apostrophe.",
      'Startled, the animals stopped in their tracks, it was Clovers voice.':
        "The comma after 'tracks' makes a comma splice, and 'Clovers' needs an apostrophe because the voice is hers.",
    },
    more: "An opening word such as 'Startled' or 'Exhausted' describes the subject that follows, here 'the animals'. It is followed by a comma, like any opener.",
    tip: "Opening with a single word such as 'Startled,' shows a character's feeling before the action. Use it once at a turning point.",
  },
  'do you know what would happen if we pigs failed in our duty': {
    why: "The sentence asks something: it opens with the verb 'Do' before the subject 'you', so it ends with a question mark. The words after 'know' are what is being asked about, so no comma separates them.",
    not: {
      'Do you know what would happen if we pigs failed in our duty.':
        "This is a question, built with 'Do' before 'you', so it needs a question mark, not a full stop.",
      'Do you know, what would happen if we pigs failed in our duty?':
        "The question mark is right, but the comma after 'know' splits the verb from what is being asked about, 'what would happen'.",
      'Do you know, what would happen if we pigs failed in our duty.':
        "Two slips: a question needs a question mark, and the comma after 'know' splits it from the words that complete it.",
    },
    more: 'Squealer asks this to frighten the animals, then answers it himself: Jones would come back. A question the speaker answers is a rhetorical question, a favourite tool of persuasion.',
    tip: 'In a speech or an article, a rhetorical question draws the audience in. It still ends with a question mark.',
  },
  'can you imagine a milking stool tilted and bowled violently along the ground': {
    why: "The narrator asks the reader to picture something, with 'Can' before 'you', so the sentence is a question and ends with a question mark. What is to be imagined follows 'imagine' with no comma.",
    not: {
      'Can you imagine a milking stool tilted and bowled violently along the ground.':
        "'Can you imagine' puts the verb 'Can' before 'you', which builds a question, so it needs a question mark.",
      'Can you imagine, a milking stool tilted and bowled violently along the ground?':
        "The question mark is right, but the comma splits 'imagine' from what is to be imagined.",
      'Can you imagine, a milking stool tilted and bowled violently along the ground.':
        "Two slips: the sentence is a question and needs a question mark, and the comma splits 'imagine' from what follows.",
    },
    more: 'The narrator is trying to describe a Martian fighting-machine. Asking the reader to picture something ordinary helps him describe something strange.',
    tip: 'Comparing the unfamiliar to something familiar is a strong move in your own descriptive writing.',
  },
  'what i want is a long holiday': {
    why: "This sentence starts with 'What', but it does not ask anything: 'What I want' is the subject, and 'is a long holiday' says what it is. A statement ends with a full stop, and no comma separates the subject from 'is'.",
    not: {
      'What I want is a long holiday?':
        'Starting with "What" does not make a sentence a question. This one states what the speaker wants, so it takes a full stop.',
      'What I want, is a long holiday.':
        "The full stop is right, but the comma splits the subject, 'What I want', from its verb, 'is'.",
      'What I want, is a long holiday?':
        "Two slips: the sentence is a statement, not a question, and the comma splits the subject 'What I want' from 'is'.",
    },
    more: 'Question words can start statements: "Where we eat tonight is up to you." Read the whole sentence; only one that asks something takes a question mark.',
    tip: 'Do not punctuate by the first word. Read to the end and ask whether the sentence expects an answer.',
  },
  'nobody called while i was out did they': {
    why: "'Did they' is a question tag: a short question added to a statement to check it. A comma separates the tag from the statement, and the tag turns the whole sentence into a question, so it ends with a question mark.",
    not: {
      'Nobody called while I was out did they?':
        "The question mark is right, but the tag 'did they' needs a comma to separate it from the statement before it.",
      'Nobody called while I was out, did they.':
        "The comma before the tag is right, but the tag 'did they' makes the sentence a question, so it ends with a question mark.",
      'Nobody called while I was out did they.':
        'The tag needs a comma before it and a question mark after it. This has neither.',
    },
    more: "A negative statement takes a positive tag, and a positive one a negative tag: 'Nobody rang, did they?' but 'Someone rang, didn't they?'",
    tip: 'Question tags are common in dialogue. When a character uses one, check for the comma before it and the question mark after it.',
  },
  'where did you find that old map': {
    why: "'Where' is a question word, and the verb 'did' comes before the subject 'you', so this is a direct question and ends with a question mark. The verb 'find' runs straight into what was found, with no comma.",
    not: {
      'Where did you find that old map.':
        "'Where' opens a question, and 'did' comes before 'you', so the sentence asks something and needs a question mark.",
      'Where did you find, that old map?':
        "The question mark is right, but the comma splits the verb 'find' from what was found, 'that old map'.",
      'Where did you find, that old map.':
        "Two slips: the question needs a question mark, and the comma splits 'find' from 'that old map'.",
    },
    more: "Questions often begin with who, what, where, when, why or how, or with a verb before the subject: 'Did you find it?'",
    tip: 'Check the last mark of every sentence when you proofread. A missing question mark is one of the commonest slips.',
  },
  'have you ever had occasion to study character in handwriting': {
    why: "Holmes asks Watson a question, with 'Have' before 'you', so the sentence ends with a question mark. 'Had occasion to study' runs on with no comma.",
    not: {
      'Have you ever had occasion to study character in handwriting.':
        "'Have you' puts the verb before the subject, which builds a question, so it needs a question mark.",
      'Have you ever had occasion, to study character in handwriting?':
        "The question mark is right, but the comma splits 'had occasion' from what the occasion was for, 'to study'.",
      'Have you ever had occasion, to study character in handwriting.':
        "Two slips: the question needs a question mark, and the comma splits 'occasion' from 'to study'.",
    },
    more: "'Had occasion to' is an old-fashioned way of saying 'had reason to' or 'had the chance to'. Holmes is about to read the writer's character from a letter.",
    tip: 'Questions that begin with have, has, do, does, can or will are easy to spot: the verb comes before the subject.',
  },
  'wow that was the best concert ive ever been to': {
    why: "'Wow' is an interjection, a cry of feeling, so a comma separates it from the rest. 'I've' is short for 'I have' and needs its apostrophe. The sentence bursts with excitement, so an exclamation mark ends it.",
    not: {
      "Wow that was the best concert I've ever been to!":
        "The apostrophe and exclamation mark are right, but a comma is needed after 'Wow' to separate the cry from the sentence.",
      'Wow, that was the best concert Ive ever been to!':
        "The comma and exclamation mark are right, but 'Ive' needs an apostrophe: it is short for 'I have'.",
      'Wow that was the best concert Ive ever been to!':
        "Two slips: no comma separates the cry 'Wow' from the sentence, and 'Ive' needs an apostrophe for the missing letters of 'I have'.",
    },
    more: "Interjections such as 'Wow', 'Oh' and 'Ah' are followed by a comma when they lead into the rest of the sentence. One that stands alone can take an exclamation mark instead.",
    tip: 'Save exclamation marks for real feeling, as here. In formal writing and exam answers you will rarely need one.',
  },
  'if his messenger could go to one place why could he not go to another': {
    why: "The sentence opens with a condition, 'If his messenger could go to one place', closed by a comma. The main clause is a question, 'why could he not go to another', so the whole sentence ends with a question mark.",
    not: {
      'If his messenger could go to one place; why could he not go to another?':
        "A semicolon cannot follow the 'If' clause, because it cannot stand alone. A comma closes it.",
      'If his messenger could go to one place, why could he not go to another.':
        "The main clause asks 'why', so the sentence is a question and needs a question mark at the end.",
      'If his messenger could go to one place; why could he not go to another.':
        "Two slips: a semicolon after a clause that cannot stand alone, and a full stop where the 'why' question needs a question mark.",
    },
    more: "A sentence's end mark depends on its main clause. An opening 'If' clause does not stop the sentence being a question.",
    tip: "Lanyon asks this as he puzzles over Jekyll's strange letter. In a narrative, a character's questions often show them trying to solve a mystery.",
  },
  'whether we win or lose depends on today': {
    why: "The subject here is a whole clause, 'Whether we win or lose', and its verb is 'depends'. A subject and its verb are never split by a comma, however long the subject. The sentence states a fact, so it ends with a full stop.",
    not: {
      'Whether we win or lose depends on today?':
        "The sentence does not ask anything. 'Whether we win or lose' is the subject, and the sentence states what it depends on.",
      'Whether we win or lose, depends on today.':
        "The full stop is right, but the comma splits the subject, 'Whether we win or lose', from its verb, 'depends'.",
      'Whether we win or lose, depends on today?':
        'Two slips: a comma between the subject and its verb, and a question mark on a sentence that asks nothing.',
    },
    more: "A clause can be the subject of a sentence: 'What happened next surprised everyone.' The longer the subject, the more tempting the comma, but it is still wrong.",
    tip: 'To find the subject, ask who or what the sentence is about, then find its verb. Nothing goes between them.',
  },
  'lets start with the hardest question shall we': {
    why: "'Let's' is short for 'let us', so it needs an apostrophe. 'Shall we' is a question tag added to a suggestion, so it follows a comma and makes the sentence end with a question mark.",
    not: {
      'Lets start with the hardest question, shall we?':
        "The punctuation of the tag is right, but 'Lets' needs an apostrophe: it is short for 'let us'.",
      "Let's start with the hardest question, shall we.":
        "'Let's' is right, but 'shall we' turns the suggestion into a question, so it needs a question mark.",
      'Lets start with the hardest question, shall we.':
        "Two slips: 'Lets' needs an apostrophe for 'let us', and the tag 'shall we' needs a question mark.",
    },
    more: "Without an apostrophe, 'lets' means 'allows': 'She lets the dog sleep upstairs.' With one, 'let's' means 'let us': 'Let's go.'",
    tip: "A suggestion with 'shall we' sounds friendlier than a command. It always ends with a question mark.",
  },
  'how can we ignore the plastic in our oceans any longer': {
    why: "This is a rhetorical question: the speaker expects no answer, because the answer is obvious. It is still built as a question, with 'can' before 'we', so it ends with a question mark, and nothing separates 'ignore' from what is ignored.",
    not: {
      'How can we ignore the plastic in our oceans any longer.':
        "A rhetorical question is still a question. Built with 'How can we', it needs a question mark.",
      'How can we ignore, the plastic in our oceans any longer?':
        "The question mark is right, but the comma splits the verb 'ignore' from what is being ignored.",
      'How can we ignore, the plastic in our oceans any longer.':
        "Two slips: the question needs a question mark, and the comma splits 'ignore' from 'the plastic in our oceans'.",
    },
    more: 'Rhetorical questions make listeners work out the answer for themselves. Persuasive speeches often use one at a turning point.',
    tip: 'In a persuasive writing task, one well-placed rhetorical question is worth more than five in a row.',
  },
  'i wonder whether the shop is still open': {
    why: "This sentence does not ask a question; it states what the speaker is wondering. A question reported inside a statement, after 'I wonder whether', takes a full stop, and no comma separates 'wonder' from what is wondered.",
    not: {
      'I wonder whether the shop is still open?':
        "'I wonder whether...' is a statement about what you are thinking, not a direct question, so it ends with a full stop.",
      'I wonder, whether the shop is still open?':
        "Two slips: the comma splits 'wonder' from what is wondered, and the sentence is a statement, not a direct question.",
      'I wonder, whether the shop is still open.':
        "The full stop is right, but the comma after 'wonder' splits the verb from the words that complete it.",
    },
    more: "Compare a direct question, 'Is the shop still open?', with an indirect one inside a statement. Only the direct question takes a question mark.",
    tip: "If a sentence starts 'I wonder', 'I asked' or 'She wanted to know', check the end: it usually takes a full stop.",
  },
  'she asked me where i had put the scissors': {
    why: "This reports a question rather than quoting it: the words are the narrator's, and the verb has moved into the past, 'had put'. A reported question ends with a full stop and needs no comma after 'asked me'.",
    not: {
      'She asked me where I had put the scissors?':
        "This is a reported question, told in the narrator's words, so it ends with a full stop, not a question mark.",
      'She asked me, where I had put the scissors?':
        "The comma after 'me' splits the verb from what was asked, and a reported question takes a full stop.",
      'She asked me, where I had put the scissors.':
        "The full stop is right, but no comma belongs after 'asked me': 'where I had put the scissors' is what she asked.",
    },
    more: "To quote the question instead, use speech marks and her exact words, which would ask 'Where have you put the scissors?' To report it, use your own words and a full stop.",
    tip: 'Reported questions turn up in every story. A quick check: no speech marks usually means no question mark.',
  },
  'when the alarm rang did everyone leave the building': {
    why: "The sentence opens with a time clause, 'When the alarm rang', closed by a comma. The main clause asks something, with 'did' before 'everyone', so the whole sentence ends with a question mark.",
    not: {
      'When the alarm rang; did everyone leave the building?':
        "A semicolon cannot follow 'When the alarm rang', which cannot stand alone. A comma closes it.",
      'When the alarm rang, did everyone leave the building.':
        "The main clause asks something, with 'did' before 'everyone', so the sentence needs a question mark.",
      'When the alarm rang; did everyone leave the building.':
        'Two slips: a semicolon after the time clause, which needs a comma, and a full stop where the question needs a question mark.',
    },
    more: 'Opening clauses work the same way in questions as in statements: a comma closes them, and the end mark belongs to the main clause.',
    tip: 'Check the end mark against the main clause, not the opening words.',
  },
  'the bus was late again why does this always happen': {
    why: "Two sentences are run together. The first, 'The bus was late again', states a fact and ends with a full stop. The second asks something, with 'does' before 'this', so it starts with a capital and ends with a question mark.",
    not: {
      'The bus was late again, why does this always happen?':
        'A comma cannot join a statement to a separate question. The first sentence ends with a full stop, and the question starts afresh.',
      'The bus was late again. Why does this always happen.':
        "The full stop after 'again' is right, but 'Why does this always happen' asks something, so it needs a question mark.",
      'The bus was late again, why does this always happen.':
        'Two slips: a comma joins two separate sentences, and the question at the end has a full stop instead of a question mark.',
    },
    more: 'Each sentence takes its own end mark. A statement followed by a question needs a full stop and then a question mark.',
    tip: 'In a diary or letter, a short question after a statement shows feeling. Give each its own sentence.',
  },
  'and you hens how many eggs have you laid in this last year and how many of those eggs ever hatched into chickens':
    {
      why: "Major speaks to the hens directly, so 'And you hens' is followed by a comma. Then he asks two questions joined by 'and', and the whole sentence ends with a question mark. Nothing separates 'how many eggs' from 'have you laid'.",
      not: {
        'And you hens how many eggs, have you laid in this last year, and how many of those eggs ever hatched into chickens?':
          "No comma follows 'And you hens', the listeners being addressed, and the comma after 'eggs' splits the question in the middle.",
        'And you hens how many eggs have you laid in this last year, and how many of those eggs ever hatched into chickens.':
          "Two slips: 'And you hens' needs a comma after it, and the sentence asks questions, so it ends with a question mark.",
        'And you hens, how many eggs, have you laid in this last year, and how many of those eggs ever hatched into chickens.':
          "The comma after 'eggs' splits 'how many eggs' from 'have you laid', and the questions need a question mark at the end.",
      },
      more: "Major uses a string of questions to make the animals see what they have lost. Speaking to one group, 'you hens', makes each listener feel it personally.",
      tip: "When you write a speech, address your audience directly, with a comma after the words of address: 'Friends, ...' It draws them in.",
    },
  'i bought apples bananas grapes and oranges': {
    why: "The four fruits are a list, so commas separate them, and 'and' takes the place of the comma between the last two. Nothing comes between 'bought' and the list, because the list is what was bought.",
    not: {
      'I bought: apples, bananas, grapes and oranges.':
        "The list commas are right, but a colon never comes between a verb and the thing it acts on. 'I bought' leads straight into what was bought.",
      'I bought apples bananas, grapes and oranges.':
        "There is no comma between 'apples' and 'bananas', so the first two fruits run together.",
      'I bought: apples bananas, grapes and oranges.':
        "Two slips: a colon splits 'bought' from what was bought, and 'apples' and 'bananas' have no comma between them.",
    },
    more: 'Some writers also put a comma before the final "and", called the Oxford comma. It is not wrong, but most British school writing leaves it out unless it prevents confusion.',
    tip: "Count the items, then the commas. A list of four joined by 'and' needs two commas.",
  },
  'she packed a towel sun cream a hat and a book': {
    why: "There are four items: a towel, sun cream, a hat and a book. Commas separate them, with 'and' between the last two. Without the comma after 'towel', 'a towel sun cream' would read as one item.",
    not: {
      'She packed, a towel, sun cream, a hat and a book.':
        "The comma after 'packed' splits the verb from the things she packed. List commas go between the items, not before the first one.",
      'She packed a towel sun cream, a hat and a book.':
        "'Towel' and 'sun cream' have no comma between them, so they read as one strange item, 'a towel sun cream'.",
      'She packed, a towel sun cream, a hat and a book.':
        "Two slips: a comma between 'packed' and the list, and none between 'towel' and 'sun cream'.",
    },
    more: "Items can be single words or phrases such as 'sun cream' or 'a hat'. The comma marks where one item ends and the next begins, so it never goes inside an item.",
    tip: 'Read the list aloud and listen for where one thing ends. That is where the comma goes.',
  },
  'the recipe needs flour butter sugar and eggs': {
    why: "Four ingredients make a list, so commas separate flour, butter and sugar, and 'and' joins the last two. The commas stay inside the list: none comes between 'The recipe' and its verb, 'needs'.",
    not: {
      'The recipe, needs flour, butter, sugar and eggs.':
        "The comma after 'recipe' splits the subject from its verb, 'needs'. A single comma should never sit between the two.",
      'The recipe needs flour butter, sugar and eggs.':
        "'Flour' and 'butter' have no comma between them, so they run together as if they were one ingredient.",
      'The recipe, needs flour butter, sugar and eggs.':
        "Two slips: a comma splits 'The recipe' from 'needs', and 'flour' and 'butter' have no comma between them.",
    },
    more: 'A comma between a subject and its verb is one of the most common comma mistakes. It usually comes from pausing for breath, but commas follow the grammar of the sentence, not the breath.',
    tip: 'Check each comma in a list: it should have an item on each side of it.',
  },
  'we hiked swam cycled and camped during the trip': {
    why: "The four things 'we' did make a list of verbs: hiked, swam, cycled and camped. A comma follows each of the first two, and 'and' joins the last two. 'During the trip' belongs to all four, so it needs no comma.",
    not: {
      'We hiked swam, cycled and camped during the trip.':
        "There is no comma between 'hiked' and 'swam', so the first two activities run together.",
      'We hiked, swam cycled and camped during the trip.':
        "There is no comma between 'swam' and 'cycled', so those two activities run together.",
      'We hiked swam cycled and camped during the trip.':
        "With no commas at all, 'hiked swam cycled' is hard to read as separate activities.",
    },
    more: 'A list can be made of verbs as well as nouns. The rule is the same: a comma between items, and "and" before the last one, with no comma after the final item.',
    tip: 'A list of quick actions makes a story move fast. Keep the verbs in one tense, as here, where all four are in the past.',
  },
  'the flag was red white and blue': {
    why: "Red, white and blue is a list of three colours, so a comma separates 'red' from 'white' and 'and' joins the last two. 'Was' links the flag to its colours, and no comma comes between them.",
    not: {
      'The flag was, red, white and blue.':
        "The comma after 'was' splits the verb from the colours that complete it. The list commas go between the colours only.",
      'The flag was red white and blue.':
        "No comma separates 'red' from 'white'. Even a short list of single words needs one.",
      'The flag was, red white and blue.':
        "Two slips: a comma after 'was' that should not be there, and none between 'red' and 'white'.",
    },
    more: "Adjectives in a list follow the same rule as nouns. Commas also separate adjectives before a noun when each describes it separately, as in 'a long, cold walk'.",
    tip: "When a list follows 'is' or 'was', start it straight away: no comma and no colon in between.",
  },
  'london paris and rome are european capitals': {
    why: "The three cities are a list and the subject of the sentence. A comma separates 'London' from 'Paris', and 'and' joins the last two. No comma follows 'Rome', because that would split the subject from its verb, 'are'.",
    not: {
      'London Paris and Rome are European capitals.':
        "'London' and 'Paris' have no comma between them, so the first two cities run together.",
      'London, Paris and Rome, are European capitals.':
        "The comma after 'Rome' splits the subject, the three cities, from its verb, 'are'.",
      'London Paris and Rome, are European capitals.':
        "This misses the comma between 'London' and 'Paris' and adds one after 'Rome', where it splits the subject from 'are'.",
    },
    more: 'When a list is the subject, it is tempting to pause after it. Do not put a comma there: the list and its verb belong together.',
    tip: 'Check for a comma straight after a list that opens a sentence. It is almost always a mistake.',
  },
  'the winning numbers were 4 17 23 and 31': {
    why: "The four numbers are a list, so commas separate them and 'and' joins the last two. With numbers, a missing comma is especially confusing: '4 17' could be read as one number. 'Were' leads straight into the list.",
    not: {
      'The winning numbers were 4 17, 23 and 31.':
        'No comma separates 4 from 17, so the first two numbers read as one: 417.',
      'The winning numbers were: 4, 17, 23 and 31.':
        "The list commas are right, but no colon comes between 'were' and the numbers that complete it.",
      'The winning numbers were: 4 17, 23 and 31.':
        "Two slips: a colon straight after 'were', and no comma between 4 and 17.",
    },
    more: 'In a list of numbers, commas are what keep each number separate. Writing them as words is another way to avoid confusion: four, seventeen.',
    tip: 'In maths and science answers, separate lists of values with commas so each value is clear.',
  },
  'would you like tea coffee or juice': {
    why: "The three drinks are a list of choices, so a comma separates 'tea' from 'coffee' and 'or' joins the last two. The sentence asks a question, with 'Would' before 'you', so it ends with a question mark.",
    not: {
      'Would you like tea coffee or juice?':
        "The question mark is right, but 'tea' and 'coffee' need a comma between them: they are separate choices.",
      'Would you like tea, coffee or juice.':
        "The comma is right, but 'Would you like' asks a question, so the sentence ends with a question mark.",
      'Would you like tea coffee or juice.':
        "Two slips: no comma between 'tea' and 'coffee', and no question mark at the end of the question.",
    },
    more: "A list joined by 'or' follows the same comma rules as one joined by 'and'.",
    tip: 'Check that a list question keeps its question mark: the list in the middle does not change the end.',
  },
  'we saw giraffes zebras and lions at the zoo': {
    why: "Three animals are listed, so a comma separates 'giraffes' from 'zebras', and 'and' joins the last two. The verb 'saw' runs straight into the list of what was seen, and 'at the zoo' belongs to the whole sentence.",
    not: {
      'We saw, giraffes, zebras and lions at the zoo.':
        "The comma after 'saw' splits the verb from the animals that were seen. List commas go between the items only.",
      'We saw giraffes zebras, and lions at the zoo.':
        "'Giraffes' and 'zebras' need a comma between them, and with that missing the comma before 'and' leaves the list lopsided.",
      'We saw, giraffes zebras, and lions at the zoo.':
        "Two slips: a comma after 'saw' that should not be there, and none between 'giraffes' and 'zebras'.",
    },
    more: 'A list usually sits after its verb with no mark between them: "We saw...", "She bought...", "They need...".',
    tip: 'Count the items in your list: three items joined by "and" need one comma.',
  },
  'they were all thirsty weary and footsore': {
    why: "Three adjectives describe the refugees: thirsty, weary and footsore. Commas separate them; the one before 'and' is the writer's choice, called the Oxford comma. Nothing separates 'They were all' from the list.",
    not: {
      'They were all thirsty weary, and footsore.':
        "'Thirsty' and 'weary' are separate items in the list, so a comma goes between them.",
      'They were all, thirsty, weary, and footsore.':
        "The comma after 'all' splits the subject from the words describing it. List commas go between the items only.",
      'They were all, thirsty weary, and footsore.':
        "Two slips: a comma after 'all' that should not be there, and none between 'thirsty' and 'weary'.",
    },
    more: "'Footsore' means having sore feet from walking. The three adjectives grow more physical, from need to tiredness to pain.",
    tip: 'Three adjectives in a list make a strong description. Choose them so that each adds something new.',
  },
  'the guests included dr khan mrs evans and professor lee': {
    why: "Three guests are listed, each a title and a name: Dr Khan, Mrs Evans and Professor Lee. Commas separate them, and 'and' joins the last two. 'Included' leads straight into the list, so no colon follows it.",
    not: {
      'The guests included Dr Khan Mrs Evans and Professor Lee.':
        "No comma separates 'Dr Khan' from 'Mrs Evans', so the first two names run together.",
      'The guests included: Dr Khan, Mrs Evans and Professor Lee.':
        "The list commas are right, but no colon comes after 'included': 'The guests included' is not a complete sentence.",
      'The guests included: Dr Khan Mrs Evans and Professor Lee.':
        "Two slips: a colon straight after 'included', and no comma between the first two names.",
    },
    more: "A title and a name together, such as 'Dr Khan', count as one item in a list, so no comma goes inside it.",
    tip: "Never put a colon straight after 'included', 'including' or 'such as'.",
  },
  'my favourite subjects are english history and art': {
    why: "Three subjects are wanted: English, history and art. A comma after 'English' separates the first two, and 'and' joins the last two. 'Are' leads straight into the list, with no mark after it.",
    not: {
      'My favourite subjects are: English, history and art.':
        "The comma after 'English' is right, but the colon after 'are' is not. A colon cannot come between a verb and the words that complete it.",
      'My favourite subjects are English history and art.':
        "Without a comma, 'English history' reads as one subject, the history of England, so the sentence names only two subjects.",
      'My favourite subjects are: English history and art.':
        "The colon after 'are' should not be there, and with no comma 'English history' becomes one subject, so only two are named.",
    },
    more: "A colon can introduce a list only after a complete sentence: 'I study three languages: French, Spanish and German.' After 'are', 'include' or 'such as', the list follows with no colon.",
    tip: 'Before you use a colon, cover the list with your hand. If the words before it do not make a complete sentence, leave the colon out.',
  },
  'i let myself in with my latchkey closed locked and bolted the door staggered to the foot of the staircase and sat down':
    {
      why: "The narrator lists four actions: he let himself in, closed the door, staggered to the stairs and sat down. One action holds its own list of three verbs: 'closed, locked and bolted'. Commas separate every item, inside and out.",
      not: {
        'I let myself in with my latchkey, closed locked and bolted the door, staggered to the foot of the staircase, and sat down.':
          "'Closed, locked and bolted' is a small list of three verbs inside the bigger one, and 'closed' needs a comma after it.",
        'I let myself in with my latchkey, closed, locked and bolted the door, staggered to the foot of the staircase and, sat down.':
          "The inner list is right, but the comma before the last action belongs before 'and', not after it.",
        'I let myself in with my latchkey, closed locked and bolted the door, staggered to the foot of the staircase and, sat down.':
          "Two slips: 'closed' needs a comma after it in the inner list, and the comma at the end belongs before 'and', not after it.",
      },
      more: "The comma before 'and sat down' is Wells's choice, an Oxford comma; leaving it out would also be correct. What is never correct is a comma after 'and'.",
      tip: 'A long list of actions shows panic or hurry. The commas keep each step clear, so the reader can follow every movement.',
    },
  'there was need of paraffin oil nails string dog biscuits and iron for the horses shoes none of which could be produced on the farm':
    {
      why: "Five things are listed, and the shoes in the last belong to several horses, so the apostrophe follows the 's'. 'None of which could be produced on the farm' comments on the whole list and cannot stand alone, so a comma, not a semicolon, joins it.",
      not: {
        "There was need of paraffin oil, nails, string, dog biscuits, and iron for the horses' shoes; none of which could be produced on the farm.":
          "'None of which could be produced on the farm' cannot stand alone, so a semicolon cannot come before it. A comma joins it.",
        'There was need of paraffin oil, nails, string, dog biscuits, and iron for the horses shoes, none of which could be produced on the farm.':
          "The shoes belong to the horses, several of them, so 'horses' needs an apostrophe after the 's'.",
        'There was need of paraffin oil, nails, string, dog biscuits, and iron for the horses shoes; none of which could be produced on the farm.':
          "Two slips: 'horses'' needs its apostrophe, and a semicolon cannot come before a clause that cannot stand alone.",
      },
      more: "The farm cannot make everything it needs after all. This list sets up Napoleon's decision to trade with the neighbouring farms.",
      tip: "A clause starting 'none of which', 'all of which' or 'most of whom' cannot stand alone, so it follows a comma, never a semicolon.",
    },
  'i invited my parents ayesha and tom': {
    why: "Without a comma before 'and', 'my parents, Ayesha and Tom' can be read as naming the parents. The comma before 'and', called the Oxford comma, shows three separate guests: my parents, Ayesha, and Tom.",
    not: {
      'I invited my parents, Ayesha and Tom.':
        "Without a comma before 'and', 'Ayesha and Tom' can be read as the names of the parents. The prompt wants them clearly separate guests.",
      'I invited my parents Ayesha and Tom.':
        "With no commas, 'Ayesha and Tom' names the parents. The prompt wants them to be other guests.",
      'I invited, my parents, Ayesha, and Tom.':
        "The comma before 'and' is right, but the comma after 'invited' splits the verb from the people invited.",
    },
    more: 'The Oxford comma is optional in most British writing, but use it whenever leaving it out could make a list mean something else.',
    tip: 'Read your list as if the first item were being explained by the others. If it could be, add the comma before "and".',
  },
  'because it was raining we stayed indoors': {
    why: "'Because it was raining' gives the reason but cannot stand alone: it is a subordinate clause. When it opens the sentence, a comma marks where it ends and the main clause, 'we stayed indoors', begins.",
    not: {
      'Because it was raining; we stayed indoors.':
        "A semicolon joins two clauses that could each be a sentence. 'Because it was raining' cannot stand alone, so a semicolon cannot follow it.",
      'Because it was raining. We stayed indoors.':
        "The full stop leaves 'Because it was raining.' as a sentence on its own, but it is only a reason with no main clause. That is a fragment.",
      'Because it was raining: we stayed indoors.':
        "A colon follows a complete sentence and introduces what explains it. 'Because it was raining' is not complete, so a comma belongs here.",
    },
    more: "Put the reason second and you usually need no comma: 'We stayed indoors because it was raining.' Moved to the front, the clause takes a comma after it.",
    tip: "A sentence that starts with 'Because' needs a main clause after it in the same sentence. Check you have not ended it too soon.",
  },
  'after the match had finished the players shook hands': {
    why: "'After the match had finished' tells us when, but it cannot stand alone. A comma after it marks where the main clause, 'the players shook hands', begins, so that 'finished the players' does not run together.",
    not: {
      'After the match had finished, the players, shook hands.':
        "The comma after 'finished' is right, but the second splits the subject, 'the players', from its verb, 'shook'.",
      'After the match had finished; the players, shook hands.':
        "Two slips: a semicolon cannot follow the opening clause, and the comma after 'players' splits the subject from 'shook'.",
      'After the match had finished; the players shook hands.':
        "A semicolon must have a complete sentence on each side. 'After the match had finished' is not one.",
    },
    more: "Without the comma a reader can stumble, taking 'finished the players' as one idea. A comma after an opening clause shows where the first idea ends.",
    tip: "Find the verb of the opening clause, here 'had finished', and the subject of the main clause, 'the players'. The comma goes between them.",
  },
  'although she was tired she finished her homework': {
    why: "'Although she was tired' sets up a contrast but cannot stand alone. When it opens the sentence, one comma follows the whole clause, after 'tired', and then comes the main clause, 'she finished her homework'.",
    not: {
      'Although, she was tired, she finished her homework.':
        "The comma after 'tired' is right, but 'Although' runs straight into its clause, 'she was tired'. Unlike an opening 'However', it is not followed by a comma.",
      'Although she was tired; she finished her homework.':
        "A semicolon needs a complete sentence on both sides, and 'Although she was tired' cannot stand alone. A comma belongs after 'tired'.",
      'Although, she was tired; she finished her homework.':
        "Two slips: 'Although' runs straight into its clause with no comma, and a semicolon cannot follow a clause that cannot stand alone.",
    },
    more: "'Although' and 'however' both show contrast but work differently. 'Although' joins a clause to a sentence with no comma after it; 'However,' links two sentences and takes a comma: 'It rained. However, we played.'",
    tip: "In essays, 'although' lets you weigh two sides in one sentence. Put a single comma after the 'although' clause when it comes first.",
  },
  'when the bell rang the students left the room': {
    why: "'When the bell rang' tells us when, but it cannot stand alone, so it is a subordinate clause. A comma after it, before 'the students', marks where the main clause begins.",
    not: {
      'When the bell rang, the students, left the room.':
        "The comma after 'rang' is right, but the second, after 'students', splits the subject from its verb, 'left'.",
      'When the bell rang. The students left the room.':
        "The full stop cuts off 'When the bell rang.' as if it were a sentence, but it has no main clause. That is a fragment.",
      'When the bell rang. The students, left the room.':
        "Two slips: the full stop strands 'When the bell rang.' as a fragment, and the comma after 'students' splits the subject from 'left'.",
    },
    more: "The comma goes where the opening clause ends, not wherever you would pause. A comma between a subject and its verb, as in 'the students, left', is almost always a mistake.",
    tip: "Opening with 'When', 'After' or 'As soon as' varies your sentences. Each time, the comma comes at the end of that opening clause.",
  },
  'suddenly the lights went out': {
    why: "'Suddenly' is a fronted adverbial: a word placed before the main clause to say how something happened. A comma after it marks where the main clause, 'the lights went out', begins. Nothing comes between 'the lights' and 'went'.",
    not: {
      'Suddenly, the lights, went out.':
        "The comma after 'Suddenly' is right, but the second splits the subject, 'the lights', from its verb, 'went'.",
      'Suddenly; the lights went out.':
        "A semicolon joins two complete sentences, and 'Suddenly' on its own is not one. A comma follows an opening word like this.",
      'Suddenly the lights, went out.':
        "The comma after 'lights' splits the subject from its verb, 'went'. The only comma this sentence can take is after 'Suddenly'.",
    },
    more: "A fronted adverbial can be one word ('Suddenly'), a phrase ('Later that night') or a clause ('When the storm broke'). School writing puts a comma after each.",
    tip: "Use openers such as 'Suddenly,' sparingly in stories. One at the turning point has more force than one in every paragraph.",
  },
  'if you finish early you may go outside': {
    why: "'If you finish early' sets a condition and cannot stand alone. Placed first, it is followed by a comma, and then the main clause says what may happen: 'you may go outside'.",
    not: {
      'If you finish early; you may go outside.':
        "A semicolon can only join two complete sentences. 'If you finish early' is a condition with no main clause of its own.",
      'If you finish early. You may go outside.':
        "The full stop leaves 'If you finish early.' as a sentence, but a condition alone does not make one. It is a fragment.",
      'If you finish early you, may go outside.':
        "The comma after the second 'you' splits that subject from its verb, 'may go'. The comma belongs after 'early', where the condition ends.",
    },
    more: "A clause beginning with 'if' is a conditional clause. It can come second with no comma: 'You may go outside if you finish early.'",
    tip: "In instructions, putting the condition first helps the reader: 'If the alarm sounds, leave by the nearest exit.'",
  },
  'meanwhile the rest of the team kept practising': {
    why: "'Meanwhile' is an opening adverb that links this sentence to something happening at the same time. A comma follows it. The subject, 'the rest of the team', then runs straight into its verb, 'kept'.",
    not: {
      'Meanwhile, the rest of the team, kept practising.':
        "The comma after 'Meanwhile' is right, but the one after 'team' splits the subject from its verb, 'kept'.",
      'Meanwhile; the rest of the team kept practising.':
        "A semicolon joins two complete sentences. 'Meanwhile' is a single linking word, so a comma follows it.",
      'Meanwhile; the rest of the team, kept practising.':
        "Two slips: a semicolon after 'Meanwhile', which needs a comma, and a comma between 'the team' and 'kept'.",
    },
    more: "Linking adverbs such as 'Meanwhile', 'Afterwards', 'However' and 'Instead' usually take a comma when they open a sentence. They guide the reader from one idea to the next.",
    tip: "Use 'Meanwhile,' to cut between two places in a story, as a film cuts between scenes.",
  },
  'as winter drew on mollie became more and more troublesome': {
    why: "'As winter drew on' tells us when, but it cannot stand alone: it is a subordinate clause. Coming first, it is closed by a comma, and then the main clause follows: 'Mollie became more and more troublesome'.",
    not: {
      'As winter drew on; Mollie became more and more troublesome.':
        "A semicolon joins two complete sentences. 'As winter drew on' cannot stand alone, so a comma follows it.",
      'As winter drew on. Mollie became more and more troublesome.':
        "The full stop leaves 'As winter drew on.' as a sentence by itself, but it is only a time clause. That is a fragment.",
      'As winter drew, on Mollie became more and more troublesome.':
        "The comma is in the wrong place. 'Drew on' belongs together, and the clause ends after 'on', so the comma goes there.",
    },
    more: "'As' can open a time clause ('As the sun set'), a reason ('As it was late') or a comparison. Whichever it is, a clause that opens the sentence is followed by a comma.",
    tip: "A time clause at the start, such as 'As winter drew on,', moves a story on by weeks in a few words. Try one when you need to skip time.",
  },
  'when the hens heard this they raised a terrible outcry': {
    why: "'When the hens heard this' sets the time and cannot stand alone. A comma closes it, so the main clause, 'they raised a terrible outcry', starts cleanly with its subject, 'they'.",
    not: {
      'When the hens heard this they, raised a terrible outcry.':
        "The comma comes after 'they', splitting the subject from its verb, 'raised'. It belongs one word earlier, after 'this'.",
      'When the hens heard this; they raised a terrible outcry.':
        "A semicolon needs a complete sentence on each side, and 'When the hens heard this' is not one.",
      'When the hens, heard this they raised a terrible outcry.':
        "The comma after 'hens' splits that subject from its verb, 'heard'. The clause runs on to 'this', and the comma belongs there.",
    },
    more: "A comma never separates a subject from its own verb, whether in the opening clause ('the hens heard') or in the main clause ('they raised').",
    tip: "To place the comma, find the end of the opening clause: its subject and verb ('the hens heard') and the word that completes them ('this').",
  },
  'as bradshaw left the lawyer looked at his watch': {
    why: "'As Bradshaw left' is a time clause that cannot stand alone, and the comma after 'left' closes it. Without the comma there, a reader could take 'left the lawyer' together, as if Bradshaw had walked away from him.",
    not: {
      'As Bradshaw left the lawyer, looked at his watch.':
        "Here the comma follows 'lawyer', so it reads as if Bradshaw walked away from the lawyer, and it splits 'the lawyer' from his verb, 'looked'.",
      'As Bradshaw left; the lawyer looked at his watch.':
        "A semicolon must have a complete sentence on each side. 'As Bradshaw left' cannot stand alone.",
      'As Bradshaw left. The lawyer looked at his watch.':
        "The full stop cuts off 'As Bradshaw left.' as a sentence, but it is a time clause with no main clause. That is a fragment.",
    },
    more: "This is why the comma matters: 'left the lawyer' could be a phrase in its own right. A comma after an opening clause stops the reader joining words that do not belong together.",
    tip: 'Read your opening clause with the next two words. If they could join up into the wrong meaning, the comma is essential.',
  },
  'after his hoof had healed up boxer worked harder than ever': {
    why: "'After his hoof had healed up' says when, but it cannot stand alone. A comma after it, before 'Boxer', marks where the main clause begins. 'Healed up' is one verb, so the comma comes after 'up'.",
    not: {
      'After his hoof had healed up; Boxer worked harder than ever.':
        "A semicolon joins two complete sentences, and 'After his hoof had healed up' is not one.",
      'After his hoof, had healed up Boxer worked harder than ever.':
        "The comma after 'hoof' splits it from its verb, 'had healed'. The clause runs on to 'up', and the comma belongs there.",
      'After his hoof had healed up. Boxer worked harder than ever.':
        "The full stop leaves 'After his hoof had healed up.' as a sentence by itself. It has no main clause, so it is a fragment.",
    },
    more: "'Healed up' is a phrasal verb: a verb with a small word that belongs to it. The comma comes after the whole verb, never between its two parts.",
    tip: 'Boxer answers every setback by working harder. A detail like this is useful evidence when you write about his character.',
  },
  'however these stories were never fully believed': {
    why: "'However' links this sentence to the one before and shows a contrast. When it opens a sentence in this sense, a comma follows it. The subject, 'these stories', then runs straight into its verb.",
    not: {
      'However, these stories, were never fully believed.':
        "The comma after 'However' is right, but the one after 'stories' splits the subject from its verb, 'were'.",
      'However; these stories were never fully believed.':
        "A semicolon joins two complete sentences. 'However' is one linking word, so a comma follows it.",
      'However; these stories, were never fully believed.':
        "Two slips: a semicolon where a comma belongs after 'However', and a comma between 'these stories' and 'were'.",
    },
    more: "'However' has two meanings. As 'but', it takes a comma: 'However, she stayed.' As 'no matter how', it takes none: 'However hard she pushed, the door stuck.'",
    tip: "'However' cannot join two sentences with a comma. Start a new sentence with it, or put a semicolon before it.",
  },
  'indeed all the animals worked like slaves that year': {
    why: "'Indeed' opens the sentence to strengthen what came before. An opening word like this is followed by a comma, and the main clause, 'all the animals worked like slaves that year', follows unbroken.",
    not: {
      'Indeed, all the animals, worked like slaves that year.':
        "The comma after 'Indeed' is right, but the one after 'animals' splits the subject from its verb, 'worked'.",
      'Indeed; all the animals worked like slaves that year.':
        "A semicolon joins two complete sentences. 'Indeed' is a single word, so a comma follows it.",
      'Indeed; all the animals, worked like slaves that year.':
        "A semicolon cannot follow the single word 'Indeed', and the comma after 'animals' splits the subject from its verb.",
    },
    more: "Orwell's simile is pointed: the animals rebelled so that they would no longer be slaves. 'Indeed' makes the irony sharper.",
    tip: "Linking words such as 'Indeed', 'Moreover' and 'Nevertheless' help an essay flow. Each takes a comma when it opens a sentence.",
  },
  'although it was difficult i never gave up and i succeeded': {
    why: "Two commas do two jobs. One closes the opening clause, 'Although it was difficult', which cannot stand alone. The other comes before 'and', which joins two main clauses: 'I never gave up' and 'I succeeded'.",
    not: {
      'Although it was difficult, I never gave up and, I succeeded.':
        "The first comma is right, but the second sits after 'and'. A comma that marks the join between two main clauses goes before the joining word.",
      'Although it was difficult; I never gave up, and I succeeded.':
        "A semicolon needs a complete sentence on each side, and 'Although it was difficult' cannot stand alone. A comma belongs after it.",
      'Although it was difficult; I never gave up and, I succeeded.':
        "Both marks are misplaced: the semicolon follows a clause that cannot stand alone, and the second comma comes after 'and' instead of before it.",
    },
    more: "Before 'and', 'but' or 'so' joining two main clauses, a comma is often used, especially when the clauses are long. With short ones it can be left out: 'I tried and I won.'",
    tip: "When you join two main clauses with 'and' or 'but', put any comma before the joining word, never after it.",
  },
  'turn off the lights before you leave the room': {
    why: "This is one sentence: a command, 'Turn off the lights', with a clause that says when, 'before you leave the room'. When the 'before' clause comes second, no mark is needed between the two parts.",
    not: {
      'Turn off the lights. Before you leave the room.':
        "The full stop leaves 'Before you leave the room.' as a sentence on its own, but it is only a time clause with no main clause. That is a fragment.",
      'Turn off, the lights. Before you leave the room.':
        "Two slips: the comma splits 'turn off' from 'the lights', and the full stop strands 'Before you leave the room.' as a fragment.",
      'Turn off, the lights before you leave the room.':
        "The comma after 'off' splits the verb, 'turn off', from what is to be turned off, 'the lights'. Nothing should come between them.",
    },
    more: "Move the time clause to the front and it takes a comma: 'Before you go to bed, brush your teeth.' Placed second, it usually takes none.",
    tip: "Do not add a comma before every 'before', 'after' or 'because'. Ask first whether the clause comes at the start of the sentence.",
  },
  'when the clock struck eleven this domestic ball broke up': {
    why: "'When the clock struck eleven' sets the time and cannot stand alone. The comma goes where that clause ends, after 'eleven', and then comes the main clause: 'this domestic ball broke up'. The ball is Fezziwig's Christmas party.",
    not: {
      'When the clock struck eleven, this domestic ball, broke up.':
        "The comma after 'eleven' is right, but the second splits the subject, 'this domestic ball', from its verb, 'broke up'.",
      'When the clock struck eleven; this domestic ball broke up.':
        "A semicolon needs a complete sentence on each side. 'When the clock struck eleven' cannot stand alone.",
      'When the clock struck eleven; this domestic ball, broke up.':
        "Two slips: a semicolon cannot follow the opening clause, and the comma after 'ball' splits the subject from its verb.",
    },
    more: 'Dickens puts the time first, so the reader hears the clock strike before the party ends, as the guests would.',
    tip: 'When you analyse a sentence, notice what comes first. An opening clause puts the time or the reason in front of the main event.',
  },
  'while the rest of the body dwindled the hands would grow larger': {
    why: "'While the rest of the body dwindled' cannot stand alone: it sets one change against another. The comma after 'dwindled' closes it, so the main clause, 'the hands would grow larger', stands clear.",
    not: {
      'While the rest of the body dwindled; the hands would grow larger.':
        "A semicolon cannot follow a clause that cannot stand alone. 'While the rest of the body dwindled' needs a comma.",
      'While the rest of the body dwindled, the hands, would grow larger.':
        "The comma after 'dwindled' is right, but the second splits the subject, 'the hands', from its verb, 'would grow'.",
      'While the rest of the body dwindled; the hands, would grow larger.':
        "Two slips: a semicolon cannot follow the 'While' clause, and the comma after 'hands' splits the subject from its verb.",
    },
    more: "'While' can mean 'during the time that' or 'whereas'. Here it does both: one part of the body shrinks as, and in contrast to, another part grows.",
    tip: "A 'while' clause compares two things in one sentence, which is useful in an essay: 'While one brother hides his fear, the other shows it.'",
  },
  'as it bulged up and caught the light it glistened like wet leather': {
    why: "The opening clause has two verbs joined by 'and': it bulged up and caught the light. The clause ends after 'light', so the comma goes there, before the main clause, 'it glistened like wet leather'.",
    not: {
      'As it bulged up, and caught the light it glistened like wet leather.':
        "This comma splits the two actions of the opening clause, 'bulged up and caught', and leaves none where the clause ends, after 'light'.",
      'As it bulged up and caught the light; it glistened like wet leather.':
        "A semicolon needs a complete sentence before it, and 'As it bulged up and caught the light' cannot stand alone.",
      'As it bulged up and caught the light. It glistened like wet leather.':
        "The full stop leaves the 'As' clause as a sentence by itself. It has no main clause, so it is a fragment.",
    },
    more: 'An opening clause can hold several actions. The comma waits until the whole clause has finished, however long it is.',
    tip: "Wells saves the simile, 'like wet leather', for after the comma, so the image lands at the end. Putting your strongest detail last gives it more force.",
  },
  'if they had no more food than they had had in joness day at least they did not have less': {
    why: "'If they had no more food than they had had in Jones's day' is a long condition, but it still cannot stand alone. One comma closes it, and the main clause follows: 'at least they did not have less'.",
    not: {
      "If they had no more food than they had had in Jones's day; at least they did not have less.":
        "A semicolon must have a complete sentence on each side. However long it is, the 'If' clause cannot stand alone.",
      "If they had no more food than they had had in Jones's day. At least they did not have less.":
        "The full stop strands the whole 'If' clause as a sentence by itself, though it has no main clause. That is a fragment.",
      "If they had no more food than they had had in Jones's day: at least they did not have less.":
        "A colon follows a complete sentence. The 'If' clause is not one, so a comma closes it.",
    },
    more: "'Had had' is not a slip: it is the past perfect of 'have', meaning the food they had once owned in Jones's time. The apostrophe and 's' in 'Jones's' show the days belonged to Jones.",
    tip: 'The longer an opening clause, the more the comma helps. It shows the reader where the condition ends and the main point starts.',
  },
  'as scrooge looked fixedly at this phenomenon it was a knocker again': {
    why: "'As Scrooge looked fixedly at this phenomenon' is a time clause and cannot stand alone. The comma after 'phenomenon' closes it, and the main clause, 'it was a knocker again', follows.",
    not: {
      'As Scrooge looked fixedly at this phenomenon; it was a knocker again.':
        "A semicolon needs a complete sentence on each side, and the 'As' clause is not one.",
      'As Scrooge looked fixedly, at this phenomenon it was a knocker again.':
        "The comma splits 'looked fixedly' from what Scrooge was looking at. The clause runs on to 'phenomenon', so the comma goes there.",
      'As Scrooge looked fixedly at this phenomenon. It was a knocker again.':
        "The full stop leaves the 'As' clause as a sentence by itself, but it has no main clause. That is a fragment.",
    },
    more: "The phenomenon is Marley's face, which Scrooge has just seen in his door knocker. The comma holds the moment of staring; the main clause snaps the knocker back to normal.",
    tip: "When you quote a sentence in an essay, copy the writer's punctuation exactly. It is part of the evidence.",
  },
  'when i saw how deadly white her face was i ceased abruptly': {
    why: "'When I saw how deadly white her face was' is a time clause that cannot stand alone. It ends after 'was', where the comma goes, and the main clause, 'I ceased abruptly', follows.",
    not: {
      'When I saw how deadly white her face was; I ceased abruptly.':
        "A semicolon needs a complete sentence on each side, and the 'When' clause cannot stand alone.",
      'When I saw how deadly white her face was. I ceased abruptly.':
        "The full stop leaves the 'When' clause as a sentence by itself, but it has no main clause. That is a fragment.",
      'When I saw how deadly white, her face was I ceased abruptly.':
        "The comma comes too early. The clause runs to 'was', where it ends, so the comma goes after 'was'.",
    },
    more: 'The narrator stops telling his wife about the Martians when he sees her fear. The long opening clause delays the short main clause, as he stops mid-story.',
    tip: 'A long opening clause followed by a short main clause makes the main clause land hard.',
  },
  'while i was occupied in this way one of the dismounted hussars came running up': {
    why: "'While I was occupied in this way' sets the time and cannot stand alone. The comma goes where that clause ends, after 'way', and the main clause begins with its subject, 'one of the dismounted hussars'.",
    not: {
      'While I was occupied in this way; one of the dismounted hussars came running up.':
        "A semicolon cannot follow 'While I was occupied in this way', which cannot stand alone.",
      'While I was occupied, in this way one of the dismounted hussars came running up.':
        "The comma comes too early: 'in this way' belongs to the opening clause, which ends after 'way'.",
      'While I was occupied in this way one of the dismounted hussars, came running up.':
        "This comma splits the subject, 'one of the dismounted hussars', from its verb, 'came'. It belongs after 'way'.",
    },
    more: 'Hussars are soldiers on horseback; dismounted ones are on foot. A long subject like this one must stay joined to its verb.',
    tip: 'When the subject of the main clause is long, check that no stray comma has slipped in before its verb.',
  },
  'if i am the chief of sinners i am the chief of sufferers also': {
    why: "'If I am the chief of sinners' is a condition and cannot stand alone. A comma closes it, and the main clause answers it: 'I am the chief of sufferers also'.",
    not: {
      'If I am the chief of sinners; I am the chief of sufferers also.':
        "A semicolon cannot follow 'If I am the chief of sinners', which cannot stand alone.",
      'If I am the chief of sinners. I am the chief of sufferers also.':
        "The full stop strands the 'If' clause as a sentence by itself. It is a fragment.",
      'If I am the chief of sinners: I am the chief of sufferers also.':
        "A colon follows a complete sentence, and the 'If' clause is not one. A comma closes it.",
    },
    more: 'Jekyll writes this in a letter. The two halves mirror each other, sinner and sufferer, and the comma is the hinge between them.',
    tip: 'A balanced sentence like this, built on a repeated pattern, makes a memorable quotation for an essay.',
  },
  'after breakfast instead of working i decided to walk down towards the common': {
    why: "Two openers come before the main clause: 'After breakfast' and 'instead of working'. Each is followed by a comma, so the second sits between a pair, and the main clause, 'I decided to walk down towards the common', runs on with no break.",
    not: {
      'After breakfast; instead of working I decided to walk down towards the common.':
        "A semicolon cannot follow 'After breakfast', which is not a complete sentence, and 'instead of working' needs a comma to close it.",
      'After breakfast; instead of working, I decided, to walk down towards the common.':
        "The semicolon after 'breakfast' needs to be a comma, and the comma after 'decided' splits the verb from what he decided to do.",
      'After breakfast, instead of working I decided, to walk down towards the common.':
        "'Instead of working' opens with a comma but never closes, and the comma after 'decided' splits the verb from 'to walk'.",
    },
    more: "When two openers stack up, give each its own comma. A phrase that interrupts, like 'instead of working', is marked off on both sides.",
    tip: "Read the main clause alone: 'I decided to walk down towards the common.' A comma inside it would be a mistake; the commas belong to the openers.",
  },
  'meanwhile through the agency of whymper napoleon was engaged in complicated negotiations with frederick and pilkington':
    {
      why: "Two openers come before the main clause: 'Meanwhile', a linking word, and 'through the agency of Whymper', which says how. Each takes a comma, so the main clause starts cleanly at 'Napoleon' and runs to the end with no break.",
      not: {
        'Meanwhile; through the agency of Whymper Napoleon was engaged in complicated negotiations with Frederick and Pilkington.':
          "A semicolon cannot follow the single word 'Meanwhile', and with no comma after 'Whymper', 'Whymper Napoleon' runs together.",
        'Meanwhile; through the agency of Whymper, Napoleon, was engaged in complicated negotiations with Frederick and Pilkington.':
          "The semicolon after 'Meanwhile' should be a comma, and the comma after 'Napoleon' splits the subject from its verb, 'was engaged'.",
        'Meanwhile, through the agency of Whymper Napoleon, was engaged in complicated negotiations with Frederick and Pilkington.':
          "No comma closes the opener after 'Whymper', and the comma after 'Napoleon' splits him from his verb, 'was engaged'.",
      },
      more: "'Through the agency of Whymper' means using Whymper, the solicitor, as a go-between. Napoleon deals with the human world only through him.",
      tip: "With several openers, find the main clause first: 'Napoleon was engaged in complicated negotiations'. Every comma before it marks off an opener.",
    },
  'as soon as they were weaned napoleon took them away from their mothers saying that he would make himself responsible for their education':
    {
      why: "Two commas do two jobs. One closes the opening clause, 'As soon as they were weaned'. The other, before 'saying', shows that the saying belongs to Napoleon; without it, 'their mothers saying' would make the mothers the speakers.",
      not: {
        'As soon as they were weaned; Napoleon took them away from their mothers, saying that he would make himself responsible for their education.':
          "A semicolon cannot follow 'As soon as they were weaned', which cannot stand alone. A comma closes the opening clause.",
        'As soon as they were weaned, Napoleon took them away from their mothers saying that he would make himself responsible for their education.':
          "Without a comma before 'saying', it reads as if the mothers were saying it. The comma shows that Napoleon was speaking.",
        'As soon as they were weaned; Napoleon took them away from their mothers saying that he would make himself responsible for their education.':
          "Two slips: a semicolon after the opening clause, and no comma before 'saying', so the mothers seem to be speaking.",
      },
      more: 'The puppies Napoleon takes grow into the fierce dogs that later chase Snowball off the farm. This calm sentence hides the start of his private army.',
      tip: "A phrase starting with an '-ing' word at the end of a sentence often needs a comma, so it attaches to the right person.",
    },
  'my fathers family name being pirrip and my christian name philip my infant tongue could make of both names nothing longer or more explicit than pip':
    {
      why: "The sentence opens with a long phrase that cannot stand alone: 'My father's family name being Pirrip, and my Christian name Philip'. A comma, not a semicolon, closes it before the main clause. The family name is his father's, so it takes an apostrophe.",
      not: {
        'My fathers family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip.':
          "The family name belongs to his father, so 'father's' needs an apostrophe and 's'.",
        "My father's family name being Pirrip, and my Christian name Philip; my infant tongue could make of both names nothing longer or more explicit than Pip.":
          'The opening phrase cannot stand alone, so a semicolon cannot follow it. A comma closes it before the main clause.',
        'My fathers family name being Pirrip, and my Christian name Philip; my infant tongue could make of both names nothing longer or more explicit than Pip.':
          "Two slips: 'father's' needs its apostrophe, and a semicolon cannot follow the opening phrase, which is not a complete sentence.",
      },
      more: "These are the novel's opening words. Pip explains his own name before anything else, as a child would.",
      tip: 'However long an opening phrase is, it still needs a main clause. Find the main clause, here "my infant tongue could make", and put the comma before it.',
    },
  'my uncle is a chef he works in a hotel': {
    why: "'My uncle is a chef' and 'He works in a hotel' are two complete sentences. A new subject, 'He', with its own verb, 'works', is a sign that a new sentence has begun, so a full stop separates them.",
    not: {
      'My uncle is a chef, he works in a hotel.':
        'A comma alone joins two complete sentences, which is a comma splice. A full stop belongs after "chef".',
      'My uncle, is a chef, he works in a hotel.':
        "Two slips: the comma after 'uncle' splits the subject from 'is', and the comma after 'chef' joins two complete sentences, a comma splice.",
      'My uncle, is a chef. He works in a hotel.':
        "The full stop is right, but the comma after 'uncle' splits the subject from its verb, 'is'.",
    },
    more: "Comma splices often happen when the second sentence starts with a pronoun such as 'he', 'she', 'it' or 'they'. Watch for a comma just before one.",
    tip: "Look for 'he', 'she', 'it' or 'they' straight after a comma. If a complete sentence follows, change the comma to a full stop.",
  },
  'it was late, we went home': {
    why: "'It was late' and 'we went home' could each stand alone, so a comma cannot join them by itself. Adding 'so' after the comma joins them properly and shows that the lateness caused the trip home.",
    not: {
      'It was late, so, we went home.':
        "The comma before 'so' is right, but the one after it separates 'so' from the sentence it introduces.",
      'It was late so, we went home.':
        "'So' is the right joining word, but the comma belongs before it, at the join, not after it.",
      'It was late we went home.':
        'Two complete sentences run into each other here with nothing to separate or join them.',
    },
    more: "A comma splice can be mended four ways: a joining word ('so'), a semicolon, a full stop, or by making one part depend on the other: 'As it was late, we went home.'",
    tip: "Test any comma between two clauses. If each side could be a sentence alone, the comma needs 'and', 'but' or 'so' beside it.",
  },
  'the test was hard, everyone passed it': {
    why: "The two parts could each be a sentence, so a comma alone cannot join them. 'But' can, with a comma before it, and it shows the contrast: the test was hard, yet everyone passed.",
    not: {
      'The test was hard, but, everyone passed it.':
        "The comma before 'but' is right, but the one after it separates 'but' from the sentence it introduces.",
      'The test was hard but, everyone passed it.':
        "'But' is the right word, but the comma belongs before it, at the point where the two sentences meet.",
      'The test was hard everyone passed it.':
        'The two sentences run into each other with no punctuation or joining word between them.',
    },
    more: "Choose the joining word for the meaning: 'and' adds, 'but' contrasts, 'so' gives a result. The comma goes before whichever you choose.",
    tip: "A contrast is a good place for 'but'. Two complete sentences joined by 'but' usually take a comma before it.",
  },
  'she loves reading, her brother prefers sport': {
    why: 'Each half is a complete sentence, and the two are closely linked by contrast. A semicolon can join two complete sentences like this, where a comma alone cannot.',
    not: {
      'She loves reading; her brother, prefers sport.':
        "The semicolon is right, but the comma after 'brother' splits the subject from its verb, 'prefers'.",
      'She loves reading: her brother prefers sport.':
        "A colon says that what follows explains what comes before. Her brother's love of sport does not explain her reading; it contrasts with it.",
      'She loves reading, her brother, prefers sport.':
        "This is still a comma splice, and the comma after 'brother' splits the subject from its verb, 'prefers'.",
    },
    more: "A semicolon works like a strong comma or a soft full stop. Use it between two complete sentences that belong together: 'Some love the summer; others long for snow.'",
    tip: 'Between two clauses, use a semicolon only where a full stop would also be correct. If either side cannot stand alone, choose another mark.',
  },
  'the rain stopped, the sun came out': {
    why: "'The rain stopped' and 'the sun came out' are both complete sentences. 'And' can join them, with a comma before it; a comma alone cannot.",
    not: {
      'The rain stopped, and the sun, came out.':
        "The comma before 'and' is right, but the one after 'sun' splits the subject from its verb, 'came out'.",
      'The rain stopped and, the sun came out.':
        "'And' is right, but the comma belongs before it, at the join, not after it.",
      'The rain stopped, and, the sun came out.':
        "The comma before 'and' is right, but the second, after 'and', splits the joining word from the sentence it introduces.",
    },
    more: "With two short sentences joined by 'and', many writers leave out the comma: 'We knocked and we waited.' What is never right is a comma straight after the 'and'.",
    tip: "When you join two sentences, place the comma first and then the joining word: ', and', ', but', ', so'.",
  },
  'he trained every day, he wanted to win': {
    why: "'Because he wanted to win' gives the reason, and 'because' joins it to the main clause. When the 'because' clause comes second, no comma is needed before or after 'because'.",
    not: {
      'He trained every day; because he wanted to win.':
        "'Because he wanted to win' cannot stand alone, so a semicolon cannot come before it. 'Because' does the joining.",
      'He trained every day, because, he wanted to win.':
        "'Because' is the right joining word, but the commas around it cut it off from the clause it begins.",
      'He trained every day because, he wanted to win.':
        "'Because' belongs with the words that follow it, 'he wanted to win'. The comma after it splits that clause in two.",
    },
    more: "'Because', 'although', 'when' and 'if' join a clause that cannot stand alone to a main clause. Unlike an opening 'however', they lead straight into their clause, with no comma after them.",
    tip: "A 'because' clause can open a sentence too. Then the comma goes after the whole clause: 'Because the road was icy, we drove slowly.'",
  },
  'we waited for an hour, the bus never arrived': {
    why: "'We waited for an hour' and 'the bus never arrived' are two complete sentences. The simplest mend is a full stop after the first and a capital letter to start the second.",
    not: {
      'We waited for an hour. The bus, never arrived.':
        "The full stop is right, but the comma after 'bus' splits the subject from its verb, 'never arrived'.",
      'We waited for an hour the bus never arrived.':
        'The two sentences run together with nothing between them, so the reader cannot see where one ends.',
      'We waited for an hour the bus, never arrived.':
        "Two slips: the two sentences run together with nothing between them, and the comma after 'bus' splits the subject from its verb.",
    },
    more: "Two short sentences side by side can build tension in a story: 'We knocked. Nobody answered.' A comma splice there would blur the effect.",
    tip: 'When you proofread, read each sentence on its own. If it holds two complete thoughts joined only by a comma, split it or join it properly.',
  },
  'the museum was closed, we visited the park instead': {
    why: "Both parts could stand alone as sentences. 'So' joins them and shows the result: the museum was shut, and as a result they went to the park. The comma goes before 'so'.",
    not: {
      'The museum was closed, so we visited, the park instead.':
        "The comma before 'so' is right, but the one after 'visited' splits the verb from the place visited.",
      'The museum was closed so, we visited the park instead.':
        "'So' is the right word, but the comma belongs before it, where the two sentences meet.",
      'The museum was closed, so, we visited the park instead.':
        "The comma before 'so' is right, but the one after it separates 'so' from the sentence it introduces.",
    },
    more: "'So' shows a result. If what follows is not a result of what came before, 'and' or 'but' fits better.",
    tip: "In explanations, 'so' links a cause to its effect. Use it to show you understand why something happened.",
  },
  'i love football my favourite position is goalkeeper': {
    why: "'I love football' and 'my favourite position is goalkeeper' are both complete sentences, and they are closely linked. A semicolon can join them; a comma alone cannot.",
    not: {
      'I love football, my favourite position is goalkeeper.':
        'A comma alone joins two complete sentences, which makes a comma splice. A semicolon or a full stop is needed.',
      'I love football; my favourite position, is goalkeeper.':
        "The semicolon is right, but the comma after 'position' splits the subject from its verb, 'is'.",
      'I love football, my favourite position, is goalkeeper.':
        "Two slips: a comma splice after 'football', and a comma between 'my favourite position' and 'is'.",
    },
    more: 'A full stop would also be correct: "I love football. My favourite position is goalkeeper." The semicolon shows the two ideas belong together.',
    tip: 'Before you use a comma between two clauses, cover one side. If the other side is a complete sentence and so is the first, the comma is not enough.',
  },
  'we were hungry, we ate the sandwiches': {
    why: "Adding 'As' turns 'we were hungry' into a reason that cannot stand alone. It opens the sentence and is closed by a comma, so the main clause, 'we ate the sandwiches', follows. The comma splice is mended.",
    not: {
      'As we were hungry. We ate the sandwiches.':
        "The full stop leaves 'As we were hungry.' as a fragment: a reason with no main clause. A comma joins it to the main clause.",
      'As we were hungry; we ate the sandwiches.':
        "'As we were hungry' cannot stand alone, so a semicolon cannot follow it. A comma closes the opening clause.",
      'As, we were hungry we ate the sandwiches.':
        "'As' joins straight on to its clause and takes no comma. The comma belongs after 'hungry', where the opening clause ends.",
    },
    more: "Making one clause depend on the other is often the neatest repair, because the joining word, here 'As', also shows how the two ideas connect.",
    tip: "'As', 'because', 'since' and 'when' can all mend a comma splice, if you place them at the start of the clause that gives the reason or time.",
  },
  'she plays the piano she also sings in a choir': {
    why: "'She plays the piano' and 'she also sings in a choir' are both complete sentences. 'Also' adds an idea but cannot join them, so a semicolon does the joining.",
    not: {
      'She plays the piano, she also sings in a choir.':
        "'Also' is not a joining word, so a comma before 'she also' still joins two complete sentences. That is a comma splice.",
      'She plays the piano; she also, sings in a choir.':
        "The semicolon is right, but the comma after 'also' splits it from the verb it belongs with, 'sings'.",
      'She plays the piano, she also, sings in a choir.':
        "Two slips: a comma splice after 'piano', and a comma that splits 'also' from 'sings'.",
    },
    more: "Words such as 'also', 'then' and 'however' link ideas without joining sentences. Only joining words such as 'and', 'but' and 'so' can follow a comma between two sentences.",
    tip: "If you want a comma here, add a joining word: 'She plays the piano, and she also sings in a choir.'",
  },
  'the road was icy therefore we drove slowly': {
    why: "'The road was icy' and 'we drove slowly' are complete sentences. 'Therefore' shows that one caused the other, but it cannot join them, so a semicolon comes before it and a comma after it.",
    not: {
      'The road was icy, therefore, we drove slowly.':
        "'Therefore' is not a joining word, so a comma before it cannot join two complete sentences. That is a comma splice.",
      'The road was icy, therefore we drove slowly.':
        'A comma alone still joins two complete sentences here; "therefore" does not change that.',
      'The road was icy therefore, we drove slowly.':
        "With nothing before 'therefore', the two sentences run together. A semicolon or a full stop belongs there.",
    },
    more: "'Therefore', 'however', 'consequently' and 'meanwhile' all behave this way between two sentences: a strong mark before, a comma after.",
    tip: "In an essay, '; therefore,' shows a step in your argument. Check for the semicolon before it.",
  },
  'my aunt lives in wales, she breeds sheep': {
    why: "Turning one sentence into a 'who' clause mends the splice: 'who lives in Wales' becomes extra information about the aunt. It sits between a pair of commas, and the main clause, 'My aunt breeds sheep', carries the sentence.",
    not: {
      'My aunt, who lives in Wales; breeds sheep.':
        "The comma after 'aunt' opens the extra information, but a semicolon cannot close it. It needs a matching comma.",
      'My aunt, who lives in Wales breeds sheep.':
        "The clause 'who lives in Wales' opens with a comma but never closes, so it runs into 'breeds sheep'.",
      'My aunt; who lives in Wales; breeds sheep.':
        'Semicolons cannot mark off extra information: that is the job of a pair of commas. Neither part here could stand alone as a sentence.',
    },
    more: 'A comma splice can be mended by joining, splitting or folding one sentence into the other, as here. Folding gives the smoothest sentence.',
    tip: 'When two short sentences are about the same person, try folding one into the other with "who".',
  },
  'come here at once said the teacher': {
    why: "The spoken words go inside speech marks. Because the sentence carries on after them with 'said the teacher', the spoken words end with a comma, inside the closing speech marks, and the whole sentence ends with a full stop.",
    not: {
      '"Come here at once" said the teacher.':
        "The speech marks are right, but a comma is needed after 'once', inside the speech marks, before 'said the teacher'.",
      '"Come here at once", said the teacher.':
        'The comma belongs inside the closing speech marks, as part of the spoken words, not after them.',
      '"Come here at once." said the teacher.':
        "A full stop inside the speech marks would end the whole sentence, but it carries on with 'said the teacher'. Use a comma there.",
    },
    more: 'When speech comes before "said", the spoken words end with a comma, a question mark or an exclamation mark, always inside the speech marks. The full stop comes only at the end of the whole sentence.',
    tip: "In story writing, check each line of speech: speech marks round the words, the mark inside them, and a small letter for 'said' or 'asked' after it.",
  },
  'tom asked are we nearly there yet': {
    why: "Tom's words are a question, so they end with a question mark, inside the speech marks with the words it belongs to. A comma after 'asked' introduces the speech, which opens with a capital letter.",
    not: {
      'Tom asked, "Are we nearly there yet"?':
        "The question mark belongs to Tom's words, so it goes inside the closing speech marks, not after them.",
      'Tom asked "Are we nearly there yet?"':
        "The question mark is in the right place, but a comma is needed after 'asked' to introduce the speech.",
      'Tom asked "Are we nearly there yet"?':
        "Two slips: no comma after 'asked', and the question mark sits outside the speech marks instead of inside.",
    },
    more: "When the reporting clause comes first ('Tom asked'), put a comma after it, then open the speech with a capital letter. The end mark of the speech stays inside the speech marks.",
    tip: 'A question inside speech marks is still a question. Check that it ends with a question mark, inside the marks.',
  },
  'i am so excited shouted maya': {
    why: "Maya is shouting with strong feeling, so her words end with an exclamation mark, inside the speech marks. The sentence goes on with 'shouted Maya', but no comma is added: the exclamation mark does the comma's job.",
    not: {
      '"I am so excited!", shouted Maya.':
        "Maya's words already end with an exclamation mark. Adding a comma after it doubles the punctuation: use one mark, not both.",
      '"I am so excited" shouted Maya.':
        "Maya's words need a mark at the end, inside the speech marks, before 'shouted Maya'. Here they have none.",
      '"I am so excited"! shouted Maya.':
        "The exclamation mark belongs to Maya's words, so it goes inside the speech marks with them.",
    },
    more: "Spoken words end with one mark only: a comma, a question mark or an exclamation mark. After a question mark or an exclamation mark, the sentence carries on with a small letter: 'shouted Maya'.",
    tip: "Let the reporting verb do some of the work. 'Shouted' already tells the reader how the words were said.",
  },
  'please be quiet whispered the librarian': {
    why: "The librarian's exact words, 'Please be quiet', go inside speech marks. The sentence carries on after them, so they end with a comma placed inside the closing speech marks, and the full stop comes at the very end.",
    not: {
      '"Please be quiet", whispered the librarian.':
        'The comma belongs inside the closing speech marks, with the spoken words, not after them.',
      'Please be quiet, whispered the librarian.':
        "The librarian's exact words need speech marks round them, so the reader can tell what was said from who said it.",
      'Please be quiet whispered the librarian.':
        'There are no speech marks round the spoken words and no comma to separate them from "whispered the librarian".',
    },
    more: 'A request or a command in speech usually ends with a comma before the reporting verb. Use an exclamation mark only if it is shouted: a whisper rarely is.',
    tip: "Vary your reporting verbs: 'whispered', 'muttered' and 'called' tell the reader more than 'said'.",
  },
  'she said i will meet you after school': {
    why: "Only her spoken words, 'I will meet you after school', go inside speech marks. A comma after 'said' introduces them, they open with a capital letter, and the full stop that ends them goes inside the closing marks.",
    not: {
      'She said, "I will meet you after school".':
        'The comma is right, but the full stop ends her spoken sentence, so it goes inside the speech marks.',
      '"She said, I will meet you after school."':
        "The speech marks go round the whole sentence, but 'She said' is not part of what she said. They belong round her words only.",
      'She said "I will meet you after school".':
        "Two slips: no comma after 'said' to introduce the speech, and the full stop sits outside the speech marks.",
    },
    more: "Speech marks show exactly which words were spoken. 'She said' is the narrator's words, so it stays outside them.",
    tip: 'Before you open speech marks, ask which words the person actually said aloud. Only those go inside.',
  },
  'wait for me called jack': {
    why: "Jack is calling out, so his words end with an exclamation mark, placed inside the speech marks. The sentence then carries on with 'called Jack', with no comma, because the exclamation mark has already ended the speech.",
    not: {
      '"Wait for me!", called Jack.':
        "The exclamation mark already ends Jack's words, so no comma is added after it. Use one mark, not two.",
      'Wait for me!, called Jack.':
        "Two slips: Jack's words need speech marks round them, and no comma follows the exclamation mark.",
      'Wait for me! called Jack.':
        "Jack's exact words need speech marks round them, so the reader can tell them from the narrator's words.",
    },
    more: "An exclamation mark or a question mark inside the speech marks replaces the comma. The word after it, 'called', stays lower case because the sentence has not ended.",
    tip: 'If a character shouts, one exclamation mark is enough. Several in a row make writing look careless, not loud.',
  },
  'dr patel will see you now said the receptionist': {
    why: "The receptionist's exact words go inside speech marks. They come before 'said the receptionist', so they end with a comma, inside the closing marks, and the full stop comes at the end of the whole sentence.",
    not: {
      '"Dr Patel will see you now" said the receptionist.':
        "The speech marks are right, but the spoken words need a comma at the end, inside the speech marks, before 'said'.",
      '"Dr Patel will see you now." Said the receptionist.':
        "The full stop and capital letter split one sentence in two. 'Said the receptionist' cannot stand alone, so a comma ends the speech.",
      '"Dr Patel will see you now", said the receptionist.':
        'The comma belongs inside the closing speech marks, as part of the spoken words.',
    },
    more: "British writing usually puts no full stop after short titles such as 'Dr', 'Mr' and 'Mrs', because the abbreviation ends with the same letter as the full word.",
    tip: 'When the reporting clause follows the speech, it starts with a small letter. Only a name, like Patel, keeps its capital.',
  },
  'bravery is not enough said squealer': {
    why: "Squealer's words go inside speech marks. The sentence carries on after them with 'said Squealer', so the spoken words end with a comma inside the closing marks, and the full stop comes at the very end.",
    not: {
      '"Bravery is not enough." Said Squealer.':
        "The full stop and capital split one sentence in two, and 'Said Squealer.' cannot stand alone. The speech ends with a comma.",
      '"Bravery is not enough", said Squealer.':
        'The comma belongs inside the closing speech marks, with the spoken words, not after them.',
      '"Bravery is not enough" said Squealer.':
        "The spoken words need a comma at the end, inside the speech marks, before 'said Squealer'.",
    },
    more: "Squealer is replying to an animal who praised Snowball's bravery. His short, flat reply dismisses it before he argues that loyalty matters more.",
    tip: 'When the speech comes first, the reporting clause after it starts with a small letter: "said", "asked", "replied".',
  },
  'what is that gun firing for said boxer': {
    why: "Boxer asks a question, so his words end with a question mark inside the speech marks. The question mark does the comma's job, so 'said Boxer' follows with no comma and a small letter.",
    not: {
      '"What is that gun firing for", said Boxer.':
        "Two slips: Boxer's words are a question and need a question mark, and the mark ending the speech goes inside the speech marks.",
      '"What is that gun firing for," said Boxer.':
        "Boxer's words ask a question, so they end with a question mark, not a comma, even though 'said Boxer' follows.",
      '"What is that gun firing for"? said Boxer.':
        "The question mark belongs to Boxer's words, so it goes inside the speech marks with them.",
    },
    more: 'The gun is firing to celebrate a "victory" in which the windmill has just been destroyed. Boxer\'s plain question shows he cannot see what there is to celebrate.',
    tip: 'Spoken words end with one mark only: a comma, a question mark or an exclamation mark, never two.',
  },
  'we must get help at once said clover': {
    why: "Only Clover's spoken words, 'We must get help at once', go inside the speech marks. They end with a comma inside the closing marks, because the sentence carries on with 'said Clover', the narrator's words, outside them.",
    not: {
      '"We must get help at once." said Clover.':
        "A full stop inside the speech marks would end the whole sentence, but it goes on with 'said Clover'. Use a comma there.",
      'We must get help at once, said Clover.':
        "Clover's exact words need speech marks round them, so the reader can tell what was said from who said it.",
      '"We must get help at once, said Clover."':
        "The speech marks close after 'Clover', so they wrap the narrator's words too. They belong round 'We must get help at once' only.",
    },
    more: "Clover says this when Boxer has collapsed. The urgent, short speech contrasts with the pigs' slow response that follows.",
    tip: 'Before closing the speech marks, ask whether the next word was spoken aloud. If not, close them.',
  },
  'and shall i still be allowed to wear ribbons in my mane asked mollie': {
    why: "Mollie asks a question, so her words end with a question mark inside the speech marks. The sentence is not over: 'asked Mollie' follows, with a small letter, because a question mark inside speech does not end the whole sentence.",
    not: {
      '"And shall I still be allowed to wear ribbons in my mane," asked Mollie.':
        "Mollie's words ask a question, with 'shall' before 'I', so they end with a question mark, not a comma.",
      '"And shall I still be allowed to wear ribbons in my mane", asked Mollie.':
        "Two slips: Mollie's words ask a question and need a question mark, and the mark ending the speech goes inside the speech marks.",
      '"And shall I still be allowed to wear ribbons in my mane"? asked Mollie.':
        "The question mark belongs to Mollie's words, so it goes inside the speech marks with them.",
    },
    more: "Mollie's only worry about the Rebellion is her ribbons and sugar. Her question shows the reader how little she cares for its ideas.",
    tip: "After a question mark or exclamation mark inside speech marks, carry on with a small letter: 'asked Mollie', not 'Asked Mollie'.",
  },
  'a horses lungs do not last for ever she said to him': {
    why: "Clover's exact words go inside speech marks. The sentence carries on after them with 'she said to him', so they end with a comma inside the closing marks, and the full stop comes at the very end.",
    not: {
      '"A horse\'s lungs do not last for ever." she said to him.':
        "A full stop inside the speech marks would end the whole sentence, but it carries on with 'she said to him'. A comma belongs there.",
      '"A horse\'s lungs do not last for ever", she said to him.':
        "The comma ending the speech belongs inside the closing speech marks, with Clover's words.",
      "A horse's lungs do not last for ever, she said to him.":
        "Clover's exact words need speech marks round them, so the reader can tell what she said from who said it.",
    },
    more: "'A horse's lungs' means any horse's, Boxer's included. Clover chooses a general truth to warn him gently.",
    tip: 'When you check dialogue, check the words inside the speech marks as carefully as the marks themselves.',
  },
  'major sholto was a very particular friend of papas she said': {
    why: "Mary Morstan's exact words go inside speech marks. The sentence carries on with 'she said', so her words end with a comma inside the closing marks. 'Papa's' keeps its apostrophe: one of her father's friends.",
    not: {
      '"Major Sholto was a very particular friend of papa\'s." she said.':
        "A full stop inside the speech marks would end the whole sentence, but it carries on with 'she said'. A comma belongs there.",
      '"Major Sholto was a very particular friend of papa\'s", she said.':
        'The comma ending the speech belongs inside the closing speech marks, with her words.',
      "Major Sholto was a very particular friend of papa's, she said.":
        'Her exact words need speech marks round them, so the reader can tell what she said from who said it.',
    },
    more: "The phrase 'friend of papa's', like 'a friend of mine', uses both 'of' and a possessive. It is correct and very common.",
    tip: "'A friend of Sam's' and 'a friend of Sam' are both used, but if you write the 's', it needs its apostrophe.",
  },
  'ill be back soon said dad': {
    why: "'I'll' is short for 'I will', and its apostrophe marks the missing letters. The spoken words end with a comma inside the speech marks, because 'said Dad' follows.",
    not: {
      '"Ill be back soon," said Dad.':
        "'I'll' is short for 'I will', so it needs an apostrophe. Without one it reads as 'ill', meaning unwell.",
      '"I\'ll be back soon", said Dad.':
        'The apostrophe is right, but the comma ending the speech belongs inside the closing speech marks.',
      '"Ill be back soon", said Dad.':
        "Two slips: 'I'll' needs its apostrophe, and the comma ending the speech belongs inside the speech marks.",
    },
    more: "Contractions such as I'll, can't and won't are natural in dialogue. In formal essays, write the words in full: I will, cannot, will not.",
    tip: 'Check every contraction in your dialogue for its apostrophe. A missing one can make a different word, as "ill" shows.',
  },
  'the guide explained this castle is over 800 years old': {
    why: "The guide's exact words go inside speech marks, introduced by a comma after 'explained'. They form a full sentence, so they open with a capital letter, and the full stop that ends them goes inside the closing speech marks.",
    not: {
      'The guide explained, "This castle is over 800 years old".':
        "The comma is right, but the full stop belongs to the guide's sentence, so it goes inside the speech marks, before they close.",
      'The guide explained "This castle is over 800 years old."':
        "The full stop is in the right place, but a comma is needed after 'explained' to introduce the speech.",
      'The guide explained "This castle is over 800 years old".':
        "Two slips: no comma after 'explained' to introduce the speech, and the full stop sits outside the speech marks.",
    },
    more: 'When the reporting clause comes first, the speech ends the sentence, so its final mark closes both the speech and the sentence. It sits inside the speech marks.',
    tip: "If you quote someone's exact words, use speech marks. If you report them in your own words ('The guide explained that the castle was old'), use none.",
  },
  'help i cant swim he yelled': {
    why: "The shouted words go inside speech marks and end with an exclamation mark, with no comma after it. Inside them, 'can't' needs its apostrophe for the missing letters of 'cannot', and a comma separates the cry 'Help' from the rest.",
    not: {
      '"Help, I cant swim!" he yelled.':
        "The speech is punctuated well, but 'cant' needs an apostrophe: it is short for 'cannot', and the apostrophe marks the missing letters.",
      '"Help, I can\'t swim!", he yelled.':
        'The exclamation mark already ends the speech, so no comma follows it. One mark is enough.',
      '"Help, I cant swim!", he yelled.':
        "Two slips: 'cant' needs an apostrophe for the missing letters, and the comma after the exclamation mark doubles the punctuation.",
    },
    more: "A cry such as 'Help' or 'Oh' is often followed by a comma inside the speech. The whole of what is shouted still takes only one end mark.",
    tip: 'When you check dialogue, check the words inside it too: apostrophes in contractions are easy to miss.',
  },
  'perhaps you are right watson he said': {
    why: "Holmes is speaking to Watson, so 'Watson' is a word of address and takes a comma before it. The speech then ends with a comma inside the closing marks, because 'he said' follows.",
    not: {
      '"Perhaps you are right Watson," he said.':
        "The comma at the end of the speech is right, but 'Watson' is the person being spoken to and needs a comma before his name.",
      '"Perhaps you are right, Watson", he said.':
        "The comma before 'Watson' is right, but the comma ending the speech belongs inside the closing speech marks.",
      '"Perhaps you are right Watson", he said.':
        "Two slips: no comma before 'Watson', the person addressed, and the comma ending the speech sits outside the speech marks.",
    },
    more: 'Holmes says this when Watson refuses the cocaine he offers. He seems to agree, then explains why he will carry on taking it.',
    tip: 'Inside speech, names of the people spoken to still need their commas.',
  },
  'the date asked holmes opening his note-book': {
    why: "Holmes asks a question in two words: 'The date?' Even a short question takes a question mark, inside the speech marks. The comma after 'Holmes' introduces what he was doing as he asked.",
    not: {
      '"The date," asked Holmes, opening his note-book.':
        "Holmes is asking for something, as 'asked' shows, so his words end with a question mark, not a comma.",
      '"The date", asked Holmes, opening his note-book.':
        'Two slips: Holmes is asking, so his words need a question mark, and the mark ending the speech goes inside the speech marks.',
      '"The date"? asked Holmes, opening his note-book.':
        "The question mark belongs to Holmes's words, so it goes inside the speech marks.",
    },
    more: "Holmes's questions are short and practical. His clipped style shows a detective gathering facts, not offering sympathy.",
    tip: "Short questions in dialogue, such as 'Why?' or 'The date?', still need a question mark.",
  },
  'stop shouted the guard you cannot go in there': {
    why: "The guard says two separate sentences. 'Stop' ends with an exclamation mark, then 'shouted the guard' ends the first sentence with a full stop. The second spoken sentence opens new speech marks and a capital letter.",
    not: {
      '"Stop!" shouted the guard, "you cannot go in there."':
        "'Stop' and 'You cannot go in there' are two separate spoken sentences, so a full stop follows 'the guard' and a capital starts the second.",
      '"Stop!", shouted the guard. "You cannot go in there."':
        'The exclamation mark already ends the shout, so no comma follows it.',
      '"Stop!", shouted the guard, "you cannot go in there."':
        "Two slips: no comma follows the exclamation mark, and the guard's second sentence needs a full stop before it and a capital letter.",
    },
    more: 'Compare a split sentence, which carries on with a comma and a small letter. Here the spoken words are two sentences, so a full stop follows the reporting clause.',
    tip: 'To choose between a comma and a full stop after "said" in the middle of speech, ask whether the speaker has finished a sentence.',
  },
  'if your friend she said would be good enough to stop he might be of inestimable service to me': {
    why: "Mary Morstan's one sentence is split by 'she said'. The first part ends with a comma inside the speech marks; 'she said' is followed by a comma, because her sentence goes on; and the second part continues with a small letter: 'would be good enough...'",
    not: {
      '"If your friend," she said. "Would be good enough to stop, he might be of inestimable service to me."':
        "The full stop after 'said' ends the sentence too soon. Her sentence carries on, so a comma follows 'said' and 'would' keeps a small letter.",
      '"If your friend" she said, "would be good enough to stop, he might be of inestimable service to me."':
        "The first part of the speech needs a comma at its end, inside the speech marks, before 'she said'.",
      '"If your friend" she said. "Would be good enough to stop, he might be of inestimable service to me."':
        "Two slips: the first part of the speech needs a comma inside the speech marks, and the full stop after 'said' ends the sentence too soon.",
    },
    more: 'She is asking Watson, who was about to leave, to stay. Splitting the speech lets the writer show her gesture of holding him back mid-sentence.',
    tip: 'When a reporting clause interrupts one spoken sentence, use commas on both sides of it and carry on with a small letter.',
  },
  'for my part said holmes whatever you may choose to say will go no further': {
    why: "Holmes's one sentence is split by 'said Holmes'. The first part ends with a comma inside the speech marks, another comma follows 'said Holmes', and the second part carries on with a small letter and ends with the full stop inside.",
    not: {
      '"For my part" said Holmes, "whatever you may choose to say will go no further".':
        'Two slips: the first part of the speech needs a comma inside the speech marks, and the final full stop belongs inside the closing marks.',
      '"For my part" said Holmes, "whatever you may choose to say will go no further."':
        "The first part of the speech needs a comma at its end, inside the speech marks, before 'said Holmes'.",
      '"For my part," said Holmes, "whatever you may choose to say will go no further".':
        'The full stop ends the spoken sentence, so it goes inside the closing speech marks.',
    },
    more: 'To decide between a comma and a full stop after the reporting clause, put the speech back together. If it is one sentence, use a comma; if two, a full stop.',
    tip: 'Check a split speech by reading the spoken words alone. If they make one sentence, the second part starts with a small letter.',
  },
  'boxer who had now had time to think things over voiced the general feeling by saying if comrade napoleon says it it must be right':
    {
      why: "A pair of commas marks off the detail about Boxer. A colon then introduces his words. Inside them, a comma closes 'If Comrade Napoleon says it', so 'it must be right' is not misread, and the full stop sits inside the closing speech marks.",
      not: {
        'Boxer who had now had time to think things over voiced the general feeling by saying: "If Comrade Napoleon says it it must be right."':
          "Boxer is named, so 'who had now had time to think things over' needs a pair of commas, and 'says it it' needs a comma to be read.",
        'Boxer who had now had time to think things over, voiced the general feeling by saying: "If Comrade Napoleon says it, it must be right".':
          "A lone comma after 'over' splits Boxer from his verb, 'voiced', and the full stop belongs inside the closing speech marks.",
        'Boxer, who had now had time to think things over voiced the general feeling by saying: "If Comrade Napoleon says it it must be right".':
          "The commas round the clause are incomplete, 'says it it' needs a comma, and the full stop belongs inside the speech marks.",
      },
      more: "Boxer's words become his maxim, 'Napoleon is always right'. The colon gives them weight, like a quotation in a speech.",
      tip: 'A colon can introduce speech after a complete clause, especially a formal statement or a motto.',
    },
  'are you coming asked leo or staying here': {
    why: "Leo asks one question, 'Are you coming or staying here?', split by 'asked Leo'. The first part ends with a comma inside the speech marks, a comma follows 'Leo', and the question mark comes only at the end, inside the closing marks.",
    not: {
      '"Are you coming?" asked Leo, "or staying here?"':
        'Leo asks one question split in two, so only the end takes a question mark. The first part ends with a comma.',
      '"Are you coming?" asked Leo, "or staying here"?':
        "Two slips: only the end of Leo's one question takes a question mark, and it belongs inside the closing speech marks.",
      '"Are you coming," asked Leo, "or staying here"?':
        'The question mark belongs to the spoken words, so it goes inside the closing speech marks.',
    },
    more: 'Put a split question back together to check it. If it is one question, only its end takes a question mark.',
    tip: 'Interrupting speech with the reporting clause varies the rhythm of dialogue. Keep the punctuation of the whole sentence in mind.',
  },
  'you finished the essay didnt you asked mr hall': {
    why: "Mr Hall adds a question tag, 'didn't you', to check a statement. A comma comes before the tag, 'didn't' takes its apostrophe for 'did not', and the tag makes the speech a question, so it ends with a question mark inside the speech marks.",
    not: {
      '"You finished the essay didn\'t you," asked Mr Hall.':
        "The tag 'didn't you' needs a comma before it, and Mr Hall is asking, so his words end with a question mark.",
      '"You finished the essay didnt you?" asked Mr Hall.':
        "The tag 'didn't you' needs a comma before it, and 'didn't' is short for 'did not', so it needs its apostrophe.",
      '"You finished the essay, didnt you," asked Mr Hall.':
        "'Didn't' needs its apostrophe, and the tag makes this a question, so it ends with a question mark, not a comma.",
    },
    more: 'A question tag turns a statement into a question that expects agreement. Inside speech, it follows all the usual tag rules.',
    tip: 'Teachers in stories often use tags. Each one needs a comma before it and a question mark after it.',
  },
  'the teacher said the inspector was late': {
    why: "With speech marks round 'The teacher' and 'was late', the inspector becomes the speaker, and what he says is that the teacher was late. Commas split his sentence round 'said the inspector', and it carries on with a small letter.",
    not: {
      'The teacher said, "The inspector was late."':
        'This makes the teacher the speaker and the inspector the one who was late. The prompt wants it the other way round.',
      '"The teacher" said the inspector "was late."':
        "The meaning is right, but each part of the split speech needs a comma: one inside the speech marks after 'teacher', one after 'inspector'.",
      '"The teacher," said the inspector. "Was late."':
        "'Was late' cannot stand as a sentence. The inspector's sentence carries on, so a comma follows 'inspector' and 'was' keeps a small letter.",
    },
    more: 'The same seven words can say that either person was late. The speech marks show whose words they are, and the meaning follows.',
    tip: 'When you write dialogue, ask who is speaking and which words are theirs. The speech marks go round exactly those words.',
  },
  'we couldnt find the keys anywhere': {
    why: "'Couldn't' is short for 'could not', and its apostrophe marks the missing 'o' between 'n' and 't'. 'Keys' simply means more than one key, so it takes no apostrophe.",
    not: {
      "We could'nt find the keys anywhere.":
        "The apostrophe goes where the letter is missing. 'Couldn't' is 'could not' with the 'o' of 'not' taken out, so it sits between 'n' and 't'.",
      "We couldn't find the key's anywhere.":
        "'Couldn't' is right, but 'keys' is a plain plural: more than one key. A plural that owns nothing takes no apostrophe.",
      "We could'nt find the key's anywhere.":
        "Two slips: the apostrophe in 'couldn't' belongs where the 'o' is missing, and the plural 'keys' takes no apostrophe.",
    },
    more: "An apostrophe of omission marks missing letters: don't, can't, wouldn't. A plain plural never takes one, however short the word: two cats, the keys, some photos.",
    tip: "Shop signs often get this wrong ('apple's for sale'). If the 's' only means more than one, leave the apostrophe out.",
  },
  'thats my sisters bicycle': {
    why: "Two apostrophes do two jobs. In 'That's' it marks the missing letter of 'That is'. In 'sister's' it shows that the bicycle belongs to one sister, so it goes before the 's'.",
    not: {
      "Thats my sister's bicycle.":
        "The possessive apostrophe in 'sister's' is right, but 'Thats' needs one too: it is short for 'That is'.",
      "That's my sisters bicycle.":
        "'That's' is right, but the bicycle belongs to the sister, so 'sister's' needs an apostrophe to show it.",
      "That's my sisters' bicycle.":
        "With the apostrophe after the 's', 'sisters'' means a bicycle shared by several sisters. One sister owns this one, so it goes before the 's'.",
    },
    more: "For one owner, add an apostrophe and 's': the sister's bicycle. For several owners whose word already ends in 's', add just the apostrophe: my sisters' bedroom.",
    tip: "To place a possessive apostrophe, say who owns the thing. Write that word in full, then add the apostrophe after it: sister, so sister's.",
  },
  'the players changing room was locked': {
    why: "The changing room belongs to the whole team of players. 'Players' is a plural ending in 's', so the apostrophe goes after that 's' to show that several people own it.",
    not: {
      'The players changing room was locked.':
        "Some signs and style guides leave the apostrophe out of a name like this, but schools teach the players' changing room, with the apostrophe after the 's', because the room is theirs.",
      "The players' changing room, was locked.":
        "The apostrophe is right, but the comma splits the subject, the changing room, from its verb, 'was locked'.",
      'The players changing room, was locked.':
        "Two slips: school writing puts an apostrophe after 'players' to show the room is theirs, and the comma splits the subject from its verb, 'was locked'.",
    },
    more: "Plural owners ending in 's' take just an apostrophe: the girls' team, the teachers' room. Plurals that do not end in 's' take an apostrophe and 's': the children's playground.",
    tip: "Ask how many own it. One player: player's. Several players: players'.",
  },
  'its going to be a long day isnt it': {
    why: "'It's' is short for 'It is' and 'isn't' for 'is not', so both need apostrophes. 'Isn't it' at the end is a question tag, which follows a comma and turns the sentence into a question, so it ends with a question mark.",
    not: {
      "Its going to be a long day, isn't it?":
        "'Its' without an apostrophe means 'belonging to it'. Here the word is short for 'It is', so it needs the apostrophe.",
      "It's going to be a long day, isn't it.":
        "'Isn't it' at the end turns the statement into a question, so the sentence ends with a question mark.",
      "Its going to be a long day, isn't it.":
        "Two slips: 'It's' needs its apostrophe for 'It is', and the question tag 'isn't it' needs a question mark.",
    },
    more: "A question tag asks the listener to agree: 'You're coming, aren't you?' It takes a comma before it and a question mark at the end.",
    tip: "Test 'its' by saying 'it is'. If that makes sense, write 'it's'. If it means 'belonging to it', write 'its'.",
  },
  'the companys profits rose but its share price fell': {
    why: "The profits belong to the company, so 'company's' takes an apostrophe and 's'. 'Its' means 'belonging to it', the company, and like 'his' and 'her' it never takes an apostrophe.",
    not: {
      'The companys profits rose, but its share price fell.':
        "The profits belong to the company, so 'company's' needs an apostrophe and 's'.",
      "The company's profits rose, but it's share price fell.":
        "'It's' means 'it is', which makes no sense here. The share price belongs to the company, so 'its' takes no apostrophe.",
      "The companys profits rose, but it's share price fell.":
        "Two slips: 'company's' needs an apostrophe to show possession, and 'its' meaning 'belonging to it' never takes one.",
    },
    more: "Possessive pronouns, such as his, hers, its, ours and theirs, never take apostrophes. Nouns do, and so do words such as 'someone': the company's, someone's.",
    tip: "Remember: 'it's' always means 'it is' or 'it has'. If neither fits, write 'its'.",
  },
  'you will need the following a pen a ruler and paper': {
    why: "'You will need the following' is a complete sentence that points forward to a list, so a colon introduces it. Inside the list, a comma separates 'a pen' from 'a ruler', and 'and' joins the last two.",
    not: {
      'You will need the following; a pen, a ruler and paper.':
        'A semicolon joins two complete sentences, and "a pen, a ruler and paper" is not one. A colon introduces a list.',
      'You will need the following: a pen a ruler and paper.':
        "The colon is right, but the items in the list still need commas: 'a pen a ruler' runs together.",
      'You will need the following; a pen a ruler and paper.':
        'Two slips: a semicolon cannot introduce a list, and the list itself has no comma between "a pen" and "a ruler".',
    },
    more: "Words such as 'the following' or 'these things' are a strong sign that a colon comes next. The list after it follows the usual comma rules.",
    tip: 'In instructions and science methods, a colon before a list of equipment keeps the writing clear and tidy.',
  },
  'the journey was long the views were stunning': {
    why: "'The journey was long' and 'the views were stunning' are both complete sentences, and they belong together: one weighs against the other. A semicolon joins two complete sentences that are closely linked.",
    not: {
      'The journey was long, the views were stunning.':
        'A comma alone cannot join two complete sentences. That is a comma splice.',
      'The journey was long: the views were stunning.':
        'A colon says that what follows explains or expands the first part. Stunning views do not explain why the journey was long.',
      'The journey was long the views were stunning.':
        'The two sentences run together with no mark at all between them.',
    },
    more: 'A semicolon joins two equal sentences. A colon is different: what follows it explains, proves or lists what came before.',
    tip: 'A semicolon can show a balanced view in an essay: one point, then the point that weighs against it.',
  },
  'there is one thing i value above all else honesty': {
    why: "The first part is a complete sentence that promises something: 'one thing I value above all else'. A colon then reveals it, 'honesty'. A colon can introduce a single word as well as a list.",
    not: {
      'There is one thing I value: above all else honesty.':
        "The colon is too early. 'Above all else' belongs to the first part of the sentence; only the thing valued, 'honesty', follows the colon.",
      'There is one thing I value above all else; honesty.':
        "A semicolon must have a complete sentence on each side, and 'honesty' alone is not one. A colon can introduce a single word.",
      'There is one thing I value above all else honesty.':
        "Without a mark, 'else honesty' runs together, and the reveal of what is valued is lost.",
    },
    more: "A colon before one word creates a pause and puts weight on that word: 'She had one goal: victory.'",
    tip: 'Use a colon to save your key idea for the end of the sentence, where the reader will notice it most.',
  },
  'the life of an animal is misery and slavery that is the plain truth': {
    why: "'The life of an animal is misery and slavery' is a complete sentence, and 'that is the plain truth' drives it home. A colon can join two complete sentences when the second explains, proves or sums up the first, as here.",
    not: {
      'The life of an animal is misery and slavery, that is the plain truth.':
        "A comma alone between two complete sentences makes a comma splice. Major's verdict needs a stronger mark.",
      'The life of an animal, is misery and slavery: that is the plain truth.':
        "The colon is right, but the comma after 'animal' splits the subject, 'The life of an animal', from its verb, 'is'.",
      'The life of an animal, is misery and slavery, that is the plain truth.':
        "Two slips: a comma between the subject and 'is', and a comma splice before 'that is the plain truth'.",
    },
    more: 'A colon works like a drum roll: it tells the reader that what follows will explain, prove or sum up what came before.',
    tip: "In essays, a colon can introduce your key point after a general statement: 'The message is clear: nobody is safe.'",
  },
  'they had one very good quality they let you alone and asked no questions': {
    why: "'They had one very good quality' is complete and promises something; the colon delivers it: 'they let you alone and asked no questions'. Jonathan Small is describing the people on the ship that picked him up.",
    not: {
      'They had one very good quality, they let you alone and asked no questions.':
        'A comma alone joins two complete sentences, a comma splice. The colon introduces what the good quality was.',
      'They had one very good quality: they let you alone and, asked no questions.':
        "The colon is right, but the comma after 'and' splits the joining word from the second thing they did.",
      'They had one very good quality, they let you alone and, asked no questions.':
        "Two slips: a comma splice after 'quality', and a comma that comes after 'and' instead of not at all.",
    },
    more: "When the first part announces 'one thing', 'one quality' or 'the reason', a colon is the natural mark before the reveal.",
    tip: 'Two actions joined by "and", such as "let you alone and asked no questions", need no comma at all.',
  },
  'let us face it our lives are miserable laborious and short': {
    why: "Old Major's colon after 'Let us face it' points to what must be faced. After it, 'our lives are' runs straight into a list of three adjectives, with commas between them: miserable, laborious, and short.",
    not: {
      'Let us face it: our lives are: miserable, laborious, and short.':
        "The list commas are right, but a second colon after 'are' splits the verb from the words that complete it. A colon follows a complete statement, and 'our lives are' is not one.",
      'Let us face it: our lives are miserable laborious, and short.':
        "The colon after 'face it' is right, but 'miserable' and 'laborious' are separate items in the list, so a comma goes between them.",
      'Let us face it: our lives are: miserable laborious, and short.':
        "Two slips: a second colon splits 'are' from the list that completes it, and 'miserable' and 'laborious' need a comma between them.",
    },
    more: "Orwell's colon is one correct choice here: a comma after 'Let us face it' is common too, as in 'Let's face it, we're lost.' The comma before 'and short' is also his choice, not a rule.",
    tip: "A sentence rarely needs two colons. Once one has introduced what follows, a list after a verb such as 'are' takes no second one.",
  },
  'tongues of flame darted round the bed the curtains were on fire': {
    why: 'Both halves are complete sentences. The first shows the flames; the second explains them: the curtains of the bed were burning. A colon joins two sentences like this, where the second explains the first.',
    not: {
      'Tongues of flame darted round the bed, the curtains were on fire.':
        'A comma alone cannot join the two complete sentences. This is a comma splice.',
      'Tongues of flame darted round the bed: the curtains, were on fire.':
        "The colon is right, but the comma after 'curtains' splits the subject from its verb, 'were'.",
      'Tongues of flame darted round the bed, the curtains, were on fire.':
        "Two slips: a comma splice after 'bed', and a comma between 'the curtains' and 'were'.",
    },
    more: "Jane has found Mr Rochester's bed alight. The colon keeps the image and its cause together, so the reader sees the danger at once.",
    tip: 'A semicolon or a full stop would also be correct here. A comma alone never is.',
  },
  'raw and chill was the winter morning my teeth chattered as i hastened down the drive': {
    why: "The first half is a complete sentence in an unusual order: 'Raw and chill was the winter morning' means 'The winter morning was raw and chill'. The second half shows how cold it was, so a colon joins them.",
    not: {
      'Raw and chill was the winter morning, my teeth chattered as I hastened down the drive.':
        'A comma alone cannot join two complete sentences. This is a comma splice; the colon shows the second explains the first.',
      'Raw and chill, was the winter morning: my teeth chattered as I hastened down the drive.':
        "The colon is right, but the comma after 'chill' splits the description from the verb it belongs with, 'was'.",
      'Raw and chill, was the winter morning, my teeth chattered as I hastened down the drive.':
        "Two slips: a comma between 'chill' and 'was', and a comma splice before 'my teeth chattered'.",
    },
    more: 'Putting the description first, before the verb, is called inversion. Brontë uses it to make the cold the first thing the reader feels.',
    tip: 'However a sentence is ordered, no comma comes between its parts and its verb. Find the verb, here "was", and keep it joined.',
  },
  'the kit includes a tent a stove and a map': {
    why: "'Includes' leads straight into what is included, so no colon comes between them: a colon follows only a complete sentence. The three items are a list, with a comma between the first two and 'and' before the last.",
    not: {
      'The kit includes: a tent, a stove and a map.':
        "The colon splits 'includes' from the things it includes. 'The kit includes' is not a complete sentence, so no colon follows it.",
      'The kit includes a tent a stove and a map.':
        "No colon is needed, but the list needs a comma between 'a tent' and 'a stove'.",
      'The kit includes: a tent a stove and a map.':
        "Two slips: a colon straight after 'includes', and no comma between 'a tent' and 'a stove'.",
    },
    more: "Compare: 'The kit includes three things: a tent, a stove and a map.' Now the words before the colon make a complete sentence, so the colon is right.",
    tip: "After 'includes', 'such as' or 'for example', go straight into the list. Save the colon for after a complete sentence.",
  },
  'the match was cancelled the pitch was flooded': {
    why: 'Both parts are complete sentences, and the second gives the reason for the first: the match was cancelled because the pitch was flooded. A colon joins two sentences when the second explains the first.',
    not: {
      'The match was cancelled, the pitch was flooded.':
        'A comma alone cannot join two complete sentences. That is a comma splice.',
      'The match was cancelled: the pitch, was flooded.':
        "The colon is right, but the comma after 'pitch' splits the subject from its verb, 'was flooded'.",
      'The match was cancelled, the pitch, was flooded.':
        "Two slips: a comma splice between the two sentences, and a comma between 'the pitch' and 'was flooded'.",
    },
    more: 'A semicolon or a full stop would also be correct here, but only the colon tells the reader that the second part gives the reason.',
    tip: "Use a colon where you could say 'because' or 'that is' in its place.",
  },
  'there was no wastage whatever the hens and ducks with their sharp eyes had gathered up the very last stalk':
    {
      why: 'Both halves are complete sentences, and the second shows the first in action: nothing was wasted, because the hens and ducks gathered every stalk. A semicolon can join two closely linked complete sentences; a comma cannot.',
      not: {
        'There was no wastage whatever, the hens and ducks with their sharp eyes had gathered up the very last stalk.':
          'A comma alone joins two complete sentences, which is a comma splice. A semicolon, a colon or a full stop is needed.',
        'There was no wastage whatever; the hens and ducks with their sharp eyes, had gathered up the very last stalk.':
          "The semicolon is right, but the comma after 'eyes' splits the long subject from its verb, 'had gathered'.",
        'There was no wastage whatever, the hens and ducks with their sharp eyes, had gathered up the very last stalk.':
          "Two slips: a comma splice after 'whatever', and a comma that splits the subject from 'had gathered'.",
      },
      more: 'A colon would work here too, because the second half explains the first. The semicolon simply sets the two facts side by side.',
      tip: "A long subject tempts a comma before the verb. Find the verb, here 'had gathered', and keep it joined to its subject.",
    },
  'napoleon stood sternly surveying his audience then he uttered a high-pitched whimper': {
    why: "'Napoleon stood sternly surveying his audience' and 'then he uttered a high-pitched whimper' are complete sentences in sequence. 'Then' is not a joining word, so a comma cannot join them; a semicolon can.",
    not: {
      'Napoleon stood sternly surveying his audience, then he uttered a high-pitched whimper.':
        "'Then' is an adverb, not a joining word, so a comma before it cannot join two complete sentences. This is a comma splice.",
      'Napoleon stood sternly surveying his audience then he uttered a high-pitched whimper.':
        "The two sentences run together with no mark between them; 'then' cannot join them on its own.",
      'Napoleon stood sternly surveying his audience: then he uttered a high-pitched whimper.':
        'A colon says that what follows explains what came before. The whimper does not explain the stare; it comes after it.',
    },
    more: 'The whimper is a signal, and the dogs rush in at once. The semicolon keeps the two moments close: the calm stare and the sudden sound.',
    tip: "Watch for 'then' after a comma in your own writing. If a full sentence follows, use a full stop, a semicolon, or 'and then'.",
  },
  'all relations with foxwood had been broken off insulting messages had been sent to pilkington': {
    why: "Two complete sentences sit side by side, each with its own subject and verb: 'All relations ... had been broken off' and 'insulting messages had been sent'. A semicolon joins two linked sentences like these; a comma cannot.",
    not: {
      'All relations with Foxwood had been broken off, insulting messages had been sent to Pilkington.':
        'A comma alone cannot join two complete sentences. This is a comma splice; a semicolon is needed.',
      'All relations with Foxwood had been broken off; insulting messages, had been sent to Pilkington.':
        "The semicolon is right, but the comma after 'messages' splits the subject from its verb, 'had been sent'.",
      'All relations with Foxwood had been broken off, insulting messages, had been sent to Pilkington.':
        "Two slips: a comma splice after 'off', and a comma between 'insulting messages' and 'had been sent'.",
    },
    more: "Foxwood is Pilkington's farm. The two halves say the same thing twice, in stronger terms: the break is complete.",
    tip: 'Between two clauses, a semicolon is right only where a full stop would also be right. Test it by reading each half alone.',
  },
  'the lawyer listened gloomily he did not like his friends feverish manner': {
    why: "'The lawyer listened gloomily' and 'he did not like his friend's feverish manner' are complete sentences, and the second gives the reason for the first. A semicolon joins them. The manner belongs to one friend, so 'friend's' has an apostrophe.",
    not: {
      "The lawyer listened gloomily, he did not like his friend's feverish manner.":
        'A comma alone cannot join two complete sentences. This is a comma splice; use a semicolon.',
      'The lawyer listened gloomily; he did not like his friends feverish manner.':
        "The semicolon is right, but the manner belongs to his friend, so 'friends' needs an apostrophe: 'friend's'.",
      'The lawyer listened gloomily, he did not like his friends feverish manner.':
        "Two slips: a comma splice between the two sentences, and no apostrophe in 'friend's'.",
    },
    more: 'Utterson is listening to Jekyll, who is shaken after the Carew murder. A colon would also fit, since the second half explains the first.',
    tip: 'To place a possessive apostrophe, ask who owns the thing. One friend owns the manner, so the apostrophe goes before the "s".',
  },
  'the forecast promised sunshine however it rained all day': {
    why: "'The forecast promised sunshine' and 'it rained all day' are both complete sentences. 'However' shows the contrast but cannot join them, so a semicolon comes before it and a comma after it.",
    not: {
      'The forecast promised sunshine, however, it rained all day.':
        "This is the most common 'however' mistake: a comma before 'however' cannot join two complete sentences. It makes a comma splice.",
      'The forecast promised sunshine however, it rained all day.':
        "With nothing before 'however', the two sentences run together. A semicolon or a full stop must come before it.",
      'The forecast promised sunshine. however, it rained all day.':
        "A full stop before 'however' would be fine, but then 'However' starts a new sentence and needs a capital letter.",
    },
    more: "Two correct ways: 'sunshine; however, it rained' or 'sunshine. However, it rained'. Either way, a strong mark comes before 'however' and a comma after it.",
    tip: "In essays, '; however,' turns an argument precisely. Check you have a semicolon, not a comma, before it.",
  },
  'semi-starvation and neglected colds had predisposed most of the pupils to receive infection forty-five out of the eighty girls lay ill at one time':
    {
      why: 'The first half states that the pupils were open to infection; the colon introduces the proof, a number: forty-five out of eighty girls ill at once. A colon joins two complete sentences when the second proves the first.',
      not: {
        'Semi-starvation and neglected colds had predisposed most of the pupils to receive infection, forty-five out of the eighty girls lay ill at one time.':
          'A comma alone cannot join two complete sentences. This is a comma splice; the colon shows the second proves the first.',
        'Semi-starvation and neglected colds had predisposed most of the pupils to receive infection: forty-five out of the eighty girls, lay ill at one time.':
          "The colon is right, but the comma after 'girls' splits the subject from its verb, 'lay'.",
        'Semi-starvation and neglected colds had predisposed most of the pupils to receive infection, forty-five out of the eighty girls, lay ill at one time.':
          "Two slips: a comma splice before the evidence, and a comma between 'the eighty girls' and 'lay'.",
      },
      more: 'This is the typhus outbreak at Lowood school. The colon turns a general statement into a shocking figure.',
      tip: 'Statement, colon, evidence: use the same shape in an essay to back up a point.',
    },
  'these seven commandments would now be inscribed on the wall they would form an unalterable law by which all the animals on animal farm must live for ever after':
    {
      why: "Both halves are complete sentences, and the second, starting with 'they', says what the first will mean: the Commandments will be a law for ever. A semicolon joins two linked sentences; a comma alone cannot.",
      not: {
        'These Seven Commandments would now be inscribed on the wall, they would form an unalterable law by which all the animals on Animal Farm must live for ever after.':
          "A comma alone joins two complete sentences, a comma splice. The second begins with its own subject, 'they'.",
        'These Seven Commandments, would now be inscribed on the wall; they would form an unalterable law by which all the animals on Animal Farm must live for ever after.':
          "The semicolon is right, but the comma after 'Commandments' splits the subject from its verb, 'would be inscribed'.",
        'These Seven Commandments, would now be inscribed on the wall, they would form an unalterable law by which all the animals on Animal Farm must live for ever after.':
          "Two slips: a comma between the subject and its verb, and a comma splice before 'they would form'.",
      },
      more: "'Unalterable' means it can never be changed. The word is ironic: the pigs alter the Commandments one by one as the novel goes on.",
      tip: "A sentence starting 'they', 'it' or 'he' after a comma is a common place for a comma splice. Check it.",
    },
  'but it was noticed that these two were never in agreement whatever suggestion either of them made the other could be counted on to oppose it':
    {
      why: "The first part says the two never agreed; the colon introduces the proof: whatever one suggested, the other opposed. Inside that second part, the 'whatever' clause comes first, so a comma closes it before 'the other'.",
      not: {
        'But it was noticed that these two were never in agreement, whatever suggestion either of them made the other could be counted on to oppose it.':
          "A comma after 'agreement' joins two complete sentences, a comma splice, and the 'whatever' clause needs a comma to close it.",
        'But it was noticed, that these two were never in agreement, whatever suggestion either of them made, the other could be counted on to oppose it.':
          "The comma after 'agreement' makes a comma splice, and the comma after 'noticed' splits the verb from what was noticed.",
        'But it was noticed, that these two were never in agreement: whatever suggestion either of them made the other could be counted on to oppose it.':
          "The colon is right, but the comma after 'noticed' splits it from what was noticed, and the 'whatever' clause needs a comma after 'made'.",
      },
      more: 'The two are Snowball and Napoleon. The colon states their rivalry like a rule, and the second half proves it.',
      tip: 'A colon lets you give evidence straight after a claim, in one sentence.',
    },
  'remember comrades there must be no alteration in our plans they shall be carried out to the day':
    {
      why: "Napoleon addresses the animals as 'comrades', so the word sits between a pair of commas. 'There must be no alteration in our plans' is complete, and the colon introduces what that means: 'they shall be carried out to the day'.",
      not: {
        'Remember, comrades, there must be no alteration in our plans, they shall be carried out to the day.':
          "The commas round 'comrades' are right, but a comma after 'plans' joins two complete sentences, a comma splice.",
        'Remember, comrades there must be no alteration in our plans: they shall be carried out to the day.':
          "The colon is right, but 'comrades', the listeners being addressed, needs a comma on both sides: one is missing after it.",
        'Remember, comrades there must be no alteration in our plans, they shall be carried out to the day.':
          "Two slips: 'comrades' needs a closing comma after it, and a comma after 'plans' makes a comma splice.",
      },
      more: 'Napoleon says this after the windmill has fallen. The colon makes his second clause sound like a firm promise.',
      tip: 'A word of address in the middle of a sentence always takes a comma on each side.',
    },
  'i shook him but he only murmured and turned the smoke had stupefied him': {
    why: "Two main clauses are joined by 'but', with a comma before it. Then the colon introduces the explanation of why he barely stirred: 'the smoke had stupefied him'.",
    not: {
      'I shook him but, he only murmured and turned: the smoke had stupefied him.':
        "The colon is right, but the comma belongs before 'but', where the two clauses meet, not after it.",
      'I shook him, but he only murmured and turned, the smoke had stupefied him.':
        "The comma before 'but' is right, but a comma after 'turned' joins on a third complete sentence, a comma splice.",
      'I shook him but, he only murmured and turned, the smoke had stupefied him.':
        "Two slips: the comma comes after 'but' instead of before it, and a comma splice joins the explanation on.",
    },
    more: "'Stupefied' means dazed, unable to think. The colon gives the reader the cause straight after the alarming effect.",
    tip: "Use 'but' with a comma to show a reaction that is not the one hoped for, and a colon to explain it.",
  },
  'miss temples whole attention was absorbed by the patients she lived in the sick-room never quitting it except to snatch a few hours rest at night':
    {
      why: "The colon introduces the proof that the patients took all her attention: she lived in the sick-room. 'Miss Temple's' takes an apostrophe and 's' for one owner. 'A few hours' rest' means rest lasting a few hours, a plural, so the apostrophe follows the 's'.",
      not: {
        "Miss Temples whole attention was absorbed by the patients, she lived in the sick-room, never quitting it except to snatch a few hours' rest at night.":
          "The attention is Miss Temple's, so her name needs an apostrophe, and the comma after 'patients' makes a comma splice.",
        "Miss Temple's whole attention was absorbed by the patients, she lived in the sick-room, never quitting it except to snatch a few hours rest at night.":
          "The comma after 'patients' makes a comma splice, and in school writing 'a few hours' rest', rest lasting a few hours, takes an apostrophe after the 's'.",
        'Miss Temples whole attention was absorbed by the patients: she lived in the sick-room, never quitting it except to snatch a few hours rest at night.':
          "The colon is right, but 'Miss Temple's' needs its apostrophe for her attention, and school writing gives 'a few hours' rest' one too.",
      },
      more: "Time can 'own' things: a day's work, a week's holiday, two years' wait. The apostrophe follows the same rule as any other owner.",
      tip: "Check phrases of time when you proofread. Schools and most style guides write 'in a month's time' and 'three weeks' notice' with an apostrophe.",
    },
  'he is not very forgiving he broke with his family and now for many years he has led an unsettled kind of life':
    {
      why: "Mrs Fairfax makes a claim about Mr Rochester, 'He is not very forgiving', and the colon introduces her evidence. That evidence holds two main clauses joined by 'and', with the comma before 'and'.",
      not: {
        'He is not very forgiving he broke with his family, and now for many years he has led an unsettled kind of life.':
          "With no mark after 'forgiving', the claim and its evidence run together as one sentence. The colon introduces the evidence.",
        'He is not very forgiving: he broke with his family and, now for many years he has led an unsettled kind of life.':
          "The colon is right, but the comma that marks the join between two main clauses goes before 'and', not after it.",
        'He is not very forgiving, he broke with his family and, now for many years he has led an unsettled kind of life.':
          "Two slips: a comma splice after 'forgiving', and a comma after 'and' where it belongs before it.",
      },
      more: 'Claim, colon, evidence: the same shape works in an essay paragraph, compressed into one sentence.',
      tip: "When 'and' joins two long main clauses, put the comma before 'and', never after it.",
    },
  'we visited three cities paris france rome italy and madrid spain': {
    why: "A colon introduces the list after the complete sentence 'We visited three cities'. Each item already contains a comma, between city and country, so semicolons separate the items; otherwise the reader cannot tell three places from six.",
    not: {
      'We visited three cities: Paris, France, Rome, Italy, and Madrid, Spain.':
        'The colon is right, but with commas everywhere the list reads as six places. Items that contain commas are separated by semicolons.',
      'We visited three cities; Paris, France; Rome, Italy; and Madrid, Spain.':
        'The semicolons inside the list are right, but a semicolon cannot introduce a list. After a complete sentence, a colon does that.',
      'We visited three cities; Paris, France, Rome, Italy, and Madrid, Spain.':
        'Two slips: a semicolon cannot introduce the list, and commas alone between the items make three places look like six.',
    },
    more: "This is the one job where semicolons sit inside a list: separating items that already contain commas. The last item often takes '; and'.",
    tip: 'Use semicolons in a list only when the items have commas of their own. Otherwise, plain commas are clearer.',
  },
  'the human beings did not hate animal farm any less now that it was prospering indeed they hated it more than ever':
    {
      why: "'The human beings did not hate Animal Farm any less' and 'they hated it more than ever' are both complete sentences. 'Indeed' links them but cannot join them, so a semicolon comes before 'indeed' and a comma after it.",
      not: {
        'The human beings did not hate Animal Farm any less now that it was prospering, indeed, they hated it more than ever.':
          "'Indeed' is a linking adverb, not a joining word, so a comma before it cannot join two complete sentences. That is a comma splice.",
        'The human beings, did not hate Animal Farm any less now that it was prospering; indeed, they hated it more than ever.':
          "The semicolon is right, but the comma after 'beings' splits the subject from its verb, 'did not hate'.",
        'The human beings, did not hate Animal Farm any less now that it was prospering, indeed, they hated it more than ever.':
          "Two slips: a comma splice before 'indeed', and a comma splitting 'The human beings' from 'did not hate'.",
      },
      more: "Linking adverbs such as 'however', 'indeed', 'therefore' and 'instead' behave the same way between two sentences: a semicolon or full stop before, a comma after.",
      tip: "Use '; however,' or '; therefore,' in essays to link two points precisely. The semicolon does the joining; the adverb shows how they connect.",
    },
  'the animals found the problem insoluble in any case they had little time for speculating on such things now':
    {
      why: "Both halves are complete sentences. 'In any case' links them, as 'however' or 'indeed' would, but cannot join them, so a semicolon goes before it and a comma after it.",
      not: {
        'The animals found the problem insoluble, in any case, they had little time for speculating on such things now.':
          "'In any case' links the two sentences but cannot join them. A comma before it makes a comma splice; a semicolon is needed.",
        'The animals, found the problem insoluble; in any case, they had little time for speculating on such things now.':
          "The semicolon is right, but the comma after 'animals' splits the subject from its verb, 'found'.",
        'The animals, found the problem insoluble, in any case, they had little time for speculating on such things now.':
          "Two slips: a comma between 'The animals' and 'found', and a comma splice before 'in any case'.",
      },
      more: "Linking phrases such as 'in any case', 'as a result' and 'on the other hand' follow the same pattern between two sentences: semicolon before, comma after.",
      tip: 'When a linking phrase sits between two complete sentences, the mark before it must be strong: a semicolon or a full stop.',
    },
  'if they went hungry it was not from feeding tyrannical human beings if they worked hard at least they worked for themselves':
    {
      why: "Two balanced halves, each a complete sentence with its own 'if' clause. A comma closes each 'if' clause, and a semicolon joins the two halves. A comma there would make a comma splice.",
      not: {
        'If they went hungry, it was not from feeding tyrannical human beings, if they worked hard, at least they worked for themselves.':
          'With a comma between the two halves, two complete sentences are joined by a comma alone, a comma splice.',
        'If they went hungry; it was not from feeding tyrannical human beings, if they worked hard; at least they worked for themselves.':
          "The semicolons are in the wrong places. Each 'if' clause cannot stand alone, so a comma closes it; the semicolon belongs between the halves.",
        'If they went hungry, it was not from feeding tyrannical human beings; if they worked hard; at least they worked for themselves.':
          "The first semicolon is right, but the second follows 'if they worked hard', which cannot stand alone. A comma closes that clause.",
      },
      more: "The halves mirror each other, 'If they went hungry' and 'if they worked hard'. Semicolons suit balanced sentences like this one.",
      tip: 'In an essay, a semicolon between two parallel points shows the reader that they belong together and weigh equally.',
    },
  'utterson ruminated awhile he was surprised at his friends selfishness and yet relieved by it': {
    why: "A semicolon joins two complete sentences: 'Utterson ruminated awhile' and what he felt. The selfishness belongs to his friend, so 'friend's' has an apostrophe. 'And yet' adds a contrasting feeling, with the comma before it.",
    not: {
      'Utterson ruminated awhile, he was surprised at his friends selfishness, and yet relieved by it.':
        "A comma after 'awhile' makes a comma splice, and the selfishness belongs to his friend, so 'friends' needs an apostrophe.",
      "Utterson ruminated awhile, he was surprised at his friend's selfishness and, yet relieved by it.":
        "A comma after 'awhile' makes a comma splice, and the comma belongs before 'and yet', not after 'and'.",
      'Utterson ruminated awhile; he was surprised at his friends selfishness and, yet relieved by it.':
        "The semicolon is right, but 'friend's' needs its apostrophe, and the comma belongs before 'and yet', not after 'and'.",
    },
    more: "'Ruminated' means thought something over slowly. Jekyll has just said he was thinking of his own good name; Utterson finds that selfish, yet is relieved that Jekyll is done with Hyde.",
    tip: "'And yet' and 'but' both turn a sentence. Put any comma before them, never straight after.",
  },
  'i want nothing from you i ask nothing of you why cannot we be friends': {
    why: 'Fred says three things, and each could stand alone. Semicolons join them, keeping his plea in one breath, and a word after a semicolon takes no capital. The last part asks a question, so the sentence ends with a question mark.',
    not: {
      'I want nothing from you; I ask nothing of you, why cannot we be friends.':
        "The comma after 'of you' makes a comma splice, and the question at the end needs a question mark, not a full stop.",
      'I want nothing from you; I ask nothing of you, Why cannot we be friends?':
        "The comma after 'of you' makes a comma splice, and the question is still part of the same sentence, so 'why' takes no capital.",
      'I want nothing from you; I ask nothing of you; Why cannot we be friends.':
        'The semicolons are right, but a word after a semicolon takes no capital, and the question at the end needs a question mark.',
    },
    more: "Fred is Scrooge's nephew, inviting him to Christmas dinner. The semicolons build his three short clauses into one rising appeal.",
    tip: 'Three short clauses in a row, linked by semicolons, build to a climax. Try it at the end of a persuasive paragraph.',
  },
  'many thousands are in want of common necessaries hundreds of thousands are in want of common comforts sir':
    {
      why: "The gentleman sets two complete sentences side by side, the second bigger than the first. A semicolon joins them, and a comma sets off 'sir', the person he is speaking to.",
      not: {
        'Many thousands are in want of common necessaries, hundreds of thousands are in want of common comforts, sir.':
          "A comma alone between two complete sentences makes a comma splice. A semicolon is needed after 'necessaries'.",
        'Many thousands are in want of common necessaries; hundreds of thousands are in want of common comforts sir.':
          "The semicolon is right, but 'sir' is the person being spoken to, so a comma separates it from the rest.",
        'Many thousands are in want of common necessaries, hundreds of thousands are in want of common comforts sir.':
          "Two slips: a comma splice after 'necessaries', and no comma before 'sir', the person addressed.",
      },
      more: "The gentleman is collecting money for the poor. The semicolon lets the numbers grow, from 'Many thousands' to 'hundreds of thousands', within one sentence.",
      tip: 'A semicolon suits a second idea that pushes the first further, in the same shape.',
    },
  'it was only his appearance that was a little altered his hide was less shiny than it had used to be and his great haunches seemed to have shrunken':
    {
      why: "The first half is a complete sentence about Boxer's looks, and the second, also complete, gives the details. A semicolon joins them. Within the second half, 'and' joins two more main clauses, with a comma before it.",
      not: {
        'It was only his appearance that was a little altered his hide was less shiny than it had used to be, and his great haunches seemed to have shrunken.':
          "With no mark after 'altered', the first sentence runs straight into the details. A semicolon introduces them.",
        'It was only his appearance that was a little altered; his hide was less shiny than it had used to be and, his great haunches seemed to have shrunken.':
          "The semicolon is right, but the comma that marks the join of two main clauses goes before 'and', not after it.",
        'It was only his appearance that was a little altered, his hide was less shiny than it had used to be and, his great haunches seemed to have shrunken.':
          "Two slips: a comma splice after 'altered', and a comma after 'and' where it belongs before it.",
      },
      more: 'Boxer is growing old, though he will not admit it. The details after the semicolon show what the first half only hints at.',
      tip: "In a long sentence, give each mark one job: the semicolon joins the halves, the comma before 'and' joins the clauses inside one half.",
    },
  'the team included sam the captain priya the goalkeeper and leo the coach': {
    why: "Each person comes with a description, 'Sam, the captain', which already holds a comma. So semicolons separate the three people, and no colon follows 'included', because 'The team included' is not a complete sentence.",
    not: {
      'The team included Sam, the captain, Priya, the goalkeeper, and Leo, the coach.':
        'With commas everywhere, the reader cannot tell whether six people are listed or three. Semicolons separate items that contain commas.',
      'The team included: Sam, the captain; Priya, the goalkeeper; and Leo, the coach.':
        "The semicolons are right, but a colon cannot follow 'included': 'The team included' is not a complete sentence.",
      'The team included: Sam, the captain, Priya, the goalkeeper, and Leo, the coach.':
        "Two slips: a colon straight after 'included', and commas alone between items that already contain commas.",
    },
    more: 'Read the all-comma version and count: it could list a captain, a goalkeeper and a coach as well as three other people. Semicolons remove the doubt.',
    tip: 'If your list items contain commas, upgrade the marks between the items to semicolons.',
  },
  'every one of them wore chains like marleys ghost some few they might be guilty governments were linked together none were free':
    {
      why: "Three complete statements about the phantoms are joined by semicolons: all wore chains, some few were linked, none were free. A comma between any two would be a comma splice. The Ghost is Marley's, so his name takes an apostrophe.",
      not: {
        "Every one of them wore chains like Marley's Ghost, some few (they might be guilty governments) were linked together, none were free.":
          'Commas alone join three complete statements here, making comma splices. Semicolons are strong enough to join them.',
        'Every one of them wore chains like Marleys Ghost, some few (they might be guilty governments) were linked together; none were free.':
          "The Ghost is Marley's, so his name needs an apostrophe, and the comma after 'Ghost' makes a comma splice.",
        'Every one of them wore chains like Marleys Ghost; some few (they might be guilty governments) were linked together, none were free.':
          "The Ghost is Marley's, so his name needs an apostrophe, and the comma before 'none were free' makes a comma splice.",
      },
      more: "The bracketed aside, 'they might be guilty governments', is Dickens's joke at the expense of governments, slipped in without breaking the eerie list.",
      tip: 'Semicolons let a writer build a scene in short, linked strokes. Each part must still be a complete sentence.',
    },
  'the eiffel tower which is in paris was finished in 1889': {
    why: "'Which is in Paris' adds a detail about the Eiffel Tower; it does not pick out one tower from several. Extra information sits between a pair of commas, so 'The Eiffel Tower was finished in 1889' still reads clearly.",
    not: {
      'The Eiffel Tower, which is in Paris was finished in 1889.':
        "The comma after 'Tower' opens the extra information, but none closes it after 'Paris'.",
      'The Eiffel Tower, which is in Paris; was finished in 1889.':
        "The comma after 'Tower' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
      'The Eiffel Tower which is in Paris was finished in 1889.':
        "There is only one Eiffel Tower, so 'which is in Paris' adds a detail and needs a pair of commas.",
    },
    more: 'Named people, places and buildings are already identified, so a clause about them almost always adds detail and takes a pair of commas.',
    tip: 'After a name, a "who" or "which" clause usually needs commas on both sides.',
  },
  'my cousin zara who is twelve plays the cello': {
    why: "'Who is twelve' adds a fact about Zara, who is already named. Extra information sits between a pair of commas: cover it and 'My cousin Zara plays the cello' still makes sense.",
    not: {
      'My cousin Zara, who is twelve plays the cello.':
        "The comma after 'Zara' opens the extra information, but no comma closes it after 'twelve'.",
      'My cousin Zara, who is twelve; plays the cello.':
        "The comma after 'Zara' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
      'My cousin Zara who is twelve plays the cello.':
        "Her name already identifies Zara, so 'who is twelve' is extra information and needs a pair of commas.",
    },
    more: "'My cousin Zara' needs no comma inside it: the name tells us which cousin. Only the added detail is marked off.",
    tip: 'A pair of commas works like a pair of brackets: what opens must close.',
  },
  'charles dickens the author of oliver twist was born in portsmouth': {
    why: "'The author of Oliver Twist' renames Charles Dickens and adds a detail about him. A phrase like this, called an appositive, sits between a pair of commas, so 'Charles Dickens was born in Portsmouth' still reads clearly.",
    not: {
      'Charles Dickens, the author of Oliver Twist was born in Portsmouth.':
        "The comma after 'Dickens' opens the description, but no comma closes it after 'Oliver Twist'.",
      'Charles Dickens, the author of Oliver Twist; was born in Portsmouth.':
        "The comma after 'Dickens' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
      'Charles Dickens the author of Oliver Twist was born in Portsmouth.':
        "'The author of Oliver Twist' renames Dickens, who is already named, so it needs a pair of commas.",
    },
    more: 'Brackets could do the same job: "Charles Dickens (the author of Oliver Twist) was born in Portsmouth." Commas are lighter; brackets mark a firmer aside.',
    tip: 'When you introduce a writer in an essay, an appositive is a neat way to add a fact about them.',
  },
  'priya who was tired fell asleep quickly': {
    why: "'Who was tired' adds information about Priya. It is not needed to tell us who she is, because her name does that, so a pair of commas marks it off. Take it out and 'Priya fell asleep quickly' still works.",
    not: {
      'Priya, who was tired fell asleep quickly.':
        "One comma opens the extra information but none closes it. Commas round extra information come in pairs: add one after 'tired'.",
      'Priya, who was tired; fell asleep quickly.':
        "The comma after 'Priya' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
      'Priya who was tired fell asleep quickly.':
        "With no commas, 'who was tired' reads as if it were needed to say which Priya is meant. Her name does that, so the detail needs a pair of commas.",
    },
    more: "A clause beginning with 'who' or 'which' that adds extra information about a named person or thing is a non-defining relative clause. It always sits between a pair of commas, or a comma and the full stop.",
    tip: 'Test the commas by covering the words between them. If the sentence still makes sense, the pair is in the right place.',
  },
  'mr jones our neighbour is a firefighter': {
    why: "'Our neighbour' renames Mr Jones and adds a detail about him. Extra information like this sits between a pair of commas, one before and one after, so 'Mr Jones is a firefighter' still reads clearly without it.",
    not: {
      'Mr Jones, our neighbour is a firefighter.':
        "The comma after 'Jones' opens the extra information, but no comma closes it after 'neighbour'. The pair is incomplete.",
      'Mr Jones, our neighbour; is a firefighter.':
        "The comma after 'Jones' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
      'Mr Jones our neighbour is a firefighter.':
        "With no commas, 'Mr Jones our neighbour' runs together. His name already says who he is, so the extra detail needs a pair of commas.",
    },
    more: "A noun phrase that renames the noun beside it is called an appositive. Brackets can do the same job as the pair of commas: 'Mr Jones (our neighbour) is a firefighter.'",
    tip: 'Commas around extra information are like brackets: whatever opens must close.',
  },
  'napoleon who seldom moved out of a walk raced ahead of them all': {
    why: "'Who seldom moved out of a walk' adds a detail about Napoleon; it is not needed to say which Napoleon is meant. Extra information like this sits between a pair of commas, and 'Napoleon ... raced ahead of them all' still works without it.",
    not: {
      'Napoleon, who seldom moved out of a walk raced ahead of them all.':
        "One comma opens the extra information after 'Napoleon', but none closes it after 'walk'. Commas round extra information come in pairs.",
      'Napoleon, who seldom moved out of a walk; raced ahead of them all.':
        "The comma after 'Napoleon' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
      'Napoleon who seldom moved out of a walk raced ahead of them all.':
        'With no commas, the clause reads as if it were needed to say which Napoleon is meant. His name already does that.',
    },
    more: 'The detail makes his burst of speed surprising: the pig who never hurries is running. The commas let Orwell slip that contrast in without stopping the sentence.',
    tip: 'Test a pair of commas by covering the words between them. If the sentence still makes sense, the commas are in the right place.',
  },
  'even boxer who seldom asked questions was puzzled': {
    why: "'Who seldom asked questions' adds information about Boxer. It is not needed to identify him, so a pair of commas marks it off: cover it and 'Even Boxer ... was puzzled' still stands.",
    not: {
      'Even Boxer, who seldom asked questions was puzzled.':
        "The comma after 'Boxer' opens the extra information, but no comma closes it after 'questions'.",
      'Even Boxer, who seldom asked questions; was puzzled.':
        "The comma after 'Boxer' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
      'Even Boxer who seldom asked questions was puzzled.':
        "Without commas, 'who seldom asked questions' seems to pick out which Boxer is meant. There is only one, so the detail needs a pair of commas.",
    },
    more: "The clause explains why this moment matters: Boxer usually trusts without asking. 'Even' and the commas together show how unusual his doubt is.",
    tip: 'Use a clause between commas to give the reader a detail that changes how they read the main point.',
  },
  'the other farm which was called pinchfield was smaller and better kept': {
    why: "'The other farm' already identifies the farm, so 'which was called Pinchfield' adds a detail. Extra information sits between a pair of commas, leaving the main clause, 'The other farm was smaller and better kept'.",
    not: {
      'The other farm, which was called Pinchfield was smaller and better kept.':
        "The comma after 'farm' opens the extra information, but none closes it after 'Pinchfield'.",
      'The other farm, which was called Pinchfield; was smaller and better kept.':
        "The comma after 'farm' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
      'The other farm which was called Pinchfield was smaller and better kept.':
        "'The other farm' already tells us which farm is meant. Its name is extra information and needs a pair of commas.",
    },
    more: 'Pinchfield belongs to Mr Frederick and the first farm, Foxwood, to Mr Pilkington. The extra detail names it without interrupting the comparison.',
    tip: "A 'which' clause that adds a detail takes a pair of commas. One that picks out which thing is meant takes none.",
  },
  'the door which was equipped with neither bell nor knocker was blistered and distained': {
    why: "The clause 'which was equipped with neither bell nor knocker' adds a detail about the door the story has already described. It sits between a pair of commas, so the main clause, 'The door ... was blistered and distained', reads clearly.",
    not: {
      'The door, which was equipped with neither bell nor knocker was blistered and distained.':
        "One comma opens the extra information after 'door', but no comma closes it after 'knocker'.",
      'The door which was equipped with neither bell nor knocker, was blistered and distained.':
        "A lone comma after 'knocker' splits the subject from its verb, 'was'. Extra information needs commas on both sides.",
      'The door, which was equipped with neither bell nor knocker; was blistered and distained.':
        "The comma after 'door' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
    },
    more: "'Distained' means stained and discoloured. A door with no bell or knocker refuses visitors; Stevenson's detail makes it seem secretive.",
    tip: 'In an essay, a detail like this is evidence for atmosphere. Quote it with its commas exactly as printed.',
  },
  'the yard was so dark that even scrooge who knew its every stone was fain to grope with his hands':
    {
      why: "'Who knew its every stone' adds a detail about Scrooge, not needed to identify him, so it sits between a pair of commas. The main clause still reads: even Scrooge was fain to grope with his hands.",
      not: {
        'The yard was so dark that even Scrooge, who knew its every stone was fain to grope with his hands.':
          "The comma after 'Scrooge' opens the extra information, but none closes it after 'stone'.",
        'The yard was so dark that even Scrooge, who knew its every stone; was fain to grope with his hands.':
          "The comma after 'Scrooge' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
        'The yard was so dark that even Scrooge who knew its every stone was fain to grope with his hands.':
          'With no commas, the clause seems to pick out which Scrooge is meant. There is only one, so the detail needs a pair.',
      },
      more: "'Was fain to' means 'was obliged to'. The detail between the commas shows how dark it was: even someone who knew every stone had to feel his way.",
      tip: 'When a writer adds a detail between commas, ask why. Here it measures the darkness.',
    },
  'this fact which has been very clearly made out proves conclusively that it was no mere haphazard burglary':
    {
      why: "'This fact' already identifies the fact, so 'which has been very clearly made out' adds a comment on it and sits between a pair of commas. The main clause is 'This fact proves conclusively that it was no mere haphazard burglary'.",
      not: {
        'This fact, which has been very clearly made out proves conclusively that it was no mere haphazard burglary.':
          "The comma after 'fact' opens the extra information, but none closes it after 'out'.",
        'This fact, which has been very clearly made out; proves conclusively that it was no mere haphazard burglary.':
          "The comma after 'fact' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
        'This fact which has been very clearly made out proves conclusively that it was no mere haphazard burglary.':
          "'This fact' already points to the fact meant, so the 'which' clause is extra information and needs a pair of commas.",
      },
      more: "'Made out' means shown or proved. Detective stories are full of sentences like this, which pause to weigh the evidence before the conclusion.",
      tip: 'Between a subject and its verb, commas come in pairs or not at all.',
    },
  'we visited york a city full of history': {
    why: "'A city full of history' renames York and adds a detail about it. At the end of a sentence, extra information like this needs only one comma, before it; the full stop closes it.",
    not: {
      'We visited York a city full of history.':
        "'A city full of history' adds a description of York, so a comma must separate it from the name it describes.",
      'We visited, York, a city full of history.':
        "The comma before 'a city' is right, but the one after 'visited' splits the verb from the place visited.",
      'We visited, York a city full of history.':
        "The comma is in the wrong place: it splits 'visited' from 'York' and leaves the description run on to the name.",
    },
    more: 'Extra information in the middle of a sentence takes a pair of commas. At the end, the full stop does the work of the second comma.',
    tip: 'Adding a short description after a place or a name is a quick way to pack detail into a sentence.',
  },
  'ella whose brother plays for england came to watch': {
    why: "'Whose brother plays for England' adds a detail about Ella, who is already named. Extra information sits between a pair of commas, so the main clause, 'Ella came to watch', stays clear.",
    not: {
      'Ella, whose brother plays for England came to watch.':
        "The comma after 'Ella' opens the extra information, but none closes it after 'England'.",
      'Ella, whose brother plays for England; came to watch.':
        "The comma after 'Ella' opens the extra information, but a semicolon cannot close it. Extra information sits between a matching pair of commas.",
      'Ella whose brother plays for England came to watch.':
        'Her name already says who Ella is, so the detail about her brother is extra and needs a pair of commas.',
    },
    more: "'Whose' begins a relative clause about someone's possessions or relatives. It follows the same comma rules as 'who' and 'which'.",
    tip: "Do not confuse 'whose' (belonging to whom) with 'who's' (who is). 'Whose' never takes an apostrophe.",
  },
  'the train was cancelled which meant we were late': {
    why: "'Which meant we were late' comments on the whole first part: the cancellation made them late. A clause like this cannot stand alone, so a comma joins it to the sentence it comments on.",
    not: {
      'The train was cancelled which meant we were late.':
        "Without a comma, 'which' seems to belong to the word just before it. A 'which' clause about the whole sentence needs a comma first.",
      'The train was cancelled; which meant we were late.':
        "A semicolon needs a complete sentence on each side, and 'which meant we were late' cannot stand alone.",
      'The train was cancelled. Which meant we were late.':
        "The full stop leaves 'Which meant we were late.' as a fragment: it cannot stand without the sentence it comments on.",
    },
    more: "This 'which' refers back to a whole idea, not to one noun. It always follows a comma.",
    tip: "Starting a sentence with 'Which' is fine in a question ('Which one?'), but not when it comments on the sentence before.",
  },
  'in the year 1878 my father who was senior captain of his regiment obtained twelve months leave and came home':
    {
      why: "Mary Morstan has one father, so 'who was senior captain of his regiment' only adds a detail and sits between a pair of commas. 'Twelve months' leave' means leave lasting twelve months: a plural that ends in 's' takes the apostrophe after it.",
      not: {
        "In the year 1878 my father who was senior captain of his regiment obtained twelve months' leave and came home.":
          "With no commas, 'who was senior captain' reads as if it picked out one father from several. The detail about him needs a pair of commas.",
        'In the year 1878 my father who was senior captain of his regiment, obtained twelve months leave and came home.':
          "A lone comma after 'regiment' splits 'my father' from 'obtained', and school writing gives 'twelve months' leave' its apostrophe too.",
        'In the year 1878 my father, who was senior captain of his regiment obtained twelve months leave and came home.':
          "The commas round the detail are incomplete, with none after 'regiment', and school writing gives 'twelve months' leave' its apostrophe.",
      },
      more: "Time works like an owner: a day's journey, a week's pay, twelve months' leave. One unit takes 's, and a plural ending in s takes just the apostrophe.",
      tip: 'Check time phrases for apostrophes when you proofread. They are easy to miss.',
    },
  'snowball who had studied an old book of julius caesars campaigns which he had found in the farmhouse was in charge of the defensive operations':
    {
      why: "The clause from 'who had studied' to 'farmhouse' adds information about Snowball, so a pair of commas marks it off. Inside it, 'which he had found in the farmhouse' says which book is meant, so it takes no commas. The campaigns were Caesar's, so his name takes an apostrophe.",
      not: {
        "Snowball who had studied an old book of Julius Caesar's campaigns which he had found in the farmhouse was in charge of the defensive operations.":
          'With no commas, the long clause seems to pick out which Snowball is meant. It adds information about him, so it needs a pair of commas.',
        'Snowball who had studied an old book of Julius Caesars campaigns which he had found in the farmhouse, was in charge of the defensive operations.':
          "A lone comma after 'farmhouse' splits Snowball from his verb, 'was', and the campaigns are Caesar's, so his name needs an apostrophe.",
        'Snowball, who had studied an old book of Julius Caesars campaigns which he had found in the farmhouse was in charge of the defensive operations.':
          "The commas round the clause are incomplete, with none after 'farmhouse', and 'Caesar's' needs its apostrophe.",
      },
      more: "However long the extra information, the pair of commas goes at its two ends. The main clause, 'Snowball ... was in charge of the defensive operations', is untouched.",
      tip: 'In a long sentence, find the main clause first. Then check that any extra information has a comma at each end.',
    },
  'the rats which had been troublesome that winter were also said to be in league with snowball': {
    why: "With a pair of commas, 'which had been troublesome that winter' describes all the rats: the rats, all of them troublesome, were said to be in league with Snowball. That is what the prompt asks for, and it is how Orwell wrote it.",
    not: {
      'The rats which had been troublesome that winter were also said to be in league with Snowball.':
        'With no commas, the clause picks out only the rats that had been troublesome, as if others had not been. The prompt says every rat had been.',
      'The rats, which had been troublesome that winter were also said to be in league with Snowball.':
        "One comma opens the extra information but none closes it after 'winter', so the sentence is broken whichever meaning is wanted.",
      'The rats which had been troublesome that winter, were also said to be in league with Snowball.':
        "A lone comma after 'winter' splits the subject from its verb, 'were said'.",
    },
    more: 'Take the commas away and the clause defines: only the troublesome rats were accused. The words are the same; the commas decide how many rats are meant.',
    tip: 'Before you add or drop commas round a "which" clause, ask whether it describes all of the group or picks out some of them.',
  },
  'london which had gone to bed on sunday night oblivious and inert was awakened in the small hours of monday morning to a vivid sense of danger':
    {
      why: "Two pieces of extra information interrupt the main clause, 'London was awakened to a vivid sense of danger'. Each sits between its own pair of commas: one after 'London' and 'inert', one after 'awakened' and 'morning'.",
      not: {
        'London, which had gone to bed on Sunday night oblivious and inert was awakened, in the small hours of Monday morning, to a vivid sense of danger.':
          "The commas round 'in the small hours of Monday morning' are right, but the first pair never closes: a comma is missing after 'inert'.",
        'London, which had gone to bed on Sunday night oblivious and inert, was awakened in the small hours of Monday morning, to a vivid sense of danger.':
          "The first pair is right, but 'in the small hours of Monday morning' has a closing comma with no opening one after 'awakened'.",
        'London, which had gone to bed on Sunday night oblivious and inert was awakened in the small hours of Monday morning, to a vivid sense of danger.':
          "Neither pair is complete: no comma closes the clause after 'inert', and none opens the time phrase after 'awakened'.",
      },
      more: "The interruptions make the reader wait for the main point, as London slept unaware. 'Oblivious and inert' means unaware and not moving.",
      tip: 'When a sentence has several commas, pair them up. Every comma that opens an interruption needs one that closes it.',
    },
  'the wounds on snowballs back which a few of the animals still remembered to have seen had been inflicted by napoleons teeth':
    {
      why: "The clause 'which a few of the animals still remembered to have seen' adds a detail about the wounds, so it sits between a pair of commas. Two owners need apostrophes: the back is Snowball's and the teeth are Napoleon's.",
      not: {
        "The wounds on Snowballs back, which a few of the animals still remembered to have seen had been inflicted by Napoleon's teeth.":
          "The back is Snowball's, so his name needs an apostrophe, and no comma closes the extra information after 'seen'.",
        "The wounds on Snowball's back, which a few of the animals still remembered to have seen had been inflicted by Napoleons teeth.":
          "No comma closes the clause after 'seen', and the teeth are Napoleon's, so his name needs an apostrophe.",
        'The wounds on Snowballs back, which a few of the animals still remembered to have seen, had been inflicted by Napoleons teeth.':
          "The pair of commas is right, but both names need apostrophes: the back is Snowball's and the teeth are Napoleon's.",
      },
      more: 'This is the pigs rewriting history: Snowball is now said to have been wounded by Napoleon. The detail between the commas shows how few animals can still remember the truth.',
      tip: 'Check each name that owns something: one owner takes an apostrophe and "s".',
    },
  'the students who were tired went home': {
    why: "With a pair of commas, 'who were tired' becomes extra information about all the students: they were all tired, and they all went home. That is the meaning the prompt asks for.",
    not: {
      'The students who were tired went home.':
        'With no commas, the clause picks out only the tired students: they went home and the others stayed. The prompt wants every student tired.',
      'The students, who were tired went home.':
        'One comma opens the extra information but none closes it, so the sentence is broken whichever meaning is wanted.',
      'The students who were tired, went home.':
        "A lone comma after 'tired' splits the subject from its verb, 'went'.",
    },
    more: 'Without commas, the clause defines which students are meant: only the tired ones went home. Same words, different numbers of students.',
    tip: 'Ask whether the clause tells you which ones, or tells you more about all of them. Only the second takes commas.',
  },
  'my brother who lives in leeds is a nurse': {
    why: "With no commas, 'who lives in Leeds' picks out which brother is meant: the one in Leeds, not another. That only makes sense if there is more than one brother, which is what the prompt asks for.",
    not: {
      'My brother, who lives in Leeds, is a nurse.':
        "The pair of commas makes 'who lives in Leeds' extra information about the writer's only brother, so it says there is just one.",
      'My brother, who lives in Leeds is a nurse.':
        'One comma opens extra information but none closes it, so the sentence is broken whichever meaning is wanted.',
      'My brother who lives in Leeds, is a nurse.':
        "A lone comma after 'Leeds' splits the subject, 'My brother who lives in Leeds', from its verb, 'is'.",
    },
    more: 'A clause that picks out which person or thing is meant is defining and takes no commas. One that adds a detail about someone already identified is non-defining and takes a pair.',
    tip: 'Ask: does the clause tell me which one? If yes, no commas. If it only tells me more, use a pair.',
  },
  'the cakes which had nuts in were eaten first': {
    why: "With no commas, 'which had nuts in' defines which cakes are meant: the ones with nuts, as opposed to the rest. Those were eaten first, which is what the prompt asks for.",
    not: {
      'The cakes, which had nuts in, were eaten first.':
        'The pair of commas turns the clause into a detail about every cake: they all had nuts in and were all eaten first. The prompt wants only some.',
      'The cakes, which had nuts in were eaten first.':
        'A comma opens the clause but none closes it, so the sentence is broken whichever meaning is wanted.',
      'The cakes which had nuts in, were eaten first.':
        "A lone comma after 'in' splits the subject from its verb, 'were eaten'.",
    },
    more: "In British English, 'which' can begin a defining clause as well as 'that'. What decides the meaning is the commas, not the word.",
    tip: 'When you mean only some of a group, leave the commas out.',
  },
  'the passengers who had tickets were allowed on board': {
    why: "With no commas, 'who had tickets' picks out which passengers were allowed on: the ones with tickets. So the others, without tickets, were not, which is what the prompt asks for.",
    not: {
      'The passengers, who had tickets, were allowed on board.':
        'The pair of commas makes the clause a detail about every passenger: all had tickets, all boarded. The prompt says some were turned away.',
      'The passengers who had tickets, were allowed on board.':
        "A lone comma after 'tickets' splits the subject from its verb, 'were allowed'.",
      'The passengers, who had tickets were allowed on board.':
        'One comma opens the clause but none closes it, so the sentence is broken whichever meaning is wanted.',
    },
    more: 'A defining clause narrows the group to the ones it describes. A non-defining clause, between commas, describes the whole group.',
    tip: 'Rules and signs use defining clauses all the time: "Visitors who arrive late will not be admitted." No commas.',
  },
  'the players who had trained all summer were exhausted': {
    why: "A pair of commas makes 'who had trained all summer' extra information about all the players: the whole team trained all summer and the whole team was exhausted. That is what the prompt asks for.",
    not: {
      'The players who had trained all summer were exhausted.':
        'With no commas, the clause picks out only the players who had trained all summer, as if others had not. The prompt wants the whole team.',
      'The players who had trained all summer, were exhausted.':
        "A lone comma after 'summer' splits the subject from its verb, 'were'.",
      'The players, who had trained all summer were exhausted.':
        'One comma opens the clause but none closes it, so the sentence is broken whichever meaning is wanted.',
    },
    more: 'Without the commas, the sentence would divide the team in two: those who trained, who were exhausted, and those who did not.',
    tip: 'Commas round a clause say "all of them, by the way". No commas say "only these ones".',
  },
  'the book that i borrowed which was due back today is lost': {
    why: "'That I borrowed' tells us which book is meant, so it takes no commas: a 'that' clause never does. 'Which was due back today' adds a detail about that book, so it sits between a pair of commas.",
    not: {
      'The book, that I borrowed, which was due back today, is lost.':
        "'That I borrowed' tells us which book is meant, and a 'that' clause never takes commas. Only the 'which' clause needs a pair.",
      'The book that I borrowed which was due back today is lost.':
        "The writer borrowed only one book, so 'which was due back today' only adds a detail about it and needs a pair of commas.",
      'The book, that I borrowed which was due back today, is lost.':
        "The commas are round the wrong words: 'that I borrowed' takes none, and the 'which' clause needs one before it.",
    },
    more: 'One noun can carry both kinds of clause. The defining one comes first and is never marked off; the extra detail follows between commas.',
    tip: 'Ask whether the clause tells you which one is meant. If it does, it takes no commas. If it only adds a detail, it takes a pair.',
  },
  'my grandmother who is ninety still swims every day': {
    why: "'Who is ninety' is extra information about the grandmother, so brackets enclose it. Lift it out and 'My grandmother still swims every day' is a complete sentence. Nothing extra goes between the closing bracket and the verb.",
    not: {
      'My grandmother, (who is ninety) still swims every day.':
        'No comma is needed before an opening bracket: the bracket itself marks the break.',
      'My grandmother (who is ninety), still swims every day.':
        "The brackets are right, but the comma after them splits the subject, 'My grandmother', from her verb, 'swims'.",
      'My grandmother, (who is ninety), still swims every day.':
        "Brackets replace commas, so commas round them double the marking, and the second splits 'My grandmother' from 'swims'.",
    },
    more: 'Brackets, a pair of commas, or a pair of dashes can all mark extra information. Brackets make it the quietest of the three.',
    tip: 'Read the sentence without the brackets. If it still works, the brackets are in the right place.',
  },
  'the national health service nhs was founded in 1948': {
    why: "The short form, 'NHS', follows the full name in brackets the first time it appears. After that, a writer can use 'NHS' alone. The brackets enclose only the short form, and the sentence carries on with no comma.",
    not: {
      'The National Health Service, (NHS) was founded in 1948.':
        'No comma is needed before an opening bracket: the bracket itself marks the break.',
      'The National Health Service, (NHS was founded in 1948).':
        'Two slips: no comma belongs before the opening bracket, and the bracket closes too late, swallowing the verb.',
      'The National Health Service (NHS was founded in 1948).':
        "The bracket closes too late, swallowing the verb. Only the short form, 'NHS', belongs inside.",
    },
    more: 'The first time you mention an organisation in an essay, write its full name with the short form in brackets. After that, the short form is enough.',
    tip: 'Brackets after a full name tell the reader what the letters stand for, so they can follow the rest of your writing.',
  },
  'the diagram see page 12 shows how the heart pumps blood': {
    why: "'See page 12' tells the reader where to look, a useful aside that the sentence can do without. Brackets enclose the whole instruction, so 'The diagram shows how the heart pumps blood' reads clearly around it.",
    not: {
      'The diagram (see page 12 shows how the heart pumps blood).':
        "The bracket closes too late, swallowing the verb 'shows'. Lift out the bracketed words and only 'The diagram' is left.",
      'The diagram, (see page 12 shows how the heart pumps blood).':
        "Two slips: no comma belongs before the opening bracket, and the bracket closes too late, swallowing the verb 'shows'.",
      'The diagram, (see page 12) shows how the heart pumps blood.':
        'No comma is needed before an opening bracket: the bracket itself marks the break.',
    },
    more: 'Textbooks and reports put references in brackets all the time: (see below), (page 4), (Figure 2).',
    tip: 'In a science write-up, a bracketed reference points to your table or diagram without breaking your sentence.',
  },
  'that was the problem that crushing my temples in my hands i set myself to solve': {
    why: "Jekyll interrupts his own sentence to show his despair: 'crushing my temples in my hands'. Brackets enclose exactly the interruption, so lifting it out leaves a complete sentence: 'That was the problem that ... I set myself to solve.'",
    not: {
      'That was the problem that crushing my temples in my hands I set myself to solve.':
        'Without brackets the interruption runs straight into the sentence, and the reader cannot tell where the main clause picks up again.',
      'That was the problem that (crushing my temples in my hands I set myself to solve).':
        "The bracket closes too late. Lift out the bracketed words and 'That was the problem that' is left unfinished.",
      'That was the problem (that crushing my temples in my hands) I set myself to solve.':
        "The bracket opens too early: 'that' belongs to the main sentence, 'the problem that ... I set myself to solve'.",
    },
    more: 'The bracketed gesture shows Jekyll in agony even as he describes his problem calmly. Brackets can hold an action as well as a comment.',
    tip: 'A pair of commas could mark this interruption too. Brackets make it a firmer aside.',
  },
  'and then a swift movement of the steamboat she had suddenly come round to avoid being run down flung him headlong from the seat upon which he was standing':
    {
      why: "The brackets hold an explanation of the movement: 'she had suddenly come round to avoid being run down'. Lift it out and the main sentence stands: 'a swift movement of the steamboat flung him headlong from the seat'.",
      not: {
        'And then a swift movement of the steamboat (she had suddenly come round to avoid being run down flung him headlong from the seat upon which he was standing).':
          "The bracket closes too late, swallowing the main verb, 'flung'. Lift out the bracketed words and no sentence is left.",
        'And then a swift movement of the steamboat, (she had suddenly come round to avoid being run down flung him headlong from the seat upon which he was standing).':
          "Two slips: no comma belongs before the opening bracket, and the bracket closes too late, swallowing the main verb, 'flung'.",
        'And then a swift movement of the steamboat, (she had suddenly come round to avoid being run down) flung him headlong from the seat upon which he was standing.':
          'No comma is needed before an opening bracket: the bracket itself marks the break.',
      },
      more: 'A whole sentence can sit inside brackets in the middle of another, as here. It keeps no capital letter and no full stop of its own.',
      tip: 'Never put a comma straight before an opening bracket. If a comma is needed, it goes after the closing one.',
    },
  'the museum is open every day except mondays': {
    why: "'Except Mondays' is an afterthought added to the sentence, so it goes in brackets. The full stop belongs to the whole sentence, so it comes after the closing bracket, not inside it.",
    not: {
      'The museum is open every day (except Mondays.)':
        'The full stop ends the whole sentence, not just the words in brackets, so it goes outside the closing bracket.',
      'The museum is open every day, (except Mondays).':
        'No comma is needed before an opening bracket: the bracket itself marks the break.',
      'The museum is open every day, (except Mondays.)':
        'Two slips: no comma belongs before the opening bracket, and the full stop, which ends the whole sentence, goes outside the bracket.',
    },
    more: "A whole sentence in brackets keeps its full stop inside: 'Entry is free. (Donations are welcome.)' A phrase in brackets at the end of a sentence has the full stop outside.",
    tip: 'At the end of a bracket, ask whether the bracketed words are a sentence of their own. If not, the full stop goes outside.',
  },
  'the capital of australia canberra is smaller than sydney': {
    why: "'Canberra' names the capital, a detail the sentence can do without, so brackets enclose just that word. Lift it out and 'The capital of Australia is smaller than Sydney' still reads correctly. No comma is needed beside either bracket.",
    not: {
      'The capital of Australia, (Canberra), is smaller than Sydney.':
        "Brackets replace commas, so a comma on either side doubles the marking. The brackets alone set off 'Canberra'.",
      'The capital of Australia (Canberra), is smaller than Sydney.':
        "The comma after the bracket splits the subject, 'The capital of Australia', from its verb, 'is'.",
      'The capital of Australia, (Canberra) is smaller than Sydney.':
        'No comma is needed before an opening bracket: the bracket itself marks the break.',
    },
    more: 'Many people guess that Sydney is the capital of Australia. The bracketed name sets the reader right without interrupting the comparison.',
    tip: 'Brackets do the job of a pair of commas, so they need no commas beside them.',
  },
  'literally i was what he often called me the apple of his eye': {
    why: "The aside 'what he often called me' sits in brackets in the middle of the sentence. Lift it out and the sentence still reads: 'Literally, I was ... the apple of his eye.' No comma is needed beside the brackets.",
    not: {
      'Literally, I was (what he often called me the apple of his eye).':
        "The bracket closes too late, swallowing 'the apple of his eye', which the sentence needs. Lift out the brackets and 'I was' is left hanging.",
      'Literally, I was, (what he often called me) the apple of his eye.':
        'No comma is needed before an opening bracket: the bracket itself marks the break.',
      'Literally, I was, (what he often called me the apple of his eye).':
        'Two slips: a comma before the opening bracket, and a closing bracket that swallows the end of the sentence.',
    },
    more: "Rochester is blind for the first years of their marriage, so Jane is 'literally' the apple of his eye: his sight. The brackets add his own name for her.",
    tip: "An aside in brackets can add a second voice to a sentence, here Rochester's words inside Jane's.",
  },
  'the want of house or brass by which i suppose you mean money does not make a beggar in your sense of the word':
    {
      why: "Jane adds an explanation in brackets: 'brass', the servant's word, means money. The brackets alone mark the aside off, and the sentence runs round it: 'The want of house or brass does not make a beggar'.",
      not: {
        'The want of house or brass, (by which I suppose you mean money) does not make a beggar in your sense of the word.':
          'No comma is needed before an opening bracket: the bracket itself marks the break.',
        'The want of house or brass (by which I suppose you mean money), does not make a beggar in your sense of the word.':
          "The comma after the bracket splits the long subject, 'The want of house or brass', from its verb, 'does not make'.",
        'The want of house or brass, (by which I suppose you mean money), does not make a beggar in your sense of the word.':
          'Brackets replace commas, so commas on both sides double the marking, and the second splits the subject from its verb.',
      },
      more: "Jane, penniless, has been taken for a beggar by the servant, Hannah. The bracketed explanation shows her translating Hannah's dialect politely.",
      tip: 'Brackets are a good place to explain a word your reader might not know.',
    },
  'milk and apples this has been proved by science comrades contain substances absolutely necessary to the well-being of a pig':
    {
      why: "Squealer drops an aside into his claim: 'this has been proved by Science, comrades'. Brackets enclose the whole aside, including 'comrades', the listeners he is addressing, who are set off by a comma. Lift out the brackets and their words, and the main sentence still stands.",
      not: {
        'Milk and apples (this has been proved by Science comrades) contain substances absolutely necessary to the well-being of a pig.':
          "The brackets are right, but 'comrades', the listeners Squealer is addressing, needs a comma to separate it from 'Science'.",
        'Milk and apples (this has been proved by Science) comrades contain substances absolutely necessary to the well-being of a pig.':
          "The bracket closes too early and 'comrades' loses its comma, so the sentence seems to say that comrades contain substances.",
        'Milk and apples (this has been proved by Science), comrades contain substances absolutely necessary to the well-being of a pig.':
          "The bracket closes too early, so 'comrades contain substances' seems to be about the animals, not the milk and apples.",
      },
      more: "The aside is Squealer's trick: an appeal to 'Science' that nobody can check. Brackets make it sound like a mere footnote while it does the persuading.",
      tip: 'Test brackets by reading the sentence without them. If what is left is a complete sentence, they are in the right place.',
    },
  'at any rate the seeds which the martians intentionally or accidentally brought with them gave rise in all cases to red-coloured growths':
    {
      why: "'At any rate' opens the sentence and takes a comma. The brackets hold a small aside, 'intentionally or accidentally', which can be lifted out: 'the seeds which the Martians ... brought with them gave rise in all cases to red-coloured growths' still reads perfectly.",
      not: {
        'At any rate; the seeds which the Martians (intentionally or accidentally) brought with them gave rise in all cases to red-coloured growths.':
          "The brackets are right, but a semicolon cannot follow 'At any rate', which is not a complete sentence. A comma does.",
        'At any rate, the seeds which the Martians (intentionally or accidentally brought with them) gave rise in all cases to red-coloured growths.':
          "The bracket closes too late. Lift out the bracketed words and the sentence breaks: 'the seeds which the Martians ... gave rise' makes no sense.",
        'At any rate; the seeds which the Martians (intentionally or accidentally brought with them) gave rise in all cases to red-coloured growths.':
          "Two slips: a semicolon after 'At any rate', and a closing bracket that swallows 'brought with them', which the sentence needs.",
      },
      more: 'The narrator does not know whether the Martians meant to bring the seeds. The brackets let him admit that doubt without breaking his sentence.',
      tip: 'Keep brackets tight round the aside. Words the sentence needs must stay outside them.',
    },
  'the match was postponed the pitch was waterlogged': {
    why: "Two sentences: 'The match was postponed.' and a second, in brackets, giving the reason. Because the bracketed words are a whole sentence standing alone, they begin with a capital and their full stop sits inside the closing bracket.",
    not: {
      'The match was postponed. (The pitch was waterlogged).':
        'The bracketed words are a whole sentence of their own, so their full stop goes inside the closing bracket.',
      'The match was postponed (The pitch was waterlogged.)':
        'The first sentence has no full stop, yet the bracket opens with a capital as if a new sentence had begun.',
      'The match was postponed, (the pitch was waterlogged).':
        'No comma is needed before an opening bracket: the bracket itself marks the break.',
    },
    more: "The same reason could sit inside the first sentence: 'The match was postponed (the pitch was waterlogged).' Then there is no capital, and the full stop goes outside.",
    tip: 'Decide first: is the bracketed part inside a sentence, or a sentence on its own? Its capital letter and full stop follow from that.',
  },
  'the film have you seen it won three awards': {
    why: "The aside in brackets is a question of its own, so its question mark stays inside the brackets. The main sentence, 'The film won three awards', is a statement and ends with a full stop.",
    not: {
      'The film (have you seen it) won three awards?':
        'The question belongs to the bracketed aside, so its question mark goes inside the brackets. The main sentence is a statement.',
      'The film (have you seen it?) won three awards?':
        'The question mark inside the brackets is right, but the main sentence states a fact, so it ends with a full stop.',
      'The film (have you seen it) won three awards.':
        'The full stop is right, but the aside in brackets asks a question, so it needs its own question mark inside.',
    },
    more: 'Bracketed asides keep their own question marks and exclamation marks, but not their own full stops when they sit inside another sentence.',
    tip: 'A question in brackets is a friendly way to speak to the reader in an article or a blog.',
  },
  'my sister who lives in rome is visiting next week': {
    why: "With brackets, 'who lives in Rome' becomes extra information about the writer's only sister. Without them, it would pick out one sister from several. Lift out the brackets and 'My sister is visiting next week' still makes sense.",
    not: {
      'My sister who lives in Rome is visiting next week.':
        "With nothing round it, 'who lives in Rome' picks out which sister is meant, suggesting there are others. The prompt says there is one.",
      'My sister (who lives in Rome is visiting next week).':
        "The bracket closes too late, swallowing the main verb. Lift out the bracketed words and only 'My sister' is left.",
      'My sister (who lives) in Rome is visiting next week.':
        "The bracket closes too early: 'in Rome' belongs to the clause about where she lives.",
    },
    more: 'Brackets work like a pair of commas here. Either one says the clause is extra; leaving both out says it identifies.',
    tip: 'If you have one sister, one teacher or one dog, a clause about them is extra information and needs marking off.',
  },
  'a handsome mince-pie had been made yesterday morning which accounted for the mincemeat not being missed and the pudding was already on the boil':
    {
      why: "The bracket holds Pip's aside about the mincemeat. The sentence then joins two main clauses with 'and', and the comma that marks that join comes after the closing bracket, never inside it, because the bracketed words do not own it.",
      not: {
        'A handsome mince-pie had been made yesterday morning (which accounted for the mincemeat not being missed,) and the pudding was already on the boil.':
          'The comma marks the join between the two main clauses, so it goes after the closing bracket, not inside it.',
        'A handsome mince-pie had been made yesterday morning (which accounted for the mincemeat not being missed) and, the pudding was already on the boil.':
          "The comma that marks the join between two main clauses goes before 'and', not after it.",
        'A handsome mince-pie had been made yesterday morning (which accounted for the mincemeat not being missed,) and, the pudding was already on the boil.':
          "Two slips: a comma inside the bracket that belongs outside it, and a comma after 'and' that does not belong at all.",
      },
      more: 'Pip has secretly taken mincemeat for the escaped convict. His aside in brackets shows his relief that the theft has gone unnoticed.',
      tip: 'Read the sentence without the bracketed words to place the commas. A comma that would follow "morning" goes after the closing bracket.',
    },
  'but we were wrong comrades': {
    why: "Squealer is speaking to the animals, so 'comrades' is a word of address, separated from the rest by a comma. Without the comma, the sentence would say something else: that they were the wrong comrades.",
    not: {
      'But we were wrong comrades.':
        "Without the comma, 'wrong comrades' reads as a description: they were the wrong comrades. 'Comrades' is the listeners being addressed.",
      'But we were wrong; comrades.':
        "A semicolon needs a complete sentence after it, and 'comrades' alone is not one. A comma sets off a word of address.",
      'But we were, wrong comrades.':
        "The comma is in the wrong place. It splits 'were' from 'wrong' and leaves 'wrong comrades' run together.",
    },
    more: "Squealer calls the animals 'comrades' constantly. The friendly word makes his lies sound like confidences shared between equals.",
    tip: "A word of address at the end of a sentence takes a comma before it: 'Thank you, Mr Ali.'",
  },
  'sam where did you put my keys': {
    why: "The speaker is talking to Sam, so 'Sam' is a word of address and is followed by a comma. The rest is a question, with 'did' before 'you', so it ends with a question mark.",
    not: {
      'Sam where did you put my keys?':
        "The question mark is right, but 'Sam' is the person being spoken to, so a comma separates the name from the question.",
      'Sam, where did you put my keys.':
        "The comma after 'Sam' is right, but 'where did you put my keys' asks something, so it needs a question mark.",
      'Sam where did you put my keys.':
        "Two slips: no comma after 'Sam', the person addressed, and no question mark at the end of the question.",
    },
    more: 'Names, titles and words like "mate" or "everyone" all count as words of address when they name the person being spoken to.',
    tip: 'In dialogue, every name used to call someone needs a comma. It is one of the easiest marks to forget.',
  },
  'thank you for your help miss ali': {
    why: 'Miss Ali is the person being spoken to, so her name is a word of address. At the end of a sentence, a word of address takes a comma before it.',
    not: {
      'Thank you for your help Miss Ali.':
        'Miss Ali is the person being thanked and spoken to, so a comma separates her name from the rest of the sentence.',
      'Thank you for your help; Miss Ali.':
        "A semicolon needs a complete sentence after it, and 'Miss Ali' alone is not one.",
      'Thank you for your help: Miss Ali.':
        'A colon would introduce an explanation or a list, but the name is simply the person addressed. A comma sets it off.',
    },
    more: 'A title and name together, such as "Miss Ali" or "Dr Shah", work as one word of address.',
    tip: 'End a thank-you note or an email to a teacher with the comma before their name.',
  },
  'reader i married him': {
    why: "Jane speaks directly to the reader, so 'Reader' is a word of address: the person being spoken to. A word of address is separated from the rest of the sentence by a comma.",
    not: {
      'Reader I married him.':
        "'Reader' is the person Jane is speaking to, so a comma must separate the word of address from the rest of the sentence.",
      'Reader; I married him.':
        "A semicolon joins two complete sentences, and 'Reader' alone is not one. A word of address takes a comma.",
      'Reader: I married him.':
        "A colon follows a complete sentence, and the single word 'Reader' is not one. A word of address takes a comma.",
    },
    more: 'Addressing the reader makes the news feel like a confidence shared with a friend. It opens the last chapter of the novel.',
    tip: "In letters and speeches, put a comma after the name of the person you address: 'Dear Sam,' or 'Friends, ...'",
  },
  'there comrades is the answer to all our problems': {
    why: "Old Major addresses his audience in the middle of the sentence. 'Comrades' is a word of address, so it sits between a pair of commas, and the sentence reads around it: 'There ... is the answer to all our problems.'",
    not: {
      'There comrades, is the answer to all our problems.':
        "A word of address in the middle of a sentence needs a comma on each side. The one after 'There' is missing.",
      'There, comrades is the answer to all our problems.':
        "The comma after 'There' opens the word of address, but none closes it after 'comrades'.",
      'There comrades is the answer to all our problems.':
        "With no commas, 'comrades' seems to be the subject of 'is'. It is the listeners being addressed and needs a comma each side.",
    },
    more: 'The answer Major means is that human beings take what the animals produce. Speaking to them as comrades in mid-sentence keeps them with him.',
    tip: 'In a speech, address the audience in the middle of a sentence to hold their attention. Remember a comma on each side.',
  },
  'oh no i have left my bag on the bus': {
    why: "'Oh no' is an interjection, a cry of feeling, and it opens the sentence. A comma separates it from the statement that follows: 'I have left my bag on the bus.'",
    not: {
      'Oh, no I have left my bag on the bus.':
        "The comma splits the cry 'Oh no' in two and leaves 'no I have left' run together. It belongs after 'no'.",
      'Oh no I have left my bag on the bus.':
        "The cry 'Oh no' needs a comma to separate it from the sentence that follows.",
      'Oh no; I have left my bag on the bus.':
        "A semicolon needs a complete sentence on each side, and 'Oh no' is not one. A comma follows an interjection.",
    },
    more: "Interjections such as 'Oh no', 'Well' and 'Yes' are followed by a comma when the sentence runs on after them. A cry that stands alone can end with an exclamation mark instead.",
    tip: 'Use interjections in dialogue to show how a character feels, and leave them out of formal essays.',
  },
  'outside the soil was banked high against the house': {
    why: "'Outside' is a one-word opener telling us where. Without a comma, 'Outside the soil' reads as one phrase, and 'was banked' is left with no subject. The comma shows that 'the soil' is the subject.",
    not: {
      'Outside the soil was banked high against the house.':
        "Without the comma, 'Outside the soil' reads as one phrase, as if something were outside the soil, and the sentence is left with no subject for 'was banked'.",
      'Outside the soil, was banked high against the house.':
        "The comma comes after 'soil', so 'Outside the soil' still reads as one phrase and 'was banked' is left with no subject. It belongs after 'Outside'.",
      'Outside; the soil was banked high against the house.':
        "A semicolon joins two complete sentences, and 'Outside' on its own is not one. An opener takes a comma.",
    },
    more: "The narrator is trapped in a ruined house after a Martian cylinder has landed beside it. Openers such as 'Outside', 'Inside' and 'Below' can also begin a phrase, so a comma after them is often needed for sense.",
    tip: 'If the word after your opener could join it to make a phrase, the comma decides how the sentence is read.',
  },
  'its no longer needed comrade said squealer stiffly': {
    why: "Squealer speaks to one of the animals, so 'comrade' is a word of address and takes a comma before it. His words then end with a comma inside the closing speech marks, because 'said Squealer stiffly' follows.",
    not: {
      '"It\'s no longer needed comrade," said Squealer stiffly.':
        "The comma ending the speech is right, but 'comrade' is the animal being spoken to and needs a comma before it.",
      '"It\'s no longer needed, comrade", said Squealer stiffly.':
        "The comma before 'comrade' is right, but the comma ending the speech belongs inside the closing speech marks.",
      '"It\'s no longer needed comrade", said Squealer stiffly.':
        "'Comrade' needs a comma before it, as the animal addressed, and the comma ending the speech belongs inside the speech marks.",
    },
    more: "'It' here is 'Beasts of England', the song of the Rebellion, which the pigs have just banned. 'Stiffly' shows Squealer will not discuss it.",
    tip: 'A word of address at the end of spoken words still needs its comma, inside the speech marks.',
  },
  'but sometimes you might make the wrong decisions comrades and then where should we be': {
    why: "Squealer addresses the animals as 'comrades' in the middle of his sentence, so the word has a comma on each side. The sentence ends in a question, 'where should we be', with 'should' before 'we', so it takes a question mark.",
    not: {
      'But sometimes you might make the wrong decisions, comrades, and then where should we be.':
        "The commas round 'comrades' are right, but 'where should we be' asks a question, so the sentence ends with a question mark.",
      'But sometimes you might make the wrong decisions, comrades and then where should we be?':
        "The question mark is right, but 'comrades' needs a comma after it as well as before: a word of address is marked off on both sides.",
      'But sometimes you might make the wrong decisions, comrades and then where should we be.':
        "Two slips: 'comrades' needs a comma after it, and 'where should we be' needs a question mark.",
    },
    more: 'Squealer is explaining why Napoleon must make every decision. The question frightens the animals into agreeing without giving them anything to argue with.',
    tip: 'A frightening question at the end of a sentence is a classic persuasive trick. Look for it when you analyse a speech.',
  },
  'what is the use of having powers doctor when one has no field upon which to exert them': {
    why: "Holmes is speaking to Watson, the doctor, so 'doctor' is a word of address and sits between a pair of commas. The sentence asks a question, 'What is the use', so it ends with a question mark.",
    not: {
      'What is the use of having powers, doctor when one has no field upon which to exert them?':
        "The question mark is right, but 'doctor' needs a comma after it as well as before: a word of address is marked off on both sides.",
      'What is the use of having powers, doctor, when one has no field upon which to exert them.':
        "The commas round 'doctor' are right, but the sentence asks 'What is the use', so it needs a question mark.",
      'What is the use of having powers, doctor when one has no field upon which to exert them.':
        "Two slips: 'doctor' needs a closing comma, and the sentence is a question and needs a question mark.",
    },
    more: 'Holmes is bored without a case. The question shows how much he needs problems to solve.',
    tip: "A title used to address someone, such as 'doctor' or 'sir', takes commas just as a name does.",
  },
  'at last however came what we had waited for so long': {
    why: "'However' interrupts the sentence to show a contrast with what came before, so it takes a comma on each side. 'At last' opens the sentence, and the main clause, 'came what we had waited for so long', follows the second comma.",
    not: {
      'At last however came what we had waited for so long.':
        "'However' interrupts the sentence to show a contrast, so it needs a comma on each side. Here it has none.",
      'At last, however came what we had waited for so long.':
        "One comma opens the interruption before 'however', but none closes it after.",
      'At last; however, came what we had waited for so long.':
        "A semicolon needs a complete sentence before it, and 'At last' is not one. A comma belongs there.",
    },
    more: 'Jonathan Small is telling how, after years of waiting, the news finally came. Placing "however" mid-sentence turns the story without starting a new sentence.',
    tip: "'However' in the middle of a sentence is marked off on both sides; at the start of a sentence, it takes one comma after it.",
  },
  'however hard she tried the lid would not move': {
    why: "Here 'however' means 'no matter how', and it belongs with 'hard': however hard she tried. So no comma follows 'However'. The comma comes at the end of the opening clause, after 'tried', before the main clause.",
    not: {
      'However, hard she tried, the lid would not move.':
        "A comma after 'However' turns it into 'but' and leaves 'hard she tried' as nonsense. Here it means 'no matter how', so no comma follows it.",
      'However, hard she tried the lid would not move.':
        "The comma after 'However' breaks 'however hard' apart, and no comma closes the opening clause after 'tried'.",
      'However hard, she tried the lid would not move.':
        "The comma comes too early. The opening clause is 'However hard she tried', so the comma goes after 'tried'.",
    },
    more: "'However' followed by a comma means 'but': 'However, she kept trying.' Followed by an adjective or adverb, it means 'no matter how', with no comma: 'However late it is, call me.'",
    tip: "Read the word after 'however'. If it is 'hard', 'much', 'long' or similar, 'however' means 'no matter how' and takes no comma.",
  },
  'i dont know sam': {
    why: "With a comma, 'Sam' is the person being spoken to: the speaker is telling Sam that they do not know something. Without it, Sam becomes the person the speaker does not know. 'Don't', short for 'do not', needs its apostrophe.",
    not: {
      "I don't know Sam.":
        "Without the comma, 'Sam' is the person the speaker does not know. The prompt says the speaker is talking to Sam.",
      'I dont know, Sam.':
        "The comma is right, but 'don't' is short for 'do not' and needs its apostrophe.",
      'I dont know Sam.':
        "Two slips: 'don't' needs its apostrophe, and without a comma the sentence says the speaker has never met Sam.",
    },
    more: 'One comma, two meanings. A word of address is always marked off by a comma; the same name without one becomes part of the sentence.',
    tip: 'When a name ends a sentence, read it both ways. If the person is being spoken to, add the comma.',
  },
  'call me sarah': {
    why: "With a comma, 'Sarah' is the person being spoken to, and 'Call me' asks her to phone. Without the comma, 'Call me Sarah' tells someone what name to use for the speaker.",
    not: {
      'Call me Sarah.':
        "Without the comma, the sentence tells someone what name to use: 'Sarah'. The prompt says Sarah is being asked to phone.",
      'Call me; Sarah.':
        "A semicolon needs a complete sentence after it, and 'Sarah' alone is not one. A comma sets off the person addressed.",
      'Call me: Sarah.':
        "A colon would introduce what 'Call me' means, making Sarah the name to use. The prompt wants Sarah to phone.",
    },
    more: 'A word of address can come at the start, middle or end of a sentence. Wherever it is, commas mark it off.',
    tip: 'In texts and messages, a missing comma before a name can change who is being asked to do what.',
  },
  'while the band played the audience sang along': {
    why: "Without the comma, a reader runs 'played the audience' together, as if the band were playing the audience. The comma after 'played' closes the opening clause and shows that 'the audience' begins the main clause.",
    not: {
      'While the band played the audience, sang along.':
        "The comma comes too late. It splits 'the audience' from its verb, 'sang', and leaves 'played the audience' together.",
      'While the band, played the audience sang along.':
        "The comma splits 'the band' from its verb, 'played'. The opening clause ends after 'played'.",
      'While the band played the audience sang along.':
        "Without the comma, a reader takes 'played the audience' together, as if the band were playing the audience.",
    },
    more: 'Some writers leave out the comma after a short opening clause. Here it cannot be left out: without it, the sentence first says something it does not mean.',
    tip: 'Read your opening clause with the words after it. If they could join up wrongly, the comma is essential.',
  },
  'outside the school was a large crowd': {
    why: "This sentence is in an unusual order: it means 'A large crowd was outside the school'. 'Outside the school' is one phrase saying where, and it leads straight into the verb 'was', so no comma breaks it.",
    not: {
      'Outside, the school was a large crowd.':
        "A comma after 'Outside' makes 'the school' the subject, so the sentence says the school was a large crowd.",
      'Outside the school, was a large crowd.':
        "The comma splits the phrase 'Outside the school' from the verb it leads into, 'was'.",
      'Outside, the school, was a large crowd.':
        "These commas cut 'the school' off on its own, making it the subject, so the sentence says the school was a crowd.",
    },
    more: "Writers sometimes put the place first and the subject last: 'Down the hill rolled the cart.' In such sentences no comma follows the opening phrase.",
    tip: 'Find the subject first. If the opening phrase is followed by its verb and then the subject, leave the comma out.',
  },
}
