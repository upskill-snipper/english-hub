import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Bigger, Biggest: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/comparatives-superlatives.ts). Written with AI on 16
 * October 2026 and checked against each question and its options, as the founder
 * decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: every explanation rewritten for the
 * bank's 243 questions (64 before), because each question now has its own
 * wrong options, real learner mistakes, and a "why not" for each; the new
 * tier 3 questions (real lines, "as ... as", "the same as", tables, dialogues)
 * are explained from the line, the table or the turn they show. No
 * explanation names another question's answer unless the two share an
 * adjective, so the dealer never puts them in one round. Written with AI and
 * checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 31 October 2026, against every question.
 * Two explanations set a wrong form in quotation marks beside a real line,
 * where it read as a misquotation of Animal Farm and of Silas Marner; they
 * now name the wrong form without quoting the book. Five follow questions
 * the check changed (the bank's docblock says how). Eleven said something
 * untrue or unclear, and now say it right: that every adjective of three
 * syllables takes "more" and never -est (three times: unhappy, untidy and
 * unlucky take -er and -est); that "most people" means almost all; that no
 * form of "far" but the first has an a (the same explanations call
 * "farther" right); that "The second half was ___ than the first." is about
 * a match, which it does not say; that timetables use the 24-hour clock
 * only in the evening; that "more importantly" marks the point that matters
 * most; that "more sad than angry" compares no two things; and "the number
 * that comes last" in a list, which depends on the order.
 */
export const EXPLANATIONS: GameExplanations = {
  'My new phone is ___ than my old one. (small)': {
    why: "'Than' shows that two things are compared: the new phone and the old one. So the gap needs the comparative. 'Small' has one syllable, so we add -er: 'smaller'.",
    not: {
      smallest:
        "'Smallest' is the superlative, for one thing set against a whole group. This sentence compares two things, the new phone and the old one, so it needs the comparative: 'smaller'.",
      'more small':
        "'More' goes before long adjectives. 'Small' has one syllable, so it takes -er instead: 'smaller'.",
      small:
        "'Small' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'smaller'.",
    },
    more: 'Most one-syllable adjectives just add -er, and nothing else in the word changes: neat, neater; sharp, sharper.',
    tip: "Put 'than' straight after the comparative, and then the second thing: '... smaller than my old one'.",
  },
  'This is the ___ box in the whole shop. (small)': {
    why: "'The' before the gap and 'in the whole shop' after the noun set one box against every other box in the shop. That needs the superlative: 'small' adds -est, 'smallest'.",
    not: {
      smaller:
        "'Smaller' is the comparative, for two things. Here one is set against every other box in the shop, so it needs the superlative: 'smallest'.",
      'most small':
        "'Most' goes before long adjectives. 'Small' has one syllable, so it takes -est instead: 'smallest'.",
      'most smallest':
        "'Most smallest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'smallest'.",
    },
    more: "A superlative usually has 'the' in front of it and a group after the noun: 'in the shop', 'of the year', 'in the world'.",
    tip: "Look for 'the' plus a group of three or more. Together they ask for the -est form.",
  },
  'An elephant is ___ than a dog. (tall)': {
    why: "'Than' compares two animals, an elephant and a dog, so the gap needs the comparative. 'Tall' is a short adjective, so we add -er: 'taller'.",
    not: {
      tallest:
        "'Tallest' is the superlative, for one thing set against a whole group. This sentence compares two things, an elephant and a dog, so it needs the comparative: 'taller'.",
      'more taller':
        "'More taller' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'taller'.",
      tall: "'Tall' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'taller'.",
    },
    more: "The first thing comes before the verb and the second after 'than'. Swap them and the sentence says something false.",
    tip: "When the word after the gap is 'than', the gap almost always needs a comparative.",
  },
  'Ben is the ___ player in the team. (tall)': {
    why: "Ben is set against every other player in the team, so the gap needs the superlative. 'Tall' is short, so we add -est: 'tallest'.",
    not: {
      taller:
        "'Taller' is the comparative, for two things. Here one is set against every other player in the team, so it needs the superlative: 'tallest'.",
      'most tall':
        "'Most' goes before long adjectives. 'Tall' has one syllable, so it takes -est instead: 'tallest'.",
      'most tallest':
        "'Most tallest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'tallest'.",
    },
    more: "After a superlative, 'in' goes with a place or a group ('in the team', 'in my class') and 'of' with a time or a number ('of the year', 'of the three').",
    tip: "Keep 'the' before a superlative. 'Ben is tallest player' leaves it out.",
  },
  'A tortoise is ___ than a rabbit. (slow)': {
    why: "'Than' compares a tortoise and a rabbit, so the gap needs the comparative. 'Slow' has one syllable, so we add -er: 'slower'.",
    not: {
      slowest:
        "'Slowest' is the superlative, for one thing set against a whole group. This sentence compares two things, a tortoise and a rabbit, so it needs the comparative: 'slower'.",
      'more slow':
        "'More' goes before long adjectives. 'Slow' has one syllable, so it takes -er instead: 'slower'.",
      slow: "'Slow' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'slower'.",
    },
    more: "'Slow' ends in -w, and a w is never doubled, so the ending goes straight on: s-l-o-w-e-r.",
    tip: "Learn short adjectives in pairs of opposites, such as 'wild' and 'tame'. Both words of a pair can be compared.",
  },
  'This is the ___ lift in the building. (slow)': {
    why: "One lift is set against every other lift in the building, so the gap needs the superlative. 'Slow' is short: add -est, 'slowest'.",
    not: {
      'most slow':
        "'Most' goes before long adjectives. 'Slow' has one syllable, so it takes -est instead: 'slowest'.",
      'most slowest':
        "'Most slowest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'slowest'.",
    },
    more: "'Lift' is the British word. In American English the same machine is an 'elevator'.",
    tip: "A superlative can also end the sentence: 'This lift is the slowest.' Keep 'the' in front of it.",
  },
  'My bag is ___ than yours today. (light)': {
    why: "'Than' compares my bag and yours, so the gap needs the comparative. 'Light' has one syllable, so we add -er: 'lighter'.",
    not: {
      lightest:
        "'Lightest' is the superlative, for one thing set against a whole group. This sentence compares two things, my bag and yours, so it needs the comparative: 'lighter'.",
      'more lighter':
        "'More lighter' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'lighter'.",
      light:
        "'Light' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'lighter'.",
    },
    more: "'Light' here means not heavy. The same word also means not dark, as in 'a light room', and it has the same forms.",
    tip: "'Yours' saves you saying 'your bag' again. 'Mine', 'his' and 'hers' work in the same way after 'than'.",
  },
  'A feather is the ___ thing in the bag. (light)': {
    why: "The feather is set against everything else in the bag, so the gap needs the superlative. 'Light' is short, so we add -est: 'lightest'.",
    not: {
      lighter:
        "'Lighter' is the comparative, for two things. Here one is set against everything else in the bag, so it needs the superlative: 'lightest'.",
      'most light':
        "'Most' goes before long adjectives. 'Light' has one syllable, so it takes -est instead: 'lightest'.",
      'most lightest':
        "'Most lightest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'lightest'.",
    },
    more: "'The ... thing in the bag' is the shape of a superlative: 'the' before the adjective and the group after the noun.",
    tip: 'Count the things compared. Two need the -er form; three or more need the -est form.',
  },
  'Winter is ___ than summer here. (cold)': {
    why: "'Than' compares two seasons, winter and summer, so the gap needs the comparative. 'Cold' is short: add -er, 'colder'.",
    not: {
      coldest:
        "'Coldest' is the superlative, for one thing set against a whole group. This sentence compares two things, winter and summer, so it needs the comparative: 'colder'.",
      'more cold':
        "'More' goes before long adjectives. 'Cold' has one syllable, so it takes -er instead: 'colder'.",
      cold: "'Cold' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'colder'.",
    },
    more: "'Here' limits the comparison to one place. Near the equator, winter and summer can feel almost the same.",
    tip: "Compare the weather where you live: 'It is milder in the south than in the north.'",
  },
  'January is the ___ month of the year. (cold)': {
    why: "January is set against the other eleven months of the year, so the gap needs the superlative. 'Cold' is short: add -est, 'coldest'.",
    not: {
      colder:
        "'Colder' is the comparative, for two things. Here one is set against the other eleven months, so it needs the superlative: 'coldest'.",
      'most cold':
        "'Most' goes before long adjectives. 'Cold' has one syllable, so it takes -est instead: 'coldest'.",
      'most coldest':
        "'Most coldest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'coldest'.",
    },
    more: 'In Britain, January is usually the coldest month. South of the equator, the cold months come in the middle of the year.',
    tip: "'Of the year', 'of the week' and 'of my life' are groups that often follow a superlative.",
  },
  'This road is ___ than that one. (long)': {
    why: "'Than' compares two roads, this one and that one, so the gap needs the comparative. 'Long' is short: add -er, 'longer'.",
    not: {
      longest:
        "'Longest' is the superlative, for one thing set against a whole group. This sentence compares two things, this road and that one, so it needs the comparative: 'longer'.",
      'more long':
        "'More' goes before long adjectives. 'Long' has one syllable, so it takes -er instead: 'longer'.",
      long: "'Long' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'longer'.",
    },
    more: "'That one' means 'that road'. 'One' stands in for the noun so that we do not say it twice.",
    tip: "In 'longer' you hear a g sound after the ng: say 'long-ger'.",
  },
  'A jumper is ___ than a T-shirt in winter. (warm)': {
    why: "'Than' compares two pieces of clothing, a jumper and a T-shirt, so the gap needs the comparative. 'Warm' is short: add -er, 'warmer'.",
    not: {
      warmest:
        "'Warmest' is the superlative, for one thing set against a whole group. This sentence compares two things, a jumper and a T-shirt, so it needs the comparative: 'warmer'.",
      'more warmer':
        "'More warmer' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'warmer'.",
      warm: "'Warm' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'warmer'.",
    },
    more: "'Jumper' is British English for a knitted top. In American English it is a 'sweater'.",
    tip: "Time words often end a comparison: '... in winter', '... at night', '... on Sundays'.",
  },
  'This is the ___ coat in the shop. (warm)': {
    why: "One coat is set against every other coat in the shop, so the gap needs the superlative. 'Warm' is short: add -est, 'warmest'.",
    not: {
      warmer:
        "'Warmer' is the comparative, for two things. Here one is set against every other coat in the shop, so it needs the superlative: 'warmest'.",
      'most warm':
        "'Most' goes before long adjectives. 'Warm' has one syllable, so it takes -est instead: 'warmest'.",
      'most warmest':
        "'Most warmest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'warmest'.",
    },
    more: "Shops use superlatives to sell: 'our smoothest paint', 'the boldest colours'. A superlative claims that nothing in the group beats it.",
    tip: "'In the shop' names the group. If the group is already clear, you can leave it out: 'This coat is the warmest.'",
  },
  'Maths feels ___ than English to me. (hard)': {
    why: "'Than' compares two school subjects, maths and English, so the gap needs the comparative. 'Hard' is short: add -er, 'harder'.",
    not: {
      hardest:
        "'Hardest' is the superlative, for one thing set against a whole group. This sentence compares two things, maths and English, so it needs the comparative: 'harder'.",
      'more hard':
        "'More' goes before long adjectives. 'Hard' has one syllable, so it takes -er instead: 'harder'.",
      hard: "'Hard' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'harder'.",
    },
    more: "'To me' shows that this is an opinion. Another student might feel the opposite, and both sentences are good English.",
    tip: "Give a reason after a comparison: '... because there are so many rules to learn'.",
  },
  'That was the ___ test of the term. (hard)': {
    why: "The test is set against all the tests that term, so the gap needs the superlative. 'Hard' is short: add -est, 'hardest'.",
    not: {
      harder:
        "'Harder' is the comparative, for two things. Here one is set against all the tests that term, so it needs the superlative: 'hardest'.",
      'most hard':
        "'Most' goes before long adjectives. 'Hard' has one syllable, so it takes -est instead: 'hardest'.",
      'most hardest':
        "'Most hardest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'hardest'.",
    },
    more: "A British school year has three terms: autumn, spring and summer. 'Of the term' means within that part of the year.",
    tip: "Use 'was' for a superlative about the past: 'It was the ... test of the term.'",
  },
  'Trains are usually ___ than buses. (fast)': {
    why: "'Than' compares trains and buses, so the gap needs the comparative. 'Fast' is short: add -er, 'faster'.",
    not: {
      fastest:
        "'Fastest' is the superlative, for one thing set against a whole group. This sentence compares two things, trains and buses, so it needs the comparative: 'faster'.",
      'more faster':
        "'More faster' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'faster'.",
      fast: "'Fast' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'faster'.",
    },
    more: "'Usually' says the comparison is true most of the time, not always. It is a good word to use when there are exceptions.",
    tip: "'Fast' is an adverb too, and the adverb has the same forms: 'She runs fast.'",
  },
  'A cheetah is the ___ land animal. (fast)': {
    why: "The cheetah is set against every other animal that lives on land, so the gap needs the superlative. 'Fast' is short: add -est, 'fastest'.",
    not: {
      faster:
        "'Faster' is the comparative, for two things. Here one is set against every other animal on land, so it needs the superlative: 'fastest'.",
      'most fast':
        "'Most' goes before long adjectives. 'Fast' has one syllable, so it takes -est instead: 'fastest'.",
      'most fastest':
        "'Most fastest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'fastest'.",
    },
    more: "'Land' matters, because some birds move even more quickly when they dive. A good superlative names its group clearly.",
    tip: "Name the group after a superlative: 'the ... land animal', 'the ... building in the city'.",
  },
  'Today is ___ than yesterday. (cool)': {
    why: "'Than' compares two days, today and yesterday, so the gap needs the comparative. 'Cool' is short: add -er, 'cooler'.",
    not: {
      coolest:
        "'Coolest' is the superlative, for one thing set against a whole group. This sentence compares two things, today and yesterday, so it needs the comparative: 'cooler'.",
      'more cooler':
        "'More cooler' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'cooler'.",
      cool: "'Cool' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'cooler'.",
    },
    more: "'Cool' means a little cold: pleasant, not freezing. Weather forecasts use it often.",
    tip: "The same frame works for any day's weather: 'Today is milder than yesterday.'",
  },
  'An elephant is ___ than a mouse. (big)': {
    why: "'Than' compares an elephant and a mouse, so the gap needs the comparative. 'Big' ends in one vowel and one consonant, so the g doubles before -er: 'bigger'.",
    not: {
      biger:
        "'Biger' does not double the last letter. 'Big' ends in one vowel and one consonant, so the consonant doubles: 'bigger'.",
      biggest:
        "'Biggest' is the superlative, for one thing set against a whole group. This sentence compares two things, an elephant and a mouse, so it needs the comparative: 'bigger'.",
      'more bigger':
        "'More bigger' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'bigger'.",
    },
    more: "The double letter keeps the vowel short. With one g, the word would look as if it rhymed with 'tiger'.",
    tip: 'Check the last three letters: consonant, vowel, consonant, as in b-i-g. If they fit, double the last one.',
  },
  'A whale is the ___ animal in the ocean. (big)': {
    why: "The whale is set against every animal in the ocean, so the gap needs the superlative. 'Big' doubles its g before the ending: 'biggest'.",
    not: {
      bigest:
        "'Bigest' does not double the last letter. 'Big' ends in one vowel and one consonant, so the consonant doubles: 'biggest'.",
      bigger:
        "'Bigger' is the comparative, for two things. Here one is set against every other animal in the ocean, so it needs the superlative: 'biggest'.",
      'most big':
        "'Most' goes before long adjectives. 'Big' has one syllable, so it doubles its last letter and adds -est: 'biggest'.",
    },
    more: 'The blue whale can grow to about 30 metres, roughly as long as three buses parked end to end.',
    tip: 'Write the double g in both forms. You cannot hear it, so learn the spelling by heart.',
  },
  'A summer day is ___ than a winter day. (hot)': {
    why: "'Than' compares a summer day and a winter day, so the gap needs the comparative. 'Hot' ends in one vowel and one consonant, so the t doubles: 'hotter'.",
    not: {
      hoter:
        "'Hoter' does not double the last letter. 'Hot' ends in one vowel and one consonant, so the consonant doubles: 'hotter'.",
      hottest:
        "'Hottest' is the superlative, for one thing set against a whole group. This sentence compares two things, a summer day and a winter day, so it needs the comparative: 'hotter'.",
      'more hot':
        "'More' goes before long adjectives. 'Hot' has one syllable, so it doubles its last letter and adds -er: 'hotter'.",
    },
    more: "Words ending in two consonants, like 'warm' (r and m), never double. Only one vowel followed by one consonant doubles.",
    tip: "Say 'hot', then the comparative. The o stays short, and the double t shows that in writing.",
  },
  'July is the ___ month here. (hot)': {
    why: "July is set against every other month of the year, so the gap needs the superlative. 'Hot' doubles its t before -est: 'hottest'.",
    not: {
      hotest:
        "'Hotest' does not double the last letter. 'Hot' ends in one vowel and one consonant, so the consonant doubles: 'hottest'.",
      hotter:
        "'Hotter' is the comparative, for two things. Here one is set against every other month of the year, so it needs the superlative: 'hottest'.",
      'most hot':
        "'Most' goes before long adjectives. 'Hot' has one syllable, so it doubles its last letter and adds -est: 'hottest'.",
    },
    more: "'Here' means where the speaker lives. It keeps the claim true, because in some countries July is a cold month.",
    tip: 'Learn the three forms together, with the double t in two of them: hot, hotter, hottest.',
  },
  'This restaurant is ___ than that one. (good)': {
    why: "'Than' compares two restaurants, so the gap needs the comparative. 'Good' is irregular: its comparative is a different word, 'better'.",
    not: {
      gooder:
        "'Gooder' follows the -er rule, but 'good' is irregular and never takes -er. Its comparative is a new word: 'better'.",
      'more better':
        "'More better' says 'more' twice. 'Better' already means 'more good', so leave 'more' out.",
      best: "'Best' is the superlative, for one thing set against a whole group. This sentence compares two things, this restaurant and that one, so it needs the comparative: 'better'.",
    },
    more: "'Good' changes its whole shape when it compares, so learn its three forms as a set: good, better, best.",
    tip: "To add force, put 'much' in front: 'much better'. Never 'more better'.",
  },
  'She is the ___ singer in the school. (good)': {
    why: "She is set against every singer in the school, so the gap needs the superlative. 'Good' is irregular: its superlative is 'best'.",
    not: {
      better:
        "'Better' is the comparative, for two things. Here one is set against every other singer in the school, so it needs the superlative: 'best'.",
      goodest:
        "'Goodest' follows the -est rule, but 'good' is irregular. Its superlative is a new word: 'best'.",
      'most good':
        "'Most' goes before long adjectives, and 'good' is short and irregular. Its superlative is 'best'.",
    },
    more: "The adverb 'well' shares these forms. 'She sings well' becomes 'Of all of us, she sings best.'",
    tip: "Write 'the best', never 'the most good' or 'the goodest'.",
  },
  'That was the ___ film of the year. (bad)': {
    why: "The film is set against every other film that year, so the gap needs the superlative. 'Bad' is irregular: its superlative is 'worst'.",
    not: {
      worse:
        "'Worse' is the comparative, for two things. Here one is set against every other film that year, so it needs the superlative: 'worst'.",
      baddest:
        "'Baddest' follows the -est rule, but 'bad' is irregular. Its superlative is a new word: 'worst'.",
      'most bad':
        "'Most' goes before long adjectives, and 'bad' is short and irregular. Its superlative is 'worst'.",
    },
    more: 'The two irregular forms differ by one letter: the comparative ends in -e and the superlative in -t. Learn them as bad, worse, worst.',
    tip: "Spell the superlative w-o-r-s-t. It rhymes with 'first', which may help you remember the t.",
  },
  'The bus is ___ than a taxi. (cheap)': {
    why: "'Than' compares two ways to travel, the bus and a taxi, so the gap needs the comparative. 'Cheap' has one syllable, so we add -er: 'cheaper'.",
    not: {
      cheapest:
        "'Cheapest' is the superlative, for one thing set against a whole group. This sentence compares two things, the bus and a taxi, so it needs the comparative: 'cheaper'.",
      'more cheap':
        "'More' goes before long adjectives. 'Cheap' has one syllable, so it takes -er instead: 'cheaper'.",
      cheap:
        "'Cheap' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'cheaper'.",
    },
    more: "'Cheap' means it costs little money. In British English you may hear 'dear' for the opposite, meaning it costs a lot.",
    tip: "When you compare prices, you can say by how much: 'The bus is £3 cheaper than a taxi.'",
  },
  'These are the ___ shoes in the shop. (cheap)': {
    why: "These shoes are set against all the other shoes in the shop, so the gap needs the superlative. 'Cheap' is short: add -est, 'cheapest'.",
    not: {
      cheaper:
        "'Cheaper' is the comparative, for two things. Here one is set against all the other shoes in the shop, so it needs the superlative: 'cheapest'.",
      'most cheap':
        "'Most' goes before long adjectives. 'Cheap' has one syllable, so it takes -est instead: 'cheapest'.",
      'most cheapest':
        "'Most cheapest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'cheapest'.",
    },
    more: "A superlative works with plural nouns too: 'the ... shoes', 'the ... seats'. The adjective does not change.",
    tip: "'These are' goes with a plural noun such as 'shoes'; 'this is' goes with one thing.",
  },
  "My room is ___ than my brother's room. (clean)": {
    why: "'Than' compares two rooms, mine and my brother's, so the gap needs the comparative. 'Clean' has one syllable, so we add -er: 'cleaner'.",
    not: {
      cleanest:
        "'Cleanest' is the superlative, for one thing set against a whole group. This sentence compares two things, my room and my brother's room, so it needs the comparative: 'cleaner'.",
      'more cleaner':
        "'More cleaner' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'cleaner'.",
      clean:
        "'Clean' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'cleaner'.",
    },
    more: "'Cleaner' is also a noun: a person whose job is to clean. In this sentence it is an adjective that describes the room.",
    tip: "You can leave out the second 'room': 'My room is ... than my brother's.'",
  },
  'The kitchen is the ___ place in our house. (clean)': {
    why: "The kitchen is set against every other place in our house, so the gap needs the superlative. 'Clean' is short: add -est, 'cleanest'.",
    not: {
      cleaner:
        "'Cleaner' is the comparative, for two things. Here one is set against every other place in our house, so it needs the superlative: 'cleanest'.",
      'most cleanest':
        "'Most cleanest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'cleanest'.",
    },
    more: "With only two things, the comparative is right: 'Of the two rooms, the kitchen is the cleaner.' With more, use the -est form.",
    tip: "Use 'our', 'my' or 'the' before the noun of the group, but keep 'the' before the superlative.",
  },
  'My bike is ___ than yours. (new)': {
    why: "'Than' compares my bike and yours, so the gap needs the comparative. 'New' has one syllable, so we add -er: 'newer'.",
    not: {
      newest:
        "'Newest' is the superlative, for one thing set against a whole group. This sentence compares two things, my bike and yours, so it needs the comparative: 'newer'.",
      'more new':
        "'More' goes before long adjectives. 'New' has one syllable, so it takes -er instead: 'newer'.",
      new: "'New' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'newer'.",
    },
    more: "'New' ends in -w, which is never doubled, so the ending goes straight on: n-e-w-e-r.",
    tip: "'Yours' means 'your bike'. Use it after 'than' so you do not repeat the noun.",
  },
  'This is the ___ shop in our town. (new)': {
    why: "One shop is set against every other shop in our town, so the gap needs the superlative. 'New' is short: add -est, 'newest'.",
    not: {
      newer:
        "'Newer' is the comparative, for two things. Here one is set against every other shop in our town, so it needs the superlative: 'newest'.",
      'most new':
        "'Most' goes before long adjectives. 'New' has one syllable, so it takes -est instead: 'newest'.",
      'most newest':
        "'Most newest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'newest'.",
    },
    more: "Here 'newest' means the one that opened most recently. Shops and phone makers love the word.",
    tip: "'In our town' names the group. Change it to talk about your own area: '... in our street'.",
  },
  'This bridge is ___ than the station. (old)': {
    why: "'Than' compares the bridge and the station, so the gap needs the comparative. 'Old' has one syllable, so we add -er: 'older'.",
    not: {
      oldest:
        "'Oldest' is the superlative, for one thing set against a whole group. This sentence compares two things, the bridge and the station, so it needs the comparative: 'older'.",
      'more old':
        "'More' goes before long adjectives. 'Old' has one syllable, so it takes -er instead: 'older'.",
      old: "'Old' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'older'.",
    },
    more: "For brothers and sisters you may also meet 'elder' ('my elder sister'), but never before 'than', and never for things or places.",
    tip: "For age, even in a family, use the -er form before 'than': 'She is three years older than me.'",
  },
  'The castle is the ___ building in the city. (old)': {
    why: "The castle is set against every other building in the city, so the gap needs the superlative. 'Old' is short: add -est, 'oldest'.",
    not: {
      older:
        "'Older' is the comparative, for two things. Here one is set against every other building in the city, so it needs the superlative: 'oldest'.",
      'most old':
        "'Most' goes before long adjectives. 'Old' has one syllable, so it takes -est instead: 'oldest'.",
      'most oldest':
        "'Most oldest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'oldest'.",
    },
    more: 'Many British towns grew up around a castle or a church, so those are often the first buildings a visitor is shown.',
    tip: "'In the city' names the group. Without a group, a superlative can sound unfinished.",
  },
  'My cat is ___ than my dog. (young)': {
    why: "'Than' compares two pets, my cat and my dog, so the gap needs the comparative. 'Young' has one syllable, so we add -er: 'younger'.",
    not: {
      youngest:
        "'Youngest' is the superlative, for one thing set against a whole group. This sentence compares two things, my cat and my dog, so it needs the comparative: 'younger'.",
      'more young':
        "'More' goes before long adjectives. 'Young' has one syllable, so it takes -er instead: 'younger'.",
      young:
        "'Young' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'younger'.",
    },
    more: "As in 'long', you hear a g sound in the comparative: say 'young-ger'.",
    tip: "Say how much with a number: 'My cat is two years ... than my dog.'",
  },
  'Mia is the ___ girl in our class. (young)': {
    why: "Mia is set against every other girl in our class, so the gap needs the superlative. 'Young' is short: add -est, 'youngest'.",
    not: {
      younger:
        "'Younger' is the comparative, for two things. Here one is set against every other girl in our class, so it needs the superlative: 'youngest'.",
      'most young':
        "'Most' goes before long adjectives. 'Young' has one syllable, so it takes -est instead: 'youngest'.",
      'most youngest':
        "'Most youngest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'youngest'.",
    },
    more: "'The ... in our class' is one of the most common shapes for a superlative in English.",
    tip: "Ask questions with a superlative too: 'Who is the ... in your family?'",
  },
  'A pencil is ___ than a ruler. (short)': {
    why: "'Than' compares a pencil and a ruler, so the gap needs the comparative. 'Short' has one syllable, so we add -er: 'shorter'.",
    not: {
      shortest:
        "'Shortest' is the superlative, for one thing set against a whole group. This sentence compares two things, a pencil and a ruler, so it needs the comparative: 'shorter'.",
      'more shorter':
        "'More shorter' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'shorter'.",
      short:
        "'Short' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'shorter'.",
    },
    more: "'Short' can describe length (a short pencil), height (a short person) or time (a short film). Its forms are the same for all three.",
    tip: "Use 'than' only once, straight after the comparative: '... shorter than a ruler'.",
  },
  'February is the ___ month of the year. (short)': {
    why: "February is set against the other eleven months, so the gap needs the superlative. 'Short' has one syllable: add -est, 'shortest'.",
    not: {
      shorter:
        "'Shorter' is the comparative, for two things. Here one is set against the other eleven months, so it needs the superlative: 'shortest'.",
      'most short':
        "'Most' goes before long adjectives. 'Short' has one syllable, so it takes -est instead: 'shortest'.",
      'most shortest':
        "'Most shortest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'shortest'.",
    },
    more: 'February has 28 days, or 29 in a leap year, which usually comes every four years.',
    tip: "Use 'of the year' with months and days: 'the ... day of the year'.",
  },
  'This wall is ___ than my head. (high)': {
    why: "'Than' compares the wall and my head, so the gap needs the comparative. 'High' has one syllable, so we add -er: 'higher'.",
    not: {
      highest:
        "'Highest' is the superlative, for one thing set against a whole group. This sentence compares two things, the wall and my head, so it needs the comparative: 'higher'.",
      'more high':
        "'More' goes before long adjectives. 'High' has one syllable, so it takes -er instead: 'higher'.",
      high: "'High' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'higher'.",
    },
    more: "We say 'high' for walls, mountains and prices, but 'tall' for people, trees and narrow buildings.",
    tip: "The gh in 'high' is silent, and it stays silent with the ending: 'hi-er'.",
  },
  'Ben Nevis is the ___ mountain in Britain. (high)': {
    why: "Ben Nevis is set against every other mountain in Britain, so the gap needs the superlative. 'High' is short: add -est, 'highest'.",
    not: {
      higher:
        "'Higher' is the comparative, for two things. Here one is set against every other mountain in Britain, so it needs the superlative: 'highest'.",
      'most high':
        "'Most' goes before long adjectives. 'High' has one syllable, so it takes -est instead: 'highest'.",
      'most highest':
        "'Most highest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'highest'.",
    },
    more: 'Ben Nevis is in Scotland, and it is 1,345 metres high.',
    tip: "Mountains are 'high'; people are 'tall'. Choose the adjective first, then its form.",
  },
  'A drum is ___ than a flute. (loud)': {
    why: "'Than' compares two instruments, a drum and a flute, so the gap needs the comparative. 'Loud' has one syllable, so we add -er: 'louder'.",
    not: {
      loudest:
        "'Loudest' is the superlative, for one thing set against a whole group. This sentence compares two things, a drum and a flute, so it needs the comparative: 'louder'.",
      'more loud':
        "'More' goes before long adjectives. 'Loud' has one syllable, so it takes -er instead: 'louder'.",
      loud: "'Loud' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'louder'.",
    },
    more: "The opposite of 'loud' is 'quiet'. A few two-syllable words like 'quiet' can take -er or 'more', so a dictionary is useful.",
    tip: "'Loud' describes a sound. For how a person speaks, use the adverb: 'Please speak loudly.'",
  },
  'Sam has the ___ voice in the class. (loud)': {
    why: "Sam's voice is set against every other voice in the class, so the gap needs the superlative. 'Loud' is short: add -est, 'loudest'.",
    not: {
      louder:
        "'Louder' is the comparative, for two things. Here one is set against every other voice in the class, so it needs the superlative: 'loudest'.",
      'most loud':
        "'Most' goes before long adjectives. 'Loud' has one syllable, so it takes -est instead: 'loudest'.",
      'most loudest':
        "'Most loudest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'loudest'.",
    },
    more: "'Has the ... voice' is a useful way to describe people: 'She has the neatest handwriting.'",
    tip: "Keep 'the' even after 'has': 'Sam has the ... voice in the class.'",
  },
  'My new teacher is ___ than my old one. (kind)': {
    why: "'Than' compares two teachers, the new one and the old one, so the gap needs the comparative. 'Kind' has one syllable, so we add -er: 'kinder'.",
    not: {
      kindest:
        "'Kindest' is the superlative, for one thing set against a whole group. This sentence compares two things, my new teacher and my old one, so it needs the comparative: 'kinder'.",
      'more kinder':
        "'More kinder' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'kinder'.",
      kind: "'Kind' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'kinder'.",
    },
    more: "'Kinder' is also the German word for children, as in 'kindergarten'. In English it only means 'more kind'.",
    tip: "After 'kind' we often say who: 'She is kind to everyone.'",
  },
  'Grandma is the ___ person I know. (kind)': {
    why: "Grandma is set against everyone I know, so the gap needs the superlative. 'Kind' is short: add -est, 'kindest'.",
    not: {
      kinder:
        "'Kinder' is the comparative, for two things. Here one is set against everyone I know, so it needs the superlative: 'kindest'.",
      'most kindest':
        "'Most kindest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'kindest'.",
    },
    more: "'The ... person I know' is a warm way to praise someone. The group is everyone the speaker knows.",
    tip: "Use this frame to describe people in your writing: 'He is the bravest person I know.'",
  },
  'A horse is ___ than a goat. (strong)': {
    why: "'Than' compares a horse and a goat, so the gap needs the comparative. 'Strong' has one syllable, so we add -er: 'stronger'.",
    not: {
      strongest:
        "'Strongest' is the superlative, for one thing set against a whole group. This sentence compares two things, a horse and a goat, so it needs the comparative: 'stronger'.",
      'more strong':
        "'More' goes before long adjectives. 'Strong' has one syllable, so it takes -er instead: 'stronger'.",
      strong:
        "'Strong' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'stronger'.",
    },
    more: "The noun is 'strength'. 'A horse has more strength than a goat' says the same thing in another way.",
    tip: "Two comparisons can share a sentence: 'A horse is stronger, but a goat is braver.'",
  },
  'He is the ___ boy in our year. (strong)': {
    why: "He is set against every other boy in our year, so the gap needs the superlative. 'Strong' is short: add -est, 'strongest'.",
    not: {
      stronger:
        "'Stronger' is the comparative, for two things. Here one is set against every other boy in our year, so it needs the superlative: 'strongest'.",
      'most strong':
        "'Most' goes before long adjectives. 'Strong' has one syllable, so it takes -est instead: 'strongest'.",
      'most strongest':
        "'Most strongest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'strongest'.",
    },
    more: "In a British school, 'our year' means all the students of the same age group, such as Year 9.",
    tip: "'In our year' names the group. Without a group, a superlative can sound unfinished.",
  },
  'The sea is ___ than a swimming pool. (deep)': {
    why: "'Than' compares the sea and a swimming pool, so the gap needs the comparative. 'Deep' has one syllable, so we add -er: 'deeper'.",
    not: {
      deepest:
        "'Deepest' is the superlative, for one thing set against a whole group. This sentence compares two things, the sea and a swimming pool, so it needs the comparative: 'deeper'.",
      'more deep':
        "'More' goes before long adjectives. 'Deep' has one syllable, so it takes -er instead: 'deeper'.",
      deep: "'Deep' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'deeper'.",
    },
    more: "'Deep' measures from the top down. Its noun is 'depth', just as 'long' gives 'length'.",
    tip: 'Do not double the p. Two vowels (ee) before the last letter mean nothing doubles: d-e-e-p-e-r.',
  },
  'The Mariana Trench is the ___ place in the ocean. (deep)': {
    why: "The Mariana Trench is set against every other place in the ocean, so the gap needs the superlative. 'Deep' is short: add -est, 'deepest'.",
    not: {
      deeper:
        "'Deeper' is the comparative, for two things. Here one is set against every other place in the ocean, so it needs the superlative: 'deepest'.",
      'most deep':
        "'Most' goes before long adjectives. 'Deep' has one syllable, so it takes -est instead: 'deepest'.",
      'most deepest':
        "'Most deepest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'deepest'.",
    },
    more: 'The Mariana Trench, in the Pacific Ocean, is about 11,000 metres deep: more than the height of Mount Everest.',
    tip: 'Two vowels before the last letter mean no doubling: deep, deepest; neat, neatest.',
  },
  'Silk is ___ than wool. (soft)': {
    why: "'Than' compares two materials, silk and wool, so the gap needs the comparative. 'Soft' has one syllable, so we add -er: 'softer'.",
    not: {
      softest:
        "'Softest' is the superlative, for one thing set against a whole group. This sentence compares two things, silk and wool, so it needs the comparative: 'softer'.",
      'more soft':
        "'More' goes before long adjectives. 'Soft' has one syllable, so it takes -er instead: 'softer'.",
      soft: "'Soft' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'softer'.",
    },
    more: "'Soft' can describe touch (soft silk) or sound (a soft voice). The forms are the same.",
    tip: "'Silk' and 'wool' have no 'a' in front, because we mean the material in general.",
  },
  'This is the ___ towel in the shop. (soft)': {
    why: "One towel is set against every other towel in the shop, so the gap needs the superlative. 'Soft' is short: add -est, 'softest'.",
    not: {
      softer:
        "'Softer' is the comparative, for two things. Here one is set against every other towel in the shop, so it needs the superlative: 'softest'.",
      'most soft':
        "'Most' goes before long adjectives. 'Soft' has one syllable, so it takes -est instead: 'softest'.",
      'most softest':
        "'Most softest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'softest'.",
    },
    more: "Adverts often promise 'the smoothest ride' or 'the boldest flavour'. A superlative is a big claim.",
    tip: "Keep 'the' in front of a superlative. Without it, the sentence sounds unfinished.",
  },
  'Honey is ___ than milk. (sweet)': {
    why: "'Than' compares honey and milk, so the gap needs the comparative. 'Sweet' has one syllable, so we add -er: 'sweeter'.",
    not: {
      sweetest:
        "'Sweetest' is the superlative, for one thing set against a whole group. This sentence compares two things, honey and milk, so it needs the comparative: 'sweeter'.",
      'more sweet':
        "'More' goes before long adjectives. 'Sweet' has one syllable, so it takes -er instead: 'sweeter'.",
      sweet:
        "'Sweet' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'sweeter'.",
    },
    more: "'Sweet' describes taste, but also a kind person or a lovely sight: 'a sweet smile'.",
    tip: 'Two vowels (ee) before the last letter mean no doubling: s-w-e-e-t-e-r.',
  },
  'These are the ___ grapes in the box. (sweet)': {
    why: "These grapes are set against all the other grapes in the box, so the gap needs the superlative. 'Sweet' is short: add -est, 'sweetest'.",
    not: {
      sweeter:
        "'Sweeter' is the comparative, for two things. Here one is set against all the other grapes in the box, so it needs the superlative: 'sweetest'.",
      'most sweet':
        "'Most' goes before long adjectives. 'Sweet' has one syllable, so it takes -est instead: 'sweetest'.",
      'most sweetest':
        "'Most sweetest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'sweetest'.",
    },
    more: "In Britain, 'sweets' is also a noun: the small sugary things children buy. Americans call them 'candy'.",
    tip: "'These are the ...' goes with plural nouns: grapes, apples, shoes.",
  },
  'The sky is ___ at night than in the day. (dark)': {
    why: "'Than' compares the sky at two times, at night and in the day, so the gap needs the comparative. 'Dark' has one syllable, so we add -er: 'darker'.",
    not: {
      darkest:
        "'Darkest' is the superlative, for one thing set against a whole group. This sentence compares two things, the sky at night and the sky in the day, so it needs the comparative: 'darker'.",
      'more dark':
        "'More' goes before long adjectives. 'Dark' has one syllable, so it takes -er instead: 'darker'.",
      dark: "'Dark' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'darker'.",
    },
    more: 'Here one thing is compared at two times. A comparison does not always need two different things.',
    tip: "Put a time phrase on each side of 'than': '... at night than in the day'.",
  },
  'December has the ___ evenings of the year. (dark)': {
    why: "December's evenings are set against the evenings of every other month, so the gap needs the superlative. 'Dark' is short: add -est, 'darkest'.",
    not: {
      darker:
        "'Darker' is the comparative, for two things. Here one is set against the evenings of every other month, so it needs the superlative: 'darkest'.",
      'most dark':
        "'Most' goes before long adjectives. 'Dark' has one syllable, so it takes -est instead: 'darkest'.",
      'most darkest':
        "'Most darkest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'darkest'.",
    },
    more: "In Britain, the sun sets before four o'clock on some December afternoons.",
    tip: "'Has the ... evenings' is a superlative with a plural noun. The adjective keeps its form.",
  },
  'Email is ___ than a letter. (quick)': {
    why: "'Than' compares two ways to send a message, email and a letter, so the gap needs the comparative. 'Quick' has one syllable, so we add -er: 'quicker'.",
    not: {
      quickest:
        "'Quickest' is the superlative, for one thing set against a whole group. This sentence compares two things, email and a letter, so it needs the comparative: 'quicker'.",
      'more quicker':
        "'More quicker' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'quicker'.",
      quick:
        "'Quick' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'quicker'.",
    },
    more: "'Quick' and 'fast' mean almost the same. 'Quick' is used more for actions that take little time: 'a quick look'.",
    tip: "In speech 'quicker' is also an adverb ('come quicker'), but in writing use 'more quickly'.",
  },
  'Ali was the ___ to finish the test in our class. (quick)': {
    why: "Ali is set against everyone else in our class, so the gap needs the superlative. 'Quick' is short: add -est, 'quickest'.",
    not: {
      quicker:
        "'Quicker' is the comparative, for two things. Here one is set against everyone else in our class, so it needs the superlative: 'quickest'.",
      'most quick':
        "'Most' goes before long adjectives. 'Quick' has one syllable, so it takes -est instead: 'quickest'.",
      'most quickest':
        "'Most quickest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'quickest'.",
    },
    more: "'The ... to finish' puts one person ahead of a group, like 'the first to arrive' or 'the last to leave'.",
    tip: 'Finishing first is not everything in a test. Use any time left to check your answers.',
  },
  'The king was ___ than the farmer. (rich)': {
    why: "'Than' compares the king and the farmer, so the gap needs the comparative. 'Rich' has one syllable, so we add -er: 'richer'.",
    not: {
      richest:
        "'Richest' is the superlative, for one thing set against a whole group. This sentence compares two things, the king and the farmer, so it needs the comparative: 'richer'.",
      'more rich':
        "'More' goes before long adjectives. 'Rich' has one syllable, so it takes -er instead: 'richer'.",
      rich: "'Rich' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'richer'.",
    },
    more: "'Rich' can also describe food with a lot of butter or cream: 'a rich cake'.",
    tip: "Use 'was' and 'than' for comparisons in a story set in the past.",
  },
  'He was the ___ man in the village. (rich)': {
    why: "He is set against everyone else in the village, so the gap needs the superlative. 'Rich' is short: add -est, 'richest'.",
    not: {
      richer:
        "'Richer' is the comparative, for two things. Here one is set against everyone else in the village, so it needs the superlative: 'richest'.",
      'most rich':
        "'Most' goes before long adjectives. 'Rich' has one syllable, so it takes -est instead: 'richest'.",
      'most richest':
        "'Most richest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'richest'.",
    },
    more: "Old stories often begin with a superlative: 'the bravest knight in the land'.",
    tip: 'A superlative is a quick way to describe a character at the start of a story.',
  },
  'A tree trunk is ___ than a branch. (thick)': {
    why: "'Than' compares a tree trunk and a branch, so the gap needs the comparative. 'Thick' has one syllable, so we add -er: 'thicker'.",
    not: {
      thickest:
        "'Thickest' is the superlative, for one thing set against a whole group. This sentence compares two things, a tree trunk and a branch, so it needs the comparative: 'thicker'.",
      'more thick':
        "'More' goes before long adjectives. 'Thick' has one syllable, so it takes -er instead: 'thicker'.",
      thick:
        "'Thick' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'thicker'.",
    },
    more: "'Thick' ends in ck, two letters, so nothing doubles before the ending.",
    tip: 'Words ending in ck just add the ending: thick, thicker; black, blacker.',
  },
  'This is the ___ book on the shelf. (thick)': {
    why: "One book is set against every other book on the shelf, so the gap needs the superlative. 'Thick' is short: add -est, 'thickest'.",
    not: {
      thicker:
        "'Thicker' is the comparative, for two things. Here one is set against every other book on the shelf, so it needs the superlative: 'thickest'.",
      'most thick':
        "'Most' goes before long adjectives. 'Thick' has one syllable, so it takes -est instead: 'thickest'.",
      'most thickest':
        "'Most thickest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'thickest'.",
    },
    more: 'A thick book has many pages. A long book takes a long time to read. The two often go together.',
    tip: "'On the shelf' names the group. Words like 'on' and 'in' often follow a superlative.",
  },
  'The park is ___ to my house than the school. (near)': {
    why: "'Than' compares how far two places are from my house, the park and the school, so the gap needs the comparative. 'Near' has one syllable, so we add -er: 'nearer'.",
    not: {
      nearest:
        "'Nearest' is the superlative, for one thing set against a whole group. This sentence compares two things, the park and the school, so it needs the comparative: 'nearer'.",
      'more near':
        "'More' goes before long adjectives. 'Near' has one syllable, so it takes -er instead: 'nearer'.",
      near: "'Near' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'nearer'.",
    },
    more: "'Near' often takes 'to': 'nearer to my house'. You can also leave 'to' out: 'nearer my house'.",
    tip: "'Near' and 'far' are opposites, but only 'near' follows the regular -er rule.",
  },
  'Of all the shops, this one is the ___ to my house. (near)': {
    why: "'Of all the shops' sets one shop against every other shop, so the gap needs the superlative. 'Near' is short: add -est, 'nearest'.",
    not: {
      nearer:
        "'Nearer' is the comparative, for two things. Here one is set against all the other shops, so it needs the superlative: 'nearest'.",
      'most near':
        "'Most' goes before long adjectives. 'Near' has one syllable, so it takes -est instead: 'nearest'.",
      'most nearest':
        "'Most nearest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'nearest'.",
    },
    more: "'Of all the ...' at the start of a sentence warns you that a superlative is coming.",
    tip: "In directions, people ask for 'the nearest bus stop' or 'the nearest chemist'.",
  },
  'Bread from the baker is ___ than bread from a packet. (fresh)': {
    why: "'Than' compares two kinds of bread, from the baker and from a packet, so the gap needs the comparative. 'Fresh' has one syllable, so we add -er: 'fresher'.",
    not: {
      freshest:
        "'Freshest' is the superlative, for one thing set against a whole group. This sentence compares two things, bread from the baker and bread from a packet, so it needs the comparative: 'fresher'.",
      'more fresher':
        "'More fresher' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'fresher'.",
      fresh:
        "'Fresh' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'fresher'.",
    },
    more: "In Britain a 'fresher' is also a new student in their first weeks at university.",
    tip: "'The baker's' is the shop; 'the baker' is the person. Both are common in British English.",
  },
  'They sell the ___ fish in the market. (fresh)': {
    why: "Their fish is set against all the fish in the market, so the gap needs the superlative. 'Fresh' is short: add -est, 'freshest'.",
    not: {
      fresher:
        "'Fresher' is the comparative, for two things. Here one is set against all the fish in the market, so it needs the superlative: 'freshest'.",
      'most freshest':
        "'Most freshest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'freshest'.",
    },
    more: "'Fish' is the same in the singular and the plural: one fish, many fish.",
    tip: "'In the market' names the group. A group can be a place: 'in the market', 'in town'.",
  },
  'The sun is ___ than the moon. (bright)': {
    why: "'Than' compares the sun and the moon, so the gap needs the comparative. 'Bright' has one syllable, so we add -er: 'brighter'.",
    not: {
      brightest:
        "'Brightest' is the superlative, for one thing set against a whole group. This sentence compares two things, the sun and the moon, so it needs the comparative: 'brighter'.",
      'more brighter':
        "'More brighter' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'brighter'.",
      bright:
        "'Bright' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'brighter'.",
    },
    more: 'The moon has no light of its own. It shines because it reflects light from the sun.',
    tip: "The gh in 'bright' is silent, and it stays silent in every form of the word.",
  },
  'This is the ___ lamp in the house. (bright)': {
    why: "One lamp is set against every other lamp in the house, so the gap needs the superlative. 'Bright' is short: add -est, 'brightest'.",
    not: {
      brighter:
        "'Brighter' is the comparative, for two things. Here one is set against every other lamp in the house, so it needs the superlative: 'brightest'.",
      'most bright':
        "'Most' goes before long adjectives. 'Bright' has one syllable, so it takes -est instead: 'brightest'.",
      'most brightest':
        "'Most brightest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'brightest'.",
    },
    more: "'Bright' can also mean clever: 'a bright student'. The forms are the same in both meanings.",
    tip: "Use 'bright' for light and colour, and 'bright' or 'clever' for people.",
  },
  'A bed is ___ than a table. (low)': {
    why: "'Than' compares a bed and a table, so the gap needs the comparative. 'Low' has one syllable, so we add -er: 'lower'.",
    not: {
      lowest:
        "'Lowest' is the superlative, for one thing set against a whole group. This sentence compares two things, a bed and a table, so it needs the comparative: 'lower'.",
      'more low':
        "'More' goes before long adjectives. 'Low' has one syllable, so it takes -er instead: 'lower'.",
      low: "'Low' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'lower'.",
    },
    more: "'Low' ends in -w, which never doubles, so the ending goes straight on: l-o-w-e-r.",
    tip: "'Low' and 'high' are opposites, and both follow the simple -er rule.",
  },
  'This shop has the ___ prices in town. (low)': {
    why: "This shop's prices are set against the prices of every other shop in town, so the gap needs the superlative. 'Low' is short: add -est, 'lowest'.",
    not: {
      lower:
        "'Lower' is the comparative, for two things. Here one is set against the prices of every other shop in town, so it needs the superlative: 'lowest'.",
      'most low':
        "'Most' goes before long adjectives. 'Low' has one syllable, so it takes -est instead: 'lowest'.",
      'most lowest':
        "'Most lowest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'lowest'.",
    },
    more: "Prices are 'low' or 'high'; things are 'cheap' or 'expensive'. A cheap coat has a low price.",
    tip: 'When an advert makes a superlative claim, ask yourself what it is compared with.',
  },
  'After the long walk my legs felt ___ than before. (weak)': {
    why: "'Than before' compares my legs at two times, after the walk and before it, so the gap needs the comparative. 'Weak' has one syllable, so we add -er: 'weaker'.",
    not: {
      weakest:
        "'Weakest' is the superlative, for one thing set against a whole group. This sentence compares two things, my legs after the walk and before it, so it needs the comparative: 'weaker'.",
      'more weak':
        "'More' goes before long adjectives. 'Weak' has one syllable, so it takes -er instead: 'weaker'.",
      weak: "'Weak' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'weaker'.",
    },
    more: "'Feel' is followed by an adjective, not an adverb: 'my legs felt weak', not 'weakly'.",
    tip: "'Than before' and 'than ever' compare something with itself at another time.",
  },
  'Of the four parts of the test, reading was my ___. (weak)': {
    why: "'Of the four parts' sets reading against the other three, so the gap needs the superlative. 'Weak' is short: add -est, 'weakest'.",
    not: {
      weaker:
        "'Weaker' is the comparative, for two things. Here one is set against the other three parts of the test, so it needs the superlative: 'weakest'.",
      'most weak':
        "'Most' goes before long adjectives. 'Weak' has one syllable, so it takes -est instead: 'weakest'.",
      'most weakest':
        "'Most weakest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'weakest'.",
    },
    more: "Teachers talk about your 'strengths' and 'weaknesses': the things you do well and the things to work on.",
    tip: 'Name the part that gives you most trouble and plan how to practise it. That is how to improve.',
  },
  'The village was ___ than the city. (poor)': {
    why: "'Than' compares the village and the city, so the gap needs the comparative. 'Poor' has one syllable, so we add -er: 'poorer'.",
    not: {
      poorest:
        "'Poorest' is the superlative, for one thing set against a whole group. This sentence compares two things, the village and the city, so it needs the comparative: 'poorer'.",
      'more poor':
        "'More' goes before long adjectives. 'Poor' has one syllable, so it takes -er instead: 'poorer'.",
      poor: "'Poor' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'poorer'.",
    },
    more: "'Poor' has two meanings: having little money, and not good ('poor work'). The forms are the same.",
    tip: 'Two vowels (oo) before the r mean no doubling: p-o-o-r-e-r.',
  },
  'It was the ___ farm in the whole valley. (poor)': {
    why: "The farm is set against every other farm in the whole valley, so the gap needs the superlative. 'Poor' is short: add -est, 'poorest'.",
    not: {
      poorer:
        "'Poorer' is the comparative, for two things. Here one is set against every other farm in the whole valley, so it needs the superlative: 'poorest'.",
      'most poor':
        "'Most' goes before long adjectives. 'Poor' has one syllable, so it takes -est instead: 'poorest'.",
      'most poorest':
        "'Most poorest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'poorest'.",
    },
    more: "A 'valley' is the low land between hills, often with a river running through it.",
    tip: "Use 'was' with a superlative when you tell a story about the past.",
  },
  'A cellar is the ___ part of a house. (cool)': {
    why: "The cellar is set against every other part of a house, so the gap needs the superlative. 'Cool' is short: add -est, 'coolest'.",
    not: {
      cooler:
        "'Cooler' is the comparative, for two things. Here one is set against every other part of a house, so it needs the superlative: 'coolest'.",
      'most coolest':
        "'Most coolest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'coolest'.",
    },
    more: 'A cellar is a room under the ground, so the sun cannot warm it. People once kept food there.',
    tip: "'Cool' also means 'fashionable' in informal English: 'That is a cool jacket.'",
  },
  'Ten is ___ than five. (great)': {
    why: "'Than' compares two numbers, ten and five, so the gap needs the comparative. 'Great' has one syllable, so we add -er: 'greater'.",
    not: {
      greatest:
        "'Greatest' is the superlative, for one thing set against a whole group. This sentence compares two things, ten and five, so it needs the comparative: 'greater'.",
      'more great':
        "'More' goes before long adjectives. 'Great' has one syllable, so it takes -er instead: 'greater'.",
      great:
        "'Great' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'greater'.",
    },
    more: "In maths, 'greater than' means 'more than', and its sign is >. 'Less than' has the sign <.",
    tip: "Read the sign > aloud as 'is greater than': 10 > 5.",
  },
  'Of 4, 17, 99 and 52, the ___ number is 99. (great)': {
    why: "'Of 4, 17, 99 and 52' gives a group of four numbers, and 99 is set against the other three, so the gap needs the superlative. 'Great' is short: add -est, 'greatest'.",
    not: {
      greater:
        "'Greater' is the comparative, for two things. Here one is set against the other three numbers, so it needs the superlative: 'greatest'.",
      'most great':
        "'Most' goes before long adjectives. 'Great' has one syllable, so it takes -est instead: 'greatest'.",
      'most greatest':
        "'Most greatest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'greatest'.",
    },
    more: "'Great' also means very good: 'a great film'. For numbers it means more in amount.",
    tip: "In maths, 'the greatest' is the number that comes last when you put the list in order from smallest to largest.",
  },
  'The bus was ___ than usual today. (late)': {
    why: "'Than usual' compares today with a normal day, so the gap needs the comparative. 'Late' ends in -e, so we just add -r: 'later'.",
    not: {
      latest:
        "'Latest' is the superlative, for one thing set against a whole group. This sentence compares two things, the bus today and on a usual day, so it needs the comparative: 'later'.",
      'more late':
        "'More' goes before long adjectives. 'Late' has one syllable and ends in -e, so it just adds -r: 'later'.",
      late: "'Late' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'later'.",
    },
    more: "'Later' is also a word on its own: 'See you later.' 'Latter', with two t's, is a different word.",
    tip: 'Words ending in -e add only -r: brave, braver; pale, paler.',
  },
  'The 11.30 is the ___ train of the night. (late)': {
    why: "One train is set against every other train that night, so the gap needs the superlative. 'Late' ends in -e, so we just add -st: 'latest'.",
    not: {
      later:
        "'Later' is the comparative, for two things. Here one is set against every other train that night, so it needs the superlative: 'latest'.",
      'most late':
        "'Most' goes before long adjectives. 'Late' has one syllable and ends in -e, so it just adds -st: 'latest'.",
      'most latest':
        "'Most latest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'latest'.",
    },
    more: "'Latest' can also mean most recent: 'the latest news'.",
    tip: 'British timetables write times with a dot or a colon: 11.30 or 11:30.',
  },
  'Is it ___ in Scotland than in England? (cold)': {
    why: "'Than' compares two places, Scotland and England, so the gap needs the comparative, even in a question. 'Cold' is short: add -er, 'colder'.",
    not: {
      coldest:
        "'Coldest' is the superlative, for one thing set against a whole group. This sentence compares two things, Scotland and England, so it needs the comparative: 'colder'.",
      'more colder':
        "'More colder' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'colder'.",
      cold: "'Cold' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'colder'.",
    },
    more: "In a question the verb comes first, but the comparative stays in the same place: 'Is it ... in Scotland?'",
    tip: "Answer such a question with a full comparison: 'Yes, it is usually colder in the north.'",
  },
  'Is a train ___ than a bus? (long)': {
    why: "'Than' compares a train and a bus, so the gap needs the comparative, even in a question. 'Long' is short: add -er, 'longer'.",
    not: {
      longest:
        "'Longest' is the superlative, for one thing set against a whole group. This sentence compares two things, a train and a bus, so it needs the comparative: 'longer'.",
      'more longer':
        "'More longer' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'longer'.",
      long: "'Long' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'longer'.",
    },
    more: 'A question can compare too. The verb comes first, and the comparative comes after the first noun.',
    tip: "Answer with a short form: 'Yes, it is.' You do not need to repeat the comparison.",
  },
  'Are oranges ___ than lemons? (sweet)': {
    why: "'Than' compares two fruits, oranges and lemons, so the gap needs the comparative, even in a question. 'Sweet' is short: add -er, 'sweeter'.",
    not: {
      sweetest:
        "'Sweetest' is the superlative, for one thing set against a whole group. This sentence compares two things, oranges and lemons, so it needs the comparative: 'sweeter'.",
      'more sweeter':
        "'More sweeter' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'sweeter'.",
      sweet:
        "'Sweet' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'sweeter'.",
    },
    more: "'Oranges and Lemons' is also an old English nursery rhyme about the bells of London churches.",
    tip: "Make questions with 'Are ... than ...?' for plural nouns and 'Is ... than ...?' for one thing.",
  },
  'Is a mouse ___ than a rat? (small)': {
    why: "'Than' compares a mouse and a rat, so the gap needs the comparative, even in a question. 'Small' is short: add -er, 'smaller'.",
    not: {
      smallest:
        "'Smallest' is the superlative, for one thing set against a whole group. This sentence compares two things, a mouse and a rat, so it needs the comparative: 'smaller'.",
      'more smaller':
        "'More smaller' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'smaller'.",
      small:
        "'Small' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'smaller'.",
    },
    more: 'Questions with a comparative often ask about two things side by side, as here.',
    tip: "Short answers keep the verb of the question: 'Yes, it is.' or 'No, it is not.'",
  },
  'The Nile is one of the ___ rivers on Earth. (long)': {
    why: "'One of the' picks one river out of a big group, all the rivers on Earth, so the gap needs the superlative, with a plural noun after it. 'Long' is short: add -est, 'longest'.",
    not: {
      'most long':
        "'Most' goes before long adjectives. 'Long' has one syllable, so it takes -est instead: 'longest'.",
      'most longest':
        "'Most longest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'longest'.",
      'more long':
        "'More long' is wrong twice: 'more' is for long adjectives, and 'one of the' needs a superlative. 'Long' takes -est: 'longest'.",
    },
    more: "After 'one of the', the noun is always plural: 'one of the steepest hills', not 'one of the steepest hill'.",
    tip: "Use 'one of the' when you are not sure something is number one. Experts still argue about whether the Nile or the Amazon wins.",
  },
  'This pillow is ___ than that one. (thin)': {
    why: "'Than' compares two pillows, this one and that one, so the gap needs the comparative. 'Thin' ends in one vowel and one consonant, so the n doubles: 'thinner'.",
    not: {
      thiner:
        "'Thiner' does not double the last letter. 'Thin' ends in one vowel and one consonant, so the consonant doubles: 'thinner'.",
      thinnest:
        "'Thinnest' is the superlative, for one thing set against a whole group. This sentence compares two things, this pillow and that one, so it needs the comparative: 'thinner'.",
      'more thin':
        "'More' goes before long adjectives. 'Thin' has one syllable, so it doubles its last letter and adds -er: 'thinner'.",
    },
    more: "The opposite is 'thick', which ends in two consonants (ck), so nothing doubles there.",
    tip: "Keep a list of the short doubling words you meet, such as 'red' and 'flat', and add to it.",
  },
  'My grandfather is the ___ runner I know. (fit)': {
    why: "Grandfather is set against every runner I know, so the gap needs the superlative. 'Fit' ends in one vowel and one consonant, so the t doubles: 'fittest'.",
    not: {
      fitest:
        "'Fitest' does not double the last letter. 'Fit' ends in one vowel and one consonant, so the consonant doubles: 'fittest'.",
      fitter:
        "'Fitter' is the comparative, for two things. Here one is set against every runner I know, so it needs the superlative: 'fittest'.",
      'most fittest':
        "'Most fittest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'fittest'.",
    },
    more: "'Fit' means healthy and strong. 'The survival of the fittest' is a famous phrase about nature.",
    tip: "'The ... I know' is a useful frame for describing people: 'the neatest writer I know'.",
  },
  'My garden is ___ than the park. (wet)': {
    why: "'Than' compares my garden and the park, so the gap needs the comparative. 'Wet' ends in one vowel and one consonant, so the t doubles: 'wetter'.",
    not: {
      weter:
        "'Weter' does not double the last letter. 'Wet' ends in one vowel and one consonant, so the consonant doubles: 'wetter'.",
      wettest:
        "'Wettest' is the superlative, for one thing set against a whole group. This sentence compares two things, my garden and the park, so it needs the comparative: 'wetter'.",
      'more wet':
        "'More' goes before long adjectives. 'Wet' has one syllable, so it doubles its last letter and adds -er: 'wetter'.",
    },
    more: "Opposites can follow different rules: 'wet' doubles its t, but 'dry' changes its y to i.",
    tip: "Do not mix up 'wetter' and 'weather'. In some accents they sound almost the same.",
  },
  'That was the ___ song of the night. (sad)': {
    why: "The song is set against every other song that night, so the gap needs the superlative. 'Sad' ends in one vowel and one consonant, so the d doubles: 'saddest'.",
    not: {
      sadest:
        "'Sadest' does not double the last letter. 'Sad' ends in one vowel and one consonant, so the consonant doubles: 'saddest'.",
      sadder:
        "'Sadder' is the comparative, for two things. Here one is set against every other song that night, so it needs the superlative: 'saddest'.",
      'most saddest':
        "'Most saddest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'saddest'.",
    },
    more: "Music is often described with superlatives: 'the saddest song', 'the wildest dance'.",
    tip: 'Learn doubling words in sets of three: sad, sadder, saddest; flat, flatter, flattest.',
  },
  'A lion is ___ than a kitten. (large)': {
    why: "'Than' compares a lion and a kitten, so the gap needs the comparative. 'Large' already ends in -e, so we just add -r: 'larger'.",
    not: {
      largest:
        "'Largest' is the superlative, for one thing set against a whole group. This sentence compares two things, a lion and a kitten, so it needs the comparative: 'larger'.",
      'more large':
        "'More' goes before long adjectives. 'Large' has one syllable and ends in -e, so it just adds -r: 'larger'.",
      large:
        "'Large' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'larger'.",
    },
    more: "'Large' is a little more formal than 'big'. Clothes labels use it: S, M and L stand for small, medium and large.",
    tip: 'Before you add an ending, check the last letter. If it is e, add only -r or -st.',
  },
  'This is the ___ room in the house. (large)': {
    why: "One room is set against every other room in the house, so the gap needs the superlative. 'Large' ends in -e, so we just add -st: 'largest'.",
    not: {
      larger:
        "'Larger' is the comparative, for two things. Here one is set against every other room in the house, so it needs the superlative: 'largest'.",
      'most large':
        "'Most' goes before long adjectives. 'Large' has one syllable and ends in -e, so it just adds -st: 'largest'.",
      'most largest':
        "'Most largest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'largest'.",
    },
    more: 'With an -e adjective, the e stays and nothing is doubled: l-a-r-g-e-s-t.',
    tip: 'One e is enough. Add -st to the word as it is.',
  },
  'My route to school is ___ than yours. (safe)': {
    why: "'Than' compares my route to school and yours, so the gap needs the comparative. 'Safe' ends in -e, so we just add -r: 'safer'.",
    not: {
      safest:
        "'Safest' is the superlative, for one thing set against a whole group. This sentence compares two things, my route to school and yours, so it needs the comparative: 'safer'.",
      'more safer':
        "'More safer' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'safer'.",
      safe: "'Safe' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'safer'.",
    },
    more: "The opposite of 'safe' is 'dangerous', a long word with a different rule. Opposites do not always compare in the same way.",
    tip: "'Route' rhymes with 'boot' in British English. It means the way you go.",
  },
  'This is the ___ seat on the bus. (safe)': {
    why: "One seat is set against every other seat on the bus, so the gap needs the superlative. 'Safe' ends in -e, so we just add -st: 'safest'.",
    not: {
      safer:
        "'Safer' is the comparative, for two things. Here one is set against every other seat on the bus, so it needs the superlative: 'safest'.",
      'most safest':
        "'Most safest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'safest'.",
    },
    more: "Safety signs and adverts use superlatives: 'the safest car', 'the safest way to cross'.",
    tip: 'Add only -st to an adjective that ends in -e: brave, bravest; safe, safest.',
  },
  'Spring days are ___ than winter days. (nice)': {
    why: "'Than' compares spring days and winter days, so the gap needs the comparative. 'Nice' ends in -e, so we just add -r: 'nicer'.",
    not: {
      nicest:
        "'Nicest' is the superlative, for one thing set against a whole group. This sentence compares two things, spring days and winter days, so it needs the comparative: 'nicer'.",
      'more nicer':
        "'More nicer' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'nicer'.",
      nice: "'Nice' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'nicer'.",
    },
    more: "'Nice' is very common in speech. In writing, a more exact word often works well, such as 'milder' or 'calmer'.",
    tip: 'Do not double the c or the e: n-i-c-e-r.',
  },
  'That was the ___ meal of the holiday. (nice)': {
    why: "The meal is set against every other meal of the holiday, so the gap needs the superlative. 'Nice' ends in -e, so we just add -st: 'nicest'.",
    not: {
      nicer:
        "'Nicer' is the comparative, for two things. Here one is set against every other meal of the holiday, so it needs the superlative: 'nicest'.",
      'most nice':
        "'Most' goes before long adjectives. 'Nice' has one syllable and ends in -e, so it just adds -st: 'nicest'.",
      'most nicest':
        "'Most nicest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'nicest'.",
    },
    more: "'Holiday' is the British word for a trip away or time off school. Americans often say 'vacation'.",
    tip: "In an exam answer, try a more exact word than 'nice', such as 'tasty' or 'delicious'.",
  },
  'Her bedroom is ___ than mine. (wide)': {
    why: "'Than' compares her bedroom and mine, so the gap needs the comparative. 'Wide' ends in -e, so we just add -r: 'wider'.",
    not: {
      widest:
        "'Widest' is the superlative, for one thing set against a whole group. This sentence compares two things, her bedroom and mine, so it needs the comparative: 'wider'.",
      'more wide':
        "'More' goes before long adjectives. 'Wide' has one syllable and ends in -e, so it just adds -r: 'wider'.",
      wide: "'Wide' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'wider'.",
    },
    more: "'Wide' measures from side to side. Its noun is 'width', as 'long' gives 'length'.",
    tip: 'Never double the d: w-i-d-e-r. The e is already there.',
  },
  'I feel ___ today than yesterday. (happy)': {
    why: "'Than' compares how I feel today and yesterday, so the gap needs the comparative. 'Happy' ends in a consonant and -y, so the y changes to i before -er: 'happier'.",
    not: {
      happyer:
        "'Happyer' keeps the y. In 'happy' a consonant comes before the y, so the y changes to i: 'happier'.",
      happiest:
        "'Happiest' is the superlative, for one thing set against a whole group. This sentence compares two things, how I feel today and yesterday, so it needs the comparative: 'happier'.",
      'more happier':
        "'More happier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'happier'.",
    },
    more: "Two-syllable adjectives ending in -y take -er and -est, not 'more' and 'most': lucky, luckier; juicy, juicier.",
    tip: "'Feel' takes an adjective: 'I feel happier', never 'I feel more happily'.",
  },
  'This is the ___ day of my life. (happy)': {
    why: "This day is set against every other day of my life, so the gap needs the superlative. 'Happy' changes y to i before -est: 'happiest'.",
    not: {
      happyest:
        "'Happyest' keeps the y. In 'happy' a consonant comes before the y, so the y changes to i: 'happiest'.",
      happier:
        "'Happier' is the comparative, for two things. Here one is set against every other day of my life, so it needs the superlative: 'happiest'.",
      'most happiest':
        "'Most happiest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'happiest'.",
    },
    more: "'The ... day of my life' is a strong way to show feeling. People say it at weddings and birthdays.",
    tip: 'When a consonant comes before the y, the y becomes i before the ending.',
  },
  'My bedroom is ___ than the kitchen. (tidy)': {
    why: "'Than' compares my bedroom and the kitchen, so the gap needs the comparative. 'Tidy' ends in a consonant and -y, so the y changes to i: 'tidier'.",
    not: {
      tidyer:
        "'Tidyer' keeps the y. In 'tidy' a consonant comes before the y, so the y changes to i: 'tidier'.",
      tidiest:
        "'Tidiest' is the superlative, for one thing set against a whole group. This sentence compares two things, my bedroom and the kitchen, so it needs the comparative: 'tidier'.",
      tidy: "'Tidy' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'tidier'.",
    },
    more: "'Tidy' means everything is in its place. It is very common in British English: 'Tidy your room.'",
    tip: 'After a vowel, the y stays: grey, greyer. After a consonant, it changes: tidy, tidier.',
  },
  'She is the ___ student in our class. (busy)': {
    why: "She is set against every other student in our class, so the gap needs the superlative. 'Busy' changes y to i before -est: 'busiest'.",
    not: {
      busyest:
        "'Busyest' keeps the y. In 'busy' a consonant comes before the y, so the y changes to i: 'busiest'.",
      busier:
        "'Busier' is the comparative, for two things. Here one is set against every other student in our class, so it needs the superlative: 'busiest'.",
      'most busiest':
        "'Most busiest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'busiest'.",
    },
    more: "'Busy' sounds like 'bizzy', so the spelling and the sound do not match. Learn it by sight.",
    tip: "'Busy' also describes places full of people: 'a busy street'.",
  },
  'This puzzle is ___ than the last one. (easy)': {
    why: "'Than' compares this puzzle and the last one, so the gap needs the comparative. 'Easy' ends in a consonant and -y, so the y changes to i: 'easier'.",
    not: {
      easyer:
        "'Easyer' keeps the y. In 'easy' a consonant comes before the y, so the y changes to i: 'easier'.",
      easiest:
        "'Easiest' is the superlative, for one thing set against a whole group. This sentence compares two things, this puzzle and the last one, so it needs the comparative: 'easier'.",
      'more easier':
        "'More easier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'easier'.",
    },
    more: "'Easy' and 'difficult' are opposites, but 'difficult' is a long word that follows a different rule.",
    tip: "'The last one' means the puzzle before this. 'One' saves repeating the noun.",
  },
  'That is the ___ question on the paper. (easy)': {
    why: "One question is set against every other question on the paper, so the gap needs the superlative. 'Easy' changes y to i before -est: 'easiest'.",
    not: {
      easyest:
        "'Easyest' keeps the y. In 'easy' a consonant comes before the y, so the y changes to i: 'easiest'.",
      easier:
        "'Easier' is the comparative, for two things. Here one is set against every other question on the paper, so it needs the superlative: 'easiest'.",
      'most easiest':
        "'Most easiest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'easiest'.",
    },
    more: "'The paper' here means the exam paper, the printed set of questions. It is a common use in British schools.",
    tip: 'In an exam, many students start with the easiest question to build confidence.',
  },
  'My dog is ___ than the cat. (noisy)': {
    why: "'Than' compares my dog and the cat, so the gap needs the comparative. 'Noisy' ends in a consonant and -y, so the y changes to i: 'noisier'.",
    not: {
      noisyer:
        "'Noisyer' keeps the y. In 'noisy' a consonant comes before the y, so the y changes to i: 'noisier'.",
      noisiest:
        "'Noisiest' is the superlative, for one thing set against a whole group. This sentence compares two things, my dog and the cat, so it needs the comparative: 'noisier'.",
      'more noisier':
        "'More noisier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'noisier'.",
    },
    more: 'Many -y adjectives come from nouns: noise, noisy; mud, muddy; luck, lucky.',
    tip: 'When you meet a new -y adjective, write its -er and -est forms in your notebook.',
  },
  'It was the ___ road in the whole town. (dirty)': {
    why: "The road is set against every other road in the whole town, so the gap needs the superlative. 'Dirty' changes y to i before -est: 'dirtiest'.",
    not: {
      dirtyest:
        "'Dirtyest' keeps the y. In 'dirty' a consonant comes before the y, so the y changes to i: 'dirtiest'.",
      dirtier:
        "'Dirtier' is the comparative, for two things. Here one is set against every other road in the whole town, so it needs the superlative: 'dirtiest'.",
      'most dirtiest':
        "'Most dirtiest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'dirtiest'.",
    },
    more: "'The whole town' means all of it, so no road is left out of the comparison.",
    tip: "Use 'was' for a superlative in the past: 'It was the ... road.'",
  },
  'The film was ___ than the book. (funny)': {
    why: "'Than' compares the film and the book, so the gap needs the comparative. 'Funny' ends in a consonant and -y, so the y changes to i: 'funnier'.",
    not: {
      funnyer:
        "'Funnyer' keeps the y. In 'funny' a consonant comes before the y, so the y changes to i: 'funnier'.",
      funniest:
        "'Funniest' is the superlative, for one thing set against a whole group. This sentence compares two things, the film and the book, so it needs the comparative: 'funnier'.",
      'more funnier':
        "'More funnier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'funnier'.",
    },
    more: "The double n is part of 'funny' itself and stays: f-u-n-n-i-e-r.",
    tip: "Give an opinion with a comparison and a reason: '... because the actors were so good.'",
  },
  'He told the ___ story at the party. (funny)': {
    why: "His story is set against every other story told at the party, so the gap needs the superlative. 'Funny' changes y to i before -est: 'funniest'.",
    not: {
      funnyest:
        "'Funnyest' keeps the y. In 'funny' a consonant comes before the y, so the y changes to i: 'funniest'.",
      funnier:
        "'Funnier' is the comparative, for two things. Here one is set against every other story at the party, so it needs the superlative: 'funniest'.",
      'most funniest':
        "'Most funniest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'funniest'.",
    },
    more: "We 'tell' a story or a joke; we do not 'say' a story.",
    tip: "'At the party' gives the group: every story told there.",
  },
  'Today is ___ than yesterday. (sunny)': {
    why: "'Than' compares two days, today and yesterday, so the gap needs the comparative. 'Sunny' ends in a consonant and -y, so the y changes to i: 'sunnier'.",
    not: {
      sunnyer:
        "'Sunnyer' keeps the y. In 'sunny' a consonant comes before the y, so the y changes to i: 'sunnier'.",
      sunniest:
        "'Sunniest' is the superlative, for one thing set against a whole group. This sentence compares two things, today and yesterday, so it needs the comparative: 'sunnier'.",
      'more sunnier':
        "'More sunnier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'sunnier'.",
    },
    more: 'Weather adjectives often end in -y, made from nouns: sun, sunny; wind, windy; rain, rainy.',
    tip: 'The same rule works for every -y weather word: rain, rainy, rainier.',
  },
  'A diamond ring is ___ than a silver one. (expensive)': {
    why: "'Than' compares a diamond ring and a silver one, so the gap needs the comparative. 'Expensive' has three syllables, so we put 'more' in front: 'more expensive'.",
    not: {
      expensiver:
        "'Expensiver' adds -er to a long adjective. 'Expensive' has three syllables, so it takes 'more' in front: 'more expensive'.",
      'most expensive':
        "'Most expensive' is the superlative, for one thing set against a whole group. This sentence compares two things, a diamond ring and a silver one, so it needs 'more': 'more expensive'.",
      expensive:
        "'Expensive' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more expensive'.",
    },
    more: "Nearly all adjectives of three or more syllables use 'more' and 'most': 'more elegant', 'more fantastic'.",
    tip: "Count the syllables by clapping: ex-pen-sive. Three claps means 'more'.",
  },
  'This is the ___ phone in the shop. (expensive)': {
    why: "One phone is set against every other phone in the shop, so the gap needs the superlative. 'Expensive' is a long adjective, so we put 'most' in front: 'most expensive'.",
    not: {
      expensivest:
        "'Expensivest' adds -est to a long adjective. 'Expensive' has three syllables, so it takes 'most' in front: 'most expensive'.",
      'more expensive':
        "'More expensive' is the comparative, for two things. Here one is set against every other phone in the shop, so it needs 'most': 'most expensive'.",
    },
    more: "Its opposite, 'cheap', is short and takes -est. Long and short adjectives follow different rules.",
    tip: "Never use 'most' and -est together. A long adjective like this one takes 'most' in front.",
  },
  'A plane journey is ___ than a car journey. (comfortable)': {
    why: "'Than' compares two journeys, by plane and by car, so the gap needs the comparative. 'Comfortable' is a long adjective, so we put 'more' in front: 'more comfortable'.",
    not: {
      comfortabler:
        "'Comfortabler' adds -er to a long adjective. 'Comfortable' has many letters and syllables, so it takes 'more' in front: 'more comfortable'.",
      'most comfortable':
        "'Most comfortable' is the superlative, for one thing set against a whole group. This sentence compares two things, a plane journey and a car journey, so it needs 'more': 'more comfortable'.",
      comfortable:
        "'Comfortable' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more comfortable'.",
    },
    more: "Many British speakers say 'comfortable' with three syllables: 'COMF-ta-bul'. It is still a long word, so it takes 'more'.",
    tip: 'This is an opinion, and other people may disagree. Opinions with comparisons are useful in discussions.',
  },
  'This is the ___ chair in the shop. (comfortable)': {
    why: "One chair is set against every other chair in the shop, so the gap needs the superlative. 'Comfortable' is a long adjective, so we put 'most' in front: 'most comfortable'.",
    not: {
      comfortablest:
        "'Comfortablest' adds -est to a long adjective. 'Comfortable' has many letters and syllables, so it takes 'most' in front: 'most comfortable'.",
      'more comfortable':
        "'More comfortable' is the comparative, for two things. Here one is set against every other chair in the shop, so it needs 'most': 'most comfortable'.",
    },
    more: "'Most' has another use: in 'most people' it means more than half of them. Before an adjective, it makes a superlative.",
    tip: "Write 'the most comfortable', with 'the' first.",
  },
  'Science is ___ than history for me. (interesting)': {
    why: "'Than' compares two subjects, science and history, so the gap needs the comparative. 'Interesting' is a long adjective, so we put 'more' in front: 'more interesting'.",
    not: {
      interestinger:
        "'Interestinger' adds -er to a long adjective. 'Interesting' has many letters and syllables, so it takes 'more' in front: 'more interesting'.",
      'most interesting':
        "'Most interesting' is the superlative, for one thing set against a whole group. This sentence compares two things, science and history, so it needs 'more': 'more interesting'.",
      interesting:
        "'Interesting' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more interesting'.",
    },
    more: "Adjectives ending in -ing, such as 'interesting' and 'amazing', always use 'more' and 'most'.",
    tip: "'For me' shows your opinion. Add a reason: '... because I like experiments.'",
  },
  'That was the ___ lesson all week. (interesting)': {
    why: "The lesson is set against every other lesson that week, so the gap needs the superlative. 'Interesting' is a long adjective, so we put 'most' in front: 'most interesting'.",
    not: {
      interestingest:
        "'Interestingest' adds -est to a long adjective. 'Interesting' has many letters and syllables, so it takes 'most' in front: 'most interesting'.",
      'more interesting':
        "'More interesting' is the comparative, for two things. Here one is set against every other lesson that week, so it needs 'most': 'most interesting'.",
    },
    more: "'All week' means during the whole week. It names the group: every lesson from Monday to Friday.",
    tip: "Do not forget 'the': a superlative nearly always has it.",
  },
  'Walking at night is ___ than in the day. (dangerous)': {
    why: "'Than' compares walking at two times, at night and in the day, so the gap needs the comparative. 'Dangerous' has three syllables, so we put 'more' in front: 'more dangerous'.",
    not: {
      dangerouser:
        "'Dangerouser' adds -er to a long adjective. 'Dangerous' has three syllables, so it takes 'more' in front: 'more dangerous'.",
      'most dangerous':
        "'Most dangerous' is the superlative, for one thing set against a whole group. This sentence compares two things, walking at night and in the day, so it needs 'more': 'more dangerous'.",
      dangerous:
        "'Dangerous' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more dangerous'.",
    },
    more: "Its opposite, 'safe', is short and takes -r. Opposites can follow different rules.",
    tip: "Add 'much' to show a big difference: 'much more dangerous'.",
  },
  'That is the ___ road in the city. (dangerous)': {
    why: "The road is set against every other road in the city, so the gap needs the superlative. 'Dangerous' has three syllables, so we put 'most' in front: 'most dangerous'.",
    not: {
      dangerousest:
        "'Dangerousest' adds -est to a long adjective. 'Dangerous' has three syllables, so it takes 'most' in front: 'most dangerous'.",
      'more dangerous':
        "'More dangerous' is the comparative, for two things. Here one is set against every other road in the city, so it needs 'most': 'most dangerous'.",
    },
    more: "Warnings and safety texts often use superlatives: 'the most dangerous road', 'the most serious risk'.",
    tip: "Count the syllables: dan-ger-ous. Three syllables, so 'most', not -est.",
  },
  'This task is ___ than the first one. (difficult)': {
    why: "'Than' compares this task and the first one, so the gap needs the comparative. 'Difficult' has three syllables, so we put 'more' in front: 'more difficult'.",
    not: {
      difficulter:
        "'Difficulter' adds -er to a long adjective. 'Difficult' has three syllables, so it takes 'more' in front: 'more difficult'.",
      'most difficult':
        "'Most difficult' is the superlative, for one thing set against a whole group. This sentence compares two things, this task and the first one, so it needs 'more': 'more difficult'.",
      difficult:
        "'Difficult' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more difficult'.",
    },
    more: "To say a task is not so hard, use 'less' with the plain adjective: 'The second task is less difficult.'",
    tip: "'The first one' means 'the first task'. 'One' saves repeating the noun.",
  },
  'It was the ___ exam of the year. (difficult)': {
    why: "The exam is set against every other exam that year, so the gap needs the superlative. 'Difficult' has three syllables, so we put 'most' in front: 'most difficult'.",
    not: {
      difficultest:
        "'Difficultest' adds -est to a long adjective. 'Difficult' has three syllables, so it takes 'most' in front: 'most difficult'.",
      'more difficult':
        "'More difficult' is the comparative, for two things. Here one is set against every other exam that year, so it needs 'most': 'most difficult'.",
    },
    more: "'Of the year' names the group: all the exams in that year.",
    tip: "In an essay, 'the most difficult part' is a good way to explain a challenge. Add 'because' and a reason.",
  },
  'Her new car is ___ than her old one. (beautiful)': {
    why: "'Than' compares her new car and her old one, so the gap needs the comparative. 'Beautiful' has three syllables, so we put 'more' in front: 'more beautiful'.",
    not: {
      beautifuller:
        "'Beautifuller' adds -er to a long adjective. 'Beautiful' has three syllables, so it takes 'more' in front: 'more beautiful'.",
      'most beautiful':
        "'Most beautiful' is the superlative, for one thing set against a whole group. This sentence compares two things, her new car and her old one, so it needs 'more': 'more beautiful'.",
      beautiful:
        "'Beautiful' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more beautiful'.",
    },
    more: "Adjectives ending in -ful usually take 'more' and 'most', whatever their length: 'more cheerful', 'more painful'.",
    tip: "'Her old one' means 'her old car'. Use 'one' to avoid saying the noun twice.",
  },
  'It was the ___ sunset I had ever seen. (beautiful)': {
    why: "The sunset is set against every sunset I had ever seen, so the gap needs the superlative. 'Beautiful' has three syllables, so we put 'most' in front: 'most beautiful'.",
    not: {
      beautifullest:
        "'Beautifullest' adds -est to a long adjective. 'Beautiful' has three syllables, so it takes 'most' in front: 'most beautiful'.",
      'more beautiful':
        "'More beautiful' is the comparative, for two things. Here one is set against every sunset I had ever seen, so it needs 'most': 'most beautiful'.",
    },
    more: "After a superlative, 'ever' often comes with a perfect tense: 'the ... I had ever seen', 'the ... I have ever read'.",
    tip: "'The most beautiful ... I have ever seen' is a useful phrase for describing places in speaking and writing.",
  },
  'A library is ___ than a playground. (peaceful)': {
    why: "'Than' compares a library and a playground, so the gap needs the comparative. 'Peaceful' has two syllables and does not end in -y, so we put 'more' in front: 'more peaceful'.",
    not: {
      peacefuller:
        "'Peacefuller' adds -er to a long adjective. 'Peaceful' has two syllables and does not end in -y, so it takes 'more' in front: 'more peaceful'.",
      'most peaceful':
        "'Most peaceful' is the superlative, for one thing set against a whole group. This sentence compares two things, a library and a playground, so it needs 'more': 'more peaceful'.",
      peaceful:
        "'Peaceful' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more peaceful'.",
    },
    more: "Two-syllable adjectives ending in -ful or -less take 'more': 'more cheerful', 'more careless'.",
    tip: "For a two-syllable adjective, check the ending: -y takes -er; -ful and -less take 'more'.",
  },
  'My new school is ___ from home than my old one. (far)': {
    why: "'Than' compares how far two schools are from home, so the gap needs the comparative. 'Far' is irregular: its comparative is 'further'.",
    not: {
      farer:
        "'Farer' follows the regular -er rule, but 'far' is irregular. Its comparative is a different word: 'further'.",
      'more far':
        "'More' goes before long adjectives, and 'far' is short and irregular. Its comparative is 'further'.",
      furthest:
        "'Furthest' is the superlative, for one thing set against a whole group. This sentence compares two things, my new school and my old one, so it needs the comparative: 'further'.",
    },
    more: "For distance, British English also uses 'farther'. 'Further' has a second meaning too: extra, as in 'further help'.",
    tip: "Remember the u in 'further': f-u-r-t-h-e-r.",
  },
  'That shop is the ___ one from here. (far)': {
    why: "The shop is set against every other shop near here, so the gap needs the superlative. 'Far' is irregular: its superlative is 'furthest'.",
    not: {
      farest:
        "'Farest' follows the regular -est rule, but 'far' is irregular. Its superlative is 'furthest'.",
      'most far':
        "'Most' goes before long adjectives, and 'far' is short and irregular. Its superlative is 'furthest'.",
    },
    more: "'From here' tells us where the distance is measured from. 'Farthest' is also used for distance.",
    tip: 'Learn the three forms together: far, further, furthest.',
  },
  'My result was ___ than I expected. (bad)': {
    why: "'Than I expected' compares my result with what I expected, so the gap needs the comparative. 'Bad' is irregular: its comparative is 'worse'.",
    not: {
      badder:
        "'Badder' follows the regular -er rule, but 'bad' is irregular. Its comparative is a new word: 'worse'.",
      worser:
        "'Worser' adds -er to a word that already compares. 'Worse' already means 'more bad', so it needs no ending.",
      worst:
        "'Worst' is the superlative, for one thing set against a whole group. This sentence compares two things, my result and what I expected, so it needs the comparative: 'worse'.",
    },
    more: "'Worse' often follows 'get' or 'become' to show a change: 'The weather got worse.'",
    tip: "'Than I expected' and 'than I thought' compare what happened with what you imagined.",
  },
  'Of all my pencils, this one is the ___. (thin)': {
    why: "'Of all my pencils' sets one pencil against all the others, so the gap needs the superlative. 'Thin' doubles its n before -est: 'thinnest'.",
    not: {
      thinest:
        "'Thinest' does not double the last letter. 'Thin' ends in one vowel and one consonant, so the consonant doubles: 'thinnest'.",
      thinner:
        "'Thinner' is the comparative, for two things. Here one is set against all my other pencils, so it needs the superlative: 'thinnest'.",
      'most thin':
        "'Most' goes before long adjectives. 'Thin' has one syllable, so it doubles its last letter and adds -est: 'thinnest'.",
    },
    more: "A superlative can end a sentence when the group comes first: 'Of all my pencils, this one is the ...'",
    tip: "Watch for 'of all' at the start of a sentence. It tells you a superlative is coming.",
  },
  'I am ___ now than I was last year. (fit)': {
    why: "'Than I was last year' compares me at two times, now and last year, so the gap needs the comparative. 'Fit' doubles its t before -er: 'fitter'.",
    not: {
      fiter:
        "'Fiter' does not double the last letter. 'Fit' ends in one vowel and one consonant, so the consonant doubles: 'fitter'.",
      fittest:
        "'Fittest' is the superlative, for one thing set against a whole group. This sentence compares two things, me now and me last year, so it needs the comparative: 'fitter'.",
      'more fitter':
        "'More fitter' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'fitter'.",
    },
    more: "'A fitter' is also a person who fits things, such as a gas fitter. Here the word is the adjective.",
    tip: "'Than I was' is careful and correct. In speech people also say just 'than last year'.",
  },
  'This has been the ___ summer for years. (wet)': {
    why: "This summer is set against every summer for years, so the gap needs the superlative. 'Wet' doubles its t before -est: 'wettest'.",
    not: {
      wetest:
        "'Wetest' does not double the last letter. 'Wet' ends in one vowel and one consonant, so the consonant doubles: 'wettest'.",
      wetter:
        "'Wetter' is the comparative, for two things. Here one is set against every summer for years, so it needs the superlative: 'wettest'.",
      'most wet':
        "'Most' goes before long adjectives. 'Wet' has one syllable, so it doubles its last letter and adds -est: 'wettest'.",
    },
    more: "British weather reports love records: 'the wettest summer for years', 'the mildest winter on record'.",
    tip: "'For years' means in a long time. It names the group: all the summers for many years.",
  },
  'The end of the film was ___ than the start. (sad)': {
    why: "'Than' compares two parts of the film, the end and the start, so the gap needs the comparative. 'Sad' doubles its d before -er: 'sadder'.",
    not: {
      sader:
        "'Sader' does not double the last letter. 'Sad' ends in one vowel and one consonant, so the consonant doubles: 'sadder'.",
      saddest:
        "'Saddest' is the superlative, for one thing set against a whole group. This sentence compares two things, the end of the film and the start, so it needs the comparative: 'sadder'.",
      'more sadder':
        "'More sadder' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'sadder'.",
    },
    more: "To weigh two feelings against each other, use 'more': 'I was more sad than angry.' That compares two feelings in one person, not two things.",
    tip: "Use comparatives to say how a story changes: '... and the ending was sadder than I expected.'",
  },
  'This is the ___ bed in the shop. (wide)': {
    why: "One bed is set against every other bed in the shop, so the gap needs the superlative. 'Wide' ends in -e, so we just add -st: 'widest'.",
    not: {
      wider:
        "'Wider' is the comparative, for two things. Here one is set against every other bed in the shop, so it needs the superlative: 'widest'.",
      'most wide':
        "'Most' goes before long adjectives. 'Wide' has one syllable and ends in -e, so it just adds -st: 'widest'.",
      'most widest':
        "'Most widest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'widest'.",
    },
    more: 'Beds in Britain come in sizes: single, double, king and super king.',
    tip: "Never write two e's: w-i-d-e-s-t.",
  },
  'My house is ___ to the school than yours. (close)': {
    why: "'Than' compares how far two houses are from the school, so the gap needs the comparative. 'Close' ends in -e, so we just add -r: 'closer'.",
    not: {
      closest:
        "'Closest' is the superlative, for one thing set against a whole group. This sentence compares two things, my house and yours, so it needs the comparative: 'closer'.",
      'more closer':
        "'More closer' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'closer'.",
      close:
        "'Close' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'closer'.",
    },
    more: "'Close' (near) has an s sound, like 'dose'. The verb 'close' (shut) has a z sound.",
    tip: "'Close to' and 'near to' mean the same. Both can be compared.",
  },
  'Of all my friends, Sara lives the ___ to me. (close)': {
    why: "'Of all my friends' sets Sara against all the others, so the gap needs the superlative. 'Close' ends in -e, so we just add -st: 'closest'.",
    not: {
      closer:
        "'Closer' is the comparative, for two things. Here one is set against all my other friends, so it needs the superlative: 'closest'.",
      'most closest':
        "'Most closest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'closest'.",
    },
    more: "Here 'closest' is about where she lives. 'My closest friend' means the friend I trust and like the most.",
    tip: "'Of all my friends' at the start tells you a superlative is coming.",
  },
  'He was ___ to the waiter than to me. (rude)': {
    why: "'Than' compares how he spoke to two people, the waiter and me, so the gap needs the comparative. 'Rude' ends in -e, so we just add -r: 'ruder'.",
    not: {
      rudest:
        "'Rudest' is the superlative, for one thing set against a whole group. This sentence compares two things, how he spoke to the waiter and how he spoke to me, so it needs the comparative: 'ruder'.",
      'more ruder':
        "'More ruder' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'ruder'.",
      rude: "'Rude' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'ruder'.",
    },
    more: "'Rude' is the opposite of 'polite'. People often say who someone was rude to: 'rude to the waiter'.",
    tip: "Put 'to' on both sides of 'than' when you compare two people: '... to the waiter than to me'.",
  },
  'That was the ___ thing anyone has ever said to me. (rude)': {
    why: "This remark is set against everything anyone has ever said to me, so the gap needs the superlative. 'Rude' ends in -e, so we just add -st: 'rudest'.",
    not: {
      ruder:
        "'Ruder' is the comparative, for two things. Here one is set against everything anyone has ever said to me, so it needs the superlative: 'rudest'.",
      'most rudest':
        "'Most rudest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'rudest'.",
    },
    more: "'Ever' with the present perfect ('has ever said') often follows a superlative.",
    tip: 'Use this frame in a story to show how surprising a remark was.',
  },
  'The second story was ___ than the first. (strange)': {
    why: "'Than' compares two stories, the second and the first, so the gap needs the comparative. 'Strange' ends in -e, so we just add -r: 'stranger'.",
    not: {
      strangest:
        "'Strangest' is the superlative, for one thing set against a whole group. This sentence compares two things, the second story and the first, so it needs the comparative: 'stranger'.",
      'more stranger':
        "'More stranger' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'stranger'.",
      strange:
        "'Strange' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'stranger'.",
    },
    more: "'A stranger' is also a noun: a person you do not know. Here the word is the adjective, meaning 'more strange'.",
    tip: "An old saying goes 'Truth is stranger than fiction': real life can surprise us more than stories.",
  },
  'Whose desk is the ___ in the class? (tidy)': {
    why: "One desk is set against every other desk in the class, so the gap needs the superlative. 'Tidy' changes y to i before -est: 'tidiest'.",
    not: {
      tidyest:
        "'Tidyest' keeps the y. In 'tidy' a consonant comes before the y, so the y changes to i: 'tidiest'.",
      tidier:
        "'Tidier' is the comparative, for two things. Here one is set against every other desk in the class, so it needs the superlative: 'tidiest'.",
      'most tidiest':
        "'Most tidiest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'tidiest'.",
    },
    more: "'Whose' asks who owns something: 'Whose desk is this?' Do not mix it up with 'who's', which means 'who is'.",
    tip: "A superlative can end a question: 'Whose desk is the ...?'",
  },
  'Saturday is ___ than Monday in the shop. (busy)': {
    why: "'Than' compares two days, Saturday and Monday, so the gap needs the comparative. 'Busy' changes y to i before -er: 'busier'.",
    not: {
      busyer:
        "'Busyer' keeps the y. In 'busy' a consonant comes before the y, so the y changes to i: 'busier'.",
      busiest:
        "'Busiest' is the superlative, for one thing set against a whole group. This sentence compares two things, Saturday and Monday, so it needs the comparative: 'busier'.",
      'more busier':
        "'More busier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'busier'.",
    },
    more: "The noun 'business' comes from 'busy', with the same y to i change.",
    tip: "Use a comparative to explain a choice: 'I work on Saturdays because the shop is busier then.'",
  },
  'Our class is the ___ class in the school. (noisy)': {
    why: "Our class is set against every other class in the school, so the gap needs the superlative. 'Noisy' changes y to i before -est: 'noisiest'.",
    not: {
      noisyest:
        "'Noisyest' keeps the y. In 'noisy' a consonant comes before the y, so the y changes to i: 'noisiest'.",
      noisier:
        "'Noisier' is the comparative, for two things. Here one is set against every other class in the school, so it needs the superlative: 'noisiest'.",
      'most noisiest':
        "'Most noisiest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'noisiest'.",
    },
    more: "'Noisy' comes from the noun 'noise', which loses its e: noise, noisy.",
    tip: "To avoid saying 'class' twice, write: 'Our class is the ... in the school.'",
  },
  'My shoes are ___ than yours after the walk. (dirty)': {
    why: "'Than' compares my shoes and yours, so the gap needs the comparative. 'Dirty' changes y to i before -er: 'dirtier'.",
    not: {
      dirtyer:
        "'Dirtyer' keeps the y. In 'dirty' a consonant comes before the y, so the y changes to i: 'dirtier'.",
      dirtiest:
        "'Dirtiest' is the superlative, for one thing set against a whole group. This sentence compares two things, my shoes and yours, so it needs the comparative: 'dirtier'.",
      'more dirtier':
        "'More dirtier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'dirtier'.",
    },
    more: "'Dirty' comes from the noun 'dirt'. Many -y adjectives are made this way: dirt, dirty; mud, muddy.",
    tip: "'Yours' means 'your shoes'. It saves saying the noun twice.",
  },
  'This is the ___ classroom in the school. (sunny)': {
    why: "One classroom is set against every other classroom in the school, so the gap needs the superlative. 'Sunny' changes y to i before -est: 'sunniest'.",
    not: {
      sunnyest:
        "'Sunnyest' keeps the y. In 'sunny' a consonant comes before the y, so the y changes to i: 'sunniest'.",
      sunnier:
        "'Sunnier' is the comparative, for two things. Here one is set against every other classroom in the school, so it needs the superlative: 'sunniest'.",
      'most sunniest':
        "'Most sunniest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'sunniest'.",
    },
    more: 'In Britain, rooms with windows that face south get the most sun.',
    tip: 'A sunny room gets a lot of sun. Descriptions of homes and schools love the word.',
  },
  'A suitcase is ___ than a backpack. (heavy)': {
    why: "'Than' compares a suitcase and a backpack, so the gap needs the comparative. 'Heavy' changes y to i before -er: 'heavier'.",
    not: {
      heavyer:
        "'Heavyer' keeps the y. In 'heavy' a consonant comes before the y, so the y changes to i: 'heavier'.",
      heaviest:
        "'Heaviest' is the superlative, for one thing set against a whole group. This sentence compares two things, a suitcase and a backpack, so it needs the comparative: 'heavier'.",
      'more heavier':
        "'More heavier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'heavier'.",
    },
    more: "'Heavy' is also used for rain and traffic: 'heavy rain', 'heavy traffic'.",
    tip: "The ea in 'heavy' sounds like the e in 'bed'. Learn the spelling by sight.",
  },
  'This is the ___ box in the van. (heavy)': {
    why: "One box is set against every other box in the van, so the gap needs the superlative. 'Heavy' changes y to i before -est: 'heaviest'.",
    not: {
      heavyest:
        "'Heavyest' keeps the y. In 'heavy' a consonant comes before the y, so the y changes to i: 'heaviest'.",
      heavier:
        "'Heavier' is the comparative, for two things. Here one is set against every other box in the van, so it needs the superlative: 'heaviest'.",
      'most heaviest':
        "'Most heaviest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'heaviest'.",
    },
    more: 'When you move house, lift the heaviest boxes with your legs, not your back.',
    tip: "'In the van' names the group. A group can be a place, a time or a number.",
  },
  'I am ___ today than usual. (hungry)': {
    why: "'Than usual' compares today with a normal day, so the gap needs the comparative. 'Hungry' changes y to i before -er: 'hungrier'.",
    not: {
      hungryer:
        "'Hungryer' keeps the y. In 'hungry' a consonant comes before the y, so the y changes to i: 'hungrier'.",
      hungriest:
        "'Hungriest' is the superlative, for one thing set against a whole group. This sentence compares two things, today and a usual day, so it needs the comparative: 'hungrier'.",
      'more hungrier':
        "'More hungrier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'hungrier'.",
    },
    more: "'Hungry' comes from 'hunger'. 'Thirsty' works the same way: thirst, thirsty, thirstier.",
    tip: "'Than usual' is a short way to say 'than I usually am'.",
  },
  'This is the ___ village in the area. (pretty)': {
    why: "The village is set against every other village in the area, so the gap needs the superlative. 'Pretty' changes y to i before -est: 'prettiest'.",
    not: {
      prettyest:
        "'Prettyest' keeps the y. In 'pretty' a consonant comes before the y, so the y changes to i: 'prettiest'.",
      prettier:
        "'Prettier' is the comparative, for two things. Here one is set against every other village in the area, so it needs the superlative: 'prettiest'.",
      'most prettiest':
        "'Most prettiest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'prettiest'.",
    },
    more: "'Pretty' also means 'quite' before another adjective: 'pretty good'. Then it does not compare.",
    tip: "Use 'in the area' or 'in the region' to name the group when you describe a place.",
  },
  'Spiders are ___ than ants to me. (scary)': {
    why: "'Than' compares spiders and ants, so the gap needs the comparative. 'Scary' changes y to i before -er: 'scarier'.",
    not: {
      scaryer:
        "'Scaryer' keeps the y. In 'scary' a consonant comes before the y, so the y changes to i: 'scarier'.",
      scariest:
        "'Scariest' is the superlative, for one thing set against a whole group. This sentence compares two things, spiders and ants, so it needs the comparative: 'scarier'.",
      'more scarier':
        "'More scarier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'scarier'.",
    },
    more: "'Scary' describes the thing that frightens; 'scared' describes the person who feels it.",
    tip: "Add 'to me' or 'for me' to show it is your own feeling.",
  },
  'It was the ___ ride at the fair. (scary)': {
    why: "The ride is set against every other ride at the fair, so the gap needs the superlative. 'Scary' changes y to i before -est: 'scariest'.",
    not: {
      scaryest:
        "'Scaryest' keeps the y. In 'scary' a consonant comes before the y, so the y changes to i: 'scariest'.",
      scarier:
        "'Scarier' is the comparative, for two things. Here one is set against every other ride at the fair, so it needs the superlative: 'scariest'.",
      'most scariest':
        "'Most scariest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'scariest'.",
    },
    more: "A 'fair' here is a travelling fun park with rides. 'Fair' is also an adjective meaning 'just'.",
    tip: "Describe an experience with a superlative and a feeling: '... and I screamed all the way down.'",
  },
  'Home-made soup is ___ than soup from a tin. (tasty)': {
    why: "'Than' compares two kinds of soup, home-made and from a tin, so the gap needs the comparative. 'Tasty' changes y to i before -er: 'tastier'.",
    not: {
      tastyer:
        "'Tastyer' keeps the y. In 'tasty' a consonant comes before the y, so the y changes to i: 'tastier'.",
      tastiest:
        "'Tastiest' is the superlative, for one thing set against a whole group. This sentence compares two things, home-made soup and soup from a tin, so it needs the comparative: 'tastier'.",
      'more tastier':
        "'More tastier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'tastier'.",
    },
    more: "'Tin' is British English. Americans say 'can'.",
    tip: "Food reviews compare all the time: '... and less salty than the soup at the café.'",
  },
  'Gran makes the ___ biscuits in the world. (tasty)': {
    why: "Gran's biscuits are set against all the biscuits in the world, so the gap needs the superlative. 'Tasty' changes y to i before -est: 'tastiest'.",
    not: {
      tastyest:
        "'Tastyest' keeps the y. In 'tasty' a consonant comes before the y, so the y changes to i: 'tastiest'.",
      tastier:
        "'Tastier' is the comparative, for two things. Here one is set against all the biscuits in the world, so it needs the superlative: 'tastiest'.",
      'most tastiest':
        "'Most tastiest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'tastiest'.",
    },
    more: "'Biscuit' is the British word. In American English it is usually a 'cookie'.",
    tip: "'In the world' is a big group. People use it to praise something they love, even if they cannot prove it.",
  },
  'Sunrise is ___ in summer than in winter. (early)': {
    why: "'Than' compares sunrise at two times of year, summer and winter, so the gap needs the comparative. 'Early' changes y to i before -er: 'earlier'.",
    not: {
      earlyer:
        "'Earlyer' keeps the y. In 'early' a consonant comes before the y, so the y changes to i: 'earlier'.",
      earliest:
        "'Earliest' is the superlative, for one thing set against a whole group. This sentence compares two things, sunrise in summer and sunrise in winter, so it needs the comparative: 'earlier'.",
      'more earlier':
        "'More earlier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'earlier'.",
    },
    more: "'Early' looks like an -ly adverb, but it is an adjective too: 'an early train'. Either way its forms are the same.",
    tip: "Do not use 'more' with 'early'. It always changes y to i and adds the ending.",
  },
  'We took the ___ train of the day. (early)': {
    why: "The train is set against every other train that day, so the gap needs the superlative. 'Early' changes y to i before -est: 'earliest'.",
    not: {
      earlyest:
        "'Earlyest' keeps the y. In 'early' a consonant comes before the y, so the y changes to i: 'earliest'.",
      earlier:
        "'Earlier' is the comparative, for two things. Here one is set against every other train that day, so it needs the superlative: 'earliest'.",
      'most earliest':
        "'Most earliest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'earliest'.",
    },
    more: "The earliest train is the first one of the day. The one at the other end of the day is 'the last train'.",
    tip: "In British English a list of train times is a 'timetable'.",
  },
  'An ant is ___ than a bee. (tiny)': {
    why: "'Than' compares an ant and a bee, so the gap needs the comparative. 'Tiny' changes y to i before -er: 'tinier'.",
    not: {
      tinyer:
        "'Tinyer' keeps the y. In 'tiny' a consonant comes before the y, so the y changes to i: 'tinier'.",
      tiniest:
        "'Tiniest' is the superlative, for one thing set against a whole group. This sentence compares two things, an ant and a bee, so it needs the comparative: 'tinier'.",
      'more tinier':
        "'More tinier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'tinier'.",
    },
    more: "'Tiny' means very small. It follows the -y rule like any other two-syllable adjective ending in -y.",
    tip: 'Write the i, then the ending: t-i-n-i-e-r.',
  },
  'The ___ of the five kittens was asleep. (tiny)': {
    why: "'Of the five kittens' sets one kitten against the other four, so the gap needs the superlative. 'Tiny' changes y to i before -est: 'tiniest'.",
    not: {
      tinyest:
        "'Tinyest' keeps the y. In 'tiny' a consonant comes before the y, so the y changes to i: 'tiniest'.",
      tinier:
        "'Tinier' is the comparative, for two things. Here one is set against the other four kittens, so it needs the superlative: 'tiniest'.",
      'most tiniest':
        "'Most tiniest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'tiniest'.",
    },
    more: "A superlative can be the subject of a sentence: 'The ... of the five kittens was asleep.' The noun 'kitten' is understood.",
    tip: 'A kitten is a young cat; a puppy is a young dog.',
  },
  'It was the ___ day of the year. (windy)': {
    why: "The day is set against every other day of the year, so the gap needs the superlative. 'Windy' changes y to i before -est: 'windiest'.",
    not: {
      windyest:
        "'Windyest' keeps the y. In 'windy' a consonant comes before the y, so the y changes to i: 'windiest'.",
      windier:
        "'Windier' is the comparative, for two things. Here one is set against every other day of the year, so it needs the superlative: 'windiest'.",
      'most windiest':
        "'Most windiest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'windiest'.",
    },
    more: 'Big storms in Britain are given names, such as Storm Arwen in 2021.',
    tip: 'Weather words follow the -y rule: rainy, rainier, rainiest.',
  },
  'This room is ___ than the hall. (cosy)': {
    why: "'Than' compares this room and the hall, so the gap needs the comparative. 'Cosy' changes y to i before -er: 'cosier'.",
    not: {
      cosyer:
        "'Cosyer' keeps the y. In 'cosy' a consonant comes before the y, so the y changes to i: 'cosier'.",
      cosiest:
        "'Cosiest' is the superlative, for one thing set against a whole group. This sentence compares two things, this room and the hall, so it needs the comparative: 'cosier'.",
      'more cosier':
        "'More cosier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'cosier'.",
    },
    more: "'Cosy' is the British spelling. American English spells it 'cozy', with a z.",
    tip: 'A cosy room is warm and comfortable. It is a favourite word in descriptions of homes.',
  },
  "My brother's room is ___ than mine. (messy)": {
    why: "'Than' compares my brother's room and mine, so the gap needs the comparative. 'Messy' changes y to i before -er: 'messier'.",
    not: {
      messyer:
        "'Messyer' keeps the y. In 'messy' a consonant comes before the y, so the y changes to i: 'messier'.",
      messiest:
        "'Messiest' is the superlative, for one thing set against a whole group. This sentence compares two things, my brother's room and mine, so it needs the comparative: 'messier'.",
      'more messier':
        "'More messier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'messier'.",
    },
    more: "'Messy' comes from 'mess'. Its opposite is 'tidy'.",
    tip: "'Than mine' saves you saying 'than my room'.",
  },
  'Football is ___ than tennis in Britain. (popular)': {
    why: "'Than' compares two sports, football and tennis, so the gap needs the comparative. 'Popular' has three syllables, so we put 'more' in front: 'more popular'.",
    not: {
      popularer:
        "'Popularer' adds -er to a long adjective. 'Popular' has three syllables, so it takes 'more' in front: 'more popular'.",
      'most popular':
        "'Most popular' is the superlative, for one thing set against a whole group. This sentence compares two things, football and tennis, so it needs 'more': 'more popular'.",
      popular:
        "'Popular' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more popular'.",
    },
    more: "In Britain, 'football' means the game Americans call 'soccer'.",
    tip: "'In Britain' limits the comparison to one country. In another country the answer could change.",
  },
  'This is the ___ game at our school. (popular)': {
    why: "One game is set against every other game at our school, so the gap needs the superlative. 'Popular' has three syllables, so we put 'most' in front: 'most popular'.",
    not: {
      popularest:
        "'Popularest' adds -est to a long adjective. 'Popular' has three syllables, so it takes 'most' in front: 'most popular'.",
      'more popular':
        "'More popular' is the comparative, for two things. Here one is set against every other game at our school, so it needs 'most': 'most popular'.",
    },
    more: "'Popular' means liked by many people. A class survey can show which game wins.",
    tip: "Report a survey with a superlative: 'The most popular answer was ...'",
  },
  'Sleep is ___ than a new phone. (important)': {
    why: "'Than' compares sleep and a new phone, so the gap needs the comparative. 'Important' has three syllables, so we put 'more' in front: 'more important'.",
    not: {
      importanter:
        "'Importanter' adds -er to a long adjective. 'Important' has three syllables, so it takes 'more' in front: 'more important'.",
      'most important':
        "'Most important' is the superlative, for one thing set against a whole group. This sentence compares two things, sleep and a new phone, so it needs 'more': 'more important'.",
      important:
        "'Important' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more important'.",
    },
    more: "'More importantly' can start a new point in an argument, to show it matters even more than the one before.",
    tip: "Comparisons make an opinion strong in a speech: '... than anything you can buy.'",
  },
  'The ___ thing is to keep trying. (important)': {
    why: "'The ... thing' sets one thing against everything else, so the gap needs the superlative. 'Important' has three syllables, so we put 'most' in front: 'most important'.",
    not: {
      importantest:
        "'Importantest' adds -est to a long adjective. 'Important' has three syllables, so it takes 'most' in front: 'most important'.",
      'more important':
        "'More important' is the comparative, for two things. Here one is set against everything else, so it needs 'most': 'most important'.",
    },
    more: "'The most important thing is ...' is a strong way to begin a piece of advice.",
    tip: 'Use this frame at the end of a speech or a letter of advice.',
  },
  'This is the ___ painting in the museum. (famous)': {
    why: "One painting is set against every other painting in the museum, so the gap needs the superlative. 'Famous' has two syllables and does not end in -y, so we put 'most' in front: 'most famous'.",
    not: {
      famousest:
        "'Famousest' adds -est to a long adjective. 'Famous' has two syllables and does not end in -y, so it takes 'most' in front: 'most famous'.",
      'more famous':
        "'More famous' is the comparative, for two things. Here one is set against every other painting in the museum, so it needs 'most': 'most famous'.",
    },
    more: "'Famous' means known by many people. 'Infamous' means famous for something bad.",
    tip: "Two-syllable adjectives ending in -ous, such as 'famous' and 'nervous', take 'more' and 'most'.",
  },
  'You must be ___ than last time. (careful)': {
    why: "'Than last time' compares this time with the time before, so the gap needs the comparative. 'Careful' has two syllables and ends in -ful, so we put 'more' in front: 'more careful'.",
    not: {
      carefuller:
        "'Carefuller' adds -er to a long adjective. 'Careful' has two syllables and does not end in -y, so it takes 'more' in front: 'more careful'.",
      'most careful':
        "'Most careful' is the superlative, for one thing set against a whole group. This sentence compares two things, this time and last time, so it needs 'more': 'more careful'.",
      careful:
        "'Careful' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more careful'.",
    },
    more: "The adverb is 'carefully': 'Drive more carefully.' The adjective describes a person: 'Be more careful.'",
    tip: 'The ending -ful has only one l: careful, useful, beautiful.',
  },
  'Our new school is ___ than the old one. (modern)': {
    why: "'Than' compares two schools, the new one and the old one, so the gap needs the comparative. 'Modern' has two syllables and does not end in -y, so we put 'more' in front: 'more modern'.",
    not: {
      moderner:
        "'Moderner' adds -er to a long adjective. 'Modern' has two syllables and does not end in -y, so it takes 'more' in front: 'more modern'.",
      'most modern':
        "'Most modern' is the superlative, for one thing set against a whole group. This sentence compares two things, our new school and the old one, so it needs 'more': 'more modern'.",
      modern:
        "'Modern' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more modern'.",
    },
    more: "'Modern' means new and up to date. Its opposite is 'old-fashioned'.",
    tip: "German and Dutch add -er to almost every adjective, so their speakers often say 'moderner'. In English, check the length first.",
  },
  'The ___ bus of the day leaves at eight. (crowded)': {
    why: "One bus is set against every other bus that day, so the gap needs the superlative. 'Crowded' ends in -ed, so we put 'most' in front: 'most crowded'.",
    not: {
      crowdedest:
        "'Crowdedest' adds -est to an adjective ending in -ed. Adjectives like 'crowded' take 'most' in front: 'most crowded'.",
      'more crowded':
        "'More crowded' is the comparative, for two things. Here one is set against every other bus that day, so it needs 'most': 'most crowded'.",
    },
    more: "Adjectives ending in -ed, such as 'crowded' and 'bored', take 'more' and 'most', even when they are short.",
    tip: "'Crowded' means full of people. On a crowded bus there are no free seats.",
  },
  'The second half was ___ than the first. (boring)': {
    why: "'Than' compares the two halves, the second and the first, so the gap needs the comparative. 'Boring' ends in -ing, so we put 'more' in front: 'more boring'.",
    not: {
      boringer:
        "'Boringer' adds -er to an adjective ending in -ing. Those always take 'more' in front: 'more boring'.",
      'most boring':
        "'Most boring' is the superlative, for one thing set against a whole group. This sentence compares two things, the second half and the first, so it needs 'more': 'more boring'.",
      boring:
        "'Boring' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more boring'.",
    },
    more: "'Boring' describes the thing; 'bored' describes how you feel. The match was boring, so I was bored.",
    tip: "Adjectives ending in -ing always take 'more' and 'most', however short they are.",
  },
  'These are the ___ strawberries in the market. (delicious)': {
    why: "These strawberries are set against all the others in the market, so the gap needs the superlative. 'Delicious' has three syllables, so we put 'most' in front: 'most delicious'.",
    not: {
      deliciousest:
        "'Deliciousest' adds -est to a long adjective. 'Delicious' has three syllables, so it takes 'most' in front: 'most delicious'.",
      'more delicious':
        "'More delicious' is the comparative, for two things. Here one is set against all the other strawberries in the market, so it needs 'most': 'most delicious'.",
    },
    more: 'British strawberries are in season in early summer, the time of the Wimbledon tennis tournament.',
    tip: "'Delicious' is a strong word already. Keep 'the most delicious' for the very top.",
  },
  'Sunday morning is the ___ time of the week. (peaceful)': {
    why: "Sunday morning is set against every other time of the week, so the gap needs the superlative. 'Peaceful' has two syllables and ends in -ful, so we put 'most' in front: 'most peaceful'.",
    not: {
      peacefullest:
        "'Peacefullest' adds -est to a long adjective. 'Peaceful' has two syllables and does not end in -y, so it takes 'most' in front: 'most peaceful'.",
      'more peaceful':
        "'More peaceful' is the comparative, for two things. Here one is set against every other time of the week, so it needs 'most': 'most peaceful'.",
    },
    more: "'Peaceful' comes from the noun 'peace'. Do not mix it up with 'piece', which sounds the same.",
    tip: "'Of the week' names the group: every time from Monday to Sunday.",
  },
  'Moreover, it was the ___ harvest that the farm had ever seen. (big)': {
    why: "'Had ever seen' sets this harvest against every harvest the farm had known, so the gap needs the superlative. 'Big' doubles its g before -est: 'biggest'.",
    not: {
      bigger:
        "'Bigger' is the comparative, for two things. Here one is set against every harvest the farm had ever seen, so it needs the superlative: 'biggest'.",
      bigest:
        "'Bigest' does not double the last letter. 'Big' ends in one vowel and one consonant, so the consonant doubles: 'biggest'.",
      'most big':
        "'Most' goes before long adjectives. 'Big' has one syllable, so it doubles its last letter and adds -est: 'biggest'.",
    },
    more: "In Animal Farm the animals have driven out Mr Jones and bring in the harvest themselves. Orwell's superlative shows how proud and hopeful they are.",
    tip: "'Ever' after a superlative is common: 'the ... that the farm had ever seen', 'the ... I have ever read'.",
  },
  'After his hoof had healed up, Boxer worked ___ than ever. (hard)': {
    why: "'Than ever' compares how Boxer works now with how he worked before, so the gap needs the comparative. 'Hard' is an adverb here, and like the adjective it adds -er: 'harder'.",
    not: {
      hardest:
        "'Hardest' is the superlative, and a superlative never takes 'than'. Boxer now is compared with Boxer before, so we need 'harder'.",
      'more harder':
        "'More harder' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'harder'.",
      hardly:
        "'Hardly' is a different word that means 'almost not'. With it, the sentence would say that Boxer did almost no work, the opposite of what Orwell means. Here we need 'harder'.",
    },
    more: "Boxer, the great cart-horse, keeps working however tired he is. 'Harder than ever' shows his loyalty to the farm.",
    tip: "'Hard', 'fast', 'early' and 'late' are adverbs that take -er. Most adverbs ending in -ly take 'more'.",
  },
  'Her old eyes looked ___ than ever. (dim)': {
    why: "'Than ever' compares Clover's eyes now with how they looked before, so the gap needs the comparative. 'Dim' ends in one vowel and one consonant, so the m doubles: 'dimmer'.",
    not: {
      dimer:
        "'Dimer' does not double the last letter. 'Dim' ends in one vowel and one consonant, so the consonant doubles: 'dimmer'.",
      dimmest:
        "'Dimmest' is the superlative, for one thing set against a whole group. This sentence compares two things, Clover's eyes now and before, so it needs the comparative: 'dimmer'.",
      'more dim':
        "'More' goes before long adjectives. 'Dim' has one syllable, so it doubles its last letter and adds -er: 'dimmer'.",
    },
    more: "'Dim' means not bright or not clear. Near the end of the book, Clover, the old mare, asks Benjamin to read the barn wall for her.",
    tip: "'Looked' takes an adjective after it, like 'felt' and 'seemed': 'looked dimmer', not 'looked more dimly'.",
  },
  'Moreover, the walls were twice ___ before. (thick)': {
    why: "'Twice as ... as' says that one thing has double the amount of a quality. The pattern keeps the plain adjective between two 'as': 'twice as thick as before'.",
    not: {
      'as thicker as':
        "'As thicker as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as thick as'.",
      'thicker as':
        "'Thicker as' joins a comparative to 'as'. A comparative is followed by 'than', and this pattern needs 'as thick as'.",
      'as thick than':
        "'As thick than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as thick as'.",
    },
    more: 'After a storm knocks down their first windmill, the animals build it again with walls twice as thick. Orwell shows how hard they work.',
    tip: "Use 'twice as ... as' and 'three times as ... as' with numbers: 'The new path is twice as steep as the old one.'",
  },
  'Have you found your first day’s work ___ than you expected? (hard)': {
    why: "'Than you expected' compares the work as it really was with the work you imagined, so the gap needs the comparative. 'Hard' is short: add -er, 'harder'.",
    not: {
      hardest:
        "'Hardest' is the superlative, for one thing set against a whole group. This sentence compares two things, the work as it was and as you expected it, so it needs the comparative: 'harder'.",
      'more hard':
        "'More' goes before long adjectives. 'Hard' has one syllable, so it takes -er instead: 'harder'.",
      hard: "'Hard' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'harder'.",
    },
    more: 'St John Rivers asks Jane this after her first day teaching at a village school. She tells him she thinks she will get on well with her pupils.',
    tip: "'Found' with an adjective means 'felt it to be': 'I found the test harder than last time.'",
  },
  'Biddy was the ___ of girls, and she tried to reason no more with me. (wise)': {
    why: "'The ... of girls' sets Biddy against all girls, so the gap needs the superlative. 'Wise' ends in -e, so we just add -st: 'wisest'. Pip is remembering a talk with his friend Biddy.",
    not: {
      wiser:
        "'Wiser' is the comparative, for two things. Here one is set against all girls, so it needs the superlative: 'wisest'.",
      'most wisest':
        "'Most wisest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'wisest'.",
      wise: "'Wise' on its own compares nothing. 'The ... of girls' sets Biddy against all girls, so it needs the superlative: 'wisest'.",
    },
    more: 'Biddy knows when arguing will not help Pip, so she stops. Pip calls that wisdom.',
    tip: "'The ... of' with a plural noun is a formal way to make a superlative: 'the bravest of men'.",
  },
  'What could be ___ than his asking you again? (natural)': {
    why: "'Than' compares his asking Jane to dance again with anything else he might do, so the gap needs the comparative. 'Natural' has three syllables, so we put 'more' in front: 'more natural'.",
    not: {
      naturaler:
        "'Naturaler' adds -er to a long adjective. 'Natural' has three syllables, so it takes 'more' in front: 'more natural'.",
      'most natural':
        "'Most natural' is the superlative, for one thing set against a whole group. This sentence compares two things, his asking Jane again and anything else, so it needs 'more': 'more natural'.",
      natural:
        "'Natural' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more natural'.",
    },
    more: "Elizabeth is teasing her sister Jane, who is surprised that Mr Bingley asked her to dance a second time. The question expects the answer 'nothing'.",
    tip: "'What could be ... than ...?' is a question that needs no answer. It makes a point strongly.",
  },
  'No one believes ___ than Comrade Napoleon that all animals are equal. (firmly)': {
    why: "'Than Comrade Napoleon' compares how firmly he believes with how firmly anyone else does, so the gap needs the comparative. 'Firmly' is an adverb ending in -ly, so we put 'more' in front: 'more firmly'.",
    not: {
      'most firmly':
        "'Most firmly' is the superlative, and a superlative never takes 'than'. Here we need the comparative: 'more firmly'.",
      'more firm':
        "'More firm' uses the adjective, but the gap describes the verb 'believes', so it needs the adverb: 'more firmly'.",
      firmly:
        "'Firmly' on its own compares nothing. Before 'than' we need the comparative: 'more firmly'.",
    },
    more: 'Squealer, the pig who speaks for Napoleon, says this as he explains why the animals will stop voting at meetings. Orwell lets the reader see the lie.',
    tip: "Most adverbs ending in -ly take 'more' and 'most': 'more firmly', 'more politely'.",
  },
  'This was of the ___ importance for the welfare of the farm, Squealer said. (high)': {
    why: "'Of the ... importance' is a set phrase with a superlative: nothing matters more. 'High' is short: add -est, 'highest'. Squealer is talking about the pigs' paperwork.",
    not: {
      higher:
        "'Higher' is the comparative, for two things. Here one is set against everything else that mattered on the farm, so it needs the superlative: 'highest'.",
      'most high':
        "'Most' goes before long adjectives. 'High' has one syllable, so it takes -est instead: 'highest'.",
      'most highest':
        "'Most highest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'highest'.",
    },
    more: 'The pigs fill sheets of paper and burn them, and Squealer calls it vital work. Orwell is mocking pigs who produce no food themselves.',
    tip: "'Of the highest importance' is formal. In everyday English, say 'very important'.",
  },
  'Godfrey Cass’s cheek and eye were ___ than ever now. (bright)': {
    why: "'Than ever' compares Godfrey's face now with how it looked before, so the gap needs the comparative. 'Bright' is short: add -er, 'brighter'. George Eliot shows that Godfrey is full of hope.",
    not: {
      brightest:
        "'Brightest' is the superlative, for one thing set against a whole group. This sentence compares two things, Godfrey's face now and before, so it needs the comparative: 'brighter'.",
      'more bright':
        "'More' goes before long adjectives. 'Bright' has one syllable, so it takes -er instead: 'brighter'.",
      bright:
        "'Bright' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'brighter'.",
    },
    more: 'Godfrey hopes to marry Nancy now that his secret seems safe. His bright cheek and eye show his happiness.',
    tip: "'Than ever' compares now with every time before: his face has never been so bright.",
  },
  'I think nobody could be ___ than we are. (happy)': {
    why: "'Than we are' compares Eppie's family with anyone else, so the gap needs the comparative. 'Happy' changes y to i before -er: 'happier'. These are the last words of the novel.",
    not: {
      happyer:
        "'Happyer' keeps the y. In 'happy' a consonant comes before the y, so the y changes to i: 'happier'.",
      happiest:
        "'Happiest' is the superlative, for one thing set against a whole group. This sentence compares two things, Eppie's family and anyone else, so it needs the comparative: 'happier'.",
      'more happier':
        "'More happier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'happier'.",
    },
    more: 'Eppie says this to Silas, the man who brought her up, as they come home after her wedding.',
    tip: "'Nobody could be ... than' is a strong way to say that no one beats you.",
  },
  'Yet few men could be ___ than poor Marner. (harmless)': {
    why: "'Than poor Marner' compares him with other men, so the gap needs the comparative. 'Harmless' has two syllables and ends in -less, so we put 'more' in front: 'more harmless'.",
    not: {
      harmlesser:
        "'Harmlesser' adds -er to a long adjective. 'Harmless' has two syllables and does not end in -y, so it takes 'more' in front: 'more harmless'.",
      'most harmless':
        "'Most harmless' is the superlative, for one thing set against a whole group. This sentence compares two things, Silas Marner and other men, so it needs 'more': 'more harmless'.",
      harmless:
        "'Harmless' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more harmless'.",
    },
    more: "The villagers of Raveloe distrust Silas, but George Eliot tells us he would hurt no one. 'Harmless' means causing no harm.",
    tip: "Adjectives ending in -less, such as 'careless' and 'useless', take 'more' and 'most'.",
  },
  'I’ll make it ___ I can. (short)': {
    why: "'As ... as I can' means as far as I am able. The pattern keeps the plain adjective between two 'as': 'as short as'. Jonathan Small is near the end of a long story.",
    not: {
      'as shorter as':
        "'As shorter as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as short as'.",
      'shorter as':
        "'Shorter as' joins a comparative to 'as'. A comparative is followed by 'than', and this pattern needs 'as short as'.",
      'as short than':
        "'As short than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as short as'.",
    },
    more: 'Small has been telling Holmes and Watson how the Agra treasure was taken. He knows the detective Athelney Jones wants to take him away, so he promises to hurry to the end.',
    tip: "'As soon as I can' and 'as quickly as I can' follow the same pattern.",
  },
  'None of the other animals on the farm could get ___ than the letter A. (far)': {
    why: "'Than the letter A' compares how far they got with that first letter, so the gap needs the comparative. 'Far' is irregular: its comparative is 'further'. Orwell is describing the animals learning to read.",
    not: {
      farer:
        "'Farer' follows the regular -er rule, but 'far' is irregular. Its comparative is 'further'.",
      furthest:
        "'Furthest' is the superlative, and a superlative never takes 'than'. Here we need the comparative: 'further'.",
      'more far':
        "'More' goes before long adjectives, and 'far' is short and irregular. Its comparative is 'further'.",
    },
    more: 'Most of the animals never learn to read well, but the pigs do. Orwell shows how learning gives the pigs power over the others.',
    tip: "'Further' and 'farther' are both used for distance in British English.",
  },
  'A bike is not ___ a car. (fast)': {
    why: "'Not as ... as' means less: a bike cannot match a car for speed. The pattern keeps the plain adjective between two 'as': 'as fast as'.",
    not: {
      'as faster as':
        "'As faster as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as fast as'.",
      'faster as':
        "'Faster as' joins a comparative to 'as'. A comparative is followed by 'than', and this pattern needs 'as fast as'.",
      'as fast than':
        "'As fast than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as fast as'.",
    },
    more: "'Not as fast as' lets you compare without using the opposite adjective.",
    tip: "'Not so ... as' is also correct and a little formal. 'Not as ... as' is the usual form.",
  },
  'My sister is not ___ me. She is ten and I am twelve. (old)': {
    why: "My sister is ten and I am twelve, so she has lived two years less. 'Not as ... as' says that, with the plain adjective between two 'as': 'as old as'.",
    not: {
      'as older as':
        "'As older as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as old as'.",
      'older as':
        "'Older as' joins a comparative to 'as'. A comparative is followed by 'than', and this pattern needs 'as old as'.",
      'as old than':
        "'As old than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as old as'.",
    },
    more: "After 'as ... as', British speakers usually say 'me'. 'As old as I am' is also correct and a little more formal.",
    tip: "Use 'not as ... as' to compare ages, heights and sizes without sounding rude.",
  },
  'The second film is not ___ the first one. (exciting)': {
    why: "'Not as ... as' says the second film is less exciting than the first. Long adjectives keep their plain form in this pattern too: 'as exciting as'.",
    not: {
      'as more exciting as':
        "'As more exciting as' puts 'more' inside 'as ... as'. The pattern takes the plain adjective, however long it is: 'as exciting as'.",
      'more exciting as':
        "'More exciting as' joins a comparative to 'as'. A comparative takes 'than', and this pattern needs 'as exciting as'.",
      'as exciting than':
        "'As exciting than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as exciting as'.",
    },
    more: "'As ... as' never needs 'more', even with a long adjective: 'as beautiful as', 'as comfortable as'.",
    tip: "Reviews often use 'not as ... as the first' to compare a film with the one before.",
  },
  'This end of the pool is ___ the other end. Both are two metres deep. (deep)': {
    why: "Both ends are two metres deep, so they are equal. 'As ... as' says two things are equal: 'as deep as'.",
    not: {
      'deeper than':
        "'Deeper than' says one end is deeper, but both are two metres. When two things are equal, use 'as deep as'.",
      'as deeper as':
        "'As deeper as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as deep as'.",
      'deep as': "'Deep as' leaves out the first 'as'. The pattern needs both: 'as deep as'.",
    },
    more: "'As ... as' without 'not' means equal. With 'not', it means less: 'The shallow end is not as deep as this end.'",
    tip: "Read the numbers first. Equal numbers need 'as ... as'; different numbers need a comparative.",
  },
  'Today is ___ yesterday: both days were 20°C. (warm)': {
    why: "Both days were 20°C, so they were equally warm. 'As ... as' says two things are equal: 'as warm as'.",
    not: {
      'warmer than':
        "'Warmer than' says today is warmer, but both days were 20°C. Equal temperatures need 'as warm as'.",
      'as warmer as':
        "'As warmer as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as warm as'.",
      'warm as': "'Warm as' leaves out the first 'as'. The pattern needs both: 'as warm as'.",
    },
    more: 'British weather forecasts give temperatures in degrees Celsius, written °C.',
    tip: "'Just' adds force: 'Today is just as warm as yesterday.'",
  },
  'My school bag is not ___ yours. (heavy)': {
    why: "'Not as ... as' says my bag weighs less than yours. The pattern keeps the plain adjective, so the y stays: 'as heavy as'.",
    not: {
      'as heavier as':
        "'As heavier as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as heavy as'.",
      'heavier as':
        "'Heavier as' joins a comparative to 'as'. A comparative is followed by 'than', and this pattern needs 'as heavy as'.",
      'as heavy than':
        "'As heavy than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as heavy as'.",
    },
    more: "In 'as ... as' the adjective never changes, so there is no y to i change to make.",
    tip: "'Not nearly as ... as' means much less: 'not nearly as heavy as yours'.",
  },
  'In our class, chess is not ___ football. (popular)': {
    why: "'Not as ... as' says fewer pupils in our class like chess than football. Long adjectives keep their plain form in this pattern: 'as popular as'.",
    not: {
      'as more popular as':
        "'As more popular as' puts 'more' inside 'as ... as'. The pattern takes the plain adjective: 'as popular as'.",
      'more popular as':
        "'More popular as' joins a comparative to 'as'. A comparative takes 'than', and this pattern needs 'as popular as'.",
      'as popular than':
        "'As popular than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as popular as'.",
    },
    more: "'Not as popular as' is gentler than calling something unpopular.",
    tip: "Use 'not as ... as' to report the results of a class survey politely.",
  },
  'Walking is not ___ cycling. (quick)': {
    why: "'Not as ... as' says walking needs more time than cycling. The pattern keeps the plain adjective between two 'as': 'as quick as'.",
    not: {
      'as quicker as':
        "'As quicker as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as quick as'.",
      'quicker as':
        "'Quicker as' joins a comparative to 'as'. A comparative is followed by 'than', and this pattern needs 'as quick as'.",
      'as quick than':
        "'As quick than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as quick as'.",
    },
    more: "'Walking is not as quick as cycling' and 'Cycling is quicker than walking' give the same fact from two sides.",
    tip: "-ing words like 'walking' and 'cycling' can be the things you compare.",
  },
  'My room is not ___ yours. Mine is a mess. (tidy)': {
    why: "'Mine is a mess' tells us my room is less tidy. 'Not as ... as' says that, with the plain adjective between two 'as': 'as tidy as'.",
    not: {
      'as tidier as':
        "'As tidier as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as tidy as'.",
      'tidier as':
        "'Tidier as' joins a comparative to 'as'. A comparative is followed by 'than', and this pattern needs 'as tidy as'.",
      'as tidy than':
        "'As tidy than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as tidy as'.",
    },
    more: "In 'as ... as', a -y adjective keeps its y, because no ending is added.",
    tip: "'Mine' and 'yours' save repeating 'room' in both halves.",
  },
  "This year's test was not ___ last year's. (difficult)": {
    why: "'Not as ... as' says this year's test was less hard than last year's. Long adjectives keep their plain form in this pattern: 'as difficult as'.",
    not: {
      'as more difficult as':
        "'As more difficult as' puts 'more' inside 'as ... as'. The pattern takes the plain adjective: 'as difficult as'.",
      'more difficult as':
        "'More difficult as' joins a comparative to 'as'. A comparative takes 'than'; this pattern needs 'as difficult as'.",
      'as difficult than':
        "'As difficult than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as difficult as'.",
    },
    more: "'Last year's' means 'last year's test'. The apostrophe shows whose test it is and saves repeating the noun.",
    tip: "With 'not as ... as', the first thing named is the one with less of the quality.",
  },
  'The village is ___ it was when I was a child. Nothing has changed. (quiet)': {
    why: "'Nothing has changed' tells us the village is the same now as it was then. 'As ... as' says two things are equal: 'as quiet as'.",
    not: {
      'quieter than':
        "'Quieter than' says the village has changed, but 'nothing has changed'. Equal things need 'as quiet as'.",
      'as quieter as':
        "'As quieter as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as quiet as'.",
      'quiet as': "'Quiet as' leaves out the first 'as'. The pattern needs both: 'as quiet as'.",
    },
    more: "'Quiet' is one of a few two-syllable adjectives that can take either -er or 'more'. In 'as ... as' it stays plain.",
    tip: "'As ... as it was' compares a place with itself in the past.",
  },
  'Is the kitchen ___ the bathroom? (clean)': {
    why: "The question asks whether two rooms are equally clean. 'As ... as' compares two equal things, with the plain adjective between two 'as': 'as clean as'.",
    not: {
      'as cleaner as':
        "'As cleaner as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as clean as'.",
      'cleaner as':
        "'Cleaner as' joins a comparative to 'as'. A comparative is followed by 'than', and this pattern needs 'as clean as'.",
      'as clean than':
        "'As clean than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as clean as'.",
    },
    more: "In a question, 'as ... as' keeps its place after the noun: 'Is the kitchen as ... as the bathroom?'",
    tip: "If the two differ, answer with 'not as ... as': 'No, it is not as clean.'",
  },
  'This towel is not ___ that one. (soft)': {
    why: "'Not as ... as' says this towel is less soft than that one. The pattern keeps the plain adjective between two 'as': 'as soft as'.",
    not: {
      'as softer as':
        "'As softer as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'as soft as'.",
      'softer as':
        "'Softer as' joins a comparative to 'as'. A comparative is followed by 'than', and this pattern needs 'as soft as'.",
      'as soft than':
        "'As soft than' mixes two patterns. After 'as' and the adjective, the next word must be 'as' again: 'as soft as'.",
    },
    more: "'As soft as' is often used in comparisons that paint a picture: 'as soft as silk'.",
    tip: "Picture comparisons like 'as cold as ice' are similes, which writers use to describe things vividly.",
  },
  "Sam's score was ___ Ben's. (same)": {
    why: "Both boys scored 15, so their scores were equal. 'The same as' says that two things are equal: 'the' before 'same', and 'as' after it.",
    not: {
      'same as': "'Same as' leaves out 'the'. In a sentence like this we always say 'the same as'.",
      'the same like':
        "'The same like' is a very common mistake. After 'the same' we use 'as', not 'like': 'the same as'.",
      'the same than':
        "'The same than' uses 'than', which follows a comparative such as 'neater'. After 'the same' we use 'as': 'the same as'.",
    },
    more: "'The same' can also come at the end: 'Their scores were the same.' Then no 'as' is needed.",
    tip: "'Ben's' means 'Ben's score'. The apostrophe saves repeating the noun.",
  },
  "My shoes are ___ my mum's. We both take size 5. (same)": {
    why: "We both take size 5, so our shoes are equal in size. 'The same + noun + as' says so: 'the same size as'.",
    not: {
      'the same size like':
        "'The same size like' is a very common mistake. After 'the same' we use 'as', not 'like': 'the same size as'.",
      'same size as':
        "'Same size as' leaves out 'the'. In a sentence like this we always say 'the same size as'.",
      'the same size than':
        "'The same size than' uses 'than', which follows a comparative such as 'neater'. After 'the same' we use 'as': 'the same size as'.",
    },
    more: "Other nouns fit this pattern too: 'the same colour as', 'the same shape as'.",
    tip: 'British shoe sizes differ from European ones: a British 5 is about a European 38.',
  },
  'Leo is ___ Ali. They are both twelve. (same)': {
    why: "Leo and Ali are both twelve, so their ages are equal. 'The same + noun + as' says so: 'the same age as'.",
    not: {
      'the same age like':
        "'The same age like' is a very common mistake. After 'the same' we use 'as', not 'like': 'the same age as'.",
      'same age as':
        "'Same age as' leaves out 'the'. In a sentence like this we always say 'the same age as'.",
      'the same age than':
        "'The same age than' uses 'than', which follows a comparative such as 'neater'. After 'the same' we use 'as': 'the same age as'.",
    },
    more: "'The same age as' puts a noun, 'age', between 'same' and 'as'.",
    tip: "Ask about age politely: 'Are you the same age as your cousin?'",
  },
  'Mia is ___ Zoe. (same)': {
    why: "Mia and Zoe are both 1.50 m, so their heights are equal. 'The same + noun + as' says so: 'the same height as'.",
    not: {
      'the same height like':
        "'The same height like' is a very common mistake. After 'the same' we use 'as', not 'like': 'the same height as'.",
      'same height as':
        "'Same height as' leaves out 'the'. In a sentence like this we always say 'the same height as'.",
      'the same height than':
        "'The same height than' uses 'than', which follows a comparative such as 'neater'. After 'the same' we use 'as': 'the same height as'.",
    },
    more: "'Height' is the noun from 'high'. It is used for people as well as buildings: 'What is your height?'",
    tip: "Write 'm' for metres after a number: 1.50 m.",
  },
  'Your answer is ___ mine. We both wrote 42. (same)': {
    why: "We both wrote 42, so the two answers match exactly. 'The same as' says so: 'the' before 'same', and 'as' after it.",
    not: {
      'the same like':
        "'The same like' is a very common mistake. After 'the same' we use 'as', not 'like': 'the same as'.",
      'the same with':
        "'The same with' is a common mistake. After 'the same' we use 'as', not 'with': 'the same as'.",
      'same like':
        "'Same like' leaves out 'the' and uses 'like'. The standard form is 'the same as'.",
    },
    more: "'Like' compares things that are similar: 'Your answer is like mine.' 'The same as' says they match exactly.",
    tip: "In maths and science, 'the same as' often means equal: '2 + 2 is the same as 4.'",
  },
  'The milkshake is the ___ drink on the menu. (cheap or expensive)': {
    why: "The milkshake costs £4, more than the tea and the juice. It is set against both, so the gap needs the superlative of 'expensive': 'most expensive'.",
    not: {
      cheapest:
        "'Cheapest' has the right form, but it is not true: the milkshake costs £4, the most on the menu. The tea is the cheapest.",
      'more expensive':
        "'More expensive' is the comparative, for two things. Here one is set against the other two drinks, so it needs 'most': 'most expensive'.",
      expensivest:
        "'Expensivest' adds -est to a long adjective. 'Expensive' has three syllables, so it takes 'most' in front: 'most expensive'.",
    },
    more: "In British English, 'dear' can also mean expensive: 'Milkshakes are dear in that café.'",
    tip: 'With a table, read the numbers first, then decide which adjective is true, and only then choose its form.',
  },
  'The train is ___ the taxi. (cheap)': {
    why: "The train costs £6 and the taxi £15, so the train costs less. Two things compared need the comparative with 'than': 'cheaper than'.",
    not: {
      'as cheap as':
        "'As cheap as' says the two cost the same, but the train is £6 and the taxi £15. Different prices need a comparative.",
      'more cheaper than':
        "'More cheaper than' says 'more' twice: the -er already means 'more'. Say 'cheaper than'.",
      'cheapest than':
        "'Cheapest' is a superlative, and a superlative never takes 'than'. Two things need the comparative: 'cheaper than'.",
    },
    more: 'The train is also dearer than the bus. One thing can cost less than one thing and more than another.',
    tip: 'Check which way a comparison goes before you choose: which of the two costs less?',
  },
  'Ali is the ___ of the three. (tall or short)': {
    why: "Ali is 1.62 m, more than Tom or Sam. 'Of the three' sets him against both, so the gap needs the superlative of 'tall': 'tallest'.",
    not: {
      shortest:
        "'Shortest' has the right form, but it is not true: Ali is 1.62 m, more than either of the others. The shortest boy is Tom.",
      taller:
        "'Taller' is the comparative, for two things. Here one is set against the other two boys, so it needs the superlative: 'tallest'.",
      'most tall':
        "'Most' goes before long adjectives. 'Tall' has one syllable, so it takes -est instead: 'tallest'.",
    },
    more: "'Of the three' asks for a superlative. With two people, the comparative is right: 'the taller of the two'.",
    tip: 'Heights in Britain are often given in metres, but some people still use feet and inches.',
  },
  'Mia is ___ Leo. (tall)': {
    why: "Mia is 1.45 m and Leo is 1.60 m, so Mia is less tall. 'Not as ... as' says that, with the plain adjective: 'not as tall as'.",
    not: {
      'as tall as': "'As tall as' says they are the same height, but Mia is 1.45 m and Leo 1.60 m.",
      'taller than': "'Taller than' is the wrong way round: Leo is the taller one, not Mia.",
      'not as taller as':
        "'Not as taller as' puts a comparative inside 'as ... as'. The pattern takes the plain adjective: 'not as tall as'.",
    },
    more: "'Not as tall as' lets you compare heights without using the opposite word.",
    tip: "In 'not as ... as', the person with less height comes first.",
  },
  'Tuesday was the ___ day of the three. (cold or warm)': {
    why: "Tuesday was 12°C, colder than Monday and Wednesday. 'Of the three' sets it against both, so the gap needs the superlative of 'cold': 'coldest'.",
    not: {
      warmest:
        "'Warmest' has the right form, but it is not true. Tuesday was 12°C, colder than both other days, and Monday was the warmest.",
      colder:
        "'Colder' is the comparative, for two things. Here one is set against the other two days, so it needs the superlative: 'coldest'.",
      'most cold':
        "'Most' goes before long adjectives. 'Cold' has one syllable, so it takes -est instead: 'coldest'.",
    },
    more: 'Temperatures under 0°C are below freezing. British winter nights often go a little below it.',
    tip: 'In a weather report, a superlative picks out the top or the bottom of the list: the mildest day, the dampest week.',
  },
  'Paris is ___ London, but not as warm as Rome. (warm)': {
    why: "Paris is 19°C and London 14°C, so Paris is the warmer of the two. The gap compares them, so it needs the comparative with 'than': 'warmer than'.",
    not: {
      'as warm as':
        "'As warm as' says Paris and London are the same, but Paris is 19°C and London 14°C.",
      'warmest than':
        "'Warmest' is a superlative, and a superlative never takes 'than'. Two cities need the comparative: 'warmer than'.",
      'more warmer than':
        "'More warmer than' says 'more' twice: the -er already means 'more'. Say 'warmer than'.",
    },
    more: 'One sentence can hold two comparisons: Paris against London, and Paris against Rome.',
    tip: "'But not as ... as' adds a second comparison that limits the first.",
  },
  'The 9.00 is the ___ train. (fast or slow)': {
    why: "The 9.00 takes 60 minutes, less time than the 8.00 or the 10.00. It is set against both, so the gap needs the superlative of 'fast': 'fastest'.",
    not: {
      slowest:
        "'Slowest' has the right form, but the 9.00 takes only 60 minutes, less time than the others. The 8.00 is the slowest.",
      faster:
        "'Faster' is the comparative, for two things. Here one is set against the other two trains, so it needs the superlative: 'fastest'.",
      'most fast':
        "'Most' goes before long adjectives. 'Fast' has one syllable, so it takes -est instead: 'fastest'.",
    },
    more: 'A fast journey takes few minutes. The train with the fewest minutes in the table wins.',
    tip: 'British timetables use the 24-hour clock: 18.30 is half past six in the evening.',
  },
  'The school is the ___ from my house. (far or near)': {
    why: "The school is 3 km away, more than the park or the shops. It is set against both, so the gap needs the superlative of 'far', which is irregular: 'furthest'.",
    not: {
      nearest:
        "'Nearest' has the right form, but it is not true: the school is 3 km away, more than the others. The park is the nearest.",
      further:
        "'Further' is the comparative, for two things. Here one is set against the park and the shops, so it needs the superlative: 'furthest'.",
      farest:
        "'Farest' follows the regular -est rule, but 'far' is irregular. Its superlative is 'furthest'.",
    },
    more: "'Farthest' is also used for distance. In British English 'furthest' is more common.",
    tip: "'From my house' names the starting point. Every distance in the table is measured from there.",
  },
  'The science block is the ___ building. (old or new)': {
    why: "The science block was built in 2010, after the library and the gym. It is set against both, so the gap needs the superlative of 'new': 'newest'.",
    not: {
      oldest:
        "'Oldest' has the right form, but it is not true: the science block was built in 2010, after the others. The library is the oldest.",
      newer:
        "'Newer' is the comparative, for two things. Here one is set against the library and the gym, so it needs the superlative: 'newest'.",
      'most new':
        "'Most' goes before long adjectives. 'New' has one syllable, so it takes -est instead: 'newest'.",
    },
    more: 'With dates, the most recent year belongs to the newest building. Read the years before you choose.',
    tip: "'Built in' is the passive: it says when a building was built, not who built it.",
  },
  'The blue bag is the ___. (heavy or light)': {
    why: "The blue bag is 5 kg, more than the red or the green bag. It is set against both, so the gap needs the superlative of 'heavy': 'heaviest'.",
    not: {
      lightest:
        "'Lightest' has the right form, but it is not true: the blue bag is 5 kg, more than the others. The red bag is the lightest.",
      heavier:
        "'Heavier' is the comparative, for two things. Here one is set against the red bag and the green bag, so it needs the superlative: 'heaviest'.",
      heavyest:
        "'Heavyest' keeps the y. In 'heavy' a consonant comes before the y, so the y changes to i: 'heaviest'.",
    },
    more: "'Kg' stands for kilograms. Airlines weigh bags in kilograms.",
    tip: "A superlative can end a sentence when the group is clear: 'The blue bag is the ...'",
  },
  "Ben's mark was the ___ of the three. (good or bad)": {
    why: "Ben scored 12, less than Ana or Cal. 'Of the three' sets his mark against both, so the gap needs the superlative of 'bad', which is irregular: 'worst'.",
    not: {
      best: "'Best' has the right form, but it is not true: Ben's 12 is the lowest mark in the table. Ana's 18 was the best.",
      worse:
        "'Worse' is the comparative, for two things. Here one is set against the other two marks, so it needs the superlative: 'worst'.",
      baddest:
        "'Baddest' follows the -est rule, but 'bad' is irregular. Its superlative is 'worst'.",
    },
    more: "Marks can also be described as high or low. Here the choice is between 'good' and 'bad'.",
    tip: "When you talk about your own results, 'not as good as I hoped' sounds gentler than a superlative.",
  },
  'The Severn is ___ the Thames. (long)': {
    why: "The Severn is 354 km and the Thames 346 km, so the Severn is the longer of the two. The gap compares them, so it needs the comparative with 'than': 'longer than'.",
    not: {
      'as long as':
        "'As long as' says they are equal, but the Severn is 354 km and the Thames 346 km. Different lengths need a comparative.",
      'longest than':
        "'Longest' is a superlative, and a superlative never takes 'than'. Two rivers need the comparative: 'longer than'.",
      'more longer than':
        "'More longer than' says 'more' twice: the -er already means 'more'. Say 'longer than'.",
    },
    more: 'The Severn is the longest river in Britain. It rises in Wales and reaches the sea near Bristol.',
    tip: "Write 'km' for kilometres after a number: 354 km.",
  },
  'Scafell Pike is the ___ of the three. (high or low)': {
    why: "Scafell Pike is 978 m, less than Ben Nevis or Snowdon. 'Of the three' sets it against both, so the gap needs the superlative of 'low': 'lowest'.",
    not: {
      highest:
        "'Highest' has the right form, but it is not true: Scafell Pike is 978 m, less than the others. Ben Nevis is the highest.",
      lower:
        "'Lower' is the comparative, for two things. Here one is set against the other two mountains, so it needs the superlative: 'lowest'.",
      'most low':
        "'Most' goes before long adjectives. 'Low' has one syllable, so it takes -est instead: 'lowest'.",
    },
    more: 'Each is the top of its country: Ben Nevis in Scotland, Snowdon in Wales and Scafell Pike in England.',
    tip: 'Snowdon also has a Welsh name, Yr Wyddfa, which many maps now use.',
  },
  'Leeds was the ___ of the three cities. (wet or dry)': {
    why: "Leeds had 20 mm of rain, more than York or Hull. 'Of the three' sets it against both, so the gap needs the superlative of 'wet', which doubles its t: 'wettest'.",
    not: {
      driest:
        "'Driest' has the right form, but it is not true: Leeds had 20 mm of rain, more than the others. Hull, with none, was the driest.",
      wetter:
        "'Wetter' is the comparative, for two things. Here one is set against the other two cities, so it needs the superlative: 'wettest'.",
      wetest:
        "'Wetest' does not double the last letter. 'Wet' ends in one vowel and one consonant, so the consonant doubles: 'wettest'.",
    },
    more: 'Rain is measured in millimetres (mm): how deep the water would be if none of it ran away.',
    tip: "'Dry' changes y to i in its endings, but 'wet' doubles its t. Opposites can follow different rules.",
  },
  'Model A is ___ Model B. (expensive)': {
    why: "Model A costs £300 and Model B £450, so Model A costs less. 'Less + adjective + than' says that, with the plain adjective after 'less': 'less expensive than'.",
    not: {
      'more expensive than':
        "'More expensive than' is the wrong way round: Model A costs £300, less than Model B's £450.",
      'least expensive than':
        "'Least' makes a superlative, and a superlative never takes 'than'. For two things, use 'less ... than'.",
      'less expensive as':
        "'Less expensive as' mixes two patterns. After 'less' and the adjective comes 'than': 'less expensive than'.",
    },
    more: "'Less' works with any adjective, but with short ones the opposite adjective is the usual choice: 'less big' is rare.",
    tip: "'Less' is the opposite of 'more'. 'Least' is the opposite of 'most'.",
  },
  'Swimming is ___ tennis with these pupils. (popular)': {
    why: "Ten pupils chose swimming and six chose tennis, so swimming has more fans. The gap compares two sports, so it needs the comparative: 'more popular than'.",
    not: {
      'less popular than':
        "'Less popular than' is the wrong way round: 10 pupils chose swimming and only 6 chose tennis.",
      'popularer than':
        "'Popularer' adds -er to a long adjective. 'Popular' has three syllables, so it takes 'more': 'more popular than'.",
      'most popular than':
        "'Most' makes a superlative, and a superlative never takes 'than'. For two sports, use 'more popular than'.",
    },
    more: 'Football, with 14, was the favourite sport in this survey.',
    tip: 'When you report a survey, give the numbers as well as the comparison.',
  },
  'The bus is ___ walking. (quick)': {
    why: "The bus takes 25 minutes and walking takes 40, so the bus is the quicker of the two. The gap compares them, so it needs the comparative with 'than': 'quicker than'.",
    not: {
      'as quick as':
        "'As quick as' says they take the same time, but the bus takes 25 minutes and walking 40.",
      'quickest than':
        "'Quickest' is a superlative, and a superlative never takes 'than'. Two ways of travelling need the comparative: 'quicker than'.",
      'more quicker than':
        "'More quicker than' says 'more' twice: the -er already means 'more'. Say 'quicker than'.",
    },
    more: 'A journey that takes fewer minutes is quicker. Here the car would beat them both.',
    tip: "'On foot' means walking. We say 'by car' and 'by bus', but 'on foot'.",
  },
  'The museum was ___ the castle. (crowded)': {
    why: "The museum had 400 visitors and the castle 900, so the museum had fewer people in it. 'Less + adjective + than' says that: 'less crowded than'.",
    not: {
      'more crowded than':
        "'More crowded than' is the wrong way round: the museum had 400 visitors and the castle 900.",
      'least crowded than':
        "'Least' makes a superlative, and a superlative never takes 'than'. For two places, use 'less ... than'.",
      'less crowded as':
        "'Less crowded as' mixes two patterns. After 'less' and the adjective comes 'than': 'less crowded than'.",
    },
    more: "'Fewer' goes with things you count, like visitors; 'less' goes before an adjective, as here.",
    tip: "'Less' keeps the adjective plain, however long it is.",
  },
  'The second half of the match was much ___ than the first. (good)': {
    why: "'Than' compares the two halves of the match, so the gap needs the comparative. 'Much' adds force but does not change the form. 'Good' is irregular: 'much better'.",
    not: {
      'more better':
        "'Much more better' says 'more' twice, because 'better' already means 'more good'. 'Much' goes straight before 'better'.",
      best: "'Best' is the superlative, for one thing set against a whole group. This sentence compares two things, the two halves of the match, so it needs the comparative: 'better'.",
      gooder:
        "'Gooder' follows the regular -er rule, but 'good' is irregular. Its comparative is 'better'.",
    },
    more: "'Much', 'far', 'a lot' and 'a bit' can all go before a comparative to say how big the difference is.",
    tip: "'Much more better' is one of the commonest mistakes in English. 'Much' and the comparative are all you need.",
  },
  'The new road is a lot ___ than the old one. (wide)': {
    why: "'Than' compares the new road and the old one, so the gap needs the comparative. 'A lot' says the difference is large, but it does not change the form. 'Wide' adds -r: 'a lot wider'.",
    not: {
      'more wider':
        "'More wider' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'wider'.",
      widest:
        "'Widest' is the superlative, for one thing set against a whole group. This sentence compares two things, the new road and the old one, so it needs the comparative: 'wider'.",
      'more wide':
        "'More' goes before long adjectives. 'Wide' has one syllable and ends in -e, so it just adds -r: 'wider'.",
    },
    more: "'A lot' is informal and very common in speech. 'Much' means the same and is a little more formal.",
    tip: "Never put 'more' between 'a lot' and an -er form: 'a lot wider', not 'a lot more wider'.",
  },
  'This test was a bit ___ than I thought. (easy)': {
    why: "'Than I thought' compares the test with what I expected, so the gap needs the comparative. 'A bit' says the difference is small. 'Easy' changes y to i: 'a bit easier'.",
    not: {
      'more easier':
        "'More easier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'easier'.",
      easyer:
        "'Easyer' keeps the y. In 'easy' a consonant comes before the y, so the y changes to i: 'easier'.",
      easiest:
        "'Easiest' is the superlative, for one thing set against a whole group. This sentence compares two things, the test and what I thought it would be, so it needs the comparative: 'easier'.",
    },
    more: "'A bit' and 'a little' make a small difference; 'much' and 'a lot' make a big one.",
    tip: "'A bit' is friendly and informal. In a formal essay, write 'slightly' instead.",
  },
  'London is far ___ than my home town. (busy)': {
    why: "'Than' compares London and my home town, so the gap needs the comparative. 'Far' before a comparative means 'much'. 'Busy' changes y to i: 'far busier'.",
    not: {
      'more busier':
        "'More busier' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'busier'.",
      busyer:
        "'Busyer' keeps the y. In 'busy' a consonant comes before the y, so the y changes to i: 'busier'.",
      busiest:
        "'Busiest' is the superlative, for one thing set against a whole group. This sentence compares two things, London and my home town, so it needs the comparative: 'busier'.",
    },
    more: "Here 'far' does not mean distance. Before a comparative it means 'very much': 'far busier', 'far neater'.",
    tip: 'London has about nine million people, which helps to explain why it is so busy.',
  },
  'This sofa is much ___ than our old one. (comfortable)': {
    why: "'Than' compares this sofa and our old one, so the gap needs the comparative. 'Much' adds force. 'Comfortable' is long, so we need both words: 'much more comfortable'.",
    not: {
      comfortabler:
        "'Comfortabler' adds -er to a long adjective. 'Comfortable' has many letters and syllables, so it takes 'more' in front: 'more comfortable'.",
      'most comfortable':
        "'Most comfortable' is the superlative, for one thing set against a whole group. This sentence compares two things, this sofa and our old one, so it needs 'more': 'more comfortable'.",
      comfortable:
        "'Much comfortable than' is not English: before 'than' we need a comparative. With a long adjective, that means 'much more comfortable'.",
    },
    more: "With a long adjective, 'much more' is correct. With a short one, 'much' goes straight before the -er form.",
    tip: "'Sofa' and 'settee' are both British words for the same piece of furniture.",
  },
  'My little brother is much ___ than he was last year. (strong)': {
    why: "'Than he was last year' compares my brother at two times, so the gap needs the comparative. 'Much' adds force without changing the form: 'much stronger'.",
    not: {
      'more stronger':
        "'More stronger' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'stronger'.",
      strongest:
        "'Strongest' is the superlative, for one thing set against a whole group. This sentence compares two things, my brother now and last year, so it needs the comparative: 'stronger'.",
      'more strong':
        "'More' goes before long adjectives. 'Strong' has one syllable, so it takes -er instead: 'stronger'.",
    },
    more: "'Than he was' compares a person with himself in the past. Children grow, so such comparisons are common.",
    tip: "'Much' and an -er form need no 'more'. 'Much more stronger' is a mistake.",
  },
  'York is one of the ___ cities in England. (old)': {
    why: "'One of the' picks York out of a big group, the cities in England, so the gap needs the superlative, with a plural noun after it. 'Old' is short: add -est, 'oldest'.",
    not: {
      'most old':
        "'Most' goes before long adjectives. 'Old' has one syllable, so it takes -est: 'oldest'.",
      'most oldest':
        "'Most oldest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'oldest'.",
      'more old':
        "'More old' is wrong twice: 'more' is for long adjectives, and 'one of the' needs a superlative. 'Old' takes -est: 'oldest'.",
    },
    more: "York was founded by the Romans almost 2,000 years ago. 'One of the older cities' is also English, but it means fairly old, not near the top.",
    tip: "After 'one of the', always use a plural noun: 'one of the oldest cities', never 'city'.",
  },
  'It was one of the ___ days of the summer. (hot)': {
    why: "'One of the' picks one day out of all the days of the summer, so the gap needs the superlative, with a plural noun after it. 'Hot' doubles its t: 'hottest'.",
    not: {
      hotest:
        "'Hotest' does not double the last letter. 'Hot' ends in one vowel and one consonant, so the consonant doubles: 'hottest'.",
      'most hot':
        "'Most' goes before long adjectives. 'Hot' has one syllable, so it doubles its t and takes -est: 'hottest'.",
      'most hottest':
        "'Most hottest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'hottest'.",
    },
    more: "'One of the hotter days' is also English, meaning fairly hot. 'One of the hottest' means near the very top.",
    tip: "Use 'one of the' when you are not sure something is number one: it stays true if another day came close.",
  },
  'This is one of the ___ jokes I know. (funny)': {
    why: "'One of the' picks one joke out of all the jokes I know, so the gap needs the superlative, with a plural noun after it. 'Funny' changes y to i: 'funniest'.",
    not: {
      funnyest:
        "'Funnyest' keeps the y. In 'funny' a consonant comes before the y, so the y changes to i: 'funniest'.",
      'most funniest':
        "'Most funniest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'funniest'.",
    },
    more: "'The ... jokes I know' gives the group: every joke the speaker knows.",
    tip: "Learn the whole pattern: 'one of the' + superlative + plural noun, as in 'one of the bravest people'.",
  },
  'It was one of the ___ nights of the winter. (windy)': {
    why: "'One of the' picks one night out of all the nights of the winter, so the gap needs the superlative, with a plural noun after it. 'Windy' changes y to i: 'windiest'.",
    not: {
      windyest:
        "'Windyest' keeps the y. In 'windy' a consonant comes before the y, so the y changes to i: 'windiest'.",
      'most windiest':
        "'Most windiest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'windiest'.",
    },
    more: "'Windy' comes from 'wind'. Strong winds in Britain usually come from the west, off the Atlantic.",
    tip: "Check the noun after the gap. A plural noun after 'one of the' is the sign of this pattern.",
  },
  'Birmingham is the second ___ city in Britain. (large)': {
    why: "'The second' puts Birmingham in second place in a list of all Britain's cities. A place in such a list needs the superlative: 'the second largest'. 'Large' just adds -st.",
    not: {
      larger:
        "'Larger' is the comparative, for two things. 'The second ...' puts Birmingham second in a list of all the cities, so it needs the superlative: 'largest'.",
      'most large':
        "'Most' goes before long adjectives. 'Large' has one syllable and ends in -e, so it just adds -st: 'largest'.",
      'most largest':
        "'Most largest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'largest'.",
    },
    more: "Only London has more people than Birmingham. 'The second ...' and 'the third ...' rank things after the first.",
    tip: "Use a number before a superlative to rank things: 'the third steepest hill', 'the second grandest hall'.",
  },
  'This is the ___ book I have ever read. (exciting)': {
    why: "'I have ever read' sets this book against every book I have read, so the gap needs the superlative. 'Exciting' ends in -ing, so we put 'most' in front: 'most exciting'.",
    not: {
      'more exciting':
        "'More exciting' is the comparative, for two things. Here one is set against every book I have ever read, so it needs 'most': 'most exciting'.",
      excitingest:
        "'Excitingest' adds -est to an adjective ending in -ing. Those always take 'most' in front: 'most exciting'.",
      exciting:
        "'Exciting' on its own compares nothing. 'I have ever read' sets this book against every other, so it needs the superlative: 'most exciting'.",
    },
    more: "'Ever' with the present perfect ('have ever read') is the usual partner of a superlative.",
    tip: "In a book review, a superlative with 'ever' shows strong feeling. Back it up with a reason.",
  },
  'It was the ___ day I have ever had. (bad)': {
    why: "'I have ever had' sets this day against every day of my life so far, so the gap needs the superlative. 'Bad' is irregular: its superlative is 'worst'.",
    not: {
      worse:
        "'Worse' is the comparative, for two things. Here one is set against every day I have ever had, so it needs the superlative: 'worst'.",
      baddest:
        "'Baddest' follows the -est rule, but 'bad' is irregular. Its superlative is 'worst'.",
      'most bad':
        "'Most' goes before long adjectives, and 'bad' is short and irregular. Its superlative is 'worst'.",
    },
    more: "People often exaggerate with 'the ... day I have ever had'. It shows feeling more than fact.",
    tip: "Follow a superlative like this with what happened: '... because I lost my bag and missed the bus.'",
  },
  'She is the ___ person I have ever met. (patient)': {
    why: "'I have ever met' sets her against everyone I have met, so the gap needs the superlative. 'Patient' has two syllables and does not end in -y, so we put 'most' in front: 'most patient'.",
    not: {
      'more patient':
        "'More patient' is the comparative, for two things. Here one is set against everyone I have ever met, so it needs 'most': 'most patient'.",
      patientest:
        "'Patientest' adds -est to a long adjective. 'Patient' has two syllables and does not end in -y, so it takes 'most' in front: 'most patient'.",
      patient:
        "'Patient' on its own compares nothing. 'I have ever met' sets her against everyone I have met, so it needs the superlative: 'most patient'.",
    },
    more: "'Patient' as an adjective means calm when you have to wait. As a noun, it is a person a doctor looks after.",
    tip: "Its opposite is 'impatient': the prefix im- means 'not'.",
  },
  'It was the ___ film I have ever seen. (scary)': {
    why: "'I have ever seen' sets this film against every film I have seen, so the gap needs the superlative. 'Scary' changes y to i before -est: 'scariest'.",
    not: {
      scaryest:
        "'Scaryest' keeps the y. In 'scary' a consonant comes before the y, so the y changes to i: 'scariest'.",
      scarier:
        "'Scarier' is the comparative, for two things. Here one is set against every film I have ever seen, so it needs the superlative: 'scariest'.",
      'most scariest':
        "'Most scariest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'scariest'.",
    },
    more: 'A scary film makes people scared. The -y word describes the film, the -ed word the viewer.',
    tip: "'I have ever seen' uses the present perfect because your life so far is not finished.",
  },
  'This is the ___ place I have ever visited. (peaceful)': {
    why: "'I have ever visited' sets this place against every place I have been, so the gap needs the superlative. 'Peaceful' ends in -ful, so we put 'most' in front: 'most peaceful'.",
    not: {
      'more peaceful':
        "'More peaceful' is the comparative, for two things. Here one is set against every place I have ever visited, so it needs 'most': 'most peaceful'.",
      peacefullest:
        "'Peacefullest' adds -est to a long adjective. 'Peaceful' has two syllables and does not end in -y, so it takes 'most' in front: 'most peaceful'.",
      peaceful:
        "'Peaceful' on its own compares nothing. 'I have ever visited' sets this place against every other, so it needs the superlative: 'most peaceful'.",
    },
    more: "'Visit' is a verb and a noun: 'I visited Wales' and 'my visit to Wales'.",
    tip: 'Describe a place with a superlative, then add what you saw or heard there.',
  },
  'I was ___ in the second lesson than in the first. (bored)': {
    why: "'Than in the first' compares how I felt in two lessons, so the gap needs the comparative. 'Bored' ends in -ed, so it takes 'more', even with one syllable: 'more bored'.",
    not: {
      'more boring':
        "'More boring' describes something that bores people. It would mean I was a duller person, not that I felt bored. Here we need 'more bored'.",
      'most bored':
        "'Most bored' is the superlative. 'Than in the first' compares two lessons, so it needs the comparative: 'more bored'.",
      bored:
        "'Bored' on its own compares nothing. Before 'than' we need the comparative: 'more bored'.",
    },
    more: '-ed adjectives describe a feeling (bored, tired, worried); -ing adjectives describe what causes it (boring, tiring, worrying).',
    tip: 'Ask yourself: is it a feeling inside a person? Then use the -ed word.',
  },
  'Of everyone in the family, Dad was the ___ about the long journey. (worried)': {
    why: "'Of everyone in the family' sets Dad against all the others, so the gap needs the superlative. 'Worried' ends in -ed, so we put 'most' in front: 'most worried'.",
    not: {
      'most worrying':
        "'Most worrying' describes something that makes people worry, such as the journey. Dad is the one who feels it, so we need 'most worried'.",
      'more worried':
        "'More worried' is the comparative, for two things. Here one is set against everyone else in the family, so it needs 'most': 'most worried'.",
      worried:
        "'Worried' on its own compares nothing. 'Of everyone in the family' sets Dad against the rest, so it needs the superlative: 'most worried'.",
    },
    more: "The pair 'worried' and 'worrying' follows the -ed and -ing rule: a worrying test makes worried pupils.",
    tip: "'Worried about' is the usual partner: 'I am worried about my exam.'",
  },
  'The children were ___ about the trip than their parents. (excited)': {
    why: "'Than their parents' compares two groups, so the gap needs the comparative. 'Excited' ends in -ed, so we put 'more' in front: 'more excited'.",
    not: {
      'more exciting':
        "'More exciting' describes the thing that excites, such as the trip. The children are the ones who feel it, so we need 'more excited'.",
      'most excited':
        "'Most excited' is the superlative. 'Than their parents' compares two groups, so it needs the comparative: 'more excited'.",
      excited:
        "'Excited' on its own compares nothing. Before 'than' we need the comparative: 'more excited'.",
    },
    more: "We are excited about something: 'excited about the trip'. The trip itself is exciting.",
    tip: "Use 'about' after 'excited' and 'worried', and 'in' after 'interested'.",
  },
  'Mum was ___ with my report this year than last year. (pleased)': {
    why: "'Than last year' compares how Mum felt in two years, so the gap needs the comparative. 'Pleased' ends in -ed, so it takes 'more', even with one syllable: 'more pleased'.",
    not: {
      'more pleasing':
        "'More pleasing' describes the thing that gives pleasure, such as the report. Mum is the one who feels it, so we need 'more pleased'.",
      'most pleased':
        "'Most pleased' is the superlative. 'Than last year' compares two years, so it needs the comparative: 'more pleased'.",
      pleased:
        "'Pleased' on its own compares nothing. Before 'than' we need the comparative: 'more pleased'.",
    },
    more: "'Pleased with' something is the usual pattern: 'pleased with my report'.",
    tip: "In a British school, a 'report' is the written summary of a pupil's work that goes home to parents.",
  },
  'I was the ___ person in the room when the lights went out. (scared)': {
    why: "'In the room' sets me against everyone else there, so the gap needs the superlative. 'Scared' ends in -ed, so it takes 'most', even with one syllable: 'most scared'.",
    not: {
      'most scary':
        "'Most scary' describes the thing that frightens people, such as the dark. The speaker is the one who feels it, so we need 'most scared'.",
      'more scared':
        "'More scared' is the comparative, for two things. Here one is set against everyone else in the room, so it needs 'most': 'most scared'.",
    },
    more: "'Scary' and 'scared' work like 'boring' and 'bored': the thing is scary, and the person is scared.",
    tip: "'When the lights went out' gives the moment. In a story, a time clause like this often follows a superlative.",
  },
  'Ana is ___ in science than in history. (interested)': {
    why: "'Than in history' compares how Ana feels about two subjects, so the gap needs the comparative. 'Interested' ends in -ed, so we put 'more' in front: 'more interested'.",
    not: {
      'more interesting':
        "'More interesting' describes the subject that holds attention. Ana is the one who feels it, so we need 'more interested'.",
      'most interested':
        "'Most interested' is the superlative. 'Than in history' compares two subjects, so it needs the comparative: 'more interested'.",
      interested:
        "'Interested' on its own compares nothing. Before 'than' we need the comparative: 'more interested'.",
    },
    more: "We are interested in something: 'interested in science'. Notice 'in' on both sides of 'than'.",
    tip: 'The -ed word is for the person; the -ing word is for the thing that causes the feeling.',
  },
  'Ali drives ___ than his brother. (carefully)': {
    why: "'Than his brother' compares how two people drive, so the gap needs the comparative. It describes the verb 'drives', so it needs an adverb, and -ly adverbs take 'more': 'more carefully'.",
    not: {
      'more careful':
        "'More careful' is the adjective, but the gap describes the verb 'drives', so it needs the adverb: 'more carefully'.",
      'most carefully':
        "'Most carefully' is the superlative, and a superlative never takes 'than'. Two drivers need 'more carefully'.",
      carefully:
        "'Carefully' on its own compares nothing. Before 'than' we need the comparative: 'more carefully'.",
    },
    more: "Adjectives describe nouns ('a careful driver'); adverbs describe verbs ('he drives carefully').",
    tip: "Check what the word describes. A verb needs an adverb, so compare with 'more' and the -ly word.",
  },
  'I got up ___ than usual this morning. (early)': {
    why: "'Than usual' compares this morning with a normal one, so the gap needs the comparative. 'Early' works as an adverb here, and it changes y to i before -er: 'earlier'.",
    not: {
      'more early':
        "'More early' is a common mistake. 'Early' changes y to i and adds -er, even as an adverb: 'earlier'.",
      earlyer:
        "'Earlyer' keeps the y. In 'early' a consonant comes before the y, so the y changes to i: 'earlier'.",
      earliest:
        "'Earliest' is the superlative, and a superlative never takes 'than'. Two mornings need 'earlier'.",
    },
    more: "'Early' is both an adjective ('an early train') and an adverb ('I got up early'). Its forms are the same in both.",
    tip: "'Than usual' is short for 'than I usually do'.",
  },
  'The bus arrived ___ than we expected. (late)': {
    why: "'Than we expected' compares when the bus came with when we thought it would, so the gap needs the comparative. 'Late' ends in -e, so we just add -r: 'later'.",
    not: {
      latter:
        "'Latter' is a different word: it means the second of two things already named. Here we need the comparative of 'late': 'later'.",
      latest:
        "'Latest' is the superlative, and a superlative never takes 'than'. Two times compared need 'later'.",
      late: "'Late' on its own compares nothing. Before 'than' we need the comparative: 'later'.",
    },
    more: "'Lately' is a different word too: it means 'recently'. Here 'late' is the adverb.",
    tip: "Say it aloud: 'later' has a long a, like 'gate'; 'latter' has a short a, like 'cat'.",
  },
  'She sings ___ than anyone else in the choir. (beautifully)': {
    why: "'Than anyone else in the choir' compares her singing with everyone else's, so the gap needs the comparative. It describes the verb 'sings', so it needs the adverb, with 'more': 'more beautifully'.",
    not: {
      'more beautiful':
        "'More beautiful' is the adjective, but the gap describes the verb 'sings', so it needs the adverb: 'more beautifully'.",
      'most beautifully':
        "'Most beautifully' is the superlative, and a superlative never takes 'than'. Here we need 'more beautifully'.",
      beautifully:
        "'Beautifully' on its own compares nothing. Before 'than' we need the comparative: 'more beautifully'.",
    },
    more: "'Than anyone else' puts her at the top, but the grammar is still a comparison of two: her and any other singer.",
    tip: "Adverbs made from an adjective with -ly take 'more' and 'most', whatever their length: 'more slowly', 'more quietly'.",
  },
  'With a calculator you can do this task ___ than without one. (easily)': {
    why: "'Than without one' compares doing the task in two ways, so the gap needs the comparative. It describes the verb 'do', so it needs the adverb, and -ly adverbs take 'more': 'more easily'.",
    not: {
      'more easy':
        "'More easy' is wrong twice: 'easy' is the adjective, and it would take -er. The gap describes the verb 'do', so it needs the adverb: 'more easily'.",
      easily:
        "'Easily' on its own compares nothing. Before 'than' we need the comparative: 'more easily'.",
      'most easily':
        "'Most easily' is the superlative, and a superlative never takes 'than'. Here we need 'more easily'.",
    },
    more: "The adjective is 'easy'; the adverb is 'easily'. The y changes to i before -ly as well.",
    tip: "In writing, compare actions with 'more' and an -ly adverb: 'more easily', 'more quickly'.",
  },
  'B: Yes. The building is ___ than my old school, and the lessons are fun. (modern)': {
    why: "B compares the new school building with the old school, so the gap needs the comparative. 'Modern' has two syllables and does not end in -y, so we put 'more' in front: 'more modern'.",
    not: {
      moderner:
        "'Moderner' adds -er to a long adjective. 'Modern' has two syllables and does not end in -y, so it takes 'more' in front: 'more modern'.",
      'most modern':
        "'Most modern' is the superlative, for one thing set against a whole group. This sentence compares two things, the new building and my old school, so it needs 'more': 'more modern'.",
      modern:
        "'Modern' on its own compares nothing. Before 'than', a long adjective needs 'more' in front: 'more modern'.",
    },
    more: 'In a conversation, a comparison often gives the reason for an opinion: B likes the school because the building is up to date.',
    tip: "When you answer 'Do you like ...?', add a comparison with a reason. It makes your answer fuller.",
  },
  'B: No, it is ___ than you think. It is only five minutes away. (close)': {
    why: "'Than you think' compares the real distance with the distance A imagines, so the gap needs the comparative. 'Close' ends in -e, so we just add -r: 'closer'.",
    not: {
      closest:
        "'Closest' is the superlative, for one thing set against a whole group. This sentence compares two things, the real distance and the distance you imagine, so it needs the comparative: 'closer'.",
      'more closer':
        "'More closer' says 'more' twice, because the -er ending already means 'more'. Leave out 'more': 'closer'.",
      close:
        "'Close' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'closer'.",
    },
    more: "'Than you think' is a friendly way to correct someone in a conversation.",
    tip: "Add a fact after the comparison to support it: 'It is only five minutes away.'",
  },
  'A: Which room in your house is the ___? B: The living room, next to the fire. (cosy)': {
    why: "A asks which room beats every other room in the house, so the gap needs the superlative. 'Cosy' changes y to i before -est: 'cosiest'.",
    not: {
      cosier:
        "'Cosier' is the comparative, for two things. Here one is set against every other room in the house, so it needs the superlative: 'cosiest'.",
      cosyest:
        "'Cosyest' keeps the y. In 'cosy' a consonant comes before the y, so the y changes to i: 'cosiest'.",
      'most cosiest':
        "'Most cosiest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'cosiest'.",
    },
    more: "A question with 'Which ... is the ...?' and a group asks for a superlative. B answers with just the room's name.",
    tip: "In a speaking test, answer a 'which' question and then add a detail, as B does.",
  },
  'B: Ten. He is two years ___ than me. (young)': {
    why: "'Than me' compares my brother and me, so the gap needs the comparative. 'Young' is short: add -er, 'younger'. 'Two years' says by how much.",
    not: {
      youngest:
        "'Youngest' is the superlative, for one thing set against a whole group. This sentence compares two things, my brother and me, so it needs the comparative: 'younger'.",
      'more young':
        "'More' goes before long adjectives. 'Young' has one syllable, so it takes -er instead: 'younger'.",
      young:
        "'Young' is the adjective on its own, so it compares nothing. Before 'than' we need the comparative: 'younger'.",
    },
    more: "Put the difference before the comparative: 'two years younger', 'two degrees milder'.",
    tip: "In speech, 'than me' is normal. 'Than I am' is more formal, and both are correct.",
  },
  'B: Because it has the ___ vegetables in town. (fresh)': {
    why: "B sets the market's vegetables against all the vegetables in town, so the gap needs the superlative. 'Fresh' is short: add -est, 'freshest'.",
    not: {
      fresher:
        "'Fresher' is the comparative, for two things. Here one is set against all the vegetables in town, so it needs the superlative: 'freshest'.",
      'most freshest':
        "'Most freshest' says 'most' twice, because the -est ending already means 'most'. Leave out 'most': 'freshest'.",
    },
    more: "'Because' answers a 'why' question. A superlative makes the reason strong.",
    tip: "In a conversation you can start an answer with 'Because ...', but in writing join it to a main clause.",
  },
  'B: Not really. It is ___ than it was, because there is a new cycle lane. (dangerous)': {
    why: "B says 'Not really' and mentions a new cycle lane, so the risk has gone down. 'Less + adjective + than' says that: 'less dangerous'.",
    not: {
      'more dangerous':
        "'More dangerous' says the opposite of what B means: B says 'Not really', and a new cycle lane lowers the risk.",
      'least dangerous':
        "'Least' makes a superlative, and a superlative never takes 'than'. For two times, use 'less dangerous'.",
      dangerouser:
        "'Dangerouser' adds -er to a long adjective. 'Dangerous' takes 'more' or 'less' in front.",
    },
    more: "'Less' is the opposite of 'more'. It works well with long adjectives such as 'dangerous' and 'expensive'.",
    tip: "Listen for clues like 'Not really' in a dialogue. They tell you which way a comparison goes.",
  },
}
