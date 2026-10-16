import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Days, Months & Seasons: the explanation a student sees after each answer,
 * by question key (src/data/games/banks/days-months-seasons.ts). Written with
 * AI on 16 October 2026 and checked against each question and its options, as
 * the founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'Which day comes FIRST in the week (UK calendars often start here)?': {
    why: 'UK calendars and diaries usually start the week on Monday, so Monday is the first day. You can say: I go back to school on Monday.',
    not: {
      Friday: 'Friday is the fifth day of the week, not the first. It comes after Thursday.',
      Sunday:
        'On UK calendars Sunday is the last day of the week, after Saturday. In some countries it comes first, but this question asks about the UK.',
      Wednesday: 'Wednesday is the third day, in the middle of the school week.',
    },
    more: 'In the USA and some other countries, calendars start the week on Sunday. The order of the days stays the same.',
    tip: 'Learn the days in order: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Say them every morning.',
  },
  'Which is the THIRD day of the week, counting from Monday?': {
    why: 'Count from Monday: Monday is one, Tuesday is two and Wednesday is three. So Wednesday is the third day. You can say: We have English on Wednesday.',
    not: {
      Tuesday: 'Tuesday is the second day. You count one, two, and then Wednesday is three.',
      Thursday: 'Thursday is the fourth day. It comes after Wednesday.',
      Monday: 'Monday is the first day, so it is number one, not number three.',
    },
    more: "'Third' is the ordinal number for 3. We use ordinal numbers for order: first, second, third, fourth.",
    tip: 'Use your fingers. Put up one finger for each day from Monday and stop at three.',
  },
  'Which is the LAST day of the week (the weekend day after Saturday)?': {
    why: 'On most UK calendars the week starts on Monday, so the last day is Sunday, after Saturday. You can say: On Sunday I rest at home.',
    not: {
      Friday: 'Friday is the fifth day. Two days come after it: Saturday and Sunday.',
      Saturday: 'Saturday is the sixth day. Sunday comes after it.',
      Monday: 'Monday is the first day of the week, not the last.',
    },
    more: "Saturday and Sunday make the weekend. In British English we say 'at the weekend'.",
    tip: "Remember that 'weekend' is 'week' + 'end'. The week ends with Saturday and Sunday.",
  },
  'Put these in order. Which day is in the MIDDLE: Monday, ?, Friday?': {
    why: 'Count the days from Monday to Friday: Monday, Tuesday, Wednesday, Thursday, Friday. The middle day of these five is Wednesday. You can say: Wednesday is the middle of the school week.',
    not: {
      Sunday: 'Sunday is not between Monday and Friday. It comes after Saturday.',
      Saturday: 'Saturday comes after Friday, so it is not between Monday and Friday.',
      Monday: 'Monday is at the start. The question already shows it.',
    },
    more: 'There are two days before Wednesday, Monday and Tuesday, and two days after it, Thursday and Friday.',
    tip: 'To find a middle day, count the days on each side. The two numbers must be the same.',
  },
  'Which is the FIRST month of the year?': {
    why: 'The year begins on the first of January, so January is the first month. You can say: My birthday is in January.',
    not: {
      March: 'March is the third month, after February.',
      December: 'December is the last month of the year, not the first.',
      June: 'June is the sixth month, in the middle of the year.',
    },
    more: "We say 'in January' for the month and 'on the first of January' for the day.",
    tip: 'Learn the months in order, like a song: January, February, March, April, May, June.',
  },
  'Which is the LAST month of the year?': {
    why: 'A year has twelve months, and December is the twelfth and last one. After December a new year begins with January. You can say: We have a holiday in December.',
    not: {
      November: 'November is the eleventh month. December comes after it.',
      October: 'October is the tenth month, two months before the end of the year.',
      January: 'January is the first month, not the last.',
    },
    more: 'The name is old. In the old Roman calendar the year began in March, so December was the tenth month.',
    tip: 'Say the last three months together: October, November, December.',
  },
  'Which is the SIXTH month of the year?': {
    why: 'Count from January: January 1, February 2, March 3, April 4, May 5, June 6. So June is the sixth month. You can say: My sister was born in June.',
    not: {
      May: 'May is the fifth month, one month before June.',
      July: 'July is the seventh month, one month after June.',
      August: 'August is the eighth month, two months after June.',
    },
    more: 'Summer starts in June in the UK.',
    tip: 'Count on your fingers from January and say each month as you count.',
  },
  'Which month is number 9 (the ninth month)?': {
    why: 'Count from January until you reach nine: August is eight and September is nine. So September is the ninth month. You can say: School starts in September in the UK.',
    not: {
      August: 'August is the eighth month, one month before September.',
      October: 'October is the tenth month, one month after September.',
      November: 'November is the eleventh month.',
    },
    more: "'Sept' means seven in Latin. September was the seventh month in the old Roman calendar, before the calendar changed.",
    tip: "Spell the ordinal number 'ninth' without an 'e': n, i, n, t, h.",
  },
  'Which is the SECOND day of the week, counting from Monday?': {
    why: 'Count from Monday: Monday is one and Tuesday is two. So Tuesday is the second day. You can say: I have a music lesson on Tuesday.',
    not: {
      Sunday:
        'Counting from Monday, Sunday is the seventh day, the last one. It is not the second.',
      Thursday: 'Thursday is the fourth day.',
      Monday: 'Monday is the first day, not the second.',
    },
    more: "'Second' is also a small part of a minute. Here it means number two in order.",
    tip: 'Say the first three days with their numbers: Monday one, Tuesday two, Wednesday three.',
  },
  'How many days are there in a week?': {
    why: 'A week has seven days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday. You can say: There are seven days in a week.',
    not: {
      '5': 'Five is only the school days, Monday to Friday. The weekend adds two more days.',
      '6': 'Six is one day too few. Count again and include Sunday.',
      '8': 'Eight is one day too many. A week has seven days.',
    },
    more: 'Five of the days are weekdays and two are the weekend.',
    tip: "Learn the phrase 'seven days a week'. It means every day.",
  },
  'How many months are there in a year?': {
    why: 'A year has twelve months, from January to December. You can say: There are twelve months in a year.',
    not: {
      '10': 'Ten is two months too few. Count all the way to December.',
      '11': 'Eleven is one month too few. Count again to the end of the year.',
      '13': 'Thirteen is one month too many. A year has twelve months.',
    },
    more: 'Some months have 30 days, some have 31, and February has 28 or 29.',
    tip: 'Say the numbers with the months: January is 1 and December is 12.',
  },
  'Which is the FOURTH month of the year?': {
    why: 'Count from January: January 1, February 2, March 3, April 4. So April is the fourth month. You can say: It often rains in April.',
    not: {
      March: 'March is the third month, one month before April.',
      May: 'May is the fifth month, one month after April.',
      February: 'February is the second month.',
    },
    more: 'April is a spring month in the UK, and it often rains.',
    tip: 'Learn the ordinal numbers with the months: the fourth month is April, and the fifth month is May.',
  },
  'What day comes AFTER Wednesday?': {
    why: 'The days always go in the same order, and Thursday comes straight after Wednesday. You can say: We have art on Wednesday and music on Thursday.',
    not: {
      Tuesday: 'Tuesday comes before Wednesday, not after it.',
      Friday: 'Friday comes after Thursday, so it is two days after Wednesday.',
      Monday: 'Monday is at the start of the week, two days before Wednesday.',
    },
    more: "'After' means later and 'before' means earlier. We use them to talk about order.",
    tip: 'Say the days in a line to find the next one: Wednesday, Thursday.',
  },
  'What day comes BEFORE Monday?': {
    why: 'The week goes round and round, so the day before Monday is always Sunday. You can say: We rest on Sunday, and school starts on Monday.',
    not: {
      Tuesday: 'Tuesday comes after Monday, not before it.',
      Saturday: 'Saturday is two days before Monday. Sunday is in between.',
      Friday: 'Friday is three days before Monday.',
    },
    more: 'On most UK calendars Sunday is the last day of the week, so it comes just before the next Monday.',
    tip: 'Remember the circle: after Sunday comes Monday again, so Sunday is the day before Monday.',
  },
  'What day comes AFTER Friday?': {
    why: 'Friday is followed by Saturday, the first day of the weekend. You can say: On Friday I go to school, and on Saturday I stay at home.',
    not: {
      Thursday: 'Thursday comes before Friday, not after it.',
      Sunday: 'Sunday comes after Saturday, so it is two days after Friday.',
      Monday: 'Monday comes after the weekend, three days after Friday.',
    },
    more: 'The weekend is Saturday and Sunday.',
    tip: 'Friday ends the school week and Saturday starts the weekend.',
  },
  'What day comes BEFORE Thursday?': {
    why: 'Wednesday comes just before Thursday. You can say: I have swimming on Wednesday and football on Thursday.',
    not: {
      Friday: 'Friday comes after Thursday, not before it.',
      Tuesday: 'Tuesday is two days before Thursday. Wednesday is in between.',
      Monday: 'Monday is three days before Thursday.',
    },
    more: 'Wednesday is the middle of the school week, between Tuesday and Thursday.',
    tip: 'Count back one day to find the day before. From Thursday, one day back is Wednesday.',
  },
  'What day comes AFTER Sunday?': {
    why: 'On most UK calendars Sunday is the last day of the week, and the next day is Monday, the start of a new week. You can say: On Sunday I rest, and on Monday I go back to school.',
    not: {
      Saturday: 'Saturday comes before Sunday, not after it.',
      Tuesday: 'Tuesday comes after Monday, so it is two days after Sunday.',
      Friday: 'Friday is two days before Sunday.',
    },
    more: 'The days go in a circle. After the last day, the first day comes again.',
  },
  'What day comes BEFORE Saturday?': {
    why: 'Friday comes just before Saturday. You can say: I see my cousins on Friday, and we go shopping on Saturday.',
    not: {
      Sunday: 'Sunday comes after Saturday, not before it.',
      Thursday: 'Thursday is two days before Saturday. Friday is in between.',
      Monday: 'Monday is five days before Saturday.',
    },
    more: 'Friday is the last day of the school week in the UK.',
    tip: 'Count back one day: from Saturday, one day back is Friday.',
  },
  'What month comes AFTER March?': {
    why: 'The months always go in the same order, and April comes straight after March. You can say: Spring starts in March, and it is warmer in April.',
    not: {
      February: 'February comes before March, not after it.',
      May: 'May comes after April, so it is two months after March.',
      June: 'June is three months after March.',
    },
    more: 'In the UK we usually count March, April and May as the spring months.',
    tip: 'Say the months in a line to find the next one: March, April.',
  },
  'What month comes BEFORE January?': {
    why: 'The year goes round. After December comes January, so December is the month before January. You can say: The year ends in December and begins again in January.',
    not: {
      November: 'November is two months before January. December is in between.',
      February: 'February comes after January, not before it.',
      October: 'October is three months before January.',
    },
    more: 'The last month of one year comes just before the first month of the next year.',
    tip: 'Remember the circle: after December comes January again.',
  },
  'What month comes AFTER July?': {
    why: 'August comes straight after July. You can say: The days are long in July and August.',
    not: {
      June: 'June comes before July, not after it.',
      September: 'September is two months after July.',
      May: 'May is two months before July.',
    },
    more: 'In the UK we usually count June, July and August as the summer months.',
    tip: 'Say the three summer months together: June, July, August.',
  },
  'What month comes BEFORE October?': {
    why: 'September comes straight before October. You can say: School starts in September, and the leaves fall in October.',
    not: {
      November: 'November comes after October, not before it.',
      August: 'August is two months before October. September is in between.',
      December: 'December is two months after October.',
    },
    more: 'In the UK we usually count September, October and November as the autumn months.',
    tip: 'Count back one month: from October, one month back is September.',
  },
  'What month comes AFTER November?': {
    why: 'December comes straight after November. You can say: The days are short in November and December.',
    not: {
      October: 'October comes before November, not after it.',
      January: 'January is two months after November.',
      September: 'September is two months before November.',
    },
    tip: 'Say the last three months together: October, November, December.',
  },
  'What day comes AFTER Tuesday?': {
    why: 'Wednesday comes straight after Tuesday. You can say: I have art on Tuesday and maths on Wednesday.',
    not: {
      Monday: 'Monday comes before Tuesday, not after it.',
      Thursday: 'Thursday is two days after Tuesday.',
      Friday: 'Friday is three days after Tuesday.',
    },
    tip: 'Say the days in a line to find the next one: Tuesday, Wednesday.',
  },
  'What month comes BEFORE June?': {
    why: 'May comes straight before June. You can say: The flowers come out in May, and the summer starts in June.',
    not: {
      July: 'July comes after June, not before it.',
      April: 'April is two months before June. May is in between.',
      August: 'August is two months after June.',
    },
    more: 'In the UK we usually count the seasons in whole months, so May is the last month of spring and June is the first month of summer.',
    tip: 'Count back one month: from June, one month back is May.',
  },
  'Which season is December in?': {
    why: 'In the UK we usually count the seasons in whole months, and winter is December, January and February. So December is the first month of winter. You can say: It is cold and dark in December.',
    not: {
      Summer: 'Summer is June, July and August, the warmest months.',
      Spring: 'Spring is March, April and May, when flowers begin to grow.',
      Autumn:
        'Counted in whole months, autumn is September, October and November. Some calendars start winter on about 21 December instead, so early December is autumn on them, but this game counts whole months.',
    },
    more: 'The UK weather service counts the seasons in whole months like this. Some calendars start winter on about 21 December instead. In the southern half of the world, such as Australia, the seasons are the other way round, and December is summer.',
    tip: 'Learn each season with its three months: winter is December, January and February.',
  },
  'Which season is July in?': {
    why: 'In the UK we usually count the seasons in whole months: summer is June, July and August. July is in the middle of summer. You can say: We go to the beach in July.',
    not: {
      Winter: 'Winter is December, January and February, the coldest months.',
      Autumn: 'Autumn is September, October and November.',
      Spring: 'Spring is March, April and May.',
    },
    more: 'July is often the warmest month in the UK.',
    tip: "Say 'in summer' or 'in the summer', and 'in July'. We use 'in' with seasons and months.",
  },
  'Which season is April in?': {
    why: 'In the UK we usually count the seasons in whole months: spring is March, April and May. In April the weather gets warmer and flowers begin to grow. You can say: There are many flowers in April.',
    not: {
      Autumn: 'Autumn is September, October and November, when leaves fall.',
      Winter: 'Winter is December, January and February, the coldest months.',
      Summer: 'Summer is June, July and August, the warmest months.',
    },
    more: "An old English saying is 'April showers bring May flowers'. It means that spring rain helps the flowers grow.",
  },
  'Which season is October in?': {
    why: 'In the UK we usually count the seasons in whole months: autumn is September, October and November. In October the leaves turn red and yellow and fall from the trees. You can say: The leaves fall in October.',
    not: {
      Spring: 'Spring is March, April and May, when flowers begin to grow.',
      Summer: 'Summer is June, July and August, the warmest months.',
      Winter: 'Winter is December, January and February, the coldest months.',
    },
    more: "Americans say 'fall' for autumn. In British English we usually say 'autumn'.",
  },
  'Which season is February in?': {
    why: 'In the UK we usually count the seasons in whole months: winter is December, January and February. So February is the last month of winter. You can say: It can snow in February.',
    not: {
      Spring: 'Spring starts in March, not February.',
      Summer: 'Summer is June, July and August.',
      Autumn: 'Autumn is September, October and November.',
    },
    more: 'February is the shortest month. It has 28 days, or 29 days every four years.',
    tip: 'Remember that winter crosses two years: it starts in December and ends in February.',
  },
  'Which season is May in?': {
    why: 'In the UK we usually count the seasons in whole months: spring is March, April and May. So May is the last month of spring. You can say: The gardens are green in May.',
    not: {
      Summer: 'Summer starts in June, not May.',
      Autumn: 'Autumn is September, October and November.',
      Winter: 'Winter is December, January and February.',
    },
    more: 'In May the days get longer and the weather is warmer.',
  },
  'Which season is August in?': {
    why: 'In the UK we usually count the seasons in whole months: summer is June, July and August. So August is the last month of summer. You can say: Many schools have a holiday in August.',
    not: {
      Autumn: 'Autumn starts in September, not August.',
      Winter: 'Winter is December, January and February.',
      Spring: 'Spring is March, April and May.',
    },
    more: 'In the UK the long school holiday is in the summer.',
  },
  'Which season is November in?': {
    why: 'In the UK we usually count the seasons in whole months: autumn is September, October and November. So November is the last month of autumn. You can say: It is often wet and grey in November.',
    not: {
      Winter: 'Winter starts in December, not November.',
      Spring: 'Spring is March, April and May.',
      Summer: 'Summer is June, July and August.',
    },
    more: 'In November most of the leaves have fallen and the days are short.',
  },
  'Which month is in Summer?': {
    why: 'In the UK we usually count the seasons in whole months: summer is June, July and August. So June is a summer month, and of these four months, only June is in summer. You can say: It is warm and light in June.',
    not: {
      January: 'January is in winter, the coldest season.',
      March: 'March is in spring.',
      October: 'October is in autumn.',
    },
    more: 'Some calendars start summer on about 21 June, the longest day of the year. Counted either way, June is the only summer month here.',
    tip: 'Learn which three months go with each season. Then you can answer any question like this.',
  },
  'Which month is in Winter?': {
    why: 'In the UK we usually count the seasons in whole months: winter is December, January and February. So January is a winter month, and of these four months, only January is in winter. You can say: It is very cold in January.',
    not: {
      May: 'May is in spring.',
      July: 'July is in summer, the warmest season.',
      September: 'September is in autumn.',
    },
    more: 'January and February are usually the coldest months in the UK.',
  },
  'Which month is in Spring?': {
    why: 'In the UK we usually count the seasons in whole months: spring is March, April and May. So March is a spring month, and of these four months, only March is in spring. You can say: The flowers come out in March.',
    not: {
      December: 'December is in winter.',
      August: 'August is in summer.',
      November: 'November is in autumn.',
    },
    more: 'Some calendars start spring on about 20 March, when day and night are the same length. Counted either way, spring starts in March.',
  },
  'Which month is in Autumn?': {
    why: 'In the UK we usually count the seasons in whole months: autumn is September, October and November. So September is an autumn month, and of these four months, only September is in autumn. You can say: School starts again in September.',
    not: {
      June: 'June is in summer.',
      February: 'February is in winter.',
      April: 'April is in spring.',
    },
    more: 'Some calendars start autumn on about 22 September. Counted either way, autumn starts in September: the leaves turn gold and red, and the days get shorter.',
  },
  'Which season is January in?': {
    why: 'In the UK we usually count the seasons in whole months: winter is December, January and February. January is in the middle of winter. You can say: January is cold and dark.',
    not: {
      Spring: 'Spring starts in March, two months later.',
      Summer: 'Summer is June, July and August, the warmest months.',
      Autumn: 'Autumn is September, October and November.',
    },
    more: 'January and February are usually the coldest months in the UK.',
    tip: 'Learn the seasons as four groups of three months.',
  },
  'Which season is September in?': {
    why: 'In the UK we usually count the seasons in whole months: autumn is September, October and November. So September is the first month of autumn. You can say: The leaves start to change colour in September.',
    not: {
      Summer:
        'Counted in whole months, summer is June, July and August. Some calendars end summer on about 22 September instead, so early September is summer on them, but this game counts whole months.',
      Spring: 'Spring is March, April and May.',
      Winter: 'Winter is December, January and February.',
    },
    more: 'Some people say summer lasts until about 22 September, when day and night are the same length. The UK weather service counts autumn from the first of September.',
  },
  'Which is the correct spelling? Wednesday': {
    why: "The correct spelling is 'Wednesday'. We say 'WENZ-day', but we write the silent 'd' and the second 'e'. You can say: I have swimming on Wednesday.",
    not: {
      Wensday:
        "'Wensday' follows the sound, but it leaves out two silent letters: the 'd' after 'We' and the 'e' after 'n'.",
      Wendsday:
        "'Wendsday' puts the 'd' after the 'n' and leaves out the second 'e'. The order is W, e, d, n, e, s.",
      Wednsday: "'Wednsday' leaves out the 'e' after the 'n'. The middle of the word is 'nes'.",
    },
    more: "'Wednesday' comes from 'Woden's day'. Woden was an old god, and the 'd' of his name stays in the spelling.",
    tip: 'Write it in three parts: Wed, nes, day.',
  },
  'Which is the correct spelling? February': {
    why: "The correct spelling is 'February'. It has two 'r' letters: one after 'Feb' and one before the 'y'. You can say: My birthday is in February.",
    not: {
      Febuary:
        "'Febuary' leaves out the first 'r'. Many people say it without that sound, but we write it.",
      Februery: "'Februery' ends in 'ery'. The ending is 'ary', like 'January'.",
      Feburary: "'Feburary' puts 'u' before 'r'. The order is 'r' and then 'u': Feb, ru, ary.",
    },
    more: 'The name comes from an old Roman festival called Februa.',
    tip: "Say 'Feb, ru, ary' slowly. Write the first 'r' even if people do not say it.",
  },
  'Which is the correct spelling? Tuesday': {
    why: "The correct spelling is 'Tuesday'. The letters are T, U, E, S, D, A, Y. The 'u' and the 'e' come together. You can say: I play football on Tuesday.",
    not: {
      Tusday: "'Tusday' leaves out the 'e'. After 'Tu' we write 'e', and then 's'.",
      Teusday: "'Teusday' puts 'e' before 'u'. The order is 'u' and then 'e'.",
      Tuseday: "'Tuseday' puts the 'e' after the 's'. The 'e' goes before the 's'.",
    },
    more: "'Tuesday' comes from 'Tiw's day'. Tiw was an old god.",
    tip: "Say 'Tues' and then 'day', and write the letters in the same order.",
  },
  'Which is the correct spelling? Thursday': {
    why: "The correct spelling is 'Thursday'. After 'Th' we write 'ur', then 's' and 'day'. You can say: We have art on Thursday.",
    not: {
      Thirsday: "'Thirsday' has 'i' where it should have 'u'. The word 'thirsty' is different.",
      Thusday: "'Thusday' leaves out the 'r'. The spelling has 'ur' in it.",
      Thrusday: "'Thrusday' puts 'r' before 'u'. The order is 'u' and then 'r'.",
    },
    more: "'Thursday' comes from 'Thor's day'. Thor was a god in old stories from northern Europe.",
    tip: "Do not mix it up with 'thirsty'. Thursday has 'ur', and thirsty has 'ir'.",
  },
  'Which is the correct spelling? Saturday': {
    why: "The correct spelling is 'Saturday'. It begins 'Satur' and ends 'day'. You can say: We play games on Saturday.",
    not: {
      Saterday: "'Saterday' has 'e' where it should have 'u'. The middle of the word is 'ur'.",
      Satuday: "'Satuday' leaves out the 'r'. We write 'Satur' with an 'r'.",
      Saturaday: "'Saturaday' has an extra 'a' after the 'r'. The ending is only 'day'.",
    },
    more: "'Saturday' comes from 'Saturn's day'. Saturn was a Roman god, and it is also a planet.",
    tip: "Think of the planet Saturn. 'Saturday' starts with the same five letters, 'Satur'.",
  },
  'Which is the correct spelling? January': {
    why: "The correct spelling is 'January'. It is 'Jan', then 'u', then 'ary'. You can say: January is the first month.",
    not: {
      Janurary: "'Janurary' has an extra 'r' after the 'u'. The ending is 'u' and then 'ary'.",
      Januery: "'Januery' ends in 'ery'. The ending is 'ary'.",
      Janaury: "'Janaury' has 'a' and 'u' in the wrong order. After 'Jan' comes 'u', then 'ary'.",
    },
    more: 'January is named after Janus, the Roman god of doors and new beginnings.',
    tip: "Compare the endings of January and February. Both end in 'uary'.",
  },
  'Which is the correct spelling? August': {
    why: "The correct spelling is 'August'. It has two 'u' letters: A, U, G, U, S, T. You can say: We go on holiday in August.",
    not: {
      Agust: "'Agust' leaves out the first 'u'. The word starts 'Au'.",
      Augost: "'Augost' has 'o' where it should have 'u'. The ending is 'ust'.",
      Augest: "'Augest' has 'e' where it should have 'u'. The ending is 'ust'.",
    },
    more: 'August is named after Augustus, a famous ruler of ancient Rome.',
    tip: "Say it slowly in two parts: Au, gust. The 'g' sits between the two 'u' letters.",
  },
  'Which is the correct spelling? September': {
    why: "The correct spelling is 'September'. It has three parts: Sept, em, ber. You can say: School starts in September.",
    not: {
      Septmber: "'Septmber' leaves out the 'e' after 'Sept'. The parts are Sept, em, ber.",
      Setember: "'Setember' leaves out the 'p'. The word starts 'Sept'.",
      Septembre: "'Septembre' is the French spelling. In English the word ends in 'ber'.",
    },
    more: "'Sept' means seven in Latin. September was the seventh month in the old Roman calendar.",
    tip: 'Write it in three parts: Sept, em, ber.',
  },
  'Which is the correct spelling? Friday': {
    why: "The correct spelling is 'Friday'. It is 'Fri' and then 'day'. You can say: I see my friends on Friday.",
    not: {
      Friaday: "'Friaday' has an extra 'a'. After 'Fri' comes 'day'.",
      Fryday:
        "'Fryday' has 'y' where it should have 'i'. 'Fry' is a different word: to cook in oil.",
      Firday: "'Firday' has 'i' and 'r' in the wrong order. The order is 'r' and then 'i'.",
    },
    more: "'Friday' comes from 'Frigg's day'. Frigg was an old goddess.",
    tip: "Write 'Fri' and then 'day'. All seven day names end in 'day'.",
  },
  'Which is the correct spelling? October': {
    why: "The correct spelling is 'October'. It is 'Oct', then 'o', then 'ber'. You can say: My school trip is in October.",
    not: {
      Octuber: "'Octuber' has 'u' where it should have 'o'. After 'Oct' comes 'o'.",
      Octobre: "'Octobre' is the French spelling. In English the word ends in 'ber'.",
      Octobor: "'Octobor' ends in 'bor'. The ending is 'ber', as in 'September'.",
    },
    more: "'Oct' means eight in Latin. October was the eighth month in the old Roman calendar.",
    tip: "Months nine to twelve all end in 'ber': September, October, November, December.",
  },
  'Which is the correct spelling? December': {
    why: "The correct spelling is 'December'. It is 'Dec', 'em', 'ber'. You can say: We have a holiday in December.",
    not: {
      Desember: "'Desember' has 's' where it should have 'c'. The word starts 'Dec'.",
      Decembre: "'Decembre' is the French spelling. In English the word ends in 'ber'.",
      Decmber: "'Decmber' leaves out the 'e' after 'Dec'. The parts are Dec, em, ber.",
    },
    more: "'Decem' means ten in Latin. December was the tenth month in the old Roman calendar.",
    tip: 'Learn the pattern: Sept, em, ber and Nov, em, ber and Dec, em, ber.',
  },
  'Which is the correct spelling? Monday': {
    why: "The correct spelling is 'Monday'. It is 'Mon' and then 'day'. You can say: School starts on Monday.",
    not: {
      Munday: "'Munday' has 'u' where it should have 'o'. The first part is 'Mon', like 'moon'.",
      Monady:
        "'Monady' has the 'a' and the 'd' in the wrong order. After 'Mon' comes 'd', then 'a', then 'y'.",
      Mondey: "'Mondey' ends in 'ey'. Every day name ends in 'day'.",
    },
    more: "'Monday' means 'the moon's day'. The first part, 'Mon', is like the word 'moon'.",
    tip: "Check the ending first: it is always 'day'.",
  },
  'Which is the correct spelling? Sunday': {
    why: "The correct spelling is 'Sunday'. It is 'Sun' and then 'day'. You can say: We visit my grandparents on Sunday.",
    not: {
      Sonday:
        "'Sonday' has 'o' where it should have 'u'. The first part is 'Sun', like the sun in the sky.",
      Sunaday: "'Sunaday' has an extra 'a'. After 'Sun' comes 'day'.",
      Sundey: "'Sundey' ends in 'ey'. Every day name ends in 'day'.",
    },
    more: "'Sunday' means 'the sun's day'. The first part is the word 'sun'.",
    tip: "Think of the sun in the sky: Sun + day. This stops you writing 'Son', which is a boy in a family.",
  },
  'Which is the correct spelling? November': {
    why: "The correct spelling is 'November'. It is 'Nov', 'em', 'ber'. You can say: Bonfire Night is in November.",
    not: {
      Novmber: "'Novmber' leaves out the 'e' after 'Nov'. The parts are Nov, em, ber.",
      Novembre: "'Novembre' is the French spelling. In English the word ends in 'ber'.",
      Noveber: "'Noveber' leaves out the 'm'. The middle of the word is 'em', then 'b'.",
    },
    more: "'Novem' means nine in Latin. November was the ninth month in the old Roman calendar.",
    tip: "Months nine to twelve end in 'ber'. Learn them as a group.",
  },
}
