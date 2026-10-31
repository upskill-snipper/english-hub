import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Plural Builder: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/plural-builder.ts). Written with AI on 16 October
 * 2026 and checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: explanations for the bank's 240
 * questions (59 before), every old one rewritten so that none names another
 * question's answer unless the two share a rule family or a noun; the new
 * sentence questions are explained from the clue in the sentence that decides
 * the form (a number, "these", "each", "one of", "some", a plural verb), and
 * the thirteen real lines from what is happening in the book or play. Written
 * with AI and checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 31 October 2026, against every question. One
 * explanation is new, for the question that replaced "accommodation" (the
 * bank's docblock says why). Twelve said something untrue, and now say it
 * right: that every word ending in -man changes to -men (three times, while
 * human, German and Roman, all in this bank, add -s); that "princesses" has
 * four s letters (it has three); that "watch" and "match" rhyme (their
 * vowels differ); and seven rules stated with "always" or "never" that have
 * exceptions: double f (staff, staves), -ey (money, monies), -x (ox, oxen;
 * three times), -lf (gulf, gulfs), and "two waters", which is said in any
 * café.
 */
export const EXPLANATIONS: GameExplanations = {
  book: {
    why: 'Most nouns make the plural by adding -s: one book, two books. Nothing else in the word changes.',
    more: "After a number above one, use the plural; after 'a', 'an' or 'one', use the singular: a book, one book, three books.",
    tip: 'Check your writing for numbers. A number above one needs a plural noun.',
  },
  car: {
    why: "'Car' ends in -r, so it just adds -s: one car, two cars.",
    more: "The -s ending has two sounds: 's' after sounds like k, p and t, and 'z' after most others, as here. You always write the same letter.",
    tip: 'Learn the main rule first: add -s. Then learn the exceptions as you meet them.',
  },
  dog: {
    why: "'Dog' ends in -g, so it just adds -s: one dog, two dogs.",
    more: 'Most animal words are regular, like this one: one frog, two frogs. A few are not, and you learn those one by one.',
    tip: 'When you write about pets, count them with the plural: I have two dogs.',
  },
  table: {
    why: "'Table' ends in a silent -e, so it just adds -s: tables. We do not take the e away, and we do not add another e.",
    more: 'Words that end in a silent -e only need -s: one stone, two stones; one kite, two kites.',
    tip: "Do not write 'tablees' or 'tabls'. Keep the e and add -s.",
  },
  apple: {
    why: "'Apple' ends in a silent -e, so it just adds -s: apples.",
    more: "In the plural, 'an' disappears: an apple, but three apples. 'An' goes only with one thing.",
    tip: 'Shopping lists are usually plural: apples, lemons, onions.',
  },
  window: {
    why: "'Window' ends in -w, so it just adds -s: windows.",
    more: 'Words that end in -ow are regular: one pillow, two pillows; one elbow, two elbows.',
    tip: "Keep the w before the s: windows, never 'windoes'.",
  },
  phone: {
    why: "'Phone' ends in a silent -e, so it just adds -s: phones.",
    more: 'Words that end in -one follow the same simple rule: one stone, two stones; one bone, two bones.',
    tip: "Say it aloud. If you hear only a simple 's' or 'z' sound at the end, you only need -s.",
  },
  chair: {
    why: "'Chair' ends in -r, so it just adds -s: chairs.",
    more: 'Many words for the things in a house are regular: one bed, two beds; one desk, two desks.',
    tip: 'Put the s at the very end of the word: c-h-a-i-r-s.',
  },
  bus: {
    why: "'Bus' ends in -s. With only another s, nobody could hear the plural, so we add -es: buses, said 'bus-iz'.",
    more: "Words ending in -s, -ss, -x, -z, -ch and -sh add -es. The e adds a sound, 'iz', so the plural can be heard.",
    tip: "Count the syllables: 'bus' has one, and its plural has two. The extra 'iz' tells you to write -es.",
  },
  box: {
    why: "'Box' ends in -x, so we add -es: boxes, said 'box-iz'.",
    more: 'The letter x already ends in a hiss, so the plural needs an extra vowel to be said. Other -x words do the same: one tax, two taxes.',
    tip: "Do not write 'boxs'. After x, add -es.",
  },
  watch: {
    why: "'Watch' ends in -ch, so we add -es: watches, said 'watch-iz'.",
    more: "'Watch' is also a verb, and the verb takes the same ending: 'She watches the match.'",
    tip: "Most words ending in -ch add -es. Say the plural and listen for the extra 'iz'.",
  },
  dish: {
    why: "'Dish' ends in -sh, so we add -es: dishes, said 'dish-iz'.",
    more: 'After sh the plural needs an extra syllable, so we write -es: one crash, two crashes.',
    tip: "'Doing the dishes' means washing up after a meal.",
  },
  glass: {
    why: "'Glass' ends in -ss, so we add -es: glasses, said 'glass-iz'.",
    more: "'Glasses' also means the glasses you wear to see. That meaning is always plural: a pair of glasses.",
    tip: "For drinking, count them: two glasses. For your eyes, say 'a pair of glasses' or 'my glasses'.",
  },
  brush: {
    why: "'Brush' ends in -sh, so we add -es: brushes, said 'brush-iz'.",
    more: 'Words ending in -sh always add -es: one crash, two crashes; one rash, two rashes.',
    tip: "Do not write 'brushs'. After sh, add -es.",
  },
  fox: {
    why: "'Fox' ends in -x, so we add -es: foxes.",
    more: "'Foxs' would sound just like 'fox', so the -es adds the 'iz' that tells a listener there is more than one.",
    tip: "Say the plural aloud. If you hear 'iz' at the end, write -es.",
  },
  beach: {
    why: "'Beach' ends in -ch, so we add -es: beaches, said 'beech-iz'.",
    more: "A holiday brochure might promise 'golden beaches'. The plural is common in writing about places.",
    tip: "Do not mix up 'beach' and 'beech', a kind of tree. They sound the same but are spelt differently.",
  },
  class: {
    why: "'Class' ends in -ss, so we add -es: classes.",
    more: 'Words ending in -ss always take -es: one boss, two bosses; one cross, two crosses.',
    tip: "Never put an apostrophe in a plural: classes, not class's. An apostrophe shows that something belongs to someone.",
  },
  baby: {
    why: "'Baby' ends in a consonant (b) and -y. We change the y to i and add -es: babies.",
    more: "Look at the letter before the y. A consonant means the y changes to ies; a vowel (a, e, i, o, u) means you just add s, as in 'tray, trays'.",
    tip: "Check the letter before the y every time. 'Babys' is always wrong.",
  },
  city: {
    why: "'City' ends in a consonant (t) and -y, so the y changes to i and we add -es: cities.",
    more: "Many place words follow this rule. In the plural, the ending is said 'eez': 'sit-eez'.",
    tip: "'Citys' is always wrong. A consonant before the y means -ies.",
  },
  story: {
    why: "'Story' ends in a consonant (r) and -y, so the y changes to i and we add -es: stories.",
    more: 'Verbs follow the same rule: he studies, she tries, it carries. The y changes to i before -es.',
    tip: "In British English, 'storey', with an e, means a floor of a building, and its plural is 'storeys'.",
  },
  party: {
    why: "'Party' ends in a consonant (t) and -y, so the y changes to i and we add -es: parties.",
    more: 'A quick test: is the letter before the y a consonant? Then drop the y and write ies: pony, ponies; fairy, fairies.',
    tip: "'Partys' is a common mistake. Consonant plus y becomes ies.",
  },
  family: {
    why: "'Family' ends in a consonant (l) and -y, so the y changes to i and we add -es: families.",
    more: "Do not mix up a plural and an owner. 'A family's car' (with an apostrophe) belongs to one family; 'families' means more than one.",
    tip: "Write 'two families', never 'two family's'.",
  },
  boy: {
    why: "'Boy' has a vowel (o) before the y, so we just add -s: boys. The y stays.",
    more: 'Only a consonant before the y changes it to ies. With a vowel before it, the y stays: tray, trays.',
    tip: 'Test every word ending in y: look at the letter before it. A vowel? Just add s.',
  },
  key: {
    why: "'Key' has a vowel (e) before the y, so we just add -s: keys.",
    more: "Do not write 'keies' or 'keyes'. With a vowel before the y, nothing changes but the added s.",
    tip: "'Where are my keys?' is a question everyone asks. Remember its spelling: k-e-y-s.",
  },
  day: {
    why: "'Day' has a vowel (a) before the y, so we just add -s: days.",
    more: "The names of the week add -s too, for something that happens every week: 'I swim on Mondays.'",
    tip: "Use a plural name for a habit: 'We have English on Wednesdays.'",
  },
  toy: {
    why: "'Toy' has a vowel (o) before the y, so we just add -s: toys.",
    more: "Words ending in -oy all keep the y: one cowboy, two cowboys. The verb 'enjoy' does too: she enjoys.",
    tip: "Do not write 'toies'. A vowel before the y means just add s.",
  },
  tomato: {
    why: "'Tomato' is one of the -o words that add -es: tomatoes.",
    more: "Only a short list of common -o words take -es, such as 'hero' and 'echo'. Most just add s.",
    tip: "Learn 'tomato' and 'potato' together: both end in -oes in the plural.",
  },
  potato: {
    why: "'Potato' is one of the -o words that add -es: potatoes.",
    more: "Two everyday -oes words are worth learning as a pair: tomato and potato. A menu might offer 'roast potatoes'.",
    tip: "Never write 'potatos'. The e is needed.",
  },
  child: {
    why: "'Child' has an old plural: children. We do not just add -s. We add -ren, and the vowel sound changes: 'chyld' becomes 'chil-dren'.",
    more: "'Children' already means more than one, so never add another s. To show owning, add an apostrophe and s: the children's coats.",
    tip: "Write 'two children', never 'two childs' or 'childrens'.",
  },
  foot: {
    why: "'Foot' changes its vowels instead of adding -s: oo becomes ee. The plural is feet.",
    more: 'This is a very old way of making plurals, from Old English. Tooth and goose change in the same way.',
    tip: "Feet are also a measure of height: 'He is six feet tall.'",
  },
  mouse: {
    why: "'Mouse' changes inside the word: the plural is mice, which rhymes with 'nice'.",
    more: "'Mouse' and 'house' look alike, but their plurals are different. Learn each one on its own.",
    tip: "For the animal, write 'mice', never 'mouses'. For computer mice, 'mice' is usual too.",
  },
  person: {
    why: "'Person' has a different word for the plural: people. We do not add -s.",
    more: "'People' takes a plural verb: 'The people are friendly.' The word 'persons' is used only in formal and legal writing.",
    tip: "Write 'three people', not 'three persons', in everyday writing.",
  },
  tooth: {
    why: "'Tooth' changes its vowels instead of adding -s: oo becomes ee. The plural is teeth.",
    more: 'Foot and goose change in the same old way: oo becomes ee.',
    tip: 'Dentists say the same thing to everyone: brush your teeth twice a day.',
  },
  man: {
    why: "'Man' changes its vowel instead of adding -s: a becomes e. The plural is men.",
    more: "Words made with the word 'man' change in the same way: one milkman, two milkmen.",
    tip: "Say 'man' and its plural aloud: the vowel sound changes, and so does the spelling.",
  },
  woman: {
    why: "'Woman' changes a vowel in its last part: a becomes e. The plural is women.",
    more: "The spelling and the sound do not match: the plural is said 'WIM-in'.",
    tip: 'Write the plural with an e near the end: w-o-m-e-n.',
  },
  sheep: {
    why: "'Sheep' has the same form for one and for many: one sheep, two sheep. We do not add -s.",
    more: "The verb or a number shows how many: 'The sheep is in the field' (one), 'The sheep are in the field' (more).",
    tip: "Do not write 'sheeps'. A farmer with a hundred has a hundred sheep.",
  },
  fish: {
    why: "'Fish' usually has the same form for one and for many: one fish, two fish.",
    more: "'Fishes' is used only for different kinds of fish, mostly in science writing. In everyday English, say 'fish'.",
    tip: "Say 'I caught three fish', not 'three fishes'.",
  },
  knife: {
    why: "'Knife' ends in -fe. We change the fe to ves: knives. The f sound becomes a v sound.",
    more: "The k at the start is silent in both forms: 'nife', 'nives'. The word 'life' changes in the same way.",
    tip: 'At the table we use knives and forks.',
  },
  wife: {
    why: "'Wife' ends in -fe. We change the fe to ves: wives.",
    more: 'Most family words just add -s: one husband, two husbands; one daughter, two daughters.',
    tip: "Do not write 'wifes'. One wife, two wives.",
  },
  leaf: {
    why: "'Leaf' ends in -f. We change the f to v and add -es: leaves. The sound changes too: 'leef' becomes 'leevz'.",
    more: 'Not every -f word changes. Some just add -s, so learn the changing ones as a list: leaf, loaf, wolf, half, shelf, thief.',
    tip: 'In autumn, the leaves turn red and gold.',
  },
  pen: {
    why: "'Pen' ends in -n, so it just adds -s: pens.",
    more: 'A pencil case might hold pens, pencils and rulers. All three are regular.',
    tip: 'One pen, two pens: the s goes on the end, and nothing else changes.',
  },
  egg: {
    why: "'Egg' ends in -g, so it just adds -s: eggs.",
    more: 'They are often sold in sixes or dozens. A dozen is twelve.',
    tip: "Use 'an' with one egg, but no 'an' in a list: 'I need eggs, flour and sugar.'",
  },
  cup: {
    why: "'Cup' ends in -p, so it just adds -s: cups. Here the s is said 's'.",
    more: "After sounds like p, t and k, the plural -s is said 's'; after most other sounds it is said 'z'.",
    tip: "In Britain, 'a cup of tea' is one of the most common phrases there is.",
  },
  bird: {
    why: "'Bird' ends in -d, so it just adds -s: birds.",
    more: 'Most bird names are regular too: one robin, two robins; one owl, two owls.',
    tip: 'Check that every plural noun in your writing has its s.',
  },
  orange: {
    why: "'Orange' ends in a silent -e, so it just adds -s: oranges. The plural has an extra syllable, 'or-inj-iz'.",
    more: "When a word already ends in -ge or -ce, only -s is needed, even though you hear 'iz': page, pages; face, faces.",
    tip: "Do not write 'orangees'. The e is already there.",
  },
  nose: {
    why: "'Nose' ends in a silent -e, so it just adds -s: noses.",
    more: "Words ending in -se need only -s, even though the plural has an extra 'iz' sound: rose, roses.",
    tip: "Listen: the plural has two syllables, 'no-ziz', but you only write -s.",
  },
  horse: {
    why: "'Horse' ends in a silent -e, so it just adds -s: horses.",
    more: 'A young horse is a foal, and a small kind of horse is a pony.',
    tip: 'One horse, two horses: keep the e and add s.',
  },
  dress: {
    why: "'Dress' ends in -ss, so we add -es: dresses.",
    more: 'Clothes words ending in -ss or -sh follow the -es rule. Others just add s: one coat, two coats.',
    tip: "Say it aloud: 'dress-iz'. The extra syllable tells you to write -es.",
  },
  lunch: {
    why: "'Lunch' ends in -ch, so we add -es: lunches.",
    more: "In British schools, 'packed lunches' are brought from home, and 'school dinners' are cooked at school.",
    tip: 'After ch, add -es: one lunch, two lunches.',
  },
  sandwich: {
    why: "'Sandwich' ends in -ch, so we add -es: sandwiches.",
    more: 'The sandwich is said to be named after an English lord, the Earl of Sandwich, who lived in the 18th century.',
    tip: "Do not write 'sandwichs'. After ch, add -es.",
  },
  peach: {
    why: "'Peach' ends in -ch, so we add -es: peaches.",
    more: 'Fruit words ending in -ch take -es. Most other fruit words just add s: one plum, two plums.',
    tip: "Say 'peach-iz' aloud to hear the extra syllable.",
  },
  wish: {
    why: "'Wish' ends in -sh, so we add -es: wishes.",
    more: "'Best wishes' is a common way to end a card or an email.",
    tip: 'After sh, always add -es.',
  },
  bush: {
    why: "'Bush' ends in -sh, so we add -es: bushes.",
    more: 'Gardens in Britain often have rose bushes. Every -sh word adds -es in the same way.',
    tip: "Do not write 'bushs'.",
  },
  cherry: {
    why: "'Cherry' ends in a consonant (r) and -y, so the y changes to i and we add -es: cherries.",
    more: 'Many fruit names end in -rry, and they all follow this rule: berry, berries.',
    tip: 'The double r stays; only the y changes: c-h-e-r-r-i-e-s.',
  },
  donkey: {
    why: "'Donkey' has a vowel (e) before the y, so we just add -s: donkeys.",
    more: 'Words ending in -ey keep the y: one jockey, two jockeys.',
    tip: "Do not write 'donkies'. The e before the y means you keep the y.",
  },
  photo: {
    why: "'Photo' is short for 'photograph', and short forms ending in -o just add -s: photos.",
    more: "Most -o words just add -s. Only a small group, such as 'tomato' and 'hero', add -es.",
    tip: "Do not write 'photoes'.",
  },
  radio: {
    why: "'Radio' has a vowel (i) before the -o, so it just adds -s: radios.",
    more: 'When a vowel comes before the final o, the plural is always -os: one rodeo, two rodeos.',
    tip: 'A vowel before the o? Just add s.',
  },
  zoo: {
    why: "'Zoo' ends in -oo, so it just adds -s: zoos.",
    more: 'Words ending in -oo never take -es: one cuckoo, two cuckoos.',
    tip: 'Two o letters at the end? Just add s.',
  },
  video: {
    why: "'Video' has a vowel (e) before the -o, so it just adds -s: videos.",
    more: 'Many newer words ending in -o, often about television and film, just add -s.',
    tip: "Do not write 'videoes'.",
  },
  'I have two ___ (cat).': {
    why: "'Two' means more than one, so the gap needs the plural. 'Cat' just adds -s: cats.",
    more: 'After any number above one, the noun is plural: two cats, ten cats, a hundred cats.',
    tip: 'Read the word before the gap. A number above one means a plural.',
  },
  'There are five ___ (cake) on the plate.': {
    why: "'Five' and 'there are' show more than one, so the gap needs the plural. 'Cake' ends in a silent -e, so it just adds -s: cakes.",
    more: "'There is' goes with one thing and 'there are' with more than one. The noun must agree.",
    tip: "Use 'there are' with a plural noun: 'There are five cakes.'",
  },
  'Give Grandma two ___ (kiss).': {
    why: "'Two' means more than one. 'Kiss' ends in -ss, so we add -es: kisses.",
    more: "'Kiss' is also a verb, and it takes the same ending: 'She kisses the baby goodnight.'",
    tip: "A card sometimes ends with 'love and kisses'.",
  },
  'All the ___ (lunchbox) are on the shelf.': {
    why: "'All the' and 'are' show more than one, so the gap needs the plural. 'Lunchbox' ends in -x, so we add -es: lunchboxes.",
    more: 'A word made of two words takes its plural on the last part: lunch + boxes.',
    tip: "Check the verb: 'are' goes with a plural noun.",
  },
  'There are two ___ (church) in our village.': {
    why: "'Two' means more than one. 'Church' ends in -ch, so we add -es: churches.",
    more: 'Many English villages have one church, and towns often have several.',
    tip: "Say 'church-iz' aloud: the extra syllable tells you to write -es.",
  },
  'There are four ___ (toothbrush) by the sink.': {
    why: "'There are four' shows more than one. 'Toothbrush' ends in -sh, so we add -es: toothbrushes.",
    more: 'In a word made of two words, the plural goes on the last part: tooth + brushes. The first part does not change.',
    tip: "Do not write 'teethbrushes'. Only the last part becomes plural.",
  },
  'Our dog had three ___ (puppy).': {
    why: "'Three' means more than one. 'Puppy' ends in a consonant (p) and -y, so the y changes to i and we add -es: puppies.",
    more: 'A young dog is a puppy, and a young cat is a kitten.',
    tip: 'The double p stays; only the y changes.',
  },
  'We go on two ___ (holiday) a year.': {
    why: "'Two' means more than one. 'Holiday' has a vowel (a) before the y, so we just add -s: holidays.",
    more: "'Holiday' is British English for a trip away or time off school; in American English it is a 'vacation'.",
    tip: 'A vowel before the y means the y stays.',
  },
  'Cut the cake into two ___ (half).': {
    why: "'Two' means more than one. 'Half' ends in -f, so the f changes to v and we add -es: halves.",
    more: "The l in this word is silent: we say 'harf' for one and 'harvz' for two.",
    tip: "Two of them make a whole: that is why 'half' means one of two equal parts.",
  },
  'Our school has two ___ (piano).': {
    why: "'Two' means more than one. 'Piano' just adds -s: pianos.",
    more: "'Piano' comes from Italian, like 'cello', and both just add -s: one cello, two cellos.",
    tip: "Do not write 'pianoes'.",
  },
  'We built two ___ (snowman) in the park.': {
    why: "'Two' means more than one. 'Snowman' ends in -man, which changes to -men: snowmen.",
    more: "Words made with the word 'man' change in the same way: one milkman, two milkmen.",
    tip: 'Change only the a to e: s-n-o-w-m-e-n.',
  },
  'Two ___ (child) were playing.': {
    why: "'Two' means more than one, and 'were' goes with a plural. 'Child' has an irregular plural: children.",
    more: "The plural takes a plural verb: 'The children were playing.' With one, we say 'The child was playing.'",
    tip: "Never add an s to 'children': it is plural already.",
  },
  'There are four ___ (person) in my family.': {
    why: "'Four' means more than one. 'Person' has a different word in the plural: people.",
    more: "We count with this plural: 'four people', 'a hundred people'. The verb is plural too: 'There are four ...'",
    tip: "In everyday English, never write 'four persons'.",
  },
  'These ___ (shoe) are too small.': {
    why: "'These' and 'are' show more than one, so the gap needs the plural. 'Shoe' just adds -s: shoes.",
    more: "'This' goes with one thing and 'these' with more than one: this shoe, these shoes. 'That' and 'those' work the same way.",
    tip: "They come in pairs: 'a pair of shoes' is one pair, but the shoes themselves are plural.",
  },
  'How many ___ (brother) have you got?': {
    why: "'How many' asks about a number of things, so the noun after it is plural: brothers.",
    more: "'How many' goes with plural nouns you can count; 'how much' goes with words like 'sugar' that you cannot count.",
    tip: "'Have you got' is British English. Americans usually say 'Do you have'.",
  },
  'My two ___ (sister) are at school.': {
    why: "'Two' and 'are' show more than one, so the gap needs the plural. 'Sister' just adds -s: sisters.",
    more: "The verb must agree with the noun: 'My sister is at school', but 'My two sisters are at school'.",
    tip: "Check the verb after a plural noun: 'are', not 'is'.",
  },
  'We need ___ (water) to live.': {
    why: "'Water' is uncountable: we cannot count it in ones and twos, so there is no plural here. The word stays the same.",
    more: 'To count water, count its containers: a glass of water, two bottles of water.',
    tip: "Use 'some' or 'a lot of' with an uncountable noun: 'some water', 'a lot of water'.",
  },
  'I drink a lot of ___ (milk).': {
    why: "'Milk' is uncountable, so it has no plural: 'a lot of milk'. 'A lot of' can go with uncountable nouns.",
    more: 'To talk about amounts, use a container or a measure: a carton of milk, a litre of milk.',
    tip: "'A lot of' works with plural nouns too, so look at the noun itself: can you count it?",
  },
  'We listen to ___ (music) in the car.': {
    why: "'Music' is uncountable, so it has no plural and the word stays the same.",
    more: 'To count music, count the songs or the pieces: two songs, three pieces of music.',
    tip: "Never write 'musics'.",
  },
  'I have one ___ (brother) and one sister.': {
    why: "'One' means only one, so the noun stays singular: one brother.",
    more: "After 'one', 'a' or 'an', a noun you can count is always singular.",
    tip: "Read the number before the gap. 'One' means no s.",
  },
  'I have three ___ (cousin) in Wales.': {
    why: "'Three' means more than one. 'Cousin' just adds -s: cousins.",
    more: "'Cousin' is the same word for a boy or a girl, so the plural can mean both.",
    tip: 'Family words like this one are regular: add -s.',
  },
  country: {
    why: "'Country' ends in a consonant (r) and -y, so the y changes to i and we add -es: countries.",
    more: "Compare 'tray, trays': a vowel before the y keeps it, but a consonant changes it.",
    tip: 'Learn the spelling letter by letter: c-o-u-n-t-r-i-e-s. You will need it whenever you write about the world.',
  },
  lady: {
    why: "'Lady' ends in a consonant (d) and -y, so the y changes to i and we add -es: ladies.",
    more: "'Ladies and gentlemen' is a polite way to begin a speech to a group. 'Ladies' is also a sign on a toilet door.",
    tip: "Use a plural verb after it: 'The ladies are here.'",
  },
  monkey: {
    why: "'Monkey' has a vowel (e) before the y, so we just add -s: monkeys.",
    more: 'Animal words ending in -ey all keep the y: one turkey, two turkeys.',
    tip: "Do not write 'monkies'. The e before the y means keep the y.",
  },
  wolf: {
    why: "'Wolf' ends in -f. We change the f to v and add -es: wolves.",
    more: 'Many words ending in -lf change in the same way: half, halves; shelf, shelves.',
    tip: 'In fairy tales you often read about wolves. Learn the plural with the singular.',
  },
  shelf: {
    why: "'Shelf' ends in -f. We change the f to v and add -es: shelves, said 'shelvz'.",
    more: 'A short list to learn: leaf, loaf, wolf, half, shelf and thief all change to -ves.',
    tip: "In a classroom you might say: 'Put the files on the shelves.'",
  },
  thief: {
    why: "'Thief' ends in -f. We change the f to v and add -es: thieves, said 'theevz'.",
    more: "The letters ie stay in the plural: t-h-i-e-v-e-s. Not every -ief word changes, though: 'chief' keeps its f.",
    tip: "Use a plural verb after it: 'The thieves were caught.'",
  },
  half: {
    why: "'Half' ends in -f. We change the f to v and add -es: halves.",
    more: 'A football match has two halves, and so does a pizza cut down the middle.',
    tip: "The l is silent in both words: 'harf', 'harvz'.",
  },
  life: {
    why: "'Life' ends in -fe. We change the fe to ves: lives, which rhymes with 'knives'.",
    more: "Be careful: the same spelling is also a verb, as in 'She lives in Leeds', and then it rhymes with 'gives'.",
    tip: "Say the plural noun like 'knives' and the verb like 'gives'.",
  },
  hero: {
    why: "'Hero' is one of the -o words that add -es: heroes.",
    more: 'Only a short list of -o words take -es. Most, especially short forms and words from Italian, just add s.',
    tip: 'Learn the -oes words as a group: hero, echo, tomato, potato.',
  },
  goose: {
    why: "'Goose' changes its vowels instead of adding -s: oo becomes ee. The plural is geese.",
    more: 'A young goose is a gosling, and a group of them flying together is a flock. Foot and tooth change the same way.',
    tip: "Do not write 'gooses'. Think of foot and its plural: the oo becomes ee.",
  },
  deer: {
    why: "'Deer' has the same form for one and for many: one deer, two deer.",
    more: "A group of deer is a herd. The verb shows the number: 'A deer is running', 'Three deer are running'.",
    tip: "Do not write 'deers'. Look at the verb or the number.",
  },
  aircraft: {
    why: "'Aircraft' has the same form for one and for many: one aircraft, two aircraft.",
    more: "'Aircraft' means planes, helicopters and other flying machines. 'Hovercraft' also stays the same in the plural.",
    tip: "A report might say: 'Ten aircraft landed safely.' No s is added.",
  },
  address: {
    why: "'Address' ends in -ss, so we add -es: addresses.",
    more: 'The double d and the double s both stay in the plural: a-d-d-r-e-s-s-e-s.',
    tip: 'When you write two email addresses, put each one on its own line.',
  },
  princess: {
    why: "'Princess' ends in -ss, so we add -es: princesses.",
    more: "Words ending in -ess, like 'hostess', all add -es.",
    tip: 'Count the s letters: there are three in the plural.',
  },
  circus: {
    why: "'Circus' ends in -s, so we add -es: circuses.",
    more: 'Not every word ending in -us takes a Latin plural with -i. Everyday words like this one just add -es.',
    tip: "Never write 'circi'. It is not an English word.",
  },
  prefix: {
    why: "'Prefix' ends in -x, so we add -es: prefixes.",
    more: "A prefix goes at the start of a word, like un- in 'unhappy'. Words with -x at the end add -es.",
    tip: 'In English lessons you will learn many of them: un-, dis-, re- and pre-.',
  },
  suffix: {
    why: "'Suffix' ends in -x, so we add -es: suffixes.",
    more: "A suffix goes at the end of a word, like -ful in 'careful'. The plural ending -es is itself a kind of suffix.",
    tip: "Do not write 'suffixs'.",
  },
  torch: {
    why: "'Torch' ends in -ch, so we add -es: torches.",
    more: "In British English a 'torch' is a small electric light you carry; Americans call it a 'flashlight'.",
    tip: 'After ch, add -es.',
  },
  coach: {
    why: "'Coach' ends in -ch, so we add -es: coaches.",
    more: "'Coach' has two meanings: a bus for long trips, and a person who trains a team. Both take -es.",
    tip: "Say 'coach-iz' aloud to hear the extra syllable.",
  },
  match: {
    why: "'Match' ends in -ch, so we add -es: matches.",
    more: "'Match' means a game, such as a football match, and also a small stick for lighting a fire. Both plurals are the same.",
    tip: "'Watch' and 'match' end in the same letters, and both add -es.",
  },
  eyelash: {
    why: "'Eyelash' ends in -sh, so we add -es: eyelashes.",
    more: 'In a word made of two parts, the plural goes on the last part: eye + lashes.',
    tip: "Do not write 'eyeslash'. Only the end changes.",
  },
  dictionary: {
    why: "'Dictionary' ends in a consonant (r) and -y, so the y changes to i and we add -es: dictionaries.",
    more: 'A good dictionary shows the plural of every noun, so it is the best place to check an odd one.',
    tip: 'Use a learner’s dictionary: it shows plurals and gives examples.',
  },
  library: {
    why: "'Library' ends in a consonant (r) and -y, so the y changes to i and we add -es: libraries.",
    more: "Say all three syllables, 'LIE-bruh-ree', and the spelling will be easier to remember.",
    tip: "Do not mix up 'library' (where you borrow) and 'bookshop' (where you buy).",
  },
  butterfly: {
    why: "'Butterfly' ends in a consonant (l) and -y, so the y changes to i and we add -es: butterflies.",
    more: "The last part of the word, 'fly', changes in the same way on its own.",
    tip: 'Only the y changes: b-u-t-t-e-r-f-l-i-e-s.',
  },
  lorry: {
    why: "'Lorry' ends in a consonant (r) and -y, so the y changes to i and we add -es: lorries.",
    more: "'Lorry' is British English; in American English it is a 'truck'.",
    tip: 'The double r stays: l-o-r-r-i-e-s.',
  },
  diary: {
    why: "'Diary' ends in a consonant (r) and -y, so the y changes to i and we add -es: diaries.",
    more: "Do not mix up 'diary' (a book for notes and plans) and 'dairy' (products such as butter and cheese). The letters are in a different order.",
    tip: 'Read the word slowly to check the order: d-i-a-r-y.',
  },
  valley: {
    why: "'Valley' has a vowel (e) before the y, so we just add -s: valleys.",
    more: 'Words ending in -ey keep the y: one jockey, two jockeys.',
    tip: "Do not write 'vallies'.",
  },
  chimney: {
    why: "'Chimney' has a vowel (e) before the y, so we just add -s: chimneys.",
    more: 'Many old British homes have chimneys on the roof, for the smoke from fires.',
    tip: "Do not write 'chimnies'. The e before the y means keep the y.",
  },
  journey: {
    why: "'Journey' has a vowel (e) before the y, so we just add -s: journeys.",
    more: "A journey is travel from one place to another. The verb takes the same ending: 'She journeys north.'",
    tip: 'The e before the y means keep the y: j-o-u-r-n-e-y-s.',
  },
  loaf: {
    why: "'Loaf' ends in -f. We change the f to v and add -es: loaves.",
    more: 'We buy bread in loaves: a loaf of bread, two loaves of bread. Leaf changes in the same way.',
    tip: "Do not write 'loafs'.",
  },
  elf: {
    why: "'Elf' ends in -f. We change the f to v and add -es: elves.",
    more: 'Elves appear in many fairy tales. Shelf and self change in the same way: shelves, selves.',
    tip: "Think of 'shelf, shelves': the -lf becomes -lves.",
  },
  chief: {
    why: "'Chief' is one of the -f words that just add -s: chiefs.",
    more: 'Not every -f word changes to -ves. Some, like this one, keep the f: one cliff, two cliffs.',
    tip: "Compare 'thief' and 'chief': they look alike, but only the first changes to -ves.",
  },
  cliff: {
    why: "'Cliff' ends in -ff, and words ending in -ff just add -s: cliffs.",
    more: 'The white cliffs of Dover, on the south coast of England, are famous.',
    tip: 'Words ending in double f usually just add -s: cuff, cuffs.',
  },
  giraffe: {
    why: "'Giraffe' ends in -ffe, so it just adds -s: giraffes.",
    more: 'Words ending in -ffe keep the f and add -s, like other words that end in a silent -e.',
    tip: 'Keep the double f and the e: g-i-r-a-f-f-e-s.',
  },
  echo: {
    why: "'Echo' is one of the -o words that add -es: echoes.",
    more: "'Echo' is also a verb: 'The sound echoes round the cave.' The ending is the same.",
    tip: 'Learn the -oes group together: echo, hero, tomato, potato.',
  },
  kangaroo: {
    why: "'Kangaroo' ends in -oo, so it just adds -s: kangaroos.",
    more: 'Words ending in -oo never take -es: zoo, cuckoo, igloo.',
    tip: 'Two o letters at the end? Just add s.',
  },
  hippo: {
    why: "'Hippo' is short for 'hippopotamus', and short forms ending in -o just add -s: hippos.",
    more: "The long word 'hippopotamus' has two accepted plurals, but the short form has only one.",
    tip: 'Short forms like this keep the simple -s.',
  },
  igloo: {
    why: "'Igloo' ends in -oo, so it just adds -s: igloos.",
    more: 'An igloo is a house made of blocks of snow. The word comes from an Inuit language.',
    tip: 'Two o letters at the end? Just add s.',
  },
  postman: {
    why: "'Postman' ends in -man, which changes to -men: postmen.",
    more: "Today 'postal worker' is often used for a postman or a postwoman.",
    tip: 'Change only the a to e: p-o-s-t-m-e-n.',
  },
  house: {
    why: "'House' just adds -s: houses. It does not change like 'mouse'.",
    more: "The plural has an extra syllable, 'how-ziz', and the s in the middle sounds like z.",
    tip: "Do not write 'hice' or 'housen'. Only a few words change their vowels.",
  },
  'The library has two ___ (atlas) of the world.': {
    why: "'Two' means more than one. 'Atlas' ends in -s, so we add -es: atlases.",
    more: 'An atlas is a book of maps. The word comes from Atlas, a giant in Greek myths.',
    tip: "Say 'at-luh-siz' aloud: the plural has three syllables.",
  },
  'Dad keeps two ___ (toolbox) in the garage.': {
    why: "'Two' means more than one. 'Toolbox' ends in -x, so we add -es: toolboxes.",
    more: 'In a word made of two parts, the plural goes on the last part: tool + boxes.',
    tip: 'Only the last part changes.',
  },
  'There are three ___ (bench) in the park.': {
    why: "'Three' means more than one. 'Bench' ends in -ch, so we add -es: benches.",
    more: 'Many British parks have benches with a small sign in memory of someone.',
    tip: 'After ch, add -es.',
  },
  'We need clean ___ (paintbrush) for the art lesson.': {
    why: "There is no 'a' before the gap, so it needs the plural: one brush would be 'a clean paintbrush'. 'Paintbrush' ends in -sh, so we add -es: paintbrushes.",
    more: "A countable noun with no 'a' or 'the' in front must be plural: 'We need clean towels.'",
    tip: "If there is no 'a' before a countable noun, check whether it should be plural.",
  },
  'The ___ (strawberry) in our garden are ripe now.': {
    why: "'Are' shows more than one, so the gap needs the plural. 'Strawberry' ends in a consonant (r) and -y, so the y changes to i: strawberries.",
    more: 'Fruit names ending in -rry, such as berry and raspberry, all follow this rule.',
    tip: 'The double r stays; only the y changes.',
  },
  'I have two ___ (hobby): reading and football.': {
    why: "'Two' means more than one. 'Hobby' ends in a consonant (b) and -y, so the y changes to i: hobbies.",
    more: 'A hobby is something you do for fun in your free time.',
    tip: "In a speaking test, give a reason for each hobby: '... because it helps me relax.'",
  },
  'The farm has fifty ___ (turkey).': {
    why: "'Fifty' means more than one. 'Turkey' has a vowel (e) before the y, so we just add -s: turkeys.",
    more: "In Britain, turkey is a common Christmas dinner. 'Turkey' is also the name of a country, with a capital T.",
    tip: 'A vowel before the y means keep the y.',
  },
  'The farmer has two ___ (calf).': {
    why: "'Two' means more than one. 'Calf' ends in -f, so the f changes to v and we add -es: calves.",
    more: 'A calf is a young cow. The back of your leg is also your calf, with the same plural.',
    tip: "The l is silent in both words, as in 'half'.",
  },
  'Two ___ (chef) were cooking in the kitchen.': {
    why: "'Two' and 'were' show more than one. 'Chef' just adds -s: chefs.",
    more: "'Chef' comes from French. Words borrowed like this often keep their f in the plural.",
    tip: "Say 'shef': the ch in this word sounds like sh.",
  },
  'We played ___ (domino) after dinner.': {
    why: "The game is named after its many small tiles, so its name is the plural. 'Domino' is one of the -o words that add -es: dominoes.",
    more: 'Each tile is a domino. A chain of events, like a line of falling tiles, is called a domino effect.',
    tip: "The name of the game is plural, but it takes a singular verb: 'Dominoes is fun.'",
  },
  'The town has two film ___ (studio).': {
    why: "'Two' means more than one. 'Studio' has a vowel (i) before the -o, so it just adds -s: studios.",
    more: 'When a vowel comes before the final o, the plural is always -os.',
    tip: 'A vowel before the o? Just add s.',
  },
  'We need two ___ (kilo) of flour.': {
    why: "'Two' means more than one. 'Kilo', short for 'kilogram', just adds -s: kilos.",
    more: 'Short forms ending in -o take -s. We also write kg: 2 kg of flour.',
    tip: "'Flour' has no plural here: it is the kilos you count.",
  },
  'The ___ (fisherman) were mending their nets on the beach.': {
    why: "'Were' shows more than one person, so the gap needs the plural. 'Fisherman' ends in -man, which changes to -men: fishermen.",
    more: "Words made with the word 'man' change in the same way. Only the a changes.",
    tip: "Look at the verb after the gap: 'were' shows that the subject is plural.",
  },
  'Two ___ (policewoman) helped us find the way.': {
    why: "'Two' means more than one. 'Policewoman' ends in -woman, which changes to -women: policewomen.",
    more: "Today 'police officer' is often used for anyone in the police.",
    tip: 'Change the a in the last part to e: p-o-l-i-c-e-w-o-m-e-n.',
  },
  'She has three new ___ (blouse).': {
    why: "'Three' means more than one. 'Blouse' just adds -s: blouses. It does not change like 'mouse'.",
    more: "A blouse is a kind of shirt. The plural has an extra syllable: 'blou-ziz', with 'ou' as in 'out'.",
    tip: 'Only a very few words change their vowels in the plural. Most, like this one, add s.',
  },
  'Granny has six ___ (grandchild).': {
    why: "'Six' means more than one. 'Grandchild' ends in 'child', so it changes like 'child': grandchildren.",
    more: "A word built on 'child' takes the same plural: grandchild, grandchildren.",
    tip: "Never write 'grandchilds'.",
  },
  'There were 200 ___ (person) at the concert.': {
    why: "'200' means more than one. 'Person' has a different word in the plural: people.",
    more: "With big numbers we always count with this word: 'a thousand people', 'two million people'.",
    tip: "The verb after it is plural: 'The people were cheering.'",
  },
  'We saw three ___ (ostrich) at the zoo.': {
    why: "'Three' means more than one. 'Ostrich' ends in -ch, so we add -es: ostriches.",
    more: 'The ostrich is the largest bird in the world, but it cannot fly.',
    tip: 'After ch, add -es: o-s-t-r-i-c-h-e-s.',
  },
  'There are lots of ___ (fly) in the kitchen.': {
    why: "'Lots of' with 'are' shows more than one. 'Fly' ends in a consonant (l) and -y, so the y changes to i: flies.",
    more: "The verb works the same way: 'A bird flies.' One spelling rule covers both.",
    tip: 'Short words follow the rule too: spy, spies; sky, skies.',
  },
  'We had two ___ (birthday) in one week.': {
    why: "'Two' means more than one. 'Birthday' has a vowel (a) before the y, so we just add -s: birthdays.",
    more: 'Every word ending in -ay keeps the y: one tray, two trays.',
    tip: 'A vowel before the y means keep the y.',
  },
  'We need ten ___ (plate) for the party.': {
    why: "'Ten' means more than one. 'Plate' ends in a silent -e, so it just adds -s: plates.",
    more: 'Words that end in a silent -e only need -s: kite, kites; stone, stones.',
    tip: 'Keep the e and add s.',
  },
  "I'd like two slices of ___ (toast), please.": {
    why: "'Toast' is uncountable here: we count the slices, not the toast. So the word stays the same.",
    more: 'We count uncountable food with words like slice, piece and bowl: two slices of toast, a bowl of soup.',
    tip: "In a café, ask for 'two slices of toast', not 'two toasts'.",
  },
  'There is too much ___ (rubbish) in the street.': {
    why: "'Too much' goes with uncountable nouns, and 'rubbish' is uncountable: it has no plural.",
    more: "'Rubbish' is British English. Americans say 'trash' or 'garbage'.",
    tip: "'Much' with uncountable nouns, 'many' with plurals: too much rubbish, too many bags.",
  },
  'Many ___ (insect) live in the soil.': {
    why: "'Many' and 'live' show more than one, so the gap needs the plural: insects.",
    more: "'Many' goes with plural nouns you can count. With uncountable nouns, use 'much' instead.",
    tip: "After 'many', check that the noun has its plural ending.",
  },
  'There is only one ___ (bathroom) in our flat.': {
    why: "'One' means only one, so the noun stays singular: bathroom.",
    more: "'There is' goes with one thing; 'there are' goes with more than one.",
    tip: "Look at both clues: 'is' and 'one' point to the singular.",
  },
  'Both ___ (team) played well.': {
    why: "'Both' means two, so the noun after it is plural: teams.",
    more: "'Both' always goes with a plural noun: both teams, both hands.",
    tip: "'Both' takes a plural verb too: 'Both teams were ...'",
  },
  'I waited for a few ___ (minute).': {
    why: "'A few' means a small number, more than one, so the noun is plural: minutes.",
    more: "'A few' goes with plural nouns; 'a little' goes with uncountable nouns: a little time.",
    tip: "Never write 'a few minute'. 'A few' needs a plural.",
  },
  'Many ___ (shop) close early on Sundays.': {
    why: "'Many' and 'close' show more than one, so the gap needs the plural: shops.",
    more: 'In England, large shops may open for only six hours on a Sunday.',
    tip: "A plural subject takes a verb without -s: 'Many shops close'.",
  },
  'Each ___ (player) gets a medal.': {
    why: "'Each' looks at the members of a group one at a time, so the noun after it is singular: player.",
    more: "'Each' and 'every' both take a singular noun and a singular verb: 'Each player gets ...'",
    tip: "Look for 'each' or 'every' before the gap: they mean no s.",
  },
  'Every ___ (bedroom) in the hotel has a shower.': {
    why: "'Every' means all of a group, one by one, so the noun after it is singular: bedroom.",
    more: "'Every' takes a singular verb too: 'Every bedroom has ...', not 'have'.",
    tip: "Check the verb as well: 'every' goes with 'has', not 'have'.",
  },
  'My teacher gave me some useful ___ (advice).': {
    why: "'Advice' is uncountable, so it has no plural, even after 'some': 'some useful advice'.",
    more: "To count advice, use 'a piece of': 'a piece of advice', 'two pieces of advice'.",
    tip: "'Advices' is one of the commonest mistakes in English. Never add an s.",
  },
  'I need some ___ (information) about the trip.': {
    why: "'Information' is uncountable, so it has no plural: 'some information'.",
    more: 'In some languages the word for information can be plural, but in English it never is.',
    tip: "Count it with 'a piece of' or 'some', never with a number.",
  },
  'We have a lot of ___ (homework) tonight.': {
    why: "'Homework' is uncountable, so it has no plural: 'a lot of homework'.",
    more: 'To count homework, count the tasks: two pieces of homework, three exercises.',
    tip: "Never write 'homeworks'.",
  },
  'We bought some new ___ (furniture) for the flat.': {
    why: "'Furniture' is uncountable: it names a whole group of things, so it has no plural.",
    more: 'To count it, count the pieces, or name the things: a piece of furniture, a bed and two desks.',
    tip: "Never write 'furnitures'.",
  },
  'How much ___ (luggage) have you got?': {
    why: "'How much' goes with uncountable nouns, and 'luggage' is uncountable: it has no plural.",
    more: "To count it, count the bags: 'I have two suitcases', or 'two pieces of luggage'.",
    tip: "'Baggage' works the same way: it never takes an s.",
  },
  'There was a lot of ___ (traffic) on the way to school.': {
    why: "'Traffic' is uncountable, so it has no plural: 'a lot of traffic'. 'Was' agrees with it.",
    more: "'Traffic' means all the vehicles on a road, seen as one mass.",
    tip: "Use 'was', not 'were', with an uncountable noun.",
  },
  'Mum gave me some ___ (money) for lunch.': {
    why: "'Money' is uncountable, so it has no plural: 'some money'.",
    more: "To count money, count the coins and notes, or the pounds: 'five pounds'.",
    tip: "Never write 'moneys' in everyday English.",
  },
  'The ___ (weather) was lovely on Saturday.': {
    why: "'Weather' is uncountable, so it has no plural. 'Was' agrees with it.",
    more: "We say 'the weather' with 'the' and a singular verb: 'The weather is cold today.'",
    tip: "Do not mix up 'weather' and 'whether', which means 'if'.",
  },
  'We had ___ (rice) and curry for dinner.': {
    why: "'Rice' is uncountable: it comes in tiny grains we do not count, so it has no plural.",
    more: 'To count rice, use a measure: a bowl of rice, a bag of rice.',
    tip: "Never write 'rices' in a sentence like this.",
  },
  'Two ___ (spacecraft) landed on Mars in 2021.': {
    why: "'Two' means more than one, but 'spacecraft' has the same form for one and for many.",
    more: "'Aircraft' and 'hovercraft' work the same way: no s in the plural.",
    tip: "Look at the number: 'two' shows more than one, even though the word does not change.",
  },
  series: {
    why: "'Series' has the same form for one and for many: one series, two series. It already ends in s.",
    more: "A series is a set of connected things, such as a television series with many episodes. 'Species' also stays the same.",
    tip: "Do not write 'serieses'. The verb shows the number: 'a series is', 'three series are'.",
  },
  nucleus: {
    why: "'Nucleus' comes from Latin. In the plural we change -us to -i: nuclei, said 'NEW-klee-eye'.",
    more: "'Nucleus' is a science word: the nucleus of a cell or of an atom. You will meet the plural in science lessons.",
    tip: 'Learn it as a pair: nucleus, nuclei. In school science, always use the -i plural.',
  },
  stimulus: {
    why: "'Stimulus' comes from Latin. In the plural we change -us to -i: stimuli, said 'STIM-yoo-lye'.",
    more: 'A stimulus is something that makes a living thing react, such as a loud noise. Biology lessons use the plural often.',
    tip: 'Learn it as a pair, like nucleus and its plural: both change -us to -i.',
  },
  analysis: {
    why: "'Analysis' comes from Greek. In the plural we change -is to -es: analyses, said 'uh-NAL-uh-seez'.",
    more: "The same spelling is also a verb in British English: 'She analyses the data.' The sentence shows which it is.",
    tip: 'Learn it as a pair: analysis, analyses.',
  },
  crisis: {
    why: "'Crisis' comes from Greek. In the plural we change -is to -es: crises, said 'KRY-seez'.",
    more: 'A crisis is a very difficult or dangerous time. Reports on television often describe several at once.',
    tip: "Learn it as a pair. The same change turns 'thesis' into 'theses'.",
  },
  criterion: {
    why: "'Criterion' comes from Greek. In the plural we change -on to -a: criteria.",
    more: 'Many writers use the plural for one by mistake. Remember: one criterion, two criteria.',
    tip: "Say 'the criteria are' (plural) and 'the criterion is' (one).",
  },
  phenomenon: {
    why: "'Phenomenon' comes from Greek. In the plural we change -on to -a: phenomena.",
    more: 'A phenomenon is something that happens or exists, especially in nature. Rainbows and thunder are natural phenomena.',
    tip: "Learn it as a pair, like 'criterion' and its plural.",
  },
  '"Are there no ___ (prison)?" asked Scrooge.': {
    why: "'Are there' shows more than one, so the gap needs the plural: prisons. Scrooge asks this when two gentlemen ask him to help the poor at Christmas.",
    more: "Later, the Ghost of Christmas Present repeats Scrooge's cold words back to him.",
    tip: "'Are there no ...?' is a question that expects a plural noun.",
  },
  'All ___ (animal) are equal.': {
    why: "'All' and 'are' show more than one, so the gap needs the plural: animals. Old Major says this in his speech to the farm.",
    more: "By the end of the book the pigs have changed the rule to 'All animals are equal but some animals are more equal than others.'",
    tip: "'All' with a plural noun takes a plural verb: 'All ... are'.",
  },
  'I am twelve years old and have had over four hundred ___ (child).': {
    why: "'Four hundred' means more than one, so the gap needs the plural: children. Old Major, an old pig, is speaking about his own life.",
    more: 'Orwell lets the old pig call his piglets his children, which makes the pigs seem more human.',
    tip: "After 'over' and a number, the noun is plural: 'over four hundred'.",
  },
  'However, these ___ (story) were never fully believed.': {
    why: "'These' and 'were' show more than one, so the gap needs the plural. 'Story' changes its y to i: stories.",
    more: 'These are the lies that the neighbouring farmers tell about Animal Farm, to stop a rebellion on their own farms.',
    tip: "'These' always goes with a plural noun.",
  },
  'There were three ___ (lady) in the room and one gentleman.': {
    why: "'Three' and 'were' show more than one. 'Lady' changes its y to i: ladies.",
    more: "Pip is visiting Miss Havisham's house, where some of her relations are waiting.",
    tip: 'Notice how the sentence counts both groups: three of one, one of the other.',
  },
  'In came all the young men and ___ (woman) employed in the business.': {
    why: "'All the young men and ...' lists more than one person, so the gap needs the plural: women.",
    more: "This is Mr Fezziwig's Christmas party, which Scrooge remembers from when he was young.",
    tip: "When two nouns are joined by 'and' after 'all the', both are plural.",
  },
  'Let us face it: our ___ (life) are miserable, laborious, and short.': {
    why: "'Are' shows more than one life, so the gap needs the plural. 'Life' changes its fe to ves: lives.",
    more: 'Old Major tells the farm the truth about their hard lives under Mr Jones, to make them want to rebel.',
    tip: "'Our' can go with one thing or many. Here the verb 'are' decides.",
  },
  'Friends, ___ (Roman), countrymen, lend me your ears;': {
    why: "Antony is speaking to a whole crowd, so every word in his list is plural. 'Roman' just adds -s: Romans. It is not a -man word.",
    more: "'Countrymen' is a true -man word, but 'Roman' only ends in -man by chance. The same goes for 'human' and 'German'.",
    tip: "Before you change the a in -man to e, check that the word really contains 'man'.",
  },
  'We are such ___ (stuff) / As dreams are made on, and our little life / Is rounded with a sleep.':
    {
      why: "'Stuff' here means material. It is uncountable, so it has no plural: 'such stuff'.",
      more: 'Prospero says that we are made of the same material as dreams, and that a life ends in sleep.',
      tip: "'Stuff' is common in speech: 'Put your stuff in your bag.' It never takes an s.",
    },
  'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a ___ (wife).':
    {
      why: "'A' means one, so the noun after it stays singular: wife.",
      more: 'This is the famous first line of the novel. Austen is joking: it is the mothers of daughters, not the rich young man, who believe it.',
      tip: "After 'a' or 'an', a noun you can count is always singular.",
    },
  'The winter was as cold as the last one had been, and ___ (food) was even shorter.': {
    why: "'Food' is uncountable here, and 'was' agrees with it. So it has no plural: food.",
    more: "'Food was short' means there was not enough to eat. The pigs still get their full share.",
    tip: "'Foods' is used only for different kinds, as in 'healthy foods'.",
  },
  'He was especially successful with the ___ (sheep).': {
    why: "'Sheep' has the same form for one and for many, so the word does not change here.",
    more: "Napoleon wins the sheep over, and they bleat 'Four legs good, two legs bad' at meetings so that Snowball cannot be heard.",
    tip: 'When the form does not change, the verb or a number shows how many.',
  },
  'The ___ (potato) had become soft and discoloured, and only a few were edible.': {
    why: "'Only a few were' shows there were many, so the gap needs the plural: potatoes.",
    more: 'Frost has spoilt the potato crop, and the farm goes hungry through the winter.',
    tip: "'Discoloured' is the British spelling, with -our.",
  },
  bacterium: {
    why: "'Bacterium' comes from Latin. In the plural we change -um to -a: bacteria.",
    more: 'You hear the plural far more often than the singular: some bacteria make us ill, and others live in the gut and help us.',
    tip: "Say 'the bacteria are', with a plural verb, in a science answer.",
  },
  hypothesis: {
    why: "'Hypothesis' comes from Greek. In the plural we change -is to -es: hypotheses, said 'hy-POTH-uh-seez'.",
    more: 'A hypothesis is an idea that a science experiment tests.',
    tip: 'Learn it as a pair, like analysis and crisis.',
  },
  'passer-by': {
    why: "In 'passer-by' the main noun is 'passer', so the plural goes on it: passers-by.",
    more: 'In compounds like this, the -s goes on the person, not on the little word after it.',
    tip: 'Keep the hyphen: p-a-s-s-e-r-s-hyphen-b-y.',
  },
  'runner-up': {
    why: "In 'runner-up' the main noun is 'runner', so the plural goes on it: runners-up.",
    more: 'A runner-up is the person or team that comes second in a competition.',
    tip: "Do not write 'runner-ups'. The s goes on the noun.",
  },
  'grown-up': {
    why: "'Grown-up' has no noun inside it to change, so the -s goes on the end: grown-ups.",
    more: "Compare a compound with a main noun inside it, like 'passer-by', where the -s goes on the noun.",
    tip: "Do not write 'growns-up'.",
  },
  stomach: {
    why: "'Stomach' ends in -ch, but here ch sounds like k. Words ending in a k sound just add -s: stomachs.",
    more: "Add -es only when you can hear the extra 'iz'. This plural has no 'iz' sound, so it needs only -s.",
    tip: 'Say the word first. If the ch sounds like k, add only s.',
  },
  monarch: {
    why: "'Monarch' ends in -ch, but the ch sounds like k, so it just adds -s: monarchs.",
    more: 'A monarch is a king or queen. Britain has had them for more than a thousand years.',
    tip: "Other words with a k-sound ch, like 'epoch', add only s too.",
  },
  'Bats can hear sounds that ___ (human) cannot hear.': {
    why: "'Cannot hear' needs a plural subject here, since there is no 'a'. 'Human' is not made from 'man': it comes from Latin, so it just adds -s: humans.",
    more: "'Human' only looks like a -man word. Words that really contain 'man', like 'postman', change the a to e.",
    tip: "Check whether the word is about a 'man' at all. If not, just add s.",
  },
  'Many ___ (German) visit Britain on holiday.': {
    why: "'Many' means more than one, so the gap needs the plural. 'German' is a nationality, not a -man word, so it adds -s: Germans.",
    more: "Nationality words ending in -man follow the main rule: German, Germans. But 'Englishman' really contains 'man': Englishmen.",
    tip: 'Nationality words always start with a capital letter: Germans, Italians.',
  },
  'The school nurse checked our hair for head ___ (louse).': {
    why: "'Head ...' here means the tiny creatures, and there are many of them, so the gap needs the plural. 'Louse' changes inside the word, like 'mouse': lice.",
    more: 'Head lice live in hair. They are common in schools, and easy to treat.',
    tip: 'Only two common words change like this: mouse and louse.',
  },
  'Our cat caught two ___ (mouse) last night.': {
    why: "'Two' means more than one. 'Mouse' has an irregular plural: mice.",
    more: "The plural rhymes with 'nice'. The same change turns 'louse' into 'lice'.",
    tip: "Never write 'mouses'.",
  },
  belief: {
    why: "'Belief' is one of the -f words that just add -s: beliefs.",
    more: "The verb 'believe' has a v, but the noun keeps its f in the plural: belief, beliefs.",
    tip: "Do not write 'believes' for the noun. That is the verb: 'She believes ...'",
  },
  reef: {
    why: "'Reef' is one of the -f words that just add -s: reefs.",
    more: 'Coral reefs grow in warm, shallow seas. The Great Barrier Reef, near Australia, is the biggest.',
    tip: 'There is no sure rule for -f words, so learn which ones change. A dictionary shows the plural.',
  },
  avocado: {
    why: "'Avocado' just adds -s: avocados. Most -o words, especially less common ones, take only -s.",
    more: 'Only a short list of common -o words add -es. For other -o words, -s is the safer choice.',
    tip: 'If you are not sure, check a dictionary: it shows the plural of every noun.',
  },
  'The two clubs have similar ___ (logo).': {
    why: "There is no 'a' before the gap, and the two clubs have one each, so the gap needs the plural. 'Logo', a short form, just adds -s: logos.",
    more: "'Logo' is short for 'logotype'. Short forms ending in -o just add -s.",
    tip: 'Short forms like this keep the simple -s.',
  },
  'We had two ___ (quiz) this week.': {
    why: "'Two' means more than one. 'Quiz' ends in -z, so we add -es, and the z doubles: quizzes.",
    more: "The z doubles to keep the vowel short, as when 'big' becomes 'bigger'.",
    tip: "Do not write 'quizes'. Double the z.",
  },
  'The government raised several ___ (tax).': {
    why: "'Several' means more than one, so the gap needs the plural. 'Tax' ends in -x, so we add -es: taxes.",
    more: "'Several' means more than two, but not a great many.",
    tip: 'After x, add -es.',
  },
  business: {
    why: "'Business' ends in -ss, so we add -es: businesses.",
    more: "The word comes from 'busy', with the y changed to i. The plural has three syllables: 'biz-nis-iz'.",
    tip: 'The plural has four s letters: b-u-s-i-n-e-s-s-e-s.',
  },
  virus: {
    why: "'Virus' ends in -s, so we add -es: viruses.",
    more: "Although 'virus' comes from Latin, its English plural takes -es, never an -i ending.",
    tip: 'Some Latin words keep a Latin plural, but many, like this one, use the English -es.',
  },
  'You wait ages for a bus, and then two ___ (bus) come at once.': {
    why: "'Two' means more than one. 'Bus' ends in -s, so we add -es: buses.",
    more: 'This is a well-known British saying about waiting a long time for something, and then getting more than you need at once.',
    tip: "The saying works for anything: 'You wait ages for one, and then two come at once.'",
  },
  'Our youth club has lots of ___ (activity) for teenagers.': {
    why: "'Lots of' with a countable noun needs the plural. 'Activity' ends in a consonant (t) and -y, so the y changes to i: activities.",
    more: "Long words ending in -ity, such as 'ability' and 'quality', all follow this rule.",
    tip: 'Words ending in -ity are common in formal writing. Their plural is -ities.',
  },
  'Britain has more than a hundred ___ (university).': {
    why: "'More than a hundred' means many, so the gap needs the plural. 'University' ends in a consonant (t) and -y, so the y changes to i: universities.",
    more: 'The oldest universities in Britain, Oxford and Cambridge, are more than 800 years old.',
    tip: "'More than a hundred' takes a plural noun and a plural verb.",
  },
  'This remote control needs two ___ (battery).': {
    why: "'Two' means more than one. 'Battery' ends in a consonant (r) and -y, so the y changes to i: batteries.",
    more: 'They come in sizes such as AA and AAA. Old ones should be recycled, not thrown away.',
    tip: 'The double t stays; only the y changes.',
  },
  'Our hotel was lovely. Both ___ (balcony) had a view of the sea.': {
    why: "'Both' means two, so the noun after it is plural. 'Balcony' ends in a consonant (n) and -y, so the y changes to i: balconies.",
    more: "In a short text, a word like 'both' can decide the form of a noun.",
    tip: 'Read the whole text before you fill the gap.',
  },
  'Our town has two ___ (bakery), and both sell fresh bread.': {
    why: "'Two' and 'both' show more than one. 'Bakery' ends in a consonant (r) and -y, so the y changes to i: bakeries.",
    more: "A bakery makes bread and pastries. In Britain it is also called 'the baker's'.",
    tip: "Shop names ending in -ery, such as 'pottery', follow the same rule.",
  },
  'We wrote three ___ (essay) this term.': {
    why: "'Three' means more than one. 'Essay' has a vowel (a) before the y, so we just add -s: essays.",
    more: 'An essay is a piece of writing that answers a question. In exams, plan each one before you write.',
    tip: 'A vowel before the y means keep the y.',
  },
  'Our class did two ___ (survey) about sport.': {
    why: "'Two' means more than one. 'Survey' has a vowel (e) before the y, so we just add -s: surveys.",
    more: 'A survey asks a group the same questions and counts the answers.',
    tip: "Do not write 'surveies'.",
  },
  'A cat has nine ___ (life), as the saying goes.': {
    why: "'Nine' means more than one, so the gap needs the plural. 'Life' changes its fe to ves: lives.",
    more: "The saying means that a cat often survives danger. Here the plural rhymes with 'knives', not with 'gives'.",
    tip: 'When you use a saying, keep its words exactly as they are.',
  },
  'Shopping list: cheese, two ___ (loaf) of bread, jam.': {
    why: "'Two' means more than one. 'Loaf' changes its f to v and adds -es: loaves.",
    more: 'Bread is uncountable, so we count it in loaves or slices: two loaves of bread.',
    tip: 'In a list, the noun after a number must still be plural.',
  },
  'Thirty ___ (schoolchild) visited the castle.': {
    why: "'Thirty' means more than one. 'Schoolchild' ends in 'child', so it changes like 'child': schoolchildren.",
    more: "Any word built on 'child' takes the same plural: grandchild, schoolchild.",
    tip: "Never write 'schoolchilds'.",
  },
  'The dentist checked all my ___ (tooth).': {
    why: "'All my' means more than one, so the gap needs the plural. 'Tooth' changes its vowels: teeth.",
    more: 'An adult usually has 32 of them.',
    tip: "Never write 'tooths' or 'teeths'.",
  },
  'A spider has eight legs, but a bird has only two ___ (foot).': {
    why: "'Two' means more than one. 'Foot' changes its vowels: feet.",
    more: "'Leg' is regular, but 'foot' is irregular. Different words for parts of the body follow different rules.",
    tip: "Never write 'foots' or 'feets'.",
  },
  'Two ___ (goose) were swimming on the lake.': {
    why: "'Two' and 'were' show more than one. 'Goose' changes its vowels: geese.",
    more: 'The oo to ee change is very old. Only a few words still use it.',
    tip: "Never write 'gooses'.",
  },
  'Scientists find new ___ (species) of insect every year.': {
    why: "'Species' has the same form for one and for many, so the word does not change here.",
    more: 'A species is one kind of living thing. Scientists describe thousands of new ones every year.',
    tip: 'The singular ends in s too: one species, two species.',
  },
  'There are two ___ (crossroads) on the way to school.': {
    why: "'Crossroads' has the same form for one and for many, so the word does not change, even after 'two'.",
    more: 'A crossroads is a place where two roads cross. Even one has an s on the end.',
    tip: 'Some words end in s whether you mean one or more: crossroads, series, species.',
  },
  'The school has new sports ___ (equipment).': {
    why: "'Equipment' is uncountable: it names a whole group of things, so it has no plural.",
    more: "To count it, name the things or use 'a piece of': a piece of equipment.",
    tip: "Never write 'equipments'.",
  },
  'Our school bought new ___ (software) for the computer room.': {
    why: "'Software' is uncountable: it names computer programs as a whole, so it has no plural, even when there are many programs: 'new software'.",
    more: "To count it, name the programs or use 'a piece of': 'a piece of software', 'two apps'. 'Hardware', the machines themselves, is uncountable too.",
    tip: "'Softwares' is a common mistake. Never add an s.",
  },
  'She keeps her ___ (jewellery) in a small box.': {
    why: "'Jewellery' is uncountable: it names a whole group of things, such as rings and necklaces, so it has no plural.",
    more: "'Jewellery' is the British spelling; Americans write 'jewelry'.",
    tip: 'To count it, name the pieces: two rings, three necklaces.',
  },
  'Please put the ___ (cutlery) in the drawer.': {
    why: "'Cutlery' is uncountable: it names the forks, spoons and the rest together, so it has no plural.",
    more: "'Cutlery' is the British word; Americans often say 'silverware'.",
    tip: "Never write 'cutleries'.",
  },
  'She has a lot of ___ (knowledge) about plants.': {
    why: "'Knowledge' is uncountable, so it has no plural: 'a lot of knowledge'.",
    more: "You can say 'a good knowledge of', but never 'knowledges'.",
    tip: "The k at the start is silent: 'NOL-ij'.",
  },
  'You have made good ___ (progress) this term.': {
    why: "'Progress' is uncountable, so it has no plural: 'good progress'.",
    more: "School reports often say 'good progress' or 'excellent progress'. The noun never takes an s.",
    tip: "As a verb, 'progress' can take an s: 'She progresses quickly.' The noun cannot.",
  },
  'The police found new ___ (evidence).': {
    why: "'Evidence' is uncountable, so it has no plural: 'new evidence'.",
    more: "To count it, say 'a piece of evidence' or 'two pieces of evidence'.",
    tip: "Never write 'evidences'.",
  },
  'You need ___ (permission) to leave early.': {
    why: "'Permission' is uncountable here, so it has no plural: 'You need permission'.",
    more: "You ask for permission, give it or get it: 'Can I have permission to go?'",
    tip: "Never write 'permissions' in a sentence like this.",
  },
  'A: Have you heard the ___ (news)? B: Yes, our team won.': {
    why: "'News' is uncountable, even though it ends in s. It is already the whole word, so we write 'the news'.",
    more: "'News' takes a singular verb: 'The news is good.' To count it, say 'a piece of news'.",
    tip: "Do not write 'the new' or 'the newses'.",
  },
  'We saw beautiful ___ (scenery) in the Lake District.': {
    why: "'Scenery' is uncountable, so it has no plural: 'beautiful scenery'.",
    more: 'The Lake District, in north-west England, is famous for its lakes and mountains.',
    tip: "Never write 'sceneries'.",
  },
  'This fridge uses very little ___ (electricity).': {
    why: "'Electricity' is uncountable, and 'very little' goes with uncountable nouns, so it has no plural.",
    more: "'Little' goes with uncountable nouns; 'few' goes with plurals: very little electricity, very few lights.",
    tip: "Never write 'electricities'.",
  },
  'Every ___ (student) in the class has a laptop.': {
    why: "'Every' means each one of a group, so the noun after it is singular: student.",
    more: "'Every' takes a singular verb too: 'Every ... has', not 'have'.",
    tip: "Look for 'every' and 'each' before a gap: they mean no s.",
  },
  'Neither ___ (twin) was at home when I called.': {
    why: "'Neither' means not one and not the other, so the noun after it is singular: twin. 'Was' agrees with it.",
    more: "'Neither' looks at two things one at a time, which is why it takes a singular noun.",
    tip: "Use 'neither' when you mean not one of two.",
  },
  'Each ___ (passenger) must show a ticket.': {
    why: "'Each' looks at the members of a group one at a time, so the noun after it is singular: passenger.",
    more: 'On trains in Britain, a guard may ask to see your ticket.',
    tip: "After 'each', use a singular noun and a singular verb.",
  },
  'One of my ___ (classmate) is from Leeds.': {
    why: "'One of my' picks one from a group, so the noun after it is plural: classmates. The verb agrees with 'one': 'is'.",
    more: "'One of' is always followed by a plural: one of my classmates, one of the teachers.",
    tip: "'One of my classmate' is one of the commonest mistakes in English.",
  },
  'Neither of my ___ (parent) speaks French.': {
    why: "'Neither of my' picks from a group of two, so the noun after it is plural: parents.",
    more: "After 'neither of', the noun is plural but the verb is usually singular: 'Neither of my parents speaks ...'",
    tip: "'Of' is the clue: after 'neither of my', the noun is plural.",
  },
  'Each of the ___ (swimmer) got a medal.': {
    why: "'Each of the' picks from a group, so the noun after it is plural: swimmers.",
    more: "The verb agrees with 'each', not with the plural noun: 'Each of the swimmers gets a medal.'",
    tip: "'Of the' after 'each' or 'one' needs a plural noun.",
  },
  'Both of my ___ (uncle) are teachers.': {
    why: "'Both' means two, so the noun after it is plural: uncles.",
    more: "'Both of my' and 'both my' mean the same, and both take a plural noun.",
    tip: "'Both' always goes with a plural noun and a plural verb.",
  },
  'I need a new pair of ___ (glove) for winter.': {
    why: "'A pair of' means two that go together, so the noun after it is plural: gloves.",
    more: 'Some words are always plural and come in pairs: trousers, jeans, scissors.',
    tip: "'A pair of' is singular, so it takes 'is': 'This pair of gloves is new.'",
  },
  'York is full of ___ (tourist) in summer.': {
    why: "'Full of' with a countable noun needs the plural: tourists. A city cannot be full of one person.",
    more: 'York, in the north of England, has old city walls and a famous cathedral, York Minster.',
    tip: "'Full of' and 'lots of' go with plural nouns you can count.",
  },
  'Several ___ (tree) fell down in the storm.': {
    why: "'Several' means more than two, so the noun after it is plural: trees.",
    more: 'Storms in Britain can bring down trees and power lines.',
    tip: "After 'several', always use a plural noun.",
  },
  'Lost in the park: two black ___ (kitten). Please tell the school office if you see them.': {
    why: "'Two' and 'them' show more than one, so the gap needs the plural: kittens.",
    more: 'Notices like this are short and clear, but they still need the right plural.',
    tip: "In a short text, look for clues before and after the gap, such as 'them'.",
  },
  'Recipe: mix the flour with two ripe ___ (banana).': {
    why: "'Two' means more than one. 'Banana' just adds -s: bananas.",
    more: "'Flour' is uncountable, so it has no plural, but 'banana' can be counted.",
    tip: 'Recipes use plurals with numbers: two bananas, three lemons.',
  },
  'A: How many ___ (pet) do you have? B: Three: a dog, a cat and a rabbit.': {
    why: "'How many' asks about a number, and B's answer is three, so the gap needs the plural: pets.",
    more: "'How many' goes with plural nouns; 'how much' goes with uncountable ones.",
    tip: "Answer a 'how many' question with a number first, as B does.",
  },
  'Our park has two ___ (playground) and a café.': {
    why: "'Two' means more than one. 'Playground' just adds -s: playgrounds.",
    more: 'A word made of two parts takes its plural on the last part: play + grounds.',
    tip: 'Check every noun after a number in your writing.',
  },
}
