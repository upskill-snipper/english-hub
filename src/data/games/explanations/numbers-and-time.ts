import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Numbers & Time: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/numbers-and-time.ts). Written with AI on
 * 16 October 2026 and checked against each question and its options, as the
 * founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  '7': {
    why: "The number 7 is 'seven'. You say it in two parts: SEV-en. You can say: I have seven books in my bag.",
    not: {
      seventy: "Seventy is 70, ten times bigger. 'Seven' has no '-ty' ending.",
      seventeen: "Seventeen is 17. The ending '-teen' means ten more than seven.",
      eleven: 'Eleven is 11, which is ten and one. It is a different number.',
    },
    more: "Numbers that end in '-teen' are 13 to 19. Numbers that end in '-ty' are the tens: 20, 30, 40.",
    tip: 'Listen for the stress: sev-en-TEEN (17) has the stress at the end, but SEV-en-ty (70) has it at the start.',
  },
  '13': {
    why: "The number 13 is 'thirteen'. It is 'three' and 'teen' joined, but 'three' changes to 'thir'. You can say: She is thirteen years old.",
    not: {
      thirty: "Thirty is 30. The ending '-ty' means three tens, not ten and three.",
      thirteenth:
        'Thirteenth is the ordinal, 13th, which shows order. The question asks for the number.',
      three: 'Three is 3. The number shown is 13.',
    },
    more: "Say 'thirteen' with the stress on 'teen', and 'thirty' with the stress on 'thir'.",
    tip: "Learn 'thir' as the special start of thirteen (13) and thirty (30).",
  },
  '15': {
    why: "The number 15 is 'fifteen'. The word 'five' changes to 'fif' before 'teen'. You can say: I am fifteen years old.",
    not: {
      fifty: "Fifty is 50. The ending '-ty' means five tens, not ten and five.",
      five: 'Five is only 5. The number shown is 15.',
      fortyfive:
        "'Fortyfive' is a wrong way to write 45, and it needs a hyphen. The number shown is 15.",
    },
    more: "'Five' changes to 'fif' in 'fifteen' and 'fifty'. The same happens with 'three': thirteen and thirty.",
    tip: "Write 'fifteen' with 'fif', not 'fiveteen'. 'Fiveteen' is a common mistake.",
  },
  '21': {
    why: "The number 21 is twenty and one, so 'twenty-one'. We join the tens and the units with a hyphen. You can say: My sister is twenty-one.",
    not: {
      twelve: 'Twelve is 12. The digits are the other way round.',
      'two-one': "'Two-one' says the digits one by one. We say the tens first: twenty-one.",
      'twenty-first':
        'Twenty-first is the ordinal, 21st, which shows order. The question asks for the number.',
    },
    more: 'From 21 to 99 we join the tens and the units with a hyphen: twenty-one, thirty-five, ninety-nine.',
    tip: 'Say it as two parts: twenty, then one.',
  },
  '30': {
    why: "The number 30 is 'thirty'. The ending '-ty' means tens, so it is three tens. You can say: There are thirty students in my class.",
    not: {
      thirteen: 'Thirteen is 13, which is ten and three. The number shown is 30.',
      three: 'Three is 3, ten times smaller than 30.',
      thirtieth:
        'Thirtieth is the ordinal, 30th, which shows order. The question asks for the number.',
    },
    more: "Say 'thirty' with the stress at the start: THIR-ty.",
    tip: "Use the ending to check: '-ty' means tens (20, 30, 40) and '-teen' means 13 to 19.",
  },
  '40': {
    why: "The number 40 is 'forty'. It is four tens, but the spelling has no 'u'. You can say: My teacher is forty years old.",
    not: {
      fourty: "'Fourty' is a very common wrong spelling. We write 'forty' without a 'u'.",
      fourteen: "Fourteen is 14. It keeps the 'u' and ends in '-teen'.",
      four: 'Four is only 4.',
    },
    more: "'Four' and 'fourteen' are related to 40, but only 'forty' loses the 'u'.",
    tip: "Remember: four and fourteen keep the 'u', but forty does not.",
  },
  '47': {
    why: "A number over 20 joins the tens and the units with a hyphen. 47 is forty and seven, so 'forty-seven'. You can say: There are forty-seven students.",
    not: {
      'fourty-seven': "'Fourty' is a wrong spelling. The tens word is 'forty', with no 'u'.",
      'seventy-four': 'Seventy-four is 74. The digits are the other way round.',
      'forty-eleven':
        "'Forty-eleven' is not a number. After the tens we add one digit from 1 to 9.",
    },
    more: "'Four' and 'fourteen' keep the 'u', but 'forty' does not.",
    tip: 'Say the tens first and then the units: forty, seven.',
  },
  '50': {
    why: "The number 50 is 'fifty'. The ending '-ty' means tens, so it is five tens. You can say: The ticket costs fifty pounds.",
    not: {
      fifteen: "Fifteen is 15. It ends in '-teen', so it is ten and five.",
      'five hundred': 'Five hundred is 500, which is ten times bigger than 50.',
      five: 'Five is only 5.',
    },
    more: "'Fifty' starts with 'fif', like 'fifteen'. It does not have the word 'five' inside it.",
    tip: "Say 'fifty' with the stress at the start and 'fifteen' with the stress at the end.",
  },
  '66': {
    why: "The number 66 is six tens and six, so 'sixty-six'. You can say: He is sixty-six years old.",
    not: {
      'sixteen-six':
        "'Sixteen' is 16. The tens here is 'sixty', and 'sixteen-six' is not a number.",
      'sixty-sixth':
        'Sixty-sixth is the ordinal, 66th, which shows order. The question asks for the number.',
      'six-six': "'Six-six' says the digits one by one. We say the tens word first: sixty-six.",
    },
    more: "Say 'sixty' with the stress at the start, SIX-ty, and 'sixteen' with the stress at the end, six-TEEN.",
    tip: 'Break the number into tens and units: 66 is 60 and 6.',
  },
  '82': {
    why: "82 is eight tens and two, so 'eighty-two'. We say the tens first and then the units. You can say: My grandfather is eighty-two.",
    not: {
      'eighteen-two':
        "'Eighteen' is 18. The tens here is 'eighty', and 'eighteen-two' is not a number.",
      'twenty-eight': 'Twenty-eight is 28. The digits are the other way round.',
      'eighty-twelve':
        "'Eighty-twelve' is not a number. After eighty we add one digit from 1 to 9.",
    },
    more: "The words 'eight', 'eighteen' and 'eighty' all start with 'eigh'.",
    tip: 'Break a number into tens and units: 82 is 80 and 2.',
  },
  '90': {
    why: "The number 90 is 'ninety'. It is nine tens. You can say: Ninety people came to the party.",
    not: {
      nineteen: "Nineteen is 19. It ends in '-teen', so it is ten and nine.",
      ninty: "'Ninty' leaves out the 'e'. The correct spelling is 'ninety'.",
      nine: 'Nine is only 9.',
    },
    more: "'Nine' keeps its 'e' in 'ninety' and 'nineteen', but it loses it in 'ninth'.",
    tip: "Write 'ninety' with an 'e' after 'nin': n, i, n, e, t, y.",
  },
  '100': {
    why: "The number 100 is 'one hundred'. A hundred is ten tens. You can say: There are one hundred students in the hall.",
    not: {
      'one thousand': 'One thousand is 1,000, ten times bigger than 100.',
      'a hundredth':
        "'A hundredth' is one part in a hundred, or the ordinal 100th. It is not the number 100.",
      'ten hundred': "'Ten hundred' would be 1,000, not 100.",
    },
    more: "We can say 'a hundred' as well as 'one hundred'. The word 'hundred' never takes an 's' after a number: two hundred, not two hundreds.",
    tip: "Remember that 'hundred' stays the same: three hundred, five hundred, nine hundred.",
  },
  '305': {
    why: "305 is 300 and 5, so 'three hundred and five'. In British English we say 'and' after 'hundred'. You can say: The book has three hundred and five pages.",
    not: {
      'three hundred and fifty': 'That is 350. The last two digits here are 05, not 50.',
      'three thousand and five': 'That is 3,005. The number here has hundreds, not thousands.',
      'thirty-five': 'Thirty-five is 35. The number here has a hundreds digit.',
    },
    more: 'The zero in 305 means there are no tens. We do not say it: three hundred and five.',
    tip: "Say the hundreds, then 'and', then the last part: three hundred and five.",
  },
  '1999': {
    why: "We usually say a year in two parts: 19 and 99. So 1999 is 'nineteen ninety-nine'. You can say: He was born in nineteen ninety-nine.",
    not: {
      'one thousand nine hundred': 'That says 1,900. It leaves out the 99.',
      'nineteen nine nine': "'Nine nine' says the last digits one by one. They make 'ninety-nine'.",
      'one nine ninety-nine':
        "That mixes digits and words. We say the first two digits together: 'nineteen'.",
    },
    more: "Years from 1100 to 1999 are said in two parts, such as 'eighteen fifty' (1850) and 'nineteen sixty-six' (1966).",
    tip: 'Split a year into two pairs of digits: 19 and 99.',
  },
  '2008': {
    why: "Years from 2000 to 2009 are said as 'two thousand' and the last digit. 2008 is 'two thousand and eight'. In British English we say 'and'. You can say: I was born in two thousand and eight.",
    not: {
      'twenty eight': "'Twenty eight' is 28, not 2008.",
      'two thousand eighty': "'Two thousand eighty' is 2080, not 2008.",
      'twenty oh eighty':
        "'Twenty oh eighty' contains 'eighty', which is 80. The last part of 2008 is only 'eight'.",
    },
    more: "Some people say 'twenty oh eight' for 2008, but 'two thousand and eight' is the usual British way. From 2010 we can say 'twenty ten' or 'two thousand and ten'.",
    tip: "For 2001 to 2009, say 'two thousand and' and then the last digit.",
  },
  '1,000': {
    why: "The number 1,000 is 'one thousand'. The comma shows the thousands. You can say: The school has one thousand students.",
    not: {
      'one hundred': 'One hundred is 100, ten times smaller than 1,000.',
      'ten thousand': 'Ten thousand is 10,000, ten times bigger than 1,000.',
      'one million': 'One million is 1,000,000, a thousand times bigger than 1,000.',
    },
    more: 'In English a comma separates the thousands: 1,000, 10,000, 100,000. Some countries use a full stop or a space instead.',
    tip: 'Count the zeros: 1,000 has three zeros, and one million has six.',
  },
  sixteen: {
    why: "'Sixteen' is ten and six, so the number is 16. The ending '-teen' means a number from 13 to 19. You can say: She is sixteen.",
    not: {
      '6': "6 is 'six'. 'Sixteen' is bigger than six.",
      '60': "60 is 'sixty'. It ends in '-ty', so it is six tens.",
      '60,000': "60,000 is 'sixty thousand'. That is much bigger than sixteen.",
    },
    more: "'Sixteen' and 'sixty' look alike, but they are different numbers. Listen for the stress.",
    tip: "Check the ending: '-teen' means the number starts with 1, and '-ty' means it ends with 0.",
  },
  'ninety-nine': {
    why: "'Ninety-nine' is ninety (90) and nine (9), so the number is 99. You can say: There are ninety-nine students.",
    not: {
      '19': "19 is 'nineteen'. The word here is 'ninety', which is nine tens.",
      '90': "90 is 'ninety'. The words here add 'nine', so the number is 99.",
      '909': "909 is 'nine hundred and nine'. The words 'ninety-nine' have no 'hundred'.",
    },
    more: '99 is the biggest number with two digits. The next number is one hundred.',
    tip: 'Write the tens digit first and then the units digit: 9 and 9.',
  },
  'two hundred and twelve': {
    why: "'Two hundred' is 200 and 'twelve' is 12, so the number is 212. In British English we say 'and' before the last part. You can say: The book has two hundred and twelve pages.",
    not: {
      '220': "220 is 'two hundred and twenty'. The words end in 'twelve', not 'twenty'.",
      '2,012': "2,012 is 'two thousand and twelve'. There is no 'thousand' in these words.",
      '2,120': "2,120 is 'two thousand, one hundred and twenty'. The words here say 'two hundred'.",
    },
    more: "Listen to 'twelve' (12) and 'twenty' (20). They sound different at the end.",
    tip: 'Write the hundreds first, then the last two digits: 2, then 12.',
  },
  '1st': {
    why: "The ordinal for 1 is 'first'. It is irregular, so it is not 'oneth'. You can say: She came first in the race.",
    not: {
      oneth: "'Oneth' does not exist. The number 1 has a special form: 'first'.",
      fourth: 'Fourth is 4th. The number shown is 1st.',
      once: "'Once' means one time, as in 'I went once'. It is not an ordinal.",
    },
    more: "Ordinals show order. The first three are irregular: first, second, third. After that we usually add 'th' to the number word.",
    tip: 'Learn the first three ordinals by heart: first, second, third.',
  },
  '2nd': {
    why: "The ordinal for 2 is 'second'. It is irregular. You can say: He came second in the race.",
    not: {
      twoth: "'Twoth' does not exist. The ordinal for 2 is 'second'.",
      twelfth: 'Twelfth is 12th. The number shown is 2nd.',
      twentieth: 'Twentieth is 20th. The number shown is 2nd.',
    },
    more: "'Second' is also a small unit of time: sixty seconds make a minute.",
    tip: 'The two letters after the number are the last two letters of the word: 2nd, second.',
  },
  '3rd': {
    why: "The ordinal for 3 is 'third'. It is irregular. You can say: My birthday is on the third of June.",
    not: {
      threeth: "'Threeth' does not exist. The ordinal for 3 is 'third'.",
      thirteenth: 'Thirteenth is 13th. The number shown is 3rd.',
      thirtieth: 'Thirtieth is 30th. The number shown is 3rd.',
    },
    more: "'Third' also means one of three equal parts: a third of the cake.",
    tip: "Notice that 'third' starts with 'thir', like 'thirteen' and 'thirty'.",
  },
  '5th': {
    why: "The ordinal for 5 is 'fifth'. The 've' of 'five' changes to 'f' before 'th'. You can say: She sits in the fifth row.",
    not: {
      fiveth: "'Fiveth' does not exist. The 've' changes to 'f': fifth.",
      fifteenth: 'Fifteenth is 15th. The number shown is 5th.',
      fiftieth: 'Fiftieth is 50th. The number shown is 5th.',
    },
    more: 'Some ordinals change their spelling: five becomes fifth, nine becomes ninth and twelve becomes twelfth.',
    tip: "Learn the change as a pattern: 'five' loses 've' and gains 'f' before 'th'.",
  },
  '8th': {
    why: "The ordinal for 8 is 'eighth'. We add only 'h', because 'eight' already ends in 't'. You can say: He lives on the eighth floor.",
    not: {
      eightth: "'Eightth' has two 't' letters. 'Eight' already ends in 't', so we add only 'h'.",
      eighteenth: 'Eighteenth is 18th. The number shown is 8th.',
      eightieth: 'Eightieth is 80th. The number shown is 8th.',
    },
    more: 'The ordinals eighth and ninth are often spelt wrongly. Say them slowly and check the letters.',
    tip: "Write 'eight' and then add 'h': eighth.",
  },
  '9th': {
    why: "The ordinal for 9 is 'ninth'. The 'e' of 'nine' is dropped. You can say: Today is the ninth of September.",
    not: {
      nineth: "'Nineth' keeps the 'e'. The correct spelling drops it: ninth.",
      nineteenth: 'Nineteenth is 19th. The number shown is 9th.',
      ninetieth: 'Ninetieth is 90th. The number shown is 9th.',
    },
    more: "'Nine' keeps its 'e' in 'nineteen' and 'ninety', but not in 'ninth'.",
    tip: "Write 'nine', delete the 'e', and add 'th': ninth.",
  },
  '12th': {
    why: "The ordinal for 12 is 'twelfth'. The 've' of 'twelve' changes to 'f'. You can say: December is the twelfth month.",
    not: {
      twelveth: "'Twelveth' keeps the 've'. It changes to 'f': twelfth.",
      twentieth: 'Twentieth is 20th. The number shown is 12th.',
      twelve: "'Twelve' is the number 12. The question asks for the ordinal, which shows order.",
    },
    more: "Twelve is also the number of months in a year, so 'the twelfth month' is December.",
    tip: "Say 'twelfth' slowly. It has 'lf' in the middle and 'th' at the end.",
  },
  '20th': {
    why: "The ordinal for 20 is 'twentieth'. The 'y' of 'twenty' changes to 'ie' before 'th'. You can say: She finished in twentieth place.",
    not: {
      twentyth: "'Twentyth' keeps the 'y'. The 'y' changes to 'ie': twentieth.",
      twelfth: 'Twelfth is 12th. The number shown is 20th.',
      second: 'Second is 2nd. The number shown is 20th.',
    },
    more: 'The same change happens with every ten: thirtieth, fortieth, fiftieth, sixtieth.',
    tip: "For tens that end in 'y', change 'y' to 'ie' and add 'th'.",
  },
  '21st': {
    why: "For 21st we say the tens as a number, 'twenty', and the last part as an ordinal, 'first': 'twenty-first'. You can say: Her birthday is on the twenty-first of June.",
    not: {
      'twenty-oneth': "'Twenty-oneth' does not exist. The last part must be the ordinal 'first'.",
      twelfth: 'Twelfth is 12th. The number shown is 21st.',
      'twenty-one':
        "'Twenty-one' is the number 21. The question asks for the ordinal, which shows order.",
    },
    more: 'Only the last word changes: twenty-first, twenty-second, twenty-third, twenty-fourth.',
    tip: 'Learn the pattern with examples: twenty-first, thirty-second, forty-third.',
  },
  '30th': {
    why: "The ordinal for 30 is 'thirtieth'. The 'y' of 'thirty' changes to 'ie' before 'th'. You can say: The thirtieth day of the month.",
    not: {
      thirteenth: 'Thirteenth is 13th. The number shown is 30th.',
      thirtyth: "'Thirtyth' keeps the 'y'. The 'y' changes to 'ie': thirtieth.",
      third: 'Third is 3rd. The number shown is 30th.',
    },
    more: 'Thirtieth is the last day of April, June, September and November, which have 30 days.',
    tip: 'Say the end of the word clearly: thir-ti-eth.',
  },
  '100th': {
    why: "The ordinal for 100 is 'hundredth'. We add 'th' to 'hundred'. You can say: The school is celebrating its hundredth birthday.",
    not: {
      'one hundred':
        "'One hundred' is the number 100. The question asks for the ordinal, which shows order.",
      hundreth: "'Hundreth' leaves out the 'd' before 'th'. The correct spelling is 'hundredth'.",
      thousandth: 'Thousandth is 1,000th. The number shown is 100th.',
    },
    more: "We usually say 'the hundredth' or 'one hundredth'.",
    tip: "Write 'hundred' in full and then add 'th': hundred + th.",
  },
  fortieth: {
    why: "'Fortieth' is the ordinal for 40, so we write 40th: the number and the letters 'th'. You can say: The fortieth page is the last one.",
    not: {
      '40': "40 is the number 'forty'. An ordinal needs 'th' after the number.",
      '14th': "14th is 'fourteenth'. The word here is 'fortieth', which is 40th.",
      '4th': "4th is 'fourth'. The word here is 'fortieth'.",
    },
    more: "Like 'forty', 'fortieth' has no 'u'.",
    tip: "Check the start of the word: 'four' is 4, but 'fort' is 40.",
  },
  seventh: {
    why: "'Seventh' is the ordinal for 7, so we write 7th. You can say: My birthday is on the seventh of May.",
    not: {
      '7': "7 is the number 'seven'. An ordinal has letters after it: 7th.",
      '17th': "17th is 'seventeenth'. The word here is 'seventh'.",
      '70th': "70th is 'seventieth'. The word here is 'seventh'.",
    },
    more: "'Seventh' is regular: we add 'th' to 'seven'.",
    tip: 'Compare the three words: seventh (7th), seventeenth (17th), seventieth (70th).',
  },
  '3:00': {
    why: "At 3:00 the minutes are zero, so we say 'three o'clock'. We use 'o'clock' only for exact hours. You can say: The lesson starts at three o'clock.",
    not: {
      'three thirty': "'Three thirty' is 3:30. The minutes shown here are 00.",
      'half past three': "'Half past three' is 3:30, which is half an hour later.",
      'quarter past three': "'Quarter past three' is 3:15, which is a quarter of an hour later.",
    },
    more: "We do not use 'o'clock' for times like 3:15 or 3:30. Use 'past' or 'to' for those.",
    tip: "If the minutes are 00, say the hour and 'o'clock'.",
  },
  '3:15': {
    why: "A quarter of an hour is 15 minutes. At 3:15, 15 minutes have passed since three o'clock, so we say 'quarter past three'. You can say: The bus leaves at quarter past three.",
    not: {
      'quarter to three': "'Quarter to three' is 2:45, which is 15 minutes before three.",
      'half past three': "'Half past three' is 3:30, which is 30 minutes after three.",
      'three fifteen to':
        "'Three fifteen to' is not a way to say the time. We can say 'three fifteen' or 'quarter past three'.",
    },
    more: "We can also say 'three fifteen'. It means the same as 'quarter past three'.",
    tip: "'Past' means after the hour. Use 'past' for the first half of the hour.",
  },
  '3:30': {
    why: "Half an hour is 30 minutes. At 3:30, half an hour has passed since three o'clock, so we say 'half past three'. You can say: We have lunch at half past twelve.",
    not: {
      'half to three': "'Half to three' is not used. For 30 minutes we say 'half past'.",
      'half past four': "'Half past four' is 4:30. The hour shown here is three.",
      'quarter past three': "'Quarter past three' is 3:15, not 3:30.",
    },
    more: "In British English 'half three' is a short way to say 'half past three'.",
    tip: "Say 'half past' and then the hour number: half past three.",
  },
  '3:45': {
    why: "At 3:45 there are 15 minutes left before four o'clock, so we say 'quarter to four'. After 30 minutes we count to the next hour. You can say: The film ends at quarter to four.",
    not: {
      'quarter past four': "'Quarter past four' is 4:15, which is after four o'clock.",
      'quarter to three': "'Quarter to three' is 2:45, which is an hour earlier.",
      'three forty-five past':
        "'Three forty-five past' is wrong. We can say 'three forty-five' or 'quarter to four'.",
    },
    more: "With 'to', the hour we say is the next one: 3:45 is a quarter to four, not a quarter to three.",
    tip: "Use 'to' for the second half of the hour. It counts the minutes that are left.",
  },
  '9:05': {
    why: "At 9:05, five minutes have passed since nine o'clock, so we say 'five past nine'. We say the minutes first, then 'past' and the hour. You can say: School starts at five past nine.",
    not: {
      'five to nine': "'Five to nine' is 8:55, which is five minutes before nine.",
      'nine past five':
        "'Nine past five' is 5:09. The minutes and the hour are in the wrong order.",
      'five past ten': "'Five past ten' is 10:05. The hour shown here is nine.",
    },
    more: "We can also say 'nine oh five'. It means the same.",
    tip: "Say the minutes first when you use 'past' or 'to': five past nine.",
  },
  '10:50': {
    why: "At 10:50 there are ten minutes left before eleven o'clock, so we say 'ten to eleven'. After half past we count to the next hour. You can say: It is ten to eleven, so the lesson ends soon.",
    not: {
      'ten past eleven': "'Ten past eleven' is 11:10, which is after eleven.",
      'ten to ten': "'Ten to ten' is 9:50, which is an hour earlier.",
      'fifty past ten':
        "We do not say 'fifty past ten'. After half past, we use 'to', or we can say 'ten fifty'.",
    },
    more: "We can also say 'ten fifty'. 'Ten to eleven' and 'ten fifty' are the same time.",
    tip: 'Take the minutes from 60: 60 minus 50 is 10, so it is ten minutes to the next hour.',
  },
  '6:20': {
    why: "At 6:20, twenty minutes have passed since six o'clock, so we say 'twenty past six'. You can say: Breakfast is at twenty past six.",
    not: {
      'twenty to six': "'Twenty to six' is 5:40, which is before six.",
      'six past twenty':
        "'Six past twenty' is not a time. The minutes come first, then the hour: twenty past six.",
      'twenty past seven': "'Twenty past seven' is 7:20. The hour shown here is six.",
    },
    more: "We say 'quarter' for 15 minutes and 'half' for 30 minutes. For other minutes we say the number: ten, twenty, twenty-five.",
    tip: "For minutes up to 30, use 'past' and say the minutes first.",
  },
  '7:40': {
    why: "At 7:40 there are twenty minutes left before eight o'clock, so we say 'twenty to eight'. You can say: The bus comes at twenty to eight.",
    not: {
      'twenty past eight': "'Twenty past eight' is 8:20, which is after eight.",
      'twenty to seven': "'Twenty to seven' is 6:40, which is an hour earlier.",
      'forty past seven':
        "We do not say 'forty past seven'. After half past, we use 'to', or we can say 'seven forty'.",
    },
    more: "We can also say 'seven forty'. It is the same time.",
    tip: '60 minus 40 is 20, so it is twenty minutes to the next hour: twenty to eight.',
  },
  '12:00': {
    why: "12:00 is twelve o'clock. On a 24-hour clock it is the middle of the day, so we can call it 'twelve midday' or 'twelve noon'. You can say: Lunch is at twelve midday.",
    not: {
      'quarter past twelve': "'Quarter past twelve' is 12:15, which is after twelve.",
      'twelve past': "'Twelve past' has no hour after it, so it is not a complete time.",
      'half past twelve': "'Half past twelve' is 12:30, which is half an hour after twelve.",
    },
    more: "Midnight is twelve o'clock in the middle of the night. On a 24-hour clock it is 00:00. On a 12-hour clock both are 12:00, so we say 'midday' or 'midnight' to make it clear.",
    tip: 'Learn the pair: midday is in the day, and midnight is in the night.',
  },
  '2:25': {
    why: "At 2:25, twenty-five minutes have passed since two o'clock, so we say 'twenty-five past two'. You can say: Maths starts at twenty-five past two.",
    not: {
      'twenty-five to two': "'Twenty-five to two' is 1:35, which is before two.",
      'twenty-five past three': "'Twenty-five past three' is 3:25. The hour shown here is two.",
      'half past two': "'Half past two' is 2:30. Five more minutes have passed.",
    },
    more: "We use 'past' up to half past, and 'to' after it.",
    tip: "Use 'past' when the minutes are 30 or fewer.",
  },
  '8:35': {
    why: "At 8:35 there are twenty-five minutes left before nine o'clock, so we say 'twenty-five to nine'. After half past we count to the next hour. You can say: The train leaves at twenty-five to nine.",
    not: {
      'twenty-five past nine': "'Twenty-five past nine' is 9:25, which is after nine.",
      'twenty-five to eight': "'Twenty-five to eight' is 7:35, which is an hour earlier.",
      'thirty-five past eight':
        "People do not say 'thirty-five past'. After half past, we use 'to', or we can say 'eight thirty-five'.",
    },
    more: "We can also say 'eight thirty-five'. It is the same time.",
    tip: '60 minus 35 is 25, so it is twenty-five minutes to the next hour.',
  },
  '14:00': {
    why: "The 24-hour clock does not use 'am' and 'pm'. From 13:00 we subtract 12: 14 minus 12 is 2. So 14:00 is 2:00 pm, in the afternoon. You can say: The film starts at two pm.",
    not: {
      '4:00 pm': "'4:00 pm' is 16:00. The hour here is 14, so we subtract 12 to get 2.",
      '2:00 am': "'2:00 am' is 02:00, in the middle of the night. 14:00 is in the afternoon.",
      '12:00 pm': "'12:00 pm' is midday, 12:00. 14:00 is two hours later.",
    },
    more: "'am' means before midday and 'pm' means after midday.",
    tip: "For a time from 13:00 on, subtract 12 from the hour and add 'pm'.",
  },
  '18:30': {
    why: '18 minus 12 is 6, and the time is after midday, so 18:30 is 6:30 pm. The minutes stay the same. You can say: Dinner is at half past six.',
    not: {
      '8:30 pm': "'8:30 pm' is 20:30. The hour here is 18, so we subtract 12 to get 6.",
      '6:30 am': "'6:30 am' is 06:30, in the morning. 18:30 is in the evening.",
      '6:13 pm': "'6:13 pm' has the wrong minutes. The minutes stay the same: 30.",
    },
    more: "On the 24-hour clock 18:30 is said 'eighteen thirty'.",
    tip: 'Subtract 12 from the hour and keep the minutes the same.',
  },
  '23:15': {
    why: '23 minus 12 is 11, and the time is late in the evening, so 23:15 is 11:15 pm. The minutes stay the same. You can say: I go to bed at quarter past eleven.',
    not: {
      '1:15 pm': "'1:15 pm' is 13:15, in the afternoon. The hour here is 23.",
      '11:15 am': "'11:15 am' is 11:15, in the morning. 23:15 is at night.",
      '11:50 pm': "'11:50 pm' has the wrong minutes. The minutes stay the same: 15.",
    },
    more: 'After 23:59 the next minute is 00:00, which is midnight.',
  },
  'quarter past seven': {
    why: "A quarter is 15 minutes, and 'past seven' means after seven o'clock. So 'quarter past seven' is 7:15. You can say: I wake up at quarter past seven.",
    not: {
      '7:45': "7:45 is 'quarter to eight', which is 15 minutes before eight.",
      '6:15': "6:15 is 'quarter past six'. The hour in the words is seven.",
      '7:50': "7:50 is 'ten to eight'. It is not a quarter of an hour.",
    },
    more: 'A quarter is one of four equal parts, so a quarter of an hour is 15 minutes.',
    tip: 'Write the hour first and then the minutes: 7, then 15.',
  },
  'half past ten': {
    why: "'Half past' means 30 minutes after the hour, so 'half past ten' is 10:30. You can say: Break is at half past ten.",
    not: {
      '10:15': "10:15 is 'quarter past ten'. Half an hour is 30 minutes, not 15.",
      '11:30': "11:30 is 'half past eleven'. The hour in the words is ten.",
      '9:30': "9:30 is 'half past nine'. The hour in the words is ten.",
    },
    more: 'Half is one of two equal parts, so half an hour is 30 minutes.',
    tip: "'Half past' always gives 30 minutes. Write 30 after the colon.",
  },
  'quarter to five': {
    why: "'Quarter to five' means 15 minutes before five o'clock, so it is 4:45. The hour in the number is four, one less than five. You can say: The match starts at quarter to five.",
    not: {
      '5:45': "5:45 is 'quarter to six'. It is after five, not before.",
      '4:15': "4:15 is 'quarter past four'. 'To' means before the hour, so we count back.",
      '5:15': "5:15 is 'quarter past five'. It is after five o'clock.",
    },
    more: "With 'to', the hour in the number is one less than the hour in the words.",
    tip: "Count back 15 minutes from five o'clock to find the time: 4:45.",
  },
  '1 May': {
    why: "We say a date with an ordinal number (1st, 2nd, 3rd) and 'of'. 1 May is 'the first of May'. You can say: My birthday is on the first of May.",
    not: {
      'the first of March': 'That is 1 March. The month shown here is May.',
      'May the one': "'One' is a counting number (1, 2, 3). A date needs an ordinal: 'first'.",
      'the one of May':
        "'One' is a counting number (1, 2, 3). A date needs an ordinal: 'the first of May'.",
    },
    more: "We can also say 'May the first'. In writing, '1 May' and '1st May' are both fine.",
    tip: "Use the ordinal for the day: first, second, third. Do not say 'one May'.",
  },
  '3 June': {
    why: "A date uses an ordinal number (1st, 2nd, 3rd) for the day. 3 June is 'the third of June'. You can say: Our trip is on the third of June.",
    not: {
      'the thirtieth of June': 'That is 30 June. The day shown here is 3.',
      'June the three': "'Three' is a counting number. A date needs an ordinal: 'third'.",
      'the third of July': 'That is 3 July. The month shown here is June.',
    },
    more: "'Third' is irregular. It is not 'threeth'.",
    tip: 'Check both parts of the date: the day (third) and the month (June).',
  },
  '22 March': {
    why: "A date uses an ordinal number for the day (22nd), and only the last word changes. 22 March is 'the twenty-second of March'. You can say: The concert is on the twenty-second of March.",
    not: {
      'the twenty-two of March':
        "'Twenty-two' is a counting number. Dates use ordinals: 'twenty-second'.",
      'the second of March': 'That is 2 March. The day shown here is 22.',
      'the twenty-second of May': 'That is 22 May. The month shown here is March.',
    },
    more: "The ordinals for 22, 32 and 42 all end in 'second': twenty-second, thirty-second, forty-second.",
    tip: 'Say the tens as normal and change only the last word: twenty, then second.',
  },
  '31 December': {
    why: "31 December is 'the thirty-first of December'. The day is an ordinal number (31st), and only the last word changes: thirty, then first. You can say: New Year's Eve is on the thirty-first of December.",
    not: {
      'the thirteenth of December': 'That is 13 December. The day shown here is 31.',
      'the thirty-one of December':
        "'Thirty-one' is a counting number. A date needs an ordinal: 'thirty-first'.",
      'the thirty-first of November':
        'That date does not exist, because November has only 30 days. The month shown here is December.',
    },
    more: 'December has 31 days, but November has 30.',
    tip: 'Do not mix up thirteenth (13th) and thirty-first (31st).',
  },
  'The month after April': {
    why: 'The months go in a fixed order: March, April, May. The month after April is May. You can say: In May the weather is warmer.',
    not: {
      March: 'March comes before April, not after it.',
      June: 'June is two months after April.',
      August: 'August is four months after April.',
    },
    more: "'After' means later. The month after April is the next month in the year.",
    tip: 'Say the months in a line to find the next one: April, May.',
  },
  'The month before September': {
    why: 'The months go in a fixed order: July, August, September. The month before September is August. You can say: School ends in July and starts again in September.',
    not: {
      October: 'October comes after September, not before it.',
      July: 'July is two months before September. August is in between.',
      November: 'November is two months after September.',
    },
    more: "'Before' means earlier. The month before September is the month that comes just ahead of it.",
    tip: 'Count back one month: from September, one month back is August.',
  },
  'The day after Tuesday': {
    why: 'The days go in a fixed order: Monday, Tuesday, Wednesday. The day after Tuesday is Wednesday. You can say: We have art on Wednesday.',
    not: {
      Monday: 'Monday is the day before Tuesday, not after it.',
      Thursday: 'Thursday is two days after Tuesday.',
      Friday: 'Friday is three days after Tuesday.',
    },
    more: "If today is Tuesday, then Wednesday is tomorrow. We also say 'the day after Tuesday' when we talk about any Tuesday.",
    tip: 'Say the days in a line to find the next one: Tuesday, Wednesday.',
  },
  'The day before Sunday': {
    why: 'The week goes round, and Saturday comes just before Sunday. The day before Sunday is Saturday. You can say: There is no school on Saturday.',
    not: {
      Monday: 'Monday is the day after Sunday, not before it.',
      Friday: 'Friday is two days before Sunday. Saturday is in between.',
      Sunday: 'Sunday is the same day. The question asks for the day before it.',
    },
    more: 'Saturday and Sunday make the weekend.',
    tip: 'Count back one day: from Sunday, one day back is Saturday.',
  },
}
