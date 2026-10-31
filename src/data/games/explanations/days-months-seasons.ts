import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Days, Months & Seasons: the explanation a student sees after each answer,
 * by question key (src/data/games/banks/days-months-seasons.ts). Written with
 * AI on 16 October 2026 and checked against each question and its options, as
 * the founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 203 questions added (240 in all, 80 at each tier), the 37 questions kept were explained again so that each explanation names only the days, months and seasons its own question names, and the 16 questions removed lost theirs. Written with AI and checked against each question, as the founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second reader, as the founder decided (13 October 2026): fourteen explanations corrected. Seven why-nots for the short forms no longer spell out another question's short form; the leap-year why no longer says every four years without exception (2100 is not a leap year); 'maths' is no longer given as a plural of 'math'; 'octopus' is no longer offered as Latin; the tip on fifth and twelfth names the change it means; 'Julai' is traced to Malay and Swahili; and the March, 'a week today' and 'the other day' questions are explained as they now stand (the bank's docblock says what changed in them, and which two questions moved from tier 3 to tier 2, so that the tiers now hold 80, 82 and 78).
 */
export const EXPLANATIONS: GameExplanations = {
  'Which day comes FIRST in the week (UK calendars often start here)?': {
    why: 'On most UK calendars and school timetables the week starts on Monday, so Monday is the first day of the week. You can say: A new week starts on Monday.',
    not: {
      Sunday:
        'Calendars in the USA and some other countries start the week on Sunday. UK calendars usually put Sunday at the end of the week.',
      Saturday:
        'In some countries the week starts on Saturday. On a UK calendar Saturday is near the end of the week, not the start.',
      Friday:
        'Friday is the last day of the school week in the UK, so it is near the end of the week, not the start.',
    },
    tip: 'On a UK calendar, look at the first column. It is usually Monday.',
  },
  'Which is the THIRD day of the week, counting from Monday?': {
    why: "Count from Monday: Monday is number one, and you stop on number three. That day is Wednesday. 'Third' means number three in order. You can say: Wednesday is the third day of the week.",
    not: {
      Tuesday:
        'Tuesday is the second day. It comes straight after Monday, so it is number two, not number three.',
      Thursday: 'Thursday is the fourth day. It is one day too far.',
      Monday: 'Monday is where you start counting, so it is the first day, number one.',
    },
    more: "'Third' is an ordinal number. Ordinal numbers tell us the order of things, not how many there are.",
    tip: 'Use your fingers. Start with Monday on one finger and say the next day on each new finger.',
  },
  'Which is the LAST day of the week on a UK calendar?': {
    why: 'On a UK calendar the week ends on Sunday. Sunday is the seventh and last day. You can say: On Sunday we visit my grandparents.',
    not: {
      Saturday:
        'Saturday is the sixth day. Calendars in the USA often end the week on it, but on a UK calendar one more day comes after it.',
      Friday:
        'Friday is the last day of the school week, not of the whole week. Two more days come after it.',
    },
    more: "'Last' here means at the end, after all the others.",
    tip: 'On a UK calendar, the right-hand column shows the last day of each week.',
  },
  'Which day is in the MIDDLE of the school week, from Monday to Friday?': {
    why: 'The school week has five days. The middle day has two days before it and two days after it, and that is Wednesday. You can say: On Wednesday we are halfway through the week.',
    not: {
      Tuesday:
        'Tuesday has only one school day before it and three after it, so it is not in the middle.',
      Thursday:
        'Thursday has three school days before it and only one after it, so it is not in the middle.',
    },
    more: "People sometimes call this day 'midweek'. 'Mid' means middle, as in 'midday' and 'midnight'.",
    tip: 'To find the middle of a list, count the same number of things on each side.',
  },
  'Which is the FIRST month of the year?': {
    why: 'A new year starts on the first day of January, so January is the first month. You can say: We start a new calendar in January.',
    not: {
      March:
        'March is the third month of the year, not the first. Some calendars, such as the Persian calendar, start their new year in March, but the English year does not.',
      December:
        'December is the last month. The year ends in December, so it cannot be the first month.',
      June: 'June is in the middle of the year. It is the sixth month.',
    },
    tip: 'Learn each month with its number: the first month is number 1, and the last is number 12.',
  },
  'Which is the LAST month of the year?': {
    why: 'A year has twelve months, and December is number twelve, the last one. When it ends, a new year begins. You can say: The year ends in December.',
    not: {
      November:
        'November is the eleventh month. One more month comes after it before the year ends.',
      October: 'October is the tenth month. Two more months come after it.',
      January: 'January is the first month of the year, not the last.',
    },
    more: 'Many people send cards and give presents in December, at the end of the year.',
    tip: 'Say the months every day like a chant, and check that you finish on December.',
  },
  'Which is the SIXTH month of the year?': {
    why: 'June is month number six, so it ends the first half of the year. You can say: My sister was born in June.',
    not: {
      May: 'May is the fifth month, one month too early.',
      July: "July is the seventh month, one month too late. It also begins with 'Ju', so read the end of the word.",
      August: 'August is the eighth month, two months after the sixth.',
    },
    more: 'Six months is half a year. June is the last month of the first half.',
    tip: 'Count the months on your fingers and say a month name for each finger.',
  },
  'Which month is number 9 (the ninth month)?': {
    why: 'September is the ninth month of the year. In the UK, many schools start their new year in September. You can say: I start a new class in September.',
    not: {
      August: 'August is the eighth month, one before the ninth.',
      October: 'October is the tenth month, one after the ninth.',
      November:
        "'Novem' means nine in Latin, so November looks like the ninth month. In our calendar it is the eleventh.",
    },
    more: "'Sept' means seven in Latin. In the old Roman calendar September was the seventh month, but in ours it is the ninth.",
    tip: "Spell 'ninth' with no 'e': n, i, n, t, h. 'Nine' loses its 'e' in 'ninth'.",
  },
  'Which is the SECOND day of the week, counting from Monday?': {
    why: 'Monday is the first day, and the next day, number two, is Tuesday. You can say: Tuesday is the second day of the week.',
    not: {
      Sunday:
        'Sunday comes just before Monday. On a US calendar it is the first day, but counting from Monday it is the seventh.',
      Thursday:
        "Thursday is the fourth day. It begins with 'T' too, so read the letters after the 'T' carefully.",
      Monday: 'Monday is where you start counting, so it is the first day, not the second.',
    },
    more: "'Second' has two meanings: number two in order, and a very short time, as in 'Wait a second'.",
  },
  'Which is the FOURTH month of the year?': {
    why: 'April is month number four. You can say: It often rains in April.',
    not: {
      March: 'March is the third month, one month before the fourth.',
      May: 'May is the fifth month, one month after the fourth.',
      February: 'February is the second month, two months before the fourth.',
    },
    tip: 'Write the twelve months in a list with their numbers next to them, and say them aloud.',
  },
  'What day comes AFTER Wednesday?': {
    why: "Thursday comes straight after Wednesday. 'After' means later in time. You can say: We have art on Wednesday and music on Thursday.",
    not: {
      Tuesday: 'Tuesday comes before Wednesday, not after it.',
      Friday: 'Friday comes two days after Wednesday, not straight after it.',
      Monday: 'Monday comes two days before Wednesday, near the start of the week.',
    },
    more: "'The day after' means the next day. 'The day before' means the day just earlier.",
    tip: "Thursday begins with 'th', the sound in 'think'. Do not mix it up with the day that begins with a plain 't'.",
  },
  'What day comes BEFORE Monday?': {
    why: 'The days go round in a circle. The day just before Monday is Sunday, the end of the week before. You can say: On Sunday I get my bag ready for Monday.',
    not: {
      Tuesday: 'Tuesday comes after Monday, not before it.',
      Saturday: 'Saturday is two days before Monday. There is one more day in between.',
      Friday: 'Friday is three days before Monday.',
    },
    more: 'The week is a circle: when the last day ends, a new week starts.',
    tip: "'Before' means earlier. Count back one day from the day in the question.",
  },
  'What day comes AFTER Friday?': {
    why: 'Saturday comes straight after Friday. You can say: On Friday I go to school, and on Saturday I stay at home.',
    not: {
      Thursday: 'Thursday comes before Friday, not after it.',
      Sunday: 'Sunday is two days after Friday, not straight after it.',
      Monday: 'Monday is three days after Friday.',
    },
    more: 'Most UK schools are closed on Saturday.',
    tip: "Saturday begins with 'Satur', like the planet Saturn.",
  },
  'What day comes BEFORE Thursday?': {
    why: 'Wednesday comes just before Thursday. You can say: I have swimming on Wednesday and football on Thursday.',
    not: {
      Friday: 'Friday comes after Thursday, not before it.',
      Tuesday: 'Tuesday is two days before Thursday. There is one more day in between.',
      Monday: 'Monday is three days before Thursday.',
    },
    tip: 'To find the day before, say the days in order and stop one day early.',
  },
  'What day comes AFTER Sunday?': {
    why: 'On a UK calendar Sunday ends the week, and the next day starts a new week: Monday. You can say: On Sunday I rest, and on Monday I go back to school.',
    not: {
      Saturday: 'Saturday comes before Sunday, not after it.',
      Tuesday: 'Tuesday is two days after Sunday, not straight after it.',
      Friday: 'Friday is two days before Sunday.',
    },
    more: 'The days go round in a circle, so after the last day of the week the first day comes again.',
    tip: 'When you reach the end of the week, go back to the start.',
  },
  'What day comes BEFORE Saturday?': {
    why: 'Friday comes just before Saturday. You can say: I see my cousins on Friday, and we go shopping on Saturday.',
    not: {
      Sunday: 'Sunday comes after Saturday, not before it.',
      Thursday: 'Thursday is two days before Saturday. There is one more day in between.',
      Monday: 'Monday is five days before Saturday.',
    },
    tip: "'Before' means earlier. Count back one day.",
  },
  'What month comes AFTER March?': {
    why: 'April comes straight after March. You can say: It is cold in March, and it is warmer in April.',
    not: {
      February: 'February comes before March, not after it.',
      May: 'May is two months after March, not straight after it.',
      June: 'June is three months after March.',
    },
    more: "'March' is also a verb: soldiers march together in lines.",
    tip: 'Say the months as a chant, and stop at the month that follows.',
  },
  'What month comes BEFORE January?': {
    why: 'The year goes round. When December ends, a new year starts with January, so the month just before January is December. You can say: We have a holiday in December and go back to school in January.',
    not: {
      November: 'November is two months before January. There is one more month in between.',
      February: 'February comes after January, not before it.',
      October: 'October is three months before January.',
    },
    more: 'The month before January belongs to the year before: the last month of one year comes just before the first month of the next.',
    tip: 'Think of the months as a circle, like a clock. After the last month, you start again.',
  },
  'What month comes AFTER July?': {
    why: 'August comes straight after July. You can say: The days are long in July and August.',
    not: {
      June: 'June comes before July, not after it.',
      September: 'September is two months after July.',
      May: 'May is two months before July.',
    },
    more: 'July is named after Julius Caesar, and August after Augustus, two rulers of ancient Rome.',
    tip: 'Julius came before Augustus in history, and July comes before August in the year.',
  },
  'What month comes BEFORE October?': {
    why: 'September comes just before October. You can say: School starts in September, and the leaves fall in October.',
    not: {
      November: 'November comes after October, not before it.',
      August: 'August is two months before October. There is one more month in between.',
      December: 'December is two months after October.',
    },
    more: "'Octo' means eight, as in 'octopus', an animal with eight arms. October was the eighth month in the old Roman calendar.",
    tip: 'Count back one month from the month in the question.',
  },
  'What month comes AFTER November?': {
    why: 'December comes straight after November, and it is the last month of the year. You can say: It gets very dark in November and December.',
    not: {
      October: 'October comes before November, not after it.',
      January: 'January is two months after November. It starts the next year.',
      September: 'September is two months before November.',
    },
    tip: "November and December both end in 'ember'. Learn them as a pair, in that order.",
  },
  'What day comes AFTER Tuesday?': {
    why: 'Wednesday comes straight after Tuesday. You can say: I have art on Tuesday and maths on Wednesday.',
    not: {
      Monday: 'Monday comes before Tuesday, not after it.',
      Thursday: 'Thursday is two days after Tuesday. There is one more day in between.',
      Friday: 'Friday is three days after Tuesday.',
    },
    tip: 'Say the day in the question, then the next day in the week. That is the day after.',
  },
  'What month comes BEFORE June?': {
    why: 'May comes just before June. You can say: The weather gets warmer in May and June.',
    not: {
      July: 'July comes after June, not before it.',
      April: 'April is two months before June. There is one more month in between.',
      August: 'August is two months after June.',
    },
    more: "'May' is also a word for asking politely: May I come in?",
    tip: 'May is the shortest month name in English: only three letters.',
  },
  'Which is the correct spelling? Wednesday': {
    why: "The correct spelling is 'Wednesday'. We say 'WENZ-day', but we write a 'd' after 'We' and an 'e' after the 'n'. You can say: I have swimming on Wednesday.",
    not: {
      Wensday:
        "'Wensday' follows the sound, but it leaves out two letters we do not say: the 'd' after 'We' and the 'e' after the 'n'.",
      Wendsday:
        "'Wendsday' puts the 'd' after the 'n' and leaves out an 'e'. The letters go W, e, d, n, e, s.",
      Wednsday: "'Wednsday' leaves out the 'e' after the 'n'. The middle of the word is 'nes'.",
    },
    more: "'Wednesday' comes from 'Woden's day'. Woden was an old god, and the 'd' of his name stays in the spelling.",
    tip: 'Say it in three parts to spell it: Wed, nes, day.',
  },
  'Which is the correct spelling? February': {
    why: "The correct spelling is 'February'. It has two 'r' letters: one after 'Feb' and one before the 'y'. You can say: My birthday is in February.",
    not: {
      Febuary:
        "'Febuary' leaves out the first 'r'. Many people say the word without it, but we always write it.",
      Februery: "'Februery' ends in 'ery'. The ending is 'ary'.",
      Feburary: "'Feburary' puts the 'u' before the first 'r'. The order is Feb, ru, ary.",
    },
    more: 'The name comes from Februa, an old Roman festival held in this month.',
    tip: "Say 'Feb, ru, ary' slowly. Write the first 'r' even if people do not say it.",
  },
  'Which is the correct spelling? Tuesday': {
    why: "The correct spelling is 'Tuesday': T, u, e, s, d, a, y. The 'u' and the 'e' sit together after the 'T'. You can say: I play football on Tuesday.",
    not: {
      Tusday: "'Tusday' leaves out the 'e'. After 'Tu' we write 'e', and then 's'.",
      Teusday: "'Teusday' puts the 'e' before the 'u'. The order is 'u' and then 'e'.",
      Tuseday: "'Tuseday' puts the 'e' after the 's'. The 'e' comes before the 's'.",
    },
    more: "'Tuesday' comes from 'Tiw's day'. Tiw was an old god.",
    tip: "'True' and 'blue' also have 'ue' together. Spell it in two parts: Tues, day.",
  },
  'Which is the correct spelling? Thursday': {
    why: "The correct spelling is 'Thursday'. After 'Th' we write 'ur', then 's' and 'day'. You can say: We have art on Thursday.",
    not: {
      Thirsday:
        "'Thirsday' has 'i' where it should have 'u'. 'Thirsty' has 'ir', but this day has 'ur'.",
      Thusday: "'Thusday' leaves out the 'r'. The spelling has 'ur' in it.",
      Thrusday: "'Thrusday' puts the 'r' before the 'u'. The order is 'u' and then 'r'.",
    },
    more: "'Thursday' comes from 'Thor's day'. Thor was a god in old stories from northern Europe.",
    tip: "The 'ur' in the middle is spelt like the 'ur' in 'turn' and 'burn'.",
  },
  'Which is the correct spelling? Saturday': {
    why: "The correct spelling is 'Saturday'. It begins 'Satur' and ends 'day'. You can say: We play games on Saturday.",
    not: {
      Saterday: "'Saterday' has 'e' where it should have 'u'. The middle of the word is 'ur'.",
      Satuday: "'Satuday' leaves out the 'r'. We write 'Satur' with an 'r'.",
      Saturaday: "'Saturaday' has an extra 'a' after the 'r'. After 'Satur' comes 'day'.",
    },
    more: "'Saturday' comes from 'Saturn's day'. Saturn was a Roman god, and it is also the name of a planet.",
    tip: 'Think of the planet Saturn. The day starts with the same five letters: S, a, t, u, r.',
  },
  'Which is the correct spelling? January': {
    why: "The correct spelling is 'January': 'Jan', then 'u', then 'ary'. You can say: It snowed in January.",
    not: {
      Janurary: "'Janurary' has an extra 'r' after the 'u'. After 'Jan' comes 'u', then 'ary'.",
      Januery: "'Januery' ends in 'ery'. The ending is 'ary'.",
      Janaury:
        "'Janaury' has the 'a' and the 'u' the wrong way round. After 'Jan' comes 'u', then 'ary'.",
    },
    more: 'January is named after Janus, the Roman god of doors and new beginnings. He had two faces: one looking back and one looking forward.',
    tip: 'Spell it in three parts: Jan, u, ary.',
  },
  'Which is the correct spelling? August': {
    why: "The correct spelling is 'August'. It has two 'u' letters: A, u, g, u, s, t. You can say: We go on holiday in August.",
    not: {
      Agust: "'Agust' leaves out the first 'u'. The word starts 'Au'.",
      Augost: "'Augost' has 'o' where it should have 'u'. The ending is 'ust'.",
      Augest: "'Augest' has 'e' where it should have 'u'. The ending is 'ust'.",
    },
    more: "August is named after Augustus, a ruler of ancient Rome. Written with a small 'a', 'august' is a rare adjective that means important and respected.",
    tip: 'Say it in two parts: Au, gust. A gust is a sudden strong wind.',
  },
  'Which is the correct spelling? September': {
    why: "The correct spelling is 'September'. It has three parts: Sept, em, ber. You can say: School starts in September.",
    not: {
      Septmber: "'Septmber' leaves out the 'e' after 'Sept'. The parts are Sept, em, ber.",
      Setember: "'Setember' leaves out the 'p'. The word starts 'Sept'.",
      Septembre: "'Septembre' is the French spelling. In English the word ends in 'ber'.",
    },
    more: "'Sept' means seven in Latin. In the old Roman calendar this was the seventh month.",
    tip: 'Write it in three parts: Sept, em, ber.',
  },
  'Which is the correct spelling? Friday': {
    why: "The correct spelling is 'Friday'. It is 'Fri' and then 'day'. You can say: I see my friends on Friday.",
    not: {
      Friaday: "'Friaday' has an extra 'a'. After 'Fri' comes 'day'.",
      Fryday:
        "'Fryday' has 'y' where it should have 'i'. 'Fry' is a different word: to cook food in hot oil.",
      Firday:
        "'Firday' has the 'i' and the 'r' the wrong way round. The order is 'r' and then 'i'.",
    },
    more: "'Friday' comes from 'Frigg's day'. Frigg was an old goddess.",
    tip: "Think of 'friend': it starts with the same three letters, F, r, i.",
  },
  'Which is the correct spelling? October': {
    why: "The correct spelling is 'October'. It is 'Oct', then 'o', then 'ber'. You can say: My school trip is in October.",
    not: {
      Octuber: "'Octuber' has 'u' where it should have 'o'. After 'Oct' comes 'o'.",
      Octobre: "'Octobre' is the French spelling. In English the word ends in 'ber'.",
      Octobor: "'Octobor' ends in 'bor'. The ending is 'ber'.",
    },
    more: "Four English month names end in 'ber'. This one has an 'o' on each side of the 't': Oc, to, ber.",
    tip: 'Write it in three parts: Oct, o, ber.',
  },
  'Which is the correct spelling? December': {
    why: "The correct spelling is 'December'. It is 'Dec', 'em', 'ber'. You can say: We have a holiday in December.",
    not: {
      Desember:
        "'Desember' has 's' where it should have 'c'. Some languages spell the word with 's', but English uses 'c'.",
      Decembre: "'Decembre' looks like the French word. In English the word ends in 'ber'.",
      Decmber: "'Decmber' leaves out the 'e' after 'Dec'. The parts are Dec, em, ber.",
    },
    more: "'Decem' means ten in Latin. In the old Roman calendar this was the tenth month.",
    tip: "Write it in three parts: Dec, em, ber. The 'c' sounds like 's', as in 'decide'.",
  },
  'Which is the correct spelling? Monday': {
    why: "The correct spelling is 'Monday'. It is 'Mon' and then 'day'. You can say: School starts on Monday.",
    not: {
      Munday:
        "'Munday' has 'u' where it should have 'o'. The first part is 'Mon', like 'moon' with one 'o'.",
      Monady: "'Monady' has the 'a' and the 'd' the wrong way round. After 'Mon' comes 'day'.",
      Mondey: "'Mondey' ends in 'ey'. The ending is 'day'.",
    },
    more: "'Monday' means 'the moon's day'.",
    tip: 'Check the ending first. Every day of the week ends in the same three letters: d, a, y.',
  },
  'Which is the correct spelling? Sunday': {
    why: "The correct spelling is 'Sunday'. It is 'Sun' and then 'day'. You can say: We visit my grandparents on Sunday.",
    not: {
      Sonday:
        "'Sonday' has 'o' where it should have 'u'. The first part is 'sun', like the sun in the sky. A 'son' is a boy in a family.",
      Sunaday: "'Sunaday' has an extra 'a'. After 'Sun' comes 'day'.",
      Sundey: "'Sundey' ends in 'ey'. The ending is 'day'.",
    },
    more: "'Sunday' means 'the sun's day'.",
    tip: 'Think of the sun in the sky: sun and day together.',
  },
  'Which is the correct spelling? November': {
    why: "The correct spelling is 'November'. It is 'Nov', 'em', 'ber'. You can say: It gets dark early in November.",
    not: {
      Novmber: "'Novmber' leaves out the 'e' after 'Nov'. The parts are Nov, em, ber.",
      Novembre: "'Novembre' is the French spelling. In English the word ends in 'ber'.",
      Noveber: "'Noveber' leaves out the 'm'. The middle of the word is 'em', then 'ber'.",
    },
    more: "'Novem' means nine in Latin. In the old Roman calendar this was the ninth month.",
    tip: 'Write it in three parts: Nov, em, ber.',
  },
  'Which is the FIFTH day of the week, counting from Monday?': {
    why: 'Count from Monday: Monday is number one, and the fifth day is Friday, the last day of the school week. You can say: On Friday we have a spelling test.',
    not: {
      Thursday: 'Thursday is the fourth day, one day too early.',
      Saturday: 'Saturday is the sixth day, one day too late.',
      Sunday: 'Sunday is the seventh day, the last one on a UK calendar.',
    },
    more: "'Fifth' is the ordinal for five. Its spelling changes: 'five' becomes 'fif', and then 'th' is added.",
    tip: 'Five school days, Monday to Friday, make the school week.',
  },
  'Which is the SEVENTH month of the year?': {
    why: 'July is month number seven. It comes just after the middle of the year. You can say: Our school year ends in July.',
    not: {
      June: "June is the sixth month, one month too early. It begins with 'Ju' too, so read the end of the word.",
      August: 'August is the eighth month, one month too late.',
      September:
        "'Sept' means seven in Latin, so September looks like the seventh month. In our calendar it is the ninth.",
    },
    more: 'July is named after Julius Caesar, a ruler of ancient Rome.',
  },
  'Which is the SECOND month of the year?': {
    why: 'February is month number two, and it is the shortest month of the year. You can say: My birthday is in February.',
    not: {
      January: 'January is the first month, one month too early.',
      March: 'March is the third month, one month too late.',
      December: 'December is the twelfth month, the last one. It comes just before the new year.',
    },
    tip: "Remember the spelling: Feb, ru, ary, with two 'r' letters.",
  },
  'Which is the TENTH month of the year?': {
    why: 'October is month number ten. You can say: The leaves turn brown in October.',
    not: {
      September: 'September is the ninth month, one month too early.',
      November: 'November is the eleventh month, one month too late.',
      December:
        "'Decem' means ten in Latin, so December looks like the tenth month. In our calendar it is the twelfth.",
    },
    more: 'The old Roman year began two months later than ours, so the four month names that look like numbers are two places out in our calendar.',
  },
  'Which is the EIGHTH month of the year?': {
    why: 'August is month number eight. In the UK it falls in the middle of the long school holiday. You can say: We go to the beach in August.',
    not: {
      July: 'July is the seventh month, one month too early.',
      September: 'September is the ninth month, one month too late.',
      October:
        "'Octo' means eight in Latin, so October looks like the eighth month. In our calendar it is the tenth.",
    },
    more: "'Eighth' has a tricky spelling: e, i, g, h, t, h. 'Eight' and 'th' share one 't'.",
  },
  'Which is the ELEVENTH month of the year?': {
    why: 'November is month number eleven, one before the last month of the year. You can say: It is cold and wet in November.',
    not: {
      October: 'October is the tenth month, one month too early.',
      December: 'December is the twelfth month, the last one.',
      September: 'September is the ninth month, two months too early.',
    },
    more: "'Novem' means nine in Latin. The Roman year began two months later than ours, so the ninth Roman month is the eleventh for us.",
  },
  'What day comes AFTER Monday?': {
    why: 'Tuesday comes straight after Monday. You can say: I have maths on Monday and science on Tuesday.',
    not: {
      Sunday: 'Sunday comes before Monday, not after it.',
      Wednesday: 'Wednesday is two days after Monday. There is one more day in between.',
      Thursday:
        "Thursday is three days after Monday. It begins with 'T' too, so read the letters after the 'T'.",
    },
    tip: 'Monday and Tuesday are the first two days of the UK week. Learn them as a pair.',
  },
  'What day comes BEFORE Sunday?': {
    why: 'Saturday comes just before Sunday. You can say: We go shopping on Saturday and rest on Sunday.',
    not: {
      Monday: 'Monday comes after Sunday, not before it. It starts a new week.',
      Friday: 'Friday is two days before Sunday. There is one more day in between.',
      Thursday: 'Thursday is three days before Sunday.',
    },
    tip: "Both days begin with 'S'. Saturday comes first, then Sunday.",
  },
  'What month comes AFTER January?': {
    why: 'February comes straight after January. You can say: It often snows in January and February.',
    not: {
      December: 'December comes before January, not after it. It ends the year before.',
      March: 'March is two months after January. There is one more month in between.',
      April: 'April is three months after January.',
    },
    tip: "January and February both end in 'uary'. Learn them as a pair.",
  },
  'What month comes BEFORE September?': {
    why: 'August comes just before September. You can say: We are on holiday in August and go back to school in September.',
    not: {
      October: 'October comes after September, not before it.',
      July: 'July is two months before September. There is one more month in between.',
      June: 'June is three months before September.',
    },
    tip: 'Count back one month from the month in the question.',
  },
  "On a calendar, what does 'Thu' mean?": {
    why: "'Thu' is the short form of Thursday. Calendars and timetables use the first letters of a day to save space. You can say: My guitar lesson is on Thursday.",
    not: {
      Tuesday:
        "The short form of this day starts 'Tu', not 'Th'. 'Th' is the start of a different day.",
      Wednesday: "Wednesday begins with 'W', not 'T', so its short form cannot be 'Thu'.",
      Friday: "The short form of Friday is 'Fri'.",
    },
    more: "Some calendars write 'Thur' or 'Thurs' for the same day.",
    tip: "Look at the second letter: 'h' means the day that starts with the 'th' sound.",
  },
  "On a calendar, what does 'Tue' mean?": {
    why: "'Tue' is the short form of Tuesday: the first three letters of the word. You can say: The club meets on Tuesday.",
    not: {
      Thursday:
        "The short form of this day starts 'Th'. 'Tue' has 'u' as its second letter, so it is a different day.",
      Monday: "The short form of Monday is 'Mon'.",
      Wednesday: "Wednesday begins with 'W', not 'T', so its short form cannot be 'Tue'.",
    },
    more: "Some calendars write 'Tues' for the same day.",
    tip: 'Read the first three letters of the short form and find the day that starts with them.',
  },
  "On a calendar, what does 'Sat' mean?": {
    why: "'Sat' is the short form of Saturday: the first three letters of the word. You can say: The match is on Saturday.",
    not: {
      Sunday:
        "The short form of Sunday is 'Sun'. Both days begin with 'S', so read the second letter.",
      Thursday: "Thursday begins with 'T', not 'S', so its short form cannot be 'Sat'.",
      Monday: "The short form of Monday is 'Mon'.",
    },
    more: "'Sat' is also the past of 'sit': I sat on the chair. On a calendar it means the day.",
  },
  "On a calendar, what does 'Wed' mean?": {
    why: "'Wed' is the short form of Wednesday: the first three letters of the word. You can say: The library is open late on Wednesday.",
    not: {
      Tuesday: "Tuesday begins with 'T', not 'W', so its short form cannot be 'Wed'.",
      Thursday: "Thursday begins with 'T', not 'W', so its short form cannot be 'Wed'.",
      Monday: "The short form of Monday is 'Mon'.",
    },
    more: "'Wed' is also an old word for 'married'. On a calendar it always means the day.",
    tip: "The short form keeps the 'd' we do not say: W, e, d. It helps you remember how the whole word is spelt.",
  },
  "On a calendar, what does 'Mar' mean?": {
    why: "'Mar' is the short form of March: the first three letters of the word. You can say: The school trip is in March.",
    not: {
      May: "This month is so short that calendars usually write the whole word. 'Mar' has an 'r', and it does not.",
      April: "The short form of April is 'Apr'.",
      August: "August begins with 'A', not 'M', so its short form cannot be 'Mar'.",
    },
    tip: "Read all three letters. Two months begin with 'Ma', and only one of them has an 'r'.",
  },
  "On a calendar, what does 'Jun' mean?": {
    why: "'Jun' is the short form of June: the first three letters of the word. You can say: Our exams are in June.",
    not: {
      July: "The short form of July is 'Jul'. Both months begin with 'Ju', so read the third letter: 'n' or 'l'.",
      January: "The short form of January is 'Jan'. Read the second letter: 'a' or 'u'.",
      August: "August begins with 'A', not 'J', so its short form cannot be 'Jun'.",
    },
    tip: "Three months begin with 'J'. The second and third letters tell them apart.",
  },
  "On a calendar, what does 'Aug' mean?": {
    why: "'Aug' is the short form of August: the first three letters of the word. You can say: My cousin visits us in August.",
    not: {
      April: "The short form of April is 'Apr'. Both begin with 'A', so read the second letter.",
      autumn:
        "Autumn is a season, not a month, so a calendar does not shorten it like this. It begins 'Au' too, but its third letter is 't'.",
    },
  },
  'Seven days make one ___.': {
    why: 'A week is seven days. You can say: I go swimming twice a week.',
    not: {
      month: 'A month is about four weeks, so it is much longer than seven days.',
      weekend: 'The weekend is only two days of the week, the days off school.',
      year: 'A year is twelve months, much longer than seven days.',
    },
    more: "'Week' and 'weak' sound the same. 'Weak' means not strong.",
  },
  'Saturday and Sunday are the ___.': {
    why: 'Saturday and Sunday are the weekend: the end of the week. Most UK schools are closed on these two days. You can say: What are you doing on Saturday?',
    not: {
      weekdays:
        'Weekdays are the days of the school and work week. These two days are not weekdays.',
      week: 'A week is seven days. These two days are only part of a week.',
    },
  },
  'The days from Monday to Friday are called ___.': {
    why: "The days from Monday to Friday are called weekdays: the days of the school and work week. You can say: I get up at seven o'clock on weekdays.",
    not: {
      weekends: 'A weekend is the two days off at the end of a week, not these five days.',
      holidays: 'Holidays are days off school or work. These five days are school days.',
    },
    tip: 'Learn the pair: weekdays are for school and work, and the weekend is for rest.',
  },
  'The day after today is ___.': {
    why: 'The day after today is tomorrow. You can say: See you tomorrow.',
    not: {
      yesterday: 'Yesterday is the day before today, not the day after.',
      tonight: 'Tonight is the night of today, not the next day.',
      today: 'Today is this day, now. The question asks about the next day.',
    },
    tip: "Spell it with one 'm' and two 'r' letters: to, mor, row.",
  },
  'The day before today was ___.': {
    why: "The day before today was yesterday. We use 'was' because it is in the past. You can say: Yesterday was my birthday.",
    not: {
      tomorrow: 'Tomorrow is the day after today, in the future. The question asks about the past.',
      tonight: 'Tonight is the night of today, not a day in the past.',
    },
  },
  'Twelve months make one ___.': {
    why: 'A year is twelve months long. You can say: My brother is one year older than me.',
    not: {
      decade: 'A decade is ten years, much longer than twelve months.',
      season: 'A season is about three months, so four seasons make one year.',
      week: 'A week is only seven days.',
    },
  },
  'Which season comes after winter?': {
    why: 'Spring comes after winter. The days get longer and warmer, and flowers start to grow. You can say: In spring the trees are green again.',
    not: {
      summer: 'Summer comes after spring, not straight after winter.',
      autumn: 'Autumn comes just before winter, not after it.',
    },
  },
  'Which season comes after spring?': {
    why: 'Summer comes after spring. It is the warmest season, with long days. You can say: We play cricket in summer.',
    not: {
      winter: 'Winter comes before spring, not after it.',
      autumn: 'Autumn comes after summer, so it is two seasons after spring.',
    },
  },
  'Which season comes after summer?': {
    why: 'Autumn comes after summer. The leaves turn brown and fall from the trees. You can say: It gets windy in autumn.',
    not: {
      spring: 'Spring comes before summer, not after it.',
      winter: 'Winter comes after autumn, so it is two seasons after summer.',
    },
    more: "Americans call this season 'fall', because the leaves fall. In British English it is 'autumn'.",
    tip: "Autumn has an 'n' at the end that we do not say: a, u, t, u, m, n.",
  },
  'Which season comes before spring?': {
    why: 'Winter comes before spring. It is the coldest season, and the days are short. You can say: It sometimes snows in winter.',
    not: {
      summer: 'Summer comes after spring, not before it.',
      autumn: 'Autumn comes before winter, so it is two seasons before spring.',
    },
  },
  'Which word is a season, not a month?': {
    why: 'Autumn is a season, a part of the year about three months long. The other three words are months. You can say: Autumn is my favourite season.',
    not: {
      August:
        "August is a month. It begins with 'Au' like the season, but it is one month, not a season.",
      April: 'April is a month, not a season.',
      March: 'March is a month, not a season.',
    },
  },
  'Which is the coldest season of the year?': {
    why: 'Winter is the coldest season of the year, with short days and long nights. You can say: I wear a warm coat in winter.',
    not: {
      summer: 'Summer is the warmest season, not the coldest.',
      spring: 'Spring is the season when the weather starts to get warmer.',
      autumn:
        'Autumn is the season when the weather starts to get colder, but the coldest days usually come later.',
    },
  },
  'We usually eat breakfast in the ___.': {
    why: "Breakfast is the first meal of the day, so we eat it in the morning. You can say: I have breakfast at seven o'clock in the morning.",
    not: {
      evening: 'The evening is the end of the day, when many people eat dinner.',
      night: 'At night most people are asleep, so it is not the time for breakfast.',
      afternoon: 'The afternoon comes after midday, when we have already eaten lunch.',
    },
  },
  "The time from twelve o'clock (midday) until about six o'clock is the ___.": {
    why: "The afternoon is the part of the day after midday and before the evening. The word is 'after' and 'noon', and noon means twelve o'clock in the day. You can say: We play football in the afternoon.",
    not: {
      evening: "The evening starts at about six o'clock, at the end of the afternoon.",
      morning: 'The morning is the time before midday, not after it.',
      'night-time': 'Night-time is when it is dark and most people are asleep.',
    },
    tip: "After twelve o'clock in the day, people in the UK greet each other with 'Good afternoon'.",
  },
  'Which day is NOT a weekday?': {
    why: 'A weekday is a day of the school and work week. Sunday is a day off for most people in the UK, so it is not a weekday. You can say: Sunday is a day of rest.',
    not: {
      Monday: 'Monday is a weekday, the first day of the school week.',
      Thursday: 'Thursday is a weekday, a normal school day.',
      Friday: 'Friday is a weekday, the last day of the school week.',
    },
  },
  'Which year comes after this year?': {
    why: "'Next year' is the year after this one. You can say: Next year I will be in a new class.",
    not: {
      'last year': "'Last year' is the year before this one, in the past.",
      'past year':
        "'The past year' means the last twelve months, up to now. It looks back, not forward.",
    },
  },
  'Which is the correct spelling? autumn': {
    why: "The correct spelling is 'autumn'. It ends in an 'n' we do not say: we say 'AW-tum', but we write the 'n'. You can say: The leaves fall in autumn.",
    not: {
      autum: "'autum' leaves out the 'n' at the end. We do not say it, but we write it.",
      autumm: "'autumm' has two 'm' letters. The word ends 'mn': one 'm' and then 'n'.",
      atumn: "'atumn' leaves out the 'u' after the 'a'. The word starts 'au'.",
    },
    more: "You can hear the 'n' in 'autumnal', a word that means 'of autumn'.",
    tip: "Some other words end in an 'n' we do not say after 'm': column, solemn.",
  },
  'Which is the correct spelling? tomorrow': {
    why: "The correct spelling is 'tomorrow': one 'm' and two 'r' letters. You can say: See you tomorrow.",
    not: {
      tommorow:
        "'tommorow' has two 'm' letters and one 'r'. It is the other way round: one 'm', two 'r' letters.",
      tomorow: "'tomorow' has only one 'r'. The word has 'rr' near the end.",
      tommorrow: "'tommorrow' has two 'm' letters. There is only one 'm'.",
    },
    tip: 'Split it into three parts: to, mor, row. Each part is easy to spell.',
  },
  'Which is the correct spelling? yesterday': {
    why: "The correct spelling is 'yesterday': 'yes', then 'ter', then 'day'. You can say: I saw her yesterday.",
    not: {
      yesturday: "'yesturday' has 'u' where it should have 'e'. The middle part is 'ter'.",
      yestarday: "'yestarday' has 'a' where it should have 'e'. The middle part is 'ter'.",
      yesterdey: "'yesterdey' ends in 'ey'. The word ends in 'day', like the days of the week.",
    },
    tip: "Start with a word you know, 'yes', and then add 'ter' and 'day'.",
  },
  'Which is the correct spelling? calendar': {
    why: "The correct spelling is 'calendar', with 'a' in the last part: cal, en, dar. You can say: I write my birthday on the calendar.",
    not: {
      calender: "'calender' ends in 'er'. It is a very common mistake: the ending is 'ar'.",
      calandar: "'calandar' has 'a' in the middle. The middle part is 'en'.",
      callendar: "'callendar' has two 'l' letters. There is only one.",
    },
    more: 'A calendar shows the days, weeks and months of a year.',
    tip: "Remember the 'a' at both ends: CAL and DAR.",
  },
  'Which is the correct spelling? fortnight': {
    why: "The correct spelling is 'fortnight': 'fort', then 'night'. It means two weeks. You can say: We are going away for a fortnight.",
    not: {
      fortnite:
        "'fortnite' leaves out the 'gh'. The word ends in 'night', like the night when it is dark.",
      fourtnight:
        "'fourtnight' starts with 'four', the number. The word starts 'fort', with no 'u'.",
      forthnight: "'forthnight' has 'th' after 'for'. The word is 'fort' and then 'night'.",
    },
    more: "It comes from 'fourteen nights', an old way of saying two weeks.",
    tip: 'Split it into two words you know: fort and night.',
  },
  'Which is the correct spelling? holiday': {
    why: "The correct spelling is 'holiday': one 'l', then 'i', then 'day'. You can say: We are going on holiday next week.",
    not: {
      holliday: "'holliday' has two 'l' letters. There is only one 'l'.",
      holyday:
        "'holyday' has 'y' where it should have 'i'. The word came from 'holy day', but now we spell it with 'i'.",
      holidey: "'holidey' ends in 'ey'. The word ends in 'day'.",
    },
    more: "'Holiday' comes from 'holy day', a special day in the church calendar.",
    tip: "It ends in 'day', just like the days of the week.",
  },
  'Which is the correct spelling of the month? March': {
    why: "The correct spelling is 'March', with 'ch' at the end. You can say: My birthday is in March.",
    not: {
      Mart: "'Mart' is how the month is written in some other languages, such as Turkish. In English it ends in 'ch'.",
      Marsh: "'Marsh' ends in 'sh'. A marsh is wet, muddy land. The month ends in 'ch'.",
      Mars: "'Mars' is the French word for this month, and the name of a planet. In English the month ends in 'ch'.",
    },
    more: 'The month is named after Mars, the Roman god of war.',
  },
  'Which is the correct spelling? April': {
    why: "The correct spelling is 'April': A, p, r, i, l. You can say: It often rains in April.",
    not: {
      Aprel:
        "'Aprel' has 'e' where it should have 'i'. Some languages spell the month like this, but in English it ends in 'il'.",
      Apirl: "'Apirl' has the 'r' and the 'i' the wrong way round. The order is 'r' and then 'i'.",
      Aprile: "'Aprile' is the Italian word. In English there is no 'e' at the end.",
    },
    tip: 'Say it in two parts: A, pril.',
  },
  'Which is the correct spelling? July': {
    why: "The correct spelling is 'July': J, u, l, y, with 'y' at the end. You can say: The school year ends in July.",
    not: {
      Juli: "'Juli' ends in 'i'. That is the spelling in German and some other languages, but in English it ends in 'y'.",
      Julai:
        "'Julai' is how Malay and Swahili write the month. The English word has only four letters: J, u, l, y.",
      Jully: "'Jully' has two 'l' letters. There is only one.",
    },
    more: 'July is named after Julius Caesar, a ruler of ancient Rome.',
  },
  'Which is the correct spelling? summer': {
    why: "The correct spelling is 'summer', with two 'm' letters and 'er' at the end. You can say: We go to the beach in summer.",
    not: {
      sumer: "'sumer' has only one 'm'. The word has 'mm' in the middle.",
      summar: "'summar' ends in 'ar'. The ending is 'er'.",
      sommer: "'sommer' has 'o' where it should have 'u'. That looks like the German word.",
    },
    tip: "A double letter keeps the vowel before it short, as in 'drummer' and 'runner'.",
  },
  'My birthday is ___ 3 May.': {
    why: "A date is one day in the calendar, and we use 'on' with a day: on 3 May. You can say: The concert is on 10 May.",
    not: {
      in: "We use 'in' with a whole month, such as 'in May'. With a date, a single day, we use 'on'.",
      at: "We use 'at' with a clock time, such as 'at six o'clock', not with a date.",
    },
    more: "When we read the date aloud, we use an ordinal number: 'on the third of May'.",
    tip: 'Look at what comes after the gap. A number and a month together make a date, one day.',
  },
  'My birthday is ___ May.': {
    why: "We use 'in' with a month, because a month is a long time with many days in it: in May. You can say: We go camping in May.",
    not: {
      on: "We use 'on' with one day or date, such as 'on 3 May'. A whole month takes 'in'.",
      at: "We use 'at' with a clock time, such as 'at ten o'clock', not with a month.",
    },
    more: "'In' goes with other long periods too: years such as 2015, and the seasons.",
  },
  'We have PE ___ Tuesdays.': {
    why: "We use 'on' with the days of the week. 'On Tuesdays', with an 's', means every Tuesday. You can say: I visit my grandma on Tuesdays.",
    not: {
      in: "We use 'in' with months and years. A day of the week takes 'on'.",
      at: "We use 'at' with clock times, not with days.",
    },
    tip: "'On Tuesday' is one Tuesday. 'On Tuesdays' is every Tuesday.",
  },
  'I was born ___ 2011.': {
    why: "We use 'in' with a year: in 2011. You can say: My family came to the UK in 2019.",
    not: {
      on: "We use 'on' with a day or a date, not with a whole year.",
      at: "We use 'at' with a clock time, not with a year.",
    },
    more: "We can say this year as 'twenty eleven' or as 'two thousand and eleven'.",
  },
  'We go skiing ___ winter.': {
    why: "We use 'in' with the seasons: in winter. You can also say 'in the winter'. You can say: It snows in winter.",
    not: {
      on: "We use 'on' with days and dates, not with a season.",
      at: "We use 'at' with clock times, not with a season.",
    },
  },
  'I do my homework ___ the evening.': {
    why: "We say 'in the morning', 'in the afternoon' and 'in the evening'. You can say: I read a book in the evening.",
    not: {
      on: "We use 'on' when a day comes first, as in 'on Monday evening'. With 'the evening' alone, use 'in'.",
      at: "'At' goes with 'night', but not with 'the evening'.",
    },
    more: "Learn one word that is different: we say 'at night'.",
  },
  'Owls hunt ___ night.': {
    why: "We say 'at night'. It is a fixed phrase, and it does not follow the pattern of 'in the morning' and 'in the evening'. You can say: The stars come out at night.",
    not: {
      in: "'In the night' needs 'the'. Without 'the', we say 'at night'.",
      on: "We use 'on' with days and dates, not with night.",
    },
  },
  'It is Friday and school has finished. Which do people in the UK usually say?': {
    why: "In British English we say 'at the weekend', with 'the'. People say it to friends they will not see for two days. You can say: What are you doing at the weekend?",
    not: {
      'See you in the weekend.':
        "'In the weekend' is a common mistake. In British English the phrase is 'at the weekend'.",
      'See you at weekend.': "This leaves out 'the'. The phrase is 'at the weekend'.",
      'See you in weekend.':
        "This has the wrong little word and no 'the'. The phrase is 'at the weekend'.",
    },
    more: "In American English people say 'on the weekend'.",
  },
  'School finishes ___ 22 July.': {
    why: "A date is one day, so it takes 'on': on 22 July. You can say: Sports day is on 15 July.",
    not: {
      in: "'In July' is right for the whole month, but this sentence gives one date, so it takes 'on'.",
      at: "We use 'at' with clock times, not with dates.",
    },
    more: "We read the date aloud with an ordinal number and 'of': the twenty-second of July.",
  },
  'We moved to Leeds ___ the summer of 2023.': {
    why: "We use 'in' with seasons and years, so 'in the summer of 2023' takes 'in'. You can say: We visited Wales in the summer of 2022.",
    not: {
      on: "We use 'on' with one day or date. A season is many weeks long, so it takes 'in'.",
      at: "We use 'at' with clock times, not with seasons.",
    },
  },
  "I'll see you ___ Monday morning.": {
    why: "We say 'in the morning', but when a day comes first the phrase takes 'on': on Monday morning. The day decides. You can say: We have a test on Monday morning.",
    not: {
      in: "'In the morning' is right on its own, but with a day in front we say 'on Monday morning'.",
      at: "We use 'at' with clock times and with 'night', not with 'Monday morning'.",
    },
  },
  "The shop is closed ___ New Year's Day.": {
    why: "New Year's Day is one day, the first day of the year, so it takes 'on', like any other day. You can say: We visit our family on New Year's Day.",
    not: {
      in: "We use 'in' with months and years, not with one special day.",
      at: "'At New Year' is British English for the holiday time, but one day, such as New Year's Day, takes 'on'.",
    },
  },
  'Our exams are ___ June.': {
    why: "We use 'in' with a month: in June. You can say: My cousin is getting married in June.",
    not: {
      on: "We use 'on' with a date, such as 'on 12 June'. A whole month takes 'in'.",
      at: "We use 'at' with clock times, not with months.",
    },
  },
  'Is the party ___ Friday?': {
    why: "We use 'on' with the days of the week: on Friday. You can say: The film starts on Friday.",
    not: {
      in: "We use 'in' with months and years, not with days.",
      at: "We use 'at' with clock times, not with days.",
    },
  },
  'Many birds fly south ___ autumn.': {
    why: "We use 'in' with the seasons: in autumn, or in the autumn. You can say: The leaves turn red in autumn.",
    not: {
      on: "We use 'on' with days and dates, not with seasons.",
      at: "We use 'at' with clock times, not with seasons.",
    },
  },
  'I go swimming ___ Saturday mornings.': {
    why: "A day with a part of the day after it takes 'on': on Saturday mornings. The 's' at the end means every Saturday morning. You can say: We play football on Saturday mornings.",
    not: {
      in: "We say 'in the morning', but with a day in front we use 'on'.",
      at: "We use 'at' with clock times and with 'night', not with mornings.",
    },
  },
  'My dentist appointment is ___ the afternoon.': {
    why: "We say 'in the afternoon', in the same way as 'in the morning'. You can say: We have art in the afternoon.",
    not: {
      on: "We use 'on' when a day comes first, as in 'on Monday afternoon'. With 'the afternoon' alone, use 'in'.",
      at: "We use 'at' with clock times, such as 'at three o'clock', not with 'the afternoon'.",
    },
  },
  'We were on holiday ___ the end of August.': {
    why: "We say 'at the end of' a month or a year. You can say: The days get shorter at the end of August.",
    not: {
      in: "'In the end' means 'finally'. For the last part of a month, we say 'at the end of'.",
      on: "We use 'on' with a day or date, not with 'the end of' a month.",
    },
    more: "We also say 'at the start of' a month or a year.",
  },
  'My parents got married ___ the 1990s.': {
    why: "We use 'in' with a group of ten years, like the 1990s, just as we do with one year. You can say: My grandparents came here in the 1970s.",
    not: {
      on: "We use 'on' with one day or date, not with ten years.",
      at: "We use 'at' with clock times, not with years.",
    },
    more: "We say 'the 1990s' as 'the nineteen nineties'. A group of ten years is called a decade.",
  },
  'It often rains ___ April.': {
    why: "We use 'in' with a month: in April. You can say: The flowers come out in April.",
    not: {
      on: "We use 'on' with a date, such as 'on 2 April'. A whole month takes 'in'.",
      at: "We use 'at' with clock times, not with months.",
    },
  },
  'The bus was late ___ Wednesday.': {
    why: "We use 'on' with a day of the week, in the past and in the future: on Wednesday. You can say: I lost my keys on Wednesday.",
    not: {
      in: "We use 'in' with months and years, not with days.",
      at: "We use 'at' with clock times, not with days.",
    },
  },
  'One word in this sentence needs a capital letter. Which one?\n“We play cricket on sundays in summer.”':
    {
      why: "Days of the week always start with a capital letter in English, even in the middle of a sentence, so it should be 'Sundays'. Seasons do not, so 'summer' is right as it is.",
      not: {
        summer:
          "Seasons are written with small letters in English, so 'summer' is right as it is. Look for a day or a month.",
        cricket: "Sports are ordinary words, so 'cricket' takes a small letter.",
        play: "'Play' is an ordinary word in the middle of the sentence, so it takes a small letter.",
      },
      more: 'In French, Spanish and many other languages the days are written with small letters. English is different.',
      tip: 'Ask: is it a day or a month? Then it needs a capital. A season does not.',
    },
  'One word in this sentence needs a capital letter. Which one?\n“My cousin stays with us in summer, usually in august.”':
    {
      why: "Months always start with a capital letter in English, so it should be 'August'. Seasons do not, so 'summer' is right as it is.",
      not: {
        summer:
          "Seasons take small letters in English, so 'summer' is right. The word that needs a capital is a month.",
        cousin: "'Cousin' is an ordinary word, not a name, so it takes a small letter.",
        stays:
          "'Stays' is an ordinary word in the middle of the sentence, so it takes a small letter.",
      },
      tip: 'Learn the rule as a pair: months yes, seasons no.',
    },
  'One word in this sentence should NOT have a capital letter. Which one?\n“In Winter I walk to school with Mohammed.”':
    {
      why: "Seasons are written with small letters in English, so it should be 'winter'. 'In' starts the sentence, 'I' always takes a capital, and Mohammed is a name.",
      not: {
        Mohammed: "Mohammed is a person's name, and names always take a capital letter.",
        In: "'In' is the first word of the sentence, and the first word always takes a capital.",
        I: "The word 'I' is always a capital letter in English, wherever it comes in a sentence.",
      },
      tip: 'A season takes a capital only when it is the first word of a sentence.',
    },
  'One word in this sentence needs a capital letter. Which one?\n“Our school trip is on friday 12 March.”':
    {
      why: "Days of the week always take a capital letter in English, so it should be 'Friday', just as the month 'March' has one.",
      not: {
        school: "'School' is an ordinary word, not a name, so it takes a small letter.",
        trip: "'Trip' is an ordinary word, so it takes a small letter.",
      },
      more: 'In German every noun takes a capital letter. In English only names do, and the days and months count as names.',
    },
  'One word in this sentence should NOT have a capital letter. Which one?\n“My favourite season is Autumn, and my birthday is in October.”':
    {
      why: "Seasons are written with small letters in English, so it should be 'autumn'. October is a month, so its capital is right, and 'My' starts the sentence.",
      not: {
        October: 'October is a month, and months always take a capital letter in English.',
        My: "'My' is the first word of the sentence, and the first word always takes a capital.",
      },
      more: 'Some writers give a season a capital in a poem or a title, but in an ordinary sentence it takes a small letter.',
    },
  'One word in this sentence needs a capital letter. Which one?\n“I was born in june, in the middle of summer.”':
    {
      why: "Months always take a capital letter in English, so it should be 'June'. 'Summer' is a season, so it is right with a small letter.",
      not: {
        summer: "Seasons take small letters in English, so 'summer' is right as it is.",
        middle: "'Middle' is an ordinary word, so it takes a small letter.",
        born: "'Born' is an ordinary word in the middle of the sentence, so it takes a small letter.",
      },
      tip: 'Check every month and day in your writing: each one needs a capital.',
    },
  'One word in this sentence should NOT have a capital letter. Which one?\n“Every Friday in December we have a Quiz.”':
    {
      why: "'Quiz' is an ordinary word, not a name, so it should be 'quiz'. The day and the month take capitals, and 'Every' starts the sentence.",
      not: {
        Friday: 'Friday is a day of the week, and days always take a capital letter in English.',
        December: 'December is a month, and months always take a capital letter in English.',
        Every: "'Every' is the first word of the sentence, so it takes a capital.",
      },
      more: 'German gives a capital to every noun, so German speakers often do this in English. In English only names take one.',
    },
  'One word in this sentence should NOT have a capital letter. Which one?\n“Last Summer we went to Scotland in August.”':
    {
      why: "Seasons are written with small letters in English, so it should be 'summer'. Scotland is a name, August is a month, and 'Last' starts the sentence.",
      not: {
        Scotland: 'Scotland is the name of a country, and names of places always take a capital.',
        August: 'August is a month, and months always take a capital letter in English.',
        Last: "'Last' is the first word of the sentence, so it takes a capital.",
      },
    },
  'How do you say 14 February?': {
    why: "We say a date with 'the', an ordinal number and 'of': the fourteenth of February. 'Fourteenth' is fourteen with 'th' on the end. You can say: Valentine's Day is the fourteenth of February.",
    not: {
      'the fourteen of February':
        "'Fourteen' is a counting number. In a date we use the ordinal, 'fourteenth', with 'th' on the end.",
      'the fortieth of February':
        "'Fortieth' is the ordinal for 40, and no month has 40 days. This date has 'teen' in it: fourteenth.",
      'the fourth of February':
        "'The fourth' is 4 February. The date here is 14, so we need 'fourteenth'.",
    },
    more: "You can also say 'February the fourteenth'. In writing, 14 February and 14th February are both used.",
    tip: "Listen for the end of the number: 'teen' in fourteenth, 'ty' in fortieth.",
  },
  'How do you say 30 April?': {
    why: "Thirty becomes 'thirtieth' in a date: the 'y' changes to 'ie', and we add 'th'. You can say: My cousin's wedding is the thirtieth of April.",
    not: {
      'the thirteenth of April':
        "'Thirteenth' is 13. The date here is 30, so we need 'thirtieth', with 'tie' near the end.",
      'the thirty of April':
        "'Thirty' is a counting number. In a date we use the ordinal, 'thirtieth'.",
      'the third of April': "'The third' is 3 April. The date here is 30.",
    },
    tip: "Numbers that end in 'ty' change to 'tieth': twenty becomes twentieth, and thirty becomes thirtieth.",
  },
  'How do you say 12 August?': {
    why: "Twelve becomes 'twelfth' in a date: the 've' changes to 'f', and we add 'th'. You can say: Today is the twelfth of August.",
    not: {
      'the twelve of August':
        "'Twelve' is a counting number. In a date we use the ordinal, 'twelfth'.",
      'the twentieth of August': "'Twentieth' is 20. The date here is 12.",
      'the second of August':
        "'The second' is 2 August. The date here is 12, so we need 'twelfth'.",
    },
    tip: "Two ordinals change a 'v' to an 'f': five becomes fifth, and twelve becomes twelfth.",
  },
  'How do you say 23 September?': {
    why: "Twenty-three becomes 'twenty-third' in a date: only the last part changes to an ordinal. You can say: Today is the twenty-third of September.",
    not: {
      'the twenty-three of September':
        "'Twenty-three' is a counting number. In a date the last part becomes an ordinal: twenty-third.",
      'the twentieth of September':
        "'Twentieth' is 20. The date here is 23, so we say 'twenty-third'.",
      'the third of September': "'The third' is 3 September. The date here is 23.",
    },
    tip: 'In a long number only the last part changes: twenty-one becomes twenty-first.',
  },
  'How do you say 2 October?': {
    why: "Two becomes 'second' in a date. It is one of the ordinals that do not end in 'th'. You can say: Today is the second of October.",
    not: {
      'the two of October': "'Two' is a counting number. In a date we use the ordinal, 'second'.",
      'the twelfth of October': "'Twelfth' is 12. The date here is 2.",
      'the twentieth of October': "'Twentieth' is 20. The date here is 2.",
    },
    more: 'Three ordinals have their own forms: first, second and third. In short they are 1st, 2nd and 3rd.',
  },
  "Your friend says, 'My birthday is the eleventh of December.' How do you write the date?": {
    why: "'The eleventh' is 11, so the date is 11 December. You can also write it as 11th December.",
    not: {
      '7 December': "'Seven' and 'eleven' sound a little alike, but 'eleventh' is 11.",
      '11 November': 'The date is in December, the twelfth month. November is the month before.',
      '12 December': "'Twelfth' would be 12. 'Eleventh' is one less: 11.",
    },
    tip: 'When you hear a date, write the number first and the month after it.',
  },
  "Which is the usual way to write 'the twenty-first of March' in short?": {
    why: "'Twenty-first' is 21, and its short form ends in 'st', like 'first': 21st March.",
    not: {
      '12th March': "This has the two numbers the wrong way round. 'Twenty-first' is 21, not 12.",
      '21st May': "The month is March, not May. Both begin with 'Ma', so read the whole word.",
      '20th March': "'Twentieth' would be 20. 'Twenty-first' is one more: 21.",
    },
    more: "The ending follows the last word of the number: first, second and third give 1st, 2nd and 3rd, and most others take 'th'.",
    tip: 'Read the number in the date slowly, part by part: twenty, first.',
  },
  'In the UK, what is the date 04/06?': {
    why: 'In the UK we write the day first and the month second. So 04 is the day, and 06 is the month: June, the sixth month. The date is 4 June.',
    not: {
      '6 April':
        'This reads the month first, as people do in the USA. In the UK the day comes first.',
      '4 July': 'July is the seventh month. 06 is the sixth month, the one before it.',
    },
    tip: 'Remember the order: day, month, year. It goes from small to big.',
  },
  'A UK letter is dated 12/01/2026. Which month is it?': {
    why: 'In the UK a date goes day, month, year. The middle number, 01, is the month: January, the first month.',
    not: {
      December:
        'This reads the first number as the month, as people do in the USA. In the UK the first number is the day.',
      October: 'October is month 10. The month here is 01: a zero and then a one.',
    },
    tip: 'Find the month in the middle: the day, then the month, then the year.',
  },
  'On a UK form you write your birthday as 07/11. When is your birthday?': {
    why: 'In the UK the day comes first and the month second. 07 is the seventh, and 11 is the eleventh month, November.',
    not: {
      'the eleventh of July':
        'This reads the month first, as people do in the USA. In the UK, 11 here is the month, not the day.',
      'the seventh of October': 'October is month 10. Month 11 is the one after it.',
      'the seventh of December': 'December is month 12. Month 11 is the one before it.',
    },
    tip: 'Learn the number of every month. Then a date in figures tells you the month at once.',
  },
  'How do you write 9 March the British way, in numbers?': {
    why: 'The British way puts the day first and the month second. The day is 9, and March is the third month, so the date is 09/03.',
    not: {
      '03/09': 'This puts the month first, as people do in the USA. In the UK the day comes first.',
      '09/04': '04 is the fourth month. March is the third month, so it is 03.',
    },
  },
  'Charlotte Brontë writes: “It was the 5th of November, and a holiday.” How do you say the date?':
    {
      why: "'5th' is the short form of 'fifth', so we say 'the fifth of November'. 'Five' changes to 'fif' and then takes 'th'.",
      not: {
        'the five of November':
          "'Five' is a counting number. '5th' has 'th', so it is the ordinal: fifth.",
        'the fifteenth of November': "'Fifteenth' is 15. The date here is 5.",
      },
      more: 'In the novel this date is a holiday, so Jane, the village teacher, has the day free.',
    },
  'Robert Louis Stevenson writes: “On the 8th of January Utterson had dined at the doctor’s with a small party…” How do you say the date?':
    {
      why: "'8th' is the short form of 'eighth', so we say 'the eighth of January'. 'Eight' takes only an 'h' to make 'eighth', because it already ends in 't'.",
      not: {
        'the eight of January':
          "'Eight' is a counting number. '8th' has 'th', so it is the ordinal: eighth.",
        'the eighteenth of January': "'Eighteenth' is 18. The date here is 8.",
      },
      more: "In this line 'dined' means 'had dinner'. Utterson had dinner at the house of the doctor, Jekyll.",
    },
  'Mary Shelley writes: “We quitted London on the 27th of March, and remained a few days at Windsor, rambling in its beautiful forest.” How do you say the date?':
    {
      why: "'27th' is 'twenty-seventh': the last part, seven, becomes the ordinal 'seventh'. So we say 'the twenty-seventh of March'.",
      not: {
        'the twenty-seven of March':
          "'Twenty-seven' is a counting number. In a date the last part becomes an ordinal: twenty-seventh.",
        'the seventeenth of March': "'Seventeenth' is 17. The date here is 27.",
        'the seventh of March': "'The seventh' is 7 March. The date here is 27.",
      },
      more: "'Quitted' is an old form of 'quit'. Here it means 'left': they left London.",
    },
  'I write my plans for each day in my ___.': {
    why: "A diary is a book where you write your plans, or what happens each day. It is spelt d, i, a, r, y: 'di' and then 'ary'.",
    not: {
      dairy:
        "A dairy is a place where milk is kept or made into butter and cheese. Its 'a' and 'i' are the other way round.",
      diery: "'diery' has 'e' where it should have 'a'. The ending is 'ary'.",
    },
    tip: "In diary the 'i' comes before the 'a': I write in my diary.",
  },
  'What is the ___ like in winter?': {
    why: "'Weather' means the rain, sun, wind and snow. It is spelt w, e, a, t, h, e, r. You can say: The weather is cold in winter.",
    not: {
      whether: "'Whether' sounds the same, but it means 'if': I don't know whether to go.",
      wheather: "'wheather' has an extra 'h' after the 'w'. The word starts 'wea'.",
    },
    tip: "Weather has 'eat' in the middle: w, eat, her.",
  },
  'Our trip is at the ___ of June.': {
    why: "'Beginning' has two 'n' letters before 'ing'. When we add 'ing' to 'begin', we double the last 'n'.",
    not: {
      begining:
        "'begining' has only one 'n' before 'ing'. 'Begin' doubles its last 'n': beginning.",
      beggining:
        "'beggining' doubles the 'g' instead of the 'n'. The 'g' is single: be, gin, ning.",
    },
    tip: "Think of 'begin' and then add 'ning': begin, ning.",
  },
  'Good ___. Sleep well.': {
    why: "'Night' is the time when it is dark. It has a silent 'gh': n, i, g, h, t. We say 'Good night' when someone goes to bed.",
    not: {
      knight:
        "'Knight' sounds the same, but it means a soldier on a horse in old stories. It starts with a silent 'k'.",
      nite: "'Nite' is sometimes used in adverts and messages, but it is not the correct spelling.",
    },
    tip: "Many words end in 'ight': light, right, bright.",
  },
  "It is my sister's ___ today.": {
    why: "'Birthday' is two words joined together: 'birth' and 'day'. 'Birth' has the vowel 'i' and ends in 'th'.",
    not: {
      birtday: "'birtday' leaves out the 'h'. 'Birth' ends in 'th'.",
      berthday: "'berthday' has 'e' where it should have 'i'. The first part is 'birth'.",
    },
    tip: 'Spell the two parts one at a time: birth, then day.',
  },
  "We don't go to school at the ___.": {
    why: "'Weekend' is two words joined together: 'week' and 'end'. 'Week' has two 'e' letters.",
    not: {
      weakend:
        "'weakend' has 'weak', which means 'not strong'. The first part is 'week', seven days.",
      wekend: "'wekend' has only one 'e'. 'Week' has two.",
    },
  },
  'There are twelve ___ in a year.': {
    why: "'Months' is 'month' with 's' on the end. The spelling of 'month' does not change: m, o, n, t, h, s.",
    not: {
      monthes: "'monthes' adds 'es'. Words that end in 'th' just add 's': months, paths, moths.",
      mounths: "'mounths' has 'ou'. The word has only 'o': month.",
      munths:
        "'munths' has 'u' where it should have 'o'. It sounds like 'u', but it is written with 'o'.",
    },
    tip: "'Month', 'money' and 'son' all have an 'o' that sounds like 'u'.",
  },
  'I was ill for the ___ week.': {
    why: "'Whole' means all of it, every part. It starts with a silent 'w': w, h, o, l, e.",
    not: {
      hole: "'Hole' sounds the same, but it means a gap or an opening, like a hole in a sock.",
      wole: "'wole' leaves out the 'h'. The word starts 'wh', like 'who'.",
    },
    tip: "'Who' and 'whole' both start 'wh', and you do not hear the 'w' in either.",
  },
  'Today is the ___ of May.': {
    why: "'Third' is the ordinal for 3, as in 3rd May. It is spelt t, h, i, r, d.",
    not: {
      therd:
        "'therd' has 'e' where it should have 'i'. The middle is 'ir', as in 'first' and 'bird'.",
      thrid: "'thrid' puts the 'r' before the 'i'. The order is 'i' and then 'r': th, ir, d.",
    },
    tip: "'First' and 'third' both have 'ir': f, ir, st and th, ir, d.",
  },
  'Is it the ___ of June today?': {
    why: "'Fifth' is the ordinal for 5. 'Five' changes to 'fif', and then we add 'th': f, i, f, t, h.",
    not: {
      fivth: "'fivth' keeps the 'v' from 'five'. In the ordinal the 'v' changes to 'f'.",
      fith: "'fith' leaves out the second 'f'. The word has two: f, i, f, t, h.",
    },
    tip: "Twelve does the same thing: in its ordinal, 've' changes to 'f'.",
  },
  'The ___ of July is a Sunday this year.': {
    why: "'Twelfth' is the ordinal for 12. 'Twelve' changes 've' to 'f', and then we add 'th': t, w, e, l, f, t, h.",
    not: {
      twelth: "'twelth' leaves out the 'f'. We often do not hear it, but we write it.",
      twelveth: "'twelveth' keeps 've' from 'twelve'. In the ordinal, 've' changes to 'f'.",
    },
    tip: "Say it slowly and you can hear the 'f': twelf, th.",
  },
  'Is the ___ of October a school day?': {
    why: "'Ninth' is the ordinal for 9. 'Nine' loses its 'e' before 'th': n, i, n, t, h.",
    not: {
      nineth: "'nineth' keeps the 'e' from 'nine'. In the ordinal the 'e' goes.",
      ninith: "'ninith' has an extra 'i'. The word is 'nin' and then 'th'.",
    },
    tip: "'Nine' keeps its 'e' in 'ninety' and 'nineteen', but loses it in this ordinal.",
  },
  'How do you say 21 June?': {
    why: "Twenty-one becomes 'twenty-first' in a date: only the last part, one, changes to 'first'. You can say: Today is the twenty-first of June.",
    not: {
      'the twenty-one of June':
        "'Twenty-one' is a counting number. In a date the last part becomes an ordinal: twenty-first.",
      'the twelfth of June': "'Twelfth' is 12. This has the two numbers the wrong way round.",
      'the twenty-first of July':
        "The month is June, not July. Both begin with 'Ju', so read the end of the word.",
    },
  },
  'How do you say 3 January?': {
    why: "Three becomes 'third' in a date. It is one of the three ordinals that do not end in 'th'. You can say: Today is the third of January.",
    not: {
      'the three of January':
        "'Three' is a counting number. In a date we use the ordinal, 'third'.",
      'the thirteenth of January': "'Thirteenth' is 13. The date here is 3.",
      'the thirtieth of January': "'Thirtieth' is 30. The date here is 3.",
    },
  },
  'Today is Friday. What day is the day after tomorrow?': {
    why: 'Tomorrow is the next day, and the day after tomorrow is one day later again: two days from today. Two days after Friday is Sunday.',
    not: {
      Saturday:
        'Saturday is tomorrow, the day after today. The day after tomorrow is one day later.',
      Monday: 'Monday is three days after Friday. The day after tomorrow is only two days later.',
      Thursday: 'Thursday was yesterday, the day before today.',
    },
    tip: 'Count on your fingers: tomorrow is one day, and the day after tomorrow is two.',
  },
  'Today is Thursday. What day was the day before yesterday?': {
    why: 'Yesterday was one day ago, and the day before yesterday was two days ago. Two days before Thursday is Tuesday.',
    not: {
      Wednesday: 'Wednesday was yesterday. The day before yesterday is one more day back.',
      Monday: 'Monday was three days ago. The day before yesterday is only two days ago.',
      Saturday: "Saturday comes after Thursday, in the future. 'Yesterday' is in the past.",
    },
    tip: 'Count back on your fingers: yesterday is one day, and the day before yesterday is two.',
  },
  'It is March now. What was last month?': {
    why: "'Last month' means the month just before this one. The month before March is February. You can say: Last month I started a new school.",
    not: {
      April: 'April is next month, the month after this one.',
      January: 'January was two months ago, not last month.',
      December:
        "December is the last month of the year, but 'last month' means the month just before this one.",
    },
    tip: "'Last' has two meanings: the final one, and the one just before now. 'Last month' uses the second.",
  },
  'It is October now. Which month is the month after next?': {
    why: 'Next month is the one after this one. The month after next is one more month later, two months from now: December.',
    not: {
      November: 'November is next month. The month after next is one month later.',
      January: 'January is three months after October, one month too many.',
      September: 'September was last month, in the past.',
    },
  },
  "In British English, 'a fortnight' is ___.": {
    why: "A fortnight is two weeks, or fourteen days. The word comes from 'fourteen nights'. You can say: We are on holiday for a fortnight.",
    not: {
      'four days':
        "'Fort' sounds a little like 'four', but a fortnight is fourteen days, not four.",
      'four weeks': 'Four weeks is about a month. A fortnight is half of that.',
      'fourteen weeks':
        'The fourteen in the word counts nights, not weeks. Fourteen nights is two weeks.',
    },
    more: "American English usually says 'two weeks' instead. 'Fortnight' is common in the UK and Australia.",
  },
  'A magazine comes out twelve times a year. It is a ___ magazine.': {
    why: "Twelve times a year is once a month, so the magazine is monthly. We add 'ly' to 'month' to make 'monthly'.",
    not: {
      weekly: 'A weekly magazine comes out every week, about fifty-two times a year.',
      yearly: 'A yearly magazine comes out only once a year.',
      fortnightly:
        'A fortnightly magazine comes out every two weeks, about twenty-six times a year.',
    },
    tip: "Add 'ly' to a time word to say how often: day becomes daily, and year becomes yearly.",
  },
  'We have a spelling test every Friday. It is a ___ test.': {
    why: 'Every Friday means once a week, so the test is weekly. You can say: We have a weekly spelling test.',
    not: {
      daily: 'Daily means every day. The test is only on Fridays.',
      monthly:
        'Monthly means once a month. A Friday comes every week, so the test is more often than that.',
      yearly: 'Yearly means once a year. The test is much more often than that.',
    },
  },
  "You arrive at a friend's house at 7 pm. What do you say?": {
    why: "'Good evening' is a greeting for the evening, from about six o'clock. We say it when we meet someone.",
    not: {
      'Good night.':
        "'Good night' is not a greeting. We say it when we leave in the evening or go to bed.",
      'Good afternoon.': "'Good afternoon' is for the time from twelve o'clock until about six.",
      'Good morning.': "'Good morning' is for the time before twelve o'clock.",
    },
    tip: "Hello late in the day is 'Good evening'. Goodbye late in the day is 'Good night'.",
  },
  "It is Monday morning. Sam says, 'I'm going to the cinema tonight.' When is he going?": {
    why: "'Tonight' means the evening or night of today. Today is Monday, so 'tonight' is Monday evening.",
    not: {
      'Sunday evening': 'Sunday evening was last night, before today.',
      'Tuesday evening': 'Tuesday evening is tomorrow night, not tonight.',
      'Monday morning': "Monday morning is now. 'Tonight' is later today, after it gets dark.",
    },
  },
  'Today is Wednesday 10 June. On a UK calendar, when does next week start?': {
    why: 'UK calendars start each week on a Monday. This week started on Monday 8 June, so next week starts on the Monday after that: 15 June.',
    not: {
      'Thursday 11 June': 'Thursday 11 June is tomorrow. It is still this week.',
      'Monday 8 June': 'Monday 8 June was the start of this week, two days ago.',
      'Sunday 14 June':
        'Calendars in the USA start the week on Sunday. UK calendars start on Monday.',
    },
  },
  "It is Tuesday. Sara says: 'I saw Omar yesterday.' Which day did she see him?": {
    why: 'Yesterday is the day before today. Today is Tuesday, so yesterday was Monday.',
    not: {
      Wednesday: 'Wednesday is tomorrow, the day after today. Sara is talking about the past.',
      Sunday: 'Sunday was the day before yesterday, two days ago.',
    },
  },
  'It is May. Which month was the month before last?': {
    why: 'Last month was the month just before this one. The month before last is one month earlier again, two months ago: March.',
    not: {
      April: 'April was last month. The month before last is one month earlier.',
      February: 'February was three months ago, one month too many.',
      June: 'June is next month, in the future.',
    },
  },
  'Today is Sunday. Which day was three days ago?': {
    why: "'Ago' counts back from now. Count back three days from Sunday and you reach Thursday.",
    not: {
      Wednesday: 'Wednesday was four days ago, one day too many.',
      Friday: 'Friday was two days ago, one day too few.',
      Tuesday: 'Tuesday was five days ago.',
    },
    tip: "'Three days ago' means three days before today. Put your finger on today and count back.",
  },
  "In the UK, what is 'half term'?": {
    why: 'A school year in the UK has three terms. Half term is a short holiday, usually one week, in the middle of each term.',
    not: {
      'a day when school finishes at lunchtime':
        "'Half' here means the middle of the term, not half a day. A day when school closes at lunchtime is a half day.",
      'the end of the school year':
        'The end of the school year is the start of the long holiday, not half term.',
      'a test halfway through the year':
        'Some schools have tests in the middle of the year, but half term is a holiday.',
    },
  },
  "Your American friend says 'fall'. What do people in the UK usually call this season?": {
    why: "In American English 'fall' is the season when the leaves fall from the trees. In British English it is called 'autumn'.",
    not: {
      spring: 'Spring is the season when flowers start to grow. Americans call it spring too.',
      winter: 'Winter is the coldest season. Americans call it winter too.',
      summer: 'Summer is the warmest season. Americans call it summer too.',
    },
  },
  "What is a 'leap year'?": {
    why: 'A leap year has 366 days, one more than an ordinary year, because the shortest month gets one extra day. It usually happens every four years.',
    not: {
      'a year with 365 days': '365 days is an ordinary year. A leap year has one more day.',
      'a year with 13 months':
        'Some calendars add a month in some years, but the English calendar always has 12 months. A leap year adds one day.',
    },
    more: 'Someone born on the extra day has a real birthday only in a leap year.',
  },
  'What do we call 31 December, the last day of the year?': {
    why: "31 December is New Year's Eve. 'Eve' means the day or evening before a special day: here, the day before the new year begins.",
    not: {
      "New Year's Day": "New Year's Day is the next day, the first day of the new year.",
      'Christmas Eve': 'Christmas Eve is 24 December, the day before Christmas Day.',
      'Boxing Day': 'Boxing Day is 26 December, the day after Christmas Day, a holiday in the UK.',
    },
  },
  "Your school letter says the trip is 'midweek'. Which day is it most likely to be?": {
    why: "'Midweek' means the middle of the week. Wednesday is the middle day of the school week, so it is the most likely day.",
    not: {
      Monday: 'Monday is the start of the week, not the middle.',
      Saturday: 'Saturday is at the weekend, not in the middle of the week.',
      Friday: 'Friday is the end of the school week, not the middle.',
    },
  },
  "Which word means 'ten years'?": {
    why: "A decade is ten years. 'Dec' means ten, as in 'decimal'. You can say: My family has lived here for a decade.",
    not: {
      century: 'A century is a hundred years, much longer than a decade.',
      fortnight: 'A fortnight is two weeks, much shorter than ten years.',
      dozen: 'A dozen is twelve of something, like a dozen eggs. It is not a time word.',
    },
  },
  "Your planner says 'Tues 3 Mar'. When is it?": {
    why: "'Tues' is short for Tuesday and 'Mar' is short for March. We say the date with an ordinal: Tuesday the third of March.",
    not: {
      'Thursday the third of March':
        "The short form of Thursday starts 'Th'. 'Tues' starts 'Tu', so it is Tuesday.",
      'Tuesday the third of May':
        "That month is so short that it is not usually shortened. 'Mar' is March.",
      'Tuesday the thirtieth of March': "'Thirtieth' would be 30. The date here is 3: the third.",
    },
  },
  "A café sign says 'Open Mon to Fri'. On which day is it closed?": {
    why: "'Mon to Fri' means from Monday to Friday, the five weekdays. Saturday is not one of them, so the café is closed then.",
    not: {
      Monday: "'Mon' is Monday, the first day the café is open.",
      Wednesday: 'Wednesday comes between Monday and Friday, so the café is open.',
      Friday: "'Fri' is Friday, the last day the café is open.",
    },
  },
  "A UK calendar shows the days as M, T, W, T, F, S, S. Which day is the second 'T'?": {
    why: "The letters stand for the days in order. The second 'T' comes after 'W', so it is Thursday.",
    not: {
      Tuesday: "Tuesday is the first 'T', straight after 'M'.",
      Wednesday: "Wednesday is the 'W', between the two 'T' letters.",
      Friday: "Friday is the 'F', after the second 'T'.",
    },
  },
  "A bus timetable says 'Sat & Sun only'. When does the bus run?": {
    why: "'Sat' is Saturday and 'Sun' is Sunday, the two days of the weekend. 'Only' means on no other days.",
    not: {
      'on weekdays': 'Weekdays are Monday to Friday. This bus runs only on the other two days.',
      'every day': "'Only' means just these days, so the bus does not run every day.",
      'on Saturdays only': "The timetable also says 'Sun', so the bus runs on Sundays too.",
    },
  },
  'I have lived in Bristol ___ March.': {
    why: "We use 'since' with the moment something started: since March. With 'have lived', the sentence means from March up to now. You can say: I have known her since March.",
    not: {
      for: "We use 'for' with a length of time, such as 'for three months'. March is a starting point, not a length.",
      ago: "'Ago' comes after a length of time and goes with the past simple: I moved here two months ago.",
      during:
        "'During March' means at some time in March. 'Have lived' runs up to now, so it needs 'since'.",
    },
    tip: "Ask: is it a point in time or a length of time? A point takes 'since'.",
  },
  'She has been at this school ___ six months.': {
    why: "We use 'for' with a length of time: for six months. With 'has been', it means from six months ago up to now. You can say: He has played the piano for two years.",
    not: {
      since:
        "'Since' needs the moment something started, such as 'since May'. Six months is a length of time.",
      ago: "'Ago' goes with the past simple: She came six months ago. With 'has been', use 'for'.",
    },
    tip: "A number of days, weeks, months or years after the gap usually takes 'for'.",
  },
  'We moved here two years ___.': {
    why: "'Ago' comes after a length of time and counts back from now: two years ago. It goes with the past simple, as here: moved.",
    not: {
      since:
        "'Since' comes before a starting point, as in 'since 2022', and it goes with 'have lived', not 'moved'.",
      for: "'For' comes before a length of time and says how long, not when: We have lived here for two years.",
    },
    tip: "Put 'ago' after the time, never before it: three days ago, a week ago.",
  },
  'We have known each other ___ we were five.': {
    why: "'Since' can come before a whole clause that says when something started: since we were five. With 'have known', it means from then up to now.",
    not: {
      for: "'For' comes before a length of time, such as 'for ten years', not before 'we were five'.",
      from: "'From' needs a partner, as in 'from five to ten'. With 'have known' and a starting point, use 'since'.",
      during:
        "'During' comes before a noun, such as 'during the holidays', not before a clause like 'we were five'.",
    },
  },
  'The festival lasts ___ three days.': {
    why: "We use 'for' with a length of time: for three days. It says how long the festival lasts.",
    not: {
      during:
        "'During' comes before a noun for a time or an event, as in 'during the festival', not before a number of days.",
      since:
        "'Since' needs a starting point, such as 'since Friday', and it goes with 'has' or 'have'.",
    },
    more: "Many languages use one word for both 'for' and 'during', so learners often mix them up.",
  },
  "I haven't seen my cousin ___ last summer.": {
    why: "'Last summer' is the point when I last saw my cousin, and 'haven't seen' runs from then up to now. A starting point takes 'since'.",
    not: {
      for: "'For' comes before a length of time, such as 'for a year'. 'Last summer' is a point in time.",
      from: "'From' is used with 'to' or 'until'. With 'haven't seen' and a starting point, use 'since'.",
      during:
        "'During last summer' means at some time in that summer. 'Haven't seen' runs up to now, so it needs 'since'.",
    },
  },
  'You must hand in your project ___ Friday.': {
    why: "'By Friday' means on Friday or before it: Friday is the last day you can do it. We use 'by' for a deadline.",
    not: {
      until:
        "'Until' is for something that goes on up to a time, such as 'I will wait until Friday'. Handing in happens once, so use 'by'.",
      since: "'Since' looks back to a starting point in the past. A deadline is in the future.",
    },
    tip: "A deadline takes 'by'. Something that goes on and then stops takes 'until'.",
  },
  'Builders are working in the shop. It stays closed ___ Monday.': {
    why: "'Until' means up to that time, and then it stops. Staying closed goes on, and on Monday the shop opens again.",
    not: {
      by: "'By' is for a deadline, something done once before a time, such as 'finish it by Monday'. Staying closed goes on.",
      since: "'Since' looks back to a starting point. Monday is in the future here.",
    },
  },
  'We stayed with my aunt ___ the summer holidays.': {
    why: "'During' comes before a noun for a time or an event: during the summer holidays. It means at some time in that period, or all through it.",
    not: {
      while:
        "'While' comes before a whole clause with a verb, such as 'while we were on holiday'. Before a noun, use 'during'.",
      since:
        "'Since' goes with 'have', as in 'have stayed', and needs a starting point. 'Stayed' is the past simple.",
    },
  },
  'My phone rang ___ the film.': {
    why: "'During the film' means at one moment in the time the film was on. 'During' comes before a noun.",
    not: {
      while:
        "'While' needs a clause with a verb: while we were watching the film. Before a noun on its own, use 'during'.",
      for: "'For' tells how long something lasts, but a phone rings at one moment.",
    },
  },
  'The library is open ___ Monday ___ Friday.': {
    why: "We say 'from Monday to Friday' for the first and last days of a time. You can also say 'from Monday until Friday'.",
    not: {
      'since … to':
        "'Since' looks back from now to a starting point. For a regular time with a start and an end, use 'from' and 'to'.",
      'between … to':
        "'Between' needs 'and': between Monday and Friday. 'Between' and 'to' do not go together.",
    },
    tip: "Learn the pairs: 'from' goes with 'to', and 'between' goes with 'and'.",
  },
  'The pool is closed now. It opens again ___ two weeks.': {
    why: "'In two weeks' means two weeks from now, in the future. 'Opens again' is about the future, so 'in' fits.",
    not: {
      since:
        "'Since' looks back to a starting point in the past. Two weeks from now is in the future.",
      ago: "'Ago' counts back into the past: two weeks ago. This sentence is about the future.",
    },
    more: "British English also says 'in two weeks' time', with an apostrophe after 'weeks'.",
  },
  'Last weekend we ___ my cousins in Leeds.': {
    why: "'Last weekend' is a finished time in the past, so we use the past simple: visited.",
    not: {
      'have visited':
        "'Have visited' is the present perfect. It does not go with a finished time like 'last weekend'.",
      visit: "'Visit' is the present simple. 'Last weekend' is in the past.",
      'are visiting': "'Are visiting' is about now or a plan for the future, not last weekend.",
    },
    tip: "A finished time, such as 'last year' or 'in 2020', tells you to use the past simple.",
  },
  'I ___ to the dentist two weeks ago.': {
    why: "'Two weeks ago' is a finished time in the past, so we use the past simple: went.",
    not: {
      'have gone':
        "'Have gone' is the present perfect, and it does not go with 'ago'. It also means you are still there.",
      go: "'Go' is the present simple. 'Two weeks ago' is in the past.",
      'have been':
        "'Have been' is the present perfect. It cannot go with 'ago', which names a finished time.",
    },
  },
  'We ___ here since 2019.': {
    why: "'Since 2019' means from 2019 up to now, so we need the present perfect: have lived.",
    not: {
      live: "'Live' is the present simple. With 'since', English uses 'have lived'.",
      lived:
        "'Lived' is the past simple. It means we do not live here now, and it does not go with 'since'.",
      'are living':
        "'Are living' is the present continuous. With 'since', English uses 'have lived' or 'have been living'.",
    },
    more: "Many languages use the present tense here, as in 'I live here since 2019'. English needs the present perfect.",
  },
  'Next summer my family ___ to Pakistan.': {
    why: "'Next summer' is in the future, and a plan takes 'going to': is going to travel.",
    not: {
      travelled: "'Travelled' is the past simple. 'Next summer' is in the future.",
      'has travelled':
        "'Has travelled' is the present perfect. It looks back at the past, not forward to next summer.",
      'has been travelling':
        "'Has been travelling' is for something that started in the past and goes on until now, not a plan.",
    },
  },
  'I usually ___ my grandparents on Sundays.': {
    why: "'Usually' and 'on Sundays' tell us this happens again and again. For a habit we use the present simple: visit.",
    not: {
      'am visiting': "'Am visiting' is for now or for a plan. A habit takes the present simple.",
      visited: "'Visited' is the past simple, but 'usually' tells us this still happens.",
      'have visited':
        "'Have visited' is the present perfect. A habit with 'usually' takes the present simple.",
    },
  },
  'What ___ you do last Saturday?': {
    why: "'Last Saturday' is in the past, so the question uses 'did': What did you do last Saturday?",
    not: {
      do: "'Do' makes a question about now or about habits: What do you do on Saturdays?",
      have: "'Have you done' is the present perfect, which does not go with 'last Saturday'. 'Have you do' is not English.",
      are: "'Are you doing' asks about now or about plans. 'Are you do' is not English.",
    },
  },
  'The concert is ___ the evening of 14 March.': {
    why: "We say 'in the evening', but 'on the evening of 14 March', because the date makes it the evening of one particular day.",
    not: {
      in: "'In the evening' is right on its own. With 'of' and a date after it, the evening is one day's evening, so use 'on'.",
      at: "We use 'at' with clock times and with 'night', not with 'the evening of' a date.",
    },
  },
  'We had a picnic ___ a hot day in July.': {
    why: "'A hot day' is one day, so it takes 'on', like any day: on a hot day.",
    not: {
      in: "'In July' is right for the month, but the gap comes before 'a hot day', which takes 'on'.",
      at: "We use 'at' with clock times, not with a day.",
    },
  },
  'You want to see your friend again soon. Which sentence is right?': {
    why: "We do not put 'on', 'in' or 'at' before 'next', 'last', 'this' or 'every' with a time: Let's meet next Friday.",
    not: {
      "Let's meet on next Friday.":
        "'On Friday' is right, but with 'next' in front, we leave out 'on'.",
      "Let's meet in next Friday.":
        "We do not use 'in' with a day, and with 'next' we use no little word at all.",
      "Let's meet at next Friday.":
        "'At' is for clock times, and with 'next' we use no little word at all.",
    },
  },
  'When I was a child, we ___ go to the beach every summer.': {
    why: "'Used to' is for a habit in the past that does not happen now: we used to go every summer.",
    not: {
      'use to':
        "In a statement about the past, the form is 'used to', with a 'd'. People say both the same way, so the 'd' is easy to miss.",
      'were used to':
        "'Be used to' means 'be familiar with', and the verb after it ends in 'ing'. It does not fit here.",
      'have used to': "'Have used to' is not English. For a past habit, say 'used to'.",
    },
  },
  "It hasn't rained ___ weeks.": {
    why: "'Weeks' is a length of time, so it takes 'for': it hasn't rained for weeks.",
    not: {
      since: "'Since' needs a starting point, such as 'since Monday'. 'Weeks' is a length of time.",
      ago: "'Ago' goes with the past simple, as in 'It rained weeks ago'. With 'hasn't rained', use 'for'.",
    },
  },
  'My parents ___ in 2005.': {
    why: "'In 2005' is a finished time in the past, so we use the past simple: got married.",
    not: {
      'have got married':
        "'Have got married' is the present perfect, which does not go with a finished time like 'in 2005'.",
      'get married': "'Get married' is the present simple. 2005 is in the past.",
      'are getting married': "'Are getting married' is about now or a plan, not about 2005.",
    },
  },
  'I first met Jo ___ 2018, and we have been friends ever since.': {
    why: "'Met' is the past simple, for one finished moment, so we say when it happened: in 2018. 'Ever since' at the end means from then up to now.",
    not: {
      since:
        "'Since' goes with 'have been', as at the end of this sentence. Meeting happened once, at one time.",
      for: "'For' comes before a length of time, such as 'for six years', not before a year.",
    },
  },
  'My brother ___ for four years, but now he works in a bank.': {
    why: "'But now he works in a bank' tells us the four years are finished. A finished time takes the past simple, even with 'for': he was a student for four years.",
    not: {
      'has been a student':
        "'Has been a student' would mean he is still a student now, but he works in a bank.",
      'is a student': "'Is' is about now. 'For four years' with 'but now' means that time is over.",
      'is being a student':
        "'Is being' is for how someone acts at this moment, not for four finished years.",
    },
  },
  'By the time we arrived at the cinema, the film ___.': {
    why: 'Both things are in the past, and the film started first. For the earlier of two past actions we use the past perfect: had started.',
    not: {
      'has started': "'Has started' is about now. 'We arrived' puts the story in the past.",
      starts: "'Starts' is the present simple. The sentence is about the past.",
      'is starting': "'Is starting' is about now, not the past.",
    },
  },
  "I've been waiting here ___ ages.": {
    why: "'Ages' is an informal word for a long time. It is a length of time, so it takes 'for': I've been waiting for ages.",
    not: {
      since:
        "'Since' needs a starting point, such as 'since two o'clock'. 'Ages' is a length of time.",
      ago: "'Ago' goes with the past simple: I arrived ages ago. With 'have been waiting', use 'for'.",
    },
  },
  "We've had this car ___ 2015.": {
    why: "2015 is the year we got the car, a starting point, and 'have had' runs from then up to now. A starting point takes 'since'.",
    not: {
      for: "'For' comes before a length of time, such as 'for ten years', not before a year.",
      ago: "'Ago' comes after a length of time, as in 'ten years ago', and goes with the past simple.",
      from: "'From' needs 'to' or 'until' after it. With 'have had' and a starting point, use 'since'.",
    },
  },
  "Ana: What's the date today?\nBen: ___": {
    why: "'What's the date?' asks for the number of the day in the month, so Ben gives a date: It's the twelfth. People often leave out the month when everyone knows it.",
    not: {
      "It's Tuesday.": "'Tuesday' answers a different question: What day is it today?",
      "It's March.": "'March' answers 'What month is it?'. A date needs the number of the day.",
      "It's twelve o'clock.":
        "'Twelve o'clock' answers 'What time is it?'. A date is a day of the month, not a time.",
    },
    tip: 'Learn the four questions as a set: what day, what date, what month and what time.',
  },
  'Leo: What day is it today?\nMia: ___': {
    why: "'What day is it?' asks for the day of the week, so the answer is a day: It's Thursday.",
    not: {
      "It's the third.": "'The third' is a date. It answers 'What's the date today?'",
      "It's June.": "'June' is a month. It answers 'What month is it?'",
      "It's three o'clock.": "'Three o'clock' is a time. It answers 'What time is it?'",
    },
  },
  'Sam: When is your birthday?\nAisha: ___': {
    why: "A date is one day, so it takes 'on', and we say it with an ordinal: It's on the second of May.",
    not: {
      "It's in the second of May.":
        "'In May' is right for the whole month, but with a date we use 'on'.",
      "It's at the second of May.": "We use 'at' with clock times, not with dates.",
      "It's on May the two.":
        "'On' is right, but a date needs an ordinal: May the second, or the second of May.",
    },
    more: "You can also leave out 'on' here: It's the second of May.",
  },
  'Grandad: How long are you staying in London?\nZara: ___': {
    why: "'How long' asks about a length of time, and a length takes 'for': For a fortnight.",
    not: {
      'Since a fortnight.':
        "'Since' needs a starting point, such as 'since Monday'. A fortnight is a length of time.",
      'A fortnight ago.':
        "'A fortnight ago' answers 'When did you arrive?', not 'How long are you staying?'",
      'In a fortnight.': "'In a fortnight' answers 'When are you leaving?', not 'How long?'",
    },
  },
  'Teacher: When did you start learning English?\nOmar: ___': {
    why: "'When did you start' asks about a moment in the past, so Omar counts back from now: Two years ago.",
    not: {
      'For two years.':
        "'For two years' answers 'How long have you been learning?', not 'When did you start?'",
      'Since two years.':
        "'Since' needs a starting point, such as 'since 2024'. Two years is a length of time.",
      'In two years.':
        "'In two years' means two years from now, in the future. Omar started in the past.",
    },
  },
  'Nadia: How long have you lived here?\nTom: ___': {
    why: "'How long have you lived' asks for a length of time up to now, so Tom uses 'for': For three years.",
    not: {
      'Since three years.':
        "'Since' needs a starting point, such as 'since 2023'. Three years is a length of time.",
      'Three years ago.': "'Three years ago' answers 'When did you move here?'",
      'In three years.': "'In three years' is about the future, three years from now.",
    },
  },
  'Priya: Is the exam in May or in June?\nJack: ___': {
    why: "A month takes 'in', and a date takes 'on': It's in June, on the tenth.",
    not: {
      "It's on June, in the tenth.":
        "The little words are the wrong way round. The month takes 'in' and the date takes 'on'.",
      "It's in June, in the tenth.":
        "'In June' is right, but a date is one day, so it takes 'on': on the tenth.",
      "It's at June, on the tenth.":
        "'On the tenth' is right, but we use 'at' with clock times, not months.",
    },
  },
  'Ella: How often do you go swimming?\nFinn: ___': {
    why: "'How often' asks how many times something happens, so Finn says how many times in a week: Twice a week.",
    not: {
      'For two weeks.': "'For two weeks' answers 'How long?', not 'How often?'",
      'Two weeks ago.': "'Two weeks ago' answers 'When did you go?'",
      'In two weeks.': "'In two weeks' answers 'When are you going?', about the future.",
    },
    tip: "'How often' wants an answer like 'every day', 'once a month' or 'twice a week'.",
  },
  'Kai: When did you go to Spain?\nLina: ___': {
    why: "'Did' puts the question in the past, so Lina names a past time: Last summer, the summer before this one.",
    not: {
      'Next summer.': "'Next summer' is in the future, but 'When did you go?' asks about the past.",
      'Since summer.':
        "'Since' goes with 'have', as in 'I have been here since the summer'. It does not answer 'When did you go?'",
      'For the summer.': "'For the summer' says how long, not when.",
    },
  },
  'Dad: When does the new term start?\nAmira: ___': {
    why: "A day and a date take 'on', and the date is an ordinal: On Monday the fourth.",
    not: {
      'In Monday the fourth.': "We use 'in' with months and years, not with a day.",
      'At Monday the fourth.': "We use 'at' with clock times, not with a day.",
      'On Monday the four.': "'On' is right, but a date needs an ordinal: the fourth.",
    },
  },
  'Ali: Is your sister older than you?\nSofia: Yes. She was born ___ 2008, and I was born ___ 2011.':
    {
      why: "Both gaps come before a year, and a year always takes 'in': in 2008, in 2011.",
      not: {
        'on … on': "We use 'on' with a day or a date, not with a year.",
        'in … on': "The first gap is right, but the second year needs 'in' too.",
        'at … in': "We use 'at' with clock times, not with a year.",
      },
    },
  'Ben: How long is the summer holiday?\nMum: ___': {
    why: "'How long' asks for a length of time, so Mum gives one: about six weeks.",
    not: {
      'Since six weeks.':
        "'Since' needs a starting point, such as 'since July'. Six weeks is a length of time.",
      'Six weeks ago.': "'Six weeks ago' answers 'When did it start?', not 'How long is it?'",
      'In six weeks.': "'In six weeks' answers 'When does it start?', about the future.",
    },
  },
  "Rosa: When's the party?\nJamal: It's ___ Saturday, ___ the evening.": {
    why: "A day takes 'on': on Saturday. A part of the day after 'the' takes 'in': in the evening.",
    not: {
      'in … on':
        "Both little words are the wrong way round: 'on' goes with the day, and 'in' with 'the evening'.",
      'on … at': "'On Saturday' is right, but we say 'in the evening'. 'At' goes with 'night'.",
      'at … in': "We use 'at' with clock times, not with a day. The day takes 'on'.",
    },
  },
  "Max: Shall we go to the park today?\nEva: Not today. Let's go ___.": {
    why: "'Let's go' is a plan for the future, so Eva needs a future time: tomorrow, the day after today.",
    not: {
      yesterday: "'Yesterday' is in the past. You cannot make a plan for a day that has gone.",
      'last week': "'Last week' is in the past, so it cannot follow 'Let's go'.",
      'the day before': "'The day before' looks back into the past. A plan needs a future time.",
    },
  },
  'Mrs Jones: Have you finished your homework?\nKofi: Yes, I finished it ___.': {
    why: "'Finished' is the past simple, so Kofi needs a finished time in the past: yesterday.",
    not: {
      tomorrow: "'Tomorrow' is in the future, but 'finished' is the past.",
      'next week': "'Next week' is in the future, but 'finished' is the past.",
      'since Monday':
        "'Since' goes with 'have', as in 'I have had it since Monday'. With 'finished', name the time: on Monday.",
    },
  },
  'Lucy: How was your weekend?\nRaj: ___': {
    why: "'How was' asks about a time that is over, so Raj answers in the past: It was great.",
    not: {
      'It is great, thanks.': "'Is' is about now, but the weekend is over.",
      'It will be great, thanks.': "'Will be' is about the future, but the weekend has finished.",
      'It was being great, thanks.':
        "'Was being' is for how someone acted at one moment. To say what something was like, use 'was'.",
    },
  },
  'Teacher: When did you arrive in the UK?\nYusuf: ___': {
    why: "'When did you arrive' asks for one finished moment in the past. A year takes 'in': In 2022.",
    not: {
      'Since 2022.':
        "'Since 2022' answers 'How long have you been here?', not 'When did you arrive?'",
      'For 2022.':
        "'For' comes before a length of time, such as 'for two years', not before a year.",
      'On 2022.': "We use 'on' with a day or a date, not with a year.",
    },
  },
  'Hassan: How long have you been learning the guitar?\nChloe: ___': {
    why: "'How long have you been learning' runs up to now. Chloe gives the starting point, so she uses 'since': Since last summer.",
    not: {
      'For last summer.':
        "'For' needs a length of time, such as 'for a year'. 'Last summer' is a point in time.",
      'In last summer.':
        "We do not put 'in' before 'last'. And 'How long?' needs 'since' or 'for'.",
      'During last summer.':
        "'During last summer' means at some time in that summer. It does not answer 'How long?'",
    },
  },
  'Noor: Are you doing anything this weekend?\nIvan: ___': {
    why: "The question asks about plans. For a plan we often use the present continuous: I'm visiting my grandma on Sunday.",
    not: {
      'Yes, I visited my grandma on Sunday.':
        "'Visited' is the past, but the question asks about a plan for this weekend.",
      "Yes, I've visited my grandma on Sunday.":
        "'I've visited' is the present perfect, and it does not go with a time like 'on Sunday'.",
      'Yes, I visit my grandma since Sunday.':
        "'Since' needs 'have' before the verb, and 'visit' does not talk about a plan.",
    },
  },
  'Ivy: When did you last see Amir?\nNoah: ___': {
    why: "'When did you last see' asks about the past, so Noah names a past day: the day before yesterday, two days back from today.",
    not: {
      'The day after tomorrow.':
        "'The day after tomorrow' is in the future, but 'did you last see' asks about the past.",
      'Since the day before yesterday.': "'Since' answers 'How long?', not 'When?'",
      'In the day before yesterday.':
        "We do not put 'in' before this phrase. It needs no little word.",
    },
  },
  'Mr Ali: What did you do in the summer holidays?\nGrace: ___': {
    why: "'What did you do' asks about the past, and the holidays are over, so Grace uses the past simple: We went camping.",
    not: {
      'We go camping in Wales.':
        "'Go' is the present simple, for habits. The question asks about the past.",
      'We have gone camping in Wales.':
        "'Have gone' is the present perfect. With a finished time, like these holidays, use the past simple.",
      'We will go camping in Wales.': "'Will go' is about the future, but the holidays are over.",
    },
  },
  'Charlotte Brontë writes: “Five o’clock had hardly struck ___ the morning of the 19th of January, when Bessie brought a candle into my closet…” Which word fills the gap?':
    {
      why: "'The morning of the 19th of January' is the morning of one particular day, so it takes 'on', as a date does. Brontë wrote: on the morning of the 19th of January.",
      not: {
        in: "'In the morning' is right on its own, but with 'of' and a date after it, the morning belongs to one day, so it takes 'on'.",
        at: "We use 'at' with clock times, such as 'at five o'clock', not with 'the morning of' a date.",
      },
      more: "'Had hardly struck' means the clock had only just finished striking five. Jane is up very early, on the day she leaves for a new school.",
    },
  'Mary Shelley writes: “___ Monday (July 31st), we were nearly surrounded by ice…” The writer means the Monday just gone. What fills the gap?':
    {
      why: "'Last Monday' means the Monday just gone, and it takes no little word in front of it. Shelley wrote: Last Monday (July 31st), we were nearly surrounded by ice.",
      not: {
        'On last': "We say 'on Monday', but with 'last' in front, we leave out 'on'.",
        'In last': "We do not use 'in' with a day, and with 'last' we use no little word at all.",
      },
      more: "In this letter the month comes before the day: 'July 31st'. Writers often wrote dates this way at that time.",
    },
  'In Animal Farm, two farmers pretend to laugh at the animals’ rebellion. George Orwell writes: “The whole thing would be over in a fortnight, they said.” What do the farmers mean?':
    {
      why: "'Over' means finished, and 'in a fortnight' means within two weeks from then. The farmers say the animals' farm will fail very soon.",
      not: {
        'It would start in two weeks.':
          "'Over' means finished, not started. The rebellion has already happened.",
        'It had ended two weeks before.':
          "'Would be over in a fortnight' looks forward, to two weeks after they spoke, not back.",
        'It would happen every two weeks.':
          "'In a fortnight' is one time, two weeks from then. 'Every two weeks' would be 'once a fortnight'.",
      },
      more: 'The farmers only pretend to laugh: Orwell says they are really frightened by the rebellion.',
    },
  'In Pride and Prejudice, Mr Bennet says: “About a month ago I received this letter, and about a fortnight ago I answered it…” When did he answer the letter?':
    {
      why: "'Ago' counts back from the time he speaks. 'About a fortnight ago' means about two weeks before he says this.",
      not: {
        'a month before he speaks':
          "That is when he received the letter: 'about a month ago'. He answered it later.",
        'two weeks after he speaks': "'Ago' looks back into the past, not forward.",
        'every two weeks for a month': "'A fortnight ago' is one time in the past, not a habit.",
      },
      more: 'The letter is from Mr Collins, a cousin who is coming to visit the family.',
    },
  'In Pride and Prejudice, Elizabeth says of her sister Jane and Mr Bingley: “She has known him only a fortnight.” What does Elizabeth mean?':
    {
      why: "'Only a fortnight' means just two weeks, which Elizabeth thinks is a short time. 'Has known' runs from then up to now: Jane has not known him long enough to be sure of her feelings.",
      not: {
        'Jane has known him well for a very long time.':
          "'Only a fortnight' is two weeks, a short time, not a long one.",
        'Jane is going to meet him in two weeks.':
          "'Has known' tells us they have already met. Nothing here is in the future.",
        'Jane has known him for two months.': 'A fortnight is two weeks, not two months.',
      },
    },
  'In Jane Eyre, St John Rivers tells Jane: “…I shall return from Cambridge in a fortnight…” When will he come back?':
    {
      why: "'In a fortnight' means two weeks from the time he speaks, in the future. 'Shall return' is an older way to say 'will return'.",
      not: {
        'two weeks before now':
          "'In a fortnight' looks forward. Two weeks before now would be 'a fortnight ago'.",
        'for two weeks':
          "'For two weeks' would say how long he stays away, not when he comes back.",
        'every two weeks':
          'He is talking about one return, not something that happens again and again.',
      },
    },
  'A library notice says: “Closed at the weekend and on Mondays.” On which day can you visit?': {
    why: 'The weekend is Saturday and Sunday, and the notice also closes the library on Mondays. Thursday is none of those, so the library is open.',
    not: {
      Monday: 'The notice says the library is closed on Mondays.',
      Saturday: 'Saturday is part of the weekend, and the library is closed at the weekend.',
      Sunday: 'Sunday is part of the weekend, and the library is closed at the weekend.',
    },
  },
  'Today is Monday 3 June. Your teacher says the school trip is “a week today”. When is the trip?':
    {
      why: "'A week today' is British English for the same day next week, seven days from today. Seven days after Monday 3 June is Monday 10 June.",
      not: {
        'Tuesday 4 June': "That is tomorrow. 'A week today' is seven days from today.",
        'Monday 17 June': "That is two weeks away, a fortnight. 'A week today' is one week.",
        'Monday 1 July':
          "That is four weeks away, nearly a month. 'A week today' is only seven days.",
      },
      tip: "In the same way, 'a week tomorrow' means one week after tomorrow.",
    },
  'Today is Wednesday 4 March. Ella says, “My exam is a week tomorrow.” When is her exam?': {
    why: "Tomorrow is Thursday 5 March, and 'a week tomorrow' is one week after that: Thursday 12 March.",
    not: {
      'Thursday 5 March': "That is tomorrow. 'A week tomorrow' is a week after tomorrow.",
      'Wednesday 11 March':
        "That is 'a week today', the same day next week. 'A week tomorrow' is one day later.",
      'Friday 13 March': 'That is eight days after tomorrow, one day too many.',
    },
  },
  'Your teacher says, “I saw your mum the other day.” When did she see her?': {
    why: "'The other day' is a phrase that means a few days ago, not long ago. It is about the past, as 'saw' shows.",
    not: {
      'the next day':
        "'The other day' looks back into the past. 'The next day' is the day after another day.",
      'every other day':
        "'Every other day' means one day yes, one day no. It is a different phrase.",
      'some day soon':
        "'Another day' can mean some time in the future, but 'the other day' looks back, as 'saw' shows.",
    },
  },
  'A school letter says: “Monday is a bank holiday, so the school will be closed.” Counting the weekend, how many days in a row will pupils be at home?':
    {
      why: 'A bank holiday is a public holiday when most people do not work. With Saturday and Sunday before it, a bank holiday Monday makes a weekend of three days.',
      not: {
        '2 days': 'Two days is an ordinary weekend. The bank holiday adds Monday.',
        '4 days': 'Only Monday is added, so the weekend has three days, not four.',
      },
      more: "People in the UK call this a 'long weekend' or a 'bank holiday weekend'.",
    },
  'Lena says, “My aunt visits us every other week.” How often does she come?': {
    why: "'Every other week' means one week yes, the next week no: once every two weeks, or once a fortnight.",
    not: {
      'twice every week': "'Other' here does not mean two times. It means every second week.",
      'every week but one':
        "That would be nearly every week. 'Every other week' is only half the weeks.",
      'two times a fortnight': "That is once a week. 'Every other week' is once in two weeks.",
    },
  },
  'A sign at a swimming pool says: “Open all year round.” When can you swim there?': {
    why: "'All year round' means all through the year, in every season, not only in the warm months.",
    not: {
      'only in the summer':
        "Some outdoor pools open only in summer, but 'all year round' means every season.",
      'once every year':
        "'All year round' does not mean one time. It means the whole year, again and again.",
      'for one whole year':
        "It is not one year and then closed. 'All year round' means every year, all through the year.",
    },
  },
  'Your school has an annual sports day. How often is it?': {
    why: "'Annual' means happening once every year. It comes from 'annus', the Latin word for year.",
    not: {
      'once a month': "Once a month is 'monthly', not 'annual'.",
      'every day': "Every day is 'daily', not 'annual'.",
      'twice a year': "'Annual' is once a year, not twice.",
    },
  },
  'A UK form asks for your date of birth as DD/MM/YYYY. You were born on 7 August 2012. What do you write?':
    {
      why: 'DD/MM/YYYY means two figures for the day, two for the month and four for the year, in that order. The 7th is 07, August is month 08, and the year is 2012.',
      not: {
        '08/07/2012':
          'This puts the month first, as forms in the USA do. This form asks for the day first.',
        '2012/08/07':
          'This starts with the year. Some countries write dates this way, but the form asks for DD/MM/YYYY.',
        '07/08/12': 'The order is right, but YYYY asks for all four figures of the year: 2012.',
      },
    },
  "Ms Shah's letter says: “Parents' evening is on 11/03.” When is it?": {
    why: 'A UK date in figures gives the day first, then the month. So 11/03 is the eleventh day of month 03, March.',
    not: {
      '3 November':
        'This reads the month first, as people do in the USA. A UK letter puts the day first.',
      '11 May': 'May is month 05. Month 03 is March.',
      '3 March': 'The month is right, but the day is 11, not 3.',
    },
  },
  'Ali writes: “I was born ___ 2010, ___ a cold Tuesday in January.” Which words fill the gaps?': {
    why: "A year takes 'in': in 2010. A day takes 'on', even with words like 'a cold' in front of it: on a cold Tuesday.",
    not: {
      'on … in': "Both are the wrong way round: the year takes 'in', and the day takes 'on'.",
      'in … in': "'In 2010' is right, but a day takes 'on', not 'in'.",
      'at … on': "'On a cold Tuesday' is right, but we use 'at' with clock times, not with years.",
    },
  },
  "A club notice says: “We meet ___ Wednesday evenings ___ seven o'clock.” Which words fill the gaps?":
    {
      why: "A day with a part of the day after it takes 'on': on Wednesday evenings. A clock time takes 'at': at seven o'clock.",
      not: {
        'in … at':
          "'At seven o'clock' is right, but with a day in front, 'evenings' takes 'on', not 'in'.",
        'on … in': "'On Wednesday evenings' is right, but a clock time takes 'at'.",
        'at … on':
          "Both are the wrong way round: the day takes 'on', and the clock time takes 'at'.",
      },
    },
  'Mia writes in her diary: “We got home ___ midnight, so I stayed in bed ___ the morning.” Which words fill the gaps?':
    {
      why: "Midnight is a clock time, twelve o'clock at night, so it takes 'at'. 'The morning' takes 'in': in the morning.",
      not: {
        'in … at': "Both are the wrong way round: midnight takes 'at', and the morning takes 'in'.",
        'on … in': "'In the morning' is right, but midnight is a time, so it takes 'at', not 'on'.",
        'at … on': "'At midnight' is right, but we say 'in the morning'.",
      },
    },
  "An email says: “I've worked here ___ two years. I started ___ June 2023.” Which words fill the gaps?":
    {
      why: "'Two years' is a length of time, so it takes 'for'. A month and a year take 'in': in June 2023.",
      not: {
        'since … in':
          "'In June 2023' is right, but 'two years' is a length of time, so it takes 'for', not 'since'.",
        'for … on': "'For two years' is right, but a month takes 'in', not 'on'.",
        'since … on': "Both are wrong: a length of time takes 'for', and a month takes 'in'.",
      },
    },
  'A text message says: “The match was ___ Saturday. We won, and the next one is ___ two weeks.” Which words fill the gaps?':
    {
      why: "A day takes 'on': on Saturday. 'In two weeks' means two weeks from now, so it fits the next match.",
      not: {
        'in … on':
          "Both are the wrong way round: the day takes 'on', and two weeks from now is 'in two weeks'.",
        'on … since':
          "'On Saturday' is right, but 'since' looks back to the past. The next match is in the future.",
        'at … for': "'At' is for clock times, and 'for two weeks' says how long, not when.",
      },
    },
  'A note on the fridge says: “Dentist: the day after tomorrow, 10 am.” Today is Tuesday. When is the dentist?':
    {
      why: 'The day after tomorrow is two days from today. Two days after Tuesday is Thursday.',
      not: {
        Wednesday: 'Wednesday is tomorrow. The note says the day after tomorrow.',
        Friday: 'Friday is three days from today, one day too many.',
        Saturday: 'Saturday is four days from today.',
      },
    },
  'A sign at the pool says: “Swimming lessons every Tuesday and Thursday, except in August.” Which of these days has a lesson?':
    {
      why: 'Lessons are on Tuesdays and Thursdays, but not in August. A Tuesday in May is a lesson day in a month with no break.',
      not: {
        'a Thursday in August':
          "Thursday is a lesson day, but 'except in August' means there are no lessons that month.",
        'a Monday in May': 'The lessons are only on Tuesdays and Thursdays.',
        'a Saturday in March': 'The lessons are only on Tuesdays and Thursdays.',
      },
      more: "'Except' means 'but not'. It takes something out of a list or a rule.",
    },
  "Leo writes: “I ___ to Spain last summer, and next summer I'm going to Italy.” Which word fills the gap?":
    {
      why: "'Last summer' is a finished time in the past, so we use the past simple: I went.",
      not: {
        go: "'Go' is the present simple, but 'last summer' is in the past.",
        'have gone':
          "'Have gone' is the present perfect, which does not go with a finished time like 'last summer'.",
        'am going': "'Am going' is for a plan, like the trip next summer, not for last summer.",
      },
    },
  'A calendar note says: “Book club: the first Monday of every month.” Which date could it be?': {
    why: 'The first Monday of a month is the earliest Monday in it, so it always falls between the 1st and the 7th. Monday 2 March is the first Monday of March.',
    not: {
      'Monday 9 March': 'If 2 March is a Monday, then 9 March is the second Monday of the month.',
      'Sunday 1 March':
        'The first day of the month is a Sunday here, but the club meets on a Monday.',
      'Monday 30 March': '30 March is the last Monday of the month, not the first.',
    },
  },
  'Today is Friday 6 May. Your friend says, “See you in a fortnight.” When will you see her?': {
    why: 'A fortnight is two weeks, or fourteen days. Fourteen days after Friday 6 May is Friday 20 May.',
    not: {
      'Friday 13 May': 'That is one week away. A fortnight is two weeks.',
      'Friday 3 June': 'That is four weeks away, about a month.',
      'Saturday 7 May': 'That is tomorrow, not two weeks from now.',
    },
  },
  'Frankenstein begins with a letter dated “Dec. 11th”. How do you say this date?': {
    why: "'Dec.' is short for December, and '11th' is the ordinal 'eleventh'. So we say 'the eleventh of December'.",
    not: {
      'the eleven of December':
        "'Eleven' is a counting number. '11th' has 'th', so it is the ordinal: eleventh.",
      'the first of December': "'First' is 1st. The date here is 11th.",
    },
    more: 'The letter does not give the year in full. Writers at that time often hid part of a year like this.',
  },
  'A school letter says: “Term ends on Friday 21 July. The new term begins on Monday 4 September.” Which sentence is true?':
    {
      why: 'From 21 July to 4 September is about six weeks, so that sentence is true. The other three do not match the letter.',
      not: {
        'The new term begins on a Friday.': 'The letter says the new term begins on a Monday.',
        'Term ends in the middle of the week.':
          'Term ends on a Friday, the last day of the school week, not the middle.',
        'The holiday is shorter than a fortnight.':
          'A fortnight is two weeks. July to September is much longer than that.',
      },
    },
  'Today is 30 May. Kim says, “I wrote to the council on 2 May.” When did she write?': {
    why: 'From 2 May to 30 May is 28 days, which is four weeks. Counting back from today, she wrote four weeks ago.',
    not: {
      'in four weeks':
        "'In four weeks' is four weeks from now, in the future. She wrote in the past.",
      'for four weeks': "'For four weeks' says how long something lasted, not when it happened.",
      'four weeks later':
        "'Later' counts forward from another time. From today we count back, with 'ago'.",
    },
  },
  'A sign says: “No parking Mon to Sat, 8 am to 6 pm.” On which day can you park here all day?': {
    why: "'Mon to Sat' means Monday to Saturday, so parking is stopped on those days. The only day not in that list is Sunday.",
    not: {
      Saturday: "'Sat' is Saturday, the last day in the list, so you cannot park then.",
      Monday: "'Mon' is Monday, the first day in the list.",
      Friday: 'Friday comes between Monday and Saturday, so it is in the list.',
    },
  },
}
