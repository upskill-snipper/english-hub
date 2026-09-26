import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'

/**
 * Animal Farm, Chapter 10: the pigs walk on two legs, the Commandments shrink
 * to one, and the evening with the neighbouring farmers ends the novella.
 *
 * HOW IT WAS CHECKED (26 September 2026). Every quotation, in closeReading and
 * inside double quotation marks in the prose, was located in the held edition
 * (src/data/full-texts/animal-farm.ts, the Project Gutenberg Australia text)
 * with the same normalisation chapter-guides.test.ts uses, and its chapter
 * read from the section it was found in. Quotations from Chapters 1 to 9 are
 * used only in the prose, where the test checks them against the whole book.
 *
 * OUTSIDE WORDS ARE IN SINGLE QUOTATION MARKS. Orwell's words from his letter
 * to Dwight Macdonald and his Ukrainian preface are not in the novella, so they
 * are set in single curly marks, which the test does not treat as quotations
 * from the book. Each is from a page fetched on the day and listed in sources.
 * The Ukrainian preface survives only as a translation back from the
 * Ukrainian, and the context note says so.
 *
 * EDITION QUIRKS AVOIDED. The held text reads "richer-except" with a hyphen
 * where printed editions have a dash, "tatted wall" for "tarred wall", and
 * "with in the lifetime". None of those words is quoted here; the one phrase
 * that crosses the hyphen is quoted from "except" onwards.
 *
 * Nothing in this file prints a passage: the longest quotation is the final
 * sentence's last 25 words, in closeReading.
 *
 * CORRECTED ON REVIEW (26 September 2026). The first draft misread three
 * things the next writer could easily reintroduce:
 * - The older animals try to recall whether things were better or worse in
 *   the early days of the Rebellion, just after Jones was expelled, not under
 *   Jones. The chapter says so in as many words.
 * - The capitals in "BETTER" and "BON MOT" are this edition's typography: it
 *   prints every stressed word in capitals (YOUR, WOULD, EXCESS, WITHOUT
 *   CAUSE), so they are not evidence of what Orwell's printer did.
 * - The chapter never calls the farmhouse scene a dinner and never says who
 *   cheated. There is beer, a game of cards and two aces of spades; at least
 *   one player has cheated, and the text leaves it there. Pilkington is not
 *   the "guest of honour": Napoleon has the seat of honour.
 */
export const chapter: ChapterGuide = {
  slug: 'animal-farm',
  chapter: 10,
  part: 'Chapter 10',
  title: 'Pigs and Men',
  atAGlance:
    "Years pass, and the farm grows richer while its animals do not. The pigs rise onto two legs, carry whips and cut the Seven Commandments down to one, and when the neighbouring farmers gather in the farmhouse Napoleon restores the name The Manor Farm. The novella ends with the animals at the window unable to tell pig from man: the revolution has come full circle, with new masters in the old one's place.",

  summary: [
    "Years pass. A time comes when nobody remembers the days before the Rebellion except Clover, Benjamin, Moses the raven and a number of the pigs. Muriel is dead, and so are the dogs Bluebell, Jessie and Pincher; Mr Jones has died in an inebriates' home. Snowball is forgotten, and so is Boxer, except by the few who knew him. Clover is “two years past the retiring age”, but no animal has ever actually retired, and the talk of a corner of pasture “for superannuated animals” has long been dropped. Napoleon is now “a mature boar of twenty-four stone”, Squealer is so fat he can hardly see out of his eyes, and Benjamin, greyer about the muzzle, has been “more morose and taciturn than ever” since Boxer's death. Many animals have been born or bought since the Rebellion. Besides Clover there are now three horses, willing workers who cannot learn the alphabet beyond B and accept everything they are told about the Rebellion.",
    "The farm is more prosperous. The windmill has been finished at last, but it mills corn for a money profit instead of generating electricity, and the animals are building another, which is supposed to get the dynamos. The stalls with electric light and hot and cold water, and the three-day week, of which Snowball once taught the animals to dream, are no longer mentioned: Napoleon calls such ideas contrary to the spirit of Animalism, and says the truest happiness lies in working hard and living frugally. The farm has grown richer without making the animals any richer, “except, of course, for the pigs and the dogs”, who produce no food “by their own labour”. Squealer explains that the pigs work every day on files, reports, minutes and memoranda, sheets of writing that are “burnt in the furnace” as soon as they are filled. The other animals are hungry, sleep on straw and labour in the fields. The older ones try to work out whether things were better or worse in the early days of the Rebellion, soon after Jones was driven out, and cannot remember; they have nothing to go on but Squealer's figures, which always show everything “getting better and better”. Only Benjamin claims to remember every detail, and he holds that hunger, hardship and disappointment are “the unalterable law of life”.",
    'Yet the animals never lose hope, or their pride in belonging to the only farm in England owned and run by animals. They talk of the old heroic days, still believe in the Republic of the Animals that Major foretold, and perhaps hum Beasts of England in secret, though nobody would dare to sing it aloud. Whatever their hardships, they tell themselves, no creature among them walks on two legs, none calls another Master, and all animals are equal. Then, one day in early summer, Squealer leads the sheep off to a patch of waste ground overgrown with birch saplings and keeps them there for a week, teaching them, he says, a new song for which privacy is needed.',
    "One evening, just after the sheep return, Clover's “terrified neighing” brings the animals running into the yard. Squealer is walking on his hind legs, a little awkwardly but with perfect balance. A moment later a long file of pigs comes out of the farmhouse, all on their hind legs, one or two of them a little unsteady, and last comes Napoleon, “majestically upright”, to a baying of dogs and the crowing of the black cockerel, with a whip in his trotter. At the one moment when the animals might have protested, the sheep burst out with “Four legs good, two legs BETTER!” and keep it up for five minutes, until the pigs have gone back indoors. Clover leads Benjamin to the end of the big barn, where the Seven Commandments were written, and asks whether the wall has changed. For once Benjamin breaks his rule and reads it to her. Only a single Commandment is left: “ALL ANIMALS ARE EQUAL BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS”. After that, nothing seems strange: not the whips the supervising pigs carry next day, nor the wireless set, the plans for a telephone and the subscriptions to John Bull, Tit-Bits and the Daily Mirror, nor Napoleon smoking a pipe in the garden, nor the pigs dressed in Mr Jones's clothes, with Napoleon's favourite sow in the watered silk dress Mrs Jones used to wear on Sundays.",
    'A week later a deputation of neighbouring farmers tours the farm and admires everything, especially the windmill, while the animals weed the turnip field, unsure whether to be more frightened of the pigs or of the visitors. That evening, drawn by laughter and singing, the animals creep into the farmhouse garden, Clover leading, and look in at the dining-room window. Six farmers and six of the more eminent pigs sit round the long table, Napoleon at its head; they have broken off a game of cards to drink a toast, and the mugs are being refilled with beer. Mr Pilkington of Foxwood rises to speak. The long period of mistrust is over, he says: he has found on Animal Farm “a discipline and an orderliness which should be an example to all farmers everywhere”, and the lower animals there do more work and receive less food than any animals in the county. Between pigs and humans there is no clash of interests, for the labour problem is the same everywhere, and he delivers his prepared joke: “If you have your lower animals to contend with ... we have our lower classes!” He toasts “the prosperity of Animal Farm”.',
    "Napoleon's reply, “short and to the point” like all his speeches, welcomes the end of misunderstanding. The rumours that he and his colleagues were revolutionaries, spread by “some malignant enemy”, are false: the pigs wish only “to live at peace and in normal business relations with their neighbours”. The farm is “a co-operative enterprise” whose title-deeds, “in his own possession”, belong to the pigs jointly. To build confidence further, the animals will no longer call one another Comrade, the Sunday march past the boar's skull is ended and the skull buried, and the hoof and horn have been removed from the flag. Last, he abolishes the name Animal Farm: it is to be The Manor Farm again, which he calls its correct and original name. As the company drink the new toast, the animals outside see something in the pigs' faces “melting and changing”. They creep away, but within twenty yards an uproar calls them back to the window. The trouble seems to be that Napoleon and Mr Pilkington have each played an ace of spades at the same time. Twelve voices are shouting in anger, all alike, and as the animals look from pig to man and back again, it is already impossible to say which is which.",
  ],

  keyEvents: [
    'Years pass, and almost no one is left who remembers life before the Rebellion: Boxer and Snowball are forgotten, and the older animals cannot remember whether things were better or worse in the early days of the Rebellion.',
    'The farm grows richer but only the pigs and dogs gain from it: the windmill mills corn for profit, and the electric light, hot water and three-day week Snowball taught the animals to dream of are dropped.',
    'Squealer takes the sheep away for a week, saying he is teaching them a new song.',
    "Squealer, then a file of pigs, then Napoleon with a whip, walk upright across the yard, and the sheep's new slogan drowns the one moment when the animals might have protested.",
    'Benjamin breaks his rule to read Clover the barn wall, where a single Commandment is left, declaring that some animals are more equal than others.',
    "The pigs take up the last of the habits Major forbade, from Mr Jones's clothes to Napoleon's pipe, and nothing seems strange any more.",
    "When the neighbouring farmers gather in the farmhouse, Mr Pilkington praises the animals' long hours and low rations, and Napoleon announces that the word Comrade is to go, Major's skull has been buried, the hoof and horn are gone from the flag, and the farm is The Manor Farm again.",
    'A quarrel over two aces of spades ends the novella: from the window, the animals can no longer tell pig from man.',
  ],

  closeReading: [
    {
      quote:
        'No creature among them went upon two legs. No creature called any other creature “Master.” All animals were equal.',
      technique: 'Anaphora and free indirect style, building dramatic irony',
      analysis:
        "These short declaratives close a paragraph told in free indirect style, so the narrator speaks the animals' proud creed in their own simple terms. The repeated “No creature” builds certainty, and each sentence restates a founding belief of the Rebellion. Orwell places them just before the pigs walk on two legs, Napoleon takes up a master's whip and equality itself is rewritten, so the reader watches all three beliefs overturned, in order, within a few pages. The animals' faith is sincere; what it describes has already gone.",
    },
    {
      quote: 'It was a pig walking on his hind legs.',
      technique: 'One-sentence paragraph and delayed naming',
      analysis:
        'Orwell sets the sentence alone as a paragraph and names the species before the individual: the animals, like the reader, first see simply “a pig”, breaking the rule that once defined an enemy. Only the next paragraph adds “Yes, it was Squealer”. The flat wording, with no word of comment to steer the reaction, lets the shock land as the animals feel it. Fittingly, the first to stand is the propagandist who has spent the novella preparing them to accept whatever the pigs did.',
    },
    {
      quote: 'He carried a whip in his trotter.',
      technique: 'Symbolism, in a second one-sentence paragraph',
      analysis:
        "The whip is the emblem of human rule. Jones and his men lashed out with whips in Chapter 2, and after the Rebellion “So were the whips” thrown on the fire; Beasts of England promised “Cruel whips no more shall crack”, and in Chapter 7 Clover pictured animals “set free from hunger and the whip”. Putting the human tool in a “trotter”, an animal's foot, makes the image grotesque. Standing alone, the sentence shows that Napoleon has taken over not only Jones's house but his means of control.",
    },
    {
      quote: 'Four legs good, two legs BETTER!',
      technique: 'Slogan reversal by one substituted word',
      analysis:
        "Snowball's maxim from Chapter 3, “Four legs good, two legs bad”, survives word for word except its last, and the stress on the new word, set in capitals in this edition, turns it into a shout. The sheep learnt the old maxim by heart and bleated it for hours without tiring, so it can be turned inside out and bleated just as happily. The timing is exact: it begins “as though at a signal” at the one moment the animals might have protested, and lasts five minutes. Squealer's week of private lessons now makes sense: even the noise was rehearsed.",
    },
    {
      quote: 'ALL ANIMALS ARE EQUAL BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS',
      technique: 'Paradox',
      analysis:
        "Equality has no degrees, so “more equal” cannot make sense, and that is Orwell's point: the regime no longer needs its words to be true, only unchallenged. The sentence keeps the Seventh Commandment whole and adds a clause that empties it, as each earlier alteration added two words that opened a loophole. It is also the only rule left on the wall. The Commandments of Chapter 2 were to form “an unalterable law”; the one thing now unalterable is the pigs' power.",
    },
    {
      quote: 'If you have your lower animals to contend with ... we have our lower classes!',
      technique: 'Parallelism, in a joke that states the allegory',
      analysis:
        "Pilkington's witticism sets “lower animals” beside “lower classes”, and the balanced sentence says openly what the fable has left the reader to infer: the farm animals stand for working people, and the pigs now manage them exactly as human owners manage theirs. The table roars. Orwell gives the book's plainest statement of its class argument to a laughing guest, and the laughter shows the rulers, pig and human, treating the workers' hunger as a shared achievement rather than a shame.",
    },
    {
      quote:
        'Henceforward the farm was to be known as “The Manor Farm”—which, he believed, was its correct and original name.',
      technique: 'Reported speech and circular structure',
      analysis:
        "The novella opened on “Mr. Jones, of the Manor Farm”, and in Chapter 2 Snowball painted the old name out on the gate. Napoleon now restores it, and the modest “he believed” lets him pose as a stickler for accuracy while undoing one of the Rebellion's first acts. In Chapter 4 the neighbours “insisted on calling it the Manor Farm”; Napoleon hands the humans the name they always used. Reported speech keeps his words at a distance, so the circle closes as an announcement over beer, not a defeat.",
    },
    {
      quote:
        'from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which',
      technique: 'Repetition and chiasmus in the final sentence',
      analysis:
        "The looks go back and forth three times, and the reversed order of “from man to pig” imitates eyes searching and failing. Since the second toast the pigs' faces have seemed to be “melting and changing”; now the question is settled. “Already” suggests the change was complete before anyone noticed, and “impossible” allows no hope of telling them apart. The sentence ends on “which”, a word with no name attached: the rulers are interchangeable. It answers Major's warning in Chapter 1, “we must not come to resemble him”.",
    },
  ],

  characters: [
    {
      name: 'Napoleon',
      development:
        "Now “a mature boar of twenty-four stone”, Napoleon completes his change into the thing the Rebellion overthrew. He walks “majestically upright” with a whip, smokes a pipe in the garden, wears Mr Jones's black coat and ratcatcher breeches, and takes the head of the table. His speech to the farmers is “short and to the point” like all his speeches, and his most revealing. He denies that the pigs ever tried to stir up rebellion on other farms, though in Chapter 4 he and Snowball sent pigeons out every day to do exactly that. He calls the farm a co-operative whose title-deeds happen to be in his own possession, and he dismantles the Rebellion's symbols: the word Comrade, Major's skull, the hoof and horn on the flag, the name. The march past the skull, begun under his own rule in Chapter 5, he now calls “a very strange custom, whose origin was unknown”. He ends the novella quarrelling over two aces of spades with Mr Pilkington, whose mug he clinked earlier that evening: one of them, or both, has cheated, and Orwell does not say which.",
    },
    {
      name: 'Squealer',
      development:
        "So fat that he can hardly see out of his eyes, Squealer is still the voice of the regime in the first half of the chapter. He explains the pigs' mysterious paperwork, produces figures that always show improvement, and spends a week with the sheep training the slogan that will drown any protest. Then he becomes the first pig to walk on two legs, and after that he is not heard again. One reading is that once the pigs rule openly, persuasion is no longer needed: the propagandist's last act is to embody the change he prepared the animals to accept.",
    },
    {
      name: 'Clover',
      development:
        "Clover is one of the last links to the Rebellion's beginning. Two years past the retiring age, she still works, and the new horses give her “an almost filial respect”. It is her “terrified neighing” that calls the animals to see the pigs walking; she leads Benjamin to the barn wall, admitting “My sight is failing”, and asks whether the Commandments have changed; and she leads the animals into the garden to watch the farmers and pigs at the table. Her failing sight becomes the lens of the final scene: “Clover's old dim eyes flitted from one face to another”. She notices and asks, as she did about the Commandments in Chapters 6 and 8, but she cannot read and cannot act, and her question is answered only by what she sees.",
    },
    {
      name: 'Benjamin',
      development:
        "Benjamin is “much the same as ever”, only greyer, and “more morose and taciturn than ever” since Boxer's death. He alone claims to remember everything, and his verdict is bleak: hunger, hardship and disappointment are “the unalterable law of life”. When Clover asks him to read the wall, he “consented to break his rule” for once. In Chapter 8 he “refused to meddle in such matters” and Muriel read for her; now Muriel is dead. When he last broke his rule, in Chapter 9, he read the side of the knacker's van too late to save Boxer, and again the truth he reads out comes when nothing can be done. His cynicism is half right: the animals' lives have not improved, but the pigs' have been transformed.",
    },
    {
      name: 'The sheep',
      development:
        "The sheep are the regime's noise. Taken away for a week and trained in private, they burst into “Four legs good, two legs BETTER!” exactly when protest might begin, as their bleating ended discussion in Chapters 5 and 7. Nothing suggests they notice that the slogan now says the opposite of what they chanted for years: repetition has replaced meaning.",
    },
    {
      name: 'Mr Pilkington',
      development:
        "Described in Chapter 4 as “an easy-going gentleman farmer”, and the sender of the note “Serves you right” when Frederick attacked in Chapter 8, Pilkington now sits at Napoleon's table and proposes the toast. His speech, full of polite hedging, finds that the pigs have achieved what every farmer wants: more work for less food. He congratulates them on “the low rations, the long working hours” and the absence of pampering, and his joke about the lower classes shows that class, not species, decides whose side he is on. He ends the book playing the same card as Napoleon.",
    },
    {
      name: 'The other animals',
      development:
        'Many of them born or bought since the Rebellion, the ordinary animals still feel “honour and privilege” in belonging to the only farm run by animals, and still believe the Republic of the Animals is coming. Their hope is real but has no memory behind it, so they cannot measure the present against the past. They watch everything, in the yard and at the window, and do nothing; they creep away from the window and are drawn back only by the noise. The novella leaves them outside, looking in.',
    },
  ],

  themes: [
    {
      theme: 'Revolution and Betrayal',
      development:
        "Chapter 10 completes the betrayal: the pigs now do everything Major warned against. In Chapter 1 he told the animals never to live in a house, sleep in a bed, wear clothes, drink alcohol, smoke tobacco, touch money or engage in trade; by the end of this chapter the pigs have done all of it, and the clothes are Mr Jones's own. The symbols of the Rebellion go one by one: the word Comrade, Major's skull, the hoof and horn, the name Animal Farm. The first Commandment, “Whatever goes upon two legs is an enemy”, is not so much broken as physically overturned, and the chapter ends where Chapter 1 began, on the Manor Farm under a master.",
    },
    {
      theme: 'Power and Corruption',
      development:
        "The pigs' power now shows in their bodies. They stand upright, Napoleon weighs twenty-four stone, and at the table, where Mr Pilkington's “various chins” turn purple as he chokes with amusement, Clover sees faces with three, four and “five chins”. The whip, the title-deeds “in his own possession” and the single Commandment show power concentrated and no longer hidden. The ending suggests that power, not species, makes a master: at the card table pigs and men behave identically, flattering, drinking and quarrelling over a cheat, so the quarrel is between equals in greed. Nothing on the farm now checks the pigs; their only rivals are the neighbours at the table.",
    },
    {
      theme: 'Language and Propaganda',
      development:
        "Propaganda has worked so thoroughly that the chapter needs little of it. The animals cannot remember the past, so they have nothing to measure the present by except Squealer's figures, which show everything “getting better and better”. The reversed slogan and the single Commandment show language emptied of meaning by small changes, and the repeated “It did not seem strange” measures the result: once the wall says some animals are more equal, every privilege follows without surprise. Napoleon's speech to the farmers is propaganda turned outwards, telling the humans what they want to hear.",
    },
    {
      theme: 'Class and Labour',
      development:
        "The chapter states the class allegory outright. The farm is richer but its workers are not, and the pigs and dogs, of whom there are very many, produce no food “by their own labour”, which echoes Major's charge in Chapter 1 that “Man is the only creature that consumes without producing”. No animal has ever retired. Pilkington's praise of low rations and long hours, and his joke about the lower classes, show owners of every kind agreeing that the workers' hunger is a sign of good management. “Was not the labour problem the same everywhere?” he asks, and from the owners' side of the table the chapter suggests he is right.",
    },
    {
      theme: 'Education and Ignorance',
      development:
        "Memory and reading decide who holds power. The new horses cannot learn the alphabet beyond B and accept everything they are told; the older animals cannot remember whether life was better in the early days of the Rebellion; Clover cannot read the wall. Benjamin can, and he reads it aloud only when it is too late to matter. The pigs' papers, covered in writing and then burnt, are a joke about bureaucracy, and also a hint that writing on this farm belongs to the rulers, to be made and destroyed as they choose.",
    },
  ],

  context: [
    {
      heading: 'The farmhouse scene and the Tehran Conference',
      body: 'The final scene is often read as a picture of the Tehran Conference of 28 November to 1 December 1943, the first wartime meeting of the Big Three: Stalin for the Soviet Union, Roosevelt for the United States and Churchill for Britain. In this reading Napoleon stands for Stalin, and Mr Pilkington, owner of the large, neglected Foxwood, for Britain and its politicians. Orwell made the link himself. In his preface to the Ukrainian edition of March 1947 he said he had included some events that were taking place while he wrote, ‘for example the Teheran Conference’. His English text of that preface is lost, and what survives is a translation back from the Ukrainian, so the wording is close to his but not certainly his own.',
    },
    {
      heading: 'Why the book ends in a quarrel',
      body: "Some readers take the final scene as pigs and men reconciled. In the same preface Orwell said that was not his intention: he meant the book to end on ‘a loud note of discord’. He recalled that everybody thought Tehran had established the best possible relations between the USSR and the West, and that he did not believe such good relations would last long. The two aces of spades, which mean that someone at the table has cheated, can be read as that forecast. It proved right: within a few years of the war's end the allies had become rivals, in the Cold War, which is usually dated from 1947.",
    },
    {
      heading: 'Denying the revolution abroad',
      body: "Napoleon assures the farmers that the pigs never tried to stir up rebellion on neighbouring farms, although Chapter 4 shows him and Snowball sending pigeons out every day to do just that. A reader who knows the history may hear an echo. The Communist International, or Comintern, founded in Moscow in 1919, existed to spread communist revolution across the world. On 15 May 1943 Stalin dissolved it, a step widely seen as a gesture to reassure his Western Allies. Orwell did not name this parallel himself, so treat it as a reading, but it belongs to the year he began writing and fits the pigs' eagerness to be thought respectable.",
    },
    {
      heading: 'What Orwell said the ending meant',
      body: 'In December 1946, soon after the book came out in the United States, the American writer and editor Dwight Macdonald told Orwell that some anti-Stalinist intellectuals he knew took it to mean that revolution always ends badly for the underdog. Orwell replied that he intended it ‘primarily as a satire on the Russian revolution’, but meant it to apply more widely: that kind of revolution, ‘violent conspiratorial revolution, led by unconsciously power-hungry people’, could only lead to ‘a change of masters’. Chapter 10 shows that change complete. He added that revolutions bring radical improvement only when the masses are alert and know how to remove their leaders once their job is done. On his own account, then, the ending is a warning, not a verdict that revolution is hopeless.',
    },
  ],

  structure:
    "Chapter 10 is the novella's resolution, and it closes a circle. It opens with two words, “Years passed”, and a jump in time that leaves the reader, like the animals, out of touch with the Rebellion. It then moves in two mirrored halves. In the yard, the pigs rise onto two legs and the Commandments shrink to one; in the farmhouse, pigs and humans meet and the old name returns. The animals watch both and join neither, and both end in noise: first the sheep's bleating, which stifles any protest, then the quarrel, which draws the animals back to see the truth. That quarrel echoes the end of Chapter 9, where the pigs' memorial banquet for Boxer was heard to end in singing, what sounded like a violent quarrel and a crash of glass, and the last sentence answers the novella's first, which began with Mr Jones and the Manor Farm. The date line after it, November 1943 to February 1944, records that Orwell wrote the fable in wartime.",

  vocabulary: [
    {
      term: 'Superannuated',
      meaning:
        'Too old to go on working; retired because of age. The talk of a corner of pasture for superannuated animals has long since been dropped.',
    },
    {
      term: 'Morose',
      meaning: "Gloomy and bad-tempered. Benjamin has grown more morose since Boxer's death.",
    },
    {
      term: 'Taciturn',
      meaning: 'Saying very little; silent by habit.',
    },
    {
      term: 'Filial',
      meaning:
        'Of, or due from, a son or daughter. The new horses treat Clover with the respect children show a parent.',
    },
    {
      term: 'Frugally',
      meaning:
        'Using or spending as little as possible. Napoleon says the truest happiness lies in working hard and living frugally, while the pigs live in comfort.',
    },
    {
      term: 'Memoranda',
      meaning:
        'The plural of memorandum: a written note or message passed round an organisation. One of the kinds of paper the pigs fill with writing and then burn.',
    },
    {
      term: "Inebriates' home",
      meaning: 'An institution for people addicted to alcohol. Mr Jones dies in one.',
    },
    {
      term: 'Deputation',
      meaning:
        'A group sent to act or speak for others; here the neighbouring farmers invited to inspect the farm.',
    },
    {
      term: 'Incumbent upon',
      meaning:
        'Required as a duty. Pilkington feels it incumbent upon him to say a few words before his toast.',
    },
    {
      term: 'Licence',
      meaning:
        'Here, too much freedom: disorder and the breaking of rules. The farmers had expected “a spirit of licence and indiscipline” on a farm run by animals.',
    },
    {
      term: 'Bon mot',
      meaning:
        "French for a clever, witty remark. It is Orwell's name for Pilkington's joke, which sets the table in a roar; this edition prints it in capitals, as it prints the words it stresses.",
    },
    {
      term: 'Malignant',
      meaning:
        'Wishing harm; evil. Napoleon blames the rumours about the pigs on “some malignant enemy”.',
    },
  ],

  examQuestion: {
    question:
      'Starting with Chapter 10, explore how Orwell presents the pigs becoming like the humans they overthrew. Write about how Orwell presents this in Chapter 10 and in the novella as a whole.',
    guidance: [
      'Set out a thesis: Orwell shows the change as gradual and deliberate, each privilege taken first and justified afterwards, so that by Chapter 10 the Rebellion has produced a change of masters, not an end to mastery.',
      "Establish the standard the pigs betray: Major's list of Man's habits in Chapter 1, with his warning “we must not come to resemble him”, and the first Commandment, “Whatever goes upon two legs is an enemy”.",
      'Track the steps across the novella: the milk and windfall apples in Chapter 3, the move into the farmhouse and its beds in Chapter 6, the whisky and the altered Fifth Commandment in Chapter 8. For each, show how Squealer or an amended rule makes the privilege seem acceptable.',
      "Analyse Chapter 10's image of the pig on two legs closely: the one-sentence paragraphs, the whip in the trotter, the reversed slogan and the paradox of the single Commandment.",
      "Use the scene in the farmhouse to show the change completed from outside: Pilkington's joke about the lower classes, Napoleon's restoring of the name The Manor Farm, and the final sentence, where pig and man cannot be told apart.",
      "Bring in context where it explains purpose: the allegory of Stalin's Soviet Union, the Tehran Conference behind the farmhouse scene, and Orwell's own statement that this kind of revolution could only lead to a change of masters.",
      'Conclude on the discord of the ending: the pigs have joined the humans not in harmony but in greed and distrust, and the animals, still outside the window, are no better off.',
    ],
    tips: [
      'Keep quotations short and embedded, and analyse single words, such as “trotter”, “BETTER” and “already”.',
      'Show change over time: a point about Chapter 10 is stronger when it looks back to what the same symbol, the whip, the name or the slogan, meant in Chapters 1 to 3.',
      'Present the allegory as a reading (Napoleon can be read as Stalin) and tie each piece of context to the words on the page, rather than adding history for its own sake.',
      'Do not retell the plot; summarise only as much of an event as your point needs.',
    ],
  },

  quiz: [
    {
      question:
        'At the start of Chapter 10, which animals, apart from some of the pigs, still remember the days before the Rebellion?',
      options: [
        'Boxer, Muriel and Mollie',
        'Clover, Benjamin and Moses the raven',
        'The three new horses',
        'Only Napoleon and Squealer',
      ],
      answer: 1,
      explanation:
        'The chapter names Clover, Benjamin, Moses the raven and a number of the pigs. Boxer and Muriel are dead, and Mollie left the farm in Chapter 5.',
    },
    {
      question: 'What is the finished windmill actually used for?',
      options: [
        "Generating electricity for the animals' stalls",
        'Pumping water to the drinking pool',
        'Milling corn, which brings in a money profit',
        'Nothing: it stands idle',
      ],
      answer: 2,
      explanation:
        "Snowball's dream of electric light and hot and cold water has been dropped; the dynamos are promised for yet another windmill.",
    },
    {
      question: 'Why does Squealer say he is keeping the sheep on the waste ground for a week?',
      options: [
        'He is teaching them a new song, for which privacy is needed',
        'They are being punished for disobedience',
        'The main pasture needs time to recover',
        'They must be hidden from the visiting farmers',
      ],
      answer: 0,
      explanation:
        'What they have really learnt becomes clear when they bleat “Four legs good, two legs BETTER!” at the exact moment the animals might protest.',
    },
    {
      question: 'Who reads the barn wall aloud for Clover?',
      options: ['Muriel', 'Squealer', 'Clover reads it herself', 'Benjamin'],
      answer: 3,
      explanation:
        'Muriel, who read for Clover in Chapters 6 and 8, is dead. Benjamin, who usually refuses, “consented to break his rule” for once.',
    },
    {
      question: 'Which change does Napoleon announce to the farmers in the farmhouse?',
      options: [
        'The animals will stop calling one another Comrade',
        'Beasts of England is banned',
        'The farm will stop trading with humans',
        'Snowball has been pardoned',
      ],
      answer: 0,
      explanation:
        'He also says the skull has been buried, the hoof and horn removed from the flag and the farm renamed The Manor Farm. Beasts of England was banned in Chapter 7.',
    },
    {
      question: 'What starts the quarrel at the end of the novella?',
      options: [
        "Mr Pilkington mocks Napoleon's speech",
        'An argument over the price of the timber',
        'Napoleon and Mr Pilkington each play an ace of spades',
        'One of the farmers sees the animals at the window',
      ],
      answer: 2,
      explanation:
        'Two aces of spades cannot come from one honest pack, so someone has cheated, and pigs and men are alike in greed and distrust. Orwell said he meant the book to end on a note of discord, not a reconciliation.',
    },
    {
      question: "How does the sheep's slogan change in Chapter 10?",
      options: [
        '“Four” becomes “Two”',
        '“good” becomes “great”',
        '“legs” becomes “feet”',
        '“bad” becomes “BETTER”',
      ],
      answer: 3,
      explanation:
        'Everything but the last word stays the same, which is why the sheep can bleat the reversed slogan as happily as the old one.',
    },
    {
      question: "What has happened to Old Major's skull, according to Napoleon?",
      options: [
        'It has been set up by the flagstaff for the first time',
        'It has been buried',
        'It is to be shown to the farmers as a trophy',
        'Snowball has stolen it',
      ],
      answer: 1,
      explanation:
        'Napoleon calls the Sunday march past the skull “a very strange custom, whose origin was unknown”, although it began under his own rule in Chapter 5.',
    },
  ],

  sources: [
    {
      label:
        'The held edition, src/data/full-texts/animal-farm.ts (Project Gutenberg Australia, eBook 0100011h): every quotation and its chapter, located by script with the normalisation chapter-guides.test.ts uses; also the date line, November 1943 to February 1944, printed after the last sentence',
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        'Orwell, preface to the Ukrainian edition of Animal Farm (March 1947), The Orwell Foundation: he included events such as the Teheran Conference that were taking place while he wrote; he did not believe the good relations between the USSR and the West would last; he meant the ending as a loud note of discord, not a reconciliation. The page notes that the English original is lost and the text is a back-translation from the Ukrainian',
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/preface-to-the-ukrainian-edition-of-animal-farm/',
    },
    {
      label:
        "Orwell, letter to Dwight Macdonald, December 1946, excerpted with Peter Davison's notes in The New York Review of Books, 11 July 2013: written soon after the US publication; Macdonald reported anti-Stalinist intellectuals of his acquaintance who took the book to mean revolution always ended badly for the underdog; the page describes him as an editor of Partisan Review and founder of Politics; Orwell's replies on a satire primarily on the Russian revolution, a change of masters, and the masses being alert",
      url: 'https://www.nybooks.com/articles/2013/07/11/animal-farm-what-orwell-really-meant/',
    },
    {
      label:
        'Wikipedia, Tehran Conference: 28 November to 1 December 1943; Stalin, Roosevelt and Churchill; the first Allied conference of the Big Three',
      url: 'https://en.wikipedia.org/wiki/Tehran_Conference',
    },
    {
      label:
        'Wikipedia, Communist International: founded in Moscow in 1919 to pursue world revolution; dissolved by Stalin on 15 May 1943, widely seen as a gesture to his Western Allies',
      url: 'https://en.wikipedia.org/wiki/Communist_International',
    },
    {
      label:
        "Wikipedia, Animal Farm: written between November 1943 and February 1944; the book's close reflects Orwell's view of the 1943 Tehran Conference",
      url: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
    {
      label:
        'EBSCO Research Starters, Animal Farm: Analysis of Setting: Foxwood represents England and Mr Pilkington British politicians; Pinchfield represents Germany and Mr Frederick Hitler',
      url: 'https://www.ebsco.com/research-starters/literature-and-writing/animal-farm-analysis-setting',
    },
    {
      label:
        'Wikipedia, Cold War: dated from 12 March 1947 to 26 December 1991, the dissolution of the Soviet Union',
      url: 'https://en.wikipedia.org/wiki/Cold_War',
    },
    {
      label: 'Wikipedia, Dwight Macdonald: American writer and critic, 1906 to 1982',
      url: 'https://en.wikipedia.org/wiki/Dwight_Macdonald',
    },
  ],
}
