import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Bigger, Biggest: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/comparatives-superlatives.ts). Written with AI on 16
 * October 2026 and checked against each question and its options, as the founder
 * decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'My new phone is ___ than my old one. (small)': {
    why: "'Than' shows that two things are compared: the new phone and the old phone. So we need the comparative. 'Small' is a short adjective with one syllable, so we add -er: 'smaller'.",
    not: {
      smallest:
        "'Smallest' is the superlative, for three or more things. This sentence compares the new phone and the old phone, so 'than' needs the comparative: 'smaller'.",
      'more small':
        "'More' is for long adjectives, such as 'expensive'. 'Small' has one syllable, so we add -er: 'smaller'.",
      small:
        "'Small' is the plain adjective. After 'than' we need the comparative form: 'smaller'.",
    },
    more: "Short adjectives are easy: add -er for the comparative and -est for the superlative. More examples: 'cheap, cheaper, cheapest' and 'young, younger, youngest'.",
    tip: "When you write a comparison, use 'than' after the comparative: 'My phone is smaller than yours.'",
  },
  'This is the ___ box in the whole shop. (small)': {
    why: "'The' and 'in the whole shop' show that one box is compared with all the other boxes. So we need the superlative. 'Small' is a short adjective, so we add -est: 'smallest'.",
    not: {
      smaller:
        "'Smaller' is the comparative, for two things. This sentence compares one thing with all the other boxes in the shop, so it needs the superlative: 'smallest'.",
      'most small':
        "'Most' is for long adjectives, such as 'beautiful'. 'Small' has one syllable, so we add -est: 'smallest'.",
      small:
        "'Small' is the plain adjective. This sentence compares one thing with all the other boxes in the shop, so it needs the superlative: 'smallest'.",
    },
    more: "A superlative often has 'in' or 'of' after the noun: 'the smallest box in the shop', 'the smallest of all'.",
    tip: "Write 'the' before a superlative: 'the smallest', not 'smallest'.",
  },
  'An elephant is ___ than a dog. (tall)': {
    why: "'Than' compares an elephant and a dog, so we need the comparative. 'Tall' is a short adjective, so we add -er: 'taller'.",
    not: {
      tallest:
        "'Tallest' is the superlative, for three or more things. This sentence compares an elephant and a dog, so 'than' needs the comparative: 'taller'.",
      'more tall':
        "'More' is for long adjectives, such as 'expensive'. 'Tall' has one syllable, so we add -er: 'taller'.",
      tall: "'Tall' is the plain adjective. After 'than' we need the comparative form: 'taller'.",
    },
    more: "The first thing goes before 'than' and the second thing goes after it: 'An elephant is taller than a dog.'",
    tip: "Look for the word 'than'. When a sentence has 'than', you almost always need a comparative.",
  },
  'Ben is the ___ player in the team. (tall)': {
    why: "Ben is compared with all the other players in the team, so we need the superlative. 'Tall' is a short adjective, so we add -est: 'tallest'.",
    not: {
      taller:
        "'Taller' is the comparative, for two things. This sentence compares one thing with all the other players in the team, so it needs the superlative: 'tallest'.",
      'most tall':
        "'Most' is for long adjectives, such as 'beautiful'. 'Tall' has one syllable, so we add -est: 'tallest'.",
      tall: "'Tall' is the plain adjective. This sentence compares one thing with all the other players in the team, so it needs the superlative: 'tallest'.",
    },
    more: "The group comes after 'in' or 'of': 'the tallest player in the team', 'the tallest of the three'.",
    tip: "Use 'in' with a place or a group (in the team, in the class) and 'of' with a number or 'all'.",
  },
  'A lorry is ___ than a bicycle. (slow)': {
    why: "'Than' compares a lorry and a bicycle, so we need the comparative. 'Slow' is a short adjective, so we add -er: 'slower'.",
    not: {
      slowest:
        "'Slowest' is the superlative, for three or more things. This sentence compares a lorry and a bicycle, so 'than' needs the comparative: 'slower'.",
      'more slow':
        "'More' is for long adjectives, such as 'expensive'. 'Slow' has one syllable, so we add -er: 'slower'.",
      slow: "'Slow' is the plain adjective. After 'than' we need the comparative form: 'slower'.",
    },
    more: "Opposites follow the same rule: 'fast, faster, fastest' and 'slow, slower, slowest'.",
    tip: "Say the sentence aloud. A comparative often ends with the sound 'er', which you can hear.",
  },
  'This is the ___ lift in the building. (slow)': {
    why: "One lift is compared with all the lifts in the building, so we need the superlative. 'Slow' is a short adjective, so we add -est: 'slowest'.",
    not: {
      slower:
        "'Slower' is the comparative, for two things. This sentence compares one thing with all the other lifts in the building, so it needs the superlative: 'slowest'.",
      'most slow':
        "'Most' is for long adjectives, such as 'beautiful'. 'Slow' has one syllable, so we add -est: 'slowest'.",
      slow: "'Slow' is the plain adjective. This sentence compares one thing with all the other lifts in the building, so it needs the superlative: 'slowest'.",
    },
    more: "A superlative can come before the noun ('the slowest lift') or after 'is' ('This lift is the slowest').",
    tip: "The superlative needs 'the' before it: 'the slowest', 'the fastest', 'the newest'.",
  },
  'My bag is ___ than yours today. (light)': {
    why: "'Than' compares my bag and yours, so we need the comparative. 'Light' is a short adjective, so we add -er: 'lighter'.",
    not: {
      lightest:
        "'Lightest' is the superlative, for three or more things. This sentence compares my bag and yours, so 'than' needs the comparative: 'lighter'.",
      'more light':
        "'More' is for long adjectives, such as 'expensive'. 'Light' has one syllable, so we add -er: 'lighter'.",
      light:
        "'Light' is the plain adjective. After 'than' we need the comparative form: 'lighter'.",
    },
    more: "The opposite of 'light' is 'heavy'. It ends in -y, so it changes y to i: 'heavy, heavier, heaviest'.",
    tip: "After 'than' you can use a short word like 'yours' or 'mine' so that you do not repeat the noun.",
  },
  'A feather is the ___ thing in the bag. (light)': {
    why: "The feather is compared with everything else in the bag, so we need the superlative. 'Light' is a short adjective, so we add -est: 'lightest'.",
    not: {
      lighter:
        "'Lighter' is the comparative, for two things. This sentence compares one thing with everything else in the bag, so it needs the superlative: 'lightest'.",
      'most light':
        "'Most' is for long adjectives, such as 'beautiful'. 'Light' has one syllable, so we add -est: 'lightest'.",
      light:
        "'Light' is the plain adjective. This sentence compares one thing with everything else in the bag, so it needs the superlative: 'lightest'.",
    },
    more: "'Light' can also mean 'not dark', as in 'a light room'. The comparative and superlative are the same: 'lighter' and 'lightest'.",
    tip: "Think of 'the ... in the bag' as a signal. 'The' plus a group means a superlative.",
  },
  'Winter is ___ than summer here. (cold)': {
    why: "'Than' compares winter and summer, so we need the comparative. 'Cold' is a short adjective, so we add -er: 'colder'.",
    not: {
      coldest:
        "'Coldest' is the superlative, for three or more things. This sentence compares winter and summer, so 'than' needs the comparative: 'colder'.",
      'more cold':
        "'More' is for long adjectives, such as 'expensive'. 'Cold' has one syllable, so we add -er: 'colder'.",
      cold: "'Cold' is the plain adjective. After 'than' we need the comparative form: 'colder'.",
    },
    more: "Weather words often take -er: 'colder', 'hotter', 'wetter', 'sunnier'. Notice the spelling: 'hotter' and 'wetter' double the last letter, and 'sunnier' changes y to i.",
    tip: "Add a place word to say where your comparison is true: 'Winter is colder than summer here.'",
  },
  'January is the ___ month of the year. (cold)': {
    why: "January is compared with all the other months, so we need the superlative. 'Cold' is a short adjective, so we add -est: 'coldest'.",
    not: {
      colder:
        "'Colder' is the comparative, for two things. This sentence compares one thing with all the other months of the year, so it needs the superlative: 'coldest'.",
      'most cold':
        "'Most' is for long adjectives, such as 'beautiful'. 'Cold' has one syllable, so we add -est: 'coldest'.",
      cold: "'Cold' is the plain adjective. This sentence compares one thing with all the other months of the year, so it needs the superlative: 'coldest'.",
    },
    more: 'This sentence is true in the northern half of the world. In the south, July is usually the coldest month. The grammar is the same.',
    tip: "Use 'of the year' with months, days and seasons: 'the hottest day of the year'.",
  },
  'This road is ___ than that one. (long)': {
    why: "'Than' compares this road and that one, so we need the comparative. 'Long' is a short adjective, so we add -er: 'longer'.",
    not: {
      longest:
        "'Longest' is the superlative, for three or more things. This sentence compares this road and that one, so 'than' needs the comparative: 'longer'.",
      'more long':
        "'More' is for long adjectives, such as 'expensive'. 'Long' has one syllable, so we add -er: 'longer'.",
      long: "'Long' is the plain adjective. After 'than' we need the comparative form: 'longer'.",
    },
    more: "'That one' means 'that road'. We use 'one' so that we do not repeat the noun.",
    tip: "Learn the pairs 'long, longer, longest' and 'short, shorter, shortest' together.",
  },
  'The Nile is one of the ___ rivers on Earth. (long)': {
    why: "'One of the' and 'on Earth' show that the Nile is compared with all the rivers, so we need the superlative. 'Long' is a short adjective, so we add -est: 'longest'.",
    not: {
      longer:
        "'Longer' is the comparative, for two things. This sentence compares one thing with all the other rivers on Earth, so it needs the superlative: 'longest'.",
      'most long':
        "'Most' is for long adjectives, such as 'beautiful'. 'Long' has one syllable, so we add -est: 'longest'.",
      long: "'Long' is the plain adjective. This sentence compares one thing with all the other rivers on Earth, so it needs the superlative: 'longest'.",
    },
    more: "After 'one of the', a superlative is followed by a plural noun: 'one of the longest rivers', 'one of the best films'.",
    tip: "Use 'one of the' when more than one thing could be at the top. It is safer than 'the longest' when you are not sure.",
  },
  'A jumper is ___ than a T-shirt in winter. (warm)': {
    why: "'Than' compares a jumper and a T-shirt, so we need the comparative. 'Warm' is a short adjective, so we add -er: 'warmer'.",
    not: {
      warmest:
        "'Warmest' is the superlative, for three or more things. This sentence compares a jumper and a T-shirt, so 'than' needs the comparative: 'warmer'.",
      'more warm':
        "'More' is for long adjectives, such as 'expensive'. 'Warm' has one syllable, so we add -er: 'warmer'.",
      warm: "'Warm' is the plain adjective. After 'than' we need the comparative form: 'warmer'.",
    },
    more: "We often compare clothes, food and weather. Useful pairs: 'warm, warmer', 'cool, cooler' and 'cheap, cheaper'.",
    tip: "'In winter' tells us when the comparison is true. Put time words like this at the end of the sentence.",
  },
  'This is the ___ coat in the shop. (warm)': {
    why: "One coat is compared with all the coats in the shop, so we need the superlative. 'Warm' is a short adjective, so we add -est: 'warmest'.",
    not: {
      warmer:
        "'Warmer' is the comparative, for two things. This sentence compares one thing with all the other coats in the shop, so it needs the superlative: 'warmest'.",
      'most warm':
        "'Most' is for long adjectives, such as 'beautiful'. 'Warm' has one syllable, so we add -est: 'warmest'.",
      warm: "'Warm' is the plain adjective. This sentence compares one thing with all the other coats in the shop, so it needs the superlative: 'warmest'.",
    },
    more: "In shops you often see superlatives on signs: 'the cheapest', 'the newest', 'the best'.",
    tip: "Look for 'the' before the gap and a group after it, such as 'in the shop'. Together they signal a superlative.",
  },
  'Maths feels ___ than English to me. (hard)': {
    why: "'Than' compares maths and English, so we need the comparative. 'Hard' is a short adjective, so we add -er: 'harder'.",
    not: {
      hardest:
        "'Hardest' is the superlative, for three or more things. This sentence compares maths and English, so 'than' needs the comparative: 'harder'.",
      'more hard':
        "'More' is for long adjectives, such as 'expensive'. 'Hard' has one syllable, so we add -er: 'harder'.",
      hard: "'Hard' is the plain adjective. After 'than' we need the comparative form: 'harder'.",
    },
    more: "'To me' shows that this is your opinion. You can add it to any comparison: 'English is easier than maths to me.'",
    tip: "Use 'because' to explain your opinion: 'Maths feels harder than English because there are more rules.'",
  },
  'That was the ___ test of the term. (hard)': {
    why: "One test is compared with all the tests of the term, so we need the superlative. 'Hard' is a short adjective, so we add -est: 'hardest'.",
    not: {
      harder:
        "'Harder' is the comparative, for two things. This sentence compares one thing with all the other tests of the term, so it needs the superlative: 'hardest'.",
      'most hard':
        "'Most' is for long adjectives, such as 'beautiful'. 'Hard' has one syllable, so we add -est: 'hardest'.",
      hard: "'Hard' is the plain adjective. This sentence compares one thing with all the other tests of the term, so it needs the superlative: 'hardest'.",
    },
    more: "'Hard' is also an adverb ('He works hard'). Here it is an adjective that describes the noun 'test'.",
    tip: "Words like 'term', 'year' and 'week' often follow 'of the' with a superlative: 'the hardest test of the term'.",
  },
  'Trains are usually ___ than buses. (fast)': {
    why: "'Than' compares trains and buses, so we need the comparative. 'Fast' is a short adjective, so we add -er: 'faster'.",
    not: {
      fastest:
        "'Fastest' is the superlative, for three or more things. This sentence compares trains and buses, so 'than' needs the comparative: 'faster'.",
      'more fast':
        "'More' is for long adjectives, such as 'expensive'. 'Fast' has one syllable, so we add -er: 'faster'.",
      fast: "'Fast' is the plain adjective. After 'than' we need the comparative form: 'faster'.",
    },
    more: "'Usually' says that this is true most of the time. Words like 'usually' and 'often' go before the adjective: 'usually faster'.",
    tip: "'Fast' is both an adjective and an adverb, and both have the comparative 'faster': 'He runs faster than his brother.'",
  },
  'A cheetah is the ___ land animal. (fast)': {
    why: "The cheetah is compared with every other land animal, so we need the superlative. 'Fast' is a short adjective, so we add -est: 'fastest'.",
    not: {
      faster:
        "'Faster' is the comparative, for two things. This sentence compares one thing with all the other land animals, so it needs the superlative: 'fastest'.",
      'most fast':
        "'Most' is for long adjectives, such as 'beautiful'. 'Fast' has one syllable, so we add -est: 'fastest'.",
      fast: "'Fast' is the plain adjective. This sentence compares one thing with all the other land animals, so it needs the superlative: 'fastest'.",
    },
    more: "'Land animal' tells us the group. Without it, the claim would include birds, and some birds fly much faster than a cheetah runs.",
    tip: "Name the group clearly after a superlative: 'the fastest land animal', 'the tallest building in the city'.",
  },
  'Today is ___ than yesterday. (cool)': {
    why: "'Than' compares today and yesterday, so we need the comparative. 'Cool' is a short adjective, so we add -er: 'cooler'.",
    not: {
      coolest:
        "'Coolest' is the superlative, for three or more things. This sentence compares today and yesterday, so 'than' needs the comparative: 'cooler'.",
      'more cool':
        "'More' is for long adjectives, such as 'expensive'. 'Cool' has one syllable, so we add -er: 'cooler'.",
      cool: "'Cool' is the plain adjective. After 'than' we need the comparative form: 'cooler'.",
    },
    more: "'Cool' means a little cold. 'Today is cooler than yesterday' means that the temperature has gone down.",
    tip: "The same frame works with other adjectives: 'Today is warmer than yesterday.'",
  },
  'An elephant is ___ than a mouse. (big)': {
    why: "'Than' compares an elephant and a mouse, so we need the comparative. 'Big' ends in one vowel and one consonant, so we double the last letter and add -er: 'bigger'.",
    not: {
      biggest:
        "'Biggest' is the superlative, for three or more things. This sentence compares an elephant and a mouse, so 'than' needs the comparative: 'bigger'.",
      'more big':
        "'More' is for long adjectives, such as 'expensive'. 'Big' has one syllable and ends in one vowel and one consonant, so we double the last letter and add -er: 'bigger'.",
      big: "'Big' is the plain adjective. After 'than' we need the comparative form: 'bigger'.",
      bigest:
        "'Bigest' is not a word. We double the last letter of 'big' before the ending: the comparative is 'bigger'.",
    },
    more: "Short adjectives that end in one vowel and one consonant double the last letter: 'big, bigger', 'hot, hotter', 'sad, sadder'.",
    tip: "If you forget to double the g, you write 'biger', which looks like it has a long 'i'. The double g keeps the short sound.",
  },
  'A whale is the ___ animal in the ocean. (big)': {
    why: "The whale is compared with all the animals in the ocean, so we need the superlative. 'Big' ends in one vowel and one consonant, so we double the g and add -est: 'biggest'.",
    not: {
      bigger:
        "'Bigger' is the comparative, for two things. This sentence compares one thing with all the other animals in the ocean, so it needs the superlative: 'biggest'.",
      'most big':
        "'Most' is for long adjectives, such as 'beautiful'. 'Big' has one syllable and ends in one vowel and one consonant, so we double the last letter and add -est: 'biggest'.",
      big: "'Big' is the plain adjective. This sentence compares one thing with all the other animals in the ocean, so it needs the superlative: 'biggest'.",
      biger:
        "'Biger' is not a word. We double the last letter of 'big' before the ending: the superlative is 'biggest'.",
    },
    more: "'Big' and 'large' mean almost the same, and both have a superlative: 'biggest' and 'largest'. Only 'big' doubles its last letter.",
    tip: "Write the double g in both forms: 'bigger' and 'biggest'. You cannot hear it, so learn the spelling: big, bigger, biggest.",
  },
  'A summer day is ___ than a winter day. (hot)': {
    why: "'Than' compares a summer day and a winter day, so we need the comparative. 'Hot' ends in one vowel and one consonant, so we double the t and add -er: 'hotter'.",
    not: {
      hottest:
        "'Hottest' is the superlative, for three or more things. This sentence compares a summer day and a winter day, so 'than' needs the comparative: 'hotter'.",
      'more hot':
        "'More' is for long adjectives, such as 'expensive'. 'Hot' has one syllable and ends in one vowel and one consonant, so we double the last letter and add -er: 'hotter'.",
      hot: "'Hot' is the plain adjective. After 'than' we need the comparative form: 'hotter'.",
      hotest:
        "'Hotest' is not a word. We double the last letter of 'hot' before the ending: the comparative is 'hotter'.",
    },
    more: "The doubling rule does not apply when the word ends in -w, such as 'slow, slower'. It also does not apply to words that end in two consonants, such as 'warm, warmer'.",
    tip: 'Check the end of the word. One vowel and one consonant? Double the consonant before -er or -est.',
  },
  'July is the ___ month here. (hot)': {
    why: "July is compared with all the other months, so we need the superlative. 'Hot' ends in one vowel and one consonant, so we double the t and add -est: 'hottest'.",
    not: {
      hotter:
        "'Hotter' is the comparative, for two things. This sentence compares one thing with all the other months here, so it needs the superlative: 'hottest'.",
      'most hot':
        "'Most' is for long adjectives, such as 'beautiful'. 'Hot' has one syllable and ends in one vowel and one consonant, so we double the last letter and add -est: 'hottest'.",
      hot: "'Hot' is the plain adjective. This sentence compares one thing with all the other months here, so it needs the superlative: 'hottest'.",
      hoter:
        "'Hoter' is not a word. We double the last letter of 'hot' before the ending: the superlative is 'hottest'.",
    },
    more: "'Here' tells us that this is true for the place where the speaker lives. In another part of the world, a different month may be the hottest.",
    tip: 'Write the doubled letter every time: hot, hotter, hottest. Learn the three forms together.',
  },
  'This pillow is ___ than that one. (thin)': {
    why: "'Than' compares this pillow and that one, so we need the comparative. 'Thin' ends in one vowel and one consonant, so we double the n and add -er: 'thinner'.",
    not: {
      thinnest:
        "'Thinnest' is the superlative, for three or more things. This sentence compares this pillow and that one, so 'than' needs the comparative: 'thinner'.",
      'more thin':
        "'More' is for long adjectives, such as 'expensive'. 'Thin' has one syllable and ends in one vowel and one consonant, so we double the last letter and add -er: 'thinner'.",
      thin: "'Thin' is the plain adjective. After 'than' we need the comparative form: 'thinner'.",
      thinest:
        "'Thinest' is not a word. We double the last letter of 'thin' before the ending: the comparative is 'thinner'.",
    },
    more: "The opposite is 'thick': 'thick, thicker, thickest'. It ends in two consonants (ck), so nothing is doubled.",
    tip: 'Make a list of doubling words in your notebook: big, hot, wet, thin, sad, fit.',
  },
  'My grandfather is the ___ runner I know. (fit)': {
    why: "The grandfather is compared with all the runners the speaker knows, so we need the superlative. 'Fit' ends in one vowel and one consonant, so we double the t and add -est: 'fittest'.",
    not: {
      fitter:
        "'Fitter' is the comparative, for two things. This sentence compares one thing with all the other runners the speaker knows, so it needs the superlative: 'fittest'.",
      'most fit':
        "'Most' is for long adjectives, such as 'beautiful'. 'Fit' has one syllable and ends in one vowel and one consonant, so we double the last letter and add -est: 'fittest'.",
      fit: "'Fit' is the plain adjective. This sentence compares one thing with all the other runners the speaker knows, so it needs the superlative: 'fittest'.",
      fiter:
        "'Fiter' is not a word. We double the last letter of 'fit' before the ending: the superlative is 'fittest'.",
    },
    more: "'Fit' means healthy and strong. The words 'I know' also signal a superlative: 'the kindest person I know'.",
    tip: "The pattern 'the ... I know' is useful. Use it to describe people: 'the funniest person I know'.",
  },
  'My garden is ___ than the park. (wet)': {
    why: "'Than' compares my garden and the park, so we need the comparative. 'Wet' ends in one vowel and one consonant, so we double the t and add -er: 'wetter'.",
    not: {
      wettest:
        "'Wettest' is the superlative, for three or more things. This sentence compares my garden and the park, so 'than' needs the comparative: 'wetter'.",
      'more wet':
        "'More' is for long adjectives, such as 'expensive'. 'Wet' has one syllable and ends in one vowel and one consonant, so we double the last letter and add -er: 'wetter'.",
      wet: "'Wet' is the plain adjective. After 'than' we need the comparative form: 'wetter'.",
      wetest:
        "'Wetest' is not a word. We double the last letter of 'wet' before the ending: the comparative is 'wetter'.",
    },
    more: "Opposite pairs can follow different rules: 'wet, wetter' doubles the t, but 'dry, drier' changes y to i.",
    tip: "Do not write 'weter'. The double t keeps the short 'e' sound.",
  },
  'That was the ___ song of the night. (sad)': {
    why: "One song is compared with all the other songs of the night, so we need the superlative. 'Sad' ends in one vowel and one consonant, so we double the d and add -est: 'saddest'.",
    not: {
      sadder:
        "'Sadder' is the comparative, for two things. This sentence compares one thing with all the other songs of the night, so it needs the superlative: 'saddest'.",
      'most sad':
        "'Most' is for long adjectives, such as 'beautiful'. 'Sad' has one syllable and ends in one vowel and one consonant, so we double the last letter and add -est: 'saddest'.",
      sad: "'Sad' is the plain adjective. This sentence compares one thing with all the other songs of the night, so it needs the superlative: 'saddest'.",
      sader:
        "'Sader' is not a word. We double the last letter of 'sad' before the ending: the superlative is 'saddest'.",
    },
    more: "'Sad' and 'happy' are opposites, but they follow different rules: 'saddest' doubles the d, and 'happiest' changes y to i.",
    tip: "Double the last letter in 'sad' before -er and -est: sadder, saddest.",
  },
  'A lion is ___ than a kitten. (large)': {
    why: "'Than' compares a lion and a kitten, so we need the comparative. 'Large' already ends in -e, so we add only -r: 'larger'.",
    not: {
      largest:
        "'Largest' is the superlative, for three or more things. This sentence compares a lion and a kitten, so 'than' needs the comparative: 'larger'.",
      'more large':
        "'More' is for long adjectives, such as 'expensive'. 'Large' has one syllable and ends in -e, so we add only -r: 'larger'.",
      large: "'Large' is the plain adjective. After 'than' we need the comparative form: 'larger'.",
      largeest:
        "'Largeest' is not a word. 'Large' already ends in -e, so we add only -r: 'larger'.",
    },
    more: "Adjectives that end in -e add -r and -st: 'nice, nicer, nicest' and 'safe, safer, safest'. We do not write the letter e twice.",
    tip: 'Before you add -er, check the last letter. If it is e, add only -r.',
  },
  'This is the ___ room in the house. (large)': {
    why: "One room is compared with all the rooms in the house, so we need the superlative. 'Large' already ends in -e, so we add only -st: 'largest'.",
    not: {
      larger:
        "'Larger' is the comparative, for two things. This sentence compares one thing with all the other rooms in the house, so it needs the superlative: 'largest'.",
      'most large':
        "'Most' is for long adjectives, such as 'beautiful'. 'Large' has one syllable and ends in -e, so we add only -st: 'largest'.",
      large:
        "'Large' is the plain adjective. This sentence compares one thing with all the other rooms in the house, so it needs the superlative: 'largest'.",
      largeer:
        "'Largeer' is not a word. 'Large' already ends in -e, so we add only -st: 'largest'.",
    },
    more: "'Large' and 'big' mean almost the same. 'Large' follows the -e rule, while 'big' doubles its last letter.",
    tip: "Never write 'largeest'. One e is enough.",
  },
  'My route to school is ___ than yours. (safe)': {
    why: "'Than' compares my route and yours, so we need the comparative. 'Safe' already ends in -e, so we add only -r: 'safer'.",
    not: {
      safest:
        "'Safest' is the superlative, for three or more things. This sentence compares my route and yours, so 'than' needs the comparative: 'safer'.",
      'more safe':
        "'More' is for long adjectives, such as 'expensive'. 'Safe' has one syllable and ends in -e, so we add only -r: 'safer'.",
      safe: "'Safe' is the plain adjective. After 'than' we need the comparative form: 'safer'.",
      safeest: "'Safeest' is not a word. 'Safe' already ends in -e, so we add only -r: 'safer'.",
    },
    more: "The opposite is 'dangerous', which is a long adjective: 'more dangerous'. Short and long adjectives follow different rules.",
    tip: 'Learn the -e adjectives as a set: safe/safer, nice/nicer, wide/wider, large/larger.',
  },
  'This is the ___ seat on the bus. (safe)': {
    why: "One seat is compared with all the seats on the bus, so we need the superlative. 'Safe' already ends in -e, so we add only -st: 'safest'.",
    not: {
      safer:
        "'Safer' is the comparative, for two things. This sentence compares one thing with all the other seats on the bus, so it needs the superlative: 'safest'.",
      'most safe':
        "'Most' is for long adjectives, such as 'beautiful'. 'Safe' has one syllable and ends in -e, so we add only -st: 'safest'.",
      safe: "'Safe' is the plain adjective. This sentence compares one thing with all the other seats on the bus, so it needs the superlative: 'safest'.",
      safeer: "'Safeer' is not a word. 'Safe' already ends in -e, so we add only -st: 'safest'.",
    },
    more: "Adverts love superlatives: 'the safest car', 'the best price'. A superlative says that nothing else is better.",
    tip: 'Add only -st to an adjective that ends in -e: safe, safest.',
  },
  'Spring days are ___ than winter days. (nice)': {
    why: "'Than' compares spring days and winter days, so we need the comparative. 'Nice' already ends in -e, so we add only -r: 'nicer'.",
    not: {
      nicest:
        "'Nicest' is the superlative, for three or more things. This sentence compares spring days and winter days, so 'than' needs the comparative: 'nicer'.",
      'more nice':
        "'More' is for long adjectives, such as 'expensive'. 'Nice' has one syllable and ends in -e, so we add only -r: 'nicer'.",
      nice: "'Nice' is the plain adjective. After 'than' we need the comparative form: 'nicer'.",
      niceest: "'Niceest' is not a word. 'Nice' already ends in -e, so we add only -r: 'nicer'.",
    },
    more: "Seasons can be compared in the same way: 'Autumn is cooler than summer' and 'Summer is the hottest season'.",
    tip: "Remember the pair 'nice, nicer'. The e is not doubled.",
  },
  'That was the ___ meal of the holiday. (nice)': {
    why: "One meal is compared with all the other meals of the holiday, so we need the superlative. 'Nice' already ends in -e, so we add only -st: 'nicest'.",
    not: {
      nicer:
        "'Nicer' is the comparative, for two things. This sentence compares one thing with all the other meals of the holiday, so it needs the superlative: 'nicest'.",
      'most nice':
        "'Most' is for long adjectives, such as 'beautiful'. 'Nice' has one syllable and ends in -e, so we add only -st: 'nicest'.",
      nice: "'Nice' is the plain adjective. This sentence compares one thing with all the other meals of the holiday, so it needs the superlative: 'nicest'.",
      niceer: "'Niceer' is not a word. 'Nice' already ends in -e, so we add only -st: 'nicest'.",
    },
    more: "'Nicest' is fine in speaking and everyday writing. In a formal exam answer you might choose a stronger word, such as 'most enjoyable'.",
    tip: "Use 'of the holiday', 'of the week' or 'of the year' to show the group.",
  },
  'Her bedroom is ___ than mine. (wide)': {
    why: "'Than' compares her bedroom and mine, so we need the comparative. 'Wide' already ends in -e, so we add only -r: 'wider'.",
    not: {
      widest:
        "'Widest' is the superlative, for three or more things. This sentence compares her bedroom and mine, so 'than' needs the comparative: 'wider'.",
      'more wide':
        "'More' is for long adjectives, such as 'expensive'. 'Wide' has one syllable and ends in -e, so we add only -r: 'wider'.",
      wide: "'Wide' is the plain adjective. After 'than' we need the comparative form: 'wider'.",
      wideest: "'Wideest' is not a word. 'Wide' already ends in -e, so we add only -r: 'wider'.",
    },
    more: "'Wide' means big from side to side. 'Long' means big from end to end. 'Wide' follows the -e rule: wide, wider, widest.",
    tip: 'Check for a final -e. If you see one, do not add another.',
  },
  'I feel ___ today than yesterday. (happy)': {
    why: "'Than' compares how I feel today and how I felt yesterday, so we need the comparative. 'Happy' ends in -y, so we change y to i and add -er: 'happier'.",
    not: {
      happiest:
        "'Happiest' is the superlative, for three or more things. This sentence compares how I feel today and how I felt yesterday, so 'than' needs the comparative: 'happier'.",
      'more happy':
        "'More' is for long adjectives, such as 'expensive'. 'Happy' ends in -y, so we change y to i and add -er: 'happier'.",
      happy:
        "'Happy' is the plain adjective. After 'than' we need the comparative form: 'happier'.",
      happyest:
        "'Happyest' is not a word. 'Happy' ends in -y, so we change y to i before the ending: 'happier'.",
    },
    more: "Two-syllable adjectives that end in -y follow this rule: 'easy, easier', 'busy, busier', 'funny, funnier'. The spelling changes before the ending.",
    tip: "'Feel' is followed by an adjective, not an adverb: 'I feel happier', not 'I feel happily'.",
  },
  'This is the ___ day of my life. (happy)': {
    why: "One day is compared with all the days of my life, so we need the superlative. 'Happy' ends in -y, so we change y to i and add -est: 'happiest'.",
    not: {
      happier:
        "'Happier' is the comparative, for two things. This sentence compares one thing with all the other days of my life, so it needs the superlative: 'happiest'.",
      'most happy':
        "'Most' is for long adjectives, such as 'beautiful'. 'Happy' ends in -y, so we change y to i and add -est: 'happiest'.",
      happy:
        "'Happy' is the plain adjective. This sentence compares one thing with all the other days of my life, so it needs the superlative: 'happiest'.",
      happyer:
        "'Happyer' is not a word. 'Happy' ends in -y, so we change y to i before the ending: 'happiest'.",
    },
    more: "The group 'of my life' is very big. The phrase 'the ... day of my life' is a common way to show strong feeling.",
    tip: "Never write 'happyest'. The y changes to i before -est.",
  },
  'My bedroom is ___ than the kitchen. (tidy)': {
    why: "'Than' compares my bedroom and the kitchen, so we need the comparative. 'Tidy' ends in -y, so we change y to i and add -er: 'tidier'.",
    not: {
      tidiest:
        "'Tidiest' is the superlative, for three or more things. This sentence compares the bedroom and the kitchen, so 'than' needs the comparative: 'tidier'.",
      'more tidy':
        "'More' is for long adjectives, such as 'expensive'. 'Tidy' ends in -y, so we change y to i and add -er: 'tidier'.",
      tidy: "'Tidy' is the plain adjective. After 'than' we need the comparative form: 'tidier'.",
      tidyest:
        "'Tidyest' is not a word. 'Tidy' ends in -y, so we change y to i before the ending: 'tidier'.",
    },
    more: "'Tidy' means that everything is in its place. Its opposite, 'messy', also ends in -y: 'messy, messier, messiest'.",
    tip: "After a consonant plus y, change y to i. After a vowel plus y, as in 'grey', keep the y: 'greyer'.",
  },
  'She is the ___ student in our class. (busy)': {
    why: "One student is compared with all the students in our class, so we need the superlative. 'Busy' ends in -y, so we change y to i and add -est: 'busiest'.",
    not: {
      busier:
        "'Busier' is the comparative, for two things. This sentence compares one thing with all the other students in the class, so it needs the superlative: 'busiest'.",
      'most busy':
        "'Most' is for long adjectives, such as 'beautiful'. 'Busy' ends in -y, so we change y to i and add -est: 'busiest'.",
      busy: "'Busy' is the plain adjective. This sentence compares one thing with all the other students in the class, so it needs the superlative: 'busiest'.",
      busyer:
        "'Busyer' is not a word. 'Busy' ends in -y, so we change y to i before the ending: 'busiest'.",
    },
    more: "'Busy' sounds like 'BIZ-ee', and the spelling does not match the sound. Learn the forms 'busy, busier, busiest' together.",
    tip: "Notice the pattern 'the ... in our class'. It is a very common way to write a superlative.",
  },
  'This puzzle is ___ than the last one. (easy)': {
    why: "'Than' compares this puzzle and the last one, so we need the comparative. 'Easy' ends in -y, so we change y to i and add -er: 'easier'.",
    not: {
      easiest:
        "'Easiest' is the superlative, for three or more things. This sentence compares this puzzle and the last one, so 'than' needs the comparative: 'easier'.",
      'more easy':
        "'More' is for long adjectives, such as 'expensive'. 'Easy' ends in -y, so we change y to i and add -er: 'easier'.",
      easy: "'Easy' is the plain adjective. After 'than' we need the comparative form: 'easier'.",
      easyest:
        "'Easyest' is not a word. 'Easy' ends in -y, so we change y to i before the ending: 'easier'.",
    },
    more: "'Easy' and 'difficult' are opposites, but they follow different rules: 'easier' (short, ending in -y) and 'more difficult' (long).",
    tip: "Count the syllables. 'Easy' has two and ends in -y, so it takes -er. 'Difficult' has three, so it takes 'more'.",
  },
  'That is the ___ question on the paper. (easy)': {
    why: "One question is compared with all the questions on the paper, so we need the superlative. 'Easy' ends in -y, so we change y to i and add -est: 'easiest'.",
    not: {
      easier:
        "'Easier' is the comparative, for two things. This sentence compares one thing with all the other questions on the paper, so it needs the superlative: 'easiest'.",
      'most easy':
        "'Most' is for long adjectives, such as 'beautiful'. 'Easy' ends in -y, so we change y to i and add -est: 'easiest'.",
      easy: "'Easy' is the plain adjective. This sentence compares one thing with all the other questions on the paper, so it needs the superlative: 'easiest'.",
      easyer:
        "'Easyer' is not a word. 'Easy' ends in -y, so we change y to i before the ending: 'easiest'.",
    },
    more: "'Paper' here means the exam paper, the printed set of questions. It is a common meaning in school English.",
    tip: 'Learn the three forms together: easy, easier, easiest.',
  },
  'My dog is ___ than the cat. (noisy)': {
    why: "'Than' compares my dog and the cat, so we need the comparative. 'Noisy' ends in -y, so we change y to i and add -er: 'noisier'.",
    not: {
      noisiest:
        "'Noisiest' is the superlative, for three or more things. This sentence compares the dog and the cat, so 'than' needs the comparative: 'noisier'.",
      'more noisy':
        "'More' is for long adjectives, such as 'expensive'. 'Noisy' ends in -y, so we change y to i and add -er: 'noisier'.",
      noisy:
        "'Noisy' is the plain adjective. After 'than' we need the comparative form: 'noisier'.",
      noisyest:
        "'Noisyest' is not a word. 'Noisy' ends in -y, so we change y to i before the ending: 'noisier'.",
    },
    more: "Many adjectives that end in -y come from nouns: 'noise, noisy', 'sun, sunny', 'fun, funny'. They all follow the same rule.",
    tip: 'When you meet a new adjective that ends in -y, write its comparative and superlative in your notebook.',
  },
  'It was the ___ road in the whole town. (dirty)': {
    why: "One road is compared with all the roads in the whole town, so we need the superlative. 'Dirty' ends in -y, so we change y to i and add -est: 'dirtiest'.",
    not: {
      dirtier:
        "'Dirtier' is the comparative, for two things. This sentence compares one thing with all the other roads in the whole town, so it needs the superlative: 'dirtiest'.",
      'most dirty':
        "'Most' is for long adjectives, such as 'beautiful'. 'Dirty' ends in -y, so we change y to i and add -est: 'dirtiest'.",
      dirty:
        "'Dirty' is the plain adjective. This sentence compares one thing with all the other roads in the whole town, so it needs the superlative: 'dirtiest'.",
      dirtyer:
        "'Dirtyer' is not a word. 'Dirty' ends in -y, so we change y to i before the ending: 'dirtiest'.",
    },
    more: "'The whole town' makes the group clear. 'Whole' means all of it, so nothing is left out of the comparison.",
    tip: "Use 'was' when the comparison is about something in the past: 'It was the dirtiest road.'",
  },
  'The film was ___ than the book. (funny)': {
    why: "'Than' compares the film and the book, so we need the comparative. 'Funny' ends in -y, so we change y to i and add -er: 'funnier'.",
    not: {
      funniest:
        "'Funniest' is the superlative, for three or more things. This sentence compares the film and the book, so 'than' needs the comparative: 'funnier'.",
      'more funny':
        "'More' is for long adjectives, such as 'expensive'. 'Funny' ends in -y, so we change y to i and add -er: 'funnier'.",
      funny:
        "'Funny' is the plain adjective. After 'than' we need the comparative form: 'funnier'.",
      funnyest:
        "'Funnyest' is not a word. 'Funny' ends in -y, so we change y to i before the ending: 'funnier'.",
    },
    more: "The double n in 'funny' is part of the word and stays the same: 'funnier', 'funniest'.",
    tip: "Give your opinion with a comparison and a reason: 'The film was funnier than the book, but the book was longer.'",
  },
  'He told the ___ story at the party. (funny)': {
    why: "One story is compared with all the other stories at the party, so we need the superlative. 'Funny' ends in -y, so we change y to i and add -est: 'funniest'.",
    not: {
      funnier:
        "'Funnier' is the comparative, for two things. This sentence compares one thing with all the other stories at the party, so it needs the superlative: 'funniest'.",
      'most funny':
        "'Most' is for long adjectives, such as 'beautiful'. 'Funny' ends in -y, so we change y to i and add -est: 'funniest'.",
      funny:
        "'Funny' is the plain adjective. This sentence compares one thing with all the other stories at the party, so it needs the superlative: 'funniest'.",
      funnyer:
        "'Funnyer' is not a word. 'Funny' ends in -y, so we change y to i before the ending: 'funniest'.",
    },
    more: "We 'tell' a story, a joke or the truth. We do not 'say' a story.",
    tip: "The group comes at the end: 'at the party'. It shows where the comparison is made.",
  },
  'Today is ___ than yesterday. (sunny)': {
    why: "'Than' compares today and yesterday, so we need the comparative. 'Sunny' ends in -y, so we change y to i and add -er: 'sunnier'.",
    not: {
      sunniest:
        "'Sunniest' is the superlative, for three or more things. This sentence compares today and yesterday, so 'than' needs the comparative: 'sunnier'.",
      'more sunny':
        "'More' is for long adjectives, such as 'expensive'. 'Sunny' ends in -y, so we change y to i and add -er: 'sunnier'.",
      sunny:
        "'Sunny' is the plain adjective. After 'than' we need the comparative form: 'sunnier'.",
      sunnyest:
        "'Sunnyest' is not a word. 'Sunny' ends in -y, so we change y to i before the ending: 'sunnier'.",
    },
    more: "Weather adjectives often end in -y: 'sunny', 'rainy', 'windy', 'cloudy'. They follow the same rule: 'sunnier', 'rainier', 'windier', 'cloudier'.",
    tip: "The same sentence works with every weather adjective: 'Today is windier than yesterday.'",
  },
  'A diamond ring is ___ than a silver one. (expensive)': {
    why: "'Than' compares a diamond ring and a silver ring, so we need the comparative. 'Expensive' is a long adjective with three syllables, so we put 'more' before it: 'more expensive'.",
    not: {
      'most expensive':
        "'Most expensive' is the superlative, for three or more things. This sentence compares a diamond ring and a silver ring, so 'than' needs the comparative: 'more expensive'.",
      expensiveer:
        "'Expensiveer' is not a word. We do not add -er to a long adjective. We put 'more' before it: 'more expensive'.",
      'more expensiveer':
        "'More expensiveer' marks the comparative twice. A long adjective needs only 'more': 'more expensive'.",
    },
    more: "Adjectives with three or more syllables use 'more' and 'most': 'more beautiful', 'most dangerous'. We never write 'expensiver'.",
    tip: "Count the syllables: ex-pen-sive. Three syllables means 'more'.",
  },
  'This is the ___ phone in the shop. (expensive)': {
    why: "One phone is compared with all the phones in the shop, so we need the superlative. 'Expensive' is a long adjective with three syllables, so we put 'most' before it: 'most expensive'.",
    not: {
      'more expensive':
        "'More expensive' is the comparative, for two things. This sentence compares one thing with all the other phones in the shop, so it needs the superlative: 'most expensive'.",
      expensiveest:
        "'Expensiveest' is not a word. We do not add -est to a long adjective. We put 'most' before it: 'most expensive'.",
      'most expensiveest':
        "'Most expensiveest' marks the superlative twice. A long adjective needs only 'most': 'most expensive'.",
    },
    more: "The opposite word 'cheap' is short, so it takes -est: 'the cheapest phone'. Long and short adjectives follow different rules.",
    tip: "Use 'the most' before a long adjective: 'the most expensive', 'the most popular'.",
  },
  'A plane journey is ___ than a car journey. (comfortable)': {
    why: "'Than' compares a plane journey and a car journey, so we need the comparative. 'Comfortable' is a long adjective, so we put 'more' before it: 'more comfortable'.",
    not: {
      'most comfortable':
        "'Most comfortable' is the superlative, for three or more things. This sentence compares a plane journey and a car journey, so 'than' needs the comparative: 'more comfortable'.",
      comfortableer:
        "'Comfortableer' is not a word. We do not add -er to a long adjective. We put 'more' before it: 'more comfortable'.",
      'more comfortableer':
        "'More comfortableer' marks the comparative twice. A long adjective needs only 'more': 'more comfortable'.",
    },
    more: "'Comfortable' has no short comparative form. Never write 'comfortabler'. Other long adjectives: 'more useful', 'more careful', 'more modern'.",
    tip: "Practise the phrase 'more comfortable than' in sentences about travel, chairs and beds.",
  },
  'This is the ___ chair in the room. (comfortable)': {
    why: "One chair is compared with all the chairs in the room, so we need the superlative. 'Comfortable' is a long adjective, so we put 'most' before it: 'most comfortable'.",
    not: {
      'more comfortable':
        "'More comfortable' is the comparative, for two things. This sentence compares one thing with all the other chairs in the room, so it needs the superlative: 'most comfortable'.",
      comfortableest:
        "'Comfortableest' is not a word. We do not add -est to a long adjective. We put 'most' before it: 'most comfortable'.",
      'most comfortableest':
        "'Most comfortableest' marks the superlative twice. A long adjective needs only 'most': 'most comfortable'.",
    },
    more: "'Most' can mean 'almost all' in other sentences ('most people'). With an adjective it makes the superlative: 'the most comfortable chair'.",
    tip: "Never use 'most' and -est together. Write 'most comfortable', not 'most comfortablest'.",
  },
  'Science is ___ than history for me. (interesting)': {
    why: "'Than' compares science and history, so we need the comparative. 'Interesting' is a long adjective, so we put 'more' before it: 'more interesting'.",
    not: {
      'most interesting':
        "'Most interesting' is the superlative, for three or more things. This sentence compares science and history, so 'than' needs the comparative: 'more interesting'.",
      interestinger:
        "'Interestinger' is not a word. We do not add -er to a long adjective. We put 'more' before it: 'more interesting'.",
      'more interestinger':
        "'More interestinger' marks the comparative twice. A long adjective needs only 'more': 'more interesting'.",
    },
    more: "Adjectives that end in -ing or -ed, such as 'interesting', 'boring', 'tired' and 'surprised', use 'more' and 'most'.",
    tip: "'For me' shows your opinion. Add a reason: 'Science is more interesting than history for me because I like experiments.'",
  },
  'That was the ___ lesson all week. (interesting)': {
    why: "One lesson is compared with all the other lessons this week, so we need the superlative. 'Interesting' is a long adjective, so we put 'most' before it: 'most interesting'.",
    not: {
      'more interesting':
        "'More interesting' is the comparative, for two things. This sentence compares one thing with all the other lessons this week, so it needs the superlative: 'most interesting'.",
      interestingest:
        "'Interestingest' is not a word. We do not add -est to a long adjective. We put 'most' before it: 'most interesting'.",
      'most interestingest':
        "'Most interestingest' marks the superlative twice. A long adjective needs only 'most': 'most interesting'.",
    },
    more: "'All week' means during the whole week. It gives the group: every lesson in the week.",
    tip: "Do not forget 'the'. A superlative nearly always has 'the' before it.",
  },
  'Walking at night is ___ than in the day. (dangerous)': {
    why: "'Than' compares walking at night and walking in the day, so we need the comparative. 'Dangerous' is a long adjective, so we put 'more' before it: 'more dangerous'.",
    not: {
      'most dangerous':
        "'Most dangerous' is the superlative, for three or more things. This sentence compares walking at night and walking in the day, so 'than' needs the comparative: 'more dangerous'.",
      dangerouser:
        "'Dangerouser' is not a word. We do not add -er to a long adjective. We put 'more' before it: 'more dangerous'.",
      'more dangerouser':
        "'More dangerouser' marks the comparative twice. A long adjective needs only 'more': 'more dangerous'.",
    },
    more: "The opposite is 'safe', a short adjective: 'safer'. Long adjectives and short adjectives follow different rules, even when their meanings are opposite.",
    tip: "You can make a comparison stronger with 'much': 'much more dangerous'.",
  },
  'That is the ___ road in the city. (dangerous)': {
    why: "One road is compared with all the roads in the city, so we need the superlative. 'Dangerous' is a long adjective, so we put 'most' before it: 'most dangerous'.",
    not: {
      'more dangerous':
        "'More dangerous' is the comparative, for two things. This sentence compares one thing with all the other roads in the city, so it needs the superlative: 'most dangerous'.",
      dangerousest:
        "'Dangerousest' is not a word. We do not add -est to a long adjective. We put 'most' before it: 'most dangerous'.",
      'most dangerousest':
        "'Most dangerousest' marks the superlative twice. A long adjective needs only 'most': 'most dangerous'.",
    },
    more: "We often use superlatives in warnings and safety texts: 'the most dangerous road', 'the most important rule'.",
    tip: "Write 'the most dangerous', never 'the dangerousest'.",
  },
  'This task is ___ than the first one. (difficult)': {
    why: "'Than' compares this task and the first one, so we need the comparative. 'Difficult' is a long adjective, so we put 'more' before it: 'more difficult'.",
    not: {
      'most difficult':
        "'Most difficult' is the superlative, for three or more things. This sentence compares this task and the first one, so 'than' needs the comparative: 'more difficult'.",
      difficulter:
        "'Difficulter' is not a word. We do not add -er to a long adjective. We put 'more' before it: 'more difficult'.",
      'more difficulter':
        "'More difficulter' marks the comparative twice. A long adjective needs only 'more': 'more difficult'.",
    },
    more: "'Difficult' has three syllables, so it takes 'more'. Its near opposite 'easy' ends in -y, so it takes -er: 'easier'.",
    tip: "To say that something is less hard, use 'less difficult': 'The second task is less difficult.'",
  },
  'It was the ___ exam of the year. (difficult)': {
    why: "One exam is compared with all the exams of the year, so we need the superlative. 'Difficult' is a long adjective, so we put 'most' before it: 'most difficult'.",
    not: {
      'more difficult':
        "'More difficult' is the comparative, for two things. This sentence compares one thing with all the other exams of the year, so it needs the superlative: 'most difficult'.",
      difficultest:
        "'Difficultest' is not a word. We do not add -est to a long adjective. We put 'most' before it: 'most difficult'.",
      'most difficultest':
        "'Most difficultest' marks the superlative twice. A long adjective needs only 'most': 'most difficult'.",
    },
    more: "'Of the year' names the group: all the exams in the year. Write 'the most difficult exam of the year', with 'the' first.",
    tip: "In an essay, write 'the most difficult part' to explain a challenge. Add a reason with 'because'.",
  },
  'Her new car is ___ than her old one. (beautiful)': {
    why: "'Than' compares her new car and her old one, so we need the comparative. 'Beautiful' is a long adjective, so we put 'more' before it: 'more beautiful'.",
    not: {
      'most beautiful':
        "'Most beautiful' is the superlative, for three or more things. This sentence compares her new car and her old car, so 'than' needs the comparative: 'more beautiful'.",
      beautifuler:
        "'Beautifuler' is not a word. We do not add -er to a long adjective. We put 'more' before it: 'more beautiful'.",
      'more beautifuler':
        "'More beautifuler' marks the comparative twice. A long adjective needs only 'more': 'more beautiful'.",
    },
    more: "Adjectives that end in -ful usually take 'more' and 'most': 'more careful', 'more useful', 'more powerful'.",
    tip: "'Her old one' means 'her old car'. Use 'one' to avoid repeating a noun.",
  },
  'It was the ___ sunset I had ever seen. (beautiful)': {
    why: "One sunset is compared with every sunset the speaker has seen, so we need the superlative. 'Beautiful' is a long adjective, so we put 'most' before it: 'most beautiful'.",
    not: {
      'more beautiful':
        "'More beautiful' is the comparative, for two things. This sentence compares one thing with all the other sunsets the speaker has seen, so it needs the superlative: 'most beautiful'.",
      beautifulest:
        "'Beautifulest' is not a word. We do not add -est to a long adjective. We put 'most' before it: 'most beautiful'.",
      'most beautifulest':
        "'Most beautifulest' marks the superlative twice. A long adjective needs only 'most': 'most beautiful'.",
    },
    more: "After a superlative we often use 'ever' with a perfect tense: 'the best film I have ever seen'.",
    tip: "'The most beautiful ... I have ever seen' is a useful phrase for describing places in a speaking test or a piece of writing.",
  },
  'A library is ___ than a playground. (peaceful)': {
    why: "'Than' compares a library and a playground, so we need the comparative. 'Peaceful' has two syllables but ends in -ful, so we put 'more' before it: 'more peaceful'.",
    not: {
      'most peaceful':
        "'Most peaceful' is the superlative, for three or more things. This sentence compares a library and a playground, so 'than' needs the comparative: 'more peaceful'.",
      peacefuler:
        "'Peacefuler' is not a word. We do not add -er to a long adjective. We put 'more' before it: 'more peaceful'.",
      'more peacefuler':
        "'More peacefuler' marks the comparative twice. A long adjective needs only 'more': 'more peaceful'.",
    },
    more: "Two-syllable adjectives that end in -ful or -less use 'more' and 'most': 'more helpful', 'more useless'. Those that end in -y use -er instead: 'happier'.",
    tip: "For a two-syllable adjective, check the ending. -y takes -er; -ful and -less take 'more'. A dictionary also shows the comparative.",
  },
  'This restaurant is ___ than that one. (good)': {
    why: "'Than' compares this restaurant and that one, so we need the comparative. 'Good' is an irregular adjective. Its forms must be learnt: good, better, best.",
    not: {
      best: "'Best' is the superlative, for three or more things. This sentence compares this restaurant and that one, so 'than' needs the comparative: 'better'.",
      gooder:
        "'Gooder' is not correct English. 'Good' is irregular: good, better, best. Here we need 'better'.",
      goodest:
        "'Goodest' is not correct English. 'Good' is irregular: good, better, best. Here we need 'better'.",
      'more good':
        "We do not say 'more good'. 'Good' is irregular and has its own forms: good, better, best.",
    },
    more: "Irregular adjectives do not follow the -er and -est rule. Another pair is 'bad, worse, worst'. We never write 'gooder'.",
    tip: "Learn 'good, better, best' and 'bad, worse, worst' as two lists. They are very common in exams.",
  },
  'She is the ___ singer in the school. (good)': {
    why: "One singer is compared with all the singers in the school, so we need the superlative. 'Good' is irregular: good, better, best. So we say 'the best singer'.",
    not: {
      better:
        "'Better' is the comparative, for two things. This sentence compares one thing with all the other singers in the school, so it needs the superlative: 'best'.",
      gooder:
        "'Gooder' is not correct English. 'Good' is irregular: good, better, best. Here we need 'best'.",
      goodest:
        "'Goodest' is not correct English. 'Good' is irregular: good, better, best. Here we need 'best'.",
      'more good':
        "We do not say 'more good'. 'Good' is irregular and has its own forms: good, better, best.",
    },
    more: "'Best' also works as an adverb: 'She sings best of all.' The adverb 'well' has the same forms: well, better, best.",
    tip: "Do not write 'the most good' or 'the goodest'. Use 'the best'.",
  },
  'My result was ___ than I expected. (bad)': {
    why: "'Than' compares my result with what I expected, so we need the comparative. 'Bad' is irregular: bad, worse, worst. So we say 'worse'.",
    not: {
      worst:
        "'Worst' is the superlative, for three or more things. This sentence compares my result and what I expected, so 'than' needs the comparative: 'worse'.",
      badder:
        "'Badder' is not correct English. 'Bad' is irregular: bad, worse, worst. Here we need 'worse'.",
      baddest:
        "'Baddest' is not correct English. 'Bad' is irregular: bad, worse, worst. Here we need 'worse'.",
      'more bad':
        "We do not say 'more bad'. 'Bad' is irregular and has its own forms: bad, worse, worst.",
    },
    more: "'Worse' can follow 'get' or 'become' to show a change: 'The weather got worse.'",
    tip: "Do not mix up 'worse' (comparative) and 'worst' (superlative). 'Worse than' compares two things.",
  },
  'That was the ___ film of the year. (bad)': {
    why: "One film is compared with all the films of the year, so we need the superlative. 'Bad' is irregular: bad, worse, worst. So we say 'the worst film'.",
    not: {
      worse:
        "'Worse' is the comparative, for two things. This sentence compares one thing with all the other films of the year, so it needs the superlative: 'worst'.",
      badder:
        "'Badder' is not correct English. 'Bad' is irregular: bad, worse, worst. Here we need 'worst'.",
      baddest:
        "'Baddest' is not correct English. 'Bad' is irregular: bad, worse, worst. Here we need 'worst'.",
      'more bad':
        "We do not say 'more bad'. 'Bad' is irregular and has its own forms: bad, worse, worst.",
    },
    more: "Only the last letter differs: 'worse' compares two things, and 'worst' compares many. Compare 'good, better, best' and 'bad, worse, worst'.",
    tip: 'Spell it carefully: w-o-r-s-t. The superlative has no e.',
  },
  'My new school is ___ from home than my old one. (far)': {
    why: "'Than' compares the new school and the old one, so we need the comparative. 'Far' is irregular: far, further, furthest. So we say 'further'.",
    not: {
      furthest:
        "'Furthest' is the superlative, for three or more things. This sentence compares the new school and the old school, so 'than' needs the comparative: 'further'.",
      farer:
        "'Farer' is not correct English. 'Far' is irregular: far, further, furthest. Here we need 'further'.",
      farest:
        "'Farest' is not correct English. 'Far' is irregular: far, further, furthest. Here we need 'further'.",
      'more far':
        "We do not say 'more far'. 'Far' is irregular and has its own forms: far, further, furthest.",
    },
    more: "You may also see 'farther' and 'farthest' for distance. 'Further' is also used to mean 'more', as in 'further information'.",
    tip: "Do not write 'farer'. After 'far', use 'further' or 'farther'.",
  },
  'That shop is the ___ one from here. (far)': {
    why: "One shop is compared with all the other shops, counted from here, so we need the superlative. 'Far' is irregular: far, further, furthest. So we say 'the furthest one'.",
    not: {
      further:
        "'Further' is the comparative, for two things. This sentence compares one thing with all the other shops, counted from here, so it needs the superlative: 'furthest'.",
      farer:
        "'Farer' is not correct English. 'Far' is irregular: far, further, furthest. Here we need 'furthest'.",
      farest:
        "'Farest' is not correct English. 'Far' is irregular: far, further, furthest. Here we need 'furthest'.",
      'more far':
        "We do not say 'more far'. 'Far' is irregular and has its own forms: far, further, furthest.",
    },
    more: "'From here' tells us where the distance starts. 'The furthest one' means the shop that is the longest distance away.",
    tip: "Use 'furthest' or 'farthest' for distance. Do not write 'farest'.",
  },
}
