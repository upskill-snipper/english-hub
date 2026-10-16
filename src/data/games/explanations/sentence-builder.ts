import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Sentence Builder: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/sentence-builder.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'She walks to school every morning': {
    why: "A simple sentence is one main clause: here, one subject and one verb. 'She' is the subject and 'walks' is the verb, with an -s because 'she' is third person singular (he, she, it). The details follow: where ('to school') and then when ('every morning').",
    more: "After the verb, details usually come in the order manner, place, time. So 'to school' comes before 'every morning'. A plain statement like this one starts with its subject.",
    tip: 'Build a sentence in layers: who, does what, where, when. It keeps your English word order clear.',
  },
  'The cat is sleeping on the sofa': {
    why: "'The cat' is the subject. 'Is sleeping' is the verb group for something happening now: the helping verb 'is' comes first, then the -ing verb. 'On the sofa' says where and usually goes last.",
    more: "This is the present continuous: is or are plus a verb ending in -ing. The helping verb agrees with the subject: the cat is sleeping, but the cats are sleeping. 'The cat on the sofa is sleeping' is also correct English, but this game asks for the order shown.",
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
    more: "A place phrase can follow a noun to describe it: 'a garden behind the house'. Single adjectives such as 'small' come before the noun. 'She has a garden behind the small house' is also correct English, with a different meaning, but this game asks for the order shown.",
    tip: "To enrich a noun, add one adjective in front and one place phrase behind: 'a small garden behind the house'.",
  },
  'He speaks three languages very well': {
    why: "'He' is the subject and 'speaks' is the verb, with -s because 'he' is third person singular. 'Three languages' is the object. 'Very well' says how he speaks, and it comes after the object.",
    more: "'Very well' is an adverb phrase: 'very' makes the adverb 'well' stronger. An adverb of manner usually follows the verb and its object.",
    tip: "Do not put 'very well' between the verb and the object. Say 'speaks three languages very well', not 'speaks very well three languages'.",
  },
  'The children are playing in the garden': {
    why: "'The children' is the subject and 'are playing' is the verb group. 'Are' goes with the plural 'children'. 'In the garden' says where and comes last.",
    more: "'Children' is an irregular plural: the plural of 'child' is 'children', not 'childs'. Use 'are' with plural subjects and 'is' with singular ones. 'The children in the garden are playing' is also correct English, but this game asks for the order shown.",
    tip: 'Match the helping verb to the subject: the child is playing, the children are playing.',
  },
  'I usually have tea in the afternoon': {
    why: "'I' is the subject, 'usually' is an adverb of frequency, 'have' is the verb and 'tea' is the object. Adverbs of frequency usually go before the main verb. 'In the afternoon' says when.",
    more: "Other adverbs of frequency are always, often, sometimes and never. They usually go before the main verb but after the verb 'be': 'She is always late.' 'I have tea in the afternoon usually' is also correct English, but this game asks for the order shown.",
    tip: "In a plain statement, put 'usually', 'often' and 'never' before the main verb. 'I have usually tea' is wrong.",
  },
  'My phone is on the kitchen table': {
    why: "'My phone' is the subject and 'is' is the verb 'to be'. 'On the kitchen table' says where the phone is. The preposition 'on' shows that it is resting on the top surface.",
    more: "'Kitchen table' puts one noun before another, and the first describes the second. 'On' means touching a surface; 'in' would suggest the phone was inside the table. 'My kitchen phone is on the table' is also correct English, but this game asks for the order shown.",
    tip: "Use 'on' for surfaces (on the table), 'in' for enclosed spaces (in the box) and 'at' for points (at the door).",
  },
  'We visited our grandparents last summer': {
    why: "'We' is the subject, 'visited' is the past tense of 'visit', and 'our grandparents' is the object. 'Last summer' places the action in the past and comes at the end.",
    more: "Phrases such as 'last summer', 'yesterday' and 'two years ago' show that something is over. They normally go at the end of the sentence, though they can also begin it.",
    tip: 'When you use a time phrase for the past, check that the verb is in the past tense: visited, not visit.',
  },
  'The shop opens at eight every day': {
    why: "'The shop' is the subject and 'opens' is the verb, with -s because the shop is one thing. 'At eight' says the exact time and 'every day' says how often. Both come after the verb.",
    more: "The two time details can swap places: 'The shop opens every day at eight' is also correct English, but this game asks for the order shown.",
    tip: 'Add -s to the verb for he, she, it and singular nouns: the shop opens, but the shops open.',
  },
  'She is reading an interesting book': {
    why: "'She' is the subject and 'is reading' is the verb group for an action in progress. 'An interesting book' is the object. We use 'an' because 'interesting' begins with a vowel sound.",
    more: "Choose 'a' or 'an' by the sound that follows, not the spelling. It is 'an interesting book' but 'a useful book', because 'useful' begins with a 'y' sound.",
    tip: "Say the phrase aloud. If the next word begins with a vowel sound, use 'an'. 'An hour' also takes 'an' because the 'h' is silent.",
  },
  'I wanted to go out but it was raining': {
    why: "'I wanted to go out' and 'it was raining' are two full clauses, and each has its own subject and verb. 'But' joins them and shows contrast, so it goes between them.",
    more: "A compound sentence joins two main clauses with a coordinating conjunction: for, and, nor, but, or, yet or so. Each clause has its own subject and verb. 'I wanted to go but it was raining out' is also correct English, but this game asks for the order shown.",
    tip: "Written down, this sentence has a comma before 'but': 'I wanted to go out, but it was raining.'",
  },
  'She studied hard so she passed the exam': {
    why: "'She studied hard' is the cause and 'she passed the exam' is the result. 'So' joins them, and the order matters: the cause comes first, then 'so', then the result.",
    more: "'So' as a conjunction means 'as a result'. Reversing the clauses would put the result before the cause. 'She studied so hard she passed the exam' is also correct English, with 'so hard' meaning 'very hard', but this game asks for the order shown.",
    tip: "Written down, put a comma before 'so': 'She studied hard, so she passed the exam.'",
  },
  'We can walk or we can take the bus': {
    why: "'Or' joins two clauses that offer a choice. Each has its own subject and verb: 'we can walk' and 'we can take the bus'. 'Or' goes between them.",
    more: "The two choices are equal, so they can change places: 'We can take the bus or we can walk' is also correct English, but this game asks for the order shown. The pattern is clause, 'or', clause.",
    tip: "Use 'or' to offer choices. In writing, a comma before 'or' is optional between short clauses.",
  },
  'He made dinner and she washed the dishes': {
    why: "'And' joins two equal clauses, 'He made dinner' and 'she washed the dishes'. Each keeps the order subject, verb, object. The conjunction sits between the clauses.",
    more: "The two ideas have equal weight, so the actions can swap: 'He washed the dishes and she made dinner' is also correct English, but this game asks for the order shown.",
    tip: "A comma before 'and' is optional between short clauses, but it helps in longer ones.",
  },
  'The film was long but it was exciting': {
    why: "'But' joins two contrasting clauses, 'The film was long' and 'it was exciting'. Each has a subject and the verb 'was'. 'But' goes between them.",
    more: "'The film was exciting but it was long' is also correct English, but this game asks for the order shown. Use a comma before 'but' when it joins two full clauses.",
    tip: "Contrast is useful in reviews. 'It was long, but it was exciting' gives a balanced opinion.",
  },
  'I was tired so I went to bed early': {
    why: "'I was tired' is the cause and 'I went to bed early' is the result. 'So' joins them. 'Early' is an adverb that says when, and it goes at the end.",
    more: "'So' links a cause to its result, so the cause comes first. Compare 'because', which introduces the reason: 'I went to bed early because I was tired.' 'I was so tired I went to bed early' is also correct English, but this game asks for the order shown.",
    tip: "Use 'so' to move from a reason to its result, and put a comma before it when you write.",
  },
  'You can have tea or you can have coffee': {
    why: "'Or' joins two clauses that offer a choice. Each has its own subject and verb: 'You can have tea' and 'you can have coffee'. 'Or' goes between them.",
    more: "The two choices are equal, so they can change places: 'You can have coffee or you can have tea' is also correct English, but this game asks for the order shown. In everyday speech we shorten it to 'You can have tea or coffee.'",
    tip: 'Repeating the subject and verb makes a compound sentence. Leaving them out makes a simple one.',
  },
  'She plays the piano and he sings': {
    why: "'And' joins two complete clauses. 'She plays the piano' has a subject, a verb and an object, and 'he sings' has a subject and a verb. 'And' goes between them.",
    more: "Both clauses could stand alone as sentences, which is why this sentence is compound. The actions can swap: 'She sings and he plays the piano' is also correct English, but this game asks for the order shown.",
    tip: "A clause needs a subject and a verb. If both halves have them, 'and' makes a compound sentence.",
  },
  'It was cold so we lit the fire': {
    why: "'It was cold' is the cause and 'we lit the fire' is the result, joined by 'so'. 'Lit' is the past tense of 'light', and it matches 'was': both clauses are in the past.",
    more: "'Light' has two past forms, 'lit' and 'lighted', and 'lit' is the usual one for a fire or a candle. Here both clauses are in the past. 'It was so cold we lit the fire' is also correct English, but this game asks for the order shown.",
    tip: "Written down, put a comma before 'so': 'It was cold, so we lit the fire.'",
  },
  'He tried his best but he did not win': {
    why: "'But' joins two contrasting clauses, 'He tried his best' and 'he did not win'. The second is an unexpected result. Each clause has its own subject and verb.",
    more: "In the negative clause, 'did' is the helping verb and 'not' follows it, with the plain verb after: 'did not win', never 'did not won'. 'He did not win but he tried his best' is also correct English, but this game asks for the order shown.",
    tip: "After 'did not', use the plain form of the verb: did not win, did not go, did not see.",
  },
  'We finished early so we went for a walk': {
    why: "'We finished early' is the cause and 'we went for a walk' is the result, joined by 'so'. 'Early' is an adverb that says when. 'Went for a walk' is the natural UK English phrase.",
    more: "'Went' is the past tense of 'go'. In UK English we usually 'go for a walk'; 'take a walk' sounds more American. 'We finished so early we went for a walk' is also correct English, but this game asks for the order shown.",
    tip: 'Learn common verb phrases whole: go for a walk, have lunch, take a photo, make a mistake.',
  },
  'I like cricket and my sister likes rugby': {
    why: "'And' joins two clauses about different people. 'I like cricket' and 'my sister likes rugby' each have a subject, a verb and an object. The verb ends in -s for 'my sister', but not for 'I'.",
    more: "The verb form changes with the subject: I like, she likes. The two sports can change places: 'I like rugby and my sister likes cricket' is also correct English, but this game asks for the order shown.",
    tip: 'Check verb agreement in each clause separately. Every clause has its own subject, so each verb must match its own subject.',
  },
  'The sun came out so we went to the beach': {
    why: "'The sun came out' is the cause and 'we went to the beach' is the result, joined by 'so'. 'Came out' is a phrasal verb meaning appeared. 'To the beach' shows where they went.",
    more: "A phrasal verb is a verb plus a small word that changes its meaning: came out, set off, give up. Here 'came out' means that the sun appeared. 'To' shows the direction of travel.",
    tip: "Treat a phrasal verb as one unit of meaning. Learn 'come out' together, not just 'come' and 'out'.",
  },
  'She spoke quietly but everyone could hear her': {
    why: "'But' joins two contrasting clauses. 'She spoke quietly' has an adverb of manner after the verb, and 'everyone could hear her' is the surprising result. 'Her' is the object.",
    more: "'Quietly' is an adverb of manner, so it usually follows the verb. 'She quietly spoke but everyone could hear her' is also correct English, but this game asks for the order shown. 'Could' is followed by the plain verb 'hear'.",
    tip: "After 'could', 'can' and 'will', use the plain verb with no -s, -ed or -ing.",
  },
  'You should revise now or you will forget': {
    why: "'Or' here warns of a result: if you do not revise now, you will forget. The clauses are 'You should revise now' and 'you will forget', and 'or' goes between them.",
    more: "'Or' can mean 'otherwise': the first clause says what to do, the second what happens if you do not. Reversed, 'You will forget or you should revise now' sounds odd. 'You should now revise or you will forget' is also correct English, but this game asks for the order shown.",
    tip: "A warning with 'or' is useful in advice and persuasive writing: 'Book now or you will miss out.'",
  },
  'Because it was late we went home': {
    why: "'Because it was late' is a subordinate clause: it gives the reason but cannot stand alone. It comes first, and 'we went home' is the main clause. 'Because' begins the subordinate clause.",
    more: "A complex sentence has a main clause and at least one subordinate clause. When the subordinate clause comes first, put a comma after it in writing: 'Because it was late, we went home.'",
    tip: 'To vary your sentence openings, start with the reason or time clause, then use a comma before the main clause.',
  },
  'When the bell rang the pupils left': {
    why: "'When the bell rang' is a subordinate clause of time. It cannot stand alone, so it needs the main clause 'the pupils left'. The clause beginning with 'when' comes first here.",
    more: "When, while, after and before begin time clauses. In writing, put a comma after the clause: 'When the bell rang, the pupils left.' 'When the pupils left the bell rang' is also correct English, with a different meaning, but this game asks for the order shown.",
    tip: "Look for a time word such as 'when', 'while', 'after' or 'before' at the start of a sentence. It marks a subordinate clause that needs a comma after it.",
  },
  'Although she was tired she kept working': {
    why: "'Although she was tired' is a subordinate clause that sets up a contrast. 'She kept working' is the main clause. 'Although' begins the sentence and the main clause follows.",
    more: "'Although' shows an unexpected result, because being tired usually makes people stop. Do not add 'but' as well: 'Although she was tired but she kept working' is wrong.",
    tip: "Do not join two clauses with two conjunctions. 'Although... but' is a common mistake.",
  },
  'If it rains tomorrow we will stay inside': {
    why: "This is the first conditional. 'If it rains tomorrow' uses the present simple for a possible future event, and 'we will stay inside' gives the result with 'will' plus the plain verb.",
    more: "First conditional: 'if' plus the present simple, then 'will' plus a verb. We do not say 'if it will rain'. 'Tomorrow' can move: 'If it rains we will stay inside tomorrow' is also correct English, but this game asks for the order shown.",
    tip: "In writing, put a comma after the 'if' clause: 'If it rains tomorrow, we will stay inside.'",
  },
  'The book that I read was fascinating': {
    why: "'That I read' is a relative clause: it tells us which book. It comes straight after the noun 'book', and the main verb 'was' follows the whole phrase.",
    more: "The subject of the main clause is the whole phrase 'The book that I read'. A relative clause can begin with that, which or who. Before 'was', the whole phrase acts as one noun.",
    tip: "You can often leave out 'that' when it is the object of its own clause: 'The book I read was fascinating.'",
  },
  'While he was cooking she set the table': {
    why: "'While he was cooking' is a subordinate clause of time that shows two actions at once. 'She set the table' is the main clause. 'While' begins the sentence.",
    more: "The past continuous ('was cooking') often shows the longer action in progress, and the past simple ('set') the action that happened during it. 'While she set the table he was cooking' is also correct English, but this game asks for the order shown.",
    tip: "A comma after the 'while' clause helps the reader: 'While he was cooking, she set the table.'",
  },
  'She smiled because she had won the prize': {
    why: "'She smiled' is the main clause and 'because she had won the prize' gives the reason. When the subordinate clause comes second, no comma is needed. 'Had won' shows that the winning came first.",
    more: "'Had won' is the past perfect. It shows that one past action happened before another: first she won, then she smiled. The same tiles make other correct sentences, such as 'She had smiled because she won the prize', but this game asks for the order shown.",
    tip: 'Use the past perfect to show which of two past events came first.',
  },
  'After we had eaten we watched television': {
    why: "'After we had eaten' is a subordinate clause of time, and it comes first. 'We watched television' is the main clause. 'After' shows which action happened first.",
    more: "'Had eaten' is the past perfect, showing that eating came before watching. With 'after', the simple past is also fine: 'After we ate, we watched television.'",
    tip: "Written down, put a comma after the opening clause: 'After we had eaten, we watched television.'",
  },
  'The man who lives next door is a doctor': {
    why: "'Who lives next door' is a relative clause that tells us which man. It sits straight after 'The man', and the main verb 'is' comes after it. 'Who' is used for people.",
    more: "The relative clause identifies the man. The same tiles also build 'The man who is a doctor lives next door', which is correct English too, but this game asks for the order shown.",
    tip: "Use 'who' for people, 'which' for things and 'that' for either. A relative clause comes right after the noun it describes.",
  },
  'Before you leave please close the window': {
    why: "'Before you leave' is a subordinate clause of time. It comes first, then the polite command 'please close the window'. The command has no stated subject, because 'you' is understood.",
    more: "In a command the subject 'you' is understood. 'Please' can come before the verb or at the end: 'Before you leave close the window please' is also correct English, but this game asks for the order shown.",
    tip: "Written down, put a comma after the opening clause: 'Before you leave, please close the window.'",
  },
  'Even though it was expensive they bought it': {
    why: "'Even though it was expensive' is a subordinate clause that shows a strong contrast. 'They bought it' is the main clause. 'Even though' is two words that work as one conjunction.",
    more: "'Even though' is stronger than 'although'. It stresses a fact that makes the main clause surprising. Compare 'even if', which talks about a possibility rather than a fact.",
    tip: "Use 'even though' when you want to stress a surprising contrast. Put a comma after the clause when it comes first.",
  },
  'Since we moved here we have made new friends': {
    why: "'Since we moved here' is a subordinate clause that gives a starting point in time. 'We have made new friends' is the main clause, in the present perfect. The past simple follows 'since' and the present perfect is in the main clause.",
    more: "'Since' means 'from that time until now'. The present perfect ('have made') links the past to the present. 'Here' can move: 'Since we moved we have made new friends here' is also correct English, but this game asks for the order shown.",
    tip: "After 'since' and a past event, the main clause usually uses the present perfect: 'we have made', not 'we make'.",
  },
  'Unless you hurry you will miss the train': {
    why: "'Unless you hurry' is a subordinate clause that means 'if you do not hurry'. 'You will miss the train' is the main clause. The 'unless' clause comes first.",
    more: "'Unless' already carries a negative meaning, so we do not add 'not': 'Unless you hurry', not 'Unless you do not hurry'. It is used in the first conditional.",
    tip: "Change 'Unless you hurry' to 'If you do not hurry'. If the meaning is the same, 'unless' fits.",
  },
  'The café where we met has now closed': {
    why: "'Where we met' is a relative clause that tells us which café. It follows the noun 'café', and the main verb 'has closed' comes after it, with 'now' between 'has' and 'closed'.",
    more: "'Where' is used for places. 'Has closed' is the present perfect: the closing affects the present. 'Now' can move: 'The café where we met has closed now' is also correct English, but this game asks for the order shown.",
    tip: "Use 'where' to add detail about a place without starting a new sentence: 'the café where we met'.",
  },
  'As soon as the film ended we left': {
    why: "'As soon as the film ended' is a subordinate clause of time meaning 'immediately after'. 'We left' is the main clause. 'As soon as' is three words that act as one conjunction.",
    more: "'As soon as' links two actions that follow each other closely. In writing, put a comma after the opening clause: 'As soon as the film ended, we left.' 'As soon as we left the film ended' is also correct English, with a different meaning, but this game asks for the order shown.",
    tip: "Use 'as soon as' to show that one thing happened straight after another, in stories and in accounts of events.",
  },
  'Whenever I visit London I see the museums': {
    why: "'Whenever I visit London' is a subordinate clause meaning 'every time that I visit London'. 'I see the museums' is the main clause. Both verbs are in the present simple, because this happens regularly.",
    more: "'Whenever' means 'every time that'. In writing, put a comma after the opening clause. The tiles also make 'Whenever I see London I visit the museums', which is correct English too, but this game asks for the order shown.",
    tip: "Use 'whenever' with the present simple for habits: 'Whenever it rains, I stay in.'",
  },
}
