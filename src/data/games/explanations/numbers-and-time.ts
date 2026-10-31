import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Numbers & Time: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/numbers-and-time.ts). Written with AI on
 * 16 October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 240 questions (187 new, 53 kept and explained again, 4 removed), 80 at each tier, every one explained again so that no explanation states another question's answer where that could be avoided. Written with AI and checked against each question, as the founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second reader, as the founder decided (13 October 2026): six explanations corrected. The why-not for '150 minutes' said one hour and fifty minutes, which is 110; the bus question's ordinary-number mistake gives 75 minutes, so its option and why-not now say 75; Snowball no longer wakes the animals (they were up at dawn); 1,500 is no longer 'one thousand and five hundred more'; 'two pounds fifty' is the usual way, not the only one; and the directions question is explained for its new options (the bank's docblock says what changed in the questions, and which thirteen moved down a tier).
 */
export const EXPLANATIONS: GameExplanations = {
  '0': {
    why: "In a phone number, people in the UK usually say 0 as 'oh', like the letter O. Some people say 'zero'.",
    not: {
      nil: "'Nil' is zero in football scores, not in phone numbers.",
      love: "'Love' is zero in tennis, not in phone numbers.",
      nought: "'Nought' is used in maths. In phone numbers people usually say 'oh'.",
    },
    more: "In maths, people often say 'nought' or 'zero'.",
  },
  '7': {
    why: "The number 7 is 'seven'. When you say it, it has two parts: SEV-en. You can say: I have seven books in my bag.",
    not: {
      seventy: "Seventy is 70, seven tens. The ending '-ty' means tens.",
      seventeen: "Seventeen is 17. The ending '-teen' means ten more.",
      eleven:
        "Eleven is 11, ten and one. It ends with the same sound as 'seven', so listen to the start.",
    },
    tip: 'Say it slowly and count the parts you hear: SEV-en.',
  },
  '8': {
    why: "8 is spelt e, i, g, h, t: 'eight'. The letters 'gh' are silent.",
    not: {
      eigth: "'eigth' puts the 't' before the 'h'. The word ends 'ght', as in 'night'.",
      eighth: "With an 'h' at the end, this is the ordinal, 8th. The number is spelt without it.",
      ate: "'Ate' sounds the same, but it is the past of 'eat': I ate an apple.",
    },
    tip: "'Weight' ends in the same letters: e, i, g, h, t.",
  },
  '13': {
    why: "13 is ten and three, and we say it 'thirteen': 'three' changes to 'thir', and 'teen' means ten more. The stress is at the end: thir-TEEN.",
    not: {
      thirty: 'Thirty is 30, three tens. In that word the stress is at the start: THIR-ty.',
      thirteenth: 'Thirteenth is the ordinal, 13th, for order. The question asks for the number.',
      three: 'Three is only 3. The number shown has a 1 in front of it.',
    },
    tip: "Say this number with a strong 'TEEN' at the end. It helps people hear it.",
  },
  '14': {
    why: "14 is ten and four: 'fourteen'. It keeps the 'u' of 'four', and the stress is at the end: four-TEEN.",
    not: {
      forty: "Forty is 40, four tens, with no 'u'.",
      four: 'Four is only 4.',
      fourth: 'Fourth is the ordinal, 4th, for order.',
    },
  },
  '15': {
    why: "15 is ten and five. 'Five' changes to 'fif' before 'teen', so we say 'fifteen', with the stress at the end: fif-TEEN.",
    not: {
      fifty: 'Fifty is 50, five tens. Its stress is at the start: FIF-ty.',
      five: 'Five is only 5. The number shown has a 1 in front of it.',
      fifteenth: 'Fifteenth is the ordinal, 15th, for order. The question asks for the number.',
    },
    tip: "Write 'fif', not 'five', at the start of this word.",
  },
  '18': {
    why: "18 is ten and eight: 'eighteen'. It has only one 't': eigh, teen.",
    not: {
      eighty: 'Eighty is 80, eight tens.',
      eight: 'Eight is only 8.',
      eighth: 'Eighth is the ordinal, 8th, for order.',
    },
  },
  '19': {
    why: "19 is ten and nine: 'nineteen', with the stress at the end: nine-TEEN.",
    not: {
      ninety: 'Ninety is 90, nine tens, with the stress at the start.',
      nine: 'Nine is only 9.',
      ninth: 'Ninth is the ordinal, 9th, for order.',
    },
  },
  '21': {
    why: '21 is two tens and one: twenty-one. English says the tens before the unit, joined to it by a hyphen.',
    not: {
      twelve: 'Twelve is 12, the two figures the other way round.',
      'twenty-first':
        'Twenty-first is the ordinal, 21st, for order. The question asks for the number.',
      twenty: 'Twenty is 20. The 1 after the 2 adds one more.',
    },
  },
  '30': {
    why: "30 is three tens, so it is 'thirty'. The stress is at the start: THIR-ty. You can say: There are thirty students in my class.",
    not: {
      thirteen: 'Thirteen is 13, ten and three. In that word the stress is at the end.',
      three: 'Three is 3, ten times smaller than 30.',
      thirtieth:
        'Thirtieth is the ordinal, 30th, for order, as in a date. The question asks for the number.',
    },
  },
  '40': {
    why: "40 is four tens: 'forty'. The spelling drops the 'u' of 'four': f, o, r, t, y. You can say: My mum is forty.",
    not: {
      fourty:
        "'Fourty' is the most common spelling mistake with numbers. The tens word has no 'u'.",
      fourteen: "Fourteen is 14, ten and four. That word keeps the 'u'.",
      four: 'Four is 4, ten times smaller.',
    },
  },
  '47': {
    why: "47 is four tens and seven. English says the tens before the units, joined by a hyphen: forty-seven. The tens word has no 'u'.",
    not: {
      'seventy-four':
        'Seventy-four is 74, the two figures the other way round. German and Dutch say the units first, but English does not.',
      'fourty-seven':
        "'Fourty' is a very common spelling mistake. 'Four' loses its 'u' in the tens word.",
      'forty-seventh':
        'Forty-seventh is the ordinal, 47th, for order. The question asks for the number.',
    },
    tip: "'Four' keeps its 'u', but the word for four tens drops it.",
  },
  '50': {
    why: "50 is five tens, so it is 'fifty'. 'Five' changes to 'fif', and '-ty' means tens. You can say: My dad is fifty.",
    not: {
      fifteen: 'Fifteen is 15, ten and five, with the stress at the end.',
      'five hundred': 'Five hundred is 500, ten times bigger.',
      five: 'Five is 5, ten times smaller.',
    },
  },
  '66': {
    why: '66 is six tens and six: sixty-six, with a hyphen between the two parts.',
    not: {
      sixteen: 'Sixteen is 16, ten and six.',
      'sixty-sixth':
        'Sixty-sixth is the ordinal, 66th, for order. The question asks for the number.',
      sixty: 'Sixty is 60. The second 6 adds six more.',
    },
  },
  '70': {
    why: "70 is seven tens: 'seventy', with the stress at the start: SEV-en-ty.",
    not: {
      seventeen: 'Seventeen is 17, ten and seven, with the stress at the end.',
      seven: 'Seven is 7, ten times smaller.',
      seventieth: 'Seventieth is the ordinal, 70th, for order.',
    },
  },
  '82': {
    why: '82 is eight tens and two. English says the tens before the units, joined by a hyphen: eighty-two.',
    not: {
      'twenty-eight':
        'Twenty-eight is 28, the figures the other way round. English says the tens first.',
      eighteen: 'Eighteen is 18, ten and eight. The number shown is much bigger.',
      'eighty-second':
        'Eighty-second is the ordinal, 82nd, for order. The question asks for the number.',
    },
  },
  '90': {
    why: "90 is nine tens: 'ninety'. It keeps the 'e' of 'nine': n, i, n, e, t, y.",
    not: {
      nineteen: 'Nineteen is 19, ten and nine.',
      ninty: "'Ninty' is a common spelling mistake. 'Nine' keeps its 'e' in this word.",
      nine: 'Nine is 9, ten times smaller.',
    },
  },
  '100': {
    why: "100 is 'one hundred', or 'a hundred'. You can say: There are one hundred pages in this book.",
    not: {
      'one thousand': 'One thousand is 1,000, with three zeros, not two.',
      'a hundredth':
        "'A hundredth' is a fraction, one part of a hundred. The question asks for the number.",
      ten: 'Ten is 10, with one zero. 100 has two.',
    },
  },
  '250': {
    why: "250 is two hundreds and fifty. In British English we say 'and' after the hundreds: two hundred and fifty.",
    not: {
      'twenty-five': 'Twenty-five is 25. It leaves out a zero.',
      'two thousand five hundred': 'Two thousand five hundred is 2,500, with four figures.',
      'two hundred and five':
        'Two hundred and five is 205. Here the 5 is in the tens place, so it means fifty.',
    },
  },
  '305': {
    why: "305 is three hundreds, no tens, and five. In British English we put 'and' after the hundreds: three hundred and five.",
    not: {
      'three hundred and fifty':
        'Three hundred and fifty is 350. 305 has a zero in the tens place.',
      'three thousand and five': 'Three thousand and five is 3,005. 305 has only three figures.',
      'thirty-five': 'Thirty-five is 35. It leaves out the hundreds.',
    },
    more: "American English often leaves out 'and': three hundred five. British English keeps it.",
  },
  '999': {
    why: 'In the UK people say the emergency number one figure at a time: nine nine nine. It is quick to say and easy to hear.',
    not: {
      'nine hundred and ninety-nine':
        'That is how you say the number 999, but phone numbers are said one figure at a time.',
      'ninety-nine nine': 'Phone numbers are said one figure at a time, not in pairs.',
      'nine ninety-nine':
        'That sounds like a price, £9.99. A phone number is said one figure at a time.',
    },
    more: 'Other countries use other numbers: in much of Europe it is 112.',
  },
  '1066': {
    why: "Split the year into two halves, 10 and 66: 'ten sixty-six'. It is the year of the Battle of Hastings.",
    not: {
      'one oh sixty-six': 'The first half is ten, not one and oh.',
      'sixty-six ten': 'This says the halves the wrong way round.',
      'ten sixteen': "Ten sixteen is 1016. Listen for 'ty' or 'teen'.",
    },
  },
  '1564': {
    why: "Split the year into 15 and 64: 'fifteen sixty-four'.",
    not: {
      'fifteen forty-six': 'That is 1546, the last two figures the wrong way round.',
      'sixty-four fifteen': 'This says the halves the wrong way round.',
      'one five six four': 'Years are said in two halves, not one figure at a time.',
    },
  },
  '1805': {
    why: "Split the year into 18 and 05. The 0 is said 'oh': eighteen oh five.",
    not: {
      'eighteen five': "The 0 must be said, as 'oh'.",
      'one eight oh five': 'Years are said in two halves, not one figure at a time.',
      'eighteen fifty': 'Eighteen fifty is 1850.',
    },
    more: "An older way to say it is 'eighteen hundred and five'.",
  },
  '1816': {
    why: "Split the year into 18 and 16: 'eighteen sixteen'. That summer Mary Shelley began to write Frankenstein.",
    not: {
      'eighteen sixty': "That is 1860. Listen for 'teen' or 'ty'.",
      'sixteen eighteen': 'This says the halves the wrong way round.',
      'one eight one six': 'Years are said in two halves, not one figure at a time.',
    },
  },
  '1843': {
    why: "Split the year into 18 and 43: 'eighteen forty-three'.",
    not: {
      'eighteen thirty-four': 'That is 1834, the last two figures the wrong way round.',
      'forty-three eighteen': 'This says the halves the wrong way round.',
      'one eight four three': 'Years are said in two halves, not one figure at a time.',
    },
  },
  '1878': {
    why: "Split the year into 18 and 78: 'eighteen seventy-eight'. 'Upon' in the line is an older word for 'on'.",
    not: {
      'eighteen eighty-seven': 'That is 1887. The second half here is 78.',
      'seventy-eight eighteen': 'This says the halves the wrong way round.',
      'one eight seven eight': 'Years are said in two halves, not one figure at a time.',
    },
  },
  '1900': {
    why: "A year that ends in 00 is said with 'hundred', so this year is 'nineteen hundred'.",
    not: {
      'one thousand nine hundred': 'That is how you say the number 1900, but not the year.',
      nineteen: 'Nineteen is 19. The year has two more zeros.',
      'nineteen thousand': 'Nineteen thousand is 19,000.',
    },
  },
  '1953': {
    why: "Split the year into 19 and 53: 'nineteen fifty-three'.",
    not: {
      'nineteen thirty-five': 'That is 1935, the last two figures the wrong way round.',
      'fifty-three nineteen': 'This says the halves the wrong way round.',
      'nineteen fifteen': "That is 1915. Listen for 'teen' or 'ty'.",
    },
  },
  '1999': {
    why: "We usually say a year like this in two halves, 19 and 99: 'nineteen ninety-nine'.",
    not: {
      'ninety-nine nineteen': 'This says the two halves the wrong way round.',
      'nineteen nineteen': 'Nineteen nineteen is 1919.',
      'one thousand nine hundred': 'That is the number 1900, and it is not how we say a year.',
    },
  },
  '2000': {
    why: "The year 2000 is said 'two thousand'. People also call it 'the year two thousand'.",
    not: {
      'two hundred': 'Two hundred is 200.',
      'twenty thousand': 'Twenty thousand is 20,000.',
      'twenty hundred':
        "Earlier years ending in 00 are said with 'hundred', but this one is not. We say 'two thousand'.",
    },
  },
  '2008': {
    why: "For the years from 2000 to 2009 we say 'two thousand and' and then the last figure: two thousand and eight.",
    not: {
      'two thousand and eighty': 'That is 2080. The 8 is a unit here.',
      'twenty-eight': 'Twenty-eight is 28. The year has four figures.',
      'two hundred and eight': 'That is 208, a much smaller number.',
    },
    more: "Some people say 'twenty oh eight' too.",
  },
  '2019': {
    why: "Many people say the years after 2010 in two halves, 20 and 19: 'twenty nineteen'. 'Two thousand and nineteen' is also used.",
    not: {
      'twenty ninety': "Twenty ninety is 2090. Listen for 'teen' or 'ty'.",
      'nineteen twenty': 'Nineteen twenty is 1920, the halves the wrong way round.',
      'two hundred and nineteen': 'That is 219, a much smaller number.',
    },
  },
  '2026': {
    why: 'The years from 2001 to 2100 are the twenty-first century, so 2026 is in it. The number of the century is one more than the hundreds.',
    not: {
      'the twentieth century': 'The twentieth century is the 1900s, the hundred years before.',
      'the twenty-sixth century': 'The 26 at the end of the year is not the century.',
      'the twenty-second century': 'The twenty-second century starts in 2101.',
    },
  },
  '1,000': {
    why: "1,000 has three zeros: 'one thousand', or 'a thousand'. The comma helps you count the zeros.",
    not: {
      'one hundred': 'One hundred is 100, with two zeros.',
      'ten thousand': 'Ten thousand is 10,000, with four zeros.',
      'one million': 'One million is 1,000,000, with six zeros.',
    },
  },
  sixteen: {
    why: "'Sixteen' is ten and six, so it is written 16. The ending '-teen' means ten more than the first part.",
    not: {
      '6': "6 is six. The ending '-teen' adds ten.",
      '60': "60 is sixty, six tens. This word ends in '-teen', not '-ty'.",
      '61': '61 is sixty-one. In it the six comes first because it is six tens.',
    },
  },
  'ninety-nine': {
    why: "'Ninety-nine' is nine tens and nine, so it is written 99.",
    not: {
      '19': "19 is nineteen. 'Ninety' is the word for the tens, not the teens.",
      '90': "90 is ninety on its own. The 'nine' at the end adds nine more.",
      '909': "909 is nine hundred and nine. 'Ninety' means nine tens, not nine hundred.",
    },
  },
  twelve: {
    why: "'Twelve' is ten and two, so it is written 12. It has a word of its own: English does not say 'two-teen'.",
    not: {
      '2': '2 is two. This number is ten more than that.',
      '20': "20 is twenty, two tens. Both words begin with 'tw', so listen to the end.",
      '21': '21 is twenty-one, the figures the other way round.',
    },
    more: "Eleven and twelve are the only numbers between 10 and 20 without 'teen' at the end.",
  },
  'eighty-five': {
    why: "'Eighty-five' is eight tens and five, so it is written 85: the tens before the units.",
    not: {
      '58': '58 is fifty-eight, the figures the other way round. English says the tens first.',
      '80': "80 is eighty on its own. 'Five' adds five more.",
      '805': "805 is eight hundred and five. 'Eighty' means eight tens, not eight hundred.",
    },
  },
  'two hundred and twelve': {
    why: 'Two hundred is 200, and twelve is 12. Together they make one number with three figures: 212.',
    not: {
      '220': "220 is two hundred and twenty. 'Twelve' is ten and two.",
      '20012':
        'This writes 200 and then 12 side by side. The twelve fills the tens and units of the 200.',
      '2,012': '2,012 is two thousand and twelve, with four figures.',
    },
  },
  '1,500': {
    why: "In English a comma separates the thousands, so 1,500 is one thousand plus five hundred. We say 'one thousand five hundred', with no 'and'.",
    not: {
      'one point five':
        "In many countries a comma is a decimal point, but in English it marks the thousands. 'One point five' is written 1.5.",
      'fifteen thousand': 'Fifteen thousand is 15,000, with three zeros after the 15.',
      'one thousand and fifty': 'One thousand and fifty is 1,050. 1,500 has five hundreds.',
    },
    more: "People also say 'fifteen hundred' for this number, especially for prices.",
  },
  '2.5': {
    why: "In English a decimal is written with a point and said with 'point': two point five.",
    not: {
      'two comma five':
        "Many languages write decimals with a comma, but English uses a point, and says 'point'.",
      'twenty-five':
        'Twenty-five is 25. The point shows that the 5 is part of one, not five more units.',
      'two and five': "'And' does not join the parts of a decimal. We say 'point'.",
    },
    more: 'Two point five is the same as two and a half.',
  },
  '3,000,000': {
    why: "3,000,000 is three million. After a number, 'million' has no 's'.",
    not: {
      'three millions':
        "After a number, 'million' does not take 's'. We say 'millions' only with no number in front: millions of stars.",
      'three thousand': 'Three thousand is 3,000, with three zeros, not six.',
      'thirty million': 'Thirty million is 30,000,000. This number starts with a 3 on its own.',
    },
    tip: "'Hundred' and 'thousand' work the same way after a number: no 's'.",
  },
  '£2.50': {
    why: "We usually say the pounds and then the pence, and leave out the word 'pence': two pounds fifty.",
    not: {
      'two pounds five': 'Two pounds five is £2.05. The 50 here means fifty pence.',
      'twenty-five pounds':
        'Twenty-five pounds is £25. The point separates the pounds from the pence.',
      'two hundred and fifty pounds':
        'That would be £250. The point separates the pounds from the pence.',
    },
    more: "In a shop you will also hear 'two fifty', with no 'pounds' at all.",
  },
  '75p': {
    why: "The 'p' stands for pence, so 75p is seventy-five pence. People often say 'seventy-five p'.",
    not: {
      'seventy-five pounds':
        "Pounds are written with £ in front: £75. A 'p' after the number means pence.",
      'seven pounds fifty': 'Seven pounds fifty is £7.50. 75p is less than one pound.',
      'seven pounds five': 'Seven pounds five is £7.05. 75p is less than one pound.',
    },
  },
  '£1.05': {
    why: "The 05 after the point is five pence, so we say 'one pound five'. You may also hear 'one oh five'.",
    not: {
      'one pound fifty': 'One pound fifty is £1.50. Here the pence are 05, five, not 50.',
      'ten pounds five': 'Ten pounds five is £10.05. There is only one pound here.',
      'one hundred and five pounds':
        'That would be £105. The point separates the pounds from the pence.',
    },
  },
  '10,000': {
    why: "10,000 is ten thousands: 'ten thousand'. Count the zeros after the 1: there are four.",
    not: {
      'one thousand': 'One thousand is 1,000, with three zeros.',
      'one hundred thousand': 'One hundred thousand is 100,000, with five zeros.',
      'a hundred': 'A hundred is 100, with two zeros.',
    },
  },
  '-5°C': {
    why: "A temperature below zero is said with 'minus': minus five degrees. That is very cold.",
    not: {
      'five degrees': 'Five degrees is above zero. The sign in front means below zero.',
      'fifty degrees': 'Fifty degrees is 50°C, very hot. The number here is 5.',
      'minus fifteen degrees': 'Minus fifteen is -15°C, much colder. The number here is 5.',
    },
    more: "You may also hear 'five below zero'.",
  },
  '50%': {
    why: "The sign % is said 'per cent', which means 'in every hundred'. 50% is fifty per cent, the same as half.",
    not: {
      'five per cent': 'Five per cent is 5%. The number here is 50.',
      'fifteen per cent': 'Fifteen per cent is 15%. The number here is five tens.',
      'half per cent': 'Half per cent is 0.5%, a tiny amount. 50% is half of the whole.',
    },
    more: "British English writes 'per cent' as two words. American English writes 'percent'.",
  },
  seventeen: {
    why: "'Seventeen' is ten and seven, so it is written 17.",
    not: {
      '7': "7 is seven. The ending '-teen' adds ten.",
      '70': "70 is seventy, seven tens. This word ends in '-teen'.",
      '71': '71 is seventy-one. This word is ten and seven.',
    },
  },
  'thirty-four': {
    why: "'Thirty-four' is three tens and four, so it is written 34: the tens before the units.",
    not: {
      '30': "30 is thirty on its own. 'Four' adds four more.",
      '43': '43 is forty-three, the figures the other way round.',
      '304': "304 is three hundred and four. 'Thirty' means three tens, not three hundred.",
    },
  },
  'six hundred and eight': {
    why: 'Six hundreds, no tens and eight units make 608. The zero holds the empty tens place.',
    not: {
      '68': '68 is sixty-eight. It has no hundreds.',
      '680': "680 is six hundred and eighty. 'Eight' is a unit, not eight tens.",
      '6,008': '6,008 is six thousand and eight, with four figures.',
    },
  },
  'four thousand': {
    why: "'Four thousand' is four with three zeros after it: 4,000. The comma marks the thousands.",
    not: {
      '400': '400 is four hundred, with two zeros.',
      '40,000': '40,000 is forty thousand, with four zeros.',
      '4,000,000': '4,000,000 is four million, with six zeros.',
    },
  },
  'one million': {
    why: 'A million is a thousand thousands: a 1 with six zeros after it, 1,000,000.',
    not: {
      '100,000': '100,000 is one hundred thousand, with five zeros.',
      '10,000,000': '10,000,000 is ten million, with seven zeros.',
      '1,000': '1,000 is one thousand, with three zeros.',
    },
  },
  '£0.50': {
    why: "£0.50 is less than a pound: no pounds and fifty pence. We say 'fifty pence', or 'fifty p'.",
    not: {
      'fifty pounds': 'Fifty pounds is £50. The 0 before the point means no pounds.',
      'five pence': 'Five pence is 5p. The 50 means fifty pence.',
      'half a penny': 'Half a penny is very small. This amount is half a pound.',
    },
  },
  'forty-four': {
    why: "'Forty-four' is four tens and four, so it is written 44.",
    not: {
      '14': "14 is fourteen, ten and four. 'Forty' is four tens.",
      '40': "40 is forty on its own. The second 'four' adds four more.",
      '404': "404 is four hundred and four. 'Forty' means four tens, not four hundred.",
    },
  },
  '2-0': {
    why: "In British football a score of zero is 'nil', so this score is 'two nil'.",
    not: {
      'two oh': "'Oh' is for zero in phone numbers, not in football scores.",
      'two love': "'Love' is zero in tennis. Football uses 'nil'.",
      'two nought': "'Nought' is zero in maths. Football scores use 'nil'.",
    },
    more: "When neither team scores, people say 'nil nil' or 'a goalless draw'.",
  },
  'a fiver': {
    why: "'A fiver' is an informal British word for five pounds, or a five-pound note.",
    not: {
      '£50': 'Fifty pounds is not a fiver. A fiver is five pounds.',
      '5p': 'Five pence is a coin worth very little. A fiver is five pounds.',
      '£15': 'Fifteen pounds would be three of them. A fiver is five pounds.',
    },
    tip: 'Ten pounds has an informal word made in the same way.',
  },
  'a tenner': {
    why: "'A tenner' is an informal British word for ten pounds, or a ten-pound note.",
    not: {
      '£100': 'A hundred pounds would be ten of them. A tenner is ten pounds.',
      '10p': 'Ten pence is a coin. A tenner is ten pounds.',
      '£1': 'One pound is a coin. A tenner is ten pounds.',
    },
  },
  'three ninety-nine': {
    why: "In shops people often leave out 'pounds' and 'pence': 'three ninety-nine' is three pounds and ninety-nine pence.",
    not: {
      '£399': "£399 would be 'three hundred and ninety-nine pounds'.",
      '£3.90': "£3.90 would be 'three ninety'.",
      '£9.39': 'This puts the parts the wrong way round. The pounds come first: three.',
    },
  },
  'two for a pound': {
    why: "'Two for a pound' means you get two things for one pound, so one costs half a pound: fifty pence.",
    not: {
      '£2': 'Two pounds would be one pound each. Two things cost one pound together.',
      '£1': 'One pound is the price of both, not of one.',
      '2p': 'Two pence is far too little. One pound shared by two is fifty pence.',
    },
  },
  '£30, half price': {
    why: "'Half price' means you pay half the usual price. Half of £30 is £15.",
    not: {
      '£60': '£60 is double the price, not half.',
      '£3': '£3 is a tenth of the price, not half.',
      '£30.50': "'Half price' does not add fifty pence. It means you pay half.",
    },
  },
  '£5 note, £3.40 ticket': {
    why: "'Change' is the money you get back. £5 take away £3.40 is one pound sixty.",
    not: {
      '£2.60': 'Check it: £3.40 and £2.60 make £6, not £5.',
      '£1.40': '£1.40 is not what is left. Take the whole price, £3.40, away from £5.',
      '£8.40':
        '£8.40 adds the two amounts together. Change is what is left when you take the price away.',
    },
  },
  'ten quid': {
    why: "'Quid' is informal British English for a pound, and it does not take an 's'. Ten quid is ten pounds.",
    not: {
      '£1': "One pound is 'a quid'. Ten quid is ten pounds.",
      '10p': "'Quid' means pounds, not pence.",
      '£100': "A hundred pounds would be 'a hundred quid'.",
    },
  },
  '60,000': {
    why: "60,000 is sixty thousands: 'sixty thousand'. The comma marks the thousands.",
    not: {
      'six thousand': 'Six thousand is 6,000, with three zeros, not four.',
      'sixteen thousand': 'Sixteen thousand is 16,000. Here the 6 is six tens.',
      'six hundred thousand': 'Six hundred thousand is 600,000, with five zeros.',
    },
  },
  '250,000': {
    why: "250,000 is 250 thousands. Say the 250 as usual, with 'and' after the hundreds, and add 'thousand'.",
    not: {
      'twenty-five thousand': 'Twenty-five thousand is 25,000, with one zero fewer.',
      'two million five hundred thousand': 'That is 2,500,000, ten times bigger.',
      'two thousand five hundred': 'That is 2,500, a hundred times smaller.',
    },
  },
  '2.4 km': {
    why: "A decimal is said with 'point' and then each figure: two point four. 'km' is said 'kilometres'.",
    not: {
      'two comma four kilometres': 'English writes and says a decimal point, not a comma.',
      'twenty-four kilometres':
        'That would be 24 km. The point shows the 4 is part of a kilometre.',
      'two and four kilometres': "'And' does not join the parts of a decimal. Say 'point'.",
    },
  },
  '077': {
    why: "In UK phone numbers, 0 is often said 'oh', and two figures that are the same are said with 'double': oh double seven.",
    not: {
      'seventy-seven':
        "Phone numbers are said one figure at a time, and the 'oh' at the start matters too.",
      'seven hundred and seventy':
        'That is a number, 770. A phone number is said one figure at a time.',
      'oh seventy-seven':
        "The 'oh' is right, but the sevens are said one at a time, or as 'double seven'.",
    },
    more: "You can also say 'oh seven seven'.",
  },
  'in his seventies': {
    why: "'In his seventies' means from 70 to 79 years old. Of these ages, only 74 fits.",
    not: {
      '7': "7 is a child's age, far below the seventies.",
      '17': '17 is in his teens, not his seventies.',
      '47': '47 is in his forties. The seventies start at 70.',
    },
  },
  'a couple of days': {
    why: "'A couple of' means two, or a small number close to two. 'In a couple of days' means in about two days.",
    not: {
      'in exactly four days': "'A couple' is about two, not four.",
      'in twelve days': 'A couple is about two, not twelve.',
      'in about two weeks': 'She said days, not weeks.',
    },
  },
  'a dozen eggs': {
    why: 'A dozen is twelve. Eggs are often sold in boxes of a dozen or half a dozen.',
    not: {
      '10 eggs': 'Ten is not a dozen. A dozen is twelve.',
      '20 eggs': 'Twenty is too many. A dozen is twelve.',
      '2 eggs': "Two is 'a couple'. A dozen is twelve.",
    },
    more: 'Half a dozen is six.',
  },
  'one nineteen': {
    why: "In a shop, 'one nineteen' means one pound and nineteen pence.",
    not: {
      '£1.90':
        "£1.90 would be 'one ninety'. Nineteen and ninety sound alike, so listen to the end.",
      '£1.09': "£1.09 would be 'one oh nine'.",
      '£19.01': 'This puts the parts the wrong way round. The pounds come first: one.',
    },
  },
  'fifteen pounds fifty': {
    why: 'The pounds come before the pence: fifteen pounds and fifty pence.',
    not: {
      '£50.15': 'This swaps the pounds and the pence.',
      '£1.55': "That would be 'one fifty-five'.",
      '£15.05': "That would be 'fifteen pounds five'. Here the pence are fifty.",
    },
  },
  'sandwich and drink': {
    why: "£2.85 and £1.20 make £4.05. The pence are 05, five, so we say 'four pounds five'.",
    not: {
      'four pounds fifty':
        'That is £4.50. Add the pence: 85 and 20 make 105, which is one pound and five pence.',
      'three pounds five': 'Remember the extra pound from the pence: 85p and 20p make £1.05.',
      'four pounds fifteen': 'That is £4.15. The pence come to five, not fifteen.',
    },
  },
  '£1 + 50p': {
    why: 'A pound coin and a fifty pence coin make one pound fifty.',
    not: {
      '£1.05': '£1.05 is one pound and five pence. Fifty pence is written .50.',
      '£51': 'Pounds and pence do not join like this. Fifty pence is half a pound.',
      '51p': 'A pound is a hundred pence, not one.',
    },
  },
  'thirty degrees': {
    why: "'Thirty' is three tens, so the temperature is 30°C: a very hot day in the UK.",
    not: {
      '13°C': "13°C is thirteen degrees. Listen for the end: '-ty' or '-teen'.",
      '3°C': '3°C is three degrees, very cold.',
      '300°C': '300°C is as hot as an oven. Thirty is three tens.',
    },
  },
  'eighteen months old': {
    why: 'There are twelve months in a year. Eighteen months is twelve and six more: a year and a half.',
    not: {
      eighteen: 'Eighteen years would be an adult. She is eighteen months old.',
      eight:
        'Eight is not her age in years. Eighteen months is more than one year and less than two.',
      'one and a quarter':
        'One and a quarter years is fifteen months. Eighteen months is one and a half years.',
    },
  },
  '1st': {
    why: "'1st' is the short form of 'first': the 1 and the last two letters of the word. 'First' is one of three ordinals with a form of their own.",
    not: {
      one: "'One' is the counting number. '1st' shows order, so we need the ordinal.",
      fourth: "'Fourth' is 4th, number four in order.",
      once: "'Once' means one time, as in 'once a week'. It does not show order.",
    },
    tip: "Look at the letters after the number: 'st' is the end of the word.",
  },
  '2nd': {
    why: "'2nd' is the short form of 'second': the 2 and the last two letters of the word, 'nd'.",
    not: {
      two: "'Two' is the counting number. The 'nd' shows we need the ordinal.",
      twelfth: "'Twelfth' is 12th, number twelve in order.",
      twentieth: "'Twentieth' is 20th, number twenty in order.",
    },
  },
  '3rd': {
    why: "'3rd' is the short form of 'third': the 3 and the last two letters of the word, 'rd'.",
    not: {
      three: "'Three' is the counting number. The 'rd' shows we need the ordinal.",
      thirteenth: "'Thirteenth' is 13th, number thirteen in order.",
      thirtieth: "'Thirtieth' is 30th, number thirty in order.",
    },
  },
  '5th': {
    why: "'5th' is 'fifth'. 'Five' changes its 've' to 'f' before 'th': fif, th.",
    not: {
      five: "'Five' is the counting number. The 'th' shows we need the ordinal.",
      fifteenth: "'Fifteenth' is 15th.",
      fiftieth: "'Fiftieth' is 50th.",
    },
    tip: "Twelve changes in the same way: its 've' becomes 'f' before 'th'.",
  },
  '8th': {
    why: "'8th' is 'eighth'. 'Eight' already ends in 't', so it adds only 'h': e, i, g, h, t, h.",
    not: {
      eight: "'Eight' is the counting number. The 'th' shows we need the ordinal.",
      eighteenth: "'Eighteenth' is 18th.",
      eightieth: "'Eightieth' is 80th.",
    },
  },
  '9th': {
    why: "'9th' is 'ninth'. 'Nine' drops its 'e' before 'th': n, i, n, t, h.",
    not: {
      nineth: "'Nineth' is a very common spelling mistake. The 'e' of 'nine' goes before 'th'.",
      nineteenth: "'Nineteenth' is 19th.",
      ninetieth: "'Ninetieth' is 90th.",
    },
  },
  '12th': {
    why: "'12th' is 'twelfth'. 'Twelve' changes 've' to 'f' before 'th': t, w, e, l, f, t, h.",
    not: {
      twelveth: "'Twelveth' keeps the 've'. In the ordinal it changes to 'f'.",
      twentieth: "'Twentieth' is 20th.",
      twelve: "'Twelve' is the counting number. The 'th' shows we need the ordinal.",
    },
  },
  '20th': {
    why: "'20th' is 'twentieth'. The 'y' of 'twenty' changes to 'ie', and then we add 'th': twen, ti, eth.",
    not: {
      twenty: "'Twenty' is the counting number. The 'th' shows we need the ordinal.",
      twelfth: "'Twelfth' is 12th. Both begin with 'tw', so read the whole word.",
      second: "'Second' is 2nd. The 0 after the 2 makes it twenty.",
    },
    tip: "Every number of tens works like this: the 'y' becomes 'ie', and 'th' goes on the end.",
  },
  '21st': {
    why: "'21st' is 'twenty-first'. Only the last part of the number changes: twenty stays, and one becomes first.",
    not: {
      'twenty-one': "'Twenty-one' is the counting number. The 'st' shows we need the ordinal.",
      twelfth: "'Twelfth' is 12th, the figures the other way round.",
      first: "'First' is 1st. The 2 in front makes it twenty-first.",
    },
  },
  '30th': {
    why: "'30th' is 'thirtieth': the 'y' of 'thirty' changes to 'ie', and we add 'th'.",
    not: {
      thirteenth: "'Thirteenth' is 13th. Listen for 'teenth' or 'tieth'.",
      thirty: "'Thirty' is the counting number. The 'th' shows we need the ordinal.",
      third: "'Third' is 3rd. The 0 after the 3 makes it thirtieth.",
    },
  },
  '100th': {
    why: "'100th' is 'hundredth', often said 'the hundredth' or 'one hundredth'. Keep the whole word 'hundred' and add 'th'.",
    not: {
      'one hundred': "'One hundred' is the counting number. The 'th' shows we need the ordinal.",
      hundreth: "'Hundreth' leaves out the 'd' before 'th'. Keep the whole word and add 'th'.",
      thousandth: "'Thousandth' is ten times bigger.",
    },
  },
  fortieth: {
    why: "'Fortieth' is the ordinal of forty, so in figures it is 40th: the number and then 'th'.",
    not: {
      '40': '40 is the counting number. An ordinal in figures ends in letters.',
      '14th': "14th is 'fourteenth'. This word has 'tieth', not 'teenth'.",
      '4th': "4th is 'fourth'. This ordinal is ten times bigger.",
    },
  },
  seventh: {
    why: "'Seventh' is the ordinal of seven, so in figures it is 7th.",
    not: {
      '7': '7 is the counting number. An ordinal in figures ends in letters.',
      '17th': "17th is 'seventeenth'.",
      '70th': "70th is 'seventieth'.",
    },
  },
  '4th': {
    why: "'4th' is 'fourth': the word 'four' and then 'th'. It keeps the 'u'.",
    not: {
      four: "'Four' is the counting number. The 'th' shows we need the ordinal.",
      fourteenth: "'Fourteenth' is 14th.",
      fortieth: "'Fortieth' is 40th, and it has no 'u'.",
    },
  },
  '6th': {
    why: "'6th' is 'sixth': the word 'six' and then 'th'.",
    not: {
      six: "'Six' is the counting number. The 'th' shows we need the ordinal.",
      sixteenth: "'Sixteenth' is 16th.",
      sixtieth: "'Sixtieth' is 60th.",
    },
  },
  '11th': {
    why: "'11th' is 'eleventh': the word 'eleven' and then 'th'. It ends in 'th', not 'st', even though the number ends in a 1.",
    not: {
      eleven: "'Eleven' is the counting number. The 'th' shows we need the ordinal.",
      seventh:
        "'Seventh' is 7th. Eleven and seven end with the same sound, so listen to the start.",
      twelfth: "'Twelfth' is 12th, one more.",
    },
    tip: "Numbers in the teens all take 'th' in short, even 11, 12 and 13.",
  },
  '13th': {
    why: "'13th' is 'thirteenth': 'thirteen' and then 'th'. It ends in 'th', not 'rd', even though the number ends in a 3.",
    not: {
      thirteen: "'Thirteen' is the counting number. The 'th' shows we need the ordinal.",
      thirtieth: "'Thirtieth' is 30th. Listen for 'teenth' or 'tieth'.",
      third: "'Third' is 3rd. The 1 in front makes it thirteenth.",
    },
  },
  '22nd': {
    why: "'22nd' is 'twenty-second'. Only the last part changes: twenty stays, and two becomes second.",
    not: {
      'twenty-two': "'Twenty-two' is the counting number. The 'nd' shows we need the ordinal.",
      twelfth: "'Twelfth' is 12th.",
      second: "'Second' is 2nd. The first 2 here means twenty.",
    },
  },
  '31st': {
    why: "'31st' is 'thirty-first'. Only the last part changes: thirty stays, and one becomes first.",
    not: {
      'thirty-one': "'Thirty-one' is the counting number. The 'st' shows we need the ordinal.",
      thirteenth: "'Thirteenth' is 13th.",
      third: "'Third' is 3rd. This number has a 1 after the 3.",
    },
  },
  'twenty-third': {
    why: "'Twenty-third' is twenty and third, so in figures it is 23rd: 23 with 'rd', the end of 'third'.",
    not: {
      '3rd': "3rd is 'third' on its own. 'Twenty' adds 20.",
      '20th': "20th is 'twentieth'. This ordinal is three more.",
      '33rd': "33rd is 'thirty-third'.",
    },
  },
  fifteenth: {
    why: "'Fifteenth' is the ordinal of fifteen, so in figures it is 15th.",
    not: {
      '15': '15 is the counting number. An ordinal in figures ends in letters.',
      '50th': "50th is 'fiftieth'. This word has 'teenth'.",
      '5th': "5th is 'fifth'. This ordinal is ten more.",
    },
  },
  'ground floor + 1': {
    why: 'In the UK the floor at street level is the ground floor, and the floor one level above it is the first floor.',
    not: {
      'the second floor':
        'In the USA the floor above street level is often called the second floor, but in the UK it is the first floor.',
      'the top floor':
        'The top floor is the highest floor. A building can have many floors above the first.',
      'the third floor': 'The third floor is three levels above the ground floor.',
    },
    more: 'The floor below the ground floor is the basement.',
  },
  '2nd in the race': {
    why: "We say a person 'came second' in a race: the verb 'came' and then the ordinal, with no 'the'.",
    not: {
      'Sam came two.': "'Two' is the counting number. A place in a race takes the ordinal.",
      'Sam came the second.': "We do not use 'the' after 'came' here.",
      'Sam came twice.': "'Twice' means two times. It is not a place in a race.",
    },
  },
  '16 next month': {
    why: 'Birthdays are counted in order, so they take an ordinal: his sixteenth birthday.',
    not: {
      'his sixteen birthday': "'Sixteen' is the counting number. Birthdays take the ordinal.",
      'his sixtieth birthday': "'Sixtieth' is 60th. Listen for 'teenth' or 'tieth'.",
      'his sixth birthday': "'Sixth' is 6th, ten years too few.",
    },
  },
  '1/5': {
    why: "Fractions use an ordinal for the bottom number: 1/5 is 'a fifth', or 'one fifth'.",
    not: {
      'a five': "'Five' is a counting number. A fraction takes the ordinal.",
      'a fiftieth': "'A fiftieth' is 1/50.",
      'a fifteenth': "'A fifteenth' is 1/15.",
    },
  },
  '2/3': {
    why: "The bottom number takes an ordinal, and it adds 's' when the top number is more than one: two thirds.",
    not: {
      'two threes': "'Threes' is the counting number with 's'. A fraction takes the ordinal.",
      'three halves': 'Three halves is 3/2, the numbers the other way round.',
      'two third': "With two of them, the ordinal needs an 's'.",
    },
  },
  '3/4': {
    why: "In British English one part out of four is a quarter, so this fraction is 'three quarters', with an 's'.",
    not: {
      'three fours':
        "'Fours' is the counting number. With 4 at the bottom, English says 'quarters'.",
      'four thirds': 'Four thirds is 4/3, the numbers the other way round.',
      'three quarter': "With three of them, 'quarter' needs an 's'.",
    },
  },
  '1/2': {
    why: "1/2 has a word of its own: 'a half', or 'one half'. We do not use an ordinal here.",
    not: {
      'a second': "Other fractions use ordinals, but 1/2 is 'a half', never 'a second'.",
      'a two': "'Two' is a counting number. This fraction has its own word.",
      'a twelfth': "'A twelfth' is 1/12.",
    },
  },
  '1/3': {
    why: "Fractions use an ordinal for the bottom number, so 1/3 is 'a third', or 'one third'.",
    not: {
      'a three': "'Three' is a counting number. A fraction takes the ordinal.",
      'a thirtieth': "'A thirtieth' is 1/30.",
      'a thirteenth': "'A thirteenth' is 1/13.",
    },
  },
  '50th anniversary': {
    why: "Anniversaries are counted in order, so they take an ordinal. From fifty, the 'y' changes to 'ie' and we add 'th': fiftieth.",
    not: {
      fifteenth: "'Fifteenth' is 15th. Listen for 'teenth' or 'tieth'.",
      fifty: "'Fifty' is the counting number. The 'th' shows we need the ordinal.",
      fifth: "'Fifth' is 5th, much smaller.",
    },
    more: 'A fiftieth wedding anniversary is often called a golden wedding.',
  },
  '34th': {
    why: "'34th' is 'thirty-fourth': thirty stays, and four becomes fourth. Here it names a regiment, a large group of soldiers.",
    not: {
      'thirty-four': "'Thirty-four' is the counting number. '34th' has 'th', so it is the ordinal.",
      'forty-third': "'Forty-third' is 43rd, the figures the other way round.",
      thirtieth: "'Thirtieth' is 30th. The 4 at the end makes it thirty-fourth.",
    },
    more: "'Late of' means he was in that regiment before.",
  },
  '8th Hussars': {
    why: "'8th' is 'eighth': 'eight' with only an 'h' added, because it already ends in 't'. The 8th Hussars was a regiment of soldiers on horses.",
    not: {
      eight: "'Eight' is the counting number. '8th' has 'th', so it is the ordinal.",
      eighteenth: "'Eighteenth' is 18th.",
      eightieth: "'Eightieth' is 80th.",
    },
  },
  '14th': {
    why: "'14th' is 'fourteenth': 'fourteen' and then 'th'. In this line it is a date, the fourteenth day of the month.",
    not: {
      fortieth: "'Fortieth' is 40th. Listen for 'teenth' or 'tieth'.",
      fourteen: "'Fourteen' is the counting number. '14th' has 'th', so it is the ordinal.",
      fourth: "'Fourth' is 4th. The 1 in front makes it fourteenth.",
    },
    more: 'Stevenson gives only the day, because the month is clear from the sentence before.',
  },
  'the 11th': {
    why: "'11th' is 'eleventh', so 'the 11th' is 'the eleventh': here, the eleventh day of the month.",
    not: {
      'the eleven': "'Eleven' is the counting number. A day of the month takes the ordinal.",
      'the seventh': "'The seventh' is the 7th. Eleven and seven end with the same sound.",
      'the twelfth': "'The twelfth' is the 12th, one day later.",
    },
    more: "'The passage' here is the way through the ice for the ship.",
  },
  second: {
    why: "'Second' is the ordinal of two, so in figures it is 2nd: the 2 and the last two letters of the word.",
    not: {
      '2': '2 is the counting number. An ordinal in figures ends in letters.',
      '12th': "12th is 'twelfth'.",
      '20th': "20th is 'twentieth'.",
    },
  },
  '1,000th': {
    why: "'1,000th' is 'thousandth', usually said 'the thousandth' or 'one thousandth': the word 'thousand' and then 'th'.",
    not: {
      'one thousand': "'One thousand' is the counting number. The 'th' shows we need the ordinal.",
      hundredth: "'Hundredth' is 100th, ten times smaller.",
      thousands:
        "'Thousands' means many thousands, as in 'thousands of people'. It is not an ordinal.",
    },
  },
  fiftieth: {
    why: "'Fiftieth' is the ordinal of fifty, so in figures it is 50th.",
    not: {
      '50': '50 is the counting number. An ordinal in figures ends in letters.',
      '15th': "15th is 'fifteenth'. This word has 'tieth'.",
      '5th': "5th is 'fifth'.",
    },
  },
  'eighty-first': {
    why: "'Eighty-first' is eighty and first, so in figures it is 81st: 81 with 'st', the end of 'first'.",
    not: {
      '81': '81 is the counting number. An ordinal in figures ends in letters.',
      '18th': "18th is 'eighteenth', the figures the other way round.",
      '80th': "80th is 'eightieth'. This ordinal is one more.",
    },
  },
  ninetieth: {
    why: "'Ninetieth' is the ordinal of ninety, so in figures it is 90th.",
    not: {
      '90': '90 is the counting number. An ordinal in figures ends in letters.',
      '19th': "19th is 'nineteenth'. This word has 'tieth'.",
      '9th': "9th is 'ninth'.",
    },
  },
  'sixty-fifth': {
    why: "'Sixty-fifth' is sixty and fifth, so in figures it is 65th.",
    not: {
      '65': '65 is the counting number. An ordinal in figures ends in letters.',
      '56th': "56th is 'fifty-sixth', the figures the other way round.",
      '6th': "6th is 'sixth'. This ordinal has sixty in it.",
    },
  },
  twelfth: {
    why: "'Twelfth' is the ordinal of twelve, so in figures it is 12th, with 'th' like most ordinals.",
    not: {
      '12': '12 is the counting number. An ordinal in figures ends in letters.',
      '20th': "20th is 'twentieth'. Both begin with 'tw', so read the whole word.",
      '2nd': "2nd is 'second'.",
    },
  },
  '1/4': {
    why: "In British English, 1/4 is 'a quarter', or 'one quarter'.",
    not: {
      'a four': "'Four' is a counting number. This fraction is 'a quarter'.",
      'a fourteenth': "'A fourteenth' is 1/14.",
      'a fortieth': "'A fortieth' is 1/40.",
    },
    more: "American English can also say 'a fourth'.",
  },
  'ground floor + 2': {
    why: 'In the UK we count the floors from the ground floor up, so the floor two levels up is the second floor.',
    not: {
      'the third floor': 'The third floor is three levels above the ground floor.',
      'the first floor': 'The first floor is only one level above the ground floor.',
      'the top floor': 'The top floor is the highest floor, wherever it is.',
    },
  },
  '3rd floor': {
    why: 'Under the third floor are the second floor, the first floor and the ground floor: three floors in all.',
    not: {
      '1': 'One floor is too few. Count the floors under the third: second, first and ground.',
      '2': 'Count the ground floor too: the second, the first and the ground floor make three.',
      '4': 'There is no fourth floor under the third. Count down from the third floor.',
    },
  },
  '3 people in front': {
    why: 'Three people are in front of Ali, so he is number four in the queue. A place takes an ordinal: fourth.',
    not: {
      third: 'Third would mean only two people in front.',
      three: "'Three' is how many people are in front, not Ali's place.",
      four: "'Four' is a counting number. A place in a queue takes the ordinal.",
    },
  },
  'every second week': {
    why: "'Every second week' means one week yes and the next week no: once every two weeks. It means the same as 'every other week'.",
    not: {
      'twice in every week': "'Second' here means the second in a row, not two times.",
      'two weeks running':
        "'Running' would mean two weeks, one after the other. Here there is a week off in between.",
      'on the second of each month':
        "That is a date. 'Every second week' counts weeks, not days of the month.",
    },
  },
  'the last but one': {
    why: "'The last but one' means just before the last: the house second from the end of the street.",
    not: {
      'at the very end': "That is the last house. 'The last but one' is the house before it.",
      'first in the street': "That is the other end. 'Last but one' counts from the end.",
      'one house away': 'It is not about how far away the house is. It is second from the end.',
    },
  },
  'pass the 2nd runner': {
    why: 'If you pass the runner in second place, you take that place. You are now second, and the runner you passed is third.',
    not: {
      first:
        'To be first you would have to pass the leader. You passed the runner in second place.',
      third: 'Third is now the place of the runner you passed.',
      last: 'You moved up, not down.',
    },
  },
  'born 5 March 2012': {
    why: 'From 2012 to 2026 is fourteen years, so it is his fourteenth birthday. A birthday takes an ordinal.',
    not: {
      'his fourteen': "'Fourteen' is the counting number. A birthday takes the ordinal.",
      'his fortieth': "'Fortieth' is 40th, much too big.",
      'his thirteenth': 'Count the years again: from 2012 to 2026 is fourteen, not thirteen.',
    },
  },
  '5th out of 20': {
    why: 'If we are fifth, the teams in first, second, third and fourth place are above us: four teams.',
    not: {
      '5': 'We are the fifth team. The teams above us are the four before us.',
      '15': 'Fifteen teams are below us, not above.',
      '16': 'Count the teams above us: four. The others are below.',
    },
  },
  'the second turning on the left': {
    why: "'The second turning on the left' means you go past the first road on your left and take the next one.",
    not: {
      'the first left you come to':
        "That is the first turning on the left. 'The second' means you go past that one and take the next.",
      'the second turning on the right':
        "The directions say 'on the left', so count only the roads on your left.",
      'the third turning on the left':
        'That goes one road too far. Go past only the first turning on the left, then take the next one.',
    },
  },
  'just shorter than Ben': {
    why: "Ben is the tallest, and Ali comes next, so Ali is the second tallest. An ordinal can go before a word like 'tallest'.",
    not: {
      'Ali is the two tallest.': "'Two' is a counting number. Before 'tallest' we use the ordinal.",
      'Ali is the second shortest.': 'Ali is near the top for height, not near the bottom.',
      'Ali is twice as tall.':
        "'Twice as tall' means double the height. That is not what the sentence says.",
    },
  },
  'the 3rd time': {
    why: "'The third time' uses the ordinal, because it gives the place of this time in a list of times.",
    not: {
      three: "'Three' is a counting number. After 'the' and before 'time', use the ordinal.",
      thirdly: "'Thirdly' is for the third point in a list: Firstly, Secondly, Thirdly.",
      thrice: "'Thrice' is an old word for 'three times'. It cannot go after 'the'.",
    },
  },
  '3rd prize': {
    why: 'Prizes go in order, and the prize just above third is second prize.',
    not: {
      'fourth prize': 'Fourth prize is below third, not above it.',
      'third prize': "Third prize is Ana's own prize.",
      'first prize': 'First prize is two places above third.',
    },
  },
  'every fourth year': {
    why: "'Every fourth year' means one year in every four: once every four years.",
    not: {
      'four times a year': 'That would be four times in one year. This happens much less often.',
      'once every fourteen years': "'Fourth' is 4th, not fourteenth.",
      'once every forty years': "'Fourth' is 4th, not fortieth.",
    },
  },
  'a third of the cake': {
    why: "'A third' is one part when something is cut into three equal pieces.",
    not: {
      'three pieces out of four': 'That is three quarters. A third is one piece out of three.',
      'the third cake':
        "'The third cake' would mean the cake that is number three. 'A third of the cake' is part of one cake.",
      'thirty pieces': "'Third' is about three, not thirty.",
    },
  },
  'a second-hand bike': {
    why: "'Second-hand' means not new: someone else owned it before you.",
    not: {
      'it has two wheels':
        "'Second' here does not mean two. A second-hand bike has had an owner before.",
      'it was half price':
        "Second-hand things are often cheaper, but the word means 'owned before'.",
      'it is for two people':
        "A bike for two people is a tandem. 'Second-hand' means owned before.",
    },
  },
  'Wait a second.': {
    why: "'Wait a second' means 'wait a very short time'. Here 'second' is the small part of a minute.",
    not: {
      'two minutes exactly': "'A second' is not two minutes. She means a very short time.",
      'until the next day': 'A second is far shorter than a day.',
      'for one hour': 'An hour is three thousand six hundred seconds. She means a very short time.',
    },
  },
  'first thing in the morning': {
    why: "'First thing in the morning' means early in the morning, before you do anything else.",
    not: {
      "at one o'clock": "'First' does not mean one o'clock here. It means before other things.",
      'on the first day of the month':
        'It is about the start of one day, not the start of a month.',
      'in the first week': 'It is about the start of the morning, not a week.',
    },
  },
  'the second half': {
    why: "A football match has two halves. 'The second half' is the part after half-time.",
    not: {
      'in the second minute': 'That would be near the start of the match.',
      'twice in the game': "'Second' here gives the order of the halves, not the number of goals.",
      'in the next match': 'The second half is part of the same match.',
    },
  },
  'in its third week': {
    why: 'If the film is in its third week, two whole weeks have passed since it opened, and now the third week is going on.',
    not: {
      'It has been shown three times.':
        "A film is shown many times each week. 'Third week' counts weeks.",
      'It starts in three weeks.':
        "It is already on. 'In its third week' looks back to when it opened.",
      'It is on every third week.': 'It has been on all the time, for more than two weeks.',
    },
  },
  '4th out of 10': {
    why: 'If Leo is fourth, the people in first, second and third place did better: three people.',
    not: {
      'Four did better than him.': 'Four people above him would make Leo fifth.',
      'He got four marks out of ten.': "'Fourth' is his place, not his marks.",
      'He took the test four times.':
        "'Fourth' gives his place in the list, not how many times he took the test.",
    },
  },
  'for the hundredth time': {
    why: "'For the hundredth time' is a way of saying 'I have told you many times', usually when someone is annoyed. It is not an exact number.",
    not: {
      'She has told you exactly 100 times.':
        'The number is not meant to be exact. It means very many times.',
      'She has told you once.': 'She means she has told you again and again.',
      'She will tell you 100 times.':
        'It is about the times she has already told you, not the future.',
    },
  },
  'born first, born second': {
    why: 'Leila was born first, so she is the older twin, by the ten minutes between the two births.',
    not: {
      'Leila is ten minutes younger.': 'The twin born first is the older one.',
      'Her brother is older.': 'He was born second, ten minutes later, so he is younger.',
      'They were born an hour apart.': 'They were born ten minutes apart, not an hour.',
    },
  },
  '3:00': {
    why: "When the minutes are 00, we say the hour and then 'o'clock': three o'clock. 'O'clock' is short for 'of the clock'.",
    not: {
      'three thirty': 'Three thirty is 3:30, thirty minutes later.',
      'half past three': "Half past three is 3:30, thirty minutes after three o'clock.",
      'quarter past three': "Quarter past three is 3:15, fifteen minutes after three o'clock.",
    },
  },
  '3:15': {
    why: "Fifteen minutes is a quarter of the way round the clock. Fifteen minutes after three o'clock is 'quarter past three'.",
    not: {
      'quarter to three': "Quarter to three is 2:45, fifteen minutes before three o'clock.",
      'half past three': 'Half past three is 3:30. Here the minutes are 15.',
      'quarter past four': 'Quarter past four is 4:15. The hour here is three.',
    },
    tip: "'Past' means after the hour. 'To' means before the next hour.",
  },
  '3:30': {
    why: "The minute hand has gone halfway round the clock, so 3:30 is 'half past three'.",
    not: {
      'half past four': 'Half past four is 4:30. The hour here is three.',
      'quarter past three': 'Quarter past three is 3:15. Here the minutes are 30.',
      'quarter to four': 'Quarter to four is 3:45, later than half past.',
    },
  },
  '3:45': {
    why: "At 3:45 there are fifteen minutes left before four o'clock, so we count to the next hour: quarter to four.",
    not: {
      'quarter past four': "Quarter past four is 4:15, after four o'clock.",
      'quarter to three': 'Quarter to three is 2:45. Count to the next hour, four.',
      'quarter past three': 'Quarter past three is 3:15. Here the minutes are 45.',
    },
    tip: 'After half past, count the minutes to the next hour.',
  },
  '9:05': {
    why: "Five minutes after nine o'clock is 'five past nine'. We say the minutes, then 'past', then the hour.",
    not: {
      'five to nine': "Five to nine is 8:55, before nine o'clock.",
      'nine past five': 'Nine past five is 5:09. The hour here is nine.',
      'five past ten': 'Five past ten is 10:05. The hour here is nine.',
    },
  },
  '10:50': {
    why: "At 10:50 there are ten minutes left before eleven o'clock, so we say 'ten to eleven'.",
    not: {
      'ten past eleven': "Ten past eleven is 11:10, after eleven o'clock.",
      'ten to ten': 'Ten to ten is 9:50. Count to the next hour, eleven.',
      'ten past ten': 'Ten past ten is 10:10. Here the minutes are 50.',
    },
  },
  '6:20': {
    why: "Twenty minutes after six o'clock is 'twenty past six'.",
    not: {
      'twenty to six': "Twenty to six is 5:40, before six o'clock.",
      'twenty past seven': 'Twenty past seven is 7:20. The hour here is six.',
      'twenty to seven': 'Twenty to seven is 6:40. Here the minutes are 20.',
    },
  },
  '7:40': {
    why: "At 7:40 there are twenty minutes left before eight o'clock, so we say 'twenty to eight'.",
    not: {
      'twenty past eight': 'Twenty past eight is 8:20.',
      'twenty to seven': 'Twenty to seven is 6:40. Count to the next hour, eight.',
      'twenty past seven': 'Twenty past seven is 7:20. Here the minutes are 40.',
    },
  },
  '12:00': {
    why: "On a 24-hour clock 12:00 is the middle of the day, so we say 'twelve midday', or 'twelve noon'.",
    not: {
      'quarter past twelve': 'Quarter past twelve is 12:15.',
      'half past twelve': 'Half past twelve is 12:30.',
      'ten to twelve': 'Ten to twelve is 11:50, before twelve.',
    },
  },
  '2:25': {
    why: "Twenty-five minutes after two o'clock is 'twenty-five past two'. It is still before half past, so we use 'past'.",
    not: {
      'twenty-five to two': "Twenty-five to two is 1:35, before two o'clock.",
      'twenty-five past three': 'Twenty-five past three is 3:25. The hour here is two.',
      'half past two': 'Half past two is 2:30, five minutes later.',
    },
  },
  '8:35': {
    why: "At 8:35 there are twenty-five minutes left before nine o'clock, so we say 'twenty-five to nine'.",
    not: {
      'twenty-five past nine': 'Twenty-five past nine is 9:25.',
      'twenty-five to eight': 'Twenty-five to eight is 7:35. Count to the next hour, nine.',
      'twenty-five past eight': 'Twenty-five past eight is 8:25. Here the minutes are 35.',
    },
  },
  'quarter past seven': {
    why: "'Quarter past seven' is fifteen minutes after seven o'clock: 7:15.",
    not: {
      '7:45': '7:45 is quarter to eight.',
      '6:15': '6:15 is quarter past six. The hour here is seven.',
      '7:50': '7:50 is ten to eight.',
    },
  },
  'half past ten': {
    why: "'Half past ten' is thirty minutes after ten o'clock: 10:30.",
    not: {
      '10:15': '10:15 is quarter past ten.',
      '11:30': '11:30 is half past eleven.',
      '9:30': '9:30 is half past nine.',
    },
  },
  'quarter to five': {
    why: "'Quarter to five' is fifteen minutes before five o'clock, so the clock still shows four: 4:45.",
    not: {
      '5:45': "5:45 is quarter to six. 'To five' means before five o'clock.",
      '4:15': '4:15 is quarter past four.',
      '5:15': '5:15 is quarter past five.',
    },
  },
  '11:30': {
    why: "Thirty minutes after eleven o'clock is 'half past eleven'.",
    not: {
      'half past twelve': 'Half past twelve is 12:30.',
      'half past ten': 'Half past ten is 10:30.',
      'quarter past eleven': 'Quarter past eleven is 11:15.',
    },
  },
  '1:15': {
    why: "Fifteen minutes after one o'clock is 'quarter past one'.",
    not: {
      'quarter to one': "Quarter to one is 12:45, before one o'clock.",
      'quarter past two': 'Quarter past two is 2:15.',
      'half past one': 'Half past one is 1:30.',
    },
  },
  '8:45': {
    why: "At 8:45 there are fifteen minutes left before nine o'clock, so we say 'quarter to nine'.",
    not: {
      'quarter past nine': 'Quarter past nine is 9:15.',
      'quarter to eight': 'Quarter to eight is 7:45. Count to the next hour, nine.',
      'quarter past eight': 'Quarter past eight is 8:15.',
    },
  },
  '4:10': {
    why: "Ten minutes after four o'clock is 'ten past four'.",
    not: {
      'ten to four': "Ten to four is 3:50, before four o'clock.",
      'ten past five': 'Ten past five is 5:10.',
      'four past ten': 'Four past ten is 10:04. Say the minutes first, then the hour.',
    },
  },
  '5:55': {
    why: "At 5:55 there are five minutes left before six o'clock, so we say 'five to six'.",
    not: {
      'five past six': "Five past six is 6:05, after six o'clock.",
      'five to five': 'Five to five is 4:55. Count to the next hour, six.',
      'five past five': 'Five past five is 5:05.',
    },
  },
  'twenty past nine': {
    why: "'Twenty past nine' is twenty minutes after nine o'clock: 9:20.",
    not: {
      '9:40': '9:40 is twenty to ten.',
      '8:40': '8:40 is twenty to nine.',
      '8:20': '8:20 is twenty past eight. The hour here is nine.',
    },
  },
  'ten to three': {
    why: "'Ten to three' is ten minutes before three o'clock, so the clock still shows two: 2:50.",
    not: {
      '3:10': '3:10 is ten past three.',
      '3:50': "3:50 is ten to four. 'To three' means before three o'clock.",
      '2:10': '2:10 is ten past two.',
    },
  },
  'five past twelve': {
    why: "'Five past twelve' is five minutes after twelve o'clock: 12:05.",
    not: {
      '11:55': '11:55 is five to twelve.',
      '12:50': '12:50 is ten to one.',
      '11:05': '11:05 is five past eleven.',
    },
  },
  'twenty-five to seven': {
    why: "'Twenty-five to seven' is twenty-five minutes before seven o'clock, so the clock still shows six: 6:35.",
    not: {
      '7:25': '7:25 is twenty-five past seven.',
      '7:35': '7:35 is twenty-five to eight.',
      '6:25': '6:25 is twenty-five past six.',
    },
  },
  'half past twelve': {
    why: "'Half past twelve' is thirty minutes after twelve o'clock: 12:30.",
    not: {
      '12:15': '12:15 is quarter past twelve.',
      '11:30': '11:30 is half past eleven.',
      '1:30': '1:30 is half past one.',
    },
  },
  '7:05': {
    why: "Five minutes after seven o'clock is 'five past seven'.",
    not: {
      'five to seven': 'Five to seven is 6:55.',
      'seven past five': 'Seven past five is 5:07. Say the minutes first, then the hour.',
      'five past eight': 'Five past eight is 8:05.',
    },
  },
  '9:50': {
    why: "At 9:50 there are ten minutes left before ten o'clock, so we say 'ten to ten'.",
    not: {
      'ten past ten': 'Ten past ten is 10:10.',
      'ten to nine': 'Ten to nine is 8:50. Count to the next hour, ten.',
      'ten past nine': 'Ten past nine is 9:10.',
    },
  },
  'quarter to twelve': {
    why: "'Quarter to twelve' is fifteen minutes before twelve o'clock, so the clock still shows eleven: 11:45.",
    not: {
      '12:45': '12:45 is quarter to one.',
      '12:15': '12:15 is quarter past twelve.',
      '11:15': '11:15 is quarter past eleven.',
    },
  },
  '14:00': {
    why: 'On a 24-hour clock the afternoon hours go past 12. Take away 12 to get the 12-hour time: 14 take away 12 is 2, so 2:00 pm.',
    not: {
      '4:00 pm': '4:00 pm is 16:00. Take away 12 from 14, not 10.',
      '2:00 am': '2:00 am is 02:00, at night. 14:00 is in the afternoon.',
      '12:00 pm': '12:00 pm is midday, two hours earlier.',
    },
    tip: 'Any 24-hour time from 13:00 to 23:59 is pm: take away 12.',
  },
  '18:30': {
    why: '18 take away 12 is 6, and 18:30 is in the evening, so it is 6:30 pm.',
    not: {
      '8:30 pm': '8:30 pm is 20:30. Take away 12 from 18, not 10.',
      '6:30 am': '6:30 am is 06:30, in the morning. 18:30 is in the evening.',
      '8:30 am': '8:30 am is 08:30: a different hour, and in the morning.',
    },
  },
  '23:15': {
    why: '23 take away 12 is 11, and 23:15 is late at night, so it is 11:15 pm.',
    not: {
      '1:15 pm': '1:15 pm is 13:15. Take away 12, not 22.',
      '11:15 am': '11:15 am is in the morning. 23:15 is at night.',
      '11:50 pm': '11:50 pm is 23:50. The minutes here are 15.',
    },
  },
  '09:45': {
    why: 'Hours from 00 to 11 on a 24-hour clock are in the morning, so 09:45 is 9:45 am.',
    not: {
      '9:45 pm': '9:45 pm is 21:45. An hour of 09 means the morning.',
      '7:45 pm': '7:45 pm is 19:45. The hour here is 09.',
      '7:45 am': '7:45 am is 07:45. The hour here is 09.',
    },
  },
  '00:30': {
    why: 'On a 24-hour clock, 00 is the hour just after midnight. On a 12-hour clock that hour is called 12 am, so 00:30 is 12:30 am.',
    not: {
      '12:30 pm': '12:30 pm is lunchtime, 12:30 on a 24-hour clock. 00:30 is just after midnight.',
      '10:30 pm': '10:30 pm is 22:30, two hours before midnight.',
      '1:30 am': '1:30 am is 01:30, an hour later.',
    },
  },
  '21:00': {
    why: '21 take away 12 is 9, so 21:00 is 9:00 pm, in the evening.',
    not: {
      '9:00 am': '9:00 am is 09:00, in the morning.',
      '11:00 pm': '11:00 pm is 23:00. Take away 12 from 21, not 10.',
      '1:00 pm': '1:00 pm is 13:00.',
    },
  },
  '7:30 pm': {
    why: 'For a pm time, add 12 to the hour: 7 and 12 is 19, so 7:30 pm is 19:30.',
    not: {
      '17:30': '17:30 is 5:30 pm. Add 12 to 7, not 10.',
      '07:30': '07:30 is 7:30 am, in the morning.',
      '21:30': '21:30 is 9:30 pm.',
    },
  },
  '3:15 pm': {
    why: 'For a pm time, add 12 to the hour: 3 and 12 is 15, so 3:15 pm is 15:15.',
    not: {
      '13:15': '13:15 is 1:15 pm. Add 12 to 3, not 10.',
      '03:15': '03:15 is 3:15 am, in the night.',
      '15:45': '15:45 is 3:45 pm. The minutes here are 15.',
    },
  },
  '16:45': {
    why: "People read a 24-hour time as two numbers, the hour and then the minutes: 'sixteen forty-five'. Train announcements in the UK do this.",
    not: {
      'six forty-five': 'This leaves out the 1 of 16.',
      'sixty forty-five': 'The hour is sixteen, ten and six, not sixty.',
      'sixteen hundred and forty-five':
        "We do not say 'hundred and' between the hour and the minutes.",
    },
    more: "In everyday talk the same time is 'quarter to five'.",
  },
  '13:20': {
    why: "Read the hour, then the minutes: 'thirteen twenty'.",
    not: {
      'thirty twenty': "The hour is thirteen, ten and three, not thirty. Listen for 'teen'.",
      'three twenty': 'This leaves out the 1 of 13.',
      'thirteen hundred and twenty':
        "We do not say 'hundred and' between the hour and the minutes.",
    },
  },
  'half seven': {
    why: "In British English, 'half seven' is short for 'half past seven': 7:30.",
    not: {
      '6:30':
        "In German 'halb sieben' means 6:30, half an hour before seven. In British English 'half seven' is after seven.",
      '7:15': '7:15 is quarter past seven.',
      '17:30': '17:30 is half past five in the afternoon.',
    },
    tip: "Think of 'half seven' as 'half past seven' with 'past' left out.",
  },
  noon: {
    why: "Noon is twelve o'clock in the middle of the day, written 12:00 on a 24-hour clock.",
    not: {
      '00:00': "00:00 is midnight, twelve o'clock at night.",
      '6:00': "6:00 is six o'clock in the morning.",
      '24:00': '24:00 is sometimes used for midnight, at the very end of a day.',
    },
  },
  'half an hour': {
    why: 'An hour is sixty minutes, so half of it is thirty minutes.',
    not: {
      '15 minutes': 'Fifteen minutes is a quarter of an hour.',
      '50 minutes': 'Fifty minutes is nearly an hour. Half of sixty is thirty.',
      '2 hours': 'Two hours is much longer: a hundred and twenty minutes.',
    },
  },
  'a quarter of an hour': {
    why: 'An hour is sixty minutes, and a quarter is one of four equal parts. A quarter of sixty is fifteen.',
    not: {
      '25 minutes': 'Twenty-five minutes is more than a quarter.',
      '45 minutes': 'Forty-five minutes is three quarters of an hour.',
      '4 minutes':
        'A quarter is one of four parts, but the hour has sixty minutes: fifteen in each part.',
    },
  },
  'an hour and a half': {
    why: 'An hour is sixty minutes and a half of it is thirty more, so together they make ninety minutes.',
    not: {
      '150 minutes':
        '150 minutes is two and a half hours. An hour and a half is sixty minutes and thirty more.',
      '60 minutes': 'Sixty minutes is one hour. Add the half.',
      '30 minutes': 'Thirty minutes is only the half.',
    },
  },
  'three quarters of an hour': {
    why: 'A quarter of an hour is fifteen minutes, so three of them make forty-five minutes.',
    not: {
      '34 minutes':
        "The numbers in 'three quarters' are not the minutes. Three times fifteen is forty-five.",
      '75 minutes': 'Seventy-five minutes is an hour and a quarter.',
      '15 minutes': 'Fifteen minutes is one quarter. Here there are three.',
    },
  },
  '3 pm': {
    why: "'pm' is for times from twelve midday to midnight. 3 pm is three o'clock in the afternoon.",
    not: {
      'three in the morning': "That is 3 am. 'am' is for times from midnight to midday.",
      'three at night': "Three o'clock at night is 3 am, in the dark hours.",
      'three in the evening':
        "The evening starts at about six o'clock. Three o'clock is in the afternoon.",
    },
    more: "'am' and 'pm' come from Latin words that mean before midday and after midday.",
  },
  '7 am': {
    why: "'am' is for times from midnight to midday, so 7 am is seven o'clock in the morning.",
    not: {
      'seven in the evening': "That is 7 pm. 'pm' is for times after midday.",
      'seven at night': "Seven o'clock at night is 7 pm.",
      'seven in the afternoon': "Seven o'clock is too late for the afternoon, and it would be pm.",
    },
  },
  'eight fifteen': {
    why: "'Eight fifteen' gives the hour and then the minutes, as on a digital clock: 8:15.",
    not: {
      '8:50': "8:50 is 'eight fifty'. Listen for 'teen' or 'ty'.",
      '8:45': "8:45 is 'eight forty-five'.",
      '8:05': "8:05 is 'eight oh five'.",
    },
    more: "'Eight fifteen' and 'quarter past eight' are the same time.",
  },
  'six thirty': {
    why: "'Six thirty' gives the hour and then the minutes: 6:30.",
    not: {
      '6:03': "6:03 is 'six oh three'.",
      '6:13': "6:13 is 'six thirteen'. Listen for 'teen' or 'ty'.",
      '3:06': 'This puts the minutes before the hour. The hour comes first.',
    },
  },
  'nineteen hundred': {
    why: "In formal and military English, a 24-hour time on the hour is said with 'hundred': nineteen hundred is 19:00, seven in the evening.",
    not: {
      '09:00': "09:00 is 'oh nine hundred', nine in the morning.",
      '21:00': "21:00 is 'twenty-one hundred'.",
      '17:00': "17:00 is 'seventeen hundred', five in the afternoon.",
    },
  },
  '1:45 pm': {
    why: 'For a pm time, add 12 to the hour: 1 and 12 is 13, so 1:45 pm is 13:45.',
    not: {
      '11:45': '11:45 is in the morning. Add 12 to 1, not 10.',
      '01:45': '01:45 is 1:45 am, in the night.',
      '13:15': '13:15 is 1:15 pm. The minutes here are 45.',
    },
  },
  '20:20': {
    why: '20 take away 12 is 8, so 20:20 is 8:20 pm, in the evening.',
    not: {
      '8:20 am': '8:20 am is 08:20, in the morning.',
      '10:20 pm': '10:20 pm is 22:20. Take away 12 from 20, not 10.',
      '2:20 pm': '2:20 pm is 14:20.',
    },
  },
  'half-past six': {
    why: "'Half-past six' is an older way to write 'half past six', with a hyphen: thirty minutes after six o'clock. Snowball is calling the animals together early, before a long day's work.",
    not: {
      '5:30':
        "Some languages count the half hour towards the next hour, but in English 'half past six' is after six o'clock.",
      '6:15': '6:15 is quarter past six.',
      '7:30': '7:30 is half past seven.',
    },
  },
  'five o’clock in the afternoon': {
    why: "Afternoon hours are past 12 on a 24-hour clock: add 12 to 5, and five o'clock in the afternoon is 17:00.",
    not: {
      '05:00': "05:00 is five o'clock in the morning.",
      '15:00': "15:00 is three o'clock in the afternoon. Add 12 to 5, not 10.",
      '07:00': "07:00 is seven o'clock in the morning.",
    },
    more: 'On this day Jane goes back to Gateshead, the house where she grew up.',
  },
  'half-past one': {
    why: 'Half past one in the afternoon is 1:30 pm. Add 12 to the hour for the 24-hour clock: 13:30.',
    not: {
      '01:30': '01:30 is half past one at night. Dinner here is in the afternoon.',
      '12:30': '12:30 is half past twelve.',
      '14:30': '14:30 is half past two.',
    },
    more: "In Pip's home 'dinner' is the big meal in the middle of the day, as it was for many families then.",
  },
  '19:45 + 2 hours': {
    why: 'Two hours after 19:45 is 21:45. Take away 12, and the film finishes at 9:45 pm.',
    not: {
      '7:45 pm': '7:45 pm is 19:45, when the film starts.',
      '11:45 pm': 'That is four hours after the start. The film lasts two.',
      '9:45 am': '9:45 am is in the morning. The film is in the evening.',
    },
  },
  'school at 08:45': {
    why: 'The 08:05 bus arrives at 08:40, before school starts. The next bus arrives at 08:55, too late.',
    not: {
      'the 08:20': 'It arrives at 08:55, ten minutes after school starts.',
      'the 07:50': 'It gets you there in time, but it is not the last bus that does.',
      'the 08:35': 'It arrives at 09:10, much too late.',
    },
    more: "People in the UK often name a bus or a train by its time: 'the eight oh five'.",
  },
  'the 07:50 bus': {
    why: 'The bus leaves at 07:50 and arrives at 08:25. From 07:50 to 08:00 is 10 minutes, and from 08:00 to 08:25 is 25 more: 35 minutes.',
    not: {
      '25 minutes': 'That is only from 08:00 to 08:25. Add the 10 minutes before eight.',
      '45 minutes': "Count again: 10 minutes to eight o'clock, then 25 more.",
      '75 minutes':
        'This takes 750 from 825 as if they were ordinary numbers. An hour has sixty minutes, not a hundred.',
    },
  },
  'York by 4 pm': {
    why: "Four o'clock in the afternoon is 16:00. The 15:10 arrives at 15:45, in time; the 15:40 arrives at 16:05, too late.",
    not: {
      'the 15:40': "It arrives at 16:05, five minutes after four o'clock.",
      'the 14:35': 'It arrives in time, but it is not the latest train that does.',
      'the 16:10': "It leaves after four o'clock, so it is far too late.",
    },
  },
  'the 15:40 train': {
    why: 'The train leaves at 15:40 and arrives at 16:05. From 15:40 to 16:00 is 20 minutes, and 5 more makes 25.',
    not: {
      '35 minutes': "Count again: 20 minutes to four o'clock, then 5 more.",
      '65 minutes':
        'This takes 1540 from 1605 as if they were ordinary numbers. An hour has sixty minutes.',
      '15 minutes': 'That is too short. From 15:40 to 16:00 alone is 20 minutes.',
    },
  },
  'closes 17:30, arrive 5:45': {
    why: '17:30 is half past five in the afternoon. Quarter to six is fifteen minutes later, so the shop has already closed.',
    not: {
      'It is open for fifteen more minutes.':
        '17:30 is half past five, and quarter to six is after that, so the shop is closed.',
      'It closes at half past seven.': '17:30 is half past five. Take away 12 from 17, not 10.',
      'It closed two hours ago.': 'It closed only fifteen minutes before you arrived.',
    },
  },
  'half nine': {
    why: "'Half nine' is British English for 'half past nine': 9:30.",
    not: {
      '8:30':
        'Speakers of German and Dutch say the half before the hour, so they may think of 8:30. In English it is half past nine.',
      '9:15': '9:15 is quarter past nine.',
      '9:50': '9:50 is ten to ten.',
    },
  },
  '24/7': {
    why: "'24/7' means twenty-four hours a day, seven days a week: the shop never closes.",
    not: {
      'on 24 July': 'It is not a date. The 24 is hours and the 7 is days.',
      '24 hours a week': 'The 24 is the hours in a day, not in a week.',
      'from 7 am to midnight': "That is seventeen hours. '24/7' is all day, and every day.",
    },
  },
  '10:40 to 11:35': {
    why: 'From 10:40 to 11:00 is 20 minutes, and from 11:00 to 11:35 is 35 more: 55 minutes.',
    not: {
      '95 minutes':
        'This takes 1040 from 1135 as if they were ordinary numbers. An hour has sixty minutes, not a hundred.',
      '1 hour 5 minutes': 'The lesson is shorter than an hour: it ends before 11:40.',
      '45 minutes': "Count again: 20 minutes to eleven o'clock, then 35 more.",
    },
  },
  'due 13:50, 20 minutes late': {
    why: 'Count on twenty minutes from 13:50: ten minutes takes you to 14:00, and ten more to 14:10.',
    not: {
      '13:30': "13:30 is twenty minutes earlier. 'Late' means after the time it was due.",
      '14:00': '14:00 is only ten minutes late.',
      '14:20': '14:20 is thirty minutes late.',
    },
  },
  earliest: {
    why: 'In figures the times are 7:45, 7:20, 7:30 and 7:50. The earliest is 7:20: twenty past seven.',
    not: {
      'quarter to eight': 'Quarter to eight is 7:45, later than twenty past seven.',
      'half past seven': 'Half past seven is 7:30, ten minutes later.',
      'ten to eight': 'Ten to eight is 7:50, the latest of these.',
    },
    tip: 'Put each time into figures first. Then they are easy to put in order.',
  },
  latest: {
    why: 'In figures the times are 9:10, 8:45, 8:30 and 9:25. The latest is 9:25: twenty-five past nine.',
    not: {
      'ten past nine': 'Ten past nine is 9:10, earlier than 9:25.',
      'quarter to nine': "Quarter to nine is 8:45, before nine o'clock.",
      'half past eight': 'Half past eight is 8:30, the earliest of these.',
    },
  },
  '23:45 to midnight': {
    why: 'Midnight is 00:00, the minute after 23:59. From 23:45 there are fifteen minutes left: a quarter of an hour.',
    not: {
      'three quarters of an hour':
        'That is forty-five minutes. The 45 is the minutes already gone in this hour.',
      'half an hour': 'Half an hour is thirty minutes, too long.',
      'an hour and a quarter': 'That is seventy-five minutes, far too long.',
    },
  },
  'school ends ten past three': {
    why: 'Ten past three in the afternoon is 3:10 pm. Add 12 to the hour: 15:10.',
    not: {
      '03:10': '03:10 is ten past three at night.',
      '13:10': '13:10 is ten past one. Add 12 to 3, not 10.',
      '15:50': "15:50 is ten to four. 'Ten past' means ten minutes after three.",
    },
  },
  '08:40 appointment': {
    why: 'Count back 25 minutes from 08:40: 20 minutes back is 08:20, and 5 more is 08:15.',
    not: {
      '08:05': 'That is 35 minutes before, ten minutes more than you need.',
      '09:05': '09:05 is after the appointment. Count back, not on.',
      '08:25': 'That is only 15 minutes before. The journey takes 25.',
    },
  },
  '2 am, clocks go back': {
    why: "When the clocks 'go back', they move one hour back. At 2 am they change to 1 am, so that night has an extra hour.",
    not: {
      '3 am': 'That would be going forward. In October the clocks go back.',
      '2 pm': '2 pm is in the afternoon. The change happens at night.',
      '1 pm': '1 pm is in the afternoon. The change is to 1 am.',
    },
    more: "People remember it with 'spring forward, fall back'. 'Fall' is the American word for autumn.",
  },
  '1 am, clocks go forward': {
    why: "When the clocks 'go forward', they move one hour on. At 1 am they change to 2 am, so that night is one hour shorter.",
    not: {
      '12 am': 'That would be going back. In March the clocks go forward.',
      '1 pm': '1 pm is in the afternoon. The change happens at night.',
      '2 pm': '2 pm is in the afternoon. The change is to 2 am.',
    },
  },
  'every 20 minutes from 7:10': {
    why: 'Count on in twenties from 7:10: 7:30, 7:50, 8:10. Of the times given, only 7:50 is a bus time.',
    not: {
      '7:40': 'Count in twenties from 7:10. 7:40 is not one of the times.',
      '7:20': '7:20 is only ten minutes after 7:10.',
      '8:00': 'After 7:50 the next bus is at 8:10, not 8:00.',
    },
  },
  'quarter to two + 10 minutes': {
    why: "Quarter to two is 1:45. Ten minutes later is 1:55, which is five minutes before two o'clock: five to two.",
    not: {
      'quarter past two': 'Quarter past two is 2:15, thirty minutes after 1:45.',
      'twenty-five to two': 'Twenty-five to two is 1:35, ten minutes earlier, not later.',
      'ten to two': 'Ten to two is 1:50, only five minutes later.',
    },
  },
  '12:15 to 13:00': {
    why: "From 12:15 to 13:00 is from quarter past twelve to one o'clock: forty-five minutes.",
    not: {
      '85 minutes':
        'This takes 1215 from 1300 as if they were ordinary numbers. An hour has sixty minutes, not a hundred.',
      '1 hour 15 minutes': "Lunch is shorter than an hour: it ends at one o'clock.",
      '15 minutes': 'Fifteen minutes would end at 12:30.',
    },
  },
  'the same as 18:00': {
    why: "18 take away 12 is 6, so 18:00 is six o'clock in the evening.",
    not: {
      'eight in the evening': 'Eight in the evening is 20:00. Take away 12 from 18, not 10.',
      'six in the morning': 'Six in the morning is 06:00.',
      'eight in the morning': 'Eight in the morning is 08:00.',
    },
  },
  'a quarter of an hour from 2:50': {
    why: 'A quarter of an hour is fifteen minutes. From 2:50, ten minutes takes you to 3:00, and five more to 3:05.',
    not: {
      '3:15': '3:15 is twenty-five minutes after 2:50.',
      '3:20': '3:20 is thirty minutes after 2:50.',
      '2:55': '2:55 is only five minutes later.',
    },
  },
  'cake in at 4:35, 40 minutes': {
    why: 'From 4:35, twenty-five minutes takes you to 5:00, and fifteen more makes forty: 5:15.',
    not: {
      '5:05': '5:05 is only thirty minutes after 4:35.',
      '5:35': '5:35 is an hour after 4:35.',
      '4:55': '4:55 is only twenty minutes after 4:35.',
    },
  },
  'Joe at the Bargemen': {
    why: "'A quarter after eight' is 8:15 and 'a quarter before ten' is 9:45. From 8:15 to 9:45 is ninety minutes.",
    not: {
      'two hours': 'From 8:15, two hours would end at 10:15. He left at 9:45.',
      'an hour and a quarter': 'That would end at 9:30, fifteen minutes too early.',
      'half an hour': 'Half an hour would end at 8:45.',
    },
    more: "Dickens writes 'a quarter after' and 'a quarter before'. Today British English says 'quarter past' and 'quarter to'.",
  },
  'back by eight': {
    why: "It was already half past seven, and Jane had to be back by eight o'clock, thirty minutes later.",
    not: {
      'an hour and a half': 'That would be from half past six. It was already half past seven.',
      'a quarter of an hour': 'Fifteen minutes would take her only to quarter to eight.',
      'eight minutes': "'By eight' means by eight o'clock, not in eight minutes.",
    },
    more: "'Rules obliged me' means the school rules made her do it.",
  },
  'just gone half-past two': {
    why: "'Just gone' is British English for 'a little after'. Just gone half past two is a minute or two after 2:30, so 2:32 fits.",
    not: {
      '2:28': "2:28 is just before half past two. 'Just gone' means just after.",
      '3:30': '3:30 is half past three, an hour later.',
      '2:15': '2:15 is quarter past two, before half past.',
    },
  },
  'almost five o’clock': {
    why: "'Almost five o'clock' means a little before five. 'Tis' is an old way to say 'it is'. Of these times, only 4:55 is just before five.",
    not: {
      '5:05': "5:05 is just after five. 'Almost' means not yet.",
      '5:30': '5:30 is half an hour after five.',
      '4:15': "4:15 is quarter past four, much earlier than 'almost five'.",
    },
    more: "Beatrice is telling her cousin Hero that it is time to get ready for Hero's wedding.",
  },
  '1 May': {
    why: "We say a date with 'the', an ordinal and 'of': the first of May. You can also say 'May the first'.",
    not: {
      'the one of May': "'One' is a counting number. A date takes the ordinal.",
      'the first of March': "The month is May, not March. Both begin with 'Ma'.",
      'the first May': "In speech the date needs 'of' after the ordinal.",
    },
  },
  '3 June': {
    why: "3 is 'third' in a date, so 3 June is 'the third of June'.",
    not: {
      'the thirtieth of June': "'Thirtieth' is 30. The date here is 3.",
      'the third of July': "The month is June. June and July both begin with 'Ju'.",
      'the three of June': "'Three' is a counting number. A date takes the ordinal.",
    },
  },
  '22 March': {
    why: 'In a date only the last part of the number becomes an ordinal: twenty-two becomes twenty-second.',
    not: {
      'the twenty-two of March': "'Twenty-two' is a counting number. A date takes the ordinal.",
      'the second of March': "'The second' is 2 March. The date here is 22.",
      'the twenty-second of May': 'The month is March, not May.',
    },
  },
  '31 December': {
    why: "Thirty-one becomes 'thirty-first' in a date. This is the last day of December, and of the year.",
    not: {
      'the thirteenth of December': "'Thirteenth' is 13. The date here is 31.",
      'the thirty-one of December': "'Thirty-one' is a counting number. A date takes the ordinal.",
      'the thirty-first of November': 'The month is December. November has only thirty days.',
    },
  },
  '15 August': {
    why: "Fifteen becomes 'fifteenth' in a date, so 15 August is 'the fifteenth of August'.",
    not: {
      'the fifteen of August': "'Fifteen' is a counting number. A date takes the ordinal.",
      'the fifth of August': "'The fifth' is 5 August. The date here is 15.",
      'August the fifteen': 'We can put the month first, but the date still needs the ordinal.',
    },
  },
  'the second of April': {
    why: "'The second' is 2, and the month is April, so the date is 2 April.",
    not: {
      '4 February': 'This turns both into month numbers: April is month 4 and February is month 2.',
      '20 April': "20 is 'the twentieth', not 'the second'.",
      '2 August': "The month is April, not August. Both begin with 'A'.",
    },
  },
  '1960s': {
    why: "The 1960s are the years from 1960 to 1969. We say 'the nineteen sixties', with an 's' on the end.",
    not: {
      'the nineteen sixty': "That is one year, 1960. The 's' means all ten years.",
      'the nineteen sixteen': "That would be 1916. Listen for 'ty' or 'teen'.",
      'the sixteen nineties': 'That is the 1690s, the figures the other way round.',
    },
  },
  '1800s': {
    why: 'People call the 1800s the nineteenth century. The number of the century is one more than the hundreds: 18 and 1.',
    not: {
      'the eighteenth century':
        'This is the most common mistake. The eighteenth century is the 1700s.',
      'the twentieth century': 'The twentieth century is the 1900s.',
      'the seventeenth century': 'The seventeenth century is the 1600s.',
    },
  },
  '1 January 2000': {
    why: "Say the date with an ordinal and 'of', then the year: the first of January, two thousand.",
    not: {
      'the one of January, two thousand': "'One' is a counting number. A date takes the ordinal.",
      'the first of January, twenty hundred': "We do not say 'twenty hundred' for 2000.",
      'January the one, two thousand':
        'We can put the month first, but the date still needs the ordinal.',
    },
  },
  '21st century': {
    why: 'The first century was the years 1 to 100, so the twenty-first century is 2001 to 2100.',
    not: {
      '2100 to 2199': 'Those years are almost all in the twenty-second century.',
      '1901 to 2000': 'Those years are the twentieth century.',
      '2010 to 2020': 'That is only about ten years. A century is a hundred years.',
    },
    more: 'In everyday talk many people say the century began in 2000.',
  },
  '4th of May, 1882': {
    why: "Say the date with the ordinal, 'fourth', and the year in two halves: eighteen eighty-two.",
    not: {
      'the four of May, eighteen eighty-two': "'Four' is a counting number. '4th' is the ordinal.",
      'the fourth of May, eighty-two eighteen': 'The halves of the year are the wrong way round.',
      'the fourteenth of May, eighteen eighty-two':
        "'Fourteenth' is 14th. The date here is the 4th.",
    },
  },
  'born 2010, birthday 2025': {
    why: 'From 2010 to 2025 is fifteen years, so Leo turns fifteen on his birthday that year.',
    not: {
      fifty: "Fifty is 50. Listen for 'teen' or 'ty'.",
      sixteen: 'Count again: 2025 take away 2010 is 15.',
      fourteen: 'Count again: from 2010 to 2025 is fifteen years.',
    },
  },
  'in the eighties': {
    why: "'The eighties' here means the years 1980 to 1989. Mum was a teenager then, so it cannot be the 1880s.",
    not: {
      'in the 1880s': 'That is more than a hundred years ago, far too long for a mum.',
      'in the 1990s': "The 1990s are 'the nineties'.",
      'in 1918': '1918 is one year, not ten, and it is more than a hundred years ago.',
    },
  },
  '2015, a decade ago': {
    why: 'A decade is ten years. Ten years before 2015 is 2005.',
    not: {
      'in 2014': 'That is one year before, not ten.',
      'in 1915': 'That is a hundred years before, a century.',
      'in 2025': "'Ago' looks back into the past, not forward.",
    },
  },
  'September 9th': {
    why: "'9th' is 'ninth', so we say 'the ninth of September'. Old letters and diaries often put the month first, as here.",
    not: {
      'September the nine': 'We can put the month first, but the date still needs the ordinal.',
      'the nineteenth of September': "'Nineteenth' is 19th. The date here is 9th.",
      'the nine of September': "'Nine' is a counting number. A date takes the ordinal.",
    },
  },
  'earliest date': {
    why: 'January is the first month, so the January dates come first, and the second comes before the third.',
    not: {
      'the first of March': 'March is the third month, so this date is the latest of the four.',
      'the third of January': 'This is in January too, but one day after the second.',
      'the first of February': 'February comes after January.',
    },
  },
  'centenary of 1926': {
    why: 'A centenary comes a hundred years after the start. 1926 and 100 years make 2026.',
    not: {
      '1936': 'That is only ten years later, a decade.',
      '2016': 'That is ninety years later.',
      '2126': 'That is two hundred years after 1926.',
    },
  },
  'the middle of the 1950s': {
    why: 'The 1950s are the years 1950 to 1959. The middle of them is about 1955.',
    not: {
      '1905': '1905 is in the 1900s, fifty years earlier.',
      '1950': '1950 is the start of the decade, not the middle.',
      '1995': '1995 is in the 1990s.',
    },
  },
  '1 July 2026': {
    why: "Say the date with an ordinal and 'of', then the year in two halves: the first of July, twenty twenty-six.",
    not: {
      'the first July, twenty twenty-six': "In speech the date needs 'of' after the ordinal.",
      'the one of July, twenty twenty-six': "'One' is a counting number. A date takes the ordinal.",
      'July the one, twenty twenty-six':
        'We can put the month first, but the date still needs the ordinal.',
    },
  },
}
