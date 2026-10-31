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
 *   06  The Great Gatsby, Chapter II: the valley of ashes and Wilson's garage
 *   07  Animal Farm, Chapter IV: the Battle of the Cowshed
 *   08  The Great Gatsby, Chapter III: one of Gatsby's parties
 *   09  Animal Farm, Chapter V: Snowball is driven out
 *   10  The Great Gatsby, Chapter VI: "Can't repeat the past?"
 * Both authors died before 1956 (Orwell 1950, Fitzgerald 1940), so the texts
 * are out of UK copyright.
 * In paper 06's extract the transcription's underscores for italic type are
 * dropped, as its label says; nothing else in any extract differs from the
 * held edition, punctuation included.
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
 *     them; now in this file's words, asking the same things. Papers 07 and 09
 *     asked "How does the writer create tension and drama in these lines?",
 *     thought to be the board's older Question 04 wording (it is in neither of
 *     those two papers); reworded as a precaution.
 *   - 06 Q01 (answer) read "runs beside it" as running beside the valley; "it"
 *     is the railroad, so now the road shrinks away from the valley, running
 *     beside the railway.
 *   - 06 Q05 (Grade 6-7) said Wilson complains that "the work" is slow; he
 *     means Tom's man.
 *   - 06 Q05 (Grade 8-9) said Tom's "company" bordered on violence; it was his
 *     determination to have Nick's company.
 *   - 06 Q11 (model story) had the father knead "the way his grandfather had
 *     done", just after the boy says it was his grandad, the father's father;
 *     now his father.
 *   - 07 Q01 scheme credited "pigeons brought the news" for a question about
 *     the men; removed.
 *   - 07 Q05 (Grade 8-9) said Snowball's slogan "turns a death into a
 *     principle"; soon after the extract the novel shows that the stable-lad
 *     was only stunned, so now it turns killing into a principle, and the
 *     scheme says so and that an answer is not judged on knowing it. The
 *     scheme's "his refusal" to take life is now Boxer's own words.
 *   - 08 Q02 (answer) said "the guests" were too young to know the cordials;
 *     the text says most of his female guests.
 *   - 08 Q05 (Grade 6-7) said the guests "meet" women who never knew each
 *     other's names; the text describes meetings between such women.
 *   - 08 Q05 scheme said the guests deny knowing the host; they deny knowing
 *     where he is.
 *   - 09 Q01 (answer) said the sheep "kept interrupting"; the text says
 *     "occasionally".
 *   - 09 Q03 (Grade 8-9) commented on structure, which Question 03 does not
 *     assess; the remark is gone and the point rests on the words.
 *   - 09 Q05 (Grade 8-9) called "but there would be no more debates" a single
 *     short sentence; it is the final clause of a long one.
 *   - 10 Q01 (answer) said the waltz was "popular" that year; the text says
 *     only that it was of that year.
 *   - 10 Q11 (model story for title c) ran the given first sentence on with a
 *     comma; it now begins with that sentence word for word.
 */

// ─── Extracts ────────────────────────────────────────────────────────────────
// Cut by script from src/data/full-texts and never retyped (see above).

const EXTRACT_06 = `About half way between West Egg and New York the motor road hastily joins the railroad and runs beside it for a quarter of a mile, so as to shrink away from a certain desolate area of land. This is a valley of ashes—a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens; where ashes take the forms of houses and chimneys and rising smoke and, finally, with a transcendent effort, of ash-gray men, who move dimly and already crumbling through the powdery air. Occasionally a line of gray cars crawls along an invisible track, gives out a ghastly creak, and comes to rest, and immediately the ash-gray men swarm up with leaden spades and stir up an impenetrable cloud, which screens their obscure operations from your sight.

But above the gray land and the spasms of bleak dust which drift endlessly over it, you perceive, after a moment, the eyes of Doctor T. J. Eckleburg. The eyes of Doctor T. J. Eckleburg are blue and gigantic—their retinas are one yard high. They look out of no face, but, instead, from a pair of enormous yellow spectacles which pass over a nonexistent nose. Evidently some wild wag of an oculist set them there to fatten his practice in the borough of Queens, and then sank down himself into eternal blindness, or forgot them and moved away. But his eyes, dimmed a little by many paintless days, under sun and rain, brood on over the solemn dumping ground.

The valley of ashes is bounded on one side by a small foul river, and, when the drawbridge is up to let barges through, the passengers on waiting trains can stare at the dismal scene for as long as half an hour. There is always a halt there of at least a minute, and it was because of this that I first met Tom Buchanan’s mistress.

The fact that he had one was insisted upon wherever he was known. His acquaintances resented the fact that he turned up in popular cafés with her and, leaving her at a table, sauntered about, chatting with whomsoever he knew. Though I was curious to see her, I had no desire to meet her—but I did. I went up to New York with Tom on the train one afternoon, and when we stopped by the ashheaps he jumped to his feet and, taking hold of my elbow, literally forced me from the car.

“We're getting off,” he insisted. “I want you to meet my girl.”

I think he’d tanked up a good deal at luncheon, and his determination to have my company bordered on violence. The supercilious assumption was that on Sunday afternoon I had nothing better to do.

I followed him over a low whitewashed railroad fence, and we walked back a hundred yards along the road under Doctor Eckleburg’s persistent stare. The only building in sight was a small block of yellow brick sitting on the edge of the waste land, a sort of compact Main Street ministering to it, and contiguous to absolutely nothing. One of the three shops it contained was for rent and another was an all-night restaurant, approached by a trail of ashes; the third was a garage—Repairs. George B. Wilson. Cars bought and sold.—and I followed Tom inside.

The interior was unprosperous and bare; the only car visible was the dust-covered wreck of a Ford which crouched in a dim corner. It had occurred to me that this shadow of a garage must be a blind, and that sumptuous and romantic apartments were concealed overhead, when the proprietor himself appeared in the door of an office, wiping his hands on a piece of waste. He was a blond, spiritless man, anæmic, and faintly handsome. When he saw us a damp gleam of hope sprang into his light blue eyes.

“Hello, Wilson, old man,” said Tom, slapping him jovially on the shoulder. ‘‘How’s business?”

“I can’t complain,” answered Wilson unconvincingly. “When are you going to sell me that car?”

“Next week; I’ve got my man working on it now.”

“Works pretty slow, don’t he?”

“No, he doesn’t,” said Tom coldly. “And if you feel that way about it, maybe I’d better sell it somewhere else after all.”

“I don’t mean that,” explained Wilson quickly. “I just meant———”`

const EXTRACT_06_SOURCE =
  'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter II. Text: the first edition (New York, 1925), as transcribed by Wikisource. Italics are not shown.'

const EXTRACT_07 = `Early in October, when the corn was cut and stacked and some of it was already threshed, a flight of pigeons came whirling through the air and alighted in the yard of Animal Farm in the wildest excitement. Jones and all his men, with half a dozen others from Foxwood and Pinchfield, had entered the five-barred gate and were coming up the cart-track that led to the farm. They were all carrying sticks, except Jones, who was marching ahead with a gun in his hands. Obviously they were going to attempt the recapture of the farm.

This had long been expected, and all preparations had been made. Snowball, who had studied an old book of Julius Caesar's campaigns which he had found in the farmhouse, was in charge of the defensive operations. He gave his orders quickly, and in a couple of minutes every animal was at his post.

As the human beings approached the farm buildings, Snowball launched his first attack. All the pigeons, to the number of thirty-five, flew to and fro over the men's heads and muted upon them from mid-air; and while the men were dealing with this, the geese, who had been hiding behind the hedge, rushed out and pecked viciously at the calves of their legs. However, this was only a light skirmishing manoeuvre, intended to create a little disorder, and the men easily drove the geese off with their sticks. Snowball now launched his second line of attack. Muriel, Benjamin, and all the sheep, with Snowball at the head of them, rushed forward and prodded and butted the men from every side, while Benjamin turned around and lashed at them with his small hoofs. But once again the men, with their sticks and their hobnailed boots, were too strong for them; and suddenly, at a squeal from Snowball, which was the signal for retreat, all the animals turned and fled through the gateway into the yard.

The men gave a shout of triumph. They saw, as they imagined, their enemies in flight, and they rushed after them in disorder. This was just what Snowball had intended. As soon as they were well inside the yard, the three horses, the three cows, and the rest of the pigs, who had been lying in ambush in the cowshed, suddenly emerged in their rear, cutting them off. Snowball now gave the signal for the charge. He himself dashed straight for Jones. Jones saw him coming, raised his gun and fired. The pellets scored bloody streaks along Snowball's back, and a sheep dropped dead. Without halting for an instant, Snowball flung his fifteen stone against Jones's legs. Jones was hurled into a pile of dung and his gun flew out of his hands. But the most terrifying spectacle of all was Boxer, rearing up on his hind legs and striking out with his great iron-shod hoofs like a stallion. His very first blow took a stable-lad from Foxwood on the skull and stretched him lifeless in the mud. At the sight, several men dropped their sticks and tried to run. Panic overtook them, and the next moment all the animals together were chasing them round and round the yard. They were gored, kicked, bitten, trampled on. There was not an animal on the farm that did not take vengeance on them after his own fashion. Even the cat suddenly leapt off a roof onto a cowman's shoulders and sank her claws in his neck, at which he yelled horribly. At a moment when the opening was clear, the men were glad enough to rush out of the yard and make a bolt for the main road. And so within five minutes of their invasion they were in ignominious retreat by the same way as they had come, with a flock of geese hissing after them and pecking at their calves all the way.

All the men were gone except one. Back in the yard Boxer was pawing with his hoof at the stable-lad who lay face down in the mud, trying to turn him over. The boy did not stir.

"He is dead," said Boxer sorrowfully. "I had no intention of doing that. I forgot that I was wearing iron shoes. Who will believe that I did not do this on purpose?"

"No sentimentality, comrade!" cried Snowball from whose wounds the blood was still dripping. "War is war. The only good human being is a dead one."

"I have no wish to take life, not even human life," repeated Boxer, and his eyes were full of tears.`

const EXTRACT_07_SOURCE =
  'George Orwell, Animal Farm (1945), Chapter IV. Text: Project Gutenberg Australia.'

const EXTRACT_08 = `There was music from my neighbor’s house through the summer nights. In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars. At high tide in the afternoon I watched his guests diving from the tower of his raft, or taking the sun on the hot sand of his beach while his two motor-boats slit the waters of the Sound, drawing aquaplanes over cataracts of foam. On week-ends his Rolls-Royce became an omnibus, bearing parties to and from the city between nine in the morning and long past midnight, while his station wagon scampered like a brisk yellow bug to meet all trains. And on Mondays eight servants, including an extra gardener, toiled all day with mops and scrubbing-brushes and hammers and garden-shears, repairing the ravages of the night before.

Every Friday five crates of oranges and lemons arrived from a fruiterer in New York—every Monday these same oranges and lemons left his back door in a pyramid of pulpless halves. There was a machine in the kitchen which could extract the juice of two hundred oranges in half an hour if a little button was pressed two hundred times by a butler’s thumb.

At least once a fortnight a corps of caterers came down with several hundred feet of canvas and enough colored lights to make a Christmas tree of Gatsby’s enormous garden. On buffet tables, garnished with glistening hors-d’œuvre, spiced baked hams crowded against salads of harlequin designs and pastry pigs and turkeys bewitched to a dark gold. In the main hall a bar with a real brass rail was set up, and stocked with gins and liquors and with cordials so long forgotten that most of his female guests were too young to know one from another.

By seven o’clock the orchestra has arrived, no thin five-piece affair, but a whole pitful of oboes and trombones and saxophones and viols and cornets and piccolos, and low and high drums. The last swimmers have come in from the beach now and are dressing up-stairs; the cars from New York are parked five deep in the drive, and already the halls and salons and verandas are gaudy with primary colors, and hair bobbed in strange new ways, and shawls beyond the dreams of Castile. The bar is in full swing, and floating rounds of cocktails permeate the garden outside, until the air is alive with chatter and laughter, and casual innuendo and introductions forgotten on the spot, and enthusiastic meetings between women who never knew each other’s names.

The lights grow brighter as the earth lurches away from the sun, and now the orchestra is playing yellow cocktail music, and the opera of voices pitches a key higher. Laughter is easier minute by minute, spilled with prodigality, tipped out at a cheerful word. The groups change more swiftly, swell with new arrivals, dissolve and form in the same breath; already there are wanderers, confident girls who weave here and there among the stouter and more stable, become for a sharp, joyous moment the centre of a group, and then, excited with triumph, glide on through the sea-change of faces and voices and color under the constantly changing light.

Suddenly one of these gypsies, in trembling opal, seizes a cocktail out of the air, dumps it down for courage and, moving her hands like Frisco, dances out alone on the canvas platform. A momentary hush; the orchestra leader varies his rhythm obligingly for her, and there is a burst of chatter as the erroneous news goes around that she is Gilda Gray’s understudy from the Follies. The party has begun.

I believe that on the first night I went to Gatsby’s house I was one of the few guests who had actually been invited. People were not invited—they went there. They got into automobiles which bore them out to Long Island, and somehow they ended up at Gatsby’s door. Once there they were introduced by somebody who knew Gatsby, and after that they conducted themselves according to the rules of behavior associated with an amusement park. Sometimes they came and went without having met Gatsby at all, came for the party with a simplicity of heart that was its own ticket of admission.

I had been actually invited. A chauffeur in a uniform of robin’s-egg blue crossed my lawn early that Saturday morning with a surprisingly formal note from his employer: the honor would be entirely Gatsby’s, it said, if I would attend his “little party” that night. He had seen me several times, and had intended to call on me long before, but a peculiar combination of circumstances had prevented it— signed Jay Gatsby, in a majestic hand.

Dressed up in white flannels I went over to his lawn a little after seven, and wandered around rather ill at ease among swirls and eddies of people I didn’t know—though here and there was a face I had noticed on the commuting train. I was immediately struck by the number of young Englishmen dotted about; all well dressed, all looking a little hungry, and all talking in low, earnest voices to solid and prosperous Americans. I was sure that they were selling something: bonds or insurance or automobiles. They were at least agonizingly aware of the easy money in the vicinity and convinced that it was theirs for a few words in the right key.

As soon as I arrived I made an attempt to find my host, but the two or three people of whom I asked his whereabouts stared at me in such an amazed way, and denied so vehemently any knowledge of his movements, that I slunk off in the direction of the cocktail table—the only place in the garden where a single man could linger without looking purposeless and alone.`

const EXTRACT_08_SOURCE =
  'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter III. Text: the first edition (New York, 1925), as transcribed by Wikisource.'

const EXTRACT_09 = `At last the day came when Snowball's plans were completed. At the Meeting on the following Sunday the question of whether or not to begin work on the windmill was to be put to the vote. When the animals had assembled in the big barn, Snowball stood up and, though occasionally interrupted by bleating from the sheep, set forth his reasons for advocating the building of the windmill. Then Napoleon stood up to reply. He said very quietly that the windmill was nonsense and that he advised nobody to vote for it, and promptly sat down again; he had spoken for barely thirty seconds, and seemed almost indifferent as to the effect he produced. At this Snowball sprang to his feet, and shouting down the sheep, who had begun bleating again, broke into a passionate appeal in favour of the windmill. Until now the animals had been about equally divided in their sympathies, but in a moment Snowball's eloquence had carried them away. In glowing sentences he painted a picture of Animal Farm as it might be when sordid labour was lifted from the animals' backs. His imagination had now run far beyond chaff-cutters and turnip-slicers. Electricity, he said, could operate threshing machines, ploughs, harrows, rollers, and reapers and binders, besides supplying every stall with its own electric light, hot and cold water, and an electric heater. By the time he had finished speaking, there was no doubt as to which way the vote would go. But just at this moment Napoleon stood up and, casting a peculiar sidelong look at Snowball, uttered a high-pitched whimper of a kind no one had ever heard him utter before.

At this there was a terrible baying sound outside, and nine enormous dogs wearing brass-studded collars came bounding into the barn. They dashed straight for Snowball, who only sprang from his place just in time to escape their snapping jaws. In a moment he was out of the door and they were after him. Too amazed and frightened to speak, all the animals crowded through the door to watch the chase. Snowball was racing across the long pasture that led to the road. He was running as only a pig can run, but the dogs were close on his heels. Suddenly he slipped and it seemed certain that they had him. Then he was up again, running faster than ever, then the dogs were gaining on him again. One of them all but closed his jaws on Snowball's tail, but Snowball whisked it free just in time. Then he put on an extra spurt and, with a few inches to spare, slipped through a hole in the hedge and was seen no more.

Silent and terrified, the animals crept back into the barn. In a moment the dogs came bounding back. At first no one had been able to imagine where these creatures came from, but the problem was soon solved: they were the puppies whom Napoleon had taken away from their mothers and reared privately. Though not yet full-grown, they were huge dogs, and as fierce-looking as wolves. They kept close to Napoleon. It was noticed that they wagged their tails to him in the same way as the other dogs had been used to do to Mr. Jones.

Napoleon, with the dogs following him, now mounted on to the raised portion of the floor where Major had previously stood to deliver his speech. He announced that from now on the Sunday-morning Meetings would come to an end. They were unnecessary, he said, and wasted time. In future all questions relating to the working of the farm would be settled by a special committee of pigs, presided over by himself. These would meet in private and afterwards communicate their decisions to the others. The animals would still assemble on Sunday mornings to salute the flag, sing 'Beasts of England', and receive their orders for the week; but there would be no more debates.

In spite of the shock that Snowball's expulsion had given them, the animals were dismayed by this announcement. Several of them would have protested if they could have found the right arguments. Even Boxer was vaguely troubled. He set his ears back, shook his forelock several times, and tried hard to marshal his thoughts; but in the end he could not think of anything to say. Some of the pigs themselves, however, were more articulate. Four young porkers in the front row uttered shrill squeals of disapproval, and all four of them sprang to their feet and began speaking at once. But suddenly the dogs sitting round Napoleon let out deep, menacing growls, and the pigs fell silent and sat down again. Then the sheep broke out into a tremendous bleating of "Four legs good, two legs bad!" which went on for nearly a quarter of an hour and put an end to any chance of discussion.`

const EXTRACT_09_SOURCE =
  'George Orwell, Animal Farm (1945), Chapter V. Text: Project Gutenberg Australia.'

const EXTRACT_10 = `Her glance left me and sought the lighted top of the steps, where “Three o’Clock in the Morning,” a neat, sad little waltz of that year, was drifting out the open door. After all, in the very casualness of Gatsby’s party there were romantic possibilities totally absent from her world. What was it up there in the song that seemed to be calling her back inside? What would happen now in the dim, incalculable hours? Perhaps some unbelievable guest would arrive, a person infinitely rare and to be marvelled at, some authentically radiant young girl who with one fresh glance at Gatsby, one moment of magical encounter, would blot out those five years of unwavering devotion.

I stayed late that night, Gatsby asked me to wait until he was free, and I lingered in the garden until the inevitable swimming party had run up, chilled and exalted, from the black beach, until the lights were extinguished in the guest-rooms overhead. When he came down the steps at last the tanned skin was drawn unusually tight on his face, and his eyes were bright and tired.

“She didn’t like it,” he said immediately.

“Of course she did.”

“She didn’t like it,” he insisted. “She didn’t have a good time.”

He was silent, and I guessed at his unutterable depression.

“I feel far away from her,” he said. “It’s hard to make her understand.”

“You mean about the dance?”

“The dance?” He dismissed all the dances he had given with a snap of his fingers. “Old sport, the dance is unimportant.”

He wanted nothing less of Daisy than that she should go to Tom and say: “I never loved you.” After she had obliterated four years with that sentence they could decide upon the more practical measures to be taken. One of them was that, after she was free, they were to go back to Louisville and be married from her house—just as if it were five years ago.

“And she doesn’t understand,” he said. “She used to be able to understand. We’d sit for hours—”

He broke off and began to walk up and down a desolate path of fruit rinds and discarded favors and crushed flowers.

“I wouldn’t ask too much of her,” I ventured. “You can’t repeat the past.”

“Can’t repeat the past?” he cried incredulously. “Why of course you can!”

He looked around him wildly, as if the past were lurking here in the shadow of his house, just out of reach of his hand.

“I’m going to fix everything just the way it was before,” he said, nodding determinedly. “She’ll see.”

He talked a lot about the past, and I gathered that he wanted to recover something, some idea of himself perhaps, that had gone into loving Daisy. His life had been confused and disordered since then, but if he could once return to a certain starting place and go over it all slowly, he could find out what that thing was. . . .

. . . One autumn night, five years before, they had been walking down the street when the leaves were falling, and they came to a place where there were no trees and the sidewalk was white with moonlight. They stopped here and turned toward each other. Now it was a cool night with that mysterious excitement in it which comes at the two changes of the year. The quiet lights in the houses were humming out into the darkness and there was a stir and bustle among the stars. Out of the corner of his eye Gatsby saw that the blocks of the sidewalks really formed a ladder and mounted to a secret place above the trees—he could climb to it, if he climbed alone, and once there he could suck on the pap of life, gulp down the incomparable milk of wonder.

His heart beat faster and faster as Daisy’s white face came up to his own. He knew that when he kissed this girl, and forever wed his unutterable visions to her perishable breath, his mind would never romp again like the mind of God. So he waited, listening for a moment longer to the tuning-fork that had been struck upon a star. Then he kissed her. At his lips’ touch she blossomed for him like a flower and the incarnation was complete.

Through all he said, even through his appalling sentimentality, I was reminded of something—an elusive rhythm, a fragment of lost words, that I had heard somewhere a long time ago. For a moment a phrase tried to take shape in my mouth and my lips parted like a dumb man’s, as though there was more struggling upon them than a wisp of startled air. But they made no sound, and what I had almost remembered was uncommunicable forever.`

const EXTRACT_10_SOURCE =
  'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter VI. Text: the first edition (New York, 1925), as transcribed by Wikisource.'

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

export const wjecC1B: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 06: The Great Gatsby, Chapter II
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-06',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-06-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_06_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-06-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "About half way between West Egg and New York" to "screens their obscure operations from your sight."\n\nList five things you learn about the valley of ashes in this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_06,
            extractSource: EXTRACT_06_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. It lies about half way between West Egg and New York.\n2. The road shrinks away from it, running beside the railway for a quarter of a mile.\n3. Ashes there are heaped into ridges and hills.\n4. The ashes take the shapes of houses, chimneys and rising smoke.\n5. Grey men with spades work there, stirring up clouds of ash.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'It is half way between West Egg and New York; the motor road joins the railroad there for a quarter of a mile; the road seems to shrink away from it; it is desolate; ashes grow like wheat into ridges, hills and grotesque gardens; they take the forms of houses, chimneys and smoke; ash-grey men move dimly through the powdery air; lines of grey cars crawl along an invisible track and creak to a stop; men with leaden spades stir up an impenetrable cloud.',
              ],
            },
          },
          {
            id: 'wjec-c1-06-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "But above the gray land" to "brood on over the solemn dumping ground."\n\nHow does the writer make the eyes of Doctor T. J. Eckleburg seem strange and unsettling?\n\nBack up your points with short quotations, and explain what the writer\'s words suggest, using subject terms where they help.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_06,
            extractSource: EXTRACT_06_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer makes the eyes seem huge and inhuman. They are "blue and gigantic", and the precise measurement "their retinas are one yard high" makes their size startling. The eyes look "out of no face", and the "enormous yellow spectacles" pass over "a nonexistent nose", so they seem to float without a body, which is eerie. The joke that "some wild wag of an oculist" put them there and then "sank down himself into eternal blindness" adds a dark irony: the man who made giant eyes may now see nothing. Finally the verb "brood" personifies the eyes, as if they were thinking gloomy thoughts as they watch over "the solemn dumping ground", which makes the reader feel that the valley is being watched and judged.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'The size of the eyes: "blue and gigantic", "their retinas are one yard high".',
                'Eyes with no face, behind spectacles over "a nonexistent nose".',
                'The dark joke of the oculist who "sank down himself into eternal blindness".',
                'The personifying verb "brood", and the "solemn dumping ground" they watch.',
              ],
            },
          },
          {
            id: 'wjec-c1-06-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "The valley of ashes is bounded on one side" to "I had nothing better to do."\n\nWhat impressions do you get of Tom Buchanan in these lines?\n\nQuote from these lines to support your answer, and analyse the writer\'s choice of words, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_06,
            extractSource: EXTRACT_06_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'Tom comes across as selfish, careless of others and used to getting his own way. The narrator says that his having a mistress "was insisted upon wherever he was known", which suggests that he does not even try to hide it. He takes her to "popular cafés" and then, "leaving her at a table, sauntered about, chatting with whomsoever he knew". The verb "sauntered" makes him seem relaxed and pleased with himself, while "leaving her at a table" shows that he treats her like a possession he can put down.\n\nHe is also forceful. On the train he "jumped to his feet" and, "taking hold of my elbow, literally forced me from the car". The adverb "literally" stresses that this was real physical force, not a figure of speech. His words, "We\'re getting off," and "I want you to meet my girl", are commands, and "insisted" shows that he will not be refused. The narrator says that Tom\'s "determination to have my company bordered on violence", which makes him seem dangerous as well as rude. Finally, "The supercilious assumption" that Nick had "nothing better to do" shows Tom\'s arrogance: he assumes that other people\'s time belongs to him.',
              'Grade 8-9':
                'The writer builds an impression of Tom as a man who treats other people as objects, and the narrator\'s dry tone makes the reader judge him.\n\nThe first thing we learn is that Tom has a mistress, and "The fact that he had one was insisted upon wherever he was known". The passive "was insisted upon" hides who does the insisting, but it suggests that Tom makes no secret of it, as if being seen with her were part of his status. His acquaintances "resented" his behaviour in "popular cafés", where, "leaving her at a table", he "sauntered about, chatting with whomsoever he knew". The contrast between the woman left sitting and the man drifting from table to table shows a careless, showy selfishness. Even the formal pronoun "whomsoever" sounds mocking, as if Tom will talk to anyone except the person he came with.\n\nHis treatment of Nick is the same. The narrator "had no desire to meet her—but I did", and the dash marks the moment his wishes stop counting. Tom "jumped to his feet" and, "taking hold of my elbow, literally forced me from the car": the adverb "literally" insists that the force is physical, and the verbs are of seizing and pushing. His speech is all command. "We\'re getting off," he "insisted", and "I want you to meet my girl" turns a person into a possession with the word "my". The narrator\'s judgement that his "determination to have my company bordered on violence" is restrained but serious, and the final sentence, "The supercilious assumption was that on Sunday afternoon I had nothing better to do", uses an adjective of arrogance and lets us hear Nick\'s quiet resentment. The impression is of a powerful man who never imagines being refused, seen by a narrator who notices everything and objects politely.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'His openness about his mistress, "insisted upon wherever he was known", and the way he leaves her "at a table" while he "sauntered about".',
                'His physical force: he "literally forced me from the car"; "his determination to have my company bordered on violence".',
                'His commanding speech ("We\'re getting off," "my girl") and his arrogance, "The supercilious assumption".',
                "The narrator's dry, judging tone, which shapes the reader's view.",
              ],
            },
          },
          {
            id: 'wjec-c1-06-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "I followed him over a low whitewashed railroad fence" to "a damp gleam of hope sprang into his light blue eyes."\n\nHow does the writer create an impression of the garage and its owner in these lines?\n\nIn your answer, consider:\n- the order in which the narrator sees things\n- the words and phrases the writer chooses\n- how these choices affect the reader.\n\nSupport your points with references to the text, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_06,
            extractSource: EXTRACT_06_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer moves from the outside to the inside and then to the man, so that the impression builds step by step. The walk is made "under Doctor Eckleburg’s persistent stare", which reminds us that the giant eyes watch everything. The building is "a small block of yellow brick sitting on the edge of the waste land", and the phrase "contiguous to absolutely nothing" stresses how isolated it is. Even the restaurant is "approached by a trail of ashes", so the valley\'s dirt creeps up to the door.\n\nInside, the garage is "unprosperous and bare", and the only car is "the dust-covered wreck of a Ford which crouched in a dim corner". The verb "crouched" personifies the car, as if it were hiding or afraid. The narrator then shares a wrong guess, that the garage "must be a blind" for "sumptuous and romantic apartments" upstairs, and this raises our expectations just before the owner appears. Wilson is a disappointment: "a blond, spiritless man, anæmic, and faintly handsome". The list of adjectives makes him seem weak and drained of colour, like the ashes around him. The last sentence, "a damp gleam of hope sprang into his light blue eyes", shows that he wants something badly from Tom, and the word "damp" makes even his hope seem feeble.',
              'Grade 8-9':
                'The writer controls the order of what we see, so that the garage and its owner arrive as an anticlimax that tells us a great deal.\n\nThe approach is framed by the valley. The two men walk "under Doctor Eckleburg’s persistent stare", and the adjective "persistent" keeps the watching eyes in the scene. The building is introduced with mock grandeur, "a sort of compact Main Street ministering to it", as if this scrap of brick were a town serving a parish, and then the deflating phrase "contiguous to absolutely nothing", whose formal Latinate word and blunt "absolutely nothing" mock its loneliness. The list of its three shops, one "for rent", one "approached by a trail of ashes", and the garage, ends with its sign, "Repairs. George B. Wilson. Cars bought and sold.", whose clipped fragments sound hopeful and empty at once.\n\nInside, the description narrows. The interior is "unprosperous and bare", a negative word that describes wealth by its absence, and the single car is a "dust-covered wreck" that "crouched in a dim corner", personified as something cowering. Then the writer inserts the narrator\'s fantasy, that the garage "must be a blind" for "sumptuous and romantic apartments" overhead. This sets up a glamorous expectation only to deflate it with the entrance of the proprietor, "wiping his hands on a piece of waste", a humble, working gesture.\n\nWilson himself is given a list of adjectives that drain him: "blond, spiritless", "anæmic", and only "faintly handsome", the adverb qualifying even his one good quality. The final sentence turns from description to feeling: "a damp gleam of hope sprang into his light blue eyes". The verb "sprang" suggests sudden eagerness, but the adjective "damp" softens it, so his hope seems weak and pathetic. Placed at the end of the paragraph, it leaves the reader sensing that Wilson depends on Tom, and that this dependence will matter.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'Structure: from the road under the "persistent stare", to the lonely building, to the bare interior, to the man.',
                'The isolation and dirt of the place: "contiguous to absolutely nothing", "approached by a trail of ashes", "unprosperous and bare".',
                'The expectation of "sumptuous and romantic apartments" overturned by the humble proprietor.',
                'Wilson\'s drained appearance ("spiritless", "anæmic", "faintly handsome") and the "damp gleam of hope" that ends the section.',
              ],
            },
          },
          {
            id: 'wjec-c1-06-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "Hello, Wilson, old man" to the end of the extract.\n\n"In this extract, Tom Buchanan has power over everyone he meets, and he enjoys using it."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about Tom, in these lines and across the whole extract\n- the choices the writer makes to lead you to those thoughts and feelings.\n\nSupport your points with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_06,
            extractSource: EXTRACT_06_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I agree. In the final lines Tom seems friendly at first, "slapping him jovially on the shoulder" and asking "How’s business?", but his friendliness is on his own terms. When Wilson asks, "When are you going to sell me that car?", Tom answers vaguely, and as soon as Wilson complains that Tom\'s man "Works pretty slow", Tom turns "coldly" and threatens: "maybe I’d better sell it somewhere else after all." Wilson immediately backs down, apologising "quickly", and his last words, "I just meant———", are cut off, which shows that he does not dare to finish. Tom has the power because Wilson needs the car.\n\nEarlier in the extract he uses the same power on Nick. He "literally forced me from the car" and his "determination to have my company bordered on violence". He also treats his mistress as someone to show off and then leave "at a table". I think he does enjoy it: "jovially" and "sauntered" suggest he is relaxed and pleased with himself while others are uncomfortable. However, the narrator does not simply accept it. His dry comments, such as "The supercilious assumption", show that Tom\'s power does not win Nick\'s respect.',
              'Grade 8-9':
                'I largely agree that Tom has power over everyone in this extract, and the writer shows it most clearly in the final lines, but I think his enjoyment of it is shown as something careless rather than cruel, which is in some ways worse.\n\nThe final exchange is a small study in control. Tom\'s greeting, "Hello, Wilson, old man", with the "slapping him jovially on the shoulder", is the friendliness of a man who can afford to be friendly. Wilson\'s reply, "I can’t complain", is given the adverb "unconvincingly", so we hear the strain beneath it, and his question about the car shows what he wants. Tom\'s answer, "Next week; I’ve got my man working on it now", promises without committing. When Wilson ventures a mild complaint, the grammar of "Works pretty slow, don’t he?" marks him as the poorer, less educated man, and Tom\'s response is instant: "said Tom coldly", followed by the threat "maybe I’d better sell it somewhere else after all." The shift from "jovially" to "coldly" in a few lines shows how quickly his warmth can be withdrawn. Wilson\'s collapse, "explained Wilson quickly", and his unfinished "I just meant———", with the long dash cutting him off, show that he dare not finish a sentence that might displease Tom.\n\nThe whole extract prepares for this. Tom "literally forced" Nick from the train, his determination to have Nick\'s company "bordered on violence", and his mistress is someone he leaves "at a table" while he "sauntered about". In each case he takes what he wants, a companion, an audience, a sale, without asking what it costs anyone else. The setting adds to the effect: Wilson lives in a valley of "ash-gray men" who move "already crumbling", beneath eyes that "brood on" over "the solemn dumping ground", so his powerlessness seems part of the place itself.\n\nWhether Tom enjoys his power is less certain. He seems hardly to notice it, which is the point: the narrator\'s phrase "The supercilious assumption" suggests a man for whom other people\'s wishes simply do not register. So I agree with the view, with one change. Tom does not so much enjoy his power as take it for granted.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Agreement: the switch from "jovially" to "coldly"; the threat to "sell it somewhere else"; Wilson\'s quick apology cut off at "I just meant"; Nick "literally forced" from the train; the mistress left "at a table".',
                'Qualification: Tom seems not so much to enjoy power as to take it for granted ("The supercilious assumption"); the narrator\'s dry judgement resists him.',
                'Use of the setting (the "ash-gray men", the watching eyes) and of the final lines to support a clear judgement.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-06-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Think about the purpose and the reader of your writing. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-06-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) Four in the Morning.\n\n(b) Write about a time when you found freedom in an unexpected place.\n\n(c) Write a story that begins: "Nobody ever stopped in our town unless they were lost."\n\n(d) Write a story that ends with these words: "I never looked back."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (a), Four in the Morning (about 560 words).\n\nAt four in the morning the town belongs to nobody, which is why my father loves it.\n\nThe alarm went off at a quarter to four, and for a moment I could not work out where I was or why the world was so dark. Then I remembered. It was my fourteenth birthday, and Dad had promised, months ago, that this was the day I would finally come to work with him at the bakery.\n\nWe walked there. The streets were wet and empty and orange under the lamps, and our footsteps sounded louder than footsteps should. A fox trotted across the road ahead of us, glanced at us as if we were the strange ones, and disappeared under a hedge. Dad did not say much. He never does before five. But he walked a little slower than usual, so that I could keep up.\n\nThe bakery was warm the moment he opened the back door. It smelled of yesterday's bread and flour dust and hot metal. Dad tied an apron round me, the old striped one that had been his father's, and showed me the order book. Two hundred loaves, eighty rolls, the café's croissants, the school's Friday buns. It looked impossible.\n\n'It always looks impossible,' Dad said, reading my face. 'Then it gets done.'\n\nAt twenty past four the big mixer gave a grinding shriek and stopped.\n\nDad pressed the switch. Nothing. He took the cover off, looked inside, and let out a long breath through his teeth. Then he stood very still in the middle of the kitchen, with flour on his hands, and I realised that he did not know what to do.\n\nI had never seen my father not know what to do.\n\n'Grandad didn't have a mixer,' I said. I do not know where the words came from. 'You told me. He did it all by hand.'\n\nDad looked at me for a long moment. Then he laughed, a short, surprised laugh, and rolled up his sleeves.\n\nWe kneaded the dough on the long wooden table, side by side, the way his father had done before the bakery had a mixer. It was hard. My arms burned after ten minutes and my shoulders after twenty. Dad showed me how to use the heel of my hand, how to fold and turn and push, how to feel the moment when the dough stopped fighting and became smooth and alive under my fingers. We did not talk. We did not need to. The radio played quietly, the ovens ticked as they heated, and outside the window the sky went from black to navy to the colour of weak tea.\n\nAt half past six the first loaves came out of the oven, brown and crackling. Dad tapped the bottom of one with his knuckle and listened, the way a doctor listens to a heartbeat.\n\n'Hollow,' he said. 'That's right.'\n\nBy seven the shop was open and there was a queue. Nobody in it knew that the mixer had broken, or that the bread had been made by hand by a tired man and his son. They just bought it, and carried it home, warm, to their kitchens.\n\nAt eight Dad sent me home to sleep. At the door he stopped me.\n\n'Same time next Saturday?' he said.\n\nI have been up at four in the morning on Saturdays ever since.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 07: Animal Farm, Chapter IV
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-07',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-07-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_07_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-07-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "Early in October" to "the recapture of the farm."\n\nList five things you learn about the men who come to the farm in this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_07,
            extractSource: EXTRACT_07_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. Jones came with all his men.\n2. Half a dozen others came with them from Foxwood and Pinchfield.\n3. They came in through the five-barred gate and up the cart-track.\n4. All of them except Jones carried sticks.\n5. Jones marched ahead with a gun in his hands.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'It was early in October, after the corn was cut; Jones and all his men came; half a dozen others from Foxwood and Pinchfield came too; they entered the five-barred gate and came up the cart-track; all but Jones carried sticks; Jones marched ahead with a gun; they meant to recapture the farm.',
              ],
            },
          },
          {
            id: 'wjec-c1-07-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "This had long been expected" to "every animal was at his post."\n\nHow does the writer show that Snowball is a capable leader?\n\nBack up your points with short quotations, and explain what the writer\'s words suggest, using subject terms where they help.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_07,
            extractSource: EXTRACT_07_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows Snowball\'s leadership through preparation and speed. The opening, "This had long been expected, and all preparations had been made", suggests that he planned ahead, and the passive phrasing makes the defence sound organised and calm. Snowball has studied "an old book of Julius Caesar\'s campaigns", which shows that he is clever and willing to learn from a great general, and he is "in charge of the defensive operations", a formal, military phrase that makes him sound like a real commander. Finally, "He gave his orders quickly, and in a couple of minutes every animal was at his post": the short time and the word "every" show that the animals trust him and obey him at once.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'The preparation: "This had long been expected, and all preparations had been made".',
                'His study of "an old book of Julius Caesar\'s campaigns", and the military phrase "in charge of the defensive operations".',
                'The speed and obedience: "in a couple of minutes every animal was at his post".',
              ],
            },
          },
          {
            id: 'wjec-c1-07-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "As the human beings approached the farm buildings" to "fled through the gateway into the yard."\n\nWhat impressions do you get of the animals as they fight in these lines?\n\nQuote from these lines to support your answer, and analyse the writer\'s choice of words, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_07,
            extractSource: EXTRACT_07_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The animals seem brave, well organised and determined, even though they are weaker than the men. The attack is carefully planned: Snowball "launched his first attack" and then "his second line of attack", and the military language makes the animals sound like a trained army. Each kind of animal fights in its own way. The pigeons "flew to and fro over the men\'s heads and muted upon them from mid-air", which is comic and shows that even small creatures can be useful, while the geese "rushed out and pecked viciously at the calves of their legs". The adverb "viciously" shows how fierce they are.\n\nThe second attack shows courage. Muriel, Benjamin and the sheep "rushed forward and prodded and butted the men from every side", and the verbs "prodded" and "butted" make the attack physical and energetic. Even the donkey "lashed at them with his small hoofs". However, the writer is honest that they are weaker: "the men, with their sticks and their hobnailed boots, were too strong for them". The impression is of animals who fight bravely against stronger enemies, and of a plan, since the retreat comes "at a squeal from Snowball, which was the signal for retreat", so even running away is under control.',
              'Grade 8-9':
                'The writer gives an impression of animals who are brave and disciplined, fighting as a planned army, but also of a battle seen with a touch of comedy and with honesty about who is stronger.\n\nThe vocabulary is military throughout. Snowball "launched his first attack", the opening move is called "only a light skirmishing manoeuvre, intended to create a little disorder", and then comes "his second line of attack". This language turns a farmyard scuffle into a campaign, and it suggests that the animals have been trained and are following a plan rather than acting on instinct. Each group has its role: the pigeons, "to the number of thirty-five", attack from above, the geese "who had been hiding behind the hedge" from the side, and then "Muriel, Benjamin, and all the sheep, with Snowball at the head of them" from the front. The precise number and the hidden geese make it sound like a real battle report.\n\nThe animals\' courage is shown in active, physical verbs: the geese "rushed out and pecked viciously", and the sheep "rushed forward and prodded and butted the men from every side", the polysyndeton making the attack sound relentless. There is comedy too. The pigeons "muted upon them from mid-air", an old-fashioned, delicate word for a very undignified attack, so the reader enjoys the men\'s discomfort.\n\nYet the writer does not pretend the animals are stronger. "However, this was only a light skirmishing manoeuvre" undercuts the first success, "the men easily drove the geese off with their sticks", and in the second attack "once again the men, with their sticks and their hobnailed boots, were too strong for them". The repeated detail of the men\'s weapons reminds us of their advantage. Even so, the retreat is not a defeat: it happens "suddenly, at a squeal from Snowball, which was the signal for retreat", so the reader senses a trap. The impression is of brave, organised animals whose real strength is their leader\'s cunning.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'The military planning: "launched his first attack", "a light skirmishing manoeuvre", "his second line of attack".',
                'Each animal\'s part: the pigeons, the geese that "pecked viciously", the sheep that "prodded and butted".',
                'The comedy of the pigeons, and the honest admission that "the men ... were too strong for them".',
                'The planned retreat "at a squeal from Snowball", hinting at a trap.',
              ],
            },
          },
          {
            id: 'wjec-c1-07-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "The men gave a shout of triumph." to "pecking at their calves all the way."\n\nHow does the writer make the battle tense and dramatic in these lines?\n\nIn your answer, consider:\n- what happens, and the order in which the writer tells it\n- the words and phrases the writer chooses\n- how these choices affect the reader.\n\nSupport your points with references to the text, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_07,
            extractSource: EXTRACT_07_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer creates tension through a sudden reversal. The men give "a shout of triumph" because they think they have won, but the short sentence "This was just what Snowball had intended" tells the reader that they have walked into a trap. The animals "who had been lying in ambush in the cowshed, suddenly emerged in their rear, cutting them off", and the adverb "suddenly" makes the moment shocking.\n\nThe pace then speeds up with short sentences: "He himself dashed straight for Jones. Jones saw him coming, raised his gun and fired." The gunshot brings danger, as "The pellets scored bloody streaks along Snowball\'s back, and a sheep dropped dead." The words "bloody" and "dead" remind the reader that this is a real battle. Snowball does not stop: "Without halting for an instant", he knocks Jones into "a pile of dung", a humiliating moment for Jones.\n\nThe climax is Boxer, "the most terrifying spectacle of all", "rearing up on his hind legs" with his "great iron-shod hoofs like a stallion". The simile makes him seem wild and powerful. After this the men panic, and the list "They were gored, kicked, bitten, trampled on" shows the chaos of the fight. The writer ends with the men "in ignominious retreat", chased by "a flock of geese hissing after them", which releases the tension with a comic image of the defeated men.',
              'Grade 8-9':
                'The writer builds tension and drama by turning the men\'s expected victory into a rout, through a carefully staged sequence of reversal, climax and release.\n\nThe paragraph opens with the men\'s confidence, "The men gave a shout of triumph", and with their mistake: they saw, "as they imagined", their enemies in flight. The phrase "as they imagined", set off by commas, lets the reader know more than the men, which creates dramatic irony and anticipation. The flat sentence "This was just what Snowball had intended" springs the trap, and the ambush follows: the hidden animals "suddenly emerged in their rear, cutting them off". The order of the sentences mirrors the battle plan.\n\nThe middle of the paragraph speeds up through short, sharp clauses. "He himself dashed straight for Jones. Jones saw him coming, raised his gun and fired." The repeated name links the two leaders, and the three verbs "saw", "raised" and "fired" make the shot happen in an instant. The consequences are stated with brutal plainness: "The pellets scored bloody streaks along Snowball\'s back, and a sheep dropped dead." The writer does not dwell on them, and this restraint makes the violence more shocking. Snowball\'s response, "Without halting for an instant", and the weight of "his fifteen stone" turn the tide, and Jones is "hurled into a pile of dung", a humiliating image that marks his fall.\n\nThe climax is Boxer, introduced with the superlative "the most terrifying spectacle of all", "rearing up on his hind legs and striking out with his great iron-shod hoofs like a stallion". The simile reveals the power that the gentle horse has always held back, and his "very first blow" leaves a stable-lad "lifeless in the mud", a moment that silences the reader. From here the structure becomes a list of chaos: "Panic overtook them", and the asyndetic "They were gored, kicked, bitten, trampled on" piles up violence without pause. The cat\'s sudden leap is almost comic, and the final image, "with a flock of geese hissing after them and pecking at their calves all the way", releases the tension, ending the drama on the men\'s undignified retreat. The effect is exhilarating, but the stable-lad in the mud leaves an uneasy weight that the next lines take up.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'The reversal: the men\'s "shout of triumph", the dramatic irony of "as they imagined", and the trap sprung in "This was just what Snowball had intended".',
                "Short sentences that speed up the action, and the plain, shocking statement of the gunshot's result.",
                'Boxer as the climax, "the most terrifying spectacle of all", with the simile "like a stallion".',
                'The list "They were gored, kicked, bitten, trampled on" and the comic release of the geese "hissing after them".',
              ],
            },
          },
          {
            id: 'wjec-c1-07-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "All the men were gone except one." to the end of the extract.\n\n"Boxer, not Snowball, is the real hero of this extract."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about Boxer and Snowball, in these lines and across the whole extract\n- the choices the writer makes to lead you to those thoughts and feelings.\n\nSupport your points with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_07,
            extractSource: EXTRACT_07_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I agree. Snowball is brave and clever: he plans the whole defence after studying "an old book of Julius Caesar\'s campaigns", and he charges Jones even after being shot. But in the final lines he seems cold. When Boxer is upset, Snowball says, "No sentimentality, comrade!", and "War is war. The only good human being is a dead one." These words are harsh, and the detail that he speaks while the blood is "still dripping" from his wounds shows that he is tough but also hard-hearted.\n\nBoxer, on the other hand, shows real feeling. He is "pawing with his hoof at the stable-lad", "trying to turn him over", as if he wants to help. He speaks "sorrowfully": "I had no intention of doing that. I forgot that I was wearing iron shoes." His worry, "Who will believe that I did not do this on purpose?", shows that he cares about doing right. The final line, "I have no wish to take life, not even human life", ends with "his eyes were full of tears", which makes the reader sympathise with him. Earlier he was "the most terrifying spectacle of all", so he is the strongest fighter, but he is also the kindest. That is why I think he is the real hero: he has courage and a conscience.',
              'Grade 8-9':
                'I largely agree, because the writer makes heroism a matter of conscience as well as courage, and in the final lines only Boxer has both. But Snowball\'s claim is strong, and the extract asks us to weigh them.\n\nSnowball is the hero of the battle itself. He prepared for it, having "studied an old book of Julius Caesar\'s campaigns", and the battle unfolds exactly as he planned: "This was just what Snowball had intended." He leads from the front. He is shot, "The pellets scored bloody streaks along Snowball\'s back", and yet "Without halting for an instant" he throws "his fifteen stone against Jones\'s legs". By any military measure he wins the day.\n\nThe final lines change the measure. Boxer is alone in the yard with the stable-lad, "pawing with his hoof" and "trying to turn him over", a clumsy, gentle gesture from the animal who struck the blow. The short sentence "The boy did not stir." is stark. Boxer\'s words are plain and anguished: "I had no intention of doing that. I forgot that I was wearing iron shoes." His question, "Who will believe that I did not do this on purpose?", shows that he cares about the truth of what he has done, not only its result. Snowball\'s reply is the opposite: "No sentimentality, comrade!" The exclamation and the slogan "War is war" dismiss feeling as weakness, and his last sentence, "The only good human being is a dead one", turns killing into a principle. The detail that the blood is "still dripping" from his wounds makes him admirable and frightening at once. The writer gives Boxer the final words, "I have no wish to take life, not even human life", and the final image, "his eyes were full of tears", so the extract ends on his compassion rather than on Snowball\'s certainty.\n\nSo I agree that Boxer is presented as the real hero, though not because he fought better. His heroism is that, at the height of victory, he is the one animal who refuses to stop feeling, and the writer makes the reader trust his tears more than Snowball\'s slogans.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'For Snowball: his planning, his leadership from the front, his courage when wounded.',
                'For Boxer: his sorrow and care for the stable-lad, his fear of being thought cruel, his words "I have no wish to take life, not even human life", and his tears.',
                'Snowball\'s cold slogans in the final lines ("No sentimentality, comrade!", "War is war") as the turning point of the judgement.',
                'A clear, sustained judgement, using the final lines and the whole extract, on how the writer shapes our sympathy.',
                'Boxer believes the stable-lad is dead, and the extract stops there; soon after it, the novel shows that the boy was only stunned. An answer is judged on what it makes of the two animals here, not on knowing this.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-07-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Think about the purpose and the reader of your writing. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-07-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) Beyond the Wall.\n\n(b) Write about a time when you discovered something you were not supposed to see.\n\n(c) Write a story that begins: "The plan had seemed so simple at the time."\n\n(d) Write a story that ends with these words: "Nobody laughed at us after that."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (c), a story that begins \"The plan had seemed so simple at the time.\" (about 520 words).\n\nThe plan had seemed so simple at the time.\n\nEvery August, the village of Little Barrow held a scarecrow competition, and every August, for eleven years in a row, Mrs Pettigrew at number nine won it. Her scarecrows were famous. One year she made a life-sized astronaut out of tinfoil and a goldfish bowl. Another year it was a knight on a wooden horse, with armour made from baking trays. People drove from three villages away to photograph them.\n\nThis year, my cousin Tom and I were going to beat her.\n\nWe had a design, drawn on the back of a cereal box: a deep-sea diver, with a helmet made from an upturned paddling pool, a suit of Grandad's old waterproofs, and a giant octopus wrapped round its legs. We had materials. We had six days. What we did not have, it turned out, was any idea how heavy wet papier-mâché is.\n\nBy Wednesday the octopus had eight tentacles and the diver had a head. By Thursday the octopus had fallen on the diver twice and Tom had stopped speaking to me. By Friday evening, the night before the judging, the diver was leaning against the garden wall like a man who had given up, and the octopus lay on the lawn in a sticky grey heap, looking less like a sea creature than a pile of wet laundry.\n\nWe sat on the back step and stared at it.\n\n'We could say it's a shipwreck,' Tom said.\n\n'It is a shipwreck,' I said.\n\nThat was when we heard the gate. Mrs Pettigrew was standing there in her gardening gloves, holding a roll of chicken wire and looking at our octopus with an expression I could not read.\n\n'You need a frame,' she said. 'Papier-mâché is only skin. It needs bones.'\n\nWe did not move. It felt like being given advice by the enemy.\n\n'Well?' she said. 'Are you going to sit there, or are you going to fetch some pliers?'\n\nWe fetched the pliers.\n\nShe stayed until it was dark. She showed us how to bend the chicken wire into curving tentacles, how to tie them to a broom handle pushed deep into the flowerbed, and how to wrap the papier-mâché round them so that it dried hard and smooth. She told us about her first scarecrow, made when she was nine, which had blown into the river during the night and been found in the next village wearing a duck on its head. We laughed so much that Tom forgot he was not speaking to me.\n\nAt nine o'clock she straightened her back and looked at what we had made. The octopus rose from the lawn in great grey loops, wrapped round the diver's legs as if it meant to pull him down into the deep.\n\n'Not bad,' she said. 'Not bad at all.'\n\nWe did not win. Mrs Pettigrew won, for the twelfth year in a row, with a hot-air balloon made from an old umbrella. We came second. But when the judges pinned the rosette on our diver, the loudest clapping in the whole crowd came from number nine.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 08: The Great Gatsby, Chapter III
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-08',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-08-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_08_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-08-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "There was music from my neighbor’s house" to "repairing the ravages of the night before."\n\nList five things you learn about the parties at Gatsby\'s house in this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_08,
            extractSource: EXTRACT_08_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. There was music from his house through the summer nights.\n2. Guests dived from the tower of his raft.\n3. His two motor-boats pulled guests along on aquaplanes.\n4. At weekends his Rolls-Royce carried parties to and from the city.\n5. On Mondays eight servants spent all day repairing the damage.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'Music through the summer nights; men and girls came and went in his blue gardens; there was champagne; guests dived from the tower of his raft or sunbathed on his beach; his two motor-boats drew aquaplanes; his Rolls-Royce carried parties to and from the city from nine in the morning until past midnight; his station wagon met all trains; on Mondays eight servants, including an extra gardener, repaired the damage.',
              ],
            },
          },
          {
            id: 'wjec-c1-08-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "Every Friday five crates of oranges and lemons" to "too young to know one from another."\n\nHow does the writer show how lavish Gatsby\'s parties are?\n\nBack up your points with short quotations, and explain what the writer\'s words suggest, using subject terms where they help.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_08,
            extractSource: EXTRACT_08_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows the scale of the parties through numbers and excess. "Every Friday five crates of oranges and lemons" arrive, and they leave as "a pyramid of pulpless halves", an image that shows how much is used up and thrown away. The juice machine can do "two hundred oranges in half an hour" if a button is pressed "two hundred times by a butler’s thumb", and the repetition of "two hundred" makes the effort sound absurd. The caterers bring "enough colored lights to make a Christmas tree of Gatsby’s enormous garden", a metaphor that makes the garden glitter. The food is described in a rich list, "spiced baked hams crowded against salads of harlequin designs and pastry pigs and turkeys bewitched to a dark gold", where "bewitched" makes it seem magical. Even the drinks are excessive: cordials "so long forgotten" that "most of his female guests were too young to know one from another".',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'The quantities: "five crates of oranges and lemons", "two hundred oranges in half an hour", "several hundred feet of canvas".',
                'The waste in "a pyramid of pulpless halves".',
                'The metaphor of the garden as "a Christmas tree", and the rich, magical list of food ("turkeys bewitched to a dark gold").',
                'The forgotten cordials, too old for the young guests to know.',
              ],
            },
          },
          {
            id: 'wjec-c1-08-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "By seven o’clock the orchestra has arrived" to "The party has begun."\n\nWhat impressions do you get of the party in these lines?\n\nQuote from these lines to support your answer, and analyse the writer\'s choice of words, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_08,
            extractSource: EXTRACT_08_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The party seems huge, noisy and exciting. The orchestra is "no thin five-piece affair, but a whole pitful of oboes and trombones and saxophones and viols and cornets and piccolos, and low and high drums", and the long list of instruments makes the music sound overwhelming. The change to the present tense, "the orchestra has arrived", makes the reader feel that the party is happening now, in front of us.\n\nThe guests seem colourful and fashionable. The halls are "gaudy with primary colors", with "hair bobbed in strange new ways", which suggests that the guests are modern and daring. The air is "alive with chatter and laughter", and the writer lists "casual innuendo and introductions forgotten on the spot, and enthusiastic meetings between women who never knew each other’s names". This suggests that the friendliness is shallow: people meet and forget each other at once.\n\nThe next paragraph makes the party seem to grow. "The lights grow brighter", the music becomes "yellow cocktail music", and "the opera of voices pitches a key higher", a metaphor that makes the noise sound like a performance rising in excitement. Laughter is "spilled with prodigality", as if it were being wasted like the drinks. The groups "swell with new arrivals, dissolve and form in the same breath", and the "confident girls" who "weave here and there" make the scene feel restless and always changing. The section ends with a dramatic moment: a girl "dances out alone on the canvas platform", there is "A momentary hush", and then the short sentence "The party has begun." This makes everything before it seem like a build-up.',
              'Grade 8-9':
                'The writer gives the impression of a party so vast and fast-moving that it seems to have a life of its own, glamorous on the surface but shallow underneath.\n\nThe shift into the present tense, "By seven o’clock the orchestra has arrived", turns a memory into a performance that seems to happen as we read, and it suggests that the party is not one night but a ritual repeated all summer. The orchestra is defined against the ordinary, "no thin five-piece affair", and the polysyndetic list, "oboes and trombones and saxophones and viols and cornets and piccolos", piles up instruments so that the sentence itself becomes crowded and loud. The guests are seen in fragments of colour and fashion rather than as people: halls "gaudy with primary colors", "hair bobbed in strange new ways", "shawls beyond the dreams of Castile". The adjective "gaudy" hints that the brightness is showy, even vulgar.\n\nBeneath the glamour, the language suggests emptiness. Drinks are "floating rounds of cocktails" that "permeate the garden", as if the alcohol were the air itself, and the sociability is made of things that do not last: "introductions forgotten on the spot" and "enthusiastic meetings between women who never knew each other’s names". The enthusiasm is real, but the knowledge is missing.\n\nThe second paragraph quickens the rhythm. The cosmic image "as the earth lurches away from the sun" makes nightfall seem unsteady, almost drunken, and the synaesthesia of "yellow cocktail music" blends colour and sound. "the opera of voices pitches a key higher" turns talk into music that grows more strained. Laughter is "spilled with prodigality, tipped out at a cheerful word", verbs that make it sound like wasted liquid. The groups "dissolve and form in the same breath", and the "confident girls" who become "for a sharp, joyous moment the centre of a group" before they "glide on" show that attention here is brief and restless.\n\nThe section closes on a single performance: a girl who "seizes a cocktail out of the air" and "dances out alone", a "momentary hush", and the false rumour that "she is Gilda Gray’s understudy from the Follies". That "erroneous news" sums up the party, where glamour spreads faster than truth, and the short final sentence, "The party has begun.", reveals that all this excitement was only the overture.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'Size and noise: the long list of instruments, "a whole pitful", and the present tense that makes the party happen before us.',
                'Colour and fashion: "gaudy with primary colors", "hair bobbed in strange new ways".',
                'Shallowness: "introductions forgotten on the spot", "women who never knew each other’s names", laughter "spilled with prodigality".',
                'Restless change ("dissolve and form in the same breath") building to "The party has begun."',
              ],
            },
          },
          {
            id: 'wjec-c1-08-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "I believe that on the first night I went to Gatsby’s house" to "signed Jay Gatsby, in a majestic hand."\n\nHow does the writer create a sense of mystery around Gatsby in these lines?\n\nIn your answer, consider:\n- what happens, and the order in which the writer tells it\n- the words and phrases the writer chooses\n- how these choices affect the reader.\n\nSupport your points with references to the text, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_08,
            extractSource: EXTRACT_08_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer creates mystery by showing that even Gatsby\'s guests do not know him. The short statement "People were not invited—they went there" suggests that his parties are open to anyone, and the vague phrase "somehow they ended up at Gatsby’s door" makes it seem as though they are drawn there without knowing why. They behave as if at "an amusement park", and "Sometimes they came and went without having met Gatsby at all". The host is at the centre of everything, yet absent.\n\nThe narrator\'s own invitation adds to the mystery. He stresses that he was "actually invited", which shows that he is proud to be different. The details of the invitation are strange: a chauffeur in "a uniform of robin’s-egg blue" brings "a surprisingly formal note", and Gatsby calls his huge event a "little party", which is an understatement. The excuse that "a peculiar combination of circumstances had prevented it" is vague, and the reader wonders what those circumstances were. The paragraph ends with the signature, "signed Jay Gatsby, in a majestic hand", so we see his handwriting before we see him, and the adjective "majestic" makes him seem grand and distant.',
              'Grade 8-9':
                'The writer creates mystery by making Gatsby present everywhere in these lines and visible nowhere, and by shaping the paragraphs so that we approach him only through other people and objects.\n\nThe first paragraph defines Gatsby\'s parties by what they are not. "People were not invited—they went there": the dash stresses the reversal of ordinary manners, and the verb "went" makes the guests sound like crowds drawn to a spectacle. The phrase "automobiles which bore them out to Long Island" makes the cars the doers and the guests mere passengers, and the vague "somehow they ended up at Gatsby’s door" takes away their choice, as if some force carried them there. The comparison with "an amusement park" makes the house a public attraction, and the host is strangely absent from his own party: guests "came and went without having met Gatsby at all". The phrase "a simplicity of heart that was its own ticket of admission" is gently ironic, since it suggests that the only thing needed to enter is a willingness not to ask questions.\n\nThe second paragraph narrows to Nick, and its first sentence, "I had been actually invited", marks him out. The invitation is a small piece of theatre: a chauffeur "in a uniform of robin’s-egg blue", a delicate colour that suggests luxury and care, and "a surprisingly formal note". Reported in indirect speech, the note shows Gatsby\'s elaborate manners, "the honor would be entirely Gatsby’s", and the modest "little party" in quotation marks makes his wealth seem both shy and showy. The excuse, "a peculiar combination of circumstances had prevented it", explains nothing, and its vagueness invites suspicion. Structurally, the paragraph builds to the signature, set after a dash at the very end: "signed Jay Gatsby, in a majestic hand". The reader meets his handwriting before his face, and "majestic" suggests a figure of almost royal remoteness. By the end of these lines we know a great deal about Gatsby\'s parties, his servants and his manners, and nothing about the man, which is exactly why we want to.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'Guests who arrive uninvited and "came and went without having met Gatsby at all"; the house as "an amusement park".',
                'The narrator singled out as "actually invited", by a chauffeur in robin\'s-egg blue with "a surprisingly formal note".',
                'The vague excuse, "a peculiar combination of circumstances", and the understated "little party".',
                'Structure: the paragraph ends on the signature, "in a majestic hand", so we meet his writing before the man.',
              ],
            },
          },
          {
            id: 'wjec-c1-08-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "Dressed up in white flannels" to the end of the extract.\n\n"Behind the glamour of Gatsby\'s parties, the writer shows the reader a world of loneliness."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about Gatsby\'s party, in these lines and across the whole extract\n- the choices the writer makes to lead you to those thoughts and feelings.\n\nSupport your points with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_08,
            extractSource: EXTRACT_08_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I agree. In the final lines the narrator feels lonely even in a crowd. He "wandered around rather ill at ease among swirls and eddies of people I didn’t know", and the water imagery of "swirls and eddies" makes the crowd seem like a current he is caught in. The young Englishmen are "all looking a little hungry", which suggests that they want something, and the narrator is "sure that they were selling something". When he asks for his host, people "stared at me in such an amazed way" and "denied so vehemently any knowledge of his movements" that he "slunk off". The last words are the loneliest: the cocktail table is "the only place in the garden where a single man could linger without looking purposeless and alone."\n\nThe rest of the extract has hints of this too. There are "enthusiastic meetings between women who never knew each other’s names", introductions are "forgotten on the spot", and many guests come and go "without having met Gatsby at all". Even Gatsby himself is never seen. So the glamour, the "colored lights" and the champagne, hides a world where nobody really knows anybody.',
              'Grade 8-9':
                'I agree, and I think the writer makes loneliness the hidden subject of the whole extract, revealed fully only when the narrator steps into the party himself.\n\nThe final lines move from spectacle to experience. Nick, "Dressed up in white flannels", is dressed for the occasion, but he "wandered around rather ill at ease", and the water imagery, "swirls and eddies of people", makes the crowd a current he cannot steer through. The faces he half-recognises from "the commuting train" only emphasise that he knows no one. His view of the young Englishmen is sharp: "all well dressed, all looking a little hungry, and all talking in low, earnest voices", the repeated "all" making them a type rather than people, and "hungry" turning their good manners into appetite. They are "agonizingly aware of the easy money in the vicinity", so the party is a marketplace as much as a celebration.\n\nThe most telling moment is the search for the host. People "stared at me in such an amazed way, and denied so vehemently any knowledge of his movements": the adverb "vehemently" makes their ignorance strangely defensive, as if the question were improper. Nick "slunk off", a verb of shame, to the cocktail table, which the final clause defines with painful precision: "the only place in the garden where a single man could linger without looking purposeless and alone." The sentence ends on "alone".\n\nLooking back, the extract has prepared this. The guests arrive "like moths", drawn by light. Their friendliness consists of "introductions forgotten on the spot" and meetings between women "who never knew each other’s names". On Mondays the servants repair "the ravages of the night before", and the oranges leave as "a pyramid of pulpless halves", images of pleasure used up. Above all, the host is absent: guests come "without having met Gatsby at all", and we meet him only through "a majestic hand". So the glamour is real, but it is a surface stretched over people who are unknown to each other, and the extract ends with the narrator, and the reader, feeling that loneliness from the inside.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Agreement from the final lines: Nick "ill at ease among swirls and eddies of people", the "hungry" Englishmen, the guests who deny any knowledge of where their host is, and the last word "alone".',
                'Agreement from the whole extract: guests "like moths", forgotten introductions, women who never knew each other\'s names, the absent host.',
                'A counter-view is possible (the real joy of the "confident girls", the energy of the music), as long as the judgement is clear and held to.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-08-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Think about the purpose and the reader of your writing. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-08-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Party.\n\n(b) Write about a time when you felt out of place.\n\n(c) Write a story that begins: "The invitation arrived on a Tuesday, and nobody knew who had sent it."\n\n(d) Write a story that ends with these words: "I realised I had never really known her at all."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (b), a time when you felt out of place (about 560 words).\n\nThe first time I walked into the band hall, everyone turned round, and the music stopped.\n\nIt was a Tuesday evening in January, and I was twelve. The Ystrad Silver Band had rehearsed in the same room above the rugby club for ninety years, and it looked it. There were photographs on the walls of men in peaked caps holding trophies, and a smell of polish and old carpet and, faintly, chips. Twenty-five people sat in a horseshoe of chairs, each holding something gleaming. The youngest of them, as far as I could see, was about forty.\n\nI held my cornet case in front of me like a shield.\n\n'You must be Ffion,' said the conductor, a small man with enormous eyebrows. 'Mrs Hughes says you're good. Sit on the end there, next to Dai.'\n\nDai was eighty-three, I found out later, and he had played second cornet since before my grandmother was born. He nodded at me without smiling and turned a page of his music.\n\nThen they played, and I understood that I had made a terrible mistake.\n\nAt school I was the best brass player in Year 8, which was not difficult, because I was the only brass player in Year 8. Here the sound came from every direction at once, huge and warm and complicated, and it filled the room right up to the cracked ceiling. I opened my music. It was covered in notes I had never seen, crowded together like ants. When we reached the first fast passage, I lost my place completely and played a long, wrong, wobbling note into the silence of a rest.\n\nNobody said anything. That was worse than laughing. Twenty-five people politely pretended that they had not heard, and my face burned so hot that I thought my mouthpiece might melt.\n\nAt the break, everyone went to the urn for tea. I stayed in my chair, looked at the floor and decided that I would never come back.\n\nSomeone sat down beside me. It was Dai, holding two cups.\n\n'Milk, two sugars,' he said. 'You look like a two sugars.'\n\nI took it. I did not trust my voice.\n\n'My first night,' he said, 'was in 1954. I was eleven. I dropped my mute in the middle of a hymn and it rolled all the way to the conductor's feet. He picked it up, gave it back to me and told me that next time I should play the notes louder than the accidents.' Dai sipped his tea. 'You played that wrong note very loudly. That is a good start.'\n\nI laughed before I could stop myself, and something tight in my chest let go.\n\nIn the second half, Dai moved his music stand so that I could see his part as well as mine, and every time we reached a difficult bar he tapped the beat on his knee with one finger, very small, so that only I could see. I still played more wrong notes than right ones. But I played them loudly.\n\nI am sixteen now, and I sit in Dai's chair. He gave it to me when his breath grew too short for the high notes. Every Tuesday, when a new player walks in clutching a case like a shield, I am the one who goes to fetch the tea.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 09: Animal Farm, Chapter V
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-09',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-09-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_09_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-09-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read from the start of the extract, "At last the day came", to "his reasons for advocating the building of the windmill."\n\nList five things you learn about the Meeting in these lines.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_09,
            extractSource: EXTRACT_09_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. It was held on a Sunday.\n2. The animals were to vote on whether to begin building the windmill.\n3. They met in the big barn.\n4. Snowball stood up first to speak.\n5. The sheep interrupted him now and then with their bleating.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                "Snowball's plans were complete; the Meeting was on the following Sunday; the question of the windmill was to be put to the vote; the animals assembled in the big barn; Snowball spoke first; he set out his reasons for building the windmill; he was interrupted by bleating from the sheep.",
              ],
            },
          },
          {
            id: 'wjec-c1-09-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "Then Napoleon stood up to reply." to "seemed almost indifferent as to the effect he produced."\n\nHow does the writer show what Napoleon is like in these lines?\n\nBack up your points with short quotations, and explain what the writer\'s words suggest, using subject terms where they help.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_09,
            extractSource: EXTRACT_09_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows that Napoleon is calm, confident and mysterious. He speaks "very quietly", which contrasts with the noise of the meeting and suggests that he does not need to shout to be obeyed. He dismisses the plan in one blunt word, "nonsense", and simply "advised nobody to vote for it", without giving reasons. The adverb in "promptly sat down again" and the detail that he "had spoken for barely thirty seconds" show how little effort he makes. The final phrase, "seemed almost indifferent as to the effect he produced", is important: the word "seemed" hints that this calm may be an act, as if he already knows how things will end.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'His quiet, brief speech ("very quietly", "barely thirty seconds") and the blunt dismissal "nonsense".',
                'No reasons given: he "advised nobody to vote for it" and "promptly sat down again".',
                'The hint in "seemed almost indifferent" that his calm hides a plan.',
              ],
            },
          },
          {
            id: 'wjec-c1-09-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "At this Snowball sprang to his feet" to "a kind no one had ever heard him utter before."\n\nWhat impressions do you get of Snowball, and of Napoleon, in these lines?\n\nQuote from these lines to support your answer, and analyse the writer\'s choice of words, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_09,
            extractSource: EXTRACT_09_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'Snowball comes across as energetic, passionate and inspiring. He "sprang to his feet", a lively verb, and he is "shouting down the sheep", which shows that he will not be silenced. His speech is "a passionate appeal", and his "eloquence had carried them away", which suggests that the animals are swept along by his words. The writer says that "In glowing sentences he painted a picture" of the farm\'s future: "glowing" suggests warmth and light, and "painted a picture" shows how vividly he imagines it. He dreams of a farm where "sordid labour was lifted from the animals\' backs", and the long lists of machines, "threshing machines, ploughs, harrows, rollers, and reapers and binders", and of comforts, "electric light, hot and cold water, and an electric heater", show how big his hopes are.\n\nNapoleon, by contrast, seems sly and threatening. Just when Snowball has won and "there was no doubt as to which way the vote would go", Napoleon stands up, "casting a peculiar sidelong look at Snowball". The adjective "sidelong" suggests something secretive, and "peculiar" makes it unsettling. His "high-pitched whimper of a kind no one had ever heard him utter before" is strange and mysterious: the reader senses that it is a signal, and that something bad is about to happen.',
              'Grade 8-9':
                'The writer sets the two leaders against each other, and the impression is of a brilliant speaker overtaken by a quieter, more dangerous kind of power.\n\nSnowball is all energy and vision. The verb "sprang" and the phrase "shouting down the sheep" give him physical force, and "a passionate appeal" shows emotion, not calculation. His effect is immediate: the animals, "about equally divided" until now, find that his "eloquence had carried them away", a metaphor that makes his words a current. The writer sums up the speech in rich language, "In glowing sentences he painted a picture", the metaphors of light and art showing his imagination at work. His vision is of release, when "sordid labour was lifted from the animals\' backs", and it grows as he speaks: "His imagination had now run far beyond chaff-cutters and turnip-slicers". The lists that follow, the farm machinery and then the comforts of "electric light, hot and cold water, and an electric heater" for "every stall", build a paradise item by item, and the narrator\'s slightly amused tone suggests that his dream is generous but perhaps too grand.\n\nNapoleon is presented in a single sentence, placed at the very moment of Snowball\'s triumph: "By the time he had finished speaking, there was no doubt as to which way the vote would go. But just at this moment Napoleon stood up". The conjunction "But" turns the scene. Napoleon says nothing; instead he casts "a peculiar sidelong look", a phrase of slyness, and utters "a high-pitched whimper of a kind no one had ever heard him utter before". The sound is strange for a leader, almost like a puppy\'s, and the reader senses it is a signal whose meaning the others cannot yet guess. So Snowball wins the argument with words, while Napoleon, wordless, prepares to win something else.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'Snowball\'s energy and passion: "sprang to his feet", "shouting down the sheep", "a passionate appeal".',
                'The power of his words: his "eloquence had carried them away", "In glowing sentences he painted a picture".',
                'The scale of his vision: the lists of machines and comforts for "every stall".',
                'Napoleon\'s menace: "a peculiar sidelong look" and the strange "high-pitched whimper", placed at the moment of Snowball\'s triumph.',
              ],
            },
          },
          {
            id: 'wjec-c1-09-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "At this there was a terrible baying sound outside" to "slipped through a hole in the hedge and was seen no more."\n\nHow does the writer make Snowball\'s escape from the dogs tense and dramatic?\n\nIn your answer, consider:\n- what happens, and the order in which the writer tells it\n- the words and phrases the writer chooses\n- how these choices affect the reader.\n\nSupport your points with references to the text, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_09,
            extractSource: EXTRACT_09_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer creates drama with a sudden, frightening interruption. There is "a terrible baying sound" outside, and "nine enormous dogs wearing brass-studded collars came bounding into the barn". The adjectives "terrible" and "enormous" and the detail of the "brass-studded collars" make the dogs seem dangerous, and the verb "bounding" shows their speed. They "dashed straight for Snowball", who escapes "just in time" from their "snapping jaws", and the sound of "snapping" makes the danger feel close.\n\nThe chase is told in short, fast sentences that keep changing direction. Snowball is "running as only a pig can run, but the dogs were close on his heels". Then "Suddenly he slipped and it seemed certain that they had him". The word "Suddenly" makes the reader fear the worst, but then "he was up again, running faster than ever, then the dogs were gaining on him again". The repeated "then" makes the chase swing back and forth, so the reader does not know who will win. The tension reaches its height when one dog "all but closed his jaws on Snowball\'s tail". Finally he escapes "with a few inches to spare" through "a hole in the hedge", and the short ending, "was seen no more", is dramatic and final. The animals watch "Too amazed and frightened to speak", so the reader shares their shock.',
              'Grade 8-9':
                'The writer creates tension and drama through a sudden shock followed by a chase whose structure swings between hope and fear, so that the reader\'s feelings move with every sentence.\n\nThe interruption is total. The opening words, "At this", tie the dogs directly to Napoleon\'s whimper, so the reader understands, before the animals do, that he has summoned them. The sound comes first, "a terrible baying sound outside", and then the sight: "nine enormous dogs wearing brass-studded collars came bounding into the barn". The precise number and the military detail of the collars make them seem like an armed guard, and the participle "bounding" gives them unstoppable energy. They "dashed straight for Snowball", and his escape from "their snapping jaws" comes "just in time".\n\nThen the scene moves outside, and the animals become an audience, "Too amazed and frightened to speak", which places the reader among them, watching. The chase is built from a sequence of reversals linked by "but" and "then": "the dogs were close on his heels"; "Suddenly he slipped and it seemed certain that they had him"; "Then he was up again, running faster than ever, then the dogs were gaining on him again". Each sentence undoes the last, so the reader is held in suspense. The closest moment is given the most precise detail: one dog "all but closed his jaws on Snowball\'s tail, but Snowball whisked it free just in time". The verb "whisked" is light and quick, almost comic, which makes the near miss more vivid.\n\nThe ending is abrupt. Snowball puts on "an extra spurt" and, "with a few inches to spare, slipped through a hole in the hedge and was seen no more." The final clause is formal and final, like a line from a legend, and it shuts the door on Snowball for good. The drama lies not only in the chase but in its meaning: in a few minutes, the animals have seen power pass from the speaker to the dogs.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'The sudden interruption: "a terrible baying sound", "nine enormous dogs wearing brass-studded collars", "snapping jaws".',
                'The chase told in short sentences that swing between escape and capture ("Suddenly he slipped", "Then he was up again").',
                'The closest moment, "all but closed his jaws on Snowball\'s tail", and the escape "with a few inches to spare".',
                'The final, formal "was seen no more", and the animals watching "Too amazed and frightened to speak".',
              ],
            },
          },
          {
            id: 'wjec-c1-09-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "Silent and terrified, the animals crept back into the barn." to the end of the extract.\n\n"By the end of this extract, Napoleon has taken complete control of the farm."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about Napoleon\'s power, in these lines and across the whole extract\n- the choices the writer makes to lead you to those thoughts and feelings.\n\nSupport your points with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_09,
            extractSource: EXTRACT_09_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I mostly agree. In the final part Napoleon\'s dogs make his power clear. They are "huge dogs, and as fierce-looking as wolves", and they were "the puppies whom Napoleon had taken away from their mothers and reared privately", which shows that he had planned this secretly for a long time. They "wagged their tails to him in the same way as the other dogs had been used to do to Mr. Jones", which suggests that Napoleon has taken Jones\'s place. He stands on "the raised portion of the floor where Major had previously stood", as if he were the new Major, and announces that the Meetings "would come to an end". From now on a "special committee of pigs, presided over by himself" will decide everything "in private", and "there would be no more debates".\n\nThe other animals cannot stop him. They are "dismayed", and "Several of them would have protested if they could have found the right arguments". Even Boxer "could not think of anything to say". When four young pigs protest, "the dogs sitting round Napoleon let out deep, menacing growls" and they fall silent. Finally the sheep bleat "Four legs good, two legs bad!" for "nearly a quarter of an hour", which ends any discussion. So Napoleon has control, though the animals still feel uneasy, which suggests that his power is based on fear rather than agreement.',
              'Grade 8-9':
                'I agree that Napoleon has taken control, and the writer makes the transfer of power feel complete by showing it in force, in rules and in the animals\' minds. But the extract also shows that his control rests on fear, which is why the idea of complete control deserves some care.\n\nThe final lines explain the shock. The dogs were "the puppies whom Napoleon had taken away from their mothers and reared privately", so the seizure of power was planned long before the meeting, and the adverb "privately" anticipates the meetings "in private" to come. The detail that they "wagged their tails to him in the same way as the other dogs had been used to do to Mr. Jones" is the extract\'s sharpest irony: the Rebellion\'s enemy has been replaced by one of the rebels. Napoleon then stands where "Major had previously stood", borrowing the authority of the founder, and abolishes debate. The announcement is reported in calm, official language: the Meetings were "unnecessary" and "wasted time", and decisions would be made by "a special committee of pigs, presided over by himself", which would "meet in private and afterwards communicate their decisions to the others". The animals\' role shrinks to a list of duties, "salute the flag, sing \'Beasts of England\', and receive their orders for the week", and the clause "but there would be no more debates" ends their say in a short final clause.\n\nResistance is shown and then crushed. The animals "would have protested if they could have found the right arguments", a conditional that shows they feel the wrong but cannot name it. Boxer "set his ears back, shook his forelock several times, and tried hard to marshal his thoughts", physical signs of struggle, "but in the end he could not think of anything to say". The four porkers do speak, but "deep, menacing growls" silence them, and the sheep\'s chant, "Four legs good, two legs bad!", becomes a weapon against thought, lasting "nearly a quarter of an hour".\n\nAcross the extract, the writer has shown the alternative being destroyed. Snowball\'s "glowing sentences" offered a picture of a better farm, and he was chased out "with a few inches to spare". So Napoleon\'s control is complete in practice: no one can speak against him. Yet the animals remain "dismayed" and Boxer "vaguely troubled", and that unease, which the dogs can silence but not remove, is what keeps the reader from seeing his victory as total.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Agreement: the secretly reared dogs, who treat Napoleon as the old dogs treated Jones; his place "where Major had previously stood"; the end of the Meetings and of debate; the committee "presided over by himself".',
                "Agreement: protest silenced by growls and by the sheep's bleating.",
                'Qualification: the animals are "dismayed" and Boxer "vaguely troubled"; control rests on fear, not consent.',
                "A sustained judgement drawn from the final lines and from Snowball's fall earlier in the extract.",
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-09-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Think about the purpose and the reader of your writing. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-09-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Vote.\n\n(b) Write about a time when you stood up for something you believed in.\n\n(c) Write a story that begins: "Everyone was talking at once until the door opened."\n\n(d) Write a story that ends with these words: "Nobody ever found out who had done it."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (a), The Vote (about 500 words).\n\nThe school council met on Thursdays in the science lab, under a poster of the periodic table that someone had improved with a moustache.\n\nThere were eleven of us, two from each year and Mrs Adeyemi, who took notes and said almost nothing. That week we had one decision to make. The school had been given two thousand pounds, and the council could choose how it was spent.\n\nJordan Price had already decided for us.\n\n'A games room,' he said, before Mrs Adeyemi had even opened her notebook. 'Pool table. Table football. A big screen. We'd use it every lunchtime.'\n\nPeople nodded. Jordan was in Year 11, captain of everything, and when he spoke, people tended to nod. He had brought a printed brochure. There was a picture of a pool table on the front, glossy and green.\n\nI had brought a single sheet of paper, folded into quarters, and I was holding it so tightly that it had gone soft.\n\nMy idea was not exciting. Room 4, at the end of the languages corridor, had been empty since the summer. I wanted to turn it into a quiet room: beanbags, a few shelves of books, a rule that nobody talked above a whisper. Somewhere for the people who found lunchtime too loud. I knew those people, because I was one of them. For two years I had eaten my sandwiches in the toilets, because it was the only place in school where nobody shouted.\n\n'Anyone else?' said Mrs Adeyemi.\n\nThe silence stretched. Jordan was already writing GAMES ROOM on the whiteboard in large blue capitals.\n\nI put my hand up. It was shaking, and everyone could see.\n\n'I have an idea,' I said, and my voice came out thin and strange. 'It's not as fun as a pool table.'\n\nSomebody laughed. Not unkindly, but my face went hot anyway. I almost stopped. Then I looked at the folded paper in my hand, and I thought about the toilets, and the cold tiles, and the hand dryer that roared every few minutes like an animal.\n\nSo I unfolded the paper and I told them. I told them about Room 4, and about the beanbags, and about the people who spend every lunchtime pretending to be busy so that nobody notices they are alone. I did not tell them about the toilets. But I think, from the way the room went quiet, that some of them guessed.\n\nWhen I finished, nobody spoke. Then Aisha from Year 8, who had not said a word all term, put her hand up.\n\n'I'd use it,' she said. 'Every day.'\n\n'So would I,' said someone at the back.\n\nMrs Adeyemi looked up from her notebook. 'Shall we vote?'\n\nIt was six to five. Jordan took it well, in the end. He even offered to carry the beanbags.\n\nRoom 4 opened in February. There is a sign on the door now, in careful handwriting: QUIET ROOM. EVERYONE WELCOME. Most lunchtimes it is full, and nobody in it says a word.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 10: The Great Gatsby, Chapter VI
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-10',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-10-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_10_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-10-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "Her glance left me" to "five years of unwavering devotion."\n\nList five things you learn about Daisy, and about the end of the party, in this paragraph.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_10,
            extractSource: EXTRACT_10_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. Daisy looked back at the lighted top of the steps.\n2. A waltz called "Three o’Clock in the Morning" was drifting out of the open door.\n3. It was a neat, sad little waltz from that year.\n4. She felt that the party held romantic possibilities her own world lacked.\n5. She wondered whether some radiant young girl might arrive and win Gatsby\'s heart.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'Daisy looked at the lighted top of the steps; the waltz "Three o’Clock in the Morning" was playing; it was a neat, sad little waltz of that year; it drifted out of the open door; Gatsby\'s party was casual; it had romantic possibilities absent from her world; she wondered what the song was calling her back to; she wondered what would happen in the late hours; she feared a radiant young girl might arrive; Gatsby had been devoted to her for five years.',
                'Points the paragraph suggests are credited, such as that Daisy is jealous or uneasy.',
              ],
            },
          },
          {
            id: 'wjec-c1-10-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "I stayed late that night" to "the dance is unimportant."\n\nHow does the writer show Gatsby\'s feelings after the party?\n\nBack up your points with short quotations, and explain what the writer\'s words suggest, using subject terms where they help.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_10,
            extractSource: EXTRACT_10_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows that Gatsby is exhausted and deeply unhappy. His face is described physically, "the tanned skin was drawn unusually tight on his face, and his eyes were bright and tired", which suggests a strain he is trying to control. He speaks "immediately", as if he has been thinking about nothing else, and he repeats "She didn’t like it", the verb "insisted" showing that he will not be comforted. The narrator then names his feeling, "his unutterable depression", where "unutterable" means too great to be put into words. His words "I feel far away from her" show loneliness, and when he dismisses all his dances "with a snap of his fingers", the gesture shows that the parties meant nothing to him except as a way to reach Daisy.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'His appearance: skin "drawn unusually tight", eyes "bright and tired".',
                'The repeated "She didn’t like it", spoken "immediately" and insisted on.',
                '"his unutterable depression" and "I feel far away from her".',
                'The dismissive "snap of his fingers": the dances never mattered, only Daisy.',
              ],
            },
          },
          {
            id: 'wjec-c1-10-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "He wanted nothing less of Daisy" to "he could find out what that thing was."\n\nWhat impressions do you get of Gatsby\'s hopes and dreams in these lines?\n\nQuote from these lines to support your answer, and analyse the writer\'s choice of words, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_10,
            extractSource: EXTRACT_10_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'Gatsby\'s hopes seem huge and unrealistic. He "wanted nothing less of Daisy" than that she should tell Tom "I never loved you", and the phrase "nothing less" shows that he will accept no compromise. The verb in "After she had obliterated four years with that sentence" suggests that he believes words can wipe out time completely. He even plans for them to be "married from her house—just as if it were five years ago", which shows that he wants to go back rather than forward.\n\nWhen Nick warns, "You can’t repeat the past", Gatsby replies "incredulously", "Why of course you can!" The exclamation shows how certain he is, and the adverb "incredulously" shows that he cannot believe anyone would doubt it. He looks around "wildly, as if the past were lurking here in the shadow of his house, just out of reach of his hand", a simile that makes the past seem like a real thing he could almost grab. His promise, "I’m going to fix everything just the way it was before", sounds determined but childlike.\n\nThe setting adds sadness to his hopes. He walks up and down "a desolate path of fruit rinds and discarded favors and crushed flowers", the rubbish left by his party, which suggests that his dreams are surrounded by waste. Finally, the narrator suggests that Gatsby wants "to recover something, some idea of himself perhaps, that had gone into loving Daisy", so his dream is about who he once was as much as about her.',
              'Grade 8-9':
                'The writer presents Gatsby\'s hopes as grand, absolute and impossible, and the language lets us admire their intensity while seeing their danger.\n\nThe first paragraph reveals the scale of what he wants. He "wanted nothing less of Daisy" than a single sentence to Tom, "I never loved you", and the narrator\'s verb, "obliterated four years with that sentence", shows that Gatsby imagines language could erase the past. The plan that follows is oddly businesslike, "the more practical measures to be taken", and the wedding is to happen "just as if it were five years ago". The dash before that phrase isolates it, so we hear the whole fantasy in a few words.\n\nThe dialogue then sets realism against belief. Nick\'s understatement, "I wouldn’t ask too much of her", and his flat truth, "You can’t repeat the past", meet Gatsby\'s disbelieving echo, "Can’t repeat the past?" and "Why of course you can!" The repetition of Nick\'s words as a question shows that the very idea is strange to Gatsby. His body speaks too: he looks around "wildly", and the simile of the past "lurking here in the shadow of his house, just out of reach of his hand" makes time a hidden presence, as if he could catch it. The adverb in "nodding determinedly" and the promise "She’ll see" sound like a child\'s certainty.\n\nThe setting quietly judges him. He paces "a desolate path of fruit rinds and discarded favors and crushed flowers", a list of things used and thrown away, and the adjective "desolate" makes the aftermath of his party an image of his inner state. The final paragraph deepens the impression: the narrator gathers that he wants "to recover something, some idea of himself perhaps", and that "if he could once return to a certain starting place and go over it all slowly", he could find what he had lost. The trailing dots leave the thought unfinished, like the dream itself. So Gatsby emerges as a man whose hopes are not really about Daisy alone but about recovering a lost self, which makes them both moving and doomed.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'The absolute demand that Daisy say "I never loved you", and the belief that it could obliterate four years.',
                'The plan to marry "just as if it were five years ago".',
                'The exchange "You can’t repeat the past" / "Why of course you can!", and the simile of the past "lurking here in the shadow of his house".',
                'The "desolate path" of party rubbish, and the hint that he wants to recover "some idea of himself".',
              ],
            },
          },
          {
            id: 'wjec-c1-10-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "One autumn night, five years before" to "the incarnation was complete."\n\nHow does the writer make Gatsby\'s memory of the autumn night seem magical?\n\nIn your answer, consider:\n- how the writer moves into the memory and builds towards its final moment\n- the words and phrases the writer chooses\n- how these choices affect the reader.\n\nSupport your points with references to the text, using subject terms where they help.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_10,
            extractSource: EXTRACT_10_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer moves into the memory with a row of dots, which makes it feel like a dream we are drifting into. The setting is magical: the leaves are falling, and "the sidewalk was white with moonlight". The word "white" makes the street seem pure and bright. The night has "that mysterious excitement in it which comes at the two changes of the year", and "The quiet lights in the houses were humming out into the darkness", a metaphor that makes light sound like music.\n\nGatsby\'s imagination makes ordinary things wonderful. He sees that "the blocks of the sidewalks really formed a ladder" that "mounted to a secret place above the trees", so the pavement becomes a way up to the sky. The writer builds suspense before the kiss. "His heart beat faster and faster", and the repetition of "faster" shows his excitement. Then he "waited, listening for a moment longer to the tuning-fork that had been struck upon a star", a strange, beautiful metaphor that makes the moment seem to ring. The short sentence "Then he kissed her." comes after all this waiting, so it feels like the climax. The last image, "she blossomed for him like a flower", is a simile that makes Daisy seem to come alive for him, and "the incarnation was complete" suggests that his dream has taken human form.',
              'Grade 8-9':
                'The writer makes the memory magical by changing the pace and texture of the prose, so that a few seconds on a pavement are slowed into something almost sacred.\n\nStructurally, the memory is marked off from the present by a row of dots and a time shift, "One autumn night, five years before", and the reader is carried from Nick\'s report into Gatsby\'s own vision. The first sentence moves through a landscape that is ordinary and enchanted at once: "the leaves were falling", and the couple come "to a place where there were no trees and the sidewalk was white with moonlight". The open space and the whiteness clear a stage for what follows. The next sentences widen the scene to the sky: "that mysterious excitement in it which comes at the two changes of the year", lights "humming out into the darkness", "a stir and bustle among the stars". Sound and light blend, and the whole night seems alive.\n\nGatsby\'s imagination then transforms what he sees. "Out of the corner of his eye" he notices that "the blocks of the sidewalks really formed a ladder", and the adverb "really" presents the fantasy as fact, from inside his mind. The ladder leads to "a secret place above the trees", which he could reach only "if he climbed alone": the dream of rising above the world is a solitary one, and it hints at the choice he must make.\n\nThe second paragraph slows the climax. "His heart beat faster and faster" quickens the rhythm, but then the writer delays the kiss with a long sentence about its consequence: he knew that, kissing her, he would "forever wed his unutterable visions to her perishable breath". The contrast between "unutterable visions" and "perishable breath" is the heart of the passage, setting endless dreams against a mortal girl. "So he waited", and the metaphor of "the tuning-fork that had been struck upon a star" turns the moment into a held, ringing note. Only then comes the short, plain sentence, "Then he kissed her." After so much suspense, its simplicity is the climax. The final simile, "she blossomed for him like a flower", and the religious word "incarnation" make Daisy the living form of his dream. The effect is magical, but the reader also feels a loss: in gaining her, he accepts that his "mind would never romp again" as freely as before.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'Structure: the move into memory, the slow build, the delayed kiss and the short sentence "Then he kissed her."',
                'The enchanted setting: "the sidewalk was white with moonlight", lights "humming out into the darkness", "a stir and bustle among the stars".',
                'Gatsby\'s vision of the ladder "to a secret place above the trees", climbed alone.',
                'The metaphor of "the tuning-fork that had been struck upon a star", the contrast of "unutterable visions" and "perishable breath", and the simile "like a flower".',
              ],
            },
          },
          {
            id: 'wjec-c1-10-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read the last paragraph, from "Through all he said" to the end of the extract.\n\n"Gatsby is presented as a foolish dreamer, and the narrator has no sympathy for him."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about Gatsby and the narrator\'s view of him, in these lines and across the whole extract\n- the choices the writer makes to lead you to those thoughts and feelings.\n\nSupport your points with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_10,
            extractSource: EXTRACT_10_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I disagree. It is true that the narrator thinks Gatsby is foolish in some ways. He calls it "his appalling sentimentality", and the adjective "appalling" is a harsh judgement. Earlier he tells Gatsby plainly, "You can’t repeat the past", and Gatsby\'s reply, "Why of course you can!", makes him seem naive.\n\nHowever, the narrator also feels something deeper. He says that through all Gatsby said, "I was reminded of something—an elusive rhythm, a fragment of lost words, that I had heard somewhere a long time ago". This shows that Gatsby\'s story stirs a memory in Nick himself, as if he understands the longing. He tries to speak, but "they made no sound", and what he almost remembered was "uncommunicable forever", which suggests sadness and loss. So he is moved, not just critical.\n\nThe rest of the extract also makes the reader sympathise with Gatsby. His eyes are "bright and tired", he feels "far away from her", and his memory of the autumn night is described so beautifully, with "the tuning-fork that had been struck upon a star", that the reader shares his wonder. I think the writer presents Gatsby as a dreamer who is foolish but also admirable, and the narrator as someone who criticises him but cannot help being touched by him.',
              'Grade 8-9':
                'I disagree with the second half of the view, and only partly agree with the first. The writer lets the narrator judge Gatsby harshly, but the final lines show that his judgement is mixed with a sympathy so strong that he can hardly put it into words.\n\nThe case for foolishness is real. Gatsby\'s plan depends on Daisy erasing four years with one sentence, and his response to Nick\'s warning, "Can’t repeat the past?", followed by the exclamation "Why of course you can!", shows a refusal to accept time. He looks round "wildly", promises to "fix everything", and walks among the "crushed flowers" left by a party he believes Daisy did not enjoy. The narrator\'s phrase in the final lines, "his appalling sentimentality", is a strong, almost disgusted adjective, and it sounds like a verdict.\n\nBut the sentence does not end there. "Through all he said, even through his appalling sentimentality, I was reminded of something", and the preposition "through" suggests that Gatsby\'s words are a window on something beyond them. What Nick remembers is described in images of loss: "an elusive rhythm, a fragment of lost words". The attempt to speak becomes physical: "a phrase tried to take shape in my mouth", his lips parted, "as though there was more struggling upon them than a wisp of startled air". The personified phrase "tried to take shape" and the "startled air" make language itself seem to fail. The final clause, "what I had almost remembered was uncommunicable forever", ends the extract on a loss that belongs to Nick as much as to Gatsby.\n\nSo the narrator is not without sympathy. Gatsby\'s dream reminds him of something he too has lost, and the beauty of the memory he passes on, the ladder of the sidewalks and "the tuning-fork that had been struck upon a star", shows that he has been moved by it. I think the writer presents Gatsby as foolish and magnificent at once, and gives us a narrator who disapproves of his sentimentality but recognises in it a longing he shares.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'For the view: "his appalling sentimentality"; Gatsby\'s refusal to accept that the past is gone; his wild promises.',
                'Against it: Nick is "reminded of something" through Gatsby\'s words; the struggle to speak; what is "uncommunicable forever"; the beauty with which he retells Gatsby\'s memory.',
                'A judgement on both parts of the view, using the final lines and the extract as a whole.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-10-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Think about the purpose and the reader of your writing. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-10-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) What We Don\'t Say.\n\n(b) Write about a time when you wished you could go back and change something.\n\n(c) Write a story that begins: "The photograph had been in the drawer for twenty years."\n\n(d) Write a story that ends with these words: "And then, at last, I let it go."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (c), a story that begins \"The photograph had been in the drawer for twenty years.\" (about 520 words).\n\nThe photograph had been in the drawer for twenty years. It lay under the takeaway menus and the spare batteries and a single glove that nobody had ever claimed.\n\nI found it on a wet Sunday in March, looking for sticky tape. It was small and square, the colours faded to orange and brown, and it showed a girl of about seventeen on a stage, holding a guitar. She had spiky hair and silver boots, and she was laughing at someone just out of the picture, her mouth wide open, her head thrown back.\n\nIt took me a long time to realise that it was my mother.\n\nMy mother does not laugh like that. My mother is careful. She works at the building society, she irons tea towels, and she checks that the back door is locked three times before she goes to bed. As far as I knew, she had never held a guitar in her life.\n\nI took the photograph into the kitchen, where she was doing a crossword in pencil.\n\n'Who is this?' I said, although I knew.\n\nShe looked at it for a long time without touching it. The rain ticked against the window. Then she put the pencil down.\n\n'That,' she said, 'was the Thunderbirds. Well. That was me, in the Thunderbirds. We played at the Railway Inn every Friday for a year.'\n\n'You were in a band?'\n\n'I was in a band.' She said it as if she were testing the words to see whether they still worked. 'We were going to go to London. A man from a record company came to see us, once. He said we had something.'\n\n'What happened?'\n\nShe shrugged, a small movement that seemed to cost her a lot. 'Your grandad got ill. Somebody had to work. And then there was a job, and then there was your dad, and then there was you.' She smiled, but only with half her face. 'Things happen. You stop.'\n\nI looked at the girl in the silver boots, laughing, and then at my mother, with her careful hair and her pencil, and something in me hurt in a way I could not explain.\n\n'Do you still have it?' I asked. 'The guitar?'\n\nIt was in the loft, in a case covered in stickers, under a box of my old school reports. The strings were rusty and two of them were missing. We cleaned it together at the kitchen table with a cloth and a bottle of oil, and on Monday I spent my birthday money on new strings.\n\nThe first time she played it, her fingers were stiff and slow, and she kept stopping to say sorry. The second time, she did not apologise. By the end of the week she was playing in the evenings with the kitchen door shut, and I sat on the stairs outside and listened.\n\nOn Saturday, I heard her laugh. Not her careful laugh. The other one, wide open, head thrown back, the laugh from the photograph.\n\nI put the photograph back in the drawer that night. But I put it on top.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },
]
