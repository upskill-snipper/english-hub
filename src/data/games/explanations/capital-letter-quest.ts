import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Capital Letter Quest: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/capital-letter-quest.ts). Written with AI on
 * 16 October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: every question now offers four
 * different sentences, or four words from one sentence, so no two options
 * differ only in their capital letters; every earlier question's "why not"
 * entries were rewritten for its new options, and 180 new questions were
 * added at three tiers, 43 of them on real lines from books out of UK
 * copyright, with the book named after each. Written with AI and checked
 * against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 31 October 2026: 27 explanations rewritten, 26
 * for the questions whose sentences or options changed (see the bank's
 * docblock) and one for its tip.
 * School subjects and the second word of a letter's closing are now given as
 * "the usual UK style", never as a plain error, since some schools teach and
 * print "Maths" and "Kind Regards"; and the tip "family word plus name? Capital"
 * now says "no 'my'", as "my cousin Zara" elsewhere in the bank requires.
 */
export const EXPLANATIONS: GameExplanations = {
  'The dog is asleep.': {
    why: "The first word of every sentence begins with a capital letter: The. 'Dog' and 'asleep' are ordinary words, so they stay small.",
    not: {
      'the bus is late again.': "The first word of a sentence needs a capital letter: 'The bus'.",
      'We sat on the Grass.':
        "'Grass' is an ordinary word, not a name, so it stays small in the middle of a sentence.",
      'my brother is at school.':
        "The first word needs a capital letter, even a short one like 'my'.",
    },
    more: 'A capital letter shows the reader that a new sentence has begun. A full stop shows where it ends.',
    tip: 'When you read your writing again, check the first word of each sentence.',
  },
  'We walk to school.': {
    why: "'We' is the first word of the sentence, so it begins with a capital letter. 'Walk', 'to' and 'school' are ordinary words, so they stay small.",
    not: {
      'we eat lunch at noon.': "'We' begins the sentence, so it needs a capital letter.",
      'My Sister walks with me.':
        "'Sister' is a family word after 'my', not a name, so it stays small: 'my sister'.",
      'the park is near our house.': "The first word of a sentence needs a capital letter: 'The'.",
    },
    more: "Short words such as 'we', 'it' and 'the' need a capital letter too when they begin a sentence.",
    tip: "Short words are easy to forget. Check the very first letter of 'We', 'It' and 'The' each time.",
  },
  'It is raining today.': {
    why: "'It' begins the sentence, so it needs a capital letter. 'Raining' and 'today' are not names, so they stay small.",
    not: {
      'it is very windy.': "'It' is the first word, so it needs a capital letter.",
      'We are going out Today.':
        "'Today' is not the name of a day. In the middle of a sentence it stays small.",
      'it was sunny yesterday.': "The first word of every sentence needs a capital letter: 'It'.",
    },
    more: "Days and months have capital letters, but 'today' is not a day name. It is an ordinary word, like 'tomorrow' and 'yesterday'.",
    tip: "Give a capital letter to a time word such as 'today' only when it begins the sentence.",
  },
  'She likes tea.': {
    why: "'She' is the first word, so it begins with a capital letter. 'Likes' is a verb and 'tea' is a thing, not a name, so both stay small.",
    not: {
      'he likes coffee.': "'He' begins the sentence, so it needs a capital letter.",
      'They drink Milk.': "'Milk' is an ordinary word, not a name, so it stays small.",
      'we like orange juice.': "The first word needs a capital letter: 'We'.",
    },
    more: 'Food and drink words are ordinary words. They stay small unless they begin a sentence or are a brand name.',
    tip: 'Ask yourself about each word: is it the first word, or a name? If not, write it small.',
  },
  'My book is new.': {
    why: "'My' is the first word of the sentence, so it begins with a capital letter. 'Book' is an ordinary word, so it stays small.",
    not: {
      'my pen is red.': "'My' begins the sentence, so it needs a capital letter.",
      'Your Bag is heavy.':
        "'Bag' is an ordinary word, so it stays small in the middle of a sentence.",
      'his desk is by the door.': "The first word needs a capital letter: 'His'.",
    },
    more: 'The titles of books and films often have capitals on many words. A normal sentence does not: only the first word and names.',
    tip: 'In a normal sentence, use a capital letter for the first word and for names, and nowhere else.',
  },
  'Where do you live?': {
    why: "A question also begins with a capital letter: Where. 'Do', 'you' and 'live' are ordinary words, so they stay small. The question mark ends the sentence.",
    not: {
      'where is the station?': "A question begins with a capital letter too: 'Where'.",
      'What do You want?':
        "Only 'I' is always a capital letter. 'You' stays small in the middle of a sentence.",
      'how old are you?': "The first word of a question needs a capital letter: 'How'.",
    },
    more: 'A question follows the same rule as a statement: a capital letter at the start. The end is different, because it has a question mark.',
    tip: 'When you write a question, check both ends: a capital letter at the start and a question mark at the end.',
  },
  'Yesterday I was tired.': {
    why: "'Yesterday' is the first word, so it needs a capital letter. The word 'I' is always a capital letter, wherever it comes in the sentence.",
    not: {
      'Today i feel much better.': "The word 'I' is always a capital letter, wherever it comes.",
      'Then i went to bed.': "'i' on its own must be a capital letter: 'I went'.",
      'This morning I saw My friend.':
        "'My' is not the first word here, so it stays small: 'my friend'.",
    },
    more: "'I' is the only pronoun that is always a capital letter. Words like 'you', 'he', 'my' and 'we' stay small in the middle of a sentence.",
    tip: "When you type quickly, check every 'I' in the sentence, not only the first one.",
  },
  'My friend and I play football.': {
    why: "'My' begins the sentence, so it has a capital letter. 'I' is always a capital letter, even in the middle: 'my friend and I'. 'Football' stays small.",
    not: {
      'My sister and i play chess.': "'I' is always a capital letter, even after 'and'.",
      'Tom and I play Tennis.': 'A sport is an ordinary word, so it stays small.',
      'My cousin and i go swimming.': "'i' must be a capital letter: 'My cousin and I'.",
    },
    more: 'Sports and games are ordinary words, so they are written with small letters.',
    tip: 'When you write about yourself and another person, remember the capital: my friend and I.',
  },
  'Can I help you?': {
    why: "'Can' begins the question, so it needs a capital letter. 'I' is always a capital letter too. 'Help' and 'you' stay small.",
    not: {
      'Can i sit here?': "'I' is always a capital letter, even inside a question.",
      'May I ask You a question?':
        "'You' is not a name, so it stays small in the middle of a sentence.",
      'Can i have some water?': "'i' on its own must be a capital letter: 'Can I'.",
    },
    more: "Polite questions often have 'I' in the middle: Can I help you? May I come in? Always write a capital I.",
    tip: "In a shop or an office, you can say 'Can I help you?'. Check the capital I when you write it.",
  },
  'I think I am right.': {
    why: "The word 'I' is always a capital letter. This sentence has it twice: at the start and after 'think'. 'Think', 'am' and 'right' stay small.",
    not: {
      'I know i am late.': "Every 'I' needs a capital letter, not only the first one.",
      'i hope I can come.': "The first word is 'I', so it needs a capital letter twice over.",
      'I said i was sorry.': "The second 'I' needs a capital letter too.",
    },
    more: "Even in a short sentence, every 'I' needs a capital letter: I think I know. I hope I can come.",
    tip: 'Look for a small letter i on its own in your writing, and change each one to a capital I.',
  },
  'Tomorrow I will visit her.': {
    why: "'Tomorrow' is the first word, so it needs a capital letter. 'I' is always a capital letter. 'Visit' and 'her' stay small.",
    not: {
      'Tomorrow i will call him.': "'I' is always a capital letter: 'Tomorrow I will'.",
      'Today I will see Her.': "'Her' is not a name. In the middle of a sentence it stays small.",
      'Next week i will write to them.': "'i' on its own must be a capital letter.",
    },
    more: "'Tomorrow' needs no capital in the middle of a sentence: 'I will visit her tomorrow'.",
    tip: 'Use a capital letter on a time word only when it begins the sentence: Tomorrow I will ... or I will ... tomorrow.',
  },
  'My name is Sara.': {
    why: "A person's name begins with a capital letter: Sara. 'My' also has one because it begins the sentence. 'Name' is an ordinary word and stays small.",
    not: {
      'His name is omar.': 'Omar is a person’s name, so it needs a capital letter.',
      'Her Name is Lina.':
        "'Name' is an ordinary word, so it stays small. Only the name itself, Lina, has a capital.",
      'My dog is called max.': 'A pet’s name is a name too, so it needs a capital letter: Max.',
    },
    more: 'Every part of a person’s name has a capital letter, the first name and the family name.',
    tip: 'When you write your name on a form, begin every part of it with a capital letter.',
  },
  'Ahmed is my brother.': {
    why: "'Ahmed' is a person's name and also the first word, so it begins with a capital letter. 'Brother' is an ordinary word, so it stays small.",
    not: {
      'Nadia is my Sister.': "'Sister' is a family word after 'my', not a name, so it stays small.",
      'yusuf is my cousin.':
        'Yusuf is a name, and it begins the sentence, so it needs a capital letter.',
      'This is my Aunt.': "After 'my', a family word stays small: 'my aunt'.",
    },
    more: "Family words are small after 'my'. They get a capital only when used as a name or before a name: 'Hello, Mum.'",
    tip: "Write family words with small letters after 'my', and add the name with a capital: my brother Ahmed.",
  },
  'This is Mr Brown.': {
    why: "'This' begins the sentence. 'Mr' is a title and 'Brown' is a name, so both begin with a capital letter. British English usually writes Mr with no full stop.",
    not: {
      'This is mrs Green.': "A title before a name needs a capital letter: 'Mrs Green'.",
      'That is Dr white.': "'White' here is a family name, so it needs a capital letter.",
      'Here is Mr hill.': "'Hill' is a family name here, so it needs a capital letter.",
    },
    more: "A title and a name both have capitals. A word like 'white' or 'hill' becomes a name with a capital when it is someone’s family name.",
    tip: 'Write the short title with a capital and no full stop: Mr, Mrs, Dr. Then add the name with a capital.',
  },
  'I sat next to Maria and Tom.': {
    why: "'I' is always a capital letter. 'Maria' and 'Tom' are names of people, so each begins with a capital letter. 'Sat', 'next' and 'to' stay small.",
    not: {
      'I sat next to Leo and anna.': "Every name in a list needs its own capital letter: 'Anna'.",
      'I spoke to ravi and Ella.': 'Ravi is a name, so it needs a capital letter.',
      'I waited for Max and ruby.': 'Ruby is a name here, so it needs a capital letter.',
    },
    more: "Every name in a list has its own capital letter. The word 'and' stays small.",
    tip: 'Check each name when you write a list of people.',
  },
  'Have you met Lucy?': {
    why: "'Have' begins the question, so it needs a capital letter. 'Lucy' is a name, so it has one too. 'You' and 'met' stay small.",
    not: {
      'Have you met kate?': 'Kate is a name, so it needs a capital letter, even in a question.',
      'Have You met Hana?': "'You' is not a name, so it stays small in the middle of a sentence.",
      'Do you know david?': 'David is a name, so it needs a capital letter.',
    },
    more: 'A name keeps its capital letter in a question, a statement or a command.',
    tip: "Use 'Have you met ...?' to introduce friends, and write the name with a capital letter.",
  },
  'My teacher is Mrs Khan.': {
    why: "'Mrs' is a title and 'Khan' is a name, so both need capital letters. 'My' begins the sentence. 'Teacher' is an ordinary word, so it stays small.",
    not: {
      'My doctor is dr Shah.': "A title before a name needs a capital letter: 'Dr Shah'.",
      'Our Teacher is Mr Ross.':
        "'Teacher' is a job word, not a title before a name, so it stays small.",
      'Her dentist is Mrs reed.': 'Reed is a family name here, so it needs a capital letter.',
    },
    more: "Compare 'my teacher' (small t) with 'Mrs Khan' (capitals). A job word stays small, but a title in front of a name has a capital.",
    tip: 'When you write a title with a name, give both words capitals. The job word alone stays small.',
  },
  'I live in London.': {
    why: "'I' is always a capital letter. 'London' is the name of a city, and the names of cities begin with a capital letter. 'Live' and 'in' stay small.",
    not: {
      'I live in leeds.': 'Leeds is a city, so it needs a capital letter.',
      'We live in a small Town.':
        "'Town' is an ordinary word, not the name of a place, so it stays small.",
      'They live in bristol.': 'Bristol is the name of a city, so it needs a capital letter.',
    },
    more: "The names of towns, cities and countries all have capital letters. The words 'town' and 'city' on their own stay small.",
    tip: 'Write the name of your home town or city with a capital letter on forms and in letters.',
  },
  'She is from Spain.': {
    why: "'She' begins the sentence. 'Spain' is the name of a country, and country names begin with a capital letter. 'From' stays small.",
    not: {
      'He is from egypt.': 'Egypt is a country, so it needs a capital letter.',
      'They are from a hot Country.':
        "'Country' is an ordinary word. Only the name of a country has a capital.",
      'We are from greece.': 'Greece is the name of a country, so it needs a capital letter.',
    },
    more: 'The same rule applies to continents. They are names of places too.',
    tip: 'When you say where someone is from, write the country with a capital letter.',
  },
  'We visited Paris in June.': {
    why: "'We' begins the sentence. 'Paris' is a city and 'June' is a month, so both need capital letters. 'Visited' and 'in' stay small.",
    not: {
      'We visited rome in May.': 'Rome is the name of a city, so it needs a capital letter.',
      'We visited Berlin in april.':
        'Months of the year are names, so each needs a capital letter.',
      'We visited Madrid in the Summer.':
        "Seasons are not names, so they stay small: 'in the summer'.",
    },
    more: 'In English, months have capital letters. In many other languages they are written small, so this is easy to forget.',
    tip: 'Check every city and every month in your writing.',
  },
  'My school is in Manchester.': {
    why: "'Manchester' is a city, so it has a capital letter. 'My' begins the sentence. 'School' is an ordinary word, so it stays small.",
    not: {
      'My School is in Bath.':
        "'School' is an ordinary word here, not part of a name, so it stays small.",
      'Our college is in liverpool.': 'Liverpool is a city, so it needs a capital letter.',
      'My cousin goes to school in glasgow.':
        'Glasgow is the name of a city, so it needs a capital letter.',
    },
    more: "'School' is small in 'my school', but it has a capital when it is part of a name: Manchester High School.",
    tip: 'Ask: is this the name of one place? If it is, use a capital letter.',
  },
  'They moved to Scotland.': {
    why: "'Scotland' is a country, so it begins with a capital letter. 'They' begins the sentence. 'Moved' and 'to' stay small.",
    not: {
      'They moved to wales.': 'Wales is a country, so it needs a capital letter.',
      'We moved to a new City.': "'City' is an ordinary word, not a name, so it stays small.",
      'She moved to ireland.': 'Ireland is a country, so it needs a capital letter.',
    },
    more: 'Every country’s name has a capital letter, however short it is.',
    tip: 'Write a country with a capital letter every time, however short the name is.',
  },
  'Oxford Street is busy.': {
    why: "'Oxford Street' is the name of a street, so both words begin with a capital letter, including 'Street'. 'Busy' is an ordinary word, so it stays small.",
    not: {
      'Baker street is long.':
        "'Street' is part of the street’s name here, so it needs a capital too.",
      'Our Street is quiet.': "Here 'street' is not part of a name, so it stays small.",
      'Park lane is near here.':
        "'Lane' is part of the name of the road, so it needs a capital letter.",
    },
    more: "The word 'street' stays small when it stands alone: a busy street. It has a capital letter when it is part of a street’s name.",
    tip: 'Write the whole name of a road with capital letters, including Street, Road or Lane.',
  },
  'We have a test on Monday.': {
    why: "'Monday' is a day of the week, and days always begin with a capital letter in English. 'We' begins the sentence. 'Test' stays small.",
    not: {
      'We have maths on tuesday.': 'Every day of the week is a name, so it needs a capital letter.',
      'We have music on Thursday Afternoon.':
        "The day has a capital, but 'afternoon' is an ordinary word and stays small.",
      'We have a party at the Weekend.': "'Weekend' is not the name of a day, so it stays small.",
    },
    more: "The days of the week are names, so they always have capital letters. Words such as 'week', 'weekend' and 'morning' do not.",
    tip: 'In many languages, days are written with a small letter. In English, always use a capital.',
  },
  'See you on Friday.': {
    why: "'Friday' is a day of the week, so it begins with a capital letter. 'See' begins the sentence, so it does too. 'You' and 'on' stay small.",
    not: {
      'See you on thursday.': 'A day of the week needs a capital letter, even in a short message.',
      'See You next week.': "'You' stays small in the middle of a sentence.",
      'See you on Saturday Evening.':
        "The day has a capital, but 'evening' is an ordinary word and stays small.",
    },
    more: "'See you on Friday' is a friendly way to say goodbye when you will meet someone soon.",
    tip: 'In messages to friends, still write the day with a capital letter: See you on Friday.',
  },
  'The shop is closed on Sunday.': {
    why: "'Sunday' is a day of the week, so it begins with a capital letter. 'The' begins the sentence. 'Shop' and 'closed' stay small.",
    not: {
      'The bank is shut on saturday.': 'A day of the week is a name, so it needs a capital letter.',
      'The café opens on Monday Morning.': "The day has a capital, but 'morning' stays small.",
      'The library is open every Day.':
        "'Day' is an ordinary word, not the name of a day, so it stays small.",
    },
    more: 'Add -s for a repeated day: closed on Sundays. The capital letter stays.',
    tip: 'When you write opening times, give each day a capital letter.',
  },
  'I play tennis every Saturday.': {
    why: "'I' is always a capital letter, and 'Saturday' is a day, so it needs one too. 'Tennis' is a sport, not a name, so it stays small.",
    not: {
      'I go swimming every friday.': 'A day of the week needs a capital letter.',
      'I play Football every Sunday.': 'A sport is an ordinary word, so it stays small.',
      'I visit my gran every wednesday.': 'Days of the week always have a capital letter.',
    },
    more: 'Sports and games are written with small letters, but the days you play them have capitals.',
    tip: "To talk about a habit, use 'every' and a day with a capital letter: every Saturday.",
  },
  'The meeting is on Wednesday.': {
    why: "'Wednesday' is a day of the week, so it has a capital letter. 'The' begins the sentence. 'Meeting' stays small, and a full stop ends the sentence.",
    not: {
      'The party is on tuesday.': 'A day of the week is a name, so it needs a capital letter.',
      'The Meeting is next week.': "'Meeting' is an ordinary word, so it stays small after 'The'.",
      'The trip is on thursday.': 'Days of the week always begin with a capital letter.',
    },
    more: "'Wednesday' is hard to spell. Say it slowly as Wed-nes-day to remember the d in the middle.",
    tip: 'Check both ends of the sentence: a capital letter at the start and a full stop at the end.',
  },
  'My birthday is in March.': {
    why: "'March' is a month, so it begins with a capital letter. 'My' begins the sentence. 'Birthday' is an ordinary word, so it stays small.",
    not: {
      'Her birthday is in may.':
        'A month is a name, so it needs a capital letter, even a short one.',
      'My Birthday is in October.': "'Birthday' is an ordinary word, so it stays small.",
      'His party is in november.': 'Months of the year always begin with a capital letter.',
    },
    more: "Some months are also ordinary words: 'march' (to walk like a soldier) and 'may' (as in 'may I'). As months, they always have capitals.",
    tip: 'To give your birthday, say: My birthday is in March. Check that the month has a capital letter.',
  },
  'School ends in July.': {
    why: "'July' is a month, so it needs a capital letter. 'School' begins the sentence, so it needs one too. 'Ends' and 'in' stay small.",
    not: {
      'Term starts in january.': 'A month needs a capital letter wherever it comes.',
      'Our holiday is in the Spring.':
        "Seasons are not names, so they stay small: 'in the spring'.",
      'The exams are in june.': 'Months of the year always have a capital letter.',
    },
    more: 'A month in the middle of a sentence still has a capital letter, and so does a month in a date.',
    tip: 'When you write a date, give the month a capital letter: 5 July.',
  },
  'It snows in December.': {
    why: "'December' is a month, so it begins with a capital letter. 'It' begins the sentence. 'Snows' is a verb, so it stays small.",
    not: {
      'It rains a lot in november.': 'A month needs a capital letter.',
      'It is cold in the Winter.': 'Seasons stay small: winter, spring, summer and autumn.',
      'It is hot in august.': 'Months are names, so each one needs a capital letter.',
    },
    more: 'Seasons are different from months: they are written with small letters.',
    tip: 'Use a capital letter for a month but a small letter for a season: in December, in winter.',
  },
  'We travel in August.': {
    why: "'August' is a month, so it begins with a capital letter. 'We' begins the sentence. 'Travel' is a verb, so it stays small.",
    not: {
      'We travel in october.': 'Months of the year always begin with a capital letter.',
      'We go away every Summer.': 'A season is not a name, so it stays small.',
      'We fly home in february.': 'A month needs a capital letter.',
    },
    more: "Months have capital letters, but the words 'week', 'month' and 'year' stay small: next week, last month.",
    tip: "Write the name of the month with a capital, and add 'in' before it: in August.",
  },
  'The term starts in September.': {
    why: "'September' is a month, so it begins with a capital letter. 'The' begins the sentence. 'Term' and 'starts' stay small.",
    not: {
      'The holiday starts in july.': 'A month is a name, so it needs a capital letter.',
      'The new Term starts next week.': "'Term' is an ordinary school word, so it stays small.",
      'The course ends in march.': 'As a month, March always has a capital letter.',
    },
    more: 'School words such as term, lesson and holiday are ordinary words, so they stay small.',
    tip: 'Check the long month names, because they are easy to spell wrongly as well.',
  },
  'I am learning English.': {
    why: "'English' is the name of a language, and language names always begin with a capital letter. 'I' is always a capital letter too. 'Am' and 'learning' stay small.",
    not: {
      'I am learning french.': 'The name of a language always begins with a capital letter.',
      'My Teacher is English.':
        "'English' is right here, but 'teacher' is an ordinary job word after 'my', so it stays small.",
      'I am studying german.': 'A language name needs a capital letter.',
    },
    more: 'In many other languages, language names are small. In English, they always have a capital letter.',
    tip: 'Write every language with a capital letter, even when you talk about your own.',
  },
  'She speaks French and Arabic.': {
    why: "'French' and 'Arabic' are names of languages, so each begins with a capital letter. 'She' begins the sentence. 'Speaks' and 'and' stay small.",
    not: {
      'She speaks english and Urdu.':
        'Every language name needs a capital letter, including English.',
      'He speaks Polish and turkish.': 'Both languages need capital letters, not only the first.',
      'They speak Spanish at Home.': "'Home' is an ordinary word, so it stays small.",
    },
    more: "When you list languages, every language name has a capital and the word 'and' stays small.",
    tip: 'To say what languages you speak, write: I speak... and check each name.',
  },
  'He is Italian.': {
    why: "'Italian' tells us where he is from, and words for nationalities begin with a capital letter. 'He' begins the sentence. 'Is' stays small.",
    not: {
      'She is spanish.': 'A nationality needs a capital letter, just like the country.',
      'They are Polish Students.':
        "'Polish' needs its capital, but 'students' is an ordinary word and stays small.",
      'We are egyptian.': 'Words for nationalities begin with a capital letter.',
    },
    more: 'The country is Italy and the nationality is Italian. Both have capital letters.',
    tip: 'Write a nationality with a capital letter, even in the middle of a sentence.',
  },
  'We ate Polish food.': {
    why: "'Polish' means from Poland, so it begins with a capital letter. 'We' begins the sentence. 'Ate' and 'food' stay small.",
    not: {
      'We ate indian food.': "A nationality word needs a capital letter, even before 'food'.",
      'We had Chinese Noodles.': "'Chinese' needs its capital, but 'noodles' is an ordinary word.",
      'They love italian pizza.':
        'Words that show where something comes from begin with a capital letter.',
    },
    more: "A small p changes the meaning: 'polish' means to make something shine. The capital letter tells us it is the nationality.",
    tip: "Words that show nationality need a capital letter even before an ordinary noun such as 'food'.",
  },
  'My class learns Spanish.': {
    why: "'Spanish' is the name of a language, so it begins with a capital letter. 'My' begins the sentence. 'Class' and 'learns' stay small.",
    not: {
      'My class learns german.': 'A language name needs a capital letter.',
      'Our Class learns Italian.':
        "'Italian' is right, but 'class' is an ordinary word, so it stays small.",
      'Her class studies japanese.': 'The name of a language always begins with a capital letter.',
    },
    more: "'Spanish' is also the word for the nationality, as in 'Spanish food'. Both meanings have a capital letter.",
    tip: 'When you write about your lessons, give every language a capital letter, wherever it comes.',
  },
  'Please call Dr Smith.': {
    why: "'Dr' is a title and 'Smith' is a name, so both begin with a capital letter. 'Please' begins the sentence. 'Call' stays small.",
    not: {
      'Please ask mrs Ward.': "A title before a name needs a capital letter: 'Mrs Ward'.",
      'Please call the Doctor.':
        "With no name after it, 'doctor' is an ordinary job word and stays small.",
      'Please phone dr Kaur.': "'Dr' before a name is a title, so it needs a capital letter.",
    },
    more: "'Dr' means doctor. In British English we usually write it with no full stop, like Mr and Mrs.",
    tip: "Use 'Please call ...' to ask someone politely. Write the title and the name with capital letters.",
  },
  'Miss Jones is kind.': {
    why: "'Miss' is a title and 'Jones' is a name, so both begin with a capital letter. 'Miss' is also the first word of the sentence. 'Kind' stays small.",
    not: {
      'miss Hart is my teacher.':
        "'Miss' is a title before a name, and it begins the sentence, so it needs a capital.",
      'Mr ryan is very tall.': 'Ryan is a family name here, so it needs a capital letter.',
      'Our coach is miss Barnes.':
        "'Miss' comes right before her name, so it is a title and needs a capital: 'Miss Barnes'. 'Coach' is a job word and stays small.",
    },
    more: "'Miss' is for a girl or a woman who is not married. 'Ms' can be used for any woman. Both have capital letters before a name.",
    tip: 'Always write a title with a capital letter when it comes before a name.',
  },
  'We wrote to Mr Patel.': {
    why: "'Mr' is a title and 'Patel' is a name, so both begin with a capital letter. 'We' begins the sentence. 'Wrote' and 'to' stay small.",
    not: {
      'We wrote to mrs Moore.': "A title before a name needs a capital letter: 'Mrs Moore'.",
      'We wrote to the Manager.':
        "'Manager' is a job word with no name after it, so it stays small.",
      'We spoke to Dr okafor.': 'Okafor is a family name, so it needs a capital letter.',
    },
    more: "'Mr' is for a man, 'Mrs' for a married woman and 'Miss' for a young or unmarried woman. All have capital letters.",
    tip: 'In a letter, write the person’s title and name with capital letters.',
  },
  'Thank you, Mrs Evans.': {
    why: "'Mrs' is a title and 'Evans' is a name, so both begin with a capital letter. 'Thank' begins the sentence. 'You' stays small, even after the comma.",
    not: {
      'Thank you, mr Cole.': "A title before a name needs a capital letter: 'Mr Cole'.",
      'Thank You, Dr Price.': "'You' is not a name, so it stays small.",
      'Goodbye, miss Hill.': "'Miss' before a name is a title, so it needs a capital letter.",
    },
    more: 'A comma does not start a new sentence, so the next word stays small unless it is a name or a title.',
    tip: 'When you thank someone, write their title and name with capitals.',
  },
  'Ask Professor Lee.': {
    why: "'Professor' is a title in front of a name, and 'Lee' is the name, so both need capital letters. 'Ask' begins the sentence.",
    not: {
      'Ask professor Jamal.':
        "Before a name, 'Professor' is a title, so it needs a capital letter.",
      'Ask the Professor.': "With no name after it, 'professor' is a job word and stays small.",
      'Ask dr Wood.': "'Dr' is a title before a name, so it needs a capital letter.",
    },
    more: "Compare 'Professor Lee' (a title with a name) and 'a professor' (a job word). The title with a name has capitals; the job word stays small.",
    tip: "Use a capital for 'Professor' only when a name follows it.",
  },
  'In summer my uncle and aunt visit wales.': {
    why: "'Wales' is the name of a country, so it needs a capital letter: Wales. The other words are ordinary words, so they stay small.",
    not: {
      summer: "Seasons are not names, so 'summer' stays small.",
      uncle: "After 'my', a family word stays small: 'my uncle'.",
      aunt: "'Aunt' here has no name after it, so it stays small.",
    },
    more: 'Country names always have a capital letter, but the words around them, such as seasons and family words, usually do not.',
    tip: 'Look for the one word that names a particular place or person.',
  },
  'My sister and her friend have a cat called luna.': {
    why: "'Luna' is the cat’s name, and names begin with a capital letter, even the names of pets: Luna.",
    not: {
      sister: "'Sister' is a family word after 'my', so it stays small.",
      friend: "'Friend' is an ordinary word, not a name.",
      cat: "'Cat' is the kind of animal, not its name, so it stays small.",
    },
    more: "Pets have names just as people do. 'A dog' stays small, but its name has a capital.",
    tip: 'Ask: is this word what the thing is, or what it is called? What it is called takes a capital.',
  },
  'On Monday morning we have spanish lessons with our teacher.': {
    why: "'Spanish' is the name of a language, so it needs a capital letter, even in the name of a lesson: Spanish lessons.",
    not: {
      morning: "'Morning' is part of the day, not a name, so it stays small after 'Monday'.",
      lessons: "'Lessons' is an ordinary word, so it stays small.",
      teacher: "'Teacher' is a job word with no name after it, so it stays small.",
    },
    more: 'A language always takes a capital, even as a lesson. In the usual UK style, other subjects, such as maths or history, are written small, though some timetables give them capitals.',
    tip: 'On a timetable in a sentence, check that every language has its capital.',
  },
  'My best friend lives in paris with her mum and dad.': {
    why: "'Paris' is the name of a city, so it needs a capital letter: Paris.",
    not: {
      friend: "'Friend' is an ordinary word, not a name.",
      mum: "After 'her', a family word stays small: 'her mum'.",
      dad: "After 'her', 'dad' is a family word, not a name, so it stays small.",
    },
    more: "'Mum' and 'Dad' have capitals only when they are used as names: 'Can Dad come?'. With 'my' or 'her' they stay small.",
    tip: 'City names always have capitals, wherever they come in a sentence.',
  },
  'Every saturday my dad and I go to the park in town.': {
    why: "'Saturday' is a day of the week. Days are names, so they always begin with a capital letter: Saturday.",
    not: {
      dad: "After 'my', 'dad' is a family word and stays small.",
      park: "'Park' here is not the name of a park, so it stays small.",
      town: "'Town' is an ordinary word, not the name of a town.",
    },
    more: "A day keeps its capital letter after 'every', 'next' and 'last'.",
    tip: 'Many languages write days with small letters. In English, always give them a capital.',
  },
  'Our teacher, mr Green, likes cats and football.': {
    why: "'Mr' is a title before a name, so it needs a capital letter, just like the name: Mr Green.",
    not: {
      teacher: "'Teacher' is a job word with no name straight after it, so it stays small.",
      cats: "'Cats' is an ordinary noun for the animals, so it stays small.",
      football: 'A sport is an ordinary word, so it stays small.',
    },
    more: 'A title and a name go together, and both have capitals: Mr, Mrs, Miss, Dr.',
    tip: 'If a short title comes before a name, give it a capital letter.',
  },
  'The school holidays start in july, at the end of summer.': {
    why: "'July' is a month. Months are names, so they always have a capital letter: July.",
    not: {
      school: "'School' here is an ordinary word, not the name of a school.",
      holidays: "'Holidays' is an ordinary word, so it stays small.",
      summer: "Seasons are not names, so 'summer' stays small.",
    },
    more: "Months take capitals, but seasons do not. That is why one sentence can have 'July' and 'summer'.",
    tip: 'Check each time word: a month has a capital, a season does not.',
  },
  'My grandad speaks arabic at home with my gran.': {
    why: "'Arabic' is the name of a language, so it needs a capital letter: Arabic.",
    not: {
      grandad: "After 'my', 'grandad' is a family word, so it stays small.",
      home: "'Home' is an ordinary word, so it stays small.",
      gran: "After 'my', 'gran' is a family word, not a name.",
    },
    more: 'Languages always take a capital in English, even your own language.',
    tip: 'Write the name of any language with a capital letter, every time.',
  },
  'After school i saw a fox in our garden.': {
    why: "'I' on its own is always a capital letter, wherever it comes in the sentence: 'After school I saw a fox'.",
    not: {
      school: "'School' is an ordinary word here, so it stays small.",
      fox: "'Fox' is an animal, not a name, so it stays small.",
      garden: "'Garden' is an ordinary word.",
    },
    more: "'I' is the only word for a person that is always a capital, even in the middle of a sentence.",
    tip: 'When you check your writing, look for a small i standing on its own.',
  },
  'In August my aunt, my cousins and I fly to spain.': {
    why: "'Spain' is the name of a country, so it needs a capital letter: Spain.",
    not: {
      aunt: "After 'my', 'aunt' is a family word, so it stays small.",
      cousins: "'Cousins' is a family word, not a name.",
      fly: "'Fly' is a verb, so it stays small.",
    },
    more: 'Countries always take a capital. The words for the people going stay small unless they are names.',
    tip: 'In a sentence about a trip, check the place you are going to.',
  },
  'Can you come to my party on friday?': {
    why: "'Friday' is a day of the week, so it needs a capital letter, even in a question: Friday.",
    not: {
      you: "'You' is not a name, so it stays small in the middle of a sentence.",
      party: "'Party' is an ordinary word.",
      come: "'Come' is a verb, so it stays small.",
    },
    more: "Only 'I' is always a capital among the words for people. 'You' stays small.",
    tip: 'In an invitation, check the day and the date: both need capitals.',
  },
  'My mum is a nurse at a hospital in leeds.': {
    why: "'Leeds' is the name of a city, so it needs a capital letter: Leeds.",
    not: {
      mum: "After 'my', 'mum' is a family word, so it stays small.",
      nurse: "'Nurse' is a job, not a title before a name, so it stays small.",
      hospital: "'Hospital' here is not the hospital’s name, so it stays small.",
    },
    more: "A hospital’s full name has capitals, such as 'Royal London Hospital', but 'a hospital' does not.",
    tip: 'Ask whether a word names one particular place. If it does, give it a capital.',
  },
  'Last winter my uncle and my cousins went to poland.': {
    why: "'Poland' is the name of a country, so it needs a capital letter: Poland.",
    not: {
      winter: "Seasons stay small: 'last winter'.",
      uncle: "After 'my', 'uncle' is a family word and stays small.",
      cousins: "'Cousins' is a family word, not a name.",
    },
    more: 'The word for the people from Poland, Polish, also has a capital letter.',
    tip: 'Countries and their nationality words both take capitals.',
  },
  'Our new neighbour is a chef from italy.': {
    why: "'Italy' is the name of a country, so it needs a capital letter: Italy.",
    not: {
      new: "'New' is an adjective, so it stays small.",
      neighbour: "'Neighbour' is an ordinary word, not a name.",
      chef: "'Chef' is a job word, so it stays small.",
    },
    more: 'Jobs stay small: a chef, a doctor, a teacher. The country they come from takes a capital.',
    tip: "After 'from', check whether the next word is a place name.",
  },
  'The library is closed on sunday afternoons.': {
    why: "'Sunday' is a day of the week, so it needs a capital letter: Sunday. The capital stays even before another word, as in 'Sunday afternoons'.",
    not: {
      library: "'Library' here is not a name, so it stays small.",
      closed: "'Closed' is an ordinary word.",
      afternoons: 'Parts of the day stay small, even after a day’s name.',
    },
    more: "A day can describe another word: 'Sunday afternoons', 'Monday mornings'. The day keeps its capital and the other word stays small.",
    tip: 'Opening times need a capital on each day.',
  },
  'On Fridays my brother plays chess with Mrs shah.': {
    why: "'Shah' is a family name here, so it needs a capital letter, just like the title before it: Mrs Shah.",
    not: {
      brother: "After 'my', 'brother' is a family word and stays small.",
      plays: "'Plays' is a verb, so it stays small.",
      chess: 'Games such as chess stay small.',
    },
    more: 'A title and the name after it both take capitals. Some family names are also ordinary words in other languages, but as names they always take a capital.',
    tip: 'Check both parts of a title and a name: the title and the family name.',
  },
  'At the weekend I go swimming with my friend jack.': {
    why: "'Jack' is a person’s name here, so it needs a capital letter: Jack.",
    not: {
      weekend: "'Weekend' is not the name of a day, so it stays small.",
      swimming: "'Swimming' is an activity, so it stays small.",
      friend: "'Friend' stays small even right before a name.",
    },
    more: 'Some names are also ordinary words: a jack lifts a car, but Jack is a boy. The capital shows which one you mean.',
    tip: 'If a word names a person, give it a capital, even if it is also an ordinary word.',
  },
  'My favourite lesson of the week is french.': {
    why: "'French' is the name of a language, so it needs a capital letter, even as the name of a lesson: French.",
    not: {
      favourite: "'Favourite' is an ordinary adjective. British English spells it with -our.",
      lesson: "'Lesson' is an ordinary word, so it stays small.",
      week: "'Week' is an ordinary word, not the name of a day, so it stays small.",
    },
    more: "A language keeps its capital whether you speak it or study it: 'I speak French', 'my French lesson', 'a French test'.",
    tip: 'In a sentence about lessons, find the language and give it a capital.',
  },
  'Last night we watched a film about the history of london.': {
    why: "'London' is the name of a city, so it needs a capital letter: London.",
    not: {
      night: "'Night' is an ordinary word, so it stays small.",
      film: "'Film' is an ordinary word.",
      history: "'History' here is an ordinary word, not a name, so it stays small.",
    },
    more: "A word like 'history' stays small unless it starts a title, such as the name of a book or a programme.",
    tip: 'When a sentence ends with a place, check that the place has its capital.',
  },
  'My aunt makes cakes for eid every year.': {
    why: "'Eid' is the name of a festival, so it needs a capital letter: Eid.",
    not: {
      aunt: "After 'my', 'aunt' is a family word and stays small.",
      cakes: "'Cakes' is an ordinary word.",
      year: "'Year' is an ordinary word, so it stays small.",
    },
    more: 'The names of festivals and holidays have capitals, from every culture and religion.',
    tip: 'If a day or festival has a special name, give it a capital letter.',
  },
  'My gran and grandad have a farm near exeter.': {
    why: "'Exeter' is the name of a city in England, so it needs a capital letter: Exeter.",
    not: {
      gran: "After 'my', 'gran' is a family word and stays small.",
      grandad: "'Grandad' here is a family word, not a name.",
      farm: "'Farm' is an ordinary word.",
    },
    more: 'Small towns and villages have names too, and they take capitals just like big cities.',
    tip: 'Any place you could find on a map takes a capital letter.',
  },
  'In the summer holidays we go to the beach at brighton.': {
    why: "'Brighton' is the name of a town by the sea, so it needs a capital letter: Brighton.",
    not: {
      summer: "Seasons stay small, even before 'holidays'.",
      holidays: "'Holidays' is an ordinary word.",
      beach: "'Beach' here is not a name, so it stays small.",
    },
    more: "A beach can have a name, such as 'Brighton Beach'. Then both words take capitals. 'The beach' alone does not.",
    tip: 'Ask: is this the name of one place, or just the kind of place?',
  },
  'On Monday I play Chess with Mr Hall.': {
    why: "'Chess' should be small. It is the name of a game, and games and sports are ordinary words: 'I play chess with Mr Hall'. The other capitals are right.",
    not: {
      Monday: "'Monday' is a day of the week, so its capital is right.",
      I: "'I' is always a capital letter.",
      Mr: "'Mr' is a title before a name, so its capital is right.",
    },
    more: 'Games and sports stay small: chess, football and tennis. A competition with its own name takes capitals, such as the World Cup.',
    tip: 'In the middle of a sentence, the name of a game or a sport stays small.',
  },
  'In March my Sister and I go to Wales.': {
    why: "'Sister' should be small. After 'my' it is an ordinary family word, not a name: 'my sister'.",
    not: {
      March: "'March' is a month, so its capital is right.",
      I: "'I' is always a capital letter.",
      Wales: "'Wales' is a country, so its capital is right.",
    },
    more: "A family word takes a capital only when it is used as a name, with no 'my' before it: 'Can Mum come?'",
    tip: "After 'my', 'your' or 'our', a family word is small.",
  },
  'Every July, Ben and I go to the Beach in Cornwall.': {
    why: "'Beach' should be small. It is the kind of place, not its name: 'the beach in Cornwall'.",
    not: {
      July: "'July' is a month, so its capital is right.",
      Ben: "'Ben' is a name, so its capital is right.",
      Cornwall: "'Cornwall' is the name of a place, so its capital is right.",
    },
    more: "The name of the area, Cornwall, has the capital. 'Beach' would only take one as part of a name, such as 'Fistral Beach'.",
    tip: "If 'the' comes before a word for a kind of place, it is usually small.",
  },
  'In Winter, Omar and I eat soup on Sundays.': {
    why: "'Winter' should be small. Seasons are not names, so they stay small in the middle of a sentence: 'In winter'.",
    not: {
      Omar: "'Omar' is a name, so its capital is right.",
      I: "'I' is always a capital letter.",
      Sundays: 'Days of the week take capitals, even with -s.',
    },
    more: 'Days and months take capitals, but seasons do not. This is a very common mistake.',
    tip: 'Remember the difference: Sunday and June take capitals; winter and summer do not.',
  },
  'My Teacher, Mrs Nowak, is from Poland.': {
    why: "'Teacher' should be small. It is a job word, and the name comes after it: 'my teacher, Mrs Nowak'.",
    not: {
      Mrs: "'Mrs' is a title before a name, so its capital is right.",
      Nowak: "'Nowak' is a family name, so its capital is right.",
      Poland: "'Poland' is a country, so its capital is right.",
    },
    more: 'A job word stays small even when the person’s name follows it in commas.',
    tip: 'Give capitals to the title and the name, not to the job.',
  },
  'On Saturday, Sam and I went to the Shop in Derby.': {
    why: "'Shop' should be small. It is the kind of place, not its name: 'the shop in Derby'.",
    not: {
      Saturday: "'Saturday' is a day, so its capital is right.",
      Sam: "'Sam' is a name, so its capital is right.",
      Derby: "'Derby' is a city, so its capital is right.",
    },
    more: "A shop’s own name takes capitals, such as 'Boots' or 'Marks and Spencer', but 'the shop' does not.",
    tip: 'Ask whether a word is a name or just a kind of thing.',
  },
  'On Fridays, Tom and I take my Dog to Hyde Park.': {
    why: "'Dog' should be small. It is the kind of animal, not its name: 'my dog'.",
    not: {
      Fridays: 'Days of the week take capitals, even with -s.',
      Tom: "'Tom' is a name, so its capital is right.",
      Hyde: "'Hyde Park' is the name of a park, so both words take capitals.",
    },
    more: "Compare 'my dog' with the dog’s own name, such as Rex. Only the name takes a capital.",
    tip: 'A word for an animal is small; the animal’s name is a capital.',
  },
  'I speak English and Urdu at Home with my parents.': {
    why: "'Home' should be small. It is an ordinary word, not a name: 'at home'.",
    not: {
      I: "'I' is always a capital letter.",
      English: "Languages take capitals, so 'English' is right.",
      Urdu: "'Urdu' is a language, so its capital is right.",
    },
    more: "Learners sometimes give capitals to words that feel important, such as 'Home'. Importance does not decide it; only names take capitals.",
    tip: "Ask about each capital: is it the first word, 'I', or a name? If not, make it small.",
  },
  'Leo and I both have birthdays in June, in the Summer.': {
    why: "'Summer' should be small. Seasons are not names: 'in June, in the summer'.",
    not: {
      Leo: "'Leo' is a name, so its capital is right.",
      I: "'I' is always a capital letter.",
      June: "Months take capitals, so 'June' is right.",
    },
    more: 'A month and a season can sit side by side, but only the month takes a capital.',
    tip: 'Months: capital. Seasons: small.',
  },
  'On Tuesday, Mrs Rossi gives us Homework.': {
    why: "'Homework' should be small. It is an ordinary word, not a name: 'gives us homework'.",
    not: {
      Tuesday: "'Tuesday' is a day, so its capital is right.",
      Mrs: "'Mrs' is a title before a name, so its capital is right.",
      Rossi: "'Rossi' is a family name, so its capital is right.",
    },
    more: 'School words such as homework, lesson and test are ordinary words and stay small.',
    tip: 'A word does not need a capital just because it is about school.',
  },
  'On Sunday my Cousin Zara flew to Dundee.': {
    why: "'Cousin' should be small. After 'my', it is a family word, even right before a name: 'my cousin Zara'.",
    not: {
      Sunday: "'Sunday' is a day, so its capital is right.",
      Zara: "'Zara' is a name, so its capital is right.",
      Dundee: "'Dundee' is a city, so its capital is right.",
    },
    more: 'The name takes the capital, not the family word in front of it.',
    tip: "Write 'my cousin', 'my friend', 'my neighbour' with small letters, then the name with a capital.",
  },
  'On Friday we had Pizza in Rome with Grandma.': {
    why: "'Pizza' should be small. It is a food, not a name: 'we had pizza'.",
    not: {
      Friday: "'Friday' is a day, so its capital is right.",
      Rome: "'Rome' is a city, so its capital is right.",
      Grandma: "Here 'Grandma' is used as her name, with no 'my', so the capital is right.",
    },
    more: 'Food words stay small, even food that comes from another country.',
    tip: 'Food is small; a brand of food takes a capital.',
  },
  'In April, Nina and I visit the Zoo.': {
    why: "'Zoo' should be small. It is the kind of place, not its name: 'visit the zoo'.",
    not: {
      April: "'April' is a month, so its capital is right.",
      Nina: "'Nina' is a name, so its capital is right.",
      I: "'I' is always a capital letter.",
    },
    more: "A zoo’s full name takes capitals, such as 'Chester Zoo', but 'the zoo' does not.",
    tip: "'The' plus a word for a kind of place usually means a small letter.",
  },
  'On Saturdays my Dad and I watch football with Uncle Raj.': {
    why: "'Dad' should be small. After 'my', it is a family word: 'my dad'. Without 'my', used as his name, it would take a capital.",
    not: {
      Saturdays: 'Days take capitals, even with -s.',
      I: "'I' is always a capital letter.",
      Uncle:
        "Here 'Uncle' comes right before a name, as a title, so the capital is right: Uncle Raj.",
    },
    more: "Family words work like titles before a name: 'Uncle Raj', 'Aunt Mina'. After 'my', they are small: 'my uncle'.",
    tip: "Check for 'my' before a family word. If it is there, the family word is small.",
  },
  'Lily and I go back to class on Monday, after the Holidays.': {
    why: "'Holidays' should be small. It is an ordinary word, not a name: 'after the holidays'.",
    not: {
      Lily: "'Lily' is a name, so its capital is right.",
      I: "'I' is always a capital letter.",
      Monday: "'Monday' is a day of the week, so its capital is right.",
    },
    more: "A holiday with its own name takes capitals, such as Easter or Eid. The word 'holidays' alone does not.",
    tip: 'Time words that are not names stay small: holidays, term, weekend, month.',
  },
  'The River Thames is long.': {
    why: "'River Thames' is the name of a river, so both words begin with a capital letter. 'The' begins the sentence. 'Long' stays small.",
    not: {
      'The River severn is wide.': 'Severn is the name of the river, so it needs a capital letter.',
      'We swam in the River.':
        "With no name after it, 'river' is an ordinary word and stays small.",
      'Mount snowdon is in Wales.': 'Snowdon is the mountain’s name, so it needs a capital letter.',
    },
    more: 'The word for the kind of place is part of a name when it comes with the name: the River Thames, Lake Windermere.',
    tip: "Use a capital for 'River' when it comes before the name. In 'the river' alone, it stays small.",
  },
  'The Chinese New Year is fun.': {
    why: "'Chinese' says where something comes from, so it has a capital letter. The festival's name is 'Chinese New Year', and 'New' and 'Year' are part of the name, so they have capitals too.",
    not: {
      'We love diwali.': 'Diwali is the name of a festival, so it needs a capital letter.',
      'Easter is in the Spring.': 'A season is not a name, so it stays small.',
      'Ramadan ends with eid.': 'Eid is the name of a festival, so it needs a capital letter.',
    },
    more: 'Festival names have capitals, but the seasons they come in do not.',
    tip: "Give a capital letter to each main word in the name of a festival: Chinese New Year, New Year's Day.",
  },
  'I have a new Samsung phone.': {
    why: "'Samsung' is the name of a company and its brand, so it begins with a capital letter. 'I' is always a capital letter. 'Phone' is an ordinary word, so it stays small.",
    not: {
      'He has an apple watch.': 'As a brand name, Apple needs a capital letter.',
      'She wants a Sony Camera.':
        "The brand has a capital, but 'camera' is an ordinary word and stays small.",
      'We bought a lego set.': 'Lego is a brand name, so it needs a capital letter.',
    },
    more: 'A brand name is the special name a company gives its products. It has a capital letter; the thing itself does not.',
    tip: 'When you name the make of something, give it a capital letter and keep the thing itself small: a Samsung phone.',
  },
  'We drink Coca-Cola at parties.': {
    why: "'Coca-Cola' is a brand name, so both parts begin with a capital letter: Coca-Cola. 'We' begins the sentence. 'Drink' and 'parties' stay small.",
    not: {
      'They drink pepsi at lunch.': 'Pepsi is a brand name, so it needs a capital letter.',
      'I like Heinz Beans.':
        "The brand has a capital, but 'beans' is an ordinary word and stays small.",
      'She eats cadbury chocolate.': 'Cadbury is a company name, so it needs a capital letter.',
    },
    more: "The word 'cola' alone is an ordinary word and stays small. But in the brand name 'Coca-Cola', the second part keeps a capital letter too.",
    tip: 'Copy a brand name exactly as the company writes it, with the hyphen and both capitals.',
  },
  'She bought Nike trainers.': {
    why: "'Nike' is a brand name, so it begins with a capital letter. 'She' begins the sentence. 'Bought' and 'trainers' stay small.",
    not: {
      'He wears Puma Shoes.':
        "The brand has a capital, but 'shoes' is an ordinary word and stays small.",
      'I want levi’s jeans.': 'Levi’s is a brand name, so it needs a capital letter.',
      'She has a primark coat.': 'Primark is the name of a shop, so it needs a capital letter.',
    },
    more: "'Trainers' is the British word for sports shoes. It stays small, but 'Nike' in front of it is a name.",
    tip: 'A brand name before an ordinary noun keeps its capital letter, and the noun stays small.',
  },
  'He watched a film on Netflix.': {
    why: "'Netflix' is the name of a company, so it begins with a capital letter. 'He' begins the sentence. 'Watched', 'film' and 'on' stay small.",
    not: {
      'She heard it on the Radio.': "'Radio' is an ordinary word, not a name, so it stays small.",
      'I listened to it on spotify.':
        'Spotify is the name of a company, so it needs a capital letter.',
      'We saw the advert on Television.': "'Television' is an ordinary word, so it stays small.",
    },
    more: "Company names have capital letters, but ordinary words such as 'film', 'radio' and 'television' stay small.",
    tip: 'When you say where you watched or found something, write the company name with a capital letter.',
  },
  'I searched for it on Google.': {
    why: "'Google' is the name of a company, so it begins with a capital letter. 'I' is always a capital letter. 'Searched' and 'it' stay small.",
    not: {
      'I bought it on amazon.':
        'Amazon is the name of a company here, so it needs a capital letter.',
      'I found it on the Website.': "'Website' is an ordinary word, so it stays small.",
      'I read about it on wikipedia.': 'Wikipedia is a name, so it needs a capital letter.',
    },
    more: "The verb 'to google' is often written with a small g, but the company's name is always 'Google'. Here it is the name.",
    tip: 'Write the company name with a capital letter when you mean the website or the company: on Google.',
  },
  'The Toyota is parked outside.': {
    why: "'Toyota' is the name of a car brand, so it begins with a capital letter. 'The' begins the sentence. 'Parked' and 'outside' stay small.",
    not: {
      'The ford is in the garage.': 'Ford is a car brand here, so it needs a capital letter.',
      'My dad drives a red Car.': "'Car' is an ordinary word, so it stays small.",
      'Her honda is very old.': 'Honda is a car brand, so it needs a capital letter.',
    },
    more: 'A car is an ordinary word, but a car brand is a name.',
    tip: 'Give a capital letter to the make of a car, a phone or a pair of shoes.',
  },
  'Do you like the BBC news?': {
    why: "'BBC' is the short name of an organisation, so all its letters are capitals. 'Do' begins the question. 'News' is an ordinary word, so it stays small.",
    not: {
      'Do you live in the uk?': 'UK is made of initials, so both letters are capitals.',
      'Do You watch the news?': "'You' stays small in the middle of a sentence.",
      'Is he a doctor for the nhs?': 'NHS is made of initials, so all three letters are capitals.',
    },
    more: "Initials are written with capital letters. Each letter stands for a word, such as 'British Broadcasting Corporation'.",
    tip: 'Write initials in capital letters and without full stops.',
  },
  'On Monday I fly to France.': {
    why: "'On' begins the sentence, 'Monday' is a day, 'I' is always a capital letter and 'France' is a country. All four need capital letters. 'Fly' and 'to' stay small.",
    not: {
      'On tuesday I fly to Italy.': 'Every day of the week needs a capital letter.',
      'On Friday i fly to Greece.': "'I' is always a capital letter.",
      'In june I fly to Portugal.': 'A month needs a capital letter.',
    },
    more: "One sentence can use many capital rules: a first word, a day, 'I' and a country. Check them one by one.",
    tip: 'Go through the sentence from left to right and ask about each word: first word, name, place, day or month?',
  },
  'In April Sam visits Germany.': {
    why: "'In' begins the sentence, 'April' is a month, 'Sam' is a name and 'Germany' is a country. All four need capital letters. 'Visits' stays small.",
    not: {
      'In may Leo visits Austria.': 'A month needs a capital letter, even a short one.',
      'In June mia visits Wales.': 'Mia is a name, so it needs a capital letter.',
      'In July Ben visits holland.':
        'Holland is the name of a place, so it needs a capital letter.',
    },
    more: "A month and a country are both special names, so they have capitals, but a verb like 'visits' is an ordinary word.",
    tip: 'Check the month, the person and the country in every sentence about a trip.',
  },
  'I think English is easier than German.': {
    why: "'I' is always a capital letter. 'English' and 'German' are languages, so they begin with capitals. 'Think', 'is', 'easier' and 'than' stay small.",
    not: {
      'I think french is harder than Spanish.': 'Every language needs a capital letter.',
      'I think Italian is a Beautiful language.':
        "'Italian' is right, but 'beautiful' is an ordinary describing word, so it stays small.",
      'I know polish is hard to learn.':
        "As a language, Polish needs a capital letter. Small 'polish' means to make something shine.",
    },
    more: "When two languages are compared, both take capitals. The words that compare them, such as 'easier' and 'harder', stay small.",
    tip: 'When you give an opinion about languages, write each language name with a capital letter.',
  },
  'Next Friday Dr Ali leaves for Cairo.': {
    why: "'Next' begins the sentence. 'Friday' is a day, 'Dr' is a title, 'Ali' is a name and 'Cairo' is a city. All five need capital letters. 'Leaves' and 'for' stay small.",
    not: {
      'Next monday Dr Ben flies to Rome.': 'A day of the week needs a capital letter.',
      'Next Tuesday mrs Hill leaves for Oslo.':
        "A title before a name needs a capital letter: 'Mrs Hill'.",
      'Next Sunday Mr Ray goes to athens.': 'Athens is a city, so it needs a capital letter.',
    },
    more: 'The title and the name belong together: Dr Ali. The day and the city are special names too.',
    tip: 'A long sentence may need many capitals. Read it once just to look for capital letters.',
  },
  'My friend Olga speaks Russian and English.': {
    why: "'My' begins the sentence. 'Olga' is a name, and 'Russian' and 'English' are languages. All four need capital letters. 'Friend' and 'speaks' stay small.",
    not: {
      'My Friend Ivan speaks Russian very well.':
        "'Friend' stays small even before a name. Only the name has the capital.",
      'My cousin anna speaks Greek and Dutch.': 'Anna is a name, so it needs a capital letter.',
      'My aunt Rosa speaks portuguese with us.':
        'A language name needs a capital letter: Portuguese.',
    },
    more: "'Friend' stays small even before a name: my friend Olga. The name has the capital letter, not the word 'friend'.",
    tip: "When you introduce a friend, write the friend's name and the languages with capital letters.",
  },
  'In January we move to Canada.': {
    why: "'In' begins the sentence. 'January' is a month and 'Canada' is a country, so both need capital letters. 'We' and 'move' stay small.",
    not: {
      'In march we move to Kenya.': 'A month needs a capital letter.',
      'In May we move to india.': 'India is a country, so it needs a capital letter.',
      'In the Autumn we move to Chile.': 'Seasons are not names, so they stay small.',
    },
    more: "Even a short word like 'In' needs a capital letter at the start of a sentence.",
    tip: 'Plan a move or a trip in writing: In January we move to Canada. Check the month and the country.',
  },
  'Miss Ford and I visit York on Sunday.': {
    why: "'Miss' is a title and 'Ford' a name, 'I' is always a capital letter, 'York' is a city and 'Sunday' is a day. All need capitals. 'And' and 'visit' stay small.",
    not: {
      'Mr Cox and i visit Leeds on Monday.': "'I' is always a capital letter, even after 'and'.",
      'Mrs Bell and I visit hull on Tuesday.': 'Hull is a city, so it needs a capital letter.',
      'Dr Fox and I visit Bath on saturday.': 'A day of the week needs a capital letter.',
    },
    more: "In a phrase like 'Miss Ford and I', the 'I' keeps its capital letter even after 'and'.",
    tip: 'Check five things in a sentence like this: a title, a name, I, a place and a day.',
  },
  'We celebrate Christmas in December.': {
    why: "'Christmas' is the name of a festival and 'December' is a month, so both begin with capital letters. 'We' begins the sentence. 'Celebrate' stays small.",
    not: {
      'We celebrate easter in April.': 'A festival name needs a capital letter.',
      'We celebrate Eid in the Summer.': 'A season is not a name, so it stays small.',
      'They celebrate Diwali in november.': 'A month needs a capital letter.',
    },
    more: "Festival names and months have capitals. The word 'festival' itself is an ordinary word and stays small.",
    tip: 'Write the name of every festival with a capital letter when you write about your holidays.',
  },
  'Can Grandad come to the party?': {
    why: "Here 'Grandad' is used as his name, with no 'my' before it, so it takes a capital letter: 'Can Grandad come?'. The rest of the sentence follows the normal rules.",
    not: {
      'I asked mum for some money.':
        "With no 'my', 'mum' is used as her name here, so it needs a capital: 'I asked Mum'.",
      'My Mum is a teacher.': "After 'my', 'mum' is a family word, not a name, so it stays small.",
      'Is your Dad at home?': "After 'your', 'dad' is a family word and stays small.",
    },
    more: "A family word takes a capital when you use it instead of a name, as you would say 'Can Sara come?'. With 'my', 'your' or 'her', it stays small.",
    tip: "Try putting a name in its place. If 'Can Sara come?' works, the family word needs a capital.",
  },
  'The dentist, Dr Kaur, was very kind.': {
    why: "'Dr' is a title before a name, so it takes a capital, and so does the name, Kaur. 'Dentist' is a job word with no name straight after it, so it stays small.",
    not: {
      'My Doctor gave me some medicine.':
        "With no name after it, 'doctor' is a job word and stays small.",
      'We met professor Grey at the museum.':
        "Before a name, 'Professor' is a title, so it needs a capital letter.",
      'Ask the Nurse for a plaster.':
        "'Nurse' is a job word with no name after it, so it stays small.",
    },
    more: "The same word can be a job or a title. 'A professor' is a job; 'Professor Grey' is a title with a name.",
    tip: 'Check what comes straight after the word. A name means a title with a capital.',
  },
  'We walked along the river to Tower Bridge.': {
    why: "'Tower Bridge' is the name of one bridge, so both words take capitals. 'The river' has no name after it, so it stays small.",
    not: {
      'We sailed across lake Geneva in a small boat.':
        "'Lake' is part of the name Lake Geneva, so it needs a capital letter.",
      'They live in a flat on church Street.':
        "'Church Street' is a name, so 'Church' needs a capital as well.",
      'We climbed a Mountain in Wales last year.': "'A mountain' is not a name, so it stays small.",
    },
    more: 'A word for a kind of place takes a capital only when it is part of a name: a bridge, but Tower Bridge.',
    tip: 'Ask whether the word names one particular place you could find on a map.',
  },
  'We give presents at Christmas, in the winter.': {
    why: "'Christmas' is the name of a festival, so it takes a capital. 'Winter' is a season, and seasons stay small.",
    not: {
      'We eat Pancakes on Shrove Tuesday.':
        "'Shrove Tuesday' is a name, but 'pancakes' is an ordinary food word and stays small.",
      'Halloween comes at the end of October, in the Autumn.':
        "A season is not a name, so 'autumn' stays small.",
      'Our family celebrates eid with a big meal.':
        'Eid is the name of a festival, so it needs a capital letter.',
    },
    more: 'Festivals are named days, so they take capitals. The seasons they fall in are ordinary words.',
    tip: 'A festival or holiday with its own name takes a capital; a season never does.',
  },
  'My best friend at school speaks Portuguese.': {
    why: "'Portuguese' is the name of a language, so it takes a capital. 'My' starts the sentence, and 'friend' and 'school' are ordinary words, so they stay small.",
    not: {
      'I find Polish Grammar very interesting.':
        "'Polish' is right, but 'grammar' is an ordinary noun, so it stays small.",
      'We have french after lunch.': 'A language needs a capital letter, even as a lesson.',
      'Our new teacher speaks Italian and english.':
        'Every language name needs a capital letter, including English.',
    },
    more: 'A language takes a capital whether you speak it, learn it or have a lesson in it: Portuguese, a French lesson.',
    tip: 'In a sentence about languages, check every language name for its capital.',
  },
  'We drove south to visit friends in South Wales.': {
    why: "'South' here is first a direction, so it stays small: 'drove south'. In 'South Wales' it is part of the name of a region, so it takes a capital.",
    not: {
      'Every morning the sun rises in the East.':
        "Here 'east' is a direction, not part of a name, so it stays small.",
      'My uncle lives in a big city in north America.':
        "'North America' is the name of a continent, so 'North' needs a capital.",
      'We sailed West across the sea to France.':
        "A direction on its own stays small: 'sailed west'.",
    },
    more: 'North, south, east and west are ordinary words for directions. They take a capital only as part of a name: North America, South Africa, East London.',
    tip: 'Ask: is the word telling you which way, or is it part of a place’s name?',
  },
  'My aunt works for the United Nations.': {
    why: "'United Nations' is the name of an organisation, so each main word takes a capital. 'Aunt' follows 'my', so it stays small.",
    not: {
      'She has a job at the bbc.': 'BBC is made of initials, so all three letters are capitals.',
      'He studies at a University in Hull.': "'A university' is not a name, so it stays small.",
      'We live in the uk now.': 'UK is made of initials, so both letters are capitals.',
    },
    more: 'Organisations often use initials, and the initials take capitals: UN for United Nations.',
    tip: 'Write an organisation’s full name with capitals on its main words, and its initials all in capitals.',
  },
  'She took a photo with her Canon camera.': {
    why: "'Canon' is a brand name, so it takes a capital. 'Camera' is the ordinary word for the thing, so it stays small.",
    not: {
      'He drinks coffee from Starbucks every Morning.':
        "'Starbucks' is a name, but 'morning' is an ordinary word and stays small.",
      'I want a new Phone for my birthday.':
        "'Phone' is an ordinary word, not a brand, so it stays small.",
      'I read the news on the bbc website.':
        'BBC is made of initials, so it needs capital letters.',
    },
    more: 'A brand takes a capital, and the thing it makes does not: a Canon camera, a Sony television.',
    tip: 'Put the brand and the thing side by side: capital, then small.',
  },
  'See you on Monday morning, after the weekend.': {
    why: "'Monday' is a day of the week, so it takes a capital. 'Morning' and 'weekend' are not names of days, so they stay small.",
    not: {
      'The party is on Friday Night at my house.':
        "The day has a capital, but 'night' is an ordinary word and stays small.",
      'We have a test and a quiz next Week.': "'Week' is an ordinary word, so it stays small.",
      'I start my new job on tuesday, in the city.': 'A day of the week needs a capital letter.',
    },
    more: 'Only the seven day names take capitals. Words such as morning, night, week and weekend do not.',
    tip: 'Check each time word: is it the name of a day? If not, keep it small.',
  },
  'My birthday is on 3 May, in the spring.': {
    why: "'May' is a month, so it takes a capital, also in a date. 'Spring' is a season, and seasons stay small.",
    not: {
      'School starts again on 5 september.': 'A month in a date still needs a capital letter.',
      'The leaves fall in the Autumn.': "A season is not a name, so 'autumn' stays small.",
      'The Month of June is my favourite.':
        "'Month' is an ordinary word; only the month’s name takes a capital.",
    },
    more: 'In British English a date is often written day first: 3 May. The month keeps its capital however you write the date.',
    tip: 'In a date, check the month’s capital letter.',
  },
  'My friend Rose grows roses in her garden.': {
    why: "'Rose' is her name, so it takes a capital. 'Roses', the flowers, are ordinary things, so the word stays small.",
    not: {
      'My cousin Grace sang a Song.': "'Song' is an ordinary word, so it stays small.",
      'Our cat is called pepper.': 'Pepper is the cat’s name here, so it needs a capital letter.',
      'Jack used a Jack to lift the car.':
        "The first 'Jack' is a name, but the tool is a jack with a small j.",
    },
    more: 'Many names are also ordinary words: Rose, Grace, Jack, Pepper. The capital shows that the word is a name.',
    tip: 'Ask whether the word names a person or animal, or means the thing itself.',
  },
  'Most people in Wales speak English, and many speak Welsh too.': {
    why: "'Wales' is a country, and 'English' and 'Welsh' are languages, so all three take capitals. 'People' is an ordinary word.",
    not: {
      'My friend is from japan, and she speaks Japanese very well.':
        'Japan is a country, so it needs a capital letter, just like its language, Japanese.',
      'She is Brazilian, and she speaks portuguese with her family.':
        'A language needs a capital letter, just like the nationality: Portuguese.',
      'We stayed with a Greek Family on a small island near Athens.':
        "'Greek' needs its capital, but 'family' is an ordinary word.",
    },
    more: 'A country, its people and its language usually all take capitals: Wales, the Welsh, Welsh.',
    tip: 'Check all three kinds of word: country, nationality and language.',
  },
  'My brother goes to Riverside Primary School.': {
    why: "'Riverside Primary School' is the name of one school, so each word takes a capital. 'Brother' follows 'my', so it stays small.",
    not: {
      'Our School has a big library.':
        "Without its name, 'school' is an ordinary word and stays small.",
      'My sister studies at Durham university.':
        "'Durham University' is the name, so 'University' needs a capital.",
      'I want to go to the University of oxford.':
        'Oxford is a name, so it needs a capital letter.',
    },
    more: "'My school' and 'a university' are small. With the full name, every main word takes a capital.",
    tip: 'If you write the school’s name, give each main word a capital.',
  },
  'In the spring my uncle and I climbed mount Snowdon.': {
    why: "'Mount' is part of the name Mount Snowdon, so it needs a capital letter, like 'Snowdon'.",
    not: {
      spring: 'Seasons stay small.',
      uncle: "After 'my', 'uncle' is a family word and stays small.",
      climbed: "'Climbed' is a verb, so it stays small.",
    },
    more: "'A mountain' is small, but 'Mount' before a name is part of the name, like 'Lake' and 'River'.",
    tip: 'When a word for a kind of place comes right before the name, give it a capital.',
  },
  'Can mum pick us up from school after the match?': {
    why: "Here 'mum' is used as her name, with no 'my' before it, so it needs a capital letter: 'Can Mum pick us up?'",
    not: {
      school: "'School' is an ordinary word here, so it stays small.",
      match: "'Match' is an ordinary word.",
      pick: "'Pick' is a verb, so it stays small.",
    },
    more: "You could put her name in its place: 'Can Sara pick us up?'. That shows 'Mum' is being used as a name.",
    tip: "No 'my' before 'mum' or 'dad'? Then it is probably a name, with a capital.",
  },
  'My aunt and I visited uncle Raj at the seaside.': {
    why: "'Uncle' comes right before his name, with no 'my', so it works as a title and takes a capital: Uncle Raj. 'Aunt' follows 'my', so it stays small.",
    not: {
      aunt: "After 'my', a family word stays small: 'my aunt'.",
      visited: "'Visited' is a verb, so it stays small.",
      seaside: "'Seaside' is an ordinary word, not the name of a place.",
    },
    more: "A family word used as a title before a name takes a capital: Uncle Raj, Aunt Mina. With 'my' in front, write it small: my uncle.",
    tip: "No 'my' before the family word, and a name straight after it? Then give the family word a capital.",
  },
  'Our team won the cup at Park road School.': {
    why: "'Park Road School' is the name of one school, so 'road' is part of the name and needs a capital: Road.",
    not: {
      team: "'Team' is an ordinary word.",
      cup: "'Cup' here is not the name of a competition, so it stays small.",
      won: "'Won' is a verb, so it stays small.",
    },
    more: "A competition can have a name too, such as 'the FA Cup'. 'The cup' alone stays small.",
    tip: 'Give every main word of a name a capital, not only the first and the last.',
  },
  'We drove north for two hours to reach the city of inverness.': {
    why: "'Inverness' is the name of a city, so it needs a capital letter: Inverness.",
    not: {
      north: "Here 'north' is a direction, so it stays small.",
      hours: "'Hours' is an ordinary word.",
      city: "'The city of' is not part of the name here, so 'city' stays small.",
    },
    more: "A direction takes a capital only when it is part of a name. 'Drove north' is a direction.",
    tip: "After 'the city of' or 'the town of', the name itself takes a capital.",
  },
  'In the summer my cousin flew from north America to see us.': {
    why: "'North America' is the name of a continent, so 'north' is part of the name here and needs a capital letter: North.",
    not: {
      summer: 'Seasons stay small.',
      cousin: "'My cousin' is a family word with no name after it.",
      flew: "'Flew' is a verb.",
    },
    more: "Compare 'we flew north' (a direction) with 'North America' (a name). The same word can be both.",
    tip: 'If the direction word is part of a name on a map, it takes a capital.',
  },
  'For my birthday we had dinner at an indian restaurant.': {
    why: "'Indian' tells us where the food comes from, and words for nationality take capitals: an Indian restaurant.",
    not: {
      birthday: "'Birthday' is an ordinary word.",
      dinner: "Meals are ordinary words, so 'dinner' stays small.",
      restaurant: "'Restaurant' is the ordinary noun after 'Indian', so it stays small.",
    },
    more: 'A nationality word keeps its capital before a noun: Indian food, Italian shoes, Chinese tea.',
    tip: 'Words that come from a country’s name take a capital.',
  },
  'In November my family watches the fireworks on bonfire Night.': {
    why: "'Bonfire Night' is the name of a festival in Britain, so both words take capitals. Here 'bonfire' needs one: Bonfire Night.",
    not: {
      family: "'Family' is an ordinary word.",
      watches: "'Watches' is a verb here.",
      fireworks: "'Fireworks' is an ordinary word.",
    },
    more: "Bonfire Night, on 5 November, remembers a plot to blow up Parliament in 1605. 'A bonfire' alone stays small.",
    tip: 'In the name of a festival, every main word takes a capital.',
  },
  'In the winter we celebrate christmas with my grandparents.': {
    why: "'Christmas' is the name of a festival, so it needs a capital letter: Christmas.",
    not: {
      winter: 'Seasons stay small, even the one with Christmas in it.',
      celebrate: "'Celebrate' is a verb.",
      grandparents: "'Grandparents' is a family word after 'my'.",
    },
    more: "The festival takes a capital, and the season does not. That is why 'christmas' is wrong and 'winter' is right.",
    tip: 'Festivals: capital. Seasons: small.',
  },
  'The doctor at the desk said that dr Okoro would see me.': {
    why: "'Dr' is a title before the name Okoro, so it needs a capital letter: Dr Okoro. 'Doctor' at the start has no name after it, so it stays small.",
    not: {
      doctor: "'The doctor' is a job word with no name, so it stays small.",
      desk: "'Desk' is an ordinary word.",
      see: "'See' is a verb.",
    },
    more: "One sentence can show both: 'the doctor' (a job) and 'Dr Okoro' (a title with a name).",
    tip: 'Short forms such as Dr and Mr are always titles, so they always take capitals.',
  },
  'This year my sister and I are learning german at school.': {
    why: "'German' is the name of a language, so it needs a capital letter: German.",
    not: {
      sister: "After 'my', 'sister' is a family word, so it stays small.",
      year: "'Year' is an ordinary word, so it stays small.",
      school: "'School' here is an ordinary word, not the name of a school.",
    },
    more: 'Many languages write language names small, so this is easy to forget. In the usual UK style, other school subjects, such as science, stay small, but a language always takes a capital.',
    tip: 'Find the language in the sentence and give it a capital.',
  },
  'My little brother wants a ride on the London eye this summer.': {
    why: "'London Eye' is the name of one big wheel, so 'eye' is part of the name and needs a capital: Eye.",
    not: {
      brother: "'My brother' is a family word with no name.",
      ride: "'Ride' is an ordinary word.",
      summer: 'Seasons stay small.',
    },
    more: "An ordinary word such as 'eye' or 'bridge' takes a capital when it is part of a name: the London Eye.",
    tip: 'Check every word of a famous place’s name.',
  },
  'Every year in ramadan my family eats together after sunset.': {
    why: "'Ramadan' is the name of a month in the Islamic calendar, so it needs a capital letter: Ramadan.",
    not: {
      year: "'Year' is an ordinary word.",
      family: "'Family' is an ordinary word.",
      sunset: "'Sunset' is an ordinary word, so it stays small.",
    },
    more: 'Months of every calendar take capitals in English, and so do festivals.',
    tip: 'A named month or festival from any culture takes a capital letter.',
  },
  'My best friend’s birthday party is on 3 june.': {
    why: "'June' is a month, so it needs a capital letter, also in a date: 3 June.",
    not: {
      'friend’s': "'Friend’s' is an ordinary word with an apostrophe, not a name.",
      birthday: "'Birthday' is an ordinary word.",
      party: "'Party' is an ordinary word.",
    },
    more: "A date can be written '3 June' or 'the third of June'. The month takes a capital in both.",
    tip: 'In an invitation, check the day and the month.',
  },
  'Last night my dad and I watched england play Brazil.': {
    why: "'England' is the name of a country, and here of its team, so it needs a capital letter: England.",
    not: {
      night: "'Night' is an ordinary word.",
      dad: "After 'my', 'dad' is a family word and stays small.",
      watched: "'Watched' is a verb.",
    },
    more: 'A team named after a country keeps the country’s capital letter.',
    tip: 'Check both teams’ names in a sentence about a match.',
  },
  'My uncle works for the nhs as a nurse.': {
    why: 'NHS stands for National Health Service. It is made of initials, so all three letters are capitals: NHS.',
    not: {
      uncle: "After 'my', 'uncle' is a family word.",
      works: "'Works' is a verb.",
      nurse: "'Nurse' is a job word, so it stays small.",
    },
    more: 'Initials take capitals because each letter stands for a word with a capital.',
    tip: 'Write initials all in capitals and without full stops: NHS, BBC, UK.',
  },
  'Next summer my parents want to visit lake Como.': {
    why: "'Lake' is part of the name Lake Como, so it needs a capital letter: Lake Como.",
    not: {
      summer: 'Seasons stay small.',
      parents: "'Parents' is a family word.",
      visit: "'Visit' is a verb.",
    },
    more: "'A lake' is small, but 'Lake' before a name is part of the name.",
    tip: "When 'lake', 'river' or 'mount' comes before a name, give it a capital.",
  },
  'My family always goes for a walk on new Year’s Day.': {
    why: "'New Year’s Day' is the name of a holiday, so each main word takes a capital: New.",
    not: {
      family: "'Family' is an ordinary word.",
      always: "'Always' is an ordinary word.",
      walk: "'Walk' is an ordinary word.",
    },
    more: "Compare 'a new year' (ordinary words) with 'New Year’s Day' (a name).",
    tip: 'Every main word in the name of a holiday takes a capital.',
  },
  'At the weekend we went to a lego show in Birmingham.': {
    why: "'Lego' is a brand name, so it needs a capital letter: Lego.",
    not: {
      weekend: "'Weekend' is not the name of a day, so it stays small.",
      show: "'Show' is an ordinary word.",
      went: "'Went' is a verb.",
    },
    more: 'A brand that is also used for the toy itself still takes a capital.',
    tip: 'Brand names take capitals, even when everyone uses them every day.',
  },
  'My grandma comes from jamaica and makes great food.': {
    why: "'Jamaica' is the name of a country, so it needs a capital letter: Jamaica.",
    not: {
      grandma: "After 'my', 'grandma' is a family word and stays small.",
      great: "'Great' is an adjective.",
      food: "'Food' is an ordinary word.",
    },
    more: 'Islands and countries all take capitals: Jamaica, Ireland, Japan.',
    tip: "After 'comes from', check for a place name.",
  },
  'Our English teacher, miss Price, gives us a lot of homework.': {
    why: "'Miss' is a title before a name, so it needs a capital letter: Miss Price.",
    not: {
      teacher: "'Teacher' is a job word, so it stays small.",
      lot: "'Lot' is an ordinary word.",
      homework: "'Homework' is an ordinary word.",
    },
    more: "'English' here keeps its capital: it is a language, even when it names a teacher’s subject.",
    tip: 'A title before a name takes a capital, even in the middle of a sentence.',
  },
  'Every year my sister makes cards for valentine’s Day.': {
    why: "'Valentine’s Day' is the name of a special day, so each main word takes a capital: Valentine’s.",
    not: {
      year: "'Year' is an ordinary word.",
      sister: "'My sister' is a family word.",
      cards: "'Cards' is an ordinary word.",
    },
    more: 'Valentine’s Day is named after Saint Valentine, so the name part takes a capital.',
    tip: 'If a day is named after a person, the name takes a capital.',
  },
  'At the museum we learned about the romans and their roads.': {
    why: "'Romans' means the people of ancient Rome, so it takes a capital letter, like other words for peoples: Romans.",
    not: {
      museum: "'Museum' here is not the name of a museum, so it stays small.",
      roads: "'Roads' is an ordinary noun, so it stays small.",
      learned: "'Learned' is a verb, so it stays small.",
    },
    more: 'Words for peoples and nations take capitals: the Romans, the Vikings, the Egyptians.',
    tip: 'If a word comes from a place’s name, it usually takes a capital.',
  },
  'On our trip we saw the guards at buckingham Palace.': {
    why: "'Buckingham Palace' is the name of one building, so both words take capitals. Here 'buckingham' needs one: Buckingham.",
    not: {
      trip: "'Trip' is an ordinary word.",
      guards: "'Guards' is an ordinary word.",
      saw: "'Saw' is a verb.",
    },
    more: 'Famous buildings have names with capitals: Buckingham Palace, the British Museum.',
    tip: 'Give each main word of a building’s name a capital.',
  },
  'Have you ever been to the city of edinburgh?': {
    why: "'Edinburgh' is the name of a city, so it needs a capital letter: Edinburgh.",
    not: {
      ever: "'Ever' is an ordinary word.",
      been: "'Been' is a verb.",
      city: "'City' here is not part of the name.",
    },
    more: "Edinburgh is the capital of Scotland. The word 'capital' for a city is an ordinary word and stays small.",
    tip: 'A city’s name takes a capital even inside a question.',
  },
  'On Monday, Mum and I went to see the Doctor.': {
    why: "'Doctor' should be small. There is no name after it, so it is a job word: 'the doctor'. 'Mum' is right with a capital, because it is used as her name.",
    not: {
      Monday: "'Monday' is a day of the week, so its capital is right.",
      Mum: "With no 'my', 'Mum' is used as her name, so the capital is right.",
      I: "'I' is always a capital letter.",
    },
    more: "'Doctor' takes a capital only as a title before a name, usually written 'Dr': Dr Patel.",
    tip: 'No name after a job word? Then it stays small.',
  },
  'In August my Uncle took us to Lake Windermere.': {
    why: "'Uncle' should be small. It comes after 'my' and has no name after it: 'my uncle'.",
    not: {
      August: "'August' is a month, so its capital is right.",
      Lake: "'Lake' is part of the name Lake Windermere, so its capital is right.",
      Windermere: "'Windermere' is the lake’s name, so its capital is right.",
    },
    more: "'Uncle' takes a capital only before a name or used as a name: 'Uncle Raj', 'Hello, Uncle'.",
    tip: "After 'my', a family word with no name is small.",
  },
  'On Sunday we swam in the River near Aunt Lena’s farm.': {
    why: "'River' should be small. There is no name with it, so it is an ordinary word: 'the river'.",
    not: {
      Sunday: "'Sunday' is a day, so its capital is right.",
      Aunt: "'Aunt' comes right before her name, as a title, so its capital is right.",
      'Lena’s': "'Lena’s' is a name with an apostrophe, so its capital is right.",
    },
    more: "'River' takes a capital only as part of a name: the River Severn. Alone, it is small.",
    tip: 'Ask whether the word names one river on a map or just means a river.',
  },
  'Every Autumn, Grandma takes us to Kew Gardens.': {
    why: "'Autumn' should be small. Seasons are not names: 'Every autumn'.",
    not: {
      Grandma: "With no 'my', 'Grandma' is used as her name, so the capital is right.",
      Kew: "'Kew' is part of the name Kew Gardens, so its capital is right.",
      Gardens: "'Gardens' is part of the name of the place, so its capital is right.",
    },
    more: "'Gardens' is small in 'our gardens', but part of a name in 'Kew Gardens'.",
    tip: "Seasons are always small, even at the start of a phrase like 'every autumn'.",
  },
  'On Friday we drove North from London to Durham.': {
    why: "'North' should be small. Here it is a direction, not part of a name: 'drove north'.",
    not: {
      Friday: "'Friday' is a day, so its capital is right.",
      London: "'London' is a city, so its capital is right.",
      Durham: "'Durham' is a city, so its capital is right.",
    },
    more: 'A direction takes a capital only as part of a name, such as North Yorkshire or the North Sea.',
    tip: "If the word answers 'which way?', keep it small.",
  },
  'In September, Ana starts a new Course in Bristol.': {
    why: "'Course' should be small. It is an ordinary noun: 'a new course'.",
    not: {
      September: "'September' is a month, so its capital is right.",
      Ana: "'Ana' is a name, so its capital is right.",
      Bristol: "'Bristol' is a city, so its capital is right.",
    },
    more: "A course takes capitals only in its full official title, on a certificate or a website. In an ordinary sentence, 'a course' is small.",
    tip: "After 'a' or 'a new', a word is usually an ordinary noun, not a name.",
  },
  'On Saturday we bought Chinese food and a Cake for Dad.': {
    why: "'Cake' should be small. It is an ordinary food word: 'a cake for Dad'.",
    not: {
      Saturday: "'Saturday' is a day, so its capital is right.",
      Chinese: "'Chinese' is a nationality word, so its capital is right.",
      Dad: "With no 'my', 'Dad' is used as his name, so the capital is right.",
    },
    more: 'A nationality word before food keeps its capital, but the food word itself stays small: Chinese food.',
    tip: 'Food is small unless it is a brand name.',
  },
  'In May, my Grandma flew to Ireland with Uncle Ken.': {
    why: "'Grandma' should be small. It comes after 'my', so it is a family word: 'my grandma'. 'Uncle Ken' is right, because 'Uncle' is a title before a name, with no 'my'.",
    not: {
      May: "'May' is a month, so its capital is right.",
      Uncle:
        "'Uncle' comes right before his name, with no 'my', so it works as a title and its capital is right.",
      Ireland: "'Ireland' is a country, so its capital is right.",
    },
    more: "One sentence can show both rules: 'my grandma' (a family word) and 'Uncle Ken' (a title with a name).",
    tip: "'My' before a family word means a small letter. A family word used as a title before a name, with no 'my', takes a capital.",
  },
  'Next September Kingsway Academy will open a new Library.': {
    why: "'Library' should be small. After 'a new', it is an ordinary word, not the name of a building: 'a new library'.",
    not: {
      September: "'September' is a month, so its capital is right.",
      Kingsway: "'Kingsway' is part of the academy’s name, so its capital is right.",
      Academy: "'Academy' is part of the name Kingsway Academy, so its capital is right.",
    },
    more: "A library with its own name takes capitals, such as the British Library. 'A new library' does not.",
    tip: "'A' or 'a new' before a word usually means it is not a name.",
  },
  'On Christmas Day we eat Turkey with Aunt Jo.': {
    why: "'Turkey' should be small. Here it means the bird we eat, not the country: 'we eat turkey'.",
    not: {
      Christmas: "'Christmas' is the name of a festival, so its capital is right.",
      Day: "'Day' is part of the name Christmas Day, so its capital is right.",
      Aunt: "'Aunt' comes right before a name, as a title, so its capital is right.",
    },
    more: 'The country Turkey takes a capital; the bird does not. The capital shows the meaning.',
    tip: 'Ask whether the word names a place or person, or just a thing.',
  },
  'Is the Bank on Station Road open on Sundays?': {
    why: "'Bank' should be small. It is the kind of place, not its name: 'the bank on Station Road'.",
    not: {
      Station: "'Station Road' is the name of a road, so 'Station' takes a capital.",
      Road: "'Road' is part of the road’s name, so its capital is right.",
      Sundays: 'Days take capitals, even with -s.',
    },
    more: "'Station' and 'Road' are ordinary words, but together they are the name of one road.",
    tip: "A bank’s own name, such as Lloyds Bank, takes capitals; 'the bank' does not.",
  },
  'In the Easter holidays, Leo and I visited a Castle in Wales.': {
    why: "'Castle' should be small. It is the kind of building, not its name: 'a castle in Wales'.",
    not: {
      Easter: "'Easter' is the name of a festival, so its capital is right.",
      Leo: "'Leo' is a name, so its capital is right.",
      Wales: "'Wales' is a country, so its capital is right.",
    },
    more: "A castle with its name takes capitals, such as Conwy Castle. 'A castle' does not.",
    tip: "After 'a', a word for a kind of building is small.",
  },
  'On Friday Dad bought a new Car from the Ford garage.': {
    why: "'Car' should be small. It is an ordinary word: 'a new car'. 'Ford' is right with a capital, because it is a brand.",
    not: {
      Friday: "'Friday' is a day, so its capital is right.",
      Dad: "With no 'my', 'Dad' is used as his name, so the capital is right.",
      Ford: "'Ford' is a car brand, so its capital is right.",
    },
    more: 'The brand takes a capital, and the thing it makes stays small: a Ford car, a Ford garage.',
    tip: 'Check each noun: brand or ordinary thing?',
  },
  'Mr Doyle teaches French and Spanish at our School.': {
    why: "'School' should be small. It is an ordinary word here, not the name of a school: 'at our school'.",
    not: {
      Mr: "'Mr' is a title before a name, so its capital is right.",
      Doyle: "'Doyle' is a family name, so its capital is right.",
      French: "'French' is a language, so its capital is right.",
    },
    more: "A school takes capitals only in its full name, such as Oakfield High School. 'Our school' and 'a school' stay small.",
    tip: "Ask: is it the name of one school, or just the word 'school'?",
  },
  'Our Neighbour, Mrs Clarke, has a dog called Biscuit.': {
    why: "'Neighbour' should be small. It is an ordinary word, and her name follows: 'our neighbour, Mrs Clarke'.",
    not: {
      Mrs: "'Mrs' is a title before a name, so its capital is right.",
      Clarke: "'Clarke' is a family name, so its capital is right.",
      Biscuit: "'Biscuit' is the dog’s name here, so its capital is right.",
    },
    more: "'Biscuit' is small as a food but takes a capital as a pet’s name.",
    tip: "A word that comes before a name in commas, such as 'our neighbour', stays small.",
  },
  'In June we fly to New York with my Brother.': {
    why: "'Brother' should be small. It comes after 'my', so it is a family word: 'my brother'.",
    not: {
      June: "'June' is a month, so its capital is right.",
      New: "'New' is part of the name New York, so its capital is right.",
      York: "'York' is part of the name New York, so its capital is right.",
    },
    more: "'New' is an ordinary word in 'a new car' but part of a name in 'New York' and 'New Zealand'.",
    tip: 'Every word of a place’s name takes a capital.',
  },
  'Dad says the UK and France are joined by a Tunnel.': {
    why: "'Tunnel' should be small. It is an ordinary word after 'a': 'a tunnel'.",
    not: {
      Dad: "With no 'my', 'Dad' is used as his name, so the capital is right.",
      UK: 'UK is made of initials, so both capitals are right.',
      France: "'France' is a country, so its capital is right.",
    },
    more: "The tunnel’s own name, the Channel Tunnel, takes capitals. 'A tunnel' does not.",
    tip: "'A' or 'an' before a word usually means it is not a name.",
  },
  'On Valentine’s Day, Sam gave Mia a Rose.': {
    why: "'Rose' should be small here. It means a flower, not a person’s name: 'a rose'.",
    not: {
      'Valentine’s': "'Valentine’s Day' is the name of a day, so its capital is right.",
      Sam: "'Sam' is a name, so its capital is right.",
      Mia: "'Mia' is a name, so its capital is right.",
    },
    more: "'Rose' takes a capital only as a name: 'My friend Rose'. After 'a', it is the flower.",
    tip: "If 'a' or 'the' comes before it, a word like 'rose' is usually the thing, not the name.",
  },
  'Grandad and I watched the Olympics on the BBC every day in the Summer.': {
    why: "'Summer' should be small. Seasons are not names: 'in the summer'.",
    not: {
      Grandad: "With no 'my', 'Grandad' is used as his name, so the capital is right.",
      Olympics: "'The Olympics' is the name of an event, so its capital is right.",
      BBC: 'BBC is made of initials, so the capitals are right.',
    },
    more: 'An event’s name takes a capital, even one that happens in the summer, such as the Summer Olympics. The season alone does not.',
    tip: 'Check a season word: is it part of a name, or just the time of year?',
  },
  'Ravi’s Grandparents celebrate Diwali in October or November.': {
    why: "'Grandparents' should be small. It is an ordinary word for relatives, not a name: 'Ravi’s grandparents'.",
    not: {
      'Ravi’s': "'Ravi’s' is a name with an apostrophe, so its capital is right.",
      Diwali: "'Diwali' is the name of a festival, so its capital is right.",
      October: "'October' is a month, so its capital is right.",
    },
    more: 'Diwali falls in October or November, so both months are right. Both take capitals.',
    tip: 'The owner’s name takes a capital; the relatives after it stay small.',
  },
  'Our teacher, Mr Wong, grew up in Lima, near the Ocean.': {
    why: "'Ocean' should be small here. There is no name with it, so it is an ordinary word: 'near the ocean'.",
    not: {
      Mr: "'Mr' is a title before a name, so its capital is right.",
      Wong: "'Wong' is a family name, so its capital is right.",
      Lima: "'Lima' is a city in Peru, so its capital is right.",
    },
    more: "'Ocean' takes a capital only as part of a name, such as the Pacific Ocean, which Lima stands beside.",
    tip: 'Sea and ocean words are small alone and take capitals inside a name.',
  },
  'On Tuesday, Mum and I visited Grandad in Hospital.': {
    why: "'Hospital' should be small. 'In hospital' uses the ordinary word: 'visited Grandad in hospital'.",
    not: {
      Tuesday: "'Tuesday' is a day, so its capital is right.",
      Mum: "With no 'my', 'Mum' is used as her name, so the capital is right.",
      Grandad: "With no 'my', 'Grandad' is used as his name, so the capital is right.",
    },
    more: "British English says 'in hospital' with no article for a patient. A hospital’s full name takes capitals.",
    tip: 'Family words used as names take capitals: Mum, Dad, Grandad.',
  },
  'Every Easter, Uncle Tariq bakes a Chocolate cake.': {
    why: "'Chocolate' should be small. It is an ordinary food word: 'a chocolate cake'.",
    not: {
      Easter: "'Easter' is the name of a festival, so its capital is right.",
      Uncle: "'Uncle' comes right before his name, as a title, so its capital is right.",
      Tariq: "'Tariq' is a name, so its capital is right.",
    },
    more: 'A word that describes food stays small, unless it is a brand or a nationality.',
    tip: 'Check each word before a noun: is it a name, or an ordinary describing word?',
  },
  'In March my Mum started work at Lloyds Bank in Cardiff.': {
    why: "'Mum' should be small here. It comes after 'my', so it is a family word: 'my mum'.",
    not: {
      March: "'March' is a month, so its capital is right.",
      Lloyds: "'Lloyds Bank' is a company’s name, so its capital is right.",
      Cardiff: "'Cardiff' is a city, so its capital is right.",
    },
    more: "Compare 'Mum started work' (used as her name) with 'my mum started work' (a family word).",
    tip: "The little word 'my' turns a family name back into an ordinary word.",
  },
  'Is your Teacher Mr Grant or Mrs Shaw?': {
    why: "'Teacher' should be small. It comes after 'your' and is a job word: 'your teacher'.",
    not: {
      Mr: "'Mr' is a title before a name, so its capital is right.",
      Grant: "'Grant' is a family name, so its capital is right.",
      Shaw: "'Shaw' is a family name, so its capital is right.",
    },
    more: 'A job word stays small even when the next words are a title and a name.',
    tip: 'Give capitals to the titles and the names, and keep the job word small.',
  },
  'For they said, it was a shame to quarrel upon christmas Day.': {
    why: "'christmas' needs a capital letter because it is part of the name of a festival day. Dickens printed it 'Christmas Day', with a capital on both words (Stave III).",
    not: {
      said: "'said' is an ordinary verb in the middle of the sentence, so it stays small.",
      shame: "'shame' is an ordinary noun, not a name, so it stays small.",
      quarrel: "'quarrel' is an ordinary verb, so it stays small.",
    },
    more: 'Festivals and special days are names, so each main word takes a capital: Easter Monday, Boxing Day.',
    tip: 'If a day has its own name in the calendar, every main word of that name takes a capital.',
  },
  'It came in a full tide down exhibition Road.': {
    why: "'exhibition' needs a capital here because it is part of the name of a road. Wells printed 'Exhibition Road', a real road in Kensington, with a capital on both words (The War of the Worlds, Book Two, Chapter VIII).",
    not: {
      came: "'came' is an ordinary verb, so it stays small.",
      full: "'full' is an ordinary describing word, so it stays small.",
      tide: "'tide' is an ordinary noun here, not part of a name, so it stays small.",
    },
    more: "On its own, 'exhibition' is an ordinary word. Inside the name of a road it takes a capital, like every other word of the name.",
    tip: 'Read the whole name: if one word of a road’s name has a capital, the others need one too.',
  },
  "It's twice the size of tiny Tim.": {
    why: "'tiny' needs a capital here because it is part of a boy’s name. In this Dickens story, 'Tiny Tim' is what everyone calls Bob Cratchit’s little son, so both words take capitals (Stave V).",
    not: {
      twice: "'twice' is an ordinary word meaning 'two times', so it stays small.",
      the: "'the' is a small word in the middle of the sentence, so it stays small.",
      size: "'size' is an ordinary noun, so it stays small.",
    },
    more: "A nickname works like a name: every word of it takes a capital, even a describing word such as 'Tiny'.",
    tip: 'When a describing word is part of what someone is called, it takes a capital.',
  },
  'That woman was no other than grace Poole.': {
    why: "'grace' needs a capital because it is a first name here: Grace Poole is a servant at Thornfield. Charlotte Brontë printed 'Grace Poole' with two capitals (Jane Eyre, Chapter 16).",
    not: {
      woman: "'woman' is an ordinary noun, not a name, so it stays small.",
      other: "'other' is an ordinary word, so it stays small.",
      than: "'than' is a small joining word, so it stays small.",
    },
    more: 'Some first names are also ordinary words: Grace, Hope, Faith. They take a capital only when they are someone’s name.',
    tip: 'Is it a person’s name here? A word just before a family name usually is.',
  },
  'The next day I left Marsh End for morton.': {
    why: "'morton' needs a capital because it is the name of a village. Jane leaves the house called Marsh End to teach at the school in Morton, and Brontë printed both names with capitals (Jane Eyre, Chapter 30).",
    not: {
      next: "'next' is an ordinary word in the middle of the sentence, so it stays small.",
      day: "'day' is an ordinary noun here, so it stays small.",
      left: "'left' is an ordinary verb, so it stays small.",
    },
    more: "The names of villages, towns and houses all take capitals. 'Marsh End' is the name of a house, so both of its words have one.",
    tip: "After 'for', 'to' or 'in', check whether the next word names a place.",
  },
  'After the horses came muriel, the white goat, and Benjamin, the donkey.': {
    why: "'muriel' needs a capital because it is a name: Muriel is the white goat on the farm. Orwell printed 'Muriel' and 'Benjamin' with capitals (Animal Farm, Chapter I).",
    not: {
      horses: "'horses' is an ordinary noun for the animals, so it stays small.",
      goat: "'goat' tells us what kind of animal Muriel is. It is not her name, so it stays small.",
      donkey: "'donkey' says what Benjamin is, not who he is, so it stays small.",
    },
    more: "An animal’s name takes a capital, like a person’s. The word for the kind of animal does not: 'Muriel, the white goat'.",
    tip: "Name or kind? 'Benjamin' is a name; 'donkey' is a kind of animal.",
  },
  'The animals had their breakfast, and then snowball and Napoleon called them together again.': {
    why: "'snowball' needs a capital because it is the name of one of the pigs. Orwell printed 'Snowball and Napoleon' with two capitals (Animal Farm, Chapter II).",
    not: {
      animals: "'animals' is an ordinary noun for all of them, so it stays small.",
      breakfast: "Meals are ordinary nouns, so 'breakfast' stays small.",
      together: "'together' is an ordinary word, so it stays small.",
    },
    more: "Some names are ordinary words too. 'A snowball' is a ball of snow and stays small; 'Snowball' the pig takes a capital.",
    tip: 'When an ordinary word is used as a character’s name, it takes a capital.',
  },
  'Only boxer and Clover never lost heart.': {
    why: "'boxer' needs a capital because it is the name of the farm’s strongest horse. Orwell printed it with a capital, beside the name of another horse (Animal Farm, Chapter VII).",
    not: {
      never: "'never' is an ordinary word, so it stays small.",
      lost: "'lost' is an ordinary verb, so it stays small.",
      heart:
        "'heart' is part of the phrase 'lose heart', which means stop hoping. It is not a name, so it stays small.",
    },
    more: "'A boxer' is someone who boxes and stays small. As the name of the horse, 'Boxer' takes a capital, like any name.",
    tip: "Two names joined by 'and' both take capitals.",
  },
  'It was uncertain whether Boxer had understood what clover had said.': {
    why: "'clover' needs a capital because it is a name: Clover is a motherly old horse on the farm. Orwell printed it with a capital (Animal Farm, Chapter IX).",
    not: {
      uncertain: "'uncertain' is an ordinary describing word, so it stays small.",
      understood: "'understood' is an ordinary verb, so it stays small.",
      said: "'said' is an ordinary verb, so it stays small.",
    },
    more: "'Clover' is also a small plant, and then it stays small. Used as the name of a character, it takes a capital.",
    tip: 'Look for who is speaking or acting: a character’s name takes a capital wherever it comes.',
  },
  'Miss Sarah Pocket came to the Gate.': {
    why: "'Gate' should be small. It is an ordinary noun for the gate of the house, not part of a name. Dickens printed 'came to the gate' (Great Expectations, Chapter 15).",
    not: {
      Miss: "'Miss' is a title before a name, so its capital is right.",
      Sarah: "'Sarah' is a first name, so its capital is right.",
      Pocket:
        "'Pocket' is her family name here, so its capital is right, even though 'pocket' is also an ordinary word.",
    },
    more: 'A word can be a family name and an ordinary noun: Pocket, Wood, Field. Ask which it is in this sentence.',
    tip: "After 'the', a noun is usually ordinary and stays small.",
  },
  'It was past midnight when I crossed London bridge.': {
    why: "'bridge' needs a capital here because it is part of a name: London Bridge is one bridge with its own name. Dickens printed it with two capitals (Great Expectations, Chapter 44).",
    not: {
      past: "'past' is an ordinary word in a time phrase, so it stays small.",
      midnight: "Times of day are ordinary nouns, so 'midnight' stays small.",
      crossed: "'crossed' is an ordinary verb, so it stays small.",
    },
    more: "A word like 'bridge' takes a capital only when it is part of a name. 'We crossed a bridge' stays small; 'We crossed Tower Bridge' does not.",
    tip: 'Check the word before it: if that is a name, the two words may be one name.',
  },
  'Business had taken Herbert on a journey to marseilles.': {
    why: "'marseilles' needs a capital because it is the name of a city in France. Dickens printed 'Marseilles', the older English spelling of Marseille (Great Expectations, Chapter 39).",
    not: {
      taken: "'taken' is an ordinary verb, so it stays small.",
      on: "'on' is a small joining word, so it stays small.",
      journey: "'journey' is an ordinary noun, so it stays small.",
    },
    more: 'A city takes a capital wherever it comes in a sentence, at the end as much as at the start.',
    tip: "After 'to', 'from' or 'in', ask: is the next word a place with its own name?",
  },
  'Evidently biddy had taught Joe to write.': {
    why: "'biddy' needs a capital because it is a name: Biddy is a young woman from Pip’s village. Dickens printed it with a capital (Great Expectations, Chapter 57).",
    not: {
      had: "'had' is a small verb in the middle of the sentence, so it stays small.",
      taught: "'taught' is an ordinary verb, so it stays small.",
      write: "'write' is an ordinary verb, so it stays small.",
    },
    more: 'A name keeps its capital wherever it comes in the sentence: at the start, in the middle or at the end.',
    tip: 'People’s names always take capitals. Look for the word that tells you who.',
  },
  'One afternoon late in october I saw Tom Buchanan.': {
    why: "'october' needs a capital because it is a month. Fitzgerald printed 'late in October' (The Great Gatsby, Chapter IX).",
    not: {
      afternoon: "Parts of the day are ordinary nouns, so 'afternoon' stays small.",
      late: "'late' is an ordinary word, so it stays small.",
      saw: "'saw' is an ordinary verb, so it stays small.",
    },
    more: "All twelve months take capitals, but the words around them, such as 'afternoon', 'late' and 'early', stay small.",
    tip: 'Months and days take capitals; seasons and times of day do not.',
  },
  'A bath at Baker street and a complete change freshened me up wonderfully.': {
    why: "'street' needs a capital here because it is part of the name Baker Street, where Sherlock Holmes lives. Conan Doyle printed it with two capitals (The Sign of Four, Chapter VIII).",
    not: {
      bath: "'bath' is an ordinary noun, so it stays small.",
      change: "'change' is an ordinary noun here, so it stays small.",
      wonderfully: "'wonderfully' is an ordinary describing word, so it stays small.",
    },
    more: "Words like 'street', 'lane' and 'avenue' take a capital only as part of a name: 'a busy street', but 'Baker Street'.",
    tip: "If a word like 'street' comes straight after a name, it is part of that name.",
  },
  'Major Sholto was to go to india to test our story.': {
    why: "'india' needs a capital because it is the name of a country. Conan Doyle printed 'to go to India' (The Sign of Four, Chapter XII).",
    not: {
      go: "'go' is an ordinary verb, so it stays small.",
      test: "'test' is an ordinary verb here, so it stays small.",
      story: "'story' is an ordinary noun, so it stays small.",
    },
    more: "'Major' has a capital because it is a rank used as a title before a name, like 'Mrs' or 'Dr'. Country names take capitals wherever they come.",
    tip: "After 'to go to', look for the name of a place.",
  },
  'He comes down on thursday at the latest, very likely on Wednesday.': {
    why: "'thursday' needs a capital because it is a day of the week, like the other day at the end of the same sentence. Austen printed 'on Thursday at the latest' (Pride and Prejudice, Chapter 53).",
    not: {
      comes: "'comes' is an ordinary verb, so it stays small.",
      latest: "'latest' is an ordinary describing word, so it stays small.",
      likely: "'likely' is an ordinary word, so it stays small.",
    },
    more: "Days of the week are names, so all seven take capitals. The words 'week' and 'weekend' do not.",
    tip: 'Every day of the week takes a capital, even in the middle of a sentence.',
  },
  'Henry Clerval was the son of a merchant of geneva.': {
    why: "'geneva' needs a capital because it is the name of a city in Switzerland. Mary Shelley printed 'a merchant of Geneva' (Frankenstein, Chapter II).",
    not: {
      was: "'was' is a small verb, so it stays small.",
      son: "A family word such as 'son' stays small when it is not used as a name.",
      merchant: "A job word such as 'merchant' stays small.",
    },
    more: 'Jobs and family words stay small. The names of people and places take capitals.',
    tip: "In 'a merchant of ...', the word after 'of' is often a place. Check whether it is a name.",
  },
  'It was on a dreary night of november, that I beheld the accomplishment of my toils.': {
    why: "'november' needs a capital because it is a month. Mary Shelley printed 'a dreary night of November' at the start of Chapter V of Frankenstein, the night Victor finishes his work.",
    not: {
      dreary: "'dreary' is an ordinary describing word meaning dull and sad, so it stays small.",
      accomplishment:
        "'accomplishment' is a long word, but it is an ordinary noun, so it stays small.",
      toils: "'toils' is an ordinary noun meaning hard work, so it stays small.",
    },
    more: 'Length does not decide a capital. A short month takes one; a long ordinary noun does not.',
    tip: 'Ask what kind of word it is, not how important it looks.',
  },
  'My younger brother was in London when the martians fell at Woking.': {
    why: "'martians' needs a capital because it is made from the name of a planet, just as 'Scottish' is made from 'Scotland'. Wells printed 'the Martians' with a capital (The War of the Worlds, Book One, Chapter XIV).",
    not: {
      younger: "'younger' is an ordinary describing word, so it stays small.",
      brother: "After 'my', a family word stays small: 'my younger brother'.",
      fell: "'fell' is an ordinary verb, so it stays small.",
    },
    more: 'A word made from the name of a place takes a capital too, whether the place is a planet, a country or a city.',
    tip: 'If a word comes from a name, it keeps the name’s capital.',
  },
  'We crossed richmond Bridge about half past eight.': {
    why: "'richmond' needs a capital because it is the name of a town on the Thames, and here the first word of the name Richmond Bridge. Wells printed it with two capitals (The War of the Worlds, Book Two, Chapter I).",
    not: {
      crossed: "'crossed' is an ordinary verb, so it stays small.",
      half: "'half' is part of the time 'half past eight', so it stays small.",
      past: "'past' is part of a time, so it stays small.",
    },
    more: 'When a bridge is named after a place, both words take capitals: Richmond Bridge, Kew Bridge.',
    tip: 'If one word of a name has a capital, check the word next to it.',
  },
  'In spite of Ogilvy, I still believed that there were men in mars.': {
    why: "'mars' needs a capital because it is the name of a planet. Wells printed 'men in Mars' (The War of the Worlds, Book One, Chapter III). Ogilvy is the astronomer the narrator knows.",
    not: {
      spite: "'spite' is part of the phrase 'in spite of', so it stays small.",
      believed: "'believed' is an ordinary verb, so it stays small.",
      men: "'men' is an ordinary noun, so it stays small.",
    },
    more: "Planets have names, so they take capitals: Venus, Jupiter. The words 'planet', 'sun' and 'moon' usually stay small in everyday writing.",
    tip: 'A planet is a place with its own name, like a country.',
  },
  'Yes, I had gone to bed Henry jekyll, I had awakened Edward Hyde.': {
    why: "'jekyll' needs a capital because it is a family name: Henry Jekyll. Stevenson printed both names in this line with capitals, in the statement Jekyll writes at the end of the book.",
    not: {
      gone: "'gone' is an ordinary verb, so it stays small.",
      bed: "'bed' is an ordinary noun, so it stays small.",
      awakened: "'awakened' is an ordinary verb meaning woke up, so it stays small.",
    },
    more: 'A first name and a family name both take capitals, wherever they come in the sentence.',
    tip: 'Two names side by side? Both take capitals.',
  },
  'His name was announced as roger Chillingworth.': {
    why: "'roger' needs a capital because it is a first name. Hawthorne printed 'Roger Chillingworth' with two capitals (The Scarlet Letter, Chapter IV).",
    not: {
      name: "'name' is an ordinary noun, so it stays small.",
      announced: "'announced' is an ordinary verb, so it stays small.",
      as: "'as' is a small joining word, so it stays small.",
    },
    more: 'A whole name takes a capital on each part: the first name and the family name.',
    tip: "After 'his name was', expect a name, with a capital on each part.",
  },
  'November, December, and half of January Passed away.': {
    why: "'Passed' should be small. It is an ordinary verb, not a name: the months take capitals, but the verb does not. Brontë printed it small (Jane Eyre, Chapter 4).",
    not: {
      November: "'November' is a month, so its capital is right.",
      December: "'December' is a month, so its capital is right.",
      January: "'January' is a month, so its capital is right.",
    },
    more: "'Passed away' here means the months went by. A verb stays small however important the sentence feels.",
    tip: 'Months take capitals; the verbs that follow them stay small.',
  },
  'Whether It were Greek or German I could not tell.': {
    why: "'It' should be small. It is in the middle of the sentence and is not a name. Only 'I' is always a capital. Brontë printed it small (Jane Eyre, Chapter 28).",
    not: {
      Greek: "'Greek' is the name of a language, so its capital is right.",
      German: "'German' is the name of a language, so its capital is right.",
      I: "'I' is always a capital letter, wherever it comes.",
    },
    more: 'Outside a window, Jane hears one of two sisters reading aloud and cannot tell which language it is. Languages always take capitals.',
    tip: "'I' is the only small word that always takes a capital. 'It', 'is' and 'in' do not.",
  },
  'As usual, Snowball and Napoleon were in Disagreement.': {
    why: "'Disagreement' should be small. It is an ordinary noun, not a name. Orwell printed 'in disagreement' (Animal Farm, Chapter V).",
    not: {
      As: "'As' starts the sentence, so its capital is right.",
      Snowball: "'Snowball' is the name of a pig, so its capital is right.",
      Napoleon: "'Napoleon' is the name of a pig, so its capital is right.",
    },
    more: "Long or serious words do not need capitals. Names, the first word of a sentence and 'I' do.",
    tip: "If you can put 'a' or 'the' before it, it is probably an ordinary noun.",
  },
  'Everything was Unchanged, and Miss Havisham was alone.': {
    why: "'Unchanged' should be small. It is an ordinary describing word. Dickens printed 'Everything was unchanged' (Great Expectations, Chapter 15).",
    not: {
      Everything: "'Everything' starts the sentence, so its capital is right.",
      Miss: "'Miss' is a title before a name, so its capital is right.",
      Havisham: "'Havisham' is a family name, so its capital is right.",
    },
    more: 'Writers show that a word matters by where they put it, not by giving it a capital. In Miss Havisham’s house, nothing ever changes.',
    tip: 'Describing words stay small, however important they are to the meaning.',
  },
  'Estella was Knitting, and Miss Havisham was looking on.': {
    why: "'Knitting' should be small. It is an ordinary verb: Estella was knitting. Dickens printed it small (Great Expectations, Chapter 44).",
    not: {
      Estella: "'Estella' is a first name, so its capital is right.",
      Miss: "'Miss' is a title before a name, so its capital is right.",
      Havisham: "'Havisham' is a family name, so its capital is right.",
    },
    more: "A verb never takes a capital just because it comes after a name. 'Estella was knitting' has one capital, on the name.",
    tip: 'After a name, check the next word: it usually goes back to small letters.',
  },
  'We shall have no peace at Longbourn if lydia does not go to Brighton.': {
    why: "'lydia' needs a capital because it is a first name: Lydia is the youngest of the five Bennet girls. Austen printed it with a capital (Pride and Prejudice, Chapter 41).",
    not: {
      shall: "'shall' is a small verb, so it stays small.",
      peace: "'peace' is an ordinary noun, so it stays small.",
      does: "'does' is a small verb, so it stays small.",
    },
    more: 'Longbourn, the Bennets’ estate, takes a capital for the same reason: it is a name.',
    tip: 'Names of people and places both take capitals, wherever they come.',
  },
  'The Ladies of Longbourn soon waited on those of Netherfield.': {
    why: "'Ladies' should be small. It is an ordinary noun for the women of the family, not a title before a name. Austen printed 'The ladies of Longbourn' (Pride and Prejudice, Chapter 6).",
    not: {
      The: "'The' starts the sentence, so its capital is right.",
      Longbourn: "'Longbourn' is the name of a place, so its capital is right.",
      Netherfield: "'Netherfield' is the name of a house, so its capital is right.",
    },
    more: "'Lady' takes a capital only as a title before a name: Lady Catherine. 'The ladies of the house' stays small.",
    tip: 'A title word with no name after it is an ordinary noun.',
  },
  'You are all to come to pemberley at Christmas.': {
    why: "'pemberley' needs a capital because it is the name of Mr Darcy’s house and estate. Austen printed it with a capital (Pride and Prejudice, Chapter 60).",
    not: {
      all: "'all' is an ordinary word, so it stays small.",
      come: "'come' is an ordinary verb, so it stays small.",
      are: "'are' is a small verb, so it stays small.",
    },
    more: 'Big country houses often have their own names, and those names take capitals, just like towns.',
    tip: 'If a word names one particular house, it takes a capital.',
  },
  "Charlotte's Reply was spared by the entrance of Jane and Elizabeth.": {
    why: "'Reply' should be small. It is an ordinary noun for her answer. Austen printed 'Charlotte's reply' (Pride and Prejudice, Chapter 20).",
    not: {
      "Charlotte's": "'Charlotte's' is a name with an apostrophe, so its capital is right.",
      Jane: "'Jane' is a first name, so its capital is right.",
      Elizabeth: "'Elizabeth' is a first name, so its capital is right.",
    },
    more: "After a name with 's, the next word usually stays small: 'Charlotte's reply', 'Jane's letter'.",
    tip: 'The owner’s name takes a capital; the thing they own does not.',
  },
  '"My dear Mr. Bennet," said his lady to him one day, "Have you heard that Netherfield park is let at last?"':
    {
      why: "'Have' should be small, because Mrs Bennet’s question carries on after 'said his lady to him one day'. 'park' needs a capital, because Netherfield Park is the name of a house. Austen printed 'have you heard that Netherfield Park is let' (Chapter 1).",
      not: {
        '‘Mr.’ and ‘park’':
          "'park' is wrong, but 'Mr.' is right: a title before a name takes a capital. Austen wrote it with a full stop.",
        '‘Have’ and ‘Bennet’':
          "'Have' is wrong, but 'Bennet' is a family name and its capital is right.",
        '‘Mr.’ and ‘Bennet’':
          "Both are right: 'Mr.' is a title and 'Bennet' is a family name. The wrong words are elsewhere.",
      },
      more: "When speech is split by words like 'she said', the second part starts with a small letter if it carries on the same sentence.",
      tip: "Read the speech without the 'said' part. If it is one sentence, the second half starts small.",
    },
  'From Italy they Visited Germany and France.': {
    why: "'Visited' should be small. It is an ordinary verb in the middle of the sentence. Mary Shelley printed 'they visited Germany and France' (Frankenstein, Chapter I).",
    not: {
      Italy: "'Italy' is the name of a country, so its capital is right.",
      Germany: "'Germany' is the name of a country, so its capital is right.",
      France: "'France' is the name of a country, so its capital is right.",
    },
    more: 'A sentence full of names can make every word look as if it needs a capital. Check each word on its own.',
    tip: 'Countries take capitals; the verbs between them do not.',
  },
  'The Majority of people in London do not read Sunday papers.': {
    why: "'Majority' should be small. It is an ordinary noun meaning most of the people. Wells printed 'The majority of people' (The War of the Worlds, Book One, Chapter XIV).",
    not: {
      The: "'The' starts the sentence, so its capital is right.",
      London: "'London' is the name of a city, so its capital is right.",
      Sunday: "'Sunday' is a day of the week, so its capital is right, even in 'Sunday papers'.",
    },
    more: "A day keeps its capital when it describes another word: 'a Tuesday meeting', 'Saturday jobs'.",
    tip: "Words for amounts, like 'majority', 'most' and 'half', stay small.",
  },
  'We must go to the British museum and pick all those books through.': {
    why: "'museum' needs a capital here because it is part of a name: the British Museum is one particular museum. Wells printed 'the British Museum' (The War of the Worlds, Book Two, Chapter VII).",
    not: {
      pick: "'pick' is an ordinary verb, so it stays small.",
      books: "'books' is an ordinary noun, so it stays small.",
      through: "'through' is a small word, so it stays small.",
    },
    more: "'A museum' stays small. The British Museum or the Victoria and Albert Museum takes a capital on every main word.",
    tip: "If 'the' comes before a name with capitals, check that every main word has one.",
  },
  'I turned Northwards, marvelling, towards the iron gates of Hyde Park.': {
    why: "'Northwards' should be small. It tells us the direction he walked in, so it is an ordinary word. Wells printed 'I turned northwards' (The War of the Worlds, Book Two, Chapter VIII).",
    not: {
      I: "'I' is always a capital letter.",
      Hyde: "'Hyde' is part of the name Hyde Park, so its capital is right.",
      Park: "'Park' is part of the name Hyde Park, so its capital is right.",
    },
    more: 'Directions stay small when they say which way: southwards, to the east. Inside a place name, they take a capital.',
    tip: 'Which way did he go? A direction stays small.',
  },
  'It was the Hand of Edward Hyde.': {
    why: "'Hand' should be small. It is an ordinary noun for part of the body. Stevenson printed 'the hand of Edward Hyde', in the last chapter of the book.",
    not: {
      It: "'It' starts the sentence, so its capital is right.",
      Edward: "'Edward' is a first name, so its capital is right.",
      Hyde: "'Hyde' is a family name, so its capital is right.",
    },
    more: 'Here Jekyll wakes and sees that his hand has become Hyde’s. The drama does not change the rule: parts of the body stay small.',
    tip: 'Words for parts of the body stay small, however important they are to the story.',
  },
  'The Hatred of Hyde for Jekyll was of a different order.': {
    why: "'Hatred' should be small. It is an ordinary noun for a feeling. Stevenson printed 'The hatred of Hyde for Jekyll' (Henry Jekyll’s Full Statement of the Case).",
    not: {
      The: "'The' starts the sentence, so its capital is right.",
      Hyde: "'Hyde' is a family name, so its capital is right.",
      Jekyll: "'Jekyll' is a family name, so its capital is right.",
    },
    more: 'Feelings such as hatred, love and fear are ordinary nouns. They stay small even when a writer makes one the subject of the sentence.',
    tip: 'A feeling is not a name: it stays small.',
  },
  'He thinks she goes to see her Sister in New York.': {
    why: "'Sister' should be small. After 'her', it is a family word, not a name. Fitzgerald printed 'her sister' (The Great Gatsby, Chapter II).",
    not: {
      He: "'He' starts the sentence, so its capital is right.",
      New: "'New' is part of the name New York, so its capital is right.",
      York: "'York' is part of the name New York, so its capital is right.",
    },
    more: "Family words take a capital only when they are used as a name, as in 'Hello, Auntie'. After 'my', 'her' or 'his', they stay small.",
    tip: "After 'her', 'his' or 'my', a family word stays small.",
  },
  'A Fortnight of dubious calm succeeded my return to Thornfield Hall.': {
    why: "'Fortnight' should be small. A fortnight is two weeks, and words for lengths of time stay small. Brontë printed 'A fortnight of dubious calm' (Jane Eyre, Chapter 22).",
    not: {
      A: "'A' starts the sentence, so its capital is right.",
      Thornfield: "'Thornfield' is part of the name of a house, so its capital is right.",
      Hall: "'Hall' is part of the name Thornfield Hall, so its capital is right.",
    },
    more: "Days and months take capitals, but the words 'day', 'week', 'fortnight', 'month' and 'year' stay small.",
    tip: 'A length of time is not a name: it stays small.',
  },
  'The Firm was known as Scrooge and Marley.': {
    why: "'Firm' should be small. It is an ordinary noun for a business, and the name of this business is Scrooge and Marley. Dickens printed 'The firm was known as Scrooge and Marley' (Stave I).",
    not: {
      The: "'The' starts the sentence, so its capital is right.",
      Scrooge: "'Scrooge' is a family name and part of the firm’s name, so its capital is right.",
      Marley: "'Marley' is a family name and part of the firm’s name, so its capital is right.",
    },
    more: "A company’s name takes capitals, but the word 'firm' or 'company' on its own stays small.",
    tip: 'Is it the name, or the kind of thing? Only the name takes a capital.',
  },
  '“We are late,” said Amir, “so we must run.”': {
    why: "Speech starts with a capital: 'We'. After 'said Amir,' with a comma, the same sentence carries on, so 'so' stays small.",
    not: {
      '“we are late,” said Amir.':
        "Spoken words start with a capital, so it should be '“We are late,”'.",
      '“Come in,” Said Mrs Lee.':
        "'said' carries on the sentence after the speech, so it stays small: '“Come in,” said Mrs Lee.'",
      '“I know,” she said, “But I am very tired today.”':
        "After 'she said,' with a comma, the same sentence carries on, so 'but' stays small.",
    },
    more: "A comma after 'said Amir' shows the sentence carries on. A full stop there would mean the next speech starts another sentence, with a capital.",
    tip: "Comma after 'said'? Small letter. Full stop after 'said'? Capital letter.",
  },
  'Mum asked, “Have you finished your homework?”': {
    why: "Spoken words start with a capital letter, even when they come after 'asked,' in the middle of the line: '“Have you ...?”'.",
    not: {
      'Dad said, “we are going out.”':
        "The speech starts here, so it needs a capital: '“We are going out.”'",
      '“Where is my bag?” Asked Sam.':
        "'asked' carries on the sentence after the speech, so it stays small.",
      '“It is raining,” said Ella. “bring your coat.”':
        "After the full stop, the new speech is a new sentence, so it starts with a capital: 'Bring'.",
    },
    more: "A question mark or a comma at the end of speech does not end the whole sentence: the words after it, such as 'asked Sam', stay small.",
    tip: 'The first word inside the speech marks takes a capital when the speech starts there.',
  },
  '“If you are ready,” said the coach, “we can start.”': {
    why: "'If' starts the speech, so it takes a capital. After 'said the coach,' with a comma, the same sentence carries on, so 'we' stays small.",
    not: {
      '“Thank you,” said Miss Patel. “that was very kind of you.”':
        "After the full stop, a new sentence starts, so it needs a capital: '“That was very kind of you.”'",
      '“Good morning,” Said the head teacher.':
        "'said' carries on the sentence after the speech, so it stays small.",
      '“I like it,” he said, “Because it is fun.”':
        "After 'he said,' with a comma, the sentence carries on, so 'because' stays small.",
    },
    more: 'Split speech is one sentence cut in two. Only its first word takes a capital.',
    tip: 'Join the two halves of the speech. If they make one sentence, only the first word has a capital.',
  },
  '“See you on Monday,” said Mrs Grant.': {
    why: "The speech starts with a capital, 'See', and a day of the week takes one too. 'said' carries on the sentence after the speech, so it stays small.",
    not: {
      '“Bye,” Said Leo.': "'said' comes after the speech in the same sentence, so it stays small.",
      '“are you coming?” asked Ana.': "The speech starts here, so 'Are' needs a capital.",
      '“We won,” she said. “we played well.”':
        "After the full stop, a new sentence starts, so 'We' needs a capital.",
    },
    more: 'Names, days and titles keep their capitals inside speech marks, just as they do outside them.',
    tip: 'Check three places: the first spoken word, the word after the speech, and any name inside it.',
  },
  'We are reading The War of the Worlds in class.': {
    why: "In a title, the first word and the main words take capitals, and small words such as 'of' and 'the' inside it stay small: The War of the Worlds.",
    not: {
      'Have you seen the film Finding nemo?':
        "'Nemo' is a name and a main word of the title, so it needs a capital: Finding Nemo.",
      'My favourite book is The secret Garden.':
        "'Secret' is a main word of the title, so it needs a capital: The Secret Garden.",
      'We watched Beauty And the Beast at the cinema last night.':
        "'and' is a small joining word inside the title, so it stays small: Beauty and the Beast.",
    },
    more: "The first word of a title always takes a capital, even a small word such as 'The' or 'A'.",
    tip: "Capitals for the first word and the main words; small letters for 'and', 'of', 'the' and 'in' inside the title.",
  },
  'My sister’s favourite book is Pride and Prejudice.': {
    why: "Both main words of the title take capitals, and 'and' between them stays small: Pride and Prejudice.",
    not: {
      'I am reading great Expectations.':
        'The first word of a title always takes a capital: Great Expectations.',
      'Have you read Of mice and men?':
        "'Mice' and 'Men' are main words of the title, so they need capitals: Of Mice and Men.",
      'We saw A Christmas carol at the theatre at Christmas.':
        "'Carol' is a main word of the title, so it needs a capital: A Christmas Carol.",
    },
    more: 'A book title is a name, so it follows the rules for names: the first word and the main words take capitals.',
    tip: 'Say the title aloud. The words you stress usually take capitals; the small linking words do not.',
  },
  'Our class is studying Animal Farm by George Orwell.': {
    why: "Both words of the title take capitals, Animal Farm, and so do both parts of the writer’s name. 'by' is not part of the title, so it stays small.",
    not: {
      'We read jane Eyre last term.':
        "'Jane' is the first word of the title and a name, so it needs a capital: Jane Eyre.",
      'Is Frankenstein By Mary Shelley?':
        "'by' is not part of the title, so it stays small: Frankenstein by Mary Shelley.",
      'I loved reading the hound of the Baskervilles last summer.':
        'The first word and the main words of the title need capitals: The Hound of the Baskervilles.',
    },
    more: "A title and the writer’s name both take capitals. The little word 'by' between them is ordinary and stays small.",
    tip: 'Check the title and the name separately, then the word that joins them.',
  },
  'Our play this year is A Midsummer Night’s Dream.': {
    why: "Every main word of the title takes a capital, and so does the first word, 'A': A Midsummer Night’s Dream.",
    not: {
      'We are reading Twelfth night.':
        "'Night' is a main word of the title, so it needs a capital: Twelfth Night.",
      'My little brother likes the book treasure Island.':
        'The first word of a title always takes a capital: Treasure Island.',
      'Have you read Little women?':
        "'Women' is a main word of the title, so it needs a capital: Little Women.",
    },
    more: 'Shakespeare’s plays follow the same rule as books: Twelfth Night, The Tempest, A Midsummer Night’s Dream.',
    tip: "A small first word, such as 'A' or 'The', still takes a capital in a title.",
  },
  'Yours sincerely,': {
    why: "The closing of a letter starts with a capital letter: 'Yours'. In the usual UK style, only that first word takes one, so 'sincerely' stays small: 'Yours sincerely,'.",
    not: {
      'best wishes,': "Every closing starts with a capital letter: 'Best wishes,'.",
      'Dear mrs Ahmed,': "A title before a name takes a capital: 'Dear Mrs Ahmed,'.",
      'dear Sir or Madam,': "A letter opens with a capital: 'Dear Sir or Madam,'.",
    },
    more: "You will sometimes see closings such as 'Kind Regards' with two capitals, but the usual UK style gives a capital to the first word only: 'Kind regards'.",
    tip: 'Start every opening and every closing with a capital letter, and give any title and name their capitals.',
  },
  'Dear Mr Hughes,': {
    why: "'Dear' starts the letter, so it takes a capital, and 'Mr' and 'Hughes' are a title and a name, so they take capitals too.",
    not: {
      'Dear sir or madam,':
        "In the opening of a formal letter, 'Sir' and 'Madam' stand in for a name, so they take capitals: 'Dear Sir or Madam,'.",
      'yours faithfully,': "The closing starts with a capital: 'Yours faithfully,'.",
      'Dear miss Carter,': "A title before a name takes a capital: 'Dear Miss Carter,'.",
    },
    more: "A formal letter that begins 'Dear Sir or Madam' ends 'Yours faithfully'. In the usual UK style, only the first word of the closing takes a capital.",
    tip: "Opening: a capital on 'Dear' and on the title and name. Closing: a capital on its first word.",
  },
  'Best wishes, Hannah': {
    why: "A closing starts with a capital: 'Best'. In the usual UK style its other words stay small, and the name after it keeps its own capital: 'Best wishes, Hannah'.",
    not: {
      'kind regards, Oliver': "Every closing starts with a capital letter: 'Kind regards, Oliver'.",
      'Love, gran':
        "The name you sign takes a capital, and 'Gran' here is used as a name: 'Love, Gran'.",
      'Thanks again, leo': "'Leo' is a name, so it needs a capital: 'Thanks again, Leo'.",
    },
    more: "You will sometimes see 'Best Wishes' with two capitals, but the usual UK style gives a capital to the first word of a closing only.",
    tip: 'Your name at the end always keeps its capital.',
  },
  'The Second World War ended in 1945.': {
    why: 'The name of a war takes a capital on every main word: the Second World War.',
    not: {
      'The first World War began in 1914.':
        "'First' is part of the war’s name, so it needs a capital: the First World War.",
      'The Romans built Hadrian’s wall.':
        "'Wall' is part of the name Hadrian’s Wall, so it needs a capital.",
      'The great Exhibition opened in 1851.':
        "'Great' is part of the event’s name, so it needs a capital: the Great Exhibition.",
    },
    more: "Historical events and periods are names, so their main words take capitals. The word 'war' on its own stays small.",
    tip: 'Is it one particular war or event with a name? Then every main word takes a capital.',
  },
  'Queen Victoria ruled Britain for over sixty years.': {
    why: "'Queen' is a title before a name, so it takes a capital, and 'Victoria' and 'Britain' are names.",
    not: {
      'The victorians built many railways.':
        "'Victorians' is made from the name Victoria, so it needs a capital: the Victorians.",
      'King henry VIII had six wives.':
        "'Henry' is a name, so it needs a capital: King Henry VIII.",
      'The middle ages in Europe lasted about a thousand years.':
        "'Middle Ages' is the name of a period in history, so both words need capitals.",
    },
    more: "Before a name, 'Queen' and 'King' are titles and take capitals, just like 'Mrs' or 'Dr'.",
    tip: 'A title before a name takes a capital.',
  },
  'Shakespeare wrote Macbeth in the early 1600s.': {
    why: "'Shakespeare' is a name and 'Macbeth' is the title of a play, so both take capitals. 'early' is an ordinary word and stays small.",
    not: {
      'Charles Dickens lived in the victorian age.':
        "'Victorian' is made from the name Victoria, so it needs a capital: the Victorian age.",
      'Jane austen wrote six novels.':
        "'Austen' is a family name, so it needs a capital: Jane Austen.",
      'Mary Shelley wrote Frankenstein when she was a Teenager.':
        "'teenager' is an ordinary noun, so it stays small.",
    },
    more: 'Writers’ names, the titles of their works and the names of periods all take capitals. The ordinary words around them do not.',
    tip: 'Check each name in the sentence, then check that nothing else has a capital.',
  },
  'The Vikings came to Britain from Scandinavia.': {
    why: "'Vikings' is the name of a people, and 'Britain' and 'Scandinavia' are the names of places, so all three take capitals.",
    not: {
      'The anglo-Saxons spoke Old English.':
        'Both parts of the name take capitals: the Anglo-Saxons.',
      'The romans built roads across Europe.':
        "'Romans' is the name of a people, so it needs a capital.",
      'The Normans came to England from northern france.':
        "'France' is the name of a country, so it needs a capital. 'northern' is right: it is a direction, not part of a name.",
    },
    more: 'The names of peoples take capitals, like the names of their countries: the Vikings, the Normans.',
    tip: 'A word for a people or a nation always takes a capital.',
  },
  'The River Nile flows through Egypt.': {
    why: "'River' is part of the name the River Nile, so it takes a capital, and 'Egypt' is the name of a country.",
    not: {
      'Mount everest is the highest mountain.':
        "'Everest' is a name, so it needs a capital: Mount Everest.",
      'The Pacific ocean is very deep.':
        "'Ocean' is part of the name, so it needs a capital: the Pacific Ocean.",
      'The sahara Desert is in Africa.':
        "'Sahara' is a name, so it needs a capital: the Sahara Desert.",
    },
    more: 'Rivers, mountains, oceans and deserts take a capital on every word of their names. The same words without a name stay small.',
    tip: "A word like 'river' or 'mountain' takes a capital only inside a name.",
  },
  'London is the capital of England.': {
    why: "Cities and countries take capitals. The word 'capital', meaning the main city, is an ordinary noun and stays small.",
    not: {
      'Cardiff is the Capital of Wales.':
        "'capital' here means the main city. It is an ordinary noun, so it stays small.",
      'Belfast is in northern ireland.':
        'Both words are part of the country’s name, so they need capitals: Northern Ireland.',
      'The thames flows through the middle of London.':
        "'Thames' is the name of a river, so it needs a capital.",
    },
    more: "The word 'capital' has two meanings: a big letter, and a main city. Neither is a name, so the word itself stays small.",
    tip: 'A city or a country takes a capital; the word for what it is does not.',
  },
  'We drove south from York to London.': {
    why: "'south' tells us the direction, so it stays small. 'York' and 'London' are the names of cities, so they take capitals.",
    not: {
      'Many people live in south America.':
        "'South' is part of the name of a continent here, so it needs a capital: South America.",
      'Japan is an island Country in Asia.': "'country' is an ordinary noun, so it stays small.",
      'We drove North to Glasgow.': 'A direction stays small when it only tells you which way.',
    },
    more: 'A direction stays small when it says which way: to the south, eastwards. It takes a capital when it is part of a name: South Africa, East Anglia.',
    tip: 'Which way? Small letter. Part of a name? Capital letter.',
  },
  'My uncle works for the BBC in Salford.': {
    why: "'BBC' is the short name of an organisation, so all its letters are capitals, and 'Salford' is the name of a city.",
    not: {
      'She works for the united Nations.':
        "'United' is part of the organisation’s name, so it needs a capital: the United Nations.",
      'He joined the Royal navy.':
        "'Navy' is part of the name, so it needs a capital: the Royal Navy.",
      'We visited the houses of Parliament in London.':
        "'Houses' is part of the name of the building, so it needs a capital: the Houses of Parliament.",
    },
    more: 'Short names made from first letters, such as BBC or UN, are written in capitals.',
    tip: 'Every main word of an organisation’s name takes a capital.',
  },
  'Mr Baker is a baker, and Mrs Cook is a cook.': {
    why: "'Baker' and 'Cook' are family names after 'Mr' and 'Mrs', so they take capitals. The same words as jobs, 'a baker' and 'a cook', stay small.",
    not: {
      'Our neighbour, mr Gardener, loves his garden.':
        "'Mr' is a title before a name, so it needs a capital: Mr Gardener.",
      'Mrs Bell rang the Bell at lunchtime.':
        "The second 'bell' is an ordinary noun for the thing she rang, so it stays small.",
      'Bill paid the Bill at the café.':
        "The second 'bill' means what you pay, an ordinary noun, so it stays small.",
    },
    more: 'Many family names are also ordinary words: Baker, Cook, Smith. Ask whether the word names a person or a thing.',
    tip: "After 'Mr', 'Mrs' or 'Ms', the word is a name. After 'a' or 'the', it usually is not.",
  },
  'The concert is on Friday 14 March at seven o’clock.': {
    why: "Days and months take capitals, so this date is right. 'concert' and 'seven o’clock' are ordinary words and stay small.",
    not: {
      'The exam is on monday 12 May.': 'Days of the week take capitals: Monday.',
      'Term ends on the last Friday in july.': 'Months take capitals: July.',
      'Her birthday party is on Saturday 3 June, in the Summer.':
        "Seasons stay small: 'in the summer'.",
    },
    more: 'In a date, the day and the month take capitals; the number changes nothing. Seasons and times stay small.',
    tip: 'Day or month: capital. Season or time of day: small.',
  },
  'I’m sure I’ll see you before I leave.': {
    why: "'I' is always a capital letter, and it stays a capital in short forms such as I’m and I’ll.",
    not: {
      'i’m sure we will win.': "'I' is always a capital, even in 'I’m'.",
      'I think i’ll stay at home.': "'I' is always a capital, even in 'I’ll'.",
      'If I’d known, I would have Come to see you.':
        "'come' is an ordinary verb, so it stays small.",
    },
    more: 'Short forms keep the capital: I’m, I’ll, I’d, I’ve. The letters after the apostrophe stay small.',
    tip: "Every 'I' that means you, the writer, is a capital.",
  },
  'Where is Omar? He is late again.': {
    why: "A question mark ends a sentence, so the next word starts another sentence and takes a capital: 'He'.",
    not: {
      'Is it raining? it looks cold.':
        "After the question mark, a new sentence starts, so it needs a capital: 'It looks cold.'",
      'We were tired, So we went home.':
        "After a comma, the sentence carries on, so 'so' stays small.",
      'It was late. we caught the last bus.':
        "After a full stop, a new sentence starts, so it needs a capital: 'We caught'.",
    },
    more: 'Full stops, question marks and exclamation marks end a sentence, so a capital comes next. A comma does not end a sentence.',
    tip: 'Look at the mark before the word. Did the sentence end there?',
  },
  'I love autumn. The leaves turn red and gold.': {
    why: "Seasons stay small, so the first sentence is right. After the full stop, 'The' starts the next sentence and takes a capital.",
    not: {
      'I hate Winter. The days are short.': "Seasons stay small: 'I hate winter.'",
      'It is spring. the birds are singing in the garden.':
        "After a full stop, a new sentence starts with a capital: 'The birds'.",
      'Summer is here. We go to the Beach.': "'beach' is an ordinary noun, so it stays small.",
    },
    more: 'A season takes a capital only when it starts a sentence, like any other word.',
    tip: 'Check two things: the word after each full stop, and every season.',
  },
  'Our trip to Rome was in May. We saw the Colosseum.': {
    why: "'Rome', 'May' and 'Colosseum' are names, and 'We' starts the second sentence, so all of them take capitals.",
    not: {
      'We went to Paris in april. It was warm and sunny every day.': 'Months take capitals: April.',
      'The trip was fun. we loved the food.':
        "After a full stop, a new sentence starts with a capital: 'We loved'.",
      'My aunt lives in Madrid. Her Flat is small.':
        "'flat' is an ordinary noun, so it stays small.",
    },
    more: 'Famous buildings have names, so they take capitals: the Colosseum, the Eiffel Tower.',
    tip: 'Read each sentence on its own: the first word, then the names, then everything else.',
  },
  'In the Summer, Mum and my brother visited paris.': {
    why: "'Summer' should be small, because seasons are not names. 'paris' needs a capital, because it is the name of a city. 'Mum' is right: with no 'my', it is used as her name.",
    not: {
      '‘Summer’ and ‘brother’':
        "'Summer' is wrong, but 'brother' is right: after 'my', a family word stays small.",
      '‘brother’ and ‘paris’':
        "'paris' is wrong, but 'brother' is right: after 'my', it stays small.",
      '‘Mum’ and ‘brother’':
        "Both are right: 'Mum' is used as a name, and 'my brother' stays small.",
    },
    more: 'When two words are wrong, check every word with a capital and every word without one.',
    tip: 'First find the words that should be small, then the words that need a capital.',
  },
  'Every Spring, aunt Sara takes us to the River Severn.': {
    why: "'Spring' should be small, because seasons are not names. 'aunt' needs a capital, because it comes right before her name, with no 'my': Aunt Sara.",
    not: {
      '‘Spring’ and ‘River’':
        "'Spring' is wrong, but 'River' is right: it is part of the name River Severn.",
      '‘aunt’ and ‘River’':
        "'aunt' is wrong, but 'River' is part of the name River Severn, so its capital is right.",
      '‘River’ and ‘Sara’': "Both are right: 'River' is part of a name, and 'Sara' is a name.",
    },
    more: "A family word before a name works like a title, just as 'Mrs' does: 'Aunt Sara'.",
    tip: "No 'my', and a name straight after? Capital: Aunt Sara. After 'my'? Small: my aunt.",
  },
  'We drove North to see my grandad in scotland.': {
    why: "'North' should be small, because it only tells us the direction. 'scotland' needs a capital, because it is the name of a country.",
    not: {
      '‘North’ and ‘grandad’':
        "'North' is wrong, but 'grandad' is right: after 'my', a family word stays small.",
      '‘grandad’ and ‘scotland’':
        "'scotland' is wrong, but 'grandad' is right: after 'my', it stays small.",
      '‘my’ and ‘grandad’':
        "Both are right: 'my' is an ordinary word, and 'my grandad' stays small.",
    },
    more: 'A direction takes a capital only as part of a name, such as South Africa.',
    tip: 'Ask: is it a direction, or the name of a place?',
  },
  'At the weekend, Mrs patel taught us a new Song.': {
    why: "'patel' needs a capital, because it is a family name after 'Mrs'. 'Song' should be small, because it is an ordinary noun: 'a new song'.",
    not: {
      '‘Mrs’ and ‘patel’':
        "'patel' is wrong, but 'Mrs' is right: a title before a name takes a capital.",
      '‘weekend’ and ‘Song’':
        "'Song' is wrong, but 'weekend' is right: it is an ordinary word and stays small.",
      '‘Mrs’ and ‘weekend’': "Both are right: 'Mrs' is a title, and 'weekend' stays small.",
    },
    more: 'A title and the family name after it both take capitals: Mrs Patel. What she teaches is an ordinary noun.',
    tip: 'Check the name after a title, then check every other noun.',
  },
  'My cousin speaks french, Arabic and English, and he loves Football.': {
    why: "'french' needs a capital, because languages are names. 'Football' should be small, because a sport is an ordinary noun.",
    not: {
      '‘french’ and ‘Arabic’': "'french' is wrong, but 'Arabic' is right: it is a language.",
      '‘Arabic’ and ‘Football’':
        "'Football' is wrong, but 'Arabic' is right: languages take capitals.",
      '‘Arabic’ and ‘English’': 'Both are right: they are languages, and languages take capitals.',
    },
    more: 'Languages keep their capitals in a list: French, Arabic and English. A sport or a hobby stays small.',
    tip: 'Language: capital. Sport: small.',
  },
  'Last december we watched the fireworks on New year’s Eve.': {
    why: "'december' needs a capital, because it is a month. 'year’s' needs one too: it is part of the name of a special day, and every main word of that name takes a capital.",
    not: {
      '‘december’ and ‘fireworks’':
        "'december' is wrong, but 'fireworks' is right: it is an ordinary noun.",
      '‘fireworks’ and ‘year’s’': "'year’s' is wrong, but 'fireworks' is right: it stays small.",
      '‘New’ and ‘Eve’':
        'Both are right: they are part of the name of the day. The wrong words are elsewhere.',
    },
    more: 'Special days take a capital on each main word: Mother’s Day, Boxing Day.',
    tip: 'When part of a name has a capital, every main word of that name needs one.',
  },
  'My Teacher, mr Hall, lives near the river in Bath.': {
    why: "'Teacher' should be small, because after 'my' it is a job word, not a name. 'mr' needs a capital, because it is a title before a name: Mr Hall.",
    not: {
      '‘mr’ and ‘river’':
        "'mr' is wrong, but 'river' is right: with no name, it is an ordinary noun.",
      '‘Teacher’ and ‘river’': "'Teacher' is wrong, but 'river' is right: it stays small.",
      '‘river’ and ‘Bath’':
        "Both are right: 'river' stays small, and 'Bath' is the name of a city.",
    },
    more: 'Titles before a name, such as Mr, Mrs, Ms and Dr, always take a capital. The job word alone stays small.',
    tip: 'Title plus name: capitals. Job word alone: small.',
  },
  'On monday we have a test on the Romans and the Vikings, so I am revising with my Sister.': {
    why: "'monday' needs a capital, because days of the week are names. 'Sister' should be small, because after 'my' it is a family word, not a name.",
    not: {
      '‘monday’ and ‘Romans’':
        "'monday' is wrong, but 'Romans' is right: it is the name of a people.",
      '‘Romans’ and ‘Vikings’':
        'Both are right: they are the names of peoples, so they take capitals.',
      '‘Vikings’ and ‘Sister’':
        "'Sister' is wrong, but 'Vikings' is right: it is the name of a people.",
    },
    more: "Names of peoples, such as the Romans and the Vikings, take capitals, but a family word after 'my' stays small.",
    tip: "Days and peoples take capitals; a family word after 'my' does not.",
  },
  '“come and see,” said Leo. “it is snowing.”': {
    why: "'come' starts the speech, so it needs a capital. 'it' starts the next sentence, after the full stop, so it needs one too.",
    not: {
      '‘come’ and ‘said’':
        "'come' is wrong, but 'said' is right: it carries on the sentence after the speech.",
      '‘said’ and ‘it’': "'it' is wrong, but 'said' is right: it stays small after the speech.",
      '‘said’ and ‘Leo’': "Both are right: 'said' stays small, and 'Leo' is a name.",
    },
    more: 'Each sentence of speech starts with a capital, even inside speech marks.',
    tip: 'Check the first word inside each pair of speech marks.',
  },
  'Our class watched Romeo And juliet at the theatre.': {
    why: "'And' should be small, because it is a joining word inside the title. 'juliet' needs a capital, because it is a name and a main word of the title.",
    not: {
      '‘Romeo’ and ‘juliet’':
        "'juliet' is wrong, but 'Romeo' is right: it is a name and the first word of the title.",
      '‘And’ and ‘theatre’': "'And' is wrong, but 'theatre' is right: it is an ordinary noun.",
      '‘Romeo’ and ‘theatre’': "Both are right: 'Romeo' is a name, and 'theatre' stays small.",
    },
    more: "In a title, small joining words such as 'and', 'of' and 'the' stay small unless they come first.",
    tip: 'In a title, look at the little words: inside the title, they stay small.',
  },
  'I wrote to mrs Shaw to thank her for the Present.': {
    why: "'mrs' needs a capital, because it is a title before a name: Mrs Shaw. 'Present' should be small, because it is an ordinary noun for a gift.",
    not: {
      '‘I’ and ‘mrs’': "'mrs' is wrong, but 'I' is right: it is always a capital.",
      '‘Shaw’ and ‘Present’': "'Present' is wrong, but 'Shaw' is right: it is a family name.",
      '‘I’ and ‘Shaw’': "Both are right: 'I' is always a capital, and 'Shaw' is a name.",
    },
    more: 'Titles such as Mrs, Mr and Dr take capitals before a name. Ordinary nouns stay small, however special the thing.',
    tip: 'A gift, a letter or a card is an ordinary noun: small letter.',
  },
  'The great fire of London started in a bakery in Pudding Lane.': {
    why: "'great' and 'fire' both need capitals, because they are part of the name of a famous event: the Great Fire of London.",
    not: {
      '‘great’ and ‘bakery’': "'great' is wrong, but 'bakery' is right: it is an ordinary noun.",
      '‘fire’ and ‘Lane’':
        "'fire' is wrong, but 'Lane' is right: it is part of the street name Pudding Lane.",
      '‘bakery’ and ‘Lane’': "Both are right: 'bakery' stays small, and 'Lane' is part of a name.",
    },
    more: 'The fire began in a bakery in Pudding Lane in 1666. A named event takes a capital on every main word.',
    tip: 'An event with its own name works like a place name: every main word takes a capital.',
  },
}
