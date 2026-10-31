// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * WHAT WAS WRONG (found 24 October 2026, the day the AI marker was corrected
 * to mark each paper as its board does; fixed 31 October 2026). These papers
 * are live (allMockExamPapers, through ./index) and stand for Eduqas GCSE
 * English Language Component 1, C700U10-1, but they were not the paper Eduqas
 * sets.
 *   - Section A set four questions worth 5, 10, 10 and 15. Eduqas sets five,
 *     worth 5, 5, 10, 10 and 10: Question 01 finds information, 02 is a short
 *     answer on language, 03 analyses language, 04 language and structure,
 *     and 05 evaluates a view of the passage
 *     (src/data/mark-scheme-guides/eduqas-lang-comp1.ts). An answer handed to
 *     the marker (resolveMockFeedback, src/lib/marking/essay-feedback-targets.ts)
 *     found no question of its worth, so it got general feedback and no mark.
 *   - Section B offered two titles. Eduqas offers four (a phrase, a time you
 *     did something, an opening line, a closing line) and asks for a story.
 *   - The extracts were written for this bank and labelled as such. Component
 *     1 is "20th Century Literature Reading": Eduqas prints 60 to 100 lines of
 *     twentieth-century prose fiction, and a passage written in 2026 is not
 *     that. Each was also under 450 words, about half the board's length.
 *   - The writing question had no model answer, only a list of qualities.
 *
 * WHAT THEY ARE NOW. Each paper is set as Eduqas sets C700U10-1: five reading
 * questions on one extract, then one writing question with four titles; 80
 * marks in 1 hour 45 minutes. Questions carry Eduqas's numbers as labels (01
 * to 05, and 11), and questionNumber is 1 to 5 in Section A and 1 in Section
 * B, which is what the hand-off reads to reach the marker's A1 to A5 and B1.
 * Each extract is cut by script from a held edition in src/data/full-texts,
 * never retyped, at paragraph ends:
 *   01  Animal Farm, Chapter I: the animals gather to hear old Major
 *   02  The Great Gatsby, Chapter I: Nick settles in West Egg
 *   03  Animal Farm, Chapter II: the Rebellion
 *   04  The Great Gatsby, Chapter I: the Buchanans' house
 *   05  Animal Farm, Chapter III: the first harvest
 * Both authors died before 1956 (Orwell 1950, Fitzgerald 1940), so the texts
 * are out of UK copyright.
 *
 * The mock-exam page prints an extract as paragraphs with no line numbers, so
 * each question names its lines by quoting where they start and end. Every
 * question has a mark scheme, in this file's own words from the guide's bands,
 * and every question has a model answer (two, Grade 6-7 and Grade 8-9, for
 * the 10-mark questions; a model story for the writing). Every quotation in
 * them is in the extract word for word, checked by script on 31 October 2026.
 *
 * The question ids are new (a1 to a5 and b1, where they were q1 to q5). The
 * page keeps a student's answers in the browser by question id
 * (src/store/exam-store.ts): with the old ids, a story written for the old
 * Question 5 would have been shown, and could have been sent to the marker,
 * as an answer to the new Question 05, an evaluation.
 *
 * The notes that stood here recorded the 27 September 2026 corrections to the
 * old extracts' model answers. Those extracts and answers are gone; git
 * history holds them.
 *
 * SECOND READING, 31 October 2026 (an independent checker, against the guide,
 * the extracts and the novels). Fixed:
 *   - Board wording: the closing instructions of Questions 02 to 05 repeated,
 *     nearly word for word, the sentences Eduqas prints under its questions
 *     ("You must refer to the language used in the text...", "You should
 *     write about:", "how the writer has created these thoughts and
 *     feelings"), as the Summer 2024 and Summer 2025 marking schemes show
 *     them; now in this file's words, asking the same things. Paper 01's title
 *     (b) is reworded too, as a precaution: its "you, or someone you know" is
 *     thought to be the board's (the marking schemes do not print the titles,
 *     so this was not confirmed); now a time when you had to be braver than
 *     you felt.
 *   - 01 Q05 (Grade 8-9) called "that is the plain truth" Major's closing
 *     phrase; his speech goes on in the novel, so now the phrase that ends the
 *     extract.
 *   - 02 Q01 asked who and what the narrator "shared" his house with; he
 *     lived alone, so now who and what he had with him there.
 *   - 02 Q04 (Grade 6-7) said the paragraph moves "from the huge to the
 *     small"; it moves from his house to the mansion and back.
 *   - 02 Q04 (Grade 8-9) quoted "Factual imitation" with a capital the text
 *     does not have, and called the self-correction after "It was Gatsby's
 *     mansion." a short sentence; both corrected.
 *   - 03 Q01 asked about Jones "at this time" while its answer and scheme
 *     credit what he had been in past years; now "in this paragraph".
 *   - 03 Q02 (answer) said "the animals were still unfed" ends the paragraph;
 *     it ends the lines named, and the paragraph goes on.
 *   - 03 Q05 (Grade 6-7) said Snowball calls ribbons "the mark of a human
 *     being"; he says ribbons count as clothes, and clothes are that mark.
 *   - 03 Q05 (Grade 8-9 and scheme) read "two biscuits for each dog" as a
 *     favour, "extra for the dogs"; the text says only that Napoleon served
 *     out the rations, down to the dogs' biscuits, so now that.
 *   - 04 Q01 scheme credited "Tom stood on the front porch" for a question
 *     about the house and grounds; now the porch itself.
 *   - 04 Q04 (Grade 6-7) gave the narrator the view that Daisy's murmur was
 *     "only to make people lean toward her"; he reports it as something said
 *     of her and calls it "an irrelevant criticism".
 * Not changed: paper 05's extract prints "according to his capacity The
 * hens" with no full stop, as the held edition (Project Gutenberg Australia)
 * does, so the extract stays word for word.
 */

// ─── Extracts ────────────────────────────────────────────────────────────────
// Cut by script from src/data/full-texts and never retyped (see above).

const EXTRACT_01 = `Mr. Jones, of the Manor Farm, had locked the hen-houses for the night, but was too drunk to remember to shut the pop-holes. With the ring of light from his lantern dancing from side to side, he lurched across the yard, kicked off his boots at the back door, drew himself a last glass of beer from the barrel in the scullery, and made his way up to bed, where Mrs. Jones was already snoring.

As soon as the light in the bedroom went out there was a stirring and a fluttering all through the farm buildings. Word had gone round during the day that old Major, the prize Middle White boar, had had a strange dream on the previous night and wished to communicate it to the other animals. It had been agreed that they should all meet in the big barn as soon as Mr. Jones was safely out of the way. Old Major (so he was always called, though the name under which he had been exhibited was Willingdon Beauty) was so highly regarded on the farm that everyone was quite ready to lose an hour's sleep in order to hear what he had to say.

At one end of the big barn, on a sort of raised platform, Major was already ensconced on his bed of straw, under a lantern which hung from a beam. He was twelve years old and had lately grown rather stout, but he was still a majestic-looking pig, with a wise and benevolent appearance in spite of the fact that his tushes had never been cut. Before long the other animals began to arrive and make themselves comfortable after their different fashions. First came the three dogs, Bluebell, Jessie, and Pincher, and then the pigs, who settled down in the straw immediately in front of the platform. The hens perched themselves on the window-sills, the pigeons fluttered up to the rafters, the sheep and cows lay down behind the pigs and began to chew the cud. The two cart-horses, Boxer and Clover, came in together, walking very slowly and setting down their vast hairy hoofs with great care lest there should be some small animal concealed in the straw. Clover was a stout motherly mare approaching middle life, who had never quite got her figure back after her fourth foal. Boxer was an enormous beast, nearly eighteen hands high, and as strong as any two ordinary horses put together. A white stripe down his nose gave him a somewhat stupid appearance, and in fact he was not of first-rate intelligence, but he was universally respected for his steadiness of character and tremendous powers of work. After the horses came Muriel, the white goat, and Benjamin, the donkey. Benjamin was the oldest animal on the farm, and the worst tempered. He seldom talked, and when he did, it was usually to make some cynical remark—for instance, he would say that God had given him a tail to keep the flies off, but that he would sooner have had no tail and no flies. Alone among the animals on the farm he never laughed. If asked why, he would say that he saw nothing to laugh at. Nevertheless, without openly admitting it, he was devoted to Boxer; the two of them usually spent their Sundays together in the small paddock beyond the orchard, grazing side by side and never speaking.

The two horses had just lain down when a brood of ducklings, which had lost their mother, filed into the barn, cheeping feebly and wandering from side to side to find some place where they would not be trodden on. Clover made a sort of wall round them with her great foreleg, and the ducklings nestled down inside it and promptly fell asleep. At the last moment Mollie, the foolish, pretty white mare who drew Mr. Jones's trap, came mincing daintily in, chewing at a lump of sugar. She took a place near the front and began flirting her white mane, hoping to draw attention to the red ribbons it was plaited with. Last of all came the cat, who looked round, as usual, for the warmest place, and finally squeezed herself in between Boxer and Clover; there she purred contentedly throughout Major's speech without listening to a word of what he was saying.

All the animals were now present except Moses, the tame raven, who slept on a perch behind the back door. When Major saw that they had all made themselves comfortable and were waiting attentively, he cleared his throat and began:

"Comrades, you have heard already about the strange dream that I had last night. But I will come to the dream later. I have something else to say first. I do not think, comrades, that I shall be with you for many months longer, and before I die, I feel it my duty to pass on to you such wisdom as I have acquired. I have had a long life, I have had much time for thought as I lay alone in my stall, and I think I may say that I understand the nature of life on this earth as well as any animal now living. It is about this that I wish to speak to you.

"Now, comrades, what is the nature of this life of ours? Let us face it: our lives are miserable, laborious, and short. We are born, we are given just so much food as will keep the breath in our bodies, and those of us who are capable of it are forced to work to the last atom of our strength; and the very instant that our usefulness has come to an end we are slaughtered with hideous cruelty. No animal in England knows the meaning of happiness or leisure after he is a year old. No animal in England is free. The life of an animal is misery and slavery: that is the plain truth.`

const EXTRACT_01_SOURCE =
  'George Orwell, Animal Farm (1945), Chapter I. Text: Project Gutenberg Australia.'

const EXTRACT_02 = `The practical thing was to find rooms in the city, but it was a warm season, and I had just left a country of wide lawns and friendly trees, so when a young man at the office suggested that we take a house together in a commuting town, it sounded like a great idea. He found the house, a weatherbeaten cardboard bungalow at eighty a month, but at the last minute the firm ordered him to Washington, and I went out to the country alone. I had a dog—at least I had him for a few days until he ran away—and an old Dodge and a Finnish woman, who made my bed and cooked breakfast and muttered Finnish wisdom to herself over the electric stove.

It was lonely for a day or so until one morning some man, more recently arrived than I, stopped me on the road.

“How do you get to West Egg village?” he asked helplessly.

I told him. And as I walked on I was lonely no longer. I was a guide, a pathfinder, an original settler. He had casually conferred on me the freedom of the neighborhood.

And so with the sunshine and the great bursts of leaves growing on the trees, just as things grow in fast movies, I had that familiar conviction that life was beginning over again with the summer.

There was so much to read, for one thing, and so much fine health to be pulled down out of the young breath-giving air. I bought a dozen volumes on banking and credit and investment securities, and they stood on my shelf in red and gold like new money from the mint, promising to unfold the shining secrets that only Midas and Morgan and Mæcenas knew. And I had the high intention of reading many other books besides. I was rather literary in college—one year I wrote a series of very solemn and obvious editorials for the Yale News—and now I was going to bring back all such things into my life and become again that most limited of all specialists, the “well-rounded man.” This isn’t just an epigram—life is much more successfully looked at from a single window, after all.

It was a matter of chance that I should have rented a house in one of the strangest communities in North America. It was on that slender riotous island which extends itself due east of New York—and where there are, among other natural curiosities, two unusual formations of land. Twenty miles from the city a pair of enormous eggs, identical in contour and separated only by a courtesy bay, jut out into the most domesticated body of salt water in the Western hemisphere, the great wet barnyard of Long Island Sound. They are not perfect ovals—like the egg in the Columbus story, they are both crushed flat at the contact end—but their physical resemblance must be a source of perpetual wonder to the gulls that fly overhead. To the wingless a more interesting phenomenon is their dissimilarity in every particular except shape and size.

I lived at West Egg, the—well, the less fashionable of the two, though this is a most superficial tag to express the bizarre and not a little sinister contrast between them. My house was at the very tip of the egg, only fifty yards from the Sound, and squeezed between two huge places that rented for twelve or fifteen thousand a season. The one on my right was a colossal affair by any standard—it was a factual imitation of some Hôtel de Ville in Normandy, with a tower on one side, spanking new under a thin beard of raw ivy, and a marble swimming pool, and more than forty acres of lawn and garden. It was Gatsby’s mansion. Or, rather, as I didn’t know Mr. Gatsby, it was a mansion inhabited by a gentleman of that name. My own house was an eyesore, but it was a small eyesore, and it had been overlooked, so I had a view of the water, a partial view of my neighbor’s lawn, and the consoling proximity of millionaires—all for eighty dollars a month.

Across the courtesy bay the white palaces of fashionable East Egg glittered along the water, and the history of the summer really begins on the evening I drove over there to have dinner with the Tom Buchanans. Daisy was my second cousin once removed, and I’d known Tom in college. And just after the war I spent two days with them in Chicago.

Her husband, among various physical accomplishments, had been one of the most powerful ends that ever played football at New Haven—a national figure in a way, one of those men who reach such an acute limited excellence at twenty-one that everything afterward savors of anti-climax. His family were enormously wealthy—even in college his freedom with money was a matter for reproach—but now he’d left Chicago and come East in a fashion that rather took your breath away: for instance, he’d brought down a string of polo ponies from Lake Forest. It was hard to realize that a man in my own generation was wealthy enough to do that.

Why they came East I don’t know. They had spent a year in France for no particular reason, and then drifted here and there unrestfully wherever people played polo and were rich together. This was a permanent move, said Daisy over the telephone, but I didn’t believe it—I had no sight into Daisy’s heart, but I felt that Tom would drift on forever seeking, a little wistfully, for the dramatic turbulence of some irrecoverable football game.`

const EXTRACT_02_SOURCE =
  'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter I. Text: the first edition (New York, 1925), as transcribed by Wikisource.'

const EXTRACT_03 = `Now, as it turned out, the Rebellion was achieved much earlier and more easily than anyone had expected. In past years Mr. Jones, although a hard master, had been a capable farmer, but of late he had fallen on evil days. He had become much disheartened after losing money in a lawsuit, and had taken to drinking more than was good for him. For whole days at a time he would lounge in his Windsor chair in the kitchen, reading the newspapers, drinking, and occasionally feeding Moses on crusts of bread soaked in beer. His men were idle and dishonest, the fields were full of weeds, the buildings wanted roofing, the hedges were neglected, and the animals were underfed.

June came and the hay was almost ready for cutting. On Midsummer's Eve, which was a Saturday, Mr. Jones went into Willingdon and got so drunk at the Red Lion that he did not come back till midday on Sunday. The men had milked the cows in the early morning and then had gone out rabbiting, without bothering to feed the animals. When Mr. Jones got back he immediately went to sleep on the drawing-room sofa with the News of the World over his face, so that when evening came, the animals were still unfed. At last they could stand it no longer. One of the cows broke in the door of the store-shed with her horn and all the animals began to help themselves from the bins. It was just then that Mr. Jones woke up. The next moment he and his four men were in the store-shed with whips in their hands, lashing out in all directions. This was more than the hungry animals could bear. With one accord, though nothing of the kind had been planned beforehand, they flung themselves upon their tormentors. Jones and his men suddenly found themselves being butted and kicked from all sides. The situation was quite out of their control. They had never seen animals behave like this before, and this sudden uprising of creatures whom they were used to thrashing and maltreating just as they chose, frightened them almost out of their wits. After only a moment or two they gave up trying to defend themselves and took to their heels. A minute later all five of them were in full flight down the cart-track that led to the main road, with the animals pursuing them in triumph.

Mrs. Jones looked out of the bedroom window, saw what was happening, hurriedly flung a few possessions into a carpet bag, and slipped out of the farm by another way. Moses sprang off his perch and flapped after her, croaking loudly. Meanwhile the animals had chased Jones and his men out on to the road and slammed the five-barred gate behind them. And so, almost before they knew what was happening, the Rebellion had been successfully carried through: Jones was expelled, and the Manor Farm was theirs.

For the first few minutes the animals could hardly believe in their good fortune. Their first act was to gallop in a body right round the boundaries of the farm, as though to make quite sure that no human being was hiding anywhere upon it; then they raced back to the farm buildings to wipe out the last traces of Jones's hated reign. The harness-room at the end of the stables was broken open; the bits, the nose-rings, the dog-chains, the cruel knives with which Mr. Jones had been used to castrate the pigs and lambs, were all flung down the well. The reins, the halters, the blinkers, the degrading nosebags, were thrown on to the rubbish fire which was burning in the yard. So were the whips. All the animals capered with joy when they saw the whips going up in flames. Snowball also threw on to the fire the ribbons with which the horses' manes and tails had usually been decorated on market days.

"Ribbons," he said, "should be considered as clothes, which are the mark of a human being. All animals should go naked."

When Boxer heard this he fetched the small straw hat which he wore in summer to keep the flies out of his ears, and flung it on to the fire with the rest.

In a very little while the animals had destroyed everything that reminded them of Mr. Jones. Napoleon then led them back to the store-shed and served out a double ration of corn to everybody, with two biscuits for each dog. Then they sang 'Beasts of England' from end to end seven times running, and after that they settled down for the night and slept as they had never slept before.`

const EXTRACT_03_SOURCE =
  'George Orwell, Animal Farm (1945), Chapter II. Text: Project Gutenberg Australia.'

const EXTRACT_04 = `And so it happened that on a warm windy evening I drove over to East Egg to see two old friends whom I scarcely knew at all. Their house was even more elaborate than I expected, a cheerful red-and-white Georgian Colonial mansion, overlooking the bay. The lawn started at the beach and ran toward the front door for a quarter of a mile, jumping over sun-dials and brick walks and burning gardens—finally when it reached the house drifting up the side in bright vines as though from the momentum of its run. The front was broken by a line of French windows, glowing now with reflected gold and wide open to the warm windy afternoon, and Tom Buchanan in riding clothes was standing with his legs apart on the front porch.

He had changed since his New Haven years. Now he was a sturdy straw-haired man of thirty with a rather hard mouth and a supercilious manner. Two shining arrogant eyes had established dominance over his face and gave him the appearance of always leaning aggressively forward. Not even the effeminate swank of his riding clothes could hide the enormous power of that body—he seemed to fill those glistening boots until he strained the top lacing, and you could see a great pack of muscle shifting when his shoulder moved under his thin coat. It was a body capable of enormous leverage—a cruel body.

His speaking voice, a gruff husky tenor, added to the impression of fractiousness he conveyed. There was a touch of paternal contempt in it, even toward people he liked—and there were men at New Haven who had hated his guts.

“Now, don’t think my opinion on these matters is final,” he seemed to say, “just because I’m stronger and more of a man than you are.” We were in the same senior society, and while we were never intimate I always had the impression that he approved of me and wanted me to like him with some harsh, defiant wistfulness of his own.

We talked for a few minutes on the sunny porch.

“I’ve got a nice place here,” he said, his eyes flashing about restlessly.

Turning me around by one arm, he moved a broad flat hand along the front vista, including in its sweep a sunken Italian garden, a half acre of deep, pungent roses, and a snub-nosed motor-boat that bumped the tide offshore.

“It belonged to Demaine, the oil man.” He turned me around again, politely and abruptly. “We'll go inside.”

We walked through a high hallway into a bright rosy-colored space, fragilely bound into the house by French windows at either end. The windows were ajar and gleaming white against the fresh grass outside that seemed to grow a little way into the house. A breeze blew through the room, blew curtains in at one end and out the other like pale flags, twisting them up toward the frosted wedding-cake of the ceiling, and then rippled over the wine-colored rug, making a shadow on it as wind does on the sea.

The only completely stationary object in the room was an enormous couch on which two young women were buoyed up as though upon an anchored balloon. They were both in white, and their dresses were rippling and fluttering as if they had just been blown back in after a short flight around the house. I must have stood for a few moments listening to the whip and snap of the curtains and the groan of a picture on the wall. Then there was a boom as Tom Buchanan shut the rear windows and the caught wind died out about the room, and the curtains and the rugs and the two young women ballooned slowly to the floor.

The younger of the two was a stranger to me. She was extended full length at her end of the divan, completely motionless, and with her chin raised a little, as if she were balancing something on it which was quite likely to fall. If she saw me out of the corner of her eyes she gave no hint of it—indeed, I was almost surprised into murmuring an apology for having disturbed her by coming in.

The other girl, Daisy, made an attempt to rise—she leaned slightly forward with a conscientious expression—then she laughed, an absurd, charming little laugh, and I laughed too and came forward into the room.

“I’m p-paralyzed with happiness.”

She laughed again, as if she said something very witty, and held my hand for a moment, looking up into my face, promising that there was no one in the world she so much wanted to see. That was a way she had. She hinted in a murmur that the surname of the balancing girl was Baker. (I’ve heard it said that Daisy’s murmur was only to make people lean toward her; an irrelevant criticism that made it no less charming.)

At any rate, Miss Baker’s lips fluttered, she nodded at me almost imperceptibly, and then quickly tipped her head back again—the object she was balancing had obviously tottered a little and given her something of a fright. Again a sort of apology arose to my lips. Almost any exhibition of complete self-sufficiency draws a stunned tribute from me.

I looked back at my cousin, who began to ask me questions in her low, thrilling voice. It was the kind of voice that the ear follows up and down, as if each speech is an arrangement of notes that will never be played again. Her face was sad and lovely with bright things in it, bright eyes and a bright passionate mouth, but there was an excitement in her voice that men who had cared for her found difficult to forget: a singing compulsion, a whispered “Listen,” a promise that she had done gay, exciting things just a while since and that there were gay, exciting things hovering in the next hour.`

const EXTRACT_04_SOURCE =
  'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter I. Text: the first edition (New York, 1925), as transcribed by Wikisource.'

const EXTRACT_05 = `How they toiled and sweated to get the hay in! But their efforts were rewarded, for the harvest was an even bigger success than they had hoped.

Sometimes the work was hard; the implements had been designed for human beings and not for animals, and it was a great drawback that no animal was able to use any tool that involved standing on his hind legs. But the pigs were so clever that they could think of a way round every difficulty. As for the horses, they knew every inch of the field, and in fact understood the business of mowing and raking far better than Jones and his men had ever done. The pigs did not actually work, but directed and supervised the others. With their superior knowledge it was natural that they should assume the leadership. Boxer and Clover would harness themselves to the cutter or the horse-rake (no bits or reins were needed in these days, of course) and tramp steadily round and round the field with a pig walking behind and calling out "Gee up, comrade!" or "Whoa back, comrade!" as the case might be. And every animal down to the humblest worked at turning the hay and gathering it. Even the ducks and hens toiled to and fro all day in the sun, carrying tiny wisps of hay in their beaks. In the end they finished the harvest in two days' less time than it had usually taken Jones and his men. Moreover, it was the biggest harvest that the farm had ever seen. There was no wastage whatever; the hens and ducks with their sharp eyes had gathered up the very last stalk. And not an animal on the farm had stolen so much as a mouthful.

All through that summer the work of the farm went like clockwork. The animals were happy as they had never conceived it possible to be. Every mouthful of food was an acute positive pleasure, now that it was truly their own food, produced by themselves and for themselves, not doled out to them by a grudging master. With the worthless parasitical human beings gone, there was more for everyone to eat. There was more leisure too, inexperienced though the animals were. They met with many difficulties—for instance, later in the year, when they harvested the corn, they had to tread it out in the ancient style and blow away the chaff with their breath, since the farm possessed no threshing machine—but the pigs with their cleverness and Boxer with his tremendous muscles always pulled them through. Boxer was the admiration of everybody. He had been a hard worker even in Jones's time, but now he seemed more like three horses than one; there were days when the entire work of the farm seemed to rest on his mighty shoulders. From morning to night he was pushing and pulling, always at the spot where the work was hardest. He had made an arrangement with one of the cockerels to call him in the mornings half an hour earlier than anyone else, and would put in some volunteer labour at whatever seemed to be most needed, before the regular day's work began. His answer to every problem, every setback, was "I will work harder!"—which he had adopted as his personal motto.

But everyone worked according to his capacity The hens and ducks, for instance, saved five bushels of corn at the harvest by gathering up the stray grains. Nobody stole, nobody grumbled over his rations, the quarrelling and biting and jealousy which had been normal features of life in the old days had almost disappeared. Nobody shirked—or almost nobody. Mollie, it was true, was not good at getting up in the mornings, and had a way of leaving work early on the ground that there was a stone in her hoof. And the behaviour of the cat was somewhat peculiar. It was soon noticed that when there was work to be done the cat could never be found. She would vanish for hours on end, and then reappear at meal-times, or in the evening after work was over, as though nothing had happened. But she always made such excellent excuses, and purred so affectionately, that it was impossible not to believe in her good intentions. Old Benjamin, the donkey, seemed quite unchanged since the Rebellion. He did his work in the same slow obstinate way as he had done it in Jones's time, never shirking and never volunteering for extra work either. About the Rebellion and its results he would express no opinion. When asked whether he was not happier now that Jones was gone, he would say only "Donkeys live a long time. None of you has ever seen a dead donkey," and the others had to be content with this cryptic answer.`

const EXTRACT_05_SOURCE =
  'George Orwell, Animal Farm (1945), Chapter III. Text: Project Gutenberg Australia.'

// ─── Marking, the same for every paper ───────────────────────────────────────
// Eduqas's bands for each question, in this file's own words, from
// src/data/mark-scheme-guides/eduqas-lang-comp1.ts.

const Q01_MARKING = [
  'One mark for each correct, separate point taken from the lines the question names, up to 5.',
  'A point the lines suggest counts as well as one they state, as long as the lines support it.',
  'No mark for a detail from outside those lines, for the same point made twice, or for a whole sentence copied out without the point picked out of it.',
]

const Q02_MARKING = [
  '5 marks: sharp, accurate points that notice less obvious things, each backed by a well-chosen quotation, with subject terms used to explain the effect of the words.',
  '4 marks: accurate, well-supported points, with clear comment on how the language creates them.',
  '3 marks: several relevant points, each backed by a quotation, with some comment on the words the writer chose.',
  '2 marks: one or two simple, obvious points, with some support.',
  '1 mark: a very slight answer, perhaps one point with little or no support.',
  'All five marks are for language (AO2), and only the lines the question names count. A short, focused answer can earn full marks.',
]

const Q03_MARKING = [
  'Band 5 (9 to 10 marks): thorough and perceptive across the whole of the lines named, analysing in detail how the language works, including subtler choices, with well-judged subject terms.',
  'Band 4 (7 to 8 marks): detailed, with some real insight, and beginning to analyse how particular words affect the reader, with accurate subject terms.',
  'Band 3 (5 to 6 marks): explores the lines in some depth and begins to explain what particular words show, using some subject terms correctly.',
  'Band 2 (3 to 4 marks): finds some relevant details and says simple things about them; may name a technique without explaining it.',
  'Band 1 (1 to 2 marks): mentions a detail or two that fit the question, with very little explanation.',
  'This question assesses language (AO2), not structure. Material from outside the lines named earns nothing, and a quotation with no explanation earns little.',
]

const Q04_MARKING = [
  'Band 5 (9 to 10 marks): thorough and perceptive, analysing in detail how language and structure work together, including the subtler choices.',
  'Band 4 (7 to 8 marks): detailed, with some real insight, and beginning to analyse how the words and the order of events work on the reader.',
  'Band 3 (5 to 6 marks): explores the lines in some depth and begins to explain how the words and the order of events create the effect.',
  'Band 2 (3 to 4 marks): finds some relevant details and says simple things about them; techniques are named rather than explained.',
  'Band 1 (1 to 2 marks): mentions a detail or two that fit the question, with very little explanation.',
  'This question assesses language and structure together (AO2): what happens, in what order and at what pace, as well as the words chosen. An answer only about words, or one that retells the events, answers half the question.',
]

const Q05_MARKING = [
  "Band 5 (9 to 10 marks): a persuasive, perceptive judgement that takes in the whole passage, with every reference well chosen, showing real insight into how the writer shapes the reader's thoughts and feelings.",
  "Band 4 (7 to 8 marks): a clear, well-argued judgement that stays close to the text, with well-chosen evidence and real discussion of the writer's choices.",
  "Band 3 (5 to 6 marks): begins to judge the text, with sensible references and some sense of the passage as a whole and of the writer's choices.",
  'Band 2 (3 to 4 marks): gives a view backed by a few obvious references, with little on the whole passage or on how the writer works.',
  'Band 1 (1 to 2 marks): an opinion with little more than a passing reference to the text.',
  'This question assesses evaluation (AO4). You may agree, disagree or partly agree: what is rewarded is a clear judgement, held to from start to finish, drawn from the final lines and from the passage as a whole. Retelling the story, or using only the final lines, holds an answer down.',
]

const Q11_MARKING = {
  'Communication and organisation (AO5, up to 24 marks)': [
    'Band 5 (20 to 24 marks): an original story that holds the reader from start to end, with detailed characters and a carefully built structure.',
    'Band 4 (15 to 19 marks): a story in firm control, shaped with a clear purpose, with believable detail and some original ideas.',
    'Band 3 (10 to 14 marks): a clear, well-organised story that is going somewhere, with some developed detail, though it plays safe.',
    'Band 2 (5 to 9 marks): a story the reader can follow that is starting to take shape, though plot and characters are thin.',
    'Band 1 (1 to 4 marks): a very simple story, or one that is hard to follow, with little organisation.',
  ],
  'Vocabulary, sentence structure, spelling and punctuation (AO6, up to 16 marks)': [
    'Band 5 (14 to 16 marks): spelling, punctuation and grammar close to faultless; sentences varied for effect; a wide vocabulary used precisely.',
    'Band 4 (11 to 13 marks): errors are rare; sentences are chosen for effect; vocabulary is ambitious.',
    'Band 3 (7 to 10 marks): sentences are varied; most punctuation and spelling is correct.',
    'Band 2 (4 to 6 marks): sentences vary a little; most everyday words are spelt correctly.',
    'Band 1 (1 to 3 marks): sentences are mostly alike; errors in spelling, punctuation and tense are frequent.',
  ],
  'What holds the marks down': [
    'The two marks are given separately, each on its own grid.',
    'Writing that only describes, without telling a story, cannot reach the top of the range: the task asks for a narrative, or an account of an experience, real or imagined.',
    'A story learnt in advance that does not fit the title chosen.',
    'A piece far shorter than the guidance of about 450 to 600 words.',
    'Sentences run together with commas, and missing full stops.',
  ],
}

// ─── Mock Exam Papers ────────────────────────────────────────────────────────

export const wjecC1A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 01: Animal Farm, Chapter I
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-01',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-01-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_01_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-01-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "Mr. Jones, of the Manor Farm" to "already snoring."\n\nList five things you learn about Mr Jones in this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. He is the farmer at the Manor Farm.\n2. He locked the hen-houses for the night.\n3. He was too drunk to remember to shut the pop-holes.\n4. He lurched across the yard by the light of a lantern.\n5. He drew himself a last glass of beer before going up to bed.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'He farms the Manor Farm; he locked the hen-houses for the night; he was drunk; he forgot to shut the pop-holes; he carried a lantern; he lurched or staggered across the yard; he kicked off his boots at the back door; he had a last glass of beer from the barrel in the scullery; he went up to bed, where his wife was already snoring.',
                'Inferences the paragraph supports, such as that he is careless with his animals, are credited.',
              ],
            },
          },
          {
            id: 'wjec-c1-01-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "As soon as the light in the bedroom went out" to "what he had to say."\n\nHow does the writer show that old Major is important to the other animals?\n\nBack up your points with short quotations, and explain what the writer\'s words suggest, using subject terms where they help.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows Major\'s importance through how eagerly the animals respond. The moment the light goes out there is "a stirring and a fluttering all through the farm buildings": two nouns formed from verbs suggest movement spreading everywhere at once, as if every creature has been waiting for this. The news has spread by itself ("Word had gone round during the day"), which makes the meeting feel urgent and a little secret. Even his name carries weight. He is "the prize Middle White boar", and "Old Major" sounds like an officer\'s rank, a title of respect. Most tellingly, he is "so highly regarded" that everyone is "quite ready to lose an hour\'s sleep" to hear him, a real sacrifice for animals who work all day.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'The eager stir as soon as the light goes out ("a stirring and a fluttering"), and the news spreading by itself.',
                'The planned, secret meeting, held "as soon as Mr. Jones was safely out of the way".',
                'The title "prize Middle White boar", the respectful name "Old Major", and his show name.',
                'The animals\' readiness "to lose an hour\'s sleep in order to hear what he had to say".',
              ],
            },
          },
          {
            id: 'wjec-c1-01-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "At one end of the big barn" to "grazing side by side and never speaking."\n\nWhat impressions do you get of the animals as they gather in the barn?\n\nQuote from these lines to support your answer, and analyse the writer\'s choice of words, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'Major is presented first, and the impression is of dignity. He is "ensconced", a word that makes his bed of straw sound like a throne, and although he has "grown rather stout" he is still "majestic-looking", with "a wise and benevolent appearance". The other animals arrive "after their different fashions", which suggests a community of very different characters.\n\nThe horses seem gentle and caring. Boxer and Clover set down "their vast hairy hoofs with great care lest there should be some small animal concealed in the straw", and the contrast between "vast" and "small" shows that their great strength is used kindly. Clover is "a stout motherly mare", a phrase that suggests warmth. Boxer is described with a comparison that makes his strength enormous, "as strong as any two ordinary horses put together", but also bluntly as "not of first-rate intelligence", so the reader likes him while seeing his limits.\n\nBenjamin is the opposite: "the oldest animal on the farm, and the worst tempered", and the superlatives make him stand out. His joke about his tail and the flies shows a gloomy, cynical humour, yet the final detail, that he spends Sundays with Boxer "grazing side by side and never speaking", suggests a quiet loyalty underneath.',
              'Grade 8-9':
                'The writer introduces the animals as a small society, and the impression is affectionate but sharply observed. Major comes first, already "ensconced" on a "raised platform" under a lantern, so he is literally placed above the others and lit like a speaker on a stage. The adjectives "majestic-looking" and "wise and benevolent" make him seem a grandfatherly king, although the concession "in spite of the fact that his tushes had never been cut" quietly reminds us that he is still a boar with tusks. The arrivals are then listed in order ("First came", "then the pigs", "After the horses"), and each group settles "after their different fashions", which suggests a community whose members have their own natures and their own places. It is worth noticing that the pigs settle "immediately in front of the platform", closest to the speaker.\n\nThe horses are the moral centre of the paragraph. Their "vast hairy hoofs" are set down "with great care lest there should be some small animal concealed in the straw", and the old-fashioned conjunction "lest" makes their caution sound almost formal, a habit of kindness. Boxer is built up through a comparison that magnifies him, "as strong as any two ordinary horses put together", and then gently undercut, "not of first-rate intelligence", so the reader admires his "steadiness of character" while sensing that he could be led.\n\nBenjamin is defined by superlatives, "the oldest animal on the farm, and the worst tempered", and his dry joke that he "would sooner have had no tail and no flies" shows a mind that expects nothing good. Yet the paragraph ends on the tender image of the two friends "grazing side by side and never speaking": the negative "never" turns silence into loyalty, and the reader is left with the impression of animals whose goodness is quiet and real.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'Major\'s dignity: "ensconced", "majestic-looking", "a wise and benevolent appearance", set "on a sort of raised platform".',
                'The animals as a community of different characters, arriving "after their different fashions", with the pigs "immediately in front of the platform".',
                'The horses\' gentleness: "with great care lest there should be some small animal concealed in the straw".',
                'Clover as "a stout motherly mare"; Boxer\'s strength, his limits ("not of first-rate intelligence") and his "steadiness of character".',
                'Benjamin\'s gloom ("the worst tempered", "he never laughed") and his hidden devotion to Boxer.',
              ],
            },
          },
          {
            id: 'wjec-c1-01-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "The two horses had just lain down" to "he cleared his throat and began:"\n\nHow does the writer build up to the moment when Major begins to speak?\n\nIn your answer, consider:\n- what happens, and the order in which the writer tells it\n- the words and phrases the writer chooses\n- how these choices affect the reader.\n\nSupport your points with references to the text, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer delays Major\'s speech by describing the last animals to arrive, one at a time, which builds anticipation. First come the ducklings, "cheeping feebly and wandering from side to side", and the adverb "feebly" makes them seem helpless. Clover\'s response, making "a sort of wall round them with her great foreleg", is a protective image that shows the kindness of the community.\n\nThen the tone changes with Mollie, who comes "mincing daintily in, chewing at a lump of sugar". The verb "mincing" suggests she is vain and showy, and her "red ribbons" show that she cares more about being looked at than about the meeting. The cat comes "Last of all", and the writer adds the humorous detail that she "purred contentedly throughout Major\'s speech without listening to a word". This tells us, before the speech begins, that not everyone will take it seriously.\n\nThe phrases "At the last moment" and "Last of all" structure the paragraph like a countdown, and the short paragraph that follows completes it: "All the animals were now present". When Major "cleared his throat and began:", the colon leaves us on the edge of his first words, so the reader is ready to listen, like the animals "waiting attentively".',
              'Grade 8-9':
                'Structurally, the writer holds back Major\'s speech with a sequence of late arrivals, so that the reader, like the animals, waits for it. The sequence is marked by time phrases that work like a countdown, "had just lain down", "At the last moment", "Last of all", and it ends with a short paragraph that sums up: "All the animals were now present except Moses". Each arrival also widens our sense of who is listening.\n\nThe ducklings "which had lost their mother", "cheeping feebly", are vulnerable, and Clover\'s "wall round them with her great foreleg" is an image of the strong protecting the weak, an idea of what the farm could be. The writer then undercuts this tenderness with comedy. Mollie, "the foolish, pretty white mare", comes "mincing daintily in", and the pairing of "foolish" with "pretty" sums her up in two adjectives: she is "flirting her white mane" to show off her ribbons. The cat\'s choice of "the warmest place" and her purring "without listening to a word" gently mock the solemn occasion before it starts, and hint that a speech can be heard without being understood. Even Moses is defined by his absence.\n\nBy the time Major sees the animals "waiting attentively", the reader is waiting too, and the colon after "began:" turns the last line into a threshold. The paragraph stops on the very edge of his first word, so the speech that follows arrives with the weight of a long-awaited event.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'The order of the late arrivals, marked by "had just lain down", "At the last moment" and "Last of all", delaying the speech.',
                'Clover\'s protective "wall round them with her great foreleg" and the helpless ducklings "cheeping feebly".',
                'The comedy of Mollie ("mincing daintily", "flirting her white mane") and of the cat, who listens to nothing.',
                'The summing-up paragraph, "All the animals were now present", and the colon that leaves the reader waiting for Major\'s first words.',
              ],
            },
          },
          {
            id: 'wjec-c1-01-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "Comrades, you have heard already" to the end of the extract.\n\n"In this extract, Major is presented as a wise leader whom the animals are right to trust."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about how Major is presented, in these lines and across the whole extract\n- the choices the writer makes to lead you to those thoughts and feelings.\n\nSupport your points with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_01,
            extractSource: EXTRACT_01_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I mostly agree. In his speech Major seems wise because he speaks calmly and seriously, and he presents himself as someone who wants to help: "before I die, I feel it my duty to pass on to you such wisdom as I have acquired". The phrase "my duty" suggests he is unselfish, and calling the animals "comrades" makes them sound like equals and friends.\n\nWhat he says also seems true from the rest of the extract. He claims that "our lives are miserable, laborious, and short", and the opening has already shown us Mr Jones, "too drunk to remember to shut the pop-holes", which supports his point that the animals are badly cared for. The way the animals behave also suggests that he deserves trust: he is "so highly regarded" that they give up sleep to hear him.\n\nHowever, there are hints that we should not accept everything he says. He describes himself very confidently, claiming that he understands life "as well as any animal now living", which sounds a little proud. Earlier he is "majestic-looking" but "his tushes had never been cut", a reminder that he is still a powerful boar. And not every animal is listening: the cat purrs "without listening to a word". So Major is presented as wise and well-meaning, but the writer leaves room for doubt about whether trusting one leader completely is wise.',
              'Grade 8-9':
                'I largely agree that Major is presented as wise, but I think the writer is more careful about whether the animals are right to trust him, and the extract as a whole teaches the reader to listen more critically than they do.\n\nIn the final part, Major\'s wisdom is shown through the shape of his speech. He begins modestly, putting off the dream ("I will come to the dream later") and speaking of his coming death, which gives his words the authority of a last testament: he feels it his "duty" to pass on what he has learned. He then moves from himself to all of them, "what is the nature of this life of ours?" The rhetorical question draws the listeners in, and the blunt tricolon "miserable, laborious, and short" names their lives in three hard adjectives. The repetition of "No animal in England" builds to the stark statement "No animal in England is free", and the phrase that ends the extract, "that is the plain truth", presents his argument as simple fact. What gives it force is that the extract has shown it to be true: it opens with Mr Jones lurching to bed with "a last glass of beer" while the pop-holes stay open. Major speaks for animals who really are neglected.\n\nYet the writer plants doubts. Major is a "prize" boar, exhibited as "Willingdon Beauty", who has had "much time for thought as I lay alone in my stall", which suggests a life with more leisure than the working horses have. His claim to understand life "as well as any animal now living" is confident to the point of vanity, and the narrator\'s aside that "his tushes had never been cut" reminds us of the power under the "benevolent appearance". The audience, too, is mixed: the cat purrs "without listening to a word", and Benjamin "saw nothing to laugh at".\n\nSo my thoughts and feelings are divided, as the writer intends. Major is wise about the problem, but the extract makes us wonder whether any animal should be trusted as completely as he is.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Agreement: his sense of "duty" before death; the inclusive "comrades"; the rhetorical question and the tricolon "miserable, laborious, and short"; the repeated "No animal in England"; his claims borne out by Jones\'s drunken neglect in the opening paragraph.',
                'Disagreement: his self-assurance ("as well as any animal now living"); his privileged life as a "prize" boar; the reminder that "his tushes had never been cut"; listeners such as the cat who do not attend.',
                "A judgement that weighs both, and explains how the writer creates the reader's trust and doubt.",
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-01-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Think about the purpose and the reader of your writing. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-01-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Night Before.\n\n(b) Write about a time when you had to be braver than you felt.\n\n(c) Write a story that begins: "Nobody else had noticed that the gate was open."\n\n(d) Write a story that ends with these words: "That was the last time any of us mentioned it."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (a), The Night Before (about 510 words).\n\nNobody in our house slept properly the night before Gran's operation, though we all pretended to.\n\nAt nine o'clock Mum announced, in the bright voice she uses for dentists and parents' evenings, that we should all have an early night. Dad agreed too quickly. My little brother Sam, who is seven and believes everything, went upstairs without arguing, which should have told me how frightened he was.\n\nI lay in the dark and listened to the house. The boiler ticked. A car swished past on the wet road, its headlights sliding across my ceiling like a slow searchlight. Downstairs, the kitchen tap ran, stopped, ran again. Someone was making tea that nobody would drink.\n\nGran had lived with us since the spring. She took up the back bedroom, the best armchair and, if I am honest, most of the noise in the house. She sang along to the radio with the wrong words and argued with quiz shows. Over the last month, though, the singing had stopped. The house had grown quiet in a way I did not like, as if it were holding its breath.\n\nAt midnight I gave up and crept onto the landing. A line of yellow light lay under Gran's door.\n\n'Come in, if you're coming,' she said, before I had even knocked.\n\nShe was sitting up in bed with her glasses on the end of her nose, doing a crossword in pen. Gran has always done crosswords in pen. She says pencil is for people who expect to be wrong.\n\n'Can't sleep?' she asked.\n\n'No.'\n\n'Me neither. Seven letters, a feeling of dread. Begins with A.'\n\nI thought about it. 'Anxiety.'\n\n'Clever girl.' She wrote it in slowly, pressing hard. Then she put the pen down and looked at me properly, and for the first time I noticed how small her hands had become, the skin thin and shiny, the rings loose on her fingers.\n\n'I'm not scared of tomorrow,' she said. 'I'm scared of the waiting. Tomorrow is just doctors. Doctors I can manage.'\n\nI did not know what to say, so I sat on the end of her bed and we finished the crossword together. She knew the long words; I knew the ones about pop music. At some point Sam padded in, rubbing his eyes, and climbed in beside her without asking, and she let him.\n\nAt two o'clock Mum found the three of us there. I expected her to be cross. Instead she stood in the doorway for a long moment, then went downstairs and came back with four mugs of hot chocolate on a tray.\n\nNobody mentioned the operation. We talked about the crossword, and the time Gran fell into a canal on a school trip in 1962, and whether Sam could have a hamster.\n\nWhen I finally went back to bed, the house was not holding its breath any more. It was breathing slowly, like someone asleep.\n\nThe operation went well. But that is not the part I remember. I remember the night before.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 02: The Great Gatsby, Chapter I
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-02',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-02-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_02_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-02-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "The practical thing was to find rooms" to "over the electric stove."\n\nList five things you learn about the narrator\'s first home in the East, and who and what he had with him there, in this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. The house was in a commuting town, not in the city.\n2. It was a weatherbeaten bungalow, so flimsy that he calls it cardboard.\n3. The rent was eighty a month.\n4. He lived there alone, because the colleague who found it was sent to Washington.\n5. A Finnish woman made his bed and cooked his breakfast.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'He had meant to find rooms in the city; a young man at the office suggested a house in a commuting town; the house was a weatherbeaten cardboard bungalow; it cost eighty a month; the colleague was ordered to Washington, so he moved in alone; he had a dog for a few days until it ran away; he had an old Dodge; a Finnish woman made his bed, cooked breakfast and muttered to herself over the stove.',
                'Inferences the paragraph supports are credited, for example that the house was cheap and poorly built.',
              ],
            },
          },
          {
            id: 'wjec-c1-02-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "It was lonely for a day or so" to "life was beginning over again with the summer."\n\nHow does the writer show the narrator\'s feelings in these lines?\n\nBack up your points with short quotations, and explain what the writer\'s words suggest, using subject terms where they help.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'At first the narrator admits that he was "lonely", but one small meeting changes his mood completely. A stranger asks the way "helplessly", and suddenly he is "lonely no longer". The list "a guide, a pathfinder, an original settler" builds his importance comically, each title grander than the last, which shows that he is pleased with himself but also laughing at himself, since all he has done is give directions. The formal phrase "conferred on me the freedom of the neighborhood" makes a casual question sound like a ceremony. His optimism is then linked to the season. The "great bursts of leaves" growing "just as things grow in fast movies" is a simile of sudden, speeded-up life, and it matches his "familiar conviction that life was beginning over again with the summer".',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'His loneliness, then the change marked by "lonely no longer".',
                'The comic, growing list "a guide, a pathfinder, an original settler", and the mock-ceremonial "conferred on me the freedom of the neighborhood".',
                'The simile of leaves growing "just as things grow in fast movies" and his "familiar conviction" of a new start.',
              ],
            },
          },
          {
            id: 'wjec-c1-02-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "There was so much to read" to "every particular except shape and size."\n\nWhat impressions do you get of the narrator in these lines?\n\nQuote from these lines to support your answer, and analyse the writer\'s choice of words, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The narrator comes across as hopeful and ambitious. He describes the "young breath-giving air" as if health could simply be "pulled down" out of it, which suggests energy and optimism. His new books on banking stand "in red and gold like new money from the mint": the simile shows that he connects them with getting rich, and the names "Midas and Morgan and Mæcenas", all famous for wealth, show how high his hopes are.\n\nHowever, he also makes fun of himself. He calls his college editorials "very solemn and obvious", and he mocks his own plan to become "that most limited of all specialists", the "well-rounded man". This is a joke, because a well-rounded man is supposed to be the opposite of a specialist. It suggests he is clever, witty and honest about his faults.\n\nIn the second paragraph he seems an amused observer of the place. He calls it "one of the strangest communities in North America" and describes the two Eggs with playful exaggeration, as "a pair of enormous eggs" jutting into "the great wet barnyard of Long Island Sound". The metaphor of the barnyard makes the grand setting sound homely and comic, and his joke about "the gulls that fly overhead" shows that he enjoys seeing things from an unusual angle.',
              'Grade 8-9':
                'The narrator presents himself with a mixture of hope and self-mockery, and the language lets us see both. His first sentence is buoyant: "so much to read" and "so much fine health" are paired by repetition, and the phrase "pulled down out of the young breath-giving air" makes health something to be harvested, as if the summer were ripe fruit. The books he buys are revealing. They are on "banking and credit and investment securities", and they stand "in red and gold like new money from the mint", a simile that turns books into banknotes. The alliterative trio "Midas and Morgan and Mæcenas" joins a myth, a banker and a patron, so his dream of knowledge is really a dream of fortune.\n\nHe is also a narrator who undercuts himself. His college writing was "very solemn and obvious", and he plans to become "that most limited of all specialists", a paradox, since the "well-rounded man" is meant to be the very opposite of a specialist. He then admits "This isn’t just an epigram", drawing attention to his own cleverness while defending it: "life is much more successfully looked at from a single window, after all." This hints that he is a watcher rather than a doer, someone who will observe the lives of others.\n\nThat watching eye shapes the second paragraph. He finds his new home "one of the strangest communities in North America" and describes it in a mock-scientific tone ("among other natural curiosities, two unusual formations of land"). The Sound becomes "the great wet barnyard of Long Island Sound", deflating grandeur with a farmyard metaphor, and he imagines the view of "the gulls that fly overhead" before turning to "the wingless", meaning people like us. The impression is of an intelligent, ironic narrator who sees more than he says, and whose interest in difference ("their dissimilarity in every particular except shape and size") prepares us for a story about two very different worlds.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'His optimism and energy: "so much fine health", "the young breath-giving air".',
                'His hopes of wealth: books "like new money from the mint", "Midas and Morgan and Mæcenas".',
                'His self-mockery: "very solemn and obvious editorials", the paradox of "that most limited of all specialists".',
                'His position as an observer who looks at life "from a single window", and his ironic, playful description of the two Eggs and "the great wet barnyard of Long Island Sound".',
              ],
            },
          },
          {
            id: 'wjec-c1-02-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "I lived at West Egg" to "all for eighty dollars a month."\n\nHow does the writer create a contrast between the narrator\'s house and his neighbour\'s mansion in these lines?\n\nIn your answer, consider:\n- how the paragraph is organised to build the contrast\n- the words and phrases the writer chooses\n- how these choices affect the reader.\n\nSupport your points with references to the text, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer builds the contrast by moving from the narrator\'s small house to the huge mansion and back again. The paragraph begins with West Egg as "the less fashionable of the two", and the hesitation in "the—well," shows the narrator searching politely for a word. His house is "squeezed between two huge places", and the verb "squeezed" makes it sound tiny and uncomfortable.\n\nThe neighbour\'s mansion is then described at length, with a list joined by "and": a tower, "a marble swimming pool, and more than forty acres of lawn and garden". The adjective "colossal" and the comparison with "some Hôtel de Ville in Normandy" show that it is enormous and grand, but the phrase "spanking new under a thin beard of raw ivy" suggests that it is trying to look old and is not. The short sentence "It was Gatsby’s mansion." stands out and makes the reader curious, especially when the narrator adds that he did not know Mr Gatsby.\n\nFinally, he turns back to his own home with a joke: it was "an eyesore, but it was a small eyesore". The repetition is funny and modest. The paragraph ends with the price, "all for eighty dollars a month", which reminds us how little he pays compared with the thousands his neighbours pay, and makes the contrast both amusing and slightly uneasy.',
              'Grade 8-9':
                'The contrast is built into the shape of the paragraph, which begins and ends with the narrator\'s modest place but spends its centre on his neighbour\'s. It opens with a social label, "the less fashionable of the two", and the dash in "the—well," is a comic pause, as if the narrator is too polite to say the word poorer. At once he warns us that the label is "a most superficial tag" for "the bizarre and not a little sinister contrast" between the two Eggs; the understatement "not a little sinister" hints at something darker than snobbery, and makes the reader alert.\n\nHis own house is placed physically, "at the very tip of the egg", "squeezed between two huge places". The past participle "squeezed" makes it the victim of its neighbours\' size. The mansion is then given a long, accumulating sentence: "colossal affair by any standard", a "factual imitation" of a French town hall, "a tower", "a marble swimming pool", "more than forty acres". The polysyndeton ("and a marble swimming pool, and more than forty acres") piles up excess. Yet the details also mock it. The phrase "factual imitation" is a contradiction, a copy that insists on its own accuracy, and "spanking new under a thin beard of raw ivy" personifies the building as a young man pretending to an age he has not reached.\n\nThe structure then narrows to a short sentence and its correction: "It was Gatsby’s mansion. Or, rather, as I didn’t know Mr. Gatsby, it was a mansion inhabited by a gentleman of that name." The self-correction creates mystery around the owner while showing the narrator\'s care not to claim more than he knows. The last sentence returns to his "eyesore", repeated and shrunk to "a small eyesore", and ends on the bathos of "all for eighty dollars a month". The phrase "the consoling proximity of millionaires" is gently ironic: he is comforted by being near wealth he does not share. The effect is comic, but the reader is left curious about Gatsby and uneasy about a world where such differences sit side by side.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'Structure: the paragraph moves from the narrator\'s house to the mansion and back, ending on the price; the short sentence "It was Gatsby’s mansion." and the self-correction that follows.',
                'The excess of the mansion: "colossal", "a marble swimming pool, and more than forty acres of lawn and garden", built up by the list.',
                'The mockery in "factual imitation" and "spanking new under a thin beard of raw ivy".',
                'The modest humour of "an eyesore, but it was a small eyesore" and the irony of "the consoling proximity of millionaires".',
                'The hint of something darker in "the bizarre and not a little sinister contrast".',
              ],
            },
          },
          {
            id: 'wjec-c1-02-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "Across the courtesy bay" to the end of the extract.\n\n"In this extract the narrator is an outsider, looking in at a world of wealth that he does not belong to."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about the narrator, in these lines and across the whole extract\n- the choices the writer makes to lead you to those thoughts and feelings.\n\nSupport your points with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_02,
            extractSource: EXTRACT_02_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I partly agree. In many ways the narrator is an outsider. He lives in a "cardboard bungalow" and calls his house "an eyesore", while the rich live in "white palaces" that "glittered along the water", a description that makes their world seem dazzling and far away across the bay. He is amazed by Tom\'s money. Tom has brought "a string of polo ponies" east, and the narrator admits, "It was hard to realize that a man in my own generation was wealthy enough to do that." This shows that he is not used to such wealth.\n\nHowever, he is not completely outside it. Daisy is his "second cousin once removed", he knew Tom at college, and he is going "to have dinner with the Tom Buchanans", so he has a way in. He also seems to see through the rich. He describes Tom as a man whose best days ended "at twenty-one", so that everything since "savors of anti-climax", and he says the couple "drifted here and there unrestfully wherever people played polo and were rich together". The word "drifted" makes their lives sound aimless. So I think he is an outsider in money but an insider in family, and his position lets him judge the rich as well as admire them.',
              'Grade 8-9':
                'I agree that the narrator stands outside the world of wealth, but I think the extract shows him as something more interesting than an outsider: a man on its edge, near enough to see it clearly and far enough away to judge it.\n\nThe final lines make the gap vivid. East Egg is seen "Across the courtesy bay", and its "white palaces" "glittered along the water", a verb of distant, reflected light, as if the rich were seen through a window. His astonishment at Tom\'s wealth is honest: Tom came East "in a fashion that rather took your breath away", and the polo ponies make it "hard to realize that a man in my own generation was wealthy enough to do that." Across the whole extract the writer gives him the props of a modest life, "a weatherbeaten cardboard bungalow at eighty a month", "an old Dodge", a house that is "a small eyesore", so that his view of millionaires is always from below.\n\nYet he is not a stranger to them. Daisy is his "second cousin once removed", he says "I’d known Tom in college", and "the history of the summer really begins" with a dinner at their house, so he is admitted where he does not belong. What marks him out is his judgement. His portrait of Tom moves from praise to deflation: "one of the most powerful ends that ever played football at New Haven", then "such an acute limited excellence at twenty-one that everything afterward savors of anti-climax". The paradox of "acute limited excellence" sums up a life that peaked too soon. The Buchanans "drifted here and there unrestfully", and the final image of Tom seeking "a little wistfully, for the dramatic turbulence of some irrecoverable football game" is almost pitying. Even his confession "I had no sight into Daisy’s heart" shows a narrator honest about the limits of what he sees.\n\nSo the writer makes me trust him precisely because he is outside the money but inside the circle. He is an outsider by income and an insider by family, which is why his view of wealth is both admiring and quietly critical.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Agreement: the distance of East Egg\'s "white palaces" across the bay; his amazement at Tom\'s wealth; his own cheap bungalow, old Dodge and "small eyesore".',
                'Disagreement: his family tie to Daisy and his college friendship with Tom; his invitation to dinner; his confident judgement of Tom\'s "acute limited excellence" and of the Buchanans who "drifted here and there unrestfully".',
                "A judgement on how far he belongs, supported from the final lines and the whole extract, with comment on how the writer shapes the reader's view of him.",
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-02-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Think about the purpose and the reader of your writing. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-02-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Last Shift.\n\n(b) Write about a time when you realised that something in your life needed to change.\n\n(c) Write a story that begins: "The first thing I noticed about the new house was the silence."\n\n(d) Write a story that ends with these words: "I knew then that I had made the right choice."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (a), The Last Shift (about 520 words).\n\nThe café opened at seven, the way it had every Saturday for thirty-one years, and for the first time since I started working there I was early.\n\nMrs Okafor was already behind the counter, polishing the coffee machine as though it were a trophy. The sign in the window, hand-lettered in her careful capitals, said CLOSING ON THE 30TH. THANK YOU FOR EVERYTHING. It had been there for a fortnight, and I still had not got used to it.\n\n'You don't have to work today, Leah,' she said. 'Today is for the regulars.'\n\n'I am a regular,' I said, and tied on my apron.\n\nThe first of them arrived at ten past seven. Mr Ellis always had two poached eggs and the crossword, and he always sat at the table by the radiator, which wobbled unless you folded a beer mat under its leg. I had folded that beer mat a hundred times. That morning I noticed that he had brought his own.\n\nBy nine the place was full. People came who had not been in for years: a woman who had eaten her first ice cream there in 1987, a man who had proposed at the corner table and was now back with his grandchildren, a whole football team in muddy socks, apologising for the mud. They brought cards and flowers and, in one case, a cake shaped like the café itself, with icing for windows. Mrs Okafor cried twice before ten and pretended both times that it was the onions.\n\nI carried plates until my arms ached, and I learned more about the café in one morning than in two years of Saturdays. I learned that the faded photograph above the till showed her husband on opening day, holding a ladle like a sword. I learned that the scratch on the counter came from a dropped tray in the great snow of 2010, when the café was the only place open on the street and stayed open all night.\n\nAt two o'clock the last customer left. The silence afterwards was enormous, the kind of silence that has a shape. Mrs Okafor turned the sign to CLOSED and sat down heavily at the table by the radiator. It wobbled. Mr Ellis had taken his beer mat with him.\n\nI made two cups of tea, the strong way she liked it, and sat opposite her.\n\n'What will you do now?' I asked.\n\nShe thought about it for a long time. 'Sleep until eight,' she said at last. 'Then I will sit in someone else's café and let them bring me eggs.'\n\nWe laughed, and the laugh turned into something else, and for a while neither of us said anything.\n\nBefore I left, she pressed a key into my hand. It was the key to the front door, worn smooth and bright.\n\n'They are changing the locks,' she said. 'It opens nothing now. But it opened a lot of mornings.'\n\nI still have it. It hangs on a hook by my bed, and some Saturdays, when I wake at seven without meaning to, I hold it for a moment before I get up.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 03: Animal Farm, Chapter II
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-03',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-03-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_03_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-03-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "Now, as it turned out" to "the animals were underfed."\n\nList five things you learn about Mr Jones and his farm in this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. In past years he had been a capable farmer.\n2. He had lost money in a lawsuit.\n3. He had started drinking more than was good for him.\n4. He spent whole days lounging in his Windsor chair in the kitchen.\n5. His men were idle and dishonest.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'He had been a hard master; he had been a capable farmer; he had fallen on evil days; he lost money in a lawsuit and was disheartened; he drank too much; he lounged for whole days in his Windsor chair reading the newspapers; he fed Moses crusts soaked in beer; his men were idle and dishonest; the fields were full of weeds; the buildings needed roofing; the hedges were neglected; the animals were underfed.',
              ],
            },
          },
          {
            id: 'wjec-c1-03-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "June came and the hay was almost ready" to "the animals were still unfed."\n\nHow does the writer show that the animals have been neglected?\n\nBack up your points with short quotations, and explain what the writer\'s words suggest, using subject terms where they help.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows neglect through a chain of careless human actions. Mr Jones got "so drunk at the Red Lion that he did not come back till midday on Sunday", and the long sentence makes the hours of absence feel drawn out. His men are no better: they "had gone out rabbiting, without bothering to feed the animals", and the phrase "without bothering" shows that feeding the animals did not even seem worth the effort to them. When Jones returns, he "immediately went to sleep" with a newspaper "over his face", a comic but telling image of a man shutting out his responsibilities. These lines end with the plain phrase "the animals were still unfed", and the word "still" stresses how long they have waited, so the reader understands why they will rebel.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'Jones\'s drunken absence, "so drunk at the Red Lion that he did not come back till midday on Sunday".',
                'The men who went "rabbiting, without bothering to feed the animals".',
                'Jones asleep with the newspaper "over his face", and the final stress on "still unfed".',
              ],
            },
          },
          {
            id: 'wjec-c1-03-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "At last they could stand it no longer." to "with the animals pursuing them in triumph."\n\nHow does the writer show the thoughts and feelings of the animals, and of the men, as the animals rise up?\n\nQuote from these lines to support your answer, and analyse the writer\'s choice of words, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The animals\' feelings build from desperation to anger and then triumph. The short sentence "At last they could stand it no longer" shows that their patience has run out, and "At last" suggests that they have endured a great deal. When the men arrive "with whips in their hands, lashing out in all directions", the violent verb "lashing" shows the men\'s cruelty and explains the animals\' anger: "This was more than the hungry animals could bear." The adjective "hungry" reminds us that the uprising comes from need rather than plotting. "With one accord" shows that they act together, as one body, and "flung themselves upon their tormentors" suggests fury, while the noun "tormentors" shows how the animals see the men.\n\nThe men\'s feelings are the opposite. They are shocked: they "suddenly found themselves being butted and kicked from all sides", and the passive construction shows that they have lost control. The writer says plainly that "The situation was quite out of their control" and that the uprising "frightened them almost out of their wits". The men who were "used to thrashing and maltreating" the animals now "took to their heels", an idiom that makes them sound like cowards. By the end the animals are "pursuing them in triumph", and the word "triumph" shows their pride and joy.',
              'Grade 8-9':
                'The writer shows the animals\' feelings changing at speed, and the men\'s collapsing, through mostly short, plain sentences that make the uprising feel sudden and natural. "At last they could stand it no longer" is a turning point: the phrase "At last" carries all the hungry hours that came before. The first act of rebellion is not planned but bodily, a cow breaking the door "with her horn", and the animals simply "help themselves from the bins", a phrase of ordinary need rather than violence.\n\nIt is the men who bring violence. They appear "with whips in their hands, lashing out in all directions", and the participle "lashing" with "in all directions" suggests blind, indiscriminate cruelty. The animals\' reaction is given in a short sentence, "This was more than the hungry animals could bear", which makes their anger seem a reasonable limit being reached. The concession "though nothing of the kind had been planned beforehand" insists that this is instinct, not conspiracy, while "With one accord" shows a sudden unity. The noun "tormentors" is chosen from the animals\' point of view: the men are named by what they have done.\n\nThe men\'s feelings are shown through a reversal of power. Grammatically they become the objects of the action, "being butted and kicked from all sides". The flat statement "The situation was quite out of their control" is almost comic in its understatement, and the writer spells out why they are so shocked: they were used to "thrashing and maltreating just as they chose", so this "sudden uprising" is unthinkable to them. The idioms "frightened them almost out of their wits" and "took to their heels" make the men small and ridiculous. The final image, "all five of them were in full flight down the cart-track", with the animals "pursuing them in triumph", completes the reversal: the hunters are hunted, and the reader shares the animals\' exhilaration.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'The animals\' patience breaking: "At last they could stand it no longer"; "This was more than the hungry animals could bear".',
                'Their unity and fury: "With one accord", "flung themselves upon their tormentors".',
                'The men\'s cruelty ("lashing out in all directions") turning to shock and fear: "The situation was quite out of their control", "frightened them almost out of their wits", "took to their heels".',
                'The reversal ending in "pursuing them in triumph".',
              ],
            },
          },
          {
            id: 'wjec-c1-03-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "Mrs. Jones looked out of the bedroom window" to "decorated on market days."\n\nHow does the writer create a sense of excitement and triumph in these lines?\n\nIn your answer, consider:\n- what happens, and the order in which the writer tells it\n- the words and phrases the writer chooses\n- how these choices affect the reader.\n\nSupport your points with references to the text, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer creates excitement through speed. Mrs Jones\'s escape is told in a list of quick actions: she "saw what was happening, hurriedly flung a few possessions into a carpet bag, and slipped out", and the verbs follow one another so fast that the reader feels the rush. Moses "sprang off his perch and flapped after her, croaking loudly", which is almost comic, as if even the raven is panicking. Then the gate is "slammed" behind the men, a loud, final verb. The sentence "Jones was expelled, and the Manor Farm was theirs" comes after a colon, and it sums up the victory in two short clauses, with "theirs" as a powerful last word.\n\nThe next paragraph shows the animals\' joy. They "could hardly believe in their good fortune", and they "gallop in a body right round the boundaries of the farm", which shows their energy and togetherness. The writer then lists the objects they destroy: "the bits, the nose-rings, the dog-chains". The list makes the cruelty of the old life clear, and the adjective "degrading" shows how the animals felt about it. The very short sentence "So were the whips." stands out, because the whips were the symbol of Jones\'s power, and the next sentence shows the result: "All the animals capered with joy". The verb "capered" suggests playful dancing, so the reader shares their triumph.',
              'Grade 8-9':
                'The writer builds excitement by making the Rebellion happen faster than anyone can take in, and then lets the triumph spread out in a ritual of destruction.\n\nStructurally, the first paragraph moves from three escapes to a victory. Mrs Jones\'s flight is a single sentence of rapid verbs ("looked", "saw", "flung", "slipped"), and the adverb "hurriedly" with the humble "carpet bag" makes her departure undignified. Moses "flapped after her, croaking loudly", a comic sound effect that deflates the human side. "Meanwhile" cuts back to the main action, and the gate is "slammed", a decisive verb. The paragraph then pauses for its summary: "And so, almost before they knew what was happening, the Rebellion had been successfully carried through". The phrase "almost before they knew what was happening" echoes what was said of Mrs Jones, who "saw what was happening", but now it is the animals who are taken by surprise, by their own success. The colon introduces the plainest possible statement of victory, two balanced clauses ending on the possessive "theirs".\n\nThe second paragraph shows triumph as a physical release. The animals "gallop in a body right round the boundaries", a circuit that claims the farm as their own. Then the writer piles up lists of nouns for the instruments of control: "the bits, the nose-rings, the dog-chains", then "The reins, the halters, the blinkers, the degrading nosebags". The adjectives "cruel" and "degrading" show the animals\' judgement on their past. The short sentence "So were the whips." is the climax, separated from the lists so that it lands alone, and the reaction follows at once: "All the animals capered with joy when they saw the whips going up in flames." The verb "capered" belongs to children or lambs at play, so the reader feels the innocence of their joy. The final detail, Snowball throwing the market-day ribbons on the fire, moves from instruments of pain to ornaments, which hints that the new order will reject even small pleasures. The triumph is real, but it is already becoming a set of rules.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'The speed of the escapes, told in quick verbs ("hurriedly flung", "slipped out", "flapped after her"), and the gate "slammed" behind the men.',
                'The summary "Jones was expelled, and the Manor Farm was theirs", placed after a colon, ending on "theirs".',
                'The animals galloping "in a body right round the boundaries", and the lists of hated objects destroyed.',
                'The short sentence "So were the whips." and the joy of "capered", followed by Snowball\'s ribbons.',
              ],
            },
          },
          {
            id: 'wjec-c1-03-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read the last three paragraphs, from Snowball\'s words about ribbons to the end of the extract.\n\n"By the end of this extract, the animals have won a complete victory, and their lives have changed for the better."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about the animals\' victory, in these lines and across the whole extract\n- the choices the writer makes to lead you to those thoughts and feelings.\n\nSupport your points with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_03,
            extractSource: EXTRACT_03_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I mostly agree. The ending is full of happiness. The animals have "destroyed everything that reminded them of Mr. Jones", and Napoleon gives everyone "a double ration of corn", which contrasts with the start of the extract, where the animals were "underfed" and "still unfed". They sing \'Beasts of England\' "seven times running", which shows how joyful they are, and the last words, "slept as they had never slept before", suggest peace and safety after years of fear. Earlier, Jones\'s whips have gone "up in flames", so their lives have clearly improved.\n\nHowever, there are small signs that the victory is not complete. Snowball\'s rule that ribbons count as clothes, "the mark of a human being", leads Boxer to burn "the small straw hat which he wore in summer to keep the flies out of his ears". The hat was useful to him, so the new rules already take something from him, and Boxer obeys without question. Also, it is Napoleon who "led them back to the store-shed and served out" the food, which suggests that the pigs are already in charge. So the animals are happier, but the writer hints that their new life may have its own problems.',
              'Grade 8-9':
                'I agree that the extract ends in a real victory, but I think the writer makes us doubt how complete it is, and whether the change for the better will last.\n\nThe final lines are written to feel like a happy ending. The animals have "destroyed everything that reminded them of Mr. Jones", and the sweeping "everything" suggests a clean break with the past. The "double ration of corn" answers the hunger that began the Rebellion: earlier the animals were "underfed" and, on the day itself, "still unfed". Singing \'Beasts of England\' "from end to end seven times running" is an act of shared joy, and the final clause, "slept as they had never slept before", ends on rest and safety. Across the extract, the writer has made us want this outcome: Jones lounges "drinking" while his men are "idle and dishonest", and when the animals rise "With one accord" we are on their side.\n\nYet the details the writer chooses for these last lines unsettle that feeling. Snowball\'s pronouncement is the first rule of the new farm, and its logic is absolute: ribbons are clothes, clothes are "the mark of a human being", so "All animals should go naked". Boxer\'s response is touching and troubling. He burns "the small straw hat which he wore in summer to keep the flies out of his ears", something that eased his life, simply because he "heard this". His obedience is instant, and the writer lets the useful hat go "on to the fire with the rest" without comment, which invites the reader to notice what the animals do not. Equally, the food is not shared out by the animals together: Napoleon "led them back to the store-shed and served out" the rations, so a pig controls the store and decides each animal\'s share, down to "two biscuits for each dog".\n\nSo my thoughts and feelings are mixed, as the writer intends. The animals\' lives have changed for the better for now, and their joy is genuine; but the final paragraphs, by showing who makes the rules and who hands out the food, suggest that the Rebellion has changed who is in charge more surely than it has changed how the farm will be run.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Agreement: the destruction of "everything that reminded them of Mr. Jones"; the "double ration of corn" after hunger; the singing; sleeping "as they had never slept before"; the burning of the whips.',
                'Disagreement: Snowball\'s rule that "All animals should go naked"; Boxer burning the hat that kept the flies away, without question; Napoleon serving out the food, down to "two biscuits for each dog".',
                'A clear judgement drawn from the final paragraphs and the whole extract, with comment on how the writer leads the reader to feel joy and unease.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-03-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Think about the purpose and the reader of your writing. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-03-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Crossing.\n\n(b) Write about a time when you had to leave a place you loved.\n\n(c) Write a story that begins: "The rain had not stopped for three days."\n\n(d) Write a story that ends with these words: "For the first time, the island felt like home."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (a), The Crossing (about 520 words).\n\nThe ferry to the island left at half past ten, and Dad had us at the harbour by nine, because Dad believed that being early was a kind of politeness to the universe.\n\nI sat on our biggest suitcase and watched the water. It was a hard, grey morning, the kind where the sea and the sky cannot agree where one ends and the other begins. Out there, somewhere in the grey, was the island where we were going to live. I had seen it on a map. It was the shape of a boot that someone had kicked off and left lying in the sea.\n\n'It'll be an adventure, Mia,' Dad said, for the fourth time.\n\nI did not answer. Adventures, in my experience, were things that happened in books to people who had chosen them. I had not chosen this. Dad had got a job at the island's school, the school had seven pupils, and in two days I would be the eighth.\n\nThe ferry, when it came, was smaller than I expected, a blue and white boat with rust weeping from its bolts. We drove the car on and climbed the narrow stairs to the deck. The engine shuddered into life, and the harbour began, very slowly, to slide away from us.\n\nThat was when I saw the girl.\n\nShe was about my age, with a yellow raincoat and hair the colour of wet sand, and she was leaning over the rail at the very front of the boat, where the spray came up in sheets. Every time a wave hit, she laughed. Not politely. She laughed as if the sea had told her a joke.\n\nI watched her for a long time. Then, because there was nothing else to do, I went and stood beside her.\n\n'You'll get soaked,' I said.\n\n'That's the point,' she said, and the next wave hit us both.\n\nIt was so cold that I gasped. Salt water ran down my neck and into my sleeves. I should have been furious. Instead, to my own surprise, I laughed too.\n\nHer name was Orla. She had lived on the island all her life. She told me which of the seven pupils was kind and which one bit, where the puffins nested in May, and how, on a clear night, you could see the lights of the mainland like a string of beads on the horizon. She talked the whole way across, and I listened, and the island grew out of the grey ahead of us: first a dark line, then cliffs, then a white lighthouse, then a cluster of houses round a harbour, painted the colours of sweets.\n\nWhen the ferry bumped against the quay, Dad found us at the rail, both dripping.\n\n'Mia,' he said, staring. 'You're wet through.'\n\n'I know,' I said.\n\nI looked back once at the way we had come. The mainland had disappeared. There was only the sea, and the boat's white wake folding itself away into the water, as if the crossing had closed behind us. I found that I did not mind.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 04: The Great Gatsby, Chapter I
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-04',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-04-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_04_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-04-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "And so it happened that on a warm windy evening" to "with his legs apart on the front porch."\n\nList five things you learn about the Buchanans\' house and its grounds in this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. The house was even more elaborate than the narrator expected.\n2. It was a red-and-white Georgian Colonial mansion.\n3. It overlooked the bay.\n4. The lawn ran from the beach to the front door for a quarter of a mile.\n5. The front of the house had a line of French windows, wide open to the warm afternoon.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'It is in East Egg; it was more elaborate than expected; it was cheerful and red-and-white; it was a Georgian Colonial mansion; it overlooked the bay; the lawn ran a quarter of a mile from the beach to the door; there were sun-dials, brick walks and bright gardens; vines grew up the side of the house; a line of French windows glowed gold and stood open; it had a front porch, where Tom stood.',
              ],
            },
          },
          {
            id: 'wjec-c1-04-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "He had changed since his New Haven years." to "some harsh, defiant wistfulness of his own."\n\nHow does the writer show what Tom Buchanan is like in these lines?\n\nBack up your points with short quotations, and explain what the writer\'s words suggest, using subject terms where they help.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer presents Tom as powerful and arrogant. He has "a rather hard mouth and a supercilious manner", and the adjective "supercilious" shows that he looks down on others. His eyes are personified as "Two shining arrogant eyes" that "had established dominance over his face", which makes him seem aggressive even when he is standing still, "always leaning aggressively forward". His physical strength is threatening: he seems "to fill those glistening boots until he strained the top lacing", and the paragraph ends with the blunt phrase "a cruel body", which suggests violence. Even his voice has "a touch of paternal contempt", and the words the narrator imagines him saying, "just because I’m stronger and more of a man than you are", show his bullying confidence.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'His arrogance: "a rather hard mouth and a supercilious manner", "Two shining arrogant eyes".',
                'His power and menace: "enormous power", "a great pack of muscle", "a cruel body".',
                'His voice, with "a touch of paternal contempt", and the imagined words about being "stronger and more of a man".',
              ],
            },
          },
          {
            id: 'wjec-c1-04-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "We talked for a few minutes on the sunny porch." to "ballooned slowly to the floor."\n\nWhat impressions do you get of the Buchanans\' home in these lines?\n\nQuote from these lines to support your answer, and analyse the writer\'s choice of words, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The home seems luxurious, but also something Tom shows off. He says "I’ve got a nice place here" with "his eyes flashing about restlessly", and his "broad flat hand" sweeps over "a sunken Italian garden, a half acre of deep, pungent roses, and a snub-nosed motor-boat". The list makes the grounds seem like a collection of possessions. He even tells Nick who owned it before, "Demaine, the oil man", which suggests that he cares about its value.\n\nInside, the house seems light, airy and almost magical. The room is "a bright rosy-colored space", and the adverb "fragilely" makes it sound delicate, as if it could float away. The grass "seemed to grow a little way into the house", so the outside and inside blur together. The curtains blow "like pale flags", a simile that adds movement and drama, and the ceiling is a "frosted wedding-cake", a metaphor that makes it seem sweet, white and decorated. Even the rug has "a shadow on it as wind does on the sea". The two women on the couch are "buoyed up as though upon an anchored balloon", so everything in the room seems light and floating. When Tom shuts the windows with "a boom", the spell breaks, and everything "ballooned slowly to the floor". The impression is of a beautiful home that is full of movement but has little in it that is solid.',
              'Grade 8-9':
                'The writer gives two impressions of the home, one through Tom and one through Nick, and the contrast between them is revealing.\n\nSeen through Tom, the house is property. "I’ve got a nice place here" is a casual understatement, but "his eyes flashing about restlessly" suggest a man who cannot rest in what he owns. He physically turns Nick, "by one arm", to make him look, and his "broad flat hand" sweeps the view as if it were a map of his possessions. The list, "a sunken Italian garden, a half acre of deep, pungent roses, and a snub-nosed motor-boat", runs landscape and luxury goods together, and the vigorous verb in the motor-boat "that bumped the tide offshore" matches Tom\'s restless energy. Naming the previous owner, "Demaine, the oil man", values the house by its price and pedigree. The adverbs "politely and abruptly" capture his manners exactly: courtesy used as a command.\n\nSeen through Nick, the interior becomes a dream. The "bright rosy-colored space" is "fragilely bound into the house", as if the room might come loose, and the grass "seemed to grow a little way into the house", dissolving the line between inside and out. Fitzgerald then builds one long sentence of movement: the breeze "blew curtains in at one end and out the other like pale flags", twists them "toward the frosted wedding-cake of the ceiling", and "rippled over the wine-colored rug", ending with the simile "as wind does on the sea". The sentence itself billows, clause after clause, and the metaphor of the ceiling as cake makes the room seem sweet, ornamental and slightly unreal. The women on the couch are part of the decoration, "buoyed up as though upon an anchored balloon", their dresses "rippling and fluttering", and the sounds, "the whip and snap of the curtains" and "the groan of a picture on the wall", give the scene a faint unease.\n\nThe paragraph ends with Tom\'s intervention: "a boom" as he shuts the windows, and "the caught wind died out about the room". Everything, "the curtains and the rugs and the two young women", "ballooned slowly to the floor", the polysyndeton putting the women in a list with the furnishings. The impression is of a beautiful, weightless home that Tom controls with a single gesture, and of women who seem as much his possessions as the roses.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'Tom\'s pride in what he owns: "I’ve got a nice place here", the sweep of his "broad flat hand", the list of garden, roses and motor-boat, and the former owner "Demaine, the oil man".',
                'The light, dreamlike room: "a bright rosy-colored space", "fragilely bound", curtains "like pale flags", "the frosted wedding-cake of the ceiling".',
                'The floating women, "buoyed up as though upon an anchored balloon", and the hints of unease in "the groan of a picture on the wall".',
                'Tom ending the spell with "a boom", and everything that "ballooned slowly to the floor".',
              ],
            },
          },
          {
            id: 'wjec-c1-04-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "The younger of the two was a stranger to me." to "draws a stunned tribute from me."\n\nHow does the writer create impressions of the two young women, Miss Baker and Daisy, in these lines?\n\nIn your answer, consider:\n- how the writer organises the narrator\'s first meeting with them\n- the words and phrases the writer chooses\n- how these choices affect the reader.\n\nSupport your points with references to the text, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer introduces the two women one after the other, so that the reader can compare them. Miss Baker comes first and seems cold and proud. She is "completely motionless", with "her chin raised a little, as if she were balancing something on it which was quite likely to fall". This comic image suggests that she is holding herself very still and carefully, perhaps to look superior. She gives "no hint" that she has seen the narrator, and he is "almost surprised into murmuring an apology", which shows how she makes other people feel awkward.\n\nDaisy is the opposite. She "made an attempt to rise" but laughs instead, "an absurd, charming little laugh", and the narrator laughs too, so she puts him at ease. Her line, "I’m p-paralyzed with happiness", is playful and exaggerated: the stammer and the joke about being "paralyzed" make her seem charming and theatrical. She holds his hand, "promising that there was no one in the world she so much wanted to see", but the short sentence "That was a way she had" suggests that this is a habit and not completely sincere. The narrator\'s bracketed remark, that he has heard it said her murmur was "only to make people lean toward her", also hints that she knows how to attract attention, although he calls this "an irrelevant criticism".\n\nThe section returns to Miss Baker at the end, with her head tipped back "again", so the two women frame the scene, one still and distant, the other warm but perhaps performing.',
              'Grade 8-9':
                'The writer stages the meeting as a little comedy of manners, in which the narrator, and so the reader, is acted upon by two very different performances.\n\nStructurally, the women are presented in turn and then interwoven. Miss Baker is described first, "a stranger", and the description is all stillness: "extended full length", "completely motionless", "her chin raised a little". The extended simile, "as if she were balancing something on it which was quite likely to fall", turns her poise into a comic balancing act, and it is returned to later, when "the object she was balancing had obviously tottered a little and given her something of a fright". Because the joke runs across the section, her aloofness becomes absurd as well as intimidating. The narrator\'s responses, "almost surprised into murmuring an apology" and "Again a sort of apology arose to my lips", show the social pressure her silence creates, and his closing aphorism, that "complete self-sufficiency draws a stunned tribute from me", admits that her indifference impresses him.\n\nDaisy is introduced through movement and sound. She "made an attempt to rise", but the dashes around "she leaned slightly forward with a conscientious expression" hold the action in suspense until it collapses into laughter, "an absurd, charming little laugh". The pairing of "absurd" and "charming" is the key to her: she is ridiculous and irresistible at once. Her one line, "I’m p-paralyzed with happiness", mocks her own failure to stand, and the stammer makes her delight sound breathless. The narrator then steps back to comment. "That was a way she had" turns her warmth into a habit, and the parenthesis about her murmur, which some said was "only to make people lean toward her", raises the suspicion of calculation before he dismisses it as "an irrelevant criticism that made it no less charming." The effect is that the reader is charmed with Nick while being told, quietly, not to trust the charm: Daisy\'s promise that "there was no one in the world she so much wanted to see" is, we suspect, a promise she makes to everyone.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'Structure: Miss Baker first, then Daisy, then Miss Baker again, so the two are compared; the running joke of the balanced object.',
                'Miss Baker\'s stillness and aloofness ("completely motionless", "no hint") and the narrator\'s urge to apologise.',
                'Daisy\'s charm: "an absurd, charming little laugh", "I’m p-paralyzed with happiness", her promise that no one else mattered.',
                'The narrator\'s comments that cast doubt: "That was a way she had", and the bracketed remark about her murmur.',
              ],
            },
          },
          {
            id: 'wjec-c1-04-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read the last paragraph, from "I looked back at my cousin" to the end of the extract.\n\n"The Buchanans seem to have everything, but the writer makes the reader doubt that they are happy."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about the Buchanans, in these lines and across the whole extract\n- the choices the writer makes to lead you to those thoughts and feelings.\n\nSupport your points with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_04,
            extractSource: EXTRACT_04_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I largely agree. The Buchanans clearly have great wealth: a "Georgian Colonial mansion", a lawn running "for a quarter of a mile", "a half acre of deep, pungent roses" and a motor-boat. But the writer gives hints that they are not content. Tom\'s eyes are "flashing about restlessly", which suggests he is never satisfied, and his body is described as "a cruel body", which makes him threatening rather than happy.\n\nIn the last paragraph, Daisy seems exciting and charming. Her "low, thrilling voice" makes people want to listen, and the narrator says her voice promised "exciting things hovering in the next hour". However, her face is "sad and lovely", and the word "sad" is placed first, before "lovely", which suggests that sadness lies underneath her charm. The idea that each speech is like "an arrangement of notes that will never be played again" makes her moments seem fleeting. Earlier, her joke that she is "paralyzed with happiness" sounds like too much, as if she is performing happiness. So I agree: the writer surrounds them with beautiful things but shows restlessness in Tom and sadness in Daisy.',
              'Grade 8-9':
                'I agree with the view, and I think the writer achieves it by making every sign of wealth and pleasure carry a shadow.\n\nThe extract opens in abundance. The house is "even more elaborate than I expected", the lawn goes "jumping over sun-dials and brick walks and burning gardens", and the personified lawn runs with such "momentum" that it climbs the walls as "bright vines". This is wealth as energy. But the energy is restless. Tom, standing "with his legs apart", owns it all, yet "his eyes flashing about restlessly" suggest a man who cannot be satisfied by what he has, and the narrator\'s verdict on his physique, "It was a body capable of enormous leverage—a cruel body", turns strength into threat. His imagined words, "just because I’m stronger and more of a man than you are", reveal a man who needs to dominate.\n\nThe final lines do the same with Daisy. Her "low, thrilling voice" is so musical that "the ear follows up and down", and the simile of each speech as "an arrangement of notes that will never be played again" makes her charm captivating and fleeting, already passing as it is heard. The key phrase is "sad and lovely": sadness comes first, and the "bright things" in her face, "bright eyes and a bright passionate mouth", are piled up by repetition, as if brightness must be insisted on. Her voice carries "a promise" of pleasures "just a while since" and "hovering in the next hour", never in the present moment, which suggests a life lived in anticipation and memory rather than contentment. Her opening joke, "I’m p-paralyzed with happiness", is so exaggerated that it sounds like happiness performed.\n\nEven the room supports the view. Everything in it floats, "buoyed up as though upon an anchored balloon", until Tom shuts the windows and the women "ballooned slowly to the floor", as if their lightness depends on him. So the writer surrounds the Buchanans with beauty and then lets details of restlessness, cruelty and sadness slip through, leaving the reader sure that they have everything except peace.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'The wealth on show: the mansion, the lawn, the roses, the motor-boat, the bright room.',
                'Tom\'s restlessness and menace: "his eyes flashing about restlessly", "a cruel body".',
                'Daisy\'s charm and its shadow: "sad and lovely", the voice like notes "that will never be played again", pleasures always just past or just to come, the exaggerated "p-paralyzed with happiness".',
                'A sustained judgement on how far the writer makes us doubt their happiness, from the final paragraph and the whole extract.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-04-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Think about the purpose and the reader of your writing. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-04-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Empty Chair.\n\n(b) Write about a time when you went back to a place that held powerful memories for you.\n\n(c) Write a story that begins: "I had been told not to open the box until my birthday."\n\n(d) Write a story that ends with these words: "When I looked up, she was smiling."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (a), The Empty Chair (about 480 words).\n\nFor the first week, nobody sat in Priya's chair.\n\nIt was the one by the window in Room 14, second from the back, with a wobble in its left leg that only Priya knew how to manage. She would hook her foot round it without thinking, the way you might stroke a dog that leaned against you. When her family moved to Toronto in October, the chair stayed exactly where she had left it, pushed in neatly, as if she had only gone to fetch a pen.\n\nMr Harding did not mention it. He took the register in his usual voice and paused, very slightly, after Patel. Then he moved on to Quinn.\n\nI sat next to the empty chair. I had sat next to Priya since Year 7, through fractions and fire drills and the terrible term when we both had braces. We had a system for everything. She did the diagrams; I did the spelling. She remembered the homework; I remembered the excuses. Without her, I kept turning to share a joke with the window.\n\nIn the second week, people started using the chair as a shelf. Coats appeared on it, then bags, then a tower of textbooks that Daniel built during a supply lesson and nobody took down. I found that I hated this. I could not have explained why. It was only a chair. But every time someone dropped a coat on it, it felt as though they were deciding, quietly, that she was not coming back.\n\nSo I began to clear it. Every morning I moved the coats and the bags and stacked the books on the windowsill. Nobody asked me to. Nobody asked me to stop, either. Mr Harding watched me do it on the third morning and said nothing, but the next day the books had been put away before I arrived.\n\nAt the start of November a parcel came, addressed to the whole class in Priya's round, cheerful handwriting. Inside were twenty-eight postcards of snowy streets, one for each of us, and a photograph of her new classroom. It was enormous and bright, with a view of a frozen lake. On the back she had written that her desk was by the window, that it wobbled, and that she felt at home already.\n\nI laughed so loudly that Mr Harding looked up.\n\nMy postcard was different from the others. On the front was a red maple leaf. On the back were four words and a drawing of a chair, done in Priya's careful lines, with an arrow pointing at its left leg.\n\nStill mine. Keep warm.\n\nThat afternoon, when the bell went, I did something I had not done since October. I pulled her chair out, sat on it, and hooked my foot round its leg the way she used to.\n\nIt did not wobble at all. It only needed the right person.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 05: Animal Farm, Chapter III
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-05',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-05-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_05_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-05-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read from the start of the extract, "How they toiled and sweated", to "far better than Jones and his men had ever done."\n\nList five things you learn about the hay harvest in these lines.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. The animals worked very hard to get the hay in.\n2. The harvest was even more successful than they had hoped.\n3. The tools had been designed for human beings, not for animals.\n4. No animal could use a tool that needed it to stand on its hind legs.\n5. The horses understood mowing and raking better than Jones and his men had.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'They toiled and sweated; the harvest was a bigger success than hoped; the work was sometimes hard; the implements were designed for humans; no animal could use a tool needing hind legs; the pigs found a way round every difficulty; the horses knew every inch of the field; the horses understood mowing and raking better than Jones and his men.',
              ],
            },
          },
          {
            id: 'wjec-c1-05-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "The pigs did not actually work" to "as the case might be."\n\nHow does the writer show the position of the pigs on the farm in these lines?\n\nBack up your points with short quotations, and explain what the writer\'s words suggest, using subject terms where they help.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows that the pigs have quietly become the bosses. The phrase "did not actually work, but directed and supervised the others" sets their role apart from everyone else\'s, and the adverb "actually" sounds slightly ironic, as if the narrator expects us to notice. The next sentence, "it was natural that they should assume the leadership", presents their power as obvious, but the word "natural" makes us question whether it really is. The image of the horses who "tramp steadily round and round the field with a pig walking behind" shows the strong doing the work while a pig follows, giving orders. Even the friendly word "comrade" is attached to a driver\'s command, "Gee up, comrade!", so equality is spoken while orders are given.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'The pigs "did not actually work, but directed and supervised", and the irony of "actually".',
                'Their leadership presented as "natural", because of "their superior knowledge".',
                'The pig "walking behind" the working horses, calling orders that use the word "comrade".',
              ],
            },
          },
          {
            id: 'wjec-c1-05-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "And every animal down to the humblest" to "adopted as his personal motto."\n\nWhat impressions do you get of the animals\' life on the farm during this summer?\n\nQuote from these lines to support your answer, and analyse the writer\'s choice of words, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The impression is of a hard-working, happy community. Everyone joins in, "every animal down to the humblest", and the image of "the ducks and hens" carrying "tiny wisps of hay in their beaks" shows that even the smallest animals do their part. The writer uses a superlative to show their success, "the biggest harvest that the farm had ever seen", and stresses their honesty: "not an animal on the farm had stolen so much as a mouthful".\n\nThe animals are happier than ever before. The writer says that "the work of the farm went like clockwork", a simile suggesting that everything runs smoothly. They are "happy as they had never conceived it possible to be", and "Every mouthful of food was an acute positive pleasure", because it is "their own food, produced by themselves and for themselves". The repetition of "themselves" shows their pride in ownership. In contrast, the humans are described as "worthless parasitical human beings", which shows the animals\' contempt for them.\n\nBoxer stands out. He seems "more like three horses than one", and the work seems "to rest on his mighty shoulders". He gets up early to do extra work, and his motto, "I will work harder!", shows how loyal and determined he is. Overall the life seems busy and joyful, although it is also tiring, especially for Boxer.',
              'Grade 8-9':
                'The writer gives an impression of a summer of shared labour and real happiness, told in a confident, celebratory voice that the reader is invited to share and, gradually, to question.\n\nThe communal effort is built up through inclusive phrases. "every animal down to the humblest" stretches the community from top to bottom, and the image of "the ducks and hens" that "toiled to and fro all day in the sun, carrying tiny wisps of hay in their beaks" makes the smallest contribution heroic, the diminutive "tiny wisps" stressing their effort against their size. The record of success is told in comparisons with Jones, "two days\' less time", "the biggest harvest that the farm had ever seen", "no wastage whatever": the superlatives and negatives sound like a triumphant report.\n\nThe second paragraph turns success into happiness. "went like clockwork" suggests a smooth, efficient system, and the animals are "happy as they had never conceived it possible to be", a phrase that pushes their joy beyond what they had imagined. The intensifying "acute positive pleasure" and the repetition in "produced by themselves and for themselves" express pride of ownership, set against the "grudging master" and the "worthless parasitical human beings", whose loaded adjectives put the farm\'s new beliefs into the narrator\'s mouth.\n\nBoxer embodies the spirit of the summer. He is "the admiration of everybody", "more like three horses than one", and the metaphor of the work resting "on his mighty shoulders" makes him the farm\'s foundation. The details of his routine, an arrangement "to call him in the mornings half an hour earlier than anyone else" and "some volunteer labour", show selfless devotion, and his motto, "I will work harder!", is his "answer to every problem, every setback". Yet the qualifications in the paragraph, the "many difficulties" and the threshing done "in the ancient style" with their own breath, suggest how much labour lies beneath the joy, and Boxer\'s willingness to absorb it all is admirable and a little worrying. The impression is of a genuinely happy summer, held up by the strongest animal\'s strength.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'A community in which everyone works: "every animal down to the humblest", the ducks and hens with "tiny wisps of hay in their beaks".',
                'Success and honesty: "the biggest harvest that the farm had ever seen", "no wastage whatever", nothing stolen.',
                'Happiness and pride in ownership: "went like clockwork", "an acute positive pleasure", "produced by themselves and for themselves".',
                'Boxer as the farm\'s strength: "more like three horses than one", "his mighty shoulders", "I will work harder!", with a hint of the cost.',
              ],
            },
          },
          {
            id: 'wjec-c1-05-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "But everyone worked according to his capacity" to "impossible not to believe in her good intentions."\n\nHow does the writer present the animals who do not do their share of the work?\n\nIn your answer, consider:\n- how the writer organises these lines\n- the words and phrases the writer chooses\n- how these choices affect the reader.\n\nSupport your points with references to the text, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer first builds up a picture of perfect co-operation and then breaks it. The repeated "Nobody stole, nobody grumbled" and "Nobody shirked" create a pattern of praise, but the dash in "Nobody shirked—or almost nobody" interrupts it, and the reader immediately wants to know who. This turn introduces the two exceptions.\n\nMollie is presented with gentle mockery. She "was not good at getting up in the mornings", which is a polite way of saying that she is lazy, and she leaves early "on the ground that there was a stone in her hoof", an excuse that sounds convenient. The cat is described as "somewhat peculiar", an understatement, and her pattern is funny: she "could never be found" when there was work, but would "reappear at meal-times". The phrase "as though nothing had happened" shows that her innocence is an act.\n\nThe last sentence is ironic. She made "such excellent excuses, and purred so affectionately, that it was impossible not to believe in her good intentions". The reader can see what the animals cannot, that she is avoiding work. The effect is comic, but it also shows that not everyone on the new farm shares the work equally.',
              'Grade 8-9':
                'The writer uses a sudden turn in the structure, and a narrator who seems more innocent than the reader, to make the shirkers both comic and revealing.\n\nThe section opens with a list of virtues built on repetition and negation: "Nobody stole, nobody grumbled over his rations", and the old vices, "the quarrelling and biting and jealousy", have "almost disappeared". The polysyndeton makes the old life sound noisy and petty, and the qualifier "almost" is the first small crack. Then the pattern breaks in the middle of a sentence: "Nobody shirked—or almost nobody." The dash enacts a correction, as if the narrator has been caught exaggerating, and the reader\'s attention is drawn to what follows.\n\nMollie and the cat are presented through euphemism and understatement, so that their idleness is described as kindly as possible. Mollie "was not good at getting up in the mornings", a gentle phrase for laziness, and the formal "on the ground that there was a stone in her hoof" makes her excuse sound like a legal defence, while "it was true" concedes the point reluctantly. The cat\'s behaviour is "somewhat peculiar", and the writer sets out her habits with a mock-scientific air ("It was soon noticed"), contrasting "when there was work to be done" with "meal-times". The verbs "vanish" and "reappear" make her sound like a conjuring trick. The final sentence holds the irony: the animals find it "impossible not to believe in her good intentions" because she "purred so affectionately". The reader sees what the animals do not, that charm and excuses can take the place of work.\n\nThe effect is comic, but it also qualifies the celebration that comes before. On a farm where "everyone worked according to his capacity", the writer shows that some animals take advantage of the trust of others, and that the community is too good-natured to notice. That gullibility is funny here, but it is also the quality that would leave a community open to cleverer exploiters.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'Structure: the list of virtues ("Nobody stole, nobody grumbled") broken by "Nobody shirked—or almost nobody", which turns to the exceptions.',
                'Mollie\'s gentle laziness and her excuse of "a stone in her hoof".',
                'The cat who "could never be found" at work but would "reappear at meal-times", and the irony of her "good intentions".',
                'The comic, forgiving tone, and the hint that the community can be taken advantage of.',
              ],
            },
          },
          {
            id: 'wjec-c1-05-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "Old Benjamin, the donkey" to the end of the extract.\n\n"In this extract, the animals\' new life is a complete success."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about the animals\' new life, in these lines and across the whole extract\n- the choices the writer makes to lead you to those thoughts and feelings.\n\nSupport your points with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_05,
            extractSource: EXTRACT_05_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I partly agree. In many ways the new life is a success. The harvest was "an even bigger success than they had hoped", the work "went like clockwork", and the animals are "happy as they had never conceived it possible to be". Nobody steals or grumbles, and the old "quarrelling and biting and jealousy" has almost gone.\n\nHowever, the final lines make me less sure. Benjamin "seemed quite unchanged since the Rebellion", which suggests that for him nothing important has improved. He "would express no opinion" about the Rebellion, and his answer, "Donkeys live a long time. None of you has ever seen a dead donkey," is "cryptic", meaning puzzling. It suggests that he has seen many things come and go and expects this to pass too. Other details also cast doubt: the pigs "did not actually work", Mollie and the cat avoid work, and Boxer seems to carry everything on "his mighty shoulders". So the new life is a success for now, but the writer hints that it may not stay that way, or be fair to everyone.',
              'Grade 8-9':
                'I disagree that the new life is a complete success, although I accept that the writer presents its achievements generously. It is the idea of complete success that the final lines call into question.\n\nThe case for success is strong. The extract begins with an exclamation of effort, "How they toiled and sweated to get the hay in!", and the harvest is "an even bigger success than they had hoped". The narrator\'s confident report piles up the evidence: "the biggest harvest that the farm had ever seen", "no wastage whatever", "not an animal on the farm had stolen so much as a mouthful". Food is "an acute positive pleasure" because it is "their own". Read alone, these lines describe a working paradise.\n\nBut the extract ends with Benjamin, and the writer gives him the last word. He is "quite unchanged since the Rebellion", working in "the same slow obstinate way", "never shirking and never volunteering", and the balanced negatives make him a fixed point that the excitement does not move. He "would express no opinion", and when asked if he is happier, his reply, "Donkeys live a long time. None of you has ever seen a dead donkey," refuses to answer. Its cryptic quality is the point: it suggests a long memory and a patience that has outlasted other hopes, and it leaves the others "content" with something they do not understand. Ending on this note invites the reader to step back from the celebration.\n\nLooking back across the extract, the doubts were already there. The pigs "did not actually work, but directed and supervised", and their leadership is called "natural", a word that sounds like the pigs\' own explanation. The horses "tramp steadily round and round the field with a pig walking behind", an image uncomfortably like the old days. Boxer carries "the entire work of the farm" on "his mighty shoulders", answering every setback with more labour, and Mollie and the cat take advantage of others\' good nature. So my feeling is that the new life is a real success, but not a complete one: it is a success paid for unequally, and the writer, through Benjamin, makes us wonder how long it will last.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Agreement: the record harvest, "no wastage whatever", nothing stolen, food as "an acute positive pleasure", the animals "happy as they had never conceived it possible to be".',
                'Disagreement: Benjamin "quite unchanged", his refusal to give an opinion and his "cryptic answer"; the pigs who "did not actually work"; Boxer\'s burden; the shirkers.',
                "A judgement that uses Benjamin's final lines and the whole extract, with comment on how the writer moves the reader from celebration to doubt.",
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-05-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Think about the purpose and the reader of your writing. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-05-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) Strangers.\n\n(b) Write about a time when a journey changed you.\n\n(c) Write a story that begins: "It was the kind of village where everybody knew your business."\n\n(d) Write a story that ends with these words: "I have never told anyone that until now."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (b), a time when a journey changed you (about 540 words).\n\nThe ticket said Cardiff Central to Manchester Piccadilly, change at Crewe, and I read it so many times on the platform that the ink began to rub away under my thumb.\n\nI was thirteen. It was the first time I had been allowed to travel anywhere alone, and Mum had prepared me as if I were crossing the Antarctic. I had a sandwich, an apple, a phone charged to one hundred per cent, my aunt's number written on my hand in case the phone died, and a list of instructions that began with Do not talk to strangers and ended, three pages later, with Text me when you reach Crewe.\n\nFor the first hour I barely moved. I sat with my bag on my knees and watched the fields go by, green and grey and green again, and felt very grown-up and very small at the same time.\n\nThe trouble began at Crewe. The board above the platform flickered, and our connection vanished from it like a word wiped off a whiteboard. Cancelled. A voice from the ceiling apologised for any inconvenience. Around me, people groaned, and phoned, and strode off in different directions as if they had all been given secret instructions. I stood still. None of Mum's three pages covered this.\n\nNext to me, an old man in a tweed cap was peering at the board with his glasses pushed up on his forehead.\n\n'I can't read the small print,' he said, to nobody in particular. 'Can you tell me what it says about Manchester?'\n\nDo not talk to strangers, said Mum's list in my head. But he did not look like the kind of stranger the list had in mind. He looked like someone's grandad who had lost his way.\n\nSo I read it to him. Then, because he was still frowning, I found a man in an orange jacket who knew things, asked him, and came back with the answer: the next train was in forty minutes, from platform eleven, and our tickets would still be valid.\n\n'Platform eleven,' the old man repeated. 'You are a marvel.'\n\nWe walked there together. He was slow, and I carried his bag, which was heavier than mine and clinked faintly. He told me it held jars of his wife's marmalade for his daughter in Stockport. His wife had made marmalade every January for fifty years. This was the last batch.\n\nOn the train he fell asleep almost at once. I watched him for a while, his cap tipped over his eyes, the bag held carefully on his lap, and I realised something that surprised me. I was not frightened any more. Somewhere between the cancelled train and platform eleven, I had stopped waiting for someone to tell me what to do.\n\nAt Stockport his daughter met him on the platform and hugged him for a long time. Before he got off, he pressed a jar of marmalade into my hands.\n\n'For the marvel,' he said.\n\nMy aunt was waiting at Piccadilly. 'Was it all right?' she asked. 'Your mum has texted me eleven times.'\n\n'It was fine,' I said, and I meant it. I had gone a long way that day, further than the ticket said.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },
]
