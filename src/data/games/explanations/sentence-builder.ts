import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Sentence Builder: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/sentence-builder.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: explanations for the 155 sentences
 * added (89 copied word for word from the out-of-copyright novels, 66 of the
 * site's own) and for the five earlier complex sentences that gained a comma
 * tile, whose keys changed with it. Each says which clause or phrase must come
 * first and why, and where the comma or semicolon goes. Every added sentence
 * has one right order, so none of these explanations names another order as
 * correct. Written with AI and checked against each sentence, as the founder
 * decided (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second reader, as the founder decided: the
 * two real sentences taken out of the bank for a second right order (its
 * docblock says which) took their explanations with them; "The curtain rose,
 * and everyone gasped" replaces a sentence that had one, under its new key;
 * and four facts of context were put right (Snowball's exile, Mrs Gardiner's
 * turn to listen, how the Bennet sisters were addressed, and the carriage at
 * the gate).
 */
export const EXPLANATIONS: GameExplanations = {
  'She walks to school every morning': {
    why: "A simple sentence is one main clause: here, one subject and one verb. 'She' is the subject and 'walks' is the verb, with an -s because 'she' is third person singular (he, she, it). The details follow: where ('to school') and then when ('every morning').",
    more: "After the verb, details usually come in the order manner, place, time. So 'to school' comes before 'every morning'. A plain statement like this one starts with its subject.",
    tip: 'Build a sentence in layers: who, does what, where, when. It keeps your English word order clear.',
  },
  'The cat is sleeping on the sofa': {
    why: "'The cat' is the subject. 'Is sleeping' is the verb group for something happening now: the helping verb 'is' comes first, then the -ing verb. 'On the sofa' says where and usually goes last.",
    more: "This is the present continuous: is or are plus a verb ending in -ing. The helping verb agrees with the subject: the cat is sleeping, but the cats are sleeping. 'The cat on the sofa is sleeping' is also correct English, and this game accepts it too.",
    tip: "Use the present continuous for what is happening right now. For habits, use the present simple: 'The cat sleeps a lot.'",
  },
  'My brother plays football at the weekend': {
    why: "'My brother' is the subject and 'plays' is the verb, with an -s because 'he' is third person singular. 'Football' is what he plays. 'At the weekend' says when, so it goes at the end.",
    more: "In British English we say 'at the weekend'. Americans say 'on the weekend'. Other time phrases follow set patterns: at night, at Christmas, but on Monday and in the morning.",
    tip: 'Learn time phrases in sets so the preposition comes naturally: at the weekend, on Saturday, in July.',
  },
  'We had lunch in the park': {
    why: "'We' is the subject, 'had' is the past tense of 'have', and 'lunch' is the object. 'In the park' says where and comes last. The pattern is subject, verb, object, place.",
    more: "'Had' is the past tense of 'have' for every subject: I had, she had, they had. 'Have lunch' means 'eat lunch'. Details such as place follow the object.",
    tip: "Check the tense. 'We had lunch' already happened, but 'We have lunch' describes a habit.",
  },
  'They are watching a film tonight': {
    why: "'They' is the subject and 'are watching' is the verb group, with 'a film' as the object. 'Tonight' says when and goes last. The present continuous can describe a plan for the near future.",
    more: "UK English prefers 'film' to 'movie'. 'Are watching' is 'are' plus an -ing verb. With a time word such as 'tonight', it describes a planned event.",
    tip: "Use the present continuous with a time word to talk about plans: 'We are leaving at six.'",
  },
  'I bought a new jumper yesterday': {
    why: "'I' is the subject, 'bought' is the past tense of 'buy', and 'a new jumper' is the object. The adjective 'new' sits between 'a' and the noun. 'Yesterday' says when and ends the sentence.",
    more: "In a noun phrase the order is: a word like 'a', then the describing word, then the noun. So it is 'a new jumper', never 'a jumper new'. A jumper is a knitted top in British English; Americans say sweater.",
    tip: "Put adjectives before the noun they describe. With several, the usual order is opinion, size, age, colour: 'a lovely big old red jumper'.",
  },
  "The train leaves at nine o'clock": {
    why: "'The train' is the subject and 'leaves' is the verb in the present simple, which we use for timetables. It ends in -s because the train is one thing. 'At nine o'clock' says when.",
    more: "The present simple describes fixed events, such as timetables, even in the future: 'The film starts at eight.' 'O'clock' is short for 'of the clock' and is used only for exact hours.",
    tip: "Use the present simple for timetables and schedules: 'The bus leaves at ten.'",
  },
  'Our teacher gave us some homework': {
    why: "'Our teacher' is the subject, 'gave' is the past tense of 'give', and 'us' tells who received something. 'Some homework' is the thing given. The person usually comes before the thing.",
    more: "'Homework' is uncountable, so it has no plural and takes 'some', not 'a' or 'many'. Other uncountable nouns are advice, news and information.",
    tip: "Do not write 'homeworks' or 'a homework'. Say 'some homework' or 'a piece of homework'.",
  },
  'She has a small garden behind the house': {
    why: "'She' is the subject, 'has' is the verb and 'a small garden' is the object. 'Behind the house' says where the garden is, so it follows the noun it tells us about. 'Small' sits before 'garden'.",
    more: "A place phrase can follow a noun to describe it: 'a garden behind the house'. Single adjectives such as 'small' come before the noun. 'She has a garden behind the small house' is also correct English, with a different meaning, and this game accepts it too.",
    tip: "To enrich a noun, add one adjective in front and one place phrase behind: 'a small garden behind the house'.",
  },
  'He speaks three languages very well': {
    why: "'He' is the subject and 'speaks' is the verb, with -s because 'he' is third person singular. 'Three languages' is the object. 'Very well' says how he speaks, and it comes after the object.",
    more: "'Very well' is an adverb phrase: 'very' makes the adverb 'well' stronger. An adverb of manner usually follows the verb and its object.",
    tip: "Do not put 'very well' between the verb and the object. Say 'speaks three languages very well', not 'speaks very well three languages'.",
  },
  'The children are playing in the garden': {
    why: "'The children' is the subject and 'are playing' is the verb group. 'Are' goes with the plural 'children'. 'In the garden' says where and comes last.",
    more: "'Children' is an irregular plural: the plural of 'child' is 'children', not 'childs'. Use 'are' with plural subjects and 'is' with singular ones. 'The children in the garden are playing' is also correct English, and this game accepts it too.",
    tip: 'Match the helping verb to the subject: the child is playing, the children are playing.',
  },
  'I usually have tea in the afternoon': {
    why: "'I' is the subject, 'usually' is an adverb of frequency, 'have' is the verb and 'tea' is the object. Adverbs of frequency usually go before the main verb. 'In the afternoon' says when.",
    more: "Other adverbs of frequency are always, often, sometimes and never. They usually go before the main verb but after the verb 'be': 'She is always late.' 'I have tea in the afternoon usually' is also correct English, and this game accepts it too.",
    tip: "In a plain statement, put 'usually', 'often' and 'never' before the main verb. 'I have usually tea' is wrong.",
  },
  'My phone is on the kitchen table': {
    why: "'My phone' is the subject and 'is' is the verb 'to be'. 'On the kitchen table' says where the phone is. The preposition 'on' shows that it is resting on the top surface.",
    more: "'Kitchen table' puts one noun before another, and the first describes the second. 'On' means touching a surface; 'in' would suggest the phone was inside the table. 'My kitchen phone is on the table' is also correct English, and this game accepts it too.",
    tip: "Use 'on' for surfaces (on the table), 'in' for enclosed spaces (in the box) and 'at' for points (at the door).",
  },
  'We visited our grandparents last summer': {
    why: "'We' is the subject, 'visited' is the past tense of 'visit', and 'our grandparents' is the object. 'Last summer' places the action in the past and comes at the end.",
    more: "Phrases such as 'last summer', 'yesterday' and 'two years ago' show that something is over. They normally go at the end of the sentence, though they can also begin it.",
    tip: 'When you use a time phrase for the past, check that the verb is in the past tense: visited, not visit.',
  },
  'The shop opens at eight every day': {
    why: "'The shop' is the subject and 'opens' is the verb, with -s because the shop is one thing. 'At eight' says the exact time and 'every day' says how often. Both come after the verb.",
    more: "The two time details can swap places: 'The shop opens every day at eight' is also correct English, and this game accepts it too.",
    tip: 'Add -s to the verb for he, she, it and singular nouns: the shop opens, but the shops open.',
  },
  'She is reading an interesting book': {
    why: "'She' is the subject and 'is reading' is the verb group for an action in progress. 'An interesting book' is the object. We use 'an' because 'interesting' begins with a vowel sound.",
    more: "Choose 'a' or 'an' by the sound that follows, not the spelling. It is 'an interesting book' but 'a useful book', because 'useful' begins with a 'y' sound.",
    tip: "Say the phrase aloud. If the next word begins with a vowel sound, use 'an'. 'An hour' also takes 'an' because the 'h' is silent.",
  },
  'I wanted to go out but it was raining': {
    why: "'I wanted to go out' and 'it was raining' are two full clauses, and each has its own subject and verb. 'But' joins them and shows contrast, so it goes between them.",
    more: "A compound sentence joins two main clauses with a coordinating conjunction: for, and, nor, but, or, yet or so. Each clause has its own subject and verb. 'I wanted to go but it was raining out' is also correct English, and this game accepts it too.",
    tip: "Written down, this sentence has a comma before 'but': 'I wanted to go out, but it was raining.'",
  },
  'She studied hard so she passed the exam': {
    why: "'She studied hard' is the cause and 'she passed the exam' is the result. 'So' joins them, and the order matters: the cause comes first, then 'so', then the result.",
    more: "'So' as a conjunction means 'as a result'. Reversing the clauses would put the result before the cause. 'She studied so hard she passed the exam' is also correct English, with 'so hard' meaning 'very hard', and this game accepts it too.",
    tip: "Written down, put a comma before 'so': 'She studied hard, so she passed the exam.'",
  },
  'We can walk or we can take the bus': {
    why: "'Or' joins two clauses that offer a choice. Each has its own subject and verb: 'we can walk' and 'we can take the bus'. 'Or' goes between them.",
    more: "The two choices are equal, so they can change places: 'We can take the bus or we can walk' is also correct English, and this game accepts it too. The pattern is clause, 'or', clause.",
    tip: "Use 'or' to offer choices. In writing, a comma before 'or' is optional between short clauses.",
  },
  'He made dinner and she washed the dishes': {
    why: "'And' joins two equal clauses, 'He made dinner' and 'she washed the dishes'. Each keeps the order subject, verb, object. The conjunction sits between the clauses.",
    more: "The two ideas have equal weight, so the actions can swap: 'He washed the dishes and she made dinner' is also correct English, and this game accepts it too.",
    tip: "A comma before 'and' is optional between short clauses, but it helps in longer ones.",
  },
  'The film was long but it was exciting': {
    why: "'But' joins two contrasting clauses, 'The film was long' and 'it was exciting'. Each has a subject and the verb 'was'. 'But' goes between them.",
    more: "'The film was exciting but it was long' is also correct English, and this game accepts it too. Use a comma before 'but' when it joins two full clauses.",
    tip: "Contrast is useful in reviews. 'It was long, but it was exciting' gives a balanced opinion.",
  },
  'I was tired so I went to bed early': {
    why: "'I was tired' is the cause and 'I went to bed early' is the result. 'So' joins them. 'Early' is an adverb that says when, and it goes at the end.",
    more: "'So' links a cause to its result, so the cause comes first. Compare 'because', which introduces the reason: 'I went to bed early because I was tired.' 'I was so tired I went to bed early' is also correct English, and this game accepts it too.",
    tip: "Use 'so' to move from a reason to its result, and put a comma before it when you write.",
  },
  'You can have tea or you can have coffee': {
    why: "'Or' joins two clauses that offer a choice. Each has its own subject and verb: 'You can have tea' and 'you can have coffee'. 'Or' goes between them.",
    more: "The two choices are equal, so they can change places: 'You can have coffee or you can have tea' is also correct English, and this game accepts it too. In everyday speech we shorten it to 'You can have tea or coffee.'",
    tip: 'Repeating the subject and verb makes a compound sentence. Leaving them out makes a simple one.',
  },
  'She plays the piano and he sings': {
    why: "'And' joins two complete clauses. 'She plays the piano' has a subject, a verb and an object, and 'he sings' has a subject and a verb. 'And' goes between them.",
    more: "Both clauses could stand alone as sentences, which is why this sentence is compound. The actions can swap: 'She sings and he plays the piano' is also correct English, and this game accepts it too.",
    tip: "A clause needs a subject and a verb. If both halves have them, 'and' makes a compound sentence.",
  },
  'It was cold so we lit the fire': {
    why: "'It was cold' is the cause and 'we lit the fire' is the result, joined by 'so'. 'Lit' is the past tense of 'light', and it matches 'was': both clauses are in the past.",
    more: "'Light' has two past forms, 'lit' and 'lighted', and 'lit' is the usual one for a fire or a candle. Here both clauses are in the past. 'It was so cold we lit the fire' is also correct English, and this game accepts it too.",
    tip: "Written down, put a comma before 'so': 'It was cold, so we lit the fire.'",
  },
  'He tried his best but he did not win': {
    why: "'But' joins two contrasting clauses, 'He tried his best' and 'he did not win'. The second is an unexpected result. Each clause has its own subject and verb.",
    more: "In the negative clause, 'did' is the helping verb and 'not' follows it, with the plain verb after: 'did not win', never 'did not won'. 'He did not win but he tried his best' is also correct English, and this game accepts it too.",
    tip: "After 'did not', use the plain form of the verb: did not win, did not go, did not see.",
  },
  'We finished early so we went for a walk': {
    why: "'We finished early' is the cause and 'we went for a walk' is the result, joined by 'so'. 'Early' is an adverb that says when. 'Went for a walk' is the natural UK English phrase.",
    more: "'Went' is the past tense of 'go'. In UK English we usually 'go for a walk'; 'take a walk' sounds more American. 'We finished so early we went for a walk' is also correct English, and this game accepts it too.",
    tip: 'Learn common verb phrases whole: go for a walk, have lunch, take a photo, make a mistake.',
  },
  'I like cricket and my sister likes rugby': {
    why: "'And' joins two clauses about different people. 'I like cricket' and 'my sister likes rugby' each have a subject, a verb and an object. The verb ends in -s for 'my sister', but not for 'I'.",
    more: "The verb form changes with the subject: I like, she likes. The two sports can change places: 'I like rugby and my sister likes cricket' is also correct English, and this game accepts it too.",
    tip: 'Check verb agreement in each clause separately. Every clause has its own subject, so each verb must match its own subject.',
  },
  'The sun came out so we went to the beach': {
    why: "'The sun came out' is the cause and 'we went to the beach' is the result, joined by 'so'. 'Came out' is a phrasal verb meaning appeared. 'To the beach' shows where they went.",
    more: "A phrasal verb is a verb plus a small word that changes its meaning: came out, set off, give up. Here 'came out' means that the sun appeared. 'To' shows the direction of travel.",
    tip: "Treat a phrasal verb as one unit of meaning. Learn 'come out' together, not just 'come' and 'out'.",
  },
  'She spoke quietly but everyone could hear her': {
    why: "'But' joins two contrasting clauses. 'She spoke quietly' has an adverb of manner after the verb, and 'everyone could hear her' is the surprising result. 'Her' is the object.",
    more: "'Quietly' is an adverb of manner, so it usually follows the verb. 'She quietly spoke but everyone could hear her' is also correct English, and this game accepts it too. 'Could' is followed by the plain verb 'hear'.",
    tip: "After 'could', 'can' and 'will', use the plain verb with no -s, -ed or -ing.",
  },
  'You should revise now or you will forget': {
    why: "'Or' here warns of a result: if you do not revise now, you will forget. The clauses are 'You should revise now' and 'you will forget', and 'or' goes between them.",
    more: "'Or' can mean 'otherwise': the first clause says what to do, the second what happens if you do not. Reversed, 'You will forget or you should revise now' sounds odd. 'You should now revise or you will forget' is also correct English, and this game accepts it too.",
    tip: "A warning with 'or' is useful in advice and persuasive writing: 'Book now or you will miss out.'",
  },
  'Because it was late, we went home': {
    why: "'Because it was late' is a subordinate clause: it gives the reason but cannot stand alone. It opens the sentence, the comma marks where it ends, and the main clause 'we went home' follows.",
    more: "A complex sentence has a main clause and at least one subordinate clause. When the subordinate clause comes first, a comma follows it. Put the main clause first and no comma is needed: 'We went home because it was late.'",
    tip: 'To vary your sentence openings, start with the reason or time clause, then use a comma before the main clause.',
  },
  'When the bell rang the pupils left': {
    why: "'When the bell rang' is a subordinate clause of time. It cannot stand alone, so it needs the main clause 'the pupils left'. The clause beginning with 'when' comes first here.",
    more: "When, while, after and before begin time clauses. In writing, put a comma after the clause: 'When the bell rang, the pupils left.' 'When the pupils left the bell rang' is also correct English, with a different meaning, and this game accepts it too.",
    tip: "Look for a time word such as 'when', 'while', 'after' or 'before' at the start of a sentence. It marks a subordinate clause that needs a comma after it.",
  },
  'Although she was tired, she kept working': {
    why: "'Although she was tired' is a subordinate clause that sets up a contrast. It opens the sentence, the comma marks its end, and 'she kept working' is the main clause, the surprising result.",
    more: "'Although' shows an unexpected result, because being tired usually makes people stop. Do not add 'but' as well: 'Although she was tired, but she kept working' is wrong.",
    tip: "Do not join two clauses with two conjunctions. 'Although... but' is a common mistake.",
  },
  'If it rains tomorrow we will stay inside': {
    why: "This is the first conditional. 'If it rains tomorrow' uses the present simple for a possible future event, and 'we will stay inside' gives the result with 'will' plus the plain verb.",
    more: "First conditional: 'if' plus the present simple, then 'will' plus a verb. We do not say 'if it will rain'. 'Tomorrow' can move: 'If it rains we will stay inside tomorrow' is also correct English, and this game accepts it too.",
    tip: "In writing, put a comma after the 'if' clause: 'If it rains tomorrow, we will stay inside.'",
  },
  'The book that I read was fascinating': {
    why: "'That I read' is a relative clause: it tells us which book. It comes straight after the noun 'book', and the main verb 'was' follows the whole phrase.",
    more: "The subject of the main clause is the whole phrase 'The book that I read'. A relative clause can begin with that, which or who. Before 'was', the whole phrase acts as one noun.",
    tip: "You can often leave out 'that' when it is the object of its own clause: 'The book I read was fascinating.'",
  },
  'While he was cooking she set the table': {
    why: "'While he was cooking' is a subordinate clause of time that shows two actions at once. 'She set the table' is the main clause. 'While' begins the sentence.",
    more: "The past continuous ('was cooking') often shows the longer action in progress, and the past simple ('set') the action that happened during it. 'While she set the table he was cooking' is also correct English, and this game accepts it too.",
    tip: "A comma after the 'while' clause helps the reader: 'While he was cooking, she set the table.'",
  },
  'She smiled because she had won the prize': {
    why: "'She smiled' is the main clause and 'because she had won the prize' gives the reason. When the subordinate clause comes second, no comma is needed. 'Had won' shows that the winning came first.",
    more: "'Had won' is the past perfect. It shows that one past action happened before another: first she won, then she smiled. The same tiles make other correct sentences, such as 'She had smiled because she won the prize', and this game accepts them too.",
    tip: 'Use the past perfect to show which of two past events came first.',
  },
  'After we had eaten, we watched television': {
    why: "'After we had eaten' is a subordinate clause of time, and it comes first, followed by a comma. 'We watched television' is the main clause. The past perfect 'had eaten' shows that eating came first.",
    more: "'Had eaten' is the past perfect: it shows which of two past actions happened earlier. With 'after', the simple past is also fine: 'After we ate, we watched television.'",
    tip: 'When a time clause opens a sentence, put a comma after it so the reader knows where the main clause begins.',
  },
  'The man who lives next door is a doctor': {
    why: "'Who lives next door' is a relative clause that tells us which man. It sits straight after 'The man', and the main verb 'is' comes after it. 'Who' is used for people.",
    more: "The relative clause identifies the man. The same tiles also build 'The man who is a doctor lives next door', which is correct English too, and this game accepts it.",
    tip: "Use 'who' for people, 'which' for things and 'that' for either. A relative clause comes right after the noun it describes.",
  },
  'Before you leave please close the window': {
    why: "'Before you leave' is a subordinate clause of time. It comes first, then the polite command 'please close the window'. The command has no stated subject, because 'you' is understood.",
    more: "In a command the subject 'you' is understood. 'Please' can come before the verb or at the end: 'Before you leave close the window please' is also correct English, and this game accepts it too.",
    tip: "Written down, put a comma after the opening clause: 'Before you leave, please close the window.'",
  },
  'Even though it was expensive, they bought it': {
    why: "'Even though it was expensive' is a subordinate clause that shows a strong contrast. It comes first, the comma follows it, and 'they bought it' is the main clause.",
    more: "'Even though' is stronger than 'although'. It stresses a fact that makes the main clause surprising. Compare 'even if', which talks about a possibility rather than a fact.",
    tip: "Use 'even though' to stress a surprising contrast. Put a comma after the clause when it comes first.",
  },
  'Since we moved here we have made new friends': {
    why: "'Since we moved here' is a subordinate clause that gives a starting point in time. 'We have made new friends' is the main clause, in the present perfect. The past simple follows 'since' and the present perfect is in the main clause.",
    more: "'Since' means 'from that time until now'. The present perfect ('have made') links the past to the present. 'Here' can move: 'Since we moved we have made new friends here' is also correct English, and this game accepts it too.",
    tip: "After 'since' and a past event, the main clause usually uses the present perfect: 'we have made', not 'we make'.",
  },
  'Unless you hurry, you will miss the train': {
    why: "'Unless you hurry' means 'if you do not hurry'. This subordinate clause comes first, followed by a comma, and the main clause 'you will miss the train' gives the result.",
    more: "'Unless' already carries a negative meaning, so we do not add 'not': 'Unless you hurry', not 'Unless you do not hurry'. It is used in the first conditional.",
    tip: "Swap 'Unless you hurry' for 'If you do not hurry'. If the meaning is the same, 'unless' fits.",
  },
  'The café where we met has now closed': {
    why: "'Where we met' is a relative clause that tells us which café. It follows the noun 'café', and the main verb 'has closed' comes after it, with 'now' between 'has' and 'closed'.",
    more: "'Where' is used for places. 'Has closed' is the present perfect: the closing affects the present. 'Now' can move: 'The café where we met has closed now' is also correct English, and this game accepts it too.",
    tip: "Use 'where' to add detail about a place without starting a new sentence: 'the café where we met'.",
  },
  'As soon as the film ended we left': {
    why: "'As soon as the film ended' is a subordinate clause of time meaning 'immediately after'. 'We left' is the main clause. 'As soon as' is three words that act as one conjunction.",
    more: "'As soon as' links two actions that follow each other closely. In writing, put a comma after the opening clause: 'As soon as the film ended, we left.' 'As soon as we left the film ended' is also correct English, with a different meaning, and this game accepts it too.",
    tip: "Use 'as soon as' to show that one thing happened straight after another, in stories and in accounts of events.",
  },
  'Whenever I visit London I see the museums': {
    why: "'Whenever I visit London' is a subordinate clause meaning 'every time that I visit London'. 'I see the museums' is the main clause. Both verbs are in the present simple, because this happens regularly.",
    more: "'Whenever' means 'every time that'. In writing, put a comma after the opening clause. The tiles also make 'Whenever I see London I visit the museums', which is correct English too, and this game accepts it.",
    tip: "Use 'whenever' with the present simple for habits: 'Whenever it rains, I stay in.'",
  },
  "Napoleon took no interest in Snowball's committees": {
    why: "A simple sentence has one main clause. 'Napoleon' is the subject and 'took' the verb, and 'no interest in Snowball's committees' completes it. 'Snowball's' has an apostrophe because the committees belong to Snowball, so it sits right before them.",
    more: 'Orwell sets the two pigs against each other in one plain sentence: one organises committees, the other ignores them. Their rivalry splits the farm until Napoleon drives Snowball out.',
    tip: "A possessive with an apostrophe sits directly before the noun it owns: 'Snowball's committees'.",
  },
  "The pigs were in ecstasies over Napoleon's cunning": {
    why: "'The pigs' is the subject and 'were' the verb. 'In ecstasies' means wildly delighted, and 'over Napoleon's cunning' says what delighted them. The possessive 'Napoleon's' comes before the noun it owns, 'cunning'.",
    more: "Orwell's irony: the pigs admire Napoleon's 'cunning' over the timber deal, but he is about to be cheated himself. 'Cunning' here is a noun, meaning cleverness used to trick others.",
    tip: "Words such as 'cunning' can be adjectives or nouns. After a possessive like 'Napoleon's', it must be a noun.",
  },
  'Wistful glances were sent in the direction of Foxwood': {
    why: "'Wistful glances' is the subject, and 'were sent' is a passive verb: the glances are sent, but we are not told by whom. 'In the direction of Foxwood' says where, so it ends the sentence.",
    more: "'Wistful' means longing sadly. The passive leaves out who sent the glances, which makes the animals' hope sound shared and quiet.",
    tip: "A passive verb is 'be' plus a past participle: 'were sent', 'was built'. Use it when the doer does not matter or is unknown.",
  },
  'All the habits of Man are evil': {
    why: "'All the habits of Man' is the subject, a noun phrase built around 'habits'. 'Are' is the verb and 'evil' completes it. 'Man' has a capital because Old Major uses it as a name for all humans.",
    more: "This is one of Old Major's rules. Writing 'Man' with a capital turns humans into a single enemy, which makes the animals' cause sound simple and urgent.",
    tip: "In a noun phrase, words like 'all the' come before the main noun, and an 'of' phrase follows it: 'all the habits of Man'.",
  },
  'Comrade Snowball will lead the way': {
    why: "'Comrade Snowball' is the subject: 'Comrade' is a title used like 'Mr'. 'Will lead' is the verb, in the future, and 'the way' is its object.",
    more: "'Comrade' was a title revolutionaries used to mean an equal. Orwell's animals borrow it, which links their rebellion to the Russian Revolution.",
    tip: "A title such as 'Comrade', 'Mr' or 'Dr' always sits straight before the name.",
  },
  'Mr. Hyde shrank back with a hissing intake of the breath': {
    why: "'Mr. Hyde' is the subject and 'shrank back' the verb, meaning he drew away. 'With a hissing intake of the breath' says how, so it follows the verb.",
    more: "Stevenson makes Hyde sound like an animal: he 'shrank back' and drew a 'hissing' breath, like a snake. The edition prints 'Mr.' with a full stop, as older texts did.",
    tip: 'When you analyse a character, look at verbs of movement and sound. Here they make Hyde seem less than human.',
  },
  'The quarrel with Lanyon was incurable': {
    why: "'The quarrel with Lanyon' is the subject: the noun 'quarrel', then a phrase saying who it was with. 'Was' is the verb and 'incurable' completes it.",
    more: "'Incurable' usually describes an illness. Using it for a quarrel suggests that the friendship between Jekyll and Lanyon has died and cannot be healed.",
    tip: 'Notice when a writer borrows a word from another field, such as illness for friendship. Naming the effect earns marks.',
  },
  'It was the hand of Edward Hyde': {
    why: "'It' is the subject, 'was' the verb and 'the hand of Edward Hyde' completes the sentence. The noun 'hand' comes first, then 'of' and the owner's name.",
    more: "Jekyll wakes to find that his own hand has become Hyde's. Stevenson's short, plain sentence makes the moment of horror sharper.",
    tip: 'A short sentence after longer ones can deliver a shock. Try it at a turning point in your own stories.',
  },
  'Mr. Abel White was an obstinate man': {
    why: "'Mr. Abel White' is the subject: title, first name, surname. 'Was' is the verb and 'an obstinate man' completes it. 'An' comes before 'obstinate' because it starts with a vowel sound.",
    more: "'Obstinate' means stubborn. In Small's story, Abel White refuses to believe that the danger around his estate is real.",
    tip: "Use 'an' before a vowel sound: 'an obstinate man', but 'a stubborn man'.",
  },
  'Major Sholto was the hardest hit': {
    why: "'Major Sholto' is the subject, 'was' the verb, and 'the hardest hit' completes it. 'Hardest' is the superlative of 'hard', and 'hit' here means affected.",
    more: "This comes from Small's account of the officers' card games: Major Sholto lost the most. 'The hardest hit' is an idiom for whoever suffered most.",
    tip: "Superlatives such as 'hardest' and 'best' usually follow 'the'.",
  },
  'The sixth star fell at Wimbledon': {
    why: "'The sixth star' is the subject, 'fell' the verb and 'at Wimbledon' says where. The number word 'sixth' sits between 'the' and 'star'.",
    more: "Wells calls each Martian cylinder a falling star. Counting them, 'the sixth', makes the invasion feel relentless.",
    tip: 'Ordinal numbers (first, second, sixth) behave like adjectives: they come before the noun.',
  },
  'We crossed Richmond Bridge about half past eight': {
    why: "'We' is the subject and 'crossed' the verb, with 'Richmond Bridge' as its object. 'About half past eight' says when, so it ends the sentence.",
    more: "'About' here means roughly. A time phrase usually comes after the verb and its object in English.",
    tip: "Put details in the order what, where, when: 'We crossed the bridge at eight'.",
  },
  'All the rest of London was black': {
    why: "'All the rest of London' is the subject, 'was' the verb and 'black' completes it. 'All the rest of' is a fixed phrase meaning everything else.",
    more: 'The narrator looks out over London at night: only a few lights show, and all the rest is dark. The short sentence suits the empty city.',
    tip: "Keep fixed phrases together: 'all the rest of', 'a great deal of', 'in front of'.",
  },
  'The Ghost of Christmas Present rose': {
    why: "'The Ghost of Christmas Present' is the whole subject, the name of the second spirit, so it stays together. 'Rose', the past tense of 'rise', is the verb and ends the sentence.",
    more: "Dickens's spirits have names like titles, with capitals for each main word. A long subject followed by one short verb gives the spirit's rising weight.",
    tip: 'A sentence can be very short after a long subject. Check that every sentence still has a verb.',
  },
  'Any Cratchit would have blushed to hint at such a thing': {
    why: "'Any Cratchit' is the subject: any member of the Cratchit family. 'Would have blushed' is the verb, and 'to hint at such a thing' explains what they would have been ashamed to do.",
    more: 'The Cratchits are too proud of their pudding to suggest it is small for a large family. Dickens finds warm comedy in their loyalty.',
    tip: "'Would have' plus a past participle describes something that did not happen: 'would have blushed'.",
  },
  "A positive light appeared to issue from Fezziwig's calves": {
    why: "'A positive light' is the subject and 'appeared to issue' the verb, meaning seemed to shine out. 'From Fezziwig's calves' says where from: his legs as he dances.",
    more: "Dickens exaggerates for comedy: old Fezziwig dances so well that light seems to come from his legs. 'Positive' here means real or clear.",
    tip: "Exaggeration, called hyperbole, can make a character lovable. Dickens uses it to show Fezziwig's joy.",
  },
  "It's twice the size of Tiny Tim": {
    why: "'It's' is short for 'it is', so it opens the sentence as subject and verb together. 'Twice the size of Tiny Tim' completes it, with 'twice' before 'the size'.",
    more: 'Scrooge is talking about the prize turkey he sends to the Cratchits. Measuring it against Tiny Tim shows how much he now cares about the boy.',
    tip: "'Twice', 'half' and 'three times' come before 'the size of' or 'as big as': 'twice the size of'.",
  },
  'Mr. Kirwin regarded me with a troubled countenance': {
    why: "'Mr. Kirwin' is the subject, 'regarded' the verb, meaning looked at, and 'me' the object. 'With a troubled countenance' says how he looked, so it comes last.",
    more: "'Countenance' means face or expression. Victor has just cried out in terror, and Mr Kirwin's troubled look shows that he takes it as a sign of guilt.",
    tip: "A manner phrase such as 'with a troubled countenance' usually follows the verb and its object.",
  },
  'I saw Mr. Pumblechook balance his knife': {
    why: "'I' is the subject and 'saw' the verb. What Pip saw follows: 'Mr. Pumblechook balance his knife', a person and then an action, with no 'to' after 'saw'.",
    more: "After verbs of seeing and hearing, the action that follows takes no 'to': we say 'I saw the bus leave', never 'I saw the bus to leave'. Pip watches Pumblechook nervously at Christmas dinner.",
    tip: "After 'see', 'hear' and 'watch', use the plain verb or the -ing form: 'we heard the phone ring', 'we heard the phone ringing'.",
  },
  'I considered Mr. Pumblechook wretched company': {
    why: "'I' is the subject, 'considered' the verb and 'Mr. Pumblechook' the object. 'Wretched company' follows the object to say what Pip thought of him.",
    more: "After 'consider', a description can follow the object directly, with no 'to be': 'we considered the trip a success'. Pip's dislike of the pompous Pumblechook is comic.",
    tip: "Verbs such as 'consider', 'find' and 'call' can take an object and then a description: 'I found the film boring'.",
  },
  'In these discussions, Joe bore no part': {
    why: "'In these discussions' is a fronted adverbial: a phrase moved to the front to set the scene. The comma marks its end, and the main clause 'Joe bore no part' follows.",
    more: "'Bore no part' means took no part. Dickens shows Joe staying out of the arguments about Pip's future, which says a lot about his gentle nature.",
    tip: "When a phrase like 'In these discussions' starts a sentence, put a comma after it before the main clause.",
  },
  'Instead of answering, Estella burst out laughing': {
    why: "'Instead of answering' is a fronted phrase saying what Estella did not do. The comma marks its end, and the main clause 'Estella burst out laughing' says what she did.",
    more: "'Burst out laughing' is a fixed phrase, so its words stay together. Pip has asked whether Miss Havisham's jealous relatives can harm him, and Estella laughs at how their plotting fails, which puzzles him.",
    tip: "'Instead of' is followed by an -ing form: 'instead of answering', not 'instead of answer'.",
  },
  'A thousand Miss Havishams haunted me': {
    why: "'A thousand Miss Havishams' is the subject, 'haunted' the verb and 'me' the object. The name becomes plural, 'Havishams', meaning many images of her.",
    more: 'Pip is so troubled that Miss Havisham seems to be everywhere at once. Making a name plural is a bold, memorable choice.',
    tip: 'Writers sometimes bend a rule on purpose, as Dickens does with a plural name. Explain the effect when you spot it.',
  },
  'All this time, Estella knitted on': {
    why: "'All this time' is a fronted adverbial saying how long, so it opens the sentence and a comma follows. The main clause 'Estella knitted on' ends with 'on', which means she kept going.",
    more: "Estella keeps knitting while Pip and Miss Havisham talk, which makes her seem calm and cold. 'On' after a verb often means continuing.",
    tip: "After a fronted time phrase such as 'All this time', use a comma before the main clause.",
  },
  'Such was my first day at Lowood': {
    why: "This sentence is inverted: 'Such', meaning like this, comes first, then the verb 'was', then the subject 'my first day at Lowood'. It sums up the day just described.",
    more: "In the usual order, the subject 'my first day at Lowood' would come before 'was'. Putting 'Such' first turns the sentence into a summing-up, which suits the end of a chapter.",
    tip: 'Inversion, putting the verb before its subject, can give a sentence weight. Use it sparingly for effect.',
  },
  'I was brought face to face with Necessity': {
    why: "'I' is the subject and 'was brought' a passive verb. 'Face to face' is a fixed phrase, and 'with Necessity' says what Jane faces, so it comes last.",
    more: "Brontë gives 'Necessity' a capital, as if it were a person Jane has to meet. Penniless and alone, she must find food and shelter.",
    tip: "Capitalising an idea such as 'Necessity' turns it into a character. It is a form of personification.",
  },
  'Diana offered to teach me German': {
    why: "'Diana' is the subject and 'offered' the verb. 'To teach me German' says what she offered: the verb 'teach', then the person taught, then the subject taught.",
    more: "After 'teach', the person usually comes before the thing taught: 'teach me German'. Diana's offer shows her kindness to Jane.",
    tip: "Some verbs take two objects, a person and then a thing: 'teach me German', 'give her a book'.",
  },
  'Mr. Wood seemed at a loss': {
    why: "'Mr. Wood' is the subject, 'seemed' the verb and 'at a loss' completes it. 'At a loss' is a fixed phrase meaning not knowing what to do or say.",
    more: "Mr Wood is the clergyman at Jane's wedding. He is at a loss because the ceremony has just been stopped by a shocking interruption.",
    tip: "Learn fixed phrases as whole units: 'at a loss', 'at once', 'in vain'.",
  },
  'Sir William had been delighted with him': {
    why: "'Sir William' is the subject, a title and a name. 'Had been delighted' is the verb, in the past perfect, and 'with him' says who pleased him.",
    more: "Sir William Lucas is delighted with Mr Bingley after meeting him. Austen often reports a character's opinion in a single short sentence.",
    tip: "Keep a preposition next to the noun or pronoun it belongs to: 'delighted with him'.",
  },
  'In understanding Darcy was the superior': {
    why: "This sentence is inverted: 'In understanding', meaning in intelligence, comes first, then the subject 'Darcy', the verb 'was' and 'the superior'. It compares Darcy with his friend Bingley.",
    more: "Austen compares the two friends: Bingley is more likeable, but Darcy is cleverer. Putting 'In understanding' first stresses the area being compared.",
    tip: "Starting with the area of comparison, as in 'In understanding', is a neat way to compare two characters.",
  },
  'Mr. Collins was eloquent in her praise': {
    why: "'Mr. Collins' is the subject and 'was' the verb, and 'eloquent in her praise' completes it. 'In her praise' says what he spoke so well about: praising Lady Catherine.",
    more: "Austen's irony: Collins is eloquent only when flattering his patron, Lady Catherine de Bourgh, which makes him seem ridiculous.",
    tip: "'Eloquent' means fluent and persuasive. It is a useful word for analysing a speech.",
  },
  'It gives me pain to speak ill of a Darcy': {
    why: "'It' stands for 'to speak ill of a Darcy'. 'Gives' is the verb, 'me' and 'pain' follow it, and the 'to' phrase comes last to say what causes the pain.",
    more: "Wickham pretends to be reluctant to criticise Darcy while doing exactly that. 'A Darcy' means anyone from that family.",
    tip: "'It' can stand in for an idea that comes later: 'It is hard to say goodbye.' The real subject follows.",
  },
  'Sir William did not say much': {
    why: "'Sir William' is the subject and 'did not say' the verb in the negative: 'did', then 'not', then the plain verb. 'Much' completes it.",
    more: "In a negative past sentence, 'did not' carries the tense, so the main verb stays plain: 'did not say', never 'did not said'.",
    tip: "After 'did not', use the plain verb: did not say, did not go.",
  },
  "Mr. Darcy had been at her sister's wedding": {
    why: "'Mr. Darcy' is the subject and 'had been' the verb, in the past perfect. 'At her sister's wedding' says where, with the possessive 'sister's' before 'wedding'.",
    more: 'Elizabeth learns this by accident from Lydia, and it puzzles her: why would Darcy be there? The past perfect shows it happened before she found out.',
    tip: "Use the past perfect ('had been') for something that happened before another past event.",
  },
  'Mrs. Bennet was quite in the fidgets': {
    why: "'Mrs. Bennet' is the subject, 'was' the verb, and 'quite in the fidgets' completes it. 'In the fidgets' is an old phrase meaning restless and nervous, and 'quite' strengthens it.",
    more: "Mrs Bennet is excited at the news that Bingley is coming back. Austen's choice of 'fidgets' pokes fun at her nerves.",
    tip: "Old phrases such as 'in the fidgets' keep their words in a fixed order. Look for the noun at the end.",
  },
  'There had been no bells in Lantern Yard': {
    why: "'There had been' introduces something that did or did not exist, here 'no bells'. 'In Lantern Yard' says where, so it comes last.",
    more: 'Dolly asks whether Silas heard the church bells. Eliot explains that bells mean nothing to him: Lantern Yard, the chapel community he left behind, had none.',
    tip: "'There is', 'there was' and 'there had been' introduce something new. The thing comes after the verb.",
  },
  'Mr. Pocket uttered a dismal groan': {
    why: "'Mr. Pocket' is the subject: a title, then a surname. 'Uttered' is the verb, meaning gave out a sound, and 'a dismal groan' is the object. The adjective 'dismal' sits between 'a' and the noun 'groan'.",
    more: "Mrs Pocket has just taken her cook's side in a household quarrel, and her husband can only groan. 'Dismal' means gloomy, and Dickens makes the poor man's despair comic.",
    tip: "Put a describing word inside the noun phrase, between 'a' and the noun: 'a dismal groan', 'a sudden shout'.",
  },
  'A change passed over Mr. Trabb': {
    why: "'A change' is the subject and 'passed' is the verb. 'Over Mr. Trabb' says where the change happened, so it ends the sentence. The name keeps its capitals wherever it sits.",
    more: "Pip has just told the tailor, Mr Trabb, that he has come into a fortune. Trabb's manner changes at once from careless to eager, and Dickens mocks how money changes the way people treat Pip.",
    tip: "A short sentence can mark a turning point. 'A change passed over' shows a character's attitude shifting in an instant.",
  },
  'Miss Sarah Pocket came to the gate': {
    why: "'Miss Sarah Pocket' is the subject: title, first name, surname, always in that order. 'Came' is the verb, and 'to the gate' says where she came, so it follows the verb.",
    more: "Pip returns to Miss Havisham's house hoping to see Estella, but Sarah Pocket, one of Miss Havisham's jealous relatives, answers the gate instead. Dickens follows the sentence with just two words: 'No Estella.'",
    tip: 'With a full name and title the order never changes: title, first name, surname.',
  },
  "Miss Skiffins's brother conducted the negotiation": {
    why: "'Miss Skiffins's brother' is the subject: the possessive 'Skiffins's' sits before 'brother', the person it belongs to. 'Conducted' is the verb, meaning managed, and 'the negotiation' is the object.",
    more: "Pip secretly pays for his friend Herbert to join a merchant's business. Miss Skiffins's brother handles the deal, so Herbert never learns who helped him.",
    tip: "For a name ending in s, British style usually adds 's: 'Miss Skiffins's brother', 'James's book'. Some writers add only an apostrophe.",
  },
  'Mr. Rochester professed to be puzzled': {
    why: "'Mr. Rochester' is the subject and 'professed' is the verb, meaning claimed. 'To be puzzled' says what he claimed, so it follows the verb.",
    more: "Rochester has joked that he will take Jane to live on the moon, and Adèle keeps asking practical questions. He only pretends to be puzzled: 'professed' tells us the puzzlement is put on, as part of the game.",
    tip: "Verbs such as 'professed', 'claimed' and 'pretended' warn the reader that a feeling may not be real. They are useful when you analyse a character.",
  },
  'St. John passed the window reading a letter': {
    why: "'St. John' is the subject, a first name in two parts that stay together. 'Passed' is the verb and 'the window' its object. 'Reading a letter' says what he was doing as he passed, so it comes last.",
    more: "St John Rivers walks past the window with a letter that brings his family important news. An -ing phrase like 'reading a letter' adds a second action happening at the same moment.",
    tip: "Add an -ing phrase after the main clause to show two things happening at once: 'She ran for the bus, waving her ticket.'",
  },
  'Mrs. Bennet was profuse in her acknowledgments': {
    why: "'Mrs. Bennet' is the subject and 'was' is the verb. 'Profuse', meaning pouring out words, describes her, and 'in her acknowledgments' says what she poured out: her thanks.",
    more: "Mrs Bennet thanks the Bingleys over and over for looking after Jane, who is ill at their house. Austen's word 'profuse' hints that she is overdoing it, as usual.",
    tip: "'Acknowledgments' is spelt here with no e after the g. Both spellings are correct in British English, though 'acknowledgements' is more common.",
  },
  'Every Saturday, Grandpa Joe swims fifty lengths of the pool': {
    why: "'Every Saturday' is a fronted adverbial of time, so it opens the sentence and a comma follows it. 'Grandpa Joe' is the subject, 'swims' the verb, and 'fifty lengths of the pool' the object.",
    more: "The present simple 'swims' shows a habit, something that happens regularly. Time phrases such as 'every Saturday' often go with it.",
    tip: "Use the present simple for routines, with a time phrase to show how often: 'Every morning, she runs two miles.'",
  },
  'Mr Patel taught our class the rules of chess': {
    why: "'Mr Patel' is the subject and 'taught' the verb. Two objects follow: first who was taught, 'our class', then what, 'the rules of chess'.",
    more: "Verbs such as 'teach', 'give' and 'show' can take two objects, the person first and the thing second. British style writes 'Mr' with no full stop.",
    tip: "With two objects, put the person first: 'taught our class the rules', 'gave me a book'.",
  },
  'Without a word, Amira slipped out of the room': {
    why: "'Without a word' is a fronted phrase saying how, so it opens the sentence with a comma after it. 'Amira' is the subject and 'slipped out' the verb, and 'of the room' says what she left.",
    more: "'Slipped out' means left quietly without being noticed. Opening with 'Without a word' builds tension: the reader senses that something has happened before learning what Amira does.",
    tip: "A fronted phrase about manner, such as 'Without a word' or 'With a sigh', can set the mood before the action.",
  },
  'The Romans built straight roads across Britain': {
    why: "'The Romans' is the subject, 'built' the verb and 'straight roads' the object, with the adjective 'straight' before 'roads'. 'Across Britain' says where, so it comes last.",
    more: 'Roman roads ran as straight as the land allowed, linking forts and towns. Parts of some modern roads, such as the A5, still follow their routes.',
    tip: "Put an adjective before the noun it describes and a place phrase after the object: 'built straight roads across Britain'.",
  },
  'In 1666, a great fire destroyed much of London': {
    why: "'In 1666' is a fronted adverbial of time, so it opens the sentence with a comma after it. 'A great fire' is the subject, 'destroyed' the verb and 'much of London' the object.",
    more: 'The Great Fire of London began in a bakery in Pudding Lane in September 1666 and burned for several days. A date at the front sets the scene at once.',
    tip: 'In history writing, starting with the date is a clear, confident opening.',
  },
  'Sunlight takes about eight minutes to reach the Earth': {
    why: "'Sunlight' is the subject and 'takes' the verb. 'About eight minutes' says how long, and 'to reach the Earth' says what the time is for, so it comes last.",
    more: "Light from the Sun travels about 150 million kilometres to reach us, which takes a little over eight minutes. 'About' means roughly.",
    tip: "The pattern 'takes time to do something' is common in explanations: 'The kettle takes three minutes to boil.'",
  },
  "During the storm, Kemi's kitten hid under the stairs": {
    why: "'During the storm' is a fronted adverbial of time, followed by a comma. 'Kemi's kitten' is the subject, 'hid' the verb and 'under the stairs' says where.",
    more: "'During' is followed by a noun, 'the storm', not a clause. Compare 'while it was storming', which has a verb.",
    tip: "Use 'during' with a noun and 'while' with a clause: 'during the film', 'while the film was on'.",
  },
  'Our neighbour, Mrs Nowak, keeps bees in her garden': {
    why: "'Our neighbour' is the subject, and 'Mrs Nowak' renames her, so it sits between two commas. 'Keeps' is the verb, 'bees' the object, and 'in her garden' says where.",
    more: "A name that renames a noun is in apposition. Take it out, with its commas, and the sentence still works: 'Our neighbour keeps bees in her garden.' British style writes 'Mrs' with no full stop.",
    tip: 'When you add a name or description after a noun, put a comma on each side of it.',
  },
  'After lunch, the whole of Year 8 walked to the museum': {
    why: "'After lunch' is a fronted adverbial of time, followed by a comma. 'The whole of Year 8' is the subject, 'walked' the verb and 'to the museum' says where.",
    more: "'The whole of' is a fixed phrase meaning all of. The subject can be long, but it still comes before the verb.",
    tip: "Short fronted phrases such as 'After lunch' still take a comma when they open a sentence in formal writing.",
  },
  'Behind the library, a footpath winds through the woods': {
    why: "'Behind the library' is a fronted adverbial of place, so a comma follows it. 'A footpath' is the subject and 'winds' the verb, meaning twists and turns. 'Through the woods' says where it goes.",
    more: "Starting with a place guides the reader's eye through a scene: first the library, then the path, then the woods. 'Winds' here rhymes with 'finds', not with the wind that blows.",
    tip: 'In descriptive writing, open some sentences with a place phrase to move the reader through the setting.',
  },
  'Like most cats, Biscuit sleeps for most of the day': {
    why: "'Like most cats' is a fronted phrase that compares Biscuit with other cats, so a comma follows it. 'Biscuit' is the subject, 'sleeps' the verb and 'for most of the day' says how long.",
    more: "'Like' introduces a comparison with a noun. Biscuit is the cat's name, so it keeps its capital wherever it appears.",
    tip: "A comparison at the start, such as 'Like most cats', links one particular case to a general truth.",
  },
  'Darkness is cheap, and Scrooge liked it': {
    why: "Two main clauses are joined by 'and', so this is a compound sentence. 'Darkness is cheap' comes first, and the comma before 'and' marks the join. 'It' in the second clause means the darkness, so that clause must follow.",
    more: "Scrooge climbs his dark staircase without a candle because candles cost money. Dickens's short, blunt clauses mock his meanness: he likes the dark because it is free.",
    tip: "A pronoun such as 'it' needs something before it to refer to. Use that to decide which clause comes first.",
  },
  'Everything was unchanged, and Miss Havisham was alone': {
    why: "This compound sentence joins two main clauses with 'and'. 'Everything was unchanged' sets the scene, and the comma before 'and' marks the join. 'Miss Havisham was alone' adds a second fact about the room.",
    more: 'Pip, now an apprentice blacksmith, calls on Miss Havisham and finds her room exactly as before. Estella has gone abroad, so Miss Havisham is alone.',
    tip: "Two short clauses joined by 'and' can build a picture fact by fact. Keep each clause simple and let the details add up.",
  },
  "You don't deserve help, but I'll help you": {
    why: "'But' joins two main clauses that contrast, so this is a compound sentence. 'You don't deserve help' comes first, the comma before 'but' marks the join, and 'I'll help you' gives the surprise.",
    more: "A stranger at the village inn, the lawyer Mr Jaggers, says this to Mr Wopsle with heavy sarcasm. The contractions 'don't' and 'I'll' make his words sound sharp and spoken.",
    tip: "Contractions such as 'don't' and 'I'll' suit speech. In formal writing, use the full forms: 'do not', 'I will'.",
  },
  'Breakfast was over, and none had breakfasted': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'Breakfast was over' comes first, the comma marks the join, and 'none had breakfasted' delivers the twist: nobody actually ate.",
    more: "At Lowood school the porridge is burnt and nobody can eat it. Brontë uses 'breakfast' twice, first as a noun and then as a verb, to sharpen the girls' hunger.",
    tip: "Repeating a word in a different form, here 'breakfast' and 'breakfasted', can make a point memorable.",
  },
  'Four weeks passed away, and Jane saw nothing of him': {
    why: "This compound sentence joins two main clauses with 'and'. 'Four weeks passed away' comes first, and after the comma, 'Jane saw nothing of him' says what happened in those weeks.",
    more: "'Passed away' here means went by, an older use; today it usually means died. Jane Bennet is in London, hoping to see Mr Bingley, but he never visits.",
    tip: "Watch for older meanings in classic novels. 'Passed away' can simply mean 'went by'.",
  },
  'Her colour changed, and she said no more': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'Her colour changed' comes first, the comma marks the join, and 'she said no more' follows, because 'she' refers back to the 'her' of the first clause.",
    more: "Elizabeth starts praising Darcy's estate, Pemberley, then fears her praise might sound as though she wishes she lived there. She blushes and stops. 'Colour' here means the colour of her face.",
    tip: "Describe a blush or a pause in place of naming a feeling. 'Her colour changed' shows embarrassment without saying it.",
  },
  'The tears fell, and Nancy ceased to speak': {
    why: "This compound sentence joins two main clauses with 'and'. 'The tears fell' comes first, the comma marks the join, and 'Nancy ceased to speak' follows. 'Ceased to' means stopped.",
    more: "Nancy has been telling her husband Godfrey how different their life might have been. Eliot's two short clauses let the feeling show without any more words from Nancy.",
    tip: "'Ceased' is a formal word for 'stopped'. Use it for a serious moment in your own writing.",
  },
  'He was hatless, and his coat was unbuttoned': {
    why: "Two main clauses are joined by 'and', so this is a compound sentence. 'He was hatless' comes first, the comma marks the join, and 'his coat was unbuttoned' adds a second detail about the same man.",
    more: "A soldier arrives at the narrator's house at dawn, having fled the fighting. Wells shows his panic through his clothes: no hat, coat undone. In the 1890s, a man outdoors without a hat looked alarming.",
    tip: "Details of clothing can show a character's state of mind. Missing or undone clothes suggest haste or fear.",
  },
  'I am miserable, and they shall share my wretchedness': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'I am miserable' comes first, the comma marks the join, and 'they shall share my wretchedness' follows. 'Am' fits only 'I', so 'I' must be its subject.",
    more: "The creature tells Victor Frankenstein that people hate and fear him, so he will make them as unhappy as he is. 'Wretchedness' means deep misery, and 'shall' makes the threat sound certain.",
    tip: "Listen to 'shall' in older texts. With 'they' or 'you', it can sound like a promise or a threat.",
  },
  'The task of his destruction was mine, but I have failed': {
    why: "'But' joins two contrasting main clauses, so this is a compound sentence. 'The task of his destruction was mine' comes first, the comma marks the join, and 'I have failed' gives the painful contrast.",
    more: "Victor Frankenstein, close to death, tells Walton that destroying the creature he made was his duty. 'Mine' is a possessive pronoun standing for 'my task'.",
    tip: "Possessive pronouns such as 'mine' and 'yours' stand alone, with no noun after them: 'The task was mine.'",
  },
  'Miss Darcy and her brother appeared, and this formidable introduction took place': {
    why: "Two main clauses are joined by 'and'. In the first, 'Miss Darcy and her brother' is a double subject joined by its own 'and'. The comma comes before the 'and' that joins the clauses, and 'this formidable introduction took place' follows.",
    more: "Darcy brings his sister to meet Elizabeth at her inn. 'Formidable' means alarming, because Elizabeth is nervous. 'Took place' means happened, a fixed phrase.",
    tip: "When a sentence has two 'and's, check which one joins clauses. Only that one usually takes a comma.",
  },
  'I have been a disappointed man, and my spirits will not bear solitude': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'I have been a disappointed man' comes first, the comma marks the join, and 'my spirits will not bear solitude' follows. 'My' refers back to 'I', so that clause comes second.",
    more: "Wickham tells Elizabeth he needs company because Darcy has ruined his hopes. Much of his story later proves false. 'Solitude' means being alone.",
    tip: "Notice how a character presents himself. Wickham's sad words win sympathy, and readers learn to doubt him later.",
  },
  'The bus broke down, so Maya missed assembly': {
    why: "'So' joins two main clauses and shows a result, so this is a compound sentence. The cause, 'The bus broke down', comes first; after the comma, 'Maya missed assembly' gives the result.",
    more: "'Broke down' is a phrasal verb meaning stopped working. With 'so', the cause always comes first and the result second.",
    tip: "Use 'so' for a result and 'because' for a reason: 'The bus broke down, so Maya was late.'",
  },
  'Kofi plays the drums, but his parents prefer silence': {
    why: "'But' joins two contrasting main clauses, so this is a compound sentence. 'Kofi plays the drums' comes first, the comma marks the join, and 'his parents prefer silence' gives the contrast. 'Plays' fits one person, and 'prefer' fits more than one.",
    more: "Subject and verb must agree: 'Kofi plays' but 'his parents prefer'. 'His' refers back to Kofi, so that clause must come second.",
    tip: 'Check agreement in each clause of a compound sentence. Each verb must match its own subject.',
  },
  'The river burst its banks, and hundreds of homes flooded': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'The river burst its banks' comes first, the comma marks the join, and 'hundreds of homes flooded' gives what followed.",
    more: "'Its' with no apostrophe means 'belonging to it': the river's banks. 'It's' with an apostrophe means 'it is'.",
    tip: "Test 'its' by replacing it with 'it is'. If the sentence makes no sense, write 'its'.",
  },
  'The kettle boiled, and Mum made the tea': {
    why: "Two main clauses are joined by 'and', so this is a compound sentence. 'The kettle boiled' comes first, the comma marks the join, and 'Mum made the tea' follows, the next step in time.",
    more: "'Mum' has a capital letter because it is used as her name. Compare 'my mum', where it is an ordinary noun with a small letter.",
    tip: "Give 'Mum', 'Dad' or 'Gran' a capital when you use the word as a name: 'Mum said', but 'my mum said'.",
  },
  'The sun came out, so we had a picnic': {
    why: "'So' joins two main clauses and shows a result, so this is a compound sentence. The cause, 'The sun came out', comes first, the comma marks the join, and 'we had a picnic' is the result.",
    more: "'Came out' is a phrasal verb: here it means appeared from behind the clouds. Its two words stay together.",
    tip: "Before 'so', put the cause; after it, put the result.",
  },
  'The curtain rose, and everyone gasped': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'The curtain rose' comes first, the comma marks the join, and 'everyone gasped' gives the reaction to it.",
    more: 'In a theatre the curtain rises at the start of a show. Two short clauses, one after the other, make a dramatic moment feel quick.',
    tip: "Short clauses joined by 'and' can show an action followed by a reaction.",
  },
  'Gran knitted me a scarf, but the dog chewed it': {
    why: "'But' joins two contrasting main clauses, so this is a compound sentence. 'Gran knitted me a scarf' comes first, the comma marks the join, and 'the dog chewed it' follows: 'it' means the scarf.",
    more: "'Knitted me a scarf' has two objects: 'me', who received it, and 'a scarf', the thing made. The person comes first.",
    tip: "A pronoun comes after the noun it stands for. Here 'it' needs 'a scarf' before it.",
  },
  'The waves were enormous; nobody dared to swim': {
    why: "A semicolon joins two closely linked main clauses, so this is a compound sentence. 'The waves were enormous' gives the cause and comes first; after the semicolon, 'nobody dared to swim' gives the result.",
    more: "A semicolon can do the work of a conjunction such as 'so'. After it, the next word has no capital letter unless it is a name or 'I'.",
    tip: 'Use a semicolon only between two clauses that could each stand alone as a sentence.',
  },
  'The film lasted three hours, but Priya enjoyed every minute': {
    why: "'But' joins two contrasting main clauses, so this is a compound sentence. 'The film lasted three hours' comes first, the comma marks the join, and 'Priya enjoyed every minute' gives the surprise.",
    more: "'Every minute' is the object of 'enjoyed'. The contrast works because a long film might be expected to bore her.",
    tip: "Use 'but' when the second clause is unexpected after the first.",
  },
  'The shops were shut, so Dad made pancakes': {
    why: "'So' joins two main clauses and shows a result, so this is a compound sentence. The cause, 'The shops were shut', comes first; after the comma, 'Dad made pancakes' gives the result.",
    more: "Pancakes need only flour, eggs and milk, which most kitchens hold. 'Shut' is the same in the present and the past: 'the shops shut at six'.",
    tip: "With 'so', check that the first clause really causes the second.",
  },
  'The museum was closed, so we explored Conwy': {
    why: "'So' joins two main clauses and shows a result, so this is a compound sentence. The cause, 'The museum was closed', comes first, the comma marks the join, and 'we explored Conwy' is the result.",
    more: 'Conwy is a walled town in North Wales with a castle built for Edward I. As a place name, it keeps its capital letter.',
    tip: 'Place names always take capital letters, wherever they fall in the sentence.',
  },
  'Grandad fell asleep, and the popcorn went cold': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'Grandad fell asleep' comes first, the comma marks the join, and 'the popcorn went cold' follows.",
    more: "'Fell asleep' and 'went cold' both describe a change of state with a verb and an adjective. 'Grandad' has a capital because it is used as a name.",
    tip: "Verbs such as 'fall', 'go' and 'get' can show a change: fall asleep, go cold, get dark.",
  },
  'The printer jammed, so Ms Okafor dictated the questions': {
    why: "'So' joins two main clauses and shows a result, so this is a compound sentence. 'The printer jammed' comes first, the comma marks the join, and 'Ms Okafor dictated the questions' gives the result.",
    more: "'Dictated' means read aloud for others to write down. 'Ms' is a title for a woman that does not show whether she is married.",
    tip: "Use 'Ms' when you do not know, or do not need to say, whether a woman is married.",
  },
  'The referee blew the final whistle, and Wales had won': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'The referee blew the final whistle' comes first, the comma marks the join, and 'Wales had won' follows.",
    more: "'Had won' is the past perfect: the win was complete by the time the whistle blew. 'Final' sits between 'the' and 'whistle'.",
    tip: "Use the past perfect, as in 'had won', for something already finished at a past moment.",
  },
  'The lift has broken down, so we must take the stairs': {
    why: "'So' joins two main clauses and shows a result, so this is a compound sentence. 'The lift has broken down' comes first, the comma marks the join, and 'we must take the stairs' gives the result.",
    more: "'Has broken down' is the present perfect: it happened in the past but matters now. 'Has' fits one lift, while 'the stairs' would need 'have'.",
    tip: "Use the present perfect for a past event with a result now: 'I have lost my key, so I cannot get in.'",
  },
  'The baby was asleep, so we whispered': {
    why: "'So' joins two main clauses and shows a result, so this is a compound sentence. 'The baby was asleep' gives the cause and comes first; after the comma, 'we whispered' is the result.",
    more: "'Asleep' is an adjective that can only follow a verb: 'the baby was asleep', never 'the asleep baby'. Use 'sleeping' before a noun.",
    tip: "Some adjectives, such as 'asleep', 'awake' and 'alone', only come after a verb like 'was'.",
  },
  'The volcano erupted, and flights were cancelled': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'The volcano erupted' comes first, the comma marks the join, and 'flights were cancelled' gives what followed.",
    more: "'Were cancelled' is a passive verb: we are not told who cancelled the flights. In 2010, ash from a volcano in Iceland stopped flights across much of Europe.",
    tip: "British English doubles the l in 'cancelled' and 'travelled'. American English uses one.",
  },
  'The puppy ate my homework, but Mr Lewis did not believe me': {
    why: "'But' joins two contrasting main clauses, so this is a compound sentence. 'The puppy ate my homework' comes first, the comma marks the join, and 'Mr Lewis did not believe me' gives the twist.",
    more: "In a negative past sentence, 'did not' carries the tense and the main verb stays plain: 'did not believe', never 'did not believed'.",
    tip: "After 'did not', use the plain form of the verb: did not believe, did not go.",
  },
  'It was raining, so we played board games': {
    why: "'So' joins two main clauses and shows a result, so this is a compound sentence. 'It was raining' gives the cause and comes first; after the comma, 'we played board games' is the result.",
    more: "'It' here does not stand for anything: English needs a subject for weather verbs, as in 'it is snowing'. 'Board games' is a compound noun.",
    tip: "Weather sentences need 'it' as a subject: 'It was raining', not 'Was raining'.",
  },
  'Take an umbrella, or you will get soaked': {
    why: "'Or' joins two main clauses: an instruction and what happens if it is ignored. 'Take an umbrella' comes first, the comma marks the join, and 'you will get soaked' is the warning.",
    more: "An instruction like 'Take an umbrella' has no subject, because 'you' is understood. 'An' comes before 'umbrella' because the word starts with a vowel sound.",
    tip: "An instruction followed by 'or' makes a clear warning: 'Hurry, or you will be late.'",
  },
  'The alarm rang, but nobody woke up': {
    why: "'But' joins two contrasting main clauses, so this is a compound sentence. 'The alarm rang' comes first, the comma marks the join, and 'nobody woke up' gives the surprise.",
    more: "'Woke up' is a phrasal verb, and its two words stay together here. 'Nobody' takes a singular verb: 'nobody wakes', not 'nobody wake'.",
    tip: "Words like 'nobody', 'everyone' and 'somebody' take a singular verb.",
  },
  'The Jacksons were on holiday, so Mia fed their cat': {
    why: "'So' joins two main clauses and shows a result, so this is a compound sentence. 'The Jacksons were on holiday' comes first, the comma marks the join, and 'Mia fed their cat' follows: 'their' means the Jacksons'.",
    more: "A family name made plural takes just -s: 'the Jacksons', with no apostrophe. Their cat is 'the Jacksons' cat', with the apostrophe after the s.",
    tip: 'For a whole family, add -s with no apostrophe: the Smiths, the Patels.',
  },
  'Zara loves horror films, but they give her brother nightmares': {
    why: "'But' joins two contrasting main clauses, so this is a compound sentence. 'Zara loves horror films' comes first; after the comma, 'they' means the films, so that clause must follow.",
    more: "'Give her brother nightmares' has two objects: the person, 'her brother', then the thing, 'nightmares'. The person comes first.",
    tip: "With 'give', put the person before the thing: 'give her brother nightmares', 'give me a hand'.",
  },
  'Wear a coat, or you will catch a cold': {
    why: "'Or' joins an instruction to its warning. 'Wear a coat' comes first, the comma marks the join, and 'you will catch a cold' says what happens otherwise.",
    more: "'Catch a cold' is a fixed phrase. 'Or' after an instruction means 'if you do not': if you do not wear a coat, you will catch a cold.",
    tip: "Read 'or' after an instruction as 'if not', and check that the warning makes sense.",
  },
  'Hurry up, or we will miss the train': {
    why: "'Or' joins an instruction to its warning. 'Hurry up' comes first, the comma marks the join, and 'we will miss the train' says what happens if we do not hurry.",
    more: "'Hurry up' is a phrasal verb used as an instruction. The future 'will miss' shows the result can still be avoided.",
    tip: "Use 'or' after an instruction to show the result of ignoring it.",
  },
  'The snow was deep; nobody went out': {
    why: "A semicolon joins two closely linked main clauses. 'The snow was deep' gives the cause and comes first; after the semicolon, 'nobody went out' gives the result.",
    more: "After a semicolon there is no capital letter, unless the next word is a name or 'I'. Both clauses could stand alone as sentences.",
    tip: 'Read each side of a semicolon on its own. If both make a full sentence, the semicolon is right.',
  },
  'The tide came in, and our sandcastle vanished': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'The tide came in' comes first, the comma marks the join, and 'our sandcastle vanished' gives the result.",
    more: "'Came in' is a phrasal verb: the tide comes in and goes out twice a day. 'Sandcastle' is a compound noun written as one word.",
    tip: "Some compound nouns are one word, such as 'sandcastle', some are two, such as 'board game', and some take a hyphen. Check a dictionary.",
  },
  'Our car would not start, so Mrs Evans gave us a lift': {
    why: "'So' joins two main clauses and shows a result, so this is a compound sentence. 'Our car would not start' comes first, the comma marks the join, and 'Mrs Evans gave us a lift' follows.",
    more: "'Would not start' means refused to start. 'Gave us a lift' has two objects: the people, 'us', then the thing, 'a lift'.",
    tip: "'Give someone a lift' is British English for driving them somewhere. Americans say 'give someone a ride'.",
  },
  'The phone rang, but Tia let it ring': {
    why: "'But' joins two contrasting main clauses, so this is a compound sentence. 'The phone rang' comes first, the comma marks the join, and 'Tia let it ring' follows: 'it' means the phone.",
    more: "After 'let', the next verb has no 'to': 'let it ring', not 'let it to ring'. 'Rang' is the past of 'ring'.",
    tip: "After 'let' and 'make', use the plain verb: let it ring, make me laugh.",
  },
  'The rain stopped, and a rainbow appeared': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'The rain stopped' comes first, the comma marks the join, and 'a rainbow appeared' follows in time.",
    more: "A rainbow appears when sunlight shines through raindrops, so it often follows rain. 'A' introduces something new; 'the' points to something already known.",
    tip: "Use 'a' for something mentioned for the first time and 'the' for something the reader already knows about.",
  },
  'The kitten climbed the curtains, and Dad had to rescue her': {
    why: "'And' joins two main clauses, so this is a compound sentence. 'The kitten climbed the curtains' comes first; after the comma, 'Dad had to rescue her' follows, and 'her' means the kitten.",
    more: "'Had to' shows something necessary: Dad had no choice. A pet is often called 'he' or 'she' rather than 'it'.",
    tip: "Use 'had to' as the past of 'must': 'I must go' becomes 'I had to go'.",
  },
  'The test was difficult, yet everyone passed': {
    why: "'Yet' joins two contrasting main clauses, like 'but'. 'The test was difficult' comes first, the comma marks the join, and 'everyone passed' gives the surprise.",
    more: "'Yet' sounds more formal than 'but' and stresses the surprise. 'Everyone' takes a singular verb: 'everyone passes'.",
    tip: "Swap 'but' for 'yet' to vary your writing and stress a surprising contrast.",
  },
  'Entry is free, yet hardly anyone visits the gallery': {
    why: "'Yet' joins two contrasting main clauses. 'Entry is free' comes first, the comma marks the join, and 'hardly anyone visits the gallery' gives the surprising result.",
    more: "'Hardly anyone' means almost nobody, and 'hardly' goes straight before 'anyone'. 'Visits' has an -s because 'anyone' is singular.",
    tip: "'Hardly' is already negative, so do not add 'not' or 'no' to the same clause.",
  },
  'After his hoof had healed up, Boxer worked harder than ever': {
    why: "'After his hoof had healed up' is a subordinate clause of time, so it opens the sentence and a comma follows. 'Boxer worked harder than ever' is the main clause. 'His' points forward to Boxer.",
    more: "'Harder than ever' compares Boxer with himself. Orwell's loyal horse answers every problem by working harder, and the pigs take advantage of it.",
    tip: "A time clause with 'after' tells the reader when. Put a comma after it when it comes first.",
  },
  'As the human beings approached the farm buildings, Snowball launched his first attack': {
    why: "'As the human beings approached the farm buildings' is a subordinate clause of time: 'as' means while. It comes first, so a comma follows, and the main clause 'Snowball launched his first attack' completes the sentence.",
    more: 'This is the Battle of the Cowshed, when the farmers try to retake Animal Farm. Snowball has studied tactics and leads the defence.',
    tip: "'As' can mean 'while' or 'because'. Here it means while: two things happen at the same time.",
  },
  'If she favours you, love her': {
    why: "'If she favours you' is a conditional clause, so it opens the sentence with a comma after it. 'Love her' is the main clause, an instruction with no subject.",
    more: "Miss Havisham urges Pip to love Estella whatever she does. 'Favours' means treats kindly, and the British spelling keeps the u.",
    tip: "A conditional clause can lead to an instruction: 'If it rains, take a coat.'",
  },
  'If you are distrustful, bring two friends': {
    why: "'If you are distrustful' is a conditional clause, so it opens the sentence and a comma follows. 'Bring two friends' is the main clause, an instruction.",
    more: 'This comes from a mysterious letter to Mary Morstan, inviting her to a meeting. Holmes and Watson become the two friends.',
    tip: "'Distrustful' means not trusting. Prefixes such as dis- and un- often make an opposite.",
  },
  'If Holmes’s researches were successful, she would be an heiress': {
    why: "'If Holmes’s researches were successful' is a conditional clause, so it comes first with a comma after it. 'She would be an heiress' is the main clause: 'were' in one clause goes with 'would' in the other.",
    more: 'Watson loves Mary Morstan but fears that a treasure would make her rich and make him look like a fortune-hunter. An heiress is a woman who inherits a fortune.',
    tip: "In the second conditional, pair a past verb with 'would': 'If I won, I would share it.'",
  },
  'If this be the case, he deserves you': {
    why: "'If this be the case' is a conditional clause, so it opens the sentence with a comma after it. 'He deserves you' is the main clause.",
    more: "Mr Bennet says this once Elizabeth convinces him that she truly loves and respects Darcy. 'If this be' is an old form; today we say 'if this is the case'.",
    tip: "Older texts often use 'be' after 'if'. Write 'is' in your own work.",
  },
  'When this was done, she had a less active part to play': {
    why: "'When this was done' is a subordinate clause of time, so it opens the sentence with a comma after it. 'She had a less active part to play' is the main clause.",
    more: "Mrs Gardiner has handed out her presents; now she must sit and listen to Mrs Bennet's complaints. 'A less active part' is Austen's dry way of saying that now she could only listen.",
    tip: "'Less' compares amounts or levels: 'less active', 'less time'. Use 'fewer' with things you can count.",
  },
  'I looked at Wemmick, whose face was very grave': {
    why: "'I looked at Wemmick' is the main clause. 'Whose face was very grave' is a relative clause about Wemmick, so it follows his name, after a comma.",
    more: "'Whose' shows belonging: Wemmick's face. 'Grave' here means serious. Jaggers has just spoken with rare feeling, and Wemmick looks solemn.",
    tip: "Use 'whose' for possession in a relative clause: 'the boy whose bike was stolen'.",
  },
  'I found Adèle peeping through the schoolroom door, which she held ajar': {
    why: "'I found Adèle peeping through the schoolroom door' is the main clause. 'Which she held ajar' describes the door, so it follows 'door', after a comma.",
    more: "'Ajar' means slightly open. Adèle is spying on Rochester's elegant guests, and the half-open door lets her see without being seen.",
    tip: "Put a relative clause right after the noun it describes, so that 'which' clearly means that noun.",
  },
  'There was a pause, during which Mr. Utterson struggled with himself': {
    why: "'There was a pause' is the main clause. 'During which Mr. Utterson struggled with himself' says what happened in the pause, so it follows, after a comma: 'which' means the pause.",
    more: "Utterson has just watched his clerk, Mr Guest, compare a note from Jekyll with a letter from Hyde. 'Struggled with himself' means he hesitates, torn about asking why.",
    tip: "A preposition can come before 'which': 'during which', 'in which'. It is formal and precise.",
  },
  "They were interrupted by Miss Bennet, who came to fetch her mother's tea": {
    why: "'They were interrupted by Miss Bennet' is the main clause. 'Who came to fetch her mother's tea' tells us about Miss Bennet, so it follows her name, after a comma.",
    more: "'Miss Bennet' means Jane, the eldest daughter: the eldest unmarried sister was 'Miss' with the surname alone, and a younger one 'Miss' with her first name, as in 'Miss Elizabeth Bennet'. 'Mother's' has an apostrophe because the tea belongs to her mother.",
    tip: "Use 'who' for people and 'which' for things in a relative clause.",
  },
  'He was able to prove an alibi which could not be shaken': {
    why: "'He was able to prove an alibi' is the main clause. 'Which could not be shaken' describes the alibi, so it follows that noun directly, with no comma: it says which alibi.",
    more: 'An alibi is proof that someone was elsewhere when a crime happened. The police detective, Athelney Jones, admits that his suspect is innocent.',
    tip: "Leave out the comma before 'which' when the clause tells us which one; use a comma when it only adds information.",
  },
  'It is the only hypothesis which covers the facts': {
    why: "'It is the only hypothesis' is the main clause. 'Which covers the facts' says which hypothesis Holmes means, so it follows directly, with no comma.",
    more: 'A hypothesis is an explanation to be tested. Holmes insists that his theory is more than guesswork because it fits every fact.',
    tip: "Use 'hypothesis' in science and essays for an idea you will test. The plural is 'hypotheses'.",
  },
  'His appearance corresponded to the sounds which we had heard': {
    why: "'His appearance corresponded to the sounds' is the main clause. 'Which we had heard' says which sounds, so it follows 'sounds' directly, with no comma.",
    more: "'Corresponded to' means matched. Watson heard wheezing on the stairs, and the visitor looks like an old sailor; in fact it is Holmes in disguise.",
    tip: "'Correspond to' means 'match'. It suits formal writing.",
  },
  'I gazed on the picture of my mother, which stood over the mantel-piece': {
    why: "'I gazed on the picture of my mother' is the main clause. 'Which stood over the mantel-piece' adds information about the picture, so it follows, after a comma.",
    more: 'Victor Frankenstein returns home and looks at a painting of his mother. A mantelpiece is the shelf above a fireplace; older texts write it with a hyphen.',
    tip: "A comma before 'which' shows the clause adds extra information. Remove the clause and the sentence still makes sense.",
  },
  'It beckoned Scrooge to approach, which he did': {
    why: "'It beckoned Scrooge to approach' is the main clause: 'it' is Marley's Ghost. 'Which he did' refers back to the whole idea of approaching, so it comes last, after a comma.",
    more: "'Beckoned' means signalled someone to come closer. 'Which' can stand for a whole action, not just a noun.",
    tip: "A 'which' clause can comment on a whole idea: 'He apologised, which surprised everyone.'",
  },
  'The rule was against sheets, which are a human invention': {
    why: "'The rule was against sheets' is the main clause. 'Which are a human invention' adds information about sheets, so it follows, after a comma. 'Are' agrees with the plural 'sheets'.",
    more: 'The pigs have moved into the farmhouse beds, and Squealer twists the rule to mean sheets, not beds. It shows how the pigs bend the commandments.',
    tip: "The verb in a relative clause agrees with the noun it describes: 'sheets, which are'.",
  },
  'These two disagreed at every point where disagreement was possible': {
    why: "'These two disagreed at every point' is the main clause. 'Where disagreement was possible' says which points, so it follows 'point' directly, with no comma.",
    more: "'These two' are Snowball and Napoleon, whose rivalry splits the farm. Orwell turns 'disagreed' into 'disagreement' to stress how constant it is.",
    tip: "'Where' can begin a relative clause about a point or a situation, not only a place.",
  },
  "Foul weather didn't know where to have him": {
    why: "'Foul weather didn't know' is the main clause. 'Where to have him' says what it did not know, so it follows the verb.",
    more: "Dickens jokes that even the worst weather could not get the better of Scrooge: he was colder and harder than any storm. 'Didn't' is short for 'did not'.",
    tip: 'Personification gives weather human thoughts. Dickens uses it to show how cold Scrooge is.',
  },
  'Bessie went into the housemaid’s apartment, which was near': {
    why: "'Bessie went into the housemaid’s apartment' is the main clause. 'Which was near' adds information about the room, so it follows, after a comma.",
    more: "Bessie, a maid, has been looking after young Jane, who fainted after being locked in the red-room. 'Apartment' here means a room, an older British use.",
    tip: "Older novels use 'apartment' for a single room. Today in Britain it usually means a flat.",
  },
  'She will follow wherever Lydia leads': {
    why: "'She will follow' is the main clause. 'Wherever Lydia leads' says where she will follow, so it comes after the verb. 'Wherever' means to any place at all.",
    more: "Elizabeth warns her father that Kitty copies her wild younger sister Lydia. 'Leads' agrees with 'Lydia', one person.",
    tip: "Words ending in -ever, such as 'wherever' and 'whatever', mean 'any at all'.",
  },
  'Mrs. Collins knew not what to make of him': {
    why: "'Mrs. Collins knew not' is the main clause, an old way of saying 'did not know'. 'What to make of him' says what she did not know, so it follows.",
    more: "Charlotte Collins cannot understand why Darcy keeps visiting the parsonage and sitting in silence. 'Make of' means understand, as in 'what to make of someone'.",
    tip: "Modern English needs 'did not know'. 'Knew not' belongs to older texts.",
  },
  'What I have to say relates to poor Lydia': {
    why: "'What I have to say' is a noun clause and the subject of the sentence. 'Relates' is the main verb, and 'to poor Lydia' says what the news is about.",
    more: "Jane writes to Elizabeth with alarming news about their youngest sister. 'Relates to' means concerns. A whole clause, 'What I have to say', can act as the subject.",
    tip: "A clause beginning with 'what' can be the subject of a sentence: 'What she said surprised me.'",
  },
  'She possessed eyes whose gaze I delighted to encounter': {
    why: "'She possessed eyes' is the main clause. 'Whose gaze I delighted to encounter' describes the eyes, so it follows 'eyes' directly: 'whose gaze' means the eyes' gaze.",
    more: "Jane is describing Diana Rivers, who has taken her in. 'Gaze' means a steady look, and 'delighted to encounter' means loved to meet.",
    tip: "'Whose' can refer to things as well as people: 'eyes whose gaze', 'a house whose roof leaked'.",
  },
  'A fine spring shone round me, which I could not enjoy': {
    why: "'A fine spring shone round me' is the main clause. 'Which I could not enjoy' adds information about the spring, so it follows, after a comma.",
    more: 'Jane is unhappy, waiting for news of Rochester that never comes, so even good weather cannot lift her mood. The contrast between the season and her feelings is the point.',
    tip: "Contrast the setting with a character's mood to make sadness stand out.",
  },
  'We had to walk two miles to Brocklebridge Church, where our patron officiated': {
    why: "'We had to walk two miles to Brocklebridge Church' is the main clause. 'Where our patron officiated' adds information about the church, so it follows, after a comma.",
    more: "The Lowood girls walk to church in bitter cold. Their patron, Mr Brocklehurst, leads the services there. 'Officiated' means led a religious ceremony.",
    tip: "Use 'where' to add information about a place: 'Paris, where she studied'.",
  },
  'Joe offered me more gravy, which I was afraid to take': {
    why: "'Joe offered me more gravy' is the main clause. 'Which I was afraid to take' adds information about the gravy, so it follows, after a comma.",
    more: 'At Christmas dinner the adults pick on young Pip, and Joe quietly offers him gravy as comfort, as he always does. Pip is too frightened to accept it.',
    tip: "'Offered me more gravy' has two objects: the person first, then the thing.",
  },
  'If she wounds you, love her': {
    why: "'If she wounds you' is a conditional clause, so it opens the sentence with a comma after it. 'Love her' is the main clause, an instruction with no subject.",
    more: "Miss Havisham repeats the same pattern again and again: whatever Estella does, Pip must love her. 'Wounds' here means hurts his feelings.",
    tip: "Repetition with small changes builds intensity. Miss Havisham's words become almost a chant.",
  },
  'If all is well, my shoulders are broad enough to bear the blame': {
    why: "'If all is well' is a conditional clause, so it opens the sentence and a comma follows. 'My shoulders are broad enough to bear the blame' is the main clause.",
    more: "Utterson tells the servants he will break into Jekyll's room himself, and if nothing is wrong he will take the blame. Broad shoulders stand for being able to accept responsibility.",
    tip: "'Enough' follows an adjective: 'broad enough', 'old enough'. It comes before a noun: 'enough time'.",
  },
  'The old lady is Mrs. Jenkinson, who lives with them': {
    why: "'The old lady is Mrs. Jenkinson' is the main clause. 'Who lives with them' adds information about her, so it follows her name, after a comma.",
    more: "Maria Lucas excitedly explains who is in the carriage at the gate. Mrs Jenkinson is the companion of Lady Catherine's daughter.",
    tip: "Use a comma before 'who' when the clause adds information about someone already named.",
  },
  'If you do, all will be in vain': {
    why: "'If you do' is a conditional clause, so it opens the sentence and a comma follows. 'All will be in vain' is the main clause, the warning.",
    more: "The mysterious letter to Mary Morstan tells her not to bring the police: 'If you do' means 'if you bring them'. 'In vain' means for nothing.",
    tip: "'Do' can stand in for a verb already used, so you need not repeat it.",
  },
  'It was the first of their proceedings which had no heartiness': {
    why: "'It was the first of their proceedings' is the main clause. 'Which had no heartiness' says which proceedings, so it follows directly, with no comma.",
    more: "The Cratchits drink to Scrooge's health only because Bob asks them to. It is the one part of their Christmas without warmth, because Scrooge is the family's ogre.",
    tip: "'Heartiness' means warmth and enthusiasm. Abstract nouns like this help you describe a mood.",
  },
  'If you drop litter, you could be fined': {
    why: "'If you drop litter' is a conditional clause, so it opens the sentence and a comma follows. 'You could be fined' is the main clause, the possible result.",
    more: "'Could be fined' is passive: we are not told who fines you. 'Could' shows that the result is possible, not certain.",
    tip: "Use 'could' for a possible result and 'will' for a certain one.",
  },
  'If the pitch is frozen, the match will be cancelled': {
    why: "'If the pitch is frozen' is a conditional clause, so it opens the sentence and a comma follows. 'The match will be cancelled' is the main clause, the result.",
    more: "This is the first conditional: 'if' with the present tense, then 'will' for the future. 'Will be cancelled' is passive.",
    tip: "In the first conditional, do not put 'will' after 'if': 'If it rains', not 'If it will rain'.",
  },
  'Unless you set an alarm, you will oversleep': {
    why: "'Unless you set an alarm' means 'if you do not set an alarm'. This subordinate clause comes first with a comma after it, and the main clause 'you will oversleep' gives the result.",
    more: "'Oversleep' means sleep longer than you meant to. The prefix over- means too much, as in overeat and overcook.",
    tip: "Test 'unless' by swapping it for 'if not'. The meaning should stay the same.",
  },
  'Because the bridge was closed, Dad was late for work': {
    why: "'Because the bridge was closed' is a subordinate clause giving the reason. It comes first, so a comma follows, and the main clause 'Dad was late for work' gives the result.",
    more: "Starting with 'because' is correct when a main clause follows. On its own, 'Because the bridge was closed' would be a fragment, not a sentence.",
    tip: "If you start a sentence with 'because', make sure a main clause follows.",
  },
  'Since Amir joined the orchestra, our house has been noisy': {
    why: "'Since Amir joined the orchestra' is a subordinate clause of time, so it opens the sentence with a comma after it. The main clause 'our house has been noisy' says what has been true from then until now.",
    more: "'Since' with a point in time goes with the present perfect, 'has been', which links the past to the present.",
    tip: "Use the present perfect after a 'since' clause: 'Since she moved, she has made friends.'",
  },
  'We visited Caernarfon Castle, where King Edward II was born': {
    why: "'We visited Caernarfon Castle' is the main clause. 'Where King Edward II was born' adds information about the castle, so it follows, after a comma.",
    more: "Edward II was born at Caernarfon in 1284 and later became the first English Prince of Wales. 'II' is read as 'the Second'.",
    tip: "Read the Roman numeral after a monarch's name as an ordinal: 'Edward II' is Edward the Second.",
  },
  'Nobody knew why the lights had gone out': {
    why: "'Nobody knew' is the main clause. 'Why the lights had gone out' is a noun clause saying what nobody knew, so it follows the verb.",
    more: "Inside the 'why' clause, normal statement order stays: 'why the lights had gone out', not 'why had the lights gone out'.",
    tip: "In reported questions, keep statement order: 'I asked where she lived', not 'where did she live'.",
  },
  'I wonder whether Leon remembered his lines': {
    why: "'I wonder' is the main clause. 'Whether Leon remembered his lines' is a noun clause saying what I wonder about, so it follows the verb.",
    more: "'Whether' introduces a yes or no question inside a sentence. 'Remembered' is past, so the wondering is about something that has already happened.",
    tip: "Use 'whether' for a question with two possible answers: 'I don't know whether to laugh or cry.'",
  },
  'What Jade said surprised us all': {
    why: "'What Jade said' is a noun clause and the subject of the sentence. 'Surprised' is the main verb and 'us all' the object.",
    more: "A clause beginning with 'what' can act like a noun: 'What Jade said' means 'the thing that Jade said'.",
    tip: "Try replacing a 'what' clause with 'the thing that'. If the sentence still works, it is a noun clause.",
  },
  'The film was so frightening that Tom watched it through his fingers': {
    why: "'The film was so frightening' is the main clause. 'That Tom watched it through his fingers' gives the result, so it follows: 'so' with an adjective sets up 'that'.",
    more: "'So... that' shows cause and effect: the film was frightening enough to make Tom hide behind his fingers.",
    tip: "Use 'so' with an adjective and 'such' with a noun: 'so frightening', 'such a frightening film'.",
  },
  'It was such a hot day that the tarmac melted': {
    why: "'It was such a hot day' is the main clause. 'That the tarmac melted' gives the result, so it follows: 'such a' with a noun sets up 'that'.",
    more: "'Such' goes with a noun phrase, as in 'such a hot day', while 'so' goes with an adjective alone, as in 'so hot'. Tarmac is the black surface of a road.",
    tip: "Use 'such a' before an adjective and a noun: 'such a long walk', 'such a good idea'.",
  },
  'Because Kemi had practised, the solo went perfectly': {
    why: "'Because Kemi had practised' gives the reason, so it opens the sentence and a comma follows. The main clause 'the solo went perfectly' gives the result.",
    more: "In British English, 'practise' with an s is the verb and 'practice' with a c is the noun. 'Had practised' is the past perfect: the practice came before the solo.",
    tip: 'Practise is the verb and practice the noun. Advise and advice work the same way.',
  },
  'Dad burnt the toast, which made the smoke alarm go off': {
    why: "'Dad burnt the toast' is the main clause. 'Which made the smoke alarm go off' comments on what happened, so it follows, after a comma: 'which' means the burning.",
    more: "After 'made', the next verb has no 'to': 'made the smoke alarm go off'. 'Burnt' and 'burned' are both correct past forms in British English.",
    tip: "After 'make' meaning 'cause', use the plain verb: 'made me laugh', 'made it go off'.",
  },
  'Unless the rain stops, the picnic will be cancelled': {
    why: "'Unless the rain stops' means 'if the rain does not stop'. This subordinate clause comes first with a comma after it, and the main clause 'the picnic will be cancelled' gives the result.",
    more: "After 'unless', use the present tense to talk about the future: 'unless the rain stops', not 'unless the rain will stop'.",
    tip: "Treat 'unless' like 'if': no 'will' straight after it.",
  },
  'Before you leave the lab, check that the gas taps are off': {
    why: "'Before you leave the lab' is a subordinate clause of time, so it opens the sentence and a comma follows. The main clause is an instruction, 'check', and 'that the gas taps are off' says what to check.",
    more: "Lab rules often start with a time clause. The instruction has no subject, because 'you' is understood.",
    tip: 'In instructions, put the time clause first to make the order of actions clear.',
  },
  'After the storm had passed, neighbours cleared the fallen branches': {
    why: "'After the storm had passed' is a subordinate clause of time, so it comes first and a comma follows. 'Neighbours cleared the fallen branches' is the main clause.",
    more: "'Had passed' is the past perfect: the storm ended before the clearing began. 'Fallen' is a past participle used as an adjective.",
    tip: 'Past participles can describe nouns: fallen branches, broken glass, frozen ponds.',
  },
  'The scientist who discovered penicillin was Alexander Fleming': {
    why: "'The scientist was Alexander Fleming' is the main clause. 'Who discovered penicillin' says which scientist, so it follows 'scientist' directly, with no commas.",
    more: 'In 1928 Fleming noticed that a mould was killing bacteria in his laboratory. Penicillin became the first widely used antibiotic.',
    tip: "Leave out commas when the 'who' clause is needed to say which person you mean.",
  },
  'Whoever breaks a window must pay for it': {
    why: "'Whoever breaks a window' is a noun clause and the subject: it means 'any person who breaks a window'. 'Must pay for it' completes the sentence, and 'it' means the window.",
    more: "'Whoever' takes a singular verb, 'breaks', because it means any one person.",
    tip: "Use 'whoever' to mean 'any person who': 'Whoever arrives last locks the door.'",
  },
  'So that nobody would hear her, Eva whispered': {
    why: "'So that nobody would hear her' gives Eva's purpose, so it opens the sentence and a comma follows. The main clause 'Eva whispered' is the action.",
    more: "'So that' shows purpose: why someone does something. Putting the purpose first creates suspense before we learn what Eva did.",
    tip: "Use 'so that' for purpose: 'I left early so that I could catch the bus.'",
  },
  'Until the paint has dried, the benches are out of use': {
    why: "'Until the paint has dried' is a subordinate clause of time, so it opens the sentence and a comma follows. The main clause 'the benches are out of use' says what is true until then.",
    more: "'Out of use' means not available. 'Has dried' is the present perfect after 'until': the benches can be used once the drying is complete.",
    tip: "After 'until', use the present or present perfect for the future: 'until it has dried', not 'until it will dry'.",
  },
  'This is the house where my grandfather was born': {
    why: "'This is the house' is the main clause. 'Where my grandfather was born' says which house, so it follows 'house' directly, with no comma.",
    more: "'Where' starts a relative clause about a place. 'Was born' is a passive form: we say 'I was born', never 'I born'.",
    tip: "Always use 'was' or 'were' with 'born': 'She was born in Leeds.'",
  },
  'Our flight was delayed by six hours, which ruined the first day of the holiday': {
    why: "'Our flight was delayed by six hours' is the main clause. 'Which ruined the first day of the holiday' comments on the whole delay, so it follows, after a comma.",
    more: "'Was delayed' is passive, and 'by six hours' says how long. A 'which' clause can refer back to a whole event, not just a noun.",
    tip: "Use a comma before 'which' when it comments on the whole of the clause before it.",
  },
}
