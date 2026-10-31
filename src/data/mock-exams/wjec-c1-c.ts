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
 *   11  Animal Farm, Chapter VI: the storm, and Napoleon blames Snowball
 *   12  The Great Gatsby, Chapter V: Gatsby and Daisy meet again
 *   13  Animal Farm, Chapter VII: Clover on the knoll
 *   14  The Great Gatsby, Chapter V: Gatsby shows Daisy his house
 *   15  Animal Farm, Chapter VIII: the Battle of the Windmill
 * Both authors died before 1956 (Orwell 1950, Fitzgerald 1940), so the texts
 * are out of UK copyright.
 * Every extract is printed exactly as the held edition has it, punctuation
 * included. Paper 14's prints two opening quotation marks as the transcription
 * does, each as a pair of single marks.
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
 * SECOND READING, 31 October 2026 (a checker, against each extract, the held
 * novels and the guide). Fixed:
 *   - Board wording: the instructions in Questions 01 to 05 and the Section B
 *     rubric repeated Eduqas's own sentences ("List five things you learn
 *     about ...", "You should refer to the language used in the text to
 *     support your answer", "how the writer has created these thoughts and
 *     feelings", "You must refer to the text to support your answer"); now in
 *     this file's words, asking for the same things.
 *   - 11, Question 04 started mid-sentence, at "do you know who is
 *     responsible", while its answers quote the "quietly" before it; it now
 *     starts where its paragraph does.
 *   - 11, Question 03, Grade 8-9 called the discovery "structured", in a
 *     question that rewards language only; now "written to shock".
 *   - 11 and 15, Question 03, Grade 6-7 began a sentence with a quotation in
 *     lower case; each is now joined to the sentence before.
 *   - 12, Question 04, Grade 8-9 called "A pause; it endured horribly." a
 *     one-sentence paragraph (it has two sentences), and quoted "What’s
 *     funny?" from before the lines named; both corrected.
 *   - 12, Question 05: Nick makes an excuse "at the first possible moment"
 *     rather than leaving then, and he cannot "make" the tea, which the Finn
 *     brings in; both answers now say what the extract says.
 *   - 13, Question 03, Grade 8-9 ran to 457 words, more than anyone writes in
 *     13 minutes; now about 380, by cutting long quotations, not points.
 *   - 14, Question 03, Grade 8-9 said Gatsby built his house to win Daisy (he
 *     bought it, and a brewer built it: Chapters IV and V), and read "actual
 *     and astounding" as making Daisy seem unreal, when it is his possessions
 *     that stop seeming real beside her; both corrected.
 *   - 14, Question 04, Grade 8-9 spoke of "the five years" apart, which this
 *     extract never mentions (Paper 12's does); now "the lost years".
 *   - 15, Question 05, Grade 6-7 said "many were killed"; it now names the
 *     six the extract names.
 *   - 14, Section B: the model story to (c) ran the set opening sentence on
 *     into a longer one; it now begins with the line as set.
 */

// ─── Extracts ────────────────────────────────────────────────────────────────
// Cut by script from src/data/full-texts and never retyped (see above).

const EXTRACT_11 = `By the autumn the animals were tired but happy. They had had a hard year, and after the sale of part of the hay and corn, the stores of food for the winter were none too plentiful, but the windmill compensated for everything. It was almost half built now. After the harvest there was a stretch of clear dry weather, and the animals toiled harder than ever, thinking it well worth while to plod to and fro all day with blocks of stone if by doing so they could raise the walls another foot. Boxer would even come out at nights and work for an hour or two on his own by the light of the harvest moon. In their spare moments the animals would walk round and round the half-finished mill, admiring the strength and perpendicularity of its walls and marvelling that they should ever have been able to build anything so imposing. Only old Benjamin refused to grow enthusiastic about the windmill, though, as usual, he would utter nothing beyond the cryptic remark that donkeys live a long time.

November came, with raging south-west winds. Building had to stop because it was now too wet to mix the cement. Finally there came a night when the gale was so violent that the farm buildings rocked on their foundations and several tiles were blown off the roof of the barn. The hens woke up squawking with terror because they had all dreamed simultaneously of hearing a gun go off in the distance. In the morning the animals came out of their stalls to find that the flagstaff had been blown down and an elm tree at the foot of the orchard had been plucked up like a radish. They had just noticed this when a cry of despair broke from every animal's throat. A terrible sight had met their eyes. The windmill was in ruins.

With one accord they dashed down to the spot. Napoleon, who seldom moved out of a walk, raced ahead of them all. Yes, there it lay, the fruit of all their struggles, levelled to its foundations, the stones they had broken and carried so laboriously scattered all around. Unable at first to speak, they stood gazing mournfully at the litter of fallen stone. Napoleon paced to and fro in silence, occasionally snuffing at the ground. His tail had grown rigid and twitched sharply from side to side, a sign in him of intense mental activity. Suddenly he halted as though his mind were made up.

"Comrades," he said quietly, "do you know who is responsible for this? Do you know the enemy who has come in the night and overthrown our windmill? SNOWBALL!" he suddenly roared in a voice of thunder. "Snowball has done this thing! In sheer malignity, thinking to set back our plans and avenge himself for his ignominious expulsion, this traitor has crept here under cover of night and destroyed our work of nearly a year. Comrades, here and now I pronounce the death sentence upon Snowball. 'Animal Hero, Second Class,' and half a bushel of apples to any animal who brings him to justice. A full bushel to anyone who captures him alive!"

The animals were shocked beyond measure to learn that even Snowball could be guilty of such an action. There was a cry of indignation, and everyone began thinking out ways of catching Snowball if he should ever come back. Almost immediately the footprints of a pig were discovered in the grass at a little distance from the knoll. They could only be traced for a few yards, but appeared to lead to a hole in the hedge. Napoleon snuffed deeply at them and pronounced them to be Snowball's. He gave it as his opinion that Snowball had probably come from the direction of Foxwood Farm.

"No more delays, comrades!" cried Napoleon when the footprints had been examined. "There is work to be done. This very morning we begin rebuilding the windmill, and we will build all through the winter, rain or shine. We will teach this miserable traitor that he cannot undo our work so easily. Remember, comrades, there must be no alteration in our plans: they shall be carried out to the day. Forward, comrades! Long live the windmill! Long live Animal Farm!"`

const EXTRACT_11_SOURCE =
  'George Orwell, Animal Farm (1945), Chapter VI. Text: Project Gutenberg Australia.'

const EXTRACT_12 = `The day agreed upon was pouring rain. At eleven o’clock a man in a raincoat, dragging a lawn-mower, tapped at my front door and said that Mr. Gatsby had sent him over to cut my grass. This reminded me that I had forgotten to tell my Finn to come back, so I drove into West Egg Village to search for her among soggy whitewashed alleys and to buy some cups and lemons and flowers.

The flowers were unnecessary, for at two o’clock a greenhouse arrived from Gatsby’s, with innumerable receptacles to contain it. An hour later the front door opened nervously, and Gatsby, in a white flannel suit, silver shirt, and gold-colored tie, hurried in. He was pale, and there were dark signs of sleeplessness beneath his eyes.

“Is everything all right?” he asked immediately.

“The grass looks fine, if that’s what you mean.”

“What grass?” he inquired blankly. “Oh, the grass in the yard.” He looked out the window at it, but, judging from his expression, I don’t believe he saw a thing.

“Looks very good,” he remarked vaguely. “One of the papers said they thought the rain would stop about four. I think it was The Journal. Have you got everything you need in the shape of—of tea?”

I took him into the pantry, where he looked a little reproachfully at the Finn. Together we scrutinized the twelve lemon cakes from the delicatessen shop.

“Will they do?” I asked.

“Of course, of course! They’re fine!” and he added hollowly, “. . . old sport.”

The rain cooled about half-past three to a damp mist, through which occasional thin drops swam like dew. Gatsby looked with vacant eyes through a copy of Clay’s “Economics,” starting at the Finnish tread that shook the kitchen floor, and peering toward the bleared windows from time to time as if a series of invisible but alarming happenings were taking place outside. Finally he got up and informed me, in an uncertain voice, that he was going home.

“Why’s that?”

“Nobody’s coming to tea. It’s too late!” He looked at his watch as if there was some pressing demand on his time elsewhere. “I can’t wait all day.”

“Don’t be silly; it’s just two minutes to four.”

He sat down miserably, as if I had pushed him, and simultaneously there was the sound of a motor turning into my lane. We both jumped up, and, a little harrowed myself, I went out into the yard.

Under the dripping bare lilac-trees a large open car was coming up the drive. It stopped. Daisy’s face, tipped sideways beneath a three-cornered lavender hat, looked out at me with a bright ecstatic smile.

“Is this absolutely where you live, my dearest one?”

The exhilarating ripple of her voice was a wild tonic in the rain. I had to follow the sound of it for a moment, up and down, with my ear alone, before any words came through. A damp streak of hair lay like a dash of blue paint across her cheek, and her hand was wet with glistening drops as I took it to help her from the car.

“Are you in love with me,” she said low in my ear, “or why did I have to come alone?”

“That’s the secret of Castle Rackrent. Tell your chauffeur to go far away and spend an hour.”

“Come back in an hour, Ferdie.” Then in a grave murmur: “His name is Ferdie.”

“Does the gasoline affect his nose?”

“I don’t think so,” she said innocently. “Why?”

We went in. To my overwhelming surprise the living-room was deserted.

“Well, that’s funny,” I exclaimed.

“What’s funny?”

She turned her head as there was a light dignified knocking at the front door. I went out and opened it. Gatsby, pale as death, with his hands plunged like weights in his coat pockets, was standing in a puddle of water glaring tragically into my eyes.

With his hands still in his coat pockets he stalked by me into the hall, turned sharply as if he were on a wire, and disappeared into the living-room. It wasn’t a bit funny. Aware of the loud beating of my own heart I pulled the door to against the increasing rain.

For half a minute there wasn’t a sound. Then from the living-room I heard a sort of choking murmur and part of a laugh, followed by Daisy’s voice on a clear artificial note:

“I certainly am awfully glad to see you again.”

A pause; it endured horribly. I had nothing to do in the hall, so I went into the room.

Gatsby, his hands still in his pockets, was reclining against the mantelpiece in a strained counterfeit of perfect ease, even of boredom. His head leaned back so far that it rested against the face of a defunct mantelpiece clock, and from this position his distraught eyes stared down at Daisy, who was sitting, frightened but graceful, on the edge of a stiff chair.

“We've met before,” muttered Gatsby. His eyes glanced momentarily at me, and his lips parted with an abortive attempt at a laugh. Luckily the clock took this moment to tilt dangerously at the pressure of his head, whereupon he turned and caught it with trembling fingers, and set it back in place. Then he sat down, rigidly, his elbow on the arm of the sofa and his chin in his hand.

“I’m sorry about the clock,” he said.

My own face had now assumed a deep tropical burn. I couldn’t muster up a single commonplace out of the thousand in my head.

“It’s an old clock,” I told them idiotically.

I think we all believed for a moment that it had smashed in pieces on the floor.

“We haven’t met for many years,” said Daisy, her voice as matter-of-fact as it could ever be.

“Five years next November.”

The automatic quality of Gatsby’s answer set us all back at least another minute. I had them both on their feet with the desperate suggestion that they help me make tea in the kitchen when the demoniac Finn brought it in on a tray.

Amid the welcome confusion of cups and cakes a certain physical decency established itself. Gatsby got himself into a shadow and, while Daisy and I talked, looked conscientiously from one to the other of us with tense, unhappy eyes. However, as calmness wasn’t an end in itself, I made an excuse at the first possible moment, and got to my feet.`

const EXTRACT_12_SOURCE =
  'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter V. Text: the first edition (New York, 1925), as transcribed by Wikisource.'

const EXTRACT_13 = `When it was all over, the remaining animals, except for the pigs and dogs, crept away in a body. They were shaken and miserable. They did not know which was more shocking—the treachery of the animals who had leagued themselves with Snowball, or the cruel retribution they had just witnessed. In the old days there had often been scenes of bloodshed equally terrible, but it seemed to all of them that it was far worse now that it was happening among themselves. Since Jones had left the farm, until today, no animal had killed another animal. Not even a rat had been killed. They had made their way on to the little knoll where the half-finished windmill stood, and with one accord they all lay down as though huddling together for warmth—Clover, Muriel, Benjamin, the cows, the sheep, and a whole flock of geese and hens—everyone, indeed, except the cat, who had suddenly disappeared just before Napoleon ordered the animals to assemble. For some time nobody spoke. Only Boxer remained on his feet. He fidgeted to and fro, swishing his long black tail against his sides and occasionally uttering a little whinny of surprise. Finally he said:

"I do not understand it. I would not have believed that such things could happen on our farm. It must be due to some fault in ourselves. The solution, as I see it, is to work harder. From now onwards I shall get up a full hour earlier in the mornings."

And he moved off at his lumbering trot and made for the quarry. Having got there, he collected two successive loads of stone and dragged them down to the windmill before retiring for the night.

The animals huddled about Clover, not speaking. The knoll where they were lying gave them a wide prospect across the countryside. Most of Animal Farm was within their view—the long pasture stretching down to the main road, the hayfield, the spinney, the drinking pool, the ploughed fields where the young wheat was thick and green, and the red roofs of the farm buildings with the smoke curling from the chimneys. It was a clear spring evening. The grass and the bursting hedges were gilded by the level rays of the sun. Never had the farm—and with a kind of surprise they remembered that it was their own farm, every inch of it their own property—appeared to the animals so desirable a place. As Clover looked down the hillside her eyes filled with tears. If she could have spoken her thoughts, it would have been to say that this was not what they had aimed at when they had set themselves years ago to work for the overthrow of the human race. These scenes of terror and slaughter were not what they had looked forward to on that night when old Major first stirred them to rebellion. If she herself had had any picture of the future, it had been of a society of animals set free from hunger and the whip, all equal, each working according to his capacity, the strong protecting the weak, as she had protected the lost brood of ducklings with her foreleg on the night of Major's speech. Instead—she did not know why—they had come to a time when no one dared speak his mind, when fierce, growling dogs roamed everywhere, and when you had to watch your comrades torn to pieces after confessing to shocking crimes. There was no thought of rebellion or disobedience in her mind. She knew that, even as things were, they were far better off than they had been in the days of Jones, and that before all else it was needful to prevent the return of the human beings. Whatever happened she would remain faithful, work hard, carry out the orders that were given to her, and accept the leadership of Napoleon. But still, it was not for this that she and all the other animals had hoped and toiled. It was not for this that they had built the windmill and faced the bullets of Jones's gun. Such were her thoughts, though she lacked the words to express them.

At last, feeling this to be in some way a substitute for the words she was unable to find, she began to sing 'Beasts of England'. The other animals sitting round her took it up, and they sang it three times over—very tunefully, but slowly and mournfully, in a way they had never sung it before.

They had just finished singing it for the third time when Squealer, attended by two dogs, approached them with the air of having something important to say. He announced that, by a special decree of Comrade Napoleon, 'Beasts of England' had been abolished. From now onwards it was forbidden to sing it.

The animals were taken aback.

"Why?" cried Muriel.

"It's no longer needed, comrade," said Squealer stiffly. "'Beasts of England' was the song of the Rebellion. But the Rebellion is now completed. The execution of the traitors this afternoon was the final act. The enemy both external and internal has been defeated. In 'Beasts of England' we expressed our longing for a better society in days to come. But that society has now been established. Clearly this song has no longer any purpose."

Frightened though they were, some of the animals might possibly have protested, but at this moment the sheep set up their usual bleating of "Four legs good, two legs bad," which went on for several minutes and put an end to the discussion.`

const EXTRACT_13_SOURCE =
  'George Orwell, Animal Farm (1945), Chapter VII. Text: Project Gutenberg Australia.'

const EXTRACT_14 = `Instead of taking the short cut along the Sound we went down to the road and entered by the big postern. With enchanting murmurs Daisy admired this aspect or that of the feudal silhouette against the sky, admired the gardens, the sparkling odor of jonquils and the frothy odor of hawthorn and plum blossoms and the pale gold odor of kiss-me-at-the-gate. It was strange to reach the marble steps and find no stir of bright dresses in and out the door, and hear no sound but bird voices in the trees.

And inside, as we wandered through Marie Antoinette music-rooms and Restoration Salons, I felt that there were guests concealed behind every couch and table, under orders to be breathlessly silent until we had passed through. As Gatsby closed the door of ‘‘the Merton College Library” I could have sworn I heard the owl-eyed man break into ghostly laughter.

We went up-stairs, through period bedrooms swathed in rose and lavender silk and vivid with new flowers, through dressing-rooms and poolrooms, and bathrooms with sunken baths—intruding into one chamber where a dishevelled man in pajamas was doing liver exercises on the floor. It was Mr. Klipspringer, the ‘‘boarder.” I had seen him wandering hungrily about the beach that morning. Finally we came to Gatsby’s own apartment, a bedroom and a bath, and an Adam’s study, where we sat down and drank a glass of some Chartreuse he took from a cupboard in the wall.

He hadn’t once ceased looking at Daisy, and I think he revalued everything in his house according to the measure of response it drew from her well-loved eyes. Sometimes, too, he stared around at his possessions in a dazed way, as though in her actual and astounding presence none of it was any longer real. Once he nearly toppled down a flight of stairs.

His bedroom was the simplest room of all—except where the dresser was garnished with a toilet set of pure dull gold. Daisy took the brush with delight, and smoothed her hair, whereupon Gatsby sat down and shaded his eyes and began to laugh.

“It’s the funniest thing, old sport,” he said hilariously. “I can’t— When I try to—”

He had passed visibly through two states and was entering upon a third. After his embarrassment and his unreasoning joy he was consumed with wonder at her presence. He had been full of the idea so long, dreamed it right through to the end, waited with his teeth set, so to speak, at an inconceivable pitch of intensity. Now, in the reaction, he was running down like an overwound clock.

Recovering himself in a minute he opened for us two hulking patent cabinets which held his massed suits and dressing-gowns and ties, and his shirts, piled like bricks in stacks a dozen high.

“I’ve got a man in England who buys me clothes. He sends over a selection of things at the beginning of each season, spring and fall.”

He took out a pile of shirts and began throwing them, one by one, before us, shirts of sheer linen and thick silk and fine flannel, which lost their folds as they fell and covered the table in many colored disarray. While we admired he brought more and the soft rich heap mounted higher—shirts with stripes and scrolls and plaids in coral and applegreen and lavender and faint orange, with monograms of Indian blue. Suddenly, with a strained sound, Daisy bent her head into the shirts and began to cry stormily.

“They’re such beautiful shirts,” she sobbed, her voice muffled in the thick folds. “It makes me sad because I’ve never seen such—such beautiful shirts before.”

After the house, we were to see the grounds and the swimming-pool, and the hydroplane and the midsummer flowers—but outside Gatsby’s window it began to rain again, so we stood in a row looking at the corrugated surface of the Sound.

“If it wasn’t for the mist we could see your home across the bay,” said Gatsby. “You always have a green light that burns all night at the end of your dock.”

Daisy put her arm through his abruptly, but he seemed absorbed in what he had just said. Possibly it had occurred to him that the colossal significance of that light had now vanished forever. Compared to the great distance that had separated him from Daisy it had seemed very near to her, almost touching her. It had seemed as close as a star to the moon. Now it was again a green light on a dock. His count of enchanted objects had diminished by one.`

const EXTRACT_14_SOURCE =
  'F. Scott Fitzgerald, The Great Gatsby (1925), Chapter V. Text: the first edition (New York, 1925), as transcribed by Wikisource.'

const EXTRACT_15 = `The very next morning the attack came. The animals were at breakfast when the look-outs came racing in with the news that Frederick and his followers had already come through the five-barred gate. Boldly enough the animals sallied forth to meet them, but this time they did not have the easy victory that they had had in the Battle of the Cowshed. There were fifteen men, with half a dozen guns between them, and they opened fire as soon as they got within fifty yards. The animals could not face the terrible explosions and the stinging pellets, and in spite of the efforts of Napoleon and Boxer to rally them, they were soon driven back. A number of them were already wounded. They took refuge in the farm buildings and peeped cautiously out from chinks and knot-holes. The whole of the big pasture, including the windmill, was in the hands of the enemy. For the moment even Napoleon seemed at a loss. He paced up and down without a word, his tail rigid and twitching. Wistful glances were sent in the direction of Foxwood. If Pilkington and his men would help them, the day might yet be won. But at this moment the four pigeons, who had been sent out on the day before, returned, one of them bearing a scrap of paper from Pilkington. On it was pencilled the words: "Serves you right."

Meanwhile Frederick and his men had halted about the windmill. The animals watched them, and a murmur of dismay went round. Two of the men had produced a crowbar and a sledge hammer. They were going to knock the windmill down.

"Impossible!" cried Napoleon. "We have built the walls far too thick for that. They could not knock it down in a week. Courage, comrades!"

But Benjamin was watching the movements of the men intently. The two with the hammer and the crowbar were drilling a hole near the base of the windmill. Slowly, and with an air almost of amusement, Benjamin nodded his long muzzle.

"I thought so," he said. "Do you not see what they are doing? In another moment they are going to pack blasting powder into that hole."

Terrified, the animals waited. It was impossible now to venture out of the shelter of the buildings. After a few minutes the men were seen to be running in all directions. Then there was a deafening roar. The pigeons swirled into the air, and all the animals, except Napoleon, flung themselves flat on their bellies and hid their faces. When they got up again, a huge cloud of black smoke was hanging where the windmill had been. Slowly the breeze drifted it away. The windmill had ceased to exist!

At this sight the animals' courage returned to them. The fear and despair they had felt a moment earlier were drowned in their rage against this vile, contemptible act. A mighty cry for vengeance went up, and without waiting for further orders they charged forth in a body and made straight for the enemy. This time they did not heed the cruel pellets that swept over them like hail. It was a savage, bitter battle. The men fired again and again, and, when the animals got to close quarters, lashed out with their sticks and their heavy boots. A cow, three sheep, and two geese were killed, and nearly everyone was wounded. Even Napoleon, who was directing operations from the rear, had the tip of his tail chipped by a pellet. But the men did not go unscathed either. Three of them had their heads broken by blows from Boxer's hoofs; another was gored in the belly by a cow's horn; another had his trousers nearly torn off by Jessie and Bluebell. And when the nine dogs of Napoleon's own bodyguard, whom he had instructed to make a detour under cover of the hedge, suddenly appeared on the men's flank, baying ferociously, panic overtook them. They saw that they were in danger of being surrounded. Frederick shouted to his men to get out while the going was good, and the next moment the cowardly enemy was running for dear life. The animals chased them right down to the bottom of the field, and got in some last kicks at them as they forced their way through the thorn hedge.

They had won, but they were weary and bleeding. Slowly they began to limp back towards the farm. The sight of their dead comrades stretched upon the grass moved some of them to tears. And for a little while they halted in sorrowful silence at the place where the windmill had once stood. Yes, it was gone; almost the last trace of their labour was gone! Even the foundations were partially destroyed. And in rebuilding it they could not this time, as before, make use of the fallen stones. This time the stones had vanished too. The force of the explosion had flung them to distances of hundreds of yards. It was as though the windmill had never been.

As they approached the farm Squealer, who had unaccountably been absent during the fighting, came skipping towards them, whisking his tail and beaming with satisfaction. And the animals heard, from the direction of the farm buildings, the solemn booming of a gun.`

const EXTRACT_15_SOURCE =
  'George Orwell, Animal Farm (1945), Chapter VIII. Text: Project Gutenberg Australia.'

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

export const wjecC1C: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 11: Animal Farm, Chapter VI
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-11',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-11-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_11_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-11-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "By the autumn the animals were tired but happy." to "donkeys live a long time."\n\nList five things this paragraph tells you about the animals and the windmill.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. The animals were tired but happy after a hard year.\n2. Their stores of food for the winter were not very plentiful.\n3. The windmill was almost half built.\n4. Boxer sometimes worked at night by the light of the harvest moon.\n5. In their spare time the animals walked round the mill, admiring its walls.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'They were tired but happy; it had been a hard year; part of the hay and corn had been sold; the winter food stores were none too plentiful; the windmill made up for everything; it was almost half built; the weather was clear and dry after the harvest; they toiled harder than ever, carrying blocks of stone; Boxer worked at night by the harvest moon; they admired the strength and straightness of its walls; only Benjamin refused to be enthusiastic.',
              ],
            },
          },
          {
            id: 'wjec-c1-11-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "November came, with raging south-west winds." to "plucked up like a radish."\n\nHow does the writer show the power of the storm?\n\nSupport your answer with short quotations, and comment on the words the writer chooses.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows the storm\'s power through what it does to the farm. The winds are "raging", a word that personifies them as furious, and the gale is "so violent that the farm buildings rocked on their foundations", which suggests that even solid things are unsafe. The hens wake "squawking with terror", and their shared dream of "hearing a gun go off in the distance" adds a sense of danger. The damage is shown the next morning: the flagstaff "had been blown down", and an elm tree "had been plucked up like a radish". The simile is striking because it compares a huge tree to a small vegetable pulled from the ground, so the storm seems to have enormous, almost careless strength.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'The "raging" winds and a gale "so violent that the farm buildings rocked on their foundations".',
                'The hens "squawking with terror".',
                'The damage, ending in the simile of the elm "plucked up like a radish".',
              ],
            },
          },
          {
            id: 'wjec-c1-11-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "They had just noticed this" to "as though his mind were made up."\n\nHow does the writer show the thoughts and feelings of the animals, and of Napoleon, when they find the windmill destroyed?\n\nSupport your answer with short quotations, and analyse the writer\'s language using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The animals feel shock and despair: "a cry of despair broke from every animal\'s throat", and the word "every" shows that the grief is shared by all of them. The writer delays the cause with "A terrible sight had met their eyes", and then states it in a short, blunt sentence: "The windmill was in ruins." This makes the moment hit hard. They rush "With one accord" to the spot, and the sight is described with sadness: "the fruit of all their struggles, levelled to its foundations". The metaphor "fruit of all their struggles" shows how much work it stood for, and the adverb in "carried so laboriously" reminds us how hard that work was. They are "Unable at first to speak", and they stand "gazing mournfully at the litter of fallen stone", which shows grief too deep for words.\n\nNapoleon reacts differently. He "raced ahead of them all", which is unusual because he "seldom moved out of a walk", so the reader can tell that he is shaken. But then he is silent and calculating: he "paced to and fro in silence, occasionally snuffing at the ground", and his twitching tail is "a sign in him of intense mental activity". While the others grieve, he is thinking. The final sentence, "Suddenly he halted as though his mind were made up", creates suspense, because we do not yet know what he has decided.',
              'Grade 8-9':
                'The writer contrasts the animals\' grief, shown openly and together, with Napoleon\'s feelings, which are hidden and quickly turned into calculation.\n\nThe discovery is written to shock. The first sentence begins with an ordinary clause, "They had just noticed this", and then breaks into "a cry of despair" that comes "from every animal\'s throat", the image of a cry breaking from each throat making it seem torn out of them. The cause is held back for a sentence, "A terrible sight had met their eyes", and then delivered in five flat words: "The windmill was in ruins." The short sentence mirrors the collapse.\n\nTheir feelings are then shown through movement and stillness. "With one accord" they dash to the spot, and the narrator\'s "Yes, there it lay" sounds almost like the animals\' own voice, confirming what they cannot believe. The metaphor "the fruit of all their struggles" presents the mill as the harvest of their work, and the participle "levelled" and the image of the stones "scattered all around" stress total ruin. The adverb "laboriously" recalls the effort, and the phrase "the stones they had broken and carried" makes it personal: the ruin is of their own labour. Finally, they are "Unable at first to speak", "gazing mournfully at the litter of fallen stone", and the noun "litter" reduces their great project to rubbish.\n\nNapoleon\'s reaction is the paragraph\'s quiet turn. That he "raced ahead of them all", though he "seldom moved out of a walk", hints at real alarm. Yet once there, his feelings are hidden behind actions: he "paced to and fro in silence", "occasionally snuffing at the ground", like an animal searching for a scent. The narrator explains his twitching tail as "a sign in him of intense mental activity", a dry, almost clinical phrase that tells us he is not mourning but planning. The last sentence, "Suddenly he halted as though his mind were made up", ends on a decision we have not been told, so the reader\'s sympathy for the grieving animals turns into unease about what Napoleon will do with their grief.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'The shared despair: "a cry of despair broke from every animal\'s throat", the delay before the short sentence "The windmill was in ruins."',
                'The grief at the ruin: "the fruit of all their struggles", "levelled to its foundations", "gazing mournfully at the litter of fallen stone".',
                'Napoleon\'s alarm (he "raced ahead of them all") turning into silent calculation: "a sign in him of intense mental activity".',
                'The suspense of the final sentence, "as though his mind were made up".',
              ],
            },
          },
          {
            id: 'wjec-c1-11-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read the next two paragraphs, from "Comrades," he said quietly, to "the direction of Foxwood Farm."\n\nHow does the writer create tension and drama in these lines?\n\nIn your answer, consider:\n- what happens, and the order in which the writer tells it\n- the words and phrases the writer chooses\n- how these affect the reader.\n\nSupport your answer with references to the text, using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer builds tension through the way Napoleon speaks. He begins "quietly", with two questions, "do you know who is responsible for this?" and "Do you know the enemy who has come in the night", which make the animals, and the reader, wait for the answer. Then the name bursts out in capital letters, "SNOWBALL!", as he "suddenly roared in a voice of thunder". The contrast between "quietly" and "roared" is dramatic, and the metaphor "a voice of thunder" makes him seem as powerful as the storm. His accusation is full of strong words, "sheer malignity", "ignominious expulsion", "this traitor", and he ends with "the death sentence upon Snowball" and rewards for his capture, which raises the stakes.\n\nThe second paragraph shows the animals\' reaction: they were "shocked beyond measure", and there was "a cry of indignation". Then the drama continues with the discovery of evidence: "Almost immediately the footprints of a pig were discovered". The word "immediately" makes this seem convenient, and the footprints "could only be traced for a few yards", so the evidence is weak. Napoleon "pronounced them to be Snowball\'s", and the verb "pronounced" makes it sound like an official judgement. The reader may begin to suspect that Napoleon is using the disaster for his own purposes.',
              'Grade 8-9':
                'The writer creates tension and drama by turning a natural disaster into a crime with a villain, and the structure of these lines shows how quickly that story is built and believed.\n\nNapoleon\'s speech is a performance in three movements. It opens "quietly", with rhetorical questions that hold back the answer: "do you know who is responsible for this? Do you know the enemy who has come in the night and overthrown our windmill?" The phrase "come in the night" makes the storm\'s damage sound like a secret attack. Then comes the explosion, "SNOWBALL!", printed in capitals, as "he suddenly roared in a voice of thunder", a metaphor that borrows the storm\'s power for Napoleon himself. The accusation that follows piles up loaded language, "In sheer malignity", "avenge himself for his ignominious expulsion", "this traitor has crept here under cover of night", so that Snowball\'s guilt is asserted rather than shown. Finally the speech moves to judgement and reward, "here and now I pronounce the death sentence upon Snowball", followed by prizes of apples, which turns grief into a manhunt.\n\nThe second paragraph shows the drama spreading. The animals are "shocked beyond measure" and give "a cry of indignation", and "everyone began thinking out ways of catching Snowball". The evidence arrives "Almost immediately", which feels too convenient, and it is thin: the footprints "could only be traced for a few yards", and they "appeared to lead to a hole in the hedge". The verb "appeared" and the vague distance invite doubt. Napoleon "snuffed deeply at them and pronounced them to be Snowball\'s", and he "gave it as his opinion" that Snowball came from Foxwood. The formal phrases make opinion sound like proof. The tension for the reader is double: we feel the animals\' outrage, but the writer\'s dry reporting makes us suspect that the real drama is a lie being turned into the truth.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'Structure: the quiet questions, the sudden roar of "SNOWBALL!", the accusation, then the sentence of death and the rewards.',
                'Loaded language: "In sheer malignity", "this traitor", "a voice of thunder".',
                'The animals\' outrage, "shocked beyond measure", and the convenient, thin evidence found "Almost immediately".',
                "Napoleon's verdict on the footprints, which turns opinion into proof, and the reader's growing suspicion.",
              ],
            },
          },
          {
            id: 'wjec-c1-11-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read the last paragraph, from "No more delays, comrades!" to the end of the extract.\n\n"Napoleon is a strong leader who turns a disaster into a chance to bring the animals together."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about Napoleon, in these lines and in the extract as a whole\n- how the writer\'s choices lead you to think and feel this way.\n\nSupport your answer with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_11,
            extractSource: EXTRACT_11_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I partly agree. In the final lines Napoleon sounds like a strong leader. He gives clear orders, "No more delays, comrades!" and "This very morning we begin rebuilding the windmill", and he promises that "we will build all through the winter, rain or shine". The repeated "we" and "comrades" make the animals feel united, and his slogans, "Forward, comrades! Long live the windmill! Long live Animal Farm!", end the extract on a rousing note. He gives the animals a common enemy too: "this miserable traitor".\n\nHowever, the whole extract makes me doubt that he is honest. The windmill was destroyed by a storm so violent that it "plucked up" an elm tree "like a radish", yet Napoleon blames Snowball. Before he speaks, he paces "in silence" with "intense mental activity", as if he is working out what to say, and the evidence is weak: footprints that "could only be traced for a few yards". So he does bring the animals together, but by giving them someone to blame rather than by telling the truth. He is strong, but in a cunning and dishonest way.',
              'Grade 8-9':
                'I agree that Napoleon unites the animals, but I disagree that this makes him the strong leader the view suggests: the writer shows his strength as the strength of a manipulator, and the extract as a whole asks us to see through it.\n\nThe final lines are a rallying cry, and they work. "No more delays, comrades!" turns mourning into action, and the short sentence "There is work to be done" sounds decisive. His promises are bold, "we will build all through the winter, rain or shine", and the inclusive "we" binds him to the workers, though the opening paragraph has shown who actually carries the stone. He offers a target for their anger, "this miserable traitor", and a vow of defiance, "he cannot undo our work so easily". The speech ends with three exclamations, "Forward, comrades! Long live the windmill! Long live Animal Farm!", whose rising rhythm sweeps the animals, and almost the reader, along.\n\nBut the writer has shown us how this unity was made. The cause of the ruin was the weather: a gale "so violent that the farm buildings rocked on their foundations", strong enough to pluck up an elm "like a radish". Napoleon\'s own reaction, pacing "in silence" with a tail that showed "intense mental activity", reads as the moment he chose a story. The evidence that supports it is thin, footprints that "could only be traced for a few yards" and only "appeared to lead to a hole in the hedge", and it is Napoleon alone who "pronounced them to be Snowball\'s". Even his insistence that "there must be no alteration in our plans" is telling, because it refuses any discussion of what went wrong.\n\nSo my thoughts and feelings are uncomfortable. Napoleon does turn disaster into unity, and the animals are comforted by having work and an enemy. But the writer lets us see that the unity rests on a convenient lie, and that a leader who can use a storm this way is strong in the most dangerous sense.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Agreement: the decisive commands, the inclusive "we" and "comrades", the common enemy, the rousing final exclamations.',
                "Disagreement: the storm, not Snowball, destroyed the mill; Napoleon's silent calculation; the thin evidence he alone interprets; his refusal of any change to the plans.",
                'A judgement on what kind of strength the writer shows, drawn from the final lines and the whole extract.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-11-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Keep in mind what your writing is for and who will read it. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-11-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Storm.\n\n(b) Write about a time when something you had worked hard for went wrong.\n\n(c) Write a story that begins: "By morning, everything had changed."\n\n(d) Write a story that ends with these words: "We started again the next day."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (b), a time when something you had worked hard for went wrong (about 510 words).\n\nThe bridge took us six weeks to build and four seconds to fall down.\n\nIt was for the regional engineering challenge, which our school had entered for the first time. The rules were simple. Each team of three had to build a bridge from lolly sticks, string and wood glue, no longer than a metre, and on the day it would be loaded with weights until it broke. The bridge that held the most won.\n\nThere were three of us: me, Kofi, who could draw anything, and Amira, who had read every book about bridges in the library and some that the library did not know it had. We met every lunchtime in the technology room. Kofi drew the design, a graceful arch with triangles along its sides. Amira worked out the loads. I glued. By the end, my fingers were permanently sticky and I could smell wood glue in my sleep.\n\nBut it was beautiful. When we carried it into the sports hall on the morning of the challenge, other teams stopped to look at it. Ours was the only arch. Most of the others were flat and ugly, like ladders laid across a gap.\n\nWe were the fifth team to be tested. The judge, a woman in a hard hat who seemed to find everything slightly funny, hung a bucket from the centre of our bridge and began to add weights. One kilogram. Two. Five. The arch did not even tremble. Kofi grabbed my arm. Eight. Ten. Amira was mouthing numbers to herself.\n\nAt twelve kilograms there was a small, dry crack, like a twig underfoot.\n\nThen the whole bridge folded in on itself, slowly at first and then all at once, and the bucket hit the floor with a crash that echoed round the hall.\n\nNobody said anything. I stared at the heap of sticks that had been six weeks of our lives, and my eyes stung, and I was furious with myself for minding so much.\n\nIt was Amira who knelt down first. She picked up one of the broken pieces and turned it over in her fingers.\n\n'Look,' she said. 'It didn't break in the middle. It broke at the end. Here, where it sat on the table.'\n\nKofi crouched beside her. 'The arch was fine,' he said slowly. 'It was the feet. The feet weren't strong enough.'\n\nThe judge had come over. She was not smiling now. 'That,' she said, 'is exactly what real engineers do. They look at the wreck and ask why.'\n\nWe did not win. A team from Merthyr won with a flat, ugly bridge that held nineteen kilograms. We came eleventh out of fourteen. But on the bus home Kofi was already drawing, in the back of his planner, a new arch with wide, heavy feet, and Amira was doing sums on her hand, and I was thinking about glue.\n\nThe next year we entered again. Our bridge held twenty-three kilograms. It still had the arch. But it stood on the strongest feet in the hall.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 12: The Great Gatsby, Chapter V
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-12',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-12-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_12_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-12-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first two paragraphs, from "The day agreed upon was pouring rain." to "dark signs of sleeplessness beneath his eyes."\n\nList five things these lines tell you about the day of the tea.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                "1. It was pouring with rain.\n2. Gatsby sent a man over to cut the narrator's grass.\n3. The narrator drove into West Egg Village to buy cups, lemons and flowers.\n4. At two o'clock a huge delivery of flowers arrived from Gatsby's house.\n5. Gatsby arrived pale, looking as if he had not slept.",
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'It was pouring with rain; at eleven a man with a lawn-mower came, sent by Gatsby to cut the grass; the narrator had forgotten to ask his Finnish maid to come back; he drove into West Egg Village to find her; he bought cups, lemons and flowers; at two a "greenhouse" of flowers arrived from Gatsby\'s; an hour later Gatsby hurried in; he wore a white flannel suit, silver shirt and gold-coloured tie; he was pale and looked as if he had not slept.',
              ],
            },
          },
          {
            id: 'wjec-c1-12-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "Is everything all right?" to "I went out into the yard."\n\nHow does the writer show that Gatsby is nervous?\n\nSupport your answer with short quotations, and comment on the words the writer chooses.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows Gatsby\'s nerves through his distracted speech and restless actions. He asks "Is everything all right?" "immediately", and when Nick mentions the grass he replies "blankly", "What grass?", forgetting that he arranged for it to be cut. He stumbles over his words, "in the shape of—of tea?", and the dash shows him losing his thread. His "Of course, of course! They’re fine!" is too eager, and the "old sport" added "hollowly" sounds empty. While waiting, he looks at a book "with vacant eyes", is "starting at the Finnish tread", and peers at the windows "as if a series of invisible but alarming happenings were taking place outside", which shows that he is jumpy and imagining dangers. Finally he panics, "Nobody’s coming to tea. It’s too late!", although it is "just two minutes to four", and sits down "miserably, as if I had pushed him".',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'His distracted, broken speech: "What grass?", "in the shape of—of tea?", the hollow "old sport".',
                'His restlessness while waiting: "vacant eyes", "starting at the Finnish tread", peering at the windows.',
                'His panic, "Nobody’s coming to tea. It’s too late!", at "two minutes to four".',
              ],
            },
          },
          {
            id: 'wjec-c1-12-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "Under the dripping bare lilac-trees" to "What’s funny?"\n\nWhat impressions do you get of Daisy in these lines?\n\nSupport your answer with short quotations, and analyse the writer\'s language using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'Daisy seems bright, playful and charming. She arrives with "a bright ecstatic smile", and the adjective "ecstatic" suggests great happiness, perhaps more than the moment needs. Her first words, "Is this absolutely where you live, my dearest one?", are exaggerated and affectionate, showing her love of fun and drama. Her voice is described as "a wild tonic in the rain", a metaphor that makes it seem refreshing and exciting, and its "exhilarating ripple" suggests music. The narrator has to "follow the sound of it" before he hears the words, which shows that her voice is more striking than what she says.\n\nShe is also described as beautiful in a delicate way: "A damp streak of hair lay like a dash of blue paint across her cheek", a simile that makes her look like a painting, and her hand is "wet with glistening drops". She teases Nick, asking "Are you in love with me," or "why did I have to come alone?", which shows that she is curious and perhaps a little nervous. Her "grave murmur", "His name is Ferdie", and her innocent "Why?" are comic, and suggest that she is light-hearted. Overall she seems charming and lively, but the reader may wonder whether this brightness hides nerves of her own.',
              'Grade 8-9':
                'The writer presents Daisy through sound, colour and play, and the impression is of a woman who is enchanting, theatrical and harder to read than she seems.\n\nHer entrance is staged like a picture. The car comes "Under the dripping bare lilac-trees", a damp, wintry frame, and then "It stopped." The short sentence holds the moment before her face appears, "tipped sideways beneath a three-cornered lavender hat", with "a bright ecstatic smile". The adjective "ecstatic" is a strong word for arriving at tea, which suggests a performance of delight, or a delight she cannot quite control.\n\nHer voice dominates. "Is this absolutely where you live, my dearest one?" is playful and exaggerated, the intensifier "absolutely" and the endearment "my dearest one" making a simple question theatrical. The narrator describes the voice as "a wild tonic in the rain", a metaphor of energy and refreshment against the gloom, and its "exhilarating ripple" has to be followed "up and down, with my ear alone, before any words came through", so the music of Daisy matters more than her meaning. The visual detail is painterly: "A damp streak of hair lay like a dash of blue paint across her cheek", a simile that turns her into a work of art, and her hand is "wet with glistening drops".\n\nHer conversation is flirtatious and evasive. "Are you in love with me," she asks, "or why did I have to come alone?", spoken "low in my ear", which teases Nick while hinting that she suspects what the afternoon is for. Her instructions to the chauffeur end in a mock-serious aside, "His name is Ferdie", given "in a grave murmur", and her "innocently" asked "Why?" in reply to Nick\'s joke shows a lightness that may be real or may be practised. The section ends on suspense: the room is "deserted", and her "What’s funny?" leaves her in a moment of innocent puzzlement just before Gatsby\'s entrance. The impression is of a charming, playful Daisy whose brightness the writer lets us admire while wondering what it hides.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'Her bright, theatrical entrance: "a bright ecstatic smile", "Is this absolutely where you live, my dearest one?"',
                'The power of her voice: "a wild tonic in the rain", its "exhilarating ripple".',
                'The painterly image of her beauty: "like a dash of blue paint across her cheek".',
                'Her teasing, playful talk, and the hint that the brightness may hide nerves or knowledge.',
              ],
            },
          },
          {
            id: 'wjec-c1-12-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "She turned her head as there was a light dignified knocking" to "smashed in pieces on the floor."\n\nHow does the writer create tension and drama in these lines?\n\nIn your answer, consider:\n- what happens, and the order in which the writer tells it\n- the words and phrases the writer chooses\n- how these affect the reader.\n\nSupport your answer with references to the text, using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer creates tension by making the meeting awkward and dramatic. Gatsby\'s arrival is surprising: the living-room is empty, and he knocks at the front door. He is "pale as death", a simile that suggests terror, "with his hands plunged like weights in his coat pockets", and he is "glaring tragically into my eyes", which is almost comic but shows how frightened he is. He "stalked by me into the hall, turned sharply as if he were on a wire", a simile that makes him seem stiff and mechanical, like a puppet.\n\nThe writer then uses silence to build suspense. "For half a minute there wasn’t a sound", and Nick hears only "a sort of choking murmur and part of a laugh". Daisy\'s words come "on a clear artificial note", which shows that she is putting on an act. The pause after them "endured horribly", and the adverb "horribly" shows how uncomfortable it is.\n\nInside, the scene becomes almost farcical. Gatsby is "reclining against the mantelpiece in a strained counterfeit of perfect ease", and the word "counterfeit" shows that his calm is fake. His head pushes the clock, which "took this moment to tilt dangerously", and he catches it "with trembling fingers". The clock stands for the time that has passed between them, and its near fall creates a moment of panic: "I think we all believed for a moment that it had smashed in pieces on the floor." Nick\'s own embarrassment, "a deep tropical burn", makes the reader share the awkwardness.',
              'Grade 8-9':
                'The writer turns the long-awaited reunion into a scene of almost unbearable awkwardness, and the tension comes from the gap between what the characters feel and what they manage to show.\n\nGatsby\'s entrance reverses expectation. Instead of waiting inside, he appears at the front door, "pale as death", "glaring tragically into my eyes", and the similes, hands "plunged like weights in his coat pockets" and a body that "turned sharply as if he were on a wire", make him a stiff, tragic puppet. The narrator\'s dry comment, "It wasn’t a bit funny", picks up the word from a moment before and turns comedy into dread. The reader then waits with Nick in the hall, and the writer uses sound to build suspense: "For half a minute there wasn’t a sound", then "a sort of choking murmur and part of a laugh", then Daisy\'s voice "on a clear artificial note". Her line, "I certainly am awfully glad to see you again", is so polite that it sounds false, and the next paragraph opens with a short sentence of pressure: "A pause; it endured horribly."\n\nWhen Nick enters, the scene is a picture of strain. Gatsby, "reclining against the mantelpiece in a strained counterfeit of perfect ease, even of boredom", is acting relaxed, and the paradox of a "strained" ease shows the effort. His "distraught eyes" stare at Daisy, who sits "frightened but graceful, on the edge of a stiff chair", so both are frozen. Then the clock creates the climax. It is "defunct", stopped, and Gatsby\'s head pushes it so that it "took this moment to tilt dangerously"; he catches it "with trembling fingers". The symbolism is clear without being stated: a man who wants to stop time nearly knocks time to the floor. His apology, "I’m sorry about the clock", and Nick\'s helpless "It’s an old clock" show language failing. The final sentence, "I think we all believed for a moment that it had smashed in pieces on the floor", spreads the panic to all three, and to the reader, who feels the near disaster as a sign of how fragile this meeting is.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'Gatsby\'s tragic, stiff entrance: "pale as death", hands "plunged like weights", "as if he were on a wire".',
                'Suspense built through sound and silence: "For half a minute there wasn’t a sound", "a clear artificial note", "A pause; it endured horribly."',
                'The strain of the scene: "a strained counterfeit of perfect ease", Daisy "frightened but graceful".',
                'The near fall of the "defunct" clock as the climax, and the language failing ("I’m sorry about the clock").',
              ],
            },
          },
          {
            id: 'wjec-c1-12-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "We haven’t met for many years" to the end of the extract.\n\n"The meeting between Gatsby and Daisy is more painful than romantic."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about the meeting, in these lines and in the extract as a whole\n- how the writer\'s choices lead you to think and feel this way.\n\nSupport your answer with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_12,
            extractSource: EXTRACT_12_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I agree. In the final lines the meeting is still awkward. Daisy speaks in a voice "as matter-of-fact as it could ever be", as if she is trying to hide her feelings, and Gatsby\'s reply, "Five years next November", is so exact that it "set us all back at least another minute". It shows that he has counted every month, which is romantic, but also uncomfortable. Nick makes "the desperate suggestion" that they help with the tea, and Gatsby gets himself "into a shadow" and watches with "tense, unhappy eyes". Nick makes an excuse to get away "at the first possible moment", which shows how painful the atmosphere is.\n\nThe rest of the extract supports this. Gatsby is "pale as death" before the meeting, he nearly knocks over the clock, and the pause "endured horribly". However, there are romantic moments too. Gatsby has sent "a greenhouse" of flowers, and Daisy arrives with "a bright ecstatic smile". So I think the meeting is mostly painful, but the pain comes from how much they both care.',
              'Grade 8-9':
                'I largely agree, but I would put it differently: the writer makes the meeting painful precisely because it is so romantic, and the pain is the measure of the feeling.\n\nThe final lines keep the awkwardness alive. Daisy\'s line, "We haven’t met for many years", is spoken in a voice "as matter-of-fact as it could ever be", a phrase that suggests effort, as if plainness were a mask. Gatsby\'s answer, "Five years next November", has an "automatic quality": the precise count shows that he has measured every month apart, which is deeply romantic, and yet it "set us all back at least another minute", because it says too much. Nick\'s "desperate suggestion" of tea, and the "welcome confusion of cups and cakes", show that ordinary objects are needed to rescue the scene. The phrase "a certain physical decency established itself" is ironic: what returns is manners, not ease. Gatsby retreats "into a shadow" and watches "with tense, unhappy eyes", and Nick makes an excuse to get away "at the first possible moment".\n\nAcross the extract, romance and pain are tied together. The preparations are lavish to the point of comedy, a man to cut the grass and "a greenhouse" of flowers, signs of a love that has waited for years. Yet Gatsby\'s nervousness is painful to watch: he is "pale", with "dark signs of sleeplessness", he panics at "two minutes to four", and he arrives "pale as death". Daisy\'s arrival is romantic, her voice "a wild tonic in the rain", but the meeting itself is a silence that "endured horribly", and the near fall of the "defunct" clock makes the five lost years almost physical.\n\nSo the meeting is more painful than romantic on the surface, but the writer suggests that here the two cannot be separated. The pain is the romance, seen from the outside by a narrator who can only offer tea.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Painful: Daisy\'s careful, "matter-of-fact" voice; Gatsby\'s "automatic" "Five years next November"; the "desperate suggestion" of tea; his "tense, unhappy eyes"; Nick\'s escape.',
                'Romantic: the flowers, Gatsby\'s years of waiting, Daisy\'s "bright ecstatic smile" and voice "a wild tonic in the rain".',
                'A judgement that weighs pain against romance across the extract and explains how the writer creates it.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-12-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Keep in mind what your writing is for and who will read it. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-12-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Meeting.\n\n(b) Write about a time when you met someone again after a long time apart.\n\n(c) Write a story that begins: "I had practised what I would say a hundred times."\n\n(d) Write a story that ends with these words: "Neither of us said a word, and neither of us needed to."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (c), a story that begins \"I had practised what I would say a hundred times.\" (about 520 words).\n\nI had practised what I would say a hundred times.\n\nI had practised it in the shower, on the walk to school, and in the mirror of the downstairs toilet while Mum knocked on the door asking if I was ill. I had written it down, crossed it out and written it again. By Friday I had a speech that lasted exactly forty-five seconds and contained the words sorry, stupid and best friend, in that order.\n\nJess and I had not spoken for thirty-eight days.\n\nIt had started with something small, the way these things do. She had told Lily Grant something I had told her in secret, about my dad losing his job, and by lunchtime half of Year 9 knew. I had said things back. Worse things. Things about her family that I only knew because she had trusted me. Then we had both stopped talking, and the silence had set hard, like concrete, until it was easier to walk round it than to break it.\n\nOn Friday I saw her at the bus stop.\n\nIt was raining, the fine, steady kind of rain that does not so much fall as hang in the air. Jess was standing under the broken shelter with her hood up, scrolling through her phone, and there was nobody else there. It was now or never. I walked towards her with my forty-five seconds ready in my mouth.\n\n'Jess,' I said.\n\nShe looked up. And every word of my speech left my head at once, like birds leaving a tree.\n\nWe stood there. The rain fell. A bus came, slowed, saw that neither of us was moving and went on again, spraying a puddle over our shoes. Jess looked down at her wet trainers, then at mine, and the corner of her mouth twitched.\n\n'That's the third one I've missed,' she said. 'I was waiting for you.'\n\n'You were waiting for me?'\n\n'I've been waiting for you for about a week.' She pushed her hood back. Her eyes were red, and not from the rain. 'I didn't know how to start.'\n\n'I had a speech,' I admitted. 'It was forty-five seconds long.'\n\n'Was it good?'\n\n'It was brilliant. I can't remember any of it.'\n\nShe laughed then, a proper laugh, and it was such a familiar sound that something in my chest gave way.\n\n'I'm sorry,' we said, at exactly the same moment, and then we laughed again, harder, until an old man walking his dog crossed the road to avoid us.\n\nWe missed two more buses after that. We talked about all of it, the secret and the things I had said and the thirty-eight days, and some of it was hard to say and some of it was hard to hear. But it turned out that you do not need a speech. You only need to start.\n\nWhen the fifth bus came, we got on it together and sat in our old seats at the back, steaming gently, sharing her earphones. I never did find out what my speech would have sounded like. I have never minded.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 13: Animal Farm, Chapter VII
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-13',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-13-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_13_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-13-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read from the start of the extract, "When it was all over", to "Not even a rat had been killed."\n\nList five things these lines tell you about the animals after the meeting.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. They crept away together, apart from the pigs and the dogs.\n2. They were shaken and miserable.\n3. They were shocked by what they had just seen.\n4. They felt it was worse because it was happening among themselves.\n5. Until that day, no animal had killed another since Jones left.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'They crept away in a body; the pigs and dogs did not go with them; they were shaken and miserable; they were shocked by the treachery of those said to have joined Snowball; they were shocked by the cruel punishment they had seen; there had been bloodshed in the old days too; it seemed far worse now that it was among themselves; until that day no animal had killed another since Jones left; not even a rat had been killed.',
              ],
            },
          },
          {
            id: 'wjec-c1-13-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "They had made their way on to the little knoll" to "before retiring for the night."\n\nHow does the writer show Boxer\'s feelings in these lines?\n\nSupport your answer with short quotations, and comment on the words the writer chooses.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows that Boxer is confused and upset, and that he copes in the only way he knows. While the others lie down, "Only Boxer remained on his feet", which makes him stand out. He "fidgeted to and fro, swishing his long black tail against his sides", restless movements that suggest distress, and he utters "a little whinny of surprise", a small, helpless sound from such a huge horse. His words begin "I do not understand it", which shows his bewilderment, and "I would not have believed that such things could happen on our farm" shows his shock. He blames "some fault in ourselves", not the leaders, and his answer is "to work harder". Finally he goes straight to the quarry and drags "two successive loads of stone" to the windmill, so work becomes his way of dealing with feelings he cannot put into words.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'His restlessness: "Only Boxer remained on his feet", "fidgeted to and fro", "a little whinny of surprise".',
                'His bewilderment and shock: "I do not understand it", "I would not have believed".',
                'His self-blame ("some fault in ourselves") and his answer, more work, carried out at once.',
              ],
            },
          },
          {
            id: 'wjec-c1-13-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "The animals huddled about Clover, not speaking." to "though she lacked the words to express them."\n\nHow does the writer show Clover\'s thoughts and feelings in these lines?\n\nSupport your answer with short quotations, and analyse the writer\'s language using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'At first Clover\'s feelings are shown through what she sees. The farm is described lovingly, "the long pasture stretching down to the main road, the hayfield, the spinney, the drinking pool", and the list shows how much there is to love. It is "a clear spring evening", and the hedges are "gilded by the level rays of the sun", which makes the farm look golden and precious. The animals remember "with a kind of surprise" that it is "every inch of it their own property", and the farm has never seemed "so desirable a place". This beauty makes the sadness worse, because "As Clover looked down the hillside her eyes filled with tears."\n\nThe writer then shows her thoughts in a special way: "If she could have spoken her thoughts". This suggests that she cannot put them into words herself. She thinks that "this was not what they had aimed at", and that "These scenes of terror and slaughter" were not what they hoped for. Her dream was of "a society of animals set free from hunger and the whip, all equal", and the memory of protecting "the lost brood of ducklings with her foreleg" shows her gentle, motherly nature. Instead, "no one dared speak his mind" and "fierce, growling dogs roamed everywhere".\n\nYet she stays loyal. She "would remain faithful, work hard, carry out the orders", and the list of verbs shows her obedience. The repetition of "It was not for this" at the end shows her quiet grief, and the last sentence, "Such were her thoughts, though she lacked the words to express them", is very sad: she understands that something has gone wrong, but she cannot say it.',
              'Grade 8-9':
                'The writer gives Clover\'s thoughts and feelings through a voice that speaks for her: grief that cannot be spoken, held inside a loyalty that will not break.\n\nThe paragraph begins with a landscape: the list "the long pasture stretching down to the main road, the hayfield, the spinney, the drinking pool" builds a picture of rich, peaceful country. The light is warm, the hedges "gilded by the level rays of the sun", and the words set between dashes, "every inch of it their own property", hold the pride of the Rebellion inside the sentence like a memory. That beauty is what makes her tears, "her eyes filled with tears", so painful.\n\nThen the writer uses a conditional, "If she could have spoken her thoughts", to give words to an animal who has none. Her thoughts are built on contrast, and they begin with a denial: "this was not what they had aimed at". Her ideal is a society "set free from hunger and the whip", with "the strong protecting the weak", and the writer ties it to a single image from the night of Major\'s speech, the ducklings she sheltered "with her foreleg". The ideal was never abstract for her; it was a gesture of care. Against it comes the present, introduced by "Instead": a time "when no one dared speak his mind, when fierce, growling dogs roamed everywhere". The repeated "when" piles up the fear.\n\nMost moving is her refusal to rebel. "There was no thought of rebellion or disobedience in her mind." She tells herself they are "far better off than they had been in the days of Jones", and the list "remain faithful, work hard, carry out the orders that were given to her, and accept the leadership of Napoleon" shows loyalty as a discipline. But the paragraph ends by breaking against that loyalty: "But still, it was not for this", and again "It was not for this that they had built the windmill". The repetition sounds like the beat of grief. The final sentence, "Such were her thoughts, though she lacked the words to express them", reminds us that the eloquence is the narrator\'s, not hers, and that gap between what she feels and what she can say makes the reader feel her loss sharply.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'The beauty of the farm she sees, "gilded by the level rays of the sun", "every inch of it their own property", which makes her tears more painful.',
                'The conditional "If she could have spoken her thoughts", giving words to an animal who has none.',
                'The contrast between her ideal ("the strong protecting the weak", the ducklings sheltered "with her foreleg") and the present ("no one dared speak his mind").',
                'Her loyalty ("remain faithful, work hard") against her grief ("It was not for this"), and the final sentence about the words she lacks.',
              ],
            },
          },
          {
            id: 'wjec-c1-13-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "At last, feeling this to be in some way a substitute" to "Clearly this song has no longer any purpose."\n\nHow does the writer create tension in these lines?\n\nIn your answer, consider:\n- what happens, and the order in which the writer tells it\n- the words and phrases the writer chooses\n- how these affect the reader.\n\nSupport your answer with references to the text, using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer creates tension by interrupting a moment of shared sadness. The singing begins as "a substitute for the words she was unable to find", and the animals sing "very tunefully, but slowly and mournfully, in a way they had never sung it before". The adverbs "slowly and mournfully" make the song sound like a lament, so the reader feels the animals\' grief.\n\nThen Squealer arrives, "attended by two dogs", and the dogs are a threat even though they do nothing. He has "the air of having something important to say", which makes the reader wait anxiously. His announcement is formal and final: "by a special decree of Comrade Napoleon, \'Beasts of England\' had been abolished", and "From now onwards it was forbidden to sing it." The short paragraph "The animals were taken aback." shows their shock, and Muriel\'s single word, "Why?", is brave and simple.\n\nSquealer\'s answer increases the tension because it sounds reasonable but is chilling. He speaks "stiffly", and says the song is "no longer needed". He mentions "The execution of the traitors this afternoon" calmly, as "the final act", and claims that "that society has now been established". The reader knows from Clover\'s thoughts that this is not true, so his confident words, "Clearly this song has no longer any purpose", make the reader angry and uneasy.',
              'Grade 8-9':
                'The writer creates tension by setting a moment of grief against an announcement that turns grief into disobedience, and the structure moves from long, sorrowful sentences to short, sharp ones.\n\nThe singing is presented tenderly. Clover sings "feeling this to be in some way a substitute for the words she was unable to find", so the song carries all the unspoken thoughts of the paragraph before. The others "took it up", a phrase of quiet solidarity, and the description "very tunefully, but slowly and mournfully, in a way they had never sung it before" changes the song\'s meaning. The anthem of the Rebellion has become a lament.\n\nThe interruption is timed for the greatest effect: "They had just finished singing it for the third time when Squealer, attended by two dogs, approached". The participle "attended" makes the dogs sound like courtiers, but we know what dogs mean on this farm. The phrase "with the air of having something important to say" is gently mocking and ominous at once. Then the language turns official, "by a special decree of Comrade Napoleon", "abolished", "forbidden", the vocabulary of law used to ban a song. The structure tightens: a one-line paragraph, "The animals were taken aback.", and then a single word from Muriel, "Why?", the only open question in the scene.\n\nSquealer\'s reply is the cruellest moment because it is so calm. He speaks "stiffly", and his argument moves in neat steps: the song "was the song of the Rebellion", "the Rebellion is now completed", "The execution of the traitors this afternoon was the final act". He mentions the killings as a full stop in an argument, and then claims that the "better society" the song longed for "has now been established". The adverb in "Clearly this song has no longer any purpose" pretends to an obviousness that the reader, who has just shared Clover\'s thoughts, knows to be false. The tension lies in that gap: the animals are told that their dream has come true at the very moment they have realised it has been lost.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'The mournful singing, "slowly and mournfully, in a way they had never sung it before", set against what follows.',
                'Squealer\'s menacing arrival "attended by two dogs", and the official language of "special decree", "abolished", "forbidden".',
                'The short paragraphs: "The animals were taken aback." and Muriel\'s "Why?"',
                'The calm, false logic of Squealer\'s reply, which mentions the executions as "the final act".',
              ],
            },
          },
          {
            id: 'wjec-c1-13-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read the last paragraph, from "Frightened though they were" to the end of the extract.\n\n"By the end of this extract, the animals have lost everything the Rebellion was meant to give them."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about the animals and the Rebellion, in these lines and in the extract as a whole\n- how the writer\'s choices lead you to think and feel this way.\n\nSupport your answer with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_13,
            extractSource: EXTRACT_13_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I mostly agree. In the final lines the animals cannot even protest. They are "Frightened", and the phrase "might possibly have protested" shows how weak their resistance has become. The sheep\'s "usual bleating" drowns them out, and the word "usual" shows that this happens all the time. The bleating "put an end to the discussion", so the animals have lost the freedom to speak.\n\nAcross the extract, Clover\'s thoughts show what the Rebellion promised: a society "set free from hunger and the whip, all equal", with "the strong protecting the weak". Instead, "no one dared speak his mind" and "fierce, growling dogs roamed everywhere". Their song, which expressed their hopes, is "forbidden". Even the killing they hated under Jones has returned: until that day, "no animal had killed another animal".\n\nHowever, they have not lost everything. The farm is still "their own farm, every inch of it their own property", and Clover believes that they are "far better off than they had been in the days of Jones". So they have lost freedom, equality and safety, but they still have the farm, and perhaps hope, which is why Clover\'s sadness is so painful.',
              'Grade 8-9':
                'I largely agree, but the writer is more careful than the view: the animals have lost what the Rebellion was for, while keeping what it was about, the farm itself, and that is what makes their loss so bitter.\n\nThe final lines show the loss of the most basic freedom, the freedom to object. The opening, "Frightened though they were", admits fear before it admits courage, and the hedged phrase "some of the animals might possibly have protested" piles up uncertainty: "some", "might", "possibly". Resistance has shrunk to a possibility. The sheep then do the work of the dogs. Their "usual bleating" of "Four legs good, two legs bad" is a slogan of the Rebellion used to silence the Rebellion\'s own song, and it "put an end to the discussion". The adjective "usual" tells us that this silencing has become routine.\n\nAcross the extract, the writer measures the loss against the dream. Clover\'s thoughts set out what was meant to be gained, a society "set free from hunger and the whip, all equal, each working according to his capacity, the strong protecting the weak", and what has come instead, a time "when no one dared speak his mind". The principle that "no animal had killed another animal" has been broken. \'Beasts of England\', the song in which they "expressed our longing for a better society", is "abolished" by decree, so even hope cannot be sung. Boxer\'s response, "It must be due to some fault in ourselves", shows the damage reaching their minds: they blame themselves.\n\nYet the writer does not say that they have lost everything. The view from the knoll, "every inch of it their own property", "so desirable a place", reminds us that the land is still theirs, and Clover believes they are "far better off than they had been in the days of Jones". That belief may be true, or it may be the comfort of the powerless. Either way, it is what makes the passage tragic rather than simply bleak: the animals still have the farm they fought for, and have lost the freedom, equality and safety that made it worth having.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Agreement: the protest that only "might possibly" have happened, silenced by the "usual bleating"; the lost ideals in Clover\'s thoughts; the song "abolished"; the killing among themselves.',
                'Disagreement: the farm is still "their own property"; Clover believes they are "far better off than they had been in the days of Jones".',
                'A judgement on what exactly has been lost, drawn from the final lines and the whole extract.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-13-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Keep in mind what your writing is for and who will read it. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-13-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Song.\n\n(b) Write about a time when you realised that things were not as they seemed.\n\n(c) Write a story that begins: "From the top of the hill, you could see the whole village."\n\n(d) Write a story that ends with these words: "For a long time, nobody spoke."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (a), The Song (about 520 words).\n\nIn our family there is a song for car journeys, and nobody can remember where it came from.\n\nIt has four verses and a chorus about a goose who wants to go to the seaside. The tune is not quite any tune you have heard before, the words do not quite make sense, and my dad sings the bass line in a voice so deep that the windows hum. We have sung it on every journey longer than an hour for as long as I can remember: to Gran's in Swansea, to the campsite in Pembrokeshire, to the hospital when my brother Owen broke his arm falling off the garage roof.\n\nWhen I was little, I loved it. When I turned thirteen, I decided that it was the most embarrassing thing that had ever happened to anyone.\n\nI refused to sing. I put my earphones in the moment we pulled out of the drive, and when Dad started the first verse I turned my music up until the goose disappeared. Mum would catch my eye in the mirror, and I would look out of the window as if the motorway were fascinating. Owen sang louder to make up for me. He was always like that.\n\nSo I do not know why I started it, that morning in September.\n\nWe were driving Owen to university. The boot was full of his things: a box of saucepans Mum had bought him, his guitar, a duvet in a bin bag, a lamp shaped like a mushroom that he had owned since he was nine. Owen sat in the front for once, with his knees against the dashboard, and nobody talked much. Dad drove very carefully, the way he drives when he is thinking about something else. The rain came and went. Somewhere past Newport I realised that this was the last time all four of us would be in the car like this, going somewhere together, and that when we drove home his seat would be empty.\n\nI took my earphones out.\n\nI did not decide to sing. It just came out, the first line, in a thin, wobbling voice that did not sound like mine.\n\nThere was a silence. Mum turned round in her seat and stared at me. Then Dad came in underneath with the bass line, so deep that the windows hummed, and Mum joined in with the harmony she always gets slightly wrong, and Owen, who had his face turned to the window, started to sing too, and when he reached the chorus his voice cracked.\n\nWe sang all four verses. Then we sang them again. By the time we reached the city, the goose had been to the seaside eleven times, and we were laughing too much to finish.\n\nWe left Owen in a room that smelled of paint, with his mushroom lamp on the windowsill. He hugged me last, and hardest.\n\nOn the way home his seat was empty, as I had known it would be. But somewhere past Newport, Dad started the first verse, and I sang it with him, all the way home.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 14: The Great Gatsby, Chapter V
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-14',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-14-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_14_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-14-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read the first paragraph, from "Instead of taking the short cut along the Sound" to "bird voices in the trees."\n\nList five things this paragraph tells you about the visit to Gatsby\'s house.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. They went by the road instead of the short cut along the Sound.\n2. They went in by the big postern.\n3. Daisy admired the outline of the house against the sky.\n4. She admired the gardens and the scent of the flowers.\n5. The house was strangely quiet, with only the birds to be heard.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'They did not take the short cut along the Sound; they went down to the road; they entered by the big postern; Daisy murmured in admiration; she admired the castle-like outline against the sky; she admired the gardens; jonquils, hawthorn, plum blossom and kiss-me-at-the-gate were in flower; the house had marble steps; there were no guests in bright dresses; the only sound was birdsong.',
              ],
            },
          },
          {
            id: 'wjec-c1-14-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "And inside, as we wandered" to "from a cupboard in the wall."\n\nHow does the writer make the inside of Gatsby\'s house seem strange?\n\nSupport your answer with short quotations, and comment on the words the writer chooses.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer makes the house seem like a stage set rather than a home. The rooms are named after other times and places, "Marie Antoinette music-rooms and Restoration Salons", so the house seems to borrow its grandeur from history. The narrator imagines "guests concealed behind every couch and table, under orders to be breathlessly silent", which makes the empty rooms seem haunted by the parties, and he even imagines "ghostly laughter" from the owl-eyed man, an eerie, comic touch. The list of rooms, "period bedrooms swathed in rose and lavender silk", "dressing-rooms and poolrooms, and bathrooms with sunken baths", shows that the house is huge and luxurious. Then the strangeness becomes comic: they find "a dishevelled man in pajamas" doing "liver exercises on the floor", a guest who seems to live there. The house feels full of things but oddly unlived in.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'Rooms borrowed from history: "Marie Antoinette music-rooms and Restoration Salons".',
                'The imagined hidden guests and "ghostly laughter", which make the empty house feel haunted.',
                'The long list of luxurious rooms, and the comic surprise of the man in pyjamas doing "liver exercises".',
              ],
            },
          },
          {
            id: 'wjec-c1-14-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "He hadn’t once ceased looking at Daisy" to "running down like an overwound clock."\n\nHow does the writer show Gatsby\'s thoughts and feelings in these lines?\n\nSupport your answer with short quotations, and analyse the writer\'s language using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows that Gatsby is overwhelmed by Daisy\'s presence. He "hadn’t once ceased looking at Daisy", so she is the centre of his attention, and he "revalued everything in his house according to the measure of response it drew from her well-loved eyes". This shows that his possessions matter only because of what she thinks of them. He stares at them "in a dazed way", as if "none of it was any longer real", and he "nearly toppled down a flight of stairs", a detail that shows he is so distracted that he is almost dizzy.\n\nHis feelings change quickly. When Daisy uses his gold brush, he "began to laugh", and he says "hilariously" that "It’s the funniest thing, old sport", but he cannot finish his sentences: "I can’t— When I try to—". The broken speech shows emotions too strong for words. The narrator explains that he "had passed visibly through two states and was entering upon a third": first "embarrassment", then "unreasoning joy", and now he was "consumed with wonder at her presence". The verb "consumed" suggests that wonder has taken him over. Finally, the simile "running down like an overwound clock" shows that, after years of waiting "at an inconceivable pitch of intensity", he is exhausted by having his dream come true.',
              'Grade 8-9':
                'The writer shows Gatsby\'s thoughts and feelings as a series of overwhelming changes, and the language makes his love seem almost a kind of illness: intense, dizzying and exhausting.\n\nThe first paragraph shows a mind entirely turned towards Daisy. He "hadn’t once ceased looking at Daisy", and the narrator\'s insight, that he "revalued everything in his house according to the measure of response it drew from her well-loved eyes", turns his possessions into a currency whose value depends on her. The verb "revalued" belongs to money, which suits a man showing off his wealth to win her. Her presence is "actual and astounding", and the paired adjectives stress both that she is really there and that this astonishes him; beside her, his possessions fade until "none of it was any longer real". The physical detail "Once he nearly toppled down a flight of stairs" shows a man unbalanced by feeling.\n\nThe scene at the dresser makes his emotion visible. Daisy uses the brush "with delight", and Gatsby responds by shading his eyes and laughing, a strange reaction that suggests joy and disbelief at once. His speech breaks down: "It’s the funniest thing, old sport," he says "hilariously", then "I can’t— When I try to—", the dashes showing thoughts that cannot reach the end of a sentence.\n\nThe narrator then steps back to analyse him, and the analysis is shaped like a story in three stages: he "had passed visibly through two states and was entering upon a third". After "embarrassment" and "unreasoning joy" he is "consumed with wonder", the verb suggesting that wonder is eating him up. The explanation is precise: he "had been full of the idea so long, dreamed it right through to the end, waited with his teeth set, so to speak, at an inconceivable pitch of intensity". The phrase "with his teeth set" makes the waiting physical, almost painful. The final simile, "running down like an overwound clock", is the key image. It suggests that he has been wound too tight for too long, and now that the dream has arrived he cannot sustain it, so the reader feels both his happiness and the strain it puts on him.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'His complete attention to Daisy, and his possessions "revalued" by her response.',
                'His sense that "none of it was any longer real", and the near fall on the stairs.',
                'His broken, laughing speech ("I can’t— When I try to—").',
                'The three stages, "embarrassment", "unreasoning joy" and "wonder", and the simile "running down like an overwound clock".',
              ],
            },
          },
          {
            id: 'wjec-c1-14-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "Recovering himself in a minute" to "such beautiful shirts before."\n\nHow does the writer build up to Daisy\'s tears in these lines?\n\nIn your answer, consider:\n- how the writer builds the scene towards its final moment\n- the words and phrases the writer chooses\n- how these affect the reader.\n\nSupport your answer with references to the text, using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer builds up to Daisy\'s tears through Gatsby\'s showing off. He opens "two hulking patent cabinets", and the adjective "hulking" makes them seem huge and heavy. His shirts are "piled like bricks in stacks a dozen high", a simile that makes them sound like building materials rather than clothes, which shows how many he has. His boast, "I’ve got a man in England who buys me clothes", shows his wealth.\n\nThe scene then speeds up. He begins "throwing them, one by one, before us", and the shirts are described in a long list, "shirts of sheer linen and thick silk and fine flannel". As he brings more, "the soft rich heap mounted higher", and a second list of patterns and colours, "stripes and scrolls and plaids in coral and applegreen and lavender and faint orange", piles up like the shirts themselves. The long sentences and lists make the reader feel overwhelmed, as Daisy must.\n\nThen the writer surprises us with a sudden change: "Suddenly, with a strained sound, Daisy bent her head into the shirts and began to cry stormily." The adverb "stormily" makes her crying violent and unexpected. Her words, "They’re such beautiful shirts ... It makes me sad because I’ve never seen such—such beautiful shirts before", sound strange, which makes the reader wonder what she is really crying about.',
              'Grade 8-9':
                'The writer builds up to Daisy\'s tears through a scene of accumulating display, so that her sudden breakdown arrives as both a climax and a mystery.\n\nStructurally, the passage moves from objects to action to emotion. It begins with Gatsby "Recovering himself", so his earlier confusion gives way to performance. The cabinets are "hulking", and the shirts inside are "piled like bricks in stacks a dozen high", a simile that makes clothing sound like the material of a building, solid wealth stacked up. His explanation, "I’ve got a man in England who buys me clothes", is a boast delivered casually, and the detail of a selection "at the beginning of each season, spring and fall" shows a life organised around buying.\n\nThen the display becomes movement. He begins "throwing them, one by one, before us", and the shirts "lost their folds as they fell and covered the table in many colored disarray". The writer piles up lists that mimic the growing heap: first the fabrics, "sheer linen and thick silk and fine flannel", then, as "the soft rich heap mounted higher", the patterns and colours, "stripes and scrolls and plaids in coral and applegreen and lavender and faint orange, with monograms of Indian blue". The repeated "and" and the rich, sensuous words make the sentence itself overflow, so the reader feels the excess as Daisy does.\n\nThe climax breaks the rhythm. "Suddenly, with a strained sound, Daisy bent her head into the shirts and began to cry stormily." The adverb "stormily" is surprising after so much softness, and the image of her face buried in the shirts is intimate and strange. Her explanation is the most puzzling line in the extract: "It makes me sad because I’ve never seen such—such beautiful shirts before." The dash and repetition show her struggling for words, and the reason she gives seems too small for the tears. The reader is left to wonder whether she weeps for the beauty, for the wealth that might have been hers, or for the lost years that the shirts cannot buy back, and that uncertainty is what makes the moment so powerful.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'Structure: from the "hulking" cabinets, to the shirts thrown "one by one", to the heap that "mounted higher", to the sudden tears.',
                'The simile "piled like bricks in stacks a dozen high" and the boast about "a man in England".',
                'The overflowing lists of fabrics and colours.',
                'The surprise of "began to cry stormily" and the puzzling reason Daisy gives.',
              ],
            },
          },
          {
            id: 'wjec-c1-14-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "After the house, we were to see the grounds" to the end of the extract.\n\n"In this extract, Gatsby begins to discover that the real Daisy cannot match his dream of her."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about Gatsby and his dream, in these lines and in the extract as a whole\n- how the writer\'s choices lead you to think and feel this way.\n\nSupport your answer with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_14,
            extractSource: EXTRACT_14_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I agree. In the final lines, Gatsby mentions the green light at the end of Daisy\'s dock, and the narrator suggests that "the colossal significance of that light had now vanished forever". The light was a symbol of his dream: it "had seemed as close as a star to the moon", but "Now it was again a green light on a dock." The short sentence makes the light ordinary again, and the last line, "His count of enchanted objects had diminished by one", suggests that the magic of his dream is beginning to fade now that he has the real Daisy.\n\nEarlier in the extract there are signs of this too. Gatsby looks at his possessions "as though in her actual and astounding presence none of it was any longer real", and he is "running down like an overwound clock", as if the dream has been too much for him. Daisy\'s strange tears over the shirts also show that the real Daisy is more complicated than his idea of her. However, she still puts "her arm through his", so the real Daisy does want him. So I think the writer shows the start of a disappointment rather than the end of his love.',
              'Grade 8-9':
                'I agree, though I think the writer shows it as a loss of enchantment rather than a disappointment in Daisy herself, and the final lines are where this becomes clear.\n\nThe setting turns gloomy. The planned tour of "the grounds and the swimming-pool, and the hydroplane and the midsummer flowers" is cancelled because "it began to rain again", and the three of them stand "in a row looking at the corrugated surface of the Sound". The adjective "corrugated" makes the water hard and grey, like a metal sheet, and the image of three people in a row is oddly flat after the excitement of the shirts. Gatsby\'s remark about "a green light that burns all night at the end of your dock" reveals, almost carelessly, how long he has watched it.\n\nThe final paragraph is the turning point. Daisy puts her arm through his "abruptly", reaching for him, "but he seemed absorbed in what he had just said". The conjunction "but" shows the gap between the real woman beside him and the idea in his mind. The narrator\'s reflection, "Possibly it had occurred to him that the colossal significance of that light had now vanished forever", turns the light into a symbol of longing that only worked at a distance. The comparison "as close as a star to the moon" captures the paradox: from far away, the light seemed near her, but only because she was out of reach. The flat sentence "Now it was again a green light on a dock" strips it of meaning, and the closing line, "His count of enchanted objects had diminished by one", uses the dry language of counting for the loss of magic, as if his dream were a collection now missing a piece.\n\nThe whole extract prepares for this. Gatsby\'s possessions became unreal "in her actual and astounding presence", and he is "running down like an overwound clock", worn out by a dream that has finally arrived. Even Daisy\'s tears over "such beautiful shirts" suggest feelings he cannot fully read. So the real Daisy does not fail him; she is warm, present and reaching for him. What fails is the distance that made her magical, and the writer makes the reader feel, before Gatsby does, that a dream can be harder to hold when it comes true.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Agreement: the green light loses its "colossal significance"; "Now it was again a green light on a dock"; "His count of enchanted objects had diminished by one".',
                'Agreement from the whole extract: possessions that seem unreal, Gatsby "running down like an overwound clock", Daisy\'s puzzling tears.',
                'Qualification: Daisy herself reaches for him ("put her arm through his"); what fades is the enchantment of distance.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-14-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Keep in mind what your writing is for and who will read it. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-14-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) The Present.\n\n(b) Write about a time when you were given something you did not expect.\n\n(c) Write a story that begins: "It was the biggest house I had ever been inside."\n\n(d) Write a story that ends with these words: "I have kept it ever since."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (c), a story that begins \"It was the biggest house I had ever been inside.\" (about 540 words).\n\nIt was the biggest house I had ever been inside. I was only there because of the half-term holiday and my mum's job.\n\nMum cleaned for Mr Ashworth on Tuesdays and Fridays. She had done it for six years, and I had never been allowed to come, because Mr Ashworth was very old and very particular and did not like children. That was what Mum said, anyway. But that half-term my childminder had chickenpox, and there was nobody else, so Mum parked outside a pair of iron gates, turned to me and said, 'Touch nothing. Speak when you're spoken to. And for goodness' sake, Hannah, don't play anything.'\n\nShe meant the piano. I had been learning for three years, and I played everything I saw: the keyboard at school, the one in the doctor's waiting room, the toy piano in the charity shop window. Mum said I could not walk past a set of keys without trying them, like a burglar with door handles.\n\nThe house had eleven bedrooms and a staircase that turned twice before it reached the top. The hallway was cold and smelled of wax. Mum gave me a book and a chair in the kitchen and disappeared upstairs with her bucket.\n\nI lasted forty minutes.\n\nI found the piano in a room at the end of the corridor, a long, dim room with its curtains half closed. It was a grand piano, black and shining, with its lid down, and there was a photograph on top of it in a silver frame: a young woman with dark hair, laughing at the camera, her hands on these same keys.\n\nI did not mean to play. I only lifted the lid to look. But the keys were yellowed and smooth and waiting, and before I knew it I had sat down and was playing the piece I was practising for my grade four exam, very softly, so that nobody upstairs would hear.\n\nI heard the door creak open behind me, and my heart stopped.\n\nMr Ashworth was standing there, leaning on a stick. He was tiny and white-haired, in a cardigan buttoned up wrong, and he was staring at me with an expression I could not read.\n\n'I'm sorry,' I said, jumping up. 'I'm so sorry. I didn't touch anything else.'\n\nHe did not answer. He came slowly into the room and lowered himself into an armchair by the window. Then he pointed his stick at the piano stool.\n\n'Again,' he said. 'From the beginning. Slower in the middle.'\n\nSo I played it again. When I finished, he was looking at the photograph.\n\n'My wife,' he said. 'Margaret. She taught this piece to half the children in the town. Nobody has played that piano since she died.' He was quiet for a moment. 'It has been a very quiet house.'\n\nMum found us there an hour later. She stood in the doorway with her duster, white-faced, ready to apologise. But Mr Ashworth held up his hand.\n\n'Bring her on Fridays,' he said. 'The piano needs the practice.'\n\nI went every Friday for two years. When I passed my grade eight, he gave me the photograph in the silver frame. It stands on my own piano now.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WJEC COMPONENT 1, MOCK 15: Animal Farm, Chapter VIII
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c1-15',
    board: 'WJEC',
    paperNumber: 1,
    title: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    subtitle: 'English Language C700U10-1',
    code: 'C700U10-1',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c1-15-reading',
        title: 'Section A: Reading',
        description: `Read the extract below carefully, then answer all the questions in this section. You are advised to spend about 10 minutes reading the extract and about 50 minutes answering the questions.\n\nSource: ${EXTRACT_15_SOURCE}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c1-15-a1',
            questionNumber: 1,
            label: '01',
            questionText:
              'Read from the start of the extract, "The very next morning the attack came.", to "they were soon driven back."\n\nList five things these lines tell you about the attack.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'retrieval',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                '1. It came the very next morning.\n2. Look-outs brought the news while the animals were at breakfast.\n3. Frederick and his followers came through the five-barred gate.\n4. There were fifteen men, with half a dozen guns between them.\n5. The animals were driven back by the gunfire.',
            },
            markScheme: {
              'How the marks are given': Q01_MARKING,
              'Credit, for example': [
                'It came the next morning; the animals were at breakfast; look-outs brought the news; Frederick and his followers came through the five-barred gate; the animals went out boldly to meet them; there was no easy victory this time; there were fifteen men; they had half a dozen guns; they opened fire within fifty yards; the animals could not face the explosions and pellets; Napoleon and Boxer tried to rally them; they were driven back.',
              ],
            },
          },
          {
            id: 'wjec-c1-15-a2',
            questionNumber: 2,
            label: '02',
            questionText:
              'Read from "A number of them were already wounded." to "Serves you right."\n\nHow does the writer show that the animals are in a desperate position?\n\nSupport your answer with short quotations, and comment on the words the writer chooses.',
            marks: 5,
            suggestedTimeMinutes: 6,
            questionType: 'short-answer',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer shows the animals\' desperation through their retreat and their helplessness. Some are "already wounded", and they "took refuge in the farm buildings", which shows that they are hiding rather than fighting. They "peeped cautiously out from chinks and knot-holes", and the small spaces make them seem trapped. The writer stresses their loss with "The whole of the big pasture, including the windmill, was in the hands of the enemy". Even their leader is helpless: "even Napoleon seemed at a loss", pacing "without a word". Their only hope is outside help, "Wistful glances were sent in the direction of Foxwood", and the adjective "wistful" shows longing. The hope is crushed by the short, cruel message "Serves you right.", which ends the paragraph and leaves them alone.',
            },
            markScheme: {
              'How the marks are given': Q02_MARKING,
              'Credit, for example': [
                'The wounded animals hiding and peeping "out from chinks and knot-holes".',
                'The loss of the pasture and the windmill to "the enemy", and Napoleon "at a loss".',
                'The "Wistful glances" towards Foxwood, crushed by the message "Serves you right."',
              ],
            },
          },
          {
            id: 'wjec-c1-15-a3',
            questionNumber: 3,
            label: '03',
            questionText:
              'Read from "Meanwhile Frederick and his men had halted about the windmill." to "The windmill had ceased to exist!"\n\nHow does the writer show the animals\' thoughts and feelings as the men attack the windmill?\n\nSupport your answer with short quotations, and analyse the writer\'s language using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The animals feel growing dread: "a murmur of dismay went round" when they see the crowbar and the sledge hammer, and the plain sentence "They were going to knock the windmill down." shows what they fear. Napoleon tries to reassure them, "Impossible! ... We have built the walls far too thick for that ... Courage, comrades!", and his exclamations show confidence, or perhaps a refusal to admit danger.\n\nBenjamin\'s reaction is different. He was "watching the movements of the men intently", and he nods "Slowly, and with an air almost of amusement", which suggests that he is not surprised. His words, "I thought so", show that he understands what is happening when the others do not. His warning about "blasting powder" turns the mood to fear: "Terrified, the animals waited." The single adjective at the start of the sentence shows how frightened they are.\n\nThe explosion is told dramatically: "Then there was a deafening roar." The animals "flung themselves flat on their bellies and hid their faces", which shows their terror, while Napoleon alone does not. When they look up, there is "a huge cloud of black smoke" where the windmill had been, and the short final sentence, "The windmill had ceased to exist!", shows their shock and despair.',
              'Grade 8-9':
                'The writer shows the animals\' thoughts and feelings through three contrasting responses, Napoleon\'s confidence, Benjamin\'s knowledge and the crowd\'s terror, and then lets the explosion end all of them at once.\n\nThe section opens with the animals as watchers. They see "a crowbar and a sledge hammer", and "a murmur of dismay went round", the soft noun "murmur" showing fear that has not yet become panic. The flat sentence "They were going to knock the windmill down." states their thought in their own simple terms. Napoleon answers with exclamations, "Impossible!" and "Courage, comrades!", and his claim, "They could not knock it down in a week", is a leader\'s reassurance whose certainty makes the reader suspect that he is wrong.\n\nBenjamin\'s response is the opposite. He watches "intently", he nods "Slowly, and with an air almost of amusement", and the qualifier "almost" makes his amusement grim rather than cheerful. His "I thought so" and his question, "Do you not see what they are doing?", show a mind that understands while others hope, and his precise prediction, "pack blasting powder into that hole", turns vague dread into exact fear.\n\nThe writer then holds the reader in suspense. "Terrified, the animals waited." places the feeling first, before the action, and "It was impossible now to venture out" traps them. The men "running in all directions" warn of what is coming, and the climax is a short sentence of sound: "Then there was a deafening roar." The animals\' reaction, flinging themselves "flat on their bellies" and hiding "their faces", is instinctive and childlike, and the exception, "except Napoleon", hints at his strange separateness. The aftermath is slow: "a huge cloud of black smoke was hanging where the windmill had been", and "Slowly the breeze drifted it away", so the loss is revealed gradually, like a curtain drawn back. The final sentence, "The windmill had ceased to exist!", ends in an exclamation of disbelief, and the formal "ceased to exist" makes the destruction sound total, as if their work had been wiped from the world.',
            },
            markScheme: {
              'How the marks are given': Q03_MARKING,
              'Credit, for example': [
                'The growing dread: "a murmur of dismay went round", "They were going to knock the windmill down."',
                'Napoleon\'s confident exclamations against Benjamin\'s grim understanding ("I thought so", "with an air almost of amusement").',
                'The suspense of "Terrified, the animals waited." and the short sentence "Then there was a deafening roar."',
                'The slow revealing of the loss and the final "The windmill had ceased to exist!"',
              ],
            },
          },
          {
            id: 'wjec-c1-15-a4',
            questionNumber: 4,
            label: '04',
            questionText:
              'Read from "At this sight the animals\' courage returned to them." to "as they forced their way through the thorn hedge."\n\nHow does the writer create tension and drama in these lines?\n\nIn your answer, consider:\n- what happens, and the order in which the writer tells it\n- the words and phrases the writer chooses\n- how these affect the reader.\n\nSupport your answer with references to the text, using the right subject terms.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'analysis',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'The writer creates drama through the animals\' sudden change from fear to fury. "At this sight the animals\' courage returned to them", and their fear is "drowned in their rage against this vile, contemptible act". The adjectives "vile" and "contemptible" show how angry they are. "A mighty cry for vengeance went up", and they "charged forth in a body", so the reader feels their united energy.\n\nThe battle is described as violent and dangerous. The pellets "swept over them like hail", a simile that shows how many there are, and the writer calls it "a savage, bitter battle". The men "fired again and again" and "lashed out with their sticks and their heavy boots". The list of the dead, "A cow, three sheep, and two geese were killed", is stated plainly, which makes it more shocking, and "nearly everyone was wounded".\n\nThen the tension turns as the animals fight back, with Boxer\'s hoofs and the cow\'s horn, and the comic detail of a man who nearly loses his trousers to the dogs. The turning point comes when "the nine dogs of Napoleon\'s own bodyguard" appear "on the men\'s flank, baying ferociously", and "panic overtook them". The men run "for dear life", and the animals chase them "right down to the bottom of the field", so the drama ends in victory.',
              'Grade 8-9':
                'The writer creates tension and drama by turning the animals\' despair into fury and then telling the battle in a rush of violent detail, before releasing it in a rout.\n\nThe paragraph begins with a reversal of feeling. "At this sight the animals\' courage returned to them", and the metaphor of fear "drowned in their rage" shows one emotion overwhelming another. The loaded adjectives in "this vile, contemptible act" are the animals\' judgement, and "A mighty cry for vengeance went up" makes them a single voice. They charge "without waiting for further orders", which shows that this is a rising of the whole farm, not a planned manoeuvre, and the phrase "in a body" stresses their unity.\n\nThe battle is told with brutal honesty. The pellets "swept over them like hail", a simile of something natural and impossible to avoid, and the animals "did not heed" them. The writer\'s verdict, "It was a savage, bitter battle", is blunt. The men "fired again and again" and, at close quarters, "lashed out with their sticks and their heavy boots", so the animals\' courage costs them dearly: "A cow, three sheep, and two geese were killed, and nearly everyone was wounded." The plain list of the dead makes the loss more shocking because it is not dwelt on. Even Napoleon, "directing operations from the rear", has "the tip of his tail chipped by a pellet", a small, ironic detail about where the leader stands.\n\nThe turn comes through structure. "But the men did not go unscathed either" begins a list of the animals\' blows, ending with the dogs who nearly tear off a man\'s trousers, a comic detail that relieves the violence for a moment. Then comes the decisive move: the dogs "whom he had instructed to make a detour under cover of the hedge" appear "suddenly" on "the men\'s flank, baying ferociously". The surprise attack from the side tips the balance, and "panic overtook them". Frederick\'s order "to get out while the going was good" and the image of "the cowardly enemy" running "for dear life" end the drama in triumph, but the reader, who has counted the dead, cannot share that triumph completely.',
            },
            markScheme: {
              'How the marks are given': Q04_MARKING,
              'Credit, for example': [
                'The turn from despair to fury: "drowned in their rage", "A mighty cry for vengeance went up".',
                'The violence told plainly: "swept over them like hail", "a savage, bitter battle", the list of the dead.',
                'The ironic detail of Napoleon "directing operations from the rear".',
                'The turning point of the dogs\' flank attack, "panic overtook them", and the rout of "the cowardly enemy".',
              ],
            },
          },
          {
            id: 'wjec-c1-15-a5',
            questionNumber: 5,
            label: '05',
            questionText:
              'Read from "They had won, but they were weary and bleeding." to the end of the extract.\n\n"Although the animals win the battle, the writer makes the reader feel that they have lost."\n\nHow far do you agree with this view?\n\nIn your answer, consider:\n- what you think and feel about the animals\' victory, in these lines and in the extract as a whole\n- how the writer\'s choices lead you to think and feel this way.\n\nSupport your answer with references to the text.',
            marks: 10,
            suggestedTimeMinutes: 13,
            questionType: 'evaluation',
            extract: EXTRACT_15,
            extractSource: EXTRACT_15_SOURCE,
            modelAnswers: {
              'Grade 6-7':
                'I agree. The final lines begin with "They had won, but they were weary and bleeding", and the word "but" turns the victory straight into suffering. They "limp back", and the sight of their "dead comrades stretched upon the grass" moves some "to tears". At the place where the windmill stood they halt "in sorrowful silence", and the repeated "gone" in "Yes, it was gone; almost the last trace of their labour was gone!" shows their grief. The last sentence of that paragraph, "It was as though the windmill had never been", suggests that all their work has been wiped out.\n\nThe ending adds to this feeling. Squealer, "who had unaccountably been absent during the fighting", comes "skipping towards them, whisking his tail and beaming with satisfaction". His happiness is shocking next to their pain, and the word "unaccountably" suggests that he hid. The "solemn booming of a gun" sounds like a celebration, but the word "solemn" makes it sound more like a funeral. Earlier in the extract, the animals were "driven back", Pilkington sent "Serves you right.", and a cow, three sheep and two geese were killed. So even though they drive the men off, the reader feels that the animals have lost more than they have won.',
              'Grade 8-9':
                'I agree, and I think the writer achieves it by placing the victory and the loss in the same sentences, so that every sign of triumph carries its cost.\n\nThe first sentence of the final lines is built on that contrast: "They had won, but they were weary and bleeding." The conjunction "but" refuses to let the victory stand alone. The verbs that follow are of exhaustion, "limp back", and the image of "their dead comrades stretched upon the grass" turns a battlefield into a place of mourning. They halt "in sorrowful silence" where the windmill "had once stood", and the narrator\'s voice seems to merge with theirs: "Yes, it was gone; almost the last trace of their labour was gone!" The repetition of "gone" and the exclamation sound like the animals\' own grief. The writer then piles up the scale of the loss in short, flat sentences, "Even the foundations were partially destroyed", "This time the stones had vanished too", and finally "It was as though the windmill had never been." Their labour is erased in a single comparison.\n\nThe last paragraph adds a darker irony. Squealer, "who had unaccountably been absent during the fighting", arrives "skipping", "whisking his tail and beaming with satisfaction". The adverb "unaccountably" lets the reader draw the conclusion the animals do not, and the cheerful verbs clash with the bleeding animals around him. The final image, "the solemn booming of a gun", comes from the farm, presumably in celebration, but the adjective "solemn" makes it sound like a funeral salute. The extract ends with the animals hearing their victory announced while they count their dead.\n\nThe whole extract prepares this feeling. The battle began with the animals "driven back", their leader "at a loss", and their neighbour\'s "Serves you right."; even the triumphant charge cost "A cow, three sheep, and two geese". So the reader feels that the animals have lost, though not the battle: they have lost the windmill, their comrades and, through Squealer, the truth about what the day has cost.',
            },
            markScheme: {
              'How the marks are given': Q05_MARKING,
              'Credit, for example': [
                'Agreement: "They had won, but they were weary and bleeding"; the dead "stretched upon the grass"; the windmill "as though the windmill had never been".',
                'Agreement: Squealer, absent from the fighting, "beaming with satisfaction", and the "solemn" gun.',
                'A counter-view is possible (the men are driven off; the farm is still theirs), as long as the judgement is clear and held to.',
              ],
            },
          },
        ],
      },
      {
        id: 'wjec-c1-15-writing',
        title: 'Section B: Writing',
        description:
          'In this section you are assessed on your creative prose writing. Up to 24 marks are given for communication and organisation, and up to 16 for vocabulary, sentence structure, spelling and punctuation. Keep in mind what your writing is for and who will read it. You are advised to spend about 45 minutes on this section: about 10 minutes planning and about 35 minutes writing. Aim for about 450 to 600 words.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'wjec-c1-15-b1',
            questionNumber: 1,
            label: '11',
            questionText:
              'Write one piece, choosing from these four titles:\n\n(a) After the Storm.\n\n(b) Write about a time when you had to start again.\n\n(c) Write a story that begins: "The noise woke everyone in the street."\n\n(d) Write a story that ends with these words: "And we walked home together in the dark."\n\nYour writing may be real or imagined.',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'creative-writing',
            modelAnswers: {
              'Grade 8-9':
                "A model answer to (b), a time when you had to start again (about 540 words).\n\nThe water came into our house on the twenty-third of December, two days before Christmas, while we were asleep.\n\nI was the first to know. I got up for a glass of water at four in the morning, stepped off the bottom stair and found myself up to my ankles in something so cold that I screamed. The hall was a black pool. The Christmas tree stood in it, its lights still on, reflected in the water like a second tree growing upside down.\n\nBy morning the river had come over the bank at the end of our road and into every house on it. The water was knee-deep in our kitchen. Our sofa floated. The presents under the tree, which Mum had wrapped so carefully in gold paper, had turned into soft brown lumps.\n\nWe spent Christmas in my aunt's spare room, the four of us on two mattresses, listening to the rain. Nobody felt like celebrating. Dad kept going out to look at the river, as if he could stop it by staring. Mum smiled too much. My little sister Ella asked, every few hours, whether Father Christmas would know where we were.\n\nWhen the water went down, it left behind a smell I will never forget, of mud and drains and rotting carpet, and a brown line across every wall at exactly the height of my knee. Everything below the line had to go. We carried it out into the front garden: the sofa, the carpets, the kitchen chairs, the bottom shelf of books, my old toy rabbit, swollen and grey. By the end of the week there was a mountain of our lives on the lawn, and the council took it away in two lorries.\n\nFor three months we lived in a caravan in the drive while the house dried out. It was cold and small, and Ella and I shared a bed that folded down from the wall. I hated it at first. Then, slowly, I stopped hating it. In the evenings we played cards by the light of a camping lamp, because the caravan's lights flickered, and Dad taught us a game called Racing Demon, which made Mum laugh so much that she had to lie down. We had never played cards before. We had never had time.\n\nThe builders came in February. They stripped the walls back to the brick and put up new plaster, pale pink and smooth, and the house smelled of paint instead of mud. We chose new carpets, and I was allowed to pick the colour of my room for the first time in my life. I picked yellow, the colour of the camping lamp.\n\nWe moved back on the first warm day of April. That evening, in a kitchen with no chairs yet, we sat on the new floor and ate fish and chips out of the paper. Ella fell asleep with her head in Mum's lap. Dad got out the pack of cards.\n\nThe brown line on the walls has been painted over now. But sometimes, when it rains hard at night, I still go downstairs at four in the morning and check the bottom step. Then I go back up to bed, past the yellow walls, and sleep.",
            },
            markScheme: Q11_MARKING,
          },
        ],
      },
    ],
  },
]
