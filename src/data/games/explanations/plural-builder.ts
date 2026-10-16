import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Plural Builder: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/plural-builder.ts). Written with AI on 16 October
 * 2026 and checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  book: {
    why: 'Most nouns make the plural by adding -s: one book, two books. Nothing else in the word changes.',
    more: "After a number bigger than one, use the plural: two books, ten books. After 'one', use the singular: one book.",
    tip: 'Check your writing for numbers. A number above one needs a plural noun: three books, not three book.',
  },
  car: {
    why: "'Car' ends in -r, so we just add -s: one car, two cars. Nothing else changes.",
    more: "The ending -s has two sounds. It sounds like 's' in 'books' and like 'z' in 'cars'. You always write the same letter, s.",
    tip: 'Learn this simple rule first. Then keep a list of the exceptions as you meet them, such as bus, baby and child.',
  },
  dog: {
    why: "'Dog' ends in -g, so we add -s: one dog, two dogs.",
    more: 'Many animals are regular: one cat, two cats; one bird, two birds. Some are not: mouse, mice; sheep, sheep; fish, fish.',
    tip: 'When you describe pets, count them with the plural: I have two dogs and three cats.',
  },
  table: {
    why: "'Table' ends in a silent -e, so we just add -s: tables. We do not take the e away or write it twice.",
    more: 'Words that end in a silent -e only need -s: one phone, two phones; one apple, two apples; one house, two houses.',
    tip: "Do not write 'tablees' or 'tabls'. Add -s and keep the e: tables.",
  },
  apple: {
    why: "'Apple' ends in a silent -e, so we add -s: apples. Nothing else changes.",
    more: "Remember to drop 'a' and 'an' in the plural: an apple, but three apples. The word 'an' goes away.",
    tip: 'When you write a shopping list, use the plural: apples, bananas, oranges.',
  },
  window: {
    why: "'Window' ends in -w, so it follows the simple rule: add -s. The plural is windows.",
    more: 'Words that end in -ow follow the simple rule too: window, windows; pillow, pillows; elbow, elbows.',
    tip: 'Keep the w before the s: windows, not windoes.',
  },
  phone: {
    why: "'Phone' ends in a silent -e, so we just add -s: phones.",
    more: 'Words that end in -one follow the same simple rule: one phone, two phones; one stone, two stones; one bone, two bones.',
    tip: "Say it aloud: phones. If you can hear only a simple 's' or 'z' at the end, you only need to add -s.",
  },
  chair: {
    why: "'Chair' ends in -r, so we just add -s: chairs. Put the s at the very end of the word.",
    more: "Furniture words are mostly regular: chair, chairs; table, tables; bed, beds. But 'furniture' itself has no plural. We say 'some furniture', not 'furnitures'.",
    tip: 'To count furniture, count the single pieces: two chairs and a table. Do not say two furnitures.',
  },
  bus: {
    why: "'Bus' ends in -s. Adding only s would make 'buss', which sounds just like 'bus', so nobody would hear the plural. We add -es: buses. We say 'bus-iz'.",
    more: "Words that end in s, x, z, ch or sh all add -es. The extra 'e' makes a new sound, 'iz', so you can hear the plural.",
    tip: "Say it aloud to check. If the plural adds a new 'iz' sound and the word does not end in -e, write -es. House and rose already have the e, so they add only s.",
  },
  box: {
    why: "'Box' ends in -x, so we add -es: boxes. We say 'box-iz'.",
    more: 'The letter x already has a hissing sound, so the plural needs an extra vowel to be easy to say. Other x words: fox, foxes; tax, taxes.',
    tip: "Do not write 'boxs'. Most words that end in x take -es: boxes, foxes, taxes.",
  },
  watch: {
    why: "'Watch' ends in -ch, so we add -es: watches. We say 'watch-iz'.",
    more: "Words that end in a 'ch' sound add -es: watch, watches; church, churches; sandwich, sandwiches. Be careful: 'stomach' ends in a 'k' sound, so it takes -s: stomachs.",
    tip: "'Watch' can be a noun or a verb. The ending is the same: two watches (noun), he watches (verb).",
  },
  dish: {
    why: "'Dish' ends in -sh, so we add -es: dishes. We say 'dish-iz'.",
    more: "The same rule works for verbs: he washes the dishes, she wishes for a gift. The ending -es sounds like 'iz' in both.",
    tip: 'Use it at home: Please wash the dishes. There are three dishes on the table.',
  },
  glass: {
    why: "'Glass' ends in -ss, so we add -es: glasses. We say 'glass-iz'.",
    more: "'Glasses' also means the glasses you wear to see better. That meaning is always plural: a pair of glasses, my glasses.",
    tip: "For glasses you wear, say 'a pair of glasses'. For things you drink from, say 'two glasses'.",
  },
  brush: {
    why: "'Brush' ends in -sh, so we add -es: brushes. We say 'brush-iz'.",
    more: 'Other words that end in -sh take -es too: bush, bushes; wish, wishes; crash, crashes.',
    tip: "Do not write 'brushs'. After sh, always add -es.",
  },
  fox: {
    why: "'Fox' ends in -x, so we add -es: foxes. We say 'fox-iz'.",
    more: 'Check the ending of an animal word first. Fox, foxes follows the -x rule. But wolf, wolves changes f to v, and mouse, mice is irregular.',
    tip: "Test it: add only -s and say it. 'Foxs' would sound just like 'fox', so it needs -es to show the plural.",
  },
  beach: {
    why: "'Beach' ends in -ch, so we add -es: beaches. We say 'beech-iz'.",
    more: "Other words that end in a 'ch' sound add -es: bench, benches; church, churches; lunch, lunches.",
    tip: 'When you write about a holiday, remember: one beach, two beaches; one bench, two benches.',
  },
  class: {
    why: "'Class' ends in -ss, so we add -es: classes. We say 'class-iz'.",
    more: 'Words that end in -ss always take -es: class, classes; kiss, kisses; address, addresses.',
    tip: "Write 'classes'. Do not put an apostrophe before the s: an apostrophe shows that something belongs to someone, and it is not used to make plurals like this.",
  },
  baby: {
    why: "'Baby' ends in b + y, a consonant before the y. We change the y to i and add -es: babies.",
    more: 'Look at the letter before the y. If it is a consonant (b, c, d, and so on), change y to ies. If it is a vowel (a, e, i, o, u), only add s: boys.',
    tip: "Check the letter before y every time. 'Baby' has a b before the y, so the plural is babies, never babys.",
  },
  city: {
    why: "'City' ends in t + y, a consonant before the y. We change the y to i and add -es: cities.",
    more: "Many words for places follow this rule: city, cities; country, countries. The ending is said 'eez' in the plural: 'sit-eez'.",
    tip: "'Citys' is always wrong. When a word ends in a consonant and y, write ies.",
  },
  story: {
    why: "'Story' ends in r + y, a consonant before the y. We change the y to i and add -es: stories.",
    more: 'Verbs follow the same rule: he studies, she tries, it carries. The y changes to i before -es.',
    tip: 'When you write about books, remember: one story, two stories, many stories.',
  },
  party: {
    why: "'Party' ends in t + y, a consonant before the y. We change the y to i and add -es: parties.",
    more: 'Here is a quick test. Is the letter before y a consonant? Then drop the y and write ies: party, parties; lorry, lorries; fly, flies.',
    tip: "'Partys' is a common mistake. Remember: consonant + y becomes ies.",
  },
  country: {
    why: "'Country' ends in r + y, a consonant before the y. We change the y to i and add -es: countries.",
    more: "Compare two words. 'Country' (r + y) becomes 'countries', but 'key' (e + y) becomes 'keys'. Only a consonant before the y makes the change.",
    tip: "When you write about the world, you will use 'countries' a lot. Learn its spelling letter by letter: c-o-u-n-t-r-i-e-s.",
  },
  family: {
    why: "'Family' ends in l + y, a consonant before the y. We change the y to i and add -es: families.",
    more: "Do not mix up a plural and an owner. 'Family's' (with an apostrophe) shows that something belongs to one family. 'Families' is the plural.",
    tip: "Write 'two families'. Do not put an apostrophe before the s: an apostrophe shows that something belongs to someone.",
  },
  lady: {
    why: "'Lady' ends in d + y, a consonant before the y. We change the y to i and add -es: ladies.",
    more: "'Ladies' is also written on the door of a women's toilet. 'Ladies and gentlemen' is a polite, formal way to speak to a group.",
    tip: "Use 'ladies' with a plural verb: The ladies are here.",
  },
  boy: {
    why: "'Boy' ends in o + y, a vowel before the y. When the letter before the y is a vowel (a, e, i, o, u), we just add -s: boys.",
    more: "Compare 'baby' and 'boy'. Baby has a consonant before the y, so it becomes babies. Boy has a vowel before the y, so it stays boys.",
    tip: 'Test every y word: look at the letter before the y. A vowel? Then just add s.',
  },
  key: {
    why: "'Key' ends in e + y, a vowel before the y. We just add -s: keys. The y stays.",
    more: "Do not write 'keies' or 'keyes'. With a vowel before the y, the y stays: key, keys; donkey, donkeys; valley, valleys.",
    tip: "Think of the question 'Where are my keys?' and you will remember that keys ends in -ys.",
  },
  day: {
    why: "'Day' ends in a + y, a vowel before the y. We just add -s: days. The y stays.",
    more: 'Days of the week add -s too: Mondays, Tuesdays. We use them for repeated events: I swim on Mondays means every Monday.',
    tip: 'Use the plural of a day when something happens every week: I have English on Wednesdays.',
  },
  toy: {
    why: "'Toy' ends in o + y, a vowel before the y. We just add -s: toys. The y stays.",
    more: "Other words that end in -oy work the same way: boy, boys; cowboy, cowboys. The verb 'enjoy' adds -s too: she enjoys.",
    tip: "Use 'toys' to talk about play: The children have many toys.",
  },
  monkey: {
    why: "'Monkey' ends in e + y, a vowel before the y. We just add -s: monkeys. The y stays.",
    more: 'Many animal words end in -ey: monkey, monkeys; donkey, donkeys; turkey, turkeys. They all add only -s.',
    tip: "Do not write 'monkies'. The letter before y is e, so keep the y: monkeys.",
  },
  leaf: {
    why: "'Leaf' ends in -f. We change the f to v and add -es: leaves. The sound changes too: 'leef' becomes 'leevz'.",
    more: 'Not every -f word changes. Some just add s: roof, roofs; chief, chiefs; cliff, cliffs. Learn the common changing words as a list.',
    tip: "Trees have leaves in summer. Say 'a leaf' for one and 'leaves' for more than one.",
  },
  knife: {
    why: "'Knife' ends in -fe. We change the fe to ves: knives. The sound changes from 'f' to 'v', so we say 'nyvz'.",
    more: "Other -fe words change in the same way: life, lives; wife, wives. At a table you may need 'knives and forks'.",
    tip: "Learn 'knife' and 'knives' as a pair, and say them aloud to hear the f become v.",
  },
  wife: {
    why: "'Wife' ends in -fe. We change the fe to ves: wives. The sound changes from 'f' to 'v', so we say 'wyvz'.",
    more: "Most family words just add -s: husband, husbands; daughter, daughters; sister, sisters. 'Wife' changes to 'wives', and 'child' changes to 'children'.",
    tip: "Do not write 'wifes'. Think: one wife, two wives.",
  },
  wolf: {
    why: "'Wolf' ends in -f. We change the f to v and add -es: wolves. The sound changes from 'f' to 'v'.",
    more: "Wolf ends in -lf, like 'half' and 'shelf'. All three change to -lves: wolves, halves, shelves.",
    tip: "In stories about animals you will often read 'wolves'. Learn it together with 'wolf'.",
  },
  shelf: {
    why: "'Shelf' ends in -f. We change the f to v and add -es: shelves. We say 'shelvz'.",
    more: 'A short list to learn: leaf, leaves; shelf, shelves; wolf, wolves; half, halves. They all change f to v.',
    tip: 'In a classroom you can say: The books are on the shelves.',
  },
  thief: {
    why: "'Thief' ends in -f. We change the f to v and add -es: thieves. We say 'theevz'.",
    more: "The letters ie stay in the plural: thief, thieves. Compare 'chief', which only adds s: chiefs.",
    tip: "Use 'thieves' with a plural verb: The thieves were caught.",
  },
  half: {
    why: "'Half' ends in -f. We change the f to v and add -es: halves. We say 'harvz'.",
    more: 'We use half for equal parts: one half, two halves. In football, a match has two halves.',
    tip: "Use 'halves' for equal parts: Cut the apple into two halves.",
  },
  life: {
    why: "'Life' ends in -fe. We change the fe to ves: lives. The f sound changes to v, so the plural rhymes with 'dives'.",
    more: "Be careful: 'lives' is also a verb, as in 'He lives in London', which rhymes with 'gives'. The plural noun rhymes with 'dives'.",
    tip: "Say the plural noun 'lives' like 'dives', and the verb 'lives' like 'gives'.",
  },
  tomato: {
    why: "'Tomato' ends in -o. Some words that end in -o add -es, and this is one of them: tomatoes.",
    more: 'Learn the short list: tomato, potato, hero, echo. Other -o words only add s: photo, photos; piano, pianos; zoo, zoos.',
    tip: 'When you write a shopping list, check each -o word: tomatoes and potatoes, but photos.',
  },
  potato: {
    why: "'Potato' ends in -o, and it is one of the words that add -es: potatoes. We say 'puh-TAY-tohz'.",
    more: 'Tomato and potato are food words that take -es. Words that end in a vowel plus o only add s: radio, radios; video, videos.',
    tip: "Tomatoes and potatoes both have 'oes' at the end. Say the two words together to remember them.",
  },
  hero: {
    why: "'Hero' ends in -o. It is one of the words that add -es: heroes. The e shows the plural.",
    more: 'Not every -o word adds -es: photo, photos; piano, pianos. When you are not sure, check a dictionary. It shows the plural of each noun.',
    tip: 'Learn these -oes words as a group: heroes, tomatoes, potatoes, echoes.',
  },
  child: {
    why: "'Child' has an old plural, children. We do not just add -s. We add -ren, and the vowel sound changes too: 'child' (chyld) becomes 'children' (chil-dren).",
    more: "'Children' already means more than one, so never add another s: not 'childrens'. You may add an apostrophe and s to show who owns something: the children's toys.",
    tip: "Write 'two children', not 'two childs'. You will see 'children' very often on school notices.",
  },
  foot: {
    why: "'Foot' changes the vowels inside the word: oo becomes ee. The plural is feet. We do not add -s.",
    more: 'Some plurals change the vowels inside the word: foot, feet; tooth, teeth; goose, geese; man, men. These are very old words, so you must learn each pair.',
    tip: "Use 'feet' for the body part (two feet) and also for height: six feet tall.",
  },
  mouse: {
    why: "'Mouse' changes inside the word: the plural is mice. We do not add -s. 'Mice' rhymes with 'rice'.",
    more: "'Mouse' and 'house' look alike, but they have different plurals: mice, houses. Learn each pair on its own. For computer mice, 'mice' is the usual plural too.",
    tip: "For the animal, write 'two mice', never 'two mouses'.",
  },
  person: {
    why: "'Person' has a different word for the plural: people. We do not add -s. 'People' means more than one person.",
    more: "'People' takes a plural verb: The people are happy. The word 'persons' exists, but only in formal or legal writing. In everyday English, use 'people'.",
    tip: "Write 'three people', not 'three persons'. Use 'people' when you count: five people.",
  },
  tooth: {
    why: "'Tooth' changes the vowels inside the word: oo becomes ee. The plural is teeth. We do not add -s.",
    more: 'The same change happens in foot and feet, and in goose and geese. The pattern is oo to ee.',
    tip: "Use 'teeth' for health topics: Brush your teeth twice a day.",
  },
  man: {
    why: "'Man' changes the vowel: a becomes e. The plural is men. We do not add -s.",
    more: "Job words that end in -man change in the same way: postman, postmen; businessman, businessmen. 'Woman' and 'women' make a pair with it.",
    tip: "In speaking, 'man' and 'men' sound different, with an 'a' sound and an 'e' sound. Say them aloud to hear the vowel.",
  },
  woman: {
    why: "'Woman' changes a vowel in the last part: a becomes e. The plural is women. We do not add -s.",
    more: "The spelling and the sound do not match. 'Women' is said 'WIM-in', with an 'i' sound at the start. Listen to a recording to hear it.",
    tip: "Write 'women' with an e in the last part. Remember: one woman, two women.",
  },
  goose: {
    why: "'Goose' changes the vowels inside the word: oo becomes ee. The plural is geese. We do not add -s.",
    more: 'A young goose is a gosling, and geese flying together make a flock. Notice the pairs: goose, geese; foot, feet; tooth, teeth.',
    tip: "Do not write 'gooses'. Think of tooth and teeth: the oo becomes ee.",
  },
  sheep: {
    why: "'Sheep' has the same form in the singular and the plural: one sheep, two sheep. We do not add -s.",
    more: "Some animals stay the same: sheep, deer, fish. The verb tells you the number: 'The sheep is in the field' (one) and 'The sheep are in the field' (many).",
    tip: "Look at the verb or the number to see if 'sheep' means one or many: one sheep is, two sheep are.",
  },
  fish: {
    why: "'Fish' usually has the same form in the singular and the plural: one fish, two fish. We do not add -s.",
    more: "Some writers use 'fishes', but only for different kinds of fish, for example the fishes of the Pacific. In everyday English, use 'fish'.",
    tip: "Say 'I have three fish', not 'three fishes'. The verb shows the number: The fish are in the lake.",
  },
  deer: {
    why: "'Deer' has the same form in the singular and the plural: one deer, two deer. We do not add -s.",
    more: 'A group of deer is called a herd. The verb helps you see the number: A deer is running. Three deer are running.',
    tip: "Do not write 'deers'. The verb or the number shows whether the writer means one or many.",
  },
  aircraft: {
    why: "'Aircraft' has the same form in the singular and the plural: one aircraft, two aircraft. We do not add -s.",
    more: "'Aircraft' means planes, helicopters and other flying machines. The words 'spacecraft' and 'hovercraft' also stay the same in the plural.",
    tip: "In the news you will read 'ten aircraft landed'. Do not add an s.",
  },
  series: {
    why: "'Series' has the same form in the singular and the plural: one series, two series. It already ends in s, so we do not add -es.",
    more: "A series is a set of connected things, such as a television series with many episodes. 'Species' also stays the same: one species, two species.",
    tip: "Do not write 'serieses'. The verb or the number shows the meaning: a series is, three series are.",
  },
  nucleus: {
    why: "'Nucleus' comes from Latin. In the plural we change -us to -i: nuclei. The final i sounds like the word 'eye': 'NEW-klee-eye'.",
    more: "'Nucleus' is a science word: the nucleus of a cell or of an atom. You will meet the plural in science lessons: the nuclei of the cells.",
    tip: "Learn the pair together: nucleus, nuclei. In school science, always use 'nuclei' for the plural.",
  },
  stimulus: {
    why: "'Stimulus' comes from Latin. In the plural we change -us to -i: stimuli. The final i sounds like the word 'eye': 'STIM-yoo-lye'.",
    more: 'A stimulus is something that makes a person or an animal react, such as a loud noise. You may read the plural in science or psychology: different stimuli.',
    tip: 'Learn the pair together: stimulus, stimuli. Compare nucleus, nuclei: both change -us to -i.',
  },
  analysis: {
    why: "'Analysis' comes from Greek. In the plural we change -is to -es: analyses. We say 'uh-NAL-uh-seez'.",
    more: "The word 'analyses' is also a verb in British English: He analyses the data. The sentence shows which one it is: two analyses (noun) or he analyses (verb).",
    tip: "Learn the pair together: analysis, analyses. In exams you may write 'two analyses'.",
  },
  crisis: {
    why: "'Crisis' comes from Greek. In the plural we change -is to -es: crises. We say 'KRY-seez'.",
    more: 'A crisis is a very difficult or dangerous time. You will see the plural in the news: financial crises, political crises.',
    tip: 'Learn the pair together: crisis, crises. It follows the same pattern as analysis, analyses.',
  },
  criterion: {
    why: "'Criterion' comes from Greek. In the plural we change -on to -a: criteria. A criterion is one standard that we use to judge something.",
    more: "Many people use 'criteria' for one thing by mistake. Remember: one criterion, two criteria. Another pair with the same change: phenomenon, phenomena.",
    tip: "In writing about exams or jobs, say 'the criteria are' (plural) and 'the criterion is' (one).",
  },
  phenomenon: {
    why: "'Phenomenon' comes from Greek. In the plural we change -on to -a: phenomena. A phenomenon is something that happens or exists, especially in nature.",
    more: 'Nature gives many examples: rainbows, thunder and eclipses are natural phenomena. One example is a natural phenomenon: a rainbow.',
    tip: 'Learn the pair together: phenomenon, phenomena. It has the same pattern as criterion, criteria.',
  },
}
