import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Capital Letter Quest: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/capital-letter-quest.ts). Written with AI on
 * 16 October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'The dog is asleep.': {
    why: "The first word of every sentence begins with a capital letter: The. 'Dog' and 'asleep' are ordinary words, so they stay small.",
    not: {
      'the dog is asleep.':
        "This version has no capital letters at all. 'the' (the first word) needs a capital letter.",
      'the Dog is asleep.':
        "'the' (the first word) needs a capital letter. 'Dog' is an ordinary word and stays small.",
      'The Dog Is Asleep.':
        "This version gives capital letters to ordinary words such as 'Dog', 'Is' and 'Asleep'. Only the first word, 'I' and names get capitals.",
    },
    more: 'A capital letter shows the reader that a new sentence has begun. A full stop shows where it ends.',
    tip: 'When you read your writing again, check the first word of each sentence.',
  },
  'We walk to school.': {
    why: "'We' is the first word of the sentence, so it begins with a capital letter. 'Walk', 'to' and 'school' are ordinary words, so they stay small.",
    not: {
      'we walk to school.':
        "This version has no capital letters at all. 'we' (the first word) needs a capital letter.",
      'we Walk to school.':
        "'we' (the first word) needs a capital letter. 'Walk' is an ordinary word and stays small.",
      'We Walk To School.':
        "This version gives capital letters to ordinary words such as 'Walk', 'To' and 'School'. Only the first word, 'I' and names get capitals.",
    },
    more: "Short words such as 'we', 'it' and 'the' need a capital letter too when they begin a sentence.",
    tip: "Short words are easy to forget. Check the very first letter of 'We', 'It' and 'The' each time.",
  },
  'It is raining today.': {
    why: "'It' begins the sentence, so it needs a capital letter. 'Raining' and 'today' are not names, so they stay small.",
    not: {
      'it is raining today.':
        "This version has no capital letters at all. 'it' (the first word) needs a capital letter.",
      'it is Raining today.':
        "'it' (the first word) needs a capital letter. 'Raining' is an ordinary word and stays small.",
      'It Is Raining Today.':
        "This version gives capital letters to ordinary words such as 'Is', 'Raining' and 'Today'. Only the first word, 'I' and names get capitals.",
    },
    more: "Days and months have capital letters, but 'today' is not a day name. It is an ordinary word, like 'tomorrow' and 'yesterday'.",
    tip: "Give a capital letter to a time word such as 'today' only when it begins the sentence.",
  },
  'She likes tea.': {
    why: "'She' is the first word, so it begins with a capital letter. 'Likes' is a verb and 'tea' is a thing, not a name, so both stay small.",
    not: {
      'she likes tea.':
        "This version has no capital letters at all. 'she' (the first word) needs a capital letter.",
      'she Likes tea.':
        "'she' (the first word) needs a capital letter. 'Likes' is an ordinary word and stays small.",
      'she likes Tea.':
        "'she' (the first word) needs a capital letter. 'Tea' is an ordinary word and stays small.",
    },
    more: 'Food and drink words are ordinary words: tea, rice, bread. They stay small unless they begin a sentence or are a brand name.',
    tip: 'Ask yourself about each word: is it the first word, or a name? If not, write it small.',
  },
  'My book is new.': {
    why: "'My' is the first word of the sentence, so it begins with a capital letter. 'Book' is an ordinary word, so it stays small.",
    not: {
      'my book is new.':
        "This version has no capital letters at all. 'my' (the first word) needs a capital letter.",
      'my Book is new.':
        "'my' (the first word) needs a capital letter. 'Book' is an ordinary word and stays small.",
      'My Book Is New.':
        "This version gives capital letters to ordinary words such as 'Book', 'Is' and 'New'. Only the first word, 'I' and names get capitals.",
    },
    more: 'The titles of books and films often have capitals on many words. A normal sentence does not: only the first word and names.',
    tip: 'In a normal sentence, use a capital letter for the first word and for names, and nowhere else.',
  },
  'Where do you live?': {
    why: "A question also begins with a capital letter: Where. 'Do', 'you' and 'live' are ordinary words, so they stay small. The question mark ends the sentence.",
    not: {
      'where do you live?':
        "This version has no capital letters at all. 'where' (the first word) needs a capital letter.",
      'where do You live?':
        "'where' (the first word) needs a capital letter. 'You' is an ordinary word and stays small.",
      'Where Do You Live?':
        "This version gives capital letters to ordinary words such as 'Do', 'You' and 'Live'. Only the first word, 'I' and names get capitals.",
    },
    more: 'A question follows the same rule as a statement: a capital letter at the start. The end is different, because it has a question mark.',
    tip: 'When you write a question, check both ends: a capital letter at the start and a question mark at the end.',
  },
  'Yesterday I was tired.': {
    why: "'Yesterday' is the first word, so it needs a capital letter. The word 'I' is always a capital letter, wherever it comes in the sentence.",
    not: {
      'Yesterday i was tired.': "'i' (the word 'I') needs a capital letter, but here it is small.",
      'yesterday I was tired.':
        "'yesterday' (the first word) needs a capital letter, but here it is small.",
      'Yesterday I Was Tired.':
        "'Was' and 'Tired' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "'I' is the only pronoun that is always a capital letter. Words like 'you', 'he' and 'we' stay small in the middle of a sentence.",
    tip: "When you type quickly, check every 'I' in the sentence, not only the first one.",
  },
  'My friend and I play football.': {
    why: "'My' begins the sentence, so it has a capital letter. 'I' is always a capital letter, even in the middle: 'my friend and I'. 'Football' stays small.",
    not: {
      'my friend and i play football.':
        "This version has no capital letters at all. 'my' (the first word) and 'i' (the word 'I') need capital letters.",
      'My friend and i play football.':
        "'i' (the word 'I') needs a capital letter, but here it is small.",
      'My Friend And I Play Football.':
        "This version gives capital letters to ordinary words such as 'Friend', 'And' and 'Play'. Only the first word, 'I' and names get capitals.",
    },
    more: 'Sports and games are ordinary words, so they are written with small letters: football, tennis, chess.',
    tip: 'When you write about yourself and another person, remember the capital: my friend and I.',
  },
  'Can I help you?': {
    why: "'Can' begins the question, so it needs a capital letter. 'I' is always a capital letter too. 'Help' and 'you' stay small.",
    not: {
      'can i help you?':
        "This version has no capital letters at all. 'can' (the first word) and 'i' (the word 'I') need capital letters.",
      'Can i help you?': "'i' (the word 'I') needs a capital letter, but here it is small.",
      'Can I Help You?':
        "'Help' and 'You' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "Polite questions often have 'I' in the middle: Can I help you? May I come in? Always write a capital I.",
    tip: "In a shop or an office, you can say 'Can I help you?'. Check the capital I when you write it.",
  },
  'I think I am right.': {
    why: "The word 'I' is always a capital letter. This sentence has it twice: at the start and after 'think'. 'Think', 'am' and 'right' stay small.",
    not: {
      'i think i am right.':
        "This version has no capital letters at all. Both 'i' words (the word 'I') need capital letters.",
      'I think i am right.': "'i' (the word 'I') needs a capital letter, but here it is small.",
      'i think I am right.': "'i' (the word 'I') needs a capital letter, but here it is small.",
    },
    more: "Even in a short sentence, every 'I' needs a capital letter: I think I know. I hope I can come.",
    tip: 'Look for a small letter i on its own in your writing, and change each one to a capital I.',
  },
  'Tomorrow I will visit her.': {
    why: "'Tomorrow' is the first word, so it needs a capital letter. 'I' is always a capital letter. 'Visit' and 'her' stay small.",
    not: {
      'tomorrow i will visit her.':
        "This version has no capital letters at all. 'tomorrow' (the first word) and 'i' (the word 'I') need capital letters.",
      'Tomorrow i will visit her.':
        "'i' (the word 'I') needs a capital letter, but here it is small.",
      'Tomorrow I Will Visit Her.':
        "This version gives capital letters to ordinary words such as 'Will', 'Visit' and 'Her'. Only the first word, 'I' and names get capitals.",
    },
    more: "'Tomorrow' needs no capital in the middle of a sentence: 'I will visit her tomorrow'.",
    tip: 'Use a capital letter on a time word only when it begins the sentence: Tomorrow I will ... or I will ... tomorrow.',
  },
  'My name is Sara.': {
    why: "A person's name begins with a capital letter: Sara. 'My' also has one because it begins the sentence. 'Name' is an ordinary word and stays small.",
    not: {
      'my name is sara.':
        "This version has no capital letters at all. 'my' (the first word) and 'sara' (a name) need capital letters.",
      'My name is sara.': "'sara' (a name) needs a capital letter, but here it is small.",
      'My Name Is Sara.':
        "'Name' and 'Is' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "Every part of a person's name has a capital: Sara Khan, Tom Brown. A short name and a long name follow the same rule.",
    tip: 'When you write your name on a form, begin every part of it with a capital letter.',
  },
  'Ahmed is my brother.': {
    why: "'Ahmed' is a person's name and also the first word, so it begins with a capital letter. 'Brother' is an ordinary word, so it stays small.",
    not: {
      'ahmed is my brother.':
        "This version has no capital letters at all. 'ahmed' (a name) needs a capital letter.",
      'ahmed is my Brother.':
        "'ahmed' (a name) needs a capital letter. 'Brother' is an ordinary word and stays small.",
      'Ahmed Is My Brother.':
        "This version gives capital letters to ordinary words such as 'Is', 'My' and 'Brother'. Only the first word, 'I' and names get capitals.",
    },
    more: "Family words are small after 'my': my brother, my sister. They get a capital only when used as a name: 'Hello, Mum.'",
    tip: "Write family words with small letters after 'my', and add the name with a capital: my brother Ahmed.",
  },
  'This is Mr Brown.': {
    why: "'This' begins the sentence. 'Mr' is a title and 'Brown' is a name, so both begin with a capital letter. British English usually writes Mr with no full stop.",
    not: {
      'this is mr brown.':
        "This version has no capital letters at all. 'this' (the first word), 'mr' (a title) and 'brown' (a name) need capital letters.",
      'This is mr brown.':
        "'mr' (a title) and 'brown' (a name) need capital letters, but here they are small.",
      'This Is Mr Brown.':
        "'Is' is an ordinary word, so it stays small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: 'A title and a name both have capitals: Mr Brown, Mrs Khan, Miss Jones, Dr Smith.',
    tip: 'Write the short title with a capital and no full stop: Mr, Mrs, Dr. Then add the name with a capital.',
  },
  'I sat next to Maria and Tom.': {
    why: "'I' is always a capital letter. 'Maria' and 'Tom' are names of people, so each begins with a capital letter. 'Sat', 'next' and 'to' stay small.",
    not: {
      'i sat next to maria and tom.':
        "This version has no capital letters at all. 'i' (the word 'I') and the names 'maria' and 'tom' need capital letters.",
      'I sat next to maria and tom.':
        "The names 'maria' and 'tom' need capital letters, but here they are small.",
      'I Sat Next To Maria And Tom.':
        "This version gives capital letters to ordinary words such as 'Sat', 'Next' and 'To'. Only the first word, 'I' and names get capitals.",
    },
    more: "Every name in a list has its own capital letter: Maria and Tom, or Sara, Ali and Lucy. The word 'and' stays small.",
    tip: 'Check each name when you write a list of people.',
  },
  'Have you met Lucy?': {
    why: "'Have' begins the question, so it needs a capital letter. 'Lucy' is a name, so it has one too. 'You' and 'met' stay small.",
    not: {
      'have you met lucy?':
        "This version has no capital letters at all. 'have' (the first word) and 'lucy' (a name) need capital letters.",
      'Have you met lucy?': "'lucy' (a name) needs a capital letter, but here it is small.",
      'Have You Met Lucy?':
        "'You' and 'Met' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: 'A name keeps its capital letter in a question, a statement or a command.',
    tip: "Use 'Have you met ...?' to introduce friends, and write the name with a capital letter.",
  },
  'My teacher is Mrs Khan.': {
    why: "'Mrs' is a title and 'Khan' is a name, so both need capital letters. 'My' begins the sentence. 'Teacher' is an ordinary word, so it stays small.",
    not: {
      'my teacher is mrs khan.':
        "This version has no capital letters at all. 'my' (the first word), 'mrs' (a title) and 'khan' (a name) need capital letters.",
      'My teacher is mrs khan.':
        "'mrs' (a title) and 'khan' (a name) need capital letters, but here they are small.",
      'My Teacher Is Mrs Khan.':
        "'Teacher' and 'Is' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "Compare 'my teacher' (small t) with 'Mrs Khan' (capitals). A job word stays small, but a title in front of a name has a capital.",
    tip: 'When you write a title with a name, give both words capitals: Mrs Khan, Dr Ali, Miss Jones.',
  },
  'I live in London.': {
    why: "'I' is always a capital letter. 'London' is the name of a city, and the names of cities begin with a capital letter. 'Live' and 'in' stay small.",
    not: {
      'i live in london.':
        "This version has no capital letters at all. 'i' (the word 'I') and 'london' (a city) need capital letters.",
      'I live in london.': "'london' (a city) needs a capital letter, but here it is small.",
      'I Live In London.':
        "'Live' and 'In' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: 'The names of towns, cities and countries all have capital letters: London, Leeds, Poland, Egypt.',
    tip: 'Write the name of your home town or city with a capital letter on forms and in letters.',
  },
  'She is from Spain.': {
    why: "'She' begins the sentence. 'Spain' is the name of a country, and country names begin with a capital letter. 'From' stays small.",
    not: {
      'she is from spain.':
        "This version has no capital letters at all. 'she' (the first word) and 'spain' (a country) need capital letters.",
      'She is from spain.': "'spain' (a country) needs a capital letter, but here it is small.",
      'She Is From Spain.':
        "'Is' and 'From' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: 'The same rule applies to continents: Europe, Asia, Africa. They are names of places too.',
    tip: 'When you say where someone is from, write the country with a capital letter: from Spain, from Egypt.',
  },
  'We visited Paris in June.': {
    why: "'We' begins the sentence. 'Paris' is a city and 'June' is a month, so both need capital letters. 'Visited' and 'in' stay small.",
    not: {
      'we visited paris in june.':
        "This version has no capital letters at all. 'we' (the first word), 'paris' (a city) and 'june' (a month) need capital letters.",
      'We visited paris in june.':
        "'paris' (a city) and 'june' (a month) need capital letters, but here they are small.",
      'We visited Paris in june.': "'june' (a month) needs a capital letter, but here it is small.",
    },
    more: 'Months have capital letters in English: January, February, March. In many other languages, such as Spanish and French, they are small, so this is easy to forget.',
    tip: 'Check every city and every month in your writing.',
  },
  'The River Thames is long.': {
    why: "'River Thames' is the name of a river, so both words begin with a capital letter. 'The' begins the sentence. 'Long' stays small.",
    not: {
      'the river thames is long.':
        "This version has no capital letters at all. 'the' (the first word), 'river' (part of a river's name) and 'thames' (a river) need capital letters.",
      'The river thames is long.':
        "'river' (part of a river's name) and 'thames' (a river) need capital letters, but here they are small.",
      'the River Thames is long.':
        "'the' (the first word) needs a capital letter, but here it is small.",
    },
    more: 'The same rule gives Oxford Street, Mount Everest and Lake Windermere: the word for the kind of place is part of its name.',
    tip: "Use a capital for 'River' when it comes before the name: the River Thames. In 'the river' alone, it stays small.",
  },
  'My school is in Manchester.': {
    why: "'Manchester' is a city, so it has a capital letter. 'My' begins the sentence. 'School' is an ordinary word, so it stays small.",
    not: {
      'my school is in manchester.':
        "This version has no capital letters at all. 'my' (the first word) and 'manchester' (a city) need capital letters.",
      'My school is in manchester.':
        "'manchester' (a city) needs a capital letter, but here it is small.",
      'My School Is In Manchester.':
        "This version gives capital letters to ordinary words such as 'School', 'Is' and 'In'. Only the first word, 'I' and names get capitals.",
    },
    more: "'School' is small in 'my school', but it has a capital when it is part of a name: Manchester High School.",
    tip: 'Ask: is this the name of one place? If it is, use a capital letter.',
  },
  'They moved to Scotland.': {
    why: "'Scotland' is a country, so it begins with a capital letter. 'They' begins the sentence. 'Moved' and 'to' stay small.",
    not: {
      'they moved to scotland.':
        "This version has no capital letters at all. 'they' (the first word) and 'scotland' (a country) need capital letters.",
      'They moved to scotland.':
        "'scotland' (a country) needs a capital letter, but here it is small.",
      'They Moved To Scotland.':
        "'Moved' and 'To' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: 'All the countries of the United Kingdom have capital letters: England, Scotland, Wales and Northern Ireland.',
    tip: 'Write a country with a capital letter every time, however short the name is.',
  },
  'Oxford Street is busy.': {
    why: "'Oxford Street' is the name of a street, so both words begin with a capital letter, including 'Street'. 'Busy' is an ordinary word, so it stays small.",
    not: {
      'oxford street is busy.':
        "This version has no capital letters at all. The words 'oxford' and 'street' (a street's name) need capital letters.",
      'Oxford street is busy.':
        "'street' (part of a street's name) needs a capital letter, but here it is small.",
      'oxford Street is busy.':
        "'oxford' (part of a street's name) needs a capital letter, but here it is small.",
    },
    more: "The word 'street' stays small when it stands alone: a busy street. It has a capital letter when it is part of the street's name.",
    tip: 'Write the whole name of a street with capital letters: Oxford Street, Baker Street.',
  },
  'We have a test on Monday.': {
    why: "'Monday' is a day of the week, and days always begin with a capital letter in English. 'We' begins the sentence. 'Test' stays small.",
    not: {
      'we have a test on monday.':
        "This version has no capital letters at all. 'we' (the first word) and 'monday' (a day) need capital letters.",
      'We have a test on monday.': "'monday' (a day) needs a capital letter, but here it is small.",
      'We Have A Test On Monday.':
        "This version gives capital letters to ordinary words such as 'Have', 'A' and 'Test'. Only the first word, 'I' and names get capitals.",
    },
    more: 'All seven days have capitals: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.',
    tip: 'In many languages, days are written with a small letter. In English, always use a capital.',
  },
  'See you on Friday.': {
    why: "'Friday' is a day of the week, so it begins with a capital letter. 'See' begins the sentence, so it does too. 'You' and 'on' stay small.",
    not: {
      'see you on friday.':
        "This version has no capital letters at all. 'see' (the first word) and 'friday' (a day) need capital letters.",
      'See you on friday.': "'friday' (a day) needs a capital letter, but here it is small.",
      'See You On Friday.':
        "'You' and 'On' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "'See you on Friday' is a friendly way to say goodbye when you will meet someone soon.",
    tip: 'In messages to friends, still write the day with a capital letter: See you on Friday.',
  },
  'The shop is closed on Sunday.': {
    why: "'Sunday' is a day of the week, so it begins with a capital letter. 'The' begins the sentence. 'Shop' and 'closed' stay small.",
    not: {
      'the shop is closed on sunday.':
        "This version has no capital letters at all. 'the' (the first word) and 'sunday' (a day) need capital letters.",
      'The shop is closed on sunday.':
        "'sunday' (a day) needs a capital letter, but here it is small.",
      'The Shop Is Closed On Sunday.':
        "This version gives capital letters to ordinary words such as 'Shop', 'Is' and 'Closed'. Only the first word, 'I' and names get capitals.",
    },
    more: 'Add -s for a repeated day: The shop is closed on Sundays. The capital letter stays.',
    tip: 'When you write opening times, give the day a capital letter: open on Saturday, closed on Sunday.',
  },
  'I play tennis every Saturday.': {
    why: "'I' is always a capital letter, and 'Saturday' is a day, so it needs one too. 'Tennis' is a sport, not a name, so it stays small.",
    not: {
      'i play tennis every saturday.':
        "This version has no capital letters at all. 'i' (the word 'I') and 'saturday' (a day) need capital letters.",
      'I play tennis every saturday.':
        "'saturday' (a day) needs a capital letter, but here it is small.",
      'I Play Tennis Every Saturday.':
        "This version gives capital letters to ordinary words such as 'Play', 'Tennis' and 'Every'. Only the first word, 'I' and names get capitals.",
    },
    more: 'Sports and games are written with small letters: tennis, football, chess.',
    tip: "To talk about a habit, use 'every' and a day with a capital letter: every Saturday.",
  },
  'The meeting is on Wednesday.': {
    why: "'Wednesday' is a day of the week, so it has a capital letter. 'The' begins the sentence. 'Meeting' stays small, and a full stop ends the sentence.",
    not: {
      'the meeting is on wednesday.':
        "This version has no capital letters at all. 'the' (the first word) and 'wednesday' (a day) need capital letters.",
      'The meeting is on wednesday.':
        "'wednesday' (a day) needs a capital letter, but here it is small.",
      'The meeting is on wednesday':
        "'wednesday' (a day) needs a capital letter, but here it is small. It also has no full stop at the end.",
    },
    more: "'Wednesday' is hard to spell. Say it slowly as Wed-nes-day to remember the d in the middle.",
    tip: 'Check both ends of the sentence: a capital letter at the start and a full stop at the end.',
  },
  'My birthday is in March.': {
    why: "'March' is a month, so it begins with a capital letter. 'My' begins the sentence. 'Birthday' is an ordinary word, so it stays small.",
    not: {
      'my birthday is in march.':
        "This version has no capital letters at all. 'my' (the first word) and 'march' (a month) need capital letters.",
      'My birthday is in march.': "'march' (a month) needs a capital letter, but here it is small.",
      'My Birthday Is In March.':
        "This version gives capital letters to ordinary words such as 'Birthday', 'Is' and 'In'. Only the first word, 'I' and names get capitals.",
    },
    more: "All twelve months have capital letters. Be careful with 'march' and 'may': they are also ordinary words (to march, may I), and those stay small.",
    tip: 'To give your birthday, say: My birthday is in March. Check that the month has a capital letter.',
  },
  'School ends in July.': {
    why: "'July' is a month, so it needs a capital letter. 'School' begins the sentence, so it needs one too. 'Ends' and 'in' stay small.",
    not: {
      'school ends in july.':
        "This version has no capital letters at all. 'school' (the first word) and 'july' (a month) need capital letters.",
      'School ends in july.': "'july' (a month) needs a capital letter, but here it is small.",
      'School Ends In July.':
        "'Ends' and 'In' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: 'A month in the middle of a sentence still has a capital letter: in July, on 5 July.',
    tip: 'When you write dates, use a capital letter for the month: 5 July, 12 March.',
  },
  'It snows in December.': {
    why: "'December' is a month, so it begins with a capital letter. 'It' begins the sentence. 'Snows' is a verb, so it stays small.",
    not: {
      'it snows in december.':
        "This version has no capital letters at all. 'it' (the first word) and 'december' (a month) need capital letters.",
      'It snows in december.': "'december' (a month) needs a capital letter, but here it is small.",
      'It Snows In December.':
        "'Snows' and 'In' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: 'Seasons are different from months: winter, spring, summer and autumn are written with small letters.',
    tip: 'Use a capital letter for a month but a small letter for a season: in December, in winter.',
  },
  'We travel in August.': {
    why: "'August' is a month, so it begins with a capital letter. 'We' begins the sentence. 'Travel' is a verb, so it stays small.",
    not: {
      'we travel in august.':
        "This version has no capital letters at all. 'we' (the first word) and 'august' (a month) need capital letters.",
      'We travel in august.': "'august' (a month) needs a capital letter, but here it is small.",
      'We Travel In August.':
        "'Travel' and 'In' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "Months and days have capital letters, but the words 'week' and 'month' stay small: next week, last month.",
    tip: "Write the name of the month with a capital, and add 'in' before it: in August.",
  },
  'The term starts in September.': {
    why: "'September' is a month, so it begins with a capital letter. 'The' begins the sentence. 'Term' and 'starts' stay small.",
    not: {
      'the term starts in september.':
        "This version has no capital letters at all. 'the' (the first word) and 'september' (a month) need capital letters.",
      'The term starts in september.':
        "'september' (a month) needs a capital letter, but here it is small.",
      'The Term Starts In September.':
        "This version gives capital letters to ordinary words such as 'Term', 'Starts' and 'In'. Only the first word, 'I' and names get capitals.",
    },
    more: 'School words such as term, lesson and holiday are ordinary words, so they stay small.',
    tip: 'Check the long month names, because they are easy to spell wrongly: September, November, December.',
  },
  'I am learning English.': {
    why: "'English' is the name of a language, and language names always begin with a capital letter. 'I' is always a capital letter too. 'Am' and 'learning' stay small.",
    not: {
      'i am learning english.':
        "This version has no capital letters at all. 'i' (the word 'I') and 'english' (a language) need capital letters.",
      'I am learning english.':
        "'english' (a language) needs a capital letter, but here it is small.",
      'I Am Learning English.':
        "'Am' and 'Learning' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: 'In many other languages, such as Spanish and French, language names are small. In English, they always have a capital: English, French, Arabic, Spanish.',
    tip: 'Write every language with a capital letter, even when you talk about your own: I speak Arabic.',
  },
  'She speaks French and Arabic.': {
    why: "'French' and 'Arabic' are names of languages, so each begins with a capital letter. 'She' begins the sentence. 'Speaks' and 'and' stay small.",
    not: {
      'she speaks french and arabic.':
        "This version has no capital letters at all. 'she' (the first word) and the languages 'french' and 'arabic' need capital letters.",
      'She speaks french and arabic.':
        "The languages 'french' and 'arabic' need capital letters, but here they are small.",
      'She Speaks French And Arabic.':
        "'Speaks' and 'And' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "When you list languages, every language name has a capital and the word 'and' stays small: French, Arabic and English.",
    tip: 'To say what languages you speak, use: I speak English and French. Check each name.',
  },
  'He is Italian.': {
    why: "'Italian' tells us where he is from, and words for nationalities begin with a capital letter. 'He' begins the sentence. 'Is' stays small.",
    not: {
      'he is italian.':
        "This version has no capital letters at all. 'he' (the first word) and 'italian' (a nationality word) need capital letters.",
      'He is italian.':
        "'italian' (a nationality word) needs a capital letter, but here it is small.",
      'He Is Italian.':
        "'Is' is an ordinary word, so it stays small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: 'The country is Italy and the nationality is Italian. Both have capital letters.',
    tip: 'Write a nationality with a capital letter: Italian, Polish, Egyptian, British.',
  },
  'We ate Polish food.': {
    why: "'Polish' means from Poland, so it begins with a capital letter. 'We' begins the sentence. 'Ate' and 'food' stay small.",
    not: {
      'we ate polish food.':
        "This version has no capital letters at all. 'we' (the first word) and 'polish' (a nationality word) need capital letters.",
      'We ate polish food.':
        "'polish' (a nationality word) needs a capital letter, but here it is small.",
      'We Ate Polish Food.':
        "'Ate' and 'Food' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "A small p changes the meaning: 'polish' means to make something shine. The capital letter tells us it is the nationality.",
    tip: "Words that show nationality, such as Polish, Chinese and Spanish, need a capital letter even before an ordinary noun like 'food'.",
  },
  'My class learns Spanish.': {
    why: "'Spanish' is the name of a language, so it begins with a capital letter. 'My' begins the sentence. 'Class' and 'learns' stay small.",
    not: {
      'my class learns spanish.':
        "This version has no capital letters at all. 'my' (the first word) and 'spanish' (a language) need capital letters.",
      'My class learns spanish.':
        "'spanish' (a language) needs a capital letter, but here it is small.",
      'My Class Learns Spanish.':
        "'Class' and 'Learns' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "'Spanish' is also the word for the nationality, as in 'Spanish food'. Both meanings have a capital letter.",
    tip: 'When you write about school subjects, use a capital for languages (Spanish, French) but not for other subjects (maths, art).',
  },
  'The Chinese New Year is fun.': {
    why: "'Chinese' says where something comes from, so it has a capital letter. The festival's name is 'Chinese New Year', and 'New' and 'Year' are part of the name, so they have capitals too.",
    not: {
      'the chinese new year is fun.':
        "This version has no capital letters at all. 'the' (the first word), 'chinese' (a nationality word) and the words 'new' and 'year' (a festival's name) need capital letters.",
      'The chinese new year is fun.':
        "'chinese' (a nationality word) and the words 'new' and 'year' (a festival's name) need capital letters, but here they are small.",
      'the Chinese New Year is fun.':
        "'the' (the first word) needs a capital letter, but here it is small.",
    },
    more: 'Other festival names work the same way: Christmas, Easter, Eid, Diwali and Halloween all have capital letters.',
    tip: "Give a capital letter to each main word in the name of a festival: Chinese New Year, New Year's Day.",
  },
  'Please call Dr Smith.': {
    why: "'Dr' is a title and 'Smith' is a name, so both begin with a capital letter. 'Please' begins the sentence. 'Call' stays small.",
    not: {
      'please call dr smith.':
        "This version has no capital letters at all. 'please' (the first word), 'dr' (a title) and 'smith' (a name) need capital letters.",
      'Please call dr smith.':
        "'dr' (a title) and 'smith' (a name) need capital letters, but here they are small.",
      'Please Call Dr Smith.':
        "'Call' is an ordinary word, so it stays small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "'Dr' means doctor. In British English we usually write it with no full stop, like Mr and Mrs.",
    tip: "Use 'Please call ...' to ask someone politely. Write the title and the name with capital letters.",
  },
  'Miss Jones is kind.': {
    why: "'Miss' is a title and 'Jones' is a name, so both begin with a capital letter. 'Miss' is also the first word of the sentence. 'Kind' stays small.",
    not: {
      'miss jones is kind.':
        "This version has no capital letters at all. 'miss' (a title) and 'jones' (a name) need capital letters.",
      'Miss jones is kind.': "'jones' (a name) needs a capital letter, but here it is small.",
      'miss Jones is kind.': "'miss' (a title) needs a capital letter, but here it is small.",
    },
    more: "'Miss' is for a girl or a woman who is not married. 'Ms' can be used for any woman. Both have capital letters before a name.",
    tip: 'Always write a title with a capital letter when it comes before a name.',
  },
  'We wrote to Mr Patel.': {
    why: "'Mr' is a title and 'Patel' is a name, so both begin with a capital letter. 'We' begins the sentence. 'Wrote' and 'to' stay small.",
    not: {
      'we wrote to mr patel.':
        "This version has no capital letters at all. 'we' (the first word), 'mr' (a title) and 'patel' (a name) need capital letters.",
      'We wrote to mr patel.':
        "'mr' (a title) and 'patel' (a name) need capital letters, but here they are small.",
      'We Wrote To Mr Patel.':
        "'Wrote' and 'To' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "'Mr' is for a man, 'Mrs' for a married woman and 'Miss' for a young or unmarried woman. All have capital letters.",
    tip: "In a letter, write the person's title and name with capital letters: Dear Mr Patel.",
  },
  'Thank you, Mrs Evans.': {
    why: "'Mrs' is a title and 'Evans' is a name, so both begin with a capital letter. 'Thank' begins the sentence. 'You' stays small, even after the comma.",
    not: {
      'thank you, mrs evans.':
        "This version has no capital letters at all. 'thank' (the first word), 'mrs' (a title) and 'evans' (a name) need capital letters.",
      'Thank you, mrs evans.':
        "'mrs' (a title) and 'evans' (a name) need capital letters, but here they are small.",
      'Thank You, Mrs Evans.':
        "'You' is an ordinary word, so it stays small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: 'A comma does not start a new sentence, so the next word stays small unless it is a name: Thank you, Mrs Evans.',
    tip: 'When you thank someone, write their title and name with capitals: Thank you, Mrs Evans.',
  },
  'Ask Professor Lee.': {
    why: "'Professor' is a title in front of a name, and 'Lee' is the name, so both need capital letters. 'Ask' begins the sentence.",
    not: {
      'ask professor lee.':
        "This version has no capital letters at all. 'ask' (the first word), 'professor' (a title) and 'lee' (a name) need capital letters.",
      'Ask professor lee.':
        "'professor' (a title) and 'lee' (a name) need capital letters, but here they are small.",
      'ask Professor Lee.': "'ask' (the first word) needs a capital letter, but here it is small.",
    },
    more: "Compare: 'Ask Professor Lee' (a title with a name) and 'Ask a professor' (a job word). The title with a name has capitals, but the job word stays small.",
    tip: "Use a capital for 'Professor' only when a name follows it.",
  },
  'I have a new Samsung phone.': {
    why: "'Samsung' is the name of a company and its brand, so it begins with a capital letter. 'I' is always a capital letter. 'Phone' is an ordinary word, so it stays small.",
    not: {
      'i have a new samsung phone.':
        "This version has no capital letters at all. 'i' (the word 'I') and 'samsung' (a brand name) need capital letters.",
      'I have a new samsung phone.':
        "'samsung' (a brand name) needs a capital letter, but here it is small.",
      'I Have A New Samsung Phone.':
        "This version gives capital letters to ordinary words such as 'Have', 'A' and 'New'. Only the first word, 'I' and names get capitals.",
    },
    more: 'A brand name is the special name that a company gives to its products. It has a capital letter: Samsung, Apple, Sony.',
    tip: 'When you name the make of something, give it a capital letter and keep the thing itself small: a Samsung phone.',
  },
  'We drink Coca-Cola at parties.': {
    why: "'Coca-Cola' is a brand name, so both parts begin with a capital letter: Coca-Cola. 'We' begins the sentence. 'Drink' and 'parties' stay small.",
    not: {
      'we drink coca-cola at parties.':
        "This version has no capital letters at all. 'we' (the first word) and 'coca-cola' (a brand name) need capital letters.",
      'We drink coca-cola at parties.':
        "'coca-cola' (a brand name) needs two capital letters, one for each part: Coca-Cola.",
      'We Drink Coca-Cola At Parties.':
        "This version gives capital letters to ordinary words such as 'Drink', 'At' and 'Parties'. Only the first word, 'I' and names get capitals.",
    },
    more: "The word 'cola' alone is an ordinary word and stays small. But in the brand name 'Coca-Cola', the second part keeps a capital letter too.",
    tip: 'Copy a brand name exactly as the company writes it, with the hyphen and both capitals.',
  },
  'She bought Nike trainers.': {
    why: "'Nike' is a brand name, so it begins with a capital letter. 'She' begins the sentence. 'Bought' and 'trainers' stay small.",
    not: {
      'she bought nike trainers.':
        "This version has no capital letters at all. 'she' (the first word) and 'nike' (a brand name) need capital letters.",
      'She bought nike trainers.':
        "'nike' (a brand name) needs a capital letter, but here it is small.",
      'She Bought Nike Trainers.':
        "'Bought' and 'Trainers' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "'Trainers' is the British word for sports shoes. It stays small, but 'Nike' in front of it is a name.",
    tip: 'A brand name before an ordinary noun keeps its capital letter: Nike trainers, Apple phones.',
  },
  'He watched a film on Netflix.': {
    why: "'Netflix' is the name of a company, so it begins with a capital letter. 'He' begins the sentence. 'Watched', 'film' and 'on' stay small.",
    not: {
      'he watched a film on netflix.':
        "This version has no capital letters at all. 'he' (the first word) and 'netflix' (a company name) need capital letters.",
      'He watched a film on netflix.':
        "'netflix' (a company name) needs a capital letter, but here it is small.",
      'He Watched A Film On Netflix.':
        "This version gives capital letters to ordinary words such as 'Watched', 'A' and 'Film'. Only the first word, 'I' and names get capitals.",
    },
    more: "Company names have capital letters: Netflix, Google, Amazon. The ordinary word 'film' stays small.",
    tip: 'When you say where you watched or found something, write the company name with a capital letter.',
  },
  'I searched for it on Google.': {
    why: "'Google' is the name of a company, so it begins with a capital letter. 'I' is always a capital letter. 'Searched' and 'it' stay small.",
    not: {
      'i searched for it on google.':
        "This version has no capital letters at all. 'i' (the word 'I') and 'google' (a company name) need capital letters.",
      'I searched for it on google.':
        "'google' (a company name) needs a capital letter, but here it is small.",
      'I Searched For It On Google.':
        "This version gives capital letters to ordinary words such as 'Searched', 'For' and 'It'. Only the first word, 'I' and names get capitals.",
    },
    more: "The verb 'to google' is often written with a small g, but the company's name is always 'Google'. Here it is the name.",
    tip: 'Write the company name with a capital letter when you mean the website or the company: on Google.',
  },
  'On Monday I fly to France.': {
    why: "'On' begins the sentence, 'Monday' is a day, 'I' is always a capital letter and 'France' is a country. All four need capital letters. 'Fly' and 'to' stay small.",
    not: {
      'on monday i fly to france.':
        "This version has no capital letters at all. 'on' (the first word), 'monday' (a day), 'i' (the word 'I') and 'france' (a country) need capital letters.",
      'On monday i fly to france.':
        "'monday' (a day), 'i' (the word 'I') and 'france' (a country) need capital letters, but here they are small.",
      'On Monday I Fly To France.':
        "'Fly' and 'To' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "One sentence can use many capital rules: a first word, a day, 'I' and a country. Check them one by one.",
    tip: 'Go through the sentence from left to right and ask about each word: first word, name, place, day or month?',
  },
  'In April Sam visits Germany.': {
    why: "'In' begins the sentence, 'April' is a month, 'Sam' is a name and 'Germany' is a country. All four need capital letters. 'Visits' stays small.",
    not: {
      'in april sam visits germany.':
        "This version has no capital letters at all. 'in' (the first word), 'april' (a month), 'sam' (a name) and 'germany' (a country) need capital letters.",
      'In april sam visits germany.':
        "'april' (a month), 'sam' (a name) and 'germany' (a country) need capital letters, but here they are small.",
      'In April Sam Visits Germany.':
        "'Visits' is an ordinary word, so it stays small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "A month and a country are both special names, so they have capitals, but a verb like 'visits' is an ordinary word.",
    tip: 'Check the month, the person and the country in every sentence about a trip.',
  },
  'I think English is easier than German.': {
    why: "'I' is always a capital letter. 'English' and 'German' are languages, so they begin with capitals. 'Think', 'is', 'easier' and 'than' stay small.",
    not: {
      'i think english is easier than german.':
        "This version has no capital letters at all. 'i' (the word 'I') and the languages 'english' and 'german' need capital letters.",
      'I think english is easier than german.':
        "The languages 'english' and 'german' need capital letters, but here they are small.",
      'I Think English Is Easier Than German.':
        "This version gives capital letters to ordinary words such as 'Think', 'Is' and 'Easier'. Only the first word, 'I' and names get capitals.",
    },
    more: 'Two languages compared in one sentence both need capitals: English is easier than German.',
    tip: 'When you give an opinion about languages, write each language name with a capital letter.',
  },
  'Next Friday Dr Ali leaves for Cairo.': {
    why: "'Next' begins the sentence. 'Friday' is a day, 'Dr' is a title, 'Ali' is a name and 'Cairo' is a city. All five need capital letters. 'Leaves' and 'for' stay small.",
    not: {
      'next friday dr ali leaves for cairo.':
        "This version has no capital letters at all. 'next' (the first word), 'friday' (a day), 'dr' (a title), 'ali' (a name) and 'cairo' (a city) need capital letters.",
      'Next friday dr ali leaves for cairo.':
        "'friday' (a day), 'dr' (a title), 'ali' (a name) and 'cairo' (a city) need capital letters, but here they are small.",
      'Next Friday Dr Ali Leaves For Cairo.':
        "'Leaves' and 'For' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: 'The title and the name belong together: Dr Ali. The day and the city are special names too.',
    tip: 'A long sentence may need many capitals. Read it once just to look for capital letters.',
  },
  'My friend Olga speaks Russian and English.': {
    why: "'My' begins the sentence. 'Olga' is a name, and 'Russian' and 'English' are languages. All four need capital letters. 'Friend' and 'speaks' stay small.",
    not: {
      'my friend olga speaks russian and english.':
        "This version has no capital letters at all. 'my' (the first word), 'olga' (a name) and the languages 'russian' and 'english' need capital letters.",
      'My friend olga speaks russian and english.':
        "'olga' (a name) and the languages 'russian' and 'english' need capital letters, but here they are small.",
      'My Friend Olga Speaks Russian And English.':
        "This version gives capital letters to ordinary words such as 'Friend', 'Speaks' and 'And'. Only the first word, 'I' and names get capitals.",
    },
    more: "'Friend' stays small even before a name: my friend Olga. The name has the capital letter, not the word 'friend'.",
    tip: "When you introduce a friend, write the friend's name and the languages with capital letters.",
  },
  'In January we move to Canada.': {
    why: "'In' begins the sentence. 'January' is a month and 'Canada' is a country, so both need capital letters. 'We' and 'move' stay small.",
    not: {
      'in january we move to canada.':
        "This version has no capital letters at all. 'in' (the first word), 'january' (a month) and 'canada' (a country) need capital letters.",
      'In january we move to canada.':
        "'january' (a month) and 'canada' (a country) need capital letters, but here they are small.",
      'In January We Move To Canada.':
        "This version gives capital letters to ordinary words such as 'We', 'Move' and 'To'. Only the first word, 'I' and names get capitals.",
    },
    more: "Even a short word like 'In' needs a capital letter at the start of a sentence.",
    tip: 'Plan a move or a trip in writing: In January we move to Canada. Check the month and the country.',
  },
  'Miss Ford and I visit York on Sunday.': {
    why: "'Miss' is a title and 'Ford' a name, 'I' is always a capital letter, 'York' is a city and 'Sunday' is a day. All need capitals. 'And' and 'visit' stay small.",
    not: {
      'miss ford and i visit york on sunday.':
        "This version has no capital letters at all. 'miss' (a title), 'ford' (a name), 'i' (the word 'I'), 'york' (a city) and 'sunday' (a day) need capital letters.",
      'Miss ford and i visit york on sunday.':
        "'ford' (a name), 'i' (the word 'I'), 'york' (a city) and 'sunday' (a day) need capital letters, but here they are small.",
      'Miss Ford And I Visit York On Sunday.':
        "This version gives capital letters to ordinary words such as 'And', 'Visit' and 'On'. Only the first word, 'I' and names get capitals.",
    },
    more: "In 'Miss Ford and I', the 'I' keeps its capital letter even after 'and'.",
    tip: 'Check five things in a sentence like this: a title, a name, I, a place and a day.',
  },
  'The Toyota is parked outside.': {
    why: "'Toyota' is the name of a car brand, so it begins with a capital letter. 'The' begins the sentence. 'Parked' and 'outside' stay small.",
    not: {
      'the toyota is parked outside.':
        "This version has no capital letters at all. 'the' (the first word) and 'toyota' (a brand name) need capital letters.",
      'The toyota is parked outside.':
        "'toyota' (a brand name) needs a capital letter, but here it is small.",
      'The Toyota Is Parked Outside.':
        "This version gives capital letters to ordinary words such as 'Is', 'Parked' and 'Outside'. Only the first word, 'I' and names get capitals.",
    },
    more: 'A car is an ordinary word, but a car brand is a name: a car, but a Toyota, a Ford, a Volkswagen.',
    tip: 'Give a capital letter to the make of a car, a phone or a pair of shoes.',
  },
  'We celebrate Christmas in December.': {
    why: "'Christmas' is the name of a festival and 'December' is a month, so both begin with capital letters. 'We' begins the sentence. 'Celebrate' stays small.",
    not: {
      'we celebrate christmas in december.':
        "This version has no capital letters at all. 'we' (the first word), 'christmas' (a festival) and 'december' (a month) need capital letters.",
      'We celebrate christmas in december.':
        "'christmas' (a festival) and 'december' (a month) need capital letters, but here they are small.",
      'We Celebrate Christmas In December.':
        "'Celebrate' and 'In' are ordinary words, so they stay small. In the middle of a sentence, only names and special words get capitals.",
    },
    more: "Festival names have capitals: Christmas, Easter, Eid, Diwali. The word 'festival' itself is an ordinary word and stays small.",
    tip: 'Write the name of every festival with a capital letter when you write about your holidays.',
  },
  'Do you like the BBC news?': {
    why: "'BBC' is the short name of an organisation, so all its letters are capitals. 'Do' begins the question. 'News' is an ordinary word, so it stays small.",
    not: {
      'do you like the bbc news?':
        "This version has no capital letters at all. 'do' (the first word) and 'bbc' (an organisation's initials) need capital letters.",
      'Do you like the bbc news?':
        "'bbc' (an organisation's initials) is written in small letters here. All three letters need capitals: BBC.",
      'Do You Like The BBC News?':
        "This version gives capital letters to ordinary words such as 'You', 'Like' and 'The'. Only the first word, 'I' and names get capitals.",
    },
    more: 'Initials such as BBC, UK and NHS are written with all capital letters. Each letter stands for a word.',
    tip: 'Write initials in capital letters and without full stops: BBC, UK, NHS.',
  },
}
