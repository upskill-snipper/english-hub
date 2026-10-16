import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Punctuation Repair: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/punctuation-repair.ts). Written with AI on 16
 * October 2026 and checked against each question and its options, as the founder
 * decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'the dog ran across the field': {
    why: "A sentence starts with a capital letter and a statement ends with a full stop. 'The dog ran across the field.' has both. The words 'dog' and 'field' stay lower case because they are common nouns, not names.",
    not: {
      'the dog ran across the field.':
        'It has the full stop, but the first word has no capital letter. Every sentence must start with one.',
      'The dog ran across the field':
        'It starts correctly, but there is no full stop. A statement needs one at the end to show that it is finished.',
      'The Dog ran across the Field.':
        "'Dog' and 'Field' are common nouns, so they stay in lower case. Capitals are for the first word, names and 'I'.",
    },
    more: "Capital letters mark the start of a sentence, names, places, days, months and the pronoun 'I'. Most other words stay lower case, even a word that feels important.",
    tip: 'Before you hand in any piece of writing, check each sentence for a capital letter at the start and a full stop, question mark or exclamation mark at the end.',
  },
  'we visited london in july': {
    why: "'London' is the name of a place and 'July' is the name of a month, so both need capital letters. 'We' needs one because it starts the sentence. A full stop ends the statement.",
    not: {
      'We visited london in july.':
        "The first word is right, but 'London' is a place name and 'July' is a month. Both need capital letters.",
      'we visited London in July':
        'The names are right, but the sentence starts with a lower-case letter and has no full stop.',
      'We Visited London In July.':
        "'Visited' and 'In' are ordinary words, so they stay lower case. Only 'We', 'London' and 'July' need capitals.",
    },
    more: 'Proper nouns, the names of particular people, places, months and days, always take capitals: Sarah, Manchester, Friday. The seasons do not: summer, winter.',
    tip: 'Capitals on days and months are easy marks to win. Monday to Sunday and January to December always start with one.',
  },
  'my friend sarah lives in manchester': {
    why: "'Sarah' and 'Manchester' are names, so they take capital letters, and 'My' takes one because it opens the sentence. The word 'friend' is ordinary, so it stays lower case.",
    not: {
      'My friend sarah lives in manchester.':
        "'Sarah' is a person's name and 'Manchester' is a city, so each needs a capital letter. Neither has one here.",
      'my friend Sarah lives in Manchester.':
        "The names are right, but the sentence starts with a lower-case 'm'.",
      'My Friend Sarah Lives In Manchester.':
        "Apart from 'My', only the names need capitals. 'Friend', 'Lives' and 'In' are ordinary words and should be lower case.",
    },
    more: "A title takes a capital when it is part of a name, as in 'Aunt Sarah' or 'Dr Patel'. A plain noun like 'friend' does not.",
    tip: "Ask yourself whether a word is the particular name of a person or place. If it is, use a capital. If it is just a kind of thing, such as 'city' or 'friend', do not.",
  },
  'the film starts at eight oclock': {
    why: "'O'clock' is short for 'of the clock'. The apostrophe stands in for the missing letters, so it goes after the 'o'. The sentence also needs a capital letter at the start and a full stop at the end.",
    not: {
      'The film starts at eight oclock.':
        "'Oclock' is missing its apostrophe. The word is short for 'of the clock', so the apostrophe shows the missing letters.",
      "the film starts at eight o'clock.":
        "The apostrophe is right, but the sentence begins with a lower-case 't'.",
      "The film starts at eight o'clock":
        'The apostrophe and capital letter are right, but a full stop is missing at the end.',
    },
    more: "An apostrophe of omission marks where letters are missing, as in o'clock, don't and it's. It sits exactly where the letters were, not at the end of the word.",
    tip: "Write 'o'clock' with the apostrophe after the 'o'. Slips such as 'oclock' are easy to catch when you proofread.",
  },
  'i think we should leave now': {
    why: "The pronoun 'I' is always a capital letter, wherever it comes in a sentence. Here it also opens the sentence. The sentence is a statement, so it ends with a full stop.",
    not: {
      'i think we should leave now.':
        "The pronoun 'I' is always a capital letter, wherever it comes. Here it is lower case.",
      'I think we should leave now': "The 'I' is right, but a full stop is missing at the end.",
      'I Think We Should Leave Now.':
        "Only 'I' needs a capital here, and it is also the first word. 'Think', 'We', 'Should', 'Leave' and 'Now' are ordinary words in the middle of a sentence.",
    },
    more: "'I' is the only pronoun that always has a capital: I, but he, she, it, we, they. In this sentence 'we' stays lower case because it does not start the sentence.",
    tip: "In texts and chats we often type 'i'. In school writing and exams, always write 'I', including in 'I'm' and 'I've'.",
  },
  'where are you going': {
    why: 'The sentence asks something and expects an answer, so it is a direct question and ends with a question mark. It also starts with a capital letter, as every sentence does.',
    not: {
      'Where are you going.':
        'This asks a question but ends with a full stop. A direct question needs a question mark.',
      'where are you going?':
        'The question mark is right, but the first word has no capital letter.',
      'Where are you going!':
        'An exclamation mark shows shock or strong feeling. This is a plain question, so it needs a question mark.',
    },
    more: "A question word (who, what, where, when, why, how) or a verb placed before the subject, as in 'Are you going', is a clue that a sentence is a question. A reported question takes no question mark: 'She asked where I was going.'",
    tip: 'If a sentence asks something and expects an answer, finish it with a question mark.',
  },
  'what a wonderful surprise': {
    why: "'What a wonderful surprise' is an exclamation: it shows strong feeling and starts with 'What'. It is not asking anything, so it ends with an exclamation mark, and it begins with a capital letter.",
    not: {
      'What a wonderful surprise.':
        'This sentence shows strong feeling, so a flat full stop makes it sound dull. An exclamation usually ends with an exclamation mark.',
      'what a wonderful surprise!':
        'The exclamation mark is right, but the first word needs a capital letter.',
      'What a wonderful surprise?':
        'It does not ask anything, so it does not take a question mark.',
    },
    more: "An exclamation often begins with 'What' or 'How' and shows surprise, joy or anger. Use exclamation marks sparingly, because too many make them lose their power.",
    tip: 'Keep exclamation marks for real feeling. In formal writing and exam answers, you will rarely need one.',
  },
  'can you help me carry these books': {
    why: "'Can you help me' is built as a question, with the verb 'can' before the subject 'you'. It is a polite request, but it still ends with a question mark and starts with a capital letter.",
    not: {
      'Can you help me carry these books.':
        "It sounds like a polite request, but it is built as a question, with 'Can' before 'you', so it needs a question mark.",
      'can you help me carry these books?':
        'The question mark is right, but the first word has no capital letter.',
      'Can you help me carry these books!':
        'This is a calm request, not a shout or a strong feeling, so an exclamation mark does not fit.',
    },
    more: "Many polite requests are questions in form, such as 'Could you open the door?' and 'Would you mind waiting?' If you could answer it with yes or no, it takes a question mark.",
    tip: 'A request in question form sounds more polite than a command. Use it in letters and emails to adults.',
  },
  'look out for that car': {
    why: "'Look out for that car' is a warning given in a hurry. A command that shows danger or strong feeling takes an exclamation mark, and the first word needs a capital letter.",
    not: {
      'Look Out For That Car!':
        "The exclamation mark is right, but only the first word needs a capital. 'Out', 'For', 'That' and 'Car' are ordinary words.",
      'Look out for that car?':
        'It is a warning, not a question, so it does not take a question mark.',
      'look out for that car!':
        'The exclamation mark is right, but the first word needs a capital letter.',
    },
    more: "A command can end with a full stop when it is calm, such as 'Close the door.' When it is urgent, it takes an exclamation mark. The mark shows how loudly the words would be spoken.",
    tip: 'When you write dialogue, match the mark to the voice. A warning shouted across a road needs an exclamation mark.',
  },
  'did she really say that': {
    why: "'Did she really say that' asks for an answer. The helping verb 'did' comes before the subject 'she', which is how English builds a question. So it ends with a question mark and starts with a capital letter.",
    not: {
      'Did she really say that!':
        "It is worded as a question, with 'Did' before 'she', so it ends with a question mark, not an exclamation mark.",
      'did she really say that?':
        'The question mark is right, but the first word needs a capital letter.',
      'Did she really say that.':
        'A full stop ends a statement. This sentence asks something, so it needs a question mark.',
    },
    more: "Questions often swap the order of subject and verb: 'She did say that' becomes 'Did she say that?' The word 'really' adds disbelief but does not change the punctuation.",
    tip: 'Do not let surprise tempt you into an exclamation mark. If a sentence is built as a question, finish it with a question mark.',
  },
  'how did you manage to fix it so quickly': {
    why: "The question word 'how' and the verb 'did' before 'you' show that this is a direct question, so it ends with a question mark. It also starts with a capital letter.",
    not: {
      'How did you manage to fix it so quickly.':
        "This asks 'how', so it is a direct question and needs a question mark, not a full stop.",
      'how did you manage to fix it so quickly?':
        'The question mark is right, but the first word needs a capital letter.',
      'How did you manage to fix it so quickly':
        'The capital letter is right, but a question mark is missing at the end.',
    },
    more: "Question words such as how, what, why and where start many questions. A reported question takes no question mark: 'He asked how I had fixed it so quickly.'",
    tip: 'When you proofread, check the last mark of every sentence. A missing question mark is one of the most common slips.',
  },
  'i bought apples bananas grapes and oranges': {
    why: "Items in a list are separated by commas, and 'and' takes the place of the last comma. So the fruits read: apples, bananas, grapes and oranges. The sentence starts with a capital and ends with a full stop.",
    not: {
      'I bought apples bananas grapes and oranges.':
        'Without commas, the four fruits run together. Commas keep the items in a list apart.',
      'I bought, apples, bananas, grapes and oranges.':
        "There should be no comma after 'bought'. The commas separate the items in the list; they do not separate the verb from the list.",
      'I bought apples, bananas, grapes, and, oranges.':
        "The comma after 'and' is wrong, because 'and' joins 'grapes' to 'oranges'. These commas break 'grapes', 'and' and 'oranges' apart.",
    },
    more: "Some writers add a comma before the final 'and' (the Oxford comma). It is not wrong, but school style usually leaves it out unless it avoids confusion. Do not put a comma straight after the word that introduces the list.",
    tip: "Read your list aloud. Each pause between items needs a comma, except the one before the final 'and'.",
  },
  'she packed a towel sun cream a hat and a book': {
    why: "There are four items: a towel, sun cream, a hat and a book. Commas go between them, and 'and' joins the last two. Without a comma after 'towel', the reader would see 'a towel sun cream' as one odd item.",
    not: {
      'She packed a towel sun cream, a hat and a book.':
        "A comma is missing after 'towel', so 'a towel sun cream' reads like one item. Each item needs separating.",
      'She packed a towel, sun cream, a hat, and a book,':
        'The sentence ends with a comma instead of a full stop, so it never finishes. The full stop belongs after the last item.',
      'she packed a towel, sun cream, a hat and a book.':
        'The commas are right, but the first word needs a capital letter.',
    },
    more: "Items in a list can be single words or longer phrases, such as 'a towel' or 'sun cream'. A comma separates each phrase, so the reader knows where one ends and the next begins.",
    tip: 'The longer the items, the more the commas matter. Check that you have one wherever the reader needs to see a break.',
  },
  'the recipe needs flour butter sugar and eggs': {
    why: "Four ingredients make a list, so commas separate flour, butter and sugar, and 'and' joins the last two. The commas stay inside the list: none goes after 'recipe' or 'needs'.",
    not: {
      'The recipe needs flour butter, sugar and eggs.':
        "A comma is missing between 'flour' and 'butter', so they run together. Each item in a list needs one.",
      'The recipe, needs, flour, butter, sugar and eggs.':
        "The first two commas are wrong. A comma should not split the subject 'recipe' from its verb 'needs', or the verb from the list it introduces.",
      'The recipe needs flour, butter, sugar and eggs':
        'The commas are right, but the full stop is missing at the end.',
    },
    more: "A single comma should not come between a subject and its verb ('The recipe needs') or between a verb and its object. Commas in a list go between the items only.",
    tip: 'Do not scatter commas wherever you take a breath. In a list, put them between items and nowhere else.',
  },
  'we hiked swam cycled and camped during the trip': {
    why: "The sentence lists four things 'we' did: hiked, swam, cycled and camped. Commas separate the first three verbs and 'and' joins the last two. 'During the trip' belongs to all four, so no comma comes before it.",
    not: {
      'We hiked swam cycled and camped during the trip.':
        "Without commas, 'hiked swam cycled' runs together and is hard to follow. Separate the verbs with commas.",
      'We hiked, swam, cycled, and camped, during the trip.':
        "The comma after 'camped' is wrong. It splits the last verb from 'during the trip', which belongs with the whole list.",
      'we hiked, swam, cycled and camped during the trip.':
        'The commas are right, but the first word needs a capital letter.',
    },
    more: "A list can be made of verbs, nouns, adjectives or phrases. The rule is the same each time: commas between the items, 'and' before the last one, and no comma after the last item.",
    tip: 'Lists of verbs make narrative writing lively and quick. Keep the verbs in the same tense, as here.',
  },
  'the flag was red white and blue': {
    why: "Red, white and blue are three colours in a list. A comma separates the first two, and 'and' joins the last two. No comma follows 'was', because no comma separates a verb from the list that completes it.",
    not: {
      'The flag was red white and blue.':
        "A comma is missing between 'red' and 'white'. Items in a list need commas, even short ones.",
      'The flag was red, white, and, blue.':
        "The comma after 'and' is wrong, because 'and' joins 'white' to 'blue'. These commas break the list up.",
      'The flag was, red, white and blue.':
        "The comma after 'was' is wrong. It splits the verb from what describes the flag. Commas go between list items only.",
    },
    more: "Adjectives in a list follow the same comma rule as nouns. Commas also separate describing words before a noun when each one describes it on its own, as in 'a long, cold winter'.",
    tip: "When you list colours, join the last two with 'and' and usually no comma: red, white and blue.",
  },
  'because it was raining we stayed indoors': {
    why: "'Because it was raining' is a subordinate clause: it cannot stand alone, and here it comes first. A comma separates it from the main clause, 'we stayed indoors'. A capital letter and a full stop complete the sentence.",
    not: {
      'Because it was raining we stayed indoors.':
        "'Because it was raining' is an opening clause. In school writing a comma follows it, to show where the main clause begins, and here there is none.",
      'because it was raining, we stayed indoors.':
        'The comma is right, but the first word needs a capital letter.',
      'Because it was raining, we stayed indoors':
        'The comma and capital letter are right, but a full stop is missing at the end.',
    },
    more: "When the subordinate clause comes second, you usually need no comma: 'We stayed indoors because it was raining.' The comma marks the point where the opening clause ends and the main clause begins.",
    tip: 'Spot sentences that open with because, although, when, if or after, and put a comma after that opening clause.',
  },
  'after the match had finished the players shook hands': {
    why: "'After the match had finished' tells us when, but it cannot stand alone, so it is a subordinate clause at the front. A comma goes after it, before the main clause 'the players shook hands'.",
    not: {
      'After the match had finished the players shook hands.':
        "'After the match had finished' is an opening clause. It needs a comma, or 'finished the players' runs together.",
      'After the match had finished, the players shook hands':
        'The comma is right, but there is no full stop at the end.',
      'after the match had finished, the players shook hands.':
        'The comma is right, but the first word needs a capital letter.',
    },
    more: "Without the comma, a reader can stumble: 'After the match had finished the players' looks like one idea about the players. The comma shows where the first idea ends.",
    tip: "Try starting some of your sentences with 'After', 'When' or 'Before' and a clause. It adds variety, and the comma rule is the same each time.",
  },
  'although she was tired she finished her homework': {
    why: "'Although she was tired' is a subordinate clause that sets up a contrast. When it opens a sentence, a comma follows it, before the main clause 'she finished her homework'.",
    not: {
      'Although she was tired she finished her homework.':
        "'Although she was tired' is an opening clause. In school writing a comma follows it, to show where the main clause begins, and here there is none.",
      'although she was tired, she finished her homework.':
        'The comma is right, but the first word needs a capital letter.',
      'Although she was tired, she finished her homework':
        'The comma and capital letter are right, but a full stop is missing at the end.',
    },
    more: "'Although' signals that the main clause is unexpected, because tired people often stop. 'Though', 'while' and 'whereas' work the same way, and all take a comma when they open the sentence.",
    tip: "Use 'although' in essays to show you have weighed two sides, and put the comma after the first clause.",
  },
  'when the bell rang the students left the room': {
    why: "'When the bell rang' tells us the time but cannot stand alone, so it is a subordinate clause. A comma goes after it, at the join with the main clause 'the students left the room'.",
    not: {
      'When the bell rang the students left the room.':
        "'When the bell rang' is an opening clause and needs a comma after it. Without one, 'rang the students' runs on.",
      'when the bell rang, the students left the room.':
        'The comma is right, but the first word needs a capital letter.',
      'When the bell rang the students, left the room.':
        "The comma is in the wrong place. It splits the subject 'the students' from its verb 'left'. It belongs after 'rang'.",
    },
    more: "The comma goes where the first clause ends, not where you would pause for breath. A comma between a subject and its verb, as in 'the students, left', is almost always a mistake.",
    tip: 'Find the verb of the opening clause (rang) and the new subject (the students). The comma goes between the two.',
  },
  'suddenly the lights went out': {
    why: "'Suddenly' is a fronted adverbial: an opener that tells how or when something happened, placed before the main clause. School punctuation rules put a comma after it. The sentence then needs a capital letter and a full stop.",
    not: {
      'Suddenly, the lights, went out.':
        "The first comma is right, but the second splits the subject 'the lights' from its verb 'went out'. Take it out.",
      'suddenly, the lights went out.':
        'The comma is right, but the first word needs a capital letter.',
      'Suddenly the lights went out':
        "A full stop is missing at the end, and the usual school rule also puts a comma after an opener such as 'Suddenly'.",
    },
    more: "A fronted adverbial can be one word ('Suddenly'), a phrase ('Later that night') or a clause ('When the lights went out'). In school writing, each is followed by a comma to mark where the main clause begins.",
    tip: "Try openers such as 'Suddenly', 'Without warning' or 'Moments later' in your stories, each followed by a comma. They add drama and move time on quickly.",
  },
  'if you finish early you may go outside': {
    why: "'If you finish early' sets a condition and opens the sentence, so a comma follows it. The main clause, 'you may go outside', then says what happens if the condition is met.",
    not: {
      'If you finish early you may go outside.':
        "'If you finish early' is an opening clause. In school writing a comma follows it, so that 'early' and 'you' do not run together.",
      'if you finish early, you may go outside.':
        'The comma is right, but the first word needs a capital letter.',
      'If you finish early, you may go outside':
        'The comma and capital letter are right, but a full stop is missing at the end.',
    },
    more: "A clause that begins with 'if' is a conditional clause. It can come second without a comma: 'You may go outside if you finish early.' Moved to the front, it takes one.",
    tip: "In rules and instructions, put the condition first and add the comma, as in 'If you finish early, put your hand up.'",
  },
  'meanwhile the rest of the team kept practising': {
    why: "'Meanwhile' links this sentence to what was happening elsewhere. It is a fronted adverbial of time, so a comma follows it. After that comes the main clause.",
    not: {
      'Meanwhile, the rest of the team kept practising':
        'The comma is right, but there is no full stop at the end.',
      'meanwhile, the rest of the team kept practising.':
        'The comma is right, but the first word needs a capital letter.',
      'Meanwhile the rest of the team, kept practising.':
        "This comma splits the subject, 'the rest of the team', from its verb, 'kept'. The comma belongs after 'Meanwhile'.",
    },
    more: "Linking openers such as 'Meanwhile', 'Later', 'Afterwards' and 'However' usually take a comma after them. They guide the reader through time or from one idea to the next.",
    tip: "Use a time opener such as 'Meanwhile,' to show two events happening together in a story.",
  },
  'it was late, we went home': {
    why: "'It was late' and 'we went home' could each be a sentence. A comma cannot join them, but 'so' can, with a comma before it. It shows that the first fact caused the second.",
    not: {
      'It was late, we went home.':
        'This joins two full sentences with only a comma. That mistake is called a comma splice. A comma is too weak to do the job alone.',
      'It was late we went home.':
        'The two sentences are run together with nothing between them. They need a joining word or a stronger mark.',
      'It was late, so we went home':
        "The comma and 'so' fix the problem, but a full stop is missing at the end.",
    },
    more: "A comma splice joins two main clauses with just a comma. Fix it by adding a conjunction (so), using a semicolon, starting a new sentence, or making one part subordinate: 'Because it was late, we went home.'",
    tip: 'To check a comma, ask whether the words on each side could stand alone as sentences. If they could, a comma alone is not enough.',
  },
  'the test was hard, everyone passed it': {
    why: "The two parts contrast: the test was hard, yet everyone passed. 'But' shows that contrast and joins them, with a comma before it. A comma alone cannot join two complete sentences.",
    not: {
      'The test was hard, everyone passed it.':
        "A comma alone joins two full sentences here, which makes a comma splice. A joining word such as 'but' is needed.",
      'The test was hard everyone passed it.':
        'The two sentences run into each other with no punctuation or joining word.',
      'The test was hard, but everyone passed it':
        "The comma and 'but' are right, but a full stop is missing at the end.",
    },
    more: "'But' is a coordinating conjunction. Others are 'and', 'or', 'so' and 'yet'. When they join two main clauses, usually put a comma before them.",
    tip: "Use 'but' when the second idea goes against the first. It helps you show contrast in a review or discussion.",
  },
  'she loves reading, her brother prefers sport': {
    why: "'She loves reading' and 'her brother prefers sport' are two complete sentences with related ideas. A semicolon joins them neatly, without a conjunction. A comma alone is too weak.",
    not: {
      'She loves reading, her brother prefers sport.':
        'A comma alone is too weak to join two complete sentences. This comma splice needs a semicolon or a conjunction.',
      'She loves reading her brother prefers sport.':
        'The two sentences are fused with no mark between them, so the reader gets lost.',
      'She loves reading, her brother, prefers sport.':
        "The second comma splits the subject, 'her brother', from its verb, 'prefers'. The first comma still joins two sentences with a comma alone.",
    },
    more: "Semicolons suit two main clauses that are closely linked, often as a contrast, like these. The word after a semicolon starts in lower case, unless it is 'I' or a name.",
    tip: 'Use a semicolon when two short, balanced sentences belong together. Do not overuse it: one or two in a piece of writing is plenty.',
  },
  'the rain stopped, the sun came out': {
    why: "The rain stopping and the sun coming out are two events, one after the other. 'And' joins them, with a comma before it. The comma and the conjunction together do the job that a comma alone cannot.",
    not: {
      'The rain stopped, the sun came out.':
        'This is a comma splice: two complete sentences joined by a comma alone. A conjunction is needed after the comma.',
      'The rain stopped the sun came out.':
        'The two sentences are run together with no punctuation or joining word.',
      'The rain stopped and, the sun came out.':
        "The comma is in the wrong place. It goes before 'and' when 'and' joins two sentences, not after it.",
    },
    more: "Put the comma before the conjunction, not after it. The same pattern works with 'but', 'so' and 'or' when they join two main clauses.",
    tip: "When you read your work back, look for commas in the middle of a sentence that join two full ideas. Add 'and', 'but' or 'so' after them.",
  },
  'he trained every day, he wanted to win': {
    why: "The second part, 'he wanted to win', explains the first. 'Because' joins the reason to the main clause. It makes the second part subordinate, so it cannot stand alone, and no comma is needed before it.",
    not: {
      'He trained every day, he wanted to win.':
        "A comma alone joins two complete sentences, which is a comma splice. 'Because' would join them properly.",
      'He trained every day he wanted to win.':
        'The two sentences are run together with no mark or joining word, and the reason is not clear.',
      'He trained every day, because, he wanted to win.':
        "The comma after 'because' is wrong. It cuts the conjunction off from 'he wanted to win'.",
    },
    more: "'Because' is a subordinating conjunction. Joining clauses this way also fixes a comma splice. Other subordinating conjunctions include 'since', 'although' and 'while'. No comma is needed when the 'because' clause comes second.",
    tip: "A 'because' clause is a quick way to explain in an exam answer. State your point, then say 'because' and give the reason.",
  },
  'we waited for an hour, the bus never arrived': {
    why: "'We waited for an hour' and 'The bus never arrived' can each stand alone, so the simplest fix is a full stop between them. The new sentence then starts with a capital letter.",
    not: {
      'We waited for an hour, the bus never arrived.':
        'Two full sentences are joined by a comma alone. This comma splice needs a full stop or a conjunction.',
      'We waited for an hour the bus never arrived.':
        'The sentences are run together, with nothing to separate them.',
      'We waited for an hour, the bus never arrived':
        'This keeps the comma splice and has no full stop at the end.',
    },
    more: 'Making two sentences is the easiest way to mend a comma splice, and it gives the second idea more weight. Choose a conjunction or a semicolon when you want the ideas to feel closely linked.',
    tip: "If a long sentence gets tangled, split it. Short sentences can be powerful, especially for a surprise such as 'The bus never arrived.'",
  },
  'the museum was closed, we visited the park instead': {
    why: "The museum being closed is the reason they went to the park. 'So' shows that result and joins the two sentences, with a comma before it. 'Instead' tells us the park was their back-up plan.",
    not: {
      'The museum was closed, we visited the park instead.':
        'This comma splice joins two complete sentences with a comma alone. A joining word is needed after the comma.',
      'The museum was closed we visited the park instead.':
        'The two sentences are run together with no mark or joining word.',
      'The museum was closed so, we visited the park instead.':
        "The comma is in the wrong place. It should come before 'so' when 'so' joins two sentences, not after it.",
    },
    more: "'So' is a coordinating conjunction of result. It joins two main clauses of equal weight. Do not confuse it with the adverb 'so' in 'so tired'.",
    tip: "'So' links cause and result. In your writing, start with the cause and then use 'so' to give the result.",
  },
  'come here at once said the teacher': {
    why: "The teacher's spoken words go inside speech marks. The comma after 'once' also goes inside them, and it takes the place of a full stop. 'said the teacher' follows in lower case, because the sentence is not finished.",
    not: {
      '"Come here at once" said the teacher.':
        "The speech marks are right, but a comma is missing after 'once'. It must sit inside the closing speech mark.",
      'Come here at once, said the teacher.':
        'Speech marks are missing. They show exactly which words were spoken.',
      '"Come here at once", said the teacher.':
        'The comma is outside the speech marks. It should be inside, before the closing speech mark.',
    },
    more: "When the spoken words come first, they end with a comma, question mark or exclamation mark inside the speech marks. Then the reporting clause ('said the teacher') begins with a lower-case letter.",
    tip: 'If a reporting clause follows the speech, end the spoken words with a comma inside the speech marks, then carry on in lower case.',
  },
  'tom asked are we nearly there yet': {
    why: "Tom's words are a question, so they sit in speech marks and end with a question mark inside the closing mark. A comma after 'asked' introduces the speech, and the speech starts with a capital letter.",
    not: {
      'Tom asked, "Are we nearly there yet".':
        'The question mark is missing. It belongs inside the speech marks, as part of what Tom said.',
      'Tom asked "are we nearly there yet?"':
        'A comma is missing before the speech marks, and the spoken sentence must begin with a capital letter.',
      'Tom asked, Are we nearly there yet?':
        'There are no speech marks, so we cannot tell which words Tom said.',
    },
    more: 'When the reporting clause comes first, put a comma before the opening speech marks. The question mark stays inside the speech marks because the question is part of the speech.',
    tip: 'Put the question mark inside the speech marks when it belongs to the words spoken.',
  },
  'i am so excited shouted maya': {
    why: "Maya shouts, so her words end with an exclamation mark inside the closing speech mark. The reporting clause, 'shouted Maya', follows in lower case, and 'Maya' keeps its capital because it is a name.",
    not: {
      '"I am so excited" shouted Maya.':
        'Nothing ends the spoken words. A shout needs an exclamation mark, or at least a comma, inside the speech marks.',
      '"I am so excited," shouted maya.':
        "'Maya' is a name, so it needs a capital letter, even though it follows speech marks.",
      'I am so excited! shouted Maya.':
        'Speech marks are missing, so the reader cannot see which words Maya shouted.',
    },
    more: "After an exclamation mark or question mark inside speech marks, the reporting clause starts with a lower-case letter, unless it begins with a name. The words 'shouted Maya' start in lower case, but 'Maya shouted' would start with a capital.",
    tip: "Use a verb such as 'shouted' or 'cried' with an exclamation mark to show volume. Do not put both a comma and an exclamation mark after the speech.",
  },
  'the guide explained this castle is over 800 years old': {
    why: "The guide's exact words go inside speech marks. A comma after 'explained' introduces them, and the speech starts with a capital letter, 'This', because it is a new sentence. The full stop sits inside the closing speech mark.",
    not: {
      'The guide explained "This castle is over 800 years old".':
        "A comma is missing after 'explained', and the full stop belongs inside the speech marks, because the speech is a complete sentence.",
      'The guide explained, this castle is over 800 years old.':
        "Speech marks are missing, so it is not clear that these are the guide's exact words.",
      'The guide explained, "this castle is over 800 years old."':
        'The speech marks are right, but the spoken sentence must start with a capital letter, as any sentence does.',
    },
    more: 'When the reporting clause comes first, the spoken words are punctuated like their own sentence: a capital letter to start and a full stop, question mark or exclamation mark inside the speech marks to end.',
    tip: "Keep the speech marks around the spoken words only. Everything else, such as 'The guide explained', stays outside.",
  },
  'please be quiet whispered the librarian': {
    why: "The librarian's whispered words go in speech marks, with a comma inside the closing mark. Then 'whispered the librarian' carries on in lower case, because it is part of the same sentence. 'Librarian' is a job, not a name.",
    not: {
      '"Please be quiet" whispered the librarian.':
        "A comma is missing after 'quiet'. It belongs inside the closing speech mark, before the reporting clause.",
      '"Please be quiet," whispered the Librarian.':
        "'Librarian' is a job, not a name, so it stays lower case. Capitals are for the start of a sentence and for names.",
      'Please be quiet, whispered the librarian.':
        'There are no speech marks, so the reader cannot tell which words were whispered.',
    },
    more: "A job such as 'librarian' or 'teacher' is lower case. A title used with a name, such as 'Dr Patel' or 'Mrs Khan', takes capitals.",
    tip: 'Vary your reporting verbs to show tone: whispered, snapped, muttered. The punctuation stays the same.',
  },
  'she said i will meet you after school': {
    why: "'She said' introduces her exact words, so a comma follows it. The spoken words go in speech marks, begin with a capital letter and end with a full stop inside the closing mark.",
    not: {
      'She said "I will meet you after school."':
        "A comma is missing after 'said'. It introduces the spoken words.",
      'She said, "i will meet you after school."':
        "The speech starts a new sentence, and 'I' is always a capital letter. This one is lower case.",
      'She said, I will meet you after school.':
        'Speech marks are missing, so the reader cannot see which words she said.',
    },
    more: 'Direct speech repeats the exact words: She said, "I will meet you." Reported speech changes them and needs no speech marks: She said that she would meet me.',
    tip: 'Use direct speech to bring a character to life, and reported speech when you only need the information.',
  },
  'wait for me called jack': {
    why: "Jack is calling out, so his words go in speech marks and end with an exclamation mark inside the closing mark. Then 'called' follows in lower case. 'Jack' is a name, so it has a capital letter.",
    not: {
      '"Wait for me" called Jack.':
        'The spoken words end with no punctuation inside the speech marks. A call or shout needs an exclamation mark, or at least a comma.',
      '"Wait for me!" called jack.': "'Jack' is a name, so it must have a capital letter.",
      'Wait for me! called Jack.':
        'There are no speech marks, so the words Jack called are not marked off.',
    },
    more: "A character's call, shout or cry usually ends with an exclamation mark. The reporting clause stays lower case after it, unless it starts with a name.",
    tip: 'Match the punctuation to the way the line is said. A call needs an exclamation mark; a calm remark needs a comma.',
  },
  'thats my sisters bicycle': {
    why: "There are two jobs for apostrophes here. 'That's' is short for 'that is', so the apostrophe replaces the missing 'i'. 'Sister's' shows that the bicycle belongs to one sister, so the apostrophe goes before the 's'.",
    not: {
      'Thats my sisters bicycle.':
        "Two apostrophes are missing: one in 'That's' (that is) and one in 'sister's' (belonging to the sister).",
      "Thats my sister's bicycle.":
        "The apostrophe in 'sister's' is right, but 'That's' is short for 'that is' and needs one too.",
      "That's my sisters bicycle.":
        "The apostrophe in 'That's' is right, but 'sister's' needs one to show that the bicycle belongs to the sister.",
    },
    more: 'Apostrophes do two jobs: they show missing letters (contraction) and they show belonging (possession). For each one, ask: is something missing, or does something belong to someone?',
    tip: "Never add an apostrophe just because a word ends in 's'. 'Sisters' with no apostrophe means more than one sister.",
  },
  'the dogs tail wagged happily': {
    why: "The tail belongs to one dog, so we add an apostrophe and 's' to the singular noun: dog's. If the tails belonged to several dogs, the apostrophe would come after the 's'.",
    not: {
      'The dogs tail wagged happily.':
        "The tail belongs to the dog, so an apostrophe is needed. Without it, 'dogs' just looks like more than one dog.",
      "The dogs' tail wagged happily.":
        "An apostrophe after the 's' would mean several dogs shared one tail. A wagging tail belongs to one dog, so the apostrophe goes before the 's'.",
      "The dog's tail wagged happily":
        'The apostrophe is right, but a full stop is missing at the end.',
    },
    more: "For one owner, add 's: the dog's tail, the girl's bag. For several owners, in a plural that ends in s, add only an apostrophe: the dogs' tails, the girls' bags.",
    tip: 'To place the apostrophe, ask who owns the thing. One owner: apostrophe before the s. Several owners, in a plural that ends in s: after it.',
  },
  'we couldnt find the keys anywhere': {
    why: "'Couldn't' is short for 'could not'. The 'o' of 'not' is left out, and the apostrophe goes in its place, between the 'n' and the 't'. The sentence then ends with a full stop.",
    not: {
      'We couldnt find the keys anywhere.':
        "'Couldn't' is short for 'could not'. The apostrophe replaces the missing 'o', and it is missing here.",
      "We could'nt find the keys anywhere.":
        "The apostrophe is in the wrong place. It must go where the 'o' of 'not' was dropped, between the 'n' and the 't'.",
      "We couldn't find the keys anywhere":
        'The apostrophe is right, but there is no full stop at the end.',
    },
    more: "In contractions the apostrophe sits where letters were removed: don't (do not), isn't (is not), it's (it is), I'm (I am), can't (cannot), won't (will not).",
    tip: 'Say the full words, then find what was left out. The apostrophe goes in the gap.',
  },
  'the players changing room was locked': {
    why: "The changing room belongs to the players, a plural noun ending in 's'. For plural owners that end in 's' we add only an apostrophe after the 's': players'.",
    not: {
      'The players changing room was locked.':
        "The changing room belongs to the players, so an apostrophe is needed. Without it, 'players' looks like a plain plural.",
      "The players's changing room was locked.":
        "'Players' already ends in 's', so only an apostrophe is added after it. A second 's' is a mistake.",
      'The players changing-room was locked.':
        "A hyphen does not show ownership. The word 'players' still needs an apostrophe.",
    },
    more: "Plural owners that end in s take just an apostrophe: the boys' team, the teachers' room. Plurals that do not end in s take 's: the children's room.",
    tip: 'Ask whether the owner is one or many. Then write the owner in full. If it ends in s, add only an apostrophe; if not, add apostrophe and s.',
  },
  'its going to be a long day isnt it': {
    why: "'It's' is short for 'it is' and 'isn't' for 'is not', so each needs an apostrophe. 'Isn't it' is a question tag, a short question added to a statement. A comma goes before it and a question mark ends the sentence.",
    not: {
      'Its going to be a long day isnt it?':
        "Both contractions are missing apostrophes: 'It's' (it is) and 'isn't' (is not). A comma is missing before 'isn't it' too.",
      "It's going to be a long day isn't it.":
        "The apostrophes are right, but a comma is needed before the tag 'isn't it', and the sentence must end with a question mark.",
      "Its going to be a long day, isn't it?":
        "'Its' without an apostrophe shows belonging. Here it means 'it is', so it needs an apostrophe: It's.",
    },
    more: "A question tag turns a statement into a question that asks for agreement, as in 'It's cold, isn't it?' A positive statement gets a negative tag, and a negative statement gets a positive one: 'It isn't cold, is it?'",
    tip: "If you are unsure between 'its' and 'it's', replace it with 'it is' or 'it has'. If the sentence still makes sense, use the apostrophe.",
  },
  'you will need the following a pen a ruler and paper': {
    why: "'You will need the following' is a complete statement that leads into a list. A colon introduces the list, and commas separate the items, with 'and' before the last one.",
    not: {
      'You will need the following, a pen, a ruler and paper.':
        "A comma is too weak to introduce a list. Use a colon after 'the following', then commas between the items.",
      'You will need the following; a pen, a ruler and paper.':
        'A semicolon joins two related full sentences. What follows here is only a list, so a colon is the right mark.',
      'You will need the following: a pen a ruler and paper.':
        'The colon is right, but the items need commas between them.',
    },
    more: "A colon often follows a complete sentence to introduce a list, an example or an explanation. Do not put one straight after a verb: 'You will need a pen, a ruler and paper' needs no colon.",
    tip: "Before a colon, check that you have a complete sentence. 'You will need the following' works because it could stand alone.",
  },
  'the journey was long the views were stunning': {
    why: "'The journey was long' and 'the views were stunning' are two complete sentences about the same trip. A semicolon joins them, because the ideas are closely related and the contrast between them matters.",
    not: {
      'The journey was long, the views were stunning.':
        'A comma alone cannot join two full sentences. This is a comma splice. Use a semicolon or a full stop instead.',
      'The journey was long the views were stunning.':
        'The two sentences run together with no mark between them.',
      'The journey was long: the views were stunning;':
        'The semicolon at the end is wrong: the sentence should finish with a full stop. The colon in the middle also promises an explanation, which does not follow.',
    },
    more: "A semicolon works like a soft full stop. Use it between two main clauses that are closely linked. What follows it starts in lower case, unless it is 'I' or a name, and each side must make sense alone.",
    tip: 'Try a semicolon when two short sentences set up a contrast, as here. Use it once or twice in a piece of writing, not in every paragraph.',
  },
  'there is one thing i value above all else honesty': {
    why: "'There is one thing I value above all else' is a complete statement that makes us wait for the answer. A colon introduces that answer, 'honesty'. Everything before the colon must be able to stand alone as a sentence.",
    not: {
      'There is one thing I value: above all else honesty.':
        "The colon cuts 'above all else' off from 'I value'. It belongs after 'else', just before the answer, 'honesty'.",
      'There is one thing I value above all else; honesty.':
        "A semicolon joins two full clauses. 'Honesty' is a single word, so it needs a colon.",
      'There is one thing I value above all else honesty.':
        "Nothing separates 'honesty' from the statement. A colon is needed to introduce the answer.",
    },
    more: 'A colon can introduce a list, an explanation or a single word that answers the opening. It creates a pause that builds emphasis, because the reader knows something important is coming.',
    tip: "In persuasive writing, a colon can add punch, as in 'One thing matters: honesty.' Make sure what comes before it is a full statement.",
  },
  'my favourite subjects are english history and art': {
    why: "'English' is a language, so it takes a capital letter, but 'history' and 'art' are ordinary subject names and stay lower case. The three subjects form a list, so a comma separates the first two and 'and' joins the last.",
    not: {
      'My favourite subjects are english, history and art.':
        "'English' is a language, and the names of languages always take a capital letter.",
      'My favourite Subjects are English, history and art.':
        "'Subjects' is an ordinary word in the middle of a sentence, so it is lower case. Apart from 'My', only 'English' needs a capital here.",
      'My favourite subjects, are English, history and art.':
        "The comma after 'subjects' splits the subject from its verb 'are'. Commas belong between the items in the list, not before the verb.",
    },
    more: "Languages such as English, French and Arabic always take capital letters, and so do nationalities. Other school subjects usually do not, unless they are part of an official title, such as 'Department of History'.",
    tip: 'A quick rule: if it is a language, use a capital letter. Subjects such as maths, science and geography are normally lower case.',
  },
  'on monday we have a science test': {
    why: "'Monday' is the name of a day, so it takes a capital letter. 'On Monday' is a fronted adverbial telling us when, so school punctuation rules put a comma after it. The sentence begins with a capital and ends with a full stop.",
    not: {
      'On monday we have a science test.':
        "Days of the week are proper nouns, so 'Monday' needs a capital letter. The usual school rule also puts a comma after 'On Monday'.",
      'on Monday we have a science test.':
        "'Monday' is right, but the sentence must begin with a capital letter, so 'On'. The usual school rule also puts a comma after 'On Monday'.",
      'On Monday we have a science test':
        "A full stop is missing at the end, and the usual school rule also puts a comma after an opener such as 'On Monday'.",
    },
    more: "Days, months and holidays take capital letters: Monday, March, Eid, Christmas. Subjects such as 'science' do not. A comma often follows an opener of time, such as 'On Monday' or 'After lunch'.",
    tip: 'Opening a sentence with a time phrase and a comma is a simple way to vary your sentences. Remember the capital on the day.',
  },
  'help i cant swim he yelled': {
    why: "The words he yelled go in speech marks. A comma follows 'Help' because it is a separate cry, 'can't' needs an apostrophe for 'cannot', and an exclamation mark ends the shout inside the closing mark. 'he yelled' stays lower case.",
    not: {
      '"Help I cant swim" he yelled.':
        "The comma after 'Help', the apostrophe in 'can't' and the exclamation mark are all missing.",
      '"Help, I can\'t swim!" He yelled.':
        "'He yelled' carries on the same sentence after the speech, so 'he' stays lower case.",
      "Help, I can't swim! he yelled.":
        'Speech marks are missing, so the reader cannot see which words he yelled.',
    },
    more: 'Dialogue can combine many marks: speech marks to frame the words, a comma after an interjection, an apostrophe in a contraction and an exclamation mark for a shout. Each one has its own job.',
    tip: 'Check dialogue in layers: speech marks first, then the end mark inside them, then commas and apostrophes, then the reporting clause.',
  },
  'london paris and rome are european capitals': {
    why: "London, Paris and Rome are the names of cities, so each takes a capital letter. 'European' comes from the proper noun 'Europe', so it takes one too. The three cities form a list, so a comma separates the first two.",
    not: {
      'London, Paris and Rome are european capitals.':
        "The cities are right, but 'European' comes from the proper noun 'Europe', so it needs a capital letter too.",
      'london, paris and rome are European capitals.':
        "'European' is right, but the names of cities always take capital letters.",
      'London Paris and Rome are European capitals.':
        "The capitals are right, but a comma is needed between 'London' and 'Paris'. Without it, the names run together.",
    },
    more: "Adjectives made from proper nouns also take capitals: European, French, Victorian. In 'European capitals', the word 'capitals' is an ordinary noun, so it stays lower case.",
    tip: 'When you write about places in an exam, capitalise the names and the adjectives made from them: Britain and British, Italy and Italian.',
  },
  'have you read the novel the giver': {
    why: "'The Giver' is the title of a novel, so its words take capital letters. The sentence also asks a question, so it ends with a question mark, and it begins with a capital letter.",
    not: {
      'Have you read the novel the giver?':
        "A title is a name, so its important words take capital letters. 'The Giver' is the novel's title.",
      'Have you read the novel "The Giver".':
        'The title is capitalised, but the sentence asks a question, so it must end with a question mark, not a full stop.',
      'have you read the novel The Giver?':
        "The title is right, but the sentence needs a capital letter at the start, so 'Have'.",
    },
    more: "In titles, the first word and the main words take capitals, while small words such as 'of' and 'the' in the middle stay lower case, as in 'Lord of the Flies'. In handwriting, underline a title; in print, it is usually in italics.",
    tip: 'In an essay, give the full title of a text with capital letters. Check the capitals: The Giver, not The giver.',
  },
  'first we mixed the ingredients then we baked the cake': {
    why: "'First' is a fronted adverbial of order, so a comma follows it. 'We mixed the ingredients' and 'we baked the cake' are two full clauses, so they are joined with a comma and 'and', not a comma alone.",
    not: {
      'First we mixed the ingredients then we baked the cake.':
        "No commas are used, so the two actions run together. A comma should follow 'First', and the two clauses need a comma and a joining word.",
      'First we mixed the ingredients, then we baked the cake.':
        "A comma is missing after 'First'. A comma alone also cannot join 'we mixed the ingredients' and 'then we baked the cake', because they are two full clauses.",
      'first, we mixed the ingredients then we baked the cake.':
        "The first word needs a capital letter, and the two clauses need a comma and 'and' between them.",
    },
    more: "Sequencing words such as 'First', 'Next' and 'Finally' usually take a comma after them at the start of a sentence. 'Then' is an adverb, not a conjunction, so it cannot join two clauses after a comma alone. 'And then' can.",
    tip: "In instructions and stories, use sequencing words with commas to guide the reader. Join short steps with 'and then', or start a new sentence.",
  },
  'dr patel will see you now said the receptionist': {
    why: "The receptionist's words go inside speech marks, with a comma inside the closing mark. 'Dr' is a title and 'Patel' a name, so both take capitals. 'said the receptionist' carries on in lower case.",
    not: {
      '"dr patel will see you now," said the receptionist.':
        "'Dr' and 'Patel' are a title and a name, so both take capital letters. The speech also begins a sentence, so it starts with one.",
      'Dr Patel will see you now, said the receptionist.':
        'Speech marks are missing, so the reader cannot see which words the receptionist said.',
      '"Dr Patel will see you now" said the receptionist.':
        "A comma is missing after 'now'. It goes inside the closing speech mark, before the reporting clause.",
    },
    more: "British English usually leaves out the full stop after 'Dr', 'Mr' and 'Mrs'. Always use a capital letter for a title that comes with a name.",
    tip: "A name with a title always takes capitals, even in the middle of speech: 'Dr Patel', 'Mrs Khan'.",
  },
  'although it was difficult i never gave up and i succeeded': {
    why: "'Although it was difficult' is an opening subordinate clause, so a comma follows it. 'I never gave up' and 'I succeeded' are two main clauses joined by 'and', so a comma usually goes before 'and'. 'I' is a capital both times.",
    not: {
      'Although it was difficult I never gave up and I succeeded.':
        "No commas are used. A comma should follow the opening clause, and another should come before 'and' when it joins two full clauses.",
      'although it was difficult, I never gave up and I succeeded.':
        "The comma after 'difficult' is right, but the first word needs a capital letter.",
      'Although it was difficult I never gave up, and I succeeded.':
        "The comma before 'and' is right, but the opening clause 'Although it was difficult' needs a comma after it too.",
    },
    more: "A comma usually goes before 'and' when it joins two full clauses, each with its own subject and verb. When 'and' only joins two verbs, as in 'I tried and failed', there is no comma.",
    tip: "In longer sentences, check each clause in turn: opening clause and comma, then the main clause, then a comma and 'and' before the next clause.",
  },
  'wow that was the best concert ive ever been to': {
    why: "'Wow' is an interjection, a word of feeling, so a comma follows it. 'I've' is short for 'I have' and needs a capital and an apostrophe. The sentence shows delight, so it ends with an exclamation mark.",
    not: {
      'Wow that was the best concert ive ever been to.':
        "The word 'ive' needs a capital letter and an apostrophe: 'I've' is short for 'I have'. A comma should also follow 'Wow'.",
      "wow, that was the best concert I've ever been to!":
        "The comma, the apostrophe and the exclamation mark are right, but 'Wow' needs a capital letter at the start.",
      "Wow, that was the best concert I've ever been to?":
        'This is a statement of delight, not a question, so it takes an exclamation mark, not a question mark.',
    },
    more: "Interjections such as 'wow', 'oh' and 'ouch' show sudden feeling. A comma usually follows them. Contractions such as I've, they're and we'd are common in speech and informal writing.",
    tip: 'In formal essays, avoid interjections and contractions. In dialogue and informal writing, they sound natural.',
  },
  'priya who was tired fell asleep quickly': {
    why: "'Who was tired' is extra information about Priya, set off by a pair of commas, one before and one after. A name already tells us exactly who is meant, so the clause can only add detail. Take it out and 'Priya fell asleep quickly' still makes sense.",
    not: {
      'Priya, who was tired, fell asleep, quickly.':
        "The commas around 'who was tired' are right, but the extra comma before 'quickly' is wrong. It splits the verb from its adverb.",
      'Priya, who was tired fell asleep quickly.':
        "Extra information needs a comma on both sides. The second comma, after 'tired', is missing.",
      'Priya who was tired, fell asleep quickly.':
        "Extra information needs a pair of commas. The opening comma, after 'Priya', is missing, and the comma after 'tired' then splits the subject from its verb.",
    },
    more: "Compare two sentences about a group. 'The children who were tired fell asleep' means only the tired ones did. 'The children, who were tired, fell asleep' means they were all tired. With a name, only the version with commas fits.",
    tip: 'Use a pair of commas for extra information, and check that the sentence still works with that information taken out.',
  },
  'mr jones our neighbour is a firefighter': {
    why: "'Our neighbour' tells us more about Mr Jones. It is extra information, so a pair of commas goes around it, one before and one after. Without the phrase, 'Mr Jones is a firefighter' still makes sense.",
    not: {
      'Mr Jones our neighbour is a firefighter.':
        "'Our neighbour' is extra information about Mr Jones, so it needs commas around it. Without them, the sentence reads awkwardly.",
      'mr jones, our neighbour, is a firefighter.':
        "The commas are right, but 'Mr' and 'Jones' are a title and a name, so both need capital letters.",
      'Mr Jones, our neighbour is a firefighter.':
        "Extra information needs a comma before and after it. The second comma, after 'neighbour', is missing.",
    },
    more: "A phrase that renames another noun next to it is called an apposition. When it only adds extra information, it is set off by a pair of commas, as in 'London, the capital of England, is huge.'",
    tip: 'Use this to add detail smoothly. Always close the pair of commas, so the extra information does not run into the verb.',
  },
  'turn off the lights before you leave the room': {
    why: "This is a calm command, so it ends with a full stop and starts with a capital letter. 'Before you leave the room' follows the main clause, so no comma is required.",
    not: {
      'turn off the lights before you leave the room.': 'The first word needs a capital letter.',
      'Turn off the lights, before you leave the room.':
        "No comma is needed here. 'Before you leave the room' is essential to the instruction and follows the main clause, so it should not be cut off from it.",
      'Turn off the lights before you leave the room?':
        'This is a calm instruction, not a question, so it ends with a full stop.',
    },
    more: "When a subordinate clause comes after the main clause, a comma is usually not needed: 'We left because it was late.' Put the clause first and the comma appears: 'Because it was late, we left.'",
    tip: 'Do not add commas just because you can. If a clause is essential to the meaning and follows the main clause, leave the comma out.',
  },
}
